import{jsxs as e,jsx as t,Fragment as r}from"react/jsx-runtime";import*as n from"react";import o,{createContext as i,useMemo as a,useRef as s,useReducer as l,useEffect as c,useCallback as d,forwardRef as u,useImperativeHandle as f,Fragment as h,useLayoutEffect as p,useState as g,memo as m,useContext as b,isValidElement as v,createRef as y,cloneElement as x,PureComponent as w,Children as $,lazy as C,Suspense as S,createElement as D}from"react";import{CloudArrowUpFillIcon as k}from"@lifesg/react-icons/cloud-arrow-up-fill";import E,{css as _,useTheme as O,keyframes as F}from"styled-components";import{ExternalIcon as T}from"@lifesg/react-icons/external";import I,{unstable_batchedUpdates as M,createPortal as A,findDOMNode as j}from"react-dom";import{ICircleFillIcon as B}from"@lifesg/react-icons/i-circle-fill";import{useFloatingTree as R,FloatingTree as z,useFloatingNodeId as P,FloatingNode as L,useFloating as N,autoUpdate as H,offset as W,flip as V,shift as Y,limitShift as U,useClick as K,useDismiss as q,useHover as G,useInteractions as Q,FloatingPortal as Z,FloatingFocusManager as X,size as J,useTransitionStyles as ee}from"@floating-ui/react";import{CrossIcon as te}from"@lifesg/react-icons/cross";import{ChevronDownIcon as re}from"@lifesg/react-icons/chevron-down";import{ChevronLeftIcon as ne}from"@lifesg/react-icons/chevron-left";import{ChevronRightIcon as oe}from"@lifesg/react-icons/chevron-right";import{ArrowRightIcon as ie,PencilIcon as ae,EraserIcon as se,SquareIcon as le,SquareFillIcon as ce,SquareTickFillIcon as de,MinusSquareFillIcon as ue,CrossIcon as fe,ChevronDownIcon as he}from"@lifesg/react-icons";import{ExclamationCircleFillIcon as pe}from"@lifesg/react-icons/exclamation-circle-fill";import{MagnifierIcon as ge}from"@lifesg/react-icons/magnifier";import{EyeIcon as me}from"@lifesg/react-icons/eye";import{EyeSlashIcon as be}from"@lifesg/react-icons/eye-slash";import{ExclamationTriangleIcon as ve}from"@lifesg/react-icons/exclamation-triangle";import{SquareIcon as ye}from"@lifesg/react-icons/square";import{SquareFillIcon as xe}from"@lifesg/react-icons/square-fill";import{SquareTickFillIcon as we}from"@lifesg/react-icons/square-tick-fill";import{TickIcon as $e}from"@lifesg/react-icons/tick";import{CaretRightIcon as Ce}from"@lifesg/react-icons/caret-right";import{MinusSquareFillIcon as Se}from"@lifesg/react-icons/minus-square-fill";import{ChevronUpIcon as De}from"@lifesg/react-icons/chevron-up";import{ArrowRightIcon as ke}from"@lifesg/react-icons/arrow-right";import{ExclamationTriangleFillIcon as Ee}from"@lifesg/react-icons/exclamation-triangle-fill";import{TickCircleFillIcon as _e}from"@lifesg/react-icons/tick-circle-fill";import{CircleIcon as Oe}from"@lifesg/react-icons/circle";import{CircleDotIcon as Fe}from"@lifesg/react-icons/circle-dot";import{BinIcon as Te}from"@lifesg/react-icons/bin";import{PencilIcon as Ie}from"@lifesg/react-icons/pencil";import{DragHandleIcon as Me}from"@lifesg/react-icons/drag-handle";const Ae=i({activeId:void 0,setActiveId:()=>{}});var je="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};function Be(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Re,ze={exports:{}},Pe={exports:{}},Le={};var Ne,He,We,Ve,Ye,Ue,Ke,qe,Ge,Qe,Ze,Xe,Je,et,tt={};
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function rt(){return He||(He=1,"production"===process.env.NODE_ENV?Pe.exports=function(){if(Re)return Le;Re=1;var e="function"==typeof Symbol&&Symbol.for,t=e?Symbol.for("react.element"):60103,r=e?Symbol.for("react.portal"):60106,n=e?Symbol.for("react.fragment"):60107,o=e?Symbol.for("react.strict_mode"):60108,i=e?Symbol.for("react.profiler"):60114,a=e?Symbol.for("react.provider"):60109,s=e?Symbol.for("react.context"):60110,l=e?Symbol.for("react.async_mode"):60111,c=e?Symbol.for("react.concurrent_mode"):60111,d=e?Symbol.for("react.forward_ref"):60112,u=e?Symbol.for("react.suspense"):60113,f=e?Symbol.for("react.suspense_list"):60120,h=e?Symbol.for("react.memo"):60115,p=e?Symbol.for("react.lazy"):60116,g=e?Symbol.for("react.block"):60121,m=e?Symbol.for("react.fundamental"):60117,b=e?Symbol.for("react.responder"):60118,v=e?Symbol.for("react.scope"):60119;function y(e){if("object"==typeof e&&null!==e){var f=e.$$typeof;switch(f){case t:switch(e=e.type){case l:case c:case n:case i:case o:case u:return e;default:switch(e=e&&e.$$typeof){case s:case d:case p:case h:case a:return e;default:return f}}case r:return f}}}function x(e){return y(e)===c}return Le.AsyncMode=l,Le.ConcurrentMode=c,Le.ContextConsumer=s,Le.ContextProvider=a,Le.Element=t,Le.ForwardRef=d,Le.Fragment=n,Le.Lazy=p,Le.Memo=h,Le.Portal=r,Le.Profiler=i,Le.StrictMode=o,Le.Suspense=u,Le.isAsyncMode=function(e){return x(e)||y(e)===l},Le.isConcurrentMode=x,Le.isContextConsumer=function(e){return y(e)===s},Le.isContextProvider=function(e){return y(e)===a},Le.isElement=function(e){return"object"==typeof e&&null!==e&&e.$$typeof===t},Le.isForwardRef=function(e){return y(e)===d},Le.isFragment=function(e){return y(e)===n},Le.isLazy=function(e){return y(e)===p},Le.isMemo=function(e){return y(e)===h},Le.isPortal=function(e){return y(e)===r},Le.isProfiler=function(e){return y(e)===i},Le.isStrictMode=function(e){return y(e)===o},Le.isSuspense=function(e){return y(e)===u},Le.isValidElementType=function(e){return"string"==typeof e||"function"==typeof e||e===n||e===c||e===i||e===o||e===u||e===f||"object"==typeof e&&null!==e&&(e.$$typeof===p||e.$$typeof===h||e.$$typeof===a||e.$$typeof===s||e.$$typeof===d||e.$$typeof===m||e.$$typeof===b||e.$$typeof===v||e.$$typeof===g)},Le.typeOf=y,Le}():Pe.exports=(Ne||(Ne=1,"production"!==process.env.NODE_ENV&&function(){var e="function"==typeof Symbol&&Symbol.for,t=e?Symbol.for("react.element"):60103,r=e?Symbol.for("react.portal"):60106,n=e?Symbol.for("react.fragment"):60107,o=e?Symbol.for("react.strict_mode"):60108,i=e?Symbol.for("react.profiler"):60114,a=e?Symbol.for("react.provider"):60109,s=e?Symbol.for("react.context"):60110,l=e?Symbol.for("react.async_mode"):60111,c=e?Symbol.for("react.concurrent_mode"):60111,d=e?Symbol.for("react.forward_ref"):60112,u=e?Symbol.for("react.suspense"):60113,f=e?Symbol.for("react.suspense_list"):60120,h=e?Symbol.for("react.memo"):60115,p=e?Symbol.for("react.lazy"):60116,g=e?Symbol.for("react.block"):60121,m=e?Symbol.for("react.fundamental"):60117,b=e?Symbol.for("react.responder"):60118,v=e?Symbol.for("react.scope"):60119;function y(e){if("object"==typeof e&&null!==e){var f=e.$$typeof;switch(f){case t:var g=e.type;switch(g){case l:case c:case n:case i:case o:case u:return g;default:var m=g&&g.$$typeof;switch(m){case s:case d:case p:case h:case a:return m;default:return f}}case r:return f}}}var x=l,w=c,$=s,C=a,S=t,D=d,k=n,E=p,_=h,O=r,F=i,T=o,I=u,M=!1;function A(e){return y(e)===c}tt.AsyncMode=x,tt.ConcurrentMode=w,tt.ContextConsumer=$,tt.ContextProvider=C,tt.Element=S,tt.ForwardRef=D,tt.Fragment=k,tt.Lazy=E,tt.Memo=_,tt.Portal=O,tt.Profiler=F,tt.StrictMode=T,tt.Suspense=I,tt.isAsyncMode=function(e){return M||(M=!0,console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")),A(e)||y(e)===l},tt.isConcurrentMode=A,tt.isContextConsumer=function(e){return y(e)===s},tt.isContextProvider=function(e){return y(e)===a},tt.isElement=function(e){return"object"==typeof e&&null!==e&&e.$$typeof===t},tt.isForwardRef=function(e){return y(e)===d},tt.isFragment=function(e){return y(e)===n},tt.isLazy=function(e){return y(e)===p},tt.isMemo=function(e){return y(e)===h},tt.isPortal=function(e){return y(e)===r},tt.isProfiler=function(e){return y(e)===i},tt.isStrictMode=function(e){return y(e)===o},tt.isSuspense=function(e){return y(e)===u},tt.isValidElementType=function(e){return"string"==typeof e||"function"==typeof e||e===n||e===c||e===i||e===o||e===u||e===f||"object"==typeof e&&null!==e&&(e.$$typeof===p||e.$$typeof===h||e.$$typeof===a||e.$$typeof===s||e.$$typeof===d||e.$$typeof===m||e.$$typeof===b||e.$$typeof===v||e.$$typeof===g)},tt.typeOf=y}()),tt)),Pe.exports}
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/function nt(){if(Ve)return We;Ve=1;var e=Object.getOwnPropertySymbols,t=Object.prototype.hasOwnProperty,r=Object.prototype.propertyIsEnumerable;return We=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},r=0;r<10;r++)t["_"+String.fromCharCode(r)]=r;var n=Object.getOwnPropertyNames(t).map((function(e){return t[e]}));if("0123456789"!==n.join(""))return!1;var o={};return"abcdefghijklmnopqrst".split("").forEach((function(e){o[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},o)).join("")}catch(e){return!1}}()?Object.assign:function(n,o){for(var i,a,s=function(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}(n),l=1;l<arguments.length;l++){for(var c in i=Object(arguments[l]))t.call(i,c)&&(s[c]=i[c]);if(e){a=e(i);for(var d=0;d<a.length;d++)r.call(i,a[d])&&(s[a[d]]=i[a[d]])}}return s},We}function ot(){if(Ue)return Ye;Ue=1;return Ye="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"}function it(){return qe?Ke:(qe=1,Ke=Function.call.bind(Object.prototype.hasOwnProperty))}if("production"!==process.env.NODE_ENV){var at=rt();ze.exports=function(){if(Xe)return Ze;Xe=1;var e=rt(),t=nt(),r=ot(),n=it(),o=function(){if(Qe)return Ge;Qe=1;var e=function(){};if("production"!==process.env.NODE_ENV){var t=ot(),r={},n=it();e=function(e){var t="Warning: "+e;"undefined"!=typeof console&&console.error(t);try{throw new Error(t)}catch(e){}}}function o(o,i,a,s,l){if("production"!==process.env.NODE_ENV)for(var c in o)if(n(o,c)){var d;try{if("function"!=typeof o[c]){var u=Error((s||"React class")+": "+a+" type `"+c+"` is invalid; it must be a function, usually from the `prop-types` package, but received `"+typeof o[c]+"`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");throw u.name="Invariant Violation",u}d=o[c](i,c,s,a,null,t)}catch(e){d=e}if(!d||d instanceof Error||e((s||"React class")+": type specification of "+a+" `"+c+"` is invalid; the type checker function must return `null` or an `Error` but returned a "+typeof d+". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."),d instanceof Error&&!(d.message in r)){r[d.message]=!0;var f=l?l():"";e("Failed "+a+" type: "+d.message+(null!=f?f:""))}}}return o.resetWarningCache=function(){"production"!==process.env.NODE_ENV&&(r={})},Ge=o}(),i=function(){};function a(){return null}return"production"!==process.env.NODE_ENV&&(i=function(e){var t="Warning: "+e;"undefined"!=typeof console&&console.error(t);try{throw new Error(t)}catch(e){}}),Ze=function(s,l){var c="function"==typeof Symbol&&Symbol.iterator,d="<<anonymous>>",u={array:g("array"),bigint:g("bigint"),bool:g("boolean"),func:g("function"),number:g("number"),object:g("object"),string:g("string"),symbol:g("symbol"),any:p(a),arrayOf:function(e){return p((function(t,n,o,i,a){if("function"!=typeof e)return new h("Property `"+a+"` of component `"+o+"` has invalid PropType notation inside arrayOf.");var s=t[n];if(!Array.isArray(s))return new h("Invalid "+i+" `"+a+"` of type `"+v(s)+"` supplied to `"+o+"`, expected an array.");for(var l=0;l<s.length;l++){var c=e(s,l,o,i,a+"["+l+"]",r);if(c instanceof Error)return c}return null}))},element:p((function(e,t,r,n,o){var i=e[t];return s(i)?null:new h("Invalid "+n+" `"+o+"` of type `"+v(i)+"` supplied to `"+r+"`, expected a single ReactElement.")})),elementType:p((function(t,r,n,o,i){var a=t[r];return e.isValidElementType(a)?null:new h("Invalid "+o+" `"+i+"` of type `"+v(a)+"` supplied to `"+n+"`, expected a single ReactElement type.")})),instanceOf:function(e){return p((function(t,r,n,o,i){if(!(t[r]instanceof e)){var a=e.name||d;return new h("Invalid "+o+" `"+i+"` of type `"+((s=t[r]).constructor&&s.constructor.name?s.constructor.name:d)+"` supplied to `"+n+"`, expected instance of `"+a+"`.")}var s;return null}))},node:p((function(e,t,r,n,o){return b(e[t])?null:new h("Invalid "+n+" `"+o+"` supplied to `"+r+"`, expected a ReactNode.")})),objectOf:function(e){return p((function(t,o,i,a,s){if("function"!=typeof e)return new h("Property `"+s+"` of component `"+i+"` has invalid PropType notation inside objectOf.");var l=t[o],c=v(l);if("object"!==c)return new h("Invalid "+a+" `"+s+"` of type `"+c+"` supplied to `"+i+"`, expected an object.");for(var d in l)if(n(l,d)){var u=e(l,d,i,a,s+"."+d,r);if(u instanceof Error)return u}return null}))},oneOf:function(e){return Array.isArray(e)?p((function(t,r,n,o,i){for(var a=t[r],s=0;s<e.length;s++)if(f(a,e[s]))return null;var l=JSON.stringify(e,(function(e,t){return"symbol"===y(t)?String(t):t}));return new h("Invalid "+o+" `"+i+"` of value `"+String(a)+"` supplied to `"+n+"`, expected one of "+l+".")})):("production"!==process.env.NODE_ENV&&i(arguments.length>1?"Invalid arguments supplied to oneOf, expected an array, got "+arguments.length+" arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z]).":"Invalid argument supplied to oneOf, expected an array."),a)},oneOfType:function(e){if(!Array.isArray(e))return"production"!==process.env.NODE_ENV&&i("Invalid argument supplied to oneOfType, expected an instance of array."),a;for(var t=0;t<e.length;t++){var o=e[t];if("function"!=typeof o)return i("Invalid argument supplied to oneOfType. Expected an array of check functions, but received "+x(o)+" at index "+t+"."),a}return p((function(t,o,i,a,s){for(var l=[],c=0;c<e.length;c++){var d=(0,e[c])(t,o,i,a,s,r);if(null==d)return null;d.data&&n(d.data,"expectedType")&&l.push(d.data.expectedType)}return new h("Invalid "+a+" `"+s+"` supplied to `"+i+"`"+(l.length>0?", expected one of type ["+l.join(", ")+"]":"")+".")}))},shape:function(e){return p((function(t,n,o,i,a){var s=t[n],l=v(s);if("object"!==l)return new h("Invalid "+i+" `"+a+"` of type `"+l+"` supplied to `"+o+"`, expected `object`.");for(var c in e){var d=e[c];if("function"!=typeof d)return m(o,i,a,c,y(d));var u=d(s,c,o,i,a+"."+c,r);if(u)return u}return null}))},exact:function(e){return p((function(o,i,a,s,l){var c=o[i],d=v(c);if("object"!==d)return new h("Invalid "+s+" `"+l+"` of type `"+d+"` supplied to `"+a+"`, expected `object`.");var u=t({},o[i],e);for(var f in u){var p=e[f];if(n(e,f)&&"function"!=typeof p)return m(a,s,l,f,y(p));if(!p)return new h("Invalid "+s+" `"+l+"` key `"+f+"` supplied to `"+a+"`.\nBad object: "+JSON.stringify(o[i],null,"  ")+"\nValid keys: "+JSON.stringify(Object.keys(e),null,"  "));var g=p(c,f,a,s,l+"."+f,r);if(g)return g}return null}))}};function f(e,t){return e===t?0!==e||1/e==1/t:e!=e&&t!=t}function h(e,t){this.message=e,this.data=t&&"object"==typeof t?t:{},this.stack=""}function p(e){if("production"!==process.env.NODE_ENV)var t={},n=0;function o(o,a,s,c,u,f,p){if(c=c||d,f=f||s,p!==r){if(l){var g=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types");throw g.name="Invariant Violation",g}if("production"!==process.env.NODE_ENV&&"undefined"!=typeof console){var m=c+":"+s;!t[m]&&n<3&&(i("You are manually calling a React.PropTypes validation function for the `"+f+"` prop on `"+c+"`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."),t[m]=!0,n++)}}return null==a[s]?o?null===a[s]?new h("The "+u+" `"+f+"` is marked as required in `"+c+"`, but its value is `null`."):new h("The "+u+" `"+f+"` is marked as required in `"+c+"`, but its value is `undefined`."):null:e(a,s,c,u,f)}var a=o.bind(null,!1);return a.isRequired=o.bind(null,!0),a}function g(e){return p((function(t,r,n,o,i,a){var s=t[r];return v(s)!==e?new h("Invalid "+o+" `"+i+"` of type `"+y(s)+"` supplied to `"+n+"`, expected `"+e+"`.",{expectedType:e}):null}))}function m(e,t,r,n,o){return new h((e||"React class")+": "+t+" type `"+r+"."+n+"` is invalid; it must be a function, usually from the `prop-types` package, but received `"+o+"`.")}function b(e){switch(typeof e){case"number":case"string":case"undefined":return!0;case"boolean":return!e;case"object":if(Array.isArray(e))return e.every(b);if(null===e||s(e))return!0;var t=function(e){var t=e&&(c&&e[c]||e["@@iterator"]);if("function"==typeof t)return t}(e);if(!t)return!1;var r,n=t.call(e);if(t!==e.entries){for(;!(r=n.next()).done;)if(!b(r.value))return!1}else for(;!(r=n.next()).done;){var o=r.value;if(o&&!b(o[1]))return!1}return!0;default:return!1}}function v(e){var t=typeof e;return Array.isArray(e)?"array":e instanceof RegExp?"object":function(e,t){return"symbol"===e||!!t&&("Symbol"===t["@@toStringTag"]||"function"==typeof Symbol&&t instanceof Symbol)}(t,e)?"symbol":t}function y(e){if(null==e)return""+e;var t=v(e);if("object"===t){if(e instanceof Date)return"date";if(e instanceof RegExp)return"regexp"}return t}function x(e){var t=y(e);switch(t){case"array":case"object":return"an "+t;case"boolean":case"date":case"regexp":return"a "+t;default:return t}}return h.prototype=Error.prototype,u.checkPropTypes=o,u.resetWarningCache=o.resetWarningCache,u.PropTypes=u,u},Ze}()(at.isElement,!0)}else ze.exports=function(){if(et)return Je;et=1;var e=ot();function t(){}function r(){}return r.resetWarningCache=t,Je=function(){function n(t,r,n,o,i,a){if(a!==e){var s=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw s.name="Invariant Violation",s}}function o(){return n}n.isRequired=n;var i={array:n,bigint:n,bool:n,func:n,number:n,object:n,string:n,symbol:n,any:n,arrayOf:o,element:n,elementType:n,instanceOf:o,node:n,objectOf:o,oneOf:o,oneOfType:o,shape:o,exact:o,checkPropTypes:r,resetWarningCache:t};return i.PropTypes=i,i}}()();var st=Be(ze.exports);function lt(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(n=Object.getOwnPropertySymbols(e);o<n.length;o++)t.indexOf(n[o])<0&&Object.prototype.propertyIsEnumerable.call(e,n[o])&&(r[n[o]]=e[n[o]])}return r}function ct(e,t,r,n){return new(r||(r=Promise))((function(o,i){function a(e){try{l(n.next(e))}catch(e){i(e)}}function s(e){try{l(n.throw(e))}catch(e){i(e)}}function l(e){var t;e.done?o(e.value):(t=e.value,t instanceof r?t:new r((function(e){e(t)}))).then(a,s)}l((n=n.apply(e,t||[])).next())}))}function dt(e,t){var r,n,o,i,a={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function s(s){return function(l){return function(s){if(r)throw new TypeError("Generator is already executing.");for(;i&&(i=0,s[0]&&(a=0)),a;)try{if(r=1,n&&(o=2&s[0]?n.return:s[0]?n.throw||((o=n.return)&&o.call(n),0):n.next)&&!(o=o.call(n,s[1])).done)return o;switch(n=0,o&&(s=[2&s[0],o.value]),s[0]){case 0:case 1:o=s;break;case 4:return a.label++,{value:s[1],done:!1};case 5:a.label++,n=s[1],s=[0];continue;case 7:s=a.ops.pop(),a.trys.pop();continue;default:if(!(o=a.trys,(o=o.length>0&&o[o.length-1])||6!==s[0]&&2!==s[0])){a=0;continue}if(3===s[0]&&(!o||s[1]>o[0]&&s[1]<o[3])){a.label=s[1];break}if(6===s[0]&&a.label<o[1]){a.label=o[1],o=s;break}if(o&&a.label<o[2]){a.label=o[2],a.ops.push(s);break}o[2]&&a.ops.pop(),a.trys.pop();continue}s=t.call(e,a)}catch(e){s=[6,e],n=0}finally{r=o=0}if(5&s[0])throw s[1];return{value:s[0]?s[1]:void 0,done:!0}}([s,l])}}}function ut(e,t){var r="function"==typeof Symbol&&e[Symbol.iterator];if(!r)return e;var n,o,i=r.call(e),a=[];try{for(;(void 0===t||t-- >0)&&!(n=i.next()).done;)a.push(n.value)}catch(e){o={error:e}}finally{try{n&&!n.done&&(r=i.return)&&r.call(i)}finally{if(o)throw o.error}}return a}function ft(e,t,r){if(r||2===arguments.length)for(var n,o=0,i=t.length;o<i;o++)!n&&o in t||(n||(n=Array.prototype.slice.call(t,0,o)),n[o]=t[o]);return e.concat(n||Array.prototype.slice.call(t))}"function"==typeof SuppressedError&&SuppressedError;var ht=new Map([["aac","audio/aac"],["abw","application/x-abiword"],["arc","application/x-freearc"],["avif","image/avif"],["avi","video/x-msvideo"],["azw","application/vnd.amazon.ebook"],["bin","application/octet-stream"],["bmp","image/bmp"],["bz","application/x-bzip"],["bz2","application/x-bzip2"],["cda","application/x-cdf"],["csh","application/x-csh"],["css","text/css"],["csv","text/csv"],["doc","application/msword"],["docx","application/vnd.openxmlformats-officedocument.wordprocessingml.document"],["eot","application/vnd.ms-fontobject"],["epub","application/epub+zip"],["gz","application/gzip"],["gif","image/gif"],["heic","image/heic"],["heif","image/heif"],["htm","text/html"],["html","text/html"],["ico","image/vnd.microsoft.icon"],["ics","text/calendar"],["jar","application/java-archive"],["jpeg","image/jpeg"],["jpg","image/jpeg"],["js","text/javascript"],["json","application/json"],["jsonld","application/ld+json"],["mid","audio/midi"],["midi","audio/midi"],["mjs","text/javascript"],["mp3","audio/mpeg"],["mp4","video/mp4"],["mpeg","video/mpeg"],["mpkg","application/vnd.apple.installer+xml"],["odp","application/vnd.oasis.opendocument.presentation"],["ods","application/vnd.oasis.opendocument.spreadsheet"],["odt","application/vnd.oasis.opendocument.text"],["oga","audio/ogg"],["ogv","video/ogg"],["ogx","application/ogg"],["opus","audio/opus"],["otf","font/otf"],["png","image/png"],["pdf","application/pdf"],["php","application/x-httpd-php"],["ppt","application/vnd.ms-powerpoint"],["pptx","application/vnd.openxmlformats-officedocument.presentationml.presentation"],["rar","application/vnd.rar"],["rtf","application/rtf"],["sh","application/x-sh"],["svg","image/svg+xml"],["swf","application/x-shockwave-flash"],["tar","application/x-tar"],["tif","image/tiff"],["tiff","image/tiff"],["ts","video/mp2t"],["ttf","font/ttf"],["txt","text/plain"],["vsd","application/vnd.visio"],["wav","audio/wav"],["weba","audio/webm"],["webm","video/webm"],["webp","image/webp"],["woff","font/woff"],["woff2","font/woff2"],["xhtml","application/xhtml+xml"],["xls","application/vnd.ms-excel"],["xlsx","application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"],["xml","application/xml"],["xul","application/vnd.mozilla.xul+xml"],["zip","application/zip"],["7z","application/x-7z-compressed"],["mkv","video/x-matroska"],["mov","video/quicktime"],["msg","application/vnd.ms-outlook"]]);function pt(e,t){var r=function(e){var t=e.name;if(t&&-1!==t.lastIndexOf(".")&&!e.type){var r=t.split(".").pop().toLowerCase(),n=ht.get(r);n&&Object.defineProperty(e,"type",{value:n,writable:!1,configurable:!1,enumerable:!0})}return e}(e);if("string"!=typeof r.path){var n=e.webkitRelativePath;Object.defineProperty(r,"path",{value:"string"==typeof t?t:"string"==typeof n&&n.length>0?n:e.name,writable:!1,configurable:!1,enumerable:!0})}return r}var gt=[".DS_Store","Thumbs.db"];function mt(e){return"object"==typeof e&&null!==e}function bt(e){return wt(e.target.files).map((function(e){return pt(e)}))}function vt(e){return ct(this,void 0,void 0,(function(){return dt(this,(function(t){switch(t.label){case 0:return[4,Promise.all(e.map((function(e){return e.getFile()})))];case 1:return[2,t.sent().map((function(e){return pt(e)}))]}}))}))}function yt(e,t){return ct(this,void 0,void 0,(function(){var r;return dt(this,(function(n){switch(n.label){case 0:return e.items?(r=wt(e.items).filter((function(e){return"file"===e.kind})),"drop"!==t?[2,r]:[4,Promise.all(r.map($t))]):[3,2];case 1:return[2,xt(Ct(n.sent()))];case 2:return[2,xt(wt(e.files).map((function(e){return pt(e)})))]}}))}))}function xt(e){return e.filter((function(e){return-1===gt.indexOf(e.name)}))}function wt(e){if(null===e)return[];for(var t=[],r=0;r<e.length;r++){var n=e[r];t.push(n)}return t}function $t(e){if("function"!=typeof e.webkitGetAsEntry)return St(e);var t=e.webkitGetAsEntry();return t&&t.isDirectory?kt(t):St(e)}function Ct(e){return e.reduce((function(e,t){return ft(ft([],ut(e),!1),ut(Array.isArray(t)?Ct(t):[t]),!1)}),[])}function St(e){var t=e.getAsFile();if(!t)return Promise.reject("".concat(e," is not a File"));var r=pt(t);return Promise.resolve(r)}function Dt(e){return ct(this,void 0,void 0,(function(){return dt(this,(function(t){return[2,e.isDirectory?kt(e):Et(e)]}))}))}function kt(e){var t=e.createReader();return new Promise((function(e,r){var n=[];!function o(){var i=this;t.readEntries((function(t){return ct(i,void 0,void 0,(function(){var i,a,s;return dt(this,(function(l){switch(l.label){case 0:if(t.length)return[3,5];l.label=1;case 1:return l.trys.push([1,3,,4]),[4,Promise.all(n)];case 2:return i=l.sent(),e(i),[3,4];case 3:return a=l.sent(),r(a),[3,4];case 4:return[3,6];case 5:s=Promise.all(t.map(Dt)),n.push(s),o(),l.label=6;case 6:return[2]}}))}))}),(function(e){r(e)}))}()}))}function Et(e){return ct(this,void 0,void 0,(function(){return dt(this,(function(t){return[2,new Promise((function(t,r){e.file((function(r){var n=pt(r,e.fullPath);t(n)}),(function(e){r(e)}))}))]}))}))}function _t(e){return function(e){if(Array.isArray(e))return At(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||Mt(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function Ot(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function Ft(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?Ot(Object(r),!0).forEach((function(t){Tt(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):Ot(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function Tt(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function It(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==r)return;var n,o,i=[],a=!0,s=!1;try{for(r=r.call(e);!(a=(n=r.next()).done)&&(i.push(n.value),!t||i.length!==t);a=!0);}catch(e){s=!0,o=e}finally{try{a||null==r.return||r.return()}finally{if(s)throw o}}return i}(e,t)||Mt(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function Mt(e,t){if(e){if("string"==typeof e)return At(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?At(e,t):void 0}}function At(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}var jt=function(e){e=Array.isArray(e)&&1===e.length?e[0]:e;var t=Array.isArray(e)?"one of ".concat(e.join(", ")):e;return{code:"file-invalid-type",message:"File type must be ".concat(t)}},Bt=function(e){return{code:"file-too-large",message:"File is larger than ".concat(e," ").concat(1===e?"byte":"bytes")}},Rt=function(e){return{code:"file-too-small",message:"File is smaller than ".concat(e," ").concat(1===e?"byte":"bytes")}},zt={code:"too-many-files",message:"Too many files"};function Pt(e,t){var r="application/x-moz-file"===e.type||function(e,t){if(e&&t){var r=Array.isArray(t)?t:t.split(","),n=e.name||"",o=(e.type||"").toLowerCase(),i=o.replace(/\/.*$/,"");return r.some((function(e){var t=e.trim().toLowerCase();return"."===t.charAt(0)?n.toLowerCase().endsWith(t):t.endsWith("/*")?i===t.replace(/\/.*$/,""):o===t}))}return!0}(e,t);return[r,r?null:jt(t)]}function Lt(e,t,r){if(Nt(e.size))if(Nt(t)&&Nt(r)){if(e.size>r)return[!1,Bt(r)];if(e.size<t)return[!1,Rt(t)]}else{if(Nt(t)&&e.size<t)return[!1,Rt(t)];if(Nt(r)&&e.size>r)return[!1,Bt(r)]}return[!0,null]}function Nt(e){return null!=e}function Ht(e){return"function"==typeof e.isPropagationStopped?e.isPropagationStopped():void 0!==e.cancelBubble&&e.cancelBubble}function Wt(e){return e.dataTransfer?Array.prototype.some.call(e.dataTransfer.types,(function(e){return"Files"===e||"application/x-moz-file"===e})):!!e.target&&!!e.target.files}function Vt(e){e.preventDefault()}function Yt(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];return function(e){for(var r=arguments.length,n=new Array(r>1?r-1:0),o=1;o<r;o++)n[o-1]=arguments[o];return t.some((function(t){return!Ht(e)&&t&&t.apply(void 0,[e].concat(n)),Ht(e)}))}}function Ut(e){return"audio/*"===e||"video/*"===e||"image/*"===e||"text/*"===e||/\w+\/[-+.\w]+/g.test(e)}function Kt(e){return/^.*\.[\w]+$/.test(e)}var qt=["children"],Gt=["open"],Qt=["refKey","role","onKeyDown","onFocus","onBlur","onClick","onDragEnter","onDragOver","onDragLeave","onDrop"],Zt=["refKey","onChange","onClick"];function Xt(e){return function(e){if(Array.isArray(e))return tr(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||er(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function Jt(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==r)return;var n,o,i=[],a=!0,s=!1;try{for(r=r.call(e);!(a=(n=r.next()).done)&&(i.push(n.value),!t||i.length!==t);a=!0);}catch(e){s=!0,o=e}finally{try{a||null==r.return||r.return()}finally{if(s)throw o}}return i}(e,t)||er(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function er(e,t){if(e){if("string"==typeof e)return tr(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?tr(e,t):void 0}}function tr(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function rr(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function nr(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?rr(Object(r),!0).forEach((function(t){or(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):rr(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function or(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function ir(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var ar=u((function(e,t){var r=e.children,n=cr(ir(e,qt)),i=n.open,a=ir(n,Gt);return f(t,(function(){return{open:i}}),[i]),o.createElement(h,null,r(nr(nr({},a),{},{open:i})))}));ar.displayName="Dropzone";var sr={disabled:!1,getFilesFromEvent:function(e){return ct(this,void 0,void 0,(function(){return dt(this,(function(t){return mt(e)&&mt(e.dataTransfer)?[2,yt(e.dataTransfer,e.type)]:function(e){return mt(e)&&mt(e.target)}(e)?[2,bt(e)]:Array.isArray(e)&&e.every((function(e){return"getFile"in e&&"function"==typeof e.getFile}))?[2,vt(e)]:[2,[]]}))}))},maxSize:1/0,minSize:0,multiple:!0,maxFiles:0,preventDropOnDocument:!0,noClick:!1,noKeyboard:!1,noDrag:!1,noDragEventsBubbling:!1,validator:null,useFsAccessApi:!0,autoFocus:!1};ar.defaultProps=sr,ar.propTypes={children:st.func,accept:st.objectOf(st.arrayOf(st.string)),multiple:st.bool,preventDropOnDocument:st.bool,noClick:st.bool,noKeyboard:st.bool,noDrag:st.bool,noDragEventsBubbling:st.bool,minSize:st.number,maxSize:st.number,maxFiles:st.number,disabled:st.bool,getFilesFromEvent:st.func,onFileDialogCancel:st.func,onFileDialogOpen:st.func,useFsAccessApi:st.bool,autoFocus:st.bool,onDragEnter:st.func,onDragLeave:st.func,onDragOver:st.func,onDrop:st.func,onDropAccepted:st.func,onDropRejected:st.func,onError:st.func,validator:st.func};var lr={isFocused:!1,isFileDialogActive:!1,isDragActive:!1,isDragAccept:!1,isDragReject:!1,acceptedFiles:[],fileRejections:[]};function cr(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=nr(nr({},sr),e),r=t.accept,n=t.disabled,o=t.getFilesFromEvent,i=t.maxSize,u=t.minSize,f=t.multiple,h=t.maxFiles,p=t.onDragEnter,g=t.onDragLeave,m=t.onDragOver,b=t.onDrop,v=t.onDropAccepted,y=t.onDropRejected,x=t.onFileDialogCancel,w=t.onFileDialogOpen,$=t.useFsAccessApi,C=t.autoFocus,S=t.preventDropOnDocument,D=t.noClick,k=t.noKeyboard,E=t.noDrag,_=t.noDragEventsBubbling,O=t.onError,F=t.validator,T=a((function(){return function(e){if(Nt(e))return Object.entries(e).reduce((function(e,t){var r=It(t,2),n=r[0],o=r[1];return[].concat(_t(e),[n],_t(o))}),[]).filter((function(e){return Ut(e)||Kt(e)})).join(",")}(r)}),[r]),I=a((function(){return function(e){return Nt(e)?[{description:"Files",accept:Object.entries(e).filter((function(e){var t=It(e,2),r=t[0],n=t[1],o=!0;return Ut(r)||(console.warn('Skipped "'.concat(r,'" because it is not a valid MIME type. Check https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types/Common_types for a list of valid MIME types.')),o=!1),Array.isArray(n)&&n.every(Kt)||(console.warn('Skipped "'.concat(r,'" because an invalid file extension was provided.')),o=!1),o})).reduce((function(e,t){var r=It(t,2),n=r[0],o=r[1];return Ft(Ft({},e),{},Tt({},n,o))}),{})}]:e}(r)}),[r]),M=a((function(){return"function"==typeof w?w:ur}),[w]),A=a((function(){return"function"==typeof x?x:ur}),[x]),j=s(null),B=s(null),R=Jt(l(dr,lr),2),z=R[0],P=R[1],L=z.isFocused,N=z.isFileDialogActive,H=s("undefined"!=typeof window&&window.isSecureContext&&$&&"showOpenFilePicker"in window),W=function(){!H.current&&N&&setTimeout((function(){B.current&&(B.current.files.length||(P({type:"closeDialog"}),A()))}),300)};c((function(){return window.addEventListener("focus",W,!1),function(){window.removeEventListener("focus",W,!1)}}),[B,N,A,H]);var V=s([]),Y=function(e){j.current&&j.current.contains(e.target)||(e.preventDefault(),V.current=[])};c((function(){return S&&(document.addEventListener("dragover",Vt,!1),document.addEventListener("drop",Y,!1)),function(){S&&(document.removeEventListener("dragover",Vt),document.removeEventListener("drop",Y))}}),[j,S]),c((function(){return!n&&C&&j.current&&j.current.focus(),function(){}}),[j,C,n]);var U=d((function(e){O?O(e):console.error(e)}),[O]),K=d((function(e){e.preventDefault(),e.persist(),ae(e),V.current=[].concat(Xt(V.current),[e.target]),Wt(e)&&Promise.resolve(o(e)).then((function(t){if(!Ht(e)||_){var r=t.length,n=r>0&&function(e){var t=e.files,r=e.accept,n=e.minSize,o=e.maxSize,i=e.multiple,a=e.maxFiles,s=e.validator;return!(!i&&t.length>1||i&&a>=1&&t.length>a)&&t.every((function(e){var t=It(Pt(e,r),1)[0],i=It(Lt(e,n,o),1)[0],a=s?s(e):null;return t&&i&&!a}))}({files:t,accept:T,minSize:u,maxSize:i,multiple:f,maxFiles:h,validator:F});P({isDragAccept:n,isDragReject:r>0&&!n,isDragActive:!0,type:"setDraggedFiles"}),p&&p(e)}})).catch((function(e){return U(e)}))}),[o,p,U,_,T,u,i,f,h,F]),q=d((function(e){e.preventDefault(),e.persist(),ae(e);var t=Wt(e);if(t&&e.dataTransfer)try{e.dataTransfer.dropEffect="copy"}catch(e){}return t&&m&&m(e),!1}),[m,_]),G=d((function(e){e.preventDefault(),e.persist(),ae(e);var t=V.current.filter((function(e){return j.current&&j.current.contains(e)})),r=t.indexOf(e.target);-1!==r&&t.splice(r,1),V.current=t,t.length>0||(P({type:"setDraggedFiles",isDragActive:!1,isDragAccept:!1,isDragReject:!1}),Wt(e)&&g&&g(e))}),[j,g,_]),Q=d((function(e,t){var r=[],n=[];e.forEach((function(e){var t=Jt(Pt(e,T),2),o=t[0],a=t[1],s=Jt(Lt(e,u,i),2),l=s[0],c=s[1],d=F?F(e):null;if(o&&l&&!d)r.push(e);else{var f=[a,c];d&&(f=f.concat(d)),n.push({file:e,errors:f.filter((function(e){return e}))})}})),(!f&&r.length>1||f&&h>=1&&r.length>h)&&(r.forEach((function(e){n.push({file:e,errors:[zt]})})),r.splice(0)),P({acceptedFiles:r,fileRejections:n,type:"setFiles"}),b&&b(r,n,t),n.length>0&&y&&y(n,t),r.length>0&&v&&v(r,t)}),[P,f,T,u,i,h,b,v,y,F]),Z=d((function(e){e.preventDefault(),e.persist(),ae(e),V.current=[],Wt(e)&&Promise.resolve(o(e)).then((function(t){Ht(e)&&!_||Q(t,e)})).catch((function(e){return U(e)})),P({type:"reset"})}),[o,Q,U,_]),X=d((function(){if(H.current){P({type:"openDialog"}),M();var e={multiple:f,types:I};window.showOpenFilePicker(e).then((function(e){return o(e)})).then((function(e){Q(e,null),P({type:"closeDialog"})})).catch((function(e){var t;(t=e)instanceof DOMException&&("AbortError"===t.name||t.code===t.ABORT_ERR)?(A(e),P({type:"closeDialog"})):!function(e){return e instanceof DOMException&&("SecurityError"===e.name||e.code===e.SECURITY_ERR)}(e)?U(e):(H.current=!1,B.current?(B.current.value=null,B.current.click()):U(new Error("Cannot open the file picker because the https://developer.mozilla.org/en-US/docs/Web/API/File_System_Access_API is not supported and no <input> was provided.")))}))}else B.current&&(P({type:"openDialog"}),M(),B.current.value=null,B.current.click())}),[P,M,A,$,Q,U,I,f]),J=d((function(e){j.current&&j.current.isEqualNode(e.target)&&(" "!==e.key&&"Enter"!==e.key&&32!==e.keyCode&&13!==e.keyCode||(e.preventDefault(),X()))}),[j,X]),ee=d((function(){P({type:"focus"})}),[]),te=d((function(){P({type:"blur"})}),[]),re=d((function(){D||(!function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:window.navigator.userAgent;return function(e){return-1!==e.indexOf("MSIE")||-1!==e.indexOf("Trident/")}(e)||function(e){return-1!==e.indexOf("Edge/")}(e)}()?X():setTimeout(X,0))}),[D,X]),ne=function(e){return n?null:e},oe=function(e){return k?null:ne(e)},ie=function(e){return E?null:ne(e)},ae=function(e){_&&e.stopPropagation()},se=a((function(){return function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.refKey,r=void 0===t?"ref":t,o=e.role,i=e.onKeyDown,a=e.onFocus,s=e.onBlur,l=e.onClick,c=e.onDragEnter,d=e.onDragOver,u=e.onDragLeave,f=e.onDrop,h=ir(e,Qt);return nr(nr(or({onKeyDown:oe(Yt(i,J)),onFocus:oe(Yt(a,ee)),onBlur:oe(Yt(s,te)),onClick:ne(Yt(l,re)),onDragEnter:ie(Yt(c,K)),onDragOver:ie(Yt(d,q)),onDragLeave:ie(Yt(u,G)),onDrop:ie(Yt(f,Z)),role:"string"==typeof o&&""!==o?o:"presentation"},r,j),n||k?{}:{tabIndex:0}),h)}}),[j,J,ee,te,re,K,q,G,Z,k,E,n]),le=d((function(e){e.stopPropagation()}),[]),ce=a((function(){return function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.refKey,r=void 0===t?"ref":t,n=e.onChange,o=e.onClick,i=ir(e,Zt);return nr(nr({},or({accept:T,multiple:f,type:"file",style:{display:"none"},onChange:ne(Yt(n,Z)),onClick:ne(Yt(o,le)),tabIndex:-1},r,B)),i)}}),[B,r,f,Z,n]);return nr(nr({},z),{},{isFocused:L&&!n,getRootProps:se,getInputProps:ce,rootRef:j,inputRef:B,open:ne(X)})}function dr(e,t){switch(t.type){case"focus":return nr(nr({},e),{},{isFocused:!0});case"blur":return nr(nr({},e),{},{isFocused:!1});case"openDialog":return nr(nr({},lr),{},{isFileDialogActive:!0});case"closeDialog":return nr(nr({},e),{},{isFileDialogActive:!1});case"setDraggedFiles":return nr(nr({},e),{},{isDragActive:t.isDragActive,isDragAccept:t.isDragAccept,isDragReject:t.isDragReject});case"setFiles":return nr(nr({},e),{},{acceptedFiles:t.acceptedFiles,fileRejections:t.fileRejections});case"reset":return nr({},lr);default:return e}}function ur(){}var fr=Array.isArray,hr="object"==typeof je&&je&&je.Object===Object&&je,pr=hr,gr="object"==typeof self&&self&&self.Object===Object&&self,mr=pr||gr||Function("return this")(),br=mr.Symbol,vr=br,yr=Object.prototype,xr=yr.hasOwnProperty,wr=yr.toString,$r=vr?vr.toStringTag:void 0;var Cr=function(e){var t=xr.call(e,$r),r=e[$r];try{e[$r]=void 0;var n=!0}catch(e){}var o=wr.call(e);return n&&(t?e[$r]=r:delete e[$r]),o},Sr=Object.prototype.toString;var Dr=Cr,kr=function(e){return Sr.call(e)},Er=br?br.toStringTag:void 0;var _r=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":Er&&Er in Object(e)?Dr(e):kr(e)};var Or=function(e){return null!=e&&"object"==typeof e},Fr=_r,Tr=Or;var Ir=function(e){return"symbol"==typeof e||Tr(e)&&"[object Symbol]"==Fr(e)},Mr=fr,Ar=Ir,jr=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,Br=/^\w*$/;var Rr=function(e,t){if(Mr(e))return!1;var r=typeof e;return!("number"!=r&&"symbol"!=r&&"boolean"!=r&&null!=e&&!Ar(e))||(Br.test(e)||!jr.test(e)||null!=t&&e in Object(t))};var zr=function(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)},Pr=_r,Lr=zr;var Nr,Hr=function(e){if(!Lr(e))return!1;var t=Pr(e);return"[object Function]"==t||"[object GeneratorFunction]"==t||"[object AsyncFunction]"==t||"[object Proxy]"==t},Wr=mr["__core-js_shared__"],Vr=(Nr=/[^.]+$/.exec(Wr&&Wr.keys&&Wr.keys.IE_PROTO||""))?"Symbol(src)_1."+Nr:"";var Yr=function(e){return!!Vr&&Vr in e},Ur=Function.prototype.toString;var Kr=function(e){if(null!=e){try{return Ur.call(e)}catch(e){}try{return e+""}catch(e){}}return""},qr=Hr,Gr=Yr,Qr=zr,Zr=Kr,Xr=/^\[object .+?Constructor\]$/,Jr=Function.prototype,en=Object.prototype,tn=Jr.toString,rn=en.hasOwnProperty,nn=RegExp("^"+tn.call(rn).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");var on=function(e,t){return null==e?void 0:e[t]},an=function(e){return!(!Qr(e)||Gr(e))&&(qr(e)?nn:Xr).test(Zr(e))},sn=on;var ln=function(e,t){var r=sn(e,t);return an(r)?r:void 0},cn=ln(Object,"create"),dn=cn;var un=function(){this.__data__=dn?dn(null):{},this.size=0};var fn=function(e){var t=this.has(e)&&delete this.__data__[e];return this.size-=t?1:0,t},hn=cn,pn=Object.prototype.hasOwnProperty;var gn=function(e){var t=this.__data__;if(hn){var r=t[e];return"__lodash_hash_undefined__"===r?void 0:r}return pn.call(t,e)?t[e]:void 0},mn=cn,bn=Object.prototype.hasOwnProperty;var vn=function(e){var t=this.__data__;return mn?void 0!==t[e]:bn.call(t,e)},yn=cn;var xn=function(e,t){var r=this.__data__;return this.size+=this.has(e)?0:1,r[e]=yn&&void 0===t?"__lodash_hash_undefined__":t,this},wn=un,$n=fn,Cn=gn,Sn=vn,Dn=xn;function kn(e){var t=-1,r=null==e?0:e.length;for(this.clear();++t<r;){var n=e[t];this.set(n[0],n[1])}}kn.prototype.clear=wn,kn.prototype.delete=$n,kn.prototype.get=Cn,kn.prototype.has=Sn,kn.prototype.set=Dn;var En=kn;var _n=function(){this.__data__=[],this.size=0};var On=function(e,t){return e===t||e!=e&&t!=t},Fn=On;var Tn=function(e,t){for(var r=e.length;r--;)if(Fn(e[r][0],t))return r;return-1},In=Tn,Mn=Array.prototype.splice;var An=function(e){var t=this.__data__,r=In(t,e);return!(r<0)&&(r==t.length-1?t.pop():Mn.call(t,r,1),--this.size,!0)},jn=Tn;var Bn=function(e){var t=this.__data__,r=jn(t,e);return r<0?void 0:t[r][1]},Rn=Tn;var zn=function(e){return Rn(this.__data__,e)>-1},Pn=Tn;var Ln=function(e,t){var r=this.__data__,n=Pn(r,e);return n<0?(++this.size,r.push([e,t])):r[n][1]=t,this},Nn=_n,Hn=An,Wn=Bn,Vn=zn,Yn=Ln;function Un(e){var t=-1,r=null==e?0:e.length;for(this.clear();++t<r;){var n=e[t];this.set(n[0],n[1])}}Un.prototype.clear=Nn,Un.prototype.delete=Hn,Un.prototype.get=Wn,Un.prototype.has=Vn,Un.prototype.set=Yn;var Kn=Un,qn=ln(mr,"Map"),Gn=En,Qn=Kn,Zn=qn;var Xn=function(e){var t=typeof e;return"string"==t||"number"==t||"symbol"==t||"boolean"==t?"__proto__"!==e:null===e};var Jn=function(e,t){var r=e.__data__;return Xn(t)?r["string"==typeof t?"string":"hash"]:r.map},eo=Jn;var to=function(e){var t=eo(this,e).delete(e);return this.size-=t?1:0,t},ro=Jn;var no=function(e){return ro(this,e).get(e)},oo=Jn;var io=function(e){return oo(this,e).has(e)},ao=Jn;var so=function(e,t){var r=ao(this,e),n=r.size;return r.set(e,t),this.size+=r.size==n?0:1,this},lo=function(){this.size=0,this.__data__={hash:new Gn,map:new(Zn||Qn),string:new Gn}},co=to,uo=no,fo=io,ho=so;function po(e){var t=-1,r=null==e?0:e.length;for(this.clear();++t<r;){var n=e[t];this.set(n[0],n[1])}}po.prototype.clear=lo,po.prototype.delete=co,po.prototype.get=uo,po.prototype.has=fo,po.prototype.set=ho;var go=po,mo=go;function bo(e,t){if("function"!=typeof e||null!=t&&"function"!=typeof t)throw new TypeError("Expected a function");var r=function(){var n=arguments,o=t?t.apply(this,n):n[0],i=r.cache;if(i.has(o))return i.get(o);var a=e.apply(this,n);return r.cache=i.set(o,a)||i,a};return r.cache=new(bo.Cache||mo),r}bo.Cache=mo;var vo=bo;var yo=function(e){var t=vo(e,(function(e){return 500===r.size&&r.clear(),e})),r=t.cache;return t},xo=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,wo=/\\(\\)?/g,$o=yo((function(e){var t=[];return 46===e.charCodeAt(0)&&t.push(""),e.replace(xo,(function(e,r,n,o){t.push(n?o.replace(wo,"$1"):r||e)})),t}));var Co=function(e,t){for(var r=-1,n=null==e?0:e.length,o=Array(n);++r<n;)o[r]=t(e[r],r,e);return o},So=fr,Do=Ir,ko=br?br.prototype:void 0,Eo=ko?ko.toString:void 0;var _o=function e(t){if("string"==typeof t)return t;if(So(t))return Co(t,e)+"";if(Do(t))return Eo?Eo.call(t):"";var r=t+"";return"0"==r&&1/t==-1/0?"-0":r},Oo=_o;var Fo=fr,To=Rr,Io=$o,Mo=function(e){return null==e?"":Oo(e)};var Ao=function(e,t){return Fo(e)?e:To(e,t)?[e]:Io(Mo(e))},jo=Ir;var Bo=function(e){if("string"==typeof e||jo(e))return e;var t=e+"";return"0"==t&&1/e==-1/0?"-0":t},Ro=Ao,zo=Bo;var Po=function(e,t){for(var r=0,n=(t=Ro(t,e)).length;null!=e&&r<n;)e=e[zo(t[r++])];return r&&r==n?e:void 0},Lo=Po;var No=function(e,t,r){var n=null==e?void 0:Lo(e,t);return void 0===n?r:n},Ho=Be(No);const Wo=(e,t,r)=>Ho(r,t)||Ho(e,t),Vo=(e,t)=>{const r=t||e.defaultValue;return Ho(e.collections,r)},Yo={collections:{default:{"width-005":.5,"width-010":1,"width-020":2,"width-040":4,solid:"solid"}},defaultValue:"default"},Uo=e=>t=>{var r;const n=t.theme,o=Vo(Yo,null==n?void 0:n.borderScheme);return(null===(r=null==n?void 0:n.overrides)||void 0===r?void 0:r.border)?`${Wo(o,e,n.overrides.border)}px`:`${o[e]}px`},Ko={"width-005":Uo("width-005"),"width-010":Uo("width-010"),"width-020":Uo("width-020"),"width-040":Uo("width-040"),solid:(qo="solid",e=>{var t;const r=e.theme,n=Vo(Yo,null==r?void 0:r.borderScheme),o=(null===(t=null==r?void 0:r.overrides)||void 0===t?void 0:t.border)?Wo(n,qo,r.overrides.border):n[qo];return"function"==typeof o?o(e):o})};var qo;const Go={"brand-10":"#2C0C0B","brand-20":"#4C1513","brand-30":"#6C1D1B","brand-40":"#922825","brand-50":"#BF3431","brand-60":"#F15D5A","brand-70":"#F69491","brand-80":"#FABAB7","brand-90":"#FCD7D2","brand-95":"#FFEBE7","brand-100":"#FFF6F4","primary-10":"#1A122C","primary-20":"#2F1F4D","primary-30":"#422D6E","primary-40":"#5B3D97","primary-50":"#7654BC","primary-60":"#9A82CD","primary-70":"#B7A7D8","primary-80":"#CFC5E5","primary-90":"#E3DDF0","primary-95":"#F0EDF7","primary-100":"#F9F8FC","secondary-10":"#0E1723","secondary-20":"#18293D","secondary-30":"#233A57","secondary-40":"#305078","secondary-50":"#4B6A8F","secondary-60":"#7B91A9","secondary-70":"#A1B1C3","secondary-80":"#C1CBD7","secondary-90":"#DBE1E8","secondary-95":"#EBEFF2","secondary-100":"#F7F8FA","neutral-10":"#161616","neutral-20":"#282828","neutral-30":"#393939","neutral-40":"#4E4E4E","neutral-50":"#686868","neutral-60":"#8E8E8E","neutral-70":"#AFAFB0","neutral-80":"#C7CACA","neutral-90":"#DDE1E2","neutral-95":"#EDEFEF","neutral-100":"#F9F9F9","success-10":"#081A0F","success-20":"#0E2D1B","success-30":"#154126","success-40":"#1C5A34","success-50":"#257645","success-60":"#44A068","success-70":"#64C189","success-80":"#80DCA5","success-90":"#B4ECCB","success-95":"#D5F6E2","success-100":"#EFFCF4","warning-10":"#221302","warning-20":"#3B2204","warning-30":"#543106","warning-40":"#744408","warning-50":"#98590C","warning-60":"#D07A13","warning-70":"#E4A244","warning-80":"#F5C26C","warning-90":"#FADBA6","warning-95":"#FCECD4","warning-100":"#FDF7F0","error-10":"#330505","error-20":"#550808","error-30":"#750C0C","error-40":"#9E130F","error-50":"#CB2213","error-60":"#DE6C6C","error-70":"#E89B9B","error-80":"#EFBEBE","error-90":"#F5D9D9","error-95":"#F9ECEC","error-100":"#FCF7F7","info-10":"#021824","info-20":"#032B3F","info-30":"#053D59","info-40":"#065478","info-50":"#176E9B","info-60":"#5296BE","info-70":"#82B5DA","info-80":"#ACCFE7","info-90":"#CCE3F1","info-95":"#E3F1F8","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000","primary-inverse":"#FEAB10"},Qo={"brand-10":"#1F1221","brand-20":"#371F3B","brand-30":"#4E2C53","brand-40":"#6B3E73","brand-50":"#8D5197","brand-60":"#FF3399","brand-70":"#FF88C4","brand-80":"#FFB3D9","brand-90":"#FFD4E9","brand-95":"#FFE8F3","brand-100":"#FFD6EB","primary-10":"#1F1221","primary-20":"#371F3B","primary-30":"#4E2C53","primary-40":"#6B3E73","primary-50":"#8D5197","primary-60":"#B07DB7","primary-70":"#C7A3CC","primary-80":"#D9C2DD","primary-90":"#E9DBEB","primary-95":"#F3ECF4","primary-100":"#FAF7FA","secondary-10":"#2D091B","secondary-20":"#4D0F2E","secondary-30":"#6B1540","secondary-40":"#931D58","secondary-50":"#C02673","secondary-60":"#FF409F","secondary-70":"#FF88C4","secondary-80":"#FFB3D9","secondary-90":"#FFD4E9","secondary-95":"#FFE8F3","secondary-100":"#FFF8FC","neutral-10":"#161616","neutral-20":"#282828","neutral-30":"#393939","neutral-40":"#4E4E4E","neutral-50":"#686868","neutral-60":"#8E8E8E","neutral-70":"#AFAFB0","neutral-80":"#C7CACA","neutral-90":"#DDE1E2","neutral-95":"#EDEFEF","neutral-100":"#F9F9F9","success-10":"#081A0F","success-20":"#0E2D1B","success-30":"#154126","success-40":"#1C5A34","success-50":"#257645","success-60":"#44A068","success-70":"#64C189","success-80":"#80DCA5","success-90":"#B4ECCB","success-95":"#D5F6E2","success-100":"#EFFCF4","warning-10":"#221302","warning-20":"#3B2204","warning-30":"#543106","warning-40":"#744408","warning-50":"#98590C","warning-60":"#D07A13","warning-70":"#E4A244","warning-80":"#F5C26C","warning-90":"#FADBA6","warning-95":"#FCECD4","warning-100":"#FDF7F0","error-10":"#330505","error-20":"#550808","error-30":"#750C0C","error-40":"#9E130F","error-50":"#CB2213","error-60":"#DE6C6C","error-70":"#E89B9B","error-80":"#EFBEBE","error-90":"#F5D9D9","error-95":"#F9ECEC","error-100":"#FCF7F7","info-10":"#021824","info-20":"#032B3F","info-30":"#053D59","info-40":"#065478","info-50":"#176E9B","info-60":"#5296BE","info-70":"#82B5DA","info-80":"#ACCFE7","info-90":"#CCE3F1","info-95":"#E3F1F8","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000","primary-inverse":"#FEAB10"},Zo={"brand-10":"#2C0C0B","brand-20":"#4C1513","brand-30":"#6C1D1B","brand-40":"#922825","brand-50":"#BF3431","brand-60":"#F15D5A","brand-70":"#F69491","brand-80":"#FABAB7","brand-90":"#FCD7D2","brand-95":"#FFEBE7","brand-100":"#FFF6F4","primary-10":"#001731","primary-20":"#002752","primary-30":"#003874","primary-40":"#004D9F","primary-50":"#1768BE","primary-60":"#3C91EC","primary-70":"#6CB4FF","primary-80":"#A5CDFF","primary-90":"#CFE1FE","primary-95":"#E8F0FE","primary-100":"#F7F9FF","secondary-10":"#131529","secondary-20":"#222547","secondary-30":"#2F3565","secondary-40":"#42498B","secondary-50":"#5B62A7","secondary-60":"#858CBD","secondary-70":"#A8ADCF","secondary-80":"#C6C9E0","secondary-90":"#DDDFEC","secondary-95":"#EDEEF5","secondary-100":"#F8F8FB","neutral-10":"#161616","neutral-20":"#282828","neutral-30":"#393939","neutral-40":"#4E4E4E","neutral-50":"#686868","neutral-60":"#8E8E8E","neutral-70":"#AFAFB0","neutral-80":"#C7CACA","neutral-90":"#DDE1E2","neutral-95":"#EDEFEF","neutral-100":"#F9F9F9","success-10":"#081A0F","success-20":"#0E2D1B","success-30":"#154126","success-40":"#1C5A34","success-50":"#257645","success-60":"#44A068","success-70":"#64C189","success-80":"#80DCA5","success-90":"#B4ECCB","success-95":"#D5F6E2","success-100":"#EFFCF4","warning-10":"#221302","warning-20":"#3B2204","warning-30":"#543106","warning-40":"#744408","warning-50":"#98590C","warning-60":"#D07A13","warning-70":"#E4A244","warning-80":"#F5C26C","warning-90":"#FADBA6","warning-95":"#FCECD4","warning-100":"#FDF7F0","error-10":"#330505","error-20":"#550808","error-30":"#750C0C","error-40":"#9E130F","error-50":"#CB2213","error-60":"#DE6C6C","error-70":"#E89B9B","error-80":"#EFBEBE","error-90":"#F5D9D9","error-95":"#F9ECEC","error-100":"#FCF7F7","info-10":"#021824","info-20":"#032B3F","info-30":"#053D59","info-40":"#065478","info-50":"#176E9B","info-60":"#5296BE","info-70":"#82B5DA","info-80":"#ACCFE7","info-90":"#CCE3F1","info-95":"#E3F1F8","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000","primary-inverse":"#FEAB10"},Xo={"brand-10":"#2C0C0B","brand-20":"#4C1513","brand-30":"#6C1D1B","brand-40":"#922825","brand-50":"#BF3431","brand-60":"#F15D5A","brand-70":"#F69491","brand-80":"#FABAB7","brand-90":"#FCD7D2","brand-95":"#FFEBE7","brand-100":"#FFF6F4","primary-10":"#0011924","primary-20":"#032B40","primary-30":"#043D5A","primary-40":"#05547B","primary-50":"#096EA1","primary-60":"#2098D3","primary-70":"#5CB9E8","primary-80":"#8BD3F6","primary-90":"#BEE6FA","primary-95":"#E2F2FA","primary-100":"#F4FAFC","secondary-10":"#131529","secondary-20":"#222547","secondary-30":"#2F3565","secondary-40":"#42498B","secondary-50":"#5B62A7","secondary-60":"#858CBD","secondary-70":"#A8ADCF","secondary-80":"#C6C9E0","secondary-90":"#DDDFEC","secondary-95":"#EDEEF5","secondary-100":"#F8F8FB","neutral-10":"#161616","neutral-20":"#282828","neutral-30":"#393939","neutral-40":"#4E4E4E","neutral-50":"#686868","neutral-60":"#8E8E8E","neutral-70":"#AFAFB0","neutral-80":"#C7CACA","neutral-90":"#DDE1E2","neutral-95":"#EDEFEF","neutral-100":"#F9F9F9","success-10":"#081A0F","success-20":"#0E2D1B","success-30":"#154126","success-40":"#1C5A34","success-50":"#257645","success-60":"#44A068","success-70":"#64C189","success-80":"#80DCA5","success-90":"#B4ECCB","success-95":"#D5F6E2","success-100":"#EFFCF4","warning-10":"#221302","warning-20":"#3B2204","warning-30":"#543106","warning-40":"#744408","warning-50":"#98590C","warning-60":"#D07A13","warning-70":"#E4A244","warning-80":"#F5C26C","warning-90":"#FADBA6","warning-95":"#FCECD4","warning-100":"#FDF7F0","error-10":"#330505","error-20":"#550808","error-30":"#750C0C","error-40":"#9E130F","error-50":"#CB2213","error-60":"#DE6C6C","error-70":"#E89B9B","error-80":"#EFBEBE","error-90":"#F5D9D9","error-95":"#F9ECEC","error-100":"#FCF7F7","info-10":"#021824","info-20":"#032B3F","info-30":"#053D59","info-40":"#065478","info-50":"#176E9B","info-60":"#5296BE","info-70":"#82B5DA","info-80":"#ACCFE7","info-90":"#CCE3F1","info-95":"#E3F1F8","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000","primary-inverse":"#FEAB10"},Jo={"brand-10":"#001A19","brand-20":"#002D2B","brand-30":"#00413D","brand-40":"#005954","brand-50":"#00756F","brand-60":"#03A098","brand-70":"#55BFBA","brand-80":"#92D6D2","brand-90":"#BFE7E5","brand-95":"#DDF2F1","brand-100":"#F4FBFA","primary-10":"#09191D","primary-20":"#102B34","primary-30":"#173D49","primary-40":"#205666","primary-50":"#2A7086","primary-60":"#2A7086","primary-70":"#8CB6C2","primary-80":"#B2CED6","primary-90":"#D1E2E7","primary-95":"#E8F0F3","primary-100":"#F9F8FC","secondary-10":"#001731","secondary-20":"#002752","secondary-30":"#003874","secondary-40":"#004D9F","secondary-50":"#5B62A7","secondary-60":"#858CBD","secondary-70":"#A8ADCF","secondary-80":"#C6C9E0","secondary-90":"#DDDFEC","secondary-95":"#EDEEF5","secondary-100":"#F8F8FB","neutral-10":"#161616","neutral-20":"#282828","neutral-30":"#393939","neutral-40":"#4E4E4E","neutral-50":"#686868","neutral-60":"#8E8E8E","neutral-70":"#AFAFB0","neutral-80":"#C7CACA","neutral-90":"#DDE1E2","neutral-95":"#EDEFEF","neutral-100":"#F9F9F9","success-10":"#081A0F","success-20":"#0E2D1B","success-30":"#154126","success-40":"#1C5A34","success-50":"#257645","success-60":"#44A068","success-70":"#64C189","success-80":"#80DCA5","success-90":"#B4ECCB","success-95":"#D5F6E2","success-100":"#EFFCF4","warning-10":"#221302","warning-20":"#3B2204","warning-30":"#543106","warning-40":"#744408","warning-50":"#98590C","warning-60":"#D07A13","warning-70":"#E4A244","warning-80":"#F5C26C","warning-90":"#FADBA6","warning-95":"#FCECD4","warning-100":"#FDF7F0","error-10":"#330505","error-20":"#550808","error-30":"#750C0C","error-40":"#9E130F","error-50":"#CB2213","error-60":"#DE6C6C","error-70":"#E89B9B","error-80":"#EFBEBE","error-90":"#F5D9D9","error-95":"#F9ECEC","error-100":"#FCF7F7","info-10":"#021824","info-20":"#032B3F","info-30":"#053D59","info-40":"#065478","info-50":"#176E9B","info-60":"#5296BE","info-70":"#82B5DA","info-80":"#ACCFE7","info-90":"#CCE3F1","info-95":"#E3F1F8","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000","primary-inverse":"#FEAB10"},ei={"brand-10":"#881317","brand-20":"#B5191E","brand-30":"#B5040A","brand-40":"#D0333F","brand-50":"#DC666F","brand-60":"#E28087","brand-70":"#E7999F","brand-80":"#EDB3B7","brand-90":"#F3CCCF","brand-95":"#F9E6E7","brand-100":"#FCF2F3","primary-10":"#000000","primary-20":"#191919","primary-30":"#333333","primary-40":"#4D4D4D","primary-50":"#666666","primary-60":"#808080","primary-70":"#999999","primary-80":"#B3B3B3","primary-90":"#E6E6E6","primary-95":"#F7F7F7","primary-100":"#FFFFFF","secondary-10":"#19151D","secondary-20":"#2B2533","secondary-30":"#3E3649","secondary-40":"#564A64","secondary-50":"#6F637D","secondary-60":"#948B9F","secondary-70":"#B3ACBB","secondary-80":"#CCC8D2","secondary-90":"#E1DEE4","secondary-95":"#EFEEF1","secondary-100":"#F9F8F9","neutral-10":"#000000","neutral-20":"#191919","neutral-30":"#333333","neutral-40":"#4D4D4D","neutral-50":"#666666","neutral-60":"#808080","neutral-70":"#999999","neutral-80":"#B3B3B3","neutral-90":"#E6E6E6","neutral-95":"#F7F7F7","neutral-100":"#FFFFFF","success-10":"#081A0F","success-20":"#0E2D1B","success-30":"#154126","success-40":"#1C5A34","success-50":"#257645","success-60":"#44A068","success-70":"#64C189","success-80":"#80DCA5","success-90":"#B4ECCB","success-95":"#D5F6E2","success-100":"#EFFCF4","warning-10":"#221302","warning-20":"#3B2204","warning-30":"#543106","warning-40":"#744408","warning-50":"#98590C","warning-60":"#D07A13","warning-70":"#E4A244","warning-80":"#F5C26C","warning-90":"#FADBA6","warning-95":"#FCECD4","warning-100":"#FDF7F0","error-10":"#330505","error-20":"#550808","error-30":"#750C0C","error-40":"#9E130F","error-50":"#CB2213","error-60":"#DE6C6C","error-70":"#E89B9B","error-80":"#EFBEBE","error-90":"#F5D9D9","error-95":"#F9ECEC","error-100":"#FCF7F7","info-10":"#021824","info-20":"#032B3F","info-30":"#053D59","info-40":"#065478","info-50":"#176E9B","info-60":"#5296BE","info-70":"#82B5DA","info-80":"#ACCFE7","info-90":"#CCE3F1","info-95":"#E3F1F8","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000","primary-inverse":"#FEAB10"},ti={"brand-10":"#0E123A","brand-20":"#191E65","brand-30":"#232B90","brand-40":"#303BC5","brand-50":"#494CFF","brand-60":"#AD6EFF","brand-70":"#AEA4FF","brand-80":"#C5C4FF","brand-90":"#DDDCFF","brand-95":"#EDECFF","brand-100":"#F8F8FF","primary-10":"#10152B","primary-20":"#1C254B","primary-30":"#28356C","primary-40":"#38489A","primary-50":"#4D5AD7","primary-60":"#7487F2","primary-70":"#9AAAFC","primary-80":"#BDC7FD","primary-90":"#DADFFB","primary-95":"#ECEEFE","primary-100":"#F7F8FF","secondary-10":"#19151D","secondary-20":"#2B2533","secondary-30":"#3E3649","secondary-40":"#564A64","secondary-50":"#6F637D","secondary-60":"#948B9F","secondary-70":"#B3ACBB","secondary-80":"#CCC8D2","secondary-90":"#E1DEE4","secondary-95":"#EFEEF1","secondary-100":"#F9F8F9","neutral-10":"#161616","neutral-20":"#282828","neutral-30":"#393939","neutral-40":"#4E4E4E","neutral-50":"#686868","neutral-60":"#8E8E8E","neutral-70":"#AFAFB0","neutral-80":"#C7CACA","neutral-90":"#DDE1E2","neutral-95":"#EDEFEF","neutral-100":"#F9F9F9","success-10":"#081A0F","success-20":"#0E2D1B","success-30":"#154126","success-40":"#1C5A34","success-50":"#257645","success-60":"#44A068","success-70":"#64C189","success-80":"#80DCA5","success-90":"#B4ECCB","success-95":"#D5F6E2","success-100":"#EFFCF4","warning-10":"#221302","warning-20":"#3B2204","warning-30":"#543106","warning-40":"#744408","warning-50":"#98590C","warning-60":"#D07A13","warning-70":"#E4A244","warning-80":"#F5C26C","warning-90":"#FADBA6","warning-95":"#FCECD4","warning-100":"#FDF7F0","error-10":"#330505","error-20":"#550808","error-30":"#750C0C","error-40":"#9E130F","error-50":"#CB2213","error-60":"#DE6C6C","error-70":"#E89B9B","error-80":"#EFBEBE","error-90":"#F5D9D9","error-95":"#F9ECEC","error-100":"#FCF7F7","info-10":"#021824","info-20":"#032B3F","info-30":"#053D59","info-40":"#065478","info-50":"#176E9B","info-60":"#5296BE","info-70":"#82B5DA","info-80":"#ACCFE7","info-90":"#CCE3F1","info-95":"#E3F1F8","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000","primary-inverse":"#FEAB10"},ri={"brand-10":"#170F39","brand-20":"#281C62","brand-30":"#38268B","brand-40":"#4D34BF","brand-50":"#5735DF","brand-60":"#9986F9","brand-70":"#B2A5F8","brand-80":"#CDC2FA","brand-90":"#E2DCFC","brand-95":"#EFEDFE","brand-100":"#FAF8FD","primary-10":"#170F39","primary-20":"#281C62","primary-30":"#38268B","primary-40":"#4D34BF","primary-50":"#5735DF","primary-60":"#9986F9","primary-70":"#B2A5F8","primary-80":"#CDC2FA","primary-90":"#E2DCFC","primary-95":"#EFEDFE","primary-100":"#FAF8FD","secondary-10":"#251204","secondary-20":"#401F08","secondary-30":"#5B2C0B","secondary-40":"#7E3D0F","secondary-50":"#B04900","secondary-60":"#E26E1C","secondary-70":"#FF9445","secondary-80":"#FFBB8E","secondary-90":"#FFD9BF","secondary-95":"#FFECDF","secondary-100":"#FFF8F3","neutral-10":"#161616","neutral-20":"#282828","neutral-30":"#393939","neutral-40":"#4E4E4E","neutral-50":"#686868","neutral-60":"#8E8E8E","neutral-70":"#AFAFB0","neutral-80":"#C7CACA","neutral-90":"#DDE1E2","neutral-95":"#EDEFEF","neutral-100":"#F9F9F9","success-10":"#031B15","success-20":"#082D24","success-30":"#094134","success-40":"#0D5947","success-50":"#10755E","success-60":"#16A181","success-70":"#1EC59D","success-80":"#6FDDC2","success-90":"#AFECDE","success-95":"#D5F5ED","success-100":"#F1FCF9","warning-10":"#1F1500","warning-20":"#362500","warning-30":"#4D3501","warning-40":"#6A4801","warning-50":"#8B6001","warning-60":"#BF8301","warning-70":"#EAA102","warning-80":"#FFBF34","warning-90":"#FFDC8F","warning-95":"#FFEDC7","warning-100":"#FFF8EA","error-10":"#270F10","error-20":"#441B1B","error-30":"#612627","error-40":"#853535","error-50":"#AF4546","error-60":"#EC6162","error-70":"#F29696","error-80":"#F7BBBC","error-90":"#FAD8D8","error-95":"#FCEAEA","error-100":"#FEF7F7","info-10":"#0F1627","info-20":"#1B2745","info-30":"#273763","info-40":"#354D88","info-50":"#4665B3","info-60":"#618AF6","info-70":"#8DADFF","info-80":"#B4C9FF","info-90":"#D3DFFF","info-95":"#E9EFFF","info-100":"#F5F8FF",white:"#FFFFFF",black:"#000000","primary-inverse":"#FEAB10"},ni={"brand-10":"#0E113C","brand-20":"#191E67","brand-30":"#232A92","brand-40":"#233FC2","brand-50":"#135CEA","brand-60":"#378FFB","brand-70":"#71B3FD","brand-80":"#9DCFFE","brand-90":"#C1E5FF","brand-95":"#DCF1FF","brand-100":"#F3FAFF","primary-10":"#0E113C","primary-20":"#191E67","primary-30":"#232A92","primary-40":"#233FC2","primary-50":"#135CEA","primary-60":"#378FFB","primary-70":"#71B3FD","primary-80":"#9DCFFE","primary-90":"#C1E5FF","primary-95":"#DCF1FF","primary-100":"#F3FAFF","secondary-10":"#34001F","secondary-20":"#540033","secondary-30":"#730045","secondary-40":"#9D0054","secondary-50":"#C61C64","secondary-60":"#DE6792","secondary-70":"#EB96B6","secondary-80":"#F5BAD2","secondary-90":"#FCD5E3","secondary-95":"#FDEBF1","secondary-100":"#FDF6F9","neutral-10":"#161616","neutral-20":"#282828","neutral-30":"#393939","neutral-40":"#4E4E4E","neutral-50":"#686868","neutral-60":"#8E8E8E","neutral-70":"#AFAFB0","neutral-80":"#C7CACA","neutral-90":"#DDE1E2","neutral-95":"#EDEFEF","neutral-100":"#F9F9F9","success-10":"#081A0F","success-20":"#0E2D1B","success-30":"#154126","success-40":"#1C5A34","success-50":"#257645","success-60":"#44A068","success-70":"#64C189","success-80":"#80DCA5","success-90":"#B4ECCB","success-95":"#D5F6E2","success-100":"#EFFCF4","warning-10":"#221302","warning-20":"#3B2204","warning-30":"#543106","warning-40":"#744408","warning-50":"#98590C","warning-60":"#D07A13","warning-70":"#E4A244","warning-80":"#F5C26C","warning-90":"#FADBA6","warning-95":"#FCECD4","warning-100":"#FDF7F0","error-10":"#330505","error-20":"#550808","error-30":"#750C0C","error-40":"#9E130F","error-50":"#CB2213","error-60":"#DE6C6C","error-70":"#E89B9B","error-80":"#EFBEBE","error-90":"#F5D9D9","error-95":"#F9ECEC","error-100":"#FCF7F7","info-10":"#021824","info-20":"#032B3F","info-30":"#053D59","info-40":"#065478","info-50":"#176E9B","info-60":"#5296BE","info-70":"#82B5DA","info-80":"#ACCFE7","info-90":"#CCE3F1","info-95":"#E3F1F8","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000","primary-inverse":"#FEAB10"},oi={collections:{lifesg:Zo,bookingsg:Go,rbs:ti,mylegacy:Xo,ccube:Qo,oneservice:Jo,pa:ei,a11yplayground:ri,supportgowhere:ni},defaultValue:"lifesg"},ii={collections:{lifesg:Zo,bookingsg:Go,rbs:ti,mylegacy:Xo,ccube:Qo,oneservice:Jo,pa:ei,a11yplayground:ri,supportgowhere:ni},defaultValue:"lifesg"},ai=e=>t=>{var r;const n=t.theme,o="dark"===(null==n?void 0:n.colourMode),i=Vo(o?ii:oi,null==n?void 0:n.colourScheme),a=o?"primitiveColourDark":"primitiveColour",s=null===(r=null==n?void 0:n.overrides)||void 0===r?void 0:r[a];return s?Wo(i,e,s):i[e]},si={"brand-10":ai("brand-10"),"brand-20":ai("brand-20"),"brand-30":ai("brand-30"),"brand-40":ai("brand-40"),"brand-50":ai("brand-50"),"brand-60":ai("brand-60"),"brand-70":ai("brand-70"),"brand-80":ai("brand-80"),"brand-90":ai("brand-90"),"brand-95":ai("brand-95"),"brand-100":ai("brand-100"),"primary-10":ai("primary-10"),"primary-20":ai("primary-20"),"primary-30":ai("primary-30"),"primary-40":ai("primary-40"),"primary-50":ai("primary-50"),"primary-60":ai("primary-60"),"primary-70":ai("primary-70"),"primary-80":ai("primary-80"),"primary-90":ai("primary-90"),"primary-95":ai("primary-95"),"primary-100":ai("primary-100"),"secondary-10":ai("secondary-10"),"secondary-20":ai("secondary-20"),"secondary-30":ai("secondary-30"),"secondary-40":ai("secondary-40"),"secondary-50":ai("secondary-50"),"secondary-60":ai("secondary-60"),"secondary-70":ai("secondary-70"),"secondary-80":ai("secondary-80"),"secondary-90":ai("secondary-90"),"secondary-95":ai("secondary-95"),"secondary-100":ai("secondary-100"),"neutral-10":ai("neutral-10"),"neutral-20":ai("neutral-20"),"neutral-30":ai("neutral-30"),"neutral-40":ai("neutral-40"),"neutral-50":ai("neutral-50"),"neutral-60":ai("neutral-60"),"neutral-70":ai("neutral-70"),"neutral-80":ai("neutral-80"),"neutral-90":ai("neutral-90"),"neutral-95":ai("neutral-95"),"neutral-100":ai("neutral-100"),"success-10":ai("success-10"),"success-20":ai("success-20"),"success-30":ai("success-30"),"success-40":ai("success-40"),"success-50":ai("success-50"),"success-60":ai("success-60"),"success-70":ai("success-70"),"success-80":ai("success-80"),"success-90":ai("success-90"),"success-95":ai("success-95"),"success-100":ai("success-100"),"warning-10":ai("warning-10"),"warning-20":ai("warning-20"),"warning-30":ai("warning-30"),"warning-40":ai("warning-40"),"warning-50":ai("warning-50"),"warning-60":ai("warning-60"),"warning-70":ai("warning-70"),"warning-80":ai("warning-80"),"warning-90":ai("warning-90"),"warning-95":ai("warning-95"),"warning-100":ai("warning-100"),"error-10":ai("error-10"),"error-20":ai("error-20"),"error-30":ai("error-30"),"error-40":ai("error-40"),"error-50":ai("error-50"),"error-60":ai("error-60"),"error-70":ai("error-70"),"error-80":ai("error-80"),"error-90":ai("error-90"),"error-95":ai("error-95"),"error-100":ai("error-100"),"info-10":ai("info-10"),"info-20":ai("info-20"),"info-30":ai("info-30"),"info-40":ai("info-40"),"info-50":ai("info-50"),"info-60":ai("info-60"),"info-70":ai("info-70"),"info-80":ai("info-80"),"info-90":ai("info-90"),"info-95":ai("info-95"),"info-100":ai("info-100"),white:ai("white"),black:ai("black"),"primary-inverse":ai("primary-inverse")},li={text:ai("neutral-20"),"text-subtle":ai("neutral-30"),"text-subtler":ai("neutral-50"),"text-subtlest":ai("neutral-60"),"text-primary":ai("primary-50"),"text-hover":ai("primary-40"),"text-selected":ai("primary-50"),"text-selected-hover":ai("primary-40"),"text-disabled":ai("neutral-50"),"text-disabled-subtle":ai("neutral-60"),"text-disabled-subtlest":ai("neutral-80"),"text-selected-disabled":ai("neutral-20"),"text-success":ai("success-40"),"text-warning":ai("warning-40"),"text-error":ai("error-40"),"text-info":ai("info-40"),"text-inverse":ai("white"),icon:ai("neutral-50"),"icon-subtle":ai("neutral-60"),"icon-strongest":ai("neutral-20"),"icon-primary":ai("primary-50"),"icon-primary-subtle":ai("primary-60"),"icon-primary-subtlest":ai("primary-70"),"icon-hover":ai("primary-40"),"icon-selected":ai("primary-50"),"icon-selected-hover":ai("primary-40"),"icon-disabled":ai("neutral-50"),"icon-disabled-subtle":ai("neutral-60"),"icon-selected-disabled":ai("neutral-60"),"icon-success":ai("success-50"),"icon-warning":ai("warning-60"),"icon-error":ai("error-50"),"icon-error-strong":ai("error-40"),"icon-info":ai("info-50"),"icon-inverse":ai("white"),"icon-primary-inverse":ai("primary-inverse"),border:ai("neutral-90"),"border-strong":ai("neutral-70"),"border-stronger":ai("neutral-50"),"border-primary":ai("primary-50"),"border-primary-subtle":ai("primary-60"),"border-hover":ai("primary-90"),"border-hover-strong":ai("primary-60"),"border-selected":ai("primary-50"),"border-selected-subtle":ai("primary-70"),"border-selected-subtlest":ai("primary-90"),"border-selected-hover":ai("primary-40"),"border-focus":ai("primary-60"),"border-focus-strong":ai("primary-50"),"border-disabled":ai("neutral-90"),"border-selected-disabled":ai("neutral-70"),"border-success":ai("success-60"),"border-warning":ai("warning-60"),"border-error":ai("error-60"),"border-error-focus":ai("error-60"),"border-error-focus-strong":ai("error-40"),"border-error-strong":ai("error-40"),"border-info":ai("info-60"),bg:ai("white"),"bg-strong":ai("neutral-100"),"bg-stronger":ai("neutral-95"),"bg-strongest":ai("neutral-90"),"bg-hover":ai("primary-95"),"bg-hover-strong":ai("primary-90"),"bg-hover-subtle":ai("primary-100"),"bg-hover-neutral":ai("neutral-100"),"bg-hover-neutral-strong":ai("neutral-90"),"bg-selected":ai("primary-95"),"bg-selected-hover":ai("primary-90"),"bg-selected-strong":ai("primary-90"),"bg-selected-stronger":ai("primary-70"),"bg-selected-strongest":ai("primary-50"),"bg-selected-strongest-hover":ai("primary-40"),"bg-disabled":ai("neutral-95"),"bg-selected-disabled":ai("neutral-95"),"bg-selected-stronger-disabled":ai("neutral-70"),"bg-success":ai("success-100"),"bg-success-hover":ai("success-95"),"bg-success-strong":ai("success-50"),"bg-success-strong-hover":ai("success-40"),"bg-warning":ai("warning-100"),"bg-warning-hover":ai("warning-95"),"bg-warning-strong":ai("warning-50"),"bg-warning-strong-hover":ai("warning-40"),"bg-info":ai("info-100"),"bg-info-hover":ai("info-95"),"bg-info-strong":ai("info-50"),"bg-info-strong-hover":ai("info-40"),"bg-error":ai("error-100"),"bg-error-hover":ai("error-95"),"bg-error-strong":ai("error-50"),"bg-error-strong-hover":ai("error-40"),"bg-inverse":ai("neutral-20"),"bg-inverse-subtle":ai("neutral-30"),"bg-inverse-subtler":ai("neutral-50"),"bg-inverse-subtlest":ai("neutral-60"),"bg-inverse-hover":ai("neutral-40"),"bg-primary":ai("primary-50"),"bg-primary-subtle":ai("primary-60"),"bg-primary-subtler":ai("primary-95"),"bg-primary-subtlest":ai("primary-100"),"bg-available":"#6DD0A1","bg-primary-hover":ai("primary-40"),"bg-primary-subtlest-hover":ai("primary-90"),"bg-primary-subtlest-selected":ai("primary-90"),"overlay-strong":"rgba(40, 40, 40, 0.85)","overlay-subtle":"rgba(40, 40, 40, 0.20)",hyperlink:ai("primary-50"),"hyperlink-hover":ai("primary-40"),"hyperlink-visited":ai("primary-40"),"hyperlink-inverse":ai("primary-inverse"),"focus-ring":ai("black"),"focus-ring-inverse":ai("white")},ci={text:ai("neutral-100"),"text-subtle":ai("neutral-80"),"text-subtler":ai("neutral-60"),"text-subtlest":ai("neutral-50"),"text-primary":ai("primary-60"),"text-hover":ai("primary-70"),"text-selected":ai("primary-60"),"text-selected-hover":ai("primary-70"),"text-disabled":ai("neutral-60"),"text-disabled-subtle":ai("neutral-50"),"text-disabled-subtlest":ai("neutral-30"),"text-selected-disabled":ai("neutral-90"),"text-success":ai("success-70"),"text-warning":ai("warning-70"),"text-error":ai("error-70"),"text-info":ai("info-70"),"text-inverse":ai("black"),icon:ai("neutral-60"),"icon-subtle":ai("neutral-50"),"icon-strongest":ai("neutral-90"),"icon-primary":ai("primary-60"),"icon-primary-subtle":ai("primary-50"),"icon-primary-subtlest":ai("primary-40"),"icon-hover":ai("primary-70"),"icon-selected":ai("primary-60"),"icon-selected-hover":ai("primary-70"),"icon-disabled":ai("neutral-60"),"icon-disabled-subtle":ai("neutral-50"),"icon-selected-disabled":ai("neutral-50"),"icon-success":ai("success-60"),"icon-warning":ai("warning-50"),"icon-error":ai("error-60"),"icon-error-strong":ai("error-70"),"icon-info":ai("info-60"),"icon-inverse":ai("black"),"icon-primary-inverse":ai("primary-inverse"),border:ai("neutral-20"),"border-strong":ai("neutral-40"),"border-stronger":ai("neutral-60"),"border-primary":ai("primary-60"),"border-primary-subtle":ai("primary-50"),"border-hover":ai("primary-20"),"border-hover-strong":ai("primary-50"),"border-selected":ai("primary-60"),"border-selected-subtle":ai("primary-40"),"border-selected-subtlest":ai("primary-20"),"border-selected-hover":ai("primary-70"),"border-focus":ai("primary-50"),"border-focus-strong":ai("primary-60"),"border-disabled":ai("neutral-20"),"border-selected-disabled":ai("neutral-40"),"border-success":ai("success-50"),"border-warning":ai("warning-50"),"border-error":ai("error-50"),"border-error-focus":ai("error-50"),"border-error-focus-strong":ai("error-70"),"border-error-strong":ai("error-70"),"border-info":ai("info-50"),bg:ai("black"),"bg-strong":ai("neutral-10"),"bg-stronger":ai("neutral-20"),"bg-strongest":ai("neutral-20"),"bg-hover":ai("primary-20"),"bg-hover-strong":ai("primary-20"),"bg-hover-subtle":ai("primary-10"),"bg-hover-neutral":ai("neutral-10"),"bg-hover-neutral-strong":ai("neutral-20"),"bg-selected":ai("primary-20"),"bg-selected-hover":ai("primary-20"),"bg-selected-strong":ai("primary-20"),"bg-selected-stronger":ai("primary-40"),"bg-selected-strongest":ai("primary-60"),"bg-selected-strongest-hover":ai("primary-70"),"bg-disabled":ai("neutral-20"),"bg-selected-disabled":ai("neutral-20"),"bg-selected-stronger-disabled":ai("neutral-40"),"bg-success":ai("success-10"),"bg-success-hover":ai("success-20"),"bg-success-strong":ai("success-60"),"bg-success-strong-hover":ai("success-70"),"bg-warning":ai("warning-10"),"bg-warning-hover":ai("warning-20"),"bg-warning-strong":ai("warning-60"),"bg-warning-strong-hover":ai("warning-70"),"bg-info":ai("info-10"),"bg-info-hover":ai("info-20"),"bg-info-strong":ai("info-60"),"bg-info-strong-hover":ai("info-70"),"bg-error":ai("error-10"),"bg-error-hover":ai("error-20"),"bg-error-strong":ai("error-60"),"bg-error-strong-hover":ai("error-70"),"bg-inverse":ai("neutral-90"),"bg-inverse-subtle":ai("neutral-80"),"bg-inverse-subtler":ai("neutral-60"),"bg-inverse-subtlest":ai("neutral-50"),"bg-inverse-hover":ai("neutral-70"),"bg-primary":ai("primary-60"),"bg-primary-subtle":ai("primary-50"),"bg-primary-subtler":ai("primary-20"),"bg-primary-subtlest":ai("primary-10"),"bg-available":"#185339","bg-primary-hover":ai("primary-70"),"bg-primary-subtlest-hover":ai("primary-20"),"bg-primary-subtlest-selected":ai("primary-20"),"overlay-strong":"rgba(78, 78, 78, 0.80)","overlay-subtle":"rgba(78, 78, 78, 0.50)",hyperlink:ai("primary-60"),"hyperlink-hover":ai("primary-70"),"hyperlink-visited":ai("primary-70"),"hyperlink-inverse":ai("primary-inverse"),"focus-ring":ai("primary-60"),"focus-ring-inverse":ai("black")},di={text:ai("neutral-30"),"text-subtle":ai("neutral-40"),"text-subtler":ai("neutral-50"),"text-subtlest":ai("neutral-70"),"text-primary":ai("neutral-10"),"text-hover":ai("neutral-70"),"text-selected":ai("neutral-20"),"text-selected-hover":ai("neutral-10"),"text-disabled":ai("neutral-50"),"text-disabled-subtle":ai("neutral-60"),"text-disabled-subtlest":ai("neutral-80"),"text-selected-disabled":ai("neutral-40"),"text-success":ai("success-40"),"text-warning":ai("warning-40"),"text-error":ai("brand-30"),"text-info":ai("neutral-40"),"text-inverse":ai("neutral-100"),icon:ai("neutral-40"),"icon-subtle":ai("neutral-50"),"icon-strongest":ai("neutral-10"),"icon-primary":ai("neutral-10"),"icon-primary-subtle":ai("neutral-30"),"icon-primary-subtlest":ai("neutral-60"),"icon-hover":ai("neutral-70"),"icon-selected":ai("brand-20"),"icon-selected-hover":ai("brand-10"),"icon-disabled":ai("neutral-50"),"icon-disabled-subtle":ai("neutral-60"),"icon-selected-disabled":ai("neutral-40"),"icon-success":ai("success-40"),"icon-warning":ai("warning-60"),"icon-error":ai("brand-30"),"icon-error-strong":ai("brand-10"),"icon-info":ai("neutral-40"),"icon-inverse":ai("neutral-100"),"icon-primary-inverse":"#F9B371",border:ai("neutral-90"),"border-strong":ai("neutral-30"),"border-stronger":ai("neutral-20"),"border-primary":ai("neutral-40"),"border-primary-subtle":ai("neutral-60"),"border-hover":ai("neutral-80"),"border-hover-strong":ai("neutral-10"),"border-selected":ai("brand-20"),"border-selected-subtle":ai("neutral-40"),"border-selected-subtlest":ai("neutral-70"),"border-selected-hover":ai("neutral-10"),"border-focus":ai("neutral-20"),"border-focus-strong":ai("neutral-10"),"border-disabled":ai("neutral-90"),"border-selected-disabled":ai("neutral-80"),"border-success":ai("success-40"),"border-warning":ai("warning-60"),"border-error":ai("brand-30"),"border-error-focus":ai("brand-20"),"border-error-focus-strong":ai("brand-10"),"border-error-strong":ai("brand-20"),"border-info":ai("neutral-40"),bg:ai("neutral-100"),"bg-strong":ai("neutral-95"),"bg-stronger":ai("neutral-90"),"bg-strongest":ai("neutral-80"),"bg-hover":ai("brand-90"),"bg-hover-strong":ai("brand-80"),"bg-hover-subtle":ai("neutral-90"),"bg-hover-neutral":ai("neutral-90"),"bg-hover-neutral-strong":ai("neutral-90"),"bg-selected":ai("brand-100"),"bg-selected-hover":ai("brand-30"),"bg-selected-strong":ai("brand-50"),"bg-selected-stronger":ai("brand-40"),"bg-selected-strongest":ai("brand-20"),"bg-selected-strongest-hover":ai("brand-10"),"bg-disabled":ai("neutral-90"),"bg-selected-disabled":ai("neutral-90"),"bg-selected-stronger-disabled":ai("neutral-80"),"bg-success":ai("success-100"),"bg-success-hover":ai("success-95"),"bg-success-strong":ai("success-50"),"bg-success-strong-hover":ai("success-40"),"bg-warning":ai("warning-100"),"bg-warning-hover":ai("warning-95"),"bg-warning-strong":ai("warning-50"),"bg-warning-strong-hover":ai("warning-40"),"bg-info":ai("neutral-95"),"bg-info-hover":ai("info-95"),"bg-info-strong":ai("info-50"),"bg-info-strong-hover":ai("info-40"),"bg-error":ai("brand-100"),"bg-error-hover":ai("error-95"),"bg-error-strong":ai("error-50"),"bg-error-strong-hover":ai("error-40"),"bg-inverse":ai("neutral-40"),"bg-inverse-subtle":ai("neutral-60"),"bg-inverse-subtler":ai("neutral-70"),"bg-inverse-subtlest":ai("neutral-80"),"bg-inverse-hover":ai("neutral-30"),"bg-primary":ai("brand-20"),"bg-primary-subtle":ai("brand-60"),"bg-primary-subtler":ai("brand-80"),"bg-primary-subtlest":ai("brand-100"),"bg-available":ai("success-60"),"bg-primary-hover":ai("brand-10"),"bg-primary-subtlest-hover":ai("brand-80"),"bg-primary-subtlest-selected":ai("brand-40"),"overlay-strong":"rgba(25, 25, 25, 0.95)","overlay-subtle":"rgba(25, 25, 25, 0.20)",hyperlink:ai("neutral-10"),"hyperlink-hover":ai("neutral-40"),"hyperlink-visited":ai("neutral-50"),"hyperlink-inverse":"#F8AE68","focus-ring":ai("black"),"focus-ring-inverse":ai("white")},ui={text:ai("neutral-20"),"text-subtle":ai("neutral-30"),"text-subtler":ai("neutral-50"),"text-subtlest":ai("neutral-60"),"text-primary":ai("primary-50"),"text-hover":ai("primary-40"),"text-selected":ai("primary-50"),"text-selected-hover":ai("primary-40"),"text-disabled":ai("neutral-50"),"text-disabled-subtle":ai("neutral-60"),"text-disabled-subtlest":ai("neutral-80"),"text-selected-disabled":ai("neutral-20"),"text-success":ai("success-40"),"text-warning":ai("warning-40"),"text-error":ai("error-40"),"text-info":ai("info-40"),"text-inverse":ai("white"),icon:ai("neutral-50"),"icon-subtle":ai("neutral-60"),"icon-strongest":ai("neutral-20"),"icon-primary":ai("primary-50"),"icon-primary-subtle":ai("primary-60"),"icon-primary-subtlest":ai("primary-70"),"icon-hover":ai("primary-40"),"icon-selected":ai("primary-50"),"icon-selected-hover":ai("primary-40"),"icon-disabled":ai("neutral-50"),"icon-disabled-subtle":ai("neutral-60"),"icon-selected-disabled":ai("neutral-60"),"icon-success":ai("success-50"),"icon-warning":ai("warning-60"),"icon-error":ai("error-50"),"icon-error-strong":ai("error-40"),"icon-info":ai("info-50"),"icon-inverse":ai("white"),"icon-primary-inverse":ai("primary-inverse"),border:ai("neutral-90"),"border-strong":ai("neutral-70"),"border-stronger":ai("neutral-50"),"border-primary":ai("primary-50"),"border-primary-subtle":ai("primary-60"),"border-hover":ai("primary-90"),"border-hover-strong":ai("primary-60"),"border-selected":ai("primary-50"),"border-selected-subtle":ai("primary-70"),"border-selected-subtlest":ai("primary-90"),"border-selected-hover":ai("primary-40"),"border-focus":ai("primary-60"),"border-focus-strong":ai("primary-50"),"border-disabled":ai("neutral-90"),"border-selected-disabled":ai("neutral-70"),"border-success":ai("success-60"),"border-warning":ai("warning-60"),"border-error":ai("error-60"),"border-error-focus":ai("error-60"),"border-error-focus-strong":ai("error-40"),"border-error-strong":ai("error-40"),"border-info":ai("info-60"),bg:ai("white"),"bg-strong":ai("neutral-100"),"bg-stronger":ai("neutral-95"),"bg-strongest":ai("neutral-90"),"bg-hover":ai("primary-95"),"bg-hover-strong":ai("primary-90"),"bg-hover-subtle":ai("primary-100"),"bg-hover-neutral":ai("neutral-100"),"bg-hover-neutral-strong":ai("neutral-90"),"bg-selected":ai("primary-95"),"bg-selected-hover":ai("primary-90"),"bg-selected-strong":ai("primary-90"),"bg-selected-stronger":ai("primary-70"),"bg-selected-strongest":ai("primary-50"),"bg-selected-strongest-hover":ai("primary-40"),"bg-disabled":ai("neutral-95"),"bg-selected-disabled":ai("neutral-95"),"bg-selected-stronger-disabled":ai("neutral-70"),"bg-success":ai("success-100"),"bg-success-hover":ai("success-95"),"bg-success-strong":ai("success-50"),"bg-success-strong-hover":ai("success-40"),"bg-warning":ai("warning-100"),"bg-warning-hover":ai("warning-95"),"bg-warning-strong":ai("warning-50"),"bg-warning-strong-hover":ai("warning-40"),"bg-info":ai("info-100"),"bg-info-hover":ai("info-95"),"bg-info-strong":ai("info-50"),"bg-info-strong-hover":ai("info-40"),"bg-error":ai("error-100"),"bg-error-hover":ai("error-95"),"bg-error-strong":ai("error-50"),"bg-error-strong-hover":ai("error-40"),"bg-inverse":ai("neutral-20"),"bg-inverse-subtle":ai("neutral-30"),"bg-inverse-subtler":ai("neutral-50"),"bg-inverse-subtlest":ai("neutral-60"),"bg-inverse-hover":ai("neutral-40"),"bg-primary":ai("primary-50"),"bg-primary-subtle":ai("primary-60"),"bg-primary-subtler":ai("primary-95"),"bg-primary-subtlest":ai("primary-100"),"bg-available":"#6DD0A1","bg-primary-hover":ai("primary-40"),"bg-primary-subtlest-hover":ai("primary-90"),"bg-primary-subtlest-selected":ai("primary-90"),"overlay-strong":"rgba(40, 40, 40, 0.85)","overlay-subtle":"rgba(40, 40, 40, 0.20)",hyperlink:ai("primary-50"),"hyperlink-hover":ai("primary-40"),"hyperlink-visited":ai("primary-40"),"hyperlink-inverse":ai("primary-inverse"),"focus-ring":ai("black"),"focus-ring-inverse":ai("white")},fi={text:ai("neutral-100"),"text-subtle":ai("neutral-80"),"text-subtler":ai("neutral-60"),"text-subtlest":ai("neutral-50"),"text-primary":ai("primary-60"),"text-hover":ai("primary-70"),"text-selected":ai("primary-60"),"text-selected-hover":ai("primary-70"),"text-disabled":ai("neutral-60"),"text-disabled-subtle":ai("neutral-50"),"text-disabled-subtlest":ai("neutral-30"),"text-selected-disabled":ai("neutral-90"),"text-success":ai("success-70"),"text-warning":ai("warning-70"),"text-error":ai("error-70"),"text-info":ai("info-70"),"text-inverse":ai("black"),icon:ai("neutral-60"),"icon-subtle":ai("neutral-50"),"icon-strongest":ai("neutral-90"),"icon-primary":ai("primary-60"),"icon-primary-subtle":ai("primary-50"),"icon-primary-subtlest":ai("primary-40"),"icon-hover":ai("primary-70"),"icon-selected":ai("primary-60"),"icon-selected-hover":ai("primary-70"),"icon-disabled":ai("neutral-60"),"icon-disabled-subtle":ai("neutral-50"),"icon-selected-disabled":ai("neutral-50"),"icon-success":ai("success-60"),"icon-warning":ai("warning-50"),"icon-error":ai("error-60"),"icon-error-strong":ai("error-70"),"icon-info":ai("info-60"),"icon-inverse":ai("black"),"icon-primary-inverse":ai("primary-inverse"),border:ai("neutral-20"),"border-strong":ai("neutral-40"),"border-stronger":ai("neutral-60"),"border-primary":ai("primary-60"),"border-primary-subtle":ai("primary-50"),"border-hover":ai("primary-20"),"border-hover-strong":ai("primary-50"),"border-selected":ai("primary-60"),"border-selected-subtle":ai("primary-40"),"border-selected-subtlest":ai("primary-20"),"border-selected-hover":ai("primary-70"),"border-focus":ai("primary-50"),"border-focus-strong":ai("primary-60"),"border-disabled":ai("neutral-20"),"border-selected-disabled":ai("neutral-40"),"border-success":ai("success-50"),"border-warning":ai("warning-50"),"border-error":ai("error-50"),"border-error-focus":ai("error-50"),"border-error-focus-strong":ai("error-70"),"border-error-strong":ai("error-70"),"border-info":ai("info-50"),bg:ai("black"),"bg-strong":ai("neutral-10"),"bg-stronger":ai("neutral-20"),"bg-strongest":ai("neutral-20"),"bg-hover":ai("primary-20"),"bg-hover-strong":ai("primary-20"),"bg-hover-subtle":ai("primary-10"),"bg-hover-neutral":ai("neutral-10"),"bg-hover-neutral-strong":ai("neutral-20"),"bg-selected":ai("primary-20"),"bg-selected-hover":ai("primary-20"),"bg-selected-strong":ai("primary-20"),"bg-selected-stronger":ai("primary-40"),"bg-selected-strongest":ai("primary-60"),"bg-selected-strongest-hover":ai("primary-70"),"bg-disabled":ai("neutral-20"),"bg-selected-disabled":ai("neutral-20"),"bg-selected-stronger-disabled":ai("neutral-40"),"bg-success":ai("success-10"),"bg-success-hover":ai("success-20"),"bg-success-strong":ai("success-60"),"bg-success-strong-hover":ai("success-70"),"bg-warning":ai("warning-10"),"bg-warning-hover":ai("warning-20"),"bg-warning-strong":ai("warning-60"),"bg-warning-strong-hover":ai("warning-70"),"bg-info":ai("info-10"),"bg-info-hover":ai("info-20"),"bg-info-strong":ai("info-60"),"bg-info-strong-hover":ai("info-70"),"bg-error":ai("error-10"),"bg-error-hover":ai("error-20"),"bg-error-strong":ai("error-60"),"bg-error-strong-hover":ai("error-70"),"bg-inverse":ai("neutral-90"),"bg-inverse-subtle":ai("neutral-80"),"bg-inverse-subtler":ai("neutral-60"),"bg-inverse-subtlest":ai("neutral-50"),"bg-inverse-hover":ai("neutral-70"),"bg-primary":ai("primary-60"),"bg-primary-subtle":ai("primary-50"),"bg-primary-subtler":ai("primary-20"),"bg-primary-subtlest":ai("primary-10"),"bg-available":"#185339","bg-primary-hover":ai("primary-70"),"bg-primary-subtlest-hover":ai("primary-20"),"bg-primary-subtlest-selected":ai("primary-20"),"overlay-strong":"rgba(78, 78, 78, 0.80)","overlay-subtle":"rgba(78, 78, 78, 0.50)",hyperlink:ai("primary-60"),"hyperlink-hover":ai("primary-70"),"hyperlink-visited":ai("primary-70"),"hyperlink-inverse":ai("primary-inverse"),"focus-ring":ai("primary-60"),"focus-ring-inverse":ai("black")},hi={collections:{lifesg:li,bookingsg:li,rbs:li,mylegacy:li,ccube:li,oneservice:li,pa:di,a11yplayground:ui,supportgowhere:li},defaultValue:"lifesg"},pi={collections:{lifesg:ci,bookingsg:ci,rbs:ci,mylegacy:ci,ccube:ci,oneservice:ci,pa:ci,a11yplayground:fi,supportgowhere:ci},defaultValue:"lifesg"},gi=e=>t=>{var r;const n=t.theme,o="dark"===(null==n?void 0:n.colourMode),i=Vo(o?pi:hi,null==n?void 0:n.colourScheme),a=o?"semanticColourDark":"semanticColour",s=null===(r=null==n?void 0:n.overrides)||void 0===r?void 0:r[a],l=s?Wo(i,e,s):i[e];return"function"==typeof l?l(t):l},mi={text:gi("text"),"text-subtle":gi("text-subtle"),"text-subtler":gi("text-subtler"),"text-subtlest":gi("text-subtlest"),"text-primary":gi("text-primary"),"text-hover":gi("text-hover"),"text-selected":gi("text-selected"),"text-selected-hover":gi("text-selected-hover"),"text-disabled":gi("text-disabled"),"text-disabled-subtle":gi("text-disabled-subtle"),"text-disabled-subtlest":gi("text-disabled-subtlest"),"text-selected-disabled":gi("text-selected-disabled"),"text-success":gi("text-success"),"text-warning":gi("text-warning"),"text-error":gi("text-error"),"text-info":gi("text-info"),"text-inverse":gi("text-inverse"),icon:gi("icon"),"icon-subtle":gi("icon-subtle"),"icon-strongest":gi("icon-strongest"),"icon-primary":gi("icon-primary"),"icon-primary-subtle":gi("icon-primary-subtle"),"icon-primary-subtlest":gi("icon-primary-subtlest"),"icon-hover":gi("icon-hover"),"icon-selected":gi("icon-selected"),"icon-selected-hover":gi("icon-selected-hover"),"icon-disabled":gi("icon-disabled"),"icon-disabled-subtle":gi("icon-disabled-subtle"),"icon-selected-disabled":gi("icon-selected-disabled"),"icon-success":gi("icon-success"),"icon-warning":gi("icon-warning"),"icon-error":gi("icon-error"),"icon-error-strong":gi("icon-error-strong"),"icon-info":gi("icon-info"),"icon-inverse":gi("icon-inverse"),"icon-primary-inverse":gi("icon-primary-inverse"),border:gi("border"),"border-strong":gi("border-strong"),"border-stronger":gi("border-stronger"),"border-primary":gi("border-primary"),"border-primary-subtle":gi("border-primary-subtle"),"border-hover":gi("border-hover"),"border-hover-strong":gi("border-hover-strong"),"border-selected":gi("border-selected"),"border-selected-subtle":gi("border-selected-subtle"),"border-selected-subtlest":gi("border-selected-subtlest"),"border-selected-hover":gi("border-selected-hover"),"border-focus":gi("border-focus"),"border-focus-strong":gi("border-focus-strong"),"border-disabled":gi("border-disabled"),"border-selected-disabled":gi("border-selected-disabled"),"border-success":gi("border-success"),"border-warning":gi("border-warning"),"border-error":gi("border-error"),"border-error-focus":gi("border-error-focus"),"border-error-focus-strong":gi("border-error-focus-strong"),"border-error-strong":gi("border-error-strong"),"border-info":gi("border-info"),bg:gi("bg"),"bg-strong":gi("bg-strong"),"bg-stronger":gi("bg-stronger"),"bg-strongest":gi("bg-strongest"),"bg-hover":gi("bg-hover"),"bg-hover-strong":gi("bg-hover-strong"),"bg-hover-subtle":gi("bg-hover-subtle"),"bg-hover-neutral":gi("bg-hover-neutral"),"bg-hover-neutral-strong":gi("bg-hover-neutral-strong"),"bg-selected":gi("bg-selected"),"bg-selected-hover":gi("bg-selected-hover"),"bg-selected-strong":gi("bg-selected-strong"),"bg-selected-stronger":gi("bg-selected-stronger"),"bg-selected-strongest":gi("bg-selected-strongest"),"bg-selected-strongest-hover":gi("bg-selected-strongest-hover"),"bg-disabled":gi("bg-disabled"),"bg-selected-disabled":gi("bg-selected-disabled"),"bg-selected-stronger-disabled":gi("bg-selected-stronger-disabled"),"bg-success":gi("bg-success"),"bg-success-hover":gi("bg-success-hover"),"bg-success-strong":gi("bg-success-strong"),"bg-success-strong-hover":gi("bg-success-strong-hover"),"bg-warning":gi("bg-warning"),"bg-warning-hover":gi("bg-warning-hover"),"bg-warning-strong":gi("bg-warning-strong"),"bg-warning-strong-hover":gi("bg-warning-strong-hover"),"bg-info":gi("bg-info"),"bg-info-hover":gi("bg-info-hover"),"bg-info-strong":gi("bg-info-strong"),"bg-info-strong-hover":gi("bg-info-strong-hover"),"bg-error":gi("bg-error"),"bg-error-hover":gi("bg-error-hover"),"bg-error-strong":gi("bg-error-strong"),"bg-error-strong-hover":gi("bg-error-strong-hover"),"bg-inverse":gi("bg-inverse"),"bg-inverse-subtle":gi("bg-inverse-subtle"),"bg-inverse-subtler":gi("bg-inverse-subtler"),"bg-inverse-subtlest":gi("bg-inverse-subtlest"),"bg-inverse-hover":gi("bg-inverse-hover"),"bg-primary":gi("bg-primary"),"bg-primary-subtle":gi("bg-primary-subtle"),"bg-primary-subtler":gi("bg-primary-subtler"),"bg-primary-subtlest":gi("bg-primary-subtlest"),"bg-available":gi("bg-available"),"bg-primary-hover":gi("bg-primary-hover"),"bg-primary-subtlest-hover":gi("bg-primary-subtlest-hover"),"bg-primary-subtlest-selected":gi("bg-primary-subtlest-selected"),"overlay-strong":gi("overlay-strong"),"overlay-subtle":gi("overlay-subtle"),hyperlink:gi("hyperlink"),"hyperlink-hover":gi("hyperlink-hover"),"hyperlink-visited":gi("hyperlink-visited"),"hyperlink-inverse":gi("hyperlink-inverse"),"focus-ring":gi("focus-ring"),"focus-ring-inverse":gi("focus-ring-inverse")},bi={collections:{default:{solid:e=>t=>{var r,n,o;const{thickness:i,radius:a,colour:s}=e||{},l=null!==(r="function"==typeof i?i(t):i)&&void 0!==r?r:Ko["width-010"](t),c=null!==(n="function"==typeof a?a(t):a)&&void 0!==n?n:0,d=null!==(o="function"==typeof s?s(t):s)&&void 0!==o?o:mi.border(t),u=Ko.solid;return _`
            border: ${l} ${u} ${d};
            border-radius: ${c};
        `},"dashed-default":e=>t=>{var r,n,o;const{thickness:i,radius:a,colour:s}=e||{},l=null!==(r="function"==typeof i?i(t):i)&&void 0!==r?r:Ko["width-010"](t),c=null!==(n="function"==typeof a?a(t):a)&&void 0!==n?n:0,d=null!==(o="function"==typeof s?s(t):s)&&void 0!==o?o:mi.border(t),u=encodeURIComponent(`<svg width='100%' height='100%' xmlns='http://www.w3.org/2000/svg'><rect width='100%' height='100%' fill='none' rx='${c}' ry='${c}' stroke='${d}' stroke-width='${l}' stroke-dasharray='4, 8' stroke-dashoffset='0' stroke-linecap='square'/></svg>`);return _`
            background-image: url("data:image/svg+xml,${u}");
            border-radius: ${c};
        `}}},defaultValue:"default"},vi=e=>1===e.length&&"theme"in e[0],yi=e=>(...t)=>r=>{const n=vi(t)?[]:t,o=vi(t)?t[0]:r,i=o.theme;return(0,Vo(bi,null==i?void 0:i.borderScheme)[e])(...n)(o)},xi={solid:yi("solid"),"dashed-default":yi("dashed-default")},wi={collections:{default:{"xxs-min":0,"xxs-max":320,"xs-min":321,"xs-max":375,"sm-min":376,"sm-max":420,"md-min":421,"md-max":767,"lg-min":768,"lg-max":1023,"xl-min":1024,"xl-max":1440,"xxl-min":1441,"xxs-column":8,"xs-column":8,"sm-column":8,"md-column":8,"lg-column":12,"xl-column":12,"xxl-column":12,"xxs-gutter":16,"xs-gutter":16,"sm-gutter":16,"md-gutter":16,"lg-gutter":32,"xl-gutter":32,"xxl-gutter":32,"xxs-margin":24,"xs-margin":24,"sm-margin":24,"md-margin":24,"lg-margin":48,"xl-margin":48,"xxl-margin":48}},defaultValue:"default"},$i=e=>t=>{var r;const n=t.theme,o=Vo(wi,null==n?void 0:n.breakpointScheme);let i;return i=(null===(r=null==n?void 0:n.overrides)||void 0===r?void 0:r.breakpoint)?Wo(o,e,n.overrides.breakpoint):o[e],i},Ci={"xxs-min":$i("xxs-min"),"xxs-max":$i("xxs-max"),"xs-min":$i("xs-min"),"xs-max":$i("xs-max"),"sm-min":$i("sm-min"),"sm-max":$i("sm-max"),"md-min":$i("md-min"),"md-max":$i("md-max"),"lg-min":$i("lg-min"),"lg-max":$i("lg-max"),"xl-min":$i("xl-min"),"xl-max":$i("xl-max"),"xxl-min":$i("xxl-min"),"xxs-column":$i("xxs-column"),"xs-column":$i("xs-column"),"sm-column":$i("sm-column"),"md-column":$i("md-column"),"lg-column":$i("lg-column"),"xl-column":$i("xl-column"),"xxl-column":$i("xxl-column"),"xxs-gutter":$i("xxs-gutter"),"xs-gutter":$i("xs-gutter"),"sm-gutter":$i("sm-gutter"),"md-gutter":$i("md-gutter"),"lg-gutter":$i("lg-gutter"),"xl-gutter":$i("xl-gutter"),"xxl-gutter":$i("xxl-gutter"),"xxs-margin":$i("xxs-margin"),"xs-margin":$i("xs-margin"),"sm-margin":$i("sm-margin"),"md-margin":$i("md-margin"),"lg-margin":$i("lg-margin"),"xl-margin":$i("xl-margin"),"xxl-margin":$i("xxl-margin")},Si=e=>("max-width"===e?["xxs","xs","sm","md","lg","xl"]:["xxs","xs","sm","md","lg","xl","xxl"]).reduce(((t,r)=>(t[r]=((e,t)=>{const r=Ci["max-width"===e?`${t}-max`:`${t}-min`];return t=>{const n=r(t);return`@media screen and (${e}: ${n}px)`}})(e,r),t)),{}),Di={MaxWidth:Si("max-width"),MinWidth:Si("min-width")},ki={collections:{default:{"heading-size-xxl":"3rem","heading-size-xl":"2.5rem","heading-size-lg":"2rem","heading-size-md":"1.625rem","heading-size-sm":"1.375rem","heading-size-xs":"1.125rem","heading-lh-xxl":"3.5rem","heading-lh-xl":"3rem","heading-lh-lg":"2.5rem","heading-lh-md":"2.25rem","heading-lh-sm":"1.75rem","heading-lh-xs":"1.625rem","heading-ls-xxl":"-0.056rem","heading-ls-xl":"-0.032rem","heading-ls-lg":"-0.032rem","heading-ls-md":"0rem","heading-ls-sm":"0rem","heading-ls-xs":"0rem","weight-light":"300","weight-regular":"400","weight-semibold":"600","weight-bold":"700","font-family":"Open Sans","body-size-baseline":"1.125rem","body-size-md":"1rem","body-size-sm":"0.875rem","body-size-xs":"0.75rem","body-lh-baseline":"1.625rem","body-lh-md":"1.5rem","body-lh-sm":"1.625rem","body-lh-xs":"1.25rem","body-ls-baseline":"0rem","body-ls-md":"0.014rem","body-ls-sm":"0.012rem","body-ls-xs":"0.012rem","form-label-size":"1rem","form-description-size":"0.875rem","form-label-lh":"1.5rem","form-description-lh":"1.6rem","form-label-ls":"0.014rem","form-description-ls":"0.012rem"},bookingsg:{"heading-size-xxl":"3rem","heading-size-xl":"2.5rem","heading-size-lg":"2rem","heading-size-md":"1.625rem","heading-size-sm":"1.375rem","heading-size-xs":"1.125rem","heading-lh-xxl":"3.5rem","heading-lh-xl":"3rem","heading-lh-lg":"2.5rem","heading-lh-md":"2.25rem","heading-lh-sm":"1.75rem","heading-lh-xs":"1.75rem","heading-ls-xxl":"-0.056rem","heading-ls-xl":"-0.032rem","heading-ls-lg":"-0.032rem","heading-ls-md":"0rem","heading-ls-sm":"0rem","heading-ls-xs":"0rem","weight-light":"300","weight-regular":"400","weight-semibold":"600","weight-bold":"700","font-family":"Plus Jakarta Sans","body-size-baseline":"1.125rem","body-size-md":"1rem","body-size-sm":"0.875rem","body-size-xs":"0.75rem","body-lh-baseline":"1.75rem","body-lh-md":"1.5rem","body-lh-sm":"1.6rem","body-lh-xs":"1.2rem","body-ls-baseline":"0rem","body-ls-md":"0.014rem","body-ls-sm":"0.012rem","body-ls-xs":"0.012rem","form-label-size":"1rem","form-description-size":"0.875rem","form-label-lh":"1.5rem","form-description-lh":"1.6rem","form-label-ls":"0.014rem","form-description-ls":"0.012rem"},pa:{"heading-size-xxl":"2.5rem","heading-size-xl":"2rem","heading-size-lg":"1.75rem","heading-size-md":"1.5rem","heading-size-sm":"1.25rem","heading-size-xs":"1rem","heading-lh-xxl":"3rem","heading-lh-xl":"2.5rem","heading-lh-lg":"2.25rem","heading-lh-md":"2rem","heading-lh-sm":"2rem","heading-lh-xs":"1.75rem","heading-ls-xxl":"-0.032rem","heading-ls-xl":"-0.032rem","heading-ls-lg":"0rem","heading-ls-md":"0rem","heading-ls-sm":"0rem","heading-ls-xs":"0rem","weight-light":"300","weight-regular":"400","weight-semibold":"600","weight-bold":"700","font-family":"Lato","body-size-baseline":"1rem","body-size-md":"0.875rem","body-size-sm":"0.75rem","body-size-xs":"0.625rem","body-lh-baseline":"1.75rem","body-lh-md":"1.5rem","body-lh-sm":"1.25rem","body-lh-xs":"1.25rem","body-ls-baseline":"0rem","body-ls-md":"0.014rem","body-ls-sm":"0.012rem","body-ls-xs":"0.012rem","form-label-size":"1rem","form-description-size":"0.875rem","form-label-lh":"1.5rem","form-description-lh":"1.6rem","form-label-ls":"0.014rem","form-description-ls":"0.012rem"},a11yplayground:{"heading-size-xxl":"3rem","heading-size-xl":"2.5rem","heading-size-lg":"2rem","heading-size-md":"1.625rem","heading-size-sm":"1.375rem","heading-size-xs":"1.125rem","heading-lh-xxl":"3.5rem","heading-lh-xl":"3rem","heading-lh-lg":"2.5rem","heading-lh-md":"2.25rem","heading-lh-sm":"1.75rem","heading-lh-xs":"1.625rem","heading-ls-xxl":"-0.056rem","heading-ls-xl":"-0.032rem","heading-ls-lg":"-0.032rem","heading-ls-md":"0rem","heading-ls-sm":"0rem","heading-ls-xs":"0rem","weight-light":"300","weight-regular":"400","weight-semibold":"600","weight-bold":"700","font-family":"Atkinson Hyperlegible Next","body-size-baseline":"1.125rem","body-size-md":"1rem","body-size-sm":"0.875rem","body-size-xs":"0.75rem","body-lh-baseline":"1.625rem","body-lh-md":"1.5rem","body-lh-sm":"1.625rem","body-lh-xs":"1.25rem","body-ls-baseline":"0rem","body-ls-md":"0.014rem","body-ls-sm":"0.012rem","body-ls-xs":"0.012rem","form-label-size":"1.125rem","form-description-size":"1rem","form-label-lh":"1.5rem","form-description-lh":"1.625rem","form-label-ls":"0rem","form-description-ls":"0.00875rem"},supportgowhere:{"heading-size-xxl":"3rem","heading-size-xl":"2.5rem","heading-size-lg":"2rem","heading-size-md":"1.625rem","heading-size-sm":"1.375rem","heading-size-xs":"1.125rem","heading-lh-xxl":"3.5rem","heading-lh-xl":"3rem","heading-lh-lg":"2.5rem","heading-lh-md":"2.25rem","heading-lh-sm":"1.75rem","heading-lh-xs":"1.625rem","heading-ls-xxl":"-0.056rem","heading-ls-xl":"-0.032rem","heading-ls-lg":"-0.032rem","heading-ls-md":"0rem","heading-ls-sm":"0rem","heading-ls-xs":"0rem","weight-light":"300","weight-regular":"400","weight-semibold":"600","weight-bold":"700","font-family":"Libre Franklin","body-size-baseline":"1.125rem","body-size-md":"1rem","body-size-sm":"0.875rem","body-size-xs":"0.75rem","body-lh-baseline":"1.625rem","body-lh-md":"1.5rem","body-lh-sm":"1.625rem","body-lh-xs":"1.25rem","body-ls-baseline":"0rem","body-ls-md":"0.014rem","body-ls-sm":"0.012rem","body-ls-xs":"0.012rem","form-label-size":"1rem","form-description-size":"0.875rem","form-label-lh":"1.5rem","form-description-lh":"1.6rem","form-label-ls":"0.014rem","form-description-ls":"0.012rem"}},defaultValue:"default"},Ei=e=>t=>{var r;const n=t.theme,o=Vo(ki,null==n?void 0:n.fontScheme);return(null===(r=null==n?void 0:n.overrides)||void 0===r?void 0:r.fontSpec)?Wo(o,e,n.overrides.fontSpec):o[e]},_i={"heading-size-xxl":Ei("heading-size-xxl"),"heading-size-xl":Ei("heading-size-xl"),"heading-size-lg":Ei("heading-size-lg"),"heading-size-md":Ei("heading-size-md"),"heading-size-sm":Ei("heading-size-sm"),"heading-size-xs":Ei("heading-size-xs"),"heading-lh-xxl":Ei("heading-lh-xxl"),"heading-lh-xl":Ei("heading-lh-xl"),"heading-lh-lg":Ei("heading-lh-lg"),"heading-lh-md":Ei("heading-lh-md"),"heading-lh-sm":Ei("heading-lh-sm"),"heading-lh-xs":Ei("heading-lh-xs"),"heading-ls-xxl":Ei("heading-ls-xxl"),"heading-ls-xl":Ei("heading-ls-xl"),"heading-ls-lg":Ei("heading-ls-lg"),"heading-ls-md":Ei("heading-ls-md"),"heading-ls-sm":Ei("heading-ls-sm"),"heading-ls-xs":Ei("heading-ls-xs"),"weight-light":Ei("weight-light"),"weight-regular":Ei("weight-regular"),"weight-semibold":Ei("weight-semibold"),"weight-bold":Ei("weight-bold"),"font-family":Ei("font-family"),"body-size-baseline":Ei("body-size-baseline"),"body-size-md":Ei("body-size-md"),"body-size-sm":Ei("body-size-sm"),"body-size-xs":Ei("body-size-xs"),"body-lh-baseline":Ei("body-lh-baseline"),"body-lh-md":Ei("body-lh-md"),"body-lh-sm":Ei("body-lh-sm"),"body-lh-xs":Ei("body-lh-xs"),"body-ls-baseline":Ei("body-ls-baseline"),"body-ls-md":Ei("body-ls-md"),"body-ls-sm":Ei("body-ls-sm"),"body-ls-xs":Ei("body-ls-xs"),"form-label-size":Ei("form-label-size"),"form-description-size":Ei("form-description-size"),"form-label-lh":Ei("form-label-lh"),"form-description-lh":Ei("form-description-lh"),"form-label-ls":Ei("form-label-ls"),"form-description-ls":Ei("form-description-ls")},Oi=(e,t,r,n,o)=>{const{disableLigatures:i}=o||{};return _`
        font-family: ${Ei("font-family")};
        font-size: ${Ei(e)};
        font-weight: ${Ei(t)};
        line-height: ${Ei(r)};
        letter-spacing: ${Ei(n)};

        font-variant: ${i?"no-common-ligatures":"normal"};
    `},Fi=(e={})=>({"heading-xxl-light":Oi("heading-size-xxl","weight-light","heading-lh-xxl","heading-ls-xxl",e),"heading-xxl-regular":Oi("heading-size-xxl","weight-regular","heading-lh-xxl","heading-ls-xxl",e),"heading-xxl-semibold":Oi("heading-size-xxl","weight-semibold","heading-lh-xxl","heading-ls-xxl",e),"heading-xxl-bold":Oi("heading-size-xxl","weight-bold","heading-lh-xxl","heading-ls-xxl",e),"heading-xl-light":Oi("heading-size-xl","weight-light","heading-lh-xl","heading-ls-xl",e),"heading-xl-regular":Oi("heading-size-xl","weight-regular","heading-lh-xl","heading-ls-xl",e),"heading-xl-semibold":Oi("heading-size-xl","weight-semibold","heading-lh-xl","heading-ls-xl",e),"heading-xl-bold":Oi("heading-size-xl","weight-bold","heading-lh-xl","heading-ls-xl",e),"heading-lg-light":Oi("heading-size-lg","weight-light","heading-lh-lg","heading-ls-lg",e),"heading-lg-regular":Oi("heading-size-lg","weight-regular","heading-lh-lg","heading-ls-lg",e),"heading-lg-semibold":Oi("heading-size-lg","weight-semibold","heading-lh-lg","heading-ls-lg",e),"heading-lg-bold":Oi("heading-size-lg","weight-bold","heading-lh-lg","heading-ls-lg",e),"heading-md-light":Oi("heading-size-md","weight-light","heading-lh-md","heading-ls-md",e),"heading-md-regular":Oi("heading-size-md","weight-regular","heading-lh-md","heading-ls-md",e),"heading-md-semibold":Oi("heading-size-md","weight-semibold","heading-lh-md","heading-ls-md",e),"heading-md-bold":Oi("heading-size-md","weight-bold","heading-lh-md","heading-ls-md",e),"heading-sm-light":Oi("heading-size-sm","weight-light","heading-lh-sm","heading-ls-sm",e),"heading-sm-regular":Oi("heading-size-sm","weight-regular","heading-lh-sm","heading-ls-sm",e),"heading-sm-semibold":Oi("heading-size-sm","weight-semibold","heading-lh-sm","heading-ls-sm",e),"heading-sm-bold":Oi("heading-size-sm","weight-bold","heading-lh-sm","heading-ls-sm",e),"heading-xs-light":Oi("heading-size-xs","weight-light","heading-lh-xs","heading-ls-xs",e),"heading-xs-regular":Oi("heading-size-xs","weight-regular","heading-lh-xs","heading-ls-xs",e),"heading-xs-semibold":Oi("heading-size-xs","weight-semibold","heading-lh-xs","heading-ls-xs",e),"heading-xs-bold":Oi("heading-size-xs","weight-bold","heading-lh-xs","heading-ls-xs",e),"body-baseline-light":Oi("body-size-baseline","weight-light","body-lh-baseline","body-ls-baseline",e),"body-baseline-regular":Oi("body-size-baseline","weight-regular","body-lh-baseline","body-ls-baseline",e),"body-baseline-semibold":Oi("body-size-baseline","weight-semibold","body-lh-baseline","body-ls-baseline",e),"body-baseline-bold":Oi("body-size-baseline","weight-bold","body-lh-baseline","body-ls-baseline",e),"body-md-light":Oi("body-size-md","weight-light","body-lh-md","body-ls-md",e),"body-md-regular":Oi("body-size-md","weight-regular","body-lh-md","body-ls-md",e),"body-md-semibold":Oi("body-size-md","weight-semibold","body-lh-md","body-ls-md",e),"body-md-bold":Oi("body-size-md","weight-bold","body-lh-md","body-ls-md",e),"body-sm-light":Oi("body-size-sm","weight-light","body-lh-sm","body-ls-sm",e),"body-sm-regular":Oi("body-size-sm","weight-regular","body-lh-sm","body-ls-sm",e),"body-sm-semibold":Oi("body-size-sm","weight-semibold","body-lh-sm","body-ls-sm",e),"body-sm-bold":Oi("body-size-sm","weight-bold","body-lh-sm","body-ls-sm",e),"body-xs-light":Oi("body-size-xs","weight-light","body-lh-xs","body-ls-xs",e),"body-xs-regular":Oi("body-size-xs","weight-regular","body-lh-xs","body-ls-xs",e),"body-xs-semibold":Oi("body-size-xs","weight-semibold","body-lh-xs","body-ls-xs",e),"body-xs-bold":Oi("body-size-xs","weight-bold","body-lh-xs","body-ls-xs",e),"form-label":Oi("form-label-size","weight-semibold","form-label-lh","form-label-ls",e),"form-description":Oi("form-description-size","weight-regular","form-description-lh","form-description-ls",e)}),Ti=Fi({disableLigatures:!0}),Ii={collections:{default:Fi(),bookingsg:Ti,pa:Fi({disableLigatures:!0}),a11yplayground:Fi({disableLigatures:!0}),supportgowhere:Fi({disableLigatures:!0})},defaultValue:"default"},Mi=e=>t=>{var r;const n=t.theme,o=Vo(Ii,null==n?void 0:n.fontScheme),i=(null===(r=null==n?void 0:n.overrides)||void 0===r?void 0:r.font)?Wo(o,e,n.overrides.font):o[e];return"function"==typeof i?i(t):i},Ai={"heading-xxl-light":Mi("heading-xxl-light"),"heading-xxl-regular":Mi("heading-xxl-regular"),"heading-xxl-semibold":Mi("heading-xxl-semibold"),"heading-xxl-bold":Mi("heading-xxl-bold"),"heading-xl-light":Mi("heading-xl-light"),"heading-xl-regular":Mi("heading-xl-regular"),"heading-xl-semibold":Mi("heading-xl-semibold"),"heading-xl-bold":Mi("heading-xl-bold"),"heading-lg-light":Mi("heading-lg-light"),"heading-lg-regular":Mi("heading-lg-regular"),"heading-lg-semibold":Mi("heading-lg-semibold"),"heading-lg-bold":Mi("heading-lg-bold"),"heading-md-light":Mi("heading-md-light"),"heading-md-regular":Mi("heading-md-regular"),"heading-md-semibold":Mi("heading-md-semibold"),"heading-md-bold":Mi("heading-md-bold"),"heading-sm-light":Mi("heading-sm-light"),"heading-sm-regular":Mi("heading-sm-regular"),"heading-sm-semibold":Mi("heading-sm-semibold"),"heading-sm-bold":Mi("heading-sm-bold"),"heading-xs-light":Mi("heading-xs-light"),"heading-xs-regular":Mi("heading-xs-regular"),"heading-xs-semibold":Mi("heading-xs-semibold"),"heading-xs-bold":Mi("heading-xs-bold"),"body-baseline-light":Mi("body-baseline-light"),"body-baseline-regular":Mi("body-baseline-regular"),"body-baseline-semibold":Mi("body-baseline-semibold"),"body-baseline-bold":Mi("body-baseline-bold"),"body-md-light":Mi("body-md-light"),"body-md-regular":Mi("body-md-regular"),"body-md-semibold":Mi("body-md-semibold"),"body-md-bold":Mi("body-md-bold"),"body-sm-light":Mi("body-sm-light"),"body-sm-regular":Mi("body-sm-regular"),"body-sm-semibold":Mi("body-sm-semibold"),"body-sm-bold":Mi("body-sm-bold"),"body-xs-light":Mi("body-xs-light"),"body-xs-regular":Mi("body-xs-regular"),"body-xs-semibold":Mi("body-xs-semibold"),"body-xs-bold":Mi("body-xs-bold"),"form-label":Mi("form-label"),"form-description":Mi("form-description")},ji={collections:{default:{"duration-150":"150ms","duration-250":"250ms","duration-350":"350ms","duration-500":"500ms","duration-800":"800ms","duration-1000":"1000ms","ease-default":"cubic-bezier(0.45, 0.05, 0.55, 0.95)","ease-standard":"cubic-bezier(0.86, 0, 0.07, 1)","ease-entrance":"cubic-bezier(0.18, 0.13, 0, 1)","ease-exit":"cubic-bezier(1, 0, 0.8, 0.85)"}},defaultValue:"default"},Bi=e=>t=>{var r;const n=t.theme,o=Vo(ji,null==n?void 0:n.motionScheme);return(null===(r=null==n?void 0:n.overrides)||void 0===r?void 0:r.motion)?Wo(o,e,n.overrides.motion):o[e]},Ri={"duration-150":Bi("duration-150"),"duration-250":Bi("duration-250"),"duration-350":Bi("duration-350"),"duration-500":Bi("duration-500"),"duration-800":Bi("duration-800"),"duration-1000":Bi("duration-1000"),"ease-default":Bi("ease-default"),"ease-standard":Bi("ease-standard"),"ease-entrance":Bi("ease-entrance"),"ease-exit":Bi("ease-exit")},zi={collections:{default:{none:0,xs:2,sm:4,md:8,lg:12,full:9999}},defaultValue:"default"},Pi=e=>t=>{var r;const n=t.theme,o=Vo(zi,null==n?void 0:n.radiusScheme);return(null===(r=null==n?void 0:n.overrides)||void 0===r?void 0:r.radius)?`${Wo(o,e,n.overrides.radius)}px`:`${o[e]}px`},Li={none:Pi("none"),xs:Pi("xs"),sm:Pi("sm"),md:Pi("md"),lg:Pi("lg"),full:Pi("full")},Ni={collections:{default:{"spacing-0":0,"spacing-4":4,"spacing-8":8,"spacing-12":12,"spacing-16":16,"spacing-20":20,"spacing-24":24,"spacing-32":32,"spacing-40":40,"spacing-48":48,"spacing-64":64,"spacing-72":72,"layout-xs":8,"layout-sm":16,"layout-md":24,"layout-lg":32,"layout-xl":48,"layout-xxl":64,"layout-xxxl":128}},defaultValue:"default"},Hi=e=>t=>{var r;const n=t.theme,o=Vo(Ni,null==n?void 0:n.spacingScheme);return(null===(r=null==n?void 0:n.overrides)||void 0===r?void 0:r.spacing)?`${Wo(o,e,n.overrides.spacing)}px`:`${o[e]}px`},Wi={"spacing-0":Hi("spacing-0"),"spacing-4":Hi("spacing-4"),"spacing-8":Hi("spacing-8"),"spacing-12":Hi("spacing-12"),"spacing-16":Hi("spacing-16"),"spacing-20":Hi("spacing-20"),"spacing-24":Hi("spacing-24"),"spacing-32":Hi("spacing-32"),"spacing-40":Hi("spacing-40"),"spacing-48":Hi("spacing-48"),"spacing-64":Hi("spacing-64"),"spacing-72":Hi("spacing-72"),"layout-xs":Hi("layout-xs"),"layout-sm":Hi("layout-sm"),"layout-md":Hi("layout-md"),"layout-lg":Hi("layout-lg"),"layout-xl":Hi("layout-xl"),"layout-xxl":Hi("layout-xxl"),"layout-xxxl":Hi("layout-xxxl")},Vi=(e,t)=>Object.assign(Object.assign({},e),{colourMode:t}),Yi=Object.assign(Object.assign({},mi),{Primitive:si}),Ui=Object.assign(Object.assign({},Ai),{Spec:_i}),Ki=Ri,qi=Object.assign(Object.assign({},Ko),{Util:xi}),Gi=Wi,Qi=Li,Zi=Ci,Xi=Di,Ji={colourScheme:"lifesg",fontScheme:"default",motionScheme:"default",borderScheme:"default",spacingScheme:"default",radiusScheme:"default",breakpointScheme:"default",resourceScheme:"lifesg",_v2:{colorScheme:"base",textStyleScheme:"base",designTokenScheme:"base",resourceScheme:"base"}},ea={colourScheme:"bookingsg",fontScheme:"bookingsg",motionScheme:"default",borderScheme:"default",spacingScheme:"default",radiusScheme:"default",breakpointScheme:"default",resourceScheme:"bookingsg",_v2:{colorScheme:"bookingsg",textStyleScheme:"base",designTokenScheme:"base",resourceScheme:"bookingsg"}},ta={colourScheme:"ccube",fontScheme:"default",motionScheme:"default",borderScheme:"default",spacingScheme:"default",radiusScheme:"default",breakpointScheme:"default",resourceScheme:"ccube",_v2:{colorScheme:"ccube",textStyleScheme:"base",designTokenScheme:"base",resourceScheme:"ccube"}},ra={colourScheme:"mylegacy",fontScheme:"default",motionScheme:"default",borderScheme:"default",spacingScheme:"default",radiusScheme:"default",breakpointScheme:"default",resourceScheme:"mylegacy",_v2:{colorScheme:"mylegacy",textStyleScheme:"base",designTokenScheme:"base",resourceScheme:"mylegacy"}},na={colourScheme:"rbs",fontScheme:"default",motionScheme:"default",borderScheme:"default",spacingScheme:"default",radiusScheme:"default",breakpointScheme:"default",resourceScheme:"rbs",_v2:{colorScheme:"rbs",textStyleScheme:"base",designTokenScheme:"rbs",resourceScheme:"rbs"}},oa={colourScheme:"oneservice",fontScheme:"default",motionScheme:"default",borderScheme:"default",spacingScheme:"default",radiusScheme:"default",breakpointScheme:"default",resourceScheme:"oneservice"},ia={colourScheme:"pa",fontScheme:"pa",motionScheme:"default",borderScheme:"default",spacingScheme:"default",radiusScheme:"default",breakpointScheme:"default",resourceScheme:"pa",componentScheme:"pa"},aa={colourScheme:"a11yplayground",fontScheme:"a11yplayground",motionScheme:"default",borderScheme:"default",spacingScheme:"default",radiusScheme:"default",breakpointScheme:"default",resourceScheme:"a11yplayground",componentScheme:"a11yplayground"},sa={colourScheme:"supportgowhere",fontScheme:"supportgowhere",motionScheme:"default",borderScheme:"default",spacingScheme:"default",radiusScheme:"default",breakpointScheme:"default",resourceScheme:"supportgowhere",componentScheme:"default"};Object.assign(Object.assign({},Ji),{light:Vi(Ji,"light"),dark:Vi(Ji,"dark")}),Object.assign(Object.assign({},ea),{light:Vi(ea,"light"),dark:Vi(ea,"dark")}),Object.assign(Object.assign({},ta),{light:Vi(ta,"light"),dark:Vi(ta,"dark")}),Object.assign(Object.assign({},ra),{light:Vi(ra,"light"),dark:Vi(ra,"dark")}),Object.assign(Object.assign({},na),{light:Vi(na,"light"),dark:Vi(na,"dark")}),Object.assign(Object.assign({},oa),{light:Vi(oa,"light"),dark:Vi(oa,"dark")}),Object.assign(Object.assign({},ia),{light:Vi(ia,"light"),dark:Vi(ia,"dark")}),Object.assign(Object.assign({},aa),{light:Vi(aa,"light"),dark:Vi(aa,"dark")}),Object.assign(Object.assign({},sa),{light:Vi(sa,"light"),dark:Vi(sa,"dark")});const la=e=>_`
    display: -webkit-box;
    -webkit-line-clamp: ${e};
    -webkit-box-orient: vertical;
    overflow: hidden;
`,ca=(e,t,r=!1)=>_`
        ${Ui[`${e}-${t}`]}
        ${r?"margin-bottom: 1.05em;":"margin-bottom: 0;"}
    `,da=e=>{if(e)return _`
            ${la(e)}
        `},ua=(e,t)=>_`
    ${ca(e,t.weight||"regular",t.paragraph)}
    ${((e=!1,t=!1,r)=>t?_`
            display: block;
            ${da(r)}
        `:e?_`
            display: inline;
        `:_`
            display: block;
            ${da(r)}
        `)(t.inline,t.paragraph,t.maxLines)}
    color: ${Yi.text};
`;var fa;!function(r){const n=(e,t,r)=>{const n=E(e).attrs((({inline:e})=>({as:e?"span":void 0})))`
            ${e=>ua(t,e)}
        `;return n.displayName=`Typography.${r}`,n};r.HeadingXXL=n("h1","heading-xxl","HeadingXXL"),r.HeadingXL=n("h2","heading-xl","HeadingXL"),r.HeadingLG=n("h3","heading-lg","HeadingLG"),r.HeadingMD=n("h4","heading-md","HeadingMD"),r.HeadingSM=n("h5","heading-sm","HeadingSM"),r.HeadingXS=n("h6","heading-xs","HeadingXS");const o=(e,t)=>{const r=E.p.attrs((({inline:e})=>({as:e?"span":void 0})))`
            ${t=>ua(e,t)}
        `;return r.displayName=`Typography.${t}`,r};r.BodyBL=o("body-baseline","BodyBL"),r.BodyMD=o("body-md","BodyMD"),r.BodySM=o("body-sm","BodySM"),r.BodyXS=o("body-xs","BodyXS");const i=(r,n)=>{const o=E.a`
            ${e=>_`
                ${ca(r,e.weight||"regular")}
                color: ${Yi.hyperlink};
                text-decoration: none;

                :hover,
                :active,
                :focus {
                    color: ${Yi["text-hover"]};
                }
            `}
        `,i=r=>{var{external:n=!1,children:i}=r,a=lt(r,["external","children"]);return e(o,Object.assign({},a,{children:[i,n&&t(ha,{})]}))};return i.displayName=`Typography.${n}`,i};r.LinkBL=i("body-baseline","LinkBL"),r.LinkMD=i("body-md","LinkMD"),r.LinkSM=i("body-sm","LinkSM"),r.LinkXS=i("body-xs","LinkXS")}(fa||(fa={}));const ha=E(T)`
    height: 1lh;
    width: 1em;
    margin-left: 0.4em;
    vertical-align: middle;
`,pa=E.div`
    position: relative;
    display: flex;
    flex-direction: column;

    ${e=>{if(e.$border)return _`
                ${qi.Util["dashed-default"]({radius:Qi.sm,thickness:qi["width-040"],colour:Yi.border})}
                padding: ${Gi["spacing-32"]};

                ${Xi.MaxWidth.sm} {
                    padding: ${Gi["spacing-32"]} ${Gi["spacing-20"]};
                }
            `}}
`,ga=E.input`
    display: none;
`,ma=E.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;

    background: ${Yi["bg-primary-subtler"]};
    ${qi.Util["dashed-default"]({radius:Qi.sm,thickness:qi["width-040"],colour:Yi["border-primary"]})}

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`,ba=E(fa.BodyMD)`
    color: ${Yi["text-primary"]};
    text-align: center;
`,va=E(k)`
    color: ${Yi["icon-primary"]};
    height: 4rem;
    width: 4rem;
`,ya=u((({children:r,accept:n,capture:o,multiple:i,id:a,className:l,name:c,border:d,disabled:u,onChange:h,"data-testid":p},g)=>{const m=s(null),{getRootProps:b,isDragActive:v}=cr({onDrop:h,noClick:!0,disabled:u});f(g,(()=>Object.assign(Object.assign({},m.current),{openFileDialog:()=>{m.current&&(m.current.value="",m.current.click())}})));return e(pa,Object.assign({id:a,"data-testid":p||"dropzone",$border:d,className:l},b(),{children:[t(ga,{type:"file",name:c,ref:m,tabIndex:-1,"aria-hidden":!0,accept:n,capture:o,multiple:i,"data-testid":p?`${p}-input`:"dropzone-input",onChange:e=>{e.target.files&&h(Array.from(e.target.files))}}),r,v&&e(ma,{children:[t(va,{}),t(ba,{weight:"semibold",children:"Drop files here"})]})]}))}));const xa="undefined"!=typeof window&&void 0!==window.document&&void 0!==window.document.createElement;function wa(e){const t=Object.prototype.toString.call(e);return"[object Window]"===t||"[object global]"===t}function $a(e){return"nodeType"in e}function Ca(e){var t,r;return e?wa(e)?e:$a(e)&&null!=(t=null==(r=e.ownerDocument)?void 0:r.defaultView)?t:window:window}function Sa(e){const{Document:t}=Ca(e);return e instanceof t}function Da(e){return!wa(e)&&e instanceof Ca(e).HTMLElement}function ka(e){return e instanceof Ca(e).SVGElement}function Ea(e){return e?wa(e)?e.document:$a(e)?Sa(e)?e:Da(e)||ka(e)?e.ownerDocument:document:document:document}const _a=xa?p:c;function Oa(e){const t=s(e);return _a((()=>{t.current=e})),d((function(){for(var e=arguments.length,r=new Array(e),n=0;n<e;n++)r[n]=arguments[n];return null==t.current?void 0:t.current(...r)}),[])}function Fa(e,t){void 0===t&&(t=[e]);const r=s(e);return _a((()=>{r.current!==e&&(r.current=e)}),t),r}function Ta(e,t){const r=s();return a((()=>{const t=e(r.current);return r.current=t,t}),[...t])}function Ia(e){const t=Oa(e),r=s(null),n=d((e=>{e!==r.current&&(null==t||t(e,r.current)),r.current=e}),[]);return[r,n]}function Ma(e){const t=s();return c((()=>{t.current=e}),[e]),t.current}let Aa={};function ja(e,t){return a((()=>{if(t)return t;const r=null==Aa[e]?0:Aa[e]+1;return Aa[e]=r,e+"-"+r}),[e,t])}function Ba(e){return function(t){for(var r=arguments.length,n=new Array(r>1?r-1:0),o=1;o<r;o++)n[o-1]=arguments[o];return n.reduce(((t,r)=>{const n=Object.entries(r);for(const[r,o]of n){const n=t[r];null!=n&&(t[r]=n+e*o)}return t}),{...t})}}const Ra=Ba(1),za=Ba(-1);function Pa(e){if(!e)return!1;const{KeyboardEvent:t}=Ca(e.target);return t&&e instanceof t}function La(e){if(function(e){if(!e)return!1;const{TouchEvent:t}=Ca(e.target);return t&&e instanceof t}(e)){if(e.touches&&e.touches.length){const{clientX:t,clientY:r}=e.touches[0];return{x:t,y:r}}if(e.changedTouches&&e.changedTouches.length){const{clientX:t,clientY:r}=e.changedTouches[0];return{x:t,y:r}}}return function(e){return"clientX"in e&&"clientY"in e}(e)?{x:e.clientX,y:e.clientY}:null}const Na=Object.freeze({Translate:{toString(e){if(!e)return;const{x:t,y:r}=e;return"translate3d("+(t?Math.round(t):0)+"px, "+(r?Math.round(r):0)+"px, 0)"}},Scale:{toString(e){if(!e)return;const{scaleX:t,scaleY:r}=e;return"scaleX("+t+") scaleY("+r+")"}},Transform:{toString(e){if(e)return[Na.Translate.toString(e),Na.Scale.toString(e)].join(" ")}},Transition:{toString(e){let{property:t,duration:r,easing:n}=e;return t+" "+r+"ms "+n}}}),Ha="a,frame,iframe,input:not([type=hidden]):not(:disabled),select:not(:disabled),textarea:not(:disabled),button:not(:disabled),*[tabindex]";function Wa(e){return e.matches(Ha)?e:e.querySelector(Ha)}const Va={display:"none"};function Ya(e){let{id:t,value:r}=e;return o.createElement("div",{id:t,style:Va},r)}function Ua(e){let{id:t,announcement:r,ariaLiveType:n="assertive"}=e;return o.createElement("div",{id:t,style:{position:"fixed",width:1,height:1,margin:-1,border:0,padding:0,overflow:"hidden",clip:"rect(0 0 0 0)",clipPath:"inset(100%)",whiteSpace:"nowrap"},role:"status","aria-live":n,"aria-atomic":!0},r)}const Ka=i(null);const qa={draggable:"\n    To pick up a draggable item, press the space bar.\n    While dragging, use the arrow keys to move the item.\n    Press space again to drop the item in its new position, or press escape to cancel.\n  "},Ga={onDragStart(e){let{active:t}=e;return"Picked up draggable item "+t.id+"."},onDragOver(e){let{active:t,over:r}=e;return r?"Draggable item "+t.id+" was moved over droppable area "+r.id+".":"Draggable item "+t.id+" is no longer over a droppable area."},onDragEnd(e){let{active:t,over:r}=e;return r?"Draggable item "+t.id+" was dropped over droppable area "+r.id:"Draggable item "+t.id+" was dropped."},onDragCancel(e){let{active:t}=e;return"Dragging was cancelled. Draggable item "+t.id+" was dropped."}};function Qa(e){let{announcements:t=Ga,container:r,hiddenTextDescribedById:n,screenReaderInstructions:i=qa}=e;const{announce:s,announcement:l}=function(){const[e,t]=g("");return{announce:d((e=>{null!=e&&t(e)}),[]),announcement:e}}(),u=ja("DndLiveRegion"),[f,h]=g(!1);if(c((()=>{h(!0)}),[]),function(e){const t=b(Ka);c((()=>{if(!t)throw new Error("useDndMonitor must be used within a children of <DndContext>");return t(e)}),[e,t])}(a((()=>({onDragStart(e){let{active:r}=e;s(t.onDragStart({active:r}))},onDragMove(e){let{active:r,over:n}=e;t.onDragMove&&s(t.onDragMove({active:r,over:n}))},onDragOver(e){let{active:r,over:n}=e;s(t.onDragOver({active:r,over:n}))},onDragEnd(e){let{active:r,over:n}=e;s(t.onDragEnd({active:r,over:n}))},onDragCancel(e){let{active:r,over:n}=e;s(t.onDragCancel({active:r,over:n}))}})),[s,t])),!f)return null;const p=o.createElement(o.Fragment,null,o.createElement(Ya,{id:n,value:i.draggable}),o.createElement(Ua,{id:u,announcement:l}));return r?A(p,r):p}var Za;function Xa(){}function Ja(e,t){return a((()=>({sensor:e,options:null!=t?t:{}})),[e,t])}!function(e){e.DragStart="dragStart",e.DragMove="dragMove",e.DragEnd="dragEnd",e.DragCancel="dragCancel",e.DragOver="dragOver",e.RegisterDroppable="registerDroppable",e.SetDroppableDisabled="setDroppableDisabled",e.UnregisterDroppable="unregisterDroppable"}(Za||(Za={}));const es=Object.freeze({x:0,y:0});function ts(e,t){let{data:{value:r}}=e,{data:{value:n}}=t;return r-n}function rs(e,t){let{data:{value:r}}=e,{data:{value:n}}=t;return n-r}function ns(e){let{left:t,top:r,height:n,width:o}=e;return[{x:t,y:r},{x:t+o,y:r},{x:t,y:r+n},{x:t+o,y:r+n}]}function os(e,t){if(!e||0===e.length)return null;const[r]=e;return t?r[t]:r}function is(e,t){const r=Math.max(t.top,e.top),n=Math.max(t.left,e.left),o=Math.min(t.left+t.width,e.left+e.width),i=Math.min(t.top+t.height,e.top+e.height),a=o-n,s=i-r;if(n<o&&r<i){const r=t.width*t.height,n=e.width*e.height,o=a*s;return Number((o/(r+n-o)).toFixed(4))}return 0}const as=e=>{let{collisionRect:t,droppableRects:r,droppableContainers:n}=e;const o=[];for(const e of n){const{id:n}=e,i=r.get(n);if(i){const r=is(i,t);r>0&&o.push({id:n,data:{droppableContainer:e,value:r}})}}return o.sort(rs)};function ss(e,t){return e&&t?{x:e.left-t.left,y:e.top-t.top}:es}function ls(e){return function(t){for(var r=arguments.length,n=new Array(r>1?r-1:0),o=1;o<r;o++)n[o-1]=arguments[o];return n.reduce(((t,r)=>({...t,top:t.top+e*r.y,bottom:t.bottom+e*r.y,left:t.left+e*r.x,right:t.right+e*r.x})),{...t})}}const cs=ls(1);const ds={ignoreTransform:!1};function us(e,t){void 0===t&&(t=ds);let r=e.getBoundingClientRect();if(t.ignoreTransform){const{transform:t,transformOrigin:n}=Ca(e).getComputedStyle(e);t&&(r=function(e,t,r){const n=function(e){if(e.startsWith("matrix3d(")){const t=e.slice(9,-1).split(/, /);return{x:+t[12],y:+t[13],scaleX:+t[0],scaleY:+t[5]}}if(e.startsWith("matrix(")){const t=e.slice(7,-1).split(/, /);return{x:+t[4],y:+t[5],scaleX:+t[0],scaleY:+t[3]}}return null}(t);if(!n)return e;const{scaleX:o,scaleY:i,x:a,y:s}=n,l=e.left-a-(1-o)*parseFloat(r),c=e.top-s-(1-i)*parseFloat(r.slice(r.indexOf(" ")+1)),d=o?e.width/o:e.width,u=i?e.height/i:e.height;return{width:d,height:u,top:c,right:l+d,bottom:c+u,left:l}}(r,t,n))}const{top:n,left:o,width:i,height:a,bottom:s,right:l}=r;return{top:n,left:o,width:i,height:a,bottom:s,right:l}}function fs(e){return us(e,{ignoreTransform:!0})}function hs(e,t){const r=[];return e?function n(o){if(null!=t&&r.length>=t)return r;if(!o)return r;if(Sa(o)&&null!=o.scrollingElement&&!r.includes(o.scrollingElement))return r.push(o.scrollingElement),r;if(!Da(o)||ka(o))return r;if(r.includes(o))return r;const i=Ca(e).getComputedStyle(o);return o!==e&&function(e,t){void 0===t&&(t=Ca(e).getComputedStyle(e));const r=/(auto|scroll|overlay)/;return["overflow","overflowX","overflowY"].some((e=>{const n=t[e];return"string"==typeof n&&r.test(n)}))}(o,i)&&r.push(o),function(e,t){return void 0===t&&(t=Ca(e).getComputedStyle(e)),"fixed"===t.position}(o,i)?r:n(o.parentNode)}(e):r}function ps(e){const[t]=hs(e,1);return null!=t?t:null}function gs(e){return xa&&e?wa(e)?e:$a(e)?Sa(e)||e===Ea(e).scrollingElement?window:Da(e)?e:null:null:null}function ms(e){return wa(e)?e.scrollX:e.scrollLeft}function bs(e){return wa(e)?e.scrollY:e.scrollTop}function vs(e){return{x:ms(e),y:bs(e)}}var ys;function xs(e){return!(!xa||!e)&&e===document.scrollingElement}function ws(e){const t={x:0,y:0},r=xs(e)?{height:window.innerHeight,width:window.innerWidth}:{height:e.clientHeight,width:e.clientWidth},n={x:e.scrollWidth-r.width,y:e.scrollHeight-r.height};return{isTop:e.scrollTop<=t.y,isLeft:e.scrollLeft<=t.x,isBottom:e.scrollTop>=n.y,isRight:e.scrollLeft>=n.x,maxScroll:n,minScroll:t}}!function(e){e[e.Forward=1]="Forward",e[e.Backward=-1]="Backward"}(ys||(ys={}));const $s={x:.2,y:.2};function Cs(e,t,r,n,o){let{top:i,left:a,right:s,bottom:l}=r;void 0===n&&(n=10),void 0===o&&(o=$s);const{isTop:c,isBottom:d,isLeft:u,isRight:f}=ws(e),h={x:0,y:0},p={x:0,y:0},g=t.height*o.y,m=t.width*o.x;return!c&&i<=t.top+g?(h.y=ys.Backward,p.y=n*Math.abs((t.top+g-i)/g)):!d&&l>=t.bottom-g&&(h.y=ys.Forward,p.y=n*Math.abs((t.bottom-g-l)/g)),!f&&s>=t.right-m?(h.x=ys.Forward,p.x=n*Math.abs((t.right-m-s)/m)):!u&&a<=t.left+m&&(h.x=ys.Backward,p.x=n*Math.abs((t.left+m-a)/m)),{direction:h,speed:p}}function Ss(e){if(e===document.scrollingElement){const{innerWidth:e,innerHeight:t}=window;return{top:0,left:0,right:e,bottom:t,width:e,height:t}}const{top:t,left:r,right:n,bottom:o}=e.getBoundingClientRect();return{top:t,left:r,right:n,bottom:o,width:e.clientWidth,height:e.clientHeight}}function Ds(e){return e.reduce(((e,t)=>Ra(e,vs(t))),es)}const ks=[["x",["left","right"],function(e){return e.reduce(((e,t)=>e+ms(t)),0)}],["y",["top","bottom"],function(e){return e.reduce(((e,t)=>e+bs(t)),0)}]];class Es{constructor(e,t){this.rect=void 0,this.width=void 0,this.height=void 0,this.top=void 0,this.bottom=void 0,this.right=void 0,this.left=void 0;const r=hs(t),n=Ds(r);this.rect={...e},this.width=e.width,this.height=e.height;for(const[e,t,o]of ks)for(const i of t)Object.defineProperty(this,i,{get:()=>{const t=o(r),a=n[e]-t;return this.rect[i]+a},enumerable:!0});Object.defineProperty(this,"rect",{enumerable:!1})}}class _s{constructor(e){this.target=void 0,this.listeners=[],this.removeAll=()=>{this.listeners.forEach((e=>{var t;return null==(t=this.target)?void 0:t.removeEventListener(...e)}))},this.target=e}add(e,t,r){var n;null==(n=this.target)||n.addEventListener(e,t,r),this.listeners.push([e,t,r])}}function Os(e,t){const r=Math.abs(e.x),n=Math.abs(e.y);return"number"==typeof t?Math.sqrt(r**2+n**2)>t:"x"in t&&"y"in t?r>t.x&&n>t.y:"x"in t?r>t.x:"y"in t&&n>t.y}var Fs,Ts;function Is(e){e.preventDefault()}function Ms(e){e.stopPropagation()}!function(e){e.Click="click",e.DragStart="dragstart",e.Keydown="keydown",e.ContextMenu="contextmenu",e.Resize="resize",e.SelectionChange="selectionchange",e.VisibilityChange="visibilitychange"}(Fs||(Fs={})),function(e){e.Space="Space",e.Down="ArrowDown",e.Right="ArrowRight",e.Left="ArrowLeft",e.Up="ArrowUp",e.Esc="Escape",e.Enter="Enter"}(Ts||(Ts={}));const As={start:[Ts.Space,Ts.Enter],cancel:[Ts.Esc],end:[Ts.Space,Ts.Enter]},js=(e,t)=>{let{currentCoordinates:r}=t;switch(e.code){case Ts.Right:return{...r,x:r.x+25};case Ts.Left:return{...r,x:r.x-25};case Ts.Down:return{...r,y:r.y+25};case Ts.Up:return{...r,y:r.y-25}}};let Bs=class{constructor(e){this.props=void 0,this.autoScrollEnabled=!1,this.referenceCoordinates=void 0,this.listeners=void 0,this.windowListeners=void 0,this.props=e;const{event:{target:t}}=e;this.props=e,this.listeners=new _s(Ea(t)),this.windowListeners=new _s(Ca(t)),this.handleKeyDown=this.handleKeyDown.bind(this),this.handleCancel=this.handleCancel.bind(this),this.attach()}attach(){this.handleStart(),this.windowListeners.add(Fs.Resize,this.handleCancel),this.windowListeners.add(Fs.VisibilityChange,this.handleCancel),setTimeout((()=>this.listeners.add(Fs.Keydown,this.handleKeyDown)))}handleStart(){const{activeNode:e,onStart:t}=this.props,r=e.node.current;r&&function(e,t){if(void 0===t&&(t=us),!e)return;const{top:r,left:n,bottom:o,right:i}=t(e);ps(e)&&(o<=0||i<=0||r>=window.innerHeight||n>=window.innerWidth)&&e.scrollIntoView({block:"center",inline:"center"})}(r),t(es)}handleKeyDown(e){if(Pa(e)){const{active:t,context:r,options:n}=this.props,{keyboardCodes:o=As,coordinateGetter:i=js,scrollBehavior:a="smooth"}=n,{code:s}=e;if(o.end.includes(s))return void this.handleEnd(e);if(o.cancel.includes(s))return void this.handleCancel(e);const{collisionRect:l}=r.current,c=l?{x:l.left,y:l.top}:es;this.referenceCoordinates||(this.referenceCoordinates=c);const d=i(e,{active:t,context:r.current,currentCoordinates:c});if(d){const t=za(d,c),n={x:0,y:0},{scrollableAncestors:o}=r.current;for(const r of o){const o=e.code,{isTop:i,isRight:s,isLeft:l,isBottom:c,maxScroll:u,minScroll:f}=ws(r),h=Ss(r),p={x:Math.min(o===Ts.Right?h.right-h.width/2:h.right,Math.max(o===Ts.Right?h.left:h.left+h.width/2,d.x)),y:Math.min(o===Ts.Down?h.bottom-h.height/2:h.bottom,Math.max(o===Ts.Down?h.top:h.top+h.height/2,d.y))},g=o===Ts.Right&&!s||o===Ts.Left&&!l,m=o===Ts.Down&&!c||o===Ts.Up&&!i;if(g&&p.x!==d.x){const e=r.scrollLeft+t.x,i=o===Ts.Right&&e<=u.x||o===Ts.Left&&e>=f.x;if(i&&!t.y)return void r.scrollTo({left:e,behavior:a});n.x=i?r.scrollLeft-e:o===Ts.Right?r.scrollLeft-u.x:r.scrollLeft-f.x,n.x&&r.scrollBy({left:-n.x,behavior:a});break}if(m&&p.y!==d.y){const e=r.scrollTop+t.y,i=o===Ts.Down&&e<=u.y||o===Ts.Up&&e>=f.y;if(i&&!t.x)return void r.scrollTo({top:e,behavior:a});n.y=i?r.scrollTop-e:o===Ts.Down?r.scrollTop-u.y:r.scrollTop-f.y,n.y&&r.scrollBy({top:-n.y,behavior:a});break}}this.handleMove(e,Ra(za(d,this.referenceCoordinates),n))}}}handleMove(e,t){const{onMove:r}=this.props;e.preventDefault(),r(t)}handleEnd(e){const{onEnd:t}=this.props;e.preventDefault(),this.detach(),t()}handleCancel(e){const{onCancel:t}=this.props;e.preventDefault(),this.detach(),t()}detach(){this.listeners.removeAll(),this.windowListeners.removeAll()}};function Rs(e){return Boolean(e&&"distance"in e)}function zs(e){return Boolean(e&&"delay"in e)}Bs.activators=[{eventName:"onKeyDown",handler:(e,t,r)=>{let{keyboardCodes:n=As,onActivation:o}=t,{active:i}=r;const{code:a}=e.nativeEvent;if(n.start.includes(a)){const t=i.activatorNode.current;return(!t||e.target===t)&&(e.preventDefault(),null==o||o({event:e.nativeEvent}),!0)}return!1}}];class Ps{constructor(e,t,r){var n;void 0===r&&(r=function(e){const{EventTarget:t}=Ca(e);return e instanceof t?e:Ea(e)}(e.event.target)),this.props=void 0,this.events=void 0,this.autoScrollEnabled=!0,this.document=void 0,this.activated=!1,this.initialCoordinates=void 0,this.timeoutId=null,this.listeners=void 0,this.documentListeners=void 0,this.windowListeners=void 0,this.props=e,this.events=t;const{event:o}=e,{target:i}=o;this.props=e,this.events=t,this.document=Ea(i),this.documentListeners=new _s(this.document),this.listeners=new _s(r),this.windowListeners=new _s(Ca(i)),this.initialCoordinates=null!=(n=La(o))?n:es,this.handleStart=this.handleStart.bind(this),this.handleMove=this.handleMove.bind(this),this.handleEnd=this.handleEnd.bind(this),this.handleCancel=this.handleCancel.bind(this),this.handleKeydown=this.handleKeydown.bind(this),this.removeTextSelection=this.removeTextSelection.bind(this),this.attach()}attach(){const{events:e,props:{options:{activationConstraint:t,bypassActivationConstraint:r}}}=this;if(this.listeners.add(e.move.name,this.handleMove,{passive:!1}),this.listeners.add(e.end.name,this.handleEnd),this.windowListeners.add(Fs.Resize,this.handleCancel),this.windowListeners.add(Fs.DragStart,Is),this.windowListeners.add(Fs.VisibilityChange,this.handleCancel),this.windowListeners.add(Fs.ContextMenu,Is),this.documentListeners.add(Fs.Keydown,this.handleKeydown),t){if(null!=r&&r({event:this.props.event,activeNode:this.props.activeNode,options:this.props.options}))return this.handleStart();if(zs(t))return void(this.timeoutId=setTimeout(this.handleStart,t.delay));if(Rs(t))return}this.handleStart()}detach(){this.listeners.removeAll(),this.windowListeners.removeAll(),setTimeout(this.documentListeners.removeAll,50),null!==this.timeoutId&&(clearTimeout(this.timeoutId),this.timeoutId=null)}handleStart(){const{initialCoordinates:e}=this,{onStart:t}=this.props;e&&(this.activated=!0,this.documentListeners.add(Fs.Click,Ms,{capture:!0}),this.removeTextSelection(),this.documentListeners.add(Fs.SelectionChange,this.removeTextSelection),t(e))}handleMove(e){var t;const{activated:r,initialCoordinates:n,props:o}=this,{onMove:i,options:{activationConstraint:a}}=o;if(!n)return;const s=null!=(t=La(e))?t:es,l=za(n,s);if(!r&&a){if(Rs(a)){if(null!=a.tolerance&&Os(l,a.tolerance))return this.handleCancel();if(Os(l,a.distance))return this.handleStart()}return zs(a)&&Os(l,a.tolerance)?this.handleCancel():void 0}e.cancelable&&e.preventDefault(),i(s)}handleEnd(){const{onEnd:e}=this.props;this.detach(),e()}handleCancel(){const{onCancel:e}=this.props;this.detach(),e()}handleKeydown(e){e.code===Ts.Esc&&this.handleCancel()}removeTextSelection(){var e;null==(e=this.document.getSelection())||e.removeAllRanges()}}const Ls={move:{name:"pointermove"},end:{name:"pointerup"}};class Ns extends Ps{constructor(e){const{event:t}=e,r=Ea(t.target);super(e,Ls,r)}}Ns.activators=[{eventName:"onPointerDown",handler:(e,t)=>{let{nativeEvent:r}=e,{onActivation:n}=t;return!(!r.isPrimary||0!==r.button)&&(null==n||n({event:r}),!0)}}];const Hs={move:{name:"mousemove"},end:{name:"mouseup"}};var Ws;!function(e){e[e.RightClick=2]="RightClick"}(Ws||(Ws={}));let Vs=class extends Ps{constructor(e){super(e,Hs,Ea(e.event.target))}};Vs.activators=[{eventName:"onMouseDown",handler:(e,t)=>{let{nativeEvent:r}=e,{onActivation:n}=t;return r.button!==Ws.RightClick&&(null==n||n({event:r}),!0)}}];const Ys={move:{name:"touchmove"},end:{name:"touchend"}};class Us extends Ps{constructor(e){super(e,Ys)}static setup(){return window.addEventListener(Ys.move.name,e,{capture:!1,passive:!1}),function(){window.removeEventListener(Ys.move.name,e)};function e(){}}}var Ks,qs;function Gs(e){let{acceleration:t,activator:r=Ks.Pointer,canScroll:n,draggingRect:o,enabled:i,interval:l=5,order:u=qs.TreeOrder,pointerCoordinates:f,scrollableAncestors:h,scrollableAncestorRects:p,delta:g,threshold:m}=e;const b=function(e){let{delta:t,disabled:r}=e;const n=Ma(t);return Ta((e=>{if(r||!n||!e)return Qs;const o={x:Math.sign(t.x-n.x),y:Math.sign(t.y-n.y)};return{x:{[ys.Backward]:e.x[ys.Backward]||-1===o.x,[ys.Forward]:e.x[ys.Forward]||1===o.x},y:{[ys.Backward]:e.y[ys.Backward]||-1===o.y,[ys.Forward]:e.y[ys.Forward]||1===o.y}}}),[r,t,n])}({delta:g,disabled:!i}),[v,y]=function(){const e=s(null);return[d(((t,r)=>{e.current=setInterval(t,r)}),[]),d((()=>{null!==e.current&&(clearInterval(e.current),e.current=null)}),[])]}(),x=s({x:0,y:0}),w=s({x:0,y:0}),$=a((()=>{switch(r){case Ks.Pointer:return f?{top:f.y,bottom:f.y,left:f.x,right:f.x}:null;case Ks.DraggableRect:return o}}),[r,o,f]),C=s(null),S=d((()=>{const e=C.current;if(!e)return;const t=x.current.x*w.current.x,r=x.current.y*w.current.y;e.scrollBy(t,r)}),[]),D=a((()=>u===qs.TreeOrder?[...h].reverse():h),[u,h]);c((()=>{if(i&&h.length&&$){for(const e of D){if(!1===(null==n?void 0:n(e)))continue;const r=h.indexOf(e),o=p[r];if(!o)continue;const{direction:i,speed:a}=Cs(e,o,$,t,m);for(const e of["x","y"])b[e][i[e]]||(a[e]=0,i[e]=0);if(a.x>0||a.y>0)return y(),C.current=e,v(S,l),x.current=a,void(w.current=i)}x.current={x:0,y:0},w.current={x:0,y:0},y()}else y()}),[t,S,n,y,i,l,JSON.stringify($),JSON.stringify(b),v,h,D,p,JSON.stringify(m)])}Us.activators=[{eventName:"onTouchStart",handler:(e,t)=>{let{nativeEvent:r}=e,{onActivation:n}=t;const{touches:o}=r;return!(o.length>1)&&(null==n||n({event:r}),!0)}}],function(e){e[e.Pointer=0]="Pointer",e[e.DraggableRect=1]="DraggableRect"}(Ks||(Ks={})),function(e){e[e.TreeOrder=0]="TreeOrder",e[e.ReversedTreeOrder=1]="ReversedTreeOrder"}(qs||(qs={}));const Qs={x:{[ys.Backward]:!1,[ys.Forward]:!1},y:{[ys.Backward]:!1,[ys.Forward]:!1}};var Zs,Xs;!function(e){e[e.Always=0]="Always",e[e.BeforeDragging=1]="BeforeDragging",e[e.WhileDragging=2]="WhileDragging"}(Zs||(Zs={})),function(e){e.Optimized="optimized"}(Xs||(Xs={}));const Js=new Map;function el(e,t){return Ta((r=>e?r||("function"==typeof t?t(e):e):null),[t,e])}function tl(e){let{callback:t,disabled:r}=e;const n=Oa(t),o=a((()=>{if(r||"undefined"==typeof window||void 0===window.ResizeObserver)return;const{ResizeObserver:e}=window;return new e(n)}),[r]);return c((()=>()=>null==o?void 0:o.disconnect()),[o]),o}function rl(e){return new Es(us(e),e)}function nl(e,t,r){void 0===t&&(t=rl);const[n,o]=l((function(n){if(!e)return null;var o;if(!1===e.isConnected)return null!=(o=null!=n?n:r)?o:null;const i=t(e);if(JSON.stringify(n)===JSON.stringify(i))return n;return i}),null),i=function(e){let{callback:t,disabled:r}=e;const n=Oa(t),o=a((()=>{if(r||"undefined"==typeof window||void 0===window.MutationObserver)return;const{MutationObserver:e}=window;return new e(n)}),[n,r]);return c((()=>()=>null==o?void 0:o.disconnect()),[o]),o}({callback(t){if(e)for(const r of t){const{type:t,target:n}=r;if("childList"===t&&n instanceof HTMLElement&&n.contains(e)){o();break}}}}),s=tl({callback:o});return _a((()=>{o(),e?(null==s||s.observe(e),null==i||i.observe(document.body,{childList:!0,subtree:!0})):(null==s||s.disconnect(),null==i||i.disconnect())}),[e]),n}const ol=[];function il(e,t){void 0===t&&(t=[]);const r=s(null);return c((()=>{r.current=null}),t),c((()=>{const t=e!==es;t&&!r.current&&(r.current=e),!t&&r.current&&(r.current=null)}),[e]),r.current?za(e,r.current):es}function al(e){return a((()=>e?function(e){const t=e.innerWidth,r=e.innerHeight;return{top:0,left:0,right:t,bottom:r,width:t,height:r}}(e):null),[e])}const sl=[];function ll(e){let{measure:t}=e;const[r,n]=g(null),o=d((e=>{for(const{target:r}of e)if(Da(r)){n((e=>{const n=t(r);return e?{...e,width:n.width,height:n.height}:n}));break}}),[t]),i=tl({callback:o}),s=d((e=>{const r=function(e){if(!e)return null;if(e.children.length>1)return e;const t=e.children[0];return Da(t)?t:e}(e);null==i||i.disconnect(),r&&(null==i||i.observe(r)),n(r?t(r):null)}),[t,i]),[l,c]=Ia(s);return a((()=>({nodeRef:l,rect:r,setRef:c})),[r,l,c])}const cl=[{sensor:Ns,options:{}},{sensor:Bs,options:{}}],dl={current:{}},ul={draggable:{measure:fs},droppable:{measure:fs,strategy:Zs.WhileDragging,frequency:Xs.Optimized},dragOverlay:{measure:us}};class fl extends Map{get(e){var t;return null!=e&&null!=(t=super.get(e))?t:void 0}toArray(){return Array.from(this.values())}getEnabled(){return this.toArray().filter((e=>{let{disabled:t}=e;return!t}))}getNodeFor(e){var t,r;return null!=(t=null==(r=this.get(e))?void 0:r.node.current)?t:void 0}}const hl={activatorEvent:null,active:null,activeNode:null,activeNodeRect:null,collisions:null,containerNodeRect:null,draggableNodes:new Map,droppableRects:new Map,droppableContainers:new fl,over:null,dragOverlay:{nodeRef:{current:null},rect:null,setRef:Xa},scrollableAncestors:[],scrollableAncestorRects:[],measuringConfiguration:ul,measureDroppableContainers:Xa,windowRect:null,measuringScheduled:!1},pl=i({activatorEvent:null,activators:[],active:null,activeNodeRect:null,ariaDescribedById:{draggable:""},dispatch:Xa,draggableNodes:new Map,over:null,measureDroppableContainers:Xa}),gl=i(hl);function ml(){return{draggable:{active:null,initialCoordinates:{x:0,y:0},nodes:new Map,translate:{x:0,y:0}},droppable:{containers:new fl}}}function bl(e,t){switch(t.type){case Za.DragStart:return{...e,draggable:{...e.draggable,initialCoordinates:t.initialCoordinates,active:t.active}};case Za.DragMove:return e.draggable.active?{...e,draggable:{...e.draggable,translate:{x:t.coordinates.x-e.draggable.initialCoordinates.x,y:t.coordinates.y-e.draggable.initialCoordinates.y}}}:e;case Za.DragEnd:case Za.DragCancel:return{...e,draggable:{...e.draggable,active:null,initialCoordinates:{x:0,y:0},translate:{x:0,y:0}}};case Za.RegisterDroppable:{const{element:r}=t,{id:n}=r,o=new fl(e.droppable.containers);return o.set(n,r),{...e,droppable:{...e.droppable,containers:o}}}case Za.SetDroppableDisabled:{const{id:r,key:n,disabled:o}=t,i=e.droppable.containers.get(r);if(!i||n!==i.key)return e;const a=new fl(e.droppable.containers);return a.set(r,{...i,disabled:o}),{...e,droppable:{...e.droppable,containers:a}}}case Za.UnregisterDroppable:{const{id:r,key:n}=t,o=e.droppable.containers.get(r);if(!o||n!==o.key)return e;const i=new fl(e.droppable.containers);return i.delete(r),{...e,droppable:{...e.droppable,containers:i}}}default:return e}}function vl(e){let{disabled:t}=e;const{active:r,activatorEvent:n,draggableNodes:o}=b(pl),i=Ma(n),a=Ma(null==r?void 0:r.id);return c((()=>{if(!t&&!n&&i&&null!=a){if(!Pa(i))return;if(document.activeElement===i.target)return;const e=o.get(a);if(!e)return;const{activatorNode:t,node:r}=e;if(!t.current&&!r.current)return;requestAnimationFrame((()=>{for(const e of[t.current,r.current]){if(!e)continue;const t=Wa(e);if(t){t.focus();break}}}))}}),[n,t,o,a,i]),null}const yl=i({...es,scaleX:1,scaleY:1});var xl;!function(e){e[e.Uninitialized=0]="Uninitialized",e[e.Initializing=1]="Initializing",e[e.Initialized=2]="Initialized"}(xl||(xl={}));const wl=m((function(e){var t,r,n,i;let{id:u,accessibility:f,autoScroll:h=!0,children:p,sensors:m=cl,collisionDetection:b=as,measuring:v,modifiers:y,...x}=e;const w=l(bl,void 0,ml),[$,C]=w,[S,D]=function(){const[e]=g((()=>new Set)),t=d((t=>(e.add(t),()=>e.delete(t))),[e]);return[d((t=>{let{type:r,event:n}=t;e.forEach((e=>{var t;return null==(t=e[r])?void 0:t.call(e,n)}))}),[e]),t]}(),[k,E]=g(xl.Uninitialized),_=k===xl.Initialized,{draggable:{active:O,nodes:F,translate:T},droppable:{containers:I}}=$,A=O?F.get(O):null,j=s({initial:null,translated:null}),B=a((()=>{var e;return null!=O?{id:O,data:null!=(e=null==A?void 0:A.data)?e:dl,rect:j}:null}),[O,A]),R=s(null),[z,P]=g(null),[L,N]=g(null),H=Fa(x,Object.values(x)),W=ja("DndDescribedBy",u),V=a((()=>I.getEnabled()),[I]),Y=function(e){return a((()=>({draggable:{...ul.draggable,...null==e?void 0:e.draggable},droppable:{...ul.droppable,...null==e?void 0:e.droppable},dragOverlay:{...ul.dragOverlay,...null==e?void 0:e.dragOverlay}})),[null==e?void 0:e.draggable,null==e?void 0:e.droppable,null==e?void 0:e.dragOverlay])}(v),{droppableRects:U,measureDroppableContainers:K,measuringScheduled:q}=function(e,t){let{dragging:r,dependencies:n,config:o}=t;const[i,a]=g(null),{frequency:l,measure:u,strategy:f}=o,h=s(e),p=function(){switch(f){case Zs.Always:return!1;case Zs.BeforeDragging:return r;default:return!r}}(),m=Fa(p),b=d((function(e){void 0===e&&(e=[]),m.current||a((t=>null===t?e:t.concat(e.filter((e=>!t.includes(e))))))}),[m]),v=s(null),y=Ta((t=>{if(p&&!r)return Js;if(!t||t===Js||h.current!==e||null!=i){const t=new Map;for(let r of e){if(!r)continue;if(i&&i.length>0&&!i.includes(r.id)&&r.rect.current){t.set(r.id,r.rect.current);continue}const e=r.node.current,n=e?new Es(u(e),e):null;r.rect.current=n,n&&t.set(r.id,n)}return t}return t}),[e,i,r,p,u]);return c((()=>{h.current=e}),[e]),c((()=>{p||b()}),[r,p]),c((()=>{i&&i.length>0&&a(null)}),[JSON.stringify(i)]),c((()=>{p||"number"!=typeof l||null!==v.current||(v.current=setTimeout((()=>{b(),v.current=null}),l))}),[l,p,b,...n]),{droppableRects:y,measureDroppableContainers:b,measuringScheduled:null!=i}}(V,{dragging:_,dependencies:[T.x,T.y],config:Y.droppable}),G=function(e,t){const r=null!==t?e.get(t):void 0,n=r?r.node.current:null;return Ta((e=>{var r;return null===t?null:null!=(r=null!=n?n:e)?r:null}),[n,t])}(F,O),Q=a((()=>L?La(L):null),[L]),Z=function(){const e=!1===(null==z?void 0:z.autoScrollEnabled),t="object"==typeof h?!1===h.enabled:!1===h,r=_&&!e&&!t;if("object"==typeof h)return{...h,enabled:r};return{enabled:r}}(),X=function(e,t){return el(e,t)}(G,Y.draggable.measure);!function(e){let{activeNode:t,measure:r,initialRect:n,config:o=!0}=e;const i=s(!1),{x:a,y:l}="boolean"==typeof o?{x:o,y:o}:o;_a((()=>{if(!a&&!l||!t)return void(i.current=!1);if(i.current||!n)return;const e=null==t?void 0:t.node.current;if(!e||!1===e.isConnected)return;const o=ss(r(e),n);if(a||(o.x=0),l||(o.y=0),i.current=!0,Math.abs(o.x)>0||Math.abs(o.y)>0){const t=ps(e);t&&t.scrollBy({top:o.y,left:o.x})}}),[t,a,l,n,r])}({activeNode:O?F.get(O):null,config:Z.layoutShiftCompensation,initialRect:X,measure:Y.draggable.measure});const J=nl(G,Y.draggable.measure,X),ee=nl(G?G.parentElement:null),te=s({activatorEvent:null,active:null,activeNode:G,collisionRect:null,collisions:null,droppableRects:U,draggableNodes:F,draggingNode:null,draggingNodeRect:null,droppableContainers:I,over:null,scrollableAncestors:[],scrollAdjustedTranslate:null}),re=I.getNodeFor(null==(t=te.current.over)?void 0:t.id),ne=ll({measure:Y.dragOverlay.measure}),oe=null!=(r=ne.nodeRef.current)?r:G,ie=_?null!=(n=ne.rect)?n:J:null,ae=Boolean(ne.nodeRef.current&&ne.rect),se=ss(le=ae?null:J,el(le));var le;const ce=al(oe?Ca(oe):null),de=function(e){const t=s(e),r=Ta((r=>e?r&&r!==ol&&e&&t.current&&e.parentNode===t.current.parentNode?r:hs(e):ol),[e]);return c((()=>{t.current=e}),[e]),r}(_?null!=re?re:G:null),ue=function(e,t){void 0===t&&(t=us);const[r]=e,n=al(r?Ca(r):null),[o,i]=l((function(){return e.length?e.map((e=>xs(e)?n:new Es(t(e),e))):sl}),sl),a=tl({callback:i});return e.length>0&&o===sl&&i(),_a((()=>{e.length?e.forEach((e=>null==a?void 0:a.observe(e))):(null==a||a.disconnect(),i())}),[e]),o}(de),fe=function(e,t){let{transform:r,...n}=t;return null!=e&&e.length?e.reduce(((e,t)=>t({transform:e,...n})),r):r}(y,{transform:{x:T.x-se.x,y:T.y-se.y,scaleX:1,scaleY:1},activatorEvent:L,active:B,activeNodeRect:J,containerNodeRect:ee,draggingNodeRect:ie,over:te.current.over,overlayNodeRect:ne.rect,scrollableAncestors:de,scrollableAncestorRects:ue,windowRect:ce}),he=Q?Ra(Q,T):null,pe=function(e){const[t,r]=g(null),n=s(e),o=d((e=>{const t=gs(e.target);t&&r((e=>e?(e.set(t,vs(t)),new Map(e)):null))}),[]);return c((()=>{const t=n.current;if(e!==t){i(t);const a=e.map((e=>{const t=gs(e);return t?(t.addEventListener("scroll",o,{passive:!0}),[t,vs(t)]):null})).filter((e=>null!=e));r(a.length?new Map(a):null),n.current=e}return()=>{i(e),i(t)};function i(e){e.forEach((e=>{const t=gs(e);null==t||t.removeEventListener("scroll",o)}))}}),[o,e]),a((()=>e.length?t?Array.from(t.values()).reduce(((e,t)=>Ra(e,t)),es):Ds(e):es),[e,t])}(de),ge=il(pe),me=il(pe,[J]),be=Ra(fe,ge),ve=ie?cs(ie,fe):null,ye=B&&ve?b({active:B,collisionRect:ve,droppableRects:U,droppableContainers:V,pointerCoordinates:he}):null,xe=os(ye,"id"),[we,$e]=g(null),Ce=function(e,t,r){return{...e,scaleX:t&&r?t.width/r.width:1,scaleY:t&&r?t.height/r.height:1}}(ae?fe:Ra(fe,me),null!=(i=null==we?void 0:we.rect)?i:null,J),Se=d(((e,t)=>{let{sensor:r,options:n}=t;if(null==R.current)return;const o=F.get(R.current);if(!o)return;const i=e.nativeEvent,a=new r({active:R.current,activeNode:o,event:i,options:n,context:te,onStart(e){const t=R.current;if(null==t)return;const r=F.get(t);if(!r)return;const{onDragStart:n}=H.current,o={active:{id:t,data:r.data,rect:j}};M((()=>{null==n||n(o),E(xl.Initializing),C({type:Za.DragStart,initialCoordinates:e,active:t}),S({type:"onDragStart",event:o})}))},onMove(e){C({type:Za.DragMove,coordinates:e})},onEnd:s(Za.DragEnd),onCancel:s(Za.DragCancel)});function s(e){return async function(){const{active:t,collisions:r,over:n,scrollAdjustedTranslate:o}=te.current;let a=null;if(t&&o){const{cancelDrop:s}=H.current;if(a={activatorEvent:i,active:t,collisions:r,delta:o,over:n},e===Za.DragEnd&&"function"==typeof s){await Promise.resolve(s(a))&&(e=Za.DragCancel)}}R.current=null,M((()=>{C({type:e}),E(xl.Uninitialized),$e(null),P(null),N(null);const t=e===Za.DragEnd?"onDragEnd":"onDragCancel";if(a){const e=H.current[t];null==e||e(a),S({type:t,event:a})}}))}}M((()=>{P(a),N(e.nativeEvent)}))}),[F]),De=d(((e,t)=>(r,n)=>{const o=r.nativeEvent,i=F.get(n);if(null!==R.current||!i||o.dndKit||o.defaultPrevented)return;const a={active:i};!0===e(r,t.options,a)&&(o.dndKit={capturedBy:t.sensor},R.current=n,Se(r,t))}),[F,Se]),ke=function(e,t){return a((()=>e.reduce(((e,r)=>{const{sensor:n}=r;return[...e,...n.activators.map((e=>({eventName:e.eventName,handler:t(e.handler,r)})))]}),[])),[e,t])}(m,De);!function(e){c((()=>{if(!xa)return;const t=e.map((e=>{let{sensor:t}=e;return null==t.setup?void 0:t.setup()}));return()=>{for(const e of t)null==e||e()}}),e.map((e=>{let{sensor:t}=e;return t})))}(m),_a((()=>{J&&k===xl.Initializing&&E(xl.Initialized)}),[J,k]),c((()=>{const{onDragMove:e}=H.current,{active:t,activatorEvent:r,collisions:n,over:o}=te.current;if(!t||!r)return;const i={active:t,activatorEvent:r,collisions:n,delta:{x:be.x,y:be.y},over:o};M((()=>{null==e||e(i),S({type:"onDragMove",event:i})}))}),[be.x,be.y]),c((()=>{const{active:e,activatorEvent:t,collisions:r,droppableContainers:n,scrollAdjustedTranslate:o}=te.current;if(!e||null==R.current||!t||!o)return;const{onDragOver:i}=H.current,a=n.get(xe),s=a&&a.rect.current?{id:a.id,rect:a.rect.current,data:a.data,disabled:a.disabled}:null,l={active:e,activatorEvent:t,collisions:r,delta:{x:o.x,y:o.y},over:s};M((()=>{$e(s),null==i||i(l),S({type:"onDragOver",event:l})}))}),[xe]),_a((()=>{te.current={activatorEvent:L,active:B,activeNode:G,collisionRect:ve,collisions:ye,droppableRects:U,draggableNodes:F,draggingNode:oe,draggingNodeRect:ie,droppableContainers:I,over:we,scrollableAncestors:de,scrollAdjustedTranslate:be},j.current={initial:ie,translated:ve}}),[B,G,ye,ve,F,oe,ie,U,I,we,de,be]),Gs({...Z,delta:T,draggingRect:ve,pointerCoordinates:he,scrollableAncestors:de,scrollableAncestorRects:ue});const Ee=a((()=>({active:B,activeNode:G,activeNodeRect:J,activatorEvent:L,collisions:ye,containerNodeRect:ee,dragOverlay:ne,draggableNodes:F,droppableContainers:I,droppableRects:U,over:we,measureDroppableContainers:K,scrollableAncestors:de,scrollableAncestorRects:ue,measuringConfiguration:Y,measuringScheduled:q,windowRect:ce})),[B,G,J,L,ye,ee,ne,F,I,U,we,K,de,ue,Y,q,ce]),_e=a((()=>({activatorEvent:L,activators:ke,active:B,activeNodeRect:J,ariaDescribedById:{draggable:W},dispatch:C,draggableNodes:F,over:we,measureDroppableContainers:K})),[L,ke,B,J,C,W,F,we,K]);return o.createElement(Ka.Provider,{value:D},o.createElement(pl.Provider,{value:_e},o.createElement(gl.Provider,{value:Ee},o.createElement(yl.Provider,{value:Ce},p)),o.createElement(vl,{disabled:!1===(null==f?void 0:f.restoreFocus)})),o.createElement(Qa,{...f,hiddenTextDescribedById:W}))})),$l=i(null),Cl="button";function Sl(e){let{id:t,data:r,disabled:n=!1,attributes:o}=e;const i=ja("Droppable"),{activators:s,activatorEvent:l,active:c,activeNodeRect:d,ariaDescribedById:u,draggableNodes:f,over:h}=b(pl),{role:p=Cl,roleDescription:g="draggable",tabIndex:m=0}=null!=o?o:{},v=(null==c?void 0:c.id)===t,y=b(v?yl:$l),[x,w]=Ia(),[$,C]=Ia(),S=function(e,t){return a((()=>e.reduce(((e,r)=>{let{eventName:n,handler:o}=r;return e[n]=e=>{o(e,t)},e}),{})),[e,t])}(s,t),D=Fa(r);_a((()=>(f.set(t,{id:t,key:i,node:x,activatorNode:$,data:D}),()=>{const e=f.get(t);e&&e.key===i&&f.delete(t)})),[f,t]);return{active:c,activatorEvent:l,activeNodeRect:d,attributes:a((()=>({role:p,tabIndex:m,"aria-disabled":n,"aria-pressed":!(!v||p!==Cl)||void 0,"aria-roledescription":g,"aria-describedby":u.draggable})),[n,p,m,v,g,u.draggable]),isDragging:v,listeners:n?void 0:S,node:x,over:h,setNodeRef:w,setActivatorNodeRef:C,transform:y}}const Dl={timeout:25};function kl(e,t,r){const n=e.slice();return n.splice(r<0?n.length+r:r,0,n.splice(t,1)[0]),n}function El(e,t){return e.reduce(((e,r,n)=>{const o=t.get(r);return o&&(e[n]=o),e}),Array(e.length))}function _l(e){return null!==e&&e>=0}const Ol=e=>{let{rects:t,activeIndex:r,overIndex:n,index:o}=e;const i=kl(t,n,r),a=t[o],s=i[o];return s&&a?{x:s.left-a.left,y:s.top-a.top,scaleX:s.width/a.width,scaleY:s.height/a.height}:null},Fl={scaleX:1,scaleY:1},Tl=e=>{var t;let{activeIndex:r,activeNodeRect:n,index:o,rects:i,overIndex:a}=e;const s=null!=(t=i[r])?t:n;if(!s)return null;if(o===r){const e=i[a];return e?{x:0,y:r<a?e.top+e.height-(s.top+s.height):e.top-s.top,...Fl}:null}const l=function(e,t,r){const n=e[t],o=e[t-1],i=e[t+1];if(!n)return 0;if(r<t)return o?n.top-(o.top+o.height):i?i.top-(n.top+n.height):0;return i?i.top-(n.top+n.height):o?n.top-(o.top+o.height):0}(i,o,r);return o>r&&o<=a?{x:0,y:-s.height-l,...Fl}:o<r&&o>=a?{x:0,y:s.height+l,...Fl}:{x:0,y:0,...Fl}};const Il="Sortable",Ml=o.createContext({activeIndex:-1,containerId:Il,disableTransforms:!1,items:[],overIndex:-1,useDragOverlay:!1,sortedRects:[],strategy:Ol,disabled:{draggable:!1,droppable:!1}});function Al(e){let{children:t,id:r,items:n,strategy:i=Ol,disabled:l=!1}=e;const{active:d,dragOverlay:u,droppableRects:f,over:h,measureDroppableContainers:p}=b(gl),g=ja(Il,r),m=Boolean(null!==u.rect),v=a((()=>n.map((e=>"object"==typeof e&&"id"in e?e.id:e))),[n]),y=null!=d,x=d?v.indexOf(d.id):-1,w=h?v.indexOf(h.id):-1,$=s(v),C=!function(e,t){if(e===t)return!0;if(e.length!==t.length)return!1;for(let r=0;r<e.length;r++)if(e[r]!==t[r])return!1;return!0}(v,$.current),S=-1!==w&&-1===x||C,D=function(e){return"boolean"==typeof e?{draggable:e,droppable:e}:e}(l);_a((()=>{C&&y&&p(v)}),[C,v,y,p]),c((()=>{$.current=v}),[v]);const k=a((()=>({activeIndex:x,containerId:g,disabled:D,disableTransforms:S,items:v,overIndex:w,useDragOverlay:m,sortedRects:El(v,f),strategy:i})),[x,g,D.draggable,D.droppable,S,v,w,f,m,i]);return o.createElement(Ml.Provider,{value:k},t)}const jl=e=>{let{id:t,items:r,activeIndex:n,overIndex:o}=e;return kl(r,n,o).indexOf(t)},Bl=e=>{let{containerId:t,isSorting:r,wasDragging:n,index:o,items:i,newIndex:a,previousItems:s,previousContainerId:l,transition:c}=e;return!(!c||!n)&&((s===i||o!==a)&&(!!r||a!==o&&t===l))},Rl={duration:200,easing:"ease"},zl="transform",Pl=Na.Transition.toString({property:zl,duration:0,easing:"linear"}),Ll={roleDescription:"sortable"};function Nl(e){let{animateLayoutChanges:t=Bl,attributes:r,disabled:n,data:o,getNewIndex:i=jl,id:l,strategy:u,resizeObserverConfig:f,transition:h=Rl}=e;const{items:p,containerId:m,activeIndex:v,disabled:y,disableTransforms:x,sortedRects:w,overIndex:$,useDragOverlay:C,strategy:S}=b(Ml),D=function(e,t){var r,n;if("boolean"==typeof e)return{draggable:e,droppable:!1};return{draggable:null!=(r=null==e?void 0:e.draggable)?r:t.draggable,droppable:null!=(n=null==e?void 0:e.droppable)?n:t.droppable}}(n,y),k=p.indexOf(l),E=a((()=>({sortable:{containerId:m,index:k,items:p},...o})),[m,o,k,p]),_=a((()=>p.slice(p.indexOf(l))),[p,l]),{rect:O,node:F,isOver:T,setNodeRef:I}=function(e){let{data:t,disabled:r=!1,id:n,resizeObserverConfig:o}=e;const i=ja("Droppable"),{active:a,dispatch:l,over:u,measureDroppableContainers:f}=b(pl),h=s({disabled:r}),p=s(!1),g=s(null),m=s(null),{disabled:v,updateMeasurementsFor:y,timeout:x}={...Dl,...o},w=Fa(null!=y?y:n),$=tl({callback:d((()=>{p.current?(null!=m.current&&clearTimeout(m.current),m.current=setTimeout((()=>{f(Array.isArray(w.current)?w.current:[w.current]),m.current=null}),x)):p.current=!0}),[x]),disabled:v||!a}),C=d(((e,t)=>{$&&(t&&($.unobserve(t),p.current=!1),e&&$.observe(e))}),[$]),[S,D]=Ia(C),k=Fa(t);return c((()=>{$&&S.current&&($.disconnect(),p.current=!1,$.observe(S.current))}),[S,$]),_a((()=>(l({type:Za.RegisterDroppable,element:{id:n,key:i,disabled:r,node:S,rect:g,data:k}}),()=>l({type:Za.UnregisterDroppable,key:i,id:n}))),[n]),c((()=>{r!==h.current.disabled&&(l({type:Za.SetDroppableDisabled,id:n,key:i,disabled:r}),h.current.disabled=r)}),[n,i,r,l]),{active:a,rect:g,isOver:(null==u?void 0:u.id)===n,node:S,over:u,setNodeRef:D}}({id:l,data:E,disabled:D.droppable,resizeObserverConfig:{updateMeasurementsFor:_,...f}}),{active:M,activatorEvent:A,activeNodeRect:j,attributes:B,setNodeRef:R,listeners:z,isDragging:P,over:L,setActivatorNodeRef:N,transform:H}=Sl({id:l,data:E,attributes:{...Ll,...r},disabled:D.draggable}),W=function(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];return a((()=>e=>{t.forEach((t=>t(e)))}),t)}(I,R),V=Boolean(M),Y=V&&!x&&_l(v)&&_l($),U=!C&&P,K=U&&Y?H:null,q=Y?null!=K?K:(null!=u?u:S)({rects:w,activeNodeRect:j,activeIndex:v,overIndex:$,index:k}):null,G=_l(v)&&_l($)?i({id:l,items:p,activeIndex:v,overIndex:$}):k,Q=null==M?void 0:M.id,Z=s({activeId:Q,items:p,newIndex:G,containerId:m}),X=p!==Z.current.items,J=t({active:M,containerId:m,isDragging:P,isSorting:V,id:l,index:k,items:p,newIndex:Z.current.newIndex,previousItems:Z.current.items,previousContainerId:Z.current.containerId,transition:h,wasDragging:null!=Z.current.activeId}),ee=function(e){let{disabled:t,index:r,node:n,rect:o}=e;const[i,a]=g(null),l=s(r);return _a((()=>{if(!t&&r!==l.current&&n.current){const e=o.current;if(e){const t=us(n.current,{ignoreTransform:!0}),r={x:e.left-t.left,y:e.top-t.top,scaleX:e.width/t.width,scaleY:e.height/t.height};(r.x||r.y)&&a(r)}}r!==l.current&&(l.current=r)}),[t,r,n,o]),c((()=>{i&&a(null)}),[i]),i}({disabled:!J,index:k,node:F,rect:O});return c((()=>{V&&Z.current.newIndex!==G&&(Z.current.newIndex=G),m!==Z.current.containerId&&(Z.current.containerId=m),p!==Z.current.items&&(Z.current.items=p)}),[V,G,m,p]),c((()=>{if(Q===Z.current.activeId)return;if(Q&&!Z.current.activeId)return void(Z.current.activeId=Q);const e=setTimeout((()=>{Z.current.activeId=Q}),50);return()=>clearTimeout(e)}),[Q]),{active:M,activeIndex:v,attributes:B,data:E,rect:O,index:k,newIndex:G,items:p,isOver:T,isSorting:V,isDragging:P,listeners:z,node:F,overIndex:$,over:L,setNodeRef:W,setActivatorNodeRef:N,setDroppableNodeRef:I,setDraggableNodeRef:R,transform:null!=ee?ee:q,transition:function(){if(ee||X&&Z.current.newIndex===k)return Pl;if(U&&!Pa(A)||!h)return;if(V||J)return Na.Transition.toString({...h,property:zl});return}()}}function Hl(e){if(!e)return!1;const t=e.data.current;return!!(t&&"sortable"in t&&"object"==typeof t.sortable&&"containerId"in t.sortable&&"items"in t.sortable&&"index"in t.sortable)}const Wl=[Ts.Down,Ts.Right,Ts.Up,Ts.Left],Vl=(e,t)=>{let{context:{active:r,collisionRect:n,droppableRects:o,droppableContainers:i,over:a,scrollableAncestors:s}}=t;if(Wl.includes(e.code)){if(e.preventDefault(),!r||!n)return;const t=[];i.getEnabled().forEach((r=>{if(!r||null!=r&&r.disabled)return;const i=o.get(r.id);if(i)switch(e.code){case Ts.Down:n.top<i.top&&t.push(r);break;case Ts.Up:n.top>i.top&&t.push(r);break;case Ts.Left:n.left>i.left&&t.push(r);break;case Ts.Right:n.left<i.left&&t.push(r)}}));const l=(e=>{let{collisionRect:t,droppableRects:r,droppableContainers:n}=e;const o=ns(t),i=[];for(const e of n){const{id:t}=e,n=r.get(t);if(n){const r=ns(n),a=o.reduce(((e,t,n)=>{return e+(o=r[n],i=t,Math.sqrt(Math.pow(o.x-i.x,2)+Math.pow(o.y-i.y,2)));var o,i}),0),s=Number((a/4).toFixed(4));i.push({id:t,data:{droppableContainer:e,value:s}})}}return i.sort(ts)})({active:r,collisionRect:n,droppableRects:o,droppableContainers:t,pointerCoordinates:null});let c=os(l,"id");if(c===(null==a?void 0:a.id)&&l.length>1&&(c=l[1].id),null!=c){const e=i.get(r.id),t=i.get(c),a=t?o.get(t.id):null,l=null==t?void 0:t.node.current;if(l&&a&&e&&t){const r=hs(l).some(((e,t)=>s[t]!==e)),o=Yl(e,t),i=function(e,t){if(!Hl(e)||!Hl(t))return!1;if(!Yl(e,t))return!1;return e.data.current.sortable.index<t.data.current.sortable.index}(e,t),c=r||!o?{x:0,y:0}:{x:i?n.width-a.width:0,y:i?n.height-a.height:0},d={x:a.left,y:a.top};return c.x&&c.y?d:za(d,c)}}}};function Yl(e,t){return!(!Hl(e)||!Hl(t))&&e.data.current.sortable.containerId===t.data.current.sortable.containerId}var Ul=function(e,t){return Ul=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])},Ul(e,t)};var Kl=function(){return Kl=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var o in t=arguments[r])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e},Kl.apply(this,arguments)};var ql="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};var Gl=function(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)},Ql="object"==typeof ql&&ql&&ql.Object===Object&&ql,Zl="object"==typeof self&&self&&self.Object===Object&&self,Xl=Ql||Zl||Function("return this")(),Jl=Xl,ec=function(){return Jl.Date.now()},tc=/\s/;var rc=function(e){for(var t=e.length;t--&&tc.test(e.charAt(t)););return t},nc=/^\s+/;var oc=function(e){return e?e.slice(0,rc(e)+1).replace(nc,""):e},ic=Xl.Symbol,ac=ic,sc=Object.prototype,lc=sc.hasOwnProperty,cc=sc.toString,dc=ac?ac.toStringTag:void 0;var uc=function(e){var t=lc.call(e,dc),r=e[dc];try{e[dc]=void 0;var n=!0}catch(e){}var o=cc.call(e);return n&&(t?e[dc]=r:delete e[dc]),o},fc=Object.prototype.toString;var hc=uc,pc=function(e){return fc.call(e)},gc=ic?ic.toStringTag:void 0;var mc=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":gc&&gc in Object(e)?hc(e):pc(e)},bc=function(e){return null!=e&&"object"==typeof e};var vc=oc,yc=Gl,xc=function(e){return"symbol"==typeof e||bc(e)&&"[object Symbol]"==mc(e)},wc=/^[-+]0x[0-9a-f]+$/i,$c=/^0b[01]+$/i,Cc=/^0o[0-7]+$/i,Sc=parseInt;var Dc=Gl,kc=ec,Ec=function(e){if("number"==typeof e)return e;if(xc(e))return NaN;if(yc(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=yc(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=vc(e);var r=$c.test(e);return r||Cc.test(e)?Sc(e.slice(2),r?2:8):wc.test(e)?NaN:+e},_c=Math.max,Oc=Math.min;var Fc=function(e,t,r){var n,o,i,a,s,l,c=0,d=!1,u=!1,f=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function h(t){var r=n,i=o;return n=o=void 0,c=t,a=e.apply(i,r)}function p(e){var r=e-l;return void 0===l||r>=t||r<0||u&&e-c>=i}function g(){var e=kc();if(p(e))return m(e);s=setTimeout(g,function(e){var r=t-(e-l);return u?Oc(r,i-(e-c)):r}(e))}function m(e){return s=void 0,f&&n?h(e):(n=o=void 0,a)}function b(){var e=kc(),r=p(e);if(n=arguments,o=this,l=e,r){if(void 0===s)return function(e){return c=e,s=setTimeout(g,t),d?h(e):a}(l);if(u)return clearTimeout(s),s=setTimeout(g,t),h(l)}return void 0===s&&(s=setTimeout(g,t)),a}return t=Ec(t)||0,Dc(r)&&(d=!!r.leading,i=(u="maxWait"in r)?_c(Ec(r.maxWait)||0,t):i,f="trailing"in r?!!r.trailing:f),b.cancel=function(){void 0!==s&&clearTimeout(s),c=0,n=l=o=s=void 0},b.flush=function(){return void 0===s?a:m(kc())},b},Tc=Fc,Ic=Gl;var Mc=function(e,t,r){var n=!0,o=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return Ic(r)&&(n="leading"in r?!!r.leading:n,o="trailing"in r?!!r.trailing:o),Tc(e,t,{leading:n,maxWait:t,trailing:o})},Ac=function(e,t,r,n){switch(t){case"debounce":return Fc(e,r,n);case"throttle":return Mc(e,r,n);default:return e}},jc=function(e){return"function"==typeof e},Bc=function(){return"undefined"==typeof window},Rc=function(e){return e instanceof Element||e instanceof HTMLDocument},zc=function(e,t,r,n){return function(o){var i=o.width,a=o.height;t((function(t){return t.width===i&&t.height===a||t.width===i&&!n||t.height===a&&!r?t:(e&&jc(e)&&e(i,a),{width:i,height:a})}))}};!function(e){function t(t){var r=e.call(this,t)||this;r.cancelHandler=function(){r.resizeHandler&&r.resizeHandler.cancel&&(r.resizeHandler.cancel(),r.resizeHandler=null)},r.attachObserver=function(){var e=r.props,t=e.targetRef,n=e.observerOptions;if(!Bc()){t&&t.current&&(r.targetRef.current=t.current);var o=r.getElement();o&&(r.observableElement&&r.observableElement===o||(r.observableElement=o,r.resizeObserver.observe(o,n)))}},r.getElement=function(){var e=r.props,t=e.querySelector,n=e.targetDomEl;if(Bc())return null;if(t)return document.querySelector(t);if(n&&Rc(n))return n;if(r.targetRef&&Rc(r.targetRef.current))return r.targetRef.current;var o=j(r);if(!o)return null;switch(r.getRenderType()){case"renderProp":case"childFunction":case"child":case"childArray":return o;default:return o.parentElement}},r.createResizeHandler=function(e){var t=r.props,n=t.handleWidth,o=void 0===n||n,i=t.handleHeight,a=void 0===i||i,s=t.onResize;if(o||a){var l=zc(s,r.setState.bind(r),o,a);e.forEach((function(e){var t=e&&e.contentRect||{},n=t.width,o=t.height;!r.skipOnMount&&!Bc()&&l({width:n,height:o}),r.skipOnMount=!1}))}},r.getRenderType=function(){var e=r.props,t=e.render,n=e.children;return jc(t)?"renderProp":jc(n)?"childFunction":v(n)?"child":Array.isArray(n)?"childArray":"parent"};var n=t.skipOnMount,o=t.refreshMode,i=t.refreshRate,a=void 0===i?1e3:i,s=t.refreshOptions;return r.state={width:void 0,height:void 0},r.skipOnMount=n,r.targetRef=y(),r.observableElement=null,Bc()||(r.resizeHandler=Ac(r.createResizeHandler,o,a,s),r.resizeObserver=new window.ResizeObserver(r.resizeHandler)),r}(function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");function r(){this.constructor=e}Ul(e,t),e.prototype=null===t?Object.create(t):(r.prototype=t.prototype,new r)})(t,e),t.prototype.componentDidMount=function(){this.attachObserver()},t.prototype.componentDidUpdate=function(){this.attachObserver()},t.prototype.componentWillUnmount=function(){Bc()||(this.observableElement=null,this.resizeObserver.disconnect(),this.cancelHandler())},t.prototype.render=function(){var e,t=this.props,r=t.render,o=t.children,i=t.nodeType,a=void 0===i?"div":i,s=this.state,l={width:s.width,height:s.height,targetRef:this.targetRef};switch(this.getRenderType()){case"renderProp":return r&&r(l);case"childFunction":return(e=o)(l);case"child":if((e=o).type&&"string"==typeof e.type){var c=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(n=Object.getOwnPropertySymbols(e);o<n.length;o++)t.indexOf(n[o])<0&&Object.prototype.propertyIsEnumerable.call(e,n[o])&&(r[n[o]]=e[n[o]])}return r}(l,["targetRef"]);return x(e,c)}return x(e,l);case"childArray":return(e=o).map((function(e){return!!e&&x(e,l)}));default:return n.createElement(a,null)}}}(w);var Pc=Bc()?c:p;function Lc(e){void 0===e&&(e={});var t=e.skipOnMount,r=void 0!==t&&t,n=e.refreshMode,o=e.refreshRate,i=void 0===o?1e3:o,a=e.refreshOptions,l=e.handleWidth,c=void 0===l||l,d=e.handleHeight,u=void 0===d||d,f=e.targetRef,h=e.observerOptions,p=e.onResize,m=s(r),b=s(null),v=null!=f?f:b,y=s(),x=g({width:void 0,height:void 0}),w=x[0],$=x[1];return Pc((function(){if(!Bc()){var e=zc(p,$,c,u);y.current=Ac((function(t){(c||u)&&t.forEach((function(t){var r=t&&t.contentRect||{},n=r.width,o=r.height;!m.current&&!Bc()&&e({width:n,height:o}),m.current=!1}))}),n,i,a);var t=new window.ResizeObserver(y.current);return v.current&&t.observe(v.current,h),function(){t.disconnect();var e=y.current;e&&e.cancel&&e.cancel()}}}),[n,i,a,c,u,p,h,v.current]),Kl({ref:v},w)}class Nc extends Vs{}Nc.activators=[{eventName:"onMouseDown",handler:({nativeEvent:e})=>Hc(e.target)}];function Hc(e){let t=e;for(;t;){if(t.dataset&&t.dataset.noDnd)return!1;t=t.parentElement}return!0}(class extends Bs{}).activators=[{eventName:"onKeyDown",handler:({nativeEvent:e})=>Hc(e.target)}];var Wc,Vc={exports:{}};Wc=e=>(()=>{var t={"./node_modules/css-mediaquery/index.js":
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
	  \**************************************************************************************/t=>{t.exports=e}},r={};function n(e){var o=r[e];if(void 0!==o)return o.exports;var i=r[e]={exports:{}};return t[e].call(i.exports,i,i.exports,n),i.exports}return n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n("./src/index.ts")})();var Yc=Vc.exports=Wc(o),Uc={exports:{}};Uc.exports=function(){var e=1e3,t=6e4,r=36e5,n="millisecond",o="second",i="minute",a="hour",s="day",l="week",c="month",d="quarter",u="year",f="date",h="Invalid Date",p=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,g=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,m={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(e){var t=["th","st","nd","rd"],r=e%100;return"["+e+(t[(r-20)%10]||t[r]||t[0])+"]"}},b=function(e,t,r){var n=String(e);return!n||n.length>=t?e:""+Array(t+1-n.length).join(r)+e},v={s:b,z:function(e){var t=-e.utcOffset(),r=Math.abs(t),n=Math.floor(r/60),o=r%60;return(t<=0?"+":"-")+b(n,2,"0")+":"+b(o,2,"0")},m:function e(t,r){if(t.date()<r.date())return-e(r,t);var n=12*(r.year()-t.year())+(r.month()-t.month()),o=t.clone().add(n,c),i=r-o<0,a=t.clone().add(n+(i?-1:1),c);return+(-(n+(r-o)/(i?o-a:a-o))||0)},a:function(e){return e<0?Math.ceil(e)||0:Math.floor(e)},p:function(e){return{M:c,y:u,w:l,d:s,D:f,h:a,m:i,s:o,ms:n,Q:d}[e]||String(e||"").toLowerCase().replace(/s$/,"")},u:function(e){return void 0===e}},y="en",x={};x[y]=m;var w="$isDayjsObject",$=function(e){return e instanceof k||!(!e||!e[w])},C=function e(t,r,n){var o;if(!t)return y;if("string"==typeof t){var i=t.toLowerCase();x[i]&&(o=i),r&&(x[i]=r,o=i);var a=t.split("-");if(!o&&a.length>1)return e(a[0])}else{var s=t.name;x[s]=t,o=s}return!n&&o&&(y=o),o||!n&&y},S=function(e,t){if($(e))return e.clone();var r="object"==typeof t?t:{};return r.date=e,r.args=arguments,new k(r)},D=v;D.l=C,D.i=$,D.w=function(e,t){return S(e,{locale:t.$L,utc:t.$u,x:t.$x,$offset:t.$offset})};var k=function(){function m(e){this.$L=C(e.locale,null,!0),this.parse(e),this.$x=this.$x||e.x||{},this[w]=!0}var b=m.prototype;return b.parse=function(e){this.$d=function(e){var t=e.date,r=e.utc;if(null===t)return new Date(NaN);if(D.u(t))return new Date;if(t instanceof Date)return new Date(t);if("string"==typeof t&&!/Z$/i.test(t)){var n=t.match(p);if(n){var o=n[2]-1||0,i=(n[7]||"0").substring(0,3);return r?new Date(Date.UTC(n[1],o,n[3]||1,n[4]||0,n[5]||0,n[6]||0,i)):new Date(n[1],o,n[3]||1,n[4]||0,n[5]||0,n[6]||0,i)}}return new Date(t)}(e),this.init()},b.init=function(){var e=this.$d;this.$y=e.getFullYear(),this.$M=e.getMonth(),this.$D=e.getDate(),this.$W=e.getDay(),this.$H=e.getHours(),this.$m=e.getMinutes(),this.$s=e.getSeconds(),this.$ms=e.getMilliseconds()},b.$utils=function(){return D},b.isValid=function(){return!(this.$d.toString()===h)},b.isSame=function(e,t){var r=S(e);return this.startOf(t)<=r&&r<=this.endOf(t)},b.isAfter=function(e,t){return S(e)<this.startOf(t)},b.isBefore=function(e,t){return this.endOf(t)<S(e)},b.$g=function(e,t,r){return D.u(e)?this[t]:this.set(r,e)},b.unix=function(){return Math.floor(this.valueOf()/1e3)},b.valueOf=function(){return this.$d.getTime()},b.startOf=function(e,t){var r=this,n=!!D.u(t)||t,d=D.p(e),h=function(e,t){var o=D.w(r.$u?Date.UTC(r.$y,t,e):new Date(r.$y,t,e),r);return n?o:o.endOf(s)},p=function(e,t){return D.w(r.toDate()[e].apply(r.toDate("s"),(n?[0,0,0,0]:[23,59,59,999]).slice(t)),r)},g=this.$W,m=this.$M,b=this.$D,v="set"+(this.$u?"UTC":"");switch(d){case u:return n?h(1,0):h(31,11);case c:return n?h(1,m):h(0,m+1);case l:var y=this.$locale().weekStart||0,x=(g<y?g+7:g)-y;return h(n?b-x:b+(6-x),m);case s:case f:return p(v+"Hours",0);case a:return p(v+"Minutes",1);case i:return p(v+"Seconds",2);case o:return p(v+"Milliseconds",3);default:return this.clone()}},b.endOf=function(e){return this.startOf(e,!1)},b.$set=function(e,t){var r,l=D.p(e),d="set"+(this.$u?"UTC":""),h=(r={},r[s]=d+"Date",r[f]=d+"Date",r[c]=d+"Month",r[u]=d+"FullYear",r[a]=d+"Hours",r[i]=d+"Minutes",r[o]=d+"Seconds",r[n]=d+"Milliseconds",r)[l],p=l===s?this.$D+(t-this.$W):t;if(l===c||l===u){var g=this.clone().set(f,1);g.$d[h](p),g.init(),this.$d=g.set(f,Math.min(this.$D,g.daysInMonth())).$d}else h&&this.$d[h](p);return this.init(),this},b.set=function(e,t){return this.clone().$set(e,t)},b.get=function(e){return this[D.p(e)]()},b.add=function(n,d){var f,h=this;n=Number(n);var p=D.p(d),g=function(e){var t=S(h);return D.w(t.date(t.date()+Math.round(e*n)),h)};if(p===c)return this.set(c,this.$M+n);if(p===u)return this.set(u,this.$y+n);if(p===s)return g(1);if(p===l)return g(7);var m=(f={},f[i]=t,f[a]=r,f[o]=e,f)[p]||1,b=this.$d.getTime()+n*m;return D.w(b,this)},b.subtract=function(e,t){return this.add(-1*e,t)},b.format=function(e){var t=this,r=this.$locale();if(!this.isValid())return r.invalidDate||h;var n=e||"YYYY-MM-DDTHH:mm:ssZ",o=D.z(this),i=this.$H,a=this.$m,s=this.$M,l=r.weekdays,c=r.months,d=r.meridiem,u=function(e,r,o,i){return e&&(e[r]||e(t,n))||o[r].slice(0,i)},f=function(e){return D.s(i%12||12,e,"0")},p=d||function(e,t,r){var n=e<12?"AM":"PM";return r?n.toLowerCase():n};return n.replace(g,(function(e,n){return n||function(e){switch(e){case"YY":return String(t.$y).slice(-2);case"YYYY":return D.s(t.$y,4,"0");case"M":return s+1;case"MM":return D.s(s+1,2,"0");case"MMM":return u(r.monthsShort,s,c,3);case"MMMM":return u(c,s);case"D":return t.$D;case"DD":return D.s(t.$D,2,"0");case"d":return String(t.$W);case"dd":return u(r.weekdaysMin,t.$W,l,2);case"ddd":return u(r.weekdaysShort,t.$W,l,3);case"dddd":return l[t.$W];case"H":return String(i);case"HH":return D.s(i,2,"0");case"h":return f(1);case"hh":return f(2);case"a":return p(i,a,!0);case"A":return p(i,a,!1);case"m":return String(a);case"mm":return D.s(a,2,"0");case"s":return String(t.$s);case"ss":return D.s(t.$s,2,"0");case"SSS":return D.s(t.$ms,3,"0");case"Z":return o}return null}(e)||o.replace(":","")}))},b.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},b.diff=function(n,f,h){var p,g=this,m=D.p(f),b=S(n),v=(b.utcOffset()-this.utcOffset())*t,y=this-b,x=function(){return D.m(g,b)};switch(m){case u:p=x()/12;break;case c:p=x();break;case d:p=x()/3;break;case l:p=(y-v)/6048e5;break;case s:p=(y-v)/864e5;break;case a:p=y/r;break;case i:p=y/t;break;case o:p=y/e;break;default:p=y}return h?p:D.a(p)},b.daysInMonth=function(){return this.endOf(c).$D},b.$locale=function(){return x[this.$L]},b.locale=function(e,t){if(!e)return this.$L;var r=this.clone(),n=C(e,t,!0);return n&&(r.$L=n),r},b.clone=function(){return D.w(this.$d,this)},b.toDate=function(){return new Date(this.valueOf())},b.toJSON=function(){return this.isValid()?this.toISOString():null},b.toISOString=function(){return this.$d.toISOString()},b.toString=function(){return this.$d.toUTCString()},m}(),E=k.prototype;return S.prototype=E,[["$ms",n],["$s",o],["$m",i],["$H",a],["$W",s],["$M",c],["$y",u],["$D",f]].forEach((function(e){E[e[1]]=function(t){return this.$g(t,e[0],e[1])}})),S.extend=function(e,t){return e.$i||(e(t,k,S),e.$i=!0),S},S.locale=C,S.isDayjs=$,S.unix=function(e){return S(1e3*e)},S.en=x[y],S.Ls=x,S.p={},S}();var Kc=Be(Uc.exports),qc={exports:{}};qc.exports=function(){var e={LTS:"h:mm:ss A",LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D, YYYY",LLL:"MMMM D, YYYY h:mm A",LLLL:"dddd, MMMM D, YYYY h:mm A"},t=/(\[[^[]*\])|([-_:/.,()\s]+)|(A|a|YYYY|YY?|MM?M?M?|Do|DD?|hh?|HH?|mm?|ss?|S{1,3}|z|ZZ?)/g,r=/\d\d/,n=/\d\d?/,o=/\d*[^-_:/,()\s\d]+/,i={},a=function(e){return(e=+e)+(e>68?1900:2e3)},s=function(e){return function(t){this[e]=+t}},l=[/[+-]\d\d:?(\d\d)?|Z/,function(e){(this.zone||(this.zone={})).offset=function(e){if(!e)return 0;if("Z"===e)return 0;var t=e.match(/([+-]|\d\d)/g),r=60*t[1]+(+t[2]||0);return 0===r?0:"+"===t[0]?-r:r}(e)}],c=function(e){var t=i[e];return t&&(t.indexOf?t:t.s.concat(t.f))},d=function(e,t){var r,n=i.meridiem;if(n){for(var o=1;o<=24;o+=1)if(e.indexOf(n(o,0,t))>-1){r=o>12;break}}else r=e===(t?"pm":"PM");return r},u={A:[o,function(e){this.afternoon=d(e,!1)}],a:[o,function(e){this.afternoon=d(e,!0)}],S:[/\d/,function(e){this.milliseconds=100*+e}],SS:[r,function(e){this.milliseconds=10*+e}],SSS:[/\d{3}/,function(e){this.milliseconds=+e}],s:[n,s("seconds")],ss:[n,s("seconds")],m:[n,s("minutes")],mm:[n,s("minutes")],H:[n,s("hours")],h:[n,s("hours")],HH:[n,s("hours")],hh:[n,s("hours")],D:[n,s("day")],DD:[r,s("day")],Do:[o,function(e){var t=i.ordinal,r=e.match(/\d+/);if(this.day=r[0],t)for(var n=1;n<=31;n+=1)t(n).replace(/\[|\]/g,"")===e&&(this.day=n)}],M:[n,s("month")],MM:[r,s("month")],MMM:[o,function(e){var t=c("months"),r=(c("monthsShort")||t.map((function(e){return e.slice(0,3)}))).indexOf(e)+1;if(r<1)throw new Error;this.month=r%12||r}],MMMM:[o,function(e){var t=c("months").indexOf(e)+1;if(t<1)throw new Error;this.month=t%12||t}],Y:[/[+-]?\d+/,s("year")],YY:[r,function(e){this.year=a(e)}],YYYY:[/\d{4}/,s("year")],Z:l,ZZ:l};function f(r){var n,o;n=r,o=i&&i.formats;for(var a=(r=n.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g,(function(t,r,n){var i=n&&n.toUpperCase();return r||o[n]||e[n]||o[i].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g,(function(e,t,r){return t||r.slice(1)}))}))).match(t),s=a.length,l=0;l<s;l+=1){var c=a[l],d=u[c],f=d&&d[0],h=d&&d[1];a[l]=h?{regex:f,parser:h}:c.replace(/^\[|\]$/g,"")}return function(e){for(var t={},r=0,n=0;r<s;r+=1){var o=a[r];if("string"==typeof o)n+=o.length;else{var i=o.regex,l=o.parser,c=e.slice(n),d=i.exec(c)[0];l.call(t,d),e=e.replace(d,"")}}return function(e){var t=e.afternoon;if(void 0!==t){var r=e.hours;t?r<12&&(e.hours+=12):12===r&&(e.hours=0),delete e.afternoon}}(t),t}}return function(e,t,r){r.p.customParseFormat=!0,e&&e.parseTwoDigitYear&&(a=e.parseTwoDigitYear);var n=t.prototype,o=n.parse;n.parse=function(e){var t=e.date,n=e.utc,a=e.args;this.$u=n;var s=a[1];if("string"==typeof s){var l=!0===a[2],c=!0===a[3],d=l||c,u=a[2];c&&(u=a[2]),i=this.$locale(),!l&&u&&(i=r.Ls[u]),this.$d=function(e,t,r){try{if(["x","X"].indexOf(t)>-1)return new Date(("X"===t?1e3:1)*e);var n=f(t)(e),o=n.year,i=n.month,a=n.day,s=n.hours,l=n.minutes,c=n.seconds,d=n.milliseconds,u=n.zone,h=new Date,p=a||(o||i?1:h.getDate()),g=o||h.getFullYear(),m=0;o&&!i||(m=i>0?i-1:h.getMonth());var b=s||0,v=l||0,y=c||0,x=d||0;return u?new Date(Date.UTC(g,m,p,b,v,y,x+60*u.offset*1e3)):r?new Date(Date.UTC(g,m,p,b,v,y,x)):new Date(g,m,p,b,v,y,x)}catch(e){return new Date("")}}(t,s,n),this.init(),u&&!0!==u&&(this.$L=this.locale(u).$L),d&&t!=this.format(s)&&(this.$d=new Date("")),i={}}else if(s instanceof Array)for(var h=s.length,p=1;p<=h;p+=1){a[1]=s[p-1];var g=r.apply(this,a);if(g.isValid()){this.$d=g.$d,this.$L=g.$L,this.init();break}p===h&&(this.$d=new Date(""))}else o.call(this,e)}}}();var Gc=Be(qc.exports),Qc={exports:{}};Qc.exports=function(e,t,r){t.prototype.isBetween=function(e,t,n,o){var i=r(e),a=r(t),s="("===(o=o||"()")[0],l=")"===o[1];return(s?this.isAfter(i,n):!this.isBefore(i,n))&&(l?this.isBefore(a,n):!this.isAfter(a,n))||(s?this.isBefore(i,n):!this.isAfter(i,n))&&(l?this.isAfter(a,n):!this.isBefore(a,n))}};var Zc=Be(Qc.exports),Xc={exports:{}};Xc.exports=function(e,t){t.prototype.isSameOrAfter=function(e,t){return this.isSame(e,t)||this.isAfter(e,t)}};var Jc=Be(Xc.exports),ed={exports:{}};ed.exports=function(e,t){t.prototype.isSameOrBefore=function(e,t){return this.isSame(e,t)||this.isBefore(e,t)}};var td,rd,nd=Be(ed.exports),od={exports:{}};od.exports=(td={year:0,month:1,day:2,hour:3,minute:4,second:5},rd={},function(e,t,r){var n,o=function(e,t,r){void 0===r&&(r={});var n=new Date(e),o=function(e,t){void 0===t&&(t={});var r=t.timeZoneName||"short",n=e+"|"+r,o=rd[n];return o||(o=new Intl.DateTimeFormat("en-US",{hour12:!1,timeZone:e,year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit",timeZoneName:r}),rd[n]=o),o}(t,r);return o.formatToParts(n)},i=function(e,t){for(var n=o(e,t),i=[],a=0;a<n.length;a+=1){var s=n[a],l=s.type,c=s.value,d=td[l];d>=0&&(i[d]=parseInt(c,10))}var u=i[3],f=24===u?0:u,h=i[0]+"-"+i[1]+"-"+i[2]+" "+f+":"+i[4]+":"+i[5]+":000",p=+e;return(r.utc(h).valueOf()-(p-=p%1e3))/6e4},a=t.prototype;a.tz=function(e,t){void 0===e&&(e=n);var o=this.utcOffset(),i=this.toDate(),a=i.toLocaleString("en-US",{timeZone:e}),s=Math.round((i-new Date(a))/1e3/60),l=r(a,{locale:this.$L}).$set("millisecond",this.$ms).utcOffset(15*-Math.round(i.getTimezoneOffset()/15)-s,!0);if(t){var c=l.utcOffset();l=l.add(o-c,"minute")}return l.$x.$timezone=e,l},a.offsetName=function(e){var t=this.$x.$timezone||r.tz.guess(),n=o(this.valueOf(),t,{timeZoneName:e}).find((function(e){return"timezonename"===e.type.toLowerCase()}));return n&&n.value};var s=a.startOf;a.startOf=function(e,t){if(!this.$x||!this.$x.$timezone)return s.call(this,e,t);var n=r(this.format("YYYY-MM-DD HH:mm:ss:SSS"),{locale:this.$L});return s.call(n,e,t).tz(this.$x.$timezone,!0)},r.tz=function(e,t,o){var a=o&&t,s=o||t||n,l=i(+r(),s);if("string"!=typeof e)return r(e).tz(s);var c=function(e,t,r){var n=e-60*t*1e3,o=i(n,r);if(t===o)return[n,t];var a=i(n-=60*(o-t)*1e3,r);return o===a?[n,o]:[e-60*Math.min(o,a)*1e3,Math.max(o,a)]}(r.utc(e,a).valueOf(),l,s),d=c[0],u=c[1],f=r(d).utcOffset(u);return f.$x.$timezone=s,f},r.tz.guess=function(){return Intl.DateTimeFormat().resolvedOptions().timeZone},r.tz.setDefault=function(e){n=e}});var id,ad=Be(od.exports);Kc.extend(Zc),Kc.extend(nd),Kc.extend(Jc),Kc.extend(Gc),Kc.extend(ad),function(e){e.generateDays=e=>{const t=e.startOf("month"),r=Kc(t).startOf("week");return sd(r).map((e=>ld(e)))},e.generateDaysForCurrentWeek=e=>{const t=e.startOf("week");return ld(t)},e.generateMonths=e=>{const t=[];for(let r=0;r<12;r++){const n=e.month(r);t.push(Kc(n))}return t},e.generateDecadeOfYears=e=>{const t=e.year(),r=10*Math.floor(t/10),n=e.year(r),o=[n.subtract(1,"year"),n];for(let e=1;e<11;e++)o.push(n.add(e,"year"));return o},e.getStartEndDecade=e=>{const t=10*Math.floor(+e.format("YYYY")/10);return{beginDecade:t,endDecade:+Kc(`${t+9}-01-01`).format("YYYY")}},e.convertTo12HourFormat=e=>{const t=Kc(e,"HH:mm");return t.isValid()?t.format("h:mm a"):""},e.isWithinRange=(e,t,r,n="day")=>!t&&!r||(t&&r?e.isBetween(t,r,n,"[]"):t?e.isSameOrAfter(t,n):e.isSameOrBefore(r,n)),e.isPreviousMonthWithinRange=(t,r)=>e.isWithinRange(t.subtract(1,"month"),r,void 0,"month"),e.isPreviousYearWithinRange=(t,r)=>e.isWithinRange(t.subtract(1,"year"),r,void 0,"year"),e.isPreviousDecadeWithinRange=(t,r)=>{const{beginDecade:n}=e.getStartEndDecade(t);return e.isWithinRange(t.year(n).subtract(1,"year"),r,void 0,"year")},e.isNextMonthWithinRange=(t,r)=>e.isWithinRange(t.add(1,"month"),void 0,r,"month"),e.isNextYearWithinRange=(t,r)=>e.isWithinRange(t.add(1,"year"),void 0,r,"year"),e.isNextDecadeWithinRange=(t,r)=>{const{endDecade:n}=e.getStartEndDecade(t);return e.isWithinRange(t.year(n).add(1,"year"),void 0,r,"year")},e.getWeekStartEnd=e=>({start:e.startOf("week").format("YYYY-MM-DD"),end:e.endOf("week").format("YYYY-MM-DD")}),e.getFixedRangeStartEnd=(e,t)=>({start:e.format("YYYY-MM-DD"),end:e.add(t-1,"day").format("YYYY-MM-DD")}),e.isDisabledDay=(t,r,n,o)=>{const i=e.isWithinRange(t,n?Kc(n):void 0,o?Kc(o):void 0),a=r&&r.includes(t.format("YYYY-MM-DD"));return!i||!!a}}(id||(id={}));const sd=e=>{const t=[e];for(let r=1;r<6;r++){const n=e.add(r,"week");t.push(n)}return t},ld=e=>{const t=[];for(let r=0;r<7;r++){const n=e.add(r,"day");t.push(n)}return t},cd=[1,3,5,7,8,10,12],dd=[4,6,9,11];var ud,fd,hd,pd;!function(e){e.clampDay=(t,r,n)=>{const o=parseInt(t),i=parseInt(r),a=parseInt(n);return 0==o?"1":cd.includes(i)?Math.min(o,31).toString():dd.includes(i)?Math.min(o,30).toString():2===i?e.isLeapYear(a)?Math.min(o,29).toString():Math.min(o,28).toString():t},e.clampMonth=e=>{const t=parseInt(e);return 0==t?"1":t>12?"12":e},e.isLeapYear=e=>e%4==0&&e%100!=0||e%400==0,e.getTimeDiffInMinutes=(e,t,r="HH:mm")=>{const n=Kc(e,r);return Kc(t,r).diff(n,"minute")},e.toDayjs=e=>e?Kc(e):Kc(),e.addMinutesToTime=(e,t,r="HH:mm")=>Kc(e,r).add(t,"minutes").format(r),e.isSame=(e,t,r="day")=>Kc(e).isSame(Kc(t),r)}(ud||(ud={})),function(e){e.isDateDisabled=(e,t)=>{const{disabledDates:r,minDate:n,maxDate:o}=t;return!!(e&&r&&r.length&&r.includes(e))||(!(!n||!Kc(e).isBefore(n,"day"))||!(!o||!Kc(e).isAfter(o,"day")))},e.sanitizeInput=e=>{if(e){if(Kc(e).isValid())return e}return""}}(fd||(fd={})),function(e){e.generate=()=>Math.random().toString(36).substring(2,9)}(hd||(hd={})),function(e){e.transformWithSpaces=(e,t)=>{const r="(.{"+t+"})";return e.replace(/[^\dA-Z]/gi,"").replace(new RegExp(r,"g"),"$1 ").trim()},e.padValue=(e,t)=>{if("0"===e)return t?e:e.padStart(2,"0");if(""===e)return e;return parseInt(e).toString().padStart(2,"0")},e.shouldTruncateToTwoLines=(e,t)=>{const r=Math.floor(t/9);return e.length>=2*r||1===e.split(" ").length&&e.length>r},e.truncateOneLine=(e,t,r,n,o=8)=>{let i=0;t>r&&(i=Math.floor((t-r)/o));const a=n+i;if(a<e.length){const t=Math.floor(a/2);return e.substring(0,t)+" ... "+e.substring(e.length-t,e.length)}return e},e.truncateTwoLines=(e,t,r,n=1.2)=>{const o=Math.floor(2*t/(.6*r))*(2/n);if(e.length<=o)return e;const i=Math.floor(.6*o),a=Math.floor(.2*o);return`${e.substring(0,i)}...${e.substring(e.length-a)}`},e.getTextWidth=(t,r)=>{if("undefined"==typeof document)return 0;const n=(e.getTextWidth.canvas||(e.getTextWidth.canvas=document.createElement("canvas"))).getContext("2d");n.font=r;return n.measureText(t).width},e.maskValue=(e,r)=>{if(!e)return e;const{maskRange:n,unmaskRange:o,maskChar:i="•",maskRegex:a,maskTransformer:s}=r;if(s)return s(e);if(a)return e.replace(a,i);if(n){const{startIndex:r,endIndex:o}=t(n[0],n[1]);return e.substring(0,r)+i.repeat(e.substring(r,o+1).length)+e.substring(o+1)}if(o){const{startIndex:r,endIndex:n}=t(o[0],o[1]);return i.repeat(e.substring(0,r).length)+e.substring(r,n+1)+i.repeat(e.substring(n+1).length)}return e};const t=(e,t)=>e<t?{startIndex:e,endIndex:t}:{startIndex:t,endIndex:e},r=new Intl.PluralRules("en",{type:"ordinal"}),n=new Map([["one","st"],["two","nd"],["few","rd"],["other","th"]]);e.formatOrdinal=e=>{const t=r.select(e);return`${e}${n.get(t)}`}}(pd||(pd={}));function gd(e){const t=s(null);return p((()=>{t.current=e}),[e]),d(((...e)=>{var r;return null===(r=t.current)||void 0===r?void 0:r.call(t,...e)}),[])}const md=(e,t,r="window",n)=>{const o=s();c((()=>{o.current=t}),[t]),c((()=>{let t;switch(r){case"window":t=window;break;case"document":t=document;break;default:t=r}if(!t||!t.addEventListener)return;const i=e=>{var t;return null===(t=o.current)||void 0===t?void 0:t.call(o,e)};return t.addEventListener(e,i,n),()=>{null==t||t.removeEventListener(e,i,n)}}),[e,r])},bd=()=>{const[e,t]=g(!1);return c((()=>{t(!0)}),[]),e};function vd({ref:e,formatter:t}){return()=>{var r;const n=e.current;if(!n)return;const o=n.value,i=t(o),a=null!==(r=n.selectionEnd)&&void 0!==r?r:0,s=o.substring(0,a),l=t(s),c=s.length-l.length,d=Math.max(0,a-c);return{nextValue:i,updateCaretPosition:()=>{n.value=i,n.setSelectionRange(d,d)}}}}const yd=e=>{const t=(e=>{const t=s(e),r=s();return c((()=>{r.current=t.current,t.current=e}),[e]),r.current})(e);return t!==e},xd=e=>{const[t,r]=g(e),n=s(e);return[t,d((e=>{n.current=e,r(e)}),[]),n]},wd=E.div`
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
`,$d=E.div`
    position: absolute;
    left: 0;
    top: 0;
    background-color: ${e=>e.$stacked?Yi["overlay-subtle"]:Yi["overlay-strong"]};
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
            `),t}}
`;var Cd;!function(e){e.Ready="overlay-context-ready",e.Change="overlay-context-change"}(Cd||(Cd={}));const Sd=()=>{const[e,t]=g(void 0),r=R();return c((()=>{if(!r)return void t(void 0);const e=e=>{t(e.zIndex)};return r.events.on(Cd.Change,e),r.events.emit(Cd.Ready),()=>r.events.off(Cd.Change,e)}),[r]),e},Dd=({show:e=!1,rootId:r,onOverlayClick:n,children:i,backgroundOpacity:a,backgroundBlur:l=!0,disableTransition:d=!1,enableOverlayClick:u=!1,zIndex:f,id:h})=>{const[p,m]=g(null),[b,v]=g(),[y]=g((()=>hd.generate())),x=P(),w=s(),$=s(null),C=i&&o.cloneElement(i,{ref:$}),S=h?`lifesg-ds-overlay-root-${h}`:"lifesg-ds-overlay-root",D=null!=f?f:b?99999:99998;(e=>{const t=R();c((()=>{if(!t)return;const r={zIndex:e};t.events.emit(Cd.Change,r)}),[t,e]),c((()=>{if(!t)return;const r=()=>{const r={zIndex:e};t.events.emit(Cd.Change,r)};return null==t||t.events.on(Cd.Ready,r),()=>null==t?void 0:t.events.off(Cd.Ready,r)}),[t,e])})(D),c((()=>(O(),m(E()),()=>{A(),T().length<1&&F("remove")})),[]),c((()=>{if(e){const e=_();k(e),M();const t=setTimeout((()=>{F("add")}),200);return()=>clearTimeout(t)}{A();const e=setTimeout((()=>{T().length<1&&F("remove")}),200);return()=>clearTimeout(e)}}),[e]);const k=e=>{w.current=e,v(e)},E=()=>document&&r?document.getElementById(r):document?document.body:null,_=()=>T().length>0,O=()=>{if(!document.getElementById(Ed)){const e=document.createElement("style");e.id=Ed;const t=document.documentElement.clientWidth,r=window.innerWidth-t;e.innerHTML=`\n\t\t\t\t.${_d} {\n\t\t\t\t\toverflow: hidden;\n\t\t\t\t\tpadding-right: ${r}px !important;\n\t\t\t\t\t-ms-overflow-style: none;\n\t\t\t\t\tscrollbar-width: none;\n\t\t\t\t}\n\n\t\t\t\t.${_d}::-webkit-scrollbar {\n\t\t\t\t\tdisplay: none;\n\t\t\t\t}\n\t\t\t`,document.body.appendChild(e)}},F=e=>{const t=document.body.classList.contains(_d);"add"!==e||t?"remove"===e&&t&&document.body.classList.remove(_d):document.body.classList.add(_d)},T=()=>{const e=document.body.dataset.lifesgDsOverlayOrder;return e?e.split(","):[]},M=()=>{const e=T();document.body.dataset.lifesgDsOverlayOrder=[...e,y].join(",")},A=()=>{const e=T();document.body.dataset.lifesgDsOverlayOrder=e.filter((e=>e!==y)).join(",")},j=e=>{var t;const r=null===(t=$.current)||void 0===t?void 0:t.firstChild;r&&r.contains(e.target)||n&&u&&(e.preventDefault(),n())};return p?I.createPortal(t(wd,{id:S,"data-testid":S,$show:e,$zIndex:D,children:i&&t(L,{id:x,children:t($d,{"data-testid":"overlay-wrapper",$show:e,$stacked:b,$backgroundBlur:l,$disableTransition:d,onClick:j,children:C})})}),p):null},kd=e=>t(z,{children:t(Dd,Object.assign({},e))}),Ed="lifesg-ds-overlay-stylesheet",_d="lifesg-ds-overlay-open",Od=E.div`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 100%;
    overflow: hidden;
    ${e=>{return t=e.show,r=e.animationFrom||"bottom",t?`\n\t\t\t${r}: 0;\n\t\t\topacity: 1;\n\t\t\ttransition: all 300ms cubic-bezier(0.21, 0.79, 0.53, 1);\n\t\t\ttransition-delay: 200ms;\n\t\t`:`\n\t\t${r}: -3%;\n\t\topacity: 0;\n\t\ttransition: all 300ms cubic-bezier(0.4, 0.34, 0.38, 1);\n\t`;var t,r}}

    ${Xi.MaxWidth.sm} {
        height: calc(
            ${e=>e.verticalHeight?`${e.verticalHeight}px`:"1vh"} * 100
        );

        top: ${e=>e.offsetTop||0}px;
    }
`,Fd=e=>{var{id:r="modal",show:n,animationFrom:o="bottom",children:i,enableOverlayClick:a=!0,rootComponentId:s,zIndex:l,onOverlayClick:d,dismissKeyboardOnShow:u=!0}=e,f=lt(e,["id","show","animationFrom","children","enableOverlayClick","rootComponentId","zIndex","onOverlayClick","dismissKeyboardOnShow"]);const[h,p]=g(),[m,b]=g();c((()=>window.visualViewport?(y(),window.visualViewport.addEventListener("resize",y),()=>{var e;null===(e=window.visualViewport)||void 0===e||e.removeEventListener("resize",y)}):(v(),window.addEventListener("resize",v),()=>{window.removeEventListener("resize",v)})),[]),c((()=>{var e,t;n&&u&&(null===(t=null===(e=document.activeElement)||void 0===e?void 0:e.blur)||void 0===t||t.call(e))}),[n]);const v=()=>{const e=.01*window.innerHeight;p(e)},y=()=>{if(window.visualViewport){const e=.01*window.visualViewport.height;p(e),b(window.visualViewport.offsetTop)}};return t(kd,{"data-testid":`${r}-overlay`,show:n,enableOverlayClick:a,onOverlayClick:d,id:r,rootId:s,zIndex:l,children:t(Od,Object.assign({show:n,animationFrom:o,"data-testid":r,verticalHeight:h,offsetTop:m},f,{children:i}))})},Td=E.div`
    border-radius: ${Qi.md};
    background: ${Yi.bg};
    padding: ${Gi["spacing-16"]} ${Gi["spacing-32"]};
    box-shadow: 0 2px 8px rgba(104, 104, 104, 0.25);
`,Id=E.button`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: ${Gi["spacing-24"]};
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
                background-color: ${Yi["bg-hover-neutral"]};
            `}
    }
`,Md=o.forwardRef(((e,r)=>{var{children:n,focusHighlight:o=!0,focusOutline:i="none",type:a="button"}=e,s=lt(e,["children","focusHighlight","focusOutline","type"]);return t(Id,Object.assign({ref:r,$outline:i,$highlight:o,type:a},s,{children:n}))})),Ad=E.div`
    position: relative;
    display: flex;
    flex-direction: column;
    width: 40rem;
    max-height: 70%;
    background: ${Yi.bg};
    box-shadow: 0 0 10px 2px rgba(0, 0, 0, 0.45);
    border-radius: 0.75rem;
    overflow: hidden;

    ${Xi.MaxWidth.md} {
        width: 90%;
        max-height: 70%;
    }
`,jd=E(Md)`
    position: absolute;
    top: var(--close-button-top-inset, ${Gi["spacing-16"]});
    right: var(--close-button-right-inset, ${Gi["spacing-16"]});
    padding: 0;
    color: ${Yi.icon};

    svg {
        height: 2rem;
        width: 2rem;
    }

    ${Xi.MaxWidth.sm} {
        right: var(--close-button-right-inset, ${Gi["spacing-20"]});
    }
`,Bd=r=>{var{id:n="modal-box",children:o,onClose:i,showCloseButton:a=!0}=r,s=lt(r,["id","children","onClose","showCloseButton"]);return e(Ad,Object.assign({"data-testid":n},s,{onClick:e=>{e.stopPropagation()},children:[a&&t(jd,{onClick:i,"data-testid":"close-button",focusHighlight:!1,focusOutline:"browser",children:t(te,{})}),o]}))},Rd=e=>{const{textSize:t}=e||{};return _`
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
            color: ${Yi.hyperlink};
            text-decoration: none;

            svg {
                color: ${Yi["icon-primary"]};
                height: 1lh;
                width: 1em;
                margin-left: 0.4rem;
                vertical-align: middle;
            }

            :hover,
            :active,
            :visited,
            :focus {
                color: ${Yi["hyperlink-hover"]};

                svg {
                    color: ${Yi["icon-hover"]};
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
    `},zd=E.div`
    max-width: 30rem;
    padding: 0 1rem;
    pointer-events: auto;
`,Pd=E((e=>{var{children:r}=e,n=lt(e,["children"]);const o=n["data-testid"]||"card";return t(Td,Object.assign({},n,{"data-testid":o,children:"string"==typeof r?t(fa.BodyBL,{children:r}):r}))}))`
    color: ${Yi.text};
    ${Rd({textSize:"body-md"})}

    ${Xi.MaxWidth.sm} {
        display: none;
    }
`,Ld=E(Bd)`
    padding: 3.5rem 1.25rem 2.5rem;
`,Nd=E.div`
    overflow-y: scroll;

    ::-webkit-scrollbar {
        display: none; /* Chrome/Safari/Webkit */
    }

    color: ${Yi.text};
    ${Rd({textSize:"body-md"})}
`,Hd=n=>{var{children:o,visible:i,onMobileClose:a}=n,s=lt(n,["children","visible","onMobileClose"]);const l=s["data-testid"]||"popover",c=O(),d=Zi["sm-max"]({theme:c}),u=Yc.useMediaQuery({maxWidth:d}),f=()=>{a&&a()},h=()=>"string"==typeof o?t(fa.BodyMD,{children:o}):o;return e(r,{children:[i&&t(zd,Object.assign({"data-testid":l},s,{children:t(Pd,{children:h()})})),u&&t(Fd,{show:null!=i&&i,onOverlayClick:f,children:t(Ld,{onClose:f,children:t(Nd,{children:h()})})})]})},Wd=E.div`
    display: inline;
    width: fit-content;
    cursor: pointer;
    position: relative;
`,Vd=n=>{var o,i,{children:a,popoverContent:l,trigger:c="click",position:d="top",zIndex:u,rootNode:f,customOffset:h,delay:p,onPopoverAppear:m,onPopoverDismiss:b}=n,v=lt(n,["children","popoverContent","trigger","position","zIndex","rootNode","customOffset","delay","onPopoverAppear","onPopoverDismiss"]);const[y,x]=g(!1),w=s(null),$=s(null),C=O(),S=Zi["sm-max"]({theme:C}),D=Yc.useMediaQuery({maxWidth:S}),{refs:k,floatingStyles:E,context:_}=N({open:y,placement:d,whileElementsMounted:H,middleware:[W(null!=h?h:16),V(),Y({limiter:U()})],onOpenChange:e=>{x(e),y!==e&&z(e)}}),F=Sd(),T=D?"click":c,I=K(_,{ignoreMouse:"hover"===T}),M=q(_),A=G(_,{enabled:"hover"===T,delay:{open:null!==(o=null==p?void 0:p.open)&&void 0!==o?o:0,close:null!==(i=null==p?void 0:p.close)&&void 0!==i?i:500}}),{getReferenceProps:j,getFloatingProps:B}=Q([I,M,A]),R=()=>{x(!1),z(!1)},z=e=>{e&&m&&m(),!e&&b&&b()};return e(r,{children:[t(Wd,Object.assign({ref:e=>{w.current=e,k.setReference(e)}},j({onClick:e=>{e.stopPropagation(),e.preventDefault()}}),v,{children:a})),y&&t(Z,{root:f,children:t(X,{context:_,children:t("div",Object.assign({ref:e=>{$.current=e,k.setFloating(e)},style:Object.assign(Object.assign({},E),{outline:"none",zIndex:null!=u?u:F})},B(),{children:"function"==typeof l?l():t(Hd,{visible:!0,onMobileClose:R,children:l})}))})})]})},Yd=e=>{switch(e){case"underline":return"text-decoration: underline 1px;";case"underline-dashed":return"text-decoration: underline dashed 1px;"}},Ud=E.span`
    color: ${Yi["text-primary"]};
    font-weight: 600;
    text-underline-position: under;

    ${({$defaultStyle:e})=>Yd(e)}

    &:hover,
    &:focus-visible {
        color: ${Yi["text-hover"]};
        ${({$hoverStyle:e})=>Yd(e)}
    }

    svg {
        height: 1lh; // align vertically
        width: 1em; // scale icon with font size
        vertical-align: top;
    }
`,Kd=E.span`
    ${e=>!e.$standalone&&"margin-left: 0.25rem;"}
`,qd=r=>{var{ariaLabel:n,content:o,icon:i,underlineStyle:a="default",underlineHoverStyle:s="default"}=r,l=lt(r,["ariaLabel","content","icon","underlineStyle","underlineHoverStyle"]);const c=!!o;return t(Vd,Object.assign({},l,{children:e(Ud,{role:"button","aria-haspopup":"dialog",tabIndex:0,$defaultStyle:a,$hoverStyle:s,"aria-label":null!=n?n:c?void 0:"More info",children:[o,i&&t(Kd,{$standalone:!c,children:i})]})}))},Gd=E.div`
    padding-left: ${Gi["spacing-4"]};
    display: inline;
`,Qd=({addon:e,rootNode:r})=>{const{content:n,type:o,icon:i,id:a,zIndex:s,"data-testid":l}=e;return t(Gd,{children:t(qd,{trigger:"click",id:a,"data-testid":l,popoverContent:n,rootNode:r,zIndex:s,icon:null!=i?i:t(B,{"data-testid":`${o}-icon`}),ariaLabel:"More info"})})},Zd=E.label`
    color: ${Yi["text-subtle"]};
    margin-bottom: ${Gi["spacing-8"]};
    display: inline-block;

    ${Ui["form-label"]}
    ${Rd()}
    font-weight: ${Ui.Spec["weight-semibold"]};
`,Xd=E.p`
    ${Ui["body-sm-semibold"]}
    color: ${Yi["text-error"]};
    margin-top: ${Gi["spacing-8"]};
    margin-bottom: 0;
    outline: none;
`,Jd=E.span`
    ${Ui["form-description"]}
    color: ${Yi["text-subtler"]};
    display: block;
`,eu=r=>{var{children:n,addon:o,subtitle:i,"data-testid":a}=r,s=lt(r,["children","addon","subtitle","data-testid"]);return e(Zd,Object.assign({},s,{children:[n,o&&o.type&&("popover"===(null==o?void 0:o.type)?t(Qd,{addon:o}):null),"string"==typeof i?t(Jd,Object.assign({"data-testid":a?`${a}-subtitle`:"subtitle"},s,{children:i})):i]}))},tu=E.div`
    position: relative;

    ${e=>{const{$xxlStart:t,$xxlSpan:r,$xlStart:n,$xlSpan:o,$lgStart:i,$lgSpan:a,$mdStart:s,$mdSpan:l,$smStart:c,$smSpan:d,$xsStart:u,$xsSpan:f,$xxsStart:h,$xxsSpan:p}=e;return _`
            grid-column: ${t||"auto"} / span ${r||1};

            ${Di.MaxWidth.xl} {
                grid-column: ${n||"auto"} / span ${o||1};
            }

            ${Di.MaxWidth.lg} {
                grid-column: ${i||"auto"} / span ${a||1};
            }

            ${Di.MaxWidth.md} {
                grid-column: ${s||"auto"} / span ${l||1};
            }

            ${Di.MaxWidth.sm} {
                grid-column: ${c||"auto"} / span ${d||1};
            }

            ${Di.MaxWidth.xs} {
                grid-column: ${u||"auto"} / span ${f||1};
            }

            ${Di.MaxWidth.xxs} {
                grid-column: ${h||"auto"} / span ${p||1};
            }
        `}}
`,ru=o.forwardRef(((e,r)=>{const n=O(),{xxlCols:o,xlCols:i,lgCols:a,mdCols:s,smCols:l,xsCols:c,xxsCols:d}=e,u=lt(e,["xxlCols","xlCols","lgCols","mdCols","smCols","xsCols","xxsCols"]),f=(e,t,r)=>{if(!e)return{start:void 0,span:void 0};if("development"===process.env.NODE_ENV&&("number"==typeof e&&e>t?console.warn(`Warning: ${r}Cols exceeds maximum (${t}): ${e}`):Array.isArray(e)&&(e[0]>t+1||e[1]>t+1)&&console.warn(`Warning: ${r}Cols array exceeds maximum (${t}): [${e[0]}, ${e[1]}]`)),Array.isArray(e)){const[r,n]=e;if(-1===n)return{start:r,span:t-r+1};return{start:r,span:Math.min(n-r,t)}}return{start:void 0,span:Math.min(e,t)}};return t(tu,Object.assign({ref:r},(()=>{const e=Ci["xxl-column"]({theme:n}),t=Ci["xl-column"]({theme:n}),r=Ci["lg-column"]({theme:n}),u=Ci["md-column"]({theme:n}),h=Ci["sm-column"]({theme:n}),p=Ci["xs-column"]({theme:n}),g=Ci["xxs-column"]({theme:n}),m=f(o||i||a||s||l||c||d,e,"xxl"),b=f(i||a||s||l||c||d,t,"xl"),v=f(a||s||l||c||d,r,"lg"),y=f(s||l||c||d,u,"md"),x=f(l||c||d,h,"sm"),w=f(c||d,p,"xs"),$=f(d,g,"xxs");return{$xxlStart:m.start,$xxlSpan:m.span,$xlStart:b.start,$xlSpan:b.span,$lgStart:v.start,$lgSpan:v.span,$mdStart:y.start,$mdSpan:y.span,$smStart:x.start,$smSpan:x.span,$xsStart:w.start,$xsSpan:w.span,$xxsStart:$.start,$xxsSpan:$.span}})(),u))})),nu={mobileS:320,mobileM:375,mobileL:480,tablet:1199,desktopM:1399,desktopL:1999,desktop4k:3840},ou=e=>Object.keys(nu).reduce(((t,r)=>{const n=nu[r];return t[r]=`@media screen and (${e}: ${n}px)`,t}),{}),iu=ou("max-width"),au=(ou("min-width"),E.div`
    position: relative;
    ${e=>{const{$desktopStart:t,$desktopSpan:r,$tabletStart:n,$tabletSpan:o,$mobileStart:i,$mobileSpan:a}=e;return _`
            grid-column: ${t||"auto"} / span ${r||1};

            ${iu.tablet} {
                grid-column: ${n||"auto"} / span
                    ${o||1};
            }

            ${iu.mobileL} {
                grid-column: ${i||"auto"} / span
                    ${a||1};
            }
        `}}
`),su=o.forwardRef(((e,r)=>{const{mobileCols:n,tabletCols:o,desktopCols:i}=e,a=lt(e,["mobileCols","tabletCols","desktopCols"]);return t(au,Object.assign({ref:r},(()=>{const e=o||n,t=n,r=lu(i||o||n),a=lu(e),s=lu(t);return{$desktopSpan:r.span,$desktopStart:r.start,$mobileSpan:s.span,$mobileStart:s.start,$tabletSpan:a.span,$tabletStart:a.start}})(),a))})),lu=e=>{if(Array.isArray(e)&&e.length>1){const[t,r]=e,n=t<=r?t:r,o=t<=r?r:t;let i;return i=o===n?1:o-n,{start:n,span:i}}return"number"==typeof e?{start:void 0,span:e}:{start:void 0,span:void 0}},cu=_`
    display: flex;
    flex-direction: column;

    &:not(:last-child) {
        margin-bottom: ${Gi["spacing-32"]};
    }
`,du=E.div`
    ${cu}
`,uu=E(ru)`
    ${cu}
`,fu=E(su)`
    ${cu}
`,hu=({label:r,errorMessage:n,id:o,disabled:i,children:a,layoutType:s,mobileCols:l,tabletCols:c,desktopCols:d,xxsCols:u,xsCols:f,smCols:h,mdCols:p,lgCols:g,xlCols:m,xxlCols:b,"data-error-testid":v})=>{const y=!s&&(l||c||d)?"v2-grid":!s&&(u||f||h||p||g||m||b)?"grid":s||"flex",w=()=>v||(o?`${o}-error-message`:"error-message"),C=()=>!!n;const S=(e=>{switch(e){case"v2-grid":return fu;case"grid":return uu;case"flex":return du}})(y);return e(S,Object.assign({},(e=>{switch(e){case"v2-grid":return{mobileCols:l,tabletCols:c,desktopCols:d};case"grid":return{xxsCols:u,xsCols:f,smCols:h,mdCols:p,lgCols:g,xlCols:m,xxlCols:b};case"flex":return}})(y),{children:[r&&t(eu,"string"==typeof r?{htmlFor:`${o}-base`,"data-testid":o?`${o}-label`:"form-label",disabled:i,children:r}:Object.assign({htmlFor:`${o}-base`,"data-testid":o?`${o}-label`:"form-label",disabled:i},r)),(()=>{const e={"aria-invalid":C(),"aria-describedby":C()&&w()};return $.map(a,(t=>x(t,e)))})(),n&&t(Xd,{id:w(),tabIndex:0,"data-testid":w(),children:n})]}))},pu=e=>"small"===e?2.5:3,gu=E.div`
    position: relative;
    width: 100%;
    ${e=>{const t=pu(e.$variant);return _`
            min-height: ${t}rem;
            height: ${t}rem; // Need this to persist the height when expanding or collapsing list
        `}}
`,mu=_`
    display: flex;
    position: relative;
    align-items: center;
    justify-content: space-between;
    padding: 0 ${Gi["spacing-16"]};
    // exclude top and bottom borders
    height: calc(${e=>pu(e.$variant)}rem - 2px);
    width: 100%;
    border-radius: ${Qi.sm};
    border: none;
    background: transparent;

    :focus,
    :active {
        outline: none;
    }

    :focus-visible {
        outline: 2px solid ${Yi["border-focus"]};
    }
`,bu=E.button`
    ${mu}
    cursor: pointer;
`,vu=E.div`
    ${mu}
`,yu=F`
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
`,xu=E.div`
    position: relative;
    border: ${qi["width-010"]} ${qi.solid} ${Yi.border};
    border-radius: ${Qi.sm};
    background: ${Yi.bg};
    overflow: hidden;

    :focus-within {
        border-color: ${Yi["border-focus"]};
        box-shadow: 0px 0px 4px 0px
            rgb(from ${Yi["border-focus"]} r g b / 50%) inset; // TODO: confirm shadow
    }

    ${e=>e.expanded?_`
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                z-index: 2;
            `:_`
                animation: ${yu} 0.5s ease-in-out;
            `}

    ${e=>e.disabled?_`
                background: ${Yi["bg-disabled"]};

                ${bu} {
                    cursor: not-allowed;
                }

                :focus-within {
                    border-color: ${Yi.border};
                    box-shadow: none;
                }
            `:e.$readOnly?_`
                border: none;
                background: transparent !important;

                ${bu} {
                    padding: 0;
                }

                :focus-within {
                    border: none;
                    box-shadow: none;
                }
            `:e.error?_`
                border-color: ${Yi["border-error"]};

                :focus-within {
                    border-color: ${Yi["border-error"]};
                    box-shadow: 0px 0px 4px 0px
                        rgb(from ${Yi["border-error"]} r g b / 50%) inset; // TODO: confirm shadow
                }
            `:void 0}
`;E.div`
    transform: rotate(${e=>e.expanded?180:0}deg);
    transition: transform ${Ki["duration-250"]} ${Ki["ease-default"]};
    margin-left: ${Gi["spacing-16"]};
`,E(re)`
    color: ${Yi.icon};
`;const wu=E.div`
    height: 1px;
    background: ${Yi.border};
    margin: 0 ${Gi["spacing-8"]};
`,$u=E.div`
    display: flex;
    flex: 1;
    word-break: break-all;
    ${e=>{if(e.$disabled)return _`
                color: ${Yi["text-disabled"]};
            `}}
`,Cu=E.div`
    ${e=>"small"===e.$variant?Ui["body-md-regular"]:Ui["body-baseline-regular"]}
    text-align: left;
    ${e=>{if("middle"!==e.truncateType)return _`
                    ${la(1)}
                `}}
    overflow: hidden;
`,Su=E(Cu)`
    color: ${Yi["text-subtler"]};
`,Du=({children:e,show:r,error:n,disabled:o,testId:i,onBlur:a,readOnly:l,className:c,variant:d})=>{const u=s(null);return md("mousedown",(function(e){if(!o){if(u&&u.current.contains(e.target))return;r&&a()}}),"document"),t(gu,{className:c,$variant:d,children:t(xu,{ref:u,error:n&&!r,disabled:o,$readOnly:l,expanded:r,"data-testid":i,children:e})})},ku=E.div`
    display: flex;
    flex-direction: column;
`,Eu=e=>"right"===e?"bottom-end":"bottom-start",_u=({enabled:n,isOpen:o,onOpen:i,onClose:a,onDismiss:l,renderElement:c,renderDropdown:d,customZIndex:u,clickToToggle:f=!1,offset:h=0,alignment:p="left",fitAvailableHeight:g,rootNode:m})=>{var b;const v=O(),y=Zi["sm-max"]({theme:v}),x=s(null),w=s(null),{width:$=0}=Lc({targetRef:x,handleHeight:!1}),C={name:"center",fn:({x:e,rects:t})=>{const r=0===e||e+t.floating.width===window.innerWidth,n=window.innerWidth<y;return{x:r&&n?(window.innerWidth-t.floating.width)/2:e}}},{refs:S,floatingStyles:D,context:k}=N({open:o,onOpenChange:(e,t,r)=>{"escape-key"===r?null==l||l():e&&!o?null==i||i():!e&&o&&(null==a||a(r))},whileElementsMounted:H,placement:Eu(p),middleware:[W(h),V(),Y({limiter:U()}),J({apply({availableHeight:e}){w.current&&Object.assign(w.current.style,{maxHeight:g?`${e}px`:void 0,overflowY:g?"hidden":void 0})}}),C]}),E=Sd(),{isMounted:_,styles:F}=ee(k,{initial:{opacity:0},open:{opacity:1},duration:300}),T=K(k,{enabled:n,toggle:f}),I=q(k,{enabled:n}),{getReferenceProps:M,getFloatingProps:A}=Q([T,I]);return e(r,{children:[t("div",Object.assign({ref:e=>{x.current=e,S.setReference(e)}},M(),{children:c()})),_&&t(Z,{root:m,children:t(X,{context:k,modal:!1,initialFocus:w,returnFocus:!1,children:t("div",Object.assign({ref:S.setFloating,style:Object.assign(Object.assign({},D),{zIndex:null!==(b=null!=u?u:E)&&void 0!==b?b:50})},A(),{children:t(ku,{ref:w,style:Object.assign({},F),inert:F.opacity<1?"":void 0,children:d({elementWidth:$})})}))})})]})},Ou=E.div`
    --vertical-inset: ${Gi["spacing-24"]};
    --horizontal-inset: ${Gi["spacing-20"]};
    --header-bottom-spacing: ${Gi["spacing-4"]};

    border: ${qi["width-010"]} ${qi.solid} ${Yi.border};
    border-radius: ${Qi.sm};
    overflow: hidden;

    width: ${e=>e.$width}px;
    max-width: 41rem;
    min-width: 21rem;

    ${Xi.MaxWidth.sm} {
        min-width: 17.5rem;
    }
`,Fu=E.div`
    display: inline-block;
    position: relative;
    width: ${({$size:e})=>e?`${e}px`:"1em"};
    height: ${({$size:e})=>e?`${e}px`:"1em"};
    color: ${e=>e.$color||"currentColor"};
`,Tu=F`
	0% {
	  transform: rotate(0deg);
	}
	100% {
	  transform: rotate(360deg);
	}
`,Iu=E.div`
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
    animation: ${Tu} 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
`,Mu=E(Iu)`
    animation-delay: -0.45s;
`,Au=E(Iu)`
    animation-delay: -0.3s;
`,ju=E(Iu)`
    animation-delay: -0.15s;
`,Bu=({color:r,className:n,size:o})=>e(Fu,{className:n,$size:o,$color:r,"data-testid":"component-loading-spinner",children:[t(Iu,{id:"inner1"}),t(Mu,{id:"inner2"}),t(Au,{id:"inner3"}),t(ju,{id:"inner4"})]}),Ru={Button:{"button-radius":Li.md,"button-default-colour-bg":mi["bg-primary"],"button-default-colour-bg-hover":mi["bg-primary-hover"],"button-default-colour-text":mi["text-inverse"],"button-secondary-colour-border":mi["border-primary"],"button-secondary-colour-text":mi["text-primary"],"button-light-colour-text":mi["text-primary"],"button-link-colour-text":mi["text-primary"]}},zu={collections:{default:{Button:{"button-radius":Li.sm,"button-default-colour-bg":mi["bg-primary"],"button-default-colour-bg-hover":mi["bg-primary-hover"],"button-default-colour-text":mi["text-inverse"],"button-secondary-colour-border":mi["border-primary"],"button-secondary-colour-text":mi["text-primary"],"button-light-colour-text":mi["text-primary"],"button-link-colour-text":mi["text-primary"]}},pa:{Button:{"button-radius":Li.full,"button-default-colour-bg":mi["bg-primary"],"button-default-colour-bg-hover":mi["bg-primary-hover"],"button-default-colour-text":mi["text-inverse"],"button-secondary-colour-border":mi["border-primary"],"button-secondary-colour-text":mi["text-primary"],"button-light-colour-text":mi["text-primary"],"button-link-colour-text":mi["text-primary"]}},a11yplayground:Ru},defaultValue:"default"},Pu=(e,t)=>r=>{var n,o;const i=r.theme,a=Vo(zu,null==i?void 0:i.componentScheme);return Lu((null===(o=null===(n=null==i?void 0:i.componentOverrides)||void 0===n?void 0:n[e])||void 0===o?void 0:o[t])||a[e][t],r)},Lu=(e,t)=>{switch(typeof e){case"function":return e(t);case"number":return e+"px";case"string":return e}},Nu=Pu("Button","button-radius"),Hu=Pu("Button","button-default-colour-bg"),Wu=Pu("Button","button-default-colour-bg-hover"),Vu=Pu("Button","button-default-colour-text"),Yu=Pu("Button","button-secondary-colour-border"),Uu=Pu("Button","button-secondary-colour-text"),Ku=Pu("Button","button-light-colour-text"),qu=Pu("Button","button-link-colour-text"),Gu=E.button`
    padding: ${Gi["spacing-8"]} ${Gi["spacing-16"]};
    min-width: 4rem;
    border: ${qi["width-010"]} ${qi.solid} transparent;
    transition: all ${Ki["duration-250"]} ${Ki["ease-default"]};
    border-radius: ${Nu};
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;

    // -----------------------------------------------------------------------------
    // BUTTON STYLE + TEXT COLOR
    // -----------------------------------------------------------------------------
    ${e=>{switch(e.$buttonStyle){case"secondary":return _`
                    background-color: ${Yi.Primitive.white};
                    border-color: ${e.$buttonIsDanger?Yi["border-error-strong"]:Yu};

                    color: ${e.$buttonIsDanger?Yi["text-error"]:Uu};

                    &:hover,
                    &:active {
                        background-color: ${Yi["bg-hover-neutral"]};
                    }
                `;case"light":return _`
                    background-color: ${Yi.bg};
                    border-color: ${Yi.border};

                    color: ${e.$buttonIsDanger?Yi["text-error"]:Ku};

                    &:hover,
                    &:active {
                        background-color: ${Yi["bg-hover-neutral"]};
                    }
                `;case"link":return _`
                    background-color: transparent;

                    color: ${e.$buttonIsDanger?Yi["text-error"]:qu};
                    &:hover,
                    &:active {
                        background-color: ${Yi["bg-hover-neutral"]};
                    }
                `;case"disabled":return _`
                    background-color: ${Yi["bg-disabled"]};

                    cursor: not-allowed;

                    &:hover {
                        box-shadow: none;
                    }

                    color: ${Yi["text-disabled"]};
                `;default:return _`
                    background-color: ${e.$buttonIsDanger?Yi["bg-error-strong"]:Hu};};

                    ${Xi.MaxWidth.sm} {
                        width: 100%;
                    }

                    color: ${Vu}};

                    &:hover,
                    &:active {
                        background-color: ${e.$buttonIsDanger?Yi["bg-error-strong-hover"]:Wu}
                        };
                    }
                `}}}

    // -----------------------------------------------------------------------------
	// BUTTON SIZE + TEXT SIZE
	// -----------------------------------------------------------------------------
	${e=>{switch(e.$buttonSizeStyle){case"small":return _`
                    height: 2.5rem;
                    ${Ui["body-md-semibold"]}

                    ${Xi.MaxWidth.xxs} {
                        height: auto;
                    }
                `;case"large":return _`
                    height: 4rem;
                    ${Ui["heading-md-semibold"]}

                    ${Xi.MaxWidth.xxs} {
                        height: auto;
                    }
                `;default:return _`
                    height: 3rem;
                    ${Ui["heading-xs-semibold"]}

                    ${Xi.MaxWidth.xxs} {
                        height: auto;
                    }
                `}}}
`,Qu=E(Bu)`
    margin-right: 0.5rem;
`,Zu=(r,n)=>{const{children:o,disabled:i=!1,loading:a=!1,styleType:s="default",danger:l=!1}=r,c=lt(r,["children","disabled","loading","styleType","danger"]),d={$buttonStyle:i?"disabled":s,$buttonSizeStyle:"default",$buttonIsDanger:l};return e(Gu,Object.assign({ref:n,"data-testid":c["data-testid"]||"button",disabled:i},d,c,{children:[a&&t(Qu,{}),t("span",{children:o})]}))};Zu.displayName="Button.Default";const Xu=(r,n)=>{const{children:o,disabled:i=!1,loading:a=!1,styleType:s="default",danger:l=!1}=r,c=lt(r,["children","disabled","loading","styleType","danger"]),d={$buttonStyle:i?"disabled":s,$buttonSizeStyle:"small",$buttonIsDanger:l};return e(Gu,Object.assign({ref:n,"data-testid":c["data-testid"]||"button",disabled:i},d,c,{children:[a&&t(Qu,{}),t("span",{children:o})]}))};Xu.displayName="Button.Small";const Ju=(r,n)=>{const{children:o,disabled:i=!1,loading:a=!1,styleType:s="default",danger:l=!1}=r,c=lt(r,["children","disabled","loading","styleType","danger"]),d={$buttonStyle:i?"disabled":s,$buttonSizeStyle:"large",$buttonIsDanger:l};return e(Gu,Object.assign({ref:n,"data-testid":c["data-testid"]||"button",disabled:i},d,c,{children:[a&&t(Qu,{}),t("span",{children:o})]}))};Ju.displayName="Button.Large";const ef={Default:o.forwardRef(Zu),Small:o.forwardRef(Xu),Large:o.forwardRef(Ju)},tf=_`
    color: ${Yi.icon};
    height: 1rem;
    width: 1rem;
`,rf=E(ne)`
    ${tf}
`,nf=E(oe)`
    ${tf}
`,of=E(re)`
    ${tf}
    transition: transform 250ms ease-in-out;
    margin-left: 0.5rem;
`,af=E.div`
    position: relative;
    width: 100%;
    display: flex;
    flex-direction: column;

    padding-top: var(--vertical-inset);
    padding-bottom: var(--vertical-inset);
`,sf=E.div`
    display: flex;
    flex: 1;
    position: relative;
`,lf=E.div`
    isolation: isolate;
    width: 100%;

    padding-left: var(--horizontal-inset);
    padding-right: var(--horizontal-inset);
`,cf=E.div`
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    background: ${Yi.bg};

    padding-left: var(--horizontal-inset);
    padding-right: var(--horizontal-inset);

    ${e=>{if(!e.$visible)return _`
                display: none;
            `}}
`,df=E.div`
    display: flex;
    justify-content: space-between;

    padding-left: var(--header-horizontal-inset, var(--horizontal-inset));
    padding-right: var(--header-horizontal-inset, var(--horizontal-inset));
    padding-bottom: var(--header-bottom-spacing);
`,uf=E.div`
    display: flex;
`,ff=E.button`
    border: none;
    display: flex;
    align-items: center;
    padding: 0.5rem;
    background: transparent;
    cursor: pointer;

    ${e=>!1===e.$visible?_`
                display: none;
            `:e.$expanded?_`
                ${of} {
                    transform: rotate(180deg);
                }
            `:void 0};
`,hf=E.span`
    ${Ui["body-md-regular"]}
    color: ${Yi.text};
`,pf=E.div`
    display: flex;
`,gf=E(Md)`
    margin: auto 0;
    padding: 0.75rem;

    :disabled {
        cursor: not-allowed;
    }
`,mf=E.div`
    display: flex;
    gap: 0.5rem;
    margin-top: 1.5rem;

    padding-left: var(--horizontal-inset);
    padding-right: var(--horizontal-inset);
`,bf=E(ef.Small)`
    flex: 1;
`,vf=E.div`
    width: 100%;
    height: 100%;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(6, 2.5rem);
    align-content: center;
    justify-content: center;

    gap: 0.5rem 0;
`,yf=E.div`
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: ${Qi.md};
    margin: 0 0.5rem;
    transition: ${Ki["duration-150"]} ${Ki["ease-default"]};

    // default styles
    ${Ui["body-md-regular"]}
    border-radius: ${Qi.md};
    border: ${qi["width-010"]} ${qi.solid} transparent;
    background-clip: border-box;
    color: ${Yi.text};
    cursor: default;

    // cursor style
    ${e=>e.$interactive?_`
                cursor: pointer;
            `:e.$disabledDisplay?_`
                cursor: not-allowed;
            `:void 0}

    // background, border and text styles
    ${({$variant:e,$interactive:t,$disabledDisplay:r})=>"selected-month"===e?_`
                background: ${Yi["bg-selected"]};
                border-color: ${Yi["border-selected"]};
                color: ${Yi["text-selected"]};
                font-weight: ${Ui.Spec["weight-semibold"]};

                ${t&&_`
                    &:hover {
                        background: ${Yi["bg-selected-hover"]};
                        border-color: ${Yi["border-selected-hover"]};
                        color: ${Yi["text-selected-hover"]};
                    }
                `}
            `:"current-month"===e?_`
                color: ${Yi["text-primary"]};
                font-weight: ${Ui.Spec["weight-semibold"]};
            `:r?_`
                color: ${Yi["text-disabled-subtlest"]};
            `:void 0}

    // hover styles
    ${({$variant:e,$interactive:t})=>{if(t)return"selected-month"===e?_`
                &:hover {
                    background: ${Yi["bg-selected-hover"]};
                    border-color: ${Yi["border-selected-hover"]};
                    color: ${Yi["text-selected-hover"]};
                    font-weight: ${Ui.Spec["weight-semibold"]};
                }
            `:_`
            &:hover {
                background: ${Yi["bg-hover"]};
                color: ${Yi["text-hover"]};
                font-weight: ${Ui.Spec["weight-semibold"]};
            }
        `}}
`,xf=({calendarDate:e,currentFocus:r,selectedStartDate:n,selectedEndDate:o,viewCalendarDate:i,isNewSelection:l,minDate:d,maxDate:u,allowDisabledSelection:f,onMonthSelect:h})=>{const p=a((()=>id.generateMonths(Kc(e))),[e]),m=s(new Array(p.length).fill(null)),[b,v]=g(p.findIndex((e=>e.isSame(i,"month"))));c((()=>{var e;null!==b&&(null===(e=m.current[b])||void 0===e||e.focus())}),[b,p]);const y=(e,t)=>{t||h(e)},x=e=>{const t="start"===r&&o&&e.isAfter(o,"month")&&l,i="end"===r&&n&&e.isBefore(n,"month")&&l;return!(!t&&!i)},w=e=>{const t=e.format("MMMM"),r=(n=e,!id.isWithinRange(n,d?Kc(d):void 0,u?Kc(u):void 0,"month"));var n;const o=i.isSame(e,"month"),a=o?"selected-month":Kc().isSame(e,"month")?"current-month":"default",s=i.isSame(e,"year")?o?0:-1:0===e.month()?0:-1;return{disabledDisplay:r||x(e),interactive:!r||f,month:t,variant:a,tabIndex:s}};return p.length?t(vf,{onBlur:()=>{v(null)},children:p.map(((e,r)=>{const{disabledDisplay:n,interactive:o,variant:i,month:a,tabIndex:s}=w(e);return t(yf,{ref:e=>m.current[r]=e,tabIndex:s,role:"button","aria-disabled":!o,"aria-selected":"selected-month"===i,$variant:i,$disabledDisplay:n,$interactive:o,onClick:()=>y(e,!o),onKeyDown:t=>{((e,t,r)=>{const n=e.key;let o;const i=p.indexOf(t);switch(n){case"Enter":case" ":e.preventDefault(),y(t,r);break;case"ArrowLeft":o=i-1;break;case"ArrowRight":o=i+1;break;case"ArrowUp":o=i-2;break;case"ArrowDown":o=i+2}void 0!==o&&o>=0&&o<p.length&&(e.preventDefault(),v(o))})(t,e,!o)},children:a},a)}))}):null},wf=E.div`
    width: 100%;
    height: 100%;
    display: grid;
    align-content: center;
    align-items: center;
    grid-template-columns: repeat(3, 1fr);
`,$f=E.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 1rem 0.5rem;
    transition: ${Ki["duration-150"]} ${Ki["ease-default"]};
    padding: 0.5rem;

    // default styles
    ${Ui["body-md-regular"]}
    border-radius: ${Qi.md};
    border: ${qi["width-010"]} ${qi.solid} transparent;
    background-clip: border-box;
    color: ${Yi.text};
    cursor: default;

    // cursor style
    ${({$interactive:e,$disabledDisplay:t})=>e?_`
                cursor: pointer;
            `:t?_`
                cursor: not-allowed;
            `:void 0}

    // background, border and text styles
    ${({$variant:e,$interactive:t,$disabledDisplay:r})=>"selected-year"===e?_`
                background: ${Yi["bg-selected"]};
                border-color: ${Yi["border-selected"]};
                color: ${Yi["text-selected"]};
                font-weight: ${Ui.Spec["weight-semibold"]};

                ${t&&_`
                    &:hover {
                        background: ${Yi["bg-selected-hover"]};
                        border-color: ${Yi["border-selected-hover"]};
                        color: ${Yi["text-selected-hover"]};
                    }
                `}
            `:"current-year"===e?_`
                color: ${Yi["text-primary"]};
                font-weight: ${Ui.Spec["weight-semibold"]};
            `:"other-decade"===e||r?_`
                color: ${Yi["text-disabled-subtlest"]};
            `:void 0}

    // hover styles
    ${({$variant:e,$interactive:t})=>{if(t)return"selected-year"===e?_`
                &:hover {
                    background: ${Yi["bg-selected-hover"]};
                    border-color: ${Yi["border-selected-hover"]};
                    color: ${Yi["text-selected-hover"]};
                    font-weight: ${Ui.Spec["weight-semibold"]};
                }
            `:_`
            &:hover {
                background: ${Yi["bg-hover"]};
                color: ${Yi["text-hover"]};
                font-weight: ${Ui.Spec["weight-semibold"]};
            }
        `}}
`,Cf=({calendarDate:e,currentFocus:r,selectedStartDate:n,selectedEndDate:o,viewCalendarDate:i,isNewSelection:l,minDate:d,maxDate:u,allowDisabledSelection:f,onYearSelect:h,setCalendarDate:p})=>{const m=a((()=>id.generateDecadeOfYears(Kc(e))),[e]),b=s(new Array(m.length).fill(null)),[v,y]=g(e);c((()=>{var e;if(null===v)return;const t=m.findIndex((e=>e.isSame(v,"year")));t>=0&&(null===(e=b.current[t])||void 0===e||e.focus())}),[v,m]);const x=(e,t)=>{t||h(e)},w=e=>{const t="start"===r&&o&&e.isAfter(o,"year")&&l,i="end"===r&&n&&e.isBefore(n,"year")&&l;return!(!t&&!i)},$=e=>{const t=m.indexOf(e),r=[0,11].includes(t),n=e.year(),o=(a=e,!id.isWithinRange(a,d?Kc(d):void 0,u?Kc(u):void 0,"year"));var a;const s=r?"other-decade":i.isSame(e,"year")?"selected-year":Kc().isSame(e,"year")?"current-year":"default",l=i.year()>=m[0].year()&&i.year()<=m[m.length-1].year()?"selected-year"===s?0:-1:1===t?0:-1;return{disabledDisplay:o||w(e),interactive:!o||f,year:n,variant:s,tabIndex:l}};return m.length?t(wf,{onBlur:()=>{y(null)},children:m.map(((e,r)=>{const{disabledDisplay:n,interactive:o,variant:i,year:a,tabIndex:s}=$(e);return t($f,{ref:e=>{b.current[r]=e},tabIndex:s,role:"button","aria-label":`${a}`,"aria-disabled":!o,"aria-selected":"selected-year"===i,$variant:i,$disabledDisplay:n,$interactive:!!o,onClick:()=>x(e,!o),onKeyDown:t=>{((e,t,r)=>{let n;switch(e.key){case"Enter":case" ":e.preventDefault(),x(t,r);break;case"ArrowLeft":n=t.subtract(1,"year");break;case"ArrowRight":n=t.add(1,"year");break;case"ArrowUp":n=t.subtract(3,"year");break;case"ArrowDown":n=t.add(3,"year")}void 0!==n&&(e.preventDefault(),p(n),y(n))})(t,e,!o)},children:a},a)}))}):null},Sf=o.forwardRef(((n,o)=>{var{children:i,initialCalendarDate:a,minDate:l,maxDate:d,currentFocus:u,selectedStartDate:h,selectedEndDate:p,selectWithinRange:m,dynamicHeight:b=!1,allowDisabledSelection:v,onCalendarDateChange:y,withButton:x,doneButtonDisabled:w,onDismiss:$,showNavigationHeader:C=!0,getLeftArrowDate:S,getRightArrowDate:D,isLeftArrowDisabled:k,isRightArrowDisabled:E,getMonthHeaderLabel:_,getYearHeaderLabel:O,isFocusable:F=!1}=n,T=lt(n,["children","initialCalendarDate","minDate","maxDate","currentFocus","selectedStartDate","selectedEndDate","selectWithinRange","dynamicHeight","allowDisabledSelection","onCalendarDateChange","withButton","doneButtonDisabled","onDismiss","showNavigationHeader","getLeftArrowDate","getRightArrowDate","isLeftArrowDisabled","isRightArrowDisabled","getMonthHeaderLabel","getYearHeaderLabel","isFocusable"]);const[I,M]=g(ud.toDayjs(a)),[A,j]=g(ud.toDayjs(a)),[B,R]=g("default"),z=s(null),P=s(null),L=s(null),N=s(null);f(o,(()=>({defaultView(){R("default")},resetView(){const e=ud.toDayjs(a);M(e),j(e),R("default")},setCalendarDate(e){const t=ud.toDayjs(e);M(t),j(t)}}))),c((()=>{const e=ud.toDayjs(a);M(e),j(e)}),[a]),c((()=>{Q(A)}),[A]);const H=()=>{var e;"month-options"!==B?(R("month-options"),null===(e=L.current)||void 0===e||e.focus()):(R("default"),M(A))},W=e=>{var t;if("Enter"!==e.key&&" "!==e.key||(e.preventDefault(),H(),null===(t=N.current)||void 0===t||t.focus()),"ArrowUp"===e.key||"ArrowDown"===e.key){e.preventDefault();const t="ArrowUp"===e.key?I.subtract(1,"month"):I.add(1,"month");if(!id.isWithinRange(t,l?Kc(l):void 0,d?Kc(d):void 0,"month"))return;M(t),"default"===B&&j(t)}},V=()=>{"default"!==B?(R("default"),M(A)):R("year-options")},Y=e=>{if("Enter"!==e.key&&" "!==e.key||(e.preventDefault(),V()),"ArrowUp"===e.key||"ArrowDown"===e.key){e.preventDefault();let t;if(t="year-options"===B?"ArrowUp"===e.key?I.subtract(10,"year"):I.add(10,"year"):"ArrowUp"===e.key?I.subtract(1,"year"):I.add(1,"year"),!id.isWithinRange(t,l?Kc(l):void 0,d?Kc(d):void 0,"year"))return;M(t),"default"===B&&j(t)}},U=()=>{var e;null===(e=L.current)||void 0===e||e.focus();const t=S?S(I):I.subtract(1,"month");switch(B){case"default":j(t),M(t);break;case"month-options":M((e=>e.subtract(1,"year")));break;case"year-options":M((e=>e.subtract(10,"year")))}},K=()=>{var e;null===(e=L.current)||void 0===e||e.focus();const t=D?D(I):I.add(1,"month");switch(B){case"default":j(t),M(t);break;case"month-options":M((e=>e.add(1,"year")));break;case"year-options":M((e=>e.add(10,"year")))}},q=e=>{M(e),j(e),x||R("default")},G=()=>{const e=ud.toDayjs(a);M(e),j(e),"default"===B?Z("reset"):R("default")},Q=e=>{y&&y(e)},Z=e=>{$&&$(e)},X=()=>{if(!l||v)return!1;const e=Kc(l);return"month-options"===B?!id.isPreviousYearWithinRange(I,e):"year-options"===B?!id.isPreviousDecadeWithinRange(I,e):k?k(I):!id.isPreviousMonthWithinRange(I,e)},J=()=>{if(!d||v)return!1;const e=Kc(d);return"month-options"===B?!id.isNextYearWithinRange(I,e):"year-options"===B?!id.isNextDecadeWithinRange(I,e):E?E(I):!id.isNextMonthWithinRange(I,e)},ee=()=>{const n=_?_(I):I.format("MMM"),o=Kc(n,"MMM").format("MMMM"),i=(()=>{if("year-options"===B){const{beginDecade:e,endDecade:t}=id.getStartEndDecade(I);return`${e} to ${t}`}return O?O(I):I.format("YYYY")})(),a={"month-options":`${i}, Close month selection`,"year-options":`${i}, Close year selection`,default:`${i}, Select year`};return e(r,{children:[e(ff,{"aria-label":`${o}, Select month`,type:"button",$expanded:"month-options"===B,$visible:"default"===B,id:"month-dropdown",onClick:H,onKeyDown:W,tabIndex:F?0:-1,children:[t(hf,{children:n}),t(of,{})]}),e(ff,{ref:N,"aria-label":a[B],type:"button",$expanded:"default"!==B,id:"year-dropdown",onClick:V,onKeyDown:Y,tabIndex:F?0:-1,children:[t(hf,{children:i}),t(of,{})]})]})},te=()=>{switch(B){case"month-options":return t(xf,{calendarDate:I,currentFocus:u,minDate:l,maxDate:d,selectedStartDate:h,selectedEndDate:p,viewCalendarDate:A,isNewSelection:!!m,onMonthSelect:q,allowDisabledSelection:v});case"year-options":return t(Cf,{setCalendarDate:M,calendarDate:I,currentFocus:u,minDate:l,maxDate:d,selectedStartDate:h,selectedEndDate:p,viewCalendarDate:A,isNewSelection:!!m,onYearSelect:q,allowDisabledSelection:v});default:return null}};return e(af,Object.assign({ref:L,"data-id":"calendar-container","data-testid":"calendar-container","aria-label":A.format("MMMM, YYYY"),role:"group"},T,{children:[C&&(()=>{const r={"month-options":"year","year-options":"decade",default:"month"}[B];return e(df,{"data-id":"calendar-header","data-testid":"calendar-header",children:[t(uf,{children:ee()}),e(pf,{children:[t(gf,{"aria-label":`Previous ${r}`,"data-testid":"left-arrow-btn",disabled:X(),focusHighlight:!1,focusOutline:"browser",onClick:U,tabIndex:F?0:-1,children:t(rf,{})}),t(gf,{"aria-label":`Next ${r}`,"data-testid":"right-arrow-btn",disabled:J(),focusHighlight:!1,focusOutline:"browser",onClick:K,tabIndex:F?0:-1,children:t(nf,{})})]})]})})(),t(sf,{children:(()=>{const n="function"==typeof i?i({calendarDate:A,currentView:B}):i;if(b)return e(r,{children:["default"===B&&n,te()]});{const o="default"===B;return e(r,{children:[t(lf,{inert:o?void 0:"",children:n}),t(cf,{$visible:!o,children:te()})]})}})()}),(()=>{if(!x)return;const r=!!("default"===B)&&w;return e(mf,{children:[t(bf,{ref:P,"data-testid":"cancel-button",styleType:"light",type:"button",onClick:G,children:"Cancel"}),t(bf,{"data-testid":"done-button",ref:z,type:"button",onClick:()=>{r||(M(A),"default"===B?Z("confirmed"):R("default"))},disabled:r,children:"Done"})]})})()]}))})),Df=E.div`
    width: 100%;
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    row-gap: 0.25rem;
`,kf=E.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 2.5rem;
    pointer-events: none;
    user-select: none;

    ${Ui["body-sm-semibold"]};
    color: ${Yi.text};
`,Ef=E.div`
    grid-column: 1 / -1;
    display: flex;
`,_f=e=>{let t=Yi.bg,r="transparent";switch(e.$type){case"hover-subtle":t=Yi["bg-hover"],r=Yi["bg-hover"];break;case"hover":t=Yi["bg-hover-strong"],r=Yi["bg-hover-strong"];break;case"hover-outline":t=Yi["bg-hover-subtle"],r=Yi["border-hover"];break;case"selected-outline":t=Yi["bg-selected"],r=Yi["border-selected"];break;case"selected-outline-subtle":t=Yi["bg-selected"],r=Yi["border-selected-subtle"];break;case"selected-hover":t=Yi["bg-selected-hover"];break;case"selected-hover-outline":t=Yi["bg-selected-hover"],r=Yi["border-selected-hover"]}return{color:t,borderColor:r}},Of=E.div`
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    width: 100%;
    height: 2.5rem;
`,Ff=E.div`
    position: absolute;
    height: 2.5rem;
    width: 50%;
    transition: ${Ki["duration-150"]} ${Ki["ease-default"]};
    border: ${qi["width-010"]} ${qi.solid} transparent;
    border-left: none;
    border-right: none;

    ${e=>{if(!e.$type)return;const{color:t,borderColor:r}=_f(e);return _`
            background-color: ${t};
            background-clip: border-box;
            border-top-color: ${r};
            border-bottom-color: ${r};
        `}}
`,Tf=E(Ff)`
    left: 0;
`,If=E(Ff)`
    right: 0;
`,Mf=E.div`
    position: absolute;
    z-index: 1;

    display: flex;
    align-items: center;
    justify-content: center;
    height: 2.5rem;
    width: 2.5rem;
    transition: ${Ki["duration-150"]} ${Ki["ease-default"]};

    border: ${qi["width-010"]} ${qi.solid} transparent;
    border-radius: ${Qi.md};

    ${e=>{if(e.$type){const{color:t,borderColor:r}=_f(e);return _`
                background-color: ${t};
                background-clip: content-box;
                border-color: ${r};
            `}}}
`,Af=E(Mf)`
    right: calc(50% - 1.25rem);
    clip-path: inset(-3px 1.25rem -3px -3px);
`,jf=E(Mf)`
    left: calc(50% - 1.25rem);
    clip-path: inset(-3px -3px -3px 1.25rem);
`,Bf=E.span`
    position: absolute;
    top: 0;
    bottom: 0;
    z-index: 2;
    cursor: ${e=>e.$interactive?"pointer":null===e.$interactive?"default":"not-allowed"};
`,Rf=E.div`
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
                color: ${Yi["text-disabled-subtlest"]};
            `;switch(r){case"selected":return _`
                    font-weight: ${Ui.Spec["weight-semibold"]};
                    color: ${Yi["text-selected"]};
                `;case"selected-hover":return _`
                    font-weight: ${Ui.Spec["weight-semibold"]};
                    color: ${Yi["text-selected-hover"]};
                `;case"current":return _`
                    font-weight: ${Ui.Spec["weight-semibold"]};
                    color: ${Yi["text-primary"]};
                `;case"hover":return _`
                    font-weight: ${Ui.Spec["weight-semibold"]};
                    color: ${Yi["text-hover"]};
                `;case"unavailable":return _`
                    color: ${Yi["text-disabled-subtlest"]};
                `;case"hidden":return _`
                    visibility: hidden;
                `;default:return _`
                    color: ${Yi.text};
                `}}}

    &:focus {
        outline: none;
    }
`,zf=E.div`
    position: absolute;
    width: 4px;
    height: 4px;
    background-color: currentColor;
    border-radius: 50%;
    bottom: 4px;
`,Pf=({bgLeft:r,bgRight:n,circleLeft:o,circleRight:i,labelType:a,disabled:l,interactive:d,currentDateIndicator:u,date:f,onSelect:h,onHover:p,onFocus:g,onHoverEnd:m,onKeyDown:b,tabIndex:v=-1,role:y="button",focusDate:x})=>{const w=Kc().isSame(f,"day"),$=`${f.format("D MMMM YYYY dddd")}, ${l?"Unavailable":"Available"}`,C=!!x&&x.isSame(f,"day"),S=s(null);c((()=>{var e;C&&S.current&&(null===(e=S.current)||void 0===e||e.focus())}),[C]);return e(Of,{children:[t(Tf,{$type:r}),t(Af,{$type:o}),t(If,{$type:n}),t(jf,{$type:i}),t(Bf,{$interactive:d,children:e(Rf,{ref:S,tabIndex:v,role:y,"aria-label":$,"aria-disabled":!d,"aria-selected":"selected"===a||"selected-hover"===a,$type:a,$disabled:l,$interactive:d,onClick:()=>{h(f)},onKeyDown:e=>{b&&b(e)},onMouseEnter:()=>{p(f)},onMouseLeave:()=>{m&&m(f)},onFocus:()=>{g&&g(f)},children:[f.date(),u&&w&&t(zf,{$disabled:l})]})})]})},Lf=({date:e,calendarDate:r,startDate:n,endDate:o,currentFocus:i,hoverDate:a,focusDate:s,minDate:l,maxDate:c,disabledDates:d,allowDisabledSelection:u,isNewSelection:f,showActiveMonthDaysOnly:h,onSelect:p,onHover:g,onFocus:m,setFocusCell:b,tabIndex:v=-1})=>{const y=id.isDisabledDay(e,d,l,c),x=!y||u,w=()=>{p(e,!x)},$=()=>{const e=Kc(a),t=e.isBefore(o,"day"),r=e.isAfter(n,"day");let s,l,c,d;return"start"===i&&o&&t&&(n&&r?(c=a,d=o):(s=a,l=n||o)),"end"===i&&n&&r&&(o&&t?(c=n,d=a):(s=o||n,l=a)),{hoverStart:s,hoverEnd:l,overlapStart:c,overlapEnd:d}},C={date:e,calendarDate:r,disabled:y,interactive:x,currentDateIndicator:!0,onSelect:w,onHover:()=>{g(e.format("YYYY-MM-DD"),!x)},onFocus:()=>{m(e.format("YYYY-MM-DD"))},onKeyDown:t=>{const r=t.key;if("Enter"===r||" "===r)return t.preventDefault(),void(x&&w());(t=>{let r;const n={ArrowLeft:()=>e.subtract(1,"day"),ArrowRight:()=>e.add(1,"day"),ArrowUp:()=>e.subtract(7,"day"),ArrowDown:()=>e.add(7,"day"),Home:()=>e.startOf("week"),End:()=>e.endOf("week"),PageUp:()=>t.shiftKey?e.subtract(1,"year"):e.add(1,"month"),PageDown:()=>t.shiftKey?e.subtract(1,"year"):e.add(1,"month")}[t.key];n&&(t.preventDefault(),r=n(),b(r.format("YYYY-MM-DD")))})(t)},role:"gridcell",focusDate:Kc(s),tabIndex:v};return t(Pf,Object.assign({},C,(()=>{const t={};if(r.month()!==e.month())t.labelType=h?"hidden":"unavailable";else if(Kc().isSame(e,"day")&&!y)t.labelType="current";else if(f){const r="end"===i&&n&&e.isBefore(n),a="start"===i&&o&&e.isAfter(o);(r||a)&&(t.labelType="unavailable")}return t})(),(()=>{const t={},i=e.isSame(n,"day"),a=e.isSame(o,"day");return h&&r.month()!==e.month()?(t.labelType="hidden",t):((n&&i||o&&a)&&(t.labelType="selected",t.circleLeft="selected-outline",t.circleRight="selected-outline"),n&&o&&e.isBetween(n,o,"day","[]")&&(t.labelType="selected",i||(t.bgLeft="selected-outline-subtle"),a||(t.bgRight="selected-outline-subtle")),t)})(),(()=>{if(!a)return{};const t={},r=e.isSame(a,"day"),{hoverStart:i,hoverEnd:s,overlapStart:l,overlapEnd:c}=$();if(r){const r=e.isSame(n,"day"),i=e.isSame(o,"day");r||i?(t.labelType="selected-hover",t.circleLeft="selected-hover-outline",t.circleRight="selected-hover-outline"):(t.labelType="hover",t.circleLeft="hover",t.circleRight="hover")}if(i&&s){if(e.isBetween(i,s,"day","[]")){const r=e.isSame(i,"day"),n=e.isSame(s,"day");r||(t.labelType="hover",t.bgLeft="hover-outline"),n||(t.labelType="hover",t.bgRight="hover-outline")}return t}return l&&c?(e.isBetween(l,c,"day","[]")&&r&&(t.labelType="selected-hover",t.circleLeft="selected-hover",t.circleRight="selected-hover"),t):t})()))};Kc.extend(Zc);const Nf=({calendarDate:r,currentFocus:n,disabledDates:o,selectedStartDate:i,selectedEndDate:l,onSelect:u,onHover:f,isNewSelection:h,minDate:p,maxDate:m,allowDisabledSelection:b,showActiveMonthDaysOnly:v,setCalendarDate:y})=>{const x=s(null);c((()=>{if(x.current){const e=x.current;x.current=null,k(e)}}),[r]);const w=d((()=>i&&Kc(i).isSame(r,"month")?Kc(i):l&&Kc(l).isSame(r,"month")?Kc(l):Kc().isSame(r,"month")?Kc():p&&r.isSame(Kc(p),"month")?Kc(p):Kc(r).startOf("month")),[i,r,l,p]),$=e=>{const t=Kc(e);if(id.isWithinRange(t,p?Kc(p):void 0,m?Kc(m):void 0)){if(!t.isSame(r,"month"))return null==y||y(e),void(x.current=e);k(e)}},C=a((()=>id.generateDays(r)),[r]),S=a((()=>w()),[w]),[D,k]=g(""),[E,_]=g(""),O=(e,t)=>{t&&!b||u(e)},F=(e,t)=>{t&&!b||(_(e),f(e))},T=e=>{_(e),f(e)},I=()=>{_(""),f("")};return e(Df,{role:"grid","aria-label":"Date grid","data-testid":"calendar-content",onBlur:e=>{e.currentTarget.contains(e.relatedTarget)||(k(""),_(""),f(""))},children:[C[0].map(((e,r)=>t(kf,{"aria-hidden":!0,children:Kc(e).format("ddd")},`week-day-${r}`))),C.map(((e,a)=>t(Ef,{role:"row","aria-label":`Week ${a+1}`,onMouseLeave:I,children:e.map(((e,a)=>t(Lf,{date:e,calendarDate:r,startDate:i,endDate:l,hoverDate:E,focusDate:D,currentFocus:n,minDate:p,maxDate:m,disabledDates:o,allowDisabledSelection:b,isNewSelection:h,showActiveMonthDaysOnly:v,onSelect:O,onHover:F,onFocus:T,setFocusCell:$,tabIndex:e.isSame(S,"day")?0:-1},`day-${a}`)))},a)))]})},Hf=({date:e,calendarDate:r,selectedDate:n,hoverDate:o,minDate:i,maxDate:a,disabledDates:s,allowDisabledSelection:l,numberOfDays:c=1,onSelect:d,onHover:u})=>{const f=id.isDisabledDay(e,s,i,a),h=!f||l,{start:p,end:g}=n?id.getFixedRangeStartEnd(ud.toDayjs(n),c):{start:void 0,end:void 0},{start:m,end:b}=o?id.getFixedRangeStartEnd(ud.toDayjs(o),c):{start:void 0,end:void 0},v=!!n&&e.isBetween(p,g,"day","[]"),y=!!o&&e.isBetween(m,b,"day","[]"),x=v&&e.isSame(p,"day")||y&&e.isSame(m,"day"),w=v&&e.isSame(g,"day")||y&&e.isSame(b,"day"),$=(e,t,r,n)=>{r?e.circleLeft=t:e.bgLeft=t,n?e.circleRight=t:e.bgRight=t},C={date:e,calendarDate:r,disabled:f,interactive:h,currentDateIndicator:!0,onSelect:()=>{d(e,!h)},onHover:()=>{u(e.format("YYYY-MM-DD"),!h)}};return t(Pf,Object.assign({},C,(()=>{const t={};return v||y?t.labelType="selected":r.month()!==e.month()?t.labelType="unavailable":Kc().isSame(e,"day")&&!f&&(t.labelType="current"),t})(),(()=>{const t={},r=e.format("YYYY-MM-DD");return y&&$(t,"hover",r===m,r===b),v&&$(t,"selected-outline",r===p,r===g),v&&y&&($(t,"selected-hover-outline",x,w),r===m&&r!==p&&(t.circleLeft="selected-hover")),t})()))},Wf=({calendarDate:r,disabledDates:n,selectedStartDate:o,onSelect:i,onHover:s,minDate:l,maxDate:c,allowDisabledSelection:d,numberOfDays:u})=>{const f=a((()=>id.generateDays(r)),[r]),[h,p]=g(""),m=(e,t)=>{t&&!d||(i(e),e&&!Kc(e).isSame(e,"month")&&p(""))},b=(e,t)=>{t&&!d||(p(e),s(e))},v=()=>{p(""),s("")};return e(Df,{"data-testid":"calendar-content",children:[f[0].map(((e,r)=>t(kf,{children:Kc(e).format("ddd")},`week-day-${r}`))),f.map(((e,i)=>t(Ef,{onMouseLeave:v,children:e.map(((e,i)=>t(Hf,{date:e,calendarDate:r,selectedDate:o,hoverDate:h,minDate:l,maxDate:c,disabledDates:n,allowDisabledSelection:d,onSelect:m,onHover:b,numberOfDays:u},`day-${i}`)))},i)))]})},Vf=E.div`
    width: 100%;
    background: ${Yi.bg};
`,Yf=({date:e,calendarDate:r,selectedDate:n,hoverDate:o,minDate:i,maxDate:a,disabledDates:s,allowDisabledSelection:l,showActiveMonthDaysOnly:c,onSelect:d,onHover:u})=>{const f=id.isDisabledDay(e,s,i,a),h=!f||l,p={date:e,calendarDate:r,disabled:f,interactive:h,currentDateIndicator:!0,onSelect:()=>{d(e,!h)},onHover:()=>{u(e.format("YYYY-MM-DD"),!h)}};return t(Pf,Object.assign({},p,(()=>{const t={};r.month()!==e.month()?t.labelType=c?"hidden":"unavailable":Kc().isSame(e,"day")&&!f&&(t.labelType="current");const i=e.isSame(n,"day"),a=e.isSame(o,"day");return i&&a?(t.labelType="selected-hover",t.circleLeft="selected-hover-outline",t.circleRight="selected-hover-outline"):i?(t.labelType="selected",t.circleLeft="selected-outline",t.circleRight="selected-outline"):a&&(t.labelType="hover",t.circleLeft="hover-subtle",t.circleRight="hover-subtle"),t})()))};Kc.extend(Zc);const Uf=({calendarDate:r,disabledDates:n,selectedDate:o,onSelect:i,onHover:s,minDate:l,maxDate:c,allowDisabledSelection:d,showActiveMonthDaysOnly:u})=>{const f=a((()=>id.generateDays(r)),[r]),[h,p]=g(""),m=(e,t)=>{t&&!d||i(e)},b=(e,t)=>{t&&!d||(p(e),s(e))},v=()=>{p(""),s("")};return e(Df,{"data-testid":"calendar-content",children:[f[0].map(((e,r)=>t(kf,{children:Kc(e).format("ddd")},`week-day-${r}`))),f.map(((e,i)=>t(Ef,{onMouseLeave:v,children:e.map(((e,i)=>t(Yf,{date:e,calendarDate:r,selectedDate:o,hoverDate:h,minDate:l,maxDate:c,disabledDates:n,allowDisabledSelection:d,showActiveMonthDaysOnly:u,onSelect:m,onHover:b},`day-${i}`)))},i)))]})},Kf=({date:e,calendarDate:r,selectedDate:n,hoverDate:o,minDate:i,maxDate:a,disabledDates:s,allowDisabledSelection:l,onSelect:c,onHover:d})=>{const u=id.isDisabledDay(e,s,i,a),f=!u||l,{start:h,end:p}=id.getWeekStartEnd(ud.toDayjs(n)),{start:g,end:m}=id.getWeekStartEnd(ud.toDayjs(o)),b=n&&e.isBetween(h,p,"day","[]"),v=o&&e.isBetween(g,m,"day","[]"),y=b&&e.isSame(h)||v&&e.isSame(g),x=b&&e.isSame(p)||v&&e.isSame(m),w={date:e,calendarDate:r,disabled:u,interactive:f,currentDateIndicator:!0,onSelect:()=>{c(e,!f)},onHover:()=>{d(e.format("YYYY-MM-DD"),!f)}};return t(Pf,Object.assign({},w,(()=>{const t={};return r.month()!==e.month()?t.labelType="unavailable":Kc().isSame(e,"day")&&!u&&(t.labelType="current"),t})(),(()=>{const e={};let t,r;return b&&v?(t="selected-hover-outline",r="selected-hover"):b?(t="selected-outline",r="selected"):v&&(t="hover",r="hover"),t&&(e.labelType=r,y?e.circleLeft=t:e.bgLeft=t,x?e.circleRight=t:e.bgRight=t),e})()))},qf=({calendarDate:r,disabledDates:n,selectedStartDate:o,onSelect:i,onHover:s,minDate:l,maxDate:c,allowDisabledSelection:d})=>{const u=a((()=>id.generateDays(r)),[r]),[f,h]=g(""),p=(e,t)=>{if(t&&!d)return;const r=e.startOf("week");i(r),e&&!Kc(e).isSame(r,"month")&&h("")},m=(e,t)=>{t&&!d||(h(e),s(e))},b=()=>{h(""),s("")};return e(Df,{"data-testid":"calendar-content",children:[u[0].map(((e,r)=>t(kf,{children:Kc(e).format("ddd")},`week-day-${r}`))),u.map(((e,i)=>t(Ef,{onMouseLeave:b,children:e.map(((e,i)=>t(Kf,{date:e,calendarDate:r,selectedDate:o,hoverDate:f,minDate:l,maxDate:c,disabledDates:n,allowDisabledSelection:d,onSelect:p,onHover:m},`day-${i}`)))},i)))]})},Gf=o.forwardRef((({disabledDates:e,onYearMonthDisplayChange:r,onSelect:n,onHover:o,onDismiss:i,value:a,endValue:l,currentFocus:c,withButton:d,variant:u,minDate:h,maxDate:p,allowDisabledSelection:g,selectWithinRange:m=!0,initialCalendarDate:b,numberOfDays:v,showActiveMonthDaysOnly:y=!1,isFocusable:x=!1},w)=>{const $=s(null),C=s(void 0);f(w,(()=>({reset(){var e;null===(e=$.current)||void 0===e||e.resetView()},setCalendarDate(e){var t;null===(t=$.current)||void 0===t||t.setCalendarDate(e)}})));const S=e=>{var t;const r=e.format("YYYY-MM-DD");null===(t=$.current)||void 0===t||t.setCalendarDate(r),k(r)},D=e=>{E(e)},k=e=>{n&&n(e)},E=e=>{o&&o(e)},_=e=>{if(r){const t={month:e.month()+1,year:e.year()};r(t)}};return t(Vf,{children:t(Sf,{ref:$,withButton:d,doneButtonDisabled:(()=>{if(!d)return;let e=!0;switch(u){case"single":e=!1;break;case"range":case"fixed-range":e=!!a!=!!l;break;case"week":e=!a&&!l}return e})(),onDismiss:i,minDate:h,maxDate:p,selectWithinRange:m,currentFocus:c,selectedStartDate:a,selectedEndDate:l,allowDisabledSelection:g,onCalendarDateChange:e=>{var t;C.current&&C.current.isSame(e,"month")||(null===(t=$.current)||void 0===t||t.setCalendarDate(e.format("YYYY-MM-DD")),_(e)),C.current=e},initialCalendarDate:b,isFocusable:x,children:({calendarDate:r})=>(r=>{var n;switch(u){case"week":return t(qf,{calendarDate:r,disabledDates:e,selectedStartDate:a,minDate:h,maxDate:p,allowDisabledSelection:g,onSelect:S,onHover:D});case"fixed-range":return t(Wf,{calendarDate:r,disabledDates:e,selectedStartDate:a,minDate:h,maxDate:p,allowDisabledSelection:g,onSelect:S,onHover:D,numberOfDays:v});case"single":return t(Uf,{calendarDate:r,disabledDates:e,selectedDate:a,minDate:h,maxDate:p,allowDisabledSelection:g,showActiveMonthDaysOnly:y,onSelect:S,onHover:D});default:return t(Nf,{calendarDate:r,currentFocus:c,disabledDates:e,selectedStartDate:a,selectedEndDate:l,minDate:h,maxDate:p,isNewSelection:m,allowDisabledSelection:g,showActiveMonthDaysOnly:y,onSelect:S,onHover:D,setCalendarDate:null===(n=$.current)||void 0===n?void 0:n.setCalendarDate})}})(r)})})})),Qf=o.forwardRef(((e,r)=>{var{width:n}=e,o=lt(e,["width"]);return t(Ou,{$width:n,"data-testid":"calendar-dropdown",children:t(Gf,Object.assign({ref:r},o))})})),Zf=_`
    outline-offset: -1px;
    outline: ${qi["width-020"]} ${qi.solid} ${Yi["border-focus"]};
`,Xf=_`
    outline-color: ${Yi["border-focus"]};
`,Jf=_`
    outline-color: ${Yi["border-disabled"]};
`,eh=_`
    outline-color: ${Yi["border-error-focus"]};
`,th=E.div`
    border: ${qi["width-010"]} ${qi.solid} ${Yi.border};
    border-radius: ${Qi.sm};
    background: ${Yi.bg};

    :focus-within {
        ${Zf}
    }
    ${e=>e.$focused&&Zf}

    ${e=>e.$readOnly?_`
                border-color: transparent;
                padding: 0;
                background: transparent !important;

                :focus-within {
                    ${Xf}
                }
                ${e.$focused&&Xf}
            `:e.$disabled?_`
                background: ${Yi["bg-disabled"]};
                cursor: not-allowed;

                :focus-within {
                    ${Jf}
                }
                ${e.$focused&&Jf}
            `:e.$error?_`
                border-color: ${Yi["border-error"]};

                :focus-within {
                    ${eh}
                }
                ${e.$focused&&eh}
            `:void 0}
`,rh=E(th)`
    display: flex;
    align-items: center;
    position: relative;
    height: max-content;
    width: 100%;
    padding: 0 ${Gi["spacing-16"]};
    flex-direction: ${e=>"right"===e.$position?"row-reverse":"row"};
`,nh=E.input`
    ${e=>"small"===e.$variant?Ui["body-md-regular"]:Ui["body-baseline-regular"]}
    color: ${Yi.text};
    display: block;
    background: transparent;
    border: none;
    outline: none;
    box-shadow: none;
    padding: 0;
    margin: 0;

    :disabled {
        color: ${Yi["text-subtler"]};

        :hover {
            cursor: not-allowed;
        }
    }

    ::placeholder,
    ::-webkit-input-placeholder {
        color: ${Yi["text-subtler"]};
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
`,oh=E.button`
    background: transparent;
    border: none;
    outline: none;

    :focus,
    :active {
        outline: none;
    }

    :focus-visible {
        outline: ${qi["width-010"]} ${qi.solid}
            ${Yi["border-focus"]};
        border-radius: ${Qi.sm};
    }
`,ih=E.div`
    display: flex;
    align-items: center;
    position: relative;

    flex: 1;
`,ah=E.div`
    display: flex;
    align-items: center;

    ${e=>{if(e.$hover)return _`
                ${sh}, ${uh} {
                    color: ${Yi["text-subtler"]};
                }
            `}}
`,sh=E(nh)`
    background: transparent;
    text-align: center;
`,lh=E(sh)`
    width: 2rem;
    margin-right: ${Gi["spacing-4"]};
`,ch=E(sh)`
    width: 2.5rem;
`,dh=E(sh)`
    width: 3rem;
    margin-left: ${Gi["spacing-4"]};
`,uh=E.span`
    ${Ui["body-baseline-regular"]}
    ${e=>{if(e.$inactive)return _`
                color: ${Yi.text};
            `}}
`,fh=E.div`
    ${Ui["body-baseline-regular"]}
    background-color: ${Yi.bg};
    color: ${Yi["text-subtler"]};
    position: absolute;
    display: flex;
    align-items: center;
    width: 100%;
    height: 100%;

    ${e=>e.$disabled?_`
                background-color: ${Yi["bg-disabled"]};
                cursor: not-allowed;
            `:e.$hide?_`
                display: none;
            `:void 0}
`;Kc.extend(Gc);const hh=o.forwardRef((({disabled:r,readOnly:n,names:o,value:i,focused:a,hoverValue:l,placeholder:d,label:u,onChange:h,onFocus:p,onBlur:m,hideInputKeyboard:b},v)=>{const y=b?"none":"numeric",[x,w,$]=xd(""),[C,S,D]=xd(""),[k,E,_]=xd(""),[O,F]=g("none"),[T,I]=g(!1),M=s(null),A=s(null),j=s(null),B=s(null),[R,z,P]=Y(l);c((()=>{var e;const[t="",r="",n=""]=Y(i);w(t),S(r),E(n),t||r||n||!M.current||!M.current.contains(document.activeElement)||null===(e=A.current)||void 0===e||e.focus()}),[i]),c((()=>{var e;a||F("none"),a&&(I(!0),M.current&&!M.current.contains(document.activeElement)&&(null===(e=A.current)||void 0===e||e.focus()))}),[a]),f(v,(()=>({ref:M,resetPlaceholder(){I(!1)},resetInput(){const[e="",t="",r=""]=Y(i);w(e),S(t),E(r)}})),[i]);const L=e=>{var t;e.preventDefault(),null===(t=A.current)||void 0===t||t.focus()},N=e=>{e.target.select();const t=e.target.name;F(t)},H=e=>{const[t,r,n]=o,i={[t]:$.current,[r]:D.current,[n]:_.current},a=e.target.name,s=i[a],l=a!==n?pd.padValue(s,!0):s;switch(a){case t:i[t]=l,w(l);break;case r:i[r]=l,S(l)}const c=`${i[n]}-${i[r]}-${i[t]}`,d=Kc(c,"YYYY-MM-DD",!0).isValid(),u=!i[t]&&!i[r]&&!i[n];d&&s!==l&&h(c),M.current&&!M.current.contains(e.relatedTarget)&&(F("none"),null==m||m(u||d))},W=e=>{var t,r;if(l)return;const n=e.target.name,i=e.target.value.replace(/[^0-9]/g,""),a={day:x,month:C,year:k};switch(n){case o[0]:a.day=i,w(i),2===i.length&&(null===(t=j.current)||void 0===t||t.focus());break;case o[1]:a.month=i,S(i),2===i.length&&(null===(r=B.current)||void 0===r||r.focus());break;case o[2]:a.year=i,E(i)}if(!a.day&&!a.month&&!a.year)return void h("");const s=`${a.year}-${a.month}-${a.day}`;Kc(s,"YYYY-MM-DD",!0).isValid()&&h(s)},V=e=>{var t,r;"Backspace"!==e.code&&"Backspace"!==e.key||(O===o[1]&&0===C.length&&(null===(t=A.current)||void 0===t||t.focus()),O===o[2]&&0===k.length&&(null===(r=j.current)||void 0===r||r.focus()))};function Y(e){if(e){const t=Kc(new Date(e));return t.isValid()?[pd.padValue(t.date().toString()),pd.padValue((t.month()+1).toString()),t.year().toString()]:[void 0,void 0,void 0]}return[void 0,void 0,void 0]}return e(ih,{role:"group","aria-label":u,onClick:()=>{var e;r||n||(I(!0),M.current&&!M.current.contains(document.activeElement)&&(null===(e=A.current)||void 0===e||e.focus()))},onFocus:e=>{r||(I(!0),a||null==p||p(e))},children:[e(ah,{ref:M,$hover:!!l,children:[t(lh,{ref:A,name:o[0],maxLength:2,value:null!=R?R:x,onFocus:N,onBlur:H,onChange:W,type:"text",inputMode:y,pattern:"[0-9]{2}","data-testid":`${o[0]}-input`,"aria-label":"day",disabled:r,readOnly:n,tabIndex:n?-1:0,autoComplete:"off",placeholder:O!==o[0]||n?"DD":""}),t(uh,{$inactive:0===x.length,children:"/"}),t(ch,{ref:j,name:o[1],maxLength:2,value:null!=z?z:C,onFocus:N,onBlur:H,onChange:W,onKeyDown:V,type:"text",inputMode:y,pattern:"[0-9]{2}","data-testid":`${o[1]}-input`,"aria-label":"month",disabled:r,readOnly:n,tabIndex:n?-1:0,autoComplete:"off",placeholder:O!==o[1]||n?"MM":""}),t(uh,{$inactive:0===C.length,children:"/"}),t(dh,{ref:B,name:o[2],maxLength:4,value:null!=P?P:k,onFocus:N,onBlur:H,onChange:W,onKeyDown:V,type:"text",inputMode:y,pattern:"[0-9]{4}","data-testid":`${o[2]}-input`,"aria-label":"year",disabled:r,readOnly:n,tabIndex:n?-1:0,autoComplete:"off",placeholder:O!==o[2]||n?"YYYY":""})]}),(()=>{if(!i&&!n&&d)return t(fh,{$hide:T,$disabled:r,onMouseDown:L,children:d})})()]})})),ph=E(rh)`
    height: 3rem;
`,gh=e=>{var{minDate:r,maxDate:n,disabled:o,disabledDates:i,error:a,hideInputKeyboard:l,value:d,onChange:u,onFocus:f,onBlur:h,onYearMonthDisplayChange:p,withButton:m=!0,readOnly:b,id:v,allowDisabledSelection:y,zIndex:x,dropdownRootNode:w}=e,$=lt(e,["minDate","maxDate","disabled","disabledDates","error","hideInputKeyboard","value","onChange","onFocus","onBlur","onYearMonthDisplayChange","withButton","readOnly","id","allowDisabledSelection","zIndex","dropdownRootNode"]);const[C,S]=g(fd.sanitizeInput(d)),[D,k]=g(fd.sanitizeInput(d)),[E,_]=g(void 0),[O,F]=g(!1),[T,I]=g(!1),M=s(null),A=s(null);c((()=>{const e=fd.sanitizeInput(d);S(e),k(e)}),[d]);const j=e=>{!y&&fd.isDateDisabled(e,{disabledDates:i,minDate:r,maxDate:n})||(k(e),m||(N(e),S(e),e&&F(!1)))},B=e=>{var t;k(e),m||(N(e),S(e),e&&(null===(t=M.current)||void 0===t||t.focus(),F(!1)),E&&_(void 0))},R=()=>{b||o||(F(!0),T||(I(!0),f&&f()))},z=e=>{var t;T&&!O&&M.current&&!M.current.contains(e.relatedTarget)&&(null===(t=A.current)||void 0===t||t.resetInput(),k(C),I(!1),H())},P=e=>{_(e)},L=e=>{var t;switch(e){case"reset":k(C);break;case"confirmed":S(D),N(D)}null===(t=M.current)||void 0===t||t.focus(),F(!1)},N=e=>{u&&u(e)},H=()=>{h&&h()};return t(_u,{enabled:!b&&!o,isOpen:O,renderElement:()=>t(ph,Object.assign({tabIndex:-1,ref:M,onBlur:z,onFocus:R,$disabled:o,$readOnly:b,$focused:T,$error:a,id:v,"data-testid":$["data-testid"]},$,{children:t(hh,{ref:A,disabled:o,onChange:j,readOnly:b,focused:O,names:["start-day","start-month","start-year"],value:D,hoverValue:E,hideInputKeyboard:l})})),renderDropdown:({elementWidth:e})=>t(Qf,{variant:"single",initialCalendarDate:D,withButton:m,value:D,disabledDates:i,minDate:r,maxDate:n,allowDisabledSelection:y,onHover:P,onSelect:B,onDismiss:L,onYearMonthDisplayChange:p,width:e}),onClose:()=>{var e;null===(e=A.current)||void 0===e||e.resetInput(),k(C),F(!1),I(!1),H()},onDismiss:()=>{var e,t;null===(e=A.current)||void 0===e||e.resetInput(),null===(t=M.current)||void 0===t||t.focus(),k(C),F(!1)},customZIndex:x,offset:16,rootNode:w})},mh=E.div`
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
                            ${Gi["spacing-16"]}
                    );
                    flex: unset;
                }

                [data-id="range-container-elem2-container"] {
                    margin-top: ${Gi["spacing-8"]};
                }
            `}}
`,bh=E.div`
    width: 100%; // Force next flex item to break to next line
`,vh=E.div`
    display: flex;
    flex: 1;
    align-items: center;
`,yh=E(ie)`
    color: ${Yi.icon};
    width: ${Ui.Spec["body-size-baseline"]};
    height: ${Ui.Spec["body-size-baseline"]};
    flex-shrink: 0;
    margin: 0 ${Gi["spacing-8"]};
    align-self: center;
`,xh=E.div`
    position: absolute;
    background: ${e=>e.$error?Yi["border-error-focus-strong"]:Yi["border-focus-strong"]};
    height: 2px;
    // half - half padding - half icon width
    width: calc(
        50% - ${Gi["spacing-8"]} - (${Ui.Spec["body-size-baseline"]} / 2)
    );
    transition: left ${Ki["duration-350"]} ${Ki["ease-standard"]},
        opacity ${Ki["duration-350"]} ${Ki["ease-standard"]};
    left: 0;
    bottom: 0;

    ${e=>{switch(e.$position){case"start":return _`
                    opacity: 1;
                `;case"end":return _`
                    left: calc(50% + ${Gi["spacing-16"]});
                    opacity: 1;
                `;case"none":return _`
                    opacity: 0;
                `}}}

    ${e=>{if(e.$wrap)return _`
                display: none;
            `}}
`,wh=({children:r,currentActive:n,error:o,className:i,wrap:a})=>{const[s,l]=r;return e(mh,{className:i,$wrap:a,children:[t(vh,{"data-id":"range-container-elem1-container",children:s}),t(yh,{}),a&&t(bh,{}),t(vh,{"data-id":"range-container-elem2-container",children:l}),t(xh,{"data-id":"range-container-indicator",$position:n,$error:o,$wrap:a})]})},$h=(e,t,r)=>{const n=[];e&&n.push(`[${e}]`),n.push(t,r),console.log(...n)},Ch=E(rh)`
    ${e=>e.$wrap&&_`
            padding: ${Gi["spacing-12"]} ${Gi["spacing-16"]};
        `}
`,Sh=E.div`
    display: flex;
    align-items: center;
    height: calc(3rem - 2px); // exclude top and bottom borders
    width: 100%;

    ${e=>e.$wrap&&_`
            height: fit-content;
        `}
`,Dh={initialStart:"",initialEnd:"",selectedStart:"",selectedEnd:"",currentFocus:"none",calendarOpen:!1,isStartDirty:!1,isEndDirty:!1,focused:!1},kh=r=>{var{minDate:n,maxDate:o,disabled:i,disabledDates:a,error:u,hideInputKeyboard:f,value:h,valueEnd:p,onChange:m,onFocus:b,onBlur:v,onYearMonthDisplayChange:y,withButton:x=!0,variant:w="range",numberOfDays:$=7,readOnly:C,id:S,allowDisabledSelection:D,zIndex:k,dropdownRootNode:E}=r,_=lt(r,["minDate","maxDate","disabled","disabledDates","error","hideInputKeyboard","value","valueEnd","onChange","onFocus","onBlur","onYearMonthDisplayChange","withButton","variant","numberOfDays","readOnly","id","allowDisabledSelection","zIndex","dropdownRootNode"]);const[O,F]=g(),[T,I]=g(void 0),[M,A]=g(!1),[j,B]=g(!1),R="week"===w,z="fixed-range"===w,[{selectedStart:P,selectedEnd:L,currentFocus:N,calendarOpen:H,isStartDirty:W,isEndDirty:V,focused:Y},U]=(({initialState:e,reducers:t,name:r,debug:n})=>{const[o,i]=l(((e,r)=>t[r.type]?t[r.type](e,r.payload):e),e);return[o,Object.fromEntries(Object.keys(t).map((e=>[e,t=>{n&&$h(r,e,t),i({type:e,payload:t})}])))]})({name:"date-range-input",initialState:Dh,reducers:{blur:e=>Object.assign(Object.assign({},e),{selectedStart:e.initialStart,selectedEnd:e.initialEnd,currentFocus:"none",calendarOpen:!1,isStartDirty:!1,isEndDirty:!1,focused:!1}),dismiss:e=>Object.assign(Object.assign({},e),{selectedStart:e.initialStart,selectedEnd:e.initialEnd,currentFocus:"none",calendarOpen:!1,isStartDirty:!1,isEndDirty:!1}),changeStart:(e,t)=>Object.assign(Object.assign({},e),{selectedStart:t,isStartDirty:!0}),changeEnd:(e,t)=>Object.assign(Object.assign({},e),{selectedEnd:t,isEndDirty:!0}),reselectStart:e=>Object.assign(Object.assign({},e),{selectedStart:"",currentFocus:"start"}),reselectEnd:e=>Object.assign(Object.assign({},e),{selectedEnd:"",currentFocus:"end"}),focus:(e,t)=>Object.assign(Object.assign({},e),{currentFocus:R?"none":z?"start":t,calendarOpen:!C,focused:!0}),cancel:e=>Object.assign(Object.assign({},e),{selectedStart:e.initialStart,selectedEnd:e.initialEnd,currentFocus:"none",calendarOpen:!1}),done:(e,t)=>Object.assign(Object.assign({},e),{selectedStart:t.start,selectedEnd:t.end,initialStart:t.start,initialEnd:t.end,currentFocus:"none",calendarOpen:!1,isStartDirty:!1,isEndDirty:!1}),resetStart:e=>Object.assign(Object.assign({},e),{selectedStart:e.initialStart}),resetEnd:e=>Object.assign(Object.assign({},e),{selectedEnd:e.initialEnd}),resetRange:(e,t)=>Object.assign(Object.assign({},e),{initialStart:t.start,selectedStart:t.start,initialEnd:t.end,selectedEnd:t.end})}}),K=s(!1),q=s(null),G=s(null),Q=s(null),Z=s(null),X=(({maxWidth:e,targetRef:t})=>{const[r,n]=g(!1);return Lc({targetRef:t,refreshMode:"throttle",refreshRate:300,handleHeight:!1,onResize:d((t=>{n(t<=e)}),[e])}),r})({maxWidth:320,targetRef:q});c((()=>{U.resetRange({start:fd.sanitizeInput(h),end:fd.sanitizeInput(p)})}),[h,p]),c((()=>{"start"===N?F(P):"end"===N&&F(L)}),[N]);const J=e=>{var t,r,n;"Enter"!==e.code||x||(P&&L?(U.done({start:P,end:L}),null==m||m(P,L)):(U.dismiss(),null===(t=q.current)||void 0===t||t.focus(),null===(r=Q.current)||void 0===r||r.resetPlaceholder(),null===(n=Z.current)||void 0===n||n.resetPlaceholder()))},ee=e=>{var t;if(he(e))return void(K.current=!0);if(U.changeStart(e),null===(t=G.current)||void 0===t||t.setCalendarDate(e),K.current=!1,!e)return void(x||L||!V||(U.resetRange({start:"",end:""}),null==m||m("","")));if(!L)return void U.focus("end");if(Kc(e).isAfter(L,"day"))U.reselectEnd();else{if(V)return x?void 0:(U.done({start:e,end:L}),void(null==m||m(e,L)));U.focus("end")}},te=e=>{var t,r;if(he(e))return void(K.current=!0);if(Kc(e).isBefore(P,"day"))return U.changeStart(e),null===(t=G.current)||void 0===t||t.setCalendarDate(e),void U.reselectEnd();if(U.changeEnd(e),null===(r=G.current)||void 0===r||r.setCalendarDate(e),e){if(P)return x?void 0:(U.done({start:P,end:e}),void(null==m||m(P,e)));U.focus("start")}else x||P||!W||(U.resetRange({start:"",end:""}),null==m||m("",""))},re=e=>{var t;if(he(e))return void(K.current=!0);if(U.changeStart(e),null===(t=G.current)||void 0===t||t.setCalendarDate(e),K.current=!1,!e)return void(x?U.changeEnd(""):(U.resetRange({start:"",end:""}),null==m||m("","")));const r=Kc(e).format("YYYY-MM-DD"),n=Kc(r).add($-1,"day").format("YYYY-MM-DD");return U.changeStart(r),U.changeEnd(n),K.current=!1,x?void 0:(U.done({start:r,end:n}),void(null==m||m(r,n)))},ne=()=>{C||i||Y||(U.focus("start"),null==b||b())},oe=e=>{var t,r;Y&&!H&&q.current&&q.current.contains(e.relatedTarget)&&(U.blur(),A(!1),B(!1),null===(t=Q.current)||void 0===t||t.resetPlaceholder(),null===(r=Z.current)||void 0===r||r.resetPlaceholder(),null==v||v())},ie=e=>t=>{t.stopPropagation(),C||(U.focus(e),ae(),se(),Y||null==b||b())},ae=()=>{if(R){const e=ud.toDayjs(P).startOf("week").format("YYYY-MM-DD");A(!0),B(!0),F(e)}},se=()=>{z&&(B(!0),F(P))},le=e=>{var t;e&&!K.current||(U.resetStart(),null===(t=Q.current)||void 0===t||t.resetInput())},ce=e=>{var t;e&&!K.current||(U.resetEnd(),null===(t=Z.current)||void 0===t||t.resetInput())},de=e=>{switch(w){case"week":(e=>{const t=Kc(e).startOf("week").format("YYYY-MM-DD"),r=Kc(e).endOf("week").format("YYYY-MM-DD");if(U.changeStart(t),U.changeEnd(r),K.current=!1,!x)U.done({start:t,end:r}),null==m||m(t,r)})(e);break;case"fixed-range":re(e);break;default:"start"===N?ee(e):"end"===N&&te(e)}},ue=e=>{var t;switch(null===(t=q.current)||void 0===t||t.focus(),e){case"reset":U.cancel();break;case"confirmed":U.done({start:P,end:L}),null==m||m(P,L)}},fe=e=>{I(e)},he=e=>!D&&e&&fd.isDateDisabled(e,{disabledDates:a,minDate:n,maxDate:o}),pe=e=>{let t={start:void 0,end:void 0};switch(w){case"range":t={start:"start"===N?T:void 0,end:"end"===N?T:void 0};break;case"week":if(!T)return;t={start:Kc(T).startOf("week").format("YYYY-MM-DD"),end:Kc(T).endOf("week").format("YYYY-MM-DD")};break;case"fixed-range":if(!T)return;t={start:Kc(T).format("YYYY-MM-DD"),end:Kc(T).add($-1,"day").format("YYYY-MM-DD")}}return t[e]};return t(_u,{enabled:!C&&!i,isOpen:H,onClose:()=>{var e,t;U.blur(),A(!1),B(!1),null===(e=Q.current)||void 0===e||e.resetPlaceholder(),null===(t=Z.current)||void 0===t||t.resetPlaceholder(),null==v||v()},onDismiss:()=>{var e,t,r;U.dismiss(),null===(e=q.current)||void 0===e||e.focus(),null===(t=Q.current)||void 0===t||t.resetPlaceholder(),null===(r=Z.current)||void 0===r||r.resetPlaceholder()},renderElement:()=>t(Ch,Object.assign({ref:q,tabIndex:-1,onFocus:ne,onBlur:oe,$focused:Y,$disabled:i,$readOnly:C,$error:u,$wrap:X,id:S,"data-testid":_["data-testid"],onKeyDown:J},_,{children:e(wh,{currentActive:N,wrap:X,error:u,children:[t(Sh,{$wrap:X,children:t(hh,{ref:Q,placeholder:"From",names:["start-day","start-month","start-year"],value:P,disabled:i,readOnly:M||C,focused:"start"===N,hoverValue:pe("start"),onChange:z?re:ee,onFocus:ie("start"),onBlur:le,hideInputKeyboard:f})}),t(Sh,{$wrap:X,children:t(hh,{ref:Z,placeholder:"To",names:["end-day","end-month","end-year"],value:L,disabled:i,readOnly:j||C,focused:"end"===N,hoverValue:pe("end"),onChange:te,onFocus:ie("end"),onBlur:ce,hideInputKeyboard:f})})]})})),renderDropdown:({elementWidth:e})=>t(Qf,{ref:G,variant:w,initialCalendarDate:O,withButton:x,value:P,endValue:L,selectWithinRange:W||V,currentFocus:N,disabledDates:a,minDate:n,maxDate:o,allowDisabledSelection:D,onSelect:de,onDismiss:ue,onHover:fe,onYearMonthDisplayChange:y,numberOfDays:$,width:e}),customZIndex:k,offset:16,rootNode:E})},Eh=E(Gu)`
    flex-direction: ${e=>"right"===e.$buttonIconPosition?"row-reverse":"row"};
    gap: 0.5rem;

    svg {
        flex-shrink: 0;
        height: 1em;
        width: 1em;
    }
`,_h=(r,n)=>{const{children:o,disabled:i=!1,styleType:a="default",danger:s=!1,icon:l,iconPosition:c="left",loading:d=!1}=r,u=lt(r,["children","disabled","styleType","danger","icon","iconPosition","loading"]),f={$buttonIconPosition:c,$buttonStyle:i?"disabled":a,$buttonSizeStyle:"default",$buttonIsDanger:s};return e(Eh,Object.assign({ref:n,"data-testid":u["data-testid"]||"button-with-icon",disabled:i},f,u,{children:[d?t(Bu,{}):l,t("span",{children:o})]}))};_h.displayName="ButtonWithIcon.Default";const Oh=(r,n)=>{const{children:o,disabled:i=!1,styleType:a="default",danger:s=!1,icon:l,iconPosition:c="left",loading:d=!1}=r,u=lt(r,["children","disabled","styleType","danger","icon","iconPosition","loading"]),f={$buttonIconPosition:c,$buttonStyle:i?"disabled":a,$buttonSizeStyle:"small",$buttonIsDanger:s};return e(Eh,Object.assign({ref:n,"data-testid":u["data-testid"]||"button-with-icon",disabled:i},f,u,{children:[d?t(Bu,{}):l,t("span",{children:o})]}))};Oh.displayName="ButtonWithIcon.Small";const Fh={Default:o.forwardRef(_h),Small:o.forwardRef(Oh)},Th=({className:e,progress:r,color:n,"data-testid":o})=>t(Ih,{className:e,$innerWidth:r,$color:n,"data-testid":o,children:t("progress",{value:100*r,max:100})}),Ih=E.div`
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

    ${e=>{const{$color:t}=e;let r;return r=t&&"string"==typeof t?t:t?t(e):Yi["icon-primary-subtle"](e),_`
            border: ${qi["width-010"]} ${qi.solid} ${r};
            border-radius: ${Qi.sm};

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
`,Mh=E.button`
    align-items: center;
    border-radius: 0.25rem;
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
                    background-color: ${Yi.bg};
                    border: ${qi["width-010"]} ${qi.solid}
                        ${Yi["border-primary"]};
                    color: ${Yi["text-primary"]};

                    :hover {
                        background-color: ${Yi["bg-hover-neutral"]};
                    }
                `;case"light":return _`
                    background-color: ${Yi.bg};
                    border: ${qi["width-010"]} ${qi.solid}
                        ${Yi.border};
                    color: ${Yi["text-primary"]};

                    :hover {
                        background-color: ${Yi["bg-hover-neutral"]};
                    }
                `;default:return _`
                    background-color: ${Yi["bg-primary"]};
                    border: none;
                    color: ${Yi["text-inverse"]};

                    :hover {
                        background-color: ${Yi["bg-primary-hover"]};
                    }
                `}}}

    &:disabled {
        background-color: ${Yi["bg-disabled"]};
        border: ${qi["width-010"]} ${qi.solid}
            ${Yi["border-disabled"]};
        color: ${Yi["text-disabled"]};
        cursor: not-allowed;
    }
`,Ah=o.forwardRef(((e,r)=>{var{"data-testid":n,styleType:o="primary",children:i,sizeType:a="default",type:s="button"}=e,l=lt(e,["data-testid","styleType","children","sizeType","type"]);return t(Mh,Object.assign({"data-testid":n||"iconButton",ref:r,type:s,$sizeType:a,$styleType:o},l,{children:i}))})),jh=Object.assign(Fd,{Box:Bd}),Bh=_`
    ${e=>`\n        ${Xi.MaxWidth.sm(e)},\n        (orientation: landscape) and (max-height: ${Zi["sm-max"](e)}px)\n    `}
`,Rh=_`
    ${e=>`\n        @media (orientation: landscape) and (max-height: ${Zi["sm-max"](e)}px)\n    `}
`,zh=E.div`
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    ${e=>_`
            ${qi.Util["dashed-default"]({radius:Qi.sm,thickness:qi["width-040"],colour:e.$disabled?Yi["border-disabled"]:Yi.border})}

            background-color: ${e.$disabled?Yi["bg-disabled"]:Yi.bg};
        `}
    height: 14.125rem;
`,Ph=E(ef.Default)`
    width: fit-content;
    margin: 0 ${Gi["spacing-20"]};

    :disabled {
        border-color: ${Yi["border-strong"]};
    }
`,Lh=E(Ah)`
    position: absolute;
    top: ${Gi["spacing-16"]};
    right: ${Gi["spacing-16"]};

    :disabled {
        border-color: ${Yi["border-strong"]};
    }
`,Nh=E.img`
    display: block;
    object-fit: contain;
    object-position: center;
    width: calc(100% - (3rem + ${Gi["spacing-16"]}) * 2);
    height: 100%;
`,Hh=E.div`
    background: ${Yi["bg-primary-subtlest"]};
    border: ${qi["width-010"]} ${qi.solid} ${Yi.border};
    border-radius: ${Qi.sm};
    margin: 0 ${Gi["spacing-20"]};
    padding: ${Gi["spacing-16"]};
    display: flex;
    gap: ${Gi["spacing-16"]};
    flex: 1;
    flex-direction: column;
    align-items: center;
`,Wh=E(fa.BodySM)`
    margin-top: ${Gi["spacing-16"]};
`,Vh=E(jh)`
    /* increase specificity as the styles are overwritten */
    && {
        height: 100%;
        overflow-y: auto;
    }
`,Yh=E.div`
    width: 100%;
    margin: auto;
    padding: ${Gi["layout-xxl"]} ${Gi["layout-sm"]};

    ${Bh} {
        padding: 0;
        width: 100%;
        height: 100%;
    }
`,Uh=E(jh.Box)`
    width: 100%;
    height: 29rem;
    max-width: 672px;
    max-height: none;
    margin: 0 auto;
    padding: ${Gi["spacing-16"]};

    ${Bh} {
        display: flex;
        flex-direction: column;
        max-width: none;
        height: 100%;
        border-radius: 0;
        padding: 0;

        --close-button-top-inset: ${Gi["spacing-8"]};
        --close-button-right-inset: ${Gi["spacing-20"]};
    }
`,Kh=E.h2`
    ${Ui["body-baseline-semibold"]}
    color: ${Yi.text};
    margin-bottom: ${Gi["spacing-16"]};
    text-align: center;

    ${Bh} {
        ${Ui["body-md-semibold"]}
        margin: ${Gi["spacing-12"]} 0;
    }
`,qh=E.div`
    width: 100%;
    height: 20rem;
    border-radius: ${Qi.lg};
    overflow: hidden;

    ${Bh} {
        border-radius: 0;
        flex: 1;
    }

    ${Rh} {
        background: ${Yi["bg-strong"]};
    }
`,Gh=E.div`
    position: relative;
    width: 100%;
    height: 100%;
    background: ${Yi["bg-stronger"]};
    margin: auto;

    ${Bh} {
        aspect-ratio: 4/3;
    }
    ${Xi.MaxWidth.sm} {
        width: 100%;
        height: auto;
    }
    ${Rh} {
        width: auto;
        height: 100%;
    }
`,Qh=E.div`
    position: absolute;
    left: 50%;
    top: calc(75% - 1px);
    width: 300px;
    height: 2px;
    transform: translateX(-50%);
    background-color: ${Yi["border-strong"]};
    pointer-events: none;

    ${Bh} {
        width: calc(100% - ${Gi["spacing-40"]});
        max-width: 300px;
        left: 50%;
    }
`,Zh=E.div`
    display: flex;
    justify-content: space-between;
    margin-top: ${Gi["spacing-16"]};

    ${Xi.MaxWidth.sm} {
        flex-direction: column-reverse;
        margin: ${Gi["spacing-16"]} ${Gi["spacing-24"]}
            ${Gi["spacing-48"]};
        gap: ${Gi["spacing-16"]};
    }

    ${Rh} {
        flex-direction: row;
        margin: ${Gi["spacing-16"]} ${Gi["spacing-20"]};
    }
`,Xh=E(ef.Default)`
    width: 8.5rem;
    ${Xi.MaxWidth.sm} {
        width: 100%;
    }
    ${Rh} {
        height: 2.5rem;
    }
`,Jh=E.div`
    width: 100%;
    height: 100%;
    overflow: hidden;
`,ep=E.canvas`
    cursor: crosshair;
`,tp=C((()=>ct(void 0,void 0,void 0,(function*(){return{default:(yield import("./e-signature-canvas.692dc9b7.js")).ESignatureCanvas}})))),rp=n=>{const{description:o,id:i,loadingProgress:a,loadingLabel:l="Uploading...",onChange:d,value:u,disabled:f}=n,h=lt(n,["description","id","loadingProgress","loadingLabel","onChange","value","disabled"]),[p,m]=g(!1),b=s(null),[v,y]=g(u),x=O(),w=Zi["sm-max"]({theme:x}),$=Yc.useMediaQuery({maxWidth:w}),C=Yc.useMediaQuery({maxHeight:w,orientation:"landscape"}),D=()=>{var e;null===(e=b.current)||void 0===e||e.clear()},k=()=>{if(b.current){const e=b.current.export();y(e),m(!1),null==d||d(e)}};c((()=>{y(u)}),[u]);return e("div",Object.assign({},h,{children:[t(zh,{$disabled:f,children:"number"==typeof a?e(Hh,{children:[l&&t(fa.BodyMD,{children:l}),t(Th,{progress:null!=a?a:0,"data-testid":`${i||"e-signature"}-progress-bar`})]}):v?e(r,{children:[t(Nh,{src:v,alt:"Signature preview"}),t(Lh,{styleType:"light",onClick:()=>m(!0),id:i,"aria-label":"Edit signature",disabled:f,children:t(ae,{})})]}):t(Ph,{type:"button",styleType:"secondary","aria-label":"Add signature",id:i,onClick:()=>m(!0),disabled:f,children:"Add signature"})}),t(Vh,{"data-testid":"signature-modal",show:p,children:t(Yh,{children:e(Uh,{onClose:()=>m(!1),children:[t(Kh,{children:"Signature"}),t(qh,{children:e(Gh,{children:[t(Qh,{}),t(S,{fallback:null,children:p&&t(tp,{ref:b,baseImageDataURL:v})})]})}),e(Zh,{children:[t(Xh,{as:C?Fh.Small:Fh.Default,type:"button",styleType:$&&!C?"light":"link",icon:t(se,{}),onClick:D,children:"Clear"}),t(Xh,{as:C?ef.Small:ef.Default,type:"button",onClick:k,children:"Save"})]})]})})}),o?t(Wh,{children:o}):null]}))};function np(e,t){return np=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},np(e,t)}function op(e){return e&&e.stopPropagation&&e.stopPropagation(),e&&e.preventDefault&&e.preventDefault(),!1}function ip(e){return null==e?[]:Array.isArray(e)?e.slice():[e]}function ap(e){return null!==e&&1===e.length?e[0]:e.slice()}function sp(e){Object.keys(e).forEach((t=>{"undefined"!=typeof document&&document.addEventListener(t,e[t],!1)}))}function lp(e,t){return cp(function(e,t){let r=e;return r<=t.min&&(r=t.min),r>=t.max&&(r=t.max),r}(e,t),t)}function cp(e,t){const r=(e-t.min)%t.step;let n=e-r;return 2*Math.abs(r)>=t.step&&(n+=r>0?t.step:-t.step),parseFloat(n.toFixed(5))}let dp=function(e){function t(t){var r;(r=e.call(this,t)||this).onKeyUp=()=>{r.onEnd()},r.onMouseUp=()=>{r.onEnd(r.getMouseEventMap())},r.onTouchEnd=e=>{e.preventDefault(),r.onEnd(r.getTouchEventMap())},r.onBlur=()=>{r.setState({index:-1},r.onEnd(r.getKeyDownEventMap()))},r.onMouseMove=e=>{r.setState({pending:!0});const t=r.getMousePosition(e),n=r.getDiffPosition(t[0]),o=r.getValueFromPosition(n);r.move(o)},r.onTouchMove=e=>{if(e.touches.length>1)return;r.setState({pending:!0});const t=r.getTouchPosition(e);if(void 0===r.isScrolling){const e=t[0]-r.startPosition[0],n=t[1]-r.startPosition[1];r.isScrolling=Math.abs(n)>Math.abs(e)}if(r.isScrolling)return void r.setState({index:-1});const n=r.getDiffPosition(t[0]),o=r.getValueFromPosition(n);r.move(o)},r.onKeyDown=e=>{if(!(e.ctrlKey||e.shiftKey||e.altKey||e.metaKey))switch(r.setState({pending:!0}),e.key){case"ArrowLeft":case"ArrowDown":case"Left":case"Down":e.preventDefault(),r.moveDownByStep();break;case"ArrowRight":case"ArrowUp":case"Right":case"Up":e.preventDefault(),r.moveUpByStep();break;case"Home":e.preventDefault(),r.move(r.props.min);break;case"End":e.preventDefault(),r.move(r.props.max);break;case"PageDown":e.preventDefault(),r.moveDownByStep(r.props.pageFn(r.props.step));break;case"PageUp":e.preventDefault(),r.moveUpByStep(r.props.pageFn(r.props.step))}},r.onSliderMouseDown=e=>{if(!r.props.disabled&&2!==e.button){if(r.setState({pending:!0}),!r.props.snapDragDisabled){const t=r.getMousePosition(e);r.forceValueFromPosition(t[0],(e=>{r.start(e,t[0]),sp(r.getMouseEventMap())}))}op(e)}},r.onSliderClick=e=>{if(!r.props.disabled&&r.props.onSliderClick&&!r.hasMoved){const t=r.getMousePosition(e),n=lp(r.calcValue(r.calcOffsetFromPosition(t[0])),r.props);r.props.onSliderClick(n)}},r.createOnKeyDown=e=>t=>{r.props.disabled||(r.start(e),sp(r.getKeyDownEventMap()),op(t))},r.createOnMouseDown=e=>t=>{if(r.props.disabled||2===t.button)return;r.setState({pending:!0});const n=r.getMousePosition(t);r.start(e,n[0]),sp(r.getMouseEventMap()),op(t)},r.createOnTouchStart=e=>t=>{if(r.props.disabled||t.touches.length>1)return;r.setState({pending:!0});const n=r.getTouchPosition(t);r.startPosition=n,r.isScrolling=void 0,r.start(e,n[0]),sp(r.getTouchEventMap()),function(e){e.stopPropagation&&e.stopPropagation()}(t)},r.handleResize=()=>{const e=window.setTimeout((()=>{r.pendingResizeTimeouts.shift(),r.resize()}),0);r.pendingResizeTimeouts.push(e)},r.renderThumb=(e,t)=>{const n=r.props.thumbClassName+" "+r.props.thumbClassName+"-"+t+" "+(r.state.index===t?r.props.thumbActiveClassName:""),o={ref:e=>{r["thumb"+t]=e},key:r.props.thumbClassName+"-"+t,className:n,style:e,onMouseDown:r.createOnMouseDown(t),onTouchStart:r.createOnTouchStart(t),onFocus:r.createOnKeyDown(t),tabIndex:0,role:"slider","aria-orientation":r.props.orientation,"aria-valuenow":r.state.value[t],"aria-valuemin":r.props.min,"aria-valuemax":r.props.max,"aria-label":Array.isArray(r.props.ariaLabel)?r.props.ariaLabel[t]:r.props.ariaLabel,"aria-labelledby":Array.isArray(r.props.ariaLabelledby)?r.props.ariaLabelledby[t]:r.props.ariaLabelledby,"aria-disabled":r.props.disabled},i={index:t,value:ap(r.state.value),valueNow:r.state.value[t]};return r.props.ariaValuetext&&(o["aria-valuetext"]="string"==typeof r.props.ariaValuetext?r.props.ariaValuetext:r.props.ariaValuetext(i)),r.props.renderThumb(o,i)},r.renderTrack=(e,t,n)=>{const o={key:r.props.trackClassName+"-"+e,className:r.props.trackClassName+" "+r.props.trackClassName+"-"+e,style:r.buildTrackStyle(t,r.state.upperBound-n)},i={index:e,value:ap(r.state.value)};return r.props.renderTrack(o,i)};let n=ip(t.value);n.length||(n=ip(t.defaultValue)),r.pendingResizeTimeouts=[];const i=[];for(let e=0;e<n.length;e+=1)n[e]=lp(n[e],t),i.push(e);return r.resizeObserver=null,r.resizeElementRef=o.createRef(),r.state={index:-1,upperBound:0,sliderLength:0,value:n,zIndices:i},r}!function(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,np(e,t)}(t,e);var r=t.prototype;return r.componentDidMount=function(){"undefined"!=typeof window&&(this.resizeObserver=new ResizeObserver(this.handleResize),this.resizeObserver.observe(this.resizeElementRef.current),this.resize())},t.getDerivedStateFromProps=function(e,t){const r=ip(e.value);return r.length?t.pending?null:{value:r.map((t=>lp(t,e)))}:null},r.componentDidUpdate=function(){0===this.state.upperBound&&this.resize()},r.componentWillUnmount=function(){this.clearPendingResizeTimeouts(),this.resizeObserver&&this.resizeObserver.disconnect()},r.onEnd=function(e){e&&function(e){Object.keys(e).forEach((t=>{"undefined"!=typeof document&&document.removeEventListener(t,e[t],!1)}))}(e),this.hasMoved&&this.fireChangeEvent("onAfterChange"),this.setState({pending:!1}),this.hasMoved=!1},r.getValue=function(){return ap(this.state.value)},r.getClosestIndex=function(e){let t=Number.MAX_VALUE,r=-1;const{value:n}=this.state,o=n.length;for(let i=0;i<o;i+=1){const o=this.calcOffset(n[i]),a=Math.abs(e-o);a<t&&(t=a,r=i)}return r},r.getMousePosition=function(e){return[e["page"+this.axisKey()],e["page"+this.orthogonalAxisKey()]]},r.getTouchPosition=function(e){const t=e.touches[0];return[t["page"+this.axisKey()],t["page"+this.orthogonalAxisKey()]]},r.getKeyDownEventMap=function(){return{keydown:this.onKeyDown,keyup:this.onKeyUp,focusout:this.onBlur}},r.getMouseEventMap=function(){return{mousemove:this.onMouseMove,mouseup:this.onMouseUp}},r.getTouchEventMap=function(){return{touchmove:this.onTouchMove,touchend:this.onTouchEnd}},r.getValueFromPosition=function(e){const t=e/(this.state.sliderLength-this.state.thumbSize)*(this.props.max-this.props.min);return lp(this.state.startValue+t,this.props)},r.getDiffPosition=function(e){let t=e-this.state.startPosition;return this.props.invert&&(t*=-1),t},r.resize=function(){const{slider:e,thumb0:t}=this;if(!e||!t)return;const r=this.sizeKey(),n=e.getBoundingClientRect(),o=e[r],i=n[this.posMaxKey()],a=n[this.posMinKey()],s=t.getBoundingClientRect()[r.replace("client","").toLowerCase()],l=o-s,c=Math.abs(i-a);this.state.upperBound===l&&this.state.sliderLength===c&&this.state.thumbSize===s||this.setState({upperBound:l,sliderLength:c,thumbSize:s})},r.calcOffset=function(e){const t=this.props.max-this.props.min;return 0===t?0:(e-this.props.min)/t*this.state.upperBound},r.calcValue=function(e){return e/this.state.upperBound*(this.props.max-this.props.min)+this.props.min},r.calcOffsetFromPosition=function(e){const{slider:t}=this,r=t.getBoundingClientRect(),n=r[this.posMaxKey()],o=r[this.posMinKey()];let i=e-(window["page"+this.axisKey()+"Offset"]+(this.props.invert?n:o));return this.props.invert&&(i=this.state.sliderLength-i),i-=this.state.thumbSize/2,i},r.forceValueFromPosition=function(e,t){const r=this.calcOffsetFromPosition(e),n=this.getClosestIndex(r),o=lp(this.calcValue(r),this.props),i=this.state.value.slice();i[n]=o;for(let e=0;e<i.length-1;e+=1)if(i[e+1]-i[e]<this.props.minDistance)return;this.fireChangeEvent("onBeforeChange"),this.hasMoved=!0,this.setState({value:i},(()=>{t(n),this.fireChangeEvent("onChange")}))},r.clearPendingResizeTimeouts=function(){do{const e=this.pendingResizeTimeouts.shift();clearTimeout(e)}while(this.pendingResizeTimeouts.length)},r.start=function(e,t){const r=this["thumb"+e];r&&r.focus();const{zIndices:n}=this.state;n.splice(n.indexOf(e),1),n.push(e),this.setState((r=>({startValue:r.value[e],startPosition:void 0!==t?t:r.startPosition,index:e,zIndices:n})))},r.moveUpByStep=function(e){void 0===e&&(e=this.props.step);const t=this.state.value[this.state.index],r=lp(this.props.invert&&"horizontal"===this.props.orientation?t-e:t+e,this.props);this.move(Math.min(r,this.props.max))},r.moveDownByStep=function(e){void 0===e&&(e=this.props.step);const t=this.state.value[this.state.index],r=lp(this.props.invert&&"horizontal"===this.props.orientation?t+e:t-e,this.props);this.move(Math.max(r,this.props.min))},r.move=function(e){const t=this.state.value.slice(),{index:r}=this.state,{length:n}=t,o=t[r];if(e===o)return;this.hasMoved||this.fireChangeEvent("onBeforeChange"),this.hasMoved=!0;const{pearling:i,max:a,min:s,minDistance:l}=this.props;if(!i){if(r>0){const n=t[r-1];e<n+l&&(e=n+l)}if(r<n-1){const n=t[r+1];e>n-l&&(e=n-l)}}t[r]=e,i&&n>1&&(e>o?(this.pushSucceeding(t,l,r),function(e,t,r,n){for(let o=0;o<e;o+=1){const i=n-o*r;t[e-1-o]>i&&(t[e-1-o]=i)}}(n,t,l,a)):e<o&&(this.pushPreceding(t,l,r),function(e,t,r,n){for(let o=0;o<e;o+=1){const e=n+o*r;t[o]<e&&(t[o]=e)}}(n,t,l,s))),this.setState({value:t},this.fireChangeEvent.bind(this,"onChange"))},r.pushSucceeding=function(e,t,r){let n,o;for(n=r,o=e[n]+t;null!==e[n+1]&&o>e[n+1];n+=1,o=e[n]+t)e[n+1]=cp(o,this.props)},r.pushPreceding=function(e,t,r){for(let n=r,o=e[n]-t;null!==e[n-1]&&o<e[n-1];n-=1,o=e[n]-t)e[n-1]=cp(o,this.props)},r.axisKey=function(){return"vertical"===this.props.orientation?"Y":"X"},r.orthogonalAxisKey=function(){return"vertical"===this.props.orientation?"X":"Y"},r.posMinKey=function(){return"vertical"===this.props.orientation?this.props.invert?"bottom":"top":this.props.invert?"right":"left"},r.posMaxKey=function(){return"vertical"===this.props.orientation?this.props.invert?"top":"bottom":this.props.invert?"left":"right"},r.sizeKey=function(){return"vertical"===this.props.orientation?"clientHeight":"clientWidth"},r.fireChangeEvent=function(e){this.props[e]&&this.props[e](ap(this.state.value),this.state.index)},r.buildThumbStyle=function(e,t){const r={position:"absolute",touchAction:"none",willChange:this.state.index>=0?this.posMinKey():void 0,zIndex:this.state.zIndices.indexOf(t)+1};return r[this.posMinKey()]=e+"px",r},r.buildTrackStyle=function(e,t){const r={position:"absolute",willChange:this.state.index>=0?this.posMinKey()+","+this.posMaxKey():void 0};return r[this.posMinKey()]=e,r[this.posMaxKey()]=t,r},r.buildMarkStyle=function(e){var t;return(t={position:"absolute"})[this.posMinKey()]=e,t},r.renderThumbs=function(e){const{length:t}=e,r=[];for(let n=0;n<t;n+=1)r[n]=this.buildThumbStyle(e[n],n);const n=[];for(let e=0;e<t;e+=1)n[e]=this.renderThumb(r[e],e);return n},r.renderTracks=function(e){const t=[],r=e.length-1;t.push(this.renderTrack(0,0,e[0]));for(let n=0;n<r;n+=1)t.push(this.renderTrack(n+1,e[n],e[n+1]));return t.push(this.renderTrack(r+1,e[r],this.state.upperBound)),t},r.renderMarks=function(){let{marks:e}=this.props;const t=this.props.max-this.props.min+1;return"boolean"==typeof e?e=Array.from({length:t}).map(((e,t)=>t)):"number"==typeof e&&(e=Array.from({length:t}).map(((e,t)=>t)).filter((t=>t%e==0))),e.map(parseFloat).sort(((e,t)=>e-t)).map((e=>{const t=this.calcOffset(e),r={key:e,className:this.props.markClassName,style:this.buildMarkStyle(t)};return this.props.renderMark(r)}))},r.render=function(){const e=[],{value:t}=this.state,r=t.length;for(let n=0;n<r;n+=1)e[n]=this.calcOffset(t[n],n);const n=this.props.withTracks?this.renderTracks(e):null,i=this.renderThumbs(e),a=this.props.marks?this.renderMarks():null;return o.createElement("div",{ref:e=>{this.slider=e,this.resizeElementRef.current=e},style:{position:"relative"},className:this.props.className+(this.props.disabled?" disabled":""),onMouseDown:this.onSliderMouseDown,onClick:this.onSliderClick},n,i,a)},t}(o.Component);dp.displayName="ReactSlider",dp.defaultProps={min:0,max:100,step:1,pageFn:e=>10*e,minDistance:0,defaultValue:0,orientation:"horizontal",className:"slider",thumbClassName:"thumb",thumbActiveClassName:"active",trackClassName:"track",markClassName:"mark",withTracks:!0,pearling:!1,disabled:!1,snapDragDisabled:!1,invert:!1,marks:[],renderThumb:e=>o.createElement("div",e),renderTrack:e=>o.createElement("div",e),renderMark:e=>o.createElement("span",e)};var up=dp;const fp=E.div`
    isolation: isolate;
`,hp=E.div`
    margin-top: ${Gi["spacing-8"]};
    display: flex;
    justify-content: space-between;
    gap: ${Gi["spacing-8"]};
`,pp=E.div`
    margin-bottom: ${Gi["spacing-8"]};
`,gp=E(fa.BodyBL)`
    overflow-wrap: anywhere;
`,mp=E(up)`
    height: 0.875rem;
`,bp=E.div`
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

        background-color: ${Yi.bg};
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.16);
        border: ${qi["width-010"]} ${qi.solid}
            ${e=>e.$disabled?Yi["border-selected-disabled"]:Yi["border-strong"]};
        border-radius: 50%;
    }
`,vp=E.div`
    height: 0.875rem;
    width: 0.875rem;
    position: relative;
    outline: none;

    :focus ${bp}:after {
        outline-offset: -1px;
        outline: ${qi["width-040"]} ${qi.solid}
            ${Yi["border-selected"]};
    }
`,yp=E.div`
    height: 0.25rem;
    top: 50%;
    transform: translateY(-50%);
    border-radius: ${Qi.full};

    background: ${e=>e.$color&&"function"==typeof e.$color?e.$color(e):e.$color||Yi["border-strong"](e)};
`,xp=r=>{var{value:n,min:o=0,max:i=100,step:a=1,minRange:s,numOfThumbs:l=2,colors:d,disabled:u,readOnly:f,ariaLabels:h,showSliderLabels:p,sliderLabelPrefix:m,sliderLabelSuffix:b,showIndicatorLabel:v,indicatorLabelPrefix:y,indicatorLabelSuffix:x,renderSliderLabel:w,onChange:$,onChangeEnd:C}=r,S=lt(r,["value","min","max","step","minRange","numOfThumbs","colors","disabled","readOnly","ariaLabels","showSliderLabels","sliderLabelPrefix","sliderLabelSuffix","showIndicatorLabel","indicatorLabelPrefix","indicatorLabelSuffix","renderSliderLabel","onChange","onChangeEnd"]);const[D,k]=g(_()),E=function(){const e=function(){const e=u||f?Yi["border-disabled"]:Yi["border-strong"],t=u||f?Yi["border-selected-disabled"]:Yi["border-selected"];if(1===l)return[t,e];const r=[];r.push(e);for(let e=0;e<l-1;e++)r.push(t);return r.push(e),r}();return new Array(l+1).fill(0).map(((t,r)=>(null==d?void 0:d[r])||e[r]))}();c((()=>{n!==D&&k(_())}),[n]);function _(){if(n&&n.length===l)return n;const e=[];for(let t=0;t<l;t++)e.push(o+a*t);return e}const O=t=>w?w(t):e(gp,{children:[m,t,b]});return e(fp,Object.assign({},S,{children:[v&&t(pp,{children:(()=>{let t="";if(1===D.length)t=`${D[0]}`;else if(2===D.length)t=`${D[0]} - ${D[1]}`;else if(D.length>2){t=`${Math.min(...D)} - ${Math.max(...D)}`}return e(gp,{children:[y,t,x]})})()}),t(mp,{step:a,min:o,max:i,value:D,disabled:u||f,onChange:(e,t)=>{if("number"==typeof e){const t=[e];k(t),null==$||$(t)}else{if(t>-1&&D[t]===e[t])return;const r=[...e];k(r),null==$||$(r)}},onAfterChange:e=>{if("number"==typeof e){const t=[e];k(t),null==C||C(t)}else{const t=[...e];k(t),null==C||C(t)}},minDistance:s,ariaLabel:h,renderThumb:(e,r)=>t(vp,Object.assign({"data-testid":`slider-thumb-${r.index}`},e,{tabIndex:u?void 0:e.tabIndex,children:t(bp,{$disabled:u,$readOnly:f})})),renderTrack:(e,r)=>t(yp,Object.assign({"data-testid":`slider-track-${r.index}`},e,{$color:E[r.index]}))}),p&&e(hp,{children:[t("div",{children:O(o)}),t("div",{children:O(i)})]})]}))},wp=E.div`
    display: flex;
    margin-bottom: ${Gi["spacing-16"]};
    align-items: baseline;
`,$p=E.div`
    margin: 0 0.5rem;
`,Cp=E.div`
    width: 100%;
    height: 4rem;
    display: flex;
    align-items: flex-end;
    padding: 0 0.4375rem;
`,Sp=E.div`
    flex: 1;
    border-radius: ${Qi.sm} ${Qi.sm} 0 0;
    border: 0.5px solid transparent; // space between bars
    background-clip: content-box;

    ${e=>{let t=Yi["bg-strongest"];return e.$disabled&&e.$selected?t=Yi["bg-selected-stronger-disabled"]:e.$disabled?t=Yi["bg-disabled"]:e.$selected&&(t=Yi["bg-selected-stronger"]),_`
            background-color: ${t};
        `}}
`,Dp=E(xp)`
    margin-top: -0.3125rem;
`,kp=n=>{var{bins:o=[],interval:i,disabled:s,readOnly:l,value:d,showRangeLabels:u,rangeLabelPrefix:f,rangeLabelSuffix:h,ariaLabels:p,onChange:m,onChangeEnd:b,renderEmptyView:v,renderRangeLabel:y}=n,x=lt(n,["bins","interval","disabled","readOnly","value","showRangeLabels","rangeLabelPrefix","rangeLabelSuffix","ariaLabels","onChange","onChangeEnd","renderEmptyView","renderRangeLabel"]);const w=o.map((e=>e.count)),$=Math.max(...w),C=o.map((e=>e.minValue)),S=Math.max(...C),D=Math.min(...C),[k,E]=g(T()),_=a((()=>{const e=[...o].sort(((e,t)=>e.minValue-t.minValue)),t=(S-D)/i+1,r=[];for(let n=0;n<t;n++){const t=e.find((e=>e.minValue===D+i*n));t?r.push(t):r.push({count:0,minValue:D+i*n})}return r}),[o,i]);c((()=>{d!==k&&E(T())}),[d]);const O=e=>{const[t,r]=e,n=[t,r];E(n),null==m||m(n)},F=e=>{const[t,r]=e,n=[t,r];E(n),null==b||b(n)};function T(){return null!=d?d:[D,D+i]}const I=t=>y?y(t):e(fa.BodyBL,{children:[f,t,h]});return e("div",Object.assign({},x,{children:[u&&e(wp,{children:[I(k[0]),t($p,{children:"-"}),I(k[1])]}),_.every((e=>0===e.count))&&v?v():e(r,{children:[t(Cp,{children:_.map(((e,r)=>{const n=e.count/$;return t(Sp,{style:{height:n?`calc(calc(100% - 0.25rem) * ${n} + 0.25rem)`:0},$selected:e.minValue>=k[0]&&e.minValue<k[1],$disabled:s||l},r)}))}),t(Dp,{min:D,max:S+i,step:i,minRange:i,numOfThumbs:2,value:k,disabled:s,readOnly:l,ariaLabels:p,onChange:O,onChangeEnd:F})]})]}))},Ep=E(nh)`
    width: 100%;
    height: calc(3rem - 2px); // exclude top and bottom borders

    ${e=>"no-border"!==e.$styleType&&_`
            padding-left: ${Gi["spacing-16"]};
            padding-right: ${e.$showClear?0:Gi["spacing-16"]};
        `}
`,_p=E(oh)`
    height: auto;
    padding: ${Gi["spacing-12"]} ${Gi["spacing-16"]};

    cursor: pointer;
    color: ${Yi.icon};

    ${e=>"no-border"===e.$styleType&&_`
            margin-right: -${Gi["spacing-12"]};
        `}
`,Op=E(te)`
    height: 1.25rem;
    width: 1.25rem;
    vertical-align: middle;
`,Fp=E.div`
    display: flex;
    width: 100%;
`,Tp=E(th)`
    display: flex;
    align-items: center;
    width: 100%;
`,Ip=o.forwardRef(((n,o)=>{var{value:i,spacing:a,type:l,error:c,disabled:d,readOnly:u,onChange:h,onClear:p,allowClear:g=!1,className:m,styleType:b="bordered"}=n,v=lt(n,["value","spacing","type","error","disabled","readOnly","onChange","onClear","allowClear","className","styleType"]);const y=((e,t)=>"tel"===e&&!!t)(l,a),x=s(null);f(o,(()=>x.current),[]);const w=vd({ref:x,formatter:e=>y?pd.transformWithSpaces(e,a):e}),$=e=>{h&&(y?S(e):h(e))},C=()=>{p&&p(),x&&x.current&&x.current.focus()},S=e=>{const t=w();if(!t)return;const{nextValue:r,updateCaretPosition:n}=t,o=r.replace(/\s/g,"");e.target.value=o,null==h||h(e),n()},D=i?(e=>e?y?pd.transformWithSpaces(e,a):e:"")(i):i,k=g&&!d&&!u&&!!i,E=()=>e(r,{children:[t(Ep,Object.assign({"data-testid":"input",ref:x,disabled:d,value:D,onChange:$,type:l,readOnly:u,$showClear:k,$styleType:b},v)),k&&t(_p,{onClick:C,type:"button",$styleType:b,children:t(Op,{"aria-hidden":!0})})]});return t(r,{children:"no-border"===b?t(Fp,{className:m,children:E()}):t(Tp,{$disabled:d,$error:c,$readOnly:u,className:m,children:E()})})})),Mp=o.forwardRef(((e,r)=>{const{label:n,errorMessage:o,id:i="form-field","data-error-testid":a,"data-testid":s,layoutType:l,mobileCols:c,tabletCols:d,desktopCols:u,xxsCols:f,xsCols:h,smCols:p,mdCols:g,lgCols:m,xlCols:b,xxlCols:v}=e,y=lt(e,["label","errorMessage","id","data-error-testid","data-testid","layoutType","mobileCols","tabletCols","desktopCols","xxsCols","xsCols","smCols","mdCols","lgCols","xlCols","xxlCols"]);return t(hu,{id:i,label:n,errorMessage:o,disabled:y.disabled,"data-error-testid":a,layoutType:l,mobileCols:c,tabletCols:d,desktopCols:u,xxsCols:f,xsCols:h,smCols:p,mdCols:g,lgCols:m,xlCols:b,xxlCols:v,children:t(Ip,Object.assign({id:`${i}-base`,"data-testid":s||i,ref:r,error:!!o},y))})}));var Ap=Kn;var jp=function(e){var t=this.__data__,r=t.delete(e);return this.size=t.size,r};var Bp=function(e){return this.__data__.get(e)};var Rp=function(e){return this.__data__.has(e)},zp=Kn,Pp=qn,Lp=go;var Np=function(e,t){var r=this.__data__;if(r instanceof zp){var n=r.__data__;if(!Pp||n.length<199)return n.push([e,t]),this.size=++r.size,this;r=this.__data__=new Lp(n)}return r.set(e,t),this.size=r.size,this},Hp=Kn,Wp=function(){this.__data__=new Ap,this.size=0},Vp=jp,Yp=Bp,Up=Rp,Kp=Np;function qp(e){var t=this.__data__=new Hp(e);this.size=t.size}qp.prototype.clear=Wp,qp.prototype.delete=Vp,qp.prototype.get=Yp,qp.prototype.has=Up,qp.prototype.set=Kp;var Gp=qp;var Qp=go,Zp=function(e){return this.__data__.set(e,"__lodash_hash_undefined__"),this},Xp=function(e){return this.__data__.has(e)};function Jp(e){var t=-1,r=null==e?0:e.length;for(this.__data__=new Qp;++t<r;)this.add(e[t])}Jp.prototype.add=Jp.prototype.push=Zp,Jp.prototype.has=Xp;var eg=function(e,t){return e.has(t)},tg=Jp,rg=function(e,t){for(var r=-1,n=null==e?0:e.length;++r<n;)if(t(e[r],r,e))return!0;return!1},ng=eg;var og=function(e,t,r,n,o,i){var a=1&r,s=e.length,l=t.length;if(s!=l&&!(a&&l>s))return!1;var c=i.get(e),d=i.get(t);if(c&&d)return c==t&&d==e;var u=-1,f=!0,h=2&r?new tg:void 0;for(i.set(e,t),i.set(t,e);++u<s;){var p=e[u],g=t[u];if(n)var m=a?n(g,p,u,t,e,i):n(p,g,u,e,t,i);if(void 0!==m){if(m)continue;f=!1;break}if(h){if(!rg(t,(function(e,t){if(!ng(h,t)&&(p===e||o(p,e,r,n,i)))return h.push(t)}))){f=!1;break}}else if(p!==g&&!o(p,g,r,n,i)){f=!1;break}}return i.delete(e),i.delete(t),f};var ig=function(e){var t=-1,r=Array(e.size);return e.forEach((function(e,n){r[++t]=[n,e]})),r};var ag=function(e){var t=-1,r=Array(e.size);return e.forEach((function(e){r[++t]=e})),r},sg=mr.Uint8Array,lg=On,cg=og,dg=ig,ug=ag,fg=br?br.prototype:void 0,hg=fg?fg.valueOf:void 0;var pg=function(e,t,r,n,o,i,a){switch(r){case"[object DataView]":if(e.byteLength!=t.byteLength||e.byteOffset!=t.byteOffset)return!1;e=e.buffer,t=t.buffer;case"[object ArrayBuffer]":return!(e.byteLength!=t.byteLength||!i(new sg(e),new sg(t)));case"[object Boolean]":case"[object Date]":case"[object Number]":return lg(+e,+t);case"[object Error]":return e.name==t.name&&e.message==t.message;case"[object RegExp]":case"[object String]":return e==t+"";case"[object Map]":var s=dg;case"[object Set]":var l=1&n;if(s||(s=ug),e.size!=t.size&&!l)return!1;var c=a.get(e);if(c)return c==t;n|=2,a.set(e,t);var d=cg(s(e),s(t),n,o,i,a);return a.delete(e),d;case"[object Symbol]":if(hg)return hg.call(e)==hg.call(t)}return!1};var gg=function(e,t){for(var r=-1,n=t.length,o=e.length;++r<n;)e[o+r]=t[r];return e},mg=gg,bg=fr;var vg=function(e,t,r){var n=t(e);return bg(e)?n:mg(n,r(e))};var yg=function(e,t){for(var r=-1,n=null==e?0:e.length,o=0,i=[];++r<n;){var a=e[r];t(a,r,e)&&(i[o++]=a)}return i},xg=function(){return[]},wg=Object.prototype.propertyIsEnumerable,$g=Object.getOwnPropertySymbols,Cg=$g?function(e){return null==e?[]:(e=Object(e),yg($g(e),(function(t){return wg.call(e,t)})))}:xg;var Sg=function(e,t){for(var r=-1,n=Array(e);++r<e;)n[r]=t(r);return n},Dg=_r,kg=Or;var Eg=function(e){return kg(e)&&"[object Arguments]"==Dg(e)},_g=Or,Og=Object.prototype,Fg=Og.hasOwnProperty,Tg=Og.propertyIsEnumerable,Ig=Eg(function(){return arguments}())?Eg:function(e){return _g(e)&&Fg.call(e,"callee")&&!Tg.call(e,"callee")},Mg={exports:{}};var Ag=function(){return!1};!function(e,t){var r=mr,n=Ag,o=t&&!t.nodeType&&t,i=o&&e&&!e.nodeType&&e,a=i&&i.exports===o?r.Buffer:void 0,s=(a?a.isBuffer:void 0)||n;e.exports=s}(Mg,Mg.exports);var jg=Mg.exports,Bg=/^(?:0|[1-9]\d*)$/;var Rg=function(e,t){var r=typeof e;return!!(t=null==t?9007199254740991:t)&&("number"==r||"symbol"!=r&&Bg.test(e))&&e>-1&&e%1==0&&e<t};var zg=function(e){return"number"==typeof e&&e>-1&&e%1==0&&e<=9007199254740991},Pg=_r,Lg=zg,Ng=Or,Hg={};Hg["[object Float32Array]"]=Hg["[object Float64Array]"]=Hg["[object Int8Array]"]=Hg["[object Int16Array]"]=Hg["[object Int32Array]"]=Hg["[object Uint8Array]"]=Hg["[object Uint8ClampedArray]"]=Hg["[object Uint16Array]"]=Hg["[object Uint32Array]"]=!0,Hg["[object Arguments]"]=Hg["[object Array]"]=Hg["[object ArrayBuffer]"]=Hg["[object Boolean]"]=Hg["[object DataView]"]=Hg["[object Date]"]=Hg["[object Error]"]=Hg["[object Function]"]=Hg["[object Map]"]=Hg["[object Number]"]=Hg["[object Object]"]=Hg["[object RegExp]"]=Hg["[object Set]"]=Hg["[object String]"]=Hg["[object WeakMap]"]=!1;var Wg=function(e){return Ng(e)&&Lg(e.length)&&!!Hg[Pg(e)]};var Vg=function(e){return function(t){return e(t)}},Yg={exports:{}};!function(e,t){var r=hr,n=t&&!t.nodeType&&t,o=n&&e&&!e.nodeType&&e,i=o&&o.exports===n&&r.process,a=function(){try{var e=o&&o.require&&o.require("util").types;return e||i&&i.binding&&i.binding("util")}catch(e){}}();e.exports=a}(Yg,Yg.exports);var Ug=Yg.exports,Kg=Wg,qg=Vg,Gg=Ug&&Ug.isTypedArray,Qg=Gg?qg(Gg):Kg,Zg=Sg,Xg=Ig,Jg=fr,em=jg,tm=Rg,rm=Qg,nm=Object.prototype.hasOwnProperty;var om=function(e,t){var r=Jg(e),n=!r&&Xg(e),o=!r&&!n&&em(e),i=!r&&!n&&!o&&rm(e),a=r||n||o||i,s=a?Zg(e.length,String):[],l=s.length;for(var c in e)!t&&!nm.call(e,c)||a&&("length"==c||o&&("offset"==c||"parent"==c)||i&&("buffer"==c||"byteLength"==c||"byteOffset"==c)||tm(c,l))||s.push(c);return s},im=Object.prototype;var am=function(e){var t=e&&e.constructor;return e===("function"==typeof t&&t.prototype||im)};var sm=function(e,t){return function(r){return e(t(r))}}(Object.keys,Object),lm=am,cm=sm,dm=Object.prototype.hasOwnProperty;var um=function(e){if(!lm(e))return cm(e);var t=[];for(var r in Object(e))dm.call(e,r)&&"constructor"!=r&&t.push(r);return t},fm=Hr,hm=zg;var pm=function(e){return null!=e&&hm(e.length)&&!fm(e)},gm=om,mm=um,bm=pm;var vm=function(e){return bm(e)?gm(e):mm(e)},ym=vg,xm=Cg,wm=vm;var $m=function(e){return ym(e,wm,xm)},Cm=Object.prototype.hasOwnProperty;var Sm=function(e,t,r,n,o,i){var a=1&r,s=$m(e),l=s.length;if(l!=$m(t).length&&!a)return!1;for(var c=l;c--;){var d=s[c];if(!(a?d in t:Cm.call(t,d)))return!1}var u=i.get(e),f=i.get(t);if(u&&f)return u==t&&f==e;var h=!0;i.set(e,t),i.set(t,e);for(var p=a;++c<l;){var g=e[d=s[c]],m=t[d];if(n)var b=a?n(m,g,d,t,e,i):n(g,m,d,e,t,i);if(!(void 0===b?g===m||o(g,m,r,n,i):b)){h=!1;break}p||(p="constructor"==d)}if(h&&!p){var v=e.constructor,y=t.constructor;v==y||!("constructor"in e)||!("constructor"in t)||"function"==typeof v&&v instanceof v&&"function"==typeof y&&y instanceof y||(h=!1)}return i.delete(e),i.delete(t),h},Dm=ln(mr,"DataView"),km=qn,Em=ln(mr,"Promise"),_m=ln(mr,"Set"),Om=ln(mr,"WeakMap"),Fm=_r,Tm=Kr,Im="[object Map]",Mm="[object Promise]",Am="[object Set]",jm="[object WeakMap]",Bm="[object DataView]",Rm=Tm(Dm),zm=Tm(km),Pm=Tm(Em),Lm=Tm(_m),Nm=Tm(Om),Hm=Fm;(Dm&&Hm(new Dm(new ArrayBuffer(1)))!=Bm||km&&Hm(new km)!=Im||Em&&Hm(Em.resolve())!=Mm||_m&&Hm(new _m)!=Am||Om&&Hm(new Om)!=jm)&&(Hm=function(e){var t=Fm(e),r="[object Object]"==t?e.constructor:void 0,n=r?Tm(r):"";if(n)switch(n){case Rm:return Bm;case zm:return Im;case Pm:return Mm;case Lm:return Am;case Nm:return jm}return t});var Wm=Hm,Vm=Gp,Ym=og,Um=pg,Km=Sm,qm=Wm,Gm=fr,Qm=jg,Zm=Qg,Xm="[object Arguments]",Jm="[object Array]",eb="[object Object]",tb=Object.prototype.hasOwnProperty;var rb=function(e,t,r,n,o,i){var a=Gm(e),s=Gm(t),l=a?Jm:qm(e),c=s?Jm:qm(t),d=(l=l==Xm?eb:l)==eb,u=(c=c==Xm?eb:c)==eb,f=l==c;if(f&&Qm(e)){if(!Qm(t))return!1;a=!0,d=!1}if(f&&!d)return i||(i=new Vm),a||Zm(e)?Ym(e,t,r,n,o,i):Um(e,t,l,r,n,o,i);if(!(1&r)){var h=d&&tb.call(e,"__wrapped__"),p=u&&tb.call(t,"__wrapped__");if(h||p){var g=h?e.value():e,m=p?t.value():t;return i||(i=new Vm),o(g,m,r,n,i)}}return!!f&&(i||(i=new Vm),Km(e,t,r,n,o,i))},nb=Or;var ob=function e(t,r,n,o,i){return t===r||(null==t||null==r||!nb(t)&&!nb(r)?t!=t&&r!=r:rb(t,r,n,o,e,i))},ib=Gp,ab=ob;var sb=function(e,t,r,n){var o=r.length,i=o,a=!n;if(null==e)return!i;for(e=Object(e);o--;){var s=r[o];if(a&&s[2]?s[1]!==e[s[0]]:!(s[0]in e))return!1}for(;++o<i;){var l=(s=r[o])[0],c=e[l],d=s[1];if(a&&s[2]){if(void 0===c&&!(l in e))return!1}else{var u=new ib;if(n)var f=n(c,d,l,e,t,u);if(!(void 0===f?ab(d,c,3,n,u):f))return!1}}return!0},lb=zr;var cb=function(e){return e==e&&!lb(e)},db=cb,ub=vm;var fb=function(e){for(var t=ub(e),r=t.length;r--;){var n=t[r],o=e[n];t[r]=[n,o,db(o)]}return t};var hb=function(e,t){return function(r){return null!=r&&(r[e]===t&&(void 0!==t||e in Object(r)))}},pb=sb,gb=fb,mb=hb;var bb=function(e,t){return null!=e&&t in Object(e)},vb=Ao,yb=Ig,xb=fr,wb=Rg,$b=zg,Cb=Bo;var Sb=function(e,t,r){for(var n=-1,o=(t=vb(t,e)).length,i=!1;++n<o;){var a=Cb(t[n]);if(!(i=null!=e&&r(e,a)))break;e=e[a]}return i||++n!=o?i:!!(o=null==e?0:e.length)&&$b(o)&&wb(a,o)&&(xb(e)||yb(e))},Db=bb,kb=Sb;var Eb=ob,_b=No,Ob=function(e,t){return null!=e&&kb(e,t,Db)},Fb=Rr,Tb=cb,Ib=hb,Mb=Bo;var Ab=function(e){return function(t){return null==t?void 0:t[e]}},jb=Po;var Bb=Ab,Rb=function(e){return function(t){return jb(t,e)}},zb=Rr,Pb=Bo;var Lb=function(e){var t=gb(e);return 1==t.length&&t[0][2]?mb(t[0][0],t[0][1]):function(r){return r===e||pb(r,e,t)}},Nb=function(e,t){return Fb(e)&&Tb(t)?Ib(Mb(e),t):function(r){var n=_b(r,e);return void 0===n&&n===t?Ob(r,e):Eb(t,n,3)}},Hb=function(e){return e},Wb=fr,Vb=function(e){return zb(e)?Bb(Pb(e)):Rb(e)};var Yb=function(e){return"function"==typeof e?e:null==e?Hb:"object"==typeof e?Wb(e)?Nb(e[0],e[1]):Lb(e):Vb(e)},Ub=Yb,Kb=pm,qb=vm;var Gb=function(e){return function(t,r,n){var o=Object(t);if(!Kb(t)){var i=Ub(r);t=qb(t),r=function(e){return i(o[e],e,o)}}var a=e(t,r,n);return a>-1?o[i?t[a]:a]:void 0}};var Qb=/\s/;var Zb=function(e){for(var t=e.length;t--&&Qb.test(e.charAt(t)););return t},Xb=/^\s+/;var Jb=function(e){return e?e.slice(0,Zb(e)+1).replace(Xb,""):e},ev=zr,tv=Ir,rv=/^[-+]0x[0-9a-f]+$/i,nv=/^0b[01]+$/i,ov=/^0o[0-7]+$/i,iv=parseInt;var av=function(e){if("number"==typeof e)return e;if(tv(e))return NaN;if(ev(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=ev(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=Jb(e);var r=nv.test(e);return r||ov.test(e)?iv(e.slice(2),r?2:8):rv.test(e)?NaN:+e},sv=av,lv=1/0;var cv=function(e){return e?(e=sv(e))===lv||e===-1/0?17976931348623157e292*(e<0?-1:1):e==e?e:0:0===e?e:0};var dv=function(e,t,r,n){for(var o=e.length,i=r+(n?1:-1);n?i--:++i<o;)if(t(e[i],i,e))return i;return-1},uv=Yb,fv=function(e){var t=cv(e),r=t%1;return t==t?r?t-r:t:0},hv=Math.max;var pv=function(e,t,r){var n=null==e?0:e.length;if(!n)return-1;var o=null==r?0:fv(r);return o<0&&(o=hv(n+o,0)),dv(e,uv(t),o)},gv=Be(pv),mv=Be(Gb(pv)),bv=ob;var vv=Be((function(e,t){return bv(e,t)})),yv=Object.defineProperty,xv={};((e,t)=>{for(var r in t)yv(e,r,{get:t[r],enumerable:!0})})(xv,{assign:()=>Jv,colors:()=>Qv,createStringInterpolator:()=>Uv,skipAnimation:()=>Zv,to:()=>Kv,willAdvance:()=>Xv});var wv=Rv(),$v=e=>Mv(e,wv),Cv=Rv();$v.write=e=>Mv(e,Cv);var Sv=Rv();$v.onStart=e=>Mv(e,Sv);var Dv=Rv();$v.onFrame=e=>Mv(e,Dv);var kv=Rv();$v.onFinish=e=>Mv(e,kv);var Ev=[];$v.setTimeout=(e,t)=>{const r=$v.now()+t,n=()=>{const e=Ev.findIndex((e=>e.cancel==n));~e&&Ev.splice(e,1),Tv-=~e?1:0},o={time:r,handler:e,cancel:n};return Ev.splice(_v(r),0,o),Tv+=1,Av(),o};var _v=e=>~(~Ev.findIndex((t=>t.time>e))||~Ev.length);$v.cancel=e=>{Sv.delete(e),Dv.delete(e),kv.delete(e),wv.delete(e),Cv.delete(e)},$v.sync=e=>{Iv=!0,$v.batchedUpdates(e),Iv=!1},$v.throttle=e=>{let t;function r(){try{e(...t)}finally{t=null}}function n(...e){t=e,$v.onStart(r)}return n.handler=e,n.cancel=()=>{Sv.delete(r),t=null},n};var Ov="undefined"!=typeof window?window.requestAnimationFrame:()=>{};$v.use=e=>Ov=e,$v.now="undefined"!=typeof performance?()=>performance.now():Date.now,$v.batchedUpdates=e=>e(),$v.catch=console.error,$v.frameLoop="always",$v.advance=()=>{"demand"!==$v.frameLoop?console.warn("Cannot call the manual advancement of rafz whilst frameLoop is not set as demand"):Bv()};var Fv=-1,Tv=0,Iv=!1;function Mv(e,t){Iv?(t.delete(e),e(0)):(t.add(e),Av())}function Av(){Fv<0&&(Fv=0,"demand"!==$v.frameLoop&&Ov(jv))}function jv(){~Fv&&(Ov(jv),$v.batchedUpdates(Bv))}function Bv(){const e=Fv;Fv=$v.now();const t=_v(Fv);t&&(zv(Ev.splice(0,t),(e=>e.handler())),Tv-=t),Tv?(Sv.flush(),wv.flush(e?Math.min(64,Fv-e):16.667),Dv.flush(),Cv.flush(),kv.flush()):Fv=-1}function Rv(){let e=new Set,t=e;return{add(r){Tv+=t!=e||e.has(r)?0:1,e.add(r)},delete:r=>(Tv-=t==e&&e.has(r)?1:0,e.delete(r)),flush(r){t.size&&(e=new Set,Tv-=t.size,zv(t,(t=>t(r)&&e.add(t))),Tv+=e.size,t=e)}}}function zv(e,t){e.forEach((e=>{try{t(e)}catch(e){$v.catch(e)}}))}function Pv(){}var Lv={arr:Array.isArray,obj:e=>!!e&&"Object"===e.constructor.name,fun:e=>"function"==typeof e,str:e=>"string"==typeof e,num:e=>"number"==typeof e,und:e=>void 0===e};function Nv(e,t){if(Lv.arr(e)){if(!Lv.arr(t)||e.length!==t.length)return!1;for(let r=0;r<e.length;r++)if(e[r]!==t[r])return!1;return!0}return e===t}var Hv=(e,t)=>e.forEach(t);function Wv(e,t,r){if(Lv.arr(e))for(let n=0;n<e.length;n++)t.call(r,e[n],`${n}`);else for(const n in e)e.hasOwnProperty(n)&&t.call(r,e[n],n)}var Vv=e=>Lv.und(e)?[]:Lv.arr(e)?e:[e];function Yv(e,t){if(e.size){const r=Array.from(e);e.clear(),Hv(r,t)}}var Uv,Kv,qv=(e,...t)=>Yv(e,(e=>e(...t))),Gv=()=>"undefined"==typeof window||!window.navigator||/ServerSideRendering|^Deno\//.test(window.navigator.userAgent),Qv=null,Zv=!1,Xv=Pv,Jv=e=>{e.to&&(Kv=e.to),e.now&&($v.now=e.now),void 0!==e.colors&&(Qv=e.colors),null!=e.skipAnimation&&(Zv=e.skipAnimation),e.createStringInterpolator&&(Uv=e.createStringInterpolator),e.requestAnimationFrame&&$v.use(e.requestAnimationFrame),e.batchedUpdates&&($v.batchedUpdates=e.batchedUpdates),e.willAdvance&&(Xv=e.willAdvance),e.frameLoop&&($v.frameLoop=e.frameLoop)},ey=new Set,ty=[],ry=[],ny=0,oy={get idle(){return!ey.size&&!ty.length},start(e){ny>e.priority?(ey.add(e),$v.onStart(iy)):(ay(e),$v(ly))},advance:ly,sort(e){if(ny)$v.onFrame((()=>oy.sort(e)));else{const t=ty.indexOf(e);~t&&(ty.splice(t,1),sy(e))}},clear(){ty=[],ey.clear()}};function iy(){ey.forEach(ay),ey.clear(),$v(ly)}function ay(e){ty.includes(e)||sy(e)}function sy(e){ty.splice(function(e,t){const r=e.findIndex(t);return r<0?e.length:r}(ty,(t=>t.priority>e.priority)),0,e)}function ly(e){const t=ry;for(let r=0;r<ty.length;r++){const n=ty[r];ny=n.priority,n.idle||(Xv(n),n.advance(e),n.idle||t.push(n))}return ny=0,(ry=ty).length=0,(ty=t).length>0}var cy="[-+]?\\d*\\.?\\d+",dy=cy+"%";function uy(...e){return"\\(\\s*("+e.join(")\\s*,\\s*(")+")\\s*\\)"}var fy=new RegExp("rgb"+uy(cy,cy,cy)),hy=new RegExp("rgba"+uy(cy,cy,cy,cy)),py=new RegExp("hsl"+uy(cy,dy,dy)),gy=new RegExp("hsla"+uy(cy,dy,dy,cy)),my=/^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,by=/^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,vy=/^#([0-9a-fA-F]{6})$/,yy=/^#([0-9a-fA-F]{8})$/;function xy(e,t,r){return r<0&&(r+=1),r>1&&(r-=1),r<1/6?e+6*(t-e)*r:r<.5?t:r<2/3?e+(t-e)*(2/3-r)*6:e}function wy(e,t,r){const n=r<.5?r*(1+t):r+t-r*t,o=2*r-n,i=xy(o,n,e+1/3),a=xy(o,n,e),s=xy(o,n,e-1/3);return Math.round(255*i)<<24|Math.round(255*a)<<16|Math.round(255*s)<<8}function $y(e){const t=parseInt(e,10);return t<0?0:t>255?255:t}function Cy(e){return(parseFloat(e)%360+360)%360/360}function Sy(e){const t=parseFloat(e);return t<0?0:t>1?255:Math.round(255*t)}function Dy(e){const t=parseFloat(e);return t<0?0:t>100?1:t/100}function ky(e){let t=function(e){let t;return"number"==typeof e?e>>>0===e&&e>=0&&e<=4294967295?e:null:(t=vy.exec(e))?parseInt(t[1]+"ff",16)>>>0:Qv&&void 0!==Qv[e]?Qv[e]:(t=fy.exec(e))?($y(t[1])<<24|$y(t[2])<<16|$y(t[3])<<8|255)>>>0:(t=hy.exec(e))?($y(t[1])<<24|$y(t[2])<<16|$y(t[3])<<8|Sy(t[4]))>>>0:(t=my.exec(e))?parseInt(t[1]+t[1]+t[2]+t[2]+t[3]+t[3]+"ff",16)>>>0:(t=yy.exec(e))?parseInt(t[1],16)>>>0:(t=by.exec(e))?parseInt(t[1]+t[1]+t[2]+t[2]+t[3]+t[3]+t[4]+t[4],16)>>>0:(t=py.exec(e))?(255|wy(Cy(t[1]),Dy(t[2]),Dy(t[3])))>>>0:(t=gy.exec(e))?(wy(Cy(t[1]),Dy(t[2]),Dy(t[3]))|Sy(t[4]))>>>0:null}(e);if(null===t)return e;t=t||0;return`rgba(${(4278190080&t)>>>24}, ${(16711680&t)>>>16}, ${(65280&t)>>>8}, ${(255&t)/255})`}var Ey=(e,t,r)=>{if(Lv.fun(e))return e;if(Lv.arr(e))return Ey({range:e,output:t,extrapolate:r});if(Lv.str(e.output[0]))return Uv(e);const n=e,o=n.output,i=n.range||[0,1],a=n.extrapolateLeft||n.extrapolate||"extend",s=n.extrapolateRight||n.extrapolate||"extend",l=n.easing||(e=>e);return e=>{const t=function(e,t){for(var r=1;r<t.length-1&&!(t[r]>=e);++r);return r-1}(e,i);return function(e,t,r,n,o,i,a,s,l){let c=l?l(e):e;if(c<t){if("identity"===a)return c;"clamp"===a&&(c=t)}if(c>r){if("identity"===s)return c;"clamp"===s&&(c=r)}if(n===o)return n;if(t===r)return e<=t?n:o;t===-1/0?c=-c:r===1/0?c-=t:c=(c-t)/(r-t);c=i(c),n===-1/0?c=-c:o===1/0?c+=n:c=c*(o-n)+n;return c}(e,i[t],i[t+1],o[t],o[t+1],l,a,s,n.map)}};var _y=1.70158,Oy=1.525*_y,Fy=_y+1,Ty=2*Math.PI/3,Iy=2*Math.PI/4.5,My=e=>{const t=7.5625,r=2.75;return e<1/r?t*e*e:e<2/r?t*(e-=1.5/r)*e+.75:e<2.5/r?t*(e-=2.25/r)*e+.9375:t*(e-=2.625/r)*e+.984375},Ay={linear:e=>e,easeInQuad:e=>e*e,easeOutQuad:e=>1-(1-e)*(1-e),easeInOutQuad:e=>e<.5?2*e*e:1-Math.pow(-2*e+2,2)/2,easeInCubic:e=>e*e*e,easeOutCubic:e=>1-Math.pow(1-e,3),easeInOutCubic:e=>e<.5?4*e*e*e:1-Math.pow(-2*e+2,3)/2,easeInQuart:e=>e*e*e*e,easeOutQuart:e=>1-Math.pow(1-e,4),easeInOutQuart:e=>e<.5?8*e*e*e*e:1-Math.pow(-2*e+2,4)/2,easeInQuint:e=>e*e*e*e*e,easeOutQuint:e=>1-Math.pow(1-e,5),easeInOutQuint:e=>e<.5?16*e*e*e*e*e:1-Math.pow(-2*e+2,5)/2,easeInSine:e=>1-Math.cos(e*Math.PI/2),easeOutSine:e=>Math.sin(e*Math.PI/2),easeInOutSine:e=>-(Math.cos(Math.PI*e)-1)/2,easeInExpo:e=>0===e?0:Math.pow(2,10*e-10),easeOutExpo:e=>1===e?1:1-Math.pow(2,-10*e),easeInOutExpo:e=>0===e?0:1===e?1:e<.5?Math.pow(2,20*e-10)/2:(2-Math.pow(2,-20*e+10))/2,easeInCirc:e=>1-Math.sqrt(1-Math.pow(e,2)),easeOutCirc:e=>Math.sqrt(1-Math.pow(e-1,2)),easeInOutCirc:e=>e<.5?(1-Math.sqrt(1-Math.pow(2*e,2)))/2:(Math.sqrt(1-Math.pow(-2*e+2,2))+1)/2,easeInBack:e=>Fy*e*e*e-_y*e*e,easeOutBack:e=>1+Fy*Math.pow(e-1,3)+_y*Math.pow(e-1,2),easeInOutBack:e=>e<.5?Math.pow(2*e,2)*(7.189819*e-Oy)/2:(Math.pow(2*e-2,2)*((Oy+1)*(2*e-2)+Oy)+2)/2,easeInElastic:e=>0===e?0:1===e?1:-Math.pow(2,10*e-10)*Math.sin((10*e-10.75)*Ty),easeOutElastic:e=>0===e?0:1===e?1:Math.pow(2,-10*e)*Math.sin((10*e-.75)*Ty)+1,easeInOutElastic:e=>0===e?0:1===e?1:e<.5?-Math.pow(2,20*e-10)*Math.sin((20*e-11.125)*Iy)/2:Math.pow(2,-20*e+10)*Math.sin((20*e-11.125)*Iy)/2+1,easeInBounce:e=>1-My(1-e),easeOutBounce:My,easeInOutBounce:e=>e<.5?(1-My(1-2*e))/2:(1+My(2*e-1))/2,steps:(e,t="end")=>r=>{const n=(r="end"===t?Math.min(r,.999):Math.max(r,.001))*e,o="end"===t?Math.floor(n):Math.ceil(n);return i=0,a=1,s=o/e,Math.min(Math.max(s,i),a);var i,a,s}},jy=Symbol.for("FluidValue.get"),By=Symbol.for("FluidValue.observers"),Ry=e=>Boolean(e&&e[jy]),zy=e=>e&&e[jy]?e[jy]():e,Py=e=>e[By]||null;function Ly(e,t){const r=e[By];r&&r.forEach((e=>{!function(e,t){e.eventObserved?e.eventObserved(t):e(t)}(e,t)}))}var Ny=class{constructor(e){if(!e&&!(e=this.get))throw Error("Unknown getter");Hy(this,e)}},Hy=(e,t)=>Uy(e,jy,t);function Wy(e,t){if(e[jy]){let r=e[By];r||Uy(e,By,r=new Set),r.has(t)||(r.add(t),e.observerAdded&&e.observerAdded(r.size,t))}return t}function Vy(e,t){const r=e[By];if(r&&r.has(t)){const n=r.size-1;n?r.delete(t):e[By]=null,e.observerRemoved&&e.observerRemoved(n,t)}}var Yy,Uy=(e,t,r)=>Object.defineProperty(e,t,{value:r,writable:!0,configurable:!0}),Ky=/[+\-]?(?:0|[1-9]\d*)(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,qy=/(#(?:[0-9a-f]{2}){2,4}|(#[0-9a-f]{3})|(rgb|hsl)a?\((-?\d+%?[,\s]+){2,3}\s*[\d\.]+%?\))/gi,Gy=new RegExp(`(${Ky.source})(%|[a-z]+)`,"i"),Qy=/rgba\(([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+)\)/gi,Zy=/var\((--[a-zA-Z0-9-_]+),? ?([a-zA-Z0-9 ()%#.,-]+)?\)/,Xy=e=>{const[t,r]=Jy(e);if(!t||Gv())return e;const n=window.getComputedStyle(document.documentElement).getPropertyValue(t);if(n)return n.trim();if(r&&r.startsWith("--")){const t=window.getComputedStyle(document.documentElement).getPropertyValue(r);return t||e}return r&&Zy.test(r)?Xy(r):r||e},Jy=e=>{const t=Zy.exec(e);if(!t)return[,];const[,r,n]=t;return[r,n]},ex=(e,t,r,n,o)=>`rgba(${Math.round(t)}, ${Math.round(r)}, ${Math.round(n)}, ${o})`,tx=e=>{Yy||(Yy=Qv?new RegExp(`(${Object.keys(Qv).join("|")})(?!\\w)`,"g"):/^\b$/);const t=e.output.map((e=>zy(e).replace(Zy,Xy).replace(qy,ky).replace(Yy,ky))),r=t.map((e=>e.match(Ky).map(Number))),n=r[0].map(((e,t)=>r.map((e=>{if(!(t in e))throw Error('The arity of each "output" value must be equal');return e[t]})))),o=n.map((t=>Ey({...e,output:t})));return e=>{const r=!Gy.test(t[0])&&t.find((e=>Gy.test(e)))?.replace(Ky,"");let n=0;return t[0].replace(Ky,(()=>`${o[n++](e)}${r||""}`)).replace(Qy,ex)}},rx="react-spring: ",nx=e=>{const t=e;let r=!1;if("function"!=typeof t)throw new TypeError(`${rx}once requires a function parameter`);return(...e)=>{r||(t(...e),r=!0)}},ox=nx(console.warn);var ix=nx(console.warn);function ax(e){return Lv.str(e)&&("#"==e[0]||/\d/.test(e)||!Gv()&&Zy.test(e)||e in(Qv||{}))}var sx=Gv()?c:p;function lx(){const e=g()[1],t=(()=>{const e=s(!1);return sx((()=>(e.current=!0,()=>{e.current=!1})),[]),e})();return()=>{t.current&&e(Math.random())}}var cx=e=>c(e,dx),dx=[];function ux(e){const t=s();return c((()=>{t.current=e})),t.current}var fx=Symbol.for("Animated:node"),hx=e=>e&&e[fx],px=(e,t)=>((e,t,r)=>Object.defineProperty(e,t,{value:r,writable:!0,configurable:!0}))(e,fx,t),gx=e=>e&&e[fx]&&e[fx].getPayload(),mx=class{constructor(){px(this,this)}getPayload(){return this.payload||[]}},bx=class extends mx{constructor(e){super(),this._value=e,this.done=!0,this.durationProgress=0,Lv.num(this._value)&&(this.lastPosition=this._value)}static create(e){return new bx(e)}getPayload(){return[this]}getValue(){return this._value}setValue(e,t){return Lv.num(e)&&(this.lastPosition=e,t&&(e=Math.round(e/t)*t,this.done&&(this.lastPosition=e))),this._value!==e&&(this._value=e,!0)}reset(){const{done:e}=this;this.done=!1,Lv.num(this._value)&&(this.elapsedTime=0,this.durationProgress=0,this.lastPosition=this._value,e&&(this.lastVelocity=null),this.v0=null)}},vx=class extends bx{constructor(e){super(0),this._string=null,this._toString=Ey({output:[e,e]})}static create(e){return new vx(e)}getValue(){const e=this._string;return null==e?this._string=this._toString(this._value):e}setValue(e){if(Lv.str(e)){if(e==this._string)return!1;this._string=e,this._value=1}else{if(!super.setValue(e))return!1;this._string=null}return!0}reset(e){e&&(this._toString=Ey({output:[this.getValue(),e]})),this._value=0,super.reset()}},yx={dependencies:null},xx=class extends mx{constructor(e){super(),this.source=e,this.setValue(e)}getValue(e){const t={};return Wv(this.source,((r,n)=>{var o;(o=r)&&o[fx]===o?t[n]=r.getValue(e):Ry(r)?t[n]=zy(r):e||(t[n]=r)})),t}setValue(e){this.source=e,this.payload=this._makePayload(e)}reset(){this.payload&&Hv(this.payload,(e=>e.reset()))}_makePayload(e){if(e){const t=new Set;return Wv(e,this._addToPayload,t),Array.from(t)}}_addToPayload(e){yx.dependencies&&Ry(e)&&yx.dependencies.add(e);const t=gx(e);t&&Hv(t,(e=>this.add(e)))}},wx=class extends xx{constructor(e){super(e)}static create(e){return new wx(e)}getValue(){return this.source.map((e=>e.getValue()))}setValue(e){const t=this.getPayload();return e.length==t.length?t.map(((t,r)=>t.setValue(e[r]))).some(Boolean):(super.setValue(e.map($x)),!0)}};function $x(e){return(ax(e)?vx:bx).create(e)}function Cx(e){const t=hx(e);return t?t.constructor:Lv.arr(e)?wx:ax(e)?vx:bx}var Sx=(e,t)=>{const r=!Lv.fun(e)||e.prototype&&e.prototype.isReactComponent;return u(((o,i)=>{const a=s(null),l=r&&d((e=>{a.current=function(e,t){e&&(Lv.fun(e)?e(t):e.current=t);return t}(i,e)}),[i]),[u,f]=function(e,t){const r=new Set;yx.dependencies=r,e.style&&(e={...e,style:t.createAnimatedStyle(e.style)});return e=new xx(e),yx.dependencies=null,[e,r]}(o,t),h=lx(),p=()=>{const e=a.current;if(r&&!e)return;!1===(!!e&&t.applyAnimatedValues(e,u.getValue(!0)))&&h()},g=new Dx(p,f),m=s();sx((()=>(m.current=g,Hv(f,(e=>Wy(e,g))),()=>{m.current&&(Hv(m.current.deps,(e=>Vy(e,m.current))),$v.cancel(m.current.update))}))),c(p,[]),cx((()=>()=>{const e=m.current;Hv(e.deps,(t=>Vy(t,e)))}));const b=t.getComponentProps(u.getValue());return n.createElement(e,{...b,ref:l})}))},Dx=class{constructor(e,t){this.update=e,this.deps=t}eventObserved(e){"change"==e.type&&$v.write(this.update)}};var kx=Symbol.for("AnimatedComponent"),Ex=e=>Lv.str(e)?e:e&&Lv.str(e.displayName)?e.displayName:Lv.fun(e)&&e.name||null;function _x(e,...t){return Lv.fun(e)?e(...t):e}var Ox=(e,t)=>!0===e||!!(t&&e&&(Lv.fun(e)?e(t):Vv(e).includes(t))),Fx=(e,t)=>Lv.obj(e)?t&&e[t]:e,Tx=(e,t)=>!0===e.default?e[t]:e.default?e.default[t]:void 0,Ix=e=>e,Mx=(e,t=Ix)=>{let r=Ax;e.default&&!0!==e.default&&(e=e.default,r=Object.keys(e));const n={};for(const o of r){const r=t(e[o],o);Lv.und(r)||(n[o]=r)}return n},Ax=["config","onProps","onStart","onChange","onPause","onResume","onRest"],jx={config:1,from:1,to:1,ref:1,loop:1,reset:1,pause:1,cancel:1,reverse:1,immediate:1,default:1,delay:1,onProps:1,onStart:1,onChange:1,onPause:1,onResume:1,onRest:1,onResolve:1,items:1,trail:1,sort:1,expires:1,initial:1,enter:1,update:1,leave:1,children:1,onDestroyed:1,keys:1,callId:1,parentId:1};function Bx(e){const t=function(e){const t={};let r=0;if(Wv(e,((e,n)=>{jx[n]||(t[n]=e,r++)})),r)return t}(e);if(t){const r={to:t};return Wv(e,((e,n)=>n in t||(r[n]=e))),r}return{...e}}function Rx(e){return e=zy(e),Lv.arr(e)?e.map(Rx):ax(e)?xv.createStringInterpolator({range:[0,1],output:[e,e]})(1):e}function zx(e){return Lv.fun(e)||Lv.arr(e)&&Lv.obj(e[0])}var Px={tension:170,friction:26,mass:1,damping:1,easing:Ay.linear,clamp:!1},Lx=class{constructor(){this.velocity=0,Object.assign(this,Px)}};function Nx(e,t){if(Lv.und(t.decay)){const r=!Lv.und(t.tension)||!Lv.und(t.friction);!r&&Lv.und(t.frequency)&&Lv.und(t.damping)&&Lv.und(t.mass)||(e.duration=void 0,e.decay=void 0),r&&(e.frequency=void 0)}else e.duration=void 0}var Hx=[],Wx=class{constructor(){this.changed=!1,this.values=Hx,this.toValues=null,this.fromValues=Hx,this.config=new Lx,this.immediate=!1}};function Vx(e,{key:t,props:r,defaultProps:n,state:o,actions:i}){return new Promise(((a,s)=>{let l,c,d=Ox(r.cancel??n?.cancel,t);if(d)h();else{Lv.und(r.pause)||(o.paused=Ox(r.pause,t));let e=n?.pause;!0!==e&&(e=o.paused||Ox(e,t)),l=_x(r.delay||0,t),e?(o.resumeQueue.add(f),i.pause()):(i.resume(),f())}function u(){o.resumeQueue.add(f),o.timeouts.delete(c),c.cancel(),l=c.time-$v.now()}function f(){l>0&&!xv.skipAnimation?(o.delayed=!0,c=$v.setTimeout(h,l),o.pauseQueue.add(u),o.timeouts.add(c)):h()}function h(){o.delayed&&(o.delayed=!1),o.pauseQueue.delete(u),o.timeouts.delete(c),e<=(o.cancelId||0)&&(d=!0);try{i.start({...r,callId:e,cancel:d},a)}catch(e){s(e)}}}))}var Yx=(e,t)=>1==t.length?t[0]:t.some((e=>e.cancelled))?qx(e.get()):t.every((e=>e.noop))?Ux(e.get()):Kx(e.get(),t.every((e=>e.finished))),Ux=e=>({value:e,noop:!0,finished:!0,cancelled:!1}),Kx=(e,t,r=!1)=>({value:e,finished:t,cancelled:r}),qx=e=>({value:e,cancelled:!0,finished:!1});function Gx(e,t,r,n){const{callId:o,parentId:i,onRest:a}=t,{asyncTo:s,promise:l}=r;return i||e!==s||t.reset?r.promise=(async()=>{r.asyncId=o,r.asyncTo=e;const c=Mx(t,((e,t)=>"onRest"===t?void 0:e));let d,u;const f=new Promise(((e,t)=>(d=e,u=t))),h=e=>{const t=o<=(r.cancelId||0)&&qx(n)||o!==r.asyncId&&Kx(n,!1);if(t)throw e.result=t,u(e),e},p=(e,t)=>{const i=new Zx,a=new Xx;return(async()=>{if(xv.skipAnimation)throw Qx(r),a.result=Kx(n,!1),u(a),a;h(i);const s=Lv.obj(e)?{...e}:{...t,to:e};s.parentId=o,Wv(c,((e,t)=>{Lv.und(s[t])&&(s[t]=e)}));const l=await n.start(s);return h(i),r.paused&&await new Promise((e=>{r.resumeQueue.add(e)})),l})()};let g;if(xv.skipAnimation)return Qx(r),Kx(n,!1);try{let t;t=Lv.arr(e)?(async e=>{for(const t of e)await p(t)})(e):Promise.resolve(e(p,n.stop.bind(n))),await Promise.all([t.then(d),f]),g=Kx(n.get(),!0,!1)}catch(e){if(e instanceof Zx)g=e.result;else{if(!(e instanceof Xx))throw e;g=e.result}}finally{o==r.asyncId&&(r.asyncId=i,r.asyncTo=i?s:void 0,r.promise=i?l:void 0)}return Lv.fun(a)&&$v.batchedUpdates((()=>{a(g,n,n.item)})),g})():l}function Qx(e,t){Yv(e.timeouts,(e=>e.cancel())),e.pauseQueue.clear(),e.resumeQueue.clear(),e.asyncId=e.asyncTo=e.promise=void 0,t&&(e.cancelId=t)}var Zx=class extends Error{constructor(){super("An async animation has been interrupted. You see this error because you forgot to use `await` or `.catch(...)` on its returned promise.")}},Xx=class extends Error{constructor(){super("SkipAnimationSignal")}},Jx=e=>e instanceof tw,ew=1,tw=class extends Ny{constructor(){super(...arguments),this.id=ew++,this._priority=0}get priority(){return this._priority}set priority(e){this._priority!=e&&(this._priority=e,this._onPriorityChange(e))}get(){const e=hx(this);return e&&e.getValue()}to(...e){return xv.to(this,e)}interpolate(...e){return ox(`${rx}The "interpolate" function is deprecated in v9 (use "to" instead)`),xv.to(this,e)}toJSON(){return this.get()}observerAdded(e){1==e&&this._attach()}observerRemoved(e){0==e&&this._detach()}_attach(){}_detach(){}_onChange(e,t=!1){Ly(this,{type:"change",parent:this,value:e,idle:t})}_onPriorityChange(e){this.idle||oy.sort(this),Ly(this,{type:"priority",parent:this,priority:e})}},rw=Symbol.for("SpringPhase"),nw=e=>(1&e[rw])>0,ow=e=>(2&e[rw])>0,iw=e=>(4&e[rw])>0,aw=(e,t)=>t?e[rw]|=3:e[rw]&=-3,sw=(e,t)=>t?e[rw]|=4:e[rw]&=-5,lw=class extends tw{constructor(e,t){if(super(),this.animation=new Wx,this.defaultProps={},this._state={paused:!1,delayed:!1,pauseQueue:new Set,resumeQueue:new Set,timeouts:new Set},this._pendingCalls=new Set,this._lastCallId=0,this._lastToId=0,this._memoizedDuration=0,!Lv.und(e)||!Lv.und(t)){const r=Lv.obj(e)?{...e}:{...t,from:e};Lv.und(r.default)&&(r.default=!0),this.start(r)}}get idle(){return!(ow(this)||this._state.asyncTo)||iw(this)}get goal(){return zy(this.animation.to)}get velocity(){const e=hx(this);return e instanceof bx?e.lastVelocity||0:e.getPayload().map((e=>e.lastVelocity||0))}get hasAnimated(){return nw(this)}get isAnimating(){return ow(this)}get isPaused(){return iw(this)}get isDelayed(){return this._state.delayed}advance(e){let t=!0,r=!1;const n=this.animation;let{toValues:o}=n;const{config:i}=n,a=gx(n.to);!a&&Ry(n.to)&&(o=Vv(zy(n.to))),n.values.forEach(((s,l)=>{if(s.done)return;const c=s.constructor==vx?1:a?a[l].lastPosition:o[l];let d=n.immediate,u=c;if(!d){if(u=s.lastPosition,i.tension<=0)return void(s.done=!0);let t=s.elapsedTime+=e;const r=n.fromValues[l],o=null!=s.v0?s.v0:s.v0=Lv.arr(i.velocity)?i.velocity[l]:i.velocity;let a;const f=i.precision||(r==c?.005:Math.min(1,.001*Math.abs(c-r)));if(Lv.und(i.duration))if(i.decay){const e=!0===i.decay?.998:i.decay,n=Math.exp(-(1-e)*t);u=r+o/(1-e)*(1-n),d=Math.abs(s.lastPosition-u)<=f,a=o*n}else{a=null==s.lastVelocity?o:s.lastVelocity;const t=i.restVelocity||f/10,n=i.clamp?0:i.bounce,l=!Lv.und(n),h=r==c?s.v0>0:r<c;let p,g=!1;const m=1,b=Math.ceil(e/m);for(let e=0;e<b&&(p=Math.abs(a)>t,p||(d=Math.abs(c-u)<=f,!d));++e){l&&(g=u==c||u>c==h,g&&(a=-a*n,u=c));a+=(1e-6*-i.tension*(u-c)+.001*-i.friction*a)/i.mass*m,u+=a*m}}else{let n=1;i.duration>0&&(this._memoizedDuration!==i.duration&&(this._memoizedDuration=i.duration,s.durationProgress>0&&(s.elapsedTime=i.duration*s.durationProgress,t=s.elapsedTime+=e)),n=(i.progress||0)+t/this._memoizedDuration,n=n>1?1:n<0?0:n,s.durationProgress=n),u=r+i.easing(n)*(c-r),a=(u-s.lastPosition)/e,d=1==n}s.lastVelocity=a,Number.isNaN(u)&&(console.warn("Got NaN while animating:",this),d=!0)}a&&!a[l].done&&(d=!1),d?s.done=!0:t=!1,s.setValue(u,i.round)&&(r=!0)}));const s=hx(this),l=s.getValue();if(t){const e=zy(n.to);l===e&&!r||i.decay?r&&i.decay&&this._onChange(l):(s.setValue(e),this._onChange(e)),this._stop()}else r&&this._onChange(l)}set(e){return $v.batchedUpdates((()=>{this._stop(),this._focus(e),this._set(e)})),this}pause(){this._update({pause:!0})}resume(){this._update({pause:!1})}finish(){if(ow(this)){const{to:e,config:t}=this.animation;$v.batchedUpdates((()=>{this._onStart(),t.decay||this._set(e,!1),this._stop()}))}return this}update(e){return(this.queue||(this.queue=[])).push(e),this}start(e,t){let r;return Lv.und(e)?(r=this.queue||[],this.queue=[]):r=[Lv.obj(e)?e:{...t,to:e}],Promise.all(r.map((e=>this._update(e)))).then((e=>Yx(this,e)))}stop(e){const{to:t}=this.animation;return this._focus(this.get()),Qx(this._state,e&&this._lastCallId),$v.batchedUpdates((()=>this._stop(t,e))),this}reset(){this._update({reset:!0})}eventObserved(e){"change"==e.type?this._start():"priority"==e.type&&(this.priority=e.priority+1)}_prepareNode(e){const t=this.key||"";let{to:r,from:n}=e;r=Lv.obj(r)?r[t]:r,(null==r||zx(r))&&(r=void 0),n=Lv.obj(n)?n[t]:n,null==n&&(n=void 0);const o={to:r,from:n};return nw(this)||(e.reverse&&([r,n]=[n,r]),n=zy(n),Lv.und(n)?hx(this)||this._set(r):this._set(n)),o}_update({...e},t){const{key:r,defaultProps:n}=this;e.default&&Object.assign(n,Mx(e,((e,t)=>/^on/.test(t)?Fx(e,r):e))),gw(this,e,"onProps"),mw(this,"onProps",e,this);const o=this._prepareNode(e);if(Object.isFrozen(this))throw Error("Cannot animate a `SpringValue` object that is frozen. Did you forget to pass your component to `animated(...)` before animating its props?");const i=this._state;return Vx(++this._lastCallId,{key:r,props:e,defaultProps:n,state:i,actions:{pause:()=>{iw(this)||(sw(this,!0),qv(i.pauseQueue),mw(this,"onPause",Kx(this,cw(this,this.animation.to)),this))},resume:()=>{iw(this)&&(sw(this,!1),ow(this)&&this._resume(),qv(i.resumeQueue),mw(this,"onResume",Kx(this,cw(this,this.animation.to)),this))},start:this._merge.bind(this,o)}}).then((r=>{if(e.loop&&r.finished&&(!t||!r.noop)){const t=dw(e);if(t)return this._update(t,!0)}return r}))}_merge(e,t,r){if(t.cancel)return this.stop(!0),r(qx(this));const n=!Lv.und(e.to),o=!Lv.und(e.from);if(n||o){if(!(t.callId>this._lastToId))return r(qx(this));this._lastToId=t.callId}const{key:i,defaultProps:a,animation:s}=this,{to:l,from:c}=s;let{to:d=l,from:u=c}=e;!o||n||t.default&&!Lv.und(d)||(d=u),t.reverse&&([d,u]=[u,d]);const f=!Nv(u,c);f&&(s.from=u),u=zy(u);const h=!Nv(d,l);h&&this._focus(d);const p=zx(t.to),{config:g}=s,{decay:m,velocity:b}=g;(n||o)&&(g.velocity=0),t.config&&!p&&function(e,t,r){r&&(Nx(r={...r},t),t={...r,...t}),Nx(e,t),Object.assign(e,t);for(const t in Px)null==e[t]&&(e[t]=Px[t]);let{frequency:n,damping:o}=e;const{mass:i}=e;Lv.und(n)||(n<.01&&(n=.01),o<0&&(o=0),e.tension=Math.pow(2*Math.PI/n,2)*i,e.friction=4*Math.PI*o*i/n)}(g,_x(t.config,i),t.config!==a.config?_x(a.config,i):void 0);let v=hx(this);if(!v||Lv.und(d))return r(Kx(this,!0));const y=Lv.und(t.reset)?o&&!t.default:!Lv.und(u)&&Ox(t.reset,i),x=y?u:this.get(),w=Rx(d),$=Lv.num(w)||Lv.arr(w)||ax(w),C=!p&&(!$||Ox(a.immediate||t.immediate,i));if(h){const e=Cx(d);if(e!==v.constructor){if(!C)throw Error(`Cannot animate between ${v.constructor.name} and ${e.name}, as the "to" prop suggests`);v=this._set(w)}}const S=v.constructor;let D=Ry(d),k=!1;if(!D){const e=y||!nw(this)&&f;(h||e)&&(k=Nv(Rx(x),w),D=!k),(Nv(s.immediate,C)||C)&&Nv(g.decay,m)&&Nv(g.velocity,b)||(D=!0)}if(k&&ow(this)&&(s.changed&&!y?D=!0:D||this._stop(l)),!p&&((D||Ry(l))&&(s.values=v.getPayload(),s.toValues=Ry(d)?null:S==vx?[1]:Vv(w)),s.immediate!=C&&(s.immediate=C,C||y||this._set(l)),D)){const{onRest:e}=s;Hv(pw,(e=>gw(this,t,e)));const n=Kx(this,cw(this,l));qv(this._pendingCalls,n),this._pendingCalls.add(r),s.changed&&$v.batchedUpdates((()=>{s.changed=!y,e?.(n,this),y?_x(a.onRest,n):s.onStart?.(n,this)}))}y&&this._set(x),p?r(Gx(t.to,t,this._state,this)):D?this._start():ow(this)&&!h?this._pendingCalls.add(r):r(Ux(x))}_focus(e){const t=this.animation;e!==t.to&&(Py(this)&&this._detach(),t.to=e,Py(this)&&this._attach())}_attach(){let e=0;const{to:t}=this.animation;Ry(t)&&(Wy(t,this),Jx(t)&&(e=t.priority+1)),this.priority=e}_detach(){const{to:e}=this.animation;Ry(e)&&Vy(e,this)}_set(e,t=!0){const r=zy(e);if(!Lv.und(r)){const e=hx(this);if(!e||!Nv(r,e.getValue())){const n=Cx(r);e&&e.constructor==n?e.setValue(r):px(this,n.create(r)),e&&$v.batchedUpdates((()=>{this._onChange(r,t)}))}}return hx(this)}_onStart(){const e=this.animation;e.changed||(e.changed=!0,mw(this,"onStart",Kx(this,cw(this,e.to)),this))}_onChange(e,t){t||(this._onStart(),_x(this.animation.onChange,e,this)),_x(this.defaultProps.onChange,e,this),super._onChange(e,t)}_start(){const e=this.animation;hx(this).reset(zy(e.to)),e.immediate||(e.fromValues=e.values.map((e=>e.lastPosition))),ow(this)||(aw(this,!0),iw(this)||this._resume())}_resume(){xv.skipAnimation?this.finish():oy.start(this)}_stop(e,t){if(ow(this)){aw(this,!1);const r=this.animation;Hv(r.values,(e=>{e.done=!0})),r.toValues&&(r.onChange=r.onPause=r.onResume=void 0),Ly(this,{type:"idle",parent:this});const n=t?qx(this.get()):Kx(this.get(),cw(this,e??r.to));qv(this._pendingCalls,n),r.changed&&(r.changed=!1,mw(this,"onRest",n,this))}}};function cw(e,t){const r=Rx(t);return Nv(Rx(e.get()),r)}function dw(e,t=e.loop,r=e.to){const n=_x(t);if(n){const o=!0!==n&&Bx(n),i=(o||e).reverse,a=!o||o.reset;return uw({...e,loop:t,default:!1,pause:void 0,to:!i||zx(r)?r:void 0,from:a?e.from:void 0,reset:a,...o})}}function uw(e){const{to:t,from:r}=e=Bx(e),n=new Set;return Lv.obj(t)&&hw(t,n),Lv.obj(r)&&hw(r,n),e.keys=n.size?Array.from(n):null,e}function fw(e){const t=uw(e);return Lv.und(t.default)&&(t.default=Mx(t)),t}function hw(e,t){Wv(e,((e,r)=>null!=e&&t.add(r)))}var pw=["onStart","onRest","onChange","onPause","onResume"];function gw(e,t,r){e.animation[r]=t[r]!==Tx(t,r)?Fx(t[r],e.key):void 0}function mw(e,t,...r){e.animation[t]?.(...r),e.defaultProps[t]?.(...r)}var bw=["onStart","onChange","onRest"],vw=1,yw=class{constructor(e,t){this.id=vw++,this.springs={},this.queue=[],this._lastAsyncId=0,this._active=new Set,this._changed=new Set,this._started=!1,this._state={paused:!1,pauseQueue:new Set,resumeQueue:new Set,timeouts:new Set},this._events={onStart:new Map,onChange:new Map,onRest:new Map},this._onFrame=this._onFrame.bind(this),t&&(this._flush=t),e&&this.start({default:!0,...e})}get idle(){return!this._state.asyncTo&&Object.values(this.springs).every((e=>e.idle&&!e.isDelayed&&!e.isPaused))}get item(){return this._item}set item(e){this._item=e}get(){const e={};return this.each(((t,r)=>e[r]=t.get())),e}set(e){for(const t in e){const r=e[t];Lv.und(r)||this.springs[t].set(r)}}update(e){return e&&this.queue.push(uw(e)),this}start(e){let{queue:t}=this;return e?t=Vv(e).map(uw):this.queue=[],this._flush?this._flush(this,t):(kw(this,t),xw(this,t))}stop(e,t){if(e!==!!e&&(t=e),t){const r=this.springs;Hv(Vv(t),(t=>r[t].stop(!!e)))}else Qx(this._state,this._lastAsyncId),this.each((t=>t.stop(!!e)));return this}pause(e){if(Lv.und(e))this.start({pause:!0});else{const t=this.springs;Hv(Vv(e),(e=>t[e].pause()))}return this}resume(e){if(Lv.und(e))this.start({pause:!1});else{const t=this.springs;Hv(Vv(e),(e=>t[e].resume()))}return this}each(e){Wv(this.springs,e)}_onFrame(){const{onStart:e,onChange:t,onRest:r}=this._events,n=this._active.size>0,o=this._changed.size>0;(n&&!this._started||o&&!this._started)&&(this._started=!0,Yv(e,(([e,t])=>{t.value=this.get(),e(t,this,this._item)})));const i=!n&&this._started,a=o||i&&r.size?this.get():null;o&&t.size&&Yv(t,(([e,t])=>{t.value=a,e(t,this,this._item)})),i&&(this._started=!1,Yv(r,(([e,t])=>{t.value=a,e(t,this,this._item)})))}eventObserved(e){if("change"==e.type)this._changed.add(e.parent),e.idle||this._active.add(e.parent);else{if("idle"!=e.type)return;this._active.delete(e.parent)}$v.onFrame(this._onFrame)}};function xw(e,t){return Promise.all(t.map((t=>ww(e,t)))).then((t=>Yx(e,t)))}async function ww(e,t,r){const{keys:n,to:o,from:i,loop:a,onRest:s,onResolve:l}=t,c=Lv.obj(t.default)&&t.default;a&&(t.loop=!1),!1===o&&(t.to=null),!1===i&&(t.from=null);const d=Lv.arr(o)||Lv.fun(o)?o:void 0;d?(t.to=void 0,t.onRest=void 0,c&&(c.onRest=void 0)):Hv(bw,(r=>{const n=t[r];if(Lv.fun(n)){const o=e._events[r];t[r]=({finished:e,cancelled:t})=>{const r=o.get(n);r?(e||(r.finished=!1),t&&(r.cancelled=!0)):o.set(n,{value:null,finished:e||!1,cancelled:t||!1})},c&&(c[r]=t[r])}}));const u=e._state;t.pause===!u.paused?(u.paused=t.pause,qv(t.pause?u.pauseQueue:u.resumeQueue)):u.paused&&(t.pause=!0);const f=(n||Object.keys(e.springs)).map((r=>e.springs[r].start(t))),h=!0===t.cancel||!0===Tx(t,"cancel");(d||h&&u.asyncId)&&f.push(Vx(++e._lastAsyncId,{props:t,state:u,actions:{pause:Pv,resume:Pv,start(t,r){h?(Qx(u,e._lastAsyncId),r(qx(e))):(t.onRest=s,r(Gx(d,t,u,e)))}}})),u.paused&&await new Promise((e=>{u.resumeQueue.add(e)}));const p=Yx(e,await Promise.all(f));if(a&&p.finished&&(!r||!p.noop)){const r=dw(t,a,o);if(r)return kw(e,[r]),ww(e,r,!0)}return l&&$v.batchedUpdates((()=>l(p,e,e.item))),p}function $w(e,t){const r={...e.springs};return t&&Hv(Vv(t),(e=>{Lv.und(e.keys)&&(e=uw(e)),Lv.obj(e.to)||(e={...e,to:void 0}),Dw(r,e,(e=>Sw(e)))})),Cw(e,r),r}function Cw(e,t){Wv(t,((t,r)=>{e.springs[r]||(e.springs[r]=t,Wy(t,e))}))}function Sw(e,t){const r=new lw;return r.key=e,t&&Wy(r,t),r}function Dw(e,t,r){t.keys&&Hv(t.keys,(n=>{(e[n]||(e[n]=r(n)))._prepareNode(t)}))}function kw(e,t){Hv(t,(t=>{Dw(e.springs,t,(t=>Sw(t,e)))}))}var Ew,_w,Ow=({children:e,...t})=>{const r=b(Fw),o=t.pause||!!r.pause,i=t.immediate||!!r.immediate;t=function(e,t){const[r]=g((()=>({inputs:t,result:e()}))),n=s(),o=n.current;let i=o;if(i){const r=Boolean(t&&i.inputs&&function(e,t){if(e.length!==t.length)return!1;for(let r=0;r<e.length;r++)if(e[r]!==t[r])return!1;return!0}(t,i.inputs));r||(i={inputs:t,result:e()})}else i=r;return c((()=>{n.current=i,o==r&&(r.inputs=r.result=void 0)}),[i]),i.result}((()=>({pause:o,immediate:i})),[o,i]);const{Provider:a}=Fw;return n.createElement(a,{value:t},e)},Fw=(Ew=Ow,_w={},Object.assign(Ew,n.createContext(_w)),Ew.Provider._context=Ew,Ew.Consumer._context=Ew,Ew);Ow.Provider=Fw.Provider,Ow.Consumer=Fw.Consumer;var Tw=()=>{const e=[],t=function(t){ix(`${rx}Directly calling start instead of using the api object is deprecated in v9 (use ".start" instead), this will be removed in later 0.X.0 versions`);const n=[];return Hv(e,((e,o)=>{if(Lv.und(t))n.push(e.start());else{const i=r(t,e,o);i&&n.push(e.start(i))}})),n};t.current=e,t.add=function(t){e.includes(t)||e.push(t)},t.delete=function(t){const r=e.indexOf(t);~r&&e.splice(r,1)},t.pause=function(){return Hv(e,(e=>e.pause(...arguments))),this},t.resume=function(){return Hv(e,(e=>e.resume(...arguments))),this},t.set=function(t){Hv(e,((e,r)=>{const n=Lv.fun(t)?t(r,e):t;n&&e.set(n)}))},t.start=function(t){const r=[];return Hv(e,((e,n)=>{if(Lv.und(t))r.push(e.start());else{const o=this._getProps(t,e,n);o&&r.push(e.start(o))}})),r},t.stop=function(){return Hv(e,(e=>e.stop(...arguments))),this},t.update=function(t){return Hv(e,((e,r)=>e.update(this._getProps(t,e,r)))),this};const r=function(e,t,r){return Lv.fun(e)?e(r,t):e};return t._getProps=r,t};function Iw(e,t){const r=Lv.fun(e),[[n],o]=function(e,t,r){const n=Lv.fun(t)&&t;n&&!r&&(r=[]);const o=a((()=>n||3==arguments.length?Tw():void 0),[]),i=s(0),l=lx(),c=a((()=>({ctrls:[],queue:[],flush(e,t){const r=$w(e,t),n=i.current>0&&!c.queue.length&&!Object.keys(r).some((t=>!e.springs[t]));return n?xw(e,t):new Promise((n=>{Cw(e,r),c.queue.push((()=>{n(xw(e,t))})),l()}))}})),[]),d=s([...c.ctrls]),u=[],f=ux(e)||0;function h(e,r){for(let o=e;o<r;o++){const e=d.current[o]||(d.current[o]=new yw(null,c.flush)),r=n?n(o,e):t[o];r&&(u[o]=fw(r))}}a((()=>{Hv(d.current.slice(e,f),(e=>{!function(e,t){e.ref?.delete(e),t?.delete(e)}(e,o),e.stop(!0)})),d.current.length=e,h(f,e)}),[e]),a((()=>{h(0,Math.min(f,e))}),r);const p=d.current.map(((e,t)=>$w(e,u[t]))),g=b(Ow),m=ux(g),v=g!==m&&function(e){for(const t in e)return!0;return!1}(g);sx((()=>{i.current++,c.ctrls=d.current;const{queue:e}=c;e.length&&(c.queue=[],Hv(e,(e=>e()))),Hv(d.current,((e,t)=>{o?.add(e),v&&e.start({default:g});const r=u[t];r&&(function(e,t){t&&e.ref!==t&&(e.ref?.delete(e),t.add(e),e.ref=t)}(e,r.ref),e.ref?e.queue.push(r):e.start(r))}))})),cx((()=>()=>{Hv(c.ctrls,(e=>e.stop(!0)))}));const y=p.map((e=>({...e})));return o?[y,o]:y}(1,r?e:[e],r?t||[]:t);return r||2==arguments.length?[n,o]:n}var Mw=class extends tw{constructor(e,t){super(),this.source=e,this.idle=!0,this._active=new Set,this.calc=Ey(...t);const r=this._get(),n=Cx(r);px(this,n.create(r))}advance(e){const t=this._get();Nv(t,this.get())||(hx(this).setValue(t),this._onChange(t,this.idle)),!this.idle&&jw(this._active)&&Bw(this)}_get(){const e=Lv.arr(this.source)?this.source.map(zy):Vv(zy(this.source));return this.calc(...e)}_start(){this.idle&&!jw(this._active)&&(this.idle=!1,Hv(gx(this),(e=>{e.done=!1})),xv.skipAnimation?($v.batchedUpdates((()=>this.advance())),Bw(this)):oy.start(this))}_attach(){let e=1;Hv(Vv(this.source),(t=>{Ry(t)&&Wy(t,this),Jx(t)&&(t.idle||this._active.add(t),e=Math.max(e,t.priority+1))})),this.priority=e,this._start()}_detach(){Hv(Vv(this.source),(e=>{Ry(e)&&Vy(e,this)})),this._active.clear(),Bw(this)}eventObserved(e){"change"==e.type?e.idle?this.advance():(this._active.add(e.parent),this._start()):"idle"==e.type?this._active.delete(e.parent):"priority"==e.type&&(this.priority=Vv(this.source).reduce(((e,t)=>Math.max(e,(Jx(t)?t.priority:0)+1)),0))}};function Aw(e){return!1!==e.idle}function jw(e){return!e.size||Array.from(e).every(Aw)}function Bw(e){e.idle||(e.idle=!0,Hv(gx(e),(e=>{e.done=!0})),Ly(e,{type:"idle",parent:e}))}xv.assign({createStringInterpolator:tx,to:(e,t)=>new Mw(e,t)});var Rw=/^--/;function zw(e,t){return null==t||"boolean"==typeof t||""===t?"":"number"!=typeof t||0===t||Rw.test(e)||Lw.hasOwnProperty(e)&&Lw[e]?(""+t).trim():t+"px"}var Pw={};var Lw={animationIterationCount:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Nw=["Webkit","Ms","Moz","O"];Lw=Object.keys(Lw).reduce(((e,t)=>(Nw.forEach((r=>e[((e,t)=>e+t.charAt(0).toUpperCase()+t.substring(1))(r,t)]=e[t])),e)),Lw);var Hw=/^(matrix|translate|scale|rotate|skew)/,Ww=/^(translate)/,Vw=/^(rotate|skew)/,Yw=(e,t)=>Lv.num(e)&&0!==e?e+t:e,Uw=(e,t)=>Lv.arr(e)?e.every((e=>Uw(e,t))):Lv.num(e)?e===t:parseFloat(e)===t,Kw=class extends xx{constructor({x:e,y:t,z:r,...n}){const o=[],i=[];(e||t||r)&&(o.push([e||0,t||0,r||0]),i.push((e=>[`translate3d(${e.map((e=>Yw(e,"px"))).join(",")})`,Uw(e,0)]))),Wv(n,((e,t)=>{if("transform"===t)o.push([e||""]),i.push((e=>[e,""===e]));else if(Hw.test(t)){if(delete n[t],Lv.und(e))return;const r=Ww.test(t)?"px":Vw.test(t)?"deg":"";o.push(Vv(e)),i.push("rotate3d"===t?([e,t,n,o])=>[`rotate3d(${e},${t},${n},${Yw(o,r)})`,Uw(o,0)]:e=>[`${t}(${e.map((e=>Yw(e,r))).join(",")})`,Uw(e,t.startsWith("scale")?1:0)])}})),o.length&&(n.transform=new qw(o,i)),super(n)}},qw=class extends Ny{constructor(e,t){super(),this.inputs=e,this.transforms=t,this._value=null}get(){return this._value||(this._value=this._get())}_get(){let e="",t=!0;return Hv(this.inputs,((r,n)=>{const o=zy(r[0]),[i,a]=this.transforms[n](Lv.arr(o)?o:r.map(zy));e+=" "+i,t=t&&a})),t?"none":e}observerAdded(e){1==e&&Hv(this.inputs,(e=>Hv(e,(e=>Ry(e)&&Wy(e,this)))))}observerRemoved(e){0==e&&Hv(this.inputs,(e=>Hv(e,(e=>Ry(e)&&Vy(e,this)))))}eventObserved(e){"change"==e.type&&(this._value=null),Ly(this,e)}};xv.assign({batchedUpdates:M,createStringInterpolator:tx,colors:{transparent:0,aliceblue:4042850303,antiquewhite:4209760255,aqua:16777215,aquamarine:2147472639,azure:4043309055,beige:4126530815,bisque:4293182719,black:255,blanchedalmond:4293643775,blue:65535,blueviolet:2318131967,brown:2771004159,burlywood:3736635391,burntsienna:3934150143,cadetblue:1604231423,chartreuse:2147418367,chocolate:3530104575,coral:4286533887,cornflowerblue:1687547391,cornsilk:4294499583,crimson:3692313855,cyan:16777215,darkblue:35839,darkcyan:9145343,darkgoldenrod:3095792639,darkgray:2846468607,darkgreen:6553855,darkgrey:2846468607,darkkhaki:3182914559,darkmagenta:2332068863,darkolivegreen:1433087999,darkorange:4287365375,darkorchid:2570243327,darkred:2332033279,darksalmon:3918953215,darkseagreen:2411499519,darkslateblue:1211993087,darkslategray:793726975,darkslategrey:793726975,darkturquoise:13554175,darkviolet:2483082239,deeppink:4279538687,deepskyblue:12582911,dimgray:1768516095,dimgrey:1768516095,dodgerblue:512819199,firebrick:2988581631,floralwhite:4294635775,forestgreen:579543807,fuchsia:4278255615,gainsboro:3705462015,ghostwhite:4177068031,gold:4292280575,goldenrod:3668254975,gray:2155905279,green:8388863,greenyellow:2919182335,grey:2155905279,honeydew:4043305215,hotpink:4285117695,indianred:3445382399,indigo:1258324735,ivory:4294963455,khaki:4041641215,lavender:3873897215,lavenderblush:4293981695,lawngreen:2096890111,lemonchiffon:4294626815,lightblue:2916673279,lightcoral:4034953471,lightcyan:3774873599,lightgoldenrodyellow:4210742015,lightgray:3553874943,lightgreen:2431553791,lightgrey:3553874943,lightpink:4290167295,lightsalmon:4288707327,lightseagreen:548580095,lightskyblue:2278488831,lightslategray:2005441023,lightslategrey:2005441023,lightsteelblue:2965692159,lightyellow:4294959359,lime:16711935,limegreen:852308735,linen:4210091775,magenta:4278255615,maroon:2147483903,mediumaquamarine:1724754687,mediumblue:52735,mediumorchid:3126187007,mediumpurple:2473647103,mediumseagreen:1018393087,mediumslateblue:2070474495,mediumspringgreen:16423679,mediumturquoise:1221709055,mediumvioletred:3340076543,midnightblue:421097727,mintcream:4127193855,mistyrose:4293190143,moccasin:4293178879,navajowhite:4292783615,navy:33023,oldlace:4260751103,olive:2155872511,olivedrab:1804477439,orange:4289003775,orangered:4282712319,orchid:3664828159,palegoldenrod:4008225535,palegreen:2566625535,paleturquoise:2951671551,palevioletred:3681588223,papayawhip:4293907967,peachpuff:4292524543,peru:3448061951,pink:4290825215,plum:3718307327,powderblue:2967529215,purple:2147516671,rebeccapurple:1714657791,red:4278190335,rosybrown:3163525119,royalblue:1097458175,saddlebrown:2336560127,salmon:4202722047,sandybrown:4104413439,seagreen:780883967,seashell:4294307583,sienna:2689740287,silver:3233857791,skyblue:2278484991,slateblue:1784335871,slategray:1887473919,slategrey:1887473919,snow:4294638335,springgreen:16744447,steelblue:1182971135,tan:3535047935,teal:8421631,thistle:3636451583,tomato:4284696575,turquoise:1088475391,violet:4001558271,wheat:4125012991,white:4294967295,whitesmoke:4126537215,yellow:4294902015,yellowgreen:2597139199}});var Gw=((e,{applyAnimatedValues:t=()=>!1,createAnimatedStyle:r=e=>new xx(e),getComponentProps:n=e=>e}={})=>{const o={applyAnimatedValues:t,createAnimatedStyle:r,getComponentProps:n},i=e=>{const t=Ex(e)||"Anonymous";return(e=Lv.str(e)?i[e]||(i[e]=Sx(e,o)):e[kx]||(e[kx]=Sx(e,o))).displayName=`Animated(${t})`,e};return Wv(e,((t,r)=>{Lv.arr(e)&&(r=Ex(t)),i[r]=i(t)})),{animated:i}})(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"],{applyAnimatedValues:function(e,t){if(!e.nodeType||!e.setAttribute)return!1;const r="filter"===e.nodeName||e.parentNode&&"filter"===e.parentNode.nodeName,{style:n,children:o,scrollTop:i,scrollLeft:a,viewBox:s,...l}=t,c=Object.values(l),d=Object.keys(l).map((t=>r||e.hasAttribute(t)?t:Pw[t]||(Pw[t]=t.replace(/([A-Z])/g,(e=>"-"+e.toLowerCase())))));void 0!==o&&(e.textContent=o);for(const t in n)if(n.hasOwnProperty(t)){const r=zw(t,n[t]);Rw.test(t)?e.style.setProperty(t,r):e.style[t]=r}d.forEach(((t,r)=>{e.setAttribute(t,c[r])})),void 0!==i&&(e.scrollTop=i),void 0!==a&&(e.scrollLeft=a),void 0!==s&&e.setAttribute("viewBox",s)},createAnimatedStyle:e=>new Kw(e),getComponentProps:({scrollTop:e,scrollLeft:t,...r})=>r}),Qw=Gw.animated;const Zw=F`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`,Xw=E.div`
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;

    ${e=>_`
        height: ${"small"===e.$displaySize?"1.5rem":"2rem"};
        width: ${"small"===e.$displaySize?"1.5rem":"2rem"};
    `}
`,Jw=_`
    animation: ${Ki["duration-150"]} ${Ki["ease-default"]} ${Zw};
    width: 100%;
    height: 100%;
    transition: color ${Ki["duration-150"]} ${Ki["ease-default"]};
`,e$=E(le)`
    ${Jw}
    color: ${Yi["icon-primary-subtlest"]};
`,t$=E(ce)`
    ${Jw}
    color: ${Yi["icon-disabled-subtle"]};
`,r$=E(de)`
    ${Jw}
    color: ${e=>e.$disabled?Yi["icon-disabled-subtle"](e):Yi["icon-selected"](e)};
`,n$=E(ue)`
    ${Jw}
    color: ${e=>e.$disabled?Yi["icon-disabled-subtle"](e):Yi["icon-selected"](e)};
`,o$=E.input`
    position: absolute;
    opacity: 0;
    width: 100%;
    height: 100%;
    cursor: ${e=>e.disabled?"not-allowed":"pointer"};

    &:hover
        + ${e$},
        &:hover
        + ${r$},
        &:hover
        + ${n$} {
        color: ${e=>!e.disabled&&Yi["icon-hover"](e)};
    }
`,i$=E(Qw.div)`
    overflow: hidden;
    box-shadow: 0 4px 5px 0 rgba(0, 0, 0, 0.2);
`,a$=E.ul`
    border-bottom-left-radius: ${Qi.sm};
    border-bottom-right-radius: ${Qi.sm};
    background: transparent;
    max-height: 20rem;
    width: ${e=>e.width||"100%"};
    overflow-y: auto;
    padding: ${Gi["spacing-8"]};
    list-style-type: none;

    ::-webkit-scrollbar {
        width: 14px;
    }

    ::-webkit-scrollbar-track {
        background: transparent;
    }

    ::-webkit-scrollbar-thumb {
        background: ${Yi["bg-inverse-subtlest"]};
        border: 5px solid transparent;
        border-radius: 9999px;
        background-clip: padding-box;
    }

    ${Xi.MaxWidth.sm} {
        max-height: 15rem;
    }
`,s$=E.li`
    :hover,
    :focus,
    :active {
        background: ${Yi["bg-hover"]};
    }
    ${e=>{if(e.$checked)return _`
                background: ${Yi["bg-selected"]};
                :hover,
                :focus,
                :active {
                    background: ${Yi["bg-selected-hover"]};
                }
            `}}
`,l$=E.button`
    display: flex;
    ${e=>e.$multiSelect?_`
                padding: ${Gi["spacing-8"]} ${Gi["spacing-16"]};
            `:_`
                padding: 15px ${Gi["spacing-16"]}; // TODO: confirm vertical spacing
                align-items: center;
            `}
    margin: 0 -${Gi["spacing-8"]};
    border: none;
    background: transparent;
    width: 100%;
    cursor: pointer;

    :hover,
    :visited,
    :focus,
    :active {
        outline-color: ${Yi["border-focus"]};
    }

    span {
        margin-bottom: 0;
    }
`,c$=_`
    overflow: hidden;
    display: -webkit-inline-box;
    text-overflow: ellipsis;
    -webkit-line-clamp: ${e=>e.$maxLines||2};
    -webkit-box-orient: vertical;
    overflow-wrap: break-word;
`,d$=E.div`
    ${e=>"small"===e.$variant?Ui["body-md-regular"]:Ui["body-baseline-regular"]}
    color: ${Yi.text};
    width: 100%;

    ${e=>"end"===e.$truncateType&&c$}
`,u$=E.div`
    color: ${Yi["text-subtlest"]};
    width: 100%;

    ${e=>"end"===e.$truncateType&&c$}

    ${e=>"next-line"===e.$labelDisplayType?_`
                    ${Ui["body-md-semibold"]}
                `:_`
                    ${Ui["body-baseline-regular"]}
                `}
`,f$=E.div`
    text-align: left;
    width: 100%;

    ${e=>{switch(e.$labelDisplayType){case"next-line":return _`
                    display: flex;
                    flex-direction: column;
                `;case"inline":return _`
                    ${d$} {
                        display: inline;
                    }

                    ${u$} {
                        display: inline;
                        margin-left: ${Gi["spacing-8"]};
                    }
                `}}}
`,h$=E.div`
    display: inline-block;
    width: ${e=>1===e.$maxLines?50:100}%;
    height: 1lh;
    word-break: break-all;
    overflow: hidden;
`,p$=E.div`
    display: inline-block;
    width: ${e=>1===e.$maxLines?50:100}%;
    height: 1lh;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    direction: rtl;
    text-align: right;
`,g$=E((r=>{var{className:n,checked:o,disabled:i,indeterminate:a,onChange:l,onKeyPress:d,displaySize:u="default"}=r,f=lt(r,["className","checked","disabled","indeterminate","onChange","onKeyPress","displaySize"]);const h=s(null);c((()=>{h.current&&(h.current.indeterminate=null!=a&&a)}),[a]);const p=e=>{if(!i){const t=e;if(!(" "===t.key||"change"===e.type))return;l&&l(e),d&&d(t)}};return e(Xw,{className:n,"data-testid":"checkbox",role:"checkbox","aria-checked":a?"mixed":o,"aria-labelledby":"checkbox-input",tabIndex:i?-1:0,onKeyDown:p,$displaySize:u,$disabled:i,$unchecked:!(a||o||i),children:[t(o$,Object.assign({id:"checkbox-input","data-testid":"checkbox-input","aria-hidden":"true",type:"checkbox",checked:o,ref:h,tabIndex:-1,onChange:p,disabled:i},f)),a?t(n$,{$disabled:i,"data-testid":"indeterminate"}):o?t(r$,{$disabled:i,"data-testid":"checkmark"}):i?t(t$,{"data-testid":"empty-disabled-checkbox"}):t(e$,{$disabled:i,"data-testid":"empty-checkbox"})]})}))`
    flex-shrink: 0;
    margin-right: ${Gi["spacing-16"]};
`,m$=E.div`
    width: 100%;
    display: flex;
    justify-content: flex-end;
    padding: ${Gi["spacing-16"]} 0 ${Gi["spacing-8"]} 0;
`,b$=E.button`
    ${e=>"small"===e.$variant?Ui["body-md-semibold"]:Ui["body-baseline-semibold"]}
    background-color: transparent;
    background-repeat: no-repeat;
    border: none;
    cursor: pointer;
    overflow: hidden;
    outline: none;
    color: ${Yi["text-primary"]};
`,v$=E.div`
    width: 100%;
    display: flex;
    padding: 15px ${Gi["spacing-16"]}; // TODO: confirm vertical padding
    align-items: center;

    ${e=>"small"===e.$variant?Ui["body-md-regular"]:Ui["body-baseline-regular"]}
`,y$=E(pe)`
    height: 1em;
    width: 1em;
    margin-right: ${Gi["spacing-4"]};
    color: ${Yi["icon-error"]};
`,x$=E(Bu)`
    margin-right: ${Gi["spacing-4"]};
    color: ${Yi.icon};
`,w$=e=>"small"===e?1:1.375,$$=e=>_`
        height: ${w$(e)}rem;
        width: ${w$(e)}rem;
    `,C$=E.li`
    background: ${Yi["bg-strong"]};
    display: flex;
    border-radius: ${Qi.sm};
    align-items: center;
`,S$=E(nh)`
    height: ${e=>"small"===e.$variant?2.5:3}rem;
    flex: 1;
    padding: 0 ${Gi["spacing-8"]} 0 0;
    width: 100%;
`,D$=E(ge)`
    ${e=>$$(e.$variant)}
    margin: 0 ${Gi["spacing-8"]};
    color: ${Yi.icon};
`,k$=E(Md)`
    ${e=>$$(e.$variant)}
    padding: 0;
    margin: 0 ${Gi["spacing-8"]};
    color: ${Yi.icon};
    cursor: pointer;
    ${e=>{if("small"===e.$variant)return _`
                svg {
                    ${$$(e.$variant)}
                }
            `}}
`,E$=u(((r,n)=>{const{onClear:o}=r,i=lt(r,["onClear"]);return e(C$,{children:[t(D$,{$variant:r.variant}),t(S$,Object.assign({ref:n,$variant:r.variant},i)),i.value&&t(k$,{"aria-label":"Clear search",focusOutline:"browser",onClick:o,$variant:r.variant,children:t(fe,{})})]},"search")})),_$=n=>{var{listItems:o,listExtractor:i,valueExtractor:a,onSelectItem:l,listStyleWidth:d,visible:u,enableSearch:f,searchPlaceholder:h="Search",onSearch:p,searchFunction:m,onDismiss:b,disableItemFocus:v,multiSelect:y,selectedItems:x,onSelectAll:w,onRetry:$,itemsLoadState:C="success",itemTruncationType:S="end",itemMaxLines:D=2,labelDisplayType:k="inline",renderListItem:E,onBlur:_,hideNoResultsDisplay:O,renderCustomCallToAction:F,variant:T="default"}=n,I=lt(n,["listItems","listExtractor","valueExtractor","onSelectItem","listStyleWidth","visible","enableSearch","searchPlaceholder","onSearch","searchFunction","onDismiss","disableItemFocus","multiSelect","selectedItems","onSelectAll","onRetry","itemsLoadState","itemTruncationType","itemMaxLines","labelDisplayType","renderListItem","onBlur","hideNoResultsDisplay","renderCustomCallToAction","variant"]);const[M,A]=g(0),[j,B]=g(""),[R,z]=g(null!=o?o:[]),[P,L]=g(0),N=Iw({height:P}),H=s(null),W=s(null),V=s([]),Y=s(null),U=s(null),K=s(M),q=s(R),G=e=>{K.current=e,A(e)},Q=e=>{q.current=e,z(e)};c((()=>(document.addEventListener("keydown",re),()=>{document.removeEventListener("keydown",re)})),[]),c((()=>{ee(j)}),[j]),c((()=>{if(B(""),u){if(setTimeout((()=>{L(te())})),v)return;Y&&Y.current?(Y.current.focus(),G(-1)):V.current[M]&&V.current[M].focus()}else L(0)}),[u]),c((()=>{if(u){const e=te();L(e)}}),[R,C]),c((()=>{Q(null!=o?o:[]),B(""),G(0)}),[o]);const Z=e=>{const t=i?i(e):null==e?void 0:e.toString();return"object"==typeof t?{title:t.title,secondaryLabel:t.secondaryLabel}:{title:null!=t?t:""}},X=e=>{if("inline"!==k)return!1;let t=0;W&&W.current&&(t=W.current.getBoundingClientRect().width-60);return pd.getTextWidth(e,"1.125rem 'Open Sans'")>t*D},J=e=>!!mv(x,(t=>vv(t,e))),ee=e=>{if(""===e)Q(null!=o?o:[]);else if(m){const t=m(e);Q(t)}else{const t=null==o?void 0:o.filter((t=>{const{title:r,secondaryLabel:n}=Z(t),o=e.trim().toLowerCase();return r.includes(o)||n&&n.includes(o)}));Q(null!=t?t:[])}},te=()=>(W&&W.current?W.current.getBoundingClientRect().height:0)+(U.current?U.current.getBoundingClientRect().height:0),re=e=>{var t,r;if(H&&H.current.contains(e.target))switch(e.code){case"ArrowDown":if(K.current<q.current.length-1){const e=K.current+1;null===(t=V.current[e])||void 0===t||t.focus(),G(e)}break;case"ArrowUp":if(K.current>0){const e=K.current-1;null===(r=V.current[e])||void 0===r||r.focus(),G(K.current-1)}break;case"Escape":b&&b(!0)}},ne=(e,t)=>{e.preventDefault(),l&&l(t,(e=>a?a(e):e)(t))},oe=e=>{const t=e.target.value;B(t),p&&p()},ie=()=>{var e;B(""),null===(e=Y.current)||void 0===e||e.focus(),p&&p()},ae=()=>{$&&$()},se=()=>{_&&_()},le=n=>e(r,{children:[t(h$,{$maxLines:D,"aria-hidden":!0,children:n}),t(p$,{$maxLines:D,"aria-hidden":!0,children:n})]}),ce=r=>{const{title:n,secondaryLabel:o}=Z(r),i=X(n),a=o&&X(o);return e(f$,{$labelDisplayType:i||a?"next-line":k,children:[t(d$,{$truncateType:S,$maxLines:D,$variant:T,"aria-label":n,children:"middle"===S&&i?le(n):n}),o&&t(u$,{$truncateType:S,$maxLines:D,$labelDisplayType:k,"aria-label":o,children:"middle"===S&&a?le(o):o})]})},de=()=>{if(!$||"success"===C)return R.map(((r,n)=>t(s$,{$checked:J(r)&&!y,children:e(l$,{$hasNextLineLabel:"next-line"===k&&R.length>0&&i&&"string"!=typeof i(R[0]),onClick:e=>{ne(e,r)},ref:e=>V.current[n]=e,"data-testid":"list-item",type:"button",tabIndex:u?0:-1,$multiSelect:y,onBlur:se,$variant:T,children:[y&&t(g$,{checked:J(r),displaySize:"small"}),E?E(r,{selected:J(r)}):ce(r)]})},((e,t)=>`item_${t}__${a?a(e):e}`)(r,n))))},ue=()=>{if(x&&y&&R.length>0&&!j&&"success"===C)return t(m$,{children:t(b$,{onClick:w,type:"button",$variant:T,children:0===x.length?"Select all":"Clear all"})},"selectAll")},fe=()=>{if(!O&&(j||!f)&&0===R.length&&"success"===C)return e(v$,{"data-testid":"list-no-results",$variant:T,children:[t(y$,{"data-testid":"no-result-icon",$variant:T}),"No results found."]},"noResults")},he=()=>{if($&&"loading"===C)return e(v$,{"data-testid":"list-loading",$variant:T,children:[t(x$,{}),"Loading..."]},"loading")},pe=()=>{if($&&"fail"===C)return e(v$,{"data-testid":"list-fail",$variant:T,children:[t(y$,{"data-testid":"load-error-icon",$variant:T}),"Failed to load. ",t(b$,{onClick:ae,type:"button",$variant:T,children:"Try again."})]},"noResults")};return t(r,{children:e(i$,{style:N,"data-testid":u?"dropdown-container":"dropdown-container-hidden",ref:H,children:[(()=>{if(u)return e(a$,Object.assign({ref:W,"data-testid":"dropdown-list",width:d,role:"list"},I,{children:[(f||m)&&"success"===C?t(E$,{ref:Y,onChange:oe,value:j,placeholder:h,"data-testid":"search-input","aria-label":"search-input",tabIndex:u?0:-1,onClear:ie,variant:T}):null,ue(),fe(),he(),pe(),de()]}))})(),(()=>{if(u&&F)return t("div",{ref:U,"data-testid":"custom-cta",children:F(b,R)})})()]})})},O$=E.div`
    position: relative;
    display: flex;
    align-items: center;
    ${e=>{if(e.$expanded)return _`
                border-bottom: ${qi["width-010"]} ${qi.solid}
                    ${Yi.border};
            `}}

    ${e=>e.$readOnly?_`
                border: 0;
                margin: 0;
            `:"right"===e.$position?_`
                        flex-direction: row-reverse;
                        margin: 0 ${Gi["spacing-16"]};
                    `:_`
                        flex-direction: row;
                        margin: 0 ${Gi["spacing-16"]};
                    `}
`,F$=E(bu)`
    padding: 0;
    width: auto;
`,T$=E.div`
    padding: 10px 0; // TODO: confirm vertical spacing
    display: flex;
    align-items: center;
    padding: 0;
    background: transparent;
    margin-right: ${Gi["spacing-12"]};
`,I$=E.div`
    transform: rotate(${e=>e.$expanded?180:0}deg);
    transition: ${Ki["duration-250"]} ${Ki["ease-default"]};
    margin: 0 ${Gi["spacing-12"]};
    display: flex;
    align-items: center;
`,M$=E(re)`
    color: ${Yi.icon};
    height: ${Ui.Spec["body-size-baseline"]};
    width: ${Ui.Spec["body-size-baseline"]};
`,A$=E.div`
    display: flex;
    flex: 1 1 auto;
`,j$=E(fa.BodyBL)`
    text-align: left;
    ${la(2)}
    text-overflow: ellipsis;
`,B$=E(j$)`
    color: ${Yi["text-subtler"]};
`,R$=E.div`
    width: 1px;
    background: ${Yi.border};
    flex-shrink: 0;
    height: 1.25rem;

    ${e=>{if(e.$readOnly)return _`
                display: none;
            `}}

    ${e=>"right"===e.$position?_`
                    margin: 0 ${Gi["spacing-12"]};
                `:_`
                    margin: 0 ${Gi["spacing-12"]} 0 0;
                `}
`,z$=E(th)`
    display: flex;
    align-items: center;
    width: 100%;
    padding: 0 ${Gi["spacing-16"]};
    flex-direction: ${e=>"right"===e.$position?"row-reverse":"row"};
`,P$=E(th)`
    display: flex;
    position: relative;
    width: 100%;
    padding: 0 ${Gi["spacing-16"]};
    flex-direction: ${e=>"right"===e.$position?"row-reverse":"row"};
`,L$=E(Ip)``,N$=E.div`
    position: relative;
    display: flex;
    align-items: center;

    ${Ui["body-baseline-regular"]}
    color: ${Yi.text};

    /* SVG Icon */
    svg {
        height: 1em;
        width: 1em;
    }

    ${e=>{if(e.$disabled)return _`
                color: ${Yi["text-subtler"]};
            `}}

    ${e=>"right"===e.$position?_`
                    margin-left: ${e.$readOnly?Gi["spacing-4"]:Gi["spacing-12"]};
                `:_`
                    margin-right: ${e.$readOnly?Gi["spacing-4"]:Gi["spacing-12"]};
                `};
`,H$=o.forwardRef(((n,o)=>{var{addon:i,error:a,onChange:l,readOnly:d,className:u,onBlur:f}=n,h=lt(n,["addon","error","onChange","readOnly","className","onBlur"]);const{placeholder:p,options:m,enableSearch:b,searchFunction:v,searchPlaceholder:y,valueExtractor:x,listExtractor:w,displayValueExtractor:$,selectedOption:C,onSelectOption:S,onHideOptions:D,onShowOptions:k,"data-selector-testid":E}=i.attributes,{position:_}=i,[O,F]=g(C),[T,I]=g(!1),M=s(null);c((()=>{F(C)}),[C]);const A=()=>{if(O)return $?$(O):x?x(O):O.toString()},j=e=>{!e&&D&&D(),e&&k&&k()},B=e=>{e.preventDefault(),h.disabled||(I(!T),j(!T))},R=(e,t)=>{var r;F(e),I(!1),j(!1),M&&(null===(r=M.current)||void 0===r||r.focus()),S&&S(e,t)},z=e=>{l&&l(e)},P=()=>{f&&f()},L=()=>{var e;I(!1),j(!1),M&&(null===(e=M.current)||void 0===e||e.focus())};return e(Du,{className:u,show:T,error:a&&!T,disabled:h.disabled,readOnly:d,onBlur:()=>{I(!1),j(!1),P()},children:[e(O$,{$expanded:T,$readOnly:d,$position:_,children:[d?O?t(T$,{children:t(j$,{"data-testid":"selector-label",children:A()})}):null:t(F$,{ref:M,type:"button",disabled:h.disabled,"data-testid":E||"addon-selector",onClick:B,children:e(r,{children:[e(A$,{children:[p&&!O&&t(B$,{children:p}),O&&t(j$,{"data-testid":"selector-label",children:A()})]}),t(I$,{$expanded:T,children:t(M$,{})})]})}),t(R$,{$readOnly:d,$position:_}),t(L$,Object.assign({ref:o},h,{readOnly:d,error:a,onChange:z,"data-testid":h["data-testid"]||"input",onBlur:P,styleType:"no-border"}))]}),m&&m.length>0?t(_$,{listItems:m,selectedItems:C?[C]:[],onSelectItem:R,valueExtractor:x,listExtractor:w,visible:T,enableSearch:b,searchFunction:v,searchPlaceholder:y,"data-testid":"dropdown-list",onBlur:P,onDismiss:L}):t(r,{})]})})),W$=o.forwardRef(((r,n)=>{var{addon:o,error:i,className:a}=r,s=lt(r,["addon","error","className"]);const l=()=>t(P$,{$disabled:s.disabled,$error:i,$readOnly:s.readOnly,"data-testid":s["data-testid"],className:a,children:t(L$,Object.assign({ref:n},s,{"data-testid":"input",styleType:"no-border"}))});if(!o)return l();{const{type:r="label",position:c="left"}=o,{allowClear:d}=s;switch(r){case"list":{const e=o.attributes;return e.options&&e.options.length>0?t(H$,Object.assign({ref:n,addon:o,error:i,className:a},s)):l()}case"custom":{const r=o.attributes;return r.children?e(z$,{$error:i,$disabled:s.disabled,$readOnly:s.readOnly,"data-testid":s["data-testid"],$position:c,className:a,children:[t(N$,{"data-testid":"addon",$disabled:s.disabled,$readOnly:s.readOnly,$position:c,children:r.children}),t(L$,Object.assign({ref:n},s,{allowClear:d&&"right"!==c,error:i,"data-testid":"input",styleType:"no-border"}))]}):l()}default:{const r=o.attributes;return r.value?e(z$,{$disabled:s.disabled,$error:i,$readOnly:s.readOnly,"data-testid":s["data-testid"],$position:c,className:a,children:[t(N$,{"data-testid":"addon",$disabled:s.disabled,$readOnly:s.readOnly,$position:c,children:r.value}),t(L$,Object.assign({ref:n},s,{allowClear:d&&"right"!==c,error:i,"data-testid":"input",styleType:"no-border"}))]}):l()}}}})),V$=o.forwardRef(((e,r)=>{const{label:n,errorMessage:o,id:i="form-field-group","data-error-testid":a,"data-testid":s,layoutType:l,mobileCols:c,tabletCols:d,desktopCols:u,xxsCols:f,xsCols:h,smCols:p,mdCols:g,lgCols:m,xlCols:b,xxlCols:v}=e,y=lt(e,["label","errorMessage","id","data-error-testid","data-testid","layoutType","mobileCols","tabletCols","desktopCols","xxsCols","xsCols","smCols","mdCols","lgCols","xlCols","xxlCols"]);return t(hu,{id:i,label:n,errorMessage:o,disabled:y.disabled,"data-error-testid":a,layoutType:l,mobileCols:c,tabletCols:d,desktopCols:u,xxsCols:f,xsCols:h,smCols:p,mdCols:g,lgCols:m,xlCols:b,xxlCols:v,children:t(W$,Object.assign({ref:r,id:`${i}-base`,"data-testid":s||i,error:!!o},y))})})),Y$=E(W$)`
    padding: 0 0 0 ${({readOnly:e})=>e?"0":Gi["spacing-16"]};
    input {
        cursor: ${({readOnly:e,$isDisabled:t})=>e&&!t?"pointer":"initial"};
    }
`,U$=E.div`
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: ${({$isDisabled:e})=>e?"initial":"pointer"};
    color: ${({$isDisabled:e,$inactiveColor:t=Yi.icon,$activeColor:r=Yi["icon-primary"]})=>e?t:r};
    padding: ${Gi["spacing-12"]} ${Gi["spacing-16"]};

    svg {
        height: 1em;
        width: 1em;
    }
`,K$=E.div`
    display: flex;
    align-items: center;
    height: 3rem;
`,q$=E(fa.BodyBL)`
    color: ${Yi["text-subtler"]};
`,G$=E(Bu)`
    margin-right: ${Gi["spacing-8"]};
    color: ${Yi.icon};
`,Q$=E.span`
    color: ${Yi["text-primary"]};
    text-decoration: underline;
    font-weight: ${Ui.Spec["weight-semibold"]};
`,Z$=E.span`
    display: flex;
    align-items: center;
    margin-right: ${Gi["spacing-8"]};
`,X$=E(ve)`
    color: ${Yi["icon-warning"]};
    margin-right: ${Gi["spacing-8"]};
    height: 1em;
    width: 1em;
`,J$=E.span`
    color: ${Yi["text-warning"]};
`,eC=E(oh)`
    width: 100%;
    height: 3rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border: none;
    background: transparent;
    cursor: pointer;

    ${Ui["body-baseline-regular"]}

    :hover, :active, :focus {
        ${Q$} {
            color: ${Yi["text-hover"]};
        }
    }
`;var tC,rC,nC={exports:{}};
/**
 * @license
 * Lodash <https://lodash.com/>
 * Copyright OpenJS Foundation and other contributors <https://openjsf.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */tC=nC,rC=nC.exports,function(){var e,t="Expected a function",r="__lodash_hash_undefined__",n="__lodash_placeholder__",o=16,i=32,a=64,s=128,l=256,c=1/0,d=9007199254740991,u=NaN,f=4294967295,h=[["ary",s],["bind",1],["bindKey",2],["curry",8],["curryRight",o],["flip",512],["partial",i],["partialRight",a],["rearg",l]],p="[object Arguments]",g="[object Array]",m="[object Boolean]",b="[object Date]",v="[object Error]",y="[object Function]",x="[object GeneratorFunction]",w="[object Map]",$="[object Number]",C="[object Object]",S="[object Promise]",D="[object RegExp]",k="[object Set]",E="[object String]",_="[object Symbol]",O="[object WeakMap]",F="[object ArrayBuffer]",T="[object DataView]",I="[object Float32Array]",M="[object Float64Array]",A="[object Int8Array]",j="[object Int16Array]",B="[object Int32Array]",R="[object Uint8Array]",z="[object Uint8ClampedArray]",P="[object Uint16Array]",L="[object Uint32Array]",N=/\b__p \+= '';/g,H=/\b(__p \+=) '' \+/g,W=/(__e\(.*?\)|\b__t\)) \+\n'';/g,V=/&(?:amp|lt|gt|quot|#39);/g,Y=/[&<>"']/g,U=RegExp(V.source),K=RegExp(Y.source),q=/<%-([\s\S]+?)%>/g,G=/<%([\s\S]+?)%>/g,Q=/<%=([\s\S]+?)%>/g,Z=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,X=/^\w*$/,J=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,ee=/[\\^$.*+?()[\]{}|]/g,te=RegExp(ee.source),re=/^\s+/,ne=/\s/,oe=/\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/,ie=/\{\n\/\* \[wrapped with (.+)\] \*/,ae=/,? & /,se=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g,le=/[()=,{}\[\]\/\s]/,ce=/\\(\\)?/g,de=/\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g,ue=/\w*$/,fe=/^[-+]0x[0-9a-f]+$/i,he=/^0b[01]+$/i,pe=/^\[object .+?Constructor\]$/,ge=/^0o[0-7]+$/i,me=/^(?:0|[1-9]\d*)$/,be=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,ve=/($^)/,ye=/['\n\r\u2028\u2029\\]/g,xe="\\ud800-\\udfff",we="\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff",$e="\\u2700-\\u27bf",Ce="a-z\\xdf-\\xf6\\xf8-\\xff",Se="A-Z\\xc0-\\xd6\\xd8-\\xde",De="\\ufe0e\\ufe0f",ke="\\xac\\xb1\\xd7\\xf7\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf\\u2000-\\u206f \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",Ee="['’]",_e="["+xe+"]",Oe="["+ke+"]",Fe="["+we+"]",Te="\\d+",Ie="["+$e+"]",Me="["+Ce+"]",Ae="[^"+xe+ke+Te+$e+Ce+Se+"]",Be="\\ud83c[\\udffb-\\udfff]",Re="[^"+xe+"]",ze="(?:\\ud83c[\\udde6-\\uddff]){2}",Pe="[\\ud800-\\udbff][\\udc00-\\udfff]",Le="["+Se+"]",Ne="\\u200d",He="(?:"+Me+"|"+Ae+")",We="(?:"+Le+"|"+Ae+")",Ve="(?:['’](?:d|ll|m|re|s|t|ve))?",Ye="(?:['’](?:D|LL|M|RE|S|T|VE))?",Ue="(?:"+Fe+"|"+Be+")?",Ke="["+De+"]?",qe=Ke+Ue+"(?:"+Ne+"(?:"+[Re,ze,Pe].join("|")+")"+Ke+Ue+")*",Ge="(?:"+[Ie,ze,Pe].join("|")+")"+qe,Qe="(?:"+[Re+Fe+"?",Fe,ze,Pe,_e].join("|")+")",Ze=RegExp(Ee,"g"),Xe=RegExp(Fe,"g"),Je=RegExp(Be+"(?="+Be+")|"+Qe+qe,"g"),et=RegExp([Le+"?"+Me+"+"+Ve+"(?="+[Oe,Le,"$"].join("|")+")",We+"+"+Ye+"(?="+[Oe,Le+He,"$"].join("|")+")",Le+"?"+He+"+"+Ve,Le+"+"+Ye,"\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])","\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",Te,Ge].join("|"),"g"),tt=RegExp("["+Ne+xe+we+De+"]"),rt=/[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/,nt=["Array","Buffer","DataView","Date","Error","Float32Array","Float64Array","Function","Int8Array","Int16Array","Int32Array","Map","Math","Object","Promise","RegExp","Set","String","Symbol","TypeError","Uint8Array","Uint8ClampedArray","Uint16Array","Uint32Array","WeakMap","_","clearTimeout","isFinite","parseInt","setTimeout"],ot=-1,it={};it[I]=it[M]=it[A]=it[j]=it[B]=it[R]=it[z]=it[P]=it[L]=!0,it[p]=it[g]=it[F]=it[m]=it[T]=it[b]=it[v]=it[y]=it[w]=it[$]=it[C]=it[D]=it[k]=it[E]=it[O]=!1;var at={};at[p]=at[g]=at[F]=at[T]=at[m]=at[b]=at[I]=at[M]=at[A]=at[j]=at[B]=at[w]=at[$]=at[C]=at[D]=at[k]=at[E]=at[_]=at[R]=at[z]=at[P]=at[L]=!0,at[v]=at[y]=at[O]=!1;var st={"\\":"\\","'":"'","\n":"n","\r":"r","\u2028":"u2028","\u2029":"u2029"},lt=parseFloat,ct=parseInt,dt="object"==typeof je&&je&&je.Object===Object&&je,ut="object"==typeof self&&self&&self.Object===Object&&self,ft=dt||ut||Function("return this")(),ht=rC&&!rC.nodeType&&rC,pt=ht&&tC&&!tC.nodeType&&tC,gt=pt&&pt.exports===ht,mt=gt&&dt.process,bt=function(){try{var e=pt&&pt.require&&pt.require("util").types;return e||mt&&mt.binding&&mt.binding("util")}catch(e){}}(),vt=bt&&bt.isArrayBuffer,yt=bt&&bt.isDate,xt=bt&&bt.isMap,wt=bt&&bt.isRegExp,$t=bt&&bt.isSet,Ct=bt&&bt.isTypedArray;function St(e,t,r){switch(r.length){case 0:return e.call(t);case 1:return e.call(t,r[0]);case 2:return e.call(t,r[0],r[1]);case 3:return e.call(t,r[0],r[1],r[2])}return e.apply(t,r)}function Dt(e,t,r,n){for(var o=-1,i=null==e?0:e.length;++o<i;){var a=e[o];t(n,a,r(a),e)}return n}function kt(e,t){for(var r=-1,n=null==e?0:e.length;++r<n&&!1!==t(e[r],r,e););return e}function Et(e,t){for(var r=null==e?0:e.length;r--&&!1!==t(e[r],r,e););return e}function _t(e,t){for(var r=-1,n=null==e?0:e.length;++r<n;)if(!t(e[r],r,e))return!1;return!0}function Ot(e,t){for(var r=-1,n=null==e?0:e.length,o=0,i=[];++r<n;){var a=e[r];t(a,r,e)&&(i[o++]=a)}return i}function Ft(e,t){return!(null==e||!e.length)&&Lt(e,t,0)>-1}function Tt(e,t,r){for(var n=-1,o=null==e?0:e.length;++n<o;)if(r(t,e[n]))return!0;return!1}function It(e,t){for(var r=-1,n=null==e?0:e.length,o=Array(n);++r<n;)o[r]=t(e[r],r,e);return o}function Mt(e,t){for(var r=-1,n=t.length,o=e.length;++r<n;)e[o+r]=t[r];return e}function At(e,t,r,n){var o=-1,i=null==e?0:e.length;for(n&&i&&(r=e[++o]);++o<i;)r=t(r,e[o],o,e);return r}function jt(e,t,r,n){var o=null==e?0:e.length;for(n&&o&&(r=e[--o]);o--;)r=t(r,e[o],o,e);return r}function Bt(e,t){for(var r=-1,n=null==e?0:e.length;++r<n;)if(t(e[r],r,e))return!0;return!1}var Rt=Vt("length");function zt(e,t,r){var n;return r(e,(function(e,r,o){if(t(e,r,o))return n=r,!1})),n}function Pt(e,t,r,n){for(var o=e.length,i=r+(n?1:-1);n?i--:++i<o;)if(t(e[i],i,e))return i;return-1}function Lt(e,t,r){return t==t?function(e,t,r){for(var n=r-1,o=e.length;++n<o;)if(e[n]===t)return n;return-1}(e,t,r):Pt(e,Ht,r)}function Nt(e,t,r,n){for(var o=r-1,i=e.length;++o<i;)if(n(e[o],t))return o;return-1}function Ht(e){return e!=e}function Wt(e,t){var r=null==e?0:e.length;return r?Kt(e,t)/r:u}function Vt(t){return function(r){return null==r?e:r[t]}}function Yt(t){return function(r){return null==t?e:t[r]}}function Ut(e,t,r,n,o){return o(e,(function(e,o,i){r=n?(n=!1,e):t(r,e,o,i)})),r}function Kt(t,r){for(var n,o=-1,i=t.length;++o<i;){var a=r(t[o]);a!==e&&(n=n===e?a:n+a)}return n}function qt(e,t){for(var r=-1,n=Array(e);++r<e;)n[r]=t(r);return n}function Gt(e){return e?e.slice(0,fr(e)+1).replace(re,""):e}function Qt(e){return function(t){return e(t)}}function Zt(e,t){return It(t,(function(t){return e[t]}))}function Xt(e,t){return e.has(t)}function Jt(e,t){for(var r=-1,n=e.length;++r<n&&Lt(t,e[r],0)>-1;);return r}function er(e,t){for(var r=e.length;r--&&Lt(t,e[r],0)>-1;);return r}var tr=Yt({"À":"A","Á":"A","Â":"A","Ã":"A","Ä":"A","Å":"A","à":"a","á":"a","â":"a","ã":"a","ä":"a","å":"a","Ç":"C","ç":"c","Ð":"D","ð":"d","È":"E","É":"E","Ê":"E","Ë":"E","è":"e","é":"e","ê":"e","ë":"e","Ì":"I","Í":"I","Î":"I","Ï":"I","ì":"i","í":"i","î":"i","ï":"i","Ñ":"N","ñ":"n","Ò":"O","Ó":"O","Ô":"O","Õ":"O","Ö":"O","Ø":"O","ò":"o","ó":"o","ô":"o","õ":"o","ö":"o","ø":"o","Ù":"U","Ú":"U","Û":"U","Ü":"U","ù":"u","ú":"u","û":"u","ü":"u","Ý":"Y","ý":"y","ÿ":"y","Æ":"Ae","æ":"ae","Þ":"Th","þ":"th","ß":"ss","Ā":"A","Ă":"A","Ą":"A","ā":"a","ă":"a","ą":"a","Ć":"C","Ĉ":"C","Ċ":"C","Č":"C","ć":"c","ĉ":"c","ċ":"c","č":"c","Ď":"D","Đ":"D","ď":"d","đ":"d","Ē":"E","Ĕ":"E","Ė":"E","Ę":"E","Ě":"E","ē":"e","ĕ":"e","ė":"e","ę":"e","ě":"e","Ĝ":"G","Ğ":"G","Ġ":"G","Ģ":"G","ĝ":"g","ğ":"g","ġ":"g","ģ":"g","Ĥ":"H","Ħ":"H","ĥ":"h","ħ":"h","Ĩ":"I","Ī":"I","Ĭ":"I","Į":"I","İ":"I","ĩ":"i","ī":"i","ĭ":"i","į":"i","ı":"i","Ĵ":"J","ĵ":"j","Ķ":"K","ķ":"k","ĸ":"k","Ĺ":"L","Ļ":"L","Ľ":"L","Ŀ":"L","Ł":"L","ĺ":"l","ļ":"l","ľ":"l","ŀ":"l","ł":"l","Ń":"N","Ņ":"N","Ň":"N","Ŋ":"N","ń":"n","ņ":"n","ň":"n","ŋ":"n","Ō":"O","Ŏ":"O","Ő":"O","ō":"o","ŏ":"o","ő":"o","Ŕ":"R","Ŗ":"R","Ř":"R","ŕ":"r","ŗ":"r","ř":"r","Ś":"S","Ŝ":"S","Ş":"S","Š":"S","ś":"s","ŝ":"s","ş":"s","š":"s","Ţ":"T","Ť":"T","Ŧ":"T","ţ":"t","ť":"t","ŧ":"t","Ũ":"U","Ū":"U","Ŭ":"U","Ů":"U","Ű":"U","Ų":"U","ũ":"u","ū":"u","ŭ":"u","ů":"u","ű":"u","ų":"u","Ŵ":"W","ŵ":"w","Ŷ":"Y","ŷ":"y","Ÿ":"Y","Ź":"Z","Ż":"Z","Ž":"Z","ź":"z","ż":"z","ž":"z","Ĳ":"IJ","ĳ":"ij","Œ":"Oe","œ":"oe","ŉ":"'n","ſ":"s"}),rr=Yt({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"});function nr(e){return"\\"+st[e]}function or(e){return tt.test(e)}function ir(e){var t=-1,r=Array(e.size);return e.forEach((function(e,n){r[++t]=[n,e]})),r}function ar(e,t){return function(r){return e(t(r))}}function sr(e,t){for(var r=-1,o=e.length,i=0,a=[];++r<o;){var s=e[r];s!==t&&s!==n||(e[r]=n,a[i++]=r)}return a}function lr(e){var t=-1,r=Array(e.size);return e.forEach((function(e){r[++t]=e})),r}function cr(e){var t=-1,r=Array(e.size);return e.forEach((function(e){r[++t]=[e,e]})),r}function dr(e){return or(e)?function(e){for(var t=Je.lastIndex=0;Je.test(e);)++t;return t}(e):Rt(e)}function ur(e){return or(e)?function(e){return e.match(Je)||[]}(e):function(e){return e.split("")}(e)}function fr(e){for(var t=e.length;t--&&ne.test(e.charAt(t)););return t}var hr=Yt({"&amp;":"&","&lt;":"<","&gt;":">","&quot;":'"',"&#39;":"'"}),pr=function ne(xe){var we=(xe=null==xe?ft:pr.defaults(ft.Object(),xe,pr.pick(ft,nt))).Array,$e=xe.Date,Ce=xe.Error,Se=xe.Function,De=xe.Math,ke=xe.Object,Ee=xe.RegExp,_e=xe.String,Oe=xe.TypeError,Fe=we.prototype,Te=Se.prototype,Ie=ke.prototype,Me=xe["__core-js_shared__"],Ae=Te.toString,je=Ie.hasOwnProperty,Be=0,Re=function(){var e=/[^.]+$/.exec(Me&&Me.keys&&Me.keys.IE_PROTO||"");return e?"Symbol(src)_1."+e:""}(),ze=Ie.toString,Pe=Ae.call(ke),Le=ft._,Ne=Ee("^"+Ae.call(je).replace(ee,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),He=gt?xe.Buffer:e,We=xe.Symbol,Ve=xe.Uint8Array,Ye=He?He.allocUnsafe:e,Ue=ar(ke.getPrototypeOf,ke),Ke=ke.create,qe=Ie.propertyIsEnumerable,Ge=Fe.splice,Qe=We?We.isConcatSpreadable:e,Je=We?We.iterator:e,tt=We?We.toStringTag:e,st=function(){try{var e=fi(ke,"defineProperty");return e({},"",{}),e}catch(e){}}(),dt=xe.clearTimeout!==ft.clearTimeout&&xe.clearTimeout,ut=$e&&$e.now!==ft.Date.now&&$e.now,ht=xe.setTimeout!==ft.setTimeout&&xe.setTimeout,pt=De.ceil,mt=De.floor,bt=ke.getOwnPropertySymbols,Rt=He?He.isBuffer:e,Yt=xe.isFinite,gr=Fe.join,mr=ar(ke.keys,ke),br=De.max,vr=De.min,yr=$e.now,xr=xe.parseInt,wr=De.random,$r=Fe.reverse,Cr=fi(xe,"DataView"),Sr=fi(xe,"Map"),Dr=fi(xe,"Promise"),kr=fi(xe,"Set"),Er=fi(xe,"WeakMap"),_r=fi(ke,"create"),Or=Er&&new Er,Fr={},Tr=zi(Cr),Ir=zi(Sr),Mr=zi(Dr),Ar=zi(kr),jr=zi(Er),Br=We?We.prototype:e,Rr=Br?Br.valueOf:e,zr=Br?Br.toString:e;function Pr(e){if(ts(e)&&!Va(e)&&!(e instanceof Wr)){if(e instanceof Hr)return e;if(je.call(e,"__wrapped__"))return Pi(e)}return new Hr(e)}var Lr=function(){function t(){}return function(r){if(!es(r))return{};if(Ke)return Ke(r);t.prototype=r;var n=new t;return t.prototype=e,n}}();function Nr(){}function Hr(t,r){this.__wrapped__=t,this.__actions__=[],this.__chain__=!!r,this.__index__=0,this.__values__=e}function Wr(e){this.__wrapped__=e,this.__actions__=[],this.__dir__=1,this.__filtered__=!1,this.__iteratees__=[],this.__takeCount__=f,this.__views__=[]}function Vr(e){var t=-1,r=null==e?0:e.length;for(this.clear();++t<r;){var n=e[t];this.set(n[0],n[1])}}function Yr(e){var t=-1,r=null==e?0:e.length;for(this.clear();++t<r;){var n=e[t];this.set(n[0],n[1])}}function Ur(e){var t=-1,r=null==e?0:e.length;for(this.clear();++t<r;){var n=e[t];this.set(n[0],n[1])}}function Kr(e){var t=-1,r=null==e?0:e.length;for(this.__data__=new Ur;++t<r;)this.add(e[t])}function qr(e){var t=this.__data__=new Yr(e);this.size=t.size}function Gr(e,t){var r=Va(e),n=!r&&Wa(e),o=!r&&!n&&qa(e),i=!r&&!n&&!o&&cs(e),a=r||n||o||i,s=a?qt(e.length,_e):[],l=s.length;for(var c in e)!t&&!je.call(e,c)||a&&("length"==c||o&&("offset"==c||"parent"==c)||i&&("buffer"==c||"byteLength"==c||"byteOffset"==c)||yi(c,l))||s.push(c);return s}function Qr(t){var r=t.length;return r?t[qn(0,r-1)]:e}function Zr(e,t){return ji(Fo(e),sn(t,0,e.length))}function Xr(e){return ji(Fo(e))}function Jr(t,r,n){(n!==e&&!La(t[r],n)||n===e&&!(r in t))&&on(t,r,n)}function en(t,r,n){var o=t[r];je.call(t,r)&&La(o,n)&&(n!==e||r in t)||on(t,r,n)}function tn(e,t){for(var r=e.length;r--;)if(La(e[r][0],t))return r;return-1}function rn(e,t,r,n){return fn(e,(function(e,o,i){t(n,e,r(e),i)})),n}function nn(e,t){return e&&To(t,Ts(t),e)}function on(e,t,r){"__proto__"==t&&st?st(e,t,{configurable:!0,enumerable:!0,value:r,writable:!0}):e[t]=r}function an(t,r){for(var n=-1,o=r.length,i=we(o),a=null==t;++n<o;)i[n]=a?e:ks(t,r[n]);return i}function sn(t,r,n){return t==t&&(n!==e&&(t=t<=n?t:n),r!==e&&(t=t>=r?t:r)),t}function ln(t,r,n,o,i,a){var s,l=1&r,c=2&r,d=4&r;if(n&&(s=i?n(t,o,i,a):n(t)),s!==e)return s;if(!es(t))return t;var u=Va(t);if(u){if(s=function(e){var t=e.length,r=new e.constructor(t);return t&&"string"==typeof e[0]&&je.call(e,"index")&&(r.index=e.index,r.input=e.input),r}(t),!l)return Fo(t,s)}else{var f=gi(t),h=f==y||f==x;if(qa(t))return So(t,l);if(f==C||f==p||h&&!i){if(s=c||h?{}:bi(t),!l)return c?function(e,t){return To(e,pi(e),t)}(t,function(e,t){return e&&To(t,Is(t),e)}(s,t)):function(e,t){return To(e,hi(e),t)}(t,nn(s,t))}else{if(!at[f])return i?t:{};s=function(e,t,r){var n,o=e.constructor;switch(t){case F:return Do(e);case m:case b:return new o(+e);case T:return function(e,t){var r=t?Do(e.buffer):e.buffer;return new e.constructor(r,e.byteOffset,e.byteLength)}(e,r);case I:case M:case A:case j:case B:case R:case z:case P:case L:return ko(e,r);case w:return new o;case $:case E:return new o(e);case D:return function(e){var t=new e.constructor(e.source,ue.exec(e));return t.lastIndex=e.lastIndex,t}(e);case k:return new o;case _:return n=e,Rr?ke(Rr.call(n)):{}}}(t,f,l)}}a||(a=new qr);var g=a.get(t);if(g)return g;a.set(t,s),as(t)?t.forEach((function(e){s.add(ln(e,r,n,e,t,a))})):rs(t)&&t.forEach((function(e,o){s.set(o,ln(e,r,n,o,t,a))}));var v=u?e:(d?c?ii:oi:c?Is:Ts)(t);return kt(v||t,(function(e,o){v&&(e=t[o=e]),en(s,o,ln(e,r,n,o,t,a))})),s}function cn(t,r,n){var o=n.length;if(null==t)return!o;for(t=ke(t);o--;){var i=n[o],a=r[i],s=t[i];if(s===e&&!(i in t)||!a(s))return!1}return!0}function dn(r,n,o){if("function"!=typeof r)throw new Oe(t);return Ti((function(){r.apply(e,o)}),n)}function un(e,t,r,n){var o=-1,i=Ft,a=!0,s=e.length,l=[],c=t.length;if(!s)return l;r&&(t=It(t,Qt(r))),n?(i=Tt,a=!1):t.length>=200&&(i=Xt,a=!1,t=new Kr(t));e:for(;++o<s;){var d=e[o],u=null==r?d:r(d);if(d=n||0!==d?d:0,a&&u==u){for(var f=c;f--;)if(t[f]===u)continue e;l.push(d)}else i(t,u,n)||l.push(d)}return l}Pr.templateSettings={escape:q,evaluate:G,interpolate:Q,variable:"",imports:{_:Pr}},Pr.prototype=Nr.prototype,Pr.prototype.constructor=Pr,Hr.prototype=Lr(Nr.prototype),Hr.prototype.constructor=Hr,Wr.prototype=Lr(Nr.prototype),Wr.prototype.constructor=Wr,Vr.prototype.clear=function(){this.__data__=_r?_r(null):{},this.size=0},Vr.prototype.delete=function(e){var t=this.has(e)&&delete this.__data__[e];return this.size-=t?1:0,t},Vr.prototype.get=function(t){var n=this.__data__;if(_r){var o=n[t];return o===r?e:o}return je.call(n,t)?n[t]:e},Vr.prototype.has=function(t){var r=this.__data__;return _r?r[t]!==e:je.call(r,t)},Vr.prototype.set=function(t,n){var o=this.__data__;return this.size+=this.has(t)?0:1,o[t]=_r&&n===e?r:n,this},Yr.prototype.clear=function(){this.__data__=[],this.size=0},Yr.prototype.delete=function(e){var t=this.__data__,r=tn(t,e);return!(r<0||(r==t.length-1?t.pop():Ge.call(t,r,1),--this.size,0))},Yr.prototype.get=function(t){var r=this.__data__,n=tn(r,t);return n<0?e:r[n][1]},Yr.prototype.has=function(e){return tn(this.__data__,e)>-1},Yr.prototype.set=function(e,t){var r=this.__data__,n=tn(r,e);return n<0?(++this.size,r.push([e,t])):r[n][1]=t,this},Ur.prototype.clear=function(){this.size=0,this.__data__={hash:new Vr,map:new(Sr||Yr),string:new Vr}},Ur.prototype.delete=function(e){var t=di(this,e).delete(e);return this.size-=t?1:0,t},Ur.prototype.get=function(e){return di(this,e).get(e)},Ur.prototype.has=function(e){return di(this,e).has(e)},Ur.prototype.set=function(e,t){var r=di(this,e),n=r.size;return r.set(e,t),this.size+=r.size==n?0:1,this},Kr.prototype.add=Kr.prototype.push=function(e){return this.__data__.set(e,r),this},Kr.prototype.has=function(e){return this.__data__.has(e)},qr.prototype.clear=function(){this.__data__=new Yr,this.size=0},qr.prototype.delete=function(e){var t=this.__data__,r=t.delete(e);return this.size=t.size,r},qr.prototype.get=function(e){return this.__data__.get(e)},qr.prototype.has=function(e){return this.__data__.has(e)},qr.prototype.set=function(e,t){var r=this.__data__;if(r instanceof Yr){var n=r.__data__;if(!Sr||n.length<199)return n.push([e,t]),this.size=++r.size,this;r=this.__data__=new Ur(n)}return r.set(e,t),this.size=r.size,this};var fn=Ao(xn),hn=Ao(wn,!0);function pn(e,t){var r=!0;return fn(e,(function(e,n,o){return r=!!t(e,n,o)})),r}function gn(t,r,n){for(var o=-1,i=t.length;++o<i;){var a=t[o],s=r(a);if(null!=s&&(l===e?s==s&&!ls(s):n(s,l)))var l=s,c=a}return c}function mn(e,t){var r=[];return fn(e,(function(e,n,o){t(e,n,o)&&r.push(e)})),r}function bn(e,t,r,n,o){var i=-1,a=e.length;for(r||(r=vi),o||(o=[]);++i<a;){var s=e[i];t>0&&r(s)?t>1?bn(s,t-1,r,n,o):Mt(o,s):n||(o[o.length]=s)}return o}var vn=jo(),yn=jo(!0);function xn(e,t){return e&&vn(e,t,Ts)}function wn(e,t){return e&&yn(e,t,Ts)}function $n(e,t){return Ot(t,(function(t){return Za(e[t])}))}function Cn(t,r){for(var n=0,o=(r=xo(r,t)).length;null!=t&&n<o;)t=t[Ri(r[n++])];return n&&n==o?t:e}function Sn(e,t,r){var n=t(e);return Va(e)?n:Mt(n,r(e))}function Dn(t){return null==t?t===e?"[object Undefined]":"[object Null]":tt&&tt in ke(t)?function(t){var r=je.call(t,tt),n=t[tt];try{t[tt]=e;var o=!0}catch(e){}var i=ze.call(t);return o&&(r?t[tt]=n:delete t[tt]),i}(t):function(e){return ze.call(e)}(t)}function kn(e,t){return e>t}function En(e,t){return null!=e&&je.call(e,t)}function _n(e,t){return null!=e&&t in ke(e)}function On(t,r,n){for(var o=n?Tt:Ft,i=t[0].length,a=t.length,s=a,l=we(a),c=1/0,d=[];s--;){var u=t[s];s&&r&&(u=It(u,Qt(r))),c=vr(u.length,c),l[s]=!n&&(r||i>=120&&u.length>=120)?new Kr(s&&u):e}u=t[0];var f=-1,h=l[0];e:for(;++f<i&&d.length<c;){var p=u[f],g=r?r(p):p;if(p=n||0!==p?p:0,!(h?Xt(h,g):o(d,g,n))){for(s=a;--s;){var m=l[s];if(!(m?Xt(m,g):o(t[s],g,n)))continue e}h&&h.push(g),d.push(p)}}return d}function Fn(t,r,n){var o=null==(t=_i(t,r=xo(r,t)))?t:t[Ri(Qi(r))];return null==o?e:St(o,t,n)}function Tn(e){return ts(e)&&Dn(e)==p}function In(t,r,n,o,i){return t===r||(null==t||null==r||!ts(t)&&!ts(r)?t!=t&&r!=r:function(t,r,n,o,i,a){var s=Va(t),l=Va(r),c=s?g:gi(t),d=l?g:gi(r),u=(c=c==p?C:c)==C,f=(d=d==p?C:d)==C,h=c==d;if(h&&qa(t)){if(!qa(r))return!1;s=!0,u=!1}if(h&&!u)return a||(a=new qr),s||cs(t)?ri(t,r,n,o,i,a):function(e,t,r,n,o,i,a){switch(r){case T:if(e.byteLength!=t.byteLength||e.byteOffset!=t.byteOffset)return!1;e=e.buffer,t=t.buffer;case F:return!(e.byteLength!=t.byteLength||!i(new Ve(e),new Ve(t)));case m:case b:case $:return La(+e,+t);case v:return e.name==t.name&&e.message==t.message;case D:case E:return e==t+"";case w:var s=ir;case k:var l=1&n;if(s||(s=lr),e.size!=t.size&&!l)return!1;var c=a.get(e);if(c)return c==t;n|=2,a.set(e,t);var d=ri(s(e),s(t),n,o,i,a);return a.delete(e),d;case _:if(Rr)return Rr.call(e)==Rr.call(t)}return!1}(t,r,c,n,o,i,a);if(!(1&n)){var y=u&&je.call(t,"__wrapped__"),x=f&&je.call(r,"__wrapped__");if(y||x){var S=y?t.value():t,O=x?r.value():r;return a||(a=new qr),i(S,O,n,o,a)}}return!!h&&(a||(a=new qr),function(t,r,n,o,i,a){var s=1&n,l=oi(t),c=l.length,d=oi(r),u=d.length;if(c!=u&&!s)return!1;for(var f=c;f--;){var h=l[f];if(!(s?h in r:je.call(r,h)))return!1}var p=a.get(t),g=a.get(r);if(p&&g)return p==r&&g==t;var m=!0;a.set(t,r),a.set(r,t);for(var b=s;++f<c;){var v=t[h=l[f]],y=r[h];if(o)var x=s?o(y,v,h,r,t,a):o(v,y,h,t,r,a);if(!(x===e?v===y||i(v,y,n,o,a):x)){m=!1;break}b||(b="constructor"==h)}if(m&&!b){var w=t.constructor,$=r.constructor;w==$||!("constructor"in t)||!("constructor"in r)||"function"==typeof w&&w instanceof w&&"function"==typeof $&&$ instanceof $||(m=!1)}return a.delete(t),a.delete(r),m}(t,r,n,o,i,a))}(t,r,n,o,In,i))}function Mn(t,r,n,o){var i=n.length,a=i,s=!o;if(null==t)return!a;for(t=ke(t);i--;){var l=n[i];if(s&&l[2]?l[1]!==t[l[0]]:!(l[0]in t))return!1}for(;++i<a;){var c=(l=n[i])[0],d=t[c],u=l[1];if(s&&l[2]){if(d===e&&!(c in t))return!1}else{var f=new qr;if(o)var h=o(d,u,c,t,r,f);if(!(h===e?In(u,d,3,o,f):h))return!1}}return!0}function An(e){return!(!es(e)||(t=e,Re&&Re in t))&&(Za(e)?Ne:pe).test(zi(e));var t}function jn(e){return"function"==typeof e?e:null==e?nl:"object"==typeof e?Va(e)?Nn(e[0],e[1]):Ln(e):fl(e)}function Bn(e){if(!Si(e))return mr(e);var t=[];for(var r in ke(e))je.call(e,r)&&"constructor"!=r&&t.push(r);return t}function Rn(e){if(!es(e))return function(e){var t=[];if(null!=e)for(var r in ke(e))t.push(r);return t}(e);var t=Si(e),r=[];for(var n in e)("constructor"!=n||!t&&je.call(e,n))&&r.push(n);return r}function zn(e,t){return e<t}function Pn(e,t){var r=-1,n=Ua(e)?we(e.length):[];return fn(e,(function(e,o,i){n[++r]=t(e,o,i)})),n}function Ln(e){var t=ui(e);return 1==t.length&&t[0][2]?ki(t[0][0],t[0][1]):function(r){return r===e||Mn(r,e,t)}}function Nn(t,r){return wi(t)&&Di(r)?ki(Ri(t),r):function(n){var o=ks(n,t);return o===e&&o===r?Es(n,t):In(r,o,3)}}function Hn(t,r,n,o,i){t!==r&&vn(r,(function(a,s){if(i||(i=new qr),es(a))!function(t,r,n,o,i,a,s){var l=Oi(t,n),c=Oi(r,n),d=s.get(c);if(d)Jr(t,n,d);else{var u=a?a(l,c,n+"",t,r,s):e,f=u===e;if(f){var h=Va(c),p=!h&&qa(c),g=!h&&!p&&cs(c);u=c,h||p||g?Va(l)?u=l:Ka(l)?u=Fo(l):p?(f=!1,u=So(c,!0)):g?(f=!1,u=ko(c,!0)):u=[]:os(c)||Wa(c)?(u=l,Wa(l)?u=bs(l):es(l)&&!Za(l)||(u=bi(c))):f=!1}f&&(s.set(c,u),i(u,c,o,a,s),s.delete(c)),Jr(t,n,u)}}(t,r,s,n,Hn,o,i);else{var l=o?o(Oi(t,s),a,s+"",t,r,i):e;l===e&&(l=a),Jr(t,s,l)}}),Is)}function Wn(t,r){var n=t.length;if(n)return yi(r+=r<0?n:0,n)?t[r]:e}function Vn(e,t,r){t=t.length?It(t,(function(e){return Va(e)?function(t){return Cn(t,1===e.length?e[0]:e)}:e})):[nl];var n=-1;t=It(t,Qt(ci()));var o=Pn(e,(function(e,r,o){var i=It(t,(function(t){return t(e)}));return{criteria:i,index:++n,value:e}}));return function(e,t){var r=e.length;for(e.sort(t);r--;)e[r]=e[r].value;return e}(o,(function(e,t){return function(e,t,r){for(var n=-1,o=e.criteria,i=t.criteria,a=o.length,s=r.length;++n<a;){var l=Eo(o[n],i[n]);if(l)return n>=s?l:l*("desc"==r[n]?-1:1)}return e.index-t.index}(e,t,r)}))}function Yn(e,t,r){for(var n=-1,o=t.length,i={};++n<o;){var a=t[n],s=Cn(e,a);r(s,a)&&Jn(i,xo(a,e),s)}return i}function Un(e,t,r,n){var o=n?Nt:Lt,i=-1,a=t.length,s=e;for(e===t&&(t=Fo(t)),r&&(s=It(e,Qt(r)));++i<a;)for(var l=0,c=t[i],d=r?r(c):c;(l=o(s,d,l,n))>-1;)s!==e&&Ge.call(s,l,1),Ge.call(e,l,1);return e}function Kn(e,t){for(var r=e?t.length:0,n=r-1;r--;){var o=t[r];if(r==n||o!==i){var i=o;yi(o)?Ge.call(e,o,1):fo(e,o)}}return e}function qn(e,t){return e+mt(wr()*(t-e+1))}function Gn(e,t){var r="";if(!e||t<1||t>d)return r;do{t%2&&(r+=e),(t=mt(t/2))&&(e+=e)}while(t);return r}function Qn(e,t){return Ii(Ei(e,t,nl),e+"")}function Zn(e){return Qr(Ls(e))}function Xn(e,t){var r=Ls(e);return ji(r,sn(t,0,r.length))}function Jn(t,r,n,o){if(!es(t))return t;for(var i=-1,a=(r=xo(r,t)).length,s=a-1,l=t;null!=l&&++i<a;){var c=Ri(r[i]),d=n;if("__proto__"===c||"constructor"===c||"prototype"===c)return t;if(i!=s){var u=l[c];(d=o?o(u,c,l):e)===e&&(d=es(u)?u:yi(r[i+1])?[]:{})}en(l,c,d),l=l[c]}return t}var eo=Or?function(e,t){return Or.set(e,t),e}:nl,to=st?function(e,t){return st(e,"toString",{configurable:!0,enumerable:!1,value:el(t),writable:!0})}:nl;function ro(e){return ji(Ls(e))}function no(e,t,r){var n=-1,o=e.length;t<0&&(t=-t>o?0:o+t),(r=r>o?o:r)<0&&(r+=o),o=t>r?0:r-t>>>0,t>>>=0;for(var i=we(o);++n<o;)i[n]=e[n+t];return i}function oo(e,t){var r;return fn(e,(function(e,n,o){return!(r=t(e,n,o))})),!!r}function io(e,t,r){var n=0,o=null==e?n:e.length;if("number"==typeof t&&t==t&&o<=2147483647){for(;n<o;){var i=n+o>>>1,a=e[i];null!==a&&!ls(a)&&(r?a<=t:a<t)?n=i+1:o=i}return o}return ao(e,t,nl,r)}function ao(t,r,n,o){var i=0,a=null==t?0:t.length;if(0===a)return 0;for(var s=(r=n(r))!=r,l=null===r,c=ls(r),d=r===e;i<a;){var u=mt((i+a)/2),f=n(t[u]),h=f!==e,p=null===f,g=f==f,m=ls(f);if(s)var b=o||g;else b=d?g&&(o||h):l?g&&h&&(o||!p):c?g&&h&&!p&&(o||!m):!p&&!m&&(o?f<=r:f<r);b?i=u+1:a=u}return vr(a,4294967294)}function so(e,t){for(var r=-1,n=e.length,o=0,i=[];++r<n;){var a=e[r],s=t?t(a):a;if(!r||!La(s,l)){var l=s;i[o++]=0===a?0:a}}return i}function lo(e){return"number"==typeof e?e:ls(e)?u:+e}function co(e){if("string"==typeof e)return e;if(Va(e))return It(e,co)+"";if(ls(e))return zr?zr.call(e):"";var t=e+"";return"0"==t&&1/e==-1/0?"-0":t}function uo(e,t,r){var n=-1,o=Ft,i=e.length,a=!0,s=[],l=s;if(r)a=!1,o=Tt;else if(i>=200){var c=t?null:Qo(e);if(c)return lr(c);a=!1,o=Xt,l=new Kr}else l=t?[]:s;e:for(;++n<i;){var d=e[n],u=t?t(d):d;if(d=r||0!==d?d:0,a&&u==u){for(var f=l.length;f--;)if(l[f]===u)continue e;t&&l.push(u),s.push(d)}else o(l,u,r)||(l!==s&&l.push(u),s.push(d))}return s}function fo(e,t){return null==(e=_i(e,t=xo(t,e)))||delete e[Ri(Qi(t))]}function ho(e,t,r,n){return Jn(e,t,r(Cn(e,t)),n)}function po(e,t,r,n){for(var o=e.length,i=n?o:-1;(n?i--:++i<o)&&t(e[i],i,e););return r?no(e,n?0:i,n?i+1:o):no(e,n?i+1:0,n?o:i)}function go(e,t){var r=e;return r instanceof Wr&&(r=r.value()),At(t,(function(e,t){return t.func.apply(t.thisArg,Mt([e],t.args))}),r)}function mo(e,t,r){var n=e.length;if(n<2)return n?uo(e[0]):[];for(var o=-1,i=we(n);++o<n;)for(var a=e[o],s=-1;++s<n;)s!=o&&(i[o]=un(i[o]||a,e[s],t,r));return uo(bn(i,1),t,r)}function bo(t,r,n){for(var o=-1,i=t.length,a=r.length,s={};++o<i;){var l=o<a?r[o]:e;n(s,t[o],l)}return s}function vo(e){return Ka(e)?e:[]}function yo(e){return"function"==typeof e?e:nl}function xo(e,t){return Va(e)?e:wi(e,t)?[e]:Bi(vs(e))}var wo=Qn;function $o(t,r,n){var o=t.length;return n=n===e?o:n,!r&&n>=o?t:no(t,r,n)}var Co=dt||function(e){return ft.clearTimeout(e)};function So(e,t){if(t)return e.slice();var r=e.length,n=Ye?Ye(r):new e.constructor(r);return e.copy(n),n}function Do(e){var t=new e.constructor(e.byteLength);return new Ve(t).set(new Ve(e)),t}function ko(e,t){var r=t?Do(e.buffer):e.buffer;return new e.constructor(r,e.byteOffset,e.length)}function Eo(t,r){if(t!==r){var n=t!==e,o=null===t,i=t==t,a=ls(t),s=r!==e,l=null===r,c=r==r,d=ls(r);if(!l&&!d&&!a&&t>r||a&&s&&c&&!l&&!d||o&&s&&c||!n&&c||!i)return 1;if(!o&&!a&&!d&&t<r||d&&n&&i&&!o&&!a||l&&n&&i||!s&&i||!c)return-1}return 0}function _o(e,t,r,n){for(var o=-1,i=e.length,a=r.length,s=-1,l=t.length,c=br(i-a,0),d=we(l+c),u=!n;++s<l;)d[s]=t[s];for(;++o<a;)(u||o<i)&&(d[r[o]]=e[o]);for(;c--;)d[s++]=e[o++];return d}function Oo(e,t,r,n){for(var o=-1,i=e.length,a=-1,s=r.length,l=-1,c=t.length,d=br(i-s,0),u=we(d+c),f=!n;++o<d;)u[o]=e[o];for(var h=o;++l<c;)u[h+l]=t[l];for(;++a<s;)(f||o<i)&&(u[h+r[a]]=e[o++]);return u}function Fo(e,t){var r=-1,n=e.length;for(t||(t=we(n));++r<n;)t[r]=e[r];return t}function To(t,r,n,o){var i=!n;n||(n={});for(var a=-1,s=r.length;++a<s;){var l=r[a],c=o?o(n[l],t[l],l,n,t):e;c===e&&(c=t[l]),i?on(n,l,c):en(n,l,c)}return n}function Io(e,t){return function(r,n){var o=Va(r)?Dt:rn,i=t?t():{};return o(r,e,ci(n,2),i)}}function Mo(t){return Qn((function(r,n){var o=-1,i=n.length,a=i>1?n[i-1]:e,s=i>2?n[2]:e;for(a=t.length>3&&"function"==typeof a?(i--,a):e,s&&xi(n[0],n[1],s)&&(a=i<3?e:a,i=1),r=ke(r);++o<i;){var l=n[o];l&&t(r,l,o,a)}return r}))}function Ao(e,t){return function(r,n){if(null==r)return r;if(!Ua(r))return e(r,n);for(var o=r.length,i=t?o:-1,a=ke(r);(t?i--:++i<o)&&!1!==n(a[i],i,a););return r}}function jo(e){return function(t,r,n){for(var o=-1,i=ke(t),a=n(t),s=a.length;s--;){var l=a[e?s:++o];if(!1===r(i[l],l,i))break}return t}}function Bo(t){return function(r){var n=or(r=vs(r))?ur(r):e,o=n?n[0]:r.charAt(0),i=n?$o(n,1).join(""):r.slice(1);return o[t]()+i}}function Ro(e){return function(t){return At(Zs(Ws(t).replace(Ze,"")),e,"")}}function zo(e){return function(){var t=arguments;switch(t.length){case 0:return new e;case 1:return new e(t[0]);case 2:return new e(t[0],t[1]);case 3:return new e(t[0],t[1],t[2]);case 4:return new e(t[0],t[1],t[2],t[3]);case 5:return new e(t[0],t[1],t[2],t[3],t[4]);case 6:return new e(t[0],t[1],t[2],t[3],t[4],t[5]);case 7:return new e(t[0],t[1],t[2],t[3],t[4],t[5],t[6])}var r=Lr(e.prototype),n=e.apply(r,t);return es(n)?n:r}}function Po(t){return function(r,n,o){var i=ke(r);if(!Ua(r)){var a=ci(n,3);r=Ts(r),n=function(e){return a(i[e],e,i)}}var s=t(r,n,o);return s>-1?i[a?r[s]:s]:e}}function Lo(r){return ni((function(n){var o=n.length,i=o,a=Hr.prototype.thru;for(r&&n.reverse();i--;){var s=n[i];if("function"!=typeof s)throw new Oe(t);if(a&&!l&&"wrapper"==si(s))var l=new Hr([],!0)}for(i=l?i:o;++i<o;){var c=si(s=n[i]),d="wrapper"==c?ai(s):e;l=d&&$i(d[0])&&424==d[1]&&!d[4].length&&1==d[9]?l[si(d[0])].apply(l,d[3]):1==s.length&&$i(s)?l[c]():l.thru(s)}return function(){var e=arguments,t=e[0];if(l&&1==e.length&&Va(t))return l.plant(t).value();for(var r=0,i=o?n[r].apply(this,e):t;++r<o;)i=n[r].call(this,i);return i}}))}function No(t,r,n,o,i,a,l,c,d,u){var f=r&s,h=1&r,p=2&r,g=24&r,m=512&r,b=p?e:zo(t);return function s(){for(var v=arguments.length,y=we(v),x=v;x--;)y[x]=arguments[x];if(g)var w=li(s),$=function(e,t){for(var r=e.length,n=0;r--;)e[r]===t&&++n;return n}(y,w);if(o&&(y=_o(y,o,i,g)),a&&(y=Oo(y,a,l,g)),v-=$,g&&v<u){var C=sr(y,w);return qo(t,r,No,s.placeholder,n,y,C,c,d,u-v)}var S=h?n:this,D=p?S[t]:t;return v=y.length,c?y=function(t,r){for(var n=t.length,o=vr(r.length,n),i=Fo(t);o--;){var a=r[o];t[o]=yi(a,n)?i[a]:e}return t}(y,c):m&&v>1&&y.reverse(),f&&d<v&&(y.length=d),this&&this!==ft&&this instanceof s&&(D=b||zo(D)),D.apply(S,y)}}function Ho(e,t){return function(r,n){return function(e,t,r,n){return xn(e,(function(e,o,i){t(n,r(e),o,i)})),n}(r,e,t(n),{})}}function Wo(t,r){return function(n,o){var i;if(n===e&&o===e)return r;if(n!==e&&(i=n),o!==e){if(i===e)return o;"string"==typeof n||"string"==typeof o?(n=co(n),o=co(o)):(n=lo(n),o=lo(o)),i=t(n,o)}return i}}function Vo(e){return ni((function(t){return t=It(t,Qt(ci())),Qn((function(r){var n=this;return e(t,(function(e){return St(e,n,r)}))}))}))}function Yo(t,r){var n=(r=r===e?" ":co(r)).length;if(n<2)return n?Gn(r,t):r;var o=Gn(r,pt(t/dr(r)));return or(r)?$o(ur(o),0,t).join(""):o.slice(0,t)}function Uo(t){return function(r,n,o){return o&&"number"!=typeof o&&xi(r,n,o)&&(n=o=e),r=hs(r),n===e?(n=r,r=0):n=hs(n),function(e,t,r,n){for(var o=-1,i=br(pt((t-e)/(r||1)),0),a=we(i);i--;)a[n?i:++o]=e,e+=r;return a}(r,n,o=o===e?r<n?1:-1:hs(o),t)}}function Ko(e){return function(t,r){return"string"==typeof t&&"string"==typeof r||(t=ms(t),r=ms(r)),e(t,r)}}function qo(t,r,n,o,s,l,c,d,u,f){var h=8&r;r|=h?i:a,4&(r&=~(h?a:i))||(r&=-4);var p=[t,r,s,h?l:e,h?c:e,h?e:l,h?e:c,d,u,f],g=n.apply(e,p);return $i(t)&&Fi(g,p),g.placeholder=o,Mi(g,t,r)}function Go(e){var t=De[e];return function(e,r){if(e=ms(e),(r=null==r?0:vr(ps(r),292))&&Yt(e)){var n=(vs(e)+"e").split("e");return+((n=(vs(t(n[0]+"e"+(+n[1]+r)))+"e").split("e"))[0]+"e"+(+n[1]-r))}return t(e)}}var Qo=kr&&1/lr(new kr([,-0]))[1]==c?function(e){return new kr(e)}:ll;function Zo(e){return function(t){var r=gi(t);return r==w?ir(t):r==k?cr(t):function(e,t){return It(t,(function(t){return[t,e[t]]}))}(t,e(t))}}function Xo(r,c,d,u,f,h,p,g){var m=2&c;if(!m&&"function"!=typeof r)throw new Oe(t);var b=u?u.length:0;if(b||(c&=-97,u=f=e),p=p===e?p:br(ps(p),0),g=g===e?g:ps(g),b-=f?f.length:0,c&a){var v=u,y=f;u=f=e}var x=m?e:ai(r),w=[r,c,d,u,f,v,y,h,p,g];if(x&&function(e,t){var r=e[1],o=t[1],i=r|o,a=i<131,c=o==s&&8==r||o==s&&r==l&&e[7].length<=t[8]||384==o&&t[7].length<=t[8]&&8==r;if(!a&&!c)return e;1&o&&(e[2]=t[2],i|=1&r?0:4);var d=t[3];if(d){var u=e[3];e[3]=u?_o(u,d,t[4]):d,e[4]=u?sr(e[3],n):t[4]}(d=t[5])&&(u=e[5],e[5]=u?Oo(u,d,t[6]):d,e[6]=u?sr(e[5],n):t[6]),(d=t[7])&&(e[7]=d),o&s&&(e[8]=null==e[8]?t[8]:vr(e[8],t[8])),null==e[9]&&(e[9]=t[9]),e[0]=t[0],e[1]=i}(w,x),r=w[0],c=w[1],d=w[2],u=w[3],f=w[4],!(g=w[9]=w[9]===e?m?0:r.length:br(w[9]-b,0))&&24&c&&(c&=-25),c&&1!=c)$=8==c||c==o?function(t,r,n){var o=zo(t);return function i(){for(var a=arguments.length,s=we(a),l=a,c=li(i);l--;)s[l]=arguments[l];var d=a<3&&s[0]!==c&&s[a-1]!==c?[]:sr(s,c);return(a-=d.length)<n?qo(t,r,No,i.placeholder,e,s,d,e,e,n-a):St(this&&this!==ft&&this instanceof i?o:t,this,s)}}(r,c,g):c!=i&&33!=c||f.length?No.apply(e,w):function(e,t,r,n){var o=1&t,i=zo(e);return function t(){for(var a=-1,s=arguments.length,l=-1,c=n.length,d=we(c+s),u=this&&this!==ft&&this instanceof t?i:e;++l<c;)d[l]=n[l];for(;s--;)d[l++]=arguments[++a];return St(u,o?r:this,d)}}(r,c,d,u);else var $=function(e,t,r){var n=1&t,o=zo(e);return function t(){return(this&&this!==ft&&this instanceof t?o:e).apply(n?r:this,arguments)}}(r,c,d);return Mi((x?eo:Fi)($,w),r,c)}function Jo(t,r,n,o){return t===e||La(t,Ie[n])&&!je.call(o,n)?r:t}function ei(t,r,n,o,i,a){return es(t)&&es(r)&&(a.set(r,t),Hn(t,r,e,ei,a),a.delete(r)),t}function ti(t){return os(t)?e:t}function ri(t,r,n,o,i,a){var s=1&n,l=t.length,c=r.length;if(l!=c&&!(s&&c>l))return!1;var d=a.get(t),u=a.get(r);if(d&&u)return d==r&&u==t;var f=-1,h=!0,p=2&n?new Kr:e;for(a.set(t,r),a.set(r,t);++f<l;){var g=t[f],m=r[f];if(o)var b=s?o(m,g,f,r,t,a):o(g,m,f,t,r,a);if(b!==e){if(b)continue;h=!1;break}if(p){if(!Bt(r,(function(e,t){if(!Xt(p,t)&&(g===e||i(g,e,n,o,a)))return p.push(t)}))){h=!1;break}}else if(g!==m&&!i(g,m,n,o,a)){h=!1;break}}return a.delete(t),a.delete(r),h}function ni(t){return Ii(Ei(t,e,Yi),t+"")}function oi(e){return Sn(e,Ts,hi)}function ii(e){return Sn(e,Is,pi)}var ai=Or?function(e){return Or.get(e)}:ll;function si(e){for(var t=e.name+"",r=Fr[t],n=je.call(Fr,t)?r.length:0;n--;){var o=r[n],i=o.func;if(null==i||i==e)return o.name}return t}function li(e){return(je.call(Pr,"placeholder")?Pr:e).placeholder}function ci(){var e=Pr.iteratee||ol;return e=e===ol?jn:e,arguments.length?e(arguments[0],arguments[1]):e}function di(e,t){var r,n,o=e.__data__;return("string"==(n=typeof(r=t))||"number"==n||"symbol"==n||"boolean"==n?"__proto__"!==r:null===r)?o["string"==typeof t?"string":"hash"]:o.map}function ui(e){for(var t=Ts(e),r=t.length;r--;){var n=t[r],o=e[n];t[r]=[n,o,Di(o)]}return t}function fi(t,r){var n=function(t,r){return null==t?e:t[r]}(t,r);return An(n)?n:e}var hi=bt?function(e){return null==e?[]:(e=ke(e),Ot(bt(e),(function(t){return qe.call(e,t)})))}:gl,pi=bt?function(e){for(var t=[];e;)Mt(t,hi(e)),e=Ue(e);return t}:gl,gi=Dn;function mi(e,t,r){for(var n=-1,o=(t=xo(t,e)).length,i=!1;++n<o;){var a=Ri(t[n]);if(!(i=null!=e&&r(e,a)))break;e=e[a]}return i||++n!=o?i:!!(o=null==e?0:e.length)&&Ja(o)&&yi(a,o)&&(Va(e)||Wa(e))}function bi(e){return"function"!=typeof e.constructor||Si(e)?{}:Lr(Ue(e))}function vi(e){return Va(e)||Wa(e)||!!(Qe&&e&&e[Qe])}function yi(e,t){var r=typeof e;return!!(t=null==t?d:t)&&("number"==r||"symbol"!=r&&me.test(e))&&e>-1&&e%1==0&&e<t}function xi(e,t,r){if(!es(r))return!1;var n=typeof t;return!!("number"==n?Ua(r)&&yi(t,r.length):"string"==n&&t in r)&&La(r[t],e)}function wi(e,t){if(Va(e))return!1;var r=typeof e;return!("number"!=r&&"symbol"!=r&&"boolean"!=r&&null!=e&&!ls(e))||X.test(e)||!Z.test(e)||null!=t&&e in ke(t)}function $i(e){var t=si(e),r=Pr[t];if("function"!=typeof r||!(t in Wr.prototype))return!1;if(e===r)return!0;var n=ai(r);return!!n&&e===n[0]}(Cr&&gi(new Cr(new ArrayBuffer(1)))!=T||Sr&&gi(new Sr)!=w||Dr&&gi(Dr.resolve())!=S||kr&&gi(new kr)!=k||Er&&gi(new Er)!=O)&&(gi=function(t){var r=Dn(t),n=r==C?t.constructor:e,o=n?zi(n):"";if(o)switch(o){case Tr:return T;case Ir:return w;case Mr:return S;case Ar:return k;case jr:return O}return r});var Ci=Me?Za:ml;function Si(e){var t=e&&e.constructor;return e===("function"==typeof t&&t.prototype||Ie)}function Di(e){return e==e&&!es(e)}function ki(t,r){return function(n){return null!=n&&n[t]===r&&(r!==e||t in ke(n))}}function Ei(t,r,n){return r=br(r===e?t.length-1:r,0),function(){for(var e=arguments,o=-1,i=br(e.length-r,0),a=we(i);++o<i;)a[o]=e[r+o];o=-1;for(var s=we(r+1);++o<r;)s[o]=e[o];return s[r]=n(a),St(t,this,s)}}function _i(e,t){return t.length<2?e:Cn(e,no(t,0,-1))}function Oi(e,t){if(("constructor"!==t||"function"!=typeof e[t])&&"__proto__"!=t)return e[t]}var Fi=Ai(eo),Ti=ht||function(e,t){return ft.setTimeout(e,t)},Ii=Ai(to);function Mi(e,t,r){var n=t+"";return Ii(e,function(e,t){var r=t.length;if(!r)return e;var n=r-1;return t[n]=(r>1?"& ":"")+t[n],t=t.join(r>2?", ":" "),e.replace(oe,"{\n/* [wrapped with "+t+"] */\n")}(n,function(e,t){return kt(h,(function(r){var n="_."+r[0];t&r[1]&&!Ft(e,n)&&e.push(n)})),e.sort()}(function(e){var t=e.match(ie);return t?t[1].split(ae):[]}(n),r)))}function Ai(t){var r=0,n=0;return function(){var o=yr(),i=16-(o-n);if(n=o,i>0){if(++r>=800)return arguments[0]}else r=0;return t.apply(e,arguments)}}function ji(t,r){var n=-1,o=t.length,i=o-1;for(r=r===e?o:r;++n<r;){var a=qn(n,i),s=t[a];t[a]=t[n],t[n]=s}return t.length=r,t}var Bi=function(e){var t=Aa(e,(function(e){return 500===r.size&&r.clear(),e})),r=t.cache;return t}((function(e){var t=[];return 46===e.charCodeAt(0)&&t.push(""),e.replace(J,(function(e,r,n,o){t.push(n?o.replace(ce,"$1"):r||e)})),t}));function Ri(e){if("string"==typeof e||ls(e))return e;var t=e+"";return"0"==t&&1/e==-1/0?"-0":t}function zi(e){if(null!=e){try{return Ae.call(e)}catch(e){}try{return e+""}catch(e){}}return""}function Pi(e){if(e instanceof Wr)return e.clone();var t=new Hr(e.__wrapped__,e.__chain__);return t.__actions__=Fo(e.__actions__),t.__index__=e.__index__,t.__values__=e.__values__,t}var Li=Qn((function(e,t){return Ka(e)?un(e,bn(t,1,Ka,!0)):[]})),Ni=Qn((function(t,r){var n=Qi(r);return Ka(n)&&(n=e),Ka(t)?un(t,bn(r,1,Ka,!0),ci(n,2)):[]})),Hi=Qn((function(t,r){var n=Qi(r);return Ka(n)&&(n=e),Ka(t)?un(t,bn(r,1,Ka,!0),e,n):[]}));function Wi(e,t,r){var n=null==e?0:e.length;if(!n)return-1;var o=null==r?0:ps(r);return o<0&&(o=br(n+o,0)),Pt(e,ci(t,3),o)}function Vi(t,r,n){var o=null==t?0:t.length;if(!o)return-1;var i=o-1;return n!==e&&(i=ps(n),i=n<0?br(o+i,0):vr(i,o-1)),Pt(t,ci(r,3),i,!0)}function Yi(e){return null!=e&&e.length?bn(e,1):[]}function Ui(t){return t&&t.length?t[0]:e}var Ki=Qn((function(e){var t=It(e,vo);return t.length&&t[0]===e[0]?On(t):[]})),qi=Qn((function(t){var r=Qi(t),n=It(t,vo);return r===Qi(n)?r=e:n.pop(),n.length&&n[0]===t[0]?On(n,ci(r,2)):[]})),Gi=Qn((function(t){var r=Qi(t),n=It(t,vo);return(r="function"==typeof r?r:e)&&n.pop(),n.length&&n[0]===t[0]?On(n,e,r):[]}));function Qi(t){var r=null==t?0:t.length;return r?t[r-1]:e}var Zi=Qn(Xi);function Xi(e,t){return e&&e.length&&t&&t.length?Un(e,t):e}var Ji=ni((function(e,t){var r=null==e?0:e.length,n=an(e,t);return Kn(e,It(t,(function(e){return yi(e,r)?+e:e})).sort(Eo)),n}));function ea(e){return null==e?e:$r.call(e)}var ta=Qn((function(e){return uo(bn(e,1,Ka,!0))})),ra=Qn((function(t){var r=Qi(t);return Ka(r)&&(r=e),uo(bn(t,1,Ka,!0),ci(r,2))})),na=Qn((function(t){var r=Qi(t);return r="function"==typeof r?r:e,uo(bn(t,1,Ka,!0),e,r)}));function oa(e){if(!e||!e.length)return[];var t=0;return e=Ot(e,(function(e){if(Ka(e))return t=br(e.length,t),!0})),qt(t,(function(t){return It(e,Vt(t))}))}function ia(t,r){if(!t||!t.length)return[];var n=oa(t);return null==r?n:It(n,(function(t){return St(r,e,t)}))}var aa=Qn((function(e,t){return Ka(e)?un(e,t):[]})),sa=Qn((function(e){return mo(Ot(e,Ka))})),la=Qn((function(t){var r=Qi(t);return Ka(r)&&(r=e),mo(Ot(t,Ka),ci(r,2))})),ca=Qn((function(t){var r=Qi(t);return r="function"==typeof r?r:e,mo(Ot(t,Ka),e,r)})),da=Qn(oa),ua=Qn((function(t){var r=t.length,n=r>1?t[r-1]:e;return n="function"==typeof n?(t.pop(),n):e,ia(t,n)}));function fa(e){var t=Pr(e);return t.__chain__=!0,t}function ha(e,t){return t(e)}var pa=ni((function(t){var r=t.length,n=r?t[0]:0,o=this.__wrapped__,i=function(e){return an(e,t)};return!(r>1||this.__actions__.length)&&o instanceof Wr&&yi(n)?((o=o.slice(n,+n+(r?1:0))).__actions__.push({func:ha,args:[i],thisArg:e}),new Hr(o,this.__chain__).thru((function(t){return r&&!t.length&&t.push(e),t}))):this.thru(i)})),ga=Io((function(e,t,r){je.call(e,r)?++e[r]:on(e,r,1)})),ma=Po(Wi),ba=Po(Vi);function va(e,t){return(Va(e)?kt:fn)(e,ci(t,3))}function ya(e,t){return(Va(e)?Et:hn)(e,ci(t,3))}var xa=Io((function(e,t,r){je.call(e,r)?e[r].push(t):on(e,r,[t])})),wa=Qn((function(e,t,r){var n=-1,o="function"==typeof t,i=Ua(e)?we(e.length):[];return fn(e,(function(e){i[++n]=o?St(t,e,r):Fn(e,t,r)})),i})),$a=Io((function(e,t,r){on(e,r,t)}));function Ca(e,t){return(Va(e)?It:Pn)(e,ci(t,3))}var Sa=Io((function(e,t,r){e[r?0:1].push(t)}),(function(){return[[],[]]})),Da=Qn((function(e,t){if(null==e)return[];var r=t.length;return r>1&&xi(e,t[0],t[1])?t=[]:r>2&&xi(t[0],t[1],t[2])&&(t=[t[0]]),Vn(e,bn(t,1),[])})),ka=ut||function(){return ft.Date.now()};function Ea(t,r,n){return r=n?e:r,r=t&&null==r?t.length:r,Xo(t,s,e,e,e,e,r)}function _a(r,n){var o;if("function"!=typeof n)throw new Oe(t);return r=ps(r),function(){return--r>0&&(o=n.apply(this,arguments)),r<=1&&(n=e),o}}var Oa=Qn((function(e,t,r){var n=1;if(r.length){var o=sr(r,li(Oa));n|=i}return Xo(e,n,t,r,o)})),Fa=Qn((function(e,t,r){var n=3;if(r.length){var o=sr(r,li(Fa));n|=i}return Xo(t,n,e,r,o)}));function Ta(r,n,o){var i,a,s,l,c,d,u=0,f=!1,h=!1,p=!0;if("function"!=typeof r)throw new Oe(t);function g(t){var n=i,o=a;return i=a=e,u=t,l=r.apply(o,n)}function m(t){var r=t-d;return d===e||r>=n||r<0||h&&t-u>=s}function b(){var e=ka();if(m(e))return v(e);c=Ti(b,function(e){var t=n-(e-d);return h?vr(t,s-(e-u)):t}(e))}function v(t){return c=e,p&&i?g(t):(i=a=e,l)}function y(){var t=ka(),r=m(t);if(i=arguments,a=this,d=t,r){if(c===e)return function(e){return u=e,c=Ti(b,n),f?g(e):l}(d);if(h)return Co(c),c=Ti(b,n),g(d)}return c===e&&(c=Ti(b,n)),l}return n=ms(n)||0,es(o)&&(f=!!o.leading,s=(h="maxWait"in o)?br(ms(o.maxWait)||0,n):s,p="trailing"in o?!!o.trailing:p),y.cancel=function(){c!==e&&Co(c),u=0,i=d=a=c=e},y.flush=function(){return c===e?l:v(ka())},y}var Ia=Qn((function(e,t){return dn(e,1,t)})),Ma=Qn((function(e,t,r){return dn(e,ms(t)||0,r)}));function Aa(e,r){if("function"!=typeof e||null!=r&&"function"!=typeof r)throw new Oe(t);var n=function(){var t=arguments,o=r?r.apply(this,t):t[0],i=n.cache;if(i.has(o))return i.get(o);var a=e.apply(this,t);return n.cache=i.set(o,a)||i,a};return n.cache=new(Aa.Cache||Ur),n}function ja(e){if("function"!=typeof e)throw new Oe(t);return function(){var t=arguments;switch(t.length){case 0:return!e.call(this);case 1:return!e.call(this,t[0]);case 2:return!e.call(this,t[0],t[1]);case 3:return!e.call(this,t[0],t[1],t[2])}return!e.apply(this,t)}}Aa.Cache=Ur;var Ba=wo((function(e,t){var r=(t=1==t.length&&Va(t[0])?It(t[0],Qt(ci())):It(bn(t,1),Qt(ci()))).length;return Qn((function(n){for(var o=-1,i=vr(n.length,r);++o<i;)n[o]=t[o].call(this,n[o]);return St(e,this,n)}))})),Ra=Qn((function(t,r){var n=sr(r,li(Ra));return Xo(t,i,e,r,n)})),za=Qn((function(t,r){var n=sr(r,li(za));return Xo(t,a,e,r,n)})),Pa=ni((function(t,r){return Xo(t,l,e,e,e,r)}));function La(e,t){return e===t||e!=e&&t!=t}var Na=Ko(kn),Ha=Ko((function(e,t){return e>=t})),Wa=Tn(function(){return arguments}())?Tn:function(e){return ts(e)&&je.call(e,"callee")&&!qe.call(e,"callee")},Va=we.isArray,Ya=vt?Qt(vt):function(e){return ts(e)&&Dn(e)==F};function Ua(e){return null!=e&&Ja(e.length)&&!Za(e)}function Ka(e){return ts(e)&&Ua(e)}var qa=Rt||ml,Ga=yt?Qt(yt):function(e){return ts(e)&&Dn(e)==b};function Qa(e){if(!ts(e))return!1;var t=Dn(e);return t==v||"[object DOMException]"==t||"string"==typeof e.message&&"string"==typeof e.name&&!os(e)}function Za(e){if(!es(e))return!1;var t=Dn(e);return t==y||t==x||"[object AsyncFunction]"==t||"[object Proxy]"==t}function Xa(e){return"number"==typeof e&&e==ps(e)}function Ja(e){return"number"==typeof e&&e>-1&&e%1==0&&e<=d}function es(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)}function ts(e){return null!=e&&"object"==typeof e}var rs=xt?Qt(xt):function(e){return ts(e)&&gi(e)==w};function ns(e){return"number"==typeof e||ts(e)&&Dn(e)==$}function os(e){if(!ts(e)||Dn(e)!=C)return!1;var t=Ue(e);if(null===t)return!0;var r=je.call(t,"constructor")&&t.constructor;return"function"==typeof r&&r instanceof r&&Ae.call(r)==Pe}var is=wt?Qt(wt):function(e){return ts(e)&&Dn(e)==D},as=$t?Qt($t):function(e){return ts(e)&&gi(e)==k};function ss(e){return"string"==typeof e||!Va(e)&&ts(e)&&Dn(e)==E}function ls(e){return"symbol"==typeof e||ts(e)&&Dn(e)==_}var cs=Ct?Qt(Ct):function(e){return ts(e)&&Ja(e.length)&&!!it[Dn(e)]},ds=Ko(zn),us=Ko((function(e,t){return e<=t}));function fs(e){if(!e)return[];if(Ua(e))return ss(e)?ur(e):Fo(e);if(Je&&e[Je])return function(e){for(var t,r=[];!(t=e.next()).done;)r.push(t.value);return r}(e[Je]());var t=gi(e);return(t==w?ir:t==k?lr:Ls)(e)}function hs(e){return e?(e=ms(e))===c||e===-1/0?17976931348623157e292*(e<0?-1:1):e==e?e:0:0===e?e:0}function ps(e){var t=hs(e),r=t%1;return t==t?r?t-r:t:0}function gs(e){return e?sn(ps(e),0,f):0}function ms(e){if("number"==typeof e)return e;if(ls(e))return u;if(es(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=es(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=Gt(e);var r=he.test(e);return r||ge.test(e)?ct(e.slice(2),r?2:8):fe.test(e)?u:+e}function bs(e){return To(e,Is(e))}function vs(e){return null==e?"":co(e)}var ys=Mo((function(e,t){if(Si(t)||Ua(t))To(t,Ts(t),e);else for(var r in t)je.call(t,r)&&en(e,r,t[r])})),xs=Mo((function(e,t){To(t,Is(t),e)})),ws=Mo((function(e,t,r,n){To(t,Is(t),e,n)})),$s=Mo((function(e,t,r,n){To(t,Ts(t),e,n)})),Cs=ni(an),Ss=Qn((function(t,r){t=ke(t);var n=-1,o=r.length,i=o>2?r[2]:e;for(i&&xi(r[0],r[1],i)&&(o=1);++n<o;)for(var a=r[n],s=Is(a),l=-1,c=s.length;++l<c;){var d=s[l],u=t[d];(u===e||La(u,Ie[d])&&!je.call(t,d))&&(t[d]=a[d])}return t})),Ds=Qn((function(t){return t.push(e,ei),St(As,e,t)}));function ks(t,r,n){var o=null==t?e:Cn(t,r);return o===e?n:o}function Es(e,t){return null!=e&&mi(e,t,_n)}var _s=Ho((function(e,t,r){null!=t&&"function"!=typeof t.toString&&(t=ze.call(t)),e[t]=r}),el(nl)),Os=Ho((function(e,t,r){null!=t&&"function"!=typeof t.toString&&(t=ze.call(t)),je.call(e,t)?e[t].push(r):e[t]=[r]}),ci),Fs=Qn(Fn);function Ts(e){return Ua(e)?Gr(e):Bn(e)}function Is(e){return Ua(e)?Gr(e,!0):Rn(e)}var Ms=Mo((function(e,t,r){Hn(e,t,r)})),As=Mo((function(e,t,r,n){Hn(e,t,r,n)})),js=ni((function(e,t){var r={};if(null==e)return r;var n=!1;t=It(t,(function(t){return t=xo(t,e),n||(n=t.length>1),t})),To(e,ii(e),r),n&&(r=ln(r,7,ti));for(var o=t.length;o--;)fo(r,t[o]);return r})),Bs=ni((function(e,t){return null==e?{}:function(e,t){return Yn(e,t,(function(t,r){return Es(e,r)}))}(e,t)}));function Rs(e,t){if(null==e)return{};var r=It(ii(e),(function(e){return[e]}));return t=ci(t),Yn(e,r,(function(e,r){return t(e,r[0])}))}var zs=Zo(Ts),Ps=Zo(Is);function Ls(e){return null==e?[]:Zt(e,Ts(e))}var Ns=Ro((function(e,t,r){return t=t.toLowerCase(),e+(r?Hs(t):t)}));function Hs(e){return Qs(vs(e).toLowerCase())}function Ws(e){return(e=vs(e))&&e.replace(be,tr).replace(Xe,"")}var Vs=Ro((function(e,t,r){return e+(r?"-":"")+t.toLowerCase()})),Ys=Ro((function(e,t,r){return e+(r?" ":"")+t.toLowerCase()})),Us=Bo("toLowerCase"),Ks=Ro((function(e,t,r){return e+(r?"_":"")+t.toLowerCase()})),qs=Ro((function(e,t,r){return e+(r?" ":"")+Qs(t)})),Gs=Ro((function(e,t,r){return e+(r?" ":"")+t.toUpperCase()})),Qs=Bo("toUpperCase");function Zs(t,r,n){return t=vs(t),(r=n?e:r)===e?function(e){return rt.test(e)}(t)?function(e){return e.match(et)||[]}(t):function(e){return e.match(se)||[]}(t):t.match(r)||[]}var Xs=Qn((function(t,r){try{return St(t,e,r)}catch(e){return Qa(e)?e:new Ce(e)}})),Js=ni((function(e,t){return kt(t,(function(t){t=Ri(t),on(e,t,Oa(e[t],e))})),e}));function el(e){return function(){return e}}var tl=Lo(),rl=Lo(!0);function nl(e){return e}function ol(e){return jn("function"==typeof e?e:ln(e,1))}var il=Qn((function(e,t){return function(r){return Fn(r,e,t)}})),al=Qn((function(e,t){return function(r){return Fn(e,r,t)}}));function sl(e,t,r){var n=Ts(t),o=$n(t,n);null!=r||es(t)&&(o.length||!n.length)||(r=t,t=e,e=this,o=$n(t,Ts(t)));var i=!(es(r)&&"chain"in r&&!r.chain),a=Za(e);return kt(o,(function(r){var n=t[r];e[r]=n,a&&(e.prototype[r]=function(){var t=this.__chain__;if(i||t){var r=e(this.__wrapped__);return(r.__actions__=Fo(this.__actions__)).push({func:n,args:arguments,thisArg:e}),r.__chain__=t,r}return n.apply(e,Mt([this.value()],arguments))})})),e}function ll(){}var cl=Vo(It),dl=Vo(_t),ul=Vo(Bt);function fl(e){return wi(e)?Vt(Ri(e)):function(e){return function(t){return Cn(t,e)}}(e)}var hl=Uo(),pl=Uo(!0);function gl(){return[]}function ml(){return!1}var bl,vl=Wo((function(e,t){return e+t}),0),yl=Go("ceil"),xl=Wo((function(e,t){return e/t}),1),wl=Go("floor"),$l=Wo((function(e,t){return e*t}),1),Cl=Go("round"),Sl=Wo((function(e,t){return e-t}),0);return Pr.after=function(e,r){if("function"!=typeof r)throw new Oe(t);return e=ps(e),function(){if(--e<1)return r.apply(this,arguments)}},Pr.ary=Ea,Pr.assign=ys,Pr.assignIn=xs,Pr.assignInWith=ws,Pr.assignWith=$s,Pr.at=Cs,Pr.before=_a,Pr.bind=Oa,Pr.bindAll=Js,Pr.bindKey=Fa,Pr.castArray=function(){if(!arguments.length)return[];var e=arguments[0];return Va(e)?e:[e]},Pr.chain=fa,Pr.chunk=function(t,r,n){r=(n?xi(t,r,n):r===e)?1:br(ps(r),0);var o=null==t?0:t.length;if(!o||r<1)return[];for(var i=0,a=0,s=we(pt(o/r));i<o;)s[a++]=no(t,i,i+=r);return s},Pr.compact=function(e){for(var t=-1,r=null==e?0:e.length,n=0,o=[];++t<r;){var i=e[t];i&&(o[n++]=i)}return o},Pr.concat=function(){var e=arguments.length;if(!e)return[];for(var t=we(e-1),r=arguments[0],n=e;n--;)t[n-1]=arguments[n];return Mt(Va(r)?Fo(r):[r],bn(t,1))},Pr.cond=function(e){var r=null==e?0:e.length,n=ci();return e=r?It(e,(function(e){if("function"!=typeof e[1])throw new Oe(t);return[n(e[0]),e[1]]})):[],Qn((function(t){for(var n=-1;++n<r;){var o=e[n];if(St(o[0],this,t))return St(o[1],this,t)}}))},Pr.conforms=function(e){return function(e){var t=Ts(e);return function(r){return cn(r,e,t)}}(ln(e,1))},Pr.constant=el,Pr.countBy=ga,Pr.create=function(e,t){var r=Lr(e);return null==t?r:nn(r,t)},Pr.curry=function t(r,n,o){var i=Xo(r,8,e,e,e,e,e,n=o?e:n);return i.placeholder=t.placeholder,i},Pr.curryRight=function t(r,n,i){var a=Xo(r,o,e,e,e,e,e,n=i?e:n);return a.placeholder=t.placeholder,a},Pr.debounce=Ta,Pr.defaults=Ss,Pr.defaultsDeep=Ds,Pr.defer=Ia,Pr.delay=Ma,Pr.difference=Li,Pr.differenceBy=Ni,Pr.differenceWith=Hi,Pr.drop=function(t,r,n){var o=null==t?0:t.length;return o?no(t,(r=n||r===e?1:ps(r))<0?0:r,o):[]},Pr.dropRight=function(t,r,n){var o=null==t?0:t.length;return o?no(t,0,(r=o-(r=n||r===e?1:ps(r)))<0?0:r):[]},Pr.dropRightWhile=function(e,t){return e&&e.length?po(e,ci(t,3),!0,!0):[]},Pr.dropWhile=function(e,t){return e&&e.length?po(e,ci(t,3),!0):[]},Pr.fill=function(t,r,n,o){var i=null==t?0:t.length;return i?(n&&"number"!=typeof n&&xi(t,r,n)&&(n=0,o=i),function(t,r,n,o){var i=t.length;for((n=ps(n))<0&&(n=-n>i?0:i+n),(o=o===e||o>i?i:ps(o))<0&&(o+=i),o=n>o?0:gs(o);n<o;)t[n++]=r;return t}(t,r,n,o)):[]},Pr.filter=function(e,t){return(Va(e)?Ot:mn)(e,ci(t,3))},Pr.flatMap=function(e,t){return bn(Ca(e,t),1)},Pr.flatMapDeep=function(e,t){return bn(Ca(e,t),c)},Pr.flatMapDepth=function(t,r,n){return n=n===e?1:ps(n),bn(Ca(t,r),n)},Pr.flatten=Yi,Pr.flattenDeep=function(e){return null!=e&&e.length?bn(e,c):[]},Pr.flattenDepth=function(t,r){return null!=t&&t.length?bn(t,r=r===e?1:ps(r)):[]},Pr.flip=function(e){return Xo(e,512)},Pr.flow=tl,Pr.flowRight=rl,Pr.fromPairs=function(e){for(var t=-1,r=null==e?0:e.length,n={};++t<r;){var o=e[t];n[o[0]]=o[1]}return n},Pr.functions=function(e){return null==e?[]:$n(e,Ts(e))},Pr.functionsIn=function(e){return null==e?[]:$n(e,Is(e))},Pr.groupBy=xa,Pr.initial=function(e){return null!=e&&e.length?no(e,0,-1):[]},Pr.intersection=Ki,Pr.intersectionBy=qi,Pr.intersectionWith=Gi,Pr.invert=_s,Pr.invertBy=Os,Pr.invokeMap=wa,Pr.iteratee=ol,Pr.keyBy=$a,Pr.keys=Ts,Pr.keysIn=Is,Pr.map=Ca,Pr.mapKeys=function(e,t){var r={};return t=ci(t,3),xn(e,(function(e,n,o){on(r,t(e,n,o),e)})),r},Pr.mapValues=function(e,t){var r={};return t=ci(t,3),xn(e,(function(e,n,o){on(r,n,t(e,n,o))})),r},Pr.matches=function(e){return Ln(ln(e,1))},Pr.matchesProperty=function(e,t){return Nn(e,ln(t,1))},Pr.memoize=Aa,Pr.merge=Ms,Pr.mergeWith=As,Pr.method=il,Pr.methodOf=al,Pr.mixin=sl,Pr.negate=ja,Pr.nthArg=function(e){return e=ps(e),Qn((function(t){return Wn(t,e)}))},Pr.omit=js,Pr.omitBy=function(e,t){return Rs(e,ja(ci(t)))},Pr.once=function(e){return _a(2,e)},Pr.orderBy=function(t,r,n,o){return null==t?[]:(Va(r)||(r=null==r?[]:[r]),Va(n=o?e:n)||(n=null==n?[]:[n]),Vn(t,r,n))},Pr.over=cl,Pr.overArgs=Ba,Pr.overEvery=dl,Pr.overSome=ul,Pr.partial=Ra,Pr.partialRight=za,Pr.partition=Sa,Pr.pick=Bs,Pr.pickBy=Rs,Pr.property=fl,Pr.propertyOf=function(t){return function(r){return null==t?e:Cn(t,r)}},Pr.pull=Zi,Pr.pullAll=Xi,Pr.pullAllBy=function(e,t,r){return e&&e.length&&t&&t.length?Un(e,t,ci(r,2)):e},Pr.pullAllWith=function(t,r,n){return t&&t.length&&r&&r.length?Un(t,r,e,n):t},Pr.pullAt=Ji,Pr.range=hl,Pr.rangeRight=pl,Pr.rearg=Pa,Pr.reject=function(e,t){return(Va(e)?Ot:mn)(e,ja(ci(t,3)))},Pr.remove=function(e,t){var r=[];if(!e||!e.length)return r;var n=-1,o=[],i=e.length;for(t=ci(t,3);++n<i;){var a=e[n];t(a,n,e)&&(r.push(a),o.push(n))}return Kn(e,o),r},Pr.rest=function(r,n){if("function"!=typeof r)throw new Oe(t);return Qn(r,n=n===e?n:ps(n))},Pr.reverse=ea,Pr.sampleSize=function(t,r,n){return r=(n?xi(t,r,n):r===e)?1:ps(r),(Va(t)?Zr:Xn)(t,r)},Pr.set=function(e,t,r){return null==e?e:Jn(e,t,r)},Pr.setWith=function(t,r,n,o){return o="function"==typeof o?o:e,null==t?t:Jn(t,r,n,o)},Pr.shuffle=function(e){return(Va(e)?Xr:ro)(e)},Pr.slice=function(t,r,n){var o=null==t?0:t.length;return o?(n&&"number"!=typeof n&&xi(t,r,n)?(r=0,n=o):(r=null==r?0:ps(r),n=n===e?o:ps(n)),no(t,r,n)):[]},Pr.sortBy=Da,Pr.sortedUniq=function(e){return e&&e.length?so(e):[]},Pr.sortedUniqBy=function(e,t){return e&&e.length?so(e,ci(t,2)):[]},Pr.split=function(t,r,n){return n&&"number"!=typeof n&&xi(t,r,n)&&(r=n=e),(n=n===e?f:n>>>0)?(t=vs(t))&&("string"==typeof r||null!=r&&!is(r))&&!(r=co(r))&&or(t)?$o(ur(t),0,n):t.split(r,n):[]},Pr.spread=function(e,r){if("function"!=typeof e)throw new Oe(t);return r=null==r?0:br(ps(r),0),Qn((function(t){var n=t[r],o=$o(t,0,r);return n&&Mt(o,n),St(e,this,o)}))},Pr.tail=function(e){var t=null==e?0:e.length;return t?no(e,1,t):[]},Pr.take=function(t,r,n){return t&&t.length?no(t,0,(r=n||r===e?1:ps(r))<0?0:r):[]},Pr.takeRight=function(t,r,n){var o=null==t?0:t.length;return o?no(t,(r=o-(r=n||r===e?1:ps(r)))<0?0:r,o):[]},Pr.takeRightWhile=function(e,t){return e&&e.length?po(e,ci(t,3),!1,!0):[]},Pr.takeWhile=function(e,t){return e&&e.length?po(e,ci(t,3)):[]},Pr.tap=function(e,t){return t(e),e},Pr.throttle=function(e,r,n){var o=!0,i=!0;if("function"!=typeof e)throw new Oe(t);return es(n)&&(o="leading"in n?!!n.leading:o,i="trailing"in n?!!n.trailing:i),Ta(e,r,{leading:o,maxWait:r,trailing:i})},Pr.thru=ha,Pr.toArray=fs,Pr.toPairs=zs,Pr.toPairsIn=Ps,Pr.toPath=function(e){return Va(e)?It(e,Ri):ls(e)?[e]:Fo(Bi(vs(e)))},Pr.toPlainObject=bs,Pr.transform=function(e,t,r){var n=Va(e),o=n||qa(e)||cs(e);if(t=ci(t,4),null==r){var i=e&&e.constructor;r=o?n?new i:[]:es(e)&&Za(i)?Lr(Ue(e)):{}}return(o?kt:xn)(e,(function(e,n,o){return t(r,e,n,o)})),r},Pr.unary=function(e){return Ea(e,1)},Pr.union=ta,Pr.unionBy=ra,Pr.unionWith=na,Pr.uniq=function(e){return e&&e.length?uo(e):[]},Pr.uniqBy=function(e,t){return e&&e.length?uo(e,ci(t,2)):[]},Pr.uniqWith=function(t,r){return r="function"==typeof r?r:e,t&&t.length?uo(t,e,r):[]},Pr.unset=function(e,t){return null==e||fo(e,t)},Pr.unzip=oa,Pr.unzipWith=ia,Pr.update=function(e,t,r){return null==e?e:ho(e,t,yo(r))},Pr.updateWith=function(t,r,n,o){return o="function"==typeof o?o:e,null==t?t:ho(t,r,yo(n),o)},Pr.values=Ls,Pr.valuesIn=function(e){return null==e?[]:Zt(e,Is(e))},Pr.without=aa,Pr.words=Zs,Pr.wrap=function(e,t){return Ra(yo(t),e)},Pr.xor=sa,Pr.xorBy=la,Pr.xorWith=ca,Pr.zip=da,Pr.zipObject=function(e,t){return bo(e||[],t||[],en)},Pr.zipObjectDeep=function(e,t){return bo(e||[],t||[],Jn)},Pr.zipWith=ua,Pr.entries=zs,Pr.entriesIn=Ps,Pr.extend=xs,Pr.extendWith=ws,sl(Pr,Pr),Pr.add=vl,Pr.attempt=Xs,Pr.camelCase=Ns,Pr.capitalize=Hs,Pr.ceil=yl,Pr.clamp=function(t,r,n){return n===e&&(n=r,r=e),n!==e&&(n=(n=ms(n))==n?n:0),r!==e&&(r=(r=ms(r))==r?r:0),sn(ms(t),r,n)},Pr.clone=function(e){return ln(e,4)},Pr.cloneDeep=function(e){return ln(e,5)},Pr.cloneDeepWith=function(t,r){return ln(t,5,r="function"==typeof r?r:e)},Pr.cloneWith=function(t,r){return ln(t,4,r="function"==typeof r?r:e)},Pr.conformsTo=function(e,t){return null==t||cn(e,t,Ts(t))},Pr.deburr=Ws,Pr.defaultTo=function(e,t){return null==e||e!=e?t:e},Pr.divide=xl,Pr.endsWith=function(t,r,n){t=vs(t),r=co(r);var o=t.length,i=n=n===e?o:sn(ps(n),0,o);return(n-=r.length)>=0&&t.slice(n,i)==r},Pr.eq=La,Pr.escape=function(e){return(e=vs(e))&&K.test(e)?e.replace(Y,rr):e},Pr.escapeRegExp=function(e){return(e=vs(e))&&te.test(e)?e.replace(ee,"\\$&"):e},Pr.every=function(t,r,n){var o=Va(t)?_t:pn;return n&&xi(t,r,n)&&(r=e),o(t,ci(r,3))},Pr.find=ma,Pr.findIndex=Wi,Pr.findKey=function(e,t){return zt(e,ci(t,3),xn)},Pr.findLast=ba,Pr.findLastIndex=Vi,Pr.findLastKey=function(e,t){return zt(e,ci(t,3),wn)},Pr.floor=wl,Pr.forEach=va,Pr.forEachRight=ya,Pr.forIn=function(e,t){return null==e?e:vn(e,ci(t,3),Is)},Pr.forInRight=function(e,t){return null==e?e:yn(e,ci(t,3),Is)},Pr.forOwn=function(e,t){return e&&xn(e,ci(t,3))},Pr.forOwnRight=function(e,t){return e&&wn(e,ci(t,3))},Pr.get=ks,Pr.gt=Na,Pr.gte=Ha,Pr.has=function(e,t){return null!=e&&mi(e,t,En)},Pr.hasIn=Es,Pr.head=Ui,Pr.identity=nl,Pr.includes=function(e,t,r,n){e=Ua(e)?e:Ls(e),r=r&&!n?ps(r):0;var o=e.length;return r<0&&(r=br(o+r,0)),ss(e)?r<=o&&e.indexOf(t,r)>-1:!!o&&Lt(e,t,r)>-1},Pr.indexOf=function(e,t,r){var n=null==e?0:e.length;if(!n)return-1;var o=null==r?0:ps(r);return o<0&&(o=br(n+o,0)),Lt(e,t,o)},Pr.inRange=function(t,r,n){return r=hs(r),n===e?(n=r,r=0):n=hs(n),function(e,t,r){return e>=vr(t,r)&&e<br(t,r)}(t=ms(t),r,n)},Pr.invoke=Fs,Pr.isArguments=Wa,Pr.isArray=Va,Pr.isArrayBuffer=Ya,Pr.isArrayLike=Ua,Pr.isArrayLikeObject=Ka,Pr.isBoolean=function(e){return!0===e||!1===e||ts(e)&&Dn(e)==m},Pr.isBuffer=qa,Pr.isDate=Ga,Pr.isElement=function(e){return ts(e)&&1===e.nodeType&&!os(e)},Pr.isEmpty=function(e){if(null==e)return!0;if(Ua(e)&&(Va(e)||"string"==typeof e||"function"==typeof e.splice||qa(e)||cs(e)||Wa(e)))return!e.length;var t=gi(e);if(t==w||t==k)return!e.size;if(Si(e))return!Bn(e).length;for(var r in e)if(je.call(e,r))return!1;return!0},Pr.isEqual=function(e,t){return In(e,t)},Pr.isEqualWith=function(t,r,n){var o=(n="function"==typeof n?n:e)?n(t,r):e;return o===e?In(t,r,e,n):!!o},Pr.isError=Qa,Pr.isFinite=function(e){return"number"==typeof e&&Yt(e)},Pr.isFunction=Za,Pr.isInteger=Xa,Pr.isLength=Ja,Pr.isMap=rs,Pr.isMatch=function(e,t){return e===t||Mn(e,t,ui(t))},Pr.isMatchWith=function(t,r,n){return n="function"==typeof n?n:e,Mn(t,r,ui(r),n)},Pr.isNaN=function(e){return ns(e)&&e!=+e},Pr.isNative=function(e){if(Ci(e))throw new Ce("Unsupported core-js use. Try https://npms.io/search?q=ponyfill.");return An(e)},Pr.isNil=function(e){return null==e},Pr.isNull=function(e){return null===e},Pr.isNumber=ns,Pr.isObject=es,Pr.isObjectLike=ts,Pr.isPlainObject=os,Pr.isRegExp=is,Pr.isSafeInteger=function(e){return Xa(e)&&e>=-9007199254740991&&e<=d},Pr.isSet=as,Pr.isString=ss,Pr.isSymbol=ls,Pr.isTypedArray=cs,Pr.isUndefined=function(t){return t===e},Pr.isWeakMap=function(e){return ts(e)&&gi(e)==O},Pr.isWeakSet=function(e){return ts(e)&&"[object WeakSet]"==Dn(e)},Pr.join=function(e,t){return null==e?"":gr.call(e,t)},Pr.kebabCase=Vs,Pr.last=Qi,Pr.lastIndexOf=function(t,r,n){var o=null==t?0:t.length;if(!o)return-1;var i=o;return n!==e&&(i=(i=ps(n))<0?br(o+i,0):vr(i,o-1)),r==r?function(e,t,r){for(var n=r+1;n--;)if(e[n]===t)return n;return n}(t,r,i):Pt(t,Ht,i,!0)},Pr.lowerCase=Ys,Pr.lowerFirst=Us,Pr.lt=ds,Pr.lte=us,Pr.max=function(t){return t&&t.length?gn(t,nl,kn):e},Pr.maxBy=function(t,r){return t&&t.length?gn(t,ci(r,2),kn):e},Pr.mean=function(e){return Wt(e,nl)},Pr.meanBy=function(e,t){return Wt(e,ci(t,2))},Pr.min=function(t){return t&&t.length?gn(t,nl,zn):e},Pr.minBy=function(t,r){return t&&t.length?gn(t,ci(r,2),zn):e},Pr.stubArray=gl,Pr.stubFalse=ml,Pr.stubObject=function(){return{}},Pr.stubString=function(){return""},Pr.stubTrue=function(){return!0},Pr.multiply=$l,Pr.nth=function(t,r){return t&&t.length?Wn(t,ps(r)):e},Pr.noConflict=function(){return ft._===this&&(ft._=Le),this},Pr.noop=ll,Pr.now=ka,Pr.pad=function(e,t,r){e=vs(e);var n=(t=ps(t))?dr(e):0;if(!t||n>=t)return e;var o=(t-n)/2;return Yo(mt(o),r)+e+Yo(pt(o),r)},Pr.padEnd=function(e,t,r){e=vs(e);var n=(t=ps(t))?dr(e):0;return t&&n<t?e+Yo(t-n,r):e},Pr.padStart=function(e,t,r){e=vs(e);var n=(t=ps(t))?dr(e):0;return t&&n<t?Yo(t-n,r)+e:e},Pr.parseInt=function(e,t,r){return r||null==t?t=0:t&&(t=+t),xr(vs(e).replace(re,""),t||0)},Pr.random=function(t,r,n){if(n&&"boolean"!=typeof n&&xi(t,r,n)&&(r=n=e),n===e&&("boolean"==typeof r?(n=r,r=e):"boolean"==typeof t&&(n=t,t=e)),t===e&&r===e?(t=0,r=1):(t=hs(t),r===e?(r=t,t=0):r=hs(r)),t>r){var o=t;t=r,r=o}if(n||t%1||r%1){var i=wr();return vr(t+i*(r-t+lt("1e-"+((i+"").length-1))),r)}return qn(t,r)},Pr.reduce=function(e,t,r){var n=Va(e)?At:Ut,o=arguments.length<3;return n(e,ci(t,4),r,o,fn)},Pr.reduceRight=function(e,t,r){var n=Va(e)?jt:Ut,o=arguments.length<3;return n(e,ci(t,4),r,o,hn)},Pr.repeat=function(t,r,n){return r=(n?xi(t,r,n):r===e)?1:ps(r),Gn(vs(t),r)},Pr.replace=function(){var e=arguments,t=vs(e[0]);return e.length<3?t:t.replace(e[1],e[2])},Pr.result=function(t,r,n){var o=-1,i=(r=xo(r,t)).length;for(i||(i=1,t=e);++o<i;){var a=null==t?e:t[Ri(r[o])];a===e&&(o=i,a=n),t=Za(a)?a.call(t):a}return t},Pr.round=Cl,Pr.runInContext=ne,Pr.sample=function(e){return(Va(e)?Qr:Zn)(e)},Pr.size=function(e){if(null==e)return 0;if(Ua(e))return ss(e)?dr(e):e.length;var t=gi(e);return t==w||t==k?e.size:Bn(e).length},Pr.snakeCase=Ks,Pr.some=function(t,r,n){var o=Va(t)?Bt:oo;return n&&xi(t,r,n)&&(r=e),o(t,ci(r,3))},Pr.sortedIndex=function(e,t){return io(e,t)},Pr.sortedIndexBy=function(e,t,r){return ao(e,t,ci(r,2))},Pr.sortedIndexOf=function(e,t){var r=null==e?0:e.length;if(r){var n=io(e,t);if(n<r&&La(e[n],t))return n}return-1},Pr.sortedLastIndex=function(e,t){return io(e,t,!0)},Pr.sortedLastIndexBy=function(e,t,r){return ao(e,t,ci(r,2),!0)},Pr.sortedLastIndexOf=function(e,t){if(null!=e&&e.length){var r=io(e,t,!0)-1;if(La(e[r],t))return r}return-1},Pr.startCase=qs,Pr.startsWith=function(e,t,r){return e=vs(e),r=null==r?0:sn(ps(r),0,e.length),t=co(t),e.slice(r,r+t.length)==t},Pr.subtract=Sl,Pr.sum=function(e){return e&&e.length?Kt(e,nl):0},Pr.sumBy=function(e,t){return e&&e.length?Kt(e,ci(t,2)):0},Pr.template=function(t,r,n){var o=Pr.templateSettings;n&&xi(t,r,n)&&(r=e),t=vs(t),r=ws({},r,o,Jo);var i,a,s=ws({},r.imports,o.imports,Jo),l=Ts(s),c=Zt(s,l),d=0,u=r.interpolate||ve,f="__p += '",h=Ee((r.escape||ve).source+"|"+u.source+"|"+(u===Q?de:ve).source+"|"+(r.evaluate||ve).source+"|$","g"),p="//# sourceURL="+(je.call(r,"sourceURL")?(r.sourceURL+"").replace(/\s/g," "):"lodash.templateSources["+ ++ot+"]")+"\n";t.replace(h,(function(e,r,n,o,s,l){return n||(n=o),f+=t.slice(d,l).replace(ye,nr),r&&(i=!0,f+="' +\n__e("+r+") +\n'"),s&&(a=!0,f+="';\n"+s+";\n__p += '"),n&&(f+="' +\n((__t = ("+n+")) == null ? '' : __t) +\n'"),d=l+e.length,e})),f+="';\n";var g=je.call(r,"variable")&&r.variable;if(g){if(le.test(g))throw new Ce("Invalid `variable` option passed into `_.template`")}else f="with (obj) {\n"+f+"\n}\n";f=(a?f.replace(N,""):f).replace(H,"$1").replace(W,"$1;"),f="function("+(g||"obj")+") {\n"+(g?"":"obj || (obj = {});\n")+"var __t, __p = ''"+(i?", __e = _.escape":"")+(a?", __j = Array.prototype.join;\nfunction print() { __p += __j.call(arguments, '') }\n":";\n")+f+"return __p\n}";var m=Xs((function(){return Se(l,p+"return "+f).apply(e,c)}));if(m.source=f,Qa(m))throw m;return m},Pr.times=function(e,t){if((e=ps(e))<1||e>d)return[];var r=f,n=vr(e,f);t=ci(t),e-=f;for(var o=qt(n,t);++r<e;)t(r);return o},Pr.toFinite=hs,Pr.toInteger=ps,Pr.toLength=gs,Pr.toLower=function(e){return vs(e).toLowerCase()},Pr.toNumber=ms,Pr.toSafeInteger=function(e){return e?sn(ps(e),-9007199254740991,d):0===e?e:0},Pr.toString=vs,Pr.toUpper=function(e){return vs(e).toUpperCase()},Pr.trim=function(t,r,n){if((t=vs(t))&&(n||r===e))return Gt(t);if(!t||!(r=co(r)))return t;var o=ur(t),i=ur(r);return $o(o,Jt(o,i),er(o,i)+1).join("")},Pr.trimEnd=function(t,r,n){if((t=vs(t))&&(n||r===e))return t.slice(0,fr(t)+1);if(!t||!(r=co(r)))return t;var o=ur(t);return $o(o,0,er(o,ur(r))+1).join("")},Pr.trimStart=function(t,r,n){if((t=vs(t))&&(n||r===e))return t.replace(re,"");if(!t||!(r=co(r)))return t;var o=ur(t);return $o(o,Jt(o,ur(r))).join("")},Pr.truncate=function(t,r){var n=30,o="...";if(es(r)){var i="separator"in r?r.separator:i;n="length"in r?ps(r.length):n,o="omission"in r?co(r.omission):o}var a=(t=vs(t)).length;if(or(t)){var s=ur(t);a=s.length}if(n>=a)return t;var l=n-dr(o);if(l<1)return o;var c=s?$o(s,0,l).join(""):t.slice(0,l);if(i===e)return c+o;if(s&&(l+=c.length-l),is(i)){if(t.slice(l).search(i)){var d,u=c;for(i.global||(i=Ee(i.source,vs(ue.exec(i))+"g")),i.lastIndex=0;d=i.exec(u);)var f=d.index;c=c.slice(0,f===e?l:f)}}else if(t.indexOf(co(i),l)!=l){var h=c.lastIndexOf(i);h>-1&&(c=c.slice(0,h))}return c+o},Pr.unescape=function(e){return(e=vs(e))&&U.test(e)?e.replace(V,hr):e},Pr.uniqueId=function(e){var t=++Be;return vs(e)+t},Pr.upperCase=Gs,Pr.upperFirst=Qs,Pr.each=va,Pr.eachRight=ya,Pr.first=Ui,sl(Pr,(bl={},xn(Pr,(function(e,t){je.call(Pr.prototype,t)||(bl[t]=e)})),bl),{chain:!1}),Pr.VERSION="4.17.21",kt(["bind","bindKey","curry","curryRight","partial","partialRight"],(function(e){Pr[e].placeholder=Pr})),kt(["drop","take"],(function(t,r){Wr.prototype[t]=function(n){n=n===e?1:br(ps(n),0);var o=this.__filtered__&&!r?new Wr(this):this.clone();return o.__filtered__?o.__takeCount__=vr(n,o.__takeCount__):o.__views__.push({size:vr(n,f),type:t+(o.__dir__<0?"Right":"")}),o},Wr.prototype[t+"Right"]=function(e){return this.reverse()[t](e).reverse()}})),kt(["filter","map","takeWhile"],(function(e,t){var r=t+1,n=1==r||3==r;Wr.prototype[e]=function(e){var t=this.clone();return t.__iteratees__.push({iteratee:ci(e,3),type:r}),t.__filtered__=t.__filtered__||n,t}})),kt(["head","last"],(function(e,t){var r="take"+(t?"Right":"");Wr.prototype[e]=function(){return this[r](1).value()[0]}})),kt(["initial","tail"],(function(e,t){var r="drop"+(t?"":"Right");Wr.prototype[e]=function(){return this.__filtered__?new Wr(this):this[r](1)}})),Wr.prototype.compact=function(){return this.filter(nl)},Wr.prototype.find=function(e){return this.filter(e).head()},Wr.prototype.findLast=function(e){return this.reverse().find(e)},Wr.prototype.invokeMap=Qn((function(e,t){return"function"==typeof e?new Wr(this):this.map((function(r){return Fn(r,e,t)}))})),Wr.prototype.reject=function(e){return this.filter(ja(ci(e)))},Wr.prototype.slice=function(t,r){t=ps(t);var n=this;return n.__filtered__&&(t>0||r<0)?new Wr(n):(t<0?n=n.takeRight(-t):t&&(n=n.drop(t)),r!==e&&(n=(r=ps(r))<0?n.dropRight(-r):n.take(r-t)),n)},Wr.prototype.takeRightWhile=function(e){return this.reverse().takeWhile(e).reverse()},Wr.prototype.toArray=function(){return this.take(f)},xn(Wr.prototype,(function(t,r){var n=/^(?:filter|find|map|reject)|While$/.test(r),o=/^(?:head|last)$/.test(r),i=Pr[o?"take"+("last"==r?"Right":""):r],a=o||/^find/.test(r);i&&(Pr.prototype[r]=function(){var r=this.__wrapped__,s=o?[1]:arguments,l=r instanceof Wr,c=s[0],d=l||Va(r),u=function(e){var t=i.apply(Pr,Mt([e],s));return o&&f?t[0]:t};d&&n&&"function"==typeof c&&1!=c.length&&(l=d=!1);var f=this.__chain__,h=!!this.__actions__.length,p=a&&!f,g=l&&!h;if(!a&&d){r=g?r:new Wr(this);var m=t.apply(r,s);return m.__actions__.push({func:ha,args:[u],thisArg:e}),new Hr(m,f)}return p&&g?t.apply(this,s):(m=this.thru(u),p?o?m.value()[0]:m.value():m)})})),kt(["pop","push","shift","sort","splice","unshift"],(function(e){var t=Fe[e],r=/^(?:push|sort|unshift)$/.test(e)?"tap":"thru",n=/^(?:pop|shift)$/.test(e);Pr.prototype[e]=function(){var e=arguments;if(n&&!this.__chain__){var o=this.value();return t.apply(Va(o)?o:[],e)}return this[r]((function(r){return t.apply(Va(r)?r:[],e)}))}})),xn(Wr.prototype,(function(e,t){var r=Pr[t];if(r){var n=r.name+"";je.call(Fr,n)||(Fr[n]=[]),Fr[n].push({name:t,func:r})}})),Fr[No(e,2).name]=[{name:"wrapper",func:e}],Wr.prototype.clone=function(){var e=new Wr(this.__wrapped__);return e.__actions__=Fo(this.__actions__),e.__dir__=this.__dir__,e.__filtered__=this.__filtered__,e.__iteratees__=Fo(this.__iteratees__),e.__takeCount__=this.__takeCount__,e.__views__=Fo(this.__views__),e},Wr.prototype.reverse=function(){if(this.__filtered__){var e=new Wr(this);e.__dir__=-1,e.__filtered__=!0}else(e=this.clone()).__dir__*=-1;return e},Wr.prototype.value=function(){var e=this.__wrapped__.value(),t=this.__dir__,r=Va(e),n=t<0,o=r?e.length:0,i=function(e,t,r){for(var n=-1,o=r.length;++n<o;){var i=r[n],a=i.size;switch(i.type){case"drop":e+=a;break;case"dropRight":t-=a;break;case"take":t=vr(t,e+a);break;case"takeRight":e=br(e,t-a)}}return{start:e,end:t}}(0,o,this.__views__),a=i.start,s=i.end,l=s-a,c=n?s:a-1,d=this.__iteratees__,u=d.length,f=0,h=vr(l,this.__takeCount__);if(!r||!n&&o==l&&h==l)return go(e,this.__actions__);var p=[];e:for(;l--&&f<h;){for(var g=-1,m=e[c+=t];++g<u;){var b=d[g],v=b.iteratee,y=b.type,x=v(m);if(2==y)m=x;else if(!x){if(1==y)continue e;break e}}p[f++]=m}return p},Pr.prototype.at=pa,Pr.prototype.chain=function(){return fa(this)},Pr.prototype.commit=function(){return new Hr(this.value(),this.__chain__)},Pr.prototype.next=function(){this.__values__===e&&(this.__values__=fs(this.value()));var t=this.__index__>=this.__values__.length;return{done:t,value:t?e:this.__values__[this.__index__++]}},Pr.prototype.plant=function(t){for(var r,n=this;n instanceof Nr;){var o=Pi(n);o.__index__=0,o.__values__=e,r?i.__wrapped__=o:r=o;var i=o;n=n.__wrapped__}return i.__wrapped__=t,r},Pr.prototype.reverse=function(){var t=this.__wrapped__;if(t instanceof Wr){var r=t;return this.__actions__.length&&(r=new Wr(this)),(r=r.reverse()).__actions__.push({func:ha,args:[ea],thisArg:e}),new Hr(r,this.__chain__)}return this.thru(ea)},Pr.prototype.toJSON=Pr.prototype.valueOf=Pr.prototype.value=function(){return go(this.__wrapped__,this.__actions__)},Pr.prototype.first=Pr.prototype.head,Je&&(Pr.prototype[Je]=function(){return this}),Pr}();pt?((pt.exports=pr)._=pr,ht._=pr):ft._=pr}.call(je);var oC=nC.exports;const iC=o.forwardRef(((n,o)=>{var{value:i,readOnly:a,"data-testid":s,maskRange:l,unmaskRange:d,maskRegex:u,maskTransformer:f,iconMask:h=t(be,{}),iconUnmask:p=t(me,{}),iconActiveColor:m,iconInactiveColor:b,maskChar:v="•",error:y,disableMask:x,transformInput:w,loadState:$,onMask:C,onUnmask:S,onChange:D,onFocus:k,onBlur:E,onTryAgain:_}=n,O=lt(n,["value","readOnly","data-testid","maskRange","unmaskRange","maskRegex","maskTransformer","iconMask","iconUnmask","iconActiveColor","iconInactiveColor","maskChar","error","disableMask","transformInput","loadState","onMask","onUnmask","onChange","onFocus","onBlur","onTryAgain"]);const F=a&&oC.isEmpty(i),[T,I]=g(!x),[M,A]=g(i||"");c((()=>{A(i||"")}),[i]);const j=e=>{L(!1),k&&k(e)},B=e=>{L(!0),E&&E(e)},R=e=>{let t=e.target.value;switch(w){case"uppercase":t=t.toUpperCase();break;case"lowercase":t=t.toLowerCase()}A(t),e.target.value=t,D&&D(e)},z=()=>{a&&_&&_()},P=()=>{L(!T)},L=e=>{I(e),e?C&&C():S&&S()},N=()=>!(null==M?void 0:M.toString().length)||x,H=()=>{if(F)return t(r,{});const e=N();return t(U$,{"data-testid":"icon-"+(T?"masked":"unmasked"),onClick:e?void 0:P,$isDisabled:e,$inactiveColor:b,$activeColor:m,children:T?p:h})};return t("div",{"aria-busy":"loading"===$,"aria-live":"polite",children:(()=>{if(a)switch($){case"fail":return e(eC,{onClick:z,"data-testid":"try-again-button",children:[e(Z$,{children:[t(X$,{}),t(J$,{children:"Error"})]}),t(Q$,{children:"Try again?"})]});case"loading":return e(K$,{children:[t(G$,{}),t(q$,{children:"Retrieving..."})]})}return t(Y$,Object.assign({ref:o,"data-testid":`${s||"masked-input"}${T?"-masked":"-unmasked"}`,addon:{type:"custom",attributes:{children:H()},position:"right"},onFocus:a?void 0:j,onBlur:a?void 0:B,onClick:a?P:void 0,onChange:R,value:F?"-":T&&!x?pd.maskValue(M,{maskChar:v,maskRange:l,unmaskRange:d,maskRegex:u,maskTransformer:f}):M,readOnly:a,error:y,$isDisabled:N()},O))})()})})),aC=o.forwardRef(((e,r)=>{const{label:n,errorMessage:o,id:i="form-field-masked-input","data-error-testid":a,"data-testid":s,layoutType:l,mobileCols:c,tabletCols:d,desktopCols:u}=e,f=lt(e,["label","errorMessage","id","data-error-testid","data-testid","layoutType","mobileCols","tabletCols","desktopCols"]);return t(hu,{id:i,label:n,errorMessage:o,disabled:f.disabled,"data-error-testid":a,layoutType:l,mobileCols:c,tabletCols:d,desktopCols:u,children:t(iC,Object.assign({ref:r,id:`${i}-base`,"data-testid":s||i,error:!!o},f))})})),sC=E.div`
    font-weight: ${e=>e.$bold?Ui.Spec["weight-semibold"]:Ui.Spec["weight-regular"]};

    ${e=>e.$disabled?_`
                color: ${Yi["text-disabled"]};
            `:e.$selected?_`
                color: ${Yi["text-selected"]};
            `:_`
                color: ${Yi.text};
            `}
    width: 100%;

    ${e=>"end"===e.$truncateType&&la(e.$maxLines||2)}
    overflow-wrap: break-word;
`,lC=E.div`
    color: ${Yi["text-subtlest"]};
    width: 100%;

    ${e=>"end"===e.$truncateType&&la(e.$maxLines||2)}
    overflow-wrap: break-word;

    ${e=>"next-line"===e.$labelDisplayType?_`
                    ${Ui["body-md-semibold"]}
                `:_`
                    ${Ui["body-baseline-regular"]}
                `}
`,cC=E.span`
    font-weight: ${Ui.Spec["weight-semibold"]};
`,dC=E.div`
    text-align: left;
    width: 100%;
    overflow: hidden;
    overflow-wrap: break-word;

    ${e=>"small"===e.$variant?Ui["body-md-regular"]:Ui["body-baseline-regular"]}

    ${e=>{switch(e.$labelDisplayType){case"next-line":return _`
                    display: flex;
                    flex-direction: column;
                `;case"inline":return _`
                    ${sC} {
                        display: inline;
                    }

                    ${lC} {
                        display: inline;
                        margin-left: 0.5rem;
                    }
                `}}}
`,uC=E.div`
    display: inline-block;
    width: ${e=>1===e.$maxLines?50:100}%;
    height: 1lh;
    word-break: break-all;
    overflow: hidden;
`,fC=E.div`
    display: inline-block;
    width: ${e=>1===e.$maxLines?50:100}%;
    height: 1lh;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    direction: rtl;
    text-align: right;
`,hC=({bold:n,displayType:o="inline",label:i,searchTerm:s,maxLines:l=2,selected:c,disabled:u,sublabel:f,truncationType:h="middle",variant:p="default"})=>{const g=O(),m="small"===p?Ui.Spec["body-size-md"]({theme:g}):Ui.Spec["body-size-baseline"]({theme:g}),b=Ui.Spec["font-family"]({theme:g}),{ref:v,width:y}=Lc(),x=d((e=>{if("inline"!==o||!y)return!1;return pd.getTextWidth(e,`${m} '${b}'`)>y*l-50}),[y,o,m,b,l]),w=a((()=>x(i)),[x,i]),$=a((()=>f&&x(f)),[x,f]),C=n=>{if(!s)return n;const o=s.toLowerCase().trim(),a=n.toLowerCase().indexOf(o),l=a+s.length;return-1===a?n:e(r,{children:[i.slice(0,a),t(cC,{$variant:p,children:i.slice(a,l)}),i.slice(l)]})},S=n=>e(r,{children:[t(uC,{$maxLines:l,"aria-hidden":!0,children:C(n)}),t(fC,{$maxLines:l,"aria-hidden":!0,children:C(n)})]});return e(dC,{ref:v,$labelDisplayType:w||$?"next-line":o,$variant:p,children:[t(sC,{"aria-label":i,$bold:n,$maxLines:l,$selected:c,$disabled:u,$truncateType:h,children:"middle"===h&&w?S(i):C(i)}),f&&t(lC,{"aria-label":f,$maxLines:l,$truncateType:h,$labelDisplayType:o,children:"middle"===h&&$?S(f):f})]})};function pC(e){return()=>e}function gC(e){e()}function mC(e,t){return r=>e(t(r))}function bC(e,t){return()=>e(t)}function vC(e,t){return r=>e(t,r)}function yC(e){return void 0!==e}function xC(){}function wC(e,t){return t(e),e}function $C(e,t){return t(e)}function CC(...e){return e}function SC(e,t){return e(1,t)}function DC(e,t){e(0,t)}function kC(e){e(2)}function EC(e){return e(4)}function _C(e,t){return SC(e,vC(t,0))}function OC(e,t){const r=e(1,(e=>{r(),t(e)}));return r}function FC(e){let t,r;return n=>o=>{t=o,r&&clearTimeout(r),r=setTimeout((()=>{n(t)}),e)}}function TC(e,t){return e===t}function IC(e=TC){let t;return r=>n=>{e(t,n)||(t=n,r(n))}}function MC(e){return t=>r=>{e(r)&&t(r)}}function AC(e){return t=>mC(t,e)}function jC(e){return t=>()=>{t(e)}}function BC(e,...t){const r=function(...e){return t=>e.reduceRight($C,t)}(...t);return(t,n)=>{switch(t){case 2:return void kC(e);case 1:return SC(e,r(n))}}}function RC(e,t){return r=>n=>{r(t=e(t,n))}}function zC(e){return t=>r=>{e>0?e--:t(r)}}function PC(e){let t,r=null;return n=>o=>{r=o,!t&&(t=setTimeout((()=>{t=void 0,n(r)}),e))}}function LC(...e){const t=new Array(e.length);let r=0,n=null;const o=Math.pow(2,e.length)-1;return e.forEach(((e,i)=>{const a=Math.pow(2,i);SC(e,(e=>{const s=r;r|=a,t[i]=e,s!==o&&r===o&&n&&(n(),n=null)}))})),e=>i=>{const a=()=>{e([i].concat(t))};r===o?a():n=a}}function NC(e){let t=e;const r=WC();return(e,n)=>{switch(e){case 0:t=n;break;case 1:n(t);break;case 4:return t}return r(e,n)}}function HC(e,t){return wC(NC(t),(t=>_C(e,t)))}function WC(){const e=[];return(t,r)=>{switch(t){case 0:return void e.slice().forEach((e=>{e(r)}));case 2:return void e.splice(0,e.length);case 1:return e.push(r),()=>{const t=e.indexOf(r);t>-1&&e.splice(t,1)}}}}function VC(e){return wC(WC(),(t=>_C(e,t)))}function YC(e,t=[],{singleton:r}={singleton:!0}){return{constructor:e,dependencies:t,id:UC(),singleton:r}}const UC=()=>Symbol();function KC(...e){const t=WC(),r=new Array(e.length);let n=0;const o=Math.pow(2,e.length)-1;return e.forEach(((e,i)=>{const a=Math.pow(2,i);SC(e,(e=>{r[i]=e,n|=a,n===o&&DC(t,r)}))})),function(e,i){switch(e){case 2:return void kC(t);case 1:return n===o&&i(r),SC(t,i)}}}function qC(e,t=TC){return BC(e,IC(t))}function GC(...e){return function(t,r){switch(t){case 2:return;case 1:return function(...e){return()=>{e.map(gC)}}(...e.map((e=>SC(e,r))))}}}var QC=(e=>(e[e.DEBUG=0]="DEBUG",e[e.INFO=1]="INFO",e[e.WARN=2]="WARN",e[e.ERROR=3]="ERROR",e))(QC||{});const ZC={0:"debug",3:"error",1:"log",2:"warn"},XC=YC((()=>{const e=NC(3);return{log:NC(((t,r,n=1)=>{var o;n>=(null!=(o=(typeof globalThis>"u"?window:globalThis).VIRTUOSO_LOG_LEVEL)?o:EC(e))&&console[ZC[n]]("%creact-virtuoso: %c%s %o","color: #0253b3; font-weight: bold","color: initial",t,r)})),logLevel:e}}),[],{singleton:!0});function JC(e,t,r){return eS(e,t,r).callbackRef}function eS(e,t,r){const n=o.useRef(null);let i=e=>{};if(typeof ResizeObserver<"u"){const a=o.useMemo((()=>new ResizeObserver((t=>{const n=()=>{const r=t[0].target;null!==r.offsetParent&&e(r)};r?n():requestAnimationFrame(n)}))),[e]);i=e=>{e&&t?(a.observe(e),n.current=e):(n.current&&a.unobserve(n.current),n.current=null)}}return{callbackRef:i,ref:n}}function tS(e,t,r,n,i,a,s,l,c){const d=o.useCallback((r=>{const o=function(e,t,r,n){const o=e.length;if(0===o)return null;const i=[];for(let a=0;a<o;a++){const o=e.item(a);if(void 0===o.dataset.index)continue;const s=parseInt(o.dataset.index),l=parseFloat(o.dataset.knownSize),c=t(o,r);if(0===c&&n("Zero-sized element, this should not happen",{child:o},QC.ERROR),c===l)continue;const d=i[i.length-1];0===i.length||d.size!==c||d.endIndex!==s-1?i.push({endIndex:s,size:c,startIndex:s}):i[i.length-1].endIndex++}return i}(r.children,t,l?"offsetWidth":"offsetHeight",i);let c=r.parentElement;for(;!c.dataset.virtuosoScroller;)c=c.parentElement;const d="window"===c.lastElementChild.dataset.viewportType,u=s?l?s.scrollLeft:s.scrollTop:d?l?window.pageXOffset||document.documentElement.scrollLeft:window.pageYOffset||document.documentElement.scrollTop:l?c.scrollLeft:c.scrollTop,f=s?l?s.scrollWidth:s.scrollHeight:d?l?document.documentElement.scrollWidth:document.documentElement.scrollHeight:l?c.scrollWidth:c.scrollHeight,h=s?l?s.offsetWidth:s.offsetHeight:d?l?window.innerWidth:window.innerHeight:l?c.offsetWidth:c.offsetHeight;n({scrollHeight:f,scrollTop:Math.max(u,0),viewportHeight:h}),null==a||a(l?rS("column-gap",getComputedStyle(r).columnGap,i):rS("row-gap",getComputedStyle(r).rowGap,i)),null!==o&&e(o)}),[e,t,i,a,s,n]);return eS(d,r,c)}function rS(e,t,r){return"normal"!==t&&!(null!=t&&t.endsWith("px"))&&r(`${e} was not resolved to pixel value correctly`,t,QC.WARN),"normal"===t?0:parseInt(null!=t?t:"0",10)}function nS(e,t,r){const n=o.useRef(null),i=o.useCallback((r=>{if(null==r||!r.offsetParent)return;const o=r.getBoundingClientRect(),i=o.width;let a,s;if(t){const e=t.getBoundingClientRect(),r=o.top-e.top;s=e.height-Math.max(0,r),a=r+t.scrollTop}else s=window.innerHeight-Math.max(0,o.top),a=o.top+window.pageYOffset;n.current={offsetTop:a,visibleHeight:s,visibleWidth:i},e(n.current)}),[e,t]),{callbackRef:a,ref:s}=eS(i,!0,r),l=o.useCallback((()=>{i(s.current)}),[i,s]);return o.useEffect((()=>{if(t){t.addEventListener("scroll",l);const e=new ResizeObserver((()=>{requestAnimationFrame(l)}));return e.observe(t),()=>{t.removeEventListener("scroll",l),e.unobserve(t)}}return window.addEventListener("scroll",l),window.addEventListener("resize",l),()=>{window.removeEventListener("scroll",l),window.removeEventListener("resize",l)}}),[l,t]),a}const oS=YC((()=>{const e=WC(),t=WC(),r=NC(0),n=WC(),o=NC(0),i=WC(),a=WC(),s=NC(0),l=NC(0),c=NC(0),d=NC(0),u=WC(),f=WC(),h=NC(!1),p=NC(!1),g=NC(!1);return _C(BC(e,AC((({scrollTop:e})=>e))),t),_C(BC(e,AC((({scrollHeight:e})=>e))),a),_C(t,o),{deviation:r,fixedFooterHeight:c,fixedHeaderHeight:l,footerHeight:d,headerHeight:s,horizontalDirection:p,scrollBy:f,scrollContainerState:e,scrollHeight:a,scrollingInProgress:h,scrollTo:u,scrollTop:t,skipAnimationFrameInResizeObserver:g,smoothScrollTargetReached:n,statefulScrollTop:o,viewportHeight:i}}),[],{singleton:!0}),iS={lvl:0};function aS(e,t){const r=e.length;if(0===r)return[];let{index:n,value:o}=t(e[0]);const i=[];for(let a=1;a<r;a++){const{index:r,value:s}=t(e[a]);i.push({end:r-1,start:n,value:o}),n=r,o=s}return i.push({end:1/0,start:n,value:o}),i}function sS(e){return e===iS}function lS(e,t){if(!sS(e))return t===e.k?e.v:t<e.k?lS(e.l,t):lS(e.r,t)}function cS(e,t,r="k"){if(sS(e))return[-1/0,void 0];if(Number(e[r])===t)return[e.k,e.v];if(Number(e[r])<t){const n=cS(e.r,t,r);return n[0]===-1/0?[e.k,e.v]:n}return cS(e.l,t,r)}function dS(e,t,r){return sS(e)?wS(t,r,1):t===e.k?bS(e,{k:t,v:r}):t<e.k?$S(bS(e,{l:dS(e.l,t,r)})):$S(bS(e,{r:dS(e.r,t,r)}))}function uS(){return iS}function fS(e,t,r){if(sS(e))return[];return function(e){return aS(e,(({k:e,v:t})=>({index:e,value:t})))}(gS(e,cS(e,t)[0],r))}function hS(e,t){if(sS(e))return iS;const{k:r,l:n,r:o}=e;if(t===r){if(sS(n))return o;if(sS(o))return n;{const[t,r]=xS(n);return mS(bS(e,{k:t,l:vS(n),v:r}))}}return mS(bS(e,t<r?{l:hS(n,t)}:{r:hS(o,t)}))}function pS(e){return sS(e)?[]:[...pS(e.l),{k:e.k,v:e.v},...pS(e.r)]}function gS(e,t,r){if(sS(e))return[];const{k:n,l:o,r:i,v:a}=e;let s=[];return n>t&&(s=s.concat(gS(o,t,r))),n>=t&&n<=r&&s.push({k:n,v:a}),n<=r&&(s=s.concat(gS(i,t,r))),s}function mS(e){const{l:t,lvl:r,r:n}=e;if(n.lvl>=r-1&&t.lvl>=r-1)return e;if(r>n.lvl+1){if(yS(t))return CS(bS(e,{lvl:r-1}));if(!sS(t)&&!sS(t.r))return bS(t.r,{l:bS(t,{r:t.r.l}),lvl:r,r:bS(e,{l:t.r.r,lvl:r-1})});throw new Error("Unexpected empty nodes")}if(yS(e))return SS(bS(e,{lvl:r-1}));if(sS(n)||sS(n.l))throw new Error("Unexpected empty nodes");{const t=n.l,o=yS(t)?n.lvl-1:n.lvl;return bS(t,{l:bS(e,{lvl:r-1,r:t.l}),lvl:t.lvl+1,r:SS(bS(n,{l:t.r,lvl:o}))})}}function bS(e,t){return wS(void 0!==t.k?t.k:e.k,void 0!==t.v?t.v:e.v,void 0!==t.lvl?t.lvl:e.lvl,void 0!==t.l?t.l:e.l,void 0!==t.r?t.r:e.r)}function vS(e){return sS(e.r)?e.l:mS(bS(e,{r:vS(e.r)}))}function yS(e){return sS(e)||e.lvl>e.r.lvl}function xS(e){return sS(e.r)?[e.k,e.v]:xS(e.r)}function wS(e,t,r,n=iS,o=iS){return{k:e,l:n,lvl:r,r:o,v:t}}function $S(e){return SS(CS(e))}function CS(e){const{l:t}=e;return sS(t)||t.lvl!==e.lvl?e:bS(t,{r:bS(e,{l:t.r})})}function SS(e){const{lvl:t,r:r}=e;return sS(r)||sS(r.r)||r.lvl!==t||r.r.lvl!==t?e:bS(r,{l:bS(e,{r:r.l}),lvl:t+1})}function DS(e,t){return!(!e||e.startIndex!==t.startIndex||e.endIndex!==t.endIndex)}function kS(e,t){return!(!e||e[0]!==t[0]||e[1]!==t[1])}const ES=YC((()=>({recalcInProgress:NC(!1)})),[],{singleton:!0});function _S(e,t,r){return e[OS(e,t,r)]}function OS(e,t,r,n=0){let o=e.length-1;for(;n<=o;){const i=Math.floor((n+o)/2),a=r(e[i],t);if(0===a)return i;if(-1===a){if(o-n<2)return i-1;o=i-1}else{if(o===n)return i;n=i+1}}throw new Error(`Failed binary finding record in array - ${e.join(",")}, searched for ${t}`)}function FS(e,t){return Math.round(e.getBoundingClientRect()[t])}function TS(e){return!sS(e.groupOffsetTree)}function IS({index:e},t){return t===e?0:t<e?-1:1}function MS({offset:e},t){return t===e?0:t<e?-1:1}function AS(e,t,r){if(0===t.length)return 0;const{index:n,offset:o,size:i}=_S(t,e,IS),a=e-n,s=i*a+(a-1)*r+o;return s>0?s+r:s}function jS(e,t){if(!TS(t))return e;let r=0;for(;t.groupIndices[r]<=e+r;)r++;return e+r}function BS(e,t,r){if(function(e){return typeof e.groupIndex<"u"}(e))return t.groupIndices[e.groupIndex]+1;{let n=jS("LAST"===e.index?r:e.index,t);return n=Math.max(0,n,Math.min(r,n)),n}}function RS(e,t,r,n=0){return n>0&&(t=Math.max(t,_S(e,n,IS).offset)),aS(function(e,t,r,n){const o=OS(e,t,n),i=OS(e,r,n,o);return e.slice(o,i+1)}(e,t,r,MS),NS)}function zS(e,[t,r,n,o]){t.length>0&&n("received item sizes",t,QC.DEBUG);const i=e.sizeTree;let a=i,s=0;if(r.length>0&&sS(i)&&2===t.length){const e=t[0].size,n=t[1].size;a=r.reduce(((t,r)=>dS(dS(t,r,e),r+1,n)),a)}else[a,s]=function(e,t){let r=sS(e)?0:1/0;for(const n of t){const{endIndex:t,size:o,startIndex:i}=n;if(r=Math.min(r,i),sS(e)){e=dS(e,0,o);continue}const a=fS(e,i-1,t+1);if(a.some(HS(n)))continue;let s=!1,l=!1;for(const{end:r,start:n,value:i}of a)s?(t>=n||o===i)&&(e=hS(e,n)):(l=i!==o,s=!0),r>t&&t>=n&&i!==o&&(e=dS(e,t+1,i));l&&(e=dS(e,i,o))}return[e,r]}(a,t);if(a===i)return e;const{lastIndex:l,lastOffset:c,lastSize:d,offsetTree:u}=LS(e.offsetTree,s,a,o);return{groupIndices:r,groupOffsetTree:r.reduce(((e,t)=>dS(e,t,AS(t,u,o))),uS()),lastIndex:l,lastOffset:c,lastSize:d,offsetTree:u,sizeTree:a}}function PS(e,t){let r=0,n=0;for(;r<e;)r+=t[n+1]-t[n]-1,n++;return n-(r===e?0:1)}function LS(e,t,r,n){let o=e,i=0,a=0,s=0,l=0;if(0!==t){l=OS(o,t-1,IS),s=o[l].offset;const e=cS(r,t-1);i=e[0],a=e[1],o.length&&o[l].size===cS(r,t)[1]&&(l-=1),o=o.slice(0,l+1)}else o=[];for(const{start:e,value:l}of fS(r,t,1/0)){const t=e-i,r=t*a+s+t*n;o.push({index:e,offset:r,size:l}),i=e,s=r,a=l}return{lastIndex:i,lastOffset:s,lastSize:a,offsetTree:o}}function NS(e){return{index:e.index,value:e}}function HS(e){const{endIndex:t,size:r,startIndex:n}=e;return e=>e.start===n&&(e.end===t||e.end===1/0)&&e.value===r}const WS={offsetHeight:"height",offsetWidth:"width"},VS=YC((([{log:e},{recalcInProgress:t}])=>{const r=WC(),n=WC(),o=HC(n,0),i=WC(),a=WC(),s=NC(0),l=NC([]),c=NC(void 0),d=NC(void 0),u=NC(((e,t)=>FS(e,WS[t]))),f=NC(void 0),h=NC(0),p={groupIndices:[],groupOffsetTree:uS(),lastIndex:0,lastOffset:0,lastSize:0,offsetTree:[],sizeTree:uS()},g=HC(BC(r,LC(l,e,h),RC(zS,p),IC()),p),m=HC(BC(l,IC(),RC(((e,t)=>({current:t,prev:e.current})),{current:[],prev:[]}),AC((({prev:e})=>e))),[]);_C(BC(l,MC((e=>e.length>0)),LC(g,h),AC((([e,t,r])=>{const n=e.reduce(((e,n,o)=>dS(e,n,AS(n,t.offsetTree,r)||o)),uS());return{...t,groupIndices:e,groupOffsetTree:n}}))),g),_C(BC(n,LC(g),MC((([e,{lastIndex:t}])=>e<t)),AC((([e,{lastIndex:t,lastSize:r}])=>[{endIndex:t,size:r,startIndex:e}]))),r),_C(c,d);const b=HC(BC(c,AC((e=>void 0===e))),!0);_C(BC(d,MC((e=>void 0!==e&&sS(EC(g).sizeTree))),AC((e=>[{endIndex:0,size:e,startIndex:0}]))),r);const v=VC(BC(r,LC(g),RC((({sizes:e},[t,r])=>({changed:r!==e,sizes:r})),{changed:!1,sizes:p}),AC((e=>e.changed))));SC(BC(s,RC(((e,t)=>({diff:e.prev-t,prev:t})),{diff:0,prev:0}),AC((e=>e.diff))),(e=>{const{groupIndices:r}=EC(g);if(e>0)DC(t,!0),DC(i,e+PS(e,r));else if(e<0){const t=EC(m);t.length>0&&(e-=PS(-e,t)),DC(a,e)}})),SC(BC(s,LC(e)),(([e,t])=>{e<0&&t("`firstItemIndex` prop should not be set to less than zero. If you don't know the total count, just use a very high value",{firstItemIndex:s},QC.ERROR)}));const y=VC(i);_C(BC(i,LC(g),AC((([e,t])=>{const r=t.groupIndices.length>0,n=[],o=t.lastSize;if(r){const r=lS(t.sizeTree,0);let i=0,a=0;for(;i<e;){const e=t.groupIndices[a],s=t.groupIndices.length===a+1?1/0:t.groupIndices[a+1]-e-1;n.push({endIndex:e,size:r,startIndex:e}),n.push({endIndex:e+1+s-1,size:o,startIndex:e+1}),a++,i+=s+1}const s=pS(t.sizeTree);return i!==e&&s.shift(),s.reduce(((t,{k:r,v:n})=>{let o=t.ranges;return 0!==t.prevSize&&(o=[...t.ranges,{endIndex:r+e-1,size:t.prevSize,startIndex:t.prevIndex}]),{prevIndex:r+e,prevSize:n,ranges:o}}),{prevIndex:e,prevSize:0,ranges:n}).ranges}return pS(t.sizeTree).reduce(((t,{k:r,v:n})=>({prevIndex:r+e,prevSize:n,ranges:[...t.ranges,{endIndex:r+e-1,size:t.prevSize,startIndex:t.prevIndex}]})),{prevIndex:0,prevSize:o,ranges:[]}).ranges}))),r);const x=VC(BC(a,LC(g,h),AC((([e,{offsetTree:t},r])=>AS(-e,t,r)))));return _C(BC(a,LC(g,h),AC((([e,t,r])=>{if(t.groupIndices.length>0){if(sS(t.sizeTree))return t;let n=uS();const o=EC(m);let i=0,a=0,s=0;for(;i<-e;){s=o[a];const e=o[a+1]-s-1;a++,i+=e+1}if(n=pS(t.sizeTree).reduce(((t,{k:r,v:n})=>dS(t,Math.max(0,r+e),n)),n),i!==-e){n=dS(n,0,lS(t.sizeTree,s));n=dS(n,1,cS(t.sizeTree,1-e)[1])}return{...t,sizeTree:n,...LS(t.offsetTree,0,n,r)}}{const n=pS(t.sizeTree).reduce(((t,{k:r,v:n})=>dS(t,Math.max(0,r+e),n)),uS());return{...t,sizeTree:n,...LS(t.offsetTree,0,n,r)}}}))),g),{beforeUnshiftWith:y,data:f,defaultItemSize:d,firstItemIndex:s,fixedItemSize:c,gap:h,groupIndices:l,itemSize:u,listRefresh:v,shiftWith:a,shiftWithOffset:x,sizeRanges:r,sizes:g,statefulTotalCount:o,totalCount:n,trackItemSizes:b,unshiftWith:i}}),CC(XC,ES),{singleton:!0});function YS(e){return e.reduce(((e,t)=>(e.groupIndices.push(e.totalCount),e.totalCount+=t+1,e)),{groupIndices:[],totalCount:0})}const US=YC((([{groupIndices:e,sizes:t,totalCount:r},{headerHeight:n,scrollTop:o}])=>{const i=WC(),a=WC(),s=VC(BC(i,AC(YS)));return _C(BC(s,AC((e=>e.totalCount))),r),_C(BC(s,AC((e=>e.groupIndices))),e),_C(BC(KC(o,t,n),MC((([e,t])=>TS(t))),AC((([e,t,r])=>cS(t.groupOffsetTree,Math.max(e-r,0),"v")[0])),IC(),AC((e=>[e]))),a),{groupCounts:i,topItemsIndexes:a}}),CC(VS,oS)),KS=YC((([{log:e}])=>{const t=NC(!1),r=VC(BC(t,MC((e=>e)),IC()));return SC(t,(t=>{t&&EC(e)("props updated",{},QC.DEBUG)})),{didMount:r,propsReady:t}}),CC(XC),{singleton:!0}),qS=typeof document<"u"&&"scrollBehavior"in document.documentElement.style;function GS(e){const t="number"==typeof e?{index:e}:e;return t.align||(t.align="start"),(!t.behavior||!qS)&&(t.behavior="auto"),t.offset||(t.offset=0),t}const QS=YC((([{gap:e,listRefresh:t,sizes:r,totalCount:n},{fixedFooterHeight:o,fixedHeaderHeight:i,footerHeight:a,headerHeight:s,scrollingInProgress:l,scrollTo:c,smoothScrollTargetReached:d,viewportHeight:u},{log:f}])=>{const h=WC(),p=WC(),g=NC(0);let m=null,b=null,v=null;function y(){m&&(m(),m=null),v&&(v(),v=null),b&&(clearTimeout(b),b=null),DC(l,!1)}return _C(BC(h,LC(r,u,n,g,s,a,f),LC(e,i,o),AC((([[e,r,n,o,i,a,s,c],u,f,g])=>{const x=GS(e),{align:w,behavior:$,offset:C}=x,S=o-1,D=BS(x,r,S);let k=AS(D,r.offsetTree,u)+a;"end"===w?(k+=f+cS(r.sizeTree,D)[1]-n+g,D===S&&(k+=s)):"center"===w?k+=(f+cS(r.sizeTree,D)[1]-n+g)/2:k-=i,C&&(k+=C);const E=t=>{y(),t?(c("retrying to scroll to",{location:e},QC.DEBUG),DC(h,e)):(DC(p,!0),c("list did not change, scroll successful",{},QC.DEBUG))};if(y(),"smooth"===$){let e=!1;v=SC(t,(t=>{e=e||t})),m=OC(d,(()=>{E(e)}))}else m=OC(BC(t,function(e){return t=>{const r=setTimeout((()=>{t(!1)}),e);return e=>{e&&(t(!0),clearTimeout(r))}}}(150)),E);return b=setTimeout((()=>{y()}),1200),DC(l,!0),c("scrolling from index to",{behavior:$,index:D,top:k},QC.DEBUG),{behavior:$,top:k}}))),c),{scrollTargetReached:p,scrollToIndex:h,topListHeight:g}}),CC(VS,oS,XC),{singleton:!0});function ZS(e,t){0==e?t():requestAnimationFrame((()=>{ZS(e-1,t)}))}function XS(e,t){const r=t-1;return"number"==typeof e?e:"LAST"===e.index?r:e.index}const JS=YC((([{defaultItemSize:e,listRefresh:t,sizes:r},{scrollTop:n},{scrollTargetReached:o,scrollToIndex:i},{didMount:a}])=>{const s=NC(!0),l=NC(0),c=NC(!0);return _C(BC(a,LC(l),MC((([e,t])=>!!t)),jC(!1)),s),_C(BC(a,LC(l),MC((([e,t])=>!!t)),jC(!1)),c),SC(BC(KC(t,a),LC(s,r,e,c),MC((([[,e],t,{sizeTree:r},n,o])=>e&&(!sS(r)||yC(n))&&!t&&!o)),LC(l)),(([,e])=>{OC(o,(()=>{DC(c,!0)})),ZS(4,(()=>{OC(n,(()=>{DC(s,!0)})),DC(i,e)}))})),{initialItemFinalLocationReached:c,initialTopMostItemIndex:l,scrolledToInitialItem:s}}),CC(VS,oS,QS,KS),{singleton:!0});function eD(e,t){return Math.abs(e-t)<1.01}const tD="up",rD="down",nD={atBottom:!1,notAtBottomBecause:"NOT_SHOWING_LAST_ITEM",state:{offsetBottom:0,scrollHeight:0,scrollTop:0,viewportHeight:0}},oD=YC((([{footerHeight:e,headerHeight:t,scrollBy:r,scrollContainerState:n,scrollTop:o,viewportHeight:i}])=>{const a=NC(!1),s=NC(!0),l=WC(),c=WC(),d=NC(4),u=NC(0),f=HC(BC(GC(BC(qC(o),zC(1),jC(!0)),BC(qC(o),zC(1),jC(!1),FC(100))),IC()),!1),h=HC(BC(GC(BC(r,jC(!0)),BC(r,jC(!1),FC(200))),IC()),!1);_C(BC(KC(qC(o),qC(u)),AC((([e,t])=>e<=t)),IC()),s),_C(BC(s,PC(50)),c);const p=VC(BC(KC(n,qC(i),qC(t),qC(e),qC(d)),RC(((e,[{scrollHeight:t,scrollTop:r},n,o,i,a])=>{const s={scrollHeight:t,scrollTop:r,viewportHeight:n};if(r+n-t>-a){let t,n;return r>e.state.scrollTop?(t="SCROLLED_DOWN",n=e.state.scrollTop-r):(t="SIZE_DECREASED",n=e.state.scrollTop-r||e.scrollTopDelta),{atBottom:!0,atBottomBecause:t,scrollTopDelta:n,state:s}}let l;return l=s.scrollHeight>e.state.scrollHeight?"SIZE_INCREASED":n<e.state.viewportHeight?"VIEWPORT_HEIGHT_DECREASING":r<e.state.scrollTop?"SCROLLING_UPWARDS":"NOT_FULLY_SCROLLED_TO_LAST_ITEM_BOTTOM",{atBottom:!1,notAtBottomBecause:l,state:s}}),nD),IC(((e,t)=>e&&e.atBottom===t.atBottom)))),g=HC(BC(n,RC(((e,{scrollHeight:t,scrollTop:r,viewportHeight:n})=>{if(eD(e.scrollHeight,t))return{changed:!1,jump:0,scrollHeight:t,scrollTop:r};{const o=t-(r+n)<1;return e.scrollTop!==r&&o?{changed:!0,jump:e.scrollTop-r,scrollHeight:t,scrollTop:r}:{changed:!0,jump:0,scrollHeight:t,scrollTop:r}}}),{changed:!1,jump:0,scrollHeight:0,scrollTop:0}),MC((e=>e.changed)),AC((e=>e.jump))),0);_C(BC(p,AC((e=>e.atBottom))),a),_C(BC(a,PC(50)),l);const m=NC(rD);_C(BC(n,AC((({scrollTop:e})=>e)),IC(),RC(((e,t)=>EC(h)?{direction:e.direction,prevScrollTop:t}:{direction:t<e.prevScrollTop?tD:rD,prevScrollTop:t}),{direction:rD,prevScrollTop:0}),AC((e=>e.direction))),m),_C(BC(n,PC(50),jC("none")),m);const b=NC(0);return _C(BC(f,MC((e=>!e)),jC(0)),b),_C(BC(o,PC(100),LC(f),MC((([e,t])=>!!t)),RC((([e,t],[r])=>[t,r]),[0,0]),AC((([e,t])=>t-e))),b),{atBottomState:p,atBottomStateChange:l,atBottomThreshold:d,atTopStateChange:c,atTopThreshold:u,isAtBottom:a,isAtTop:s,isScrolling:f,lastJumpDueToItemResize:g,scrollDirection:m,scrollVelocity:b}}),CC(oS)),iD="top",aD="bottom",sD="none";function lD(e,t,r){return"number"==typeof e?r===tD&&t===iD||r===rD&&t===aD?e:0:r===tD?t===iD?e.main:e.reverse:t===aD?e.main:e.reverse}function cD(e,t){var r;return"number"==typeof e?e:null!=(r=e[t])?r:0}const dD=YC((([{deviation:e,fixedHeaderHeight:t,headerHeight:r,scrollTop:n,viewportHeight:o}])=>{const i=WC(),a=NC(0),s=NC(0),l=NC(0),c=HC(BC(KC(qC(n),qC(o),qC(r),qC(i,kS),qC(l),qC(a),qC(t),qC(e),qC(s)),AC((([e,t,r,[n,o],i,a,s,l,c])=>{const d=e-l,u=a+s,f=Math.max(r-d,0);let h=sD;const p=cD(c,iD),g=cD(c,aD);return n-=l,o+=r+s,(n+=r+s)>e+u-p&&(h=tD),(o-=l)<e-f+t+g&&(h=rD),h!==sD?[Math.max(d-r-lD(i,iD,h)-p,0),d-f-s+t+lD(i,aD,h)+g]:null})),MC((e=>null!=e)),IC(kS)),[0,0]);return{increaseViewportBy:s,listBoundary:i,overscan:l,topListHeight:a,visibleRange:c}}),CC(oS),{singleton:!0});const uD={bottom:0,firstItemIndex:0,items:[],offsetBottom:0,offsetTop:0,top:0,topItems:[],topListHeight:0,totalCount:0};function fD(e,t,r,n,o,i){const{lastIndex:a,lastOffset:s,lastSize:l}=o;let c=0,d=0;if(e.length>0){c=e[0].offset;const t=e[e.length-1];d=t.offset+t.size}const u=r-a,f=c,h=s+u*l+(u-1)*n-d;return{bottom:d,firstItemIndex:i,items:pD(e,o,i),offsetBottom:h,offsetTop:c,top:f,topItems:pD(t,o,i),topListHeight:t.reduce(((e,t)=>t.size+e),0),totalCount:r}}function hD(e,t,r,n,o,i){let a=0;if(r.groupIndices.length>0)for(const t of r.groupIndices){if(t-a>=e)break;a++}const s=e+a,l=XS(t,s);return fD(Array.from({length:s}).map(((e,t)=>({data:i[t+l],index:t+l,offset:0,size:0}))),[],s,o,r,n)}function pD(e,t,r){if(0===e.length)return[];if(!TS(t))return e.map((e=>({...e,index:e.index+r,originalIndex:e.index})));const n=e[0].index,o=e[e.length-1].index,i=[],a=fS(t.groupOffsetTree,n,o);let s,l=0;for(const n of e){let e;(!s||s.end<n.index)&&(s=a.shift(),l=t.groupIndices.indexOf(s.start)),e=n.index===s.start?{index:l,type:"group"}:{groupIndex:l,index:n.index-(l+1)+r},i.push({...e,data:n.data,offset:n.offset,originalIndex:n.index,size:n.size})}return i}const gD=YC((([{data:e,firstItemIndex:t,gap:r,sizes:n,totalCount:o},i,{listBoundary:a,topListHeight:s,visibleRange:l},{initialTopMostItemIndex:c,scrolledToInitialItem:d},{topListHeight:u},f,{didMount:h},{recalcInProgress:p}])=>{const g=NC([]),m=NC(0),b=WC();_C(i.topItemsIndexes,g);const v=HC(BC(KC(h,p,qC(l,kS),qC(o),qC(n),qC(c),d,qC(g),qC(t),qC(r),e),MC((([e,t,,r,,,,,,,n])=>{const o=n&&n.length!==r;return e&&!t&&!o})),AC((([,,[e,t],r,n,o,i,a,s,l,c])=>{const d=n,{offsetTree:u,sizeTree:f}=d,h=EC(m);if(0===r)return{...uD,totalCount:r};if(0===e&&0===t)return 0===h?{...uD,totalCount:r}:hD(h,o,n,s,l,c||[]);if(sS(f))return h>0?null:fD(function(e,t,r){if(TS(t)){const n=jS(e,t);return[{index:cS(t.groupOffsetTree,n)[0],offset:0,size:0},{data:null==r?void 0:r[0],index:n,offset:0,size:0}]}return[{data:null==r?void 0:r[0],index:e,offset:0,size:0}]}(XS(o,r),d,c),[],r,l,d,s);const p=[];if(a.length>0){const e=a[0],t=a[a.length-1];let r=0;for(const n of fS(f,e,t)){const o=n.value,i=Math.max(n.start,e),a=Math.min(n.end,t);for(let e=i;e<=a;e++)p.push({data:null==c?void 0:c[e],index:e,offset:r,size:o}),r+=o}}if(!i)return fD([],p,r,l,d,s);const g=a.length>0?a[a.length-1]+1:0,b=RS(u,e,t,g);if(0===b.length)return null;const v=r-1;return fD(wC([],(r=>{for(const n of b){const o=n.value;let i=o.offset,a=n.start;const s=o.size;if(o.offset<e){a+=Math.floor((e-o.offset+l)/(s+l));const t=a-n.start;i+=t*s+t*l}a<g&&(i+=(g-a)*s,a=g);const d=Math.min(n.end,v);for(let e=a;e<=d&&!(i>=t);e++)r.push({data:null==c?void 0:c[e],index:e,offset:i,size:s}),i+=s+l}})),p,r,l,d,s)})),MC((e=>null!==e)),IC()),uD);_C(BC(e,MC(yC),AC((e=>null==e?void 0:e.length))),o),_C(BC(v,AC((e=>e.topListHeight))),u),_C(u,s),_C(BC(v,AC((e=>[e.top,e.bottom]))),a),_C(BC(v,AC((e=>e.items))),b);const y=VC(BC(v,MC((({items:e})=>e.length>0)),LC(o,e),MC((([{items:e},t])=>e[e.length-1].originalIndex===t-1)),AC((([,e,t])=>[e-1,t])),IC(kS),AC((([e])=>e)))),x=VC(BC(v,PC(200),MC((({items:e,topItems:t})=>e.length>0&&e[0].originalIndex===t.length)),AC((({items:e})=>e[0].index)),IC())),w=VC(BC(v,MC((({items:e})=>e.length>0)),AC((({items:e})=>{let t=0,r=e.length-1;for(;"group"===e[t].type&&t<r;)t++;for(;"group"===e[r].type&&r>t;)r--;return{endIndex:e[r].index,startIndex:e[t].index}})),IC(DS)));return{endReached:y,initialItemCount:m,itemsRendered:b,listState:v,rangeChanged:w,startReached:x,topItemsIndexes:g,...f}}),CC(VS,US,dD,JS,QS,oD,KS,ES),{singleton:!0}),mD=YC((([{fixedFooterHeight:e,fixedHeaderHeight:t,footerHeight:r,headerHeight:n},{listState:o}])=>{const i=WC(),a=HC(BC(KC(r,e,n,t,o),AC((([e,t,r,n,o])=>e+t+r+n+o.offsetBottom+o.bottom))),0);return _C(qC(a),i),{totalListHeight:a,totalListHeightChanged:i}}),CC(oS,gD),{singleton:!0}),bD=YC((([{viewportHeight:e},{totalListHeight:t}])=>{const r=NC(!1),n=HC(BC(KC(r,e,t),MC((([e])=>e)),AC((([,e,t])=>Math.max(0,e-t))),PC(0),IC()),0);return{alignToBottom:r,paddingTopAddition:n}}),CC(oS,mD),{singleton:!0});function vD(e){return!!e&&("smooth"===e?"smooth":"auto")}const yD=YC((([{listRefresh:e,totalCount:t},{atBottomState:r,isAtBottom:n},{scrollToIndex:o},{scrolledToInitialItem:i},{didMount:a,propsReady:s},{log:l},{scrollingInProgress:c}])=>{const d=NC(!1),u=WC();let f=null;function h(e){DC(o,{align:"end",behavior:e,index:"LAST"})}function p(e){const t=OC(r,(t=>{e&&!t.atBottom&&"SIZE_INCREASED"===t.notAtBottomBecause&&!f&&(EC(l)("scrolling to bottom due to increased size",{},QC.DEBUG),h("auto"))}));setTimeout(t,100)}return SC(BC(KC(BC(qC(t),zC(1)),a),LC(qC(d),n,i,c),AC((([[e,t],r,n,o,i])=>{let a=t&&o,s="auto";return a&&(s=((e,t)=>"function"==typeof e?vD(e(t)):t&&vD(e))(r,n||i),a=a&&!!s),{followOutputBehavior:s,shouldFollow:a,totalCount:e}})),MC((({shouldFollow:e})=>e))),(({followOutputBehavior:t,totalCount:r})=>{f&&(f(),f=null),f=OC(e,(()=>{EC(l)("following output to ",{totalCount:r},QC.DEBUG),h(t),f=null}))})),SC(BC(KC(qC(d),t,s),MC((([e,,t])=>e&&t)),RC((({value:e},[,t])=>({refreshed:e===t,value:t})),{refreshed:!1,value:0}),MC((({refreshed:e})=>e)),LC(d,t)),(([,e])=>{EC(i)&&p(!1!==e)})),SC(u,(()=>{p(!1!==EC(d))})),SC(KC(qC(d),r),(([e,t])=>{e&&!t.atBottom&&"VIEWPORT_HEIGHT_DECREASING"===t.notAtBottomBecause&&h("auto")})),{autoscrollToBottom:u,followOutput:d}}),CC(VS,oD,QS,JS,KS,XC,oS)),xD=YC((([{data:e,firstItemIndex:t,gap:r,sizes:n},{initialTopMostItemIndex:o},{initialItemCount:i,listState:a},{didMount:s}])=>(_C(BC(s,LC(i),MC((([,e])=>0!==e)),LC(o,n,t,r,e),AC((([[,e],t,r,n,o,i=[]])=>hD(e,t,r,n,o,i)))),a),{})),CC(VS,JS,gD,KS),{singleton:!0}),wD=YC((([{didMount:e},{scrollTo:t},{listState:r}])=>{const n=NC(0);return SC(BC(e,LC(n),MC((([,e])=>0!==e)),AC((([,e])=>({top:e})))),(e=>{OC(BC(r,zC(1),MC((e=>e.items.length>1))),(()=>{requestAnimationFrame((()=>{DC(t,e)}))}))})),{initialScrollTop:n}}),CC(KS,oS,gD),{singleton:!0}),$D=({itemBottom:e,itemTop:t,locationParams:{align:r,behavior:n,...o},viewportBottom:i,viewportTop:a})=>t<a?{...o,align:null!=r?r:"start",behavior:n}:e>i?{...o,align:null!=r?r:"end",behavior:n}:null,CD=YC((([{gap:e,sizes:t,totalCount:r},{fixedFooterHeight:n,fixedHeaderHeight:o,headerHeight:i,scrollingInProgress:a,scrollTop:s,viewportHeight:l},{scrollToIndex:c}])=>{const d=WC();return _C(BC(d,LC(t,l,r,i,o,n,s),LC(e),AC((([[e,t,r,n,o,i,s,l],c])=>{const{align:d,behavior:u,calculateViewLocation:f=$D,done:h,...p}=e,g=BS(e,t,n-1),m=AS(g,t.offsetTree,c)+o+i,b=f({itemBottom:m+cS(t.sizeTree,g)[1],itemTop:m,locationParams:{align:d,behavior:u,...p},viewportBottom:l+r-s,viewportTop:l+i});return b?h&&OC(BC(a,MC((e=>!e)),zC(EC(a)?1:2)),h):h&&h(),b})),MC((e=>null!==e))),c),{scrollIntoView:d}}),CC(VS,oS,QS,gD,XC),{singleton:!0}),SD=YC((([{scrollVelocity:e}])=>{const t=NC(!1),r=WC(),n=NC(!1);return _C(BC(e,LC(n,t,r),MC((([e,t])=>!!t)),AC((([e,t,r,n])=>{const{enter:o,exit:i}=t;if(r){if(i(e,n))return!1}else if(o(e,n))return!0;return r})),IC()),t),SC(BC(KC(t,e,r),LC(n)),(([[e,t,r],n])=>{e&&n&&n.change&&n.change(t,r)})),{isSeeking:t,scrollSeekConfiguration:n,scrollSeekRangeChanged:r,scrollVelocity:e}}),CC(oD),{singleton:!0}),DD=YC((([{scrollContainerState:e,scrollTo:t}])=>{const r=WC(),n=WC(),o=WC(),i=NC(!1),a=NC(void 0);return _C(BC(KC(r,n),AC((([{scrollHeight:e,scrollTop:t,viewportHeight:r},{offsetTop:n}])=>({scrollHeight:e,scrollTop:Math.max(0,t-n),viewportHeight:r})))),e),_C(BC(t,LC(n),AC((([e,{offsetTop:t}])=>({...e,top:e.top+t})))),o),{customScrollParent:a,useWindowScroll:i,windowScrollContainerState:r,windowScrollTo:o,windowViewportRect:n}}),CC(oS)),kD=YC((([{sizeRanges:e,sizes:t},{headerHeight:r,scrollTop:n},{initialTopMostItemIndex:o},{didMount:i},{useWindowScroll:a,windowScrollContainerState:s,windowViewportRect:l}])=>{const c=WC(),d=NC(void 0),u=NC(null),f=NC(null);return _C(s,u),_C(l,f),SC(BC(c,LC(t,n,a,u,f,r)),(([e,t,r,n,o,i,a])=>{const s=function(e){return pS(e).map((({k:e,v:t},r,n)=>{const o=n[r+1];return{endIndex:o?o.k-1:1/0,size:t,startIndex:e}}))}(t.sizeTree);n&&null!==o&&null!==i&&(r=o.scrollTop-i.offsetTop),e({ranges:s,scrollTop:r-=a})})),_C(BC(d,MC(yC),AC(ED)),o),_C(BC(i,LC(d),MC((([,e])=>void 0!==e)),IC(),AC((([,e])=>e.ranges))),e),{getState:c,restoreStateFrom:d}}),CC(VS,oS,JS,KS,DD));function ED(e){return{align:"start",index:0,offset:e.scrollTop}}const _D=YC((([{topItemsIndexes:e}])=>{const t=NC(0);return _C(BC(t,MC((e=>e>=0)),AC((e=>Array.from({length:e}).map(((e,t)=>t))))),e),{topItemCount:t}}),CC(gD));function OD(e){let t,r=!1;return()=>(r||(r=!0,t=e()),t)}const FD=OD((()=>/iP(ad|od|hone)/i.test(navigator.userAgent)&&/WebKit/i.test(navigator.userAgent))),TD=YC((([{deviation:e,scrollBy:t,scrollingInProgress:r,scrollTop:n},{isAtBottom:o,isScrolling:i,lastJumpDueToItemResize:a,scrollDirection:s},{listState:l},{beforeUnshiftWith:c,gap:d,shiftWithOffset:u,sizes:f},{log:h},{recalcInProgress:p}])=>{const g=VC(BC(l,LC(a),RC((([,e,t,r],[{bottom:n,items:o,offsetBottom:i,totalCount:a},s])=>{const l=n+i;let c=0;return t===a&&e.length>0&&o.length>0&&(0===o[0].originalIndex&&0===e[0].originalIndex||(c=l-r,0!==c&&(c+=s))),[c,o,a,l]}),[0,[],0,0]),MC((([e])=>0!==e)),LC(n,s,r,o,h,p),MC((([,e,t,r,,,n])=>!n&&!r&&0!==e&&t===tD)),AC((([[e],,,,,t])=>(t("Upward scrolling compensation",{amount:e},QC.DEBUG),e)))));function m(r){r>0?(DC(t,{behavior:"auto",top:-r}),DC(e,0)):(DC(e,0),DC(t,{behavior:"auto",top:-r}))}return SC(BC(g,LC(e,i)),(([t,r,n])=>{n&&FD()?DC(e,r-t):m(-t)})),SC(BC(KC(HC(i,!1),e,p),MC((([e,t,r])=>!e&&!r&&0!==t)),AC((([e,t])=>t)),PC(1)),m),_C(BC(u,AC((e=>({top:-e})))),t),SC(BC(c,LC(f,d),AC((([e,{groupIndices:t,lastSize:r,sizeTree:n},o])=>{function i(e){return e*(r+o)}if(0===t.length)return i(e);{let r=0;const o=lS(n,0);let a=0,s=0;for(;a<e;){a++,r+=o;let n=t.length===s+1?1/0:t[s+1]-t[s]-1;a+n>e&&(r-=o,n=e-a+1),a+=n,r+=i(n),s++}return r}}))),(r=>{DC(e,r),requestAnimationFrame((()=>{DC(t,{top:r}),requestAnimationFrame((()=>{DC(e,0),DC(p,!1)}))}))})),{deviation:e}}),CC(oS,oD,gD,VS,XC,ES)),ID=YC((([e,t,r,n,o,i,a,s,l,c])=>({...e,...t,...r,...n,...o,...i,...a,...s,...l,...c})),CC(dD,xD,KS,SD,mD,wD,bD,DD,CD,XC)),MD=YC((([{data:e,defaultItemSize:t,firstItemIndex:r,fixedItemSize:n,gap:o,groupIndices:i,itemSize:a,sizeRanges:s,sizes:l,statefulTotalCount:c,totalCount:d,trackItemSizes:u},{initialItemFinalLocationReached:f,initialTopMostItemIndex:h,scrolledToInitialItem:p},g,m,b,{listState:v,topItemsIndexes:y,...x},{scrollToIndex:w},$,{topItemCount:C},{groupCounts:S},D])=>(_C(x.rangeChanged,D.scrollSeekRangeChanged),_C(BC(D.windowViewportRect,AC((e=>e.visibleHeight))),g.viewportHeight),{data:e,defaultItemHeight:t,firstItemIndex:r,fixedItemHeight:n,gap:o,groupCounts:S,initialItemFinalLocationReached:f,initialTopMostItemIndex:h,scrolledToInitialItem:p,sizeRanges:s,topItemCount:C,topItemsIndexes:y,totalCount:d,...b,groupIndices:i,itemSize:a,listState:v,scrollToIndex:w,statefulTotalCount:c,trackItemSizes:u,...x,...D,...g,sizes:l,...m})),CC(VS,JS,oS,kD,yD,gD,QS,TD,_D,US,ID));function AD(e,t){const r={},n={};let o=0;const i=e.length;for(;o<i;)n[e[o]]=1,o+=1;for(const e in t)Object.hasOwn(n,e)||(r[e]=t[e]);return r}const jD=typeof document<"u"?o.useLayoutEffect:o.useEffect;function BD(e,r,n){const i=Object.keys(r.required||{}),a=Object.keys(r.optional||{}),s=Object.keys(r.methods||{}),l=Object.keys(r.events||{}),c=o.createContext({});function d(e,t){e.propsReady&&DC(e.propsReady,!1);for(const n of i){DC(e[r.required[n]],t[n])}for(const n of a)if(n in t){DC(e[r.optional[n]],t[n])}e.propsReady&&DC(e.propsReady,!0)}function u(e){return l.reduce(((t,n)=>(t[n]=function(e){let t,r;const n=()=>null==t?void 0:t();return function(o,i){switch(o){case 1:return i?r===i?void 0:(n(),r=i,t=SC(e,i),t):(n(),xC);case 2:return n(),void(r=null)}}}(e[r.events[n]]),t)),{})}const f=o.forwardRef(((f,h)=>{const{children:p,...g}=f,[m]=o.useState((()=>wC(function(e){const t=new Map,r=({constructor:e,dependencies:n,id:o,singleton:i})=>{if(i&&t.has(o))return t.get(o);const a=e(n.map((e=>r(e))));return i&&t.set(o,a),a};return r(e)}(e),(e=>{d(e,g)})))),[b]=o.useState(bC(u,m));jD((()=>{for(const e of l)e in g&&SC(b[e],g[e]);return()=>{Object.values(b).map(kC)}}),[g,b,m]),jD((()=>{d(m,g)})),o.useImperativeHandle(h,pC(function(e){return s.reduce(((t,n)=>(t[n]=t=>{DC(e[r.methods[n]],t)},t)),{})}(m)));const v=n;return t(c.Provider,{value:m,children:n?t(v,{...AD([...i,...a,...l],g),children:p}):p})})),h=o.version.startsWith("18")?e=>{const t=o.useContext(c)[e],r=o.useCallback((e=>SC(t,e)),[t]);return o.useSyncExternalStore(r,(()=>EC(t)),(()=>EC(t)))}:e=>{const t=o.useContext(c)[e],[r,n]=o.useState(bC(EC,t));return jD((()=>SC(t,(e=>{e!==r&&n(pC(e))}))),[t,r]),r};return{Component:f,useEmitter:(e,t)=>{const r=o.useContext(c)[e];jD((()=>SC(r,t)),[t,r])},useEmitterValue:h,usePublisher:e=>o.useCallback(vC(DC,o.useContext(c)[e]),[e])}}const RD=o.createContext(void 0),zD=o.createContext(void 0),PD=typeof document<"u"?o.useLayoutEffect:o.useEffect;function LD(e,t,r,n=xC,i,a){const s=o.useRef(null),l=o.useRef(null),c=o.useRef(null),d=o.useCallback((r=>{const n=r.target,o=n===window||n===document,i=a?o?window.pageXOffset||document.documentElement.scrollLeft:n.scrollLeft:o?window.pageYOffset||document.documentElement.scrollTop:n.scrollTop,s=a?o?document.documentElement.scrollWidth:n.scrollWidth:o?document.documentElement.scrollHeight:n.scrollHeight,d=a?o?window.innerWidth:n.offsetWidth:o?window.innerHeight:n.offsetHeight,u=()=>{e({scrollHeight:s,scrollTop:Math.max(i,0),viewportHeight:d})};r.suppressFlushSync?u():I.flushSync(u),null!==l.current&&(i===l.current||i<=0||i===s-d)&&(l.current=null,t(!0),c.current&&(clearTimeout(c.current),c.current=null))}),[e,t]);return o.useEffect((()=>{const e=i||s.current;return n(i||s.current),d({suppressFlushSync:!0,target:e}),e.addEventListener("scroll",d,{passive:!0}),()=>{n(null),e.removeEventListener("scroll",d)}}),[s,d,r,n,i]),{scrollByCallback:function(e){a&&(e={behavior:e.behavior,left:e.top}),s.current.scrollBy(e)},scrollerRef:s,scrollToCallback:function(r){const n=s.current;if(!n||(a?"offsetWidth"in n&&0===n.offsetWidth:"offsetHeight"in n&&0===n.offsetHeight))return;const o="smooth"===r.behavior;let i,d,u;n===window?(d=Math.max(FS(document.documentElement,a?"width":"height"),a?document.documentElement.scrollWidth:document.documentElement.scrollHeight),i=a?window.innerWidth:window.innerHeight,u=a?document.documentElement.scrollLeft:document.documentElement.scrollTop):(d=n[a?"scrollWidth":"scrollHeight"],i=FS(n,a?"width":"height"),u=n[a?"scrollLeft":"scrollTop"]);const f=d-i;if(r.top=Math.ceil(Math.max(Math.min(f,r.top),0)),eD(i,d)||r.top===u)return e({scrollHeight:d,scrollTop:u,viewportHeight:i}),void(o&&t(!0));o?(l.current=r.top,c.current&&clearTimeout(c.current),c.current=setTimeout((()=>{c.current=null,l.current=null,t(!0)}),1e3)):l.current=null,a&&(r={behavior:r.behavior,left:r.top}),n.scrollTo(r)}}}const ND="-webkit-sticky",HD="sticky",WD=OD((()=>{if(typeof document>"u")return HD;const e=document.createElement("div");return e.style.position=ND,e.style.position===ND?ND:HD}));function VD(e){return e}const YD=YC((()=>{const e=NC((e=>`Item ${e}`)),t=NC(null),r=NC((e=>`Group ${e}`)),n=NC({}),o=NC(VD),i=NC("div"),a=NC(xC),s=(e,t=null)=>HC(BC(n,AC((t=>t[e])),IC()),t);return{components:n,computeItemKey:o,context:t,EmptyPlaceholder:s("EmptyPlaceholder"),FooterComponent:s("Footer"),GroupComponent:s("Group","div"),groupContent:r,HeaderComponent:s("Header"),HeaderFooterTag:i,ItemComponent:s("Item","div"),itemContent:e,ListComponent:s("List","div"),ScrollerComponent:s("Scroller","div"),scrollerRef:a,ScrollSeekPlaceholder:s("ScrollSeekPlaceholder"),TopItemListComponent:s("TopItemList")}})),UD=YC((([e,t])=>({...e,...t})),CC(MD,YD)),KD=({height:e})=>t("div",{style:{height:e}}),qD={overflowAnchor:"none",position:WD(),zIndex:1},GD={overflowAnchor:"none"},QD={...GD,display:"inline-block",height:"100%"},ZD=o.memo((function({showTopList:e=!1}){const r=pk("listState"),n=gk("sizeRanges"),i=pk("useWindowScroll"),a=pk("customScrollParent"),s=gk("windowScrollContainerState"),l=gk("scrollContainerState"),c=a||i?s:l,d=pk("itemContent"),u=pk("context"),f=pk("groupContent"),h=pk("trackItemSizes"),p=pk("itemSize"),g=pk("log"),m=gk("gap"),b=pk("horizontalDirection"),{callbackRef:v}=tS(n,p,h,e?xC:c,g,m,a,b,pk("skipAnimationFrameInResizeObserver")),[y,x]=o.useState(0);hk("deviation",(e=>{y!==e&&x(e)}));const w=pk("EmptyPlaceholder"),$=pk("ScrollSeekPlaceholder")||KD,C=pk("ListComponent"),S=pk("ItemComponent"),k=pk("GroupComponent"),E=pk("computeItemKey"),_=pk("isSeeking"),O=pk("groupIndices").length>0,F=pk("alignToBottom"),T=pk("initialItemFinalLocationReached"),I=e?{}:{boxSizing:"border-box",...b?{display:"inline-block",height:"100%",marginLeft:0!==y?y:F?"auto":0,paddingLeft:r.offsetTop,paddingRight:r.offsetBottom,whiteSpace:"nowrap"}:{marginTop:0!==y?y:F?"auto":0,paddingBottom:r.offsetBottom,paddingTop:r.offsetTop},...T?{}:{visibility:"hidden"}};return!e&&0===r.totalCount&&w?t(w,{...rk(w,u)}):t(C,{...rk(C,u),"data-testid":e?"virtuoso-top-item-list":"virtuoso-item-list",ref:v,style:I,children:(e?r.topItems:r.items).map((e=>{const t=e.originalIndex,n=E(t+r.firstItemIndex,e.data,u);return _?D($,{...rk($,u),height:e.size,index:e.index,key:n,type:e.type||"item",..."group"===e.type?{}:{groupIndex:e.groupIndex}}):"group"===e.type?D(k,{...rk(k,u),"data-index":t,"data-item-index":e.index,"data-known-size":e.size,key:n,style:qD},f(e.index,u)):D(S,{...rk(S,u),...nk(S,e.data),"data-index":t,"data-item-group-index":e.groupIndex,"data-item-index":e.index,"data-known-size":e.size,key:n,style:b?QD:GD},O?d(e.index,e.groupIndex,e.data,u):d(e.index,e.data,u))}))})})),XD={height:"100%",outline:"none",overflowY:"auto",position:"relative",WebkitOverflowScrolling:"touch"},JD={outline:"none",overflowX:"auto",position:"relative"},ek=e=>({height:"100%",position:"absolute",top:0,width:"100%",...e?{display:"flex",flexDirection:"column"}:{}}),tk={position:WD(),top:0,width:"100%",zIndex:1};function rk(e,t){if("string"!=typeof e)return{context:t}}function nk(e,t){return{item:"string"==typeof e?void 0:t}}const ok=o.memo((function(){const e=pk("HeaderComponent"),r=gk("headerHeight"),n=pk("HeaderFooterTag"),i=JC(o.useMemo((()=>e=>{r(FS(e,"height"))}),[r]),!0,pk("skipAnimationFrameInResizeObserver")),a=pk("context");return e?t(n,{ref:i,children:t(e,{...rk(e,a)})}):null})),ik=o.memo((function(){const e=pk("FooterComponent"),r=gk("footerHeight"),n=pk("HeaderFooterTag"),i=JC(o.useMemo((()=>e=>{r(FS(e,"height"))}),[r]),!0,pk("skipAnimationFrameInResizeObserver")),a=pk("context");return e?t(n,{ref:i,children:t(e,{...rk(e,a)})}):null}));function ak({useEmitter:e,useEmitterValue:r,usePublisher:n}){return o.memo((function({children:o,style:i,...a}){const s=n("scrollContainerState"),l=r("ScrollerComponent"),c=n("smoothScrollTargetReached"),d=r("scrollerRef"),u=r("context"),f=r("horizontalDirection")||!1,{scrollByCallback:h,scrollerRef:p,scrollToCallback:g}=LD(s,c,l,d,void 0,f);return e("scrollTo",g),e("scrollBy",h),t(l,{"data-testid":"virtuoso-scroller","data-virtuoso-scroller":!0,ref:p,style:{...f?JD:XD,...i},tabIndex:0,...a,...rk(l,u),children:o})}))}function sk({useEmitter:e,useEmitterValue:r,usePublisher:n}){return o.memo((function({children:o,style:i,...a}){const s=n("windowScrollContainerState"),l=r("ScrollerComponent"),c=n("smoothScrollTargetReached"),d=r("totalListHeight"),u=r("deviation"),f=r("customScrollParent"),h=r("context"),{scrollByCallback:p,scrollerRef:g,scrollToCallback:m}=LD(s,c,l,xC,f);return PD((()=>(g.current=f||window,()=>{g.current=null})),[g,f]),e("windowScrollTo",m),e("scrollBy",p),t(l,{"data-virtuoso-scroller":!0,style:{position:"relative",...i,...0!==d?{height:d+u}:{}},...a,...rk(l,h),children:o})}))}const lk=({children:e})=>{const r=o.useContext(RD),n=gk("viewportHeight"),i=gk("fixedItemHeight"),a=pk("alignToBottom"),s=pk("horizontalDirection"),l=JC(o.useMemo((()=>mC(n,(e=>FS(e,s?"width":"height")))),[n,s]),!0,pk("skipAnimationFrameInResizeObserver"));return o.useEffect((()=>{r&&(n(r.viewportHeight),i(r.itemHeight))}),[r,n,i]),t("div",{"data-viewport-type":"element",ref:l,style:ek(a),children:e})},ck=({children:e})=>{const r=o.useContext(RD),n=gk("windowViewportRect"),i=gk("fixedItemHeight"),a=pk("customScrollParent"),s=nS(n,a,pk("skipAnimationFrameInResizeObserver")),l=pk("alignToBottom");return o.useEffect((()=>{r&&(i(r.itemHeight),n({offsetTop:0,visibleHeight:r.viewportHeight,visibleWidth:100}))}),[r,n,i]),t("div",{"data-viewport-type":"window",ref:s,style:ek(l),children:e})},dk=({children:e})=>{const r=pk("TopItemListComponent")||"div",n=pk("headerHeight"),o={...tk,marginTop:`${n}px`},i=pk("context");return t(r,{style:o,...rk(r,i),children:e})},uk=o.memo((function(r){const n=pk("useWindowScroll"),o=pk("topItemsIndexes").length>0,i=pk("customScrollParent"),a=pk("context"),s=i||n?bk:mk,l=i||n?ck:lk;return e(s,{...r,...rk(s,a),children:[o&&t(dk,{children:t(ZD,{showTopList:!0})}),e(l,{children:[t(ok,{}),t(ZD,{}),t(ik,{})]})]})})),{Component:fk,useEmitter:hk,useEmitterValue:pk,usePublisher:gk}=BD(UD,{events:{atBottomStateChange:"atBottomStateChange",atTopStateChange:"atTopStateChange",endReached:"endReached",groupIndices:"groupIndices",isScrolling:"isScrolling",itemsRendered:"itemsRendered",rangeChanged:"rangeChanged",startReached:"startReached",totalListHeightChanged:"totalListHeightChanged"},methods:{autoscrollToBottom:"autoscrollToBottom",getState:"getState",scrollBy:"scrollBy",scrollIntoView:"scrollIntoView",scrollTo:"scrollTo",scrollToIndex:"scrollToIndex"},optional:{alignToBottom:"alignToBottom",atBottomThreshold:"atBottomThreshold",atTopThreshold:"atTopThreshold",components:"components",computeItemKey:"computeItemKey",context:"context",customScrollParent:"customScrollParent",data:"data",defaultItemHeight:"defaultItemHeight",firstItemIndex:"firstItemIndex",fixedItemHeight:"fixedItemHeight",followOutput:"followOutput",groupContent:"groupContent",groupCounts:"groupCounts",headerFooterTag:"HeaderFooterTag",horizontalDirection:"horizontalDirection",increaseViewportBy:"increaseViewportBy",initialItemCount:"initialItemCount",initialScrollTop:"initialScrollTop",initialTopMostItemIndex:"initialTopMostItemIndex",itemContent:"itemContent",itemSize:"itemSize",logLevel:"logLevel",overscan:"overscan",restoreStateFrom:"restoreStateFrom",scrollerRef:"scrollerRef",scrollSeekConfiguration:"scrollSeekConfiguration",skipAnimationFrameInResizeObserver:"skipAnimationFrameInResizeObserver",topItemCount:"topItemCount",totalCount:"totalCount",useWindowScroll:"useWindowScroll"},required:{}},uk),mk=ak({useEmitter:hk,useEmitterValue:pk,usePublisher:gk}),bk=sk({useEmitter:hk,useEmitterValue:pk,usePublisher:gk}),vk=fk,yk={bottom:0,itemHeight:0,items:[],itemWidth:0,offsetBottom:0,offsetTop:0,top:0},xk={bottom:0,itemHeight:0,items:[{index:0}],itemWidth:0,offsetBottom:0,offsetTop:0,top:0},{ceil:wk,floor:$k,max:Ck,min:Sk,round:Dk}=Math;function kk(e,t,r){return Array.from({length:t-e+1}).map(((t,n)=>({data:null===r?null:r[n+e],index:n+e})))}function Ek(e,t){return e&&e.width===t.width&&e.height===t.height}function _k(e,t){return e&&e.column===t.column&&e.row===t.row}const Ok=YC((([{increaseViewportBy:e,listBoundary:t,overscan:r,visibleRange:n},{footerHeight:o,headerHeight:i,scrollBy:a,scrollContainerState:s,scrollTo:l,scrollTop:c,smoothScrollTargetReached:d,viewportHeight:u},f,h,{didMount:p,propsReady:g},{customScrollParent:m,useWindowScroll:b,windowScrollContainerState:v,windowScrollTo:y,windowViewportRect:x},w])=>{const $=NC(0),C=NC(0),S=NC(yk),D=NC({height:0,width:0}),k=NC({height:0,width:0}),E=WC(),_=WC(),O=NC(0),F=NC(null),T=NC({column:0,row:0}),I=WC(),M=WC(),A=NC(!1),j=NC(0),B=NC(!0),R=NC(!1),z=NC(!1);SC(BC(p,LC(j),MC((([e,t])=>!!t))),(()=>{DC(B,!1)})),SC(BC(KC(p,B,k,D,j,R),MC((([e,t,r,n,,o])=>e&&!t&&0!==r.height&&0!==n.height&&!o))),(([,,,,e])=>{DC(R,!0),ZS(1,(()=>{DC(E,e)})),OC(BC(c),(()=>{DC(t,[0,0]),DC(B,!0)}))})),_C(BC(M,MC((e=>null!=e&&e.scrollTop>0)),jC(0)),C),SC(BC(p,LC(M),MC((([,e])=>null!=e))),(([,e])=>{e&&(DC(D,e.viewport),DC(k,e.item),DC(T,e.gap),e.scrollTop>0&&(DC(A,!0),OC(BC(c,zC(1)),(e=>{DC(A,!1)})),DC(l,{top:e.scrollTop})))})),_C(BC(D,AC((({height:e})=>e))),u),_C(BC(KC(qC(D,Ek),qC(k,Ek),qC(T,((e,t)=>e&&e.column===t.column&&e.row===t.row)),qC(c)),AC((([e,t,r,n])=>({gap:r,item:t,scrollTop:n,viewport:e})))),I),_C(BC(KC(qC($),n,qC(T,_k),qC(k,Ek),qC(D,Ek),qC(F),qC(C),qC(A),qC(B),qC(j)),MC((([,,,,,,,e])=>!e)),AC((([e,[t,r],n,o,i,a,s,,l,c])=>{const{column:d,row:u}=n,{height:f,width:h}=o,{width:p}=i;if(0===s&&(0===e||0===p))return yk;if(0===h){const t=XS(c,e);return function(e){return{...xk,items:e}}(kk(t,t+Math.max(s-1,0),a))}const g=Fk(p,h,d);let m,b;l?0===t&&0===r&&s>0?(m=0,b=s-1):(m=g*$k((t+u)/(f+u)),b=g*wk((r+u)/(f+u))-1,b=Sk(e-1,Ck(b,g-1)),m=Sk(b,Ck(0,m))):(m=0,b=-1);const v=kk(m,b,a),{bottom:y,top:x}=Tk(i,n,o,v),w=wk(e/g);return{bottom:y,itemHeight:f,items:v,itemWidth:h,offsetBottom:w*f+(w-1)*u-y,offsetTop:x,top:x}}))),S),_C(BC(F,MC((e=>null!==e)),AC((e=>e.length))),$),_C(BC(KC(D,k,S,T),MC((([e,t,{items:r}])=>r.length>0&&0!==t.height&&0!==e.height)),AC((([e,t,{items:r},n])=>{const{bottom:o,top:i}=Tk(e,n,t,r);return[i,o]})),IC(kS)),t);const P=NC(!1);_C(BC(c,LC(P),AC((([e,t])=>t||0!==e))),P);const L=VC(BC(KC(S,$),MC((([{items:e}])=>e.length>0)),LC(P),MC((([[e,t],r])=>{const n=e.items[e.items.length-1].index===t-1;return(r||e.bottom>0&&e.itemHeight>0&&0===e.offsetBottom&&e.items.length===t)&&n})),AC((([[,e]])=>e-1)),IC())),N=VC(BC(qC(S),MC((({items:e})=>e.length>0&&0===e[0].index)),jC(0),IC())),H=VC(BC(qC(S),LC(A),MC((([{items:e},t])=>e.length>0&&!t)),AC((([{items:e}])=>({endIndex:e[e.length-1].index,startIndex:e[0].index}))),IC(DS),PC(0)));_C(H,h.scrollSeekRangeChanged),_C(BC(E,LC(D,k,$,T),AC((([e,t,r,n,o])=>{const i=GS(e),{align:a,behavior:s,offset:l}=i;let c=i.index;"LAST"===c&&(c=n-1),c=Ck(0,c,Sk(n-1,c));let d=Ik(t,o,r,c);return"end"===a?d=Dk(d-t.height+r.height):"center"===a&&(d=Dk(d-t.height/2+r.height/2)),l&&(d+=l),{behavior:s,top:d}}))),l);const W=HC(BC(S,AC((e=>e.offsetBottom+e.bottom))),0);return _C(BC(x,AC((e=>({height:e.visibleHeight,width:e.visibleWidth})))),D),{customScrollParent:m,data:F,deviation:O,footerHeight:o,gap:T,headerHeight:i,increaseViewportBy:e,initialItemCount:C,itemDimensions:k,overscan:r,restoreStateFrom:M,scrollBy:a,scrollContainerState:s,scrollHeight:_,scrollTo:l,scrollToIndex:E,scrollTop:c,smoothScrollTargetReached:d,totalCount:$,useWindowScroll:b,viewportDimensions:D,windowScrollContainerState:v,windowScrollTo:y,windowViewportRect:x,...h,gridState:S,horizontalDirection:z,initialTopMostItemIndex:j,totalListHeight:W,...f,endReached:L,propsReady:g,rangeChanged:H,startReached:N,stateChanged:I,stateRestoreInProgress:A,...w}}),CC(dD,oS,oD,SD,KS,DD,XC));function Fk(e,t,r){return Ck(1,$k((e+r)/($k(t)+r)))}function Tk(e,t,r,n){const{height:o}=r;if(void 0===o||0===n.length)return{bottom:0,top:0};const i=Ik(e,t,r,n[0].index);return{bottom:Ik(e,t,r,n[n.length-1].index)+o,top:i}}function Ik(e,t,r,n){const o=Fk(e.width,r.width,t.column),i=$k(n/o),a=i*r.height+Ck(0,i-1)*t.row;return a>0?a+t.row:a}const Mk=YC((()=>{const e=NC((e=>`Item ${e}`)),t=NC({}),r=NC(null),n=NC("virtuoso-grid-item"),o=NC("virtuoso-grid-list"),i=NC(VD),a=NC("div"),s=NC(xC),l=(e,r=null)=>HC(BC(t,AC((t=>t[e])),IC()),r),c=NC(!1),d=NC(!1);return _C(qC(d),c),{components:t,computeItemKey:i,context:r,FooterComponent:l("Footer"),HeaderComponent:l("Header"),headerFooterTag:a,itemClassName:n,ItemComponent:l("Item","div"),itemContent:e,listClassName:o,ListComponent:l("List","div"),readyStateChanged:c,reportReadyState:d,ScrollerComponent:l("Scroller","div"),scrollerRef:s,ScrollSeekPlaceholder:l("ScrollSeekPlaceholder","div")}})),Ak=YC((([e,t])=>({...e,...t})),CC(Ok,Mk)),jk=o.memo((function(){const e=Wk("gridState"),r=Wk("listClassName"),n=Wk("itemClassName"),i=Wk("itemContent"),a=Wk("computeItemKey"),s=Wk("isSeeking"),l=Vk("scrollHeight"),c=Wk("ItemComponent"),d=Wk("ListComponent"),u=Wk("ScrollSeekPlaceholder"),f=Wk("context"),h=Vk("itemDimensions"),p=Vk("gap"),g=Wk("log"),m=Wk("stateRestoreInProgress"),b=Vk("reportReadyState"),v=JC(o.useMemo((()=>e=>{const t=e.parentElement.parentElement.scrollHeight;l(t);const r=e.firstChild;if(r){const{height:e,width:t}=r.getBoundingClientRect();h({height:e,width:t})}p({column:Kk("column-gap",getComputedStyle(e).columnGap,g),row:Kk("row-gap",getComputedStyle(e).rowGap,g)})}),[l,h,p,g]),!0,!1);return PD((()=>{e.itemHeight>0&&e.itemWidth>0&&b(!0)}),[e]),m?null:t(d,{className:r,ref:v,...rk(d,f),"data-testid":"virtuoso-item-list",style:{paddingBottom:e.offsetBottom,paddingTop:e.offsetTop},children:e.items.map((r=>{const o=a(r.index,r.data,f);return s?t(u,{...rk(u,f),height:e.itemHeight,index:r.index,width:e.itemWidth},o):D(c,{...rk(c,f),className:n,"data-index":r.index,key:o},i(r.index,r.data,f))}))})})),Bk=o.memo((function(){const e=Wk("HeaderComponent"),r=Vk("headerHeight"),n=Wk("headerFooterTag"),i=JC(o.useMemo((()=>e=>{r(FS(e,"height"))}),[r]),!0,!1),a=Wk("context");return e?t(n,{ref:i,children:t(e,{...rk(e,a)})}):null})),Rk=o.memo((function(){const e=Wk("FooterComponent"),r=Vk("footerHeight"),n=Wk("headerFooterTag"),i=JC(o.useMemo((()=>e=>{r(FS(e,"height"))}),[r]),!0,!1),a=Wk("context");return e?t(n,{ref:i,children:t(e,{...rk(e,a)})}):null})),zk=({children:e})=>{const r=o.useContext(zD),n=Vk("itemDimensions"),i=Vk("viewportDimensions"),a=JC(o.useMemo((()=>e=>{i(e.getBoundingClientRect())}),[i]),!0,!1);return o.useEffect((()=>{r&&(i({height:r.viewportHeight,width:r.viewportWidth}),n({height:r.itemHeight,width:r.itemWidth}))}),[r,i,n]),t("div",{ref:a,style:ek(!1),children:e})},Pk=({children:e})=>{const r=o.useContext(zD),n=Vk("windowViewportRect"),i=Vk("itemDimensions"),a=Wk("customScrollParent"),s=nS(n,a,!1);return o.useEffect((()=>{r&&(i({height:r.itemHeight,width:r.itemWidth}),n({offsetTop:0,visibleHeight:r.viewportHeight,visibleWidth:r.viewportWidth}))}),[r,n,i]),t("div",{ref:s,style:ek(!1),children:e})},Lk=o.memo((function({...r}){const n=Wk("useWindowScroll"),o=Wk("customScrollParent"),i=o||n?Uk:Yk,a=o||n?Pk:zk,s=Wk("context");return t(i,{...r,...rk(i,s),children:e(a,{children:[t(Bk,{}),t(jk,{}),t(Rk,{})]})})})),{Component:Nk,useEmitter:Hk,useEmitterValue:Wk,usePublisher:Vk}=BD(Ak,{events:{atBottomStateChange:"atBottomStateChange",atTopStateChange:"atTopStateChange",endReached:"endReached",isScrolling:"isScrolling",rangeChanged:"rangeChanged",readyStateChanged:"readyStateChanged",startReached:"startReached",stateChanged:"stateChanged"},methods:{scrollBy:"scrollBy",scrollTo:"scrollTo",scrollToIndex:"scrollToIndex"},optional:{components:"components",computeItemKey:"computeItemKey",context:"context",customScrollParent:"customScrollParent",data:"data",headerFooterTag:"headerFooterTag",increaseViewportBy:"increaseViewportBy",initialItemCount:"initialItemCount",initialTopMostItemIndex:"initialTopMostItemIndex",itemClassName:"itemClassName",itemContent:"itemContent",listClassName:"listClassName",logLevel:"logLevel",overscan:"overscan",restoreStateFrom:"restoreStateFrom",scrollerRef:"scrollerRef",scrollSeekConfiguration:"scrollSeekConfiguration",totalCount:"totalCount",useWindowScroll:"useWindowScroll"}},Lk),Yk=ak({useEmitter:Hk,useEmitterValue:Wk,usePublisher:Vk}),Uk=sk({useEmitter:Hk,useEmitterValue:Wk,usePublisher:Vk});function Kk(e,t,r){return"normal"!==t&&!(null!=t&&t.endsWith("px"))&&r(`${e} was not resolved to pixel value correctly`,t,QC.WARN),"normal"===t?0:parseInt(null!=t?t:"0",10)}const qk=o.createContext({focusedIndex:-1,setFocusedIndex:()=>{}}),Gk=({children:e})=>{const[r,n]=g(-1);return t(qk.Provider,{value:{focusedIndex:r,setFocusedIndex:n},children:e})},Qk=E.div`
    overflow: hidden;
    border: ${qi["width-010"]} ${qi.solid} ${Yi.border};
    border-radius: ${Qi.sm};
    background: ${Yi.bg};

    min-width: 23rem;
    ${e=>e.$width&&`width: ${e.$width}px;`}
    max-height: 27rem;
    overflow-y: auto;

    ${e=>"small"===e.$variant?Ui["body-md-regular"]:Ui["body-baseline-regular"]}

    ${Xi.MaxWidth.sm} {
        min-width: unset;
        width: calc(100vw - ${Zi["sm-margin"]} * 2);
        max-height: 15rem;
    }

    ${Xi.MaxWidth.xs} {
        width: calc(100vw - ${Zi["xs-margin"]} * 2);
    }

    ${Xi.MaxWidth.xxs} {
        width: calc(100vw - ${Zi["xxs-margin"]} * 2);
    }

    ::-webkit-scrollbar {
        width: 14px;
    }

    ::-webkit-scrollbar-track {
        background: transparent;
    }

    ::-webkit-scrollbar-thumb {
        background: ${Yi["bg-inverse-subtlest"]};
        border: 5px solid transparent;
        border-radius: 9999px;
        background-clip: padding-box;
    }
`,Zk=E.div`
    background: transparent;
    padding: ${Gi["spacing-8"]};
`,Xk=E.ul`
    list-style-type: none;
`,Jk=E.li`
    display: flex;
    align-items: flex-start;
    gap: ${Gi["spacing-8"]};
    padding: ${Gi["spacing-12"]} ${Gi["spacing-8"]};
    cursor: pointer;

    outline: none;

    ${e=>e.$disabled?_`
                cursor: not-allowed;
            `:e.$active&&e.$selected?_`
                background: ${Yi["bg-hover"]};
            `:e.$active?_`
                background: ${Yi["bg-hover-subtle"]};
            `:void 0}
`,eE=E($e)`
    flex-shrink: 0;
    height: 1lh;
    width: 1rem;
    color: ${Yi["icon-selected"]};
`,tE=E.div`
    flex-shrink: 0;
    height: 1lh;
    width: 1rem;
`,rE=E(we)`
    flex-shrink: 0;
    height: 1lh;
    width: 1lh;
    color: ${Yi["icon-selected"]};
`,nE=E(ye)`
    flex-shrink: 0;
    height: 1lh;
    width: 1lh;
    color: ${Yi["icon-primary-subtlest"]};
`,oE=E(xe)`
    flex-shrink: 0;
    height: 1lh;
    width: 1lh;
    color: ${Yi["icon-disabled-subtle"]};
`,iE=E.div`
    width: 100%;
    display: flex;
    justify-content: flex-end;
`,aE=E(oh)`
    cursor: pointer;
    overflow: hidden;
    color: ${Yi["text-primary"]};
    font-size: inherit;
`,sE=E(aE)`
    ${Ui["body-baseline-semibold"]}
`,lE=E(aE)`
    ${Ui["body-md-semibold"]}
    padding: ${Gi["spacing-8"]} ${Gi["spacing-8"]};
`,cE=E.div`
    width: 100%;
    display: flex;
    padding: ${Gi["spacing-12"]} ${Gi["spacing-16"]};
    align-items: center;
`,dE=E(pe)`
    margin-right: ${Gi["spacing-4"]};
    color: ${Yi["icon-error"]};
    height: 1em;
    width: 1em;
`,uE=E(Bu)`
    margin-right: ${Gi["spacing-8"]};
    color: ${Yi.icon};
`,fE=E.div`
    ${Rd()}
    color: ${Yi["text-subtle"]};
    padding: 0 ${Gi["spacing-16"]} ${Gi["spacing-12"]}
        ${Gi["spacing-16"]};
`,hE=E.div`
    background: ${Yi["bg-strong"]};
    border-radius: ${Qi.sm};
    display: flex;
    align-items: center;

    ${e=>"small"===e.$variant?Ui["body-md-regular"]:Ui["body-baseline-regular"]}
`,pE=E.label`
    flex: 1;
    display: flex;
    align-items: center;
    gap: ${Gi["spacing-8"]};
    padding: ${e=>"small"===e.$variant?_`
                  ${Gi["spacing-8"]} ${Gi["spacing-16"]}
              `:_`10px ${Gi["spacing-16"]}`};
`,gE=E(nh)`
    flex: 1;
`,mE=E(ge)`
    color: ${Yi.icon};
    flex-shrink: 0;
    height: 1em;
    width: 1em;
`,bE=E(Md)`
    flex-shrink: 0;
    align-self: stretch;
    box-sizing: content-box;
    padding: ${Gi["spacing-8"]};
    margin-left: -${Gi["spacing-8"]};
    color: ${Yi.icon};
    cursor: pointer;
    font-size: inherit;

    svg {
        flex-shrink: 0;
        height: 1em;
        width: 1em;
    }
`,vE=u(((r,n)=>{var{value:o,variant:i,onClear:a}=r,s=lt(r,["value","variant","onClear"]);return e(hE,{$variant:i,children:[e(pE,{$variant:i,children:[t(mE,{"aria-hidden":!0}),t(gE,Object.assign({ref:n,value:o,$variant:i},s))]}),o&&t(bE,{"aria-label":"Clear search",focusOutline:"browser",onClick:a,children:t(te,{"aria-hidden":!0})})]})})),yE=({listItems:n,multiSelect:o,maxSelectable:i,selectedItems:a,disableItemFocus:l,itemsLoadState:u="success",itemTruncationType:f="end",itemMaxLines:h=2,labelDisplayType:p="inline",variant:m="default",listboxId:v,width:y,topScrollItem:x,onSelectItem:w,onSelectAll:$,onDismiss:C,onRetry:S,valueExtractor:D,listExtractor:k,renderListItem:E,renderCustomCallToAction:_,enableSearch:O,hideNoResultsDisplay:F,noResultsDescription:T,searchPlaceholder:I="Search",searchFunction:M,onSearch:A})=>{const{focusedIndex:j,setFocusedIndex:B}=b(qk),[R,z]=g(""),[P,L]=g(null!=n?n:[]),N=yd(u),H=bd(),W=s(null),V=s(null),Y=s([]),U=s(null),K=s(null),q=!!i&&!!a&&(null==a?void 0:a.length)===i,G=e=>{const t=k?k(e):null==e?void 0:e.toString();return"object"==typeof t?{title:t.title,secondaryLabel:t.secondaryLabel}:{title:null!=t?t:""}},Q=d((e=>!!mv(a,(t=>vv(t,e)))),[a]),Z=gd((()=>null==M?void 0:M(R))),X=gd((()=>null==n?void 0:n.filter((e=>{const{title:t,secondaryLabel:r}=G(e),n=R.trim().toLowerCase();return t.toLowerCase().includes(n)||r&&r.toLowerCase().includes(n)})))),J=(e,t)=>{q&&!Q(e)||(B(t),null==w||w(e,(e=>D?D(e):e)(e)))},ee=e=>{const t=e.target.value;z(t),null==A||A()},te=()=>{var e;z(""),null===(e=U.current)||void 0===e||e.focus(),null==A||A()},re=()=>{null==S||S()};md("keydown",(e=>{var t,r;switch(e.code){case"ArrowDown":if(e.preventDefault(),j<P.length-1){const e=j+1;null===(t=Y.current[e])||void 0===t||t.focus(),B(e)}break;case"ArrowUp":if(e.preventDefault(),j>0){const e=j-1;null===(r=Y.current[e])||void 0===r||r.focus(),B(e)}else 0===j&&U.current&&(U.current.focus(),B(-1));break;case"Space":case"Enter":document.activeElement===Y.current[j]&&(e.preventDefault(),P[j]&&J(P[j],j))}})),c((()=>{var e;if(!x)return void(null===(e=K.current)||void 0===e||e.scrollTo({top:0}));const t=setTimeout((()=>{if(!n)return;const e=n.indexOf(x);K.current&&-1!==e&&(K.current.scrollToIndex({index:e}),B(e))}),0);return()=>clearTimeout(t)}),[Y,n,B,x]),c((()=>{var e,t,r;if(H)return;if(l||!n)return;const o=n.findIndex((e=>Q(e)));U.current?(B(-1),setTimeout((()=>{var e;return null===(e=U.current)||void 0===e?void 0:e.focus()}),200)):j>0?(null===(e=K.current)||void 0===e||e.scrollToIndex({index:j,align:"center"}),setTimeout((()=>{var e;return null===(e=Y.current[j])||void 0===e?void 0:e.focus()}),200)):-1!==o?(null===(t=K.current)||void 0===t||t.scrollToIndex({index:o,align:"center"}),B(o),setTimeout((()=>{var e;return null===(e=Y.current[o])||void 0===e?void 0:e.focus()}),200)):(null===(r=K.current)||void 0===r||r.scrollToIndex({index:0}),B(0),setTimeout((()=>{var e;return null===(e=Y.current[0])||void 0===e?void 0:e.focus()}),200))}),[Q,l,j,n,H,B]),c((()=>{H&&N&&(l||"success"===u&&U.current&&(B(-1),U.current.focus()))}),[H,N,u,B,l]),c((()=>{var e;L(null!==(e=""===R?n:M?Z():X())&&void 0!==e?e:[])}),[Z,X,n,M,R]);const ne=e=>o?t(q&&!e?oE:e?rE:nE,{"aria-hidden":!0}):e?t(eE,{"aria-hidden":!0}):t(tE,{}),oe=(e,r)=>{const{title:n,secondaryLabel:o}=G(e);return t(hC,{displayType:p,label:n,maxLines:h,selected:r,disabled:!r&&q,sublabel:o,truncationType:f,variant:m})},ie=(n,i)=>{if(!S||"success"===u){const a=Q(n),s=i===j;return t(Jk,{"aria-selected":a,"aria-multiselectable":o,"aria-disabled":!a&&q,"data-testid":"list-item",onClick:()=>J(n,i),onMouseEnter:()=>(e=>{B(e)})(i),ref:e=>{Y.current[i]=e},role:"option",tabIndex:s?0:-1,$active:s,$selected:a,$disabled:!a&&q,children:E?E(n,{selected:a}):e(r,{children:[ne(a),oe(n,a)]})},((e,t)=>`item_${t}__${D?D(e):e}`)(n,i))}},ae=()=>{if(a&&o&&P.length>0&&!R&&"success"===u)return t(iE,{children:t(lE,{onClick:$,type:"button",$variant:m,children:i||0!==a.length?"Clear all":"Select all"})})},se=()=>{if(!F&&(R||!O)&&0===P.length&&"success"===u)return e(r,{children:[e(cE,{"data-testid":"list-no-results",children:[t(dE,{"data-testid":"no-result-icon"}),"No results found."]}),T&&t(fE,{"data-testid":"no-result-desc",children:T})]})},le=()=>{if(S&&"loading"===u)return e(cE,{"data-testid":"list-loading",children:[t(uE,{}),"Loading..."]})},ce=()=>{if(S&&"fail"===u)return e(cE,{"data-testid":"list-fail",children:[t(dE,{"data-testid":"load-error-icon"}),"Failed to load. ",t(sE,{onClick:re,type:"button",$variant:m,children:"Try again."})]})},de=()=>{var e;const r="test"===process.env.NODE_ENV;return t(Xk,{role:"listbox",id:v,children:t(vk,Object.assign({ref:K,style:{height:"100%"},data:P,customScrollParent:null!==(e=W.current)&&void 0!==e?e:void 0,itemContent:(e,t)=>ie(t,e)},r?{initialItemCount:P.length}:{}),r?P.length:void 0)})};return e(Qk,{"data-testid":"dropdown-container",ref:W,$width:y,$variant:m,children:[e(Zk,{ref:V,"data-testid":"dropdown-list",children:[(()=>{if((O||M)&&"success"===u)return t(vE,{ref:U,onChange:ee,value:R,placeholder:I,"data-testid":"search-input","aria-label":"Enter text to search",onClear:te,variant:m})})(),ae(),se(),le(),ce(),de()]}),(()=>{if(_)return t("div",{"data-testid":"custom-cta",children:_(C,P)})})()]})},xE=E(oh)`
    display: flex;
    align-items: center;
    gap: ${Gi["spacing-8"]};
    width: 100%;
    height: calc(3rem - 2px); // exclude top and bottom borders
    padding: ${Gi["spacing-16"]};

    ${e=>"small"===e.$variant?Ui["body-md-regular"]:Ui["body-baseline-regular"]}

    :disabled {
        cursor: not-allowed;
    }
`,wE=E.div`
    display: flex;
    align-items: center;
    transform: rotate(${e=>e.$expanded?180:0}deg);
    transition: transform ${Ki["duration-250"]} ${Ki["ease-default"]};

    svg {
        color: ${Yi.icon};
        height: 1em;
        width: 1em;
    }
`,$E=u((({children:r,disabled:n,expanded:o,listboxId:i,popupRole:a,readOnly:s,variant:l},c)=>e(xE,{ref:c,type:"button","aria-expanded":o,"aria-haspopup":a,"data-testid":"selector",disabled:n,"aria-controls":i,$variant:l,children:[r,!s&&t(wE,{$expanded:o,$variant:l,children:t(re,{"aria-hidden":!0})})]})));var CE=Symbol.for("immer-nothing"),SE=Symbol.for("immer-draftable"),DE=Symbol.for("immer-state"),kE="production"!==process.env.NODE_ENV?[function(e){return`The plugin for '${e}' has not been loaded into Immer. To enable the plugin, import and call \`enable${e}()\` when initializing your application.`},function(e){return`produce can only be called on things that are draftable: plain objects, arrays, Map, Set or classes that are marked with '[immerable]: true'. Got '${e}'`},"This object has been frozen and should not be mutated",function(e){return"Cannot use a proxy that has been revoked. Did you pass an object from inside an immer function to an async process? "+e},"An immer producer returned a new value *and* modified its draft. Either return a new value *or* modify the draft.","Immer forbids circular references","The first or second argument to `produce` must be a function","The third argument to `produce` must be a function or undefined","First argument to `createDraft` must be a plain object, an array, or an immerable object","First argument to `finishDraft` must be a draft returned by `createDraft`",function(e){return`'current' expects a draft, got: ${e}`},"Object.defineProperty() cannot be used on an Immer draft","Object.setPrototypeOf() cannot be used on an Immer draft","Immer only supports deleting array indices","Immer only supports setting array indices and the 'length' property",function(e){return`'original' expects a draft, got: ${e}`}]:[];function EE(e,...t){if("production"!==process.env.NODE_ENV){const r=kE[e],n="function"==typeof r?r.apply(null,t):r;throw new Error(`[Immer] ${n}`)}throw new Error(`[Immer] minified error nr: ${e}. Full error at: https://bit.ly/3cXEKWf`)}var _E=Object.getPrototypeOf;function OE(e){return!!e&&!!e[DE]}function FE(e){return!!e&&(IE(e)||Array.isArray(e)||!!e[SE]||!!e.constructor?.[SE]||RE(e)||zE(e))}var TE=Object.prototype.constructor.toString();function IE(e){if(!e||"object"!=typeof e)return!1;const t=_E(e);if(null===t)return!0;const r=Object.hasOwnProperty.call(t,"constructor")&&t.constructor;return r===Object||"function"==typeof r&&Function.toString.call(r)===TE}function ME(e,t){0===AE(e)?Reflect.ownKeys(e).forEach((r=>{t(r,e[r],e)})):e.forEach(((r,n)=>t(n,r,e)))}function AE(e){const t=e[DE];return t?t.type_:Array.isArray(e)?1:RE(e)?2:zE(e)?3:0}function jE(e,t){return 2===AE(e)?e.has(t):Object.prototype.hasOwnProperty.call(e,t)}function BE(e,t,r){const n=AE(e);2===n?e.set(t,r):3===n?e.add(r):e[t]=r}function RE(e){return e instanceof Map}function zE(e){return e instanceof Set}function PE(e){return e.copy_||e.base_}function LE(e,t){if(RE(e))return new Map(e);if(zE(e))return new Set(e);if(Array.isArray(e))return Array.prototype.slice.call(e);const r=IE(e);if(!0===t||"class_only"===t&&!r){const t=Object.getOwnPropertyDescriptors(e);delete t[DE];let r=Reflect.ownKeys(t);for(let n=0;n<r.length;n++){const o=r[n],i=t[o];!1===i.writable&&(i.writable=!0,i.configurable=!0),(i.get||i.set)&&(t[o]={configurable:!0,writable:!0,enumerable:i.enumerable,value:e[o]})}return Object.create(_E(e),t)}{const t=_E(e);if(null!==t&&r)return{...e};const n=Object.create(t);return Object.assign(n,e)}}function NE(e,t=!1){return WE(e)||OE(e)||!FE(e)||(AE(e)>1&&(e.set=e.add=e.clear=e.delete=HE),Object.freeze(e),t&&Object.entries(e).forEach((([e,t])=>NE(t,!0)))),e}function HE(){EE(2)}function WE(e){return Object.isFrozen(e)}var VE,YE={};function UE(e){const t=YE[e];return t||EE(0,e),t}function KE(){return VE}function qE(e,t){t&&(UE("Patches"),e.patches_=[],e.inversePatches_=[],e.patchListener_=t)}function GE(e){QE(e),e.drafts_.forEach(XE),e.drafts_=null}function QE(e){e===VE&&(VE=e.parent_)}function ZE(e){return VE={drafts_:[],parent_:VE,immer_:e,canAutoFreeze_:!0,unfinalizedDrafts_:0}}function XE(e){const t=e[DE];0===t.type_||1===t.type_?t.revoke_():t.revoked_=!0}function JE(e,t){t.unfinalizedDrafts_=t.drafts_.length;const r=t.drafts_[0];return void 0!==e&&e!==r?(r[DE].modified_&&(GE(t),EE(4)),FE(e)&&(e=e_(t,e),t.parent_||r_(t,e)),t.patches_&&UE("Patches").generateReplacementPatches_(r[DE].base_,e,t.patches_,t.inversePatches_)):e=e_(t,r,[]),GE(t),t.patches_&&t.patchListener_(t.patches_,t.inversePatches_),e!==CE?e:void 0}function e_(e,t,r){if(WE(t))return t;const n=t[DE];if(!n)return ME(t,((o,i)=>t_(e,n,t,o,i,r))),t;if(n.scope_!==e)return t;if(!n.modified_)return r_(e,n.base_,!0),n.base_;if(!n.finalized_){n.finalized_=!0,n.scope_.unfinalizedDrafts_--;const t=n.copy_;let o=t,i=!1;3===n.type_&&(o=new Set(t),t.clear(),i=!0),ME(o,((o,a)=>t_(e,n,t,o,a,r,i))),r_(e,t,!1),r&&e.patches_&&UE("Patches").generatePatches_(n,r,e.patches_,e.inversePatches_)}return n.copy_}function t_(e,t,r,n,o,i,a){if("production"!==process.env.NODE_ENV&&o===r&&EE(5),OE(o)){const a=e_(e,o,i&&t&&3!==t.type_&&!jE(t.assigned_,n)?i.concat(n):void 0);if(BE(r,n,a),!OE(a))return;e.canAutoFreeze_=!1}else a&&r.add(o);if(FE(o)&&!WE(o)){if(!e.immer_.autoFreeze_&&e.unfinalizedDrafts_<1)return;e_(e,o),t&&t.scope_.parent_||"symbol"==typeof n||!Object.prototype.propertyIsEnumerable.call(r,n)||r_(e,o)}}function r_(e,t,r=!1){!e.parent_&&e.immer_.autoFreeze_&&e.canAutoFreeze_&&NE(t,r)}var n_={get(e,t){if(t===DE)return e;const r=PE(e);if(!jE(r,t))return function(e,t,r){const n=a_(t,r);return n?"value"in n?n.value:n.get?.call(e.draft_):void 0}(e,r,t);const n=r[t];return e.finalized_||!FE(n)?n:n===i_(e.base_,t)?(l_(e),e.copy_[t]=c_(n,e)):n},has:(e,t)=>t in PE(e),ownKeys:e=>Reflect.ownKeys(PE(e)),set(e,t,r){const n=a_(PE(e),t);if(n?.set)return n.set.call(e.draft_,r),!0;if(!e.modified_){const n=i_(PE(e),t),o=n?.[DE];if(o&&o.base_===r)return e.copy_[t]=r,e.assigned_[t]=!1,!0;if(function(e,t){return e===t?0!==e||1/e==1/t:e!=e&&t!=t}(r,n)&&(void 0!==r||jE(e.base_,t)))return!0;l_(e),s_(e)}return e.copy_[t]===r&&(void 0!==r||t in e.copy_)||Number.isNaN(r)&&Number.isNaN(e.copy_[t])||(e.copy_[t]=r,e.assigned_[t]=!0),!0},deleteProperty:(e,t)=>(void 0!==i_(e.base_,t)||t in e.base_?(e.assigned_[t]=!1,l_(e),s_(e)):delete e.assigned_[t],e.copy_&&delete e.copy_[t],!0),getOwnPropertyDescriptor(e,t){const r=PE(e),n=Reflect.getOwnPropertyDescriptor(r,t);return n?{writable:!0,configurable:1!==e.type_||"length"!==t,enumerable:n.enumerable,value:r[t]}:n},defineProperty(){EE(11)},getPrototypeOf:e=>_E(e.base_),setPrototypeOf(){EE(12)}},o_={};function i_(e,t){const r=e[DE];return(r?PE(r):e)[t]}function a_(e,t){if(!(t in e))return;let r=_E(e);for(;r;){const e=Object.getOwnPropertyDescriptor(r,t);if(e)return e;r=_E(r)}}function s_(e){e.modified_||(e.modified_=!0,e.parent_&&s_(e.parent_))}function l_(e){e.copy_||(e.copy_=LE(e.base_,e.scope_.immer_.useStrictShallowCopy_))}ME(n_,((e,t)=>{o_[e]=function(){return arguments[0]=arguments[0][0],t.apply(this,arguments)}})),o_.deleteProperty=function(e,t){return"production"!==process.env.NODE_ENV&&isNaN(parseInt(t))&&EE(13),o_.set.call(this,e,t,void 0)},o_.set=function(e,t,r){return"production"!==process.env.NODE_ENV&&"length"!==t&&isNaN(parseInt(t))&&EE(14),n_.set.call(this,e[0],t,r,e[0])};function c_(e,t){const r=RE(e)?UE("MapSet").proxyMap_(e,t):zE(e)?UE("MapSet").proxySet_(e,t):function(e,t){const r=Array.isArray(e),n={type_:r?1:0,scope_:t?t.scope_:KE(),modified_:!1,finalized_:!1,assigned_:{},parent_:t,base_:e,draft_:null,copy_:null,revoke_:null,isManual_:!1};let o=n,i=n_;r&&(o=[n],i=o_);const{revoke:a,proxy:s}=Proxy.revocable(o,i);return n.draft_=s,n.revoke_=a,s}(e,t);return(t?t.scope_:KE()).drafts_.push(r),r}function d_(e){if(!FE(e)||WE(e))return e;const t=e[DE];let r;if(t){if(!t.modified_)return t.base_;t.finalized_=!0,r=LE(e,t.scope_.immer_.useStrictShallowCopy_)}else r=LE(e,!0);return ME(r,((e,t)=>{BE(r,e,d_(t))})),t&&(t.finalized_=!1),r}var u_=new class{constructor(e){this.autoFreeze_=!0,this.useStrictShallowCopy_=!1,this.produce=(e,t,r)=>{if("function"==typeof e&&"function"!=typeof t){const r=t;t=e;const n=this;return function(e=r,...o){return n.produce(e,(e=>t.call(this,e,...o)))}}let n;if("function"!=typeof t&&EE(6),void 0!==r&&"function"!=typeof r&&EE(7),FE(e)){const o=ZE(this),i=c_(e,void 0);let a=!0;try{n=t(i),a=!1}finally{a?GE(o):QE(o)}return qE(o,r),JE(n,o)}if(!e||"object"!=typeof e){if(n=t(e),void 0===n&&(n=e),n===CE&&(n=void 0),this.autoFreeze_&&NE(n,!0),r){const t=[],o=[];UE("Patches").generateReplacementPatches_(e,n,t,o),r(t,o)}return n}EE(1,e)},this.produceWithPatches=(e,t)=>{if("function"==typeof e)return(t,...r)=>this.produceWithPatches(t,(t=>e(t,...r)));let r,n;const o=this.produce(e,t,((e,t)=>{r=e,n=t}));return[o,r,n]},"boolean"==typeof e?.autoFreeze&&this.setAutoFreeze(e.autoFreeze),"boolean"==typeof e?.useStrictShallowCopy&&this.setUseStrictShallowCopy(e.useStrictShallowCopy)}createDraft(e){FE(e)||EE(8),OE(e)&&(e=function(e){OE(e)||EE(10,e);return d_(e)}(e));const t=ZE(this),r=c_(e,void 0);return r[DE].isManual_=!0,QE(t),r}finishDraft(e,t){const r=e&&e[DE];r&&r.isManual_||EE(9);const{scope_:n}=r;return qE(n,t),JE(void 0,n)}setAutoFreeze(e){this.autoFreeze_=e}setUseStrictShallowCopy(e){this.useStrictShallowCopy_=e}applyPatches(e,t){let r;for(r=t.length-1;r>=0;r--){const n=t[r];if(0===n.path.length&&"replace"===n.op){e=n.value;break}}r>-1&&(t=t.slice(r+1));const n=UE("Patches").applyPatches_;return OE(e)?n(e,t):this.produce(e,(e=>n(e,t)))}},f_=u_.produce;u_.produceWithPatches.bind(u_),u_.setAutoFreeze.bind(u_),u_.setUseStrictShallowCopy.bind(u_),u_.applyPatches.bind(u_),u_.createDraft.bind(u_),u_.finishDraft.bind(u_);var h_=um,p_=Wm,g_=Ig,m_=fr,b_=pm,v_=jg,y_=am,x_=Qg,w_=Object.prototype.hasOwnProperty;var $_=function(e){if(null==e)return!0;if(b_(e)&&(m_(e)||"string"==typeof e||"function"==typeof e.splice||v_(e)||x_(e)||g_(e)))return!e.length;var t=p_(e);if("[object Map]"==t||"[object Set]"==t)return!e.size;if(y_(e))return!h_(e).length;for(var r in e)if(w_.call(e,r))return!1;return!0},C_=Be($_);const S_=(e,t,r)=>{const n=f_(e,(e=>{for(let n=e.length-1;n>=0;n--){const o=e[n],i=k_(o.keyPath);if(o.checked=t.has(i),o.hasSubItems&&r&&!0!==o.checked){const t=o.subItemIndexes.map((t=>e[t])),r=t.every((e=>!0===e.checked)),n=t.some((e=>!1!==e.checked));r?o.checked=!0:n&&(o.checked="mixed")}}}));return n},D_=(e,t)=>{const[r,...n]=t;if(C_(e)||C_(r))return;const o=e.find((e=>e.key===r));return o&&n.length?D_(o.subItems,n):o},k_=e=>e.join(","),E_=e=>new Set(e.map((e=>e.join(",")))),__=E.li`
    display: ${e=>e.$visible?"flex":"none"};
`,O_=E.div`
    flex: 1;
    display: flex;
    align-items: flex-start;
    gap: ${Gi["spacing-8"]};
    padding: ${Gi["spacing-12"]} ${Gi["spacing-8"]};
    cursor: ${e=>e.$toggleable?"default":"pointer"};
    overflow: hidden; // required for label to truncate properly

    outline: none;

    ${e=>e.$active&&_`
            background: ${Yi["bg-hover"]};
        `}
`,F_=E.div`
    height: 1px;
    width: calc((1lh + ${Gi["spacing-8"]}) * ${e=>e.$level});
`,T_=E.div`
    width: 1lh;
    height: 1lh;
    color: ${Yi["icon-primary"]};
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
`,I_=E.div`
    width: 1lh;
    height: 1lh;
    margin-right: ${Gi["spacing-8"]};
`,M_=E.div`
    flex-shrink: 0;
    height: 1lh;
    width: ${e=>e.$hasNestedSiblings?"1lh":Gi["spacing-16"]};

    display: flex;
    justify-content: center;
`,A_=E(Se)`
    flex-shrink: 0;
    height: 1lh;
    width: 1lh;
    color: ${Yi["icon-selected"]};
`,j_=({listItems:n,multiSelect:o=!1,selectedKeyPaths:i,itemsLoadState:l="success",itemTruncationType:d="end",itemMaxLines:u=2,variant:f="default",listboxId:h,width:p,mode:m="default",selectableCategory:b,onSelectItem:v,onSelectAll:y,onRetry:x,enableSearch:w,hideNoResultsDisplay:$,noResultsDescription:C,searchPlaceholder:S="Search",onSearch:D})=>{const k=o||b,[E,_]=g(""),O=E.toLowerCase().trim(),[F,T]=g(!1),I=s(null),M=s(null),A=s([]),j=s(null),B=bd(),[R,z]=g([]),[P,L]=g([]),N=F?P:R,H=a((()=>{let e=0;for(const t of R)t.level>e&&(e=t.level);return e}),[R]),[W,V]=g(0),[Y,U]=g([]),[K,q]=g(0),G=e=>{const t=e.target.value;_(t),""===t?T(!1):t.trim().length>=3&&T(!0),null==D||D()},Q=()=>{var e;_(""),T(!1),null===(e=j.current)||void 0===e||e.focus(),null==D||D()},Z=()=>{null==x||x()},X=()=>{if(0===i.size){const e=[],t=[];R.forEach((r=>{r.hasSubItems||(e.push(r.keyPath),t.push(r))})),null==y||y(e,t)}else null==y||y([],[])},J=gd(((e,t)=>((e,t,r,n,o)=>{const i=[],a=(e,s)=>{const l=[],c=e.some((e=>{var t;return null===(t=e.subItems)||void 0===t?void 0:t.length}));return e.forEach(((d,u)=>{var f,h;const p=s?s.level+1:0,g=s?[...s.keyPath,d.key]:[d.key],m=k_(g),b={item:d,index:i.length,indexInParent:u,parentSetSize:e.length,keyPath:g,parentIndex:s?s.index:-1,parentKeyPath:s?s.keyPath:[],level:p,visible:0===p||o||(null==s?void 0:s.expanded)||!1,expanded:o,checked:t.has(m),hasSubItems:!!(null===(f=d.subItems)||void 0===f?void 0:f.length),subItemIndexes:[],hasNestedSiblings:c,matched:!!n&&-1!==d.label.toLowerCase().indexOf(n),hasMatchedSubItems:!1};if(l.push(b),i.push(b),null===(h=d.subItems)||void 0===h?void 0:h.length){const e=a(d.subItems,b);if(r&&!0!==b.checked){const t=e.every((e=>!0===e.checked)),r=e.some((e=>!1!==e.checked));t?b.checked=!0:r&&(b.checked="mixed")}b.hasMatchedSubItems=e.some((e=>e.matched||e.hasMatchedSubItems)),b.subItemIndexes=e.map((e=>e.index))}})),l};return a(e,void 0),i})(e,i,o,O,t))),ee=gd((e=>{return i.size?(t=J(e,!1),f_(t,(e=>{const t=e.filter((e=>!0===e.checked));for(const r of t){let t=r.parentIndex;for(;t>=0;){const r=e[t];r.visible=!0,r.expanded=!0;for(const t of r.subItemIndexes)e[t].visible=!0;t=r.parentIndex}}}))):(e=>f_(e,(e=>{const t=e.findIndex((e=>e.hasSubItems));if(t<0)return;let r=t,n=0;for(let t=r;t<e.length;t++){const o=e[t].keyPath.length;if(o>n)n=o;else if(o<n)break;r=t,e[t].visible=!0,e[t].expanded=!0}for(let t=0;t<e.length;t++){const n=e[t],o=n.keyPath.slice(0,-1),i=e[r].keyPath.slice(0,o.length);vv(o,i)&&(n.visible=!0)}return e})))(J(e,!1));var t})),te=gd((e=>{const t=e=>{const r=[];for(const n of e){if(-1!==n.label.toLowerCase().indexOf(O))r.push(n);else if(n.subItems){const e=t(n.subItems);if(e.length>0){r.push(Object.assign(Object.assign({},n),{subItems:e}));continue}}}return r};return t(e)})),re=gd((()=>{z((e=>S_(e,i,o))),F&&L((e=>S_(e,i,o)))})),ne=(e,t,r)=>{const n=((e,t,r)=>f_(e,(e=>{e[t].expanded=r;const n=e[t].keyPath;for(let o=t+1;o<e.length;o++){const t=e[o],i=e[t.parentIndex],a=t.keyPath.slice(0,n.length);if(!vv(n,a))break;t.visible=r&&i.expanded&&i.visible}})))(N,e,t);V(e),q(r),F?L(n):z(n)};md("keydown",(e=>{var t,r;switch(e.code){case"ArrowDown":{e.preventDefault();const r=((e,t,r)=>{for(let n=r;n<e.length;n++)if(t(e[n]))return e[n]})(N,(e=>e.visible),W+1);r&&(q((e=>e+1)),V(r.index),null===(t=A.current[r.index])||void 0===t||t.focus());break}case"ArrowUp":{e.preventDefault();const t=((e,t,r)=>{for(let n=r;n>=0;n--)if(t(e[n]))return e[n]})(N,(e=>e.visible),W-1);t?(q((e=>e-1)),V(t.index),null===(r=A.current[t.index])||void 0===r||r.focus()):0===K&&j.current&&(j.current.focus(),q(-1),V(-1));break}case"ArrowRight":e.preventDefault(),ne(W,!0,K);break;case"ArrowLeft":e.preventDefault(),ne(W,!1,K);break;case"Space":if(document.activeElement===A.current[W]){e.preventDefault();const t=N[W];if(t.hasSubItems&&!k)return;null==v||v(t)}}})),c((()=>{let e=[];"default"===m?e=ee(n):"expand"===m?e=J(n,!0):"collapse"===m&&(e=J(n,!1)),z(e)}),[J,ee,n,m]),c((()=>{U(N.filter((e=>e.visible)))}),[F,N]),c((()=>{re()}),[o,i,re]),c((()=>{if(F&&E.trim().length>=3){const e=te(n),t=(e=>f_(e,(e=>{for(const t of e)if(t.matched&&(t.visible=!0),t.hasMatchedSubItems){t.visible=!0,t.expanded=!0;for(const r of t.subItemIndexes)e[r].visible=!0}})))(J(e,!1));L(t)}}),[te,J,n,F,E]),c((()=>{B||(j.current?(V(-1),q(-1),setTimeout((()=>{var e;return null===(e=j.current)||void 0===e?void 0:e.focus()}),200)):A.current[W]?setTimeout((()=>{var e;return null===(e=A.current[W])||void 0===e?void 0:e.focus()}),200):(V(0),q(0),setTimeout((()=>{var e;return null===(e=A.current[0])||void 0===e?void 0:e.focus()}),200)))}),[W,K,B]);const oe=()=>{if(w&&"success"===l)return t(vE,{ref:j,onChange:G,value:E,placeholder:S,"data-testid":"search-input","aria-label":"Enter text to search",onClear:Q,variant:f})},ie=()=>{if(o&&!F&&R.length>0&&"success"===l)return t(iE,{children:t(lE,{onClick:X,type:"button",$variant:f,children:0===i.size?"Select all":"Clear all"})})},ae=()=>{if(!$&&F&&0===P.length&&"success"===l)return e(r,{children:[e(cE,{"data-testid":"list-no-results",children:[t(dE,{"data-testid":"no-result-icon"}),"No results found."]}),C&&t(fE,{"data-testid":"no-result-desc",children:C})]})},se=()=>{if(x&&"loading"===l)return e(cE,{"data-testid":"list-loading",children:[t(Qu,{}),"Loading..."]})},le=()=>{if(x&&"fail"===l)return e(cE,{"data-testid":"list-fail",children:[t(dE,{"data-testid":"load-error-icon"}),"Failed to load. ",t(sE,{onClick:Z,type:"button",$variant:f,children:"Try again."})]})},ce=e=>{if(o)switch(e.checked){case"mixed":return t(A_,{"aria-hidden":!0});case!0:return t(rE,{"aria-hidden":!0});default:return t(nE,{"aria-hidden":!0})}if(!e.hasSubItems)return t(M_,{$hasNestedSiblings:e.hasNestedSiblings||0===e.level,children:e.checked&&t(eE,{"aria-hidden":!0})})},de=(r,n)=>{const{level:i,visible:a,expanded:s,keyPath:l,checked:c,hasSubItems:f,indexInParent:h,parentSetSize:p}=r,g=r.index,m=K===n,b=f&&!k;return e(__,{$visible:a,children:[H>0&&t(F_,{$level:i}),H>0&&!f&&o&&t(I_,{}),e(O_,{"aria-checked":c,"aria-selected":!!c,"aria-expanded":f?s:void 0,"aria-level":i+1,"aria-posinset":h+1,"aria-setsize":p,"data-testid":"list-item",onClick:e=>{e.stopPropagation(),b?ne(g,!s,n):((e,t)=>{q(t),V(e),null==v||v(N[e])})(g,n)},onMouseEnter:()=>((e,t)=>{V(t.index),q(e)})(n,r),ref:e=>A.current[r.index]=e,role:"treeitem",tabIndex:m?0:-1,$active:m,$toggleable:b,children:[f&&t(T_,{"data-testid":"toggle-category-button",onClick:e=>{e.stopPropagation(),ne(g,!s,n)},$expanded:s,children:t(Ce,{})}),ce(r),t(hC,{bold:f,searchTerm:F?O:void 0,label:r.item.label,selected:!!c,truncationType:d,maxLines:u})]})]},`[${l.join("---")}]`)},ue=()=>{var e;const r="test"===process.env.NODE_ENV;return t("div",{"aria-multiselectable":o,id:h,ref:M,role:"tree",children:t(vk,Object.assign({style:{height:"100%"},customScrollParent:null!==(e=I.current)&&void 0!==e?e:void 0,data:Y,itemContent:(e,t)=>de(t,e)},r?{initialItemCount:Y.length}:{}),r?Y.length:void 0)})};return t(Qk,{"data-testid":"dropdown-container",ref:I,$width:p,$variant:f,children:e(Zk,{"data-testid":"nested-dropdown-list",children:[oe(),ie(),ae(),se(),le(),ue()]})})},B_=({selectedOptions:e,placeholder:r="Select",options:n,disabled:o,error:i,className:a,"data-testid":l,id:d,enableSearch:u=!1,searchFunction:f,searchPlaceholder:h,valueExtractor:p,listExtractor:m,onSelectOptions:b,onShowOptions:v,onHideOptions:y,onRetry:x,optionsLoadState:w="success",optionTruncationType:$="end",renderListItem:C,hideNoResultsDisplay:S,noResultsDescription:D,renderCustomCallToAction:k,onBlur:E,variant:_="default",readOnly:O,alignment:F,dropdownZIndex:T,maxSelectable:I,dropdownRootNode:M})=>{const[A,j]=g(e||[]),[B,R]=g(!1),[z,P]=g(!1),[L]=g((()=>hd.generate())),N=s(null),H=s(null);c((()=>{j(e||[])}),[e]);const W=()=>{A&&A.length>0||I?(j([]),G([])):(j(n),G(n))},V=(e,t)=>{const r=[...A],n=gv(A,(e=>(p?p(e):e)===t));n>-1?r.splice(n,1):r.push(e),j(r),G(r)},Y=()=>{B&&(R(!1),q(!1))},U=()=>{z||B||P(!0)},K=e=>{z&&!B&&N.current&&!N.current.contains(e.relatedTarget)&&(P(!1),null==E||E())},q=e=>{!e&&y&&y(),e&&v&&v()},G=e=>{b&&b(e)};return t(Gk,{children:t(_u,{enabled:!O&&!o,isOpen:B,renderElement:()=>t(th,{className:a,"data-testid":l,id:d,ref:N,tabIndex:-1,onFocus:U,onBlur:K,$focused:z,$disabled:o,$readOnly:O,$error:i,children:t($E,{ref:H,disabled:o,expanded:B,listboxId:L,popupRole:"listbox",readOnly:O,variant:_,children:t($u,{$disabled:o,children:A&&0!==A.length?t(Cu,{$variant:_,children:n&&A.length===n.length?"All selected":`${A.length} selected`}):t(Su,{truncateType:$,$variant:_,children:r})})})}),renderDropdown:({elementWidth:e})=>t(yE,{listboxId:L,listItems:n,onSelectItem:V,onDismiss:Y,valueExtractor:p,listExtractor:m,enableSearch:u,searchFunction:f,searchPlaceholder:h,multiSelect:!0,maxSelectable:I,selectedItems:A,onSelectAll:W,onRetry:x,itemsLoadState:w,itemTruncationType:$,renderListItem:C,hideNoResultsDisplay:S,noResultsDescription:D,renderCustomCallToAction:k,variant:_,width:e}),onOpen:()=>{R(!0),q(!0),P(!0)},onClose:e=>{R(!1),q(!1),"click"!==e&&(P(!1),null==E||E())},onDismiss:()=>{var e;null===(e=H.current)||void 0===e||e.focus(),R(!1),q(!1)},clickToToggle:!0,offset:8,alignment:F,fitAvailableHeight:!0,customZIndex:T,rootNode:M})})},R_=(e,t)=>{const[r,...n]=t;if(C_(e)||!r)return;const o=e.find((e=>e.key===r));return o?n.length?R_(o.subItems,n):o:void 0},z_=(e,t)=>{const r=[];for(const n of e)n.subItems?r.push(...z_(n.subItems,[...t,n.key])):r.push({value:n.value,label:n.label,keyPath:[...t,n.key]});return r},P_=({placeholder:e="Select",options:r,disabled:n,error:o,className:i,"data-testid":a,id:l,selectedKeyPaths:d,mode:u,valueToStringFunction:f,enableSearch:h,searchPlaceholder:p,hideNoResultsDisplay:m,noResultsDescription:b,readOnly:v,onSearch:y,onSelectOptions:x,onShowOptions:w,onHideOptions:$,onRetry:C,onBlur:S,optionsLoadState:D="success",optionTruncationType:k="end",variant:E="default",alignment:_,dropdownZIndex:O,dropdownRootNode:F})=>{const T=r,[I,M]=g(d?E_(d):new Set),[A,j]=g([]),[B,R]=g(!1),[z,P]=g(!1),[L]=g((()=>hd.generate())),N=s(null),H=s(null),W=s(null);c((()=>{const e=d||[],t=((e,t)=>{const r=[];for(let n=0;n<t.length;n++){const o=t[n],i=R_(e,o);i&&r.push({value:i.value,label:i.label,keyPath:o})}return r})(T,e);M(E_(e)),j(t)}),[d,T]);const V=(e,t)=>{const r=t.map((e=>({keyPath:e.keyPath,label:e.item.label,value:e.item.value})));M(E_(e)),j(r),Z(e,r)},Y=e=>{const t=X(e),r=t.map((e=>e.keyPath));j(t),M(E_(r)),Z(r,t)},U=()=>{z||B||P(!0)},K=e=>{z&&!B&&N.current&&!N.current.contains(e.relatedTarget)&&(P(!1),null==S||S())},q=()=>{if(A.length>1)return`${A.length} selected`;const{label:e,value:t}=A[0];return f?f(t):e},G=e=>{if("middle"===k){let t=0;return W&&W.current&&(t=W.current.getBoundingClientRect().width),pd.truncateOneLine(e,t,120,6)}return e},Q=e=>{!e&&$&&$(),e&&w&&w()},Z=(e,t)=>{if(x){const r=t.map((e=>e.value));x(e,r)}},X=e=>{if(!0===e.checked)return A.filter((t=>{const r=t.keyPath.slice(0,e.keyPath.length);return!vv(e.keyPath,r)}));{const t=[...A],r=e.hasSubItems?((e,t)=>{const r=R_(e,t);return r&&r.subItems?z_(r.subItems,t):[]})(T,e.keyPath):[{value:e.item.value,label:e.item.label,keyPath:e.keyPath}];return r.forEach((e=>{A.find((t=>vv(t.keyPath,e.keyPath)))||t.push(e)})),t}};return t(_u,{enabled:!v&&!n,isOpen:B,renderElement:()=>t(th,{className:i,"data-testid":a,id:l,ref:N,tabIndex:-1,onFocus:U,onBlur:K,$focused:z,$disabled:n,$readOnly:v,$error:o,children:t($E,{ref:H,disabled:n,expanded:B,listboxId:L,popupRole:"tree",readOnly:v,variant:E,children:t($u,{ref:W,$disabled:n,children:C_(A)?t(Su,{truncateType:k,children:e}):t(Cu,{truncateType:k,children:G(q())})})})}),renderDropdown:({elementWidth:e})=>t(j_,{listboxId:L,listItems:T,multiSelect:!0,selectedKeyPaths:I,itemsLoadState:D,itemTruncationType:k,enableSearch:h,searchPlaceholder:p,hideNoResultsDisplay:m,noResultsDescription:b,onSelectItem:Y,onSelectAll:V,onRetry:C,onSearch:y,variant:E,mode:u,width:e}),onOpen:()=>{R(!0),Q(!0),P(!0)},onClose:e=>{R(!1),Q(!1),"click"!==e&&(P(!1),null==S||S())},onDismiss:()=>{var e;null===(e=H.current)||void 0===e||e.focus(),R(!1),Q(!1)},clickToToggle:!0,offset:8,alignment:_,fitAvailableHeight:!0,customZIndex:O,rootNode:F})},L_=({placeholder:e="Select",options:r,disabled:n,error:o,className:i,"data-testid":a,id:l,selectedKeyPath:d,mode:u,valueToStringFunction:f,enableSearch:h,searchPlaceholder:p,selectableCategory:m,hideNoResultsDisplay:b,noResultsDescription:v,readOnly:y,onBlur:x,onSearch:w,onSelectOption:$,onShowOptions:C,onHideOptions:S,onRetry:D,optionsLoadState:k="success",optionTruncationType:E="end",variant:_="default",alignment:O,dropdownZIndex:F,dropdownRootNode:T})=>{const I=r,[M,A]=g(d?E_([d]):new Set),[j,B]=g(),[R,z]=g(!1),[P,L]=g(!1),[N]=g((()=>hd.generate())),H=s(null),W=s(null),V=s(null);c((()=>{A(d?E_([d]):new Set);const e=D_(I,d||[]);B(null!=e?e:void 0)}),[d,I]);const Y=e=>{var t;const{keyPath:r,item:{label:n,value:o}}=e;A(E_([r])),B({label:n,value:o}),z(!1),Q(!1),null===(t=W.current)||void 0===t||t.focus(),null==$||$(r,o)},U=()=>{P||R||L(!0)},K=e=>{P&&!R&&H.current&&!H.current.contains(e.relatedTarget)&&(L(!1),null==x||x())},q=()=>{if(!j)return"";const{label:e,value:t}=j;return f?f(t):e},G=e=>{if("middle"===E){let t=0;return V&&V.current&&(t=V.current.getBoundingClientRect().width),pd.truncateOneLine(e,t,120,6)}return e},Q=e=>{!e&&S&&S(),e&&C&&C()};return t(_u,{enabled:!y&&!n,isOpen:R,renderElement:()=>t(th,{className:i,"data-testid":a,id:l,ref:H,tabIndex:-1,onFocus:U,onBlur:K,$focused:P,$disabled:n,$readOnly:y,$error:o,children:t($E,{ref:W,disabled:n,expanded:R,listboxId:N,popupRole:"tree",readOnly:y,variant:_,children:t($u,{ref:V,$disabled:n,children:C_(j)?t(Su,{truncateType:E,children:e}):t(Cu,{truncateType:E,children:G(q())})})})}),renderDropdown:({elementWidth:e})=>t(j_,{listboxId:N,listItems:I,selectedKeyPaths:M,selectableCategory:m,itemsLoadState:k,itemTruncationType:E,enableSearch:h,searchPlaceholder:p,hideNoResultsDisplay:b,noResultsDescription:v,onSelectItem:Y,onRetry:D,onSearch:w,variant:_,mode:u,width:e}),onOpen:()=>{z(!0),Q(!0),L(!0)},onClose:e=>{z(!1),Q(!1),"click"!==e&&(L(!1),null==x||x())},onDismiss:()=>{var e;null===(e=W.current)||void 0===e||e.focus(),z(!1),Q(!1)},clickToToggle:!0,offset:8,alignment:O,fitAvailableHeight:!0,customZIndex:F,rootNode:T})};var N_=function(e,t,r,n){var o=-1,i=null==e?0:e.length;for(n&&i&&(r=e[++o]);++o<i;)r=t(r,e[o],o,e);return r};var H_=function(e){return function(t,r,n){for(var o=-1,i=Object(t),a=n(t),s=a.length;s--;){var l=a[e?s:++o];if(!1===r(i[l],l,i))break}return t}},W_=H_(),V_=vm;var Y_=pm;var U_=function(e,t){return function(r,n){if(null==r)return r;if(!Y_(r))return e(r,n);for(var o=r.length,i=t?o:-1,a=Object(r);(t?i--:++i<o)&&!1!==n(a[i],i,a););return r}}((function(e,t){return e&&W_(e,t,V_)}));var K_=N_,q_=U_,G_=Yb,Q_=function(e,t,r,n,o){return o(e,(function(e,o,i){r=n?(n=!1,e):t(r,e,o,i)})),r},Z_=fr;var X_=Be((function(e,t,r){var n=Z_(e)?K_:Q_,o=arguments.length<3;return n(e,G_(t),r,o,q_)}));const J_=[["Afghanistan",["asia"],"af","93"],["Albania",["europe"],"al","355"],["Algeria",["africa","north-africa"],"dz","213"],["Andorra",["europe"],"ad","376"],["Angola",["africa"],"ao","244"],["Antigua and Barbuda",["america","carribean"],"ag","1268"],["Argentina",["america","south-america"],"ar","54","(..) ........"],["Armenia",["asia","ex-ussr"],"am","374",".. ......"],["Aruba",["america","carribean"],"aw","297"],["Australia",["oceania"],"au","61","(..) .... ...."],["Austria",["europe","eu-union"],"at","43"],["Azerbaijan",["asia","ex-ussr"],"az","994","(..) ... .. .."],["Bahamas",["america","carribean"],"bs","1242"],["Bahrain",["middle-east"],"bh","973"],["Bangladesh",["asia"],"bd","880"],["Barbados",["america","carribean"],"bb","1246"],["Belarus",["europe","ex-ussr"],"by","375","(..) ... .. .."],["Belgium",["europe","eu-union"],"be","32","... .. .. .."],["Belize",["america","central-america"],"bz","501"],["Benin",["africa"],"bj","229"],["Bhutan",["asia"],"bt","975"],["Bolivia",["america","south-america"],"bo","591"],["Bosnia and Herzegovina",["europe","ex-yugos"],"ba","387"],["Botswana",["africa"],"bw","267"],["Brazil",["america","south-america"],"br","55","(..) ........."],["British Indian Ocean Territory",["asia"],"io","246"],["Brunei",["asia"],"bn","673"],["Bulgaria",["europe","eu-union"],"bg","359"],["Burkina Faso",["africa"],"bf","226"],["Burundi",["africa"],"bi","257"],["Cambodia",["asia"],"kh","855"],["Cameroon",["africa"],"cm","237"],["Canada",["america","north-america"],"ca","1","(...) ... ...."],["Cape Verde",["africa"],"cv","238"],["Caribbean Netherlands",["america","carribean"],"bq","599",""],["Central African Republic",["africa"],"cf","236"],["Chad",["africa"],"td","235"],["Chile",["america","south-america"],"cl","56"],["China",["asia"],"cn","86",".. ........."],["Colombia",["america","south-america"],"co","57","... ... ...."],["Comoros",["africa"],"km","269"],["Congo",["africa"],"cd","243"],["Congo",["africa"],"cg","242"],["Costa Rica",["america","central-america"],"cr","506",".... ...."],["Côte d’Ivoire",["africa"],"ci","225",".. .. .. .."],["Croatia",["europe","eu-union","ex-yugos"],"hr","385"],["Cuba",["america","carribean"],"cu","53"],["Curaçao",["america","carribean"],"cw","599",""],["Cyprus",["europe","eu-union"],"cy","357",".. ......"],["Czech Republic",["europe","eu-union"],"cz","420","... ... ..."],["Denmark",["europe","eu-union","baltic"],"dk","45",".. .. .. .."],["Djibouti",["africa"],"dj","253"],["Dominica",["america","carribean"],"dm","1767"],["Dominican Republic",["america","carribean"],"do","1",""],["Ecuador",["america","south-america"],"ec","593"],["Egypt",["africa","north-africa"],"eg","20"],["El Salvador",["america","central-america"],"sv","503",".... ...."],["Equatorial Guinea",["africa"],"gq","240"],["Eritrea",["africa"],"er","291"],["Estonia",["europe","eu-union","ex-ussr","baltic"],"ee","372",".... ......"],["Ethiopia",["africa"],"et","251"],["Fiji",["oceania"],"fj","679"],["Finland",["europe","eu-union","baltic"],"fi","358",".. ... .. .."],["France",["europe","eu-union"],"fr","33",". .. .. .. .."],["French Guiana",["america","south-america"],"gf","594"],["French Polynesia",["oceania"],"pf","689"],["Gabon",["africa"],"ga","241"],["Gambia",["africa"],"gm","220"],["Georgia",["asia","ex-ussr"],"ge","995"],["Germany",["europe","eu-union","baltic"],"de","49",".... ........"],["Ghana",["africa"],"gh","233"],["Greece",["europe","eu-union"],"gr","30"],["Grenada",["america","carribean"],"gd","1473"],["Guadeloupe",["america","carribean"],"gp","590","",0],["Guam",["oceania"],"gu","1671"],["Guatemala",["america","central-america"],"gt","502",".... ...."],["Guinea",["africa"],"gn","224"],["Guinea-Bissau",["africa"],"gw","245"],["Guyana",["america","south-america"],"gy","592"],["Haiti",["america","carribean"],"ht","509",".... ...."],["Honduras",["america","central-america"],"hn","504"],["Hong Kong",["asia"],"hk","852",".... ...."],["Hungary",["europe","eu-union"],"hu","36"],["Iceland",["europe"],"is","354","... ...."],["India",["asia"],"in","91","..... ....."],["Indonesia",["asia"],"id","62"],["Iran",["middle-east"],"ir","98","... ... ...."],["Iraq",["middle-east"],"iq","964"],["Ireland",["europe","eu-union"],"ie","353",".. ......."],["Israel",["middle-east"],"il","972","... ... ...."],["Italy",["europe","eu-union"],"it","39","... ......."],["Jamaica",["america","carribean"],"jm","1876"],["Japan",["asia"],"jp","81",".. .... ...."],["Jordan",["middle-east"],"jo","962"],["Kazakhstan",["asia","ex-ussr"],"kz","7","... ... .. .."],["Kenya",["africa"],"ke","254"],["Kiribati",["oceania"],"ki","686"],["Kosovo",["europe","ex-yugos"],"xk","383"],["Kuwait",["middle-east"],"kw","965"],["Kyrgyzstan",["asia","ex-ussr"],"kg","996","... ... ..."],["Laos",["asia"],"la","856"],["Latvia",["europe","eu-union","ex-ussr","baltic"],"lv","371",".. ... ..."],["Lebanon",["middle-east"],"lb","961"],["Lesotho",["africa"],"ls","266"],["Liberia",["africa"],"lr","231"],["Libya",["africa","north-africa"],"ly","218"],["Liechtenstein",["europe"],"li","423"],["Lithuania",["europe","eu-union","ex-ussr","baltic"],"lt","370"],["Luxembourg",["europe","eu-union"],"lu","352"],["Macau",["asia"],"mo","853"],["Macedonia",["europe","ex-yugos"],"mk","389"],["Madagascar",["africa"],"mg","261"],["Malawi",["africa"],"mw","265"],["Malaysia",["asia"],"my","60",".. .... ...."],["Maldives",["asia"],"mv","960"],["Mali",["africa"],"ml","223"],["Malta",["europe","eu-union"],"mt","356"],["Marshall Islands",["oceania"],"mh","692"],["Martinique",["america","carribean"],"mq","596"],["Mauritania",["africa"],"mr","222"],["Mauritius",["africa"],"mu","230"],["Mexico",["america","central-america"],"mx","52","... ... ...."],["Micronesia",["oceania"],"fm","691"],["Moldova",["europe"],"md","373","(..) .. .. .."],["Monaco",["europe"],"mc","377"],["Mongolia",["asia"],"mn","976"],["Montenegro",["europe","ex-yugos"],"me","382"],["Morocco",["africa","north-africa"],"ma","212"],["Mozambique",["africa"],"mz","258"],["Myanmar",["asia"],"mm","95"],["Namibia",["africa"],"na","264"],["Nauru",["africa"],"nr","674"],["Nepal",["asia"],"np","977"],["Netherlands",["europe","eu-union"],"nl","31",".. ........"],["New Caledonia",["oceania"],"nc","687"],["New Zealand",["oceania"],"nz","64","... ... ...."],["Nicaragua",["america","central-america"],"ni","505"],["Niger",["africa"],"ne","227"],["Nigeria",["africa"],"ng","234"],["North Korea",["asia"],"kp","850"],["Norway",["europe","baltic"],"no","47","... .. ..."],["Oman",["middle-east"],"om","968"],["Pakistan",["asia"],"pk","92","... ......."],["Palau",["oceania"],"pw","680"],["Palestine",["middle-east"],"ps","970"],["Panama",["america","central-america"],"pa","507"],["Papua New Guinea",["oceania"],"pg","675"],["Paraguay",["america","south-america"],"py","595"],["Peru",["america","south-america"],"pe","51"],["Philippines",["asia"],"ph","63",".... ......."],["Poland",["europe","eu-union","baltic"],"pl","48","... ... ..."],["Portugal",["europe","eu-union"],"pt","351"],["Puerto Rico",["america","carribean"],"pr","1",""],["Qatar",["middle-east"],"qa","974"],["Réunion",["africa"],"re","262"],["Romania",["europe","eu-union"],"ro","40"],["Russia",["europe","asia","ex-ussr","baltic"],"ru","7","(...) ... .. .."],["Rwanda",["africa"],"rw","250"],["Saint Kitts and Nevis",["america","carribean"],"kn","1869"],["Saint Lucia",["america","carribean"],"lc","1758"],["Saint Vincent and the Grenadines",["america","carribean"],"vc","1784"],["Samoa",["oceania"],"ws","685"],["San Marino",["europe"],"sm","378"],["São Tomé and Príncipe",["africa"],"st","239"],["Saudi Arabia",["middle-east"],"sa","966"],["Senegal",["africa"],"sn","221"],["Serbia",["europe","ex-yugos"],"rs","381"],["Seychelles",["africa"],"sc","248"],["Sierra Leone",["africa"],"sl","232"],["Singapore",["asia"],"sg","65",".... ...."],["Slovakia",["europe","eu-union"],"sk","421"],["Slovenia",["europe","eu-union","ex-yugos"],"si","386"],["Solomon Islands",["oceania"],"sb","677"],["Somalia",["africa"],"so","252"],["South Africa",["africa"],"za","27"],["South Korea",["asia"],"kr","82","... .... ...."],["South Sudan",["africa","north-africa"],"ss","211"],["Spain",["europe","eu-union"],"es","34","... ... ..."],["Sri Lanka",["asia"],"lk","94"],["Sudan",["africa"],"sd","249"],["Suriname",["america","south-america"],"sr","597"],["Swaziland",["africa"],"sz","268"],["Sweden",["europe","eu-union","baltic"],"se","46","(...) ... ..."],["Switzerland",["europe"],"ch","41",".. ... .. .."],["Syria",["middle-east"],"sy","963"],["Taiwan",["asia"],"tw","886"],["Tajikistan",["asia","ex-ussr"],"tj","992"],["Tanzania",["africa"],"tz","255"],["Thailand",["asia"],"th","66"],["Timor-Leste",["asia"],"tl","670"],["Togo",["africa"],"tg","228"],["Tonga",["oceania"],"to","676"],["Trinidad and Tobago",["america","carribean"],"tt","1868"],["Tunisia",["africa","north-africa"],"tn","216"],["Turkey",["europe"],"tr","90","... ... .. .."],["Turkmenistan",["asia","ex-ussr"],"tm","993"],["Tuvalu",["asia"],"tv","688"],["Uganda",["africa"],"ug","256"],["Ukraine",["europe","ex-ussr"],"ua","380","(..) ... .. .."],["United Arab Emirates",["middle-east"],"ae","971"],["United Kingdom",["europe","eu-union"],"gb","44",".... ......"],["United States",["america","north-america"],"us","1","(...) ... ...."],["Uruguay",["america","south-america"],"uy","598"],["Uzbekistan",["asia","ex-ussr"],"uz","998",".. ... .. .."],["Vanuatu",["oceania"],"vu","678"],["Vatican City",["europe"],"va","39",".. .... ...."],["Venezuela",["america","south-america"],"ve","58"],["Vietnam",["asia"],"vn","84"],["Yemen",["middle-east"],"ye","967"],["Zambia",["africa"],"zm","260"],["Zimbabwe",["africa"],"zw","263"]],eO=(e,t,r,n)=>r?e+"".padEnd(t.length,".")+" "+r:e+"".padEnd(t.length,".")+" "+n;var tO;!function(e){e.getCountries=()=>[].concat(...J_.map((e=>({name:e[0],regions:e[1],iso2:e[2],countryCode:e[3],format:eO("+",e[3],e[4],"... ... ... ... ..")})))),e.formatNumber=(e="",t)=>{if(!t)return e;const r=e.replace(/[\s()]+/g,""),{format:n}=t,o=n.split(" ");o.shift();const i=o.join(" ");return X_(i,((e,t)=>{if(0===e.remainingText.length)return e;if("."!==t)return{formattedText:e.formattedText+t,remainingText:e.remainingText};const r=e.remainingText.slice(0,1),n=e.remainingText.slice(1);return{formattedText:e.formattedText+r,remainingText:n}}),{formattedText:"",remainingText:r}).formattedText}}(tO||(tO={}));const rO=e=>{var{onChange:r,value:n,allowClear:o,onClear:i,onBlur:a,error:l,fixedCountry:d=!1,optionPlaceholder:u="Select",optionSearchPlaceholder:f,enableSearch:h,onHideOptions:p,onShowOptions:m,placeholder:b,autoComplete:v}=e,y=lt(e,["onChange","value","allowClear","onClear","onBlur","error","fixedCountry","optionPlaceholder","optionSearchPlaceholder","enableSearch","onHideOptions","onShowOptions","placeholder","autoComplete"]);const[x]=g(tO.getCountries()),[w,$]=g(void 0),[C,S]=g(""),D=s(null),k=vd({ref:D,formatter:e=>tO.formatNumber(e.replace(/[^0-9]/g,""),w)});c((()=>{const e=x.filter((e=>e.countryCode===nO(null==n?void 0:n.countryCode)))[0];$(e),S(tO.formatNumber(null==n?void 0:n.number,e))}),[n]);const E=e=>{O(C,e),r&&_(C,e)},_=(e,t)=>{const n=tO.formatNumber(e,t);null==r||r({number:n.replace(/[\s()]+/g,""),countryCode:t&&oO(t.countryCode)})},O=(e,t)=>{S(tO.formatNumber(e,t)),$(t)};return t(W$,Object.assign({ref:D,value:C,onChange:()=>{const e=k();if(!e)return;const{nextValue:t,updateCaretPosition:n}=e;n(),O(t,w),r&&_(t,w)},allowClear:o&&!!C,onClear:()=>{i?i():S("")},onBlur:a,error:l,placeholder:b,addon:d?{type:"label",attributes:{value:oO(null==w?void 0:w.countryCode)}}:{type:"list",attributes:{placeholder:u,options:x,selectedOption:w,enableSearch:h,searchPlaceholder:f,valueExtractor:e=>`+${e.countryCode}`,listExtractor:e=>({title:e.name,secondaryLabel:oO(e.countryCode)}),onSelectOption:E,onHideOptions:p,onShowOptions:m}},inputMode:"numeric",autoComplete:v},y))},nO=e=>e?e.replace("+",""):"",oO=e=>e?e.includes("+")?e:`+${e}`:"";var iO=mr,aO=zr,sO=function(){return iO.Date.now()},lO=av,cO=Math.max,dO=Math.min;var uO=Be((function(e,t,r){var n,o,i,a,s,l,c=0,d=!1,u=!1,f=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function h(t){var r=n,i=o;return n=o=void 0,c=t,a=e.apply(i,r)}function p(e){var r=e-l;return void 0===l||r>=t||r<0||u&&e-c>=i}function g(){var e=sO();if(p(e))return m(e);s=setTimeout(g,function(e){var r=t-(e-l);return u?dO(r,i-(e-c)):r}(e))}function m(e){return s=void 0,f&&n?h(e):(n=o=void 0,a)}function b(){var e=sO(),r=p(e);if(n=arguments,o=this,l=e,r){if(void 0===s)return function(e){return c=e,s=setTimeout(g,t),d?h(e):a}(l);if(u)return clearTimeout(s),s=setTimeout(g,t),h(l)}return void 0===s&&(s=setTimeout(g,t)),a}return t=lO(t)||0,aO(r)&&(d=!!r.leading,i=(u="maxWait"in r)?cO(lO(r.maxWait)||0,t):i,f="trailing"in r?!!r.trailing:f),b.cancel=function(){void 0!==s&&clearTimeout(s),c=0,n=l=o=s=void 0},b.flush=function(){return void 0===s?a:m(sO())},b}));const fO=({className:n,"data-testid":o,selectedOption:i,minimumCharacters:a=3,fetchOptions:l,placeholder:u="Enter here...",readOnly:f=!1,disabled:h=!1,error:p,valueExtractor:m,listExtractor:b,displayValueExtractor:v,onSelectOption:y})=>{const[x,w]=g((()=>i?W(i):"")),[$,C]=g((()=>i?W(i):"")),[S,D]=g([]),[k,E]=g(!0),[_,O]=g(!1),[F,T]=g(!!i),[I,M]=g(i),A=s(l),j=e=>ct(void 0,void 0,void 0,(function*(){O(!1),E(!0);try{const t=yield A.current(e);C(e),D(t),E(!1)}catch(e){O(!0)}})),B=d(uO((e=>j(e)),500,{leading:!1,trailing:!0}),[]);c((()=>{A.current=l}),[l]),c((()=>{x&&x.length>=a&&x!==$?B(x):B.cancel(),""===x&&I&&(y&&y(void 0,void 0),P(),M(void 0)),i&&x!==W(i)&&T(!1)}),[x,i]),c((()=>{w(i?W(i):""),P(i),M(i)}),[i]);const R=e=>{w(e.target.value)},z=(e,t)=>{y&&y(e,t)},P=e=>{C(e?W(e):""),T(!!e),D([]),E(!0)},L=()=>{w(""),y&&y(void 0,void 0),P()},N=()=>{F||I?(P(I),w(W(I)),y&&y(I,V(I)),M(I)):L()},H=()=>!!x&&x.length>=a&&!F,W=e=>e?v?v(e):e.toString():"",V=e=>{if(e)return m?m(e):e},Y=()=>t(Ip,{type:"text",value:x,onChange:R,placeholder:u,readOnly:f,disabled:h,allowClear:!0,onClear:L,styleType:"no-border",onBlur:x.length<a?N:void 0});return e(Du,{className:n,show:H(),error:p&&!H(),disabled:h,readOnly:f,testId:o,onBlur:N,children:[t(f?r:vu,{children:Y()}),!f&&H()&&t(wu,{}),t(_$,{listItems:S,onSelectItem:z,valueExtractor:m,listExtractor:b,itemsLoadState:_?"fail":k?"loading":"success",visible:H(),disableItemFocus:!0,onRetry:()=>j(x),itemTruncationType:"end",itemMaxLines:1,labelDisplayType:"next-line"})]})},hO=E.div`
    display: flex;
    position: relative;
    align-items: center;
    justify-content: space-between;
`,pO=E(_p)`
    position: absolute;
    right: 0;
    padding-left: ${Gi["spacing-8"]};
    margin-right: 0;
`,gO=E(bu)`
    // space for clear icon
    padding-right: calc(1.25rem + ${Gi["spacing-16"]});
`,mO=r=>{var{selectedOptions:n,placeholders:o={from:"Select",to:"Select"},options:i,disabled:a,className:l,readOnly:d,error:u,"data-testid":f,id:h,enableSearch:p=!1,searchFunction:m,searchPlaceholder:b,valueExtractor:v,valueToStringFunction:y,listExtractor:x,displayValueExtractor:w,onSelectOption:$,listStyleWidth:C,onShowOptions:S,onHideOptions:D,onRetry:k,optionsLoadState:E={from:"success",to:"success"},optionTruncationType:_="middle",renderCustomSelectedOption:O,renderListItem:F,renderCustomCallToAction:T}=r,I=lt(r,["selectedOptions","placeholders","options","disabled","className","readOnly","error","data-testid","id","enableSearch","searchFunction","searchPlaceholder","valueExtractor","valueToStringFunction","listExtractor","displayValueExtractor","onSelectOption","listStyleWidth","onShowOptions","onHideOptions","onRetry","optionsLoadState","optionTruncationType","renderCustomSelectedOption","renderListItem","renderCustomCallToAction"]);const[M,A]=g(),[j,B]=g(),R=s(null),z={from:s(null),to:s(null)},[P,L]=g("none");c((()=>{A(null==n?void 0:n.from),B(null==n?void 0:n.to)}),[n]);const N=e=>t=>{t.stopPropagation(),t.preventDefault(),a||d||L("from"===e?"from":"to"===e&&M?"to":"from")},H=e=>{var t;const r="from"===e?M:j;if(!r)return"";if(w)return w(r);if(v){const e=v(r);return y?y(e):null!==(t=null==e?void 0:e.toString())&&void 0!==t?t:""}return r.toString()},W=(e,t)=>{if("middle"===_){let r=0;return z[e]&&z[e].current&&(r=z[e].current.getBoundingClientRect().width),pd.truncateOneLine(t,r,120,8)}return t},V=e=>{!e&&D&&D(),e&&S&&S()},Y=e=>{const r="from"===e?M:j;return r?O?O(r):t(Cu,{truncateType:_,children:W(e,H(e))}):t(Su,{truncateType:_,children:W(e,o[e]||"")})},U=e=>t($u,{onClick:N(e),ref:z[e],$disabled:a,children:Y(e)});return e(Du,{show:"none"!==P,error:u&&!("none"!==P),disabled:a,readOnly:d,testId:f,onBlur:()=>{V(!1),L("none"),M&&j||(B(void 0),A(void 0))},className:l,children:[e(hO,{children:[t(gO,Object.assign({type:"button","data-testid":h||"selector",disabled:a,ref:R,onClick:N()},I,{children:e(wh,{currentActive:(()=>{switch(P){case"from":return"start";case"to":return"end";case"none":return P}})(),children:[U("from"),U("to")]})})),"none"===P&&M&&j&&!d&&!a&&t(pO,{onClick:e=>{e.stopPropagation(),A(void 0),B(void 0),$&&$({from:void 0,to:void 0},void 0)},type:"button","aria-label":"Clear",children:t(Op,{"aria-hidden":!0})})]}),"none"!==P&&t(wu,{}),(()=>{if("none"===P)return null;const e=i[P];if(e&&e.length>0){const r="from"===P?M:j;return t(_$,{listItems:e,onSelectItem:(e,t)=>((e,t,r)=>{var n;"from"===r?A(e):B(e),V(!1),R&&(null===(n=R.current)||void 0===n||n.focus()),$&&$({[r]:e},t),"from"===r?(B(void 0),L("to"),V(!0)):L("none")})(e,t,P),onDismiss:()=>(()=>{var e;L("none"),V(!1),R&&(null===(e=R.current)||void 0===e||e.focus()),M&&j||(B(void 0),A(void 0))})(),valueExtractor:v,listExtractor:x,listStyleWidth:C,visible:!0,enableSearch:p,searchPlaceholder:b,searchFunction:m,"data-testid":`${P}-dropdown-list`,selectedItems:r?[r]:[],onRetry:k,itemsLoadState:E[P],itemTruncationType:_,renderListItem:F,renderCustomCallToAction:T})}return null})()]})},bO=({selectedOption:e,placeholder:r="Select",options:n,disabled:o,error:i,className:a,"data-testid":l,id:d,enableSearch:u=!1,searchFunction:f,searchPlaceholder:h,valueExtractor:p,valueToStringFunction:m,listExtractor:b,displayValueExtractor:v,onSelectOption:y,onShowOptions:x,onHideOptions:w,onRetry:$,optionsLoadState:C="success",optionTruncationType:S="end",renderCustomSelectedOption:D,renderListItem:k,hideNoResultsDisplay:E,noResultsDescription:_,renderCustomCallToAction:O,onBlur:F,variant:T="default",readOnly:I,alignment:M,dropdownZIndex:A,dropdownRootNode:j})=>{const[B,R]=g(e),[z,P]=g(!1),[L,N]=g(!1),[H]=g((()=>hd.generate())),W=s(null),V=s(null),Y=s(null);c((()=>{R(e)}),[e]);const U=(e,t)=>{var r;null===(r=V.current)||void 0===r||r.focus(),R(e),P(!1),X(!1),null==y||y(e,t)},K=()=>{z&&(P(!1),X(!1))},q=()=>{L||z||N(!0)},G=e=>{L&&!z&&W.current&&!W.current.contains(e.relatedTarget)&&(N(!1),null==F||F())},Q=()=>{var e;if(!B)return"";if(v)return v(B);if(p){const t=p(B);return m?m(t):null!==(e=null==t?void 0:t.toString())&&void 0!==e?e:""}return B.toString()},Z=e=>{if("middle"===S){let t=0;return Y&&Y.current&&(t=Y.current.getBoundingClientRect().width),pd.truncateOneLine(e,t,120,8)}return e},X=e=>{e?null==x||x():null==w||w()};return t(Gk,{children:t(_u,{enabled:!I&&!o,isOpen:z,renderElement:()=>t(th,{className:a,"data-testid":l,id:d,ref:W,tabIndex:-1,onFocus:q,onBlur:G,$focused:L,$disabled:o,$readOnly:I,$error:i,children:t($E,{ref:V,disabled:o,expanded:z,listboxId:H,popupRole:"listbox",readOnly:I,variant:T,children:t($u,{ref:Y,$disabled:o,children:B?D?D(B):t(Cu,{truncateType:S,$variant:T,children:Z(Q())}):t(Su,{truncateType:S,$variant:T,children:r})})})}),renderDropdown:({elementWidth:e})=>t(yE,{listboxId:H,listItems:n,onSelectItem:U,onDismiss:K,valueExtractor:p,listExtractor:b,enableSearch:u,searchPlaceholder:h,searchFunction:f,selectedItems:B?[B]:[],onRetry:$,itemsLoadState:C,itemTruncationType:S,renderListItem:k,hideNoResultsDisplay:E,noResultsDescription:_,renderCustomCallToAction:O,variant:T,width:e}),onOpen:()=>{P(!0),X(!0),N(!0)},onClose:e=>{P(!1),X(!1),"click"!==e&&(N(!1),null==F||F())},onDismiss:()=>{var e;null===(e=V.current)||void 0===e||e.focus(),P(!1),X(!1)},clickToToggle:!0,offset:8,alignment:M,fitAvailableHeight:!0,customZIndex:A,rootNode:j})})},vO=E.div`
    overflow: hidden;
    border: ${qi["width-010"]} ${qi.solid} ${Yi.border};
    border-radius: ${Qi.sm};
    background: ${Yi.bg};
    padding: ${Gi["spacing-16"]};
    min-width: 23rem;

    ${Xi.MaxWidth.sm} {
        min-width: unset;
        width: calc(100vw - ${Zi["sm-margin"]} * 2);
        max-height: 15rem;
    }

    ${Xi.MaxWidth.xs} {
        width: calc(100vw - ${Zi["xs-margin"]} * 2);
    }

    ${Xi.MaxWidth.xxs} {
        width: calc(100vw - ${Zi["xxs-margin"]} * 2);
    }
`,yO=E.div`
    display: flex;
    align-items: baseline;
`,xO=E.div`
    margin: 0 0.5rem;
    color: ${Yi.text};
`,wO=E.div`
    ${e=>"small"===e.$variant?Ui["body-md-regular"]:Ui["body-baseline-regular"]}
    text-align: left;
    ${e=>{if("middle"!==e.truncateType)return _`
                    ${la(1)}
                `}}
    overflow: hidden;
`,$O=E(wO)`
    color: ${Yi["text-subtler"]};
`,CO=r=>{var{alignment:n="left",className:o,disabled:i,dropdownZIndex:a,error:l,histogramSlider:d,id:u,onBlur:f,onChange:h,onChangeEnd:p,optionTruncationType:m="end",placeholder:b="Select",rangeLabelPrefix:v,rangeLabelSuffix:y,readOnly:x,renderRangeLabel:w,value:$,dropdownRootNode:C}=r,S=lt(r,["alignment","className","disabled","dropdownZIndex","error","histogramSlider","id","onBlur","onChange","onChangeEnd","optionTruncationType","placeholder","rangeLabelPrefix","rangeLabelSuffix","readOnly","renderRangeLabel","value","dropdownRootNode"]);const{interval:D,bins:k=[],renderEmptyView:E,ariaLabels:_}=d,O=k.map((e=>e.minValue)),F=Math.min(...O),[T,I]=g(U()),[M,A]=g(!1),[j,B]=g(!1),[R]=g((()=>hd.generate())),z=s(null),P=s(null),L=s(null),N=S["data-testid"]||"select-histogram";c((()=>{$!==T&&I(U())}),[$]);const H=e=>{I(e),null==h||h(e)},W=e=>{I(e),null==p||p(e)},V=()=>{j||M||B(!0)},Y=e=>{j&&!M&&z.current&&!z.current.contains(e.relatedTarget)&&(B(!1),null==f||f())};function U(){return null!=$?$:[F,F+D]}const K=t=>w?w(t):e(fa.BodyBL,{children:[v,t,y]});return t(Gk,{children:t(_u,{enabled:!x&&!i,isOpen:M,renderElement:()=>t(th,{className:o,"data-testid":N,id:u,ref:z,tabIndex:-1,onFocus:V,onBlur:Y,$focused:j,$disabled:i,$readOnly:x,$error:l,children:t($E,{ref:P,disabled:i,expanded:M,listboxId:R,popupRole:"dialog",readOnly:x,variant:"default",children:t($u,{ref:L,$disabled:i,children:O&&0!==O.length?e(yO,{children:[K(T[0]),t(xO,{children:"-"}),K(T[1])]}):t($O,{truncateType:m,$variant:"default",children:b})})})}),renderDropdown:({elementWidth:e})=>t(vO,{style:{width:e},children:t(kp,{interval:D,value:T,bins:k,onChange:H,onChangeEnd:W,showRangeLabels:!1,renderEmptyView:E,ariaLabels:_})}),onOpen:()=>{A(!0)},onClose:()=>{A(!1)},onDismiss:()=>{var e;null===(e=P.current)||void 0===e||e.focus(),A(!1)},clickToToggle:!0,offset:8,alignment:n,fitAvailableHeight:!0,customZIndex:a,rootNode:C})})},SO=e=>{var{value:r,ariaLabel:n,onChange:o,onChangeEnd:i}=e,a=lt(e,["value","ariaLabel","onChange","onChangeEnd"]);const[s,l]=g(d());c((()=>{r!==s[0]&&l(d())}),[r]);function d(){return null!=r?[r]:[0]}return t(xp,Object.assign({},a,{value:s,numOfThumbs:1,onChange:e=>{const[t]=e;l([t]),null==o||o(t)},onChangeEnd:e=>{const[t]=e;l([t]),null==i||i(t)},ariaLabels:n?[n]:void 0}))},DO=E.p`
    text-align: right;
    ${Ui["body-sm-semibold"]}
    color: ${Yi["text-subtler"]};
`,kO=({value:e,maxLength:n,renderCustomCounter:i})=>{const[a,s]=g("");c((()=>{s(l(`${e||""}`))}),[e,n]);const l=e=>{if(i)return i(n,e.toString().length);{const t=n-e.toString().length;return 1===t?`${t} character left`:`${t.toLocaleString()} characters left`}};return t(r,{children:o.isValidElement(a)?a:t(DO,{"data-testid":"counter-label",children:a})})},EO=E.div`
    display: flex;
    flex-direction: column;
`,_O=E.textarea`
    border: ${qi["width-010"]} ${qi.solid} ${Yi.border};
    border-radius: ${Qi.sm};
    background: ${Yi.bg};
    outline: none;
    overflow: hidden;

    display: block;
    padding: ${Gi["spacing-12"]} ${Gi["spacing-16"]};
    width: 100%;

    ${Ui["body-baseline-regular"]}
    color: ${Yi.text};

    :focus,
    :active {
        outline-offset: -1px;
        outline: ${qi["width-020"]} ${qi.solid}
            ${Yi["border-focus"]};
    }

    ::placeholder,
    ::-webkit-input-placeholder {
        color: ${Yi["text-subtler"]};
    }

    ${e=>e.readOnly?_`
                border-color: transparent;
                background: transparent !important;

                :focus,
                :active {
                    outline-color: ${Yi["border-focus"]};
                }
            `:e.disabled?_`
                background: ${Yi["bg-disabled"]};
                cursor: not-allowed;

                :focus,
                :active {
                    outline-color: ${Yi["border-disabled"]};
                }
            `:e.$error?_`
                border-color: ${Yi["border-error"]};

                :focus,
                :active {
                    outline-color: ${Yi["border-error-focus"]};
                }
            `:void 0}
`,OO=o.forwardRef(((e,r)=>{var{value:n,disabled:o,error:i,rows:a=5,prefix:s,transformValue:l,onChange:d,maxLength:u}=e,f=lt(e,["value","disabled","error","rows","prefix","transformValue","onChange","maxLength"]);const[h,p]=g(n);c((()=>{p(n)}),[n]);return t(_O,Object.assign({ref:r,disabled:o,value:s?s+(null!=h?h:""):h,onChange:e=>{let t=e.target.value;if(s){t.startsWith(s)||(t=s+t.trimStart()),t.length<s.length&&(t=s);if((e.target.selectionStart||0)<s.length)return void e.preventDefault();const r=t.slice(s.length),n=l?l(r):r;if(p(n),e.target.value=s+n,d){const t=Object.assign(Object.assign({},e),{target:Object.assign(Object.assign({},e.target),{value:n})});d(t)}}else{const r=l?l(null!=t?t:""):t;p(r),e.target.value=r,d&&d(e)}},onKeyDown:e=>{if(!s)return;const{selectionStart:t}=e.currentTarget;"Backspace"===e.key&&t<=s.length&&e.preventDefault(),"ArrowLeft"===e.key&&t<=s.length&&e.preventDefault(),"Home"===e.key&&(e.preventDefault(),requestAnimationFrame((()=>{e.currentTarget.setSelectionRange(s.length,s.length)})))},$error:i,rows:a,maxLength:s&&u?s.length+u:u},f))}));o.forwardRef(((r,n)=>{var{value:o,disabled:i,rows:a=5,onChange:s,transformValue:l,prefix:d,maxLength:u,renderCustomCounter:f}=r,h=lt(r,["value","disabled","rows","onChange","transformValue","prefix","maxLength","renderCustomCounter"]);const[p,m]=g(o);c((()=>{m(o)}),[o]);return e(EO,{children:[t(OO,Object.assign({ref:n,disabled:i,value:p,rows:a||5,onChange:e=>{const t=e.target.value;m(t),s&&s(e)},prefix:d,transformValue:l,maxLength:u},h)),u&&t(kO,{value:p,maxLength:u,renderCustomCounter:f})]})}));const FO=E.div`
    display: flex;
    justify-content: flex-end;
    margin-top: ${Gi["spacing-4"]};
`,TO=E.div`
    display: flex;
    flex: 1;
    margin-right: ${Gi["spacing-12"]};
`,IO=E(Xd)`
    margin-top: 0;
`,MO=o.forwardRef(((n,o)=>{const{label:i,value:a,errorMessage:s,id:l="form-textarea","data-error-testid":d,"data-testid":u,onChange:f,layoutType:h,mobileCols:p,tabletCols:m,desktopCols:b,xxsCols:v,xsCols:y,smCols:x,mdCols:w,lgCols:$,xlCols:C,xxlCols:S,transformValue:D,prefix:k=""}=n,E=lt(n,["label","value","errorMessage","id","data-error-testid","data-testid","onChange","layoutType","mobileCols","tabletCols","desktopCols","xxsCols","xsCols","smCols","mdCols","lgCols","xlCols","xxlCols","transformValue","prefix"]),[_,O]=g(a);c((()=>{O(a)}),[a]);return e(hu,{id:l,label:i,disabled:E.disabled,layoutType:h,mobileCols:p,tabletCols:m,desktopCols:b,xxsCols:v,xsCols:y,smCols:x,mdCols:w,lgCols:$,xlCols:C,xxlCols:S,children:[t(OO,Object.assign({id:`${l}-base`,"data-testid":u||l,value:_,error:!!s,onChange:e=>{const t=e.target.value;O(t),f&&f(e)},ref:o,prefix:k,transformValue:D},E)),s||E.maxLength?e(FO,{children:[s&&t(TO,{children:t(IO,{"data-testid":d||(l?`${l}-error-message`:"error-message"),children:s})}),E.maxLength&&t(kO,{value:_,maxLength:E.maxLength,renderCustomCounter:E.renderCustomCounter})]}):t(r,{})]})})),AO=E.div`
    position: relative;
`,jO=E(rh)`
    height: 3rem;
    gap: ${Gi["spacing-8"]};
`,BO=E(nh)`
    display: block;
    width: 100%;
    flex: 1;
`;var RO,zO;!function(e){e.AM="AM",e.PM="PM"}(RO||(RO={})),function(e){e.roundToNearestInterval=(e,t,r)=>{const[n,o]=e.split(":"),i=parseInt(n,10),a=parseInt(o,10);if(isNaN(i)||isNaN(a)||a<0||a>=60)throw new Error("Invalid time format");const s=60*i+a,l=s%t,c=0===l?s:r?s+(t-l):s-l,d=c%60;return`${Math.floor(c/60).toString().padStart(2,"0")}:${d.toString().padStart(2,"0")}`},e.generateHourlyIntervals=(e,t,r="ha")=>{const n="HH:mm";let o=Kc(e,n),i=Kc(t,n);o.isSame(i)&&(i=i.add(1,"day"));const a=[];for(;o.isBefore(i);)a.push(o.format(r)),o=o.add(1,"hour");return a},e.getTimeValues=(e,t)=>{const r={hour:"",minute:"",period:RO.AM};if(!t)return r;try{if("24hr"===e){const n=NO(t,e);r.minute=pd.padValue(n.minute);const o=parseInt(n.hour);0===Math.floor(o/12)?(r.period=RO.AM,r.hour=0===o?"12":pd.padValue(o.toString())):(r.period=RO.PM,r.hour=12===o?o.toString():pd.padValue((o-12).toString()))}else{const{hour:n,minute:o,period:i=""}=NO(t,e);r.hour=pd.padValue(n),r.minute=pd.padValue(o),r.period="am"===i.toLowerCase()?RO.AM:RO.PM}return r}catch(e){return r}},e.updateMinutes=(e,t)=>{const r=parseInt(e);if(isNaN(r))return"add"===t?pd.padValue("0"):"55";const n=Math.floor(r/5),o=(("add"===t?n+1:r%5==0?n-1:n)%12+12)%12;return pd.padValue((5*o).toString())},e.updateHours=(e,t)=>{const r=parseInt(e);if(isNaN(r))return"add"===t?pd.padValue("1"):"12";const n="add"===t?r+1:r-1;return n<=12&&n>0?pd.padValue(n.toString()):13===n?pd.padValue("1"):"12"},e.convertTo24HourFormat=e=>{const t=parseInt(e.hour);let r;return r=e.period===RO.PM?12===t?t.toString():(t+12).toString():12===t?"00":e.hour,`${r}:${e.minute}`},e.convertHourTo12HourFormat=e=>{const t=parseInt(e),r=t%12==0?12..toString():(t%12).toString();return pd.padValue(r)},e.formatDisplayValue=(e,t)=>{try{const{hour:r,minute:n,period:o=""}=NO(e,t),i=pd.padValue(r);let a=`${i}:${pd.padValue(n)}`;return"12hr"===t?(a+=o.toLowerCase(),a):a}catch(e){return""}},e.toMinutesSeconds=e=>({minutes:Math.floor(e/60),seconds:e%60}),e.to24Hour=e=>{if((null==e?void 0:e.includes("am"))||(null==e?void 0:e.includes("pm"))){const[t,r]=e.split(/(am|pm)/i),[n,o]=t.split(":").map(Number);let i=n;return"pm"===r&&i<12&&(i+=12),"am"===r&&12===i&&(i=0),HO(i,o)}return e},e.generateTimings=(t,r="12hr",n,o)=>{const i=[];let a=0,s=1440-t;for(n&&(a=e.timeToMinutes(n)),o&&(s=e.timeToMinutes(o));a<=s;){let e=Math.floor(a/60);const n=a%60;if("12hr"===r){const t=e>=12?"pm":"am";e%=12,e=e||12;const r=HO(e,n,t);i.push(r)}else{const t=HO(e,n);i.push(t)}a+=t}return i},e.parseInput=(e,t="12hr")=>{if(""===e||void 0===e)return e;const r=e.trim().toLowerCase(),n=/^(?:(\d{1,2})([:.])?(\d{2})?)?(a|p|am|pm)?$/.exec(r);if(!n)return;let o=parseInt(n[1]||"0",10);const i=parseInt(n[3]||"0",10);let a=n[4];if(void 0===n[1]||o>24||i>59)return;if("a"===a?a="am":"p"===a&&(a="pm"),"24hr"===t)return"pm"===a&&o<12?o+=12:("am"===a&&12===o||24===o)&&(o=0),HO(o,i);a?0===o||24===o?(a="am",o=12):o>12&&(a="pm",o-=12):(a=0===o||24===o||o>6&&o<12?"am":"pm",o=o%12||12);return HO(o,i,a)},e.findClosestFlooredTime=(t,r)=>{if(!t)return t;const n=e.timeToMinutes(t);let o="",i=1/0;for(const t of r){const r=e.timeToMinutes(t)-n;if(r<=0&&Math.abs(r)<i)i=Math.abs(r),o=t;else if(r>0)break}return o},e.timeToMinutes=e=>{const[t,r]=e.toLowerCase().split(/(am|pm)/),[n,o]=t.split(":").map(Number);let i=n;return"pm"===r&&12!==i&&(i+=12),"am"===r&&12===i&&(i=0),60*i+o}}(zO||(zO={}));const PO=(e,t)=>{const r=parseInt(e);return"24hr"===t?r>=0&&r<=23:r>=1&&r<=12},LO=e=>{const t=parseInt(e);return t>=0&&t<=59},NO=(e,t)=>{const r=e?e.split(":"):[],n=new Error("Invalid format");if("12hr"===t){if(2!==r.length||4!==r[1].length)throw n;const e=r[1].substring(0,2),i=r[1].substring(2);if(!PO(r[0],t)||!LO(e)||"am"!==(o=i).toLowerCase()&&"pm"!==o.toLowerCase())throw n;return{hour:r[0],minute:e,period:r[1].substring(2)}}if(2!==r.length)throw n;if(!PO(r[0],t)||!LO(r[1]))throw n;return{hour:r[0],minute:r[1]};var o},HO=(e,t,r)=>r?`${e}:${t.toString().padStart(2,"0")}${r}`:`${e.toString().padStart(2,"0")}:${t.toString().padStart(2,"0")}`,WO=E.div`
    padding: ${Gi["spacing-8"]} ${Gi["spacing-16"]};
    display: flex;

    ${e=>{let t,r;switch(e.$type){case"error":t=Yi["bg-error"](e),r=Yi["border-error"](e);break;case"success":t=Yi["bg-success"](e),r=Yi["border-success"](e);break;case"warning":default:t=Yi["bg-warning"](e),r=Yi["border-warning"](e);break;case"info":t=Yi["bg-info"](e),r=Yi["border-info"](e);break;case"description":t=Yi["bg-strong"](e),r=Yi["border-strong"](e)}return _`
            background: ${t};
            border-left: ${qi["width-020"]} ${qi.solid}
                ${r};
        `}}

    color: ${Yi.text};
    ${e=>"small"===e.$sizeType?Rd({textSize:"body-sm"}):Rd({textSize:"body-md"})}
`,VO=E.div`
    display: flex;
    align-items: center;
    height: 1lh;
    margin-right: ${Gi["spacing-8"]};

    ${e=>{let t;const r="small"===e.$sizeType?"1.25rem":"1.5rem";switch(e.$type){case"error":t=Yi["icon-error"](e);break;case"success":t=Yi["icon-success"](e);break;case"warning":default:t=Yi["icon-warning"](e);break;case"info":t=Yi["icon-info"](e);break;case"description":t=Yi["icon-subtle"](e)}return _`
            svg {
                color: ${t};
                width: ${r};
                height: ${r};
            }
        `}}
`,YO=E(fa.LinkSM)`
    ${e=>"small"===e.$sizeType?_`
                ${Ui["body-sm-semibold"]}
                margin-top: ${Gi["spacing-4"]};
            `:_`
                ${Ui["body-md-semibold"]}
                margin-top: ${Gi["spacing-8"]};
            `}
    display: flex;
    align-items: center;
    align-self: flex-start;

    svg {
        height: 1rem;
        width: 1rem;
        margin-left: ${Gi["spacing-4"]};
    }
`,UO=E.div`
    display: flex;
    flex-direction: column;
    flex: 1;
    overflow-wrap: anywhere;
`,KO=E.div`
    display: flex;
    flex-direction: column;
    flex: 1;
    ${e=>{if(e.$showMore&&e.$hasActionLink)return _`
                margin-bottom: ${Gi["spacing-8"]};
            `}}
    ${e=>{const t="linear-gradient(to bottom, black 50%, transparent 100%)";if(!e.$showMore&&e.$maxCollapsedHeight)return`\n                max-height: ${e.$maxCollapsedHeight}px;\n\t\t\t\toverflow: hidden;\n                -webkit-mask-image: ${t};\n                mask-image: ${t};\n\t\t\t`}}
`,qO=E.button`
    ${e=>"small"===e.$sizeType?_`
                ${Ui["body-sm-semibold"]}
            `:_`
                ${Ui["body-md-semibold"]}
            `}

    display: flex;
    align-items: center;
    align-self: flex-start;
    gap: ${Gi["spacing-4"]};
    margin-top: ${Gi["spacing-8"]};

    cursor: pointer;
    user-select: none;
    border: none;
    background: transparent;

    color: ${Yi["text-primary"]};
`,GO=E(he)`
    transform: rotate(${e=>e.$expanded?180:0}deg);
    transition: transform ${Ki["duration-350"]} ${Ki["ease-standard"]};
`,QO=r=>{var{type:n,className:o,children:i,actionLink:a,actionLinkIcon:s,sizeType:l="default",showIcon:d=!1,customIcon:u,maxCollapsedHeight:f}=r,h=lt(r,["type","className","children","actionLink","actionLinkIcon","sizeType","showIcon","customIcon","maxCollapsedHeight"]);const[p,m]=g(!1),[b,v]=g(!1),{height:y,ref:x}=Lc();c((()=>{w()}),[f,y]);const w=()=>{m(!f),v($())},$=()=>!(!y||!f)&&y>f;return e(WO,{className:o,$type:n,$sizeType:l,"data-testid":h["data-testid"],children:[d&&t(VO,{$sizeType:l,$type:n,children:(()=>{if(n&&u)return u;switch(n){case"success":return t(_e,{});case"warning":return t(Ee,{});case"error":return t(pe,{});case"info":case"description":return t(B,{});default:return null}})()}),e(UO,{children:[e(KO,{$maxCollapsedHeight:$()?f:void 0,$showMore:p,$hasActionLink:!!a,children:[t("div",{ref:x,children:i}),a?e(YO,Object.assign({"data-testid":"action-link",$type:n,$sizeType:l},a,{children:[a.children,s||t(ke,{})]})):null]}),b&&e(qO,{$sizeType:l,$type:n,type:"button",onClick:()=>m(!p),children:["Show ",p?"less":"more",t(GO,{$expanded:p})]})]})]})},ZO=E.div`
    height: 1.625rem;
    width: 1.625rem;
    margin-right: 0.5rem;
    flex-shrink: 0;

    svg {
        height: 100%;
        width: 100%;
    }

    ${e=>e.$disabled?e.$active?_`
                    color: ${Yi["icon-selected-disabled"]};
                `:_`
                    color: ${Yi["icon-disabled-subtle"]};
                `:e.$active?_`
                color: ${Yi["icon-selected"]};
            `:_`
            color: ${Yi["icon-subtle"]};
        `};
`,XO=_`
    margin-bottom: ${e=>e.$bottomMargin||0}rem;

    // Counter matters
    counter-reset: list;

    li {
        font-weight: ${Ui.Spec["weight-regular"]};
        ${e=>e.$size&&Ui[`${e.$size}-regular`]}
        color: ${Yi.text};
    }

    // nested lists styling
    ol,
    ul {
        margin-top: 0.5rem;
        margin-bottom: 0.5rem;
    }
`,JO=E.ol`
    ${XO}

    margin-left: 3rem;

    ${Xi.MaxWidth.lg} {
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
`,eF=E.ul`
    ${XO}

    margin-left: 2.5rem;
    list-style-type: ${e=>e.$bulletType||"disc"};
`,tF=e=>{var{size:r,bulletType:n,bottomMargin:o,children:i}=e,a=lt(e,["size","bulletType","bottomMargin","children"]);return t(eF,Object.assign({$size:r,$bulletType:n,$bottomMargin:o},a,{children:i}))};tF.displayName="TextList.Ul";const rF=e=>{var{size:r,counterType:n,counterSeparator:o,bottomMargin:i,children:a}=e,s=lt(e,["size","counterType","counterSeparator","bottomMargin","children"]);return t(JO,Object.assign({$size:r,$counterType:n,$counterSeparator:o,$bottomMargin:i},s,{children:a}))};rF.displayName="TextList.Ol";const nF=tF,oF=E.div`
    position: relative;
    display: inline-flex;
    min-width: 10.375rem;
    border-radius: 4px;
    border-width: 1px;
    border-style: solid;
    overflow: hidden;
    flex-direction: column;
    height: fit-content;
    background: ${Yi.bg};

    ${e=>{if(!e.$indicator)return _`
                justify-content: center;
            `}}

    // Container min width to fit content
    ${e=>{if(e.$useContentWidth)return _`
                min-width: unset;
            `}}

    // apply container border and header background color
    ${e=>"no-border"===e.$styleType?e.$error?e.$disabled?_`
                            border-color: ${Yi["border-error"]};
                        `:_`
                            border-color: ${Yi["border-error"]};

                            &:has(${cF}:hover) {
                                background: ${Yi["bg-hover-subtle"]};
                            }
                        `:e.$disabled?e.$selected?_`
                            border: none;
                            background: ${Yi["bg-selected-disabled"]};
                        `:_`
                            border: none;
                        `:e.$selected?_`
                        border: none;
                        background: ${Yi["bg-selected"]};

                        &:has(${cF}:hover) {
                            background: ${Yi["bg-selected-hover"]};

                            & ${aF} {
                                color: ${Yi["text-selected-hover"]};
                            }

                            & ${vF} {
                                color: ${Yi["icon-selected-hover"]};
                            }
                        }
                    `:_`
                    border: none;

                    &:has(${cF}:hover) {
                        background: ${Yi["bg-hover-subtle"]};
                    }
                `:e.$error?e.$disabled?_`
                            border-color: ${Yi["border-error"]};
                        `:_`
                            border-color: ${Yi["border-error"]};

                            &:has(${cF}:hover) {
                                background: ${Yi["bg-hover-subtle"]};
                            }
                        `:e.$disabled?e.$selected?_`
                            border-color: ${Yi["border-selected-disabled"]};
                            background: ${Yi["bg-selected-disabled"]};
                        `:_`
                            border-color: ${Yi["border-disabled"]};
                            background: ${Yi["bg-disabled"]};
                        `:e.$selected?_`
                        border-color: ${Yi["border-selected"]};
                        background: ${Yi["bg-selected"]};

                        &:has(${cF}:hover) {
                            background: ${Yi["bg-selected-hover"]};

                            & ${aF} {
                                color: ${Yi["text-selected-hover"]};
                            }

                            & ${vF} {
                                color: ${Yi["icon-selected-hover"]};
                            }
                        }
                    `:_`
                    border-color: ${Yi.border};

                    &:has(${cF}:hover) {
                        background: ${Yi["bg-hover-subtle"]};
                    }
                `}
`,iF=E.input`
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
`,aF=E.div`
    display: flex;
    flex-direction: column;
    overflow-wrap: anywhere;
    width: 100%;
    overflow: hidden;

    // apply header container text color
    ${e=>e.$disabled?e.$selected?_`
                    color: ${Yi["text-selected-disabled"]};
                `:_`
                    color: ${Yi["text-disabled"]};
                `:e.$selected?_`
                color: ${Yi["text-selected"]};
            `:_`
            color: ${Yi.text};
        `}
`,sF=E.label`
    ${Ui["body-baseline-regular"]}
    overflow: hidden;
    display: -webkit-box;
    text-overflow: ellipsis;
    -webkit-box-orient: vertical;
    overflow-wrap: break-word;
    -webkit-line-clamp: ${e=>{var t,r;return null!==(r=null===(t=e.$maxLines)||void 0===t?void 0:t.desktop)&&void 0!==r?r:"none"}};
    ${Xi.MaxWidth.lg} {
        -webkit-line-clamp: ${e=>{var t,r;return null!==(r=null===(t=e.$maxLines)||void 0===t?void 0:t.tablet)&&void 0!==r?r:"none"}};
    }
    ${Xi.MaxWidth.sm} {
        -webkit-line-clamp: ${e=>{var t,r;return null!==(r=null===(t=e.$maxLines)||void 0===t?void 0:t.mobile)&&void 0!==r?r:"none"}};
    }
`,lF=E.div`
    ${Ui["body-md-regular"]}
    margin-top: 0.5rem;

    z-index: 1; // forces sublabel to render above the input
    pointer-events: none; // to allow click events to be passed to the input

    strong,
    b {
        ${Ui["body-md-semibold"]}
    }
`,cF=E.div`
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
`,dF=E.div`
    display: flex;
    height: 100%;
    width: 100%;
    position: relative;
    padding: ${e=>e.$addPadding?"0.6875rem 0rem 0.6875rem 1rem":"0.6875rem 1rem"};
`,uF=E.button`
    color: ${e=>e.$disabled?Yi["text-disabled"]:Yi["text-error"]};
    white-space: nowrap;
    ${Ui["body-md-semibold"]}
    height: fit-content;
    padding: 0.6875rem 1rem 0.6875rem 0.5rem;
    border: none;
    background: none;

    cursor: ${e=>e.$disabled?"not-allowed":"pointer"};
`,fF=E.button`
    color: ${e=>e.disabled?Yi["text-disabled"]:Yi["text-primary"]};
    ${Ui["body-baseline-semibold"]}
    display: flex;
    align-items: center;
    justify-content: flex-end;
    border: none;
    background-color: ${Yi.bg};
    cursor: ${e=>e.disabled?"not-allowed":"pointer"};
    padding: 0 1rem 0.6875rem 1rem;
    padding-top: ${e=>e.$paddingTopRequired?"0.6875rem":"0rem"};
    width: 100%;

    svg {
        width: 1em;
        height: 1em;
        margin-left: 0.5rem;
    }
`,hF=E.div`
    width: 100%;
    color: ${e=>e.$disabled?Yi["text-disabled"]:Yi["text-error"]};
    border: none;
    background: ${Yi.bg};
    cursor: ${e=>e.$disabled?"not-allowed":"pointer"};
    padding: 0.6875rem 1rem 0.5rem 1rem;
`,pF=E(QO)`
    width: 100%;
    user-select: none;
`,gF=E.div`
    padding: 0 1rem;
    padding-top: 0.6875rem;
    padding-bottom: ${e=>e.$isFinalItem?"0.6875rem":"0.5rem"};
    background-color: ${Yi.bg};
    ${Rd({textSize:"body-md"})}

    ${e=>e.$disabled?_`
                color: ${Yi["text-disabled"]};
            `:e.$selected?_`
                color: ${Yi["text-selected"]};
            `:_`
                color: ${Yi.text};
            `}
`,mF=E(fa.BodyMD)`
    color: ${e=>e.$disabled?Yi["text-disabled"]:Yi["text-error"]};
`,bF=E(nF)`
    color: ${e=>e.$disabled?Yi["text-disabled"]:Yi["text-error"]};
`,vF=E((({type:e,active:r=!1,disabled:n,className:o})=>{let i;switch(e){case"checkbox":i=t(r?we:ye,{});break;case"radio":i=t(r?Fe:Oe,{});break;case"tick":i=t($e,{});break;case"cross":i=t(te,{});break;default:i=null}return t(ZO,{className:o,$active:r,$disabled:n,children:i})}))`
    ${e=>e.$disabled?e.$selected?_`
                    color: ${Yi["icon-selected-disabled"]};
                `:_`
                    color: ${Yi["icon-disabled-subtle"]};
                `:e.$selected?_`
                color: ${Yi["icon-selected"]};
            `:_`
            color: ${Yi["icon-subtle"]};
        `};
`,yF=E(Qw.div)`
    position: absolute;
    top: calc(3rem + ${Gi["spacing-8"]});
    left: 0;
    overflow: hidden;
    z-index: 1;

    ${Xi.MaxWidth.xxs} {
        max-width: 100%;
    }
`,xF=E.div`
    position: relative;
    width: 100%;
    padding: ${Gi["spacing-8"]} ${Gi["spacing-20"]}
        ${Gi["spacing-24"]} ${Gi["spacing-20"]};
    display: flex;
    flex-direction: column;
    background: ${Yi.bg};
    border: ${qi["width-010"]} ${qi.solid} ${Yi.border};
    border-radius: ${Qi.sm};
`,wF=E.div`
    display: flex;
    align-items: center;
    justify-content: space-between;

    ${Xi.MaxWidth.xxs} {
        flex-direction: column;
        width: 100%;
    }
`,$F=E.div`
    display: flex;
    justify-content: flex-end;
    margin-top: ${Gi["spacing-16"]};
    gap: ${Gi["spacing-8"]} ${Gi["spacing-16"]};

    ${Xi.MaxWidth.xxs} {
        flex-direction: column-reverse; // FIXME: this breaks tab focus
        margin-top: ${Gi["spacing-32"]};
    }
`,CF=E.div`
    display: flex;
    align-items: center;
    margin-right: ${Gi["spacing-32"]};

    ${Xi.MaxWidth.xxs} {
        margin-right: 0;
        width: 100%;
    }
`,SF=E.div`
    display: flex;
    gap: ${Gi["spacing-8"]};

    ${Xi.MaxWidth.lg} {
        flex-direction: column;
    }

    ${Xi.MaxWidth.xxs} {
        flex-direction: row;
        width: 100%;
    }
`,DF=E.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    ${Xi.MaxWidth.xxs} {
        width: 6rem;
    }
`,kF=E(Md)`
    width: 5rem;
    padding: ${Gi["spacing-16"]} 0;
    color: ${Yi.icon};

    svg {
        height: 1rem;
        width: 1rem;
    }

    &:hover {
        color: ${Yi["icon-hover"]};
    }
`,EF=E(fa.BodyBL)`
    flex-shrink: 0;
    width: 1.5rem;
    text-align: center;
`,_F=E(th)`
    height: calc(3rem - 2px);
    width: 5rem;
    display: flex;
    align-items: center;
    justify-content: center;

    ${Xi.MaxWidth.xxs} {
        width: 100%;
    }
`,OF=E(nh)`
    text-align: center;
    width: 100%;

    :focus::placeholder {
        color: transparent;
    }
`,FF=E((({type:n="checkbox",indicator:o,checked:i,styleType:l="default",children:d,childrenMaxLines:u,subLabel:f,disabled:h,error:p,name:m,id:b,className:v,compositeSection:y,removable:x,onRemove:w,"data-testid":$,onChange:C,useContentWidth:S})=>{const{collapsible:D=!0,errors:k,children:E,initialExpanded:_}=y||{},[O,F]=g(i),[T,I]=g(!!_),M=a((()=>{const e=Array.isArray(k)&&(null==k?void 0:k.length)>0,t=!Array.isArray(k)&&!!k;return e||t}),[k]),[A]=g(hd.generate()),j=b?`${b}`:`tg-${A}`,B=s(null);c((()=>{F(i)}),[i]),c((()=>{O&&I(null==_||_)}),[O]);const R=()=>{h||I(!T)},z=()=>{h||!w||w()},P=()=>{let e;switch(n){case"yes":e="tick";break;case"no":e="cross";break;case"checkbox":case"radio":e=n}return t(vF,{type:e,active:O,disabled:h,$selected:O,$disabled:h})},L=()=>{if(!f)return null;let e;return e="function"==typeof f?f():f,t(lF,{"data-id":"toggle-sublabel",children:e})},N=n=>e(r,{children:[t(mF,{weight:"semibold",$disabled:h,children:"Error"}),t(bF,{$disabled:h,children:null==n?void 0:n.map(((e,r)=>t("li",{id:`${j}-error-list-item-${r}`,children:t(mF,{weight:"semibold",$disabled:h,children:e})},r)))})]});return e(oF,{$selected:O,$disabled:h,className:v,$styleType:l,$error:p,$indicator:o,$useContentWidth:S,id:b,"data-testid":$,children:[e(cF,{id:`${j}-header-container`,$disabled:h,$error:p,$selected:O,$indicator:o,$styleType:l,children:[e(dF,{$addPadding:x,children:[t(iF,{ref:B,name:m,id:`${j}-input`,type:"checkbox"===n?"checkbox":"radio","data-testid":"toggle-input",disabled:h,onChange:e=>{if(!h){if(C)return void C(e);switch(n){case"checkbox":F((e=>!e));break;case"radio":case"yes":case"no":O||F(!0)}}},checked:O}),o&&P(),e(aF,{$selected:O,$disabled:h,children:[t(sF,{htmlFor:`${j}-input`,"data-testid":`${j}-toggle-label`,$maxLines:u,children:d}),f&&L()]})]}),x&&t(uF,{type:"button",$disabled:h,onClick:z,id:`${j}-remove-button`,children:"Remove"})]}),E&&e("div",{children:[(!D||T)&&t(gF,{"data-id":"toggle-composite-children",$isFinalItem:!D,$disabled:h,children:E}),D&&!T&&M&&t(hF,{$disabled:h,onClick:R,id:`${j}-error-alert`,children:t(pF,{type:h?"description":"error",className:v,showIcon:!0,children:Array.isArray(k)?N(k):k})}),D&&e(fF,{$paddingTopRequired:!T&&!M,disabled:h,onClick:R,"data-testid":T?"collapse-button":"expand-button",children:[T?"Show less":"Show more",t(T?De:re,{"aria-hidden":!0})]})]})]})}))`
    min-width: 5rem;
    flex: 1;
`,TF=E(ef.Small)`
    width: 7rem;

    ${Xi.MaxWidth.sm} {
        flex: 1;
    }

    ${Xi.MaxWidth.xxs} {
        width: 100%;
    }
`;var IF,MF,AF;!function(e){e.HOUR_UP="hour-up",e.HOUR_DOWN="hour-down",e.MINUTE_UP="minute-up",e.MINUTE_DOWN="minute-down"}(IF||(IF={})),function(e){e.HOUR="hour",e.MINUTE="minute"}(MF||(MF={})),function(e){e.AM="am",e.PM="pm"}(AF||(AF={}));const jF=({id:r,value:n,show:o,format:i,onChange:a,onCancel:l})=>{var u;const f=zO.getTimeValues(i,n),[h,p]=g(f.hour),[m,b]=g(f.minute),[v,y]=g(f.period),x=s(null),w=s(null),$=Lc();c((()=>{if(o&&x.current&&x.current.focus(),o){const{hour:e,minute:t,period:r}=zO.getTimeValues(i,n);p(e),b(t),y(r)}}),[o,n,i]),c((()=>{const e=x.current,t=w.current;return e&&e.addEventListener("keydown",C),t&&t.addEventListener("keydown",C),()=>{e&&e.removeEventListener("keydown",C),t&&t.removeEventListener("keydown",C)}}),[]);const C=e=>{["Digit0","Digit1","Digit2","Digit3","Digit4","Digit5","Digit6","Digit7","Digit8","Digit9","Tab","Backspace","Delete","ArrowLeft","ArrowRight","ArrowUp","ArrowDown"].includes(e.code)||["Backspace","0","1","2","3","4","5","6","7","8","9"].includes(e.key)||e.preventDefault()},S=d((e=>{switch(e.currentTarget.name){case IF.MINUTE_UP:b(zO.updateMinutes(m,"add"));break;case IF.MINUTE_DOWN:b(zO.updateMinutes(m,"minus"));break;case IF.HOUR_UP:p(zO.updateHours(h,"add"));break;case IF.HOUR_DOWN:p(zO.updateHours(h,"minus"))}}),[h,m]),D=e=>{e.target.select()},k=e=>{const t=e.target.value;switch(e.target.name){case MF.HOUR:t.length<=2&&p(t);break;case MF.MINUTE:t.length<=2&&b(t)}},E=e=>{const t=parseInt(e.target.value);if(!isNaN(t))switch(e.target.name){case MF.HOUR:{const r=t>23||t<0?f.hour:zO.convertHourTo12HourFormat(e.target.value);p(r);break}case MF.MINUTE:{const r=t>59||t<0?f.minute:e.target.value;b(pd.padValue(r));break}}},_=e=>{switch(e.target.name){case AF.AM:y(RO.AM);break;case AF.PM:y(RO.PM)}},O=e=>r?`${r}-${e}`:e,F=Iw({opacity:o?1:0,height:o?(null!==(u=$.height)&&void 0!==u?u:0)+32+2:0});return t(yF,{"data-testid":"animated-dropdown-wrapper",style:F,children:e(xF,{ref:$.ref,"data-testid":O("timepicker-dropdown"),inert:o?void 0:"",children:[e(wF,{children:[e(CF,{children:[e(DF,{children:[t(kF,{"aria-label":"increase hour",name:IF.HOUR_UP,tabIndex:-1,onClick:S,"data-testid":O("hour-increment-button"),children:t(De,{})}),t(_F,{children:t(OF,{"aria-label":"hour",type:"number",name:MF.HOUR,id:"hour",maxLength:2,pattern:"[0-9]{2}",ref:x,value:h,onFocus:D,onChange:k,onBlur:E,min:1,max:12,placeholder:"HH","data-testid":O("hour-input")})}),t(kF,{"aria-label":"decrease hour",name:IF.HOUR_DOWN,tabIndex:-1,onClick:S,"data-testid":O("hour-decrement-button"),children:t(re,{})})]}),t(EF,{children:":"}),e(DF,{children:[t(kF,{"aria-label":"increase minute",name:IF.MINUTE_UP,tabIndex:-1,onClick:S,"data-testid":O("minute-increment-button"),children:t(De,{})}),t(_F,{children:t(OF,{"aria-label":"minute",type:"number",name:MF.MINUTE,id:"minute",maxLength:2,pattern:"[0-9]{2}",ref:w,value:m,onChange:k,onBlur:E,onFocus:D,min:0,max:59,placeholder:"MM","data-testid":O("minute-input")})}),t(kF,{"aria-label":"decrease minute",name:IF.MINUTE_DOWN,tabIndex:-1,onClick:S,"data-testid":O("minute-decrement-button"),children:t(re,{})})]})]}),e(SF,{children:[t(FF,{checked:v===RO.AM,name:AF.AM,type:"radio",onChange:_,"data-testid":O("am-toggle"),"aria-label":"AM",children:"AM"}),t(FF,{checked:v===RO.PM,name:AF.PM,type:"radio",onChange:_,"data-testid":O("pm-toggle"),"aria-label":"PM",children:"PM"})]})]}),e($F,{children:[t(TF,{"aria-label":"close selector",type:"button",styleType:"secondary",onClick:l,"data-testid":O("cancel-button"),children:"Cancel"}),t(TF,{"aria-label":"confirm selection",type:"button",onClick:()=>{let e;e="24hr"===i?zO.convertTo24HourFormat({hour:h,minute:m,period:v}):`${h}:${m}${v}`,a(e)},disabled:""===h||""===m,"data-testid":O("confirm-button"),children:"Done"})]})]})})},BF=r=>{var{id:n,disabled:o=!1,error:i,value:a,format:l="24hr",readOnly:d,onChange:u,onFocus:f,onBlur:h}=r,p=lt(r,["id","disabled","error","value","format","readOnly","onChange","onFocus","onBlur"]);const[m,b]=g(!1),[v,y]=g(!1),[x,w]=g(""),[$,C]=g(""),S=s(null);c((()=>{a&&(w(a.start),C(a.end))}),[a]),md("mousedown",(function(e){o||_(e)}),"document"),md("keyup",(function(e){if("Tab"===e.code)_(e)}),"document");const D=()=>{E()},k=()=>{m||v||f&&f()},E=()=>{b(!1),y(!1),h&&h()},_=e=>{S.current&&!S.current.contains(e.target)&&(v||m)&&E()};return t(AO,Object.assign({ref:S,id:n},p,{children:e(jO,{$disabled:o,$error:i,$readOnly:d,children:[e(wh,{error:i,currentActive:m?"start":v?"end":"none",children:[t(BO,{onFocus:()=>{o||d||m||(y(!1),b(!0),k())},readOnly:!0,placeholder:"From",value:zO.formatDisplayValue(x,l),disabled:o,"data-testid":p["data-testid"]?`${p["data-testid"]}-timepicker-selector`:"timepicker-selector"}),t(BO,{onFocus:()=>{o||d||v||(b(!1),y(!0),k())},readOnly:!0,placeholder:"To",value:zO.formatDisplayValue($,l),disabled:o,"data-testid":p["data-testid"]?`${p["data-testid"]}-timepicker-selector`:"timepicker-selector"})]}),t(jF,{id:n,show:m,value:x,format:l,onCancel:D,onChange:e=>{b(!1),y(!0),w(e);u&&u({start:e,end:$})}}),t(jF,{id:n,show:v,value:$,format:l,onCancel:D,onChange:e=>{y(!1),C(e);u&&u({start:x,end:e}),""==x?b(!0):h&&h()}})]})}))},RF=E(rh)`
    height: 3rem;
    gap: ${Gi["spacing-8"]};
    // space for clear icon
    padding-right: calc(1.25rem + ${Gi["spacing-20"]});
`,zF=r=>{var{id:n,disabled:o=!1,error:i,value:l,format:u="12hr",readOnly:f,onChange:h,onFocus:p,onBlur:m,alignment:b="left",dropdownZIndex:v,startLimit:y,endLimit:x,interval:w=15}=r,$=lt(r,["id","disabled","error","value","format","readOnly","onChange","onFocus","onBlur","alignment","dropdownZIndex","startLimit","endLimit","interval"]);const[C]=g((()=>hd.generate())),[S,D]=g(null),[k,E]=g(!1),[_,O]=g(""),[F,T]=g(""),[I,M]=g(""),[A,j]=g(""),[B,R]=g(""),z=s(null),P=s(null),L=s(null),N=a((()=>zO.generateTimings(w,u,y,x)),[w,u,y,x]),H=a((()=>{if(""===A)return N;const e=zO.findClosestFlooredTime(A,N);return e?N.slice(N.indexOf(e)):[]}),[N,A]),W=d((e=>zO.parseInput(e,u)),[u]);c((()=>{var e,t;if(l){const r=null!==(e=W(l.start))&&void 0!==e?e:"",n=null!==(t=W(l.end))&&void 0!==t?t:"";T(r),M(n),j(r),R(n)}}),[l,W]),c((()=>{if(i)return void E(!1);const e=W(F),t=W(I);if(void 0===e)O("Invalid start time");else if(void 0===t)O("Invalid end time");else{if(!(""!==e&&""!==t&&zO.to24Hour(t)<zO.to24Hour(e)))return O(""),void(document.activeElement!==P.current&&document.activeElement!==L.current||E(!0));O("End time must be after start time")}E(!1)}),[F,I,W,i]);const V=e=>{o||f||(S||k||null==p||p(),D(e),E(!0))},Y=e=>{var t;o||f||(D(e),E(!0),null===(t=("start"===e?P:L).current)||void 0===t||t.select())};function U(e){var t;switch(e.code){case"Enter":"start"===S?K(F):"end"===S&&(k&&q(I),null===(t=L.current)||void 0===t||t.blur());break;case"Tab":G(F,I,{})}}const K=e=>{G(e,I,{goToNextInput:!0})},q=e=>{G(F,e,{triggerOnBlur:!0})},G=(e,t,{goToNextInput:r,triggerOnBlur:n})=>{var o,i,a;const s=null!==(o=W(e))&&void 0!==o?o:A,l=null!==(i=W(t))&&void 0!==i?i:B;T(s),M(l);s===A&&l===B||null==h||h({start:s,end:l}),r&&void 0!==W(e)&&(D("end"),null===(a=L.current)||void 0===a||a.select()),n&&(D(null),E(!1),null==m||m()),j(s),R(l)},Q=e=>{e.stopPropagation(),T(""),M(""),j(""),R("");null==h||h({start:"",end:""}),D(null),E(!1)},Z=e=>{z.current&&!z.current.contains(e.relatedTarget)&&S&&!k&&G(F,I,{triggerOnBlur:!0})},X=()=>{if(!f&&!o&&((null==F?void 0:F.length)>0||(null==I?void 0:I.length)>0))return t(pO,{onClick:Q,type:"button","aria-label":"Clear",children:t(Op,{"aria-hidden":!0})})};return e(AO,Object.assign({id:n},$,{children:[t(Gk,{children:t(_u,{enabled:!f&&!o,isOpen:k,renderElement:()=>e(RF,{ref:z,$disabled:o,$error:i||!!_,$readOnly:f,onBlur:Z,children:[e(wh,{error:i||!!_,currentActive:null===S?"none":S,children:[t(BO,{ref:P,onFocus:()=>V("start"),placeholder:"start"===S?"hh:mm":"From",onChange:e=>T(e.target.value),value:F,disabled:o,readOnly:f,"data-testid":$["data-testid"]?`${$["data-testid"]}-timepicker-selector`:"timepicker-selector",onClick:()=>Y("start"),onKeyDown:U,autoComplete:"off","aria-label":"Start time input",type:"text",role:"combobox","aria-expanded":k,"aria-controls":C,"aria-autocomplete":"list"}),t(BO,{ref:L,onFocus:()=>V("end"),placeholder:"end"===S?"hh:mm":"To",onChange:e=>M(e.target.value),value:I,disabled:o,readOnly:f,"data-testid":$["data-testid"]?`${$["data-testid"]}-timepicker-selector`:"timepicker-selector",onClick:()=>Y("end"),onKeyDown:U,autoComplete:"off","aria-label":"End time input",type:"text",role:"combobox","aria-expanded":k,"aria-controls":C,"aria-autocomplete":"list"})]}),X()]}),renderDropdown:()=>{if(k)return t(yE,"start"===S?{listItems:N,onSelectItem:K,selectedItems:[F],disableItemFocus:!0,topScrollItem:zO.findClosestFlooredTime(W(F),N),listboxId:C}:{listItems:H,onSelectItem:q,selectedItems:[I],disableItemFocus:!0,topScrollItem:zO.findClosestFlooredTime(W(I),H),listboxId:C})},onClose:e=>{"outside-press"===e?(D(null),E(!1),null==m||m()):G(F,I,{triggerOnBlur:!0})},onDismiss:()=>{var e;null===(e=("start"===S?P:L).current)||void 0===e||e.focus(),E(!1)},offset:8,alignment:b,fitAvailableHeight:!0,customZIndex:v})}),!i&&_&&t(Xd,{id:n?`${n}-error-message`:"error-message",tabIndex:0,"data-testid":n?`${n}-error-message`:"error-message",children:_})]}))},PF=e=>{var{variant:r="dial"}=e,n=lt(e,["variant"]);return t("combobox"===r?zF:BF,Object.assign({},n))};E.div`
    position: relative;
`;const LF=E(nh)`
    height: calc(3rem - 2px); // exclude top and bottom borders
`,NF=r=>{var{id:n,disabled:o=!1,readOnly:i=!1,error:a,value:l,placeholder:c,format:u="24hr",onChange:f,onFocus:h,onBlur:p}=r,m=lt(r,["id","disabled","readOnly","error","value","placeholder","format","onChange","onFocus","onBlur"]);const[b,v]=g(!1),y=s(null);md("mousedown",(function(e){o||i||$(e)}),"document"),md("keyup",(function(e){if("Tab"===e.code)$(e)}),"document");const x=()=>{o||i||b||(v(!0),h&&h())};const w=()=>{v(!1),p&&p()},$=e=>{y.current&&!y.current.contains(e.target)&&b&&w()},C=d((()=>"12hr"===u?"HH:MMam":"HH:MM"),[u,c]);return e(rh,Object.assign({ref:y,id:n,$readOnly:i,$disabled:o,$error:a},m,{children:[t(LF,{onFocus:x,focused:b,readOnly:!0,placeholder:c||C(),value:zO.formatDisplayValue(l,u),disabled:o,"data-testid":n?`${n}-timepicker-selector`:"timepicker-selector"}),t(jF,{id:n,show:b,value:l,format:u,onCancel:()=>{w()},onChange:e=>{f&&f(e),w()}})]}))},HF=E(N$)`
    margin-right: 0.5rem;
`,WF=E(Ip)`
    width: 2.5rem;

    input {
        text-align: center;
    }
`,VF=E(WF)`
    // Cheat to balance the placeholder look while ensuring enough width
    margin-left: 0.5rem;
    width: 6rem;

    input {
        text-align: left;
    }
`,YF=E(fa.BodyBL)`
    margin: 0 0.25rem;
    ${e=>{if(e.$inactive)return _`
                color: ${Yi["text-disabled"]};
            `}}
`,UF=E.div`
    display: flex;
    align-items: center;
    height: calc(3rem - 2px); // exclude top and bottom borders
`,KF=E(fa.BodyBL)``,qF=n=>{var{disabled:o,error:i,value:a,onChange:l,onBlur:d,onChangeRaw:u,onBlurRaw:f,readOnly:h,placeholder:p="00-8888",autoComplete:m}=n,b=lt(n,["disabled","error","value","onChange","onBlur","onChangeRaw","onBlurRaw","readOnly","placeholder","autoComplete"]);const[v,y]=g(""),[x,w]=g(""),[$,C]=g("none"),S=s(null),D=s(null),k=s(null),E=s(v),_=s(x),O=s($),F=e=>e.toLocaleUpperCase().replace(/[^0-9A-Za-z]/g,""),T=vd({ref:D,formatter:F}),I=vd({ref:k,formatter:F}),M=e=>{E.current=e,y(e)},A=e=>{_.current=e,w(e)},j=e=>{O.current=e,C(e)};c((()=>{"floor"===$&&3===v.length&&k.current&&k.current.focus()}),[v]),c((()=>{N(a)}),[a]);const B=e=>{j(e.target.name),e.target.select()},R=e=>{const t=e.target.name,r=e.target.value,n=L(r);"floor"===t?(M(n),n!==v&&H(n,t)):"unit"===t&&(A(n),n!==x&&H(n,t))},z=e=>{const t=e.target.name;if("floor"===t){const e=T();if(!e)return;const{nextValue:r,updateCaretPosition:n}=e;n(),M(r),H(r,t)}else if("unit"===t){const e=I();if(!e)return;const{nextValue:r,updateCaretPosition:n}=e;n(),A(r),H(r,t)}},P=e=>{var t;"Backspace"!==e.code&&"Backspace"!==e.key||"unit"===$&&0===x.length&&(null===(t=D.current)||void 0===t||t.focus())},L=e=>/^[0-9]$/.test(e)?pd.padValue(e,!0):e.toLocaleUpperCase(),N=e=>{if(e!==GF)if(void 0===e||0===e.length)M(""),A("");else{const t=e.split("-");if(2===t.length){const e=t[0],r=t[1];M("floor"===$?e:L(e)),A("unit"===$?r:L(r))}}},H=(e,t)=>{if(!l&&!u)return;const r={floor:E.current,unit:_.current};if(r[t]=e,l){const e=V(r);l(e)}u&&u([r.floor,r.unit])},W=()=>{if(!d&&!f)return;const e={floor:L(E.current),unit:L(_.current)};if(d){const t=V(e);d(t)}f&&f([e.floor,e.unit])},V=e=>{const t=[e.floor,e.unit];return e.floor.length>0&&e.unit.length>0?t.join("-"):t.every((e=>""===e))?"":GF},Y=e=>e.split("-");return e(rh,Object.assign({},b,{ref:S,onClick:()=>{"none"===$&&D.current&&D.current.focus()},$disabled:o,$error:i,$readOnly:h,tabIndex:-1,onBlur:e=>{S.current&&S.current.contains(e.relatedTarget)||"none"!==O.current&&(j("none"),W())},children:[t(HF,{"data-testid":"addon",$disabled:o,$readOnly:h,children:"#"}),h&&a?(r=>{const n=r.split("-");return e(UF,{children:[t(KF,{children:n[0]}),t(YF,{children:"-"}),t(KF,{children:n[1]})]})})(a):e(r,{children:[t(WF,{name:"floor",maxLength:3,value:v,ref:D,onFocus:B,onBlur:R,onChange:z,disabled:o,readOnly:h,type:"text",pattern:"[0-9A-Z]{2,3}","data-testid":"floor-input","aria-label":"floor-input",placeholder:"floor"!==$||h?Y(p)[0]:"",autoComplete:m,styleType:"no-border"}),t(YF,{$inactive:0===v.length,children:"-"}),t(VF,{name:"unit",maxLength:5,value:x,ref:k,onFocus:B,onBlur:R,onChange:z,onKeyDown:P,disabled:o,readOnly:h,type:"text",pattern:"[0-9A-Z]{2,5}","data-testid":"unit-input","aria-label":"unit-input",placeholder:"unit"!==$||h?Y(p)[1]:"",autoComplete:m,styleType:"no-border"})]})]}))},GF="Invalid unit number",QF={DateInput:e=>{var{label:r,errorMessage:n,id:o="form-date-input","data-error-testid":i,"data-testid":a,layoutType:s,mobileCols:l,tabletCols:c,desktopCols:d,xxsCols:u,xsCols:f,smCols:h,mdCols:p,lgCols:g,xlCols:m,xxlCols:b}=e,v=lt(e,["label","errorMessage","id","data-error-testid","data-testid","layoutType","mobileCols","tabletCols","desktopCols","xxsCols","xsCols","smCols","mdCols","lgCols","xlCols","xxlCols"]);return t(hu,{id:o,label:r,errorMessage:n,"data-error-testid":i,disabled:v.disabled,layoutType:s,mobileCols:l,tabletCols:c,desktopCols:d,xxsCols:u,xsCols:f,smCols:h,mdCols:p,lgCols:g,xlCols:m,xxlCols:b,children:t(gh,Object.assign({id:`${o}-base`,"data-testid":a||o,error:!!n},v))})},DateRangeInput:e=>{var{label:r,errorMessage:n,id:o="form-date-range-input","data-error-testid":i,"data-testid":a,layoutType:s,mobileCols:l,tabletCols:c,desktopCols:d,xxsCols:u,xsCols:f,smCols:h,mdCols:p,lgCols:g,xlCols:m,xxlCols:b}=e,v=lt(e,["label","errorMessage","id","data-error-testid","data-testid","layoutType","mobileCols","tabletCols","desktopCols","xxsCols","xsCols","smCols","mdCols","lgCols","xlCols","xxlCols"]);return t(hu,{id:o,label:r,errorMessage:n,"data-error-testid":i,disabled:v.disabled,layoutType:s,mobileCols:l,tabletCols:c,desktopCols:d,xxsCols:u,xsCols:f,smCols:h,mdCols:p,lgCols:g,xlCols:m,xxlCols:b,children:t(kh,Object.assign({id:`${o}-base`,"data-testid":a||o,error:!!n},v))})},ESignature:e=>{const{label:r,errorMessage:n,id:o="form-field","data-error-testid":i,"data-testid":a,layoutType:s,mobileCols:l,tabletCols:c,desktopCols:d,xxsCols:u,xsCols:f,smCols:h,mdCols:p,lgCols:g,xlCols:m,xxlCols:b}=e,v=lt(e,["label","errorMessage","id","data-error-testid","data-testid","layoutType","mobileCols","tabletCols","desktopCols","xxsCols","xsCols","smCols","mdCols","lgCols","xlCols","xxlCols"]);return t(hu,{id:o,label:r,errorMessage:n,"data-error-testid":i,layoutType:s,mobileCols:l,tabletCols:c,desktopCols:d,xxsCols:u,xsCols:f,smCols:h,mdCols:p,lgCols:g,xlCols:m,xxlCols:b,children:t(rp,Object.assign({id:`${o}-base`,"data-testid":a||o},v))})},HistogramSlider:e=>{var{label:r,errorMessage:n,id:o="form-histogram-slider","data-error-testid":i,"data-testid":a,layoutType:s,mobileCols:l,tabletCols:c,desktopCols:d,xxsCols:u,xsCols:f,smCols:h,mdCols:p,lgCols:g,xlCols:m,xxlCols:b}=e,v=lt(e,["label","errorMessage","id","data-error-testid","data-testid","layoutType","mobileCols","tabletCols","desktopCols","xxsCols","xsCols","smCols","mdCols","lgCols","xlCols","xxlCols"]);return t(hu,{id:o,label:r,errorMessage:n,"data-error-testid":i,disabled:v.disabled,layoutType:s,mobileCols:l,tabletCols:c,desktopCols:d,xxsCols:u,xsCols:f,smCols:h,mdCols:p,lgCols:g,xlCols:m,xxlCols:b,children:t(kp,Object.assign({id:`${o}-base`,"data-testid":a||o},v))})},Input:Mp,InputGroup:V$,MaskedInput:aC,Label:eu,MultiSelect:e=>{var{label:r,errorMessage:n,id:o="form-multi-select","data-error-testid":i,"data-testid":a,enableSearch:s=!1,layoutType:l,mobileCols:c,tabletCols:d,desktopCols:u,xxsCols:f,xsCols:h,smCols:p,mdCols:g,lgCols:m,xlCols:b,xxlCols:v,variant:y}=e,x=lt(e,["label","errorMessage","id","data-error-testid","data-testid","enableSearch","layoutType","mobileCols","tabletCols","desktopCols","xxsCols","xsCols","smCols","mdCols","lgCols","xlCols","xxlCols","variant"]);return t(hu,{id:o,label:r,errorMessage:n,"data-error-testid":i,disabled:x.disabled,layoutType:l,mobileCols:c,tabletCols:d,desktopCols:u,xxsCols:f,xsCols:h,smCols:p,mdCols:g,lgCols:m,xlCols:b,xxlCols:v,children:t(B_,Object.assign({id:`${o}-base`,"data-testid":a||o,error:!!n,enableSearch:s,variant:y},x))})},NestedSelect:e=>{var{label:r,errorMessage:n,id:o="form-nested-select","data-error-testid":i,"data-testid":a,layoutType:s,mobileCols:l,tabletCols:c,desktopCols:d,xxsCols:u,xsCols:f,smCols:h,mdCols:p,lgCols:g,xlCols:m,xxlCols:b}=e,v=lt(e,["label","errorMessage","id","data-error-testid","data-testid","layoutType","mobileCols","tabletCols","desktopCols","xxsCols","xsCols","smCols","mdCols","lgCols","xlCols","xxlCols"]);return t(hu,{id:o,label:r,errorMessage:n,"data-error-testid":i,disabled:v.disabled,layoutType:s,mobileCols:l,tabletCols:c,desktopCols:d,xxsCols:u,xsCols:f,smCols:h,mdCols:p,lgCols:g,xlCols:m,xxlCols:b,children:t(L_,Object.assign({id:`${o}-base`,"data-testid":a||o,error:!!n},v))})},NestedMultiSelect:e=>{var{label:r,errorMessage:n,id:o="form-nested-multi-select","data-error-testid":i,"data-testid":a,layoutType:s,mobileCols:l,tabletCols:c,desktopCols:d,xxsCols:u,xsCols:f,smCols:h,mdCols:p,lgCols:g,xlCols:m,xxlCols:b}=e,v=lt(e,["label","errorMessage","id","data-error-testid","data-testid","layoutType","mobileCols","tabletCols","desktopCols","xxsCols","xsCols","smCols","mdCols","lgCols","xlCols","xxlCols"]);return t(hu,{id:o,label:r,errorMessage:n,"data-error-testid":i,disabled:v.disabled,layoutType:s,mobileCols:l,tabletCols:c,desktopCols:d,xxsCols:u,xsCols:f,smCols:h,mdCols:p,lgCols:g,xlCols:m,xxlCols:b,children:t(P_,Object.assign({id:`${o}-base`,"data-testid":a||o,error:!!n},v))})},Select:e=>{var{label:r,errorMessage:n,id:o="form-select","data-error-testid":i,"data-testid":a,enableSearch:s=!1,layoutType:l,mobileCols:c,tabletCols:d,desktopCols:u,xxsCols:f,xsCols:h,smCols:p,mdCols:g,lgCols:m,xlCols:b,xxlCols:v,variant:y}=e,x=lt(e,["label","errorMessage","id","data-error-testid","data-testid","enableSearch","layoutType","mobileCols","tabletCols","desktopCols","xxsCols","xsCols","smCols","mdCols","lgCols","xlCols","xxlCols","variant"]);return t(hu,{id:o,label:r,errorMessage:n,"data-error-testid":i,disabled:x.disabled,layoutType:l,mobileCols:c,tabletCols:d,desktopCols:u,xxsCols:f,xsCols:h,smCols:p,mdCols:g,lgCols:m,xlCols:b,xxlCols:v,children:t(bO,Object.assign({id:`${o}-base`,"data-testid":a||o,error:!!n,enableSearch:s,variant:y},x))})},SelectHistogram:e=>{var{label:r,errorMessage:n,id:o="form-select-histogram","data-error-testid":i,"data-testid":a,layoutType:s,mobileCols:l,tabletCols:c,desktopCols:d,xxsCols:u,xsCols:f,smCols:h,mdCols:p,lgCols:g,xlCols:m,xxlCols:b,histogramSlider:v}=e,y=lt(e,["label","errorMessage","id","data-error-testid","data-testid","layoutType","mobileCols","tabletCols","desktopCols","xxsCols","xsCols","smCols","mdCols","lgCols","xlCols","xxlCols","histogramSlider"]);return t(hu,{id:o,label:r,errorMessage:n,"data-error-testid":i,disabled:y.disabled,layoutType:s,mobileCols:l,tabletCols:c,desktopCols:d,xxsCols:u,xsCols:f,smCols:h,mdCols:p,lgCols:g,xlCols:m,xxlCols:b,children:t(CO,Object.assign({histogramSlider:v,error:!!n,"data-testid":a||o,id:`${o}-base`},y))})},Slider:e=>{var{label:r,errorMessage:n,id:o="form-slider","data-error-testid":i,"data-testid":a,layoutType:s,mobileCols:l,tabletCols:c,desktopCols:d,xxsCols:u,xsCols:f,smCols:h,mdCols:p,lgCols:g,xlCols:m,xxlCols:b}=e,v=lt(e,["label","errorMessage","id","data-error-testid","data-testid","layoutType","mobileCols","tabletCols","desktopCols","xxsCols","xsCols","smCols","mdCols","lgCols","xlCols","xxlCols"]);return t(hu,{id:o,label:r,errorMessage:n,"data-error-testid":i,disabled:v.disabled,layoutType:s,mobileCols:l,tabletCols:c,desktopCols:d,xxsCols:u,xsCols:f,smCols:h,mdCols:p,lgCols:g,xlCols:m,xxlCols:b,children:t(SO,Object.assign({id:`${o}-base`,"data-testid":a||o},v))})},RangeSlider:e=>{var{label:r,errorMessage:n,id:o="form-range-slider","data-error-testid":i,"data-testid":a,layoutType:s,mobileCols:l,tabletCols:c,desktopCols:d,xxsCols:u,xsCols:f,smCols:h,mdCols:p,lgCols:g,xlCols:m,xxlCols:b}=e,v=lt(e,["label","errorMessage","id","data-error-testid","data-testid","layoutType","mobileCols","tabletCols","desktopCols","xxsCols","xsCols","smCols","mdCols","lgCols","xlCols","xxlCols"]);return t(hu,{id:o,label:r,errorMessage:n,"data-error-testid":i,disabled:v.disabled,layoutType:s,mobileCols:l,tabletCols:c,desktopCols:d,xxsCols:u,xsCols:f,smCols:h,mdCols:p,lgCols:g,xlCols:m,xxlCols:b,children:t(xp,Object.assign({id:`${o}-base`,"data-testid":a||o},v))})},RangeSelect:e=>{var{label:r,errorMessage:n,id:o="form-select","data-error-testid":i,"data-testid":a,enableSearch:s=!1,layoutType:l,mobileCols:c,tabletCols:d,desktopCols:u,xxsCols:f,xsCols:h,smCols:p,mdCols:g,lgCols:m,xlCols:b,xxlCols:v}=e,y=lt(e,["label","errorMessage","id","data-error-testid","data-testid","enableSearch","layoutType","mobileCols","tabletCols","desktopCols","xxsCols","xsCols","smCols","mdCols","lgCols","xlCols","xxlCols"]);return t(hu,{id:o,label:r,errorMessage:n,"data-error-testid":i,disabled:y.disabled,layoutType:l,mobileCols:c,tabletCols:d,desktopCols:u,xxsCols:f,xsCols:h,smCols:p,mdCols:g,lgCols:m,xlCols:b,xxlCols:v,children:t(mO,Object.assign({id:`${o}-base`,"data-testid":a||o,error:!!n,enableSearch:s},y))})},Textarea:MO,Timepicker:e=>{var{label:r,errorMessage:n,id:o="form-timepicker","data-error-testid":i,"data-testid":a,layoutType:s,mobileCols:l,tabletCols:c,desktopCols:d,xxsCols:u,xsCols:f,smCols:h,mdCols:p,lgCols:g,xlCols:m,xxlCols:b}=e,v=lt(e,["label","errorMessage","id","data-error-testid","data-testid","layoutType","mobileCols","tabletCols","desktopCols","xxsCols","xsCols","smCols","mdCols","lgCols","xlCols","xxlCols"]);return t(hu,{id:o,label:r,errorMessage:n,disabled:v.disabled,"data-error-testid":i,layoutType:s,mobileCols:l,tabletCols:c,desktopCols:d,xxsCols:u,xsCols:f,smCols:h,mdCols:p,lgCols:g,xlCols:m,xxlCols:b,children:t(NF,Object.assign({id:`${o}-base`,"data-testid":a||o,error:!!n},v))})},TimeRangePicker:e=>{var{label:r,errorMessage:n,id:o="form-timepicker","data-error-testid":i,"data-testid":a,layoutType:s,mobileCols:l,tabletCols:c,desktopCols:d,xxsCols:u,xsCols:f,smCols:h,mdCols:p,lgCols:g,xlCols:m,xxlCols:b}=e,v=lt(e,["label","errorMessage","id","data-error-testid","data-testid","layoutType","mobileCols","tabletCols","desktopCols","xxsCols","xsCols","smCols","mdCols","lgCols","xlCols","xxlCols"]);return t(hu,{id:o,label:r,errorMessage:n,disabled:v.disabled,"data-error-testid":i,layoutType:s,mobileCols:l,tabletCols:c,desktopCols:d,xxsCols:u,xsCols:f,smCols:h,mdCols:p,lgCols:g,xlCols:m,xxlCols:b,children:t(PF,Object.assign({id:`${o}-base`,"data-testid":a||o,error:!!n},v))})},CustomField:e=>{var{id:r="form-custom-field","data-error-testid":n,children:o}=e,i=lt(e,["id","data-error-testid","children"]);return t(hu,Object.assign({id:r,"data-error-testid":n},i,{children:o}))},UnitNumberInput:e=>{var{label:r,errorMessage:n,id:o="form-unit-number-input","data-error-testid":i,"data-testid":a,layoutType:s,mobileCols:l,tabletCols:c,desktopCols:d,xxsCols:u,xsCols:f,smCols:h,mdCols:p,lgCols:g,xlCols:m,xxlCols:b}=e,v=lt(e,["label","errorMessage","id","data-error-testid","data-testid","layoutType","mobileCols","tabletCols","desktopCols","xxsCols","xsCols","smCols","mdCols","lgCols","xlCols","xxlCols"]);return t(hu,{id:o,label:r,errorMessage:n,"data-error-testid":i,disabled:v.disabled,layoutType:s,mobileCols:l,tabletCols:c,desktopCols:d,xxsCols:u,xsCols:f,smCols:h,mdCols:p,lgCols:g,xlCols:m,xxlCols:b,children:t(qF,Object.assign({id:`${o}-base`,"data-testid":a||o,error:!!n},v))})},PhoneNumberInput:e=>{var{label:r,errorMessage:n,id:o="form-phone-number-input","data-error-testid":i,"data-testid":a,layoutType:s,mobileCols:l,tabletCols:c,desktopCols:d,xxsCols:u,xsCols:f,smCols:h,mdCols:p,lgCols:g,xlCols:m,xxlCols:b}=e,v=lt(e,["label","errorMessage","id","data-error-testid","data-testid","layoutType","mobileCols","tabletCols","desktopCols","xxsCols","xsCols","smCols","mdCols","lgCols","xlCols","xxlCols"]);return t(hu,{id:o,label:r,errorMessage:n,"data-error-testid":i,disabled:v.disabled,layoutType:s,mobileCols:l,tabletCols:c,desktopCols:d,xxsCols:u,xsCols:f,smCols:h,mdCols:p,lgCols:g,xlCols:m,xxlCols:b,children:t(rO,Object.assign({id:`${o}-base`,"data-testid":a||o,error:!!n},v))})},PredictiveTextInput:e=>{var{label:r,errorMessage:n,id:o="form-predictive-text","data-error-testid":i,"data-testid":a,layoutType:s,mobileCols:l,tabletCols:c,desktopCols:d,xxsCols:u,xsCols:f,smCols:h,mdCols:p,lgCols:g,xlCols:m,xxlCols:b}=e,v=lt(e,["label","errorMessage","id","data-error-testid","data-testid","layoutType","mobileCols","tabletCols","desktopCols","xxsCols","xsCols","smCols","mdCols","lgCols","xlCols","xxlCols"]);return t(hu,{id:o,label:r,errorMessage:n,"data-error-testid":i,disabled:v.disabled,layoutType:s,mobileCols:l,tabletCols:c,desktopCols:d,xxsCols:u,xsCols:f,smCols:h,mdCols:p,lgCols:g,xlCols:m,xxlCols:b,children:t(fO,Object.assign({id:`${o}-base`,"data-testid":a||o,error:!!n},v))})}},ZF=E.li`
    display: flex;
    flex-direction: column;
    padding: ${Gi["spacing-32"]} 0;
    background: transparent;

    :not(:last-child) {
        border-bottom: ${qi["width-010"]} ${qi.solid} ${Yi.border};
    }
`,XF=E.div`
    display: flex;
    align-items: flex-start;
    margin-bottom: ${Gi["spacing-16"]};
    width: 100%;
`,JF=E.div`
    display: flex;
    flex: 1;
    flex-direction: column;
`,eT=E.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin-bottom: ${Gi["spacing-16"]};

    ${Xi.MaxWidth.sm} {
        flex-direction: column;
        justify-content: flex-start;
    }
`,tT=E(fa.BodyMD)`
    display: flex;
    flex: 1;
    margin-right: ${Gi["spacing-16"]};

    ${Xi.MaxWidth.sm} {
        margin-right: 0;
        margin-bottom: ${Gi["spacing-8"]};
    }
`,rT=E(fa.BodyMD)``,nT=E.div`
    display: flex;
    ${Xi.MaxWidth.sm} {
        flex-direction: column;
    }

    ${e=>{if(e.$thumbnail)return _`
                margin-left: calc(
                    96px + ${Gi["spacing-32"]}
                ); // thumbnail width + right margin

                ${Xi.MaxWidth.sm} {
                    margin-left: 0;
                }
            `}}
`,oT=E(ef.Small)`
    width: 7.5rem;
    :not(:last-of-type) {
        margin-right: ${Gi["spacing-16"]};
    }

    ${Xi.MaxWidth.sm} {
        width: 100%;
        :not(:last-of-type) {
            margin-bottom: ${Gi["spacing-16"]};
        }
    }
`;const iT=({thumbnailImageDataUrl:r,"data-testid":n,renderReplaceButton:o,onReplaceClick:i})=>e(aT,{"data-testid":n,children:[t(sT,{"data-testid":n?`${n}-image`:void 0,src:r}),o&&t(lT,{type:"button",onClick:()=>{i&&i()},children:"Replace"})]}),aT=E.div`
    width: auto;
    margin-right: ${Gi["spacing-32"]};
    display: flex;
    flex-shrink: 0;
    flex-direction: column;
    justify-content: center;
`,sT=E((({src:e,alt:r,className:n,"data-testid":o})=>t("img",{src:e,alt:r||"",className:n,"data-testid":o,onError:e=>{e.target.onerror=null,e.target.src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKAAAABQCAYAAACeXX40AAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAARTSURBVHgB7Z1tUuJAEIY7qMRYWnIE9wR6BD2Be5S9weoN1pusJ1iPwJ5guYH4GeNH2HkppgojYAIhbXrepwoJEMofPHZP9zQxkgJpmh5HUfTdHZ6624EQsiLOp7676+d5fp4kyeDda/5gNBr1siz76Q5/CCHr41ccx+dOyiEejAWcyHflDg+FkDWDiNjtdk8gYQdPTCIf5SON4ALe0cQ5idya78CZ+E8IaRgn4gki4JkQogCK3Y77wdRLtDiNnp6eRkKIEh0hRBEKSFShgEQVCkhUoYBEFQpIVKGARBUKSFShgEQVCkhUoYBEFQpIVNkUokqWZfLy8iJvb2/jx1tbWxLHsWxsbEgIcBpGCQh3e3srr6+vH16Lokh2dnbGN+swAioA+a6vrzERPPN1PP/w8CB5nsvu7q5YhmvAhoFciHzz5JsmTVNxGUosQwEbBmu+WWl3Ho+Pj6VkbSsUsGGqRjSka6Riq1DAhllGJkZAUhuocKtCAUltLNPfs9wTpIAL8M3hOtne3q50PhrTnY7dj4kCzgFrteFwKM/Pz1In3W53vNNRFvYBA+Xm5mYs4bzdilWAVJubn+8B7O3tlTqvzVDAGaAB7KVDAXB/f19rIYCU2uv1JEmSmUUJpMPrVdN1G+FecAGs+5B6i+0SpM79/X2pG/weyI57yIiCw3rUm4Z7wVMgyt3d3c3s1WEtiMiIqFUniIaQO1SYgqfALgVGo+aBVFx3URI6FHACoh4mUD4DRYnlrbGmoYATUPWWKTRwDtaIlncnmoQCyvuqtwwoVJCOyeoELyBkKpN6i2C9iFEpshrBC1h2OHQWEHeZogTvwVwgCVxARLBVdzmqFiUQD+/BbR17zW0jWAHx4deRQhE9yxYwfu3oz10l+lohWAHLSlMGRFE0sBfhhxumoyXeF3oxE6SAiHx1pz+k1nnj9pDODzcUwXusf/FoEcEJiKizruoVUbC4k+LlW7TW9F/BDJHgBFz3uqu4l4zHnxU6fuwrxPVgUAKi4bzuytNf8cAPNpRt0yByhthXDGYcC1EIVyNoCoxUVW3xYBwLQ6hVJqbbThAR0EejJlmmv+iHX0NaDwYhYB0N56bw68FQMC8gxMPar02EtB40LyBSbxurS7RmFg3HWsG0gG1KvbNo6x9PFcwKiOixzJjVV2K6pWMVkwL6atIC1ke3TArY9tRbpMxuSlsxJ2Abq94yWE3F5gS0+kFZ/R6KKQFRdFieMsbYlrXobkbAUJq31ka3zFyaAwKGsomPqrjuS4RowYsTEVX4xXSiCgUkqlBAogoFJKpQQKIKBSSqUECiCgUkqlBAogoFJKpAwIEQokO/k+f5pRCiQBRF/ShN02N38EcIaZjRaPStkyTJlYuCF0JIs1w49wbj/5TnTOxlWYYoeCSErJ+/cRwj8w7HVTAO3BMnjISkAS68fHjw4X+FujXhgbs7cyccCiMiqYeBu126TPsbS77pF/4DuxeyMpdnp3gAAAAASUVORK5CYII="}})))`
    width: 96px;
    height: 96px;
    aspect-ratio: 1;
    border-radius: ${Qi.sm};
    border: ${qi["width-010"]} ${qi.solid} ${Yi.border};
    object-fit: cover;

    ${Xi.MaxWidth.sm} {
        width: 64px;
        height: 64px;
    }
`,lT=E.button`
    width: 100%;
    height: 1.625rem;
    margin-top: ${Gi["spacing-8"]};
    border: none;
    background: transparent;
    cursor: pointer;

    ${Ui["body-md-semibold"]}
    color: ${Yi["text-primary"]};

    :hover {
        color: ${Yi["text-hover"]};
    }
`;var cT;!function(e){e.formatFileSizeDisplay=e=>{if(!e||0===e)return"0 KB";const t=Math.floor(Math.log(e)/Math.log(1024));return`${Number(e/Math.pow(1024,t)).toFixed(0)} ${["B","KB","MB","GB","TB","PB","EB","ZB","YB"][t]}`},e.isSupportedImageType=e=>["image/avif","image/gif","image/jpeg","image/png","image/svg+xml","image/webp"].includes(e)}(cT||(cT={}));const dT=({fileItem:r,fileDescriptionMaxLength:n,wrapperWidth:o,onSave:i,onCancel:a,onBlur:l})=>{const{id:d,name:u,size:f,truncateText:h=!0,thumbnailImageDataUrl:p}=r,[m,b]=g(),[v,y]=g(""),x=s(null),w=s(null);c((()=>{b($(u))}),[o]),c((()=>{y(r.description||"")}),[r]);const $=e=>{if(!h)return e;const t=w&&w.current?w.current.getBoundingClientRect().width:0;return pd.truncateOneLine(e,t,t/2,t/2/8,16)};return e(ZF,{"data-testid":`${d}-edit-display`,children:[e(XF,{children:[p&&t(iT,{thumbnailImageDataUrl:p}),e(JF,{children:[e(eT,{ref:w,children:[t(tT,{weight:"semibold",children:m}),t(rT,{children:cT.formatFileSizeDisplay(f)})]}),t(QF.Textarea,{ref:x,id:`${d}-description-textarea`,"data-testid":`${d}-textarea`,value:v,maxLength:n,onChange:e=>{y(e.target.value)},onBlur:e=>{l(e.target.value)},rows:3,label:{children:"Photo description",subtitle:"Describe this photo to users who may not be able to see the image."}})]})]}),e(nT,{$thumbnail:!!p,children:[t(oT,{"data-testid":`${d}-save-button`,type:"button",disabled:0===v.trim().length,onClick:()=>{x.current&&i(x.current.value.trim())},children:"Save"}),t(oT,{type:"button",styleType:"secondary","data-testid":`${d}-cancel-button`,onClick:a,children:"Cancel"})]})]})},uT=E.li`
    display: flex;
    align-items: center;
    width: 100%;
    border: none;

    :not(:last-child) {
        margin-bottom: ${Gi["spacing-16"]};
    }

    ${e=>e.$disabled&&"none"===e.$focusType?_`
                cursor: not-allowed;
            `:e.$sortable&&"self"===e.$focusType?_`
                cursor: grabbing;
                // Following recommendation by the library for touch events
                // https://docs.dndkit.com/api-documentation/sensors/touch#recommendations
                touch-action: manipulation;
            `:e.$sortable?_`
                :hover {
                    cursor: grab;
                }
                // Following recommendation by the library for touch events
                // https://docs.dndkit.com/api-documentation/sensors/touch#recommendations
                touch-action: manipulation;
            `:void 0}
`,fT=E(Me)`
    margin-right: ${Gi["spacing-16"]};
    height: 1.5rem;
    width: 1.5rem;
    color: ${Yi.icon};

    ${e=>e.$active?_`
                color: ${Yi["icon-primary"]};
            `:e.$disabled?_`
                color: ${Yi["icon-disabled"]};
            `:void 0};
`,hT=E.div`
    background: ${Yi["bg-primary-subtlest"]};
    border: ${qi["width-010"]} ${qi.solid} ${Yi.border};
    border-radius: ${Qi.sm};
    padding: ${Gi["spacing-16"]} ${Gi["spacing-32"]};
    display: flex;
    align-items: center;
    width: 100%;

    ${Xi.MaxWidth.sm} {
        padding: ${Gi["spacing-16"]};
    }

    ${e=>e.$focused?_`
                border-color: ${Yi["border-focus"]};
                box-shadow: 0 0 4px 1px
                    rgb(from ${Yi["border-focus"]} r g b / 50%);
            `:e.$disabled?_`
                border-color: ${Yi["border-disabled"]};
            `:e.$error?_`
                background: ${Yi["bg-error"]};
                border-color: ${Yi["border-error"]};
            `:void 0}

    ${e=>{if(!e.$error&&(e.$loading||e.$editable))return _`
                ${Xi.MaxWidth.sm} {
                    flex-direction: column;
                    align-items: flex-start;
                }
            `}}
`,pT=E.div`
    display: flex;
    flex: 1;
    align-items: center;

    ${Xi.MaxWidth.sm} {
        flex-direction: column;
        width: 100%;
        align-items: flex-start;
    }

    ${e=>{if(e.$hasThumbnail)return _`
                ${Xi.MaxWidth.sm} {
                    flex-direction: row;
                    align-items: center;
                }
            `}}
`,gT=E.div`
    display: flex;
    flex: 1;
    flex-direction: column;
    width: 100%;
`,mT=E.div`
    display: flex;
    flex: 1;
    align-items: center;

    ${Xi.MaxWidth.sm} {
        flex-direction: column;
        align-items: flex-start;
        width: 100%;
    }
`,bT=E.div`
    display: flex;
    width: 5rem;
    margin-left: ${Gi["spacing-8"]};
    justify-content: flex-end;

    ${Xi.MaxWidth.sm} {
        ${e=>e.$hideInMobile?_`
                    display: none;
                    visibility: hidden;
                `:_`
                    width: 100%;
                    margin-left: 0;
                    margin-top: ${Gi["spacing-8"]};
                    justify-content: flex-start;
                `}
    }
`,vT=E(fa.BodyMD)``,yT=E(vT)`
    margin-top: ${Gi["spacing-4"]};
`,xT=E(fa.BodySM)`
    color: ${Yi["text-error"]};
`,wT=E(xT)`
    margin-top: ${Gi["spacing-4"]};
    ${Xi.MaxWidth.sm} {
        display: none;
        visibility: hidden;
    }
`,$T=E(xT)`
    display: none;
    visibility: hidden;
    ${Xi.MaxWidth.sm} {
        display: block;
        visibility: visible;
        margin-top: ${Gi["spacing-8"]};
    }
`,CT=E.div`
    width: 6rem;
    margin-left: ${Gi["spacing-32"]};
    display: flex;
    justify-content: flex-end;
    align-items: center;

    ${Xi.MaxWidth.sm} {
        width: fit-content;

        ${e=>e.$loading&&!e.$error?_`
                    margin-left: 0;
                    margin-top: ${Gi["spacing-16"]};
                    width: 100%;
                `:e.$editable&&!e.$error?_`
                    margin-left: 0;
                    margin-top: ${Gi["spacing-16"]};
                    align-self: flex-end;
                `:void 0}
    }
`,ST=E(Ah)`
    min-width: unset;

    :not(:last-child) {
        margin-right: ${Gi["spacing-16"]};
    }
`,DT=E(Md)`
    height: 2.5rem;
    width: 2.5rem;
    padding: unset;
    svg {
        height: 1.5rem;
        width: 1.5rem;
        color: ${Yi.icon};
    }
`,kT=m((({fileItem:n,editable:o,sortable:i,wrapperWidth:a,disabled:l,readOnly:d,onDelete:u,onEditClick:f})=>{const{id:h,name:p,size:m,description:v,progress:y=1,errorMessage:x,thumbnailImageDataUrl:w,truncateText:$=!0}=n,[C,S]=g(),{activeId:D}=b(Ae),{attributes:k,listeners:E,setNodeRef:_,transform:O,transition:F}=Nl({id:h}),T=s(null),I={transform:Na.Translate.toString(O),transition:F},M=Object.assign(Object.assign({style:I},k),E),A=y<1,j=cT.formatFileSizeDisplay(m),B=D?D===h?"self":"others":"none";c((()=>{S(L(p))}),[a]);const R=()=>{u()},z=()=>{f&&f()},P=e=>{i&&e.stopPropagation()},L=e=>{if(!$)return e;const t=T&&T.current?T.current.getBoundingClientRect().width:0;return pd.truncateOneLine(e,t,t/2,t/2/8,16)},N=()=>l||!!D,H=()=>!!i&&!d,W=()=>e(r,{children:[t(vT,{weight:v?"semibold":"regular",children:C}),v&&t(yT,{children:v})]});return e(uT,Object.assign({id:h,ref:_,$sortable:H(),$disabled:N(),$focusType:B},H()?M:{},{children:[H()&&t(fT,{"data-testid":`${h}-drag-handle`,$disabled:N(),$active:"self"===B}),e(hT,{$focused:"self"===B,$error:!!x,$loading:A,$disabled:N(),$editable:o,children:[(()=>{let n;return n=x?e(r,{children:[e(gT,{ref:T,children:[W(),x&&t(wT,{weight:"semibold",children:x})]}),t(bT,{children:t(vT,{children:j})}),x&&t($T,{weight:"semibold",children:x})]}):w?(n=>e(r,{children:[t(iT,{thumbnailImageDataUrl:n,"data-testid":`${h}-thumbnail`}),e(mT,{children:[t(gT,{ref:T,children:W()}),t(bT,{children:t(vT,{children:j})})]})]}))(w):e(r,{children:[t(gT,{ref:T,children:W()}),t(bT,{$hideInMobile:A,children:t(vT,{children:j})})]}),t(pT,{$hasThumbnail:!!w,children:n})})(),!d&&(()=>{let n;return n=x?t(DT,{onClick:R,"data-testid":`${h}-error-delete-button`,"aria-label":`delete-${p}`,children:t(te,{"aria-hidden":!0})}):A?t(Th,{progress:y,"data-testid":`${h}-progress-bar`}):e(r,{children:[o&&t(ST,{"data-testid":`${h}-edit-button`,"data-no-dnd":"true",type:"button",styleType:"light",sizeType:"small","aria-label":`edit ${p}`,disabled:N(),onClick:z,onKeyDown:P,children:t(Ie,{"aria-hidden":!0})},"edit"),t(ST,{"data-testid":`${h}-delete-button`,"data-no-dnd":"true",type:"button",styleType:"light",sizeType:"small","aria-label":`delete ${p}`,disabled:N(),onClick:R,onKeyDown:P,children:t(Te,{"aria-hidden":!0})},"delete")]}),t(CT,{$editable:o,$error:!!x,$loading:A,children:n})})()]})]}))})),ET=E.ul`
    list-style-type: none;
    margin-bottom: ${e=>e.$readOnly?"0":Gi["spacing-32"]};
`,_T=E.li`
    border-top: ${qi["width-010"]} ${qi.solid} ${Yi.border};
    border-bottom: ${qi["width-010"]} ${qi.solid} ${Yi.border};

    :not(:last-child) {
        margin-bottom: ${Gi["spacing-32"]};
    }

    :not(:first-child) {
        margin-top: ${Gi["spacing-32"]};
    }

    ul {
        list-style-type: none;
    }
`,OT=({fileItems:e,editableFileItems:r,fileDescriptionMaxLength:n,sortable:o,disabled:i,readOnly:l,onItemUpdate:d,onItemDelete:u,onSort:f})=>{const[h,p]=g({}),{setActiveId:m}=b(Ae),{width:v=0,ref:y}=Lc(),x=s({}),w=function(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];return a((()=>[...t].filter((e=>null!=e))),[...t])}(Ja(Nc,{activationConstraint:{distance:8}}),Ja(Us,{activationConstraint:{delay:150,tolerance:5}}),Ja(Bs,{coordinateGetter:Vl})),$=e=>{delete x.current[e]};c((()=>{p(I(e))}),[e]);const C=e=>t=>{M(e.id,"display"),$(e.id);const r=Object.assign(Object.assign({},e),{description:t});d(r)},S=e=>t=>{x.current[e.id]=t},D=e=>()=>{e.description&&0!==e.description.length?M(e.id,"display"):u(e),$(e.id)},k=e=>()=>{M(e.id,"edit")},E=e=>()=>{u(e)},_=t=>{if(f&&e){const{active:r,over:n}=t;if(n&&r.id!==n.id){const t=e.findIndex((e=>e.id===r.id)),o=e.findIndex((e=>e.id===n.id)),i=kl(e,t,o);f(i)}}m(void 0)},O=e=>{const{active:t}=e;m(t.id)},F=e=>r&&cT.isSupportedImageType(e.type),T=e=>!e.errorMessage&&!l&&!("number"==typeof e.progress&&e.progress<1)&&F(e)&&!e.description,I=e=>{if(!e||0===e.length)return{};const t={};for(const r of e)r.errorMessage?t[r.id]="error":h[r.id]?t[r.id]=h[r.id]:t[r.id]=T(r)?"edit":"display";return t},M=(e,t)=>{p((r=>Object.assign(Object.assign({},r),{[e]:t})))},A=()=>e&&e.length>1&&o&&Object.values(h).every((e=>"display"===e)),j=()=>{const r=((e,t)=>{if(!e||0===e.length)return[];const r=[];for(const n of e)if("edit"===t[n.id]){const e=r[r.length-1];Array.isArray(e)?e.push(n):r.push([n])}else r.push(n);return r})(e,h);return 0===r.length?null:r.map(((e,r)=>Array.isArray(e)?((e,r)=>{const o=e.map((e=>{const r=Object.assign({},e);return void 0!==x.current[e.id]&&(r.description=x.current[e.id]),t(dT,{fileItem:r,wrapperWidth:v,fileDescriptionMaxLength:n,onSave:C(e),onCancel:D(e),onBlur:S(e)},e.id)}));return t(_T,{children:t("ul",{children:o})},`editable-${r}`)})(e,r):t(kT,{fileItem:e,editable:F(e),wrapperWidth:v,sortable:A(),disabled:i,readOnly:l,onDelete:E(e),onEditClick:k(e)},e.id)))};return e&&0!==e.length?i||l||!A()?t(ET,{$readOnly:l,ref:y,children:j()}):t(wl,{sensors:w,onDragEnd:_,onDragStart:O,children:t(Al,{items:e,strategy:Tl,children:t(ET,{$readOnly:l,ref:y,children:j()})})}):null},FT=E.div`
    display: flex;
    flex-direction: column;
    margin-bottom: ${Gi["spacing-32"]};
    gap: ${Gi["spacing-8"]};
`,TT=E(fa.BodyBL)``,IT=E.div`
    color: ${Yi.text};
    ${Rd({textSize:"body-baseline"})}
`,MT=E(fa.BodyMD)`
    color: ${Yi["text-subtler"]};
`,AT=E.div`
    color: ${Yi.text};
    ${Rd({textSize:"body-md"})}
`,jT=E(QO)`
    margin-bottom: ${Gi["spacing-32"]};
`,BT=E.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-end;

    ${Xi.MaxWidth.sm} {
        align-items: flex-start;
    }
`,RT=E(ef.Small)`
    width: 10rem;

    ${Xi.MaxWidth.sm} {
        width: 100%;
    }
`,zT=E.label`
    ${Ui["body-md-semibold"]}
    color: ${Yi["text-subtler"]};
    margin-top: ${Gi["spacing-8"]};
    width: 10rem;
    text-align: center;
    ${Xi.MaxWidth.sm} {
        display: none;
        visibility: hidden;
    }
`,PT=E(QO)`
    margin-bottom: ${Gi["spacing-32"]};
`,LT=({styleType:r="bordered",fileItems:n,title:o,description:i,maxFiles:a,warning:l,className:c,name:d,id:u,"data-testid":f,accept:h,capture:p,multiple:m,disabled:b,sortable:v=!1,fileDescriptionMaxLength:y,editableFileItems:x=!1,errorMessage:w,readOnly:$,onChange:C,onDelete:S,onEdit:D,onSort:k})=>{const E=s(null),[_,O]=g(),F=()=>!(!a||!n)&&n.length>=a;return t(Ae.Provider,{value:{activeId:_,setActiveId:O},children:e(ya,{ref:E,onChange:e=>{!b&&C&&C(e)},id:u?`${u}-dropzone`:"dropzone",accept:h,capture:p,border:"bordered"===r,className:c,"data-testid":f,name:d,multiple:m,disabled:b||F()||$,children:[!(!o&&!i)&&e(FT,{children:[o?t("string"==typeof o?TT:IT,{children:o}):null,i?t("string"==typeof i?MT:AT,{children:i}):null]}),!!l&&t(jT,{type:"warning",children:l}),t(OT,{fileItems:n,editableFileItems:x,fileDescriptionMaxLength:y,sortable:v,disabled:b,readOnly:$,onItemDelete:e=>{S&&S(e)},onItemUpdate:e=>{D&&D(e)},onSort:e=>{k&&k(e)}}),w&&t(PT,{type:"error",children:w}),!$&&e(BT,{children:[t(RT,{type:"button",styleType:"secondary",disabled:!!_||b||F(),onClick:e=>{b||(e.preventDefault(),E.current&&E.current.openFileDialog())},children:"Upload files"}),t(zT,{children:"or drop them here"})]})]})})};export{Yi as C,LT as F,Jh as S,ct as _,ep as a};
//# sourceMappingURL=index.43e5ce02.js.map
