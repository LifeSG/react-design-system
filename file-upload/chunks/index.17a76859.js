import{jsx as e,jsxs as t,Fragment as r}from"react/jsx-runtime";import*as n from"react";import o,{createContext as i,useMemo as a,useRef as s,useReducer as l,useEffect as c,useCallback as d,forwardRef as u,useImperativeHandle as h,Fragment as f,useLayoutEffect as p,useState as g,memo as m,useContext as b,isValidElement as v,createRef as y,cloneElement as x,PureComponent as w,version as $,Children as C,lazy as S,Suspense as D,createElement as k}from"react";import{CloudArrowUpFillIcon as E}from"@lifesg/react-icons/cloud-arrow-up-fill";import F,{css as O,isStyledComponent as _,ThemeContext as T,keyframes as I,useTheme as M}from"styled-components";import{ExternalIcon as A}from"@lifesg/react-icons/external";import B,{unstable_batchedUpdates as j,createPortal as z,findDOMNode as R}from"react-dom";import{ICircleFillIcon as L}from"@lifesg/react-icons/i-circle-fill";import{CrossIcon as P}from"@lifesg/react-icons/cross";import{useFloatingTree as N,FloatingTree as W,useFloatingNodeId as H,FloatingNode as Y,useFloating as V,useTransitionStatus as U,useDismiss as K,useInteractions as q,FloatingFocusManager as Z,autoUpdate as G,offset as Q,flip as X,shift as J,limitShift as ee,size as te,useClick as re,useHover as ne,useFocus as oe,FloatingPortal as ie,useTransitionStyles as ae}from"@floating-ui/react";import{ExclamationCircleFillIcon as se}from"@lifesg/react-icons/exclamation-circle-fill";import{ChevronDownIcon as le}from"@lifesg/react-icons/chevron-down";import{ChevronLeftIcon as ce}from"@lifesg/react-icons/chevron-left";import{ChevronRightIcon as de}from"@lifesg/react-icons/chevron-right";import{ArrowRightIcon as ue,PencilIcon as he,EraserIcon as fe,TickCircleFillIcon as pe,ChevronDownIcon as ge}from"@lifesg/react-icons";import{SquareIcon as me}from"@lifesg/react-icons/square";import{SquareFillIcon as be}from"@lifesg/react-icons/square-fill";import{SquareTickFillIcon as ve}from"@lifesg/react-icons/square-tick-fill";import{TickIcon as ye}from"@lifesg/react-icons/tick";import{MagnifierIcon as xe}from"@lifesg/react-icons/magnifier";import{CaretRightIcon as we}from"@lifesg/react-icons/caret-right";import{MinusSquareFillIcon as $e}from"@lifesg/react-icons/minus-square-fill";import{EyeIcon as Ce}from"@lifesg/react-icons/eye";import{EyeSlashIcon as Se}from"@lifesg/react-icons/eye-slash";import{ExclamationTriangleIcon as De}from"@lifesg/react-icons/exclamation-triangle";import{ChevronUpIcon as ke}from"@lifesg/react-icons/chevron-up";import{ArrowRightIcon as Ee}from"@lifesg/react-icons/arrow-right";import{ExclamationTriangleFillIcon as Fe}from"@lifesg/react-icons/exclamation-triangle-fill";import{TickCircleFillIcon as Oe}from"@lifesg/react-icons/tick-circle-fill";import{CircleIcon as _e}from"@lifesg/react-icons/circle";import{CircleDotIcon as Te}from"@lifesg/react-icons/circle-dot";import{BinIcon as Ie}from"@lifesg/react-icons/bin";import{PencilIcon as Me}from"@lifesg/react-icons/pencil";import{DragHandleIcon as Ae}from"@lifesg/react-icons/drag-handle";const Be=i({activeId:void 0,setActiveId:()=>{}});var je="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};function ze(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Re,Le={exports:{}},Pe={exports:{}},Ne={};var We,He,Ye,Ve,Ue,Ke,qe,Ze,Ge,Qe,Xe,Je,et,tt,rt={};
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function nt(){return He||(He=1,"production"===process.env.NODE_ENV?Pe.exports=function(){if(Re)return Ne;Re=1;var e="function"==typeof Symbol&&Symbol.for,t=e?Symbol.for("react.element"):60103,r=e?Symbol.for("react.portal"):60106,n=e?Symbol.for("react.fragment"):60107,o=e?Symbol.for("react.strict_mode"):60108,i=e?Symbol.for("react.profiler"):60114,a=e?Symbol.for("react.provider"):60109,s=e?Symbol.for("react.context"):60110,l=e?Symbol.for("react.async_mode"):60111,c=e?Symbol.for("react.concurrent_mode"):60111,d=e?Symbol.for("react.forward_ref"):60112,u=e?Symbol.for("react.suspense"):60113,h=e?Symbol.for("react.suspense_list"):60120,f=e?Symbol.for("react.memo"):60115,p=e?Symbol.for("react.lazy"):60116,g=e?Symbol.for("react.block"):60121,m=e?Symbol.for("react.fundamental"):60117,b=e?Symbol.for("react.responder"):60118,v=e?Symbol.for("react.scope"):60119;function y(e){if("object"==typeof e&&null!==e){var h=e.$$typeof;switch(h){case t:switch(e=e.type){case l:case c:case n:case i:case o:case u:return e;default:switch(e=e&&e.$$typeof){case s:case d:case p:case f:case a:return e;default:return h}}case r:return h}}}function x(e){return y(e)===c}return Ne.AsyncMode=l,Ne.ConcurrentMode=c,Ne.ContextConsumer=s,Ne.ContextProvider=a,Ne.Element=t,Ne.ForwardRef=d,Ne.Fragment=n,Ne.Lazy=p,Ne.Memo=f,Ne.Portal=r,Ne.Profiler=i,Ne.StrictMode=o,Ne.Suspense=u,Ne.isAsyncMode=function(e){return x(e)||y(e)===l},Ne.isConcurrentMode=x,Ne.isContextConsumer=function(e){return y(e)===s},Ne.isContextProvider=function(e){return y(e)===a},Ne.isElement=function(e){return"object"==typeof e&&null!==e&&e.$$typeof===t},Ne.isForwardRef=function(e){return y(e)===d},Ne.isFragment=function(e){return y(e)===n},Ne.isLazy=function(e){return y(e)===p},Ne.isMemo=function(e){return y(e)===f},Ne.isPortal=function(e){return y(e)===r},Ne.isProfiler=function(e){return y(e)===i},Ne.isStrictMode=function(e){return y(e)===o},Ne.isSuspense=function(e){return y(e)===u},Ne.isValidElementType=function(e){return"string"==typeof e||"function"==typeof e||e===n||e===c||e===i||e===o||e===u||e===h||"object"==typeof e&&null!==e&&(e.$$typeof===p||e.$$typeof===f||e.$$typeof===a||e.$$typeof===s||e.$$typeof===d||e.$$typeof===m||e.$$typeof===b||e.$$typeof===v||e.$$typeof===g)},Ne.typeOf=y,Ne}():Pe.exports=(We||(We=1,"production"!==process.env.NODE_ENV&&function(){var e="function"==typeof Symbol&&Symbol.for,t=e?Symbol.for("react.element"):60103,r=e?Symbol.for("react.portal"):60106,n=e?Symbol.for("react.fragment"):60107,o=e?Symbol.for("react.strict_mode"):60108,i=e?Symbol.for("react.profiler"):60114,a=e?Symbol.for("react.provider"):60109,s=e?Symbol.for("react.context"):60110,l=e?Symbol.for("react.async_mode"):60111,c=e?Symbol.for("react.concurrent_mode"):60111,d=e?Symbol.for("react.forward_ref"):60112,u=e?Symbol.for("react.suspense"):60113,h=e?Symbol.for("react.suspense_list"):60120,f=e?Symbol.for("react.memo"):60115,p=e?Symbol.for("react.lazy"):60116,g=e?Symbol.for("react.block"):60121,m=e?Symbol.for("react.fundamental"):60117,b=e?Symbol.for("react.responder"):60118,v=e?Symbol.for("react.scope"):60119;function y(e){if("object"==typeof e&&null!==e){var h=e.$$typeof;switch(h){case t:var g=e.type;switch(g){case l:case c:case n:case i:case o:case u:return g;default:var m=g&&g.$$typeof;switch(m){case s:case d:case p:case f:case a:return m;default:return h}}case r:return h}}}var x=l,w=c,$=s,C=a,S=t,D=d,k=n,E=p,F=f,O=r,_=i,T=o,I=u,M=!1;function A(e){return y(e)===c}rt.AsyncMode=x,rt.ConcurrentMode=w,rt.ContextConsumer=$,rt.ContextProvider=C,rt.Element=S,rt.ForwardRef=D,rt.Fragment=k,rt.Lazy=E,rt.Memo=F,rt.Portal=O,rt.Profiler=_,rt.StrictMode=T,rt.Suspense=I,rt.isAsyncMode=function(e){return M||(M=!0,console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")),A(e)||y(e)===l},rt.isConcurrentMode=A,rt.isContextConsumer=function(e){return y(e)===s},rt.isContextProvider=function(e){return y(e)===a},rt.isElement=function(e){return"object"==typeof e&&null!==e&&e.$$typeof===t},rt.isForwardRef=function(e){return y(e)===d},rt.isFragment=function(e){return y(e)===n},rt.isLazy=function(e){return y(e)===p},rt.isMemo=function(e){return y(e)===f},rt.isPortal=function(e){return y(e)===r},rt.isProfiler=function(e){return y(e)===i},rt.isStrictMode=function(e){return y(e)===o},rt.isSuspense=function(e){return y(e)===u},rt.isValidElementType=function(e){return"string"==typeof e||"function"==typeof e||e===n||e===c||e===i||e===o||e===u||e===h||"object"==typeof e&&null!==e&&(e.$$typeof===p||e.$$typeof===f||e.$$typeof===a||e.$$typeof===s||e.$$typeof===d||e.$$typeof===m||e.$$typeof===b||e.$$typeof===v||e.$$typeof===g)},rt.typeOf=y}()),rt)),Pe.exports}
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/function ot(){if(Ve)return Ye;Ve=1;var e=Object.getOwnPropertySymbols,t=Object.prototype.hasOwnProperty,r=Object.prototype.propertyIsEnumerable;return Ye=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},r=0;r<10;r++)t["_"+String.fromCharCode(r)]=r;var n=Object.getOwnPropertyNames(t).map((function(e){return t[e]}));if("0123456789"!==n.join(""))return!1;var o={};return"abcdefghijklmnopqrst".split("").forEach((function(e){o[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},o)).join("")}catch(e){return!1}}()?Object.assign:function(n,o){for(var i,a,s=function(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}(n),l=1;l<arguments.length;l++){for(var c in i=Object(arguments[l]))t.call(i,c)&&(s[c]=i[c]);if(e){a=e(i);for(var d=0;d<a.length;d++)r.call(i,a[d])&&(s[a[d]]=i[a[d]])}}return s},Ye}function it(){if(Ke)return Ue;Ke=1;return Ue="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"}function at(){return Ze?qe:(Ze=1,qe=Function.call.bind(Object.prototype.hasOwnProperty))}if("production"!==process.env.NODE_ENV){var st=nt();Le.exports=function(){if(Je)return Xe;Je=1;var e=nt(),t=ot(),r=it(),n=at(),o=function(){if(Qe)return Ge;Qe=1;var e=function(){};if("production"!==process.env.NODE_ENV){var t=it(),r={},n=at();e=function(e){var t="Warning: "+e;"undefined"!=typeof console&&console.error(t);try{throw new Error(t)}catch(e){}}}function o(o,i,a,s,l){if("production"!==process.env.NODE_ENV)for(var c in o)if(n(o,c)){var d;try{if("function"!=typeof o[c]){var u=Error((s||"React class")+": "+a+" type `"+c+"` is invalid; it must be a function, usually from the `prop-types` package, but received `"+typeof o[c]+"`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");throw u.name="Invariant Violation",u}d=o[c](i,c,s,a,null,t)}catch(e){d=e}if(!d||d instanceof Error||e((s||"React class")+": type specification of "+a+" `"+c+"` is invalid; the type checker function must return `null` or an `Error` but returned a "+typeof d+". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."),d instanceof Error&&!(d.message in r)){r[d.message]=!0;var h=l?l():"";e("Failed "+a+" type: "+d.message+(null!=h?h:""))}}}return o.resetWarningCache=function(){"production"!==process.env.NODE_ENV&&(r={})},Ge=o}(),i=function(){};function a(){return null}return"production"!==process.env.NODE_ENV&&(i=function(e){var t="Warning: "+e;"undefined"!=typeof console&&console.error(t);try{throw new Error(t)}catch(e){}}),Xe=function(s,l){var c="function"==typeof Symbol&&Symbol.iterator,d="<<anonymous>>",u={array:g("array"),bigint:g("bigint"),bool:g("boolean"),func:g("function"),number:g("number"),object:g("object"),string:g("string"),symbol:g("symbol"),any:p(a),arrayOf:function(e){return p((function(t,n,o,i,a){if("function"!=typeof e)return new f("Property `"+a+"` of component `"+o+"` has invalid PropType notation inside arrayOf.");var s=t[n];if(!Array.isArray(s))return new f("Invalid "+i+" `"+a+"` of type `"+v(s)+"` supplied to `"+o+"`, expected an array.");for(var l=0;l<s.length;l++){var c=e(s,l,o,i,a+"["+l+"]",r);if(c instanceof Error)return c}return null}))},element:p((function(e,t,r,n,o){var i=e[t];return s(i)?null:new f("Invalid "+n+" `"+o+"` of type `"+v(i)+"` supplied to `"+r+"`, expected a single ReactElement.")})),elementType:p((function(t,r,n,o,i){var a=t[r];return e.isValidElementType(a)?null:new f("Invalid "+o+" `"+i+"` of type `"+v(a)+"` supplied to `"+n+"`, expected a single ReactElement type.")})),instanceOf:function(e){return p((function(t,r,n,o,i){if(!(t[r]instanceof e)){var a=e.name||d;return new f("Invalid "+o+" `"+i+"` of type `"+((s=t[r]).constructor&&s.constructor.name?s.constructor.name:d)+"` supplied to `"+n+"`, expected instance of `"+a+"`.")}var s;return null}))},node:p((function(e,t,r,n,o){return b(e[t])?null:new f("Invalid "+n+" `"+o+"` supplied to `"+r+"`, expected a ReactNode.")})),objectOf:function(e){return p((function(t,o,i,a,s){if("function"!=typeof e)return new f("Property `"+s+"` of component `"+i+"` has invalid PropType notation inside objectOf.");var l=t[o],c=v(l);if("object"!==c)return new f("Invalid "+a+" `"+s+"` of type `"+c+"` supplied to `"+i+"`, expected an object.");for(var d in l)if(n(l,d)){var u=e(l,d,i,a,s+"."+d,r);if(u instanceof Error)return u}return null}))},oneOf:function(e){return Array.isArray(e)?p((function(t,r,n,o,i){for(var a=t[r],s=0;s<e.length;s++)if(h(a,e[s]))return null;var l=JSON.stringify(e,(function(e,t){return"symbol"===y(t)?String(t):t}));return new f("Invalid "+o+" `"+i+"` of value `"+String(a)+"` supplied to `"+n+"`, expected one of "+l+".")})):("production"!==process.env.NODE_ENV&&i(arguments.length>1?"Invalid arguments supplied to oneOf, expected an array, got "+arguments.length+" arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z]).":"Invalid argument supplied to oneOf, expected an array."),a)},oneOfType:function(e){if(!Array.isArray(e))return"production"!==process.env.NODE_ENV&&i("Invalid argument supplied to oneOfType, expected an instance of array."),a;for(var t=0;t<e.length;t++){var o=e[t];if("function"!=typeof o)return i("Invalid argument supplied to oneOfType. Expected an array of check functions, but received "+x(o)+" at index "+t+"."),a}return p((function(t,o,i,a,s){for(var l=[],c=0;c<e.length;c++){var d=(0,e[c])(t,o,i,a,s,r);if(null==d)return null;d.data&&n(d.data,"expectedType")&&l.push(d.data.expectedType)}return new f("Invalid "+a+" `"+s+"` supplied to `"+i+"`"+(l.length>0?", expected one of type ["+l.join(", ")+"]":"")+".")}))},shape:function(e){return p((function(t,n,o,i,a){var s=t[n],l=v(s);if("object"!==l)return new f("Invalid "+i+" `"+a+"` of type `"+l+"` supplied to `"+o+"`, expected `object`.");for(var c in e){var d=e[c];if("function"!=typeof d)return m(o,i,a,c,y(d));var u=d(s,c,o,i,a+"."+c,r);if(u)return u}return null}))},exact:function(e){return p((function(o,i,a,s,l){var c=o[i],d=v(c);if("object"!==d)return new f("Invalid "+s+" `"+l+"` of type `"+d+"` supplied to `"+a+"`, expected `object`.");var u=t({},o[i],e);for(var h in u){var p=e[h];if(n(e,h)&&"function"!=typeof p)return m(a,s,l,h,y(p));if(!p)return new f("Invalid "+s+" `"+l+"` key `"+h+"` supplied to `"+a+"`.\nBad object: "+JSON.stringify(o[i],null,"  ")+"\nValid keys: "+JSON.stringify(Object.keys(e),null,"  "));var g=p(c,h,a,s,l+"."+h,r);if(g)return g}return null}))}};function h(e,t){return e===t?0!==e||1/e==1/t:e!=e&&t!=t}function f(e,t){this.message=e,this.data=t&&"object"==typeof t?t:{},this.stack=""}function p(e){if("production"!==process.env.NODE_ENV)var t={},n=0;function o(o,a,s,c,u,h,p){if(c=c||d,h=h||s,p!==r){if(l){var g=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types");throw g.name="Invariant Violation",g}if("production"!==process.env.NODE_ENV&&"undefined"!=typeof console){var m=c+":"+s;!t[m]&&n<3&&(i("You are manually calling a React.PropTypes validation function for the `"+h+"` prop on `"+c+"`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."),t[m]=!0,n++)}}return null==a[s]?o?null===a[s]?new f("The "+u+" `"+h+"` is marked as required in `"+c+"`, but its value is `null`."):new f("The "+u+" `"+h+"` is marked as required in `"+c+"`, but its value is `undefined`."):null:e(a,s,c,u,h)}var a=o.bind(null,!1);return a.isRequired=o.bind(null,!0),a}function g(e){return p((function(t,r,n,o,i,a){var s=t[r];return v(s)!==e?new f("Invalid "+o+" `"+i+"` of type `"+y(s)+"` supplied to `"+n+"`, expected `"+e+"`.",{expectedType:e}):null}))}function m(e,t,r,n,o){return new f((e||"React class")+": "+t+" type `"+r+"."+n+"` is invalid; it must be a function, usually from the `prop-types` package, but received `"+o+"`.")}function b(e){switch(typeof e){case"number":case"string":case"undefined":return!0;case"boolean":return!e;case"object":if(Array.isArray(e))return e.every(b);if(null===e||s(e))return!0;var t=function(e){var t=e&&(c&&e[c]||e["@@iterator"]);if("function"==typeof t)return t}(e);if(!t)return!1;var r,n=t.call(e);if(t!==e.entries){for(;!(r=n.next()).done;)if(!b(r.value))return!1}else for(;!(r=n.next()).done;){var o=r.value;if(o&&!b(o[1]))return!1}return!0;default:return!1}}function v(e){var t=typeof e;return Array.isArray(e)?"array":e instanceof RegExp?"object":function(e,t){return"symbol"===e||!!t&&("Symbol"===t["@@toStringTag"]||"function"==typeof Symbol&&t instanceof Symbol)}(t,e)?"symbol":t}function y(e){if(null==e)return""+e;var t=v(e);if("object"===t){if(e instanceof Date)return"date";if(e instanceof RegExp)return"regexp"}return t}function x(e){var t=y(e);switch(t){case"array":case"object":return"an "+t;case"boolean":case"date":case"regexp":return"a "+t;default:return t}}return f.prototype=Error.prototype,u.checkPropTypes=o,u.resetWarningCache=o.resetWarningCache,u.PropTypes=u,u},Xe}()(st.isElement,!0)}else Le.exports=function(){if(tt)return et;tt=1;var e=it();function t(){}function r(){}return r.resetWarningCache=t,et=function(){function n(t,r,n,o,i,a){if(a!==e){var s=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw s.name="Invariant Violation",s}}function o(){return n}n.isRequired=n;var i={array:n,bigint:n,bool:n,func:n,number:n,object:n,string:n,symbol:n,any:n,arrayOf:o,element:n,elementType:n,instanceOf:o,node:n,objectOf:o,oneOf:o,oneOfType:o,shape:o,exact:o,checkPropTypes:r,resetWarningCache:t};return i.PropTypes=i,i}}()();var lt=ze(Le.exports);function ct(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(n=Object.getOwnPropertySymbols(e);o<n.length;o++)t.indexOf(n[o])<0&&Object.prototype.propertyIsEnumerable.call(e,n[o])&&(r[n[o]]=e[n[o]])}return r}function dt(e,t,r,n){return new(r||(r=Promise))((function(o,i){function a(e){try{l(n.next(e))}catch(e){i(e)}}function s(e){try{l(n.throw(e))}catch(e){i(e)}}function l(e){var t;e.done?o(e.value):(t=e.value,t instanceof r?t:new r((function(e){e(t)}))).then(a,s)}l((n=n.apply(e,t||[])).next())}))}function ut(e,t){var r,n,o,i,a={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function s(s){return function(l){return function(s){if(r)throw new TypeError("Generator is already executing.");for(;i&&(i=0,s[0]&&(a=0)),a;)try{if(r=1,n&&(o=2&s[0]?n.return:s[0]?n.throw||((o=n.return)&&o.call(n),0):n.next)&&!(o=o.call(n,s[1])).done)return o;switch(n=0,o&&(s=[2&s[0],o.value]),s[0]){case 0:case 1:o=s;break;case 4:return a.label++,{value:s[1],done:!1};case 5:a.label++,n=s[1],s=[0];continue;case 7:s=a.ops.pop(),a.trys.pop();continue;default:if(!(o=a.trys,(o=o.length>0&&o[o.length-1])||6!==s[0]&&2!==s[0])){a=0;continue}if(3===s[0]&&(!o||s[1]>o[0]&&s[1]<o[3])){a.label=s[1];break}if(6===s[0]&&a.label<o[1]){a.label=o[1],o=s;break}if(o&&a.label<o[2]){a.label=o[2],a.ops.push(s);break}o[2]&&a.ops.pop(),a.trys.pop();continue}s=t.call(e,a)}catch(e){s=[6,e],n=0}finally{r=o=0}if(5&s[0])throw s[1];return{value:s[0]?s[1]:void 0,done:!0}}([s,l])}}}function ht(e,t){var r="function"==typeof Symbol&&e[Symbol.iterator];if(!r)return e;var n,o,i=r.call(e),a=[];try{for(;(void 0===t||t-- >0)&&!(n=i.next()).done;)a.push(n.value)}catch(e){o={error:e}}finally{try{n&&!n.done&&(r=i.return)&&r.call(i)}finally{if(o)throw o.error}}return a}function ft(e,t,r){if(r||2===arguments.length)for(var n,o=0,i=t.length;o<i;o++)!n&&o in t||(n||(n=Array.prototype.slice.call(t,0,o)),n[o]=t[o]);return e.concat(n||Array.prototype.slice.call(t))}"function"==typeof SuppressedError&&SuppressedError;var pt=new Map([["aac","audio/aac"],["abw","application/x-abiword"],["arc","application/x-freearc"],["avif","image/avif"],["avi","video/x-msvideo"],["azw","application/vnd.amazon.ebook"],["bin","application/octet-stream"],["bmp","image/bmp"],["bz","application/x-bzip"],["bz2","application/x-bzip2"],["cda","application/x-cdf"],["csh","application/x-csh"],["css","text/css"],["csv","text/csv"],["doc","application/msword"],["docx","application/vnd.openxmlformats-officedocument.wordprocessingml.document"],["eot","application/vnd.ms-fontobject"],["epub","application/epub+zip"],["gz","application/gzip"],["gif","image/gif"],["heic","image/heic"],["heif","image/heif"],["htm","text/html"],["html","text/html"],["ico","image/vnd.microsoft.icon"],["ics","text/calendar"],["jar","application/java-archive"],["jpeg","image/jpeg"],["jpg","image/jpeg"],["js","text/javascript"],["json","application/json"],["jsonld","application/ld+json"],["mid","audio/midi"],["midi","audio/midi"],["mjs","text/javascript"],["mp3","audio/mpeg"],["mp4","video/mp4"],["mpeg","video/mpeg"],["mpkg","application/vnd.apple.installer+xml"],["odp","application/vnd.oasis.opendocument.presentation"],["ods","application/vnd.oasis.opendocument.spreadsheet"],["odt","application/vnd.oasis.opendocument.text"],["oga","audio/ogg"],["ogv","video/ogg"],["ogx","application/ogg"],["opus","audio/opus"],["otf","font/otf"],["png","image/png"],["pdf","application/pdf"],["php","application/x-httpd-php"],["ppt","application/vnd.ms-powerpoint"],["pptx","application/vnd.openxmlformats-officedocument.presentationml.presentation"],["rar","application/vnd.rar"],["rtf","application/rtf"],["sh","application/x-sh"],["svg","image/svg+xml"],["swf","application/x-shockwave-flash"],["tar","application/x-tar"],["tif","image/tiff"],["tiff","image/tiff"],["ts","video/mp2t"],["ttf","font/ttf"],["txt","text/plain"],["vsd","application/vnd.visio"],["wav","audio/wav"],["weba","audio/webm"],["webm","video/webm"],["webp","image/webp"],["woff","font/woff"],["woff2","font/woff2"],["xhtml","application/xhtml+xml"],["xls","application/vnd.ms-excel"],["xlsx","application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"],["xml","application/xml"],["xul","application/vnd.mozilla.xul+xml"],["zip","application/zip"],["7z","application/x-7z-compressed"],["mkv","video/x-matroska"],["mov","video/quicktime"],["msg","application/vnd.ms-outlook"]]);function gt(e,t){var r=function(e){var t=e.name;if(t&&-1!==t.lastIndexOf(".")&&!e.type){var r=t.split(".").pop().toLowerCase(),n=pt.get(r);n&&Object.defineProperty(e,"type",{value:n,writable:!1,configurable:!1,enumerable:!0})}return e}(e);if("string"!=typeof r.path){var n=e.webkitRelativePath;Object.defineProperty(r,"path",{value:"string"==typeof t?t:"string"==typeof n&&n.length>0?n:e.name,writable:!1,configurable:!1,enumerable:!0})}return r}var mt=[".DS_Store","Thumbs.db"];function bt(e){return"object"==typeof e&&null!==e}function vt(e){return $t(e.target.files).map((function(e){return gt(e)}))}function yt(e){return dt(this,void 0,void 0,(function(){return ut(this,(function(t){switch(t.label){case 0:return[4,Promise.all(e.map((function(e){return e.getFile()})))];case 1:return[2,t.sent().map((function(e){return gt(e)}))]}}))}))}function xt(e,t){return dt(this,void 0,void 0,(function(){var r;return ut(this,(function(n){switch(n.label){case 0:return e.items?(r=$t(e.items).filter((function(e){return"file"===e.kind})),"drop"!==t?[2,r]:[4,Promise.all(r.map(Ct))]):[3,2];case 1:return[2,wt(St(n.sent()))];case 2:return[2,wt($t(e.files).map((function(e){return gt(e)})))]}}))}))}function wt(e){return e.filter((function(e){return-1===mt.indexOf(e.name)}))}function $t(e){if(null===e)return[];for(var t=[],r=0;r<e.length;r++){var n=e[r];t.push(n)}return t}function Ct(e){if("function"!=typeof e.webkitGetAsEntry)return Dt(e);var t=e.webkitGetAsEntry();return t&&t.isDirectory?Et(t):Dt(e)}function St(e){return e.reduce((function(e,t){return ft(ft([],ht(e),!1),ht(Array.isArray(t)?St(t):[t]),!1)}),[])}function Dt(e){var t=e.getAsFile();if(!t)return Promise.reject("".concat(e," is not a File"));var r=gt(t);return Promise.resolve(r)}function kt(e){return dt(this,void 0,void 0,(function(){return ut(this,(function(t){return[2,e.isDirectory?Et(e):Ft(e)]}))}))}function Et(e){var t=e.createReader();return new Promise((function(e,r){var n=[];!function o(){var i=this;t.readEntries((function(t){return dt(i,void 0,void 0,(function(){var i,a,s;return ut(this,(function(l){switch(l.label){case 0:if(t.length)return[3,5];l.label=1;case 1:return l.trys.push([1,3,,4]),[4,Promise.all(n)];case 2:return i=l.sent(),e(i),[3,4];case 3:return a=l.sent(),r(a),[3,4];case 4:return[3,6];case 5:s=Promise.all(t.map(kt)),n.push(s),o(),l.label=6;case 6:return[2]}}))}))}),(function(e){r(e)}))}()}))}function Ft(e){return dt(this,void 0,void 0,(function(){return ut(this,(function(t){return[2,new Promise((function(t,r){e.file((function(r){var n=gt(r,e.fullPath);t(n)}),(function(e){r(e)}))}))]}))}))}function Ot(e){return function(e){if(Array.isArray(e))return Bt(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||At(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function _t(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function Tt(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?_t(Object(r),!0).forEach((function(t){It(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):_t(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function It(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function Mt(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==r)return;var n,o,i=[],a=!0,s=!1;try{for(r=r.call(e);!(a=(n=r.next()).done)&&(i.push(n.value),!t||i.length!==t);a=!0);}catch(e){s=!0,o=e}finally{try{a||null==r.return||r.return()}finally{if(s)throw o}}return i}(e,t)||At(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function At(e,t){if(e){if("string"==typeof e)return Bt(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?Bt(e,t):void 0}}function Bt(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}var jt=function(e){e=Array.isArray(e)&&1===e.length?e[0]:e;var t=Array.isArray(e)?"one of ".concat(e.join(", ")):e;return{code:"file-invalid-type",message:"File type must be ".concat(t)}},zt=function(e){return{code:"file-too-large",message:"File is larger than ".concat(e," ").concat(1===e?"byte":"bytes")}},Rt=function(e){return{code:"file-too-small",message:"File is smaller than ".concat(e," ").concat(1===e?"byte":"bytes")}},Lt={code:"too-many-files",message:"Too many files"};function Pt(e,t){var r="application/x-moz-file"===e.type||function(e,t){if(e&&t){var r=Array.isArray(t)?t:t.split(","),n=e.name||"",o=(e.type||"").toLowerCase(),i=o.replace(/\/.*$/,"");return r.some((function(e){var t=e.trim().toLowerCase();return"."===t.charAt(0)?n.toLowerCase().endsWith(t):t.endsWith("/*")?i===t.replace(/\/.*$/,""):o===t}))}return!0}(e,t);return[r,r?null:jt(t)]}function Nt(e,t,r){if(Wt(e.size))if(Wt(t)&&Wt(r)){if(e.size>r)return[!1,zt(r)];if(e.size<t)return[!1,Rt(t)]}else{if(Wt(t)&&e.size<t)return[!1,Rt(t)];if(Wt(r)&&e.size>r)return[!1,zt(r)]}return[!0,null]}function Wt(e){return null!=e}function Ht(e){return"function"==typeof e.isPropagationStopped?e.isPropagationStopped():void 0!==e.cancelBubble&&e.cancelBubble}function Yt(e){return e.dataTransfer?Array.prototype.some.call(e.dataTransfer.types,(function(e){return"Files"===e||"application/x-moz-file"===e})):!!e.target&&!!e.target.files}function Vt(e){e.preventDefault()}function Ut(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];return function(e){for(var r=arguments.length,n=new Array(r>1?r-1:0),o=1;o<r;o++)n[o-1]=arguments[o];return t.some((function(t){return!Ht(e)&&t&&t.apply(void 0,[e].concat(n)),Ht(e)}))}}function Kt(e){return"audio/*"===e||"video/*"===e||"image/*"===e||"text/*"===e||/\w+\/[-+.\w]+/g.test(e)}function qt(e){return/^.*\.[\w]+$/.test(e)}var Zt=["children"],Gt=["open"],Qt=["refKey","role","onKeyDown","onFocus","onBlur","onClick","onDragEnter","onDragOver","onDragLeave","onDrop"],Xt=["refKey","onChange","onClick"];function Jt(e){return function(e){if(Array.isArray(e))return rr(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||tr(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function er(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==r)return;var n,o,i=[],a=!0,s=!1;try{for(r=r.call(e);!(a=(n=r.next()).done)&&(i.push(n.value),!t||i.length!==t);a=!0);}catch(e){s=!0,o=e}finally{try{a||null==r.return||r.return()}finally{if(s)throw o}}return i}(e,t)||tr(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function tr(e,t){if(e){if("string"==typeof e)return rr(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?rr(e,t):void 0}}function rr(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function nr(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function or(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?nr(Object(r),!0).forEach((function(t){ir(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):nr(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function ir(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function ar(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var sr=u((function(e,t){var r=e.children,n=dr(ar(e,Zt)),i=n.open,a=ar(n,Gt);return h(t,(function(){return{open:i}}),[i]),o.createElement(f,null,r(or(or({},a),{},{open:i})))}));sr.displayName="Dropzone";var lr={disabled:!1,getFilesFromEvent:function(e){return dt(this,void 0,void 0,(function(){return ut(this,(function(t){return bt(e)&&bt(e.dataTransfer)?[2,xt(e.dataTransfer,e.type)]:function(e){return bt(e)&&bt(e.target)}(e)?[2,vt(e)]:Array.isArray(e)&&e.every((function(e){return"getFile"in e&&"function"==typeof e.getFile}))?[2,yt(e)]:[2,[]]}))}))},maxSize:1/0,minSize:0,multiple:!0,maxFiles:0,preventDropOnDocument:!0,noClick:!1,noKeyboard:!1,noDrag:!1,noDragEventsBubbling:!1,validator:null,useFsAccessApi:!0,autoFocus:!1};sr.defaultProps=lr,sr.propTypes={children:lt.func,accept:lt.objectOf(lt.arrayOf(lt.string)),multiple:lt.bool,preventDropOnDocument:lt.bool,noClick:lt.bool,noKeyboard:lt.bool,noDrag:lt.bool,noDragEventsBubbling:lt.bool,minSize:lt.number,maxSize:lt.number,maxFiles:lt.number,disabled:lt.bool,getFilesFromEvent:lt.func,onFileDialogCancel:lt.func,onFileDialogOpen:lt.func,useFsAccessApi:lt.bool,autoFocus:lt.bool,onDragEnter:lt.func,onDragLeave:lt.func,onDragOver:lt.func,onDrop:lt.func,onDropAccepted:lt.func,onDropRejected:lt.func,onError:lt.func,validator:lt.func};var cr={isFocused:!1,isFileDialogActive:!1,isDragActive:!1,isDragAccept:!1,isDragReject:!1,acceptedFiles:[],fileRejections:[]};function dr(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=or(or({},lr),e),r=t.accept,n=t.disabled,o=t.getFilesFromEvent,i=t.maxSize,u=t.minSize,h=t.multiple,f=t.maxFiles,p=t.onDragEnter,g=t.onDragLeave,m=t.onDragOver,b=t.onDrop,v=t.onDropAccepted,y=t.onDropRejected,x=t.onFileDialogCancel,w=t.onFileDialogOpen,$=t.useFsAccessApi,C=t.autoFocus,S=t.preventDropOnDocument,D=t.noClick,k=t.noKeyboard,E=t.noDrag,F=t.noDragEventsBubbling,O=t.onError,_=t.validator,T=a((function(){return function(e){if(Wt(e))return Object.entries(e).reduce((function(e,t){var r=Mt(t,2),n=r[0],o=r[1];return[].concat(Ot(e),[n],Ot(o))}),[]).filter((function(e){return Kt(e)||qt(e)})).join(",")}(r)}),[r]),I=a((function(){return function(e){return Wt(e)?[{description:"Files",accept:Object.entries(e).filter((function(e){var t=Mt(e,2),r=t[0],n=t[1],o=!0;return Kt(r)||(console.warn('Skipped "'.concat(r,'" because it is not a valid MIME type. Check https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types/Common_types for a list of valid MIME types.')),o=!1),Array.isArray(n)&&n.every(qt)||(console.warn('Skipped "'.concat(r,'" because an invalid file extension was provided.')),o=!1),o})).reduce((function(e,t){var r=Mt(t,2),n=r[0],o=r[1];return Tt(Tt({},e),{},It({},n,o))}),{})}]:e}(r)}),[r]),M=a((function(){return"function"==typeof w?w:hr}),[w]),A=a((function(){return"function"==typeof x?x:hr}),[x]),B=s(null),j=s(null),z=er(l(ur,cr),2),R=z[0],L=z[1],P=R.isFocused,N=R.isFileDialogActive,W=s("undefined"!=typeof window&&window.isSecureContext&&$&&"showOpenFilePicker"in window),H=function(){!W.current&&N&&setTimeout((function(){j.current&&(j.current.files.length||(L({type:"closeDialog"}),A()))}),300)};c((function(){return window.addEventListener("focus",H,!1),function(){window.removeEventListener("focus",H,!1)}}),[j,N,A,W]);var Y=s([]),V=function(e){B.current&&B.current.contains(e.target)||(e.preventDefault(),Y.current=[])};c((function(){return S&&(document.addEventListener("dragover",Vt,!1),document.addEventListener("drop",V,!1)),function(){S&&(document.removeEventListener("dragover",Vt),document.removeEventListener("drop",V))}}),[B,S]),c((function(){return!n&&C&&B.current&&B.current.focus(),function(){}}),[B,C,n]);var U=d((function(e){O?O(e):console.error(e)}),[O]),K=d((function(e){e.preventDefault(),e.persist(),ae(e),Y.current=[].concat(Jt(Y.current),[e.target]),Yt(e)&&Promise.resolve(o(e)).then((function(t){if(!Ht(e)||F){var r=t.length,n=r>0&&function(e){var t=e.files,r=e.accept,n=e.minSize,o=e.maxSize,i=e.multiple,a=e.maxFiles,s=e.validator;return!(!i&&t.length>1||i&&a>=1&&t.length>a)&&t.every((function(e){var t=Mt(Pt(e,r),1)[0],i=Mt(Nt(e,n,o),1)[0],a=s?s(e):null;return t&&i&&!a}))}({files:t,accept:T,minSize:u,maxSize:i,multiple:h,maxFiles:f,validator:_});L({isDragAccept:n,isDragReject:r>0&&!n,isDragActive:!0,type:"setDraggedFiles"}),p&&p(e)}})).catch((function(e){return U(e)}))}),[o,p,U,F,T,u,i,h,f,_]),q=d((function(e){e.preventDefault(),e.persist(),ae(e);var t=Yt(e);if(t&&e.dataTransfer)try{e.dataTransfer.dropEffect="copy"}catch(e){}return t&&m&&m(e),!1}),[m,F]),Z=d((function(e){e.preventDefault(),e.persist(),ae(e);var t=Y.current.filter((function(e){return B.current&&B.current.contains(e)})),r=t.indexOf(e.target);-1!==r&&t.splice(r,1),Y.current=t,t.length>0||(L({type:"setDraggedFiles",isDragActive:!1,isDragAccept:!1,isDragReject:!1}),Yt(e)&&g&&g(e))}),[B,g,F]),G=d((function(e,t){var r=[],n=[];e.forEach((function(e){var t=er(Pt(e,T),2),o=t[0],a=t[1],s=er(Nt(e,u,i),2),l=s[0],c=s[1],d=_?_(e):null;if(o&&l&&!d)r.push(e);else{var h=[a,c];d&&(h=h.concat(d)),n.push({file:e,errors:h.filter((function(e){return e}))})}})),(!h&&r.length>1||h&&f>=1&&r.length>f)&&(r.forEach((function(e){n.push({file:e,errors:[Lt]})})),r.splice(0)),L({acceptedFiles:r,fileRejections:n,type:"setFiles"}),b&&b(r,n,t),n.length>0&&y&&y(n,t),r.length>0&&v&&v(r,t)}),[L,h,T,u,i,f,b,v,y,_]),Q=d((function(e){e.preventDefault(),e.persist(),ae(e),Y.current=[],Yt(e)&&Promise.resolve(o(e)).then((function(t){Ht(e)&&!F||G(t,e)})).catch((function(e){return U(e)})),L({type:"reset"})}),[o,G,U,F]),X=d((function(){if(W.current){L({type:"openDialog"}),M();var e={multiple:h,types:I};window.showOpenFilePicker(e).then((function(e){return o(e)})).then((function(e){G(e,null),L({type:"closeDialog"})})).catch((function(e){var t;(t=e)instanceof DOMException&&("AbortError"===t.name||t.code===t.ABORT_ERR)?(A(e),L({type:"closeDialog"})):!function(e){return e instanceof DOMException&&("SecurityError"===e.name||e.code===e.SECURITY_ERR)}(e)?U(e):(W.current=!1,j.current?(j.current.value=null,j.current.click()):U(new Error("Cannot open the file picker because the https://developer.mozilla.org/en-US/docs/Web/API/File_System_Access_API is not supported and no <input> was provided.")))}))}else j.current&&(L({type:"openDialog"}),M(),j.current.value=null,j.current.click())}),[L,M,A,$,G,U,I,h]),J=d((function(e){B.current&&B.current.isEqualNode(e.target)&&(" "!==e.key&&"Enter"!==e.key&&32!==e.keyCode&&13!==e.keyCode||(e.preventDefault(),X()))}),[B,X]),ee=d((function(){L({type:"focus"})}),[]),te=d((function(){L({type:"blur"})}),[]),re=d((function(){D||(!function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:window.navigator.userAgent;return function(e){return-1!==e.indexOf("MSIE")||-1!==e.indexOf("Trident/")}(e)||function(e){return-1!==e.indexOf("Edge/")}(e)}()?X():setTimeout(X,0))}),[D,X]),ne=function(e){return n?null:e},oe=function(e){return k?null:ne(e)},ie=function(e){return E?null:ne(e)},ae=function(e){F&&e.stopPropagation()},se=a((function(){return function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.refKey,r=void 0===t?"ref":t,o=e.role,i=e.onKeyDown,a=e.onFocus,s=e.onBlur,l=e.onClick,c=e.onDragEnter,d=e.onDragOver,u=e.onDragLeave,h=e.onDrop,f=ar(e,Qt);return or(or(ir({onKeyDown:oe(Ut(i,J)),onFocus:oe(Ut(a,ee)),onBlur:oe(Ut(s,te)),onClick:ne(Ut(l,re)),onDragEnter:ie(Ut(c,K)),onDragOver:ie(Ut(d,q)),onDragLeave:ie(Ut(u,Z)),onDrop:ie(Ut(h,Q)),role:"string"==typeof o&&""!==o?o:"presentation"},r,B),n||k?{}:{tabIndex:0}),f)}}),[B,J,ee,te,re,K,q,Z,Q,k,E,n]),le=d((function(e){e.stopPropagation()}),[]),ce=a((function(){return function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.refKey,r=void 0===t?"ref":t,n=e.onChange,o=e.onClick,i=ar(e,Xt);return or(or({},ir({accept:T,multiple:h,type:"file",style:{display:"none"},onChange:ne(Ut(n,Q)),onClick:ne(Ut(o,le)),tabIndex:-1},r,j)),i)}}),[j,r,h,Q,n]);return or(or({},R),{},{isFocused:P&&!n,getRootProps:se,getInputProps:ce,rootRef:B,inputRef:j,open:ne(X)})}function ur(e,t){switch(t.type){case"focus":return or(or({},e),{},{isFocused:!0});case"blur":return or(or({},e),{},{isFocused:!1});case"openDialog":return or(or({},cr),{},{isFileDialogActive:!0});case"closeDialog":return or(or({},e),{},{isFileDialogActive:!1});case"setDraggedFiles":return or(or({},e),{},{isDragActive:t.isDragActive,isDragAccept:t.isDragAccept,isDragReject:t.isDragReject});case"setFiles":return or(or({},e),{},{acceptedFiles:t.acceptedFiles,fileRejections:t.fileRejections});case"reset":return or({},cr);default:return e}}function hr(){}var fr=Array.isArray,pr="object"==typeof je&&je&&je.Object===Object&&je,gr=pr,mr="object"==typeof self&&self&&self.Object===Object&&self,br=gr||mr||Function("return this")(),vr=br.Symbol,yr=vr,xr=Object.prototype,wr=xr.hasOwnProperty,$r=xr.toString,Cr=yr?yr.toStringTag:void 0;var Sr=function(e){var t=wr.call(e,Cr),r=e[Cr];try{e[Cr]=void 0;var n=!0}catch(e){}var o=$r.call(e);return n&&(t?e[Cr]=r:delete e[Cr]),o},Dr=Object.prototype.toString;var kr=Sr,Er=function(e){return Dr.call(e)},Fr=vr?vr.toStringTag:void 0;var Or=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":Fr&&Fr in Object(e)?kr(e):Er(e)};var _r=function(e){return null!=e&&"object"==typeof e},Tr=Or,Ir=_r;var Mr=function(e){return"symbol"==typeof e||Ir(e)&&"[object Symbol]"==Tr(e)},Ar=fr,Br=Mr,jr=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,zr=/^\w*$/;var Rr=function(e,t){if(Ar(e))return!1;var r=typeof e;return!("number"!=r&&"symbol"!=r&&"boolean"!=r&&null!=e&&!Br(e))||(zr.test(e)||!jr.test(e)||null!=t&&e in Object(t))};var Lr=function(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)},Pr=Or,Nr=Lr;var Wr,Hr=function(e){if(!Nr(e))return!1;var t=Pr(e);return"[object Function]"==t||"[object GeneratorFunction]"==t||"[object AsyncFunction]"==t||"[object Proxy]"==t},Yr=br["__core-js_shared__"],Vr=(Wr=/[^.]+$/.exec(Yr&&Yr.keys&&Yr.keys.IE_PROTO||""))?"Symbol(src)_1."+Wr:"";var Ur=function(e){return!!Vr&&Vr in e},Kr=Function.prototype.toString;var qr=function(e){if(null!=e){try{return Kr.call(e)}catch(e){}try{return e+""}catch(e){}}return""},Zr=Hr,Gr=Ur,Qr=Lr,Xr=qr,Jr=/^\[object .+?Constructor\]$/,en=Function.prototype,tn=Object.prototype,rn=en.toString,nn=tn.hasOwnProperty,on=RegExp("^"+rn.call(nn).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");var an=function(e,t){return null==e?void 0:e[t]},sn=function(e){return!(!Qr(e)||Gr(e))&&(Zr(e)?on:Jr).test(Xr(e))},ln=an;var cn=function(e,t){var r=ln(e,t);return sn(r)?r:void 0},dn=cn(Object,"create"),un=dn;var hn=function(){this.__data__=un?un(null):{},this.size=0};var fn=function(e){var t=this.has(e)&&delete this.__data__[e];return this.size-=t?1:0,t},pn=dn,gn=Object.prototype.hasOwnProperty;var mn=function(e){var t=this.__data__;if(pn){var r=t[e];return"__lodash_hash_undefined__"===r?void 0:r}return gn.call(t,e)?t[e]:void 0},bn=dn,vn=Object.prototype.hasOwnProperty;var yn=function(e){var t=this.__data__;return bn?void 0!==t[e]:vn.call(t,e)},xn=dn;var wn=function(e,t){var r=this.__data__;return this.size+=this.has(e)?0:1,r[e]=xn&&void 0===t?"__lodash_hash_undefined__":t,this},$n=hn,Cn=fn,Sn=mn,Dn=yn,kn=wn;function En(e){var t=-1,r=null==e?0:e.length;for(this.clear();++t<r;){var n=e[t];this.set(n[0],n[1])}}En.prototype.clear=$n,En.prototype.delete=Cn,En.prototype.get=Sn,En.prototype.has=Dn,En.prototype.set=kn;var Fn=En;var On=function(){this.__data__=[],this.size=0};var _n=function(e,t){return e===t||e!=e&&t!=t},Tn=_n;var In=function(e,t){for(var r=e.length;r--;)if(Tn(e[r][0],t))return r;return-1},Mn=In,An=Array.prototype.splice;var Bn=function(e){var t=this.__data__,r=Mn(t,e);return!(r<0)&&(r==t.length-1?t.pop():An.call(t,r,1),--this.size,!0)},jn=In;var zn=function(e){var t=this.__data__,r=jn(t,e);return r<0?void 0:t[r][1]},Rn=In;var Ln=function(e){return Rn(this.__data__,e)>-1},Pn=In;var Nn=function(e,t){var r=this.__data__,n=Pn(r,e);return n<0?(++this.size,r.push([e,t])):r[n][1]=t,this},Wn=On,Hn=Bn,Yn=zn,Vn=Ln,Un=Nn;function Kn(e){var t=-1,r=null==e?0:e.length;for(this.clear();++t<r;){var n=e[t];this.set(n[0],n[1])}}Kn.prototype.clear=Wn,Kn.prototype.delete=Hn,Kn.prototype.get=Yn,Kn.prototype.has=Vn,Kn.prototype.set=Un;var qn=Kn,Zn=cn(br,"Map"),Gn=Fn,Qn=qn,Xn=Zn;var Jn=function(e){var t=typeof e;return"string"==t||"number"==t||"symbol"==t||"boolean"==t?"__proto__"!==e:null===e};var eo=function(e,t){var r=e.__data__;return Jn(t)?r["string"==typeof t?"string":"hash"]:r.map},to=eo;var ro=function(e){var t=to(this,e).delete(e);return this.size-=t?1:0,t},no=eo;var oo=function(e){return no(this,e).get(e)},io=eo;var ao=function(e){return io(this,e).has(e)},so=eo;var lo=function(e,t){var r=so(this,e),n=r.size;return r.set(e,t),this.size+=r.size==n?0:1,this},co=function(){this.size=0,this.__data__={hash:new Gn,map:new(Xn||Qn),string:new Gn}},uo=ro,ho=oo,fo=ao,po=lo;function go(e){var t=-1,r=null==e?0:e.length;for(this.clear();++t<r;){var n=e[t];this.set(n[0],n[1])}}go.prototype.clear=co,go.prototype.delete=uo,go.prototype.get=ho,go.prototype.has=fo,go.prototype.set=po;var mo=go,bo=mo;function vo(e,t){if("function"!=typeof e||null!=t&&"function"!=typeof t)throw new TypeError("Expected a function");var r=function(){var n=arguments,o=t?t.apply(this,n):n[0],i=r.cache;if(i.has(o))return i.get(o);var a=e.apply(this,n);return r.cache=i.set(o,a)||i,a};return r.cache=new(vo.Cache||bo),r}vo.Cache=bo;var yo=vo;var xo=function(e){var t=yo(e,(function(e){return 500===r.size&&r.clear(),e})),r=t.cache;return t},wo=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,$o=/\\(\\)?/g,Co=xo((function(e){var t=[];return 46===e.charCodeAt(0)&&t.push(""),e.replace(wo,(function(e,r,n,o){t.push(n?o.replace($o,"$1"):r||e)})),t}));var So=function(e,t){for(var r=-1,n=null==e?0:e.length,o=Array(n);++r<n;)o[r]=t(e[r],r,e);return o},Do=fr,ko=Mr,Eo=vr?vr.prototype:void 0,Fo=Eo?Eo.toString:void 0;var Oo=function e(t){if("string"==typeof t)return t;if(Do(t))return So(t,e)+"";if(ko(t))return Fo?Fo.call(t):"";var r=t+"";return"0"==r&&1/t==-1/0?"-0":r},_o=Oo;var To=fr,Io=Rr,Mo=Co,Ao=function(e){return null==e?"":_o(e)};var Bo=function(e,t){return To(e)?e:Io(e,t)?[e]:Mo(Ao(e))},jo=Mr;var zo=function(e){if("string"==typeof e||jo(e))return e;var t=e+"";return"0"==t&&1/e==-1/0?"-0":t},Ro=Bo,Lo=zo;var Po=function(e,t){for(var r=0,n=(t=Ro(t,e)).length;null!=e&&r<n;)e=e[Lo(t[r++])];return r&&r==n?e:void 0},No=Po;var Wo=function(e,t,r){var n=null==e?void 0:No(e,t);return void 0===n?r:n},Ho=ze(Wo);const Yo=(e,t,r)=>Ho(r,t)||Ho(e,t),Vo=(e,t)=>{const r=t||e.defaultValue;return Ho(e.collections,r)},Uo={collections:{default:{"width-005":.5,"width-010":1,"width-020":2,"width-040":4,solid:"solid"}},defaultValue:"default"},Ko=e=>t=>{var r;const n=t.theme,o=Vo(Uo,null==n?void 0:n.borderScheme);return(null===(r=null==n?void 0:n.overrides)||void 0===r?void 0:r.border)?`${Yo(o,e,n.overrides.border)}px`:`${o[e]}px`},qo={"width-005":Ko("width-005"),"width-010":Ko("width-010"),"width-020":Ko("width-020"),"width-040":Ko("width-040"),solid:(Zo="solid",e=>{var t;const r=e.theme,n=Vo(Uo,null==r?void 0:r.borderScheme),o=(null===(t=null==r?void 0:r.overrides)||void 0===t?void 0:t.border)?Yo(n,Zo,r.overrides.border):n[Zo];return"function"==typeof o?o(e):o})};var Zo;const Go={"brand-10":"#2C0C0B","brand-20":"#4C1513","brand-30":"#6C1D1B","brand-40":"#922825","brand-50":"#BF3431","brand-60":"#F15D5A","brand-70":"#F69491","brand-80":"#FABAB7","brand-90":"#FCD7D2","brand-95":"#FFEBE7","brand-100":"#FFF6F4","primary-10":"#1A122C","primary-20":"#2F1F4D","primary-30":"#422D6E","primary-40":"#5B3D97","primary-50":"#7654BC","primary-60":"#9A82CD","primary-70":"#B7A7D8","primary-80":"#CFC5E5","primary-90":"#E3DDF0","primary-95":"#F0EDF7","primary-100":"#F9F8FC","secondary-10":"#0E1723","secondary-20":"#18293D","secondary-30":"#233A57","secondary-40":"#305078","secondary-50":"#4B6A8F","secondary-60":"#7B91A9","secondary-70":"#A1B1C3","secondary-80":"#C1CBD7","secondary-90":"#DBE1E8","secondary-95":"#EBEFF2","secondary-100":"#F7F8FA","neutral-10":"#161616","neutral-20":"#282828","neutral-30":"#393939","neutral-40":"#4E4E4E","neutral-50":"#686868","neutral-60":"#8E8E8E","neutral-70":"#AFAFB0","neutral-80":"#C7CACA","neutral-90":"#DDE1E2","neutral-95":"#EDEFEF","neutral-100":"#F9F9F9","success-10":"#081A0F","success-20":"#0E2D1B","success-30":"#154126","success-40":"#1C5A34","success-50":"#257645","success-60":"#44A068","success-70":"#64C189","success-80":"#80DCA5","success-90":"#B4ECCB","success-95":"#D5F6E2","success-100":"#EFFCF4","warning-10":"#221302","warning-20":"#3B2204","warning-30":"#543106","warning-40":"#744408","warning-50":"#98590C","warning-60":"#D07A13","warning-70":"#E4A244","warning-80":"#F5C26C","warning-90":"#FADBA6","warning-95":"#FCECD4","warning-100":"#FDF7F0","error-10":"#330505","error-20":"#550808","error-30":"#750C0C","error-40":"#9E130F","error-50":"#CB2213","error-60":"#DE6C6C","error-70":"#E89B9B","error-80":"#EFBEBE","error-90":"#F5D9D9","error-95":"#F9ECEC","error-100":"#FCF7F7","info-10":"#021824","info-20":"#032B3F","info-30":"#053D59","info-40":"#06547B","info-50":"#176E9B","info-60":"#5296BE","info-70":"#82B5DA","info-80":"#ACCFE7","info-90":"#CCE3F1","info-95":"#E3F1F8","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000","primary-inverse":"#FEAB10"},Qo={"brand-10":"#1F1221","brand-20":"#371F3B","brand-30":"#4E2C53","brand-40":"#6B3E73","brand-50":"#8D5197","brand-60":"#FF3399","brand-70":"#FF88C4","brand-80":"#FFB3D9","brand-90":"#FFD4E9","brand-95":"#FFE8F3","brand-100":"#FFF8FC","primary-10":"#1F1221","primary-20":"#371F3B","primary-30":"#4E2C53","primary-40":"#6B3E73","primary-50":"#8D5197","primary-60":"#B07DB7","primary-70":"#C7A3CC","primary-80":"#D9C2DD","primary-90":"#E9DBEB","primary-95":"#F3ECF4","primary-100":"#FAF7FA","secondary-10":"#2D091B","secondary-20":"#4D0F2E","secondary-30":"#6B1540","secondary-40":"#931D58","secondary-50":"#C02673","secondary-60":"#FF409F","secondary-70":"#FF88C4","secondary-80":"#FFB3D9","secondary-90":"#FFD4E9","secondary-95":"#FFE8F3","secondary-100":"#FFF8FC","neutral-10":"#161616","neutral-20":"#282828","neutral-30":"#393939","neutral-40":"#4E4E4E","neutral-50":"#686868","neutral-60":"#8E8E8E","neutral-70":"#AFAFB0","neutral-80":"#C7CACA","neutral-90":"#DDE1E2","neutral-95":"#EDEFEF","neutral-100":"#F9F9F9","success-10":"#081A0F","success-20":"#0E2D1B","success-30":"#154126","success-40":"#1C5A34","success-50":"#257645","success-60":"#44A068","success-70":"#64C189","success-80":"#80DCA5","success-90":"#B4ECCB","success-95":"#D5F6E2","success-100":"#EFFCF4","warning-10":"#221302","warning-20":"#3B2204","warning-30":"#543106","warning-40":"#744408","warning-50":"#98590C","warning-60":"#D07A13","warning-70":"#E4A244","warning-80":"#F5C26C","warning-90":"#FADBA6","warning-95":"#FCECD4","warning-100":"#FDF7F0","error-10":"#330505","error-20":"#550808","error-30":"#750C0C","error-40":"#9E130F","error-50":"#CB2213","error-60":"#DE6C6C","error-70":"#E89B9B","error-80":"#EFBEBE","error-90":"#F5D9D9","error-95":"#F9ECEC","error-100":"#FCF7F7","info-10":"#021824","info-20":"#032B3F","info-30":"#053D59","info-40":"#06547B","info-50":"#176E9B","info-60":"#5296BE","info-70":"#82B5DA","info-80":"#ACCFE7","info-90":"#CCE3F1","info-95":"#E3F1F8","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000","primary-inverse":"#FEAB10"},Xo={"brand-10":"#2C0C0B","brand-20":"#4C1513","brand-30":"#6C1D1B","brand-40":"#922825","brand-50":"#BF3431","brand-60":"#F15D5A","brand-70":"#F69491","brand-80":"#FABAB7","brand-90":"#FCD7D2","brand-95":"#FFEBE7","brand-100":"#FFF6F4","primary-10":"#001731","primary-20":"#002752","primary-30":"#003874","primary-40":"#004D9F","primary-50":"#1768BE","primary-60":"#3C91EC","primary-70":"#6CB4FF","primary-80":"#A5CDFF","primary-90":"#CFE1FE","primary-95":"#E8F0FE","primary-100":"#F7F9FF","secondary-10":"#131529","secondary-20":"#222547","secondary-30":"#2F3565","secondary-40":"#42498B","secondary-50":"#5B62A7","secondary-60":"#858CBD","secondary-70":"#A8ADCF","secondary-80":"#C6C9E0","secondary-90":"#DDDFEC","secondary-95":"#EDEEF5","secondary-100":"#F8F8FB","neutral-10":"#161616","neutral-20":"#282828","neutral-30":"#393939","neutral-40":"#4E4E4E","neutral-50":"#686868","neutral-60":"#8E8E8E","neutral-70":"#AFAFB0","neutral-80":"#C7CACA","neutral-90":"#DDE1E2","neutral-95":"#EDEFEF","neutral-100":"#F9F9F9","success-10":"#081A0F","success-20":"#0E2D1B","success-30":"#154126","success-40":"#1C5A34","success-50":"#257645","success-60":"#44A068","success-70":"#64C189","success-80":"#80DCA5","success-90":"#B4ECCB","success-95":"#D5F6E2","success-100":"#EFFCF4","warning-10":"#221302","warning-20":"#3B2204","warning-30":"#543106","warning-40":"#744408","warning-50":"#98590C","warning-60":"#D07A13","warning-70":"#E4A244","warning-80":"#F5C26C","warning-90":"#FADBA6","warning-95":"#FCECD4","warning-100":"#FDF7F0","error-10":"#330505","error-20":"#550808","error-30":"#750C0C","error-40":"#9E130F","error-50":"#CB2213","error-60":"#DE6C6C","error-70":"#E89B9B","error-80":"#EFBEBE","error-90":"#F5D9D9","error-95":"#F9ECEC","error-100":"#FCF7F7","info-10":"#021824","info-20":"#032B3F","info-30":"#053D59","info-40":"#06547B","info-50":"#176E9B","info-60":"#5296BE","info-70":"#82B5DA","info-80":"#ACCFE7","info-90":"#CCE3F1","info-95":"#E3F1F8","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000","primary-inverse":"#FEAB10"},Jo={"brand-10":"#2C0C0B","brand-20":"#4C1513","brand-30":"#6C1D1B","brand-40":"#922825","brand-50":"#BF3431","brand-60":"#F15D5A","brand-70":"#F69491","brand-80":"#FABAB7","brand-90":"#FCD7D2","brand-95":"#FFEBE7","brand-100":"#FFF6F4","primary-10":"#0011924","primary-20":"#032B40","primary-30":"#043D5A","primary-40":"#05547B","primary-50":"#096EA1","primary-60":"#2098D3","primary-70":"#5CB9E8","primary-80":"#8BD3F6","primary-90":"#BEE6FA","primary-95":"#E2F2FA","primary-100":"#F4FAFC","secondary-10":"#131529","secondary-20":"#222547","secondary-30":"#2F3565","secondary-40":"#42498B","secondary-50":"#5B62A7","secondary-60":"#858CBD","secondary-70":"#A8ADCF","secondary-80":"#C6C9E0","secondary-90":"#DDDFEC","secondary-95":"#EDEEF5","secondary-100":"#F8F8FB","neutral-10":"#161616","neutral-20":"#282828","neutral-30":"#393939","neutral-40":"#4E4E4E","neutral-50":"#686868","neutral-60":"#8E8E8E","neutral-70":"#AFAFB0","neutral-80":"#C7CACA","neutral-90":"#DDE1E2","neutral-95":"#EDEFEF","neutral-100":"#F9F9F9","success-10":"#081A0F","success-20":"#0E2D1B","success-30":"#154126","success-40":"#1C5A34","success-50":"#257645","success-60":"#44A068","success-70":"#64C189","success-80":"#80DCA5","success-90":"#B4ECCB","success-95":"#D5F6E2","success-100":"#EFFCF4","warning-10":"#221302","warning-20":"#3B2204","warning-30":"#543106","warning-40":"#744408","warning-50":"#98590C","warning-60":"#D07A13","warning-70":"#E4A244","warning-80":"#F5C26C","warning-90":"#FADBA6","warning-95":"#FCECD4","warning-100":"#FDF7F0","error-10":"#330505","error-20":"#550808","error-30":"#750C0C","error-40":"#9E130F","error-50":"#CB2213","error-60":"#DE6C6C","error-70":"#E89B9B","error-80":"#EFBEBE","error-90":"#F5D9D9","error-95":"#F9ECEC","error-100":"#FCF7F7","info-10":"#021824","info-20":"#032B3F","info-30":"#053D59","info-40":"#06547B","info-50":"#176E9B","info-60":"#5296BE","info-70":"#82B5DA","info-80":"#ACCFE7","info-90":"#CCE3F1","info-95":"#E3F1F8","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000","primary-inverse":"#FEAB10"},ei={"brand-10":"#001A19","brand-20":"#002D2B","brand-30":"#00413D","brand-40":"#005954","brand-50":"#00756F","brand-60":"#03A098","brand-70":"#55BFBA","brand-80":"#92D6D2","brand-90":"#BFE7E5","brand-95":"#DDF2F1","brand-100":"#F4FBFA","primary-10":"#09191D","primary-20":"#102B34","primary-30":"#173D49","primary-40":"#205666","primary-50":"#2A7086","primary-60":"#5D97A9","primary-70":"#8CB6C2","primary-80":"#B2CED6","primary-90":"#D1E2E7","primary-95":"#E8F0F3","primary-100":"#F7FAFB","secondary-10":"#001731","secondary-20":"#002752","secondary-30":"#003874","secondary-40":"#004D9F","secondary-50":"#5B62A7","secondary-60":"#858CBD","secondary-70":"#A8ADCF","secondary-80":"#C6C9E0","secondary-90":"#DDDFEC","secondary-95":"#EDEEF5","secondary-100":"#F8F8FB","neutral-10":"#161616","neutral-20":"#282828","neutral-30":"#393939","neutral-40":"#4E4E4E","neutral-50":"#686868","neutral-60":"#8E8E8E","neutral-70":"#AFAFB0","neutral-80":"#C7CACA","neutral-90":"#DDE1E2","neutral-95":"#EDEFEF","neutral-100":"#F9F9F9","success-10":"#081A0F","success-20":"#0E2D1B","success-30":"#154126","success-40":"#1C5A34","success-50":"#257645","success-60":"#44A068","success-70":"#64C189","success-80":"#80DCA5","success-90":"#B4ECCB","success-95":"#D5F6E2","success-100":"#EFFCF4","warning-10":"#221302","warning-20":"#3B2204","warning-30":"#543106","warning-40":"#744408","warning-50":"#98590C","warning-60":"#D07A13","warning-70":"#E4A244","warning-80":"#F5C26C","warning-90":"#FADBA6","warning-95":"#FCECD4","warning-100":"#FDF7F0","error-10":"#330505","error-20":"#550808","error-30":"#750C0C","error-40":"#9E130F","error-50":"#CB2213","error-60":"#DE6C6C","error-70":"#E89B9B","error-80":"#EFBEBE","error-90":"#F5D9D9","error-95":"#F9ECEC","error-100":"#FCF7F7","info-10":"#021824","info-20":"#032B3F","info-30":"#053D59","info-40":"#06547B","info-50":"#176E9B","info-60":"#5296BE","info-70":"#82B5DA","info-80":"#ACCFE7","info-90":"#CCE3F1","info-95":"#E3F1F8","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000","primary-inverse":"#FEAB10"},ti={"brand-10":"#881317","brand-20":"#B5191E","brand-30":"#B5040A","brand-40":"#D0333F","brand-50":"#DC666F","brand-60":"#E28087","brand-70":"#E7999F","brand-80":"#EDB3B7","brand-90":"#F3CCCF","brand-95":"#F9E6E7","brand-100":"#FCF2F3","primary-10":"#000000","primary-20":"#191919","primary-30":"#333333","primary-40":"#4D4D4D","primary-50":"#666666","primary-60":"#808080","primary-70":"#999999","primary-80":"#B3B3B3","primary-90":"#E6E6E6","primary-95":"#F7F7F7","primary-100":"#FFFFFF","secondary-10":"#19151D","secondary-20":"#2B2533","secondary-30":"#3E3649","secondary-40":"#564A64","secondary-50":"#6F637D","secondary-60":"#948B9F","secondary-70":"#B3ACBB","secondary-80":"#CCC8D2","secondary-90":"#E1DEE4","secondary-95":"#EFEEF1","secondary-100":"#F9F8F9","neutral-10":"#000000","neutral-20":"#191919","neutral-30":"#333333","neutral-40":"#4D4D4D","neutral-50":"#666666","neutral-60":"#808080","neutral-70":"#999999","neutral-80":"#B3B3B3","neutral-90":"#E6E6E6","neutral-95":"#F7F7F7","neutral-100":"#FFFFFF","success-10":"#081A0F","success-20":"#0E2D1B","success-30":"#154126","success-40":"#1C5A34","success-50":"#257645","success-60":"#44A068","success-70":"#64C189","success-80":"#80DCA5","success-90":"#B4ECCB","success-95":"#D5F6E2","success-100":"#EFFCF4","warning-10":"#221302","warning-20":"#3B2204","warning-30":"#543106","warning-40":"#744408","warning-50":"#98590C","warning-60":"#D07A13","warning-70":"#E4A244","warning-80":"#F5C26C","warning-90":"#FADBA6","warning-95":"#FCECD4","warning-100":"#FDF7F0","error-10":"#330505","error-20":"#550808","error-30":"#750C0C","error-40":"#9E130F","error-50":"#CB2213","error-60":"#DE6C6C","error-70":"#E89B9B","error-80":"#EFBEBE","error-90":"#F5D9D9","error-95":"#F9ECEC","error-100":"#FCF7F7","info-10":"#021824","info-20":"#032B3F","info-30":"#053D59","info-40":"#06547B","info-50":"#176E9B","info-60":"#5296BE","info-70":"#82B5DA","info-80":"#ACCFE7","info-90":"#CCE3F1","info-95":"#E3F1F8","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000","primary-inverse":"#FEAB10"},ri={"brand-10":"#0E123A","brand-20":"#191E65","brand-30":"#232B90","brand-40":"#303BC5","brand-50":"#494CFF","brand-60":"#AD6EFF","brand-70":"#AEA4FF","brand-80":"#C5C4FF","brand-90":"#DDDCFF","brand-95":"#EDECFF","brand-100":"#F8F8FF","primary-10":"#10152B","primary-20":"#1C254B","primary-30":"#28356C","primary-40":"#38489A","primary-50":"#4D5AD7","primary-60":"#7487F2","primary-70":"#9AAAFC","primary-80":"#BDC7FD","primary-90":"#DADFFB","primary-95":"#ECEEFE","primary-100":"#F7F8FF","secondary-10":"#19151D","secondary-20":"#2B2533","secondary-30":"#3E3649","secondary-40":"#564A64","secondary-50":"#6F637D","secondary-60":"#948B9F","secondary-70":"#B3ACBB","secondary-80":"#CCC8D2","secondary-90":"#E1DEE4","secondary-95":"#EFEEF1","secondary-100":"#F9F8F9","neutral-10":"#161616","neutral-20":"#282828","neutral-30":"#393939","neutral-40":"#4E4E4E","neutral-50":"#686868","neutral-60":"#8E8E8E","neutral-70":"#AFAFB0","neutral-80":"#C7CACA","neutral-90":"#DDE1E2","neutral-95":"#EDEFEF","neutral-100":"#F9F9F9","success-10":"#081A0F","success-20":"#0E2D1B","success-30":"#154126","success-40":"#1C5A34","success-50":"#257645","success-60":"#44A068","success-70":"#64C189","success-80":"#80DCA5","success-90":"#B4ECCB","success-95":"#D5F6E2","success-100":"#EFFCF4","warning-10":"#221302","warning-20":"#3B2204","warning-30":"#543106","warning-40":"#744408","warning-50":"#98590C","warning-60":"#D07A13","warning-70":"#E4A244","warning-80":"#F5C26C","warning-90":"#FADBA6","warning-95":"#FCECD4","warning-100":"#FDF7F0","error-10":"#330505","error-20":"#550808","error-30":"#750C0C","error-40":"#9E130F","error-50":"#CB2213","error-60":"#DE6C6C","error-70":"#E89B9B","error-80":"#EFBEBE","error-90":"#F5D9D9","error-95":"#F9ECEC","error-100":"#FCF7F7","info-10":"#021824","info-20":"#032B3F","info-30":"#053D59","info-40":"#06547B","info-50":"#176E9B","info-60":"#5296BE","info-70":"#82B5DA","info-80":"#ACCFE7","info-90":"#CCE3F1","info-95":"#E3F1F8","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000","primary-inverse":"#FEAB10"},ni={"brand-10":"#170F39","brand-20":"#281C62","brand-30":"#38268B","brand-40":"#4D34BF","brand-50":"#5735DF","brand-60":"#9986F9","brand-70":"#B2A5F8","brand-80":"#CDC2FA","brand-90":"#E2DCFC","brand-95":"#EFEDFE","brand-100":"#FAF8FD","primary-10":"#170F39","primary-20":"#281C62","primary-30":"#38268B","primary-40":"#4D34BF","primary-50":"#5735DF","primary-60":"#9986F9","primary-70":"#B2A5F8","primary-80":"#CDC2FA","primary-90":"#E2DCFC","primary-95":"#EFEDFE","primary-100":"#FAF8FD","secondary-10":"#251204","secondary-20":"#401F08","secondary-30":"#5B2C0B","secondary-40":"#7E3D0F","secondary-50":"#B04900","secondary-60":"#E26E1C","secondary-70":"#FF9445","secondary-80":"#FFBB8E","secondary-90":"#FFD9BF","secondary-95":"#FFECDF","secondary-100":"#FFF8F3","neutral-10":"#161616","neutral-20":"#282828","neutral-30":"#393939","neutral-40":"#4E4E4E","neutral-50":"#686868","neutral-60":"#8E8E8E","neutral-70":"#AFAFB0","neutral-80":"#C7CACA","neutral-90":"#DDE1E2","neutral-95":"#EDEFEF","neutral-100":"#F9F9F9","success-10":"#031B15","success-20":"#082D24","success-30":"#094134","success-40":"#0D5947","success-50":"#10755E","success-60":"#16A181","success-70":"#1EC59D","success-80":"#6FDDC2","success-90":"#AFECDE","success-95":"#D5F5ED","success-100":"#F1FCF9","warning-10":"#1F1500","warning-20":"#362500","warning-30":"#4D3501","warning-40":"#6A4801","warning-50":"#8B6001","warning-60":"#BF8301","warning-70":"#EAA102","warning-80":"#FFBF34","warning-90":"#FFDC8F","warning-95":"#FFEDC7","warning-100":"#FFF8EA","error-10":"#270F10","error-20":"#441B1B","error-30":"#612627","error-40":"#853535","error-50":"#AF4546","error-60":"#EC6162","error-70":"#F29696","error-80":"#F7BBBC","error-90":"#FAD8D8","error-95":"#FCEAEA","error-100":"#FEF7F7","info-10":"#0F1627","info-20":"#1B2745","info-30":"#273763","info-40":"#354D88","info-50":"#4665B3","info-60":"#618AF6","info-70":"#8DADFF","info-80":"#B4C9FF","info-90":"#D3DFFF","info-95":"#E9EFFF","info-100":"#F5F8FF",white:"#FFFFFF",black:"#000000","primary-inverse":"#FEAB10"},oi={"brand-10":"#0E113C","brand-20":"#191E67","brand-30":"#232A92","brand-40":"#233FC2","brand-50":"#135CEA","brand-60":"#378FFB","brand-70":"#71B3FD","brand-80":"#9DCFFE","brand-90":"#C1E5FF","brand-95":"#DCF1FF","brand-100":"#F3FAFF","primary-10":"#0E113C","primary-20":"#191E67","primary-30":"#232A92","primary-40":"#233FC2","primary-50":"#135CEA","primary-60":"#378FFB","primary-70":"#71B3FD","primary-80":"#9DCFFE","primary-90":"#C1E5FF","primary-95":"#DCF1FF","primary-100":"#F3FAFF","secondary-10":"#34001F","secondary-20":"#540033","secondary-30":"#730045","secondary-40":"#9D0054","secondary-50":"#C61C64","secondary-60":"#DE6792","secondary-70":"#EB96B6","secondary-80":"#F5BAD2","secondary-90":"#FCD5E3","secondary-95":"#FDEBF1","secondary-100":"#FDF6F9","neutral-10":"#161616","neutral-20":"#282828","neutral-30":"#393939","neutral-40":"#4E4E4E","neutral-50":"#686868","neutral-60":"#8E8E8E","neutral-70":"#AFAFB0","neutral-80":"#C7CACA","neutral-90":"#DDE1E2","neutral-95":"#EDEFEF","neutral-100":"#F9F9F9","success-10":"#081A0F","success-20":"#0E2D1B","success-30":"#154126","success-40":"#1C5A34","success-50":"#257645","success-60":"#44A068","success-70":"#64C189","success-80":"#80DCA5","success-90":"#B4ECCB","success-95":"#D5F6E2","success-100":"#EFFCF4","warning-10":"#221302","warning-20":"#3B2204","warning-30":"#543106","warning-40":"#744408","warning-50":"#98590C","warning-60":"#D07A13","warning-70":"#E4A244","warning-80":"#F5C26C","warning-90":"#FADBA6","warning-95":"#FCECD4","warning-100":"#FDF7F0","error-10":"#330505","error-20":"#550808","error-30":"#750C0C","error-40":"#9E130F","error-50":"#CB2213","error-60":"#DE6C6C","error-70":"#E89B9B","error-80":"#EFBEBE","error-90":"#F5D9D9","error-95":"#F9ECEC","error-100":"#FCF7F7","info-10":"#021824","info-20":"#032B3F","info-30":"#053D59","info-40":"#06547B","info-50":"#176E9B","info-60":"#5296BE","info-70":"#82B5DA","info-80":"#ACCFE7","info-90":"#CCE3F1","info-95":"#E3F1F8","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000","primary-inverse":"#FEAB10"},ii={"brand-10":"#370009","brand-20":"#4E000D","brand-30":"#640011","brand-40":"#850017","brand-50":"#9B001A","brand-60":"#EF2D4E","brand-70":"#F692A3","brand-80":"#FAB9C4","brand-90":"#FCD7DD","brand-95":"#FDEAED","brand-100":"#FEF8F9","primary-10":"#1F102A","primary-20":"#2F193F","primary-30":"#3E2053","primary-40":"#562D71","primary-50":"#663587","primary-60":"#9370AA","primary-70":"#BCA7CB","primary-80":"#D3C5DC","primary-90":"#E5DDEB","primary-95":"#F2EEF5","primary-100":"#FAF9FB","secondary-10":"#201316","secondary-20":"#311D22","secondary-30":"#3F272C","secondary-40":"#58363D","secondary-50":"#684049","secondary-60":"#AF6A7A","secondary-70":"#F393A8","secondary-80":"#FFB6C6","secondary-90":"#FFD6DF","secondary-95":"#FFE9EE","secondary-100":"#FFF7F9","neutral-10":"#161616","neutral-20":"#222222","neutral-30":"#2D2D2D","neutral-40":"#3F3F3F","neutral-50":"#4B4B4B","neutral-60":"#7E7E7E","neutral-70":"#AFAFB0","neutral-80":"#C7CACA","neutral-90":"#DDE1E2","neutral-95":"#EDEFEF","neutral-100":"#F9F9F9","success-10":"#081917","success-20":"#0D2724","success-30":"#11332E","success-40":"#174740","success-50":"#1B554C","success-60":"#2D8C7E","success-70":"#46C2AF","success-80":"#89D8CC","success-90":"#BCE9E2","success-95":"#DAF3EF","success-100":"#F0FAF9","warning-10":"#241200","warning-20":"#371C00","warning-30":"#482500","warning-40":"#633300","warning-50":"#763C00","warning-60":"#C36400","warning-70":"#FF9524","warning-80":"#FFBD77","warning-90":"#FFD9B2","warning-95":"#FFEBD6","warning-100":"#FFF7F0","error-10":"#330505","error-20":"#4B0707","error-30":"#600909","error-40":"#810D0D","error-50":"#98110F","error-60":"#D7504C","error-70":"#E89B9B","error-80":"#EFBEBE","error-90":"#F5D9D9","error-95":"#F9ECEC","error-100":"#FCF7F7","info-10":"#021824","info-20":"#032537","info-30":"#043148","info-40":"#054462","info-50":"#065175","info-60":"#3985AF","info-70":"#82B5DA","info-80":"#ACCFE7","info-90":"#CCE3F1","info-95":"#E3F1F8","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000","primary-inverse":"#FEAB10"},ai={"brand-10":"#00143A","brand-20":"#00205B","brand-30":"#153368","brand-40":"#18417C","brand-50":"#00558C","brand-60":"#009CDE","brand-70":"#5AB9E7","brand-80":"#9ED0ED","brand-90":"#CAE3F4","brand-95":"#E2F0F9","brand-100":"#F4FAFD","primary-10":"#00143A","primary-20":"#00205B","primary-30":"#153368","primary-40":"#18417C","primary-50":"#00558C","primary-60":"#009CDE","primary-70":"#5AB9E7","primary-80":"#9ED0ED","primary-90":"#CAE3F4","primary-95":"#E2F0F9","primary-100":"#F4FAFD","secondary-10":"#10171F","secondary-20":"#1E252C","secondary-30":"#2F353B","secondary-40":"#3D4247","secondary-50":"#4E5255","secondary-60":"#8F9396","secondary-70":"#A9B0B3","secondary-80":"#C7CBCC","secondary-90":"#DDDFE0","secondary-95":"#ECEDEE","secondary-100":"#F8F8F9","neutral-10":"#10171F","neutral-20":"#1E252C","neutral-30":"#2F353B","neutral-40":"#3D4247","neutral-50":"#4E5255","neutral-60":"#8F9396","neutral-70":"#A9B0B3","neutral-80":"#C7CBCC","neutral-90":"#DDDFE0","neutral-95":"#ECEDEE","neutral-100":"#F8F8F9","success-10":"#001B0E","success-20":"#012A16","success-30":"#013D20","success-40":"#014D28","success-50":"#005F30","success-60":"#48A377","success-70":"#77BD9B","success-80":"#A3D5BD","success-90":"#C4E7D6","success-95":"#DBF4E7","success-100":"#ECFDF5","warning-10":"#1F1500","warning-20":"#312100","warning-30":"#473000","warning-40":"#593C00","warning-50":"#6E4B00","warning-60":"#B78C31","warning-70":"#DDA633","warning-80":"#E0C792","warning-90":"#E9DEC5","warning-95":"#F4EEE0","warning-100":"#FAF8F3","error-10":"#360109","error-20":"#50010E","error-30":"#6F0213","error-40":"#88051A","error-50":"#A60A24","error-60":"#E07083","error-70":"#EA98A6","error-80":"#F3BBC4","error-90":"#FAD5DC","error-95":"#FEE9ED","error-100":"#FFF6F8","info-10":"#00143A","info-20":"#00205B","info-30":"#153368","info-40":"#18417C","info-50":"#00558C","info-60":"#009CDE","info-70":"#5AB9E7","info-80":"#9ED0ED","info-90":"#CAE3F4","info-95":"#E2F0F9","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000","primary-inverse":"#FFCB6A"},si={collections:{lifesg:Xo,bookingsg:Go,rbs:ri,mylegacy:Jo,ccube:Qo,oneservice:ei,pa:ti,a11yplayground:ni,supportgowhere:oi,imda:ii,spf:ai},defaultValue:"lifesg"},li={collections:{lifesg:Xo,bookingsg:Go,rbs:ri,mylegacy:Jo,ccube:Qo,oneservice:ei,pa:ti,a11yplayground:ni,supportgowhere:oi,imda:ii,spf:ai},defaultValue:"lifesg"},ci=e=>t=>{var r;const n=t.theme,o="dark"===(null==n?void 0:n.colourMode),i=Vo(o?li:si,null==n?void 0:n.colourScheme),a=o?"primitiveColourDark":"primitiveColour",s=null===(r=null==n?void 0:n.overrides)||void 0===r?void 0:r[a];return s?Yo(i,e,s):i[e]},di={"brand-10":ci("brand-10"),"brand-20":ci("brand-20"),"brand-30":ci("brand-30"),"brand-40":ci("brand-40"),"brand-50":ci("brand-50"),"brand-60":ci("brand-60"),"brand-70":ci("brand-70"),"brand-80":ci("brand-80"),"brand-90":ci("brand-90"),"brand-95":ci("brand-95"),"brand-100":ci("brand-100"),"primary-10":ci("primary-10"),"primary-20":ci("primary-20"),"primary-30":ci("primary-30"),"primary-40":ci("primary-40"),"primary-50":ci("primary-50"),"primary-60":ci("primary-60"),"primary-70":ci("primary-70"),"primary-80":ci("primary-80"),"primary-90":ci("primary-90"),"primary-95":ci("primary-95"),"primary-100":ci("primary-100"),"secondary-10":ci("secondary-10"),"secondary-20":ci("secondary-20"),"secondary-30":ci("secondary-30"),"secondary-40":ci("secondary-40"),"secondary-50":ci("secondary-50"),"secondary-60":ci("secondary-60"),"secondary-70":ci("secondary-70"),"secondary-80":ci("secondary-80"),"secondary-90":ci("secondary-90"),"secondary-95":ci("secondary-95"),"secondary-100":ci("secondary-100"),"neutral-10":ci("neutral-10"),"neutral-20":ci("neutral-20"),"neutral-30":ci("neutral-30"),"neutral-40":ci("neutral-40"),"neutral-50":ci("neutral-50"),"neutral-60":ci("neutral-60"),"neutral-70":ci("neutral-70"),"neutral-80":ci("neutral-80"),"neutral-90":ci("neutral-90"),"neutral-95":ci("neutral-95"),"neutral-100":ci("neutral-100"),"success-10":ci("success-10"),"success-20":ci("success-20"),"success-30":ci("success-30"),"success-40":ci("success-40"),"success-50":ci("success-50"),"success-60":ci("success-60"),"success-70":ci("success-70"),"success-80":ci("success-80"),"success-90":ci("success-90"),"success-95":ci("success-95"),"success-100":ci("success-100"),"warning-10":ci("warning-10"),"warning-20":ci("warning-20"),"warning-30":ci("warning-30"),"warning-40":ci("warning-40"),"warning-50":ci("warning-50"),"warning-60":ci("warning-60"),"warning-70":ci("warning-70"),"warning-80":ci("warning-80"),"warning-90":ci("warning-90"),"warning-95":ci("warning-95"),"warning-100":ci("warning-100"),"error-10":ci("error-10"),"error-20":ci("error-20"),"error-30":ci("error-30"),"error-40":ci("error-40"),"error-50":ci("error-50"),"error-60":ci("error-60"),"error-70":ci("error-70"),"error-80":ci("error-80"),"error-90":ci("error-90"),"error-95":ci("error-95"),"error-100":ci("error-100"),"info-10":ci("info-10"),"info-20":ci("info-20"),"info-30":ci("info-30"),"info-40":ci("info-40"),"info-50":ci("info-50"),"info-60":ci("info-60"),"info-70":ci("info-70"),"info-80":ci("info-80"),"info-90":ci("info-90"),"info-95":ci("info-95"),"info-100":ci("info-100"),white:ci("white"),black:ci("black"),"primary-inverse":ci("primary-inverse")},ui={text:ci("neutral-20"),"text-subtle":ci("neutral-30"),"text-subtler":ci("neutral-50"),"text-subtlest":ci("neutral-60"),"text-primary":ci("primary-50"),"text-primary-strongest":ci("primary-20"),"text-hover":ci("primary-40"),"text-selected":ci("primary-50"),"text-selected-hover":ci("primary-40"),"text-disabled":ci("neutral-50"),"text-disabled-subtle":ci("neutral-60"),"text-disabled-subtlest":ci("neutral-80"),"text-selected-disabled":ci("neutral-20"),"text-success":ci("success-40"),"text-warning":ci("warning-40"),"text-error":ci("error-40"),"text-info":ci("info-40"),"text-inverse":ci("white"),icon:ci("neutral-50"),"icon-subtle":ci("neutral-60"),"icon-strongest":ci("neutral-20"),"icon-primary":ci("primary-50"),"icon-primary-subtle":ci("primary-60"),"icon-primary-subtlest":ci("primary-70"),"icon-hover":ci("primary-40"),"icon-selected":ci("primary-50"),"icon-selected-hover":ci("primary-40"),"icon-disabled":ci("neutral-50"),"icon-disabled-subtle":ci("neutral-60"),"icon-selected-disabled":ci("neutral-60"),"icon-success":ci("success-50"),"icon-warning":ci("warning-60"),"icon-error":ci("error-50"),"icon-error-strong":ci("error-40"),"icon-info":ci("info-50"),"icon-inverse":ci("white"),"icon-primary-inverse":ci("primary-inverse"),border:ci("neutral-90"),"border-strong":ci("neutral-70"),"border-stronger":ci("neutral-50"),"border-primary":ci("primary-50"),"border-primary-subtle":ci("primary-60"),"border-hover":ci("primary-90"),"border-hover-strong":ci("primary-60"),"border-selected":ci("primary-50"),"border-selected-subtle":ci("primary-70"),"border-selected-subtlest":ci("primary-90"),"border-selected-hover":ci("primary-40"),"border-focus":ci("primary-60"),"border-focus-strong":ci("primary-50"),"border-disabled":ci("neutral-90"),"border-selected-disabled":ci("neutral-70"),"border-success":ci("success-60"),"border-warning":ci("warning-60"),"border-error":ci("error-60"),"border-error-focus":ci("error-60"),"border-error-focus-strong":ci("error-40"),"border-error-strong":ci("error-40"),"border-info":ci("info-60"),bg:ci("white"),"bg-strong":ci("neutral-100"),"bg-stronger":ci("neutral-95"),"bg-strongest":ci("neutral-90"),"bg-hover":ci("primary-95"),"bg-hover-strong":ci("primary-90"),"bg-hover-subtle":ci("primary-100"),"bg-hover-neutral":ci("neutral-100"),"bg-hover-neutral-strong":ci("neutral-90"),"bg-selected":ci("primary-95"),"bg-selected-hover":ci("primary-90"),"bg-selected-strong":ci("primary-90"),"bg-selected-stronger":ci("primary-70"),"bg-selected-strongest":ci("primary-50"),"bg-selected-strongest-hover":ci("primary-40"),"bg-disabled":ci("neutral-95"),"bg-selected-disabled":ci("neutral-95"),"bg-selected-stronger-disabled":ci("neutral-70"),"bg-success":ci("success-100"),"bg-success-hover":ci("success-95"),"bg-success-strong":ci("success-50"),"bg-success-strong-hover":ci("success-40"),"bg-warning":ci("warning-100"),"bg-warning-hover":ci("warning-95"),"bg-warning-strong":ci("warning-50"),"bg-warning-strong-hover":ci("warning-40"),"bg-info":ci("info-100"),"bg-info-hover":ci("info-95"),"bg-info-strong":ci("info-50"),"bg-info-strong-hover":ci("info-40"),"bg-error":ci("error-100"),"bg-error-hover":ci("error-95"),"bg-error-strong":ci("error-50"),"bg-error-strong-hover":ci("error-40"),"bg-inverse":ci("neutral-20"),"bg-inverse-subtle":ci("neutral-30"),"bg-inverse-subtler":ci("neutral-50"),"bg-inverse-subtlest":ci("neutral-60"),"bg-inverse-hover":ci("neutral-40"),"bg-primary":ci("primary-50"),"bg-primary-subtle":ci("primary-60"),"bg-primary-subtler":ci("primary-95"),"bg-primary-subtlest":ci("primary-100"),"bg-available":"#6DD0A1","bg-primary-hover":ci("primary-40"),"bg-primary-subtlest-hover":ci("primary-90"),"bg-primary-subtlest-selected":ci("primary-90"),"overlay-strong":"rgba(40, 40, 40, 0.85)","overlay-subtle":"rgba(40, 40, 40, 0.20)",hyperlink:ci("primary-50"),"hyperlink-hover":ci("primary-40"),"hyperlink-visited":ci("primary-40"),"hyperlink-inverse":ci("primary-inverse"),"focus-ring":ci("primary-50"),"focus-ring-inverse":ci("white")},hi={text:ci("neutral-100"),"text-subtle":ci("neutral-80"),"text-subtler":ci("neutral-60"),"text-subtlest":ci("neutral-50"),"text-primary":ci("primary-60"),"text-primary-strongest":ci("primary-90"),"text-hover":ci("primary-70"),"text-selected":ci("primary-60"),"text-selected-hover":ci("primary-70"),"text-disabled":ci("neutral-60"),"text-disabled-subtle":ci("neutral-50"),"text-disabled-subtlest":ci("neutral-30"),"text-selected-disabled":ci("neutral-90"),"text-success":ci("success-70"),"text-warning":ci("warning-70"),"text-error":ci("error-70"),"text-info":ci("info-70"),"text-inverse":ci("black"),icon:ci("neutral-60"),"icon-subtle":ci("neutral-50"),"icon-strongest":ci("neutral-90"),"icon-primary":ci("primary-60"),"icon-primary-subtle":ci("primary-50"),"icon-primary-subtlest":ci("primary-40"),"icon-hover":ci("primary-70"),"icon-selected":ci("primary-60"),"icon-selected-hover":ci("primary-70"),"icon-disabled":ci("neutral-60"),"icon-disabled-subtle":ci("neutral-50"),"icon-selected-disabled":ci("neutral-50"),"icon-success":ci("success-60"),"icon-warning":ci("warning-50"),"icon-error":ci("error-60"),"icon-error-strong":ci("error-70"),"icon-info":ci("info-60"),"icon-inverse":ci("black"),"icon-primary-inverse":ci("primary-inverse"),border:ci("neutral-20"),"border-strong":ci("neutral-40"),"border-stronger":ci("neutral-60"),"border-primary":ci("primary-60"),"border-primary-subtle":ci("primary-50"),"border-hover":ci("primary-20"),"border-hover-strong":ci("primary-50"),"border-selected":ci("primary-60"),"border-selected-subtle":ci("primary-40"),"border-selected-subtlest":ci("primary-20"),"border-selected-hover":ci("primary-70"),"border-focus":ci("primary-50"),"border-focus-strong":ci("primary-60"),"border-disabled":ci("neutral-20"),"border-selected-disabled":ci("neutral-40"),"border-success":ci("success-50"),"border-warning":ci("warning-50"),"border-error":ci("error-50"),"border-error-focus":ci("error-50"),"border-error-focus-strong":ci("error-70"),"border-error-strong":ci("error-70"),"border-info":ci("info-50"),bg:ci("black"),"bg-strong":ci("neutral-10"),"bg-stronger":ci("neutral-20"),"bg-strongest":ci("neutral-20"),"bg-hover":ci("primary-20"),"bg-hover-strong":ci("primary-20"),"bg-hover-subtle":ci("primary-10"),"bg-hover-neutral":ci("neutral-10"),"bg-hover-neutral-strong":ci("neutral-20"),"bg-selected":ci("primary-20"),"bg-selected-hover":ci("primary-20"),"bg-selected-strong":ci("primary-20"),"bg-selected-stronger":ci("primary-40"),"bg-selected-strongest":ci("primary-60"),"bg-selected-strongest-hover":ci("primary-70"),"bg-disabled":ci("neutral-20"),"bg-selected-disabled":ci("neutral-20"),"bg-selected-stronger-disabled":ci("neutral-40"),"bg-success":ci("success-10"),"bg-success-hover":ci("success-20"),"bg-success-strong":ci("success-60"),"bg-success-strong-hover":ci("success-70"),"bg-warning":ci("warning-10"),"bg-warning-hover":ci("warning-20"),"bg-warning-strong":ci("warning-60"),"bg-warning-strong-hover":ci("warning-70"),"bg-info":ci("info-10"),"bg-info-hover":ci("info-20"),"bg-info-strong":ci("info-60"),"bg-info-strong-hover":ci("info-70"),"bg-error":ci("error-10"),"bg-error-hover":ci("error-20"),"bg-error-strong":ci("error-60"),"bg-error-strong-hover":ci("error-70"),"bg-inverse":ci("neutral-90"),"bg-inverse-subtle":ci("neutral-80"),"bg-inverse-subtler":ci("neutral-60"),"bg-inverse-subtlest":ci("neutral-50"),"bg-inverse-hover":ci("neutral-70"),"bg-primary":ci("primary-60"),"bg-primary-subtle":ci("primary-50"),"bg-primary-subtler":ci("primary-20"),"bg-primary-subtlest":ci("primary-10"),"bg-available":"#185339","bg-primary-hover":ci("primary-70"),"bg-primary-subtlest-hover":ci("primary-20"),"bg-primary-subtlest-selected":ci("primary-20"),"overlay-strong":"rgba(78, 78, 78, 0.80)","overlay-subtle":"rgba(78, 78, 78, 0.50)",hyperlink:ci("primary-60"),"hyperlink-hover":ci("primary-70"),"hyperlink-visited":ci("primary-70"),"hyperlink-inverse":ci("primary-inverse"),"focus-ring":ci("primary-60"),"focus-ring-inverse":ci("black")},fi={text:ci("neutral-30"),"text-subtle":ci("neutral-40"),"text-subtler":ci("neutral-50"),"text-subtlest":ci("neutral-70"),"text-primary":ci("neutral-10"),"text-primary-strongest":ci("neutral-10"),"text-hover":ci("neutral-70"),"text-selected":ci("neutral-20"),"text-selected-hover":ci("neutral-10"),"text-disabled":ci("neutral-50"),"text-disabled-subtle":ci("neutral-70"),"text-disabled-subtlest":ci("neutral-80"),"text-selected-disabled":ci("neutral-40"),"text-success":ci("success-40"),"text-warning":ci("warning-40"),"text-error":ci("brand-30"),"text-info":ci("neutral-40"),"text-inverse":ci("neutral-100"),icon:ci("neutral-40"),"icon-subtle":ci("neutral-50"),"icon-strongest":ci("neutral-10"),"icon-primary":ci("neutral-10"),"icon-primary-subtle":ci("neutral-30"),"icon-primary-subtlest":ci("neutral-60"),"icon-hover":ci("neutral-70"),"icon-selected":ci("brand-20"),"icon-selected-hover":ci("brand-10"),"icon-disabled":ci("neutral-50"),"icon-disabled-subtle":ci("neutral-70"),"icon-selected-disabled":ci("neutral-40"),"icon-success":ci("success-40"),"icon-warning":ci("warning-60"),"icon-error":ci("brand-30"),"icon-error-strong":ci("brand-10"),"icon-info":ci("neutral-40"),"icon-inverse":ci("neutral-100"),"icon-primary-inverse":"#F9B371",border:ci("neutral-90"),"border-strong":ci("neutral-30"),"border-stronger":ci("neutral-20"),"border-primary":ci("neutral-40"),"border-primary-subtle":ci("neutral-60"),"border-hover":ci("neutral-80"),"border-hover-strong":ci("neutral-10"),"border-selected":ci("brand-20"),"border-selected-subtle":ci("neutral-40"),"border-selected-subtlest":ci("neutral-70"),"border-selected-hover":ci("neutral-10"),"border-focus":ci("neutral-20"),"border-focus-strong":ci("neutral-10"),"border-disabled":ci("neutral-90"),"border-selected-disabled":ci("neutral-80"),"border-success":ci("success-40"),"border-warning":ci("warning-60"),"border-error":ci("brand-30"),"border-error-focus":ci("brand-20"),"border-error-focus-strong":ci("brand-10"),"border-error-strong":ci("brand-20"),"border-info":ci("neutral-40"),bg:ci("neutral-100"),"bg-strong":ci("neutral-95"),"bg-stronger":ci("neutral-90"),"bg-strongest":ci("neutral-80"),"bg-hover":ci("brand-90"),"bg-hover-strong":ci("brand-80"),"bg-hover-subtle":ci("neutral-90"),"bg-hover-neutral":ci("neutral-90"),"bg-hover-neutral-strong":ci("neutral-90"),"bg-selected":ci("brand-100"),"bg-selected-hover":ci("brand-30"),"bg-selected-strong":ci("brand-50"),"bg-selected-stronger":ci("brand-40"),"bg-selected-strongest":ci("brand-20"),"bg-selected-strongest-hover":ci("brand-10"),"bg-disabled":ci("neutral-90"),"bg-selected-disabled":ci("neutral-90"),"bg-selected-stronger-disabled":ci("neutral-80"),"bg-success":ci("success-100"),"bg-success-hover":ci("success-95"),"bg-success-strong":ci("success-50"),"bg-success-strong-hover":ci("success-40"),"bg-warning":ci("warning-100"),"bg-warning-hover":ci("warning-95"),"bg-warning-strong":ci("warning-50"),"bg-warning-strong-hover":ci("warning-40"),"bg-info":ci("neutral-95"),"bg-info-hover":ci("info-95"),"bg-info-strong":ci("info-50"),"bg-info-strong-hover":ci("info-40"),"bg-error":ci("brand-100"),"bg-error-hover":ci("error-95"),"bg-error-strong":ci("error-50"),"bg-error-strong-hover":ci("error-40"),"bg-inverse":ci("neutral-40"),"bg-inverse-subtle":ci("neutral-60"),"bg-inverse-subtler":ci("neutral-70"),"bg-inverse-subtlest":ci("neutral-80"),"bg-inverse-hover":ci("neutral-30"),"bg-primary":ci("brand-20"),"bg-primary-subtle":ci("brand-60"),"bg-primary-subtler":ci("brand-80"),"bg-primary-subtlest":ci("brand-100"),"bg-available":ci("success-60"),"bg-primary-hover":ci("brand-10"),"bg-primary-subtlest-hover":ci("brand-80"),"bg-primary-subtlest-selected":ci("brand-40"),"overlay-strong":"rgba(25, 25, 25, 0.95)","overlay-subtle":"rgba(25, 25, 25, 0.20)",hyperlink:ci("neutral-10"),"hyperlink-hover":ci("neutral-40"),"hyperlink-visited":ci("neutral-50"),"hyperlink-inverse":"#F8AE68","focus-ring":ci("primary-50"),"focus-ring-inverse":ci("white")},pi={text:ci("neutral-20"),"text-subtle":ci("neutral-30"),"text-subtler":ci("neutral-50"),"text-subtlest":ci("neutral-60"),"text-primary":ci("primary-50"),"text-primary-strongest":ci("primary-20"),"text-hover":ci("primary-40"),"text-selected":ci("primary-50"),"text-selected-hover":ci("primary-40"),"text-disabled":ci("neutral-50"),"text-disabled-subtle":ci("neutral-60"),"text-disabled-subtlest":ci("neutral-80"),"text-selected-disabled":ci("neutral-20"),"text-success":ci("success-40"),"text-warning":ci("warning-40"),"text-error":ci("error-40"),"text-info":ci("info-40"),"text-inverse":ci("white"),icon:ci("neutral-50"),"icon-subtle":ci("neutral-60"),"icon-strongest":ci("neutral-20"),"icon-primary":ci("primary-50"),"icon-primary-subtle":ci("primary-60"),"icon-primary-subtlest":ci("primary-70"),"icon-hover":ci("primary-40"),"icon-selected":ci("primary-50"),"icon-selected-hover":ci("primary-40"),"icon-disabled":ci("neutral-50"),"icon-disabled-subtle":ci("neutral-60"),"icon-selected-disabled":ci("neutral-60"),"icon-success":ci("success-50"),"icon-warning":ci("warning-60"),"icon-error":ci("error-50"),"icon-error-strong":ci("error-40"),"icon-info":ci("info-50"),"icon-inverse":ci("white"),"icon-primary-inverse":ci("primary-inverse"),border:ci("neutral-90"),"border-strong":ci("neutral-70"),"border-stronger":ci("neutral-50"),"border-primary":ci("primary-50"),"border-primary-subtle":ci("primary-60"),"border-hover":ci("primary-90"),"border-hover-strong":ci("primary-60"),"border-selected":ci("primary-50"),"border-selected-subtle":ci("primary-70"),"border-selected-subtlest":ci("primary-90"),"border-selected-hover":ci("primary-40"),"border-focus":ci("primary-60"),"border-focus-strong":ci("primary-50"),"border-disabled":ci("neutral-90"),"border-selected-disabled":ci("neutral-70"),"border-success":ci("success-60"),"border-warning":ci("warning-60"),"border-error":ci("error-60"),"border-error-focus":ci("error-60"),"border-error-focus-strong":ci("error-40"),"border-error-strong":ci("error-40"),"border-info":ci("info-60"),bg:ci("white"),"bg-strong":ci("neutral-100"),"bg-stronger":ci("neutral-95"),"bg-strongest":ci("neutral-90"),"bg-hover":ci("primary-95"),"bg-hover-strong":ci("primary-90"),"bg-hover-subtle":ci("primary-100"),"bg-hover-neutral":ci("neutral-100"),"bg-hover-neutral-strong":ci("neutral-90"),"bg-selected":ci("primary-95"),"bg-selected-hover":ci("primary-90"),"bg-selected-strong":ci("primary-90"),"bg-selected-stronger":ci("primary-70"),"bg-selected-strongest":ci("primary-50"),"bg-selected-strongest-hover":ci("primary-40"),"bg-disabled":ci("neutral-95"),"bg-selected-disabled":ci("neutral-95"),"bg-selected-stronger-disabled":ci("neutral-70"),"bg-success":ci("success-100"),"bg-success-hover":ci("success-95"),"bg-success-strong":ci("success-50"),"bg-success-strong-hover":ci("success-40"),"bg-warning":ci("warning-100"),"bg-warning-hover":ci("warning-95"),"bg-warning-strong":ci("warning-50"),"bg-warning-strong-hover":ci("warning-40"),"bg-info":ci("info-100"),"bg-info-hover":ci("info-95"),"bg-info-strong":ci("info-50"),"bg-info-strong-hover":ci("info-40"),"bg-error":ci("error-100"),"bg-error-hover":ci("error-95"),"bg-error-strong":ci("error-50"),"bg-error-strong-hover":ci("error-40"),"bg-inverse":ci("neutral-20"),"bg-inverse-subtle":ci("neutral-30"),"bg-inverse-subtler":ci("neutral-50"),"bg-inverse-subtlest":ci("neutral-60"),"bg-inverse-hover":ci("neutral-40"),"bg-primary":ci("primary-50"),"bg-primary-subtle":ci("primary-60"),"bg-primary-subtler":ci("primary-95"),"bg-primary-subtlest":ci("primary-100"),"bg-available":"#6DD0A1","bg-primary-hover":ci("primary-40"),"bg-primary-subtlest-hover":ci("primary-90"),"bg-primary-subtlest-selected":ci("primary-90"),"overlay-strong":"rgba(40, 40, 40, 0.85)","overlay-subtle":"rgba(40, 40, 40, 0.20)",hyperlink:ci("primary-50"),"hyperlink-hover":ci("primary-40"),"hyperlink-visited":ci("primary-40"),"hyperlink-inverse":ci("primary-inverse"),"focus-ring":ci("primary-50"),"focus-ring-inverse":ci("white")},gi={text:ci("neutral-100"),"text-subtle":ci("neutral-80"),"text-subtler":ci("neutral-60"),"text-subtlest":ci("neutral-50"),"text-primary":ci("primary-60"),"text-primary-strongest":ci("primary-90"),"text-hover":ci("primary-70"),"text-selected":ci("primary-60"),"text-selected-hover":ci("primary-70"),"text-disabled":ci("neutral-60"),"text-disabled-subtle":ci("neutral-50"),"text-disabled-subtlest":ci("neutral-30"),"text-selected-disabled":ci("neutral-90"),"text-success":ci("success-70"),"text-warning":ci("warning-70"),"text-error":ci("error-70"),"text-info":ci("info-70"),"text-inverse":ci("black"),icon:ci("neutral-60"),"icon-subtle":ci("neutral-50"),"icon-strongest":ci("neutral-90"),"icon-primary":ci("primary-60"),"icon-primary-subtle":ci("primary-50"),"icon-primary-subtlest":ci("primary-40"),"icon-hover":ci("primary-70"),"icon-selected":ci("primary-60"),"icon-selected-hover":ci("primary-70"),"icon-disabled":ci("neutral-60"),"icon-disabled-subtle":ci("neutral-50"),"icon-selected-disabled":ci("neutral-50"),"icon-success":ci("success-60"),"icon-warning":ci("warning-50"),"icon-error":ci("error-60"),"icon-error-strong":ci("error-70"),"icon-info":ci("info-60"),"icon-inverse":ci("black"),"icon-primary-inverse":ci("primary-inverse"),border:ci("neutral-20"),"border-strong":ci("neutral-40"),"border-stronger":ci("neutral-60"),"border-primary":ci("primary-60"),"border-primary-subtle":ci("primary-50"),"border-hover":ci("primary-20"),"border-hover-strong":ci("primary-50"),"border-selected":ci("primary-60"),"border-selected-subtle":ci("primary-40"),"border-selected-subtlest":ci("primary-20"),"border-selected-hover":ci("primary-70"),"border-focus":ci("primary-50"),"border-focus-strong":ci("primary-60"),"border-disabled":ci("neutral-20"),"border-selected-disabled":ci("neutral-40"),"border-success":ci("success-50"),"border-warning":ci("warning-50"),"border-error":ci("error-50"),"border-error-focus":ci("error-50"),"border-error-focus-strong":ci("error-70"),"border-error-strong":ci("error-70"),"border-info":ci("info-50"),bg:ci("black"),"bg-strong":ci("neutral-10"),"bg-stronger":ci("neutral-20"),"bg-strongest":ci("neutral-20"),"bg-hover":ci("primary-20"),"bg-hover-strong":ci("primary-20"),"bg-hover-subtle":ci("primary-10"),"bg-hover-neutral":ci("neutral-10"),"bg-hover-neutral-strong":ci("neutral-20"),"bg-selected":ci("primary-20"),"bg-selected-hover":ci("primary-20"),"bg-selected-strong":ci("primary-20"),"bg-selected-stronger":ci("primary-40"),"bg-selected-strongest":ci("primary-60"),"bg-selected-strongest-hover":ci("primary-70"),"bg-disabled":ci("neutral-20"),"bg-selected-disabled":ci("neutral-20"),"bg-selected-stronger-disabled":ci("neutral-40"),"bg-success":ci("success-10"),"bg-success-hover":ci("success-20"),"bg-success-strong":ci("success-60"),"bg-success-strong-hover":ci("success-70"),"bg-warning":ci("warning-10"),"bg-warning-hover":ci("warning-20"),"bg-warning-strong":ci("warning-60"),"bg-warning-strong-hover":ci("warning-70"),"bg-info":ci("info-10"),"bg-info-hover":ci("info-20"),"bg-info-strong":ci("info-60"),"bg-info-strong-hover":ci("info-70"),"bg-error":ci("error-10"),"bg-error-hover":ci("error-20"),"bg-error-strong":ci("error-60"),"bg-error-strong-hover":ci("error-70"),"bg-inverse":ci("neutral-90"),"bg-inverse-subtle":ci("neutral-80"),"bg-inverse-subtler":ci("neutral-60"),"bg-inverse-subtlest":ci("neutral-50"),"bg-inverse-hover":ci("neutral-70"),"bg-primary":ci("primary-60"),"bg-primary-subtle":ci("primary-50"),"bg-primary-subtler":ci("primary-20"),"bg-primary-subtlest":ci("primary-10"),"bg-available":"#185339","bg-primary-hover":ci("primary-70"),"bg-primary-subtlest-hover":ci("primary-20"),"bg-primary-subtlest-selected":ci("primary-20"),"overlay-strong":"rgba(78, 78, 78, 0.80)","overlay-subtle":"rgba(78, 78, 78, 0.50)",hyperlink:ci("primary-60"),"hyperlink-hover":ci("primary-70"),"hyperlink-visited":ci("primary-70"),"hyperlink-inverse":ci("primary-inverse"),"focus-ring":ci("primary-60"),"focus-ring-inverse":ci("black")},mi={collections:{lifesg:ui,bookingsg:ui,rbs:ui,mylegacy:ui,ccube:ui,oneservice:ui,pa:fi,a11yplayground:pi,supportgowhere:ui,imda:ui,spf:ui},defaultValue:"lifesg"},bi={collections:{lifesg:hi,bookingsg:hi,rbs:hi,mylegacy:hi,ccube:hi,oneservice:hi,pa:hi,a11yplayground:gi,supportgowhere:hi,imda:hi,spf:hi},defaultValue:"lifesg"},vi=e=>t=>{var r;const n=t.theme,o="dark"===(null==n?void 0:n.colourMode),i=Vo(o?bi:mi,null==n?void 0:n.colourScheme),a=o?"semanticColourDark":"semanticColour",s=null===(r=null==n?void 0:n.overrides)||void 0===r?void 0:r[a],l=s?Yo(i,e,s):i[e];return"function"==typeof l?l(t):l},yi={text:vi("text"),"text-subtle":vi("text-subtle"),"text-subtler":vi("text-subtler"),"text-subtlest":vi("text-subtlest"),"text-primary":vi("text-primary"),"text-primary-strongest":vi("text-primary-strongest"),"text-hover":vi("text-hover"),"text-selected":vi("text-selected"),"text-selected-hover":vi("text-selected-hover"),"text-disabled":vi("text-disabled"),"text-disabled-subtle":vi("text-disabled-subtle"),"text-disabled-subtlest":vi("text-disabled-subtlest"),"text-selected-disabled":vi("text-selected-disabled"),"text-success":vi("text-success"),"text-warning":vi("text-warning"),"text-error":vi("text-error"),"text-info":vi("text-info"),"text-inverse":vi("text-inverse"),icon:vi("icon"),"icon-subtle":vi("icon-subtle"),"icon-strongest":vi("icon-strongest"),"icon-primary":vi("icon-primary"),"icon-primary-subtle":vi("icon-primary-subtle"),"icon-primary-subtlest":vi("icon-primary-subtlest"),"icon-hover":vi("icon-hover"),"icon-selected":vi("icon-selected"),"icon-selected-hover":vi("icon-selected-hover"),"icon-disabled":vi("icon-disabled"),"icon-disabled-subtle":vi("icon-disabled-subtle"),"icon-selected-disabled":vi("icon-selected-disabled"),"icon-success":vi("icon-success"),"icon-warning":vi("icon-warning"),"icon-error":vi("icon-error"),"icon-error-strong":vi("icon-error-strong"),"icon-info":vi("icon-info"),"icon-inverse":vi("icon-inverse"),"icon-primary-inverse":vi("icon-primary-inverse"),border:vi("border"),"border-strong":vi("border-strong"),"border-stronger":vi("border-stronger"),"border-primary":vi("border-primary"),"border-primary-subtle":vi("border-primary-subtle"),"border-hover":vi("border-hover"),"border-hover-strong":vi("border-hover-strong"),"border-selected":vi("border-selected"),"border-selected-subtle":vi("border-selected-subtle"),"border-selected-subtlest":vi("border-selected-subtlest"),"border-selected-hover":vi("border-selected-hover"),"border-focus":vi("border-focus"),"border-focus-strong":vi("border-focus-strong"),"border-disabled":vi("border-disabled"),"border-selected-disabled":vi("border-selected-disabled"),"border-success":vi("border-success"),"border-warning":vi("border-warning"),"border-error":vi("border-error"),"border-error-focus":vi("border-error-focus"),"border-error-focus-strong":vi("border-error-focus-strong"),"border-error-strong":vi("border-error-strong"),"border-info":vi("border-info"),bg:vi("bg"),"bg-strong":vi("bg-strong"),"bg-stronger":vi("bg-stronger"),"bg-strongest":vi("bg-strongest"),"bg-hover":vi("bg-hover"),"bg-hover-strong":vi("bg-hover-strong"),"bg-hover-subtle":vi("bg-hover-subtle"),"bg-hover-neutral":vi("bg-hover-neutral"),"bg-hover-neutral-strong":vi("bg-hover-neutral-strong"),"bg-selected":vi("bg-selected"),"bg-selected-hover":vi("bg-selected-hover"),"bg-selected-strong":vi("bg-selected-strong"),"bg-selected-stronger":vi("bg-selected-stronger"),"bg-selected-strongest":vi("bg-selected-strongest"),"bg-selected-strongest-hover":vi("bg-selected-strongest-hover"),"bg-disabled":vi("bg-disabled"),"bg-selected-disabled":vi("bg-selected-disabled"),"bg-selected-stronger-disabled":vi("bg-selected-stronger-disabled"),"bg-success":vi("bg-success"),"bg-success-hover":vi("bg-success-hover"),"bg-success-strong":vi("bg-success-strong"),"bg-success-strong-hover":vi("bg-success-strong-hover"),"bg-warning":vi("bg-warning"),"bg-warning-hover":vi("bg-warning-hover"),"bg-warning-strong":vi("bg-warning-strong"),"bg-warning-strong-hover":vi("bg-warning-strong-hover"),"bg-info":vi("bg-info"),"bg-info-hover":vi("bg-info-hover"),"bg-info-strong":vi("bg-info-strong"),"bg-info-strong-hover":vi("bg-info-strong-hover"),"bg-error":vi("bg-error"),"bg-error-hover":vi("bg-error-hover"),"bg-error-strong":vi("bg-error-strong"),"bg-error-strong-hover":vi("bg-error-strong-hover"),"bg-inverse":vi("bg-inverse"),"bg-inverse-subtle":vi("bg-inverse-subtle"),"bg-inverse-subtler":vi("bg-inverse-subtler"),"bg-inverse-subtlest":vi("bg-inverse-subtlest"),"bg-inverse-hover":vi("bg-inverse-hover"),"bg-primary":vi("bg-primary"),"bg-primary-subtle":vi("bg-primary-subtle"),"bg-primary-subtler":vi("bg-primary-subtler"),"bg-primary-subtlest":vi("bg-primary-subtlest"),"bg-available":vi("bg-available"),"bg-primary-hover":vi("bg-primary-hover"),"bg-primary-subtlest-hover":vi("bg-primary-subtlest-hover"),"bg-primary-subtlest-selected":vi("bg-primary-subtlest-selected"),"overlay-strong":vi("overlay-strong"),"overlay-subtle":vi("overlay-subtle"),hyperlink:vi("hyperlink"),"hyperlink-hover":vi("hyperlink-hover"),"hyperlink-visited":vi("hyperlink-visited"),"hyperlink-inverse":vi("hyperlink-inverse"),"focus-ring":vi("focus-ring"),"focus-ring-inverse":vi("focus-ring-inverse")},xi={collections:{default:{solid:e=>t=>{var r,n,o;const{thickness:i,radius:a,colour:s}=e||{},l=null!==(r="function"==typeof i?i(t):i+"px")&&void 0!==r?r:qo["width-010"](t),c=null!==(n="function"==typeof a?a(t):a+"px")&&void 0!==n?n:0,d=null!==(o="function"==typeof s?s(t):s)&&void 0!==o?o:yi.border(t),u=qo.solid;return O`
            border: ${l} ${u} ${d};
            border-radius: ${c};
        `},"dashed-default":e=>t=>{var r,n,o;const{thickness:i,radius:a,colour:s}=e||{},l=null!==(r="function"==typeof i?i(t):i)&&void 0!==r?r:qo["width-010"](t),c=null!==(n="function"==typeof a?a(t):a)&&void 0!==n?n:0,d=null!==(o="function"==typeof s?s(t):s)&&void 0!==o?o:yi.border(t),u=encodeURIComponent(`<svg width='100%' height='100%' xmlns='http://www.w3.org/2000/svg'><rect width='100%' height='100%' fill='none' rx='${c}' ry='${c}' stroke='${d}' stroke-width='${l}' stroke-dasharray='4, 8' stroke-dashoffset='0' stroke-linecap='square'/></svg>`);return O`
            background-image: url("data:image/svg+xml,${u}");
            border-radius: ${c};
        `}}},defaultValue:"default"},wi=e=>1===e.length&&"theme"in e[0],$i=e=>(...t)=>r=>{const n=wi(t)?[]:t,o=wi(t)?t[0]:r,i=o.theme;return(0,Vo(xi,null==i?void 0:i.borderScheme)[e])(...n)(o)},Ci={solid:$i("solid"),"dashed-default":$i("dashed-default")},Si={collections:{default:{"xxs-min":0,"xxs-max":320,"xs-min":321,"xs-max":375,"sm-min":376,"sm-max":480,"md-min":481,"md-max":768,"lg-min":769,"lg-max":1200,"xl-min":1201,"xl-max":1440,"xxl-min":1441,"xxs-column":8,"xs-column":8,"sm-column":8,"md-column":8,"lg-column":12,"xl-column":12,"xxl-column":12,"xxs-gutter":16,"xs-gutter":16,"sm-gutter":16,"md-gutter":16,"lg-gutter":32,"xl-gutter":32,"xxl-gutter":32,"xxs-margin":24,"xs-margin":24,"sm-margin":24,"md-margin":24,"lg-margin":48,"xl-margin":48,"xxl-margin":48}},defaultValue:"default"},Di=e=>t=>{var r;const n=t.theme,o=Vo(Si,null==n?void 0:n.breakpointScheme);let i;return i=(null===(r=null==n?void 0:n.overrides)||void 0===r?void 0:r.breakpoint)?Yo(o,e,n.overrides.breakpoint):o[e],i},ki={"xxs-min":Di("xxs-min"),"xxs-max":Di("xxs-max"),"xs-min":Di("xs-min"),"xs-max":Di("xs-max"),"sm-min":Di("sm-min"),"sm-max":Di("sm-max"),"md-min":Di("md-min"),"md-max":Di("md-max"),"lg-min":Di("lg-min"),"lg-max":Di("lg-max"),"xl-min":Di("xl-min"),"xl-max":Di("xl-max"),"xxl-min":Di("xxl-min"),"xxs-column":Di("xxs-column"),"xs-column":Di("xs-column"),"sm-column":Di("sm-column"),"md-column":Di("md-column"),"lg-column":Di("lg-column"),"xl-column":Di("xl-column"),"xxl-column":Di("xxl-column"),"xxs-gutter":Di("xxs-gutter"),"xs-gutter":Di("xs-gutter"),"sm-gutter":Di("sm-gutter"),"md-gutter":Di("md-gutter"),"lg-gutter":Di("lg-gutter"),"xl-gutter":Di("xl-gutter"),"xxl-gutter":Di("xxl-gutter"),"xxs-margin":Di("xxs-margin"),"xs-margin":Di("xs-margin"),"sm-margin":Di("sm-margin"),"md-margin":Di("md-margin"),"lg-margin":Di("lg-margin"),"xl-margin":Di("xl-margin"),"xxl-margin":Di("xxl-margin")},Ei=e=>("max-width"===e?["xxs","xs","sm","md","lg","xl"]:["xxs","xs","sm","md","lg","xl","xxl"]).reduce(((t,r)=>(t[r]=((e,t)=>{const r=ki["max-width"===e?`${t}-max`:`${t}-min`];return t=>{const n=r(t);return`@media screen and (${e}: ${n}px)`}})(e,r),t)),{}),Fi={MaxWidth:Ei("max-width"),MinWidth:Ei("min-width")},Oi={collections:{default:{"heading-size-xxl":"3rem","heading-size-xl":"2.5rem","heading-size-lg":"2rem","heading-size-md":"1.625rem","heading-size-sm":"1.375rem","heading-size-xs":"1.125rem","heading-lh-xxl":"3.5rem","heading-lh-xl":"3rem","heading-lh-lg":"2.5rem","heading-lh-md":"2.25rem","heading-lh-sm":"1.75rem","heading-lh-xs":"1.625rem","heading-ls-xxl":"-0.035rem","heading-ls-xl":"-0.02rem","heading-ls-lg":"-0.02rem","heading-ls-md":"0rem","heading-ls-sm":"0rem","heading-ls-xs":"0rem","weight-light":"300","weight-regular":"400","weight-semibold":"600","weight-bold":"700","font-family":"Open Sans","body-size-baseline":"1.125rem","body-size-md":"1rem","body-size-sm":"0.875rem","body-size-xs":"0.75rem","body-lh-baseline":"1.625rem","body-lh-md":"1.5rem","body-lh-sm":"1.625rem","body-lh-xs":"1.25rem","body-ls-baseline":"0rem","body-ls-md":"0.009rem","body-ls-sm":"0.008rem","body-ls-xs":"0.008rem","form-label-size":"1rem","form-description-size":"0.875rem","form-label-lh":"1.5rem","form-description-lh":"1.625rem","form-label-ls":"0.009rem","form-description-ls":"0.008rem"},bookingsg:{"heading-size-xxl":"3rem","heading-size-xl":"2.5rem","heading-size-lg":"2rem","heading-size-md":"1.625rem","heading-size-sm":"1.375rem","heading-size-xs":"1.125rem","heading-lh-xxl":"3.5rem","heading-lh-xl":"3rem","heading-lh-lg":"2.5rem","heading-lh-md":"2.25rem","heading-lh-sm":"1.75rem","heading-lh-xs":"1.75rem","heading-ls-xxl":"-0.035rem","heading-ls-xl":"-0.02rem","heading-ls-lg":"-0.02rem","heading-ls-md":"0rem","heading-ls-sm":"0rem","heading-ls-xs":"0rem","weight-light":"300","weight-regular":"400","weight-semibold":"600","weight-bold":"700","font-family":"Plus Jakarta Sans","body-size-baseline":"1.125rem","body-size-md":"1rem","body-size-sm":"0.875rem","body-size-xs":"0.75rem","body-lh-baseline":"1.75rem","body-lh-md":"1.5rem","body-lh-sm":"1.6rem","body-lh-xs":"1.2rem","body-ls-baseline":"0rem","body-ls-md":"0.009rem","body-ls-sm":"0.008rem","body-ls-xs":"0.008rem","form-label-size":"1rem","form-description-size":"0.875rem","form-label-lh":"1.5rem","form-description-lh":"1.625rem","form-label-ls":"0.009rem","form-description-ls":"0.008rem"},mylegacy:{"heading-size-xxl":"3rem","heading-size-xl":"2.5rem","heading-size-lg":"2rem","heading-size-md":"1.625rem","heading-size-sm":"1.375rem","heading-size-xs":"1.125rem","heading-lh-xxl":"3.5rem","heading-lh-xl":"3rem","heading-lh-lg":"2.5rem","heading-lh-md":"2.25rem","heading-lh-sm":"1.75rem","heading-lh-xs":"1.625rem","heading-ls-xxl":"-0.035rem","heading-ls-xl":"-0.02rem","heading-ls-lg":"-0.02rem","heading-ls-md":"0rem","heading-ls-sm":"0rem","heading-ls-xs":"0rem","weight-light":"300","weight-regular":"400","weight-semibold":"600","weight-bold":"700","font-family":"Open Sans","body-size-baseline":"1.125rem","body-size-md":"1rem","body-size-sm":"0.875rem","body-size-xs":"0.75rem","body-lh-baseline":"1.625rem","body-lh-md":"1.5rem","body-lh-sm":"1.625rem","body-lh-xs":"1.25rem","body-ls-baseline":"0rem","body-ls-md":"0.009rem","body-ls-sm":"0.008rem","body-ls-xs":"0.008rem","form-label-size":"1.125rem","form-description-size":"1rem","form-label-lh":"1.5rem","form-description-lh":"1.625rem","form-label-ls":"0rem","form-description-ls":"0.009rem"},pa:{"heading-size-xxl":"2.5rem","heading-size-xl":"2rem","heading-size-lg":"1.75rem","heading-size-md":"1.5rem","heading-size-sm":"1.25rem","heading-size-xs":"1rem","heading-lh-xxl":"3rem","heading-lh-xl":"2.5rem","heading-lh-lg":"2.25rem","heading-lh-md":"2rem","heading-lh-sm":"2rem","heading-lh-xs":"1.75rem","heading-ls-xxl":"-0.032rem","heading-ls-xl":"-0.032rem","heading-ls-lg":"0rem","heading-ls-md":"0rem","heading-ls-sm":"0rem","heading-ls-xs":"0rem","weight-light":"300","weight-regular":"400","weight-semibold":"600","weight-bold":"700","font-family":"Lato","body-size-baseline":"1rem","body-size-md":"0.875rem","body-size-sm":"0.75rem","body-size-xs":"0.625rem","body-lh-baseline":"1.75rem","body-lh-md":"1.5rem","body-lh-sm":"1.25rem","body-lh-xs":"1.25rem","body-ls-baseline":"0rem","body-ls-md":"0.014rem","body-ls-sm":"0.012rem","body-ls-xs":"0.012rem","form-label-size":"1rem","form-description-size":"0.875rem","form-label-lh":"1.5rem","form-description-lh":"1.6rem","form-label-ls":"0.014rem","form-description-ls":"0.012rem"},a11yplayground:{"heading-size-xxl":"3rem","heading-size-xl":"2.5rem","heading-size-lg":"2rem","heading-size-md":"1.625rem","heading-size-sm":"1.375rem","heading-size-xs":"1.125rem","heading-lh-xxl":"3.5rem","heading-lh-xl":"3rem","heading-lh-lg":"2.5rem","heading-lh-md":"2.25rem","heading-lh-sm":"1.75rem","heading-lh-xs":"1.625rem","heading-ls-xxl":"-0.035rem","heading-ls-xl":"-0.02rem","heading-ls-lg":"-0.02rem","heading-ls-md":"0rem","heading-ls-sm":"0rem","heading-ls-xs":"0rem","weight-light":"300","weight-regular":"400","weight-semibold":"600","weight-bold":"700","font-family":"Atkinson Hyperlegible Next","body-size-baseline":"1.125rem","body-size-md":"1rem","body-size-sm":"0.875rem","body-size-xs":"0.75rem","body-lh-baseline":"1.625rem","body-lh-md":"1.5rem","body-lh-sm":"1.625rem","body-lh-xs":"1.25rem","body-ls-baseline":"0rem","body-ls-md":"0.009rem","body-ls-sm":"0.008rem","body-ls-xs":"0.008rem","form-label-size":"1.125rem","form-description-size":"1rem","form-label-lh":"1.5rem","form-description-lh":"1.625rem","form-label-ls":"0rem","form-description-ls":"0.009rem"},supportgowhere:{"heading-size-xxl":"3rem","heading-size-xl":"2.5rem","heading-size-lg":"2rem","heading-size-md":"1.625rem","heading-size-sm":"1.375rem","heading-size-xs":"1.125rem","heading-lh-xxl":"3.5rem","heading-lh-xl":"3rem","heading-lh-lg":"2.5rem","heading-lh-md":"2.25rem","heading-lh-sm":"1.75rem","heading-lh-xs":"1.625rem","heading-ls-xxl":"-0.035rem","heading-ls-xl":"-0.02rem","heading-ls-lg":"-0.02rem","heading-ls-md":"0rem","heading-ls-sm":"0rem","heading-ls-xs":"0rem","weight-light":"300","weight-regular":"400","weight-semibold":"600","weight-bold":"700","font-family":"Libre Franklin","body-size-baseline":"1.125rem","body-size-md":"1rem","body-size-sm":"0.875rem","body-size-xs":"0.75rem","body-lh-baseline":"1.625rem","body-lh-md":"1.5rem","body-lh-sm":"1.625rem","body-lh-xs":"1.25rem","body-ls-baseline":"0rem","body-ls-md":"0.009rem","body-ls-sm":"0.008rem","body-ls-xs":"0.008rem","form-label-size":"1rem","form-description-size":"0.875rem","form-label-lh":"1.5rem","form-description-lh":"1.625rem","form-label-ls":"0.009rem","form-description-ls":"0.008rem"},sgwdigitallobby:{"heading-size-xxl":"3.75rem","heading-size-xl":"3rem","heading-size-lg":"2.5rem","heading-size-md":"2rem","heading-size-sm":"1.625rem","heading-size-xs":"1.375rem","heading-lh-xxl":"4.5rem","heading-lh-xl":"3.5rem","heading-lh-lg":"3rem","heading-lh-md":"2.5rem","heading-lh-sm":"2.25rem","heading-lh-xs":"1.75rem","heading-ls-xxl":"-0.035rem","heading-ls-xl":"-0.035em","heading-ls-lg":"-0.02rem","heading-ls-md":"-0.02rem","heading-ls-sm":"0rem","heading-ls-xs":"0rem","weight-light":"300","weight-regular":"400","weight-semibold":"600","weight-bold":"700","font-family":"Libre Franklin","body-size-baseline":"1.375rem","body-size-md":"1.2rem","body-size-sm":"1.125rem","body-size-xs":"1rem","body-lh-baseline":"1.75rem","body-lh-md":"1.625rem","body-lh-sm":"1.625rem","body-lh-xs":"1.5rem","body-ls-baseline":"0rem","body-ls-md":"0rem","body-ls-sm":"0rem","body-ls-xs":"0.009rem","form-label-size":"1.25rem","form-description-size":"1.125rem","form-label-lh":"1.625rem","form-description-lh":"1.625rem","form-label-ls":"0rem","form-description-ls":"0rem"},imda:{"heading-size-xxl":"3rem","heading-size-xl":"2.5rem","heading-size-lg":"2rem","heading-size-md":"1.625rem","heading-size-sm":"1.375rem","heading-size-xs":"1.125rem","heading-lh-xxl":"3.5rem","heading-lh-xl":"3rem","heading-lh-lg":"2.5rem","heading-lh-md":"2.25rem","heading-lh-sm":"1.75rem","heading-lh-xs":"1.625rem","heading-ls-xxl":"-0.035rem","heading-ls-xl":"-0.02rem","heading-ls-lg":"-0.02rem","heading-ls-md":"0rem","heading-ls-sm":"0rem","heading-ls-xs":"0rem","weight-light":"300","weight-regular":"400","weight-semibold":"600","weight-bold":"700","font-family":"Montserrat","body-size-baseline":"1.125rem","body-size-md":"1rem","body-size-sm":"0.875rem","body-size-xs":"0.75rem","body-lh-baseline":"1.625rem","body-lh-md":"1.5rem","body-lh-sm":"1.625rem","body-lh-xs":"1.25rem","body-ls-baseline":"0rem","body-ls-md":"0.009rem","body-ls-sm":"0.008rem","body-ls-xs":"0.008rem","form-label-size":"1rem","form-description-size":"0.875rem","form-label-lh":"1.5rem","form-description-lh":"1.625rem","form-label-ls":"0.009rem","form-description-ls":"0.008rem"},spf:{"heading-size-xxl":"3.75rem","heading-size-xl":"3rem","heading-size-lg":"2.5rem","heading-size-md":"2rem","heading-size-sm":"1.75rem","heading-size-xs":"1.5rem","heading-lh-xxl":"4.5rem","heading-lh-xl":"3.5rem","heading-lh-lg":"3rem","heading-lh-md":"2.25rem","heading-lh-sm":"2rem","heading-lh-xs":"1.75rem","heading-ls-xxl":"-0.035rem","heading-ls-xl":"-0.02rem","heading-ls-lg":"-0.02rem","heading-ls-md":"0rem","heading-ls-sm":"0rem","heading-ls-xs":"0rem","weight-light":"300","weight-regular":"400","weight-semibold":"600","weight-bold":"700","font-family":"Public Sans","body-size-baseline":"1.2rem","body-size-md":"1.125rem","body-size-sm":"1rem","body-size-xs":"0.875rem","body-lh-baseline":"1.5rem","body-lh-md":"1.5rem","body-lh-sm":"1.5rem","body-lh-xs":"1.125rem","body-ls-baseline":"0rem","body-ls-md":"0.009rem","body-ls-sm":"0.008rem","body-ls-xs":"0.008rem","form-label-size":"1.125rem","form-description-size":"1rem","form-label-lh":"1.5rem","form-description-lh":"1.625rem","form-label-ls":"0.009rem","form-description-ls":"0.008rem"},oneservice:{"heading-size-xxl":"2.5rem","heading-size-xl":"2rem","heading-size-lg":"1.75rem","heading-size-md":"1.375rem","heading-size-sm":"1.125rem","heading-size-xs":"1rem","heading-lh-xxl":"3.5rem","heading-lh-xl":"3rem","heading-lh-lg":"2.625rem","heading-lh-md":"2rem","heading-lh-sm":"1.625rem","heading-lh-xs":"1.5rem","heading-ls-xxl":"0rem","heading-ls-xl":"0rem","heading-ls-lg":"0rem","heading-ls-md":"0rem","heading-ls-sm":"0rem","heading-ls-xs":"0rem","weight-light":"300","weight-regular":"400","weight-semibold":"600","weight-bold":"700","font-family":"Open Sans","body-size-baseline":"1rem","body-size-md":"0.875rem","body-size-sm":"0.75rem","body-size-xs":"0.75rem","body-lh-baseline":"1.5rem","body-lh-md":"1.313rem","body-lh-sm":"1.125rem","body-lh-xs":"1.125rem","body-ls-baseline":"0rem","body-ls-md":"0rem","body-ls-sm":"0rem","body-ls-xs":"0rem","form-label-size":"0.875rem","form-description-size":"0.875rem","form-label-lh":"1.313rem","form-description-lh":"1.313rem","form-label-ls":"0rem","form-description-ls":"0rem"}},defaultValue:"default"},_i=e=>t=>{var r;const n=t.theme,o=Vo(Oi,null==n?void 0:n.fontScheme);return(null===(r=null==n?void 0:n.overrides)||void 0===r?void 0:r.fontSpec)?Yo(o,e,n.overrides.fontSpec):o[e]},Ti={"heading-size-xxl":_i("heading-size-xxl"),"heading-size-xl":_i("heading-size-xl"),"heading-size-lg":_i("heading-size-lg"),"heading-size-md":_i("heading-size-md"),"heading-size-sm":_i("heading-size-sm"),"heading-size-xs":_i("heading-size-xs"),"heading-lh-xxl":_i("heading-lh-xxl"),"heading-lh-xl":_i("heading-lh-xl"),"heading-lh-lg":_i("heading-lh-lg"),"heading-lh-md":_i("heading-lh-md"),"heading-lh-sm":_i("heading-lh-sm"),"heading-lh-xs":_i("heading-lh-xs"),"heading-ls-xxl":_i("heading-ls-xxl"),"heading-ls-xl":_i("heading-ls-xl"),"heading-ls-lg":_i("heading-ls-lg"),"heading-ls-md":_i("heading-ls-md"),"heading-ls-sm":_i("heading-ls-sm"),"heading-ls-xs":_i("heading-ls-xs"),"weight-light":_i("weight-light"),"weight-regular":_i("weight-regular"),"weight-semibold":_i("weight-semibold"),"weight-bold":_i("weight-bold"),"font-family":_i("font-family"),"body-size-baseline":_i("body-size-baseline"),"body-size-md":_i("body-size-md"),"body-size-sm":_i("body-size-sm"),"body-size-xs":_i("body-size-xs"),"body-lh-baseline":_i("body-lh-baseline"),"body-lh-md":_i("body-lh-md"),"body-lh-sm":_i("body-lh-sm"),"body-lh-xs":_i("body-lh-xs"),"body-ls-baseline":_i("body-ls-baseline"),"body-ls-md":_i("body-ls-md"),"body-ls-sm":_i("body-ls-sm"),"body-ls-xs":_i("body-ls-xs"),"form-label-size":_i("form-label-size"),"form-description-size":_i("form-description-size"),"form-label-lh":_i("form-label-lh"),"form-description-lh":_i("form-description-lh"),"form-label-ls":_i("form-label-ls"),"form-description-ls":_i("form-description-ls")},Ii=(e,t,r,n,o)=>{const{disableLigatures:i}=o||{};return O`
        font-family: ${_i("font-family")};
        font-size: ${_i(e)};
        font-weight: ${_i(t)};
        line-height: ${_i(r)};
        letter-spacing: ${_i(n)};

        font-variant: ${i?"no-common-ligatures":"normal"};
    `},Mi=(e={})=>({"heading-xxl-light":Ii("heading-size-xxl","weight-light","heading-lh-xxl","heading-ls-xxl",e),"heading-xxl-regular":Ii("heading-size-xxl","weight-regular","heading-lh-xxl","heading-ls-xxl",e),"heading-xxl-semibold":Ii("heading-size-xxl","weight-semibold","heading-lh-xxl","heading-ls-xxl",e),"heading-xxl-bold":Ii("heading-size-xxl","weight-bold","heading-lh-xxl","heading-ls-xxl",e),"heading-xl-light":Ii("heading-size-xl","weight-light","heading-lh-xl","heading-ls-xl",e),"heading-xl-regular":Ii("heading-size-xl","weight-regular","heading-lh-xl","heading-ls-xl",e),"heading-xl-semibold":Ii("heading-size-xl","weight-semibold","heading-lh-xl","heading-ls-xl",e),"heading-xl-bold":Ii("heading-size-xl","weight-bold","heading-lh-xl","heading-ls-xl",e),"heading-lg-light":Ii("heading-size-lg","weight-light","heading-lh-lg","heading-ls-lg",e),"heading-lg-regular":Ii("heading-size-lg","weight-regular","heading-lh-lg","heading-ls-lg",e),"heading-lg-semibold":Ii("heading-size-lg","weight-semibold","heading-lh-lg","heading-ls-lg",e),"heading-lg-bold":Ii("heading-size-lg","weight-bold","heading-lh-lg","heading-ls-lg",e),"heading-md-light":Ii("heading-size-md","weight-light","heading-lh-md","heading-ls-md",e),"heading-md-regular":Ii("heading-size-md","weight-regular","heading-lh-md","heading-ls-md",e),"heading-md-semibold":Ii("heading-size-md","weight-semibold","heading-lh-md","heading-ls-md",e),"heading-md-bold":Ii("heading-size-md","weight-bold","heading-lh-md","heading-ls-md",e),"heading-sm-light":Ii("heading-size-sm","weight-light","heading-lh-sm","heading-ls-sm",e),"heading-sm-regular":Ii("heading-size-sm","weight-regular","heading-lh-sm","heading-ls-sm",e),"heading-sm-semibold":Ii("heading-size-sm","weight-semibold","heading-lh-sm","heading-ls-sm",e),"heading-sm-bold":Ii("heading-size-sm","weight-bold","heading-lh-sm","heading-ls-sm",e),"heading-xs-light":Ii("heading-size-xs","weight-light","heading-lh-xs","heading-ls-xs",e),"heading-xs-regular":Ii("heading-size-xs","weight-regular","heading-lh-xs","heading-ls-xs",e),"heading-xs-semibold":Ii("heading-size-xs","weight-semibold","heading-lh-xs","heading-ls-xs",e),"heading-xs-bold":Ii("heading-size-xs","weight-bold","heading-lh-xs","heading-ls-xs",e),"body-baseline-light":Ii("body-size-baseline","weight-light","body-lh-baseline","body-ls-baseline",e),"body-baseline-regular":Ii("body-size-baseline","weight-regular","body-lh-baseline","body-ls-baseline",e),"body-baseline-semibold":Ii("body-size-baseline","weight-semibold","body-lh-baseline","body-ls-baseline",e),"body-baseline-bold":Ii("body-size-baseline","weight-bold","body-lh-baseline","body-ls-baseline",e),"body-md-light":Ii("body-size-md","weight-light","body-lh-md","body-ls-md",e),"body-md-regular":Ii("body-size-md","weight-regular","body-lh-md","body-ls-md",e),"body-md-semibold":Ii("body-size-md","weight-semibold","body-lh-md","body-ls-md",e),"body-md-bold":Ii("body-size-md","weight-bold","body-lh-md","body-ls-md",e),"body-sm-light":Ii("body-size-sm","weight-light","body-lh-sm","body-ls-sm",e),"body-sm-regular":Ii("body-size-sm","weight-regular","body-lh-sm","body-ls-sm",e),"body-sm-semibold":Ii("body-size-sm","weight-semibold","body-lh-sm","body-ls-sm",e),"body-sm-bold":Ii("body-size-sm","weight-bold","body-lh-sm","body-ls-sm",e),"body-xs-light":Ii("body-size-xs","weight-light","body-lh-xs","body-ls-xs",e),"body-xs-regular":Ii("body-size-xs","weight-regular","body-lh-xs","body-ls-xs",e),"body-xs-semibold":Ii("body-size-xs","weight-semibold","body-lh-xs","body-ls-xs",e),"body-xs-bold":Ii("body-size-xs","weight-bold","body-lh-xs","body-ls-xs",e),"form-label":Ii("form-label-size","weight-semibold","form-label-lh","form-label-ls",e),"form-description":Ii("form-description-size","weight-regular","form-description-lh","form-description-ls",e)}),Ai=Mi({disableLigatures:!0}),Bi=Mi(),ji=Mi({disableLigatures:!0}),zi=Mi({disableLigatures:!0}),Ri=Mi({disableLigatures:!0}),Li={collections:{default:Bi,bookingsg:Ai,mylegacy:Bi,pa:ji,a11yplayground:zi,supportgowhere:Ri,sgwdigitallobby:Ri,imda:Mi({disableLigatures:!0}),spf:Mi({disableLigatures:!0}),oneservice:Mi()},defaultValue:"default"},Pi=e=>t=>{var r;const n=t.theme,o=Vo(Li,null==n?void 0:n.fontScheme),i=(null===(r=null==n?void 0:n.overrides)||void 0===r?void 0:r.font)?Yo(o,e,n.overrides.font):o[e];return"function"==typeof i?i(t):i},Ni={"heading-xxl-light":Pi("heading-xxl-light"),"heading-xxl-regular":Pi("heading-xxl-regular"),"heading-xxl-semibold":Pi("heading-xxl-semibold"),"heading-xxl-bold":Pi("heading-xxl-bold"),"heading-xl-light":Pi("heading-xl-light"),"heading-xl-regular":Pi("heading-xl-regular"),"heading-xl-semibold":Pi("heading-xl-semibold"),"heading-xl-bold":Pi("heading-xl-bold"),"heading-lg-light":Pi("heading-lg-light"),"heading-lg-regular":Pi("heading-lg-regular"),"heading-lg-semibold":Pi("heading-lg-semibold"),"heading-lg-bold":Pi("heading-lg-bold"),"heading-md-light":Pi("heading-md-light"),"heading-md-regular":Pi("heading-md-regular"),"heading-md-semibold":Pi("heading-md-semibold"),"heading-md-bold":Pi("heading-md-bold"),"heading-sm-light":Pi("heading-sm-light"),"heading-sm-regular":Pi("heading-sm-regular"),"heading-sm-semibold":Pi("heading-sm-semibold"),"heading-sm-bold":Pi("heading-sm-bold"),"heading-xs-light":Pi("heading-xs-light"),"heading-xs-regular":Pi("heading-xs-regular"),"heading-xs-semibold":Pi("heading-xs-semibold"),"heading-xs-bold":Pi("heading-xs-bold"),"body-baseline-light":Pi("body-baseline-light"),"body-baseline-regular":Pi("body-baseline-regular"),"body-baseline-semibold":Pi("body-baseline-semibold"),"body-baseline-bold":Pi("body-baseline-bold"),"body-md-light":Pi("body-md-light"),"body-md-regular":Pi("body-md-regular"),"body-md-semibold":Pi("body-md-semibold"),"body-md-bold":Pi("body-md-bold"),"body-sm-light":Pi("body-sm-light"),"body-sm-regular":Pi("body-sm-regular"),"body-sm-semibold":Pi("body-sm-semibold"),"body-sm-bold":Pi("body-sm-bold"),"body-xs-light":Pi("body-xs-light"),"body-xs-regular":Pi("body-xs-regular"),"body-xs-semibold":Pi("body-xs-semibold"),"body-xs-bold":Pi("body-xs-bold"),"form-label":Pi("form-label"),"form-description":Pi("form-description")},Wi={collections:{default:{"duration-150":"150ms","duration-250":"250ms","duration-350":"350ms","duration-500":"500ms","duration-800":"800ms","duration-1000":"1000ms","ease-default":"cubic-bezier(0.45, 0.05, 0.55, 0.95)","ease-standard":"cubic-bezier(0.86, 0, 0.07, 1)","ease-entrance":"cubic-bezier(0.18, 0.13, 0, 1)","ease-exit":"cubic-bezier(1, 0, 0.8, 0.85)"}},defaultValue:"default"},Hi=e=>t=>{var r;const n=t.theme,o=Vo(Wi,null==n?void 0:n.motionScheme);return(null===(r=null==n?void 0:n.overrides)||void 0===r?void 0:r.motion)?Yo(o,e,n.overrides.motion):o[e]},Yi={"duration-150":Hi("duration-150"),"duration-250":Hi("duration-250"),"duration-350":Hi("duration-350"),"duration-500":Hi("duration-500"),"duration-800":Hi("duration-800"),"duration-1000":Hi("duration-1000"),"ease-default":Hi("ease-default"),"ease-standard":Hi("ease-standard"),"ease-entrance":Hi("ease-entrance"),"ease-exit":Hi("ease-exit")},Vi={collections:{default:{none:0,xs:2,sm:4,md:8,lg:12,full:9999},spf:{none:0,xs:2,sm:8,md:8,lg:12,full:9999}},defaultValue:"default"},Ui=e=>t=>{var r;const n=t.theme,o=Vo(Vi,null==n?void 0:n.radiusScheme);return(null===(r=null==n?void 0:n.overrides)||void 0===r?void 0:r.radius)?`${Yo(o,e,n.overrides.radius)}px`:`${o[e]}px`},Ki={none:Ui("none"),xs:Ui("xs"),sm:Ui("sm"),md:Ui("md"),lg:Ui("lg"),full:Ui("full")},qi=(e,t,r)=>n=>{const o=vi(t)(n)||ci(t)(n);return`${e} rgba(from ${o} r g b / ${100*r}%)`},Zi={collections:{default:{"xs-subtle":qi("0 0 4px 1px","neutral-50",.24),"xs-strong":qi("0 0 4px 1px","neutral-50",.5),"xs-focus-strong":qi("0 0 4px 1px","border-focus",.5),"xs-error-strong":qi("0 0 4px 1px","border-error",.5),"sm-subtle":qi("0 2px 4px 0","neutral-50",.24),"sm-strong":qi("0 2px 4px 0","neutral-50",.5),"md-subtle":qi("0 2px 8px 0","neutral-50",.24),"md-strong":qi("0 2px 8px 0","neutral-50",.5),"lg-subtle":qi("0 2px 12px 1px","neutral-50",.24),"lg-strong":qi("0 2px 12px 1px","neutral-50",.5)}},defaultValue:"default"},Gi=e=>t=>{var r;const n=t.theme,o=Vo(Zi,null==n?void 0:n.shadowScheme),i=(null===(r=null==n?void 0:n.overrides)||void 0===r?void 0:r.shadow)?Yo(o,e,n.overrides.shadow):o[e];return"function"==typeof i?i(t):i},Qi={"xs-subtle":Gi("xs-subtle"),"xs-strong":Gi("xs-strong"),"xs-focus-strong":Gi("xs-focus-strong"),"xs-error-strong":Gi("xs-error-strong"),"sm-subtle":Gi("sm-subtle"),"sm-strong":Gi("sm-strong"),"md-subtle":Gi("md-subtle"),"md-strong":Gi("md-strong"),"lg-subtle":Gi("lg-subtle"),"lg-strong":Gi("lg-strong")},Xi={collections:{default:{"spacing-0":0,"spacing-4":4,"spacing-8":8,"spacing-12":12,"spacing-16":16,"spacing-20":20,"spacing-24":24,"spacing-32":32,"spacing-40":40,"spacing-48":48,"spacing-64":64,"spacing-72":72,"layout-xs":8,"layout-sm":16,"layout-md":24,"layout-lg":32,"layout-xl":48,"layout-xxl":64,"layout-xxxl":128}},defaultValue:"default"},Ji=e=>t=>{var r;const n=t.theme,o=Vo(Xi,null==n?void 0:n.spacingScheme);return(null===(r=null==n?void 0:n.overrides)||void 0===r?void 0:r.spacing)?`${Yo(o,e,n.overrides.spacing)}px`:`${o[e]}px`},ea={"spacing-0":Ji("spacing-0"),"spacing-4":Ji("spacing-4"),"spacing-8":Ji("spacing-8"),"spacing-12":Ji("spacing-12"),"spacing-16":Ji("spacing-16"),"spacing-20":Ji("spacing-20"),"spacing-24":Ji("spacing-24"),"spacing-32":Ji("spacing-32"),"spacing-40":Ji("spacing-40"),"spacing-48":Ji("spacing-48"),"spacing-64":Ji("spacing-64"),"spacing-72":Ji("spacing-72"),"layout-xs":Ji("layout-xs"),"layout-sm":Ji("layout-sm"),"layout-md":Ji("layout-md"),"layout-lg":Ji("layout-lg"),"layout-xl":Ji("layout-xl"),"layout-xxl":Ji("layout-xxl"),"layout-xxxl":Ji("layout-xxxl")},ta=(e,t)=>Object.assign(Object.assign({},e),{colourMode:t}),ra=Object.assign(Object.assign({},yi),{Primitive:di}),na=Object.assign(Object.assign({},Ni),{Spec:Ti}),oa=Yi,ia=Object.assign(Object.assign({},qo),{Util:Ci}),aa=ea,sa=Ki,la=Qi,ca=ki,da=Fi,ua={colourScheme:"lifesg",fontScheme:"default",motionScheme:"default",borderScheme:"default",spacingScheme:"default",radiusScheme:"default",shadowScheme:"default",breakpointScheme:"default",resourceScheme:"lifesg",componentScheme:"lifesg",_v2:{colorScheme:"base",textStyleScheme:"base",designTokenScheme:"base",resourceScheme:"base"}},ha={colourScheme:"bookingsg",fontScheme:"bookingsg",motionScheme:"default",borderScheme:"default",spacingScheme:"default",radiusScheme:"default",shadowScheme:"default",breakpointScheme:"default",resourceScheme:"bookingsg",_v2:{colorScheme:"bookingsg",textStyleScheme:"base",designTokenScheme:"base",resourceScheme:"bookingsg"}},fa={colourScheme:"ccube",fontScheme:"default",motionScheme:"default",borderScheme:"default",spacingScheme:"default",radiusScheme:"default",shadowScheme:"default",breakpointScheme:"default",resourceScheme:"ccube",_v2:{colorScheme:"ccube",textStyleScheme:"base",designTokenScheme:"base",resourceScheme:"ccube"}},pa={colourScheme:"mylegacy",fontScheme:"mylegacy",motionScheme:"default",borderScheme:"default",spacingScheme:"default",radiusScheme:"default",shadowScheme:"default",breakpointScheme:"default",resourceScheme:"mylegacy",_v2:{colorScheme:"mylegacy",textStyleScheme:"base",designTokenScheme:"base",resourceScheme:"mylegacy"}},ga={colourScheme:"rbs",fontScheme:"default",motionScheme:"default",borderScheme:"default",spacingScheme:"default",radiusScheme:"default",shadowScheme:"default",breakpointScheme:"default",resourceScheme:"rbs",_v2:{colorScheme:"rbs",textStyleScheme:"base",designTokenScheme:"rbs",resourceScheme:"rbs"}},ma={colourScheme:"oneservice",fontScheme:"oneservice",motionScheme:"default",borderScheme:"default",spacingScheme:"default",radiusScheme:"default",shadowScheme:"default",breakpointScheme:"default",resourceScheme:"oneservice"},ba={colourScheme:"pa",fontScheme:"pa",motionScheme:"default",borderScheme:"default",spacingScheme:"default",radiusScheme:"default",shadowScheme:"default",breakpointScheme:"default",resourceScheme:"pa",componentScheme:"pa"},va={colourScheme:"a11yplayground",fontScheme:"a11yplayground",motionScheme:"default",borderScheme:"default",spacingScheme:"default",radiusScheme:"default",shadowScheme:"default",breakpointScheme:"default",resourceScheme:"a11yplayground",componentScheme:"a11yplayground"},ya={colourScheme:"supportgowhere",fontScheme:"supportgowhere",motionScheme:"default",borderScheme:"default",spacingScheme:"default",radiusScheme:"default",shadowScheme:"default",breakpointScheme:"default",resourceScheme:"supportgowhere",componentScheme:"default"},xa={colourScheme:"supportgowhere",fontScheme:"sgwdigitallobby",motionScheme:"default",borderScheme:"default",spacingScheme:"default",radiusScheme:"default",shadowScheme:"default",breakpointScheme:"default",resourceScheme:"supportgowhere",componentScheme:"default"},wa={colourScheme:"imda",fontScheme:"imda",motionScheme:"default",borderScheme:"default",spacingScheme:"default",radiusScheme:"default",shadowScheme:"default",breakpointScheme:"default",resourceScheme:"imda",componentScheme:"default"},$a={colourScheme:"spf",fontScheme:"spf",motionScheme:"default",borderScheme:"default",spacingScheme:"default",radiusScheme:"spf",shadowScheme:"default",breakpointScheme:"default",resourceScheme:"spf",componentScheme:"spf"};Object.assign(Object.assign({},ua),{light:ta(ua,"light"),dark:ta(ua,"dark")}),Object.assign(Object.assign({},ha),{light:ta(ha,"light"),dark:ta(ha,"dark")}),Object.assign(Object.assign({},fa),{light:ta(fa,"light"),dark:ta(fa,"dark")}),Object.assign(Object.assign({},pa),{light:ta(pa,"light"),dark:ta(pa,"dark")}),Object.assign(Object.assign({},ga),{light:ta(ga,"light"),dark:ta(ga,"dark")}),Object.assign(Object.assign({},ma),{light:ta(ma,"light"),dark:ta(ma,"dark")}),Object.assign(Object.assign({},ba),{light:ta(ba,"light"),dark:ta(ba,"dark")}),Object.assign(Object.assign({},va),{light:ta(va,"light"),dark:ta(va,"dark")}),Object.assign(Object.assign({},ya),{light:ta(ya,"light"),dark:ta(ya,"dark")}),Object.assign(Object.assign({},xa),{light:ta(xa,"light"),dark:ta(xa,"dark")}),Object.assign(Object.assign({},wa),{light:ta(wa,"light"),dark:ta(wa,"dark")}),Object.assign(Object.assign({},$a),{light:ta($a,"light"),dark:ta($a,"dark")});const Ca=e=>O`
    display: -webkit-box;
    -webkit-line-clamp: ${e};
    -webkit-box-orient: vertical;
    overflow: hidden;
`,Sa=(e,t,r=!1)=>O`
        ${na[`${e}-${t}`]}
        ${r?"margin-bottom: 1.05em;":"margin-bottom: 0;"}
    `,Da=e=>{if(e)return O`
            ${Ca(e)}
        `},ka=(e,t,r,n,o)=>O`
    ${Sa(e,t||"regular",n)}
    ${((e=!1,t=!1,r)=>t?O`
            display: block;
            ${Da(r)}
        `:e?O`
            display: inline;
        `:O`
            display: block;
            ${Da(r)}
        `)(r,n,o)}
    color: ${ra.text};
`,Ea=F.div`
    ${e=>ka(e.$textStyle,e.$weight,e.$inline,e.$paragraph,e.$maxLines)}
`,Fa=F.a`
    ${e=>{var t;return O`
        ${Sa(e.$textStyle,e.$weight||"regular")}
        color: ${ra.hyperlink};
        text-decoration: ${null!==(t=e.$underlineStyle)&&void 0!==t?t:"underline"};

        &:hover,
        &:active,
        &:focus {
            color: ${ra["text-hover"]};
        }
    `}}
`,Oa=F(A)`
    height: 1lh;
    width: 1em;
    margin-left: 0.4em;
    vertical-align: middle;
`;var _a;!function(r){const n=(t,r,n)=>{const i=(n,o)=>{var{weight:i,inline:a,paragraph:s,maxLines:l}=n,c=ct(n,["weight","inline","paragraph","maxLines"]);return e(Ea,Object.assign({ref:o,as:a?"span":t,$textStyle:r,$weight:i,$inline:a,$paragraph:s,$maxLines:l},c))};return i.displayName=`Typography.${n}`,o.forwardRef(i)};r.HeadingXXL=n("h1","heading-xxl","HeadingXXL"),r.HeadingXL=n("h2","heading-xl","HeadingXL"),r.HeadingLG=n("h3","heading-lg","HeadingLG"),r.HeadingMD=n("h4","heading-md","HeadingMD"),r.HeadingSM=n("h5","heading-sm","HeadingSM"),r.HeadingXS=n("h6","heading-xs","HeadingXS");const i=(t,r)=>{const n=(r,n)=>{var{weight:o,inline:i,paragraph:a,maxLines:s}=r,l=ct(r,["weight","inline","paragraph","maxLines"]);return e(Ea,Object.assign({ref:n,as:i?"span":"p",$textStyle:t,$weight:o,$inline:i,$paragraph:a,$maxLines:s},l))};return n.displayName=`Typography.${r}`,o.forwardRef(n)};r.BodyBL=i("body-baseline","BodyBL"),r.BodyMD=i("body-md","BodyMD"),r.BodySM=i("body-sm","BodySM"),r.BodyXS=i("body-xs","BodyXS");const a=(r,n)=>{const i=(n,o)=>{var{weight:i,children:a,external:s,underlineStyle:l="underline"}=n,c=ct(n,["weight","children","external","underlineStyle"]);return t(Fa,Object.assign({ref:o,$textStyle:r,$weight:i,$underlineStyle:l},c,{children:[a,s&&e(Oa,{})]}))};return i.displayName=`Typography.${n}`,o.forwardRef(i)};r.LinkBL=a("body-baseline","LinkBL"),r.LinkMD=a("body-md","LinkMD"),r.LinkSM=a("body-sm","LinkSM"),r.LinkXS=a("body-xs","LinkXS")}(_a||(_a={}));const Ta=F.div`
    position: relative;
    display: flex;
    flex-direction: column;

    ${e=>{if(e.$border)return O`
                ${ia.Util["dashed-default"]({radius:sa.sm,thickness:ia["width-040"],colour:ra.border})}
                padding: ${aa["spacing-32"]};

                ${da.MaxWidth.md} {
                    padding: ${aa["spacing-32"]} ${aa["spacing-20"]};
                }
            `}}
`,Ia=F.input`
    display: none;
`,Ma=F.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;

    background: ${ra["bg-primary-subtler"]};
    ${ia.Util["dashed-default"]({radius:sa.sm,thickness:ia["width-040"],colour:ra["border-primary"]})}

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`,Aa=F(_a.BodyMD)`
    color: ${ra["text-primary"]};
    text-align: center;
`,Ba=F(E)`
    color: ${ra["icon-primary"]};
    height: 4rem;
    width: 4rem;
`,ja=u((({children:r,accept:n,capture:o,multiple:i,id:a,className:l,name:c,border:d,disabled:u,onChange:f,"data-testid":p},g)=>{const m=s(null),{getRootProps:b,isDragActive:v}=dr({onDrop:f,noClick:!0,disabled:u});h(g,(()=>Object.assign(Object.assign({},m.current),{openFileDialog:()=>{m.current&&(m.current.value="",m.current.click())}})));return t(Ta,Object.assign({id:a,"data-testid":p||"dropzone",$border:d,className:l},b(),{children:[e(Ia,{type:"file",name:c,ref:m,tabIndex:-1,"aria-hidden":!0,accept:n,capture:o,multiple:i,"data-testid":p?`${p}-input`:"dropzone-input",onChange:e=>{e.target.files&&f(Array.from(e.target.files))}}),r,v&&t(Ma,{children:[e(Ba,{}),e(Aa,{weight:"semibold",children:"Drop files here"})]})]}))}));const za="undefined"!=typeof window&&void 0!==window.document&&void 0!==window.document.createElement;function Ra(e){const t=Object.prototype.toString.call(e);return"[object Window]"===t||"[object global]"===t}function La(e){return"nodeType"in e}function Pa(e){var t,r;return e?Ra(e)?e:La(e)&&null!=(t=null==(r=e.ownerDocument)?void 0:r.defaultView)?t:window:window}function Na(e){const{Document:t}=Pa(e);return e instanceof t}function Wa(e){return!Ra(e)&&e instanceof Pa(e).HTMLElement}function Ha(e){return e instanceof Pa(e).SVGElement}function Ya(e){return e?Ra(e)?e.document:La(e)?Na(e)?e:Wa(e)||Ha(e)?e.ownerDocument:document:document:document}const Va=za?p:c;function Ua(e){const t=s(e);return Va((()=>{t.current=e})),d((function(){for(var e=arguments.length,r=new Array(e),n=0;n<e;n++)r[n]=arguments[n];return null==t.current?void 0:t.current(...r)}),[])}function Ka(e,t){void 0===t&&(t=[e]);const r=s(e);return Va((()=>{r.current!==e&&(r.current=e)}),t),r}function qa(e,t){const r=s();return a((()=>{const t=e(r.current);return r.current=t,t}),[...t])}function Za(e){const t=Ua(e),r=s(null),n=d((e=>{e!==r.current&&(null==t||t(e,r.current)),r.current=e}),[]);return[r,n]}function Ga(e){const t=s();return c((()=>{t.current=e}),[e]),t.current}let Qa={};function Xa(e,t){return a((()=>{if(t)return t;const r=null==Qa[e]?0:Qa[e]+1;return Qa[e]=r,e+"-"+r}),[e,t])}function Ja(e){return function(t){for(var r=arguments.length,n=new Array(r>1?r-1:0),o=1;o<r;o++)n[o-1]=arguments[o];return n.reduce(((t,r)=>{const n=Object.entries(r);for(const[r,o]of n){const n=t[r];null!=n&&(t[r]=n+e*o)}return t}),{...t})}}const es=Ja(1),ts=Ja(-1);function rs(e){if(!e)return!1;const{KeyboardEvent:t}=Pa(e.target);return t&&e instanceof t}function ns(e){if(function(e){if(!e)return!1;const{TouchEvent:t}=Pa(e.target);return t&&e instanceof t}(e)){if(e.touches&&e.touches.length){const{clientX:t,clientY:r}=e.touches[0];return{x:t,y:r}}if(e.changedTouches&&e.changedTouches.length){const{clientX:t,clientY:r}=e.changedTouches[0];return{x:t,y:r}}}return function(e){return"clientX"in e&&"clientY"in e}(e)?{x:e.clientX,y:e.clientY}:null}const os=Object.freeze({Translate:{toString(e){if(!e)return;const{x:t,y:r}=e;return"translate3d("+(t?Math.round(t):0)+"px, "+(r?Math.round(r):0)+"px, 0)"}},Scale:{toString(e){if(!e)return;const{scaleX:t,scaleY:r}=e;return"scaleX("+t+") scaleY("+r+")"}},Transform:{toString(e){if(e)return[os.Translate.toString(e),os.Scale.toString(e)].join(" ")}},Transition:{toString(e){let{property:t,duration:r,easing:n}=e;return t+" "+r+"ms "+n}}}),is="a,frame,iframe,input:not([type=hidden]):not(:disabled),select:not(:disabled),textarea:not(:disabled),button:not(:disabled),*[tabindex]";function as(e){return e.matches(is)?e:e.querySelector(is)}const ss={display:"none"};function ls(e){let{id:t,value:r}=e;return o.createElement("div",{id:t,style:ss},r)}function cs(e){let{id:t,announcement:r,ariaLiveType:n="assertive"}=e;return o.createElement("div",{id:t,style:{position:"fixed",width:1,height:1,margin:-1,border:0,padding:0,overflow:"hidden",clip:"rect(0 0 0 0)",clipPath:"inset(100%)",whiteSpace:"nowrap"},role:"status","aria-live":n,"aria-atomic":!0},r)}const ds=i(null);const us={draggable:"\n    To pick up a draggable item, press the space bar.\n    While dragging, use the arrow keys to move the item.\n    Press space again to drop the item in its new position, or press escape to cancel.\n  "},hs={onDragStart(e){let{active:t}=e;return"Picked up draggable item "+t.id+"."},onDragOver(e){let{active:t,over:r}=e;return r?"Draggable item "+t.id+" was moved over droppable area "+r.id+".":"Draggable item "+t.id+" is no longer over a droppable area."},onDragEnd(e){let{active:t,over:r}=e;return r?"Draggable item "+t.id+" was dropped over droppable area "+r.id:"Draggable item "+t.id+" was dropped."},onDragCancel(e){let{active:t}=e;return"Dragging was cancelled. Draggable item "+t.id+" was dropped."}};function fs(e){let{announcements:t=hs,container:r,hiddenTextDescribedById:n,screenReaderInstructions:i=us}=e;const{announce:s,announcement:l}=function(){const[e,t]=g("");return{announce:d((e=>{null!=e&&t(e)}),[]),announcement:e}}(),u=Xa("DndLiveRegion"),[h,f]=g(!1);if(c((()=>{f(!0)}),[]),function(e){const t=b(ds);c((()=>{if(!t)throw new Error("useDndMonitor must be used within a children of <DndContext>");return t(e)}),[e,t])}(a((()=>({onDragStart(e){let{active:r}=e;s(t.onDragStart({active:r}))},onDragMove(e){let{active:r,over:n}=e;t.onDragMove&&s(t.onDragMove({active:r,over:n}))},onDragOver(e){let{active:r,over:n}=e;s(t.onDragOver({active:r,over:n}))},onDragEnd(e){let{active:r,over:n}=e;s(t.onDragEnd({active:r,over:n}))},onDragCancel(e){let{active:r,over:n}=e;s(t.onDragCancel({active:r,over:n}))}})),[s,t])),!h)return null;const p=o.createElement(o.Fragment,null,o.createElement(ls,{id:n,value:i.draggable}),o.createElement(cs,{id:u,announcement:l}));return r?z(p,r):p}var ps;function gs(){}function ms(e,t){return a((()=>({sensor:e,options:null!=t?t:{}})),[e,t])}!function(e){e.DragStart="dragStart",e.DragMove="dragMove",e.DragEnd="dragEnd",e.DragCancel="dragCancel",e.DragOver="dragOver",e.RegisterDroppable="registerDroppable",e.SetDroppableDisabled="setDroppableDisabled",e.UnregisterDroppable="unregisterDroppable"}(ps||(ps={}));const bs=Object.freeze({x:0,y:0});function vs(e,t){let{data:{value:r}}=e,{data:{value:n}}=t;return r-n}function ys(e,t){let{data:{value:r}}=e,{data:{value:n}}=t;return n-r}function xs(e){let{left:t,top:r,height:n,width:o}=e;return[{x:t,y:r},{x:t+o,y:r},{x:t,y:r+n},{x:t+o,y:r+n}]}function ws(e,t){if(!e||0===e.length)return null;const[r]=e;return t?r[t]:r}function $s(e,t){const r=Math.max(t.top,e.top),n=Math.max(t.left,e.left),o=Math.min(t.left+t.width,e.left+e.width),i=Math.min(t.top+t.height,e.top+e.height),a=o-n,s=i-r;if(n<o&&r<i){const r=t.width*t.height,n=e.width*e.height,o=a*s;return Number((o/(r+n-o)).toFixed(4))}return 0}const Cs=e=>{let{collisionRect:t,droppableRects:r,droppableContainers:n}=e;const o=[];for(const e of n){const{id:n}=e,i=r.get(n);if(i){const r=$s(i,t);r>0&&o.push({id:n,data:{droppableContainer:e,value:r}})}}return o.sort(ys)};function Ss(e,t){return e&&t?{x:e.left-t.left,y:e.top-t.top}:bs}function Ds(e){return function(t){for(var r=arguments.length,n=new Array(r>1?r-1:0),o=1;o<r;o++)n[o-1]=arguments[o];return n.reduce(((t,r)=>({...t,top:t.top+e*r.y,bottom:t.bottom+e*r.y,left:t.left+e*r.x,right:t.right+e*r.x})),{...t})}}const ks=Ds(1);const Es={ignoreTransform:!1};function Fs(e,t){void 0===t&&(t=Es);let r=e.getBoundingClientRect();if(t.ignoreTransform){const{transform:t,transformOrigin:n}=Pa(e).getComputedStyle(e);t&&(r=function(e,t,r){const n=function(e){if(e.startsWith("matrix3d(")){const t=e.slice(9,-1).split(/, /);return{x:+t[12],y:+t[13],scaleX:+t[0],scaleY:+t[5]}}if(e.startsWith("matrix(")){const t=e.slice(7,-1).split(/, /);return{x:+t[4],y:+t[5],scaleX:+t[0],scaleY:+t[3]}}return null}(t);if(!n)return e;const{scaleX:o,scaleY:i,x:a,y:s}=n,l=e.left-a-(1-o)*parseFloat(r),c=e.top-s-(1-i)*parseFloat(r.slice(r.indexOf(" ")+1)),d=o?e.width/o:e.width,u=i?e.height/i:e.height;return{width:d,height:u,top:c,right:l+d,bottom:c+u,left:l}}(r,t,n))}const{top:n,left:o,width:i,height:a,bottom:s,right:l}=r;return{top:n,left:o,width:i,height:a,bottom:s,right:l}}function Os(e){return Fs(e,{ignoreTransform:!0})}function _s(e,t){const r=[];return e?function n(o){if(null!=t&&r.length>=t)return r;if(!o)return r;if(Na(o)&&null!=o.scrollingElement&&!r.includes(o.scrollingElement))return r.push(o.scrollingElement),r;if(!Wa(o)||Ha(o))return r;if(r.includes(o))return r;const i=Pa(e).getComputedStyle(o);return o!==e&&function(e,t){void 0===t&&(t=Pa(e).getComputedStyle(e));const r=/(auto|scroll|overlay)/;return["overflow","overflowX","overflowY"].some((e=>{const n=t[e];return"string"==typeof n&&r.test(n)}))}(o,i)&&r.push(o),function(e,t){return void 0===t&&(t=Pa(e).getComputedStyle(e)),"fixed"===t.position}(o,i)?r:n(o.parentNode)}(e):r}function Ts(e){const[t]=_s(e,1);return null!=t?t:null}function Is(e){return za&&e?Ra(e)?e:La(e)?Na(e)||e===Ya(e).scrollingElement?window:Wa(e)?e:null:null:null}function Ms(e){return Ra(e)?e.scrollX:e.scrollLeft}function As(e){return Ra(e)?e.scrollY:e.scrollTop}function Bs(e){return{x:Ms(e),y:As(e)}}var js;function zs(e){return!(!za||!e)&&e===document.scrollingElement}function Rs(e){const t={x:0,y:0},r=zs(e)?{height:window.innerHeight,width:window.innerWidth}:{height:e.clientHeight,width:e.clientWidth},n={x:e.scrollWidth-r.width,y:e.scrollHeight-r.height};return{isTop:e.scrollTop<=t.y,isLeft:e.scrollLeft<=t.x,isBottom:e.scrollTop>=n.y,isRight:e.scrollLeft>=n.x,maxScroll:n,minScroll:t}}!function(e){e[e.Forward=1]="Forward",e[e.Backward=-1]="Backward"}(js||(js={}));const Ls={x:.2,y:.2};function Ps(e,t,r,n,o){let{top:i,left:a,right:s,bottom:l}=r;void 0===n&&(n=10),void 0===o&&(o=Ls);const{isTop:c,isBottom:d,isLeft:u,isRight:h}=Rs(e),f={x:0,y:0},p={x:0,y:0},g=t.height*o.y,m=t.width*o.x;return!c&&i<=t.top+g?(f.y=js.Backward,p.y=n*Math.abs((t.top+g-i)/g)):!d&&l>=t.bottom-g&&(f.y=js.Forward,p.y=n*Math.abs((t.bottom-g-l)/g)),!h&&s>=t.right-m?(f.x=js.Forward,p.x=n*Math.abs((t.right-m-s)/m)):!u&&a<=t.left+m&&(f.x=js.Backward,p.x=n*Math.abs((t.left+m-a)/m)),{direction:f,speed:p}}function Ns(e){if(e===document.scrollingElement){const{innerWidth:e,innerHeight:t}=window;return{top:0,left:0,right:e,bottom:t,width:e,height:t}}const{top:t,left:r,right:n,bottom:o}=e.getBoundingClientRect();return{top:t,left:r,right:n,bottom:o,width:e.clientWidth,height:e.clientHeight}}function Ws(e){return e.reduce(((e,t)=>es(e,Bs(t))),bs)}const Hs=[["x",["left","right"],function(e){return e.reduce(((e,t)=>e+Ms(t)),0)}],["y",["top","bottom"],function(e){return e.reduce(((e,t)=>e+As(t)),0)}]];class Ys{constructor(e,t){this.rect=void 0,this.width=void 0,this.height=void 0,this.top=void 0,this.bottom=void 0,this.right=void 0,this.left=void 0;const r=_s(t),n=Ws(r);this.rect={...e},this.width=e.width,this.height=e.height;for(const[e,t,o]of Hs)for(const i of t)Object.defineProperty(this,i,{get:()=>{const t=o(r),a=n[e]-t;return this.rect[i]+a},enumerable:!0});Object.defineProperty(this,"rect",{enumerable:!1})}}class Vs{constructor(e){this.target=void 0,this.listeners=[],this.removeAll=()=>{this.listeners.forEach((e=>{var t;return null==(t=this.target)?void 0:t.removeEventListener(...e)}))},this.target=e}add(e,t,r){var n;null==(n=this.target)||n.addEventListener(e,t,r),this.listeners.push([e,t,r])}}function Us(e,t){const r=Math.abs(e.x),n=Math.abs(e.y);return"number"==typeof t?Math.sqrt(r**2+n**2)>t:"x"in t&&"y"in t?r>t.x&&n>t.y:"x"in t?r>t.x:"y"in t&&n>t.y}var Ks,qs;function Zs(e){e.preventDefault()}function Gs(e){e.stopPropagation()}!function(e){e.Click="click",e.DragStart="dragstart",e.Keydown="keydown",e.ContextMenu="contextmenu",e.Resize="resize",e.SelectionChange="selectionchange",e.VisibilityChange="visibilitychange"}(Ks||(Ks={})),function(e){e.Space="Space",e.Down="ArrowDown",e.Right="ArrowRight",e.Left="ArrowLeft",e.Up="ArrowUp",e.Esc="Escape",e.Enter="Enter"}(qs||(qs={}));const Qs={start:[qs.Space,qs.Enter],cancel:[qs.Esc],end:[qs.Space,qs.Enter]},Xs=(e,t)=>{let{currentCoordinates:r}=t;switch(e.code){case qs.Right:return{...r,x:r.x+25};case qs.Left:return{...r,x:r.x-25};case qs.Down:return{...r,y:r.y+25};case qs.Up:return{...r,y:r.y-25}}};let Js=class{constructor(e){this.props=void 0,this.autoScrollEnabled=!1,this.referenceCoordinates=void 0,this.listeners=void 0,this.windowListeners=void 0,this.props=e;const{event:{target:t}}=e;this.props=e,this.listeners=new Vs(Ya(t)),this.windowListeners=new Vs(Pa(t)),this.handleKeyDown=this.handleKeyDown.bind(this),this.handleCancel=this.handleCancel.bind(this),this.attach()}attach(){this.handleStart(),this.windowListeners.add(Ks.Resize,this.handleCancel),this.windowListeners.add(Ks.VisibilityChange,this.handleCancel),setTimeout((()=>this.listeners.add(Ks.Keydown,this.handleKeyDown)))}handleStart(){const{activeNode:e,onStart:t}=this.props,r=e.node.current;r&&function(e,t){if(void 0===t&&(t=Fs),!e)return;const{top:r,left:n,bottom:o,right:i}=t(e);Ts(e)&&(o<=0||i<=0||r>=window.innerHeight||n>=window.innerWidth)&&e.scrollIntoView({block:"center",inline:"center"})}(r),t(bs)}handleKeyDown(e){if(rs(e)){const{active:t,context:r,options:n}=this.props,{keyboardCodes:o=Qs,coordinateGetter:i=Xs,scrollBehavior:a="smooth"}=n,{code:s}=e;if(o.end.includes(s))return void this.handleEnd(e);if(o.cancel.includes(s))return void this.handleCancel(e);const{collisionRect:l}=r.current,c=l?{x:l.left,y:l.top}:bs;this.referenceCoordinates||(this.referenceCoordinates=c);const d=i(e,{active:t,context:r.current,currentCoordinates:c});if(d){const t=ts(d,c),n={x:0,y:0},{scrollableAncestors:o}=r.current;for(const r of o){const o=e.code,{isTop:i,isRight:s,isLeft:l,isBottom:c,maxScroll:u,minScroll:h}=Rs(r),f=Ns(r),p={x:Math.min(o===qs.Right?f.right-f.width/2:f.right,Math.max(o===qs.Right?f.left:f.left+f.width/2,d.x)),y:Math.min(o===qs.Down?f.bottom-f.height/2:f.bottom,Math.max(o===qs.Down?f.top:f.top+f.height/2,d.y))},g=o===qs.Right&&!s||o===qs.Left&&!l,m=o===qs.Down&&!c||o===qs.Up&&!i;if(g&&p.x!==d.x){const e=r.scrollLeft+t.x,i=o===qs.Right&&e<=u.x||o===qs.Left&&e>=h.x;if(i&&!t.y)return void r.scrollTo({left:e,behavior:a});n.x=i?r.scrollLeft-e:o===qs.Right?r.scrollLeft-u.x:r.scrollLeft-h.x,n.x&&r.scrollBy({left:-n.x,behavior:a});break}if(m&&p.y!==d.y){const e=r.scrollTop+t.y,i=o===qs.Down&&e<=u.y||o===qs.Up&&e>=h.y;if(i&&!t.x)return void r.scrollTo({top:e,behavior:a});n.y=i?r.scrollTop-e:o===qs.Down?r.scrollTop-u.y:r.scrollTop-h.y,n.y&&r.scrollBy({top:-n.y,behavior:a});break}}this.handleMove(e,es(ts(d,this.referenceCoordinates),n))}}}handleMove(e,t){const{onMove:r}=this.props;e.preventDefault(),r(t)}handleEnd(e){const{onEnd:t}=this.props;e.preventDefault(),this.detach(),t()}handleCancel(e){const{onCancel:t}=this.props;e.preventDefault(),this.detach(),t()}detach(){this.listeners.removeAll(),this.windowListeners.removeAll()}};function el(e){return Boolean(e&&"distance"in e)}function tl(e){return Boolean(e&&"delay"in e)}Js.activators=[{eventName:"onKeyDown",handler:(e,t,r)=>{let{keyboardCodes:n=Qs,onActivation:o}=t,{active:i}=r;const{code:a}=e.nativeEvent;if(n.start.includes(a)){const t=i.activatorNode.current;return(!t||e.target===t)&&(e.preventDefault(),null==o||o({event:e.nativeEvent}),!0)}return!1}}];class rl{constructor(e,t,r){var n;void 0===r&&(r=function(e){const{EventTarget:t}=Pa(e);return e instanceof t?e:Ya(e)}(e.event.target)),this.props=void 0,this.events=void 0,this.autoScrollEnabled=!0,this.document=void 0,this.activated=!1,this.initialCoordinates=void 0,this.timeoutId=null,this.listeners=void 0,this.documentListeners=void 0,this.windowListeners=void 0,this.props=e,this.events=t;const{event:o}=e,{target:i}=o;this.props=e,this.events=t,this.document=Ya(i),this.documentListeners=new Vs(this.document),this.listeners=new Vs(r),this.windowListeners=new Vs(Pa(i)),this.initialCoordinates=null!=(n=ns(o))?n:bs,this.handleStart=this.handleStart.bind(this),this.handleMove=this.handleMove.bind(this),this.handleEnd=this.handleEnd.bind(this),this.handleCancel=this.handleCancel.bind(this),this.handleKeydown=this.handleKeydown.bind(this),this.removeTextSelection=this.removeTextSelection.bind(this),this.attach()}attach(){const{events:e,props:{options:{activationConstraint:t,bypassActivationConstraint:r}}}=this;if(this.listeners.add(e.move.name,this.handleMove,{passive:!1}),this.listeners.add(e.end.name,this.handleEnd),this.windowListeners.add(Ks.Resize,this.handleCancel),this.windowListeners.add(Ks.DragStart,Zs),this.windowListeners.add(Ks.VisibilityChange,this.handleCancel),this.windowListeners.add(Ks.ContextMenu,Zs),this.documentListeners.add(Ks.Keydown,this.handleKeydown),t){if(null!=r&&r({event:this.props.event,activeNode:this.props.activeNode,options:this.props.options}))return this.handleStart();if(tl(t))return void(this.timeoutId=setTimeout(this.handleStart,t.delay));if(el(t))return}this.handleStart()}detach(){this.listeners.removeAll(),this.windowListeners.removeAll(),setTimeout(this.documentListeners.removeAll,50),null!==this.timeoutId&&(clearTimeout(this.timeoutId),this.timeoutId=null)}handleStart(){const{initialCoordinates:e}=this,{onStart:t}=this.props;e&&(this.activated=!0,this.documentListeners.add(Ks.Click,Gs,{capture:!0}),this.removeTextSelection(),this.documentListeners.add(Ks.SelectionChange,this.removeTextSelection),t(e))}handleMove(e){var t;const{activated:r,initialCoordinates:n,props:o}=this,{onMove:i,options:{activationConstraint:a}}=o;if(!n)return;const s=null!=(t=ns(e))?t:bs,l=ts(n,s);if(!r&&a){if(el(a)){if(null!=a.tolerance&&Us(l,a.tolerance))return this.handleCancel();if(Us(l,a.distance))return this.handleStart()}return tl(a)&&Us(l,a.tolerance)?this.handleCancel():void 0}e.cancelable&&e.preventDefault(),i(s)}handleEnd(){const{onEnd:e}=this.props;this.detach(),e()}handleCancel(){const{onCancel:e}=this.props;this.detach(),e()}handleKeydown(e){e.code===qs.Esc&&this.handleCancel()}removeTextSelection(){var e;null==(e=this.document.getSelection())||e.removeAllRanges()}}const nl={move:{name:"pointermove"},end:{name:"pointerup"}};class ol extends rl{constructor(e){const{event:t}=e,r=Ya(t.target);super(e,nl,r)}}ol.activators=[{eventName:"onPointerDown",handler:(e,t)=>{let{nativeEvent:r}=e,{onActivation:n}=t;return!(!r.isPrimary||0!==r.button)&&(null==n||n({event:r}),!0)}}];const il={move:{name:"mousemove"},end:{name:"mouseup"}};var al;!function(e){e[e.RightClick=2]="RightClick"}(al||(al={}));let sl=class extends rl{constructor(e){super(e,il,Ya(e.event.target))}};sl.activators=[{eventName:"onMouseDown",handler:(e,t)=>{let{nativeEvent:r}=e,{onActivation:n}=t;return r.button!==al.RightClick&&(null==n||n({event:r}),!0)}}];const ll={move:{name:"touchmove"},end:{name:"touchend"}};class cl extends rl{constructor(e){super(e,ll)}static setup(){return window.addEventListener(ll.move.name,e,{capture:!1,passive:!1}),function(){window.removeEventListener(ll.move.name,e)};function e(){}}}var dl,ul;function hl(e){let{acceleration:t,activator:r=dl.Pointer,canScroll:n,draggingRect:o,enabled:i,interval:l=5,order:u=ul.TreeOrder,pointerCoordinates:h,scrollableAncestors:f,scrollableAncestorRects:p,delta:g,threshold:m}=e;const b=function(e){let{delta:t,disabled:r}=e;const n=Ga(t);return qa((e=>{if(r||!n||!e)return fl;const o={x:Math.sign(t.x-n.x),y:Math.sign(t.y-n.y)};return{x:{[js.Backward]:e.x[js.Backward]||-1===o.x,[js.Forward]:e.x[js.Forward]||1===o.x},y:{[js.Backward]:e.y[js.Backward]||-1===o.y,[js.Forward]:e.y[js.Forward]||1===o.y}}}),[r,t,n])}({delta:g,disabled:!i}),[v,y]=function(){const e=s(null);return[d(((t,r)=>{e.current=setInterval(t,r)}),[]),d((()=>{null!==e.current&&(clearInterval(e.current),e.current=null)}),[])]}(),x=s({x:0,y:0}),w=s({x:0,y:0}),$=a((()=>{switch(r){case dl.Pointer:return h?{top:h.y,bottom:h.y,left:h.x,right:h.x}:null;case dl.DraggableRect:return o}}),[r,o,h]),C=s(null),S=d((()=>{const e=C.current;if(!e)return;const t=x.current.x*w.current.x,r=x.current.y*w.current.y;e.scrollBy(t,r)}),[]),D=a((()=>u===ul.TreeOrder?[...f].reverse():f),[u,f]);c((()=>{if(i&&f.length&&$){for(const e of D){if(!1===(null==n?void 0:n(e)))continue;const r=f.indexOf(e),o=p[r];if(!o)continue;const{direction:i,speed:a}=Ps(e,o,$,t,m);for(const e of["x","y"])b[e][i[e]]||(a[e]=0,i[e]=0);if(a.x>0||a.y>0)return y(),C.current=e,v(S,l),x.current=a,void(w.current=i)}x.current={x:0,y:0},w.current={x:0,y:0},y()}else y()}),[t,S,n,y,i,l,JSON.stringify($),JSON.stringify(b),v,f,D,p,JSON.stringify(m)])}cl.activators=[{eventName:"onTouchStart",handler:(e,t)=>{let{nativeEvent:r}=e,{onActivation:n}=t;const{touches:o}=r;return!(o.length>1)&&(null==n||n({event:r}),!0)}}],function(e){e[e.Pointer=0]="Pointer",e[e.DraggableRect=1]="DraggableRect"}(dl||(dl={})),function(e){e[e.TreeOrder=0]="TreeOrder",e[e.ReversedTreeOrder=1]="ReversedTreeOrder"}(ul||(ul={}));const fl={x:{[js.Backward]:!1,[js.Forward]:!1},y:{[js.Backward]:!1,[js.Forward]:!1}};var pl,gl;!function(e){e[e.Always=0]="Always",e[e.BeforeDragging=1]="BeforeDragging",e[e.WhileDragging=2]="WhileDragging"}(pl||(pl={})),function(e){e.Optimized="optimized"}(gl||(gl={}));const ml=new Map;function bl(e,t){return qa((r=>e?r||("function"==typeof t?t(e):e):null),[t,e])}function vl(e){let{callback:t,disabled:r}=e;const n=Ua(t),o=a((()=>{if(r||"undefined"==typeof window||void 0===window.ResizeObserver)return;const{ResizeObserver:e}=window;return new e(n)}),[r]);return c((()=>()=>null==o?void 0:o.disconnect()),[o]),o}function yl(e){return new Ys(Fs(e),e)}function xl(e,t,r){void 0===t&&(t=yl);const[n,o]=l((function(n){if(!e)return null;var o;if(!1===e.isConnected)return null!=(o=null!=n?n:r)?o:null;const i=t(e);if(JSON.stringify(n)===JSON.stringify(i))return n;return i}),null),i=function(e){let{callback:t,disabled:r}=e;const n=Ua(t),o=a((()=>{if(r||"undefined"==typeof window||void 0===window.MutationObserver)return;const{MutationObserver:e}=window;return new e(n)}),[n,r]);return c((()=>()=>null==o?void 0:o.disconnect()),[o]),o}({callback(t){if(e)for(const r of t){const{type:t,target:n}=r;if("childList"===t&&n instanceof HTMLElement&&n.contains(e)){o();break}}}}),s=vl({callback:o});return Va((()=>{o(),e?(null==s||s.observe(e),null==i||i.observe(document.body,{childList:!0,subtree:!0})):(null==s||s.disconnect(),null==i||i.disconnect())}),[e]),n}const wl=[];function $l(e,t){void 0===t&&(t=[]);const r=s(null);return c((()=>{r.current=null}),t),c((()=>{const t=e!==bs;t&&!r.current&&(r.current=e),!t&&r.current&&(r.current=null)}),[e]),r.current?ts(e,r.current):bs}function Cl(e){return a((()=>e?function(e){const t=e.innerWidth,r=e.innerHeight;return{top:0,left:0,right:t,bottom:r,width:t,height:r}}(e):null),[e])}const Sl=[];function Dl(e){let{measure:t}=e;const[r,n]=g(null),o=d((e=>{for(const{target:r}of e)if(Wa(r)){n((e=>{const n=t(r);return e?{...e,width:n.width,height:n.height}:n}));break}}),[t]),i=vl({callback:o}),s=d((e=>{const r=function(e){if(!e)return null;if(e.children.length>1)return e;const t=e.children[0];return Wa(t)?t:e}(e);null==i||i.disconnect(),r&&(null==i||i.observe(r)),n(r?t(r):null)}),[t,i]),[l,c]=Za(s);return a((()=>({nodeRef:l,rect:r,setRef:c})),[r,l,c])}const kl=[{sensor:ol,options:{}},{sensor:Js,options:{}}],El={current:{}},Fl={draggable:{measure:Os},droppable:{measure:Os,strategy:pl.WhileDragging,frequency:gl.Optimized},dragOverlay:{measure:Fs}};class Ol extends Map{get(e){var t;return null!=e&&null!=(t=super.get(e))?t:void 0}toArray(){return Array.from(this.values())}getEnabled(){return this.toArray().filter((e=>{let{disabled:t}=e;return!t}))}getNodeFor(e){var t,r;return null!=(t=null==(r=this.get(e))?void 0:r.node.current)?t:void 0}}const _l={activatorEvent:null,active:null,activeNode:null,activeNodeRect:null,collisions:null,containerNodeRect:null,draggableNodes:new Map,droppableRects:new Map,droppableContainers:new Ol,over:null,dragOverlay:{nodeRef:{current:null},rect:null,setRef:gs},scrollableAncestors:[],scrollableAncestorRects:[],measuringConfiguration:Fl,measureDroppableContainers:gs,windowRect:null,measuringScheduled:!1},Tl=i({activatorEvent:null,activators:[],active:null,activeNodeRect:null,ariaDescribedById:{draggable:""},dispatch:gs,draggableNodes:new Map,over:null,measureDroppableContainers:gs}),Il=i(_l);function Ml(){return{draggable:{active:null,initialCoordinates:{x:0,y:0},nodes:new Map,translate:{x:0,y:0}},droppable:{containers:new Ol}}}function Al(e,t){switch(t.type){case ps.DragStart:return{...e,draggable:{...e.draggable,initialCoordinates:t.initialCoordinates,active:t.active}};case ps.DragMove:return e.draggable.active?{...e,draggable:{...e.draggable,translate:{x:t.coordinates.x-e.draggable.initialCoordinates.x,y:t.coordinates.y-e.draggable.initialCoordinates.y}}}:e;case ps.DragEnd:case ps.DragCancel:return{...e,draggable:{...e.draggable,active:null,initialCoordinates:{x:0,y:0},translate:{x:0,y:0}}};case ps.RegisterDroppable:{const{element:r}=t,{id:n}=r,o=new Ol(e.droppable.containers);return o.set(n,r),{...e,droppable:{...e.droppable,containers:o}}}case ps.SetDroppableDisabled:{const{id:r,key:n,disabled:o}=t,i=e.droppable.containers.get(r);if(!i||n!==i.key)return e;const a=new Ol(e.droppable.containers);return a.set(r,{...i,disabled:o}),{...e,droppable:{...e.droppable,containers:a}}}case ps.UnregisterDroppable:{const{id:r,key:n}=t,o=e.droppable.containers.get(r);if(!o||n!==o.key)return e;const i=new Ol(e.droppable.containers);return i.delete(r),{...e,droppable:{...e.droppable,containers:i}}}default:return e}}function Bl(e){let{disabled:t}=e;const{active:r,activatorEvent:n,draggableNodes:o}=b(Tl),i=Ga(n),a=Ga(null==r?void 0:r.id);return c((()=>{if(!t&&!n&&i&&null!=a){if(!rs(i))return;if(document.activeElement===i.target)return;const e=o.get(a);if(!e)return;const{activatorNode:t,node:r}=e;if(!t.current&&!r.current)return;requestAnimationFrame((()=>{for(const e of[t.current,r.current]){if(!e)continue;const t=as(e);if(t){t.focus();break}}}))}}),[n,t,o,a,i]),null}const jl=i({...bs,scaleX:1,scaleY:1});var zl;!function(e){e[e.Uninitialized=0]="Uninitialized",e[e.Initializing=1]="Initializing",e[e.Initialized=2]="Initialized"}(zl||(zl={}));const Rl=m((function(e){var t,r,n,i;let{id:u,accessibility:h,autoScroll:f=!0,children:p,sensors:m=kl,collisionDetection:b=Cs,measuring:v,modifiers:y,...x}=e;const w=l(Al,void 0,Ml),[$,C]=w,[S,D]=function(){const[e]=g((()=>new Set)),t=d((t=>(e.add(t),()=>e.delete(t))),[e]);return[d((t=>{let{type:r,event:n}=t;e.forEach((e=>{var t;return null==(t=e[r])?void 0:t.call(e,n)}))}),[e]),t]}(),[k,E]=g(zl.Uninitialized),F=k===zl.Initialized,{draggable:{active:O,nodes:_,translate:T},droppable:{containers:I}}=$,M=O?_.get(O):null,A=s({initial:null,translated:null}),B=a((()=>{var e;return null!=O?{id:O,data:null!=(e=null==M?void 0:M.data)?e:El,rect:A}:null}),[O,M]),z=s(null),[R,L]=g(null),[P,N]=g(null),W=Ka(x,Object.values(x)),H=Xa("DndDescribedBy",u),Y=a((()=>I.getEnabled()),[I]),V=function(e){return a((()=>({draggable:{...Fl.draggable,...null==e?void 0:e.draggable},droppable:{...Fl.droppable,...null==e?void 0:e.droppable},dragOverlay:{...Fl.dragOverlay,...null==e?void 0:e.dragOverlay}})),[null==e?void 0:e.draggable,null==e?void 0:e.droppable,null==e?void 0:e.dragOverlay])}(v),{droppableRects:U,measureDroppableContainers:K,measuringScheduled:q}=function(e,t){let{dragging:r,dependencies:n,config:o}=t;const[i,a]=g(null),{frequency:l,measure:u,strategy:h}=o,f=s(e),p=function(){switch(h){case pl.Always:return!1;case pl.BeforeDragging:return r;default:return!r}}(),m=Ka(p),b=d((function(e){void 0===e&&(e=[]),m.current||a((t=>null===t?e:t.concat(e.filter((e=>!t.includes(e))))))}),[m]),v=s(null),y=qa((t=>{if(p&&!r)return ml;if(!t||t===ml||f.current!==e||null!=i){const t=new Map;for(let r of e){if(!r)continue;if(i&&i.length>0&&!i.includes(r.id)&&r.rect.current){t.set(r.id,r.rect.current);continue}const e=r.node.current,n=e?new Ys(u(e),e):null;r.rect.current=n,n&&t.set(r.id,n)}return t}return t}),[e,i,r,p,u]);return c((()=>{f.current=e}),[e]),c((()=>{p||b()}),[r,p]),c((()=>{i&&i.length>0&&a(null)}),[JSON.stringify(i)]),c((()=>{p||"number"!=typeof l||null!==v.current||(v.current=setTimeout((()=>{b(),v.current=null}),l))}),[l,p,b,...n]),{droppableRects:y,measureDroppableContainers:b,measuringScheduled:null!=i}}(Y,{dragging:F,dependencies:[T.x,T.y],config:V.droppable}),Z=function(e,t){const r=null!==t?e.get(t):void 0,n=r?r.node.current:null;return qa((e=>{var r;return null===t?null:null!=(r=null!=n?n:e)?r:null}),[n,t])}(_,O),G=a((()=>P?ns(P):null),[P]),Q=function(){const e=!1===(null==R?void 0:R.autoScrollEnabled),t="object"==typeof f?!1===f.enabled:!1===f,r=F&&!e&&!t;if("object"==typeof f)return{...f,enabled:r};return{enabled:r}}(),X=function(e,t){return bl(e,t)}(Z,V.draggable.measure);!function(e){let{activeNode:t,measure:r,initialRect:n,config:o=!0}=e;const i=s(!1),{x:a,y:l}="boolean"==typeof o?{x:o,y:o}:o;Va((()=>{if(!a&&!l||!t)return void(i.current=!1);if(i.current||!n)return;const e=null==t?void 0:t.node.current;if(!e||!1===e.isConnected)return;const o=Ss(r(e),n);if(a||(o.x=0),l||(o.y=0),i.current=!0,Math.abs(o.x)>0||Math.abs(o.y)>0){const t=Ts(e);t&&t.scrollBy({top:o.y,left:o.x})}}),[t,a,l,n,r])}({activeNode:O?_.get(O):null,config:Q.layoutShiftCompensation,initialRect:X,measure:V.draggable.measure});const J=xl(Z,V.draggable.measure,X),ee=xl(Z?Z.parentElement:null),te=s({activatorEvent:null,active:null,activeNode:Z,collisionRect:null,collisions:null,droppableRects:U,draggableNodes:_,draggingNode:null,draggingNodeRect:null,droppableContainers:I,over:null,scrollableAncestors:[],scrollAdjustedTranslate:null}),re=I.getNodeFor(null==(t=te.current.over)?void 0:t.id),ne=Dl({measure:V.dragOverlay.measure}),oe=null!=(r=ne.nodeRef.current)?r:Z,ie=F?null!=(n=ne.rect)?n:J:null,ae=Boolean(ne.nodeRef.current&&ne.rect),se=Ss(le=ae?null:J,bl(le));var le;const ce=Cl(oe?Pa(oe):null),de=function(e){const t=s(e),r=qa((r=>e?r&&r!==wl&&e&&t.current&&e.parentNode===t.current.parentNode?r:_s(e):wl),[e]);return c((()=>{t.current=e}),[e]),r}(F?null!=re?re:Z:null),ue=function(e,t){void 0===t&&(t=Fs);const[r]=e,n=Cl(r?Pa(r):null),[o,i]=l((function(){return e.length?e.map((e=>zs(e)?n:new Ys(t(e),e))):Sl}),Sl),a=vl({callback:i});return e.length>0&&o===Sl&&i(),Va((()=>{e.length?e.forEach((e=>null==a?void 0:a.observe(e))):(null==a||a.disconnect(),i())}),[e]),o}(de),he=function(e,t){let{transform:r,...n}=t;return null!=e&&e.length?e.reduce(((e,t)=>t({transform:e,...n})),r):r}(y,{transform:{x:T.x-se.x,y:T.y-se.y,scaleX:1,scaleY:1},activatorEvent:P,active:B,activeNodeRect:J,containerNodeRect:ee,draggingNodeRect:ie,over:te.current.over,overlayNodeRect:ne.rect,scrollableAncestors:de,scrollableAncestorRects:ue,windowRect:ce}),fe=G?es(G,T):null,pe=function(e){const[t,r]=g(null),n=s(e),o=d((e=>{const t=Is(e.target);t&&r((e=>e?(e.set(t,Bs(t)),new Map(e)):null))}),[]);return c((()=>{const t=n.current;if(e!==t){i(t);const a=e.map((e=>{const t=Is(e);return t?(t.addEventListener("scroll",o,{passive:!0}),[t,Bs(t)]):null})).filter((e=>null!=e));r(a.length?new Map(a):null),n.current=e}return()=>{i(e),i(t)};function i(e){e.forEach((e=>{const t=Is(e);null==t||t.removeEventListener("scroll",o)}))}}),[o,e]),a((()=>e.length?t?Array.from(t.values()).reduce(((e,t)=>es(e,t)),bs):Ws(e):bs),[e,t])}(de),ge=$l(pe),me=$l(pe,[J]),be=es(he,ge),ve=ie?ks(ie,he):null,ye=B&&ve?b({active:B,collisionRect:ve,droppableRects:U,droppableContainers:Y,pointerCoordinates:fe}):null,xe=ws(ye,"id"),[we,$e]=g(null),Ce=function(e,t,r){return{...e,scaleX:t&&r?t.width/r.width:1,scaleY:t&&r?t.height/r.height:1}}(ae?he:es(he,me),null!=(i=null==we?void 0:we.rect)?i:null,J),Se=d(((e,t)=>{let{sensor:r,options:n}=t;if(null==z.current)return;const o=_.get(z.current);if(!o)return;const i=e.nativeEvent,a=new r({active:z.current,activeNode:o,event:i,options:n,context:te,onStart(e){const t=z.current;if(null==t)return;const r=_.get(t);if(!r)return;const{onDragStart:n}=W.current,o={active:{id:t,data:r.data,rect:A}};j((()=>{null==n||n(o),E(zl.Initializing),C({type:ps.DragStart,initialCoordinates:e,active:t}),S({type:"onDragStart",event:o})}))},onMove(e){C({type:ps.DragMove,coordinates:e})},onEnd:s(ps.DragEnd),onCancel:s(ps.DragCancel)});function s(e){return async function(){const{active:t,collisions:r,over:n,scrollAdjustedTranslate:o}=te.current;let a=null;if(t&&o){const{cancelDrop:s}=W.current;if(a={activatorEvent:i,active:t,collisions:r,delta:o,over:n},e===ps.DragEnd&&"function"==typeof s){await Promise.resolve(s(a))&&(e=ps.DragCancel)}}z.current=null,j((()=>{C({type:e}),E(zl.Uninitialized),$e(null),L(null),N(null);const t=e===ps.DragEnd?"onDragEnd":"onDragCancel";if(a){const e=W.current[t];null==e||e(a),S({type:t,event:a})}}))}}j((()=>{L(a),N(e.nativeEvent)}))}),[_]),De=d(((e,t)=>(r,n)=>{const o=r.nativeEvent,i=_.get(n);if(null!==z.current||!i||o.dndKit||o.defaultPrevented)return;const a={active:i};!0===e(r,t.options,a)&&(o.dndKit={capturedBy:t.sensor},z.current=n,Se(r,t))}),[_,Se]),ke=function(e,t){return a((()=>e.reduce(((e,r)=>{const{sensor:n}=r;return[...e,...n.activators.map((e=>({eventName:e.eventName,handler:t(e.handler,r)})))]}),[])),[e,t])}(m,De);!function(e){c((()=>{if(!za)return;const t=e.map((e=>{let{sensor:t}=e;return null==t.setup?void 0:t.setup()}));return()=>{for(const e of t)null==e||e()}}),e.map((e=>{let{sensor:t}=e;return t})))}(m),Va((()=>{J&&k===zl.Initializing&&E(zl.Initialized)}),[J,k]),c((()=>{const{onDragMove:e}=W.current,{active:t,activatorEvent:r,collisions:n,over:o}=te.current;if(!t||!r)return;const i={active:t,activatorEvent:r,collisions:n,delta:{x:be.x,y:be.y},over:o};j((()=>{null==e||e(i),S({type:"onDragMove",event:i})}))}),[be.x,be.y]),c((()=>{const{active:e,activatorEvent:t,collisions:r,droppableContainers:n,scrollAdjustedTranslate:o}=te.current;if(!e||null==z.current||!t||!o)return;const{onDragOver:i}=W.current,a=n.get(xe),s=a&&a.rect.current?{id:a.id,rect:a.rect.current,data:a.data,disabled:a.disabled}:null,l={active:e,activatorEvent:t,collisions:r,delta:{x:o.x,y:o.y},over:s};j((()=>{$e(s),null==i||i(l),S({type:"onDragOver",event:l})}))}),[xe]),Va((()=>{te.current={activatorEvent:P,active:B,activeNode:Z,collisionRect:ve,collisions:ye,droppableRects:U,draggableNodes:_,draggingNode:oe,draggingNodeRect:ie,droppableContainers:I,over:we,scrollableAncestors:de,scrollAdjustedTranslate:be},A.current={initial:ie,translated:ve}}),[B,Z,ye,ve,_,oe,ie,U,I,we,de,be]),hl({...Q,delta:T,draggingRect:ve,pointerCoordinates:fe,scrollableAncestors:de,scrollableAncestorRects:ue});const Ee=a((()=>({active:B,activeNode:Z,activeNodeRect:J,activatorEvent:P,collisions:ye,containerNodeRect:ee,dragOverlay:ne,draggableNodes:_,droppableContainers:I,droppableRects:U,over:we,measureDroppableContainers:K,scrollableAncestors:de,scrollableAncestorRects:ue,measuringConfiguration:V,measuringScheduled:q,windowRect:ce})),[B,Z,J,P,ye,ee,ne,_,I,U,we,K,de,ue,V,q,ce]),Fe=a((()=>({activatorEvent:P,activators:ke,active:B,activeNodeRect:J,ariaDescribedById:{draggable:H},dispatch:C,draggableNodes:_,over:we,measureDroppableContainers:K})),[P,ke,B,J,C,H,_,we,K]);return o.createElement(ds.Provider,{value:D},o.createElement(Tl.Provider,{value:Fe},o.createElement(Il.Provider,{value:Ee},o.createElement(jl.Provider,{value:Ce},p)),o.createElement(Bl,{disabled:!1===(null==h?void 0:h.restoreFocus)})),o.createElement(fs,{...h,hiddenTextDescribedById:H}))})),Ll=i(null),Pl="button";function Nl(e){let{id:t,data:r,disabled:n=!1,attributes:o}=e;const i=Xa("Droppable"),{activators:s,activatorEvent:l,active:c,activeNodeRect:d,ariaDescribedById:u,draggableNodes:h,over:f}=b(Tl),{role:p=Pl,roleDescription:g="draggable",tabIndex:m=0}=null!=o?o:{},v=(null==c?void 0:c.id)===t,y=b(v?jl:Ll),[x,w]=Za(),[$,C]=Za(),S=function(e,t){return a((()=>e.reduce(((e,r)=>{let{eventName:n,handler:o}=r;return e[n]=e=>{o(e,t)},e}),{})),[e,t])}(s,t),D=Ka(r);Va((()=>(h.set(t,{id:t,key:i,node:x,activatorNode:$,data:D}),()=>{const e=h.get(t);e&&e.key===i&&h.delete(t)})),[h,t]);return{active:c,activatorEvent:l,activeNodeRect:d,attributes:a((()=>({role:p,tabIndex:m,"aria-disabled":n,"aria-pressed":!(!v||p!==Pl)||void 0,"aria-roledescription":g,"aria-describedby":u.draggable})),[n,p,m,v,g,u.draggable]),isDragging:v,listeners:n?void 0:S,node:x,over:f,setNodeRef:w,setActivatorNodeRef:C,transform:y}}const Wl={timeout:25};function Hl(e,t,r){const n=e.slice();return n.splice(r<0?n.length+r:r,0,n.splice(t,1)[0]),n}function Yl(e,t){return e.reduce(((e,r,n)=>{const o=t.get(r);return o&&(e[n]=o),e}),Array(e.length))}function Vl(e){return null!==e&&e>=0}const Ul=e=>{let{rects:t,activeIndex:r,overIndex:n,index:o}=e;const i=Hl(t,n,r),a=t[o],s=i[o];return s&&a?{x:s.left-a.left,y:s.top-a.top,scaleX:s.width/a.width,scaleY:s.height/a.height}:null},Kl={scaleX:1,scaleY:1},ql=e=>{var t;let{activeIndex:r,activeNodeRect:n,index:o,rects:i,overIndex:a}=e;const s=null!=(t=i[r])?t:n;if(!s)return null;if(o===r){const e=i[a];return e?{x:0,y:r<a?e.top+e.height-(s.top+s.height):e.top-s.top,...Kl}:null}const l=function(e,t,r){const n=e[t],o=e[t-1],i=e[t+1];if(!n)return 0;if(r<t)return o?n.top-(o.top+o.height):i?i.top-(n.top+n.height):0;return i?i.top-(n.top+n.height):o?n.top-(o.top+o.height):0}(i,o,r);return o>r&&o<=a?{x:0,y:-s.height-l,...Kl}:o<r&&o>=a?{x:0,y:s.height+l,...Kl}:{x:0,y:0,...Kl}};const Zl="Sortable",Gl=o.createContext({activeIndex:-1,containerId:Zl,disableTransforms:!1,items:[],overIndex:-1,useDragOverlay:!1,sortedRects:[],strategy:Ul,disabled:{draggable:!1,droppable:!1}});function Ql(e){let{children:t,id:r,items:n,strategy:i=Ul,disabled:l=!1}=e;const{active:d,dragOverlay:u,droppableRects:h,over:f,measureDroppableContainers:p}=b(Il),g=Xa(Zl,r),m=Boolean(null!==u.rect),v=a((()=>n.map((e=>"object"==typeof e&&"id"in e?e.id:e))),[n]),y=null!=d,x=d?v.indexOf(d.id):-1,w=f?v.indexOf(f.id):-1,$=s(v),C=!function(e,t){if(e===t)return!0;if(e.length!==t.length)return!1;for(let r=0;r<e.length;r++)if(e[r]!==t[r])return!1;return!0}(v,$.current),S=-1!==w&&-1===x||C,D=function(e){return"boolean"==typeof e?{draggable:e,droppable:e}:e}(l);Va((()=>{C&&y&&p(v)}),[C,v,y,p]),c((()=>{$.current=v}),[v]);const k=a((()=>({activeIndex:x,containerId:g,disabled:D,disableTransforms:S,items:v,overIndex:w,useDragOverlay:m,sortedRects:Yl(v,h),strategy:i})),[x,g,D.draggable,D.droppable,S,v,w,h,m,i]);return o.createElement(Gl.Provider,{value:k},t)}const Xl=e=>{let{id:t,items:r,activeIndex:n,overIndex:o}=e;return Hl(r,n,o).indexOf(t)},Jl=e=>{let{containerId:t,isSorting:r,wasDragging:n,index:o,items:i,newIndex:a,previousItems:s,previousContainerId:l,transition:c}=e;return!(!c||!n)&&((s===i||o!==a)&&(!!r||a!==o&&t===l))},ec={duration:200,easing:"ease"},tc="transform",rc=os.Transition.toString({property:tc,duration:0,easing:"linear"}),nc={roleDescription:"sortable"};function oc(e){let{animateLayoutChanges:t=Jl,attributes:r,disabled:n,data:o,getNewIndex:i=Xl,id:l,strategy:u,resizeObserverConfig:h,transition:f=ec}=e;const{items:p,containerId:m,activeIndex:v,disabled:y,disableTransforms:x,sortedRects:w,overIndex:$,useDragOverlay:C,strategy:S}=b(Gl),D=function(e,t){var r,n;if("boolean"==typeof e)return{draggable:e,droppable:!1};return{draggable:null!=(r=null==e?void 0:e.draggable)?r:t.draggable,droppable:null!=(n=null==e?void 0:e.droppable)?n:t.droppable}}(n,y),k=p.indexOf(l),E=a((()=>({sortable:{containerId:m,index:k,items:p},...o})),[m,o,k,p]),F=a((()=>p.slice(p.indexOf(l))),[p,l]),{rect:O,node:_,isOver:T,setNodeRef:I}=function(e){let{data:t,disabled:r=!1,id:n,resizeObserverConfig:o}=e;const i=Xa("Droppable"),{active:a,dispatch:l,over:u,measureDroppableContainers:h}=b(Tl),f=s({disabled:r}),p=s(!1),g=s(null),m=s(null),{disabled:v,updateMeasurementsFor:y,timeout:x}={...Wl,...o},w=Ka(null!=y?y:n),$=vl({callback:d((()=>{p.current?(null!=m.current&&clearTimeout(m.current),m.current=setTimeout((()=>{h(Array.isArray(w.current)?w.current:[w.current]),m.current=null}),x)):p.current=!0}),[x]),disabled:v||!a}),C=d(((e,t)=>{$&&(t&&($.unobserve(t),p.current=!1),e&&$.observe(e))}),[$]),[S,D]=Za(C),k=Ka(t);return c((()=>{$&&S.current&&($.disconnect(),p.current=!1,$.observe(S.current))}),[S,$]),Va((()=>(l({type:ps.RegisterDroppable,element:{id:n,key:i,disabled:r,node:S,rect:g,data:k}}),()=>l({type:ps.UnregisterDroppable,key:i,id:n}))),[n]),c((()=>{r!==f.current.disabled&&(l({type:ps.SetDroppableDisabled,id:n,key:i,disabled:r}),f.current.disabled=r)}),[n,i,r,l]),{active:a,rect:g,isOver:(null==u?void 0:u.id)===n,node:S,over:u,setNodeRef:D}}({id:l,data:E,disabled:D.droppable,resizeObserverConfig:{updateMeasurementsFor:F,...h}}),{active:M,activatorEvent:A,activeNodeRect:B,attributes:j,setNodeRef:z,listeners:R,isDragging:L,over:P,setActivatorNodeRef:N,transform:W}=Nl({id:l,data:E,attributes:{...nc,...r},disabled:D.draggable}),H=function(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];return a((()=>e=>{t.forEach((t=>t(e)))}),t)}(I,z),Y=Boolean(M),V=Y&&!x&&Vl(v)&&Vl($),U=!C&&L,K=U&&V?W:null,q=V?null!=K?K:(null!=u?u:S)({rects:w,activeNodeRect:B,activeIndex:v,overIndex:$,index:k}):null,Z=Vl(v)&&Vl($)?i({id:l,items:p,activeIndex:v,overIndex:$}):k,G=null==M?void 0:M.id,Q=s({activeId:G,items:p,newIndex:Z,containerId:m}),X=p!==Q.current.items,J=t({active:M,containerId:m,isDragging:L,isSorting:Y,id:l,index:k,items:p,newIndex:Q.current.newIndex,previousItems:Q.current.items,previousContainerId:Q.current.containerId,transition:f,wasDragging:null!=Q.current.activeId}),ee=function(e){let{disabled:t,index:r,node:n,rect:o}=e;const[i,a]=g(null),l=s(r);return Va((()=>{if(!t&&r!==l.current&&n.current){const e=o.current;if(e){const t=Fs(n.current,{ignoreTransform:!0}),r={x:e.left-t.left,y:e.top-t.top,scaleX:e.width/t.width,scaleY:e.height/t.height};(r.x||r.y)&&a(r)}}r!==l.current&&(l.current=r)}),[t,r,n,o]),c((()=>{i&&a(null)}),[i]),i}({disabled:!J,index:k,node:_,rect:O});return c((()=>{Y&&Q.current.newIndex!==Z&&(Q.current.newIndex=Z),m!==Q.current.containerId&&(Q.current.containerId=m),p!==Q.current.items&&(Q.current.items=p)}),[Y,Z,m,p]),c((()=>{if(G===Q.current.activeId)return;if(G&&!Q.current.activeId)return void(Q.current.activeId=G);const e=setTimeout((()=>{Q.current.activeId=G}),50);return()=>clearTimeout(e)}),[G]),{active:M,activeIndex:v,attributes:j,data:E,rect:O,index:k,newIndex:Z,items:p,isOver:T,isSorting:Y,isDragging:L,listeners:R,node:_,overIndex:$,over:P,setNodeRef:H,setActivatorNodeRef:N,setDroppableNodeRef:I,setDraggableNodeRef:z,transform:null!=ee?ee:q,transition:function(){if(ee||X&&Q.current.newIndex===k)return rc;if(U&&!rs(A)||!f)return;if(Y||J)return os.Transition.toString({...f,property:tc});return}()}}function ic(e){if(!e)return!1;const t=e.data.current;return!!(t&&"sortable"in t&&"object"==typeof t.sortable&&"containerId"in t.sortable&&"items"in t.sortable&&"index"in t.sortable)}const ac=[qs.Down,qs.Right,qs.Up,qs.Left],sc=(e,t)=>{let{context:{active:r,collisionRect:n,droppableRects:o,droppableContainers:i,over:a,scrollableAncestors:s}}=t;if(ac.includes(e.code)){if(e.preventDefault(),!r||!n)return;const t=[];i.getEnabled().forEach((r=>{if(!r||null!=r&&r.disabled)return;const i=o.get(r.id);if(i)switch(e.code){case qs.Down:n.top<i.top&&t.push(r);break;case qs.Up:n.top>i.top&&t.push(r);break;case qs.Left:n.left>i.left&&t.push(r);break;case qs.Right:n.left<i.left&&t.push(r)}}));const l=(e=>{let{collisionRect:t,droppableRects:r,droppableContainers:n}=e;const o=xs(t),i=[];for(const e of n){const{id:t}=e,n=r.get(t);if(n){const r=xs(n),a=o.reduce(((e,t,n)=>{return e+(o=r[n],i=t,Math.sqrt(Math.pow(o.x-i.x,2)+Math.pow(o.y-i.y,2)));var o,i}),0),s=Number((a/4).toFixed(4));i.push({id:t,data:{droppableContainer:e,value:s}})}}return i.sort(vs)})({active:r,collisionRect:n,droppableRects:o,droppableContainers:t,pointerCoordinates:null});let c=ws(l,"id");if(c===(null==a?void 0:a.id)&&l.length>1&&(c=l[1].id),null!=c){const e=i.get(r.id),t=i.get(c),a=t?o.get(t.id):null,l=null==t?void 0:t.node.current;if(l&&a&&e&&t){const r=_s(l).some(((e,t)=>s[t]!==e)),o=lc(e,t),i=function(e,t){if(!ic(e)||!ic(t))return!1;if(!lc(e,t))return!1;return e.data.current.sortable.index<t.data.current.sortable.index}(e,t),c=r||!o?{x:0,y:0}:{x:i?n.width-a.width:0,y:i?n.height-a.height:0},d={x:a.left,y:a.top};return c.x&&c.y?d:ts(d,c)}}}};function lc(e,t){return!(!ic(e)||!ic(t))&&e.data.current.sortable.containerId===t.data.current.sortable.containerId}var cc=function(e,t){return cc=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])},cc(e,t)};var dc=function(){return dc=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var o in t=arguments[r])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e},dc.apply(this,arguments)};var uc="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};var hc=function(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)},fc="object"==typeof uc&&uc&&uc.Object===Object&&uc,pc="object"==typeof self&&self&&self.Object===Object&&self,gc=fc||pc||Function("return this")(),mc=gc,bc=function(){return mc.Date.now()},vc=/\s/;var yc=function(e){for(var t=e.length;t--&&vc.test(e.charAt(t)););return t},xc=/^\s+/;var wc=function(e){return e?e.slice(0,yc(e)+1).replace(xc,""):e},$c=gc.Symbol,Cc=$c,Sc=Object.prototype,Dc=Sc.hasOwnProperty,kc=Sc.toString,Ec=Cc?Cc.toStringTag:void 0;var Fc=function(e){var t=Dc.call(e,Ec),r=e[Ec];try{e[Ec]=void 0;var n=!0}catch(e){}var o=kc.call(e);return n&&(t?e[Ec]=r:delete e[Ec]),o},Oc=Object.prototype.toString;var _c=Fc,Tc=function(e){return Oc.call(e)},Ic=$c?$c.toStringTag:void 0;var Mc=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":Ic&&Ic in Object(e)?_c(e):Tc(e)},Ac=function(e){return null!=e&&"object"==typeof e};var Bc=wc,jc=hc,zc=function(e){return"symbol"==typeof e||Ac(e)&&"[object Symbol]"==Mc(e)},Rc=/^[-+]0x[0-9a-f]+$/i,Lc=/^0b[01]+$/i,Pc=/^0o[0-7]+$/i,Nc=parseInt;var Wc=hc,Hc=bc,Yc=function(e){if("number"==typeof e)return e;if(zc(e))return NaN;if(jc(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=jc(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=Bc(e);var r=Lc.test(e);return r||Pc.test(e)?Nc(e.slice(2),r?2:8):Rc.test(e)?NaN:+e},Vc=Math.max,Uc=Math.min;var Kc=function(e,t,r){var n,o,i,a,s,l,c=0,d=!1,u=!1,h=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function f(t){var r=n,i=o;return n=o=void 0,c=t,a=e.apply(i,r)}function p(e){var r=e-l;return void 0===l||r>=t||r<0||u&&e-c>=i}function g(){var e=Hc();if(p(e))return m(e);s=setTimeout(g,function(e){var r=t-(e-l);return u?Uc(r,i-(e-c)):r}(e))}function m(e){return s=void 0,h&&n?f(e):(n=o=void 0,a)}function b(){var e=Hc(),r=p(e);if(n=arguments,o=this,l=e,r){if(void 0===s)return function(e){return c=e,s=setTimeout(g,t),d?f(e):a}(l);if(u)return clearTimeout(s),s=setTimeout(g,t),f(l)}return void 0===s&&(s=setTimeout(g,t)),a}return t=Yc(t)||0,Wc(r)&&(d=!!r.leading,i=(u="maxWait"in r)?Vc(Yc(r.maxWait)||0,t):i,h="trailing"in r?!!r.trailing:h),b.cancel=function(){void 0!==s&&clearTimeout(s),c=0,n=l=o=s=void 0},b.flush=function(){return void 0===s?a:m(Hc())},b},qc=Kc,Zc=hc;var Gc=function(e,t,r){var n=!0,o=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return Zc(r)&&(n="leading"in r?!!r.leading:n,o="trailing"in r?!!r.trailing:o),qc(e,t,{leading:n,maxWait:t,trailing:o})},Qc=function(e,t,r,n){switch(t){case"debounce":return Kc(e,r,n);case"throttle":return Gc(e,r,n);default:return e}},Xc=function(e){return"function"==typeof e},Jc=function(){return"undefined"==typeof window},ed=function(e){return e instanceof Element||e instanceof HTMLDocument},td=function(e,t,r,n){return function(o){var i=o.width,a=o.height;t((function(t){return t.width===i&&t.height===a||t.width===i&&!n||t.height===a&&!r?t:(e&&Xc(e)&&e(i,a),{width:i,height:a})}))}};!function(e){function t(t){var r=e.call(this,t)||this;r.cancelHandler=function(){r.resizeHandler&&r.resizeHandler.cancel&&(r.resizeHandler.cancel(),r.resizeHandler=null)},r.attachObserver=function(){var e=r.props,t=e.targetRef,n=e.observerOptions;if(!Jc()){t&&t.current&&(r.targetRef.current=t.current);var o=r.getElement();o&&(r.observableElement&&r.observableElement===o||(r.observableElement=o,r.resizeObserver.observe(o,n)))}},r.getElement=function(){var e=r.props,t=e.querySelector,n=e.targetDomEl;if(Jc())return null;if(t)return document.querySelector(t);if(n&&ed(n))return n;if(r.targetRef&&ed(r.targetRef.current))return r.targetRef.current;var o=R(r);if(!o)return null;switch(r.getRenderType()){case"renderProp":case"childFunction":case"child":case"childArray":return o;default:return o.parentElement}},r.createResizeHandler=function(e){var t=r.props,n=t.handleWidth,o=void 0===n||n,i=t.handleHeight,a=void 0===i||i,s=t.onResize;if(o||a){var l=td(s,r.setState.bind(r),o,a);e.forEach((function(e){var t=e&&e.contentRect||{},n=t.width,o=t.height;!r.skipOnMount&&!Jc()&&l({width:n,height:o}),r.skipOnMount=!1}))}},r.getRenderType=function(){var e=r.props,t=e.render,n=e.children;return Xc(t)?"renderProp":Xc(n)?"childFunction":v(n)?"child":Array.isArray(n)?"childArray":"parent"};var n=t.skipOnMount,o=t.refreshMode,i=t.refreshRate,a=void 0===i?1e3:i,s=t.refreshOptions;return r.state={width:void 0,height:void 0},r.skipOnMount=n,r.targetRef=y(),r.observableElement=null,Jc()||(r.resizeHandler=Qc(r.createResizeHandler,o,a,s),r.resizeObserver=new window.ResizeObserver(r.resizeHandler)),r}(function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");function r(){this.constructor=e}cc(e,t),e.prototype=null===t?Object.create(t):(r.prototype=t.prototype,new r)})(t,e),t.prototype.componentDidMount=function(){this.attachObserver()},t.prototype.componentDidUpdate=function(){this.attachObserver()},t.prototype.componentWillUnmount=function(){Jc()||(this.observableElement=null,this.resizeObserver.disconnect(),this.cancelHandler())},t.prototype.render=function(){var e,t=this.props,r=t.render,o=t.children,i=t.nodeType,a=void 0===i?"div":i,s=this.state,l={width:s.width,height:s.height,targetRef:this.targetRef};switch(this.getRenderType()){case"renderProp":return r&&r(l);case"childFunction":return(e=o)(l);case"child":if((e=o).type&&"string"==typeof e.type){var c=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(n=Object.getOwnPropertySymbols(e);o<n.length;o++)t.indexOf(n[o])<0&&Object.prototype.propertyIsEnumerable.call(e,n[o])&&(r[n[o]]=e[n[o]])}return r}(l,["targetRef"]);return x(e,c)}return x(e,l);case"childArray":return(e=o).map((function(e){return!!e&&x(e,l)}));default:return n.createElement(a,null)}}}(w);var rd=Jc()?c:p;function nd(e){void 0===e&&(e={});var t=e.skipOnMount,r=void 0!==t&&t,n=e.refreshMode,o=e.refreshRate,i=void 0===o?1e3:o,a=e.refreshOptions,l=e.handleWidth,c=void 0===l||l,d=e.handleHeight,u=void 0===d||d,h=e.targetRef,f=e.observerOptions,p=e.onResize,m=s(r),b=s(null),v=null!=h?h:b,y=s(),x=g({width:void 0,height:void 0}),w=x[0],$=x[1];return rd((function(){if(!Jc()){var e=td(p,$,c,u);y.current=Qc((function(t){(c||u)&&t.forEach((function(t){var r=t&&t.contentRect||{},n=r.width,o=r.height;!m.current&&!Jc()&&e({width:n,height:o}),m.current=!1}))}),n,i,a);var t=new window.ResizeObserver(y.current);return v.current&&t.observe(v.current,f),function(){t.disconnect();var e=y.current;e&&e.cancel&&e.cancel()}}}),[n,i,a,c,u,p,f,v.current]),dc({ref:v},w)}class od extends sl{}od.activators=[{eventName:"onMouseDown",handler:({nativeEvent:e})=>id(e.target)}];function id(e){let t=e;for(;t;){if(t.dataset&&t.dataset.noDnd)return!1;t=t.parentElement}return!0}(class extends Js{}).activators=[{eventName:"onKeyDown",handler:({nativeEvent:e})=>id(e.target)}];var ad={exports:{}};ad.exports=function(){var e=1e3,t=6e4,r=36e5,n="millisecond",o="second",i="minute",a="hour",s="day",l="week",c="month",d="quarter",u="year",h="date",f="Invalid Date",p=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,g=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,m={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(e){var t=["th","st","nd","rd"],r=e%100;return"["+e+(t[(r-20)%10]||t[r]||t[0])+"]"}},b=function(e,t,r){var n=String(e);return!n||n.length>=t?e:""+Array(t+1-n.length).join(r)+e},v={s:b,z:function(e){var t=-e.utcOffset(),r=Math.abs(t),n=Math.floor(r/60),o=r%60;return(t<=0?"+":"-")+b(n,2,"0")+":"+b(o,2,"0")},m:function e(t,r){if(t.date()<r.date())return-e(r,t);var n=12*(r.year()-t.year())+(r.month()-t.month()),o=t.clone().add(n,c),i=r-o<0,a=t.clone().add(n+(i?-1:1),c);return+(-(n+(r-o)/(i?o-a:a-o))||0)},a:function(e){return e<0?Math.ceil(e)||0:Math.floor(e)},p:function(e){return{M:c,y:u,w:l,d:s,D:h,h:a,m:i,s:o,ms:n,Q:d}[e]||String(e||"").toLowerCase().replace(/s$/,"")},u:function(e){return void 0===e}},y="en",x={};x[y]=m;var w="$isDayjsObject",$=function(e){return e instanceof k||!(!e||!e[w])},C=function e(t,r,n){var o;if(!t)return y;if("string"==typeof t){var i=t.toLowerCase();x[i]&&(o=i),r&&(x[i]=r,o=i);var a=t.split("-");if(!o&&a.length>1)return e(a[0])}else{var s=t.name;x[s]=t,o=s}return!n&&o&&(y=o),o||!n&&y},S=function(e,t){if($(e))return e.clone();var r="object"==typeof t?t:{};return r.date=e,r.args=arguments,new k(r)},D=v;D.l=C,D.i=$,D.w=function(e,t){return S(e,{locale:t.$L,utc:t.$u,x:t.$x,$offset:t.$offset})};var k=function(){function m(e){this.$L=C(e.locale,null,!0),this.parse(e),this.$x=this.$x||e.x||{},this[w]=!0}var b=m.prototype;return b.parse=function(e){this.$d=function(e){var t=e.date,r=e.utc;if(null===t)return new Date(NaN);if(D.u(t))return new Date;if(t instanceof Date)return new Date(t);if("string"==typeof t&&!/Z$/i.test(t)){var n=t.match(p);if(n){var o=n[2]-1||0,i=(n[7]||"0").substring(0,3);return r?new Date(Date.UTC(n[1],o,n[3]||1,n[4]||0,n[5]||0,n[6]||0,i)):new Date(n[1],o,n[3]||1,n[4]||0,n[5]||0,n[6]||0,i)}}return new Date(t)}(e),this.init()},b.init=function(){var e=this.$d;this.$y=e.getFullYear(),this.$M=e.getMonth(),this.$D=e.getDate(),this.$W=e.getDay(),this.$H=e.getHours(),this.$m=e.getMinutes(),this.$s=e.getSeconds(),this.$ms=e.getMilliseconds()},b.$utils=function(){return D},b.isValid=function(){return!(this.$d.toString()===f)},b.isSame=function(e,t){var r=S(e);return this.startOf(t)<=r&&r<=this.endOf(t)},b.isAfter=function(e,t){return S(e)<this.startOf(t)},b.isBefore=function(e,t){return this.endOf(t)<S(e)},b.$g=function(e,t,r){return D.u(e)?this[t]:this.set(r,e)},b.unix=function(){return Math.floor(this.valueOf()/1e3)},b.valueOf=function(){return this.$d.getTime()},b.startOf=function(e,t){var r=this,n=!!D.u(t)||t,d=D.p(e),f=function(e,t){var o=D.w(r.$u?Date.UTC(r.$y,t,e):new Date(r.$y,t,e),r);return n?o:o.endOf(s)},p=function(e,t){return D.w(r.toDate()[e].apply(r.toDate("s"),(n?[0,0,0,0]:[23,59,59,999]).slice(t)),r)},g=this.$W,m=this.$M,b=this.$D,v="set"+(this.$u?"UTC":"");switch(d){case u:return n?f(1,0):f(31,11);case c:return n?f(1,m):f(0,m+1);case l:var y=this.$locale().weekStart||0,x=(g<y?g+7:g)-y;return f(n?b-x:b+(6-x),m);case s:case h:return p(v+"Hours",0);case a:return p(v+"Minutes",1);case i:return p(v+"Seconds",2);case o:return p(v+"Milliseconds",3);default:return this.clone()}},b.endOf=function(e){return this.startOf(e,!1)},b.$set=function(e,t){var r,l=D.p(e),d="set"+(this.$u?"UTC":""),f=(r={},r[s]=d+"Date",r[h]=d+"Date",r[c]=d+"Month",r[u]=d+"FullYear",r[a]=d+"Hours",r[i]=d+"Minutes",r[o]=d+"Seconds",r[n]=d+"Milliseconds",r)[l],p=l===s?this.$D+(t-this.$W):t;if(l===c||l===u){var g=this.clone().set(h,1);g.$d[f](p),g.init(),this.$d=g.set(h,Math.min(this.$D,g.daysInMonth())).$d}else f&&this.$d[f](p);return this.init(),this},b.set=function(e,t){return this.clone().$set(e,t)},b.get=function(e){return this[D.p(e)]()},b.add=function(n,d){var h,f=this;n=Number(n);var p=D.p(d),g=function(e){var t=S(f);return D.w(t.date(t.date()+Math.round(e*n)),f)};if(p===c)return this.set(c,this.$M+n);if(p===u)return this.set(u,this.$y+n);if(p===s)return g(1);if(p===l)return g(7);var m=(h={},h[i]=t,h[a]=r,h[o]=e,h)[p]||1,b=this.$d.getTime()+n*m;return D.w(b,this)},b.subtract=function(e,t){return this.add(-1*e,t)},b.format=function(e){var t=this,r=this.$locale();if(!this.isValid())return r.invalidDate||f;var n=e||"YYYY-MM-DDTHH:mm:ssZ",o=D.z(this),i=this.$H,a=this.$m,s=this.$M,l=r.weekdays,c=r.months,d=r.meridiem,u=function(e,r,o,i){return e&&(e[r]||e(t,n))||o[r].slice(0,i)},h=function(e){return D.s(i%12||12,e,"0")},p=d||function(e,t,r){var n=e<12?"AM":"PM";return r?n.toLowerCase():n};return n.replace(g,(function(e,n){return n||function(e){switch(e){case"YY":return String(t.$y).slice(-2);case"YYYY":return D.s(t.$y,4,"0");case"M":return s+1;case"MM":return D.s(s+1,2,"0");case"MMM":return u(r.monthsShort,s,c,3);case"MMMM":return u(c,s);case"D":return t.$D;case"DD":return D.s(t.$D,2,"0");case"d":return String(t.$W);case"dd":return u(r.weekdaysMin,t.$W,l,2);case"ddd":return u(r.weekdaysShort,t.$W,l,3);case"dddd":return l[t.$W];case"H":return String(i);case"HH":return D.s(i,2,"0");case"h":return h(1);case"hh":return h(2);case"a":return p(i,a,!0);case"A":return p(i,a,!1);case"m":return String(a);case"mm":return D.s(a,2,"0");case"s":return String(t.$s);case"ss":return D.s(t.$s,2,"0");case"SSS":return D.s(t.$ms,3,"0");case"Z":return o}return null}(e)||o.replace(":","")}))},b.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},b.diff=function(n,h,f){var p,g=this,m=D.p(h),b=S(n),v=(b.utcOffset()-this.utcOffset())*t,y=this-b,x=function(){return D.m(g,b)};switch(m){case u:p=x()/12;break;case c:p=x();break;case d:p=x()/3;break;case l:p=(y-v)/6048e5;break;case s:p=(y-v)/864e5;break;case a:p=y/r;break;case i:p=y/t;break;case o:p=y/e;break;default:p=y}return f?p:D.a(p)},b.daysInMonth=function(){return this.endOf(c).$D},b.$locale=function(){return x[this.$L]},b.locale=function(e,t){if(!e)return this.$L;var r=this.clone(),n=C(e,t,!0);return n&&(r.$L=n),r},b.clone=function(){return D.w(this.$d,this)},b.toDate=function(){return new Date(this.valueOf())},b.toJSON=function(){return this.isValid()?this.toISOString():null},b.toISOString=function(){return this.$d.toISOString()},b.toString=function(){return this.$d.toUTCString()},m}(),E=k.prototype;return S.prototype=E,[["$ms",n],["$s",o],["$m",i],["$H",a],["$W",s],["$M",c],["$y",u],["$D",h]].forEach((function(e){E[e[1]]=function(t){return this.$g(t,e[0],e[1])}})),S.extend=function(e,t){return e.$i||(e(t,k,S),e.$i=!0),S},S.locale=C,S.isDayjs=$,S.unix=function(e){return S(1e3*e)},S.en=x[y],S.Ls=x,S.p={},S}();var sd=ze(ad.exports),ld={exports:{}};ld.exports=function(){var e={LTS:"h:mm:ss A",LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D, YYYY",LLL:"MMMM D, YYYY h:mm A",LLLL:"dddd, MMMM D, YYYY h:mm A"},t=/(\[[^[]*\])|([-_:/.,()\s]+)|(A|a|YYYY|YY?|MM?M?M?|Do|DD?|hh?|HH?|mm?|ss?|S{1,3}|z|ZZ?)/g,r=/\d\d/,n=/\d\d?/,o=/\d*[^-_:/,()\s\d]+/,i={},a=function(e){return(e=+e)+(e>68?1900:2e3)},s=function(e){return function(t){this[e]=+t}},l=[/[+-]\d\d:?(\d\d)?|Z/,function(e){(this.zone||(this.zone={})).offset=function(e){if(!e)return 0;if("Z"===e)return 0;var t=e.match(/([+-]|\d\d)/g),r=60*t[1]+(+t[2]||0);return 0===r?0:"+"===t[0]?-r:r}(e)}],c=function(e){var t=i[e];return t&&(t.indexOf?t:t.s.concat(t.f))},d=function(e,t){var r,n=i.meridiem;if(n){for(var o=1;o<=24;o+=1)if(e.indexOf(n(o,0,t))>-1){r=o>12;break}}else r=e===(t?"pm":"PM");return r},u={A:[o,function(e){this.afternoon=d(e,!1)}],a:[o,function(e){this.afternoon=d(e,!0)}],S:[/\d/,function(e){this.milliseconds=100*+e}],SS:[r,function(e){this.milliseconds=10*+e}],SSS:[/\d{3}/,function(e){this.milliseconds=+e}],s:[n,s("seconds")],ss:[n,s("seconds")],m:[n,s("minutes")],mm:[n,s("minutes")],H:[n,s("hours")],h:[n,s("hours")],HH:[n,s("hours")],hh:[n,s("hours")],D:[n,s("day")],DD:[r,s("day")],Do:[o,function(e){var t=i.ordinal,r=e.match(/\d+/);if(this.day=r[0],t)for(var n=1;n<=31;n+=1)t(n).replace(/\[|\]/g,"")===e&&(this.day=n)}],M:[n,s("month")],MM:[r,s("month")],MMM:[o,function(e){var t=c("months"),r=(c("monthsShort")||t.map((function(e){return e.slice(0,3)}))).indexOf(e)+1;if(r<1)throw new Error;this.month=r%12||r}],MMMM:[o,function(e){var t=c("months").indexOf(e)+1;if(t<1)throw new Error;this.month=t%12||t}],Y:[/[+-]?\d+/,s("year")],YY:[r,function(e){this.year=a(e)}],YYYY:[/\d{4}/,s("year")],Z:l,ZZ:l};function h(r){var n,o;n=r,o=i&&i.formats;for(var a=(r=n.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g,(function(t,r,n){var i=n&&n.toUpperCase();return r||o[n]||e[n]||o[i].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g,(function(e,t,r){return t||r.slice(1)}))}))).match(t),s=a.length,l=0;l<s;l+=1){var c=a[l],d=u[c],h=d&&d[0],f=d&&d[1];a[l]=f?{regex:h,parser:f}:c.replace(/^\[|\]$/g,"")}return function(e){for(var t={},r=0,n=0;r<s;r+=1){var o=a[r];if("string"==typeof o)n+=o.length;else{var i=o.regex,l=o.parser,c=e.slice(n),d=i.exec(c)[0];l.call(t,d),e=e.replace(d,"")}}return function(e){var t=e.afternoon;if(void 0!==t){var r=e.hours;t?r<12&&(e.hours+=12):12===r&&(e.hours=0),delete e.afternoon}}(t),t}}return function(e,t,r){r.p.customParseFormat=!0,e&&e.parseTwoDigitYear&&(a=e.parseTwoDigitYear);var n=t.prototype,o=n.parse;n.parse=function(e){var t=e.date,n=e.utc,a=e.args;this.$u=n;var s=a[1];if("string"==typeof s){var l=!0===a[2],c=!0===a[3],d=l||c,u=a[2];c&&(u=a[2]),i=this.$locale(),!l&&u&&(i=r.Ls[u]),this.$d=function(e,t,r){try{if(["x","X"].indexOf(t)>-1)return new Date(("X"===t?1e3:1)*e);var n=h(t)(e),o=n.year,i=n.month,a=n.day,s=n.hours,l=n.minutes,c=n.seconds,d=n.milliseconds,u=n.zone,f=new Date,p=a||(o||i?1:f.getDate()),g=o||f.getFullYear(),m=0;o&&!i||(m=i>0?i-1:f.getMonth());var b=s||0,v=l||0,y=c||0,x=d||0;return u?new Date(Date.UTC(g,m,p,b,v,y,x+60*u.offset*1e3)):r?new Date(Date.UTC(g,m,p,b,v,y,x)):new Date(g,m,p,b,v,y,x)}catch(e){return new Date("")}}(t,s,n),this.init(),u&&!0!==u&&(this.$L=this.locale(u).$L),d&&t!=this.format(s)&&(this.$d=new Date("")),i={}}else if(s instanceof Array)for(var f=s.length,p=1;p<=f;p+=1){a[1]=s[p-1];var g=r.apply(this,a);if(g.isValid()){this.$d=g.$d,this.$L=g.$L,this.init();break}p===f&&(this.$d=new Date(""))}else o.call(this,e)}}}();var cd=ze(ld.exports),dd={exports:{}};dd.exports=function(e,t,r){t.prototype.isBetween=function(e,t,n,o){var i=r(e),a=r(t),s="("===(o=o||"()")[0],l=")"===o[1];return(s?this.isAfter(i,n):!this.isBefore(i,n))&&(l?this.isBefore(a,n):!this.isAfter(a,n))||(s?this.isBefore(i,n):!this.isAfter(i,n))&&(l?this.isAfter(a,n):!this.isBefore(a,n))}};var ud=ze(dd.exports),hd={exports:{}};hd.exports=function(e,t){t.prototype.isSameOrAfter=function(e,t){return this.isSame(e,t)||this.isAfter(e,t)}};var fd=ze(hd.exports),pd={exports:{}};pd.exports=function(e,t){t.prototype.isSameOrBefore=function(e,t){return this.isSame(e,t)||this.isBefore(e,t)}};var gd,md,bd=ze(pd.exports),vd={exports:{}};vd.exports=(gd={year:0,month:1,day:2,hour:3,minute:4,second:5},md={},function(e,t,r){var n,o=function(e,t,r){void 0===r&&(r={});var n=new Date(e),o=function(e,t){void 0===t&&(t={});var r=t.timeZoneName||"short",n=e+"|"+r,o=md[n];return o||(o=new Intl.DateTimeFormat("en-US",{hour12:!1,timeZone:e,year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit",timeZoneName:r}),md[n]=o),o}(t,r);return o.formatToParts(n)},i=function(e,t){for(var n=o(e,t),i=[],a=0;a<n.length;a+=1){var s=n[a],l=s.type,c=s.value,d=gd[l];d>=0&&(i[d]=parseInt(c,10))}var u=i[3],h=24===u?0:u,f=i[0]+"-"+i[1]+"-"+i[2]+" "+h+":"+i[4]+":"+i[5]+":000",p=+e;return(r.utc(f).valueOf()-(p-=p%1e3))/6e4},a=t.prototype;a.tz=function(e,t){void 0===e&&(e=n);var o=this.utcOffset(),i=this.toDate(),a=i.toLocaleString("en-US",{timeZone:e}),s=Math.round((i-new Date(a))/1e3/60),l=r(a,{locale:this.$L}).$set("millisecond",this.$ms).utcOffset(15*-Math.round(i.getTimezoneOffset()/15)-s,!0);if(t){var c=l.utcOffset();l=l.add(o-c,"minute")}return l.$x.$timezone=e,l},a.offsetName=function(e){var t=this.$x.$timezone||r.tz.guess(),n=o(this.valueOf(),t,{timeZoneName:e}).find((function(e){return"timezonename"===e.type.toLowerCase()}));return n&&n.value};var s=a.startOf;a.startOf=function(e,t){if(!this.$x||!this.$x.$timezone)return s.call(this,e,t);var n=r(this.format("YYYY-MM-DD HH:mm:ss:SSS"),{locale:this.$L});return s.call(n,e,t).tz(this.$x.$timezone,!0)},r.tz=function(e,t,o){var a=o&&t,s=o||t||n,l=i(+r(),s);if("string"!=typeof e)return r(e).tz(s);var c=function(e,t,r){var n=e-60*t*1e3,o=i(n,r);if(t===o)return[n,t];var a=i(n-=60*(o-t)*1e3,r);return o===a?[n,o]:[e-60*Math.min(o,a)*1e3,Math.max(o,a)]}(r.utc(e,a).valueOf(),l,s),d=c[0],u=c[1],h=r(d).utcOffset(u);return h.$x.$timezone=s,h},r.tz.guess=function(){return Intl.DateTimeFormat().resolvedOptions().timeZone},r.tz.setDefault=function(e){n=e}});var yd,xd=ze(vd.exports);sd.extend(ud),sd.extend(bd),sd.extend(fd),sd.extend(cd),sd.extend(xd),function(e){e.generateDays=e=>{const t=e.startOf("month"),r=sd(t).startOf("week");return wd(r).map((e=>$d(e)))},e.generateDaysForCurrentWeek=e=>{const t=e.startOf("week");return $d(t)},e.generateMonths=e=>{const t=[];for(let r=0;r<12;r++){const n=e.month(r);t.push(sd(n))}return t},e.generateDecadeOfYears=e=>{const t=e.year(),r=10*Math.floor(t/10),n=e.year(r),o=[n.subtract(1,"year"),n];for(let e=1;e<11;e++)o.push(n.add(e,"year"));return o},e.getStartEndDecade=e=>{const t=10*Math.floor(+e.format("YYYY")/10);return{beginDecade:t,endDecade:+sd(`${t+9}-01-01`).format("YYYY")}},e.convertTo12HourFormat=e=>{const t=sd(e,"HH:mm");return t.isValid()?t.format("h:mm a"):""},e.isWithinRange=(e,t,r,n="day")=>!t&&!r||(t&&r?e.isBetween(t,r,n,"[]"):t?e.isSameOrAfter(t,n):e.isSameOrBefore(r,n)),e.isPreviousMonthWithinRange=(t,r)=>e.isWithinRange(t.subtract(1,"month"),r,void 0,"month"),e.isPreviousYearWithinRange=(t,r)=>e.isWithinRange(t.subtract(1,"year"),r,void 0,"year"),e.isPreviousDecadeWithinRange=(t,r)=>{const{beginDecade:n}=e.getStartEndDecade(t);return e.isWithinRange(t.year(n).subtract(1,"year"),r,void 0,"year")},e.isNextMonthWithinRange=(t,r)=>e.isWithinRange(t.add(1,"month"),void 0,r,"month"),e.isNextYearWithinRange=(t,r)=>e.isWithinRange(t.add(1,"year"),void 0,r,"year"),e.isNextDecadeWithinRange=(t,r)=>{const{endDecade:n}=e.getStartEndDecade(t);return e.isWithinRange(t.year(n).add(1,"year"),void 0,r,"year")},e.getWeekStartEnd=e=>({start:e.startOf("week").format("YYYY-MM-DD"),end:e.endOf("week").format("YYYY-MM-DD")}),e.getFixedRangeStartEnd=(e,t)=>({start:e.format("YYYY-MM-DD"),end:e.add(t-1,"day").format("YYYY-MM-DD")}),e.isDisabledDay=(t,r,n,o)=>{const i=e.isWithinRange(t,n?sd(n):void 0,o?sd(o):void 0),a=r&&r.includes(t.format("YYYY-MM-DD"));return!i||!!a}}(yd||(yd={}));const wd=e=>{const t=[e];for(let r=1;r<6;r++){const n=e.add(r,"week");t.push(n)}return t},$d=e=>{const t=[];for(let r=0;r<7;r++){const n=e.add(r,"day");t.push(n)}return t},Cd=[1,3,5,7,8,10,12],Sd=[4,6,9,11];var Dd,kd;!function(e){e.clampDay=(t,r,n)=>{const o=parseInt(t),i=parseInt(r),a=parseInt(n);return 0==o?"1":Cd.includes(i)?Math.min(o,31).toString():Sd.includes(i)?Math.min(o,30).toString():2===i?e.isLeapYear(a)?Math.min(o,29).toString():Math.min(o,28).toString():t},e.clampMonth=e=>{const t=parseInt(e);return 0==t?"1":t>12?"12":e},e.isLeapYear=e=>e%4==0&&e%100!=0||e%400==0,e.getTimeDiffInMinutes=(e,t,r="HH:mm")=>{const n=sd(e,r);return sd(t,r).diff(n,"minute")},e.toDayjs=e=>e?sd(e):sd(),e.addMinutesToTime=(e,t,r="HH:mm")=>sd(e,r).add(t,"minutes").format(r),e.isSame=(e,t,r="day")=>sd(e).isSame(sd(t),r)}(Dd||(Dd={})),function(e){e.isDateDisabled=(e,t)=>{const{disabledDates:r,minDate:n,maxDate:o}=t;return!!(e&&r&&r.length&&r.includes(e))||(!(!n||!sd(e).isBefore(n,"day"))||!(!o||!sd(e).isAfter(o,"day")))},e.sanitizeInput=e=>{if(e){const r=t(e);if(sd(r,"YYYY-MM-DD",!0).isValid())return r}return""};const t=e=>{const t=e.match(/^(\d{1,4})-(\d{1,2})-(\d{1,2})$/);if(!t)return"";const[,r,n,o]=t;if(r.length<=2||parseInt(r,10)<100)return"";return`${r.padStart(4,"0")}-${n.padStart(2,"0")}-${o.padStart(2,"0")}`}}(kd||(kd={}));const Ed=()=>{const e=$.split(".");return parseInt(e[0],10)>=19},Fd=(...e)=>t=>{const r=[];for(const n of e)if("function"==typeof n){const e=n(t),o="function"==typeof e;r.push(o?e:()=>n(null))}else n.current=t,r.push((()=>{n.current=null}));if(Ed())return()=>{for(const e of r)e()}};var Od,_d;!function(e){e.generate=()=>Math.random().toString(36).substring(2,9)}(Od||(Od={})),function(e){e.transformWithSpaces=(e,t)=>{const r="(.{"+t+"})";return e.replace(/[^\dA-Z]/gi,"").replace(new RegExp(r,"g"),"$1 ").trim()},e.padValue=(e,t)=>{if("0"===e)return t?e:e.padStart(2,"0");if(""===e)return e;return parseInt(e).toString().padStart(2,"0")},e.shouldTruncateToTwoLines=(e,t)=>{const r=Math.floor(t/9);return e.length>=2*r||1===e.split(" ").length&&e.length>r},e.truncateOneLine=(e,t,r,n,o=8)=>{let i=0;t>r&&(i=Math.floor((t-r)/o));const a=n+i;if(a<e.length){const t=Math.floor(a/2);return e.substring(0,t)+" ... "+e.substring(e.length-t,e.length)}return e},e.truncateTwoLines=(e,t,r,n=1.2)=>{const o=Math.floor(2*t/(.6*r))*(2/n);if(e.length<=o)return e;const i=Math.floor(.6*o),a=Math.floor(.2*o);return`${e.substring(0,i)}...${e.substring(e.length-a)}`},e.getTextWidth=(t,r)=>{if("undefined"==typeof document)return 0;const n=(e.getTextWidth.canvas||(e.getTextWidth.canvas=document.createElement("canvas"))).getContext("2d");n.font=r;return n.measureText(t).width},e.maskValue=(e,r)=>{if(!e)return e;const{maskRange:n,unmaskRange:o,maskChar:i="•",maskRegex:a,maskTransformer:s}=r;if(s)return s(e);if(a)return e.replace(a,i);if(n){const{startIndex:r,endIndex:o}=t(n[0],n[1]);return e.substring(0,r)+i.repeat(e.substring(r,o+1).length)+e.substring(o+1)}if(o){const{startIndex:r,endIndex:n}=t(o[0],o[1]);return i.repeat(e.substring(0,r).length)+e.substring(r,n+1)+i.repeat(e.substring(n+1).length)}return e};const t=(e,t)=>e<t?{startIndex:e,endIndex:t}:{startIndex:t,endIndex:e},r=new Intl.PluralRules("en",{type:"ordinal"}),n=new Map([["one","st"],["two","nd"],["few","rd"],["other","th"]]);e.formatOrdinal=e=>{const t=r.select(e);return`${e}${n.get(t)}`},e.getMaskedDescription=(e,t,r)=>{if(!e||"masked"!==t||!r)return"";const[n,o]=r,i=n>0,a=o<e.length-1,s=i?e.substring(0,n):"",l=a?e.substring(o+1):"";return i&&a?`Starting with ${s} and ending with ${l}`:i?`Starting with ${s}`:a?`Ending with ${l}`:""}}(_d||(_d={}));function Td(e){const t=s(null);p((()=>{t.current=e}),[e]);return d(((...e)=>{var r;return null===(r=t.current)||void 0===r?void 0:r.call(t,...e)}),[])}const Id=(e,t,r="window",n)=>{const o=s();c((()=>{o.current=t}),[t]),c((()=>{let t;switch(r){case"window":t=window;break;case"document":t=document;break;default:t=r}if(!t||!t.addEventListener)return;const i=e=>{var t;return null===(t=o.current)||void 0===t?void 0:t.call(o,e)};return t.addEventListener(e,i,n),()=>{null==t||t.removeEventListener(e,i,n)}}),[e,r])},Md=()=>{const[e,t]=g(!1);return c((()=>{t(!0)}),[]),e};function Ad({ref:e,formatter:t}){return()=>{var r;const n=e.current;if(!n)return;const o=n.value,i=t(o),a=null!==(r=n.selectionEnd)&&void 0!==r?r:0,s=o.substring(0,a),l=t(s),c=s.length-l.length,d=Math.max(0,a-c);return{nextValue:i,updateCaretPosition:()=>{n.value=i,n.setSelectionRange(d,d)}}}}const Bd=e=>{const t=(e=>{const t=s(e),r=s();return c((()=>{r.current=t.current,t.current=e}),[e]),r.current})(e);return t!==e},jd=e=>{const[t,r]=g(e),n=s(e);return[t,d((e=>{n.current=e,r(e)}),[]),n]};var zd,Rd={exports:{}};zd=e=>(()=>{var t={"./node_modules/css-mediaquery/index.js":
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
	  \***********************************************************/(e,t)=>{!function(){var e="function"==typeof Symbol&&Symbol.for,r=e?Symbol.for("react.element"):60103,n=e?Symbol.for("react.portal"):60106,o=e?Symbol.for("react.fragment"):60107,i=e?Symbol.for("react.strict_mode"):60108,a=e?Symbol.for("react.profiler"):60114,s=e?Symbol.for("react.provider"):60109,l=e?Symbol.for("react.context"):60110,c=e?Symbol.for("react.async_mode"):60111,d=e?Symbol.for("react.concurrent_mode"):60111,u=e?Symbol.for("react.forward_ref"):60112,h=e?Symbol.for("react.suspense"):60113,f=e?Symbol.for("react.suspense_list"):60120,p=e?Symbol.for("react.memo"):60115,g=e?Symbol.for("react.lazy"):60116,m=e?Symbol.for("react.block"):60121,b=e?Symbol.for("react.fundamental"):60117,v=e?Symbol.for("react.responder"):60118,y=e?Symbol.for("react.scope"):60119;function x(e){if("object"==typeof e&&null!==e){var t=e.$$typeof;switch(t){case r:var f=e.type;switch(f){case c:case d:case o:case a:case i:case h:return f;default:var m=f&&f.$$typeof;switch(m){case l:case u:case g:case p:case s:return m;default:return t}}case n:return t}}}var w=c,$=d,C=l,S=s,D=r,k=u,E=o,F=g,O=p,_=n,T=a,I=i,M=h,A=!1;function B(e){return x(e)===d}t.AsyncMode=w,t.ConcurrentMode=$,t.ContextConsumer=C,t.ContextProvider=S,t.Element=D,t.ForwardRef=k,t.Fragment=E,t.Lazy=F,t.Memo=O,t.Portal=_,t.Profiler=T,t.StrictMode=I,t.Suspense=M,t.isAsyncMode=function(e){return A||(A=!0,console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")),B(e)||x(e)===c},t.isConcurrentMode=B,t.isContextConsumer=function(e){return x(e)===l},t.isContextProvider=function(e){return x(e)===s},t.isElement=function(e){return"object"==typeof e&&null!==e&&e.$$typeof===r},t.isForwardRef=function(e){return x(e)===u},t.isFragment=function(e){return x(e)===o},t.isLazy=function(e){return x(e)===g},t.isMemo=function(e){return x(e)===p},t.isPortal=function(e){return x(e)===n},t.isProfiler=function(e){return x(e)===a},t.isStrictMode=function(e){return x(e)===i},t.isSuspense=function(e){return x(e)===h},t.isValidElementType=function(e){return"string"==typeof e||"function"==typeof e||e===o||e===d||e===a||e===i||e===h||e===f||"object"==typeof e&&null!==e&&(e.$$typeof===g||e.$$typeof===p||e.$$typeof===s||e.$$typeof===l||e.$$typeof===u||e.$$typeof===b||e.$$typeof===v||e.$$typeof===y||e.$$typeof===m)},t.typeOf=x}()},"./node_modules/react-is/index.js":
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
	  \**************************************************************************************/t=>{t.exports=e}},r={};function n(e){var o=r[e];if(void 0!==o)return o.exports;var i=r[e]={exports:{}};return t[e].call(i.exports,i,i.exports,n),i.exports}return n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n("./src/index.ts")})();var Ld=Rd.exports=zd(o);const Pd=F.div`
    border-radius: ${sa.md};
    background: ${ra.bg};
    padding: ${aa["spacing-16"]} ${aa["spacing-32"]};
    ${e=>{var t;return"dark"===(null===(t=e.theme)||void 0===t?void 0:t.colourMode)?O`
                  border: ${ia["width-010"]} ${ia.solid}
                      ${ra.border};
              `:O`
                  box-shadow: ${la["md-subtle"]};
              `}}
`,Nd=F.button`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: ${aa["spacing-24"]};
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
                background-color: ${ra["bg-hover-neutral"]};
            `}
    }
`,Wd=o.forwardRef(((t,r)=>{var{children:n,focusHighlight:o=!0,focusOutline:i="none",type:a="button"}=t,s=ct(t,["children","focusHighlight","focusOutline","type"]);return e(Nd,Object.assign({ref:r,$outline:i,$highlight:o,type:a},s,{children:n}))})),Hd=F.div`
    position: relative;
    display: flex;
    flex-direction: column;
    width: 40rem;
    max-height: 70%;
    background: ${ra.bg};
    box-shadow: ${la["lg-strong"]};
    border-radius: ${sa.lg};
    overflow: hidden;

    ${da.MaxWidth.md} {
        width: 90%;
        max-height: 70%;
    }
`,Yd=F(Wd)`
    position: absolute;
    top: var(--close-button-top-inset, ${aa["spacing-16"]});
    right: var(--close-button-right-inset, ${aa["spacing-16"]});
    padding: 0;
    color: ${ra.icon};

    svg {
        height: 2rem;
        width: 2rem;
    }

    ${da.MaxWidth.sm} {
        right: var(--close-button-right-inset, ${aa["spacing-20"]});
    }
`,Vd=r=>{var{id:n="modal-box",children:o,onClose:i,showCloseButton:a=!0}=r,s=ct(r,["id","children","onClose","showCloseButton"]);return t(Hd,Object.assign({"data-testid":n},s,{onClick:e=>{e.stopPropagation()},children:[a&&e(Yd,{onClick:i,"data-testid":"close-button",focusHighlight:!1,focusOutline:"browser",children:e(P,{})}),o]}))},Ud=e=>{const{textSize:t}=e||{};return O`
        // Text styling
        ${t&&na[`${t}-regular`]}

        strong {
            font-weight: ${na.Spec["weight-semibold"]};
            ${t&&na[`${t}-semibold`]};
        }

        p {
            margin: 0;
        }

        // Link styling
        a {
            font-weight: ${na.Spec["weight-semibold"]};
            ${t&&na[`${t}-semibold`]}
            color: ${ra.hyperlink};
            text-decoration: underline;

            svg {
                color: ${ra["icon-primary"]};
                height: 1lh;
                width: 1em;
                margin-left: 0.4rem;
                vertical-align: middle;
            }

            &:hover,
            &:active,
            &:visited,
            &:focus {
                color: ${ra["hyperlink-hover"]};

                svg {
                    color: ${ra["icon-hover"]};
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
    `},Kd=F.div`
    max-width: 30rem;
    padding: 0 1rem;
    pointer-events: auto;
    outline: none;
`,qd=F((t=>{var{children:r}=t,n=ct(t,["children"]);const o=n["data-testid"]||"card";return e(Pd,Object.assign({},n,{"data-testid":o,children:"string"==typeof r?e(_a.BodyBL,{children:r}):r}))}))`
    color: ${ra.text};
    ${Ud({textSize:"body-md"})}

    ${da.MaxWidth.sm} {
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
        background: ${ra["bg-inverse-subtlest"]};
        border: 5px solid transparent;
        border-radius: ${sa.full};
        background-clip: padding-box;
    }
`;F(Vd)`
    padding: 3.5rem 1.25rem 2.5rem;
`,F.div`
    overflow-y: scroll;

    &::-webkit-scrollbar {
        display: none; /* Chrome/Safari/Webkit */
    }

    color: ${ra.text};
    ${Ud({textSize:"body-md"})}
`;const Zd=F.div`
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
`,Gd=F.div`
    position: absolute;
    left: 0;
    top: 0;
    background-color: ${e=>e.$stacked?ra["overlay-subtle"]:ra["overlay-strong"]};
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
`;var Qd;!function(e){e.Ready="overlay-context-ready",e.Change="overlay-context-change"}(Qd||(Qd={}));const Xd=()=>{const[e,t]=g(void 0),r=N();return c((()=>{if(!r)return void t(void 0);const e=e=>{t(e.zIndex)};return r.events.on(Qd.Change,e),r.events.emit(Qd.Ready),()=>r.events.off(Qd.Change,e)}),[r]),e},Jd=({show:t=!1,rootId:r,onOverlayClick:n,children:i,backgroundOpacity:a,backgroundBlur:l=!0,disableTransition:d=!1,enableOverlayClick:u=!1,zIndex:h,id:f})=>{const[p,m]=g(null),[b,v]=g(),[y]=g((()=>Od.generate())),x=H(),w=s(),$=s(null),C=i&&o.cloneElement(i,{ref:$}),S=f?`lifesg-ds-overlay-root-${f}`:"lifesg-ds-overlay-root",D=null!=h?h:b?99999:99998;(e=>{const t=N();c((()=>{if(!t)return;const r={zIndex:e};t.events.emit(Qd.Change,r)}),[t,e]),c((()=>{if(!t)return;const r=()=>{const r={zIndex:e};t.events.emit(Qd.Change,r)};return null==t||t.events.on(Qd.Ready,r),()=>null==t?void 0:t.events.off(Qd.Ready,r)}),[t,e])})(D),c((()=>(_(),m(F()),()=>{A(),I().length<1&&(j("remove"),R(),T("remove"))})),[]),c((()=>{if(t){const e=O();k(e),M(),E()&&1===I().length&&(z(),j("add"));const t=setTimeout((()=>{T("add")}),200);return()=>clearTimeout(t)}{A(),E()&&I().length<1&&(j("remove"),R());const e=setTimeout((()=>{I().length<1&&T("remove")}),200);return()=>clearTimeout(e)}}),[t]);const k=e=>{w.current=e,v(e)},E=()=>/(iPad|iPhone|iPod)/g.test(navigator.userAgent),F=()=>document&&r?document.getElementById(r):document?document.body:null,O=()=>I().length>0,_=()=>{if(!document.getElementById(tu)){const e=document.createElement("style");e.id=tu;const t=document.documentElement.clientWidth,r=window.innerWidth-t;e.innerHTML=`\n\t\t\t\t.${ru} {\n\t\t\t\t\toverflow: hidden;\n\t\t\t\t\tpadding-right: ${r}px !important;\n\t\t\t\t\t-ms-overflow-style: none;\n\t\t\t\t\tscrollbar-width: none;\n\t\t\t\t}\n\n\t\t\t\t.${ru}::-webkit-scrollbar {\n\t\t\t\t\tdisplay: none;\n\t\t\t\t}\n\n\t\t\t\t.${nu} {\n\t\t\t\t\tposition: fixed;\n\t\t\t\t\ttop: var(${ou}, 0);\n\t\t\t\t\tbottom: 0;\n\t\t\t\t}\n\t\t\t`,document.body.appendChild(e)}},T=e=>{const t=document.body.classList.contains(ru);"add"!==e||t?"remove"===e&&t&&document.body.classList.remove(ru):document.body.classList.add(ru)},I=()=>{const e=document.body.dataset.lifesgDsOverlayOrder;return e?e.split(","):[]},M=()=>{const e=I();document.body.dataset.lifesgDsOverlayOrder=[...e,y].join(",")},A=()=>{const e=I();document.body.dataset.lifesgDsOverlayOrder=e.filter((e=>e!==y)).join(",")},j=e=>{if(!E())return;const t=document.body.classList.contains(nu);"add"!==e||t?"remove"===e&&t&&document.body.classList.remove(nu):document.body.classList.add(nu)},z=()=>{const e=document.body.style,t=e.top?e.top:window.scrollY+"px";document.body.style.setProperty(ou,t)},R=()=>{const e=document.body.style.getPropertyValue(ou);requestAnimationFrame((()=>{window.scrollTo({top:parseFloat(e)})}))},L=e=>{var t;const r=null===(t=$.current)||void 0===t?void 0:t.firstChild;r&&r.contains(e.target)||n&&u&&(e.preventDefault(),n())};return p?B.createPortal(e(Zd,{id:S,"data-testid":S,$show:t,$zIndex:D,children:i&&e(Y,{id:x,children:e(Gd,{"data-testid":"overlay-wrapper",$show:t,$stacked:b,$backgroundBlur:l,$disableTransition:d,onClick:L,children:C})})}),p):null},eu=t=>e(W,{children:e(Jd,Object.assign({},t))}),tu="lifesg-ds-overlay-stylesheet",ru="lifesg-ds-overlay-open",nu="lifesg-ds-overlay-scroll-lock",ou="--lifesg-ds-overlay-scroll-y",iu=()=>{const[e,t]=g(),[r,n]=g(),o=d((()=>{const e=.01*window.innerHeight;t(e)}),[]),i=d((()=>{if(window.visualViewport){const e=.01*window.visualViewport.height;t(e),n(window.visualViewport.offsetTop)}}),[]);return c((()=>window.visualViewport?(i(),window.visualViewport.addEventListener("resize",i),()=>{var e;null===(e=window.visualViewport)||void 0===e||e.removeEventListener("resize",i)}):(o(),window.addEventListener("resize",o),()=>{window.removeEventListener("resize",o)})),[]),{verticalHeight:e,offsetTop:r}},au=i({onClose:()=>{}}),su=F.div`
    position: relative;
    width: 100%;
    height: 100%;

    overflow: auto;

    ${da.MaxWidth.sm} {
        ${e=>O`
                height: calc(
                    ${e.$verticalHeight?`${e.$verticalHeight}px`:"1vh"} * 100
                );
            `}

        top: ${e=>e.$offsetTop||0}px;
    }

    ${e=>O`
        &[data-status="initial"] {
            opacity: 0;
            ${e.$animationFrom}: -3%;
        }

        &[data-status="open"] {
            opacity: 1;
            ${e.$animationFrom}: 0;
            transition: all ${oa["duration-250"]}
                ${oa["ease-entrance"]}
            transition-delay: ${oa["duration-150"]};
        }

        &[data-status="close"] {
            opacity: 0;
            ${e.$animationFrom}: -3%;
            transition: all ${oa["duration-250"]}
                ${oa["ease-exit"]};
        }
    `}
`,lu=F.div`
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100%;
    pointer-events: none;
`,cu=F.div`
    pointer-events: auto;
    width: 100%;
    outline: none;
`,du=F.div`
    width: 40rem;
    margin: ${aa["spacing-64"]} auto;
    background: ${ra.bg};
    box-shadow: ${la["xs-strong"]};
    border-radius: ${sa.lg};

    display: flex;
    flex-direction: column-reverse;

    max-width: calc(100% - ${ca["xxl-margin"]}px * 2);

    ${da.MaxWidth.xl} {
        max-width: calc(100% - ${ca["xl-margin"]}px * 2);
    }

    ${da.MaxWidth.lg} {
        max-width: calc(100% - ${ca["lg-margin"]}px * 2);
    }

    ${da.MaxWidth.md} {
        max-width: calc(100% - ${ca["md-margin"]}px * 2);
    }

    ${da.MaxWidth.sm} {
        max-width: calc(100% - ${ca["sm-margin"]}px * 2);
    }

    ${da.MaxWidth.xs} {
        max-width: calc(100% - ${ca["xs-margin"]}px * 2);
    }

    ${da.MaxWidth.xxs} {
        max-width: calc(100% - ${ca["xxs-margin"]}px * 2);
    }
`,uu=F.div`
    margin-right: ${aa["spacing-16"]};
    margin-left: auto;
    margin-top: ${aa["spacing-16"]};
    margin-bottom: ${aa["spacing-16"]};
`,hu=F(Wd)`
    padding: 0;
    color: ${ra.icon};

    svg {
        height: 2rem;
        width: 2rem;
    }
`,fu=F.div`
    margin-right: ${aa["spacing-64"]};
    margin-left: ${aa["spacing-64"]};

    ${da.MaxWidth.sm} {
        margin-right: ${aa["spacing-20"]};
        margin-left: ${aa["spacing-20"]};
    }
`,pu=F.div`
    margin-right: ${aa["spacing-64"]};
    margin-left: ${aa["spacing-64"]};

    ${da.MaxWidth.sm} {
        margin-right: ${aa["spacing-20"]};
        margin-left: ${aa["spacing-20"]};
    }

    display: flex;
    flex-direction: row-reverse; /* primary button on right */
    column-gap: ${aa["spacing-32"]};
    row-gap: ${aa["spacing-16"]};

    & > button {
        flex: 1;
    }

    ${da.MaxWidth.md} {
        flex-direction: column;
    }
`,gu=F.div`
    :where(& > ${fu}:last-child) {
        margin-bottom: ${aa["spacing-64"]};
    }

    :where(& > ${pu}:not(:first-child)) {
        margin-top: ${aa["spacing-32"]};
    }

    :where(& > ${pu}:last-child) {
        margin-bottom: ${aa["spacing-64"]};
    }

    ${e=>e.$hasCloseButton?O`
                  :where(& > ${fu}:first-child),
                  :where(& > ${pu}:first-child) {
                      margin-top: 0;
                  }
              `:O`
                  :where(& > ${fu}:first-child),
                  :where(& > ${pu}:first-child) {
                      margin-top: ${aa["spacing-64"]};
                  }
              `}
`,mu=t=>{var{"data-testid":r="modal-close-button"}=t,n=ct(t,["data-testid"]);const{onClose:o}=b(au);return e(uu,Object.assign({"data-testid":r},n,{children:e(hu,{onClick:o,"data-testid":"close-button",focusHighlight:!1,focusOutline:"browser","aria-label":"Close button",children:e(P,{"aria-hidden":!0})})}))};mu.displayName="ModalV2.CloseButton";const bu=t=>{var{"data-testid":r="modal-content",children:n}=t,o=ct(t,["data-testid","children"]);return e(fu,Object.assign({"data-testid":r},o,{children:n}))};bu.displayName="ModalV2.Content";const vu=e=>{var{"data-testid":r="modal-footer",primaryButton:n,secondaryButton:o}=e,i=ct(e,["data-testid","primaryButton","secondaryButton"]);return t(pu,Object.assign({"data-testid":r},i,{children:[n,o]}))};vu.displayName="ModalV2.Footer";const yu=e=>{var{id:r,"data-testid":n="modal-card",children:i}=e,a=ct(e,["id","data-testid","children"]);const s=e=>o.Children.toArray(i).find((t=>((e,t)=>_(e.type)?e.type.target===t:e.type===t)(t,e))),l=s(mu),c=s(bu),d=s(vu),u=!!l;return t(du,Object.assign({id:r,"data-testid":n},a,{onClick:e=>{e.stopPropagation()},children:[t(gu,{$hasCloseButton:u,children:[c,d]}),u&&l]}))};yu.displayName="ModalV2.Card";const xu=Object.assign((t=>{var{id:r,show:n,onClose:o,animationFrom:i="bottom",children:a,enableOverlayClick:s=!0,rootComponentId:l,zIndex:d,onOverlayClick:u,dismissKeyboardOnShow:h=!0,"data-testid":f="modal"}=t,p=ct(t,["id","show","onClose","animationFrom","children","enableOverlayClick","rootComponentId","zIndex","onOverlayClick","dismissKeyboardOnShow","data-testid"]);const{verticalHeight:g,offsetTop:m}=iu(),{refs:b,context:v}=V({open:n,onOpenChange:e=>{e||null==o||o()}}),{isMounted:y,status:x}=U(v,{duration:300}),w=K(v,{outsidePress:!1,enabled:!!o}),{getFloatingProps:$}=q([w]);return c((()=>{var e,t;n&&h&&(null===(t=null===(e=document.activeElement)||void 0===e?void 0:e.blur)||void 0===t||t.call(e))}),[h,n]),e(eu,{"data-testid":`${f}-overlay`,show:y,enableOverlayClick:s,onOverlayClick:u,id:r,rootId:l,zIndex:d,children:e(su,Object.assign({$show:y,$animationFrom:i,"data-testid":f,$verticalHeight:g,$offsetTop:m},p,{"data-status":x,children:e(au.Provider,{value:{onClose:o},children:y&&e(Z,{context:v,initialFocus:b.floating,children:e(lu,{children:e(cu,Object.assign({ref:b.setFloating},$(),{"aria-modal":!0,role:"dialog",children:a}))})})})}))})}),{Card:yu,CloseButton:mu,Content:bu,Footer:vu}),wu=n=>{var{children:o,visible:i,onMobileClose:a,maxHeight:s,overflow:l,ariaLabel:c,id:d}=n,u=ct(n,["children","visible","onMobileClose","maxHeight","overflow","ariaLabel","id"]);const h=u["data-testid"]||"popover",f=b(T),p=ca["sm-max"]({theme:f}),g=Ld.useMediaQuery({maxWidth:p}),m=()=>{a&&a()},v=()=>"string"==typeof o?e(_a.BodyMD,{children:o}):o;return t(r,{children:[i&&e(Kd,Object.assign({tabIndex:0,"data-testid":h},u,{id:d,role:"dialog","aria-label":null!=c?c:"More information",children:e(qd,{$maxHeight:s,$overflow:l,children:v()})})),g&&e(xu,{show:null!=i&&i,onOverlayClick:m,onClose:m,id:d,role:"dialog","aria-label":null!=c?c:"More information",children:t(xu.Card,{children:[e(xu.Content,{children:v()}),e(xu.CloseButton,{})]})})]})},$u=F.div`
    display: inline;
    width: fit-content;
    cursor: pointer;
    position: relative;
`,Cu=n=>{var o,i,{children:a,popoverContent:l,trigger:c="click",position:d="top",zIndex:u,rootNode:h,customOffset:f,delay:p,onPopoverAppear:m,onPopoverDismiss:v,popoverAriaLabel:y,enableFlip:x=!0,enableResize:w=!1,overflow:$="auto",triggerOnFocus:C=!1,isModal:S=!0}=n,D=ct(n,["children","popoverContent","trigger","position","zIndex","rootNode","customOffset","delay","onPopoverAppear","onPopoverDismiss","popoverAriaLabel","enableFlip","enableResize","overflow","triggerOnFocus","isModal"]);const[k,E]=g(!1),F=s(null),O=s(null),_=b(T),I=ca["sm-max"]({theme:_}),M=Ld.useMediaQuery({maxWidth:I}),[A,B]=g(0),j=`${s(Od.generate()).current}-popover`,{refs:z,floatingStyles:R,context:L}=V({open:k,placement:d,whileElementsMounted:G,middleware:[Q(null!=f?f:16),x&&X(),J({limiter:ee()}),w&&te({apply({availableHeight:e}){B(e)}})],onOpenChange:e=>{E(e),k!==e&&ce(e)}}),P=Xd(),N="hover"===(M?"click":c),W=re(L,{ignoreMouse:N}),H=K(L),Y=ne(L,{enabled:N,delay:{open:null!==(o=null==p?void 0:p.open)&&void 0!==o?o:0,close:null!==(i=null==p?void 0:p.close)&&void 0!==i?i:500}}),U=oe(L,{enabled:C}),{getReferenceProps:ae,getFloatingProps:se}=q([W,H,Y,U]),le=()=>{E(!1),ce(!1)},ce=e=>{e&&m&&m(),!e&&v&&v()};return t(r,{children:[e($u,Object.assign({ref:e=>{F.current=e,z.setReference(e)}},ae({onClick:e=>{e.stopPropagation(),e.preventDefault()}}),D,{children:a})),k&&e(ie,{root:h,children:e(Z,Object.assign({context:L},!S&&{initialFocus:-1,returnFocus:!1,modal:!1},{children:e("div",Object.assign({ref:e=>{O.current=e,z.setFloating(e)},onBlur:e=>{var t;const r=null!==(t=e.relatedTarget)&&void 0!==t?t:document.activeElement;r&&(e=>{if(!e)return!1;if(e instanceof HTMLElement&&e.hasAttribute("data-floating-ui-focus-guard"))return!0;const t=F.current,r=O.current;return!!t&&t.contains(e)||!!r&&r.contains(e)})(r)||(E(!1),ce(!1))},style:Object.assign(Object.assign({},R),{outline:"none",zIndex:null!=u?u:P})},se(),{children:"function"==typeof l?l(w?{maxHeight:A,overflow:$}:{}):e(wu,{visible:!0,onMobileClose:le,maxHeight:w?A:void 0,overflow:w?$:void 0,ariaLabel:y,id:j,children:l})}))}))})]})},Su=e=>{switch(e){case"underline":return"text-decoration: underline 1px;";case"underline-dashed":return"text-decoration: underline dashed 1px;"}},Du=F.span`
    color: ${ra["text-primary"]};
    font-weight: 600;
    text-underline-position: under;

    ${({$defaultStyle:e})=>Su(e)}

    &:hover,
    &:focus-visible {
        color: ${ra["text-hover"]};
        ${({$hoverStyle:e})=>Su(e)}
    }

    svg {
        height: 1lh; // align vertically
        width: 1em; // scale icon with font size
        vertical-align: top;
    }
`,ku=F.span`
    ${e=>!e.$standalone&&"margin-left: 0.25rem;"}
`,Eu=r=>{var{ariaLabel:n,content:o,icon:i,underlineStyle:a="default",underlineHoverStyle:s="default"}=r,l=ct(r,["ariaLabel","content","icon","underlineStyle","underlineHoverStyle"]);const c=!!o;return e(Cu,Object.assign({},l,{children:t(Du,{"aria-label":null!=n?n:c?void 0:"More info",role:"button","aria-haspopup":"dialog",tabIndex:0,$defaultStyle:a,$hoverStyle:s,children:[o,i&&e(ku,{$standalone:!c,children:i})]})}))},Fu=F.div`
    padding-left: ${aa["spacing-4"]};
    display: inline;
`,Ou=({addon:t,rootNode:r})=>{const{content:n,type:o,icon:i,id:a,zIndex:s,"data-testid":l}=t;return e(Fu,{children:e(Eu,{trigger:"click",id:a,"data-testid":l,popoverContent:n,rootNode:r,zIndex:s,icon:null!=i?i:e(L,{"data-testid":`${o}-icon`}),ariaLabel:"More info"})})},_u=F.div`
    margin-bottom: ${aa["spacing-8"]};
`,Tu=F.label`
    color: ${ra["text-subtle"]};
    display: inline-block;

    ${na["form-label"]}
    ${Ud()}
    font-weight: ${na.Spec["weight-semibold"]};
`,Iu=F(se)`
    height: 1lh;
    width: 1em;
    flex-shrink: 0;
    color: ${ra["icon-error-strong"]};
`,Mu=F.div`
    ${na["body-sm-semibold"]}
    display: flex;
    gap: ${aa["spacing-4"]};
    margin-top: ${aa["spacing-8"]};
`,Au=F.p`
    color: ${ra["text-error"]};
    margin-bottom: 0;
    outline: none;
`,Bu=F.span`
    ${na["form-description"]}
    color: ${ra["text-subtler"]};
    display: block;
`,ju=r=>{var{id:n,children:o,addon:i,subtitle:a,"data-testid":s,className:l,style:c}=r,d=ct(r,["id","children","addon","subtitle","data-testid","className","style"]);return t(_u,{className:l,style:c,"data-testid":s,children:[t(Tu,Object.assign({id:n},d,{children:[o,i&&i.type&&("popover"===(null==i?void 0:i.type)?e(Ou,{addon:i}):null)]})),"string"==typeof a?e(Bu,{id:n?`${n}-subtitle`:void 0,"data-testid":s?`${s}-subtitle`:"subtitle",children:a}):a]})},zu=r=>t(Mu,{children:[e(Iu,{"aria-hidden":!0}),e(Au,Object.assign({},r))]}),Ru=F.div`
    position: relative;

    ${e=>{const{$xxlStart:t,$xxlSpan:r,$xlStart:n,$xlSpan:o,$lgStart:i,$lgSpan:a,$mdStart:s,$mdSpan:l,$smStart:c,$smSpan:d,$xsStart:u,$xsSpan:h,$xxsStart:f,$xxsSpan:p}=e;return O`
            grid-column: ${t||"auto"} / span ${r||1};

            ${Fi.MaxWidth.xl} {
                grid-column: ${n||"auto"} / span ${o||1};
            }

            ${Fi.MaxWidth.lg} {
                grid-column: ${i||"auto"} / span ${a||1};
            }

            ${Fi.MaxWidth.md} {
                grid-column: ${s||"auto"} / span ${l||1};
            }

            ${Fi.MaxWidth.sm} {
                grid-column: ${c||"auto"} / span ${d||1};
            }

            ${Fi.MaxWidth.xs} {
                grid-column: ${u||"auto"} / span ${h||1};
            }

            ${Fi.MaxWidth.xxs} {
                grid-column: ${f||"auto"} / span ${p||1};
            }
        `}}
`,Lu=o.forwardRef(((t,r)=>{const n=b(T),{xxlCols:o,xlCols:i,lgCols:a,mdCols:s,smCols:l,xsCols:c,xxsCols:d}=t,u=ct(t,["xxlCols","xlCols","lgCols","mdCols","smCols","xsCols","xxsCols"]),h=(e,t,r)=>{if(!e)return{start:void 0,span:void 0};if("development"===process.env.NODE_ENV&&("number"==typeof e&&e>t?console.warn(`Warning: ${r}Cols exceeds maximum (${t}): ${e}`):Array.isArray(e)&&(e[0]>t+1||e[1]>t+1)&&console.warn(`Warning: ${r}Cols array exceeds maximum (${t}): [${e[0]}, ${e[1]}]`)),Array.isArray(e)){const[r,n]=e;if(-1===n)return{start:r,span:t-r+1};return{start:r,span:Math.min(n-r,t)}}return{start:void 0,span:Math.min(e,t)}};return e(Ru,Object.assign({ref:r},(()=>{const e=ki["xxl-column"]({theme:n}),t=ki["xl-column"]({theme:n}),r=ki["lg-column"]({theme:n}),u=ki["md-column"]({theme:n}),f=ki["sm-column"]({theme:n}),p=ki["xs-column"]({theme:n}),g=ki["xxs-column"]({theme:n}),m=h(o||i||a||s||l||c||d,e,"xxl"),b=h(i||a||s||l||c||d,t,"xl"),v=h(a||s||l||c||d,r,"lg"),y=h(s||l||c||d,u,"md"),x=h(l||c||d,f,"sm"),w=h(c||d,p,"xs"),$=h(d,g,"xxs");return{$xxlStart:m.start,$xxlSpan:m.span,$xlStart:b.start,$xlSpan:b.span,$lgStart:v.start,$lgSpan:v.span,$mdStart:y.start,$mdSpan:y.span,$smStart:x.start,$smSpan:x.span,$xsStart:w.start,$xsSpan:w.span,$xxsStart:$.start,$xxsSpan:$.span}})(),u))})),Pu={mobileS:320,mobileM:375,mobileL:480,tablet:1199,desktopM:1399,desktopL:1999,desktop4k:3840},Nu=e=>Object.keys(Pu).reduce(((t,r)=>{const n=Pu[r];return t[r]=`@media screen and (${e}: ${n}px)`,t}),{}),Wu=Nu("max-width"),Hu=(Nu("min-width"),F.div`
    position: relative;
    ${e=>{const{$desktopStart:t,$desktopSpan:r,$tabletStart:n,$tabletSpan:o,$mobileStart:i,$mobileSpan:a}=e;return O`
            grid-column: ${t||"auto"} / span ${r||1};

            ${Wu.tablet} {
                grid-column: ${n||"auto"} / span
                    ${o||1};
            }

            ${Wu.mobileL} {
                grid-column: ${i||"auto"} / span
                    ${a||1};
            }
        `}}
`),Yu=o.forwardRef(((t,r)=>{const{mobileCols:n,tabletCols:o,desktopCols:i}=t,a=ct(t,["mobileCols","tabletCols","desktopCols"]);return e(Hu,Object.assign({ref:r},(()=>{const e=o||n,t=n,r=Vu(i||o||n),a=Vu(e),s=Vu(t);return{$desktopSpan:r.span,$desktopStart:r.start,$mobileSpan:s.span,$mobileStart:s.start,$tabletSpan:a.span,$tabletStart:a.start}})(),a))})),Vu=e=>{if(Array.isArray(e)&&e.length>1){const[t,r]=e,n=t<=r?t:r,o=t<=r?r:t;let i;return i=o===n?1:o-n,{start:n,span:i}}return"number"==typeof e?{start:void 0,span:e}:{start:void 0,span:void 0}},Uu=O`
    display: flex;
    flex-direction: column;

    &:not(:last-child) {
        margin-bottom: ${aa["spacing-32"]};
    }
`,Ku=F.div`
    ${Uu}
`,qu=F(Lu)`
    ${Uu}
`,Zu=F(Yu)`
    ${Uu}
`,Gu=({label:r,errorMessage:n,id:o,disabled:i,children:a,layoutType:s,mobileCols:l,tabletCols:c,desktopCols:d,xxsCols:u,xsCols:h,smCols:f,mdCols:p,lgCols:m,xlCols:b,xxlCols:v,"data-testid":y,"data-error-testid":w})=>{const $=!s&&(l||c||d)?"v2-grid":!s&&(u||h||f||p||m||b||v)?"grid":s||"flex",S="string"==typeof n?n.trim():n,[D]=g((()=>Od.generate())),k=`${null!=o?o:D}-label`,E=`${null!=o?o:D}-label-subtitle`,F=`${null!=o?o:D}-error-message`;const O=(e=>{switch(e){case"v2-grid":return Zu;case"grid":return qu;case"flex":return Ku}})($);return t(O,Object.assign({"data-testid":y},(e=>{switch(e){case"v2-grid":return{mobileCols:l,tabletCols:c,desktopCols:d};case"grid":return{xxsCols:u,xsCols:h,smCols:f,mdCols:p,lgCols:m,xlCols:b,xxlCols:v};case"flex":return}})($),{children:[r&&e(ju,"string"==typeof r?{htmlFor:`${o}-base`,"data-testid":o?`${o}-label`:"form-label",id:k,disabled:i,children:r}:Object.assign({htmlFor:`${o}-base`,"data-testid":o?`${o}-label`:"form-label",id:k,disabled:i},r)),(()=>{const e={"aria-invalid":!!n,"aria-describedby":[S?F:void 0,"object"==typeof r&&(null==r?void 0:r.subtitle)?E:void 0].filter(Boolean).join(" ")||void 0,"aria-labelledby":r?k:void 0};return C.map(a,(t=>x(t,e)))})(),S&&t(Mu,{children:[e(Iu,{"aria-hidden":!0}),e(Au,{id:F,tabIndex:0,"data-testid":null!=w?w:o?`${o}-error-message`:"error-message",children:S})]})]}))},Qu=e=>"small"===e?2.5:3,Xu=F.div`
    position: relative;
    width: 100%;
    ${e=>{const t=Qu(e.$variant);return O`
            min-height: ${t}rem;
            height: ${t}rem; // Need this to persist the height when expanding or collapsing list
        `}}
`,Ju=O`
    display: flex;
    position: relative;
    align-items: center;
    justify-content: space-between;
    padding: 0 ${aa["spacing-16"]};
    // exclude top and bottom borders
    height: calc(${e=>Qu(e.$variant)}rem - 2px);
    width: 100%;
    border-radius: ${sa.sm};
    border: none;
    background: transparent;

    &:focus,
    &:active {
        outline: none;
    }

    &:focus-visible {
        outline: 2px solid ${ra["border-focus"]};
    }
`,eh=F.button`
    ${Ju}
    cursor: pointer;
`;F.div`
    ${Ju}
`;const th=I`
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
`;F.div`
    position: relative;
    border: ${ia["width-010"]} ${ia.solid} ${ra.border};
    border-radius: ${sa.sm};
    background: ${ra.bg};
    overflow: hidden;

    &:focus-within {
        border-color: ${ra["border-focus"]};
        box-shadow: 0px 0px 4px 0px
            rgb(from ${ra["border-focus"]} r g b / 50%) inset; // TODO: confirm shadow
    }

    ${e=>e.$expanded?O`
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                z-index: 2;
            `:O`
                animation: ${th} 0.5s ease-in-out;
            `}

    ${e=>e.$disabled?O`
                background: ${ra["bg-disabled"]};

                ${eh} {
                    cursor: not-allowed;
                }

                &:focus-within {
                    border-color: ${ra.border};
                    box-shadow: none;
                }
            `:e.$readOnly?O`
                border: none;
                background: transparent !important;

                ${eh} {
                    padding: 0;
                }

                &:focus-within {
                    border: none;
                    box-shadow: none;
                }
            `:e.$error?O`
                border-color: ${ra["border-error"]};

                &:focus-within {
                    border-color: ${ra["border-error"]};
                    box-shadow: 0px 0px 4px 0px
                        rgb(from ${ra["border-error"]} r g b / 50%) inset; // TODO: confirm shadow
                }
            `:void 0}
`,F.div`
    transform: rotate(${e=>e.$expanded?180:0}deg);
    transition: transform ${oa["duration-250"]} ${oa["ease-default"]};
    margin-left: ${aa["spacing-16"]};
`,F(le)`
    color: ${ra.icon};
`,F.div`
    height: 1px;
    background: ${ra.border};
    margin: 0 ${aa["spacing-8"]};
`;const rh=F.div`
    display: flex;
    flex: 1;
    word-break: break-all;
    ${e=>{if(e.$disabled)return O`
                color: ${ra["text-disabled"]};
            `}}
`,nh=F.div`
    ${e=>"small"===e.$variant?na["body-md-regular"]:na["body-baseline-regular"]}
    text-align: left;
    ${e=>{if("middle"!==e.$truncateType)return O`
                    ${Ca(1)}
                `}}
    overflow: hidden;
`,oh=F(nh)`
    color: ${ra["text-subtler"]};
`,ih=e=>"right"===e?"bottom-end":"bottom-start",ah=i({elementWidth:0,styles:{},setFloatingRef:()=>{},getFloatingProps:()=>({})}),sh=()=>b(ah),lh=({enabled:n,isOpen:o,onOpen:i,onClose:a,onDismiss:l,renderElement:c,renderDropdown:d,customZIndex:u,clickToToggle:h=!1,offset:f=0,alignment:p="left",fitAvailableHeight:g,rootNode:m,positionRef:v})=>{var y;const x=b(T),w=ca["sm-max"]({theme:x}),$=s(null),{width:C=0}=nd({targetRef:null!=v?v:$,handleHeight:!1}),S={name:"center",fn:({x:e,rects:t})=>{const r=0===e||e+t.floating.width===window.innerWidth,n=window.innerWidth<w;return{x:r&&n?(window.innerWidth-t.floating.width)/2:e}}},{refs:D,floatingStyles:k,context:E}=V({open:o,onOpenChange:(e,t,r)=>{"escape-key"===r?null==l||l():e&&!o?null==i||i():!e&&o&&(null==a||a(r))},whileElementsMounted:G,placement:ih(p),middleware:[Q(f),X(),J({limiter:ee()}),te({apply({availableHeight:e,elements:t}){!g||e>=t.floating.scrollHeight?t.floating.style.setProperty("--available-height",""):t.floating.style.setProperty("--available-height",`${Math.max(0,e)}px`)}}),S]}),F=Xd(),{isMounted:O,styles:_}=ae(E,{initial:{opacity:0},open:{opacity:1},duration:300}),I=re(E,{enabled:n,toggle:h,keyboardHandlers:h}),M=K(E,{enabled:n}),{getReferenceProps:A,getFloatingProps:B}=q([I,M]),j={elementWidth:C,styles:Object.assign(Object.assign(Object.assign({},_),k),{zIndex:null!==(y=null!=u?u:F)&&void 0!==y?y:50}),setFloatingRef:D.setFloating,getFloatingProps:B};return t(r,{children:[e("div",Object.assign({ref:e=>{$.current=e,D.setReference(e)}},A(),{children:c()})),O&&e(ie,{root:m,children:e(Z,{context:E,modal:!1,initialFocus:-1,returnFocus:!1,children:e(ah.Provider,{value:j,children:d(j)})})})]})},ch=F.div`
    --vertical-inset: ${aa["spacing-24"]};
    --horizontal-inset: ${aa["spacing-20"]};
    --header-bottom-spacing: ${aa["spacing-4"]};

    border: ${ia["width-010"]} ${ia.solid} ${ra.border};
    border-radius: ${sa.sm};
    overflow: hidden;

    width: ${e=>e.$width}px;
    max-width: 41rem;
    min-width: 21rem;

    ${da.MaxWidth.sm} {
        min-width: 17.5rem;
    }
`,dh=F.span`
    clip-path: inset(50%);
    height: 1px;
    width: 1px;
    overflow: hidden;
    position: absolute;
    white-space: nowrap;
`,uh=e=>Ed()?e:e?"true":void 0,hh=(...e)=>e.filter((e=>!!e)).join(" "),fh=F.div`
    display: inline-block;
    position: relative;
    width: ${({$size:e})=>e?`${e}px`:"1em"};
    height: ${({$size:e})=>e?`${e}px`:"1em"};
    color: ${e=>e.$color||"currentColor"};
`,ph=I`
	0% {
	  transform: rotate(0deg);
	}
	100% {
	  transform: rotate(360deg);
	}
`,gh=F.div`
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
    animation: ${ph} 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
`,mh=F(gh)`
    animation-delay: -0.45s;
`,bh=F(gh)`
    animation-delay: -0.3s;
`,vh=F(gh)`
    animation-delay: -0.15s;
`,yh=({color:r,className:n,size:o})=>t(fh,{className:n,$size:o,$color:r,"data-testid":"component-loading-spinner",children:[e(gh,{id:"inner1"}),e(mh,{id:"inner2"}),e(bh,{id:"inner3"}),e(vh,{id:"inner4"})]}),xh={Button:{"button-radius":Ki.md,"button-default-colour-bg":yi["bg-primary"],"button-default-colour-bg-hover":yi["bg-primary-hover"],"button-default-colour-text":yi["text-inverse"],"button-secondary-colour-border":yi["border-primary"],"button-secondary-colour-text":yi["text-primary"],"button-light-colour-text":yi["text-primary"],"button-link-colour-text":yi["text-primary"]},Animation:{"loading-dots-spinner-colour":yi["icon-primary"]},Navbar:{"navbar-full-height":"6rem","navbar-full-logo-height":"2rem","navbar-compressed-height":"4rem","navbar-compressed-logo-height":"1.5rem","navbar-mobile-height":"3.5rem","navbar-mobile-logo-height":"1.5rem","navbar-colour-bg":yi.bg,"navbar-colour-icon":yi.icon,"navbar-link-colour-text":yi.text,"navbar-link-colour-text-hover":yi["text-hover"],"navbar-link-colour-text-selected-hover":yi["text-selected-hover"]},Footer:{"footer-colour-bg":yi["bg-strong"],"footer-colour-text":yi.text,"footer-link-colour-text":yi.text,"footer-link-colour-text-hover":yi["text-hover"],"footer-disclaimer-link-colour-text":yi.text,"footer-disclaimer-link-colour-text-hover":yi["text-subtler"]}},wh={Button:{"button-radius":Ki.sm,"button-default-colour-bg":yi["bg-primary"],"button-default-colour-bg-hover":yi["bg-primary-hover"],"button-default-colour-text":yi["text-inverse"],"button-secondary-colour-border":yi["border-primary"],"button-secondary-colour-text":yi["text-primary"],"button-light-colour-text":yi["text-primary"],"button-link-colour-text":yi["text-primary"]},Animation:{"loading-dots-spinner-colour":yi["icon-primary"]},Navbar:{"navbar-full-height":"6rem","navbar-full-logo-height":"2rem","navbar-compressed-height":"4rem","navbar-compressed-logo-height":"1.5rem","navbar-mobile-height":"3.5rem","navbar-mobile-logo-height":"1.5rem","navbar-colour-bg":yi.bg,"navbar-colour-icon":yi.icon,"navbar-link-colour-text":yi.text,"navbar-link-colour-text-hover":yi["text-hover"],"navbar-link-colour-text-selected-hover":yi["text-selected-hover"]},Footer:{"footer-colour-bg":yi["bg-strong"],"footer-colour-text":yi.text,"footer-link-colour-text":yi.text,"footer-link-colour-text-hover":yi["text-hover"],"footer-disclaimer-link-colour-text":yi.text,"footer-disclaimer-link-colour-text-hover":yi["text-subtler"]}},$h={Button:{"button-radius":Ki.sm,"button-default-colour-bg":yi["bg-primary"],"button-default-colour-bg-hover":yi["bg-primary-hover"],"button-default-colour-text":yi["text-inverse"],"button-secondary-colour-border":yi["border-primary"],"button-secondary-colour-text":yi["text-primary"],"button-light-colour-text":yi["text-primary"],"button-link-colour-text":yi["text-primary"]},Animation:{"loading-dots-spinner-colour":ra.Primitive["brand-50"]},Navbar:{"navbar-full-height":"6rem","navbar-full-logo-height":"2rem","navbar-compressed-height":"4rem","navbar-compressed-logo-height":"1.5rem","navbar-mobile-height":"3.5rem","navbar-mobile-logo-height":"1.5rem","navbar-colour-bg":yi.bg,"navbar-colour-icon":yi.icon,"navbar-link-colour-text":yi.text,"navbar-link-colour-text-hover":yi["text-hover"],"navbar-link-colour-text-selected-hover":yi["text-selected-hover"]},Footer:{"footer-colour-bg":yi["bg-strong"],"footer-colour-text":yi.text,"footer-link-colour-text":yi.text,"footer-link-colour-text-hover":yi["text-hover"],"footer-disclaimer-link-colour-text":yi.text,"footer-disclaimer-link-colour-text-hover":yi["text-subtler"]}},Ch={collections:{default:wh,pa:{Button:{"button-radius":Ki.full,"button-default-colour-bg":yi["bg-primary"],"button-default-colour-bg-hover":yi["bg-primary-hover"],"button-default-colour-text":yi["text-inverse"],"button-secondary-colour-border":yi["border-primary"],"button-secondary-colour-text":yi["text-primary"],"button-light-colour-text":yi["text-primary"],"button-link-colour-text":yi["text-primary"]},Animation:{"loading-dots-spinner-colour":yi["icon-primary"]},Navbar:{"navbar-full-height":"6rem","navbar-full-logo-height":"2rem","navbar-compressed-height":"4rem","navbar-compressed-logo-height":"1.5rem","navbar-mobile-height":"3.5rem","navbar-mobile-logo-height":"1.5rem","navbar-colour-bg":yi.bg,"navbar-colour-icon":yi.icon,"navbar-link-colour-text":yi.text,"navbar-link-colour-text-hover":yi["text-hover"],"navbar-link-colour-text-selected-hover":yi["text-selected-hover"]},Footer:{"footer-colour-bg":yi["bg-strong"],"footer-colour-text":yi.text,"footer-link-colour-text":yi.text,"footer-link-colour-text-hover":yi["text-hover"],"footer-disclaimer-link-colour-text":yi.text,"footer-disclaimer-link-colour-text-hover":yi["text-subtler"]}},a11yplayground:xh,lifesg:$h,spf:{Button:{"button-radius":Ki.md,"button-default-colour-bg":yi["bg-primary"],"button-default-colour-bg-hover":yi["bg-primary-hover"],"button-default-colour-text":yi["text-inverse"],"button-secondary-colour-border":yi["border-primary"],"button-secondary-colour-text":yi["text-primary"],"button-light-colour-text":yi["text-primary"],"button-link-colour-text":yi["text-primary"]},Animation:{"loading-dots-spinner-colour":yi["icon-primary"]},Navbar:{"navbar-full-height":"6rem","navbar-full-logo-height":"3rem","navbar-compressed-height":"5rem","navbar-compressed-logo-height":"2rem","navbar-mobile-height":"4rem","navbar-mobile-logo-height":"2rem","navbar-colour-bg":yi.bg,"navbar-colour-icon":yi.icon,"navbar-link-colour-text":yi["text-primary-strongest"],"navbar-link-colour-text-hover":yi["text-subtler"],"navbar-link-colour-text-selected-hover":yi["text-subtler"]},Footer:{"footer-colour-bg":yi["bg-inverse"],"footer-colour-text":yi["text-inverse"],"footer-link-colour-text":yi["text-inverse"],"footer-link-colour-text-hover":yi["text-inverse"],"footer-disclaimer-link-colour-text":yi["text-inverse"],"footer-disclaimer-link-colour-text-hover":yi["text-inverse"]}}},defaultValue:"default"},Sh=(e,t)=>r=>{var n,o;const i=r.theme,a=Vo(Ch,null==i?void 0:i.componentScheme);return Dh((null===(o=null===(n=null==i?void 0:i.componentOverrides)||void 0===n?void 0:n[e])||void 0===o?void 0:o[t])||a[e][t],r)},Dh=(e,t)=>{switch(typeof e){case"function":return e(t);case"number":return e+"px";case"string":return e}},kh=Sh("Button","button-radius"),Eh=Sh("Button","button-default-colour-bg"),Fh=Sh("Button","button-default-colour-bg-hover"),Oh=Sh("Button","button-default-colour-text"),_h=Sh("Button","button-secondary-colour-border"),Th=Sh("Button","button-secondary-colour-text"),Ih=Sh("Button","button-light-colour-text"),Mh=Sh("Button","button-link-colour-text"),Ah=F.button`
    padding: ${aa["spacing-8"]} ${aa["spacing-16"]};
    min-width: 4rem;
    border: ${ia["width-010"]} ${ia.solid} transparent;
    transition: all ${oa["duration-250"]} ${oa["ease-default"]};
    border-radius: ${kh};
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;

    // -----------------------------------------------------------------------------
    // BUTTON STYLE + TEXT COLOR
    // -----------------------------------------------------------------------------
    ${e=>{switch(e.$buttonStyle){case"secondary":return O`
                    background-color: ${ra.bg};
                    border-color: ${e.$buttonIsDanger?ra["border-error-strong"]:_h};

                    color: ${e.$buttonIsDanger?ra["text-error"]:Th};

                    &:hover,
                    &:active {
                        @media (pointer: fine) {
                            background-color: ${ra["bg-hover-neutral"]};
                        }
                    }
                `;case"light":return O`
                    background-color: ${ra.bg};
                    border-color: ${ra.border};

                    color: ${e.$buttonIsDanger?ra["text-error"]:Ih};

                    &:hover,
                    &:active {
                        @media (pointer: fine) {
                            background-color: ${ra["bg-hover-neutral"]};
                        }
                    }
                `;case"link":return O`
                    background-color: transparent;

                    color: ${e.$buttonIsDanger?ra["text-error"]:Mh};
                    &:hover,
                    &:active {
                        @media (pointer: fine) {
                            background-color: ${ra["bg-hover-neutral"]};
                        }
                    }
                `;case"disabled":return O`
                    background-color: ${ra["bg-disabled"]};

                    cursor: not-allowed;

                    &:hover {
                        box-shadow: none;
                    }

                    color: ${ra["text-disabled"]};
                `;default:return O`
                    background-color: ${e.$buttonIsDanger?ra["bg-error-strong"]:Eh};

                    ${da.MaxWidth.sm} {
                        width: 100%;
                    }

                    color: ${Oh};

                    &:hover,
                    &:active {
                        @media (pointer: fine) {
                            background-color: ${e.$buttonIsDanger?ra["bg-error-strong-hover"]:Fh};
                        }
                    }
                `}}}

    // -----------------------------------------------------------------------------
	// BUTTON SIZE + TEXT SIZE
	// -----------------------------------------------------------------------------
	${e=>{switch(e.$buttonSizeStyle){case"small":return O`
                    height: 2.5rem;
                    ${na["body-md-semibold"]}

                    ${da.MaxWidth.xxs} {
                        height: auto;
                    }
                `;case"large":return O`
                    height: 4rem;
                    ${na["heading-md-semibold"]}

                    ${da.MaxWidth.xxs} {
                        height: auto;
                    }
                `;default:return O`
                    height: 3rem;
                    ${na["heading-xs-semibold"]}

                    ${da.MaxWidth.xxs} {
                        height: auto;
                    }
                `}}}
`,Bh=F(yh)`
    margin-right: ${e=>e.$hasChildren?"0.5rem":"0"};
`,jh=e=>o.Children.toArray(e).some((e=>"string"==typeof e?""!==e.trim():null!=e)),zh=(r,n)=>{const{children:o,disabled:i=!1,loading:a=!1,styleType:s="default",danger:l=!1,focusableWhenDisabled:c=!1,onClick:d}=r,u=ct(r,["children","disabled","loading","styleType","danger","focusableWhenDisabled","onClick"]),h={$buttonStyle:i?"disabled":s,$buttonSizeStyle:"default",$buttonIsDanger:l};return t(Ah,Object.assign({ref:n,"data-testid":u["data-testid"]||"button",disabled:i&&!c,"aria-disabled":i,"aria-busy":a,onClick:i?void 0:d},h,u,{children:[a&&e(Bh,{$hasChildren:jh(o)}),e("span",{children:o})]}))};zh.displayName="Button.Default";const Rh=(r,n)=>{const{children:o,disabled:i=!1,loading:a=!1,styleType:s="default",danger:l=!1,focusableWhenDisabled:c=!1,onClick:d}=r,u=ct(r,["children","disabled","loading","styleType","danger","focusableWhenDisabled","onClick"]),h={$buttonStyle:i?"disabled":s,$buttonSizeStyle:"small",$buttonIsDanger:l};return t(Ah,Object.assign({ref:n,"data-testid":u["data-testid"]||"button",disabled:i&&!c,"aria-disabled":i,"aria-busy":a,onClick:i?void 0:d},h,u,{children:[a&&e(Bh,{$hasChildren:jh(o)}),e("span",{children:o})]}))};Rh.displayName="Button.Small";const Lh=(r,n)=>{const{children:o,disabled:i=!1,loading:a=!1,styleType:s="default",danger:l=!1,focusableWhenDisabled:c=!1,onClick:d}=r,u=ct(r,["children","disabled","loading","styleType","danger","focusableWhenDisabled","onClick"]),h={$buttonStyle:i?"disabled":s,$buttonSizeStyle:"large",$buttonIsDanger:l};return t(Ah,Object.assign({ref:n,"data-testid":u["data-testid"]||"button",disabled:i&&!c,"aria-disabled":i,"aria-busy":a,onClick:i?void 0:d},h,u,{children:[a&&e(Bh,{$hasChildren:jh(o)}),e("span",{children:o})]}))};Lh.displayName="Button.Large";const Ph={Default:o.forwardRef(zh),Small:o.forwardRef(Rh),Large:o.forwardRef(Lh)},Nh=O`
    color: ${ra.icon};
    height: 1rem;
    width: 1rem;
`,Wh=F(ce)`
    ${Nh}
`,Hh=F(de)`
    ${Nh}
`,Yh=F(le)`
    ${Nh}
    transition: transform 250ms ease-in-out;
    margin-left: 0.5rem;
`,Vh=F.div`
    position: relative;
    width: 100%;
    display: flex;
    flex-direction: column;

    padding-top: var(--vertical-inset);
    padding-bottom: var(--vertical-inset);
`,Uh=F.div`
    display: flex;
    flex: 1;
    position: relative;
`,Kh=F.div`
    isolation: isolate;
    width: 100%;

    padding-left: var(--horizontal-inset);
    padding-right: var(--horizontal-inset);
`,qh=F.div`
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    background: ${ra.bg};

    padding-left: var(--horizontal-inset);
    padding-right: var(--horizontal-inset);

    ${e=>{if(!e.$visible)return O`
                display: none;
            `}}
`,Zh=F.div`
    display: flex;
    justify-content: space-between;

    padding-left: var(--header-horizontal-inset, var(--horizontal-inset));
    padding-right: var(--header-horizontal-inset, var(--horizontal-inset));
    padding-bottom: var(--header-bottom-spacing);
`,Gh=F.div`
    display: flex;
`,Qh=F.button`
    border: none;
    display: flex;
    align-items: center;
    padding: 0.5rem;
    background: transparent;
    cursor: pointer;

    ${e=>!1===e.$visible?O`
                display: none;
            `:e.$expanded?O`
                ${Yh} {
                    transform: rotate(180deg);
                }
            `:void 0};
`,Xh=F.span`
    ${na["body-md-regular"]}
    color: ${ra.text};
`,Jh=F.div`
    display: flex;
`,ef=F(Wd)`
    margin: auto 0;
    padding: 0.75rem;

    &:disabled {
        cursor: not-allowed;
    }
`,tf=F.div`
    display: flex;
    gap: 0.5rem;
    margin-top: 1.5rem;

    padding-left: var(--horizontal-inset);
    padding-right: var(--horizontal-inset);
`,rf=F(Ph.Small)`
    flex: 1;
`,nf=F.div`
    width: 100%;
    height: 100%;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(6, 2.5rem);
    align-content: center;
    justify-content: center;

    gap: 0.5rem 0;
`,of=F.div`
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: ${sa.md};
    margin: 0 0.5rem;
    transition: ${oa["duration-150"]} ${oa["ease-default"]};

    // default styles
    ${na["body-md-regular"]}
    border-radius: ${sa.md};
    border: ${ia["width-010"]} ${ia.solid} transparent;
    background-clip: border-box;
    color: ${ra.text};
    cursor: default;

    // cursor style
    ${e=>e.$interactive?O`
                cursor: pointer;
            `:e.$disabledDisplay?O`
                cursor: not-allowed;
            `:void 0}

    // background, border and text styles
    ${({$variant:e,$interactive:t,$disabledDisplay:r})=>"selected-month"===e?O`
                background: ${ra["bg-selected"]};
                border-color: ${ra["border-selected"]};
                color: ${ra["text-selected"]};
                font-weight: ${na.Spec["weight-semibold"]};

                ${t&&O`
                    &:hover {
                        background: ${ra["bg-selected-hover"]};
                        border-color: ${ra["border-selected-hover"]};
                        color: ${ra["text-selected-hover"]};
                    }
                `}
            `:"current-month"===e?O`
                color: ${ra["text-primary"]};
                font-weight: ${na.Spec["weight-semibold"]};
            `:r?O`
                color: ${ra["text-disabled-subtlest"]};
            `:void 0}

    // hover styles
    ${({$variant:e,$interactive:t})=>{if(t)return"selected-month"===e?O`
                &:hover {
                    background: ${ra["bg-selected-hover"]};
                    border-color: ${ra["border-selected-hover"]};
                    color: ${ra["text-selected-hover"]};
                    font-weight: ${na.Spec["weight-semibold"]};
                }
            `:O`
            &:hover {
                background: ${ra["bg-hover"]};
                color: ${ra["text-hover"]};
                font-weight: ${na.Spec["weight-semibold"]};
            }
        `}}
`,af=({calendarDate:t,currentFocus:r,selectedStartDate:n,selectedEndDate:o,viewCalendarDate:i,isNewSelection:l,minDate:d,maxDate:u,allowDisabledSelection:h,onMonthSelect:f})=>{const p=a((()=>yd.generateMonths(sd(t))),[t]),m=s(new Array(p.length).fill(null)),[b,v]=g(p.findIndex((e=>e.isSame(i,"month"))));c((()=>{var e;null!==b&&(null===(e=m.current[b])||void 0===e||e.focus())}),[b,p]);const y=(e,t)=>{t||f(e)},x=e=>{const t="start"===r&&o&&e.isAfter(o,"month")&&l,i="end"===r&&n&&e.isBefore(n,"month")&&l;return!(!t&&!i)},w=e=>{const t=e.format("MMMM"),r=(n=e,!yd.isWithinRange(n,d?sd(d):void 0,u?sd(u):void 0,"month"));var n;const o=i.isSame(e,"month"),a=o?"selected-month":sd().isSame(e,"month")?"current-month":"default",s=i.isSame(e,"year")?o?0:-1:0===e.month()?0:-1;return{disabledDisplay:r||x(e),interactive:!r||h,month:t,variant:a,tabIndex:s}};return p.length?e(nf,{onBlur:()=>{v(null)},children:p.map(((t,r)=>{const{disabledDisplay:n,interactive:o,variant:i,month:a,tabIndex:s}=w(t);return e(of,{ref:e=>m.current[r]=e,tabIndex:s,role:"button","aria-disabled":!o,"aria-selected":"selected-month"===i,$variant:i,$disabledDisplay:n,$interactive:o,onClick:()=>y(t,!o),onKeyDown:e=>{((e,t,r)=>{const n=e.key;let o;const i=p.indexOf(t);switch(n){case"Enter":case" ":e.preventDefault(),y(t,r);break;case"ArrowLeft":o=i-1;break;case"ArrowRight":o=i+1;break;case"ArrowUp":o=i-2;break;case"ArrowDown":o=i+2}void 0!==o&&o>=0&&o<p.length&&(e.preventDefault(),v(o))})(e,t,!o)},children:a},a)}))}):null},sf=F.div`
    width: 100%;
    height: 100%;
    display: grid;
    align-content: center;
    align-items: center;
    grid-template-columns: repeat(3, 1fr);
`,lf=F.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 1rem 0.5rem;
    transition: ${oa["duration-150"]} ${oa["ease-default"]};
    padding: 0.5rem;

    // default styles
    ${na["body-md-regular"]}
    border-radius: ${sa.md};
    border: ${ia["width-010"]} ${ia.solid} transparent;
    background-clip: border-box;
    color: ${ra.text};
    cursor: default;

    // cursor style
    ${({$interactive:e,$disabledDisplay:t})=>e?O`
                cursor: pointer;
            `:t?O`
                cursor: not-allowed;
            `:void 0}

    // background, border and text styles
    ${({$variant:e,$interactive:t,$disabledDisplay:r})=>"selected-year"===e?O`
                background: ${ra["bg-selected"]};
                border-color: ${ra["border-selected"]};
                color: ${ra["text-selected"]};
                font-weight: ${na.Spec["weight-semibold"]};

                ${t&&O`
                    &:hover {
                        background: ${ra["bg-selected-hover"]};
                        border-color: ${ra["border-selected-hover"]};
                        color: ${ra["text-selected-hover"]};
                    }
                `}
            `:"current-year"===e?O`
                color: ${ra["text-primary"]};
                font-weight: ${na.Spec["weight-semibold"]};
            `:"other-decade"===e||r?O`
                color: ${ra["text-disabled-subtlest"]};
            `:void 0}

    // hover styles
    ${({$variant:e,$interactive:t})=>{if(t)return"selected-year"===e?O`
                &:hover {
                    background: ${ra["bg-selected-hover"]};
                    border-color: ${ra["border-selected-hover"]};
                    color: ${ra["text-selected-hover"]};
                    font-weight: ${na.Spec["weight-semibold"]};
                }
            `:O`
            &:hover {
                background: ${ra["bg-hover"]};
                color: ${ra["text-hover"]};
                font-weight: ${na.Spec["weight-semibold"]};
            }
        `}}
`,cf=({calendarDate:t,currentFocus:r,selectedStartDate:n,selectedEndDate:o,viewCalendarDate:i,isNewSelection:l,minDate:d,maxDate:u,allowDisabledSelection:h,onYearSelect:f,setCalendarDate:p})=>{const m=a((()=>yd.generateDecadeOfYears(sd(t))),[t]),b=s(new Array(m.length).fill(null)),[v,y]=g(t);c((()=>{var e;if(null===v)return;const t=m.findIndex((e=>e.isSame(v,"year")));t>=0&&(null===(e=b.current[t])||void 0===e||e.focus())}),[v,m]);const x=(e,t)=>{t||f(e)},w=e=>{const t="start"===r&&o&&e.isAfter(o,"year")&&l,i="end"===r&&n&&e.isBefore(n,"year")&&l;return!(!t&&!i)},$=e=>{const t=m.indexOf(e),r=[0,11].includes(t),n=e.year(),o=(a=e,!yd.isWithinRange(a,d?sd(d):void 0,u?sd(u):void 0,"year"));var a;const s=r?"other-decade":i.isSame(e,"year")?"selected-year":sd().isSame(e,"year")?"current-year":"default",l=i.year()>=m[0].year()&&i.year()<=m[m.length-1].year()?"selected-year"===s?0:-1:1===t?0:-1;return{disabledDisplay:o||w(e),interactive:!o||h,year:n,variant:s,tabIndex:l}};return m.length?e(sf,{onBlur:()=>{y(null)},children:m.map(((t,r)=>{const{disabledDisplay:n,interactive:o,variant:i,year:a,tabIndex:s}=$(t);return e(lf,{ref:e=>{b.current[r]=e},tabIndex:s,role:"button","aria-label":`${a}`,"aria-disabled":!o,"aria-selected":"selected-year"===i,$variant:i,$disabledDisplay:n,$interactive:!!o,onClick:()=>x(t,!o),onKeyDown:e=>{((e,t,r)=>{let n;switch(e.key){case"Enter":case" ":e.preventDefault(),x(t,r);break;case"ArrowLeft":n=t.subtract(1,"year");break;case"ArrowRight":n=t.add(1,"year");break;case"ArrowUp":n=t.subtract(3,"year");break;case"ArrowDown":n=t.add(3,"year")}void 0!==n&&(e.preventDefault(),p(n),y(n))})(e,t,!o)},children:a},a)}))}):null},df=o.forwardRef(((n,o)=>{var{children:i,initialCalendarDate:a,minDate:l,maxDate:d,currentFocus:u,selectedStartDate:f,selectedEndDate:p,selectWithinRange:m,dynamicHeight:b=!1,allowDisabledSelection:v,onCalendarDateChange:y,withButton:x,doneButtonDisabled:w,onDismiss:$,showNavigationHeader:C=!0,getLeftArrowDate:S,getRightArrowDate:D,isLeftArrowDisabled:k,isRightArrowDisabled:E,getMonthHeaderLabel:F,getYearHeaderLabel:O,isFocusable:_=!1}=n,T=ct(n,["children","initialCalendarDate","minDate","maxDate","currentFocus","selectedStartDate","selectedEndDate","selectWithinRange","dynamicHeight","allowDisabledSelection","onCalendarDateChange","withButton","doneButtonDisabled","onDismiss","showNavigationHeader","getLeftArrowDate","getRightArrowDate","isLeftArrowDisabled","isRightArrowDisabled","getMonthHeaderLabel","getYearHeaderLabel","isFocusable"]);const[I,M]=g(Dd.toDayjs(a)),[A,B]=g(Dd.toDayjs(a)),[j,z]=g("default"),R=s(null),L=s(null),P=s(null),N=s(null);h(o,(()=>({defaultView(){z("default")},resetView(){const e=Dd.toDayjs(a);M(e),B(e),z("default")},setCalendarDate(e){const t=Dd.toDayjs(e);M(t),B(t)}}))),c((()=>{const e=Dd.toDayjs(a);M(e),B(e)}),[a]),c((()=>{G(A)}),[A]);const W=()=>{var e;"month-options"!==j?(z("month-options"),null===(e=P.current)||void 0===e||e.focus()):(z("default"),M(A))},H=e=>{var t;if("Enter"!==e.key&&" "!==e.key||(e.preventDefault(),W(),null===(t=N.current)||void 0===t||t.focus()),"ArrowUp"===e.key||"ArrowDown"===e.key){e.preventDefault();const t="ArrowUp"===e.key?I.subtract(1,"month"):I.add(1,"month");if(!yd.isWithinRange(t,l?sd(l):void 0,d?sd(d):void 0,"month"))return;M(t),"default"===j&&B(t)}},Y=()=>{"default"!==j?(z("default"),M(A)):z("year-options")},V=e=>{if("Enter"!==e.key&&" "!==e.key||(e.preventDefault(),Y()),"ArrowUp"===e.key||"ArrowDown"===e.key){e.preventDefault();let t;if(t="year-options"===j?"ArrowUp"===e.key?I.subtract(10,"year"):I.add(10,"year"):"ArrowUp"===e.key?I.subtract(1,"year"):I.add(1,"year"),!yd.isWithinRange(t,l?sd(l):void 0,d?sd(d):void 0,"year"))return;M(t),"default"===j&&B(t)}},U=()=>{var e;null===(e=P.current)||void 0===e||e.focus();const t=S?S(I):I.subtract(1,"month");switch(j){case"default":B(t),M(t);break;case"month-options":M((e=>e.subtract(1,"year")));break;case"year-options":M((e=>e.subtract(10,"year")))}},K=()=>{var e;null===(e=P.current)||void 0===e||e.focus();const t=D?D(I):I.add(1,"month");switch(j){case"default":B(t),M(t);break;case"month-options":M((e=>e.add(1,"year")));break;case"year-options":M((e=>e.add(10,"year")))}},q=e=>{M(e),B(e),x||z("default")},Z=()=>{const e=Dd.toDayjs(a);M(e),B(e),"default"===j?Q("reset"):z("default")},G=e=>{y&&y(e)},Q=e=>{$&&$(e)},X=()=>{if(!l||v)return!1;const e=sd(l);return"month-options"===j?!yd.isPreviousYearWithinRange(I,e):"year-options"===j?!yd.isPreviousDecadeWithinRange(I,e):k?k(I):!yd.isPreviousMonthWithinRange(I,e)},J=()=>{if(!d||v)return!1;const e=sd(d);return"month-options"===j?!yd.isNextYearWithinRange(I,e):"year-options"===j?!yd.isNextDecadeWithinRange(I,e):E?E(I):!yd.isNextMonthWithinRange(I,e)},ee=()=>{const n=F?F(I):I.format("MMM"),o=sd(n,"MMM").format("MMMM"),i=(()=>{if("year-options"===j){const{beginDecade:e,endDecade:t}=yd.getStartEndDecade(I);return`${e} to ${t}`}return O?O(I):I.format("YYYY")})(),a={"month-options":`${i}, Close month selection`,"year-options":`${i}, Close year selection`,default:`${i}, Select year`};return t(r,{children:[t(Qh,{"aria-label":`${o}, Select month`,type:"button",$expanded:"month-options"===j,$visible:"default"===j,id:"month-dropdown",onClick:W,onKeyDown:H,tabIndex:_?0:-1,children:[e(Xh,{children:n}),e(Yh,{})]}),t(Qh,{ref:N,"aria-label":a[j],type:"button",$expanded:"default"!==j,id:"year-dropdown",onClick:Y,onKeyDown:V,tabIndex:_?0:-1,children:[e(Xh,{children:i}),e(Yh,{})]})]})},te=()=>{switch(j){case"month-options":return e(af,{calendarDate:I,currentFocus:u,minDate:l,maxDate:d,selectedStartDate:f,selectedEndDate:p,viewCalendarDate:A,isNewSelection:!!m,onMonthSelect:q,allowDisabledSelection:v});case"year-options":return e(cf,{setCalendarDate:M,calendarDate:I,currentFocus:u,minDate:l,maxDate:d,selectedStartDate:f,selectedEndDate:p,viewCalendarDate:A,isNewSelection:!!m,onYearSelect:q,allowDisabledSelection:v});default:return null}};return t(Vh,Object.assign({ref:P,"data-id":"calendar-container","data-testid":"calendar-container","aria-label":A.format("MMMM, YYYY"),role:"group"},T,{children:[C&&(()=>{const r={"month-options":"year","year-options":"decade",default:"month"}[j];return t(Zh,{"data-id":"calendar-header","data-testid":"calendar-header",children:[e(Gh,{children:ee()}),t(Jh,{children:[e(ef,{"aria-label":`Previous ${r}`,"data-testid":"left-arrow-btn",disabled:X(),focusHighlight:!1,focusOutline:"browser",onClick:U,tabIndex:_?0:-1,children:e(Wh,{})}),e(ef,{"aria-label":`Next ${r}`,"data-testid":"right-arrow-btn",disabled:J(),focusHighlight:!1,focusOutline:"browser",onClick:K,tabIndex:_?0:-1,children:e(Hh,{})})]})]})})(),e(Uh,{children:(()=>{const n="function"==typeof i?i({calendarDate:A,currentView:j}):i;if(b)return t(r,{children:["default"===j&&n,te()]});{const o="default"===j;return t(r,{children:[e(Kh,{inert:uh(!o),children:n}),e(qh,{$visible:!o,children:te()})]})}})()}),(()=>{if(!x)return;const r=!!("default"===j)&&w;return t(tf,{children:[e(rf,{ref:L,"data-testid":"cancel-button",styleType:"light",type:"button",onClick:Z,children:"Cancel"}),e(rf,{"data-testid":"done-button",ref:R,type:"button",onClick:()=>{r||(M(A),"default"===j?Q("confirmed"):z("default"))},disabled:r,children:"Done"})]})})()]}))})),uf=F.div`
    width: 100%;
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    row-gap: 0.25rem;
`,hf=F.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 2.5rem;
    pointer-events: none;
    user-select: none;

    ${na["body-sm-semibold"]};
    color: ${ra.text};
`,ff=F.div`
    grid-column: 1 / -1;
    display: flex;
`,pf=e=>{let t=ra.bg,r="transparent";switch(e.$type){case"hover-subtle":t=ra["bg-hover"],r=ra["bg-hover"];break;case"hover":t=ra["bg-hover-strong"],r=ra["bg-hover-strong"];break;case"hover-outline":t=ra["bg-hover-subtle"],r=ra["border-hover"];break;case"selected-outline":t=ra["bg-selected"],r=ra["border-selected"];break;case"selected-outline-subtle":t=ra["bg-selected"],r=ra["border-selected-subtle"];break;case"selected-hover":t=ra["bg-selected-hover"];break;case"selected-hover-outline":t=ra["bg-selected-hover"],r=ra["border-selected-hover"]}return{color:t,borderColor:r}},gf=F.div`
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    width: 100%;
    height: 2.5rem;
`,mf=F.div`
    position: absolute;
    height: 2.5rem;
    width: 50%;
    transition: ${oa["duration-150"]} ${oa["ease-default"]};
    border: ${ia["width-010"]} ${ia.solid} transparent;
    border-left: none;
    border-right: none;

    ${e=>{if(!e.$type)return;const{color:t,borderColor:r}=pf(e);return O`
            background-color: ${t};
            background-clip: border-box;
            border-top-color: ${r};
            border-bottom-color: ${r};
        `}}
`,bf=F(mf)`
    left: 0;
`,vf=F(mf)`
    right: 0;
`,yf=F.div`
    position: absolute;
    z-index: 1;

    display: flex;
    align-items: center;
    justify-content: center;
    height: 2.5rem;
    width: 2.5rem;
    transition: ${oa["duration-150"]} ${oa["ease-default"]};

    border: ${ia["width-010"]} ${ia.solid} transparent;
    border-radius: ${sa.md};

    ${e=>{if(e.$type){const{color:t,borderColor:r}=pf(e);return O`
                background-color: ${t};
                background-clip: content-box;
                border-color: ${r};
            `}}}
`,xf=F(yf)`
    right: calc(50% - 1.25rem);
    clip-path: inset(-3px 1.25rem -3px -3px);
`,wf=F(yf)`
    left: calc(50% - 1.25rem);
    clip-path: inset(-3px -3px -3px 1.25rem);
`,$f=F.span`
    position: absolute;
    top: 0;
    bottom: 0;
    z-index: 2;
    cursor: ${e=>e.$interactive?"pointer":null===e.$interactive?"default":"not-allowed"};
`,Cf=F.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 2.5rem;
    width: 2.5rem;
    ${na["body-md-regular"]}
    transition: ${oa["duration-150"]} ${oa["ease-default"]};

    pointer-events: ${e=>e.$interactive||null===e.$interactive?"auto":"none"};

    ${e=>{const{$disabled:t,$type:r}=e;if(t)return"hidden"===r?O`
                    visibility: hidden;
                `:O`
                color: ${ra["text-disabled-subtlest"]};
            `;switch(r){case"selected":return O`
                    font-weight: ${na.Spec["weight-semibold"]};
                    color: ${ra["text-selected"]};
                `;case"selected-hover":return O`
                    font-weight: ${na.Spec["weight-semibold"]};
                    color: ${ra["text-selected-hover"]};
                `;case"current":return O`
                    font-weight: ${na.Spec["weight-semibold"]};
                    color: ${ra["text-primary"]};
                `;case"hover":return O`
                    font-weight: ${na.Spec["weight-semibold"]};
                    color: ${ra["text-hover"]};
                `;case"unavailable":return O`
                    color: ${ra["text-disabled-subtlest"]};
                `;case"hidden":return O`
                    visibility: hidden;
                `;default:return O`
                    color: ${ra.text};
                `}}}

    &:focus {
        outline: none;
    }
`,Sf=F.div`
    position: absolute;
    width: 4px;
    height: 4px;
    background-color: currentColor;
    border-radius: 100%;
    bottom: 4px;
`,Df=({bgLeft:r,bgRight:n,circleLeft:o,circleRight:i,labelType:a,disabled:l,interactive:d,currentDateIndicator:u,date:h,onSelect:f,onHover:p,onFocus:g,onHoverEnd:m,onKeyDown:b,focusDate:v,label:y,ariaHidden:x,tabIndex:w=-1,role:$="button"})=>{const C=sd().isSame(h,"day"),S=!!v&&v.isSame(h,"day"),D=`${h.format("D MMMM YYYY dddd")}, ${l?"Unavailable":"Available"}`,k=s(null);c((()=>{var e;S&&k.current&&(null===(e=k.current)||void 0===e||e.focus())}),[S]);return t(gf,{"aria-hidden":x,children:[e(bf,{$type:r}),e(xf,{$type:o}),e(vf,{$type:n}),e(wf,{$type:i}),e($f,{$interactive:d,children:t(Cf,{ref:k,tabIndex:w,role:$,"aria-label":y||D,"aria-disabled":!d,"aria-selected":"selected"===a||"selected-hover"===a,$type:a,$disabled:l,$interactive:d,onClick:()=>{null==f||f(h)},onKeyDown:e=>{null==b||b(e)},onMouseEnter:()=>{null==p||p(h)},onMouseLeave:()=>{null==m||m(h)},onFocus:()=>{null==g||g(h)},children:[h.date(),u&&C&&e(Sf,{$disabled:l})]})})]})},kf=({date:t,calendarDate:r,startDate:n,endDate:o,currentFocus:i,hoverDate:a,focusDate:s,minDate:l,maxDate:c,disabledDates:d,allowDisabledSelection:u,isNewSelection:h,showActiveMonthDaysOnly:f,onSelect:p,onHover:g,onFocus:m,setFocusCell:b,tabIndex:v})=>{const y=yd.isDisabledDay(t,d,l,c),x=!y||u,w=()=>{p(t,!x)},$=()=>{const e=sd(a),t=e.isBefore(o,"day"),r=e.isAfter(n,"day");let s,l,c,d;return"start"===i&&o&&t&&(n&&r?(c=a,d=o):(s=a,l=n||o)),"end"===i&&n&&r&&(o&&t?(c=n,d=a):(s=o||n,l=a)),{hoverStart:s,hoverEnd:l,overlapStart:c,overlapEnd:d}},C={date:t,calendarDate:r,disabled:y,interactive:x,currentDateIndicator:!0,onSelect:w,onHover:()=>{g(t.format("YYYY-MM-DD"),!x)},onFocus:()=>{m(t.format("YYYY-MM-DD"))},onKeyDown:e=>{const r=e.key;if("Enter"===r||" "===r)return e.preventDefault(),void(x&&w());(e=>{let r;const n={ArrowLeft:()=>t.subtract(1,"day"),ArrowRight:()=>t.add(1,"day"),ArrowUp:()=>t.subtract(7,"day"),ArrowDown:()=>t.add(7,"day"),Home:()=>t.startOf("week"),End:()=>t.endOf("week"),PageUp:()=>e.shiftKey?t.subtract(1,"year"):t.subtract(1,"month"),PageDown:()=>e.shiftKey?t.add(1,"year"):t.add(1,"month")}[e.key];n&&(e.preventDefault(),r=n(),b(r.format("YYYY-MM-DD")))})(e)},role:"gridcell",focusDate:sd(s),tabIndex:v};return e(Df,Object.assign({},C,(()=>{const e={};if(r.month()!==t.month())e.labelType=f?"hidden":"unavailable";else if(sd().isSame(t,"day")&&!y)e.labelType="current";else if(h){const r="end"===i&&n&&t.isBefore(n),a="start"===i&&o&&t.isAfter(o);(r||a)&&(e.labelType="unavailable")}return e})(),(()=>{const e={},i=t.isSame(n,"day"),a=t.isSame(o,"day");return f&&r.month()!==t.month()?(e.labelType="hidden",e):((n&&i||o&&a)&&(e.labelType="selected",e.circleLeft="selected-outline",e.circleRight="selected-outline"),n&&o&&t.isBetween(n,o,"day","[]")&&(e.labelType="selected",i||(e.bgLeft="selected-outline-subtle"),a||(e.bgRight="selected-outline-subtle")),e)})(),(()=>{if(!a)return{};const e={},r=t.isSame(a,"day"),{hoverStart:i,hoverEnd:s,overlapStart:l,overlapEnd:c}=$();if(r){const r=t.isSame(n,"day"),i=t.isSame(o,"day");r||i?(e.labelType="selected-hover",e.circleLeft="selected-hover-outline",e.circleRight="selected-hover-outline"):(e.labelType="hover",e.circleLeft="hover",e.circleRight="hover")}if(i&&s){if(t.isBetween(i,s,"day","[]")){const r=t.isSame(i,"day"),n=t.isSame(s,"day");r||(e.labelType="hover",e.bgLeft="hover-outline"),n||(e.labelType="hover",e.bgRight="hover-outline")}return e}return l&&c?(t.isBetween(l,c,"day","[]")&&r&&(e.labelType="selected-hover",e.circleLeft="selected-hover",e.circleRight="selected-hover"),e):e})()))};sd.extend(ud);const Ef=({calendarDate:r,currentFocus:n,disabledDates:o,selectedStartDate:i,selectedEndDate:l,onSelect:u,onHover:h,isNewSelection:f,minDate:p,maxDate:m,allowDisabledSelection:b,showActiveMonthDaysOnly:v,setCalendarDate:y})=>{const x=s(null);c((()=>{if(x.current){const e=x.current;x.current=null,k(e)}}),[r]);const w=d((()=>i&&sd(i).isSame(r,"month")?sd(i):l&&sd(l).isSame(r,"month")?sd(l):sd().isSame(r,"month")?sd():p&&r.isSame(sd(p),"month")?sd(p):sd(r).startOf("month")),[i,r,l,p]),$=e=>{const t=sd(e);if(yd.isWithinRange(t,p?sd(p):void 0,m?sd(m):void 0)){if(!t.isSame(r,"month"))return null==y||y(e),void(x.current=e);k(e)}},C=a((()=>yd.generateDays(r)),[r]),S=a((()=>w()),[w]),[D,k]=g(""),[E,F]=g(""),O=(e,t)=>{t&&!b||u(e)},_=(e,t)=>{t&&!b||(F(e),h(e))},T=e=>{F(e),h(e)},I=()=>{F(""),h("")};return t(uf,{role:"grid","aria-label":"Date grid","data-testid":"calendar-content",onBlur:e=>{e.currentTarget.contains(e.relatedTarget)||(k(""),F(""),h(""))},children:[C[0].map(((t,r)=>e(hf,{"aria-hidden":!0,children:sd(t).format("ddd")},`week-day-${r}`))),C.map(((t,a)=>e(ff,{role:"row","aria-label":`Week ${a+1}`,onMouseLeave:I,children:t.map(((t,a)=>e(kf,{date:t,calendarDate:r,startDate:i,endDate:l,hoverDate:E,focusDate:D,currentFocus:n,minDate:p,maxDate:m,disabledDates:o,allowDisabledSelection:b,isNewSelection:f,showActiveMonthDaysOnly:v,onSelect:O,onHover:_,onFocus:T,setFocusCell:$,tabIndex:t.isSame(S,"day")?0:-1},`day-${a}`)))},a)))]})},Ff=({date:t,calendarDate:r,selectedDate:n,hoverDate:o,focusDate:i,minDate:a,maxDate:s,disabledDates:l,allowDisabledSelection:c,numberOfDays:d=1,onSelect:u,onHover:h,onFocus:f,setFocusCell:p,tabIndex:g})=>{const m=yd.isDisabledDay(t,l,a,s),b=!m||c,{start:v,end:y}=n?yd.getFixedRangeStartEnd(Dd.toDayjs(n),d):{start:void 0,end:void 0},{start:x,end:w}=o?yd.getFixedRangeStartEnd(Dd.toDayjs(o),d):{start:void 0,end:void 0},$=!!n&&t.isBetween(v,y,"day","[]"),C=!!o&&t.isBetween(x,w,"day","[]"),S=$&&t.isSame(v,"day")||C&&t.isSame(x,"day"),D=$&&t.isSame(y,"day")||C&&t.isSame(w,"day"),k=`From ${sd(x).format("D MMMM")} to ${sd(w).format("D MMMM")}, ${m?"Unavailable":"Available"}`,E=()=>{u(t,!b)},F=(e,t,r,n)=>{r?e.circleLeft=t:e.bgLeft=t,n?e.circleRight=t:e.bgRight=t},O={date:t,calendarDate:r,disabled:m,interactive:b,currentDateIndicator:!0,onSelect:E,onHover:()=>{h(t.format("YYYY-MM-DD"),!b)},onFocus:()=>{f(t.format("YYYY-MM-DD"))},onKeyDown:e=>{const r=e.key;if("Enter"===r||" "===r)return e.preventDefault(),void(b&&E());(e=>{let r;const n={ArrowLeft:()=>t.subtract(1,"day"),ArrowRight:()=>t.add(1,"day"),ArrowUp:()=>t.subtract(7,"day"),ArrowDown:()=>t.add(7,"day"),Home:()=>t.startOf("week"),End:()=>t.endOf("week"),PageUp:()=>e.shiftKey?t.subtract(1,"year"):t.subtract(1,"month"),PageDown:()=>e.shiftKey?t.add(1,"year"):t.add(1,"month")}[e.key];n&&(e.preventDefault(),r=n(),p(r.format("YYYY-MM-DD")))})(e)},focusDate:sd(i),role:"gridcell",tabIndex:g,label:k};return e(Df,Object.assign({},O,(()=>{const e={};return $||C?e.labelType="selected":r.month()!==t.month()?e.labelType="unavailable":sd().isSame(t,"day")&&!m&&(e.labelType="current"),e})(),(()=>{const e={},r=t.format("YYYY-MM-DD");return C&&F(e,"hover",r===x,r===w),$&&F(e,"selected-outline",r===v,r===y),$&&C&&(F(e,"selected-hover-outline",S,D),r===x&&r!==v&&(e.circleLeft="selected-hover")),e})()))},Of=({calendarDate:r,disabledDates:n,selectedStartDate:o,onSelect:i,onHover:l,minDate:u,maxDate:h,allowDisabledSelection:f,numberOfDays:p,setCalendarDate:m})=>{const b=s(null);c((()=>{if(b.current){const e=b.current;b.current=null,C(e)}}),[r]);const v=d((()=>o&&sd(o).isSame(r,"month")?sd(o):sd().isSame(r,"month")?sd():u&&r.isSame(sd(u),"month")?sd(u):sd(r).startOf("month")),[o,r,u]),y=e=>{const t=sd(e);if(yd.isWithinRange(t,u?sd(u):void 0,h?sd(h):void 0)){if(!t.isSame(r,"month"))return null==m||m(e),void(b.current=e);C(e)}},x=a((()=>yd.generateDays(r)),[r]),w=a((()=>v()),[v]),[$,C]=g(""),[S,D]=g(""),k=(e,t)=>{t&&!f||(i(e),e&&!sd(e).isSame(e,"month")&&D(""))},E=(e,t)=>{t&&!f||(D(e),l(e))},F=e=>{D(e),l(e)},O=()=>{D(""),l("")};return t(uf,{role:"grid",onBlur:e=>{e.currentTarget.contains(e.relatedTarget)||(C(""),D(""),l(""))},"data-testid":"calendar-content","aria-label":"Date grid",children:[x[0].map(((t,r)=>e(hf,{"aria-hidden":!0,children:sd(t).format("ddd")},`week-day-${r}`))),x.map(((t,i)=>e(ff,{role:"row",onMouseLeave:O,children:t.map(((t,i)=>e(Ff,{date:t,calendarDate:r,selectedDate:o,hoverDate:S,focusDate:$,minDate:u,maxDate:h,disabledDates:n,allowDisabledSelection:f,onSelect:k,onHover:E,numberOfDays:p,onFocus:F,setFocusCell:y,tabIndex:sd(t).isSame(w,"day")?0:-1},`day-${i}`)))},i)))]})},_f=F.div`
    width: 100%;
    background: ${ra.bg};
`,Tf=({date:t,calendarDate:r,selectedDate:n,hoverDate:o,focusDate:i,minDate:a,maxDate:s,disabledDates:l,allowDisabledSelection:c,showActiveMonthDaysOnly:d,onSelect:u,onHover:h,onFocus:f,setFocusCell:p,tabIndex:g})=>{const m=yd.isDisabledDay(t,l,a,s),b=!m||c,v=()=>{u(t,!b)},y={date:t,calendarDate:r,disabled:m,interactive:b,currentDateIndicator:!0,onSelect:v,onHover:()=>{h(t.format("YYYY-MM-DD"),!b)},onFocus:()=>{f(t.format("YYYY-MM-DD"))},onKeyDown:e=>{const r=e.key;if("Enter"===r||" "===r)return e.preventDefault(),void(b&&v());(e=>{let r;const n={ArrowLeft:()=>t.subtract(1,"day"),ArrowRight:()=>t.add(1,"day"),ArrowUp:()=>t.subtract(7,"day"),ArrowDown:()=>t.add(7,"day"),Home:()=>t.startOf("week"),End:()=>t.endOf("week"),PageUp:()=>e.shiftKey?t.subtract(1,"year"):t.subtract(1,"month"),PageDown:()=>e.shiftKey?t.add(1,"year"):t.add(1,"month")}[e.key];n&&(e.preventDefault(),r=n(),p(r.format("YYYY-MM-DD")))})(e)},role:"gridcell",focusDate:sd(i),tabIndex:g};return e(Df,Object.assign({},y,(()=>{const e={};r.month()!==t.month()?e.labelType=d?"hidden":"unavailable":sd().isSame(t,"day")&&!m&&(e.labelType="current");const i=t.isSame(n,"day"),a=t.isSame(o,"day");return i&&a?(e.labelType="selected-hover",e.circleLeft="selected-hover-outline",e.circleRight="selected-hover-outline"):i?(e.labelType="selected",e.circleLeft="selected-outline",e.circleRight="selected-outline"):a&&(e.labelType="hover",e.circleLeft="hover-subtle",e.circleRight="hover-subtle"),e})()))};sd.extend(ud);const If=({calendarDate:r,disabledDates:n,selectedDate:o,onSelect:i,onHover:l,minDate:u,maxDate:h,allowDisabledSelection:f,showActiveMonthDaysOnly:p,setCalendarDate:m})=>{const b=s(null);c((()=>{if(b.current){const e=b.current;b.current=null,C(e)}}),[r]);const v=d((()=>o&&sd(o).isSame(r,"month")?sd(o):sd().isSame(r,"month")?sd():u&&r.isSame(sd(u),"month")?sd(u):sd(r).startOf("month")),[o,r,u]),y=e=>{const t=sd(e);if(yd.isWithinRange(t,u?sd(u):void 0,h?sd(h):void 0)){if(!t.isSame(r,"month"))return null==m||m(e),void(b.current=e);C(e)}},x=a((()=>yd.generateDays(r)),[r]),w=a((()=>v()),[v]),[$,C]=g(""),[S,D]=g(""),k=(e,t)=>{t&&!f||i(e)},E=(e,t)=>{t&&!f||(D(e),l(e))},F=e=>{D(e),l(e)},O=()=>{D(""),l("")};return t(uf,{role:"grid",onBlur:e=>{e.currentTarget.contains(e.relatedTarget)||(C(""),D(""),l(""))},"data-testid":"calendar-content","aria-label":"Date grid",children:[x[0].map(((t,r)=>e(hf,{"aria-hidden":!0,children:sd(t).format("ddd")},`week-day-${r}`))),x.map(((t,i)=>e(ff,{role:"row","aria-label":`Week ${i+1}`,onMouseLeave:O,children:t.map(((t,i)=>e(Tf,{date:t,calendarDate:r,selectedDate:o,hoverDate:S,focusDate:$,minDate:u,maxDate:h,disabledDates:n,allowDisabledSelection:f,showActiveMonthDaysOnly:p,onSelect:k,onHover:E,onFocus:F,setFocusCell:y,tabIndex:sd(t).isSame(w,"day")?0:-1},`day-${i}`)))},i)))]})},Mf=({date:t,calendarDate:r,selectedDate:n,hoverDate:o,focusDate:i,minDate:a,maxDate:s,disabledDates:l,allowDisabledSelection:c,onSelect:d,onHover:u,onFocus:h,setFocusCell:f,tabIndex:p})=>{const g=yd.isDisabledDay(t,l,a,s),m=!g||c,{start:b,end:v}=yd.getWeekStartEnd(Dd.toDayjs(n)),{start:y,end:x}=yd.getWeekStartEnd(Dd.toDayjs(o)),{start:w,end:$}=yd.getWeekStartEnd(t),C=t.isSame(w,"day"),S=n&&t.isBetween(b,v,"day","[]"),D=o&&t.isBetween(y,x,"day","[]"),k=S&&t.isSame(b)||D&&t.isSame(y),E=S&&t.isSame(v)||D&&t.isSame(x),F=`From ${sd(w).format("D MMMM")} to ${sd($).format("D MMMM")}, ${g?"Unavailable":"Available"}`,O=()=>{d(t,!m)},_={date:t,calendarDate:r,disabled:g,interactive:m,currentDateIndicator:!0,onSelect:O,onHover:()=>{u(t.format("YYYY-MM-DD"),!m)},onFocus:()=>{h(t.format("YYYY-MM-DD"))},onKeyDown:e=>{const r=e.key;if("Enter"===r||" "===r)return e.preventDefault(),void(m&&O());(e=>{let r;const n={ArrowUp:()=>t.subtract(7,"day"),ArrowDown:()=>t.add(7,"day"),Home:()=>t.startOf("week"),End:()=>t.endOf("week"),PageUp:()=>e.shiftKey?t.subtract(1,"year"):t.subtract(1,"month"),PageDown:()=>e.shiftKey?t.add(1,"year"):t.add(1,"month")}[e.key];n&&(e.preventDefault(),r=n(),f(r.format("YYYY-MM-DD")))})(e)},focusDate:sd(i),tabIndex:p,label:F,ariaHidden:!C||void 0,role:C?"button":"none"};return e(Df,Object.assign({},_,(()=>{const e={};return r.month()!==t.month()?e.labelType="unavailable":sd().isSame(t,"day")&&!g&&(e.labelType="current"),e})(),(()=>{const e={};let t,r;return S&&D?(t="selected-hover-outline",r="selected-hover"):S?(t="selected-outline",r="selected"):D&&(t="hover",r="hover"),t&&(e.labelType=r,k?e.circleLeft=t:e.bgLeft=t,E?e.circleRight=t:e.bgRight=t),e})()))},Af=({calendarDate:r,disabledDates:n,selectedStartDate:o,onSelect:i,onHover:l,minDate:u,maxDate:h,allowDisabledSelection:f,setCalendarDate:p})=>{const m=s(null);c((()=>{if(m.current){const e=m.current;m.current=null,$(e)}}),[r]);const b=d((()=>o&&sd(o).isSame(r,"month")?sd(o):sd().isSame(r,"month")?sd().startOf("week"):u&&r.isSame(sd(u),"month")?sd(u):sd(r).startOf("month")),[o,r,u]),v=e=>{const t=sd(e);if(yd.isWithinRange(t,u?sd(u):void 0,h?sd(h):void 0)){if(!t.isSame(r,"month"))return null==p||p(e),void(m.current=e);$(e)}},y=a((()=>yd.generateDays(r)),[r]),x=a((()=>b()),[b]),[w,$]=g(""),[C,S]=g(""),D=(e,t)=>{if(t&&!f)return;const r=e.startOf("week");i(r),e&&!sd(e).isSame(r,"month")&&S("")},k=(e,t)=>{t&&!f||(S(e),l(e))},E=e=>{S(e),l(e)},F=()=>{S(""),l("")};return t(uf,{"data-testid":"calendar-content",onBlur:e=>{e.currentTarget.contains(e.relatedTarget)||($(""),S(""),l(""))},"aria-label":"Week selection",children:[y[0].map(((t,r)=>e(hf,{"aria-hidden":!0,children:sd(t).format("ddd")},`week-day-${r}`))),y.map(((t,i)=>e(ff,{onMouseLeave:F,role:"group",children:t.map(((t,i)=>e(Mf,{date:t,calendarDate:r,selectedDate:o,hoverDate:C,focusDate:w,minDate:u,maxDate:h,disabledDates:n,allowDisabledSelection:f,onSelect:D,onHover:k,onFocus:E,setFocusCell:v,tabIndex:sd(t).isSame(x,"day")?0:-1},`day-${i}`)))},i)))]})},Bf=o.forwardRef((({disabledDates:t,onYearMonthDisplayChange:r,onSelect:n,onHover:o,onDismiss:i,value:a,endValue:l,currentFocus:c,withButton:d,variant:u,minDate:f,maxDate:p,allowDisabledSelection:g,selectWithinRange:m=!0,initialCalendarDate:b,numberOfDays:v,showActiveMonthDaysOnly:y=!1,isFocusable:x=!1},w)=>{const $=s(null),C=s(void 0),S=s(null);h(w,(()=>({reset(){var e;null===(e=$.current)||void 0===e||e.resetView()},setCalendarDate(e){var t;null===(t=$.current)||void 0===t||t.setCalendarDate(e)},contains(e){var t;return(null===(t=S.current)||void 0===t?void 0:t.contains(e))||!1}})));const D=e=>{var t;const r=e.format("YYYY-MM-DD");null===(t=$.current)||void 0===t||t.setCalendarDate(r),E(r)},k=e=>{F(e)},E=e=>{n&&n(e)},F=e=>{o&&o(e)},O=e=>{if(r){const t={month:e.month()+1,year:e.year()};r(t)}};return e(_f,{ref:S,children:e(df,{ref:$,withButton:d,doneButtonDisabled:(()=>{if(!d)return;let e=!0;switch(u){case"single":e=!1;break;case"range":case"fixed-range":e=!!a!=!!l;break;case"week":e=!a&&!l}return e})(),onDismiss:i,minDate:f,maxDate:p,selectWithinRange:m,currentFocus:c,selectedStartDate:a,selectedEndDate:l,allowDisabledSelection:g,onCalendarDateChange:e=>{var t;C.current&&C.current.isSame(e,"month")||(null===(t=$.current)||void 0===t||t.setCalendarDate(e.format("YYYY-MM-DD")),O(e)),C.current=e},initialCalendarDate:b,isFocusable:x,children:({calendarDate:r})=>(r=>{var n;const o=null===(n=$.current)||void 0===n?void 0:n.setCalendarDate;switch(u){case"week":return e(Af,{calendarDate:r,disabledDates:t,selectedStartDate:a,minDate:f,maxDate:p,allowDisabledSelection:g,onSelect:D,onHover:k,setCalendarDate:o});case"fixed-range":return e(Of,{calendarDate:r,disabledDates:t,selectedStartDate:a,minDate:f,maxDate:p,allowDisabledSelection:g,onSelect:D,onHover:k,numberOfDays:v,setCalendarDate:o});case"single":return e(If,{calendarDate:r,disabledDates:t,selectedDate:a,minDate:f,maxDate:p,allowDisabledSelection:g,showActiveMonthDaysOnly:y,onSelect:D,onHover:k,setCalendarDate:o});default:return e(Ef,{calendarDate:r,currentFocus:c,disabledDates:t,selectedStartDate:a,selectedEndDate:l,minDate:f,maxDate:p,isNewSelection:m,allowDisabledSelection:g,showActiveMonthDaysOnly:y,onSelect:D,onHover:k,setCalendarDate:o})}})(r)})})})),jf=o.forwardRef(((t,r)=>{const{elementWidth:n,setFloatingRef:o,getFloatingProps:i,styles:a}=sh();return e(ch,Object.assign({$width:n,"data-testid":"calendar-dropdown",ref:o,style:a},i(),{children:e(Bf,Object.assign({ref:r},t))}))})),zf=O`
    outline-offset: -1px;
    outline: ${ia["width-020"]} ${ia.solid} ${ra["border-focus"]};
`,Rf=O`
    outline-color: ${ra["border-focus"]};
`,Lf=O`
    outline-color: ${ra["border-disabled"]};
`,Pf=O`
    outline-color: ${ra["border-error-focus"]};
`,Nf=O`
    outline: none;
`,Wf=F.div`
    border: ${ia["width-010"]} ${ia.solid} ${ra.border};
    border-radius: ${sa.sm};
    background: ${ra.bg};

    &:focus-within {
        ${zf}
    }
    ${e=>e.$focused&&!e.$noBorder&&zf}

    ${e=>e.$readOnly?O`
                border-color: transparent;
                padding: 0;
                background: transparent !important;

                &:focus-within {
                    ${Rf}
                }
                ${e.$focused&&Rf}
            `:e.$disabled?O`
                background: ${ra["bg-disabled"]};
                cursor: not-allowed;

                &:focus-within {
                    ${Lf}
                }
                ${e.$focused&&Lf}
            `:e.$error?O`
                border-color: ${ra["border-error"]};

                &:focus-within {
                    ${Pf}
                }
                ${e.$focused&&Pf}
            `:void 0}
    ${e=>{if(e.$noBorder)return O`
                border-color: transparent;
                background: transparent;
                &:focus-within {
                    ${Nf}
                }
            `}}
`,Hf=F(Wf)`
    display: flex;
    align-items: center;
    position: relative;
    height: max-content;
    width: 100%;
    padding: 0 ${aa["spacing-16"]} 0
        ${e=>e.$readOnly?"0":aa["spacing-16"]};
    flex-direction: ${e=>"right"===e.$position?"row-reverse":"row"};
`,Yf=F.input`
    ${e=>"small"===e.$variant?na["body-md-regular"]:na["body-baseline-regular"]}
    color: ${ra.text};
    display: block;
    background: transparent;
    border: none;
    outline: none;
    box-shadow: none;
    padding: 0;
    margin: 0;

    &:disabled {
        color: ${ra["text-subtler"]};

        &:hover {
            cursor: not-allowed;
        }
    }

    &::placeholder,
    &::-webkit-input-placeholder {
        color: ${ra["text-subtler"]};
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
`,Vf=F.button`
    background: transparent;
    border: none;
    outline: none;

    &:focus,
    &:active {
        outline: none;
    }

    &:focus-visible {
        outline: ${ia["width-010"]} ${ia.solid}
            ${ra["border-focus"]};
        border-radius: ${sa.sm};
    }
`,Uf=F.div`
    display: flex;
    align-items: center;
    position: relative;

    flex: 1;
`,Kf=F.div`
    display: flex;
    align-items: center;

    ${e=>{if(e.$hover)return O`
                ${qf}, ${Xf} {
                    color: ${ra["text-subtler"]};
                }
            `}}
`,qf=F(Yf)`
    background: transparent;
    text-align: center;
`,Zf=F(qf)`
    width: 2rem;
    margin-right: ${aa["spacing-4"]};
`,Gf=F(qf)`
    width: 2.5rem;
`,Qf=F(qf)`
    width: 3rem;
    margin-left: ${aa["spacing-4"]};
`,Xf=F.span`
    ${na["body-baseline-regular"]}
    ${e=>{if(e.$inactive)return O`
                color: ${ra.text};
            `}}
`,Jf=F.div`
    ${na["body-baseline-regular"]}
    background-color: ${ra.bg};
    color: ${ra["text-subtler"]};
    position: absolute;
    display: flex;
    align-items: center;
    width: 100%;
    height: 100%;

    ${e=>e.$disabled?O`
                background-color: ${ra["bg-disabled"]};
                cursor: not-allowed;
            `:e.$hide?O`
                display: none;
            `:void 0}
`;sd.extend(cd);const ep=o.forwardRef((({disabled:r,readOnly:n,names:o,value:i,focused:a,hoverValue:l,placeholder:d,label:u,onChange:f,onFocus:p,onBlur:m,hideInputKeyboard:b,inputLabels:v=["Date","Month","Year"]},y)=>{const x=b?"none":"numeric",[w,$,C]=jd(""),[S,D,k]=jd(""),[E,F,O]=jd(""),[_,T]=g("none"),[I,M]=g(!1),A=s(null),B=s(null),j=s(null),z=s(null),[R,L,P]=U(l);c((()=>{var e;const[t="",r="",n=""]=U(i);$(t),D(r),F(n),t||r||n||!A.current||!A.current.contains(document.activeElement)||null===(e=B.current)||void 0===e||e.focus()}),[i]),c((()=>{var e;a||T("none"),a&&(M(!0),A.current&&!A.current.contains(document.activeElement)&&(null===(e=B.current)||void 0===e||e.focus()))}),[a]),h(y,(()=>({ref:A,resetPlaceholder(){M(!1)},resetInput(){const[e="",t="",r=""]=U(i);$(e),D(t),F(r)},focusYearRef(){var e;null===(e=z.current)||void 0===e||e.focus()}})),[$,D,F,i]);const N=e=>{var t;e.preventDefault(),null===(t=B.current)||void 0===t||t.focus()},W=e=>{e.target.select();const t=e.target.name;T(t)},H=e=>{const[t,r,n]=o,i={[t]:C.current,[r]:k.current,[n]:O.current},a=e.target.name,s=i[a],l=a!==n?_d.padValue(s,!0):s;switch(a){case t:i[t]=l,$(l);break;case r:i[r]=l,D(l)}const c=`${i[n]}-${i[r]}-${i[t]}`,d=sd(c,"YYYY-MM-DD",!0).isValid(),u=!i[t]&&!i[r]&&!i[n];d&&s!==l&&f(c),A.current&&!A.current.contains(e.relatedTarget)&&(T("none"),null==m||m(u||d))},Y=e=>{var t,r;if(l)return;const n=e.target.name,i=e.target.value.replace(/[^0-9]/g,""),a={day:w,month:S,year:E};switch(n){case o[0]:a.day=i,$(i),2===i.length&&(null===(t=j.current)||void 0===t||t.focus());break;case o[1]:a.month=i,D(i),2===i.length&&(null===(r=z.current)||void 0===r||r.focus());break;case o[2]:a.year=i,F(i)}if(!a.day&&!a.month&&!a.year)return void f("");const s=`${a.year}-${a.month}-${a.day}`;sd(s,"YYYY-MM-DD",!0).isValid()&&f(s)},V=e=>{var t,r;"Backspace"!==e.code&&"Backspace"!==e.key||(_===o[1]&&0===S.length&&(null===(t=B.current)||void 0===t||t.focus()),_===o[2]&&0===E.length&&(null===(r=j.current)||void 0===r||r.focus()))};function U(e){if(e){const t=kd.sanitizeInput(e);if(!t)return[void 0,void 0,void 0];const r=sd(t,"YYYY-MM-DD",!0);return[_d.padValue(r.date().toString()),_d.padValue((r.month()+1).toString()),r.year().toString()]}return[void 0,void 0,void 0]}return t(Uf,{role:"group","aria-label":u,onClick:()=>{var e;r||n||(M(!0),A.current&&!A.current.contains(document.activeElement)&&(null===(e=B.current)||void 0===e||e.focus()))},onFocus:e=>{r||(M(!0),a||null==p||p(e))},children:[t(Kf,{ref:A,$hover:!!l,children:[e(Zf,{ref:B,name:o[0],maxLength:2,value:null!=R?R:w,onFocus:W,onBlur:H,onChange:Y,type:"text",inputMode:x,pattern:"[0-9]{2}","data-testid":`${o[0]}-input`,"aria-label":v[0],disabled:r,readOnly:n,tabIndex:n?-1:0,autoComplete:"off",placeholder:_!==o[0]||n?"DD":""}),e(Xf,{$inactive:0===w.length,children:"/"}),e(Gf,{ref:j,name:o[1],maxLength:2,value:null!=L?L:S,onFocus:W,onBlur:H,onChange:Y,onKeyDown:V,type:"text",inputMode:x,pattern:"[0-9]{2}","data-testid":`${o[1]}-input`,"aria-label":v[1],disabled:r,readOnly:n,tabIndex:n?-1:0,autoComplete:"off",placeholder:_!==o[1]||n?"MM":""}),e(Xf,{$inactive:0===S.length,children:"/"}),e(Qf,{ref:z,name:o[2],maxLength:4,value:null!=P?P:E,onFocus:W,onBlur:H,onChange:Y,onKeyDown:V,type:"text",inputMode:x,pattern:"[0-9]{4}","data-testid":`${o[2]}-input`,"aria-label":v[2],disabled:r,readOnly:n,tabIndex:n?-1:0,autoComplete:"off",placeholder:_!==o[2]||n?"YYYY":""})]}),(()=>{if(!i&&!n&&d)return e(Jf,{$hide:I,$disabled:r,onMouseDown:N,children:d})})()]})})),tp=F(Hf)`
    height: 3rem;
`,rp=t=>{var{minDate:r,maxDate:n,disabled:o,disabledDates:i,error:a,hideInputKeyboard:l,value:d,onChange:u,onFocus:h,onBlur:f,onYearMonthDisplayChange:p,withButton:m=!0,readOnly:b,id:v,allowDisabledSelection:y,zIndex:x,dropdownRootNode:w}=t,$=ct(t,["minDate","maxDate","disabled","disabledDates","error","hideInputKeyboard","value","onChange","onFocus","onBlur","onYearMonthDisplayChange","withButton","readOnly","id","allowDisabledSelection","zIndex","dropdownRootNode"]);const[C,S]=g(kd.sanitizeInput(d)),[D,k]=g(kd.sanitizeInput(d)),[E,F]=g(void 0),[O,_]=g(!1),[T,I]=g(!1),M=s(null),A=s(null),B=s(null);c((()=>{const e=kd.sanitizeInput(d);S(e),k(e)}),[d]);const j=e=>{!y&&kd.isDateDisabled(e,{disabledDates:i,minDate:r,maxDate:n})||(k(e),m||(W(e),S(e),e&&_(!1)))},z=e=>{var t;k(e),m||(W(e),S(e),e&&(null===(t=A.current)||void 0===t||t.focusYearRef(),_(!1)),F(void 0))},R=()=>{b||o||(_(!0),T||(I(!0),h&&h()))},L=e=>{var t,r,n;const o=e.relatedTarget,i=B.current&&B.current.contains(o),a=M.current&&M.current.contains(o),s=(null===(t=null==o?void 0:o.matches)||void 0===t?void 0:t.call(o,"[data-floating-ui-focusable]"))||(null===(r=null==o?void 0:o.matches)||void 0===r?void 0:r.call(o,"[data-floating-ui-focus-guard]"));(T&&!O&&!a&&!s||O&&!a&&!i&&!s)&&(null===(n=A.current)||void 0===n||n.resetInput(),k(C),I(!1),_(!1),H())},P=e=>{F(e)},N=e=>{var t,r;switch(e){case"reset":k(C);break;case"confirmed":S(D),W(D)}sd(D,"YYYY-MM-DD",!0).isValid()?null===(t=A.current)||void 0===t||t.focusYearRef():null===(r=M.current)||void 0===r||r.focus(),_(!1)},W=e=>{u&&u(e)},H=()=>{f&&f()};return e(lh,{enabled:!b&&!o,isOpen:O,renderElement:()=>e(tp,Object.assign({role:"group",tabIndex:0,ref:M,onBlur:L,onFocus:R,$disabled:o,$readOnly:b,$focused:T,$error:a,id:v,"data-testid":$["data-testid"],"aria-disabled":o},$,{children:e(ep,{ref:A,disabled:o,onChange:j,readOnly:b,focused:O,names:["start-day","start-month","start-year"],value:D,hoverValue:E,hideInputKeyboard:l})})),renderDropdown:({elementWidth:t})=>e(jf,{variant:"single",ref:B,initialCalendarDate:D,withButton:m,value:D,disabledDates:i,minDate:r,maxDate:n,allowDisabledSelection:y,onHover:P,onSelect:z,onDismiss:N,onYearMonthDisplayChange:p,width:t,isFocusable:!b&&!o}),onClose:()=>{var e;null===(e=A.current)||void 0===e||e.resetInput(),k(C),_(!1),I(!1),H(),F(void 0)},onDismiss:()=>{var e,t;null===(e=A.current)||void 0===e||e.resetInput(),null===(t=M.current)||void 0===t||t.focus(),k(C),_(!1)},customZIndex:x,offset:16,rootNode:w})},np=F.div`
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
                        100% - ${na.Spec["body-size-baseline"]} -
                            ${aa["spacing-16"]}
                    );
                    flex: unset;
                }

                [data-id="range-container-elem2-container"] {
                    margin-top: ${aa["spacing-8"]};
                }
            `}}
`,op=F.div`
    width: 100%; // Force next flex item to break to next line
`,ip=F.div`
    display: flex;
    flex: 1;
    align-items: center;
`,ap=F(ue)`
    color: ${ra.icon};
    width: ${na.Spec["body-size-baseline"]};
    height: ${na.Spec["body-size-baseline"]};
    flex-shrink: 0;
    margin: 0 ${aa["spacing-8"]};
    align-self: center;
`,sp=F.div`
    position: absolute;
    background: ${e=>e.$error?ra["border-error-focus-strong"]:ra["border-focus-strong"]};
    height: 2px;
    // half - half padding - half icon width
    width: calc(
        50% - ${aa["spacing-8"]} - (${na.Spec["body-size-baseline"]} / 2)
    );
    transition: left ${oa["duration-350"]} ${oa["ease-standard"]},
        opacity ${oa["duration-350"]} ${oa["ease-standard"]};
    left: 0;
    bottom: 0;

    ${e=>{switch(e.$position){case"start":return O`
                    opacity: 1;
                `;case"end":return O`
                    left: calc(50% + ${aa["spacing-16"]});
                    opacity: 1;
                `;case"none":return O`
                    opacity: 0;
                `}}}

    ${e=>{if(e.$wrap)return O`
                display: none;
            `}}
`,lp=({children:r,currentActive:n,error:o,className:i,wrap:a})=>{const[s,l]=r;return t(np,{className:i,$wrap:a,children:[e(ip,{"data-id":"range-container-elem1-container",children:s}),e(ap,{}),a&&e(op,{}),e(ip,{"data-id":"range-container-elem2-container",children:l}),e(sp,{"data-id":"range-container-indicator",$position:n,$error:o,$wrap:a})]})},cp=(e,t,r)=>{const n=[];e&&n.push(`[${e}]`),n.push(t,r),console.log(...n)},dp=F(Hf)`
    ${e=>{if(e.$wrap)return!0===e.$readOnly?O`
                    padding: ${aa["spacing-12"]} 0;
                `:O`
                padding: ${aa["spacing-12"]} ${aa["spacing-16"]};
            `}}
`,up=F.div`
    display: flex;
    align-items: center;
    height: calc(3rem - 2px); // exclude top and bottom borders
    width: 100%;

    ${e=>e.$wrap&&O`
            height: fit-content;
        `}
`,hp={initialStart:"",initialEnd:"",selectedStart:"",selectedEnd:"",currentFocus:"none",calendarOpen:!1,isStartDirty:!1,isEndDirty:!1,focused:!1},fp=r=>{var{minDate:n,maxDate:o,disabled:i,disabledDates:a,error:u,hideInputKeyboard:h,value:f,valueEnd:p,onChange:m,onFocus:b,onBlur:v,onYearMonthDisplayChange:y,withButton:x=!0,variant:w="range",numberOfDays:$=7,readOnly:C,id:S,allowDisabledSelection:D,zIndex:k,dropdownRootNode:E}=r,F=ct(r,["minDate","maxDate","disabled","disabledDates","error","hideInputKeyboard","value","valueEnd","onChange","onFocus","onBlur","onYearMonthDisplayChange","withButton","variant","numberOfDays","readOnly","id","allowDisabledSelection","zIndex","dropdownRootNode"]);const[O,_]=g(),[T,I]=g(void 0),M="week"===w,A="fixed-range"===w,[B,j]=g(!1),[z,R]=g(!1),[{selectedStart:L,selectedEnd:P,currentFocus:N,calendarOpen:W,isStartDirty:H,isEndDirty:Y,focused:V},U]=(({initialState:e,reducers:t,name:r,debug:n})=>{const[o,i]=l(((e,r)=>t[r.type]?t[r.type](e,r.payload):e),e);return[o,Object.fromEntries(Object.keys(t).map((e=>[e,t=>{n&&cp(r,e,t),i({type:e,payload:t})}])))]})({name:"date-range-input",initialState:hp,reducers:{blur:e=>Object.assign(Object.assign({},e),{selectedStart:e.initialStart,selectedEnd:e.initialEnd,currentFocus:"none",calendarOpen:!1,isStartDirty:!1,isEndDirty:!1,focused:!1}),dismiss:e=>Object.assign(Object.assign({},e),{selectedStart:e.initialStart,selectedEnd:e.initialEnd,currentFocus:"none",calendarOpen:!1,isStartDirty:!1,isEndDirty:!1}),changeStart:(e,t)=>Object.assign(Object.assign({},e),{selectedStart:t,isStartDirty:!0}),changeEnd:(e,t)=>Object.assign(Object.assign({},e),{selectedEnd:t,isEndDirty:!0}),reselectStart:e=>Object.assign(Object.assign({},e),{selectedStart:"",currentFocus:"start"}),reselectEnd:e=>Object.assign(Object.assign({},e),{selectedEnd:"",currentFocus:"end"}),focus:(e,t)=>Object.assign(Object.assign({},e),{currentFocus:M?"none":A?"start":t,calendarOpen:!C,focused:!0}),cancel:e=>Object.assign(Object.assign({},e),{selectedStart:e.initialStart,selectedEnd:e.initialEnd,currentFocus:"none",calendarOpen:!1}),done:(e,t)=>Object.assign(Object.assign({},e),{selectedStart:t.start,selectedEnd:t.end,initialStart:t.start,initialEnd:t.end,currentFocus:"none",calendarOpen:!1,isStartDirty:!1,isEndDirty:!1}),resetStart:e=>Object.assign(Object.assign({},e),{selectedStart:e.initialStart}),resetEnd:e=>Object.assign(Object.assign({},e),{selectedEnd:e.initialEnd}),resetRange:(e,t)=>Object.assign(Object.assign({},e),{initialStart:t.start,selectedStart:t.start,initialEnd:t.end,selectedEnd:t.end})}}),K=s(!1),q=s(null),Z=s(null),G=s(null),Q=s(null),X=(({maxWidth:e,targetRef:t})=>{const[r,n]=g(!1);return nd({targetRef:t,refreshMode:"throttle",refreshRate:300,handleHeight:!1,onResize:d((t=>{n(t<=e)}),[e])}),r})({maxWidth:320,targetRef:q});c((()=>{U.resetRange({start:kd.sanitizeInput(f),end:kd.sanitizeInput(p)})}),[f,p]),c((()=>{"start"===N?_(L):"end"===N&&P&&_(P)}),[N]);const J=e=>{var t,r,n;"Enter"!==e.code||x||(L&&P?(U.done({start:L,end:P}),null==m||m(L,P)):(U.dismiss(),null===(t=q.current)||void 0===t||t.focus(),null===(r=G.current)||void 0===r||r.resetPlaceholder(),null===(n=Q.current)||void 0===n||n.resetPlaceholder()))},ee=e=>{var t;if(pe(e))return void(K.current=!0);if(U.changeStart(e),e&&(null===(t=Z.current)||void 0===t||t.setCalendarDate(e)),K.current=!1,!e)return void(x||P||!Y||(U.resetRange({start:"",end:""}),null==m||m("","")));if(!P)return void U.focus("end");if(sd(e).isAfter(P,"day"))U.reselectEnd();else{if(Y)return x?void 0:(U.done({start:e,end:P}),void(null==m||m(e,P)));U.focus("end")}},te=e=>{var t,r,n;if(pe(e))return void(K.current=!0);if(sd(e).isBefore(L,"day"))return U.changeStart(e),null===(t=Z.current)||void 0===t||t.setCalendarDate(e),void U.reselectEnd();if(U.changeEnd(e),e&&(null===(r=Z.current)||void 0===r||r.setCalendarDate(e)),e){if(L)return x?void 0:(null===(n=Q.current)||void 0===n||n.focusYearRef(),U.done({start:L,end:e}),void(null==m||m(L,e)));U.focus("start")}else x||L||!H||(U.resetRange({start:"",end:""}),null==m||m("",""))},re=e=>{var t,r;if(pe(e))return void(K.current=!0);if(U.changeStart(e),null===(t=Z.current)||void 0===t||t.setCalendarDate(e),K.current=!1,!e)return void(x?U.changeEnd(""):(U.resetRange({start:"",end:""}),null==m||m("","")));const n=sd(e).format("YYYY-MM-DD"),o=sd(n).add($-1,"day").format("YYYY-MM-DD");return U.changeStart(n),U.changeEnd(o),K.current=!1,x?void 0:(U.done({start:n,end:o}),null===(r=G.current)||void 0===r||r.focusYearRef(),void(null==m||m(n,o)))},ne=()=>{(M||A)&&R(!0),M&&j(!0),C||i||V||(U.focus("start"),null==b||b())},oe=e=>{var t,r,n,o;const i=e.relatedTarget,a=Z.current&&Z.current.contains(i),s=q.current&&q.current.contains(i),l=(null===(t=null==i?void 0:i.matches)||void 0===t?void 0:t.call(i,"[data-floating-ui-focusable]"))||(null===(r=null==i?void 0:i.matches)||void 0===r?void 0:r.call(i,"[data-floating-ui-focus-guard]"));(V&&!W&&!s&&!l||W&&!s&&!a&&!l)&&(U.blur(),R(!1),j(!1),null===(n=G.current)||void 0===n||n.resetPlaceholder(),null===(o=Q.current)||void 0===o||o.resetPlaceholder(),fe())},ie=e=>t=>{t.stopPropagation(),C||(U.focus(e),ae(),se(),V||null==b||b())},ae=()=>{if(M){const e=Dd.toDayjs(L).startOf("week").format("YYYY-MM-DD");j(!0),R(!0),_(e)}},se=()=>{A&&(R(!0),_(L))},le=e=>{var t;e&&!K.current||(U.resetStart(),null===(t=G.current)||void 0===t||t.resetInput())},ce=e=>{var t;e&&!K.current||(U.resetEnd(),null===(t=Q.current)||void 0===t||t.resetInput())},de=e=>{switch(w){case"week":(e=>{var t;const r=sd(e).startOf("week").format("YYYY-MM-DD"),n=sd(e).endOf("week").format("YYYY-MM-DD");if(U.changeStart(r),U.changeEnd(n),K.current=!1,!x)null===(t=Q.current)||void 0===t||t.focusYearRef(),U.done({start:r,end:n}),null==m||m(r,n)})(e);break;case"fixed-range":re(e);break;default:"start"===N?ee(e):"end"===N&&te(e)}},ue=e=>{var t,r,n;switch(null===(t=q.current)||void 0===t||t.focus(),e){case"reset":U.cancel();break;case"confirmed":if(U.done({start:L,end:P}),null==m||m(L,P),M)break;ge(L,P)&&("range"===w?null===(r=Q.current)||void 0===r||r.focusYearRef():null===(n=G.current)||void 0===n||n.focusYearRef())}},he=e=>{I(e)},fe=()=>{v&&v()},pe=e=>!D&&e&&kd.isDateDisabled(e,{disabledDates:a,minDate:n,maxDate:o}),ge=(e,t)=>!(!e||!t)&&sd(e).isBefore(t,"day"),me=e=>{let t={start:void 0,end:void 0};switch(w){case"range":t={start:"start"===N?T:void 0,end:"end"===N?T:void 0};break;case"week":if(!T)return;t={start:sd(T).startOf("week").format("YYYY-MM-DD"),end:sd(T).endOf("week").format("YYYY-MM-DD")};break;case"fixed-range":if(!T)return;t={start:sd(T).format("YYYY-MM-DD"),end:sd(T).add($-1,"day").format("YYYY-MM-DD")}}return t[e]};return e(lh,{enabled:!C&&!i,isOpen:W,onClose:()=>{var e,t;U.blur(),j(!1),R(!1),null===(e=G.current)||void 0===e||e.resetPlaceholder(),null===(t=Q.current)||void 0===t||t.resetPlaceholder(),fe()},onDismiss:()=>{var e,t,r;U.dismiss(),null===(e=q.current)||void 0===e||e.focus(),null===(t=G.current)||void 0===t||t.resetPlaceholder(),null===(r=Q.current)||void 0===r||r.resetPlaceholder()},renderElement:()=>e(dp,Object.assign({role:"group",ref:q,tabIndex:0,onFocus:ne,onBlur:oe,$focused:V,$disabled:i,$readOnly:C,$error:u,$wrap:X,id:S,"data-testid":F["data-testid"],"aria-disabled":i,onKeyDown:J},F,{children:t(lp,{currentActive:N,wrap:X,error:u,children:[e(up,{$wrap:X,children:e(ep,{ref:G,placeholder:"From",names:["start-day","start-month","start-year"],inputLabels:["Start Date","Start Month","Start Year"],value:L,disabled:i,readOnly:B||C,focused:"start"===N,hoverValue:me("start"),onChange:A?re:ee,onFocus:ie("start"),onBlur:le,hideInputKeyboard:h})}),e(up,{$wrap:X,children:e(ep,{ref:Q,placeholder:"To",names:["end-day","end-month","end-year"],inputLabels:["End Date","End Month","End Year"],value:P,disabled:i,readOnly:z||C,focused:"end"===N,hoverValue:me("end"),onChange:te,onFocus:ie("end"),onBlur:ce,hideInputKeyboard:h})})]})})),renderDropdown:({elementWidth:t})=>e(jf,{ref:Z,variant:w,initialCalendarDate:O,withButton:x,value:L,endValue:P,selectWithinRange:H||Y,currentFocus:N,disabledDates:a,minDate:n,maxDate:o,allowDisabledSelection:D,onSelect:de,onDismiss:ue,onHover:he,onYearMonthDisplayChange:y,numberOfDays:$,width:t,isFocusable:!C&&!i}),customZIndex:k,offset:16,rootNode:E})},pp=F(Ah)`
    flex-direction: ${e=>"right"===e.$buttonIconPosition?"row-reverse":"row"};
    gap: 0.5rem;

    svg {
        flex-shrink: 0;
        height: 1em;
        width: 1em;
    }
`,gp=(r,n)=>{const{children:i,disabled:a=!1,styleType:s="default",danger:l=!1,icon:c,iconPosition:d="left",loading:u=!1,focusableWhenDisabled:h=!1,onClick:f}=r,p=ct(r,["children","disabled","styleType","danger","icon","iconPosition","loading","focusableWhenDisabled","onClick"]),g={$buttonIconPosition:d,$buttonStyle:a?"disabled":s,$buttonSizeStyle:"default",$buttonIsDanger:l};return t(pp,Object.assign({ref:n,"data-testid":p["data-testid"]||"button-with-icon",disabled:a&&!h,"aria-disabled":a,"aria-busy":u,onClick:a?void 0:f},g,p,{children:[u?e(yh,{}):c?o.cloneElement(c,{"aria-hidden":!0}):null,e("span",{children:i})]}))};gp.displayName="ButtonWithIcon.Default";const mp=(r,n)=>{const{children:i,disabled:a=!1,styleType:s="default",danger:l=!1,icon:c,iconPosition:d="left",loading:u=!1,focusableWhenDisabled:h=!1,onClick:f}=r,p=ct(r,["children","disabled","styleType","danger","icon","iconPosition","loading","focusableWhenDisabled","onClick"]),g={$buttonIconPosition:d,$buttonStyle:a?"disabled":s,$buttonSizeStyle:"small",$buttonIsDanger:l};return t(pp,Object.assign({ref:n,"data-testid":p["data-testid"]||"button-with-icon",disabled:a&&!h,"aria-disabled":a,"aria-busy":u,onClick:a?void 0:f},g,p,{children:[u?e(yh,{}):c?o.cloneElement(c,{"aria-hidden":!0}):null,e("span",{children:i})]}))};mp.displayName="ButtonWithIcon.Small";const bp={Default:o.forwardRef(gp),Small:o.forwardRef(mp)},vp=({className:t,progress:r,color:n,"data-testid":o})=>e(yp,{className:t,$innerWidth:r,$color:n,"data-testid":o,children:e("progress",{value:100*r,max:100})}),yp=F.div`
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

    ${e=>{const{$color:t}=e;let r;return r=t&&"string"==typeof t?t:t?t(e):ra["icon-primary-subtle"](e),O`
            border: ${ia["width-010"]} ${ia.solid} ${r};
            border-radius: ${sa.sm};

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
`,xp=F.button`
    align-items: center;
    border-radius: ${sa.sm};
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
                    background-color: ${ra.bg};
                    border: ${ia["width-010"]} ${ia.solid}
                        ${ra["border-primary"]};
                    color: ${ra["text-primary"]};

                    &:hover {
                        background-color: ${ra["bg-hover-neutral"]};
                    }
                `;case"light":return O`
                    background-color: ${ra.bg};
                    border: ${ia["width-010"]} ${ia.solid}
                        ${ra.border};
                    color: ${ra["text-primary"]};

                    &:hover {
                        background-color: ${ra["bg-hover-neutral"]};
                    }
                `;case"disabled":return O`
                    background-color: ${ra["bg-disabled"]};
                    border: ${ia["width-010"]} ${ia.solid}
                        ${ra["border-disabled"]};
                    color: ${ra["text-disabled"]};
                    cursor: not-allowed;
                `;default:return O`
                    background-color: ${ra["bg-primary"]};
                    border: none;
                    color: ${ra["text-inverse"]};

                    &:hover {
                        background-color: ${ra["bg-primary-hover"]};
                    }
                `}}}
`,wp=o.forwardRef(((t,r)=>{var{"data-testid":n,styleType:o="primary",children:i,sizeType:a="default",type:s="button",disabled:l=!1,focusableWhenDisabled:c=!1,onClick:d}=t,u=ct(t,["data-testid","styleType","children","sizeType","type","disabled","focusableWhenDisabled","onClick"]);return e(xp,Object.assign({"data-testid":n||"iconButton",ref:r,type:s,$styleType:l?"disabled":o,$sizeType:a,"aria-disabled":l,disabled:l&&!c,onClick:l?void 0:d},u,{children:i}))})),$p=F.div`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 100%;
    overflow: hidden;
    ${e=>{return t=e.$show,r=e.$animationFrom||"bottom",t?`\n\t\t\t${r}: 0;\n\t\t\topacity: 1;\n\t\t\ttransition: all 300ms cubic-bezier(0.21, 0.79, 0.53, 1);\n\t\t\ttransition-delay: 200ms;\n\t\t`:`\n\t\t${r}: -3%;\n\t\topacity: 0;\n\t\ttransition: all 300ms cubic-bezier(0.4, 0.34, 0.38, 1);\n\t`;var t,r}}

    ${da.MaxWidth.sm} {
        height: calc(
            ${e=>e.$verticalHeight?`${e.$verticalHeight}px`:"1vh"} * 100
        );

        top: ${e=>e.$offsetTop||0}px;
    }
`,Cp=Object.assign((t=>{var{id:r="modal",show:n,animationFrom:o="bottom",children:i,enableOverlayClick:a=!0,rootComponentId:s,zIndex:l,onOverlayClick:d,dismissKeyboardOnShow:u=!0}=t,h=ct(t,["id","show","animationFrom","children","enableOverlayClick","rootComponentId","zIndex","onOverlayClick","dismissKeyboardOnShow"]);const{verticalHeight:f,offsetTop:p}=iu();return c((()=>{var e,t;n&&u&&(null===(t=null===(e=document.activeElement)||void 0===e?void 0:e.blur)||void 0===t||t.call(e))}),[n]),e(eu,{"data-testid":`${r}-overlay`,show:n,enableOverlayClick:a,onOverlayClick:d,id:r,rootId:s,zIndex:l,children:e($p,Object.assign({$show:n,$animationFrom:o,"data-testid":r,$verticalHeight:f,$offsetTop:p},h,{children:i}))})}),{Box:Vd}),Sp=O`
    ${e=>`\n        ${da.MaxWidth.sm(e)},\n        (orientation: landscape) and (max-height: ${ca["sm-max"](e)}px)\n    `}
`,Dp=O`
    ${e=>`\n        @media (orientation: landscape) and (max-height: ${ca["sm-max"](e)}px)\n    `}
`,kp=F.div`
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    ${e=>O`
            ${ia.Util["dashed-default"]({radius:sa.sm,thickness:ia["width-040"],colour:e.$disabled?ra["border-disabled"]:ra.border})}

            background-color: ${e.$disabled?ra["bg-disabled"]:ra.bg};
        `}
    height: 14.125rem;
`,Ep=F(Ph.Default)`
    width: fit-content;
    margin: 0 ${aa["spacing-20"]};

    &:disabled {
        border-color: ${ra["border-strong"]};
    }
`,Fp=F(wp)`
    position: absolute;
    top: ${aa["spacing-16"]};
    right: ${aa["spacing-16"]};

    &:disabled {
        border-color: ${ra["border-strong"]};
    }
`,Op=F.img`
    display: block;
    object-fit: contain;
    object-position: center;
    width: calc(100% - (3rem + ${aa["spacing-16"]}) * 2);
    height: 100%;
`,_p=F.div`
    background: ${ra["bg-primary-subtlest"]};
    border: ${ia["width-010"]} ${ia.solid} ${ra.border};
    border-radius: ${sa.sm};
    margin: 0 ${aa["spacing-20"]};
    padding: ${aa["spacing-16"]};
    display: flex;
    gap: ${aa["spacing-16"]};
    flex: 1;
    flex-direction: column;
    align-items: center;
`,Tp=F(_a.BodySM)`
    margin-top: ${aa["spacing-16"]};
`,Ip=F(Cp)`
    /* increase specificity as the styles are overwritten */
    && {
        height: 100%;
        overflow-y: auto;
    }
`,Mp=F.div`
    width: 100%;
    margin: auto;
    padding: ${aa["layout-xxl"]} ${aa["layout-sm"]};

    ${Sp} {
        padding: 0;
        width: 100%;
        height: 100%;
    }
`,Ap=F(Cp.Box)`
    width: 100%;
    height: 29rem;
    max-width: 672px;
    max-height: none;
    margin: 0 auto;
    padding: ${aa["spacing-16"]};

    ${Sp} {
        display: flex;
        flex-direction: column;
        max-width: none;
        height: 100%;
        border-radius: 0;
        padding: 0;

        --close-button-top-inset: ${aa["spacing-8"]};
        --close-button-right-inset: ${aa["spacing-20"]};
    }
`,Bp=F.h2`
    ${na["body-baseline-semibold"]}
    color: ${ra.text};
    margin-bottom: ${aa["spacing-16"]};
    text-align: center;

    ${Sp} {
        ${na["body-md-semibold"]}
        margin: ${aa["spacing-12"]} 0;
    }
`,jp=F.div`
    width: 100%;
    height: 20rem;
    border-radius: ${sa.lg};
    overflow: hidden;

    ${Sp} {
        border-radius: 0;
        flex: 1;
    }

    ${Dp} {
        background: ${ra["bg-strong"]};
    }
`,zp=F.div`
    position: relative;
    width: 100%;
    height: 100%;
    background: ${ra["bg-stronger"]};
    margin: auto;

    ${Sp} {
        aspect-ratio: 4/3;
    }
    ${da.MaxWidth.sm} {
        width: 100%;
        height: auto;
    }
    ${Dp} {
        width: auto;
        height: 100%;
    }
`,Rp=F.div`
    position: absolute;
    left: 50%;
    top: calc(75% - 1px);
    width: 300px;
    height: 2px;
    transform: translateX(-50%);
    background-color: ${ra["border-strong"]};
    pointer-events: none;

    ${Sp} {
        width: calc(100% - ${aa["spacing-40"]});
        max-width: 300px;
        left: 50%;
    }
`,Lp=F.div`
    display: flex;
    justify-content: space-between;
    margin-top: ${aa["spacing-16"]};

    ${da.MaxWidth.sm} {
        flex-direction: column-reverse;
        margin: ${aa["spacing-16"]} ${aa["spacing-24"]}
            ${aa["spacing-48"]};
        gap: ${aa["spacing-16"]};
    }

    ${Dp} {
        flex-direction: row;
        margin: ${aa["spacing-16"]} ${aa["spacing-20"]};
    }
`,Pp=F(Ph.Default)`
    width: 8.5rem;
    ${da.MaxWidth.sm} {
        width: 100%;
    }
    ${Dp} {
        height: 2.5rem;
    }
`,Np=F.div`
    width: 100%;
    height: 100%;
    overflow: hidden;
`,Wp=F.canvas`
    cursor: crosshair;
`,Hp=S((()=>dt(void 0,void 0,void 0,(function*(){return{default:(yield import("./e-signature-canvas.5cbe0fa2.js")).ESignatureCanvas}})))),Yp=n=>{const{description:o,id:i,loadingProgress:a,loadingLabel:l="Uploading...",onChange:d,value:u,disabled:h}=n,f=ct(n,["description","id","loadingProgress","loadingLabel","onChange","value","disabled"]),[p,m]=g(!1),v=s(null),[y,x]=g(u),w=b(T),$=ca["sm-max"]({theme:w}),C=Ld.useMediaQuery({maxWidth:$}),S=Ld.useMediaQuery({maxHeight:$,orientation:"landscape"}),k=()=>{var e;null===(e=v.current)||void 0===e||e.clear()},E=()=>{if(v.current){const e=v.current.export();x(e),m(!1),null==d||d(e)}};c((()=>{x(u)}),[u]);return t("div",Object.assign({},f,{children:[e(kp,{$disabled:h,children:"number"==typeof a?t(_p,{children:[l&&e(_a.BodyMD,{children:l}),e(vp,{progress:null!=a?a:0,"data-testid":`${i||"e-signature"}-progress-bar`})]}):y?t(r,{children:[e(Op,{src:y,alt:"Signature preview"}),e(Fp,{styleType:"light",onClick:()=>m(!0),id:i,"aria-label":"Edit signature",disabled:h,children:e(he,{})})]}):e(Ep,{type:"button",styleType:"secondary","aria-label":"Add signature",id:i,onClick:()=>m(!0),disabled:h,children:"Add signature"})}),e(Ip,{"data-testid":"signature-modal",show:p,children:e(Mp,{children:t(Ap,{onClose:()=>m(!1),children:[e(Bp,{children:"Signature"}),e(jp,{children:t(zp,{children:[e(Rp,{}),e(D,{fallback:null,children:p&&e(Hp,{ref:v,baseImageDataURL:y})})]})}),t(Lp,{children:[e(Pp,{as:S?bp.Small:bp.Default,type:"button",styleType:C&&!S?"light":"link",icon:e(fe,{}),onClick:k,children:"Clear"}),e(Pp,{as:S?Ph.Small:Ph.Default,type:"button",onClick:E,children:"Save"})]})]})})}),o?e(Tp,{children:o}):null]}))};function Vp(e,t){return Vp=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},Vp(e,t)}function Up(e){return e&&e.stopPropagation&&e.stopPropagation(),e&&e.preventDefault&&e.preventDefault(),!1}function Kp(e){return null==e?[]:Array.isArray(e)?e.slice():[e]}function qp(e){return null!==e&&1===e.length?e[0]:e.slice()}function Zp(e){Object.keys(e).forEach((t=>{"undefined"!=typeof document&&document.addEventListener(t,e[t],!1)}))}function Gp(e,t){return Qp(function(e,t){let r=e;return r<=t.min&&(r=t.min),r>=t.max&&(r=t.max),r}(e,t),t)}function Qp(e,t){const r=(e-t.min)%t.step;let n=e-r;return 2*Math.abs(r)>=t.step&&(n+=r>0?t.step:-t.step),parseFloat(n.toFixed(5))}let Xp=function(e){function t(t){var r;(r=e.call(this,t)||this).onKeyUp=()=>{r.onEnd()},r.onMouseUp=()=>{r.onEnd(r.getMouseEventMap())},r.onTouchEnd=e=>{e.preventDefault(),r.onEnd(r.getTouchEventMap())},r.onBlur=()=>{r.setState({index:-1},r.onEnd(r.getKeyDownEventMap()))},r.onMouseMove=e=>{r.setState({pending:!0});const t=r.getMousePosition(e),n=r.getDiffPosition(t[0]),o=r.getValueFromPosition(n);r.move(o)},r.onTouchMove=e=>{if(e.touches.length>1)return;r.setState({pending:!0});const t=r.getTouchPosition(e);if(void 0===r.isScrolling){const e=t[0]-r.startPosition[0],n=t[1]-r.startPosition[1];r.isScrolling=Math.abs(n)>Math.abs(e)}if(r.isScrolling)return void r.setState({index:-1});const n=r.getDiffPosition(t[0]),o=r.getValueFromPosition(n);r.move(o)},r.onKeyDown=e=>{if(!(e.ctrlKey||e.shiftKey||e.altKey||e.metaKey))switch(r.setState({pending:!0}),e.key){case"ArrowLeft":case"ArrowDown":case"Left":case"Down":e.preventDefault(),r.moveDownByStep();break;case"ArrowRight":case"ArrowUp":case"Right":case"Up":e.preventDefault(),r.moveUpByStep();break;case"Home":e.preventDefault(),r.move(r.props.min);break;case"End":e.preventDefault(),r.move(r.props.max);break;case"PageDown":e.preventDefault(),r.moveDownByStep(r.props.pageFn(r.props.step));break;case"PageUp":e.preventDefault(),r.moveUpByStep(r.props.pageFn(r.props.step))}},r.onSliderMouseDown=e=>{if(!r.props.disabled&&2!==e.button){if(r.setState({pending:!0}),!r.props.snapDragDisabled){const t=r.getMousePosition(e);r.forceValueFromPosition(t[0],(e=>{r.start(e,t[0]),Zp(r.getMouseEventMap())}))}Up(e)}},r.onSliderClick=e=>{if(!r.props.disabled&&r.props.onSliderClick&&!r.hasMoved){const t=r.getMousePosition(e),n=Gp(r.calcValue(r.calcOffsetFromPosition(t[0])),r.props);r.props.onSliderClick(n)}},r.createOnKeyDown=e=>t=>{r.props.disabled||(r.start(e),Zp(r.getKeyDownEventMap()),Up(t))},r.createOnMouseDown=e=>t=>{if(r.props.disabled||2===t.button)return;r.setState({pending:!0});const n=r.getMousePosition(t);r.start(e,n[0]),Zp(r.getMouseEventMap()),Up(t)},r.createOnTouchStart=e=>t=>{if(r.props.disabled||t.touches.length>1)return;r.setState({pending:!0});const n=r.getTouchPosition(t);r.startPosition=n,r.isScrolling=void 0,r.start(e,n[0]),Zp(r.getTouchEventMap()),function(e){e.stopPropagation&&e.stopPropagation()}(t)},r.handleResize=()=>{const e=window.setTimeout((()=>{r.pendingResizeTimeouts.shift(),r.resize()}),0);r.pendingResizeTimeouts.push(e)},r.renderThumb=(e,t)=>{const n=r.props.thumbClassName+" "+r.props.thumbClassName+"-"+t+" "+(r.state.index===t?r.props.thumbActiveClassName:""),o={ref:e=>{r["thumb"+t]=e},key:r.props.thumbClassName+"-"+t,className:n,style:e,onMouseDown:r.createOnMouseDown(t),onTouchStart:r.createOnTouchStart(t),onFocus:r.createOnKeyDown(t),tabIndex:0,role:"slider","aria-orientation":r.props.orientation,"aria-valuenow":r.state.value[t],"aria-valuemin":r.props.min,"aria-valuemax":r.props.max,"aria-label":Array.isArray(r.props.ariaLabel)?r.props.ariaLabel[t]:r.props.ariaLabel,"aria-labelledby":Array.isArray(r.props.ariaLabelledby)?r.props.ariaLabelledby[t]:r.props.ariaLabelledby,"aria-disabled":r.props.disabled},i={index:t,value:qp(r.state.value),valueNow:r.state.value[t]};return r.props.ariaValuetext&&(o["aria-valuetext"]="string"==typeof r.props.ariaValuetext?r.props.ariaValuetext:r.props.ariaValuetext(i)),r.props.renderThumb(o,i)},r.renderTrack=(e,t,n)=>{const o={key:r.props.trackClassName+"-"+e,className:r.props.trackClassName+" "+r.props.trackClassName+"-"+e,style:r.buildTrackStyle(t,r.state.upperBound-n)},i={index:e,value:qp(r.state.value)};return r.props.renderTrack(o,i)};let n=Kp(t.value);n.length||(n=Kp(t.defaultValue)),r.pendingResizeTimeouts=[];const i=[];for(let e=0;e<n.length;e+=1)n[e]=Gp(n[e],t),i.push(e);return r.resizeObserver=null,r.resizeElementRef=o.createRef(),r.state={index:-1,upperBound:0,sliderLength:0,value:n,zIndices:i},r}!function(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,Vp(e,t)}(t,e);var r=t.prototype;return r.componentDidMount=function(){"undefined"!=typeof window&&(this.resizeObserver=new ResizeObserver(this.handleResize),this.resizeObserver.observe(this.resizeElementRef.current),this.resize())},t.getDerivedStateFromProps=function(e,t){const r=Kp(e.value);return r.length?t.pending?null:{value:r.map((t=>Gp(t,e)))}:null},r.componentDidUpdate=function(){0===this.state.upperBound&&this.resize()},r.componentWillUnmount=function(){this.clearPendingResizeTimeouts(),this.resizeObserver&&this.resizeObserver.disconnect()},r.onEnd=function(e){e&&function(e){Object.keys(e).forEach((t=>{"undefined"!=typeof document&&document.removeEventListener(t,e[t],!1)}))}(e),this.hasMoved&&this.fireChangeEvent("onAfterChange"),this.setState({pending:!1}),this.hasMoved=!1},r.getValue=function(){return qp(this.state.value)},r.getClosestIndex=function(e){let t=Number.MAX_VALUE,r=-1;const{value:n}=this.state,o=n.length;for(let i=0;i<o;i+=1){const o=this.calcOffset(n[i]),a=Math.abs(e-o);a<t&&(t=a,r=i)}return r},r.getMousePosition=function(e){return[e["page"+this.axisKey()],e["page"+this.orthogonalAxisKey()]]},r.getTouchPosition=function(e){const t=e.touches[0];return[t["page"+this.axisKey()],t["page"+this.orthogonalAxisKey()]]},r.getKeyDownEventMap=function(){return{keydown:this.onKeyDown,keyup:this.onKeyUp,focusout:this.onBlur}},r.getMouseEventMap=function(){return{mousemove:this.onMouseMove,mouseup:this.onMouseUp}},r.getTouchEventMap=function(){return{touchmove:this.onTouchMove,touchend:this.onTouchEnd}},r.getValueFromPosition=function(e){const t=e/(this.state.sliderLength-this.state.thumbSize)*(this.props.max-this.props.min);return Gp(this.state.startValue+t,this.props)},r.getDiffPosition=function(e){let t=e-this.state.startPosition;return this.props.invert&&(t*=-1),t},r.resize=function(){const{slider:e,thumb0:t}=this;if(!e||!t)return;const r=this.sizeKey(),n=e.getBoundingClientRect(),o=e[r],i=n[this.posMaxKey()],a=n[this.posMinKey()],s=t.getBoundingClientRect()[r.replace("client","").toLowerCase()],l=o-s,c=Math.abs(i-a);this.state.upperBound===l&&this.state.sliderLength===c&&this.state.thumbSize===s||this.setState({upperBound:l,sliderLength:c,thumbSize:s})},r.calcOffset=function(e){const t=this.props.max-this.props.min;return 0===t?0:(e-this.props.min)/t*this.state.upperBound},r.calcValue=function(e){return e/this.state.upperBound*(this.props.max-this.props.min)+this.props.min},r.calcOffsetFromPosition=function(e){const{slider:t}=this,r=t.getBoundingClientRect(),n=r[this.posMaxKey()],o=r[this.posMinKey()];let i=e-(window["page"+this.axisKey()+"Offset"]+(this.props.invert?n:o));return this.props.invert&&(i=this.state.sliderLength-i),i-=this.state.thumbSize/2,i},r.forceValueFromPosition=function(e,t){const r=this.calcOffsetFromPosition(e),n=this.getClosestIndex(r),o=Gp(this.calcValue(r),this.props),i=this.state.value.slice();i[n]=o;for(let e=0;e<i.length-1;e+=1)if(i[e+1]-i[e]<this.props.minDistance)return;this.fireChangeEvent("onBeforeChange"),this.hasMoved=!0,this.setState({value:i},(()=>{t(n),this.fireChangeEvent("onChange")}))},r.clearPendingResizeTimeouts=function(){do{const e=this.pendingResizeTimeouts.shift();clearTimeout(e)}while(this.pendingResizeTimeouts.length)},r.start=function(e,t){const r=this["thumb"+e];r&&r.focus();const{zIndices:n}=this.state;n.splice(n.indexOf(e),1),n.push(e),this.setState((r=>({startValue:r.value[e],startPosition:void 0!==t?t:r.startPosition,index:e,zIndices:n})))},r.moveUpByStep=function(e){void 0===e&&(e=this.props.step);const t=this.state.value[this.state.index],r=Gp(this.props.invert&&"horizontal"===this.props.orientation?t-e:t+e,this.props);this.move(Math.min(r,this.props.max))},r.moveDownByStep=function(e){void 0===e&&(e=this.props.step);const t=this.state.value[this.state.index],r=Gp(this.props.invert&&"horizontal"===this.props.orientation?t+e:t-e,this.props);this.move(Math.max(r,this.props.min))},r.move=function(e){const t=this.state.value.slice(),{index:r}=this.state,{length:n}=t,o=t[r];if(e===o)return;this.hasMoved||this.fireChangeEvent("onBeforeChange"),this.hasMoved=!0;const{pearling:i,max:a,min:s,minDistance:l}=this.props;if(!i){if(r>0){const n=t[r-1];e<n+l&&(e=n+l)}if(r<n-1){const n=t[r+1];e>n-l&&(e=n-l)}}t[r]=e,i&&n>1&&(e>o?(this.pushSucceeding(t,l,r),function(e,t,r,n){for(let o=0;o<e;o+=1){const i=n-o*r;t[e-1-o]>i&&(t[e-1-o]=i)}}(n,t,l,a)):e<o&&(this.pushPreceding(t,l,r),function(e,t,r,n){for(let o=0;o<e;o+=1){const e=n+o*r;t[o]<e&&(t[o]=e)}}(n,t,l,s))),this.setState({value:t},this.fireChangeEvent.bind(this,"onChange"))},r.pushSucceeding=function(e,t,r){let n,o;for(n=r,o=e[n]+t;null!==e[n+1]&&o>e[n+1];n+=1,o=e[n]+t)e[n+1]=Qp(o,this.props)},r.pushPreceding=function(e,t,r){for(let n=r,o=e[n]-t;null!==e[n-1]&&o<e[n-1];n-=1,o=e[n]-t)e[n-1]=Qp(o,this.props)},r.axisKey=function(){return"vertical"===this.props.orientation?"Y":"X"},r.orthogonalAxisKey=function(){return"vertical"===this.props.orientation?"X":"Y"},r.posMinKey=function(){return"vertical"===this.props.orientation?this.props.invert?"bottom":"top":this.props.invert?"right":"left"},r.posMaxKey=function(){return"vertical"===this.props.orientation?this.props.invert?"top":"bottom":this.props.invert?"left":"right"},r.sizeKey=function(){return"vertical"===this.props.orientation?"clientHeight":"clientWidth"},r.fireChangeEvent=function(e){this.props[e]&&this.props[e](qp(this.state.value),this.state.index)},r.buildThumbStyle=function(e,t){const r={position:"absolute",touchAction:"none",willChange:this.state.index>=0?this.posMinKey():void 0,zIndex:this.state.zIndices.indexOf(t)+1};return r[this.posMinKey()]=e+"px",r},r.buildTrackStyle=function(e,t){const r={position:"absolute",willChange:this.state.index>=0?this.posMinKey()+","+this.posMaxKey():void 0};return r[this.posMinKey()]=e,r[this.posMaxKey()]=t,r},r.buildMarkStyle=function(e){var t;return(t={position:"absolute"})[this.posMinKey()]=e,t},r.renderThumbs=function(e){const{length:t}=e,r=[];for(let n=0;n<t;n+=1)r[n]=this.buildThumbStyle(e[n],n);const n=[];for(let e=0;e<t;e+=1)n[e]=this.renderThumb(r[e],e);return n},r.renderTracks=function(e){const t=[],r=e.length-1;t.push(this.renderTrack(0,0,e[0]));for(let n=0;n<r;n+=1)t.push(this.renderTrack(n+1,e[n],e[n+1]));return t.push(this.renderTrack(r+1,e[r],this.state.upperBound)),t},r.renderMarks=function(){let{marks:e}=this.props;const t=this.props.max-this.props.min+1;return"boolean"==typeof e?e=Array.from({length:t}).map(((e,t)=>t)):"number"==typeof e&&(e=Array.from({length:t}).map(((e,t)=>t)).filter((t=>t%e==0))),e.map(parseFloat).sort(((e,t)=>e-t)).map((e=>{const t=this.calcOffset(e),r={key:e,className:this.props.markClassName,style:this.buildMarkStyle(t)};return this.props.renderMark(r)}))},r.render=function(){const e=[],{value:t}=this.state,r=t.length;for(let n=0;n<r;n+=1)e[n]=this.calcOffset(t[n],n);const n=this.props.withTracks?this.renderTracks(e):null,i=this.renderThumbs(e),a=this.props.marks?this.renderMarks():null;return o.createElement("div",{ref:e=>{this.slider=e,this.resizeElementRef.current=e},style:{position:"relative"},className:this.props.className+(this.props.disabled?" disabled":""),onMouseDown:this.onSliderMouseDown,onClick:this.onSliderClick},n,i,a)},t}(o.Component);Xp.displayName="ReactSlider",Xp.defaultProps={min:0,max:100,step:1,pageFn:e=>10*e,minDistance:0,defaultValue:0,orientation:"horizontal",className:"slider",thumbClassName:"thumb",thumbActiveClassName:"active",trackClassName:"track",markClassName:"mark",withTracks:!0,pearling:!1,disabled:!1,snapDragDisabled:!1,invert:!1,marks:[],renderThumb:e=>o.createElement("div",e),renderTrack:e=>o.createElement("div",e),renderMark:e=>o.createElement("span",e)};var Jp=Xp;const eg=F.div`
    isolation: isolate;
`,tg=F.div`
    margin-top: ${aa["spacing-8"]};
    display: flex;
    justify-content: space-between;
    gap: ${aa["spacing-8"]};
`,rg=F.div`
    margin-bottom: ${aa["spacing-8"]};
`,ng=F(_a.BodyBL)`
    overflow-wrap: anywhere;
`,og=F(Jp)`
    height: 0.875rem;
`,ig=F.div`
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

        background-color: ${ra.bg};
        box-shadow: ${la["sm-subtle"]};
        border: ${ia["width-010"]} ${ia.solid}
            ${e=>e.$disabled?ra["border-selected-disabled"]:ra["border-strong"]};
        border-radius: ${sa.full};
    }
`,ag=F.div`
    height: 0.875rem;
    width: 0.875rem;
    position: relative;
    outline: none;

    &:focus ${ig}:after {
        outline-offset: -1px;
        outline: ${ia["width-040"]} ${ia.solid}
            ${ra["border-selected"]};
    }
`,sg=F.div`
    height: 0.25rem;
    top: 50%;
    transform: translateY(-50%);
    border-radius: ${sa.full};

    background: ${e=>e.$color&&"function"==typeof e.$color?e.$color(e):e.$color||ra["border-strong"](e)};
`,lg=r=>{var{value:n,min:o=0,max:i=100,step:a=1,minRange:s,numOfThumbs:l=2,colors:d,disabled:u,readOnly:h,ariaLabels:f,showSliderLabels:p,sliderLabelPrefix:m,sliderLabelSuffix:b,showIndicatorLabel:v,indicatorLabelPrefix:y,indicatorLabelSuffix:x,renderSliderLabel:w,onChange:$,onChangeEnd:C}=r,S=ct(r,["value","min","max","step","minRange","numOfThumbs","colors","disabled","readOnly","ariaLabels","showSliderLabels","sliderLabelPrefix","sliderLabelSuffix","showIndicatorLabel","indicatorLabelPrefix","indicatorLabelSuffix","renderSliderLabel","onChange","onChangeEnd"]);const[D,k]=g(F()),E=function(){const e=function(){const e=u||h?ra["border-disabled"]:ra["border-strong"],t=u||h?ra["border-selected-disabled"]:ra["border-selected"];if(1===l)return[t,e];const r=[];r.push(e);for(let e=0;e<l-1;e++)r.push(t);return r.push(e),r}();return new Array(l+1).fill(0).map(((t,r)=>(null==d?void 0:d[r])||e[r]))}();c((()=>{n!==D&&k(F())}),[n]);function F(){if(n&&n.length===l)return n;const e=[];for(let t=0;t<l;t++)e.push(o+a*t);return e}const O=e=>w?w(e):t(ng,{children:[m,e,b]});return t(eg,Object.assign({},S,{children:[v&&e(rg,{children:(()=>{let e="";if(1===D.length)e=`${D[0]}`;else if(2===D.length)e=`${D[0]} - ${D[1]}`;else if(D.length>2){e=`${Math.min(...D)} - ${Math.max(...D)}`}return t(ng,{children:[y,e,x]})})()}),e(og,{step:a,min:o,max:i,value:D,disabled:u||h,onChange:(e,t)=>{if("number"==typeof e){const t=[e];k(t),null==$||$(t)}else{if(t>-1&&D[t]===e[t])return;const r=[...e];k(r),null==$||$(r)}},onAfterChange:e=>{if("number"==typeof e){const t=[e];k(t),null==C||C(t)}else{const t=[...e];k(t),null==C||C(t)}},minDistance:s,ariaLabel:f,renderThumb:(t,r)=>e(ag,Object.assign({"data-testid":`slider-thumb-${r.index}`},t,{tabIndex:u?void 0:t.tabIndex,children:e(ig,{$disabled:u,$readOnly:h})})),renderTrack:(t,r)=>e(sg,Object.assign({"data-testid":`slider-track-${r.index}`},t,{$color:E[r.index]}))}),p&&t(tg,{children:[e("div",{children:O(o)}),e("div",{children:O(i)})]})]}))},cg=F.div`
    display: flex;
    margin-bottom: ${aa["spacing-16"]};
    align-items: baseline;
`,dg=F.div`
    margin: 0 0.5rem;
`,ug=F.div`
    width: 100%;
    height: 4rem;
    display: flex;
    align-items: flex-end;
    padding: 0 0.4375rem;
`,hg=F.div`
    flex: 1;
    border-radius: ${sa.sm} ${sa.sm} 0 0;
    border: 0.5px solid transparent; // space between bars
    background-clip: content-box;

    ${e=>{let t=ra["bg-strongest"];return e.$disabled&&e.$selected?t=ra["bg-selected-stronger-disabled"]:e.$disabled?t=ra["bg-disabled"]:e.$selected&&(t=ra["bg-selected-stronger"]),O`
            background-color: ${t};
        `}}
`,fg=F(lg)`
    margin-top: -0.3125rem;
`,pg=n=>{var{bins:o=[],interval:i,disabled:s,readOnly:l,value:d,showRangeLabels:u,rangeLabelPrefix:h,rangeLabelSuffix:f,ariaLabels:p,onChange:m,onChangeEnd:b,renderEmptyView:v,renderRangeLabel:y}=n,x=ct(n,["bins","interval","disabled","readOnly","value","showRangeLabels","rangeLabelPrefix","rangeLabelSuffix","ariaLabels","onChange","onChangeEnd","renderEmptyView","renderRangeLabel"]);const w=o.map((e=>e.count)),$=Math.max(...w),C=o.map((e=>e.minValue)),S=Math.max(...C),D=Math.min(...C),[k,E]=g(T()),F=a((()=>{const e=[...o].sort(((e,t)=>e.minValue-t.minValue)),t=(S-D)/i+1,r=[];for(let n=0;n<t;n++){const t=e.find((e=>e.minValue===D+i*n));t?r.push(t):r.push({count:0,minValue:D+i*n})}return r}),[o,i]);c((()=>{d!==k&&E(T())}),[d]);const O=e=>{const[t,r]=e,n=[t,r];E(n),null==m||m(n)},_=e=>{const[t,r]=e,n=[t,r];E(n),null==b||b(n)};function T(){return null!=d?d:[D,D+i]}const I=e=>y?y(e):t(_a.BodyBL,{children:[h,e,f]});return t("div",Object.assign({},x,{children:[u&&t(cg,{children:[I(k[0]),e(dg,{children:"-"}),I(k[1])]}),F.every((e=>0===e.count))&&v?v():t(r,{children:[e(ug,{children:F.map(((t,r)=>{const n=t.count/$;return e(hg,{style:{height:n?`calc(calc(100% - 0.25rem) * ${n} + 0.25rem)`:0},$selected:t.minValue>=k[0]&&t.minValue<k[1],$disabled:s||l},r)}))}),e(fg,{min:D,max:S+i,step:i,minRange:i,numOfThumbs:2,value:k,disabled:s,readOnly:l,ariaLabels:p,onChange:O,onChangeEnd:_})]})]}))},gg=F(Yf)`
    width: 100%;
    height: calc(3rem - 2px); // exclude top and bottom borders

    ${e=>"no-border"!==e.$styleType&&O`
            padding-left: ${e.$visuallyReadOnly?0:aa["spacing-16"]};
            padding-right: ${e.$visuallyReadOnly||e.$showClear?0:aa["spacing-16"]};
        `}
`,mg=F(Vf)`
    height: auto;
    padding: ${aa["spacing-12"]} ${aa["spacing-16"]};

    cursor: pointer;
    color: ${ra.icon};

    ${e=>"no-border"===e.$styleType&&O`
            margin-right: -${aa["spacing-12"]};
        `}
`,bg=F(P)`
    height: 1.25rem;
    width: 1.25rem;
    vertical-align: middle;
`,vg=F.div`
    display: flex;
    width: 100%;
`,yg=F(Wf)`
    display: flex;
    align-items: center;
    width: 100%;
`,xg=o.forwardRef(((n,o)=>{var{value:i,spacing:a,type:l,error:c,disabled:d,readOnly:u,onChange:f,onClear:p,allowClear:g=!1,className:m,styleType:b="bordered"}=n,v=ct(n,["value","spacing","type","error","disabled","readOnly","onChange","onClear","allowClear","className","styleType"]);const y=((e,t)=>"tel"===e&&!!t)(l,a),x=s(null);h(o,(()=>x.current),[]);const w=Ad({ref:x,formatter:e=>y?_d.transformWithSpaces(e,a):e}),$=e=>{f&&(y?S(e):f(e))},C=()=>{p&&p(),x&&x.current&&x.current.focus()},S=e=>{const t=w();if(!t)return;const{nextValue:r,updateCaretPosition:n}=t,o=r.replace(/\s/g,"");e.target.value=o,null==f||f(e),n()},D=i?(e=>e?y?_d.transformWithSpaces(e,a):e:"")(i):i,k=g&&!d&&!u&&!!i,E=()=>t(r,{children:[e(gg,Object.assign({"data-testid":"input",ref:x,"aria-disabled":d,value:D,onChange:$,type:l,readOnly:u||d,$showClear:k,$styleType:b,$visuallyReadOnly:u},v)),k&&e(mg,{onClick:C,type:"button","aria-label":"Clear input",$styleType:b,children:e(bg,{"aria-hidden":!0})})]});return e(r,{children:"no-border"===b?e(vg,{className:m,children:E()}):e(yg,{$disabled:d,$error:c,$readOnly:u,className:m,children:E()})})})),wg=o.forwardRef(((t,r)=>{const{label:n,errorMessage:o,id:i,"data-error-testid":a,"data-testid":s,layoutType:l,mobileCols:c,tabletCols:d,desktopCols:u,xxsCols:h,xsCols:f,smCols:p,mdCols:m,lgCols:b,xlCols:v,xxlCols:y}=t,x=ct(t,["label","errorMessage","id","data-error-testid","data-testid","layoutType","mobileCols","tabletCols","desktopCols","xxsCols","xsCols","smCols","mdCols","lgCols","xlCols","xxlCols"]),[w]=g((()=>`form-field-${Od.generate()}`)),$=null!=i?i:w;return e(Gu,{id:$,"data-testid":s,label:n,errorMessage:o,disabled:x.disabled,"data-error-testid":a,layoutType:l,mobileCols:c,tabletCols:d,desktopCols:u,xxsCols:h,xsCols:f,smCols:p,mdCols:m,lgCols:b,xlCols:v,xxlCols:y,children:e(xg,Object.assign({id:`${$}-base`,"data-testid":s?`${s}-base`:void 0,ref:r,error:!!o},x))})})),$g=F.div`
    font-weight: ${e=>e.$bold?na.Spec["weight-semibold"]:na.Spec["weight-regular"]};

    ${e=>e.$disabled?O`
                color: ${ra["text-disabled"]};
            `:e.$selected?O`
                color: ${ra["text-selected"]};
            `:O`
                color: ${ra.text};
            `}
    width: 100%;

    ${e=>"end"===e.$truncateType&&Ca(e.$maxLines||2)}
    overflow-wrap: break-word;
`,Cg=F.div`
    color: ${ra["text-subtlest"]};
    width: 100%;

    ${e=>"end"===e.$truncateType&&Ca(e.$maxLines||2)}
    overflow-wrap: break-word;

    ${e=>"next-line"===e.$labelDisplayType?O`
                    ${na["body-md-semibold"]}
                `:O`
                    ${na["body-baseline-regular"]}
                `}
`,Sg=F.span`
    font-weight: ${na.Spec["weight-semibold"]};
`,Dg=F.div`
    text-align: left;
    width: 100%;
    overflow: hidden;
    overflow-wrap: break-word;

    ${e=>"small"===e.$variant?na["body-md-regular"]:na["body-baseline-regular"]}

    ${e=>{switch(e.$labelDisplayType){case"next-line":return O`
                    display: flex;
                    flex-direction: column;
                `;case"inline":return O`
                    ${$g} {
                        display: inline;
                    }

                    ${Cg} {
                        display: inline;
                        margin-left: 0.5rem;
                    }
                `}}}
`,kg=F.div`
    display: inline-block;
    width: ${e=>1===e.$maxLines?50:100}%;
    height: 1lh;
    word-break: break-all;
    overflow: hidden;
`,Eg=F.div`
    display: inline-block;
    width: ${e=>1===e.$maxLines?50:100}%;
    height: 1lh;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    direction: rtl;
    text-align: right;
`,Fg=({bold:n,displayType:o="inline",label:i,searchTerm:s,maxLines:l=2,selected:c,disabled:u,sublabel:h,truncationType:f="middle",variant:p="default"})=>{const g=b(T),m="small"===p?na.Spec["body-size-md"]({theme:g}):na.Spec["body-size-baseline"]({theme:g}),v=na.Spec["font-family"]({theme:g}),{ref:y,width:x}=nd(),w=d((e=>{if("inline"!==o||!x)return!1;return _d.getTextWidth(e,`${m} '${v}'`)>x*l-50}),[x,o,m,v,l]),$=a((()=>w(i)),[w,i]),C=a((()=>h&&w(h)),[w,h]),S=n=>{if(!s)return n;const o=s.toLowerCase().trim(),a=n.toLowerCase().indexOf(o),l=a+s.length;return-1===a?n:t(r,{children:[i.slice(0,a),e(Sg,{$variant:p,children:i.slice(a,l)}),i.slice(l)]})},D=n=>t(r,{children:[e(kg,{$maxLines:l,"aria-hidden":!0,children:S(n)}),e(Eg,{$maxLines:l,"aria-hidden":!0,children:S(n)})]});return t(Dg,{ref:y,$labelDisplayType:$||C?"next-line":o,$variant:p,children:[e($g,{"aria-label":i,$bold:n,$maxLines:l,$selected:c,$disabled:u,$truncateType:f,children:"middle"===f&&$?D(i):S(i)}),h&&e(Cg,{"aria-label":h,$maxLines:l,$truncateType:f,$labelDisplayType:o,children:"middle"===f&&C?D(h):h})]})};var Og=qn;var _g=function(e){var t=this.__data__,r=t.delete(e);return this.size=t.size,r};var Tg=function(e){return this.__data__.get(e)};var Ig=function(e){return this.__data__.has(e)},Mg=qn,Ag=Zn,Bg=mo;var jg=function(e,t){var r=this.__data__;if(r instanceof Mg){var n=r.__data__;if(!Ag||n.length<199)return n.push([e,t]),this.size=++r.size,this;r=this.__data__=new Bg(n)}return r.set(e,t),this.size=r.size,this},zg=qn,Rg=function(){this.__data__=new Og,this.size=0},Lg=_g,Pg=Tg,Ng=Ig,Wg=jg;function Hg(e){var t=this.__data__=new zg(e);this.size=t.size}Hg.prototype.clear=Rg,Hg.prototype.delete=Lg,Hg.prototype.get=Pg,Hg.prototype.has=Ng,Hg.prototype.set=Wg;var Yg=Hg;var Vg=mo,Ug=function(e){return this.__data__.set(e,"__lodash_hash_undefined__"),this},Kg=function(e){return this.__data__.has(e)};function qg(e){var t=-1,r=null==e?0:e.length;for(this.__data__=new Vg;++t<r;)this.add(e[t])}qg.prototype.add=qg.prototype.push=Ug,qg.prototype.has=Kg;var Zg=function(e,t){return e.has(t)},Gg=qg,Qg=function(e,t){for(var r=-1,n=null==e?0:e.length;++r<n;)if(t(e[r],r,e))return!0;return!1},Xg=Zg;var Jg=function(e,t,r,n,o,i){var a=1&r,s=e.length,l=t.length;if(s!=l&&!(a&&l>s))return!1;var c=i.get(e),d=i.get(t);if(c&&d)return c==t&&d==e;var u=-1,h=!0,f=2&r?new Gg:void 0;for(i.set(e,t),i.set(t,e);++u<s;){var p=e[u],g=t[u];if(n)var m=a?n(g,p,u,t,e,i):n(p,g,u,e,t,i);if(void 0!==m){if(m)continue;h=!1;break}if(f){if(!Qg(t,(function(e,t){if(!Xg(f,t)&&(p===e||o(p,e,r,n,i)))return f.push(t)}))){h=!1;break}}else if(p!==g&&!o(p,g,r,n,i)){h=!1;break}}return i.delete(e),i.delete(t),h};var em=function(e){var t=-1,r=Array(e.size);return e.forEach((function(e,n){r[++t]=[n,e]})),r};var tm=function(e){var t=-1,r=Array(e.size);return e.forEach((function(e){r[++t]=e})),r},rm=br.Uint8Array,nm=_n,om=Jg,im=em,am=tm,sm=vr?vr.prototype:void 0,lm=sm?sm.valueOf:void 0;var cm=function(e,t,r,n,o,i,a){switch(r){case"[object DataView]":if(e.byteLength!=t.byteLength||e.byteOffset!=t.byteOffset)return!1;e=e.buffer,t=t.buffer;case"[object ArrayBuffer]":return!(e.byteLength!=t.byteLength||!i(new rm(e),new rm(t)));case"[object Boolean]":case"[object Date]":case"[object Number]":return nm(+e,+t);case"[object Error]":return e.name==t.name&&e.message==t.message;case"[object RegExp]":case"[object String]":return e==t+"";case"[object Map]":var s=im;case"[object Set]":var l=1&n;if(s||(s=am),e.size!=t.size&&!l)return!1;var c=a.get(e);if(c)return c==t;n|=2,a.set(e,t);var d=om(s(e),s(t),n,o,i,a);return a.delete(e),d;case"[object Symbol]":if(lm)return lm.call(e)==lm.call(t)}return!1};var dm=function(e,t){for(var r=-1,n=t.length,o=e.length;++r<n;)e[o+r]=t[r];return e},um=dm,hm=fr;var fm=function(e,t,r){var n=t(e);return hm(e)?n:um(n,r(e))};var pm=function(e,t){for(var r=-1,n=null==e?0:e.length,o=0,i=[];++r<n;){var a=e[r];t(a,r,e)&&(i[o++]=a)}return i},gm=function(){return[]},mm=Object.prototype.propertyIsEnumerable,bm=Object.getOwnPropertySymbols,vm=bm?function(e){return null==e?[]:(e=Object(e),pm(bm(e),(function(t){return mm.call(e,t)})))}:gm;var ym=function(e,t){for(var r=-1,n=Array(e);++r<e;)n[r]=t(r);return n},xm=Or,wm=_r;var $m=function(e){return wm(e)&&"[object Arguments]"==xm(e)},Cm=_r,Sm=Object.prototype,Dm=Sm.hasOwnProperty,km=Sm.propertyIsEnumerable,Em=$m(function(){return arguments}())?$m:function(e){return Cm(e)&&Dm.call(e,"callee")&&!km.call(e,"callee")},Fm={exports:{}};var Om=function(){return!1};!function(e,t){var r=br,n=Om,o=t&&!t.nodeType&&t,i=o&&e&&!e.nodeType&&e,a=i&&i.exports===o?r.Buffer:void 0,s=(a?a.isBuffer:void 0)||n;e.exports=s}(Fm,Fm.exports);var _m=Fm.exports,Tm=/^(?:0|[1-9]\d*)$/;var Im=function(e,t){var r=typeof e;return!!(t=null==t?9007199254740991:t)&&("number"==r||"symbol"!=r&&Tm.test(e))&&e>-1&&e%1==0&&e<t};var Mm=function(e){return"number"==typeof e&&e>-1&&e%1==0&&e<=9007199254740991},Am=Or,Bm=Mm,jm=_r,zm={};zm["[object Float32Array]"]=zm["[object Float64Array]"]=zm["[object Int8Array]"]=zm["[object Int16Array]"]=zm["[object Int32Array]"]=zm["[object Uint8Array]"]=zm["[object Uint8ClampedArray]"]=zm["[object Uint16Array]"]=zm["[object Uint32Array]"]=!0,zm["[object Arguments]"]=zm["[object Array]"]=zm["[object ArrayBuffer]"]=zm["[object Boolean]"]=zm["[object DataView]"]=zm["[object Date]"]=zm["[object Error]"]=zm["[object Function]"]=zm["[object Map]"]=zm["[object Number]"]=zm["[object Object]"]=zm["[object RegExp]"]=zm["[object Set]"]=zm["[object String]"]=zm["[object WeakMap]"]=!1;var Rm=function(e){return jm(e)&&Bm(e.length)&&!!zm[Am(e)]};var Lm=function(e){return function(t){return e(t)}},Pm={exports:{}};!function(e,t){var r=pr,n=t&&!t.nodeType&&t,o=n&&e&&!e.nodeType&&e,i=o&&o.exports===n&&r.process,a=function(){try{var e=o&&o.require&&o.require("util").types;return e||i&&i.binding&&i.binding("util")}catch(e){}}();e.exports=a}(Pm,Pm.exports);var Nm=Pm.exports,Wm=Rm,Hm=Lm,Ym=Nm&&Nm.isTypedArray,Vm=Ym?Hm(Ym):Wm,Um=ym,Km=Em,qm=fr,Zm=_m,Gm=Im,Qm=Vm,Xm=Object.prototype.hasOwnProperty;var Jm=function(e,t){var r=qm(e),n=!r&&Km(e),o=!r&&!n&&Zm(e),i=!r&&!n&&!o&&Qm(e),a=r||n||o||i,s=a?Um(e.length,String):[],l=s.length;for(var c in e)!t&&!Xm.call(e,c)||a&&("length"==c||o&&("offset"==c||"parent"==c)||i&&("buffer"==c||"byteLength"==c||"byteOffset"==c)||Gm(c,l))||s.push(c);return s},eb=Object.prototype;var tb=function(e){var t=e&&e.constructor;return e===("function"==typeof t&&t.prototype||eb)};var rb=function(e,t){return function(r){return e(t(r))}}(Object.keys,Object),nb=tb,ob=rb,ib=Object.prototype.hasOwnProperty;var ab=function(e){if(!nb(e))return ob(e);var t=[];for(var r in Object(e))ib.call(e,r)&&"constructor"!=r&&t.push(r);return t},sb=Hr,lb=Mm;var cb=function(e){return null!=e&&lb(e.length)&&!sb(e)},db=Jm,ub=ab,hb=cb;var fb=function(e){return hb(e)?db(e):ub(e)},pb=fm,gb=vm,mb=fb;var bb=function(e){return pb(e,mb,gb)},vb=Object.prototype.hasOwnProperty;var yb=function(e,t,r,n,o,i){var a=1&r,s=bb(e),l=s.length;if(l!=bb(t).length&&!a)return!1;for(var c=l;c--;){var d=s[c];if(!(a?d in t:vb.call(t,d)))return!1}var u=i.get(e),h=i.get(t);if(u&&h)return u==t&&h==e;var f=!0;i.set(e,t),i.set(t,e);for(var p=a;++c<l;){var g=e[d=s[c]],m=t[d];if(n)var b=a?n(m,g,d,t,e,i):n(g,m,d,e,t,i);if(!(void 0===b?g===m||o(g,m,r,n,i):b)){f=!1;break}p||(p="constructor"==d)}if(f&&!p){var v=e.constructor,y=t.constructor;v==y||!("constructor"in e)||!("constructor"in t)||"function"==typeof v&&v instanceof v&&"function"==typeof y&&y instanceof y||(f=!1)}return i.delete(e),i.delete(t),f},xb=cn(br,"DataView"),wb=Zn,$b=cn(br,"Promise"),Cb=cn(br,"Set"),Sb=cn(br,"WeakMap"),Db=Or,kb=qr,Eb="[object Map]",Fb="[object Promise]",Ob="[object Set]",_b="[object WeakMap]",Tb="[object DataView]",Ib=kb(xb),Mb=kb(wb),Ab=kb($b),Bb=kb(Cb),jb=kb(Sb),zb=Db;(xb&&zb(new xb(new ArrayBuffer(1)))!=Tb||wb&&zb(new wb)!=Eb||$b&&zb($b.resolve())!=Fb||Cb&&zb(new Cb)!=Ob||Sb&&zb(new Sb)!=_b)&&(zb=function(e){var t=Db(e),r="[object Object]"==t?e.constructor:void 0,n=r?kb(r):"";if(n)switch(n){case Ib:return Tb;case Mb:return Eb;case Ab:return Fb;case Bb:return Ob;case jb:return _b}return t});var Rb=zb,Lb=Yg,Pb=Jg,Nb=cm,Wb=yb,Hb=Rb,Yb=fr,Vb=_m,Ub=Vm,Kb="[object Arguments]",qb="[object Array]",Zb="[object Object]",Gb=Object.prototype.hasOwnProperty;var Qb=function(e,t,r,n,o,i){var a=Yb(e),s=Yb(t),l=a?qb:Hb(e),c=s?qb:Hb(t),d=(l=l==Kb?Zb:l)==Zb,u=(c=c==Kb?Zb:c)==Zb,h=l==c;if(h&&Vb(e)){if(!Vb(t))return!1;a=!0,d=!1}if(h&&!d)return i||(i=new Lb),a||Ub(e)?Pb(e,t,r,n,o,i):Nb(e,t,l,r,n,o,i);if(!(1&r)){var f=d&&Gb.call(e,"__wrapped__"),p=u&&Gb.call(t,"__wrapped__");if(f||p){var g=f?e.value():e,m=p?t.value():t;return i||(i=new Lb),o(g,m,r,n,i)}}return!!h&&(i||(i=new Lb),Wb(e,t,r,n,o,i))},Xb=_r;var Jb=function e(t,r,n,o,i){return t===r||(null==t||null==r||!Xb(t)&&!Xb(r)?t!=t&&r!=r:Qb(t,r,n,o,e,i))},ev=Yg,tv=Jb;var rv=function(e,t,r,n){var o=r.length,i=o,a=!n;if(null==e)return!i;for(e=Object(e);o--;){var s=r[o];if(a&&s[2]?s[1]!==e[s[0]]:!(s[0]in e))return!1}for(;++o<i;){var l=(s=r[o])[0],c=e[l],d=s[1];if(a&&s[2]){if(void 0===c&&!(l in e))return!1}else{var u=new ev;if(n)var h=n(c,d,l,e,t,u);if(!(void 0===h?tv(d,c,3,n,u):h))return!1}}return!0},nv=Lr;var ov=function(e){return e==e&&!nv(e)},iv=ov,av=fb;var sv=function(e){for(var t=av(e),r=t.length;r--;){var n=t[r],o=e[n];t[r]=[n,o,iv(o)]}return t};var lv=function(e,t){return function(r){return null!=r&&(r[e]===t&&(void 0!==t||e in Object(r)))}},cv=rv,dv=sv,uv=lv;var hv=function(e,t){return null!=e&&t in Object(e)},fv=Bo,pv=Em,gv=fr,mv=Im,bv=Mm,vv=zo;var yv=function(e,t,r){for(var n=-1,o=(t=fv(t,e)).length,i=!1;++n<o;){var a=vv(t[n]);if(!(i=null!=e&&r(e,a)))break;e=e[a]}return i||++n!=o?i:!!(o=null==e?0:e.length)&&bv(o)&&mv(a,o)&&(gv(e)||pv(e))},xv=hv,wv=yv;var $v=Jb,Cv=Wo,Sv=function(e,t){return null!=e&&wv(e,t,xv)},Dv=Rr,kv=ov,Ev=lv,Fv=zo;var Ov=function(e){return function(t){return null==t?void 0:t[e]}},_v=Po;var Tv=Ov,Iv=function(e){return function(t){return _v(t,e)}},Mv=Rr,Av=zo;var Bv=function(e){var t=dv(e);return 1==t.length&&t[0][2]?uv(t[0][0],t[0][1]):function(r){return r===e||cv(r,e,t)}},jv=function(e,t){return Dv(e)&&kv(t)?Ev(Fv(e),t):function(r){var n=Cv(r,e);return void 0===n&&n===t?Sv(r,e):$v(t,n,3)}},zv=function(e){return e},Rv=fr,Lv=function(e){return Mv(e)?Tv(Av(e)):Iv(e)};var Pv=function(e){return"function"==typeof e?e:null==e?zv:"object"==typeof e?Rv(e)?jv(e[0],e[1]):Bv(e):Lv(e)},Nv=Pv,Wv=cb,Hv=fb;var Yv=function(e){return function(t,r,n){var o=Object(t);if(!Wv(t)){var i=Nv(r);t=Hv(t),r=function(e){return i(o[e],e,o)}}var a=e(t,r,n);return a>-1?o[i?t[a]:a]:void 0}};var Vv=/\s/;var Uv=function(e){for(var t=e.length;t--&&Vv.test(e.charAt(t)););return t},Kv=/^\s+/;var qv=function(e){return e?e.slice(0,Uv(e)+1).replace(Kv,""):e},Zv=Lr,Gv=Mr,Qv=/^[-+]0x[0-9a-f]+$/i,Xv=/^0b[01]+$/i,Jv=/^0o[0-7]+$/i,ey=parseInt;var ty=function(e){if("number"==typeof e)return e;if(Gv(e))return NaN;if(Zv(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=Zv(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=qv(e);var r=Xv.test(e);return r||Jv.test(e)?ey(e.slice(2),r?2:8):Qv.test(e)?NaN:+e},ry=ty,ny=1/0;var oy=function(e){return e?(e=ry(e))===ny||e===-1/0?17976931348623157e292*(e<0?-1:1):e==e?e:0:0===e?e:0};var iy=function(e,t,r,n){for(var o=e.length,i=r+(n?1:-1);n?i--:++i<o;)if(t(e[i],i,e))return i;return-1},ay=Pv,sy=function(e){var t=oy(e),r=t%1;return t==t?r?t-r:t:0},ly=Math.max;var cy=function(e,t,r){var n=null==e?0:e.length;if(!n)return-1;var o=null==r?0:sy(r);return o<0&&(o=ly(n+o,0)),iy(e,ay(t),o)},dy=ze(cy),uy=ze(Yv(cy)),hy=Jb;var fy=ze((function(e,t){return hy(e,t)}));function py(e){return()=>e}function gy(e){e()}function my(e,t){return r=>e(t(r))}function by(e,t){return()=>e(t)}function vy(e,t){return r=>e(t,r)}function yy(e){return void 0!==e}function xy(){}function wy(e,t){return t(e),e}function $y(e,t){return t(e)}function Cy(...e){return e}function Sy(e,t){return e(1,t)}function Dy(e,t){e(0,t)}function ky(e){e(2)}function Ey(e){return e(4)}function Fy(e,t){return Sy(e,vy(t,0))}function Oy(e,t){const r=e(1,(e=>{r(),t(e)}));return r}function _y(e){let t,r;return n=>o=>{t=o,r&&clearTimeout(r),r=setTimeout((()=>{n(t)}),e)}}function Ty(e,t){return e===t}function Iy(e=Ty){let t;return r=>n=>{e(t,n)||(t=n,r(n))}}function My(e){return t=>r=>{e(r)&&t(r)}}function Ay(e){return t=>my(t,e)}function By(e){return t=>()=>{t(e)}}function jy(e,...t){const r=function(...e){return t=>e.reduceRight($y,t)}(...t);return(t,n)=>{switch(t){case 2:return void ky(e);case 1:return Sy(e,r(n))}}}function zy(e,t){return r=>n=>{r(t=e(t,n))}}function Ry(e){return t=>r=>{e>0?e--:t(r)}}function Ly(e){let t,r=null;return n=>o=>{r=o,!t&&(t=setTimeout((()=>{t=void 0,n(r)}),e))}}function Py(...e){const t=new Array(e.length);let r=0,n=null;const o=Math.pow(2,e.length)-1;return e.forEach(((e,i)=>{const a=Math.pow(2,i);Sy(e,(e=>{const s=r;r|=a,t[i]=e,s!==o&&r===o&&n&&(n(),n=null)}))})),e=>i=>{const a=()=>{e([i].concat(t))};r===o?a():n=a}}function Ny(e){let t=e;const r=Hy();return(e,n)=>{switch(e){case 0:t=n;break;case 1:n(t);break;case 4:return t}return r(e,n)}}function Wy(e,t){return wy(Ny(t),(t=>Fy(e,t)))}function Hy(){const e=[];return(t,r)=>{switch(t){case 0:return void e.slice().forEach((e=>{e(r)}));case 2:return void e.splice(0,e.length);case 1:return e.push(r),()=>{const t=e.indexOf(r);t>-1&&e.splice(t,1)}}}}function Yy(e){return wy(Hy(),(t=>Fy(e,t)))}function Vy(e,t=[],{singleton:r}={singleton:!0}){return{constructor:e,dependencies:t,id:Uy(),singleton:r}}const Uy=()=>Symbol();function Ky(...e){const t=Hy(),r=new Array(e.length);let n=0;const o=Math.pow(2,e.length)-1;return e.forEach(((e,i)=>{const a=Math.pow(2,i);Sy(e,(e=>{r[i]=e,n|=a,n===o&&Dy(t,r)}))})),function(e,i){switch(e){case 2:return void ky(t);case 1:return n===o&&i(r),Sy(t,i)}}}function qy(e,t=Ty){return jy(e,Iy(t))}function Zy(...e){return function(t,r){switch(t){case 2:return;case 1:return function(...e){return()=>{e.map(gy)}}(...e.map((e=>Sy(e,r))))}}}var Gy=(e=>(e[e.DEBUG=0]="DEBUG",e[e.INFO=1]="INFO",e[e.WARN=2]="WARN",e[e.ERROR=3]="ERROR",e))(Gy||{});const Qy={0:"debug",3:"error",1:"log",2:"warn"},Xy=Vy((()=>{const e=Ny(3);return{log:Ny(((t,r,n=1)=>{var o;n>=(null!=(o=(typeof globalThis>"u"?window:globalThis).VIRTUOSO_LOG_LEVEL)?o:Ey(e))&&console[Qy[n]]("%creact-virtuoso: %c%s %o","color: #0253b3; font-weight: bold","color: initial",t,r)})),logLevel:e}}),[],{singleton:!0});function Jy(e,t,r){return ex(e,t,r).callbackRef}function ex(e,t,r){const n=o.useRef(null);let i=e=>{};if(typeof ResizeObserver<"u"){const a=o.useMemo((()=>new ResizeObserver((t=>{const n=()=>{const r=t[0].target;null!==r.offsetParent&&e(r)};r?n():requestAnimationFrame(n)}))),[e]);i=e=>{e&&t?(a.observe(e),n.current=e):(n.current&&a.unobserve(n.current),n.current=null)}}return{callbackRef:i,ref:n}}function tx(e,t,r,n,i,a,s,l,c){const d=o.useCallback((r=>{const o=function(e,t,r,n){const o=e.length;if(0===o)return null;const i=[];for(let a=0;a<o;a++){const o=e.item(a);if(void 0===o.dataset.index)continue;const s=parseInt(o.dataset.index),l=parseFloat(o.dataset.knownSize),c=t(o,r);if(0===c&&n("Zero-sized element, this should not happen",{child:o},Gy.ERROR),c===l)continue;const d=i[i.length-1];0===i.length||d.size!==c||d.endIndex!==s-1?i.push({endIndex:s,size:c,startIndex:s}):i[i.length-1].endIndex++}return i}(r.children,t,l?"offsetWidth":"offsetHeight",i);let c=r.parentElement;for(;!c.dataset.virtuosoScroller;)c=c.parentElement;const d="window"===c.lastElementChild.dataset.viewportType,u=s?l?s.scrollLeft:s.scrollTop:d?l?window.pageXOffset||document.documentElement.scrollLeft:window.pageYOffset||document.documentElement.scrollTop:l?c.scrollLeft:c.scrollTop,h=s?l?s.scrollWidth:s.scrollHeight:d?l?document.documentElement.scrollWidth:document.documentElement.scrollHeight:l?c.scrollWidth:c.scrollHeight,f=s?l?s.offsetWidth:s.offsetHeight:d?l?window.innerWidth:window.innerHeight:l?c.offsetWidth:c.offsetHeight;n({scrollHeight:h,scrollTop:Math.max(u,0),viewportHeight:f}),null==a||a(l?rx("column-gap",getComputedStyle(r).columnGap,i):rx("row-gap",getComputedStyle(r).rowGap,i)),null!==o&&e(o)}),[e,t,i,a,s,n]);return ex(d,r,c)}function rx(e,t,r){return"normal"!==t&&!(null!=t&&t.endsWith("px"))&&r(`${e} was not resolved to pixel value correctly`,t,Gy.WARN),"normal"===t?0:parseInt(null!=t?t:"0",10)}function nx(e,t,r){const n=o.useRef(null),i=o.useCallback((r=>{if(null==r||!r.offsetParent)return;const o=r.getBoundingClientRect(),i=o.width;let a,s;if(t){const e=t.getBoundingClientRect(),r=o.top-e.top;s=e.height-Math.max(0,r),a=r+t.scrollTop}else s=window.innerHeight-Math.max(0,o.top),a=o.top+window.pageYOffset;n.current={offsetTop:a,visibleHeight:s,visibleWidth:i},e(n.current)}),[e,t]),{callbackRef:a,ref:s}=ex(i,!0,r),l=o.useCallback((()=>{i(s.current)}),[i,s]);return o.useEffect((()=>{if(t){t.addEventListener("scroll",l);const e=new ResizeObserver((()=>{requestAnimationFrame(l)}));return e.observe(t),()=>{t.removeEventListener("scroll",l),e.unobserve(t)}}return window.addEventListener("scroll",l),window.addEventListener("resize",l),()=>{window.removeEventListener("scroll",l),window.removeEventListener("resize",l)}}),[l,t]),a}const ox=Vy((()=>{const e=Hy(),t=Hy(),r=Ny(0),n=Hy(),o=Ny(0),i=Hy(),a=Hy(),s=Ny(0),l=Ny(0),c=Ny(0),d=Ny(0),u=Hy(),h=Hy(),f=Ny(!1),p=Ny(!1),g=Ny(!1);return Fy(jy(e,Ay((({scrollTop:e})=>e))),t),Fy(jy(e,Ay((({scrollHeight:e})=>e))),a),Fy(t,o),{deviation:r,fixedFooterHeight:c,fixedHeaderHeight:l,footerHeight:d,headerHeight:s,horizontalDirection:p,scrollBy:h,scrollContainerState:e,scrollHeight:a,scrollingInProgress:f,scrollTo:u,scrollTop:t,skipAnimationFrameInResizeObserver:g,smoothScrollTargetReached:n,statefulScrollTop:o,viewportHeight:i}}),[],{singleton:!0}),ix={lvl:0};function ax(e,t){const r=e.length;if(0===r)return[];let{index:n,value:o}=t(e[0]);const i=[];for(let a=1;a<r;a++){const{index:r,value:s}=t(e[a]);i.push({end:r-1,start:n,value:o}),n=r,o=s}return i.push({end:1/0,start:n,value:o}),i}function sx(e){return e===ix}function lx(e,t){if(!sx(e))return t===e.k?e.v:t<e.k?lx(e.l,t):lx(e.r,t)}function cx(e,t,r="k"){if(sx(e))return[-1/0,void 0];if(Number(e[r])===t)return[e.k,e.v];if(Number(e[r])<t){const n=cx(e.r,t,r);return n[0]===-1/0?[e.k,e.v]:n}return cx(e.l,t,r)}function dx(e,t,r){return sx(e)?wx(t,r,1):t===e.k?bx(e,{k:t,v:r}):t<e.k?$x(bx(e,{l:dx(e.l,t,r)})):$x(bx(e,{r:dx(e.r,t,r)}))}function ux(){return ix}function hx(e,t,r){if(sx(e))return[];return function(e){return ax(e,(({k:e,v:t})=>({index:e,value:t})))}(gx(e,cx(e,t)[0],r))}function fx(e,t){if(sx(e))return ix;const{k:r,l:n,r:o}=e;if(t===r){if(sx(n))return o;if(sx(o))return n;{const[t,r]=xx(n);return mx(bx(e,{k:t,l:vx(n),v:r}))}}return mx(bx(e,t<r?{l:fx(n,t)}:{r:fx(o,t)}))}function px(e){return sx(e)?[]:[...px(e.l),{k:e.k,v:e.v},...px(e.r)]}function gx(e,t,r){if(sx(e))return[];const{k:n,l:o,r:i,v:a}=e;let s=[];return n>t&&(s=s.concat(gx(o,t,r))),n>=t&&n<=r&&s.push({k:n,v:a}),n<=r&&(s=s.concat(gx(i,t,r))),s}function mx(e){const{l:t,lvl:r,r:n}=e;if(n.lvl>=r-1&&t.lvl>=r-1)return e;if(r>n.lvl+1){if(yx(t))return Cx(bx(e,{lvl:r-1}));if(!sx(t)&&!sx(t.r))return bx(t.r,{l:bx(t,{r:t.r.l}),lvl:r,r:bx(e,{l:t.r.r,lvl:r-1})});throw new Error("Unexpected empty nodes")}if(yx(e))return Sx(bx(e,{lvl:r-1}));if(sx(n)||sx(n.l))throw new Error("Unexpected empty nodes");{const t=n.l,o=yx(t)?n.lvl-1:n.lvl;return bx(t,{l:bx(e,{lvl:r-1,r:t.l}),lvl:t.lvl+1,r:Sx(bx(n,{l:t.r,lvl:o}))})}}function bx(e,t){return wx(void 0!==t.k?t.k:e.k,void 0!==t.v?t.v:e.v,void 0!==t.lvl?t.lvl:e.lvl,void 0!==t.l?t.l:e.l,void 0!==t.r?t.r:e.r)}function vx(e){return sx(e.r)?e.l:mx(bx(e,{r:vx(e.r)}))}function yx(e){return sx(e)||e.lvl>e.r.lvl}function xx(e){return sx(e.r)?[e.k,e.v]:xx(e.r)}function wx(e,t,r,n=ix,o=ix){return{k:e,l:n,lvl:r,r:o,v:t}}function $x(e){return Sx(Cx(e))}function Cx(e){const{l:t}=e;return sx(t)||t.lvl!==e.lvl?e:bx(t,{r:bx(e,{l:t.r})})}function Sx(e){const{lvl:t,r:r}=e;return sx(r)||sx(r.r)||r.lvl!==t||r.r.lvl!==t?e:bx(r,{l:bx(e,{r:r.l}),lvl:t+1})}function Dx(e,t){return!(!e||e.startIndex!==t.startIndex||e.endIndex!==t.endIndex)}function kx(e,t){return!(!e||e[0]!==t[0]||e[1]!==t[1])}const Ex=Vy((()=>({recalcInProgress:Ny(!1)})),[],{singleton:!0});function Fx(e,t,r){return e[Ox(e,t,r)]}function Ox(e,t,r,n=0){let o=e.length-1;for(;n<=o;){const i=Math.floor((n+o)/2),a=r(e[i],t);if(0===a)return i;if(-1===a){if(o-n<2)return i-1;o=i-1}else{if(o===n)return i;n=i+1}}throw new Error(`Failed binary finding record in array - ${e.join(",")}, searched for ${t}`)}function _x(e,t){return Math.round(e.getBoundingClientRect()[t])}function Tx(e){return!sx(e.groupOffsetTree)}function Ix({index:e},t){return t===e?0:t<e?-1:1}function Mx({offset:e},t){return t===e?0:t<e?-1:1}function Ax(e,t,r){if(0===t.length)return 0;const{index:n,offset:o,size:i}=Fx(t,e,Ix),a=e-n,s=i*a+(a-1)*r+o;return s>0?s+r:s}function Bx(e,t){if(!Tx(t))return e;let r=0;for(;t.groupIndices[r]<=e+r;)r++;return e+r}function jx(e,t,r){if(function(e){return typeof e.groupIndex<"u"}(e))return t.groupIndices[e.groupIndex]+1;{let n=Bx("LAST"===e.index?r:e.index,t);return n=Math.max(0,n,Math.min(r,n)),n}}function zx(e,t,r,n=0){return n>0&&(t=Math.max(t,Fx(e,n,Ix).offset)),ax(function(e,t,r,n){const o=Ox(e,t,n),i=Ox(e,r,n,o);return e.slice(o,i+1)}(e,t,r,Mx),Nx)}function Rx(e,[t,r,n,o]){t.length>0&&n("received item sizes",t,Gy.DEBUG);const i=e.sizeTree;let a=i,s=0;if(r.length>0&&sx(i)&&2===t.length){const e=t[0].size,n=t[1].size;a=r.reduce(((t,r)=>dx(dx(t,r,e),r+1,n)),a)}else[a,s]=function(e,t){let r=sx(e)?0:1/0;for(const n of t){const{endIndex:t,size:o,startIndex:i}=n;if(r=Math.min(r,i),sx(e)){e=dx(e,0,o);continue}const a=hx(e,i-1,t+1);if(a.some(Wx(n)))continue;let s=!1,l=!1;for(const{end:r,start:n,value:i}of a)s?(t>=n||o===i)&&(e=fx(e,n)):(l=i!==o,s=!0),r>t&&t>=n&&i!==o&&(e=dx(e,t+1,i));l&&(e=dx(e,i,o))}return[e,r]}(a,t);if(a===i)return e;const{lastIndex:l,lastOffset:c,lastSize:d,offsetTree:u}=Px(e.offsetTree,s,a,o);return{groupIndices:r,groupOffsetTree:r.reduce(((e,t)=>dx(e,t,Ax(t,u,o))),ux()),lastIndex:l,lastOffset:c,lastSize:d,offsetTree:u,sizeTree:a}}function Lx(e,t){let r=0,n=0;for(;r<e;)r+=t[n+1]-t[n]-1,n++;return n-(r===e?0:1)}function Px(e,t,r,n){let o=e,i=0,a=0,s=0,l=0;if(0!==t){l=Ox(o,t-1,Ix),s=o[l].offset;const e=cx(r,t-1);i=e[0],a=e[1],o.length&&o[l].size===cx(r,t)[1]&&(l-=1),o=o.slice(0,l+1)}else o=[];for(const{start:e,value:l}of hx(r,t,1/0)){const t=e-i,r=t*a+s+t*n;o.push({index:e,offset:r,size:l}),i=e,s=r,a=l}return{lastIndex:i,lastOffset:s,lastSize:a,offsetTree:o}}function Nx(e){return{index:e.index,value:e}}function Wx(e){const{endIndex:t,size:r,startIndex:n}=e;return e=>e.start===n&&(e.end===t||e.end===1/0)&&e.value===r}const Hx={offsetHeight:"height",offsetWidth:"width"},Yx=Vy((([{log:e},{recalcInProgress:t}])=>{const r=Hy(),n=Hy(),o=Wy(n,0),i=Hy(),a=Hy(),s=Ny(0),l=Ny([]),c=Ny(void 0),d=Ny(void 0),u=Ny(((e,t)=>_x(e,Hx[t]))),h=Ny(void 0),f=Ny(0),p={groupIndices:[],groupOffsetTree:ux(),lastIndex:0,lastOffset:0,lastSize:0,offsetTree:[],sizeTree:ux()},g=Wy(jy(r,Py(l,e,f),zy(Rx,p),Iy()),p),m=Wy(jy(l,Iy(),zy(((e,t)=>({current:t,prev:e.current})),{current:[],prev:[]}),Ay((({prev:e})=>e))),[]);Fy(jy(l,My((e=>e.length>0)),Py(g,f),Ay((([e,t,r])=>{const n=e.reduce(((e,n,o)=>dx(e,n,Ax(n,t.offsetTree,r)||o)),ux());return{...t,groupIndices:e,groupOffsetTree:n}}))),g),Fy(jy(n,Py(g),My((([e,{lastIndex:t}])=>e<t)),Ay((([e,{lastIndex:t,lastSize:r}])=>[{endIndex:t,size:r,startIndex:e}]))),r),Fy(c,d);const b=Wy(jy(c,Ay((e=>void 0===e))),!0);Fy(jy(d,My((e=>void 0!==e&&sx(Ey(g).sizeTree))),Ay((e=>[{endIndex:0,size:e,startIndex:0}]))),r);const v=Yy(jy(r,Py(g),zy((({sizes:e},[t,r])=>({changed:r!==e,sizes:r})),{changed:!1,sizes:p}),Ay((e=>e.changed))));Sy(jy(s,zy(((e,t)=>({diff:e.prev-t,prev:t})),{diff:0,prev:0}),Ay((e=>e.diff))),(e=>{const{groupIndices:r}=Ey(g);if(e>0)Dy(t,!0),Dy(i,e+Lx(e,r));else if(e<0){const t=Ey(m);t.length>0&&(e-=Lx(-e,t)),Dy(a,e)}})),Sy(jy(s,Py(e)),(([e,t])=>{e<0&&t("`firstItemIndex` prop should not be set to less than zero. If you don't know the total count, just use a very high value",{firstItemIndex:s},Gy.ERROR)}));const y=Yy(i);Fy(jy(i,Py(g),Ay((([e,t])=>{const r=t.groupIndices.length>0,n=[],o=t.lastSize;if(r){const r=lx(t.sizeTree,0);let i=0,a=0;for(;i<e;){const e=t.groupIndices[a],s=t.groupIndices.length===a+1?1/0:t.groupIndices[a+1]-e-1;n.push({endIndex:e,size:r,startIndex:e}),n.push({endIndex:e+1+s-1,size:o,startIndex:e+1}),a++,i+=s+1}const s=px(t.sizeTree);return i!==e&&s.shift(),s.reduce(((t,{k:r,v:n})=>{let o=t.ranges;return 0!==t.prevSize&&(o=[...t.ranges,{endIndex:r+e-1,size:t.prevSize,startIndex:t.prevIndex}]),{prevIndex:r+e,prevSize:n,ranges:o}}),{prevIndex:e,prevSize:0,ranges:n}).ranges}return px(t.sizeTree).reduce(((t,{k:r,v:n})=>({prevIndex:r+e,prevSize:n,ranges:[...t.ranges,{endIndex:r+e-1,size:t.prevSize,startIndex:t.prevIndex}]})),{prevIndex:0,prevSize:o,ranges:[]}).ranges}))),r);const x=Yy(jy(a,Py(g,f),Ay((([e,{offsetTree:t},r])=>Ax(-e,t,r)))));return Fy(jy(a,Py(g,f),Ay((([e,t,r])=>{if(t.groupIndices.length>0){if(sx(t.sizeTree))return t;let n=ux();const o=Ey(m);let i=0,a=0,s=0;for(;i<-e;){s=o[a];const e=o[a+1]-s-1;a++,i+=e+1}if(n=px(t.sizeTree).reduce(((t,{k:r,v:n})=>dx(t,Math.max(0,r+e),n)),n),i!==-e){n=dx(n,0,lx(t.sizeTree,s));n=dx(n,1,cx(t.sizeTree,1-e)[1])}return{...t,sizeTree:n,...Px(t.offsetTree,0,n,r)}}{const n=px(t.sizeTree).reduce(((t,{k:r,v:n})=>dx(t,Math.max(0,r+e),n)),ux());return{...t,sizeTree:n,...Px(t.offsetTree,0,n,r)}}}))),g),{beforeUnshiftWith:y,data:h,defaultItemSize:d,firstItemIndex:s,fixedItemSize:c,gap:f,groupIndices:l,itemSize:u,listRefresh:v,shiftWith:a,shiftWithOffset:x,sizeRanges:r,sizes:g,statefulTotalCount:o,totalCount:n,trackItemSizes:b,unshiftWith:i}}),Cy(Xy,Ex),{singleton:!0});function Vx(e){return e.reduce(((e,t)=>(e.groupIndices.push(e.totalCount),e.totalCount+=t+1,e)),{groupIndices:[],totalCount:0})}const Ux=Vy((([{groupIndices:e,sizes:t,totalCount:r},{headerHeight:n,scrollTop:o}])=>{const i=Hy(),a=Hy(),s=Yy(jy(i,Ay(Vx)));return Fy(jy(s,Ay((e=>e.totalCount))),r),Fy(jy(s,Ay((e=>e.groupIndices))),e),Fy(jy(Ky(o,t,n),My((([e,t])=>Tx(t))),Ay((([e,t,r])=>cx(t.groupOffsetTree,Math.max(e-r,0),"v")[0])),Iy(),Ay((e=>[e]))),a),{groupCounts:i,topItemsIndexes:a}}),Cy(Yx,ox)),Kx=Vy((([{log:e}])=>{const t=Ny(!1),r=Yy(jy(t,My((e=>e)),Iy()));return Sy(t,(t=>{t&&Ey(e)("props updated",{},Gy.DEBUG)})),{didMount:r,propsReady:t}}),Cy(Xy),{singleton:!0}),qx=typeof document<"u"&&"scrollBehavior"in document.documentElement.style;function Zx(e){const t="number"==typeof e?{index:e}:e;return t.align||(t.align="start"),(!t.behavior||!qx)&&(t.behavior="auto"),t.offset||(t.offset=0),t}const Gx=Vy((([{gap:e,listRefresh:t,sizes:r,totalCount:n},{fixedFooterHeight:o,fixedHeaderHeight:i,footerHeight:a,headerHeight:s,scrollingInProgress:l,scrollTo:c,smoothScrollTargetReached:d,viewportHeight:u},{log:h}])=>{const f=Hy(),p=Hy(),g=Ny(0);let m=null,b=null,v=null;function y(){m&&(m(),m=null),v&&(v(),v=null),b&&(clearTimeout(b),b=null),Dy(l,!1)}return Fy(jy(f,Py(r,u,n,g,s,a,h),Py(e,i,o),Ay((([[e,r,n,o,i,a,s,c],u,h,g])=>{const x=Zx(e),{align:w,behavior:$,offset:C}=x,S=o-1,D=jx(x,r,S);let k=Ax(D,r.offsetTree,u)+a;"end"===w?(k+=h+cx(r.sizeTree,D)[1]-n+g,D===S&&(k+=s)):"center"===w?k+=(h+cx(r.sizeTree,D)[1]-n+g)/2:k-=i,C&&(k+=C);const E=t=>{y(),t?(c("retrying to scroll to",{location:e},Gy.DEBUG),Dy(f,e)):(Dy(p,!0),c("list did not change, scroll successful",{},Gy.DEBUG))};if(y(),"smooth"===$){let e=!1;v=Sy(t,(t=>{e=e||t})),m=Oy(d,(()=>{E(e)}))}else m=Oy(jy(t,function(e){return t=>{const r=setTimeout((()=>{t(!1)}),e);return e=>{e&&(t(!0),clearTimeout(r))}}}(150)),E);return b=setTimeout((()=>{y()}),1200),Dy(l,!0),c("scrolling from index to",{behavior:$,index:D,top:k},Gy.DEBUG),{behavior:$,top:k}}))),c),{scrollTargetReached:p,scrollToIndex:f,topListHeight:g}}),Cy(Yx,ox,Xy),{singleton:!0});function Qx(e,t){0==e?t():requestAnimationFrame((()=>{Qx(e-1,t)}))}function Xx(e,t){const r=t-1;return"number"==typeof e?e:"LAST"===e.index?r:e.index}const Jx=Vy((([{defaultItemSize:e,listRefresh:t,sizes:r},{scrollTop:n},{scrollTargetReached:o,scrollToIndex:i},{didMount:a}])=>{const s=Ny(!0),l=Ny(0),c=Ny(!0);return Fy(jy(a,Py(l),My((([e,t])=>!!t)),By(!1)),s),Fy(jy(a,Py(l),My((([e,t])=>!!t)),By(!1)),c),Sy(jy(Ky(t,a),Py(s,r,e,c),My((([[,e],t,{sizeTree:r},n,o])=>e&&(!sx(r)||yy(n))&&!t&&!o)),Py(l)),(([,e])=>{Oy(o,(()=>{Dy(c,!0)})),Qx(4,(()=>{Oy(n,(()=>{Dy(s,!0)})),Dy(i,e)}))})),{initialItemFinalLocationReached:c,initialTopMostItemIndex:l,scrolledToInitialItem:s}}),Cy(Yx,ox,Gx,Kx),{singleton:!0});function ew(e,t){return Math.abs(e-t)<1.01}const tw="up",rw="down",nw={atBottom:!1,notAtBottomBecause:"NOT_SHOWING_LAST_ITEM",state:{offsetBottom:0,scrollHeight:0,scrollTop:0,viewportHeight:0}},ow=Vy((([{footerHeight:e,headerHeight:t,scrollBy:r,scrollContainerState:n,scrollTop:o,viewportHeight:i}])=>{const a=Ny(!1),s=Ny(!0),l=Hy(),c=Hy(),d=Ny(4),u=Ny(0),h=Wy(jy(Zy(jy(qy(o),Ry(1),By(!0)),jy(qy(o),Ry(1),By(!1),_y(100))),Iy()),!1),f=Wy(jy(Zy(jy(r,By(!0)),jy(r,By(!1),_y(200))),Iy()),!1);Fy(jy(Ky(qy(o),qy(u)),Ay((([e,t])=>e<=t)),Iy()),s),Fy(jy(s,Ly(50)),c);const p=Yy(jy(Ky(n,qy(i),qy(t),qy(e),qy(d)),zy(((e,[{scrollHeight:t,scrollTop:r},n,o,i,a])=>{const s={scrollHeight:t,scrollTop:r,viewportHeight:n};if(r+n-t>-a){let t,n;return r>e.state.scrollTop?(t="SCROLLED_DOWN",n=e.state.scrollTop-r):(t="SIZE_DECREASED",n=e.state.scrollTop-r||e.scrollTopDelta),{atBottom:!0,atBottomBecause:t,scrollTopDelta:n,state:s}}let l;return l=s.scrollHeight>e.state.scrollHeight?"SIZE_INCREASED":n<e.state.viewportHeight?"VIEWPORT_HEIGHT_DECREASING":r<e.state.scrollTop?"SCROLLING_UPWARDS":"NOT_FULLY_SCROLLED_TO_LAST_ITEM_BOTTOM",{atBottom:!1,notAtBottomBecause:l,state:s}}),nw),Iy(((e,t)=>e&&e.atBottom===t.atBottom)))),g=Wy(jy(n,zy(((e,{scrollHeight:t,scrollTop:r,viewportHeight:n})=>{if(ew(e.scrollHeight,t))return{changed:!1,jump:0,scrollHeight:t,scrollTop:r};{const o=t-(r+n)<1;return e.scrollTop!==r&&o?{changed:!0,jump:e.scrollTop-r,scrollHeight:t,scrollTop:r}:{changed:!0,jump:0,scrollHeight:t,scrollTop:r}}}),{changed:!1,jump:0,scrollHeight:0,scrollTop:0}),My((e=>e.changed)),Ay((e=>e.jump))),0);Fy(jy(p,Ay((e=>e.atBottom))),a),Fy(jy(a,Ly(50)),l);const m=Ny(rw);Fy(jy(n,Ay((({scrollTop:e})=>e)),Iy(),zy(((e,t)=>Ey(f)?{direction:e.direction,prevScrollTop:t}:{direction:t<e.prevScrollTop?tw:rw,prevScrollTop:t}),{direction:rw,prevScrollTop:0}),Ay((e=>e.direction))),m),Fy(jy(n,Ly(50),By("none")),m);const b=Ny(0);return Fy(jy(h,My((e=>!e)),By(0)),b),Fy(jy(o,Ly(100),Py(h),My((([e,t])=>!!t)),zy((([e,t],[r])=>[t,r]),[0,0]),Ay((([e,t])=>t-e))),b),{atBottomState:p,atBottomStateChange:l,atBottomThreshold:d,atTopStateChange:c,atTopThreshold:u,isAtBottom:a,isAtTop:s,isScrolling:h,lastJumpDueToItemResize:g,scrollDirection:m,scrollVelocity:b}}),Cy(ox)),iw="top",aw="bottom",sw="none";function lw(e,t,r){return"number"==typeof e?r===tw&&t===iw||r===rw&&t===aw?e:0:r===tw?t===iw?e.main:e.reverse:t===aw?e.main:e.reverse}function cw(e,t){var r;return"number"==typeof e?e:null!=(r=e[t])?r:0}const dw=Vy((([{deviation:e,fixedHeaderHeight:t,headerHeight:r,scrollTop:n,viewportHeight:o}])=>{const i=Hy(),a=Ny(0),s=Ny(0),l=Ny(0),c=Wy(jy(Ky(qy(n),qy(o),qy(r),qy(i,kx),qy(l),qy(a),qy(t),qy(e),qy(s)),Ay((([e,t,r,[n,o],i,a,s,l,c])=>{const d=e-l,u=a+s,h=Math.max(r-d,0);let f=sw;const p=cw(c,iw),g=cw(c,aw);return n-=l,o+=r+s,(n+=r+s)>e+u-p&&(f=tw),(o-=l)<e-h+t+g&&(f=rw),f!==sw?[Math.max(d-r-lw(i,iw,f)-p,0),d-h-s+t+lw(i,aw,f)+g]:null})),My((e=>null!=e)),Iy(kx)),[0,0]);return{increaseViewportBy:s,listBoundary:i,overscan:l,topListHeight:a,visibleRange:c}}),Cy(ox),{singleton:!0});const uw={bottom:0,firstItemIndex:0,items:[],offsetBottom:0,offsetTop:0,top:0,topItems:[],topListHeight:0,totalCount:0};function hw(e,t,r,n,o,i){const{lastIndex:a,lastOffset:s,lastSize:l}=o;let c=0,d=0;if(e.length>0){c=e[0].offset;const t=e[e.length-1];d=t.offset+t.size}const u=r-a,h=c,f=s+u*l+(u-1)*n-d;return{bottom:d,firstItemIndex:i,items:pw(e,o,i),offsetBottom:f,offsetTop:c,top:h,topItems:pw(t,o,i),topListHeight:t.reduce(((e,t)=>t.size+e),0),totalCount:r}}function fw(e,t,r,n,o,i){let a=0;if(r.groupIndices.length>0)for(const t of r.groupIndices){if(t-a>=e)break;a++}const s=e+a,l=Xx(t,s);return hw(Array.from({length:s}).map(((e,t)=>({data:i[t+l],index:t+l,offset:0,size:0}))),[],s,o,r,n)}function pw(e,t,r){if(0===e.length)return[];if(!Tx(t))return e.map((e=>({...e,index:e.index+r,originalIndex:e.index})));const n=e[0].index,o=e[e.length-1].index,i=[],a=hx(t.groupOffsetTree,n,o);let s,l=0;for(const n of e){let e;(!s||s.end<n.index)&&(s=a.shift(),l=t.groupIndices.indexOf(s.start)),e=n.index===s.start?{index:l,type:"group"}:{groupIndex:l,index:n.index-(l+1)+r},i.push({...e,data:n.data,offset:n.offset,originalIndex:n.index,size:n.size})}return i}const gw=Vy((([{data:e,firstItemIndex:t,gap:r,sizes:n,totalCount:o},i,{listBoundary:a,topListHeight:s,visibleRange:l},{initialTopMostItemIndex:c,scrolledToInitialItem:d},{topListHeight:u},h,{didMount:f},{recalcInProgress:p}])=>{const g=Ny([]),m=Ny(0),b=Hy();Fy(i.topItemsIndexes,g);const v=Wy(jy(Ky(f,p,qy(l,kx),qy(o),qy(n),qy(c),d,qy(g),qy(t),qy(r),e),My((([e,t,,r,,,,,,,n])=>{const o=n&&n.length!==r;return e&&!t&&!o})),Ay((([,,[e,t],r,n,o,i,a,s,l,c])=>{const d=n,{offsetTree:u,sizeTree:h}=d,f=Ey(m);if(0===r)return{...uw,totalCount:r};if(0===e&&0===t)return 0===f?{...uw,totalCount:r}:fw(f,o,n,s,l,c||[]);if(sx(h))return f>0?null:hw(function(e,t,r){if(Tx(t)){const n=Bx(e,t);return[{index:cx(t.groupOffsetTree,n)[0],offset:0,size:0},{data:null==r?void 0:r[0],index:n,offset:0,size:0}]}return[{data:null==r?void 0:r[0],index:e,offset:0,size:0}]}(Xx(o,r),d,c),[],r,l,d,s);const p=[];if(a.length>0){const e=a[0],t=a[a.length-1];let r=0;for(const n of hx(h,e,t)){const o=n.value,i=Math.max(n.start,e),a=Math.min(n.end,t);for(let e=i;e<=a;e++)p.push({data:null==c?void 0:c[e],index:e,offset:r,size:o}),r+=o}}if(!i)return hw([],p,r,l,d,s);const g=a.length>0?a[a.length-1]+1:0,b=zx(u,e,t,g);if(0===b.length)return null;const v=r-1;return hw(wy([],(r=>{for(const n of b){const o=n.value;let i=o.offset,a=n.start;const s=o.size;if(o.offset<e){a+=Math.floor((e-o.offset+l)/(s+l));const t=a-n.start;i+=t*s+t*l}a<g&&(i+=(g-a)*s,a=g);const d=Math.min(n.end,v);for(let e=a;e<=d&&!(i>=t);e++)r.push({data:null==c?void 0:c[e],index:e,offset:i,size:s}),i+=s+l}})),p,r,l,d,s)})),My((e=>null!==e)),Iy()),uw);Fy(jy(e,My(yy),Ay((e=>null==e?void 0:e.length))),o),Fy(jy(v,Ay((e=>e.topListHeight))),u),Fy(u,s),Fy(jy(v,Ay((e=>[e.top,e.bottom]))),a),Fy(jy(v,Ay((e=>e.items))),b);const y=Yy(jy(v,My((({items:e})=>e.length>0)),Py(o,e),My((([{items:e},t])=>e[e.length-1].originalIndex===t-1)),Ay((([,e,t])=>[e-1,t])),Iy(kx),Ay((([e])=>e)))),x=Yy(jy(v,Ly(200),My((({items:e,topItems:t})=>e.length>0&&e[0].originalIndex===t.length)),Ay((({items:e})=>e[0].index)),Iy())),w=Yy(jy(v,My((({items:e})=>e.length>0)),Ay((({items:e})=>{let t=0,r=e.length-1;for(;"group"===e[t].type&&t<r;)t++;for(;"group"===e[r].type&&r>t;)r--;return{endIndex:e[r].index,startIndex:e[t].index}})),Iy(Dx)));return{endReached:y,initialItemCount:m,itemsRendered:b,listState:v,rangeChanged:w,startReached:x,topItemsIndexes:g,...h}}),Cy(Yx,Ux,dw,Jx,Gx,ow,Kx,Ex),{singleton:!0}),mw=Vy((([{fixedFooterHeight:e,fixedHeaderHeight:t,footerHeight:r,headerHeight:n},{listState:o}])=>{const i=Hy(),a=Wy(jy(Ky(r,e,n,t,o),Ay((([e,t,r,n,o])=>e+t+r+n+o.offsetBottom+o.bottom))),0);return Fy(qy(a),i),{totalListHeight:a,totalListHeightChanged:i}}),Cy(ox,gw),{singleton:!0}),bw=Vy((([{viewportHeight:e},{totalListHeight:t}])=>{const r=Ny(!1),n=Wy(jy(Ky(r,e,t),My((([e])=>e)),Ay((([,e,t])=>Math.max(0,e-t))),Ly(0),Iy()),0);return{alignToBottom:r,paddingTopAddition:n}}),Cy(ox,mw),{singleton:!0});function vw(e){return!!e&&("smooth"===e?"smooth":"auto")}const yw=Vy((([{listRefresh:e,totalCount:t},{atBottomState:r,isAtBottom:n},{scrollToIndex:o},{scrolledToInitialItem:i},{didMount:a,propsReady:s},{log:l},{scrollingInProgress:c}])=>{const d=Ny(!1),u=Hy();let h=null;function f(e){Dy(o,{align:"end",behavior:e,index:"LAST"})}function p(e){const t=Oy(r,(t=>{e&&!t.atBottom&&"SIZE_INCREASED"===t.notAtBottomBecause&&!h&&(Ey(l)("scrolling to bottom due to increased size",{},Gy.DEBUG),f("auto"))}));setTimeout(t,100)}return Sy(jy(Ky(jy(qy(t),Ry(1)),a),Py(qy(d),n,i,c),Ay((([[e,t],r,n,o,i])=>{let a=t&&o,s="auto";return a&&(s=((e,t)=>"function"==typeof e?vw(e(t)):t&&vw(e))(r,n||i),a=a&&!!s),{followOutputBehavior:s,shouldFollow:a,totalCount:e}})),My((({shouldFollow:e})=>e))),(({followOutputBehavior:t,totalCount:r})=>{h&&(h(),h=null),h=Oy(e,(()=>{Ey(l)("following output to ",{totalCount:r},Gy.DEBUG),f(t),h=null}))})),Sy(jy(Ky(qy(d),t,s),My((([e,,t])=>e&&t)),zy((({value:e},[,t])=>({refreshed:e===t,value:t})),{refreshed:!1,value:0}),My((({refreshed:e})=>e)),Py(d,t)),(([,e])=>{Ey(i)&&p(!1!==e)})),Sy(u,(()=>{p(!1!==Ey(d))})),Sy(Ky(qy(d),r),(([e,t])=>{e&&!t.atBottom&&"VIEWPORT_HEIGHT_DECREASING"===t.notAtBottomBecause&&f("auto")})),{autoscrollToBottom:u,followOutput:d}}),Cy(Yx,ow,Gx,Jx,Kx,Xy,ox)),xw=Vy((([{data:e,firstItemIndex:t,gap:r,sizes:n},{initialTopMostItemIndex:o},{initialItemCount:i,listState:a},{didMount:s}])=>(Fy(jy(s,Py(i),My((([,e])=>0!==e)),Py(o,n,t,r,e),Ay((([[,e],t,r,n,o,i=[]])=>fw(e,t,r,n,o,i)))),a),{})),Cy(Yx,Jx,gw,Kx),{singleton:!0}),ww=Vy((([{didMount:e},{scrollTo:t},{listState:r}])=>{const n=Ny(0);return Sy(jy(e,Py(n),My((([,e])=>0!==e)),Ay((([,e])=>({top:e})))),(e=>{Oy(jy(r,Ry(1),My((e=>e.items.length>1))),(()=>{requestAnimationFrame((()=>{Dy(t,e)}))}))})),{initialScrollTop:n}}),Cy(Kx,ox,gw),{singleton:!0}),$w=({itemBottom:e,itemTop:t,locationParams:{align:r,behavior:n,...o},viewportBottom:i,viewportTop:a})=>t<a?{...o,align:null!=r?r:"start",behavior:n}:e>i?{...o,align:null!=r?r:"end",behavior:n}:null,Cw=Vy((([{gap:e,sizes:t,totalCount:r},{fixedFooterHeight:n,fixedHeaderHeight:o,headerHeight:i,scrollingInProgress:a,scrollTop:s,viewportHeight:l},{scrollToIndex:c}])=>{const d=Hy();return Fy(jy(d,Py(t,l,r,i,o,n,s),Py(e),Ay((([[e,t,r,n,o,i,s,l],c])=>{const{align:d,behavior:u,calculateViewLocation:h=$w,done:f,...p}=e,g=jx(e,t,n-1),m=Ax(g,t.offsetTree,c)+o+i,b=h({itemBottom:m+cx(t.sizeTree,g)[1],itemTop:m,locationParams:{align:d,behavior:u,...p},viewportBottom:l+r-s,viewportTop:l+i});return b?f&&Oy(jy(a,My((e=>!e)),Ry(Ey(a)?1:2)),f):f&&f(),b})),My((e=>null!==e))),c),{scrollIntoView:d}}),Cy(Yx,ox,Gx,gw,Xy),{singleton:!0}),Sw=Vy((([{scrollVelocity:e}])=>{const t=Ny(!1),r=Hy(),n=Ny(!1);return Fy(jy(e,Py(n,t,r),My((([e,t])=>!!t)),Ay((([e,t,r,n])=>{const{enter:o,exit:i}=t;if(r){if(i(e,n))return!1}else if(o(e,n))return!0;return r})),Iy()),t),Sy(jy(Ky(t,e,r),Py(n)),(([[e,t,r],n])=>{e&&n&&n.change&&n.change(t,r)})),{isSeeking:t,scrollSeekConfiguration:n,scrollSeekRangeChanged:r,scrollVelocity:e}}),Cy(ow),{singleton:!0}),Dw=Vy((([{scrollContainerState:e,scrollTo:t}])=>{const r=Hy(),n=Hy(),o=Hy(),i=Ny(!1),a=Ny(void 0);return Fy(jy(Ky(r,n),Ay((([{scrollHeight:e,scrollTop:t,viewportHeight:r},{offsetTop:n}])=>({scrollHeight:e,scrollTop:Math.max(0,t-n),viewportHeight:r})))),e),Fy(jy(t,Py(n),Ay((([e,{offsetTop:t}])=>({...e,top:e.top+t})))),o),{customScrollParent:a,useWindowScroll:i,windowScrollContainerState:r,windowScrollTo:o,windowViewportRect:n}}),Cy(ox)),kw=Vy((([{sizeRanges:e,sizes:t},{headerHeight:r,scrollTop:n},{initialTopMostItemIndex:o},{didMount:i},{useWindowScroll:a,windowScrollContainerState:s,windowViewportRect:l}])=>{const c=Hy(),d=Ny(void 0),u=Ny(null),h=Ny(null);return Fy(s,u),Fy(l,h),Sy(jy(c,Py(t,n,a,u,h,r)),(([e,t,r,n,o,i,a])=>{const s=function(e){return px(e).map((({k:e,v:t},r,n)=>{const o=n[r+1];return{endIndex:o?o.k-1:1/0,size:t,startIndex:e}}))}(t.sizeTree);n&&null!==o&&null!==i&&(r=o.scrollTop-i.offsetTop),e({ranges:s,scrollTop:r-=a})})),Fy(jy(d,My(yy),Ay(Ew)),o),Fy(jy(i,Py(d),My((([,e])=>void 0!==e)),Iy(),Ay((([,e])=>e.ranges))),e),{getState:c,restoreStateFrom:d}}),Cy(Yx,ox,Jx,Kx,Dw));function Ew(e){return{align:"start",index:0,offset:e.scrollTop}}const Fw=Vy((([{topItemsIndexes:e}])=>{const t=Ny(0);return Fy(jy(t,My((e=>e>=0)),Ay((e=>Array.from({length:e}).map(((e,t)=>t))))),e),{topItemCount:t}}),Cy(gw));function Ow(e){let t,r=!1;return()=>(r||(r=!0,t=e()),t)}const _w=Ow((()=>/iP(ad|od|hone)/i.test(navigator.userAgent)&&/WebKit/i.test(navigator.userAgent))),Tw=Vy((([{deviation:e,scrollBy:t,scrollingInProgress:r,scrollTop:n},{isAtBottom:o,isScrolling:i,lastJumpDueToItemResize:a,scrollDirection:s},{listState:l},{beforeUnshiftWith:c,gap:d,shiftWithOffset:u,sizes:h},{log:f},{recalcInProgress:p}])=>{const g=Yy(jy(l,Py(a),zy((([,e,t,r],[{bottom:n,items:o,offsetBottom:i,totalCount:a},s])=>{const l=n+i;let c=0;return t===a&&e.length>0&&o.length>0&&(0===o[0].originalIndex&&0===e[0].originalIndex||(c=l-r,0!==c&&(c+=s))),[c,o,a,l]}),[0,[],0,0]),My((([e])=>0!==e)),Py(n,s,r,o,f,p),My((([,e,t,r,,,n])=>!n&&!r&&0!==e&&t===tw)),Ay((([[e],,,,,t])=>(t("Upward scrolling compensation",{amount:e},Gy.DEBUG),e)))));function m(r){r>0?(Dy(t,{behavior:"auto",top:-r}),Dy(e,0)):(Dy(e,0),Dy(t,{behavior:"auto",top:-r}))}return Sy(jy(g,Py(e,i)),(([t,r,n])=>{n&&_w()?Dy(e,r-t):m(-t)})),Sy(jy(Ky(Wy(i,!1),e,p),My((([e,t,r])=>!e&&!r&&0!==t)),Ay((([e,t])=>t)),Ly(1)),m),Fy(jy(u,Ay((e=>({top:-e})))),t),Sy(jy(c,Py(h,d),Ay((([e,{groupIndices:t,lastSize:r,sizeTree:n},o])=>{function i(e){return e*(r+o)}if(0===t.length)return i(e);{let r=0;const o=lx(n,0);let a=0,s=0;for(;a<e;){a++,r+=o;let n=t.length===s+1?1/0:t[s+1]-t[s]-1;a+n>e&&(r-=o,n=e-a+1),a+=n,r+=i(n),s++}return r}}))),(r=>{Dy(e,r),requestAnimationFrame((()=>{Dy(t,{top:r}),requestAnimationFrame((()=>{Dy(e,0),Dy(p,!1)}))}))})),{deviation:e}}),Cy(ox,ow,gw,Yx,Xy,Ex)),Iw=Vy((([e,t,r,n,o,i,a,s,l,c])=>({...e,...t,...r,...n,...o,...i,...a,...s,...l,...c})),Cy(dw,xw,Kx,Sw,mw,ww,bw,Dw,Cw,Xy)),Mw=Vy((([{data:e,defaultItemSize:t,firstItemIndex:r,fixedItemSize:n,gap:o,groupIndices:i,itemSize:a,sizeRanges:s,sizes:l,statefulTotalCount:c,totalCount:d,trackItemSizes:u},{initialItemFinalLocationReached:h,initialTopMostItemIndex:f,scrolledToInitialItem:p},g,m,b,{listState:v,topItemsIndexes:y,...x},{scrollToIndex:w},$,{topItemCount:C},{groupCounts:S},D])=>(Fy(x.rangeChanged,D.scrollSeekRangeChanged),Fy(jy(D.windowViewportRect,Ay((e=>e.visibleHeight))),g.viewportHeight),{data:e,defaultItemHeight:t,firstItemIndex:r,fixedItemHeight:n,gap:o,groupCounts:S,initialItemFinalLocationReached:h,initialTopMostItemIndex:f,scrolledToInitialItem:p,sizeRanges:s,topItemCount:C,topItemsIndexes:y,totalCount:d,...b,groupIndices:i,itemSize:a,listState:v,scrollToIndex:w,statefulTotalCount:c,trackItemSizes:u,...x,...D,...g,sizes:l,...m})),Cy(Yx,Jx,ox,kw,yw,gw,Gx,Tw,Fw,Ux,Iw));function Aw(e,t){const r={},n={};let o=0;const i=e.length;for(;o<i;)n[e[o]]=1,o+=1;for(const e in t)Object.hasOwn(n,e)||(r[e]=t[e]);return r}const Bw=typeof document<"u"?o.useLayoutEffect:o.useEffect;function jw(t,r,n){const i=Object.keys(r.required||{}),a=Object.keys(r.optional||{}),s=Object.keys(r.methods||{}),l=Object.keys(r.events||{}),c=o.createContext({});function d(e,t){e.propsReady&&Dy(e.propsReady,!1);for(const n of i){Dy(e[r.required[n]],t[n])}for(const n of a)if(n in t){Dy(e[r.optional[n]],t[n])}e.propsReady&&Dy(e.propsReady,!0)}function u(e){return l.reduce(((t,n)=>(t[n]=function(e){let t,r;const n=()=>null==t?void 0:t();return function(o,i){switch(o){case 1:return i?r===i?void 0:(n(),r=i,t=Sy(e,i),t):(n(),xy);case 2:return n(),void(r=null)}}}(e[r.events[n]]),t)),{})}const h=o.forwardRef(((h,f)=>{const{children:p,...g}=h,[m]=o.useState((()=>wy(function(e){const t=new Map,r=({constructor:e,dependencies:n,id:o,singleton:i})=>{if(i&&t.has(o))return t.get(o);const a=e(n.map((e=>r(e))));return i&&t.set(o,a),a};return r(e)}(t),(e=>{d(e,g)})))),[b]=o.useState(by(u,m));Bw((()=>{for(const e of l)e in g&&Sy(b[e],g[e]);return()=>{Object.values(b).map(ky)}}),[g,b,m]),Bw((()=>{d(m,g)})),o.useImperativeHandle(f,py(function(e){return s.reduce(((t,n)=>(t[n]=t=>{Dy(e[r.methods[n]],t)},t)),{})}(m)));const v=n;return e(c.Provider,{value:m,children:n?e(v,{...Aw([...i,...a,...l],g),children:p}):p})})),f=o.version.startsWith("18")?e=>{const t=o.useContext(c)[e],r=o.useCallback((e=>Sy(t,e)),[t]);return o.useSyncExternalStore(r,(()=>Ey(t)),(()=>Ey(t)))}:e=>{const t=o.useContext(c)[e],[r,n]=o.useState(by(Ey,t));return Bw((()=>Sy(t,(e=>{e!==r&&n(py(e))}))),[t,r]),r};return{Component:h,useEmitter:(e,t)=>{const r=o.useContext(c)[e];Bw((()=>Sy(r,t)),[t,r])},useEmitterValue:f,usePublisher:e=>o.useCallback(vy(Dy,o.useContext(c)[e]),[e])}}const zw=o.createContext(void 0),Rw=o.createContext(void 0),Lw=typeof document<"u"?o.useLayoutEffect:o.useEffect;function Pw(e,t,r,n=xy,i,a){const s=o.useRef(null),l=o.useRef(null),c=o.useRef(null),d=o.useCallback((r=>{const n=r.target,o=n===window||n===document,i=a?o?window.pageXOffset||document.documentElement.scrollLeft:n.scrollLeft:o?window.pageYOffset||document.documentElement.scrollTop:n.scrollTop,s=a?o?document.documentElement.scrollWidth:n.scrollWidth:o?document.documentElement.scrollHeight:n.scrollHeight,d=a?o?window.innerWidth:n.offsetWidth:o?window.innerHeight:n.offsetHeight,u=()=>{e({scrollHeight:s,scrollTop:Math.max(i,0),viewportHeight:d})};r.suppressFlushSync?u():B.flushSync(u),null!==l.current&&(i===l.current||i<=0||i===s-d)&&(l.current=null,t(!0),c.current&&(clearTimeout(c.current),c.current=null))}),[e,t]);return o.useEffect((()=>{const e=i||s.current;return n(i||s.current),d({suppressFlushSync:!0,target:e}),e.addEventListener("scroll",d,{passive:!0}),()=>{n(null),e.removeEventListener("scroll",d)}}),[s,d,r,n,i]),{scrollByCallback:function(e){a&&(e={behavior:e.behavior,left:e.top}),s.current.scrollBy(e)},scrollerRef:s,scrollToCallback:function(r){const n=s.current;if(!n||(a?"offsetWidth"in n&&0===n.offsetWidth:"offsetHeight"in n&&0===n.offsetHeight))return;const o="smooth"===r.behavior;let i,d,u;n===window?(d=Math.max(_x(document.documentElement,a?"width":"height"),a?document.documentElement.scrollWidth:document.documentElement.scrollHeight),i=a?window.innerWidth:window.innerHeight,u=a?document.documentElement.scrollLeft:document.documentElement.scrollTop):(d=n[a?"scrollWidth":"scrollHeight"],i=_x(n,a?"width":"height"),u=n[a?"scrollLeft":"scrollTop"]);const h=d-i;if(r.top=Math.ceil(Math.max(Math.min(h,r.top),0)),ew(i,d)||r.top===u)return e({scrollHeight:d,scrollTop:u,viewportHeight:i}),void(o&&t(!0));o?(l.current=r.top,c.current&&clearTimeout(c.current),c.current=setTimeout((()=>{c.current=null,l.current=null,t(!0)}),1e3)):l.current=null,a&&(r={behavior:r.behavior,left:r.top}),n.scrollTo(r)}}}const Nw="-webkit-sticky",Ww="sticky",Hw=Ow((()=>{if(typeof document>"u")return Ww;const e=document.createElement("div");return e.style.position=Nw,e.style.position===Nw?Nw:Ww}));function Yw(e){return e}const Vw=Vy((()=>{const e=Ny((e=>`Item ${e}`)),t=Ny(null),r=Ny((e=>`Group ${e}`)),n=Ny({}),o=Ny(Yw),i=Ny("div"),a=Ny(xy),s=(e,t=null)=>Wy(jy(n,Ay((t=>t[e])),Iy()),t);return{components:n,computeItemKey:o,context:t,EmptyPlaceholder:s("EmptyPlaceholder"),FooterComponent:s("Footer"),GroupComponent:s("Group","div"),groupContent:r,HeaderComponent:s("Header"),HeaderFooterTag:i,ItemComponent:s("Item","div"),itemContent:e,ListComponent:s("List","div"),ScrollerComponent:s("Scroller","div"),scrollerRef:a,ScrollSeekPlaceholder:s("ScrollSeekPlaceholder"),TopItemListComponent:s("TopItemList")}})),Uw=Vy((([e,t])=>({...e,...t})),Cy(Mw,Vw)),Kw=({height:t})=>e("div",{style:{height:t}}),qw={overflowAnchor:"none",position:Hw(),zIndex:1},Zw={overflowAnchor:"none"},Gw={...Zw,display:"inline-block",height:"100%"},Qw=o.memo((function({showTopList:t=!1}){const r=p$("listState"),n=g$("sizeRanges"),i=p$("useWindowScroll"),a=p$("customScrollParent"),s=g$("windowScrollContainerState"),l=g$("scrollContainerState"),c=a||i?s:l,d=p$("itemContent"),u=p$("context"),h=p$("groupContent"),f=p$("trackItemSizes"),p=p$("itemSize"),g=p$("log"),m=g$("gap"),b=p$("horizontalDirection"),{callbackRef:v}=tx(n,p,f,t?xy:c,g,m,a,b,p$("skipAnimationFrameInResizeObserver")),[y,x]=o.useState(0);f$("deviation",(e=>{y!==e&&x(e)}));const w=p$("EmptyPlaceholder"),$=p$("ScrollSeekPlaceholder")||Kw,C=p$("ListComponent"),S=p$("ItemComponent"),D=p$("GroupComponent"),E=p$("computeItemKey"),F=p$("isSeeking"),O=p$("groupIndices").length>0,_=p$("alignToBottom"),T=p$("initialItemFinalLocationReached"),I=t?{}:{boxSizing:"border-box",...b?{display:"inline-block",height:"100%",marginLeft:0!==y?y:_?"auto":0,paddingLeft:r.offsetTop,paddingRight:r.offsetBottom,whiteSpace:"nowrap"}:{marginTop:0!==y?y:_?"auto":0,paddingBottom:r.offsetBottom,paddingTop:r.offsetTop},...T?{}:{visibility:"hidden"}};return!t&&0===r.totalCount&&w?e(w,{...r$(w,u)}):e(C,{...r$(C,u),"data-testid":t?"virtuoso-top-item-list":"virtuoso-item-list",ref:v,style:I,children:(t?r.topItems:r.items).map((e=>{const t=e.originalIndex,n=E(t+r.firstItemIndex,e.data,u);return F?k($,{...r$($,u),height:e.size,index:e.index,key:n,type:e.type||"item",..."group"===e.type?{}:{groupIndex:e.groupIndex}}):"group"===e.type?k(D,{...r$(D,u),"data-index":t,"data-item-index":e.index,"data-known-size":e.size,key:n,style:qw},h(e.index,u)):k(S,{...r$(S,u),...n$(S,e.data),"data-index":t,"data-item-group-index":e.groupIndex,"data-item-index":e.index,"data-known-size":e.size,key:n,style:b?Gw:Zw},O?d(e.index,e.groupIndex,e.data,u):d(e.index,e.data,u))}))})})),Xw={height:"100%",outline:"none",overflowY:"auto",position:"relative",WebkitOverflowScrolling:"touch"},Jw={outline:"none",overflowX:"auto",position:"relative"},e$=e=>({height:"100%",position:"absolute",top:0,width:"100%",...e?{display:"flex",flexDirection:"column"}:{}}),t$={position:Hw(),top:0,width:"100%",zIndex:1};function r$(e,t){if("string"!=typeof e)return{context:t}}function n$(e,t){return{item:"string"==typeof e?void 0:t}}const o$=o.memo((function(){const t=p$("HeaderComponent"),r=g$("headerHeight"),n=p$("HeaderFooterTag"),i=Jy(o.useMemo((()=>e=>{r(_x(e,"height"))}),[r]),!0,p$("skipAnimationFrameInResizeObserver")),a=p$("context");return t?e(n,{ref:i,children:e(t,{...r$(t,a)})}):null})),i$=o.memo((function(){const t=p$("FooterComponent"),r=g$("footerHeight"),n=p$("HeaderFooterTag"),i=Jy(o.useMemo((()=>e=>{r(_x(e,"height"))}),[r]),!0,p$("skipAnimationFrameInResizeObserver")),a=p$("context");return t?e(n,{ref:i,children:e(t,{...r$(t,a)})}):null}));function a$({useEmitter:t,useEmitterValue:r,usePublisher:n}){return o.memo((function({children:o,style:i,...a}){const s=n("scrollContainerState"),l=r("ScrollerComponent"),c=n("smoothScrollTargetReached"),d=r("scrollerRef"),u=r("context"),h=r("horizontalDirection")||!1,{scrollByCallback:f,scrollerRef:p,scrollToCallback:g}=Pw(s,c,l,d,void 0,h);return t("scrollTo",g),t("scrollBy",f),e(l,{"data-testid":"virtuoso-scroller","data-virtuoso-scroller":!0,ref:p,style:{...h?Jw:Xw,...i},tabIndex:0,...a,...r$(l,u),children:o})}))}function s$({useEmitter:t,useEmitterValue:r,usePublisher:n}){return o.memo((function({children:o,style:i,...a}){const s=n("windowScrollContainerState"),l=r("ScrollerComponent"),c=n("smoothScrollTargetReached"),d=r("totalListHeight"),u=r("deviation"),h=r("customScrollParent"),f=r("context"),{scrollByCallback:p,scrollerRef:g,scrollToCallback:m}=Pw(s,c,l,xy,h);return Lw((()=>(g.current=h||window,()=>{g.current=null})),[g,h]),t("windowScrollTo",m),t("scrollBy",p),e(l,{"data-virtuoso-scroller":!0,style:{position:"relative",...i,...0!==d?{height:d+u}:{}},...a,...r$(l,f),children:o})}))}const l$=({children:t})=>{const r=o.useContext(zw),n=g$("viewportHeight"),i=g$("fixedItemHeight"),a=p$("alignToBottom"),s=p$("horizontalDirection"),l=Jy(o.useMemo((()=>my(n,(e=>_x(e,s?"width":"height")))),[n,s]),!0,p$("skipAnimationFrameInResizeObserver"));return o.useEffect((()=>{r&&(n(r.viewportHeight),i(r.itemHeight))}),[r,n,i]),e("div",{"data-viewport-type":"element",ref:l,style:e$(a),children:t})},c$=({children:t})=>{const r=o.useContext(zw),n=g$("windowViewportRect"),i=g$("fixedItemHeight"),a=p$("customScrollParent"),s=nx(n,a,p$("skipAnimationFrameInResizeObserver")),l=p$("alignToBottom");return o.useEffect((()=>{r&&(i(r.itemHeight),n({offsetTop:0,visibleHeight:r.viewportHeight,visibleWidth:100}))}),[r,n,i]),e("div",{"data-viewport-type":"window",ref:s,style:e$(l),children:t})},d$=({children:t})=>{const r=p$("TopItemListComponent")||"div",n=p$("headerHeight"),o={...t$,marginTop:`${n}px`},i=p$("context");return e(r,{style:o,...r$(r,i),children:t})},u$=o.memo((function(r){const n=p$("useWindowScroll"),o=p$("topItemsIndexes").length>0,i=p$("customScrollParent"),a=p$("context"),s=i||n?b$:m$,l=i||n?c$:l$;return t(s,{...r,...r$(s,a),children:[o&&e(d$,{children:e(Qw,{showTopList:!0})}),t(l,{children:[e(o$,{}),e(Qw,{}),e(i$,{})]})]})})),{Component:h$,useEmitter:f$,useEmitterValue:p$,usePublisher:g$}=jw(Uw,{events:{atBottomStateChange:"atBottomStateChange",atTopStateChange:"atTopStateChange",endReached:"endReached",groupIndices:"groupIndices",isScrolling:"isScrolling",itemsRendered:"itemsRendered",rangeChanged:"rangeChanged",startReached:"startReached",totalListHeightChanged:"totalListHeightChanged"},methods:{autoscrollToBottom:"autoscrollToBottom",getState:"getState",scrollBy:"scrollBy",scrollIntoView:"scrollIntoView",scrollTo:"scrollTo",scrollToIndex:"scrollToIndex"},optional:{alignToBottom:"alignToBottom",atBottomThreshold:"atBottomThreshold",atTopThreshold:"atTopThreshold",components:"components",computeItemKey:"computeItemKey",context:"context",customScrollParent:"customScrollParent",data:"data",defaultItemHeight:"defaultItemHeight",firstItemIndex:"firstItemIndex",fixedItemHeight:"fixedItemHeight",followOutput:"followOutput",groupContent:"groupContent",groupCounts:"groupCounts",headerFooterTag:"HeaderFooterTag",horizontalDirection:"horizontalDirection",increaseViewportBy:"increaseViewportBy",initialItemCount:"initialItemCount",initialScrollTop:"initialScrollTop",initialTopMostItemIndex:"initialTopMostItemIndex",itemContent:"itemContent",itemSize:"itemSize",logLevel:"logLevel",overscan:"overscan",restoreStateFrom:"restoreStateFrom",scrollerRef:"scrollerRef",scrollSeekConfiguration:"scrollSeekConfiguration",skipAnimationFrameInResizeObserver:"skipAnimationFrameInResizeObserver",topItemCount:"topItemCount",totalCount:"totalCount",useWindowScroll:"useWindowScroll"},required:{}},u$),m$=a$({useEmitter:f$,useEmitterValue:p$,usePublisher:g$}),b$=s$({useEmitter:f$,useEmitterValue:p$,usePublisher:g$}),v$=h$,y$={bottom:0,itemHeight:0,items:[],itemWidth:0,offsetBottom:0,offsetTop:0,top:0},x$={bottom:0,itemHeight:0,items:[{index:0}],itemWidth:0,offsetBottom:0,offsetTop:0,top:0},{ceil:w$,floor:$$,max:C$,min:S$,round:D$}=Math;function k$(e,t,r){return Array.from({length:t-e+1}).map(((t,n)=>({data:null===r?null:r[n+e],index:n+e})))}function E$(e,t){return e&&e.width===t.width&&e.height===t.height}function F$(e,t){return e&&e.column===t.column&&e.row===t.row}const O$=Vy((([{increaseViewportBy:e,listBoundary:t,overscan:r,visibleRange:n},{footerHeight:o,headerHeight:i,scrollBy:a,scrollContainerState:s,scrollTo:l,scrollTop:c,smoothScrollTargetReached:d,viewportHeight:u},h,f,{didMount:p,propsReady:g},{customScrollParent:m,useWindowScroll:b,windowScrollContainerState:v,windowScrollTo:y,windowViewportRect:x},w])=>{const $=Ny(0),C=Ny(0),S=Ny(y$),D=Ny({height:0,width:0}),k=Ny({height:0,width:0}),E=Hy(),F=Hy(),O=Ny(0),_=Ny(null),T=Ny({column:0,row:0}),I=Hy(),M=Hy(),A=Ny(!1),B=Ny(0),j=Ny(!0),z=Ny(!1),R=Ny(!1);Sy(jy(p,Py(B),My((([e,t])=>!!t))),(()=>{Dy(j,!1)})),Sy(jy(Ky(p,j,k,D,B,z),My((([e,t,r,n,,o])=>e&&!t&&0!==r.height&&0!==n.height&&!o))),(([,,,,e])=>{Dy(z,!0),Qx(1,(()=>{Dy(E,e)})),Oy(jy(c),(()=>{Dy(t,[0,0]),Dy(j,!0)}))})),Fy(jy(M,My((e=>null!=e&&e.scrollTop>0)),By(0)),C),Sy(jy(p,Py(M),My((([,e])=>null!=e))),(([,e])=>{e&&(Dy(D,e.viewport),Dy(k,e.item),Dy(T,e.gap),e.scrollTop>0&&(Dy(A,!0),Oy(jy(c,Ry(1)),(e=>{Dy(A,!1)})),Dy(l,{top:e.scrollTop})))})),Fy(jy(D,Ay((({height:e})=>e))),u),Fy(jy(Ky(qy(D,E$),qy(k,E$),qy(T,((e,t)=>e&&e.column===t.column&&e.row===t.row)),qy(c)),Ay((([e,t,r,n])=>({gap:r,item:t,scrollTop:n,viewport:e})))),I),Fy(jy(Ky(qy($),n,qy(T,F$),qy(k,E$),qy(D,E$),qy(_),qy(C),qy(A),qy(j),qy(B)),My((([,,,,,,,e])=>!e)),Ay((([e,[t,r],n,o,i,a,s,,l,c])=>{const{column:d,row:u}=n,{height:h,width:f}=o,{width:p}=i;if(0===s&&(0===e||0===p))return y$;if(0===f){const t=Xx(c,e);return function(e){return{...x$,items:e}}(k$(t,t+Math.max(s-1,0),a))}const g=_$(p,f,d);let m,b;l?0===t&&0===r&&s>0?(m=0,b=s-1):(m=g*$$((t+u)/(h+u)),b=g*w$((r+u)/(h+u))-1,b=S$(e-1,C$(b,g-1)),m=S$(b,C$(0,m))):(m=0,b=-1);const v=k$(m,b,a),{bottom:y,top:x}=T$(i,n,o,v),w=w$(e/g);return{bottom:y,itemHeight:h,items:v,itemWidth:f,offsetBottom:w*h+(w-1)*u-y,offsetTop:x,top:x}}))),S),Fy(jy(_,My((e=>null!==e)),Ay((e=>e.length))),$),Fy(jy(Ky(D,k,S,T),My((([e,t,{items:r}])=>r.length>0&&0!==t.height&&0!==e.height)),Ay((([e,t,{items:r},n])=>{const{bottom:o,top:i}=T$(e,n,t,r);return[i,o]})),Iy(kx)),t);const L=Ny(!1);Fy(jy(c,Py(L),Ay((([e,t])=>t||0!==e))),L);const P=Yy(jy(Ky(S,$),My((([{items:e}])=>e.length>0)),Py(L),My((([[e,t],r])=>{const n=e.items[e.items.length-1].index===t-1;return(r||e.bottom>0&&e.itemHeight>0&&0===e.offsetBottom&&e.items.length===t)&&n})),Ay((([[,e]])=>e-1)),Iy())),N=Yy(jy(qy(S),My((({items:e})=>e.length>0&&0===e[0].index)),By(0),Iy())),W=Yy(jy(qy(S),Py(A),My((([{items:e},t])=>e.length>0&&!t)),Ay((([{items:e}])=>({endIndex:e[e.length-1].index,startIndex:e[0].index}))),Iy(Dx),Ly(0)));Fy(W,f.scrollSeekRangeChanged),Fy(jy(E,Py(D,k,$,T),Ay((([e,t,r,n,o])=>{const i=Zx(e),{align:a,behavior:s,offset:l}=i;let c=i.index;"LAST"===c&&(c=n-1),c=C$(0,c,S$(n-1,c));let d=I$(t,o,r,c);return"end"===a?d=D$(d-t.height+r.height):"center"===a&&(d=D$(d-t.height/2+r.height/2)),l&&(d+=l),{behavior:s,top:d}}))),l);const H=Wy(jy(S,Ay((e=>e.offsetBottom+e.bottom))),0);return Fy(jy(x,Ay((e=>({height:e.visibleHeight,width:e.visibleWidth})))),D),{customScrollParent:m,data:_,deviation:O,footerHeight:o,gap:T,headerHeight:i,increaseViewportBy:e,initialItemCount:C,itemDimensions:k,overscan:r,restoreStateFrom:M,scrollBy:a,scrollContainerState:s,scrollHeight:F,scrollTo:l,scrollToIndex:E,scrollTop:c,smoothScrollTargetReached:d,totalCount:$,useWindowScroll:b,viewportDimensions:D,windowScrollContainerState:v,windowScrollTo:y,windowViewportRect:x,...f,gridState:S,horizontalDirection:R,initialTopMostItemIndex:B,totalListHeight:H,...h,endReached:P,propsReady:g,rangeChanged:W,startReached:N,stateChanged:I,stateRestoreInProgress:A,...w}}),Cy(dw,ox,ow,Sw,Kx,Dw,Xy));function _$(e,t,r){return C$(1,$$((e+r)/($$(t)+r)))}function T$(e,t,r,n){const{height:o}=r;if(void 0===o||0===n.length)return{bottom:0,top:0};const i=I$(e,t,r,n[0].index);return{bottom:I$(e,t,r,n[n.length-1].index)+o,top:i}}function I$(e,t,r,n){const o=_$(e.width,r.width,t.column),i=$$(n/o),a=i*r.height+C$(0,i-1)*t.row;return a>0?a+t.row:a}const M$=Vy((()=>{const e=Ny((e=>`Item ${e}`)),t=Ny({}),r=Ny(null),n=Ny("virtuoso-grid-item"),o=Ny("virtuoso-grid-list"),i=Ny(Yw),a=Ny("div"),s=Ny(xy),l=(e,r=null)=>Wy(jy(t,Ay((t=>t[e])),Iy()),r),c=Ny(!1),d=Ny(!1);return Fy(qy(d),c),{components:t,computeItemKey:i,context:r,FooterComponent:l("Footer"),HeaderComponent:l("Header"),headerFooterTag:a,itemClassName:n,ItemComponent:l("Item","div"),itemContent:e,listClassName:o,ListComponent:l("List","div"),readyStateChanged:c,reportReadyState:d,ScrollerComponent:l("Scroller","div"),scrollerRef:s,ScrollSeekPlaceholder:l("ScrollSeekPlaceholder","div")}})),A$=Vy((([e,t])=>({...e,...t})),Cy(O$,M$)),B$=o.memo((function(){const t=H$("gridState"),r=H$("listClassName"),n=H$("itemClassName"),i=H$("itemContent"),a=H$("computeItemKey"),s=H$("isSeeking"),l=Y$("scrollHeight"),c=H$("ItemComponent"),d=H$("ListComponent"),u=H$("ScrollSeekPlaceholder"),h=H$("context"),f=Y$("itemDimensions"),p=Y$("gap"),g=H$("log"),m=H$("stateRestoreInProgress"),b=Y$("reportReadyState"),v=Jy(o.useMemo((()=>e=>{const t=e.parentElement.parentElement.scrollHeight;l(t);const r=e.firstChild;if(r){const{height:e,width:t}=r.getBoundingClientRect();f({height:e,width:t})}p({column:K$("column-gap",getComputedStyle(e).columnGap,g),row:K$("row-gap",getComputedStyle(e).rowGap,g)})}),[l,f,p,g]),!0,!1);return Lw((()=>{t.itemHeight>0&&t.itemWidth>0&&b(!0)}),[t]),m?null:e(d,{className:r,ref:v,...r$(d,h),"data-testid":"virtuoso-item-list",style:{paddingBottom:t.offsetBottom,paddingTop:t.offsetTop},children:t.items.map((r=>{const o=a(r.index,r.data,h);return s?e(u,{...r$(u,h),height:t.itemHeight,index:r.index,width:t.itemWidth},o):k(c,{...r$(c,h),className:n,"data-index":r.index,key:o},i(r.index,r.data,h))}))})})),j$=o.memo((function(){const t=H$("HeaderComponent"),r=Y$("headerHeight"),n=H$("headerFooterTag"),i=Jy(o.useMemo((()=>e=>{r(_x(e,"height"))}),[r]),!0,!1),a=H$("context");return t?e(n,{ref:i,children:e(t,{...r$(t,a)})}):null})),z$=o.memo((function(){const t=H$("FooterComponent"),r=Y$("footerHeight"),n=H$("headerFooterTag"),i=Jy(o.useMemo((()=>e=>{r(_x(e,"height"))}),[r]),!0,!1),a=H$("context");return t?e(n,{ref:i,children:e(t,{...r$(t,a)})}):null})),R$=({children:t})=>{const r=o.useContext(Rw),n=Y$("itemDimensions"),i=Y$("viewportDimensions"),a=Jy(o.useMemo((()=>e=>{i(e.getBoundingClientRect())}),[i]),!0,!1);return o.useEffect((()=>{r&&(i({height:r.viewportHeight,width:r.viewportWidth}),n({height:r.itemHeight,width:r.itemWidth}))}),[r,i,n]),e("div",{ref:a,style:e$(!1),children:t})},L$=({children:t})=>{const r=o.useContext(Rw),n=Y$("windowViewportRect"),i=Y$("itemDimensions"),a=H$("customScrollParent"),s=nx(n,a,!1);return o.useEffect((()=>{r&&(i({height:r.itemHeight,width:r.itemWidth}),n({offsetTop:0,visibleHeight:r.viewportHeight,visibleWidth:r.viewportWidth}))}),[r,n,i]),e("div",{ref:s,style:e$(!1),children:t})},P$=o.memo((function({...r}){const n=H$("useWindowScroll"),o=H$("customScrollParent"),i=o||n?U$:V$,a=o||n?L$:R$,s=H$("context");return e(i,{...r,...r$(i,s),children:t(a,{children:[e(j$,{}),e(B$,{}),e(z$,{})]})})})),{Component:N$,useEmitter:W$,useEmitterValue:H$,usePublisher:Y$}=jw(A$,{events:{atBottomStateChange:"atBottomStateChange",atTopStateChange:"atTopStateChange",endReached:"endReached",isScrolling:"isScrolling",rangeChanged:"rangeChanged",readyStateChanged:"readyStateChanged",startReached:"startReached",stateChanged:"stateChanged"},methods:{scrollBy:"scrollBy",scrollTo:"scrollTo",scrollToIndex:"scrollToIndex"},optional:{components:"components",computeItemKey:"computeItemKey",context:"context",customScrollParent:"customScrollParent",data:"data",headerFooterTag:"headerFooterTag",increaseViewportBy:"increaseViewportBy",initialItemCount:"initialItemCount",initialTopMostItemIndex:"initialTopMostItemIndex",itemClassName:"itemClassName",itemContent:"itemContent",listClassName:"listClassName",logLevel:"logLevel",overscan:"overscan",restoreStateFrom:"restoreStateFrom",scrollerRef:"scrollerRef",scrollSeekConfiguration:"scrollSeekConfiguration",totalCount:"totalCount",useWindowScroll:"useWindowScroll"}},P$),V$=a$({useEmitter:W$,useEmitterValue:H$,usePublisher:Y$}),U$=s$({useEmitter:W$,useEmitterValue:H$,usePublisher:Y$});function K$(e,t,r){return"normal"!==t&&!(null!=t&&t.endsWith("px"))&&r(`${e} was not resolved to pixel value correctly`,t,Gy.WARN),"normal"===t?0:parseInt(null!=t?t:"0",10)}const q$=o.createContext({focusedIndex:-1,setFocusedIndex:()=>{}}),Z$=({children:t})=>{const[r,n]=g(-1);return e(q$.Provider,{value:{focusedIndex:r,setFocusedIndex:n},children:t})},G$=F.div`
    border: ${ia["width-010"]} ${ia.solid} ${ra.border};
    border-radius: ${sa.sm};
    background: ${ra.bg};

    --x-spacing: 0px;
    --available-width: calc(100vw - var(--x-spacing) * 2);

    ${da.MaxWidth.sm} {
        --x-spacing: ${ca["sm-margin"]}px;
        max-height: 15rem;
    }

    ${da.MaxWidth.xs} {
        --x-spacing: ${ca["xs-margin"]}px;
    }

    ${da.MaxWidth.xxs} {
        --x-spacing: ${ca["xxs-margin"]}px;
    }

    max-width: var(--available-width);

    ${e=>e.$customWidth?`width: ${e.$customWidth};`:e.$width?`width: ${e.$width}px; min-width: min(23rem, var(--available-width));`:"min-width: min(23rem, var(--available-width));"}

    max-height: min(27rem, var(--available-height, infinity * 1px));
    overflow: hidden;
    overflow-y: auto;
    ${e=>"small"===e.$variant?na["body-md-regular"]:na["body-baseline-regular"]}

    &::-webkit-scrollbar {
        width: 14px;
    }

    &::-webkit-scrollbar-track {
        background: transparent;
    }

    &::-webkit-scrollbar-thumb {
        background: ${ra["bg-inverse-subtlest"]};
        border: 5px solid transparent;
        border-radius: ${sa.full};
        background-clip: padding-box;
    }
`,Q$=F.div`
    background: transparent;
    padding: ${aa["spacing-8"]};
`,X$=F.ul`
    list-style-type: none;
`,J$=F.li`
    display: flex;
    align-items: flex-start;
    gap: ${aa["spacing-8"]};
    padding: ${aa["spacing-12"]} ${aa["spacing-8"]};
    cursor: pointer;
    border: none;
    border-radius: ${sa.none};
    outline: none;

    ${e=>e.$disabled?O`
                cursor: not-allowed;
            `:e.$active&&e.$selected?O`
                background: ${ra["bg-hover"]};
            `:e.$active?O`
                background: ${ra["bg-hover-subtle"]};
            `:void 0}
`,eC=F(ye)`
    flex-shrink: 0;
    height: 1lh;
    width: 1rem;
    color: ${ra["icon-selected"]};
`,tC=F.div`
    flex-shrink: 0;
    height: 1lh;
    width: 1rem;
`,rC=F(ve)`
    flex-shrink: 0;
    height: 1lh;
    width: 1lh;
    color: ${ra["icon-selected"]};
`,nC=F(me)`
    flex-shrink: 0;
    height: 1lh;
    width: 1lh;
    color: ${ra["icon-primary-subtlest"]};
`,oC=F(be)`
    flex-shrink: 0;
    height: 1lh;
    width: 1lh;
    color: ${ra["icon-disabled-subtle"]};
`,iC=F.div`
    width: 100%;
    display: flex;
    justify-content: flex-end;
`,aC=F(Vf)`
    cursor: pointer;
    overflow: hidden;
    color: ${ra["text-primary"]};
    font-size: inherit;
`,sC=F(aC)`
    ${na["body-baseline-semibold"]}
`,lC=F(aC)`
    ${na["body-md-semibold"]}
    padding: ${aa["spacing-8"]} ${aa["spacing-8"]};
`,cC=F.div`
    width: 100%;
    display: flex;
    padding: ${aa["spacing-12"]} ${aa["spacing-16"]};
    align-items: center;
`,dC=F(se)`
    margin-right: ${aa["spacing-4"]};
    color: ${ra["icon-error"]};
    height: 1em;
    width: 1em;
`,uC=F(yh)`
    margin-right: ${aa["spacing-8"]};
    color: ${ra.icon};
`,hC=F.div`
    ${Ud()}
    color: ${ra["text-subtle"]};
    padding: 0 ${aa["spacing-16"]} ${aa["spacing-12"]}
        ${aa["spacing-16"]};
`,fC=F.div`
    background: ${ra["bg-strong"]};
    border-radius: ${sa.sm};
    display: flex;
    align-items: center;

    ${e=>"small"===e.$variant?na["body-md-regular"]:na["body-baseline-regular"]}
`,pC=F.label`
    flex: 1;
    display: flex;
    align-items: center;
    gap: ${aa["spacing-8"]};
    padding: ${e=>"small"===e.$variant?O`
                  ${aa["spacing-8"]} ${aa["spacing-16"]}
              `:O`10px ${aa["spacing-8"]}`};
`,gC=F(Yf)`
    flex: 1;
`,mC=F(xe)`
    color: ${ra.icon};
    flex-shrink: 0;
    height: 1em;
    width: 1em;
`,bC=F(Wd)`
    flex-shrink: 0;
    align-self: stretch;
    box-sizing: content-box;
    padding: ${aa["spacing-8"]};
    margin-left: -${aa["spacing-8"]};
    color: ${ra.icon};
    cursor: pointer;
    font-size: inherit;

    svg {
        flex-shrink: 0;
        height: 1em;
        width: 1em;
    }
`,vC=u(((r,n)=>{var{value:o,variant:i,onClear:a}=r,s=ct(r,["value","variant","onClear"]);return t(fC,{$variant:i,children:[t(pC,{$variant:i,children:[e(mC,{"aria-hidden":!0}),e(gC,Object.assign({ref:n,value:o,$variant:i},s))]}),o&&e(bC,{"aria-label":"Clear search",focusOutline:"browser",onClick:a,children:e(P,{"aria-hidden":!0})})]})})),yC=u((({listItems:n,multiSelect:o,maxSelectable:i,selectedItems:a,disableItemFocus:l,itemsLoadState:u="success",itemTruncationType:f="end",itemMaxLines:p=2,labelDisplayType:m="inline",variant:v="default",listboxId:y,matchElementWidth:x=!1,width:w,topScrollItem:$,onSelectItem:C,onSelectAll:S,onDismiss:D,onRetry:k,valueExtractor:E,listExtractor:F,renderListItem:O,renderCustomCallToAction:_,enableSearch:T,hideNoResultsDisplay:I,noResultsDescription:M,customLabels:A,searchPlaceholder:B,searchFunction:j,onSearch:z},R)=>{const{noResultsLabel:L="No results found.",selectAllButtonLabel:P="Select all",clearAllButtonLabel:N="Clear all"}=A||{},W=(null==A?void 0:A.searchPlaceholder)||B||"Search",H=(null==A?void 0:A.noResultsDescription)||M,{focusedIndex:Y,setFocusedIndex:V}=b(q$),{elementWidth:U,setFloatingRef:K,getFloatingProps:q,styles:Z}=sh(),[G,Q]=g(""),[X,J]=g(null!=n?n:[]),ee=Bd(u),te=Md(),re=s(null),ne=s(null),oe=s([]),ie=s(null),ae=s(null),se=!!i&&!!a&&(null==a?void 0:a.length)===i,le=e=>{const t=F?F(e):null==e?void 0:e.toString();return"object"==typeof t?{title:t.title,secondaryLabel:t.secondaryLabel}:{title:null!=t?t:""}},ce=d((e=>!!uy(a,(t=>fy(t,e)))),[a]),de=Td((()=>null==j?void 0:j(G))),ue=Td((()=>null==n?void 0:n.filter((e=>{const{title:t,secondaryLabel:r}=le(e),n=G.trim().toLowerCase();return t.toLowerCase().includes(n)||r&&r.toLowerCase().includes(n)})))),he=d((e=>{var t,r;if(l)return;if(ie.current)return V(-1),void setTimeout((()=>{var e;return null===(e=ie.current)||void 0===e?void 0:e.focus()}),0);const n=null!=X?X:[];if(0===n.length)return;if(void 0!==(null==e?void 0:e.index)){const r=Math.max(0,Math.min(e.index,n.length-1));return null===(t=ae.current)||void 0===t||t.scrollToIndex({index:r,align:"center"}),V(r),void setTimeout((()=>{var e;return null===(e=oe.current[r])||void 0===e?void 0:e.focus()}),0)}const o=(null==e?void 0:e.preferSelected)?n.findIndex((e=>ce(e))):-1,i=-1!==o?o:Y>=0&&Y<n.length?Y:0;null===(r=ae.current)||void 0===r||r.scrollToIndex({index:i,align:"center"}),V(i),setTimeout((()=>{var e;return null===(e=oe.current[i])||void 0===e?void 0:e.focus()}),0)}),[ce,l,X,Y,V]),fe=(e,t)=>{se&&!ce(e)||(V(t),null==C||C(e,(e=>E?E(e):e)(e)))},pe=e=>{const t=e.target.value;Q(t),null==z||z()},ge=()=>{var e;Q(""),null===(e=ie.current)||void 0===e||e.focus(),null==z||z()},me=()=>null==k?void 0:k();Id("keydown",(e=>{var t,r;switch(e.code){case"ArrowDown":if(e.preventDefault(),Y<X.length-1){const e=Y+1;null===(t=oe.current[e])||void 0===t||t.focus(),V(e)}break;case"ArrowUp":if(e.preventDefault(),Y>0){const e=Y-1;null===(r=oe.current[e])||void 0===r||r.focus(),V(e)}else 0===Y&&ie.current&&(ie.current.focus(),V(-1));break;case"Space":case"Enter":document.activeElement===oe.current[Y]&&(e.preventDefault(),X[Y]&&fe(X[Y],Y))}})),h(R,(()=>({refocus:he})),[he]),c((()=>{var e;if(!$)return void(null===(e=ae.current)||void 0===e||e.scrollTo({top:0}));const t=setTimeout((()=>{if(!n)return;const e=n.indexOf($);ae.current&&-1!==e&&(ae.current.scrollToIndex({index:e}),V(e))}),0);return()=>clearTimeout(t)}),[oe,n,V,$]),c((()=>{l||te&&ee&&"success"===u&&ie.current&&(V(-1),ie.current.focus())}),[te,ee,u,V,l]),c((()=>{var e;J(null!==(e=""===G?n:j?de():ue())&&void 0!==e?e:[])}),[de,ue,n,j,G]),c((()=>{var e,t,r;if(te)return;if(l||!n)return;const o=n.findIndex((e=>ce(e)));ie.current?(V(-1),setTimeout((()=>{var e;return null===(e=ie.current)||void 0===e?void 0:e.focus()}),200)):Y>0?(null===(e=ae.current)||void 0===e||e.scrollToIndex({index:Y,align:"center"}),setTimeout((()=>{var e;return null===(e=oe.current[Y])||void 0===e?void 0:e.focus()}),200)):-1!==o?(null===(t=ae.current)||void 0===t||t.scrollToIndex({index:o,align:"center"}),V(o),setTimeout((()=>{var e;return null===(e=oe.current[o])||void 0===e?void 0:e.focus()}),200)):(null===(r=ae.current)||void 0===r||r.scrollToIndex({index:0}),V(0),setTimeout((()=>{var e;return null===(e=oe.current[0])||void 0===e?void 0:e.focus()}),200))}),[ce,l,Y,n,te,V]);const be=t=>o?e(se&&!t?oC:t?rC:nC,{"aria-hidden":!0}):t?e(eC,{"aria-hidden":!0}):e(tC,{}),ve=(t,r)=>{const{title:n,secondaryLabel:o}=le(t);return e(Fg,{displayType:m,label:n,maxLines:p,selected:r,disabled:!r&&se,sublabel:o,truncationType:f,variant:v})},ye=(n,i)=>{if(!k||"success"===u){const a=ce(n),s=i===Y;return e(J$,{"aria-selected":a,"aria-multiselectable":o,"aria-disabled":!a&&se,"aria-posinset":i+1,"aria-setsize":null==X?void 0:X.length,"data-testid":"list-item",onClick:()=>fe(n,i),onMouseEnter:()=>(e=>V(e))(i),ref:e=>{oe.current[i]=e},role:"option",tabIndex:s?0:-1,$active:s,$selected:a,$disabled:!a&&se,children:O?O(n,{selected:a}):t(r,{children:[be(a),ve(n,a)]})},((e,t)=>`item_${t}__${E?E(e):e}`)(n,i))}},xe=()=>{if((T||j)&&"success"===u)return e(vC,{ref:ie,onChange:pe,value:G,placeholder:W,"data-testid":"search-input","aria-label":"Enter text to search",onClear:ge,variant:v})},we=()=>{if(a&&o&&X.length>0&&!G&&"success"===u)return e(iC,{children:e(lC,{onClick:S,type:"button",$variant:v,children:i||0!==a.length?N:P})})},$e=()=>{if(!I&&(G||!T)&&0===X.length&&"success"===u)return t(r,{children:[t(cC,{"data-testid":"list-no-results",children:[e(dC,{"data-testid":"no-result-icon"}),L]}),H&&e(hC,{"data-testid":"no-result-desc",children:H})]})},Ce=()=>{if(k&&"loading"===u)return t(cC,{"data-testid":"list-loading",children:[e(uC,{}),"Loading..."]})},Se=()=>{if(k&&"fail"===u)return t(cC,{"data-testid":"list-fail",children:[e(dC,{"data-testid":"load-error-icon"}),"Failed to load. ",e(sC,{onClick:me,type:"button",$variant:v,children:"Try again."})]})},De=()=>{var t;const r="test"===process.env.NODE_ENV;return e(X$,{role:"listbox",id:y,children:e(v$,Object.assign({ref:ae,style:{height:"100%"},data:X,customScrollParent:null!==(t=re.current)&&void 0!==t?t:void 0,itemContent:(e,t)=>ye(t,e)},r?{initialItemCount:X.length}:{}),r?X.length:void 0)})};return t(G$,Object.assign({"data-testid":"dropdown-container",ref:Fd(re,K),style:Z},q(),{$width:x?U:void 0,$customWidth:w,$variant:v,children:[t(Q$,{ref:ne,"data-testid":"dropdown-list",children:[xe(),we(),$e(),Ce(),Se(),De()]}),(()=>{if(_)return e("div",{"data-testid":"custom-cta",children:_(D,X)})})()]}))})),xC=F(Vf)`
    display: flex;
    align-items: center;
    gap: ${aa["spacing-8"]};
    width: 100%;
    padding: ${e=>e.$readOnly?`0 ${aa["spacing-16"]}`:aa["spacing-16"]};

    ${e=>"small"===e.$variant?O`
                  ${na["body-md-regular"]}
                  height: calc(2.5rem - 2px); // exclude top and bottom borders
              `:O`
                  ${na["body-baseline-regular"]}
                  height: calc(3rem - 2px);
              `}

    &:disabled {
        cursor: not-allowed;
    }

    &:focus-visible {
        outline: 2px solid ${ra["focus-ring"]};
        outline-offset: -2px;
    }
`,wC=F.div`
    display: flex;
    align-items: center;
    transform: rotate(${e=>e.$expanded?180:0}deg);
    transition: transform ${oa["duration-250"]} ${oa["ease-default"]};

    svg {
        color: ${ra.icon};
        height: 1em;
        width: 1em;
    }
`,$C=u(((r,n)=>{var{children:o,disabled:i,expanded:a,listboxId:s,popupRole:l,readOnly:c,variant:d}=r,u=ct(r,["children","disabled","expanded","listboxId","popupRole","readOnly","variant"]);return t(xC,Object.assign({ref:n,type:"button",role:"combobox","aria-expanded":a,"aria-haspopup":l,"aria-controls":a?s:void 0,"data-testid":"selector","aria-disabled":i,"aria-readonly":c,$variant:d,$readOnly:c},u,{children:[o,!c&&e(wC,{$expanded:a,$variant:d,children:e(le,{"aria-hidden":!0})})]}))}));var CC=Symbol.for("immer-nothing"),SC=Symbol.for("immer-draftable"),DC=Symbol.for("immer-state"),kC="production"!==process.env.NODE_ENV?[function(e){return`The plugin for '${e}' has not been loaded into Immer. To enable the plugin, import and call \`enable${e}()\` when initializing your application.`},function(e){return`produce can only be called on things that are draftable: plain objects, arrays, Map, Set or classes that are marked with '[immerable]: true'. Got '${e}'`},"This object has been frozen and should not be mutated",function(e){return"Cannot use a proxy that has been revoked. Did you pass an object from inside an immer function to an async process? "+e},"An immer producer returned a new value *and* modified its draft. Either return a new value *or* modify the draft.","Immer forbids circular references","The first or second argument to `produce` must be a function","The third argument to `produce` must be a function or undefined","First argument to `createDraft` must be a plain object, an array, or an immerable object","First argument to `finishDraft` must be a draft returned by `createDraft`",function(e){return`'current' expects a draft, got: ${e}`},"Object.defineProperty() cannot be used on an Immer draft","Object.setPrototypeOf() cannot be used on an Immer draft","Immer only supports deleting array indices","Immer only supports setting array indices and the 'length' property",function(e){return`'original' expects a draft, got: ${e}`}]:[];function EC(e,...t){if("production"!==process.env.NODE_ENV){const r=kC[e],n="function"==typeof r?r.apply(null,t):r;throw new Error(`[Immer] ${n}`)}throw new Error(`[Immer] minified error nr: ${e}. Full error at: https://bit.ly/3cXEKWf`)}var FC=Object.getPrototypeOf;function OC(e){return!!e&&!!e[DC]}function _C(e){return!!e&&(IC(e)||Array.isArray(e)||!!e[SC]||!!e.constructor?.[SC]||zC(e)||RC(e))}var TC=Object.prototype.constructor.toString();function IC(e){if(!e||"object"!=typeof e)return!1;const t=FC(e);if(null===t)return!0;const r=Object.hasOwnProperty.call(t,"constructor")&&t.constructor;return r===Object||"function"==typeof r&&Function.toString.call(r)===TC}function MC(e,t){0===AC(e)?Reflect.ownKeys(e).forEach((r=>{t(r,e[r],e)})):e.forEach(((r,n)=>t(n,r,e)))}function AC(e){const t=e[DC];return t?t.type_:Array.isArray(e)?1:zC(e)?2:RC(e)?3:0}function BC(e,t){return 2===AC(e)?e.has(t):Object.prototype.hasOwnProperty.call(e,t)}function jC(e,t,r){const n=AC(e);2===n?e.set(t,r):3===n?e.add(r):e[t]=r}function zC(e){return e instanceof Map}function RC(e){return e instanceof Set}function LC(e){return e.copy_||e.base_}function PC(e,t){if(zC(e))return new Map(e);if(RC(e))return new Set(e);if(Array.isArray(e))return Array.prototype.slice.call(e);const r=IC(e);if(!0===t||"class_only"===t&&!r){const t=Object.getOwnPropertyDescriptors(e);delete t[DC];let r=Reflect.ownKeys(t);for(let n=0;n<r.length;n++){const o=r[n],i=t[o];!1===i.writable&&(i.writable=!0,i.configurable=!0),(i.get||i.set)&&(t[o]={configurable:!0,writable:!0,enumerable:i.enumerable,value:e[o]})}return Object.create(FC(e),t)}{const t=FC(e);if(null!==t&&r)return{...e};const n=Object.create(t);return Object.assign(n,e)}}function NC(e,t=!1){return HC(e)||OC(e)||!_C(e)||(AC(e)>1&&(e.set=e.add=e.clear=e.delete=WC),Object.freeze(e),t&&Object.entries(e).forEach((([e,t])=>NC(t,!0)))),e}function WC(){EC(2)}function HC(e){return Object.isFrozen(e)}var YC,VC={};function UC(e){const t=VC[e];return t||EC(0,e),t}function KC(){return YC}function qC(e,t){t&&(UC("Patches"),e.patches_=[],e.inversePatches_=[],e.patchListener_=t)}function ZC(e){GC(e),e.drafts_.forEach(XC),e.drafts_=null}function GC(e){e===YC&&(YC=e.parent_)}function QC(e){return YC={drafts_:[],parent_:YC,immer_:e,canAutoFreeze_:!0,unfinalizedDrafts_:0}}function XC(e){const t=e[DC];0===t.type_||1===t.type_?t.revoke_():t.revoked_=!0}function JC(e,t){t.unfinalizedDrafts_=t.drafts_.length;const r=t.drafts_[0];return void 0!==e&&e!==r?(r[DC].modified_&&(ZC(t),EC(4)),_C(e)&&(e=eS(t,e),t.parent_||rS(t,e)),t.patches_&&UC("Patches").generateReplacementPatches_(r[DC].base_,e,t.patches_,t.inversePatches_)):e=eS(t,r,[]),ZC(t),t.patches_&&t.patchListener_(t.patches_,t.inversePatches_),e!==CC?e:void 0}function eS(e,t,r){if(HC(t))return t;const n=t[DC];if(!n)return MC(t,((o,i)=>tS(e,n,t,o,i,r))),t;if(n.scope_!==e)return t;if(!n.modified_)return rS(e,n.base_,!0),n.base_;if(!n.finalized_){n.finalized_=!0,n.scope_.unfinalizedDrafts_--;const t=n.copy_;let o=t,i=!1;3===n.type_&&(o=new Set(t),t.clear(),i=!0),MC(o,((o,a)=>tS(e,n,t,o,a,r,i))),rS(e,t,!1),r&&e.patches_&&UC("Patches").generatePatches_(n,r,e.patches_,e.inversePatches_)}return n.copy_}function tS(e,t,r,n,o,i,a){if("production"!==process.env.NODE_ENV&&o===r&&EC(5),OC(o)){const a=eS(e,o,i&&t&&3!==t.type_&&!BC(t.assigned_,n)?i.concat(n):void 0);if(jC(r,n,a),!OC(a))return;e.canAutoFreeze_=!1}else a&&r.add(o);if(_C(o)&&!HC(o)){if(!e.immer_.autoFreeze_&&e.unfinalizedDrafts_<1)return;eS(e,o),t&&t.scope_.parent_||"symbol"==typeof n||!Object.prototype.propertyIsEnumerable.call(r,n)||rS(e,o)}}function rS(e,t,r=!1){!e.parent_&&e.immer_.autoFreeze_&&e.canAutoFreeze_&&NC(t,r)}var nS={get(e,t){if(t===DC)return e;const r=LC(e);if(!BC(r,t))return function(e,t,r){const n=aS(t,r);return n?"value"in n?n.value:n.get?.call(e.draft_):void 0}(e,r,t);const n=r[t];return e.finalized_||!_C(n)?n:n===iS(e.base_,t)?(lS(e),e.copy_[t]=cS(n,e)):n},has:(e,t)=>t in LC(e),ownKeys:e=>Reflect.ownKeys(LC(e)),set(e,t,r){const n=aS(LC(e),t);if(n?.set)return n.set.call(e.draft_,r),!0;if(!e.modified_){const n=iS(LC(e),t),o=n?.[DC];if(o&&o.base_===r)return e.copy_[t]=r,e.assigned_[t]=!1,!0;if(function(e,t){return e===t?0!==e||1/e==1/t:e!=e&&t!=t}(r,n)&&(void 0!==r||BC(e.base_,t)))return!0;lS(e),sS(e)}return e.copy_[t]===r&&(void 0!==r||t in e.copy_)||Number.isNaN(r)&&Number.isNaN(e.copy_[t])||(e.copy_[t]=r,e.assigned_[t]=!0),!0},deleteProperty:(e,t)=>(void 0!==iS(e.base_,t)||t in e.base_?(e.assigned_[t]=!1,lS(e),sS(e)):delete e.assigned_[t],e.copy_&&delete e.copy_[t],!0),getOwnPropertyDescriptor(e,t){const r=LC(e),n=Reflect.getOwnPropertyDescriptor(r,t);return n?{writable:!0,configurable:1!==e.type_||"length"!==t,enumerable:n.enumerable,value:r[t]}:n},defineProperty(){EC(11)},getPrototypeOf:e=>FC(e.base_),setPrototypeOf(){EC(12)}},oS={};function iS(e,t){const r=e[DC];return(r?LC(r):e)[t]}function aS(e,t){if(!(t in e))return;let r=FC(e);for(;r;){const e=Object.getOwnPropertyDescriptor(r,t);if(e)return e;r=FC(r)}}function sS(e){e.modified_||(e.modified_=!0,e.parent_&&sS(e.parent_))}function lS(e){e.copy_||(e.copy_=PC(e.base_,e.scope_.immer_.useStrictShallowCopy_))}MC(nS,((e,t)=>{oS[e]=function(){return arguments[0]=arguments[0][0],t.apply(this,arguments)}})),oS.deleteProperty=function(e,t){return"production"!==process.env.NODE_ENV&&isNaN(parseInt(t))&&EC(13),oS.set.call(this,e,t,void 0)},oS.set=function(e,t,r){return"production"!==process.env.NODE_ENV&&"length"!==t&&isNaN(parseInt(t))&&EC(14),nS.set.call(this,e[0],t,r,e[0])};function cS(e,t){const r=zC(e)?UC("MapSet").proxyMap_(e,t):RC(e)?UC("MapSet").proxySet_(e,t):function(e,t){const r=Array.isArray(e),n={type_:r?1:0,scope_:t?t.scope_:KC(),modified_:!1,finalized_:!1,assigned_:{},parent_:t,base_:e,draft_:null,copy_:null,revoke_:null,isManual_:!1};let o=n,i=nS;r&&(o=[n],i=oS);const{revoke:a,proxy:s}=Proxy.revocable(o,i);return n.draft_=s,n.revoke_=a,s}(e,t);return(t?t.scope_:KC()).drafts_.push(r),r}function dS(e){if(!_C(e)||HC(e))return e;const t=e[DC];let r;if(t){if(!t.modified_)return t.base_;t.finalized_=!0,r=PC(e,t.scope_.immer_.useStrictShallowCopy_)}else r=PC(e,!0);return MC(r,((e,t)=>{jC(r,e,dS(t))})),t&&(t.finalized_=!1),r}var uS=new class{constructor(e){this.autoFreeze_=!0,this.useStrictShallowCopy_=!1,this.produce=(e,t,r)=>{if("function"==typeof e&&"function"!=typeof t){const r=t;t=e;const n=this;return function(e=r,...o){return n.produce(e,(e=>t.call(this,e,...o)))}}let n;if("function"!=typeof t&&EC(6),void 0!==r&&"function"!=typeof r&&EC(7),_C(e)){const o=QC(this),i=cS(e,void 0);let a=!0;try{n=t(i),a=!1}finally{a?ZC(o):GC(o)}return qC(o,r),JC(n,o)}if(!e||"object"!=typeof e){if(n=t(e),void 0===n&&(n=e),n===CC&&(n=void 0),this.autoFreeze_&&NC(n,!0),r){const t=[],o=[];UC("Patches").generateReplacementPatches_(e,n,t,o),r(t,o)}return n}EC(1,e)},this.produceWithPatches=(e,t)=>{if("function"==typeof e)return(t,...r)=>this.produceWithPatches(t,(t=>e(t,...r)));let r,n;const o=this.produce(e,t,((e,t)=>{r=e,n=t}));return[o,r,n]},"boolean"==typeof e?.autoFreeze&&this.setAutoFreeze(e.autoFreeze),"boolean"==typeof e?.useStrictShallowCopy&&this.setUseStrictShallowCopy(e.useStrictShallowCopy)}createDraft(e){_C(e)||EC(8),OC(e)&&(e=function(e){OC(e)||EC(10,e);return dS(e)}(e));const t=QC(this),r=cS(e,void 0);return r[DC].isManual_=!0,GC(t),r}finishDraft(e,t){const r=e&&e[DC];r&&r.isManual_||EC(9);const{scope_:n}=r;return qC(n,t),JC(void 0,n)}setAutoFreeze(e){this.autoFreeze_=e}setUseStrictShallowCopy(e){this.useStrictShallowCopy_=e}applyPatches(e,t){let r;for(r=t.length-1;r>=0;r--){const n=t[r];if(0===n.path.length&&"replace"===n.op){e=n.value;break}}r>-1&&(t=t.slice(r+1));const n=UC("Patches").applyPatches_;return OC(e)?n(e,t):this.produce(e,(e=>n(e,t)))}},hS=uS.produce;uS.produceWithPatches.bind(uS),uS.setAutoFreeze.bind(uS),uS.setUseStrictShallowCopy.bind(uS),uS.applyPatches.bind(uS),uS.createDraft.bind(uS),uS.finishDraft.bind(uS);var fS=ab,pS=Rb,gS=Em,mS=fr,bS=cb,vS=_m,yS=tb,xS=Vm,wS=Object.prototype.hasOwnProperty;var $S=function(e){if(null==e)return!0;if(bS(e)&&(mS(e)||"string"==typeof e||"function"==typeof e.splice||vS(e)||xS(e)||gS(e)))return!e.length;var t=pS(e);if("[object Map]"==t||"[object Set]"==t)return!e.size;if(yS(e))return!fS(e).length;for(var r in e)if(wS.call(e,r))return!1;return!0},CS=ze($S);const SS=(e,t,r)=>{const n=hS(e,(e=>{for(let n=e.length-1;n>=0;n--){const o=e[n],i=kS(o.keyPath);if(o.checked=t.has(i),o.hasSubItems&&r&&!0!==o.checked){const t=o.subItemIndexes.map((t=>e[t])),r=t.every((e=>!0===e.checked)),n=t.some((e=>!1!==e.checked));r?o.checked=!0:n&&(o.checked="mixed")}}}));return n},DS=(e,t)=>{const[r,...n]=t;if(CS(e)||CS(r))return;const o=e.find((e=>e.key===r));return o&&n.length?DS(o.subItems,n):o},kS=e=>e.join(","),ES=e=>new Set(e.map((e=>e.join(",")))),FS=F.li`
    display: ${e=>e.$visible?"flex":"none"};
`,OS=F.div`
    flex: 1;
    display: flex;
    align-items: flex-start;
    gap: ${aa["spacing-8"]};
    padding: ${aa["spacing-12"]} ${aa["spacing-8"]};
    cursor: ${e=>e.$toggleable?"default":"pointer"};
    overflow: hidden; // required for label to truncate properly
    border-radius: ${sa.none};
    outline: none;

    ${e=>e.$active&&O`
            background: ${ra["bg-hover"]};
        `}
`,_S=F.div`
    height: 1px;
    width: calc((1lh + ${aa["spacing-8"]}) * ${e=>e.$level});
`,TS=F.div`
    width: 1lh;
    height: 1lh;
    color: ${ra["icon-primary"]};
    cursor: pointer;

    svg {
        width: 1lh;
        height: 1lh;
        transition: transform ${oa["duration-350"]}
            ${oa["ease-standard"]};

        ${e=>{if(e.$expanded)return O`
                    transform: rotate(90deg);
                `}}
    }
`,IS=F.div`
    width: 1lh;
    height: 1lh;
    margin-right: ${aa["spacing-8"]};
`,MS=F.div`
    flex-shrink: 0;
    height: 1lh;
    width: ${e=>e.$hasNestedSiblings?"1lh":aa["spacing-16"]};

    display: flex;
    justify-content: center;
`,AS=F($e)`
    flex-shrink: 0;
    height: 1lh;
    width: 1lh;
    color: ${ra["icon-selected"]};
`,BS=({listItems:n,multiSelect:o=!1,selectedKeyPaths:i,itemsLoadState:l="success",itemTruncationType:d="end",itemMaxLines:u=2,variant:h="default",listboxId:f,matchElementWidth:p=!1,width:m,mode:b="default",selectableCategory:v,onSelectItem:y,onSelectAll:x,onRetry:w,enableSearch:$,hideNoResultsDisplay:C,noResultsDescription:S,customLabels:D,searchPlaceholder:k,onSearch:E})=>{const{noResultsLabel:F="No results found.",selectAllButtonLabel:O="Select all",clearAllButtonLabel:_="Clear all"}=D||{},T=(null==D?void 0:D.searchPlaceholder)||k||"Search",I=(null==D?void 0:D.noResultsDescription)||S,M=o||v,{elementWidth:A,setFloatingRef:B,getFloatingProps:j,styles:z}=sh(),[R,L]=g(""),P=R.toLowerCase().trim(),[N,W]=g(!1),H=s(null),Y=s(null),V=s([]),U=s(null),K=Md(),[q,Z]=g([]),[G,Q]=g([]),X=N?G:q,J=a((()=>{let e=0;for(const t of q)t.level>e&&(e=t.level);return e}),[q]),[ee,te]=g(0),[re,ne]=g([]),[oe,ie]=g(0),ae=e=>{const t=e.target.value;L(t),""===t?W(!1):t.trim().length>=3&&W(!0),null==E||E()},se=()=>{var e;L(""),W(!1),null===(e=U.current)||void 0===e||e.focus(),null==E||E()},le=()=>{null==w||w()},ce=()=>{if(0===i.size){const e=[],t=[];q.forEach((r=>{r.hasSubItems||(e.push(r.keyPath),t.push(r))})),null==x||x(e,t)}else null==x||x([],[])},de=Td(((e,t)=>((e,t,r,n,o)=>{const i=[],a=(e,s)=>{const l=[],c=e.some((e=>{var t;return null===(t=e.subItems)||void 0===t?void 0:t.length}));return e.forEach(((d,u)=>{var h,f;const p=s?s.level+1:0,g=s?[...s.keyPath,d.key]:[d.key],m=kS(g),b={item:d,index:i.length,indexInParent:u,parentSetSize:e.length,keyPath:g,parentIndex:s?s.index:-1,parentKeyPath:s?s.keyPath:[],level:p,visible:0===p||o||(null==s?void 0:s.expanded)||!1,expanded:o,checked:t.has(m),hasSubItems:!!(null===(h=d.subItems)||void 0===h?void 0:h.length),subItemIndexes:[],hasNestedSiblings:c,matched:!!n&&-1!==d.label.toLowerCase().indexOf(n),hasMatchedSubItems:!1};if(l.push(b),i.push(b),null===(f=d.subItems)||void 0===f?void 0:f.length){const e=a(d.subItems,b);if(r&&!0!==b.checked){const t=e.every((e=>!0===e.checked)),r=e.some((e=>!1!==e.checked));t?b.checked=!0:r&&(b.checked="mixed")}b.hasMatchedSubItems=e.some((e=>e.matched||e.hasMatchedSubItems)),b.subItemIndexes=e.map((e=>e.index))}})),l};return a(e,void 0),i})(e,i,o,P,t))),ue=Td((e=>{return i.size?(t=de(e,!1),hS(t,(e=>{const t=e.filter((e=>!0===e.checked));for(const r of t){let t=r.parentIndex;for(;t>=0;){const r=e[t];r.visible=!0,r.expanded=!0;for(const t of r.subItemIndexes)e[t].visible=!0;t=r.parentIndex}}}))):(e=>hS(e,(e=>{const t=e.findIndex((e=>e.hasSubItems));if(t<0)return;let r=t,n=0;for(let t=r;t<e.length;t++){const o=e[t].keyPath.length;if(o>n)n=o;else if(o<n)break;r=t,e[t].visible=!0,e[t].expanded=!0}for(let t=0;t<e.length;t++){const n=e[t],o=n.keyPath.slice(0,-1),i=e[r].keyPath.slice(0,o.length);fy(o,i)&&(n.visible=!0)}return e})))(de(e,!1));var t})),he=Td((e=>{const t=e=>{const r=[];for(const n of e){if(-1!==n.label.toLowerCase().indexOf(P))r.push(n);else if(n.subItems){const e=t(n.subItems);if(e.length>0){r.push(Object.assign(Object.assign({},n),{subItems:e}));continue}}}return r};return t(e)})),fe=Td((()=>{Z((e=>SS(e,i,o))),N&&Q((e=>SS(e,i,o)))})),pe=(e,t,r)=>{const n=((e,t,r)=>hS(e,(e=>{e[t].expanded=r;const n=e[t].keyPath;for(let o=t+1;o<e.length;o++){const t=e[o],i=e[t.parentIndex],a=t.keyPath.slice(0,n.length);if(!fy(n,a))break;t.visible=r&&i.expanded&&i.visible}})))(X,e,t);te(e),ie(r),N?Q(n):Z(n)};Id("keydown",(e=>{var t,r;switch(e.code){case"ArrowDown":{e.preventDefault();const r=((e,t,r)=>{for(let n=r;n<e.length;n++)if(t(e[n]))return e[n]})(X,(e=>e.visible),ee+1);r&&(ie((e=>e+1)),te(r.index),null===(t=V.current[r.index])||void 0===t||t.focus());break}case"ArrowUp":{e.preventDefault();const t=((e,t,r)=>{for(let n=r;n>=0;n--)if(t(e[n]))return e[n]})(X,(e=>e.visible),ee-1);t?(ie((e=>e-1)),te(t.index),null===(r=V.current[t.index])||void 0===r||r.focus()):0===oe&&U.current&&(U.current.focus(),ie(-1),te(-1));break}case"ArrowRight":e.preventDefault(),pe(ee,!0,oe);break;case"ArrowLeft":e.preventDefault(),pe(ee,!1,oe);break;case"Space":if(document.activeElement===V.current[ee]){e.preventDefault();const t=X[ee];if(t.hasSubItems&&!M)return;null==y||y(t)}}})),c((()=>{let e=[];"default"===b?e=ue(n):"expand"===b?e=de(n,!0):"collapse"===b&&(e=de(n,!1)),Z(e)}),[de,ue,n,b]),c((()=>{ne(X.filter((e=>e.visible)))}),[N,X]),c((()=>{fe()}),[o,i,fe]),c((()=>{if(N&&R.trim().length>=3){const e=he(n),t=(e=>hS(e,(e=>{for(const t of e)if(t.matched&&(t.visible=!0),t.hasMatchedSubItems){t.visible=!0,t.expanded=!0;for(const r of t.subItemIndexes)e[r].visible=!0}})))(de(e,!1));Q(t)}}),[he,de,n,N,R]),c((()=>{K||(U.current?(te(-1),ie(-1),setTimeout((()=>{var e;return null===(e=U.current)||void 0===e?void 0:e.focus()}),200)):V.current[ee]?setTimeout((()=>{var e;return null===(e=V.current[ee])||void 0===e?void 0:e.focus()}),200):(te(0),ie(0),setTimeout((()=>{var e;return null===(e=V.current[0])||void 0===e?void 0:e.focus()}),200)))}),[ee,oe,K]);const ge=()=>{if($&&"success"===l)return e(vC,{ref:U,onChange:ae,value:R,placeholder:T,"data-testid":"search-input","aria-label":"Enter text to search",onClear:se,variant:h})},me=()=>{if(o&&!N&&q.length>0&&"success"===l)return e(iC,{children:e(lC,{onClick:ce,type:"button",$variant:h,children:0===i.size?O:_})})},be=()=>{if(!C&&N&&0===G.length&&"success"===l)return t(r,{children:[t(cC,{"data-testid":"list-no-results",children:[e(dC,{"data-testid":"no-result-icon"}),F]}),I&&e(hC,{"data-testid":"no-result-desc",children:I})]})},ve=()=>{if(w&&"loading"===l)return t(cC,{"data-testid":"list-loading",children:[e(Bh,{$hasChildren:!0}),"Loading..."]})},ye=()=>{if(w&&"fail"===l)return t(cC,{"data-testid":"list-fail",children:[e(dC,{"data-testid":"load-error-icon"}),"Failed to load. ",e(sC,{onClick:le,type:"button",$variant:h,children:"Try again."})]})},xe=t=>{if(o)switch(t.checked){case"mixed":return e(AS,{"aria-hidden":!0});case!0:return e(rC,{"aria-hidden":!0});default:return e(nC,{"aria-hidden":!0})}if(!t.hasSubItems)return e(MS,{$hasNestedSiblings:t.hasNestedSiblings||0===t.level,children:t.checked&&e(eC,{"aria-hidden":!0})})},$e=(r,n)=>{const{level:i,visible:a,expanded:s,keyPath:l,checked:c,hasSubItems:h,indexInParent:f,parentSetSize:p}=r,g=r.index,m=oe===n,b=h&&!M;return t(FS,{$visible:a,children:[J>0&&e(_S,{$level:i}),J>0&&!h&&o&&e(IS,{}),t(OS,{"aria-checked":c,"aria-selected":!!c,"aria-expanded":h?s:void 0,"aria-level":i+1,"aria-posinset":f+1,"aria-setsize":p,"data-testid":"list-item",onClick:e=>{e.stopPropagation(),b?pe(g,!s,n):((e,t)=>{ie(t),te(e),null==y||y(X[e])})(g,n)},onMouseEnter:()=>((e,t)=>{te(t.index),ie(e)})(n,r),ref:e=>V.current[r.index]=e,role:"treeitem",tabIndex:m?0:-1,$active:m,$toggleable:b,children:[h&&e(TS,{"data-testid":"toggle-category-button",onClick:e=>{e.stopPropagation(),pe(g,!s,n)},$expanded:s,children:e(we,{})}),xe(r),e(Fg,{bold:h,searchTerm:N?P:void 0,label:r.item.label,selected:!!c,truncationType:d,maxLines:u})]})]},`[${l.join("---")}]`)},Ce=()=>{var t;const r="test"===process.env.NODE_ENV;return e("div",{"aria-multiselectable":o,id:f,ref:Y,role:"tree",children:e(v$,Object.assign({style:{height:"100%"},customScrollParent:null!==(t=H.current)&&void 0!==t?t:void 0,data:re,itemContent:(e,t)=>$e(t,e)},r?{initialItemCount:re.length}:{}),r?re.length:void 0)})};return e(G$,Object.assign({"data-testid":"dropdown-container",ref:Fd(H,B),style:z},j(),{$width:p?A:void 0,$variant:h,$customWidth:m,children:t(Q$,{"data-testid":"nested-dropdown-list",children:[ge(),me(),be(),ve(),ye(),Ce()]})}))},jS=F(Wf)`
    display: flex;
    align-items: center;

    ${e=>"right"===e.$position?O`
                    flex-direction: row-reverse;
                `:O`
                    flex-direction: row;
                `}
`,zS=F($C)`
    ${e=>{if(e.$noBorder)return"right"===e.$position?O`
                        padding-right: 0;
                    `:O`
                        padding-left: 0;
                    `}}
`,RS=F.div`
    flex: 0 0 auto;
`,LS=F(xg)`
    ${e=>e.readOnly?O`
                padding: 0;
            `:e.$noBorder?"right"===e.$position?O`
                        padding-left: 0;
                    `:O`
                        padding-right: 0;
                    `:"right"===e.$position?O`
                    padding-left: ${aa["spacing-16"]};
                `:O`
                    padding-right: ${aa["spacing-16"]};
                `}
`,PS=F.div`
    padding: 10px 0; // TODO: confirm vertical spacing
    display: flex;
    align-items: center;
    padding: 0;
    background: transparent;
    margin-right: ${aa["spacing-12"]};
    color: ${ra.text};
`,NS=F.div`
    width: 1px;
    background: ${ra.border};
    flex-shrink: 0;
    height: 1.25rem;

    ${e=>{if(e.$readOnly)return O`
                display: none;
            `}}

    ${e=>"right"===e.$position?O`
                    margin-left: ${aa["spacing-12"]};
                `:O`
                    margin-right: ${aa["spacing-12"]};
                `}
`,WS=o.forwardRef(((r,n)=>{var{addon:o,error:i,onChange:a,readOnly:l,disabled:d,className:u,onBlur:h,noBorder:f,"data-testid":p,"aria-labelledby":m,"aria-describedby":b,"aria-invalid":v,"aria-label":y}=r,x=ct(r,["addon","error","onChange","readOnly","disabled","className","onBlur","noBorder","data-testid","aria-labelledby","aria-describedby","aria-invalid","aria-label"]);const{valueExtractor:w,listExtractor:$,enableSearch:C,hideNoResultsDisplay:S,noResultsDescription:D,searchPlaceholder:k,searchFunction:E,onSearch:F,placeholder:O="Select",displayValueExtractor:_,"data-selector-testid":T,options:I,selectedOption:M,onSelectOption:A,optionsLoadState:B,optionTruncationType:j,onRetry:z,onHideOptions:R,onShowOptions:L,dropdownZIndex:P,dropdownRootNode:N,"aria-label":W}=o.attributes,{position:H}=o,[Y,V]=g(M),[U,K]=g(!1),[q,Z]=g(!1),[G]=g((()=>Od.generate())),Q=`${G}-listbox`,X=`${G}-instruction`,J=`${G}-combobox-label`,ee=`${G}-textbox-label`,te=s(null),re=s(null);c((()=>{V(M)}),[M]);const ne=()=>{if(Y)return _?_(Y):w?w(Y):Y.toString()},oe=e=>{e?null==L||L():null==R||R()},ie=(e,t)=>{var r;null===(r=re.current)||void 0===r||r.focus(),V(e),K(!1),oe(!1),null==A||A(e,t)},ae=()=>{U&&(K(!1),oe(!1))},se=()=>{K(!0),oe(!0),Z(!0)},le=e=>{K(!1),oe(!1),"click"!==e&&(Z(!1),null==h||h())},ce=()=>{var e;null===(e=re.current)||void 0===e||e.focus(),K(!1),oe(!1)},de=()=>t("div",{children:[e(zS,{ref:re,disabled:d,expanded:U,listboxId:Q,popupRole:"listbox",readOnly:l,"aria-labelledby":hh(m,J),"aria-describedby":hh(b,X),"aria-invalid":v,$noBorder:f,$position:H,children:e(rh,{$disabled:d,children:Y?e(nh,{children:ne()}):e(oh,{children:O})})}),e(dh,{id:X,children:"Press space to open options"})]}),ue=()=>e(yC,{listboxId:Q,listItems:I,onSelectItem:ie,onDismiss:ae,valueExtractor:w,listExtractor:$,enableSearch:C,hideNoResultsDisplay:S,noResultsDescription:D,searchPlaceholder:k,searchFunction:E,onSearch:F,selectedItems:Y?[Y]:[],itemsLoadState:B,itemTruncationType:j,onRetry:z,matchElementWidth:!0});return e(Z$,{children:t(jS,{$focused:q,$disabled:d,$readOnly:l,$error:i,$position:H,ref:te,className:u,"data-testid":p,$noBorder:f,tabIndex:-1,onFocus:()=>{q||U||Z(!0)},onBlur:e=>{q&&!U&&te.current&&!te.current.contains(e.relatedTarget)&&(Z(!1),null==h||h())},children:[e(dh,{"aria-hidden":!0,id:J,children:W}),e(RS,{"data-testid":T,children:l?Y?e(PS,{"data-testid":"selector-label",tabIndex:0,role:"combobox","aria-haspopup":"listbox","aria-readonly":!0,"aria-expanded":!1,"aria-labelledby":m,"aria-describedby":b,"aria-invalid":v,children:e(nh,{children:ne()})}):null:e(lh,{enabled:!l&&!d,isOpen:U,renderElement:de,renderDropdown:ue,onOpen:se,onClose:le,onDismiss:ce,clickToToggle:!0,offset:8,alignment:"right"===H?"right":"left",fitAvailableHeight:!0,customZIndex:P,rootNode:N,positionRef:te})}),e(NS,{$readOnly:l,$position:H}),e(dh,{"aria-hidden":!0,id:ee,children:y}),e(LS,Object.assign({ref:n},x,{$position:H,$noBorder:f,readOnly:l,disabled:d,error:i,onChange:e=>{a&&a(e)},"data-testid":"input",styleType:"no-border","aria-labelledby":hh(m,ee),"aria-describedby":b,"aria-invalid":v}))]})})})),HS=F(Wf)`
    display: flex;
    align-items: center;
    width: 100%;
    padding: 0
        ${e=>e.$readOnly||e.$noBorder?"0":aa["spacing-16"]};
    flex-direction: ${e=>"right"===e.$position?"row-reverse":"row"};
`,YS=F(Wf)`
    display: flex;
    position: relative;
    width: 100%;
    padding: 0
        ${e=>e.$readOnly||e.$noBorder?"0":aa["spacing-16"]};
    flex-direction: ${e=>"right"===e.$position?"row-reverse":"row"};
`,VS=F(xg)``,US=F.div`
    position: relative;
    display: flex;
    align-items: center;

    ${na["body-baseline-regular"]}
    color: ${ra.text};

    /* SVG Icon */
    svg {
        height: 1em;
        width: 1em;
    }

    ${e=>{if(e.$disabled)return O`
                color: ${ra["text-subtler"]};
            `}}

    ${e=>"right"===e.$position?O`
                    margin-left: ${e.$readOnly?aa["spacing-4"]:aa["spacing-12"]};
                `:O`
                    margin-right: ${e.$readOnly?aa["spacing-4"]:aa["spacing-12"]};
                `};
`,KS=o.forwardRef(((r,n)=>{var{addon:o,error:i,className:a}=r,s=ct(r,["addon","error","className"]);const l=()=>e(YS,{$disabled:s.disabled,$error:i,$readOnly:s.readOnly,"data-testid":s["data-testid"],className:a,$noBorder:s.noBorder,children:e(VS,Object.assign({ref:n},s,{"data-testid":"input",styleType:"no-border"}))});if(!o)return l();{const{type:r="label",position:c="left"}=o,{allowClear:d}=s;switch(r){case"list":{const t=o.attributes;return t.options&&t.options.length>0?e(WS,Object.assign({ref:n,addon:o,error:i,className:a,noBorder:s.noBorder},s)):l()}case"custom":{const r=o.attributes;return r.children?t(HS,{$error:i,$disabled:s.disabled,$readOnly:s.readOnly,"data-testid":s["data-testid"],$position:c,className:a,$noBorder:s.noBorder,children:[e(US,{"data-testid":"addon",$disabled:s.disabled,$readOnly:s.readOnly,$position:c,children:r.children}),e(VS,Object.assign({ref:n},s,{allowClear:d&&"right"!==c,error:i,"data-testid":"input",styleType:"no-border"}))]}):l()}default:{const r=o.attributes;return r.value?t(HS,{$disabled:s.disabled,$error:i,$readOnly:s.readOnly,"data-testid":s["data-testid"],$position:c,className:a,$noBorder:s.noBorder,children:[e(US,{"data-testid":"addon",$disabled:s.disabled,$readOnly:s.readOnly,$position:c,children:r.value}),e(VS,Object.assign({ref:n},s,{allowClear:d&&"right"!==c,error:i,"data-testid":"input",styleType:"no-border"}))]}):l()}}}})),qS=o.forwardRef(((t,r)=>{const{label:n,errorMessage:o,id:i,"data-error-testid":a,"data-testid":s,layoutType:l,mobileCols:c,tabletCols:d,desktopCols:u,xxsCols:h,xsCols:f,smCols:p,mdCols:m,lgCols:b,xlCols:v,xxlCols:y}=t,x=ct(t,["label","errorMessage","id","data-error-testid","data-testid","layoutType","mobileCols","tabletCols","desktopCols","xxsCols","xsCols","smCols","mdCols","lgCols","xlCols","xxlCols"]),[w]=g((()=>`form-field-${Od.generate()}`)),$=null!=i?i:w;return e(Gu,{id:$,"data-testid":s,label:n,errorMessage:o,"data-error-testid":a,disabled:x.disabled,layoutType:l,mobileCols:c,tabletCols:d,desktopCols:u,xxsCols:h,xsCols:f,smCols:p,mdCols:m,lgCols:b,xlCols:v,xxlCols:y,children:e(KS,Object.assign({ref:r,id:`${$}-base`,"data-testid":s?`${s}-base`:void 0,"aria-labelledby":`${$}-label`,error:!!o},x))})})),ZS=F(KS)`
    padding: 0 0 0 ${({readOnly:e})=>e?"0":aa["spacing-16"]};
    input {
        cursor: ${({readOnly:e,$isDisabled:t})=>e&&!t?"pointer":"initial"};
    }
`,GS=F.div`
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: ${({$isDisabled:e})=>e?"initial":"pointer"};
    color: ${({$isDisabled:e,$inactiveColor:t=ra.icon,$activeColor:r=ra["icon-primary"]})=>e?t:r};
    padding: ${aa["spacing-12"]} ${aa["spacing-16"]};

    svg {
        height: 1em;
        width: 1em;
    }
`,QS=F.div`
    display: flex;
    align-items: center;
    height: 3rem;
`,XS=F(_a.BodyBL)`
    color: ${ra["text-subtler"]};
`,JS=F(yh)`
    margin-right: ${aa["spacing-8"]};
    color: ${ra.icon};
`,eD=F.span`
    color: ${ra["text-primary"]};
    text-decoration: underline;
    font-weight: ${na.Spec["weight-semibold"]};
`,tD=F.span`
    display: flex;
    align-items: center;
    margin-right: ${aa["spacing-8"]};
`,rD=F(De)`
    color: ${ra["icon-warning"]};
    margin-right: ${aa["spacing-8"]};
    height: 1em;
    width: 1em;
`,nD=F.span`
    color: ${ra["text-warning"]};
`,oD=F(Vf)`
    width: 100%;
    height: 3rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border: none;
    background: transparent;
    cursor: pointer;

    ${na["body-baseline-regular"]}

    &:hover, &:active, &:focus {
        ${eD} {
            color: ${ra["text-hover"]};
        }
    }
`;var iD,aD,sD={exports:{}};
/**
 * @license
 * Lodash <https://lodash.com/>
 * Copyright OpenJS Foundation and other contributors <https://openjsf.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */iD=sD,aD=sD.exports,function(){var e,t="Expected a function",r="__lodash_hash_undefined__",n="__lodash_placeholder__",o=16,i=32,a=64,s=128,l=256,c=1/0,d=9007199254740991,u=NaN,h=4294967295,f=[["ary",s],["bind",1],["bindKey",2],["curry",8],["curryRight",o],["flip",512],["partial",i],["partialRight",a],["rearg",l]],p="[object Arguments]",g="[object Array]",m="[object Boolean]",b="[object Date]",v="[object Error]",y="[object Function]",x="[object GeneratorFunction]",w="[object Map]",$="[object Number]",C="[object Object]",S="[object Promise]",D="[object RegExp]",k="[object Set]",E="[object String]",F="[object Symbol]",O="[object WeakMap]",_="[object ArrayBuffer]",T="[object DataView]",I="[object Float32Array]",M="[object Float64Array]",A="[object Int8Array]",B="[object Int16Array]",j="[object Int32Array]",z="[object Uint8Array]",R="[object Uint8ClampedArray]",L="[object Uint16Array]",P="[object Uint32Array]",N=/\b__p \+= '';/g,W=/\b(__p \+=) '' \+/g,H=/(__e\(.*?\)|\b__t\)) \+\n'';/g,Y=/&(?:amp|lt|gt|quot|#39);/g,V=/[&<>"']/g,U=RegExp(Y.source),K=RegExp(V.source),q=/<%-([\s\S]+?)%>/g,Z=/<%([\s\S]+?)%>/g,G=/<%=([\s\S]+?)%>/g,Q=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,X=/^\w*$/,J=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,ee=/[\\^$.*+?()[\]{}|]/g,te=RegExp(ee.source),re=/^\s+/,ne=/\s/,oe=/\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/,ie=/\{\n\/\* \[wrapped with (.+)\] \*/,ae=/,? & /,se=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g,le=/[()=,{}\[\]\/\s]/,ce=/\\(\\)?/g,de=/\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g,ue=/\w*$/,he=/^[-+]0x[0-9a-f]+$/i,fe=/^0b[01]+$/i,pe=/^\[object .+?Constructor\]$/,ge=/^0o[0-7]+$/i,me=/^(?:0|[1-9]\d*)$/,be=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,ve=/($^)/,ye=/['\n\r\u2028\u2029\\]/g,xe="\\ud800-\\udfff",we="\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff",$e="\\u2700-\\u27bf",Ce="a-z\\xdf-\\xf6\\xf8-\\xff",Se="A-Z\\xc0-\\xd6\\xd8-\\xde",De="\\ufe0e\\ufe0f",ke="\\xac\\xb1\\xd7\\xf7\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf\\u2000-\\u206f \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",Ee="['’]",Fe="["+xe+"]",Oe="["+ke+"]",_e="["+we+"]",Te="\\d+",Ie="["+$e+"]",Me="["+Ce+"]",Ae="[^"+xe+ke+Te+$e+Ce+Se+"]",Be="\\ud83c[\\udffb-\\udfff]",ze="[^"+xe+"]",Re="(?:\\ud83c[\\udde6-\\uddff]){2}",Le="[\\ud800-\\udbff][\\udc00-\\udfff]",Pe="["+Se+"]",Ne="\\u200d",We="(?:"+Me+"|"+Ae+")",He="(?:"+Pe+"|"+Ae+")",Ye="(?:['’](?:d|ll|m|re|s|t|ve))?",Ve="(?:['’](?:D|LL|M|RE|S|T|VE))?",Ue="(?:"+_e+"|"+Be+")?",Ke="["+De+"]?",qe=Ke+Ue+"(?:"+Ne+"(?:"+[ze,Re,Le].join("|")+")"+Ke+Ue+")*",Ze="(?:"+[Ie,Re,Le].join("|")+")"+qe,Ge="(?:"+[ze+_e+"?",_e,Re,Le,Fe].join("|")+")",Qe=RegExp(Ee,"g"),Xe=RegExp(_e,"g"),Je=RegExp(Be+"(?="+Be+")|"+Ge+qe,"g"),et=RegExp([Pe+"?"+Me+"+"+Ye+"(?="+[Oe,Pe,"$"].join("|")+")",He+"+"+Ve+"(?="+[Oe,Pe+We,"$"].join("|")+")",Pe+"?"+We+"+"+Ye,Pe+"+"+Ve,"\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])","\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",Te,Ze].join("|"),"g"),tt=RegExp("["+Ne+xe+we+De+"]"),rt=/[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/,nt=["Array","Buffer","DataView","Date","Error","Float32Array","Float64Array","Function","Int8Array","Int16Array","Int32Array","Map","Math","Object","Promise","RegExp","Set","String","Symbol","TypeError","Uint8Array","Uint8ClampedArray","Uint16Array","Uint32Array","WeakMap","_","clearTimeout","isFinite","parseInt","setTimeout"],ot=-1,it={};it[I]=it[M]=it[A]=it[B]=it[j]=it[z]=it[R]=it[L]=it[P]=!0,it[p]=it[g]=it[_]=it[m]=it[T]=it[b]=it[v]=it[y]=it[w]=it[$]=it[C]=it[D]=it[k]=it[E]=it[O]=!1;var at={};at[p]=at[g]=at[_]=at[T]=at[m]=at[b]=at[I]=at[M]=at[A]=at[B]=at[j]=at[w]=at[$]=at[C]=at[D]=at[k]=at[E]=at[F]=at[z]=at[R]=at[L]=at[P]=!0,at[v]=at[y]=at[O]=!1;var st={"\\":"\\","'":"'","\n":"n","\r":"r","\u2028":"u2028","\u2029":"u2029"},lt=parseFloat,ct=parseInt,dt="object"==typeof je&&je&&je.Object===Object&&je,ut="object"==typeof self&&self&&self.Object===Object&&self,ht=dt||ut||Function("return this")(),ft=aD&&!aD.nodeType&&aD,pt=ft&&iD&&!iD.nodeType&&iD,gt=pt&&pt.exports===ft,mt=gt&&dt.process,bt=function(){try{var e=pt&&pt.require&&pt.require("util").types;return e||mt&&mt.binding&&mt.binding("util")}catch(e){}}(),vt=bt&&bt.isArrayBuffer,yt=bt&&bt.isDate,xt=bt&&bt.isMap,wt=bt&&bt.isRegExp,$t=bt&&bt.isSet,Ct=bt&&bt.isTypedArray;function St(e,t,r){switch(r.length){case 0:return e.call(t);case 1:return e.call(t,r[0]);case 2:return e.call(t,r[0],r[1]);case 3:return e.call(t,r[0],r[1],r[2])}return e.apply(t,r)}function Dt(e,t,r,n){for(var o=-1,i=null==e?0:e.length;++o<i;){var a=e[o];t(n,a,r(a),e)}return n}function kt(e,t){for(var r=-1,n=null==e?0:e.length;++r<n&&!1!==t(e[r],r,e););return e}function Et(e,t){for(var r=null==e?0:e.length;r--&&!1!==t(e[r],r,e););return e}function Ft(e,t){for(var r=-1,n=null==e?0:e.length;++r<n;)if(!t(e[r],r,e))return!1;return!0}function Ot(e,t){for(var r=-1,n=null==e?0:e.length,o=0,i=[];++r<n;){var a=e[r];t(a,r,e)&&(i[o++]=a)}return i}function _t(e,t){return!(null==e||!e.length)&&Pt(e,t,0)>-1}function Tt(e,t,r){for(var n=-1,o=null==e?0:e.length;++n<o;)if(r(t,e[n]))return!0;return!1}function It(e,t){for(var r=-1,n=null==e?0:e.length,o=Array(n);++r<n;)o[r]=t(e[r],r,e);return o}function Mt(e,t){for(var r=-1,n=t.length,o=e.length;++r<n;)e[o+r]=t[r];return e}function At(e,t,r,n){var o=-1,i=null==e?0:e.length;for(n&&i&&(r=e[++o]);++o<i;)r=t(r,e[o],o,e);return r}function Bt(e,t,r,n){var o=null==e?0:e.length;for(n&&o&&(r=e[--o]);o--;)r=t(r,e[o],o,e);return r}function jt(e,t){for(var r=-1,n=null==e?0:e.length;++r<n;)if(t(e[r],r,e))return!0;return!1}var zt=Yt("length");function Rt(e,t,r){var n;return r(e,(function(e,r,o){if(t(e,r,o))return n=r,!1})),n}function Lt(e,t,r,n){for(var o=e.length,i=r+(n?1:-1);n?i--:++i<o;)if(t(e[i],i,e))return i;return-1}function Pt(e,t,r){return t==t?function(e,t,r){for(var n=r-1,o=e.length;++n<o;)if(e[n]===t)return n;return-1}(e,t,r):Lt(e,Wt,r)}function Nt(e,t,r,n){for(var o=r-1,i=e.length;++o<i;)if(n(e[o],t))return o;return-1}function Wt(e){return e!=e}function Ht(e,t){var r=null==e?0:e.length;return r?Kt(e,t)/r:u}function Yt(t){return function(r){return null==r?e:r[t]}}function Vt(t){return function(r){return null==t?e:t[r]}}function Ut(e,t,r,n,o){return o(e,(function(e,o,i){r=n?(n=!1,e):t(r,e,o,i)})),r}function Kt(t,r){for(var n,o=-1,i=t.length;++o<i;){var a=r(t[o]);a!==e&&(n=n===e?a:n+a)}return n}function qt(e,t){for(var r=-1,n=Array(e);++r<e;)n[r]=t(r);return n}function Zt(e){return e?e.slice(0,hr(e)+1).replace(re,""):e}function Gt(e){return function(t){return e(t)}}function Qt(e,t){return It(t,(function(t){return e[t]}))}function Xt(e,t){return e.has(t)}function Jt(e,t){for(var r=-1,n=e.length;++r<n&&Pt(t,e[r],0)>-1;);return r}function er(e,t){for(var r=e.length;r--&&Pt(t,e[r],0)>-1;);return r}var tr=Vt({"À":"A","Á":"A","Â":"A","Ã":"A","Ä":"A","Å":"A","à":"a","á":"a","â":"a","ã":"a","ä":"a","å":"a","Ç":"C","ç":"c","Ð":"D","ð":"d","È":"E","É":"E","Ê":"E","Ë":"E","è":"e","é":"e","ê":"e","ë":"e","Ì":"I","Í":"I","Î":"I","Ï":"I","ì":"i","í":"i","î":"i","ï":"i","Ñ":"N","ñ":"n","Ò":"O","Ó":"O","Ô":"O","Õ":"O","Ö":"O","Ø":"O","ò":"o","ó":"o","ô":"o","õ":"o","ö":"o","ø":"o","Ù":"U","Ú":"U","Û":"U","Ü":"U","ù":"u","ú":"u","û":"u","ü":"u","Ý":"Y","ý":"y","ÿ":"y","Æ":"Ae","æ":"ae","Þ":"Th","þ":"th","ß":"ss","Ā":"A","Ă":"A","Ą":"A","ā":"a","ă":"a","ą":"a","Ć":"C","Ĉ":"C","Ċ":"C","Č":"C","ć":"c","ĉ":"c","ċ":"c","č":"c","Ď":"D","Đ":"D","ď":"d","đ":"d","Ē":"E","Ĕ":"E","Ė":"E","Ę":"E","Ě":"E","ē":"e","ĕ":"e","ė":"e","ę":"e","ě":"e","Ĝ":"G","Ğ":"G","Ġ":"G","Ģ":"G","ĝ":"g","ğ":"g","ġ":"g","ģ":"g","Ĥ":"H","Ħ":"H","ĥ":"h","ħ":"h","Ĩ":"I","Ī":"I","Ĭ":"I","Į":"I","İ":"I","ĩ":"i","ī":"i","ĭ":"i","į":"i","ı":"i","Ĵ":"J","ĵ":"j","Ķ":"K","ķ":"k","ĸ":"k","Ĺ":"L","Ļ":"L","Ľ":"L","Ŀ":"L","Ł":"L","ĺ":"l","ļ":"l","ľ":"l","ŀ":"l","ł":"l","Ń":"N","Ņ":"N","Ň":"N","Ŋ":"N","ń":"n","ņ":"n","ň":"n","ŋ":"n","Ō":"O","Ŏ":"O","Ő":"O","ō":"o","ŏ":"o","ő":"o","Ŕ":"R","Ŗ":"R","Ř":"R","ŕ":"r","ŗ":"r","ř":"r","Ś":"S","Ŝ":"S","Ş":"S","Š":"S","ś":"s","ŝ":"s","ş":"s","š":"s","Ţ":"T","Ť":"T","Ŧ":"T","ţ":"t","ť":"t","ŧ":"t","Ũ":"U","Ū":"U","Ŭ":"U","Ů":"U","Ű":"U","Ų":"U","ũ":"u","ū":"u","ŭ":"u","ů":"u","ű":"u","ų":"u","Ŵ":"W","ŵ":"w","Ŷ":"Y","ŷ":"y","Ÿ":"Y","Ź":"Z","Ż":"Z","Ž":"Z","ź":"z","ż":"z","ž":"z","Ĳ":"IJ","ĳ":"ij","Œ":"Oe","œ":"oe","ŉ":"'n","ſ":"s"}),rr=Vt({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"});function nr(e){return"\\"+st[e]}function or(e){return tt.test(e)}function ir(e){var t=-1,r=Array(e.size);return e.forEach((function(e,n){r[++t]=[n,e]})),r}function ar(e,t){return function(r){return e(t(r))}}function sr(e,t){for(var r=-1,o=e.length,i=0,a=[];++r<o;){var s=e[r];s!==t&&s!==n||(e[r]=n,a[i++]=r)}return a}function lr(e){var t=-1,r=Array(e.size);return e.forEach((function(e){r[++t]=e})),r}function cr(e){var t=-1,r=Array(e.size);return e.forEach((function(e){r[++t]=[e,e]})),r}function dr(e){return or(e)?function(e){for(var t=Je.lastIndex=0;Je.test(e);)++t;return t}(e):zt(e)}function ur(e){return or(e)?function(e){return e.match(Je)||[]}(e):function(e){return e.split("")}(e)}function hr(e){for(var t=e.length;t--&&ne.test(e.charAt(t)););return t}var fr=Vt({"&amp;":"&","&lt;":"<","&gt;":">","&quot;":'"',"&#39;":"'"}),pr=function ne(xe){var we=(xe=null==xe?ht:pr.defaults(ht.Object(),xe,pr.pick(ht,nt))).Array,$e=xe.Date,Ce=xe.Error,Se=xe.Function,De=xe.Math,ke=xe.Object,Ee=xe.RegExp,Fe=xe.String,Oe=xe.TypeError,_e=we.prototype,Te=Se.prototype,Ie=ke.prototype,Me=xe["__core-js_shared__"],Ae=Te.toString,Be=Ie.hasOwnProperty,je=0,ze=function(){var e=/[^.]+$/.exec(Me&&Me.keys&&Me.keys.IE_PROTO||"");return e?"Symbol(src)_1."+e:""}(),Re=Ie.toString,Le=Ae.call(ke),Pe=ht._,Ne=Ee("^"+Ae.call(Be).replace(ee,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),We=gt?xe.Buffer:e,He=xe.Symbol,Ye=xe.Uint8Array,Ve=We?We.allocUnsafe:e,Ue=ar(ke.getPrototypeOf,ke),Ke=ke.create,qe=Ie.propertyIsEnumerable,Ze=_e.splice,Ge=He?He.isConcatSpreadable:e,Je=He?He.iterator:e,tt=He?He.toStringTag:e,st=function(){try{var e=hi(ke,"defineProperty");return e({},"",{}),e}catch(e){}}(),dt=xe.clearTimeout!==ht.clearTimeout&&xe.clearTimeout,ut=$e&&$e.now!==ht.Date.now&&$e.now,ft=xe.setTimeout!==ht.setTimeout&&xe.setTimeout,pt=De.ceil,mt=De.floor,bt=ke.getOwnPropertySymbols,zt=We?We.isBuffer:e,Vt=xe.isFinite,gr=_e.join,mr=ar(ke.keys,ke),br=De.max,vr=De.min,yr=$e.now,xr=xe.parseInt,wr=De.random,$r=_e.reverse,Cr=hi(xe,"DataView"),Sr=hi(xe,"Map"),Dr=hi(xe,"Promise"),kr=hi(xe,"Set"),Er=hi(xe,"WeakMap"),Fr=hi(ke,"create"),Or=Er&&new Er,_r={},Tr=Ri(Cr),Ir=Ri(Sr),Mr=Ri(Dr),Ar=Ri(kr),Br=Ri(Er),jr=He?He.prototype:e,zr=jr?jr.valueOf:e,Rr=jr?jr.toString:e;function Lr(e){if(ts(e)&&!Ya(e)&&!(e instanceof Hr)){if(e instanceof Wr)return e;if(Be.call(e,"__wrapped__"))return Li(e)}return new Wr(e)}var Pr=function(){function t(){}return function(r){if(!es(r))return{};if(Ke)return Ke(r);t.prototype=r;var n=new t;return t.prototype=e,n}}();function Nr(){}function Wr(t,r){this.__wrapped__=t,this.__actions__=[],this.__chain__=!!r,this.__index__=0,this.__values__=e}function Hr(e){this.__wrapped__=e,this.__actions__=[],this.__dir__=1,this.__filtered__=!1,this.__iteratees__=[],this.__takeCount__=h,this.__views__=[]}function Yr(e){var t=-1,r=null==e?0:e.length;for(this.clear();++t<r;){var n=e[t];this.set(n[0],n[1])}}function Vr(e){var t=-1,r=null==e?0:e.length;for(this.clear();++t<r;){var n=e[t];this.set(n[0],n[1])}}function Ur(e){var t=-1,r=null==e?0:e.length;for(this.clear();++t<r;){var n=e[t];this.set(n[0],n[1])}}function Kr(e){var t=-1,r=null==e?0:e.length;for(this.__data__=new Ur;++t<r;)this.add(e[t])}function qr(e){var t=this.__data__=new Vr(e);this.size=t.size}function Zr(e,t){var r=Ya(e),n=!r&&Ha(e),o=!r&&!n&&qa(e),i=!r&&!n&&!o&&cs(e),a=r||n||o||i,s=a?qt(e.length,Fe):[],l=s.length;for(var c in e)!t&&!Be.call(e,c)||a&&("length"==c||o&&("offset"==c||"parent"==c)||i&&("buffer"==c||"byteLength"==c||"byteOffset"==c)||yi(c,l))||s.push(c);return s}function Gr(t){var r=t.length;return r?t[qn(0,r-1)]:e}function Qr(e,t){return Bi(_o(e),sn(t,0,e.length))}function Xr(e){return Bi(_o(e))}function Jr(t,r,n){(n!==e&&!Pa(t[r],n)||n===e&&!(r in t))&&on(t,r,n)}function en(t,r,n){var o=t[r];Be.call(t,r)&&Pa(o,n)&&(n!==e||r in t)||on(t,r,n)}function tn(e,t){for(var r=e.length;r--;)if(Pa(e[r][0],t))return r;return-1}function rn(e,t,r,n){return hn(e,(function(e,o,i){t(n,e,r(e),i)})),n}function nn(e,t){return e&&To(t,Ts(t),e)}function on(e,t,r){"__proto__"==t&&st?st(e,t,{configurable:!0,enumerable:!0,value:r,writable:!0}):e[t]=r}function an(t,r){for(var n=-1,o=r.length,i=we(o),a=null==t;++n<o;)i[n]=a?e:ks(t,r[n]);return i}function sn(t,r,n){return t==t&&(n!==e&&(t=t<=n?t:n),r!==e&&(t=t>=r?t:r)),t}function ln(t,r,n,o,i,a){var s,l=1&r,c=2&r,d=4&r;if(n&&(s=i?n(t,o,i,a):n(t)),s!==e)return s;if(!es(t))return t;var u=Ya(t);if(u){if(s=function(e){var t=e.length,r=new e.constructor(t);return t&&"string"==typeof e[0]&&Be.call(e,"index")&&(r.index=e.index,r.input=e.input),r}(t),!l)return _o(t,s)}else{var h=gi(t),f=h==y||h==x;if(qa(t))return So(t,l);if(h==C||h==p||f&&!i){if(s=c||f?{}:bi(t),!l)return c?function(e,t){return To(e,pi(e),t)}(t,function(e,t){return e&&To(t,Is(t),e)}(s,t)):function(e,t){return To(e,fi(e),t)}(t,nn(s,t))}else{if(!at[h])return i?t:{};s=function(e,t,r){var n,o=e.constructor;switch(t){case _:return Do(e);case m:case b:return new o(+e);case T:return function(e,t){var r=t?Do(e.buffer):e.buffer;return new e.constructor(r,e.byteOffset,e.byteLength)}(e,r);case I:case M:case A:case B:case j:case z:case R:case L:case P:return ko(e,r);case w:return new o;case $:case E:return new o(e);case D:return function(e){var t=new e.constructor(e.source,ue.exec(e));return t.lastIndex=e.lastIndex,t}(e);case k:return new o;case F:return n=e,zr?ke(zr.call(n)):{}}}(t,h,l)}}a||(a=new qr);var g=a.get(t);if(g)return g;a.set(t,s),as(t)?t.forEach((function(e){s.add(ln(e,r,n,e,t,a))})):rs(t)&&t.forEach((function(e,o){s.set(o,ln(e,r,n,o,t,a))}));var v=u?e:(d?c?ii:oi:c?Is:Ts)(t);return kt(v||t,(function(e,o){v&&(e=t[o=e]),en(s,o,ln(e,r,n,o,t,a))})),s}function cn(t,r,n){var o=n.length;if(null==t)return!o;for(t=ke(t);o--;){var i=n[o],a=r[i],s=t[i];if(s===e&&!(i in t)||!a(s))return!1}return!0}function dn(r,n,o){if("function"!=typeof r)throw new Oe(t);return Ti((function(){r.apply(e,o)}),n)}function un(e,t,r,n){var o=-1,i=_t,a=!0,s=e.length,l=[],c=t.length;if(!s)return l;r&&(t=It(t,Gt(r))),n?(i=Tt,a=!1):t.length>=200&&(i=Xt,a=!1,t=new Kr(t));e:for(;++o<s;){var d=e[o],u=null==r?d:r(d);if(d=n||0!==d?d:0,a&&u==u){for(var h=c;h--;)if(t[h]===u)continue e;l.push(d)}else i(t,u,n)||l.push(d)}return l}Lr.templateSettings={escape:q,evaluate:Z,interpolate:G,variable:"",imports:{_:Lr}},Lr.prototype=Nr.prototype,Lr.prototype.constructor=Lr,Wr.prototype=Pr(Nr.prototype),Wr.prototype.constructor=Wr,Hr.prototype=Pr(Nr.prototype),Hr.prototype.constructor=Hr,Yr.prototype.clear=function(){this.__data__=Fr?Fr(null):{},this.size=0},Yr.prototype.delete=function(e){var t=this.has(e)&&delete this.__data__[e];return this.size-=t?1:0,t},Yr.prototype.get=function(t){var n=this.__data__;if(Fr){var o=n[t];return o===r?e:o}return Be.call(n,t)?n[t]:e},Yr.prototype.has=function(t){var r=this.__data__;return Fr?r[t]!==e:Be.call(r,t)},Yr.prototype.set=function(t,n){var o=this.__data__;return this.size+=this.has(t)?0:1,o[t]=Fr&&n===e?r:n,this},Vr.prototype.clear=function(){this.__data__=[],this.size=0},Vr.prototype.delete=function(e){var t=this.__data__,r=tn(t,e);return!(r<0||(r==t.length-1?t.pop():Ze.call(t,r,1),--this.size,0))},Vr.prototype.get=function(t){var r=this.__data__,n=tn(r,t);return n<0?e:r[n][1]},Vr.prototype.has=function(e){return tn(this.__data__,e)>-1},Vr.prototype.set=function(e,t){var r=this.__data__,n=tn(r,e);return n<0?(++this.size,r.push([e,t])):r[n][1]=t,this},Ur.prototype.clear=function(){this.size=0,this.__data__={hash:new Yr,map:new(Sr||Vr),string:new Yr}},Ur.prototype.delete=function(e){var t=di(this,e).delete(e);return this.size-=t?1:0,t},Ur.prototype.get=function(e){return di(this,e).get(e)},Ur.prototype.has=function(e){return di(this,e).has(e)},Ur.prototype.set=function(e,t){var r=di(this,e),n=r.size;return r.set(e,t),this.size+=r.size==n?0:1,this},Kr.prototype.add=Kr.prototype.push=function(e){return this.__data__.set(e,r),this},Kr.prototype.has=function(e){return this.__data__.has(e)},qr.prototype.clear=function(){this.__data__=new Vr,this.size=0},qr.prototype.delete=function(e){var t=this.__data__,r=t.delete(e);return this.size=t.size,r},qr.prototype.get=function(e){return this.__data__.get(e)},qr.prototype.has=function(e){return this.__data__.has(e)},qr.prototype.set=function(e,t){var r=this.__data__;if(r instanceof Vr){var n=r.__data__;if(!Sr||n.length<199)return n.push([e,t]),this.size=++r.size,this;r=this.__data__=new Ur(n)}return r.set(e,t),this.size=r.size,this};var hn=Ao(xn),fn=Ao(wn,!0);function pn(e,t){var r=!0;return hn(e,(function(e,n,o){return r=!!t(e,n,o)})),r}function gn(t,r,n){for(var o=-1,i=t.length;++o<i;){var a=t[o],s=r(a);if(null!=s&&(l===e?s==s&&!ls(s):n(s,l)))var l=s,c=a}return c}function mn(e,t){var r=[];return hn(e,(function(e,n,o){t(e,n,o)&&r.push(e)})),r}function bn(e,t,r,n,o){var i=-1,a=e.length;for(r||(r=vi),o||(o=[]);++i<a;){var s=e[i];t>0&&r(s)?t>1?bn(s,t-1,r,n,o):Mt(o,s):n||(o[o.length]=s)}return o}var vn=Bo(),yn=Bo(!0);function xn(e,t){return e&&vn(e,t,Ts)}function wn(e,t){return e&&yn(e,t,Ts)}function $n(e,t){return Ot(t,(function(t){return Qa(e[t])}))}function Cn(t,r){for(var n=0,o=(r=xo(r,t)).length;null!=t&&n<o;)t=t[zi(r[n++])];return n&&n==o?t:e}function Sn(e,t,r){var n=t(e);return Ya(e)?n:Mt(n,r(e))}function Dn(t){return null==t?t===e?"[object Undefined]":"[object Null]":tt&&tt in ke(t)?function(t){var r=Be.call(t,tt),n=t[tt];try{t[tt]=e;var o=!0}catch(e){}var i=Re.call(t);return o&&(r?t[tt]=n:delete t[tt]),i}(t):function(e){return Re.call(e)}(t)}function kn(e,t){return e>t}function En(e,t){return null!=e&&Be.call(e,t)}function Fn(e,t){return null!=e&&t in ke(e)}function On(t,r,n){for(var o=n?Tt:_t,i=t[0].length,a=t.length,s=a,l=we(a),c=1/0,d=[];s--;){var u=t[s];s&&r&&(u=It(u,Gt(r))),c=vr(u.length,c),l[s]=!n&&(r||i>=120&&u.length>=120)?new Kr(s&&u):e}u=t[0];var h=-1,f=l[0];e:for(;++h<i&&d.length<c;){var p=u[h],g=r?r(p):p;if(p=n||0!==p?p:0,!(f?Xt(f,g):o(d,g,n))){for(s=a;--s;){var m=l[s];if(!(m?Xt(m,g):o(t[s],g,n)))continue e}f&&f.push(g),d.push(p)}}return d}function _n(t,r,n){var o=null==(t=Fi(t,r=xo(r,t)))?t:t[zi(Gi(r))];return null==o?e:St(o,t,n)}function Tn(e){return ts(e)&&Dn(e)==p}function In(t,r,n,o,i){return t===r||(null==t||null==r||!ts(t)&&!ts(r)?t!=t&&r!=r:function(t,r,n,o,i,a){var s=Ya(t),l=Ya(r),c=s?g:gi(t),d=l?g:gi(r),u=(c=c==p?C:c)==C,h=(d=d==p?C:d)==C,f=c==d;if(f&&qa(t)){if(!qa(r))return!1;s=!0,u=!1}if(f&&!u)return a||(a=new qr),s||cs(t)?ri(t,r,n,o,i,a):function(e,t,r,n,o,i,a){switch(r){case T:if(e.byteLength!=t.byteLength||e.byteOffset!=t.byteOffset)return!1;e=e.buffer,t=t.buffer;case _:return!(e.byteLength!=t.byteLength||!i(new Ye(e),new Ye(t)));case m:case b:case $:return Pa(+e,+t);case v:return e.name==t.name&&e.message==t.message;case D:case E:return e==t+"";case w:var s=ir;case k:var l=1&n;if(s||(s=lr),e.size!=t.size&&!l)return!1;var c=a.get(e);if(c)return c==t;n|=2,a.set(e,t);var d=ri(s(e),s(t),n,o,i,a);return a.delete(e),d;case F:if(zr)return zr.call(e)==zr.call(t)}return!1}(t,r,c,n,o,i,a);if(!(1&n)){var y=u&&Be.call(t,"__wrapped__"),x=h&&Be.call(r,"__wrapped__");if(y||x){var S=y?t.value():t,O=x?r.value():r;return a||(a=new qr),i(S,O,n,o,a)}}return!!f&&(a||(a=new qr),function(t,r,n,o,i,a){var s=1&n,l=oi(t),c=l.length,d=oi(r),u=d.length;if(c!=u&&!s)return!1;for(var h=c;h--;){var f=l[h];if(!(s?f in r:Be.call(r,f)))return!1}var p=a.get(t),g=a.get(r);if(p&&g)return p==r&&g==t;var m=!0;a.set(t,r),a.set(r,t);for(var b=s;++h<c;){var v=t[f=l[h]],y=r[f];if(o)var x=s?o(y,v,f,r,t,a):o(v,y,f,t,r,a);if(!(x===e?v===y||i(v,y,n,o,a):x)){m=!1;break}b||(b="constructor"==f)}if(m&&!b){var w=t.constructor,$=r.constructor;w==$||!("constructor"in t)||!("constructor"in r)||"function"==typeof w&&w instanceof w&&"function"==typeof $&&$ instanceof $||(m=!1)}return a.delete(t),a.delete(r),m}(t,r,n,o,i,a))}(t,r,n,o,In,i))}function Mn(t,r,n,o){var i=n.length,a=i,s=!o;if(null==t)return!a;for(t=ke(t);i--;){var l=n[i];if(s&&l[2]?l[1]!==t[l[0]]:!(l[0]in t))return!1}for(;++i<a;){var c=(l=n[i])[0],d=t[c],u=l[1];if(s&&l[2]){if(d===e&&!(c in t))return!1}else{var h=new qr;if(o)var f=o(d,u,c,t,r,h);if(!(f===e?In(u,d,3,o,h):f))return!1}}return!0}function An(e){return!(!es(e)||(t=e,ze&&ze in t))&&(Qa(e)?Ne:pe).test(Ri(e));var t}function Bn(e){return"function"==typeof e?e:null==e?nl:"object"==typeof e?Ya(e)?Nn(e[0],e[1]):Pn(e):hl(e)}function jn(e){if(!Si(e))return mr(e);var t=[];for(var r in ke(e))Be.call(e,r)&&"constructor"!=r&&t.push(r);return t}function zn(e){if(!es(e))return function(e){var t=[];if(null!=e)for(var r in ke(e))t.push(r);return t}(e);var t=Si(e),r=[];for(var n in e)("constructor"!=n||!t&&Be.call(e,n))&&r.push(n);return r}function Rn(e,t){return e<t}function Ln(e,t){var r=-1,n=Ua(e)?we(e.length):[];return hn(e,(function(e,o,i){n[++r]=t(e,o,i)})),n}function Pn(e){var t=ui(e);return 1==t.length&&t[0][2]?ki(t[0][0],t[0][1]):function(r){return r===e||Mn(r,e,t)}}function Nn(t,r){return wi(t)&&Di(r)?ki(zi(t),r):function(n){var o=ks(n,t);return o===e&&o===r?Es(n,t):In(r,o,3)}}function Wn(t,r,n,o,i){t!==r&&vn(r,(function(a,s){if(i||(i=new qr),es(a))!function(t,r,n,o,i,a,s){var l=Oi(t,n),c=Oi(r,n),d=s.get(c);if(d)Jr(t,n,d);else{var u=a?a(l,c,n+"",t,r,s):e,h=u===e;if(h){var f=Ya(c),p=!f&&qa(c),g=!f&&!p&&cs(c);u=c,f||p||g?Ya(l)?u=l:Ka(l)?u=_o(l):p?(h=!1,u=So(c,!0)):g?(h=!1,u=ko(c,!0)):u=[]:os(c)||Ha(c)?(u=l,Ha(l)?u=bs(l):es(l)&&!Qa(l)||(u=bi(c))):h=!1}h&&(s.set(c,u),i(u,c,o,a,s),s.delete(c)),Jr(t,n,u)}}(t,r,s,n,Wn,o,i);else{var l=o?o(Oi(t,s),a,s+"",t,r,i):e;l===e&&(l=a),Jr(t,s,l)}}),Is)}function Hn(t,r){var n=t.length;if(n)return yi(r+=r<0?n:0,n)?t[r]:e}function Yn(e,t,r){t=t.length?It(t,(function(e){return Ya(e)?function(t){return Cn(t,1===e.length?e[0]:e)}:e})):[nl];var n=-1;t=It(t,Gt(ci()));var o=Ln(e,(function(e,r,o){var i=It(t,(function(t){return t(e)}));return{criteria:i,index:++n,value:e}}));return function(e,t){var r=e.length;for(e.sort(t);r--;)e[r]=e[r].value;return e}(o,(function(e,t){return function(e,t,r){for(var n=-1,o=e.criteria,i=t.criteria,a=o.length,s=r.length;++n<a;){var l=Eo(o[n],i[n]);if(l)return n>=s?l:l*("desc"==r[n]?-1:1)}return e.index-t.index}(e,t,r)}))}function Vn(e,t,r){for(var n=-1,o=t.length,i={};++n<o;){var a=t[n],s=Cn(e,a);r(s,a)&&Jn(i,xo(a,e),s)}return i}function Un(e,t,r,n){var o=n?Nt:Pt,i=-1,a=t.length,s=e;for(e===t&&(t=_o(t)),r&&(s=It(e,Gt(r)));++i<a;)for(var l=0,c=t[i],d=r?r(c):c;(l=o(s,d,l,n))>-1;)s!==e&&Ze.call(s,l,1),Ze.call(e,l,1);return e}function Kn(e,t){for(var r=e?t.length:0,n=r-1;r--;){var o=t[r];if(r==n||o!==i){var i=o;yi(o)?Ze.call(e,o,1):ho(e,o)}}return e}function qn(e,t){return e+mt(wr()*(t-e+1))}function Zn(e,t){var r="";if(!e||t<1||t>d)return r;do{t%2&&(r+=e),(t=mt(t/2))&&(e+=e)}while(t);return r}function Gn(e,t){return Ii(Ei(e,t,nl),e+"")}function Qn(e){return Gr(Ps(e))}function Xn(e,t){var r=Ps(e);return Bi(r,sn(t,0,r.length))}function Jn(t,r,n,o){if(!es(t))return t;for(var i=-1,a=(r=xo(r,t)).length,s=a-1,l=t;null!=l&&++i<a;){var c=zi(r[i]),d=n;if("__proto__"===c||"constructor"===c||"prototype"===c)return t;if(i!=s){var u=l[c];(d=o?o(u,c,l):e)===e&&(d=es(u)?u:yi(r[i+1])?[]:{})}en(l,c,d),l=l[c]}return t}var eo=Or?function(e,t){return Or.set(e,t),e}:nl,to=st?function(e,t){return st(e,"toString",{configurable:!0,enumerable:!1,value:el(t),writable:!0})}:nl;function ro(e){return Bi(Ps(e))}function no(e,t,r){var n=-1,o=e.length;t<0&&(t=-t>o?0:o+t),(r=r>o?o:r)<0&&(r+=o),o=t>r?0:r-t>>>0,t>>>=0;for(var i=we(o);++n<o;)i[n]=e[n+t];return i}function oo(e,t){var r;return hn(e,(function(e,n,o){return!(r=t(e,n,o))})),!!r}function io(e,t,r){var n=0,o=null==e?n:e.length;if("number"==typeof t&&t==t&&o<=2147483647){for(;n<o;){var i=n+o>>>1,a=e[i];null!==a&&!ls(a)&&(r?a<=t:a<t)?n=i+1:o=i}return o}return ao(e,t,nl,r)}function ao(t,r,n,o){var i=0,a=null==t?0:t.length;if(0===a)return 0;for(var s=(r=n(r))!=r,l=null===r,c=ls(r),d=r===e;i<a;){var u=mt((i+a)/2),h=n(t[u]),f=h!==e,p=null===h,g=h==h,m=ls(h);if(s)var b=o||g;else b=d?g&&(o||f):l?g&&f&&(o||!p):c?g&&f&&!p&&(o||!m):!p&&!m&&(o?h<=r:h<r);b?i=u+1:a=u}return vr(a,4294967294)}function so(e,t){for(var r=-1,n=e.length,o=0,i=[];++r<n;){var a=e[r],s=t?t(a):a;if(!r||!Pa(s,l)){var l=s;i[o++]=0===a?0:a}}return i}function lo(e){return"number"==typeof e?e:ls(e)?u:+e}function co(e){if("string"==typeof e)return e;if(Ya(e))return It(e,co)+"";if(ls(e))return Rr?Rr.call(e):"";var t=e+"";return"0"==t&&1/e==-1/0?"-0":t}function uo(e,t,r){var n=-1,o=_t,i=e.length,a=!0,s=[],l=s;if(r)a=!1,o=Tt;else if(i>=200){var c=t?null:Go(e);if(c)return lr(c);a=!1,o=Xt,l=new Kr}else l=t?[]:s;e:for(;++n<i;){var d=e[n],u=t?t(d):d;if(d=r||0!==d?d:0,a&&u==u){for(var h=l.length;h--;)if(l[h]===u)continue e;t&&l.push(u),s.push(d)}else o(l,u,r)||(l!==s&&l.push(u),s.push(d))}return s}function ho(e,t){var r=-1,n=(t=xo(t,e)).length;if(!n)return!0;for(var o=null==e||"object"!=typeof e&&"function"!=typeof e;++r<n;){var i=t[r];if("string"==typeof i){if("__proto__"===i&&!Be.call(e,"__proto__"))return!1;if("constructor"===i&&r+1<n&&"string"==typeof t[r+1]&&"prototype"===t[r+1]){if(o&&0===r)continue;return!1}}}var a=Fi(e,t);return null==a||delete a[zi(Gi(t))]}function fo(e,t,r,n){return Jn(e,t,r(Cn(e,t)),n)}function po(e,t,r,n){for(var o=e.length,i=n?o:-1;(n?i--:++i<o)&&t(e[i],i,e););return r?no(e,n?0:i,n?i+1:o):no(e,n?i+1:0,n?o:i)}function go(e,t){var r=e;return r instanceof Hr&&(r=r.value()),At(t,(function(e,t){return t.func.apply(t.thisArg,Mt([e],t.args))}),r)}function mo(e,t,r){var n=e.length;if(n<2)return n?uo(e[0]):[];for(var o=-1,i=we(n);++o<n;)for(var a=e[o],s=-1;++s<n;)s!=o&&(i[o]=un(i[o]||a,e[s],t,r));return uo(bn(i,1),t,r)}function bo(t,r,n){for(var o=-1,i=t.length,a=r.length,s={};++o<i;){var l=o<a?r[o]:e;n(s,t[o],l)}return s}function vo(e){return Ka(e)?e:[]}function yo(e){return"function"==typeof e?e:nl}function xo(e,t){return Ya(e)?e:wi(e,t)?[e]:ji(vs(e))}var wo=Gn;function $o(t,r,n){var o=t.length;return n=n===e?o:n,!r&&n>=o?t:no(t,r,n)}var Co=dt||function(e){return ht.clearTimeout(e)};function So(e,t){if(t)return e.slice();var r=e.length,n=Ve?Ve(r):new e.constructor(r);return e.copy(n),n}function Do(e){var t=new e.constructor(e.byteLength);return new Ye(t).set(new Ye(e)),t}function ko(e,t){var r=t?Do(e.buffer):e.buffer;return new e.constructor(r,e.byteOffset,e.length)}function Eo(t,r){if(t!==r){var n=t!==e,o=null===t,i=t==t,a=ls(t),s=r!==e,l=null===r,c=r==r,d=ls(r);if(!l&&!d&&!a&&t>r||a&&s&&c&&!l&&!d||o&&s&&c||!n&&c||!i)return 1;if(!o&&!a&&!d&&t<r||d&&n&&i&&!o&&!a||l&&n&&i||!s&&i||!c)return-1}return 0}function Fo(e,t,r,n){for(var o=-1,i=e.length,a=r.length,s=-1,l=t.length,c=br(i-a,0),d=we(l+c),u=!n;++s<l;)d[s]=t[s];for(;++o<a;)(u||o<i)&&(d[r[o]]=e[o]);for(;c--;)d[s++]=e[o++];return d}function Oo(e,t,r,n){for(var o=-1,i=e.length,a=-1,s=r.length,l=-1,c=t.length,d=br(i-s,0),u=we(d+c),h=!n;++o<d;)u[o]=e[o];for(var f=o;++l<c;)u[f+l]=t[l];for(;++a<s;)(h||o<i)&&(u[f+r[a]]=e[o++]);return u}function _o(e,t){var r=-1,n=e.length;for(t||(t=we(n));++r<n;)t[r]=e[r];return t}function To(t,r,n,o){var i=!n;n||(n={});for(var a=-1,s=r.length;++a<s;){var l=r[a],c=o?o(n[l],t[l],l,n,t):e;c===e&&(c=t[l]),i?on(n,l,c):en(n,l,c)}return n}function Io(e,t){return function(r,n){var o=Ya(r)?Dt:rn,i=t?t():{};return o(r,e,ci(n,2),i)}}function Mo(t){return Gn((function(r,n){var o=-1,i=n.length,a=i>1?n[i-1]:e,s=i>2?n[2]:e;for(a=t.length>3&&"function"==typeof a?(i--,a):e,s&&xi(n[0],n[1],s)&&(a=i<3?e:a,i=1),r=ke(r);++o<i;){var l=n[o];l&&t(r,l,o,a)}return r}))}function Ao(e,t){return function(r,n){if(null==r)return r;if(!Ua(r))return e(r,n);for(var o=r.length,i=t?o:-1,a=ke(r);(t?i--:++i<o)&&!1!==n(a[i],i,a););return r}}function Bo(e){return function(t,r,n){for(var o=-1,i=ke(t),a=n(t),s=a.length;s--;){var l=a[e?s:++o];if(!1===r(i[l],l,i))break}return t}}function jo(t){return function(r){var n=or(r=vs(r))?ur(r):e,o=n?n[0]:r.charAt(0),i=n?$o(n,1).join(""):r.slice(1);return o[t]()+i}}function zo(e){return function(t){return At(Qs(Hs(t).replace(Qe,"")),e,"")}}function Ro(e){return function(){var t=arguments;switch(t.length){case 0:return new e;case 1:return new e(t[0]);case 2:return new e(t[0],t[1]);case 3:return new e(t[0],t[1],t[2]);case 4:return new e(t[0],t[1],t[2],t[3]);case 5:return new e(t[0],t[1],t[2],t[3],t[4]);case 6:return new e(t[0],t[1],t[2],t[3],t[4],t[5]);case 7:return new e(t[0],t[1],t[2],t[3],t[4],t[5],t[6])}var r=Pr(e.prototype),n=e.apply(r,t);return es(n)?n:r}}function Lo(t){return function(r,n,o){var i=ke(r);if(!Ua(r)){var a=ci(n,3);r=Ts(r),n=function(e){return a(i[e],e,i)}}var s=t(r,n,o);return s>-1?i[a?r[s]:s]:e}}function Po(r){return ni((function(n){var o=n.length,i=o,a=Wr.prototype.thru;for(r&&n.reverse();i--;){var s=n[i];if("function"!=typeof s)throw new Oe(t);if(a&&!l&&"wrapper"==si(s))var l=new Wr([],!0)}for(i=l?i:o;++i<o;){var c=si(s=n[i]),d="wrapper"==c?ai(s):e;l=d&&$i(d[0])&&424==d[1]&&!d[4].length&&1==d[9]?l[si(d[0])].apply(l,d[3]):1==s.length&&$i(s)?l[c]():l.thru(s)}return function(){var e=arguments,t=e[0];if(l&&1==e.length&&Ya(t))return l.plant(t).value();for(var r=0,i=o?n[r].apply(this,e):t;++r<o;)i=n[r].call(this,i);return i}}))}function No(t,r,n,o,i,a,l,c,d,u){var h=r&s,f=1&r,p=2&r,g=24&r,m=512&r,b=p?e:Ro(t);return function s(){for(var v=arguments.length,y=we(v),x=v;x--;)y[x]=arguments[x];if(g)var w=li(s),$=function(e,t){for(var r=e.length,n=0;r--;)e[r]===t&&++n;return n}(y,w);if(o&&(y=Fo(y,o,i,g)),a&&(y=Oo(y,a,l,g)),v-=$,g&&v<u){var C=sr(y,w);return qo(t,r,No,s.placeholder,n,y,C,c,d,u-v)}var S=f?n:this,D=p?S[t]:t;return v=y.length,c?y=function(t,r){for(var n=t.length,o=vr(r.length,n),i=_o(t);o--;){var a=r[o];t[o]=yi(a,n)?i[a]:e}return t}(y,c):m&&v>1&&y.reverse(),h&&d<v&&(y.length=d),this&&this!==ht&&this instanceof s&&(D=b||Ro(D)),D.apply(S,y)}}function Wo(e,t){return function(r,n){return function(e,t,r,n){return xn(e,(function(e,o,i){t(n,r(e),o,i)})),n}(r,e,t(n),{})}}function Ho(t,r){return function(n,o){var i;if(n===e&&o===e)return r;if(n!==e&&(i=n),o!==e){if(i===e)return o;"string"==typeof n||"string"==typeof o?(n=co(n),o=co(o)):(n=lo(n),o=lo(o)),i=t(n,o)}return i}}function Yo(e){return ni((function(t){return t=It(t,Gt(ci())),Gn((function(r){var n=this;return e(t,(function(e){return St(e,n,r)}))}))}))}function Vo(t,r){var n=(r=r===e?" ":co(r)).length;if(n<2)return n?Zn(r,t):r;var o=Zn(r,pt(t/dr(r)));return or(r)?$o(ur(o),0,t).join(""):o.slice(0,t)}function Uo(t){return function(r,n,o){return o&&"number"!=typeof o&&xi(r,n,o)&&(n=o=e),r=fs(r),n===e?(n=r,r=0):n=fs(n),function(e,t,r,n){for(var o=-1,i=br(pt((t-e)/(r||1)),0),a=we(i);i--;)a[n?i:++o]=e,e+=r;return a}(r,n,o=o===e?r<n?1:-1:fs(o),t)}}function Ko(e){return function(t,r){return"string"==typeof t&&"string"==typeof r||(t=ms(t),r=ms(r)),e(t,r)}}function qo(t,r,n,o,s,l,c,d,u,h){var f=8&r;r|=f?i:a,4&(r&=~(f?a:i))||(r&=-4);var p=[t,r,s,f?l:e,f?c:e,f?e:l,f?e:c,d,u,h],g=n.apply(e,p);return $i(t)&&_i(g,p),g.placeholder=o,Mi(g,t,r)}function Zo(e){var t=De[e];return function(e,r){if(e=ms(e),(r=null==r?0:vr(ps(r),292))&&Vt(e)){var n=(vs(e)+"e").split("e");return+((n=(vs(t(n[0]+"e"+(+n[1]+r)))+"e").split("e"))[0]+"e"+(+n[1]-r))}return t(e)}}var Go=kr&&1/lr(new kr([,-0]))[1]==c?function(e){return new kr(e)}:ll;function Qo(e){return function(t){var r=gi(t);return r==w?ir(t):r==k?cr(t):function(e,t){return It(t,(function(t){return[t,e[t]]}))}(t,e(t))}}function Xo(r,c,d,u,h,f,p,g){var m=2&c;if(!m&&"function"!=typeof r)throw new Oe(t);var b=u?u.length:0;if(b||(c&=-97,u=h=e),p=p===e?p:br(ps(p),0),g=g===e?g:ps(g),b-=h?h.length:0,c&a){var v=u,y=h;u=h=e}var x=m?e:ai(r),w=[r,c,d,u,h,v,y,f,p,g];if(x&&function(e,t){var r=e[1],o=t[1],i=r|o,a=i<131,c=o==s&&8==r||o==s&&r==l&&e[7].length<=t[8]||384==o&&t[7].length<=t[8]&&8==r;if(!a&&!c)return e;1&o&&(e[2]=t[2],i|=1&r?0:4);var d=t[3];if(d){var u=e[3];e[3]=u?Fo(u,d,t[4]):d,e[4]=u?sr(e[3],n):t[4]}(d=t[5])&&(u=e[5],e[5]=u?Oo(u,d,t[6]):d,e[6]=u?sr(e[5],n):t[6]),(d=t[7])&&(e[7]=d),o&s&&(e[8]=null==e[8]?t[8]:vr(e[8],t[8])),null==e[9]&&(e[9]=t[9]),e[0]=t[0],e[1]=i}(w,x),r=w[0],c=w[1],d=w[2],u=w[3],h=w[4],!(g=w[9]=w[9]===e?m?0:r.length:br(w[9]-b,0))&&24&c&&(c&=-25),c&&1!=c)$=8==c||c==o?function(t,r,n){var o=Ro(t);return function i(){for(var a=arguments.length,s=we(a),l=a,c=li(i);l--;)s[l]=arguments[l];var d=a<3&&s[0]!==c&&s[a-1]!==c?[]:sr(s,c);return(a-=d.length)<n?qo(t,r,No,i.placeholder,e,s,d,e,e,n-a):St(this&&this!==ht&&this instanceof i?o:t,this,s)}}(r,c,g):c!=i&&33!=c||h.length?No.apply(e,w):function(e,t,r,n){var o=1&t,i=Ro(e);return function t(){for(var a=-1,s=arguments.length,l=-1,c=n.length,d=we(c+s),u=this&&this!==ht&&this instanceof t?i:e;++l<c;)d[l]=n[l];for(;s--;)d[l++]=arguments[++a];return St(u,o?r:this,d)}}(r,c,d,u);else var $=function(e,t,r){var n=1&t,o=Ro(e);return function t(){return(this&&this!==ht&&this instanceof t?o:e).apply(n?r:this,arguments)}}(r,c,d);return Mi((x?eo:_i)($,w),r,c)}function Jo(t,r,n,o){return t===e||Pa(t,Ie[n])&&!Be.call(o,n)?r:t}function ei(t,r,n,o,i,a){return es(t)&&es(r)&&(a.set(r,t),Wn(t,r,e,ei,a),a.delete(r)),t}function ti(t){return os(t)?e:t}function ri(t,r,n,o,i,a){var s=1&n,l=t.length,c=r.length;if(l!=c&&!(s&&c>l))return!1;var d=a.get(t),u=a.get(r);if(d&&u)return d==r&&u==t;var h=-1,f=!0,p=2&n?new Kr:e;for(a.set(t,r),a.set(r,t);++h<l;){var g=t[h],m=r[h];if(o)var b=s?o(m,g,h,r,t,a):o(g,m,h,t,r,a);if(b!==e){if(b)continue;f=!1;break}if(p){if(!jt(r,(function(e,t){if(!Xt(p,t)&&(g===e||i(g,e,n,o,a)))return p.push(t)}))){f=!1;break}}else if(g!==m&&!i(g,m,n,o,a)){f=!1;break}}return a.delete(t),a.delete(r),f}function ni(t){return Ii(Ei(t,e,Vi),t+"")}function oi(e){return Sn(e,Ts,fi)}function ii(e){return Sn(e,Is,pi)}var ai=Or?function(e){return Or.get(e)}:ll;function si(e){for(var t=e.name+"",r=_r[t],n=Be.call(_r,t)?r.length:0;n--;){var o=r[n],i=o.func;if(null==i||i==e)return o.name}return t}function li(e){return(Be.call(Lr,"placeholder")?Lr:e).placeholder}function ci(){var e=Lr.iteratee||ol;return e=e===ol?Bn:e,arguments.length?e(arguments[0],arguments[1]):e}function di(e,t){var r,n,o=e.__data__;return("string"==(n=typeof(r=t))||"number"==n||"symbol"==n||"boolean"==n?"__proto__"!==r:null===r)?o["string"==typeof t?"string":"hash"]:o.map}function ui(e){for(var t=Ts(e),r=t.length;r--;){var n=t[r],o=e[n];t[r]=[n,o,Di(o)]}return t}function hi(t,r){var n=function(t,r){return null==t?e:t[r]}(t,r);return An(n)?n:e}var fi=bt?function(e){return null==e?[]:(e=ke(e),Ot(bt(e),(function(t){return qe.call(e,t)})))}:gl,pi=bt?function(e){for(var t=[];e;)Mt(t,fi(e)),e=Ue(e);return t}:gl,gi=Dn;function mi(e,t,r){for(var n=-1,o=(t=xo(t,e)).length,i=!1;++n<o;){var a=zi(t[n]);if(!(i=null!=e&&r(e,a)))break;e=e[a]}return i||++n!=o?i:!!(o=null==e?0:e.length)&&Ja(o)&&yi(a,o)&&(Ya(e)||Ha(e))}function bi(e){return"function"!=typeof e.constructor||Si(e)?{}:Pr(Ue(e))}function vi(e){return Ya(e)||Ha(e)||!!(Ge&&e&&e[Ge])}function yi(e,t){var r=typeof e;return!!(t=null==t?d:t)&&("number"==r||"symbol"!=r&&me.test(e))&&e>-1&&e%1==0&&e<t}function xi(e,t,r){if(!es(r))return!1;var n=typeof t;return!!("number"==n?Ua(r)&&yi(t,r.length):"string"==n&&t in r)&&Pa(r[t],e)}function wi(e,t){if(Ya(e))return!1;var r=typeof e;return!("number"!=r&&"symbol"!=r&&"boolean"!=r&&null!=e&&!ls(e))||X.test(e)||!Q.test(e)||null!=t&&e in ke(t)}function $i(e){var t=si(e),r=Lr[t];if("function"!=typeof r||!(t in Hr.prototype))return!1;if(e===r)return!0;var n=ai(r);return!!n&&e===n[0]}(Cr&&gi(new Cr(new ArrayBuffer(1)))!=T||Sr&&gi(new Sr)!=w||Dr&&gi(Dr.resolve())!=S||kr&&gi(new kr)!=k||Er&&gi(new Er)!=O)&&(gi=function(t){var r=Dn(t),n=r==C?t.constructor:e,o=n?Ri(n):"";if(o)switch(o){case Tr:return T;case Ir:return w;case Mr:return S;case Ar:return k;case Br:return O}return r});var Ci=Me?Qa:ml;function Si(e){var t=e&&e.constructor;return e===("function"==typeof t&&t.prototype||Ie)}function Di(e){return e==e&&!es(e)}function ki(t,r){return function(n){return null!=n&&n[t]===r&&(r!==e||t in ke(n))}}function Ei(t,r,n){return r=br(r===e?t.length-1:r,0),function(){for(var e=arguments,o=-1,i=br(e.length-r,0),a=we(i);++o<i;)a[o]=e[r+o];o=-1;for(var s=we(r+1);++o<r;)s[o]=e[o];return s[r]=n(a),St(t,this,s)}}function Fi(e,t){return t.length<2?e:Cn(e,no(t,0,-1))}function Oi(e,t){if(("constructor"!==t||"function"!=typeof e[t])&&"__proto__"!=t)return e[t]}var _i=Ai(eo),Ti=ft||function(e,t){return ht.setTimeout(e,t)},Ii=Ai(to);function Mi(e,t,r){var n=t+"";return Ii(e,function(e,t){var r=t.length;if(!r)return e;var n=r-1;return t[n]=(r>1?"& ":"")+t[n],t=t.join(r>2?", ":" "),e.replace(oe,"{\n/* [wrapped with "+t+"] */\n")}(n,function(e,t){return kt(f,(function(r){var n="_."+r[0];t&r[1]&&!_t(e,n)&&e.push(n)})),e.sort()}(function(e){var t=e.match(ie);return t?t[1].split(ae):[]}(n),r)))}function Ai(t){var r=0,n=0;return function(){var o=yr(),i=16-(o-n);if(n=o,i>0){if(++r>=800)return arguments[0]}else r=0;return t.apply(e,arguments)}}function Bi(t,r){var n=-1,o=t.length,i=o-1;for(r=r===e?o:r;++n<r;){var a=qn(n,i),s=t[a];t[a]=t[n],t[n]=s}return t.length=r,t}var ji=function(e){var t=Aa(e,(function(e){return 500===r.size&&r.clear(),e})),r=t.cache;return t}((function(e){var t=[];return 46===e.charCodeAt(0)&&t.push(""),e.replace(J,(function(e,r,n,o){t.push(n?o.replace(ce,"$1"):r||e)})),t}));function zi(e){if("string"==typeof e||ls(e))return e;var t=e+"";return"0"==t&&1/e==-1/0?"-0":t}function Ri(e){if(null!=e){try{return Ae.call(e)}catch(e){}try{return e+""}catch(e){}}return""}function Li(e){if(e instanceof Hr)return e.clone();var t=new Wr(e.__wrapped__,e.__chain__);return t.__actions__=_o(e.__actions__),t.__index__=e.__index__,t.__values__=e.__values__,t}var Pi=Gn((function(e,t){return Ka(e)?un(e,bn(t,1,Ka,!0)):[]})),Ni=Gn((function(t,r){var n=Gi(r);return Ka(n)&&(n=e),Ka(t)?un(t,bn(r,1,Ka,!0),ci(n,2)):[]})),Wi=Gn((function(t,r){var n=Gi(r);return Ka(n)&&(n=e),Ka(t)?un(t,bn(r,1,Ka,!0),e,n):[]}));function Hi(e,t,r){var n=null==e?0:e.length;if(!n)return-1;var o=null==r?0:ps(r);return o<0&&(o=br(n+o,0)),Lt(e,ci(t,3),o)}function Yi(t,r,n){var o=null==t?0:t.length;if(!o)return-1;var i=o-1;return n!==e&&(i=ps(n),i=n<0?br(o+i,0):vr(i,o-1)),Lt(t,ci(r,3),i,!0)}function Vi(e){return null!=e&&e.length?bn(e,1):[]}function Ui(t){return t&&t.length?t[0]:e}var Ki=Gn((function(e){var t=It(e,vo);return t.length&&t[0]===e[0]?On(t):[]})),qi=Gn((function(t){var r=Gi(t),n=It(t,vo);return r===Gi(n)?r=e:n.pop(),n.length&&n[0]===t[0]?On(n,ci(r,2)):[]})),Zi=Gn((function(t){var r=Gi(t),n=It(t,vo);return(r="function"==typeof r?r:e)&&n.pop(),n.length&&n[0]===t[0]?On(n,e,r):[]}));function Gi(t){var r=null==t?0:t.length;return r?t[r-1]:e}var Qi=Gn(Xi);function Xi(e,t){return e&&e.length&&t&&t.length?Un(e,t):e}var Ji=ni((function(e,t){var r=null==e?0:e.length,n=an(e,t);return Kn(e,It(t,(function(e){return yi(e,r)?+e:e})).sort(Eo)),n}));function ea(e){return null==e?e:$r.call(e)}var ta=Gn((function(e){return uo(bn(e,1,Ka,!0))})),ra=Gn((function(t){var r=Gi(t);return Ka(r)&&(r=e),uo(bn(t,1,Ka,!0),ci(r,2))})),na=Gn((function(t){var r=Gi(t);return r="function"==typeof r?r:e,uo(bn(t,1,Ka,!0),e,r)}));function oa(e){if(!e||!e.length)return[];var t=0;return e=Ot(e,(function(e){if(Ka(e))return t=br(e.length,t),!0})),qt(t,(function(t){return It(e,Yt(t))}))}function ia(t,r){if(!t||!t.length)return[];var n=oa(t);return null==r?n:It(n,(function(t){return St(r,e,t)}))}var aa=Gn((function(e,t){return Ka(e)?un(e,t):[]})),sa=Gn((function(e){return mo(Ot(e,Ka))})),la=Gn((function(t){var r=Gi(t);return Ka(r)&&(r=e),mo(Ot(t,Ka),ci(r,2))})),ca=Gn((function(t){var r=Gi(t);return r="function"==typeof r?r:e,mo(Ot(t,Ka),e,r)})),da=Gn(oa),ua=Gn((function(t){var r=t.length,n=r>1?t[r-1]:e;return n="function"==typeof n?(t.pop(),n):e,ia(t,n)}));function ha(e){var t=Lr(e);return t.__chain__=!0,t}function fa(e,t){return t(e)}var pa=ni((function(t){var r=t.length,n=r?t[0]:0,o=this.__wrapped__,i=function(e){return an(e,t)};return!(r>1||this.__actions__.length)&&o instanceof Hr&&yi(n)?((o=o.slice(n,+n+(r?1:0))).__actions__.push({func:fa,args:[i],thisArg:e}),new Wr(o,this.__chain__).thru((function(t){return r&&!t.length&&t.push(e),t}))):this.thru(i)})),ga=Io((function(e,t,r){Be.call(e,r)?++e[r]:on(e,r,1)})),ma=Lo(Hi),ba=Lo(Yi);function va(e,t){return(Ya(e)?kt:hn)(e,ci(t,3))}function ya(e,t){return(Ya(e)?Et:fn)(e,ci(t,3))}var xa=Io((function(e,t,r){Be.call(e,r)?e[r].push(t):on(e,r,[t])})),wa=Gn((function(e,t,r){var n=-1,o="function"==typeof t,i=Ua(e)?we(e.length):[];return hn(e,(function(e){i[++n]=o?St(t,e,r):_n(e,t,r)})),i})),$a=Io((function(e,t,r){on(e,r,t)}));function Ca(e,t){return(Ya(e)?It:Ln)(e,ci(t,3))}var Sa=Io((function(e,t,r){e[r?0:1].push(t)}),(function(){return[[],[]]})),Da=Gn((function(e,t){if(null==e)return[];var r=t.length;return r>1&&xi(e,t[0],t[1])?t=[]:r>2&&xi(t[0],t[1],t[2])&&(t=[t[0]]),Yn(e,bn(t,1),[])})),ka=ut||function(){return ht.Date.now()};function Ea(t,r,n){return r=n?e:r,r=t&&null==r?t.length:r,Xo(t,s,e,e,e,e,r)}function Fa(r,n){var o;if("function"!=typeof n)throw new Oe(t);return r=ps(r),function(){return--r>0&&(o=n.apply(this,arguments)),r<=1&&(n=e),o}}var Oa=Gn((function(e,t,r){var n=1;if(r.length){var o=sr(r,li(Oa));n|=i}return Xo(e,n,t,r,o)})),_a=Gn((function(e,t,r){var n=3;if(r.length){var o=sr(r,li(_a));n|=i}return Xo(t,n,e,r,o)}));function Ta(r,n,o){var i,a,s,l,c,d,u=0,h=!1,f=!1,p=!0;if("function"!=typeof r)throw new Oe(t);function g(t){var n=i,o=a;return i=a=e,u=t,l=r.apply(o,n)}function m(t){var r=t-d;return d===e||r>=n||r<0||f&&t-u>=s}function b(){var e=ka();if(m(e))return v(e);c=Ti(b,function(e){var t=n-(e-d);return f?vr(t,s-(e-u)):t}(e))}function v(t){return c=e,p&&i?g(t):(i=a=e,l)}function y(){var t=ka(),r=m(t);if(i=arguments,a=this,d=t,r){if(c===e)return function(e){return u=e,c=Ti(b,n),h?g(e):l}(d);if(f)return Co(c),c=Ti(b,n),g(d)}return c===e&&(c=Ti(b,n)),l}return n=ms(n)||0,es(o)&&(h=!!o.leading,s=(f="maxWait"in o)?br(ms(o.maxWait)||0,n):s,p="trailing"in o?!!o.trailing:p),y.cancel=function(){c!==e&&Co(c),u=0,i=d=a=c=e},y.flush=function(){return c===e?l:v(ka())},y}var Ia=Gn((function(e,t){return dn(e,1,t)})),Ma=Gn((function(e,t,r){return dn(e,ms(t)||0,r)}));function Aa(e,r){if("function"!=typeof e||null!=r&&"function"!=typeof r)throw new Oe(t);var n=function(){var t=arguments,o=r?r.apply(this,t):t[0],i=n.cache;if(i.has(o))return i.get(o);var a=e.apply(this,t);return n.cache=i.set(o,a)||i,a};return n.cache=new(Aa.Cache||Ur),n}function Ba(e){if("function"!=typeof e)throw new Oe(t);return function(){var t=arguments;switch(t.length){case 0:return!e.call(this);case 1:return!e.call(this,t[0]);case 2:return!e.call(this,t[0],t[1]);case 3:return!e.call(this,t[0],t[1],t[2])}return!e.apply(this,t)}}Aa.Cache=Ur;var ja=wo((function(e,t){var r=(t=1==t.length&&Ya(t[0])?It(t[0],Gt(ci())):It(bn(t,1),Gt(ci()))).length;return Gn((function(n){for(var o=-1,i=vr(n.length,r);++o<i;)n[o]=t[o].call(this,n[o]);return St(e,this,n)}))})),za=Gn((function(t,r){var n=sr(r,li(za));return Xo(t,i,e,r,n)})),Ra=Gn((function(t,r){var n=sr(r,li(Ra));return Xo(t,a,e,r,n)})),La=ni((function(t,r){return Xo(t,l,e,e,e,r)}));function Pa(e,t){return e===t||e!=e&&t!=t}var Na=Ko(kn),Wa=Ko((function(e,t){return e>=t})),Ha=Tn(function(){return arguments}())?Tn:function(e){return ts(e)&&Be.call(e,"callee")&&!qe.call(e,"callee")},Ya=we.isArray,Va=vt?Gt(vt):function(e){return ts(e)&&Dn(e)==_};function Ua(e){return null!=e&&Ja(e.length)&&!Qa(e)}function Ka(e){return ts(e)&&Ua(e)}var qa=zt||ml,Za=yt?Gt(yt):function(e){return ts(e)&&Dn(e)==b};function Ga(e){if(!ts(e))return!1;var t=Dn(e);return t==v||"[object DOMException]"==t||"string"==typeof e.message&&"string"==typeof e.name&&!os(e)}function Qa(e){if(!es(e))return!1;var t=Dn(e);return t==y||t==x||"[object AsyncFunction]"==t||"[object Proxy]"==t}function Xa(e){return"number"==typeof e&&e==ps(e)}function Ja(e){return"number"==typeof e&&e>-1&&e%1==0&&e<=d}function es(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)}function ts(e){return null!=e&&"object"==typeof e}var rs=xt?Gt(xt):function(e){return ts(e)&&gi(e)==w};function ns(e){return"number"==typeof e||ts(e)&&Dn(e)==$}function os(e){if(!ts(e)||Dn(e)!=C)return!1;var t=Ue(e);if(null===t)return!0;var r=Be.call(t,"constructor")&&t.constructor;return"function"==typeof r&&r instanceof r&&Ae.call(r)==Le}var is=wt?Gt(wt):function(e){return ts(e)&&Dn(e)==D},as=$t?Gt($t):function(e){return ts(e)&&gi(e)==k};function ss(e){return"string"==typeof e||!Ya(e)&&ts(e)&&Dn(e)==E}function ls(e){return"symbol"==typeof e||ts(e)&&Dn(e)==F}var cs=Ct?Gt(Ct):function(e){return ts(e)&&Ja(e.length)&&!!it[Dn(e)]},ds=Ko(Rn),us=Ko((function(e,t){return e<=t}));function hs(e){if(!e)return[];if(Ua(e))return ss(e)?ur(e):_o(e);if(Je&&e[Je])return function(e){for(var t,r=[];!(t=e.next()).done;)r.push(t.value);return r}(e[Je]());var t=gi(e);return(t==w?ir:t==k?lr:Ps)(e)}function fs(e){return e?(e=ms(e))===c||e===-1/0?17976931348623157e292*(e<0?-1:1):e==e?e:0:0===e?e:0}function ps(e){var t=fs(e),r=t%1;return t==t?r?t-r:t:0}function gs(e){return e?sn(ps(e),0,h):0}function ms(e){if("number"==typeof e)return e;if(ls(e))return u;if(es(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=es(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=Zt(e);var r=fe.test(e);return r||ge.test(e)?ct(e.slice(2),r?2:8):he.test(e)?u:+e}function bs(e){return To(e,Is(e))}function vs(e){return null==e?"":co(e)}var ys=Mo((function(e,t){if(Si(t)||Ua(t))To(t,Ts(t),e);else for(var r in t)Be.call(t,r)&&en(e,r,t[r])})),xs=Mo((function(e,t){To(t,Is(t),e)})),ws=Mo((function(e,t,r,n){To(t,Is(t),e,n)})),$s=Mo((function(e,t,r,n){To(t,Ts(t),e,n)})),Cs=ni(an),Ss=Gn((function(t,r){t=ke(t);var n=-1,o=r.length,i=o>2?r[2]:e;for(i&&xi(r[0],r[1],i)&&(o=1);++n<o;)for(var a=r[n],s=Is(a),l=-1,c=s.length;++l<c;){var d=s[l],u=t[d];(u===e||Pa(u,Ie[d])&&!Be.call(t,d))&&(t[d]=a[d])}return t})),Ds=Gn((function(t){return t.push(e,ei),St(As,e,t)}));function ks(t,r,n){var o=null==t?e:Cn(t,r);return o===e?n:o}function Es(e,t){return null!=e&&mi(e,t,Fn)}var Fs=Wo((function(e,t,r){null!=t&&"function"!=typeof t.toString&&(t=Re.call(t)),e[t]=r}),el(nl)),Os=Wo((function(e,t,r){null!=t&&"function"!=typeof t.toString&&(t=Re.call(t)),Be.call(e,t)?e[t].push(r):e[t]=[r]}),ci),_s=Gn(_n);function Ts(e){return Ua(e)?Zr(e):jn(e)}function Is(e){return Ua(e)?Zr(e,!0):zn(e)}var Ms=Mo((function(e,t,r){Wn(e,t,r)})),As=Mo((function(e,t,r,n){Wn(e,t,r,n)})),Bs=ni((function(e,t){var r={};if(null==e)return r;var n=!1;t=It(t,(function(t){return t=xo(t,e),n||(n=t.length>1),t})),To(e,ii(e),r),n&&(r=ln(r,7,ti));for(var o=t.length;o--;)ho(r,t[o]);return r})),js=ni((function(e,t){return null==e?{}:function(e,t){return Vn(e,t,(function(t,r){return Es(e,r)}))}(e,t)}));function zs(e,t){if(null==e)return{};var r=It(ii(e),(function(e){return[e]}));return t=ci(t),Vn(e,r,(function(e,r){return t(e,r[0])}))}var Rs=Qo(Ts),Ls=Qo(Is);function Ps(e){return null==e?[]:Qt(e,Ts(e))}var Ns=zo((function(e,t,r){return t=t.toLowerCase(),e+(r?Ws(t):t)}));function Ws(e){return Gs(vs(e).toLowerCase())}function Hs(e){return(e=vs(e))&&e.replace(be,tr).replace(Xe,"")}var Ys=zo((function(e,t,r){return e+(r?"-":"")+t.toLowerCase()})),Vs=zo((function(e,t,r){return e+(r?" ":"")+t.toLowerCase()})),Us=jo("toLowerCase"),Ks=zo((function(e,t,r){return e+(r?"_":"")+t.toLowerCase()})),qs=zo((function(e,t,r){return e+(r?" ":"")+Gs(t)})),Zs=zo((function(e,t,r){return e+(r?" ":"")+t.toUpperCase()})),Gs=jo("toUpperCase");function Qs(t,r,n){return t=vs(t),(r=n?e:r)===e?function(e){return rt.test(e)}(t)?function(e){return e.match(et)||[]}(t):function(e){return e.match(se)||[]}(t):t.match(r)||[]}var Xs=Gn((function(t,r){try{return St(t,e,r)}catch(e){return Ga(e)?e:new Ce(e)}})),Js=ni((function(e,t){return kt(t,(function(t){t=zi(t),on(e,t,Oa(e[t],e))})),e}));function el(e){return function(){return e}}var tl=Po(),rl=Po(!0);function nl(e){return e}function ol(e){return Bn("function"==typeof e?e:ln(e,1))}var il=Gn((function(e,t){return function(r){return _n(r,e,t)}})),al=Gn((function(e,t){return function(r){return _n(e,r,t)}}));function sl(e,t,r){var n=Ts(t),o=$n(t,n);null!=r||es(t)&&(o.length||!n.length)||(r=t,t=e,e=this,o=$n(t,Ts(t)));var i=!(es(r)&&"chain"in r&&!r.chain),a=Qa(e);return kt(o,(function(r){var n=t[r];e[r]=n,a&&(e.prototype[r]=function(){var t=this.__chain__;if(i||t){var r=e(this.__wrapped__);return(r.__actions__=_o(this.__actions__)).push({func:n,args:arguments,thisArg:e}),r.__chain__=t,r}return n.apply(e,Mt([this.value()],arguments))})})),e}function ll(){}var cl=Yo(It),dl=Yo(Ft),ul=Yo(jt);function hl(e){return wi(e)?Yt(zi(e)):function(e){return function(t){return Cn(t,e)}}(e)}var fl=Uo(),pl=Uo(!0);function gl(){return[]}function ml(){return!1}var bl,vl=Ho((function(e,t){return e+t}),0),yl=Zo("ceil"),xl=Ho((function(e,t){return e/t}),1),wl=Zo("floor"),$l=Ho((function(e,t){return e*t}),1),Cl=Zo("round"),Sl=Ho((function(e,t){return e-t}),0);return Lr.after=function(e,r){if("function"!=typeof r)throw new Oe(t);return e=ps(e),function(){if(--e<1)return r.apply(this,arguments)}},Lr.ary=Ea,Lr.assign=ys,Lr.assignIn=xs,Lr.assignInWith=ws,Lr.assignWith=$s,Lr.at=Cs,Lr.before=Fa,Lr.bind=Oa,Lr.bindAll=Js,Lr.bindKey=_a,Lr.castArray=function(){if(!arguments.length)return[];var e=arguments[0];return Ya(e)?e:[e]},Lr.chain=ha,Lr.chunk=function(t,r,n){r=(n?xi(t,r,n):r===e)?1:br(ps(r),0);var o=null==t?0:t.length;if(!o||r<1)return[];for(var i=0,a=0,s=we(pt(o/r));i<o;)s[a++]=no(t,i,i+=r);return s},Lr.compact=function(e){for(var t=-1,r=null==e?0:e.length,n=0,o=[];++t<r;){var i=e[t];i&&(o[n++]=i)}return o},Lr.concat=function(){var e=arguments.length;if(!e)return[];for(var t=we(e-1),r=arguments[0],n=e;n--;)t[n-1]=arguments[n];return Mt(Ya(r)?_o(r):[r],bn(t,1))},Lr.cond=function(e){var r=null==e?0:e.length,n=ci();return e=r?It(e,(function(e){if("function"!=typeof e[1])throw new Oe(t);return[n(e[0]),e[1]]})):[],Gn((function(t){for(var n=-1;++n<r;){var o=e[n];if(St(o[0],this,t))return St(o[1],this,t)}}))},Lr.conforms=function(e){return function(e){var t=Ts(e);return function(r){return cn(r,e,t)}}(ln(e,1))},Lr.constant=el,Lr.countBy=ga,Lr.create=function(e,t){var r=Pr(e);return null==t?r:nn(r,t)},Lr.curry=function t(r,n,o){var i=Xo(r,8,e,e,e,e,e,n=o?e:n);return i.placeholder=t.placeholder,i},Lr.curryRight=function t(r,n,i){var a=Xo(r,o,e,e,e,e,e,n=i?e:n);return a.placeholder=t.placeholder,a},Lr.debounce=Ta,Lr.defaults=Ss,Lr.defaultsDeep=Ds,Lr.defer=Ia,Lr.delay=Ma,Lr.difference=Pi,Lr.differenceBy=Ni,Lr.differenceWith=Wi,Lr.drop=function(t,r,n){var o=null==t?0:t.length;return o?no(t,(r=n||r===e?1:ps(r))<0?0:r,o):[]},Lr.dropRight=function(t,r,n){var o=null==t?0:t.length;return o?no(t,0,(r=o-(r=n||r===e?1:ps(r)))<0?0:r):[]},Lr.dropRightWhile=function(e,t){return e&&e.length?po(e,ci(t,3),!0,!0):[]},Lr.dropWhile=function(e,t){return e&&e.length?po(e,ci(t,3),!0):[]},Lr.fill=function(t,r,n,o){var i=null==t?0:t.length;return i?(n&&"number"!=typeof n&&xi(t,r,n)&&(n=0,o=i),function(t,r,n,o){var i=t.length;for((n=ps(n))<0&&(n=-n>i?0:i+n),(o=o===e||o>i?i:ps(o))<0&&(o+=i),o=n>o?0:gs(o);n<o;)t[n++]=r;return t}(t,r,n,o)):[]},Lr.filter=function(e,t){return(Ya(e)?Ot:mn)(e,ci(t,3))},Lr.flatMap=function(e,t){return bn(Ca(e,t),1)},Lr.flatMapDeep=function(e,t){return bn(Ca(e,t),c)},Lr.flatMapDepth=function(t,r,n){return n=n===e?1:ps(n),bn(Ca(t,r),n)},Lr.flatten=Vi,Lr.flattenDeep=function(e){return null!=e&&e.length?bn(e,c):[]},Lr.flattenDepth=function(t,r){return null!=t&&t.length?bn(t,r=r===e?1:ps(r)):[]},Lr.flip=function(e){return Xo(e,512)},Lr.flow=tl,Lr.flowRight=rl,Lr.fromPairs=function(e){for(var t=-1,r=null==e?0:e.length,n={};++t<r;){var o=e[t];n[o[0]]=o[1]}return n},Lr.functions=function(e){return null==e?[]:$n(e,Ts(e))},Lr.functionsIn=function(e){return null==e?[]:$n(e,Is(e))},Lr.groupBy=xa,Lr.initial=function(e){return null!=e&&e.length?no(e,0,-1):[]},Lr.intersection=Ki,Lr.intersectionBy=qi,Lr.intersectionWith=Zi,Lr.invert=Fs,Lr.invertBy=Os,Lr.invokeMap=wa,Lr.iteratee=ol,Lr.keyBy=$a,Lr.keys=Ts,Lr.keysIn=Is,Lr.map=Ca,Lr.mapKeys=function(e,t){var r={};return t=ci(t,3),xn(e,(function(e,n,o){on(r,t(e,n,o),e)})),r},Lr.mapValues=function(e,t){var r={};return t=ci(t,3),xn(e,(function(e,n,o){on(r,n,t(e,n,o))})),r},Lr.matches=function(e){return Pn(ln(e,1))},Lr.matchesProperty=function(e,t){return Nn(e,ln(t,1))},Lr.memoize=Aa,Lr.merge=Ms,Lr.mergeWith=As,Lr.method=il,Lr.methodOf=al,Lr.mixin=sl,Lr.negate=Ba,Lr.nthArg=function(e){return e=ps(e),Gn((function(t){return Hn(t,e)}))},Lr.omit=Bs,Lr.omitBy=function(e,t){return zs(e,Ba(ci(t)))},Lr.once=function(e){return Fa(2,e)},Lr.orderBy=function(t,r,n,o){return null==t?[]:(Ya(r)||(r=null==r?[]:[r]),Ya(n=o?e:n)||(n=null==n?[]:[n]),Yn(t,r,n))},Lr.over=cl,Lr.overArgs=ja,Lr.overEvery=dl,Lr.overSome=ul,Lr.partial=za,Lr.partialRight=Ra,Lr.partition=Sa,Lr.pick=js,Lr.pickBy=zs,Lr.property=hl,Lr.propertyOf=function(t){return function(r){return null==t?e:Cn(t,r)}},Lr.pull=Qi,Lr.pullAll=Xi,Lr.pullAllBy=function(e,t,r){return e&&e.length&&t&&t.length?Un(e,t,ci(r,2)):e},Lr.pullAllWith=function(t,r,n){return t&&t.length&&r&&r.length?Un(t,r,e,n):t},Lr.pullAt=Ji,Lr.range=fl,Lr.rangeRight=pl,Lr.rearg=La,Lr.reject=function(e,t){return(Ya(e)?Ot:mn)(e,Ba(ci(t,3)))},Lr.remove=function(e,t){var r=[];if(!e||!e.length)return r;var n=-1,o=[],i=e.length;for(t=ci(t,3);++n<i;){var a=e[n];t(a,n,e)&&(r.push(a),o.push(n))}return Kn(e,o),r},Lr.rest=function(r,n){if("function"!=typeof r)throw new Oe(t);return Gn(r,n=n===e?n:ps(n))},Lr.reverse=ea,Lr.sampleSize=function(t,r,n){return r=(n?xi(t,r,n):r===e)?1:ps(r),(Ya(t)?Qr:Xn)(t,r)},Lr.set=function(e,t,r){return null==e?e:Jn(e,t,r)},Lr.setWith=function(t,r,n,o){return o="function"==typeof o?o:e,null==t?t:Jn(t,r,n,o)},Lr.shuffle=function(e){return(Ya(e)?Xr:ro)(e)},Lr.slice=function(t,r,n){var o=null==t?0:t.length;return o?(n&&"number"!=typeof n&&xi(t,r,n)?(r=0,n=o):(r=null==r?0:ps(r),n=n===e?o:ps(n)),no(t,r,n)):[]},Lr.sortBy=Da,Lr.sortedUniq=function(e){return e&&e.length?so(e):[]},Lr.sortedUniqBy=function(e,t){return e&&e.length?so(e,ci(t,2)):[]},Lr.split=function(t,r,n){return n&&"number"!=typeof n&&xi(t,r,n)&&(r=n=e),(n=n===e?h:n>>>0)?(t=vs(t))&&("string"==typeof r||null!=r&&!is(r))&&!(r=co(r))&&or(t)?$o(ur(t),0,n):t.split(r,n):[]},Lr.spread=function(e,r){if("function"!=typeof e)throw new Oe(t);return r=null==r?0:br(ps(r),0),Gn((function(t){var n=t[r],o=$o(t,0,r);return n&&Mt(o,n),St(e,this,o)}))},Lr.tail=function(e){var t=null==e?0:e.length;return t?no(e,1,t):[]},Lr.take=function(t,r,n){return t&&t.length?no(t,0,(r=n||r===e?1:ps(r))<0?0:r):[]},Lr.takeRight=function(t,r,n){var o=null==t?0:t.length;return o?no(t,(r=o-(r=n||r===e?1:ps(r)))<0?0:r,o):[]},Lr.takeRightWhile=function(e,t){return e&&e.length?po(e,ci(t,3),!1,!0):[]},Lr.takeWhile=function(e,t){return e&&e.length?po(e,ci(t,3)):[]},Lr.tap=function(e,t){return t(e),e},Lr.throttle=function(e,r,n){var o=!0,i=!0;if("function"!=typeof e)throw new Oe(t);return es(n)&&(o="leading"in n?!!n.leading:o,i="trailing"in n?!!n.trailing:i),Ta(e,r,{leading:o,maxWait:r,trailing:i})},Lr.thru=fa,Lr.toArray=hs,Lr.toPairs=Rs,Lr.toPairsIn=Ls,Lr.toPath=function(e){return Ya(e)?It(e,zi):ls(e)?[e]:_o(ji(vs(e)))},Lr.toPlainObject=bs,Lr.transform=function(e,t,r){var n=Ya(e),o=n||qa(e)||cs(e);if(t=ci(t,4),null==r){var i=e&&e.constructor;r=o?n?new i:[]:es(e)&&Qa(i)?Pr(Ue(e)):{}}return(o?kt:xn)(e,(function(e,n,o){return t(r,e,n,o)})),r},Lr.unary=function(e){return Ea(e,1)},Lr.union=ta,Lr.unionBy=ra,Lr.unionWith=na,Lr.uniq=function(e){return e&&e.length?uo(e):[]},Lr.uniqBy=function(e,t){return e&&e.length?uo(e,ci(t,2)):[]},Lr.uniqWith=function(t,r){return r="function"==typeof r?r:e,t&&t.length?uo(t,e,r):[]},Lr.unset=function(e,t){return null==e||ho(e,t)},Lr.unzip=oa,Lr.unzipWith=ia,Lr.update=function(e,t,r){return null==e?e:fo(e,t,yo(r))},Lr.updateWith=function(t,r,n,o){return o="function"==typeof o?o:e,null==t?t:fo(t,r,yo(n),o)},Lr.values=Ps,Lr.valuesIn=function(e){return null==e?[]:Qt(e,Is(e))},Lr.without=aa,Lr.words=Qs,Lr.wrap=function(e,t){return za(yo(t),e)},Lr.xor=sa,Lr.xorBy=la,Lr.xorWith=ca,Lr.zip=da,Lr.zipObject=function(e,t){return bo(e||[],t||[],en)},Lr.zipObjectDeep=function(e,t){return bo(e||[],t||[],Jn)},Lr.zipWith=ua,Lr.entries=Rs,Lr.entriesIn=Ls,Lr.extend=xs,Lr.extendWith=ws,sl(Lr,Lr),Lr.add=vl,Lr.attempt=Xs,Lr.camelCase=Ns,Lr.capitalize=Ws,Lr.ceil=yl,Lr.clamp=function(t,r,n){return n===e&&(n=r,r=e),n!==e&&(n=(n=ms(n))==n?n:0),r!==e&&(r=(r=ms(r))==r?r:0),sn(ms(t),r,n)},Lr.clone=function(e){return ln(e,4)},Lr.cloneDeep=function(e){return ln(e,5)},Lr.cloneDeepWith=function(t,r){return ln(t,5,r="function"==typeof r?r:e)},Lr.cloneWith=function(t,r){return ln(t,4,r="function"==typeof r?r:e)},Lr.conformsTo=function(e,t){return null==t||cn(e,t,Ts(t))},Lr.deburr=Hs,Lr.defaultTo=function(e,t){return null==e||e!=e?t:e},Lr.divide=xl,Lr.endsWith=function(t,r,n){t=vs(t),r=co(r);var o=t.length,i=n=n===e?o:sn(ps(n),0,o);return(n-=r.length)>=0&&t.slice(n,i)==r},Lr.eq=Pa,Lr.escape=function(e){return(e=vs(e))&&K.test(e)?e.replace(V,rr):e},Lr.escapeRegExp=function(e){return(e=vs(e))&&te.test(e)?e.replace(ee,"\\$&"):e},Lr.every=function(t,r,n){var o=Ya(t)?Ft:pn;return n&&xi(t,r,n)&&(r=e),o(t,ci(r,3))},Lr.find=ma,Lr.findIndex=Hi,Lr.findKey=function(e,t){return Rt(e,ci(t,3),xn)},Lr.findLast=ba,Lr.findLastIndex=Yi,Lr.findLastKey=function(e,t){return Rt(e,ci(t,3),wn)},Lr.floor=wl,Lr.forEach=va,Lr.forEachRight=ya,Lr.forIn=function(e,t){return null==e?e:vn(e,ci(t,3),Is)},Lr.forInRight=function(e,t){return null==e?e:yn(e,ci(t,3),Is)},Lr.forOwn=function(e,t){return e&&xn(e,ci(t,3))},Lr.forOwnRight=function(e,t){return e&&wn(e,ci(t,3))},Lr.get=ks,Lr.gt=Na,Lr.gte=Wa,Lr.has=function(e,t){return null!=e&&mi(e,t,En)},Lr.hasIn=Es,Lr.head=Ui,Lr.identity=nl,Lr.includes=function(e,t,r,n){e=Ua(e)?e:Ps(e),r=r&&!n?ps(r):0;var o=e.length;return r<0&&(r=br(o+r,0)),ss(e)?r<=o&&e.indexOf(t,r)>-1:!!o&&Pt(e,t,r)>-1},Lr.indexOf=function(e,t,r){var n=null==e?0:e.length;if(!n)return-1;var o=null==r?0:ps(r);return o<0&&(o=br(n+o,0)),Pt(e,t,o)},Lr.inRange=function(t,r,n){return r=fs(r),n===e?(n=r,r=0):n=fs(n),function(e,t,r){return e>=vr(t,r)&&e<br(t,r)}(t=ms(t),r,n)},Lr.invoke=_s,Lr.isArguments=Ha,Lr.isArray=Ya,Lr.isArrayBuffer=Va,Lr.isArrayLike=Ua,Lr.isArrayLikeObject=Ka,Lr.isBoolean=function(e){return!0===e||!1===e||ts(e)&&Dn(e)==m},Lr.isBuffer=qa,Lr.isDate=Za,Lr.isElement=function(e){return ts(e)&&1===e.nodeType&&!os(e)},Lr.isEmpty=function(e){if(null==e)return!0;if(Ua(e)&&(Ya(e)||"string"==typeof e||"function"==typeof e.splice||qa(e)||cs(e)||Ha(e)))return!e.length;var t=gi(e);if(t==w||t==k)return!e.size;if(Si(e))return!jn(e).length;for(var r in e)if(Be.call(e,r))return!1;return!0},Lr.isEqual=function(e,t){return In(e,t)},Lr.isEqualWith=function(t,r,n){var o=(n="function"==typeof n?n:e)?n(t,r):e;return o===e?In(t,r,e,n):!!o},Lr.isError=Ga,Lr.isFinite=function(e){return"number"==typeof e&&Vt(e)},Lr.isFunction=Qa,Lr.isInteger=Xa,Lr.isLength=Ja,Lr.isMap=rs,Lr.isMatch=function(e,t){return e===t||Mn(e,t,ui(t))},Lr.isMatchWith=function(t,r,n){return n="function"==typeof n?n:e,Mn(t,r,ui(r),n)},Lr.isNaN=function(e){return ns(e)&&e!=+e},Lr.isNative=function(e){if(Ci(e))throw new Ce("Unsupported core-js use. Try https://npms.io/search?q=ponyfill.");return An(e)},Lr.isNil=function(e){return null==e},Lr.isNull=function(e){return null===e},Lr.isNumber=ns,Lr.isObject=es,Lr.isObjectLike=ts,Lr.isPlainObject=os,Lr.isRegExp=is,Lr.isSafeInteger=function(e){return Xa(e)&&e>=-9007199254740991&&e<=d},Lr.isSet=as,Lr.isString=ss,Lr.isSymbol=ls,Lr.isTypedArray=cs,Lr.isUndefined=function(t){return t===e},Lr.isWeakMap=function(e){return ts(e)&&gi(e)==O},Lr.isWeakSet=function(e){return ts(e)&&"[object WeakSet]"==Dn(e)},Lr.join=function(e,t){return null==e?"":gr.call(e,t)},Lr.kebabCase=Ys,Lr.last=Gi,Lr.lastIndexOf=function(t,r,n){var o=null==t?0:t.length;if(!o)return-1;var i=o;return n!==e&&(i=(i=ps(n))<0?br(o+i,0):vr(i,o-1)),r==r?function(e,t,r){for(var n=r+1;n--;)if(e[n]===t)return n;return n}(t,r,i):Lt(t,Wt,i,!0)},Lr.lowerCase=Vs,Lr.lowerFirst=Us,Lr.lt=ds,Lr.lte=us,Lr.max=function(t){return t&&t.length?gn(t,nl,kn):e},Lr.maxBy=function(t,r){return t&&t.length?gn(t,ci(r,2),kn):e},Lr.mean=function(e){return Ht(e,nl)},Lr.meanBy=function(e,t){return Ht(e,ci(t,2))},Lr.min=function(t){return t&&t.length?gn(t,nl,Rn):e},Lr.minBy=function(t,r){return t&&t.length?gn(t,ci(r,2),Rn):e},Lr.stubArray=gl,Lr.stubFalse=ml,Lr.stubObject=function(){return{}},Lr.stubString=function(){return""},Lr.stubTrue=function(){return!0},Lr.multiply=$l,Lr.nth=function(t,r){return t&&t.length?Hn(t,ps(r)):e},Lr.noConflict=function(){return ht._===this&&(ht._=Pe),this},Lr.noop=ll,Lr.now=ka,Lr.pad=function(e,t,r){e=vs(e);var n=(t=ps(t))?dr(e):0;if(!t||n>=t)return e;var o=(t-n)/2;return Vo(mt(o),r)+e+Vo(pt(o),r)},Lr.padEnd=function(e,t,r){e=vs(e);var n=(t=ps(t))?dr(e):0;return t&&n<t?e+Vo(t-n,r):e},Lr.padStart=function(e,t,r){e=vs(e);var n=(t=ps(t))?dr(e):0;return t&&n<t?Vo(t-n,r)+e:e},Lr.parseInt=function(e,t,r){return r||null==t?t=0:t&&(t=+t),xr(vs(e).replace(re,""),t||0)},Lr.random=function(t,r,n){if(n&&"boolean"!=typeof n&&xi(t,r,n)&&(r=n=e),n===e&&("boolean"==typeof r?(n=r,r=e):"boolean"==typeof t&&(n=t,t=e)),t===e&&r===e?(t=0,r=1):(t=fs(t),r===e?(r=t,t=0):r=fs(r)),t>r){var o=t;t=r,r=o}if(n||t%1||r%1){var i=wr();return vr(t+i*(r-t+lt("1e-"+((i+"").length-1))),r)}return qn(t,r)},Lr.reduce=function(e,t,r){var n=Ya(e)?At:Ut,o=arguments.length<3;return n(e,ci(t,4),r,o,hn)},Lr.reduceRight=function(e,t,r){var n=Ya(e)?Bt:Ut,o=arguments.length<3;return n(e,ci(t,4),r,o,fn)},Lr.repeat=function(t,r,n){return r=(n?xi(t,r,n):r===e)?1:ps(r),Zn(vs(t),r)},Lr.replace=function(){var e=arguments,t=vs(e[0]);return e.length<3?t:t.replace(e[1],e[2])},Lr.result=function(t,r,n){var o=-1,i=(r=xo(r,t)).length;for(i||(i=1,t=e);++o<i;){var a=null==t?e:t[zi(r[o])];a===e&&(o=i,a=n),t=Qa(a)?a.call(t):a}return t},Lr.round=Cl,Lr.runInContext=ne,Lr.sample=function(e){return(Ya(e)?Gr:Qn)(e)},Lr.size=function(e){if(null==e)return 0;if(Ua(e))return ss(e)?dr(e):e.length;var t=gi(e);return t==w||t==k?e.size:jn(e).length},Lr.snakeCase=Ks,Lr.some=function(t,r,n){var o=Ya(t)?jt:oo;return n&&xi(t,r,n)&&(r=e),o(t,ci(r,3))},Lr.sortedIndex=function(e,t){return io(e,t)},Lr.sortedIndexBy=function(e,t,r){return ao(e,t,ci(r,2))},Lr.sortedIndexOf=function(e,t){var r=null==e?0:e.length;if(r){var n=io(e,t);if(n<r&&Pa(e[n],t))return n}return-1},Lr.sortedLastIndex=function(e,t){return io(e,t,!0)},Lr.sortedLastIndexBy=function(e,t,r){return ao(e,t,ci(r,2),!0)},Lr.sortedLastIndexOf=function(e,t){if(null!=e&&e.length){var r=io(e,t,!0)-1;if(Pa(e[r],t))return r}return-1},Lr.startCase=qs,Lr.startsWith=function(e,t,r){return e=vs(e),r=null==r?0:sn(ps(r),0,e.length),t=co(t),e.slice(r,r+t.length)==t},Lr.subtract=Sl,Lr.sum=function(e){return e&&e.length?Kt(e,nl):0},Lr.sumBy=function(e,t){return e&&e.length?Kt(e,ci(t,2)):0},Lr.template=function(t,r,n){var o=Lr.templateSettings;n&&xi(t,r,n)&&(r=e),t=vs(t),r=ws({},r,o,Jo);var i,a,s=ws({},r.imports,o.imports,Jo),l=Ts(s),c=Qt(s,l),d=0,u=r.interpolate||ve,h="__p += '",f=Ee((r.escape||ve).source+"|"+u.source+"|"+(u===G?de:ve).source+"|"+(r.evaluate||ve).source+"|$","g"),p="//# sourceURL="+(Be.call(r,"sourceURL")?(r.sourceURL+"").replace(/\s/g," "):"lodash.templateSources["+ ++ot+"]")+"\n";t.replace(f,(function(e,r,n,o,s,l){return n||(n=o),h+=t.slice(d,l).replace(ye,nr),r&&(i=!0,h+="' +\n__e("+r+") +\n'"),s&&(a=!0,h+="';\n"+s+";\n__p += '"),n&&(h+="' +\n((__t = ("+n+")) == null ? '' : __t) +\n'"),d=l+e.length,e})),h+="';\n";var g=Be.call(r,"variable")&&r.variable;if(g){if(le.test(g))throw new Ce("Invalid `variable` option passed into `_.template`")}else h="with (obj) {\n"+h+"\n}\n";h=(a?h.replace(N,""):h).replace(W,"$1").replace(H,"$1;"),h="function("+(g||"obj")+") {\n"+(g?"":"obj || (obj = {});\n")+"var __t, __p = ''"+(i?", __e = _.escape":"")+(a?", __j = Array.prototype.join;\nfunction print() { __p += __j.call(arguments, '') }\n":";\n")+h+"return __p\n}";var m=Xs((function(){return Se(l,p+"return "+h).apply(e,c)}));if(m.source=h,Ga(m))throw m;return m},Lr.times=function(e,t){if((e=ps(e))<1||e>d)return[];var r=h,n=vr(e,h);t=ci(t),e-=h;for(var o=qt(n,t);++r<e;)t(r);return o},Lr.toFinite=fs,Lr.toInteger=ps,Lr.toLength=gs,Lr.toLower=function(e){return vs(e).toLowerCase()},Lr.toNumber=ms,Lr.toSafeInteger=function(e){return e?sn(ps(e),-9007199254740991,d):0===e?e:0},Lr.toString=vs,Lr.toUpper=function(e){return vs(e).toUpperCase()},Lr.trim=function(t,r,n){if((t=vs(t))&&(n||r===e))return Zt(t);if(!t||!(r=co(r)))return t;var o=ur(t),i=ur(r);return $o(o,Jt(o,i),er(o,i)+1).join("")},Lr.trimEnd=function(t,r,n){if((t=vs(t))&&(n||r===e))return t.slice(0,hr(t)+1);if(!t||!(r=co(r)))return t;var o=ur(t);return $o(o,0,er(o,ur(r))+1).join("")},Lr.trimStart=function(t,r,n){if((t=vs(t))&&(n||r===e))return t.replace(re,"");if(!t||!(r=co(r)))return t;var o=ur(t);return $o(o,Jt(o,ur(r))).join("")},Lr.truncate=function(t,r){var n=30,o="...";if(es(r)){var i="separator"in r?r.separator:i;n="length"in r?ps(r.length):n,o="omission"in r?co(r.omission):o}var a=(t=vs(t)).length;if(or(t)){var s=ur(t);a=s.length}if(n>=a)return t;var l=n-dr(o);if(l<1)return o;var c=s?$o(s,0,l).join(""):t.slice(0,l);if(i===e)return c+o;if(s&&(l+=c.length-l),is(i)){if(t.slice(l).search(i)){var d,u=c;for(i.global||(i=Ee(i.source,vs(ue.exec(i))+"g")),i.lastIndex=0;d=i.exec(u);)var h=d.index;c=c.slice(0,h===e?l:h)}}else if(t.indexOf(co(i),l)!=l){var f=c.lastIndexOf(i);f>-1&&(c=c.slice(0,f))}return c+o},Lr.unescape=function(e){return(e=vs(e))&&U.test(e)?e.replace(Y,fr):e},Lr.uniqueId=function(e){var t=++je;return vs(e)+t},Lr.upperCase=Zs,Lr.upperFirst=Gs,Lr.each=va,Lr.eachRight=ya,Lr.first=Ui,sl(Lr,(bl={},xn(Lr,(function(e,t){Be.call(Lr.prototype,t)||(bl[t]=e)})),bl),{chain:!1}),Lr.VERSION="4.17.23",kt(["bind","bindKey","curry","curryRight","partial","partialRight"],(function(e){Lr[e].placeholder=Lr})),kt(["drop","take"],(function(t,r){Hr.prototype[t]=function(n){n=n===e?1:br(ps(n),0);var o=this.__filtered__&&!r?new Hr(this):this.clone();return o.__filtered__?o.__takeCount__=vr(n,o.__takeCount__):o.__views__.push({size:vr(n,h),type:t+(o.__dir__<0?"Right":"")}),o},Hr.prototype[t+"Right"]=function(e){return this.reverse()[t](e).reverse()}})),kt(["filter","map","takeWhile"],(function(e,t){var r=t+1,n=1==r||3==r;Hr.prototype[e]=function(e){var t=this.clone();return t.__iteratees__.push({iteratee:ci(e,3),type:r}),t.__filtered__=t.__filtered__||n,t}})),kt(["head","last"],(function(e,t){var r="take"+(t?"Right":"");Hr.prototype[e]=function(){return this[r](1).value()[0]}})),kt(["initial","tail"],(function(e,t){var r="drop"+(t?"":"Right");Hr.prototype[e]=function(){return this.__filtered__?new Hr(this):this[r](1)}})),Hr.prototype.compact=function(){return this.filter(nl)},Hr.prototype.find=function(e){return this.filter(e).head()},Hr.prototype.findLast=function(e){return this.reverse().find(e)},Hr.prototype.invokeMap=Gn((function(e,t){return"function"==typeof e?new Hr(this):this.map((function(r){return _n(r,e,t)}))})),Hr.prototype.reject=function(e){return this.filter(Ba(ci(e)))},Hr.prototype.slice=function(t,r){t=ps(t);var n=this;return n.__filtered__&&(t>0||r<0)?new Hr(n):(t<0?n=n.takeRight(-t):t&&(n=n.drop(t)),r!==e&&(n=(r=ps(r))<0?n.dropRight(-r):n.take(r-t)),n)},Hr.prototype.takeRightWhile=function(e){return this.reverse().takeWhile(e).reverse()},Hr.prototype.toArray=function(){return this.take(h)},xn(Hr.prototype,(function(t,r){var n=/^(?:filter|find|map|reject)|While$/.test(r),o=/^(?:head|last)$/.test(r),i=Lr[o?"take"+("last"==r?"Right":""):r],a=o||/^find/.test(r);i&&(Lr.prototype[r]=function(){var r=this.__wrapped__,s=o?[1]:arguments,l=r instanceof Hr,c=s[0],d=l||Ya(r),u=function(e){var t=i.apply(Lr,Mt([e],s));return o&&h?t[0]:t};d&&n&&"function"==typeof c&&1!=c.length&&(l=d=!1);var h=this.__chain__,f=!!this.__actions__.length,p=a&&!h,g=l&&!f;if(!a&&d){r=g?r:new Hr(this);var m=t.apply(r,s);return m.__actions__.push({func:fa,args:[u],thisArg:e}),new Wr(m,h)}return p&&g?t.apply(this,s):(m=this.thru(u),p?o?m.value()[0]:m.value():m)})})),kt(["pop","push","shift","sort","splice","unshift"],(function(e){var t=_e[e],r=/^(?:push|sort|unshift)$/.test(e)?"tap":"thru",n=/^(?:pop|shift)$/.test(e);Lr.prototype[e]=function(){var e=arguments;if(n&&!this.__chain__){var o=this.value();return t.apply(Ya(o)?o:[],e)}return this[r]((function(r){return t.apply(Ya(r)?r:[],e)}))}})),xn(Hr.prototype,(function(e,t){var r=Lr[t];if(r){var n=r.name+"";Be.call(_r,n)||(_r[n]=[]),_r[n].push({name:t,func:r})}})),_r[No(e,2).name]=[{name:"wrapper",func:e}],Hr.prototype.clone=function(){var e=new Hr(this.__wrapped__);return e.__actions__=_o(this.__actions__),e.__dir__=this.__dir__,e.__filtered__=this.__filtered__,e.__iteratees__=_o(this.__iteratees__),e.__takeCount__=this.__takeCount__,e.__views__=_o(this.__views__),e},Hr.prototype.reverse=function(){if(this.__filtered__){var e=new Hr(this);e.__dir__=-1,e.__filtered__=!0}else(e=this.clone()).__dir__*=-1;return e},Hr.prototype.value=function(){var e=this.__wrapped__.value(),t=this.__dir__,r=Ya(e),n=t<0,o=r?e.length:0,i=function(e,t,r){for(var n=-1,o=r.length;++n<o;){var i=r[n],a=i.size;switch(i.type){case"drop":e+=a;break;case"dropRight":t-=a;break;case"take":t=vr(t,e+a);break;case"takeRight":e=br(e,t-a)}}return{start:e,end:t}}(0,o,this.__views__),a=i.start,s=i.end,l=s-a,c=n?s:a-1,d=this.__iteratees__,u=d.length,h=0,f=vr(l,this.__takeCount__);if(!r||!n&&o==l&&f==l)return go(e,this.__actions__);var p=[];e:for(;l--&&h<f;){for(var g=-1,m=e[c+=t];++g<u;){var b=d[g],v=b.iteratee,y=b.type,x=v(m);if(2==y)m=x;else if(!x){if(1==y)continue e;break e}}p[h++]=m}return p},Lr.prototype.at=pa,Lr.prototype.chain=function(){return ha(this)},Lr.prototype.commit=function(){return new Wr(this.value(),this.__chain__)},Lr.prototype.next=function(){this.__values__===e&&(this.__values__=hs(this.value()));var t=this.__index__>=this.__values__.length;return{done:t,value:t?e:this.__values__[this.__index__++]}},Lr.prototype.plant=function(t){for(var r,n=this;n instanceof Nr;){var o=Li(n);o.__index__=0,o.__values__=e,r?i.__wrapped__=o:r=o;var i=o;n=n.__wrapped__}return i.__wrapped__=t,r},Lr.prototype.reverse=function(){var t=this.__wrapped__;if(t instanceof Hr){var r=t;return this.__actions__.length&&(r=new Hr(this)),(r=r.reverse()).__actions__.push({func:fa,args:[ea],thisArg:e}),new Wr(r,this.__chain__)}return this.thru(ea)},Lr.prototype.toJSON=Lr.prototype.valueOf=Lr.prototype.value=function(){return go(this.__wrapped__,this.__actions__)},Lr.prototype.first=Lr.prototype.head,Je&&(Lr.prototype[Je]=function(){return this}),Lr}();pt?((pt.exports=pr)._=pr,ft._=pr):ht._=pr}.call(je);var lD=sD.exports;const cD=o.forwardRef(((n,o)=>{var{value:i,readOnly:a,"data-testid":s,maskRange:l,unmaskRange:d,maskRegex:u,maskTransformer:h,iconMask:f=e(Se,{}),iconUnmask:p=e(Ce,{}),iconActiveColor:m,iconInactiveColor:b,maskChar:v="•",error:y,disableMask:x,transformInput:w,loadState:$,onMask:C,onUnmask:S,onChange:D,onFocus:k,onBlur:E,onTryAgain:F}=n,O=ct(n,["value","readOnly","data-testid","maskRange","unmaskRange","maskRegex","maskTransformer","iconMask","iconUnmask","iconActiveColor","iconInactiveColor","maskChar","error","disableMask","transformInput","loadState","onMask","onUnmask","onChange","onFocus","onBlur","onTryAgain"]);const _=a&&lD.isEmpty(i),[T,I]=g(!x),[M,A]=g(i||"");c((()=>{A(i||"")}),[i]);const B=e=>{P(!1),null==k||k(e)},j=e=>{P(!0),null==E||E(e)},z=e=>{let t=e.target.value;switch(w){case"uppercase":t=t.toUpperCase();break;case"lowercase":t=t.toLowerCase()}A(t),e.target.value=t,null==D||D(e)},R=()=>{a&&(null==F||F())},L=()=>{P(!T)},P=e=>{I(e),e?null==C||C():null==S||S()},N=()=>!(null==M?void 0:M.toString().length)||x,W=()=>{if(_)return e(r,{});const t=N();return e(GS,{"data-testid":"icon-"+(T?"masked":"unmasked"),onClick:t?void 0:L,$isDisabled:t,$inactiveColor:b,$activeColor:m,children:T?p:f})};return e("div",{"aria-busy":"loading"===$,"aria-live":"polite",children:(()=>{if(a)switch($){case"fail":return t(oD,{onClick:R,"data-testid":"try-again-button",children:[t(tD,{children:[e(rD,{}),e(nD,{children:"Error"})]}),e(eD,{children:"Try again?"})]});case"loading":return t(QS,{children:[e(JS,{}),e(XS,{children:"Retrieving..."})]})}return e(ZS,Object.assign({ref:o,"data-testid":`${s||"masked-input"}${T?"-masked":"-unmasked"}`,addon:{type:"custom",attributes:{children:W()},position:"right"},onFocus:a?void 0:B,onBlur:a?void 0:j,onClick:a?L:void 0,onChange:z,value:_?"-":T&&!x?_d.maskValue(M,{maskChar:v,maskRange:l,unmaskRange:d,maskRegex:u,maskTransformer:h}):M,readOnly:a,error:y,$isDisabled:N()},O))})()})})),dD=o.forwardRef(((t,r)=>{const{label:n,errorMessage:o,id:i="form-field-masked-input","data-error-testid":a,"data-testid":s,layoutType:l,mobileCols:c,tabletCols:d,desktopCols:u}=t,h=ct(t,["label","errorMessage","id","data-error-testid","data-testid","layoutType","mobileCols","tabletCols","desktopCols"]);return e(Gu,{id:i,label:n,errorMessage:o,disabled:h.disabled,"data-error-testid":a,layoutType:l,mobileCols:c,tabletCols:d,desktopCols:u,children:e(cD,Object.assign({ref:r,id:`${i}-base`,"data-testid":s||i,error:!!o},h))})})),uD=({selectedOptions:t,placeholder:r="Select",options:n,disabled:o,error:i,className:a,"data-testid":l,id:d,"aria-labelledby":u,"aria-describedby":h,"aria-invalid":f,enableSearch:p=!1,searchFunction:m,searchPlaceholder:b,valueExtractor:v,listExtractor:y,onSelectOptions:x,onShowOptions:w,onHideOptions:$,onRetry:C,optionsLoadState:S="success",optionTruncationType:D="end",renderListItem:k,hideNoResultsDisplay:E,noResultsDescription:F,customLabels:O,renderCustomCallToAction:_,onBlur:T,variant:I="default",readOnly:M,alignment:A,dropdownZIndex:B,maxSelectable:j,dropdownRootNode:z,dropdownWidth:R})=>{const{allSelectedLabel:L,multiSelectedLabel:P}=O||{},[N,W]=g(t||[]),[H,Y]=g(!1),[V,U]=g(!1),[K]=g((()=>Od.generate())),q=s(null),Z=s(null);c((()=>{W(t||[])}),[t]);const G=()=>{N&&N.length>0||j?(W([]),re([])):(W(n),re(n))},Q=(e,t)=>{const r=[...N],n=dy(N,(e=>(v?v(e):e)===t));n>-1?r.splice(n,1):r.push(e),W(r),re(r)},X=()=>{H&&(Y(!1),te(!1))},J=()=>{V||H||U(!0)},ee=e=>{V&&!H&&q.current&&!q.current.contains(e.relatedTarget)&&(U(!1),null==T||T())},te=e=>{!e&&$&&$(),e&&w&&w()},re=e=>{x&&x(e)};return e(Z$,{children:e(lh,{enabled:!M&&!o,isOpen:H,renderElement:()=>e(Wf,{className:a,"data-testid":l,id:d,ref:q,tabIndex:-1,onFocus:J,onBlur:ee,$focused:V,$disabled:o,$readOnly:M,$error:i,children:e($C,{ref:Z,disabled:o,expanded:H,listboxId:K,popupRole:"listbox",readOnly:M,variant:I,"aria-labelledby":u,"aria-describedby":h,"aria-invalid":f,children:e(rh,{$disabled:o,children:N&&0!==N.length?e(nh,{$variant:I,children:n&&N.length===n.length?L||"All selected":P||`${N.length} selected`}):e(oh,{$truncateType:D,$variant:I,children:r})})})}),renderDropdown:()=>e(yC,{listboxId:K,listItems:n,onSelectItem:Q,onDismiss:X,valueExtractor:v,listExtractor:y,enableSearch:p,searchFunction:m,searchPlaceholder:b,multiSelect:!0,maxSelectable:j,selectedItems:N,onSelectAll:G,onRetry:C,itemsLoadState:S,itemTruncationType:D,renderListItem:k,hideNoResultsDisplay:E,noResultsDescription:F,customLabels:O,renderCustomCallToAction:_,variant:I,width:R,matchElementWidth:!0}),onOpen:()=>{Y(!0),te(!0),U(!0)},onClose:e=>{Y(!1),te(!1),"click"!==e&&(U(!1),null==T||T())},onDismiss:()=>{var e;null===(e=Z.current)||void 0===e||e.focus(),Y(!1),te(!1)},clickToToggle:!0,offset:8,alignment:A,fitAvailableHeight:!0,customZIndex:B,rootNode:z})})},hD=(e,t)=>{const[r,...n]=t;if(CS(e)||!r)return;const o=e.find((e=>e.key===r));return o?n.length?hD(o.subItems,n):o:void 0},fD=(e,t)=>{const r=[];for(const n of e)n.subItems?r.push(...fD(n.subItems,[...t,n.key])):r.push({value:n.value,label:n.label,keyPath:[...t,n.key]});return r},pD=({placeholder:t="Select",options:r,disabled:n,error:o,className:i,"data-testid":a,id:l,"aria-labelledby":d,"aria-describedby":u,"aria-invalid":h,selectedKeyPaths:f,mode:p,valueToStringFunction:m,enableSearch:b,searchPlaceholder:v,hideNoResultsDisplay:y,noResultsDescription:x,customLabels:w,readOnly:$,onSearch:C,onSelectOptions:S,onShowOptions:D,onHideOptions:k,onRetry:E,onBlur:F,optionsLoadState:O="success",optionTruncationType:_="end",variant:T="default",alignment:I,dropdownZIndex:M,dropdownWidth:A,dropdownRootNode:B})=>{const{multiSelectedLabel:j}=w||{},z=r,[R,L]=g(f?ES(f):new Set),[P,N]=g([]),[W,H]=g(!1),[Y,V]=g(!1),[U]=g((()=>Od.generate())),K=s(null),q=s(null),Z=s(null);c((()=>{const e=f||[],t=((e,t)=>{const r=[];for(let n=0;n<t.length;n++){const o=t[n],i=hD(e,o);i&&r.push({value:i.value,label:i.label,keyPath:o})}return r})(z,e);L(ES(e)),N(t)}),[f,z]);const G=(e,t)=>{const r=t.map((e=>({keyPath:e.keyPath,label:e.item.label,value:e.item.value})));L(ES(e)),N(r),ne(e,r)},Q=e=>{const t=oe(e),r=t.map((e=>e.keyPath));N(t),L(ES(r)),ne(r,t)},X=()=>{Y||W||V(!0)},J=e=>{Y&&!W&&K.current&&!K.current.contains(e.relatedTarget)&&(V(!1),null==F||F())},ee=()=>{if(P.length>1)return j||`${P.length} selected`;const{label:e,value:t}=P[0];return m?m(t):e},te=e=>{if("middle"===_){let t=0;return Z&&Z.current&&(t=Z.current.getBoundingClientRect().width),_d.truncateOneLine(e,t,120,6)}return e},re=e=>{!e&&k&&k(),e&&D&&D()},ne=(e,t)=>{if(S){const r=t.map((e=>e.value));S(e,r)}},oe=e=>{if(!0===e.checked)return P.filter((t=>{const r=t.keyPath.slice(0,e.keyPath.length);return!fy(e.keyPath,r)}));{const t=[...P],r=e.hasSubItems?((e,t)=>{const r=hD(e,t);return r&&r.subItems?fD(r.subItems,t):[]})(z,e.keyPath):[{value:e.item.value,label:e.item.label,keyPath:e.keyPath}];return r.forEach((e=>{P.find((t=>fy(t.keyPath,e.keyPath)))||t.push(e)})),t}};return e(lh,{enabled:!$&&!n,isOpen:W,renderElement:()=>e(Wf,{className:i,"data-testid":a,id:l,ref:K,tabIndex:-1,onFocus:X,onBlur:J,$focused:Y,$disabled:n,$readOnly:$,$error:o,children:e($C,{ref:q,disabled:n,expanded:W,listboxId:U,popupRole:"tree",readOnly:$,variant:T,"aria-labelledby":d,"aria-describedby":u,"aria-invalid":h,children:e(rh,{ref:Z,$disabled:n,children:CS(P)?e(oh,{$truncateType:_,children:t}):e(nh,{$truncateType:_,children:te(ee())})})})}),renderDropdown:()=>e(BS,{listboxId:U,listItems:z,multiSelect:!0,selectedKeyPaths:R,itemsLoadState:O,itemTruncationType:_,enableSearch:b,searchPlaceholder:v,hideNoResultsDisplay:y,noResultsDescription:x,customLabels:w,onSelectItem:Q,onSelectAll:G,onRetry:E,onSearch:C,variant:T,mode:p,width:A,matchElementWidth:!0}),onOpen:()=>{H(!0),re(!0),V(!0)},onClose:e=>{H(!1),re(!1),"click"!==e&&(V(!1),null==F||F())},onDismiss:()=>{var e;null===(e=q.current)||void 0===e||e.focus(),H(!1),re(!1)},clickToToggle:!0,offset:8,alignment:I,fitAvailableHeight:!0,customZIndex:M,rootNode:B})},gD=({placeholder:t="Select",options:r,disabled:n,error:o,className:i,"data-testid":a,id:l,"aria-labelledby":d,"aria-describedby":u,"aria-invalid":h,selectedKeyPath:f,mode:p,valueToStringFunction:m,enableSearch:b,searchPlaceholder:v,selectableCategory:y,hideNoResultsDisplay:x,noResultsDescription:w,customLabels:$,readOnly:C,onBlur:S,onSearch:D,onSelectOption:k,onShowOptions:E,onHideOptions:F,onRetry:O,optionsLoadState:_="success",optionTruncationType:T="end",variant:I="default",alignment:M,dropdownZIndex:A,dropdownWidth:B,dropdownRootNode:j})=>{const z=r,[R,L]=g(f?ES([f]):new Set),[P,N]=g(),[W,H]=g(!1),[Y,V]=g(!1),[U]=g((()=>Od.generate())),K=s(null),q=s(null),Z=s(null);c((()=>{L(f?ES([f]):new Set);const e=DS(z,f||[]);N(null!=e?e:void 0)}),[f,z]);const G=e=>{var t;const{keyPath:r,item:{label:n,value:o}}=e;L(ES([r])),N({label:n,value:o}),H(!1),te(!1),null===(t=q.current)||void 0===t||t.focus(),null==k||k(r,o)},Q=()=>{Y||W||V(!0)},X=e=>{Y&&!W&&K.current&&!K.current.contains(e.relatedTarget)&&(V(!1),null==S||S())},J=()=>{if(!P)return"";const{label:e,value:t}=P;return m?m(t):e},ee=e=>{if("middle"===T){let t=0;return Z&&Z.current&&(t=Z.current.getBoundingClientRect().width),_d.truncateOneLine(e,t,120,6)}return e},te=e=>{!e&&F&&F(),e&&E&&E()};return e(lh,{enabled:!C&&!n,isOpen:W,renderElement:()=>e(Wf,{className:i,"data-testid":a,id:l,ref:K,tabIndex:-1,onFocus:Q,onBlur:X,$focused:Y,$disabled:n,$readOnly:C,$error:o,children:e($C,{ref:q,disabled:n,expanded:W,listboxId:U,popupRole:"tree",readOnly:C,variant:I,"aria-labelledby":d,"aria-describedby":u,"aria-invalid":h,children:e(rh,{ref:Z,$disabled:n,children:CS(P)?e(oh,{$truncateType:T,children:t}):e(nh,{$truncateType:T,children:ee(J())})})})}),renderDropdown:()=>e(BS,{listboxId:U,listItems:z,selectedKeyPaths:R,selectableCategory:y,itemsLoadState:_,itemTruncationType:T,enableSearch:b,searchPlaceholder:v,hideNoResultsDisplay:x,noResultsDescription:w,customLabels:$,onSelectItem:G,onRetry:O,onSearch:D,variant:I,mode:p,width:B,matchElementWidth:!0}),onOpen:()=>{H(!0),te(!0),V(!0)},onClose:e=>{H(!1),te(!1),"click"!==e&&(V(!1),null==S||S())},onDismiss:()=>{var e;null===(e=q.current)||void 0===e||e.focus(),H(!1),te(!1)},clickToToggle:!0,offset:8,alignment:M,fitAvailableHeight:!0,customZIndex:A,rootNode:j})};var mD=function(e,t,r,n){var o=-1,i=null==e?0:e.length;for(n&&i&&(r=e[++o]);++o<i;)r=t(r,e[o],o,e);return r};var bD=function(e){return function(t,r,n){for(var o=-1,i=Object(t),a=n(t),s=a.length;s--;){var l=a[e?s:++o];if(!1===r(i[l],l,i))break}return t}},vD=bD(),yD=fb;var xD=cb;var wD=function(e,t){return function(r,n){if(null==r)return r;if(!xD(r))return e(r,n);for(var o=r.length,i=t?o:-1,a=Object(r);(t?i--:++i<o)&&!1!==n(a[i],i,a););return r}}((function(e,t){return e&&vD(e,t,yD)}));var $D=mD,CD=wD,SD=Pv,DD=function(e,t,r,n,o){return o(e,(function(e,o,i){r=n?(n=!1,e):t(r,e,o,i)})),r},kD=fr;var ED=ze((function(e,t,r){var n=kD(e)?$D:DD,o=arguments.length<3;return n(e,SD(t),r,o,CD)}));const FD=[["Afghanistan",["asia"],"af","93"],["Albania",["europe"],"al","355"],["Algeria",["africa","north-africa"],"dz","213"],["Andorra",["europe"],"ad","376"],["Angola",["africa"],"ao","244"],["Antigua and Barbuda",["america","carribean"],"ag","1268"],["Argentina",["america","south-america"],"ar","54","(..) ........"],["Armenia",["asia","ex-ussr"],"am","374",".. ......"],["Aruba",["america","carribean"],"aw","297"],["Australia",["oceania"],"au","61","(..) .... ...."],["Austria",["europe","eu-union"],"at","43"],["Azerbaijan",["asia","ex-ussr"],"az","994","(..) ... .. .."],["Bahamas",["america","carribean"],"bs","1242"],["Bahrain",["middle-east"],"bh","973"],["Bangladesh",["asia"],"bd","880"],["Barbados",["america","carribean"],"bb","1246"],["Belarus",["europe","ex-ussr"],"by","375","(..) ... .. .."],["Belgium",["europe","eu-union"],"be","32","... .. .. .."],["Belize",["america","central-america"],"bz","501"],["Benin",["africa"],"bj","229"],["Bhutan",["asia"],"bt","975"],["Bolivia",["america","south-america"],"bo","591"],["Bosnia and Herzegovina",["europe","ex-yugos"],"ba","387"],["Botswana",["africa"],"bw","267"],["Brazil",["america","south-america"],"br","55","(..) ........."],["British Indian Ocean Territory",["asia"],"io","246"],["Brunei",["asia"],"bn","673"],["Bulgaria",["europe","eu-union"],"bg","359"],["Burkina Faso",["africa"],"bf","226"],["Burundi",["africa"],"bi","257"],["Cambodia",["asia"],"kh","855"],["Cameroon",["africa"],"cm","237"],["Canada",["america","north-america"],"ca","1","(...) ... ...."],["Cape Verde",["africa"],"cv","238"],["Caribbean Netherlands",["america","carribean"],"bq","599",""],["Central African Republic",["africa"],"cf","236"],["Chad",["africa"],"td","235"],["Chile",["america","south-america"],"cl","56"],["China",["asia"],"cn","86",".. ........."],["Colombia",["america","south-america"],"co","57","... ... ...."],["Comoros",["africa"],"km","269"],["Congo",["africa"],"cd","243"],["Congo",["africa"],"cg","242"],["Costa Rica",["america","central-america"],"cr","506",".... ...."],["Côte d’Ivoire",["africa"],"ci","225",".. .. .. .."],["Croatia",["europe","eu-union","ex-yugos"],"hr","385"],["Cuba",["america","carribean"],"cu","53"],["Curaçao",["america","carribean"],"cw","599",""],["Cyprus",["europe","eu-union"],"cy","357",".. ......"],["Czech Republic",["europe","eu-union"],"cz","420","... ... ..."],["Denmark",["europe","eu-union","baltic"],"dk","45",".. .. .. .."],["Djibouti",["africa"],"dj","253"],["Dominica",["america","carribean"],"dm","1767"],["Dominican Republic",["america","carribean"],"do","1",""],["Ecuador",["america","south-america"],"ec","593"],["Egypt",["africa","north-africa"],"eg","20"],["El Salvador",["america","central-america"],"sv","503",".... ...."],["Equatorial Guinea",["africa"],"gq","240"],["Eritrea",["africa"],"er","291"],["Estonia",["europe","eu-union","ex-ussr","baltic"],"ee","372",".... ......"],["Ethiopia",["africa"],"et","251"],["Fiji",["oceania"],"fj","679"],["Finland",["europe","eu-union","baltic"],"fi","358",".. ... .. .."],["France",["europe","eu-union"],"fr","33",". .. .. .. .."],["French Guiana",["america","south-america"],"gf","594"],["French Polynesia",["oceania"],"pf","689"],["Gabon",["africa"],"ga","241"],["Gambia",["africa"],"gm","220"],["Georgia",["asia","ex-ussr"],"ge","995"],["Germany",["europe","eu-union","baltic"],"de","49",".... ........"],["Ghana",["africa"],"gh","233"],["Greece",["europe","eu-union"],"gr","30"],["Grenada",["america","carribean"],"gd","1473"],["Guadeloupe",["america","carribean"],"gp","590","",0],["Guam",["oceania"],"gu","1671"],["Guatemala",["america","central-america"],"gt","502",".... ...."],["Guinea",["africa"],"gn","224"],["Guinea-Bissau",["africa"],"gw","245"],["Guyana",["america","south-america"],"gy","592"],["Haiti",["america","carribean"],"ht","509",".... ...."],["Honduras",["america","central-america"],"hn","504"],["Hong Kong",["asia"],"hk","852",".... ...."],["Hungary",["europe","eu-union"],"hu","36"],["Iceland",["europe"],"is","354","... ...."],["India",["asia"],"in","91","..... ....."],["Indonesia",["asia"],"id","62"],["Iran",["middle-east"],"ir","98","... ... ...."],["Iraq",["middle-east"],"iq","964"],["Ireland",["europe","eu-union"],"ie","353",".. ......."],["Israel",["middle-east"],"il","972","... ... ...."],["Italy",["europe","eu-union"],"it","39","... ......."],["Jamaica",["america","carribean"],"jm","1876"],["Japan",["asia"],"jp","81",".. .... ...."],["Jordan",["middle-east"],"jo","962"],["Kazakhstan",["asia","ex-ussr"],"kz","7","... ... .. .."],["Kenya",["africa"],"ke","254"],["Kiribati",["oceania"],"ki","686"],["Kosovo",["europe","ex-yugos"],"xk","383"],["Kuwait",["middle-east"],"kw","965"],["Kyrgyzstan",["asia","ex-ussr"],"kg","996","... ... ..."],["Laos",["asia"],"la","856"],["Latvia",["europe","eu-union","ex-ussr","baltic"],"lv","371",".. ... ..."],["Lebanon",["middle-east"],"lb","961"],["Lesotho",["africa"],"ls","266"],["Liberia",["africa"],"lr","231"],["Libya",["africa","north-africa"],"ly","218"],["Liechtenstein",["europe"],"li","423"],["Lithuania",["europe","eu-union","ex-ussr","baltic"],"lt","370"],["Luxembourg",["europe","eu-union"],"lu","352"],["Macau",["asia"],"mo","853"],["Macedonia",["europe","ex-yugos"],"mk","389"],["Madagascar",["africa"],"mg","261"],["Malawi",["africa"],"mw","265"],["Malaysia",["asia"],"my","60",".. .... ...."],["Maldives",["asia"],"mv","960"],["Mali",["africa"],"ml","223"],["Malta",["europe","eu-union"],"mt","356"],["Marshall Islands",["oceania"],"mh","692"],["Martinique",["america","carribean"],"mq","596"],["Mauritania",["africa"],"mr","222"],["Mauritius",["africa"],"mu","230"],["Mexico",["america","central-america"],"mx","52","... ... ...."],["Micronesia",["oceania"],"fm","691"],["Moldova",["europe"],"md","373","(..) .. .. .."],["Monaco",["europe"],"mc","377"],["Mongolia",["asia"],"mn","976"],["Montenegro",["europe","ex-yugos"],"me","382"],["Morocco",["africa","north-africa"],"ma","212"],["Mozambique",["africa"],"mz","258"],["Myanmar",["asia"],"mm","95"],["Namibia",["africa"],"na","264"],["Nauru",["africa"],"nr","674"],["Nepal",["asia"],"np","977"],["Netherlands",["europe","eu-union"],"nl","31",".. ........"],["New Caledonia",["oceania"],"nc","687"],["New Zealand",["oceania"],"nz","64","... ... ...."],["Nicaragua",["america","central-america"],"ni","505"],["Niger",["africa"],"ne","227"],["Nigeria",["africa"],"ng","234"],["North Korea",["asia"],"kp","850"],["Norway",["europe","baltic"],"no","47","... .. ..."],["Oman",["middle-east"],"om","968"],["Pakistan",["asia"],"pk","92","... ......."],["Palau",["oceania"],"pw","680"],["Palestine",["middle-east"],"ps","970"],["Panama",["america","central-america"],"pa","507"],["Papua New Guinea",["oceania"],"pg","675"],["Paraguay",["america","south-america"],"py","595"],["Peru",["america","south-america"],"pe","51"],["Philippines",["asia"],"ph","63",".... ......."],["Poland",["europe","eu-union","baltic"],"pl","48","... ... ..."],["Portugal",["europe","eu-union"],"pt","351"],["Puerto Rico",["america","carribean"],"pr","1",""],["Qatar",["middle-east"],"qa","974"],["Réunion",["africa"],"re","262"],["Romania",["europe","eu-union"],"ro","40"],["Russia",["europe","asia","ex-ussr","baltic"],"ru","7","(...) ... .. .."],["Rwanda",["africa"],"rw","250"],["Saint Kitts and Nevis",["america","carribean"],"kn","1869"],["Saint Lucia",["america","carribean"],"lc","1758"],["Saint Vincent and the Grenadines",["america","carribean"],"vc","1784"],["Samoa",["oceania"],"ws","685"],["San Marino",["europe"],"sm","378"],["São Tomé and Príncipe",["africa"],"st","239"],["Saudi Arabia",["middle-east"],"sa","966"],["Senegal",["africa"],"sn","221"],["Serbia",["europe","ex-yugos"],"rs","381"],["Seychelles",["africa"],"sc","248"],["Sierra Leone",["africa"],"sl","232"],["Singapore",["asia"],"sg","65",".... ...."],["Slovakia",["europe","eu-union"],"sk","421"],["Slovenia",["europe","eu-union","ex-yugos"],"si","386"],["Solomon Islands",["oceania"],"sb","677"],["Somalia",["africa"],"so","252"],["South Africa",["africa"],"za","27"],["South Korea",["asia"],"kr","82","... .... ...."],["South Sudan",["africa","north-africa"],"ss","211"],["Spain",["europe","eu-union"],"es","34","... ... ..."],["Sri Lanka",["asia"],"lk","94"],["Sudan",["africa"],"sd","249"],["Suriname",["america","south-america"],"sr","597"],["Swaziland",["africa"],"sz","268"],["Sweden",["europe","eu-union","baltic"],"se","46","(...) ... ..."],["Switzerland",["europe"],"ch","41",".. ... .. .."],["Syria",["middle-east"],"sy","963"],["Taiwan",["asia"],"tw","886"],["Tajikistan",["asia","ex-ussr"],"tj","992"],["Tanzania",["africa"],"tz","255"],["Thailand",["asia"],"th","66"],["Timor-Leste",["asia"],"tl","670"],["Togo",["africa"],"tg","228"],["Tonga",["oceania"],"to","676"],["Trinidad and Tobago",["america","carribean"],"tt","1868"],["Tunisia",["africa","north-africa"],"tn","216"],["Turkey",["europe"],"tr","90","... ... .. .."],["Turkmenistan",["asia","ex-ussr"],"tm","993"],["Tuvalu",["asia"],"tv","688"],["Uganda",["africa"],"ug","256"],["Ukraine",["europe","ex-ussr"],"ua","380","(..) ... .. .."],["United Arab Emirates",["middle-east"],"ae","971"],["United Kingdom",["europe","eu-union"],"gb","44",".... ......"],["United States",["america","north-america"],"us","1","(...) ... ...."],["Uruguay",["america","south-america"],"uy","598"],["Uzbekistan",["asia","ex-ussr"],"uz","998",".. ... .. .."],["Vanuatu",["oceania"],"vu","678"],["Vatican City",["europe"],"va","39",".. .... ...."],["Venezuela",["america","south-america"],"ve","58"],["Vietnam",["asia"],"vn","84"],["Yemen",["middle-east"],"ye","967"],["Zambia",["africa"],"zm","260"],["Zimbabwe",["africa"],"zw","263"]],OD=(e,t,r,n)=>r?e+"".padEnd(t.length,".")+" "+r:e+"".padEnd(t.length,".")+" "+n;var _D;!function(e){e.getCountries=()=>[].concat(...FD.map((e=>({name:e[0],regions:e[1],iso2:e[2],countryCode:e[3],format:OD("+",e[3],e[4],"... ... ... ... ..")})))),e.formatNumber=(e="",t)=>{if(!t)return e;const r=e.replace(/[\s()]+/g,""),{format:n}=t,o=n.split(" ");o.shift();const i=o.join(" ");return ED(i,((e,t)=>{if(0===e.remainingText.length)return e;if("."!==t)return{formattedText:e.formattedText+t,remainingText:e.remainingText};const r=e.remainingText.slice(0,1),n=e.remainingText.slice(1);return{formattedText:e.formattedText+r,remainingText:n}}),{formattedText:"",remainingText:r}).formattedText}}(_D||(_D={}));const TD=t=>{var{onChange:r,value:n,allowClear:o,onClear:i,onBlur:a,error:l,fixedCountry:d=!1,optionPlaceholder:u="Select",optionSearchPlaceholder:h,enableSearch:f,onHideOptions:p,onShowOptions:m,placeholder:b,autoComplete:v,noBorder:y=!1}=t,x=ct(t,["onChange","value","allowClear","onClear","onBlur","error","fixedCountry","optionPlaceholder","optionSearchPlaceholder","enableSearch","onHideOptions","onShowOptions","placeholder","autoComplete","noBorder"]);const[w]=g(_D.getCountries()),[$,C]=g(void 0),[S,D]=g(""),k=s(null),E=Ad({ref:k,formatter:e=>_D.formatNumber(e.replace(/[^0-9]/g,""),$)});c((()=>{const e=w.filter((e=>e.countryCode===ID(null==n?void 0:n.countryCode)))[0];C(e),D(_D.formatNumber(null==n?void 0:n.number,e))}),[n]);const F=e=>{_(S,e),r&&O(S,e)},O=(e,t)=>{const n=_D.formatNumber(e,t);null==r||r({number:n.replace(/[\s()]+/g,""),countryCode:t&&MD(t.countryCode)})},_=(e,t)=>{D(_D.formatNumber(e,t)),C(t)};return e(KS,Object.assign({ref:k,value:S,onChange:()=>{const e=E();if(!e)return;const{nextValue:t,updateCaretPosition:n}=e;n(),_(t,$),r&&O(t,$)},allowClear:o&&!!S,onClear:()=>{i?i():D("")},onBlur:a,error:l,placeholder:b,addon:d?{type:"label",attributes:{value:MD(null==$?void 0:$.countryCode)}}:{type:"list",attributes:{"aria-label":"Country code",placeholder:u,options:w,selectedOption:$,enableSearch:f,searchPlaceholder:h,valueExtractor:e=>`+${e.countryCode}`,listExtractor:e=>({title:e.name,secondaryLabel:MD(e.countryCode)}),onSelectOption:F,onHideOptions:p,onShowOptions:m}},inputMode:"numeric",autoComplete:v,"aria-label":"Enter phone number",noBorder:y},x))},ID=e=>e?e.replace("+",""):"",MD=e=>e?e.includes("+")?e:`+${e}`:"",AD=F.div`
    display: flex;
    flex-direction: column;
`,BD=F.div`
    display: flex;
`,jD=F.div`
    display: flex;
    align-items: center;
    width: ${e=>e.$isMaxWidth?"100%":"auto"};
    border-radius: ${sa.sm} 0 0 ${sa.sm};
    box-shadow: inset 1px 0 0 ${ra.border},
        inset 0 1px 0 ${ra.border}, inset 0 -1px 0 ${ra.border};

    &:focus-within {
        box-shadow: inset 2px 0 0 ${ra["border-focus"]},
            inset 0 2px 0 ${ra["border-focus"]},
            inset 0 -2px 0 ${ra["border-focus"]};
    }

    ${e=>e.$error?O`
                box-shadow: inset 1px 0 0 ${ra["border-error"]},
                    inset 0 1px 0 ${ra["border-error"]},
                    inset 0 -1px 0 ${ra["border-error"]};

                &:focus-within {
                    box-shadow: inset 2px 0 0 ${ra["border-error-focus"]},
                        inset 0 2px 0 ${ra["border-error-focus"]},
                        inset 0 -2px 0 ${ra["border-error-focus"]};
                }
            `:e.$disabled?O`
                box-shadow: inset 0 0 0 1px ${ra.border};
                border-radius: ${sa.sm};
                background: ${ra["bg-disabled"]};
                color: ${ra["text-disabled"]};
                &:focus-within {
                    box-shadow: inset 0 0 0 2px ${ra.border};
                }

                /* Spacer to maintain width when disabled */
                ${!e.$isMaxWidth&&O`
                    &::after {
                        content: "";
                        min-width: 120px;
                        flex-shrink: 0;
                    }

                    /* Hide spacer on mobile to prevent text coverage */
                    ${da.MaxWidth.sm} {
                        &::after {
                            display: none;
                        }
                    }
                `}
            `:e.$readonly?O`
                box-shadow: none;
                border-radius: ${sa.sm};
                &:focus-within {
                    box-shadow: inset 0 0 0 2px ${ra["border-focus"]};
                }
            `:void 0}
`,zD=F.div`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0 ${aa["spacing-12"]};
    color: ${ra["icon-success"]};
    flex-shrink: 0;

    svg {
        width: 1.25rem;
        height: 1.25rem;
    }
`,RD=F(Ph.Default)`
    min-width: 120px;
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
    flex-shrink: 0;
    ${da.MaxWidth.sm} {
        width: fit-content;
    }
`,LD=F(KS)`
    padding: 0 ${aa["spacing-16"]};
    width: 100%;
    background: transparent;

    ${e=>e.disabled&&O`
            input {
                color: ${ra["text-disabled"]};
            }
        `}

    ${e=>e.readOnly&&O`
            padding: 0;
        `}
`,PD=F(TD)`
    padding: 0 ${aa["spacing-16"]};
    background: transparent;

    ${e=>e.disabled&&O`
            input {
                color: ${ra["text-disabled"]};
            }
        `}

    ${e=>e.readOnly&&O`
            padding: 0;
            input {
                margin-left: ${aa["spacing-12"]};
            }
        `}
`,ND=({id:r,"data-testid":n,disabled:o,readOnly:i,inputId:a,type:s,sendOtpPlaceholder:l,emailValue:c,onEmailChange:d,phoneNumberValue:u,onPhoneNumberChange:h,fixedCountry:f,isLoading:p,isVerified:g,countdown:m,onSendOtp:b,onStateReset:v,sendOtpError:y})=>{const x=e=>{v(),"email"===s&&d&&d(e.target.value)},w=e=>{v(),"phone-number"===s&&h&&h(e)};return t(AD,{id:r,"data-testid":n,children:[t(BD,{children:[t(jD,{$isMaxWidth:"email"===s,$error:!!y,$disabled:o,$readonly:i,children:["email"===s?e(LD,{id:a,"data-testid":n?`${n}-contact-input`:void 0,placeholder:l||"Enter email",value:c,onChange:x,type:"email",noBorder:!0,"aria-invalid":!!y,"aria-required":!0,disabled:o,readOnly:i}):e(PD,{id:a,"data-testid":n?`${n}-contact-input`:void 0,placeholder:l||"Enter mobile number",value:u,onChange:w,noBorder:!0,fixedCountry:f,"aria-invalid":!!y,"aria-required":!0,disabled:o,readOnly:i}),g&&e(zD,{"aria-label":"Verified",role:"img",children:e(pe,{})})]}),!o&&!i&&e(RD,{id:r?`${r}-contact-button`:void 0,"data-testid":n?`${n}-contact-button`:void 0,onClick:b,disabled:m.isRunning||g,loading:p,children:g?"Verified":p?"":m.isRunning?"Sent OTP":"Send OTP"})]}),y&&e(zu,{id:r?`${r}-contact-error`:void 0,"data-testid":n?`${n}-contact-error`:void 0,role:"alert",children:y})]})},WD=F.div`
    display: flex;
    flex-direction: column;
    gap: ${aa["spacing-16"]};
`,HD=F.svg`
    .background-circle {
        fill: ${ra["bg-stronger"]};
    }

    .primary-path {
        fill: ${ra["icon-primary"]};
    }

    .validation-icon {
        fill: ${ra["bg-available"]};
    }

    .accent-light-3 {
        fill: ${ra["icon-primary-subtle"]};
    }

    .accent-light-4 {
        fill: ${ra["icon-primary-subtlest"]};
    }
`,YD=({width:r=120,height:n=120,className:o})=>t(HD,{width:r,height:n,viewBox:"0 0 120 120",fill:"none",xmlns:"http://www.w3.org/2000/svg",className:o,children:[t("g",{clipPath:"url(#clip0_email_icon)",children:[e("circle",{cx:"60",cy:"60",r:"60",className:"background-circle"}),e("path",{d:"M22.9744 60.2636L62.1602 72.5619C62.6183 72.7414 63.1075 72.7591 63.5596 72.638C64.0116 72.5169 64.4265 72.2569 64.7334 71.8724L92.5201 41.6289L52.1928 25.0006C51.2645 24.6309 50.2039 24.9151 49.5848 25.6994L22.9744 60.2636Z",className:"primary-path"}),e("path",{d:"M72.6935 18.8097L29.2275 30.4564C26.8325 31.0982 25.4042 33.5744 26.0465 35.9714L38.8689 83.8253C39.1907 85.026 40.4254 85.7396 41.6251 85.4182L89.4378 72.6068C90.6374 72.2854 91.3499 71.05 91.0282 69.8493L78.2058 21.9954C77.5635 19.5984 75.0929 18.1668 72.6935 18.8097Z",fill:"white"}),e("path",{d:"M64.7456 71.7935C64.4385 72.1773 64.0235 72.4369 63.5715 72.5581C63.1194 72.6792 62.6303 72.6618 62.1724 72.483L23 60.2346L33.4375 99.188C34.0777 101.577 36.5445 102.994 38.9439 102.352L99.7963 86.0462C102.196 85.4033 103.623 82.9425 102.983 80.5533L92.5457 41.5999L64.7456 71.7935Z",className:"accent-light-3"}),e("path",{d:"M99.8349 86.0769L38.9824 102.382C36.544 103.036 34.127 101.648 33.4768 99.2216C33.2926 98.5339 33.4491 97.7966 33.8965 97.2409L60.7012 66.8793C61.0084 66.4957 61.4233 66.2361 61.8754 66.115C62.3274 65.9939 62.8166 66.0112 63.2744 66.1898L101.669 79.0814C102.334 79.3389 102.838 79.8992 103.023 80.5869C103.673 83.0134 102.273 85.4235 99.8349 86.0769Z",className:"accent-light-4"}),e("path",{d:"M56.1874 49.1387L52.6167 47.0772C52.2767 46.8809 51.9109 46.8352 51.5193 46.9401C51.1288 47.0447 50.8354 47.2671 50.6391 47.6071C50.4263 47.9757 50.3723 48.3558 50.4772 48.7474C50.5819 49.1379 50.8155 49.4283 51.1781 49.6186L55.9386 52.3685C56.2844 52.5863 56.6531 52.6427 57.0447 52.5378C57.4352 52.4332 57.737 52.1971 57.9501 51.8295L63.423 42.35C63.6193 42.01 63.6666 41.65 63.5649 41.2703C63.4628 40.8894 63.2418 40.6009 62.9017 40.4045C62.5617 40.2082 62.1958 40.1625 61.8043 40.2674C61.4138 40.372 61.1204 40.5944 60.924 40.9344L56.1874 49.1387ZM61.0069 59.8842C59.152 60.3812 57.3145 60.4964 55.4942 60.2299C53.674 59.9633 51.9987 59.3883 50.4684 58.5048C48.9382 57.6213 47.6026 56.458 46.4616 55.0148C45.3206 53.5717 44.5017 51.9227 44.0046 50.0678C43.5076 48.2129 43.3924 46.3754 43.6589 44.5551C43.9255 42.7348 44.5005 41.0595 45.384 39.5293C46.2674 37.999 47.4308 36.6634 48.8739 35.5224C50.317 34.3814 51.966 33.5625 53.8208 33.0655C55.6757 32.5685 57.5132 32.4532 59.3335 32.7198C61.1537 32.9863 62.829 33.5613 64.3593 34.4448C65.8895 35.3283 67.2251 36.4917 68.3661 37.9348C69.5071 39.378 70.326 41.027 70.8231 42.8818C71.3201 44.7367 71.4353 46.5743 71.1688 48.3945C70.9023 50.2148 70.3272 51.8901 69.4438 53.4204C68.5603 54.9506 67.3969 56.2863 65.9538 57.4272C64.5107 58.5682 62.8617 59.3872 61.0069 59.8842Z",className:"validation-icon"})]}),e("defs",{children:e("clipPath",{id:"clip0_email_icon",children:e("rect",{width:"120",height:"120",fill:"white"})})})]}),VD=F.svg`
    .background-circle {
        fill: ${ra["bg-stronger"]};
    }

    .primary-path {
        fill: ${ra["icon-primary"]};
    }

    .validation-icon {
        fill: ${ra["bg-available"]};
    }

    .accent-light {
        fill: ${ra["bg-selected-stronger"]};
    }
`,UD=({width:r=120,height:n=120,className:o})=>t(VD,{width:r,height:n,viewBox:"0 0 120 120",fill:"none",xmlns:"http://www.w3.org/2000/svg",className:o,children:[t("g",{clipPath:"url(#clip0_phone_icon)",children:[e("circle",{cx:"60",cy:"60.5",r:"60",className:"background-circle"}),e("path",{d:"M85.7091 99.047L56.9789 106.705C51.6167 108.134 46.0606 104.916 44.6318 99.5553L27.1393 33.9319C25.9969 29.6444 27.8244 25.2332 31.3437 22.9073C32.2263 22.3231 33.2151 21.8712 34.2899 21.5845L34.4374 21.5449L40.7667 19.8586L56.4455 15.6787L56.4545 15.6763L63.02 13.9267C68.3822 12.497 73.9383 15.715 75.3671 21.0761L92.8596 86.6995C94.2888 92.0619 91.0712 97.6172 85.7091 99.047Z",className:"primary-path"}),e("path",{d:"M90.0893 85.5165L72.9593 22.8765C72.8393 22.4365 72.6893 22.0165 72.5093 21.6165C72.0993 20.6965 71.5393 19.8765 70.8693 19.1765C70.2493 18.5365 69.5393 17.9865 68.7593 17.5665C66.8993 16.5465 64.6593 16.2165 62.4593 16.8065L58.8593 17.8765C58.8593 17.8765 58.8693 17.9065 58.8793 17.9265C59.2793 19.4065 58.8293 20.8265 57.8893 21.0665L42.2093 25.2365C41.3193 25.4765 40.3093 24.5765 39.8593 23.2265L36.0693 24.2365C31.5193 25.4465 28.7793 30.1665 29.9993 34.7265L30.3093 35.8765L32.1393 42.7565L35.8493 56.6765L36.8693 60.5165L38.1493 65.3165L47.0793 97.5165C48.2893 102.067 53.0093 104.807 57.5693 103.587L83.9993 95.9965C88.5493 94.7865 91.2893 90.0665 90.0693 85.5065L90.0893 85.5165ZM38.6893 26.3265L34.8993 27.3365C34.5793 27.4265 34.2493 27.2265 34.1593 26.9065C34.0693 26.5865 34.2693 26.2565 34.5893 26.1665L38.3793 25.1565C38.6993 25.0665 39.0293 25.2665 39.1193 25.5865C39.2093 25.9065 39.0093 26.2365 38.6893 26.3265ZM65.6893 19.3265L61.8993 20.3365C61.5793 20.4265 61.2493 20.2265 61.1593 19.9065C61.0693 19.5865 61.2693 19.2565 61.5893 19.1665L65.3793 18.1565C65.6993 18.0665 66.0293 18.2665 66.1193 18.5865C66.2093 18.9065 66.0093 19.2365 65.6893 19.3265Z",fill:"white"}),e("path",{d:"M55.1766 48.5674L51.606 46.5059C51.2659 46.3096 50.9001 46.2639 50.5086 46.3688C50.1181 46.4734 49.8247 46.6958 49.6283 47.0358C49.4155 47.4045 49.3616 47.7846 49.4665 48.1761C49.5711 48.5666 49.8047 48.857 50.1673 49.0473L54.9279 51.7972C55.2737 52.015 55.6424 52.0715 56.0339 51.9665C56.4244 51.8619 56.7262 51.6258 56.9393 51.2583L62.4123 41.7787C62.6086 41.4387 62.6559 41.0788 62.5541 40.699C62.4521 40.3181 62.231 40.0296 61.891 39.8332C61.5509 39.6369 61.1851 39.5912 60.7935 39.6961C60.403 39.8007 60.1096 40.0231 59.9133 40.3631L55.1766 48.5674ZM59.9961 59.3129C58.1413 59.8099 56.3037 59.9251 54.4835 59.6586C52.6632 59.392 50.988 58.817 49.4577 57.9335C47.9274 57.05 46.5918 55.8867 45.4509 54.4435C44.3099 53.0004 43.4909 51.3514 42.9939 49.4965C42.4969 47.6417 42.3817 45.8041 42.6482 43.9838C42.9147 42.1635 43.4897 40.4882 44.3732 38.958C45.2567 37.4277 46.42 36.0921 47.8631 34.9511C49.3063 33.8102 50.9552 32.9912 52.8101 32.4942C54.6649 31.9972 56.5025 31.8819 58.3227 32.1485C60.143 32.415 61.8183 32.99 63.3485 33.8736C64.8788 34.7571 66.2144 35.9204 67.3554 37.3635C68.4963 38.8067 69.3153 40.4557 69.8123 42.3105C70.3093 44.1654 70.4246 46.003 70.158 47.8233C69.8915 49.6435 69.3165 51.3188 68.433 52.8491C67.5495 54.3794 66.3862 55.715 64.9431 56.8559C63.5 57.9969 61.851 58.8159 59.9961 59.3129Z",className:"validation-icon"}),e("path",{d:"M76.5801 68.8601C77.3501 68.6501 77.8201 67.8501 77.6101 67.0801C77.4001 66.3101 76.6001 65.8401 75.8301 66.0501L49.0801 73.1601C48.3101 73.3701 47.8401 74.1701 48.0501 74.9401C48.2601 75.7101 49.0601 76.1801 49.8301 75.9701L76.5801 68.8601Z",className:"accent-light"}),e("path",{d:"M78.5098 76.1402C79.2798 75.9302 79.7498 75.1302 79.5398 74.3602C79.3298 73.5902 78.5298 73.1202 77.7598 73.3302L51.0098 80.4402C50.2398 80.6502 49.7698 81.4502 49.9798 82.2202C50.1898 82.9902 50.9898 83.4602 51.7598 83.2502L78.5098 76.1402Z",className:"accent-light"}),e("path",{d:"M81.6702 82.3401C81.4602 81.5701 80.6602 81.1001 79.8902 81.3101L53.1402 88.4201C52.3702 88.6301 51.9002 89.4301 52.1102 90.2001C52.3202 90.9701 53.1202 91.4401 53.8902 91.2301L80.6402 84.1201C81.4102 83.9101 81.8802 83.1101 81.6702 82.3401Z",className:"accent-light"})]}),e("defs",{children:e("clipPath",{id:"clip0_phone_icon",children:e("rect",{width:"120",height:"120",fill:"white"})})})]}),KD=F.div`
    display: flex;
    align-items: center;
    background-color: ${ra["bg-strong"]};
    padding: ${aa["spacing-16"]} ${aa["spacing-32"]};
    gap: ${aa["spacing-32"]};
    ${da.MaxWidth.sm} {
        flex-direction: column;
        align-items: start;
        gap: ${aa["spacing-16"]};
        padding: ${aa["spacing-16"]};
    }
`,qD=F.div`
    display: flex;
    flex-direction: column;
    gap: ${aa["spacing-16"]};
`,ZD=F(_a.BodyMD)`
    color: ${ra["text-subtlest"]};
`,GD=F.div`
    display: flex;
    gap: ${aa["spacing-8"]};
    max-width: 472px;
`,QD=F(Ph.Default)`
    flex-shrink: 0;
    width: 83px;
`,XD=({id:r,"data-testid":n,type:o,showVerifyOtpThumbnail:i=!1,verifyOtpTitle:a,verifyOtpMessage:s,otpCode:l,setOtpCode:c,isVerifyLoading:d,countdown:u,onVerifyOtp:h,verifyOtpError:f,otpPrefix:p,otpSeparator:g})=>{const m=M(),b=Ld.useMediaQuery({maxWidth:ca["sm-max"]({theme:m})})?64:120;return t(KD,{id:r,"data-testid":n,role:"group","aria-labelledby":r?`${r}-title`:void 0,children:[(()=>{if(!i)return null;return e("div",{"aria-label":"email"===o?"Email verification":"Phone verification",role:"img",children:e("email"===o?YD:UD,{width:b,height:b})})})(),t(qD,{children:[t("div",{children:[e(_a.BodyMD,{weight:"semibold",id:r?`${r}-title`:void 0,"data-testid":n?`${n}-title`:void 0,children:a}),e(_a.BodyMD,{weight:"regular",id:r?`${r}-message`:void 0,"data-testid":n?`${n}-message`:void 0,children:s})]}),t("div",{children:[t(GD,{children:[e(KS,{id:r?`${r}-verify-input`:void 0,"data-testid":n?`${n}-verify-input`:void 0,value:l,onChange:e=>null==c?void 0:c(e.target.value),placeholder:"Enter OTP",addon:{type:"label",attributes:{value:`${null!=p?p:""}${null!=g?g:""}`}},type:"number",error:!!f,"aria-label":"Enter OTP code","aria-invalid":!!f,"aria-required":!0}),e(QD,{id:r?`${r}-verify-button`:void 0,"data-testid":n?`${n}-verify-button`:void 0,onClick:h,loading:d,styleType:"light",disabled:!l||0===l.length,children:!d&&"Verify"})]}),f&&e(zu,{id:r?`${r}-verify-error`:void 0,"data-testid":n?`${n}-verify-error`:void 0,role:"alert",children:f})]}),u.isRunning&&t(ZD,{id:r?`${r}-countdown`:void 0,"data-testid":n?`${n}-countdown`:void 0,children:["Resend OTP in ",u.formatTime()]})]})]})},JD=r=>{const{id:n,"data-testid":o,className:i,inputId:a,onSendOtp:l,onVerifyOtp:d,verifyOtpCountdownTimer:u=60,sendOtpError:h,verifyOtpError:f,otpValue:p,onOtpChange:m,otpState:b,onOtpStateChange:v}=r,[y,x]=g(!1),[w,$]=g(!1),C=(({duration:e,onComplete:t})=>{const[r,n]=g(e),[o,i]=g(!1),a=s(null),l=s(null),d=()=>{i(!1),a.current&&(clearInterval(a.current),a.current=null)};return c((()=>{o||n(e)}),[e,o]),{timeLeft:r,isRunning:o,start:()=>{o||(l.current=Date.now(),i(!0),a.current=setInterval((()=>{const r=Math.floor((Date.now()-l.current)/1e3),o=Math.max(0,e-r);n(o),o<=0&&(i(!1),a.current&&(clearInterval(a.current),a.current=null),null==t||t())}),1e3))},stop:d,reset:()=>{d(),n(e),l.current=null},formatTime:e=>{const t=null!=e?e:r;return`${t} second${1===t?"":"s"}`}}})({duration:u});return t(WD,{id:n,"data-testid":o,className:i,children:[e(ND,Object.assign({},r,{inputId:a,"data-testid":o?`${o}-contact`:void 0,isLoading:y,isVerified:"verified"===b,countdown:C,onSendOtp:()=>dt(void 0,void 0,void 0,(function*(){if(l)try{x(!0),yield l(),v("sent"),C.reset(),C.start()}catch(e){}finally{x(!1)}})),onStateReset:()=>{"verified"===b&&v("default")},sendOtpError:h,fixedCountry:"phone-number"!==r.type||r.fixedCountry})),"sent"===b&&e(XD,Object.assign({},r,{"data-testid":o?`${o}-verification`:void 0,otpCode:null==p?void 0:p.value,otpPrefix:null==p?void 0:p.prefix,otpSeparator:null==p?void 0:p.separator,setOtpCode:m,isVerifyLoading:w,countdown:C,onVerifyOtp:()=>dt(void 0,void 0,void 0,(function*(){if(d&&(null==p?void 0:p.value))try{$(!0),yield d(p.value),v("verified"),C.reset(),null==m||m("")}catch(e){}finally{$(!1)}})),verifyOtpError:f}))]})};var ek=br,tk=Lr,rk=function(){return ek.Date.now()},nk=ty,ok=Math.max,ik=Math.min;var ak=ze((function(e,t,r){var n,o,i,a,s,l,c=0,d=!1,u=!1,h=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function f(t){var r=n,i=o;return n=o=void 0,c=t,a=e.apply(i,r)}function p(e){var r=e-l;return void 0===l||r>=t||r<0||u&&e-c>=i}function g(){var e=rk();if(p(e))return m(e);s=setTimeout(g,function(e){var r=t-(e-l);return u?ik(r,i-(e-c)):r}(e))}function m(e){return s=void 0,h&&n?f(e):(n=o=void 0,a)}function b(){var e=rk(),r=p(e);if(n=arguments,o=this,l=e,r){if(void 0===s)return function(e){return c=e,s=setTimeout(g,t),d?f(e):a}(l);if(u)return clearTimeout(s),s=setTimeout(g,t),f(l)}return void 0===s&&(s=setTimeout(g,t)),a}return t=nk(t)||0,tk(r)&&(d=!!r.leading,i=(u="maxWait"in r)?ok(nk(r.maxWait)||0,t):i,h="trailing"in r?!!r.trailing:h),b.cancel=function(){void 0!==s&&clearTimeout(s),c=0,n=l=o=s=void 0},b.flush=function(){return void 0===s?a:m(rk())},b}));const sk=n=>{var{className:o,"data-testid":i,selectedOption:a,minimumCharacters:l=3,fetchOptions:u,placeholder:h="Enter here...",readOnly:f=!1,disabled:p=!1,error:m,valueExtractor:b,listExtractor:v,displayValueExtractor:y,onSelectOption:x,alignment:w,dropdownZIndex:$,dropdownRootNode:C,dropdownWidth:S,"aria-describedby":D}=n,k=ct(n,["className","data-testid","selectedOption","minimumCharacters","fetchOptions","placeholder","readOnly","disabled","error","valueExtractor","listExtractor","displayValueExtractor","onSelectOption","alignment","dropdownZIndex","dropdownRootNode","dropdownWidth","aria-describedby"]);const E=e=>e?y?y(e):e.toString():"",[F,O]=g((()=>a?E(a):"")),[_,T]=g((()=>a?E(a):"")),[I,M]=g([]),[A,B]=g(!0),[j,z]=g(!1),[R,L]=g(!!a),[P,N]=g(a),[W,H]=g(!1),[Y,V]=g(!1),[U]=g((()=>Od.generate())),[K,q]=g(null),Z=`${U}-instruction`,G=s(null),Q=s(null),X=s(u),J=d((e=>dt(void 0,void 0,void 0,(function*(){if(X.current){z(!1),B(!0);try{const t=yield X.current(e);T(e),M(null!=t?t:[]),B(!1)}catch(e){z(!0),B(!1)}}}))),[]),ee=d(ak((e=>{J(e)}),500),[J]);c((()=>{X.current=u}),[u]),c((()=>{F&&F.length>=l?R?F!==_&&ee(F):(H(!0),ee(F)):ee.cancel(),""===F&&P&&(null==x||x(void 0,void 0),le(),N(void 0)),a&&F!==E(a)&&L(!1)}),[F,a]),c((()=>{O(a?E(a):""),T(a?E(a):""),N(a),M([]),L(!!a)}),[a]),c((()=>{var e;const t=ce(),r=null!==(e=null==I?void 0:I.length)&&void 0!==e?e:0;"loading"===t&&F.length>=l?q("Loading suggested results"):"fail"!==t?!W||A||j||q(0===r?F?"No results found.":null:`${r} result${r>1?"s":""} found. Press down arrow to scroll through the list.`):q("Suggestions failed to load. Try again.")}),[I,F,j,A]),c((()=>()=>{ee.cancel()}),[ee]);const te=(e,t)=>{var r;null===(r=Q.current)||void 0===r||r.focus(),O(E(e)),T(e?E(e):""),L(!0),N(e),H(!1),null==x||x(e,t)},re=()=>{V(!0)},ne=e=>{W||!G.current||G.current.contains(e.relatedTarget)||(V(!1),ae())},oe=()=>{H(!1),V(!1)},ie=()=>{O(""),M([]),L(!1),H(!1),null==x||x(void 0,void 0)},ae=()=>{if(!R)if(P){const e=E(P);O(e),H(!1)}else ie()},se=e=>{O(e.target.value),L(!1)},le=e=>{T(e?E(e):""),L(!!e),M([]),B(!0)},ce=()=>j?"fail":A?"loading":"success";return e(Z$,{children:e(lh,{enabled:!f&&!p,isOpen:W,renderElement:()=>t(Hf,{className:o,"data-testid":i,ref:G,tabIndex:-1,onFocus:re,onBlur:ne,$focused:Y,$disabled:p,$readOnly:f,$error:m,children:[t(dh,{id:Z,"aria-hidden":!0,children:["Type in ",l," or more characters for suggested results."]}),K&&e(dh,{"aria-live":"polite",children:K}),e(xg,Object.assign({role:"combobox",ref:Q,id:U,type:"text",value:F,onChange:se,placeholder:h,readOnly:f,disabled:p,allowClear:!0,onClear:ie,"aria-expanded":W,"aria-controls":U,"aria-autocomplete":"list","aria-haspopup":"listbox",onBlur:F.length<l?ae:void 0,styleType:"no-border","aria-describedby":hh(D,Z)},k))]}),renderDropdown:()=>e(r,{children:e(yC,{listboxId:U,listItems:I,onSelectItem:te,onDismiss:oe,valueExtractor:b,listExtractor:v,itemsLoadState:ce(),itemTruncationType:"end",itemMaxLines:1,labelDisplayType:"next-line",disableItemFocus:!0,onRetry:()=>J(F),width:S,matchElementWidth:!0})}),onOpen:()=>{!R&&F.length>=l&&V(!0)},onClose:()=>{H(!1),V(!1),ae()},onDismiss:()=>{var e;H(!1),V(!1),ae(),null===(e=Q.current)||void 0===e||e.focus()},clickToToggle:!1,offset:8,alignment:w,fitAvailableHeight:!0,customZIndex:$,rootNode:C})})},lk=F(mg)`
    position: absolute;
    right: 0;
    padding-left: ${aa["spacing-8"]};
    margin-right: 0;
`,ck=F(Hf)`
    height: 3rem;
`,dk=r=>{var{selectedOptions:n,placeholders:o={from:"Select",to:"Select"},options:i,disabled:l,className:d,readOnly:u,error:h,"data-testid":f,id:p,enableSearch:m=!1,searchFunction:b,searchPlaceholder:v,valueExtractor:y,valueToStringFunction:x,listExtractor:w,displayValueExtractor:$,onSelectOption:C,onShowOptions:S,onHideOptions:D,onRetry:k,optionsLoadState:E={from:"success",to:"success"},optionTruncationType:F="middle",renderCustomSelectedOption:O,renderListItem:_,renderCustomCallToAction:T,alignment:I,dropdownZIndex:M,dropdownRootNode:A,dropdownWidth:B}=r,j=ct(r,["selectedOptions","placeholders","options","disabled","className","readOnly","error","data-testid","id","enableSearch","searchFunction","searchPlaceholder","valueExtractor","valueToStringFunction","listExtractor","displayValueExtractor","onSelectOption","onShowOptions","onHideOptions","onRetry","optionsLoadState","optionTruncationType","renderCustomSelectedOption","renderListItem","renderCustomCallToAction","alignment","dropdownZIndex","dropdownRootNode","dropdownWidth"]);const[z,R]=g(),[L,P]=g(),[N,W]=g("none"),H="none"!==N,[Y,V]=g(!1),U=s(null),K={from:s(null),to:s(null)},q=s(null),[Z]=g((()=>null!=p?p:Od.generate())),G=`${Z}-range-listbox`;c((()=>{R(null==n?void 0:n.from),P(null==n?void 0:n.to)}),[n]),c((()=>{var e;H&&"to"===N&&(null===(e=q.current)||void 0===e||e.refocus({index:0}))}),[H,N]);const Q=e=>{e||null==D||D(),e&&(null==S||S())},X=e=>{var t,r;const n="from"===e?z:L;if(!n)return"";if($)return $(n);if(y){const e=y(n);return x?x(e):null!==(r=null===(t=null==e?void 0:e.toString)||void 0===t?void 0:t.call(e))&&void 0!==r?r:""}return n.toString()},J=(e,t)=>{var r;if("middle"===F){let n=0;return(null===(r=K[e])||void 0===r?void 0:r.current)&&(n=K[e].current.getBoundingClientRect().width),_d.truncateOneLine(t,n,120,8)}return t},ee=()=>{switch(N){case"from":return"start";case"to":return"end";case"none":return N}},te=a((()=>{var e;return"none"===N?[]:null!==(e=null==i?void 0:i[N])&&void 0!==e?e:[]}),[N,i]),re=a((()=>{if("none"===N)return[];const e="from"===N?z:L;return e?[e]:[]}),[N,z,L]),ne=e=>t=>{t.stopPropagation(),t.preventDefault(),l||u||(W("to"===e&&z?"to":"from"),Q(!0))},oe=(e,t)=>{var r;if("none"!==N){if("from"===N)return R(e),null==C||C({from:e},t),P(void 0),W("to"),void Q(!0);P(e),null==C||C({to:e},t),W("none"),Q(!1),null===(r=U.current)||void 0===r||r.focus(),V(!0)}},ie=()=>{var e;W("none"),Q(!1),null===(e=U.current)||void 0===e||e.focus(),V(!0),z&&L||(R(void 0),P(void 0))},ae=e=>{var t;e.stopPropagation(),e.preventDefault(),R(void 0),P(void 0),null==C||C({from:void 0,to:void 0},void 0),null===(t=U.current)||void 0===t||t.focus(),V(!0)},se=()=>V(!0),le=e=>{Y&&!H&&U.current&&!U.current.contains(e.relatedTarget)&&V(!1)},ce=e=>{if(!l&&!u&&!H&&e.currentTarget===e.target)switch(e.key){case"Enter":case" ":case"ArrowDown":e.preventDefault(),W("from"),Q(!0)}},de=t=>{const r="from"===t?z:L;return r?O?O(r):e(nh,{$truncateType:F,children:J(t,X(t))}):e(oh,{$truncateType:F,children:J(t,(null==o?void 0:o[t])||"")})},ue=t=>e(rh,{onClick:ne(t),ref:K[t],$disabled:l,children:de(t)});return e(Xu,Object.assign({id:p},j,{children:e(Z$,{children:e(lh,{enabled:!u&&!l,isOpen:H,renderElement:()=>t(ck,{className:d,"data-testid":f,ref:U,tabIndex:0,onFocus:se,onBlur:le,$focused:Y||H,$disabled:l,$readOnly:u,$error:h,onKeyDown:ce,children:[t(lp,{currentActive:ee(),error:h,children:[ue("from"),ue("to")]}),!H&&z&&L&&!u&&!l&&e(lk,{onClick:ae,type:"button","aria-label":"Clear",children:e(bg,{"aria-hidden":!0})})]}),renderDropdown:()=>e(yC,{ref:q,"data-testid":`${f}-dropdown`,listboxId:G,listItems:te,onSelectItem:oe,onDismiss:ie,valueExtractor:y,listExtractor:w,selectedItems:re,itemsLoadState:E[N],itemTruncationType:F,onRetry:k,width:B,matchElementWidth:!B,enableSearch:m,searchFunction:b,searchPlaceholder:v,renderListItem:_,renderCustomCallToAction:T}),onOpen:()=>{l||u||"none"===N&&(W("from"),Q(!0))},onClose:()=>{W("none"),Q(!1),z&&L||(R(void 0),P(void 0)),V(!1)},onDismiss:ie,clickToToggle:!1,offset:8,alignment:I,fitAvailableHeight:!0,customZIndex:M,rootNode:A})})}))},uk=({selectedOption:t,placeholder:r="Select",options:n,disabled:o,error:i,className:a,"data-testid":l,id:d,"aria-labelledby":u,"aria-describedby":h,"aria-invalid":f,enableSearch:p=!1,searchFunction:m,searchPlaceholder:b,valueExtractor:v,valueToStringFunction:y,listExtractor:x,displayValueExtractor:w,onSelectOption:$,onShowOptions:C,onHideOptions:S,onRetry:D,optionsLoadState:k="success",optionTruncationType:E="end",renderCustomSelectedOption:F,renderListItem:O,hideNoResultsDisplay:_,noResultsDescription:T,customLabels:I,renderCustomCallToAction:M,onBlur:A,variant:B="default",readOnly:j,alignment:z,dropdownZIndex:R,dropdownRootNode:L,dropdownWidth:P})=>{const[N,W]=g(t),[H,Y]=g(!1),[V,U]=g(!1),[K]=g((()=>Od.generate())),q=s(null),Z=s(null),G=s(null);c((()=>{W(t)}),[t]);const Q=(e,t)=>{var r;null===(r=Z.current)||void 0===r||r.focus(),W(e),Y(!1),ne(!1),null==$||$(e,t)},X=()=>{H&&(Y(!1),ne(!1))},J=()=>{V||H||U(!0)},ee=e=>{V&&!H&&q.current&&!q.current.contains(e.relatedTarget)&&(U(!1),null==A||A())},te=()=>{var e;if(!N)return"";if(w)return w(N);if(v){const t=v(N);return y?y(t):null!==(e=null==t?void 0:t.toString())&&void 0!==e?e:""}return N.toString()},re=e=>{if("middle"===E){let t=0;return G&&G.current&&(t=G.current.getBoundingClientRect().width),_d.truncateOneLine(e,t,120,8)}return e},ne=e=>{e?null==C||C():null==S||S()};return e(Z$,{children:e(lh,{enabled:!j&&!o,isOpen:H,renderElement:()=>e(Wf,{className:a,"data-testid":l,id:d,ref:q,tabIndex:-1,onFocus:J,onBlur:ee,$focused:V,$disabled:o,$readOnly:j,$error:i,children:e($C,{ref:Z,disabled:o,expanded:H,listboxId:K,popupRole:"listbox",readOnly:j,variant:B,"aria-labelledby":u,"aria-describedby":h,"aria-invalid":f,children:e(rh,{ref:G,$disabled:o,children:N?F?F(N):e(nh,{$truncateType:E,$variant:B,children:re(te())}):e(oh,{$truncateType:E,$variant:B,children:r})})})}),renderDropdown:()=>e(yC,{listboxId:K,listItems:n,onSelectItem:Q,onDismiss:X,valueExtractor:v,listExtractor:x,enableSearch:p,searchPlaceholder:b,searchFunction:m,selectedItems:N?[N]:[],onRetry:D,itemsLoadState:k,itemTruncationType:E,renderListItem:O,hideNoResultsDisplay:_,noResultsDescription:T,customLabels:I,renderCustomCallToAction:M,variant:B,width:P,matchElementWidth:!0}),onOpen:()=>{Y(!0),ne(!0),U(!0)},onClose:e=>{Y(!1),ne(!1),"click"!==e&&(U(!1),null==A||A())},onDismiss:()=>{var e;null===(e=Z.current)||void 0===e||e.focus(),Y(!1),ne(!1)},clickToToggle:!0,offset:8,alignment:z,fitAvailableHeight:!0,customZIndex:R,rootNode:L})})},hk=F.div`
    overflow: hidden;
    border: ${ia["width-010"]} ${ia.solid} ${ra.border};
    border-radius: ${sa.sm};
    background: ${ra.bg};
    padding: ${aa["spacing-16"]};
    min-width: 23rem;

    ${da.MaxWidth.sm} {
        min-width: unset;
        width: calc(100vw - ${ca["sm-margin"]}px * 2);
    }

    ${da.MaxWidth.xs} {
        width: calc(100vw - ${ca["xs-margin"]}px * 2);
    }

    ${da.MaxWidth.xxs} {
        width: calc(100vw - ${ca["xxs-margin"]}px * 2);
    }
`,fk=F.div`
    display: flex;
    align-items: baseline;
`,pk=F.div`
    margin: 0 0.5rem;
    color: ${ra.text};
`,gk=F(F.div`
    ${e=>"small"===e.$variant?na["body-md-regular"]:na["body-baseline-regular"]}
    text-align: left;
    ${e=>{if("middle"!==e.$truncateType)return O`
                    ${Ca(1)}
                `}}
    overflow: hidden;
`)`
    color: ${ra["text-subtler"]};
`,mk=r=>{var{alignment:n="left",className:o,disabled:i,dropdownZIndex:a,error:l,histogramSlider:d,id:u,"aria-labelledby":h,"aria-describedby":f,"aria-invalid":p,onBlur:m,onChange:b,onChangeEnd:v,optionTruncationType:y="end",placeholder:x="Select",rangeLabelPrefix:w,rangeLabelSuffix:$,readOnly:C,renderRangeLabel:S,value:D,dropdownRootNode:k}=r,E=ct(r,["alignment","className","disabled","dropdownZIndex","error","histogramSlider","id","aria-labelledby","aria-describedby","aria-invalid","onBlur","onChange","onChangeEnd","optionTruncationType","placeholder","rangeLabelPrefix","rangeLabelSuffix","readOnly","renderRangeLabel","value","dropdownRootNode"]);const{interval:F,bins:O=[],renderEmptyView:_,ariaLabels:T}=d,I=O.map((e=>e.minValue)),M=Math.min(...I),[A,B]=g(Z()),[j,z]=g(!1),[R,L]=g(!1),[P]=g((()=>Od.generate())),N=s(null),W=s(null),H=s(null),Y=E["data-testid"]||"select-histogram";c((()=>{D!==A&&B(Z())}),[D]);const V=e=>{B(e),null==b||b(e)},U=e=>{B(e),null==v||v(e)},K=()=>{R||j||L(!0)},q=e=>{R&&!j&&N.current&&!N.current.contains(e.relatedTarget)&&(L(!1),null==m||m())};function Z(){return null!=D?D:[M,M+F]}const G=e=>S?S(e):t(_a.BodyBL,{children:[w,e,$]});return e(Z$,{children:e(lh,{enabled:!C&&!i,isOpen:j,renderElement:()=>e(Wf,{className:o,"data-testid":Y,id:u,ref:N,tabIndex:-1,onFocus:K,onBlur:q,$focused:R,$disabled:i,$readOnly:C,$error:l,children:e($C,{ref:W,disabled:i,expanded:j,listboxId:P,popupRole:"dialog",readOnly:C,variant:"default","aria-labelledby":h,"aria-describedby":f,"aria-invalid":p,children:e(rh,{ref:H,$disabled:i,children:I&&0!==I.length?t(fk,{children:[G(A[0]),e(pk,{children:"-"}),G(A[1])]}):e(gk,{$truncateType:y,$variant:"default",children:x})})})}),renderDropdown:({elementWidth:t,styles:r,setFloatingRef:n,getFloatingProps:o})=>e(hk,Object.assign({style:Object.assign(Object.assign({},r),{width:t}),ref:n},o(),{children:e(pg,{interval:F,value:A,bins:O,onChange:V,onChangeEnd:U,showRangeLabels:!1,renderEmptyView:_,ariaLabels:T})})),onOpen:()=>{z(!0)},onClose:()=>{z(!1)},onDismiss:()=>{var e;null===(e=W.current)||void 0===e||e.focus(),z(!1)},clickToToggle:!0,offset:8,alignment:n,fitAvailableHeight:!0,customZIndex:a,rootNode:k})})},bk=t=>{var{value:r,ariaLabel:n,onChange:o,onChangeEnd:i}=t,a=ct(t,["value","ariaLabel","onChange","onChangeEnd"]);const[s,l]=g(d());c((()=>{r!==s[0]&&l(d())}),[r]);function d(){return null!=r?[r]:[0]}return e(lg,Object.assign({},a,{value:s,numOfThumbs:1,onChange:e=>{const[t]=e;l([t]),null==o||o(t)},onChangeEnd:e=>{const[t]=e;l([t]),null==i||i(t)},ariaLabels:n?[n]:void 0}))},vk=F.p`
    text-align: right;
    ${na["body-sm-semibold"]}
    color: ${ra["text-subtler"]};
`,yk=({value:t,maxLength:n,renderCustomCounter:i})=>{const[a,s]=g("");c((()=>{s(l(`${t||""}`))}),[t,n]);const l=e=>{if(i)return i(n,e.toString().length);{const t=n-e.toString().length;return 1===t?`${t} character left`:`${t.toLocaleString()} characters left`}};return e(r,{children:o.isValidElement(a)?a:e(vk,{"data-testid":"counter-label",children:a})})},xk=F.div`
    display: flex;
    flex-direction: column;
`,wk=F.textarea`
    border: ${ia["width-010"]} ${ia.solid} ${ra.border};
    border-radius: ${sa.sm};
    background: ${ra.bg};
    outline: none;
    overflow: auto;

    display: block;
    padding: ${aa["spacing-12"]} ${aa["spacing-16"]};
    width: 100%;

    ${na["body-baseline-regular"]}
    color: ${ra.text};

    &:focus,
    &:active {
        outline-offset: -1px;
        outline: ${ia["width-020"]} ${ia.solid}
            ${ra["border-focus"]};
    }

    &::placeholder,
    &::-webkit-input-placeholder {
        color: ${ra["text-subtler"]};
    }

    &::-webkit-scrollbar {
        width: 14px;
    }

    &::-webkit-scrollbar-track {
        background: transparent;
    }

    &::-webkit-scrollbar-thumb {
        background: ${ra["bg-inverse-subtlest"]};
        border: 5px solid transparent;
        border-radius: ${sa.full};
        background-clip: padding-box;
    }

    ${e=>e.readOnly?O`
                border-color: transparent;
                background: transparent !important;
                padding: ${aa["spacing-12"]} 0;

                &:focus,
                &:active {
                    outline-color: ${ra["border-focus"]};
                }
            `:e.disabled?O`
                background: ${ra["bg-disabled"]};
                cursor: not-allowed;

                &:focus,
                &:active {
                    outline-color: ${ra["border-disabled"]};
                }
            `:e.$error?O`
                border-color: ${ra["border-error"]};

                &:focus,
                &:active {
                    outline-color: ${ra["border-error-focus"]};
                }
            `:void 0}
`,$k=o.forwardRef(((t,r)=>{var{value:n,disabled:o,error:i,rows:a=5,prefix:s,transformValue:l,onChange:d,maxLength:u}=t,h=ct(t,["value","disabled","error","rows","prefix","transformValue","onChange","maxLength"]);const[f,p]=g(n);c((()=>{p(n)}),[n]);return e(wk,Object.assign({ref:r,disabled:o,value:s?s+(null!=f?f:""):f,onChange:e=>{let t=e.target.value;if(s){t.startsWith(s)||(t=s+t.trimStart()),t.length<s.length&&(t=s);if((e.target.selectionStart||0)<s.length)return void e.preventDefault();const r=t.slice(s.length),n=l?l(r):r;if(p(n),e.target.value=s+n,d){const t=Object.assign(Object.assign({},e),{target:Object.assign(Object.assign({},e.target),{value:n})});d(t)}}else{const r=l?l(null!=t?t:""):t;p(r),e.target.value=r,d&&d(e)}},onKeyDown:e=>{if(!s)return;const{selectionStart:t}=e.currentTarget;"Backspace"===e.key&&t<=s.length&&e.preventDefault(),"ArrowLeft"===e.key&&t<=s.length&&e.preventDefault(),"Home"===e.key&&(e.preventDefault(),requestAnimationFrame((()=>{e.currentTarget.setSelectionRange(s.length,s.length)})))},$error:i,rows:a,maxLength:s&&u?s.length+u:u},h))}));o.forwardRef(((r,n)=>{var{value:o,disabled:i,rows:a=5,onChange:s,transformValue:l,prefix:d,maxLength:u,renderCustomCounter:h}=r,f=ct(r,["value","disabled","rows","onChange","transformValue","prefix","maxLength","renderCustomCounter"]);const[p,m]=g(o);c((()=>{m(o)}),[o]);return t(xk,{children:[e($k,Object.assign({ref:n,disabled:i,value:p,rows:a||5,onChange:e=>{const t=e.target.value;m(t),s&&s(e)},prefix:d,transformValue:l,maxLength:u},f)),u&&e(yk,{value:p,maxLength:u,renderCustomCounter:h})]})}));const Ck=F.div`
    display: flex;
    justify-content: flex-end;
    margin-top: ${aa["spacing-4"]};
`,Sk=F.div`
    display: flex;
    flex: 1;
    margin-right: ${aa["spacing-12"]};
    gap: ${aa["spacing-4"]};
`,Dk=F(Au)`
    margin-top: 0;
`,kk=o.forwardRef(((n,o)=>{const{label:i,value:a,errorMessage:s,id:l="form-textarea","data-error-testid":d,"data-testid":u,onChange:h,layoutType:f,mobileCols:p,tabletCols:m,desktopCols:b,xxsCols:v,xsCols:y,smCols:x,mdCols:w,lgCols:$,xlCols:C,xxlCols:S,transformValue:D,prefix:k=""}=n,E=ct(n,["label","value","errorMessage","id","data-error-testid","data-testid","onChange","layoutType","mobileCols","tabletCols","desktopCols","xxsCols","xsCols","smCols","mdCols","lgCols","xlCols","xxlCols","transformValue","prefix"]),[F,O]=g(a);c((()=>{O(a)}),[a]);return t(Gu,{id:l,label:i,disabled:E.disabled,layoutType:f,mobileCols:p,tabletCols:m,desktopCols:b,xxsCols:v,xsCols:y,smCols:x,mdCols:w,lgCols:$,xlCols:C,xxlCols:S,children:[e($k,Object.assign({id:`${l}-base`,"data-testid":u||l,value:F,error:!!s,onChange:e=>{const t=e.target.value;O(t),h&&h(e)},ref:o,prefix:k,transformValue:D},E)),s||E.maxLength?t(Ck,{children:[s&&t(Sk,{children:[e(Iu,{"aria-hidden":!0}),e(Dk,{"data-testid":d||(l?`${l}-error-message`:"error-message"),children:s})]}),E.maxLength&&e(yk,{value:F,maxLength:E.maxLength,renderCustomCounter:E.renderCustomCounter})]}):e(r,{})]})})),Ek=F.div`
    position: relative;
`,Fk=F(Hf)`
    height: 3rem;
    gap: ${aa["spacing-8"]};
`,Ok=F(Yf)`
    display: block;
    width: 100%;
    flex: 1;
`;var _k,Tk;!function(e){e.AM="AM",e.PM="PM"}(_k||(_k={})),function(e){e.roundToNearestInterval=(e,t,r)=>{const[n,o]=e.split(":"),i=parseInt(n,10),a=parseInt(o,10);if(isNaN(i)||isNaN(a)||a<0||a>=60)throw new Error("Invalid time format");const s=60*i+a,l=s%t,c=0===l?s:r?s+(t-l):s-l,d=c%60;return`${Math.floor(c/60).toString().padStart(2,"0")}:${d.toString().padStart(2,"0")}`},e.generateHourlyIntervals=(e,t,r="ha")=>{const n="HH:mm";let o=sd(e,n),i=sd(t,n);o.isSame(i)&&(i=i.add(1,"day"));const a=[];for(;o.isBefore(i);)a.push(o.format(r)),o=o.add(1,"hour");return a},e.getTimeValues=(e,t)=>{const r={hour:"",minute:"",period:_k.AM};if(!t)return r;try{if("24hr"===e){const n=Bk(t,e);r.minute=_d.padValue(n.minute);const o=parseInt(n.hour);0===Math.floor(o/12)?(r.period=_k.AM,r.hour=0===o?"12":_d.padValue(o.toString())):(r.period=_k.PM,r.hour=12===o?o.toString():_d.padValue((o-12).toString()))}else{const{hour:n,minute:o,period:i=""}=Bk(t,e);r.hour=_d.padValue(n),r.minute=_d.padValue(o),r.period="am"===i.toLowerCase()?_k.AM:_k.PM}return r}catch(e){return r}},e.updateMinutes=(e,t)=>{const r=parseInt(e);if(isNaN(r))return"add"===t?_d.padValue("0"):"55";const n=Math.floor(r/5),o=(("add"===t?n+1:r%5==0?n-1:n)%12+12)%12;return _d.padValue((5*o).toString())},e.updateHours=(e,t)=>{const r=parseInt(e);if(isNaN(r))return"add"===t?_d.padValue("1"):"12";const n="add"===t?r+1:r-1;return n<=12&&n>0?_d.padValue(n.toString()):13===n?_d.padValue("1"):"12"},e.convertTo24HourFormat=e=>{const t=parseInt(e.hour);let r;return r=e.period===_k.PM?12===t?t.toString():(t+12).toString():12===t?"00":e.hour,`${r}:${e.minute}`},e.convertHourTo12HourFormat=e=>{const t=parseInt(e),r=t%12==0?12..toString():(t%12).toString();return _d.padValue(r)},e.formatDisplayValue=(e,t)=>{try{const{hour:r,minute:n,period:o=""}=Bk(e,t),i=_d.padValue(r);let a=`${i}:${_d.padValue(n)}`;return"12hr"===t?(a+=o.toLowerCase(),a):a}catch(e){return""}},e.toMinutesSeconds=e=>({minutes:Math.floor(e/60),seconds:e%60}),e.to24Hour=e=>{if((null==e?void 0:e.includes("am"))||(null==e?void 0:e.includes("pm"))){const[t,r]=e.split(/(am|pm)/i),[n,o]=t.split(":").map(Number);let i=n;return"pm"===r&&i<12&&(i+=12),"am"===r&&12===i&&(i=0),jk(i,o)}return e},e.generateTimings=(t,r="12hr",n,o)=>{const i=[];let a=0,s=1440-t;for(n&&(a=e.timeToMinutes(n)),o&&(s=e.timeToMinutes(o));a<=s;){let e=Math.floor(a/60);const n=a%60;if("12hr"===r){const t=e>=12?"pm":"am";e%=12,e=e||12;const r=jk(e,n,t);i.push(r)}else{const t=jk(e,n);i.push(t)}a+=t}return i},e.parseInput=(e,t="12hr")=>{if(""===e||void 0===e)return e;const r=e.trim().toLowerCase(),n=/^(?:(\d{1,2})([:.])?(\d{2})?)?(a|p|am|pm)?$/.exec(r);if(!n)return;let o=parseInt(n[1]||"0",10);const i=parseInt(n[3]||"0",10);let a=n[4];if(void 0===n[1]||o>24||i>59)return;if("a"===a?a="am":"p"===a&&(a="pm"),"24hr"===t)return"pm"===a&&o<12?o+=12:("am"===a&&12===o||24===o)&&(o=0),jk(o,i);a?0===o||24===o?(a="am",o=12):o>12&&(a="pm",o-=12):(a=0===o||24===o||o>6&&o<12?"am":"pm",o=o%12||12);return jk(o,i,a)},e.findClosestFlooredTime=(t,r)=>{if(!t)return t;const n=e.timeToMinutes(t);let o="",i=1/0;for(const t of r){const r=e.timeToMinutes(t)-n;if(r<=0&&Math.abs(r)<i)i=Math.abs(r),o=t;else if(r>0)break}return o},e.timeToMinutes=e=>{const[t,r]=e.toLowerCase().split(/(am|pm)/),[n,o]=t.split(":").map(Number);let i=n;return"pm"===r&&12!==i&&(i+=12),"am"===r&&12===i&&(i=0),60*i+o},e.calculateDuration=(t,r)=>{const n=e.timeToMinutes(t);return e.timeToMinutes(r)-n},e.calculateScrollPosition=t=>{const{scrollTime:r,minTime:n,maxTime:o,interval:i,intervalWidth:a,options:s}=t;try{if(!/^([0-1]?[0-9]|2[0-3]):[0-5][0-9]$/.test(r))return console.warn(`Invalid scrollTime format: "${r}". Expected format: HH:mm.`),null;const t=(null==s?void 0:s.roundToInterval)?e.roundToNearestInterval(r,i):r,[l,c]=Ik(t);if(isNaN(l)||isNaN(c))return console.warn(`Invalid scrollTime: "${r}".`),null;const d=60*l+c,[u,h]=Ik(n),f=60*u+h,[p,g]=Ik(o);(d<f||d>60*p+g)&&console.warn(`scrollTime "${r}" is outside the range (${n} - ${o}).`);return(d-f)/i*a}catch(e){return console.warn(`Error processing scrollTime: "${r}".`,e),null}}}(Tk||(Tk={}));const Ik=e=>e.split(":").map(Number),Mk=(e,t)=>{const r=parseInt(e);return"24hr"===t?r>=0&&r<=23:r>=1&&r<=12},Ak=e=>{const t=parseInt(e);return t>=0&&t<=59},Bk=(e,t)=>{const r=e?e.split(":"):[],n=new Error("Invalid format");if("12hr"===t){if(2!==r.length||4!==r[1].length)throw n;const e=r[1].substring(0,2),i=r[1].substring(2);if(!Mk(r[0],t)||!Ak(e)||"am"!==(o=i).toLowerCase()&&"pm"!==o.toLowerCase())throw n;return{hour:r[0],minute:e,period:r[1].substring(2)}}if(2!==r.length)throw n;if(!Mk(r[0],t)||!Ak(r[1]))throw n;return{hour:r[0],minute:r[1]};var o},jk=(e,t,r)=>r?`${e}:${t.toString().padStart(2,"0")}${r}`:`${e.toString().padStart(2,"0")}:${t.toString().padStart(2,"0")}`;var zk=Jk(),Rk=e=>Zk(e,zk),Lk=Jk();Rk.write=e=>Zk(e,Lk);var Pk=Jk();Rk.onStart=e=>Zk(e,Pk);var Nk=Jk();Rk.onFrame=e=>Zk(e,Nk);var Wk=Jk();Rk.onFinish=e=>Zk(e,Wk);var Hk=[];Rk.setTimeout=(e,t)=>{const r=Rk.now()+t,n=()=>{const e=Hk.findIndex((e=>e.cancel==n));~e&&Hk.splice(e,1),Kk-=~e?1:0},o={time:r,handler:e,cancel:n};return Hk.splice(Yk(r),0,o),Kk+=1,Gk(),o};var Yk=e=>~(~Hk.findIndex((t=>t.time>e))||~Hk.length);Rk.cancel=e=>{Pk.delete(e),Nk.delete(e),Wk.delete(e),zk.delete(e),Lk.delete(e)},Rk.sync=e=>{qk=!0,Rk.batchedUpdates(e),qk=!1},Rk.throttle=e=>{let t;function r(){try{e(...t)}finally{t=null}}function n(...e){t=e,Rk.onStart(r)}return n.handler=e,n.cancel=()=>{Pk.delete(r),t=null},n};var Vk="undefined"!=typeof window?window.requestAnimationFrame:()=>{};Rk.use=e=>Vk=e,Rk.now="undefined"!=typeof performance?()=>performance.now():Date.now,Rk.batchedUpdates=e=>e(),Rk.catch=console.error,Rk.frameLoop="always",Rk.advance=()=>{"demand"!==Rk.frameLoop?console.warn("Cannot call the manual advancement of rafz whilst frameLoop is not set as demand"):Xk()};var Uk=-1,Kk=0,qk=!1;function Zk(e,t){qk?(t.delete(e),e(0)):(t.add(e),Gk())}function Gk(){Uk<0&&(Uk=0,"demand"!==Rk.frameLoop&&Vk(Qk))}function Qk(){~Uk&&(Vk(Qk),Rk.batchedUpdates(Xk))}function Xk(){const e=Uk;Uk=Rk.now();const t=Yk(Uk);t&&(eE(Hk.splice(0,t),(e=>e.handler())),Kk-=t),Kk?(Pk.flush(),zk.flush(e?Math.min(64,Uk-e):16.667),Nk.flush(),Lk.flush(),Wk.flush()):Uk=-1}function Jk(){let e=new Set,t=e;return{add(r){Kk+=t!=e||e.has(r)?0:1,e.add(r)},delete:r=>(Kk-=t==e&&e.has(r)?1:0,e.delete(r)),flush(r){t.size&&(e=new Set,Kk-=t.size,eE(t,(t=>t(r)&&e.add(t))),Kk+=e.size,t=e)}}}function eE(e,t){e.forEach((e=>{try{t(e)}catch(e){Rk.catch(e)}}))}var tE=Object.defineProperty,rE={};function nE(){}((e,t)=>{for(var r in t)tE(e,r,{get:t[r],enumerable:!0})})(rE,{assign:()=>bE,colors:()=>pE,createStringInterpolator:()=>dE,skipAnimation:()=>gE,to:()=>uE,willAdvance:()=>mE});var oE={arr:Array.isArray,obj:e=>!!e&&"Object"===e.constructor.name,fun:e=>"function"==typeof e,str:e=>"string"==typeof e,num:e=>"number"==typeof e,und:e=>void 0===e};function iE(e,t){if(oE.arr(e)){if(!oE.arr(t)||e.length!==t.length)return!1;for(let r=0;r<e.length;r++)if(e[r]!==t[r])return!1;return!0}return e===t}var aE=(e,t)=>e.forEach(t);function sE(e,t,r){if(oE.arr(e))for(let n=0;n<e.length;n++)t.call(r,e[n],`${n}`);else for(const n in e)e.hasOwnProperty(n)&&t.call(r,e[n],n)}var lE=e=>oE.und(e)?[]:oE.arr(e)?e:[e];function cE(e,t){if(e.size){const r=Array.from(e);e.clear(),aE(r,t)}}var dE,uE,hE=(e,...t)=>cE(e,(e=>e(...t))),fE=()=>"undefined"==typeof window||!window.navigator||/ServerSideRendering|^Deno\//.test(window.navigator.userAgent),pE=null,gE=!1,mE=nE,bE=e=>{e.to&&(uE=e.to),e.now&&(Rk.now=e.now),void 0!==e.colors&&(pE=e.colors),null!=e.skipAnimation&&(gE=e.skipAnimation),e.createStringInterpolator&&(dE=e.createStringInterpolator),e.requestAnimationFrame&&Rk.use(e.requestAnimationFrame),e.batchedUpdates&&(Rk.batchedUpdates=e.batchedUpdates),e.willAdvance&&(mE=e.willAdvance),e.frameLoop&&(Rk.frameLoop=e.frameLoop)},vE=new Set,yE=[],xE=[],wE=0,$E={get idle(){return!vE.size&&!yE.length},start(e){wE>e.priority?(vE.add(e),Rk.onStart(CE)):(SE(e),Rk(kE))},advance:kE,sort(e){if(wE)Rk.onFrame((()=>$E.sort(e)));else{const t=yE.indexOf(e);~t&&(yE.splice(t,1),DE(e))}},clear(){yE=[],vE.clear()}};function CE(){vE.forEach(SE),vE.clear(),Rk(kE)}function SE(e){yE.includes(e)||DE(e)}function DE(e){yE.splice(function(e,t){const r=e.findIndex(t);return r<0?e.length:r}(yE,(t=>t.priority>e.priority)),0,e)}function kE(e){const t=xE;for(let r=0;r<yE.length;r++){const n=yE[r];wE=n.priority,n.idle||(mE(n),n.advance(e),n.idle||t.push(n))}return wE=0,(xE=yE).length=0,(yE=t).length>0}var EE="[-+]?\\d*\\.?\\d+",FE=EE+"%";function OE(...e){return"\\(\\s*("+e.join(")\\s*,\\s*(")+")\\s*\\)"}var _E=new RegExp("rgb"+OE(EE,EE,EE)),TE=new RegExp("rgba"+OE(EE,EE,EE,EE)),IE=new RegExp("hsl"+OE(EE,FE,FE)),ME=new RegExp("hsla"+OE(EE,FE,FE,EE)),AE=/^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,BE=/^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,jE=/^#([0-9a-fA-F]{6})$/,zE=/^#([0-9a-fA-F]{8})$/;function RE(e,t,r){return r<0&&(r+=1),r>1&&(r-=1),r<1/6?e+6*(t-e)*r:r<.5?t:r<2/3?e+(t-e)*(2/3-r)*6:e}function LE(e,t,r){const n=r<.5?r*(1+t):r+t-r*t,o=2*r-n,i=RE(o,n,e+1/3),a=RE(o,n,e),s=RE(o,n,e-1/3);return Math.round(255*i)<<24|Math.round(255*a)<<16|Math.round(255*s)<<8}function PE(e){const t=parseInt(e,10);return t<0?0:t>255?255:t}function NE(e){return(parseFloat(e)%360+360)%360/360}function WE(e){const t=parseFloat(e);return t<0?0:t>1?255:Math.round(255*t)}function HE(e){const t=parseFloat(e);return t<0?0:t>100?1:t/100}function YE(e){let t=function(e){let t;return"number"==typeof e?e>>>0===e&&e>=0&&e<=4294967295?e:null:(t=jE.exec(e))?parseInt(t[1]+"ff",16)>>>0:pE&&void 0!==pE[e]?pE[e]:(t=_E.exec(e))?(PE(t[1])<<24|PE(t[2])<<16|PE(t[3])<<8|255)>>>0:(t=TE.exec(e))?(PE(t[1])<<24|PE(t[2])<<16|PE(t[3])<<8|WE(t[4]))>>>0:(t=AE.exec(e))?parseInt(t[1]+t[1]+t[2]+t[2]+t[3]+t[3]+"ff",16)>>>0:(t=zE.exec(e))?parseInt(t[1],16)>>>0:(t=BE.exec(e))?parseInt(t[1]+t[1]+t[2]+t[2]+t[3]+t[3]+t[4]+t[4],16)>>>0:(t=IE.exec(e))?(255|LE(NE(t[1]),HE(t[2]),HE(t[3])))>>>0:(t=ME.exec(e))?(LE(NE(t[1]),HE(t[2]),HE(t[3]))|WE(t[4]))>>>0:null}(e);if(null===t)return e;t=t||0;return`rgba(${(4278190080&t)>>>24}, ${(16711680&t)>>>16}, ${(65280&t)>>>8}, ${(255&t)/255})`}var VE=(e,t,r)=>{if(oE.fun(e))return e;if(oE.arr(e))return VE({range:e,output:t,extrapolate:r});if(oE.str(e.output[0]))return dE(e);const n=e,o=n.output,i=n.range||[0,1],a=n.extrapolateLeft||n.extrapolate||"extend",s=n.extrapolateRight||n.extrapolate||"extend",l=n.easing||(e=>e);return e=>{const t=function(e,t){for(var r=1;r<t.length-1&&!(t[r]>=e);++r);return r-1}(e,i);return function(e,t,r,n,o,i,a,s,l){let c=l?l(e):e;if(c<t){if("identity"===a)return c;"clamp"===a&&(c=t)}if(c>r){if("identity"===s)return c;"clamp"===s&&(c=r)}if(n===o)return n;if(t===r)return e<=t?n:o;t===-1/0?c=-c:r===1/0?c-=t:c=(c-t)/(r-t);c=i(c),n===-1/0?c=-c:o===1/0?c+=n:c=c*(o-n)+n;return c}(e,i[t],i[t+1],o[t],o[t+1],l,a,s,n.map)}};var UE=1.70158,KE=1.525*UE,qE=UE+1,ZE=2*Math.PI/3,GE=2*Math.PI/4.5,QE=e=>{const t=7.5625,r=2.75;return e<1/r?t*e*e:e<2/r?t*(e-=1.5/r)*e+.75:e<2.5/r?t*(e-=2.25/r)*e+.9375:t*(e-=2.625/r)*e+.984375},XE={linear:e=>e,easeInQuad:e=>e*e,easeOutQuad:e=>1-(1-e)*(1-e),easeInOutQuad:e=>e<.5?2*e*e:1-Math.pow(-2*e+2,2)/2,easeInCubic:e=>e*e*e,easeOutCubic:e=>1-Math.pow(1-e,3),easeInOutCubic:e=>e<.5?4*e*e*e:1-Math.pow(-2*e+2,3)/2,easeInQuart:e=>e*e*e*e,easeOutQuart:e=>1-Math.pow(1-e,4),easeInOutQuart:e=>e<.5?8*e*e*e*e:1-Math.pow(-2*e+2,4)/2,easeInQuint:e=>e*e*e*e*e,easeOutQuint:e=>1-Math.pow(1-e,5),easeInOutQuint:e=>e<.5?16*e*e*e*e*e:1-Math.pow(-2*e+2,5)/2,easeInSine:e=>1-Math.cos(e*Math.PI/2),easeOutSine:e=>Math.sin(e*Math.PI/2),easeInOutSine:e=>-(Math.cos(Math.PI*e)-1)/2,easeInExpo:e=>0===e?0:Math.pow(2,10*e-10),easeOutExpo:e=>1===e?1:1-Math.pow(2,-10*e),easeInOutExpo:e=>0===e?0:1===e?1:e<.5?Math.pow(2,20*e-10)/2:(2-Math.pow(2,-20*e+10))/2,easeInCirc:e=>1-Math.sqrt(1-Math.pow(e,2)),easeOutCirc:e=>Math.sqrt(1-Math.pow(e-1,2)),easeInOutCirc:e=>e<.5?(1-Math.sqrt(1-Math.pow(2*e,2)))/2:(Math.sqrt(1-Math.pow(-2*e+2,2))+1)/2,easeInBack:e=>qE*e*e*e-UE*e*e,easeOutBack:e=>1+qE*Math.pow(e-1,3)+UE*Math.pow(e-1,2),easeInOutBack:e=>e<.5?Math.pow(2*e,2)*(7.189819*e-KE)/2:(Math.pow(2*e-2,2)*((KE+1)*(2*e-2)+KE)+2)/2,easeInElastic:e=>0===e?0:1===e?1:-Math.pow(2,10*e-10)*Math.sin((10*e-10.75)*ZE),easeOutElastic:e=>0===e?0:1===e?1:Math.pow(2,-10*e)*Math.sin((10*e-.75)*ZE)+1,easeInOutElastic:e=>0===e?0:1===e?1:e<.5?-Math.pow(2,20*e-10)*Math.sin((20*e-11.125)*GE)/2:Math.pow(2,-20*e+10)*Math.sin((20*e-11.125)*GE)/2+1,easeInBounce:e=>1-QE(1-e),easeOutBounce:QE,easeInOutBounce:e=>e<.5?(1-QE(1-2*e))/2:(1+QE(2*e-1))/2,steps:(e,t="end")=>r=>{const n=(r="end"===t?Math.min(r,.999):Math.max(r,.001))*e,o="end"===t?Math.floor(n):Math.ceil(n);return i=0,a=1,s=o/e,Math.min(Math.max(s,i),a);var i,a,s}},JE=Symbol.for("FluidValue.get"),eF=Symbol.for("FluidValue.observers"),tF=e=>Boolean(e&&e[JE]),rF=e=>e&&e[JE]?e[JE]():e,nF=e=>e[eF]||null;function oF(e,t){const r=e[eF];r&&r.forEach((e=>{!function(e,t){e.eventObserved?e.eventObserved(t):e(t)}(e,t)}))}var iF=class{constructor(e){if(!e&&!(e=this.get))throw Error("Unknown getter");aF(this,e)}},aF=(e,t)=>dF(e,JE,t);function sF(e,t){if(e[JE]){let r=e[eF];r||dF(e,eF,r=new Set),r.has(t)||(r.add(t),e.observerAdded&&e.observerAdded(r.size,t))}return t}function lF(e,t){const r=e[eF];if(r&&r.has(t)){const n=r.size-1;n?r.delete(t):e[eF]=null,e.observerRemoved&&e.observerRemoved(n,t)}}var cF,dF=(e,t,r)=>Object.defineProperty(e,t,{value:r,writable:!0,configurable:!0}),uF=/[+\-]?(?:0|[1-9]\d*)(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,hF=/(#(?:[0-9a-f]{2}){2,4}|(#[0-9a-f]{3})|(rgb|hsl)a?\((-?\d+%?[,\s]+){2,3}\s*[\d\.]+%?\))/gi,fF=new RegExp(`(${uF.source})(%|[a-z]+)`,"i"),pF=/rgba\(([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+)\)/gi,gF=/var\((--[a-zA-Z0-9-_]+),? ?([a-zA-Z0-9 ()%#.,-]+)?\)/,mF=e=>{const[t,r]=bF(e);if(!t||fE())return e;const n=window.getComputedStyle(document.documentElement).getPropertyValue(t);if(n)return n.trim();if(r&&r.startsWith("--")){const t=window.getComputedStyle(document.documentElement).getPropertyValue(r);return t||e}return r&&gF.test(r)?mF(r):r||e},bF=e=>{const t=gF.exec(e);if(!t)return[,];const[,r,n]=t;return[r,n]},vF=(e,t,r,n,o)=>`rgba(${Math.round(t)}, ${Math.round(r)}, ${Math.round(n)}, ${o})`,yF=e=>{cF||(cF=pE?new RegExp(`(${Object.keys(pE).join("|")})(?!\\w)`,"g"):/^\b$/);const t=e.output.map((e=>rF(e).replace(gF,mF).replace(hF,YE).replace(cF,YE))),r=t.map((e=>e.match(uF).map(Number))),n=r[0].map(((e,t)=>r.map((e=>{if(!(t in e))throw Error('The arity of each "output" value must be equal');return e[t]})))),o=n.map((t=>VE({...e,output:t})));return e=>{const r=!fF.test(t[0])&&t.find((e=>fF.test(e)))?.replace(uF,"");let n=0;return t[0].replace(uF,(()=>`${o[n++](e)}${r||""}`)).replace(pF,vF)}},xF="react-spring: ",wF=e=>{const t=e;let r=!1;if("function"!=typeof t)throw new TypeError(`${xF}once requires a function parameter`);return(...e)=>{r||(t(...e),r=!0)}},$F=wF(console.warn);var CF=wF(console.warn);function SF(e){return oE.str(e)&&("#"==e[0]||/\d/.test(e)||!fE()&&gF.test(e)||e in(pE||{}))}var DF=fE()?c:p;function kF(){const e=g()[1],t=(()=>{const e=s(!1);return DF((()=>(e.current=!0,()=>{e.current=!1})),[]),e})();return()=>{t.current&&e(Math.random())}}var EF=e=>c(e,FF),FF=[];function OF(e){const t=s(void 0);return c((()=>{t.current=e})),t.current}var _F=Symbol.for("Animated:node"),TF=e=>e&&e[_F],IF=(e,t)=>((e,t,r)=>Object.defineProperty(e,t,{value:r,writable:!0,configurable:!0}))(e,_F,t),MF=e=>e&&e[_F]&&e[_F].getPayload(),AF=class{constructor(){IF(this,this)}getPayload(){return this.payload||[]}},BF=class e extends AF{constructor(e){super(),this._value=e,this.done=!0,this.durationProgress=0,oE.num(this._value)&&(this.lastPosition=this._value)}static create(t){return new e(t)}getPayload(){return[this]}getValue(){return this._value}setValue(e,t){return oE.num(e)&&(this.lastPosition=e,t&&(e=Math.round(e/t)*t,this.done&&(this.lastPosition=e))),this._value!==e&&(this._value=e,!0)}reset(){const{done:e}=this;this.done=!1,oE.num(this._value)&&(this.elapsedTime=0,this.durationProgress=0,this.lastPosition=this._value,e&&(this.lastVelocity=null),this.v0=null)}},jF=class e extends BF{constructor(e){super(0),this._string=null,this._toString=VE({output:[e,e]})}static create(t){return new e(t)}getValue(){const e=this._string;return null==e?this._string=this._toString(this._value):e}setValue(e){if(oE.str(e)){if(e==this._string)return!1;this._string=e,this._value=1}else{if(!super.setValue(e))return!1;this._string=null}return!0}reset(e){e&&(this._toString=VE({output:[this.getValue(),e]})),this._value=0,super.reset()}},zF={dependencies:null},RF=class extends AF{constructor(e){super(),this.source=e,this.setValue(e)}getValue(e){const t={};return sE(this.source,((r,n)=>{var o;(o=r)&&o[_F]===o?t[n]=r.getValue(e):tF(r)?t[n]=rF(r):e||(t[n]=r)})),t}setValue(e){this.source=e,this.payload=this._makePayload(e)}reset(){this.payload&&aE(this.payload,(e=>e.reset()))}_makePayload(e){if(e){const t=new Set;return sE(e,this._addToPayload,t),Array.from(t)}}_addToPayload(e){zF.dependencies&&tF(e)&&zF.dependencies.add(e);const t=MF(e);t&&aE(t,(e=>this.add(e)))}},LF=class e extends RF{constructor(e){super(e)}static create(t){return new e(t)}getValue(){return this.source.map((e=>e.getValue()))}setValue(e){const t=this.getPayload();return e.length==t.length?t.map(((t,r)=>t.setValue(e[r]))).some(Boolean):(super.setValue(e.map(PF)),!0)}};function PF(e){return(SF(e)?jF:BF).create(e)}function NF(e){const t=TF(e);return t?t.constructor:oE.arr(e)?LF:SF(e)?jF:BF}var WF=(e,t)=>{const r=!oE.fun(e)||e.prototype&&e.prototype.isReactComponent;return u(((o,i)=>{const a=s(null),l=r&&d((e=>{a.current=function(e,t){e&&(oE.fun(e)?e(t):e.current=t);return t}(i,e)}),[i]),[u,h]=function(e,t){const r=new Set;zF.dependencies=r,e.style&&(e={...e,style:t.createAnimatedStyle(e.style)});return e=new RF(e),zF.dependencies=null,[e,r]}(o,t),f=kF(),p=()=>{const e=a.current;if(r&&!e)return;!1===(!!e&&t.applyAnimatedValues(e,u.getValue(!0)))&&f()},g=new HF(p,h),m=s(void 0);DF((()=>(m.current=g,aE(h,(e=>sF(e,g))),()=>{m.current&&(aE(m.current.deps,(e=>lF(e,m.current))),Rk.cancel(m.current.update))}))),c(p,[]),EF((()=>()=>{const e=m.current;aE(e.deps,(t=>lF(t,e)))}));const b=t.getComponentProps(u.getValue());return n.createElement(e,{...b,ref:l})}))},HF=class{constructor(e,t){this.update=e,this.deps=t}eventObserved(e){"change"==e.type&&Rk.write(this.update)}};var YF=Symbol.for("AnimatedComponent"),VF=e=>oE.str(e)?e:e&&oE.str(e.displayName)?e.displayName:oE.fun(e)&&e.name||null;function UF(e,...t){return oE.fun(e)?e(...t):e}var KF=(e,t)=>!0===e||!!(t&&e&&(oE.fun(e)?e(t):lE(e).includes(t))),qF=(e,t)=>oE.obj(e)?t&&e[t]:e,ZF=(e,t)=>!0===e.default?e[t]:e.default?e.default[t]:void 0,GF=e=>e,QF=(e,t=GF)=>{let r=XF;e.default&&!0!==e.default&&(e=e.default,r=Object.keys(e));const n={};for(const o of r){const r=t(e[o],o);oE.und(r)||(n[o]=r)}return n},XF=["config","onProps","onStart","onChange","onPause","onResume","onRest"],JF={config:1,from:1,to:1,ref:1,loop:1,reset:1,pause:1,cancel:1,reverse:1,immediate:1,default:1,delay:1,onProps:1,onStart:1,onChange:1,onPause:1,onResume:1,onRest:1,onResolve:1,items:1,trail:1,sort:1,expires:1,initial:1,enter:1,update:1,leave:1,children:1,onDestroyed:1,keys:1,callId:1,parentId:1};function eO(e){const t=function(e){const t={};let r=0;if(sE(e,((e,n)=>{JF[n]||(t[n]=e,r++)})),r)return t}(e);if(t){const r={to:t};return sE(e,((e,n)=>n in t||(r[n]=e))),r}return{...e}}function tO(e){return e=rF(e),oE.arr(e)?e.map(tO):SF(e)?rE.createStringInterpolator({range:[0,1],output:[e,e]})(1):e}function rO(e){return oE.fun(e)||oE.arr(e)&&oE.obj(e[0])}var nO={tension:170,friction:26,mass:1,damping:1,easing:XE.linear,clamp:!1},oO=class{constructor(){this.velocity=0,Object.assign(this,nO)}};function iO(e,t){if(oE.und(t.decay)){const r=!oE.und(t.tension)||!oE.und(t.friction);!r&&oE.und(t.frequency)&&oE.und(t.damping)&&oE.und(t.mass)||(e.duration=void 0,e.decay=void 0),r&&(e.frequency=void 0)}else e.duration=void 0}var aO=[],sO=class{constructor(){this.changed=!1,this.values=aO,this.toValues=null,this.fromValues=aO,this.config=new oO,this.immediate=!1}};function lO(e,{key:t,props:r,defaultProps:n,state:o,actions:i}){return new Promise(((a,s)=>{let l,c,d=KF(r.cancel??n?.cancel,t);if(d)f();else{oE.und(r.pause)||(o.paused=KF(r.pause,t));let e=n?.pause;!0!==e&&(e=o.paused||KF(e,t)),l=UF(r.delay||0,t),e?(o.resumeQueue.add(h),i.pause()):(i.resume(),h())}function u(){o.resumeQueue.add(h),o.timeouts.delete(c),c.cancel(),l=c.time-Rk.now()}function h(){l>0&&!rE.skipAnimation?(o.delayed=!0,c=Rk.setTimeout(f,l),o.pauseQueue.add(u),o.timeouts.add(c)):f()}function f(){o.delayed&&(o.delayed=!1),o.pauseQueue.delete(u),o.timeouts.delete(c),e<=(o.cancelId||0)&&(d=!0);try{i.start({...r,callId:e,cancel:d},a)}catch(e){s(e)}}}))}var cO=(e,t)=>1==t.length?t[0]:t.some((e=>e.cancelled))?hO(e.get()):t.every((e=>e.noop))?dO(e.get()):uO(e.get(),t.every((e=>e.finished))),dO=e=>({value:e,noop:!0,finished:!0,cancelled:!1}),uO=(e,t,r=!1)=>({value:e,finished:t,cancelled:r}),hO=e=>({value:e,cancelled:!0,finished:!1});function fO(e,t,r,n){const{callId:o,parentId:i,onRest:a}=t,{asyncTo:s,promise:l}=r;return i||e!==s||t.reset?r.promise=(async()=>{r.asyncId=o,r.asyncTo=e;const c=QF(t,((e,t)=>"onRest"===t?void 0:e));let d,u;const h=new Promise(((e,t)=>(d=e,u=t))),f=e=>{const t=o<=(r.cancelId||0)&&hO(n)||o!==r.asyncId&&uO(n,!1);if(t)throw e.result=t,u(e),e},p=(e,t)=>{const i=new gO,a=new mO;return(async()=>{if(rE.skipAnimation)throw pO(r),a.result=uO(n,!1),u(a),a;f(i);const s=oE.obj(e)?{...e}:{...t,to:e};s.parentId=o,sE(c,((e,t)=>{oE.und(s[t])&&(s[t]=e)}));const l=await n.start(s);return f(i),r.paused&&await new Promise((e=>{r.resumeQueue.add(e)})),l})()};let g;if(rE.skipAnimation)return pO(r),uO(n,!1);try{let t;t=oE.arr(e)?(async e=>{for(const t of e)await p(t)})(e):Promise.resolve(e(p,n.stop.bind(n))),await Promise.all([t.then(d),h]),g=uO(n.get(),!0,!1)}catch(e){if(e instanceof gO)g=e.result;else{if(!(e instanceof mO))throw e;g=e.result}}finally{o==r.asyncId&&(r.asyncId=i,r.asyncTo=i?s:void 0,r.promise=i?l:void 0)}return oE.fun(a)&&Rk.batchedUpdates((()=>{a(g,n,n.item)})),g})():l}function pO(e,t){cE(e.timeouts,(e=>e.cancel())),e.pauseQueue.clear(),e.resumeQueue.clear(),e.asyncId=e.asyncTo=e.promise=void 0,t&&(e.cancelId=t)}var gO=class extends Error{constructor(){super("An async animation has been interrupted. You see this error because you forgot to use `await` or `.catch(...)` on its returned promise.")}},mO=class extends Error{constructor(){super("SkipAnimationSignal")}},bO=e=>e instanceof yO,vO=1,yO=class extends iF{constructor(){super(...arguments),this.id=vO++,this._priority=0}get priority(){return this._priority}set priority(e){this._priority!=e&&(this._priority=e,this._onPriorityChange(e))}get(){const e=TF(this);return e&&e.getValue()}to(...e){return rE.to(this,e)}interpolate(...e){return $F(`${xF}The "interpolate" function is deprecated in v9 (use "to" instead)`),rE.to(this,e)}toJSON(){return this.get()}observerAdded(e){1==e&&this._attach()}observerRemoved(e){0==e&&this._detach()}_attach(){}_detach(){}_onChange(e,t=!1){oF(this,{type:"change",parent:this,value:e,idle:t})}_onPriorityChange(e){this.idle||$E.sort(this),oF(this,{type:"priority",parent:this,priority:e})}},xO=Symbol.for("SpringPhase"),wO=e=>(1&e[xO])>0,$O=e=>(2&e[xO])>0,CO=e=>(4&e[xO])>0,SO=(e,t)=>t?e[xO]|=3:e[xO]&=-3,DO=(e,t)=>t?e[xO]|=4:e[xO]&=-5,kO=class extends yO{constructor(e,t){if(super(),this.animation=new sO,this.defaultProps={},this._state={paused:!1,delayed:!1,pauseQueue:new Set,resumeQueue:new Set,timeouts:new Set},this._pendingCalls=new Set,this._lastCallId=0,this._lastToId=0,this._memoizedDuration=0,!oE.und(e)||!oE.und(t)){const r=oE.obj(e)?{...e}:{...t,from:e};oE.und(r.default)&&(r.default=!0),this.start(r)}}get idle(){return!($O(this)||this._state.asyncTo)||CO(this)}get goal(){return rF(this.animation.to)}get velocity(){const e=TF(this);return e instanceof BF?e.lastVelocity||0:e.getPayload().map((e=>e.lastVelocity||0))}get hasAnimated(){return wO(this)}get isAnimating(){return $O(this)}get isPaused(){return CO(this)}get isDelayed(){return this._state.delayed}advance(e){let t=!0,r=!1;const n=this.animation;let{toValues:o}=n;const{config:i}=n,a=MF(n.to);!a&&tF(n.to)&&(o=lE(rF(n.to))),n.values.forEach(((s,l)=>{if(s.done)return;const c=s.constructor==jF?1:a?a[l].lastPosition:o[l];let d=n.immediate,u=c;if(!d){if(u=s.lastPosition,i.tension<=0)return void(s.done=!0);let t=s.elapsedTime+=e;const r=n.fromValues[l],o=null!=s.v0?s.v0:s.v0=oE.arr(i.velocity)?i.velocity[l]:i.velocity;let a;const h=i.precision||(r==c?.005:Math.min(1,.001*Math.abs(c-r)));if(oE.und(i.duration))if(i.decay){const e=!0===i.decay?.998:i.decay,n=Math.exp(-(1-e)*t);u=r+o/(1-e)*(1-n),d=Math.abs(s.lastPosition-u)<=h,a=o*n}else{a=null==s.lastVelocity?o:s.lastVelocity;const t=i.restVelocity||h/10,n=i.clamp?0:i.bounce,l=!oE.und(n),f=r==c?s.v0>0:r<c;let p,g=!1;const m=1,b=Math.ceil(e/m);for(let e=0;e<b&&(p=Math.abs(a)>t,p||(d=Math.abs(c-u)<=h,!d));++e){l&&(g=u==c||u>c==f,g&&(a=-a*n,u=c));a+=(1e-6*-i.tension*(u-c)+.001*-i.friction*a)/i.mass*m,u+=a*m}}else{let n=1;i.duration>0&&(this._memoizedDuration!==i.duration&&(this._memoizedDuration=i.duration,s.durationProgress>0&&(s.elapsedTime=i.duration*s.durationProgress,t=s.elapsedTime+=e)),n=(i.progress||0)+t/this._memoizedDuration,n=n>1?1:n<0?0:n,s.durationProgress=n),u=r+i.easing(n)*(c-r),a=(u-s.lastPosition)/e,d=1==n}s.lastVelocity=a,Number.isNaN(u)&&(console.warn("Got NaN while animating:",this),d=!0)}a&&!a[l].done&&(d=!1),d?s.done=!0:t=!1,s.setValue(u,i.round)&&(r=!0)}));const s=TF(this),l=s.getValue();if(t){const e=rF(n.to);l===e&&!r||i.decay?r&&i.decay&&this._onChange(l):(s.setValue(e),this._onChange(e)),this._stop()}else r&&this._onChange(l)}set(e){return Rk.batchedUpdates((()=>{this._stop(),this._focus(e),this._set(e)})),this}pause(){this._update({pause:!0})}resume(){this._update({pause:!1})}finish(){if($O(this)){const{to:e,config:t}=this.animation;Rk.batchedUpdates((()=>{this._onStart(),t.decay||this._set(e,!1),this._stop()}))}return this}update(e){return(this.queue||(this.queue=[])).push(e),this}start(e,t){let r;return oE.und(e)?(r=this.queue||[],this.queue=[]):r=[oE.obj(e)?e:{...t,to:e}],Promise.all(r.map((e=>this._update(e)))).then((e=>cO(this,e)))}stop(e){const{to:t}=this.animation;return this._focus(this.get()),pO(this._state,e&&this._lastCallId),Rk.batchedUpdates((()=>this._stop(t,e))),this}reset(){this._update({reset:!0})}eventObserved(e){"change"==e.type?this._start():"priority"==e.type&&(this.priority=e.priority+1)}_prepareNode(e){const t=this.key||"";let{to:r,from:n}=e;r=oE.obj(r)?r[t]:r,(null==r||rO(r))&&(r=void 0),n=oE.obj(n)?n[t]:n,null==n&&(n=void 0);const o={to:r,from:n};return wO(this)||(e.reverse&&([r,n]=[n,r]),n=rF(n),oE.und(n)?TF(this)||this._set(r):this._set(n)),o}_update({...e},t){const{key:r,defaultProps:n}=this;e.default&&Object.assign(n,QF(e,((e,t)=>/^on/.test(t)?qF(e,r):e))),MO(this,e,"onProps"),AO(this,"onProps",e,this);const o=this._prepareNode(e);if(Object.isFrozen(this))throw Error("Cannot animate a `SpringValue` object that is frozen. Did you forget to pass your component to `animated(...)` before animating its props?");const i=this._state;return lO(++this._lastCallId,{key:r,props:e,defaultProps:n,state:i,actions:{pause:()=>{CO(this)||(DO(this,!0),hE(i.pauseQueue),AO(this,"onPause",uO(this,EO(this,this.animation.to)),this))},resume:()=>{CO(this)&&(DO(this,!1),$O(this)&&this._resume(),hE(i.resumeQueue),AO(this,"onResume",uO(this,EO(this,this.animation.to)),this))},start:this._merge.bind(this,o)}}).then((r=>{if(e.loop&&r.finished&&(!t||!r.noop)){const t=FO(e);if(t)return this._update(t,!0)}return r}))}_merge(e,t,r){if(t.cancel)return this.stop(!0),r(hO(this));const n=!oE.und(e.to),o=!oE.und(e.from);if(n||o){if(!(t.callId>this._lastToId))return r(hO(this));this._lastToId=t.callId}const{key:i,defaultProps:a,animation:s}=this,{to:l,from:c}=s;let{to:d=l,from:u=c}=e;!o||n||t.default&&!oE.und(d)||(d=u),t.reverse&&([d,u]=[u,d]);const h=!iE(u,c);h&&(s.from=u),u=rF(u);const f=!iE(d,l);f&&this._focus(d);const p=rO(t.to),{config:g}=s,{decay:m,velocity:b}=g;(n||o)&&(g.velocity=0),t.config&&!p&&function(e,t,r){r&&(iO(r={...r},t),t={...r,...t}),iO(e,t),Object.assign(e,t);for(const t in nO)null==e[t]&&(e[t]=nO[t]);let{frequency:n,damping:o}=e;const{mass:i}=e;oE.und(n)||(n<.01&&(n=.01),o<0&&(o=0),e.tension=Math.pow(2*Math.PI/n,2)*i,e.friction=4*Math.PI*o*i/n)}(g,UF(t.config,i),t.config!==a.config?UF(a.config,i):void 0);let v=TF(this);if(!v||oE.und(d))return r(uO(this,!0));const y=oE.und(t.reset)?o&&!t.default:!oE.und(u)&&KF(t.reset,i),x=y?u:this.get(),w=tO(d),$=oE.num(w)||oE.arr(w)||SF(w),C=!p&&(!$||KF(a.immediate||t.immediate,i));if(f){const e=NF(d);if(e!==v.constructor){if(!C)throw Error(`Cannot animate between ${v.constructor.name} and ${e.name}, as the "to" prop suggests`);v=this._set(w)}}const S=v.constructor;let D=tF(d),k=!1;if(!D){const e=y||!wO(this)&&h;(f||e)&&(k=iE(tO(x),w),D=!k),(iE(s.immediate,C)||C)&&iE(g.decay,m)&&iE(g.velocity,b)||(D=!0)}if(k&&$O(this)&&(s.changed&&!y?D=!0:D||this._stop(l)),!p&&((D||tF(l))&&(s.values=v.getPayload(),s.toValues=tF(d)?null:S==jF?[1]:lE(w)),s.immediate!=C&&(s.immediate=C,C||y||this._set(l)),D)){const{onRest:e}=s;aE(IO,(e=>MO(this,t,e)));const n=uO(this,EO(this,l));hE(this._pendingCalls,n),this._pendingCalls.add(r),s.changed&&Rk.batchedUpdates((()=>{s.changed=!y,e?.(n,this),y?UF(a.onRest,n):s.onStart?.(n,this)}))}y&&this._set(x),p?r(fO(t.to,t,this._state,this)):D?this._start():$O(this)&&!f?this._pendingCalls.add(r):r(dO(x))}_focus(e){const t=this.animation;e!==t.to&&(nF(this)&&this._detach(),t.to=e,nF(this)&&this._attach())}_attach(){let e=0;const{to:t}=this.animation;tF(t)&&(sF(t,this),bO(t)&&(e=t.priority+1)),this.priority=e}_detach(){const{to:e}=this.animation;tF(e)&&lF(e,this)}_set(e,t=!0){const r=rF(e);if(!oE.und(r)){const e=TF(this);if(!e||!iE(r,e.getValue())){const n=NF(r);e&&e.constructor==n?e.setValue(r):IF(this,n.create(r)),e&&Rk.batchedUpdates((()=>{this._onChange(r,t)}))}}return TF(this)}_onStart(){const e=this.animation;e.changed||(e.changed=!0,AO(this,"onStart",uO(this,EO(this,e.to)),this))}_onChange(e,t){t||(this._onStart(),UF(this.animation.onChange,e,this)),UF(this.defaultProps.onChange,e,this),super._onChange(e,t)}_start(){const e=this.animation;TF(this).reset(rF(e.to)),e.immediate||(e.fromValues=e.values.map((e=>e.lastPosition))),$O(this)||(SO(this,!0),CO(this)||this._resume())}_resume(){rE.skipAnimation?this.finish():$E.start(this)}_stop(e,t){if($O(this)){SO(this,!1);const r=this.animation;aE(r.values,(e=>{e.done=!0})),r.toValues&&(r.onChange=r.onPause=r.onResume=void 0),oF(this,{type:"idle",parent:this});const n=t?hO(this.get()):uO(this.get(),EO(this,e??r.to));hE(this._pendingCalls,n),r.changed&&(r.changed=!1,AO(this,"onRest",n,this))}}};function EO(e,t){const r=tO(t);return iE(tO(e.get()),r)}function FO(e,t=e.loop,r=e.to){const n=UF(t);if(n){const o=!0!==n&&eO(n),i=(o||e).reverse,a=!o||o.reset;return OO({...e,loop:t,default:!1,pause:void 0,to:!i||rO(r)?r:void 0,from:a?e.from:void 0,reset:a,...o})}}function OO(e){const{to:t,from:r}=e=eO(e),n=new Set;return oE.obj(t)&&TO(t,n),oE.obj(r)&&TO(r,n),e.keys=n.size?Array.from(n):null,e}function _O(e){const t=OO(e);return oE.und(t.default)&&(t.default=QF(t)),t}function TO(e,t){sE(e,((e,r)=>null!=e&&t.add(r)))}var IO=["onStart","onRest","onChange","onPause","onResume"];function MO(e,t,r){e.animation[r]=t[r]!==ZF(t,r)?qF(t[r],e.key):void 0}function AO(e,t,...r){e.animation[t]?.(...r),e.defaultProps[t]?.(...r)}var BO=["onStart","onChange","onRest"],jO=1,zO=class{constructor(e,t){this.id=jO++,this.springs={},this.queue=[],this._lastAsyncId=0,this._active=new Set,this._changed=new Set,this._started=!1,this._state={paused:!1,pauseQueue:new Set,resumeQueue:new Set,timeouts:new Set},this._events={onStart:new Map,onChange:new Map,onRest:new Map},this._onFrame=this._onFrame.bind(this),t&&(this._flush=t),e&&this.start({default:!0,...e})}get idle(){return!this._state.asyncTo&&Object.values(this.springs).every((e=>e.idle&&!e.isDelayed&&!e.isPaused))}get item(){return this._item}set item(e){this._item=e}get(){const e={};return this.each(((t,r)=>e[r]=t.get())),e}set(e){for(const t in e){const r=e[t];oE.und(r)||this.springs[t].set(r)}}update(e){return e&&this.queue.push(OO(e)),this}start(e){let{queue:t}=this;return e?t=lE(e).map(OO):this.queue=[],this._flush?this._flush(this,t):(YO(this,t),RO(this,t))}stop(e,t){if(e!==!!e&&(t=e),t){const r=this.springs;aE(lE(t),(t=>r[t].stop(!!e)))}else pO(this._state,this._lastAsyncId),this.each((t=>t.stop(!!e)));return this}pause(e){if(oE.und(e))this.start({pause:!0});else{const t=this.springs;aE(lE(e),(e=>t[e].pause()))}return this}resume(e){if(oE.und(e))this.start({pause:!1});else{const t=this.springs;aE(lE(e),(e=>t[e].resume()))}return this}each(e){sE(this.springs,e)}_onFrame(){const{onStart:e,onChange:t,onRest:r}=this._events,n=this._active.size>0,o=this._changed.size>0;(n&&!this._started||o&&!this._started)&&(this._started=!0,cE(e,(([e,t])=>{t.value=this.get(),e(t,this,this._item)})));const i=!n&&this._started,a=o||i&&r.size?this.get():null;o&&t.size&&cE(t,(([e,t])=>{t.value=a,e(t,this,this._item)})),i&&(this._started=!1,cE(r,(([e,t])=>{t.value=a,e(t,this,this._item)})))}eventObserved(e){if("change"==e.type)this._changed.add(e.parent),e.idle||this._active.add(e.parent);else{if("idle"!=e.type)return;this._active.delete(e.parent)}Rk.onFrame(this._onFrame)}};function RO(e,t){return Promise.all(t.map((t=>LO(e,t)))).then((t=>cO(e,t)))}async function LO(e,t,r){const{keys:n,to:o,from:i,loop:a,onRest:s,onResolve:l}=t,c=oE.obj(t.default)&&t.default;a&&(t.loop=!1),!1===o&&(t.to=null),!1===i&&(t.from=null);const d=oE.arr(o)||oE.fun(o)?o:void 0;d?(t.to=void 0,t.onRest=void 0,c&&(c.onRest=void 0)):aE(BO,(r=>{const n=t[r];if(oE.fun(n)){const o=e._events[r];t[r]=({finished:e,cancelled:t})=>{const r=o.get(n);r?(e||(r.finished=!1),t&&(r.cancelled=!0)):o.set(n,{value:null,finished:e||!1,cancelled:t||!1})},c&&(c[r]=t[r])}}));const u=e._state;t.pause===!u.paused?(u.paused=t.pause,hE(t.pause?u.pauseQueue:u.resumeQueue)):u.paused&&(t.pause=!0);const h=(n||Object.keys(e.springs)).map((r=>e.springs[r].start(t))),f=!0===t.cancel||!0===ZF(t,"cancel");(d||f&&u.asyncId)&&h.push(lO(++e._lastAsyncId,{props:t,state:u,actions:{pause:nE,resume:nE,start(t,r){f?(pO(u,e._lastAsyncId),r(hO(e))):(t.onRest=s,r(fO(d,t,u,e)))}}})),u.paused&&await new Promise((e=>{u.resumeQueue.add(e)}));const p=cO(e,await Promise.all(h));if(a&&p.finished&&(!r||!p.noop)){const r=FO(t,a,o);if(r)return YO(e,[r]),LO(e,r,!0)}return l&&Rk.batchedUpdates((()=>l(p,e,e.item))),p}function PO(e,t){const r={...e.springs};return t&&aE(lE(t),(e=>{oE.und(e.keys)&&(e=OO(e)),oE.obj(e.to)||(e={...e,to:void 0}),HO(r,e,(e=>WO(e)))})),NO(e,r),r}function NO(e,t){sE(t,((t,r)=>{e.springs[r]||(e.springs[r]=t,sF(t,e))}))}function WO(e,t){const r=new kO;return r.key=e,t&&sF(r,t),r}function HO(e,t,r){t.keys&&aE(t.keys,(n=>{(e[n]||(e[n]=r(n)))._prepareNode(t)}))}function YO(e,t){aE(t,(t=>{HO(e.springs,t,(t=>WO(t,e)))}))}var VO=n.createContext({pause:!1,immediate:!1}),UO=()=>{const e=[],t=function(t){CF(`${xF}Directly calling start instead of using the api object is deprecated in v9 (use ".start" instead), this will be removed in later 0.X.0 versions`);const n=[];return aE(e,((e,o)=>{if(oE.und(t))n.push(e.start());else{const i=r(t,e,o);i&&n.push(e.start(i))}})),n};t.current=e,t.add=function(t){e.includes(t)||e.push(t)},t.delete=function(t){const r=e.indexOf(t);~r&&e.splice(r,1)},t.pause=function(){return aE(e,(e=>e.pause(...arguments))),this},t.resume=function(){return aE(e,(e=>e.resume(...arguments))),this},t.set=function(t){aE(e,((e,r)=>{const n=oE.fun(t)?t(r,e):t;n&&e.set(n)}))},t.start=function(t){const r=[];return aE(e,((e,n)=>{if(oE.und(t))r.push(e.start());else{const o=this._getProps(t,e,n);o&&r.push(e.start(o))}})),r},t.stop=function(){return aE(e,(e=>e.stop(...arguments))),this},t.update=function(t){return aE(e,((e,r)=>e.update(this._getProps(t,e,r)))),this};const r=function(e,t,r){return oE.fun(e)?e(r,t):e};return t._getProps=r,t};function KO(e,t){const r=oE.fun(e),[[n],o]=function(e,t,r){const n=oE.fun(t)&&t;n&&!r&&(r=[]);const o=a((()=>n||3==arguments.length?UO():void 0),[]),i=s(0),l=kF(),c=a((()=>({ctrls:[],queue:[],flush(e,t){const r=PO(e,t),n=i.current>0&&!c.queue.length&&!Object.keys(r).some((t=>!e.springs[t]));return n?RO(e,t):new Promise((n=>{NO(e,r),c.queue.push((()=>{n(RO(e,t))})),l()}))}})),[]),d=s([...c.ctrls]),u=s([]),h=OF(e)||0;function f(e,r){for(let o=e;o<r;o++){const e=d.current[o]||(d.current[o]=new zO(null,c.flush)),r=n?n(o,e):t[o];r&&(u.current[o]=_O(r))}}a((()=>{aE(d.current.slice(e,h),(e=>{!function(e,t){e.ref?.delete(e),t?.delete(e)}(e,o),e.stop(!0)})),d.current.length=e,f(h,e)}),[e]),a((()=>{f(0,Math.min(h,e))}),r);const p=d.current.map(((e,t)=>PO(e,u.current[t]))),g=b(VO),m=OF(g),v=g!==m&&function(e){for(const t in e)return!0;return!1}(g);DF((()=>{i.current++,c.ctrls=d.current;const{queue:e}=c;e.length&&(c.queue=[],aE(e,(e=>e()))),aE(d.current,((e,t)=>{o?.add(e),v&&e.start({default:g});const r=u.current[t];r&&(function(e,t){t&&e.ref!==t&&(e.ref?.delete(e),t.add(e),e.ref=t)}(e,r.ref),e.ref?e.queue.push(r):e.start(r))}))})),EF((()=>()=>{aE(c.ctrls,(e=>e.stop(!0)))}));const y=p.map((e=>({...e})));return o?[y,o]:y}(1,r?e:[e],r?t||[]:t);return r||2==arguments.length?[n,o]:n}var qO=class extends yO{constructor(e,t){super(),this.source=e,this.idle=!0,this._active=new Set,this.calc=VE(...t);const r=this._get(),n=NF(r);IF(this,n.create(r))}advance(e){const t=this._get();iE(t,this.get())||(TF(this).setValue(t),this._onChange(t,this.idle)),!this.idle&&GO(this._active)&&QO(this)}_get(){const e=oE.arr(this.source)?this.source.map(rF):lE(rF(this.source));return this.calc(...e)}_start(){this.idle&&!GO(this._active)&&(this.idle=!1,aE(MF(this),(e=>{e.done=!1})),rE.skipAnimation?(Rk.batchedUpdates((()=>this.advance())),QO(this)):$E.start(this))}_attach(){let e=1;aE(lE(this.source),(t=>{tF(t)&&sF(t,this),bO(t)&&(t.idle||this._active.add(t),e=Math.max(e,t.priority+1))})),this.priority=e,this._start()}_detach(){aE(lE(this.source),(e=>{tF(e)&&lF(e,this)})),this._active.clear(),QO(this)}eventObserved(e){"change"==e.type?e.idle?this.advance():(this._active.add(e.parent),this._start()):"idle"==e.type?this._active.delete(e.parent):"priority"==e.type&&(this.priority=lE(this.source).reduce(((e,t)=>Math.max(e,(bO(t)?t.priority:0)+1)),0))}};function ZO(e){return!1!==e.idle}function GO(e){return!e.size||Array.from(e).every(ZO)}function QO(e){e.idle||(e.idle=!0,aE(MF(e),(e=>{e.done=!0})),oF(e,{type:"idle",parent:e}))}rE.assign({createStringInterpolator:yF,to:(e,t)=>new qO(e,t)});var XO=/^--/;function JO(e,t){return null==t||"boolean"==typeof t||""===t?"":"number"!=typeof t||0===t||XO.test(e)||t_.hasOwnProperty(e)&&t_[e]?(""+t).trim():t+"px"}var e_={};var t_={animationIterationCount:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},r_=["Webkit","Ms","Moz","O"];t_=Object.keys(t_).reduce(((e,t)=>(r_.forEach((r=>e[((e,t)=>e+t.charAt(0).toUpperCase()+t.substring(1))(r,t)]=e[t])),e)),t_);var n_=/^(matrix|translate|scale|rotate|skew)/,o_=/^(translate)/,i_=/^(rotate|skew)/,a_=(e,t)=>oE.num(e)&&0!==e?e+t:e,s_=(e,t)=>oE.arr(e)?e.every((e=>s_(e,t))):oE.num(e)?e===t:parseFloat(e)===t,l_=class extends RF{constructor({x:e,y:t,z:r,...n}){const o=[],i=[];(e||t||r)&&(o.push([e||0,t||0,r||0]),i.push((e=>[`translate3d(${e.map((e=>a_(e,"px"))).join(",")})`,s_(e,0)]))),sE(n,((e,t)=>{if("transform"===t)o.push([e||""]),i.push((e=>[e,""===e]));else if(n_.test(t)){if(delete n[t],oE.und(e))return;const r=o_.test(t)?"px":i_.test(t)?"deg":"";o.push(lE(e)),i.push("rotate3d"===t?([e,t,n,o])=>[`rotate3d(${e},${t},${n},${a_(o,r)})`,s_(o,0)]:e=>[`${t}(${e.map((e=>a_(e,r))).join(",")})`,s_(e,t.startsWith("scale")?1:0)])}})),o.length&&(n.transform=new c_(o,i)),super(n)}},c_=class extends iF{constructor(e,t){super(),this.inputs=e,this.transforms=t,this._value=null}get(){return this._value||(this._value=this._get())}_get(){let e="",t=!0;return aE(this.inputs,((r,n)=>{const o=rF(r[0]),[i,a]=this.transforms[n](oE.arr(o)?o:r.map(rF));e+=" "+i,t=t&&a})),t?"none":e}observerAdded(e){1==e&&aE(this.inputs,(e=>aE(e,(e=>tF(e)&&sF(e,this)))))}observerRemoved(e){0==e&&aE(this.inputs,(e=>aE(e,(e=>tF(e)&&lF(e,this)))))}eventObserved(e){"change"==e.type&&(this._value=null),oF(this,e)}};rE.assign({batchedUpdates:j,createStringInterpolator:yF,colors:{transparent:0,aliceblue:4042850303,antiquewhite:4209760255,aqua:16777215,aquamarine:2147472639,azure:4043309055,beige:4126530815,bisque:4293182719,black:255,blanchedalmond:4293643775,blue:65535,blueviolet:2318131967,brown:2771004159,burlywood:3736635391,burntsienna:3934150143,cadetblue:1604231423,chartreuse:2147418367,chocolate:3530104575,coral:4286533887,cornflowerblue:1687547391,cornsilk:4294499583,crimson:3692313855,cyan:16777215,darkblue:35839,darkcyan:9145343,darkgoldenrod:3095792639,darkgray:2846468607,darkgreen:6553855,darkgrey:2846468607,darkkhaki:3182914559,darkmagenta:2332068863,darkolivegreen:1433087999,darkorange:4287365375,darkorchid:2570243327,darkred:2332033279,darksalmon:3918953215,darkseagreen:2411499519,darkslateblue:1211993087,darkslategray:793726975,darkslategrey:793726975,darkturquoise:13554175,darkviolet:2483082239,deeppink:4279538687,deepskyblue:12582911,dimgray:1768516095,dimgrey:1768516095,dodgerblue:512819199,firebrick:2988581631,floralwhite:4294635775,forestgreen:579543807,fuchsia:4278255615,gainsboro:3705462015,ghostwhite:4177068031,gold:4292280575,goldenrod:3668254975,gray:2155905279,green:8388863,greenyellow:2919182335,grey:2155905279,honeydew:4043305215,hotpink:4285117695,indianred:3445382399,indigo:1258324735,ivory:4294963455,khaki:4041641215,lavender:3873897215,lavenderblush:4293981695,lawngreen:2096890111,lemonchiffon:4294626815,lightblue:2916673279,lightcoral:4034953471,lightcyan:3774873599,lightgoldenrodyellow:4210742015,lightgray:3553874943,lightgreen:2431553791,lightgrey:3553874943,lightpink:4290167295,lightsalmon:4288707327,lightseagreen:548580095,lightskyblue:2278488831,lightslategray:2005441023,lightslategrey:2005441023,lightsteelblue:2965692159,lightyellow:4294959359,lime:16711935,limegreen:852308735,linen:4210091775,magenta:4278255615,maroon:2147483903,mediumaquamarine:1724754687,mediumblue:52735,mediumorchid:3126187007,mediumpurple:2473647103,mediumseagreen:1018393087,mediumslateblue:2070474495,mediumspringgreen:16423679,mediumturquoise:1221709055,mediumvioletred:3340076543,midnightblue:421097727,mintcream:4127193855,mistyrose:4293190143,moccasin:4293178879,navajowhite:4292783615,navy:33023,oldlace:4260751103,olive:2155872511,olivedrab:1804477439,orange:4289003775,orangered:4282712319,orchid:3664828159,palegoldenrod:4008225535,palegreen:2566625535,paleturquoise:2951671551,palevioletred:3681588223,papayawhip:4293907967,peachpuff:4292524543,peru:3448061951,pink:4290825215,plum:3718307327,powderblue:2967529215,purple:2147516671,rebeccapurple:1714657791,red:4278190335,rosybrown:3163525119,royalblue:1097458175,saddlebrown:2336560127,salmon:4202722047,sandybrown:4104413439,seagreen:780883967,seashell:4294307583,sienna:2689740287,silver:3233857791,skyblue:2278484991,slateblue:1784335871,slategray:1887473919,slategrey:1887473919,snow:4294638335,springgreen:16744447,steelblue:1182971135,tan:3535047935,teal:8421631,thistle:3636451583,tomato:4284696575,turquoise:1088475391,violet:4001558271,wheat:4125012991,white:4294967295,whitesmoke:4126537215,yellow:4294902015,yellowgreen:2597139199}});var d_=((e,{applyAnimatedValues:t=()=>!1,createAnimatedStyle:r=e=>new RF(e),getComponentProps:n=e=>e}={})=>{const o={applyAnimatedValues:t,createAnimatedStyle:r,getComponentProps:n},i=e=>{const t=VF(e)||"Anonymous";return(e=oE.str(e)?i[e]||(i[e]=WF(e,o)):e[YF]||(e[YF]=WF(e,o))).displayName=`Animated(${t})`,e};return sE(e,((t,r)=>{oE.arr(e)&&(r=VF(t)),i[r]=i(t)})),{animated:i}})(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"],{applyAnimatedValues:function(e,t){if(!e.nodeType||!e.setAttribute)return!1;const r="filter"===e.nodeName||e.parentNode&&"filter"===e.parentNode.nodeName,{className:n,style:o,children:i,scrollTop:a,scrollLeft:s,viewBox:l,...c}=t,d=Object.values(c),u=Object.keys(c).map((t=>r||e.hasAttribute(t)?t:e_[t]||(e_[t]=t.replace(/([A-Z])/g,(e=>"-"+e.toLowerCase())))));void 0!==i&&(e.textContent=i);for(const t in o)if(o.hasOwnProperty(t)){const r=JO(t,o[t]);XO.test(t)?e.style.setProperty(t,r):e.style[t]=r}u.forEach(((t,r)=>{e.setAttribute(t,d[r])})),void 0!==n&&(e.className=n),void 0!==a&&(e.scrollTop=a),void 0!==s&&(e.scrollLeft=s),void 0!==l&&e.setAttribute("viewBox",l)},createAnimatedStyle:e=>new l_(e),getComponentProps:({scrollTop:e,scrollLeft:t,...r})=>r}),u_=d_.animated;const h_=F.div`
    padding: ${aa["spacing-8"]} ${aa["spacing-16"]};
    display: flex;

    ${e=>{let t,r;switch(e.$type){case"error":t=ra["bg-error"](e),r=ra["border-error"](e);break;case"success":t=ra["bg-success"](e),r=ra["border-success"](e);break;case"warning":default:t=ra["bg-warning"](e),r=ra["border-warning"](e);break;case"info":t=ra["bg-info"](e),r=ra["border-info"](e);break;case"description":t=ra["bg-strong"](e),r=ra["border-strong"](e)}return O`
            background: ${t};
            border-left: ${ia["width-020"]} ${ia.solid}
                ${r};
        `}}
`,f_=F.div`
    display: flex;
    align-items: center;
    height: 1lh;
    margin-right: ${aa["spacing-8"]};

    ${e=>{let t;const r="small"===e.$sizeType?"1.25rem":"1.5rem";switch(e.$type){case"error":t=ra["icon-error"](e);break;case"success":t=ra["icon-success"](e);break;case"warning":default:t=ra["icon-warning"](e);break;case"info":t=ra["icon-info"](e);break;case"description":t=ra["icon-subtle"](e)}return O`
            svg {
                color: ${t};
                width: ${r};
                height: ${r};
            }
        `}}
`,p_=F(_a.LinkSM)`
    ${e=>"small"===e.$sizeType?O`
                ${na["body-sm-semibold"]}
                margin-top: ${aa["spacing-4"]};
            `:O`
                ${na["body-md-semibold"]}
                margin-top: ${aa["spacing-8"]};
            `}
    display: flex;
    align-items: center;
    align-self: flex-start;

    svg {
        height: 1rem;
        width: 1rem;
        margin-left: ${aa["spacing-4"]};
    }
`,g_=F.div`
    display: flex;
    flex-direction: column;
    flex: 1;
    overflow-wrap: anywhere;
`,m_=F.div`
    display: flex;
    flex-direction: column;
    flex: 1;
    order: 1;
    ${e=>{if(e.$showMore&&e.$hasActionLink)return O`
                margin-bottom: ${aa["spacing-8"]};
            `}}
    ${e=>{const t="linear-gradient(to bottom, black 50%, transparent 100%)";if(!e.$showMore&&e.$maxCollapsedHeight)return`\n                max-height: ${e.$maxCollapsedHeight}px;\n\t\t\t\toverflow: hidden;\n                -webkit-mask-image: ${t};\n                mask-image: ${t};\n\t\t\t`}}
`,b_=F.div`
    color: ${ra.text};

    ${e=>"small"===e.$sizeType?Ud({textSize:"body-sm"}):Ud({textSize:"body-md"})}
`,v_=F.button`
    ${e=>"small"===e.$sizeType?O`
                ${na["body-sm-semibold"]}
            `:O`
                ${na["body-md-semibold"]}
            `}

    display: flex;
    align-items: center;
    align-self: flex-start;
    gap: ${aa["spacing-4"]};
    margin-top: ${aa["spacing-8"]};
    order: 2;

    cursor: pointer;
    user-select: none;
    border: none;
    background: transparent;

    color: ${ra["text-primary"]};
`,y_=F(ge)`
    transform: rotate(${e=>e.$expanded?180:0}deg);
    transition: transform ${oa["duration-350"]} ${oa["ease-standard"]};
`,x_=r=>{var{type:n,className:o,children:i,actionLink:a,actionLinkIcon:s,sizeType:l="default",showIcon:u=!1,customIcon:h,maxCollapsedHeight:f,role:p}=r,m=ct(r,["type","className","children","actionLink","actionLinkIcon","sizeType","showIcon","customIcon","maxCollapsedHeight","role"]);const[b,v]=g(!1),[y,x]=g(!1),{height:w,ref:$}=nd(),[C]=g((()=>Od.generate())),S=d((()=>{v(!f),x(D())}),[f,w]),D=()=>!(!w||!f)&&w>f;c((()=>{S()}),[f,w,S]);return t(h_,{className:o,$type:n,$sizeType:l,"aria-label":`${(()=>{switch(n){case"success":return"Success";case"warning":return"Warning";case"error":return"Error";case"info":return"Information";case"description":return"Description";default:return"Alert"}})()}`,"data-testid":m["data-testid"],role:p,children:[u&&e(f_,{$sizeType:l,$type:n,children:(()=>{if(n&&h)return h;switch(n){case"success":return e(Oe,{"aria-hidden":!0});case"warning":return e(Fe,{"aria-hidden":!0});case"error":return e(se,{"aria-hidden":!0});case"info":case"description":return e(L,{"aria-hidden":!0});default:return null}})()}),t(g_,{children:[y&&t(v_,{$sizeType:l,$type:n,type:"button","aria-expanded":b,"aria-controls":C,onClick:()=>v(!b),children:["Show ",b?"less":"more",e(y_,{$expanded:b})]}),t(m_,{id:C,$maxCollapsedHeight:D()?f:void 0,$showMore:b,$hasActionLink:!!a,inert:uh(!!f&&!b),children:[e(b_,{ref:$,$type:n,$sizeType:l,children:i}),a?t(p_,Object.assign({"data-testid":"action-link",$type:n,$sizeType:l,underlineStyle:"none"},a,{children:[a.children,s||e(Ee,{})]})):null]})]})]})},w_=F.div`
    height: 1.625rem;
    width: 1.625rem;
    margin-right: 0.5rem;
    flex-shrink: 0;

    svg {
        height: 100%;
        width: 100%;
    }

    ${e=>e.$disabled?e.$active?O`
                    color: ${ra["icon-selected-disabled"]};
                `:O`
                    color: ${ra["icon-disabled-subtle"]};
                `:e.$active?O`
                color: ${ra["icon-selected"]};
            `:O`
            color: ${ra["icon-subtle"]};
        `};
`,$_=O`
    margin-bottom: ${e=>e.$bottomMargin||0}rem;

    // Counter matters
    counter-reset: list;

    ${e=>e.$size&&na[`${e.$size}-regular`]}
    font-weight: ${na.Spec["weight-regular"]};
    color: ${ra.text};

    // nested lists styling
    ol,
    ul {
        margin-top: 0.5rem;
        margin-bottom: 0.5rem;
    }
`,C_=F.ol`
    ${$_}

    margin-left: 3em;

    ${da.MaxWidth.lg} {
        margin-left: 2.5em;
    }

    li {
        position: relative;
    }

    ${e=>{const{reversed:t}=e,r=e.$counterType||"decimal",n=e.$counterSeparator||")";return O`
            li:before {
                content: counter(list, ${r}) "${n}";
                counter-increment: ${t?"list -1":"list"};
                position: absolute;
                left: -2em;
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
`,S_=F.ul`
    ${$_}

    margin-left: ${e=>e.$hasCustomIcon?0:"2.5em"};
    list-style-type: ${e=>e.$hasCustomIcon?"none":e.$bulletType||"disc"};

    ${e=>e.$hasCustomIcon&&O`
            & > li {
                display: flex;
                align-items: flex-start;
                gap: 0.5em;
            }
        `}
`,D_=n=>{var{size:i,bulletType:a,bottomMargin:s,children:l}=n,c=ct(n,["size","bulletType","bottomMargin","children"]);const d=void 0!==a&&"string"!=typeof a;return e(S_,Object.assign({$size:i,$bulletType:d?void 0:a,$bottomMargin:s,$hasCustomIcon:d},c,{children:d?o.Children.map(l,(n=>o.isValidElement(n)?o.cloneElement(n,{children:t(r,{children:[e("div",{"aria-hidden":!0,children:a}),e("div",{children:n.props.children})]})}):n)):l}))};D_.displayName="TextList.Ul";const k_=t=>{var{size:r,counterType:n,counterSeparator:o,bottomMargin:i,children:a}=t,s=ct(t,["size","counterType","counterSeparator","bottomMargin","children"]);return e(C_,Object.assign({$size:r,$counterType:n,$counterSeparator:o,$bottomMargin:i},s,{children:a}))};k_.displayName="TextList.Ol";const E_=D_,F_=F.div`
    position: relative;
    display: inline-flex;
    min-width: 10.375rem;
    border-radius: ${sa.sm};
    border-width: 1px;
    border-style: solid;
    overflow: hidden;
    flex-direction: column;
    height: fit-content;
    background: ${ra.bg};

    &:has(input:focus-visible) {
        outline: 2px solid ${ra["focus-ring"]};
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
                            border-color: ${ra["border-error"]};
                        `:O`
                            border-color: ${ra["border-error"]};

                            &:has(${A_}:hover) {
                                @media (pointer: fine) {
                                    background: ${ra["bg-hover-subtle"]};
                                }
                            }
                        `:e.$disabled?e.$selected?O`
                            border: none;
                            background: ${ra["bg-selected-disabled"]};
                        `:O`
                            border: none;
                        `:e.$selected?O`
                        border: none;
                        background: ${ra["bg-selected"]};

                        &:has(${A_}:hover) {
                            @media (pointer: fine) {
                                background: ${ra["bg-selected-hover"]};

                                & ${T_} {
                                    color: ${ra["text-selected-hover"]};
                                }

                                & ${H_} {
                                    color: ${ra["icon-selected-hover"]};
                                }
                            }
                        }
                    `:O`
                    border: none;

                    &:has(${A_}:hover) {
                        @media (pointer: fine) {
                            background: ${ra["bg-hover-subtle"]};
                        }
                    }
                `:e.$error?e.$disabled?O`
                            border-color: ${ra["border-error"]};
                        `:O`
                            border-color: ${ra["border-error"]};

                            &:has(${A_}:hover) {
                                @media (pointer: fine) {
                                    background: ${ra["bg-hover-subtle"]};
                                }
                            }
                        `:e.$disabled?e.$selected?O`
                            border-color: ${ra["border-selected-disabled"]};
                            background: ${ra["bg-selected-disabled"]};
                        `:O`
                            border-color: ${ra["border-disabled"]};
                            background: ${ra["bg-disabled"]};
                        `:e.$selected?O`
                        border-color: ${ra["border-selected"]};
                        background: ${ra["bg-selected"]};

                        &:has(${A_}:hover) {
                            @media (pointer: fine) {
                                background: ${ra["bg-selected-hover"]};

                                & ${T_} {
                                    color: ${ra["text-selected-hover"]};
                                }

                                & ${H_} {
                                    color: ${ra["icon-selected-hover"]};
                                }
                            }
                        }
                    `:O`
                    border-color: ${ra.border};

                    &:has(${A_}:hover) {
                        @media (pointer: fine) {
                            background: ${ra["bg-hover-subtle"]};
                        }
                    }
                `}
`,O_=F.input`
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
`,__=F.div`
    display: flex;
`,T_=F.div`
    display: flex;
    flex-direction: column;
    overflow-wrap: anywhere;
    width: 100%;
    overflow: hidden;

    // apply header container text color
    ${e=>e.$disabled?e.$selected?O`
                    color: ${ra["text-selected-disabled"]};
                `:O`
                    color: ${ra["text-disabled"]};
                `:e.$selected?O`
                color: ${ra["text-selected"]};
            `:O`
            color: ${ra.text};
        `}
`,I_=F.label`
    ${na["body-baseline-regular"]}
    overflow: hidden;
    display: -webkit-box;
    text-overflow: ellipsis;
    -webkit-box-orient: vertical;
    overflow-wrap: break-word;
    -webkit-line-clamp: ${e=>{var t,r;return null!==(r=null===(t=e.$maxLines)||void 0===t?void 0:t.desktop)&&void 0!==r?r:"none"}};
    ${da.MaxWidth.lg} {
        -webkit-line-clamp: ${e=>{var t,r;return null!==(r=null===(t=e.$maxLines)||void 0===t?void 0:t.tablet)&&void 0!==r?r:"none"}};
    }
    ${da.MaxWidth.sm} {
        -webkit-line-clamp: ${e=>{var t,r;return null!==(r=null===(t=e.$maxLines)||void 0===t?void 0:t.mobile)&&void 0!==r?r:"none"}};
    }
`,M_=F.div`
    ${na["body-md-regular"]}
    margin-top: 0.5rem;

    z-index: 1; // forces sublabel to render above the input
    pointer-events: none; // to allow click events to be passed to the input

    strong,
    b {
        ${na["body-md-semibold"]}
    }
`,A_=F.div`
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
`,B_=F.div`
    display: flex;
    height: 100%;
    width: 100%;
    position: relative;
    padding: ${e=>e.$addPadding?"0.6875rem 0rem 0.6875rem 1rem":"0.6875rem 1rem"};
`,j_=F.button`
    color: ${e=>e.$disabled?ra["text-disabled"]:ra["text-error"]};
    white-space: nowrap;
    ${na["body-md-semibold"]}
    height: fit-content;
    padding: 0.6875rem 1rem 0.6875rem 0.5rem;
    border: none;
    background: none;

    cursor: ${e=>e.$disabled?"not-allowed":"pointer"};
`,z_=F.button`
    color: ${e=>e.disabled?ra["text-disabled"]:ra["text-primary"]};
    ${na["body-baseline-semibold"]}
    display: flex;
    align-items: center;
    justify-content: flex-end;
    border: none;
    background-color: ${ra.bg};
    cursor: ${e=>e.disabled?"not-allowed":"pointer"};
    padding: 0 1rem 0.6875rem 1rem;
    padding-top: ${e=>e.$paddingTopRequired?"0.6875rem":"0rem"};
    width: 100%;

    svg {
        width: 1em;
        height: 1em;
        margin-left: 0.5rem;
    }
`,R_=F.div`
    width: 100%;
    color: ${e=>e.$disabled?ra["text-disabled"]:ra["text-error"]};
    border: none;
    background: ${ra.bg};
    cursor: ${e=>e.$disabled?"not-allowed":"pointer"};
    padding: 0.6875rem 1rem 0.5rem 1rem;
`,L_=F(x_)`
    width: 100%;
    user-select: none;
`,P_=F.div`
    padding: 0 1rem;
    padding-top: 0.6875rem;
    padding-bottom: ${e=>e.$isFinalItem?"0.6875rem":"0.5rem"};
    background-color: ${ra.bg};
    ${Ud({textSize:"body-md"})}

    ${e=>e.$disabled?O`
                color: ${ra["text-disabled"]};
            `:e.$selected?O`
                color: ${ra["text-selected"]};
            `:O`
                color: ${ra.text};
            `}
`,N_=F(_a.BodyMD)`
    color: ${e=>e.$disabled?ra["text-disabled"]:ra["text-error"]};
`,W_=F(E_)`
    color: ${e=>e.$disabled?ra["text-disabled"]:ra["text-error"]};
`,H_=F((({type:t,active:r=!1,disabled:n,className:o})=>{let i;switch(t){case"checkbox":i=e(r?ve:me,{});break;case"radio":i=e(r?Te:_e,{});break;case"tick":i=e(ye,{});break;case"cross":i=e(P,{});break;default:i=null}return e(w_,{className:o,$active:r,$disabled:n,"aria-hidden":!0,children:i})}))`
    ${e=>e.$disabled?e.$selected?O`
                    color: ${ra["icon-selected-disabled"]};
                `:O`
                    color: ${ra["icon-disabled-subtle"]};
                `:e.$selected?O`
                color: ${ra["icon-selected"]};
            `:O`
            color: ${ra["icon-subtle"]};
        `};
`,Y_=u_(F.div`
    position: absolute;
    top: calc(3rem + ${aa["spacing-8"]});
    left: 0;
    overflow: hidden;
    z-index: 1;

    ${da.MaxWidth.xxs} {
        max-width: 100%;
    }
`),V_=F.div`
    position: relative;
    width: 100%;
    padding: ${aa["spacing-8"]} ${aa["spacing-20"]}
        ${aa["spacing-24"]} ${aa["spacing-20"]};
    display: flex;
    flex-direction: column;
    background: ${ra.bg};
    border: ${ia["width-010"]} ${ia.solid} ${ra.border};
    border-radius: ${sa.sm};
`,U_=F.div`
    display: flex;
    align-items: center;
    justify-content: space-between;

    ${da.MaxWidth.xxs} {
        flex-direction: column;
        width: 100%;
    }
`,K_=F.div`
    display: flex;
    justify-content: flex-end;
    margin-top: ${aa["spacing-16"]};
    gap: ${aa["spacing-8"]} ${aa["spacing-16"]};

    ${da.MaxWidth.xxs} {
        flex-direction: column-reverse; // FIXME: this breaks tab focus
        margin-top: ${aa["spacing-32"]};
    }
`,q_=F.div`
    display: flex;
    align-items: center;
    margin-right: ${aa["spacing-32"]};

    ${da.MaxWidth.xxs} {
        margin-right: 0;
        width: 100%;
    }
`,Z_=F.div`
    display: flex;
    gap: ${aa["spacing-8"]};

    ${da.MaxWidth.lg} {
        flex-direction: column;
    }

    ${da.MaxWidth.xxs} {
        flex-direction: row;
        width: 100%;
    }
`,G_=F.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    ${da.MaxWidth.xxs} {
        width: 6rem;
    }
`,Q_=F(Wd)`
    width: 5rem;
    padding: ${aa["spacing-16"]} 0;
    color: ${ra.icon};

    svg {
        height: 1rem;
        width: 1rem;
    }

    &:hover {
        color: ${ra["icon-hover"]};
    }
`,X_=F(_a.BodyBL)`
    flex-shrink: 0;
    width: 1.5rem;
    text-align: center;
`,J_=F(Wf)`
    height: calc(3rem - 2px);
    width: 5rem;
    display: flex;
    align-items: center;
    justify-content: center;

    ${da.MaxWidth.xxs} {
        width: 100%;
    }
`,eT=F(Yf)`
    text-align: center;
    width: 100%;

    &:focus::placeholder {
        color: transparent;
    }
`,tT=F((n=>{var{type:o="checkbox",indicator:i,checked:l,styleType:d="default",children:u,childrenMaxLines:h,subLabel:f,disabled:p,error:m,name:b,id:v,className:y,compositeSection:x,removable:w,onRemove:$,"data-testid":C,onChange:S,useContentWidth:D,"aria-describedby":k}=n,E=ct(n,["type","indicator","checked","styleType","children","childrenMaxLines","subLabel","disabled","error","name","id","className","compositeSection","removable","onRemove","data-testid","onChange","useContentWidth","aria-describedby"]);const{collapsible:F=!0,errors:O,children:_,initialExpanded:T}=x||{},[I,M]=g(l),[A,B]=g(!!T),j=a((()=>{const e=Array.isArray(O)&&(null==O?void 0:O.length)>0,t=!Array.isArray(O)&&!!O;return e||t}),[O]),[z]=g(Od.generate()),R=v?`${v}`:`tg-${z}`,L=s(null);c((()=>{M(l)}),[l]),c((()=>{I&&B(null==T||T)}),[I]);const P=e=>{if(!p){if(S)return void S(e);switch(o){case"checkbox":M((e=>!e));break;case"radio":case"yes":case"no":I||M(!0)}}},N=()=>{p||B(!A)},W=()=>{p||!$||$()},H=()=>{var e;null===(e=null==L?void 0:L.current)||void 0===e||e.click()},Y=e=>{e.stopPropagation()},V=()=>{let t;switch(o){case"yes":t="tick";break;case"no":t="cross";break;case"checkbox":case"radio":t=o}return e(H_,{type:t,active:I,disabled:p,$selected:I,$disabled:p})},U=()=>{if(!f)return null;let t;return t="function"==typeof f?f():f,e(M_,{"data-id":"toggle-sublabel",id:`${R}-sublabel`,"aria-hidden":!0,children:t})},K=n=>t(r,{children:[e(N_,{weight:"semibold",$disabled:p,children:"Error"}),e(W_,{$disabled:p,children:null==n?void 0:n.map(((t,r)=>e("li",{id:`${R}-error-list-item-${r}`,children:e(N_,{weight:"semibold",$disabled:p,children:t})},r)))})]});return t(F_,{$selected:I,$disabled:p,className:y,$styleType:d,$error:m,$indicator:i,$useContentWidth:D,id:v,"data-testid":C,children:[(()=>{const r=["string"==typeof f?`${R}-sublabel`:null,k].filter(Boolean).join(" ")||void 0;return t(A_,{id:`${R}-header-container`,$disabled:p,$error:m,$selected:I,$indicator:i,$styleType:d,children:[e(B_,{$addPadding:w,children:t(__,{id:`${R}-input-container`,onClick:H,children:[e(O_,Object.assign({ref:L,name:b,id:`${R}-input`,type:"checkbox"===o?"checkbox":"radio","data-testid":"toggle-input",disabled:p,onChange:P,onClick:Y,checked:I,"aria-describedby":r},E)),i&&V(),t(T_,{$selected:I,$disabled:p,children:[e(I_,{htmlFor:`${R}-input`,"data-testid":"toggle-label",id:`${R}-label`,$maxLines:h,children:u}),f&&U()]})]})}),w&&e(j_,{type:"button",$disabled:p,onClick:W,id:`${R}-remove-button`,children:"Remove"})]})})(),_&&t("div",{children:[(!F||A)&&e(P_,{"data-id":"toggle-composite-children",$isFinalItem:!F,$disabled:p,children:_}),F&&!A&&j&&e(R_,{$disabled:p,onClick:N,id:`${R}-error-alert`,children:e(L_,{type:p?"description":"error",className:y,showIcon:!0,children:Array.isArray(O)?K(O):O})}),F&&t(z_,{$paddingTopRequired:!A&&!j,disabled:p,onClick:N,"data-testid":A?"collapse-button":"expand-button",children:[A?"Show less":"Show more",e(A?ke:le,{"aria-hidden":!0})]})]})]})}))`
    min-width: 5rem;
    flex: 1;
`,rT=F(Ph.Small)`
    width: 7rem;

    ${da.MaxWidth.sm} {
        flex: 1;
    }

    ${da.MaxWidth.xxs} {
        width: 100%;
    }
`;var nT,oT,iT;!function(e){e.HOUR_UP="hour-up",e.HOUR_DOWN="hour-down",e.MINUTE_UP="minute-up",e.MINUTE_DOWN="minute-down"}(nT||(nT={})),function(e){e.HOUR="hour",e.MINUTE="minute"}(oT||(oT={})),function(e){e.AM="am",e.PM="pm"}(iT||(iT={}));const aT=({id:r,value:n,show:o,format:i,onChange:a,onCancel:l})=>{var u;const h=Tk.getTimeValues(i,n),[f,p]=g(h.hour),[m,b]=g(h.minute),[v,y]=g(h.period),x=s(null),w=s(null),$=nd();c((()=>{if(o&&x.current&&x.current.focus(),o){const{hour:e,minute:t,period:r}=Tk.getTimeValues(i,n);p(e),b(t),y(r)}}),[o,n,i]),c((()=>{const e=x.current,t=w.current;return e&&e.addEventListener("keydown",C),t&&t.addEventListener("keydown",C),()=>{e&&e.removeEventListener("keydown",C),t&&t.removeEventListener("keydown",C)}}),[]);const C=e=>{["Digit0","Digit1","Digit2","Digit3","Digit4","Digit5","Digit6","Digit7","Digit8","Digit9","Tab","Backspace","Delete","ArrowLeft","ArrowRight","ArrowUp","ArrowDown"].includes(e.code)||["Backspace","0","1","2","3","4","5","6","7","8","9"].includes(e.key)||e.preventDefault()},S=d((e=>{switch(e.currentTarget.name){case nT.MINUTE_UP:b(Tk.updateMinutes(m,"add"));break;case nT.MINUTE_DOWN:b(Tk.updateMinutes(m,"minus"));break;case nT.HOUR_UP:p(Tk.updateHours(f,"add"));break;case nT.HOUR_DOWN:p(Tk.updateHours(f,"minus"))}}),[f,m]),D=e=>{e.target.select()},k=e=>{const t=e.target.value;switch(e.target.name){case oT.HOUR:t.length<=2&&p(t);break;case oT.MINUTE:t.length<=2&&b(t)}},E=e=>{const t=parseInt(e.target.value);if(!isNaN(t))switch(e.target.name){case oT.HOUR:{const r=t>23||t<0?h.hour:Tk.convertHourTo12HourFormat(e.target.value);p(r);break}case oT.MINUTE:{const r=t>59||t<0?h.minute:e.target.value;b(_d.padValue(r));break}}},F=e=>{switch(e.target.name){case iT.AM:y(_k.AM);break;case iT.PM:y(_k.PM)}},O=e=>r?`${r}-${e}`:e,_=KO({opacity:o?1:0,height:o?(null!==(u=$.height)&&void 0!==u?u:0)+32+2:0});return e(Y_,{"data-testid":"animated-dropdown-wrapper",style:_,children:t(V_,{ref:$.ref,"data-testid":O("timepicker-dropdown"),inert:uh(!o),children:[t(U_,{children:[t(q_,{children:[t(G_,{children:[e(Q_,{"aria-label":"increase hour",name:nT.HOUR_UP,tabIndex:-1,onClick:S,"data-testid":O("hour-increment-button"),children:e(ke,{})}),e(J_,{children:e(eT,{"aria-label":"hour",type:"number",name:oT.HOUR,id:"hour",maxLength:2,pattern:"[0-9]{2}",ref:x,value:f,onFocus:D,onChange:k,onBlur:E,min:1,max:12,placeholder:"HH","data-testid":O("hour-input")})}),e(Q_,{"aria-label":"decrease hour",name:nT.HOUR_DOWN,tabIndex:-1,onClick:S,"data-testid":O("hour-decrement-button"),children:e(le,{})})]}),e(X_,{children:":"}),t(G_,{children:[e(Q_,{"aria-label":"increase minute",name:nT.MINUTE_UP,tabIndex:-1,onClick:S,"data-testid":O("minute-increment-button"),children:e(ke,{})}),e(J_,{children:e(eT,{"aria-label":"minute",type:"number",name:oT.MINUTE,id:"minute",maxLength:2,pattern:"[0-9]{2}",ref:w,value:m,onChange:k,onBlur:E,onFocus:D,min:0,max:59,placeholder:"MM","data-testid":O("minute-input")})}),e(Q_,{"aria-label":"decrease minute",name:nT.MINUTE_DOWN,tabIndex:-1,onClick:S,"data-testid":O("minute-decrement-button"),children:e(le,{})})]})]}),t(Z_,{children:[e(tT,{checked:v===_k.AM,name:iT.AM,type:"radio",onChange:F,"data-testid":O("am-toggle"),"aria-label":"AM",children:"AM"}),e(tT,{checked:v===_k.PM,name:iT.PM,type:"radio",onChange:F,"data-testid":O("pm-toggle"),"aria-label":"PM",children:"PM"})]})]}),t(K_,{children:[e(rT,{"aria-label":"close selector",type:"button",styleType:"secondary",onClick:l,"data-testid":O("cancel-button"),children:"Cancel"}),e(rT,{"aria-label":"confirm selection",type:"button",onClick:()=>{let e;e="24hr"===i?Tk.convertTo24HourFormat({hour:f,minute:m,period:v}):`${f}:${m}${v}`,a(e)},disabled:""===f||""===m,"data-testid":O("confirm-button"),children:"Done"})]})]})})},sT=r=>{var{id:n,disabled:o=!1,error:i,value:a,format:l="24hr",readOnly:d,onChange:u,onFocus:h,onBlur:f}=r,p=ct(r,["id","disabled","error","value","format","readOnly","onChange","onFocus","onBlur"]);const[m,b]=g(!1),[v,y]=g(!1),[x,w]=g(""),[$,C]=g(""),S=s(null);c((()=>{a&&(w(a.start),C(a.end))}),[a]),Id("mousedown",(function(e){o||F(e)}),"document"),Id("keyup",(function(e){if("Tab"===e.code)F(e)}),"document");const D=()=>{E()},k=()=>{m||v||null==h||h()},E=()=>{b(!1),y(!1),null==f||f()},F=e=>{S.current&&!S.current.contains(e.target)&&(v||m)&&E()};return e(Ek,Object.assign({ref:S,id:n},p,{children:t(Fk,{$disabled:o,$error:i,$readOnly:d,children:[t(lp,{error:i,currentActive:m?"start":v?"end":"none",children:[e(Ok,{onFocus:()=>{o||d||m||(y(!1),b(!0),k())},readOnly:!0,placeholder:"From",value:Tk.formatDisplayValue(x,l),disabled:o,"data-testid":p["data-testid"]?`${p["data-testid"]}-timepicker-selector`:"timepicker-selector"}),e(Ok,{onFocus:()=>{o||d||v||(b(!1),y(!0),k())},readOnly:!0,placeholder:"To",value:Tk.formatDisplayValue($,l),disabled:o,"data-testid":p["data-testid"]?`${p["data-testid"]}-timepicker-selector`:"timepicker-selector"})]}),e(aT,{id:n,show:m,value:x,format:l,onCancel:D,onChange:e=>{b(!1),y(!0),w(e);null==u||u({start:e,end:$})}}),e(aT,{id:n,show:v,value:$,format:l,onCancel:D,onChange:e=>{y(!1),C(e);null==u||u({start:x,end:e}),""==x?b(!0):null==f||f()}})]})}))},lT=F(Hf)`
    height: 3rem;
    gap: ${aa["spacing-8"]};
    // space for clear icon
    padding-right: calc(1.25rem + ${aa["spacing-20"]});
`,cT=r=>{var{id:n,disabled:o=!1,error:i,value:l,format:u="12hr",readOnly:h,onChange:f,onFocus:p,onBlur:m,alignment:b="left",dropdownZIndex:v,startLimit:y,endLimit:x,interval:w=15}=r,$=ct(r,["id","disabled","error","value","format","readOnly","onChange","onFocus","onBlur","alignment","dropdownZIndex","startLimit","endLimit","interval"]);const[C]=g((()=>Od.generate())),[S,D]=g(null),[k,E]=g(!1),[F,O]=g(""),[_,T]=g(""),[I,M]=g(""),[A,B]=g(""),[j,z]=g(""),R=s(null),L=s(null),P=s(null),N=a((()=>Tk.generateTimings(w,u,y,x)),[w,u,y,x]),W=a((()=>{if(""===A)return N;const e=Tk.findClosestFlooredTime(A,N);return e?N.slice(N.indexOf(e)):[]}),[N,A]),H=d((e=>Tk.parseInput(e,u)),[u]);c((()=>{var e,t;if(l){const r=null!==(e=H(l.start))&&void 0!==e?e:"",n=null!==(t=H(l.end))&&void 0!==t?t:"";T(r),M(n),B(r),z(n)}}),[l,H]),c((()=>{if(i)return void E(!1);const e=H(_),t=H(I);if(void 0===e)O("Invalid start time");else if(void 0===t)O("Invalid end time");else{if(!(""!==e&&""!==t&&Tk.to24Hour(t)<Tk.to24Hour(e)))return O(""),void(document.activeElement!==L.current&&document.activeElement!==P.current||E(!0));O("End time must be after start time")}E(!1)}),[_,I,H,i]);const Y=e=>{o||h||(S||k||null==p||p(),D(e),E(!0))},V=e=>{var t;o||h||(D(e),E(!0),null===(t=("start"===e?L:P).current)||void 0===t||t.select())};function U(e){var t;switch(e.code){case"Enter":"start"===S?K(_):"end"===S&&(k&&q(I),null===(t=P.current)||void 0===t||t.blur());break;case"Tab":Z(_,I,{})}}const K=e=>{Z(e,I,{goToNextInput:!0})},q=e=>{Z(_,e,{triggerOnBlur:!0})},Z=(e,t,{goToNextInput:r,triggerOnBlur:n})=>{var o,i,a;const s=null!==(o=H(e))&&void 0!==o?o:A,l=null!==(i=H(t))&&void 0!==i?i:j;T(s),M(l);s===A&&l===j||null==f||f({start:s,end:l}),r&&void 0!==H(e)&&(D("end"),null===(a=P.current)||void 0===a||a.select()),n&&(D(null),E(!1),null==m||m()),B(s),z(l)},G=e=>{e.stopPropagation(),T(""),M(""),B(""),z("");null==f||f({start:"",end:""}),D(null),E(!1)},Q=e=>{var t,r;const n=e.relatedTarget,o=(null===(t=null==n?void 0:n.matches)||void 0===t?void 0:t.call(n,"[data-floating-ui-focusable]"))||(null===(r=null==n?void 0:n.matches)||void 0===r?void 0:r.call(n,"[data-floating-ui-focus-guard]")),i=R.current&&R.current.contains(n);S&&!k&&!i&&!o&&Z(_,I,{triggerOnBlur:!0})},X=()=>{if(!h&&!o&&((null==_?void 0:_.length)>0||(null==I?void 0:I.length)>0))return e(lk,{onClick:G,type:"button","aria-label":"Clear",children:e(bg,{"aria-hidden":!0})})};return t(Ek,Object.assign({id:n},$,{children:[e(Z$,{children:e(lh,{enabled:!h&&!o,isOpen:k,renderElement:()=>t(lT,{ref:R,$disabled:o,$error:i||!!F,$readOnly:h,onBlur:Q,children:[t(lp,{error:i||!!F,currentActive:null===S?"none":S,children:[e(Ok,{ref:L,onFocus:()=>Y("start"),placeholder:"start"===S?"hh:mm":"From",onChange:e=>T(e.target.value),value:_,disabled:o,readOnly:h,"data-testid":$["data-testid"]?`${$["data-testid"]}-timepicker-selector`:"timepicker-selector",onClick:()=>V("start"),onKeyDown:U,autoComplete:"off","aria-label":"Start time input",type:"text",role:"combobox","aria-expanded":k,"aria-controls":C,"aria-autocomplete":"list"}),e(Ok,{ref:P,onFocus:()=>Y("end"),placeholder:"end"===S?"hh:mm":"To",onChange:e=>M(e.target.value),value:I,disabled:o,readOnly:h,"data-testid":$["data-testid"]?`${$["data-testid"]}-timepicker-selector`:"timepicker-selector",onClick:()=>V("end"),onKeyDown:U,autoComplete:"off","aria-label":"End time input",type:"text",role:"combobox","aria-expanded":k,"aria-controls":C,"aria-autocomplete":"list"})]}),X()]}),renderDropdown:()=>e(yC,"start"===S?{listItems:N,onSelectItem:K,selectedItems:[_],topScrollItem:Tk.findClosestFlooredTime(H(_),N),listboxId:C,disableItemFocus:!0,matchElementWidth:!0}:{listItems:W,onSelectItem:q,selectedItems:[I],topScrollItem:Tk.findClosestFlooredTime(H(I),W),listboxId:C,disableItemFocus:!0,matchElementWidth:!0}),onClose:e=>{"outside-press"===e?(D(null),E(!1),null==m||m()):Z(_,I,{triggerOnBlur:!0})},onDismiss:()=>{var e;null===(e=("start"===S?L:P).current)||void 0===e||e.focus(),E(!1)},offset:8,alignment:b,fitAvailableHeight:!0,customZIndex:v})}),!i&&F&&t(Mu,{children:[e(Iu,{"aria-hidden":!0}),e(Au,{id:n?`${n}-error-message`:"error-message",tabIndex:0,"data-testid":n?`${n}-error-message`:"error-message",children:F})]})]}))},dT=t=>{var{variant:r="dial"}=t,n=ct(t,["variant"]);return e("combobox"===r?cT:sT,Object.assign({},n))};F.div`
    position: relative;
`;const uT=F(Yf)`
    height: calc(3rem - 2px); // exclude top and bottom borders
`,hT=r=>{var{id:n,disabled:o=!1,readOnly:i=!1,error:a,value:l,placeholder:c,format:u="24hr",onChange:h,onFocus:f,onBlur:p}=r,m=ct(r,["id","disabled","readOnly","error","value","placeholder","format","onChange","onFocus","onBlur"]);const[b,v]=g(!1),y=s(null);Id("mousedown",(function(e){o||i||$(e)}),"document"),Id("keyup",(function(e){if("Tab"===e.code)$(e)}),"document");const x=()=>{o||i||b||(v(!0),null==f||f())};const w=()=>{v(!1),null==p||p()},$=e=>{y.current&&!y.current.contains(e.target)&&b&&w()},C=d((()=>"12hr"===u?"HH:MMam":"HH:MM"),[u,c]);return t(Hf,Object.assign({ref:y,id:n,$readOnly:i,$disabled:o,$error:a},m,{children:[e(uT,{onFocus:x,readOnly:!0,placeholder:c||C(),value:Tk.formatDisplayValue(l,u),disabled:o,"data-testid":n?`${n}-timepicker-selector`:"timepicker-selector"}),e(aT,{id:n,show:b,value:l,format:u,onCancel:()=>{w()},onChange:e=>{null==h||h(e),w()}})]}))},fT=F(US)`
    margin-right: 0.5rem;
`,pT=F(xg)`
    width: 2.5rem;

    input {
        text-align: center;
    }
`,gT=F(pT)`
    // Cheat to balance the placeholder look while ensuring enough width
    margin-left: 0.5rem;
    width: 6rem;

    input {
        text-align: left;
    }
`,mT=F(_a.BodyBL)`
    margin: 0 0.25rem;
    ${e=>{if(e.$inactive)return O`
                color: ${ra["text-disabled"]};
            `}}
`,bT=F.div`
    display: flex;
    align-items: center;
    height: calc(3rem - 2px); // exclude top and bottom borders
`,vT=F(_a.BodyBL)``,yT=n=>{var{disabled:o,error:i,value:l,onChange:d,onBlur:u,onChangeRaw:h,onBlurRaw:f,readOnly:p,placeholder:m="00-8888",autoComplete:b,"aria-labelledby":v,"aria-describedby":y,"aria-invalid":x}=n,w=ct(n,["disabled","error","value","onChange","onBlur","onChangeRaw","onBlurRaw","readOnly","placeholder","autoComplete","aria-labelledby","aria-describedby","aria-invalid"]);const[$,C]=g(""),[S,D]=g(""),[k,E]=g("none"),[F]=g((()=>Od.generate())),O=`${F}-floor-label`,_=`${F}-unit-label`,T=`${F}-live-message`,I=s(null),M=s(null),A=s(null),B=s($),j=s(S),z=s(k),R=e=>e.toLocaleUpperCase().replace(/[^0-9A-Za-z]/g,""),L=Ad({ref:M,formatter:R}),P=Ad({ref:A,formatter:R}),N=a((()=>{let e="";const t=te("Hash",$),r=te("Dash",S);switch(k){case"floor":e=t;break;case"unit":e=$?[t,r].join(" "):r;break;default:e=""}return e}),[k,$,S]),W=e=>{B.current=e,C(e)},H=e=>{j.current=e,D(e)},Y=e=>{z.current=e,E(e)};c((()=>{"floor"===k&&3===$.length&&A.current&&A.current.focus()}),[$]),c((()=>{G(l)}),[l]);const V=e=>{Y(e.target.name),e.target.select()},U=e=>{const t=e.target.name,r=e.target.value,n=Z(r);"floor"===t?(W(n),n!==$&&Q(n,t)):"unit"===t&&(H(n),n!==S&&Q(n,t))},K=e=>{const t=e.target.name;if("floor"===t){const e=L();if(!e)return;const{nextValue:r,updateCaretPosition:n}=e;n(),W(r),Q(r,t)}else if("unit"===t){const e=P();if(!e)return;const{nextValue:r,updateCaretPosition:n}=e;n(),H(r),Q(r,t)}},q=e=>{var t;"Backspace"!==e.code&&"Backspace"!==e.key||"unit"===k&&0===S.length&&(null===(t=M.current)||void 0===t||t.focus())},Z=e=>/^[0-9]$/.test(e)?_d.padValue(e,!0):e.toLocaleUpperCase(),G=e=>{if(e!==xT)if(void 0===e||0===e.length)W(""),H("");else{const t=e.split("-");if(2===t.length){const e=t[0],r=t[1];W("floor"===k?e:Z(e)),H("unit"===k?r:Z(r))}}},Q=(e,t)=>{if(!d&&!h)return;const r={floor:B.current,unit:j.current};if(r[t]=e,d){const e=J(r);d(e)}h&&h([r.floor,r.unit])},X=()=>{if(!u&&!f)return;const e={floor:Z(B.current),unit:Z(j.current)};if(u){const t=J(e);u(t)}f&&f([e.floor,e.unit])},J=e=>{const t=[e.floor,e.unit];return e.floor.length>0&&e.unit.length>0?t.join("-"):t.every((e=>""===e))?"":xT},ee=e=>e.split("-");function te(e,t){return t?`${e} ${Array.from(t).join(" ")}`:""}return t(Hf,Object.assign({},w,{ref:I,onClick:()=>{"none"===k&&M.current&&M.current.focus()},$disabled:o,$error:i,$readOnly:p,tabIndex:-1,onBlur:e=>{I.current&&I.current.contains(e.relatedTarget)||"none"!==z.current&&(Y("none"),X())},children:[e(fT,{"data-testid":"addon",$disabled:o,$readOnly:p,children:"#"}),p&&l?(r=>{const n=r.split("-"),o=[te("Hash",n[0]),te("Dash",n[1])].join(" ");return t(bT,{"data-testid":"readonly-display",tabIndex:0,role:"textbox","aria-readonly":!0,"aria-labelledby":v,"aria-describedby":y,"aria-invalid":x,children:[e(vT,{children:n[0]}),e(mT,{children:"-"}),e(vT,{children:n[1]}),e(dh,{children:o})]})})(l):t(r,{children:[e(pT,{name:"floor",maxLength:3,value:$,ref:M,onFocus:V,onBlur:U,onChange:K,disabled:o,readOnly:p,type:"text",pattern:"[0-9A-Z]{2,3}","data-testid":"floor-input","aria-labelledby":hh(v,O),"aria-describedby":hh(y,T),"aria-invalid":x,placeholder:"floor"!==k||p||o?ee(m)[0]:"",autoComplete:b,styleType:"no-border"}),e(dh,{"aria-hidden":!0,id:O,children:"Enter floor number"}),e(mT,{$inactive:0===$.length,children:"-"}),e(gT,{name:"unit",maxLength:5,value:S,ref:A,onFocus:V,onBlur:U,onChange:K,onKeyDown:q,disabled:o,readOnly:p,type:"text",pattern:"[0-9A-Z]{2,5}","data-testid":"unit-input","aria-labelledby":hh(v,_),"aria-describedby":hh(y,T),"aria-invalid":x,placeholder:"unit"!==k||p||o?ee(m)[1]:"",autoComplete:b,styleType:"no-border"}),e(dh,{"aria-hidden":!0,id:_,children:"Enter unit number"}),e(dh,{id:T,"aria-live":"polite",children:N})]})]}))},xT="Invalid unit number",wT={DateInput:t=>{var{label:r,errorMessage:n,id:o,"data-error-testid":i,"data-testid":a,layoutType:s,mobileCols:l,tabletCols:c,desktopCols:d,xxsCols:u,xsCols:h,smCols:f,mdCols:p,lgCols:m,xlCols:b,xxlCols:v}=t,y=ct(t,["label","errorMessage","id","data-error-testid","data-testid","layoutType","mobileCols","tabletCols","desktopCols","xxsCols","xsCols","smCols","mdCols","lgCols","xlCols","xxlCols"]);const[x]=g((()=>`form-date-input-${Od.generate()}`)),w=null!=o?o:x;return e(Gu,{id:w,label:r,errorMessage:n,"data-error-testid":i,disabled:y.disabled,layoutType:s,mobileCols:l,tabletCols:c,desktopCols:d,xxsCols:u,xsCols:h,smCols:f,mdCols:p,lgCols:m,xlCols:b,xxlCols:v,children:e(rp,Object.assign({id:`${w}-base`,"data-testid":a||o,"aria-labelledby":`${w}-label`,error:!!n},y))})},DateRangeInput:t=>{var{label:r,errorMessage:n,id:o,"data-error-testid":i,"data-testid":a,layoutType:s,mobileCols:l,tabletCols:c,desktopCols:d,xxsCols:u,xsCols:h,smCols:f,mdCols:p,lgCols:m,xlCols:b,xxlCols:v}=t,y=ct(t,["label","errorMessage","id","data-error-testid","data-testid","layoutType","mobileCols","tabletCols","desktopCols","xxsCols","xsCols","smCols","mdCols","lgCols","xlCols","xxlCols"]);const[x]=g((()=>`form-date-range-input-${Od.generate()}`)),w=null!=o?o:x;return e(Gu,{id:w,label:r,errorMessage:n,"data-error-testid":i,disabled:y.disabled,layoutType:s,mobileCols:l,tabletCols:c,desktopCols:d,xxsCols:u,xsCols:h,smCols:f,mdCols:p,lgCols:m,xlCols:b,xxlCols:v,children:e(fp,Object.assign({id:`${o}-base`,"data-testid":a?`${a}-base`:void 0,"aria-labelledby":`${w}-label`,error:!!n},y))})},ESignature:t=>{const{label:r,errorMessage:n,id:o="form-field","data-error-testid":i,"data-testid":a,layoutType:s,mobileCols:l,tabletCols:c,desktopCols:d,xxsCols:u,xsCols:h,smCols:f,mdCols:p,lgCols:g,xlCols:m,xxlCols:b}=t,v=ct(t,["label","errorMessage","id","data-error-testid","data-testid","layoutType","mobileCols","tabletCols","desktopCols","xxsCols","xsCols","smCols","mdCols","lgCols","xlCols","xxlCols"]);return e(Gu,{id:o,label:r,errorMessage:n,"data-error-testid":i,layoutType:s,mobileCols:l,tabletCols:c,desktopCols:d,xxsCols:u,xsCols:h,smCols:f,mdCols:p,lgCols:g,xlCols:m,xxlCols:b,children:e(Yp,Object.assign({id:`${o}-base`,"data-testid":a||o},v))})},HistogramSlider:t=>{var{label:r,errorMessage:n,id:o="form-histogram-slider","data-error-testid":i,"data-testid":a,layoutType:s,mobileCols:l,tabletCols:c,desktopCols:d,xxsCols:u,xsCols:h,smCols:f,mdCols:p,lgCols:g,xlCols:m,xxlCols:b}=t,v=ct(t,["label","errorMessage","id","data-error-testid","data-testid","layoutType","mobileCols","tabletCols","desktopCols","xxsCols","xsCols","smCols","mdCols","lgCols","xlCols","xxlCols"]);return e(Gu,{id:o,label:r,errorMessage:n,"data-error-testid":i,disabled:v.disabled,layoutType:s,mobileCols:l,tabletCols:c,desktopCols:d,xxsCols:u,xsCols:h,smCols:f,mdCols:p,lgCols:g,xlCols:m,xxlCols:b,children:e(pg,Object.assign({id:`${o}-base`,"data-testid":a||o},v))})},Input:wg,InputGroup:qS,MaskedInput:dD,Label:ju,MultiSelect:t=>{var{label:r,errorMessage:n,id:o,"data-error-testid":i,"data-testid":a,enableSearch:s=!1,layoutType:l,mobileCols:c,tabletCols:d,desktopCols:u,xxsCols:h,xsCols:f,smCols:p,mdCols:m,lgCols:b,xlCols:v,xxlCols:y,variant:x}=t,w=ct(t,["label","errorMessage","id","data-error-testid","data-testid","enableSearch","layoutType","mobileCols","tabletCols","desktopCols","xxsCols","xsCols","smCols","mdCols","lgCols","xlCols","xxlCols","variant"]);const[$]=g((()=>`form-field-${Od.generate()}`)),C=null!=o?o:$;return e(Gu,{id:C,"data-testid":a,label:r,errorMessage:n,"data-error-testid":i,disabled:w.disabled,layoutType:l,mobileCols:c,tabletCols:d,desktopCols:u,xxsCols:h,xsCols:f,smCols:p,mdCols:m,lgCols:b,xlCols:v,xxlCols:y,children:e(uD,Object.assign({id:`${C}-base`,"data-testid":a?`${a}-base`:void 0,error:!!n,enableSearch:s,variant:x},w))})},NestedSelect:t=>{var{label:r,errorMessage:n,id:o,"data-error-testid":i,"data-testid":a,layoutType:s,mobileCols:l,tabletCols:c,desktopCols:d,xxsCols:u,xsCols:h,smCols:f,mdCols:p,lgCols:m,xlCols:b,xxlCols:v}=t,y=ct(t,["label","errorMessage","id","data-error-testid","data-testid","layoutType","mobileCols","tabletCols","desktopCols","xxsCols","xsCols","smCols","mdCols","lgCols","xlCols","xxlCols"]);const[x]=g((()=>`form-field-${Od.generate()}`)),w=null!=o?o:x;return e(Gu,{id:w,"data-testid":a,label:r,errorMessage:n,"data-error-testid":i,disabled:y.disabled,layoutType:s,mobileCols:l,tabletCols:c,desktopCols:d,xxsCols:u,xsCols:h,smCols:f,mdCols:p,lgCols:m,xlCols:b,xxlCols:v,children:e(gD,Object.assign({id:`${w}-base`,"data-testid":a?`${a}-base`:void 0,error:!!n},y))})},NestedMultiSelect:t=>{var{label:r,errorMessage:n,id:o,"data-error-testid":i,"data-testid":a,layoutType:s,mobileCols:l,tabletCols:c,desktopCols:d,xxsCols:u,xsCols:h,smCols:f,mdCols:p,lgCols:m,xlCols:b,xxlCols:v}=t,y=ct(t,["label","errorMessage","id","data-error-testid","data-testid","layoutType","mobileCols","tabletCols","desktopCols","xxsCols","xsCols","smCols","mdCols","lgCols","xlCols","xxlCols"]);const[x]=g((()=>`form-field-${Od.generate()}`)),w=null!=o?o:x;return e(Gu,{id:w,"data-testid":a,label:r,errorMessage:n,"data-error-testid":i,disabled:y.disabled,layoutType:s,mobileCols:l,tabletCols:c,desktopCols:d,xxsCols:u,xsCols:h,smCols:f,mdCols:p,lgCols:m,xlCols:b,xxlCols:v,children:e(pD,Object.assign({id:`${w}-base`,"data-testid":a?`${a}-base`:void 0,error:!!n},y))})},Select:t=>{var{label:r,errorMessage:n,id:o,"data-error-testid":i,"data-testid":a,enableSearch:s=!1,layoutType:l,mobileCols:c,tabletCols:d,desktopCols:u,xxsCols:h,xsCols:f,smCols:p,mdCols:m,lgCols:b,xlCols:v,xxlCols:y,variant:x}=t,w=ct(t,["label","errorMessage","id","data-error-testid","data-testid","enableSearch","layoutType","mobileCols","tabletCols","desktopCols","xxsCols","xsCols","smCols","mdCols","lgCols","xlCols","xxlCols","variant"]);const[$]=g((()=>`form-field-${Od.generate()}`)),C=null!=o?o:$;return e(Gu,{id:C,"data-testid":a,label:r,errorMessage:n,"data-error-testid":i,disabled:w.disabled,layoutType:l,mobileCols:c,tabletCols:d,desktopCols:u,xxsCols:h,xsCols:f,smCols:p,mdCols:m,lgCols:b,xlCols:v,xxlCols:y,children:e(uk,Object.assign({id:`${C}-base`,"data-testid":a?`${a}-base`:void 0,error:!!n,enableSearch:s,variant:x},w))})},SelectHistogram:t=>{var{label:r,errorMessage:n,id:o,"data-error-testid":i,"data-testid":a,layoutType:s,mobileCols:l,tabletCols:c,desktopCols:d,xxsCols:u,xsCols:h,smCols:f,mdCols:p,lgCols:m,xlCols:b,xxlCols:v,histogramSlider:y}=t,x=ct(t,["label","errorMessage","id","data-error-testid","data-testid","layoutType","mobileCols","tabletCols","desktopCols","xxsCols","xsCols","smCols","mdCols","lgCols","xlCols","xxlCols","histogramSlider"]);const[w]=g((()=>`form-field-${Od.generate()}`)),$=null!=o?o:w;return e(Gu,{id:$,"data-testid":a,label:r,errorMessage:n,"data-error-testid":i,disabled:x.disabled,layoutType:s,mobileCols:l,tabletCols:c,desktopCols:d,xxsCols:u,xsCols:h,smCols:f,mdCols:p,lgCols:m,xlCols:b,xxlCols:v,children:e(mk,Object.assign({histogramSlider:y,error:!!n,"data-testid":a?`${a}-base`:void 0,id:`${$}-base`},x))})},Slider:t=>{var{label:r,errorMessage:n,id:o="form-slider","data-error-testid":i,"data-testid":a,layoutType:s,mobileCols:l,tabletCols:c,desktopCols:d,xxsCols:u,xsCols:h,smCols:f,mdCols:p,lgCols:g,xlCols:m,xxlCols:b}=t,v=ct(t,["label","errorMessage","id","data-error-testid","data-testid","layoutType","mobileCols","tabletCols","desktopCols","xxsCols","xsCols","smCols","mdCols","lgCols","xlCols","xxlCols"]);return e(Gu,{id:o,label:r,errorMessage:n,"data-error-testid":i,disabled:v.disabled,layoutType:s,mobileCols:l,tabletCols:c,desktopCols:d,xxsCols:u,xsCols:h,smCols:f,mdCols:p,lgCols:g,xlCols:m,xxlCols:b,children:e(bk,Object.assign({id:`${o}-base`,"data-testid":a||o},v))})},RangeSlider:t=>{var{label:r,errorMessage:n,id:o="form-range-slider","data-error-testid":i,"data-testid":a,layoutType:s,mobileCols:l,tabletCols:c,desktopCols:d,xxsCols:u,xsCols:h,smCols:f,mdCols:p,lgCols:g,xlCols:m,xxlCols:b}=t,v=ct(t,["label","errorMessage","id","data-error-testid","data-testid","layoutType","mobileCols","tabletCols","desktopCols","xxsCols","xsCols","smCols","mdCols","lgCols","xlCols","xxlCols"]);return e(Gu,{id:o,label:r,errorMessage:n,"data-error-testid":i,disabled:v.disabled,layoutType:s,mobileCols:l,tabletCols:c,desktopCols:d,xxsCols:u,xsCols:h,smCols:f,mdCols:p,lgCols:g,xlCols:m,xxlCols:b,children:e(lg,Object.assign({id:`${o}-base`,"data-testid":a||o},v))})},RangeSelect:t=>{var{label:r,errorMessage:n,id:o="form-select","data-error-testid":i,"data-testid":a,enableSearch:s=!1,layoutType:l,mobileCols:c,tabletCols:d,desktopCols:u,xxsCols:h,xsCols:f,smCols:p,mdCols:g,lgCols:m,xlCols:b,xxlCols:v}=t,y=ct(t,["label","errorMessage","id","data-error-testid","data-testid","enableSearch","layoutType","mobileCols","tabletCols","desktopCols","xxsCols","xsCols","smCols","mdCols","lgCols","xlCols","xxlCols"]);return e(Gu,{id:o,label:r,errorMessage:n,"data-error-testid":i,disabled:y.disabled,layoutType:l,mobileCols:c,tabletCols:d,desktopCols:u,xxsCols:h,xsCols:f,smCols:p,mdCols:g,lgCols:m,xlCols:b,xxlCols:v,children:e(dk,Object.assign({id:`${o}-base`,"data-testid":a||o,error:!!n,enableSearch:s},y))})},Textarea:kk,Timepicker:t=>{var{label:r,errorMessage:n,id:o="form-timepicker","data-error-testid":i,"data-testid":a,layoutType:s,mobileCols:l,tabletCols:c,desktopCols:d,xxsCols:u,xsCols:h,smCols:f,mdCols:p,lgCols:g,xlCols:m,xxlCols:b}=t,v=ct(t,["label","errorMessage","id","data-error-testid","data-testid","layoutType","mobileCols","tabletCols","desktopCols","xxsCols","xsCols","smCols","mdCols","lgCols","xlCols","xxlCols"]);return e(Gu,{id:o,label:r,errorMessage:n,disabled:v.disabled,"data-error-testid":i,layoutType:s,mobileCols:l,tabletCols:c,desktopCols:d,xxsCols:u,xsCols:h,smCols:f,mdCols:p,lgCols:g,xlCols:m,xxlCols:b,children:e(hT,Object.assign({id:`${o}-base`,"data-testid":a||o,error:!!n},v))})},TimeRangePicker:t=>{var{label:r,errorMessage:n,id:o="form-timepicker","data-error-testid":i,"data-testid":a,layoutType:s,mobileCols:l,tabletCols:c,desktopCols:d,xxsCols:u,xsCols:h,smCols:f,mdCols:p,lgCols:g,xlCols:m,xxlCols:b}=t,v=ct(t,["label","errorMessage","id","data-error-testid","data-testid","layoutType","mobileCols","tabletCols","desktopCols","xxsCols","xsCols","smCols","mdCols","lgCols","xlCols","xxlCols"]);return e(Gu,{id:o,label:r,errorMessage:n,disabled:v.disabled,"data-error-testid":i,layoutType:s,mobileCols:l,tabletCols:c,desktopCols:d,xxsCols:u,xsCols:h,smCols:f,mdCols:p,lgCols:g,xlCols:m,xxlCols:b,children:e(dT,Object.assign({id:`${o}-base`,"data-testid":a||o,error:!!n},v))})},CustomField:t=>{var{id:r="form-custom-field","data-error-testid":n,children:o}=t,i=ct(t,["id","data-error-testid","children"]);return e(Gu,Object.assign({id:r,"data-error-testid":n},i,{children:o}))},UnitNumberInput:t=>{var{label:r,errorMessage:n,id:o,"data-error-testid":i,"data-testid":a,layoutType:s,mobileCols:l,tabletCols:c,desktopCols:d,xxsCols:u,xsCols:h,smCols:f,mdCols:p,lgCols:m,xlCols:b,xxlCols:v}=t,y=ct(t,["label","errorMessage","id","data-error-testid","data-testid","layoutType","mobileCols","tabletCols","desktopCols","xxsCols","xsCols","smCols","mdCols","lgCols","xlCols","xxlCols"]);const[x]=g((()=>`form-unit-number-input-${Od.generate()}`)),w=null!=o?o:x;return e(Gu,{id:w,"data-testid":a,label:r,errorMessage:n,"data-error-testid":i,disabled:y.disabled,layoutType:s,mobileCols:l,tabletCols:c,desktopCols:d,xxsCols:u,xsCols:h,smCols:f,mdCols:p,lgCols:m,xlCols:b,xxlCols:v,children:e(yT,Object.assign({id:`${w}-base`,"data-testid":a?`${a}-base`:void 0,"aria-labelledby":`${w}-label`,error:!!n},y))})},PhoneNumberInput:t=>{var{label:r,errorMessage:n,id:o,"data-error-testid":i,"data-testid":a,layoutType:s,mobileCols:l,tabletCols:c,desktopCols:d,xxsCols:u,xsCols:h,smCols:f,mdCols:p,lgCols:m,xlCols:b,xxlCols:v}=t,y=ct(t,["label","errorMessage","id","data-error-testid","data-testid","layoutType","mobileCols","tabletCols","desktopCols","xxsCols","xsCols","smCols","mdCols","lgCols","xlCols","xxlCols"]);const[x]=g((()=>`form-phone-number-input-${Od.generate()}`)),w=null!=o?o:x;return e(Gu,{id:w,"data-testid":a,label:r,errorMessage:n,"data-error-testid":i,disabled:y.disabled,layoutType:s,mobileCols:l,tabletCols:c,desktopCols:d,xxsCols:u,xsCols:h,smCols:f,mdCols:p,lgCols:m,xlCols:b,xxlCols:v,children:e(TD,Object.assign({id:`${w}-base`,"data-testid":a?`${a}-base`:void 0,"aria-labelledby":`${w}-label`,error:!!n},y))})},PredictiveTextInput:t=>{var{label:r,errorMessage:n,id:o,"data-error-testid":i,"data-testid":a,layoutType:s,mobileCols:l,tabletCols:c,desktopCols:d,xxsCols:u,xsCols:h,smCols:f,mdCols:p,lgCols:m,xlCols:b,xxlCols:v}=t,y=ct(t,["label","errorMessage","id","data-error-testid","data-testid","layoutType","mobileCols","tabletCols","desktopCols","xxsCols","xsCols","smCols","mdCols","lgCols","xlCols","xxlCols"]);const[x]=g((()=>`form-field-${Od.generate()}`)),w=null!=o?o:x;return e(Gu,{id:w,"data-testid":a,label:r,errorMessage:n,"data-error-testid":i,disabled:y.disabled,layoutType:s,mobileCols:l,tabletCols:c,desktopCols:d,xxsCols:u,xsCols:h,smCols:f,mdCols:p,lgCols:m,xlCols:b,xxlCols:v,children:e(sk,Object.assign({id:`${w}-base`,"data-testid":a?`${a}-base`:void 0,"aria-labelledby":`${w}-label`,error:!!n},y))})},OtpVerification:t=>{var{label:r,id:n,"data-error-testid":o,"data-testid":i,layoutType:a,mobileCols:s,tabletCols:l,desktopCols:c,xxsCols:d,xsCols:u,smCols:h,mdCols:f,lgCols:p,xlCols:m,xxlCols:b}=t,v=ct(t,["label","id","data-error-testid","data-testid","layoutType","mobileCols","tabletCols","desktopCols","xxsCols","xsCols","smCols","mdCols","lgCols","xlCols","xxlCols"]);const[y]=g((()=>`form-otp-verification-${Od.generate()}`)),x=null!=n?n:y;return e(Gu,{id:x,"data-testid":i,label:r,"data-error-testid":o,layoutType:a,mobileCols:s,tabletCols:l,desktopCols:c,xxsCols:d,xsCols:u,smCols:h,mdCols:f,lgCols:p,xlCols:m,xxlCols:b,children:e(JD,Object.assign({id:`${x}-base-field`,inputId:`${x}-base`,"data-testid":i?`${i}-base`:void 0},v))})}},$T=F.li`
    display: flex;
    flex-direction: column;
    padding: ${aa["spacing-32"]} 0;
    background: transparent;

    &:not(:last-child) {
        border-bottom: ${ia["width-010"]} ${ia.solid} ${ra.border};
    }
`,CT=F.div`
    display: flex;
    align-items: flex-start;
    margin-bottom: ${aa["spacing-16"]};
    width: 100%;
`,ST=F.div`
    display: flex;
    flex: 1;
    flex-direction: column;
`,DT=F.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin-bottom: ${aa["spacing-16"]};

    ${da.MaxWidth.md} {
        flex-direction: column;
        justify-content: flex-start;
    }
`,kT=F(_a.BodyMD)`
    display: flex;
    flex: 1;
    margin-right: ${aa["spacing-16"]};

    ${da.MaxWidth.md} {
        margin-right: 0;
        margin-bottom: ${aa["spacing-8"]};
    }
`,ET=F(_a.BodyMD)``,FT=F.div`
    display: flex;
    ${da.MaxWidth.md} {
        flex-direction: column;
    }

    ${e=>{if(e.$thumbnail)return O`
                margin-left: calc(
                    96px + ${aa["spacing-32"]}
                ); // thumbnail width + right margin

                ${da.MaxWidth.md} {
                    margin-left: 0;
                }
            `}}
`,OT=F(Ph.Small)`
    width: 7.5rem;
    &:not(:last-of-type) {
        margin-right: ${aa["spacing-16"]};
    }

    ${da.MaxWidth.md} {
        width: 100%;
        &:not(:last-of-type) {
            margin-bottom: ${aa["spacing-16"]};
        }
    }
`;const _T=({thumbnailImageDataUrl:r,"data-testid":n,renderReplaceButton:o,onReplaceClick:i})=>t(TT,{"data-testid":n,children:[e(IT,{"data-testid":n?`${n}-image`:void 0,src:r}),o&&e(MT,{type:"button",onClick:()=>{i&&i()},children:"Replace"})]}),TT=F.div`
    width: auto;
    margin-right: ${aa["spacing-32"]};
    display: flex;
    flex-shrink: 0;
    flex-direction: column;
    justify-content: center;
`,IT=F((({src:t,alt:r,className:n,"data-testid":o})=>e("img",{src:t,alt:r||"",className:n,"data-testid":o,onError:e=>{e.target.onerror=null,e.target.src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKAAAABQCAYAAACeXX40AAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAARTSURBVHgB7Z1tUuJAEIY7qMRYWnIE9wR6BD2Be5S9weoN1pusJ1iPwJ5guYH4GeNH2HkppgojYAIhbXrepwoJEMofPHZP9zQxkgJpmh5HUfTdHZ6624EQsiLOp7676+d5fp4kyeDda/5gNBr1siz76Q5/CCHr41ccx+dOyiEejAWcyHflDg+FkDWDiNjtdk8gYQdPTCIf5SON4ALe0cQ5idya78CZ+E8IaRgn4gki4JkQogCK3Y77wdRLtDiNnp6eRkKIEh0hRBEKSFShgEQVCkhUoYBEFQpIVKGARBUKSFShgEQVCkhUoYBEFQpIVNkUokqWZfLy8iJvb2/jx1tbWxLHsWxsbEgIcBpGCQh3e3srr6+vH16Lokh2dnbGN+swAioA+a6vrzERPPN1PP/w8CB5nsvu7q5YhmvAhoFciHzz5JsmTVNxGUosQwEbBmu+WWl3Ho+Pj6VkbSsUsGGqRjSka6Riq1DAhllGJkZAUhuocKtCAUltLNPfs9wTpIAL8M3hOtne3q50PhrTnY7dj4kCzgFrteFwKM/Pz1In3W53vNNRFvYBA+Xm5mYs4bzdilWAVJubn+8B7O3tlTqvzVDAGaAB7KVDAXB/f19rIYCU2uv1JEmSmUUJpMPrVdN1G+FecAGs+5B6i+0SpM79/X2pG/weyI57yIiCw3rUm4Z7wVMgyt3d3c3s1WEtiMiIqFUniIaQO1SYgqfALgVGo+aBVFx3URI6FHACoh4mUD4DRYnlrbGmoYATUPWWKTRwDtaIlncnmoQCyvuqtwwoVJCOyeoELyBkKpN6i2C9iFEpshrBC1h2OHQWEHeZogTvwVwgCVxARLBVdzmqFiUQD+/BbR17zW0jWAHx4deRQhE9yxYwfu3oz10l+lohWAHLSlMGRFE0sBfhhxumoyXeF3oxE6SAiHx1pz+k1nnj9pDODzcUwXusf/FoEcEJiKizruoVUbC4k+LlW7TW9F/BDJHgBFz3uqu4l4zHnxU6fuwrxPVgUAKi4bzuytNf8cAPNpRt0yByhthXDGYcC1EIVyNoCoxUVW3xYBwLQ6hVJqbbThAR0EejJlmmv+iHX0NaDwYhYB0N56bw68FQMC8gxMPar02EtB40LyBSbxurS7RmFg3HWsG0gG1KvbNo6x9PFcwKiOixzJjVV2K6pWMVkwL6atIC1ke3TArY9tRbpMxuSlsxJ2Abq94yWE3F5gS0+kFZ/R6KKQFRdFieMsbYlrXobkbAUJq31ka3zFyaAwKGsomPqrjuS4RowYsTEVX4xXSiCgUkqlBAogoFJKpQQKIKBSSqUECiCgUkqlBAogoFJKpAwIEQokO/k+f5pRCiQBRF/ShN02N38EcIaZjRaPStkyTJlYuCF0JIs1w49wbj/5TnTOxlWYYoeCSErJ+/cRwj8w7HVTAO3BMnjISkAS68fHjw4X+FujXhgbs7cyccCiMiqYeBu126TPsbS77pF/4DuxeyMpdnp3gAAAAASUVORK5CYII="}})))`
    width: 96px;
    height: 96px;
    aspect-ratio: 1;
    border-radius: ${sa.sm};
    border: ${ia["width-010"]} ${ia.solid} ${ra.border};
    object-fit: cover;

    ${da.MaxWidth.md} {
        width: 64px;
        height: 64px;
    }
`,MT=F.button`
    width: 100%;
    height: 1.625rem;
    margin-top: ${aa["spacing-8"]};
    border: none;
    background: transparent;
    cursor: pointer;

    ${na["body-md-semibold"]}
    color: ${ra["text-primary"]};

    &:hover {
        color: ${ra["text-hover"]};
    }
`;var AT;!function(e){e.formatFileSizeDisplay=e=>{if(!e||0===e)return"0 KB";const t=Math.floor(Math.log(e)/Math.log(1024));return`${Number(e/Math.pow(1024,t)).toFixed(0)} ${["B","KB","MB","GB","TB","PB","EB","ZB","YB"][t]}`},e.isSupportedImageType=e=>["image/avif","image/gif","image/jpeg","image/png","image/svg+xml","image/webp"].includes(e)}(AT||(AT={}));const BT=({fileItem:r,fileDescriptionMaxLength:n,wrapperWidth:o,onSave:i,onCancel:a,onBlur:l})=>{const{id:d,name:u,size:h,truncateText:f=!0,thumbnailImageDataUrl:p}=r,[m,b]=g(),[v,y]=g(""),x=s(null),w=s(null);c((()=>{b($(u))}),[o]),c((()=>{y(r.description||"")}),[r]);const $=e=>{if(!f)return e;const t=w&&w.current?w.current.getBoundingClientRect().width:0;return _d.truncateOneLine(e,t,t/2,t/2/8,16)};return t($T,{"data-testid":`${d}-edit-display`,children:[t(CT,{children:[p&&e(_T,{thumbnailImageDataUrl:p}),t(ST,{children:[t(DT,{ref:w,children:[e(kT,{weight:"semibold",children:m}),e(ET,{children:AT.formatFileSizeDisplay(h)})]}),e(wT.Textarea,{ref:x,id:`${d}-description-textarea`,"data-testid":`${d}-textarea`,value:v,maxLength:n,onChange:e=>{y(e.target.value)},onBlur:e=>{l(e.target.value)},rows:3,"aria-label":`Photo description for ${u}`,label:{children:"Photo description",subtitle:"Describe this photo to users who may not be able to see the image."}})]})]}),t(FT,{$thumbnail:!!p,children:[e(OT,{"data-testid":`${d}-save-button`,type:"button",disabled:0===v.trim().length,onClick:()=>{x.current&&i(x.current.value.trim())},children:"Save"}),e(OT,{type:"button",styleType:"secondary","data-testid":`${d}-cancel-button`,onClick:a,children:"Cancel"})]})]})},jT=F.li`
    display: flex;
    align-items: center;
    width: 100%;
    border: none;

    &:not(:last-child) {
        margin-bottom: ${aa["spacing-16"]};
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
`,zT=F(Ae)`
    margin-right: ${aa["spacing-16"]};
    height: 1.5rem;
    width: 1.5rem;
    color: ${ra.icon};

    ${e=>e.$active?O`
                color: ${ra["icon-primary"]};
            `:e.$disabled?O`
                color: ${ra["icon-disabled"]};
            `:void 0};
`,RT=F.div`
    background: ${ra["bg-primary-subtlest"]};
    border: ${ia["width-010"]} ${ia.solid} ${ra.border};
    border-radius: ${sa.sm};
    padding: ${aa["spacing-16"]} ${aa["spacing-32"]};
    display: flex;
    align-items: center;
    width: 100%;

    ${da.MaxWidth.md} {
        padding: ${aa["spacing-16"]};
    }

    ${e=>e.$focused?O`
                border-color: ${ra["border-focus"]};
                box-shadow: ${la["xs-focus-strong"]};
            `:e.$disabled?O`
                border-color: ${ra["border-disabled"]};
            `:e.$error?O`
                background: ${ra["bg-error"]};
                border-color: ${ra["border-error"]};
            `:void 0}

    ${e=>{if(!e.$error&&(e.$loading||e.$editable))return O`
                ${da.MaxWidth.md} {
                    flex-direction: column;
                    align-items: flex-start;
                }
            `}}
`,LT=F.div`
    display: flex;
    flex: 1;
    align-items: center;

    ${da.MaxWidth.md} {
        flex-direction: column;
        width: 100%;
        align-items: flex-start;
    }

    ${e=>{if(e.$hasThumbnail)return O`
                ${da.MaxWidth.md} {
                    flex-direction: row;
                    align-items: center;
                }
            `}}
`,PT=F.div`
    display: flex;
    flex: 1;
    flex-direction: column;
    width: 100%;
`,NT=F.div`
    display: flex;
    flex: 1;
    align-items: center;

    ${da.MaxWidth.md} {
        flex-direction: column;
        align-items: flex-start;
        width: 100%;
    }
`,WT=F.div`
    display: flex;
    width: 5rem;
    margin-left: ${aa["spacing-8"]};
    justify-content: flex-end;

    ${da.MaxWidth.md} {
        ${e=>e.$hideInMobile?O`
                    display: none;
                    visibility: hidden;
                `:O`
                    width: 100%;
                    margin-left: 0;
                    margin-top: ${aa["spacing-8"]};
                    justify-content: flex-start;
                `}
    }
`,HT=F(_a.BodyMD)``,YT=F(HT)`
    margin-top: ${aa["spacing-4"]};
`,VT=F(se)`
    height: 1lh;
    width: 1em;
    flex-shrink: 0;
    color: ${ra["icon-error-strong"]};
`,UT=F(_a.BodySM)`
    color: ${ra["text-error"]};
`,KT=F(UT)`
    margin-top: ${aa["spacing-4"]};
    display: flex;
    gap: ${aa["spacing-4"]};

    ${da.MaxWidth.md} {
        display: none;
        visibility: hidden;
    }
`,qT=F(UT)`
    display: none;
    visibility: hidden;

    ${da.MaxWidth.md} {
        display: flex;
        gap: ${aa["spacing-4"]};
        visibility: visible;
        margin-top: ${aa["spacing-8"]};
    }
`,ZT=F.div`
    width: 6rem;
    margin-left: ${aa["spacing-32"]};
    display: flex;
    justify-content: flex-end;
    align-items: center;

    ${da.MaxWidth.md} {
        width: fit-content;

        ${e=>e.$loading&&!e.$error?O`
                    margin-left: 0;
                    margin-top: ${aa["spacing-16"]};
                    width: 100%;
                `:e.$editable&&!e.$error?O`
                    margin-left: 0;
                    margin-top: ${aa["spacing-16"]};
                    align-self: flex-end;
                `:void 0}
    }
`,GT=F(wp)`
    min-width: unset;

    &:not(:last-child) {
        margin-right: ${aa["spacing-16"]};
    }
`,QT=F(Wd)`
    height: 2.5rem;
    width: 2.5rem;
    padding: unset;
    svg {
        height: 1.5rem;
        width: 1.5rem;
        color: ${ra.icon};
    }
`,XT=m((({fileItem:n,editable:o,sortable:i,wrapperWidth:a,disabled:l,readOnly:d,onDelete:u,onEditClick:h})=>{const{id:f,name:p,size:m,description:v,progress:y=1,errorMessage:x,thumbnailImageDataUrl:w,truncateText:$=!0}=n,[C,S]=g(),{activeId:D}=b(Be),{attributes:k,listeners:E,setNodeRef:F,transform:O,transition:_}=oc({id:f}),T=s(null),I={transform:os.Translate.toString(O),transition:_},M=Object.assign(Object.assign({style:I},k),E),A=y<1,B=AT.formatFileSizeDisplay(m),j=D?D===f?"self":"others":"none";c((()=>{S(N(p))}),[a]);const z=()=>{u()},R=()=>{h&&h()},L=e=>{i&&e.stopPropagation()},N=e=>{if(!$)return e;const t=T&&T.current?T.current.getBoundingClientRect().width:0;return _d.truncateOneLine(e,t,t/2,t/2/8,16)},W=()=>l||!!D,H=()=>!!i&&!d,Y=()=>t(r,{children:[e(HT,{weight:v?"semibold":"regular",children:C}),v&&e(YT,{children:v})]});return t(jT,Object.assign({id:f,ref:F,$sortable:H(),$disabled:W(),$focusType:j},H()?M:{},{children:[H()&&e(zT,{"data-testid":`${f}-drag-handle`,$disabled:W(),$active:"self"===j}),t(RT,{$focused:"self"===j,$error:!!x,$loading:A,$disabled:W(),$editable:o,children:[(()=>{let n;return n=x?t(r,{children:[t(PT,{ref:T,children:[Y(),x&&t(KT,{weight:"semibold",children:[e(VT,{"aria-hidden":!0}),x]})]}),e(WT,{children:e(HT,{children:B})}),x&&t(qT,{weight:"semibold",children:[e(VT,{"aria-hidden":!0}),x]})]}):w?(n=>t(r,{children:[e(_T,{thumbnailImageDataUrl:n,"data-testid":`${f}-thumbnail`}),t(NT,{children:[e(PT,{ref:T,children:Y()}),e(WT,{children:e(HT,{children:B})})]})]}))(w):t(r,{children:[e(PT,{ref:T,children:Y()}),e(WT,{$hideInMobile:A,children:e(HT,{children:B})})]}),e(LT,{$hasThumbnail:!!w,children:n})})(),!d&&(()=>{let n;return n=x?e(QT,{onClick:z,"data-testid":`${f}-error-delete-button`,"aria-label":`delete ${p}, error: ${x}`,children:e(P,{"aria-hidden":!0})}):A?e(vp,{progress:y,"data-testid":`${f}-progress-bar`}):t(r,{children:[o&&e(GT,{"data-testid":`${f}-edit-button`,"data-no-dnd":"true",type:"button",styleType:"light",sizeType:"small","aria-label":`edit ${p}`,disabled:W(),onClick:R,onKeyDown:L,children:e(Me,{"aria-hidden":!0})},"edit"),e(GT,{"data-testid":`${f}-delete-button`,"data-no-dnd":"true",type:"button",styleType:"light",sizeType:"small","aria-label":`delete ${p}`,disabled:W(),onClick:z,onKeyDown:L,children:e(Ie,{"aria-hidden":!0})},"delete")]}),e(ZT,{$editable:o,$error:!!x,$loading:A,children:n})})()]})]}))})),JT=F.ul`
    list-style-type: none;
    margin-bottom: ${e=>e.$readOnly?"0":aa["spacing-32"]};
`,eI=F.li`
    border-top: ${ia["width-010"]} ${ia.solid} ${ra.border};
    border-bottom: ${ia["width-010"]} ${ia.solid} ${ra.border};

    &:not(:last-child) {
        margin-bottom: ${aa["spacing-32"]};
    }

    &:not(:first-child) {
        margin-top: ${aa["spacing-32"]};
    }

    ul {
        list-style-type: none;
    }
`;const tI=u((function({fileItems:n=[],editableFileItems:o,fileDescriptionMaxLength:i,sortable:l,disabled:d,readOnly:u,onItemUpdate:f,onItemDelete:p,onSort:m},v){const[y,x]=g({}),{setActiveId:w}=b(Be),[$,C]=g(""),S=s({});h(v,(()=>({focus:()=>{var e;null===(e=k.current)||void 0===e||e.focus()}})));const{width:D=0,ref:k}=nd(),E=s({}),F=function(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];return a((()=>[...t].filter((e=>null!=e))),[...t])}(ms(od,{activationConstraint:{distance:8}}),ms(cl,{activationConstraint:{delay:150,tolerance:5}}),ms(Js,{coordinateGetter:sc})),O=e=>{delete E.current[e]};c((()=>{const e=L(n);((e,t)=>{const r=Object.keys(e),n=Object.keys(t);if(r.length!==n.length)return!1;for(const r of n)if(e[r]!==t[r])return!1;return!0})(y,e)||x(e)}),[n,o,u]),c((()=>{var e;if(!n||0===n.length)return void C("");const t=Date.now(),r=[];for(const o of n){const n=S.current[o.id];if(o.errorMessage)"error"!==(null==n?void 0:n.status)&&(r.push("string"==typeof o.errorMessage?`Error uploading ${o.name}: ${o.errorMessage}`:`Error uploading ${o.name}`),S.current[o.id]={progress:null!==(e=o.progress)&&void 0!==e?e:1,timestamp:t,status:"error"});else if(void 0!==o.progress)if(o.progress>=1)"complete"!==(null==n?void 0:n.status)&&(r.push(`${o.name} upload is complete`),S.current[o.id]={progress:1,timestamp:t,status:"complete"});else if("number"==typeof o.progress&&o.progress<1){(!n||"in-progress"!==n.status)&&(r.push(`Starting upload of ${o.name}`),S.current[o.id]={progress:o.progress,timestamp:t,status:"in-progress"})}}r.length>0&&C(r.join(", "))}),[n]);const _=e=>t=>{P(e.id,"display"),O(e.id);const r=Object.assign(Object.assign({},e),{description:t});f(r)},T=e=>t=>{E.current[e.id]=t},I=e=>()=>{e.description&&0!==e.description.length?P(e.id,"display"):p(e),O(e.id)},M=e=>()=>{P(e.id,"edit")},A=e=>()=>{p(e),k.current&&k.current.focus()},B=e=>{if(m&&n){const{active:t,over:r}=e;if(r&&t.id!==r.id){const e=n.findIndex((e=>e.id===t.id)),o=n.findIndex((e=>e.id===r.id)),i=Hl(n,e,o);m(i)}}w(void 0)},j=e=>{const{active:t}=e;w(t.id)},z=e=>o&&AT.isSupportedImageType(e.type),R=e=>!e.errorMessage&&!u&&!("number"==typeof e.progress&&e.progress<1)&&z(e)&&!e.description,L=e=>{if(!e||0===e.length)return{};const t={};for(const r of e)r.errorMessage?t[r.id]="error":y[r.id]?t[r.id]=y[r.id]:t[r.id]=R(r)?"edit":"display";return t},P=(e,t)=>{x((r=>Object.assign(Object.assign({},r),{[e]:t})))},N=()=>n&&n.length>1&&l&&Object.values(y).every((e=>"display"===e)),W=()=>{if(0===n.length)return"No files uploaded";const e=n.filter((e=>!(null==e?void 0:e.errorMessage)&&(1===e.progress||void 0===e.progress))).length,t=n.filter((e=>"number"==typeof e.progress&&e.progress<1)).length,r=n.filter((e=>e.errorMessage)).length;if(0===e&&0===t&&0===r)return"File list";const o=[e>0?`${e} completed files`:"",t>0?`${t} file in progress`:"",r>0?`${r} ${r>1?"files":"file"} with error`:""].filter(Boolean);return`${u?"Read-only file list":"File list"}. ${o.join(", ")}`},H=()=>{const t=((e,t)=>{if(!e||0===e.length)return[];const r=[];for(const n of e)if("edit"===t[n.id]){const e=r[r.length-1];Array.isArray(e)?e.push(n):r.push([n])}else r.push(n);return r})(n,y);return 0===t.length?null:t.map(((t,r)=>Array.isArray(t)?((t,r)=>{const n=t.map((t=>{const r=Object.assign({},t);return void 0!==E.current[t.id]&&(r.description=E.current[t.id]),e(BT,{fileItem:r,wrapperWidth:D,fileDescriptionMaxLength:i,onSave:_(t),onCancel:I(t),onBlur:T(t)},t.id)}));return e(eI,{children:e("ul",{children:n})},`editable-${r}`)})(t,r):e(XT,{fileItem:t,editable:z(t),wrapperWidth:D,sortable:N(),disabled:d,readOnly:u,onDelete:A(t),onEditClick:M(t)},t.id)))},Y=()=>t(r,{children:[e(dh,{"aria-live":"polite","aria-atomic":"true",children:$}),e(JT,{tabIndex:-1,$readOnly:u,ref:k,"aria-label":W(),children:H()})]});return d||u||!N()?Y():e(Rl,{sensors:F,onDragEnd:B,onDragStart:j,children:e(Ql,{items:n,strategy:ql,children:Y()})})})),rI=F.div`
    display: flex;
    flex-direction: column;
    margin-bottom: ${aa["spacing-32"]};
    gap: ${aa["spacing-8"]};
`,nI=F(_a.BodyBL)``,oI=F.div`
    color: ${ra.text};
    ${Ud({textSize:"body-baseline"})}
`,iI=F(_a.BodyMD)`
    color: ${ra["text-subtler"]};
`,aI=F.div`
    color: ${ra.text};
    ${Ud({textSize:"body-md"})}
`,sI=F(x_)`
    margin-bottom: ${aa["spacing-32"]};
`,lI=F.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-end;

    ${da.MaxWidth.md} {
        align-items: flex-start;
    }
`,cI=F(Ph.Small)`
    width: 10rem;

    ${da.MaxWidth.md} {
        width: 100%;
    }
`,dI=F(_a.BodyMD)`
    color: ${ra["text-subtler"]};
    margin-top: ${aa["spacing-8"]};
    width: 10rem;
    text-align: center;
    ${da.MaxWidth.md} {
        display: none;
        visibility: hidden;
    }
`,uI=F(x_)`
    margin-bottom: ${aa["spacing-32"]};
`,hI=({styleType:r="bordered",fileItems:n,title:o,description:i,maxFiles:a,warning:l,className:c,name:d,id:u,"data-testid":h,accept:f,capture:p,multiple:m,disabled:b,sortable:v=!1,fileDescriptionMaxLength:y,editableFileItems:x=!1,errorMessage:w,readOnly:$,customLabels:C,onChange:S,onDelete:D,onEdit:k,onSort:E})=>{const F={uploadButton:(null==C?void 0:C.uploadButtonLabel)||"Upload files"},O=s(null),_=s(null),[T,I]=g(),M=()=>!(!a||!n)&&n.length>=a;return e(Be.Provider,{value:{activeId:T,setActiveId:I},children:t(ja,{ref:O,onChange:e=>{var t;!b&&S&&(S(e),null===(t=_.current)||void 0===t||t.focus())},id:u?`${u}-dropzone`:"dropzone",accept:f,capture:p,border:"bordered"===r,className:c,"data-testid":h,name:d,multiple:m,disabled:b||M()||$,children:[!(!o&&!i)&&t(rI,{children:[o?e("string"==typeof o?nI:oI,{children:o}):null,i?e("string"==typeof i?iI:aI,{children:i}):null]}),!!l&&e(sI,{type:"warning",children:l}),e(tI,{ref:_,fileItems:n,editableFileItems:x,fileDescriptionMaxLength:y,sortable:v,disabled:b,readOnly:$,onItemDelete:e=>{var t;D&&(D(e),null===(t=_.current)||void 0===t||t.focus())},onItemUpdate:e=>{k&&k(e)},onSort:e=>{E&&E(e)}}),w&&e(uI,{type:"error",children:w}),!$&&t(lI,{children:[e(cI,{type:"button",styleType:"secondary",disabled:!!T||b||M(),onClick:e=>{b||(e.preventDefault(),O.current&&O.current.openFileDialog())},children:F.uploadButton}),e(dI,{weight:"semibold",children:"or drop them here"})]})]})})};export{ra as C,hI as F,Np as S,dt as _,Wp as a};
//# sourceMappingURL=index.17a76859.js.map
