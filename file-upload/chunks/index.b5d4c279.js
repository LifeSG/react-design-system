import{jsx as e,jsxs as t,Fragment as r}from"react/jsx-runtime";import*as n from"react";import o,{createContext as i,useMemo as a,useRef as s,useReducer as l,useEffect as c,useCallback as d,forwardRef as u,useImperativeHandle as f,Fragment as h,useLayoutEffect as p,useState as g,memo as m,useContext as b,isValidElement as v,createRef as y,cloneElement as x,PureComponent as w,version as $,Children as C,lazy as S,Suspense as D,createElement as k}from"react";import{CloudArrowUpFillIcon as E}from"@lifesg/react-icons/cloud-arrow-up-fill";import _,{css as O,ThemeContext as F,keyframes as T}from"styled-components";import{ExternalIcon as I}from"@lifesg/react-icons/external";import M,{unstable_batchedUpdates as A,createPortal as j,findDOMNode as B}from"react-dom";import{ICircleFillIcon as R}from"@lifesg/react-icons/i-circle-fill";import{useFloatingTree as z,FloatingTree as P,useFloatingNodeId as L,FloatingNode as N,useFloating as H,autoUpdate as W,offset as Y,flip as V,shift as U,limitShift as K,size as q,useClick as G,useDismiss as Q,useHover as Z,useInteractions as X,FloatingPortal as J,FloatingFocusManager as ee,useTransitionStyles as te}from"@floating-ui/react";import{CrossIcon as re}from"@lifesg/react-icons/cross";import{ChevronDownIcon as ne}from"@lifesg/react-icons/chevron-down";import{ChevronLeftIcon as oe}from"@lifesg/react-icons/chevron-left";import{ChevronRightIcon as ie}from"@lifesg/react-icons/chevron-right";import{ArrowRightIcon as ae,PencilIcon as se,EraserIcon as le,SquareIcon as ce,SquareFillIcon as de,SquareTickFillIcon as ue,MinusSquareFillIcon as fe,CrossIcon as he,ChevronDownIcon as pe}from"@lifesg/react-icons";import{ExclamationCircleFillIcon as ge}from"@lifesg/react-icons/exclamation-circle-fill";import{MagnifierIcon as me}from"@lifesg/react-icons/magnifier";import{EyeIcon as be}from"@lifesg/react-icons/eye";import{EyeSlashIcon as ve}from"@lifesg/react-icons/eye-slash";import{ExclamationTriangleIcon as ye}from"@lifesg/react-icons/exclamation-triangle";import{SquareIcon as xe}from"@lifesg/react-icons/square";import{SquareFillIcon as we}from"@lifesg/react-icons/square-fill";import{SquareTickFillIcon as $e}from"@lifesg/react-icons/square-tick-fill";import{TickIcon as Ce}from"@lifesg/react-icons/tick";import{CaretRightIcon as Se}from"@lifesg/react-icons/caret-right";import{MinusSquareFillIcon as De}from"@lifesg/react-icons/minus-square-fill";import{ChevronUpIcon as ke}from"@lifesg/react-icons/chevron-up";import{ArrowRightIcon as Ee}from"@lifesg/react-icons/arrow-right";import{ExclamationTriangleFillIcon as _e}from"@lifesg/react-icons/exclamation-triangle-fill";import{TickCircleFillIcon as Oe}from"@lifesg/react-icons/tick-circle-fill";import{CircleIcon as Fe}from"@lifesg/react-icons/circle";import{CircleDotIcon as Te}from"@lifesg/react-icons/circle-dot";import{BinIcon as Ie}from"@lifesg/react-icons/bin";import{PencilIcon as Me}from"@lifesg/react-icons/pencil";import{DragHandleIcon as Ae}from"@lifesg/react-icons/drag-handle";const je=i({activeId:void 0,setActiveId:()=>{}});var Be="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};function Re(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var ze,Pe={exports:{}},Le={exports:{}},Ne={};var He,We,Ye,Ve,Ue,Ke,qe,Ge,Qe,Ze,Xe,Je,et,tt,rt={};
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function nt(){return We||(We=1,"production"===process.env.NODE_ENV?Le.exports=function(){if(ze)return Ne;ze=1;var e="function"==typeof Symbol&&Symbol.for,t=e?Symbol.for("react.element"):60103,r=e?Symbol.for("react.portal"):60106,n=e?Symbol.for("react.fragment"):60107,o=e?Symbol.for("react.strict_mode"):60108,i=e?Symbol.for("react.profiler"):60114,a=e?Symbol.for("react.provider"):60109,s=e?Symbol.for("react.context"):60110,l=e?Symbol.for("react.async_mode"):60111,c=e?Symbol.for("react.concurrent_mode"):60111,d=e?Symbol.for("react.forward_ref"):60112,u=e?Symbol.for("react.suspense"):60113,f=e?Symbol.for("react.suspense_list"):60120,h=e?Symbol.for("react.memo"):60115,p=e?Symbol.for("react.lazy"):60116,g=e?Symbol.for("react.block"):60121,m=e?Symbol.for("react.fundamental"):60117,b=e?Symbol.for("react.responder"):60118,v=e?Symbol.for("react.scope"):60119;function y(e){if("object"==typeof e&&null!==e){var f=e.$$typeof;switch(f){case t:switch(e=e.type){case l:case c:case n:case i:case o:case u:return e;default:switch(e=e&&e.$$typeof){case s:case d:case p:case h:case a:return e;default:return f}}case r:return f}}}function x(e){return y(e)===c}return Ne.AsyncMode=l,Ne.ConcurrentMode=c,Ne.ContextConsumer=s,Ne.ContextProvider=a,Ne.Element=t,Ne.ForwardRef=d,Ne.Fragment=n,Ne.Lazy=p,Ne.Memo=h,Ne.Portal=r,Ne.Profiler=i,Ne.StrictMode=o,Ne.Suspense=u,Ne.isAsyncMode=function(e){return x(e)||y(e)===l},Ne.isConcurrentMode=x,Ne.isContextConsumer=function(e){return y(e)===s},Ne.isContextProvider=function(e){return y(e)===a},Ne.isElement=function(e){return"object"==typeof e&&null!==e&&e.$$typeof===t},Ne.isForwardRef=function(e){return y(e)===d},Ne.isFragment=function(e){return y(e)===n},Ne.isLazy=function(e){return y(e)===p},Ne.isMemo=function(e){return y(e)===h},Ne.isPortal=function(e){return y(e)===r},Ne.isProfiler=function(e){return y(e)===i},Ne.isStrictMode=function(e){return y(e)===o},Ne.isSuspense=function(e){return y(e)===u},Ne.isValidElementType=function(e){return"string"==typeof e||"function"==typeof e||e===n||e===c||e===i||e===o||e===u||e===f||"object"==typeof e&&null!==e&&(e.$$typeof===p||e.$$typeof===h||e.$$typeof===a||e.$$typeof===s||e.$$typeof===d||e.$$typeof===m||e.$$typeof===b||e.$$typeof===v||e.$$typeof===g)},Ne.typeOf=y,Ne}():Le.exports=(He||(He=1,"production"!==process.env.NODE_ENV&&function(){var e="function"==typeof Symbol&&Symbol.for,t=e?Symbol.for("react.element"):60103,r=e?Symbol.for("react.portal"):60106,n=e?Symbol.for("react.fragment"):60107,o=e?Symbol.for("react.strict_mode"):60108,i=e?Symbol.for("react.profiler"):60114,a=e?Symbol.for("react.provider"):60109,s=e?Symbol.for("react.context"):60110,l=e?Symbol.for("react.async_mode"):60111,c=e?Symbol.for("react.concurrent_mode"):60111,d=e?Symbol.for("react.forward_ref"):60112,u=e?Symbol.for("react.suspense"):60113,f=e?Symbol.for("react.suspense_list"):60120,h=e?Symbol.for("react.memo"):60115,p=e?Symbol.for("react.lazy"):60116,g=e?Symbol.for("react.block"):60121,m=e?Symbol.for("react.fundamental"):60117,b=e?Symbol.for("react.responder"):60118,v=e?Symbol.for("react.scope"):60119;function y(e){if("object"==typeof e&&null!==e){var f=e.$$typeof;switch(f){case t:var g=e.type;switch(g){case l:case c:case n:case i:case o:case u:return g;default:var m=g&&g.$$typeof;switch(m){case s:case d:case p:case h:case a:return m;default:return f}}case r:return f}}}var x=l,w=c,$=s,C=a,S=t,D=d,k=n,E=p,_=h,O=r,F=i,T=o,I=u,M=!1;function A(e){return y(e)===c}rt.AsyncMode=x,rt.ConcurrentMode=w,rt.ContextConsumer=$,rt.ContextProvider=C,rt.Element=S,rt.ForwardRef=D,rt.Fragment=k,rt.Lazy=E,rt.Memo=_,rt.Portal=O,rt.Profiler=F,rt.StrictMode=T,rt.Suspense=I,rt.isAsyncMode=function(e){return M||(M=!0,console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")),A(e)||y(e)===l},rt.isConcurrentMode=A,rt.isContextConsumer=function(e){return y(e)===s},rt.isContextProvider=function(e){return y(e)===a},rt.isElement=function(e){return"object"==typeof e&&null!==e&&e.$$typeof===t},rt.isForwardRef=function(e){return y(e)===d},rt.isFragment=function(e){return y(e)===n},rt.isLazy=function(e){return y(e)===p},rt.isMemo=function(e){return y(e)===h},rt.isPortal=function(e){return y(e)===r},rt.isProfiler=function(e){return y(e)===i},rt.isStrictMode=function(e){return y(e)===o},rt.isSuspense=function(e){return y(e)===u},rt.isValidElementType=function(e){return"string"==typeof e||"function"==typeof e||e===n||e===c||e===i||e===o||e===u||e===f||"object"==typeof e&&null!==e&&(e.$$typeof===p||e.$$typeof===h||e.$$typeof===a||e.$$typeof===s||e.$$typeof===d||e.$$typeof===m||e.$$typeof===b||e.$$typeof===v||e.$$typeof===g)},rt.typeOf=y}()),rt)),Le.exports}
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/function ot(){if(Ve)return Ye;Ve=1;var e=Object.getOwnPropertySymbols,t=Object.prototype.hasOwnProperty,r=Object.prototype.propertyIsEnumerable;return Ye=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},r=0;r<10;r++)t["_"+String.fromCharCode(r)]=r;var n=Object.getOwnPropertyNames(t).map((function(e){return t[e]}));if("0123456789"!==n.join(""))return!1;var o={};return"abcdefghijklmnopqrst".split("").forEach((function(e){o[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},o)).join("")}catch(e){return!1}}()?Object.assign:function(n,o){for(var i,a,s=function(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}(n),l=1;l<arguments.length;l++){for(var c in i=Object(arguments[l]))t.call(i,c)&&(s[c]=i[c]);if(e){a=e(i);for(var d=0;d<a.length;d++)r.call(i,a[d])&&(s[a[d]]=i[a[d]])}}return s},Ye}function it(){if(Ke)return Ue;Ke=1;return Ue="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"}function at(){return Ge?qe:(Ge=1,qe=Function.call.bind(Object.prototype.hasOwnProperty))}if("production"!==process.env.NODE_ENV){var st=nt();Pe.exports=function(){if(Je)return Xe;Je=1;var e=nt(),t=ot(),r=it(),n=at(),o=function(){if(Ze)return Qe;Ze=1;var e=function(){};if("production"!==process.env.NODE_ENV){var t=it(),r={},n=at();e=function(e){var t="Warning: "+e;"undefined"!=typeof console&&console.error(t);try{throw new Error(t)}catch(e){}}}function o(o,i,a,s,l){if("production"!==process.env.NODE_ENV)for(var c in o)if(n(o,c)){var d;try{if("function"!=typeof o[c]){var u=Error((s||"React class")+": "+a+" type `"+c+"` is invalid; it must be a function, usually from the `prop-types` package, but received `"+typeof o[c]+"`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");throw u.name="Invariant Violation",u}d=o[c](i,c,s,a,null,t)}catch(e){d=e}if(!d||d instanceof Error||e((s||"React class")+": type specification of "+a+" `"+c+"` is invalid; the type checker function must return `null` or an `Error` but returned a "+typeof d+". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."),d instanceof Error&&!(d.message in r)){r[d.message]=!0;var f=l?l():"";e("Failed "+a+" type: "+d.message+(null!=f?f:""))}}}return o.resetWarningCache=function(){"production"!==process.env.NODE_ENV&&(r={})},Qe=o}(),i=function(){};function a(){return null}return"production"!==process.env.NODE_ENV&&(i=function(e){var t="Warning: "+e;"undefined"!=typeof console&&console.error(t);try{throw new Error(t)}catch(e){}}),Xe=function(s,l){var c="function"==typeof Symbol&&Symbol.iterator,d="<<anonymous>>",u={array:g("array"),bigint:g("bigint"),bool:g("boolean"),func:g("function"),number:g("number"),object:g("object"),string:g("string"),symbol:g("symbol"),any:p(a),arrayOf:function(e){return p((function(t,n,o,i,a){if("function"!=typeof e)return new h("Property `"+a+"` of component `"+o+"` has invalid PropType notation inside arrayOf.");var s=t[n];if(!Array.isArray(s))return new h("Invalid "+i+" `"+a+"` of type `"+v(s)+"` supplied to `"+o+"`, expected an array.");for(var l=0;l<s.length;l++){var c=e(s,l,o,i,a+"["+l+"]",r);if(c instanceof Error)return c}return null}))},element:p((function(e,t,r,n,o){var i=e[t];return s(i)?null:new h("Invalid "+n+" `"+o+"` of type `"+v(i)+"` supplied to `"+r+"`, expected a single ReactElement.")})),elementType:p((function(t,r,n,o,i){var a=t[r];return e.isValidElementType(a)?null:new h("Invalid "+o+" `"+i+"` of type `"+v(a)+"` supplied to `"+n+"`, expected a single ReactElement type.")})),instanceOf:function(e){return p((function(t,r,n,o,i){if(!(t[r]instanceof e)){var a=e.name||d;return new h("Invalid "+o+" `"+i+"` of type `"+((s=t[r]).constructor&&s.constructor.name?s.constructor.name:d)+"` supplied to `"+n+"`, expected instance of `"+a+"`.")}var s;return null}))},node:p((function(e,t,r,n,o){return b(e[t])?null:new h("Invalid "+n+" `"+o+"` supplied to `"+r+"`, expected a ReactNode.")})),objectOf:function(e){return p((function(t,o,i,a,s){if("function"!=typeof e)return new h("Property `"+s+"` of component `"+i+"` has invalid PropType notation inside objectOf.");var l=t[o],c=v(l);if("object"!==c)return new h("Invalid "+a+" `"+s+"` of type `"+c+"` supplied to `"+i+"`, expected an object.");for(var d in l)if(n(l,d)){var u=e(l,d,i,a,s+"."+d,r);if(u instanceof Error)return u}return null}))},oneOf:function(e){return Array.isArray(e)?p((function(t,r,n,o,i){for(var a=t[r],s=0;s<e.length;s++)if(f(a,e[s]))return null;var l=JSON.stringify(e,(function(e,t){return"symbol"===y(t)?String(t):t}));return new h("Invalid "+o+" `"+i+"` of value `"+String(a)+"` supplied to `"+n+"`, expected one of "+l+".")})):("production"!==process.env.NODE_ENV&&i(arguments.length>1?"Invalid arguments supplied to oneOf, expected an array, got "+arguments.length+" arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z]).":"Invalid argument supplied to oneOf, expected an array."),a)},oneOfType:function(e){if(!Array.isArray(e))return"production"!==process.env.NODE_ENV&&i("Invalid argument supplied to oneOfType, expected an instance of array."),a;for(var t=0;t<e.length;t++){var o=e[t];if("function"!=typeof o)return i("Invalid argument supplied to oneOfType. Expected an array of check functions, but received "+x(o)+" at index "+t+"."),a}return p((function(t,o,i,a,s){for(var l=[],c=0;c<e.length;c++){var d=(0,e[c])(t,o,i,a,s,r);if(null==d)return null;d.data&&n(d.data,"expectedType")&&l.push(d.data.expectedType)}return new h("Invalid "+a+" `"+s+"` supplied to `"+i+"`"+(l.length>0?", expected one of type ["+l.join(", ")+"]":"")+".")}))},shape:function(e){return p((function(t,n,o,i,a){var s=t[n],l=v(s);if("object"!==l)return new h("Invalid "+i+" `"+a+"` of type `"+l+"` supplied to `"+o+"`, expected `object`.");for(var c in e){var d=e[c];if("function"!=typeof d)return m(o,i,a,c,y(d));var u=d(s,c,o,i,a+"."+c,r);if(u)return u}return null}))},exact:function(e){return p((function(o,i,a,s,l){var c=o[i],d=v(c);if("object"!==d)return new h("Invalid "+s+" `"+l+"` of type `"+d+"` supplied to `"+a+"`, expected `object`.");var u=t({},o[i],e);for(var f in u){var p=e[f];if(n(e,f)&&"function"!=typeof p)return m(a,s,l,f,y(p));if(!p)return new h("Invalid "+s+" `"+l+"` key `"+f+"` supplied to `"+a+"`.\nBad object: "+JSON.stringify(o[i],null,"  ")+"\nValid keys: "+JSON.stringify(Object.keys(e),null,"  "));var g=p(c,f,a,s,l+"."+f,r);if(g)return g}return null}))}};function f(e,t){return e===t?0!==e||1/e==1/t:e!=e&&t!=t}function h(e,t){this.message=e,this.data=t&&"object"==typeof t?t:{},this.stack=""}function p(e){if("production"!==process.env.NODE_ENV)var t={},n=0;function o(o,a,s,c,u,f,p){if(c=c||d,f=f||s,p!==r){if(l){var g=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types");throw g.name="Invariant Violation",g}if("production"!==process.env.NODE_ENV&&"undefined"!=typeof console){var m=c+":"+s;!t[m]&&n<3&&(i("You are manually calling a React.PropTypes validation function for the `"+f+"` prop on `"+c+"`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."),t[m]=!0,n++)}}return null==a[s]?o?null===a[s]?new h("The "+u+" `"+f+"` is marked as required in `"+c+"`, but its value is `null`."):new h("The "+u+" `"+f+"` is marked as required in `"+c+"`, but its value is `undefined`."):null:e(a,s,c,u,f)}var a=o.bind(null,!1);return a.isRequired=o.bind(null,!0),a}function g(e){return p((function(t,r,n,o,i,a){var s=t[r];return v(s)!==e?new h("Invalid "+o+" `"+i+"` of type `"+y(s)+"` supplied to `"+n+"`, expected `"+e+"`.",{expectedType:e}):null}))}function m(e,t,r,n,o){return new h((e||"React class")+": "+t+" type `"+r+"."+n+"` is invalid; it must be a function, usually from the `prop-types` package, but received `"+o+"`.")}function b(e){switch(typeof e){case"number":case"string":case"undefined":return!0;case"boolean":return!e;case"object":if(Array.isArray(e))return e.every(b);if(null===e||s(e))return!0;var t=function(e){var t=e&&(c&&e[c]||e["@@iterator"]);if("function"==typeof t)return t}(e);if(!t)return!1;var r,n=t.call(e);if(t!==e.entries){for(;!(r=n.next()).done;)if(!b(r.value))return!1}else for(;!(r=n.next()).done;){var o=r.value;if(o&&!b(o[1]))return!1}return!0;default:return!1}}function v(e){var t=typeof e;return Array.isArray(e)?"array":e instanceof RegExp?"object":function(e,t){return"symbol"===e||!!t&&("Symbol"===t["@@toStringTag"]||"function"==typeof Symbol&&t instanceof Symbol)}(t,e)?"symbol":t}function y(e){if(null==e)return""+e;var t=v(e);if("object"===t){if(e instanceof Date)return"date";if(e instanceof RegExp)return"regexp"}return t}function x(e){var t=y(e);switch(t){case"array":case"object":return"an "+t;case"boolean":case"date":case"regexp":return"a "+t;default:return t}}return h.prototype=Error.prototype,u.checkPropTypes=o,u.resetWarningCache=o.resetWarningCache,u.PropTypes=u,u},Xe}()(st.isElement,!0)}else Pe.exports=function(){if(tt)return et;tt=1;var e=it();function t(){}function r(){}return r.resetWarningCache=t,et=function(){function n(t,r,n,o,i,a){if(a!==e){var s=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw s.name="Invariant Violation",s}}function o(){return n}n.isRequired=n;var i={array:n,bigint:n,bool:n,func:n,number:n,object:n,string:n,symbol:n,any:n,arrayOf:o,element:n,elementType:n,instanceOf:o,node:n,objectOf:o,oneOf:o,oneOfType:o,shape:o,exact:o,checkPropTypes:r,resetWarningCache:t};return i.PropTypes=i,i}}()();var lt=Re(Pe.exports);function ct(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(n=Object.getOwnPropertySymbols(e);o<n.length;o++)t.indexOf(n[o])<0&&Object.prototype.propertyIsEnumerable.call(e,n[o])&&(r[n[o]]=e[n[o]])}return r}function dt(e,t,r,n){return new(r||(r=Promise))((function(o,i){function a(e){try{l(n.next(e))}catch(e){i(e)}}function s(e){try{l(n.throw(e))}catch(e){i(e)}}function l(e){var t;e.done?o(e.value):(t=e.value,t instanceof r?t:new r((function(e){e(t)}))).then(a,s)}l((n=n.apply(e,t||[])).next())}))}function ut(e,t){var r,n,o,i,a={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function s(s){return function(l){return function(s){if(r)throw new TypeError("Generator is already executing.");for(;i&&(i=0,s[0]&&(a=0)),a;)try{if(r=1,n&&(o=2&s[0]?n.return:s[0]?n.throw||((o=n.return)&&o.call(n),0):n.next)&&!(o=o.call(n,s[1])).done)return o;switch(n=0,o&&(s=[2&s[0],o.value]),s[0]){case 0:case 1:o=s;break;case 4:return a.label++,{value:s[1],done:!1};case 5:a.label++,n=s[1],s=[0];continue;case 7:s=a.ops.pop(),a.trys.pop();continue;default:if(!(o=a.trys,(o=o.length>0&&o[o.length-1])||6!==s[0]&&2!==s[0])){a=0;continue}if(3===s[0]&&(!o||s[1]>o[0]&&s[1]<o[3])){a.label=s[1];break}if(6===s[0]&&a.label<o[1]){a.label=o[1],o=s;break}if(o&&a.label<o[2]){a.label=o[2],a.ops.push(s);break}o[2]&&a.ops.pop(),a.trys.pop();continue}s=t.call(e,a)}catch(e){s=[6,e],n=0}finally{r=o=0}if(5&s[0])throw s[1];return{value:s[0]?s[1]:void 0,done:!0}}([s,l])}}}function ft(e,t){var r="function"==typeof Symbol&&e[Symbol.iterator];if(!r)return e;var n,o,i=r.call(e),a=[];try{for(;(void 0===t||t-- >0)&&!(n=i.next()).done;)a.push(n.value)}catch(e){o={error:e}}finally{try{n&&!n.done&&(r=i.return)&&r.call(i)}finally{if(o)throw o.error}}return a}function ht(e,t,r){if(r||2===arguments.length)for(var n,o=0,i=t.length;o<i;o++)!n&&o in t||(n||(n=Array.prototype.slice.call(t,0,o)),n[o]=t[o]);return e.concat(n||Array.prototype.slice.call(t))}"function"==typeof SuppressedError&&SuppressedError;var pt=new Map([["aac","audio/aac"],["abw","application/x-abiword"],["arc","application/x-freearc"],["avif","image/avif"],["avi","video/x-msvideo"],["azw","application/vnd.amazon.ebook"],["bin","application/octet-stream"],["bmp","image/bmp"],["bz","application/x-bzip"],["bz2","application/x-bzip2"],["cda","application/x-cdf"],["csh","application/x-csh"],["css","text/css"],["csv","text/csv"],["doc","application/msword"],["docx","application/vnd.openxmlformats-officedocument.wordprocessingml.document"],["eot","application/vnd.ms-fontobject"],["epub","application/epub+zip"],["gz","application/gzip"],["gif","image/gif"],["heic","image/heic"],["heif","image/heif"],["htm","text/html"],["html","text/html"],["ico","image/vnd.microsoft.icon"],["ics","text/calendar"],["jar","application/java-archive"],["jpeg","image/jpeg"],["jpg","image/jpeg"],["js","text/javascript"],["json","application/json"],["jsonld","application/ld+json"],["mid","audio/midi"],["midi","audio/midi"],["mjs","text/javascript"],["mp3","audio/mpeg"],["mp4","video/mp4"],["mpeg","video/mpeg"],["mpkg","application/vnd.apple.installer+xml"],["odp","application/vnd.oasis.opendocument.presentation"],["ods","application/vnd.oasis.opendocument.spreadsheet"],["odt","application/vnd.oasis.opendocument.text"],["oga","audio/ogg"],["ogv","video/ogg"],["ogx","application/ogg"],["opus","audio/opus"],["otf","font/otf"],["png","image/png"],["pdf","application/pdf"],["php","application/x-httpd-php"],["ppt","application/vnd.ms-powerpoint"],["pptx","application/vnd.openxmlformats-officedocument.presentationml.presentation"],["rar","application/vnd.rar"],["rtf","application/rtf"],["sh","application/x-sh"],["svg","image/svg+xml"],["swf","application/x-shockwave-flash"],["tar","application/x-tar"],["tif","image/tiff"],["tiff","image/tiff"],["ts","video/mp2t"],["ttf","font/ttf"],["txt","text/plain"],["vsd","application/vnd.visio"],["wav","audio/wav"],["weba","audio/webm"],["webm","video/webm"],["webp","image/webp"],["woff","font/woff"],["woff2","font/woff2"],["xhtml","application/xhtml+xml"],["xls","application/vnd.ms-excel"],["xlsx","application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"],["xml","application/xml"],["xul","application/vnd.mozilla.xul+xml"],["zip","application/zip"],["7z","application/x-7z-compressed"],["mkv","video/x-matroska"],["mov","video/quicktime"],["msg","application/vnd.ms-outlook"]]);function gt(e,t){var r=function(e){var t=e.name;if(t&&-1!==t.lastIndexOf(".")&&!e.type){var r=t.split(".").pop().toLowerCase(),n=pt.get(r);n&&Object.defineProperty(e,"type",{value:n,writable:!1,configurable:!1,enumerable:!0})}return e}(e);if("string"!=typeof r.path){var n=e.webkitRelativePath;Object.defineProperty(r,"path",{value:"string"==typeof t?t:"string"==typeof n&&n.length>0?n:e.name,writable:!1,configurable:!1,enumerable:!0})}return r}var mt=[".DS_Store","Thumbs.db"];function bt(e){return"object"==typeof e&&null!==e}function vt(e){return $t(e.target.files).map((function(e){return gt(e)}))}function yt(e){return dt(this,void 0,void 0,(function(){return ut(this,(function(t){switch(t.label){case 0:return[4,Promise.all(e.map((function(e){return e.getFile()})))];case 1:return[2,t.sent().map((function(e){return gt(e)}))]}}))}))}function xt(e,t){return dt(this,void 0,void 0,(function(){var r;return ut(this,(function(n){switch(n.label){case 0:return e.items?(r=$t(e.items).filter((function(e){return"file"===e.kind})),"drop"!==t?[2,r]:[4,Promise.all(r.map(Ct))]):[3,2];case 1:return[2,wt(St(n.sent()))];case 2:return[2,wt($t(e.files).map((function(e){return gt(e)})))]}}))}))}function wt(e){return e.filter((function(e){return-1===mt.indexOf(e.name)}))}function $t(e){if(null===e)return[];for(var t=[],r=0;r<e.length;r++){var n=e[r];t.push(n)}return t}function Ct(e){if("function"!=typeof e.webkitGetAsEntry)return Dt(e);var t=e.webkitGetAsEntry();return t&&t.isDirectory?Et(t):Dt(e)}function St(e){return e.reduce((function(e,t){return ht(ht([],ft(e),!1),ft(Array.isArray(t)?St(t):[t]),!1)}),[])}function Dt(e){var t=e.getAsFile();if(!t)return Promise.reject("".concat(e," is not a File"));var r=gt(t);return Promise.resolve(r)}function kt(e){return dt(this,void 0,void 0,(function(){return ut(this,(function(t){return[2,e.isDirectory?Et(e):_t(e)]}))}))}function Et(e){var t=e.createReader();return new Promise((function(e,r){var n=[];!function o(){var i=this;t.readEntries((function(t){return dt(i,void 0,void 0,(function(){var i,a,s;return ut(this,(function(l){switch(l.label){case 0:if(t.length)return[3,5];l.label=1;case 1:return l.trys.push([1,3,,4]),[4,Promise.all(n)];case 2:return i=l.sent(),e(i),[3,4];case 3:return a=l.sent(),r(a),[3,4];case 4:return[3,6];case 5:s=Promise.all(t.map(kt)),n.push(s),o(),l.label=6;case 6:return[2]}}))}))}),(function(e){r(e)}))}()}))}function _t(e){return dt(this,void 0,void 0,(function(){return ut(this,(function(t){return[2,new Promise((function(t,r){e.file((function(r){var n=gt(r,e.fullPath);t(n)}),(function(e){r(e)}))}))]}))}))}function Ot(e){return function(e){if(Array.isArray(e))return jt(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||At(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function Ft(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function Tt(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?Ft(Object(r),!0).forEach((function(t){It(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):Ft(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function It(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function Mt(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==r)return;var n,o,i=[],a=!0,s=!1;try{for(r=r.call(e);!(a=(n=r.next()).done)&&(i.push(n.value),!t||i.length!==t);a=!0);}catch(e){s=!0,o=e}finally{try{a||null==r.return||r.return()}finally{if(s)throw o}}return i}(e,t)||At(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function At(e,t){if(e){if("string"==typeof e)return jt(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?jt(e,t):void 0}}function jt(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}var Bt=function(e){e=Array.isArray(e)&&1===e.length?e[0]:e;var t=Array.isArray(e)?"one of ".concat(e.join(", ")):e;return{code:"file-invalid-type",message:"File type must be ".concat(t)}},Rt=function(e){return{code:"file-too-large",message:"File is larger than ".concat(e," ").concat(1===e?"byte":"bytes")}},zt=function(e){return{code:"file-too-small",message:"File is smaller than ".concat(e," ").concat(1===e?"byte":"bytes")}},Pt={code:"too-many-files",message:"Too many files"};function Lt(e,t){var r="application/x-moz-file"===e.type||function(e,t){if(e&&t){var r=Array.isArray(t)?t:t.split(","),n=e.name||"",o=(e.type||"").toLowerCase(),i=o.replace(/\/.*$/,"");return r.some((function(e){var t=e.trim().toLowerCase();return"."===t.charAt(0)?n.toLowerCase().endsWith(t):t.endsWith("/*")?i===t.replace(/\/.*$/,""):o===t}))}return!0}(e,t);return[r,r?null:Bt(t)]}function Nt(e,t,r){if(Ht(e.size))if(Ht(t)&&Ht(r)){if(e.size>r)return[!1,Rt(r)];if(e.size<t)return[!1,zt(t)]}else{if(Ht(t)&&e.size<t)return[!1,zt(t)];if(Ht(r)&&e.size>r)return[!1,Rt(r)]}return[!0,null]}function Ht(e){return null!=e}function Wt(e){return"function"==typeof e.isPropagationStopped?e.isPropagationStopped():void 0!==e.cancelBubble&&e.cancelBubble}function Yt(e){return e.dataTransfer?Array.prototype.some.call(e.dataTransfer.types,(function(e){return"Files"===e||"application/x-moz-file"===e})):!!e.target&&!!e.target.files}function Vt(e){e.preventDefault()}function Ut(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];return function(e){for(var r=arguments.length,n=new Array(r>1?r-1:0),o=1;o<r;o++)n[o-1]=arguments[o];return t.some((function(t){return!Wt(e)&&t&&t.apply(void 0,[e].concat(n)),Wt(e)}))}}function Kt(e){return"audio/*"===e||"video/*"===e||"image/*"===e||"text/*"===e||/\w+\/[-+.\w]+/g.test(e)}function qt(e){return/^.*\.[\w]+$/.test(e)}var Gt=["children"],Qt=["open"],Zt=["refKey","role","onKeyDown","onFocus","onBlur","onClick","onDragEnter","onDragOver","onDragLeave","onDrop"],Xt=["refKey","onChange","onClick"];function Jt(e){return function(e){if(Array.isArray(e))return rr(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||tr(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function er(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==r)return;var n,o,i=[],a=!0,s=!1;try{for(r=r.call(e);!(a=(n=r.next()).done)&&(i.push(n.value),!t||i.length!==t);a=!0);}catch(e){s=!0,o=e}finally{try{a||null==r.return||r.return()}finally{if(s)throw o}}return i}(e,t)||tr(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function tr(e,t){if(e){if("string"==typeof e)return rr(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?rr(e,t):void 0}}function rr(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function nr(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function or(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?nr(Object(r),!0).forEach((function(t){ir(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):nr(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function ir(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function ar(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var sr=u((function(e,t){var r=e.children,n=dr(ar(e,Gt)),i=n.open,a=ar(n,Qt);return f(t,(function(){return{open:i}}),[i]),o.createElement(h,null,r(or(or({},a),{},{open:i})))}));sr.displayName="Dropzone";var lr={disabled:!1,getFilesFromEvent:function(e){return dt(this,void 0,void 0,(function(){return ut(this,(function(t){return bt(e)&&bt(e.dataTransfer)?[2,xt(e.dataTransfer,e.type)]:function(e){return bt(e)&&bt(e.target)}(e)?[2,vt(e)]:Array.isArray(e)&&e.every((function(e){return"getFile"in e&&"function"==typeof e.getFile}))?[2,yt(e)]:[2,[]]}))}))},maxSize:1/0,minSize:0,multiple:!0,maxFiles:0,preventDropOnDocument:!0,noClick:!1,noKeyboard:!1,noDrag:!1,noDragEventsBubbling:!1,validator:null,useFsAccessApi:!0,autoFocus:!1};sr.defaultProps=lr,sr.propTypes={children:lt.func,accept:lt.objectOf(lt.arrayOf(lt.string)),multiple:lt.bool,preventDropOnDocument:lt.bool,noClick:lt.bool,noKeyboard:lt.bool,noDrag:lt.bool,noDragEventsBubbling:lt.bool,minSize:lt.number,maxSize:lt.number,maxFiles:lt.number,disabled:lt.bool,getFilesFromEvent:lt.func,onFileDialogCancel:lt.func,onFileDialogOpen:lt.func,useFsAccessApi:lt.bool,autoFocus:lt.bool,onDragEnter:lt.func,onDragLeave:lt.func,onDragOver:lt.func,onDrop:lt.func,onDropAccepted:lt.func,onDropRejected:lt.func,onError:lt.func,validator:lt.func};var cr={isFocused:!1,isFileDialogActive:!1,isDragActive:!1,isDragAccept:!1,isDragReject:!1,acceptedFiles:[],fileRejections:[]};function dr(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=or(or({},lr),e),r=t.accept,n=t.disabled,o=t.getFilesFromEvent,i=t.maxSize,u=t.minSize,f=t.multiple,h=t.maxFiles,p=t.onDragEnter,g=t.onDragLeave,m=t.onDragOver,b=t.onDrop,v=t.onDropAccepted,y=t.onDropRejected,x=t.onFileDialogCancel,w=t.onFileDialogOpen,$=t.useFsAccessApi,C=t.autoFocus,S=t.preventDropOnDocument,D=t.noClick,k=t.noKeyboard,E=t.noDrag,_=t.noDragEventsBubbling,O=t.onError,F=t.validator,T=a((function(){return function(e){if(Ht(e))return Object.entries(e).reduce((function(e,t){var r=Mt(t,2),n=r[0],o=r[1];return[].concat(Ot(e),[n],Ot(o))}),[]).filter((function(e){return Kt(e)||qt(e)})).join(",")}(r)}),[r]),I=a((function(){return function(e){return Ht(e)?[{description:"Files",accept:Object.entries(e).filter((function(e){var t=Mt(e,2),r=t[0],n=t[1],o=!0;return Kt(r)||(console.warn('Skipped "'.concat(r,'" because it is not a valid MIME type. Check https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types/Common_types for a list of valid MIME types.')),o=!1),Array.isArray(n)&&n.every(qt)||(console.warn('Skipped "'.concat(r,'" because an invalid file extension was provided.')),o=!1),o})).reduce((function(e,t){var r=Mt(t,2),n=r[0],o=r[1];return Tt(Tt({},e),{},It({},n,o))}),{})}]:e}(r)}),[r]),M=a((function(){return"function"==typeof w?w:fr}),[w]),A=a((function(){return"function"==typeof x?x:fr}),[x]),j=s(null),B=s(null),R=er(l(ur,cr),2),z=R[0],P=R[1],L=z.isFocused,N=z.isFileDialogActive,H=s("undefined"!=typeof window&&window.isSecureContext&&$&&"showOpenFilePicker"in window),W=function(){!H.current&&N&&setTimeout((function(){B.current&&(B.current.files.length||(P({type:"closeDialog"}),A()))}),300)};c((function(){return window.addEventListener("focus",W,!1),function(){window.removeEventListener("focus",W,!1)}}),[B,N,A,H]);var Y=s([]),V=function(e){j.current&&j.current.contains(e.target)||(e.preventDefault(),Y.current=[])};c((function(){return S&&(document.addEventListener("dragover",Vt,!1),document.addEventListener("drop",V,!1)),function(){S&&(document.removeEventListener("dragover",Vt),document.removeEventListener("drop",V))}}),[j,S]),c((function(){return!n&&C&&j.current&&j.current.focus(),function(){}}),[j,C,n]);var U=d((function(e){O?O(e):console.error(e)}),[O]),K=d((function(e){e.preventDefault(),e.persist(),ae(e),Y.current=[].concat(Jt(Y.current),[e.target]),Yt(e)&&Promise.resolve(o(e)).then((function(t){if(!Wt(e)||_){var r=t.length,n=r>0&&function(e){var t=e.files,r=e.accept,n=e.minSize,o=e.maxSize,i=e.multiple,a=e.maxFiles,s=e.validator;return!(!i&&t.length>1||i&&a>=1&&t.length>a)&&t.every((function(e){var t=Mt(Lt(e,r),1)[0],i=Mt(Nt(e,n,o),1)[0],a=s?s(e):null;return t&&i&&!a}))}({files:t,accept:T,minSize:u,maxSize:i,multiple:f,maxFiles:h,validator:F});P({isDragAccept:n,isDragReject:r>0&&!n,isDragActive:!0,type:"setDraggedFiles"}),p&&p(e)}})).catch((function(e){return U(e)}))}),[o,p,U,_,T,u,i,f,h,F]),q=d((function(e){e.preventDefault(),e.persist(),ae(e);var t=Yt(e);if(t&&e.dataTransfer)try{e.dataTransfer.dropEffect="copy"}catch(e){}return t&&m&&m(e),!1}),[m,_]),G=d((function(e){e.preventDefault(),e.persist(),ae(e);var t=Y.current.filter((function(e){return j.current&&j.current.contains(e)})),r=t.indexOf(e.target);-1!==r&&t.splice(r,1),Y.current=t,t.length>0||(P({type:"setDraggedFiles",isDragActive:!1,isDragAccept:!1,isDragReject:!1}),Yt(e)&&g&&g(e))}),[j,g,_]),Q=d((function(e,t){var r=[],n=[];e.forEach((function(e){var t=er(Lt(e,T),2),o=t[0],a=t[1],s=er(Nt(e,u,i),2),l=s[0],c=s[1],d=F?F(e):null;if(o&&l&&!d)r.push(e);else{var f=[a,c];d&&(f=f.concat(d)),n.push({file:e,errors:f.filter((function(e){return e}))})}})),(!f&&r.length>1||f&&h>=1&&r.length>h)&&(r.forEach((function(e){n.push({file:e,errors:[Pt]})})),r.splice(0)),P({acceptedFiles:r,fileRejections:n,type:"setFiles"}),b&&b(r,n,t),n.length>0&&y&&y(n,t),r.length>0&&v&&v(r,t)}),[P,f,T,u,i,h,b,v,y,F]),Z=d((function(e){e.preventDefault(),e.persist(),ae(e),Y.current=[],Yt(e)&&Promise.resolve(o(e)).then((function(t){Wt(e)&&!_||Q(t,e)})).catch((function(e){return U(e)})),P({type:"reset"})}),[o,Q,U,_]),X=d((function(){if(H.current){P({type:"openDialog"}),M();var e={multiple:f,types:I};window.showOpenFilePicker(e).then((function(e){return o(e)})).then((function(e){Q(e,null),P({type:"closeDialog"})})).catch((function(e){var t;(t=e)instanceof DOMException&&("AbortError"===t.name||t.code===t.ABORT_ERR)?(A(e),P({type:"closeDialog"})):!function(e){return e instanceof DOMException&&("SecurityError"===e.name||e.code===e.SECURITY_ERR)}(e)?U(e):(H.current=!1,B.current?(B.current.value=null,B.current.click()):U(new Error("Cannot open the file picker because the https://developer.mozilla.org/en-US/docs/Web/API/File_System_Access_API is not supported and no <input> was provided.")))}))}else B.current&&(P({type:"openDialog"}),M(),B.current.value=null,B.current.click())}),[P,M,A,$,Q,U,I,f]),J=d((function(e){j.current&&j.current.isEqualNode(e.target)&&(" "!==e.key&&"Enter"!==e.key&&32!==e.keyCode&&13!==e.keyCode||(e.preventDefault(),X()))}),[j,X]),ee=d((function(){P({type:"focus"})}),[]),te=d((function(){P({type:"blur"})}),[]),re=d((function(){D||(!function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:window.navigator.userAgent;return function(e){return-1!==e.indexOf("MSIE")||-1!==e.indexOf("Trident/")}(e)||function(e){return-1!==e.indexOf("Edge/")}(e)}()?X():setTimeout(X,0))}),[D,X]),ne=function(e){return n?null:e},oe=function(e){return k?null:ne(e)},ie=function(e){return E?null:ne(e)},ae=function(e){_&&e.stopPropagation()},se=a((function(){return function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.refKey,r=void 0===t?"ref":t,o=e.role,i=e.onKeyDown,a=e.onFocus,s=e.onBlur,l=e.onClick,c=e.onDragEnter,d=e.onDragOver,u=e.onDragLeave,f=e.onDrop,h=ar(e,Zt);return or(or(ir({onKeyDown:oe(Ut(i,J)),onFocus:oe(Ut(a,ee)),onBlur:oe(Ut(s,te)),onClick:ne(Ut(l,re)),onDragEnter:ie(Ut(c,K)),onDragOver:ie(Ut(d,q)),onDragLeave:ie(Ut(u,G)),onDrop:ie(Ut(f,Z)),role:"string"==typeof o&&""!==o?o:"presentation"},r,j),n||k?{}:{tabIndex:0}),h)}}),[j,J,ee,te,re,K,q,G,Z,k,E,n]),le=d((function(e){e.stopPropagation()}),[]),ce=a((function(){return function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.refKey,r=void 0===t?"ref":t,n=e.onChange,o=e.onClick,i=ar(e,Xt);return or(or({},ir({accept:T,multiple:f,type:"file",style:{display:"none"},onChange:ne(Ut(n,Z)),onClick:ne(Ut(o,le)),tabIndex:-1},r,B)),i)}}),[B,r,f,Z,n]);return or(or({},z),{},{isFocused:L&&!n,getRootProps:se,getInputProps:ce,rootRef:j,inputRef:B,open:ne(X)})}function ur(e,t){switch(t.type){case"focus":return or(or({},e),{},{isFocused:!0});case"blur":return or(or({},e),{},{isFocused:!1});case"openDialog":return or(or({},cr),{},{isFileDialogActive:!0});case"closeDialog":return or(or({},e),{},{isFileDialogActive:!1});case"setDraggedFiles":return or(or({},e),{},{isDragActive:t.isDragActive,isDragAccept:t.isDragAccept,isDragReject:t.isDragReject});case"setFiles":return or(or({},e),{},{acceptedFiles:t.acceptedFiles,fileRejections:t.fileRejections});case"reset":return or({},cr);default:return e}}function fr(){}var hr=Array.isArray,pr="object"==typeof Be&&Be&&Be.Object===Object&&Be,gr=pr,mr="object"==typeof self&&self&&self.Object===Object&&self,br=gr||mr||Function("return this")(),vr=br.Symbol,yr=vr,xr=Object.prototype,wr=xr.hasOwnProperty,$r=xr.toString,Cr=yr?yr.toStringTag:void 0;var Sr=function(e){var t=wr.call(e,Cr),r=e[Cr];try{e[Cr]=void 0;var n=!0}catch(e){}var o=$r.call(e);return n&&(t?e[Cr]=r:delete e[Cr]),o},Dr=Object.prototype.toString;var kr=Sr,Er=function(e){return Dr.call(e)},_r=vr?vr.toStringTag:void 0;var Or=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":_r&&_r in Object(e)?kr(e):Er(e)};var Fr=function(e){return null!=e&&"object"==typeof e},Tr=Or,Ir=Fr;var Mr=function(e){return"symbol"==typeof e||Ir(e)&&"[object Symbol]"==Tr(e)},Ar=hr,jr=Mr,Br=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,Rr=/^\w*$/;var zr=function(e,t){if(Ar(e))return!1;var r=typeof e;return!("number"!=r&&"symbol"!=r&&"boolean"!=r&&null!=e&&!jr(e))||(Rr.test(e)||!Br.test(e)||null!=t&&e in Object(t))};var Pr=function(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)},Lr=Or,Nr=Pr;var Hr,Wr=function(e){if(!Nr(e))return!1;var t=Lr(e);return"[object Function]"==t||"[object GeneratorFunction]"==t||"[object AsyncFunction]"==t||"[object Proxy]"==t},Yr=br["__core-js_shared__"],Vr=(Hr=/[^.]+$/.exec(Yr&&Yr.keys&&Yr.keys.IE_PROTO||""))?"Symbol(src)_1."+Hr:"";var Ur=function(e){return!!Vr&&Vr in e},Kr=Function.prototype.toString;var qr=function(e){if(null!=e){try{return Kr.call(e)}catch(e){}try{return e+""}catch(e){}}return""},Gr=Wr,Qr=Ur,Zr=Pr,Xr=qr,Jr=/^\[object .+?Constructor\]$/,en=Function.prototype,tn=Object.prototype,rn=en.toString,nn=tn.hasOwnProperty,on=RegExp("^"+rn.call(nn).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");var an=function(e,t){return null==e?void 0:e[t]},sn=function(e){return!(!Zr(e)||Qr(e))&&(Gr(e)?on:Jr).test(Xr(e))},ln=an;var cn=function(e,t){var r=ln(e,t);return sn(r)?r:void 0},dn=cn(Object,"create"),un=dn;var fn=function(){this.__data__=un?un(null):{},this.size=0};var hn=function(e){var t=this.has(e)&&delete this.__data__[e];return this.size-=t?1:0,t},pn=dn,gn=Object.prototype.hasOwnProperty;var mn=function(e){var t=this.__data__;if(pn){var r=t[e];return"__lodash_hash_undefined__"===r?void 0:r}return gn.call(t,e)?t[e]:void 0},bn=dn,vn=Object.prototype.hasOwnProperty;var yn=function(e){var t=this.__data__;return bn?void 0!==t[e]:vn.call(t,e)},xn=dn;var wn=function(e,t){var r=this.__data__;return this.size+=this.has(e)?0:1,r[e]=xn&&void 0===t?"__lodash_hash_undefined__":t,this},$n=fn,Cn=hn,Sn=mn,Dn=yn,kn=wn;function En(e){var t=-1,r=null==e?0:e.length;for(this.clear();++t<r;){var n=e[t];this.set(n[0],n[1])}}En.prototype.clear=$n,En.prototype.delete=Cn,En.prototype.get=Sn,En.prototype.has=Dn,En.prototype.set=kn;var _n=En;var On=function(){this.__data__=[],this.size=0};var Fn=function(e,t){return e===t||e!=e&&t!=t},Tn=Fn;var In=function(e,t){for(var r=e.length;r--;)if(Tn(e[r][0],t))return r;return-1},Mn=In,An=Array.prototype.splice;var jn=function(e){var t=this.__data__,r=Mn(t,e);return!(r<0)&&(r==t.length-1?t.pop():An.call(t,r,1),--this.size,!0)},Bn=In;var Rn=function(e){var t=this.__data__,r=Bn(t,e);return r<0?void 0:t[r][1]},zn=In;var Pn=function(e){return zn(this.__data__,e)>-1},Ln=In;var Nn=function(e,t){var r=this.__data__,n=Ln(r,e);return n<0?(++this.size,r.push([e,t])):r[n][1]=t,this},Hn=On,Wn=jn,Yn=Rn,Vn=Pn,Un=Nn;function Kn(e){var t=-1,r=null==e?0:e.length;for(this.clear();++t<r;){var n=e[t];this.set(n[0],n[1])}}Kn.prototype.clear=Hn,Kn.prototype.delete=Wn,Kn.prototype.get=Yn,Kn.prototype.has=Vn,Kn.prototype.set=Un;var qn=Kn,Gn=cn(br,"Map"),Qn=_n,Zn=qn,Xn=Gn;var Jn=function(e){var t=typeof e;return"string"==t||"number"==t||"symbol"==t||"boolean"==t?"__proto__"!==e:null===e};var eo=function(e,t){var r=e.__data__;return Jn(t)?r["string"==typeof t?"string":"hash"]:r.map},to=eo;var ro=function(e){var t=to(this,e).delete(e);return this.size-=t?1:0,t},no=eo;var oo=function(e){return no(this,e).get(e)},io=eo;var ao=function(e){return io(this,e).has(e)},so=eo;var lo=function(e,t){var r=so(this,e),n=r.size;return r.set(e,t),this.size+=r.size==n?0:1,this},co=function(){this.size=0,this.__data__={hash:new Qn,map:new(Xn||Zn),string:new Qn}},uo=ro,fo=oo,ho=ao,po=lo;function go(e){var t=-1,r=null==e?0:e.length;for(this.clear();++t<r;){var n=e[t];this.set(n[0],n[1])}}go.prototype.clear=co,go.prototype.delete=uo,go.prototype.get=fo,go.prototype.has=ho,go.prototype.set=po;var mo=go,bo=mo;function vo(e,t){if("function"!=typeof e||null!=t&&"function"!=typeof t)throw new TypeError("Expected a function");var r=function(){var n=arguments,o=t?t.apply(this,n):n[0],i=r.cache;if(i.has(o))return i.get(o);var a=e.apply(this,n);return r.cache=i.set(o,a)||i,a};return r.cache=new(vo.Cache||bo),r}vo.Cache=bo;var yo=vo;var xo=function(e){var t=yo(e,(function(e){return 500===r.size&&r.clear(),e})),r=t.cache;return t},wo=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,$o=/\\(\\)?/g,Co=xo((function(e){var t=[];return 46===e.charCodeAt(0)&&t.push(""),e.replace(wo,(function(e,r,n,o){t.push(n?o.replace($o,"$1"):r||e)})),t}));var So=function(e,t){for(var r=-1,n=null==e?0:e.length,o=Array(n);++r<n;)o[r]=t(e[r],r,e);return o},Do=hr,ko=Mr,Eo=vr?vr.prototype:void 0,_o=Eo?Eo.toString:void 0;var Oo=function e(t){if("string"==typeof t)return t;if(Do(t))return So(t,e)+"";if(ko(t))return _o?_o.call(t):"";var r=t+"";return"0"==r&&1/t==-1/0?"-0":r},Fo=Oo;var To=hr,Io=zr,Mo=Co,Ao=function(e){return null==e?"":Fo(e)};var jo=function(e,t){return To(e)?e:Io(e,t)?[e]:Mo(Ao(e))},Bo=Mr;var Ro=function(e){if("string"==typeof e||Bo(e))return e;var t=e+"";return"0"==t&&1/e==-1/0?"-0":t},zo=jo,Po=Ro;var Lo=function(e,t){for(var r=0,n=(t=zo(t,e)).length;null!=e&&r<n;)e=e[Po(t[r++])];return r&&r==n?e:void 0},No=Lo;var Ho=function(e,t,r){var n=null==e?void 0:No(e,t);return void 0===n?r:n},Wo=Re(Ho);const Yo=(e,t,r)=>Wo(r,t)||Wo(e,t),Vo=(e,t)=>{const r=t||e.defaultValue;return Wo(e.collections,r)},Uo={collections:{default:{"width-005":.5,"width-010":1,"width-020":2,"width-040":4,solid:"solid"}},defaultValue:"default"},Ko=e=>t=>{var r;const n=t.theme,o=Vo(Uo,null==n?void 0:n.borderScheme);return(null===(r=null==n?void 0:n.overrides)||void 0===r?void 0:r.border)?`${Yo(o,e,n.overrides.border)}px`:`${o[e]}px`},qo={"width-005":Ko("width-005"),"width-010":Ko("width-010"),"width-020":Ko("width-020"),"width-040":Ko("width-040"),solid:(Go="solid",e=>{var t;const r=e.theme,n=Vo(Uo,null==r?void 0:r.borderScheme),o=(null===(t=null==r?void 0:r.overrides)||void 0===t?void 0:t.border)?Yo(n,Go,r.overrides.border):n[Go];return"function"==typeof o?o(e):o})};var Go;const Qo={"brand-10":"#2C0C0B","brand-20":"#4C1513","brand-30":"#6C1D1B","brand-40":"#922825","brand-50":"#BF3431","brand-60":"#F15D5A","brand-70":"#F69491","brand-80":"#FABAB7","brand-90":"#FCD7D2","brand-95":"#FFEBE7","brand-100":"#FFF6F4","primary-10":"#1A122C","primary-20":"#2F1F4D","primary-30":"#422D6E","primary-40":"#5B3D97","primary-50":"#7654BC","primary-60":"#9A82CD","primary-70":"#B7A7D8","primary-80":"#CFC5E5","primary-90":"#E3DDF0","primary-95":"#F0EDF7","primary-100":"#F9F8FC","secondary-10":"#0E1723","secondary-20":"#18293D","secondary-30":"#233A57","secondary-40":"#305078","secondary-50":"#4B6A8F","secondary-60":"#7B91A9","secondary-70":"#A1B1C3","secondary-80":"#C1CBD7","secondary-90":"#DBE1E8","secondary-95":"#EBEFF2","secondary-100":"#F7F8FA","neutral-10":"#161616","neutral-20":"#282828","neutral-30":"#393939","neutral-40":"#4E4E4E","neutral-50":"#686868","neutral-60":"#8E8E8E","neutral-70":"#AFAFB0","neutral-80":"#C7CACA","neutral-90":"#DDE1E2","neutral-95":"#EDEFEF","neutral-100":"#F9F9F9","success-10":"#081A0F","success-20":"#0E2D1B","success-30":"#154126","success-40":"#1C5A34","success-50":"#257645","success-60":"#44A068","success-70":"#64C189","success-80":"#80DCA5","success-90":"#B4ECCB","success-95":"#D5F6E2","success-100":"#EFFCF4","warning-10":"#221302","warning-20":"#3B2204","warning-30":"#543106","warning-40":"#744408","warning-50":"#98590C","warning-60":"#D07A13","warning-70":"#E4A244","warning-80":"#F5C26C","warning-90":"#FADBA6","warning-95":"#FCECD4","warning-100":"#FDF7F0","error-10":"#330505","error-20":"#550808","error-30":"#750C0C","error-40":"#9E130F","error-50":"#CB2213","error-60":"#DE6C6C","error-70":"#E89B9B","error-80":"#EFBEBE","error-90":"#F5D9D9","error-95":"#F9ECEC","error-100":"#FCF7F7","info-10":"#021824","info-20":"#032B3F","info-30":"#053D59","info-40":"#06547B","info-50":"#176E9B","info-60":"#5296BE","info-70":"#82B5DA","info-80":"#ACCFE7","info-90":"#CCE3F1","info-95":"#E3F1F8","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000","primary-inverse":"#FEAB10"},Zo={"brand-10":"#1F1221","brand-20":"#371F3B","brand-30":"#4E2C53","brand-40":"#6B3E73","brand-50":"#8D5197","brand-60":"#FF3399","brand-70":"#FF88C4","brand-80":"#FFB3D9","brand-90":"#FFD4E9","brand-95":"#FFE8F3","brand-100":"#FFF8FC","primary-10":"#1F1221","primary-20":"#371F3B","primary-30":"#4E2C53","primary-40":"#6B3E73","primary-50":"#8D5197","primary-60":"#B07DB7","primary-70":"#C7A3CC","primary-80":"#D9C2DD","primary-90":"#E9DBEB","primary-95":"#F3ECF4","primary-100":"#FAF7FA","secondary-10":"#2D091B","secondary-20":"#4D0F2E","secondary-30":"#6B1540","secondary-40":"#931D58","secondary-50":"#C02673","secondary-60":"#FF409F","secondary-70":"#FF88C4","secondary-80":"#FFB3D9","secondary-90":"#FFD4E9","secondary-95":"#FFE8F3","secondary-100":"#FFF8FC","neutral-10":"#161616","neutral-20":"#282828","neutral-30":"#393939","neutral-40":"#4E4E4E","neutral-50":"#686868","neutral-60":"#8E8E8E","neutral-70":"#AFAFB0","neutral-80":"#C7CACA","neutral-90":"#DDE1E2","neutral-95":"#EDEFEF","neutral-100":"#F9F9F9","success-10":"#081A0F","success-20":"#0E2D1B","success-30":"#154126","success-40":"#1C5A34","success-50":"#257645","success-60":"#44A068","success-70":"#64C189","success-80":"#80DCA5","success-90":"#B4ECCB","success-95":"#D5F6E2","success-100":"#EFFCF4","warning-10":"#221302","warning-20":"#3B2204","warning-30":"#543106","warning-40":"#744408","warning-50":"#98590C","warning-60":"#D07A13","warning-70":"#E4A244","warning-80":"#F5C26C","warning-90":"#FADBA6","warning-95":"#FCECD4","warning-100":"#FDF7F0","error-10":"#330505","error-20":"#550808","error-30":"#750C0C","error-40":"#9E130F","error-50":"#CB2213","error-60":"#DE6C6C","error-70":"#E89B9B","error-80":"#EFBEBE","error-90":"#F5D9D9","error-95":"#F9ECEC","error-100":"#FCF7F7","info-10":"#021824","info-20":"#032B3F","info-30":"#053D59","info-40":"#06547B","info-50":"#176E9B","info-60":"#5296BE","info-70":"#82B5DA","info-80":"#ACCFE7","info-90":"#CCE3F1","info-95":"#E3F1F8","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000","primary-inverse":"#FEAB10"},Xo={"brand-10":"#2C0C0B","brand-20":"#4C1513","brand-30":"#6C1D1B","brand-40":"#922825","brand-50":"#BF3431","brand-60":"#F15D5A","brand-70":"#F69491","brand-80":"#FABAB7","brand-90":"#FCD7D2","brand-95":"#FFEBE7","brand-100":"#FFF6F4","primary-10":"#001731","primary-20":"#002752","primary-30":"#003874","primary-40":"#004D9F","primary-50":"#1768BE","primary-60":"#3C91EC","primary-70":"#6CB4FF","primary-80":"#A5CDFF","primary-90":"#CFE1FE","primary-95":"#E8F0FE","primary-100":"#F7F9FF","secondary-10":"#131529","secondary-20":"#222547","secondary-30":"#2F3565","secondary-40":"#42498B","secondary-50":"#5B62A7","secondary-60":"#858CBD","secondary-70":"#A8ADCF","secondary-80":"#C6C9E0","secondary-90":"#DDDFEC","secondary-95":"#EDEEF5","secondary-100":"#F8F8FB","neutral-10":"#161616","neutral-20":"#282828","neutral-30":"#393939","neutral-40":"#4E4E4E","neutral-50":"#686868","neutral-60":"#8E8E8E","neutral-70":"#AFAFB0","neutral-80":"#C7CACA","neutral-90":"#DDE1E2","neutral-95":"#EDEFEF","neutral-100":"#F9F9F9","success-10":"#081A0F","success-20":"#0E2D1B","success-30":"#154126","success-40":"#1C5A34","success-50":"#257645","success-60":"#44A068","success-70":"#64C189","success-80":"#80DCA5","success-90":"#B4ECCB","success-95":"#D5F6E2","success-100":"#EFFCF4","warning-10":"#221302","warning-20":"#3B2204","warning-30":"#543106","warning-40":"#744408","warning-50":"#98590C","warning-60":"#D07A13","warning-70":"#E4A244","warning-80":"#F5C26C","warning-90":"#FADBA6","warning-95":"#FCECD4","warning-100":"#FDF7F0","error-10":"#330505","error-20":"#550808","error-30":"#750C0C","error-40":"#9E130F","error-50":"#CB2213","error-60":"#DE6C6C","error-70":"#E89B9B","error-80":"#EFBEBE","error-90":"#F5D9D9","error-95":"#F9ECEC","error-100":"#FCF7F7","info-10":"#021824","info-20":"#032B3F","info-30":"#053D59","info-40":"#06547B","info-50":"#176E9B","info-60":"#5296BE","info-70":"#82B5DA","info-80":"#ACCFE7","info-90":"#CCE3F1","info-95":"#E3F1F8","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000","primary-inverse":"#FEAB10"},Jo={"brand-10":"#2C0C0B","brand-20":"#4C1513","brand-30":"#6C1D1B","brand-40":"#922825","brand-50":"#BF3431","brand-60":"#F15D5A","brand-70":"#F69491","brand-80":"#FABAB7","brand-90":"#FCD7D2","brand-95":"#FFEBE7","brand-100":"#FFF6F4","primary-10":"#0011924","primary-20":"#032B40","primary-30":"#043D5A","primary-40":"#05547B","primary-50":"#096EA1","primary-60":"#2098D3","primary-70":"#5CB9E8","primary-80":"#8BD3F6","primary-90":"#BEE6FA","primary-95":"#E2F2FA","primary-100":"#F4FAFC","secondary-10":"#131529","secondary-20":"#222547","secondary-30":"#2F3565","secondary-40":"#42498B","secondary-50":"#5B62A7","secondary-60":"#858CBD","secondary-70":"#A8ADCF","secondary-80":"#C6C9E0","secondary-90":"#DDDFEC","secondary-95":"#EDEEF5","secondary-100":"#F8F8FB","neutral-10":"#161616","neutral-20":"#282828","neutral-30":"#393939","neutral-40":"#4E4E4E","neutral-50":"#686868","neutral-60":"#8E8E8E","neutral-70":"#AFAFB0","neutral-80":"#C7CACA","neutral-90":"#DDE1E2","neutral-95":"#EDEFEF","neutral-100":"#F9F9F9","success-10":"#081A0F","success-20":"#0E2D1B","success-30":"#154126","success-40":"#1C5A34","success-50":"#257645","success-60":"#44A068","success-70":"#64C189","success-80":"#80DCA5","success-90":"#B4ECCB","success-95":"#D5F6E2","success-100":"#EFFCF4","warning-10":"#221302","warning-20":"#3B2204","warning-30":"#543106","warning-40":"#744408","warning-50":"#98590C","warning-60":"#D07A13","warning-70":"#E4A244","warning-80":"#F5C26C","warning-90":"#FADBA6","warning-95":"#FCECD4","warning-100":"#FDF7F0","error-10":"#330505","error-20":"#550808","error-30":"#750C0C","error-40":"#9E130F","error-50":"#CB2213","error-60":"#DE6C6C","error-70":"#E89B9B","error-80":"#EFBEBE","error-90":"#F5D9D9","error-95":"#F9ECEC","error-100":"#FCF7F7","info-10":"#021824","info-20":"#032B3F","info-30":"#053D59","info-40":"#06547B","info-50":"#176E9B","info-60":"#5296BE","info-70":"#82B5DA","info-80":"#ACCFE7","info-90":"#CCE3F1","info-95":"#E3F1F8","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000","primary-inverse":"#FEAB10"},ei={"brand-10":"#001A19","brand-20":"#002D2B","brand-30":"#00413D","brand-40":"#005954","brand-50":"#00756F","brand-60":"#03A098","brand-70":"#55BFBA","brand-80":"#92D6D2","brand-90":"#BFE7E5","brand-95":"#DDF2F1","brand-100":"#F4FBFA","primary-10":"#09191D","primary-20":"#102B34","primary-30":"#173D49","primary-40":"#205666","primary-50":"#2A7086","primary-60":"#5D97A9","primary-70":"#8CB6C2","primary-80":"#B2CED6","primary-90":"#D1E2E7","primary-95":"#E8F0F3","primary-100":"#F7FAFB","secondary-10":"#001731","secondary-20":"#002752","secondary-30":"#003874","secondary-40":"#004D9F","secondary-50":"#5B62A7","secondary-60":"#858CBD","secondary-70":"#A8ADCF","secondary-80":"#C6C9E0","secondary-90":"#DDDFEC","secondary-95":"#EDEEF5","secondary-100":"#F8F8FB","neutral-10":"#161616","neutral-20":"#282828","neutral-30":"#393939","neutral-40":"#4E4E4E","neutral-50":"#686868","neutral-60":"#8E8E8E","neutral-70":"#AFAFB0","neutral-80":"#C7CACA","neutral-90":"#DDE1E2","neutral-95":"#EDEFEF","neutral-100":"#F9F9F9","success-10":"#081A0F","success-20":"#0E2D1B","success-30":"#154126","success-40":"#1C5A34","success-50":"#257645","success-60":"#44A068","success-70":"#64C189","success-80":"#80DCA5","success-90":"#B4ECCB","success-95":"#D5F6E2","success-100":"#EFFCF4","warning-10":"#221302","warning-20":"#3B2204","warning-30":"#543106","warning-40":"#744408","warning-50":"#98590C","warning-60":"#D07A13","warning-70":"#E4A244","warning-80":"#F5C26C","warning-90":"#FADBA6","warning-95":"#FCECD4","warning-100":"#FDF7F0","error-10":"#330505","error-20":"#550808","error-30":"#750C0C","error-40":"#9E130F","error-50":"#CB2213","error-60":"#DE6C6C","error-70":"#E89B9B","error-80":"#EFBEBE","error-90":"#F5D9D9","error-95":"#F9ECEC","error-100":"#FCF7F7","info-10":"#021824","info-20":"#032B3F","info-30":"#053D59","info-40":"#06547B","info-50":"#176E9B","info-60":"#5296BE","info-70":"#82B5DA","info-80":"#ACCFE7","info-90":"#CCE3F1","info-95":"#E3F1F8","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000","primary-inverse":"#FEAB10"},ti={"brand-10":"#881317","brand-20":"#B5191E","brand-30":"#B5040A","brand-40":"#D0333F","brand-50":"#DC666F","brand-60":"#E28087","brand-70":"#E7999F","brand-80":"#EDB3B7","brand-90":"#F3CCCF","brand-95":"#F9E6E7","brand-100":"#FCF2F3","primary-10":"#000000","primary-20":"#191919","primary-30":"#333333","primary-40":"#4D4D4D","primary-50":"#666666","primary-60":"#808080","primary-70":"#999999","primary-80":"#B3B3B3","primary-90":"#E6E6E6","primary-95":"#F7F7F7","primary-100":"#FFFFFF","secondary-10":"#19151D","secondary-20":"#2B2533","secondary-30":"#3E3649","secondary-40":"#564A64","secondary-50":"#6F637D","secondary-60":"#948B9F","secondary-70":"#B3ACBB","secondary-80":"#CCC8D2","secondary-90":"#E1DEE4","secondary-95":"#EFEEF1","secondary-100":"#F9F8F9","neutral-10":"#000000","neutral-20":"#191919","neutral-30":"#333333","neutral-40":"#4D4D4D","neutral-50":"#666666","neutral-60":"#808080","neutral-70":"#999999","neutral-80":"#B3B3B3","neutral-90":"#E6E6E6","neutral-95":"#F7F7F7","neutral-100":"#FFFFFF","success-10":"#081A0F","success-20":"#0E2D1B","success-30":"#154126","success-40":"#1C5A34","success-50":"#257645","success-60":"#44A068","success-70":"#64C189","success-80":"#80DCA5","success-90":"#B4ECCB","success-95":"#D5F6E2","success-100":"#EFFCF4","warning-10":"#221302","warning-20":"#3B2204","warning-30":"#543106","warning-40":"#744408","warning-50":"#98590C","warning-60":"#D07A13","warning-70":"#E4A244","warning-80":"#F5C26C","warning-90":"#FADBA6","warning-95":"#FCECD4","warning-100":"#FDF7F0","error-10":"#330505","error-20":"#550808","error-30":"#750C0C","error-40":"#9E130F","error-50":"#CB2213","error-60":"#DE6C6C","error-70":"#E89B9B","error-80":"#EFBEBE","error-90":"#F5D9D9","error-95":"#F9ECEC","error-100":"#FCF7F7","info-10":"#021824","info-20":"#032B3F","info-30":"#053D59","info-40":"#06547B","info-50":"#176E9B","info-60":"#5296BE","info-70":"#82B5DA","info-80":"#ACCFE7","info-90":"#CCE3F1","info-95":"#E3F1F8","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000","primary-inverse":"#FEAB10"},ri={"brand-10":"#0E123A","brand-20":"#191E65","brand-30":"#232B90","brand-40":"#303BC5","brand-50":"#494CFF","brand-60":"#AD6EFF","brand-70":"#AEA4FF","brand-80":"#C5C4FF","brand-90":"#DDDCFF","brand-95":"#EDECFF","brand-100":"#F8F8FF","primary-10":"#10152B","primary-20":"#1C254B","primary-30":"#28356C","primary-40":"#38489A","primary-50":"#4D5AD7","primary-60":"#7487F2","primary-70":"#9AAAFC","primary-80":"#BDC7FD","primary-90":"#DADFFB","primary-95":"#ECEEFE","primary-100":"#F7F8FF","secondary-10":"#19151D","secondary-20":"#2B2533","secondary-30":"#3E3649","secondary-40":"#564A64","secondary-50":"#6F637D","secondary-60":"#948B9F","secondary-70":"#B3ACBB","secondary-80":"#CCC8D2","secondary-90":"#E1DEE4","secondary-95":"#EFEEF1","secondary-100":"#F9F8F9","neutral-10":"#161616","neutral-20":"#282828","neutral-30":"#393939","neutral-40":"#4E4E4E","neutral-50":"#686868","neutral-60":"#8E8E8E","neutral-70":"#AFAFB0","neutral-80":"#C7CACA","neutral-90":"#DDE1E2","neutral-95":"#EDEFEF","neutral-100":"#F9F9F9","success-10":"#081A0F","success-20":"#0E2D1B","success-30":"#154126","success-40":"#1C5A34","success-50":"#257645","success-60":"#44A068","success-70":"#64C189","success-80":"#80DCA5","success-90":"#B4ECCB","success-95":"#D5F6E2","success-100":"#EFFCF4","warning-10":"#221302","warning-20":"#3B2204","warning-30":"#543106","warning-40":"#744408","warning-50":"#98590C","warning-60":"#D07A13","warning-70":"#E4A244","warning-80":"#F5C26C","warning-90":"#FADBA6","warning-95":"#FCECD4","warning-100":"#FDF7F0","error-10":"#330505","error-20":"#550808","error-30":"#750C0C","error-40":"#9E130F","error-50":"#CB2213","error-60":"#DE6C6C","error-70":"#E89B9B","error-80":"#EFBEBE","error-90":"#F5D9D9","error-95":"#F9ECEC","error-100":"#FCF7F7","info-10":"#021824","info-20":"#032B3F","info-30":"#053D59","info-40":"#06547B","info-50":"#176E9B","info-60":"#5296BE","info-70":"#82B5DA","info-80":"#ACCFE7","info-90":"#CCE3F1","info-95":"#E3F1F8","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000","primary-inverse":"#FEAB10"},ni={"brand-10":"#170F39","brand-20":"#281C62","brand-30":"#38268B","brand-40":"#4D34BF","brand-50":"#5735DF","brand-60":"#9986F9","brand-70":"#B2A5F8","brand-80":"#CDC2FA","brand-90":"#E2DCFC","brand-95":"#EFEDFE","brand-100":"#FAF8FD","primary-10":"#170F39","primary-20":"#281C62","primary-30":"#38268B","primary-40":"#4D34BF","primary-50":"#5735DF","primary-60":"#9986F9","primary-70":"#B2A5F8","primary-80":"#CDC2FA","primary-90":"#E2DCFC","primary-95":"#EFEDFE","primary-100":"#FAF8FD","secondary-10":"#251204","secondary-20":"#401F08","secondary-30":"#5B2C0B","secondary-40":"#7E3D0F","secondary-50":"#B04900","secondary-60":"#E26E1C","secondary-70":"#FF9445","secondary-80":"#FFBB8E","secondary-90":"#FFD9BF","secondary-95":"#FFECDF","secondary-100":"#FFF8F3","neutral-10":"#161616","neutral-20":"#282828","neutral-30":"#393939","neutral-40":"#4E4E4E","neutral-50":"#686868","neutral-60":"#8E8E8E","neutral-70":"#AFAFB0","neutral-80":"#C7CACA","neutral-90":"#DDE1E2","neutral-95":"#EDEFEF","neutral-100":"#F9F9F9","success-10":"#031B15","success-20":"#082D24","success-30":"#094134","success-40":"#0D5947","success-50":"#10755E","success-60":"#16A181","success-70":"#1EC59D","success-80":"#6FDDC2","success-90":"#AFECDE","success-95":"#D5F5ED","success-100":"#F1FCF9","warning-10":"#1F1500","warning-20":"#362500","warning-30":"#4D3501","warning-40":"#6A4801","warning-50":"#8B6001","warning-60":"#BF8301","warning-70":"#EAA102","warning-80":"#FFBF34","warning-90":"#FFDC8F","warning-95":"#FFEDC7","warning-100":"#FFF8EA","error-10":"#270F10","error-20":"#441B1B","error-30":"#612627","error-40":"#853535","error-50":"#AF4546","error-60":"#EC6162","error-70":"#F29696","error-80":"#F7BBBC","error-90":"#FAD8D8","error-95":"#FCEAEA","error-100":"#FEF7F7","info-10":"#0F1627","info-20":"#1B2745","info-30":"#273763","info-40":"#354D88","info-50":"#4665B3","info-60":"#618AF6","info-70":"#8DADFF","info-80":"#B4C9FF","info-90":"#D3DFFF","info-95":"#E9EFFF","info-100":"#F5F8FF",white:"#FFFFFF",black:"#000000","primary-inverse":"#FEAB10"},oi={"brand-10":"#0E113C","brand-20":"#191E67","brand-30":"#232A92","brand-40":"#233FC2","brand-50":"#135CEA","brand-60":"#378FFB","brand-70":"#71B3FD","brand-80":"#9DCFFE","brand-90":"#C1E5FF","brand-95":"#DCF1FF","brand-100":"#F3FAFF","primary-10":"#0E113C","primary-20":"#191E67","primary-30":"#232A92","primary-40":"#233FC2","primary-50":"#135CEA","primary-60":"#378FFB","primary-70":"#71B3FD","primary-80":"#9DCFFE","primary-90":"#C1E5FF","primary-95":"#DCF1FF","primary-100":"#F3FAFF","secondary-10":"#34001F","secondary-20":"#540033","secondary-30":"#730045","secondary-40":"#9D0054","secondary-50":"#C61C64","secondary-60":"#DE6792","secondary-70":"#EB96B6","secondary-80":"#F5BAD2","secondary-90":"#FCD5E3","secondary-95":"#FDEBF1","secondary-100":"#FDF6F9","neutral-10":"#161616","neutral-20":"#282828","neutral-30":"#393939","neutral-40":"#4E4E4E","neutral-50":"#686868","neutral-60":"#8E8E8E","neutral-70":"#AFAFB0","neutral-80":"#C7CACA","neutral-90":"#DDE1E2","neutral-95":"#EDEFEF","neutral-100":"#F9F9F9","success-10":"#081A0F","success-20":"#0E2D1B","success-30":"#154126","success-40":"#1C5A34","success-50":"#257645","success-60":"#44A068","success-70":"#64C189","success-80":"#80DCA5","success-90":"#B4ECCB","success-95":"#D5F6E2","success-100":"#EFFCF4","warning-10":"#221302","warning-20":"#3B2204","warning-30":"#543106","warning-40":"#744408","warning-50":"#98590C","warning-60":"#D07A13","warning-70":"#E4A244","warning-80":"#F5C26C","warning-90":"#FADBA6","warning-95":"#FCECD4","warning-100":"#FDF7F0","error-10":"#330505","error-20":"#550808","error-30":"#750C0C","error-40":"#9E130F","error-50":"#CB2213","error-60":"#DE6C6C","error-70":"#E89B9B","error-80":"#EFBEBE","error-90":"#F5D9D9","error-95":"#F9ECEC","error-100":"#FCF7F7","info-10":"#021824","info-20":"#032B3F","info-30":"#053D59","info-40":"#06547B","info-50":"#176E9B","info-60":"#5296BE","info-70":"#82B5DA","info-80":"#ACCFE7","info-90":"#CCE3F1","info-95":"#E3F1F8","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000","primary-inverse":"#FEAB10"},ii={collections:{lifesg:Xo,bookingsg:Qo,rbs:ri,mylegacy:Jo,ccube:Zo,oneservice:ei,pa:ti,a11yplayground:ni,supportgowhere:oi},defaultValue:"lifesg"},ai={collections:{lifesg:Xo,bookingsg:Qo,rbs:ri,mylegacy:Jo,ccube:Zo,oneservice:ei,pa:ti,a11yplayground:ni,supportgowhere:oi},defaultValue:"lifesg"},si=e=>t=>{var r;const n=t.theme,o="dark"===(null==n?void 0:n.colourMode),i=Vo(o?ai:ii,null==n?void 0:n.colourScheme),a=o?"primitiveColourDark":"primitiveColour",s=null===(r=null==n?void 0:n.overrides)||void 0===r?void 0:r[a];return s?Yo(i,e,s):i[e]},li={"brand-10":si("brand-10"),"brand-20":si("brand-20"),"brand-30":si("brand-30"),"brand-40":si("brand-40"),"brand-50":si("brand-50"),"brand-60":si("brand-60"),"brand-70":si("brand-70"),"brand-80":si("brand-80"),"brand-90":si("brand-90"),"brand-95":si("brand-95"),"brand-100":si("brand-100"),"primary-10":si("primary-10"),"primary-20":si("primary-20"),"primary-30":si("primary-30"),"primary-40":si("primary-40"),"primary-50":si("primary-50"),"primary-60":si("primary-60"),"primary-70":si("primary-70"),"primary-80":si("primary-80"),"primary-90":si("primary-90"),"primary-95":si("primary-95"),"primary-100":si("primary-100"),"secondary-10":si("secondary-10"),"secondary-20":si("secondary-20"),"secondary-30":si("secondary-30"),"secondary-40":si("secondary-40"),"secondary-50":si("secondary-50"),"secondary-60":si("secondary-60"),"secondary-70":si("secondary-70"),"secondary-80":si("secondary-80"),"secondary-90":si("secondary-90"),"secondary-95":si("secondary-95"),"secondary-100":si("secondary-100"),"neutral-10":si("neutral-10"),"neutral-20":si("neutral-20"),"neutral-30":si("neutral-30"),"neutral-40":si("neutral-40"),"neutral-50":si("neutral-50"),"neutral-60":si("neutral-60"),"neutral-70":si("neutral-70"),"neutral-80":si("neutral-80"),"neutral-90":si("neutral-90"),"neutral-95":si("neutral-95"),"neutral-100":si("neutral-100"),"success-10":si("success-10"),"success-20":si("success-20"),"success-30":si("success-30"),"success-40":si("success-40"),"success-50":si("success-50"),"success-60":si("success-60"),"success-70":si("success-70"),"success-80":si("success-80"),"success-90":si("success-90"),"success-95":si("success-95"),"success-100":si("success-100"),"warning-10":si("warning-10"),"warning-20":si("warning-20"),"warning-30":si("warning-30"),"warning-40":si("warning-40"),"warning-50":si("warning-50"),"warning-60":si("warning-60"),"warning-70":si("warning-70"),"warning-80":si("warning-80"),"warning-90":si("warning-90"),"warning-95":si("warning-95"),"warning-100":si("warning-100"),"error-10":si("error-10"),"error-20":si("error-20"),"error-30":si("error-30"),"error-40":si("error-40"),"error-50":si("error-50"),"error-60":si("error-60"),"error-70":si("error-70"),"error-80":si("error-80"),"error-90":si("error-90"),"error-95":si("error-95"),"error-100":si("error-100"),"info-10":si("info-10"),"info-20":si("info-20"),"info-30":si("info-30"),"info-40":si("info-40"),"info-50":si("info-50"),"info-60":si("info-60"),"info-70":si("info-70"),"info-80":si("info-80"),"info-90":si("info-90"),"info-95":si("info-95"),"info-100":si("info-100"),white:si("white"),black:si("black"),"primary-inverse":si("primary-inverse")},ci={text:si("neutral-20"),"text-subtle":si("neutral-30"),"text-subtler":si("neutral-50"),"text-subtlest":si("neutral-60"),"text-primary":si("primary-50"),"text-hover":si("primary-40"),"text-selected":si("primary-50"),"text-selected-hover":si("primary-40"),"text-disabled":si("neutral-50"),"text-disabled-subtle":si("neutral-60"),"text-disabled-subtlest":si("neutral-80"),"text-selected-disabled":si("neutral-20"),"text-success":si("success-40"),"text-warning":si("warning-40"),"text-error":si("error-40"),"text-info":si("info-40"),"text-inverse":si("white"),icon:si("neutral-50"),"icon-subtle":si("neutral-60"),"icon-strongest":si("neutral-20"),"icon-primary":si("primary-50"),"icon-primary-subtle":si("primary-60"),"icon-primary-subtlest":si("primary-70"),"icon-hover":si("primary-40"),"icon-selected":si("primary-50"),"icon-selected-hover":si("primary-40"),"icon-disabled":si("neutral-50"),"icon-disabled-subtle":si("neutral-60"),"icon-selected-disabled":si("neutral-60"),"icon-success":si("success-50"),"icon-warning":si("warning-60"),"icon-error":si("error-50"),"icon-error-strong":si("error-40"),"icon-info":si("info-50"),"icon-inverse":si("white"),"icon-primary-inverse":si("primary-inverse"),border:si("neutral-90"),"border-strong":si("neutral-70"),"border-stronger":si("neutral-50"),"border-primary":si("primary-50"),"border-primary-subtle":si("primary-60"),"border-hover":si("primary-90"),"border-hover-strong":si("primary-60"),"border-selected":si("primary-50"),"border-selected-subtle":si("primary-70"),"border-selected-subtlest":si("primary-90"),"border-selected-hover":si("primary-40"),"border-focus":si("primary-60"),"border-focus-strong":si("primary-50"),"border-disabled":si("neutral-90"),"border-selected-disabled":si("neutral-70"),"border-success":si("success-60"),"border-warning":si("warning-60"),"border-error":si("error-60"),"border-error-focus":si("error-60"),"border-error-focus-strong":si("error-40"),"border-error-strong":si("error-40"),"border-info":si("info-60"),bg:si("white"),"bg-strong":si("neutral-100"),"bg-stronger":si("neutral-95"),"bg-strongest":si("neutral-90"),"bg-hover":si("primary-95"),"bg-hover-strong":si("primary-90"),"bg-hover-subtle":si("primary-100"),"bg-hover-neutral":si("neutral-100"),"bg-hover-neutral-strong":si("neutral-90"),"bg-selected":si("primary-95"),"bg-selected-hover":si("primary-90"),"bg-selected-strong":si("primary-90"),"bg-selected-stronger":si("primary-70"),"bg-selected-strongest":si("primary-50"),"bg-selected-strongest-hover":si("primary-40"),"bg-disabled":si("neutral-95"),"bg-selected-disabled":si("neutral-95"),"bg-selected-stronger-disabled":si("neutral-70"),"bg-success":si("success-100"),"bg-success-hover":si("success-95"),"bg-success-strong":si("success-50"),"bg-success-strong-hover":si("success-40"),"bg-warning":si("warning-100"),"bg-warning-hover":si("warning-95"),"bg-warning-strong":si("warning-50"),"bg-warning-strong-hover":si("warning-40"),"bg-info":si("info-100"),"bg-info-hover":si("info-95"),"bg-info-strong":si("info-50"),"bg-info-strong-hover":si("info-40"),"bg-error":si("error-100"),"bg-error-hover":si("error-95"),"bg-error-strong":si("error-50"),"bg-error-strong-hover":si("error-40"),"bg-inverse":si("neutral-20"),"bg-inverse-subtle":si("neutral-30"),"bg-inverse-subtler":si("neutral-50"),"bg-inverse-subtlest":si("neutral-60"),"bg-inverse-hover":si("neutral-40"),"bg-primary":si("primary-50"),"bg-primary-subtle":si("primary-60"),"bg-primary-subtler":si("primary-95"),"bg-primary-subtlest":si("primary-100"),"bg-available":"#6DD0A1","bg-primary-hover":si("primary-40"),"bg-primary-subtlest-hover":si("primary-90"),"bg-primary-subtlest-selected":si("primary-90"),"overlay-strong":"rgba(40, 40, 40, 0.85)","overlay-subtle":"rgba(40, 40, 40, 0.20)",hyperlink:si("primary-50"),"hyperlink-hover":si("primary-40"),"hyperlink-visited":si("primary-40"),"hyperlink-inverse":si("primary-inverse"),"focus-ring":si("primary-50"),"focus-ring-inverse":si("white")},di={text:si("neutral-100"),"text-subtle":si("neutral-80"),"text-subtler":si("neutral-60"),"text-subtlest":si("neutral-50"),"text-primary":si("primary-60"),"text-hover":si("primary-70"),"text-selected":si("primary-60"),"text-selected-hover":si("primary-70"),"text-disabled":si("neutral-60"),"text-disabled-subtle":si("neutral-50"),"text-disabled-subtlest":si("neutral-30"),"text-selected-disabled":si("neutral-90"),"text-success":si("success-70"),"text-warning":si("warning-70"),"text-error":si("error-70"),"text-info":si("info-70"),"text-inverse":si("black"),icon:si("neutral-60"),"icon-subtle":si("neutral-50"),"icon-strongest":si("neutral-90"),"icon-primary":si("primary-60"),"icon-primary-subtle":si("primary-50"),"icon-primary-subtlest":si("primary-40"),"icon-hover":si("primary-70"),"icon-selected":si("primary-60"),"icon-selected-hover":si("primary-70"),"icon-disabled":si("neutral-60"),"icon-disabled-subtle":si("neutral-50"),"icon-selected-disabled":si("neutral-50"),"icon-success":si("success-60"),"icon-warning":si("warning-50"),"icon-error":si("error-60"),"icon-error-strong":si("error-70"),"icon-info":si("info-60"),"icon-inverse":si("black"),"icon-primary-inverse":si("primary-inverse"),border:si("neutral-20"),"border-strong":si("neutral-40"),"border-stronger":si("neutral-60"),"border-primary":si("primary-60"),"border-primary-subtle":si("primary-50"),"border-hover":si("primary-20"),"border-hover-strong":si("primary-50"),"border-selected":si("primary-60"),"border-selected-subtle":si("primary-40"),"border-selected-subtlest":si("primary-20"),"border-selected-hover":si("primary-70"),"border-focus":si("primary-50"),"border-focus-strong":si("primary-60"),"border-disabled":si("neutral-20"),"border-selected-disabled":si("neutral-40"),"border-success":si("success-50"),"border-warning":si("warning-50"),"border-error":si("error-50"),"border-error-focus":si("error-50"),"border-error-focus-strong":si("error-70"),"border-error-strong":si("error-70"),"border-info":si("info-50"),bg:si("black"),"bg-strong":si("neutral-10"),"bg-stronger":si("neutral-20"),"bg-strongest":si("neutral-20"),"bg-hover":si("primary-20"),"bg-hover-strong":si("primary-20"),"bg-hover-subtle":si("primary-10"),"bg-hover-neutral":si("neutral-10"),"bg-hover-neutral-strong":si("neutral-20"),"bg-selected":si("primary-20"),"bg-selected-hover":si("primary-20"),"bg-selected-strong":si("primary-20"),"bg-selected-stronger":si("primary-40"),"bg-selected-strongest":si("primary-60"),"bg-selected-strongest-hover":si("primary-70"),"bg-disabled":si("neutral-20"),"bg-selected-disabled":si("neutral-20"),"bg-selected-stronger-disabled":si("neutral-40"),"bg-success":si("success-10"),"bg-success-hover":si("success-20"),"bg-success-strong":si("success-60"),"bg-success-strong-hover":si("success-70"),"bg-warning":si("warning-10"),"bg-warning-hover":si("warning-20"),"bg-warning-strong":si("warning-60"),"bg-warning-strong-hover":si("warning-70"),"bg-info":si("info-10"),"bg-info-hover":si("info-20"),"bg-info-strong":si("info-60"),"bg-info-strong-hover":si("info-70"),"bg-error":si("error-10"),"bg-error-hover":si("error-20"),"bg-error-strong":si("error-60"),"bg-error-strong-hover":si("error-70"),"bg-inverse":si("neutral-90"),"bg-inverse-subtle":si("neutral-80"),"bg-inverse-subtler":si("neutral-60"),"bg-inverse-subtlest":si("neutral-50"),"bg-inverse-hover":si("neutral-70"),"bg-primary":si("primary-60"),"bg-primary-subtle":si("primary-50"),"bg-primary-subtler":si("primary-20"),"bg-primary-subtlest":si("primary-10"),"bg-available":"#185339","bg-primary-hover":si("primary-70"),"bg-primary-subtlest-hover":si("primary-20"),"bg-primary-subtlest-selected":si("primary-20"),"overlay-strong":"rgba(78, 78, 78, 0.80)","overlay-subtle":"rgba(78, 78, 78, 0.50)",hyperlink:si("primary-60"),"hyperlink-hover":si("primary-70"),"hyperlink-visited":si("primary-70"),"hyperlink-inverse":si("primary-inverse"),"focus-ring":si("primary-60"),"focus-ring-inverse":si("black")},ui={text:si("neutral-30"),"text-subtle":si("neutral-40"),"text-subtler":si("neutral-50"),"text-subtlest":si("neutral-70"),"text-primary":si("neutral-10"),"text-hover":si("neutral-70"),"text-selected":si("neutral-20"),"text-selected-hover":si("neutral-10"),"text-disabled":si("neutral-50"),"text-disabled-subtle":si("neutral-60"),"text-disabled-subtlest":si("neutral-80"),"text-selected-disabled":si("neutral-40"),"text-success":si("success-40"),"text-warning":si("warning-40"),"text-error":si("brand-30"),"text-info":si("neutral-40"),"text-inverse":si("neutral-100"),icon:si("neutral-40"),"icon-subtle":si("neutral-50"),"icon-strongest":si("neutral-10"),"icon-primary":si("neutral-10"),"icon-primary-subtle":si("neutral-30"),"icon-primary-subtlest":si("neutral-60"),"icon-hover":si("neutral-70"),"icon-selected":si("brand-20"),"icon-selected-hover":si("brand-10"),"icon-disabled":si("neutral-50"),"icon-disabled-subtle":si("neutral-60"),"icon-selected-disabled":si("neutral-40"),"icon-success":si("success-40"),"icon-warning":si("warning-60"),"icon-error":si("brand-30"),"icon-error-strong":si("brand-10"),"icon-info":si("neutral-40"),"icon-inverse":si("neutral-100"),"icon-primary-inverse":"#F9B371",border:si("neutral-90"),"border-strong":si("neutral-30"),"border-stronger":si("neutral-20"),"border-primary":si("neutral-40"),"border-primary-subtle":si("neutral-60"),"border-hover":si("neutral-80"),"border-hover-strong":si("neutral-10"),"border-selected":si("brand-20"),"border-selected-subtle":si("neutral-40"),"border-selected-subtlest":si("neutral-70"),"border-selected-hover":si("neutral-10"),"border-focus":si("neutral-20"),"border-focus-strong":si("neutral-10"),"border-disabled":si("neutral-90"),"border-selected-disabled":si("neutral-80"),"border-success":si("success-40"),"border-warning":si("warning-60"),"border-error":si("brand-30"),"border-error-focus":si("brand-20"),"border-error-focus-strong":si("brand-10"),"border-error-strong":si("brand-20"),"border-info":si("neutral-40"),bg:si("neutral-100"),"bg-strong":si("neutral-95"),"bg-stronger":si("neutral-90"),"bg-strongest":si("neutral-80"),"bg-hover":si("brand-90"),"bg-hover-strong":si("brand-80"),"bg-hover-subtle":si("neutral-90"),"bg-hover-neutral":si("neutral-90"),"bg-hover-neutral-strong":si("neutral-90"),"bg-selected":si("brand-100"),"bg-selected-hover":si("brand-30"),"bg-selected-strong":si("brand-50"),"bg-selected-stronger":si("brand-40"),"bg-selected-strongest":si("brand-20"),"bg-selected-strongest-hover":si("brand-10"),"bg-disabled":si("neutral-90"),"bg-selected-disabled":si("neutral-90"),"bg-selected-stronger-disabled":si("neutral-80"),"bg-success":si("success-100"),"bg-success-hover":si("success-95"),"bg-success-strong":si("success-50"),"bg-success-strong-hover":si("success-40"),"bg-warning":si("warning-100"),"bg-warning-hover":si("warning-95"),"bg-warning-strong":si("warning-50"),"bg-warning-strong-hover":si("warning-40"),"bg-info":si("neutral-95"),"bg-info-hover":si("info-95"),"bg-info-strong":si("info-50"),"bg-info-strong-hover":si("info-40"),"bg-error":si("brand-100"),"bg-error-hover":si("error-95"),"bg-error-strong":si("error-50"),"bg-error-strong-hover":si("error-40"),"bg-inverse":si("neutral-40"),"bg-inverse-subtle":si("neutral-60"),"bg-inverse-subtler":si("neutral-70"),"bg-inverse-subtlest":si("neutral-80"),"bg-inverse-hover":si("neutral-30"),"bg-primary":si("brand-20"),"bg-primary-subtle":si("brand-60"),"bg-primary-subtler":si("brand-80"),"bg-primary-subtlest":si("brand-100"),"bg-available":si("success-60"),"bg-primary-hover":si("brand-10"),"bg-primary-subtlest-hover":si("brand-80"),"bg-primary-subtlest-selected":si("brand-40"),"overlay-strong":"rgba(25, 25, 25, 0.95)","overlay-subtle":"rgba(25, 25, 25, 0.20)",hyperlink:si("neutral-10"),"hyperlink-hover":si("neutral-40"),"hyperlink-visited":si("neutral-50"),"hyperlink-inverse":"#F8AE68","focus-ring":si("primary-50"),"focus-ring-inverse":si("white")},fi={text:si("neutral-20"),"text-subtle":si("neutral-30"),"text-subtler":si("neutral-50"),"text-subtlest":si("neutral-60"),"text-primary":si("primary-50"),"text-hover":si("primary-40"),"text-selected":si("primary-50"),"text-selected-hover":si("primary-40"),"text-disabled":si("neutral-50"),"text-disabled-subtle":si("neutral-60"),"text-disabled-subtlest":si("neutral-80"),"text-selected-disabled":si("neutral-20"),"text-success":si("success-40"),"text-warning":si("warning-40"),"text-error":si("error-40"),"text-info":si("info-40"),"text-inverse":si("white"),icon:si("neutral-50"),"icon-subtle":si("neutral-60"),"icon-strongest":si("neutral-20"),"icon-primary":si("primary-50"),"icon-primary-subtle":si("primary-60"),"icon-primary-subtlest":si("primary-70"),"icon-hover":si("primary-40"),"icon-selected":si("primary-50"),"icon-selected-hover":si("primary-40"),"icon-disabled":si("neutral-50"),"icon-disabled-subtle":si("neutral-60"),"icon-selected-disabled":si("neutral-60"),"icon-success":si("success-50"),"icon-warning":si("warning-60"),"icon-error":si("error-50"),"icon-error-strong":si("error-40"),"icon-info":si("info-50"),"icon-inverse":si("white"),"icon-primary-inverse":si("primary-inverse"),border:si("neutral-90"),"border-strong":si("neutral-70"),"border-stronger":si("neutral-50"),"border-primary":si("primary-50"),"border-primary-subtle":si("primary-60"),"border-hover":si("primary-90"),"border-hover-strong":si("primary-60"),"border-selected":si("primary-50"),"border-selected-subtle":si("primary-70"),"border-selected-subtlest":si("primary-90"),"border-selected-hover":si("primary-40"),"border-focus":si("primary-60"),"border-focus-strong":si("primary-50"),"border-disabled":si("neutral-90"),"border-selected-disabled":si("neutral-70"),"border-success":si("success-60"),"border-warning":si("warning-60"),"border-error":si("error-60"),"border-error-focus":si("error-60"),"border-error-focus-strong":si("error-40"),"border-error-strong":si("error-40"),"border-info":si("info-60"),bg:si("white"),"bg-strong":si("neutral-100"),"bg-stronger":si("neutral-95"),"bg-strongest":si("neutral-90"),"bg-hover":si("primary-95"),"bg-hover-strong":si("primary-90"),"bg-hover-subtle":si("primary-100"),"bg-hover-neutral":si("neutral-100"),"bg-hover-neutral-strong":si("neutral-90"),"bg-selected":si("primary-95"),"bg-selected-hover":si("primary-90"),"bg-selected-strong":si("primary-90"),"bg-selected-stronger":si("primary-70"),"bg-selected-strongest":si("primary-50"),"bg-selected-strongest-hover":si("primary-40"),"bg-disabled":si("neutral-95"),"bg-selected-disabled":si("neutral-95"),"bg-selected-stronger-disabled":si("neutral-70"),"bg-success":si("success-100"),"bg-success-hover":si("success-95"),"bg-success-strong":si("success-50"),"bg-success-strong-hover":si("success-40"),"bg-warning":si("warning-100"),"bg-warning-hover":si("warning-95"),"bg-warning-strong":si("warning-50"),"bg-warning-strong-hover":si("warning-40"),"bg-info":si("info-100"),"bg-info-hover":si("info-95"),"bg-info-strong":si("info-50"),"bg-info-strong-hover":si("info-40"),"bg-error":si("error-100"),"bg-error-hover":si("error-95"),"bg-error-strong":si("error-50"),"bg-error-strong-hover":si("error-40"),"bg-inverse":si("neutral-20"),"bg-inverse-subtle":si("neutral-30"),"bg-inverse-subtler":si("neutral-50"),"bg-inverse-subtlest":si("neutral-60"),"bg-inverse-hover":si("neutral-40"),"bg-primary":si("primary-50"),"bg-primary-subtle":si("primary-60"),"bg-primary-subtler":si("primary-95"),"bg-primary-subtlest":si("primary-100"),"bg-available":"#6DD0A1","bg-primary-hover":si("primary-40"),"bg-primary-subtlest-hover":si("primary-90"),"bg-primary-subtlest-selected":si("primary-90"),"overlay-strong":"rgba(40, 40, 40, 0.85)","overlay-subtle":"rgba(40, 40, 40, 0.20)",hyperlink:si("primary-50"),"hyperlink-hover":si("primary-40"),"hyperlink-visited":si("primary-40"),"hyperlink-inverse":si("primary-inverse"),"focus-ring":si("primary-50"),"focus-ring-inverse":si("white")},hi={text:si("neutral-100"),"text-subtle":si("neutral-80"),"text-subtler":si("neutral-60"),"text-subtlest":si("neutral-50"),"text-primary":si("primary-60"),"text-hover":si("primary-70"),"text-selected":si("primary-60"),"text-selected-hover":si("primary-70"),"text-disabled":si("neutral-60"),"text-disabled-subtle":si("neutral-50"),"text-disabled-subtlest":si("neutral-30"),"text-selected-disabled":si("neutral-90"),"text-success":si("success-70"),"text-warning":si("warning-70"),"text-error":si("error-70"),"text-info":si("info-70"),"text-inverse":si("black"),icon:si("neutral-60"),"icon-subtle":si("neutral-50"),"icon-strongest":si("neutral-90"),"icon-primary":si("primary-60"),"icon-primary-subtle":si("primary-50"),"icon-primary-subtlest":si("primary-40"),"icon-hover":si("primary-70"),"icon-selected":si("primary-60"),"icon-selected-hover":si("primary-70"),"icon-disabled":si("neutral-60"),"icon-disabled-subtle":si("neutral-50"),"icon-selected-disabled":si("neutral-50"),"icon-success":si("success-60"),"icon-warning":si("warning-50"),"icon-error":si("error-60"),"icon-error-strong":si("error-70"),"icon-info":si("info-60"),"icon-inverse":si("black"),"icon-primary-inverse":si("primary-inverse"),border:si("neutral-20"),"border-strong":si("neutral-40"),"border-stronger":si("neutral-60"),"border-primary":si("primary-60"),"border-primary-subtle":si("primary-50"),"border-hover":si("primary-20"),"border-hover-strong":si("primary-50"),"border-selected":si("primary-60"),"border-selected-subtle":si("primary-40"),"border-selected-subtlest":si("primary-20"),"border-selected-hover":si("primary-70"),"border-focus":si("primary-50"),"border-focus-strong":si("primary-60"),"border-disabled":si("neutral-20"),"border-selected-disabled":si("neutral-40"),"border-success":si("success-50"),"border-warning":si("warning-50"),"border-error":si("error-50"),"border-error-focus":si("error-50"),"border-error-focus-strong":si("error-70"),"border-error-strong":si("error-70"),"border-info":si("info-50"),bg:si("black"),"bg-strong":si("neutral-10"),"bg-stronger":si("neutral-20"),"bg-strongest":si("neutral-20"),"bg-hover":si("primary-20"),"bg-hover-strong":si("primary-20"),"bg-hover-subtle":si("primary-10"),"bg-hover-neutral":si("neutral-10"),"bg-hover-neutral-strong":si("neutral-20"),"bg-selected":si("primary-20"),"bg-selected-hover":si("primary-20"),"bg-selected-strong":si("primary-20"),"bg-selected-stronger":si("primary-40"),"bg-selected-strongest":si("primary-60"),"bg-selected-strongest-hover":si("primary-70"),"bg-disabled":si("neutral-20"),"bg-selected-disabled":si("neutral-20"),"bg-selected-stronger-disabled":si("neutral-40"),"bg-success":si("success-10"),"bg-success-hover":si("success-20"),"bg-success-strong":si("success-60"),"bg-success-strong-hover":si("success-70"),"bg-warning":si("warning-10"),"bg-warning-hover":si("warning-20"),"bg-warning-strong":si("warning-60"),"bg-warning-strong-hover":si("warning-70"),"bg-info":si("info-10"),"bg-info-hover":si("info-20"),"bg-info-strong":si("info-60"),"bg-info-strong-hover":si("info-70"),"bg-error":si("error-10"),"bg-error-hover":si("error-20"),"bg-error-strong":si("error-60"),"bg-error-strong-hover":si("error-70"),"bg-inverse":si("neutral-90"),"bg-inverse-subtle":si("neutral-80"),"bg-inverse-subtler":si("neutral-60"),"bg-inverse-subtlest":si("neutral-50"),"bg-inverse-hover":si("neutral-70"),"bg-primary":si("primary-60"),"bg-primary-subtle":si("primary-50"),"bg-primary-subtler":si("primary-20"),"bg-primary-subtlest":si("primary-10"),"bg-available":"#185339","bg-primary-hover":si("primary-70"),"bg-primary-subtlest-hover":si("primary-20"),"bg-primary-subtlest-selected":si("primary-20"),"overlay-strong":"rgba(78, 78, 78, 0.80)","overlay-subtle":"rgba(78, 78, 78, 0.50)",hyperlink:si("primary-60"),"hyperlink-hover":si("primary-70"),"hyperlink-visited":si("primary-70"),"hyperlink-inverse":si("primary-inverse"),"focus-ring":si("primary-60"),"focus-ring-inverse":si("black")},pi={collections:{lifesg:ci,bookingsg:ci,rbs:ci,mylegacy:ci,ccube:ci,oneservice:ci,pa:ui,a11yplayground:fi,supportgowhere:ci},defaultValue:"lifesg"},gi={collections:{lifesg:di,bookingsg:di,rbs:di,mylegacy:di,ccube:di,oneservice:di,pa:di,a11yplayground:hi,supportgowhere:di},defaultValue:"lifesg"},mi=e=>t=>{var r;const n=t.theme,o="dark"===(null==n?void 0:n.colourMode),i=Vo(o?gi:pi,null==n?void 0:n.colourScheme),a=o?"semanticColourDark":"semanticColour",s=null===(r=null==n?void 0:n.overrides)||void 0===r?void 0:r[a],l=s?Yo(i,e,s):i[e];return"function"==typeof l?l(t):l},bi={text:mi("text"),"text-subtle":mi("text-subtle"),"text-subtler":mi("text-subtler"),"text-subtlest":mi("text-subtlest"),"text-primary":mi("text-primary"),"text-hover":mi("text-hover"),"text-selected":mi("text-selected"),"text-selected-hover":mi("text-selected-hover"),"text-disabled":mi("text-disabled"),"text-disabled-subtle":mi("text-disabled-subtle"),"text-disabled-subtlest":mi("text-disabled-subtlest"),"text-selected-disabled":mi("text-selected-disabled"),"text-success":mi("text-success"),"text-warning":mi("text-warning"),"text-error":mi("text-error"),"text-info":mi("text-info"),"text-inverse":mi("text-inverse"),icon:mi("icon"),"icon-subtle":mi("icon-subtle"),"icon-strongest":mi("icon-strongest"),"icon-primary":mi("icon-primary"),"icon-primary-subtle":mi("icon-primary-subtle"),"icon-primary-subtlest":mi("icon-primary-subtlest"),"icon-hover":mi("icon-hover"),"icon-selected":mi("icon-selected"),"icon-selected-hover":mi("icon-selected-hover"),"icon-disabled":mi("icon-disabled"),"icon-disabled-subtle":mi("icon-disabled-subtle"),"icon-selected-disabled":mi("icon-selected-disabled"),"icon-success":mi("icon-success"),"icon-warning":mi("icon-warning"),"icon-error":mi("icon-error"),"icon-error-strong":mi("icon-error-strong"),"icon-info":mi("icon-info"),"icon-inverse":mi("icon-inverse"),"icon-primary-inverse":mi("icon-primary-inverse"),border:mi("border"),"border-strong":mi("border-strong"),"border-stronger":mi("border-stronger"),"border-primary":mi("border-primary"),"border-primary-subtle":mi("border-primary-subtle"),"border-hover":mi("border-hover"),"border-hover-strong":mi("border-hover-strong"),"border-selected":mi("border-selected"),"border-selected-subtle":mi("border-selected-subtle"),"border-selected-subtlest":mi("border-selected-subtlest"),"border-selected-hover":mi("border-selected-hover"),"border-focus":mi("border-focus"),"border-focus-strong":mi("border-focus-strong"),"border-disabled":mi("border-disabled"),"border-selected-disabled":mi("border-selected-disabled"),"border-success":mi("border-success"),"border-warning":mi("border-warning"),"border-error":mi("border-error"),"border-error-focus":mi("border-error-focus"),"border-error-focus-strong":mi("border-error-focus-strong"),"border-error-strong":mi("border-error-strong"),"border-info":mi("border-info"),bg:mi("bg"),"bg-strong":mi("bg-strong"),"bg-stronger":mi("bg-stronger"),"bg-strongest":mi("bg-strongest"),"bg-hover":mi("bg-hover"),"bg-hover-strong":mi("bg-hover-strong"),"bg-hover-subtle":mi("bg-hover-subtle"),"bg-hover-neutral":mi("bg-hover-neutral"),"bg-hover-neutral-strong":mi("bg-hover-neutral-strong"),"bg-selected":mi("bg-selected"),"bg-selected-hover":mi("bg-selected-hover"),"bg-selected-strong":mi("bg-selected-strong"),"bg-selected-stronger":mi("bg-selected-stronger"),"bg-selected-strongest":mi("bg-selected-strongest"),"bg-selected-strongest-hover":mi("bg-selected-strongest-hover"),"bg-disabled":mi("bg-disabled"),"bg-selected-disabled":mi("bg-selected-disabled"),"bg-selected-stronger-disabled":mi("bg-selected-stronger-disabled"),"bg-success":mi("bg-success"),"bg-success-hover":mi("bg-success-hover"),"bg-success-strong":mi("bg-success-strong"),"bg-success-strong-hover":mi("bg-success-strong-hover"),"bg-warning":mi("bg-warning"),"bg-warning-hover":mi("bg-warning-hover"),"bg-warning-strong":mi("bg-warning-strong"),"bg-warning-strong-hover":mi("bg-warning-strong-hover"),"bg-info":mi("bg-info"),"bg-info-hover":mi("bg-info-hover"),"bg-info-strong":mi("bg-info-strong"),"bg-info-strong-hover":mi("bg-info-strong-hover"),"bg-error":mi("bg-error"),"bg-error-hover":mi("bg-error-hover"),"bg-error-strong":mi("bg-error-strong"),"bg-error-strong-hover":mi("bg-error-strong-hover"),"bg-inverse":mi("bg-inverse"),"bg-inverse-subtle":mi("bg-inverse-subtle"),"bg-inverse-subtler":mi("bg-inverse-subtler"),"bg-inverse-subtlest":mi("bg-inverse-subtlest"),"bg-inverse-hover":mi("bg-inverse-hover"),"bg-primary":mi("bg-primary"),"bg-primary-subtle":mi("bg-primary-subtle"),"bg-primary-subtler":mi("bg-primary-subtler"),"bg-primary-subtlest":mi("bg-primary-subtlest"),"bg-available":mi("bg-available"),"bg-primary-hover":mi("bg-primary-hover"),"bg-primary-subtlest-hover":mi("bg-primary-subtlest-hover"),"bg-primary-subtlest-selected":mi("bg-primary-subtlest-selected"),"overlay-strong":mi("overlay-strong"),"overlay-subtle":mi("overlay-subtle"),hyperlink:mi("hyperlink"),"hyperlink-hover":mi("hyperlink-hover"),"hyperlink-visited":mi("hyperlink-visited"),"hyperlink-inverse":mi("hyperlink-inverse"),"focus-ring":mi("focus-ring"),"focus-ring-inverse":mi("focus-ring-inverse")},vi={collections:{default:{solid:e=>t=>{var r,n,o;const{thickness:i,radius:a,colour:s}=e||{},l=null!==(r="function"==typeof i?i(t):i)&&void 0!==r?r:qo["width-010"](t),c=null!==(n="function"==typeof a?a(t):a)&&void 0!==n?n:0,d=null!==(o="function"==typeof s?s(t):s)&&void 0!==o?o:bi.border(t),u=qo.solid;return O`
            border: ${l} ${u} ${d};
            border-radius: ${c};
        `},"dashed-default":e=>t=>{var r,n,o;const{thickness:i,radius:a,colour:s}=e||{},l=null!==(r="function"==typeof i?i(t):i)&&void 0!==r?r:qo["width-010"](t),c=null!==(n="function"==typeof a?a(t):a)&&void 0!==n?n:0,d=null!==(o="function"==typeof s?s(t):s)&&void 0!==o?o:bi.border(t),u=encodeURIComponent(`<svg width='100%' height='100%' xmlns='http://www.w3.org/2000/svg'><rect width='100%' height='100%' fill='none' rx='${c}' ry='${c}' stroke='${d}' stroke-width='${l}' stroke-dasharray='4, 8' stroke-dashoffset='0' stroke-linecap='square'/></svg>`);return O`
            background-image: url("data:image/svg+xml,${u}");
            border-radius: ${c};
        `}}},defaultValue:"default"},yi=e=>1===e.length&&"theme"in e[0],xi=e=>(...t)=>r=>{const n=yi(t)?[]:t,o=yi(t)?t[0]:r,i=o.theme;return(0,Vo(vi,null==i?void 0:i.borderScheme)[e])(...n)(o)},wi={solid:xi("solid"),"dashed-default":xi("dashed-default")},$i={collections:{default:{"xxs-min":0,"xxs-max":320,"xs-min":321,"xs-max":375,"sm-min":376,"sm-max":480,"md-min":481,"md-max":768,"lg-min":769,"lg-max":1200,"xl-min":1201,"xl-max":1440,"xxl-min":1441,"xxs-column":8,"xs-column":8,"sm-column":8,"md-column":8,"lg-column":12,"xl-column":12,"xxl-column":12,"xxs-gutter":16,"xs-gutter":16,"sm-gutter":16,"md-gutter":16,"lg-gutter":32,"xl-gutter":32,"xxl-gutter":32,"xxs-margin":24,"xs-margin":24,"sm-margin":24,"md-margin":24,"lg-margin":48,"xl-margin":48,"xxl-margin":48}},defaultValue:"default"},Ci=e=>t=>{var r;const n=t.theme,o=Vo($i,null==n?void 0:n.breakpointScheme);let i;return i=(null===(r=null==n?void 0:n.overrides)||void 0===r?void 0:r.breakpoint)?Yo(o,e,n.overrides.breakpoint):o[e],i},Si={"xxs-min":Ci("xxs-min"),"xxs-max":Ci("xxs-max"),"xs-min":Ci("xs-min"),"xs-max":Ci("xs-max"),"sm-min":Ci("sm-min"),"sm-max":Ci("sm-max"),"md-min":Ci("md-min"),"md-max":Ci("md-max"),"lg-min":Ci("lg-min"),"lg-max":Ci("lg-max"),"xl-min":Ci("xl-min"),"xl-max":Ci("xl-max"),"xxl-min":Ci("xxl-min"),"xxs-column":Ci("xxs-column"),"xs-column":Ci("xs-column"),"sm-column":Ci("sm-column"),"md-column":Ci("md-column"),"lg-column":Ci("lg-column"),"xl-column":Ci("xl-column"),"xxl-column":Ci("xxl-column"),"xxs-gutter":Ci("xxs-gutter"),"xs-gutter":Ci("xs-gutter"),"sm-gutter":Ci("sm-gutter"),"md-gutter":Ci("md-gutter"),"lg-gutter":Ci("lg-gutter"),"xl-gutter":Ci("xl-gutter"),"xxl-gutter":Ci("xxl-gutter"),"xxs-margin":Ci("xxs-margin"),"xs-margin":Ci("xs-margin"),"sm-margin":Ci("sm-margin"),"md-margin":Ci("md-margin"),"lg-margin":Ci("lg-margin"),"xl-margin":Ci("xl-margin"),"xxl-margin":Ci("xxl-margin")},Di=e=>("max-width"===e?["xxs","xs","sm","md","lg","xl"]:["xxs","xs","sm","md","lg","xl","xxl"]).reduce(((t,r)=>(t[r]=((e,t)=>{const r=Si["max-width"===e?`${t}-max`:`${t}-min`];return t=>{const n=r(t);return`@media screen and (${e}: ${n}px)`}})(e,r),t)),{}),ki={MaxWidth:Di("max-width"),MinWidth:Di("min-width")},Ei={collections:{default:{"heading-size-xxl":"3rem","heading-size-xl":"2.5rem","heading-size-lg":"2rem","heading-size-md":"1.625rem","heading-size-sm":"1.375rem","heading-size-xs":"1.125rem","heading-lh-xxl":"3.5rem","heading-lh-xl":"3rem","heading-lh-lg":"2.5rem","heading-lh-md":"2.25rem","heading-lh-sm":"1.75rem","heading-lh-xs":"1.625rem","heading-ls-xxl":"-0.056rem","heading-ls-xl":"-0.032rem","heading-ls-lg":"-0.032rem","heading-ls-md":"0rem","heading-ls-sm":"0rem","heading-ls-xs":"0rem","weight-light":"300","weight-regular":"400","weight-semibold":"600","weight-bold":"700","font-family":"Open Sans","body-size-baseline":"1.125rem","body-size-md":"1rem","body-size-sm":"0.875rem","body-size-xs":"0.75rem","body-lh-baseline":"1.625rem","body-lh-md":"1.5rem","body-lh-sm":"1.625rem","body-lh-xs":"1.25rem","body-ls-baseline":"0rem","body-ls-md":"0.014rem","body-ls-sm":"0.012rem","body-ls-xs":"0.012rem","form-label-size":"1rem","form-description-size":"0.875rem","form-label-lh":"1.5rem","form-description-lh":"1.6rem","form-label-ls":"0.014rem","form-description-ls":"0.012rem"},bookingsg:{"heading-size-xxl":"3rem","heading-size-xl":"2.5rem","heading-size-lg":"2rem","heading-size-md":"1.625rem","heading-size-sm":"1.375rem","heading-size-xs":"1.125rem","heading-lh-xxl":"3.5rem","heading-lh-xl":"3rem","heading-lh-lg":"2.5rem","heading-lh-md":"2.25rem","heading-lh-sm":"1.75rem","heading-lh-xs":"1.75rem","heading-ls-xxl":"-0.056rem","heading-ls-xl":"-0.032rem","heading-ls-lg":"-0.032rem","heading-ls-md":"0rem","heading-ls-sm":"0rem","heading-ls-xs":"0rem","weight-light":"300","weight-regular":"400","weight-semibold":"600","weight-bold":"700","font-family":"Plus Jakarta Sans","body-size-baseline":"1.125rem","body-size-md":"1rem","body-size-sm":"0.875rem","body-size-xs":"0.75rem","body-lh-baseline":"1.75rem","body-lh-md":"1.5rem","body-lh-sm":"1.6rem","body-lh-xs":"1.2rem","body-ls-baseline":"0rem","body-ls-md":"0.014rem","body-ls-sm":"0.012rem","body-ls-xs":"0.012rem","form-label-size":"1rem","form-description-size":"0.875rem","form-label-lh":"1.5rem","form-description-lh":"1.6rem","form-label-ls":"0.014rem","form-description-ls":"0.012rem"},pa:{"heading-size-xxl":"2.5rem","heading-size-xl":"2rem","heading-size-lg":"1.75rem","heading-size-md":"1.5rem","heading-size-sm":"1.25rem","heading-size-xs":"1rem","heading-lh-xxl":"3rem","heading-lh-xl":"2.5rem","heading-lh-lg":"2.25rem","heading-lh-md":"2rem","heading-lh-sm":"2rem","heading-lh-xs":"1.75rem","heading-ls-xxl":"-0.032rem","heading-ls-xl":"-0.032rem","heading-ls-lg":"0rem","heading-ls-md":"0rem","heading-ls-sm":"0rem","heading-ls-xs":"0rem","weight-light":"300","weight-regular":"400","weight-semibold":"600","weight-bold":"700","font-family":"Lato","body-size-baseline":"1rem","body-size-md":"0.875rem","body-size-sm":"0.75rem","body-size-xs":"0.625rem","body-lh-baseline":"1.75rem","body-lh-md":"1.5rem","body-lh-sm":"1.25rem","body-lh-xs":"1.25rem","body-ls-baseline":"0rem","body-ls-md":"0.014rem","body-ls-sm":"0.012rem","body-ls-xs":"0.012rem","form-label-size":"1rem","form-description-size":"0.875rem","form-label-lh":"1.5rem","form-description-lh":"1.6rem","form-label-ls":"0.014rem","form-description-ls":"0.012rem"},a11yplayground:{"heading-size-xxl":"3rem","heading-size-xl":"2.5rem","heading-size-lg":"2rem","heading-size-md":"1.625rem","heading-size-sm":"1.375rem","heading-size-xs":"1.125rem","heading-lh-xxl":"3.5rem","heading-lh-xl":"3rem","heading-lh-lg":"2.5rem","heading-lh-md":"2.25rem","heading-lh-sm":"1.75rem","heading-lh-xs":"1.625rem","heading-ls-xxl":"-0.056rem","heading-ls-xl":"-0.032rem","heading-ls-lg":"-0.032rem","heading-ls-md":"0rem","heading-ls-sm":"0rem","heading-ls-xs":"0rem","weight-light":"300","weight-regular":"400","weight-semibold":"600","weight-bold":"700","font-family":"Atkinson Hyperlegible Next","body-size-baseline":"1.125rem","body-size-md":"1rem","body-size-sm":"0.875rem","body-size-xs":"0.75rem","body-lh-baseline":"1.625rem","body-lh-md":"1.5rem","body-lh-sm":"1.625rem","body-lh-xs":"1.25rem","body-ls-baseline":"0rem","body-ls-md":"0.014rem","body-ls-sm":"0.012rem","body-ls-xs":"0.012rem","form-label-size":"1.125rem","form-description-size":"1rem","form-label-lh":"1.5rem","form-description-lh":"1.625rem","form-label-ls":"0rem","form-description-ls":"0.00875rem"},supportgowhere:{"heading-size-xxl":"3rem","heading-size-xl":"2.5rem","heading-size-lg":"2rem","heading-size-md":"1.625rem","heading-size-sm":"1.375rem","heading-size-xs":"1.125rem","heading-lh-xxl":"3.5rem","heading-lh-xl":"3rem","heading-lh-lg":"2.5rem","heading-lh-md":"2.25rem","heading-lh-sm":"1.75rem","heading-lh-xs":"1.625rem","heading-ls-xxl":"-0.056rem","heading-ls-xl":"-0.032rem","heading-ls-lg":"-0.032rem","heading-ls-md":"0rem","heading-ls-sm":"0rem","heading-ls-xs":"0rem","weight-light":"300","weight-regular":"400","weight-semibold":"600","weight-bold":"700","font-family":"Libre Franklin","body-size-baseline":"1.125rem","body-size-md":"1rem","body-size-sm":"0.875rem","body-size-xs":"0.75rem","body-lh-baseline":"1.625rem","body-lh-md":"1.5rem","body-lh-sm":"1.625rem","body-lh-xs":"1.25rem","body-ls-baseline":"0rem","body-ls-md":"0.014rem","body-ls-sm":"0.012rem","body-ls-xs":"0.012rem","form-label-size":"1rem","form-description-size":"0.875rem","form-label-lh":"1.5rem","form-description-lh":"1.6rem","form-label-ls":"0.014rem","form-description-ls":"0.012rem"}},defaultValue:"default"},_i=e=>t=>{var r;const n=t.theme,o=Vo(Ei,null==n?void 0:n.fontScheme);return(null===(r=null==n?void 0:n.overrides)||void 0===r?void 0:r.fontSpec)?Yo(o,e,n.overrides.fontSpec):o[e]},Oi={"heading-size-xxl":_i("heading-size-xxl"),"heading-size-xl":_i("heading-size-xl"),"heading-size-lg":_i("heading-size-lg"),"heading-size-md":_i("heading-size-md"),"heading-size-sm":_i("heading-size-sm"),"heading-size-xs":_i("heading-size-xs"),"heading-lh-xxl":_i("heading-lh-xxl"),"heading-lh-xl":_i("heading-lh-xl"),"heading-lh-lg":_i("heading-lh-lg"),"heading-lh-md":_i("heading-lh-md"),"heading-lh-sm":_i("heading-lh-sm"),"heading-lh-xs":_i("heading-lh-xs"),"heading-ls-xxl":_i("heading-ls-xxl"),"heading-ls-xl":_i("heading-ls-xl"),"heading-ls-lg":_i("heading-ls-lg"),"heading-ls-md":_i("heading-ls-md"),"heading-ls-sm":_i("heading-ls-sm"),"heading-ls-xs":_i("heading-ls-xs"),"weight-light":_i("weight-light"),"weight-regular":_i("weight-regular"),"weight-semibold":_i("weight-semibold"),"weight-bold":_i("weight-bold"),"font-family":_i("font-family"),"body-size-baseline":_i("body-size-baseline"),"body-size-md":_i("body-size-md"),"body-size-sm":_i("body-size-sm"),"body-size-xs":_i("body-size-xs"),"body-lh-baseline":_i("body-lh-baseline"),"body-lh-md":_i("body-lh-md"),"body-lh-sm":_i("body-lh-sm"),"body-lh-xs":_i("body-lh-xs"),"body-ls-baseline":_i("body-ls-baseline"),"body-ls-md":_i("body-ls-md"),"body-ls-sm":_i("body-ls-sm"),"body-ls-xs":_i("body-ls-xs"),"form-label-size":_i("form-label-size"),"form-description-size":_i("form-description-size"),"form-label-lh":_i("form-label-lh"),"form-description-lh":_i("form-description-lh"),"form-label-ls":_i("form-label-ls"),"form-description-ls":_i("form-description-ls")},Fi=(e,t,r,n,o)=>{const{disableLigatures:i}=o||{};return O`
        font-family: ${_i("font-family")};
        font-size: ${_i(e)};
        font-weight: ${_i(t)};
        line-height: ${_i(r)};
        letter-spacing: ${_i(n)};

        font-variant: ${i?"no-common-ligatures":"normal"};
    `},Ti=(e={})=>({"heading-xxl-light":Fi("heading-size-xxl","weight-light","heading-lh-xxl","heading-ls-xxl",e),"heading-xxl-regular":Fi("heading-size-xxl","weight-regular","heading-lh-xxl","heading-ls-xxl",e),"heading-xxl-semibold":Fi("heading-size-xxl","weight-semibold","heading-lh-xxl","heading-ls-xxl",e),"heading-xxl-bold":Fi("heading-size-xxl","weight-bold","heading-lh-xxl","heading-ls-xxl",e),"heading-xl-light":Fi("heading-size-xl","weight-light","heading-lh-xl","heading-ls-xl",e),"heading-xl-regular":Fi("heading-size-xl","weight-regular","heading-lh-xl","heading-ls-xl",e),"heading-xl-semibold":Fi("heading-size-xl","weight-semibold","heading-lh-xl","heading-ls-xl",e),"heading-xl-bold":Fi("heading-size-xl","weight-bold","heading-lh-xl","heading-ls-xl",e),"heading-lg-light":Fi("heading-size-lg","weight-light","heading-lh-lg","heading-ls-lg",e),"heading-lg-regular":Fi("heading-size-lg","weight-regular","heading-lh-lg","heading-ls-lg",e),"heading-lg-semibold":Fi("heading-size-lg","weight-semibold","heading-lh-lg","heading-ls-lg",e),"heading-lg-bold":Fi("heading-size-lg","weight-bold","heading-lh-lg","heading-ls-lg",e),"heading-md-light":Fi("heading-size-md","weight-light","heading-lh-md","heading-ls-md",e),"heading-md-regular":Fi("heading-size-md","weight-regular","heading-lh-md","heading-ls-md",e),"heading-md-semibold":Fi("heading-size-md","weight-semibold","heading-lh-md","heading-ls-md",e),"heading-md-bold":Fi("heading-size-md","weight-bold","heading-lh-md","heading-ls-md",e),"heading-sm-light":Fi("heading-size-sm","weight-light","heading-lh-sm","heading-ls-sm",e),"heading-sm-regular":Fi("heading-size-sm","weight-regular","heading-lh-sm","heading-ls-sm",e),"heading-sm-semibold":Fi("heading-size-sm","weight-semibold","heading-lh-sm","heading-ls-sm",e),"heading-sm-bold":Fi("heading-size-sm","weight-bold","heading-lh-sm","heading-ls-sm",e),"heading-xs-light":Fi("heading-size-xs","weight-light","heading-lh-xs","heading-ls-xs",e),"heading-xs-regular":Fi("heading-size-xs","weight-regular","heading-lh-xs","heading-ls-xs",e),"heading-xs-semibold":Fi("heading-size-xs","weight-semibold","heading-lh-xs","heading-ls-xs",e),"heading-xs-bold":Fi("heading-size-xs","weight-bold","heading-lh-xs","heading-ls-xs",e),"body-baseline-light":Fi("body-size-baseline","weight-light","body-lh-baseline","body-ls-baseline",e),"body-baseline-regular":Fi("body-size-baseline","weight-regular","body-lh-baseline","body-ls-baseline",e),"body-baseline-semibold":Fi("body-size-baseline","weight-semibold","body-lh-baseline","body-ls-baseline",e),"body-baseline-bold":Fi("body-size-baseline","weight-bold","body-lh-baseline","body-ls-baseline",e),"body-md-light":Fi("body-size-md","weight-light","body-lh-md","body-ls-md",e),"body-md-regular":Fi("body-size-md","weight-regular","body-lh-md","body-ls-md",e),"body-md-semibold":Fi("body-size-md","weight-semibold","body-lh-md","body-ls-md",e),"body-md-bold":Fi("body-size-md","weight-bold","body-lh-md","body-ls-md",e),"body-sm-light":Fi("body-size-sm","weight-light","body-lh-sm","body-ls-sm",e),"body-sm-regular":Fi("body-size-sm","weight-regular","body-lh-sm","body-ls-sm",e),"body-sm-semibold":Fi("body-size-sm","weight-semibold","body-lh-sm","body-ls-sm",e),"body-sm-bold":Fi("body-size-sm","weight-bold","body-lh-sm","body-ls-sm",e),"body-xs-light":Fi("body-size-xs","weight-light","body-lh-xs","body-ls-xs",e),"body-xs-regular":Fi("body-size-xs","weight-regular","body-lh-xs","body-ls-xs",e),"body-xs-semibold":Fi("body-size-xs","weight-semibold","body-lh-xs","body-ls-xs",e),"body-xs-bold":Fi("body-size-xs","weight-bold","body-lh-xs","body-ls-xs",e),"form-label":Fi("form-label-size","weight-semibold","form-label-lh","form-label-ls",e),"form-description":Fi("form-description-size","weight-regular","form-description-lh","form-description-ls",e)}),Ii=Ti({disableLigatures:!0}),Mi={collections:{default:Ti(),bookingsg:Ii,pa:Ti({disableLigatures:!0}),a11yplayground:Ti({disableLigatures:!0}),supportgowhere:Ti({disableLigatures:!0})},defaultValue:"default"},Ai=e=>t=>{var r;const n=t.theme,o=Vo(Mi,null==n?void 0:n.fontScheme),i=(null===(r=null==n?void 0:n.overrides)||void 0===r?void 0:r.font)?Yo(o,e,n.overrides.font):o[e];return"function"==typeof i?i(t):i},ji={"heading-xxl-light":Ai("heading-xxl-light"),"heading-xxl-regular":Ai("heading-xxl-regular"),"heading-xxl-semibold":Ai("heading-xxl-semibold"),"heading-xxl-bold":Ai("heading-xxl-bold"),"heading-xl-light":Ai("heading-xl-light"),"heading-xl-regular":Ai("heading-xl-regular"),"heading-xl-semibold":Ai("heading-xl-semibold"),"heading-xl-bold":Ai("heading-xl-bold"),"heading-lg-light":Ai("heading-lg-light"),"heading-lg-regular":Ai("heading-lg-regular"),"heading-lg-semibold":Ai("heading-lg-semibold"),"heading-lg-bold":Ai("heading-lg-bold"),"heading-md-light":Ai("heading-md-light"),"heading-md-regular":Ai("heading-md-regular"),"heading-md-semibold":Ai("heading-md-semibold"),"heading-md-bold":Ai("heading-md-bold"),"heading-sm-light":Ai("heading-sm-light"),"heading-sm-regular":Ai("heading-sm-regular"),"heading-sm-semibold":Ai("heading-sm-semibold"),"heading-sm-bold":Ai("heading-sm-bold"),"heading-xs-light":Ai("heading-xs-light"),"heading-xs-regular":Ai("heading-xs-regular"),"heading-xs-semibold":Ai("heading-xs-semibold"),"heading-xs-bold":Ai("heading-xs-bold"),"body-baseline-light":Ai("body-baseline-light"),"body-baseline-regular":Ai("body-baseline-regular"),"body-baseline-semibold":Ai("body-baseline-semibold"),"body-baseline-bold":Ai("body-baseline-bold"),"body-md-light":Ai("body-md-light"),"body-md-regular":Ai("body-md-regular"),"body-md-semibold":Ai("body-md-semibold"),"body-md-bold":Ai("body-md-bold"),"body-sm-light":Ai("body-sm-light"),"body-sm-regular":Ai("body-sm-regular"),"body-sm-semibold":Ai("body-sm-semibold"),"body-sm-bold":Ai("body-sm-bold"),"body-xs-light":Ai("body-xs-light"),"body-xs-regular":Ai("body-xs-regular"),"body-xs-semibold":Ai("body-xs-semibold"),"body-xs-bold":Ai("body-xs-bold"),"form-label":Ai("form-label"),"form-description":Ai("form-description")},Bi={collections:{default:{"duration-150":"150ms","duration-250":"250ms","duration-350":"350ms","duration-500":"500ms","duration-800":"800ms","duration-1000":"1000ms","ease-default":"cubic-bezier(0.45, 0.05, 0.55, 0.95)","ease-standard":"cubic-bezier(0.86, 0, 0.07, 1)","ease-entrance":"cubic-bezier(0.18, 0.13, 0, 1)","ease-exit":"cubic-bezier(1, 0, 0.8, 0.85)"}},defaultValue:"default"},Ri=e=>t=>{var r;const n=t.theme,o=Vo(Bi,null==n?void 0:n.motionScheme);return(null===(r=null==n?void 0:n.overrides)||void 0===r?void 0:r.motion)?Yo(o,e,n.overrides.motion):o[e]},zi={"duration-150":Ri("duration-150"),"duration-250":Ri("duration-250"),"duration-350":Ri("duration-350"),"duration-500":Ri("duration-500"),"duration-800":Ri("duration-800"),"duration-1000":Ri("duration-1000"),"ease-default":Ri("ease-default"),"ease-standard":Ri("ease-standard"),"ease-entrance":Ri("ease-entrance"),"ease-exit":Ri("ease-exit")},Pi={collections:{default:{none:0,xs:2,sm:4,md:8,lg:12,full:9999}},defaultValue:"default"},Li=e=>t=>{var r;const n=t.theme,o=Vo(Pi,null==n?void 0:n.radiusScheme);return(null===(r=null==n?void 0:n.overrides)||void 0===r?void 0:r.radius)?`${Yo(o,e,n.overrides.radius)}px`:`${o[e]}px`},Ni={none:Li("none"),xs:Li("xs"),sm:Li("sm"),md:Li("md"),lg:Li("lg"),full:Li("full")},Hi=(e,t,r)=>n=>{const o=mi(t)(n)||si(t)(n);return`${e} rgba(from ${o} r g b / ${100*r}%)`},Wi={collections:{default:{"xs-subtle":Hi("0 0 4px 1px","neutral-50",.24),"xs-strong":Hi("0 0 4px 1px","neutral-50",.5),"xs-focus-strong":Hi("0 0 4px 1px","border-focus",.5),"xs-error-strong":Hi("0 0 4px 1px","border-error",.5),"sm-subtle":Hi("0 2px 4px 0","neutral-50",.24),"sm-strong":Hi("0 2px 4px 0","neutral-50",.5),"md-subtle":Hi("0 2px 8px 0","neutral-50",.24),"md-strong":Hi("0 2px 8px 0","neutral-50",.5),"lg-subtle":Hi("0 2px 12px 1px","neutral-50",.24),"lg-strong":Hi("0 2px 12px 1px","neutral-50",.5)}},defaultValue:"default"},Yi=e=>t=>{var r;const n=t.theme,o=Vo(Wi,null==n?void 0:n.shadowScheme),i=(null===(r=null==n?void 0:n.overrides)||void 0===r?void 0:r.shadow)?Yo(o,e,n.overrides.shadow):o[e];return"function"==typeof i?i(t):i},Vi={"xs-subtle":Yi("xs-subtle"),"xs-strong":Yi("xs-strong"),"xs-focus-strong":Yi("xs-focus-strong"),"xs-error-strong":Yi("xs-error-strong"),"sm-subtle":Yi("sm-subtle"),"sm-strong":Yi("sm-strong"),"md-subtle":Yi("md-subtle"),"md-strong":Yi("md-strong"),"lg-subtle":Yi("lg-subtle"),"lg-strong":Yi("lg-strong")},Ui={collections:{default:{"spacing-0":0,"spacing-4":4,"spacing-8":8,"spacing-12":12,"spacing-16":16,"spacing-20":20,"spacing-24":24,"spacing-32":32,"spacing-40":40,"spacing-48":48,"spacing-64":64,"spacing-72":72,"layout-xs":8,"layout-sm":16,"layout-md":24,"layout-lg":32,"layout-xl":48,"layout-xxl":64,"layout-xxxl":128}},defaultValue:"default"},Ki=e=>t=>{var r;const n=t.theme,o=Vo(Ui,null==n?void 0:n.spacingScheme);return(null===(r=null==n?void 0:n.overrides)||void 0===r?void 0:r.spacing)?`${Yo(o,e,n.overrides.spacing)}px`:`${o[e]}px`},qi={"spacing-0":Ki("spacing-0"),"spacing-4":Ki("spacing-4"),"spacing-8":Ki("spacing-8"),"spacing-12":Ki("spacing-12"),"spacing-16":Ki("spacing-16"),"spacing-20":Ki("spacing-20"),"spacing-24":Ki("spacing-24"),"spacing-32":Ki("spacing-32"),"spacing-40":Ki("spacing-40"),"spacing-48":Ki("spacing-48"),"spacing-64":Ki("spacing-64"),"spacing-72":Ki("spacing-72"),"layout-xs":Ki("layout-xs"),"layout-sm":Ki("layout-sm"),"layout-md":Ki("layout-md"),"layout-lg":Ki("layout-lg"),"layout-xl":Ki("layout-xl"),"layout-xxl":Ki("layout-xxl"),"layout-xxxl":Ki("layout-xxxl")},Gi=(e,t)=>Object.assign(Object.assign({},e),{colourMode:t}),Qi=Object.assign(Object.assign({},bi),{Primitive:li}),Zi=Object.assign(Object.assign({},ji),{Spec:Oi}),Xi=zi,Ji=Object.assign(Object.assign({},qo),{Util:wi}),ea=qi,ta=Ni,ra=Vi,na=Si,oa=ki,ia={colourScheme:"lifesg",fontScheme:"default",motionScheme:"default",borderScheme:"default",spacingScheme:"default",radiusScheme:"default",shadowScheme:"default",breakpointScheme:"default",resourceScheme:"lifesg",_v2:{colorScheme:"base",textStyleScheme:"base",designTokenScheme:"base",resourceScheme:"base"}},aa={colourScheme:"bookingsg",fontScheme:"bookingsg",motionScheme:"default",borderScheme:"default",spacingScheme:"default",radiusScheme:"default",shadowScheme:"default",breakpointScheme:"default",resourceScheme:"bookingsg",_v2:{colorScheme:"bookingsg",textStyleScheme:"base",designTokenScheme:"base",resourceScheme:"bookingsg"}},sa={colourScheme:"ccube",fontScheme:"default",motionScheme:"default",borderScheme:"default",spacingScheme:"default",radiusScheme:"default",shadowScheme:"default",breakpointScheme:"default",resourceScheme:"ccube",_v2:{colorScheme:"ccube",textStyleScheme:"base",designTokenScheme:"base",resourceScheme:"ccube"}},la={colourScheme:"mylegacy",fontScheme:"default",motionScheme:"default",borderScheme:"default",spacingScheme:"default",radiusScheme:"default",shadowScheme:"default",breakpointScheme:"default",resourceScheme:"mylegacy",_v2:{colorScheme:"mylegacy",textStyleScheme:"base",designTokenScheme:"base",resourceScheme:"mylegacy"}},ca={colourScheme:"rbs",fontScheme:"default",motionScheme:"default",borderScheme:"default",spacingScheme:"default",radiusScheme:"default",shadowScheme:"default",breakpointScheme:"default",resourceScheme:"rbs",_v2:{colorScheme:"rbs",textStyleScheme:"base",designTokenScheme:"rbs",resourceScheme:"rbs"}},da={colourScheme:"oneservice",fontScheme:"default",motionScheme:"default",borderScheme:"default",spacingScheme:"default",radiusScheme:"default",shadowScheme:"default",breakpointScheme:"default",resourceScheme:"oneservice"},ua={colourScheme:"pa",fontScheme:"pa",motionScheme:"default",borderScheme:"default",spacingScheme:"default",radiusScheme:"default",shadowScheme:"default",breakpointScheme:"default",resourceScheme:"pa",componentScheme:"pa"},fa={colourScheme:"a11yplayground",fontScheme:"a11yplayground",motionScheme:"default",borderScheme:"default",spacingScheme:"default",radiusScheme:"default",shadowScheme:"default",breakpointScheme:"default",resourceScheme:"a11yplayground",componentScheme:"a11yplayground"},ha={colourScheme:"supportgowhere",fontScheme:"supportgowhere",motionScheme:"default",borderScheme:"default",spacingScheme:"default",radiusScheme:"default",shadowScheme:"default",breakpointScheme:"default",resourceScheme:"supportgowhere",componentScheme:"default"};Object.assign(Object.assign({},ia),{light:Gi(ia,"light"),dark:Gi(ia,"dark")}),Object.assign(Object.assign({},aa),{light:Gi(aa,"light"),dark:Gi(aa,"dark")}),Object.assign(Object.assign({},sa),{light:Gi(sa,"light"),dark:Gi(sa,"dark")}),Object.assign(Object.assign({},la),{light:Gi(la,"light"),dark:Gi(la,"dark")}),Object.assign(Object.assign({},ca),{light:Gi(ca,"light"),dark:Gi(ca,"dark")}),Object.assign(Object.assign({},da),{light:Gi(da,"light"),dark:Gi(da,"dark")}),Object.assign(Object.assign({},ua),{light:Gi(ua,"light"),dark:Gi(ua,"dark")}),Object.assign(Object.assign({},fa),{light:Gi(fa,"light"),dark:Gi(fa,"dark")}),Object.assign(Object.assign({},ha),{light:Gi(ha,"light"),dark:Gi(ha,"dark")});const pa=e=>O`
    display: -webkit-box;
    -webkit-line-clamp: ${e};
    -webkit-box-orient: vertical;
    overflow: hidden;
`,ga=(e,t,r=!1)=>O`
        ${Zi[`${e}-${t}`]}
        ${r?"margin-bottom: 1.05em;":"margin-bottom: 0;"}
    `,ma=e=>{if(e)return O`
            ${pa(e)}
        `},ba=(e,t,r,n,o)=>O`
    ${ga(e,t||"regular",n)}
    ${((e=!1,t=!1,r)=>t?O`
            display: block;
            ${ma(r)}
        `:e?O`
            display: inline;
        `:O`
            display: block;
            ${ma(r)}
        `)(r,n,o)}
    color: ${Qi.text};
`,va=_.div`
    ${e=>ba(e.$textStyle,e.$weight,e.$inline,e.$paragraph,e.$maxLines)}
`,ya=_.a`
    ${e=>O`
        ${ga(e.$textStyle,e.$weight||"regular")}
        color: ${Qi.hyperlink};
        text-decoration: none;

        &:hover,
        &:active,
        &:focus {
            color: ${Qi["text-hover"]};
        }
    `}
`,xa=_(I)`
    height: 1lh;
    width: 1em;
    margin-left: 0.4em;
    vertical-align: middle;
`;var wa;!function(r){const n=(t,r,n)=>{const i=(n,o)=>{var{weight:i,inline:a,paragraph:s,maxLines:l}=n,c=ct(n,["weight","inline","paragraph","maxLines"]);return e(va,Object.assign({ref:o,as:a?"span":t,$textStyle:r,$weight:i,$inline:a,$paragraph:s,$maxLines:l},c))};return i.displayName=`Typography.${n}`,o.forwardRef(i)};r.HeadingXXL=n("h1","heading-xxl","HeadingXXL"),r.HeadingXL=n("h2","heading-xl","HeadingXL"),r.HeadingLG=n("h3","heading-lg","HeadingLG"),r.HeadingMD=n("h4","heading-md","HeadingMD"),r.HeadingSM=n("h5","heading-sm","HeadingSM"),r.HeadingXS=n("h6","heading-xs","HeadingXS");const i=(t,r)=>{const n=(r,n)=>{var{weight:o,inline:i,paragraph:a,maxLines:s}=r,l=ct(r,["weight","inline","paragraph","maxLines"]);return e(va,Object.assign({ref:n,as:i?"span":"p",$textStyle:t,$weight:o,$inline:i,$paragraph:a,$maxLines:s},l))};return n.displayName=`Typography.${r}`,o.forwardRef(n)};r.BodyBL=i("body-baseline","BodyBL"),r.BodyMD=i("body-md","BodyMD"),r.BodySM=i("body-sm","BodySM"),r.BodyXS=i("body-xs","BodyXS");const a=(r,n)=>{const i=(n,o)=>{var{weight:i,children:a,external:s}=n,l=ct(n,["weight","children","external"]);return t(ya,Object.assign({ref:o,$textStyle:r,$weight:i},l,{children:[a,s&&e(xa,{})]}))};return i.displayName=`Typography.${n}`,o.forwardRef(i)};r.LinkBL=a("body-baseline","LinkBL"),r.LinkMD=a("body-md","LinkMD"),r.LinkSM=a("body-sm","LinkSM"),r.LinkXS=a("body-xs","LinkXS")}(wa||(wa={}));const $a=_.div`
    position: relative;
    display: flex;
    flex-direction: column;

    ${e=>{if(e.$border)return O`
                ${Ji.Util["dashed-default"]({radius:ta.sm,thickness:Ji["width-040"],colour:Qi.border})}
                padding: ${ea["spacing-32"]};

                ${oa.MaxWidth.sm} {
                    padding: ${ea["spacing-32"]} ${ea["spacing-20"]};
                }
            `}}
`,Ca=_.input`
    display: none;
`,Sa=_.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;

    background: ${Qi["bg-primary-subtler"]};
    ${Ji.Util["dashed-default"]({radius:ta.sm,thickness:Ji["width-040"],colour:Qi["border-primary"]})}

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`,Da=_(wa.BodyMD)`
    color: ${Qi["text-primary"]};
    text-align: center;
`,ka=_(E)`
    color: ${Qi["icon-primary"]};
    height: 4rem;
    width: 4rem;
`,Ea=u((({children:r,accept:n,capture:o,multiple:i,id:a,className:l,name:c,border:d,disabled:u,onChange:h,"data-testid":p},g)=>{const m=s(null),{getRootProps:b,isDragActive:v}=dr({onDrop:h,noClick:!0,disabled:u});f(g,(()=>Object.assign(Object.assign({},m.current),{openFileDialog:()=>{m.current&&(m.current.value="",m.current.click())}})));return t($a,Object.assign({id:a,"data-testid":p||"dropzone",$border:d,className:l},b(),{children:[e(Ca,{type:"file",name:c,ref:m,tabIndex:-1,"aria-hidden":!0,accept:n,capture:o,multiple:i,"data-testid":p?`${p}-input`:"dropzone-input",onChange:e=>{e.target.files&&h(Array.from(e.target.files))}}),r,v&&t(Sa,{children:[e(ka,{}),e(Da,{weight:"semibold",children:"Drop files here"})]})]}))}));const _a="undefined"!=typeof window&&void 0!==window.document&&void 0!==window.document.createElement;function Oa(e){const t=Object.prototype.toString.call(e);return"[object Window]"===t||"[object global]"===t}function Fa(e){return"nodeType"in e}function Ta(e){var t,r;return e?Oa(e)?e:Fa(e)&&null!=(t=null==(r=e.ownerDocument)?void 0:r.defaultView)?t:window:window}function Ia(e){const{Document:t}=Ta(e);return e instanceof t}function Ma(e){return!Oa(e)&&e instanceof Ta(e).HTMLElement}function Aa(e){return e instanceof Ta(e).SVGElement}function ja(e){return e?Oa(e)?e.document:Fa(e)?Ia(e)?e:Ma(e)||Aa(e)?e.ownerDocument:document:document:document}const Ba=_a?p:c;function Ra(e){const t=s(e);return Ba((()=>{t.current=e})),d((function(){for(var e=arguments.length,r=new Array(e),n=0;n<e;n++)r[n]=arguments[n];return null==t.current?void 0:t.current(...r)}),[])}function za(e,t){void 0===t&&(t=[e]);const r=s(e);return Ba((()=>{r.current!==e&&(r.current=e)}),t),r}function Pa(e,t){const r=s();return a((()=>{const t=e(r.current);return r.current=t,t}),[...t])}function La(e){const t=Ra(e),r=s(null),n=d((e=>{e!==r.current&&(null==t||t(e,r.current)),r.current=e}),[]);return[r,n]}function Na(e){const t=s();return c((()=>{t.current=e}),[e]),t.current}let Ha={};function Wa(e,t){return a((()=>{if(t)return t;const r=null==Ha[e]?0:Ha[e]+1;return Ha[e]=r,e+"-"+r}),[e,t])}function Ya(e){return function(t){for(var r=arguments.length,n=new Array(r>1?r-1:0),o=1;o<r;o++)n[o-1]=arguments[o];return n.reduce(((t,r)=>{const n=Object.entries(r);for(const[r,o]of n){const n=t[r];null!=n&&(t[r]=n+e*o)}return t}),{...t})}}const Va=Ya(1),Ua=Ya(-1);function Ka(e){if(!e)return!1;const{KeyboardEvent:t}=Ta(e.target);return t&&e instanceof t}function qa(e){if(function(e){if(!e)return!1;const{TouchEvent:t}=Ta(e.target);return t&&e instanceof t}(e)){if(e.touches&&e.touches.length){const{clientX:t,clientY:r}=e.touches[0];return{x:t,y:r}}if(e.changedTouches&&e.changedTouches.length){const{clientX:t,clientY:r}=e.changedTouches[0];return{x:t,y:r}}}return function(e){return"clientX"in e&&"clientY"in e}(e)?{x:e.clientX,y:e.clientY}:null}const Ga=Object.freeze({Translate:{toString(e){if(!e)return;const{x:t,y:r}=e;return"translate3d("+(t?Math.round(t):0)+"px, "+(r?Math.round(r):0)+"px, 0)"}},Scale:{toString(e){if(!e)return;const{scaleX:t,scaleY:r}=e;return"scaleX("+t+") scaleY("+r+")"}},Transform:{toString(e){if(e)return[Ga.Translate.toString(e),Ga.Scale.toString(e)].join(" ")}},Transition:{toString(e){let{property:t,duration:r,easing:n}=e;return t+" "+r+"ms "+n}}}),Qa="a,frame,iframe,input:not([type=hidden]):not(:disabled),select:not(:disabled),textarea:not(:disabled),button:not(:disabled),*[tabindex]";function Za(e){return e.matches(Qa)?e:e.querySelector(Qa)}const Xa={display:"none"};function Ja(e){let{id:t,value:r}=e;return o.createElement("div",{id:t,style:Xa},r)}function es(e){let{id:t,announcement:r,ariaLiveType:n="assertive"}=e;return o.createElement("div",{id:t,style:{position:"fixed",width:1,height:1,margin:-1,border:0,padding:0,overflow:"hidden",clip:"rect(0 0 0 0)",clipPath:"inset(100%)",whiteSpace:"nowrap"},role:"status","aria-live":n,"aria-atomic":!0},r)}const ts=i(null);const rs={draggable:"\n    To pick up a draggable item, press the space bar.\n    While dragging, use the arrow keys to move the item.\n    Press space again to drop the item in its new position, or press escape to cancel.\n  "},ns={onDragStart(e){let{active:t}=e;return"Picked up draggable item "+t.id+"."},onDragOver(e){let{active:t,over:r}=e;return r?"Draggable item "+t.id+" was moved over droppable area "+r.id+".":"Draggable item "+t.id+" is no longer over a droppable area."},onDragEnd(e){let{active:t,over:r}=e;return r?"Draggable item "+t.id+" was dropped over droppable area "+r.id:"Draggable item "+t.id+" was dropped."},onDragCancel(e){let{active:t}=e;return"Dragging was cancelled. Draggable item "+t.id+" was dropped."}};function os(e){let{announcements:t=ns,container:r,hiddenTextDescribedById:n,screenReaderInstructions:i=rs}=e;const{announce:s,announcement:l}=function(){const[e,t]=g("");return{announce:d((e=>{null!=e&&t(e)}),[]),announcement:e}}(),u=Wa("DndLiveRegion"),[f,h]=g(!1);if(c((()=>{h(!0)}),[]),function(e){const t=b(ts);c((()=>{if(!t)throw new Error("useDndMonitor must be used within a children of <DndContext>");return t(e)}),[e,t])}(a((()=>({onDragStart(e){let{active:r}=e;s(t.onDragStart({active:r}))},onDragMove(e){let{active:r,over:n}=e;t.onDragMove&&s(t.onDragMove({active:r,over:n}))},onDragOver(e){let{active:r,over:n}=e;s(t.onDragOver({active:r,over:n}))},onDragEnd(e){let{active:r,over:n}=e;s(t.onDragEnd({active:r,over:n}))},onDragCancel(e){let{active:r,over:n}=e;s(t.onDragCancel({active:r,over:n}))}})),[s,t])),!f)return null;const p=o.createElement(o.Fragment,null,o.createElement(Ja,{id:n,value:i.draggable}),o.createElement(es,{id:u,announcement:l}));return r?j(p,r):p}var is;function as(){}function ss(e,t){return a((()=>({sensor:e,options:null!=t?t:{}})),[e,t])}!function(e){e.DragStart="dragStart",e.DragMove="dragMove",e.DragEnd="dragEnd",e.DragCancel="dragCancel",e.DragOver="dragOver",e.RegisterDroppable="registerDroppable",e.SetDroppableDisabled="setDroppableDisabled",e.UnregisterDroppable="unregisterDroppable"}(is||(is={}));const ls=Object.freeze({x:0,y:0});function cs(e,t){let{data:{value:r}}=e,{data:{value:n}}=t;return r-n}function ds(e,t){let{data:{value:r}}=e,{data:{value:n}}=t;return n-r}function us(e){let{left:t,top:r,height:n,width:o}=e;return[{x:t,y:r},{x:t+o,y:r},{x:t,y:r+n},{x:t+o,y:r+n}]}function fs(e,t){if(!e||0===e.length)return null;const[r]=e;return t?r[t]:r}function hs(e,t){const r=Math.max(t.top,e.top),n=Math.max(t.left,e.left),o=Math.min(t.left+t.width,e.left+e.width),i=Math.min(t.top+t.height,e.top+e.height),a=o-n,s=i-r;if(n<o&&r<i){const r=t.width*t.height,n=e.width*e.height,o=a*s;return Number((o/(r+n-o)).toFixed(4))}return 0}const ps=e=>{let{collisionRect:t,droppableRects:r,droppableContainers:n}=e;const o=[];for(const e of n){const{id:n}=e,i=r.get(n);if(i){const r=hs(i,t);r>0&&o.push({id:n,data:{droppableContainer:e,value:r}})}}return o.sort(ds)};function gs(e,t){return e&&t?{x:e.left-t.left,y:e.top-t.top}:ls}function ms(e){return function(t){for(var r=arguments.length,n=new Array(r>1?r-1:0),o=1;o<r;o++)n[o-1]=arguments[o];return n.reduce(((t,r)=>({...t,top:t.top+e*r.y,bottom:t.bottom+e*r.y,left:t.left+e*r.x,right:t.right+e*r.x})),{...t})}}const bs=ms(1);const vs={ignoreTransform:!1};function ys(e,t){void 0===t&&(t=vs);let r=e.getBoundingClientRect();if(t.ignoreTransform){const{transform:t,transformOrigin:n}=Ta(e).getComputedStyle(e);t&&(r=function(e,t,r){const n=function(e){if(e.startsWith("matrix3d(")){const t=e.slice(9,-1).split(/, /);return{x:+t[12],y:+t[13],scaleX:+t[0],scaleY:+t[5]}}if(e.startsWith("matrix(")){const t=e.slice(7,-1).split(/, /);return{x:+t[4],y:+t[5],scaleX:+t[0],scaleY:+t[3]}}return null}(t);if(!n)return e;const{scaleX:o,scaleY:i,x:a,y:s}=n,l=e.left-a-(1-o)*parseFloat(r),c=e.top-s-(1-i)*parseFloat(r.slice(r.indexOf(" ")+1)),d=o?e.width/o:e.width,u=i?e.height/i:e.height;return{width:d,height:u,top:c,right:l+d,bottom:c+u,left:l}}(r,t,n))}const{top:n,left:o,width:i,height:a,bottom:s,right:l}=r;return{top:n,left:o,width:i,height:a,bottom:s,right:l}}function xs(e){return ys(e,{ignoreTransform:!0})}function ws(e,t){const r=[];return e?function n(o){if(null!=t&&r.length>=t)return r;if(!o)return r;if(Ia(o)&&null!=o.scrollingElement&&!r.includes(o.scrollingElement))return r.push(o.scrollingElement),r;if(!Ma(o)||Aa(o))return r;if(r.includes(o))return r;const i=Ta(e).getComputedStyle(o);return o!==e&&function(e,t){void 0===t&&(t=Ta(e).getComputedStyle(e));const r=/(auto|scroll|overlay)/;return["overflow","overflowX","overflowY"].some((e=>{const n=t[e];return"string"==typeof n&&r.test(n)}))}(o,i)&&r.push(o),function(e,t){return void 0===t&&(t=Ta(e).getComputedStyle(e)),"fixed"===t.position}(o,i)?r:n(o.parentNode)}(e):r}function $s(e){const[t]=ws(e,1);return null!=t?t:null}function Cs(e){return _a&&e?Oa(e)?e:Fa(e)?Ia(e)||e===ja(e).scrollingElement?window:Ma(e)?e:null:null:null}function Ss(e){return Oa(e)?e.scrollX:e.scrollLeft}function Ds(e){return Oa(e)?e.scrollY:e.scrollTop}function ks(e){return{x:Ss(e),y:Ds(e)}}var Es;function _s(e){return!(!_a||!e)&&e===document.scrollingElement}function Os(e){const t={x:0,y:0},r=_s(e)?{height:window.innerHeight,width:window.innerWidth}:{height:e.clientHeight,width:e.clientWidth},n={x:e.scrollWidth-r.width,y:e.scrollHeight-r.height};return{isTop:e.scrollTop<=t.y,isLeft:e.scrollLeft<=t.x,isBottom:e.scrollTop>=n.y,isRight:e.scrollLeft>=n.x,maxScroll:n,minScroll:t}}!function(e){e[e.Forward=1]="Forward",e[e.Backward=-1]="Backward"}(Es||(Es={}));const Fs={x:.2,y:.2};function Ts(e,t,r,n,o){let{top:i,left:a,right:s,bottom:l}=r;void 0===n&&(n=10),void 0===o&&(o=Fs);const{isTop:c,isBottom:d,isLeft:u,isRight:f}=Os(e),h={x:0,y:0},p={x:0,y:0},g=t.height*o.y,m=t.width*o.x;return!c&&i<=t.top+g?(h.y=Es.Backward,p.y=n*Math.abs((t.top+g-i)/g)):!d&&l>=t.bottom-g&&(h.y=Es.Forward,p.y=n*Math.abs((t.bottom-g-l)/g)),!f&&s>=t.right-m?(h.x=Es.Forward,p.x=n*Math.abs((t.right-m-s)/m)):!u&&a<=t.left+m&&(h.x=Es.Backward,p.x=n*Math.abs((t.left+m-a)/m)),{direction:h,speed:p}}function Is(e){if(e===document.scrollingElement){const{innerWidth:e,innerHeight:t}=window;return{top:0,left:0,right:e,bottom:t,width:e,height:t}}const{top:t,left:r,right:n,bottom:o}=e.getBoundingClientRect();return{top:t,left:r,right:n,bottom:o,width:e.clientWidth,height:e.clientHeight}}function Ms(e){return e.reduce(((e,t)=>Va(e,ks(t))),ls)}const As=[["x",["left","right"],function(e){return e.reduce(((e,t)=>e+Ss(t)),0)}],["y",["top","bottom"],function(e){return e.reduce(((e,t)=>e+Ds(t)),0)}]];class js{constructor(e,t){this.rect=void 0,this.width=void 0,this.height=void 0,this.top=void 0,this.bottom=void 0,this.right=void 0,this.left=void 0;const r=ws(t),n=Ms(r);this.rect={...e},this.width=e.width,this.height=e.height;for(const[e,t,o]of As)for(const i of t)Object.defineProperty(this,i,{get:()=>{const t=o(r),a=n[e]-t;return this.rect[i]+a},enumerable:!0});Object.defineProperty(this,"rect",{enumerable:!1})}}class Bs{constructor(e){this.target=void 0,this.listeners=[],this.removeAll=()=>{this.listeners.forEach((e=>{var t;return null==(t=this.target)?void 0:t.removeEventListener(...e)}))},this.target=e}add(e,t,r){var n;null==(n=this.target)||n.addEventListener(e,t,r),this.listeners.push([e,t,r])}}function Rs(e,t){const r=Math.abs(e.x),n=Math.abs(e.y);return"number"==typeof t?Math.sqrt(r**2+n**2)>t:"x"in t&&"y"in t?r>t.x&&n>t.y:"x"in t?r>t.x:"y"in t&&n>t.y}var zs,Ps;function Ls(e){e.preventDefault()}function Ns(e){e.stopPropagation()}!function(e){e.Click="click",e.DragStart="dragstart",e.Keydown="keydown",e.ContextMenu="contextmenu",e.Resize="resize",e.SelectionChange="selectionchange",e.VisibilityChange="visibilitychange"}(zs||(zs={})),function(e){e.Space="Space",e.Down="ArrowDown",e.Right="ArrowRight",e.Left="ArrowLeft",e.Up="ArrowUp",e.Esc="Escape",e.Enter="Enter"}(Ps||(Ps={}));const Hs={start:[Ps.Space,Ps.Enter],cancel:[Ps.Esc],end:[Ps.Space,Ps.Enter]},Ws=(e,t)=>{let{currentCoordinates:r}=t;switch(e.code){case Ps.Right:return{...r,x:r.x+25};case Ps.Left:return{...r,x:r.x-25};case Ps.Down:return{...r,y:r.y+25};case Ps.Up:return{...r,y:r.y-25}}};let Ys=class{constructor(e){this.props=void 0,this.autoScrollEnabled=!1,this.referenceCoordinates=void 0,this.listeners=void 0,this.windowListeners=void 0,this.props=e;const{event:{target:t}}=e;this.props=e,this.listeners=new Bs(ja(t)),this.windowListeners=new Bs(Ta(t)),this.handleKeyDown=this.handleKeyDown.bind(this),this.handleCancel=this.handleCancel.bind(this),this.attach()}attach(){this.handleStart(),this.windowListeners.add(zs.Resize,this.handleCancel),this.windowListeners.add(zs.VisibilityChange,this.handleCancel),setTimeout((()=>this.listeners.add(zs.Keydown,this.handleKeyDown)))}handleStart(){const{activeNode:e,onStart:t}=this.props,r=e.node.current;r&&function(e,t){if(void 0===t&&(t=ys),!e)return;const{top:r,left:n,bottom:o,right:i}=t(e);$s(e)&&(o<=0||i<=0||r>=window.innerHeight||n>=window.innerWidth)&&e.scrollIntoView({block:"center",inline:"center"})}(r),t(ls)}handleKeyDown(e){if(Ka(e)){const{active:t,context:r,options:n}=this.props,{keyboardCodes:o=Hs,coordinateGetter:i=Ws,scrollBehavior:a="smooth"}=n,{code:s}=e;if(o.end.includes(s))return void this.handleEnd(e);if(o.cancel.includes(s))return void this.handleCancel(e);const{collisionRect:l}=r.current,c=l?{x:l.left,y:l.top}:ls;this.referenceCoordinates||(this.referenceCoordinates=c);const d=i(e,{active:t,context:r.current,currentCoordinates:c});if(d){const t=Ua(d,c),n={x:0,y:0},{scrollableAncestors:o}=r.current;for(const r of o){const o=e.code,{isTop:i,isRight:s,isLeft:l,isBottom:c,maxScroll:u,minScroll:f}=Os(r),h=Is(r),p={x:Math.min(o===Ps.Right?h.right-h.width/2:h.right,Math.max(o===Ps.Right?h.left:h.left+h.width/2,d.x)),y:Math.min(o===Ps.Down?h.bottom-h.height/2:h.bottom,Math.max(o===Ps.Down?h.top:h.top+h.height/2,d.y))},g=o===Ps.Right&&!s||o===Ps.Left&&!l,m=o===Ps.Down&&!c||o===Ps.Up&&!i;if(g&&p.x!==d.x){const e=r.scrollLeft+t.x,i=o===Ps.Right&&e<=u.x||o===Ps.Left&&e>=f.x;if(i&&!t.y)return void r.scrollTo({left:e,behavior:a});n.x=i?r.scrollLeft-e:o===Ps.Right?r.scrollLeft-u.x:r.scrollLeft-f.x,n.x&&r.scrollBy({left:-n.x,behavior:a});break}if(m&&p.y!==d.y){const e=r.scrollTop+t.y,i=o===Ps.Down&&e<=u.y||o===Ps.Up&&e>=f.y;if(i&&!t.x)return void r.scrollTo({top:e,behavior:a});n.y=i?r.scrollTop-e:o===Ps.Down?r.scrollTop-u.y:r.scrollTop-f.y,n.y&&r.scrollBy({top:-n.y,behavior:a});break}}this.handleMove(e,Va(Ua(d,this.referenceCoordinates),n))}}}handleMove(e,t){const{onMove:r}=this.props;e.preventDefault(),r(t)}handleEnd(e){const{onEnd:t}=this.props;e.preventDefault(),this.detach(),t()}handleCancel(e){const{onCancel:t}=this.props;e.preventDefault(),this.detach(),t()}detach(){this.listeners.removeAll(),this.windowListeners.removeAll()}};function Vs(e){return Boolean(e&&"distance"in e)}function Us(e){return Boolean(e&&"delay"in e)}Ys.activators=[{eventName:"onKeyDown",handler:(e,t,r)=>{let{keyboardCodes:n=Hs,onActivation:o}=t,{active:i}=r;const{code:a}=e.nativeEvent;if(n.start.includes(a)){const t=i.activatorNode.current;return(!t||e.target===t)&&(e.preventDefault(),null==o||o({event:e.nativeEvent}),!0)}return!1}}];class Ks{constructor(e,t,r){var n;void 0===r&&(r=function(e){const{EventTarget:t}=Ta(e);return e instanceof t?e:ja(e)}(e.event.target)),this.props=void 0,this.events=void 0,this.autoScrollEnabled=!0,this.document=void 0,this.activated=!1,this.initialCoordinates=void 0,this.timeoutId=null,this.listeners=void 0,this.documentListeners=void 0,this.windowListeners=void 0,this.props=e,this.events=t;const{event:o}=e,{target:i}=o;this.props=e,this.events=t,this.document=ja(i),this.documentListeners=new Bs(this.document),this.listeners=new Bs(r),this.windowListeners=new Bs(Ta(i)),this.initialCoordinates=null!=(n=qa(o))?n:ls,this.handleStart=this.handleStart.bind(this),this.handleMove=this.handleMove.bind(this),this.handleEnd=this.handleEnd.bind(this),this.handleCancel=this.handleCancel.bind(this),this.handleKeydown=this.handleKeydown.bind(this),this.removeTextSelection=this.removeTextSelection.bind(this),this.attach()}attach(){const{events:e,props:{options:{activationConstraint:t,bypassActivationConstraint:r}}}=this;if(this.listeners.add(e.move.name,this.handleMove,{passive:!1}),this.listeners.add(e.end.name,this.handleEnd),this.windowListeners.add(zs.Resize,this.handleCancel),this.windowListeners.add(zs.DragStart,Ls),this.windowListeners.add(zs.VisibilityChange,this.handleCancel),this.windowListeners.add(zs.ContextMenu,Ls),this.documentListeners.add(zs.Keydown,this.handleKeydown),t){if(null!=r&&r({event:this.props.event,activeNode:this.props.activeNode,options:this.props.options}))return this.handleStart();if(Us(t))return void(this.timeoutId=setTimeout(this.handleStart,t.delay));if(Vs(t))return}this.handleStart()}detach(){this.listeners.removeAll(),this.windowListeners.removeAll(),setTimeout(this.documentListeners.removeAll,50),null!==this.timeoutId&&(clearTimeout(this.timeoutId),this.timeoutId=null)}handleStart(){const{initialCoordinates:e}=this,{onStart:t}=this.props;e&&(this.activated=!0,this.documentListeners.add(zs.Click,Ns,{capture:!0}),this.removeTextSelection(),this.documentListeners.add(zs.SelectionChange,this.removeTextSelection),t(e))}handleMove(e){var t;const{activated:r,initialCoordinates:n,props:o}=this,{onMove:i,options:{activationConstraint:a}}=o;if(!n)return;const s=null!=(t=qa(e))?t:ls,l=Ua(n,s);if(!r&&a){if(Vs(a)){if(null!=a.tolerance&&Rs(l,a.tolerance))return this.handleCancel();if(Rs(l,a.distance))return this.handleStart()}return Us(a)&&Rs(l,a.tolerance)?this.handleCancel():void 0}e.cancelable&&e.preventDefault(),i(s)}handleEnd(){const{onEnd:e}=this.props;this.detach(),e()}handleCancel(){const{onCancel:e}=this.props;this.detach(),e()}handleKeydown(e){e.code===Ps.Esc&&this.handleCancel()}removeTextSelection(){var e;null==(e=this.document.getSelection())||e.removeAllRanges()}}const qs={move:{name:"pointermove"},end:{name:"pointerup"}};class Gs extends Ks{constructor(e){const{event:t}=e,r=ja(t.target);super(e,qs,r)}}Gs.activators=[{eventName:"onPointerDown",handler:(e,t)=>{let{nativeEvent:r}=e,{onActivation:n}=t;return!(!r.isPrimary||0!==r.button)&&(null==n||n({event:r}),!0)}}];const Qs={move:{name:"mousemove"},end:{name:"mouseup"}};var Zs;!function(e){e[e.RightClick=2]="RightClick"}(Zs||(Zs={}));let Xs=class extends Ks{constructor(e){super(e,Qs,ja(e.event.target))}};Xs.activators=[{eventName:"onMouseDown",handler:(e,t)=>{let{nativeEvent:r}=e,{onActivation:n}=t;return r.button!==Zs.RightClick&&(null==n||n({event:r}),!0)}}];const Js={move:{name:"touchmove"},end:{name:"touchend"}};class el extends Ks{constructor(e){super(e,Js)}static setup(){return window.addEventListener(Js.move.name,e,{capture:!1,passive:!1}),function(){window.removeEventListener(Js.move.name,e)};function e(){}}}var tl,rl;function nl(e){let{acceleration:t,activator:r=tl.Pointer,canScroll:n,draggingRect:o,enabled:i,interval:l=5,order:u=rl.TreeOrder,pointerCoordinates:f,scrollableAncestors:h,scrollableAncestorRects:p,delta:g,threshold:m}=e;const b=function(e){let{delta:t,disabled:r}=e;const n=Na(t);return Pa((e=>{if(r||!n||!e)return ol;const o={x:Math.sign(t.x-n.x),y:Math.sign(t.y-n.y)};return{x:{[Es.Backward]:e.x[Es.Backward]||-1===o.x,[Es.Forward]:e.x[Es.Forward]||1===o.x},y:{[Es.Backward]:e.y[Es.Backward]||-1===o.y,[Es.Forward]:e.y[Es.Forward]||1===o.y}}}),[r,t,n])}({delta:g,disabled:!i}),[v,y]=function(){const e=s(null);return[d(((t,r)=>{e.current=setInterval(t,r)}),[]),d((()=>{null!==e.current&&(clearInterval(e.current),e.current=null)}),[])]}(),x=s({x:0,y:0}),w=s({x:0,y:0}),$=a((()=>{switch(r){case tl.Pointer:return f?{top:f.y,bottom:f.y,left:f.x,right:f.x}:null;case tl.DraggableRect:return o}}),[r,o,f]),C=s(null),S=d((()=>{const e=C.current;if(!e)return;const t=x.current.x*w.current.x,r=x.current.y*w.current.y;e.scrollBy(t,r)}),[]),D=a((()=>u===rl.TreeOrder?[...h].reverse():h),[u,h]);c((()=>{if(i&&h.length&&$){for(const e of D){if(!1===(null==n?void 0:n(e)))continue;const r=h.indexOf(e),o=p[r];if(!o)continue;const{direction:i,speed:a}=Ts(e,o,$,t,m);for(const e of["x","y"])b[e][i[e]]||(a[e]=0,i[e]=0);if(a.x>0||a.y>0)return y(),C.current=e,v(S,l),x.current=a,void(w.current=i)}x.current={x:0,y:0},w.current={x:0,y:0},y()}else y()}),[t,S,n,y,i,l,JSON.stringify($),JSON.stringify(b),v,h,D,p,JSON.stringify(m)])}el.activators=[{eventName:"onTouchStart",handler:(e,t)=>{let{nativeEvent:r}=e,{onActivation:n}=t;const{touches:o}=r;return!(o.length>1)&&(null==n||n({event:r}),!0)}}],function(e){e[e.Pointer=0]="Pointer",e[e.DraggableRect=1]="DraggableRect"}(tl||(tl={})),function(e){e[e.TreeOrder=0]="TreeOrder",e[e.ReversedTreeOrder=1]="ReversedTreeOrder"}(rl||(rl={}));const ol={x:{[Es.Backward]:!1,[Es.Forward]:!1},y:{[Es.Backward]:!1,[Es.Forward]:!1}};var il,al;!function(e){e[e.Always=0]="Always",e[e.BeforeDragging=1]="BeforeDragging",e[e.WhileDragging=2]="WhileDragging"}(il||(il={})),function(e){e.Optimized="optimized"}(al||(al={}));const sl=new Map;function ll(e,t){return Pa((r=>e?r||("function"==typeof t?t(e):e):null),[t,e])}function cl(e){let{callback:t,disabled:r}=e;const n=Ra(t),o=a((()=>{if(r||"undefined"==typeof window||void 0===window.ResizeObserver)return;const{ResizeObserver:e}=window;return new e(n)}),[r]);return c((()=>()=>null==o?void 0:o.disconnect()),[o]),o}function dl(e){return new js(ys(e),e)}function ul(e,t,r){void 0===t&&(t=dl);const[n,o]=l((function(n){if(!e)return null;var o;if(!1===e.isConnected)return null!=(o=null!=n?n:r)?o:null;const i=t(e);if(JSON.stringify(n)===JSON.stringify(i))return n;return i}),null),i=function(e){let{callback:t,disabled:r}=e;const n=Ra(t),o=a((()=>{if(r||"undefined"==typeof window||void 0===window.MutationObserver)return;const{MutationObserver:e}=window;return new e(n)}),[n,r]);return c((()=>()=>null==o?void 0:o.disconnect()),[o]),o}({callback(t){if(e)for(const r of t){const{type:t,target:n}=r;if("childList"===t&&n instanceof HTMLElement&&n.contains(e)){o();break}}}}),s=cl({callback:o});return Ba((()=>{o(),e?(null==s||s.observe(e),null==i||i.observe(document.body,{childList:!0,subtree:!0})):(null==s||s.disconnect(),null==i||i.disconnect())}),[e]),n}const fl=[];function hl(e,t){void 0===t&&(t=[]);const r=s(null);return c((()=>{r.current=null}),t),c((()=>{const t=e!==ls;t&&!r.current&&(r.current=e),!t&&r.current&&(r.current=null)}),[e]),r.current?Ua(e,r.current):ls}function pl(e){return a((()=>e?function(e){const t=e.innerWidth,r=e.innerHeight;return{top:0,left:0,right:t,bottom:r,width:t,height:r}}(e):null),[e])}const gl=[];function ml(e){let{measure:t}=e;const[r,n]=g(null),o=d((e=>{for(const{target:r}of e)if(Ma(r)){n((e=>{const n=t(r);return e?{...e,width:n.width,height:n.height}:n}));break}}),[t]),i=cl({callback:o}),s=d((e=>{const r=function(e){if(!e)return null;if(e.children.length>1)return e;const t=e.children[0];return Ma(t)?t:e}(e);null==i||i.disconnect(),r&&(null==i||i.observe(r)),n(r?t(r):null)}),[t,i]),[l,c]=La(s);return a((()=>({nodeRef:l,rect:r,setRef:c})),[r,l,c])}const bl=[{sensor:Gs,options:{}},{sensor:Ys,options:{}}],vl={current:{}},yl={draggable:{measure:xs},droppable:{measure:xs,strategy:il.WhileDragging,frequency:al.Optimized},dragOverlay:{measure:ys}};class xl extends Map{get(e){var t;return null!=e&&null!=(t=super.get(e))?t:void 0}toArray(){return Array.from(this.values())}getEnabled(){return this.toArray().filter((e=>{let{disabled:t}=e;return!t}))}getNodeFor(e){var t,r;return null!=(t=null==(r=this.get(e))?void 0:r.node.current)?t:void 0}}const wl={activatorEvent:null,active:null,activeNode:null,activeNodeRect:null,collisions:null,containerNodeRect:null,draggableNodes:new Map,droppableRects:new Map,droppableContainers:new xl,over:null,dragOverlay:{nodeRef:{current:null},rect:null,setRef:as},scrollableAncestors:[],scrollableAncestorRects:[],measuringConfiguration:yl,measureDroppableContainers:as,windowRect:null,measuringScheduled:!1},$l=i({activatorEvent:null,activators:[],active:null,activeNodeRect:null,ariaDescribedById:{draggable:""},dispatch:as,draggableNodes:new Map,over:null,measureDroppableContainers:as}),Cl=i(wl);function Sl(){return{draggable:{active:null,initialCoordinates:{x:0,y:0},nodes:new Map,translate:{x:0,y:0}},droppable:{containers:new xl}}}function Dl(e,t){switch(t.type){case is.DragStart:return{...e,draggable:{...e.draggable,initialCoordinates:t.initialCoordinates,active:t.active}};case is.DragMove:return e.draggable.active?{...e,draggable:{...e.draggable,translate:{x:t.coordinates.x-e.draggable.initialCoordinates.x,y:t.coordinates.y-e.draggable.initialCoordinates.y}}}:e;case is.DragEnd:case is.DragCancel:return{...e,draggable:{...e.draggable,active:null,initialCoordinates:{x:0,y:0},translate:{x:0,y:0}}};case is.RegisterDroppable:{const{element:r}=t,{id:n}=r,o=new xl(e.droppable.containers);return o.set(n,r),{...e,droppable:{...e.droppable,containers:o}}}case is.SetDroppableDisabled:{const{id:r,key:n,disabled:o}=t,i=e.droppable.containers.get(r);if(!i||n!==i.key)return e;const a=new xl(e.droppable.containers);return a.set(r,{...i,disabled:o}),{...e,droppable:{...e.droppable,containers:a}}}case is.UnregisterDroppable:{const{id:r,key:n}=t,o=e.droppable.containers.get(r);if(!o||n!==o.key)return e;const i=new xl(e.droppable.containers);return i.delete(r),{...e,droppable:{...e.droppable,containers:i}}}default:return e}}function kl(e){let{disabled:t}=e;const{active:r,activatorEvent:n,draggableNodes:o}=b($l),i=Na(n),a=Na(null==r?void 0:r.id);return c((()=>{if(!t&&!n&&i&&null!=a){if(!Ka(i))return;if(document.activeElement===i.target)return;const e=o.get(a);if(!e)return;const{activatorNode:t,node:r}=e;if(!t.current&&!r.current)return;requestAnimationFrame((()=>{for(const e of[t.current,r.current]){if(!e)continue;const t=Za(e);if(t){t.focus();break}}}))}}),[n,t,o,a,i]),null}const El=i({...ls,scaleX:1,scaleY:1});var _l;!function(e){e[e.Uninitialized=0]="Uninitialized",e[e.Initializing=1]="Initializing",e[e.Initialized=2]="Initialized"}(_l||(_l={}));const Ol=m((function(e){var t,r,n,i;let{id:u,accessibility:f,autoScroll:h=!0,children:p,sensors:m=bl,collisionDetection:b=ps,measuring:v,modifiers:y,...x}=e;const w=l(Dl,void 0,Sl),[$,C]=w,[S,D]=function(){const[e]=g((()=>new Set)),t=d((t=>(e.add(t),()=>e.delete(t))),[e]);return[d((t=>{let{type:r,event:n}=t;e.forEach((e=>{var t;return null==(t=e[r])?void 0:t.call(e,n)}))}),[e]),t]}(),[k,E]=g(_l.Uninitialized),_=k===_l.Initialized,{draggable:{active:O,nodes:F,translate:T},droppable:{containers:I}}=$,M=O?F.get(O):null,j=s({initial:null,translated:null}),B=a((()=>{var e;return null!=O?{id:O,data:null!=(e=null==M?void 0:M.data)?e:vl,rect:j}:null}),[O,M]),R=s(null),[z,P]=g(null),[L,N]=g(null),H=za(x,Object.values(x)),W=Wa("DndDescribedBy",u),Y=a((()=>I.getEnabled()),[I]),V=function(e){return a((()=>({draggable:{...yl.draggable,...null==e?void 0:e.draggable},droppable:{...yl.droppable,...null==e?void 0:e.droppable},dragOverlay:{...yl.dragOverlay,...null==e?void 0:e.dragOverlay}})),[null==e?void 0:e.draggable,null==e?void 0:e.droppable,null==e?void 0:e.dragOverlay])}(v),{droppableRects:U,measureDroppableContainers:K,measuringScheduled:q}=function(e,t){let{dragging:r,dependencies:n,config:o}=t;const[i,a]=g(null),{frequency:l,measure:u,strategy:f}=o,h=s(e),p=function(){switch(f){case il.Always:return!1;case il.BeforeDragging:return r;default:return!r}}(),m=za(p),b=d((function(e){void 0===e&&(e=[]),m.current||a((t=>null===t?e:t.concat(e.filter((e=>!t.includes(e))))))}),[m]),v=s(null),y=Pa((t=>{if(p&&!r)return sl;if(!t||t===sl||h.current!==e||null!=i){const t=new Map;for(let r of e){if(!r)continue;if(i&&i.length>0&&!i.includes(r.id)&&r.rect.current){t.set(r.id,r.rect.current);continue}const e=r.node.current,n=e?new js(u(e),e):null;r.rect.current=n,n&&t.set(r.id,n)}return t}return t}),[e,i,r,p,u]);return c((()=>{h.current=e}),[e]),c((()=>{p||b()}),[r,p]),c((()=>{i&&i.length>0&&a(null)}),[JSON.stringify(i)]),c((()=>{p||"number"!=typeof l||null!==v.current||(v.current=setTimeout((()=>{b(),v.current=null}),l))}),[l,p,b,...n]),{droppableRects:y,measureDroppableContainers:b,measuringScheduled:null!=i}}(Y,{dragging:_,dependencies:[T.x,T.y],config:V.droppable}),G=function(e,t){const r=null!==t?e.get(t):void 0,n=r?r.node.current:null;return Pa((e=>{var r;return null===t?null:null!=(r=null!=n?n:e)?r:null}),[n,t])}(F,O),Q=a((()=>L?qa(L):null),[L]),Z=function(){const e=!1===(null==z?void 0:z.autoScrollEnabled),t="object"==typeof h?!1===h.enabled:!1===h,r=_&&!e&&!t;if("object"==typeof h)return{...h,enabled:r};return{enabled:r}}(),X=function(e,t){return ll(e,t)}(G,V.draggable.measure);!function(e){let{activeNode:t,measure:r,initialRect:n,config:o=!0}=e;const i=s(!1),{x:a,y:l}="boolean"==typeof o?{x:o,y:o}:o;Ba((()=>{if(!a&&!l||!t)return void(i.current=!1);if(i.current||!n)return;const e=null==t?void 0:t.node.current;if(!e||!1===e.isConnected)return;const o=gs(r(e),n);if(a||(o.x=0),l||(o.y=0),i.current=!0,Math.abs(o.x)>0||Math.abs(o.y)>0){const t=$s(e);t&&t.scrollBy({top:o.y,left:o.x})}}),[t,a,l,n,r])}({activeNode:O?F.get(O):null,config:Z.layoutShiftCompensation,initialRect:X,measure:V.draggable.measure});const J=ul(G,V.draggable.measure,X),ee=ul(G?G.parentElement:null),te=s({activatorEvent:null,active:null,activeNode:G,collisionRect:null,collisions:null,droppableRects:U,draggableNodes:F,draggingNode:null,draggingNodeRect:null,droppableContainers:I,over:null,scrollableAncestors:[],scrollAdjustedTranslate:null}),re=I.getNodeFor(null==(t=te.current.over)?void 0:t.id),ne=ml({measure:V.dragOverlay.measure}),oe=null!=(r=ne.nodeRef.current)?r:G,ie=_?null!=(n=ne.rect)?n:J:null,ae=Boolean(ne.nodeRef.current&&ne.rect),se=gs(le=ae?null:J,ll(le));var le;const ce=pl(oe?Ta(oe):null),de=function(e){const t=s(e),r=Pa((r=>e?r&&r!==fl&&e&&t.current&&e.parentNode===t.current.parentNode?r:ws(e):fl),[e]);return c((()=>{t.current=e}),[e]),r}(_?null!=re?re:G:null),ue=function(e,t){void 0===t&&(t=ys);const[r]=e,n=pl(r?Ta(r):null),[o,i]=l((function(){return e.length?e.map((e=>_s(e)?n:new js(t(e),e))):gl}),gl),a=cl({callback:i});return e.length>0&&o===gl&&i(),Ba((()=>{e.length?e.forEach((e=>null==a?void 0:a.observe(e))):(null==a||a.disconnect(),i())}),[e]),o}(de),fe=function(e,t){let{transform:r,...n}=t;return null!=e&&e.length?e.reduce(((e,t)=>t({transform:e,...n})),r):r}(y,{transform:{x:T.x-se.x,y:T.y-se.y,scaleX:1,scaleY:1},activatorEvent:L,active:B,activeNodeRect:J,containerNodeRect:ee,draggingNodeRect:ie,over:te.current.over,overlayNodeRect:ne.rect,scrollableAncestors:de,scrollableAncestorRects:ue,windowRect:ce}),he=Q?Va(Q,T):null,pe=function(e){const[t,r]=g(null),n=s(e),o=d((e=>{const t=Cs(e.target);t&&r((e=>e?(e.set(t,ks(t)),new Map(e)):null))}),[]);return c((()=>{const t=n.current;if(e!==t){i(t);const a=e.map((e=>{const t=Cs(e);return t?(t.addEventListener("scroll",o,{passive:!0}),[t,ks(t)]):null})).filter((e=>null!=e));r(a.length?new Map(a):null),n.current=e}return()=>{i(e),i(t)};function i(e){e.forEach((e=>{const t=Cs(e);null==t||t.removeEventListener("scroll",o)}))}}),[o,e]),a((()=>e.length?t?Array.from(t.values()).reduce(((e,t)=>Va(e,t)),ls):Ms(e):ls),[e,t])}(de),ge=hl(pe),me=hl(pe,[J]),be=Va(fe,ge),ve=ie?bs(ie,fe):null,ye=B&&ve?b({active:B,collisionRect:ve,droppableRects:U,droppableContainers:Y,pointerCoordinates:he}):null,xe=fs(ye,"id"),[we,$e]=g(null),Ce=function(e,t,r){return{...e,scaleX:t&&r?t.width/r.width:1,scaleY:t&&r?t.height/r.height:1}}(ae?fe:Va(fe,me),null!=(i=null==we?void 0:we.rect)?i:null,J),Se=d(((e,t)=>{let{sensor:r,options:n}=t;if(null==R.current)return;const o=F.get(R.current);if(!o)return;const i=e.nativeEvent,a=new r({active:R.current,activeNode:o,event:i,options:n,context:te,onStart(e){const t=R.current;if(null==t)return;const r=F.get(t);if(!r)return;const{onDragStart:n}=H.current,o={active:{id:t,data:r.data,rect:j}};A((()=>{null==n||n(o),E(_l.Initializing),C({type:is.DragStart,initialCoordinates:e,active:t}),S({type:"onDragStart",event:o})}))},onMove(e){C({type:is.DragMove,coordinates:e})},onEnd:s(is.DragEnd),onCancel:s(is.DragCancel)});function s(e){return async function(){const{active:t,collisions:r,over:n,scrollAdjustedTranslate:o}=te.current;let a=null;if(t&&o){const{cancelDrop:s}=H.current;if(a={activatorEvent:i,active:t,collisions:r,delta:o,over:n},e===is.DragEnd&&"function"==typeof s){await Promise.resolve(s(a))&&(e=is.DragCancel)}}R.current=null,A((()=>{C({type:e}),E(_l.Uninitialized),$e(null),P(null),N(null);const t=e===is.DragEnd?"onDragEnd":"onDragCancel";if(a){const e=H.current[t];null==e||e(a),S({type:t,event:a})}}))}}A((()=>{P(a),N(e.nativeEvent)}))}),[F]),De=d(((e,t)=>(r,n)=>{const o=r.nativeEvent,i=F.get(n);if(null!==R.current||!i||o.dndKit||o.defaultPrevented)return;const a={active:i};!0===e(r,t.options,a)&&(o.dndKit={capturedBy:t.sensor},R.current=n,Se(r,t))}),[F,Se]),ke=function(e,t){return a((()=>e.reduce(((e,r)=>{const{sensor:n}=r;return[...e,...n.activators.map((e=>({eventName:e.eventName,handler:t(e.handler,r)})))]}),[])),[e,t])}(m,De);!function(e){c((()=>{if(!_a)return;const t=e.map((e=>{let{sensor:t}=e;return null==t.setup?void 0:t.setup()}));return()=>{for(const e of t)null==e||e()}}),e.map((e=>{let{sensor:t}=e;return t})))}(m),Ba((()=>{J&&k===_l.Initializing&&E(_l.Initialized)}),[J,k]),c((()=>{const{onDragMove:e}=H.current,{active:t,activatorEvent:r,collisions:n,over:o}=te.current;if(!t||!r)return;const i={active:t,activatorEvent:r,collisions:n,delta:{x:be.x,y:be.y},over:o};A((()=>{null==e||e(i),S({type:"onDragMove",event:i})}))}),[be.x,be.y]),c((()=>{const{active:e,activatorEvent:t,collisions:r,droppableContainers:n,scrollAdjustedTranslate:o}=te.current;if(!e||null==R.current||!t||!o)return;const{onDragOver:i}=H.current,a=n.get(xe),s=a&&a.rect.current?{id:a.id,rect:a.rect.current,data:a.data,disabled:a.disabled}:null,l={active:e,activatorEvent:t,collisions:r,delta:{x:o.x,y:o.y},over:s};A((()=>{$e(s),null==i||i(l),S({type:"onDragOver",event:l})}))}),[xe]),Ba((()=>{te.current={activatorEvent:L,active:B,activeNode:G,collisionRect:ve,collisions:ye,droppableRects:U,draggableNodes:F,draggingNode:oe,draggingNodeRect:ie,droppableContainers:I,over:we,scrollableAncestors:de,scrollAdjustedTranslate:be},j.current={initial:ie,translated:ve}}),[B,G,ye,ve,F,oe,ie,U,I,we,de,be]),nl({...Z,delta:T,draggingRect:ve,pointerCoordinates:he,scrollableAncestors:de,scrollableAncestorRects:ue});const Ee=a((()=>({active:B,activeNode:G,activeNodeRect:J,activatorEvent:L,collisions:ye,containerNodeRect:ee,dragOverlay:ne,draggableNodes:F,droppableContainers:I,droppableRects:U,over:we,measureDroppableContainers:K,scrollableAncestors:de,scrollableAncestorRects:ue,measuringConfiguration:V,measuringScheduled:q,windowRect:ce})),[B,G,J,L,ye,ee,ne,F,I,U,we,K,de,ue,V,q,ce]),_e=a((()=>({activatorEvent:L,activators:ke,active:B,activeNodeRect:J,ariaDescribedById:{draggable:W},dispatch:C,draggableNodes:F,over:we,measureDroppableContainers:K})),[L,ke,B,J,C,W,F,we,K]);return o.createElement(ts.Provider,{value:D},o.createElement($l.Provider,{value:_e},o.createElement(Cl.Provider,{value:Ee},o.createElement(El.Provider,{value:Ce},p)),o.createElement(kl,{disabled:!1===(null==f?void 0:f.restoreFocus)})),o.createElement(os,{...f,hiddenTextDescribedById:W}))})),Fl=i(null),Tl="button";function Il(e){let{id:t,data:r,disabled:n=!1,attributes:o}=e;const i=Wa("Droppable"),{activators:s,activatorEvent:l,active:c,activeNodeRect:d,ariaDescribedById:u,draggableNodes:f,over:h}=b($l),{role:p=Tl,roleDescription:g="draggable",tabIndex:m=0}=null!=o?o:{},v=(null==c?void 0:c.id)===t,y=b(v?El:Fl),[x,w]=La(),[$,C]=La(),S=function(e,t){return a((()=>e.reduce(((e,r)=>{let{eventName:n,handler:o}=r;return e[n]=e=>{o(e,t)},e}),{})),[e,t])}(s,t),D=za(r);Ba((()=>(f.set(t,{id:t,key:i,node:x,activatorNode:$,data:D}),()=>{const e=f.get(t);e&&e.key===i&&f.delete(t)})),[f,t]);return{active:c,activatorEvent:l,activeNodeRect:d,attributes:a((()=>({role:p,tabIndex:m,"aria-disabled":n,"aria-pressed":!(!v||p!==Tl)||void 0,"aria-roledescription":g,"aria-describedby":u.draggable})),[n,p,m,v,g,u.draggable]),isDragging:v,listeners:n?void 0:S,node:x,over:h,setNodeRef:w,setActivatorNodeRef:C,transform:y}}const Ml={timeout:25};function Al(e,t,r){const n=e.slice();return n.splice(r<0?n.length+r:r,0,n.splice(t,1)[0]),n}function jl(e,t){return e.reduce(((e,r,n)=>{const o=t.get(r);return o&&(e[n]=o),e}),Array(e.length))}function Bl(e){return null!==e&&e>=0}const Rl=e=>{let{rects:t,activeIndex:r,overIndex:n,index:o}=e;const i=Al(t,n,r),a=t[o],s=i[o];return s&&a?{x:s.left-a.left,y:s.top-a.top,scaleX:s.width/a.width,scaleY:s.height/a.height}:null},zl={scaleX:1,scaleY:1},Pl=e=>{var t;let{activeIndex:r,activeNodeRect:n,index:o,rects:i,overIndex:a}=e;const s=null!=(t=i[r])?t:n;if(!s)return null;if(o===r){const e=i[a];return e?{x:0,y:r<a?e.top+e.height-(s.top+s.height):e.top-s.top,...zl}:null}const l=function(e,t,r){const n=e[t],o=e[t-1],i=e[t+1];if(!n)return 0;if(r<t)return o?n.top-(o.top+o.height):i?i.top-(n.top+n.height):0;return i?i.top-(n.top+n.height):o?n.top-(o.top+o.height):0}(i,o,r);return o>r&&o<=a?{x:0,y:-s.height-l,...zl}:o<r&&o>=a?{x:0,y:s.height+l,...zl}:{x:0,y:0,...zl}};const Ll="Sortable",Nl=o.createContext({activeIndex:-1,containerId:Ll,disableTransforms:!1,items:[],overIndex:-1,useDragOverlay:!1,sortedRects:[],strategy:Rl,disabled:{draggable:!1,droppable:!1}});function Hl(e){let{children:t,id:r,items:n,strategy:i=Rl,disabled:l=!1}=e;const{active:d,dragOverlay:u,droppableRects:f,over:h,measureDroppableContainers:p}=b(Cl),g=Wa(Ll,r),m=Boolean(null!==u.rect),v=a((()=>n.map((e=>"object"==typeof e&&"id"in e?e.id:e))),[n]),y=null!=d,x=d?v.indexOf(d.id):-1,w=h?v.indexOf(h.id):-1,$=s(v),C=!function(e,t){if(e===t)return!0;if(e.length!==t.length)return!1;for(let r=0;r<e.length;r++)if(e[r]!==t[r])return!1;return!0}(v,$.current),S=-1!==w&&-1===x||C,D=function(e){return"boolean"==typeof e?{draggable:e,droppable:e}:e}(l);Ba((()=>{C&&y&&p(v)}),[C,v,y,p]),c((()=>{$.current=v}),[v]);const k=a((()=>({activeIndex:x,containerId:g,disabled:D,disableTransforms:S,items:v,overIndex:w,useDragOverlay:m,sortedRects:jl(v,f),strategy:i})),[x,g,D.draggable,D.droppable,S,v,w,f,m,i]);return o.createElement(Nl.Provider,{value:k},t)}const Wl=e=>{let{id:t,items:r,activeIndex:n,overIndex:o}=e;return Al(r,n,o).indexOf(t)},Yl=e=>{let{containerId:t,isSorting:r,wasDragging:n,index:o,items:i,newIndex:a,previousItems:s,previousContainerId:l,transition:c}=e;return!(!c||!n)&&((s===i||o!==a)&&(!!r||a!==o&&t===l))},Vl={duration:200,easing:"ease"},Ul="transform",Kl=Ga.Transition.toString({property:Ul,duration:0,easing:"linear"}),ql={roleDescription:"sortable"};function Gl(e){let{animateLayoutChanges:t=Yl,attributes:r,disabled:n,data:o,getNewIndex:i=Wl,id:l,strategy:u,resizeObserverConfig:f,transition:h=Vl}=e;const{items:p,containerId:m,activeIndex:v,disabled:y,disableTransforms:x,sortedRects:w,overIndex:$,useDragOverlay:C,strategy:S}=b(Nl),D=function(e,t){var r,n;if("boolean"==typeof e)return{draggable:e,droppable:!1};return{draggable:null!=(r=null==e?void 0:e.draggable)?r:t.draggable,droppable:null!=(n=null==e?void 0:e.droppable)?n:t.droppable}}(n,y),k=p.indexOf(l),E=a((()=>({sortable:{containerId:m,index:k,items:p},...o})),[m,o,k,p]),_=a((()=>p.slice(p.indexOf(l))),[p,l]),{rect:O,node:F,isOver:T,setNodeRef:I}=function(e){let{data:t,disabled:r=!1,id:n,resizeObserverConfig:o}=e;const i=Wa("Droppable"),{active:a,dispatch:l,over:u,measureDroppableContainers:f}=b($l),h=s({disabled:r}),p=s(!1),g=s(null),m=s(null),{disabled:v,updateMeasurementsFor:y,timeout:x}={...Ml,...o},w=za(null!=y?y:n),$=cl({callback:d((()=>{p.current?(null!=m.current&&clearTimeout(m.current),m.current=setTimeout((()=>{f(Array.isArray(w.current)?w.current:[w.current]),m.current=null}),x)):p.current=!0}),[x]),disabled:v||!a}),C=d(((e,t)=>{$&&(t&&($.unobserve(t),p.current=!1),e&&$.observe(e))}),[$]),[S,D]=La(C),k=za(t);return c((()=>{$&&S.current&&($.disconnect(),p.current=!1,$.observe(S.current))}),[S,$]),Ba((()=>(l({type:is.RegisterDroppable,element:{id:n,key:i,disabled:r,node:S,rect:g,data:k}}),()=>l({type:is.UnregisterDroppable,key:i,id:n}))),[n]),c((()=>{r!==h.current.disabled&&(l({type:is.SetDroppableDisabled,id:n,key:i,disabled:r}),h.current.disabled=r)}),[n,i,r,l]),{active:a,rect:g,isOver:(null==u?void 0:u.id)===n,node:S,over:u,setNodeRef:D}}({id:l,data:E,disabled:D.droppable,resizeObserverConfig:{updateMeasurementsFor:_,...f}}),{active:M,activatorEvent:A,activeNodeRect:j,attributes:B,setNodeRef:R,listeners:z,isDragging:P,over:L,setActivatorNodeRef:N,transform:H}=Il({id:l,data:E,attributes:{...ql,...r},disabled:D.draggable}),W=function(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];return a((()=>e=>{t.forEach((t=>t(e)))}),t)}(I,R),Y=Boolean(M),V=Y&&!x&&Bl(v)&&Bl($),U=!C&&P,K=U&&V?H:null,q=V?null!=K?K:(null!=u?u:S)({rects:w,activeNodeRect:j,activeIndex:v,overIndex:$,index:k}):null,G=Bl(v)&&Bl($)?i({id:l,items:p,activeIndex:v,overIndex:$}):k,Q=null==M?void 0:M.id,Z=s({activeId:Q,items:p,newIndex:G,containerId:m}),X=p!==Z.current.items,J=t({active:M,containerId:m,isDragging:P,isSorting:Y,id:l,index:k,items:p,newIndex:Z.current.newIndex,previousItems:Z.current.items,previousContainerId:Z.current.containerId,transition:h,wasDragging:null!=Z.current.activeId}),ee=function(e){let{disabled:t,index:r,node:n,rect:o}=e;const[i,a]=g(null),l=s(r);return Ba((()=>{if(!t&&r!==l.current&&n.current){const e=o.current;if(e){const t=ys(n.current,{ignoreTransform:!0}),r={x:e.left-t.left,y:e.top-t.top,scaleX:e.width/t.width,scaleY:e.height/t.height};(r.x||r.y)&&a(r)}}r!==l.current&&(l.current=r)}),[t,r,n,o]),c((()=>{i&&a(null)}),[i]),i}({disabled:!J,index:k,node:F,rect:O});return c((()=>{Y&&Z.current.newIndex!==G&&(Z.current.newIndex=G),m!==Z.current.containerId&&(Z.current.containerId=m),p!==Z.current.items&&(Z.current.items=p)}),[Y,G,m,p]),c((()=>{if(Q===Z.current.activeId)return;if(Q&&!Z.current.activeId)return void(Z.current.activeId=Q);const e=setTimeout((()=>{Z.current.activeId=Q}),50);return()=>clearTimeout(e)}),[Q]),{active:M,activeIndex:v,attributes:B,data:E,rect:O,index:k,newIndex:G,items:p,isOver:T,isSorting:Y,isDragging:P,listeners:z,node:F,overIndex:$,over:L,setNodeRef:W,setActivatorNodeRef:N,setDroppableNodeRef:I,setDraggableNodeRef:R,transform:null!=ee?ee:q,transition:function(){if(ee||X&&Z.current.newIndex===k)return Kl;if(U&&!Ka(A)||!h)return;if(Y||J)return Ga.Transition.toString({...h,property:Ul});return}()}}function Ql(e){if(!e)return!1;const t=e.data.current;return!!(t&&"sortable"in t&&"object"==typeof t.sortable&&"containerId"in t.sortable&&"items"in t.sortable&&"index"in t.sortable)}const Zl=[Ps.Down,Ps.Right,Ps.Up,Ps.Left],Xl=(e,t)=>{let{context:{active:r,collisionRect:n,droppableRects:o,droppableContainers:i,over:a,scrollableAncestors:s}}=t;if(Zl.includes(e.code)){if(e.preventDefault(),!r||!n)return;const t=[];i.getEnabled().forEach((r=>{if(!r||null!=r&&r.disabled)return;const i=o.get(r.id);if(i)switch(e.code){case Ps.Down:n.top<i.top&&t.push(r);break;case Ps.Up:n.top>i.top&&t.push(r);break;case Ps.Left:n.left>i.left&&t.push(r);break;case Ps.Right:n.left<i.left&&t.push(r)}}));const l=(e=>{let{collisionRect:t,droppableRects:r,droppableContainers:n}=e;const o=us(t),i=[];for(const e of n){const{id:t}=e,n=r.get(t);if(n){const r=us(n),a=o.reduce(((e,t,n)=>{return e+(o=r[n],i=t,Math.sqrt(Math.pow(o.x-i.x,2)+Math.pow(o.y-i.y,2)));var o,i}),0),s=Number((a/4).toFixed(4));i.push({id:t,data:{droppableContainer:e,value:s}})}}return i.sort(cs)})({active:r,collisionRect:n,droppableRects:o,droppableContainers:t,pointerCoordinates:null});let c=fs(l,"id");if(c===(null==a?void 0:a.id)&&l.length>1&&(c=l[1].id),null!=c){const e=i.get(r.id),t=i.get(c),a=t?o.get(t.id):null,l=null==t?void 0:t.node.current;if(l&&a&&e&&t){const r=ws(l).some(((e,t)=>s[t]!==e)),o=Jl(e,t),i=function(e,t){if(!Ql(e)||!Ql(t))return!1;if(!Jl(e,t))return!1;return e.data.current.sortable.index<t.data.current.sortable.index}(e,t),c=r||!o?{x:0,y:0}:{x:i?n.width-a.width:0,y:i?n.height-a.height:0},d={x:a.left,y:a.top};return c.x&&c.y?d:Ua(d,c)}}}};function Jl(e,t){return!(!Ql(e)||!Ql(t))&&e.data.current.sortable.containerId===t.data.current.sortable.containerId}var ec=function(e,t){return ec=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])},ec(e,t)};var tc=function(){return tc=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var o in t=arguments[r])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e},tc.apply(this,arguments)};var rc="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};var nc=function(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)},oc="object"==typeof rc&&rc&&rc.Object===Object&&rc,ic="object"==typeof self&&self&&self.Object===Object&&self,ac=oc||ic||Function("return this")(),sc=ac,lc=function(){return sc.Date.now()},cc=/\s/;var dc=function(e){for(var t=e.length;t--&&cc.test(e.charAt(t)););return t},uc=/^\s+/;var fc=function(e){return e?e.slice(0,dc(e)+1).replace(uc,""):e},hc=ac.Symbol,pc=hc,gc=Object.prototype,mc=gc.hasOwnProperty,bc=gc.toString,vc=pc?pc.toStringTag:void 0;var yc=function(e){var t=mc.call(e,vc),r=e[vc];try{e[vc]=void 0;var n=!0}catch(e){}var o=bc.call(e);return n&&(t?e[vc]=r:delete e[vc]),o},xc=Object.prototype.toString;var wc=yc,$c=function(e){return xc.call(e)},Cc=hc?hc.toStringTag:void 0;var Sc=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":Cc&&Cc in Object(e)?wc(e):$c(e)},Dc=function(e){return null!=e&&"object"==typeof e};var kc=fc,Ec=nc,_c=function(e){return"symbol"==typeof e||Dc(e)&&"[object Symbol]"==Sc(e)},Oc=/^[-+]0x[0-9a-f]+$/i,Fc=/^0b[01]+$/i,Tc=/^0o[0-7]+$/i,Ic=parseInt;var Mc=nc,Ac=lc,jc=function(e){if("number"==typeof e)return e;if(_c(e))return NaN;if(Ec(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=Ec(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=kc(e);var r=Fc.test(e);return r||Tc.test(e)?Ic(e.slice(2),r?2:8):Oc.test(e)?NaN:+e},Bc=Math.max,Rc=Math.min;var zc=function(e,t,r){var n,o,i,a,s,l,c=0,d=!1,u=!1,f=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function h(t){var r=n,i=o;return n=o=void 0,c=t,a=e.apply(i,r)}function p(e){var r=e-l;return void 0===l||r>=t||r<0||u&&e-c>=i}function g(){var e=Ac();if(p(e))return m(e);s=setTimeout(g,function(e){var r=t-(e-l);return u?Rc(r,i-(e-c)):r}(e))}function m(e){return s=void 0,f&&n?h(e):(n=o=void 0,a)}function b(){var e=Ac(),r=p(e);if(n=arguments,o=this,l=e,r){if(void 0===s)return function(e){return c=e,s=setTimeout(g,t),d?h(e):a}(l);if(u)return clearTimeout(s),s=setTimeout(g,t),h(l)}return void 0===s&&(s=setTimeout(g,t)),a}return t=jc(t)||0,Mc(r)&&(d=!!r.leading,i=(u="maxWait"in r)?Bc(jc(r.maxWait)||0,t):i,f="trailing"in r?!!r.trailing:f),b.cancel=function(){void 0!==s&&clearTimeout(s),c=0,n=l=o=s=void 0},b.flush=function(){return void 0===s?a:m(Ac())},b},Pc=zc,Lc=nc;var Nc=function(e,t,r){var n=!0,o=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return Lc(r)&&(n="leading"in r?!!r.leading:n,o="trailing"in r?!!r.trailing:o),Pc(e,t,{leading:n,maxWait:t,trailing:o})},Hc=function(e,t,r,n){switch(t){case"debounce":return zc(e,r,n);case"throttle":return Nc(e,r,n);default:return e}},Wc=function(e){return"function"==typeof e},Yc=function(){return"undefined"==typeof window},Vc=function(e){return e instanceof Element||e instanceof HTMLDocument},Uc=function(e,t,r,n){return function(o){var i=o.width,a=o.height;t((function(t){return t.width===i&&t.height===a||t.width===i&&!n||t.height===a&&!r?t:(e&&Wc(e)&&e(i,a),{width:i,height:a})}))}};!function(e){function t(t){var r=e.call(this,t)||this;r.cancelHandler=function(){r.resizeHandler&&r.resizeHandler.cancel&&(r.resizeHandler.cancel(),r.resizeHandler=null)},r.attachObserver=function(){var e=r.props,t=e.targetRef,n=e.observerOptions;if(!Yc()){t&&t.current&&(r.targetRef.current=t.current);var o=r.getElement();o&&(r.observableElement&&r.observableElement===o||(r.observableElement=o,r.resizeObserver.observe(o,n)))}},r.getElement=function(){var e=r.props,t=e.querySelector,n=e.targetDomEl;if(Yc())return null;if(t)return document.querySelector(t);if(n&&Vc(n))return n;if(r.targetRef&&Vc(r.targetRef.current))return r.targetRef.current;var o=B(r);if(!o)return null;switch(r.getRenderType()){case"renderProp":case"childFunction":case"child":case"childArray":return o;default:return o.parentElement}},r.createResizeHandler=function(e){var t=r.props,n=t.handleWidth,o=void 0===n||n,i=t.handleHeight,a=void 0===i||i,s=t.onResize;if(o||a){var l=Uc(s,r.setState.bind(r),o,a);e.forEach((function(e){var t=e&&e.contentRect||{},n=t.width,o=t.height;!r.skipOnMount&&!Yc()&&l({width:n,height:o}),r.skipOnMount=!1}))}},r.getRenderType=function(){var e=r.props,t=e.render,n=e.children;return Wc(t)?"renderProp":Wc(n)?"childFunction":v(n)?"child":Array.isArray(n)?"childArray":"parent"};var n=t.skipOnMount,o=t.refreshMode,i=t.refreshRate,a=void 0===i?1e3:i,s=t.refreshOptions;return r.state={width:void 0,height:void 0},r.skipOnMount=n,r.targetRef=y(),r.observableElement=null,Yc()||(r.resizeHandler=Hc(r.createResizeHandler,o,a,s),r.resizeObserver=new window.ResizeObserver(r.resizeHandler)),r}(function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");function r(){this.constructor=e}ec(e,t),e.prototype=null===t?Object.create(t):(r.prototype=t.prototype,new r)})(t,e),t.prototype.componentDidMount=function(){this.attachObserver()},t.prototype.componentDidUpdate=function(){this.attachObserver()},t.prototype.componentWillUnmount=function(){Yc()||(this.observableElement=null,this.resizeObserver.disconnect(),this.cancelHandler())},t.prototype.render=function(){var e,t=this.props,r=t.render,o=t.children,i=t.nodeType,a=void 0===i?"div":i,s=this.state,l={width:s.width,height:s.height,targetRef:this.targetRef};switch(this.getRenderType()){case"renderProp":return r&&r(l);case"childFunction":return(e=o)(l);case"child":if((e=o).type&&"string"==typeof e.type){var c=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(n=Object.getOwnPropertySymbols(e);o<n.length;o++)t.indexOf(n[o])<0&&Object.prototype.propertyIsEnumerable.call(e,n[o])&&(r[n[o]]=e[n[o]])}return r}(l,["targetRef"]);return x(e,c)}return x(e,l);case"childArray":return(e=o).map((function(e){return!!e&&x(e,l)}));default:return n.createElement(a,null)}}}(w);var Kc=Yc()?c:p;function qc(e){void 0===e&&(e={});var t=e.skipOnMount,r=void 0!==t&&t,n=e.refreshMode,o=e.refreshRate,i=void 0===o?1e3:o,a=e.refreshOptions,l=e.handleWidth,c=void 0===l||l,d=e.handleHeight,u=void 0===d||d,f=e.targetRef,h=e.observerOptions,p=e.onResize,m=s(r),b=s(null),v=null!=f?f:b,y=s(),x=g({width:void 0,height:void 0}),w=x[0],$=x[1];return Kc((function(){if(!Yc()){var e=Uc(p,$,c,u);y.current=Hc((function(t){(c||u)&&t.forEach((function(t){var r=t&&t.contentRect||{},n=r.width,o=r.height;!m.current&&!Yc()&&e({width:n,height:o}),m.current=!1}))}),n,i,a);var t=new window.ResizeObserver(y.current);return v.current&&t.observe(v.current,h),function(){t.disconnect();var e=y.current;e&&e.cancel&&e.cancel()}}}),[n,i,a,c,u,p,h,v.current]),tc({ref:v},w)}class Gc extends Xs{}Gc.activators=[{eventName:"onMouseDown",handler:({nativeEvent:e})=>Qc(e.target)}];function Qc(e){let t=e;for(;t;){if(t.dataset&&t.dataset.noDnd)return!1;t=t.parentElement}return!0}(class extends Ys{}).activators=[{eventName:"onKeyDown",handler:({nativeEvent:e})=>Qc(e.target)}];var Zc,Xc={exports:{}};Zc=e=>(()=>{var t={"./node_modules/css-mediaquery/index.js":
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
	  \***********************************************************/(e,t)=>{!function(){var e="function"==typeof Symbol&&Symbol.for,r=e?Symbol.for("react.element"):60103,n=e?Symbol.for("react.portal"):60106,o=e?Symbol.for("react.fragment"):60107,i=e?Symbol.for("react.strict_mode"):60108,a=e?Symbol.for("react.profiler"):60114,s=e?Symbol.for("react.provider"):60109,l=e?Symbol.for("react.context"):60110,c=e?Symbol.for("react.async_mode"):60111,d=e?Symbol.for("react.concurrent_mode"):60111,u=e?Symbol.for("react.forward_ref"):60112,f=e?Symbol.for("react.suspense"):60113,h=e?Symbol.for("react.suspense_list"):60120,p=e?Symbol.for("react.memo"):60115,g=e?Symbol.for("react.lazy"):60116,m=e?Symbol.for("react.block"):60121,b=e?Symbol.for("react.fundamental"):60117,v=e?Symbol.for("react.responder"):60118,y=e?Symbol.for("react.scope"):60119;function x(e){if("object"==typeof e&&null!==e){var t=e.$$typeof;switch(t){case r:var h=e.type;switch(h){case c:case d:case o:case a:case i:case f:return h;default:var m=h&&h.$$typeof;switch(m){case l:case u:case g:case p:case s:return m;default:return t}}case n:return t}}}var w=c,$=d,C=l,S=s,D=r,k=u,E=o,_=g,O=p,F=n,T=a,I=i,M=f,A=!1;function j(e){return x(e)===d}t.AsyncMode=w,t.ConcurrentMode=$,t.ContextConsumer=C,t.ContextProvider=S,t.Element=D,t.ForwardRef=k,t.Fragment=E,t.Lazy=_,t.Memo=O,t.Portal=F,t.Profiler=T,t.StrictMode=I,t.Suspense=M,t.isAsyncMode=function(e){return A||(A=!0,console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")),j(e)||x(e)===c},t.isConcurrentMode=j,t.isContextConsumer=function(e){return x(e)===l},t.isContextProvider=function(e){return x(e)===s},t.isElement=function(e){return"object"==typeof e&&null!==e&&e.$$typeof===r},t.isForwardRef=function(e){return x(e)===u},t.isFragment=function(e){return x(e)===o},t.isLazy=function(e){return x(e)===g},t.isMemo=function(e){return x(e)===p},t.isPortal=function(e){return x(e)===n},t.isProfiler=function(e){return x(e)===a},t.isStrictMode=function(e){return x(e)===i},t.isSuspense=function(e){return x(e)===f},t.isValidElementType=function(e){return"string"==typeof e||"function"==typeof e||e===o||e===d||e===a||e===i||e===f||e===h||"object"==typeof e&&null!==e&&(e.$$typeof===g||e.$$typeof===p||e.$$typeof===s||e.$$typeof===l||e.$$typeof===u||e.$$typeof===b||e.$$typeof===v||e.$$typeof===y||e.$$typeof===m)},t.typeOf=x}()},"./node_modules/react-is/index.js":
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
	  \**************************************************************************************/t=>{t.exports=e}},r={};function n(e){var o=r[e];if(void 0!==o)return o.exports;var i=r[e]={exports:{}};return t[e].call(i.exports,i,i.exports,n),i.exports}return n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n("./src/index.ts")})();var Jc=Xc.exports=Zc(o),ed={exports:{}};ed.exports=function(){var e=1e3,t=6e4,r=36e5,n="millisecond",o="second",i="minute",a="hour",s="day",l="week",c="month",d="quarter",u="year",f="date",h="Invalid Date",p=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,g=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,m={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(e){var t=["th","st","nd","rd"],r=e%100;return"["+e+(t[(r-20)%10]||t[r]||t[0])+"]"}},b=function(e,t,r){var n=String(e);return!n||n.length>=t?e:""+Array(t+1-n.length).join(r)+e},v={s:b,z:function(e){var t=-e.utcOffset(),r=Math.abs(t),n=Math.floor(r/60),o=r%60;return(t<=0?"+":"-")+b(n,2,"0")+":"+b(o,2,"0")},m:function e(t,r){if(t.date()<r.date())return-e(r,t);var n=12*(r.year()-t.year())+(r.month()-t.month()),o=t.clone().add(n,c),i=r-o<0,a=t.clone().add(n+(i?-1:1),c);return+(-(n+(r-o)/(i?o-a:a-o))||0)},a:function(e){return e<0?Math.ceil(e)||0:Math.floor(e)},p:function(e){return{M:c,y:u,w:l,d:s,D:f,h:a,m:i,s:o,ms:n,Q:d}[e]||String(e||"").toLowerCase().replace(/s$/,"")},u:function(e){return void 0===e}},y="en",x={};x[y]=m;var w="$isDayjsObject",$=function(e){return e instanceof k||!(!e||!e[w])},C=function e(t,r,n){var o;if(!t)return y;if("string"==typeof t){var i=t.toLowerCase();x[i]&&(o=i),r&&(x[i]=r,o=i);var a=t.split("-");if(!o&&a.length>1)return e(a[0])}else{var s=t.name;x[s]=t,o=s}return!n&&o&&(y=o),o||!n&&y},S=function(e,t){if($(e))return e.clone();var r="object"==typeof t?t:{};return r.date=e,r.args=arguments,new k(r)},D=v;D.l=C,D.i=$,D.w=function(e,t){return S(e,{locale:t.$L,utc:t.$u,x:t.$x,$offset:t.$offset})};var k=function(){function m(e){this.$L=C(e.locale,null,!0),this.parse(e),this.$x=this.$x||e.x||{},this[w]=!0}var b=m.prototype;return b.parse=function(e){this.$d=function(e){var t=e.date,r=e.utc;if(null===t)return new Date(NaN);if(D.u(t))return new Date;if(t instanceof Date)return new Date(t);if("string"==typeof t&&!/Z$/i.test(t)){var n=t.match(p);if(n){var o=n[2]-1||0,i=(n[7]||"0").substring(0,3);return r?new Date(Date.UTC(n[1],o,n[3]||1,n[4]||0,n[5]||0,n[6]||0,i)):new Date(n[1],o,n[3]||1,n[4]||0,n[5]||0,n[6]||0,i)}}return new Date(t)}(e),this.init()},b.init=function(){var e=this.$d;this.$y=e.getFullYear(),this.$M=e.getMonth(),this.$D=e.getDate(),this.$W=e.getDay(),this.$H=e.getHours(),this.$m=e.getMinutes(),this.$s=e.getSeconds(),this.$ms=e.getMilliseconds()},b.$utils=function(){return D},b.isValid=function(){return!(this.$d.toString()===h)},b.isSame=function(e,t){var r=S(e);return this.startOf(t)<=r&&r<=this.endOf(t)},b.isAfter=function(e,t){return S(e)<this.startOf(t)},b.isBefore=function(e,t){return this.endOf(t)<S(e)},b.$g=function(e,t,r){return D.u(e)?this[t]:this.set(r,e)},b.unix=function(){return Math.floor(this.valueOf()/1e3)},b.valueOf=function(){return this.$d.getTime()},b.startOf=function(e,t){var r=this,n=!!D.u(t)||t,d=D.p(e),h=function(e,t){var o=D.w(r.$u?Date.UTC(r.$y,t,e):new Date(r.$y,t,e),r);return n?o:o.endOf(s)},p=function(e,t){return D.w(r.toDate()[e].apply(r.toDate("s"),(n?[0,0,0,0]:[23,59,59,999]).slice(t)),r)},g=this.$W,m=this.$M,b=this.$D,v="set"+(this.$u?"UTC":"");switch(d){case u:return n?h(1,0):h(31,11);case c:return n?h(1,m):h(0,m+1);case l:var y=this.$locale().weekStart||0,x=(g<y?g+7:g)-y;return h(n?b-x:b+(6-x),m);case s:case f:return p(v+"Hours",0);case a:return p(v+"Minutes",1);case i:return p(v+"Seconds",2);case o:return p(v+"Milliseconds",3);default:return this.clone()}},b.endOf=function(e){return this.startOf(e,!1)},b.$set=function(e,t){var r,l=D.p(e),d="set"+(this.$u?"UTC":""),h=(r={},r[s]=d+"Date",r[f]=d+"Date",r[c]=d+"Month",r[u]=d+"FullYear",r[a]=d+"Hours",r[i]=d+"Minutes",r[o]=d+"Seconds",r[n]=d+"Milliseconds",r)[l],p=l===s?this.$D+(t-this.$W):t;if(l===c||l===u){var g=this.clone().set(f,1);g.$d[h](p),g.init(),this.$d=g.set(f,Math.min(this.$D,g.daysInMonth())).$d}else h&&this.$d[h](p);return this.init(),this},b.set=function(e,t){return this.clone().$set(e,t)},b.get=function(e){return this[D.p(e)]()},b.add=function(n,d){var f,h=this;n=Number(n);var p=D.p(d),g=function(e){var t=S(h);return D.w(t.date(t.date()+Math.round(e*n)),h)};if(p===c)return this.set(c,this.$M+n);if(p===u)return this.set(u,this.$y+n);if(p===s)return g(1);if(p===l)return g(7);var m=(f={},f[i]=t,f[a]=r,f[o]=e,f)[p]||1,b=this.$d.getTime()+n*m;return D.w(b,this)},b.subtract=function(e,t){return this.add(-1*e,t)},b.format=function(e){var t=this,r=this.$locale();if(!this.isValid())return r.invalidDate||h;var n=e||"YYYY-MM-DDTHH:mm:ssZ",o=D.z(this),i=this.$H,a=this.$m,s=this.$M,l=r.weekdays,c=r.months,d=r.meridiem,u=function(e,r,o,i){return e&&(e[r]||e(t,n))||o[r].slice(0,i)},f=function(e){return D.s(i%12||12,e,"0")},p=d||function(e,t,r){var n=e<12?"AM":"PM";return r?n.toLowerCase():n};return n.replace(g,(function(e,n){return n||function(e){switch(e){case"YY":return String(t.$y).slice(-2);case"YYYY":return D.s(t.$y,4,"0");case"M":return s+1;case"MM":return D.s(s+1,2,"0");case"MMM":return u(r.monthsShort,s,c,3);case"MMMM":return u(c,s);case"D":return t.$D;case"DD":return D.s(t.$D,2,"0");case"d":return String(t.$W);case"dd":return u(r.weekdaysMin,t.$W,l,2);case"ddd":return u(r.weekdaysShort,t.$W,l,3);case"dddd":return l[t.$W];case"H":return String(i);case"HH":return D.s(i,2,"0");case"h":return f(1);case"hh":return f(2);case"a":return p(i,a,!0);case"A":return p(i,a,!1);case"m":return String(a);case"mm":return D.s(a,2,"0");case"s":return String(t.$s);case"ss":return D.s(t.$s,2,"0");case"SSS":return D.s(t.$ms,3,"0");case"Z":return o}return null}(e)||o.replace(":","")}))},b.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},b.diff=function(n,f,h){var p,g=this,m=D.p(f),b=S(n),v=(b.utcOffset()-this.utcOffset())*t,y=this-b,x=function(){return D.m(g,b)};switch(m){case u:p=x()/12;break;case c:p=x();break;case d:p=x()/3;break;case l:p=(y-v)/6048e5;break;case s:p=(y-v)/864e5;break;case a:p=y/r;break;case i:p=y/t;break;case o:p=y/e;break;default:p=y}return h?p:D.a(p)},b.daysInMonth=function(){return this.endOf(c).$D},b.$locale=function(){return x[this.$L]},b.locale=function(e,t){if(!e)return this.$L;var r=this.clone(),n=C(e,t,!0);return n&&(r.$L=n),r},b.clone=function(){return D.w(this.$d,this)},b.toDate=function(){return new Date(this.valueOf())},b.toJSON=function(){return this.isValid()?this.toISOString():null},b.toISOString=function(){return this.$d.toISOString()},b.toString=function(){return this.$d.toUTCString()},m}(),E=k.prototype;return S.prototype=E,[["$ms",n],["$s",o],["$m",i],["$H",a],["$W",s],["$M",c],["$y",u],["$D",f]].forEach((function(e){E[e[1]]=function(t){return this.$g(t,e[0],e[1])}})),S.extend=function(e,t){return e.$i||(e(t,k,S),e.$i=!0),S},S.locale=C,S.isDayjs=$,S.unix=function(e){return S(1e3*e)},S.en=x[y],S.Ls=x,S.p={},S}();var td=Re(ed.exports),rd={exports:{}};rd.exports=function(){var e={LTS:"h:mm:ss A",LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D, YYYY",LLL:"MMMM D, YYYY h:mm A",LLLL:"dddd, MMMM D, YYYY h:mm A"},t=/(\[[^[]*\])|([-_:/.,()\s]+)|(A|a|YYYY|YY?|MM?M?M?|Do|DD?|hh?|HH?|mm?|ss?|S{1,3}|z|ZZ?)/g,r=/\d\d/,n=/\d\d?/,o=/\d*[^-_:/,()\s\d]+/,i={},a=function(e){return(e=+e)+(e>68?1900:2e3)},s=function(e){return function(t){this[e]=+t}},l=[/[+-]\d\d:?(\d\d)?|Z/,function(e){(this.zone||(this.zone={})).offset=function(e){if(!e)return 0;if("Z"===e)return 0;var t=e.match(/([+-]|\d\d)/g),r=60*t[1]+(+t[2]||0);return 0===r?0:"+"===t[0]?-r:r}(e)}],c=function(e){var t=i[e];return t&&(t.indexOf?t:t.s.concat(t.f))},d=function(e,t){var r,n=i.meridiem;if(n){for(var o=1;o<=24;o+=1)if(e.indexOf(n(o,0,t))>-1){r=o>12;break}}else r=e===(t?"pm":"PM");return r},u={A:[o,function(e){this.afternoon=d(e,!1)}],a:[o,function(e){this.afternoon=d(e,!0)}],S:[/\d/,function(e){this.milliseconds=100*+e}],SS:[r,function(e){this.milliseconds=10*+e}],SSS:[/\d{3}/,function(e){this.milliseconds=+e}],s:[n,s("seconds")],ss:[n,s("seconds")],m:[n,s("minutes")],mm:[n,s("minutes")],H:[n,s("hours")],h:[n,s("hours")],HH:[n,s("hours")],hh:[n,s("hours")],D:[n,s("day")],DD:[r,s("day")],Do:[o,function(e){var t=i.ordinal,r=e.match(/\d+/);if(this.day=r[0],t)for(var n=1;n<=31;n+=1)t(n).replace(/\[|\]/g,"")===e&&(this.day=n)}],M:[n,s("month")],MM:[r,s("month")],MMM:[o,function(e){var t=c("months"),r=(c("monthsShort")||t.map((function(e){return e.slice(0,3)}))).indexOf(e)+1;if(r<1)throw new Error;this.month=r%12||r}],MMMM:[o,function(e){var t=c("months").indexOf(e)+1;if(t<1)throw new Error;this.month=t%12||t}],Y:[/[+-]?\d+/,s("year")],YY:[r,function(e){this.year=a(e)}],YYYY:[/\d{4}/,s("year")],Z:l,ZZ:l};function f(r){var n,o;n=r,o=i&&i.formats;for(var a=(r=n.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g,(function(t,r,n){var i=n&&n.toUpperCase();return r||o[n]||e[n]||o[i].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g,(function(e,t,r){return t||r.slice(1)}))}))).match(t),s=a.length,l=0;l<s;l+=1){var c=a[l],d=u[c],f=d&&d[0],h=d&&d[1];a[l]=h?{regex:f,parser:h}:c.replace(/^\[|\]$/g,"")}return function(e){for(var t={},r=0,n=0;r<s;r+=1){var o=a[r];if("string"==typeof o)n+=o.length;else{var i=o.regex,l=o.parser,c=e.slice(n),d=i.exec(c)[0];l.call(t,d),e=e.replace(d,"")}}return function(e){var t=e.afternoon;if(void 0!==t){var r=e.hours;t?r<12&&(e.hours+=12):12===r&&(e.hours=0),delete e.afternoon}}(t),t}}return function(e,t,r){r.p.customParseFormat=!0,e&&e.parseTwoDigitYear&&(a=e.parseTwoDigitYear);var n=t.prototype,o=n.parse;n.parse=function(e){var t=e.date,n=e.utc,a=e.args;this.$u=n;var s=a[1];if("string"==typeof s){var l=!0===a[2],c=!0===a[3],d=l||c,u=a[2];c&&(u=a[2]),i=this.$locale(),!l&&u&&(i=r.Ls[u]),this.$d=function(e,t,r){try{if(["x","X"].indexOf(t)>-1)return new Date(("X"===t?1e3:1)*e);var n=f(t)(e),o=n.year,i=n.month,a=n.day,s=n.hours,l=n.minutes,c=n.seconds,d=n.milliseconds,u=n.zone,h=new Date,p=a||(o||i?1:h.getDate()),g=o||h.getFullYear(),m=0;o&&!i||(m=i>0?i-1:h.getMonth());var b=s||0,v=l||0,y=c||0,x=d||0;return u?new Date(Date.UTC(g,m,p,b,v,y,x+60*u.offset*1e3)):r?new Date(Date.UTC(g,m,p,b,v,y,x)):new Date(g,m,p,b,v,y,x)}catch(e){return new Date("")}}(t,s,n),this.init(),u&&!0!==u&&(this.$L=this.locale(u).$L),d&&t!=this.format(s)&&(this.$d=new Date("")),i={}}else if(s instanceof Array)for(var h=s.length,p=1;p<=h;p+=1){a[1]=s[p-1];var g=r.apply(this,a);if(g.isValid()){this.$d=g.$d,this.$L=g.$L,this.init();break}p===h&&(this.$d=new Date(""))}else o.call(this,e)}}}();var nd=Re(rd.exports),od={exports:{}};od.exports=function(e,t,r){t.prototype.isBetween=function(e,t,n,o){var i=r(e),a=r(t),s="("===(o=o||"()")[0],l=")"===o[1];return(s?this.isAfter(i,n):!this.isBefore(i,n))&&(l?this.isBefore(a,n):!this.isAfter(a,n))||(s?this.isBefore(i,n):!this.isAfter(i,n))&&(l?this.isAfter(a,n):!this.isBefore(a,n))}};var id=Re(od.exports),ad={exports:{}};ad.exports=function(e,t){t.prototype.isSameOrAfter=function(e,t){return this.isSame(e,t)||this.isAfter(e,t)}};var sd=Re(ad.exports),ld={exports:{}};ld.exports=function(e,t){t.prototype.isSameOrBefore=function(e,t){return this.isSame(e,t)||this.isBefore(e,t)}};var cd,dd,ud=Re(ld.exports),fd={exports:{}};fd.exports=(cd={year:0,month:1,day:2,hour:3,minute:4,second:5},dd={},function(e,t,r){var n,o=function(e,t,r){void 0===r&&(r={});var n=new Date(e),o=function(e,t){void 0===t&&(t={});var r=t.timeZoneName||"short",n=e+"|"+r,o=dd[n];return o||(o=new Intl.DateTimeFormat("en-US",{hour12:!1,timeZone:e,year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit",timeZoneName:r}),dd[n]=o),o}(t,r);return o.formatToParts(n)},i=function(e,t){for(var n=o(e,t),i=[],a=0;a<n.length;a+=1){var s=n[a],l=s.type,c=s.value,d=cd[l];d>=0&&(i[d]=parseInt(c,10))}var u=i[3],f=24===u?0:u,h=i[0]+"-"+i[1]+"-"+i[2]+" "+f+":"+i[4]+":"+i[5]+":000",p=+e;return(r.utc(h).valueOf()-(p-=p%1e3))/6e4},a=t.prototype;a.tz=function(e,t){void 0===e&&(e=n);var o=this.utcOffset(),i=this.toDate(),a=i.toLocaleString("en-US",{timeZone:e}),s=Math.round((i-new Date(a))/1e3/60),l=r(a,{locale:this.$L}).$set("millisecond",this.$ms).utcOffset(15*-Math.round(i.getTimezoneOffset()/15)-s,!0);if(t){var c=l.utcOffset();l=l.add(o-c,"minute")}return l.$x.$timezone=e,l},a.offsetName=function(e){var t=this.$x.$timezone||r.tz.guess(),n=o(this.valueOf(),t,{timeZoneName:e}).find((function(e){return"timezonename"===e.type.toLowerCase()}));return n&&n.value};var s=a.startOf;a.startOf=function(e,t){if(!this.$x||!this.$x.$timezone)return s.call(this,e,t);var n=r(this.format("YYYY-MM-DD HH:mm:ss:SSS"),{locale:this.$L});return s.call(n,e,t).tz(this.$x.$timezone,!0)},r.tz=function(e,t,o){var a=o&&t,s=o||t||n,l=i(+r(),s);if("string"!=typeof e)return r(e).tz(s);var c=function(e,t,r){var n=e-60*t*1e3,o=i(n,r);if(t===o)return[n,t];var a=i(n-=60*(o-t)*1e3,r);return o===a?[n,o]:[e-60*Math.min(o,a)*1e3,Math.max(o,a)]}(r.utc(e,a).valueOf(),l,s),d=c[0],u=c[1],f=r(d).utcOffset(u);return f.$x.$timezone=s,f},r.tz.guess=function(){return Intl.DateTimeFormat().resolvedOptions().timeZone},r.tz.setDefault=function(e){n=e}});var hd,pd=Re(fd.exports);td.extend(id),td.extend(ud),td.extend(sd),td.extend(nd),td.extend(pd),function(e){e.generateDays=e=>{const t=e.startOf("month"),r=td(t).startOf("week");return gd(r).map((e=>md(e)))},e.generateDaysForCurrentWeek=e=>{const t=e.startOf("week");return md(t)},e.generateMonths=e=>{const t=[];for(let r=0;r<12;r++){const n=e.month(r);t.push(td(n))}return t},e.generateDecadeOfYears=e=>{const t=e.year(),r=10*Math.floor(t/10),n=e.year(r),o=[n.subtract(1,"year"),n];for(let e=1;e<11;e++)o.push(n.add(e,"year"));return o},e.getStartEndDecade=e=>{const t=10*Math.floor(+e.format("YYYY")/10);return{beginDecade:t,endDecade:+td(`${t+9}-01-01`).format("YYYY")}},e.convertTo12HourFormat=e=>{const t=td(e,"HH:mm");return t.isValid()?t.format("h:mm a"):""},e.isWithinRange=(e,t,r,n="day")=>!t&&!r||(t&&r?e.isBetween(t,r,n,"[]"):t?e.isSameOrAfter(t,n):e.isSameOrBefore(r,n)),e.isPreviousMonthWithinRange=(t,r)=>e.isWithinRange(t.subtract(1,"month"),r,void 0,"month"),e.isPreviousYearWithinRange=(t,r)=>e.isWithinRange(t.subtract(1,"year"),r,void 0,"year"),e.isPreviousDecadeWithinRange=(t,r)=>{const{beginDecade:n}=e.getStartEndDecade(t);return e.isWithinRange(t.year(n).subtract(1,"year"),r,void 0,"year")},e.isNextMonthWithinRange=(t,r)=>e.isWithinRange(t.add(1,"month"),void 0,r,"month"),e.isNextYearWithinRange=(t,r)=>e.isWithinRange(t.add(1,"year"),void 0,r,"year"),e.isNextDecadeWithinRange=(t,r)=>{const{endDecade:n}=e.getStartEndDecade(t);return e.isWithinRange(t.year(n).add(1,"year"),void 0,r,"year")},e.getWeekStartEnd=e=>({start:e.startOf("week").format("YYYY-MM-DD"),end:e.endOf("week").format("YYYY-MM-DD")}),e.getFixedRangeStartEnd=(e,t)=>({start:e.format("YYYY-MM-DD"),end:e.add(t-1,"day").format("YYYY-MM-DD")}),e.isDisabledDay=(t,r,n,o)=>{const i=e.isWithinRange(t,n?td(n):void 0,o?td(o):void 0),a=r&&r.includes(t.format("YYYY-MM-DD"));return!i||!!a}}(hd||(hd={}));const gd=e=>{const t=[e];for(let r=1;r<6;r++){const n=e.add(r,"week");t.push(n)}return t},md=e=>{const t=[];for(let r=0;r<7;r++){const n=e.add(r,"day");t.push(n)}return t},bd=[1,3,5,7,8,10,12],vd=[4,6,9,11];var yd,xd;!function(e){e.clampDay=(t,r,n)=>{const o=parseInt(t),i=parseInt(r),a=parseInt(n);return 0==o?"1":bd.includes(i)?Math.min(o,31).toString():vd.includes(i)?Math.min(o,30).toString():2===i?e.isLeapYear(a)?Math.min(o,29).toString():Math.min(o,28).toString():t},e.clampMonth=e=>{const t=parseInt(e);return 0==t?"1":t>12?"12":e},e.isLeapYear=e=>e%4==0&&e%100!=0||e%400==0,e.getTimeDiffInMinutes=(e,t,r="HH:mm")=>{const n=td(e,r);return td(t,r).diff(n,"minute")},e.toDayjs=e=>e?td(e):td(),e.addMinutesToTime=(e,t,r="HH:mm")=>td(e,r).add(t,"minutes").format(r),e.isSame=(e,t,r="day")=>td(e).isSame(td(t),r)}(yd||(yd={})),function(e){e.isDateDisabled=(e,t)=>{const{disabledDates:r,minDate:n,maxDate:o}=t;return!!(e&&r&&r.length&&r.includes(e))||(!(!n||!td(e).isBefore(n,"day"))||!(!o||!td(e).isAfter(o,"day")))},e.sanitizeInput=e=>{if(e){if(td(e).isValid())return e}return""}}(xd||(xd={}));const wd=()=>{const e=$.split(".");return parseInt(e[0],10)>=19},$d=(...e)=>t=>{const r=[];for(const n of e)if("function"==typeof n){const e=n(t),o="function"==typeof e;r.push(o?e:()=>n(null))}else n.current=t,r.push((()=>{n.current=null}));if(wd())return()=>{for(const e of r)e()}};var Cd,Sd;!function(e){e.generate=()=>Math.random().toString(36).substring(2,9)}(Cd||(Cd={})),function(e){e.transformWithSpaces=(e,t)=>{const r="(.{"+t+"})";return e.replace(/[^\dA-Z]/gi,"").replace(new RegExp(r,"g"),"$1 ").trim()},e.padValue=(e,t)=>{if("0"===e)return t?e:e.padStart(2,"0");if(""===e)return e;return parseInt(e).toString().padStart(2,"0")},e.shouldTruncateToTwoLines=(e,t)=>{const r=Math.floor(t/9);return e.length>=2*r||1===e.split(" ").length&&e.length>r},e.truncateOneLine=(e,t,r,n,o=8)=>{let i=0;t>r&&(i=Math.floor((t-r)/o));const a=n+i;if(a<e.length){const t=Math.floor(a/2);return e.substring(0,t)+" ... "+e.substring(e.length-t,e.length)}return e},e.truncateTwoLines=(e,t,r,n=1.2)=>{const o=Math.floor(2*t/(.6*r))*(2/n);if(e.length<=o)return e;const i=Math.floor(.6*o),a=Math.floor(.2*o);return`${e.substring(0,i)}...${e.substring(e.length-a)}`},e.getTextWidth=(t,r)=>{if("undefined"==typeof document)return 0;const n=(e.getTextWidth.canvas||(e.getTextWidth.canvas=document.createElement("canvas"))).getContext("2d");n.font=r;return n.measureText(t).width},e.maskValue=(e,r)=>{if(!e)return e;const{maskRange:n,unmaskRange:o,maskChar:i="•",maskRegex:a,maskTransformer:s}=r;if(s)return s(e);if(a)return e.replace(a,i);if(n){const{startIndex:r,endIndex:o}=t(n[0],n[1]);return e.substring(0,r)+i.repeat(e.substring(r,o+1).length)+e.substring(o+1)}if(o){const{startIndex:r,endIndex:n}=t(o[0],o[1]);return i.repeat(e.substring(0,r).length)+e.substring(r,n+1)+i.repeat(e.substring(n+1).length)}return e};const t=(e,t)=>e<t?{startIndex:e,endIndex:t}:{startIndex:t,endIndex:e},r=new Intl.PluralRules("en",{type:"ordinal"}),n=new Map([["one","st"],["two","nd"],["few","rd"],["other","th"]]);e.formatOrdinal=e=>{const t=r.select(e);return`${e}${n.get(t)}`}}(Sd||(Sd={}));function Dd(e){const t=s(null);return p((()=>{t.current=e}),[e]),d(((...e)=>{var r;return null===(r=t.current)||void 0===r?void 0:r.call(t,...e)}),[])}const kd=(e,t,r="window",n)=>{const o=s();c((()=>{o.current=t}),[t]),c((()=>{let t;switch(r){case"window":t=window;break;case"document":t=document;break;default:t=r}if(!t||!t.addEventListener)return;const i=e=>{var t;return null===(t=o.current)||void 0===t?void 0:t.call(o,e)};return t.addEventListener(e,i,n),()=>{null==t||t.removeEventListener(e,i,n)}}),[e,r])},Ed=()=>{const[e,t]=g(!1);return c((()=>{t(!0)}),[]),e};function _d({ref:e,formatter:t}){return()=>{var r;const n=e.current;if(!n)return;const o=n.value,i=t(o),a=null!==(r=n.selectionEnd)&&void 0!==r?r:0,s=o.substring(0,a),l=t(s),c=s.length-l.length,d=Math.max(0,a-c);return{nextValue:i,updateCaretPosition:()=>{n.value=i,n.setSelectionRange(d,d)}}}}const Od=e=>{const t=(e=>{const t=s(e),r=s();return c((()=>{r.current=t.current,t.current=e}),[e]),r.current})(e);return t!==e},Fd=e=>{const[t,r]=g(e),n=s(e);return[t,d((e=>{n.current=e,r(e)}),[]),n]},Td=_.div`
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
`,Id=_.div`
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
            `),t}}
`;var Md;!function(e){e.Ready="overlay-context-ready",e.Change="overlay-context-change"}(Md||(Md={}));const Ad=()=>{const[e,t]=g(void 0),r=z();return c((()=>{if(!r)return void t(void 0);const e=e=>{t(e.zIndex)};return r.events.on(Md.Change,e),r.events.emit(Md.Ready),()=>r.events.off(Md.Change,e)}),[r]),e},jd=({show:t=!1,rootId:r,onOverlayClick:n,children:i,backgroundOpacity:a,backgroundBlur:l=!0,disableTransition:d=!1,enableOverlayClick:u=!1,zIndex:f,id:h})=>{const[p,m]=g(null),[b,v]=g(),[y]=g((()=>Cd.generate())),x=L(),w=s(),$=s(null),C=i&&o.cloneElement(i,{ref:$}),S=h?`lifesg-ds-overlay-root-${h}`:"lifesg-ds-overlay-root",D=null!=f?f:b?99999:99998;(e=>{const t=z();c((()=>{if(!t)return;const r={zIndex:e};t.events.emit(Md.Change,r)}),[t,e]),c((()=>{if(!t)return;const r=()=>{const r={zIndex:e};t.events.emit(Md.Change,r)};return null==t||t.events.on(Md.Ready,r),()=>null==t?void 0:t.events.off(Md.Ready,r)}),[t,e])})(D),c((()=>(F(),m(_()),()=>{j(),I().length<1&&T("remove")})),[]),c((()=>{if(t){const e=O();k(e),A(),E()&&1===I().length&&(R(),B("add"));const t=setTimeout((()=>{T("add")}),200);return()=>clearTimeout(t)}{j(),E()&&I().length<1&&(B("remove"),P());const e=setTimeout((()=>{I().length<1&&T("remove")}),200);return()=>clearTimeout(e)}}),[t]);const k=e=>{w.current=e,v(e)},E=()=>/(iPad|iPhone|iPod)/g.test(navigator.userAgent),_=()=>document&&r?document.getElementById(r):document?document.body:null,O=()=>I().length>0,F=()=>{if(!document.getElementById(Rd)){const e=document.createElement("style");e.id=Rd;const t=document.documentElement.clientWidth,r=window.innerWidth-t;e.innerHTML=`\n\t\t\t\t.${zd} {\n\t\t\t\t\toverflow: hidden;\n\t\t\t\t\tpadding-right: ${r}px !important;\n\t\t\t\t\t-ms-overflow-style: none;\n\t\t\t\t\tscrollbar-width: none;\n\t\t\t\t}\n\n\t\t\t\t.${zd}::-webkit-scrollbar {\n\t\t\t\t\tdisplay: none;\n\t\t\t\t}\n\n\t\t\t\t.${Pd} {\n\t\t\t\t\tposition: fixed;\n\t\t\t\t\ttop: var(${Ld}, 0);\n\t\t\t\t\tbottom: 0;\n\t\t\t\t}\n\t\t\t`,document.body.appendChild(e)}},T=e=>{const t=document.body.classList.contains(zd);"add"!==e||t?"remove"===e&&t&&document.body.classList.remove(zd):document.body.classList.add(zd)},I=()=>{const e=document.body.dataset.lifesgDsOverlayOrder;return e?e.split(","):[]},A=()=>{const e=I();document.body.dataset.lifesgDsOverlayOrder=[...e,y].join(",")},j=()=>{const e=I();document.body.dataset.lifesgDsOverlayOrder=e.filter((e=>e!==y)).join(",")},B=e=>{if(!E())return;const t=document.body.classList.contains(Pd);"add"!==e||t?"remove"===e&&t&&document.body.classList.remove(Pd):document.body.classList.add(Pd)},R=()=>{const e=document.body.style,t=e.top?e.top:window.scrollY+"px";document.body.style.setProperty(Ld,t)},P=()=>{const e=document.body.style.getPropertyValue(Ld);requestAnimationFrame((()=>{window.scrollTo({top:parseFloat(e)})}))},H=e=>{var t;const r=null===(t=$.current)||void 0===t?void 0:t.firstChild;r&&r.contains(e.target)||n&&u&&(e.preventDefault(),n())};return p?M.createPortal(e(Td,{id:S,"data-testid":S,$show:t,$zIndex:D,children:i&&e(N,{id:x,children:e(Id,{"data-testid":"overlay-wrapper",$show:t,$stacked:b,$backgroundBlur:l,$disableTransition:d,onClick:H,children:C})})}),p):null},Bd=t=>e(P,{children:e(jd,Object.assign({},t))}),Rd="lifesg-ds-overlay-stylesheet",zd="lifesg-ds-overlay-open",Pd="lifesg-ds-overlay-scroll-lock",Ld="--lifesg-ds-overlay-scroll-y",Nd=_.div`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 100%;
    overflow: hidden;
    ${e=>{return t=e.$show,r=e.$animationFrom||"bottom",t?`\n\t\t\t${r}: 0;\n\t\t\topacity: 1;\n\t\t\ttransition: all 300ms cubic-bezier(0.21, 0.79, 0.53, 1);\n\t\t\ttransition-delay: 200ms;\n\t\t`:`\n\t\t${r}: -3%;\n\t\topacity: 0;\n\t\ttransition: all 300ms cubic-bezier(0.4, 0.34, 0.38, 1);\n\t`;var t,r}}

    ${oa.MaxWidth.sm} {
        height: calc(
            ${e=>e.$verticalHeight?`${e.$verticalHeight}px`:"1vh"} * 100
        );

        top: ${e=>e.$offsetTop||0}px;
    }
`,Hd=t=>{var{id:r="modal",show:n,animationFrom:o="bottom",children:i,enableOverlayClick:a=!0,rootComponentId:s,zIndex:l,onOverlayClick:d,dismissKeyboardOnShow:u=!0}=t,f=ct(t,["id","show","animationFrom","children","enableOverlayClick","rootComponentId","zIndex","onOverlayClick","dismissKeyboardOnShow"]);const[h,p]=g(),[m,b]=g();c((()=>window.visualViewport?(y(),window.visualViewport.addEventListener("resize",y),()=>{var e;null===(e=window.visualViewport)||void 0===e||e.removeEventListener("resize",y)}):(v(),window.addEventListener("resize",v),()=>{window.removeEventListener("resize",v)})),[]),c((()=>{var e,t;n&&u&&(null===(t=null===(e=document.activeElement)||void 0===e?void 0:e.blur)||void 0===t||t.call(e))}),[n]);const v=()=>{const e=.01*window.innerHeight;p(e)},y=()=>{if(window.visualViewport){const e=.01*window.visualViewport.height;p(e),b(window.visualViewport.offsetTop)}};return e(Bd,{"data-testid":`${r}-overlay`,show:n,enableOverlayClick:a,onOverlayClick:d,id:r,rootId:s,zIndex:l,children:e(Nd,Object.assign({$show:n,$animationFrom:o,"data-testid":r,$verticalHeight:h,$offsetTop:m},f,{children:i}))})},Wd=_.div`
    border-radius: ${ta.md};
    background: ${Qi.bg};
    padding: ${ea["spacing-16"]} ${ea["spacing-32"]};
    ${e=>{var t;return"dark"===(null===(t=e.theme)||void 0===t?void 0:t.colourMode)?O`
                  border: ${Ji["width-010"]} ${Ji.solid}
                      ${Qi.border};
              `:O`
                  box-shadow: ${ra["md-subtle"]};
              `}}
`,Yd=_.button`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: ${ea["spacing-24"]};
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
`,Vd=o.forwardRef(((t,r)=>{var{children:n,focusHighlight:o=!0,focusOutline:i="none",type:a="button"}=t,s=ct(t,["children","focusHighlight","focusOutline","type"]);return e(Yd,Object.assign({ref:r,$outline:i,$highlight:o,type:a},s,{children:n}))})),Ud=_.div`
    position: relative;
    display: flex;
    flex-direction: column;
    width: 40rem;
    max-height: 70%;
    background: ${Qi.bg};
    box-shadow: ${ra["lg-strong"]};
    border-radius: ${ta.lg};
    overflow: hidden;

    ${oa.MaxWidth.md} {
        width: 90%;
        max-height: 70%;
    }
`,Kd=_(Vd)`
    position: absolute;
    top: var(--close-button-top-inset, ${ea["spacing-16"]});
    right: var(--close-button-right-inset, ${ea["spacing-16"]});
    padding: 0;
    color: ${Qi.icon};

    svg {
        height: 2rem;
        width: 2rem;
    }

    ${oa.MaxWidth.sm} {
        right: var(--close-button-right-inset, ${ea["spacing-20"]});
    }
`,qd=r=>{var{id:n="modal-box",children:o,onClose:i,showCloseButton:a=!0}=r,s=ct(r,["id","children","onClose","showCloseButton"]);return t(Ud,Object.assign({"data-testid":n},s,{onClick:e=>{e.stopPropagation()},children:[a&&e(Kd,{onClick:i,"data-testid":"close-button",focusHighlight:!1,focusOutline:"browser",children:e(re,{})}),o]}))},Gd=e=>{const{textSize:t}=e||{};return O`
        // Text styling
        ${t&&Zi[`${t}-regular`]}

        strong {
            font-weight: ${Zi.Spec["weight-semibold"]};
            ${t&&Zi[`${t}-semibold`]};
        }

        p {
            margin: 0;
        }

        // Link styling
        a {
            font-weight: ${Zi.Spec["weight-semibold"]};
            ${t&&Zi[`${t}-semibold`]}
            color: ${Qi.hyperlink};
            text-decoration: none;

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
    `},Qd=_.div`
    max-width: 30rem;
    padding: 0 1rem;
    pointer-events: auto;
`,Zd=_((t=>{var{children:r}=t,n=ct(t,["children"]);const o=n["data-testid"]||"card";return e(Wd,Object.assign({},n,{"data-testid":o,children:"string"==typeof r?e(wa.BodyBL,{children:r}):r}))}))`
    color: ${Qi.text};
    ${Gd({textSize:"body-md"})}

    ${oa.MaxWidth.sm} {
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
        border-radius: ${ta.full};
        background-clip: padding-box;
    }
`,Xd=_(qd)`
    padding: 3.5rem 1.25rem 2.5rem;
`,Jd=_.div`
    overflow-y: scroll;

    ::-webkit-scrollbar {
        display: none; /* Chrome/Safari/Webkit */
    }

    color: ${Qi.text};
    ${Gd({textSize:"body-md"})}
`,eu=n=>{var{children:o,visible:i,onMobileClose:a,maxHeight:s,overflow:l}=n,c=ct(n,["children","visible","onMobileClose","maxHeight","overflow"]);const d=c["data-testid"]||"popover",u=b(F),f=na["sm-max"]({theme:u}),h=Jc.useMediaQuery({maxWidth:f}),p=()=>{a&&a()},g=()=>"string"==typeof o?e(wa.BodyMD,{children:o}):o;return t(r,{children:[i&&e(Qd,Object.assign({"data-testid":d},c,{children:e(Zd,{$maxHeight:s,$overflow:l,children:g()})})),h&&e(Hd,{show:null!=i&&i,onOverlayClick:p,children:e(Xd,{onClose:p,children:e(Jd,{children:g()})})})]})},tu=_.div`
    display: inline;
    width: fit-content;
    cursor: pointer;
    position: relative;
`,ru=n=>{var o,i,{children:a,popoverContent:l,trigger:c="click",position:d="top",zIndex:u,rootNode:f,customOffset:h,delay:p,onPopoverAppear:m,onPopoverDismiss:v,enableFlip:y=!0,enableResize:x=!1,overflow:w="auto"}=n,$=ct(n,["children","popoverContent","trigger","position","zIndex","rootNode","customOffset","delay","onPopoverAppear","onPopoverDismiss","enableFlip","enableResize","overflow"]);const[C,S]=g(!1),D=s(null),k=s(null),E=b(F),_=na["sm-max"]({theme:E}),O=Jc.useMediaQuery({maxWidth:_}),[T,I]=g(0),{refs:M,floatingStyles:A,context:j}=H({open:C,placement:d,whileElementsMounted:W,middleware:[Y(null!=h?h:16),y&&V(),U({limiter:K()}),x&&q({apply({availableHeight:e}){I(e)}})],onOpenChange:e=>{S(e),C!==e&&ne(e)}}),B=Ad(),R=O?"click":c,z=G(j,{ignoreMouse:"hover"===R}),P=Q(j),L=Z(j,{enabled:"hover"===R,delay:{open:null!==(o=null==p?void 0:p.open)&&void 0!==o?o:0,close:null!==(i=null==p?void 0:p.close)&&void 0!==i?i:500}}),{getReferenceProps:N,getFloatingProps:te}=X([z,P,L]),re=()=>{S(!1),ne(!1)},ne=e=>{e&&m&&m(),!e&&v&&v()};return t(r,{children:[e(tu,Object.assign({ref:e=>{D.current=e,M.setReference(e)}},N({onClick:e=>{e.stopPropagation(),e.preventDefault()}}),$,{children:a})),C&&e(J,{root:f,children:e(ee,{context:j,children:e("div",Object.assign({ref:e=>{k.current=e,M.setFloating(e)},style:Object.assign(Object.assign({},A),{outline:"none",zIndex:null!=u?u:B})},te(),{children:"function"==typeof l?l(x?{maxHeight:T,overflow:w}:{}):e(eu,{visible:!0,onMobileClose:re,maxHeight:x?T:void 0,overflow:x?w:void 0,children:l})}))})})]})},nu=e=>{switch(e){case"underline":return"text-decoration: underline 1px;";case"underline-dashed":return"text-decoration: underline dashed 1px;"}},ou=_.span`
    color: ${Qi["text-primary"]};
    font-weight: 600;
    text-underline-position: under;

    ${({$defaultStyle:e})=>nu(e)}

    &:hover,
    &:focus-visible {
        color: ${Qi["text-hover"]};
        ${({$hoverStyle:e})=>nu(e)}
    }

    svg {
        height: 1lh; // align vertically
        width: 1em; // scale icon with font size
        vertical-align: top;
    }
`,iu=_.span`
    ${e=>!e.$standalone&&"margin-left: 0.25rem;"}
`,au=r=>{var{ariaLabel:n,content:o,icon:i,underlineStyle:a="default",underlineHoverStyle:s="default"}=r,l=ct(r,["ariaLabel","content","icon","underlineStyle","underlineHoverStyle"]);const c=!!o;return e(ru,Object.assign({},l,{children:t(ou,{role:"button","aria-haspopup":"dialog",tabIndex:0,$defaultStyle:a,$hoverStyle:s,"aria-label":null!=n?n:c?void 0:"More info",children:[o,i&&e(iu,{$standalone:!c,children:i})]})}))},su=_.div`
    padding-left: ${ea["spacing-4"]};
    display: inline;
`,lu=({addon:t,rootNode:r})=>{const{content:n,type:o,icon:i,id:a,zIndex:s,"data-testid":l}=t;return e(su,{children:e(au,{trigger:"click",id:a,"data-testid":l,popoverContent:n,rootNode:r,zIndex:s,icon:null!=i?i:e(R,{"data-testid":`${o}-icon`}),ariaLabel:"More info"})})},cu=_.div`
    margin-bottom: ${ea["spacing-8"]};
`,du=_.label`
    color: ${Qi["text-subtle"]};
    display: inline-block;

    ${Zi["form-label"]}
    ${Gd()}
    font-weight: ${Zi.Spec["weight-semibold"]};
`,uu=_.p`
    ${Zi["body-sm-semibold"]}
    color: ${Qi["text-error"]};
    margin-top: ${ea["spacing-8"]};
    margin-bottom: 0;
    outline: none;
`,fu=_.span`
    ${Zi["form-description"]}
    color: ${Qi["text-subtler"]};
    display: block;
`,hu=r=>{var{id:n,children:o,addon:i,subtitle:a,"data-testid":s,className:l,style:c}=r,d=ct(r,["id","children","addon","subtitle","data-testid","className","style"]);return t(cu,{className:l,style:c,"data-testid":s,children:[t(du,Object.assign({id:n},d,{children:[o,i&&i.type&&("popover"===(null==i?void 0:i.type)?e(lu,{addon:i}):null)]})),"string"==typeof a?e(fu,{id:n?`${n}-subtitle`:void 0,"data-testid":s?`${s}-subtitle`:"subtitle",children:a}):a]})},pu=_.div`
    position: relative;

    ${e=>{const{$xxlStart:t,$xxlSpan:r,$xlStart:n,$xlSpan:o,$lgStart:i,$lgSpan:a,$mdStart:s,$mdSpan:l,$smStart:c,$smSpan:d,$xsStart:u,$xsSpan:f,$xxsStart:h,$xxsSpan:p}=e;return O`
            grid-column: ${t||"auto"} / span ${r||1};

            ${ki.MaxWidth.xl} {
                grid-column: ${n||"auto"} / span ${o||1};
            }

            ${ki.MaxWidth.lg} {
                grid-column: ${i||"auto"} / span ${a||1};
            }

            ${ki.MaxWidth.md} {
                grid-column: ${s||"auto"} / span ${l||1};
            }

            ${ki.MaxWidth.sm} {
                grid-column: ${c||"auto"} / span ${d||1};
            }

            ${ki.MaxWidth.xs} {
                grid-column: ${u||"auto"} / span ${f||1};
            }

            ${ki.MaxWidth.xxs} {
                grid-column: ${h||"auto"} / span ${p||1};
            }
        `}}
`,gu=o.forwardRef(((t,r)=>{const n=b(F),{xxlCols:o,xlCols:i,lgCols:a,mdCols:s,smCols:l,xsCols:c,xxsCols:d}=t,u=ct(t,["xxlCols","xlCols","lgCols","mdCols","smCols","xsCols","xxsCols"]),f=(e,t,r)=>{if(!e)return{start:void 0,span:void 0};if("development"===process.env.NODE_ENV&&("number"==typeof e&&e>t?console.warn(`Warning: ${r}Cols exceeds maximum (${t}): ${e}`):Array.isArray(e)&&(e[0]>t+1||e[1]>t+1)&&console.warn(`Warning: ${r}Cols array exceeds maximum (${t}): [${e[0]}, ${e[1]}]`)),Array.isArray(e)){const[r,n]=e;if(-1===n)return{start:r,span:t-r+1};return{start:r,span:Math.min(n-r,t)}}return{start:void 0,span:Math.min(e,t)}};return e(pu,Object.assign({ref:r},(()=>{const e=Si["xxl-column"]({theme:n}),t=Si["xl-column"]({theme:n}),r=Si["lg-column"]({theme:n}),u=Si["md-column"]({theme:n}),h=Si["sm-column"]({theme:n}),p=Si["xs-column"]({theme:n}),g=Si["xxs-column"]({theme:n}),m=f(o||i||a||s||l||c||d,e,"xxl"),b=f(i||a||s||l||c||d,t,"xl"),v=f(a||s||l||c||d,r,"lg"),y=f(s||l||c||d,u,"md"),x=f(l||c||d,h,"sm"),w=f(c||d,p,"xs"),$=f(d,g,"xxs");return{$xxlStart:m.start,$xxlSpan:m.span,$xlStart:b.start,$xlSpan:b.span,$lgStart:v.start,$lgSpan:v.span,$mdStart:y.start,$mdSpan:y.span,$smStart:x.start,$smSpan:x.span,$xsStart:w.start,$xsSpan:w.span,$xxsStart:$.start,$xxsSpan:$.span}})(),u))})),mu={mobileS:320,mobileM:375,mobileL:480,tablet:1199,desktopM:1399,desktopL:1999,desktop4k:3840},bu=e=>Object.keys(mu).reduce(((t,r)=>{const n=mu[r];return t[r]=`@media screen and (${e}: ${n}px)`,t}),{}),vu=bu("max-width"),yu=(bu("min-width"),_.div`
    position: relative;
    ${e=>{const{$desktopStart:t,$desktopSpan:r,$tabletStart:n,$tabletSpan:o,$mobileStart:i,$mobileSpan:a}=e;return O`
            grid-column: ${t||"auto"} / span ${r||1};

            ${vu.tablet} {
                grid-column: ${n||"auto"} / span
                    ${o||1};
            }

            ${vu.mobileL} {
                grid-column: ${i||"auto"} / span
                    ${a||1};
            }
        `}}
`),xu=o.forwardRef(((t,r)=>{const{mobileCols:n,tabletCols:o,desktopCols:i}=t,a=ct(t,["mobileCols","tabletCols","desktopCols"]);return e(yu,Object.assign({ref:r},(()=>{const e=o||n,t=n,r=wu(i||o||n),a=wu(e),s=wu(t);return{$desktopSpan:r.span,$desktopStart:r.start,$mobileSpan:s.span,$mobileStart:s.start,$tabletSpan:a.span,$tabletStart:a.start}})(),a))})),wu=e=>{if(Array.isArray(e)&&e.length>1){const[t,r]=e,n=t<=r?t:r,o=t<=r?r:t;let i;return i=o===n?1:o-n,{start:n,span:i}}return"number"==typeof e?{start:void 0,span:e}:{start:void 0,span:void 0}},$u=O`
    display: flex;
    flex-direction: column;

    &:not(:last-child) {
        margin-bottom: ${ea["spacing-32"]};
    }
`,Cu=_.div`
    ${$u}
`,Su=_(gu)`
    ${$u}
`,Du=_(xu)`
    ${$u}
`,ku=({label:r,errorMessage:n,id:o,disabled:i,children:a,layoutType:s,mobileCols:l,tabletCols:c,desktopCols:d,xxsCols:u,xsCols:f,smCols:h,mdCols:p,lgCols:g,xlCols:m,xxlCols:b,"data-error-testid":v})=>{const y=!s&&(l||c||d)?"v2-grid":!s&&(u||f||h||p||g||m||b)?"grid":s||"flex",w=o?`${o}-label`:void 0,$=()=>v||(o?`${o}-error-message`:"error-message"),S=()=>!!n;const D=(e=>{switch(e){case"v2-grid":return Du;case"grid":return Su;case"flex":return Cu}})(y);return t(D,Object.assign({},(e=>{switch(e){case"v2-grid":return{mobileCols:l,tabletCols:c,desktopCols:d};case"grid":return{xxsCols:u,xsCols:f,smCols:h,mdCols:p,lgCols:g,xlCols:m,xxlCols:b};case"flex":return}})(y),{children:[r&&e(hu,"string"==typeof r?{htmlFor:`${o}-base`,"data-testid":o?`${o}-label`:"form-label",id:w,disabled:i,children:r}:Object.assign({htmlFor:`${o}-base`,"data-testid":o?`${o}-label`:"form-label",id:w,disabled:i},r)),(()=>{const e={"aria-invalid":S(),"aria-describedby":[S()?$():void 0,"object"==typeof r&&(null==r?void 0:r.subtitle)?`${o}-label-subtitle`:void 0].filter(Boolean).join(" ")||void 0};return C.map(a,(t=>x(t,e)))})(),n&&e(uu,{id:$(),tabIndex:0,"data-testid":$(),children:n})]}))},Eu=e=>"small"===e?2.5:3,_u=_.div`
    position: relative;
    width: 100%;
    ${e=>{const t=Eu(e.$variant);return O`
            min-height: ${t}rem;
            height: ${t}rem; // Need this to persist the height when expanding or collapsing list
        `}}
`,Ou=O`
    display: flex;
    position: relative;
    align-items: center;
    justify-content: space-between;
    padding: 0 ${ea["spacing-16"]};
    // exclude top and bottom borders
    height: calc(${e=>Eu(e.$variant)}rem - 2px);
    width: 100%;
    border-radius: ${ta.sm};
    border: none;
    background: transparent;

    &:focus,
    &:active {
        outline: none;
    }

    &:focus-visible {
        outline: 2px solid ${Qi["border-focus"]};
    }
`,Fu=_.button`
    ${Ou}
    cursor: pointer;
`,Tu=_.div`
    ${Ou}
`,Iu=T`
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
`,Mu=_.div`
    position: relative;
    border: ${Ji["width-010"]} ${Ji.solid} ${Qi.border};
    border-radius: ${ta.sm};
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
                animation: ${Iu} 0.5s ease-in-out;
            `}

    ${e=>e.$disabled?O`
                background: ${Qi["bg-disabled"]};

                ${Fu} {
                    cursor: not-allowed;
                }

                &:focus-within {
                    border-color: ${Qi.border};
                    box-shadow: none;
                }
            `:e.$readOnly?O`
                border: none;
                background: transparent !important;

                ${Fu} {
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
`;_.div`
    transform: rotate(${e=>e.$expanded?180:0}deg);
    transition: transform ${Xi["duration-250"]} ${Xi["ease-default"]};
    margin-left: ${ea["spacing-16"]};
`,_(ne)`
    color: ${Qi.icon};
`;const Au=_.div`
    height: 1px;
    background: ${Qi.border};
    margin: 0 ${ea["spacing-8"]};
`,ju=_.div`
    display: flex;
    flex: 1;
    word-break: break-all;
    ${e=>{if(e.$disabled)return O`
                color: ${Qi["text-disabled"]};
            `}}
`,Bu=_.div`
    ${e=>"small"===e.$variant?Zi["body-md-regular"]:Zi["body-baseline-regular"]}
    text-align: left;
    ${e=>{if("middle"!==e.$truncateType)return O`
                    ${pa(1)}
                `}}
    overflow: hidden;
`,Ru=_(Bu)`
    color: ${Qi["text-subtler"]};
`,zu=({children:t,show:r,error:n,disabled:o,testId:i,onBlur:a,readOnly:l,className:c,variant:d})=>{const u=s(null);return kd("mousedown",(function(e){if(!o){if(u&&u.current.contains(e.target))return;r&&a()}}),"document"),e(_u,{className:c,$variant:d,children:e(Mu,{ref:u,$error:n&&!r,$disabled:o,$readOnly:l,$expanded:r,"data-testid":i,children:t})})},Pu=e=>"right"===e?"bottom-end":"bottom-start",Lu=i({elementWidth:0,styles:{},setFloatingRef:()=>{},getFloatingProps:()=>({})}),Nu=()=>b(Lu),Hu=({enabled:n,isOpen:o,onOpen:i,onClose:a,onDismiss:l,renderElement:c,renderDropdown:d,customZIndex:u,clickToToggle:f=!1,offset:h=0,alignment:p="left",fitAvailableHeight:g,rootNode:m})=>{var v;const y=b(F),x=na["sm-max"]({theme:y}),w=s(null),{width:$=0}=qc({targetRef:w,handleHeight:!1}),C={name:"center",fn:({x:e,rects:t})=>{const r=0===e||e+t.floating.width===window.innerWidth,n=window.innerWidth<x;return{x:r&&n?(window.innerWidth-t.floating.width)/2:e}}},{refs:S,floatingStyles:D,context:k}=H({open:o,onOpenChange:(e,t,r)=>{"escape-key"===r?null==l||l():e&&!o?null==i||i():!e&&o&&(null==a||a(r))},whileElementsMounted:W,placement:Pu(p),middleware:[Y(h),V(),U({limiter:K()}),q({apply({availableHeight:e,elements:t}){!g||e>=t.floating.scrollHeight?t.floating.style.setProperty("--available-height",""):t.floating.style.setProperty("--available-height",`${Math.max(0,e)}px`)}}),C]}),E=Ad(),{isMounted:_,styles:O}=te(k,{initial:{opacity:0},open:{opacity:1},duration:300}),T=G(k,{enabled:n,toggle:f}),I=Q(k,{enabled:n}),{getReferenceProps:M,getFloatingProps:A}=X([T,I]),j={elementWidth:$,styles:Object.assign(Object.assign(Object.assign({},O),D),{zIndex:null!==(v=null!=u?u:E)&&void 0!==v?v:50}),setFloatingRef:S.setFloating,getFloatingProps:A};return t(r,{children:[e("div",Object.assign({ref:e=>{w.current=e,S.setReference(e)}},M(),{children:c()})),_&&e(J,{root:m,children:e(ee,{context:k,modal:!1,initialFocus:-1,returnFocus:!1,children:e(Lu.Provider,{value:j,children:d(j)})})})]})},Wu=_.div`
    --vertical-inset: ${ea["spacing-24"]};
    --horizontal-inset: ${ea["spacing-20"]};
    --header-bottom-spacing: ${ea["spacing-4"]};

    border: ${Ji["width-010"]} ${Ji.solid} ${Qi.border};
    border-radius: ${ta.sm};
    overflow: hidden;

    width: ${e=>e.$width}px;
    max-width: 41rem;
    min-width: 21rem;

    ${oa.MaxWidth.sm} {
        min-width: 17.5rem;
    }
`,Yu=_.div`
    clip-path: inset(50%);
    height: 1px;
    width: 1px;
    overflow: hidden;
    position: absolute;
    white-space: nowrap;
`,Vu=e=>wd()?e:e?"true":void 0,Uu=_.div`
    display: inline-block;
    position: relative;
    width: ${({$size:e})=>e?`${e}px`:"1em"};
    height: ${({$size:e})=>e?`${e}px`:"1em"};
    color: ${e=>e.$color||"currentColor"};
`,Ku=T`
	0% {
	  transform: rotate(0deg);
	}
	100% {
	  transform: rotate(360deg);
	}
`,qu=_.div`
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
    animation: ${Ku} 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
`,Gu=_(qu)`
    animation-delay: -0.45s;
`,Qu=_(qu)`
    animation-delay: -0.3s;
`,Zu=_(qu)`
    animation-delay: -0.15s;
`,Xu=({color:r,className:n,size:o})=>t(Uu,{className:n,$size:o,$color:r,"data-testid":"component-loading-spinner",children:[e(qu,{id:"inner1"}),e(Gu,{id:"inner2"}),e(Qu,{id:"inner3"}),e(Zu,{id:"inner4"})]}),Ju={Button:{"button-radius":Ni.md,"button-default-colour-bg":bi["bg-primary"],"button-default-colour-bg-hover":bi["bg-primary-hover"],"button-default-colour-text":bi["text-inverse"],"button-secondary-colour-border":bi["border-primary"],"button-secondary-colour-text":bi["text-primary"],"button-light-colour-text":bi["text-primary"],"button-link-colour-text":bi["text-primary"]}},ef={collections:{default:{Button:{"button-radius":Ni.sm,"button-default-colour-bg":bi["bg-primary"],"button-default-colour-bg-hover":bi["bg-primary-hover"],"button-default-colour-text":bi["text-inverse"],"button-secondary-colour-border":bi["border-primary"],"button-secondary-colour-text":bi["text-primary"],"button-light-colour-text":bi["text-primary"],"button-link-colour-text":bi["text-primary"]}},pa:{Button:{"button-radius":Ni.full,"button-default-colour-bg":bi["bg-primary"],"button-default-colour-bg-hover":bi["bg-primary-hover"],"button-default-colour-text":bi["text-inverse"],"button-secondary-colour-border":bi["border-primary"],"button-secondary-colour-text":bi["text-primary"],"button-light-colour-text":bi["text-primary"],"button-link-colour-text":bi["text-primary"]}},a11yplayground:Ju},defaultValue:"default"},tf=(e,t)=>r=>{var n,o;const i=r.theme,a=Vo(ef,null==i?void 0:i.componentScheme);return rf((null===(o=null===(n=null==i?void 0:i.componentOverrides)||void 0===n?void 0:n[e])||void 0===o?void 0:o[t])||a[e][t],r)},rf=(e,t)=>{switch(typeof e){case"function":return e(t);case"number":return e+"px";case"string":return e}},nf=tf("Button","button-radius"),of=tf("Button","button-default-colour-bg"),af=tf("Button","button-default-colour-bg-hover"),sf=tf("Button","button-default-colour-text"),lf=tf("Button","button-secondary-colour-border"),cf=tf("Button","button-secondary-colour-text"),df=tf("Button","button-light-colour-text"),uf=tf("Button","button-link-colour-text"),ff=_.button`
    padding: ${ea["spacing-8"]} ${ea["spacing-16"]};
    min-width: 4rem;
    border: ${Ji["width-010"]} ${Ji.solid} transparent;
    transition: all ${Xi["duration-250"]} ${Xi["ease-default"]};
    border-radius: ${nf};
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;

    // -----------------------------------------------------------------------------
    // BUTTON STYLE + TEXT COLOR
    // -----------------------------------------------------------------------------
    ${e=>{switch(e.$buttonStyle){case"secondary":return O`
                    background-color: ${Qi.bg};
                    border-color: ${e.$buttonIsDanger?Qi["border-error-strong"]:lf};

                    color: ${e.$buttonIsDanger?Qi["text-error"]:cf};

                    &:hover,
                    &:active {
                        @media (pointer: fine) {
                            background-color: ${Qi["bg-hover-neutral"]};
                        }
                    }
                `;case"light":return O`
                    background-color: ${Qi.bg};
                    border-color: ${Qi.border};

                    color: ${e.$buttonIsDanger?Qi["text-error"]:df};

                    &:hover,
                    &:active {
                        @media (pointer: fine) {
                            background-color: ${Qi["bg-hover-neutral"]};
                        }
                    }
                `;case"link":return O`
                    background-color: transparent;

                    color: ${e.$buttonIsDanger?Qi["text-error"]:uf};
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
                    background-color: ${e.$buttonIsDanger?Qi["bg-error-strong"]:of};

                    ${oa.MaxWidth.sm} {
                        width: 100%;
                    }

                    color: ${sf};

                    &:hover,
                    &:active {
                        @media (pointer: fine) {
                            background-color: ${e.$buttonIsDanger?Qi["bg-error-strong-hover"]:af};
                        }
                    }
                `}}}

    // -----------------------------------------------------------------------------
	// BUTTON SIZE + TEXT SIZE
	// -----------------------------------------------------------------------------
	${e=>{switch(e.$buttonSizeStyle){case"small":return O`
                    height: 2.5rem;
                    ${Zi["body-md-semibold"]}

                    ${oa.MaxWidth.xxs} {
                        height: auto;
                    }
                `;case"large":return O`
                    height: 4rem;
                    ${Zi["heading-md-semibold"]}

                    ${oa.MaxWidth.xxs} {
                        height: auto;
                    }
                `;default:return O`
                    height: 3rem;
                    ${Zi["heading-xs-semibold"]}

                    ${oa.MaxWidth.xxs} {
                        height: auto;
                    }
                `}}}
`,hf=_(Xu)`
    margin-right: 0.5rem;
`,pf=(r,n)=>{const{children:o,disabled:i=!1,loading:a=!1,styleType:s="default",danger:l=!1,focusableWhenDisabled:c=!1,onClick:d}=r,u=ct(r,["children","disabled","loading","styleType","danger","focusableWhenDisabled","onClick"]),f={$buttonStyle:i?"disabled":s,$buttonSizeStyle:"default",$buttonIsDanger:l};return t(ff,Object.assign({ref:n,"data-testid":u["data-testid"]||"button",disabled:i&&!c,"aria-disabled":i,"aria-busy":a,onClick:i?void 0:d},f,u,{children:[a&&e(hf,{}),e("span",{children:o})]}))};pf.displayName="Button.Default";const gf=(r,n)=>{const{children:o,disabled:i=!1,loading:a=!1,styleType:s="default",danger:l=!1,focusableWhenDisabled:c=!1,onClick:d}=r,u=ct(r,["children","disabled","loading","styleType","danger","focusableWhenDisabled","onClick"]),f={$buttonStyle:i?"disabled":s,$buttonSizeStyle:"small",$buttonIsDanger:l};return t(ff,Object.assign({ref:n,"data-testid":u["data-testid"]||"button",disabled:i&&!c,"aria-disabled":i,"aria-busy":a,onClick:i?void 0:d},f,u,{children:[a&&e(hf,{}),e("span",{children:o})]}))};gf.displayName="Button.Small";const mf=(r,n)=>{const{children:o,disabled:i=!1,loading:a=!1,styleType:s="default",danger:l=!1,focusableWhenDisabled:c=!1,onClick:d}=r,u=ct(r,["children","disabled","loading","styleType","danger","focusableWhenDisabled","onClick"]),f={$buttonStyle:i?"disabled":s,$buttonSizeStyle:"large",$buttonIsDanger:l};return t(ff,Object.assign({ref:n,"data-testid":u["data-testid"]||"button",disabled:i&&!c,"aria-disabled":i,"aria-busy":a,onClick:i?void 0:d},f,u,{children:[a&&e(hf,{}),e("span",{children:o})]}))};mf.displayName="Button.Large";const bf={Default:o.forwardRef(pf),Small:o.forwardRef(gf),Large:o.forwardRef(mf)},vf=O`
    color: ${Qi.icon};
    height: 1rem;
    width: 1rem;
`,yf=_(oe)`
    ${vf}
`,xf=_(ie)`
    ${vf}
`,wf=_(ne)`
    ${vf}
    transition: transform 250ms ease-in-out;
    margin-left: 0.5rem;
`,$f=_.div`
    position: relative;
    width: 100%;
    display: flex;
    flex-direction: column;

    padding-top: var(--vertical-inset);
    padding-bottom: var(--vertical-inset);
`,Cf=_.div`
    display: flex;
    flex: 1;
    position: relative;
`,Sf=_.div`
    isolation: isolate;
    width: 100%;

    padding-left: var(--horizontal-inset);
    padding-right: var(--horizontal-inset);
`,Df=_.div`
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
`,kf=_.div`
    display: flex;
    justify-content: space-between;

    padding-left: var(--header-horizontal-inset, var(--horizontal-inset));
    padding-right: var(--header-horizontal-inset, var(--horizontal-inset));
    padding-bottom: var(--header-bottom-spacing);
`,Ef=_.div`
    display: flex;
`,_f=_.button`
    border: none;
    display: flex;
    align-items: center;
    padding: 0.5rem;
    background: transparent;
    cursor: pointer;

    ${e=>!1===e.$visible?O`
                display: none;
            `:e.$expanded?O`
                ${wf} {
                    transform: rotate(180deg);
                }
            `:void 0};
`,Of=_.span`
    ${Zi["body-md-regular"]}
    color: ${Qi.text};
`,Ff=_.div`
    display: flex;
`,Tf=_(Vd)`
    margin: auto 0;
    padding: 0.75rem;

    &:disabled {
        cursor: not-allowed;
    }
`,If=_.div`
    display: flex;
    gap: 0.5rem;
    margin-top: 1.5rem;

    padding-left: var(--horizontal-inset);
    padding-right: var(--horizontal-inset);
`,Mf=_(bf.Small)`
    flex: 1;
`,Af=_.div`
    width: 100%;
    height: 100%;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(6, 2.5rem);
    align-content: center;
    justify-content: center;

    gap: 0.5rem 0;
`,jf=_.div`
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: ${ta.md};
    margin: 0 0.5rem;
    transition: ${Xi["duration-150"]} ${Xi["ease-default"]};

    // default styles
    ${Zi["body-md-regular"]}
    border-radius: ${ta.md};
    border: ${Ji["width-010"]} ${Ji.solid} transparent;
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
                font-weight: ${Zi.Spec["weight-semibold"]};

                ${t&&O`
                    &:hover {
                        background: ${Qi["bg-selected-hover"]};
                        border-color: ${Qi["border-selected-hover"]};
                        color: ${Qi["text-selected-hover"]};
                    }
                `}
            `:"current-month"===e?O`
                color: ${Qi["text-primary"]};
                font-weight: ${Zi.Spec["weight-semibold"]};
            `:r?O`
                color: ${Qi["text-disabled-subtlest"]};
            `:void 0}

    // hover styles
    ${({$variant:e,$interactive:t})=>{if(t)return"selected-month"===e?O`
                &:hover {
                    background: ${Qi["bg-selected-hover"]};
                    border-color: ${Qi["border-selected-hover"]};
                    color: ${Qi["text-selected-hover"]};
                    font-weight: ${Zi.Spec["weight-semibold"]};
                }
            `:O`
            &:hover {
                background: ${Qi["bg-hover"]};
                color: ${Qi["text-hover"]};
                font-weight: ${Zi.Spec["weight-semibold"]};
            }
        `}}
`,Bf=({calendarDate:t,currentFocus:r,selectedStartDate:n,selectedEndDate:o,viewCalendarDate:i,isNewSelection:l,minDate:d,maxDate:u,allowDisabledSelection:f,onMonthSelect:h})=>{const p=a((()=>hd.generateMonths(td(t))),[t]),m=s(new Array(p.length).fill(null)),[b,v]=g(p.findIndex((e=>e.isSame(i,"month"))));c((()=>{var e;null!==b&&(null===(e=m.current[b])||void 0===e||e.focus())}),[b,p]);const y=(e,t)=>{t||h(e)},x=e=>{const t="start"===r&&o&&e.isAfter(o,"month")&&l,i="end"===r&&n&&e.isBefore(n,"month")&&l;return!(!t&&!i)},w=e=>{const t=e.format("MMMM"),r=(n=e,!hd.isWithinRange(n,d?td(d):void 0,u?td(u):void 0,"month"));var n;const o=i.isSame(e,"month"),a=o?"selected-month":td().isSame(e,"month")?"current-month":"default",s=i.isSame(e,"year")?o?0:-1:0===e.month()?0:-1;return{disabledDisplay:r||x(e),interactive:!r||f,month:t,variant:a,tabIndex:s}};return p.length?e(Af,{onBlur:()=>{v(null)},children:p.map(((t,r)=>{const{disabledDisplay:n,interactive:o,variant:i,month:a,tabIndex:s}=w(t);return e(jf,{ref:e=>m.current[r]=e,tabIndex:s,role:"button","aria-disabled":!o,"aria-selected":"selected-month"===i,$variant:i,$disabledDisplay:n,$interactive:o,onClick:()=>y(t,!o),onKeyDown:e=>{((e,t,r)=>{const n=e.key;let o;const i=p.indexOf(t);switch(n){case"Enter":case" ":e.preventDefault(),y(t,r);break;case"ArrowLeft":o=i-1;break;case"ArrowRight":o=i+1;break;case"ArrowUp":o=i-2;break;case"ArrowDown":o=i+2}void 0!==o&&o>=0&&o<p.length&&(e.preventDefault(),v(o))})(e,t,!o)},children:a},a)}))}):null},Rf=_.div`
    width: 100%;
    height: 100%;
    display: grid;
    align-content: center;
    align-items: center;
    grid-template-columns: repeat(3, 1fr);
`,zf=_.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 1rem 0.5rem;
    transition: ${Xi["duration-150"]} ${Xi["ease-default"]};
    padding: 0.5rem;

    // default styles
    ${Zi["body-md-regular"]}
    border-radius: ${ta.md};
    border: ${Ji["width-010"]} ${Ji.solid} transparent;
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
                font-weight: ${Zi.Spec["weight-semibold"]};

                ${t&&O`
                    &:hover {
                        background: ${Qi["bg-selected-hover"]};
                        border-color: ${Qi["border-selected-hover"]};
                        color: ${Qi["text-selected-hover"]};
                    }
                `}
            `:"current-year"===e?O`
                color: ${Qi["text-primary"]};
                font-weight: ${Zi.Spec["weight-semibold"]};
            `:"other-decade"===e||r?O`
                color: ${Qi["text-disabled-subtlest"]};
            `:void 0}

    // hover styles
    ${({$variant:e,$interactive:t})=>{if(t)return"selected-year"===e?O`
                &:hover {
                    background: ${Qi["bg-selected-hover"]};
                    border-color: ${Qi["border-selected-hover"]};
                    color: ${Qi["text-selected-hover"]};
                    font-weight: ${Zi.Spec["weight-semibold"]};
                }
            `:O`
            &:hover {
                background: ${Qi["bg-hover"]};
                color: ${Qi["text-hover"]};
                font-weight: ${Zi.Spec["weight-semibold"]};
            }
        `}}
`,Pf=({calendarDate:t,currentFocus:r,selectedStartDate:n,selectedEndDate:o,viewCalendarDate:i,isNewSelection:l,minDate:d,maxDate:u,allowDisabledSelection:f,onYearSelect:h,setCalendarDate:p})=>{const m=a((()=>hd.generateDecadeOfYears(td(t))),[t]),b=s(new Array(m.length).fill(null)),[v,y]=g(t);c((()=>{var e;if(null===v)return;const t=m.findIndex((e=>e.isSame(v,"year")));t>=0&&(null===(e=b.current[t])||void 0===e||e.focus())}),[v,m]);const x=(e,t)=>{t||h(e)},w=e=>{const t="start"===r&&o&&e.isAfter(o,"year")&&l,i="end"===r&&n&&e.isBefore(n,"year")&&l;return!(!t&&!i)},$=e=>{const t=m.indexOf(e),r=[0,11].includes(t),n=e.year(),o=(a=e,!hd.isWithinRange(a,d?td(d):void 0,u?td(u):void 0,"year"));var a;const s=r?"other-decade":i.isSame(e,"year")?"selected-year":td().isSame(e,"year")?"current-year":"default",l=i.year()>=m[0].year()&&i.year()<=m[m.length-1].year()?"selected-year"===s?0:-1:1===t?0:-1;return{disabledDisplay:o||w(e),interactive:!o||f,year:n,variant:s,tabIndex:l}};return m.length?e(Rf,{onBlur:()=>{y(null)},children:m.map(((t,r)=>{const{disabledDisplay:n,interactive:o,variant:i,year:a,tabIndex:s}=$(t);return e(zf,{ref:e=>{b.current[r]=e},tabIndex:s,role:"button","aria-label":`${a}`,"aria-disabled":!o,"aria-selected":"selected-year"===i,$variant:i,$disabledDisplay:n,$interactive:!!o,onClick:()=>x(t,!o),onKeyDown:e=>{((e,t,r)=>{let n;switch(e.key){case"Enter":case" ":e.preventDefault(),x(t,r);break;case"ArrowLeft":n=t.subtract(1,"year");break;case"ArrowRight":n=t.add(1,"year");break;case"ArrowUp":n=t.subtract(3,"year");break;case"ArrowDown":n=t.add(3,"year")}void 0!==n&&(e.preventDefault(),p(n),y(n))})(e,t,!o)},children:a},a)}))}):null},Lf=o.forwardRef(((n,o)=>{var{children:i,initialCalendarDate:a,minDate:l,maxDate:d,currentFocus:u,selectedStartDate:h,selectedEndDate:p,selectWithinRange:m,dynamicHeight:b=!1,allowDisabledSelection:v,onCalendarDateChange:y,withButton:x,doneButtonDisabled:w,onDismiss:$,showNavigationHeader:C=!0,getLeftArrowDate:S,getRightArrowDate:D,isLeftArrowDisabled:k,isRightArrowDisabled:E,getMonthHeaderLabel:_,getYearHeaderLabel:O,isFocusable:F=!1}=n,T=ct(n,["children","initialCalendarDate","minDate","maxDate","currentFocus","selectedStartDate","selectedEndDate","selectWithinRange","dynamicHeight","allowDisabledSelection","onCalendarDateChange","withButton","doneButtonDisabled","onDismiss","showNavigationHeader","getLeftArrowDate","getRightArrowDate","isLeftArrowDisabled","isRightArrowDisabled","getMonthHeaderLabel","getYearHeaderLabel","isFocusable"]);const[I,M]=g(yd.toDayjs(a)),[A,j]=g(yd.toDayjs(a)),[B,R]=g("default"),z=s(null),P=s(null),L=s(null),N=s(null);f(o,(()=>({defaultView(){R("default")},resetView(){const e=yd.toDayjs(a);M(e),j(e),R("default")},setCalendarDate(e){const t=yd.toDayjs(e);M(t),j(t)}}))),c((()=>{const e=yd.toDayjs(a);M(e),j(e)}),[a]),c((()=>{Q(A)}),[A]);const H=()=>{var e;"month-options"!==B?(R("month-options"),null===(e=L.current)||void 0===e||e.focus()):(R("default"),M(A))},W=e=>{var t;if("Enter"!==e.key&&" "!==e.key||(e.preventDefault(),H(),null===(t=N.current)||void 0===t||t.focus()),"ArrowUp"===e.key||"ArrowDown"===e.key){e.preventDefault();const t="ArrowUp"===e.key?I.subtract(1,"month"):I.add(1,"month");if(!hd.isWithinRange(t,l?td(l):void 0,d?td(d):void 0,"month"))return;M(t),"default"===B&&j(t)}},Y=()=>{"default"!==B?(R("default"),M(A)):R("year-options")},V=e=>{if("Enter"!==e.key&&" "!==e.key||(e.preventDefault(),Y()),"ArrowUp"===e.key||"ArrowDown"===e.key){e.preventDefault();let t;if(t="year-options"===B?"ArrowUp"===e.key?I.subtract(10,"year"):I.add(10,"year"):"ArrowUp"===e.key?I.subtract(1,"year"):I.add(1,"year"),!hd.isWithinRange(t,l?td(l):void 0,d?td(d):void 0,"year"))return;M(t),"default"===B&&j(t)}},U=()=>{var e;null===(e=L.current)||void 0===e||e.focus();const t=S?S(I):I.subtract(1,"month");switch(B){case"default":j(t),M(t);break;case"month-options":M((e=>e.subtract(1,"year")));break;case"year-options":M((e=>e.subtract(10,"year")))}},K=()=>{var e;null===(e=L.current)||void 0===e||e.focus();const t=D?D(I):I.add(1,"month");switch(B){case"default":j(t),M(t);break;case"month-options":M((e=>e.add(1,"year")));break;case"year-options":M((e=>e.add(10,"year")))}},q=e=>{M(e),j(e),x||R("default")},G=()=>{const e=yd.toDayjs(a);M(e),j(e),"default"===B?Z("reset"):R("default")},Q=e=>{y&&y(e)},Z=e=>{$&&$(e)},X=()=>{if(!l||v)return!1;const e=td(l);return"month-options"===B?!hd.isPreviousYearWithinRange(I,e):"year-options"===B?!hd.isPreviousDecadeWithinRange(I,e):k?k(I):!hd.isPreviousMonthWithinRange(I,e)},J=()=>{if(!d||v)return!1;const e=td(d);return"month-options"===B?!hd.isNextYearWithinRange(I,e):"year-options"===B?!hd.isNextDecadeWithinRange(I,e):E?E(I):!hd.isNextMonthWithinRange(I,e)},ee=()=>{const n=_?_(I):I.format("MMM"),o=td(n,"MMM").format("MMMM"),i=(()=>{if("year-options"===B){const{beginDecade:e,endDecade:t}=hd.getStartEndDecade(I);return`${e} to ${t}`}return O?O(I):I.format("YYYY")})(),a={"month-options":`${i}, Close month selection`,"year-options":`${i}, Close year selection`,default:`${i}, Select year`};return t(r,{children:[t(_f,{"aria-label":`${o}, Select month`,type:"button",$expanded:"month-options"===B,$visible:"default"===B,id:"month-dropdown",onClick:H,onKeyDown:W,tabIndex:F?0:-1,children:[e(Of,{children:n}),e(wf,{})]}),t(_f,{ref:N,"aria-label":a[B],type:"button",$expanded:"default"!==B,id:"year-dropdown",onClick:Y,onKeyDown:V,tabIndex:F?0:-1,children:[e(Of,{children:i}),e(wf,{})]})]})},te=()=>{switch(B){case"month-options":return e(Bf,{calendarDate:I,currentFocus:u,minDate:l,maxDate:d,selectedStartDate:h,selectedEndDate:p,viewCalendarDate:A,isNewSelection:!!m,onMonthSelect:q,allowDisabledSelection:v});case"year-options":return e(Pf,{setCalendarDate:M,calendarDate:I,currentFocus:u,minDate:l,maxDate:d,selectedStartDate:h,selectedEndDate:p,viewCalendarDate:A,isNewSelection:!!m,onYearSelect:q,allowDisabledSelection:v});default:return null}};return t($f,Object.assign({ref:L,"data-id":"calendar-container","data-testid":"calendar-container","aria-label":A.format("MMMM, YYYY"),role:"group"},T,{children:[C&&(()=>{const r={"month-options":"year","year-options":"decade",default:"month"}[B];return t(kf,{"data-id":"calendar-header","data-testid":"calendar-header",children:[e(Ef,{children:ee()}),t(Ff,{children:[e(Tf,{"aria-label":`Previous ${r}`,"data-testid":"left-arrow-btn",disabled:X(),focusHighlight:!1,focusOutline:"browser",onClick:U,tabIndex:F?0:-1,children:e(yf,{})}),e(Tf,{"aria-label":`Next ${r}`,"data-testid":"right-arrow-btn",disabled:J(),focusHighlight:!1,focusOutline:"browser",onClick:K,tabIndex:F?0:-1,children:e(xf,{})})]})]})})(),e(Cf,{children:(()=>{const n="function"==typeof i?i({calendarDate:A,currentView:B}):i;if(b)return t(r,{children:["default"===B&&n,te()]});{const o="default"===B;return t(r,{children:[e(Sf,{inert:Vu(!o),children:n}),e(Df,{$visible:!o,children:te()})]})}})()}),(()=>{if(!x)return;const r=!!("default"===B)&&w;return t(If,{children:[e(Mf,{ref:P,"data-testid":"cancel-button",styleType:"light",type:"button",onClick:G,children:"Cancel"}),e(Mf,{"data-testid":"done-button",ref:z,type:"button",onClick:()=>{r||(M(A),"default"===B?Z("confirmed"):R("default"))},disabled:r,children:"Done"})]})})()]}))})),Nf=_.div`
    width: 100%;
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    row-gap: 0.25rem;
`,Hf=_.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 2.5rem;
    pointer-events: none;
    user-select: none;

    ${Zi["body-sm-semibold"]};
    color: ${Qi.text};
`,Wf=_.div`
    grid-column: 1 / -1;
    display: flex;
`,Yf=e=>{let t=Qi.bg,r="transparent";switch(e.$type){case"hover-subtle":t=Qi["bg-hover"],r=Qi["bg-hover"];break;case"hover":t=Qi["bg-hover-strong"],r=Qi["bg-hover-strong"];break;case"hover-outline":t=Qi["bg-hover-subtle"],r=Qi["border-hover"];break;case"selected-outline":t=Qi["bg-selected"],r=Qi["border-selected"];break;case"selected-outline-subtle":t=Qi["bg-selected"],r=Qi["border-selected-subtle"];break;case"selected-hover":t=Qi["bg-selected-hover"];break;case"selected-hover-outline":t=Qi["bg-selected-hover"],r=Qi["border-selected-hover"]}return{color:t,borderColor:r}},Vf=_.div`
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    width: 100%;
    height: 2.5rem;
`,Uf=_.div`
    position: absolute;
    height: 2.5rem;
    width: 50%;
    transition: ${Xi["duration-150"]} ${Xi["ease-default"]};
    border: ${Ji["width-010"]} ${Ji.solid} transparent;
    border-left: none;
    border-right: none;

    ${e=>{if(!e.$type)return;const{color:t,borderColor:r}=Yf(e);return O`
            background-color: ${t};
            background-clip: border-box;
            border-top-color: ${r};
            border-bottom-color: ${r};
        `}}
`,Kf=_(Uf)`
    left: 0;
`,qf=_(Uf)`
    right: 0;
`,Gf=_.div`
    position: absolute;
    z-index: 1;

    display: flex;
    align-items: center;
    justify-content: center;
    height: 2.5rem;
    width: 2.5rem;
    transition: ${Xi["duration-150"]} ${Xi["ease-default"]};

    border: ${Ji["width-010"]} ${Ji.solid} transparent;
    border-radius: ${ta.md};

    ${e=>{if(e.$type){const{color:t,borderColor:r}=Yf(e);return O`
                background-color: ${t};
                background-clip: content-box;
                border-color: ${r};
            `}}}
`,Qf=_(Gf)`
    right: calc(50% - 1.25rem);
    clip-path: inset(-3px 1.25rem -3px -3px);
`,Zf=_(Gf)`
    left: calc(50% - 1.25rem);
    clip-path: inset(-3px -3px -3px 1.25rem);
`,Xf=_.span`
    position: absolute;
    top: 0;
    bottom: 0;
    z-index: 2;
    cursor: ${e=>e.$interactive?"pointer":null===e.$interactive?"default":"not-allowed"};
`,Jf=_.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 2.5rem;
    width: 2.5rem;
    ${Zi["body-md-regular"]}
    transition: ${Xi["duration-150"]} ${Xi["ease-default"]};

    pointer-events: ${e=>e.$interactive||null===e.$interactive?"auto":"none"};

    ${e=>{const{$disabled:t,$type:r}=e;if(t)return"hidden"===r?O`
                    visibility: hidden;
                `:O`
                color: ${Qi["text-disabled-subtlest"]};
            `;switch(r){case"selected":return O`
                    font-weight: ${Zi.Spec["weight-semibold"]};
                    color: ${Qi["text-selected"]};
                `;case"selected-hover":return O`
                    font-weight: ${Zi.Spec["weight-semibold"]};
                    color: ${Qi["text-selected-hover"]};
                `;case"current":return O`
                    font-weight: ${Zi.Spec["weight-semibold"]};
                    color: ${Qi["text-primary"]};
                `;case"hover":return O`
                    font-weight: ${Zi.Spec["weight-semibold"]};
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
`,eh=_.div`
    position: absolute;
    width: 4px;
    height: 4px;
    background-color: currentColor;
    border-radius: 100%;
    bottom: 4px;
`,th=({bgLeft:r,bgRight:n,circleLeft:o,circleRight:i,labelType:a,disabled:l,interactive:d,currentDateIndicator:u,date:f,onSelect:h,onHover:p,onFocus:g,onHoverEnd:m,onKeyDown:b,focusDate:v,label:y,ariaHidden:x,tabIndex:w=-1,role:$="button"})=>{const C=td().isSame(f,"day"),S=!!v&&v.isSame(f,"day"),D=`${f.format("D MMMM YYYY dddd")}, ${l?"Unavailable":"Available"}`,k=s(null);c((()=>{var e;S&&k.current&&(null===(e=k.current)||void 0===e||e.focus())}),[S]);return t(Vf,{"aria-hidden":x,children:[e(Kf,{$type:r}),e(Qf,{$type:o}),e(qf,{$type:n}),e(Zf,{$type:i}),e(Xf,{$interactive:d,children:t(Jf,{ref:k,tabIndex:w,role:$,"aria-label":y||D,"aria-disabled":!d,"aria-selected":"selected"===a||"selected-hover"===a,$type:a,$disabled:l,$interactive:d,onClick:()=>{null==h||h(f)},onKeyDown:e=>{b&&b(e)},onMouseEnter:()=>{null==p||p(f)},onMouseLeave:()=>{null==m||m(f)},onFocus:()=>{null==g||g(f)},children:[f.date(),u&&C&&e(eh,{$disabled:l})]})})]})},rh=({date:t,calendarDate:r,startDate:n,endDate:o,currentFocus:i,hoverDate:a,focusDate:s,minDate:l,maxDate:c,disabledDates:d,allowDisabledSelection:u,isNewSelection:f,showActiveMonthDaysOnly:h,onSelect:p,onHover:g,onFocus:m,setFocusCell:b,tabIndex:v})=>{const y=hd.isDisabledDay(t,d,l,c),x=!y||u,w=()=>{p(t,!x)},$=()=>{const e=td(a),t=e.isBefore(o,"day"),r=e.isAfter(n,"day");let s,l,c,d;return"start"===i&&o&&t&&(n&&r?(c=a,d=o):(s=a,l=n||o)),"end"===i&&n&&r&&(o&&t?(c=n,d=a):(s=o||n,l=a)),{hoverStart:s,hoverEnd:l,overlapStart:c,overlapEnd:d}},C={date:t,calendarDate:r,disabled:y,interactive:x,currentDateIndicator:!0,onSelect:w,onHover:()=>{g(t.format("YYYY-MM-DD"),!x)},onFocus:()=>{m(t.format("YYYY-MM-DD"))},onKeyDown:e=>{const r=e.key;if("Enter"===r||" "===r)return e.preventDefault(),void(x&&w());(e=>{let r;const n={ArrowLeft:()=>t.subtract(1,"day"),ArrowRight:()=>t.add(1,"day"),ArrowUp:()=>t.subtract(7,"day"),ArrowDown:()=>t.add(7,"day"),Home:()=>t.startOf("week"),End:()=>t.endOf("week"),PageUp:()=>e.shiftKey?t.subtract(1,"year"):t.subtract(1,"month"),PageDown:()=>e.shiftKey?t.add(1,"year"):t.add(1,"month")}[e.key];n&&(e.preventDefault(),r=n(),b(r.format("YYYY-MM-DD")))})(e)},role:"gridcell",focusDate:td(s),tabIndex:v};return e(th,Object.assign({},C,(()=>{const e={};if(r.month()!==t.month())e.labelType=h?"hidden":"unavailable";else if(td().isSame(t,"day")&&!y)e.labelType="current";else if(f){const r="end"===i&&n&&t.isBefore(n),a="start"===i&&o&&t.isAfter(o);(r||a)&&(e.labelType="unavailable")}return e})(),(()=>{const e={},i=t.isSame(n,"day"),a=t.isSame(o,"day");return h&&r.month()!==t.month()?(e.labelType="hidden",e):((n&&i||o&&a)&&(e.labelType="selected",e.circleLeft="selected-outline",e.circleRight="selected-outline"),n&&o&&t.isBetween(n,o,"day","[]")&&(e.labelType="selected",i||(e.bgLeft="selected-outline-subtle"),a||(e.bgRight="selected-outline-subtle")),e)})(),(()=>{if(!a)return{};const e={},r=t.isSame(a,"day"),{hoverStart:i,hoverEnd:s,overlapStart:l,overlapEnd:c}=$();if(r){const r=t.isSame(n,"day"),i=t.isSame(o,"day");r||i?(e.labelType="selected-hover",e.circleLeft="selected-hover-outline",e.circleRight="selected-hover-outline"):(e.labelType="hover",e.circleLeft="hover",e.circleRight="hover")}if(i&&s){if(t.isBetween(i,s,"day","[]")){const r=t.isSame(i,"day"),n=t.isSame(s,"day");r||(e.labelType="hover",e.bgLeft="hover-outline"),n||(e.labelType="hover",e.bgRight="hover-outline")}return e}return l&&c?(t.isBetween(l,c,"day","[]")&&r&&(e.labelType="selected-hover",e.circleLeft="selected-hover",e.circleRight="selected-hover"),e):e})()))};td.extend(id);const nh=({calendarDate:r,currentFocus:n,disabledDates:o,selectedStartDate:i,selectedEndDate:l,onSelect:u,onHover:f,isNewSelection:h,minDate:p,maxDate:m,allowDisabledSelection:b,showActiveMonthDaysOnly:v,setCalendarDate:y})=>{const x=s(null);c((()=>{if(x.current){const e=x.current;x.current=null,k(e)}}),[r]);const w=d((()=>i&&td(i).isSame(r,"month")?td(i):l&&td(l).isSame(r,"month")?td(l):td().isSame(r,"month")?td():p&&r.isSame(td(p),"month")?td(p):td(r).startOf("month")),[i,r,l,p]),$=e=>{const t=td(e);if(hd.isWithinRange(t,p?td(p):void 0,m?td(m):void 0)){if(!t.isSame(r,"month"))return null==y||y(e),void(x.current=e);k(e)}},C=a((()=>hd.generateDays(r)),[r]),S=a((()=>w()),[w]),[D,k]=g(""),[E,_]=g(""),O=(e,t)=>{t&&!b||u(e)},F=(e,t)=>{t&&!b||(_(e),f(e))},T=e=>{_(e),f(e)},I=()=>{_(""),f("")};return t(Nf,{role:"grid","aria-label":"Date grid","data-testid":"calendar-content",onBlur:e=>{e.currentTarget.contains(e.relatedTarget)||(k(""),_(""),f(""))},children:[C[0].map(((t,r)=>e(Hf,{"aria-hidden":!0,children:td(t).format("ddd")},`week-day-${r}`))),C.map(((t,a)=>e(Wf,{role:"row","aria-label":`Week ${a+1}`,onMouseLeave:I,children:t.map(((t,a)=>e(rh,{date:t,calendarDate:r,startDate:i,endDate:l,hoverDate:E,focusDate:D,currentFocus:n,minDate:p,maxDate:m,disabledDates:o,allowDisabledSelection:b,isNewSelection:h,showActiveMonthDaysOnly:v,onSelect:O,onHover:F,onFocus:T,setFocusCell:$,tabIndex:t.isSame(S,"day")?0:-1},`day-${a}`)))},a)))]})},oh=({date:t,calendarDate:r,selectedDate:n,hoverDate:o,focusDate:i,minDate:a,maxDate:s,disabledDates:l,allowDisabledSelection:c,numberOfDays:d=1,onSelect:u,onHover:f,onFocus:h,setFocusCell:p,tabIndex:g})=>{const m=hd.isDisabledDay(t,l,a,s),b=!m||c,{start:v,end:y}=n?hd.getFixedRangeStartEnd(yd.toDayjs(n),d):{start:void 0,end:void 0},{start:x,end:w}=o?hd.getFixedRangeStartEnd(yd.toDayjs(o),d):{start:void 0,end:void 0},$=!!n&&t.isBetween(v,y,"day","[]"),C=!!o&&t.isBetween(x,w,"day","[]"),S=$&&t.isSame(v,"day")||C&&t.isSame(x,"day"),D=$&&t.isSame(y,"day")||C&&t.isSame(w,"day"),k=`From ${td(x).format("D MMMM")} to ${td(w).format("D MMMM")}, ${m?"Unavailable":"Available"}`,E=()=>{u(t,!b)},_=(e,t,r,n)=>{r?e.circleLeft=t:e.bgLeft=t,n?e.circleRight=t:e.bgRight=t},O={date:t,calendarDate:r,disabled:m,interactive:b,currentDateIndicator:!0,onSelect:E,onHover:()=>{f(t.format("YYYY-MM-DD"),!b)},onFocus:()=>{h(t.format("YYYY-MM-DD"))},onKeyDown:e=>{const r=e.key;if("Enter"===r||" "===r)return e.preventDefault(),void(b&&E());(e=>{let r;const n={ArrowLeft:()=>t.subtract(1,"day"),ArrowRight:()=>t.add(1,"day"),ArrowUp:()=>t.subtract(7,"day"),ArrowDown:()=>t.add(7,"day"),Home:()=>t.startOf("week"),End:()=>t.endOf("week"),PageUp:()=>e.shiftKey?t.subtract(1,"year"):t.subtract(1,"month"),PageDown:()=>e.shiftKey?t.add(1,"year"):t.add(1,"month")}[e.key];n&&(e.preventDefault(),r=n(),p(r.format("YYYY-MM-DD")))})(e)},focusDate:td(i),role:"gridcell",tabIndex:g,label:k};return e(th,Object.assign({},O,(()=>{const e={};return $||C?e.labelType="selected":r.month()!==t.month()?e.labelType="unavailable":td().isSame(t,"day")&&!m&&(e.labelType="current"),e})(),(()=>{const e={},r=t.format("YYYY-MM-DD");return C&&_(e,"hover",r===x,r===w),$&&_(e,"selected-outline",r===v,r===y),$&&C&&(_(e,"selected-hover-outline",S,D),r===x&&r!==v&&(e.circleLeft="selected-hover")),e})()))},ih=({calendarDate:r,disabledDates:n,selectedStartDate:o,onSelect:i,onHover:l,minDate:u,maxDate:f,allowDisabledSelection:h,numberOfDays:p,setCalendarDate:m})=>{const b=s(null);c((()=>{if(b.current){const e=b.current;b.current=null,C(e)}}),[r]);const v=d((()=>o&&td(o).isSame(r,"month")?td(o):td().isSame(r,"month")?td():u&&r.isSame(td(u),"month")?td(u):td(r).startOf("month")),[o,r,u]),y=e=>{const t=td(e);if(hd.isWithinRange(t,u?td(u):void 0,f?td(f):void 0)){if(!t.isSame(r,"month"))return null==m||m(e),void(b.current=e);C(e)}},x=a((()=>hd.generateDays(r)),[r]),w=a((()=>v()),[v]),[$,C]=g(""),[S,D]=g(""),k=(e,t)=>{t&&!h||(i(e),e&&!td(e).isSame(e,"month")&&D(""))},E=(e,t)=>{t&&!h||(D(e),l(e))},_=e=>{D(e),l(e)},O=()=>{D(""),l("")};return t(Nf,{role:"grid",onBlur:e=>{e.currentTarget.contains(e.relatedTarget)||(C(""),D(""),l(""))},"data-testid":"calendar-content","aria-label":"Date grid",children:[x[0].map(((t,r)=>e(Hf,{"aria-hidden":!0,children:td(t).format("ddd")},`week-day-${r}`))),x.map(((t,i)=>e(Wf,{role:"row",onMouseLeave:O,children:t.map(((t,i)=>e(oh,{date:t,calendarDate:r,selectedDate:o,hoverDate:S,focusDate:$,minDate:u,maxDate:f,disabledDates:n,allowDisabledSelection:h,onSelect:k,onHover:E,numberOfDays:p,onFocus:_,setFocusCell:y,tabIndex:td(t).isSame(w,"day")?0:-1},`day-${i}`)))},i)))]})},ah=_.div`
    width: 100%;
    background: ${Qi.bg};
`,sh=({date:t,calendarDate:r,selectedDate:n,hoverDate:o,focusDate:i,minDate:a,maxDate:s,disabledDates:l,allowDisabledSelection:c,showActiveMonthDaysOnly:d,onSelect:u,onHover:f,onFocus:h,setFocusCell:p,tabIndex:g})=>{const m=hd.isDisabledDay(t,l,a,s),b=!m||c,v=()=>{u(t,!b)},y={date:t,calendarDate:r,disabled:m,interactive:b,currentDateIndicator:!0,onSelect:v,onHover:()=>{f(t.format("YYYY-MM-DD"),!b)},onFocus:()=>{h(t.format("YYYY-MM-DD"))},onKeyDown:e=>{const r=e.key;if("Enter"===r||" "===r)return e.preventDefault(),void(b&&v());(e=>{let r;const n={ArrowLeft:()=>t.subtract(1,"day"),ArrowRight:()=>t.add(1,"day"),ArrowUp:()=>t.subtract(7,"day"),ArrowDown:()=>t.add(7,"day"),Home:()=>t.startOf("week"),End:()=>t.endOf("week"),PageUp:()=>e.shiftKey?t.subtract(1,"year"):t.subtract(1,"month"),PageDown:()=>e.shiftKey?t.add(1,"year"):t.add(1,"month")}[e.key];n&&(e.preventDefault(),r=n(),p(r.format("YYYY-MM-DD")))})(e)},role:"gridcell",focusDate:td(i),tabIndex:g};return e(th,Object.assign({},y,(()=>{const e={};r.month()!==t.month()?e.labelType=d?"hidden":"unavailable":td().isSame(t,"day")&&!m&&(e.labelType="current");const i=t.isSame(n,"day"),a=t.isSame(o,"day");return i&&a?(e.labelType="selected-hover",e.circleLeft="selected-hover-outline",e.circleRight="selected-hover-outline"):i?(e.labelType="selected",e.circleLeft="selected-outline",e.circleRight="selected-outline"):a&&(e.labelType="hover",e.circleLeft="hover-subtle",e.circleRight="hover-subtle"),e})()))};td.extend(id);const lh=({calendarDate:r,disabledDates:n,selectedDate:o,onSelect:i,onHover:l,minDate:u,maxDate:f,allowDisabledSelection:h,showActiveMonthDaysOnly:p,setCalendarDate:m})=>{const b=s(null);c((()=>{if(b.current){const e=b.current;b.current=null,C(e)}}),[r]);const v=d((()=>o&&td(o).isSame(r,"month")?td(o):td().isSame(r,"month")?td():u&&r.isSame(td(u),"month")?td(u):td(r).startOf("month")),[o,r,u]),y=e=>{const t=td(e);if(hd.isWithinRange(t,u?td(u):void 0,f?td(f):void 0)){if(!t.isSame(r,"month"))return null==m||m(e),void(b.current=e);C(e)}},x=a((()=>hd.generateDays(r)),[r]),w=a((()=>v()),[v]),[$,C]=g(""),[S,D]=g(""),k=(e,t)=>{t&&!h||i(e)},E=(e,t)=>{t&&!h||(D(e),l(e))},_=e=>{D(e),l(e)},O=()=>{D(""),l("")};return t(Nf,{role:"grid",onBlur:e=>{e.currentTarget.contains(e.relatedTarget)||(C(""),D(""),l(""))},"data-testid":"calendar-content","aria-label":"Date grid",children:[x[0].map(((t,r)=>e(Hf,{"aria-hidden":!0,children:td(t).format("ddd")},`week-day-${r}`))),x.map(((t,i)=>e(Wf,{role:"row","aria-label":`Week ${i+1}`,onMouseLeave:O,children:t.map(((t,i)=>e(sh,{date:t,calendarDate:r,selectedDate:o,hoverDate:S,focusDate:$,minDate:u,maxDate:f,disabledDates:n,allowDisabledSelection:h,showActiveMonthDaysOnly:p,onSelect:k,onHover:E,onFocus:_,setFocusCell:y,tabIndex:td(t).isSame(w,"day")?0:-1},`day-${i}`)))},i)))]})},ch=({date:t,calendarDate:r,selectedDate:n,hoverDate:o,focusDate:i,minDate:a,maxDate:s,disabledDates:l,allowDisabledSelection:c,onSelect:d,onHover:u,onFocus:f,setFocusCell:h,tabIndex:p})=>{const g=hd.isDisabledDay(t,l,a,s),m=!g||c,{start:b,end:v}=hd.getWeekStartEnd(yd.toDayjs(n)),{start:y,end:x}=hd.getWeekStartEnd(yd.toDayjs(o)),{start:w,end:$}=hd.getWeekStartEnd(t),C=t.isSame(w,"day"),S=n&&t.isBetween(b,v,"day","[]"),D=o&&t.isBetween(y,x,"day","[]"),k=S&&t.isSame(b)||D&&t.isSame(y),E=S&&t.isSame(v)||D&&t.isSame(x),_=`From ${td(w).format("D MMMM")} to ${td($).format("D MMMM")}, ${g?"Unavailable":"Available"}`,O=()=>{d(t,!m)},F={date:t,calendarDate:r,disabled:g,interactive:m,currentDateIndicator:!0,onSelect:O,onHover:()=>{u(t.format("YYYY-MM-DD"),!m)},onFocus:()=>{f(t.format("YYYY-MM-DD"))},onKeyDown:e=>{const r=e.key;if("Enter"===r||" "===r)return e.preventDefault(),void(m&&O());(e=>{let r;const n={ArrowUp:()=>t.subtract(7,"day"),ArrowDown:()=>t.add(7,"day"),Home:()=>t.startOf("week"),End:()=>t.endOf("week"),PageUp:()=>e.shiftKey?t.subtract(1,"year"):t.subtract(1,"month"),PageDown:()=>e.shiftKey?t.add(1,"year"):t.add(1,"month")}[e.key];n&&(e.preventDefault(),r=n(),h(r.format("YYYY-MM-DD")))})(e)},focusDate:td(i),tabIndex:p,label:_,ariaHidden:!C||void 0,role:C?"button":"none"};return e(th,Object.assign({},F,(()=>{const e={};return r.month()!==t.month()?e.labelType="unavailable":td().isSame(t,"day")&&!g&&(e.labelType="current"),e})(),(()=>{const e={};let t,r;return S&&D?(t="selected-hover-outline",r="selected-hover"):S?(t="selected-outline",r="selected"):D&&(t="hover",r="hover"),t&&(e.labelType=r,k?e.circleLeft=t:e.bgLeft=t,E?e.circleRight=t:e.bgRight=t),e})()))},dh=({calendarDate:r,disabledDates:n,selectedStartDate:o,onSelect:i,onHover:l,minDate:u,maxDate:f,allowDisabledSelection:h,setCalendarDate:p})=>{const m=s(null);c((()=>{if(m.current){const e=m.current;m.current=null,$(e)}}),[r]);const b=d((()=>o&&td(o).isSame(r,"month")?td(o):td().isSame(r,"month")?td().startOf("week"):u&&r.isSame(td(u),"month")?td(u):td(r).startOf("month")),[o,r,u]),v=e=>{const t=td(e);if(hd.isWithinRange(t,u?td(u):void 0,f?td(f):void 0)){if(!t.isSame(r,"month"))return null==p||p(e),void(m.current=e);$(e)}},y=a((()=>hd.generateDays(r)),[r]),x=a((()=>b()),[b]),[w,$]=g(""),[C,S]=g(""),D=(e,t)=>{if(t&&!h)return;const r=e.startOf("week");i(r),e&&!td(e).isSame(r,"month")&&S("")},k=(e,t)=>{t&&!h||(S(e),l(e))},E=e=>{S(e),l(e)},_=()=>{S(""),l("")};return t(Nf,{"data-testid":"calendar-content",onBlur:e=>{e.currentTarget.contains(e.relatedTarget)||($(""),S(""),l(""))},"aria-label":"Week selection",children:[y[0].map(((t,r)=>e(Hf,{"aria-hidden":!0,children:td(t).format("ddd")},`week-day-${r}`))),y.map(((t,i)=>e(Wf,{onMouseLeave:_,role:"group",children:t.map(((t,i)=>e(ch,{date:t,calendarDate:r,selectedDate:o,hoverDate:C,focusDate:w,minDate:u,maxDate:f,disabledDates:n,allowDisabledSelection:h,onSelect:D,onHover:k,onFocus:E,setFocusCell:v,tabIndex:td(t).isSame(x,"day")?0:-1},`day-${i}`)))},i)))]})},uh=o.forwardRef((({disabledDates:t,onYearMonthDisplayChange:r,onSelect:n,onHover:o,onDismiss:i,value:a,endValue:l,currentFocus:c,withButton:d,variant:u,minDate:h,maxDate:p,allowDisabledSelection:g,selectWithinRange:m=!0,initialCalendarDate:b,numberOfDays:v,showActiveMonthDaysOnly:y=!1,isFocusable:x=!1},w)=>{const $=s(null),C=s(void 0),S=s(null);f(w,(()=>({reset(){var e;null===(e=$.current)||void 0===e||e.resetView()},setCalendarDate(e){var t;null===(t=$.current)||void 0===t||t.setCalendarDate(e)},contains(e){var t;return(null===(t=S.current)||void 0===t?void 0:t.contains(e))||!1}})));const D=e=>{var t;const r=e.format("YYYY-MM-DD");null===(t=$.current)||void 0===t||t.setCalendarDate(r),E(r)},k=e=>{_(e)},E=e=>{n&&n(e)},_=e=>{o&&o(e)},O=e=>{if(r){const t={month:e.month()+1,year:e.year()};r(t)}};return e(ah,{ref:S,children:e(Lf,{ref:$,withButton:d,doneButtonDisabled:(()=>{if(!d)return;let e=!0;switch(u){case"single":e=!1;break;case"range":case"fixed-range":e=!!a!=!!l;break;case"week":e=!a&&!l}return e})(),onDismiss:i,minDate:h,maxDate:p,selectWithinRange:m,currentFocus:c,selectedStartDate:a,selectedEndDate:l,allowDisabledSelection:g,onCalendarDateChange:e=>{var t;C.current&&C.current.isSame(e,"month")||(null===(t=$.current)||void 0===t||t.setCalendarDate(e.format("YYYY-MM-DD")),O(e)),C.current=e},initialCalendarDate:b,isFocusable:x,children:({calendarDate:r})=>(r=>{var n;const o=null===(n=$.current)||void 0===n?void 0:n.setCalendarDate;switch(u){case"week":return e(dh,{calendarDate:r,disabledDates:t,selectedStartDate:a,minDate:h,maxDate:p,allowDisabledSelection:g,onSelect:D,onHover:k,setCalendarDate:o});case"fixed-range":return e(ih,{calendarDate:r,disabledDates:t,selectedStartDate:a,minDate:h,maxDate:p,allowDisabledSelection:g,onSelect:D,onHover:k,numberOfDays:v,setCalendarDate:o});case"single":return e(lh,{calendarDate:r,disabledDates:t,selectedDate:a,minDate:h,maxDate:p,allowDisabledSelection:g,showActiveMonthDaysOnly:y,onSelect:D,onHover:k,setCalendarDate:o});default:return e(nh,{calendarDate:r,currentFocus:c,disabledDates:t,selectedStartDate:a,selectedEndDate:l,minDate:h,maxDate:p,isNewSelection:m,allowDisabledSelection:g,showActiveMonthDaysOnly:y,onSelect:D,onHover:k,setCalendarDate:o})}})(r)})})})),fh=o.forwardRef(((t,r)=>{const{elementWidth:n,setFloatingRef:o,getFloatingProps:i,styles:a}=Nu();return e(Wu,Object.assign({$width:n,"data-testid":"calendar-dropdown",ref:o,style:a},i(),{children:e(uh,Object.assign({ref:r},t))}))})),hh=O`
    outline-offset: -1px;
    outline: ${Ji["width-020"]} ${Ji.solid} ${Qi["border-focus"]};
`,ph=O`
    outline-color: ${Qi["border-focus"]};
`,gh=O`
    outline-color: ${Qi["border-disabled"]};
`,mh=O`
    outline-color: ${Qi["border-error-focus"]};
`,bh=_.div`
    border: ${Ji["width-010"]} ${Ji.solid} ${Qi.border};
    border-radius: ${ta.sm};
    background: ${Qi.bg};

    &:focus-within {
        ${hh}
    }
    ${e=>e.$focused&&hh}

    ${e=>e.$readOnly?O`
                border-color: transparent;
                padding: 0;
                background: transparent !important;

                &:focus-within {
                    ${ph}
                }
                ${e.$focused&&ph}
            `:e.$disabled?O`
                background: ${Qi["bg-disabled"]};
                cursor: not-allowed;

                &:focus-within {
                    ${gh}
                }
                ${e.$focused&&gh}
            `:e.$error?O`
                border-color: ${Qi["border-error"]};

                &:focus-within {
                    ${mh}
                }
                ${e.$focused&&mh}
            `:void 0}
`,vh=_(bh)`
    display: flex;
    align-items: center;
    position: relative;
    height: max-content;
    width: 100%;
    padding: 0 ${ea["spacing-16"]};
    flex-direction: ${e=>"right"===e.$position?"row-reverse":"row"};
`,yh=_.input`
    ${e=>"small"===e.$variant?Zi["body-md-regular"]:Zi["body-baseline-regular"]}
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
`,xh=_.button`
    background: transparent;
    border: none;
    outline: none;

    &:focus,
    &:active {
        outline: none;
    }

    &:focus-visible {
        outline: ${Ji["width-010"]} ${Ji.solid}
            ${Qi["border-focus"]};
        border-radius: ${ta.sm};
    }
`,wh=_.div`
    display: flex;
    align-items: center;
    position: relative;

    flex: 1;
`,$h=_.div`
    display: flex;
    align-items: center;

    ${e=>{if(e.$hover)return O`
                ${Ch}, ${Eh} {
                    color: ${Qi["text-subtler"]};
                }
            `}}
`,Ch=_(yh)`
    background: transparent;
    text-align: center;
`,Sh=_(Ch)`
    width: 2rem;
    margin-right: ${ea["spacing-4"]};
`,Dh=_(Ch)`
    width: 2.5rem;
`,kh=_(Ch)`
    width: 3rem;
    margin-left: ${ea["spacing-4"]};
`,Eh=_.span`
    ${Zi["body-baseline-regular"]}
    ${e=>{if(e.$inactive)return O`
                color: ${Qi.text};
            `}}
`,_h=_.div`
    ${Zi["body-baseline-regular"]}
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
`;td.extend(nd);const Oh=o.forwardRef((({disabled:r,readOnly:n,names:o,value:i,focused:a,hoverValue:l,placeholder:d,label:u,onChange:h,onFocus:p,onBlur:m,hideInputKeyboard:b,inputLabels:v=["Date","Month","Year"]},y)=>{const x=b?"none":"numeric",[w,$,C]=Fd(""),[S,D,k]=Fd(""),[E,_,O]=Fd(""),[F,T]=g("none"),[I,M]=g(!1),A=s(null),j=s(null),B=s(null),R=s(null),[z,P,L]=U(l);c((()=>{var e;const[t="",r="",n=""]=U(i);$(t),D(r),_(n),t||r||n||!A.current||!A.current.contains(document.activeElement)||null===(e=j.current)||void 0===e||e.focus()}),[i]),c((()=>{var e;a||T("none"),a&&(M(!0),A.current&&!A.current.contains(document.activeElement)&&(null===(e=j.current)||void 0===e||e.focus()))}),[a]),f(y,(()=>({ref:A,resetPlaceholder(){M(!1)},resetInput(){const[e="",t="",r=""]=U(i);$(e),D(t),_(r)},focusYearRef(){var e;null===(e=R.current)||void 0===e||e.focus()}})),[$,D,_,i]);const N=e=>{var t;e.preventDefault(),null===(t=j.current)||void 0===t||t.focus()},H=e=>{e.target.select();const t=e.target.name;T(t)},W=e=>{const[t,r,n]=o,i={[t]:C.current,[r]:k.current,[n]:O.current},a=e.target.name,s=i[a],l=a!==n?Sd.padValue(s,!0):s;switch(a){case t:i[t]=l,$(l);break;case r:i[r]=l,D(l)}const c=`${i[n]}-${i[r]}-${i[t]}`,d=td(c,"YYYY-MM-DD",!0).isValid(),u=!i[t]&&!i[r]&&!i[n];d&&s!==l&&h(c),A.current&&!A.current.contains(e.relatedTarget)&&(T("none"),null==m||m(u||d))},Y=e=>{var t,r;if(l)return;const n=e.target.name,i=e.target.value.replace(/[^0-9]/g,""),a={day:w,month:S,year:E};switch(n){case o[0]:a.day=i,$(i),2===i.length&&(null===(t=B.current)||void 0===t||t.focus());break;case o[1]:a.month=i,D(i),2===i.length&&(null===(r=R.current)||void 0===r||r.focus());break;case o[2]:a.year=i,_(i)}if(!a.day&&!a.month&&!a.year)return void h("");const s=`${a.year}-${a.month}-${a.day}`;td(s,"YYYY-MM-DD",!0).isValid()&&h(s)},V=e=>{var t,r;"Backspace"!==e.code&&"Backspace"!==e.key||(F===o[1]&&0===S.length&&(null===(t=j.current)||void 0===t||t.focus()),F===o[2]&&0===E.length&&(null===(r=B.current)||void 0===r||r.focus()))};function U(e){if(e){const t=td(new Date(e));return t.isValid()?[Sd.padValue(t.date().toString()),Sd.padValue((t.month()+1).toString()),t.year().toString()]:[void 0,void 0,void 0]}return[void 0,void 0,void 0]}return t(wh,{role:"group","aria-label":u,onClick:()=>{var e;r||n||(M(!0),A.current&&!A.current.contains(document.activeElement)&&(null===(e=j.current)||void 0===e||e.focus()))},onFocus:e=>{r||(M(!0),a||null==p||p(e))},children:[t($h,{ref:A,$hover:!!l,children:[e(Sh,{ref:j,name:o[0],maxLength:2,value:null!=z?z:w,onFocus:H,onBlur:W,onChange:Y,type:"text",inputMode:x,pattern:"[0-9]{2}","data-testid":`${o[0]}-input`,"aria-label":v[0],disabled:r,readOnly:n,tabIndex:n?-1:0,autoComplete:"off",placeholder:F!==o[0]||n?"DD":""}),e(Eh,{$inactive:0===w.length,children:"/"}),e(Dh,{ref:B,name:o[1],maxLength:2,value:null!=P?P:S,onFocus:H,onBlur:W,onChange:Y,onKeyDown:V,type:"text",inputMode:x,pattern:"[0-9]{2}","data-testid":`${o[1]}-input`,"aria-label":v[1],disabled:r,readOnly:n,tabIndex:n?-1:0,autoComplete:"off",placeholder:F!==o[1]||n?"MM":""}),e(Eh,{$inactive:0===S.length,children:"/"}),e(kh,{ref:R,name:o[2],maxLength:4,value:null!=L?L:E,onFocus:H,onBlur:W,onChange:Y,onKeyDown:V,type:"text",inputMode:x,pattern:"[0-9]{4}","data-testid":`${o[2]}-input`,"aria-label":v[2],disabled:r,readOnly:n,tabIndex:n?-1:0,autoComplete:"off",placeholder:F!==o[2]||n?"YYYY":""})]}),(()=>{if(!i&&!n&&d)return e(_h,{$hide:I,$disabled:r,onMouseDown:N,children:d})})()]})})),Fh=_(vh)`
    height: 3rem;
`,Th=t=>{var{minDate:r,maxDate:n,disabled:o,disabledDates:i,error:a,hideInputKeyboard:l,value:d,onChange:u,onFocus:f,onBlur:h,onYearMonthDisplayChange:p,withButton:m=!0,readOnly:b,id:v,allowDisabledSelection:y,zIndex:x,dropdownRootNode:w}=t,$=ct(t,["minDate","maxDate","disabled","disabledDates","error","hideInputKeyboard","value","onChange","onFocus","onBlur","onYearMonthDisplayChange","withButton","readOnly","id","allowDisabledSelection","zIndex","dropdownRootNode"]);const[C,S]=g(xd.sanitizeInput(d)),[D,k]=g(xd.sanitizeInput(d)),[E,_]=g(void 0),[O,F]=g(!1),[T,I]=g(!1),M=s(null),A=s(null),j=s(null);c((()=>{const e=xd.sanitizeInput(d);S(e),k(e)}),[d]);const B=e=>{!y&&xd.isDateDisabled(e,{disabledDates:i,minDate:r,maxDate:n})||(k(e),m||(H(e),S(e),e&&F(!1)))},R=e=>{var t;k(e),m||(H(e),S(e),e&&(null===(t=A.current)||void 0===t||t.focusYearRef(),F(!1)),E&&_(void 0))},z=()=>{b||o||(F(!0),T||(I(!0),f&&f()))},P=e=>{var t,r,n;const o=e.relatedTarget,i=j.current&&j.current.contains(o),a=M.current&&M.current.contains(o),s=(null===(t=null==o?void 0:o.matches)||void 0===t?void 0:t.call(o,"[data-floating-ui-focusable]"))||(null===(r=null==o?void 0:o.matches)||void 0===r?void 0:r.call(o,"[data-floating-ui-focus-guard]"));(T&&!O&&!a&&!s||O&&!a&&!i&&!s)&&(null===(n=A.current)||void 0===n||n.resetInput(),k(C),I(!1),F(!1),W())},L=e=>{_(e)},N=e=>{var t,r;switch(e){case"reset":k(C);break;case"confirmed":S(D),H(D)}td(D,"YYYY-MM-DD",!0).isValid()?null===(t=A.current)||void 0===t||t.focusYearRef():null===(r=M.current)||void 0===r||r.focus(),F(!1)},H=e=>{u&&u(e)},W=()=>{h&&h()};return e(Hu,{enabled:!b&&!o,isOpen:O,renderElement:()=>e(Fh,Object.assign({role:"group",tabIndex:0,ref:M,onBlur:P,onFocus:z,$disabled:o,$readOnly:b,$focused:T,$error:a,id:v,"data-testid":$["data-testid"],"aria-disabled":o},$,{children:e(Oh,{ref:A,disabled:o,onChange:B,readOnly:b,focused:O,names:["start-day","start-month","start-year"],value:D,hoverValue:E,hideInputKeyboard:l})})),renderDropdown:({elementWidth:t})=>e(fh,{variant:"single",ref:j,initialCalendarDate:D,withButton:m,value:D,disabledDates:i,minDate:r,maxDate:n,allowDisabledSelection:y,onHover:L,onSelect:R,onDismiss:N,onYearMonthDisplayChange:p,width:t,isFocusable:!b&&!o}),onClose:()=>{var e;null===(e=A.current)||void 0===e||e.resetInput(),k(C),F(!1),I(!1),W()},onDismiss:()=>{var e,t;null===(e=A.current)||void 0===e||e.resetInput(),null===(t=M.current)||void 0===t||t.focus(),k(C),F(!1)},customZIndex:x,offset:16,rootNode:w})},Ih=_.div`
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
                        100% - ${Zi.Spec["body-size-baseline"]} -
                            ${ea["spacing-16"]}
                    );
                    flex: unset;
                }

                [data-id="range-container-elem2-container"] {
                    margin-top: ${ea["spacing-8"]};
                }
            `}}
`,Mh=_.div`
    width: 100%; // Force next flex item to break to next line
`,Ah=_.div`
    display: flex;
    flex: 1;
    align-items: center;
`,jh=_(ae)`
    color: ${Qi.icon};
    width: ${Zi.Spec["body-size-baseline"]};
    height: ${Zi.Spec["body-size-baseline"]};
    flex-shrink: 0;
    margin: 0 ${ea["spacing-8"]};
    align-self: center;
`,Bh=_.div`
    position: absolute;
    background: ${e=>e.$error?Qi["border-error-focus-strong"]:Qi["border-focus-strong"]};
    height: 2px;
    // half - half padding - half icon width
    width: calc(
        50% - ${ea["spacing-8"]} - (${Zi.Spec["body-size-baseline"]} / 2)
    );
    transition: left ${Xi["duration-350"]} ${Xi["ease-standard"]},
        opacity ${Xi["duration-350"]} ${Xi["ease-standard"]};
    left: 0;
    bottom: 0;

    ${e=>{switch(e.$position){case"start":return O`
                    opacity: 1;
                `;case"end":return O`
                    left: calc(50% + ${ea["spacing-16"]});
                    opacity: 1;
                `;case"none":return O`
                    opacity: 0;
                `}}}

    ${e=>{if(e.$wrap)return O`
                display: none;
            `}}
`,Rh=({children:r,currentActive:n,error:o,className:i,wrap:a})=>{const[s,l]=r;return t(Ih,{className:i,$wrap:a,children:[e(Ah,{"data-id":"range-container-elem1-container",children:s}),e(jh,{}),a&&e(Mh,{}),e(Ah,{"data-id":"range-container-elem2-container",children:l}),e(Bh,{"data-id":"range-container-indicator",$position:n,$error:o,$wrap:a})]})},zh=(e,t,r)=>{const n=[];e&&n.push(`[${e}]`),n.push(t,r),console.log(...n)},Ph=_(vh)`
    ${e=>e.$wrap&&O`
            padding: ${ea["spacing-12"]} ${ea["spacing-16"]};
        `}
`,Lh=_.div`
    display: flex;
    align-items: center;
    height: calc(3rem - 2px); // exclude top and bottom borders
    width: 100%;

    ${e=>e.$wrap&&O`
            height: fit-content;
        `}
`,Nh={initialStart:"",initialEnd:"",selectedStart:"",selectedEnd:"",currentFocus:"none",calendarOpen:!1,isStartDirty:!1,isEndDirty:!1,focused:!1},Hh=r=>{var{minDate:n,maxDate:o,disabled:i,disabledDates:a,error:u,hideInputKeyboard:f,value:h,valueEnd:p,onChange:m,onFocus:b,onBlur:v,onYearMonthDisplayChange:y,withButton:x=!0,variant:w="range",numberOfDays:$=7,readOnly:C,id:S,allowDisabledSelection:D,zIndex:k,dropdownRootNode:E}=r,_=ct(r,["minDate","maxDate","disabled","disabledDates","error","hideInputKeyboard","value","valueEnd","onChange","onFocus","onBlur","onYearMonthDisplayChange","withButton","variant","numberOfDays","readOnly","id","allowDisabledSelection","zIndex","dropdownRootNode"]);const[O,F]=g(),[T,I]=g(void 0),M="week"===w,A="fixed-range"===w,[j,B]=g(!1),[R,z]=g(!1),[{selectedStart:P,selectedEnd:L,currentFocus:N,calendarOpen:H,isStartDirty:W,isEndDirty:Y,focused:V},U]=(({initialState:e,reducers:t,name:r,debug:n})=>{const[o,i]=l(((e,r)=>t[r.type]?t[r.type](e,r.payload):e),e);return[o,Object.fromEntries(Object.keys(t).map((e=>[e,t=>{n&&zh(r,e,t),i({type:e,payload:t})}])))]})({name:"date-range-input",initialState:Nh,reducers:{blur:e=>Object.assign(Object.assign({},e),{selectedStart:e.initialStart,selectedEnd:e.initialEnd,currentFocus:"none",calendarOpen:!1,isStartDirty:!1,isEndDirty:!1,focused:!1}),dismiss:e=>Object.assign(Object.assign({},e),{selectedStart:e.initialStart,selectedEnd:e.initialEnd,currentFocus:"none",calendarOpen:!1,isStartDirty:!1,isEndDirty:!1}),changeStart:(e,t)=>Object.assign(Object.assign({},e),{selectedStart:t,isStartDirty:!0}),changeEnd:(e,t)=>Object.assign(Object.assign({},e),{selectedEnd:t,isEndDirty:!0}),reselectStart:e=>Object.assign(Object.assign({},e),{selectedStart:"",currentFocus:"start"}),reselectEnd:e=>Object.assign(Object.assign({},e),{selectedEnd:"",currentFocus:"end"}),focus:(e,t)=>Object.assign(Object.assign({},e),{currentFocus:M?"none":A?"start":t,calendarOpen:!C,focused:!0}),cancel:e=>Object.assign(Object.assign({},e),{selectedStart:e.initialStart,selectedEnd:e.initialEnd,currentFocus:"none",calendarOpen:!1}),done:(e,t)=>Object.assign(Object.assign({},e),{selectedStart:t.start,selectedEnd:t.end,initialStart:t.start,initialEnd:t.end,currentFocus:"none",calendarOpen:!1,isStartDirty:!1,isEndDirty:!1}),resetStart:e=>Object.assign(Object.assign({},e),{selectedStart:e.initialStart}),resetEnd:e=>Object.assign(Object.assign({},e),{selectedEnd:e.initialEnd}),resetRange:(e,t)=>Object.assign(Object.assign({},e),{initialStart:t.start,selectedStart:t.start,initialEnd:t.end,selectedEnd:t.end})}}),K=s(!1),q=s(null),G=s(null),Q=s(null),Z=s(null),X=(({maxWidth:e,targetRef:t})=>{const[r,n]=g(!1);return qc({targetRef:t,refreshMode:"throttle",refreshRate:300,handleHeight:!1,onResize:d((t=>{n(t<=e)}),[e])}),r})({maxWidth:320,targetRef:q});c((()=>{U.resetRange({start:xd.sanitizeInput(h),end:xd.sanitizeInput(p)})}),[h,p]),c((()=>{"start"===N?F(P):"end"===N&&L&&F(L)}),[N]);const J=e=>{var t,r,n;"Enter"!==e.code||x||(P&&L?(U.done({start:P,end:L}),null==m||m(P,L)):(U.dismiss(),null===(t=q.current)||void 0===t||t.focus(),null===(r=Q.current)||void 0===r||r.resetPlaceholder(),null===(n=Z.current)||void 0===n||n.resetPlaceholder()))},ee=e=>{var t;if(pe(e))return void(K.current=!0);if(U.changeStart(e),e&&(null===(t=G.current)||void 0===t||t.setCalendarDate(e)),K.current=!1,!e)return void(x||L||!Y||(U.resetRange({start:"",end:""}),null==m||m("","")));if(!L)return void U.focus("end");if(td(e).isAfter(L,"day"))U.reselectEnd();else{if(Y)return x?void 0:(U.done({start:e,end:L}),void(null==m||m(e,L)));U.focus("end")}},te=e=>{var t,r,n;if(pe(e))return void(K.current=!0);if(td(e).isBefore(P,"day"))return U.changeStart(e),null===(t=G.current)||void 0===t||t.setCalendarDate(e),void U.reselectEnd();if(U.changeEnd(e),e&&(null===(r=G.current)||void 0===r||r.setCalendarDate(e)),e){if(P)return x?void 0:(null===(n=Z.current)||void 0===n||n.focusYearRef(),U.done({start:P,end:e}),void(null==m||m(P,e)));U.focus("start")}else x||P||!W||(U.resetRange({start:"",end:""}),null==m||m("",""))},re=e=>{var t,r;if(pe(e))return void(K.current=!0);if(U.changeStart(e),null===(t=G.current)||void 0===t||t.setCalendarDate(e),K.current=!1,!e)return void(x?U.changeEnd(""):(U.resetRange({start:"",end:""}),null==m||m("","")));const n=td(e).format("YYYY-MM-DD"),o=td(n).add($-1,"day").format("YYYY-MM-DD");return U.changeStart(n),U.changeEnd(o),K.current=!1,x?void 0:(U.done({start:n,end:o}),null===(r=Q.current)||void 0===r||r.focusYearRef(),void(null==m||m(n,o)))},ne=()=>{(M||A)&&z(!0),M&&B(!0),C||i||V||(U.focus("start"),null==b||b())},oe=e=>{var t,r,n,o;const i=e.relatedTarget,a=G.current&&G.current.contains(i),s=q.current&&q.current.contains(i),l=(null===(t=null==i?void 0:i.matches)||void 0===t?void 0:t.call(i,"[data-floating-ui-focusable]"))||(null===(r=null==i?void 0:i.matches)||void 0===r?void 0:r.call(i,"[data-floating-ui-focus-guard]"));(V&&!H&&!s&&!l||H&&!s&&!a&&!l)&&(U.blur(),z(!1),B(!1),null===(n=Q.current)||void 0===n||n.resetPlaceholder(),null===(o=Z.current)||void 0===o||o.resetPlaceholder(),he())},ie=e=>t=>{t.stopPropagation(),C||(U.focus(e),ae(),se(),V||null==b||b())},ae=()=>{if(M){const e=yd.toDayjs(P).startOf("week").format("YYYY-MM-DD");B(!0),z(!0),F(e)}},se=()=>{A&&(z(!0),F(P))},le=e=>{var t;e&&!K.current||(U.resetStart(),null===(t=Q.current)||void 0===t||t.resetInput())},ce=e=>{var t;e&&!K.current||(U.resetEnd(),null===(t=Z.current)||void 0===t||t.resetInput())},de=e=>{switch(w){case"week":(e=>{var t;const r=td(e).startOf("week").format("YYYY-MM-DD"),n=td(e).endOf("week").format("YYYY-MM-DD");if(U.changeStart(r),U.changeEnd(n),K.current=!1,!x)null===(t=Z.current)||void 0===t||t.focusYearRef(),U.done({start:r,end:n}),null==m||m(r,n)})(e);break;case"fixed-range":re(e);break;default:"start"===N?ee(e):"end"===N&&te(e)}},ue=e=>{var t,r,n;switch(null===(t=q.current)||void 0===t||t.focus(),e){case"reset":U.cancel();break;case"confirmed":if(U.done({start:P,end:L}),null==m||m(P,L),M)break;ge(P,L)&&("range"===w?null===(r=Z.current)||void 0===r||r.focusYearRef():null===(n=Q.current)||void 0===n||n.focusYearRef())}},fe=e=>{I(e)},he=()=>{v&&v()},pe=e=>!D&&e&&xd.isDateDisabled(e,{disabledDates:a,minDate:n,maxDate:o}),ge=(e,t)=>!(!e||!t)&&td(e).isBefore(t,"day"),me=e=>{let t={start:void 0,end:void 0};switch(w){case"range":t={start:"start"===N?T:void 0,end:"end"===N?T:void 0};break;case"week":if(!T)return;t={start:td(T).startOf("week").format("YYYY-MM-DD"),end:td(T).endOf("week").format("YYYY-MM-DD")};break;case"fixed-range":if(!T)return;t={start:td(T).format("YYYY-MM-DD"),end:td(T).add($-1,"day").format("YYYY-MM-DD")}}return t[e]};return e(Hu,{enabled:!C&&!i,isOpen:H,onClose:()=>{var e,t;U.blur(),B(!1),z(!1),null===(e=Q.current)||void 0===e||e.resetPlaceholder(),null===(t=Z.current)||void 0===t||t.resetPlaceholder(),he()},onDismiss:()=>{var e,t,r;U.dismiss(),null===(e=q.current)||void 0===e||e.focus(),null===(t=Q.current)||void 0===t||t.resetPlaceholder(),null===(r=Z.current)||void 0===r||r.resetPlaceholder()},renderElement:()=>e(Ph,Object.assign({role:"group",ref:q,tabIndex:0,onFocus:ne,onBlur:oe,$focused:V,$disabled:i,$readOnly:C,$error:u,$wrap:X,id:S,"data-testid":_["data-testid"],"aria-disabled":i,onKeyDown:J},_,{children:t(Rh,{currentActive:N,wrap:X,error:u,children:[e(Lh,{$wrap:X,children:e(Oh,{ref:Q,placeholder:"From",names:["start-day","start-month","start-year"],inputLabels:["Start Date","Start Month","Start Year"],value:P,disabled:i,readOnly:j||C,focused:"start"===N,hoverValue:me("start"),onChange:A?re:ee,onFocus:ie("start"),onBlur:le,hideInputKeyboard:f})}),e(Lh,{$wrap:X,children:e(Oh,{ref:Z,placeholder:"To",names:["end-day","end-month","end-year"],inputLabels:["End Date","End Month","End Year"],value:L,disabled:i,readOnly:R||C,focused:"end"===N,hoverValue:me("end"),onChange:te,onFocus:ie("end"),onBlur:ce,hideInputKeyboard:f})})]})})),renderDropdown:({elementWidth:t})=>e(fh,{ref:G,variant:w,initialCalendarDate:O,withButton:x,value:P,endValue:L,selectWithinRange:W||Y,currentFocus:N,disabledDates:a,minDate:n,maxDate:o,allowDisabledSelection:D,onSelect:de,onDismiss:ue,onHover:fe,onYearMonthDisplayChange:y,numberOfDays:$,width:t,isFocusable:!C&&!i}),customZIndex:k,offset:16,rootNode:E})},Wh=_(ff)`
    flex-direction: ${e=>"right"===e.$buttonIconPosition?"row-reverse":"row"};
    gap: 0.5rem;

    svg {
        flex-shrink: 0;
        height: 1em;
        width: 1em;
    }
`,Yh=(r,n)=>{const{children:i,disabled:a=!1,styleType:s="default",danger:l=!1,icon:c,iconPosition:d="left",loading:u=!1,focusableWhenDisabled:f=!1,onClick:h}=r,p=ct(r,["children","disabled","styleType","danger","icon","iconPosition","loading","focusableWhenDisabled","onClick"]),g={$buttonIconPosition:d,$buttonStyle:a?"disabled":s,$buttonSizeStyle:"default",$buttonIsDanger:l};return t(Wh,Object.assign({ref:n,"data-testid":p["data-testid"]||"button-with-icon",disabled:a&&!f,"aria-disabled":a,"aria-busy":u,onClick:a?void 0:h},g,p,{children:[u?e(Xu,{}):c?o.cloneElement(c,{"aria-hidden":!0}):null,e("span",{children:i})]}))};Yh.displayName="ButtonWithIcon.Default";const Vh=(r,n)=>{const{children:i,disabled:a=!1,styleType:s="default",danger:l=!1,icon:c,iconPosition:d="left",loading:u=!1,focusableWhenDisabled:f=!1,onClick:h}=r,p=ct(r,["children","disabled","styleType","danger","icon","iconPosition","loading","focusableWhenDisabled","onClick"]),g={$buttonIconPosition:d,$buttonStyle:a?"disabled":s,$buttonSizeStyle:"small",$buttonIsDanger:l};return t(Wh,Object.assign({ref:n,"data-testid":p["data-testid"]||"button-with-icon",disabled:a&&!f,"aria-disabled":a,"aria-busy":u,onClick:a?void 0:h},g,p,{children:[u?e(Xu,{}):c?o.cloneElement(c,{"aria-hidden":!0}):null,e("span",{children:i})]}))};Vh.displayName="ButtonWithIcon.Small";const Uh={Default:o.forwardRef(Yh),Small:o.forwardRef(Vh)},Kh=({className:t,progress:r,color:n,"data-testid":o})=>e(qh,{className:t,$innerWidth:r,$color:n,"data-testid":o,children:e("progress",{value:100*r,max:100})}),qh=_.div`
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
            border: ${Ji["width-010"]} ${Ji.solid} ${r};
            border-radius: ${ta.sm};

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
`,Gh=_.button`
    align-items: center;
    border-radius: ${ta.sm};
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
                    border: ${Ji["width-010"]} ${Ji.solid}
                        ${Qi["border-primary"]};
                    color: ${Qi["text-primary"]};

                    &:hover {
                        background-color: ${Qi["bg-hover-neutral"]};
                    }
                `;case"light":return O`
                    background-color: ${Qi.bg};
                    border: ${Ji["width-010"]} ${Ji.solid}
                        ${Qi.border};
                    color: ${Qi["text-primary"]};

                    &:hover {
                        background-color: ${Qi["bg-hover-neutral"]};
                    }
                `;default:return O`
                    background-color: ${Qi["bg-primary"]};
                    border: none;
                    color: ${Qi["text-inverse"]};

                    &:hover {
                        background-color: ${Qi["bg-primary-hover"]};
                    }
                `}}}

    &:disabled {
        background-color: ${Qi["bg-disabled"]};
        border: ${Ji["width-010"]} ${Ji.solid}
            ${Qi["border-disabled"]};
        color: ${Qi["text-disabled"]};
        cursor: not-allowed;
    }
`,Qh=o.forwardRef(((t,r)=>{var{"data-testid":n,styleType:o="primary",children:i,sizeType:a="default",type:s="button"}=t,l=ct(t,["data-testid","styleType","children","sizeType","type"]);return e(Gh,Object.assign({"data-testid":n||"iconButton",ref:r,type:s,$sizeType:a,$styleType:o},l,{children:i}))})),Zh=Object.assign(Hd,{Box:qd}),Xh=O`
    ${e=>`\n        ${oa.MaxWidth.sm(e)},\n        (orientation: landscape) and (max-height: ${na["sm-max"](e)}px)\n    `}
`,Jh=O`
    ${e=>`\n        @media (orientation: landscape) and (max-height: ${na["sm-max"](e)}px)\n    `}
`,ep=_.div`
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    ${e=>O`
            ${Ji.Util["dashed-default"]({radius:ta.sm,thickness:Ji["width-040"],colour:e.$disabled?Qi["border-disabled"]:Qi.border})}

            background-color: ${e.$disabled?Qi["bg-disabled"]:Qi.bg};
        `}
    height: 14.125rem;
`,tp=_(bf.Default)`
    width: fit-content;
    margin: 0 ${ea["spacing-20"]};

    &:disabled {
        border-color: ${Qi["border-strong"]};
    }
`,rp=_(Qh)`
    position: absolute;
    top: ${ea["spacing-16"]};
    right: ${ea["spacing-16"]};

    &:disabled {
        border-color: ${Qi["border-strong"]};
    }
`,np=_.img`
    display: block;
    object-fit: contain;
    object-position: center;
    width: calc(100% - (3rem + ${ea["spacing-16"]}) * 2);
    height: 100%;
`,op=_.div`
    background: ${Qi["bg-primary-subtlest"]};
    border: ${Ji["width-010"]} ${Ji.solid} ${Qi.border};
    border-radius: ${ta.sm};
    margin: 0 ${ea["spacing-20"]};
    padding: ${ea["spacing-16"]};
    display: flex;
    gap: ${ea["spacing-16"]};
    flex: 1;
    flex-direction: column;
    align-items: center;
`,ip=_(wa.BodySM)`
    margin-top: ${ea["spacing-16"]};
`,ap=_(Zh)`
    /* increase specificity as the styles are overwritten */
    && {
        height: 100%;
        overflow-y: auto;
    }
`,sp=_.div`
    width: 100%;
    margin: auto;
    padding: ${ea["layout-xxl"]} ${ea["layout-sm"]};

    ${Xh} {
        padding: 0;
        width: 100%;
        height: 100%;
    }
`,lp=_(Zh.Box)`
    width: 100%;
    height: 29rem;
    max-width: 672px;
    max-height: none;
    margin: 0 auto;
    padding: ${ea["spacing-16"]};

    ${Xh} {
        display: flex;
        flex-direction: column;
        max-width: none;
        height: 100%;
        border-radius: 0;
        padding: 0;

        --close-button-top-inset: ${ea["spacing-8"]};
        --close-button-right-inset: ${ea["spacing-20"]};
    }
`,cp=_.h2`
    ${Zi["body-baseline-semibold"]}
    color: ${Qi.text};
    margin-bottom: ${ea["spacing-16"]};
    text-align: center;

    ${Xh} {
        ${Zi["body-md-semibold"]}
        margin: ${ea["spacing-12"]} 0;
    }
`,dp=_.div`
    width: 100%;
    height: 20rem;
    border-radius: ${ta.lg};
    overflow: hidden;

    ${Xh} {
        border-radius: 0;
        flex: 1;
    }

    ${Jh} {
        background: ${Qi["bg-strong"]};
    }
`,up=_.div`
    position: relative;
    width: 100%;
    height: 100%;
    background: ${Qi["bg-stronger"]};
    margin: auto;

    ${Xh} {
        aspect-ratio: 4/3;
    }
    ${oa.MaxWidth.sm} {
        width: 100%;
        height: auto;
    }
    ${Jh} {
        width: auto;
        height: 100%;
    }
`,fp=_.div`
    position: absolute;
    left: 50%;
    top: calc(75% - 1px);
    width: 300px;
    height: 2px;
    transform: translateX(-50%);
    background-color: ${Qi["border-strong"]};
    pointer-events: none;

    ${Xh} {
        width: calc(100% - ${ea["spacing-40"]});
        max-width: 300px;
        left: 50%;
    }
`,hp=_.div`
    display: flex;
    justify-content: space-between;
    margin-top: ${ea["spacing-16"]};

    ${oa.MaxWidth.sm} {
        flex-direction: column-reverse;
        margin: ${ea["spacing-16"]} ${ea["spacing-24"]}
            ${ea["spacing-48"]};
        gap: ${ea["spacing-16"]};
    }

    ${Jh} {
        flex-direction: row;
        margin: ${ea["spacing-16"]} ${ea["spacing-20"]};
    }
`,pp=_(bf.Default)`
    width: 8.5rem;
    ${oa.MaxWidth.sm} {
        width: 100%;
    }
    ${Jh} {
        height: 2.5rem;
    }
`,gp=_.div`
    width: 100%;
    height: 100%;
    overflow: hidden;
`,mp=_.canvas`
    cursor: crosshair;
`,bp=S((()=>dt(void 0,void 0,void 0,(function*(){return{default:(yield import("./e-signature-canvas.90c983f1.js")).ESignatureCanvas}})))),vp=n=>{const{description:o,id:i,loadingProgress:a,loadingLabel:l="Uploading...",onChange:d,value:u,disabled:f}=n,h=ct(n,["description","id","loadingProgress","loadingLabel","onChange","value","disabled"]),[p,m]=g(!1),v=s(null),[y,x]=g(u),w=b(F),$=na["sm-max"]({theme:w}),C=Jc.useMediaQuery({maxWidth:$}),S=Jc.useMediaQuery({maxHeight:$,orientation:"landscape"}),k=()=>{var e;null===(e=v.current)||void 0===e||e.clear()},E=()=>{if(v.current){const e=v.current.export();x(e),m(!1),null==d||d(e)}};c((()=>{x(u)}),[u]);return t("div",Object.assign({},h,{children:[e(ep,{$disabled:f,children:"number"==typeof a?t(op,{children:[l&&e(wa.BodyMD,{children:l}),e(Kh,{progress:null!=a?a:0,"data-testid":`${i||"e-signature"}-progress-bar`})]}):y?t(r,{children:[e(np,{src:y,alt:"Signature preview"}),e(rp,{styleType:"light",onClick:()=>m(!0),id:i,"aria-label":"Edit signature",disabled:f,children:e(se,{})})]}):e(tp,{type:"button",styleType:"secondary","aria-label":"Add signature",id:i,onClick:()=>m(!0),disabled:f,children:"Add signature"})}),e(ap,{"data-testid":"signature-modal",show:p,children:e(sp,{children:t(lp,{onClose:()=>m(!1),children:[e(cp,{children:"Signature"}),e(dp,{children:t(up,{children:[e(fp,{}),e(D,{fallback:null,children:p&&e(bp,{ref:v,baseImageDataURL:y})})]})}),t(hp,{children:[e(pp,{as:S?Uh.Small:Uh.Default,type:"button",styleType:C&&!S?"light":"link",icon:e(le,{}),onClick:k,children:"Clear"}),e(pp,{as:S?bf.Small:bf.Default,type:"button",onClick:E,children:"Save"})]})]})})}),o?e(ip,{children:o}):null]}))};function yp(e,t){return yp=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},yp(e,t)}function xp(e){return e&&e.stopPropagation&&e.stopPropagation(),e&&e.preventDefault&&e.preventDefault(),!1}function wp(e){return null==e?[]:Array.isArray(e)?e.slice():[e]}function $p(e){return null!==e&&1===e.length?e[0]:e.slice()}function Cp(e){Object.keys(e).forEach((t=>{"undefined"!=typeof document&&document.addEventListener(t,e[t],!1)}))}function Sp(e,t){return Dp(function(e,t){let r=e;return r<=t.min&&(r=t.min),r>=t.max&&(r=t.max),r}(e,t),t)}function Dp(e,t){const r=(e-t.min)%t.step;let n=e-r;return 2*Math.abs(r)>=t.step&&(n+=r>0?t.step:-t.step),parseFloat(n.toFixed(5))}let kp=function(e){function t(t){var r;(r=e.call(this,t)||this).onKeyUp=()=>{r.onEnd()},r.onMouseUp=()=>{r.onEnd(r.getMouseEventMap())},r.onTouchEnd=e=>{e.preventDefault(),r.onEnd(r.getTouchEventMap())},r.onBlur=()=>{r.setState({index:-1},r.onEnd(r.getKeyDownEventMap()))},r.onMouseMove=e=>{r.setState({pending:!0});const t=r.getMousePosition(e),n=r.getDiffPosition(t[0]),o=r.getValueFromPosition(n);r.move(o)},r.onTouchMove=e=>{if(e.touches.length>1)return;r.setState({pending:!0});const t=r.getTouchPosition(e);if(void 0===r.isScrolling){const e=t[0]-r.startPosition[0],n=t[1]-r.startPosition[1];r.isScrolling=Math.abs(n)>Math.abs(e)}if(r.isScrolling)return void r.setState({index:-1});const n=r.getDiffPosition(t[0]),o=r.getValueFromPosition(n);r.move(o)},r.onKeyDown=e=>{if(!(e.ctrlKey||e.shiftKey||e.altKey||e.metaKey))switch(r.setState({pending:!0}),e.key){case"ArrowLeft":case"ArrowDown":case"Left":case"Down":e.preventDefault(),r.moveDownByStep();break;case"ArrowRight":case"ArrowUp":case"Right":case"Up":e.preventDefault(),r.moveUpByStep();break;case"Home":e.preventDefault(),r.move(r.props.min);break;case"End":e.preventDefault(),r.move(r.props.max);break;case"PageDown":e.preventDefault(),r.moveDownByStep(r.props.pageFn(r.props.step));break;case"PageUp":e.preventDefault(),r.moveUpByStep(r.props.pageFn(r.props.step))}},r.onSliderMouseDown=e=>{if(!r.props.disabled&&2!==e.button){if(r.setState({pending:!0}),!r.props.snapDragDisabled){const t=r.getMousePosition(e);r.forceValueFromPosition(t[0],(e=>{r.start(e,t[0]),Cp(r.getMouseEventMap())}))}xp(e)}},r.onSliderClick=e=>{if(!r.props.disabled&&r.props.onSliderClick&&!r.hasMoved){const t=r.getMousePosition(e),n=Sp(r.calcValue(r.calcOffsetFromPosition(t[0])),r.props);r.props.onSliderClick(n)}},r.createOnKeyDown=e=>t=>{r.props.disabled||(r.start(e),Cp(r.getKeyDownEventMap()),xp(t))},r.createOnMouseDown=e=>t=>{if(r.props.disabled||2===t.button)return;r.setState({pending:!0});const n=r.getMousePosition(t);r.start(e,n[0]),Cp(r.getMouseEventMap()),xp(t)},r.createOnTouchStart=e=>t=>{if(r.props.disabled||t.touches.length>1)return;r.setState({pending:!0});const n=r.getTouchPosition(t);r.startPosition=n,r.isScrolling=void 0,r.start(e,n[0]),Cp(r.getTouchEventMap()),function(e){e.stopPropagation&&e.stopPropagation()}(t)},r.handleResize=()=>{const e=window.setTimeout((()=>{r.pendingResizeTimeouts.shift(),r.resize()}),0);r.pendingResizeTimeouts.push(e)},r.renderThumb=(e,t)=>{const n=r.props.thumbClassName+" "+r.props.thumbClassName+"-"+t+" "+(r.state.index===t?r.props.thumbActiveClassName:""),o={ref:e=>{r["thumb"+t]=e},key:r.props.thumbClassName+"-"+t,className:n,style:e,onMouseDown:r.createOnMouseDown(t),onTouchStart:r.createOnTouchStart(t),onFocus:r.createOnKeyDown(t),tabIndex:0,role:"slider","aria-orientation":r.props.orientation,"aria-valuenow":r.state.value[t],"aria-valuemin":r.props.min,"aria-valuemax":r.props.max,"aria-label":Array.isArray(r.props.ariaLabel)?r.props.ariaLabel[t]:r.props.ariaLabel,"aria-labelledby":Array.isArray(r.props.ariaLabelledby)?r.props.ariaLabelledby[t]:r.props.ariaLabelledby,"aria-disabled":r.props.disabled},i={index:t,value:$p(r.state.value),valueNow:r.state.value[t]};return r.props.ariaValuetext&&(o["aria-valuetext"]="string"==typeof r.props.ariaValuetext?r.props.ariaValuetext:r.props.ariaValuetext(i)),r.props.renderThumb(o,i)},r.renderTrack=(e,t,n)=>{const o={key:r.props.trackClassName+"-"+e,className:r.props.trackClassName+" "+r.props.trackClassName+"-"+e,style:r.buildTrackStyle(t,r.state.upperBound-n)},i={index:e,value:$p(r.state.value)};return r.props.renderTrack(o,i)};let n=wp(t.value);n.length||(n=wp(t.defaultValue)),r.pendingResizeTimeouts=[];const i=[];for(let e=0;e<n.length;e+=1)n[e]=Sp(n[e],t),i.push(e);return r.resizeObserver=null,r.resizeElementRef=o.createRef(),r.state={index:-1,upperBound:0,sliderLength:0,value:n,zIndices:i},r}!function(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,yp(e,t)}(t,e);var r=t.prototype;return r.componentDidMount=function(){"undefined"!=typeof window&&(this.resizeObserver=new ResizeObserver(this.handleResize),this.resizeObserver.observe(this.resizeElementRef.current),this.resize())},t.getDerivedStateFromProps=function(e,t){const r=wp(e.value);return r.length?t.pending?null:{value:r.map((t=>Sp(t,e)))}:null},r.componentDidUpdate=function(){0===this.state.upperBound&&this.resize()},r.componentWillUnmount=function(){this.clearPendingResizeTimeouts(),this.resizeObserver&&this.resizeObserver.disconnect()},r.onEnd=function(e){e&&function(e){Object.keys(e).forEach((t=>{"undefined"!=typeof document&&document.removeEventListener(t,e[t],!1)}))}(e),this.hasMoved&&this.fireChangeEvent("onAfterChange"),this.setState({pending:!1}),this.hasMoved=!1},r.getValue=function(){return $p(this.state.value)},r.getClosestIndex=function(e){let t=Number.MAX_VALUE,r=-1;const{value:n}=this.state,o=n.length;for(let i=0;i<o;i+=1){const o=this.calcOffset(n[i]),a=Math.abs(e-o);a<t&&(t=a,r=i)}return r},r.getMousePosition=function(e){return[e["page"+this.axisKey()],e["page"+this.orthogonalAxisKey()]]},r.getTouchPosition=function(e){const t=e.touches[0];return[t["page"+this.axisKey()],t["page"+this.orthogonalAxisKey()]]},r.getKeyDownEventMap=function(){return{keydown:this.onKeyDown,keyup:this.onKeyUp,focusout:this.onBlur}},r.getMouseEventMap=function(){return{mousemove:this.onMouseMove,mouseup:this.onMouseUp}},r.getTouchEventMap=function(){return{touchmove:this.onTouchMove,touchend:this.onTouchEnd}},r.getValueFromPosition=function(e){const t=e/(this.state.sliderLength-this.state.thumbSize)*(this.props.max-this.props.min);return Sp(this.state.startValue+t,this.props)},r.getDiffPosition=function(e){let t=e-this.state.startPosition;return this.props.invert&&(t*=-1),t},r.resize=function(){const{slider:e,thumb0:t}=this;if(!e||!t)return;const r=this.sizeKey(),n=e.getBoundingClientRect(),o=e[r],i=n[this.posMaxKey()],a=n[this.posMinKey()],s=t.getBoundingClientRect()[r.replace("client","").toLowerCase()],l=o-s,c=Math.abs(i-a);this.state.upperBound===l&&this.state.sliderLength===c&&this.state.thumbSize===s||this.setState({upperBound:l,sliderLength:c,thumbSize:s})},r.calcOffset=function(e){const t=this.props.max-this.props.min;return 0===t?0:(e-this.props.min)/t*this.state.upperBound},r.calcValue=function(e){return e/this.state.upperBound*(this.props.max-this.props.min)+this.props.min},r.calcOffsetFromPosition=function(e){const{slider:t}=this,r=t.getBoundingClientRect(),n=r[this.posMaxKey()],o=r[this.posMinKey()];let i=e-(window["page"+this.axisKey()+"Offset"]+(this.props.invert?n:o));return this.props.invert&&(i=this.state.sliderLength-i),i-=this.state.thumbSize/2,i},r.forceValueFromPosition=function(e,t){const r=this.calcOffsetFromPosition(e),n=this.getClosestIndex(r),o=Sp(this.calcValue(r),this.props),i=this.state.value.slice();i[n]=o;for(let e=0;e<i.length-1;e+=1)if(i[e+1]-i[e]<this.props.minDistance)return;this.fireChangeEvent("onBeforeChange"),this.hasMoved=!0,this.setState({value:i},(()=>{t(n),this.fireChangeEvent("onChange")}))},r.clearPendingResizeTimeouts=function(){do{const e=this.pendingResizeTimeouts.shift();clearTimeout(e)}while(this.pendingResizeTimeouts.length)},r.start=function(e,t){const r=this["thumb"+e];r&&r.focus();const{zIndices:n}=this.state;n.splice(n.indexOf(e),1),n.push(e),this.setState((r=>({startValue:r.value[e],startPosition:void 0!==t?t:r.startPosition,index:e,zIndices:n})))},r.moveUpByStep=function(e){void 0===e&&(e=this.props.step);const t=this.state.value[this.state.index],r=Sp(this.props.invert&&"horizontal"===this.props.orientation?t-e:t+e,this.props);this.move(Math.min(r,this.props.max))},r.moveDownByStep=function(e){void 0===e&&(e=this.props.step);const t=this.state.value[this.state.index],r=Sp(this.props.invert&&"horizontal"===this.props.orientation?t+e:t-e,this.props);this.move(Math.max(r,this.props.min))},r.move=function(e){const t=this.state.value.slice(),{index:r}=this.state,{length:n}=t,o=t[r];if(e===o)return;this.hasMoved||this.fireChangeEvent("onBeforeChange"),this.hasMoved=!0;const{pearling:i,max:a,min:s,minDistance:l}=this.props;if(!i){if(r>0){const n=t[r-1];e<n+l&&(e=n+l)}if(r<n-1){const n=t[r+1];e>n-l&&(e=n-l)}}t[r]=e,i&&n>1&&(e>o?(this.pushSucceeding(t,l,r),function(e,t,r,n){for(let o=0;o<e;o+=1){const i=n-o*r;t[e-1-o]>i&&(t[e-1-o]=i)}}(n,t,l,a)):e<o&&(this.pushPreceding(t,l,r),function(e,t,r,n){for(let o=0;o<e;o+=1){const e=n+o*r;t[o]<e&&(t[o]=e)}}(n,t,l,s))),this.setState({value:t},this.fireChangeEvent.bind(this,"onChange"))},r.pushSucceeding=function(e,t,r){let n,o;for(n=r,o=e[n]+t;null!==e[n+1]&&o>e[n+1];n+=1,o=e[n]+t)e[n+1]=Dp(o,this.props)},r.pushPreceding=function(e,t,r){for(let n=r,o=e[n]-t;null!==e[n-1]&&o<e[n-1];n-=1,o=e[n]-t)e[n-1]=Dp(o,this.props)},r.axisKey=function(){return"vertical"===this.props.orientation?"Y":"X"},r.orthogonalAxisKey=function(){return"vertical"===this.props.orientation?"X":"Y"},r.posMinKey=function(){return"vertical"===this.props.orientation?this.props.invert?"bottom":"top":this.props.invert?"right":"left"},r.posMaxKey=function(){return"vertical"===this.props.orientation?this.props.invert?"top":"bottom":this.props.invert?"left":"right"},r.sizeKey=function(){return"vertical"===this.props.orientation?"clientHeight":"clientWidth"},r.fireChangeEvent=function(e){this.props[e]&&this.props[e]($p(this.state.value),this.state.index)},r.buildThumbStyle=function(e,t){const r={position:"absolute",touchAction:"none",willChange:this.state.index>=0?this.posMinKey():void 0,zIndex:this.state.zIndices.indexOf(t)+1};return r[this.posMinKey()]=e+"px",r},r.buildTrackStyle=function(e,t){const r={position:"absolute",willChange:this.state.index>=0?this.posMinKey()+","+this.posMaxKey():void 0};return r[this.posMinKey()]=e,r[this.posMaxKey()]=t,r},r.buildMarkStyle=function(e){var t;return(t={position:"absolute"})[this.posMinKey()]=e,t},r.renderThumbs=function(e){const{length:t}=e,r=[];for(let n=0;n<t;n+=1)r[n]=this.buildThumbStyle(e[n],n);const n=[];for(let e=0;e<t;e+=1)n[e]=this.renderThumb(r[e],e);return n},r.renderTracks=function(e){const t=[],r=e.length-1;t.push(this.renderTrack(0,0,e[0]));for(let n=0;n<r;n+=1)t.push(this.renderTrack(n+1,e[n],e[n+1]));return t.push(this.renderTrack(r+1,e[r],this.state.upperBound)),t},r.renderMarks=function(){let{marks:e}=this.props;const t=this.props.max-this.props.min+1;return"boolean"==typeof e?e=Array.from({length:t}).map(((e,t)=>t)):"number"==typeof e&&(e=Array.from({length:t}).map(((e,t)=>t)).filter((t=>t%e==0))),e.map(parseFloat).sort(((e,t)=>e-t)).map((e=>{const t=this.calcOffset(e),r={key:e,className:this.props.markClassName,style:this.buildMarkStyle(t)};return this.props.renderMark(r)}))},r.render=function(){const e=[],{value:t}=this.state,r=t.length;for(let n=0;n<r;n+=1)e[n]=this.calcOffset(t[n],n);const n=this.props.withTracks?this.renderTracks(e):null,i=this.renderThumbs(e),a=this.props.marks?this.renderMarks():null;return o.createElement("div",{ref:e=>{this.slider=e,this.resizeElementRef.current=e},style:{position:"relative"},className:this.props.className+(this.props.disabled?" disabled":""),onMouseDown:this.onSliderMouseDown,onClick:this.onSliderClick},n,i,a)},t}(o.Component);kp.displayName="ReactSlider",kp.defaultProps={min:0,max:100,step:1,pageFn:e=>10*e,minDistance:0,defaultValue:0,orientation:"horizontal",className:"slider",thumbClassName:"thumb",thumbActiveClassName:"active",trackClassName:"track",markClassName:"mark",withTracks:!0,pearling:!1,disabled:!1,snapDragDisabled:!1,invert:!1,marks:[],renderThumb:e=>o.createElement("div",e),renderTrack:e=>o.createElement("div",e),renderMark:e=>o.createElement("span",e)};var Ep=kp;const _p=_.div`
    isolation: isolate;
`,Op=_.div`
    margin-top: ${ea["spacing-8"]};
    display: flex;
    justify-content: space-between;
    gap: ${ea["spacing-8"]};
`,Fp=_.div`
    margin-bottom: ${ea["spacing-8"]};
`,Tp=_(wa.BodyBL)`
    overflow-wrap: anywhere;
`,Ip=_(Ep)`
    height: 0.875rem;
`,Mp=_.div`
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
        box-shadow: ${ra["sm-subtle"]};
        border: ${Ji["width-010"]} ${Ji.solid}
            ${e=>e.$disabled?Qi["border-selected-disabled"]:Qi["border-strong"]};
        border-radius: ${ta.full};
    }
`,Ap=_.div`
    height: 0.875rem;
    width: 0.875rem;
    position: relative;
    outline: none;

    &:focus ${Mp}:after {
        outline-offset: -1px;
        outline: ${Ji["width-040"]} ${Ji.solid}
            ${Qi["border-selected"]};
    }
`,jp=_.div`
    height: 0.25rem;
    top: 50%;
    transform: translateY(-50%);
    border-radius: ${ta.full};

    background: ${e=>e.$color&&"function"==typeof e.$color?e.$color(e):e.$color||Qi["border-strong"](e)};
`,Bp=r=>{var{value:n,min:o=0,max:i=100,step:a=1,minRange:s,numOfThumbs:l=2,colors:d,disabled:u,readOnly:f,ariaLabels:h,showSliderLabels:p,sliderLabelPrefix:m,sliderLabelSuffix:b,showIndicatorLabel:v,indicatorLabelPrefix:y,indicatorLabelSuffix:x,renderSliderLabel:w,onChange:$,onChangeEnd:C}=r,S=ct(r,["value","min","max","step","minRange","numOfThumbs","colors","disabled","readOnly","ariaLabels","showSliderLabels","sliderLabelPrefix","sliderLabelSuffix","showIndicatorLabel","indicatorLabelPrefix","indicatorLabelSuffix","renderSliderLabel","onChange","onChangeEnd"]);const[D,k]=g(_()),E=function(){const e=function(){const e=u||f?Qi["border-disabled"]:Qi["border-strong"],t=u||f?Qi["border-selected-disabled"]:Qi["border-selected"];if(1===l)return[t,e];const r=[];r.push(e);for(let e=0;e<l-1;e++)r.push(t);return r.push(e),r}();return new Array(l+1).fill(0).map(((t,r)=>(null==d?void 0:d[r])||e[r]))}();c((()=>{n!==D&&k(_())}),[n]);function _(){if(n&&n.length===l)return n;const e=[];for(let t=0;t<l;t++)e.push(o+a*t);return e}const O=e=>w?w(e):t(Tp,{children:[m,e,b]});return t(_p,Object.assign({},S,{children:[v&&e(Fp,{children:(()=>{let e="";if(1===D.length)e=`${D[0]}`;else if(2===D.length)e=`${D[0]} - ${D[1]}`;else if(D.length>2){e=`${Math.min(...D)} - ${Math.max(...D)}`}return t(Tp,{children:[y,e,x]})})()}),e(Ip,{step:a,min:o,max:i,value:D,disabled:u||f,onChange:(e,t)=>{if("number"==typeof e){const t=[e];k(t),null==$||$(t)}else{if(t>-1&&D[t]===e[t])return;const r=[...e];k(r),null==$||$(r)}},onAfterChange:e=>{if("number"==typeof e){const t=[e];k(t),null==C||C(t)}else{const t=[...e];k(t),null==C||C(t)}},minDistance:s,ariaLabel:h,renderThumb:(t,r)=>e(Ap,Object.assign({"data-testid":`slider-thumb-${r.index}`},t,{tabIndex:u?void 0:t.tabIndex,children:e(Mp,{$disabled:u,$readOnly:f})})),renderTrack:(t,r)=>e(jp,Object.assign({"data-testid":`slider-track-${r.index}`},t,{$color:E[r.index]}))}),p&&t(Op,{children:[e("div",{children:O(o)}),e("div",{children:O(i)})]})]}))},Rp=_.div`
    display: flex;
    margin-bottom: ${ea["spacing-16"]};
    align-items: baseline;
`,zp=_.div`
    margin: 0 0.5rem;
`,Pp=_.div`
    width: 100%;
    height: 4rem;
    display: flex;
    align-items: flex-end;
    padding: 0 0.4375rem;
`,Lp=_.div`
    flex: 1;
    border-radius: ${ta.sm} ${ta.sm} 0 0;
    border: 0.5px solid transparent; // space between bars
    background-clip: content-box;

    ${e=>{let t=Qi["bg-strongest"];return e.$disabled&&e.$selected?t=Qi["bg-selected-stronger-disabled"]:e.$disabled?t=Qi["bg-disabled"]:e.$selected&&(t=Qi["bg-selected-stronger"]),O`
            background-color: ${t};
        `}}
`,Np=_(Bp)`
    margin-top: -0.3125rem;
`,Hp=n=>{var{bins:o=[],interval:i,disabled:s,readOnly:l,value:d,showRangeLabels:u,rangeLabelPrefix:f,rangeLabelSuffix:h,ariaLabels:p,onChange:m,onChangeEnd:b,renderEmptyView:v,renderRangeLabel:y}=n,x=ct(n,["bins","interval","disabled","readOnly","value","showRangeLabels","rangeLabelPrefix","rangeLabelSuffix","ariaLabels","onChange","onChangeEnd","renderEmptyView","renderRangeLabel"]);const w=o.map((e=>e.count)),$=Math.max(...w),C=o.map((e=>e.minValue)),S=Math.max(...C),D=Math.min(...C),[k,E]=g(T()),_=a((()=>{const e=[...o].sort(((e,t)=>e.minValue-t.minValue)),t=(S-D)/i+1,r=[];for(let n=0;n<t;n++){const t=e.find((e=>e.minValue===D+i*n));t?r.push(t):r.push({count:0,minValue:D+i*n})}return r}),[o,i]);c((()=>{d!==k&&E(T())}),[d]);const O=e=>{const[t,r]=e,n=[t,r];E(n),null==m||m(n)},F=e=>{const[t,r]=e,n=[t,r];E(n),null==b||b(n)};function T(){return null!=d?d:[D,D+i]}const I=e=>y?y(e):t(wa.BodyBL,{children:[f,e,h]});return t("div",Object.assign({},x,{children:[u&&t(Rp,{children:[I(k[0]),e(zp,{children:"-"}),I(k[1])]}),_.every((e=>0===e.count))&&v?v():t(r,{children:[e(Pp,{children:_.map(((t,r)=>{const n=t.count/$;return e(Lp,{style:{height:n?`calc(calc(100% - 0.25rem) * ${n} + 0.25rem)`:0},$selected:t.minValue>=k[0]&&t.minValue<k[1],$disabled:s||l},r)}))}),e(Np,{min:D,max:S+i,step:i,minRange:i,numOfThumbs:2,value:k,disabled:s,readOnly:l,ariaLabels:p,onChange:O,onChangeEnd:F})]})]}))},Wp=_(yh)`
    width: 100%;
    height: calc(3rem - 2px); // exclude top and bottom borders

    ${e=>"no-border"!==e.$styleType&&O`
            padding-left: ${ea["spacing-16"]};
            padding-right: ${e.$showClear?0:ea["spacing-16"]};
        `}
`,Yp=_(xh)`
    height: auto;
    padding: ${ea["spacing-12"]} ${ea["spacing-16"]};

    cursor: pointer;
    color: ${Qi.icon};

    ${e=>"no-border"===e.$styleType&&O`
            margin-right: -${ea["spacing-12"]};
        `}
`,Vp=_(re)`
    height: 1.25rem;
    width: 1.25rem;
    vertical-align: middle;
`,Up=_.div`
    display: flex;
    width: 100%;
`,Kp=_(bh)`
    display: flex;
    align-items: center;
    width: 100%;
`,qp=o.forwardRef(((n,o)=>{var{value:i,spacing:a,type:l,error:c,disabled:d,readOnly:u,onChange:h,onClear:p,allowClear:g=!1,className:m,styleType:b="bordered"}=n,v=ct(n,["value","spacing","type","error","disabled","readOnly","onChange","onClear","allowClear","className","styleType"]);const y=((e,t)=>"tel"===e&&!!t)(l,a),x=s(null);f(o,(()=>x.current),[]);const w=_d({ref:x,formatter:e=>y?Sd.transformWithSpaces(e,a):e}),$=e=>{h&&(y?S(e):h(e))},C=()=>{p&&p(),x&&x.current&&x.current.focus()},S=e=>{const t=w();if(!t)return;const{nextValue:r,updateCaretPosition:n}=t,o=r.replace(/\s/g,"");e.target.value=o,null==h||h(e),n()},D=i?(e=>e?y?Sd.transformWithSpaces(e,a):e:"")(i):i,k=g&&!d&&!u&&!!i,E=()=>t(r,{children:[e(Wp,Object.assign({"data-testid":"input",ref:x,"aria-disabled":d,value:D,onChange:$,type:l,readOnly:u||d,$showClear:k,$styleType:b},v)),k&&e(Yp,{onClick:C,type:"button",$styleType:b,children:e(Vp,{"aria-hidden":!0})})]});return e(r,{children:"no-border"===b?e(Up,{className:m,children:E()}):e(Kp,{$disabled:d,$error:c,$readOnly:u,className:m,children:E()})})})),Gp=o.forwardRef(((t,r)=>{const{label:n,errorMessage:o,id:i,"data-error-testid":a,"data-testid":s,layoutType:l,mobileCols:c,tabletCols:d,desktopCols:u,xxsCols:f,xsCols:h,smCols:p,mdCols:m,lgCols:b,xlCols:v,xxlCols:y}=t,x=ct(t,["label","errorMessage","id","data-error-testid","data-testid","layoutType","mobileCols","tabletCols","desktopCols","xxsCols","xsCols","smCols","mdCols","lgCols","xlCols","xxlCols"]),[w]=g((()=>`form-field-${Cd.generate()}`)),$=null!=i?i:w;return e(ku,{id:$,"data-testid":s,label:n,errorMessage:o,disabled:x.disabled,"data-error-testid":a,layoutType:l,mobileCols:c,tabletCols:d,desktopCols:u,xxsCols:f,xsCols:h,smCols:p,mdCols:m,lgCols:b,xlCols:v,xxlCols:y,children:e(qp,Object.assign({id:`${$}-base`,"data-testid":s?`${s}-base`:void 0,ref:r,error:!!o},x))})}));var Qp=qn;var Zp=function(e){var t=this.__data__,r=t.delete(e);return this.size=t.size,r};var Xp=function(e){return this.__data__.get(e)};var Jp=function(e){return this.__data__.has(e)},eg=qn,tg=Gn,rg=mo;var ng=function(e,t){var r=this.__data__;if(r instanceof eg){var n=r.__data__;if(!tg||n.length<199)return n.push([e,t]),this.size=++r.size,this;r=this.__data__=new rg(n)}return r.set(e,t),this.size=r.size,this},og=qn,ig=function(){this.__data__=new Qp,this.size=0},ag=Zp,sg=Xp,lg=Jp,cg=ng;function dg(e){var t=this.__data__=new og(e);this.size=t.size}dg.prototype.clear=ig,dg.prototype.delete=ag,dg.prototype.get=sg,dg.prototype.has=lg,dg.prototype.set=cg;var ug=dg;var fg=mo,hg=function(e){return this.__data__.set(e,"__lodash_hash_undefined__"),this},pg=function(e){return this.__data__.has(e)};function gg(e){var t=-1,r=null==e?0:e.length;for(this.__data__=new fg;++t<r;)this.add(e[t])}gg.prototype.add=gg.prototype.push=hg,gg.prototype.has=pg;var mg=function(e,t){return e.has(t)},bg=gg,vg=function(e,t){for(var r=-1,n=null==e?0:e.length;++r<n;)if(t(e[r],r,e))return!0;return!1},yg=mg;var xg=function(e,t,r,n,o,i){var a=1&r,s=e.length,l=t.length;if(s!=l&&!(a&&l>s))return!1;var c=i.get(e),d=i.get(t);if(c&&d)return c==t&&d==e;var u=-1,f=!0,h=2&r?new bg:void 0;for(i.set(e,t),i.set(t,e);++u<s;){var p=e[u],g=t[u];if(n)var m=a?n(g,p,u,t,e,i):n(p,g,u,e,t,i);if(void 0!==m){if(m)continue;f=!1;break}if(h){if(!vg(t,(function(e,t){if(!yg(h,t)&&(p===e||o(p,e,r,n,i)))return h.push(t)}))){f=!1;break}}else if(p!==g&&!o(p,g,r,n,i)){f=!1;break}}return i.delete(e),i.delete(t),f};var wg=function(e){var t=-1,r=Array(e.size);return e.forEach((function(e,n){r[++t]=[n,e]})),r};var $g=function(e){var t=-1,r=Array(e.size);return e.forEach((function(e){r[++t]=e})),r},Cg=br.Uint8Array,Sg=Fn,Dg=xg,kg=wg,Eg=$g,_g=vr?vr.prototype:void 0,Og=_g?_g.valueOf:void 0;var Fg=function(e,t,r,n,o,i,a){switch(r){case"[object DataView]":if(e.byteLength!=t.byteLength||e.byteOffset!=t.byteOffset)return!1;e=e.buffer,t=t.buffer;case"[object ArrayBuffer]":return!(e.byteLength!=t.byteLength||!i(new Cg(e),new Cg(t)));case"[object Boolean]":case"[object Date]":case"[object Number]":return Sg(+e,+t);case"[object Error]":return e.name==t.name&&e.message==t.message;case"[object RegExp]":case"[object String]":return e==t+"";case"[object Map]":var s=kg;case"[object Set]":var l=1&n;if(s||(s=Eg),e.size!=t.size&&!l)return!1;var c=a.get(e);if(c)return c==t;n|=2,a.set(e,t);var d=Dg(s(e),s(t),n,o,i,a);return a.delete(e),d;case"[object Symbol]":if(Og)return Og.call(e)==Og.call(t)}return!1};var Tg=function(e,t){for(var r=-1,n=t.length,o=e.length;++r<n;)e[o+r]=t[r];return e},Ig=Tg,Mg=hr;var Ag=function(e,t,r){var n=t(e);return Mg(e)?n:Ig(n,r(e))};var jg=function(e,t){for(var r=-1,n=null==e?0:e.length,o=0,i=[];++r<n;){var a=e[r];t(a,r,e)&&(i[o++]=a)}return i},Bg=function(){return[]},Rg=Object.prototype.propertyIsEnumerable,zg=Object.getOwnPropertySymbols,Pg=zg?function(e){return null==e?[]:(e=Object(e),jg(zg(e),(function(t){return Rg.call(e,t)})))}:Bg;var Lg=function(e,t){for(var r=-1,n=Array(e);++r<e;)n[r]=t(r);return n},Ng=Or,Hg=Fr;var Wg=function(e){return Hg(e)&&"[object Arguments]"==Ng(e)},Yg=Fr,Vg=Object.prototype,Ug=Vg.hasOwnProperty,Kg=Vg.propertyIsEnumerable,qg=Wg(function(){return arguments}())?Wg:function(e){return Yg(e)&&Ug.call(e,"callee")&&!Kg.call(e,"callee")},Gg={exports:{}};var Qg=function(){return!1};!function(e,t){var r=br,n=Qg,o=t&&!t.nodeType&&t,i=o&&e&&!e.nodeType&&e,a=i&&i.exports===o?r.Buffer:void 0,s=(a?a.isBuffer:void 0)||n;e.exports=s}(Gg,Gg.exports);var Zg=Gg.exports,Xg=/^(?:0|[1-9]\d*)$/;var Jg=function(e,t){var r=typeof e;return!!(t=null==t?9007199254740991:t)&&("number"==r||"symbol"!=r&&Xg.test(e))&&e>-1&&e%1==0&&e<t};var em=function(e){return"number"==typeof e&&e>-1&&e%1==0&&e<=9007199254740991},tm=Or,rm=em,nm=Fr,om={};om["[object Float32Array]"]=om["[object Float64Array]"]=om["[object Int8Array]"]=om["[object Int16Array]"]=om["[object Int32Array]"]=om["[object Uint8Array]"]=om["[object Uint8ClampedArray]"]=om["[object Uint16Array]"]=om["[object Uint32Array]"]=!0,om["[object Arguments]"]=om["[object Array]"]=om["[object ArrayBuffer]"]=om["[object Boolean]"]=om["[object DataView]"]=om["[object Date]"]=om["[object Error]"]=om["[object Function]"]=om["[object Map]"]=om["[object Number]"]=om["[object Object]"]=om["[object RegExp]"]=om["[object Set]"]=om["[object String]"]=om["[object WeakMap]"]=!1;var im=function(e){return nm(e)&&rm(e.length)&&!!om[tm(e)]};var am=function(e){return function(t){return e(t)}},sm={exports:{}};!function(e,t){var r=pr,n=t&&!t.nodeType&&t,o=n&&e&&!e.nodeType&&e,i=o&&o.exports===n&&r.process,a=function(){try{var e=o&&o.require&&o.require("util").types;return e||i&&i.binding&&i.binding("util")}catch(e){}}();e.exports=a}(sm,sm.exports);var lm=sm.exports,cm=im,dm=am,um=lm&&lm.isTypedArray,fm=um?dm(um):cm,hm=Lg,pm=qg,gm=hr,mm=Zg,bm=Jg,vm=fm,ym=Object.prototype.hasOwnProperty;var xm=function(e,t){var r=gm(e),n=!r&&pm(e),o=!r&&!n&&mm(e),i=!r&&!n&&!o&&vm(e),a=r||n||o||i,s=a?hm(e.length,String):[],l=s.length;for(var c in e)!t&&!ym.call(e,c)||a&&("length"==c||o&&("offset"==c||"parent"==c)||i&&("buffer"==c||"byteLength"==c||"byteOffset"==c)||bm(c,l))||s.push(c);return s},wm=Object.prototype;var $m=function(e){var t=e&&e.constructor;return e===("function"==typeof t&&t.prototype||wm)};var Cm=function(e,t){return function(r){return e(t(r))}}(Object.keys,Object),Sm=$m,Dm=Cm,km=Object.prototype.hasOwnProperty;var Em=function(e){if(!Sm(e))return Dm(e);var t=[];for(var r in Object(e))km.call(e,r)&&"constructor"!=r&&t.push(r);return t},_m=Wr,Om=em;var Fm=function(e){return null!=e&&Om(e.length)&&!_m(e)},Tm=xm,Im=Em,Mm=Fm;var Am=function(e){return Mm(e)?Tm(e):Im(e)},jm=Ag,Bm=Pg,Rm=Am;var zm=function(e){return jm(e,Rm,Bm)},Pm=Object.prototype.hasOwnProperty;var Lm=function(e,t,r,n,o,i){var a=1&r,s=zm(e),l=s.length;if(l!=zm(t).length&&!a)return!1;for(var c=l;c--;){var d=s[c];if(!(a?d in t:Pm.call(t,d)))return!1}var u=i.get(e),f=i.get(t);if(u&&f)return u==t&&f==e;var h=!0;i.set(e,t),i.set(t,e);for(var p=a;++c<l;){var g=e[d=s[c]],m=t[d];if(n)var b=a?n(m,g,d,t,e,i):n(g,m,d,e,t,i);if(!(void 0===b?g===m||o(g,m,r,n,i):b)){h=!1;break}p||(p="constructor"==d)}if(h&&!p){var v=e.constructor,y=t.constructor;v==y||!("constructor"in e)||!("constructor"in t)||"function"==typeof v&&v instanceof v&&"function"==typeof y&&y instanceof y||(h=!1)}return i.delete(e),i.delete(t),h},Nm=cn(br,"DataView"),Hm=Gn,Wm=cn(br,"Promise"),Ym=cn(br,"Set"),Vm=cn(br,"WeakMap"),Um=Or,Km=qr,qm="[object Map]",Gm="[object Promise]",Qm="[object Set]",Zm="[object WeakMap]",Xm="[object DataView]",Jm=Km(Nm),eb=Km(Hm),tb=Km(Wm),rb=Km(Ym),nb=Km(Vm),ob=Um;(Nm&&ob(new Nm(new ArrayBuffer(1)))!=Xm||Hm&&ob(new Hm)!=qm||Wm&&ob(Wm.resolve())!=Gm||Ym&&ob(new Ym)!=Qm||Vm&&ob(new Vm)!=Zm)&&(ob=function(e){var t=Um(e),r="[object Object]"==t?e.constructor:void 0,n=r?Km(r):"";if(n)switch(n){case Jm:return Xm;case eb:return qm;case tb:return Gm;case rb:return Qm;case nb:return Zm}return t});var ib=ob,ab=ug,sb=xg,lb=Fg,cb=Lm,db=ib,ub=hr,fb=Zg,hb=fm,pb="[object Arguments]",gb="[object Array]",mb="[object Object]",bb=Object.prototype.hasOwnProperty;var vb=function(e,t,r,n,o,i){var a=ub(e),s=ub(t),l=a?gb:db(e),c=s?gb:db(t),d=(l=l==pb?mb:l)==mb,u=(c=c==pb?mb:c)==mb,f=l==c;if(f&&fb(e)){if(!fb(t))return!1;a=!0,d=!1}if(f&&!d)return i||(i=new ab),a||hb(e)?sb(e,t,r,n,o,i):lb(e,t,l,r,n,o,i);if(!(1&r)){var h=d&&bb.call(e,"__wrapped__"),p=u&&bb.call(t,"__wrapped__");if(h||p){var g=h?e.value():e,m=p?t.value():t;return i||(i=new ab),o(g,m,r,n,i)}}return!!f&&(i||(i=new ab),cb(e,t,r,n,o,i))},yb=Fr;var xb=function e(t,r,n,o,i){return t===r||(null==t||null==r||!yb(t)&&!yb(r)?t!=t&&r!=r:vb(t,r,n,o,e,i))},wb=ug,$b=xb;var Cb=function(e,t,r,n){var o=r.length,i=o,a=!n;if(null==e)return!i;for(e=Object(e);o--;){var s=r[o];if(a&&s[2]?s[1]!==e[s[0]]:!(s[0]in e))return!1}for(;++o<i;){var l=(s=r[o])[0],c=e[l],d=s[1];if(a&&s[2]){if(void 0===c&&!(l in e))return!1}else{var u=new wb;if(n)var f=n(c,d,l,e,t,u);if(!(void 0===f?$b(d,c,3,n,u):f))return!1}}return!0},Sb=Pr;var Db=function(e){return e==e&&!Sb(e)},kb=Db,Eb=Am;var _b=function(e){for(var t=Eb(e),r=t.length;r--;){var n=t[r],o=e[n];t[r]=[n,o,kb(o)]}return t};var Ob=function(e,t){return function(r){return null!=r&&(r[e]===t&&(void 0!==t||e in Object(r)))}},Fb=Cb,Tb=_b,Ib=Ob;var Mb=function(e,t){return null!=e&&t in Object(e)},Ab=jo,jb=qg,Bb=hr,Rb=Jg,zb=em,Pb=Ro;var Lb=function(e,t,r){for(var n=-1,o=(t=Ab(t,e)).length,i=!1;++n<o;){var a=Pb(t[n]);if(!(i=null!=e&&r(e,a)))break;e=e[a]}return i||++n!=o?i:!!(o=null==e?0:e.length)&&zb(o)&&Rb(a,o)&&(Bb(e)||jb(e))},Nb=Mb,Hb=Lb;var Wb=xb,Yb=Ho,Vb=function(e,t){return null!=e&&Hb(e,t,Nb)},Ub=zr,Kb=Db,qb=Ob,Gb=Ro;var Qb=function(e){return function(t){return null==t?void 0:t[e]}},Zb=Lo;var Xb=Qb,Jb=function(e){return function(t){return Zb(t,e)}},ev=zr,tv=Ro;var rv=function(e){var t=Tb(e);return 1==t.length&&t[0][2]?Ib(t[0][0],t[0][1]):function(r){return r===e||Fb(r,e,t)}},nv=function(e,t){return Ub(e)&&Kb(t)?qb(Gb(e),t):function(r){var n=Yb(r,e);return void 0===n&&n===t?Vb(r,e):Wb(t,n,3)}},ov=function(e){return e},iv=hr,av=function(e){return ev(e)?Xb(tv(e)):Jb(e)};var sv=function(e){return"function"==typeof e?e:null==e?ov:"object"==typeof e?iv(e)?nv(e[0],e[1]):rv(e):av(e)},lv=sv,cv=Fm,dv=Am;var uv=function(e){return function(t,r,n){var o=Object(t);if(!cv(t)){var i=lv(r);t=dv(t),r=function(e){return i(o[e],e,o)}}var a=e(t,r,n);return a>-1?o[i?t[a]:a]:void 0}};var fv=/\s/;var hv=function(e){for(var t=e.length;t--&&fv.test(e.charAt(t)););return t},pv=/^\s+/;var gv=function(e){return e?e.slice(0,hv(e)+1).replace(pv,""):e},mv=Pr,bv=Mr,vv=/^[-+]0x[0-9a-f]+$/i,yv=/^0b[01]+$/i,xv=/^0o[0-7]+$/i,wv=parseInt;var $v=function(e){if("number"==typeof e)return e;if(bv(e))return NaN;if(mv(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=mv(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=gv(e);var r=yv.test(e);return r||xv.test(e)?wv(e.slice(2),r?2:8):vv.test(e)?NaN:+e},Cv=$v,Sv=1/0;var Dv=function(e){return e?(e=Cv(e))===Sv||e===-1/0?17976931348623157e292*(e<0?-1:1):e==e?e:0:0===e?e:0};var kv=function(e,t,r,n){for(var o=e.length,i=r+(n?1:-1);n?i--:++i<o;)if(t(e[i],i,e))return i;return-1},Ev=sv,_v=function(e){var t=Dv(e),r=t%1;return t==t?r?t-r:t:0},Ov=Math.max;var Fv=function(e,t,r){var n=null==e?0:e.length;if(!n)return-1;var o=null==r?0:_v(r);return o<0&&(o=Ov(n+o,0)),kv(e,Ev(t),o)},Tv=Re(Fv),Iv=Re(uv(Fv)),Mv=xb;var Av=Re((function(e,t){return Mv(e,t)})),jv=Zv(),Bv=e=>Kv(e,jv),Rv=Zv();Bv.write=e=>Kv(e,Rv);var zv=Zv();Bv.onStart=e=>Kv(e,zv);var Pv=Zv();Bv.onFrame=e=>Kv(e,Pv);var Lv=Zv();Bv.onFinish=e=>Kv(e,Lv);var Nv=[];Bv.setTimeout=(e,t)=>{const r=Bv.now()+t,n=()=>{const e=Nv.findIndex((e=>e.cancel==n));~e&&Nv.splice(e,1),Vv-=~e?1:0},o={time:r,handler:e,cancel:n};return Nv.splice(Hv(r),0,o),Vv+=1,qv(),o};var Hv=e=>~(~Nv.findIndex((t=>t.time>e))||~Nv.length);Bv.cancel=e=>{zv.delete(e),Pv.delete(e),Lv.delete(e),jv.delete(e),Rv.delete(e)},Bv.sync=e=>{Uv=!0,Bv.batchedUpdates(e),Uv=!1},Bv.throttle=e=>{let t;function r(){try{e(...t)}finally{t=null}}function n(...e){t=e,Bv.onStart(r)}return n.handler=e,n.cancel=()=>{zv.delete(r),t=null},n};var Wv="undefined"!=typeof window?window.requestAnimationFrame:()=>{};Bv.use=e=>Wv=e,Bv.now="undefined"!=typeof performance?()=>performance.now():Date.now,Bv.batchedUpdates=e=>e(),Bv.catch=console.error,Bv.frameLoop="always",Bv.advance=()=>{"demand"!==Bv.frameLoop?console.warn("Cannot call the manual advancement of rafz whilst frameLoop is not set as demand"):Qv()};var Yv=-1,Vv=0,Uv=!1;function Kv(e,t){Uv?(t.delete(e),e(0)):(t.add(e),qv())}function qv(){Yv<0&&(Yv=0,"demand"!==Bv.frameLoop&&Wv(Gv))}function Gv(){~Yv&&(Wv(Gv),Bv.batchedUpdates(Qv))}function Qv(){const e=Yv;Yv=Bv.now();const t=Hv(Yv);t&&(Xv(Nv.splice(0,t),(e=>e.handler())),Vv-=t),Vv?(zv.flush(),jv.flush(e?Math.min(64,Yv-e):16.667),Pv.flush(),Rv.flush(),Lv.flush()):Yv=-1}function Zv(){let e=new Set,t=e;return{add(r){Vv+=t!=e||e.has(r)?0:1,e.add(r)},delete:r=>(Vv-=t==e&&e.has(r)?1:0,e.delete(r)),flush(r){t.size&&(e=new Set,Vv-=t.size,Xv(t,(t=>t(r)&&e.add(t))),Vv+=e.size,t=e)}}}function Xv(e,t){e.forEach((e=>{try{t(e)}catch(e){Bv.catch(e)}}))}var Jv=Object.defineProperty,ey={};function ty(){}((e,t)=>{for(var r in t)Jv(e,r,{get:t[r],enumerable:!0})})(ey,{assign:()=>gy,colors:()=>fy,createStringInterpolator:()=>ly,skipAnimation:()=>hy,to:()=>cy,willAdvance:()=>py});var ry={arr:Array.isArray,obj:e=>!!e&&"Object"===e.constructor.name,fun:e=>"function"==typeof e,str:e=>"string"==typeof e,num:e=>"number"==typeof e,und:e=>void 0===e};function ny(e,t){if(ry.arr(e)){if(!ry.arr(t)||e.length!==t.length)return!1;for(let r=0;r<e.length;r++)if(e[r]!==t[r])return!1;return!0}return e===t}var oy=(e,t)=>e.forEach(t);function iy(e,t,r){if(ry.arr(e))for(let n=0;n<e.length;n++)t.call(r,e[n],`${n}`);else for(const n in e)e.hasOwnProperty(n)&&t.call(r,e[n],n)}var ay=e=>ry.und(e)?[]:ry.arr(e)?e:[e];function sy(e,t){if(e.size){const r=Array.from(e);e.clear(),oy(r,t)}}var ly,cy,dy=(e,...t)=>sy(e,(e=>e(...t))),uy=()=>"undefined"==typeof window||!window.navigator||/ServerSideRendering|^Deno\//.test(window.navigator.userAgent),fy=null,hy=!1,py=ty,gy=e=>{e.to&&(cy=e.to),e.now&&(Bv.now=e.now),void 0!==e.colors&&(fy=e.colors),null!=e.skipAnimation&&(hy=e.skipAnimation),e.createStringInterpolator&&(ly=e.createStringInterpolator),e.requestAnimationFrame&&Bv.use(e.requestAnimationFrame),e.batchedUpdates&&(Bv.batchedUpdates=e.batchedUpdates),e.willAdvance&&(py=e.willAdvance),e.frameLoop&&(Bv.frameLoop=e.frameLoop)},my=new Set,by=[],vy=[],yy=0,xy={get idle(){return!my.size&&!by.length},start(e){yy>e.priority?(my.add(e),Bv.onStart(wy)):($y(e),Bv(Sy))},advance:Sy,sort(e){if(yy)Bv.onFrame((()=>xy.sort(e)));else{const t=by.indexOf(e);~t&&(by.splice(t,1),Cy(e))}},clear(){by=[],my.clear()}};function wy(){my.forEach($y),my.clear(),Bv(Sy)}function $y(e){by.includes(e)||Cy(e)}function Cy(e){by.splice(function(e,t){const r=e.findIndex(t);return r<0?e.length:r}(by,(t=>t.priority>e.priority)),0,e)}function Sy(e){const t=vy;for(let r=0;r<by.length;r++){const n=by[r];yy=n.priority,n.idle||(py(n),n.advance(e),n.idle||t.push(n))}return yy=0,(vy=by).length=0,(by=t).length>0}var Dy="[-+]?\\d*\\.?\\d+",ky=Dy+"%";function Ey(...e){return"\\(\\s*("+e.join(")\\s*,\\s*(")+")\\s*\\)"}var _y=new RegExp("rgb"+Ey(Dy,Dy,Dy)),Oy=new RegExp("rgba"+Ey(Dy,Dy,Dy,Dy)),Fy=new RegExp("hsl"+Ey(Dy,ky,ky)),Ty=new RegExp("hsla"+Ey(Dy,ky,ky,Dy)),Iy=/^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,My=/^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,Ay=/^#([0-9a-fA-F]{6})$/,jy=/^#([0-9a-fA-F]{8})$/;function By(e,t,r){return r<0&&(r+=1),r>1&&(r-=1),r<1/6?e+6*(t-e)*r:r<.5?t:r<2/3?e+(t-e)*(2/3-r)*6:e}function Ry(e,t,r){const n=r<.5?r*(1+t):r+t-r*t,o=2*r-n,i=By(o,n,e+1/3),a=By(o,n,e),s=By(o,n,e-1/3);return Math.round(255*i)<<24|Math.round(255*a)<<16|Math.round(255*s)<<8}function zy(e){const t=parseInt(e,10);return t<0?0:t>255?255:t}function Py(e){return(parseFloat(e)%360+360)%360/360}function Ly(e){const t=parseFloat(e);return t<0?0:t>1?255:Math.round(255*t)}function Ny(e){const t=parseFloat(e);return t<0?0:t>100?1:t/100}function Hy(e){let t=function(e){let t;return"number"==typeof e?e>>>0===e&&e>=0&&e<=4294967295?e:null:(t=Ay.exec(e))?parseInt(t[1]+"ff",16)>>>0:fy&&void 0!==fy[e]?fy[e]:(t=_y.exec(e))?(zy(t[1])<<24|zy(t[2])<<16|zy(t[3])<<8|255)>>>0:(t=Oy.exec(e))?(zy(t[1])<<24|zy(t[2])<<16|zy(t[3])<<8|Ly(t[4]))>>>0:(t=Iy.exec(e))?parseInt(t[1]+t[1]+t[2]+t[2]+t[3]+t[3]+"ff",16)>>>0:(t=jy.exec(e))?parseInt(t[1],16)>>>0:(t=My.exec(e))?parseInt(t[1]+t[1]+t[2]+t[2]+t[3]+t[3]+t[4]+t[4],16)>>>0:(t=Fy.exec(e))?(255|Ry(Py(t[1]),Ny(t[2]),Ny(t[3])))>>>0:(t=Ty.exec(e))?(Ry(Py(t[1]),Ny(t[2]),Ny(t[3]))|Ly(t[4]))>>>0:null}(e);if(null===t)return e;t=t||0;return`rgba(${(4278190080&t)>>>24}, ${(16711680&t)>>>16}, ${(65280&t)>>>8}, ${(255&t)/255})`}var Wy=(e,t,r)=>{if(ry.fun(e))return e;if(ry.arr(e))return Wy({range:e,output:t,extrapolate:r});if(ry.str(e.output[0]))return ly(e);const n=e,o=n.output,i=n.range||[0,1],a=n.extrapolateLeft||n.extrapolate||"extend",s=n.extrapolateRight||n.extrapolate||"extend",l=n.easing||(e=>e);return e=>{const t=function(e,t){for(var r=1;r<t.length-1&&!(t[r]>=e);++r);return r-1}(e,i);return function(e,t,r,n,o,i,a,s,l){let c=l?l(e):e;if(c<t){if("identity"===a)return c;"clamp"===a&&(c=t)}if(c>r){if("identity"===s)return c;"clamp"===s&&(c=r)}if(n===o)return n;if(t===r)return e<=t?n:o;t===-1/0?c=-c:r===1/0?c-=t:c=(c-t)/(r-t);c=i(c),n===-1/0?c=-c:o===1/0?c+=n:c=c*(o-n)+n;return c}(e,i[t],i[t+1],o[t],o[t+1],l,a,s,n.map)}};var Yy=1.70158,Vy=1.525*Yy,Uy=Yy+1,Ky=2*Math.PI/3,qy=2*Math.PI/4.5,Gy=e=>{const t=7.5625,r=2.75;return e<1/r?t*e*e:e<2/r?t*(e-=1.5/r)*e+.75:e<2.5/r?t*(e-=2.25/r)*e+.9375:t*(e-=2.625/r)*e+.984375},Qy={linear:e=>e,easeInQuad:e=>e*e,easeOutQuad:e=>1-(1-e)*(1-e),easeInOutQuad:e=>e<.5?2*e*e:1-Math.pow(-2*e+2,2)/2,easeInCubic:e=>e*e*e,easeOutCubic:e=>1-Math.pow(1-e,3),easeInOutCubic:e=>e<.5?4*e*e*e:1-Math.pow(-2*e+2,3)/2,easeInQuart:e=>e*e*e*e,easeOutQuart:e=>1-Math.pow(1-e,4),easeInOutQuart:e=>e<.5?8*e*e*e*e:1-Math.pow(-2*e+2,4)/2,easeInQuint:e=>e*e*e*e*e,easeOutQuint:e=>1-Math.pow(1-e,5),easeInOutQuint:e=>e<.5?16*e*e*e*e*e:1-Math.pow(-2*e+2,5)/2,easeInSine:e=>1-Math.cos(e*Math.PI/2),easeOutSine:e=>Math.sin(e*Math.PI/2),easeInOutSine:e=>-(Math.cos(Math.PI*e)-1)/2,easeInExpo:e=>0===e?0:Math.pow(2,10*e-10),easeOutExpo:e=>1===e?1:1-Math.pow(2,-10*e),easeInOutExpo:e=>0===e?0:1===e?1:e<.5?Math.pow(2,20*e-10)/2:(2-Math.pow(2,-20*e+10))/2,easeInCirc:e=>1-Math.sqrt(1-Math.pow(e,2)),easeOutCirc:e=>Math.sqrt(1-Math.pow(e-1,2)),easeInOutCirc:e=>e<.5?(1-Math.sqrt(1-Math.pow(2*e,2)))/2:(Math.sqrt(1-Math.pow(-2*e+2,2))+1)/2,easeInBack:e=>Uy*e*e*e-Yy*e*e,easeOutBack:e=>1+Uy*Math.pow(e-1,3)+Yy*Math.pow(e-1,2),easeInOutBack:e=>e<.5?Math.pow(2*e,2)*(7.189819*e-Vy)/2:(Math.pow(2*e-2,2)*((Vy+1)*(2*e-2)+Vy)+2)/2,easeInElastic:e=>0===e?0:1===e?1:-Math.pow(2,10*e-10)*Math.sin((10*e-10.75)*Ky),easeOutElastic:e=>0===e?0:1===e?1:Math.pow(2,-10*e)*Math.sin((10*e-.75)*Ky)+1,easeInOutElastic:e=>0===e?0:1===e?1:e<.5?-Math.pow(2,20*e-10)*Math.sin((20*e-11.125)*qy)/2:Math.pow(2,-20*e+10)*Math.sin((20*e-11.125)*qy)/2+1,easeInBounce:e=>1-Gy(1-e),easeOutBounce:Gy,easeInOutBounce:e=>e<.5?(1-Gy(1-2*e))/2:(1+Gy(2*e-1))/2,steps:(e,t="end")=>r=>{const n=(r="end"===t?Math.min(r,.999):Math.max(r,.001))*e,o="end"===t?Math.floor(n):Math.ceil(n);return i=0,a=1,s=o/e,Math.min(Math.max(s,i),a);var i,a,s}},Zy=Symbol.for("FluidValue.get"),Xy=Symbol.for("FluidValue.observers"),Jy=e=>Boolean(e&&e[Zy]),ex=e=>e&&e[Zy]?e[Zy]():e,tx=e=>e[Xy]||null;function rx(e,t){const r=e[Xy];r&&r.forEach((e=>{!function(e,t){e.eventObserved?e.eventObserved(t):e(t)}(e,t)}))}var nx=class{constructor(e){if(!e&&!(e=this.get))throw Error("Unknown getter");ox(this,e)}},ox=(e,t)=>lx(e,Zy,t);function ix(e,t){if(e[Zy]){let r=e[Xy];r||lx(e,Xy,r=new Set),r.has(t)||(r.add(t),e.observerAdded&&e.observerAdded(r.size,t))}return t}function ax(e,t){const r=e[Xy];if(r&&r.has(t)){const n=r.size-1;n?r.delete(t):e[Xy]=null,e.observerRemoved&&e.observerRemoved(n,t)}}var sx,lx=(e,t,r)=>Object.defineProperty(e,t,{value:r,writable:!0,configurable:!0}),cx=/[+\-]?(?:0|[1-9]\d*)(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,dx=/(#(?:[0-9a-f]{2}){2,4}|(#[0-9a-f]{3})|(rgb|hsl)a?\((-?\d+%?[,\s]+){2,3}\s*[\d\.]+%?\))/gi,ux=new RegExp(`(${cx.source})(%|[a-z]+)`,"i"),fx=/rgba\(([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+)\)/gi,hx=/var\((--[a-zA-Z0-9-_]+),? ?([a-zA-Z0-9 ()%#.,-]+)?\)/,px=e=>{const[t,r]=gx(e);if(!t||uy())return e;const n=window.getComputedStyle(document.documentElement).getPropertyValue(t);if(n)return n.trim();if(r&&r.startsWith("--")){const t=window.getComputedStyle(document.documentElement).getPropertyValue(r);return t||e}return r&&hx.test(r)?px(r):r||e},gx=e=>{const t=hx.exec(e);if(!t)return[,];const[,r,n]=t;return[r,n]},mx=(e,t,r,n,o)=>`rgba(${Math.round(t)}, ${Math.round(r)}, ${Math.round(n)}, ${o})`,bx=e=>{sx||(sx=fy?new RegExp(`(${Object.keys(fy).join("|")})(?!\\w)`,"g"):/^\b$/);const t=e.output.map((e=>ex(e).replace(hx,px).replace(dx,Hy).replace(sx,Hy))),r=t.map((e=>e.match(cx).map(Number))),n=r[0].map(((e,t)=>r.map((e=>{if(!(t in e))throw Error('The arity of each "output" value must be equal');return e[t]})))),o=n.map((t=>Wy({...e,output:t})));return e=>{const r=!ux.test(t[0])&&t.find((e=>ux.test(e)))?.replace(cx,"");let n=0;return t[0].replace(cx,(()=>`${o[n++](e)}${r||""}`)).replace(fx,mx)}},vx="react-spring: ",yx=e=>{const t=e;let r=!1;if("function"!=typeof t)throw new TypeError(`${vx}once requires a function parameter`);return(...e)=>{r||(t(...e),r=!0)}},xx=yx(console.warn);var wx=yx(console.warn);function $x(e){return ry.str(e)&&("#"==e[0]||/\d/.test(e)||!uy()&&hx.test(e)||e in(fy||{}))}var Cx=uy()?c:p;function Sx(){const e=g()[1],t=(()=>{const e=s(!1);return Cx((()=>(e.current=!0,()=>{e.current=!1})),[]),e})();return()=>{t.current&&e(Math.random())}}var Dx=e=>c(e,kx),kx=[];function Ex(e){const t=s(void 0);return c((()=>{t.current=e})),t.current}var _x=Symbol.for("Animated:node"),Ox=e=>e&&e[_x],Fx=(e,t)=>((e,t,r)=>Object.defineProperty(e,t,{value:r,writable:!0,configurable:!0}))(e,_x,t),Tx=e=>e&&e[_x]&&e[_x].getPayload(),Ix=class{constructor(){Fx(this,this)}getPayload(){return this.payload||[]}},Mx=class e extends Ix{constructor(e){super(),this._value=e,this.done=!0,this.durationProgress=0,ry.num(this._value)&&(this.lastPosition=this._value)}static create(t){return new e(t)}getPayload(){return[this]}getValue(){return this._value}setValue(e,t){return ry.num(e)&&(this.lastPosition=e,t&&(e=Math.round(e/t)*t,this.done&&(this.lastPosition=e))),this._value!==e&&(this._value=e,!0)}reset(){const{done:e}=this;this.done=!1,ry.num(this._value)&&(this.elapsedTime=0,this.durationProgress=0,this.lastPosition=this._value,e&&(this.lastVelocity=null),this.v0=null)}},Ax=class e extends Mx{constructor(e){super(0),this._string=null,this._toString=Wy({output:[e,e]})}static create(t){return new e(t)}getValue(){const e=this._string;return null==e?this._string=this._toString(this._value):e}setValue(e){if(ry.str(e)){if(e==this._string)return!1;this._string=e,this._value=1}else{if(!super.setValue(e))return!1;this._string=null}return!0}reset(e){e&&(this._toString=Wy({output:[this.getValue(),e]})),this._value=0,super.reset()}},jx={dependencies:null},Bx=class extends Ix{constructor(e){super(),this.source=e,this.setValue(e)}getValue(e){const t={};return iy(this.source,((r,n)=>{var o;(o=r)&&o[_x]===o?t[n]=r.getValue(e):Jy(r)?t[n]=ex(r):e||(t[n]=r)})),t}setValue(e){this.source=e,this.payload=this._makePayload(e)}reset(){this.payload&&oy(this.payload,(e=>e.reset()))}_makePayload(e){if(e){const t=new Set;return iy(e,this._addToPayload,t),Array.from(t)}}_addToPayload(e){jx.dependencies&&Jy(e)&&jx.dependencies.add(e);const t=Tx(e);t&&oy(t,(e=>this.add(e)))}},Rx=class e extends Bx{constructor(e){super(e)}static create(t){return new e(t)}getValue(){return this.source.map((e=>e.getValue()))}setValue(e){const t=this.getPayload();return e.length==t.length?t.map(((t,r)=>t.setValue(e[r]))).some(Boolean):(super.setValue(e.map(zx)),!0)}};function zx(e){return($x(e)?Ax:Mx).create(e)}function Px(e){const t=Ox(e);return t?t.constructor:ry.arr(e)?Rx:$x(e)?Ax:Mx}var Lx=(e,t)=>{const r=!ry.fun(e)||e.prototype&&e.prototype.isReactComponent;return u(((o,i)=>{const a=s(null),l=r&&d((e=>{a.current=function(e,t){e&&(ry.fun(e)?e(t):e.current=t);return t}(i,e)}),[i]),[u,f]=function(e,t){const r=new Set;jx.dependencies=r,e.style&&(e={...e,style:t.createAnimatedStyle(e.style)});return e=new Bx(e),jx.dependencies=null,[e,r]}(o,t),h=Sx(),p=()=>{const e=a.current;if(r&&!e)return;!1===(!!e&&t.applyAnimatedValues(e,u.getValue(!0)))&&h()},g=new Nx(p,f),m=s(void 0);Cx((()=>(m.current=g,oy(f,(e=>ix(e,g))),()=>{m.current&&(oy(m.current.deps,(e=>ax(e,m.current))),Bv.cancel(m.current.update))}))),c(p,[]),Dx((()=>()=>{const e=m.current;oy(e.deps,(t=>ax(t,e)))}));const b=t.getComponentProps(u.getValue());return n.createElement(e,{...b,ref:l})}))},Nx=class{constructor(e,t){this.update=e,this.deps=t}eventObserved(e){"change"==e.type&&Bv.write(this.update)}};var Hx=Symbol.for("AnimatedComponent"),Wx=e=>ry.str(e)?e:e&&ry.str(e.displayName)?e.displayName:ry.fun(e)&&e.name||null;function Yx(e,...t){return ry.fun(e)?e(...t):e}var Vx=(e,t)=>!0===e||!!(t&&e&&(ry.fun(e)?e(t):ay(e).includes(t))),Ux=(e,t)=>ry.obj(e)?t&&e[t]:e,Kx=(e,t)=>!0===e.default?e[t]:e.default?e.default[t]:void 0,qx=e=>e,Gx=(e,t=qx)=>{let r=Qx;e.default&&!0!==e.default&&(e=e.default,r=Object.keys(e));const n={};for(const o of r){const r=t(e[o],o);ry.und(r)||(n[o]=r)}return n},Qx=["config","onProps","onStart","onChange","onPause","onResume","onRest"],Zx={config:1,from:1,to:1,ref:1,loop:1,reset:1,pause:1,cancel:1,reverse:1,immediate:1,default:1,delay:1,onProps:1,onStart:1,onChange:1,onPause:1,onResume:1,onRest:1,onResolve:1,items:1,trail:1,sort:1,expires:1,initial:1,enter:1,update:1,leave:1,children:1,onDestroyed:1,keys:1,callId:1,parentId:1};function Xx(e){const t=function(e){const t={};let r=0;if(iy(e,((e,n)=>{Zx[n]||(t[n]=e,r++)})),r)return t}(e);if(t){const r={to:t};return iy(e,((e,n)=>n in t||(r[n]=e))),r}return{...e}}function Jx(e){return e=ex(e),ry.arr(e)?e.map(Jx):$x(e)?ey.createStringInterpolator({range:[0,1],output:[e,e]})(1):e}function ew(e){return ry.fun(e)||ry.arr(e)&&ry.obj(e[0])}var tw={tension:170,friction:26,mass:1,damping:1,easing:Qy.linear,clamp:!1},rw=class{constructor(){this.velocity=0,Object.assign(this,tw)}};function nw(e,t){if(ry.und(t.decay)){const r=!ry.und(t.tension)||!ry.und(t.friction);!r&&ry.und(t.frequency)&&ry.und(t.damping)&&ry.und(t.mass)||(e.duration=void 0,e.decay=void 0),r&&(e.frequency=void 0)}else e.duration=void 0}var ow=[],iw=class{constructor(){this.changed=!1,this.values=ow,this.toValues=null,this.fromValues=ow,this.config=new rw,this.immediate=!1}};function aw(e,{key:t,props:r,defaultProps:n,state:o,actions:i}){return new Promise(((a,s)=>{let l,c,d=Vx(r.cancel??n?.cancel,t);if(d)h();else{ry.und(r.pause)||(o.paused=Vx(r.pause,t));let e=n?.pause;!0!==e&&(e=o.paused||Vx(e,t)),l=Yx(r.delay||0,t),e?(o.resumeQueue.add(f),i.pause()):(i.resume(),f())}function u(){o.resumeQueue.add(f),o.timeouts.delete(c),c.cancel(),l=c.time-Bv.now()}function f(){l>0&&!ey.skipAnimation?(o.delayed=!0,c=Bv.setTimeout(h,l),o.pauseQueue.add(u),o.timeouts.add(c)):h()}function h(){o.delayed&&(o.delayed=!1),o.pauseQueue.delete(u),o.timeouts.delete(c),e<=(o.cancelId||0)&&(d=!0);try{i.start({...r,callId:e,cancel:d},a)}catch(e){s(e)}}}))}var sw=(e,t)=>1==t.length?t[0]:t.some((e=>e.cancelled))?dw(e.get()):t.every((e=>e.noop))?lw(e.get()):cw(e.get(),t.every((e=>e.finished))),lw=e=>({value:e,noop:!0,finished:!0,cancelled:!1}),cw=(e,t,r=!1)=>({value:e,finished:t,cancelled:r}),dw=e=>({value:e,cancelled:!0,finished:!1});function uw(e,t,r,n){const{callId:o,parentId:i,onRest:a}=t,{asyncTo:s,promise:l}=r;return i||e!==s||t.reset?r.promise=(async()=>{r.asyncId=o,r.asyncTo=e;const c=Gx(t,((e,t)=>"onRest"===t?void 0:e));let d,u;const f=new Promise(((e,t)=>(d=e,u=t))),h=e=>{const t=o<=(r.cancelId||0)&&dw(n)||o!==r.asyncId&&cw(n,!1);if(t)throw e.result=t,u(e),e},p=(e,t)=>{const i=new hw,a=new pw;return(async()=>{if(ey.skipAnimation)throw fw(r),a.result=cw(n,!1),u(a),a;h(i);const s=ry.obj(e)?{...e}:{...t,to:e};s.parentId=o,iy(c,((e,t)=>{ry.und(s[t])&&(s[t]=e)}));const l=await n.start(s);return h(i),r.paused&&await new Promise((e=>{r.resumeQueue.add(e)})),l})()};let g;if(ey.skipAnimation)return fw(r),cw(n,!1);try{let t;t=ry.arr(e)?(async e=>{for(const t of e)await p(t)})(e):Promise.resolve(e(p,n.stop.bind(n))),await Promise.all([t.then(d),f]),g=cw(n.get(),!0,!1)}catch(e){if(e instanceof hw)g=e.result;else{if(!(e instanceof pw))throw e;g=e.result}}finally{o==r.asyncId&&(r.asyncId=i,r.asyncTo=i?s:void 0,r.promise=i?l:void 0)}return ry.fun(a)&&Bv.batchedUpdates((()=>{a(g,n,n.item)})),g})():l}function fw(e,t){sy(e.timeouts,(e=>e.cancel())),e.pauseQueue.clear(),e.resumeQueue.clear(),e.asyncId=e.asyncTo=e.promise=void 0,t&&(e.cancelId=t)}var hw=class extends Error{constructor(){super("An async animation has been interrupted. You see this error because you forgot to use `await` or `.catch(...)` on its returned promise.")}},pw=class extends Error{constructor(){super("SkipAnimationSignal")}},gw=e=>e instanceof bw,mw=1,bw=class extends nx{constructor(){super(...arguments),this.id=mw++,this._priority=0}get priority(){return this._priority}set priority(e){this._priority!=e&&(this._priority=e,this._onPriorityChange(e))}get(){const e=Ox(this);return e&&e.getValue()}to(...e){return ey.to(this,e)}interpolate(...e){return xx(`${vx}The "interpolate" function is deprecated in v9 (use "to" instead)`),ey.to(this,e)}toJSON(){return this.get()}observerAdded(e){1==e&&this._attach()}observerRemoved(e){0==e&&this._detach()}_attach(){}_detach(){}_onChange(e,t=!1){rx(this,{type:"change",parent:this,value:e,idle:t})}_onPriorityChange(e){this.idle||xy.sort(this),rx(this,{type:"priority",parent:this,priority:e})}},vw=Symbol.for("SpringPhase"),yw=e=>(1&e[vw])>0,xw=e=>(2&e[vw])>0,ww=e=>(4&e[vw])>0,$w=(e,t)=>t?e[vw]|=3:e[vw]&=-3,Cw=(e,t)=>t?e[vw]|=4:e[vw]&=-5,Sw=class extends bw{constructor(e,t){if(super(),this.animation=new iw,this.defaultProps={},this._state={paused:!1,delayed:!1,pauseQueue:new Set,resumeQueue:new Set,timeouts:new Set},this._pendingCalls=new Set,this._lastCallId=0,this._lastToId=0,this._memoizedDuration=0,!ry.und(e)||!ry.und(t)){const r=ry.obj(e)?{...e}:{...t,from:e};ry.und(r.default)&&(r.default=!0),this.start(r)}}get idle(){return!(xw(this)||this._state.asyncTo)||ww(this)}get goal(){return ex(this.animation.to)}get velocity(){const e=Ox(this);return e instanceof Mx?e.lastVelocity||0:e.getPayload().map((e=>e.lastVelocity||0))}get hasAnimated(){return yw(this)}get isAnimating(){return xw(this)}get isPaused(){return ww(this)}get isDelayed(){return this._state.delayed}advance(e){let t=!0,r=!1;const n=this.animation;let{toValues:o}=n;const{config:i}=n,a=Tx(n.to);!a&&Jy(n.to)&&(o=ay(ex(n.to))),n.values.forEach(((s,l)=>{if(s.done)return;const c=s.constructor==Ax?1:a?a[l].lastPosition:o[l];let d=n.immediate,u=c;if(!d){if(u=s.lastPosition,i.tension<=0)return void(s.done=!0);let t=s.elapsedTime+=e;const r=n.fromValues[l],o=null!=s.v0?s.v0:s.v0=ry.arr(i.velocity)?i.velocity[l]:i.velocity;let a;const f=i.precision||(r==c?.005:Math.min(1,.001*Math.abs(c-r)));if(ry.und(i.duration))if(i.decay){const e=!0===i.decay?.998:i.decay,n=Math.exp(-(1-e)*t);u=r+o/(1-e)*(1-n),d=Math.abs(s.lastPosition-u)<=f,a=o*n}else{a=null==s.lastVelocity?o:s.lastVelocity;const t=i.restVelocity||f/10,n=i.clamp?0:i.bounce,l=!ry.und(n),h=r==c?s.v0>0:r<c;let p,g=!1;const m=1,b=Math.ceil(e/m);for(let e=0;e<b&&(p=Math.abs(a)>t,p||(d=Math.abs(c-u)<=f,!d));++e){l&&(g=u==c||u>c==h,g&&(a=-a*n,u=c));a+=(1e-6*-i.tension*(u-c)+.001*-i.friction*a)/i.mass*m,u+=a*m}}else{let n=1;i.duration>0&&(this._memoizedDuration!==i.duration&&(this._memoizedDuration=i.duration,s.durationProgress>0&&(s.elapsedTime=i.duration*s.durationProgress,t=s.elapsedTime+=e)),n=(i.progress||0)+t/this._memoizedDuration,n=n>1?1:n<0?0:n,s.durationProgress=n),u=r+i.easing(n)*(c-r),a=(u-s.lastPosition)/e,d=1==n}s.lastVelocity=a,Number.isNaN(u)&&(console.warn("Got NaN while animating:",this),d=!0)}a&&!a[l].done&&(d=!1),d?s.done=!0:t=!1,s.setValue(u,i.round)&&(r=!0)}));const s=Ox(this),l=s.getValue();if(t){const e=ex(n.to);l===e&&!r||i.decay?r&&i.decay&&this._onChange(l):(s.setValue(e),this._onChange(e)),this._stop()}else r&&this._onChange(l)}set(e){return Bv.batchedUpdates((()=>{this._stop(),this._focus(e),this._set(e)})),this}pause(){this._update({pause:!0})}resume(){this._update({pause:!1})}finish(){if(xw(this)){const{to:e,config:t}=this.animation;Bv.batchedUpdates((()=>{this._onStart(),t.decay||this._set(e,!1),this._stop()}))}return this}update(e){return(this.queue||(this.queue=[])).push(e),this}start(e,t){let r;return ry.und(e)?(r=this.queue||[],this.queue=[]):r=[ry.obj(e)?e:{...t,to:e}],Promise.all(r.map((e=>this._update(e)))).then((e=>sw(this,e)))}stop(e){const{to:t}=this.animation;return this._focus(this.get()),fw(this._state,e&&this._lastCallId),Bv.batchedUpdates((()=>this._stop(t,e))),this}reset(){this._update({reset:!0})}eventObserved(e){"change"==e.type?this._start():"priority"==e.type&&(this.priority=e.priority+1)}_prepareNode(e){const t=this.key||"";let{to:r,from:n}=e;r=ry.obj(r)?r[t]:r,(null==r||ew(r))&&(r=void 0),n=ry.obj(n)?n[t]:n,null==n&&(n=void 0);const o={to:r,from:n};return yw(this)||(e.reverse&&([r,n]=[n,r]),n=ex(n),ry.und(n)?Ox(this)||this._set(r):this._set(n)),o}_update({...e},t){const{key:r,defaultProps:n}=this;e.default&&Object.assign(n,Gx(e,((e,t)=>/^on/.test(t)?Ux(e,r):e))),Tw(this,e,"onProps"),Iw(this,"onProps",e,this);const o=this._prepareNode(e);if(Object.isFrozen(this))throw Error("Cannot animate a `SpringValue` object that is frozen. Did you forget to pass your component to `animated(...)` before animating its props?");const i=this._state;return aw(++this._lastCallId,{key:r,props:e,defaultProps:n,state:i,actions:{pause:()=>{ww(this)||(Cw(this,!0),dy(i.pauseQueue),Iw(this,"onPause",cw(this,Dw(this,this.animation.to)),this))},resume:()=>{ww(this)&&(Cw(this,!1),xw(this)&&this._resume(),dy(i.resumeQueue),Iw(this,"onResume",cw(this,Dw(this,this.animation.to)),this))},start:this._merge.bind(this,o)}}).then((r=>{if(e.loop&&r.finished&&(!t||!r.noop)){const t=kw(e);if(t)return this._update(t,!0)}return r}))}_merge(e,t,r){if(t.cancel)return this.stop(!0),r(dw(this));const n=!ry.und(e.to),o=!ry.und(e.from);if(n||o){if(!(t.callId>this._lastToId))return r(dw(this));this._lastToId=t.callId}const{key:i,defaultProps:a,animation:s}=this,{to:l,from:c}=s;let{to:d=l,from:u=c}=e;!o||n||t.default&&!ry.und(d)||(d=u),t.reverse&&([d,u]=[u,d]);const f=!ny(u,c);f&&(s.from=u),u=ex(u);const h=!ny(d,l);h&&this._focus(d);const p=ew(t.to),{config:g}=s,{decay:m,velocity:b}=g;(n||o)&&(g.velocity=0),t.config&&!p&&function(e,t,r){r&&(nw(r={...r},t),t={...r,...t}),nw(e,t),Object.assign(e,t);for(const t in tw)null==e[t]&&(e[t]=tw[t]);let{frequency:n,damping:o}=e;const{mass:i}=e;ry.und(n)||(n<.01&&(n=.01),o<0&&(o=0),e.tension=Math.pow(2*Math.PI/n,2)*i,e.friction=4*Math.PI*o*i/n)}(g,Yx(t.config,i),t.config!==a.config?Yx(a.config,i):void 0);let v=Ox(this);if(!v||ry.und(d))return r(cw(this,!0));const y=ry.und(t.reset)?o&&!t.default:!ry.und(u)&&Vx(t.reset,i),x=y?u:this.get(),w=Jx(d),$=ry.num(w)||ry.arr(w)||$x(w),C=!p&&(!$||Vx(a.immediate||t.immediate,i));if(h){const e=Px(d);if(e!==v.constructor){if(!C)throw Error(`Cannot animate between ${v.constructor.name} and ${e.name}, as the "to" prop suggests`);v=this._set(w)}}const S=v.constructor;let D=Jy(d),k=!1;if(!D){const e=y||!yw(this)&&f;(h||e)&&(k=ny(Jx(x),w),D=!k),(ny(s.immediate,C)||C)&&ny(g.decay,m)&&ny(g.velocity,b)||(D=!0)}if(k&&xw(this)&&(s.changed&&!y?D=!0:D||this._stop(l)),!p&&((D||Jy(l))&&(s.values=v.getPayload(),s.toValues=Jy(d)?null:S==Ax?[1]:ay(w)),s.immediate!=C&&(s.immediate=C,C||y||this._set(l)),D)){const{onRest:e}=s;oy(Fw,(e=>Tw(this,t,e)));const n=cw(this,Dw(this,l));dy(this._pendingCalls,n),this._pendingCalls.add(r),s.changed&&Bv.batchedUpdates((()=>{s.changed=!y,e?.(n,this),y?Yx(a.onRest,n):s.onStart?.(n,this)}))}y&&this._set(x),p?r(uw(t.to,t,this._state,this)):D?this._start():xw(this)&&!h?this._pendingCalls.add(r):r(lw(x))}_focus(e){const t=this.animation;e!==t.to&&(tx(this)&&this._detach(),t.to=e,tx(this)&&this._attach())}_attach(){let e=0;const{to:t}=this.animation;Jy(t)&&(ix(t,this),gw(t)&&(e=t.priority+1)),this.priority=e}_detach(){const{to:e}=this.animation;Jy(e)&&ax(e,this)}_set(e,t=!0){const r=ex(e);if(!ry.und(r)){const e=Ox(this);if(!e||!ny(r,e.getValue())){const n=Px(r);e&&e.constructor==n?e.setValue(r):Fx(this,n.create(r)),e&&Bv.batchedUpdates((()=>{this._onChange(r,t)}))}}return Ox(this)}_onStart(){const e=this.animation;e.changed||(e.changed=!0,Iw(this,"onStart",cw(this,Dw(this,e.to)),this))}_onChange(e,t){t||(this._onStart(),Yx(this.animation.onChange,e,this)),Yx(this.defaultProps.onChange,e,this),super._onChange(e,t)}_start(){const e=this.animation;Ox(this).reset(ex(e.to)),e.immediate||(e.fromValues=e.values.map((e=>e.lastPosition))),xw(this)||($w(this,!0),ww(this)||this._resume())}_resume(){ey.skipAnimation?this.finish():xy.start(this)}_stop(e,t){if(xw(this)){$w(this,!1);const r=this.animation;oy(r.values,(e=>{e.done=!0})),r.toValues&&(r.onChange=r.onPause=r.onResume=void 0),rx(this,{type:"idle",parent:this});const n=t?dw(this.get()):cw(this.get(),Dw(this,e??r.to));dy(this._pendingCalls,n),r.changed&&(r.changed=!1,Iw(this,"onRest",n,this))}}};function Dw(e,t){const r=Jx(t);return ny(Jx(e.get()),r)}function kw(e,t=e.loop,r=e.to){const n=Yx(t);if(n){const o=!0!==n&&Xx(n),i=(o||e).reverse,a=!o||o.reset;return Ew({...e,loop:t,default:!1,pause:void 0,to:!i||ew(r)?r:void 0,from:a?e.from:void 0,reset:a,...o})}}function Ew(e){const{to:t,from:r}=e=Xx(e),n=new Set;return ry.obj(t)&&Ow(t,n),ry.obj(r)&&Ow(r,n),e.keys=n.size?Array.from(n):null,e}function _w(e){const t=Ew(e);return ry.und(t.default)&&(t.default=Gx(t)),t}function Ow(e,t){iy(e,((e,r)=>null!=e&&t.add(r)))}var Fw=["onStart","onRest","onChange","onPause","onResume"];function Tw(e,t,r){e.animation[r]=t[r]!==Kx(t,r)?Ux(t[r],e.key):void 0}function Iw(e,t,...r){e.animation[t]?.(...r),e.defaultProps[t]?.(...r)}var Mw=["onStart","onChange","onRest"],Aw=1,jw=class{constructor(e,t){this.id=Aw++,this.springs={},this.queue=[],this._lastAsyncId=0,this._active=new Set,this._changed=new Set,this._started=!1,this._state={paused:!1,pauseQueue:new Set,resumeQueue:new Set,timeouts:new Set},this._events={onStart:new Map,onChange:new Map,onRest:new Map},this._onFrame=this._onFrame.bind(this),t&&(this._flush=t),e&&this.start({default:!0,...e})}get idle(){return!this._state.asyncTo&&Object.values(this.springs).every((e=>e.idle&&!e.isDelayed&&!e.isPaused))}get item(){return this._item}set item(e){this._item=e}get(){const e={};return this.each(((t,r)=>e[r]=t.get())),e}set(e){for(const t in e){const r=e[t];ry.und(r)||this.springs[t].set(r)}}update(e){return e&&this.queue.push(Ew(e)),this}start(e){let{queue:t}=this;return e?t=ay(e).map(Ew):this.queue=[],this._flush?this._flush(this,t):(Hw(this,t),Bw(this,t))}stop(e,t){if(e!==!!e&&(t=e),t){const r=this.springs;oy(ay(t),(t=>r[t].stop(!!e)))}else fw(this._state,this._lastAsyncId),this.each((t=>t.stop(!!e)));return this}pause(e){if(ry.und(e))this.start({pause:!0});else{const t=this.springs;oy(ay(e),(e=>t[e].pause()))}return this}resume(e){if(ry.und(e))this.start({pause:!1});else{const t=this.springs;oy(ay(e),(e=>t[e].resume()))}return this}each(e){iy(this.springs,e)}_onFrame(){const{onStart:e,onChange:t,onRest:r}=this._events,n=this._active.size>0,o=this._changed.size>0;(n&&!this._started||o&&!this._started)&&(this._started=!0,sy(e,(([e,t])=>{t.value=this.get(),e(t,this,this._item)})));const i=!n&&this._started,a=o||i&&r.size?this.get():null;o&&t.size&&sy(t,(([e,t])=>{t.value=a,e(t,this,this._item)})),i&&(this._started=!1,sy(r,(([e,t])=>{t.value=a,e(t,this,this._item)})))}eventObserved(e){if("change"==e.type)this._changed.add(e.parent),e.idle||this._active.add(e.parent);else{if("idle"!=e.type)return;this._active.delete(e.parent)}Bv.onFrame(this._onFrame)}};function Bw(e,t){return Promise.all(t.map((t=>Rw(e,t)))).then((t=>sw(e,t)))}async function Rw(e,t,r){const{keys:n,to:o,from:i,loop:a,onRest:s,onResolve:l}=t,c=ry.obj(t.default)&&t.default;a&&(t.loop=!1),!1===o&&(t.to=null),!1===i&&(t.from=null);const d=ry.arr(o)||ry.fun(o)?o:void 0;d?(t.to=void 0,t.onRest=void 0,c&&(c.onRest=void 0)):oy(Mw,(r=>{const n=t[r];if(ry.fun(n)){const o=e._events[r];t[r]=({finished:e,cancelled:t})=>{const r=o.get(n);r?(e||(r.finished=!1),t&&(r.cancelled=!0)):o.set(n,{value:null,finished:e||!1,cancelled:t||!1})},c&&(c[r]=t[r])}}));const u=e._state;t.pause===!u.paused?(u.paused=t.pause,dy(t.pause?u.pauseQueue:u.resumeQueue)):u.paused&&(t.pause=!0);const f=(n||Object.keys(e.springs)).map((r=>e.springs[r].start(t))),h=!0===t.cancel||!0===Kx(t,"cancel");(d||h&&u.asyncId)&&f.push(aw(++e._lastAsyncId,{props:t,state:u,actions:{pause:ty,resume:ty,start(t,r){h?(fw(u,e._lastAsyncId),r(dw(e))):(t.onRest=s,r(uw(d,t,u,e)))}}})),u.paused&&await new Promise((e=>{u.resumeQueue.add(e)}));const p=sw(e,await Promise.all(f));if(a&&p.finished&&(!r||!p.noop)){const r=kw(t,a,o);if(r)return Hw(e,[r]),Rw(e,r,!0)}return l&&Bv.batchedUpdates((()=>l(p,e,e.item))),p}function zw(e,t){const r={...e.springs};return t&&oy(ay(t),(e=>{ry.und(e.keys)&&(e=Ew(e)),ry.obj(e.to)||(e={...e,to:void 0}),Nw(r,e,(e=>Lw(e)))})),Pw(e,r),r}function Pw(e,t){iy(t,((t,r)=>{e.springs[r]||(e.springs[r]=t,ix(t,e))}))}function Lw(e,t){const r=new Sw;return r.key=e,t&&ix(r,t),r}function Nw(e,t,r){t.keys&&oy(t.keys,(n=>{(e[n]||(e[n]=r(n)))._prepareNode(t)}))}function Hw(e,t){oy(t,(t=>{Nw(e.springs,t,(t=>Lw(t,e)))}))}var Ww=n.createContext({pause:!1,immediate:!1}),Yw=()=>{const e=[],t=function(t){wx(`${vx}Directly calling start instead of using the api object is deprecated in v9 (use ".start" instead), this will be removed in later 0.X.0 versions`);const n=[];return oy(e,((e,o)=>{if(ry.und(t))n.push(e.start());else{const i=r(t,e,o);i&&n.push(e.start(i))}})),n};t.current=e,t.add=function(t){e.includes(t)||e.push(t)},t.delete=function(t){const r=e.indexOf(t);~r&&e.splice(r,1)},t.pause=function(){return oy(e,(e=>e.pause(...arguments))),this},t.resume=function(){return oy(e,(e=>e.resume(...arguments))),this},t.set=function(t){oy(e,((e,r)=>{const n=ry.fun(t)?t(r,e):t;n&&e.set(n)}))},t.start=function(t){const r=[];return oy(e,((e,n)=>{if(ry.und(t))r.push(e.start());else{const o=this._getProps(t,e,n);o&&r.push(e.start(o))}})),r},t.stop=function(){return oy(e,(e=>e.stop(...arguments))),this},t.update=function(t){return oy(e,((e,r)=>e.update(this._getProps(t,e,r)))),this};const r=function(e,t,r){return ry.fun(e)?e(r,t):e};return t._getProps=r,t};function Vw(e,t){const r=ry.fun(e),[[n],o]=function(e,t,r){const n=ry.fun(t)&&t;n&&!r&&(r=[]);const o=a((()=>n||3==arguments.length?Yw():void 0),[]),i=s(0),l=Sx(),c=a((()=>({ctrls:[],queue:[],flush(e,t){const r=zw(e,t),n=i.current>0&&!c.queue.length&&!Object.keys(r).some((t=>!e.springs[t]));return n?Bw(e,t):new Promise((n=>{Pw(e,r),c.queue.push((()=>{n(Bw(e,t))})),l()}))}})),[]),d=s([...c.ctrls]),u=s([]),f=Ex(e)||0;function h(e,r){for(let o=e;o<r;o++){const e=d.current[o]||(d.current[o]=new jw(null,c.flush)),r=n?n(o,e):t[o];r&&(u.current[o]=_w(r))}}a((()=>{oy(d.current.slice(e,f),(e=>{!function(e,t){e.ref?.delete(e),t?.delete(e)}(e,o),e.stop(!0)})),d.current.length=e,h(f,e)}),[e]),a((()=>{h(0,Math.min(f,e))}),r);const p=d.current.map(((e,t)=>zw(e,u.current[t]))),g=b(Ww),m=Ex(g),v=g!==m&&function(e){for(const t in e)return!0;return!1}(g);Cx((()=>{i.current++,c.ctrls=d.current;const{queue:e}=c;e.length&&(c.queue=[],oy(e,(e=>e()))),oy(d.current,((e,t)=>{o?.add(e),v&&e.start({default:g});const r=u.current[t];r&&(function(e,t){t&&e.ref!==t&&(e.ref?.delete(e),t.add(e),e.ref=t)}(e,r.ref),e.ref?e.queue.push(r):e.start(r))}))})),Dx((()=>()=>{oy(c.ctrls,(e=>e.stop(!0)))}));const y=p.map((e=>({...e})));return o?[y,o]:y}(1,r?e:[e],r?t||[]:t);return r||2==arguments.length?[n,o]:n}var Uw=class extends bw{constructor(e,t){super(),this.source=e,this.idle=!0,this._active=new Set,this.calc=Wy(...t);const r=this._get(),n=Px(r);Fx(this,n.create(r))}advance(e){const t=this._get();ny(t,this.get())||(Ox(this).setValue(t),this._onChange(t,this.idle)),!this.idle&&qw(this._active)&&Gw(this)}_get(){const e=ry.arr(this.source)?this.source.map(ex):ay(ex(this.source));return this.calc(...e)}_start(){this.idle&&!qw(this._active)&&(this.idle=!1,oy(Tx(this),(e=>{e.done=!1})),ey.skipAnimation?(Bv.batchedUpdates((()=>this.advance())),Gw(this)):xy.start(this))}_attach(){let e=1;oy(ay(this.source),(t=>{Jy(t)&&ix(t,this),gw(t)&&(t.idle||this._active.add(t),e=Math.max(e,t.priority+1))})),this.priority=e,this._start()}_detach(){oy(ay(this.source),(e=>{Jy(e)&&ax(e,this)})),this._active.clear(),Gw(this)}eventObserved(e){"change"==e.type?e.idle?this.advance():(this._active.add(e.parent),this._start()):"idle"==e.type?this._active.delete(e.parent):"priority"==e.type&&(this.priority=ay(this.source).reduce(((e,t)=>Math.max(e,(gw(t)?t.priority:0)+1)),0))}};function Kw(e){return!1!==e.idle}function qw(e){return!e.size||Array.from(e).every(Kw)}function Gw(e){e.idle||(e.idle=!0,oy(Tx(e),(e=>{e.done=!0})),rx(e,{type:"idle",parent:e}))}ey.assign({createStringInterpolator:bx,to:(e,t)=>new Uw(e,t)});var Qw=/^--/;function Zw(e,t){return null==t||"boolean"==typeof t||""===t?"":"number"!=typeof t||0===t||Qw.test(e)||Jw.hasOwnProperty(e)&&Jw[e]?(""+t).trim():t+"px"}var Xw={};var Jw={animationIterationCount:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},e$=["Webkit","Ms","Moz","O"];Jw=Object.keys(Jw).reduce(((e,t)=>(e$.forEach((r=>e[((e,t)=>e+t.charAt(0).toUpperCase()+t.substring(1))(r,t)]=e[t])),e)),Jw);var t$=/^(matrix|translate|scale|rotate|skew)/,r$=/^(translate)/,n$=/^(rotate|skew)/,o$=(e,t)=>ry.num(e)&&0!==e?e+t:e,i$=(e,t)=>ry.arr(e)?e.every((e=>i$(e,t))):ry.num(e)?e===t:parseFloat(e)===t,a$=class extends Bx{constructor({x:e,y:t,z:r,...n}){const o=[],i=[];(e||t||r)&&(o.push([e||0,t||0,r||0]),i.push((e=>[`translate3d(${e.map((e=>o$(e,"px"))).join(",")})`,i$(e,0)]))),iy(n,((e,t)=>{if("transform"===t)o.push([e||""]),i.push((e=>[e,""===e]));else if(t$.test(t)){if(delete n[t],ry.und(e))return;const r=r$.test(t)?"px":n$.test(t)?"deg":"";o.push(ay(e)),i.push("rotate3d"===t?([e,t,n,o])=>[`rotate3d(${e},${t},${n},${o$(o,r)})`,i$(o,0)]:e=>[`${t}(${e.map((e=>o$(e,r))).join(",")})`,i$(e,t.startsWith("scale")?1:0)])}})),o.length&&(n.transform=new s$(o,i)),super(n)}},s$=class extends nx{constructor(e,t){super(),this.inputs=e,this.transforms=t,this._value=null}get(){return this._value||(this._value=this._get())}_get(){let e="",t=!0;return oy(this.inputs,((r,n)=>{const o=ex(r[0]),[i,a]=this.transforms[n](ry.arr(o)?o:r.map(ex));e+=" "+i,t=t&&a})),t?"none":e}observerAdded(e){1==e&&oy(this.inputs,(e=>oy(e,(e=>Jy(e)&&ix(e,this)))))}observerRemoved(e){0==e&&oy(this.inputs,(e=>oy(e,(e=>Jy(e)&&ax(e,this)))))}eventObserved(e){"change"==e.type&&(this._value=null),rx(this,e)}};ey.assign({batchedUpdates:A,createStringInterpolator:bx,colors:{transparent:0,aliceblue:4042850303,antiquewhite:4209760255,aqua:16777215,aquamarine:2147472639,azure:4043309055,beige:4126530815,bisque:4293182719,black:255,blanchedalmond:4293643775,blue:65535,blueviolet:2318131967,brown:2771004159,burlywood:3736635391,burntsienna:3934150143,cadetblue:1604231423,chartreuse:2147418367,chocolate:3530104575,coral:4286533887,cornflowerblue:1687547391,cornsilk:4294499583,crimson:3692313855,cyan:16777215,darkblue:35839,darkcyan:9145343,darkgoldenrod:3095792639,darkgray:2846468607,darkgreen:6553855,darkgrey:2846468607,darkkhaki:3182914559,darkmagenta:2332068863,darkolivegreen:1433087999,darkorange:4287365375,darkorchid:2570243327,darkred:2332033279,darksalmon:3918953215,darkseagreen:2411499519,darkslateblue:1211993087,darkslategray:793726975,darkslategrey:793726975,darkturquoise:13554175,darkviolet:2483082239,deeppink:4279538687,deepskyblue:12582911,dimgray:1768516095,dimgrey:1768516095,dodgerblue:512819199,firebrick:2988581631,floralwhite:4294635775,forestgreen:579543807,fuchsia:4278255615,gainsboro:3705462015,ghostwhite:4177068031,gold:4292280575,goldenrod:3668254975,gray:2155905279,green:8388863,greenyellow:2919182335,grey:2155905279,honeydew:4043305215,hotpink:4285117695,indianred:3445382399,indigo:1258324735,ivory:4294963455,khaki:4041641215,lavender:3873897215,lavenderblush:4293981695,lawngreen:2096890111,lemonchiffon:4294626815,lightblue:2916673279,lightcoral:4034953471,lightcyan:3774873599,lightgoldenrodyellow:4210742015,lightgray:3553874943,lightgreen:2431553791,lightgrey:3553874943,lightpink:4290167295,lightsalmon:4288707327,lightseagreen:548580095,lightskyblue:2278488831,lightslategray:2005441023,lightslategrey:2005441023,lightsteelblue:2965692159,lightyellow:4294959359,lime:16711935,limegreen:852308735,linen:4210091775,magenta:4278255615,maroon:2147483903,mediumaquamarine:1724754687,mediumblue:52735,mediumorchid:3126187007,mediumpurple:2473647103,mediumseagreen:1018393087,mediumslateblue:2070474495,mediumspringgreen:16423679,mediumturquoise:1221709055,mediumvioletred:3340076543,midnightblue:421097727,mintcream:4127193855,mistyrose:4293190143,moccasin:4293178879,navajowhite:4292783615,navy:33023,oldlace:4260751103,olive:2155872511,olivedrab:1804477439,orange:4289003775,orangered:4282712319,orchid:3664828159,palegoldenrod:4008225535,palegreen:2566625535,paleturquoise:2951671551,palevioletred:3681588223,papayawhip:4293907967,peachpuff:4292524543,peru:3448061951,pink:4290825215,plum:3718307327,powderblue:2967529215,purple:2147516671,rebeccapurple:1714657791,red:4278190335,rosybrown:3163525119,royalblue:1097458175,saddlebrown:2336560127,salmon:4202722047,sandybrown:4104413439,seagreen:780883967,seashell:4294307583,sienna:2689740287,silver:3233857791,skyblue:2278484991,slateblue:1784335871,slategray:1887473919,slategrey:1887473919,snow:4294638335,springgreen:16744447,steelblue:1182971135,tan:3535047935,teal:8421631,thistle:3636451583,tomato:4284696575,turquoise:1088475391,violet:4001558271,wheat:4125012991,white:4294967295,whitesmoke:4126537215,yellow:4294902015,yellowgreen:2597139199}});var l$=((e,{applyAnimatedValues:t=()=>!1,createAnimatedStyle:r=e=>new Bx(e),getComponentProps:n=e=>e}={})=>{const o={applyAnimatedValues:t,createAnimatedStyle:r,getComponentProps:n},i=e=>{const t=Wx(e)||"Anonymous";return(e=ry.str(e)?i[e]||(i[e]=Lx(e,o)):e[Hx]||(e[Hx]=Lx(e,o))).displayName=`Animated(${t})`,e};return iy(e,((t,r)=>{ry.arr(e)&&(r=Wx(t)),i[r]=i(t)})),{animated:i}})(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"],{applyAnimatedValues:function(e,t){if(!e.nodeType||!e.setAttribute)return!1;const r="filter"===e.nodeName||e.parentNode&&"filter"===e.parentNode.nodeName,{className:n,style:o,children:i,scrollTop:a,scrollLeft:s,viewBox:l,...c}=t,d=Object.values(c),u=Object.keys(c).map((t=>r||e.hasAttribute(t)?t:Xw[t]||(Xw[t]=t.replace(/([A-Z])/g,(e=>"-"+e.toLowerCase())))));void 0!==i&&(e.textContent=i);for(const t in o)if(o.hasOwnProperty(t)){const r=Zw(t,o[t]);Qw.test(t)?e.style.setProperty(t,r):e.style[t]=r}u.forEach(((t,r)=>{e.setAttribute(t,d[r])})),void 0!==n&&(e.className=n),void 0!==a&&(e.scrollTop=a),void 0!==s&&(e.scrollLeft=s),void 0!==l&&e.setAttribute("viewBox",l)},createAnimatedStyle:e=>new a$(e),getComponentProps:({scrollTop:e,scrollLeft:t,...r})=>r}),c$=l$.animated;const d$=T`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`,u$=O`
    animation: ${Xi["duration-150"]} ${Xi["ease-default"]} ${d$};
    width: 100%;
    height: 100%;
    transition: color ${Xi["duration-150"]} ${Xi["ease-default"]};
`,f$=_(ce)`
    ${u$}
    color: ${Qi["icon-primary-subtlest"]};
`,h$=_(de)`
    ${u$}
    color: ${Qi["icon-disabled-subtle"]};
`,p$=_(ue)`
    ${u$}
    color: ${e=>e.$disabled?Qi["icon-disabled-subtle"](e):Qi["icon-selected"](e)};
`,g$=_(fe)`
    ${u$}
    color: ${e=>e.$disabled?Qi["icon-disabled-subtle"](e):Qi["icon-selected"](e)};
`,m$=_.div`
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
`,b$=_.input`
    position: absolute;
    opacity: 0;
    width: 100%;
    height: 100%;
    cursor: ${e=>e.disabled?"not-allowed":"pointer"};

    &:hover
        + ${f$},
        &:hover
        + ${p$},
        &:hover
        + ${g$} {
        @media (pointer: fine) {
            color: ${e=>!e.disabled&&Qi["icon-hover"](e)};
        }
    }
`,v$=c$(_.div`
    overflow: hidden;
    box-shadow: 0 4px 5px 0 rgba(0, 0, 0, 0.2);
`),y$=_.ul`
    border-bottom-left-radius: ${ta.sm};
    border-bottom-right-radius: ${ta.sm};
    background: transparent;
    max-height: 20rem;
    width: ${e=>e.$width||"100%"};
    overflow-y: auto;
    padding: ${ea["spacing-8"]};
    list-style-type: none;

    ::-webkit-scrollbar {
        width: 14px;
    }

    ::-webkit-scrollbar-track {
        background: transparent;
    }

    ::-webkit-scrollbar-thumb {
        background: ${Qi["bg-inverse-subtlest"]};
        border: 5px solid transparent;
        border-radius: ${ta.full};
        background-clip: padding-box;
    }

    ${oa.MaxWidth.sm} {
        max-height: 15rem;
    }
`,x$=_.li`
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
`,w$=_.button`
    display: flex;
    ${e=>e.$multiSelect?O`
                padding: ${ea["spacing-8"]} ${ea["spacing-16"]};
            `:O`
                padding: 15px ${ea["spacing-16"]}; // TODO: confirm vertical spacing
                align-items: center;
            `}
    margin: 0 -${ea["spacing-8"]};
    border: none;
    border-radius: ${ta.none};
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
`,$$=O`
    overflow: hidden;
    display: -webkit-inline-box;
    text-overflow: ellipsis;
    -webkit-line-clamp: ${e=>e.$maxLines||2};
    -webkit-box-orient: vertical;
    overflow-wrap: break-word;
`,C$=_.div`
    ${e=>"small"===e.$variant?Zi["body-md-regular"]:Zi["body-baseline-regular"]}
    color: ${Qi.text};
    width: 100%;

    ${e=>"end"===e.$truncateType&&$$}
`,S$=_.div`
    color: ${Qi["text-subtlest"]};
    width: 100%;

    ${e=>"end"===e.$truncateType&&$$}

    ${e=>"next-line"===e.$labelDisplayType?O`
                    ${Zi["body-md-semibold"]}
                `:O`
                    ${Zi["body-baseline-regular"]}
                `}
`,D$=_.div`
    text-align: left;
    width: 100%;

    ${e=>{switch(e.$labelDisplayType){case"next-line":return O`
                    display: flex;
                    flex-direction: column;
                `;case"inline":return O`
                    ${C$} {
                        display: inline;
                    }

                    ${S$} {
                        display: inline;
                        margin-left: ${ea["spacing-8"]};
                    }
                `}}}
`,k$=_.div`
    display: inline-block;
    width: ${e=>1===e.$maxLines?50:100}%;
    height: 1lh;
    word-break: break-all;
    overflow: hidden;
`,E$=_.div`
    display: inline-block;
    width: ${e=>1===e.$maxLines?50:100}%;
    height: 1lh;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    direction: rtl;
    text-align: right;
`,_$=_((r=>{var{className:n,checked:o,disabled:i,indeterminate:a,displaySize:l="default",id:d}=r,u=ct(r,["className","checked","disabled","indeterminate","displaySize","id"]);const f=s(null);c((()=>{f.current&&(f.current.indeterminate=null!=a&&a)}),[a]);return t(m$,{className:n,"data-testid":"checkbox",$displaySize:l,children:[e(b$,Object.assign({id:d,"data-testid":"checkbox-input",type:"checkbox",checked:o,ref:f,tabIndex:i?-1:0,disabled:i,"aria-checked":a?"mixed":o},u)),a?e(g$,{$disabled:i,"data-testid":"indeterminate","aria-hidden":!0}):o?e(p$,{$disabled:i,"data-testid":"checkmark","aria-hidden":!0}):i?e(h$,{"data-testid":"empty-disabled-checkbox","aria-hidden":!0}):e(f$,{$disabled:i,"data-testid":"empty-checkbox","aria-hidden":!0})]})}))`
    flex-shrink: 0;
    margin-right: ${ea["spacing-16"]};
`,O$=_.div`
    width: 100%;
    display: flex;
    justify-content: flex-end;
    padding: ${ea["spacing-16"]} 0 ${ea["spacing-8"]} 0;
`,F$=_.button`
    ${e=>"small"===e.$variant?Zi["body-md-semibold"]:Zi["body-baseline-semibold"]}
    background-color: transparent;
    background-repeat: no-repeat;
    border: none;
    cursor: pointer;
    overflow: hidden;
    outline: none;
    color: ${Qi["text-primary"]};
`,T$=_.div`
    width: 100%;
    display: flex;
    padding: 15px ${ea["spacing-16"]}; // TODO: confirm vertical padding
    align-items: center;

    ${e=>"small"===e.$variant?Zi["body-md-regular"]:Zi["body-baseline-regular"]}
`,I$=_(ge)`
    height: 1em;
    width: 1em;
    margin-right: ${ea["spacing-4"]};
    color: ${Qi["icon-error"]};
`,M$=_(Xu)`
    margin-right: ${ea["spacing-4"]};
    color: ${Qi.icon};
`,A$=e=>"small"===e?1:1.375,j$=e=>O`
        height: ${A$(e)}rem;
        width: ${A$(e)}rem;
    `,B$=_.li`
    background: ${Qi["bg-strong"]};
    display: flex;
    border-radius: ${ta.sm};
    align-items: center;
`,R$=_(yh)`
    height: ${e=>"small"===e.$variant?2.5:3}rem;
    flex: 1;
    padding: 0 ${ea["spacing-8"]} 0 0;
    width: 100%;
`,z$=_(me)`
    ${e=>j$(e.$variant)}
    margin: 0 ${ea["spacing-8"]};
    color: ${Qi.icon};
`,P$=_(Vd)`
    ${e=>j$(e.$variant)}
    padding: 0;
    margin: 0 ${ea["spacing-8"]};
    color: ${Qi.icon};
    cursor: pointer;
    ${e=>{if("small"===e.$variant)return O`
                svg {
                    ${j$(e.$variant)}
                }
            `}}
`,L$=u(((r,n)=>{const{onClear:o}=r,i=ct(r,["onClear"]);return t(B$,{children:[e(z$,{$variant:r.variant}),e(R$,Object.assign({ref:n,$variant:r.variant},i)),i.value&&e(P$,{"aria-label":"Clear search",focusOutline:"browser",onClick:o,$variant:r.variant,children:e(he,{})})]},"search")})),N$=n=>{var{listItems:o,listExtractor:i,valueExtractor:a,onSelectItem:l,listStyleWidth:d,visible:u,enableSearch:f,searchPlaceholder:h="Search",onSearch:p,searchFunction:m,onDismiss:b,disableItemFocus:v,multiSelect:y,selectedItems:x,onSelectAll:w,onRetry:$,itemsLoadState:C="success",itemTruncationType:S="end",itemMaxLines:D=2,labelDisplayType:k="inline",renderListItem:E,onBlur:_,hideNoResultsDisplay:O,renderCustomCallToAction:F,variant:T="default"}=n,I=ct(n,["listItems","listExtractor","valueExtractor","onSelectItem","listStyleWidth","visible","enableSearch","searchPlaceholder","onSearch","searchFunction","onDismiss","disableItemFocus","multiSelect","selectedItems","onSelectAll","onRetry","itemsLoadState","itemTruncationType","itemMaxLines","labelDisplayType","renderListItem","onBlur","hideNoResultsDisplay","renderCustomCallToAction","variant"]);const[M,A]=g(0),[j,B]=g(""),[R,z]=g(null!=o?o:[]),[P,L]=g(0),N=Vw({height:P}),H=s(null),W=s(null),Y=s([]),V=s(null),U=s(null),K=s(M),q=s(R),G=e=>{K.current=e,A(e)},Q=e=>{q.current=e,z(e)};c((()=>(document.addEventListener("keydown",re),()=>{document.removeEventListener("keydown",re)})),[]),c((()=>{ee(j)}),[j]),c((()=>{if(B(""),u){if(setTimeout((()=>{L(te())})),v)return;V&&V.current?(V.current.focus(),G(-1)):Y.current[M]&&Y.current[M].focus()}else L(0)}),[u]),c((()=>{if(u){const e=te();L(e)}}),[R,C]),c((()=>{Q(null!=o?o:[]),B(""),G(0)}),[o]);const Z=e=>{const t=i?i(e):null==e?void 0:e.toString();return"object"==typeof t?{title:t.title,secondaryLabel:t.secondaryLabel}:{title:null!=t?t:""}},X=e=>{if("inline"!==k)return!1;let t=0;W&&W.current&&(t=W.current.getBoundingClientRect().width-60);return Sd.getTextWidth(e,"1.125rem 'Open Sans'")>t*D},J=e=>!!Iv(x,(t=>Av(t,e))),ee=e=>{if(""===e)Q(null!=o?o:[]);else if(m){const t=m(e);Q(t)}else{const t=null==o?void 0:o.filter((t=>{const{title:r,secondaryLabel:n}=Z(t),o=e.trim().toLowerCase();return r.includes(o)||n&&n.includes(o)}));Q(null!=t?t:[])}},te=()=>(W&&W.current?W.current.getBoundingClientRect().height:0)+(U.current?U.current.getBoundingClientRect().height:0),re=e=>{var t,r;if(H&&H.current.contains(e.target))switch(e.code){case"ArrowDown":if(K.current<q.current.length-1){const e=K.current+1;null===(t=Y.current[e])||void 0===t||t.focus(),G(e)}break;case"ArrowUp":if(K.current>0){const e=K.current-1;null===(r=Y.current[e])||void 0===r||r.focus(),G(K.current-1)}break;case"Escape":b&&b(!0)}},ne=(e,t)=>{e.preventDefault(),l&&l(t,(e=>a?a(e):e)(t))},oe=e=>{const t=e.target.value;B(t),p&&p()},ie=()=>{var e;B(""),null===(e=V.current)||void 0===e||e.focus(),p&&p()},ae=()=>{$&&$()},se=()=>{_&&_()},le=n=>t(r,{children:[e(k$,{$maxLines:D,"aria-hidden":!0,children:n}),e(E$,{$maxLines:D,"aria-hidden":!0,children:n})]}),ce=r=>{const{title:n,secondaryLabel:o}=Z(r),i=X(n),a=o&&X(o);return t(D$,{$labelDisplayType:i||a?"next-line":k,children:[e(C$,{$truncateType:S,$maxLines:D,$variant:T,"aria-label":n,children:"middle"===S&&i?le(n):n}),o&&e(S$,{$truncateType:S,$maxLines:D,$labelDisplayType:k,"aria-label":o,children:"middle"===S&&a?le(o):o})]})},de=()=>{if(!$||"success"===C)return R.map(((r,n)=>e(x$,{$checked:J(r)&&!y,children:t(w$,{$hasNextLineLabel:"next-line"===k&&R.length>0&&i&&"string"!=typeof i(R[0]),onClick:e=>{ne(e,r)},ref:e=>Y.current[n]=e,"data-testid":"list-item",type:"button",tabIndex:u?0:-1,$multiSelect:y,onBlur:se,$variant:T,children:[y&&e(_$,{checked:J(r),displaySize:"small"}),E?E(r,{selected:J(r)}):ce(r)]})},((e,t)=>`item_${t}__${a?a(e):e}`)(r,n))))},ue=()=>{if(x&&y&&R.length>0&&!j&&"success"===C)return e(O$,{children:e(F$,{onClick:w,type:"button",$variant:T,children:0===x.length?"Select all":"Clear all"})},"selectAll")},fe=()=>{if(!O&&(j||!f)&&0===R.length&&"success"===C)return t(T$,{"data-testid":"list-no-results",$variant:T,children:[e(I$,{"data-testid":"no-result-icon",$variant:T}),"No results found."]},"noResults")},he=()=>{if($&&"loading"===C)return t(T$,{"data-testid":"list-loading",$variant:T,children:[e(M$,{}),"Loading..."]},"loading")},pe=()=>{if($&&"fail"===C)return t(T$,{"data-testid":"list-fail",$variant:T,children:[e(I$,{"data-testid":"load-error-icon",$variant:T}),"Failed to load. ",e(F$,{onClick:ae,type:"button",$variant:T,children:"Try again."})]},"noResults")};return e(r,{children:t(v$,{style:N,"data-testid":u?"dropdown-container":"dropdown-container-hidden",ref:H,children:[(()=>{if(u)return t(y$,Object.assign({ref:W,"data-testid":"dropdown-list",$width:d,role:"list"},I,{children:[(f||m)&&"success"===C?e(L$,{ref:V,onChange:oe,value:j,placeholder:h,"data-testid":"search-input","aria-label":"search-input",tabIndex:u?0:-1,onClear:ie,variant:T}):null,ue(),fe(),he(),pe(),de()]}))})(),(()=>{if(u&&F)return e("div",{ref:U,"data-testid":"custom-cta",children:F(b,R)})})()]})})},H$=_.div`
    position: relative;
    display: flex;
    align-items: center;
    ${e=>{if(e.$expanded)return O`
                border-bottom: ${Ji["width-010"]} ${Ji.solid}
                    ${Qi.border};
            `}}

    ${e=>e.$readOnly?O`
                border: 0;
                margin: 0;
            `:"right"===e.$position?O`
                        flex-direction: row-reverse;
                        margin: 0 ${ea["spacing-16"]};
                    `:O`
                        flex-direction: row;
                        margin: 0 ${ea["spacing-16"]};
                    `}
`,W$=_(Fu)`
    padding: 0;
    width: auto;
`,Y$=_.div`
    padding: 10px 0; // TODO: confirm vertical spacing
    display: flex;
    align-items: center;
    padding: 0;
    background: transparent;
    margin-right: ${ea["spacing-12"]};
`,V$=_.div`
    transform: rotate(${e=>e.$expanded?180:0}deg);
    transition: ${Xi["duration-250"]} ${Xi["ease-default"]};
    margin: 0 ${ea["spacing-12"]};
    display: flex;
    align-items: center;
`,U$=_(ne)`
    color: ${Qi.icon};
    height: ${Zi.Spec["body-size-baseline"]};
    width: ${Zi.Spec["body-size-baseline"]};
`,K$=_.div`
    display: flex;
    flex: 1 1 auto;
`,q$=_(wa.BodyBL)`
    text-align: left;
    ${pa(2)}
    text-overflow: ellipsis;
`,G$=_(q$)`
    color: ${Qi["text-subtler"]};
`,Q$=_.div`
    width: 1px;
    background: ${Qi.border};
    flex-shrink: 0;
    height: 1.25rem;

    ${e=>{if(e.$readOnly)return O`
                display: none;
            `}}

    ${e=>"right"===e.$position?O`
                    margin: 0 ${ea["spacing-12"]};
                `:O`
                    margin: 0 ${ea["spacing-12"]} 0 0;
                `}
`,Z$=_(bh)`
    display: flex;
    align-items: center;
    width: 100%;
    padding: 0 ${ea["spacing-16"]};
    flex-direction: ${e=>"right"===e.$position?"row-reverse":"row"};
`,X$=_(bh)`
    display: flex;
    position: relative;
    width: 100%;
    padding: 0 ${ea["spacing-16"]};
    flex-direction: ${e=>"right"===e.$position?"row-reverse":"row"};
`,J$=_(qp)``,eC=_.div`
    position: relative;
    display: flex;
    align-items: center;

    ${Zi["body-baseline-regular"]}
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
                    margin-left: ${e.$readOnly?ea["spacing-4"]:ea["spacing-12"]};
                `:O`
                    margin-right: ${e.$readOnly?ea["spacing-4"]:ea["spacing-12"]};
                `};
`,tC=o.forwardRef(((n,o)=>{var{addon:i,error:a,onChange:l,readOnly:d,className:u,onBlur:f}=n,h=ct(n,["addon","error","onChange","readOnly","className","onBlur"]);const{placeholder:p,options:m,enableSearch:b,searchFunction:v,searchPlaceholder:y,valueExtractor:x,listExtractor:w,displayValueExtractor:$,selectedOption:C,onSelectOption:S,onHideOptions:D,onShowOptions:k,"data-selector-testid":E}=i.attributes,{position:_}=i,[O,F]=g(C),[T,I]=g(!1),M=s(null);c((()=>{F(C)}),[C]);const A=()=>{if(O)return $?$(O):x?x(O):O.toString()},j=e=>{!e&&D&&D(),e&&k&&k()},B=e=>{e.preventDefault(),h.disabled||(I(!T),j(!T))},R=(e,t)=>{var r;F(e),I(!1),j(!1),M&&(null===(r=M.current)||void 0===r||r.focus()),S&&S(e,t)},z=e=>{l&&l(e)},P=()=>{f&&f()},L=()=>{var e;I(!1),j(!1),M&&(null===(e=M.current)||void 0===e||e.focus())};return t(zu,{className:u,show:T,error:a&&!T,disabled:h.disabled,readOnly:d,onBlur:()=>{I(!1),j(!1),P()},children:[t(H$,{$expanded:T,$readOnly:d,$position:_,children:[d?O?e(Y$,{children:e(q$,{"data-testid":"selector-label",children:A()})}):null:e(W$,{ref:M,type:"button",disabled:h.disabled,"data-testid":E||"addon-selector",onClick:B,children:t(r,{children:[t(K$,{children:[p&&!O&&e(G$,{children:p}),O&&e(q$,{"data-testid":"selector-label",children:A()})]}),e(V$,{$expanded:T,children:e(U$,{})})]})}),e(Q$,{$readOnly:d,$position:_}),e(J$,Object.assign({ref:o},h,{readOnly:d,error:a,onChange:z,"data-testid":h["data-testid"]||"input",onBlur:P,styleType:"no-border"}))]}),m&&m.length>0?e(N$,{listItems:m,selectedItems:C?[C]:[],onSelectItem:R,valueExtractor:x,listExtractor:w,visible:T,enableSearch:b,searchFunction:v,searchPlaceholder:y,"data-testid":"dropdown-list",onBlur:P,onDismiss:L}):e(r,{})]})})),rC=o.forwardRef(((r,n)=>{var{addon:o,error:i,className:a}=r,s=ct(r,["addon","error","className"]);const l=()=>e(X$,{$disabled:s.disabled,$error:i,$readOnly:s.readOnly,"data-testid":s["data-testid"],className:a,children:e(J$,Object.assign({ref:n},s,{"data-testid":"input",styleType:"no-border"}))});if(!o)return l();{const{type:r="label",position:c="left"}=o,{allowClear:d}=s;switch(r){case"list":{const t=o.attributes;return t.options&&t.options.length>0?e(tC,Object.assign({ref:n,addon:o,error:i,className:a},s)):l()}case"custom":{const r=o.attributes;return r.children?t(Z$,{$error:i,$disabled:s.disabled,$readOnly:s.readOnly,"data-testid":s["data-testid"],$position:c,className:a,children:[e(eC,{"data-testid":"addon",$disabled:s.disabled,$readOnly:s.readOnly,$position:c,children:r.children}),e(J$,Object.assign({ref:n},s,{allowClear:d&&"right"!==c,error:i,"data-testid":"input",styleType:"no-border"}))]}):l()}default:{const r=o.attributes;return r.value?t(Z$,{$disabled:s.disabled,$error:i,$readOnly:s.readOnly,"data-testid":s["data-testid"],$position:c,className:a,children:[e(eC,{"data-testid":"addon",$disabled:s.disabled,$readOnly:s.readOnly,$position:c,children:r.value}),e(J$,Object.assign({ref:n},s,{allowClear:d&&"right"!==c,error:i,"data-testid":"input",styleType:"no-border"}))]}):l()}}}})),nC=o.forwardRef(((t,r)=>{const{label:n,errorMessage:o,id:i="form-field-group","data-error-testid":a,"data-testid":s,layoutType:l,mobileCols:c,tabletCols:d,desktopCols:u,xxsCols:f,xsCols:h,smCols:p,mdCols:g,lgCols:m,xlCols:b,xxlCols:v}=t,y=ct(t,["label","errorMessage","id","data-error-testid","data-testid","layoutType","mobileCols","tabletCols","desktopCols","xxsCols","xsCols","smCols","mdCols","lgCols","xlCols","xxlCols"]);return e(ku,{id:i,label:n,errorMessage:o,disabled:y.disabled,"data-error-testid":a,layoutType:l,mobileCols:c,tabletCols:d,desktopCols:u,xxsCols:f,xsCols:h,smCols:p,mdCols:g,lgCols:m,xlCols:b,xxlCols:v,children:e(rC,Object.assign({ref:r,id:`${i}-base`,"data-testid":s||i,error:!!o},y))})})),oC=_(rC)`
    padding: 0 0 0 ${({readOnly:e})=>e?"0":ea["spacing-16"]};
    input {
        cursor: ${({readOnly:e,$isDisabled:t})=>e&&!t?"pointer":"initial"};
    }
`,iC=_.div`
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: ${({$isDisabled:e})=>e?"initial":"pointer"};
    color: ${({$isDisabled:e,$inactiveColor:t=Qi.icon,$activeColor:r=Qi["icon-primary"]})=>e?t:r};
    padding: ${ea["spacing-12"]} ${ea["spacing-16"]};

    svg {
        height: 1em;
        width: 1em;
    }
`,aC=_.div`
    display: flex;
    align-items: center;
    height: 3rem;
`,sC=_(wa.BodyBL)`
    color: ${Qi["text-subtler"]};
`,lC=_(Xu)`
    margin-right: ${ea["spacing-8"]};
    color: ${Qi.icon};
`,cC=_.span`
    color: ${Qi["text-primary"]};
    text-decoration: underline;
    font-weight: ${Zi.Spec["weight-semibold"]};
`,dC=_.span`
    display: flex;
    align-items: center;
    margin-right: ${ea["spacing-8"]};
`,uC=_(ye)`
    color: ${Qi["icon-warning"]};
    margin-right: ${ea["spacing-8"]};
    height: 1em;
    width: 1em;
`,fC=_.span`
    color: ${Qi["text-warning"]};
`,hC=_(xh)`
    width: 100%;
    height: 3rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border: none;
    background: transparent;
    cursor: pointer;

    ${Zi["body-baseline-regular"]}

    &:hover, &:active, &:focus {
        ${cC} {
            color: ${Qi["text-hover"]};
        }
    }
`;var pC,gC,mC={exports:{}};
/**
 * @license
 * Lodash <https://lodash.com/>
 * Copyright OpenJS Foundation and other contributors <https://openjsf.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */pC=mC,gC=mC.exports,function(){var e,t="Expected a function",r="__lodash_hash_undefined__",n="__lodash_placeholder__",o=16,i=32,a=64,s=128,l=256,c=1/0,d=9007199254740991,u=NaN,f=4294967295,h=[["ary",s],["bind",1],["bindKey",2],["curry",8],["curryRight",o],["flip",512],["partial",i],["partialRight",a],["rearg",l]],p="[object Arguments]",g="[object Array]",m="[object Boolean]",b="[object Date]",v="[object Error]",y="[object Function]",x="[object GeneratorFunction]",w="[object Map]",$="[object Number]",C="[object Object]",S="[object Promise]",D="[object RegExp]",k="[object Set]",E="[object String]",_="[object Symbol]",O="[object WeakMap]",F="[object ArrayBuffer]",T="[object DataView]",I="[object Float32Array]",M="[object Float64Array]",A="[object Int8Array]",j="[object Int16Array]",B="[object Int32Array]",R="[object Uint8Array]",z="[object Uint8ClampedArray]",P="[object Uint16Array]",L="[object Uint32Array]",N=/\b__p \+= '';/g,H=/\b(__p \+=) '' \+/g,W=/(__e\(.*?\)|\b__t\)) \+\n'';/g,Y=/&(?:amp|lt|gt|quot|#39);/g,V=/[&<>"']/g,U=RegExp(Y.source),K=RegExp(V.source),q=/<%-([\s\S]+?)%>/g,G=/<%([\s\S]+?)%>/g,Q=/<%=([\s\S]+?)%>/g,Z=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,X=/^\w*$/,J=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,ee=/[\\^$.*+?()[\]{}|]/g,te=RegExp(ee.source),re=/^\s+/,ne=/\s/,oe=/\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/,ie=/\{\n\/\* \[wrapped with (.+)\] \*/,ae=/,? & /,se=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g,le=/[()=,{}\[\]\/\s]/,ce=/\\(\\)?/g,de=/\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g,ue=/\w*$/,fe=/^[-+]0x[0-9a-f]+$/i,he=/^0b[01]+$/i,pe=/^\[object .+?Constructor\]$/,ge=/^0o[0-7]+$/i,me=/^(?:0|[1-9]\d*)$/,be=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,ve=/($^)/,ye=/['\n\r\u2028\u2029\\]/g,xe="\\ud800-\\udfff",we="\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff",$e="\\u2700-\\u27bf",Ce="a-z\\xdf-\\xf6\\xf8-\\xff",Se="A-Z\\xc0-\\xd6\\xd8-\\xde",De="\\ufe0e\\ufe0f",ke="\\xac\\xb1\\xd7\\xf7\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf\\u2000-\\u206f \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",Ee="['’]",_e="["+xe+"]",Oe="["+ke+"]",Fe="["+we+"]",Te="\\d+",Ie="["+$e+"]",Me="["+Ce+"]",Ae="[^"+xe+ke+Te+$e+Ce+Se+"]",je="\\ud83c[\\udffb-\\udfff]",Re="[^"+xe+"]",ze="(?:\\ud83c[\\udde6-\\uddff]){2}",Pe="[\\ud800-\\udbff][\\udc00-\\udfff]",Le="["+Se+"]",Ne="\\u200d",He="(?:"+Me+"|"+Ae+")",We="(?:"+Le+"|"+Ae+")",Ye="(?:['’](?:d|ll|m|re|s|t|ve))?",Ve="(?:['’](?:D|LL|M|RE|S|T|VE))?",Ue="(?:"+Fe+"|"+je+")?",Ke="["+De+"]?",qe=Ke+Ue+"(?:"+Ne+"(?:"+[Re,ze,Pe].join("|")+")"+Ke+Ue+")*",Ge="(?:"+[Ie,ze,Pe].join("|")+")"+qe,Qe="(?:"+[Re+Fe+"?",Fe,ze,Pe,_e].join("|")+")",Ze=RegExp(Ee,"g"),Xe=RegExp(Fe,"g"),Je=RegExp(je+"(?="+je+")|"+Qe+qe,"g"),et=RegExp([Le+"?"+Me+"+"+Ye+"(?="+[Oe,Le,"$"].join("|")+")",We+"+"+Ve+"(?="+[Oe,Le+He,"$"].join("|")+")",Le+"?"+He+"+"+Ye,Le+"+"+Ve,"\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])","\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",Te,Ge].join("|"),"g"),tt=RegExp("["+Ne+xe+we+De+"]"),rt=/[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/,nt=["Array","Buffer","DataView","Date","Error","Float32Array","Float64Array","Function","Int8Array","Int16Array","Int32Array","Map","Math","Object","Promise","RegExp","Set","String","Symbol","TypeError","Uint8Array","Uint8ClampedArray","Uint16Array","Uint32Array","WeakMap","_","clearTimeout","isFinite","parseInt","setTimeout"],ot=-1,it={};it[I]=it[M]=it[A]=it[j]=it[B]=it[R]=it[z]=it[P]=it[L]=!0,it[p]=it[g]=it[F]=it[m]=it[T]=it[b]=it[v]=it[y]=it[w]=it[$]=it[C]=it[D]=it[k]=it[E]=it[O]=!1;var at={};at[p]=at[g]=at[F]=at[T]=at[m]=at[b]=at[I]=at[M]=at[A]=at[j]=at[B]=at[w]=at[$]=at[C]=at[D]=at[k]=at[E]=at[_]=at[R]=at[z]=at[P]=at[L]=!0,at[v]=at[y]=at[O]=!1;var st={"\\":"\\","'":"'","\n":"n","\r":"r","\u2028":"u2028","\u2029":"u2029"},lt=parseFloat,ct=parseInt,dt="object"==typeof Be&&Be&&Be.Object===Object&&Be,ut="object"==typeof self&&self&&self.Object===Object&&self,ft=dt||ut||Function("return this")(),ht=gC&&!gC.nodeType&&gC,pt=ht&&pC&&!pC.nodeType&&pC,gt=pt&&pt.exports===ht,mt=gt&&dt.process,bt=function(){try{var e=pt&&pt.require&&pt.require("util").types;return e||mt&&mt.binding&&mt.binding("util")}catch(e){}}(),vt=bt&&bt.isArrayBuffer,yt=bt&&bt.isDate,xt=bt&&bt.isMap,wt=bt&&bt.isRegExp,$t=bt&&bt.isSet,Ct=bt&&bt.isTypedArray;function St(e,t,r){switch(r.length){case 0:return e.call(t);case 1:return e.call(t,r[0]);case 2:return e.call(t,r[0],r[1]);case 3:return e.call(t,r[0],r[1],r[2])}return e.apply(t,r)}function Dt(e,t,r,n){for(var o=-1,i=null==e?0:e.length;++o<i;){var a=e[o];t(n,a,r(a),e)}return n}function kt(e,t){for(var r=-1,n=null==e?0:e.length;++r<n&&!1!==t(e[r],r,e););return e}function Et(e,t){for(var r=null==e?0:e.length;r--&&!1!==t(e[r],r,e););return e}function _t(e,t){for(var r=-1,n=null==e?0:e.length;++r<n;)if(!t(e[r],r,e))return!1;return!0}function Ot(e,t){for(var r=-1,n=null==e?0:e.length,o=0,i=[];++r<n;){var a=e[r];t(a,r,e)&&(i[o++]=a)}return i}function Ft(e,t){return!(null==e||!e.length)&&Lt(e,t,0)>-1}function Tt(e,t,r){for(var n=-1,o=null==e?0:e.length;++n<o;)if(r(t,e[n]))return!0;return!1}function It(e,t){for(var r=-1,n=null==e?0:e.length,o=Array(n);++r<n;)o[r]=t(e[r],r,e);return o}function Mt(e,t){for(var r=-1,n=t.length,o=e.length;++r<n;)e[o+r]=t[r];return e}function At(e,t,r,n){var o=-1,i=null==e?0:e.length;for(n&&i&&(r=e[++o]);++o<i;)r=t(r,e[o],o,e);return r}function jt(e,t,r,n){var o=null==e?0:e.length;for(n&&o&&(r=e[--o]);o--;)r=t(r,e[o],o,e);return r}function Bt(e,t){for(var r=-1,n=null==e?0:e.length;++r<n;)if(t(e[r],r,e))return!0;return!1}var Rt=Yt("length");function zt(e,t,r){var n;return r(e,(function(e,r,o){if(t(e,r,o))return n=r,!1})),n}function Pt(e,t,r,n){for(var o=e.length,i=r+(n?1:-1);n?i--:++i<o;)if(t(e[i],i,e))return i;return-1}function Lt(e,t,r){return t==t?function(e,t,r){for(var n=r-1,o=e.length;++n<o;)if(e[n]===t)return n;return-1}(e,t,r):Pt(e,Ht,r)}function Nt(e,t,r,n){for(var o=r-1,i=e.length;++o<i;)if(n(e[o],t))return o;return-1}function Ht(e){return e!=e}function Wt(e,t){var r=null==e?0:e.length;return r?Kt(e,t)/r:u}function Yt(t){return function(r){return null==r?e:r[t]}}function Vt(t){return function(r){return null==t?e:t[r]}}function Ut(e,t,r,n,o){return o(e,(function(e,o,i){r=n?(n=!1,e):t(r,e,o,i)})),r}function Kt(t,r){for(var n,o=-1,i=t.length;++o<i;){var a=r(t[o]);a!==e&&(n=n===e?a:n+a)}return n}function qt(e,t){for(var r=-1,n=Array(e);++r<e;)n[r]=t(r);return n}function Gt(e){return e?e.slice(0,fr(e)+1).replace(re,""):e}function Qt(e){return function(t){return e(t)}}function Zt(e,t){return It(t,(function(t){return e[t]}))}function Xt(e,t){return e.has(t)}function Jt(e,t){for(var r=-1,n=e.length;++r<n&&Lt(t,e[r],0)>-1;);return r}function er(e,t){for(var r=e.length;r--&&Lt(t,e[r],0)>-1;);return r}var tr=Vt({"À":"A","Á":"A","Â":"A","Ã":"A","Ä":"A","Å":"A","à":"a","á":"a","â":"a","ã":"a","ä":"a","å":"a","Ç":"C","ç":"c","Ð":"D","ð":"d","È":"E","É":"E","Ê":"E","Ë":"E","è":"e","é":"e","ê":"e","ë":"e","Ì":"I","Í":"I","Î":"I","Ï":"I","ì":"i","í":"i","î":"i","ï":"i","Ñ":"N","ñ":"n","Ò":"O","Ó":"O","Ô":"O","Õ":"O","Ö":"O","Ø":"O","ò":"o","ó":"o","ô":"o","õ":"o","ö":"o","ø":"o","Ù":"U","Ú":"U","Û":"U","Ü":"U","ù":"u","ú":"u","û":"u","ü":"u","Ý":"Y","ý":"y","ÿ":"y","Æ":"Ae","æ":"ae","Þ":"Th","þ":"th","ß":"ss","Ā":"A","Ă":"A","Ą":"A","ā":"a","ă":"a","ą":"a","Ć":"C","Ĉ":"C","Ċ":"C","Č":"C","ć":"c","ĉ":"c","ċ":"c","č":"c","Ď":"D","Đ":"D","ď":"d","đ":"d","Ē":"E","Ĕ":"E","Ė":"E","Ę":"E","Ě":"E","ē":"e","ĕ":"e","ė":"e","ę":"e","ě":"e","Ĝ":"G","Ğ":"G","Ġ":"G","Ģ":"G","ĝ":"g","ğ":"g","ġ":"g","ģ":"g","Ĥ":"H","Ħ":"H","ĥ":"h","ħ":"h","Ĩ":"I","Ī":"I","Ĭ":"I","Į":"I","İ":"I","ĩ":"i","ī":"i","ĭ":"i","į":"i","ı":"i","Ĵ":"J","ĵ":"j","Ķ":"K","ķ":"k","ĸ":"k","Ĺ":"L","Ļ":"L","Ľ":"L","Ŀ":"L","Ł":"L","ĺ":"l","ļ":"l","ľ":"l","ŀ":"l","ł":"l","Ń":"N","Ņ":"N","Ň":"N","Ŋ":"N","ń":"n","ņ":"n","ň":"n","ŋ":"n","Ō":"O","Ŏ":"O","Ő":"O","ō":"o","ŏ":"o","ő":"o","Ŕ":"R","Ŗ":"R","Ř":"R","ŕ":"r","ŗ":"r","ř":"r","Ś":"S","Ŝ":"S","Ş":"S","Š":"S","ś":"s","ŝ":"s","ş":"s","š":"s","Ţ":"T","Ť":"T","Ŧ":"T","ţ":"t","ť":"t","ŧ":"t","Ũ":"U","Ū":"U","Ŭ":"U","Ů":"U","Ű":"U","Ų":"U","ũ":"u","ū":"u","ŭ":"u","ů":"u","ű":"u","ų":"u","Ŵ":"W","ŵ":"w","Ŷ":"Y","ŷ":"y","Ÿ":"Y","Ź":"Z","Ż":"Z","Ž":"Z","ź":"z","ż":"z","ž":"z","Ĳ":"IJ","ĳ":"ij","Œ":"Oe","œ":"oe","ŉ":"'n","ſ":"s"}),rr=Vt({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"});function nr(e){return"\\"+st[e]}function or(e){return tt.test(e)}function ir(e){var t=-1,r=Array(e.size);return e.forEach((function(e,n){r[++t]=[n,e]})),r}function ar(e,t){return function(r){return e(t(r))}}function sr(e,t){for(var r=-1,o=e.length,i=0,a=[];++r<o;){var s=e[r];s!==t&&s!==n||(e[r]=n,a[i++]=r)}return a}function lr(e){var t=-1,r=Array(e.size);return e.forEach((function(e){r[++t]=e})),r}function cr(e){var t=-1,r=Array(e.size);return e.forEach((function(e){r[++t]=[e,e]})),r}function dr(e){return or(e)?function(e){for(var t=Je.lastIndex=0;Je.test(e);)++t;return t}(e):Rt(e)}function ur(e){return or(e)?function(e){return e.match(Je)||[]}(e):function(e){return e.split("")}(e)}function fr(e){for(var t=e.length;t--&&ne.test(e.charAt(t)););return t}var hr=Vt({"&amp;":"&","&lt;":"<","&gt;":">","&quot;":'"',"&#39;":"'"}),pr=function ne(xe){var we=(xe=null==xe?ft:pr.defaults(ft.Object(),xe,pr.pick(ft,nt))).Array,$e=xe.Date,Ce=xe.Error,Se=xe.Function,De=xe.Math,ke=xe.Object,Ee=xe.RegExp,_e=xe.String,Oe=xe.TypeError,Fe=we.prototype,Te=Se.prototype,Ie=ke.prototype,Me=xe["__core-js_shared__"],Ae=Te.toString,je=Ie.hasOwnProperty,Be=0,Re=function(){var e=/[^.]+$/.exec(Me&&Me.keys&&Me.keys.IE_PROTO||"");return e?"Symbol(src)_1."+e:""}(),ze=Ie.toString,Pe=Ae.call(ke),Le=ft._,Ne=Ee("^"+Ae.call(je).replace(ee,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),He=gt?xe.Buffer:e,We=xe.Symbol,Ye=xe.Uint8Array,Ve=He?He.allocUnsafe:e,Ue=ar(ke.getPrototypeOf,ke),Ke=ke.create,qe=Ie.propertyIsEnumerable,Ge=Fe.splice,Qe=We?We.isConcatSpreadable:e,Je=We?We.iterator:e,tt=We?We.toStringTag:e,st=function(){try{var e=fi(ke,"defineProperty");return e({},"",{}),e}catch(e){}}(),dt=xe.clearTimeout!==ft.clearTimeout&&xe.clearTimeout,ut=$e&&$e.now!==ft.Date.now&&$e.now,ht=xe.setTimeout!==ft.setTimeout&&xe.setTimeout,pt=De.ceil,mt=De.floor,bt=ke.getOwnPropertySymbols,Rt=He?He.isBuffer:e,Vt=xe.isFinite,gr=Fe.join,mr=ar(ke.keys,ke),br=De.max,vr=De.min,yr=$e.now,xr=xe.parseInt,wr=De.random,$r=Fe.reverse,Cr=fi(xe,"DataView"),Sr=fi(xe,"Map"),Dr=fi(xe,"Promise"),kr=fi(xe,"Set"),Er=fi(xe,"WeakMap"),_r=fi(ke,"create"),Or=Er&&new Er,Fr={},Tr=zi(Cr),Ir=zi(Sr),Mr=zi(Dr),Ar=zi(kr),jr=zi(Er),Br=We?We.prototype:e,Rr=Br?Br.valueOf:e,zr=Br?Br.toString:e;function Pr(e){if(ts(e)&&!Ya(e)&&!(e instanceof Wr)){if(e instanceof Hr)return e;if(je.call(e,"__wrapped__"))return Pi(e)}return new Hr(e)}var Lr=function(){function t(){}return function(r){if(!es(r))return{};if(Ke)return Ke(r);t.prototype=r;var n=new t;return t.prototype=e,n}}();function Nr(){}function Hr(t,r){this.__wrapped__=t,this.__actions__=[],this.__chain__=!!r,this.__index__=0,this.__values__=e}function Wr(e){this.__wrapped__=e,this.__actions__=[],this.__dir__=1,this.__filtered__=!1,this.__iteratees__=[],this.__takeCount__=f,this.__views__=[]}function Yr(e){var t=-1,r=null==e?0:e.length;for(this.clear();++t<r;){var n=e[t];this.set(n[0],n[1])}}function Vr(e){var t=-1,r=null==e?0:e.length;for(this.clear();++t<r;){var n=e[t];this.set(n[0],n[1])}}function Ur(e){var t=-1,r=null==e?0:e.length;for(this.clear();++t<r;){var n=e[t];this.set(n[0],n[1])}}function Kr(e){var t=-1,r=null==e?0:e.length;for(this.__data__=new Ur;++t<r;)this.add(e[t])}function qr(e){var t=this.__data__=new Vr(e);this.size=t.size}function Gr(e,t){var r=Ya(e),n=!r&&Wa(e),o=!r&&!n&&qa(e),i=!r&&!n&&!o&&cs(e),a=r||n||o||i,s=a?qt(e.length,_e):[],l=s.length;for(var c in e)!t&&!je.call(e,c)||a&&("length"==c||o&&("offset"==c||"parent"==c)||i&&("buffer"==c||"byteLength"==c||"byteOffset"==c)||yi(c,l))||s.push(c);return s}function Qr(t){var r=t.length;return r?t[qn(0,r-1)]:e}function Zr(e,t){return ji(Fo(e),sn(t,0,e.length))}function Xr(e){return ji(Fo(e))}function Jr(t,r,n){(n!==e&&!La(t[r],n)||n===e&&!(r in t))&&on(t,r,n)}function en(t,r,n){var o=t[r];je.call(t,r)&&La(o,n)&&(n!==e||r in t)||on(t,r,n)}function tn(e,t){for(var r=e.length;r--;)if(La(e[r][0],t))return r;return-1}function rn(e,t,r,n){return fn(e,(function(e,o,i){t(n,e,r(e),i)})),n}function nn(e,t){return e&&To(t,Ts(t),e)}function on(e,t,r){"__proto__"==t&&st?st(e,t,{configurable:!0,enumerable:!0,value:r,writable:!0}):e[t]=r}function an(t,r){for(var n=-1,o=r.length,i=we(o),a=null==t;++n<o;)i[n]=a?e:ks(t,r[n]);return i}function sn(t,r,n){return t==t&&(n!==e&&(t=t<=n?t:n),r!==e&&(t=t>=r?t:r)),t}function ln(t,r,n,o,i,a){var s,l=1&r,c=2&r,d=4&r;if(n&&(s=i?n(t,o,i,a):n(t)),s!==e)return s;if(!es(t))return t;var u=Ya(t);if(u){if(s=function(e){var t=e.length,r=new e.constructor(t);return t&&"string"==typeof e[0]&&je.call(e,"index")&&(r.index=e.index,r.input=e.input),r}(t),!l)return Fo(t,s)}else{var f=gi(t),h=f==y||f==x;if(qa(t))return So(t,l);if(f==C||f==p||h&&!i){if(s=c||h?{}:bi(t),!l)return c?function(e,t){return To(e,pi(e),t)}(t,function(e,t){return e&&To(t,Is(t),e)}(s,t)):function(e,t){return To(e,hi(e),t)}(t,nn(s,t))}else{if(!at[f])return i?t:{};s=function(e,t,r){var n,o=e.constructor;switch(t){case F:return Do(e);case m:case b:return new o(+e);case T:return function(e,t){var r=t?Do(e.buffer):e.buffer;return new e.constructor(r,e.byteOffset,e.byteLength)}(e,r);case I:case M:case A:case j:case B:case R:case z:case P:case L:return ko(e,r);case w:return new o;case $:case E:return new o(e);case D:return function(e){var t=new e.constructor(e.source,ue.exec(e));return t.lastIndex=e.lastIndex,t}(e);case k:return new o;case _:return n=e,Rr?ke(Rr.call(n)):{}}}(t,f,l)}}a||(a=new qr);var g=a.get(t);if(g)return g;a.set(t,s),as(t)?t.forEach((function(e){s.add(ln(e,r,n,e,t,a))})):rs(t)&&t.forEach((function(e,o){s.set(o,ln(e,r,n,o,t,a))}));var v=u?e:(d?c?ii:oi:c?Is:Ts)(t);return kt(v||t,(function(e,o){v&&(e=t[o=e]),en(s,o,ln(e,r,n,o,t,a))})),s}function cn(t,r,n){var o=n.length;if(null==t)return!o;for(t=ke(t);o--;){var i=n[o],a=r[i],s=t[i];if(s===e&&!(i in t)||!a(s))return!1}return!0}function dn(r,n,o){if("function"!=typeof r)throw new Oe(t);return Ti((function(){r.apply(e,o)}),n)}function un(e,t,r,n){var o=-1,i=Ft,a=!0,s=e.length,l=[],c=t.length;if(!s)return l;r&&(t=It(t,Qt(r))),n?(i=Tt,a=!1):t.length>=200&&(i=Xt,a=!1,t=new Kr(t));e:for(;++o<s;){var d=e[o],u=null==r?d:r(d);if(d=n||0!==d?d:0,a&&u==u){for(var f=c;f--;)if(t[f]===u)continue e;l.push(d)}else i(t,u,n)||l.push(d)}return l}Pr.templateSettings={escape:q,evaluate:G,interpolate:Q,variable:"",imports:{_:Pr}},Pr.prototype=Nr.prototype,Pr.prototype.constructor=Pr,Hr.prototype=Lr(Nr.prototype),Hr.prototype.constructor=Hr,Wr.prototype=Lr(Nr.prototype),Wr.prototype.constructor=Wr,Yr.prototype.clear=function(){this.__data__=_r?_r(null):{},this.size=0},Yr.prototype.delete=function(e){var t=this.has(e)&&delete this.__data__[e];return this.size-=t?1:0,t},Yr.prototype.get=function(t){var n=this.__data__;if(_r){var o=n[t];return o===r?e:o}return je.call(n,t)?n[t]:e},Yr.prototype.has=function(t){var r=this.__data__;return _r?r[t]!==e:je.call(r,t)},Yr.prototype.set=function(t,n){var o=this.__data__;return this.size+=this.has(t)?0:1,o[t]=_r&&n===e?r:n,this},Vr.prototype.clear=function(){this.__data__=[],this.size=0},Vr.prototype.delete=function(e){var t=this.__data__,r=tn(t,e);return!(r<0||(r==t.length-1?t.pop():Ge.call(t,r,1),--this.size,0))},Vr.prototype.get=function(t){var r=this.__data__,n=tn(r,t);return n<0?e:r[n][1]},Vr.prototype.has=function(e){return tn(this.__data__,e)>-1},Vr.prototype.set=function(e,t){var r=this.__data__,n=tn(r,e);return n<0?(++this.size,r.push([e,t])):r[n][1]=t,this},Ur.prototype.clear=function(){this.size=0,this.__data__={hash:new Yr,map:new(Sr||Vr),string:new Yr}},Ur.prototype.delete=function(e){var t=di(this,e).delete(e);return this.size-=t?1:0,t},Ur.prototype.get=function(e){return di(this,e).get(e)},Ur.prototype.has=function(e){return di(this,e).has(e)},Ur.prototype.set=function(e,t){var r=di(this,e),n=r.size;return r.set(e,t),this.size+=r.size==n?0:1,this},Kr.prototype.add=Kr.prototype.push=function(e){return this.__data__.set(e,r),this},Kr.prototype.has=function(e){return this.__data__.has(e)},qr.prototype.clear=function(){this.__data__=new Vr,this.size=0},qr.prototype.delete=function(e){var t=this.__data__,r=t.delete(e);return this.size=t.size,r},qr.prototype.get=function(e){return this.__data__.get(e)},qr.prototype.has=function(e){return this.__data__.has(e)},qr.prototype.set=function(e,t){var r=this.__data__;if(r instanceof Vr){var n=r.__data__;if(!Sr||n.length<199)return n.push([e,t]),this.size=++r.size,this;r=this.__data__=new Ur(n)}return r.set(e,t),this.size=r.size,this};var fn=Ao(xn),hn=Ao(wn,!0);function pn(e,t){var r=!0;return fn(e,(function(e,n,o){return r=!!t(e,n,o)})),r}function gn(t,r,n){for(var o=-1,i=t.length;++o<i;){var a=t[o],s=r(a);if(null!=s&&(l===e?s==s&&!ls(s):n(s,l)))var l=s,c=a}return c}function mn(e,t){var r=[];return fn(e,(function(e,n,o){t(e,n,o)&&r.push(e)})),r}function bn(e,t,r,n,o){var i=-1,a=e.length;for(r||(r=vi),o||(o=[]);++i<a;){var s=e[i];t>0&&r(s)?t>1?bn(s,t-1,r,n,o):Mt(o,s):n||(o[o.length]=s)}return o}var vn=jo(),yn=jo(!0);function xn(e,t){return e&&vn(e,t,Ts)}function wn(e,t){return e&&yn(e,t,Ts)}function $n(e,t){return Ot(t,(function(t){return Za(e[t])}))}function Cn(t,r){for(var n=0,o=(r=xo(r,t)).length;null!=t&&n<o;)t=t[Ri(r[n++])];return n&&n==o?t:e}function Sn(e,t,r){var n=t(e);return Ya(e)?n:Mt(n,r(e))}function Dn(t){return null==t?t===e?"[object Undefined]":"[object Null]":tt&&tt in ke(t)?function(t){var r=je.call(t,tt),n=t[tt];try{t[tt]=e;var o=!0}catch(e){}var i=ze.call(t);return o&&(r?t[tt]=n:delete t[tt]),i}(t):function(e){return ze.call(e)}(t)}function kn(e,t){return e>t}function En(e,t){return null!=e&&je.call(e,t)}function _n(e,t){return null!=e&&t in ke(e)}function On(t,r,n){for(var o=n?Tt:Ft,i=t[0].length,a=t.length,s=a,l=we(a),c=1/0,d=[];s--;){var u=t[s];s&&r&&(u=It(u,Qt(r))),c=vr(u.length,c),l[s]=!n&&(r||i>=120&&u.length>=120)?new Kr(s&&u):e}u=t[0];var f=-1,h=l[0];e:for(;++f<i&&d.length<c;){var p=u[f],g=r?r(p):p;if(p=n||0!==p?p:0,!(h?Xt(h,g):o(d,g,n))){for(s=a;--s;){var m=l[s];if(!(m?Xt(m,g):o(t[s],g,n)))continue e}h&&h.push(g),d.push(p)}}return d}function Fn(t,r,n){var o=null==(t=_i(t,r=xo(r,t)))?t:t[Ri(Qi(r))];return null==o?e:St(o,t,n)}function Tn(e){return ts(e)&&Dn(e)==p}function In(t,r,n,o,i){return t===r||(null==t||null==r||!ts(t)&&!ts(r)?t!=t&&r!=r:function(t,r,n,o,i,a){var s=Ya(t),l=Ya(r),c=s?g:gi(t),d=l?g:gi(r),u=(c=c==p?C:c)==C,f=(d=d==p?C:d)==C,h=c==d;if(h&&qa(t)){if(!qa(r))return!1;s=!0,u=!1}if(h&&!u)return a||(a=new qr),s||cs(t)?ri(t,r,n,o,i,a):function(e,t,r,n,o,i,a){switch(r){case T:if(e.byteLength!=t.byteLength||e.byteOffset!=t.byteOffset)return!1;e=e.buffer,t=t.buffer;case F:return!(e.byteLength!=t.byteLength||!i(new Ye(e),new Ye(t)));case m:case b:case $:return La(+e,+t);case v:return e.name==t.name&&e.message==t.message;case D:case E:return e==t+"";case w:var s=ir;case k:var l=1&n;if(s||(s=lr),e.size!=t.size&&!l)return!1;var c=a.get(e);if(c)return c==t;n|=2,a.set(e,t);var d=ri(s(e),s(t),n,o,i,a);return a.delete(e),d;case _:if(Rr)return Rr.call(e)==Rr.call(t)}return!1}(t,r,c,n,o,i,a);if(!(1&n)){var y=u&&je.call(t,"__wrapped__"),x=f&&je.call(r,"__wrapped__");if(y||x){var S=y?t.value():t,O=x?r.value():r;return a||(a=new qr),i(S,O,n,o,a)}}return!!h&&(a||(a=new qr),function(t,r,n,o,i,a){var s=1&n,l=oi(t),c=l.length,d=oi(r),u=d.length;if(c!=u&&!s)return!1;for(var f=c;f--;){var h=l[f];if(!(s?h in r:je.call(r,h)))return!1}var p=a.get(t),g=a.get(r);if(p&&g)return p==r&&g==t;var m=!0;a.set(t,r),a.set(r,t);for(var b=s;++f<c;){var v=t[h=l[f]],y=r[h];if(o)var x=s?o(y,v,h,r,t,a):o(v,y,h,t,r,a);if(!(x===e?v===y||i(v,y,n,o,a):x)){m=!1;break}b||(b="constructor"==h)}if(m&&!b){var w=t.constructor,$=r.constructor;w==$||!("constructor"in t)||!("constructor"in r)||"function"==typeof w&&w instanceof w&&"function"==typeof $&&$ instanceof $||(m=!1)}return a.delete(t),a.delete(r),m}(t,r,n,o,i,a))}(t,r,n,o,In,i))}function Mn(t,r,n,o){var i=n.length,a=i,s=!o;if(null==t)return!a;for(t=ke(t);i--;){var l=n[i];if(s&&l[2]?l[1]!==t[l[0]]:!(l[0]in t))return!1}for(;++i<a;){var c=(l=n[i])[0],d=t[c],u=l[1];if(s&&l[2]){if(d===e&&!(c in t))return!1}else{var f=new qr;if(o)var h=o(d,u,c,t,r,f);if(!(h===e?In(u,d,3,o,f):h))return!1}}return!0}function An(e){return!(!es(e)||(t=e,Re&&Re in t))&&(Za(e)?Ne:pe).test(zi(e));var t}function jn(e){return"function"==typeof e?e:null==e?nl:"object"==typeof e?Ya(e)?Nn(e[0],e[1]):Ln(e):fl(e)}function Bn(e){if(!Si(e))return mr(e);var t=[];for(var r in ke(e))je.call(e,r)&&"constructor"!=r&&t.push(r);return t}function Rn(e){if(!es(e))return function(e){var t=[];if(null!=e)for(var r in ke(e))t.push(r);return t}(e);var t=Si(e),r=[];for(var n in e)("constructor"!=n||!t&&je.call(e,n))&&r.push(n);return r}function zn(e,t){return e<t}function Pn(e,t){var r=-1,n=Ua(e)?we(e.length):[];return fn(e,(function(e,o,i){n[++r]=t(e,o,i)})),n}function Ln(e){var t=ui(e);return 1==t.length&&t[0][2]?ki(t[0][0],t[0][1]):function(r){return r===e||Mn(r,e,t)}}function Nn(t,r){return wi(t)&&Di(r)?ki(Ri(t),r):function(n){var o=ks(n,t);return o===e&&o===r?Es(n,t):In(r,o,3)}}function Hn(t,r,n,o,i){t!==r&&vn(r,(function(a,s){if(i||(i=new qr),es(a))!function(t,r,n,o,i,a,s){var l=Oi(t,n),c=Oi(r,n),d=s.get(c);if(d)Jr(t,n,d);else{var u=a?a(l,c,n+"",t,r,s):e,f=u===e;if(f){var h=Ya(c),p=!h&&qa(c),g=!h&&!p&&cs(c);u=c,h||p||g?Ya(l)?u=l:Ka(l)?u=Fo(l):p?(f=!1,u=So(c,!0)):g?(f=!1,u=ko(c,!0)):u=[]:os(c)||Wa(c)?(u=l,Wa(l)?u=bs(l):es(l)&&!Za(l)||(u=bi(c))):f=!1}f&&(s.set(c,u),i(u,c,o,a,s),s.delete(c)),Jr(t,n,u)}}(t,r,s,n,Hn,o,i);else{var l=o?o(Oi(t,s),a,s+"",t,r,i):e;l===e&&(l=a),Jr(t,s,l)}}),Is)}function Wn(t,r){var n=t.length;if(n)return yi(r+=r<0?n:0,n)?t[r]:e}function Yn(e,t,r){t=t.length?It(t,(function(e){return Ya(e)?function(t){return Cn(t,1===e.length?e[0]:e)}:e})):[nl];var n=-1;t=It(t,Qt(ci()));var o=Pn(e,(function(e,r,o){var i=It(t,(function(t){return t(e)}));return{criteria:i,index:++n,value:e}}));return function(e,t){var r=e.length;for(e.sort(t);r--;)e[r]=e[r].value;return e}(o,(function(e,t){return function(e,t,r){for(var n=-1,o=e.criteria,i=t.criteria,a=o.length,s=r.length;++n<a;){var l=Eo(o[n],i[n]);if(l)return n>=s?l:l*("desc"==r[n]?-1:1)}return e.index-t.index}(e,t,r)}))}function Vn(e,t,r){for(var n=-1,o=t.length,i={};++n<o;){var a=t[n],s=Cn(e,a);r(s,a)&&Jn(i,xo(a,e),s)}return i}function Un(e,t,r,n){var o=n?Nt:Lt,i=-1,a=t.length,s=e;for(e===t&&(t=Fo(t)),r&&(s=It(e,Qt(r)));++i<a;)for(var l=0,c=t[i],d=r?r(c):c;(l=o(s,d,l,n))>-1;)s!==e&&Ge.call(s,l,1),Ge.call(e,l,1);return e}function Kn(e,t){for(var r=e?t.length:0,n=r-1;r--;){var o=t[r];if(r==n||o!==i){var i=o;yi(o)?Ge.call(e,o,1):fo(e,o)}}return e}function qn(e,t){return e+mt(wr()*(t-e+1))}function Gn(e,t){var r="";if(!e||t<1||t>d)return r;do{t%2&&(r+=e),(t=mt(t/2))&&(e+=e)}while(t);return r}function Qn(e,t){return Ii(Ei(e,t,nl),e+"")}function Zn(e){return Qr(Ls(e))}function Xn(e,t){var r=Ls(e);return ji(r,sn(t,0,r.length))}function Jn(t,r,n,o){if(!es(t))return t;for(var i=-1,a=(r=xo(r,t)).length,s=a-1,l=t;null!=l&&++i<a;){var c=Ri(r[i]),d=n;if("__proto__"===c||"constructor"===c||"prototype"===c)return t;if(i!=s){var u=l[c];(d=o?o(u,c,l):e)===e&&(d=es(u)?u:yi(r[i+1])?[]:{})}en(l,c,d),l=l[c]}return t}var eo=Or?function(e,t){return Or.set(e,t),e}:nl,to=st?function(e,t){return st(e,"toString",{configurable:!0,enumerable:!1,value:el(t),writable:!0})}:nl;function ro(e){return ji(Ls(e))}function no(e,t,r){var n=-1,o=e.length;t<0&&(t=-t>o?0:o+t),(r=r>o?o:r)<0&&(r+=o),o=t>r?0:r-t>>>0,t>>>=0;for(var i=we(o);++n<o;)i[n]=e[n+t];return i}function oo(e,t){var r;return fn(e,(function(e,n,o){return!(r=t(e,n,o))})),!!r}function io(e,t,r){var n=0,o=null==e?n:e.length;if("number"==typeof t&&t==t&&o<=2147483647){for(;n<o;){var i=n+o>>>1,a=e[i];null!==a&&!ls(a)&&(r?a<=t:a<t)?n=i+1:o=i}return o}return ao(e,t,nl,r)}function ao(t,r,n,o){var i=0,a=null==t?0:t.length;if(0===a)return 0;for(var s=(r=n(r))!=r,l=null===r,c=ls(r),d=r===e;i<a;){var u=mt((i+a)/2),f=n(t[u]),h=f!==e,p=null===f,g=f==f,m=ls(f);if(s)var b=o||g;else b=d?g&&(o||h):l?g&&h&&(o||!p):c?g&&h&&!p&&(o||!m):!p&&!m&&(o?f<=r:f<r);b?i=u+1:a=u}return vr(a,4294967294)}function so(e,t){for(var r=-1,n=e.length,o=0,i=[];++r<n;){var a=e[r],s=t?t(a):a;if(!r||!La(s,l)){var l=s;i[o++]=0===a?0:a}}return i}function lo(e){return"number"==typeof e?e:ls(e)?u:+e}function co(e){if("string"==typeof e)return e;if(Ya(e))return It(e,co)+"";if(ls(e))return zr?zr.call(e):"";var t=e+"";return"0"==t&&1/e==-1/0?"-0":t}function uo(e,t,r){var n=-1,o=Ft,i=e.length,a=!0,s=[],l=s;if(r)a=!1,o=Tt;else if(i>=200){var c=t?null:Qo(e);if(c)return lr(c);a=!1,o=Xt,l=new Kr}else l=t?[]:s;e:for(;++n<i;){var d=e[n],u=t?t(d):d;if(d=r||0!==d?d:0,a&&u==u){for(var f=l.length;f--;)if(l[f]===u)continue e;t&&l.push(u),s.push(d)}else o(l,u,r)||(l!==s&&l.push(u),s.push(d))}return s}function fo(e,t){return null==(e=_i(e,t=xo(t,e)))||delete e[Ri(Qi(t))]}function ho(e,t,r,n){return Jn(e,t,r(Cn(e,t)),n)}function po(e,t,r,n){for(var o=e.length,i=n?o:-1;(n?i--:++i<o)&&t(e[i],i,e););return r?no(e,n?0:i,n?i+1:o):no(e,n?i+1:0,n?o:i)}function go(e,t){var r=e;return r instanceof Wr&&(r=r.value()),At(t,(function(e,t){return t.func.apply(t.thisArg,Mt([e],t.args))}),r)}function mo(e,t,r){var n=e.length;if(n<2)return n?uo(e[0]):[];for(var o=-1,i=we(n);++o<n;)for(var a=e[o],s=-1;++s<n;)s!=o&&(i[o]=un(i[o]||a,e[s],t,r));return uo(bn(i,1),t,r)}function bo(t,r,n){for(var o=-1,i=t.length,a=r.length,s={};++o<i;){var l=o<a?r[o]:e;n(s,t[o],l)}return s}function vo(e){return Ka(e)?e:[]}function yo(e){return"function"==typeof e?e:nl}function xo(e,t){return Ya(e)?e:wi(e,t)?[e]:Bi(vs(e))}var wo=Qn;function $o(t,r,n){var o=t.length;return n=n===e?o:n,!r&&n>=o?t:no(t,r,n)}var Co=dt||function(e){return ft.clearTimeout(e)};function So(e,t){if(t)return e.slice();var r=e.length,n=Ve?Ve(r):new e.constructor(r);return e.copy(n),n}function Do(e){var t=new e.constructor(e.byteLength);return new Ye(t).set(new Ye(e)),t}function ko(e,t){var r=t?Do(e.buffer):e.buffer;return new e.constructor(r,e.byteOffset,e.length)}function Eo(t,r){if(t!==r){var n=t!==e,o=null===t,i=t==t,a=ls(t),s=r!==e,l=null===r,c=r==r,d=ls(r);if(!l&&!d&&!a&&t>r||a&&s&&c&&!l&&!d||o&&s&&c||!n&&c||!i)return 1;if(!o&&!a&&!d&&t<r||d&&n&&i&&!o&&!a||l&&n&&i||!s&&i||!c)return-1}return 0}function _o(e,t,r,n){for(var o=-1,i=e.length,a=r.length,s=-1,l=t.length,c=br(i-a,0),d=we(l+c),u=!n;++s<l;)d[s]=t[s];for(;++o<a;)(u||o<i)&&(d[r[o]]=e[o]);for(;c--;)d[s++]=e[o++];return d}function Oo(e,t,r,n){for(var o=-1,i=e.length,a=-1,s=r.length,l=-1,c=t.length,d=br(i-s,0),u=we(d+c),f=!n;++o<d;)u[o]=e[o];for(var h=o;++l<c;)u[h+l]=t[l];for(;++a<s;)(f||o<i)&&(u[h+r[a]]=e[o++]);return u}function Fo(e,t){var r=-1,n=e.length;for(t||(t=we(n));++r<n;)t[r]=e[r];return t}function To(t,r,n,o){var i=!n;n||(n={});for(var a=-1,s=r.length;++a<s;){var l=r[a],c=o?o(n[l],t[l],l,n,t):e;c===e&&(c=t[l]),i?on(n,l,c):en(n,l,c)}return n}function Io(e,t){return function(r,n){var o=Ya(r)?Dt:rn,i=t?t():{};return o(r,e,ci(n,2),i)}}function Mo(t){return Qn((function(r,n){var o=-1,i=n.length,a=i>1?n[i-1]:e,s=i>2?n[2]:e;for(a=t.length>3&&"function"==typeof a?(i--,a):e,s&&xi(n[0],n[1],s)&&(a=i<3?e:a,i=1),r=ke(r);++o<i;){var l=n[o];l&&t(r,l,o,a)}return r}))}function Ao(e,t){return function(r,n){if(null==r)return r;if(!Ua(r))return e(r,n);for(var o=r.length,i=t?o:-1,a=ke(r);(t?i--:++i<o)&&!1!==n(a[i],i,a););return r}}function jo(e){return function(t,r,n){for(var o=-1,i=ke(t),a=n(t),s=a.length;s--;){var l=a[e?s:++o];if(!1===r(i[l],l,i))break}return t}}function Bo(t){return function(r){var n=or(r=vs(r))?ur(r):e,o=n?n[0]:r.charAt(0),i=n?$o(n,1).join(""):r.slice(1);return o[t]()+i}}function Ro(e){return function(t){return At(Zs(Ws(t).replace(Ze,"")),e,"")}}function zo(e){return function(){var t=arguments;switch(t.length){case 0:return new e;case 1:return new e(t[0]);case 2:return new e(t[0],t[1]);case 3:return new e(t[0],t[1],t[2]);case 4:return new e(t[0],t[1],t[2],t[3]);case 5:return new e(t[0],t[1],t[2],t[3],t[4]);case 6:return new e(t[0],t[1],t[2],t[3],t[4],t[5]);case 7:return new e(t[0],t[1],t[2],t[3],t[4],t[5],t[6])}var r=Lr(e.prototype),n=e.apply(r,t);return es(n)?n:r}}function Po(t){return function(r,n,o){var i=ke(r);if(!Ua(r)){var a=ci(n,3);r=Ts(r),n=function(e){return a(i[e],e,i)}}var s=t(r,n,o);return s>-1?i[a?r[s]:s]:e}}function Lo(r){return ni((function(n){var o=n.length,i=o,a=Hr.prototype.thru;for(r&&n.reverse();i--;){var s=n[i];if("function"!=typeof s)throw new Oe(t);if(a&&!l&&"wrapper"==si(s))var l=new Hr([],!0)}for(i=l?i:o;++i<o;){var c=si(s=n[i]),d="wrapper"==c?ai(s):e;l=d&&$i(d[0])&&424==d[1]&&!d[4].length&&1==d[9]?l[si(d[0])].apply(l,d[3]):1==s.length&&$i(s)?l[c]():l.thru(s)}return function(){var e=arguments,t=e[0];if(l&&1==e.length&&Ya(t))return l.plant(t).value();for(var r=0,i=o?n[r].apply(this,e):t;++r<o;)i=n[r].call(this,i);return i}}))}function No(t,r,n,o,i,a,l,c,d,u){var f=r&s,h=1&r,p=2&r,g=24&r,m=512&r,b=p?e:zo(t);return function s(){for(var v=arguments.length,y=we(v),x=v;x--;)y[x]=arguments[x];if(g)var w=li(s),$=function(e,t){for(var r=e.length,n=0;r--;)e[r]===t&&++n;return n}(y,w);if(o&&(y=_o(y,o,i,g)),a&&(y=Oo(y,a,l,g)),v-=$,g&&v<u){var C=sr(y,w);return qo(t,r,No,s.placeholder,n,y,C,c,d,u-v)}var S=h?n:this,D=p?S[t]:t;return v=y.length,c?y=function(t,r){for(var n=t.length,o=vr(r.length,n),i=Fo(t);o--;){var a=r[o];t[o]=yi(a,n)?i[a]:e}return t}(y,c):m&&v>1&&y.reverse(),f&&d<v&&(y.length=d),this&&this!==ft&&this instanceof s&&(D=b||zo(D)),D.apply(S,y)}}function Ho(e,t){return function(r,n){return function(e,t,r,n){return xn(e,(function(e,o,i){t(n,r(e),o,i)})),n}(r,e,t(n),{})}}function Wo(t,r){return function(n,o){var i;if(n===e&&o===e)return r;if(n!==e&&(i=n),o!==e){if(i===e)return o;"string"==typeof n||"string"==typeof o?(n=co(n),o=co(o)):(n=lo(n),o=lo(o)),i=t(n,o)}return i}}function Yo(e){return ni((function(t){return t=It(t,Qt(ci())),Qn((function(r){var n=this;return e(t,(function(e){return St(e,n,r)}))}))}))}function Vo(t,r){var n=(r=r===e?" ":co(r)).length;if(n<2)return n?Gn(r,t):r;var o=Gn(r,pt(t/dr(r)));return or(r)?$o(ur(o),0,t).join(""):o.slice(0,t)}function Uo(t){return function(r,n,o){return o&&"number"!=typeof o&&xi(r,n,o)&&(n=o=e),r=hs(r),n===e?(n=r,r=0):n=hs(n),function(e,t,r,n){for(var o=-1,i=br(pt((t-e)/(r||1)),0),a=we(i);i--;)a[n?i:++o]=e,e+=r;return a}(r,n,o=o===e?r<n?1:-1:hs(o),t)}}function Ko(e){return function(t,r){return"string"==typeof t&&"string"==typeof r||(t=ms(t),r=ms(r)),e(t,r)}}function qo(t,r,n,o,s,l,c,d,u,f){var h=8&r;r|=h?i:a,4&(r&=~(h?a:i))||(r&=-4);var p=[t,r,s,h?l:e,h?c:e,h?e:l,h?e:c,d,u,f],g=n.apply(e,p);return $i(t)&&Fi(g,p),g.placeholder=o,Mi(g,t,r)}function Go(e){var t=De[e];return function(e,r){if(e=ms(e),(r=null==r?0:vr(ps(r),292))&&Vt(e)){var n=(vs(e)+"e").split("e");return+((n=(vs(t(n[0]+"e"+(+n[1]+r)))+"e").split("e"))[0]+"e"+(+n[1]-r))}return t(e)}}var Qo=kr&&1/lr(new kr([,-0]))[1]==c?function(e){return new kr(e)}:ll;function Zo(e){return function(t){var r=gi(t);return r==w?ir(t):r==k?cr(t):function(e,t){return It(t,(function(t){return[t,e[t]]}))}(t,e(t))}}function Xo(r,c,d,u,f,h,p,g){var m=2&c;if(!m&&"function"!=typeof r)throw new Oe(t);var b=u?u.length:0;if(b||(c&=-97,u=f=e),p=p===e?p:br(ps(p),0),g=g===e?g:ps(g),b-=f?f.length:0,c&a){var v=u,y=f;u=f=e}var x=m?e:ai(r),w=[r,c,d,u,f,v,y,h,p,g];if(x&&function(e,t){var r=e[1],o=t[1],i=r|o,a=i<131,c=o==s&&8==r||o==s&&r==l&&e[7].length<=t[8]||384==o&&t[7].length<=t[8]&&8==r;if(!a&&!c)return e;1&o&&(e[2]=t[2],i|=1&r?0:4);var d=t[3];if(d){var u=e[3];e[3]=u?_o(u,d,t[4]):d,e[4]=u?sr(e[3],n):t[4]}(d=t[5])&&(u=e[5],e[5]=u?Oo(u,d,t[6]):d,e[6]=u?sr(e[5],n):t[6]),(d=t[7])&&(e[7]=d),o&s&&(e[8]=null==e[8]?t[8]:vr(e[8],t[8])),null==e[9]&&(e[9]=t[9]),e[0]=t[0],e[1]=i}(w,x),r=w[0],c=w[1],d=w[2],u=w[3],f=w[4],!(g=w[9]=w[9]===e?m?0:r.length:br(w[9]-b,0))&&24&c&&(c&=-25),c&&1!=c)$=8==c||c==o?function(t,r,n){var o=zo(t);return function i(){for(var a=arguments.length,s=we(a),l=a,c=li(i);l--;)s[l]=arguments[l];var d=a<3&&s[0]!==c&&s[a-1]!==c?[]:sr(s,c);return(a-=d.length)<n?qo(t,r,No,i.placeholder,e,s,d,e,e,n-a):St(this&&this!==ft&&this instanceof i?o:t,this,s)}}(r,c,g):c!=i&&33!=c||f.length?No.apply(e,w):function(e,t,r,n){var o=1&t,i=zo(e);return function t(){for(var a=-1,s=arguments.length,l=-1,c=n.length,d=we(c+s),u=this&&this!==ft&&this instanceof t?i:e;++l<c;)d[l]=n[l];for(;s--;)d[l++]=arguments[++a];return St(u,o?r:this,d)}}(r,c,d,u);else var $=function(e,t,r){var n=1&t,o=zo(e);return function t(){return(this&&this!==ft&&this instanceof t?o:e).apply(n?r:this,arguments)}}(r,c,d);return Mi((x?eo:Fi)($,w),r,c)}function Jo(t,r,n,o){return t===e||La(t,Ie[n])&&!je.call(o,n)?r:t}function ei(t,r,n,o,i,a){return es(t)&&es(r)&&(a.set(r,t),Hn(t,r,e,ei,a),a.delete(r)),t}function ti(t){return os(t)?e:t}function ri(t,r,n,o,i,a){var s=1&n,l=t.length,c=r.length;if(l!=c&&!(s&&c>l))return!1;var d=a.get(t),u=a.get(r);if(d&&u)return d==r&&u==t;var f=-1,h=!0,p=2&n?new Kr:e;for(a.set(t,r),a.set(r,t);++f<l;){var g=t[f],m=r[f];if(o)var b=s?o(m,g,f,r,t,a):o(g,m,f,t,r,a);if(b!==e){if(b)continue;h=!1;break}if(p){if(!Bt(r,(function(e,t){if(!Xt(p,t)&&(g===e||i(g,e,n,o,a)))return p.push(t)}))){h=!1;break}}else if(g!==m&&!i(g,m,n,o,a)){h=!1;break}}return a.delete(t),a.delete(r),h}function ni(t){return Ii(Ei(t,e,Vi),t+"")}function oi(e){return Sn(e,Ts,hi)}function ii(e){return Sn(e,Is,pi)}var ai=Or?function(e){return Or.get(e)}:ll;function si(e){for(var t=e.name+"",r=Fr[t],n=je.call(Fr,t)?r.length:0;n--;){var o=r[n],i=o.func;if(null==i||i==e)return o.name}return t}function li(e){return(je.call(Pr,"placeholder")?Pr:e).placeholder}function ci(){var e=Pr.iteratee||ol;return e=e===ol?jn:e,arguments.length?e(arguments[0],arguments[1]):e}function di(e,t){var r,n,o=e.__data__;return("string"==(n=typeof(r=t))||"number"==n||"symbol"==n||"boolean"==n?"__proto__"!==r:null===r)?o["string"==typeof t?"string":"hash"]:o.map}function ui(e){for(var t=Ts(e),r=t.length;r--;){var n=t[r],o=e[n];t[r]=[n,o,Di(o)]}return t}function fi(t,r){var n=function(t,r){return null==t?e:t[r]}(t,r);return An(n)?n:e}var hi=bt?function(e){return null==e?[]:(e=ke(e),Ot(bt(e),(function(t){return qe.call(e,t)})))}:gl,pi=bt?function(e){for(var t=[];e;)Mt(t,hi(e)),e=Ue(e);return t}:gl,gi=Dn;function mi(e,t,r){for(var n=-1,o=(t=xo(t,e)).length,i=!1;++n<o;){var a=Ri(t[n]);if(!(i=null!=e&&r(e,a)))break;e=e[a]}return i||++n!=o?i:!!(o=null==e?0:e.length)&&Ja(o)&&yi(a,o)&&(Ya(e)||Wa(e))}function bi(e){return"function"!=typeof e.constructor||Si(e)?{}:Lr(Ue(e))}function vi(e){return Ya(e)||Wa(e)||!!(Qe&&e&&e[Qe])}function yi(e,t){var r=typeof e;return!!(t=null==t?d:t)&&("number"==r||"symbol"!=r&&me.test(e))&&e>-1&&e%1==0&&e<t}function xi(e,t,r){if(!es(r))return!1;var n=typeof t;return!!("number"==n?Ua(r)&&yi(t,r.length):"string"==n&&t in r)&&La(r[t],e)}function wi(e,t){if(Ya(e))return!1;var r=typeof e;return!("number"!=r&&"symbol"!=r&&"boolean"!=r&&null!=e&&!ls(e))||X.test(e)||!Z.test(e)||null!=t&&e in ke(t)}function $i(e){var t=si(e),r=Pr[t];if("function"!=typeof r||!(t in Wr.prototype))return!1;if(e===r)return!0;var n=ai(r);return!!n&&e===n[0]}(Cr&&gi(new Cr(new ArrayBuffer(1)))!=T||Sr&&gi(new Sr)!=w||Dr&&gi(Dr.resolve())!=S||kr&&gi(new kr)!=k||Er&&gi(new Er)!=O)&&(gi=function(t){var r=Dn(t),n=r==C?t.constructor:e,o=n?zi(n):"";if(o)switch(o){case Tr:return T;case Ir:return w;case Mr:return S;case Ar:return k;case jr:return O}return r});var Ci=Me?Za:ml;function Si(e){var t=e&&e.constructor;return e===("function"==typeof t&&t.prototype||Ie)}function Di(e){return e==e&&!es(e)}function ki(t,r){return function(n){return null!=n&&n[t]===r&&(r!==e||t in ke(n))}}function Ei(t,r,n){return r=br(r===e?t.length-1:r,0),function(){for(var e=arguments,o=-1,i=br(e.length-r,0),a=we(i);++o<i;)a[o]=e[r+o];o=-1;for(var s=we(r+1);++o<r;)s[o]=e[o];return s[r]=n(a),St(t,this,s)}}function _i(e,t){return t.length<2?e:Cn(e,no(t,0,-1))}function Oi(e,t){if(("constructor"!==t||"function"!=typeof e[t])&&"__proto__"!=t)return e[t]}var Fi=Ai(eo),Ti=ht||function(e,t){return ft.setTimeout(e,t)},Ii=Ai(to);function Mi(e,t,r){var n=t+"";return Ii(e,function(e,t){var r=t.length;if(!r)return e;var n=r-1;return t[n]=(r>1?"& ":"")+t[n],t=t.join(r>2?", ":" "),e.replace(oe,"{\n/* [wrapped with "+t+"] */\n")}(n,function(e,t){return kt(h,(function(r){var n="_."+r[0];t&r[1]&&!Ft(e,n)&&e.push(n)})),e.sort()}(function(e){var t=e.match(ie);return t?t[1].split(ae):[]}(n),r)))}function Ai(t){var r=0,n=0;return function(){var o=yr(),i=16-(o-n);if(n=o,i>0){if(++r>=800)return arguments[0]}else r=0;return t.apply(e,arguments)}}function ji(t,r){var n=-1,o=t.length,i=o-1;for(r=r===e?o:r;++n<r;){var a=qn(n,i),s=t[a];t[a]=t[n],t[n]=s}return t.length=r,t}var Bi=function(e){var t=Aa(e,(function(e){return 500===r.size&&r.clear(),e})),r=t.cache;return t}((function(e){var t=[];return 46===e.charCodeAt(0)&&t.push(""),e.replace(J,(function(e,r,n,o){t.push(n?o.replace(ce,"$1"):r||e)})),t}));function Ri(e){if("string"==typeof e||ls(e))return e;var t=e+"";return"0"==t&&1/e==-1/0?"-0":t}function zi(e){if(null!=e){try{return Ae.call(e)}catch(e){}try{return e+""}catch(e){}}return""}function Pi(e){if(e instanceof Wr)return e.clone();var t=new Hr(e.__wrapped__,e.__chain__);return t.__actions__=Fo(e.__actions__),t.__index__=e.__index__,t.__values__=e.__values__,t}var Li=Qn((function(e,t){return Ka(e)?un(e,bn(t,1,Ka,!0)):[]})),Ni=Qn((function(t,r){var n=Qi(r);return Ka(n)&&(n=e),Ka(t)?un(t,bn(r,1,Ka,!0),ci(n,2)):[]})),Hi=Qn((function(t,r){var n=Qi(r);return Ka(n)&&(n=e),Ka(t)?un(t,bn(r,1,Ka,!0),e,n):[]}));function Wi(e,t,r){var n=null==e?0:e.length;if(!n)return-1;var o=null==r?0:ps(r);return o<0&&(o=br(n+o,0)),Pt(e,ci(t,3),o)}function Yi(t,r,n){var o=null==t?0:t.length;if(!o)return-1;var i=o-1;return n!==e&&(i=ps(n),i=n<0?br(o+i,0):vr(i,o-1)),Pt(t,ci(r,3),i,!0)}function Vi(e){return null!=e&&e.length?bn(e,1):[]}function Ui(t){return t&&t.length?t[0]:e}var Ki=Qn((function(e){var t=It(e,vo);return t.length&&t[0]===e[0]?On(t):[]})),qi=Qn((function(t){var r=Qi(t),n=It(t,vo);return r===Qi(n)?r=e:n.pop(),n.length&&n[0]===t[0]?On(n,ci(r,2)):[]})),Gi=Qn((function(t){var r=Qi(t),n=It(t,vo);return(r="function"==typeof r?r:e)&&n.pop(),n.length&&n[0]===t[0]?On(n,e,r):[]}));function Qi(t){var r=null==t?0:t.length;return r?t[r-1]:e}var Zi=Qn(Xi);function Xi(e,t){return e&&e.length&&t&&t.length?Un(e,t):e}var Ji=ni((function(e,t){var r=null==e?0:e.length,n=an(e,t);return Kn(e,It(t,(function(e){return yi(e,r)?+e:e})).sort(Eo)),n}));function ea(e){return null==e?e:$r.call(e)}var ta=Qn((function(e){return uo(bn(e,1,Ka,!0))})),ra=Qn((function(t){var r=Qi(t);return Ka(r)&&(r=e),uo(bn(t,1,Ka,!0),ci(r,2))})),na=Qn((function(t){var r=Qi(t);return r="function"==typeof r?r:e,uo(bn(t,1,Ka,!0),e,r)}));function oa(e){if(!e||!e.length)return[];var t=0;return e=Ot(e,(function(e){if(Ka(e))return t=br(e.length,t),!0})),qt(t,(function(t){return It(e,Yt(t))}))}function ia(t,r){if(!t||!t.length)return[];var n=oa(t);return null==r?n:It(n,(function(t){return St(r,e,t)}))}var aa=Qn((function(e,t){return Ka(e)?un(e,t):[]})),sa=Qn((function(e){return mo(Ot(e,Ka))})),la=Qn((function(t){var r=Qi(t);return Ka(r)&&(r=e),mo(Ot(t,Ka),ci(r,2))})),ca=Qn((function(t){var r=Qi(t);return r="function"==typeof r?r:e,mo(Ot(t,Ka),e,r)})),da=Qn(oa),ua=Qn((function(t){var r=t.length,n=r>1?t[r-1]:e;return n="function"==typeof n?(t.pop(),n):e,ia(t,n)}));function fa(e){var t=Pr(e);return t.__chain__=!0,t}function ha(e,t){return t(e)}var pa=ni((function(t){var r=t.length,n=r?t[0]:0,o=this.__wrapped__,i=function(e){return an(e,t)};return!(r>1||this.__actions__.length)&&o instanceof Wr&&yi(n)?((o=o.slice(n,+n+(r?1:0))).__actions__.push({func:ha,args:[i],thisArg:e}),new Hr(o,this.__chain__).thru((function(t){return r&&!t.length&&t.push(e),t}))):this.thru(i)})),ga=Io((function(e,t,r){je.call(e,r)?++e[r]:on(e,r,1)})),ma=Po(Wi),ba=Po(Yi);function va(e,t){return(Ya(e)?kt:fn)(e,ci(t,3))}function ya(e,t){return(Ya(e)?Et:hn)(e,ci(t,3))}var xa=Io((function(e,t,r){je.call(e,r)?e[r].push(t):on(e,r,[t])})),wa=Qn((function(e,t,r){var n=-1,o="function"==typeof t,i=Ua(e)?we(e.length):[];return fn(e,(function(e){i[++n]=o?St(t,e,r):Fn(e,t,r)})),i})),$a=Io((function(e,t,r){on(e,r,t)}));function Ca(e,t){return(Ya(e)?It:Pn)(e,ci(t,3))}var Sa=Io((function(e,t,r){e[r?0:1].push(t)}),(function(){return[[],[]]})),Da=Qn((function(e,t){if(null==e)return[];var r=t.length;return r>1&&xi(e,t[0],t[1])?t=[]:r>2&&xi(t[0],t[1],t[2])&&(t=[t[0]]),Yn(e,bn(t,1),[])})),ka=ut||function(){return ft.Date.now()};function Ea(t,r,n){return r=n?e:r,r=t&&null==r?t.length:r,Xo(t,s,e,e,e,e,r)}function _a(r,n){var o;if("function"!=typeof n)throw new Oe(t);return r=ps(r),function(){return--r>0&&(o=n.apply(this,arguments)),r<=1&&(n=e),o}}var Oa=Qn((function(e,t,r){var n=1;if(r.length){var o=sr(r,li(Oa));n|=i}return Xo(e,n,t,r,o)})),Fa=Qn((function(e,t,r){var n=3;if(r.length){var o=sr(r,li(Fa));n|=i}return Xo(t,n,e,r,o)}));function Ta(r,n,o){var i,a,s,l,c,d,u=0,f=!1,h=!1,p=!0;if("function"!=typeof r)throw new Oe(t);function g(t){var n=i,o=a;return i=a=e,u=t,l=r.apply(o,n)}function m(t){var r=t-d;return d===e||r>=n||r<0||h&&t-u>=s}function b(){var e=ka();if(m(e))return v(e);c=Ti(b,function(e){var t=n-(e-d);return h?vr(t,s-(e-u)):t}(e))}function v(t){return c=e,p&&i?g(t):(i=a=e,l)}function y(){var t=ka(),r=m(t);if(i=arguments,a=this,d=t,r){if(c===e)return function(e){return u=e,c=Ti(b,n),f?g(e):l}(d);if(h)return Co(c),c=Ti(b,n),g(d)}return c===e&&(c=Ti(b,n)),l}return n=ms(n)||0,es(o)&&(f=!!o.leading,s=(h="maxWait"in o)?br(ms(o.maxWait)||0,n):s,p="trailing"in o?!!o.trailing:p),y.cancel=function(){c!==e&&Co(c),u=0,i=d=a=c=e},y.flush=function(){return c===e?l:v(ka())},y}var Ia=Qn((function(e,t){return dn(e,1,t)})),Ma=Qn((function(e,t,r){return dn(e,ms(t)||0,r)}));function Aa(e,r){if("function"!=typeof e||null!=r&&"function"!=typeof r)throw new Oe(t);var n=function(){var t=arguments,o=r?r.apply(this,t):t[0],i=n.cache;if(i.has(o))return i.get(o);var a=e.apply(this,t);return n.cache=i.set(o,a)||i,a};return n.cache=new(Aa.Cache||Ur),n}function ja(e){if("function"!=typeof e)throw new Oe(t);return function(){var t=arguments;switch(t.length){case 0:return!e.call(this);case 1:return!e.call(this,t[0]);case 2:return!e.call(this,t[0],t[1]);case 3:return!e.call(this,t[0],t[1],t[2])}return!e.apply(this,t)}}Aa.Cache=Ur;var Ba=wo((function(e,t){var r=(t=1==t.length&&Ya(t[0])?It(t[0],Qt(ci())):It(bn(t,1),Qt(ci()))).length;return Qn((function(n){for(var o=-1,i=vr(n.length,r);++o<i;)n[o]=t[o].call(this,n[o]);return St(e,this,n)}))})),Ra=Qn((function(t,r){var n=sr(r,li(Ra));return Xo(t,i,e,r,n)})),za=Qn((function(t,r){var n=sr(r,li(za));return Xo(t,a,e,r,n)})),Pa=ni((function(t,r){return Xo(t,l,e,e,e,r)}));function La(e,t){return e===t||e!=e&&t!=t}var Na=Ko(kn),Ha=Ko((function(e,t){return e>=t})),Wa=Tn(function(){return arguments}())?Tn:function(e){return ts(e)&&je.call(e,"callee")&&!qe.call(e,"callee")},Ya=we.isArray,Va=vt?Qt(vt):function(e){return ts(e)&&Dn(e)==F};function Ua(e){return null!=e&&Ja(e.length)&&!Za(e)}function Ka(e){return ts(e)&&Ua(e)}var qa=Rt||ml,Ga=yt?Qt(yt):function(e){return ts(e)&&Dn(e)==b};function Qa(e){if(!ts(e))return!1;var t=Dn(e);return t==v||"[object DOMException]"==t||"string"==typeof e.message&&"string"==typeof e.name&&!os(e)}function Za(e){if(!es(e))return!1;var t=Dn(e);return t==y||t==x||"[object AsyncFunction]"==t||"[object Proxy]"==t}function Xa(e){return"number"==typeof e&&e==ps(e)}function Ja(e){return"number"==typeof e&&e>-1&&e%1==0&&e<=d}function es(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)}function ts(e){return null!=e&&"object"==typeof e}var rs=xt?Qt(xt):function(e){return ts(e)&&gi(e)==w};function ns(e){return"number"==typeof e||ts(e)&&Dn(e)==$}function os(e){if(!ts(e)||Dn(e)!=C)return!1;var t=Ue(e);if(null===t)return!0;var r=je.call(t,"constructor")&&t.constructor;return"function"==typeof r&&r instanceof r&&Ae.call(r)==Pe}var is=wt?Qt(wt):function(e){return ts(e)&&Dn(e)==D},as=$t?Qt($t):function(e){return ts(e)&&gi(e)==k};function ss(e){return"string"==typeof e||!Ya(e)&&ts(e)&&Dn(e)==E}function ls(e){return"symbol"==typeof e||ts(e)&&Dn(e)==_}var cs=Ct?Qt(Ct):function(e){return ts(e)&&Ja(e.length)&&!!it[Dn(e)]},ds=Ko(zn),us=Ko((function(e,t){return e<=t}));function fs(e){if(!e)return[];if(Ua(e))return ss(e)?ur(e):Fo(e);if(Je&&e[Je])return function(e){for(var t,r=[];!(t=e.next()).done;)r.push(t.value);return r}(e[Je]());var t=gi(e);return(t==w?ir:t==k?lr:Ls)(e)}function hs(e){return e?(e=ms(e))===c||e===-1/0?17976931348623157e292*(e<0?-1:1):e==e?e:0:0===e?e:0}function ps(e){var t=hs(e),r=t%1;return t==t?r?t-r:t:0}function gs(e){return e?sn(ps(e),0,f):0}function ms(e){if("number"==typeof e)return e;if(ls(e))return u;if(es(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=es(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=Gt(e);var r=he.test(e);return r||ge.test(e)?ct(e.slice(2),r?2:8):fe.test(e)?u:+e}function bs(e){return To(e,Is(e))}function vs(e){return null==e?"":co(e)}var ys=Mo((function(e,t){if(Si(t)||Ua(t))To(t,Ts(t),e);else for(var r in t)je.call(t,r)&&en(e,r,t[r])})),xs=Mo((function(e,t){To(t,Is(t),e)})),ws=Mo((function(e,t,r,n){To(t,Is(t),e,n)})),$s=Mo((function(e,t,r,n){To(t,Ts(t),e,n)})),Cs=ni(an),Ss=Qn((function(t,r){t=ke(t);var n=-1,o=r.length,i=o>2?r[2]:e;for(i&&xi(r[0],r[1],i)&&(o=1);++n<o;)for(var a=r[n],s=Is(a),l=-1,c=s.length;++l<c;){var d=s[l],u=t[d];(u===e||La(u,Ie[d])&&!je.call(t,d))&&(t[d]=a[d])}return t})),Ds=Qn((function(t){return t.push(e,ei),St(As,e,t)}));function ks(t,r,n){var o=null==t?e:Cn(t,r);return o===e?n:o}function Es(e,t){return null!=e&&mi(e,t,_n)}var _s=Ho((function(e,t,r){null!=t&&"function"!=typeof t.toString&&(t=ze.call(t)),e[t]=r}),el(nl)),Os=Ho((function(e,t,r){null!=t&&"function"!=typeof t.toString&&(t=ze.call(t)),je.call(e,t)?e[t].push(r):e[t]=[r]}),ci),Fs=Qn(Fn);function Ts(e){return Ua(e)?Gr(e):Bn(e)}function Is(e){return Ua(e)?Gr(e,!0):Rn(e)}var Ms=Mo((function(e,t,r){Hn(e,t,r)})),As=Mo((function(e,t,r,n){Hn(e,t,r,n)})),js=ni((function(e,t){var r={};if(null==e)return r;var n=!1;t=It(t,(function(t){return t=xo(t,e),n||(n=t.length>1),t})),To(e,ii(e),r),n&&(r=ln(r,7,ti));for(var o=t.length;o--;)fo(r,t[o]);return r})),Bs=ni((function(e,t){return null==e?{}:function(e,t){return Vn(e,t,(function(t,r){return Es(e,r)}))}(e,t)}));function Rs(e,t){if(null==e)return{};var r=It(ii(e),(function(e){return[e]}));return t=ci(t),Vn(e,r,(function(e,r){return t(e,r[0])}))}var zs=Zo(Ts),Ps=Zo(Is);function Ls(e){return null==e?[]:Zt(e,Ts(e))}var Ns=Ro((function(e,t,r){return t=t.toLowerCase(),e+(r?Hs(t):t)}));function Hs(e){return Qs(vs(e).toLowerCase())}function Ws(e){return(e=vs(e))&&e.replace(be,tr).replace(Xe,"")}var Ys=Ro((function(e,t,r){return e+(r?"-":"")+t.toLowerCase()})),Vs=Ro((function(e,t,r){return e+(r?" ":"")+t.toLowerCase()})),Us=Bo("toLowerCase"),Ks=Ro((function(e,t,r){return e+(r?"_":"")+t.toLowerCase()})),qs=Ro((function(e,t,r){return e+(r?" ":"")+Qs(t)})),Gs=Ro((function(e,t,r){return e+(r?" ":"")+t.toUpperCase()})),Qs=Bo("toUpperCase");function Zs(t,r,n){return t=vs(t),(r=n?e:r)===e?function(e){return rt.test(e)}(t)?function(e){return e.match(et)||[]}(t):function(e){return e.match(se)||[]}(t):t.match(r)||[]}var Xs=Qn((function(t,r){try{return St(t,e,r)}catch(e){return Qa(e)?e:new Ce(e)}})),Js=ni((function(e,t){return kt(t,(function(t){t=Ri(t),on(e,t,Oa(e[t],e))})),e}));function el(e){return function(){return e}}var tl=Lo(),rl=Lo(!0);function nl(e){return e}function ol(e){return jn("function"==typeof e?e:ln(e,1))}var il=Qn((function(e,t){return function(r){return Fn(r,e,t)}})),al=Qn((function(e,t){return function(r){return Fn(e,r,t)}}));function sl(e,t,r){var n=Ts(t),o=$n(t,n);null!=r||es(t)&&(o.length||!n.length)||(r=t,t=e,e=this,o=$n(t,Ts(t)));var i=!(es(r)&&"chain"in r&&!r.chain),a=Za(e);return kt(o,(function(r){var n=t[r];e[r]=n,a&&(e.prototype[r]=function(){var t=this.__chain__;if(i||t){var r=e(this.__wrapped__);return(r.__actions__=Fo(this.__actions__)).push({func:n,args:arguments,thisArg:e}),r.__chain__=t,r}return n.apply(e,Mt([this.value()],arguments))})})),e}function ll(){}var cl=Yo(It),dl=Yo(_t),ul=Yo(Bt);function fl(e){return wi(e)?Yt(Ri(e)):function(e){return function(t){return Cn(t,e)}}(e)}var hl=Uo(),pl=Uo(!0);function gl(){return[]}function ml(){return!1}var bl,vl=Wo((function(e,t){return e+t}),0),yl=Go("ceil"),xl=Wo((function(e,t){return e/t}),1),wl=Go("floor"),$l=Wo((function(e,t){return e*t}),1),Cl=Go("round"),Sl=Wo((function(e,t){return e-t}),0);return Pr.after=function(e,r){if("function"!=typeof r)throw new Oe(t);return e=ps(e),function(){if(--e<1)return r.apply(this,arguments)}},Pr.ary=Ea,Pr.assign=ys,Pr.assignIn=xs,Pr.assignInWith=ws,Pr.assignWith=$s,Pr.at=Cs,Pr.before=_a,Pr.bind=Oa,Pr.bindAll=Js,Pr.bindKey=Fa,Pr.castArray=function(){if(!arguments.length)return[];var e=arguments[0];return Ya(e)?e:[e]},Pr.chain=fa,Pr.chunk=function(t,r,n){r=(n?xi(t,r,n):r===e)?1:br(ps(r),0);var o=null==t?0:t.length;if(!o||r<1)return[];for(var i=0,a=0,s=we(pt(o/r));i<o;)s[a++]=no(t,i,i+=r);return s},Pr.compact=function(e){for(var t=-1,r=null==e?0:e.length,n=0,o=[];++t<r;){var i=e[t];i&&(o[n++]=i)}return o},Pr.concat=function(){var e=arguments.length;if(!e)return[];for(var t=we(e-1),r=arguments[0],n=e;n--;)t[n-1]=arguments[n];return Mt(Ya(r)?Fo(r):[r],bn(t,1))},Pr.cond=function(e){var r=null==e?0:e.length,n=ci();return e=r?It(e,(function(e){if("function"!=typeof e[1])throw new Oe(t);return[n(e[0]),e[1]]})):[],Qn((function(t){for(var n=-1;++n<r;){var o=e[n];if(St(o[0],this,t))return St(o[1],this,t)}}))},Pr.conforms=function(e){return function(e){var t=Ts(e);return function(r){return cn(r,e,t)}}(ln(e,1))},Pr.constant=el,Pr.countBy=ga,Pr.create=function(e,t){var r=Lr(e);return null==t?r:nn(r,t)},Pr.curry=function t(r,n,o){var i=Xo(r,8,e,e,e,e,e,n=o?e:n);return i.placeholder=t.placeholder,i},Pr.curryRight=function t(r,n,i){var a=Xo(r,o,e,e,e,e,e,n=i?e:n);return a.placeholder=t.placeholder,a},Pr.debounce=Ta,Pr.defaults=Ss,Pr.defaultsDeep=Ds,Pr.defer=Ia,Pr.delay=Ma,Pr.difference=Li,Pr.differenceBy=Ni,Pr.differenceWith=Hi,Pr.drop=function(t,r,n){var o=null==t?0:t.length;return o?no(t,(r=n||r===e?1:ps(r))<0?0:r,o):[]},Pr.dropRight=function(t,r,n){var o=null==t?0:t.length;return o?no(t,0,(r=o-(r=n||r===e?1:ps(r)))<0?0:r):[]},Pr.dropRightWhile=function(e,t){return e&&e.length?po(e,ci(t,3),!0,!0):[]},Pr.dropWhile=function(e,t){return e&&e.length?po(e,ci(t,3),!0):[]},Pr.fill=function(t,r,n,o){var i=null==t?0:t.length;return i?(n&&"number"!=typeof n&&xi(t,r,n)&&(n=0,o=i),function(t,r,n,o){var i=t.length;for((n=ps(n))<0&&(n=-n>i?0:i+n),(o=o===e||o>i?i:ps(o))<0&&(o+=i),o=n>o?0:gs(o);n<o;)t[n++]=r;return t}(t,r,n,o)):[]},Pr.filter=function(e,t){return(Ya(e)?Ot:mn)(e,ci(t,3))},Pr.flatMap=function(e,t){return bn(Ca(e,t),1)},Pr.flatMapDeep=function(e,t){return bn(Ca(e,t),c)},Pr.flatMapDepth=function(t,r,n){return n=n===e?1:ps(n),bn(Ca(t,r),n)},Pr.flatten=Vi,Pr.flattenDeep=function(e){return null!=e&&e.length?bn(e,c):[]},Pr.flattenDepth=function(t,r){return null!=t&&t.length?bn(t,r=r===e?1:ps(r)):[]},Pr.flip=function(e){return Xo(e,512)},Pr.flow=tl,Pr.flowRight=rl,Pr.fromPairs=function(e){for(var t=-1,r=null==e?0:e.length,n={};++t<r;){var o=e[t];n[o[0]]=o[1]}return n},Pr.functions=function(e){return null==e?[]:$n(e,Ts(e))},Pr.functionsIn=function(e){return null==e?[]:$n(e,Is(e))},Pr.groupBy=xa,Pr.initial=function(e){return null!=e&&e.length?no(e,0,-1):[]},Pr.intersection=Ki,Pr.intersectionBy=qi,Pr.intersectionWith=Gi,Pr.invert=_s,Pr.invertBy=Os,Pr.invokeMap=wa,Pr.iteratee=ol,Pr.keyBy=$a,Pr.keys=Ts,Pr.keysIn=Is,Pr.map=Ca,Pr.mapKeys=function(e,t){var r={};return t=ci(t,3),xn(e,(function(e,n,o){on(r,t(e,n,o),e)})),r},Pr.mapValues=function(e,t){var r={};return t=ci(t,3),xn(e,(function(e,n,o){on(r,n,t(e,n,o))})),r},Pr.matches=function(e){return Ln(ln(e,1))},Pr.matchesProperty=function(e,t){return Nn(e,ln(t,1))},Pr.memoize=Aa,Pr.merge=Ms,Pr.mergeWith=As,Pr.method=il,Pr.methodOf=al,Pr.mixin=sl,Pr.negate=ja,Pr.nthArg=function(e){return e=ps(e),Qn((function(t){return Wn(t,e)}))},Pr.omit=js,Pr.omitBy=function(e,t){return Rs(e,ja(ci(t)))},Pr.once=function(e){return _a(2,e)},Pr.orderBy=function(t,r,n,o){return null==t?[]:(Ya(r)||(r=null==r?[]:[r]),Ya(n=o?e:n)||(n=null==n?[]:[n]),Yn(t,r,n))},Pr.over=cl,Pr.overArgs=Ba,Pr.overEvery=dl,Pr.overSome=ul,Pr.partial=Ra,Pr.partialRight=za,Pr.partition=Sa,Pr.pick=Bs,Pr.pickBy=Rs,Pr.property=fl,Pr.propertyOf=function(t){return function(r){return null==t?e:Cn(t,r)}},Pr.pull=Zi,Pr.pullAll=Xi,Pr.pullAllBy=function(e,t,r){return e&&e.length&&t&&t.length?Un(e,t,ci(r,2)):e},Pr.pullAllWith=function(t,r,n){return t&&t.length&&r&&r.length?Un(t,r,e,n):t},Pr.pullAt=Ji,Pr.range=hl,Pr.rangeRight=pl,Pr.rearg=Pa,Pr.reject=function(e,t){return(Ya(e)?Ot:mn)(e,ja(ci(t,3)))},Pr.remove=function(e,t){var r=[];if(!e||!e.length)return r;var n=-1,o=[],i=e.length;for(t=ci(t,3);++n<i;){var a=e[n];t(a,n,e)&&(r.push(a),o.push(n))}return Kn(e,o),r},Pr.rest=function(r,n){if("function"!=typeof r)throw new Oe(t);return Qn(r,n=n===e?n:ps(n))},Pr.reverse=ea,Pr.sampleSize=function(t,r,n){return r=(n?xi(t,r,n):r===e)?1:ps(r),(Ya(t)?Zr:Xn)(t,r)},Pr.set=function(e,t,r){return null==e?e:Jn(e,t,r)},Pr.setWith=function(t,r,n,o){return o="function"==typeof o?o:e,null==t?t:Jn(t,r,n,o)},Pr.shuffle=function(e){return(Ya(e)?Xr:ro)(e)},Pr.slice=function(t,r,n){var o=null==t?0:t.length;return o?(n&&"number"!=typeof n&&xi(t,r,n)?(r=0,n=o):(r=null==r?0:ps(r),n=n===e?o:ps(n)),no(t,r,n)):[]},Pr.sortBy=Da,Pr.sortedUniq=function(e){return e&&e.length?so(e):[]},Pr.sortedUniqBy=function(e,t){return e&&e.length?so(e,ci(t,2)):[]},Pr.split=function(t,r,n){return n&&"number"!=typeof n&&xi(t,r,n)&&(r=n=e),(n=n===e?f:n>>>0)?(t=vs(t))&&("string"==typeof r||null!=r&&!is(r))&&!(r=co(r))&&or(t)?$o(ur(t),0,n):t.split(r,n):[]},Pr.spread=function(e,r){if("function"!=typeof e)throw new Oe(t);return r=null==r?0:br(ps(r),0),Qn((function(t){var n=t[r],o=$o(t,0,r);return n&&Mt(o,n),St(e,this,o)}))},Pr.tail=function(e){var t=null==e?0:e.length;return t?no(e,1,t):[]},Pr.take=function(t,r,n){return t&&t.length?no(t,0,(r=n||r===e?1:ps(r))<0?0:r):[]},Pr.takeRight=function(t,r,n){var o=null==t?0:t.length;return o?no(t,(r=o-(r=n||r===e?1:ps(r)))<0?0:r,o):[]},Pr.takeRightWhile=function(e,t){return e&&e.length?po(e,ci(t,3),!1,!0):[]},Pr.takeWhile=function(e,t){return e&&e.length?po(e,ci(t,3)):[]},Pr.tap=function(e,t){return t(e),e},Pr.throttle=function(e,r,n){var o=!0,i=!0;if("function"!=typeof e)throw new Oe(t);return es(n)&&(o="leading"in n?!!n.leading:o,i="trailing"in n?!!n.trailing:i),Ta(e,r,{leading:o,maxWait:r,trailing:i})},Pr.thru=ha,Pr.toArray=fs,Pr.toPairs=zs,Pr.toPairsIn=Ps,Pr.toPath=function(e){return Ya(e)?It(e,Ri):ls(e)?[e]:Fo(Bi(vs(e)))},Pr.toPlainObject=bs,Pr.transform=function(e,t,r){var n=Ya(e),o=n||qa(e)||cs(e);if(t=ci(t,4),null==r){var i=e&&e.constructor;r=o?n?new i:[]:es(e)&&Za(i)?Lr(Ue(e)):{}}return(o?kt:xn)(e,(function(e,n,o){return t(r,e,n,o)})),r},Pr.unary=function(e){return Ea(e,1)},Pr.union=ta,Pr.unionBy=ra,Pr.unionWith=na,Pr.uniq=function(e){return e&&e.length?uo(e):[]},Pr.uniqBy=function(e,t){return e&&e.length?uo(e,ci(t,2)):[]},Pr.uniqWith=function(t,r){return r="function"==typeof r?r:e,t&&t.length?uo(t,e,r):[]},Pr.unset=function(e,t){return null==e||fo(e,t)},Pr.unzip=oa,Pr.unzipWith=ia,Pr.update=function(e,t,r){return null==e?e:ho(e,t,yo(r))},Pr.updateWith=function(t,r,n,o){return o="function"==typeof o?o:e,null==t?t:ho(t,r,yo(n),o)},Pr.values=Ls,Pr.valuesIn=function(e){return null==e?[]:Zt(e,Is(e))},Pr.without=aa,Pr.words=Zs,Pr.wrap=function(e,t){return Ra(yo(t),e)},Pr.xor=sa,Pr.xorBy=la,Pr.xorWith=ca,Pr.zip=da,Pr.zipObject=function(e,t){return bo(e||[],t||[],en)},Pr.zipObjectDeep=function(e,t){return bo(e||[],t||[],Jn)},Pr.zipWith=ua,Pr.entries=zs,Pr.entriesIn=Ps,Pr.extend=xs,Pr.extendWith=ws,sl(Pr,Pr),Pr.add=vl,Pr.attempt=Xs,Pr.camelCase=Ns,Pr.capitalize=Hs,Pr.ceil=yl,Pr.clamp=function(t,r,n){return n===e&&(n=r,r=e),n!==e&&(n=(n=ms(n))==n?n:0),r!==e&&(r=(r=ms(r))==r?r:0),sn(ms(t),r,n)},Pr.clone=function(e){return ln(e,4)},Pr.cloneDeep=function(e){return ln(e,5)},Pr.cloneDeepWith=function(t,r){return ln(t,5,r="function"==typeof r?r:e)},Pr.cloneWith=function(t,r){return ln(t,4,r="function"==typeof r?r:e)},Pr.conformsTo=function(e,t){return null==t||cn(e,t,Ts(t))},Pr.deburr=Ws,Pr.defaultTo=function(e,t){return null==e||e!=e?t:e},Pr.divide=xl,Pr.endsWith=function(t,r,n){t=vs(t),r=co(r);var o=t.length,i=n=n===e?o:sn(ps(n),0,o);return(n-=r.length)>=0&&t.slice(n,i)==r},Pr.eq=La,Pr.escape=function(e){return(e=vs(e))&&K.test(e)?e.replace(V,rr):e},Pr.escapeRegExp=function(e){return(e=vs(e))&&te.test(e)?e.replace(ee,"\\$&"):e},Pr.every=function(t,r,n){var o=Ya(t)?_t:pn;return n&&xi(t,r,n)&&(r=e),o(t,ci(r,3))},Pr.find=ma,Pr.findIndex=Wi,Pr.findKey=function(e,t){return zt(e,ci(t,3),xn)},Pr.findLast=ba,Pr.findLastIndex=Yi,Pr.findLastKey=function(e,t){return zt(e,ci(t,3),wn)},Pr.floor=wl,Pr.forEach=va,Pr.forEachRight=ya,Pr.forIn=function(e,t){return null==e?e:vn(e,ci(t,3),Is)},Pr.forInRight=function(e,t){return null==e?e:yn(e,ci(t,3),Is)},Pr.forOwn=function(e,t){return e&&xn(e,ci(t,3))},Pr.forOwnRight=function(e,t){return e&&wn(e,ci(t,3))},Pr.get=ks,Pr.gt=Na,Pr.gte=Ha,Pr.has=function(e,t){return null!=e&&mi(e,t,En)},Pr.hasIn=Es,Pr.head=Ui,Pr.identity=nl,Pr.includes=function(e,t,r,n){e=Ua(e)?e:Ls(e),r=r&&!n?ps(r):0;var o=e.length;return r<0&&(r=br(o+r,0)),ss(e)?r<=o&&e.indexOf(t,r)>-1:!!o&&Lt(e,t,r)>-1},Pr.indexOf=function(e,t,r){var n=null==e?0:e.length;if(!n)return-1;var o=null==r?0:ps(r);return o<0&&(o=br(n+o,0)),Lt(e,t,o)},Pr.inRange=function(t,r,n){return r=hs(r),n===e?(n=r,r=0):n=hs(n),function(e,t,r){return e>=vr(t,r)&&e<br(t,r)}(t=ms(t),r,n)},Pr.invoke=Fs,Pr.isArguments=Wa,Pr.isArray=Ya,Pr.isArrayBuffer=Va,Pr.isArrayLike=Ua,Pr.isArrayLikeObject=Ka,Pr.isBoolean=function(e){return!0===e||!1===e||ts(e)&&Dn(e)==m},Pr.isBuffer=qa,Pr.isDate=Ga,Pr.isElement=function(e){return ts(e)&&1===e.nodeType&&!os(e)},Pr.isEmpty=function(e){if(null==e)return!0;if(Ua(e)&&(Ya(e)||"string"==typeof e||"function"==typeof e.splice||qa(e)||cs(e)||Wa(e)))return!e.length;var t=gi(e);if(t==w||t==k)return!e.size;if(Si(e))return!Bn(e).length;for(var r in e)if(je.call(e,r))return!1;return!0},Pr.isEqual=function(e,t){return In(e,t)},Pr.isEqualWith=function(t,r,n){var o=(n="function"==typeof n?n:e)?n(t,r):e;return o===e?In(t,r,e,n):!!o},Pr.isError=Qa,Pr.isFinite=function(e){return"number"==typeof e&&Vt(e)},Pr.isFunction=Za,Pr.isInteger=Xa,Pr.isLength=Ja,Pr.isMap=rs,Pr.isMatch=function(e,t){return e===t||Mn(e,t,ui(t))},Pr.isMatchWith=function(t,r,n){return n="function"==typeof n?n:e,Mn(t,r,ui(r),n)},Pr.isNaN=function(e){return ns(e)&&e!=+e},Pr.isNative=function(e){if(Ci(e))throw new Ce("Unsupported core-js use. Try https://npms.io/search?q=ponyfill.");return An(e)},Pr.isNil=function(e){return null==e},Pr.isNull=function(e){return null===e},Pr.isNumber=ns,Pr.isObject=es,Pr.isObjectLike=ts,Pr.isPlainObject=os,Pr.isRegExp=is,Pr.isSafeInteger=function(e){return Xa(e)&&e>=-9007199254740991&&e<=d},Pr.isSet=as,Pr.isString=ss,Pr.isSymbol=ls,Pr.isTypedArray=cs,Pr.isUndefined=function(t){return t===e},Pr.isWeakMap=function(e){return ts(e)&&gi(e)==O},Pr.isWeakSet=function(e){return ts(e)&&"[object WeakSet]"==Dn(e)},Pr.join=function(e,t){return null==e?"":gr.call(e,t)},Pr.kebabCase=Ys,Pr.last=Qi,Pr.lastIndexOf=function(t,r,n){var o=null==t?0:t.length;if(!o)return-1;var i=o;return n!==e&&(i=(i=ps(n))<0?br(o+i,0):vr(i,o-1)),r==r?function(e,t,r){for(var n=r+1;n--;)if(e[n]===t)return n;return n}(t,r,i):Pt(t,Ht,i,!0)},Pr.lowerCase=Vs,Pr.lowerFirst=Us,Pr.lt=ds,Pr.lte=us,Pr.max=function(t){return t&&t.length?gn(t,nl,kn):e},Pr.maxBy=function(t,r){return t&&t.length?gn(t,ci(r,2),kn):e},Pr.mean=function(e){return Wt(e,nl)},Pr.meanBy=function(e,t){return Wt(e,ci(t,2))},Pr.min=function(t){return t&&t.length?gn(t,nl,zn):e},Pr.minBy=function(t,r){return t&&t.length?gn(t,ci(r,2),zn):e},Pr.stubArray=gl,Pr.stubFalse=ml,Pr.stubObject=function(){return{}},Pr.stubString=function(){return""},Pr.stubTrue=function(){return!0},Pr.multiply=$l,Pr.nth=function(t,r){return t&&t.length?Wn(t,ps(r)):e},Pr.noConflict=function(){return ft._===this&&(ft._=Le),this},Pr.noop=ll,Pr.now=ka,Pr.pad=function(e,t,r){e=vs(e);var n=(t=ps(t))?dr(e):0;if(!t||n>=t)return e;var o=(t-n)/2;return Vo(mt(o),r)+e+Vo(pt(o),r)},Pr.padEnd=function(e,t,r){e=vs(e);var n=(t=ps(t))?dr(e):0;return t&&n<t?e+Vo(t-n,r):e},Pr.padStart=function(e,t,r){e=vs(e);var n=(t=ps(t))?dr(e):0;return t&&n<t?Vo(t-n,r)+e:e},Pr.parseInt=function(e,t,r){return r||null==t?t=0:t&&(t=+t),xr(vs(e).replace(re,""),t||0)},Pr.random=function(t,r,n){if(n&&"boolean"!=typeof n&&xi(t,r,n)&&(r=n=e),n===e&&("boolean"==typeof r?(n=r,r=e):"boolean"==typeof t&&(n=t,t=e)),t===e&&r===e?(t=0,r=1):(t=hs(t),r===e?(r=t,t=0):r=hs(r)),t>r){var o=t;t=r,r=o}if(n||t%1||r%1){var i=wr();return vr(t+i*(r-t+lt("1e-"+((i+"").length-1))),r)}return qn(t,r)},Pr.reduce=function(e,t,r){var n=Ya(e)?At:Ut,o=arguments.length<3;return n(e,ci(t,4),r,o,fn)},Pr.reduceRight=function(e,t,r){var n=Ya(e)?jt:Ut,o=arguments.length<3;return n(e,ci(t,4),r,o,hn)},Pr.repeat=function(t,r,n){return r=(n?xi(t,r,n):r===e)?1:ps(r),Gn(vs(t),r)},Pr.replace=function(){var e=arguments,t=vs(e[0]);return e.length<3?t:t.replace(e[1],e[2])},Pr.result=function(t,r,n){var o=-1,i=(r=xo(r,t)).length;for(i||(i=1,t=e);++o<i;){var a=null==t?e:t[Ri(r[o])];a===e&&(o=i,a=n),t=Za(a)?a.call(t):a}return t},Pr.round=Cl,Pr.runInContext=ne,Pr.sample=function(e){return(Ya(e)?Qr:Zn)(e)},Pr.size=function(e){if(null==e)return 0;if(Ua(e))return ss(e)?dr(e):e.length;var t=gi(e);return t==w||t==k?e.size:Bn(e).length},Pr.snakeCase=Ks,Pr.some=function(t,r,n){var o=Ya(t)?Bt:oo;return n&&xi(t,r,n)&&(r=e),o(t,ci(r,3))},Pr.sortedIndex=function(e,t){return io(e,t)},Pr.sortedIndexBy=function(e,t,r){return ao(e,t,ci(r,2))},Pr.sortedIndexOf=function(e,t){var r=null==e?0:e.length;if(r){var n=io(e,t);if(n<r&&La(e[n],t))return n}return-1},Pr.sortedLastIndex=function(e,t){return io(e,t,!0)},Pr.sortedLastIndexBy=function(e,t,r){return ao(e,t,ci(r,2),!0)},Pr.sortedLastIndexOf=function(e,t){if(null!=e&&e.length){var r=io(e,t,!0)-1;if(La(e[r],t))return r}return-1},Pr.startCase=qs,Pr.startsWith=function(e,t,r){return e=vs(e),r=null==r?0:sn(ps(r),0,e.length),t=co(t),e.slice(r,r+t.length)==t},Pr.subtract=Sl,Pr.sum=function(e){return e&&e.length?Kt(e,nl):0},Pr.sumBy=function(e,t){return e&&e.length?Kt(e,ci(t,2)):0},Pr.template=function(t,r,n){var o=Pr.templateSettings;n&&xi(t,r,n)&&(r=e),t=vs(t),r=ws({},r,o,Jo);var i,a,s=ws({},r.imports,o.imports,Jo),l=Ts(s),c=Zt(s,l),d=0,u=r.interpolate||ve,f="__p += '",h=Ee((r.escape||ve).source+"|"+u.source+"|"+(u===Q?de:ve).source+"|"+(r.evaluate||ve).source+"|$","g"),p="//# sourceURL="+(je.call(r,"sourceURL")?(r.sourceURL+"").replace(/\s/g," "):"lodash.templateSources["+ ++ot+"]")+"\n";t.replace(h,(function(e,r,n,o,s,l){return n||(n=o),f+=t.slice(d,l).replace(ye,nr),r&&(i=!0,f+="' +\n__e("+r+") +\n'"),s&&(a=!0,f+="';\n"+s+";\n__p += '"),n&&(f+="' +\n((__t = ("+n+")) == null ? '' : __t) +\n'"),d=l+e.length,e})),f+="';\n";var g=je.call(r,"variable")&&r.variable;if(g){if(le.test(g))throw new Ce("Invalid `variable` option passed into `_.template`")}else f="with (obj) {\n"+f+"\n}\n";f=(a?f.replace(N,""):f).replace(H,"$1").replace(W,"$1;"),f="function("+(g||"obj")+") {\n"+(g?"":"obj || (obj = {});\n")+"var __t, __p = ''"+(i?", __e = _.escape":"")+(a?", __j = Array.prototype.join;\nfunction print() { __p += __j.call(arguments, '') }\n":";\n")+f+"return __p\n}";var m=Xs((function(){return Se(l,p+"return "+f).apply(e,c)}));if(m.source=f,Qa(m))throw m;return m},Pr.times=function(e,t){if((e=ps(e))<1||e>d)return[];var r=f,n=vr(e,f);t=ci(t),e-=f;for(var o=qt(n,t);++r<e;)t(r);return o},Pr.toFinite=hs,Pr.toInteger=ps,Pr.toLength=gs,Pr.toLower=function(e){return vs(e).toLowerCase()},Pr.toNumber=ms,Pr.toSafeInteger=function(e){return e?sn(ps(e),-9007199254740991,d):0===e?e:0},Pr.toString=vs,Pr.toUpper=function(e){return vs(e).toUpperCase()},Pr.trim=function(t,r,n){if((t=vs(t))&&(n||r===e))return Gt(t);if(!t||!(r=co(r)))return t;var o=ur(t),i=ur(r);return $o(o,Jt(o,i),er(o,i)+1).join("")},Pr.trimEnd=function(t,r,n){if((t=vs(t))&&(n||r===e))return t.slice(0,fr(t)+1);if(!t||!(r=co(r)))return t;var o=ur(t);return $o(o,0,er(o,ur(r))+1).join("")},Pr.trimStart=function(t,r,n){if((t=vs(t))&&(n||r===e))return t.replace(re,"");if(!t||!(r=co(r)))return t;var o=ur(t);return $o(o,Jt(o,ur(r))).join("")},Pr.truncate=function(t,r){var n=30,o="...";if(es(r)){var i="separator"in r?r.separator:i;n="length"in r?ps(r.length):n,o="omission"in r?co(r.omission):o}var a=(t=vs(t)).length;if(or(t)){var s=ur(t);a=s.length}if(n>=a)return t;var l=n-dr(o);if(l<1)return o;var c=s?$o(s,0,l).join(""):t.slice(0,l);if(i===e)return c+o;if(s&&(l+=c.length-l),is(i)){if(t.slice(l).search(i)){var d,u=c;for(i.global||(i=Ee(i.source,vs(ue.exec(i))+"g")),i.lastIndex=0;d=i.exec(u);)var f=d.index;c=c.slice(0,f===e?l:f)}}else if(t.indexOf(co(i),l)!=l){var h=c.lastIndexOf(i);h>-1&&(c=c.slice(0,h))}return c+o},Pr.unescape=function(e){return(e=vs(e))&&U.test(e)?e.replace(Y,hr):e},Pr.uniqueId=function(e){var t=++Be;return vs(e)+t},Pr.upperCase=Gs,Pr.upperFirst=Qs,Pr.each=va,Pr.eachRight=ya,Pr.first=Ui,sl(Pr,(bl={},xn(Pr,(function(e,t){je.call(Pr.prototype,t)||(bl[t]=e)})),bl),{chain:!1}),Pr.VERSION="4.17.21",kt(["bind","bindKey","curry","curryRight","partial","partialRight"],(function(e){Pr[e].placeholder=Pr})),kt(["drop","take"],(function(t,r){Wr.prototype[t]=function(n){n=n===e?1:br(ps(n),0);var o=this.__filtered__&&!r?new Wr(this):this.clone();return o.__filtered__?o.__takeCount__=vr(n,o.__takeCount__):o.__views__.push({size:vr(n,f),type:t+(o.__dir__<0?"Right":"")}),o},Wr.prototype[t+"Right"]=function(e){return this.reverse()[t](e).reverse()}})),kt(["filter","map","takeWhile"],(function(e,t){var r=t+1,n=1==r||3==r;Wr.prototype[e]=function(e){var t=this.clone();return t.__iteratees__.push({iteratee:ci(e,3),type:r}),t.__filtered__=t.__filtered__||n,t}})),kt(["head","last"],(function(e,t){var r="take"+(t?"Right":"");Wr.prototype[e]=function(){return this[r](1).value()[0]}})),kt(["initial","tail"],(function(e,t){var r="drop"+(t?"":"Right");Wr.prototype[e]=function(){return this.__filtered__?new Wr(this):this[r](1)}})),Wr.prototype.compact=function(){return this.filter(nl)},Wr.prototype.find=function(e){return this.filter(e).head()},Wr.prototype.findLast=function(e){return this.reverse().find(e)},Wr.prototype.invokeMap=Qn((function(e,t){return"function"==typeof e?new Wr(this):this.map((function(r){return Fn(r,e,t)}))})),Wr.prototype.reject=function(e){return this.filter(ja(ci(e)))},Wr.prototype.slice=function(t,r){t=ps(t);var n=this;return n.__filtered__&&(t>0||r<0)?new Wr(n):(t<0?n=n.takeRight(-t):t&&(n=n.drop(t)),r!==e&&(n=(r=ps(r))<0?n.dropRight(-r):n.take(r-t)),n)},Wr.prototype.takeRightWhile=function(e){return this.reverse().takeWhile(e).reverse()},Wr.prototype.toArray=function(){return this.take(f)},xn(Wr.prototype,(function(t,r){var n=/^(?:filter|find|map|reject)|While$/.test(r),o=/^(?:head|last)$/.test(r),i=Pr[o?"take"+("last"==r?"Right":""):r],a=o||/^find/.test(r);i&&(Pr.prototype[r]=function(){var r=this.__wrapped__,s=o?[1]:arguments,l=r instanceof Wr,c=s[0],d=l||Ya(r),u=function(e){var t=i.apply(Pr,Mt([e],s));return o&&f?t[0]:t};d&&n&&"function"==typeof c&&1!=c.length&&(l=d=!1);var f=this.__chain__,h=!!this.__actions__.length,p=a&&!f,g=l&&!h;if(!a&&d){r=g?r:new Wr(this);var m=t.apply(r,s);return m.__actions__.push({func:ha,args:[u],thisArg:e}),new Hr(m,f)}return p&&g?t.apply(this,s):(m=this.thru(u),p?o?m.value()[0]:m.value():m)})})),kt(["pop","push","shift","sort","splice","unshift"],(function(e){var t=Fe[e],r=/^(?:push|sort|unshift)$/.test(e)?"tap":"thru",n=/^(?:pop|shift)$/.test(e);Pr.prototype[e]=function(){var e=arguments;if(n&&!this.__chain__){var o=this.value();return t.apply(Ya(o)?o:[],e)}return this[r]((function(r){return t.apply(Ya(r)?r:[],e)}))}})),xn(Wr.prototype,(function(e,t){var r=Pr[t];if(r){var n=r.name+"";je.call(Fr,n)||(Fr[n]=[]),Fr[n].push({name:t,func:r})}})),Fr[No(e,2).name]=[{name:"wrapper",func:e}],Wr.prototype.clone=function(){var e=new Wr(this.__wrapped__);return e.__actions__=Fo(this.__actions__),e.__dir__=this.__dir__,e.__filtered__=this.__filtered__,e.__iteratees__=Fo(this.__iteratees__),e.__takeCount__=this.__takeCount__,e.__views__=Fo(this.__views__),e},Wr.prototype.reverse=function(){if(this.__filtered__){var e=new Wr(this);e.__dir__=-1,e.__filtered__=!0}else(e=this.clone()).__dir__*=-1;return e},Wr.prototype.value=function(){var e=this.__wrapped__.value(),t=this.__dir__,r=Ya(e),n=t<0,o=r?e.length:0,i=function(e,t,r){for(var n=-1,o=r.length;++n<o;){var i=r[n],a=i.size;switch(i.type){case"drop":e+=a;break;case"dropRight":t-=a;break;case"take":t=vr(t,e+a);break;case"takeRight":e=br(e,t-a)}}return{start:e,end:t}}(0,o,this.__views__),a=i.start,s=i.end,l=s-a,c=n?s:a-1,d=this.__iteratees__,u=d.length,f=0,h=vr(l,this.__takeCount__);if(!r||!n&&o==l&&h==l)return go(e,this.__actions__);var p=[];e:for(;l--&&f<h;){for(var g=-1,m=e[c+=t];++g<u;){var b=d[g],v=b.iteratee,y=b.type,x=v(m);if(2==y)m=x;else if(!x){if(1==y)continue e;break e}}p[f++]=m}return p},Pr.prototype.at=pa,Pr.prototype.chain=function(){return fa(this)},Pr.prototype.commit=function(){return new Hr(this.value(),this.__chain__)},Pr.prototype.next=function(){this.__values__===e&&(this.__values__=fs(this.value()));var t=this.__index__>=this.__values__.length;return{done:t,value:t?e:this.__values__[this.__index__++]}},Pr.prototype.plant=function(t){for(var r,n=this;n instanceof Nr;){var o=Pi(n);o.__index__=0,o.__values__=e,r?i.__wrapped__=o:r=o;var i=o;n=n.__wrapped__}return i.__wrapped__=t,r},Pr.prototype.reverse=function(){var t=this.__wrapped__;if(t instanceof Wr){var r=t;return this.__actions__.length&&(r=new Wr(this)),(r=r.reverse()).__actions__.push({func:ha,args:[ea],thisArg:e}),new Hr(r,this.__chain__)}return this.thru(ea)},Pr.prototype.toJSON=Pr.prototype.valueOf=Pr.prototype.value=function(){return go(this.__wrapped__,this.__actions__)},Pr.prototype.first=Pr.prototype.head,Je&&(Pr.prototype[Je]=function(){return this}),Pr}();pt?((pt.exports=pr)._=pr,ht._=pr):ft._=pr}.call(Be);var bC=mC.exports;const vC=o.forwardRef(((n,o)=>{var{value:i,readOnly:a,"data-testid":s,maskRange:l,unmaskRange:d,maskRegex:u,maskTransformer:f,iconMask:h=e(ve,{}),iconUnmask:p=e(be,{}),iconActiveColor:m,iconInactiveColor:b,maskChar:v="•",error:y,disableMask:x,transformInput:w,loadState:$,onMask:C,onUnmask:S,onChange:D,onFocus:k,onBlur:E,onTryAgain:_}=n,O=ct(n,["value","readOnly","data-testid","maskRange","unmaskRange","maskRegex","maskTransformer","iconMask","iconUnmask","iconActiveColor","iconInactiveColor","maskChar","error","disableMask","transformInput","loadState","onMask","onUnmask","onChange","onFocus","onBlur","onTryAgain"]);const F=a&&bC.isEmpty(i),[T,I]=g(!x),[M,A]=g(i||"");c((()=>{A(i||"")}),[i]);const j=e=>{L(!1),k&&k(e)},B=e=>{L(!0),E&&E(e)},R=e=>{let t=e.target.value;switch(w){case"uppercase":t=t.toUpperCase();break;case"lowercase":t=t.toLowerCase()}A(t),e.target.value=t,D&&D(e)},z=()=>{a&&_&&_()},P=()=>{L(!T)},L=e=>{I(e),e?C&&C():S&&S()},N=()=>!(null==M?void 0:M.toString().length)||x,H=()=>{if(F)return e(r,{});const t=N();return e(iC,{"data-testid":"icon-"+(T?"masked":"unmasked"),onClick:t?void 0:P,$isDisabled:t,$inactiveColor:b,$activeColor:m,children:T?p:h})};return e("div",{"aria-busy":"loading"===$,"aria-live":"polite",children:(()=>{if(a)switch($){case"fail":return t(hC,{onClick:z,"data-testid":"try-again-button",children:[t(dC,{children:[e(uC,{}),e(fC,{children:"Error"})]}),e(cC,{children:"Try again?"})]});case"loading":return t(aC,{children:[e(lC,{}),e(sC,{children:"Retrieving..."})]})}return e(oC,Object.assign({ref:o,"data-testid":`${s||"masked-input"}${T?"-masked":"-unmasked"}`,addon:{type:"custom",attributes:{children:H()},position:"right"},onFocus:a?void 0:j,onBlur:a?void 0:B,onClick:a?P:void 0,onChange:R,value:F?"-":T&&!x?Sd.maskValue(M,{maskChar:v,maskRange:l,unmaskRange:d,maskRegex:u,maskTransformer:f}):M,readOnly:a,error:y,$isDisabled:N()},O))})()})})),yC=o.forwardRef(((t,r)=>{const{label:n,errorMessage:o,id:i="form-field-masked-input","data-error-testid":a,"data-testid":s,layoutType:l,mobileCols:c,tabletCols:d,desktopCols:u}=t,f=ct(t,["label","errorMessage","id","data-error-testid","data-testid","layoutType","mobileCols","tabletCols","desktopCols"]);return e(ku,{id:i,label:n,errorMessage:o,disabled:f.disabled,"data-error-testid":a,layoutType:l,mobileCols:c,tabletCols:d,desktopCols:u,children:e(vC,Object.assign({ref:r,id:`${i}-base`,"data-testid":s||i,error:!!o},f))})})),xC=_.div`
    font-weight: ${e=>e.$bold?Zi.Spec["weight-semibold"]:Zi.Spec["weight-regular"]};

    ${e=>e.$disabled?O`
                color: ${Qi["text-disabled"]};
            `:e.$selected?O`
                color: ${Qi["text-selected"]};
            `:O`
                color: ${Qi.text};
            `}
    width: 100%;

    ${e=>"end"===e.$truncateType&&pa(e.$maxLines||2)}
    overflow-wrap: break-word;
`,wC=_.div`
    color: ${Qi["text-subtlest"]};
    width: 100%;

    ${e=>"end"===e.$truncateType&&pa(e.$maxLines||2)}
    overflow-wrap: break-word;

    ${e=>"next-line"===e.$labelDisplayType?O`
                    ${Zi["body-md-semibold"]}
                `:O`
                    ${Zi["body-baseline-regular"]}
                `}
`,$C=_.span`
    font-weight: ${Zi.Spec["weight-semibold"]};
`,CC=_.div`
    text-align: left;
    width: 100%;
    overflow: hidden;
    overflow-wrap: break-word;

    ${e=>"small"===e.$variant?Zi["body-md-regular"]:Zi["body-baseline-regular"]}

    ${e=>{switch(e.$labelDisplayType){case"next-line":return O`
                    display: flex;
                    flex-direction: column;
                `;case"inline":return O`
                    ${xC} {
                        display: inline;
                    }

                    ${wC} {
                        display: inline;
                        margin-left: 0.5rem;
                    }
                `}}}
`,SC=_.div`
    display: inline-block;
    width: ${e=>1===e.$maxLines?50:100}%;
    height: 1lh;
    word-break: break-all;
    overflow: hidden;
`,DC=_.div`
    display: inline-block;
    width: ${e=>1===e.$maxLines?50:100}%;
    height: 1lh;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    direction: rtl;
    text-align: right;
`,kC=({bold:n,displayType:o="inline",label:i,searchTerm:s,maxLines:l=2,selected:c,disabled:u,sublabel:f,truncationType:h="middle",variant:p="default"})=>{const g=b(F),m="small"===p?Zi.Spec["body-size-md"]({theme:g}):Zi.Spec["body-size-baseline"]({theme:g}),v=Zi.Spec["font-family"]({theme:g}),{ref:y,width:x}=qc(),w=d((e=>{if("inline"!==o||!x)return!1;return Sd.getTextWidth(e,`${m} '${v}'`)>x*l-50}),[x,o,m,v,l]),$=a((()=>w(i)),[w,i]),C=a((()=>f&&w(f)),[w,f]),S=n=>{if(!s)return n;const o=s.toLowerCase().trim(),a=n.toLowerCase().indexOf(o),l=a+s.length;return-1===a?n:t(r,{children:[i.slice(0,a),e($C,{$variant:p,children:i.slice(a,l)}),i.slice(l)]})},D=n=>t(r,{children:[e(SC,{$maxLines:l,"aria-hidden":!0,children:S(n)}),e(DC,{$maxLines:l,"aria-hidden":!0,children:S(n)})]});return t(CC,{ref:y,$labelDisplayType:$||C?"next-line":o,$variant:p,children:[e(xC,{"aria-label":i,$bold:n,$maxLines:l,$selected:c,$disabled:u,$truncateType:h,children:"middle"===h&&$?D(i):S(i)}),f&&e(wC,{"aria-label":f,$maxLines:l,$truncateType:h,$labelDisplayType:o,children:"middle"===h&&C?D(f):f})]})};function EC(e){return()=>e}function _C(e){e()}function OC(e,t){return r=>e(t(r))}function FC(e,t){return()=>e(t)}function TC(e,t){return r=>e(t,r)}function IC(e){return void 0!==e}function MC(){}function AC(e,t){return t(e),e}function jC(e,t){return t(e)}function BC(...e){return e}function RC(e,t){return e(1,t)}function zC(e,t){e(0,t)}function PC(e){e(2)}function LC(e){return e(4)}function NC(e,t){return RC(e,TC(t,0))}function HC(e,t){const r=e(1,(e=>{r(),t(e)}));return r}function WC(e){let t,r;return n=>o=>{t=o,r&&clearTimeout(r),r=setTimeout((()=>{n(t)}),e)}}function YC(e,t){return e===t}function VC(e=YC){let t;return r=>n=>{e(t,n)||(t=n,r(n))}}function UC(e){return t=>r=>{e(r)&&t(r)}}function KC(e){return t=>OC(t,e)}function qC(e){return t=>()=>{t(e)}}function GC(e,...t){const r=function(...e){return t=>e.reduceRight(jC,t)}(...t);return(t,n)=>{switch(t){case 2:return void PC(e);case 1:return RC(e,r(n))}}}function QC(e,t){return r=>n=>{r(t=e(t,n))}}function ZC(e){return t=>r=>{e>0?e--:t(r)}}function XC(e){let t,r=null;return n=>o=>{r=o,!t&&(t=setTimeout((()=>{t=void 0,n(r)}),e))}}function JC(...e){const t=new Array(e.length);let r=0,n=null;const o=Math.pow(2,e.length)-1;return e.forEach(((e,i)=>{const a=Math.pow(2,i);RC(e,(e=>{const s=r;r|=a,t[i]=e,s!==o&&r===o&&n&&(n(),n=null)}))})),e=>i=>{const a=()=>{e([i].concat(t))};r===o?a():n=a}}function eS(e){let t=e;const r=rS();return(e,n)=>{switch(e){case 0:t=n;break;case 1:n(t);break;case 4:return t}return r(e,n)}}function tS(e,t){return AC(eS(t),(t=>NC(e,t)))}function rS(){const e=[];return(t,r)=>{switch(t){case 0:return void e.slice().forEach((e=>{e(r)}));case 2:return void e.splice(0,e.length);case 1:return e.push(r),()=>{const t=e.indexOf(r);t>-1&&e.splice(t,1)}}}}function nS(e){return AC(rS(),(t=>NC(e,t)))}function oS(e,t=[],{singleton:r}={singleton:!0}){return{constructor:e,dependencies:t,id:iS(),singleton:r}}const iS=()=>Symbol();function aS(...e){const t=rS(),r=new Array(e.length);let n=0;const o=Math.pow(2,e.length)-1;return e.forEach(((e,i)=>{const a=Math.pow(2,i);RC(e,(e=>{r[i]=e,n|=a,n===o&&zC(t,r)}))})),function(e,i){switch(e){case 2:return void PC(t);case 1:return n===o&&i(r),RC(t,i)}}}function sS(e,t=YC){return GC(e,VC(t))}function lS(...e){return function(t,r){switch(t){case 2:return;case 1:return function(...e){return()=>{e.map(_C)}}(...e.map((e=>RC(e,r))))}}}var cS=(e=>(e[e.DEBUG=0]="DEBUG",e[e.INFO=1]="INFO",e[e.WARN=2]="WARN",e[e.ERROR=3]="ERROR",e))(cS||{});const dS={0:"debug",3:"error",1:"log",2:"warn"},uS=oS((()=>{const e=eS(3);return{log:eS(((t,r,n=1)=>{var o;n>=(null!=(o=(typeof globalThis>"u"?window:globalThis).VIRTUOSO_LOG_LEVEL)?o:LC(e))&&console[dS[n]]("%creact-virtuoso: %c%s %o","color: #0253b3; font-weight: bold","color: initial",t,r)})),logLevel:e}}),[],{singleton:!0});function fS(e,t,r){return hS(e,t,r).callbackRef}function hS(e,t,r){const n=o.useRef(null);let i=e=>{};if(typeof ResizeObserver<"u"){const a=o.useMemo((()=>new ResizeObserver((t=>{const n=()=>{const r=t[0].target;null!==r.offsetParent&&e(r)};r?n():requestAnimationFrame(n)}))),[e]);i=e=>{e&&t?(a.observe(e),n.current=e):(n.current&&a.unobserve(n.current),n.current=null)}}return{callbackRef:i,ref:n}}function pS(e,t,r,n,i,a,s,l,c){const d=o.useCallback((r=>{const o=function(e,t,r,n){const o=e.length;if(0===o)return null;const i=[];for(let a=0;a<o;a++){const o=e.item(a);if(void 0===o.dataset.index)continue;const s=parseInt(o.dataset.index),l=parseFloat(o.dataset.knownSize),c=t(o,r);if(0===c&&n("Zero-sized element, this should not happen",{child:o},cS.ERROR),c===l)continue;const d=i[i.length-1];0===i.length||d.size!==c||d.endIndex!==s-1?i.push({endIndex:s,size:c,startIndex:s}):i[i.length-1].endIndex++}return i}(r.children,t,l?"offsetWidth":"offsetHeight",i);let c=r.parentElement;for(;!c.dataset.virtuosoScroller;)c=c.parentElement;const d="window"===c.lastElementChild.dataset.viewportType,u=s?l?s.scrollLeft:s.scrollTop:d?l?window.pageXOffset||document.documentElement.scrollLeft:window.pageYOffset||document.documentElement.scrollTop:l?c.scrollLeft:c.scrollTop,f=s?l?s.scrollWidth:s.scrollHeight:d?l?document.documentElement.scrollWidth:document.documentElement.scrollHeight:l?c.scrollWidth:c.scrollHeight,h=s?l?s.offsetWidth:s.offsetHeight:d?l?window.innerWidth:window.innerHeight:l?c.offsetWidth:c.offsetHeight;n({scrollHeight:f,scrollTop:Math.max(u,0),viewportHeight:h}),null==a||a(l?gS("column-gap",getComputedStyle(r).columnGap,i):gS("row-gap",getComputedStyle(r).rowGap,i)),null!==o&&e(o)}),[e,t,i,a,s,n]);return hS(d,r,c)}function gS(e,t,r){return"normal"!==t&&!(null!=t&&t.endsWith("px"))&&r(`${e} was not resolved to pixel value correctly`,t,cS.WARN),"normal"===t?0:parseInt(null!=t?t:"0",10)}function mS(e,t,r){const n=o.useRef(null),i=o.useCallback((r=>{if(null==r||!r.offsetParent)return;const o=r.getBoundingClientRect(),i=o.width;let a,s;if(t){const e=t.getBoundingClientRect(),r=o.top-e.top;s=e.height-Math.max(0,r),a=r+t.scrollTop}else s=window.innerHeight-Math.max(0,o.top),a=o.top+window.pageYOffset;n.current={offsetTop:a,visibleHeight:s,visibleWidth:i},e(n.current)}),[e,t]),{callbackRef:a,ref:s}=hS(i,!0,r),l=o.useCallback((()=>{i(s.current)}),[i,s]);return o.useEffect((()=>{if(t){t.addEventListener("scroll",l);const e=new ResizeObserver((()=>{requestAnimationFrame(l)}));return e.observe(t),()=>{t.removeEventListener("scroll",l),e.unobserve(t)}}return window.addEventListener("scroll",l),window.addEventListener("resize",l),()=>{window.removeEventListener("scroll",l),window.removeEventListener("resize",l)}}),[l,t]),a}const bS=oS((()=>{const e=rS(),t=rS(),r=eS(0),n=rS(),o=eS(0),i=rS(),a=rS(),s=eS(0),l=eS(0),c=eS(0),d=eS(0),u=rS(),f=rS(),h=eS(!1),p=eS(!1),g=eS(!1);return NC(GC(e,KC((({scrollTop:e})=>e))),t),NC(GC(e,KC((({scrollHeight:e})=>e))),a),NC(t,o),{deviation:r,fixedFooterHeight:c,fixedHeaderHeight:l,footerHeight:d,headerHeight:s,horizontalDirection:p,scrollBy:f,scrollContainerState:e,scrollHeight:a,scrollingInProgress:h,scrollTo:u,scrollTop:t,skipAnimationFrameInResizeObserver:g,smoothScrollTargetReached:n,statefulScrollTop:o,viewportHeight:i}}),[],{singleton:!0}),vS={lvl:0};function yS(e,t){const r=e.length;if(0===r)return[];let{index:n,value:o}=t(e[0]);const i=[];for(let a=1;a<r;a++){const{index:r,value:s}=t(e[a]);i.push({end:r-1,start:n,value:o}),n=r,o=s}return i.push({end:1/0,start:n,value:o}),i}function xS(e){return e===vS}function wS(e,t){if(!xS(e))return t===e.k?e.v:t<e.k?wS(e.l,t):wS(e.r,t)}function $S(e,t,r="k"){if(xS(e))return[-1/0,void 0];if(Number(e[r])===t)return[e.k,e.v];if(Number(e[r])<t){const n=$S(e.r,t,r);return n[0]===-1/0?[e.k,e.v]:n}return $S(e.l,t,r)}function CS(e,t,r){return xS(e)?AS(t,r,1):t===e.k?FS(e,{k:t,v:r}):t<e.k?jS(FS(e,{l:CS(e.l,t,r)})):jS(FS(e,{r:CS(e.r,t,r)}))}function SS(){return vS}function DS(e,t,r){if(xS(e))return[];return function(e){return yS(e,(({k:e,v:t})=>({index:e,value:t})))}(_S(e,$S(e,t)[0],r))}function kS(e,t){if(xS(e))return vS;const{k:r,l:n,r:o}=e;if(t===r){if(xS(n))return o;if(xS(o))return n;{const[t,r]=MS(n);return OS(FS(e,{k:t,l:TS(n),v:r}))}}return OS(FS(e,t<r?{l:kS(n,t)}:{r:kS(o,t)}))}function ES(e){return xS(e)?[]:[...ES(e.l),{k:e.k,v:e.v},...ES(e.r)]}function _S(e,t,r){if(xS(e))return[];const{k:n,l:o,r:i,v:a}=e;let s=[];return n>t&&(s=s.concat(_S(o,t,r))),n>=t&&n<=r&&s.push({k:n,v:a}),n<=r&&(s=s.concat(_S(i,t,r))),s}function OS(e){const{l:t,lvl:r,r:n}=e;if(n.lvl>=r-1&&t.lvl>=r-1)return e;if(r>n.lvl+1){if(IS(t))return BS(FS(e,{lvl:r-1}));if(!xS(t)&&!xS(t.r))return FS(t.r,{l:FS(t,{r:t.r.l}),lvl:r,r:FS(e,{l:t.r.r,lvl:r-1})});throw new Error("Unexpected empty nodes")}if(IS(e))return RS(FS(e,{lvl:r-1}));if(xS(n)||xS(n.l))throw new Error("Unexpected empty nodes");{const t=n.l,o=IS(t)?n.lvl-1:n.lvl;return FS(t,{l:FS(e,{lvl:r-1,r:t.l}),lvl:t.lvl+1,r:RS(FS(n,{l:t.r,lvl:o}))})}}function FS(e,t){return AS(void 0!==t.k?t.k:e.k,void 0!==t.v?t.v:e.v,void 0!==t.lvl?t.lvl:e.lvl,void 0!==t.l?t.l:e.l,void 0!==t.r?t.r:e.r)}function TS(e){return xS(e.r)?e.l:OS(FS(e,{r:TS(e.r)}))}function IS(e){return xS(e)||e.lvl>e.r.lvl}function MS(e){return xS(e.r)?[e.k,e.v]:MS(e.r)}function AS(e,t,r,n=vS,o=vS){return{k:e,l:n,lvl:r,r:o,v:t}}function jS(e){return RS(BS(e))}function BS(e){const{l:t}=e;return xS(t)||t.lvl!==e.lvl?e:FS(t,{r:FS(e,{l:t.r})})}function RS(e){const{lvl:t,r:r}=e;return xS(r)||xS(r.r)||r.lvl!==t||r.r.lvl!==t?e:FS(r,{l:FS(e,{r:r.l}),lvl:t+1})}function zS(e,t){return!(!e||e.startIndex!==t.startIndex||e.endIndex!==t.endIndex)}function PS(e,t){return!(!e||e[0]!==t[0]||e[1]!==t[1])}const LS=oS((()=>({recalcInProgress:eS(!1)})),[],{singleton:!0});function NS(e,t,r){return e[HS(e,t,r)]}function HS(e,t,r,n=0){let o=e.length-1;for(;n<=o;){const i=Math.floor((n+o)/2),a=r(e[i],t);if(0===a)return i;if(-1===a){if(o-n<2)return i-1;o=i-1}else{if(o===n)return i;n=i+1}}throw new Error(`Failed binary finding record in array - ${e.join(",")}, searched for ${t}`)}function WS(e,t){return Math.round(e.getBoundingClientRect()[t])}function YS(e){return!xS(e.groupOffsetTree)}function VS({index:e},t){return t===e?0:t<e?-1:1}function US({offset:e},t){return t===e?0:t<e?-1:1}function KS(e,t,r){if(0===t.length)return 0;const{index:n,offset:o,size:i}=NS(t,e,VS),a=e-n,s=i*a+(a-1)*r+o;return s>0?s+r:s}function qS(e,t){if(!YS(t))return e;let r=0;for(;t.groupIndices[r]<=e+r;)r++;return e+r}function GS(e,t,r){if(function(e){return typeof e.groupIndex<"u"}(e))return t.groupIndices[e.groupIndex]+1;{let n=qS("LAST"===e.index?r:e.index,t);return n=Math.max(0,n,Math.min(r,n)),n}}function QS(e,t,r,n=0){return n>0&&(t=Math.max(t,NS(e,n,VS).offset)),yS(function(e,t,r,n){const o=HS(e,t,n),i=HS(e,r,n,o);return e.slice(o,i+1)}(e,t,r,US),eD)}function ZS(e,[t,r,n,o]){t.length>0&&n("received item sizes",t,cS.DEBUG);const i=e.sizeTree;let a=i,s=0;if(r.length>0&&xS(i)&&2===t.length){const e=t[0].size,n=t[1].size;a=r.reduce(((t,r)=>CS(CS(t,r,e),r+1,n)),a)}else[a,s]=function(e,t){let r=xS(e)?0:1/0;for(const n of t){const{endIndex:t,size:o,startIndex:i}=n;if(r=Math.min(r,i),xS(e)){e=CS(e,0,o);continue}const a=DS(e,i-1,t+1);if(a.some(tD(n)))continue;let s=!1,l=!1;for(const{end:r,start:n,value:i}of a)s?(t>=n||o===i)&&(e=kS(e,n)):(l=i!==o,s=!0),r>t&&t>=n&&i!==o&&(e=CS(e,t+1,i));l&&(e=CS(e,i,o))}return[e,r]}(a,t);if(a===i)return e;const{lastIndex:l,lastOffset:c,lastSize:d,offsetTree:u}=JS(e.offsetTree,s,a,o);return{groupIndices:r,groupOffsetTree:r.reduce(((e,t)=>CS(e,t,KS(t,u,o))),SS()),lastIndex:l,lastOffset:c,lastSize:d,offsetTree:u,sizeTree:a}}function XS(e,t){let r=0,n=0;for(;r<e;)r+=t[n+1]-t[n]-1,n++;return n-(r===e?0:1)}function JS(e,t,r,n){let o=e,i=0,a=0,s=0,l=0;if(0!==t){l=HS(o,t-1,VS),s=o[l].offset;const e=$S(r,t-1);i=e[0],a=e[1],o.length&&o[l].size===$S(r,t)[1]&&(l-=1),o=o.slice(0,l+1)}else o=[];for(const{start:e,value:l}of DS(r,t,1/0)){const t=e-i,r=t*a+s+t*n;o.push({index:e,offset:r,size:l}),i=e,s=r,a=l}return{lastIndex:i,lastOffset:s,lastSize:a,offsetTree:o}}function eD(e){return{index:e.index,value:e}}function tD(e){const{endIndex:t,size:r,startIndex:n}=e;return e=>e.start===n&&(e.end===t||e.end===1/0)&&e.value===r}const rD={offsetHeight:"height",offsetWidth:"width"},nD=oS((([{log:e},{recalcInProgress:t}])=>{const r=rS(),n=rS(),o=tS(n,0),i=rS(),a=rS(),s=eS(0),l=eS([]),c=eS(void 0),d=eS(void 0),u=eS(((e,t)=>WS(e,rD[t]))),f=eS(void 0),h=eS(0),p={groupIndices:[],groupOffsetTree:SS(),lastIndex:0,lastOffset:0,lastSize:0,offsetTree:[],sizeTree:SS()},g=tS(GC(r,JC(l,e,h),QC(ZS,p),VC()),p),m=tS(GC(l,VC(),QC(((e,t)=>({current:t,prev:e.current})),{current:[],prev:[]}),KC((({prev:e})=>e))),[]);NC(GC(l,UC((e=>e.length>0)),JC(g,h),KC((([e,t,r])=>{const n=e.reduce(((e,n,o)=>CS(e,n,KS(n,t.offsetTree,r)||o)),SS());return{...t,groupIndices:e,groupOffsetTree:n}}))),g),NC(GC(n,JC(g),UC((([e,{lastIndex:t}])=>e<t)),KC((([e,{lastIndex:t,lastSize:r}])=>[{endIndex:t,size:r,startIndex:e}]))),r),NC(c,d);const b=tS(GC(c,KC((e=>void 0===e))),!0);NC(GC(d,UC((e=>void 0!==e&&xS(LC(g).sizeTree))),KC((e=>[{endIndex:0,size:e,startIndex:0}]))),r);const v=nS(GC(r,JC(g),QC((({sizes:e},[t,r])=>({changed:r!==e,sizes:r})),{changed:!1,sizes:p}),KC((e=>e.changed))));RC(GC(s,QC(((e,t)=>({diff:e.prev-t,prev:t})),{diff:0,prev:0}),KC((e=>e.diff))),(e=>{const{groupIndices:r}=LC(g);if(e>0)zC(t,!0),zC(i,e+XS(e,r));else if(e<0){const t=LC(m);t.length>0&&(e-=XS(-e,t)),zC(a,e)}})),RC(GC(s,JC(e)),(([e,t])=>{e<0&&t("`firstItemIndex` prop should not be set to less than zero. If you don't know the total count, just use a very high value",{firstItemIndex:s},cS.ERROR)}));const y=nS(i);NC(GC(i,JC(g),KC((([e,t])=>{const r=t.groupIndices.length>0,n=[],o=t.lastSize;if(r){const r=wS(t.sizeTree,0);let i=0,a=0;for(;i<e;){const e=t.groupIndices[a],s=t.groupIndices.length===a+1?1/0:t.groupIndices[a+1]-e-1;n.push({endIndex:e,size:r,startIndex:e}),n.push({endIndex:e+1+s-1,size:o,startIndex:e+1}),a++,i+=s+1}const s=ES(t.sizeTree);return i!==e&&s.shift(),s.reduce(((t,{k:r,v:n})=>{let o=t.ranges;return 0!==t.prevSize&&(o=[...t.ranges,{endIndex:r+e-1,size:t.prevSize,startIndex:t.prevIndex}]),{prevIndex:r+e,prevSize:n,ranges:o}}),{prevIndex:e,prevSize:0,ranges:n}).ranges}return ES(t.sizeTree).reduce(((t,{k:r,v:n})=>({prevIndex:r+e,prevSize:n,ranges:[...t.ranges,{endIndex:r+e-1,size:t.prevSize,startIndex:t.prevIndex}]})),{prevIndex:0,prevSize:o,ranges:[]}).ranges}))),r);const x=nS(GC(a,JC(g,h),KC((([e,{offsetTree:t},r])=>KS(-e,t,r)))));return NC(GC(a,JC(g,h),KC((([e,t,r])=>{if(t.groupIndices.length>0){if(xS(t.sizeTree))return t;let n=SS();const o=LC(m);let i=0,a=0,s=0;for(;i<-e;){s=o[a];const e=o[a+1]-s-1;a++,i+=e+1}if(n=ES(t.sizeTree).reduce(((t,{k:r,v:n})=>CS(t,Math.max(0,r+e),n)),n),i!==-e){n=CS(n,0,wS(t.sizeTree,s));n=CS(n,1,$S(t.sizeTree,1-e)[1])}return{...t,sizeTree:n,...JS(t.offsetTree,0,n,r)}}{const n=ES(t.sizeTree).reduce(((t,{k:r,v:n})=>CS(t,Math.max(0,r+e),n)),SS());return{...t,sizeTree:n,...JS(t.offsetTree,0,n,r)}}}))),g),{beforeUnshiftWith:y,data:f,defaultItemSize:d,firstItemIndex:s,fixedItemSize:c,gap:h,groupIndices:l,itemSize:u,listRefresh:v,shiftWith:a,shiftWithOffset:x,sizeRanges:r,sizes:g,statefulTotalCount:o,totalCount:n,trackItemSizes:b,unshiftWith:i}}),BC(uS,LS),{singleton:!0});function oD(e){return e.reduce(((e,t)=>(e.groupIndices.push(e.totalCount),e.totalCount+=t+1,e)),{groupIndices:[],totalCount:0})}const iD=oS((([{groupIndices:e,sizes:t,totalCount:r},{headerHeight:n,scrollTop:o}])=>{const i=rS(),a=rS(),s=nS(GC(i,KC(oD)));return NC(GC(s,KC((e=>e.totalCount))),r),NC(GC(s,KC((e=>e.groupIndices))),e),NC(GC(aS(o,t,n),UC((([e,t])=>YS(t))),KC((([e,t,r])=>$S(t.groupOffsetTree,Math.max(e-r,0),"v")[0])),VC(),KC((e=>[e]))),a),{groupCounts:i,topItemsIndexes:a}}),BC(nD,bS)),aD=oS((([{log:e}])=>{const t=eS(!1),r=nS(GC(t,UC((e=>e)),VC()));return RC(t,(t=>{t&&LC(e)("props updated",{},cS.DEBUG)})),{didMount:r,propsReady:t}}),BC(uS),{singleton:!0}),sD=typeof document<"u"&&"scrollBehavior"in document.documentElement.style;function lD(e){const t="number"==typeof e?{index:e}:e;return t.align||(t.align="start"),(!t.behavior||!sD)&&(t.behavior="auto"),t.offset||(t.offset=0),t}const cD=oS((([{gap:e,listRefresh:t,sizes:r,totalCount:n},{fixedFooterHeight:o,fixedHeaderHeight:i,footerHeight:a,headerHeight:s,scrollingInProgress:l,scrollTo:c,smoothScrollTargetReached:d,viewportHeight:u},{log:f}])=>{const h=rS(),p=rS(),g=eS(0);let m=null,b=null,v=null;function y(){m&&(m(),m=null),v&&(v(),v=null),b&&(clearTimeout(b),b=null),zC(l,!1)}return NC(GC(h,JC(r,u,n,g,s,a,f),JC(e,i,o),KC((([[e,r,n,o,i,a,s,c],u,f,g])=>{const x=lD(e),{align:w,behavior:$,offset:C}=x,S=o-1,D=GS(x,r,S);let k=KS(D,r.offsetTree,u)+a;"end"===w?(k+=f+$S(r.sizeTree,D)[1]-n+g,D===S&&(k+=s)):"center"===w?k+=(f+$S(r.sizeTree,D)[1]-n+g)/2:k-=i,C&&(k+=C);const E=t=>{y(),t?(c("retrying to scroll to",{location:e},cS.DEBUG),zC(h,e)):(zC(p,!0),c("list did not change, scroll successful",{},cS.DEBUG))};if(y(),"smooth"===$){let e=!1;v=RC(t,(t=>{e=e||t})),m=HC(d,(()=>{E(e)}))}else m=HC(GC(t,function(e){return t=>{const r=setTimeout((()=>{t(!1)}),e);return e=>{e&&(t(!0),clearTimeout(r))}}}(150)),E);return b=setTimeout((()=>{y()}),1200),zC(l,!0),c("scrolling from index to",{behavior:$,index:D,top:k},cS.DEBUG),{behavior:$,top:k}}))),c),{scrollTargetReached:p,scrollToIndex:h,topListHeight:g}}),BC(nD,bS,uS),{singleton:!0});function dD(e,t){0==e?t():requestAnimationFrame((()=>{dD(e-1,t)}))}function uD(e,t){const r=t-1;return"number"==typeof e?e:"LAST"===e.index?r:e.index}const fD=oS((([{defaultItemSize:e,listRefresh:t,sizes:r},{scrollTop:n},{scrollTargetReached:o,scrollToIndex:i},{didMount:a}])=>{const s=eS(!0),l=eS(0),c=eS(!0);return NC(GC(a,JC(l),UC((([e,t])=>!!t)),qC(!1)),s),NC(GC(a,JC(l),UC((([e,t])=>!!t)),qC(!1)),c),RC(GC(aS(t,a),JC(s,r,e,c),UC((([[,e],t,{sizeTree:r},n,o])=>e&&(!xS(r)||IC(n))&&!t&&!o)),JC(l)),(([,e])=>{HC(o,(()=>{zC(c,!0)})),dD(4,(()=>{HC(n,(()=>{zC(s,!0)})),zC(i,e)}))})),{initialItemFinalLocationReached:c,initialTopMostItemIndex:l,scrolledToInitialItem:s}}),BC(nD,bS,cD,aD),{singleton:!0});function hD(e,t){return Math.abs(e-t)<1.01}const pD="up",gD="down",mD={atBottom:!1,notAtBottomBecause:"NOT_SHOWING_LAST_ITEM",state:{offsetBottom:0,scrollHeight:0,scrollTop:0,viewportHeight:0}},bD=oS((([{footerHeight:e,headerHeight:t,scrollBy:r,scrollContainerState:n,scrollTop:o,viewportHeight:i}])=>{const a=eS(!1),s=eS(!0),l=rS(),c=rS(),d=eS(4),u=eS(0),f=tS(GC(lS(GC(sS(o),ZC(1),qC(!0)),GC(sS(o),ZC(1),qC(!1),WC(100))),VC()),!1),h=tS(GC(lS(GC(r,qC(!0)),GC(r,qC(!1),WC(200))),VC()),!1);NC(GC(aS(sS(o),sS(u)),KC((([e,t])=>e<=t)),VC()),s),NC(GC(s,XC(50)),c);const p=nS(GC(aS(n,sS(i),sS(t),sS(e),sS(d)),QC(((e,[{scrollHeight:t,scrollTop:r},n,o,i,a])=>{const s={scrollHeight:t,scrollTop:r,viewportHeight:n};if(r+n-t>-a){let t,n;return r>e.state.scrollTop?(t="SCROLLED_DOWN",n=e.state.scrollTop-r):(t="SIZE_DECREASED",n=e.state.scrollTop-r||e.scrollTopDelta),{atBottom:!0,atBottomBecause:t,scrollTopDelta:n,state:s}}let l;return l=s.scrollHeight>e.state.scrollHeight?"SIZE_INCREASED":n<e.state.viewportHeight?"VIEWPORT_HEIGHT_DECREASING":r<e.state.scrollTop?"SCROLLING_UPWARDS":"NOT_FULLY_SCROLLED_TO_LAST_ITEM_BOTTOM",{atBottom:!1,notAtBottomBecause:l,state:s}}),mD),VC(((e,t)=>e&&e.atBottom===t.atBottom)))),g=tS(GC(n,QC(((e,{scrollHeight:t,scrollTop:r,viewportHeight:n})=>{if(hD(e.scrollHeight,t))return{changed:!1,jump:0,scrollHeight:t,scrollTop:r};{const o=t-(r+n)<1;return e.scrollTop!==r&&o?{changed:!0,jump:e.scrollTop-r,scrollHeight:t,scrollTop:r}:{changed:!0,jump:0,scrollHeight:t,scrollTop:r}}}),{changed:!1,jump:0,scrollHeight:0,scrollTop:0}),UC((e=>e.changed)),KC((e=>e.jump))),0);NC(GC(p,KC((e=>e.atBottom))),a),NC(GC(a,XC(50)),l);const m=eS(gD);NC(GC(n,KC((({scrollTop:e})=>e)),VC(),QC(((e,t)=>LC(h)?{direction:e.direction,prevScrollTop:t}:{direction:t<e.prevScrollTop?pD:gD,prevScrollTop:t}),{direction:gD,prevScrollTop:0}),KC((e=>e.direction))),m),NC(GC(n,XC(50),qC("none")),m);const b=eS(0);return NC(GC(f,UC((e=>!e)),qC(0)),b),NC(GC(o,XC(100),JC(f),UC((([e,t])=>!!t)),QC((([e,t],[r])=>[t,r]),[0,0]),KC((([e,t])=>t-e))),b),{atBottomState:p,atBottomStateChange:l,atBottomThreshold:d,atTopStateChange:c,atTopThreshold:u,isAtBottom:a,isAtTop:s,isScrolling:f,lastJumpDueToItemResize:g,scrollDirection:m,scrollVelocity:b}}),BC(bS)),vD="top",yD="bottom",xD="none";function wD(e,t,r){return"number"==typeof e?r===pD&&t===vD||r===gD&&t===yD?e:0:r===pD?t===vD?e.main:e.reverse:t===yD?e.main:e.reverse}function $D(e,t){var r;return"number"==typeof e?e:null!=(r=e[t])?r:0}const CD=oS((([{deviation:e,fixedHeaderHeight:t,headerHeight:r,scrollTop:n,viewportHeight:o}])=>{const i=rS(),a=eS(0),s=eS(0),l=eS(0),c=tS(GC(aS(sS(n),sS(o),sS(r),sS(i,PS),sS(l),sS(a),sS(t),sS(e),sS(s)),KC((([e,t,r,[n,o],i,a,s,l,c])=>{const d=e-l,u=a+s,f=Math.max(r-d,0);let h=xD;const p=$D(c,vD),g=$D(c,yD);return n-=l,o+=r+s,(n+=r+s)>e+u-p&&(h=pD),(o-=l)<e-f+t+g&&(h=gD),h!==xD?[Math.max(d-r-wD(i,vD,h)-p,0),d-f-s+t+wD(i,yD,h)+g]:null})),UC((e=>null!=e)),VC(PS)),[0,0]);return{increaseViewportBy:s,listBoundary:i,overscan:l,topListHeight:a,visibleRange:c}}),BC(bS),{singleton:!0});const SD={bottom:0,firstItemIndex:0,items:[],offsetBottom:0,offsetTop:0,top:0,topItems:[],topListHeight:0,totalCount:0};function DD(e,t,r,n,o,i){const{lastIndex:a,lastOffset:s,lastSize:l}=o;let c=0,d=0;if(e.length>0){c=e[0].offset;const t=e[e.length-1];d=t.offset+t.size}const u=r-a,f=c,h=s+u*l+(u-1)*n-d;return{bottom:d,firstItemIndex:i,items:ED(e,o,i),offsetBottom:h,offsetTop:c,top:f,topItems:ED(t,o,i),topListHeight:t.reduce(((e,t)=>t.size+e),0),totalCount:r}}function kD(e,t,r,n,o,i){let a=0;if(r.groupIndices.length>0)for(const t of r.groupIndices){if(t-a>=e)break;a++}const s=e+a,l=uD(t,s);return DD(Array.from({length:s}).map(((e,t)=>({data:i[t+l],index:t+l,offset:0,size:0}))),[],s,o,r,n)}function ED(e,t,r){if(0===e.length)return[];if(!YS(t))return e.map((e=>({...e,index:e.index+r,originalIndex:e.index})));const n=e[0].index,o=e[e.length-1].index,i=[],a=DS(t.groupOffsetTree,n,o);let s,l=0;for(const n of e){let e;(!s||s.end<n.index)&&(s=a.shift(),l=t.groupIndices.indexOf(s.start)),e=n.index===s.start?{index:l,type:"group"}:{groupIndex:l,index:n.index-(l+1)+r},i.push({...e,data:n.data,offset:n.offset,originalIndex:n.index,size:n.size})}return i}const _D=oS((([{data:e,firstItemIndex:t,gap:r,sizes:n,totalCount:o},i,{listBoundary:a,topListHeight:s,visibleRange:l},{initialTopMostItemIndex:c,scrolledToInitialItem:d},{topListHeight:u},f,{didMount:h},{recalcInProgress:p}])=>{const g=eS([]),m=eS(0),b=rS();NC(i.topItemsIndexes,g);const v=tS(GC(aS(h,p,sS(l,PS),sS(o),sS(n),sS(c),d,sS(g),sS(t),sS(r),e),UC((([e,t,,r,,,,,,,n])=>{const o=n&&n.length!==r;return e&&!t&&!o})),KC((([,,[e,t],r,n,o,i,a,s,l,c])=>{const d=n,{offsetTree:u,sizeTree:f}=d,h=LC(m);if(0===r)return{...SD,totalCount:r};if(0===e&&0===t)return 0===h?{...SD,totalCount:r}:kD(h,o,n,s,l,c||[]);if(xS(f))return h>0?null:DD(function(e,t,r){if(YS(t)){const n=qS(e,t);return[{index:$S(t.groupOffsetTree,n)[0],offset:0,size:0},{data:null==r?void 0:r[0],index:n,offset:0,size:0}]}return[{data:null==r?void 0:r[0],index:e,offset:0,size:0}]}(uD(o,r),d,c),[],r,l,d,s);const p=[];if(a.length>0){const e=a[0],t=a[a.length-1];let r=0;for(const n of DS(f,e,t)){const o=n.value,i=Math.max(n.start,e),a=Math.min(n.end,t);for(let e=i;e<=a;e++)p.push({data:null==c?void 0:c[e],index:e,offset:r,size:o}),r+=o}}if(!i)return DD([],p,r,l,d,s);const g=a.length>0?a[a.length-1]+1:0,b=QS(u,e,t,g);if(0===b.length)return null;const v=r-1;return DD(AC([],(r=>{for(const n of b){const o=n.value;let i=o.offset,a=n.start;const s=o.size;if(o.offset<e){a+=Math.floor((e-o.offset+l)/(s+l));const t=a-n.start;i+=t*s+t*l}a<g&&(i+=(g-a)*s,a=g);const d=Math.min(n.end,v);for(let e=a;e<=d&&!(i>=t);e++)r.push({data:null==c?void 0:c[e],index:e,offset:i,size:s}),i+=s+l}})),p,r,l,d,s)})),UC((e=>null!==e)),VC()),SD);NC(GC(e,UC(IC),KC((e=>null==e?void 0:e.length))),o),NC(GC(v,KC((e=>e.topListHeight))),u),NC(u,s),NC(GC(v,KC((e=>[e.top,e.bottom]))),a),NC(GC(v,KC((e=>e.items))),b);const y=nS(GC(v,UC((({items:e})=>e.length>0)),JC(o,e),UC((([{items:e},t])=>e[e.length-1].originalIndex===t-1)),KC((([,e,t])=>[e-1,t])),VC(PS),KC((([e])=>e)))),x=nS(GC(v,XC(200),UC((({items:e,topItems:t})=>e.length>0&&e[0].originalIndex===t.length)),KC((({items:e})=>e[0].index)),VC())),w=nS(GC(v,UC((({items:e})=>e.length>0)),KC((({items:e})=>{let t=0,r=e.length-1;for(;"group"===e[t].type&&t<r;)t++;for(;"group"===e[r].type&&r>t;)r--;return{endIndex:e[r].index,startIndex:e[t].index}})),VC(zS)));return{endReached:y,initialItemCount:m,itemsRendered:b,listState:v,rangeChanged:w,startReached:x,topItemsIndexes:g,...f}}),BC(nD,iD,CD,fD,cD,bD,aD,LS),{singleton:!0}),OD=oS((([{fixedFooterHeight:e,fixedHeaderHeight:t,footerHeight:r,headerHeight:n},{listState:o}])=>{const i=rS(),a=tS(GC(aS(r,e,n,t,o),KC((([e,t,r,n,o])=>e+t+r+n+o.offsetBottom+o.bottom))),0);return NC(sS(a),i),{totalListHeight:a,totalListHeightChanged:i}}),BC(bS,_D),{singleton:!0}),FD=oS((([{viewportHeight:e},{totalListHeight:t}])=>{const r=eS(!1),n=tS(GC(aS(r,e,t),UC((([e])=>e)),KC((([,e,t])=>Math.max(0,e-t))),XC(0),VC()),0);return{alignToBottom:r,paddingTopAddition:n}}),BC(bS,OD),{singleton:!0});function TD(e){return!!e&&("smooth"===e?"smooth":"auto")}const ID=oS((([{listRefresh:e,totalCount:t},{atBottomState:r,isAtBottom:n},{scrollToIndex:o},{scrolledToInitialItem:i},{didMount:a,propsReady:s},{log:l},{scrollingInProgress:c}])=>{const d=eS(!1),u=rS();let f=null;function h(e){zC(o,{align:"end",behavior:e,index:"LAST"})}function p(e){const t=HC(r,(t=>{e&&!t.atBottom&&"SIZE_INCREASED"===t.notAtBottomBecause&&!f&&(LC(l)("scrolling to bottom due to increased size",{},cS.DEBUG),h("auto"))}));setTimeout(t,100)}return RC(GC(aS(GC(sS(t),ZC(1)),a),JC(sS(d),n,i,c),KC((([[e,t],r,n,o,i])=>{let a=t&&o,s="auto";return a&&(s=((e,t)=>"function"==typeof e?TD(e(t)):t&&TD(e))(r,n||i),a=a&&!!s),{followOutputBehavior:s,shouldFollow:a,totalCount:e}})),UC((({shouldFollow:e})=>e))),(({followOutputBehavior:t,totalCount:r})=>{f&&(f(),f=null),f=HC(e,(()=>{LC(l)("following output to ",{totalCount:r},cS.DEBUG),h(t),f=null}))})),RC(GC(aS(sS(d),t,s),UC((([e,,t])=>e&&t)),QC((({value:e},[,t])=>({refreshed:e===t,value:t})),{refreshed:!1,value:0}),UC((({refreshed:e})=>e)),JC(d,t)),(([,e])=>{LC(i)&&p(!1!==e)})),RC(u,(()=>{p(!1!==LC(d))})),RC(aS(sS(d),r),(([e,t])=>{e&&!t.atBottom&&"VIEWPORT_HEIGHT_DECREASING"===t.notAtBottomBecause&&h("auto")})),{autoscrollToBottom:u,followOutput:d}}),BC(nD,bD,cD,fD,aD,uS,bS)),MD=oS((([{data:e,firstItemIndex:t,gap:r,sizes:n},{initialTopMostItemIndex:o},{initialItemCount:i,listState:a},{didMount:s}])=>(NC(GC(s,JC(i),UC((([,e])=>0!==e)),JC(o,n,t,r,e),KC((([[,e],t,r,n,o,i=[]])=>kD(e,t,r,n,o,i)))),a),{})),BC(nD,fD,_D,aD),{singleton:!0}),AD=oS((([{didMount:e},{scrollTo:t},{listState:r}])=>{const n=eS(0);return RC(GC(e,JC(n),UC((([,e])=>0!==e)),KC((([,e])=>({top:e})))),(e=>{HC(GC(r,ZC(1),UC((e=>e.items.length>1))),(()=>{requestAnimationFrame((()=>{zC(t,e)}))}))})),{initialScrollTop:n}}),BC(aD,bS,_D),{singleton:!0}),jD=({itemBottom:e,itemTop:t,locationParams:{align:r,behavior:n,...o},viewportBottom:i,viewportTop:a})=>t<a?{...o,align:null!=r?r:"start",behavior:n}:e>i?{...o,align:null!=r?r:"end",behavior:n}:null,BD=oS((([{gap:e,sizes:t,totalCount:r},{fixedFooterHeight:n,fixedHeaderHeight:o,headerHeight:i,scrollingInProgress:a,scrollTop:s,viewportHeight:l},{scrollToIndex:c}])=>{const d=rS();return NC(GC(d,JC(t,l,r,i,o,n,s),JC(e),KC((([[e,t,r,n,o,i,s,l],c])=>{const{align:d,behavior:u,calculateViewLocation:f=jD,done:h,...p}=e,g=GS(e,t,n-1),m=KS(g,t.offsetTree,c)+o+i,b=f({itemBottom:m+$S(t.sizeTree,g)[1],itemTop:m,locationParams:{align:d,behavior:u,...p},viewportBottom:l+r-s,viewportTop:l+i});return b?h&&HC(GC(a,UC((e=>!e)),ZC(LC(a)?1:2)),h):h&&h(),b})),UC((e=>null!==e))),c),{scrollIntoView:d}}),BC(nD,bS,cD,_D,uS),{singleton:!0}),RD=oS((([{scrollVelocity:e}])=>{const t=eS(!1),r=rS(),n=eS(!1);return NC(GC(e,JC(n,t,r),UC((([e,t])=>!!t)),KC((([e,t,r,n])=>{const{enter:o,exit:i}=t;if(r){if(i(e,n))return!1}else if(o(e,n))return!0;return r})),VC()),t),RC(GC(aS(t,e,r),JC(n)),(([[e,t,r],n])=>{e&&n&&n.change&&n.change(t,r)})),{isSeeking:t,scrollSeekConfiguration:n,scrollSeekRangeChanged:r,scrollVelocity:e}}),BC(bD),{singleton:!0}),zD=oS((([{scrollContainerState:e,scrollTo:t}])=>{const r=rS(),n=rS(),o=rS(),i=eS(!1),a=eS(void 0);return NC(GC(aS(r,n),KC((([{scrollHeight:e,scrollTop:t,viewportHeight:r},{offsetTop:n}])=>({scrollHeight:e,scrollTop:Math.max(0,t-n),viewportHeight:r})))),e),NC(GC(t,JC(n),KC((([e,{offsetTop:t}])=>({...e,top:e.top+t})))),o),{customScrollParent:a,useWindowScroll:i,windowScrollContainerState:r,windowScrollTo:o,windowViewportRect:n}}),BC(bS)),PD=oS((([{sizeRanges:e,sizes:t},{headerHeight:r,scrollTop:n},{initialTopMostItemIndex:o},{didMount:i},{useWindowScroll:a,windowScrollContainerState:s,windowViewportRect:l}])=>{const c=rS(),d=eS(void 0),u=eS(null),f=eS(null);return NC(s,u),NC(l,f),RC(GC(c,JC(t,n,a,u,f,r)),(([e,t,r,n,o,i,a])=>{const s=function(e){return ES(e).map((({k:e,v:t},r,n)=>{const o=n[r+1];return{endIndex:o?o.k-1:1/0,size:t,startIndex:e}}))}(t.sizeTree);n&&null!==o&&null!==i&&(r=o.scrollTop-i.offsetTop),e({ranges:s,scrollTop:r-=a})})),NC(GC(d,UC(IC),KC(LD)),o),NC(GC(i,JC(d),UC((([,e])=>void 0!==e)),VC(),KC((([,e])=>e.ranges))),e),{getState:c,restoreStateFrom:d}}),BC(nD,bS,fD,aD,zD));function LD(e){return{align:"start",index:0,offset:e.scrollTop}}const ND=oS((([{topItemsIndexes:e}])=>{const t=eS(0);return NC(GC(t,UC((e=>e>=0)),KC((e=>Array.from({length:e}).map(((e,t)=>t))))),e),{topItemCount:t}}),BC(_D));function HD(e){let t,r=!1;return()=>(r||(r=!0,t=e()),t)}const WD=HD((()=>/iP(ad|od|hone)/i.test(navigator.userAgent)&&/WebKit/i.test(navigator.userAgent))),YD=oS((([{deviation:e,scrollBy:t,scrollingInProgress:r,scrollTop:n},{isAtBottom:o,isScrolling:i,lastJumpDueToItemResize:a,scrollDirection:s},{listState:l},{beforeUnshiftWith:c,gap:d,shiftWithOffset:u,sizes:f},{log:h},{recalcInProgress:p}])=>{const g=nS(GC(l,JC(a),QC((([,e,t,r],[{bottom:n,items:o,offsetBottom:i,totalCount:a},s])=>{const l=n+i;let c=0;return t===a&&e.length>0&&o.length>0&&(0===o[0].originalIndex&&0===e[0].originalIndex||(c=l-r,0!==c&&(c+=s))),[c,o,a,l]}),[0,[],0,0]),UC((([e])=>0!==e)),JC(n,s,r,o,h,p),UC((([,e,t,r,,,n])=>!n&&!r&&0!==e&&t===pD)),KC((([[e],,,,,t])=>(t("Upward scrolling compensation",{amount:e},cS.DEBUG),e)))));function m(r){r>0?(zC(t,{behavior:"auto",top:-r}),zC(e,0)):(zC(e,0),zC(t,{behavior:"auto",top:-r}))}return RC(GC(g,JC(e,i)),(([t,r,n])=>{n&&WD()?zC(e,r-t):m(-t)})),RC(GC(aS(tS(i,!1),e,p),UC((([e,t,r])=>!e&&!r&&0!==t)),KC((([e,t])=>t)),XC(1)),m),NC(GC(u,KC((e=>({top:-e})))),t),RC(GC(c,JC(f,d),KC((([e,{groupIndices:t,lastSize:r,sizeTree:n},o])=>{function i(e){return e*(r+o)}if(0===t.length)return i(e);{let r=0;const o=wS(n,0);let a=0,s=0;for(;a<e;){a++,r+=o;let n=t.length===s+1?1/0:t[s+1]-t[s]-1;a+n>e&&(r-=o,n=e-a+1),a+=n,r+=i(n),s++}return r}}))),(r=>{zC(e,r),requestAnimationFrame((()=>{zC(t,{top:r}),requestAnimationFrame((()=>{zC(e,0),zC(p,!1)}))}))})),{deviation:e}}),BC(bS,bD,_D,nD,uS,LS)),VD=oS((([e,t,r,n,o,i,a,s,l,c])=>({...e,...t,...r,...n,...o,...i,...a,...s,...l,...c})),BC(CD,MD,aD,RD,OD,AD,FD,zD,BD,uS)),UD=oS((([{data:e,defaultItemSize:t,firstItemIndex:r,fixedItemSize:n,gap:o,groupIndices:i,itemSize:a,sizeRanges:s,sizes:l,statefulTotalCount:c,totalCount:d,trackItemSizes:u},{initialItemFinalLocationReached:f,initialTopMostItemIndex:h,scrolledToInitialItem:p},g,m,b,{listState:v,topItemsIndexes:y,...x},{scrollToIndex:w},$,{topItemCount:C},{groupCounts:S},D])=>(NC(x.rangeChanged,D.scrollSeekRangeChanged),NC(GC(D.windowViewportRect,KC((e=>e.visibleHeight))),g.viewportHeight),{data:e,defaultItemHeight:t,firstItemIndex:r,fixedItemHeight:n,gap:o,groupCounts:S,initialItemFinalLocationReached:f,initialTopMostItemIndex:h,scrolledToInitialItem:p,sizeRanges:s,topItemCount:C,topItemsIndexes:y,totalCount:d,...b,groupIndices:i,itemSize:a,listState:v,scrollToIndex:w,statefulTotalCount:c,trackItemSizes:u,...x,...D,...g,sizes:l,...m})),BC(nD,fD,bS,PD,ID,_D,cD,YD,ND,iD,VD));function KD(e,t){const r={},n={};let o=0;const i=e.length;for(;o<i;)n[e[o]]=1,o+=1;for(const e in t)Object.hasOwn(n,e)||(r[e]=t[e]);return r}const qD=typeof document<"u"?o.useLayoutEffect:o.useEffect;function GD(t,r,n){const i=Object.keys(r.required||{}),a=Object.keys(r.optional||{}),s=Object.keys(r.methods||{}),l=Object.keys(r.events||{}),c=o.createContext({});function d(e,t){e.propsReady&&zC(e.propsReady,!1);for(const n of i){zC(e[r.required[n]],t[n])}for(const n of a)if(n in t){zC(e[r.optional[n]],t[n])}e.propsReady&&zC(e.propsReady,!0)}function u(e){return l.reduce(((t,n)=>(t[n]=function(e){let t,r;const n=()=>null==t?void 0:t();return function(o,i){switch(o){case 1:return i?r===i?void 0:(n(),r=i,t=RC(e,i),t):(n(),MC);case 2:return n(),void(r=null)}}}(e[r.events[n]]),t)),{})}const f=o.forwardRef(((f,h)=>{const{children:p,...g}=f,[m]=o.useState((()=>AC(function(e){const t=new Map,r=({constructor:e,dependencies:n,id:o,singleton:i})=>{if(i&&t.has(o))return t.get(o);const a=e(n.map((e=>r(e))));return i&&t.set(o,a),a};return r(e)}(t),(e=>{d(e,g)})))),[b]=o.useState(FC(u,m));qD((()=>{for(const e of l)e in g&&RC(b[e],g[e]);return()=>{Object.values(b).map(PC)}}),[g,b,m]),qD((()=>{d(m,g)})),o.useImperativeHandle(h,EC(function(e){return s.reduce(((t,n)=>(t[n]=t=>{zC(e[r.methods[n]],t)},t)),{})}(m)));const v=n;return e(c.Provider,{value:m,children:n?e(v,{...KD([...i,...a,...l],g),children:p}):p})})),h=o.version.startsWith("18")?e=>{const t=o.useContext(c)[e],r=o.useCallback((e=>RC(t,e)),[t]);return o.useSyncExternalStore(r,(()=>LC(t)),(()=>LC(t)))}:e=>{const t=o.useContext(c)[e],[r,n]=o.useState(FC(LC,t));return qD((()=>RC(t,(e=>{e!==r&&n(EC(e))}))),[t,r]),r};return{Component:f,useEmitter:(e,t)=>{const r=o.useContext(c)[e];qD((()=>RC(r,t)),[t,r])},useEmitterValue:h,usePublisher:e=>o.useCallback(TC(zC,o.useContext(c)[e]),[e])}}const QD=o.createContext(void 0),ZD=o.createContext(void 0),XD=typeof document<"u"?o.useLayoutEffect:o.useEffect;function JD(e,t,r,n=MC,i,a){const s=o.useRef(null),l=o.useRef(null),c=o.useRef(null),d=o.useCallback((r=>{const n=r.target,o=n===window||n===document,i=a?o?window.pageXOffset||document.documentElement.scrollLeft:n.scrollLeft:o?window.pageYOffset||document.documentElement.scrollTop:n.scrollTop,s=a?o?document.documentElement.scrollWidth:n.scrollWidth:o?document.documentElement.scrollHeight:n.scrollHeight,d=a?o?window.innerWidth:n.offsetWidth:o?window.innerHeight:n.offsetHeight,u=()=>{e({scrollHeight:s,scrollTop:Math.max(i,0),viewportHeight:d})};r.suppressFlushSync?u():M.flushSync(u),null!==l.current&&(i===l.current||i<=0||i===s-d)&&(l.current=null,t(!0),c.current&&(clearTimeout(c.current),c.current=null))}),[e,t]);return o.useEffect((()=>{const e=i||s.current;return n(i||s.current),d({suppressFlushSync:!0,target:e}),e.addEventListener("scroll",d,{passive:!0}),()=>{n(null),e.removeEventListener("scroll",d)}}),[s,d,r,n,i]),{scrollByCallback:function(e){a&&(e={behavior:e.behavior,left:e.top}),s.current.scrollBy(e)},scrollerRef:s,scrollToCallback:function(r){const n=s.current;if(!n||(a?"offsetWidth"in n&&0===n.offsetWidth:"offsetHeight"in n&&0===n.offsetHeight))return;const o="smooth"===r.behavior;let i,d,u;n===window?(d=Math.max(WS(document.documentElement,a?"width":"height"),a?document.documentElement.scrollWidth:document.documentElement.scrollHeight),i=a?window.innerWidth:window.innerHeight,u=a?document.documentElement.scrollLeft:document.documentElement.scrollTop):(d=n[a?"scrollWidth":"scrollHeight"],i=WS(n,a?"width":"height"),u=n[a?"scrollLeft":"scrollTop"]);const f=d-i;if(r.top=Math.ceil(Math.max(Math.min(f,r.top),0)),hD(i,d)||r.top===u)return e({scrollHeight:d,scrollTop:u,viewportHeight:i}),void(o&&t(!0));o?(l.current=r.top,c.current&&clearTimeout(c.current),c.current=setTimeout((()=>{c.current=null,l.current=null,t(!0)}),1e3)):l.current=null,a&&(r={behavior:r.behavior,left:r.top}),n.scrollTo(r)}}}const ek="-webkit-sticky",tk="sticky",rk=HD((()=>{if(typeof document>"u")return tk;const e=document.createElement("div");return e.style.position=ek,e.style.position===ek?ek:tk}));function nk(e){return e}const ok=oS((()=>{const e=eS((e=>`Item ${e}`)),t=eS(null),r=eS((e=>`Group ${e}`)),n=eS({}),o=eS(nk),i=eS("div"),a=eS(MC),s=(e,t=null)=>tS(GC(n,KC((t=>t[e])),VC()),t);return{components:n,computeItemKey:o,context:t,EmptyPlaceholder:s("EmptyPlaceholder"),FooterComponent:s("Footer"),GroupComponent:s("Group","div"),groupContent:r,HeaderComponent:s("Header"),HeaderFooterTag:i,ItemComponent:s("Item","div"),itemContent:e,ListComponent:s("List","div"),ScrollerComponent:s("Scroller","div"),scrollerRef:a,ScrollSeekPlaceholder:s("ScrollSeekPlaceholder"),TopItemListComponent:s("TopItemList")}})),ik=oS((([e,t])=>({...e,...t})),BC(UD,ok)),ak=({height:t})=>e("div",{style:{height:t}}),sk={overflowAnchor:"none",position:rk(),zIndex:1},lk={overflowAnchor:"none"},ck={...lk,display:"inline-block",height:"100%"},dk=o.memo((function({showTopList:t=!1}){const r=Ek("listState"),n=_k("sizeRanges"),i=Ek("useWindowScroll"),a=Ek("customScrollParent"),s=_k("windowScrollContainerState"),l=_k("scrollContainerState"),c=a||i?s:l,d=Ek("itemContent"),u=Ek("context"),f=Ek("groupContent"),h=Ek("trackItemSizes"),p=Ek("itemSize"),g=Ek("log"),m=_k("gap"),b=Ek("horizontalDirection"),{callbackRef:v}=pS(n,p,h,t?MC:c,g,m,a,b,Ek("skipAnimationFrameInResizeObserver")),[y,x]=o.useState(0);kk("deviation",(e=>{y!==e&&x(e)}));const w=Ek("EmptyPlaceholder"),$=Ek("ScrollSeekPlaceholder")||ak,C=Ek("ListComponent"),S=Ek("ItemComponent"),D=Ek("GroupComponent"),E=Ek("computeItemKey"),_=Ek("isSeeking"),O=Ek("groupIndices").length>0,F=Ek("alignToBottom"),T=Ek("initialItemFinalLocationReached"),I=t?{}:{boxSizing:"border-box",...b?{display:"inline-block",height:"100%",marginLeft:0!==y?y:F?"auto":0,paddingLeft:r.offsetTop,paddingRight:r.offsetBottom,whiteSpace:"nowrap"}:{marginTop:0!==y?y:F?"auto":0,paddingBottom:r.offsetBottom,paddingTop:r.offsetTop},...T?{}:{visibility:"hidden"}};return!t&&0===r.totalCount&&w?e(w,{...gk(w,u)}):e(C,{...gk(C,u),"data-testid":t?"virtuoso-top-item-list":"virtuoso-item-list",ref:v,style:I,children:(t?r.topItems:r.items).map((e=>{const t=e.originalIndex,n=E(t+r.firstItemIndex,e.data,u);return _?k($,{...gk($,u),height:e.size,index:e.index,key:n,type:e.type||"item",..."group"===e.type?{}:{groupIndex:e.groupIndex}}):"group"===e.type?k(D,{...gk(D,u),"data-index":t,"data-item-index":e.index,"data-known-size":e.size,key:n,style:sk},f(e.index,u)):k(S,{...gk(S,u),...mk(S,e.data),"data-index":t,"data-item-group-index":e.groupIndex,"data-item-index":e.index,"data-known-size":e.size,key:n,style:b?ck:lk},O?d(e.index,e.groupIndex,e.data,u):d(e.index,e.data,u))}))})})),uk={height:"100%",outline:"none",overflowY:"auto",position:"relative",WebkitOverflowScrolling:"touch"},fk={outline:"none",overflowX:"auto",position:"relative"},hk=e=>({height:"100%",position:"absolute",top:0,width:"100%",...e?{display:"flex",flexDirection:"column"}:{}}),pk={position:rk(),top:0,width:"100%",zIndex:1};function gk(e,t){if("string"!=typeof e)return{context:t}}function mk(e,t){return{item:"string"==typeof e?void 0:t}}const bk=o.memo((function(){const t=Ek("HeaderComponent"),r=_k("headerHeight"),n=Ek("HeaderFooterTag"),i=fS(o.useMemo((()=>e=>{r(WS(e,"height"))}),[r]),!0,Ek("skipAnimationFrameInResizeObserver")),a=Ek("context");return t?e(n,{ref:i,children:e(t,{...gk(t,a)})}):null})),vk=o.memo((function(){const t=Ek("FooterComponent"),r=_k("footerHeight"),n=Ek("HeaderFooterTag"),i=fS(o.useMemo((()=>e=>{r(WS(e,"height"))}),[r]),!0,Ek("skipAnimationFrameInResizeObserver")),a=Ek("context");return t?e(n,{ref:i,children:e(t,{...gk(t,a)})}):null}));function yk({useEmitter:t,useEmitterValue:r,usePublisher:n}){return o.memo((function({children:o,style:i,...a}){const s=n("scrollContainerState"),l=r("ScrollerComponent"),c=n("smoothScrollTargetReached"),d=r("scrollerRef"),u=r("context"),f=r("horizontalDirection")||!1,{scrollByCallback:h,scrollerRef:p,scrollToCallback:g}=JD(s,c,l,d,void 0,f);return t("scrollTo",g),t("scrollBy",h),e(l,{"data-testid":"virtuoso-scroller","data-virtuoso-scroller":!0,ref:p,style:{...f?fk:uk,...i},tabIndex:0,...a,...gk(l,u),children:o})}))}function xk({useEmitter:t,useEmitterValue:r,usePublisher:n}){return o.memo((function({children:o,style:i,...a}){const s=n("windowScrollContainerState"),l=r("ScrollerComponent"),c=n("smoothScrollTargetReached"),d=r("totalListHeight"),u=r("deviation"),f=r("customScrollParent"),h=r("context"),{scrollByCallback:p,scrollerRef:g,scrollToCallback:m}=JD(s,c,l,MC,f);return XD((()=>(g.current=f||window,()=>{g.current=null})),[g,f]),t("windowScrollTo",m),t("scrollBy",p),e(l,{"data-virtuoso-scroller":!0,style:{position:"relative",...i,...0!==d?{height:d+u}:{}},...a,...gk(l,h),children:o})}))}const wk=({children:t})=>{const r=o.useContext(QD),n=_k("viewportHeight"),i=_k("fixedItemHeight"),a=Ek("alignToBottom"),s=Ek("horizontalDirection"),l=fS(o.useMemo((()=>OC(n,(e=>WS(e,s?"width":"height")))),[n,s]),!0,Ek("skipAnimationFrameInResizeObserver"));return o.useEffect((()=>{r&&(n(r.viewportHeight),i(r.itemHeight))}),[r,n,i]),e("div",{"data-viewport-type":"element",ref:l,style:hk(a),children:t})},$k=({children:t})=>{const r=o.useContext(QD),n=_k("windowViewportRect"),i=_k("fixedItemHeight"),a=Ek("customScrollParent"),s=mS(n,a,Ek("skipAnimationFrameInResizeObserver")),l=Ek("alignToBottom");return o.useEffect((()=>{r&&(i(r.itemHeight),n({offsetTop:0,visibleHeight:r.viewportHeight,visibleWidth:100}))}),[r,n,i]),e("div",{"data-viewport-type":"window",ref:s,style:hk(l),children:t})},Ck=({children:t})=>{const r=Ek("TopItemListComponent")||"div",n=Ek("headerHeight"),o={...pk,marginTop:`${n}px`},i=Ek("context");return e(r,{style:o,...gk(r,i),children:t})},Sk=o.memo((function(r){const n=Ek("useWindowScroll"),o=Ek("topItemsIndexes").length>0,i=Ek("customScrollParent"),a=Ek("context"),s=i||n?Fk:Ok,l=i||n?$k:wk;return t(s,{...r,...gk(s,a),children:[o&&e(Ck,{children:e(dk,{showTopList:!0})}),t(l,{children:[e(bk,{}),e(dk,{}),e(vk,{})]})]})})),{Component:Dk,useEmitter:kk,useEmitterValue:Ek,usePublisher:_k}=GD(ik,{events:{atBottomStateChange:"atBottomStateChange",atTopStateChange:"atTopStateChange",endReached:"endReached",groupIndices:"groupIndices",isScrolling:"isScrolling",itemsRendered:"itemsRendered",rangeChanged:"rangeChanged",startReached:"startReached",totalListHeightChanged:"totalListHeightChanged"},methods:{autoscrollToBottom:"autoscrollToBottom",getState:"getState",scrollBy:"scrollBy",scrollIntoView:"scrollIntoView",scrollTo:"scrollTo",scrollToIndex:"scrollToIndex"},optional:{alignToBottom:"alignToBottom",atBottomThreshold:"atBottomThreshold",atTopThreshold:"atTopThreshold",components:"components",computeItemKey:"computeItemKey",context:"context",customScrollParent:"customScrollParent",data:"data",defaultItemHeight:"defaultItemHeight",firstItemIndex:"firstItemIndex",fixedItemHeight:"fixedItemHeight",followOutput:"followOutput",groupContent:"groupContent",groupCounts:"groupCounts",headerFooterTag:"HeaderFooterTag",horizontalDirection:"horizontalDirection",increaseViewportBy:"increaseViewportBy",initialItemCount:"initialItemCount",initialScrollTop:"initialScrollTop",initialTopMostItemIndex:"initialTopMostItemIndex",itemContent:"itemContent",itemSize:"itemSize",logLevel:"logLevel",overscan:"overscan",restoreStateFrom:"restoreStateFrom",scrollerRef:"scrollerRef",scrollSeekConfiguration:"scrollSeekConfiguration",skipAnimationFrameInResizeObserver:"skipAnimationFrameInResizeObserver",topItemCount:"topItemCount",totalCount:"totalCount",useWindowScroll:"useWindowScroll"},required:{}},Sk),Ok=yk({useEmitter:kk,useEmitterValue:Ek,usePublisher:_k}),Fk=xk({useEmitter:kk,useEmitterValue:Ek,usePublisher:_k}),Tk=Dk,Ik={bottom:0,itemHeight:0,items:[],itemWidth:0,offsetBottom:0,offsetTop:0,top:0},Mk={bottom:0,itemHeight:0,items:[{index:0}],itemWidth:0,offsetBottom:0,offsetTop:0,top:0},{ceil:Ak,floor:jk,max:Bk,min:Rk,round:zk}=Math;function Pk(e,t,r){return Array.from({length:t-e+1}).map(((t,n)=>({data:null===r?null:r[n+e],index:n+e})))}function Lk(e,t){return e&&e.width===t.width&&e.height===t.height}function Nk(e,t){return e&&e.column===t.column&&e.row===t.row}const Hk=oS((([{increaseViewportBy:e,listBoundary:t,overscan:r,visibleRange:n},{footerHeight:o,headerHeight:i,scrollBy:a,scrollContainerState:s,scrollTo:l,scrollTop:c,smoothScrollTargetReached:d,viewportHeight:u},f,h,{didMount:p,propsReady:g},{customScrollParent:m,useWindowScroll:b,windowScrollContainerState:v,windowScrollTo:y,windowViewportRect:x},w])=>{const $=eS(0),C=eS(0),S=eS(Ik),D=eS({height:0,width:0}),k=eS({height:0,width:0}),E=rS(),_=rS(),O=eS(0),F=eS(null),T=eS({column:0,row:0}),I=rS(),M=rS(),A=eS(!1),j=eS(0),B=eS(!0),R=eS(!1),z=eS(!1);RC(GC(p,JC(j),UC((([e,t])=>!!t))),(()=>{zC(B,!1)})),RC(GC(aS(p,B,k,D,j,R),UC((([e,t,r,n,,o])=>e&&!t&&0!==r.height&&0!==n.height&&!o))),(([,,,,e])=>{zC(R,!0),dD(1,(()=>{zC(E,e)})),HC(GC(c),(()=>{zC(t,[0,0]),zC(B,!0)}))})),NC(GC(M,UC((e=>null!=e&&e.scrollTop>0)),qC(0)),C),RC(GC(p,JC(M),UC((([,e])=>null!=e))),(([,e])=>{e&&(zC(D,e.viewport),zC(k,e.item),zC(T,e.gap),e.scrollTop>0&&(zC(A,!0),HC(GC(c,ZC(1)),(e=>{zC(A,!1)})),zC(l,{top:e.scrollTop})))})),NC(GC(D,KC((({height:e})=>e))),u),NC(GC(aS(sS(D,Lk),sS(k,Lk),sS(T,((e,t)=>e&&e.column===t.column&&e.row===t.row)),sS(c)),KC((([e,t,r,n])=>({gap:r,item:t,scrollTop:n,viewport:e})))),I),NC(GC(aS(sS($),n,sS(T,Nk),sS(k,Lk),sS(D,Lk),sS(F),sS(C),sS(A),sS(B),sS(j)),UC((([,,,,,,,e])=>!e)),KC((([e,[t,r],n,o,i,a,s,,l,c])=>{const{column:d,row:u}=n,{height:f,width:h}=o,{width:p}=i;if(0===s&&(0===e||0===p))return Ik;if(0===h){const t=uD(c,e);return function(e){return{...Mk,items:e}}(Pk(t,t+Math.max(s-1,0),a))}const g=Wk(p,h,d);let m,b;l?0===t&&0===r&&s>0?(m=0,b=s-1):(m=g*jk((t+u)/(f+u)),b=g*Ak((r+u)/(f+u))-1,b=Rk(e-1,Bk(b,g-1)),m=Rk(b,Bk(0,m))):(m=0,b=-1);const v=Pk(m,b,a),{bottom:y,top:x}=Yk(i,n,o,v),w=Ak(e/g);return{bottom:y,itemHeight:f,items:v,itemWidth:h,offsetBottom:w*f+(w-1)*u-y,offsetTop:x,top:x}}))),S),NC(GC(F,UC((e=>null!==e)),KC((e=>e.length))),$),NC(GC(aS(D,k,S,T),UC((([e,t,{items:r}])=>r.length>0&&0!==t.height&&0!==e.height)),KC((([e,t,{items:r},n])=>{const{bottom:o,top:i}=Yk(e,n,t,r);return[i,o]})),VC(PS)),t);const P=eS(!1);NC(GC(c,JC(P),KC((([e,t])=>t||0!==e))),P);const L=nS(GC(aS(S,$),UC((([{items:e}])=>e.length>0)),JC(P),UC((([[e,t],r])=>{const n=e.items[e.items.length-1].index===t-1;return(r||e.bottom>0&&e.itemHeight>0&&0===e.offsetBottom&&e.items.length===t)&&n})),KC((([[,e]])=>e-1)),VC())),N=nS(GC(sS(S),UC((({items:e})=>e.length>0&&0===e[0].index)),qC(0),VC())),H=nS(GC(sS(S),JC(A),UC((([{items:e},t])=>e.length>0&&!t)),KC((([{items:e}])=>({endIndex:e[e.length-1].index,startIndex:e[0].index}))),VC(zS),XC(0)));NC(H,h.scrollSeekRangeChanged),NC(GC(E,JC(D,k,$,T),KC((([e,t,r,n,o])=>{const i=lD(e),{align:a,behavior:s,offset:l}=i;let c=i.index;"LAST"===c&&(c=n-1),c=Bk(0,c,Rk(n-1,c));let d=Vk(t,o,r,c);return"end"===a?d=zk(d-t.height+r.height):"center"===a&&(d=zk(d-t.height/2+r.height/2)),l&&(d+=l),{behavior:s,top:d}}))),l);const W=tS(GC(S,KC((e=>e.offsetBottom+e.bottom))),0);return NC(GC(x,KC((e=>({height:e.visibleHeight,width:e.visibleWidth})))),D),{customScrollParent:m,data:F,deviation:O,footerHeight:o,gap:T,headerHeight:i,increaseViewportBy:e,initialItemCount:C,itemDimensions:k,overscan:r,restoreStateFrom:M,scrollBy:a,scrollContainerState:s,scrollHeight:_,scrollTo:l,scrollToIndex:E,scrollTop:c,smoothScrollTargetReached:d,totalCount:$,useWindowScroll:b,viewportDimensions:D,windowScrollContainerState:v,windowScrollTo:y,windowViewportRect:x,...h,gridState:S,horizontalDirection:z,initialTopMostItemIndex:j,totalListHeight:W,...f,endReached:L,propsReady:g,rangeChanged:H,startReached:N,stateChanged:I,stateRestoreInProgress:A,...w}}),BC(CD,bS,bD,RD,aD,zD,uS));function Wk(e,t,r){return Bk(1,jk((e+r)/(jk(t)+r)))}function Yk(e,t,r,n){const{height:o}=r;if(void 0===o||0===n.length)return{bottom:0,top:0};const i=Vk(e,t,r,n[0].index);return{bottom:Vk(e,t,r,n[n.length-1].index)+o,top:i}}function Vk(e,t,r,n){const o=Wk(e.width,r.width,t.column),i=jk(n/o),a=i*r.height+Bk(0,i-1)*t.row;return a>0?a+t.row:a}const Uk=oS((()=>{const e=eS((e=>`Item ${e}`)),t=eS({}),r=eS(null),n=eS("virtuoso-grid-item"),o=eS("virtuoso-grid-list"),i=eS(nk),a=eS("div"),s=eS(MC),l=(e,r=null)=>tS(GC(t,KC((t=>t[e])),VC()),r),c=eS(!1),d=eS(!1);return NC(sS(d),c),{components:t,computeItemKey:i,context:r,FooterComponent:l("Footer"),HeaderComponent:l("Header"),headerFooterTag:a,itemClassName:n,ItemComponent:l("Item","div"),itemContent:e,listClassName:o,ListComponent:l("List","div"),readyStateChanged:c,reportReadyState:d,ScrollerComponent:l("Scroller","div"),scrollerRef:s,ScrollSeekPlaceholder:l("ScrollSeekPlaceholder","div")}})),Kk=oS((([e,t])=>({...e,...t})),BC(Hk,Uk)),qk=o.memo((function(){const t=rE("gridState"),r=rE("listClassName"),n=rE("itemClassName"),i=rE("itemContent"),a=rE("computeItemKey"),s=rE("isSeeking"),l=nE("scrollHeight"),c=rE("ItemComponent"),d=rE("ListComponent"),u=rE("ScrollSeekPlaceholder"),f=rE("context"),h=nE("itemDimensions"),p=nE("gap"),g=rE("log"),m=rE("stateRestoreInProgress"),b=nE("reportReadyState"),v=fS(o.useMemo((()=>e=>{const t=e.parentElement.parentElement.scrollHeight;l(t);const r=e.firstChild;if(r){const{height:e,width:t}=r.getBoundingClientRect();h({height:e,width:t})}p({column:aE("column-gap",getComputedStyle(e).columnGap,g),row:aE("row-gap",getComputedStyle(e).rowGap,g)})}),[l,h,p,g]),!0,!1);return XD((()=>{t.itemHeight>0&&t.itemWidth>0&&b(!0)}),[t]),m?null:e(d,{className:r,ref:v,...gk(d,f),"data-testid":"virtuoso-item-list",style:{paddingBottom:t.offsetBottom,paddingTop:t.offsetTop},children:t.items.map((r=>{const o=a(r.index,r.data,f);return s?e(u,{...gk(u,f),height:t.itemHeight,index:r.index,width:t.itemWidth},o):k(c,{...gk(c,f),className:n,"data-index":r.index,key:o},i(r.index,r.data,f))}))})})),Gk=o.memo((function(){const t=rE("HeaderComponent"),r=nE("headerHeight"),n=rE("headerFooterTag"),i=fS(o.useMemo((()=>e=>{r(WS(e,"height"))}),[r]),!0,!1),a=rE("context");return t?e(n,{ref:i,children:e(t,{...gk(t,a)})}):null})),Qk=o.memo((function(){const t=rE("FooterComponent"),r=nE("footerHeight"),n=rE("headerFooterTag"),i=fS(o.useMemo((()=>e=>{r(WS(e,"height"))}),[r]),!0,!1),a=rE("context");return t?e(n,{ref:i,children:e(t,{...gk(t,a)})}):null})),Zk=({children:t})=>{const r=o.useContext(ZD),n=nE("itemDimensions"),i=nE("viewportDimensions"),a=fS(o.useMemo((()=>e=>{i(e.getBoundingClientRect())}),[i]),!0,!1);return o.useEffect((()=>{r&&(i({height:r.viewportHeight,width:r.viewportWidth}),n({height:r.itemHeight,width:r.itemWidth}))}),[r,i,n]),e("div",{ref:a,style:hk(!1),children:t})},Xk=({children:t})=>{const r=o.useContext(ZD),n=nE("windowViewportRect"),i=nE("itemDimensions"),a=rE("customScrollParent"),s=mS(n,a,!1);return o.useEffect((()=>{r&&(i({height:r.itemHeight,width:r.itemWidth}),n({offsetTop:0,visibleHeight:r.viewportHeight,visibleWidth:r.viewportWidth}))}),[r,n,i]),e("div",{ref:s,style:hk(!1),children:t})},Jk=o.memo((function({...r}){const n=rE("useWindowScroll"),o=rE("customScrollParent"),i=o||n?iE:oE,a=o||n?Xk:Zk,s=rE("context");return e(i,{...r,...gk(i,s),children:t(a,{children:[e(Gk,{}),e(qk,{}),e(Qk,{})]})})})),{Component:eE,useEmitter:tE,useEmitterValue:rE,usePublisher:nE}=GD(Kk,{events:{atBottomStateChange:"atBottomStateChange",atTopStateChange:"atTopStateChange",endReached:"endReached",isScrolling:"isScrolling",rangeChanged:"rangeChanged",readyStateChanged:"readyStateChanged",startReached:"startReached",stateChanged:"stateChanged"},methods:{scrollBy:"scrollBy",scrollTo:"scrollTo",scrollToIndex:"scrollToIndex"},optional:{components:"components",computeItemKey:"computeItemKey",context:"context",customScrollParent:"customScrollParent",data:"data",headerFooterTag:"headerFooterTag",increaseViewportBy:"increaseViewportBy",initialItemCount:"initialItemCount",initialTopMostItemIndex:"initialTopMostItemIndex",itemClassName:"itemClassName",itemContent:"itemContent",listClassName:"listClassName",logLevel:"logLevel",overscan:"overscan",restoreStateFrom:"restoreStateFrom",scrollerRef:"scrollerRef",scrollSeekConfiguration:"scrollSeekConfiguration",totalCount:"totalCount",useWindowScroll:"useWindowScroll"}},Jk),oE=yk({useEmitter:tE,useEmitterValue:rE,usePublisher:nE}),iE=xk({useEmitter:tE,useEmitterValue:rE,usePublisher:nE});function aE(e,t,r){return"normal"!==t&&!(null!=t&&t.endsWith("px"))&&r(`${e} was not resolved to pixel value correctly`,t,cS.WARN),"normal"===t?0:parseInt(null!=t?t:"0",10)}const sE=o.createContext({focusedIndex:-1,setFocusedIndex:()=>{}}),lE=({children:t})=>{const[r,n]=g(-1);return e(sE.Provider,{value:{focusedIndex:r,setFocusedIndex:n},children:t})},cE=_.div`
    border: ${Ji["width-010"]} ${Ji.solid} ${Qi.border};
    border-radius: ${ta.sm};
    background: ${Qi.bg};

    ${e=>e.$customWidth?`width: ${e.$customWidth};`:e.$width?`width: ${e.$width}px; min-width: 23rem;`:"min-width: 23rem;"}
    max-height: min(27rem, var(--available-height, infinity * 1px));
    overflow: hidden;
    overflow-y: auto;
    ${e=>"small"===e.$variant?Zi["body-md-regular"]:Zi["body-baseline-regular"]}

    ${oa.MaxWidth.sm} {
        min-width: unset;
        width: calc(100vw - ${na["sm-margin"]} * 2);
        max-height: 15rem;
    }

    ${oa.MaxWidth.xs} {
        width: calc(100vw - ${na["xs-margin"]} * 2);
    }

    ${oa.MaxWidth.xxs} {
        width: calc(100vw - ${na["xxs-margin"]} * 2);
    }

    ::-webkit-scrollbar {
        width: 14px;
    }

    ::-webkit-scrollbar-track {
        background: transparent;
    }

    ::-webkit-scrollbar-thumb {
        background: ${Qi["bg-inverse-subtlest"]};
        border: 5px solid transparent;
        border-radius: ${ta.full};
        background-clip: padding-box;
    }
`,dE=_.div`
    background: transparent;
    padding: ${ea["spacing-8"]};
`,uE=_.ul`
    list-style-type: none;
`,fE=_.li`
    display: flex;
    align-items: flex-start;
    gap: ${ea["spacing-8"]};
    padding: ${ea["spacing-12"]} ${ea["spacing-8"]};
    cursor: pointer;
    border: none;
    border-radius: ${ta.none};
    outline: none;

    ${e=>e.$disabled?O`
                cursor: not-allowed;
            `:e.$active&&e.$selected?O`
                background: ${Qi["bg-hover"]};
            `:e.$active?O`
                background: ${Qi["bg-hover-subtle"]};
            `:void 0}
`,hE=_(Ce)`
    flex-shrink: 0;
    height: 1lh;
    width: 1rem;
    color: ${Qi["icon-selected"]};
`,pE=_.div`
    flex-shrink: 0;
    height: 1lh;
    width: 1rem;
`,gE=_($e)`
    flex-shrink: 0;
    height: 1lh;
    width: 1lh;
    color: ${Qi["icon-selected"]};
`,mE=_(xe)`
    flex-shrink: 0;
    height: 1lh;
    width: 1lh;
    color: ${Qi["icon-primary-subtlest"]};
`,bE=_(we)`
    flex-shrink: 0;
    height: 1lh;
    width: 1lh;
    color: ${Qi["icon-disabled-subtle"]};
`,vE=_.div`
    width: 100%;
    display: flex;
    justify-content: flex-end;
`,yE=_(xh)`
    cursor: pointer;
    overflow: hidden;
    color: ${Qi["text-primary"]};
    font-size: inherit;
`,xE=_(yE)`
    ${Zi["body-baseline-semibold"]}
`,wE=_(yE)`
    ${Zi["body-md-semibold"]}
    padding: ${ea["spacing-8"]} ${ea["spacing-8"]};
`,$E=_.div`
    width: 100%;
    display: flex;
    padding: ${ea["spacing-12"]} ${ea["spacing-16"]};
    align-items: center;
`,CE=_(ge)`
    margin-right: ${ea["spacing-4"]};
    color: ${Qi["icon-error"]};
    height: 1em;
    width: 1em;
`,SE=_(Xu)`
    margin-right: ${ea["spacing-8"]};
    color: ${Qi.icon};
`,DE=_.div`
    ${Gd()}
    color: ${Qi["text-subtle"]};
    padding: 0 ${ea["spacing-16"]} ${ea["spacing-12"]}
        ${ea["spacing-16"]};
`,kE=_.div`
    background: ${Qi["bg-strong"]};
    border-radius: ${ta.sm};
    display: flex;
    align-items: center;

    ${e=>"small"===e.$variant?Zi["body-md-regular"]:Zi["body-baseline-regular"]}
`,EE=_.label`
    flex: 1;
    display: flex;
    align-items: center;
    gap: ${ea["spacing-8"]};
    padding: ${e=>"small"===e.$variant?O`
                  ${ea["spacing-8"]} ${ea["spacing-16"]}
              `:O`10px ${ea["spacing-16"]}`};
`,_E=_(yh)`
    flex: 1;
`,OE=_(me)`
    color: ${Qi.icon};
    flex-shrink: 0;
    height: 1em;
    width: 1em;
`,FE=_(Vd)`
    flex-shrink: 0;
    align-self: stretch;
    box-sizing: content-box;
    padding: ${ea["spacing-8"]};
    margin-left: -${ea["spacing-8"]};
    color: ${Qi.icon};
    cursor: pointer;
    font-size: inherit;

    svg {
        flex-shrink: 0;
        height: 1em;
        width: 1em;
    }
`,TE=u(((r,n)=>{var{value:o,variant:i,onClear:a}=r,s=ct(r,["value","variant","onClear"]);return t(kE,{$variant:i,children:[t(EE,{$variant:i,children:[e(OE,{"aria-hidden":!0}),e(_E,Object.assign({ref:n,value:o,$variant:i},s))]}),o&&e(FE,{"aria-label":"Clear search",focusOutline:"browser",onClick:a,children:e(re,{"aria-hidden":!0})})]})})),IE=({listItems:n,multiSelect:o,maxSelectable:i,selectedItems:a,disableItemFocus:l,itemsLoadState:u="success",itemTruncationType:f="end",itemMaxLines:h=2,labelDisplayType:p="inline",variant:m="default",listboxId:v,matchElementWidth:y=!1,width:x,topScrollItem:w,onSelectItem:$,onSelectAll:C,onDismiss:S,onRetry:D,valueExtractor:k,listExtractor:E,renderListItem:_,renderCustomCallToAction:O,enableSearch:F,hideNoResultsDisplay:T,noResultsDescription:I,customLabels:M,searchPlaceholder:A,searchFunction:j,onSearch:B})=>{const{noResultsLabel:R="No results found.",selectAllButtonLabel:z="Select all",clearAllButtonLabel:P="Clear all"}=M||{},L=(null==M?void 0:M.searchPlaceholder)||A||"Search",N=(null==M?void 0:M.noResultsDescription)||I,{focusedIndex:H,setFocusedIndex:W}=b(sE),{elementWidth:Y,setFloatingRef:V,getFloatingProps:U,styles:K}=Nu(),[q,G]=g(""),[Q,Z]=g(null!=n?n:[]),X=Od(u),J=Ed(),ee=s(null),te=s(null),re=s([]),ne=s(null),oe=s(null),ie=!!i&&!!a&&(null==a?void 0:a.length)===i,ae=e=>{const t=E?E(e):null==e?void 0:e.toString();return"object"==typeof t?{title:t.title,secondaryLabel:t.secondaryLabel}:{title:null!=t?t:""}},se=d((e=>!!Iv(a,(t=>Av(t,e)))),[a]),le=Dd((()=>null==j?void 0:j(q))),ce=Dd((()=>null==n?void 0:n.filter((e=>{const{title:t,secondaryLabel:r}=ae(e),n=q.trim().toLowerCase();return t.toLowerCase().includes(n)||r&&r.toLowerCase().includes(n)})))),de=(e,t)=>{ie&&!se(e)||(W(t),null==$||$(e,(e=>k?k(e):e)(e)))},ue=e=>{const t=e.target.value;G(t),null==B||B()},fe=()=>{var e;G(""),null===(e=ne.current)||void 0===e||e.focus(),null==B||B()},he=()=>{null==D||D()};kd("keydown",(e=>{var t,r;switch(e.code){case"ArrowDown":if(e.preventDefault(),H<Q.length-1){const e=H+1;null===(t=re.current[e])||void 0===t||t.focus(),W(e)}break;case"ArrowUp":if(e.preventDefault(),H>0){const e=H-1;null===(r=re.current[e])||void 0===r||r.focus(),W(e)}else 0===H&&ne.current&&(ne.current.focus(),W(-1));break;case"Space":case"Enter":document.activeElement===re.current[H]&&(e.preventDefault(),Q[H]&&de(Q[H],H))}})),c((()=>{var e;if(!w)return void(null===(e=oe.current)||void 0===e||e.scrollTo({top:0}));const t=setTimeout((()=>{if(!n)return;const e=n.indexOf(w);oe.current&&-1!==e&&(oe.current.scrollToIndex({index:e}),W(e))}),0);return()=>clearTimeout(t)}),[re,n,W,w]),c((()=>{var e,t,r;if(J)return;if(l||!n)return;const o=n.findIndex((e=>se(e)));ne.current?(W(-1),setTimeout((()=>{var e;return null===(e=ne.current)||void 0===e?void 0:e.focus()}),200)):H>0?(null===(e=oe.current)||void 0===e||e.scrollToIndex({index:H,align:"center"}),setTimeout((()=>{var e;return null===(e=re.current[H])||void 0===e?void 0:e.focus()}),200)):-1!==o?(null===(t=oe.current)||void 0===t||t.scrollToIndex({index:o,align:"center"}),W(o),setTimeout((()=>{var e;return null===(e=re.current[o])||void 0===e?void 0:e.focus()}),200)):(null===(r=oe.current)||void 0===r||r.scrollToIndex({index:0}),W(0),setTimeout((()=>{var e;return null===(e=re.current[0])||void 0===e?void 0:e.focus()}),200))}),[se,l,H,n,J,W]),c((()=>{J&&X&&(l||"success"===u&&ne.current&&(W(-1),ne.current.focus()))}),[J,X,u,W,l]),c((()=>{var e;Z(null!==(e=""===q?n:j?le():ce())&&void 0!==e?e:[])}),[le,ce,n,j,q]);const pe=t=>o?e(ie&&!t?bE:t?gE:mE,{"aria-hidden":!0}):t?e(hE,{"aria-hidden":!0}):e(pE,{}),ge=(t,r)=>{const{title:n,secondaryLabel:o}=ae(t);return e(kC,{displayType:p,label:n,maxLines:h,selected:r,disabled:!r&&ie,sublabel:o,truncationType:f,variant:m})},me=(n,i)=>{if(!D||"success"===u){const a=se(n),s=i===H;return e(fE,{"aria-selected":a,"aria-multiselectable":o,"aria-disabled":!a&&ie,"data-testid":"list-item",onClick:()=>de(n,i),onMouseEnter:()=>(e=>{W(e)})(i),ref:e=>{re.current[i]=e},role:"option",tabIndex:s?0:-1,$active:s,$selected:a,$disabled:!a&&ie,children:_?_(n,{selected:a}):t(r,{children:[pe(a),ge(n,a)]})},((e,t)=>`item_${t}__${k?k(e):e}`)(n,i))}},be=()=>{if((F||j)&&"success"===u)return e(TE,{ref:ne,onChange:ue,value:q,placeholder:L,"data-testid":"search-input","aria-label":"Enter text to search",onClear:fe,variant:m})},ve=()=>{if(a&&o&&Q.length>0&&!q&&"success"===u)return e(vE,{children:e(wE,{onClick:C,type:"button",$variant:m,children:i||0!==a.length?P:z})})},ye=()=>{if(!T&&(q||!F)&&0===Q.length&&"success"===u)return t(r,{children:[t($E,{"data-testid":"list-no-results",children:[e(CE,{"data-testid":"no-result-icon"}),R]}),N&&e(DE,{"data-testid":"no-result-desc",children:N})]})},xe=()=>{if(D&&"loading"===u)return t($E,{"data-testid":"list-loading",children:[e(SE,{}),"Loading..."]})},we=()=>{if(D&&"fail"===u)return t($E,{"data-testid":"list-fail",children:[e(CE,{"data-testid":"load-error-icon"}),"Failed to load. ",e(xE,{onClick:he,type:"button",$variant:m,children:"Try again."})]})},$e=()=>{var t;const r="test"===process.env.NODE_ENV;return e(uE,{role:"listbox",id:v,children:e(Tk,Object.assign({ref:oe,style:{height:"100%"},data:Q,customScrollParent:null!==(t=ee.current)&&void 0!==t?t:void 0,itemContent:(e,t)=>me(t,e)},r?{initialItemCount:Q.length}:{}),r?Q.length:void 0)})};return t(cE,Object.assign({"data-testid":"dropdown-container",ref:$d(ee,V),style:K},U(),{$width:y?Y:void 0,$customWidth:x,$variant:m,children:[t(dE,{ref:te,"data-testid":"dropdown-list",children:[be(),ve(),ye(),xe(),we(),$e()]}),(()=>{if(O)return e("div",{"data-testid":"custom-cta",children:O(S,Q)})})()]}))},ME=_(xh)`
    display: flex;
    align-items: center;
    gap: ${ea["spacing-8"]};
    width: 100%;
    height: calc(3rem - 2px); // exclude top and bottom borders
    padding: ${ea["spacing-16"]};

    ${e=>"small"===e.$variant?Zi["body-md-regular"]:Zi["body-baseline-regular"]}

    &:disabled {
        cursor: not-allowed;
    }
`,AE=_.div`
    display: flex;
    align-items: center;
    transform: rotate(${e=>e.$expanded?180:0}deg);
    transition: transform ${Xi["duration-250"]} ${Xi["ease-default"]};

    svg {
        color: ${Qi.icon};
        height: 1em;
        width: 1em;
    }
`,jE=u((({children:r,disabled:n,expanded:o,listboxId:i,popupRole:a,readOnly:s,variant:l},c)=>t(ME,{ref:c,type:"button","aria-expanded":o,"aria-haspopup":a,"data-testid":"selector",disabled:n,"aria-controls":i,$variant:l,children:[r,!s&&e(AE,{$expanded:o,$variant:l,children:e(ne,{"aria-hidden":!0})})]})));var BE=Symbol.for("immer-nothing"),RE=Symbol.for("immer-draftable"),zE=Symbol.for("immer-state"),PE="production"!==process.env.NODE_ENV?[function(e){return`The plugin for '${e}' has not been loaded into Immer. To enable the plugin, import and call \`enable${e}()\` when initializing your application.`},function(e){return`produce can only be called on things that are draftable: plain objects, arrays, Map, Set or classes that are marked with '[immerable]: true'. Got '${e}'`},"This object has been frozen and should not be mutated",function(e){return"Cannot use a proxy that has been revoked. Did you pass an object from inside an immer function to an async process? "+e},"An immer producer returned a new value *and* modified its draft. Either return a new value *or* modify the draft.","Immer forbids circular references","The first or second argument to `produce` must be a function","The third argument to `produce` must be a function or undefined","First argument to `createDraft` must be a plain object, an array, or an immerable object","First argument to `finishDraft` must be a draft returned by `createDraft`",function(e){return`'current' expects a draft, got: ${e}`},"Object.defineProperty() cannot be used on an Immer draft","Object.setPrototypeOf() cannot be used on an Immer draft","Immer only supports deleting array indices","Immer only supports setting array indices and the 'length' property",function(e){return`'original' expects a draft, got: ${e}`}]:[];function LE(e,...t){if("production"!==process.env.NODE_ENV){const r=PE[e],n="function"==typeof r?r.apply(null,t):r;throw new Error(`[Immer] ${n}`)}throw new Error(`[Immer] minified error nr: ${e}. Full error at: https://bit.ly/3cXEKWf`)}var NE=Object.getPrototypeOf;function HE(e){return!!e&&!!e[zE]}function WE(e){return!!e&&(VE(e)||Array.isArray(e)||!!e[RE]||!!e.constructor?.[RE]||QE(e)||ZE(e))}var YE=Object.prototype.constructor.toString();function VE(e){if(!e||"object"!=typeof e)return!1;const t=NE(e);if(null===t)return!0;const r=Object.hasOwnProperty.call(t,"constructor")&&t.constructor;return r===Object||"function"==typeof r&&Function.toString.call(r)===YE}function UE(e,t){0===KE(e)?Reflect.ownKeys(e).forEach((r=>{t(r,e[r],e)})):e.forEach(((r,n)=>t(n,r,e)))}function KE(e){const t=e[zE];return t?t.type_:Array.isArray(e)?1:QE(e)?2:ZE(e)?3:0}function qE(e,t){return 2===KE(e)?e.has(t):Object.prototype.hasOwnProperty.call(e,t)}function GE(e,t,r){const n=KE(e);2===n?e.set(t,r):3===n?e.add(r):e[t]=r}function QE(e){return e instanceof Map}function ZE(e){return e instanceof Set}function XE(e){return e.copy_||e.base_}function JE(e,t){if(QE(e))return new Map(e);if(ZE(e))return new Set(e);if(Array.isArray(e))return Array.prototype.slice.call(e);const r=VE(e);if(!0===t||"class_only"===t&&!r){const t=Object.getOwnPropertyDescriptors(e);delete t[zE];let r=Reflect.ownKeys(t);for(let n=0;n<r.length;n++){const o=r[n],i=t[o];!1===i.writable&&(i.writable=!0,i.configurable=!0),(i.get||i.set)&&(t[o]={configurable:!0,writable:!0,enumerable:i.enumerable,value:e[o]})}return Object.create(NE(e),t)}{const t=NE(e);if(null!==t&&r)return{...e};const n=Object.create(t);return Object.assign(n,e)}}function e_(e,t=!1){return r_(e)||HE(e)||!WE(e)||(KE(e)>1&&(e.set=e.add=e.clear=e.delete=t_),Object.freeze(e),t&&Object.entries(e).forEach((([e,t])=>e_(t,!0)))),e}function t_(){LE(2)}function r_(e){return Object.isFrozen(e)}var n_,o_={};function i_(e){const t=o_[e];return t||LE(0,e),t}function a_(){return n_}function s_(e,t){t&&(i_("Patches"),e.patches_=[],e.inversePatches_=[],e.patchListener_=t)}function l_(e){c_(e),e.drafts_.forEach(u_),e.drafts_=null}function c_(e){e===n_&&(n_=e.parent_)}function d_(e){return n_={drafts_:[],parent_:n_,immer_:e,canAutoFreeze_:!0,unfinalizedDrafts_:0}}function u_(e){const t=e[zE];0===t.type_||1===t.type_?t.revoke_():t.revoked_=!0}function f_(e,t){t.unfinalizedDrafts_=t.drafts_.length;const r=t.drafts_[0];return void 0!==e&&e!==r?(r[zE].modified_&&(l_(t),LE(4)),WE(e)&&(e=h_(t,e),t.parent_||g_(t,e)),t.patches_&&i_("Patches").generateReplacementPatches_(r[zE].base_,e,t.patches_,t.inversePatches_)):e=h_(t,r,[]),l_(t),t.patches_&&t.patchListener_(t.patches_,t.inversePatches_),e!==BE?e:void 0}function h_(e,t,r){if(r_(t))return t;const n=t[zE];if(!n)return UE(t,((o,i)=>p_(e,n,t,o,i,r))),t;if(n.scope_!==e)return t;if(!n.modified_)return g_(e,n.base_,!0),n.base_;if(!n.finalized_){n.finalized_=!0,n.scope_.unfinalizedDrafts_--;const t=n.copy_;let o=t,i=!1;3===n.type_&&(o=new Set(t),t.clear(),i=!0),UE(o,((o,a)=>p_(e,n,t,o,a,r,i))),g_(e,t,!1),r&&e.patches_&&i_("Patches").generatePatches_(n,r,e.patches_,e.inversePatches_)}return n.copy_}function p_(e,t,r,n,o,i,a){if("production"!==process.env.NODE_ENV&&o===r&&LE(5),HE(o)){const a=h_(e,o,i&&t&&3!==t.type_&&!qE(t.assigned_,n)?i.concat(n):void 0);if(GE(r,n,a),!HE(a))return;e.canAutoFreeze_=!1}else a&&r.add(o);if(WE(o)&&!r_(o)){if(!e.immer_.autoFreeze_&&e.unfinalizedDrafts_<1)return;h_(e,o),t&&t.scope_.parent_||"symbol"==typeof n||!Object.prototype.propertyIsEnumerable.call(r,n)||g_(e,o)}}function g_(e,t,r=!1){!e.parent_&&e.immer_.autoFreeze_&&e.canAutoFreeze_&&e_(t,r)}var m_={get(e,t){if(t===zE)return e;const r=XE(e);if(!qE(r,t))return function(e,t,r){const n=y_(t,r);return n?"value"in n?n.value:n.get?.call(e.draft_):void 0}(e,r,t);const n=r[t];return e.finalized_||!WE(n)?n:n===v_(e.base_,t)?(w_(e),e.copy_[t]=$_(n,e)):n},has:(e,t)=>t in XE(e),ownKeys:e=>Reflect.ownKeys(XE(e)),set(e,t,r){const n=y_(XE(e),t);if(n?.set)return n.set.call(e.draft_,r),!0;if(!e.modified_){const n=v_(XE(e),t),o=n?.[zE];if(o&&o.base_===r)return e.copy_[t]=r,e.assigned_[t]=!1,!0;if(function(e,t){return e===t?0!==e||1/e==1/t:e!=e&&t!=t}(r,n)&&(void 0!==r||qE(e.base_,t)))return!0;w_(e),x_(e)}return e.copy_[t]===r&&(void 0!==r||t in e.copy_)||Number.isNaN(r)&&Number.isNaN(e.copy_[t])||(e.copy_[t]=r,e.assigned_[t]=!0),!0},deleteProperty:(e,t)=>(void 0!==v_(e.base_,t)||t in e.base_?(e.assigned_[t]=!1,w_(e),x_(e)):delete e.assigned_[t],e.copy_&&delete e.copy_[t],!0),getOwnPropertyDescriptor(e,t){const r=XE(e),n=Reflect.getOwnPropertyDescriptor(r,t);return n?{writable:!0,configurable:1!==e.type_||"length"!==t,enumerable:n.enumerable,value:r[t]}:n},defineProperty(){LE(11)},getPrototypeOf:e=>NE(e.base_),setPrototypeOf(){LE(12)}},b_={};function v_(e,t){const r=e[zE];return(r?XE(r):e)[t]}function y_(e,t){if(!(t in e))return;let r=NE(e);for(;r;){const e=Object.getOwnPropertyDescriptor(r,t);if(e)return e;r=NE(r)}}function x_(e){e.modified_||(e.modified_=!0,e.parent_&&x_(e.parent_))}function w_(e){e.copy_||(e.copy_=JE(e.base_,e.scope_.immer_.useStrictShallowCopy_))}UE(m_,((e,t)=>{b_[e]=function(){return arguments[0]=arguments[0][0],t.apply(this,arguments)}})),b_.deleteProperty=function(e,t){return"production"!==process.env.NODE_ENV&&isNaN(parseInt(t))&&LE(13),b_.set.call(this,e,t,void 0)},b_.set=function(e,t,r){return"production"!==process.env.NODE_ENV&&"length"!==t&&isNaN(parseInt(t))&&LE(14),m_.set.call(this,e[0],t,r,e[0])};function $_(e,t){const r=QE(e)?i_("MapSet").proxyMap_(e,t):ZE(e)?i_("MapSet").proxySet_(e,t):function(e,t){const r=Array.isArray(e),n={type_:r?1:0,scope_:t?t.scope_:a_(),modified_:!1,finalized_:!1,assigned_:{},parent_:t,base_:e,draft_:null,copy_:null,revoke_:null,isManual_:!1};let o=n,i=m_;r&&(o=[n],i=b_);const{revoke:a,proxy:s}=Proxy.revocable(o,i);return n.draft_=s,n.revoke_=a,s}(e,t);return(t?t.scope_:a_()).drafts_.push(r),r}function C_(e){if(!WE(e)||r_(e))return e;const t=e[zE];let r;if(t){if(!t.modified_)return t.base_;t.finalized_=!0,r=JE(e,t.scope_.immer_.useStrictShallowCopy_)}else r=JE(e,!0);return UE(r,((e,t)=>{GE(r,e,C_(t))})),t&&(t.finalized_=!1),r}var S_=new class{constructor(e){this.autoFreeze_=!0,this.useStrictShallowCopy_=!1,this.produce=(e,t,r)=>{if("function"==typeof e&&"function"!=typeof t){const r=t;t=e;const n=this;return function(e=r,...o){return n.produce(e,(e=>t.call(this,e,...o)))}}let n;if("function"!=typeof t&&LE(6),void 0!==r&&"function"!=typeof r&&LE(7),WE(e)){const o=d_(this),i=$_(e,void 0);let a=!0;try{n=t(i),a=!1}finally{a?l_(o):c_(o)}return s_(o,r),f_(n,o)}if(!e||"object"!=typeof e){if(n=t(e),void 0===n&&(n=e),n===BE&&(n=void 0),this.autoFreeze_&&e_(n,!0),r){const t=[],o=[];i_("Patches").generateReplacementPatches_(e,n,t,o),r(t,o)}return n}LE(1,e)},this.produceWithPatches=(e,t)=>{if("function"==typeof e)return(t,...r)=>this.produceWithPatches(t,(t=>e(t,...r)));let r,n;const o=this.produce(e,t,((e,t)=>{r=e,n=t}));return[o,r,n]},"boolean"==typeof e?.autoFreeze&&this.setAutoFreeze(e.autoFreeze),"boolean"==typeof e?.useStrictShallowCopy&&this.setUseStrictShallowCopy(e.useStrictShallowCopy)}createDraft(e){WE(e)||LE(8),HE(e)&&(e=function(e){HE(e)||LE(10,e);return C_(e)}(e));const t=d_(this),r=$_(e,void 0);return r[zE].isManual_=!0,c_(t),r}finishDraft(e,t){const r=e&&e[zE];r&&r.isManual_||LE(9);const{scope_:n}=r;return s_(n,t),f_(void 0,n)}setAutoFreeze(e){this.autoFreeze_=e}setUseStrictShallowCopy(e){this.useStrictShallowCopy_=e}applyPatches(e,t){let r;for(r=t.length-1;r>=0;r--){const n=t[r];if(0===n.path.length&&"replace"===n.op){e=n.value;break}}r>-1&&(t=t.slice(r+1));const n=i_("Patches").applyPatches_;return HE(e)?n(e,t):this.produce(e,(e=>n(e,t)))}},D_=S_.produce;S_.produceWithPatches.bind(S_),S_.setAutoFreeze.bind(S_),S_.setUseStrictShallowCopy.bind(S_),S_.applyPatches.bind(S_),S_.createDraft.bind(S_),S_.finishDraft.bind(S_);var k_=Em,E_=ib,__=qg,O_=hr,F_=Fm,T_=Zg,I_=$m,M_=fm,A_=Object.prototype.hasOwnProperty;var j_=function(e){if(null==e)return!0;if(F_(e)&&(O_(e)||"string"==typeof e||"function"==typeof e.splice||T_(e)||M_(e)||__(e)))return!e.length;var t=E_(e);if("[object Map]"==t||"[object Set]"==t)return!e.size;if(I_(e))return!k_(e).length;for(var r in e)if(A_.call(e,r))return!1;return!0},B_=Re(j_);const R_=(e,t,r)=>{const n=D_(e,(e=>{for(let n=e.length-1;n>=0;n--){const o=e[n],i=P_(o.keyPath);if(o.checked=t.has(i),o.hasSubItems&&r&&!0!==o.checked){const t=o.subItemIndexes.map((t=>e[t])),r=t.every((e=>!0===e.checked)),n=t.some((e=>!1!==e.checked));r?o.checked=!0:n&&(o.checked="mixed")}}}));return n},z_=(e,t)=>{const[r,...n]=t;if(B_(e)||B_(r))return;const o=e.find((e=>e.key===r));return o&&n.length?z_(o.subItems,n):o},P_=e=>e.join(","),L_=e=>new Set(e.map((e=>e.join(",")))),N_=_.li`
    display: ${e=>e.$visible?"flex":"none"};
`,H_=_.div`
    flex: 1;
    display: flex;
    align-items: flex-start;
    gap: ${ea["spacing-8"]};
    padding: ${ea["spacing-12"]} ${ea["spacing-8"]};
    cursor: ${e=>e.$toggleable?"default":"pointer"};
    overflow: hidden; // required for label to truncate properly
    border-radius: ${ta.none};
    outline: none;

    ${e=>e.$active&&O`
            background: ${Qi["bg-hover"]};
        `}
`,W_=_.div`
    height: 1px;
    width: calc((1lh + ${ea["spacing-8"]}) * ${e=>e.$level});
`,Y_=_.div`
    width: 1lh;
    height: 1lh;
    color: ${Qi["icon-primary"]};
    cursor: pointer;

    svg {
        width: 1lh;
        height: 1lh;
        transition: transform ${Xi["duration-350"]}
            ${Xi["ease-standard"]};

        ${e=>{if(e.$expanded)return O`
                    transform: rotate(90deg);
                `}}
    }
`,V_=_.div`
    width: 1lh;
    height: 1lh;
    margin-right: ${ea["spacing-8"]};
`,U_=_.div`
    flex-shrink: 0;
    height: 1lh;
    width: ${e=>e.$hasNestedSiblings?"1lh":ea["spacing-16"]};

    display: flex;
    justify-content: center;
`,K_=_(De)`
    flex-shrink: 0;
    height: 1lh;
    width: 1lh;
    color: ${Qi["icon-selected"]};
`,q_=({listItems:n,multiSelect:o=!1,selectedKeyPaths:i,itemsLoadState:l="success",itemTruncationType:d="end",itemMaxLines:u=2,variant:f="default",listboxId:h,matchElementWidth:p=!1,width:m,mode:b="default",selectableCategory:v,onSelectItem:y,onSelectAll:x,onRetry:w,enableSearch:$,hideNoResultsDisplay:C,noResultsDescription:S,customLabels:D,searchPlaceholder:k,onSearch:E})=>{const{noResultsLabel:_="No results found.",selectAllButtonLabel:O="Select all",clearAllButtonLabel:F="Clear all"}=D||{},T=(null==D?void 0:D.searchPlaceholder)||k||"Search",I=(null==D?void 0:D.noResultsDescription)||S,M=o||v,{elementWidth:A,setFloatingRef:j,getFloatingProps:B,styles:R}=Nu(),[z,P]=g(""),L=z.toLowerCase().trim(),[N,H]=g(!1),W=s(null),Y=s(null),V=s([]),U=s(null),K=Ed(),[q,G]=g([]),[Q,Z]=g([]),X=N?Q:q,J=a((()=>{let e=0;for(const t of q)t.level>e&&(e=t.level);return e}),[q]),[ee,te]=g(0),[re,ne]=g([]),[oe,ie]=g(0),ae=e=>{const t=e.target.value;P(t),""===t?H(!1):t.trim().length>=3&&H(!0),null==E||E()},se=()=>{var e;P(""),H(!1),null===(e=U.current)||void 0===e||e.focus(),null==E||E()},le=()=>{null==w||w()},ce=()=>{if(0===i.size){const e=[],t=[];q.forEach((r=>{r.hasSubItems||(e.push(r.keyPath),t.push(r))})),null==x||x(e,t)}else null==x||x([],[])},de=Dd(((e,t)=>((e,t,r,n,o)=>{const i=[],a=(e,s)=>{const l=[],c=e.some((e=>{var t;return null===(t=e.subItems)||void 0===t?void 0:t.length}));return e.forEach(((d,u)=>{var f,h;const p=s?s.level+1:0,g=s?[...s.keyPath,d.key]:[d.key],m=P_(g),b={item:d,index:i.length,indexInParent:u,parentSetSize:e.length,keyPath:g,parentIndex:s?s.index:-1,parentKeyPath:s?s.keyPath:[],level:p,visible:0===p||o||(null==s?void 0:s.expanded)||!1,expanded:o,checked:t.has(m),hasSubItems:!!(null===(f=d.subItems)||void 0===f?void 0:f.length),subItemIndexes:[],hasNestedSiblings:c,matched:!!n&&-1!==d.label.toLowerCase().indexOf(n),hasMatchedSubItems:!1};if(l.push(b),i.push(b),null===(h=d.subItems)||void 0===h?void 0:h.length){const e=a(d.subItems,b);if(r&&!0!==b.checked){const t=e.every((e=>!0===e.checked)),r=e.some((e=>!1!==e.checked));t?b.checked=!0:r&&(b.checked="mixed")}b.hasMatchedSubItems=e.some((e=>e.matched||e.hasMatchedSubItems)),b.subItemIndexes=e.map((e=>e.index))}})),l};return a(e,void 0),i})(e,i,o,L,t))),ue=Dd((e=>{return i.size?(t=de(e,!1),D_(t,(e=>{const t=e.filter((e=>!0===e.checked));for(const r of t){let t=r.parentIndex;for(;t>=0;){const r=e[t];r.visible=!0,r.expanded=!0;for(const t of r.subItemIndexes)e[t].visible=!0;t=r.parentIndex}}}))):(e=>D_(e,(e=>{const t=e.findIndex((e=>e.hasSubItems));if(t<0)return;let r=t,n=0;for(let t=r;t<e.length;t++){const o=e[t].keyPath.length;if(o>n)n=o;else if(o<n)break;r=t,e[t].visible=!0,e[t].expanded=!0}for(let t=0;t<e.length;t++){const n=e[t],o=n.keyPath.slice(0,-1),i=e[r].keyPath.slice(0,o.length);Av(o,i)&&(n.visible=!0)}return e})))(de(e,!1));var t})),fe=Dd((e=>{const t=e=>{const r=[];for(const n of e){if(-1!==n.label.toLowerCase().indexOf(L))r.push(n);else if(n.subItems){const e=t(n.subItems);if(e.length>0){r.push(Object.assign(Object.assign({},n),{subItems:e}));continue}}}return r};return t(e)})),he=Dd((()=>{G((e=>R_(e,i,o))),N&&Z((e=>R_(e,i,o)))})),pe=(e,t,r)=>{const n=((e,t,r)=>D_(e,(e=>{e[t].expanded=r;const n=e[t].keyPath;for(let o=t+1;o<e.length;o++){const t=e[o],i=e[t.parentIndex],a=t.keyPath.slice(0,n.length);if(!Av(n,a))break;t.visible=r&&i.expanded&&i.visible}})))(X,e,t);te(e),ie(r),N?Z(n):G(n)};kd("keydown",(e=>{var t,r;switch(e.code){case"ArrowDown":{e.preventDefault();const r=((e,t,r)=>{for(let n=r;n<e.length;n++)if(t(e[n]))return e[n]})(X,(e=>e.visible),ee+1);r&&(ie((e=>e+1)),te(r.index),null===(t=V.current[r.index])||void 0===t||t.focus());break}case"ArrowUp":{e.preventDefault();const t=((e,t,r)=>{for(let n=r;n>=0;n--)if(t(e[n]))return e[n]})(X,(e=>e.visible),ee-1);t?(ie((e=>e-1)),te(t.index),null===(r=V.current[t.index])||void 0===r||r.focus()):0===oe&&U.current&&(U.current.focus(),ie(-1),te(-1));break}case"ArrowRight":e.preventDefault(),pe(ee,!0,oe);break;case"ArrowLeft":e.preventDefault(),pe(ee,!1,oe);break;case"Space":if(document.activeElement===V.current[ee]){e.preventDefault();const t=X[ee];if(t.hasSubItems&&!M)return;null==y||y(t)}}})),c((()=>{let e=[];"default"===b?e=ue(n):"expand"===b?e=de(n,!0):"collapse"===b&&(e=de(n,!1)),G(e)}),[de,ue,n,b]),c((()=>{ne(X.filter((e=>e.visible)))}),[N,X]),c((()=>{he()}),[o,i,he]),c((()=>{if(N&&z.trim().length>=3){const e=fe(n),t=(e=>D_(e,(e=>{for(const t of e)if(t.matched&&(t.visible=!0),t.hasMatchedSubItems){t.visible=!0,t.expanded=!0;for(const r of t.subItemIndexes)e[r].visible=!0}})))(de(e,!1));Z(t)}}),[fe,de,n,N,z]),c((()=>{K||(U.current?(te(-1),ie(-1),setTimeout((()=>{var e;return null===(e=U.current)||void 0===e?void 0:e.focus()}),200)):V.current[ee]?setTimeout((()=>{var e;return null===(e=V.current[ee])||void 0===e?void 0:e.focus()}),200):(te(0),ie(0),setTimeout((()=>{var e;return null===(e=V.current[0])||void 0===e?void 0:e.focus()}),200)))}),[ee,oe,K]);const ge=()=>{if($&&"success"===l)return e(TE,{ref:U,onChange:ae,value:z,placeholder:T,"data-testid":"search-input","aria-label":"Enter text to search",onClear:se,variant:f})},me=()=>{if(o&&!N&&q.length>0&&"success"===l)return e(vE,{children:e(wE,{onClick:ce,type:"button",$variant:f,children:0===i.size?O:F})})},be=()=>{if(!C&&N&&0===Q.length&&"success"===l)return t(r,{children:[t($E,{"data-testid":"list-no-results",children:[e(CE,{"data-testid":"no-result-icon"}),_]}),I&&e(DE,{"data-testid":"no-result-desc",children:I})]})},ve=()=>{if(w&&"loading"===l)return t($E,{"data-testid":"list-loading",children:[e(hf,{}),"Loading..."]})},ye=()=>{if(w&&"fail"===l)return t($E,{"data-testid":"list-fail",children:[e(CE,{"data-testid":"load-error-icon"}),"Failed to load. ",e(xE,{onClick:le,type:"button",$variant:f,children:"Try again."})]})},xe=t=>{if(o)switch(t.checked){case"mixed":return e(K_,{"aria-hidden":!0});case!0:return e(gE,{"aria-hidden":!0});default:return e(mE,{"aria-hidden":!0})}if(!t.hasSubItems)return e(U_,{$hasNestedSiblings:t.hasNestedSiblings||0===t.level,children:t.checked&&e(hE,{"aria-hidden":!0})})},we=(r,n)=>{const{level:i,visible:a,expanded:s,keyPath:l,checked:c,hasSubItems:f,indexInParent:h,parentSetSize:p}=r,g=r.index,m=oe===n,b=f&&!M;return t(N_,{$visible:a,children:[J>0&&e(W_,{$level:i}),J>0&&!f&&o&&e(V_,{}),t(H_,{"aria-checked":c,"aria-selected":!!c,"aria-expanded":f?s:void 0,"aria-level":i+1,"aria-posinset":h+1,"aria-setsize":p,"data-testid":"list-item",onClick:e=>{e.stopPropagation(),b?pe(g,!s,n):((e,t)=>{ie(t),te(e),null==y||y(X[e])})(g,n)},onMouseEnter:()=>((e,t)=>{te(t.index),ie(e)})(n,r),ref:e=>V.current[r.index]=e,role:"treeitem",tabIndex:m?0:-1,$active:m,$toggleable:b,children:[f&&e(Y_,{"data-testid":"toggle-category-button",onClick:e=>{e.stopPropagation(),pe(g,!s,n)},$expanded:s,children:e(Se,{})}),xe(r),e(kC,{bold:f,searchTerm:N?L:void 0,label:r.item.label,selected:!!c,truncationType:d,maxLines:u})]})]},`[${l.join("---")}]`)},$e=()=>{var t;const r="test"===process.env.NODE_ENV;return e("div",{"aria-multiselectable":o,id:h,ref:Y,role:"tree",children:e(Tk,Object.assign({style:{height:"100%"},customScrollParent:null!==(t=W.current)&&void 0!==t?t:void 0,data:re,itemContent:(e,t)=>we(t,e)},r?{initialItemCount:re.length}:{}),r?re.length:void 0)})};return e(cE,Object.assign({"data-testid":"dropdown-container",ref:$d(W,j),style:R},B(),{$width:p?A:void 0,$variant:f,$customWidth:m,children:t(dE,{"data-testid":"nested-dropdown-list",children:[ge(),me(),be(),ve(),ye(),$e()]})}))},G_=({selectedOptions:t,placeholder:r="Select",options:n,disabled:o,error:i,className:a,"data-testid":l,id:d,enableSearch:u=!1,searchFunction:f,searchPlaceholder:h,valueExtractor:p,listExtractor:m,onSelectOptions:b,onShowOptions:v,onHideOptions:y,onRetry:x,optionsLoadState:w="success",optionTruncationType:$="end",renderListItem:C,hideNoResultsDisplay:S,noResultsDescription:D,customLabels:k,renderCustomCallToAction:E,onBlur:_,variant:O="default",readOnly:F,alignment:T,dropdownZIndex:I,maxSelectable:M,dropdownRootNode:A,dropdownWidth:j})=>{const{allSelectedLabel:B,multiSelectedLabel:R}=k||{},[z,P]=g(t||[]),[L,N]=g(!1),[H,W]=g(!1),[Y]=g((()=>Cd.generate())),V=s(null),U=s(null);c((()=>{P(t||[])}),[t]);const K=()=>{z&&z.length>0||M?(P([]),J([])):(P(n),J(n))},q=(e,t)=>{const r=[...z],n=Tv(z,(e=>(p?p(e):e)===t));n>-1?r.splice(n,1):r.push(e),P(r),J(r)},G=()=>{L&&(N(!1),X(!1))},Q=()=>{H||L||W(!0)},Z=e=>{H&&!L&&V.current&&!V.current.contains(e.relatedTarget)&&(W(!1),null==_||_())},X=e=>{!e&&y&&y(),e&&v&&v()},J=e=>{b&&b(e)};return e(lE,{children:e(Hu,{enabled:!F&&!o,isOpen:L,renderElement:()=>e(bh,{className:a,"data-testid":l,id:d,ref:V,tabIndex:-1,onFocus:Q,onBlur:Z,$focused:H,$disabled:o,$readOnly:F,$error:i,children:e(jE,{ref:U,disabled:o,expanded:L,listboxId:Y,popupRole:"listbox",readOnly:F,variant:O,children:e(ju,{$disabled:o,children:z&&0!==z.length?e(Bu,{$variant:O,children:n&&z.length===n.length?B||"All selected":R||`${z.length} selected`}):e(Ru,{$truncateType:$,$variant:O,children:r})})})}),renderDropdown:()=>e(IE,{listboxId:Y,listItems:n,onSelectItem:q,onDismiss:G,valueExtractor:p,listExtractor:m,enableSearch:u,searchFunction:f,searchPlaceholder:h,multiSelect:!0,maxSelectable:M,selectedItems:z,onSelectAll:K,onRetry:x,itemsLoadState:w,itemTruncationType:$,renderListItem:C,hideNoResultsDisplay:S,noResultsDescription:D,customLabels:k,renderCustomCallToAction:E,variant:O,width:j,matchElementWidth:!0}),onOpen:()=>{N(!0),X(!0),W(!0)},onClose:e=>{N(!1),X(!1),"click"!==e&&(W(!1),null==_||_())},onDismiss:()=>{var e;null===(e=U.current)||void 0===e||e.focus(),N(!1),X(!1)},clickToToggle:!0,offset:8,alignment:T,fitAvailableHeight:!0,customZIndex:I,rootNode:A})})},Q_=(e,t)=>{const[r,...n]=t;if(B_(e)||!r)return;const o=e.find((e=>e.key===r));return o?n.length?Q_(o.subItems,n):o:void 0},Z_=(e,t)=>{const r=[];for(const n of e)n.subItems?r.push(...Z_(n.subItems,[...t,n.key])):r.push({value:n.value,label:n.label,keyPath:[...t,n.key]});return r},X_=({placeholder:t="Select",options:r,disabled:n,error:o,className:i,"data-testid":a,id:l,selectedKeyPaths:d,mode:u,valueToStringFunction:f,enableSearch:h,searchPlaceholder:p,hideNoResultsDisplay:m,noResultsDescription:b,customLabels:v,readOnly:y,onSearch:x,onSelectOptions:w,onShowOptions:$,onHideOptions:C,onRetry:S,onBlur:D,optionsLoadState:k="success",optionTruncationType:E="end",variant:_="default",alignment:O,dropdownZIndex:F,dropdownWidth:T,dropdownRootNode:I})=>{const{multiSelectedLabel:M}=v||{},A=r,[j,B]=g(d?L_(d):new Set),[R,z]=g([]),[P,L]=g(!1),[N,H]=g(!1),[W]=g((()=>Cd.generate())),Y=s(null),V=s(null),U=s(null);c((()=>{const e=d||[],t=((e,t)=>{const r=[];for(let n=0;n<t.length;n++){const o=t[n],i=Q_(e,o);i&&r.push({value:i.value,label:i.label,keyPath:o})}return r})(A,e);B(L_(e)),z(t)}),[d,A]);const K=(e,t)=>{const r=t.map((e=>({keyPath:e.keyPath,label:e.item.label,value:e.item.value})));B(L_(e)),z(r),ee(e,r)},q=e=>{const t=te(e),r=t.map((e=>e.keyPath));z(t),B(L_(r)),ee(r,t)},G=()=>{N||P||H(!0)},Q=e=>{N&&!P&&Y.current&&!Y.current.contains(e.relatedTarget)&&(H(!1),null==D||D())},Z=()=>{if(R.length>1)return M||`${R.length} selected`;const{label:e,value:t}=R[0];return f?f(t):e},X=e=>{if("middle"===E){let t=0;return U&&U.current&&(t=U.current.getBoundingClientRect().width),Sd.truncateOneLine(e,t,120,6)}return e},J=e=>{!e&&C&&C(),e&&$&&$()},ee=(e,t)=>{if(w){const r=t.map((e=>e.value));w(e,r)}},te=e=>{if(!0===e.checked)return R.filter((t=>{const r=t.keyPath.slice(0,e.keyPath.length);return!Av(e.keyPath,r)}));{const t=[...R],r=e.hasSubItems?((e,t)=>{const r=Q_(e,t);return r&&r.subItems?Z_(r.subItems,t):[]})(A,e.keyPath):[{value:e.item.value,label:e.item.label,keyPath:e.keyPath}];return r.forEach((e=>{R.find((t=>Av(t.keyPath,e.keyPath)))||t.push(e)})),t}};return e(Hu,{enabled:!y&&!n,isOpen:P,renderElement:()=>e(bh,{className:i,"data-testid":a,id:l,ref:Y,tabIndex:-1,onFocus:G,onBlur:Q,$focused:N,$disabled:n,$readOnly:y,$error:o,children:e(jE,{ref:V,disabled:n,expanded:P,listboxId:W,popupRole:"tree",readOnly:y,variant:_,children:e(ju,{ref:U,$disabled:n,children:B_(R)?e(Ru,{$truncateType:E,children:t}):e(Bu,{$truncateType:E,children:X(Z())})})})}),renderDropdown:()=>e(q_,{listboxId:W,listItems:A,multiSelect:!0,selectedKeyPaths:j,itemsLoadState:k,itemTruncationType:E,enableSearch:h,searchPlaceholder:p,hideNoResultsDisplay:m,noResultsDescription:b,customLabels:v,onSelectItem:q,onSelectAll:K,onRetry:S,onSearch:x,variant:_,mode:u,width:T,matchElementWidth:!0}),onOpen:()=>{L(!0),J(!0),H(!0)},onClose:e=>{L(!1),J(!1),"click"!==e&&(H(!1),null==D||D())},onDismiss:()=>{var e;null===(e=V.current)||void 0===e||e.focus(),L(!1),J(!1)},clickToToggle:!0,offset:8,alignment:O,fitAvailableHeight:!0,customZIndex:F,rootNode:I})},J_=({placeholder:t="Select",options:r,disabled:n,error:o,className:i,"data-testid":a,id:l,selectedKeyPath:d,mode:u,valueToStringFunction:f,enableSearch:h,searchPlaceholder:p,selectableCategory:m,hideNoResultsDisplay:b,noResultsDescription:v,customLabels:y,readOnly:x,onBlur:w,onSearch:$,onSelectOption:C,onShowOptions:S,onHideOptions:D,onRetry:k,optionsLoadState:E="success",optionTruncationType:_="end",variant:O="default",alignment:F,dropdownZIndex:T,dropdownWidth:I,dropdownRootNode:M})=>{const A=r,[j,B]=g(d?L_([d]):new Set),[R,z]=g(),[P,L]=g(!1),[N,H]=g(!1),[W]=g((()=>Cd.generate())),Y=s(null),V=s(null),U=s(null);c((()=>{B(d?L_([d]):new Set);const e=z_(A,d||[]);z(null!=e?e:void 0)}),[d,A]);const K=e=>{var t;const{keyPath:r,item:{label:n,value:o}}=e;B(L_([r])),z({label:n,value:o}),L(!1),X(!1),null===(t=V.current)||void 0===t||t.focus(),null==C||C(r,o)},q=()=>{N||P||H(!0)},G=e=>{N&&!P&&Y.current&&!Y.current.contains(e.relatedTarget)&&(H(!1),null==w||w())},Q=()=>{if(!R)return"";const{label:e,value:t}=R;return f?f(t):e},Z=e=>{if("middle"===_){let t=0;return U&&U.current&&(t=U.current.getBoundingClientRect().width),Sd.truncateOneLine(e,t,120,6)}return e},X=e=>{!e&&D&&D(),e&&S&&S()};return e(Hu,{enabled:!x&&!n,isOpen:P,renderElement:()=>e(bh,{className:i,"data-testid":a,id:l,ref:Y,tabIndex:-1,onFocus:q,onBlur:G,$focused:N,$disabled:n,$readOnly:x,$error:o,children:e(jE,{ref:V,disabled:n,expanded:P,listboxId:W,popupRole:"tree",readOnly:x,variant:O,children:e(ju,{ref:U,$disabled:n,children:B_(R)?e(Ru,{$truncateType:_,children:t}):e(Bu,{$truncateType:_,children:Z(Q())})})})}),renderDropdown:()=>e(q_,{listboxId:W,listItems:A,selectedKeyPaths:j,selectableCategory:m,itemsLoadState:E,itemTruncationType:_,enableSearch:h,searchPlaceholder:p,hideNoResultsDisplay:b,noResultsDescription:v,customLabels:y,onSelectItem:K,onRetry:k,onSearch:$,variant:O,mode:u,width:I,matchElementWidth:!0}),onOpen:()=>{L(!0),X(!0),H(!0)},onClose:e=>{L(!1),X(!1),"click"!==e&&(H(!1),null==w||w())},onDismiss:()=>{var e;null===(e=V.current)||void 0===e||e.focus(),L(!1),X(!1)},clickToToggle:!0,offset:8,alignment:F,fitAvailableHeight:!0,customZIndex:T,rootNode:M})};var eO=function(e,t,r,n){var o=-1,i=null==e?0:e.length;for(n&&i&&(r=e[++o]);++o<i;)r=t(r,e[o],o,e);return r};var tO=function(e){return function(t,r,n){for(var o=-1,i=Object(t),a=n(t),s=a.length;s--;){var l=a[e?s:++o];if(!1===r(i[l],l,i))break}return t}},rO=tO(),nO=Am;var oO=Fm;var iO=function(e,t){return function(r,n){if(null==r)return r;if(!oO(r))return e(r,n);for(var o=r.length,i=t?o:-1,a=Object(r);(t?i--:++i<o)&&!1!==n(a[i],i,a););return r}}((function(e,t){return e&&rO(e,t,nO)}));var aO=eO,sO=iO,lO=sv,cO=function(e,t,r,n,o){return o(e,(function(e,o,i){r=n?(n=!1,e):t(r,e,o,i)})),r},dO=hr;var uO=Re((function(e,t,r){var n=dO(e)?aO:cO,o=arguments.length<3;return n(e,lO(t),r,o,sO)}));const fO=[["Afghanistan",["asia"],"af","93"],["Albania",["europe"],"al","355"],["Algeria",["africa","north-africa"],"dz","213"],["Andorra",["europe"],"ad","376"],["Angola",["africa"],"ao","244"],["Antigua and Barbuda",["america","carribean"],"ag","1268"],["Argentina",["america","south-america"],"ar","54","(..) ........"],["Armenia",["asia","ex-ussr"],"am","374",".. ......"],["Aruba",["america","carribean"],"aw","297"],["Australia",["oceania"],"au","61","(..) .... ...."],["Austria",["europe","eu-union"],"at","43"],["Azerbaijan",["asia","ex-ussr"],"az","994","(..) ... .. .."],["Bahamas",["america","carribean"],"bs","1242"],["Bahrain",["middle-east"],"bh","973"],["Bangladesh",["asia"],"bd","880"],["Barbados",["america","carribean"],"bb","1246"],["Belarus",["europe","ex-ussr"],"by","375","(..) ... .. .."],["Belgium",["europe","eu-union"],"be","32","... .. .. .."],["Belize",["america","central-america"],"bz","501"],["Benin",["africa"],"bj","229"],["Bhutan",["asia"],"bt","975"],["Bolivia",["america","south-america"],"bo","591"],["Bosnia and Herzegovina",["europe","ex-yugos"],"ba","387"],["Botswana",["africa"],"bw","267"],["Brazil",["america","south-america"],"br","55","(..) ........."],["British Indian Ocean Territory",["asia"],"io","246"],["Brunei",["asia"],"bn","673"],["Bulgaria",["europe","eu-union"],"bg","359"],["Burkina Faso",["africa"],"bf","226"],["Burundi",["africa"],"bi","257"],["Cambodia",["asia"],"kh","855"],["Cameroon",["africa"],"cm","237"],["Canada",["america","north-america"],"ca","1","(...) ... ...."],["Cape Verde",["africa"],"cv","238"],["Caribbean Netherlands",["america","carribean"],"bq","599",""],["Central African Republic",["africa"],"cf","236"],["Chad",["africa"],"td","235"],["Chile",["america","south-america"],"cl","56"],["China",["asia"],"cn","86",".. ........."],["Colombia",["america","south-america"],"co","57","... ... ...."],["Comoros",["africa"],"km","269"],["Congo",["africa"],"cd","243"],["Congo",["africa"],"cg","242"],["Costa Rica",["america","central-america"],"cr","506",".... ...."],["Côte d’Ivoire",["africa"],"ci","225",".. .. .. .."],["Croatia",["europe","eu-union","ex-yugos"],"hr","385"],["Cuba",["america","carribean"],"cu","53"],["Curaçao",["america","carribean"],"cw","599",""],["Cyprus",["europe","eu-union"],"cy","357",".. ......"],["Czech Republic",["europe","eu-union"],"cz","420","... ... ..."],["Denmark",["europe","eu-union","baltic"],"dk","45",".. .. .. .."],["Djibouti",["africa"],"dj","253"],["Dominica",["america","carribean"],"dm","1767"],["Dominican Republic",["america","carribean"],"do","1",""],["Ecuador",["america","south-america"],"ec","593"],["Egypt",["africa","north-africa"],"eg","20"],["El Salvador",["america","central-america"],"sv","503",".... ...."],["Equatorial Guinea",["africa"],"gq","240"],["Eritrea",["africa"],"er","291"],["Estonia",["europe","eu-union","ex-ussr","baltic"],"ee","372",".... ......"],["Ethiopia",["africa"],"et","251"],["Fiji",["oceania"],"fj","679"],["Finland",["europe","eu-union","baltic"],"fi","358",".. ... .. .."],["France",["europe","eu-union"],"fr","33",". .. .. .. .."],["French Guiana",["america","south-america"],"gf","594"],["French Polynesia",["oceania"],"pf","689"],["Gabon",["africa"],"ga","241"],["Gambia",["africa"],"gm","220"],["Georgia",["asia","ex-ussr"],"ge","995"],["Germany",["europe","eu-union","baltic"],"de","49",".... ........"],["Ghana",["africa"],"gh","233"],["Greece",["europe","eu-union"],"gr","30"],["Grenada",["america","carribean"],"gd","1473"],["Guadeloupe",["america","carribean"],"gp","590","",0],["Guam",["oceania"],"gu","1671"],["Guatemala",["america","central-america"],"gt","502",".... ...."],["Guinea",["africa"],"gn","224"],["Guinea-Bissau",["africa"],"gw","245"],["Guyana",["america","south-america"],"gy","592"],["Haiti",["america","carribean"],"ht","509",".... ...."],["Honduras",["america","central-america"],"hn","504"],["Hong Kong",["asia"],"hk","852",".... ...."],["Hungary",["europe","eu-union"],"hu","36"],["Iceland",["europe"],"is","354","... ...."],["India",["asia"],"in","91","..... ....."],["Indonesia",["asia"],"id","62"],["Iran",["middle-east"],"ir","98","... ... ...."],["Iraq",["middle-east"],"iq","964"],["Ireland",["europe","eu-union"],"ie","353",".. ......."],["Israel",["middle-east"],"il","972","... ... ...."],["Italy",["europe","eu-union"],"it","39","... ......."],["Jamaica",["america","carribean"],"jm","1876"],["Japan",["asia"],"jp","81",".. .... ...."],["Jordan",["middle-east"],"jo","962"],["Kazakhstan",["asia","ex-ussr"],"kz","7","... ... .. .."],["Kenya",["africa"],"ke","254"],["Kiribati",["oceania"],"ki","686"],["Kosovo",["europe","ex-yugos"],"xk","383"],["Kuwait",["middle-east"],"kw","965"],["Kyrgyzstan",["asia","ex-ussr"],"kg","996","... ... ..."],["Laos",["asia"],"la","856"],["Latvia",["europe","eu-union","ex-ussr","baltic"],"lv","371",".. ... ..."],["Lebanon",["middle-east"],"lb","961"],["Lesotho",["africa"],"ls","266"],["Liberia",["africa"],"lr","231"],["Libya",["africa","north-africa"],"ly","218"],["Liechtenstein",["europe"],"li","423"],["Lithuania",["europe","eu-union","ex-ussr","baltic"],"lt","370"],["Luxembourg",["europe","eu-union"],"lu","352"],["Macau",["asia"],"mo","853"],["Macedonia",["europe","ex-yugos"],"mk","389"],["Madagascar",["africa"],"mg","261"],["Malawi",["africa"],"mw","265"],["Malaysia",["asia"],"my","60",".. .... ...."],["Maldives",["asia"],"mv","960"],["Mali",["africa"],"ml","223"],["Malta",["europe","eu-union"],"mt","356"],["Marshall Islands",["oceania"],"mh","692"],["Martinique",["america","carribean"],"mq","596"],["Mauritania",["africa"],"mr","222"],["Mauritius",["africa"],"mu","230"],["Mexico",["america","central-america"],"mx","52","... ... ...."],["Micronesia",["oceania"],"fm","691"],["Moldova",["europe"],"md","373","(..) .. .. .."],["Monaco",["europe"],"mc","377"],["Mongolia",["asia"],"mn","976"],["Montenegro",["europe","ex-yugos"],"me","382"],["Morocco",["africa","north-africa"],"ma","212"],["Mozambique",["africa"],"mz","258"],["Myanmar",["asia"],"mm","95"],["Namibia",["africa"],"na","264"],["Nauru",["africa"],"nr","674"],["Nepal",["asia"],"np","977"],["Netherlands",["europe","eu-union"],"nl","31",".. ........"],["New Caledonia",["oceania"],"nc","687"],["New Zealand",["oceania"],"nz","64","... ... ...."],["Nicaragua",["america","central-america"],"ni","505"],["Niger",["africa"],"ne","227"],["Nigeria",["africa"],"ng","234"],["North Korea",["asia"],"kp","850"],["Norway",["europe","baltic"],"no","47","... .. ..."],["Oman",["middle-east"],"om","968"],["Pakistan",["asia"],"pk","92","... ......."],["Palau",["oceania"],"pw","680"],["Palestine",["middle-east"],"ps","970"],["Panama",["america","central-america"],"pa","507"],["Papua New Guinea",["oceania"],"pg","675"],["Paraguay",["america","south-america"],"py","595"],["Peru",["america","south-america"],"pe","51"],["Philippines",["asia"],"ph","63",".... ......."],["Poland",["europe","eu-union","baltic"],"pl","48","... ... ..."],["Portugal",["europe","eu-union"],"pt","351"],["Puerto Rico",["america","carribean"],"pr","1",""],["Qatar",["middle-east"],"qa","974"],["Réunion",["africa"],"re","262"],["Romania",["europe","eu-union"],"ro","40"],["Russia",["europe","asia","ex-ussr","baltic"],"ru","7","(...) ... .. .."],["Rwanda",["africa"],"rw","250"],["Saint Kitts and Nevis",["america","carribean"],"kn","1869"],["Saint Lucia",["america","carribean"],"lc","1758"],["Saint Vincent and the Grenadines",["america","carribean"],"vc","1784"],["Samoa",["oceania"],"ws","685"],["San Marino",["europe"],"sm","378"],["São Tomé and Príncipe",["africa"],"st","239"],["Saudi Arabia",["middle-east"],"sa","966"],["Senegal",["africa"],"sn","221"],["Serbia",["europe","ex-yugos"],"rs","381"],["Seychelles",["africa"],"sc","248"],["Sierra Leone",["africa"],"sl","232"],["Singapore",["asia"],"sg","65",".... ...."],["Slovakia",["europe","eu-union"],"sk","421"],["Slovenia",["europe","eu-union","ex-yugos"],"si","386"],["Solomon Islands",["oceania"],"sb","677"],["Somalia",["africa"],"so","252"],["South Africa",["africa"],"za","27"],["South Korea",["asia"],"kr","82","... .... ...."],["South Sudan",["africa","north-africa"],"ss","211"],["Spain",["europe","eu-union"],"es","34","... ... ..."],["Sri Lanka",["asia"],"lk","94"],["Sudan",["africa"],"sd","249"],["Suriname",["america","south-america"],"sr","597"],["Swaziland",["africa"],"sz","268"],["Sweden",["europe","eu-union","baltic"],"se","46","(...) ... ..."],["Switzerland",["europe"],"ch","41",".. ... .. .."],["Syria",["middle-east"],"sy","963"],["Taiwan",["asia"],"tw","886"],["Tajikistan",["asia","ex-ussr"],"tj","992"],["Tanzania",["africa"],"tz","255"],["Thailand",["asia"],"th","66"],["Timor-Leste",["asia"],"tl","670"],["Togo",["africa"],"tg","228"],["Tonga",["oceania"],"to","676"],["Trinidad and Tobago",["america","carribean"],"tt","1868"],["Tunisia",["africa","north-africa"],"tn","216"],["Turkey",["europe"],"tr","90","... ... .. .."],["Turkmenistan",["asia","ex-ussr"],"tm","993"],["Tuvalu",["asia"],"tv","688"],["Uganda",["africa"],"ug","256"],["Ukraine",["europe","ex-ussr"],"ua","380","(..) ... .. .."],["United Arab Emirates",["middle-east"],"ae","971"],["United Kingdom",["europe","eu-union"],"gb","44",".... ......"],["United States",["america","north-america"],"us","1","(...) ... ...."],["Uruguay",["america","south-america"],"uy","598"],["Uzbekistan",["asia","ex-ussr"],"uz","998",".. ... .. .."],["Vanuatu",["oceania"],"vu","678"],["Vatican City",["europe"],"va","39",".. .... ...."],["Venezuela",["america","south-america"],"ve","58"],["Vietnam",["asia"],"vn","84"],["Yemen",["middle-east"],"ye","967"],["Zambia",["africa"],"zm","260"],["Zimbabwe",["africa"],"zw","263"]],hO=(e,t,r,n)=>r?e+"".padEnd(t.length,".")+" "+r:e+"".padEnd(t.length,".")+" "+n;var pO;!function(e){e.getCountries=()=>[].concat(...fO.map((e=>({name:e[0],regions:e[1],iso2:e[2],countryCode:e[3],format:hO("+",e[3],e[4],"... ... ... ... ..")})))),e.formatNumber=(e="",t)=>{if(!t)return e;const r=e.replace(/[\s()]+/g,""),{format:n}=t,o=n.split(" ");o.shift();const i=o.join(" ");return uO(i,((e,t)=>{if(0===e.remainingText.length)return e;if("."!==t)return{formattedText:e.formattedText+t,remainingText:e.remainingText};const r=e.remainingText.slice(0,1),n=e.remainingText.slice(1);return{formattedText:e.formattedText+r,remainingText:n}}),{formattedText:"",remainingText:r}).formattedText}}(pO||(pO={}));const gO=t=>{var{onChange:r,value:n,allowClear:o,onClear:i,onBlur:a,error:l,fixedCountry:d=!1,optionPlaceholder:u="Select",optionSearchPlaceholder:f,enableSearch:h,onHideOptions:p,onShowOptions:m,placeholder:b,autoComplete:v}=t,y=ct(t,["onChange","value","allowClear","onClear","onBlur","error","fixedCountry","optionPlaceholder","optionSearchPlaceholder","enableSearch","onHideOptions","onShowOptions","placeholder","autoComplete"]);const[x]=g(pO.getCountries()),[w,$]=g(void 0),[C,S]=g(""),D=s(null),k=_d({ref:D,formatter:e=>pO.formatNumber(e.replace(/[^0-9]/g,""),w)});c((()=>{const e=x.filter((e=>e.countryCode===mO(null==n?void 0:n.countryCode)))[0];$(e),S(pO.formatNumber(null==n?void 0:n.number,e))}),[n]);const E=e=>{O(C,e),r&&_(C,e)},_=(e,t)=>{const n=pO.formatNumber(e,t);null==r||r({number:n.replace(/[\s()]+/g,""),countryCode:t&&bO(t.countryCode)})},O=(e,t)=>{S(pO.formatNumber(e,t)),$(t)};return e(rC,Object.assign({ref:D,value:C,onChange:()=>{const e=k();if(!e)return;const{nextValue:t,updateCaretPosition:n}=e;n(),O(t,w),r&&_(t,w)},allowClear:o&&!!C,onClear:()=>{i?i():S("")},onBlur:a,error:l,placeholder:b,addon:d?{type:"label",attributes:{value:bO(null==w?void 0:w.countryCode)}}:{type:"list",attributes:{placeholder:u,options:x,selectedOption:w,enableSearch:h,searchPlaceholder:f,valueExtractor:e=>`+${e.countryCode}`,listExtractor:e=>({title:e.name,secondaryLabel:bO(e.countryCode)}),onSelectOption:E,onHideOptions:p,onShowOptions:m}},inputMode:"numeric",autoComplete:v},y))},mO=e=>e?e.replace("+",""):"",bO=e=>e?e.includes("+")?e:`+${e}`:"";var vO=br,yO=Pr,xO=function(){return vO.Date.now()},wO=$v,$O=Math.max,CO=Math.min;var SO=Re((function(e,t,r){var n,o,i,a,s,l,c=0,d=!1,u=!1,f=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function h(t){var r=n,i=o;return n=o=void 0,c=t,a=e.apply(i,r)}function p(e){var r=e-l;return void 0===l||r>=t||r<0||u&&e-c>=i}function g(){var e=xO();if(p(e))return m(e);s=setTimeout(g,function(e){var r=t-(e-l);return u?CO(r,i-(e-c)):r}(e))}function m(e){return s=void 0,f&&n?h(e):(n=o=void 0,a)}function b(){var e=xO(),r=p(e);if(n=arguments,o=this,l=e,r){if(void 0===s)return function(e){return c=e,s=setTimeout(g,t),d?h(e):a}(l);if(u)return clearTimeout(s),s=setTimeout(g,t),h(l)}return void 0===s&&(s=setTimeout(g,t)),a}return t=wO(t)||0,yO(r)&&(d=!!r.leading,i=(u="maxWait"in r)?$O(wO(r.maxWait)||0,t):i,f="trailing"in r?!!r.trailing:f),b.cancel=function(){void 0!==s&&clearTimeout(s),c=0,n=l=o=s=void 0},b.flush=function(){return void 0===s?a:m(xO())},b}));const DO=({className:n,"data-testid":o,selectedOption:i,minimumCharacters:a=3,fetchOptions:l,placeholder:u="Enter here...",readOnly:f=!1,disabled:h=!1,error:p,valueExtractor:m,listExtractor:b,displayValueExtractor:v,onSelectOption:y})=>{const[x,w]=g((()=>i?W(i):"")),[$,C]=g((()=>i?W(i):"")),[S,D]=g([]),[k,E]=g(!0),[_,O]=g(!1),[F,T]=g(!!i),[I,M]=g(i),A=s(l),j=e=>dt(void 0,void 0,void 0,(function*(){O(!1),E(!0);try{const t=yield A.current(e);C(e),D(t),E(!1)}catch(e){O(!0)}})),B=d(SO((e=>j(e)),500,{leading:!1,trailing:!0}),[]);c((()=>{A.current=l}),[l]),c((()=>{x&&x.length>=a&&x!==$?B(x):B.cancel(),""===x&&I&&(y&&y(void 0,void 0),P(),M(void 0)),i&&x!==W(i)&&T(!1)}),[x,i]),c((()=>{w(i?W(i):""),P(i),M(i)}),[i]);const R=e=>{w(e.target.value)},z=(e,t)=>{y&&y(e,t)},P=e=>{C(e?W(e):""),T(!!e),D([]),E(!0)},L=()=>{w(""),y&&y(void 0,void 0),P()},N=()=>{F||I?(P(I),w(W(I)),y&&y(I,Y(I)),M(I)):L()},H=()=>!!x&&x.length>=a&&!F,W=e=>e?v?v(e):e.toString():"",Y=e=>{if(e)return m?m(e):e},V=()=>e(qp,{type:"text",value:x,onChange:R,placeholder:u,readOnly:f,disabled:h,allowClear:!0,onClear:L,styleType:"no-border",onBlur:x.length<a?N:void 0});return t(zu,{className:n,show:H(),error:p&&!H(),disabled:h,readOnly:f,testId:o,onBlur:N,children:[e(f?r:Tu,{children:V()}),!f&&H()&&e(Au,{}),e(N$,{listItems:S,onSelectItem:z,valueExtractor:m,listExtractor:b,itemsLoadState:_?"fail":k?"loading":"success",visible:H(),disableItemFocus:!0,onRetry:()=>j(x),itemTruncationType:"end",itemMaxLines:1,labelDisplayType:"next-line"})]})},kO=_.div`
    display: flex;
    position: relative;
    align-items: center;
    justify-content: space-between;
`,EO=_(Yp)`
    position: absolute;
    right: 0;
    padding-left: ${ea["spacing-8"]};
    margin-right: 0;
`,_O=_(Fu)`
    // space for clear icon
    padding-right: calc(1.25rem + ${ea["spacing-16"]});
`,OO=r=>{var{selectedOptions:n,placeholders:o={from:"Select",to:"Select"},options:i,disabled:a,className:l,readOnly:d,error:u,"data-testid":f,id:h,enableSearch:p=!1,searchFunction:m,searchPlaceholder:b,valueExtractor:v,valueToStringFunction:y,listExtractor:x,displayValueExtractor:w,onSelectOption:$,listStyleWidth:C,onShowOptions:S,onHideOptions:D,onRetry:k,optionsLoadState:E={from:"success",to:"success"},optionTruncationType:_="middle",renderCustomSelectedOption:O,renderListItem:F,renderCustomCallToAction:T}=r,I=ct(r,["selectedOptions","placeholders","options","disabled","className","readOnly","error","data-testid","id","enableSearch","searchFunction","searchPlaceholder","valueExtractor","valueToStringFunction","listExtractor","displayValueExtractor","onSelectOption","listStyleWidth","onShowOptions","onHideOptions","onRetry","optionsLoadState","optionTruncationType","renderCustomSelectedOption","renderListItem","renderCustomCallToAction"]);const[M,A]=g(),[j,B]=g(),R=s(null),z={from:s(null),to:s(null)},[P,L]=g("none");c((()=>{A(null==n?void 0:n.from),B(null==n?void 0:n.to)}),[n]);const N=e=>t=>{t.stopPropagation(),t.preventDefault(),a||d||L("from"===e?"from":"to"===e&&M?"to":"from")},H=e=>{var t;const r="from"===e?M:j;if(!r)return"";if(w)return w(r);if(v){const e=v(r);return y?y(e):null!==(t=null==e?void 0:e.toString())&&void 0!==t?t:""}return r.toString()},W=(e,t)=>{if("middle"===_){let r=0;return z[e]&&z[e].current&&(r=z[e].current.getBoundingClientRect().width),Sd.truncateOneLine(t,r,120,8)}return t},Y=e=>{!e&&D&&D(),e&&S&&S()},V=t=>{const r="from"===t?M:j;return r?O?O(r):e(Bu,{$truncateType:_,children:W(t,H(t))}):e(Ru,{$truncateType:_,children:W(t,o[t]||"")})},U=t=>e(ju,{onClick:N(t),ref:z[t],$disabled:a,children:V(t)});return t(zu,{show:"none"!==P,error:u&&!("none"!==P),disabled:a,readOnly:d,testId:f,onBlur:()=>{Y(!1),L("none"),M&&j||(B(void 0),A(void 0))},className:l,children:[t(kO,{children:[e(_O,Object.assign({type:"button","data-testid":h||"selector",disabled:a,ref:R,onClick:N()},I,{children:t(Rh,{currentActive:(()=>{switch(P){case"from":return"start";case"to":return"end";case"none":return P}})(),children:[U("from"),U("to")]})})),"none"===P&&M&&j&&!d&&!a&&e(EO,{onClick:e=>{e.stopPropagation(),A(void 0),B(void 0),$&&$({from:void 0,to:void 0},void 0)},type:"button","aria-label":"Clear",children:e(Vp,{"aria-hidden":!0})})]}),"none"!==P&&e(Au,{}),(()=>{if("none"===P)return null;const t=i[P];if(t&&t.length>0){const r="from"===P?M:j;return e(N$,{listItems:t,onSelectItem:(e,t)=>((e,t,r)=>{var n;"from"===r?A(e):B(e),Y(!1),R&&(null===(n=R.current)||void 0===n||n.focus()),$&&$({[r]:e},t),"from"===r?(B(void 0),L("to"),Y(!0)):L("none")})(e,t,P),onDismiss:()=>(()=>{var e;L("none"),Y(!1),R&&(null===(e=R.current)||void 0===e||e.focus()),M&&j||(B(void 0),A(void 0))})(),valueExtractor:v,listExtractor:x,listStyleWidth:C,visible:!0,enableSearch:p,searchPlaceholder:b,searchFunction:m,"data-testid":`${P}-dropdown-list`,selectedItems:r?[r]:[],onRetry:k,itemsLoadState:E[P],itemTruncationType:_,renderListItem:F,renderCustomCallToAction:T})}return null})()]})},FO=({selectedOption:t,placeholder:r="Select",options:n,disabled:o,error:i,className:a,"data-testid":l,id:d,enableSearch:u=!1,searchFunction:f,searchPlaceholder:h,valueExtractor:p,valueToStringFunction:m,listExtractor:b,displayValueExtractor:v,onSelectOption:y,onShowOptions:x,onHideOptions:w,onRetry:$,optionsLoadState:C="success",optionTruncationType:S="end",renderCustomSelectedOption:D,renderListItem:k,hideNoResultsDisplay:E,noResultsDescription:_,customLabels:O,renderCustomCallToAction:F,onBlur:T,variant:I="default",readOnly:M,alignment:A,dropdownZIndex:j,dropdownRootNode:B,dropdownWidth:R})=>{const[z,P]=g(t),[L,N]=g(!1),[H,W]=g(!1),[Y]=g((()=>Cd.generate())),V=s(null),U=s(null),K=s(null);c((()=>{P(t)}),[t]);const q=(e,t)=>{var r;null===(r=U.current)||void 0===r||r.focus(),P(e),N(!1),ee(!1),null==y||y(e,t)},G=()=>{L&&(N(!1),ee(!1))},Q=()=>{H||L||W(!0)},Z=e=>{H&&!L&&V.current&&!V.current.contains(e.relatedTarget)&&(W(!1),null==T||T())},X=()=>{var e;if(!z)return"";if(v)return v(z);if(p){const t=p(z);return m?m(t):null!==(e=null==t?void 0:t.toString())&&void 0!==e?e:""}return z.toString()},J=e=>{if("middle"===S){let t=0;return K&&K.current&&(t=K.current.getBoundingClientRect().width),Sd.truncateOneLine(e,t,120,8)}return e},ee=e=>{e?null==x||x():null==w||w()};return e(lE,{children:e(Hu,{enabled:!M&&!o,isOpen:L,renderElement:()=>e(bh,{className:a,"data-testid":l,id:d,ref:V,tabIndex:-1,onFocus:Q,onBlur:Z,$focused:H,$disabled:o,$readOnly:M,$error:i,children:e(jE,{ref:U,disabled:o,expanded:L,listboxId:Y,popupRole:"listbox",readOnly:M,variant:I,children:e(ju,{ref:K,$disabled:o,children:z?D?D(z):e(Bu,{$truncateType:S,$variant:I,children:J(X())}):e(Ru,{$truncateType:S,$variant:I,children:r})})})}),renderDropdown:()=>e(IE,{listboxId:Y,listItems:n,onSelectItem:q,onDismiss:G,valueExtractor:p,listExtractor:b,enableSearch:u,searchPlaceholder:h,searchFunction:f,selectedItems:z?[z]:[],onRetry:$,itemsLoadState:C,itemTruncationType:S,renderListItem:k,hideNoResultsDisplay:E,noResultsDescription:_,customLabels:O,renderCustomCallToAction:F,variant:I,width:R,matchElementWidth:!0}),onOpen:()=>{N(!0),ee(!0),W(!0)},onClose:e=>{N(!1),ee(!1),"click"!==e&&(W(!1),null==T||T())},onDismiss:()=>{var e;null===(e=U.current)||void 0===e||e.focus(),N(!1),ee(!1)},clickToToggle:!0,offset:8,alignment:A,fitAvailableHeight:!0,customZIndex:j,rootNode:B})})},TO=_.div`
    overflow: hidden;
    border: ${Ji["width-010"]} ${Ji.solid} ${Qi.border};
    border-radius: ${ta.sm};
    background: ${Qi.bg};
    padding: ${ea["spacing-16"]};
    min-width: 23rem;

    ${oa.MaxWidth.sm} {
        min-width: unset;
        width: calc(100vw - ${na["sm-margin"]} * 2);
    }

    ${oa.MaxWidth.xs} {
        width: calc(100vw - ${na["xs-margin"]} * 2);
    }

    ${oa.MaxWidth.xxs} {
        width: calc(100vw - ${na["xxs-margin"]} * 2);
    }
`,IO=_.div`
    display: flex;
    align-items: baseline;
`,MO=_.div`
    margin: 0 0.5rem;
    color: ${Qi.text};
`,AO=_(_.div`
    ${e=>"small"===e.$variant?Zi["body-md-regular"]:Zi["body-baseline-regular"]}
    text-align: left;
    ${e=>{if("middle"!==e.$truncateType)return O`
                    ${pa(1)}
                `}}
    overflow: hidden;
`)`
    color: ${Qi["text-subtler"]};
`,jO=r=>{var{alignment:n="left",className:o,disabled:i,dropdownZIndex:a,error:l,histogramSlider:d,id:u,onBlur:f,onChange:h,onChangeEnd:p,optionTruncationType:m="end",placeholder:b="Select",rangeLabelPrefix:v,rangeLabelSuffix:y,readOnly:x,renderRangeLabel:w,value:$,dropdownRootNode:C}=r,S=ct(r,["alignment","className","disabled","dropdownZIndex","error","histogramSlider","id","onBlur","onChange","onChangeEnd","optionTruncationType","placeholder","rangeLabelPrefix","rangeLabelSuffix","readOnly","renderRangeLabel","value","dropdownRootNode"]);const{interval:D,bins:k=[],renderEmptyView:E,ariaLabels:_}=d,O=k.map((e=>e.minValue)),F=Math.min(...O),[T,I]=g(U()),[M,A]=g(!1),[j,B]=g(!1),[R]=g((()=>Cd.generate())),z=s(null),P=s(null),L=s(null),N=S["data-testid"]||"select-histogram";c((()=>{$!==T&&I(U())}),[$]);const H=e=>{I(e),null==h||h(e)},W=e=>{I(e),null==p||p(e)},Y=()=>{j||M||B(!0)},V=e=>{j&&!M&&z.current&&!z.current.contains(e.relatedTarget)&&(B(!1),null==f||f())};function U(){return null!=$?$:[F,F+D]}const K=e=>w?w(e):t(wa.BodyBL,{children:[v,e,y]});return e(lE,{children:e(Hu,{enabled:!x&&!i,isOpen:M,renderElement:()=>e(bh,{className:o,"data-testid":N,id:u,ref:z,tabIndex:-1,onFocus:Y,onBlur:V,$focused:j,$disabled:i,$readOnly:x,$error:l,children:e(jE,{ref:P,disabled:i,expanded:M,listboxId:R,popupRole:"dialog",readOnly:x,variant:"default",children:e(ju,{ref:L,$disabled:i,children:O&&0!==O.length?t(IO,{children:[K(T[0]),e(MO,{children:"-"}),K(T[1])]}):e(AO,{$truncateType:m,$variant:"default",children:b})})})}),renderDropdown:({elementWidth:t,styles:r,setFloatingRef:n,getFloatingProps:o})=>e(TO,Object.assign({style:Object.assign(Object.assign({},r),{width:t}),ref:n},o(),{children:e(Hp,{interval:D,value:T,bins:k,onChange:H,onChangeEnd:W,showRangeLabels:!1,renderEmptyView:E,ariaLabels:_})})),onOpen:()=>{A(!0)},onClose:()=>{A(!1)},onDismiss:()=>{var e;null===(e=P.current)||void 0===e||e.focus(),A(!1)},clickToToggle:!0,offset:8,alignment:n,fitAvailableHeight:!0,customZIndex:a,rootNode:C})})},BO=t=>{var{value:r,ariaLabel:n,onChange:o,onChangeEnd:i}=t,a=ct(t,["value","ariaLabel","onChange","onChangeEnd"]);const[s,l]=g(d());c((()=>{r!==s[0]&&l(d())}),[r]);function d(){return null!=r?[r]:[0]}return e(Bp,Object.assign({},a,{value:s,numOfThumbs:1,onChange:e=>{const[t]=e;l([t]),null==o||o(t)},onChangeEnd:e=>{const[t]=e;l([t]),null==i||i(t)},ariaLabels:n?[n]:void 0}))},RO=_.p`
    text-align: right;
    ${Zi["body-sm-semibold"]}
    color: ${Qi["text-subtler"]};
`,zO=({value:t,maxLength:n,renderCustomCounter:i})=>{const[a,s]=g("");c((()=>{s(l(`${t||""}`))}),[t,n]);const l=e=>{if(i)return i(n,e.toString().length);{const t=n-e.toString().length;return 1===t?`${t} character left`:`${t.toLocaleString()} characters left`}};return e(r,{children:o.isValidElement(a)?a:e(RO,{"data-testid":"counter-label",children:a})})},PO=_.div`
    display: flex;
    flex-direction: column;
`,LO=_.textarea`
    border: ${Ji["width-010"]} ${Ji.solid} ${Qi.border};
    border-radius: ${ta.sm};
    background: ${Qi.bg};
    outline: none;
    overflow: hidden;

    display: block;
    padding: ${ea["spacing-12"]} ${ea["spacing-16"]};
    width: 100%;

    ${Zi["body-baseline-regular"]}
    color: ${Qi.text};

    &:focus,
    &:active {
        outline-offset: -1px;
        outline: ${Ji["width-020"]} ${Ji.solid}
            ${Qi["border-focus"]};
    }

    &::placeholder,
    &::-webkit-input-placeholder {
        color: ${Qi["text-subtler"]};
    }

    ${e=>e.readOnly?O`
                border-color: transparent;
                background: transparent !important;

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
`,NO=o.forwardRef(((t,r)=>{var{value:n,disabled:o,error:i,rows:a=5,prefix:s,transformValue:l,onChange:d,maxLength:u}=t,f=ct(t,["value","disabled","error","rows","prefix","transformValue","onChange","maxLength"]);const[h,p]=g(n);c((()=>{p(n)}),[n]);return e(LO,Object.assign({ref:r,disabled:o,value:s?s+(null!=h?h:""):h,onChange:e=>{let t=e.target.value;if(s){t.startsWith(s)||(t=s+t.trimStart()),t.length<s.length&&(t=s);if((e.target.selectionStart||0)<s.length)return void e.preventDefault();const r=t.slice(s.length),n=l?l(r):r;if(p(n),e.target.value=s+n,d){const t=Object.assign(Object.assign({},e),{target:Object.assign(Object.assign({},e.target),{value:n})});d(t)}}else{const r=l?l(null!=t?t:""):t;p(r),e.target.value=r,d&&d(e)}},onKeyDown:e=>{if(!s)return;const{selectionStart:t}=e.currentTarget;"Backspace"===e.key&&t<=s.length&&e.preventDefault(),"ArrowLeft"===e.key&&t<=s.length&&e.preventDefault(),"Home"===e.key&&(e.preventDefault(),requestAnimationFrame((()=>{e.currentTarget.setSelectionRange(s.length,s.length)})))},$error:i,rows:a,maxLength:s&&u?s.length+u:u},f))}));o.forwardRef(((r,n)=>{var{value:o,disabled:i,rows:a=5,onChange:s,transformValue:l,prefix:d,maxLength:u,renderCustomCounter:f}=r,h=ct(r,["value","disabled","rows","onChange","transformValue","prefix","maxLength","renderCustomCounter"]);const[p,m]=g(o);c((()=>{m(o)}),[o]);return t(PO,{children:[e(NO,Object.assign({ref:n,disabled:i,value:p,rows:a||5,onChange:e=>{const t=e.target.value;m(t),s&&s(e)},prefix:d,transformValue:l,maxLength:u},h)),u&&e(zO,{value:p,maxLength:u,renderCustomCounter:f})]})}));const HO=_.div`
    display: flex;
    justify-content: flex-end;
    margin-top: ${ea["spacing-4"]};
`,WO=_.div`
    display: flex;
    flex: 1;
    margin-right: ${ea["spacing-12"]};
`,YO=_(uu)`
    margin-top: 0;
`,VO=o.forwardRef(((n,o)=>{const{label:i,value:a,errorMessage:s,id:l="form-textarea","data-error-testid":d,"data-testid":u,onChange:f,layoutType:h,mobileCols:p,tabletCols:m,desktopCols:b,xxsCols:v,xsCols:y,smCols:x,mdCols:w,lgCols:$,xlCols:C,xxlCols:S,transformValue:D,prefix:k=""}=n,E=ct(n,["label","value","errorMessage","id","data-error-testid","data-testid","onChange","layoutType","mobileCols","tabletCols","desktopCols","xxsCols","xsCols","smCols","mdCols","lgCols","xlCols","xxlCols","transformValue","prefix"]),[_,O]=g(a);c((()=>{O(a)}),[a]);return t(ku,{id:l,label:i,disabled:E.disabled,layoutType:h,mobileCols:p,tabletCols:m,desktopCols:b,xxsCols:v,xsCols:y,smCols:x,mdCols:w,lgCols:$,xlCols:C,xxlCols:S,children:[e(NO,Object.assign({id:`${l}-base`,"data-testid":u||l,value:_,error:!!s,onChange:e=>{const t=e.target.value;O(t),f&&f(e)},ref:o,prefix:k,transformValue:D},E)),s||E.maxLength?t(HO,{children:[s&&e(WO,{children:e(YO,{"data-testid":d||(l?`${l}-error-message`:"error-message"),children:s})}),E.maxLength&&e(zO,{value:_,maxLength:E.maxLength,renderCustomCounter:E.renderCustomCounter})]}):e(r,{})]})})),UO=_.div`
    position: relative;
`,KO=_(vh)`
    height: 3rem;
    gap: ${ea["spacing-8"]};
`,qO=_(yh)`
    display: block;
    width: 100%;
    flex: 1;
`;var GO,QO;!function(e){e.AM="AM",e.PM="PM"}(GO||(GO={})),function(e){e.roundToNearestInterval=(e,t,r)=>{const[n,o]=e.split(":"),i=parseInt(n,10),a=parseInt(o,10);if(isNaN(i)||isNaN(a)||a<0||a>=60)throw new Error("Invalid time format");const s=60*i+a,l=s%t,c=0===l?s:r?s+(t-l):s-l,d=c%60;return`${Math.floor(c/60).toString().padStart(2,"0")}:${d.toString().padStart(2,"0")}`},e.generateHourlyIntervals=(e,t,r="ha")=>{const n="HH:mm";let o=td(e,n),i=td(t,n);o.isSame(i)&&(i=i.add(1,"day"));const a=[];for(;o.isBefore(i);)a.push(o.format(r)),o=o.add(1,"hour");return a},e.getTimeValues=(e,t)=>{const r={hour:"",minute:"",period:GO.AM};if(!t)return r;try{if("24hr"===e){const n=JO(t,e);r.minute=Sd.padValue(n.minute);const o=parseInt(n.hour);0===Math.floor(o/12)?(r.period=GO.AM,r.hour=0===o?"12":Sd.padValue(o.toString())):(r.period=GO.PM,r.hour=12===o?o.toString():Sd.padValue((o-12).toString()))}else{const{hour:n,minute:o,period:i=""}=JO(t,e);r.hour=Sd.padValue(n),r.minute=Sd.padValue(o),r.period="am"===i.toLowerCase()?GO.AM:GO.PM}return r}catch(e){return r}},e.updateMinutes=(e,t)=>{const r=parseInt(e);if(isNaN(r))return"add"===t?Sd.padValue("0"):"55";const n=Math.floor(r/5),o=(("add"===t?n+1:r%5==0?n-1:n)%12+12)%12;return Sd.padValue((5*o).toString())},e.updateHours=(e,t)=>{const r=parseInt(e);if(isNaN(r))return"add"===t?Sd.padValue("1"):"12";const n="add"===t?r+1:r-1;return n<=12&&n>0?Sd.padValue(n.toString()):13===n?Sd.padValue("1"):"12"},e.convertTo24HourFormat=e=>{const t=parseInt(e.hour);let r;return r=e.period===GO.PM?12===t?t.toString():(t+12).toString():12===t?"00":e.hour,`${r}:${e.minute}`},e.convertHourTo12HourFormat=e=>{const t=parseInt(e),r=t%12==0?12..toString():(t%12).toString();return Sd.padValue(r)},e.formatDisplayValue=(e,t)=>{try{const{hour:r,minute:n,period:o=""}=JO(e,t),i=Sd.padValue(r);let a=`${i}:${Sd.padValue(n)}`;return"12hr"===t?(a+=o.toLowerCase(),a):a}catch(e){return""}},e.toMinutesSeconds=e=>({minutes:Math.floor(e/60),seconds:e%60}),e.to24Hour=e=>{if((null==e?void 0:e.includes("am"))||(null==e?void 0:e.includes("pm"))){const[t,r]=e.split(/(am|pm)/i),[n,o]=t.split(":").map(Number);let i=n;return"pm"===r&&i<12&&(i+=12),"am"===r&&12===i&&(i=0),eF(i,o)}return e},e.generateTimings=(t,r="12hr",n,o)=>{const i=[];let a=0,s=1440-t;for(n&&(a=e.timeToMinutes(n)),o&&(s=e.timeToMinutes(o));a<=s;){let e=Math.floor(a/60);const n=a%60;if("12hr"===r){const t=e>=12?"pm":"am";e%=12,e=e||12;const r=eF(e,n,t);i.push(r)}else{const t=eF(e,n);i.push(t)}a+=t}return i},e.parseInput=(e,t="12hr")=>{if(""===e||void 0===e)return e;const r=e.trim().toLowerCase(),n=/^(?:(\d{1,2})([:.])?(\d{2})?)?(a|p|am|pm)?$/.exec(r);if(!n)return;let o=parseInt(n[1]||"0",10);const i=parseInt(n[3]||"0",10);let a=n[4];if(void 0===n[1]||o>24||i>59)return;if("a"===a?a="am":"p"===a&&(a="pm"),"24hr"===t)return"pm"===a&&o<12?o+=12:("am"===a&&12===o||24===o)&&(o=0),eF(o,i);a?0===o||24===o?(a="am",o=12):o>12&&(a="pm",o-=12):(a=0===o||24===o||o>6&&o<12?"am":"pm",o=o%12||12);return eF(o,i,a)},e.findClosestFlooredTime=(t,r)=>{if(!t)return t;const n=e.timeToMinutes(t);let o="",i=1/0;for(const t of r){const r=e.timeToMinutes(t)-n;if(r<=0&&Math.abs(r)<i)i=Math.abs(r),o=t;else if(r>0)break}return o},e.timeToMinutes=e=>{const[t,r]=e.toLowerCase().split(/(am|pm)/),[n,o]=t.split(":").map(Number);let i=n;return"pm"===r&&12!==i&&(i+=12),"am"===r&&12===i&&(i=0),60*i+o},e.calculateDuration=(t,r)=>{const n=e.timeToMinutes(t);return e.timeToMinutes(r)-n}}(QO||(QO={}));const ZO=(e,t)=>{const r=parseInt(e);return"24hr"===t?r>=0&&r<=23:r>=1&&r<=12},XO=e=>{const t=parseInt(e);return t>=0&&t<=59},JO=(e,t)=>{const r=e?e.split(":"):[],n=new Error("Invalid format");if("12hr"===t){if(2!==r.length||4!==r[1].length)throw n;const e=r[1].substring(0,2),i=r[1].substring(2);if(!ZO(r[0],t)||!XO(e)||"am"!==(o=i).toLowerCase()&&"pm"!==o.toLowerCase())throw n;return{hour:r[0],minute:e,period:r[1].substring(2)}}if(2!==r.length)throw n;if(!ZO(r[0],t)||!XO(r[1]))throw n;return{hour:r[0],minute:r[1]};var o},eF=(e,t,r)=>r?`${e}:${t.toString().padStart(2,"0")}${r}`:`${e.toString().padStart(2,"0")}:${t.toString().padStart(2,"0")}`,tF=_.div`
    padding: ${ea["spacing-8"]} ${ea["spacing-16"]};
    display: flex;

    ${e=>{let t,r;switch(e.$type){case"error":t=Qi["bg-error"](e),r=Qi["border-error"](e);break;case"success":t=Qi["bg-success"](e),r=Qi["border-success"](e);break;case"warning":default:t=Qi["bg-warning"](e),r=Qi["border-warning"](e);break;case"info":t=Qi["bg-info"](e),r=Qi["border-info"](e);break;case"description":t=Qi["bg-strong"](e),r=Qi["border-strong"](e)}return O`
            background: ${t};
            border-left: ${Ji["width-020"]} ${Ji.solid}
                ${r};
        `}}

    color: ${Qi.text};
    ${e=>"small"===e.$sizeType?Gd({textSize:"body-sm"}):Gd({textSize:"body-md"})}
`,rF=_.div`
    display: flex;
    align-items: center;
    height: 1lh;
    margin-right: ${ea["spacing-8"]};

    ${e=>{let t;const r="small"===e.$sizeType?"1.25rem":"1.5rem";switch(e.$type){case"error":t=Qi["icon-error"](e);break;case"success":t=Qi["icon-success"](e);break;case"warning":default:t=Qi["icon-warning"](e);break;case"info":t=Qi["icon-info"](e);break;case"description":t=Qi["icon-subtle"](e)}return O`
            svg {
                color: ${t};
                width: ${r};
                height: ${r};
            }
        `}}
`,nF=_(wa.LinkSM)`
    ${e=>"small"===e.$sizeType?O`
                ${Zi["body-sm-semibold"]}
                margin-top: ${ea["spacing-4"]};
            `:O`
                ${Zi["body-md-semibold"]}
                margin-top: ${ea["spacing-8"]};
            `}
    display: flex;
    align-items: center;
    align-self: flex-start;

    svg {
        height: 1rem;
        width: 1rem;
        margin-left: ${ea["spacing-4"]};
    }
`,oF=_.div`
    display: flex;
    flex-direction: column;
    flex: 1;
    overflow-wrap: anywhere;
`,iF=_.div`
    display: flex;
    flex-direction: column;
    flex: 1;
    order: 1;
    ${e=>{if(e.$showMore&&e.$hasActionLink)return O`
                margin-bottom: ${ea["spacing-8"]};
            `}}
    ${e=>{const t="linear-gradient(to bottom, black 50%, transparent 100%)";if(!e.$showMore&&e.$maxCollapsedHeight)return`\n                max-height: ${e.$maxCollapsedHeight}px;\n\t\t\t\toverflow: hidden;\n                -webkit-mask-image: ${t};\n                mask-image: ${t};\n\t\t\t`}}
`,aF=_.button`
    ${e=>"small"===e.$sizeType?O`
                ${Zi["body-sm-semibold"]}
            `:O`
                ${Zi["body-md-semibold"]}
            `}

    display: flex;
    align-items: center;
    align-self: flex-start;
    gap: ${ea["spacing-4"]};
    margin-top: ${ea["spacing-8"]};
    order: 2;

    cursor: pointer;
    user-select: none;
    border: none;
    background: transparent;

    color: ${Qi["text-primary"]};
`,sF=_(pe)`
    transform: rotate(${e=>e.$expanded?180:0}deg);
    transition: transform ${Xi["duration-350"]} ${Xi["ease-standard"]};
`,lF=r=>{var{type:n,className:o,children:i,actionLink:a,actionLinkIcon:s,sizeType:l="default",showIcon:u=!1,customIcon:f,maxCollapsedHeight:h,role:p}=r,m=ct(r,["type","className","children","actionLink","actionLinkIcon","sizeType","showIcon","customIcon","maxCollapsedHeight","role"]);const[b,v]=g(!1),[y,x]=g(!1),{height:w,ref:$}=qc(),[C]=g((()=>Cd.generate())),S=d((()=>{v(!h),x(D())}),[h,w]),D=()=>!(!w||!h)&&w>h;c((()=>{S()}),[h,w,S]);return t(tF,{className:o,$type:n,$sizeType:l,"aria-label":`${(()=>{switch(n){case"success":return"Success";case"warning":return"Warning";case"error":return"Error";case"info":return"Information";case"description":return"Description";default:return"Alert"}})()}`,"data-testid":m["data-testid"],role:p,children:[u&&e(rF,{$sizeType:l,$type:n,children:(()=>{if(n&&f)return f;switch(n){case"success":return e(Oe,{"aria-hidden":!0});case"warning":return e(_e,{"aria-hidden":!0});case"error":return e(ge,{"aria-hidden":!0});case"info":case"description":return e(R,{"aria-hidden":!0});default:return null}})()}),t(oF,{children:[y&&t(aF,{$sizeType:l,$type:n,type:"button","aria-expanded":b,"aria-controls":C,onClick:()=>v(!b),children:["Show ",b?"less":"more",e(sF,{$expanded:b})]}),t(iF,{id:C,$maxCollapsedHeight:D()?h:void 0,$showMore:b,$hasActionLink:!!a,inert:Vu(!!h&&!b),children:[e("div",{ref:$,children:i}),a?t(nF,Object.assign({"data-testid":"action-link",$type:n,$sizeType:l},a,{children:[a.children,s||e(Ee,{})]})):null]})]})]})},cF=_.div`
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
`,dF=O`
    margin-bottom: ${e=>e.$bottomMargin||0}rem;

    // Counter matters
    counter-reset: list;

    li {
        font-weight: ${Zi.Spec["weight-regular"]};
        ${e=>e.$size&&Zi[`${e.$size}-regular`]}
        color: ${Qi.text};
    }

    // nested lists styling
    ol,
    ul {
        margin-top: 0.5rem;
        margin-bottom: 0.5rem;
    }
`,uF=_.ol`
    ${dF}

    margin-left: 3rem;

    ${oa.MaxWidth.lg} {
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
`,fF=_.ul`
    ${dF}

    margin-left: 2.5rem;
    list-style-type: ${e=>e.$bulletType||"disc"};
`,hF=t=>{var{size:r,bulletType:n,bottomMargin:o,children:i}=t,a=ct(t,["size","bulletType","bottomMargin","children"]);return e(fF,Object.assign({$size:r,$bulletType:n,$bottomMargin:o},a,{children:i}))};hF.displayName="TextList.Ul";const pF=t=>{var{size:r,counterType:n,counterSeparator:o,bottomMargin:i,children:a}=t,s=ct(t,["size","counterType","counterSeparator","bottomMargin","children"]);return e(uF,Object.assign({$size:r,$counterType:n,$counterSeparator:o,$bottomMargin:i},s,{children:a}))};pF.displayName="TextList.Ol";const gF=hF,mF=_.div`
    position: relative;
    display: inline-flex;
    min-width: 10.375rem;
    border-radius: ${ta.sm};
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

                            &:has(${$F}:hover) {
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

                        &:has(${$F}:hover) {
                            @media (pointer: fine) {
                                background: ${Qi["bg-selected-hover"]};

                                & ${yF} {
                                    color: ${Qi["text-selected-hover"]};
                                }

                                & ${TF} {
                                    color: ${Qi["icon-selected-hover"]};
                                }
                            }
                        }
                    `:O`
                    border: none;

                    &:has(${$F}:hover) {
                        @media (pointer: fine) {
                            background: ${Qi["bg-hover-subtle"]};
                        }
                    }
                `:e.$error?e.$disabled?O`
                            border-color: ${Qi["border-error"]};
                        `:O`
                            border-color: ${Qi["border-error"]};

                            &:has(${$F}:hover) {
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

                        &:has(${$F}:hover) {
                            @media (pointer: fine) {
                                background: ${Qi["bg-selected-hover"]};

                                & ${yF} {
                                    color: ${Qi["text-selected-hover"]};
                                }

                                & ${TF} {
                                    color: ${Qi["icon-selected-hover"]};
                                }
                            }
                        }
                    `:O`
                    border-color: ${Qi.border};

                    &:has(${$F}:hover) {
                        @media (pointer: fine) {
                            background: ${Qi["bg-hover-subtle"]};
                        }
                    }
                `}
`,bF=_.input`
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
`,vF=_.div`
    display: flex;
`,yF=_.div`
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
`,xF=_.label`
    ${Zi["body-baseline-regular"]}
    overflow: hidden;
    display: -webkit-box;
    text-overflow: ellipsis;
    -webkit-box-orient: vertical;
    overflow-wrap: break-word;
    -webkit-line-clamp: ${e=>{var t,r;return null!==(r=null===(t=e.$maxLines)||void 0===t?void 0:t.desktop)&&void 0!==r?r:"none"}};
    ${oa.MaxWidth.lg} {
        -webkit-line-clamp: ${e=>{var t,r;return null!==(r=null===(t=e.$maxLines)||void 0===t?void 0:t.tablet)&&void 0!==r?r:"none"}};
    }
    ${oa.MaxWidth.sm} {
        -webkit-line-clamp: ${e=>{var t,r;return null!==(r=null===(t=e.$maxLines)||void 0===t?void 0:t.mobile)&&void 0!==r?r:"none"}};
    }
`,wF=_.div`
    ${Zi["body-md-regular"]}
    margin-top: 0.5rem;

    z-index: 1; // forces sublabel to render above the input
    pointer-events: none; // to allow click events to be passed to the input

    strong,
    b {
        ${Zi["body-md-semibold"]}
    }
`,$F=_.div`
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
`,CF=_.div`
    display: flex;
    height: 100%;
    width: 100%;
    position: relative;
    padding: ${e=>e.$addPadding?"0.6875rem 0rem 0.6875rem 1rem":"0.6875rem 1rem"};
`,SF=_.button`
    color: ${e=>e.$disabled?Qi["text-disabled"]:Qi["text-error"]};
    white-space: nowrap;
    ${Zi["body-md-semibold"]}
    height: fit-content;
    padding: 0.6875rem 1rem 0.6875rem 0.5rem;
    border: none;
    background: none;

    cursor: ${e=>e.$disabled?"not-allowed":"pointer"};
`,DF=_.button`
    color: ${e=>e.disabled?Qi["text-disabled"]:Qi["text-primary"]};
    ${Zi["body-baseline-semibold"]}
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
`,kF=_.div`
    width: 100%;
    color: ${e=>e.$disabled?Qi["text-disabled"]:Qi["text-error"]};
    border: none;
    background: ${Qi.bg};
    cursor: ${e=>e.$disabled?"not-allowed":"pointer"};
    padding: 0.6875rem 1rem 0.5rem 1rem;
`,EF=_(lF)`
    width: 100%;
    user-select: none;
`,_F=_.div`
    padding: 0 1rem;
    padding-top: 0.6875rem;
    padding-bottom: ${e=>e.$isFinalItem?"0.6875rem":"0.5rem"};
    background-color: ${Qi.bg};
    ${Gd({textSize:"body-md"})}

    ${e=>e.$disabled?O`
                color: ${Qi["text-disabled"]};
            `:e.$selected?O`
                color: ${Qi["text-selected"]};
            `:O`
                color: ${Qi.text};
            `}
`,OF=_(wa.BodyMD)`
    color: ${e=>e.$disabled?Qi["text-disabled"]:Qi["text-error"]};
`,FF=_(gF)`
    color: ${e=>e.$disabled?Qi["text-disabled"]:Qi["text-error"]};
`,TF=_((({type:t,active:r=!1,disabled:n,className:o})=>{let i;switch(t){case"checkbox":i=e(r?$e:xe,{});break;case"radio":i=e(r?Te:Fe,{});break;case"tick":i=e(Ce,{});break;case"cross":i=e(re,{});break;default:i=null}return e(cF,{className:o,$active:r,$disabled:n,"aria-hidden":!0,children:i})}))`
    ${e=>e.$disabled?e.$selected?O`
                    color: ${Qi["icon-selected-disabled"]};
                `:O`
                    color: ${Qi["icon-disabled-subtle"]};
                `:e.$selected?O`
                color: ${Qi["icon-selected"]};
            `:O`
            color: ${Qi["icon-subtle"]};
        `};
`,IF=c$(_.div`
    position: absolute;
    top: calc(3rem + ${ea["spacing-8"]});
    left: 0;
    overflow: hidden;
    z-index: 1;

    ${oa.MaxWidth.xxs} {
        max-width: 100%;
    }
`),MF=_.div`
    position: relative;
    width: 100%;
    padding: ${ea["spacing-8"]} ${ea["spacing-20"]}
        ${ea["spacing-24"]} ${ea["spacing-20"]};
    display: flex;
    flex-direction: column;
    background: ${Qi.bg};
    border: ${Ji["width-010"]} ${Ji.solid} ${Qi.border};
    border-radius: ${ta.sm};
`,AF=_.div`
    display: flex;
    align-items: center;
    justify-content: space-between;

    ${oa.MaxWidth.xxs} {
        flex-direction: column;
        width: 100%;
    }
`,jF=_.div`
    display: flex;
    justify-content: flex-end;
    margin-top: ${ea["spacing-16"]};
    gap: ${ea["spacing-8"]} ${ea["spacing-16"]};

    ${oa.MaxWidth.xxs} {
        flex-direction: column-reverse; // FIXME: this breaks tab focus
        margin-top: ${ea["spacing-32"]};
    }
`,BF=_.div`
    display: flex;
    align-items: center;
    margin-right: ${ea["spacing-32"]};

    ${oa.MaxWidth.xxs} {
        margin-right: 0;
        width: 100%;
    }
`,RF=_.div`
    display: flex;
    gap: ${ea["spacing-8"]};

    ${oa.MaxWidth.lg} {
        flex-direction: column;
    }

    ${oa.MaxWidth.xxs} {
        flex-direction: row;
        width: 100%;
    }
`,zF=_.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    ${oa.MaxWidth.xxs} {
        width: 6rem;
    }
`,PF=_(Vd)`
    width: 5rem;
    padding: ${ea["spacing-16"]} 0;
    color: ${Qi.icon};

    svg {
        height: 1rem;
        width: 1rem;
    }

    &:hover {
        color: ${Qi["icon-hover"]};
    }
`,LF=_(wa.BodyBL)`
    flex-shrink: 0;
    width: 1.5rem;
    text-align: center;
`,NF=_(bh)`
    height: calc(3rem - 2px);
    width: 5rem;
    display: flex;
    align-items: center;
    justify-content: center;

    ${oa.MaxWidth.xxs} {
        width: 100%;
    }
`,HF=_(yh)`
    text-align: center;
    width: 100%;

    &:focus::placeholder {
        color: transparent;
    }
`,WF=_((n=>{var{type:o="checkbox",indicator:i,checked:l,styleType:d="default",children:u,childrenMaxLines:f,subLabel:h,disabled:p,error:m,name:b,id:v,className:y,compositeSection:x,removable:w,onRemove:$,"data-testid":C,onChange:S,useContentWidth:D,"aria-describedby":k}=n,E=ct(n,["type","indicator","checked","styleType","children","childrenMaxLines","subLabel","disabled","error","name","id","className","compositeSection","removable","onRemove","data-testid","onChange","useContentWidth","aria-describedby"]);const{collapsible:_=!0,errors:O,children:F,initialExpanded:T}=x||{},[I,M]=g(l),[A,j]=g(!!T),B=a((()=>{const e=Array.isArray(O)&&(null==O?void 0:O.length)>0,t=!Array.isArray(O)&&!!O;return e||t}),[O]),[R]=g(Cd.generate()),z=v?`${v}`:`tg-${R}`,P=s(null);c((()=>{M(l)}),[l]),c((()=>{I&&j(null==T||T)}),[I]);const L=e=>{if(!p){if(S)return void S(e);switch(o){case"checkbox":M((e=>!e));break;case"radio":case"yes":case"no":I||M(!0)}}},N=()=>{p||j(!A)},H=()=>{p||!$||$()},W=()=>{var e;null===(e=null==P?void 0:P.current)||void 0===e||e.click()},Y=e=>{e.stopPropagation()},V=()=>{let t;switch(o){case"yes":t="tick";break;case"no":t="cross";break;case"checkbox":case"radio":t=o}return e(TF,{type:t,active:I,disabled:p,$selected:I,$disabled:p})},U=()=>{if(!h)return null;let t;return t="function"==typeof h?h():h,e(wF,{"data-id":"toggle-sublabel",id:`${z}-sublabel`,"aria-hidden":!0,children:t})},K=n=>t(r,{children:[e(OF,{weight:"semibold",$disabled:p,children:"Error"}),e(FF,{$disabled:p,children:null==n?void 0:n.map(((t,r)=>e("li",{id:`${z}-error-list-item-${r}`,children:e(OF,{weight:"semibold",$disabled:p,children:t})},r)))})]});return t(mF,{$selected:I,$disabled:p,className:y,$styleType:d,$error:m,$indicator:i,$useContentWidth:D,id:v,"data-testid":C,children:[(()=>{const r=["string"==typeof h?`${z}-sublabel`:null,k].filter(Boolean).join(" ")||void 0;return t($F,{id:`${z}-header-container`,$disabled:p,$error:m,$selected:I,$indicator:i,$styleType:d,children:[e(CF,{$addPadding:w,children:t(vF,{id:`${z}-input-container`,onClick:W,children:[e(bF,Object.assign({ref:P,name:b,id:`${z}-input`,type:"checkbox"===o?"checkbox":"radio","data-testid":"toggle-input",disabled:p,onChange:L,onClick:Y,checked:I,"aria-describedby":r},E)),i&&V(),t(yF,{$selected:I,$disabled:p,children:[e(xF,{htmlFor:`${z}-input`,"data-testid":"toggle-label",id:`${z}-label`,$maxLines:f,children:u}),h&&U()]})]})}),w&&e(SF,{type:"button",$disabled:p,onClick:H,id:`${z}-remove-button`,children:"Remove"})]})})(),F&&t("div",{children:[(!_||A)&&e(_F,{"data-id":"toggle-composite-children",$isFinalItem:!_,$disabled:p,children:F}),_&&!A&&B&&e(kF,{$disabled:p,onClick:N,id:`${z}-error-alert`,children:e(EF,{type:p?"description":"error",className:y,showIcon:!0,children:Array.isArray(O)?K(O):O})}),_&&t(DF,{$paddingTopRequired:!A&&!B,disabled:p,onClick:N,"data-testid":A?"collapse-button":"expand-button",children:[A?"Show less":"Show more",e(A?ke:ne,{"aria-hidden":!0})]})]})]})}))`
    min-width: 5rem;
    flex: 1;
`,YF=_(bf.Small)`
    width: 7rem;

    ${oa.MaxWidth.sm} {
        flex: 1;
    }

    ${oa.MaxWidth.xxs} {
        width: 100%;
    }
`;var VF,UF,KF;!function(e){e.HOUR_UP="hour-up",e.HOUR_DOWN="hour-down",e.MINUTE_UP="minute-up",e.MINUTE_DOWN="minute-down"}(VF||(VF={})),function(e){e.HOUR="hour",e.MINUTE="minute"}(UF||(UF={})),function(e){e.AM="am",e.PM="pm"}(KF||(KF={}));const qF=({id:r,value:n,show:o,format:i,onChange:a,onCancel:l})=>{var u;const f=QO.getTimeValues(i,n),[h,p]=g(f.hour),[m,b]=g(f.minute),[v,y]=g(f.period),x=s(null),w=s(null),$=qc();c((()=>{if(o&&x.current&&x.current.focus(),o){const{hour:e,minute:t,period:r}=QO.getTimeValues(i,n);p(e),b(t),y(r)}}),[o,n,i]),c((()=>{const e=x.current,t=w.current;return e&&e.addEventListener("keydown",C),t&&t.addEventListener("keydown",C),()=>{e&&e.removeEventListener("keydown",C),t&&t.removeEventListener("keydown",C)}}),[]);const C=e=>{["Digit0","Digit1","Digit2","Digit3","Digit4","Digit5","Digit6","Digit7","Digit8","Digit9","Tab","Backspace","Delete","ArrowLeft","ArrowRight","ArrowUp","ArrowDown"].includes(e.code)||["Backspace","0","1","2","3","4","5","6","7","8","9"].includes(e.key)||e.preventDefault()},S=d((e=>{switch(e.currentTarget.name){case VF.MINUTE_UP:b(QO.updateMinutes(m,"add"));break;case VF.MINUTE_DOWN:b(QO.updateMinutes(m,"minus"));break;case VF.HOUR_UP:p(QO.updateHours(h,"add"));break;case VF.HOUR_DOWN:p(QO.updateHours(h,"minus"))}}),[h,m]),D=e=>{e.target.select()},k=e=>{const t=e.target.value;switch(e.target.name){case UF.HOUR:t.length<=2&&p(t);break;case UF.MINUTE:t.length<=2&&b(t)}},E=e=>{const t=parseInt(e.target.value);if(!isNaN(t))switch(e.target.name){case UF.HOUR:{const r=t>23||t<0?f.hour:QO.convertHourTo12HourFormat(e.target.value);p(r);break}case UF.MINUTE:{const r=t>59||t<0?f.minute:e.target.value;b(Sd.padValue(r));break}}},_=e=>{switch(e.target.name){case KF.AM:y(GO.AM);break;case KF.PM:y(GO.PM)}},O=e=>r?`${r}-${e}`:e,F=Vw({opacity:o?1:0,height:o?(null!==(u=$.height)&&void 0!==u?u:0)+32+2:0});return e(IF,{"data-testid":"animated-dropdown-wrapper",style:F,children:t(MF,{ref:$.ref,"data-testid":O("timepicker-dropdown"),inert:Vu(!o),children:[t(AF,{children:[t(BF,{children:[t(zF,{children:[e(PF,{"aria-label":"increase hour",name:VF.HOUR_UP,tabIndex:-1,onClick:S,"data-testid":O("hour-increment-button"),children:e(ke,{})}),e(NF,{children:e(HF,{"aria-label":"hour",type:"number",name:UF.HOUR,id:"hour",maxLength:2,pattern:"[0-9]{2}",ref:x,value:h,onFocus:D,onChange:k,onBlur:E,min:1,max:12,placeholder:"HH","data-testid":O("hour-input")})}),e(PF,{"aria-label":"decrease hour",name:VF.HOUR_DOWN,tabIndex:-1,onClick:S,"data-testid":O("hour-decrement-button"),children:e(ne,{})})]}),e(LF,{children:":"}),t(zF,{children:[e(PF,{"aria-label":"increase minute",name:VF.MINUTE_UP,tabIndex:-1,onClick:S,"data-testid":O("minute-increment-button"),children:e(ke,{})}),e(NF,{children:e(HF,{"aria-label":"minute",type:"number",name:UF.MINUTE,id:"minute",maxLength:2,pattern:"[0-9]{2}",ref:w,value:m,onChange:k,onBlur:E,onFocus:D,min:0,max:59,placeholder:"MM","data-testid":O("minute-input")})}),e(PF,{"aria-label":"decrease minute",name:VF.MINUTE_DOWN,tabIndex:-1,onClick:S,"data-testid":O("minute-decrement-button"),children:e(ne,{})})]})]}),t(RF,{children:[e(WF,{checked:v===GO.AM,name:KF.AM,type:"radio",onChange:_,"data-testid":O("am-toggle"),"aria-label":"AM",children:"AM"}),e(WF,{checked:v===GO.PM,name:KF.PM,type:"radio",onChange:_,"data-testid":O("pm-toggle"),"aria-label":"PM",children:"PM"})]})]}),t(jF,{children:[e(YF,{"aria-label":"close selector",type:"button",styleType:"secondary",onClick:l,"data-testid":O("cancel-button"),children:"Cancel"}),e(YF,{"aria-label":"confirm selection",type:"button",onClick:()=>{let e;e="24hr"===i?QO.convertTo24HourFormat({hour:h,minute:m,period:v}):`${h}:${m}${v}`,a(e)},disabled:""===h||""===m,"data-testid":O("confirm-button"),children:"Done"})]})]})})},GF=r=>{var{id:n,disabled:o=!1,error:i,value:a,format:l="24hr",readOnly:d,onChange:u,onFocus:f,onBlur:h}=r,p=ct(r,["id","disabled","error","value","format","readOnly","onChange","onFocus","onBlur"]);const[m,b]=g(!1),[v,y]=g(!1),[x,w]=g(""),[$,C]=g(""),S=s(null);c((()=>{a&&(w(a.start),C(a.end))}),[a]),kd("mousedown",(function(e){o||_(e)}),"document"),kd("keyup",(function(e){if("Tab"===e.code)_(e)}),"document");const D=()=>{E()},k=()=>{m||v||f&&f()},E=()=>{b(!1),y(!1),h&&h()},_=e=>{S.current&&!S.current.contains(e.target)&&(v||m)&&E()};return e(UO,Object.assign({ref:S,id:n},p,{children:t(KO,{$disabled:o,$error:i,$readOnly:d,children:[t(Rh,{error:i,currentActive:m?"start":v?"end":"none",children:[e(qO,{onFocus:()=>{o||d||m||(y(!1),b(!0),k())},readOnly:!0,placeholder:"From",value:QO.formatDisplayValue(x,l),disabled:o,"data-testid":p["data-testid"]?`${p["data-testid"]}-timepicker-selector`:"timepicker-selector"}),e(qO,{onFocus:()=>{o||d||v||(b(!1),y(!0),k())},readOnly:!0,placeholder:"To",value:QO.formatDisplayValue($,l),disabled:o,"data-testid":p["data-testid"]?`${p["data-testid"]}-timepicker-selector`:"timepicker-selector"})]}),e(qF,{id:n,show:m,value:x,format:l,onCancel:D,onChange:e=>{b(!1),y(!0),w(e);u&&u({start:e,end:$})}}),e(qF,{id:n,show:v,value:$,format:l,onCancel:D,onChange:e=>{y(!1),C(e);u&&u({start:x,end:e}),""==x?b(!0):h&&h()}})]})}))},QF=_(vh)`
    height: 3rem;
    gap: ${ea["spacing-8"]};
    // space for clear icon
    padding-right: calc(1.25rem + ${ea["spacing-20"]});
`,ZF=r=>{var{id:n,disabled:o=!1,error:i,value:l,format:u="12hr",readOnly:f,onChange:h,onFocus:p,onBlur:m,alignment:b="left",dropdownZIndex:v,startLimit:y,endLimit:x,interval:w=15}=r,$=ct(r,["id","disabled","error","value","format","readOnly","onChange","onFocus","onBlur","alignment","dropdownZIndex","startLimit","endLimit","interval"]);const[C]=g((()=>Cd.generate())),[S,D]=g(null),[k,E]=g(!1),[_,O]=g(""),[F,T]=g(""),[I,M]=g(""),[A,j]=g(""),[B,R]=g(""),z=s(null),P=s(null),L=s(null),N=a((()=>QO.generateTimings(w,u,y,x)),[w,u,y,x]),H=a((()=>{if(""===A)return N;const e=QO.findClosestFlooredTime(A,N);return e?N.slice(N.indexOf(e)):[]}),[N,A]),W=d((e=>QO.parseInput(e,u)),[u]);c((()=>{var e,t;if(l){const r=null!==(e=W(l.start))&&void 0!==e?e:"",n=null!==(t=W(l.end))&&void 0!==t?t:"";T(r),M(n),j(r),R(n)}}),[l,W]),c((()=>{if(i)return void E(!1);const e=W(F),t=W(I);if(void 0===e)O("Invalid start time");else if(void 0===t)O("Invalid end time");else{if(!(""!==e&&""!==t&&QO.to24Hour(t)<QO.to24Hour(e)))return O(""),void(document.activeElement!==P.current&&document.activeElement!==L.current||E(!0));O("End time must be after start time")}E(!1)}),[F,I,W,i]);const Y=e=>{o||f||(S||k||null==p||p(),D(e),E(!0))},V=e=>{var t;o||f||(D(e),E(!0),null===(t=("start"===e?P:L).current)||void 0===t||t.select())};function U(e){var t;switch(e.code){case"Enter":"start"===S?K(F):"end"===S&&(k&&q(I),null===(t=L.current)||void 0===t||t.blur());break;case"Tab":G(F,I,{})}}const K=e=>{G(e,I,{goToNextInput:!0})},q=e=>{G(F,e,{triggerOnBlur:!0})},G=(e,t,{goToNextInput:r,triggerOnBlur:n})=>{var o,i,a;const s=null!==(o=W(e))&&void 0!==o?o:A,l=null!==(i=W(t))&&void 0!==i?i:B;T(s),M(l);s===A&&l===B||null==h||h({start:s,end:l}),r&&void 0!==W(e)&&(D("end"),null===(a=L.current)||void 0===a||a.select()),n&&(D(null),E(!1),null==m||m()),j(s),R(l)},Q=e=>{e.stopPropagation(),T(""),M(""),j(""),R("");null==h||h({start:"",end:""}),D(null),E(!1)},Z=e=>{var t,r;const n=e.relatedTarget,o=(null===(t=null==n?void 0:n.matches)||void 0===t?void 0:t.call(n,"[data-floating-ui-focusable]"))||(null===(r=null==n?void 0:n.matches)||void 0===r?void 0:r.call(n,"[data-floating-ui-focus-guard]")),i=z.current&&z.current.contains(n);S&&!k&&!i&&!o&&G(F,I,{triggerOnBlur:!0})},X=()=>{if(!f&&!o&&((null==F?void 0:F.length)>0||(null==I?void 0:I.length)>0))return e(EO,{onClick:Q,type:"button","aria-label":"Clear",children:e(Vp,{"aria-hidden":!0})})};return t(UO,Object.assign({id:n},$,{children:[e(lE,{children:e(Hu,{enabled:!f&&!o,isOpen:k,renderElement:()=>t(QF,{ref:z,$disabled:o,$error:i||!!_,$readOnly:f,onBlur:Z,children:[t(Rh,{error:i||!!_,currentActive:null===S?"none":S,children:[e(qO,{ref:P,onFocus:()=>Y("start"),placeholder:"start"===S?"hh:mm":"From",onChange:e=>T(e.target.value),value:F,disabled:o,readOnly:f,"data-testid":$["data-testid"]?`${$["data-testid"]}-timepicker-selector`:"timepicker-selector",onClick:()=>V("start"),onKeyDown:U,autoComplete:"off","aria-label":"Start time input",type:"text",role:"combobox","aria-expanded":k,"aria-controls":C,"aria-autocomplete":"list"}),e(qO,{ref:L,onFocus:()=>Y("end"),placeholder:"end"===S?"hh:mm":"To",onChange:e=>M(e.target.value),value:I,disabled:o,readOnly:f,"data-testid":$["data-testid"]?`${$["data-testid"]}-timepicker-selector`:"timepicker-selector",onClick:()=>V("end"),onKeyDown:U,autoComplete:"off","aria-label":"End time input",type:"text",role:"combobox","aria-expanded":k,"aria-controls":C,"aria-autocomplete":"list"})]}),X()]}),renderDropdown:()=>e(IE,"start"===S?{listItems:N,onSelectItem:K,selectedItems:[F],disableItemFocus:!0,topScrollItem:QO.findClosestFlooredTime(W(F),N),listboxId:C}:{listItems:H,onSelectItem:q,selectedItems:[I],disableItemFocus:!0,topScrollItem:QO.findClosestFlooredTime(W(I),H),listboxId:C}),onClose:e=>{"outside-press"===e?(D(null),E(!1),null==m||m()):G(F,I,{triggerOnBlur:!0})},onDismiss:()=>{var e;null===(e=("start"===S?P:L).current)||void 0===e||e.focus(),E(!1)},offset:8,alignment:b,fitAvailableHeight:!0,customZIndex:v})}),!i&&_&&e(uu,{id:n?`${n}-error-message`:"error-message",tabIndex:0,"data-testid":n?`${n}-error-message`:"error-message",children:_})]}))},XF=t=>{var{variant:r="dial"}=t,n=ct(t,["variant"]);return e("combobox"===r?ZF:GF,Object.assign({},n))};_.div`
    position: relative;
`;const JF=_(yh)`
    height: calc(3rem - 2px); // exclude top and bottom borders
`,eT=r=>{var{id:n,disabled:o=!1,readOnly:i=!1,error:a,value:l,placeholder:c,format:u="24hr",onChange:f,onFocus:h,onBlur:p}=r,m=ct(r,["id","disabled","readOnly","error","value","placeholder","format","onChange","onFocus","onBlur"]);const[b,v]=g(!1),y=s(null);kd("mousedown",(function(e){o||i||$(e)}),"document"),kd("keyup",(function(e){if("Tab"===e.code)$(e)}),"document");const x=()=>{o||i||b||(v(!0),h&&h())};const w=()=>{v(!1),p&&p()},$=e=>{y.current&&!y.current.contains(e.target)&&b&&w()},C=d((()=>"12hr"===u?"HH:MMam":"HH:MM"),[u,c]);return t(vh,Object.assign({ref:y,id:n,$readOnly:i,$disabled:o,$error:a},m,{children:[e(JF,{onFocus:x,readOnly:!0,placeholder:c||C(),value:QO.formatDisplayValue(l,u),disabled:o,"data-testid":n?`${n}-timepicker-selector`:"timepicker-selector"}),e(qF,{id:n,show:b,value:l,format:u,onCancel:()=>{w()},onChange:e=>{f&&f(e),w()}})]}))},tT=_(eC)`
    margin-right: 0.5rem;
`,rT=_(qp)`
    width: 2.5rem;

    input {
        text-align: center;
    }
`,nT=_(rT)`
    // Cheat to balance the placeholder look while ensuring enough width
    margin-left: 0.5rem;
    width: 6rem;

    input {
        text-align: left;
    }
`,oT=_(wa.BodyBL)`
    margin: 0 0.25rem;
    ${e=>{if(e.$inactive)return O`
                color: ${Qi["text-disabled"]};
            `}}
`,iT=_.div`
    display: flex;
    align-items: center;
    height: calc(3rem - 2px); // exclude top and bottom borders
`,aT=_(wa.BodyBL)``,sT=n=>{var{disabled:o,error:i,value:a,onChange:l,onBlur:d,onChangeRaw:u,onBlurRaw:f,readOnly:h,placeholder:p="00-8888",autoComplete:m}=n,b=ct(n,["disabled","error","value","onChange","onBlur","onChangeRaw","onBlurRaw","readOnly","placeholder","autoComplete"]);const[v,y]=g(""),[x,w]=g(""),[$,C]=g("none"),S=s(null),D=s(null),k=s(null),E=s(v),_=s(x),O=s($),F=e=>e.toLocaleUpperCase().replace(/[^0-9A-Za-z]/g,""),T=_d({ref:D,formatter:F}),I=_d({ref:k,formatter:F}),M=e=>{E.current=e,y(e)},A=e=>{_.current=e,w(e)},j=e=>{O.current=e,C(e)};c((()=>{"floor"===$&&3===v.length&&k.current&&k.current.focus()}),[v]),c((()=>{N(a)}),[a]);const B=e=>{j(e.target.name),e.target.select()},R=e=>{const t=e.target.name,r=e.target.value,n=L(r);"floor"===t?(M(n),n!==v&&H(n,t)):"unit"===t&&(A(n),n!==x&&H(n,t))},z=e=>{const t=e.target.name;if("floor"===t){const e=T();if(!e)return;const{nextValue:r,updateCaretPosition:n}=e;n(),M(r),H(r,t)}else if("unit"===t){const e=I();if(!e)return;const{nextValue:r,updateCaretPosition:n}=e;n(),A(r),H(r,t)}},P=e=>{var t;"Backspace"!==e.code&&"Backspace"!==e.key||"unit"===$&&0===x.length&&(null===(t=D.current)||void 0===t||t.focus())},L=e=>/^[0-9]$/.test(e)?Sd.padValue(e,!0):e.toLocaleUpperCase(),N=e=>{if(e!==lT)if(void 0===e||0===e.length)M(""),A("");else{const t=e.split("-");if(2===t.length){const e=t[0],r=t[1];M("floor"===$?e:L(e)),A("unit"===$?r:L(r))}}},H=(e,t)=>{if(!l&&!u)return;const r={floor:E.current,unit:_.current};if(r[t]=e,l){const e=Y(r);l(e)}u&&u([r.floor,r.unit])},W=()=>{if(!d&&!f)return;const e={floor:L(E.current),unit:L(_.current)};if(d){const t=Y(e);d(t)}f&&f([e.floor,e.unit])},Y=e=>{const t=[e.floor,e.unit];return e.floor.length>0&&e.unit.length>0?t.join("-"):t.every((e=>""===e))?"":lT},V=e=>e.split("-");return t(vh,Object.assign({},b,{ref:S,onClick:()=>{"none"===$&&D.current&&D.current.focus()},$disabled:o,$error:i,$readOnly:h,tabIndex:-1,onBlur:e=>{S.current&&S.current.contains(e.relatedTarget)||"none"!==O.current&&(j("none"),W())},children:[e(tT,{"data-testid":"addon",$disabled:o,$readOnly:h,children:"#"}),h&&a?(r=>{const n=r.split("-");return t(iT,{children:[e(aT,{children:n[0]}),e(oT,{children:"-"}),e(aT,{children:n[1]})]})})(a):t(r,{children:[e(rT,{name:"floor",maxLength:3,value:v,ref:D,onFocus:B,onBlur:R,onChange:z,disabled:o,readOnly:h,type:"text",pattern:"[0-9A-Z]{2,3}","data-testid":"floor-input","aria-label":"floor-input",placeholder:"floor"!==$||h?V(p)[0]:"",autoComplete:m,styleType:"no-border"}),e(oT,{$inactive:0===v.length,children:"-"}),e(nT,{name:"unit",maxLength:5,value:x,ref:k,onFocus:B,onBlur:R,onChange:z,onKeyDown:P,disabled:o,readOnly:h,type:"text",pattern:"[0-9A-Z]{2,5}","data-testid":"unit-input","aria-label":"unit-input",placeholder:"unit"!==$||h?V(p)[1]:"",autoComplete:m,styleType:"no-border"})]})]}))},lT="Invalid unit number",cT={DateInput:t=>{var{label:r,errorMessage:n,id:o,"data-error-testid":i,"data-testid":a,layoutType:s,mobileCols:l,tabletCols:c,desktopCols:d,xxsCols:u,xsCols:f,smCols:h,mdCols:p,lgCols:m,xlCols:b,xxlCols:v}=t,y=ct(t,["label","errorMessage","id","data-error-testid","data-testid","layoutType","mobileCols","tabletCols","desktopCols","xxsCols","xsCols","smCols","mdCols","lgCols","xlCols","xxlCols"]);const[x]=g((()=>`form-date-input-${Cd.generate()}`)),w=null!=o?o:x;return e(ku,{id:w,label:r,errorMessage:n,"data-error-testid":i,disabled:y.disabled,layoutType:s,mobileCols:l,tabletCols:c,desktopCols:d,xxsCols:u,xsCols:f,smCols:h,mdCols:p,lgCols:m,xlCols:b,xxlCols:v,children:e(Th,Object.assign({id:`${w}-base`,"data-testid":a||o,"aria-labelledby":`${w}-label`,error:!!n},y))})},DateRangeInput:t=>{var{label:r,errorMessage:n,id:o,"data-error-testid":i,"data-testid":a,layoutType:s,mobileCols:l,tabletCols:c,desktopCols:d,xxsCols:u,xsCols:f,smCols:h,mdCols:p,lgCols:m,xlCols:b,xxlCols:v}=t,y=ct(t,["label","errorMessage","id","data-error-testid","data-testid","layoutType","mobileCols","tabletCols","desktopCols","xxsCols","xsCols","smCols","mdCols","lgCols","xlCols","xxlCols"]);const[x]=g((()=>`form-date-range-input-${Cd.generate()}`)),w=null!=o?o:x;return e(ku,{id:w,label:r,errorMessage:n,"data-error-testid":i,disabled:y.disabled,layoutType:s,mobileCols:l,tabletCols:c,desktopCols:d,xxsCols:u,xsCols:f,smCols:h,mdCols:p,lgCols:m,xlCols:b,xxlCols:v,children:e(Hh,Object.assign({id:`${o}-base`,"data-testid":a?`${a}-base`:void 0,"aria-labelledby":`${w}-label`,error:!!n},y))})},ESignature:t=>{const{label:r,errorMessage:n,id:o="form-field","data-error-testid":i,"data-testid":a,layoutType:s,mobileCols:l,tabletCols:c,desktopCols:d,xxsCols:u,xsCols:f,smCols:h,mdCols:p,lgCols:g,xlCols:m,xxlCols:b}=t,v=ct(t,["label","errorMessage","id","data-error-testid","data-testid","layoutType","mobileCols","tabletCols","desktopCols","xxsCols","xsCols","smCols","mdCols","lgCols","xlCols","xxlCols"]);return e(ku,{id:o,label:r,errorMessage:n,"data-error-testid":i,layoutType:s,mobileCols:l,tabletCols:c,desktopCols:d,xxsCols:u,xsCols:f,smCols:h,mdCols:p,lgCols:g,xlCols:m,xxlCols:b,children:e(vp,Object.assign({id:`${o}-base`,"data-testid":a||o},v))})},HistogramSlider:t=>{var{label:r,errorMessage:n,id:o="form-histogram-slider","data-error-testid":i,"data-testid":a,layoutType:s,mobileCols:l,tabletCols:c,desktopCols:d,xxsCols:u,xsCols:f,smCols:h,mdCols:p,lgCols:g,xlCols:m,xxlCols:b}=t,v=ct(t,["label","errorMessage","id","data-error-testid","data-testid","layoutType","mobileCols","tabletCols","desktopCols","xxsCols","xsCols","smCols","mdCols","lgCols","xlCols","xxlCols"]);return e(ku,{id:o,label:r,errorMessage:n,"data-error-testid":i,disabled:v.disabled,layoutType:s,mobileCols:l,tabletCols:c,desktopCols:d,xxsCols:u,xsCols:f,smCols:h,mdCols:p,lgCols:g,xlCols:m,xxlCols:b,children:e(Hp,Object.assign({id:`${o}-base`,"data-testid":a||o},v))})},Input:Gp,InputGroup:nC,MaskedInput:yC,Label:hu,MultiSelect:t=>{var{label:r,errorMessage:n,id:o="form-multi-select","data-error-testid":i,"data-testid":a,enableSearch:s=!1,layoutType:l,mobileCols:c,tabletCols:d,desktopCols:u,xxsCols:f,xsCols:h,smCols:p,mdCols:g,lgCols:m,xlCols:b,xxlCols:v,variant:y}=t,x=ct(t,["label","errorMessage","id","data-error-testid","data-testid","enableSearch","layoutType","mobileCols","tabletCols","desktopCols","xxsCols","xsCols","smCols","mdCols","lgCols","xlCols","xxlCols","variant"]);return e(ku,{id:o,label:r,errorMessage:n,"data-error-testid":i,disabled:x.disabled,layoutType:l,mobileCols:c,tabletCols:d,desktopCols:u,xxsCols:f,xsCols:h,smCols:p,mdCols:g,lgCols:m,xlCols:b,xxlCols:v,children:e(G_,Object.assign({id:`${o}-base`,"data-testid":a||o,error:!!n,enableSearch:s,variant:y},x))})},NestedSelect:t=>{var{label:r,errorMessage:n,id:o="form-nested-select","data-error-testid":i,"data-testid":a,layoutType:s,mobileCols:l,tabletCols:c,desktopCols:d,xxsCols:u,xsCols:f,smCols:h,mdCols:p,lgCols:g,xlCols:m,xxlCols:b}=t,v=ct(t,["label","errorMessage","id","data-error-testid","data-testid","layoutType","mobileCols","tabletCols","desktopCols","xxsCols","xsCols","smCols","mdCols","lgCols","xlCols","xxlCols"]);return e(ku,{id:o,label:r,errorMessage:n,"data-error-testid":i,disabled:v.disabled,layoutType:s,mobileCols:l,tabletCols:c,desktopCols:d,xxsCols:u,xsCols:f,smCols:h,mdCols:p,lgCols:g,xlCols:m,xxlCols:b,children:e(J_,Object.assign({id:`${o}-base`,"data-testid":a||o,error:!!n},v))})},NestedMultiSelect:t=>{var{label:r,errorMessage:n,id:o="form-nested-multi-select","data-error-testid":i,"data-testid":a,layoutType:s,mobileCols:l,tabletCols:c,desktopCols:d,xxsCols:u,xsCols:f,smCols:h,mdCols:p,lgCols:g,xlCols:m,xxlCols:b}=t,v=ct(t,["label","errorMessage","id","data-error-testid","data-testid","layoutType","mobileCols","tabletCols","desktopCols","xxsCols","xsCols","smCols","mdCols","lgCols","xlCols","xxlCols"]);return e(ku,{id:o,label:r,errorMessage:n,"data-error-testid":i,disabled:v.disabled,layoutType:s,mobileCols:l,tabletCols:c,desktopCols:d,xxsCols:u,xsCols:f,smCols:h,mdCols:p,lgCols:g,xlCols:m,xxlCols:b,children:e(X_,Object.assign({id:`${o}-base`,"data-testid":a||o,error:!!n},v))})},Select:t=>{var{label:r,errorMessage:n,id:o="form-select","data-error-testid":i,"data-testid":a,enableSearch:s=!1,layoutType:l,mobileCols:c,tabletCols:d,desktopCols:u,xxsCols:f,xsCols:h,smCols:p,mdCols:g,lgCols:m,xlCols:b,xxlCols:v,variant:y}=t,x=ct(t,["label","errorMessage","id","data-error-testid","data-testid","enableSearch","layoutType","mobileCols","tabletCols","desktopCols","xxsCols","xsCols","smCols","mdCols","lgCols","xlCols","xxlCols","variant"]);return e(ku,{id:o,label:r,errorMessage:n,"data-error-testid":i,disabled:x.disabled,layoutType:l,mobileCols:c,tabletCols:d,desktopCols:u,xxsCols:f,xsCols:h,smCols:p,mdCols:g,lgCols:m,xlCols:b,xxlCols:v,children:e(FO,Object.assign({id:`${o}-base`,"data-testid":a||o,error:!!n,enableSearch:s,variant:y},x))})},SelectHistogram:t=>{var{label:r,errorMessage:n,id:o="form-select-histogram","data-error-testid":i,"data-testid":a,layoutType:s,mobileCols:l,tabletCols:c,desktopCols:d,xxsCols:u,xsCols:f,smCols:h,mdCols:p,lgCols:g,xlCols:m,xxlCols:b,histogramSlider:v}=t,y=ct(t,["label","errorMessage","id","data-error-testid","data-testid","layoutType","mobileCols","tabletCols","desktopCols","xxsCols","xsCols","smCols","mdCols","lgCols","xlCols","xxlCols","histogramSlider"]);return e(ku,{id:o,label:r,errorMessage:n,"data-error-testid":i,disabled:y.disabled,layoutType:s,mobileCols:l,tabletCols:c,desktopCols:d,xxsCols:u,xsCols:f,smCols:h,mdCols:p,lgCols:g,xlCols:m,xxlCols:b,children:e(jO,Object.assign({histogramSlider:v,error:!!n,"data-testid":a||o,id:`${o}-base`},y))})},Slider:t=>{var{label:r,errorMessage:n,id:o="form-slider","data-error-testid":i,"data-testid":a,layoutType:s,mobileCols:l,tabletCols:c,desktopCols:d,xxsCols:u,xsCols:f,smCols:h,mdCols:p,lgCols:g,xlCols:m,xxlCols:b}=t,v=ct(t,["label","errorMessage","id","data-error-testid","data-testid","layoutType","mobileCols","tabletCols","desktopCols","xxsCols","xsCols","smCols","mdCols","lgCols","xlCols","xxlCols"]);return e(ku,{id:o,label:r,errorMessage:n,"data-error-testid":i,disabled:v.disabled,layoutType:s,mobileCols:l,tabletCols:c,desktopCols:d,xxsCols:u,xsCols:f,smCols:h,mdCols:p,lgCols:g,xlCols:m,xxlCols:b,children:e(BO,Object.assign({id:`${o}-base`,"data-testid":a||o},v))})},RangeSlider:t=>{var{label:r,errorMessage:n,id:o="form-range-slider","data-error-testid":i,"data-testid":a,layoutType:s,mobileCols:l,tabletCols:c,desktopCols:d,xxsCols:u,xsCols:f,smCols:h,mdCols:p,lgCols:g,xlCols:m,xxlCols:b}=t,v=ct(t,["label","errorMessage","id","data-error-testid","data-testid","layoutType","mobileCols","tabletCols","desktopCols","xxsCols","xsCols","smCols","mdCols","lgCols","xlCols","xxlCols"]);return e(ku,{id:o,label:r,errorMessage:n,"data-error-testid":i,disabled:v.disabled,layoutType:s,mobileCols:l,tabletCols:c,desktopCols:d,xxsCols:u,xsCols:f,smCols:h,mdCols:p,lgCols:g,xlCols:m,xxlCols:b,children:e(Bp,Object.assign({id:`${o}-base`,"data-testid":a||o},v))})},RangeSelect:t=>{var{label:r,errorMessage:n,id:o="form-select","data-error-testid":i,"data-testid":a,enableSearch:s=!1,layoutType:l,mobileCols:c,tabletCols:d,desktopCols:u,xxsCols:f,xsCols:h,smCols:p,mdCols:g,lgCols:m,xlCols:b,xxlCols:v}=t,y=ct(t,["label","errorMessage","id","data-error-testid","data-testid","enableSearch","layoutType","mobileCols","tabletCols","desktopCols","xxsCols","xsCols","smCols","mdCols","lgCols","xlCols","xxlCols"]);return e(ku,{id:o,label:r,errorMessage:n,"data-error-testid":i,disabled:y.disabled,layoutType:l,mobileCols:c,tabletCols:d,desktopCols:u,xxsCols:f,xsCols:h,smCols:p,mdCols:g,lgCols:m,xlCols:b,xxlCols:v,children:e(OO,Object.assign({id:`${o}-base`,"data-testid":a||o,error:!!n,enableSearch:s},y))})},Textarea:VO,Timepicker:t=>{var{label:r,errorMessage:n,id:o="form-timepicker","data-error-testid":i,"data-testid":a,layoutType:s,mobileCols:l,tabletCols:c,desktopCols:d,xxsCols:u,xsCols:f,smCols:h,mdCols:p,lgCols:g,xlCols:m,xxlCols:b}=t,v=ct(t,["label","errorMessage","id","data-error-testid","data-testid","layoutType","mobileCols","tabletCols","desktopCols","xxsCols","xsCols","smCols","mdCols","lgCols","xlCols","xxlCols"]);return e(ku,{id:o,label:r,errorMessage:n,disabled:v.disabled,"data-error-testid":i,layoutType:s,mobileCols:l,tabletCols:c,desktopCols:d,xxsCols:u,xsCols:f,smCols:h,mdCols:p,lgCols:g,xlCols:m,xxlCols:b,children:e(eT,Object.assign({id:`${o}-base`,"data-testid":a||o,error:!!n},v))})},TimeRangePicker:t=>{var{label:r,errorMessage:n,id:o="form-timepicker","data-error-testid":i,"data-testid":a,layoutType:s,mobileCols:l,tabletCols:c,desktopCols:d,xxsCols:u,xsCols:f,smCols:h,mdCols:p,lgCols:g,xlCols:m,xxlCols:b}=t,v=ct(t,["label","errorMessage","id","data-error-testid","data-testid","layoutType","mobileCols","tabletCols","desktopCols","xxsCols","xsCols","smCols","mdCols","lgCols","xlCols","xxlCols"]);return e(ku,{id:o,label:r,errorMessage:n,disabled:v.disabled,"data-error-testid":i,layoutType:s,mobileCols:l,tabletCols:c,desktopCols:d,xxsCols:u,xsCols:f,smCols:h,mdCols:p,lgCols:g,xlCols:m,xxlCols:b,children:e(XF,Object.assign({id:`${o}-base`,"data-testid":a||o,error:!!n},v))})},CustomField:t=>{var{id:r="form-custom-field","data-error-testid":n,children:o}=t,i=ct(t,["id","data-error-testid","children"]);return e(ku,Object.assign({id:r,"data-error-testid":n},i,{children:o}))},UnitNumberInput:t=>{var{label:r,errorMessage:n,id:o="form-unit-number-input","data-error-testid":i,"data-testid":a,layoutType:s,mobileCols:l,tabletCols:c,desktopCols:d,xxsCols:u,xsCols:f,smCols:h,mdCols:p,lgCols:g,xlCols:m,xxlCols:b}=t,v=ct(t,["label","errorMessage","id","data-error-testid","data-testid","layoutType","mobileCols","tabletCols","desktopCols","xxsCols","xsCols","smCols","mdCols","lgCols","xlCols","xxlCols"]);return e(ku,{id:o,label:r,errorMessage:n,"data-error-testid":i,disabled:v.disabled,layoutType:s,mobileCols:l,tabletCols:c,desktopCols:d,xxsCols:u,xsCols:f,smCols:h,mdCols:p,lgCols:g,xlCols:m,xxlCols:b,children:e(sT,Object.assign({id:`${o}-base`,"data-testid":a||o,error:!!n},v))})},PhoneNumberInput:t=>{var{label:r,errorMessage:n,id:o="form-phone-number-input","data-error-testid":i,"data-testid":a,layoutType:s,mobileCols:l,tabletCols:c,desktopCols:d,xxsCols:u,xsCols:f,smCols:h,mdCols:p,lgCols:g,xlCols:m,xxlCols:b}=t,v=ct(t,["label","errorMessage","id","data-error-testid","data-testid","layoutType","mobileCols","tabletCols","desktopCols","xxsCols","xsCols","smCols","mdCols","lgCols","xlCols","xxlCols"]);return e(ku,{id:o,label:r,errorMessage:n,"data-error-testid":i,disabled:v.disabled,layoutType:s,mobileCols:l,tabletCols:c,desktopCols:d,xxsCols:u,xsCols:f,smCols:h,mdCols:p,lgCols:g,xlCols:m,xxlCols:b,children:e(gO,Object.assign({id:`${o}-base`,"data-testid":a||o,error:!!n},v))})},PredictiveTextInput:t=>{var{label:r,errorMessage:n,id:o="form-predictive-text","data-error-testid":i,"data-testid":a,layoutType:s,mobileCols:l,tabletCols:c,desktopCols:d,xxsCols:u,xsCols:f,smCols:h,mdCols:p,lgCols:g,xlCols:m,xxlCols:b}=t,v=ct(t,["label","errorMessage","id","data-error-testid","data-testid","layoutType","mobileCols","tabletCols","desktopCols","xxsCols","xsCols","smCols","mdCols","lgCols","xlCols","xxlCols"]);return e(ku,{id:o,label:r,errorMessage:n,"data-error-testid":i,disabled:v.disabled,layoutType:s,mobileCols:l,tabletCols:c,desktopCols:d,xxsCols:u,xsCols:f,smCols:h,mdCols:p,lgCols:g,xlCols:m,xxlCols:b,children:e(DO,Object.assign({id:`${o}-base`,"data-testid":a||o,error:!!n},v))})}},dT=_.li`
    display: flex;
    flex-direction: column;
    padding: ${ea["spacing-32"]} 0;
    background: transparent;

    &:not(:last-child) {
        border-bottom: ${Ji["width-010"]} ${Ji.solid} ${Qi.border};
    }
`,uT=_.div`
    display: flex;
    align-items: flex-start;
    margin-bottom: ${ea["spacing-16"]};
    width: 100%;
`,fT=_.div`
    display: flex;
    flex: 1;
    flex-direction: column;
`,hT=_.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin-bottom: ${ea["spacing-16"]};

    ${oa.MaxWidth.sm} {
        flex-direction: column;
        justify-content: flex-start;
    }
`,pT=_(wa.BodyMD)`
    display: flex;
    flex: 1;
    margin-right: ${ea["spacing-16"]};

    ${oa.MaxWidth.sm} {
        margin-right: 0;
        margin-bottom: ${ea["spacing-8"]};
    }
`,gT=_(wa.BodyMD)``,mT=_.div`
    display: flex;
    ${oa.MaxWidth.sm} {
        flex-direction: column;
    }

    ${e=>{if(e.$thumbnail)return O`
                margin-left: calc(
                    96px + ${ea["spacing-32"]}
                ); // thumbnail width + right margin

                ${oa.MaxWidth.sm} {
                    margin-left: 0;
                }
            `}}
`,bT=_(bf.Small)`
    width: 7.5rem;
    &:not(:last-of-type) {
        margin-right: ${ea["spacing-16"]};
    }

    ${oa.MaxWidth.sm} {
        width: 100%;
        &:not(:last-of-type) {
            margin-bottom: ${ea["spacing-16"]};
        }
    }
`;const vT=({thumbnailImageDataUrl:r,"data-testid":n,renderReplaceButton:o,onReplaceClick:i})=>t(yT,{"data-testid":n,children:[e(xT,{"data-testid":n?`${n}-image`:void 0,src:r}),o&&e(wT,{type:"button",onClick:()=>{i&&i()},children:"Replace"})]}),yT=_.div`
    width: auto;
    margin-right: ${ea["spacing-32"]};
    display: flex;
    flex-shrink: 0;
    flex-direction: column;
    justify-content: center;
`,xT=_((({src:t,alt:r,className:n,"data-testid":o})=>e("img",{src:t,alt:r||"",className:n,"data-testid":o,onError:e=>{e.target.onerror=null,e.target.src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKAAAABQCAYAAACeXX40AAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAARTSURBVHgB7Z1tUuJAEIY7qMRYWnIE9wR6BD2Be5S9weoN1pusJ1iPwJ5guYH4GeNH2HkppgojYAIhbXrepwoJEMofPHZP9zQxkgJpmh5HUfTdHZ6624EQsiLOp7676+d5fp4kyeDda/5gNBr1siz76Q5/CCHr41ccx+dOyiEejAWcyHflDg+FkDWDiNjtdk8gYQdPTCIf5SON4ALe0cQ5idya78CZ+E8IaRgn4gki4JkQogCK3Y77wdRLtDiNnp6eRkKIEh0hRBEKSFShgEQVCkhUoYBEFQpIVKGARBUKSFShgEQVCkhUoYBEFQpIVNkUokqWZfLy8iJvb2/jx1tbWxLHsWxsbEgIcBpGCQh3e3srr6+vH16Lokh2dnbGN+swAioA+a6vrzERPPN1PP/w8CB5nsvu7q5YhmvAhoFciHzz5JsmTVNxGUosQwEbBmu+WWl3Ho+Pj6VkbSsUsGGqRjSka6Riq1DAhllGJkZAUhuocKtCAUltLNPfs9wTpIAL8M3hOtne3q50PhrTnY7dj4kCzgFrteFwKM/Pz1In3W53vNNRFvYBA+Xm5mYs4bzdilWAVJubn+8B7O3tlTqvzVDAGaAB7KVDAXB/f19rIYCU2uv1JEmSmUUJpMPrVdN1G+FecAGs+5B6i+0SpM79/X2pG/weyI57yIiCw3rUm4Z7wVMgyt3d3c3s1WEtiMiIqFUniIaQO1SYgqfALgVGo+aBVFx3URI6FHACoh4mUD4DRYnlrbGmoYATUPWWKTRwDtaIlncnmoQCyvuqtwwoVJCOyeoELyBkKpN6i2C9iFEpshrBC1h2OHQWEHeZogTvwVwgCVxARLBVdzmqFiUQD+/BbR17zW0jWAHx4deRQhE9yxYwfu3oz10l+lohWAHLSlMGRFE0sBfhhxumoyXeF3oxE6SAiHx1pz+k1nnj9pDODzcUwXusf/FoEcEJiKizruoVUbC4k+LlW7TW9F/BDJHgBFz3uqu4l4zHnxU6fuwrxPVgUAKi4bzuytNf8cAPNpRt0yByhthXDGYcC1EIVyNoCoxUVW3xYBwLQ6hVJqbbThAR0EejJlmmv+iHX0NaDwYhYB0N56bw68FQMC8gxMPar02EtB40LyBSbxurS7RmFg3HWsG0gG1KvbNo6x9PFcwKiOixzJjVV2K6pWMVkwL6atIC1ke3TArY9tRbpMxuSlsxJ2Abq94yWE3F5gS0+kFZ/R6KKQFRdFieMsbYlrXobkbAUJq31ka3zFyaAwKGsomPqrjuS4RowYsTEVX4xXSiCgUkqlBAogoFJKpQQKIKBSSqUECiCgUkqlBAogoFJKpAwIEQokO/k+f5pRCiQBRF/ShN02N38EcIaZjRaPStkyTJlYuCF0JIs1w49wbj/5TnTOxlWYYoeCSErJ+/cRwj8w7HVTAO3BMnjISkAS68fHjw4X+FujXhgbs7cyccCiMiqYeBu126TPsbS77pF/4DuxeyMpdnp3gAAAAASUVORK5CYII="}})))`
    width: 96px;
    height: 96px;
    aspect-ratio: 1;
    border-radius: ${ta.sm};
    border: ${Ji["width-010"]} ${Ji.solid} ${Qi.border};
    object-fit: cover;

    ${oa.MaxWidth.sm} {
        width: 64px;
        height: 64px;
    }
`,wT=_.button`
    width: 100%;
    height: 1.625rem;
    margin-top: ${ea["spacing-8"]};
    border: none;
    background: transparent;
    cursor: pointer;

    ${Zi["body-md-semibold"]}
    color: ${Qi["text-primary"]};

    &:hover {
        color: ${Qi["text-hover"]};
    }
`;var $T;!function(e){e.formatFileSizeDisplay=e=>{if(!e||0===e)return"0 KB";const t=Math.floor(Math.log(e)/Math.log(1024));return`${Number(e/Math.pow(1024,t)).toFixed(0)} ${["B","KB","MB","GB","TB","PB","EB","ZB","YB"][t]}`},e.isSupportedImageType=e=>["image/avif","image/gif","image/jpeg","image/png","image/svg+xml","image/webp"].includes(e)}($T||($T={}));const CT=({fileItem:r,fileDescriptionMaxLength:n,wrapperWidth:o,onSave:i,onCancel:a,onBlur:l})=>{const{id:d,name:u,size:f,truncateText:h=!0,thumbnailImageDataUrl:p}=r,[m,b]=g(),[v,y]=g(""),x=s(null),w=s(null);c((()=>{b($(u))}),[o]),c((()=>{y(r.description||"")}),[r]);const $=e=>{if(!h)return e;const t=w&&w.current?w.current.getBoundingClientRect().width:0;return Sd.truncateOneLine(e,t,t/2,t/2/8,16)};return t(dT,{"data-testid":`${d}-edit-display`,children:[t(uT,{children:[p&&e(vT,{thumbnailImageDataUrl:p}),t(fT,{children:[t(hT,{ref:w,children:[e(pT,{weight:"semibold",children:m}),e(gT,{children:$T.formatFileSizeDisplay(f)})]}),e(cT.Textarea,{ref:x,id:`${d}-description-textarea`,"data-testid":`${d}-textarea`,value:v,maxLength:n,onChange:e=>{y(e.target.value)},onBlur:e=>{l(e.target.value)},rows:3,"aria-label":`Photo description for ${u}`,label:{children:"Photo description",subtitle:"Describe this photo to users who may not be able to see the image."}})]})]}),t(mT,{$thumbnail:!!p,children:[e(bT,{"data-testid":`${d}-save-button`,type:"button",disabled:0===v.trim().length,onClick:()=>{x.current&&i(x.current.value.trim())},children:"Save"}),e(bT,{type:"button",styleType:"secondary","data-testid":`${d}-cancel-button`,onClick:a,children:"Cancel"})]})]})},ST=_.li`
    display: flex;
    align-items: center;
    width: 100%;
    border: none;

    &:not(:last-child) {
        margin-bottom: ${ea["spacing-16"]};
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
`,DT=_(Ae)`
    margin-right: ${ea["spacing-16"]};
    height: 1.5rem;
    width: 1.5rem;
    color: ${Qi.icon};

    ${e=>e.$active?O`
                color: ${Qi["icon-primary"]};
            `:e.$disabled?O`
                color: ${Qi["icon-disabled"]};
            `:void 0};
`,kT=_.div`
    background: ${Qi["bg-primary-subtlest"]};
    border: ${Ji["width-010"]} ${Ji.solid} ${Qi.border};
    border-radius: ${ta.sm};
    padding: ${ea["spacing-16"]} ${ea["spacing-32"]};
    display: flex;
    align-items: center;
    width: 100%;

    ${oa.MaxWidth.sm} {
        padding: ${ea["spacing-16"]};
    }

    ${e=>e.$focused?O`
                border-color: ${Qi["border-focus"]};
                box-shadow: ${ra["xs-focus-strong"]};
            `:e.$disabled?O`
                border-color: ${Qi["border-disabled"]};
            `:e.$error?O`
                background: ${Qi["bg-error"]};
                border-color: ${Qi["border-error"]};
            `:void 0}

    ${e=>{if(!e.$error&&(e.$loading||e.$editable))return O`
                ${oa.MaxWidth.sm} {
                    flex-direction: column;
                    align-items: flex-start;
                }
            `}}
`,ET=_.div`
    display: flex;
    flex: 1;
    align-items: center;

    ${oa.MaxWidth.sm} {
        flex-direction: column;
        width: 100%;
        align-items: flex-start;
    }

    ${e=>{if(e.$hasThumbnail)return O`
                ${oa.MaxWidth.sm} {
                    flex-direction: row;
                    align-items: center;
                }
            `}}
`,_T=_.div`
    display: flex;
    flex: 1;
    flex-direction: column;
    width: 100%;
`,OT=_.div`
    display: flex;
    flex: 1;
    align-items: center;

    ${oa.MaxWidth.sm} {
        flex-direction: column;
        align-items: flex-start;
        width: 100%;
    }
`,FT=_.div`
    display: flex;
    width: 5rem;
    margin-left: ${ea["spacing-8"]};
    justify-content: flex-end;

    ${oa.MaxWidth.sm} {
        ${e=>e.$hideInMobile?O`
                    display: none;
                    visibility: hidden;
                `:O`
                    width: 100%;
                    margin-left: 0;
                    margin-top: ${ea["spacing-8"]};
                    justify-content: flex-start;
                `}
    }
`,TT=_(wa.BodyMD)``,IT=_(TT)`
    margin-top: ${ea["spacing-4"]};
`,MT=_(wa.BodySM)`
    color: ${Qi["text-error"]};
`,AT=_(MT)`
    margin-top: ${ea["spacing-4"]};
    ${oa.MaxWidth.sm} {
        display: none;
        visibility: hidden;
    }
`,jT=_(MT)`
    display: none;
    visibility: hidden;
    ${oa.MaxWidth.sm} {
        display: block;
        visibility: visible;
        margin-top: ${ea["spacing-8"]};
    }
`,BT=_.div`
    width: 6rem;
    margin-left: ${ea["spacing-32"]};
    display: flex;
    justify-content: flex-end;
    align-items: center;

    ${oa.MaxWidth.sm} {
        width: fit-content;

        ${e=>e.$loading&&!e.$error?O`
                    margin-left: 0;
                    margin-top: ${ea["spacing-16"]};
                    width: 100%;
                `:e.$editable&&!e.$error?O`
                    margin-left: 0;
                    margin-top: ${ea["spacing-16"]};
                    align-self: flex-end;
                `:void 0}
    }
`,RT=_(Qh)`
    min-width: unset;

    &:not(:last-child) {
        margin-right: ${ea["spacing-16"]};
    }
`,zT=_(Vd)`
    height: 2.5rem;
    width: 2.5rem;
    padding: unset;
    svg {
        height: 1.5rem;
        width: 1.5rem;
        color: ${Qi.icon};
    }
`,PT=m((({fileItem:n,editable:o,sortable:i,wrapperWidth:a,disabled:l,readOnly:d,onDelete:u,onEditClick:f})=>{const{id:h,name:p,size:m,description:v,progress:y=1,errorMessage:x,thumbnailImageDataUrl:w,truncateText:$=!0}=n,[C,S]=g(),{activeId:D}=b(je),{attributes:k,listeners:E,setNodeRef:_,transform:O,transition:F}=Gl({id:h}),T=s(null),I={transform:Ga.Translate.toString(O),transition:F},M=Object.assign(Object.assign({style:I},k),E),A=y<1,j=$T.formatFileSizeDisplay(m),B=D?D===h?"self":"others":"none";c((()=>{S(L(p))}),[a]);const R=()=>{u()},z=()=>{f&&f()},P=e=>{i&&e.stopPropagation()},L=e=>{if(!$)return e;const t=T&&T.current?T.current.getBoundingClientRect().width:0;return Sd.truncateOneLine(e,t,t/2,t/2/8,16)},N=()=>l||!!D,H=()=>!!i&&!d,W=()=>t(r,{children:[e(TT,{weight:v?"semibold":"regular",children:C}),v&&e(IT,{children:v})]});return t(ST,Object.assign({id:h,ref:_,$sortable:H(),$disabled:N(),$focusType:B},H()?M:{},{children:[H()&&e(DT,{"data-testid":`${h}-drag-handle`,$disabled:N(),$active:"self"===B}),t(kT,{$focused:"self"===B,$error:!!x,$loading:A,$disabled:N(),$editable:o,children:[(()=>{let n;return n=x?t(r,{children:[t(_T,{ref:T,children:[W(),x&&e(AT,{weight:"semibold",children:x})]}),e(FT,{children:e(TT,{children:j})}),x&&e(jT,{weight:"semibold",children:x})]}):w?(n=>t(r,{children:[e(vT,{thumbnailImageDataUrl:n,"data-testid":`${h}-thumbnail`}),t(OT,{children:[e(_T,{ref:T,children:W()}),e(FT,{children:e(TT,{children:j})})]})]}))(w):t(r,{children:[e(_T,{ref:T,children:W()}),e(FT,{$hideInMobile:A,children:e(TT,{children:j})})]}),e(ET,{$hasThumbnail:!!w,children:n})})(),!d&&(()=>{let n;return n=x?e(zT,{onClick:R,"data-testid":`${h}-error-delete-button`,"aria-label":`delete ${p}, error: ${x}`,children:e(re,{"aria-hidden":!0})}):A?e(Kh,{progress:y,"data-testid":`${h}-progress-bar`}):t(r,{children:[o&&e(RT,{"data-testid":`${h}-edit-button`,"data-no-dnd":"true",type:"button",styleType:"light",sizeType:"small","aria-label":`edit ${p}`,disabled:N(),onClick:z,onKeyDown:P,children:e(Me,{"aria-hidden":!0})},"edit"),e(RT,{"data-testid":`${h}-delete-button`,"data-no-dnd":"true",type:"button",styleType:"light",sizeType:"small","aria-label":`delete ${p}`,disabled:N(),onClick:R,onKeyDown:P,children:e(Ie,{"aria-hidden":!0})},"delete")]}),e(BT,{$editable:o,$error:!!x,$loading:A,children:n})})()]})]}))})),LT=_.ul`
    list-style-type: none;
    margin-bottom: ${e=>e.$readOnly?"0":ea["spacing-32"]};
`,NT=_.li`
    border-top: ${Ji["width-010"]} ${Ji.solid} ${Qi.border};
    border-bottom: ${Ji["width-010"]} ${Ji.solid} ${Qi.border};

    &:not(:last-child) {
        margin-bottom: ${ea["spacing-32"]};
    }

    &:not(:first-child) {
        margin-top: ${ea["spacing-32"]};
    }

    ul {
        list-style-type: none;
    }
`;const HT=u((function({fileItems:n=[],editableFileItems:o,fileDescriptionMaxLength:i,sortable:l,disabled:d,readOnly:u,onItemUpdate:h,onItemDelete:p,onSort:m},v){const[y,x]=g({}),{setActiveId:w}=b(je),[$,C]=g(""),S=s({});f(v,(()=>({focus:()=>{var e;null===(e=k.current)||void 0===e||e.focus()}})));const{width:D=0,ref:k}=qc(),E=s({}),_=function(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];return a((()=>[...t].filter((e=>null!=e))),[...t])}(ss(Gc,{activationConstraint:{distance:8}}),ss(el,{activationConstraint:{delay:150,tolerance:5}}),ss(Ys,{coordinateGetter:Xl})),O=e=>{delete E.current[e]};c((()=>{const e=P(n);((e,t)=>{const r=Object.keys(e),n=Object.keys(t);if(r.length!==n.length)return!1;for(const r of n)if(e[r]!==t[r])return!1;return!0})(y,e)||x(e)}),[n,o,u]),c((()=>{var e;if(!n||0===n.length)return void C("");const t=Date.now(),r=[];for(const o of n){const n=S.current[o.id];if(o.errorMessage)"error"!==(null==n?void 0:n.status)&&(r.push(`Error uploading ${o.name}: ${o.errorMessage}`),S.current[o.id]={progress:null!==(e=o.progress)&&void 0!==e?e:1,timestamp:t,status:"error"});else if(void 0!==o.progress)if(o.progress>=1)"complete"!==(null==n?void 0:n.status)&&(r.push(`${o.name} upload is complete`),S.current[o.id]={progress:1,timestamp:t,status:"complete"});else if("number"==typeof o.progress&&o.progress<1){(!n||"in-progress"!==n.status)&&(r.push(`Starting upload of ${o.name}`),S.current[o.id]={progress:o.progress,timestamp:t,status:"in-progress"})}}r.length>0&&C(r.join(", "))}),[n]);const F=e=>t=>{L(e.id,"display"),O(e.id);const r=Object.assign(Object.assign({},e),{description:t});h(r)},T=e=>t=>{E.current[e.id]=t},I=e=>()=>{e.description&&0!==e.description.length?L(e.id,"display"):p(e),O(e.id)},M=e=>()=>{L(e.id,"edit")},A=e=>()=>{p(e),k.current&&k.current.focus()},j=e=>{if(m&&n){const{active:t,over:r}=e;if(r&&t.id!==r.id){const e=n.findIndex((e=>e.id===t.id)),o=n.findIndex((e=>e.id===r.id)),i=Al(n,e,o);m(i)}}w(void 0)},B=e=>{const{active:t}=e;w(t.id)},R=e=>o&&$T.isSupportedImageType(e.type),z=e=>!e.errorMessage&&!u&&!("number"==typeof e.progress&&e.progress<1)&&R(e)&&!e.description,P=e=>{if(!e||0===e.length)return{};const t={};for(const r of e)r.errorMessage?t[r.id]="error":y[r.id]?t[r.id]=y[r.id]:t[r.id]=z(r)?"edit":"display";return t},L=(e,t)=>{x((r=>Object.assign(Object.assign({},r),{[e]:t})))},N=()=>n&&n.length>1&&l&&Object.values(y).every((e=>"display"===e)),H=()=>{if(0===n.length)return"No files uploaded";const e=n.filter((e=>!(null==e?void 0:e.errorMessage)&&(1===e.progress||void 0===e.progress))).length,t=n.filter((e=>"number"==typeof e.progress&&e.progress<1)).length,r=n.filter((e=>e.errorMessage)).length;if(0===e&&0===t&&0===r)return"File list";const o=[e>0?`${e} completed files`:"",t>0?`${t} file in progress`:"",r>0?`${r} ${r>1?"files":"file"} with error`:""].filter(Boolean);return`${u?"Read-only file list":"File list"}. ${o.join(", ")}`},W=()=>{const t=((e,t)=>{if(!e||0===e.length)return[];const r=[];for(const n of e)if("edit"===t[n.id]){const e=r[r.length-1];Array.isArray(e)?e.push(n):r.push([n])}else r.push(n);return r})(n,y);return 0===t.length?null:t.map(((t,r)=>Array.isArray(t)?((t,r)=>{const n=t.map((t=>{const r=Object.assign({},t);return void 0!==E.current[t.id]&&(r.description=E.current[t.id]),e(CT,{fileItem:r,wrapperWidth:D,fileDescriptionMaxLength:i,onSave:F(t),onCancel:I(t),onBlur:T(t)},t.id)}));return e(NT,{children:e("ul",{children:n})},`editable-${r}`)})(t,r):e(PT,{fileItem:t,editable:R(t),wrapperWidth:D,sortable:N(),disabled:d,readOnly:u,onDelete:A(t),onEditClick:M(t)},t.id)))},Y=()=>t(r,{children:[e(Yu,{"aria-live":"polite","aria-atomic":"true",children:$}),e(LT,{tabIndex:-1,$readOnly:u,ref:k,"aria-label":H(),children:W()})]});return d||u||!N()?Y():e(Ol,{sensors:_,onDragEnd:j,onDragStart:B,children:e(Hl,{items:n,strategy:Pl,children:Y()})})})),WT=_.div`
    display: flex;
    flex-direction: column;
    margin-bottom: ${ea["spacing-32"]};
    gap: ${ea["spacing-8"]};
`,YT=_(wa.BodyBL)``,VT=_.div`
    color: ${Qi.text};
    ${Gd({textSize:"body-baseline"})}
`,UT=_(wa.BodyMD)`
    color: ${Qi["text-subtler"]};
`,KT=_.div`
    color: ${Qi.text};
    ${Gd({textSize:"body-md"})}
`,qT=_(lF)`
    margin-bottom: ${ea["spacing-32"]};
`,GT=_.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-end;

    ${oa.MaxWidth.sm} {
        align-items: flex-start;
    }
`,QT=_(bf.Small)`
    width: 10rem;

    ${oa.MaxWidth.sm} {
        width: 100%;
    }
`,ZT=_.label`
    ${Zi["body-md-semibold"]}
    color: ${Qi["text-subtler"]};
    margin-top: ${ea["spacing-8"]};
    width: 10rem;
    text-align: center;
    ${oa.MaxWidth.sm} {
        display: none;
        visibility: hidden;
    }
`,XT=_(lF)`
    margin-bottom: ${ea["spacing-32"]};
`,JT=({styleType:r="bordered",fileItems:n,title:o,description:i,maxFiles:a,warning:l,className:c,name:d,id:u,"data-testid":f,accept:h,capture:p,multiple:m,disabled:b,sortable:v=!1,fileDescriptionMaxLength:y,editableFileItems:x=!1,errorMessage:w,readOnly:$,onChange:C,onDelete:S,onEdit:D,onSort:k})=>{const E=s(null),_=s(null),[O,F]=g(),T=()=>!(!a||!n)&&n.length>=a;return e(je.Provider,{value:{activeId:O,setActiveId:F},children:t(Ea,{ref:E,onChange:e=>{var t;!b&&C&&(C(e),null===(t=_.current)||void 0===t||t.focus())},id:u?`${u}-dropzone`:"dropzone",accept:h,capture:p,border:"bordered"===r,className:c,"data-testid":f,name:d,multiple:m,disabled:b||T()||$,children:[!(!o&&!i)&&t(WT,{children:[o?e("string"==typeof o?YT:VT,{children:o}):null,i?e("string"==typeof i?UT:KT,{children:i}):null]}),!!l&&e(qT,{type:"warning",children:l}),e(HT,{ref:_,fileItems:n,editableFileItems:x,fileDescriptionMaxLength:y,sortable:v,disabled:b,readOnly:$,onItemDelete:e=>{var t;S&&(S(e),null===(t=_.current)||void 0===t||t.focus())},onItemUpdate:e=>{D&&D(e)},onSort:e=>{k&&k(e)}}),w&&e(XT,{type:"error",children:w}),!$&&t(GT,{children:[e(QT,{type:"button",styleType:"secondary",disabled:!!O||b||T(),onClick:e=>{b||(e.preventDefault(),E.current&&E.current.openFileDialog())},children:"Upload files"}),e(ZT,{children:"or drop them here"})]})]})})};export{Qi as C,JT as F,gp as S,dt as _,mp as a};
//# sourceMappingURL=index.b5d4c279.js.map
