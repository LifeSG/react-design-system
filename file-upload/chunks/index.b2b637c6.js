import{jsx as e,jsxs as t,Fragment as r}from"react/jsx-runtime";import*as n from"react";import o,{createContext as i,useMemo as a,useRef as l,useReducer as s,useEffect as d,useCallback as c,forwardRef as u,useImperativeHandle as f,Fragment as h,useLayoutEffect as p,useState as g,memo as m,useContext as b,isValidElement as v,createRef as y,cloneElement as x,PureComponent as w,version as $,Children as C,lazy as D,Suspense as S,createElement as k}from"react";import{CloudArrowUpFillIcon as E}from"@lifesg/react-icons/cloud-arrow-up-fill";import F,{css as O,isStyledComponent as T,ThemeContext as _,keyframes as I}from"styled-components";import{ExternalIcon as M}from"@lifesg/react-icons/external";import A,{unstable_batchedUpdates as B,createPortal as j,findDOMNode as z}from"react-dom";import{ICircleFillIcon as R}from"@lifesg/react-icons/i-circle-fill";import{CrossIcon as L}from"@lifesg/react-icons/cross";import{useFloatingTree as P,FloatingTree as N,useFloatingNodeId as H,FloatingNode as W,useFloating as Y,useTransitionStatus as V,useDismiss as U,useInteractions as K,FloatingFocusManager as q,autoUpdate as Z,offset as G,flip as X,shift as J,limitShift as Q,size as ee,useClick as te,useHover as re,useFocus as ne,FloatingPortal as oe,useTransitionStyles as ie}from"@floating-ui/react";import{ExclamationCircleFillIcon as ae}from"@lifesg/react-icons/exclamation-circle-fill";import{ChevronDownIcon as le}from"@lifesg/react-icons/chevron-down";import{ChevronLeftIcon as se}from"@lifesg/react-icons/chevron-left";import{ChevronRightIcon as de}from"@lifesg/react-icons/chevron-right";import{ArrowRightIcon as ce,PencilIcon as ue,EraserIcon as fe,TickCircleFillIcon as he,ChevronDownIcon as pe}from"@lifesg/react-icons";import{SquareIcon as ge}from"@lifesg/react-icons/square";import{SquareFillIcon as me}from"@lifesg/react-icons/square-fill";import{SquareTickFillIcon as be}from"@lifesg/react-icons/square-tick-fill";import{TickIcon as ve}from"@lifesg/react-icons/tick";import{MagnifierIcon as ye}from"@lifesg/react-icons/magnifier";import{CaretRightIcon as xe}from"@lifesg/react-icons/caret-right";import{MinusSquareFillIcon as we}from"@lifesg/react-icons/minus-square-fill";import{EyeIcon as $e}from"@lifesg/react-icons/eye";import{EyeSlashIcon as Ce}from"@lifesg/react-icons/eye-slash";import{ExclamationTriangleIcon as De}from"@lifesg/react-icons/exclamation-triangle";import{ChevronUpIcon as Se}from"@lifesg/react-icons/chevron-up";import{ArrowRightIcon as ke}from"@lifesg/react-icons/arrow-right";import{ExclamationTriangleFillIcon as Ee}from"@lifesg/react-icons/exclamation-triangle-fill";import{TickCircleFillIcon as Fe}from"@lifesg/react-icons/tick-circle-fill";import{CircleIcon as Oe}from"@lifesg/react-icons/circle";import{CircleDotIcon as Te}from"@lifesg/react-icons/circle-dot";import{BinIcon as _e}from"@lifesg/react-icons/bin";import{PencilIcon as Ie}from"@lifesg/react-icons/pencil";import{DragHandleIcon as Me}from"@lifesg/react-icons/drag-handle";const Ae=i({activeId:void 0,setActiveId:()=>{}});var Be="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};function je(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var ze,Re={exports:{}},Le={exports:{}},Pe={};var Ne,He,We,Ye,Ve,Ue,Ke,qe,Ze,Ge,Xe,Je,Qe,et,tt={};
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function rt(){return He||(He=1,"production"===process.env.NODE_ENV?Le.exports=function(){if(ze)return Pe;ze=1;var e="function"==typeof Symbol&&Symbol.for,t=e?Symbol.for("react.element"):60103,r=e?Symbol.for("react.portal"):60106,n=e?Symbol.for("react.fragment"):60107,o=e?Symbol.for("react.strict_mode"):60108,i=e?Symbol.for("react.profiler"):60114,a=e?Symbol.for("react.provider"):60109,l=e?Symbol.for("react.context"):60110,s=e?Symbol.for("react.async_mode"):60111,d=e?Symbol.for("react.concurrent_mode"):60111,c=e?Symbol.for("react.forward_ref"):60112,u=e?Symbol.for("react.suspense"):60113,f=e?Symbol.for("react.suspense_list"):60120,h=e?Symbol.for("react.memo"):60115,p=e?Symbol.for("react.lazy"):60116,g=e?Symbol.for("react.block"):60121,m=e?Symbol.for("react.fundamental"):60117,b=e?Symbol.for("react.responder"):60118,v=e?Symbol.for("react.scope"):60119;function y(e){if("object"==typeof e&&null!==e){var f=e.$$typeof;switch(f){case t:switch(e=e.type){case s:case d:case n:case i:case o:case u:return e;default:switch(e=e&&e.$$typeof){case l:case c:case p:case h:case a:return e;default:return f}}case r:return f}}}function x(e){return y(e)===d}return Pe.AsyncMode=s,Pe.ConcurrentMode=d,Pe.ContextConsumer=l,Pe.ContextProvider=a,Pe.Element=t,Pe.ForwardRef=c,Pe.Fragment=n,Pe.Lazy=p,Pe.Memo=h,Pe.Portal=r,Pe.Profiler=i,Pe.StrictMode=o,Pe.Suspense=u,Pe.isAsyncMode=function(e){return x(e)||y(e)===s},Pe.isConcurrentMode=x,Pe.isContextConsumer=function(e){return y(e)===l},Pe.isContextProvider=function(e){return y(e)===a},Pe.isElement=function(e){return"object"==typeof e&&null!==e&&e.$$typeof===t},Pe.isForwardRef=function(e){return y(e)===c},Pe.isFragment=function(e){return y(e)===n},Pe.isLazy=function(e){return y(e)===p},Pe.isMemo=function(e){return y(e)===h},Pe.isPortal=function(e){return y(e)===r},Pe.isProfiler=function(e){return y(e)===i},Pe.isStrictMode=function(e){return y(e)===o},Pe.isSuspense=function(e){return y(e)===u},Pe.isValidElementType=function(e){return"string"==typeof e||"function"==typeof e||e===n||e===d||e===i||e===o||e===u||e===f||"object"==typeof e&&null!==e&&(e.$$typeof===p||e.$$typeof===h||e.$$typeof===a||e.$$typeof===l||e.$$typeof===c||e.$$typeof===m||e.$$typeof===b||e.$$typeof===v||e.$$typeof===g)},Pe.typeOf=y,Pe}():Le.exports=(Ne||(Ne=1,"production"!==process.env.NODE_ENV&&function(){var e="function"==typeof Symbol&&Symbol.for,t=e?Symbol.for("react.element"):60103,r=e?Symbol.for("react.portal"):60106,n=e?Symbol.for("react.fragment"):60107,o=e?Symbol.for("react.strict_mode"):60108,i=e?Symbol.for("react.profiler"):60114,a=e?Symbol.for("react.provider"):60109,l=e?Symbol.for("react.context"):60110,s=e?Symbol.for("react.async_mode"):60111,d=e?Symbol.for("react.concurrent_mode"):60111,c=e?Symbol.for("react.forward_ref"):60112,u=e?Symbol.for("react.suspense"):60113,f=e?Symbol.for("react.suspense_list"):60120,h=e?Symbol.for("react.memo"):60115,p=e?Symbol.for("react.lazy"):60116,g=e?Symbol.for("react.block"):60121,m=e?Symbol.for("react.fundamental"):60117,b=e?Symbol.for("react.responder"):60118,v=e?Symbol.for("react.scope"):60119;function y(e){if("object"==typeof e&&null!==e){var f=e.$$typeof;switch(f){case t:var g=e.type;switch(g){case s:case d:case n:case i:case o:case u:return g;default:var m=g&&g.$$typeof;switch(m){case l:case c:case p:case h:case a:return m;default:return f}}case r:return f}}}var x=s,w=d,$=l,C=a,D=t,S=c,k=n,E=p,F=h,O=r,T=i,_=o,I=u,M=!1;function A(e){return y(e)===d}tt.AsyncMode=x,tt.ConcurrentMode=w,tt.ContextConsumer=$,tt.ContextProvider=C,tt.Element=D,tt.ForwardRef=S,tt.Fragment=k,tt.Lazy=E,tt.Memo=F,tt.Portal=O,tt.Profiler=T,tt.StrictMode=_,tt.Suspense=I,tt.isAsyncMode=function(e){return M||(M=!0,console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")),A(e)||y(e)===s},tt.isConcurrentMode=A,tt.isContextConsumer=function(e){return y(e)===l},tt.isContextProvider=function(e){return y(e)===a},tt.isElement=function(e){return"object"==typeof e&&null!==e&&e.$$typeof===t},tt.isForwardRef=function(e){return y(e)===c},tt.isFragment=function(e){return y(e)===n},tt.isLazy=function(e){return y(e)===p},tt.isMemo=function(e){return y(e)===h},tt.isPortal=function(e){return y(e)===r},tt.isProfiler=function(e){return y(e)===i},tt.isStrictMode=function(e){return y(e)===o},tt.isSuspense=function(e){return y(e)===u},tt.isValidElementType=function(e){return"string"==typeof e||"function"==typeof e||e===n||e===d||e===i||e===o||e===u||e===f||"object"==typeof e&&null!==e&&(e.$$typeof===p||e.$$typeof===h||e.$$typeof===a||e.$$typeof===l||e.$$typeof===c||e.$$typeof===m||e.$$typeof===b||e.$$typeof===v||e.$$typeof===g)},tt.typeOf=y}()),tt)),Le.exports}
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/function nt(){if(Ye)return We;Ye=1;var e=Object.getOwnPropertySymbols,t=Object.prototype.hasOwnProperty,r=Object.prototype.propertyIsEnumerable;return We=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},r=0;r<10;r++)t["_"+String.fromCharCode(r)]=r;var n=Object.getOwnPropertyNames(t).map((function(e){return t[e]}));if("0123456789"!==n.join(""))return!1;var o={};return"abcdefghijklmnopqrst".split("").forEach((function(e){o[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},o)).join("")}catch(e){return!1}}()?Object.assign:function(n,o){for(var i,a,l=function(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}(n),s=1;s<arguments.length;s++){for(var d in i=Object(arguments[s]))t.call(i,d)&&(l[d]=i[d]);if(e){a=e(i);for(var c=0;c<a.length;c++)r.call(i,a[c])&&(l[a[c]]=i[a[c]])}}return l},We}function ot(){if(Ue)return Ve;Ue=1;return Ve="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"}function it(){return qe?Ke:(qe=1,Ke=Function.call.bind(Object.prototype.hasOwnProperty))}if("production"!==process.env.NODE_ENV){var at=rt();Re.exports=function(){if(Je)return Xe;Je=1;var e=rt(),t=nt(),r=ot(),n=it(),o=function(){if(Ge)return Ze;Ge=1;var e=function(){};if("production"!==process.env.NODE_ENV){var t=ot(),r={},n=it();e=function(e){var t="Warning: "+e;"undefined"!=typeof console&&console.error(t);try{throw new Error(t)}catch(e){}}}function o(o,i,a,l,s){if("production"!==process.env.NODE_ENV)for(var d in o)if(n(o,d)){var c;try{if("function"!=typeof o[d]){var u=Error((l||"React class")+": "+a+" type `"+d+"` is invalid; it must be a function, usually from the `prop-types` package, but received `"+typeof o[d]+"`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");throw u.name="Invariant Violation",u}c=o[d](i,d,l,a,null,t)}catch(e){c=e}if(!c||c instanceof Error||e((l||"React class")+": type specification of "+a+" `"+d+"` is invalid; the type checker function must return `null` or an `Error` but returned a "+typeof c+". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."),c instanceof Error&&!(c.message in r)){r[c.message]=!0;var f=s?s():"";e("Failed "+a+" type: "+c.message+(null!=f?f:""))}}}return o.resetWarningCache=function(){"production"!==process.env.NODE_ENV&&(r={})},Ze=o}(),i=function(){};function a(){return null}return"production"!==process.env.NODE_ENV&&(i=function(e){var t="Warning: "+e;"undefined"!=typeof console&&console.error(t);try{throw new Error(t)}catch(e){}}),Xe=function(l,s){var d="function"==typeof Symbol&&Symbol.iterator,c="<<anonymous>>",u={array:g("array"),bigint:g("bigint"),bool:g("boolean"),func:g("function"),number:g("number"),object:g("object"),string:g("string"),symbol:g("symbol"),any:p(a),arrayOf:function(e){return p((function(t,n,o,i,a){if("function"!=typeof e)return new h("Property `"+a+"` of component `"+o+"` has invalid PropType notation inside arrayOf.");var l=t[n];if(!Array.isArray(l))return new h("Invalid "+i+" `"+a+"` of type `"+v(l)+"` supplied to `"+o+"`, expected an array.");for(var s=0;s<l.length;s++){var d=e(l,s,o,i,a+"["+s+"]",r);if(d instanceof Error)return d}return null}))},element:p((function(e,t,r,n,o){var i=e[t];return l(i)?null:new h("Invalid "+n+" `"+o+"` of type `"+v(i)+"` supplied to `"+r+"`, expected a single ReactElement.")})),elementType:p((function(t,r,n,o,i){var a=t[r];return e.isValidElementType(a)?null:new h("Invalid "+o+" `"+i+"` of type `"+v(a)+"` supplied to `"+n+"`, expected a single ReactElement type.")})),instanceOf:function(e){return p((function(t,r,n,o,i){if(!(t[r]instanceof e)){var a=e.name||c;return new h("Invalid "+o+" `"+i+"` of type `"+((l=t[r]).constructor&&l.constructor.name?l.constructor.name:c)+"` supplied to `"+n+"`, expected instance of `"+a+"`.")}var l;return null}))},node:p((function(e,t,r,n,o){return b(e[t])?null:new h("Invalid "+n+" `"+o+"` supplied to `"+r+"`, expected a ReactNode.")})),objectOf:function(e){return p((function(t,o,i,a,l){if("function"!=typeof e)return new h("Property `"+l+"` of component `"+i+"` has invalid PropType notation inside objectOf.");var s=t[o],d=v(s);if("object"!==d)return new h("Invalid "+a+" `"+l+"` of type `"+d+"` supplied to `"+i+"`, expected an object.");for(var c in s)if(n(s,c)){var u=e(s,c,i,a,l+"."+c,r);if(u instanceof Error)return u}return null}))},oneOf:function(e){return Array.isArray(e)?p((function(t,r,n,o,i){for(var a=t[r],l=0;l<e.length;l++)if(f(a,e[l]))return null;var s=JSON.stringify(e,(function(e,t){return"symbol"===y(t)?String(t):t}));return new h("Invalid "+o+" `"+i+"` of value `"+String(a)+"` supplied to `"+n+"`, expected one of "+s+".")})):("production"!==process.env.NODE_ENV&&i(arguments.length>1?"Invalid arguments supplied to oneOf, expected an array, got "+arguments.length+" arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z]).":"Invalid argument supplied to oneOf, expected an array."),a)},oneOfType:function(e){if(!Array.isArray(e))return"production"!==process.env.NODE_ENV&&i("Invalid argument supplied to oneOfType, expected an instance of array."),a;for(var t=0;t<e.length;t++){var o=e[t];if("function"!=typeof o)return i("Invalid argument supplied to oneOfType. Expected an array of check functions, but received "+x(o)+" at index "+t+"."),a}return p((function(t,o,i,a,l){for(var s=[],d=0;d<e.length;d++){var c=(0,e[d])(t,o,i,a,l,r);if(null==c)return null;c.data&&n(c.data,"expectedType")&&s.push(c.data.expectedType)}return new h("Invalid "+a+" `"+l+"` supplied to `"+i+"`"+(s.length>0?", expected one of type ["+s.join(", ")+"]":"")+".")}))},shape:function(e){return p((function(t,n,o,i,a){var l=t[n],s=v(l);if("object"!==s)return new h("Invalid "+i+" `"+a+"` of type `"+s+"` supplied to `"+o+"`, expected `object`.");for(var d in e){var c=e[d];if("function"!=typeof c)return m(o,i,a,d,y(c));var u=c(l,d,o,i,a+"."+d,r);if(u)return u}return null}))},exact:function(e){return p((function(o,i,a,l,s){var d=o[i],c=v(d);if("object"!==c)return new h("Invalid "+l+" `"+s+"` of type `"+c+"` supplied to `"+a+"`, expected `object`.");var u=t({},o[i],e);for(var f in u){var p=e[f];if(n(e,f)&&"function"!=typeof p)return m(a,l,s,f,y(p));if(!p)return new h("Invalid "+l+" `"+s+"` key `"+f+"` supplied to `"+a+"`.\nBad object: "+JSON.stringify(o[i],null,"  ")+"\nValid keys: "+JSON.stringify(Object.keys(e),null,"  "));var g=p(d,f,a,l,s+"."+f,r);if(g)return g}return null}))}};function f(e,t){return e===t?0!==e||1/e==1/t:e!=e&&t!=t}function h(e,t){this.message=e,this.data=t&&"object"==typeof t?t:{},this.stack=""}function p(e){if("production"!==process.env.NODE_ENV)var t={},n=0;function o(o,a,l,d,u,f,p){if(d=d||c,f=f||l,p!==r){if(s){var g=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types");throw g.name="Invariant Violation",g}if("production"!==process.env.NODE_ENV&&"undefined"!=typeof console){var m=d+":"+l;!t[m]&&n<3&&(i("You are manually calling a React.PropTypes validation function for the `"+f+"` prop on `"+d+"`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."),t[m]=!0,n++)}}return null==a[l]?o?null===a[l]?new h("The "+u+" `"+f+"` is marked as required in `"+d+"`, but its value is `null`."):new h("The "+u+" `"+f+"` is marked as required in `"+d+"`, but its value is `undefined`."):null:e(a,l,d,u,f)}var a=o.bind(null,!1);return a.isRequired=o.bind(null,!0),a}function g(e){return p((function(t,r,n,o,i,a){var l=t[r];return v(l)!==e?new h("Invalid "+o+" `"+i+"` of type `"+y(l)+"` supplied to `"+n+"`, expected `"+e+"`.",{expectedType:e}):null}))}function m(e,t,r,n,o){return new h((e||"React class")+": "+t+" type `"+r+"."+n+"` is invalid; it must be a function, usually from the `prop-types` package, but received `"+o+"`.")}function b(e){switch(typeof e){case"number":case"string":case"undefined":return!0;case"boolean":return!e;case"object":if(Array.isArray(e))return e.every(b);if(null===e||l(e))return!0;var t=function(e){var t=e&&(d&&e[d]||e["@@iterator"]);if("function"==typeof t)return t}(e);if(!t)return!1;var r,n=t.call(e);if(t!==e.entries){for(;!(r=n.next()).done;)if(!b(r.value))return!1}else for(;!(r=n.next()).done;){var o=r.value;if(o&&!b(o[1]))return!1}return!0;default:return!1}}function v(e){var t=typeof e;return Array.isArray(e)?"array":e instanceof RegExp?"object":function(e,t){return"symbol"===e||!!t&&("Symbol"===t["@@toStringTag"]||"function"==typeof Symbol&&t instanceof Symbol)}(t,e)?"symbol":t}function y(e){if(null==e)return""+e;var t=v(e);if("object"===t){if(e instanceof Date)return"date";if(e instanceof RegExp)return"regexp"}return t}function x(e){var t=y(e);switch(t){case"array":case"object":return"an "+t;case"boolean":case"date":case"regexp":return"a "+t;default:return t}}return h.prototype=Error.prototype,u.checkPropTypes=o,u.resetWarningCache=o.resetWarningCache,u.PropTypes=u,u},Xe}()(at.isElement,!0)}else Re.exports=function(){if(et)return Qe;et=1;var e=ot();function t(){}function r(){}return r.resetWarningCache=t,Qe=function(){function n(t,r,n,o,i,a){if(a!==e){var l=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw l.name="Invariant Violation",l}}function o(){return n}n.isRequired=n;var i={array:n,bigint:n,bool:n,func:n,number:n,object:n,string:n,symbol:n,any:n,arrayOf:o,element:n,elementType:n,instanceOf:o,node:n,objectOf:o,oneOf:o,oneOfType:o,shape:o,exact:o,checkPropTypes:r,resetWarningCache:t};return i.PropTypes=i,i}}()();var lt=je(Re.exports);function st(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(n=Object.getOwnPropertySymbols(e);o<n.length;o++)t.indexOf(n[o])<0&&Object.prototype.propertyIsEnumerable.call(e,n[o])&&(r[n[o]]=e[n[o]])}return r}function dt(e,t,r,n){return new(r||(r=Promise))((function(o,i){function a(e){try{s(n.next(e))}catch(e){i(e)}}function l(e){try{s(n.throw(e))}catch(e){i(e)}}function s(e){var t;e.done?o(e.value):(t=e.value,t instanceof r?t:new r((function(e){e(t)}))).then(a,l)}s((n=n.apply(e,t||[])).next())}))}function ct(e,t){var r,n,o,i={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]},a=Object.create(("function"==typeof Iterator?Iterator:Object).prototype);return a.next=l(0),a.throw=l(1),a.return=l(2),"function"==typeof Symbol&&(a[Symbol.iterator]=function(){return this}),a;function l(l){return function(s){return function(l){if(r)throw new TypeError("Generator is already executing.");for(;a&&(a=0,l[0]&&(i=0)),i;)try{if(r=1,n&&(o=2&l[0]?n.return:l[0]?n.throw||((o=n.return)&&o.call(n),0):n.next)&&!(o=o.call(n,l[1])).done)return o;switch(n=0,o&&(l=[2&l[0],o.value]),l[0]){case 0:case 1:o=l;break;case 4:return i.label++,{value:l[1],done:!1};case 5:i.label++,n=l[1],l=[0];continue;case 7:l=i.ops.pop(),i.trys.pop();continue;default:if(!(o=i.trys,(o=o.length>0&&o[o.length-1])||6!==l[0]&&2!==l[0])){i=0;continue}if(3===l[0]&&(!o||l[1]>o[0]&&l[1]<o[3])){i.label=l[1];break}if(6===l[0]&&i.label<o[1]){i.label=o[1],o=l;break}if(o&&i.label<o[2]){i.label=o[2],i.ops.push(l);break}o[2]&&i.ops.pop(),i.trys.pop();continue}l=t.call(e,i)}catch(e){l=[6,e],n=0}finally{r=o=0}if(5&l[0])throw l[1];return{value:l[0]?l[1]:void 0,done:!0}}([l,s])}}}function ut(e,t){var r="function"==typeof Symbol&&e[Symbol.iterator];if(!r)return e;var n,o,i=r.call(e),a=[];try{for(;(void 0===t||t-- >0)&&!(n=i.next()).done;)a.push(n.value)}catch(e){o={error:e}}finally{try{n&&!n.done&&(r=i.return)&&r.call(i)}finally{if(o)throw o.error}}return a}function ft(e,t,r){if(r||2===arguments.length)for(var n,o=0,i=t.length;o<i;o++)!n&&o in t||(n||(n=Array.prototype.slice.call(t,0,o)),n[o]=t[o]);return e.concat(n||Array.prototype.slice.call(t))}"function"==typeof SuppressedError&&SuppressedError;var ht=new Map([["aac","audio/aac"],["abw","application/x-abiword"],["arc","application/x-freearc"],["avif","image/avif"],["avi","video/x-msvideo"],["azw","application/vnd.amazon.ebook"],["bin","application/octet-stream"],["bmp","image/bmp"],["bz","application/x-bzip"],["bz2","application/x-bzip2"],["cda","application/x-cdf"],["csh","application/x-csh"],["css","text/css"],["csv","text/csv"],["doc","application/msword"],["docx","application/vnd.openxmlformats-officedocument.wordprocessingml.document"],["eot","application/vnd.ms-fontobject"],["epub","application/epub+zip"],["gz","application/gzip"],["gif","image/gif"],["heic","image/heic"],["heif","image/heif"],["htm","text/html"],["html","text/html"],["ico","image/vnd.microsoft.icon"],["ics","text/calendar"],["jar","application/java-archive"],["jpeg","image/jpeg"],["jpg","image/jpeg"],["js","text/javascript"],["json","application/json"],["jsonld","application/ld+json"],["mid","audio/midi"],["midi","audio/midi"],["mjs","text/javascript"],["mp3","audio/mpeg"],["mp4","video/mp4"],["mpeg","video/mpeg"],["mpkg","application/vnd.apple.installer+xml"],["odp","application/vnd.oasis.opendocument.presentation"],["ods","application/vnd.oasis.opendocument.spreadsheet"],["odt","application/vnd.oasis.opendocument.text"],["oga","audio/ogg"],["ogv","video/ogg"],["ogx","application/ogg"],["opus","audio/opus"],["otf","font/otf"],["png","image/png"],["pdf","application/pdf"],["php","application/x-httpd-php"],["ppt","application/vnd.ms-powerpoint"],["pptx","application/vnd.openxmlformats-officedocument.presentationml.presentation"],["rar","application/vnd.rar"],["rtf","application/rtf"],["sh","application/x-sh"],["svg","image/svg+xml"],["swf","application/x-shockwave-flash"],["tar","application/x-tar"],["tif","image/tiff"],["tiff","image/tiff"],["ts","video/mp2t"],["ttf","font/ttf"],["txt","text/plain"],["vsd","application/vnd.visio"],["wav","audio/wav"],["weba","audio/webm"],["webm","video/webm"],["webp","image/webp"],["woff","font/woff"],["woff2","font/woff2"],["xhtml","application/xhtml+xml"],["xls","application/vnd.ms-excel"],["xlsx","application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"],["xml","application/xml"],["xul","application/vnd.mozilla.xul+xml"],["zip","application/zip"],["7z","application/x-7z-compressed"],["mkv","video/x-matroska"],["mov","video/quicktime"],["msg","application/vnd.ms-outlook"]]);function pt(e,t){var r=function(e){var t=e.name;if(t&&-1!==t.lastIndexOf(".")&&!e.type){var r=t.split(".").pop().toLowerCase(),n=ht.get(r);n&&Object.defineProperty(e,"type",{value:n,writable:!1,configurable:!1,enumerable:!0})}return e}(e);if("string"!=typeof r.path){var n=e.webkitRelativePath;Object.defineProperty(r,"path",{value:"string"==typeof t?t:"string"==typeof n&&n.length>0?n:e.name,writable:!1,configurable:!1,enumerable:!0})}return r}var gt=[".DS_Store","Thumbs.db"];function mt(e){return"object"==typeof e&&null!==e}function bt(e){return wt(e.target.files).map((function(e){return pt(e)}))}function vt(e){return dt(this,void 0,void 0,(function(){return ct(this,(function(t){switch(t.label){case 0:return[4,Promise.all(e.map((function(e){return e.getFile()})))];case 1:return[2,t.sent().map((function(e){return pt(e)}))]}}))}))}function yt(e,t){return dt(this,void 0,void 0,(function(){var r;return ct(this,(function(n){switch(n.label){case 0:return e.items?(r=wt(e.items).filter((function(e){return"file"===e.kind})),"drop"!==t?[2,r]:[4,Promise.all(r.map($t))]):[3,2];case 1:return[2,xt(Ct(n.sent()))];case 2:return[2,xt(wt(e.files).map((function(e){return pt(e)})))]}}))}))}function xt(e){return e.filter((function(e){return-1===gt.indexOf(e.name)}))}function wt(e){if(null===e)return[];for(var t=[],r=0;r<e.length;r++){var n=e[r];t.push(n)}return t}function $t(e){if("function"!=typeof e.webkitGetAsEntry)return Dt(e);var t=e.webkitGetAsEntry();return t&&t.isDirectory?kt(t):Dt(e)}function Ct(e){return e.reduce((function(e,t){return ft(ft([],ut(e),!1),ut(Array.isArray(t)?Ct(t):[t]),!1)}),[])}function Dt(e){var t=e.getAsFile();if(!t)return Promise.reject("".concat(e," is not a File"));var r=pt(t);return Promise.resolve(r)}function St(e){return dt(this,void 0,void 0,(function(){return ct(this,(function(t){return[2,e.isDirectory?kt(e):Et(e)]}))}))}function kt(e){var t=e.createReader();return new Promise((function(e,r){var n=[];!function o(){var i=this;t.readEntries((function(t){return dt(i,void 0,void 0,(function(){var i,a,l;return ct(this,(function(s){switch(s.label){case 0:if(t.length)return[3,5];s.label=1;case 1:return s.trys.push([1,3,,4]),[4,Promise.all(n)];case 2:return i=s.sent(),e(i),[3,4];case 3:return a=s.sent(),r(a),[3,4];case 4:return[3,6];case 5:l=Promise.all(t.map(St)),n.push(l),o(),s.label=6;case 6:return[2]}}))}))}),(function(e){r(e)}))}()}))}function Et(e){return dt(this,void 0,void 0,(function(){return ct(this,(function(t){return[2,new Promise((function(t,r){e.file((function(r){var n=pt(r,e.fullPath);t(n)}),(function(e){r(e)}))}))]}))}))}function Ft(e){return function(e){if(Array.isArray(e))return At(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||Mt(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function Ot(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function Tt(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?Ot(Object(r),!0).forEach((function(t){_t(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):Ot(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function _t(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function It(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==r)return;var n,o,i=[],a=!0,l=!1;try{for(r=r.call(e);!(a=(n=r.next()).done)&&(i.push(n.value),!t||i.length!==t);a=!0);}catch(e){l=!0,o=e}finally{try{a||null==r.return||r.return()}finally{if(l)throw o}}return i}(e,t)||Mt(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function Mt(e,t){if(e){if("string"==typeof e)return At(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?At(e,t):void 0}}function At(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}var Bt=function(e){e=Array.isArray(e)&&1===e.length?e[0]:e;var t=Array.isArray(e)?"one of ".concat(e.join(", ")):e;return{code:"file-invalid-type",message:"File type must be ".concat(t)}},jt=function(e){return{code:"file-too-large",message:"File is larger than ".concat(e," ").concat(1===e?"byte":"bytes")}},zt=function(e){return{code:"file-too-small",message:"File is smaller than ".concat(e," ").concat(1===e?"byte":"bytes")}},Rt={code:"too-many-files",message:"Too many files"};function Lt(e,t){var r="application/x-moz-file"===e.type||function(e,t){if(e&&t){var r=Array.isArray(t)?t:t.split(","),n=e.name||"",o=(e.type||"").toLowerCase(),i=o.replace(/\/.*$/,"");return r.some((function(e){var t=e.trim().toLowerCase();return"."===t.charAt(0)?n.toLowerCase().endsWith(t):t.endsWith("/*")?i===t.replace(/\/.*$/,""):o===t}))}return!0}(e,t);return[r,r?null:Bt(t)]}function Pt(e,t,r){if(Nt(e.size))if(Nt(t)&&Nt(r)){if(e.size>r)return[!1,jt(r)];if(e.size<t)return[!1,zt(t)]}else{if(Nt(t)&&e.size<t)return[!1,zt(t)];if(Nt(r)&&e.size>r)return[!1,jt(r)]}return[!0,null]}function Nt(e){return null!=e}function Ht(e){return"function"==typeof e.isPropagationStopped?e.isPropagationStopped():void 0!==e.cancelBubble&&e.cancelBubble}function Wt(e){return e.dataTransfer?Array.prototype.some.call(e.dataTransfer.types,(function(e){return"Files"===e||"application/x-moz-file"===e})):!!e.target&&!!e.target.files}function Yt(e){e.preventDefault()}function Vt(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];return function(e){for(var r=arguments.length,n=new Array(r>1?r-1:0),o=1;o<r;o++)n[o-1]=arguments[o];return t.some((function(t){return!Ht(e)&&t&&t.apply(void 0,[e].concat(n)),Ht(e)}))}}function Ut(e){return"audio/*"===e||"video/*"===e||"image/*"===e||"text/*"===e||/\w+\/[-+.\w]+/g.test(e)}function Kt(e){return/^.*\.[\w]+$/.test(e)}var qt=["children"],Zt=["open"],Gt=["refKey","role","onKeyDown","onFocus","onBlur","onClick","onDragEnter","onDragOver","onDragLeave","onDrop"],Xt=["refKey","onChange","onClick"];function Jt(e){return function(e){if(Array.isArray(e))return tr(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||er(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function Qt(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==r)return;var n,o,i=[],a=!0,l=!1;try{for(r=r.call(e);!(a=(n=r.next()).done)&&(i.push(n.value),!t||i.length!==t);a=!0);}catch(e){l=!0,o=e}finally{try{a||null==r.return||r.return()}finally{if(l)throw o}}return i}(e,t)||er(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function er(e,t){if(e){if("string"==typeof e)return tr(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?tr(e,t):void 0}}function tr(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function rr(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function nr(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?rr(Object(r),!0).forEach((function(t){or(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):rr(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function or(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function ir(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var ar=u((function(e,t){var r=e.children,n=dr(ir(e,qt)),i=n.open,a=ir(n,Zt);return f(t,(function(){return{open:i}}),[i]),o.createElement(h,null,r(nr(nr({},a),{},{open:i})))}));ar.displayName="Dropzone";var lr={disabled:!1,getFilesFromEvent:function(e){return dt(this,void 0,void 0,(function(){return ct(this,(function(t){return mt(e)&&mt(e.dataTransfer)?[2,yt(e.dataTransfer,e.type)]:function(e){return mt(e)&&mt(e.target)}(e)?[2,bt(e)]:Array.isArray(e)&&e.every((function(e){return"getFile"in e&&"function"==typeof e.getFile}))?[2,vt(e)]:[2,[]]}))}))},maxSize:1/0,minSize:0,multiple:!0,maxFiles:0,preventDropOnDocument:!0,noClick:!1,noKeyboard:!1,noDrag:!1,noDragEventsBubbling:!1,validator:null,useFsAccessApi:!0,autoFocus:!1};ar.defaultProps=lr,ar.propTypes={children:lt.func,accept:lt.objectOf(lt.arrayOf(lt.string)),multiple:lt.bool,preventDropOnDocument:lt.bool,noClick:lt.bool,noKeyboard:lt.bool,noDrag:lt.bool,noDragEventsBubbling:lt.bool,minSize:lt.number,maxSize:lt.number,maxFiles:lt.number,disabled:lt.bool,getFilesFromEvent:lt.func,onFileDialogCancel:lt.func,onFileDialogOpen:lt.func,useFsAccessApi:lt.bool,autoFocus:lt.bool,onDragEnter:lt.func,onDragLeave:lt.func,onDragOver:lt.func,onDrop:lt.func,onDropAccepted:lt.func,onDropRejected:lt.func,onError:lt.func,validator:lt.func};var sr={isFocused:!1,isFileDialogActive:!1,isDragActive:!1,isDragAccept:!1,isDragReject:!1,acceptedFiles:[],fileRejections:[]};function dr(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=nr(nr({},lr),e),r=t.accept,n=t.disabled,o=t.getFilesFromEvent,i=t.maxSize,u=t.minSize,f=t.multiple,h=t.maxFiles,p=t.onDragEnter,g=t.onDragLeave,m=t.onDragOver,b=t.onDrop,v=t.onDropAccepted,y=t.onDropRejected,x=t.onFileDialogCancel,w=t.onFileDialogOpen,$=t.useFsAccessApi,C=t.autoFocus,D=t.preventDropOnDocument,S=t.noClick,k=t.noKeyboard,E=t.noDrag,F=t.noDragEventsBubbling,O=t.onError,T=t.validator,_=a((function(){return function(e){if(Nt(e))return Object.entries(e).reduce((function(e,t){var r=It(t,2),n=r[0],o=r[1];return[].concat(Ft(e),[n],Ft(o))}),[]).filter((function(e){return Ut(e)||Kt(e)})).join(",")}(r)}),[r]),I=a((function(){return function(e){return Nt(e)?[{description:"Files",accept:Object.entries(e).filter((function(e){var t=It(e,2),r=t[0],n=t[1],o=!0;return Ut(r)||(console.warn('Skipped "'.concat(r,'" because it is not a valid MIME type. Check https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types/Common_types for a list of valid MIME types.')),o=!1),Array.isArray(n)&&n.every(Kt)||(console.warn('Skipped "'.concat(r,'" because an invalid file extension was provided.')),o=!1),o})).reduce((function(e,t){var r=It(t,2),n=r[0],o=r[1];return Tt(Tt({},e),{},_t({},n,o))}),{})}]:e}(r)}),[r]),M=a((function(){return"function"==typeof w?w:ur}),[w]),A=a((function(){return"function"==typeof x?x:ur}),[x]),B=l(null),j=l(null),z=Qt(s(cr,sr),2),R=z[0],L=z[1],P=R.isFocused,N=R.isFileDialogActive,H=l("undefined"!=typeof window&&window.isSecureContext&&$&&"showOpenFilePicker"in window),W=function(){!H.current&&N&&setTimeout((function(){j.current&&(j.current.files.length||(L({type:"closeDialog"}),A()))}),300)};d((function(){return window.addEventListener("focus",W,!1),function(){window.removeEventListener("focus",W,!1)}}),[j,N,A,H]);var Y=l([]),V=function(e){B.current&&B.current.contains(e.target)||(e.preventDefault(),Y.current=[])};d((function(){return D&&(document.addEventListener("dragover",Yt,!1),document.addEventListener("drop",V,!1)),function(){D&&(document.removeEventListener("dragover",Yt),document.removeEventListener("drop",V))}}),[B,D]),d((function(){return!n&&C&&B.current&&B.current.focus(),function(){}}),[B,C,n]);var U=c((function(e){O?O(e):console.error(e)}),[O]),K=c((function(e){e.preventDefault(),e.persist(),ae(e),Y.current=[].concat(Jt(Y.current),[e.target]),Wt(e)&&Promise.resolve(o(e)).then((function(t){if(!Ht(e)||F){var r=t.length,n=r>0&&function(e){var t=e.files,r=e.accept,n=e.minSize,o=e.maxSize,i=e.multiple,a=e.maxFiles,l=e.validator;return!(!i&&t.length>1||i&&a>=1&&t.length>a)&&t.every((function(e){var t=It(Lt(e,r),1)[0],i=It(Pt(e,n,o),1)[0],a=l?l(e):null;return t&&i&&!a}))}({files:t,accept:_,minSize:u,maxSize:i,multiple:f,maxFiles:h,validator:T});L({isDragAccept:n,isDragReject:r>0&&!n,isDragActive:!0,type:"setDraggedFiles"}),p&&p(e)}})).catch((function(e){return U(e)}))}),[o,p,U,F,_,u,i,f,h,T]),q=c((function(e){e.preventDefault(),e.persist(),ae(e);var t=Wt(e);if(t&&e.dataTransfer)try{e.dataTransfer.dropEffect="copy"}catch(e){}return t&&m&&m(e),!1}),[m,F]),Z=c((function(e){e.preventDefault(),e.persist(),ae(e);var t=Y.current.filter((function(e){return B.current&&B.current.contains(e)})),r=t.indexOf(e.target);-1!==r&&t.splice(r,1),Y.current=t,t.length>0||(L({type:"setDraggedFiles",isDragActive:!1,isDragAccept:!1,isDragReject:!1}),Wt(e)&&g&&g(e))}),[B,g,F]),G=c((function(e,t){var r=[],n=[];e.forEach((function(e){var t=Qt(Lt(e,_),2),o=t[0],a=t[1],l=Qt(Pt(e,u,i),2),s=l[0],d=l[1],c=T?T(e):null;if(o&&s&&!c)r.push(e);else{var f=[a,d];c&&(f=f.concat(c)),n.push({file:e,errors:f.filter((function(e){return e}))})}})),(!f&&r.length>1||f&&h>=1&&r.length>h)&&(r.forEach((function(e){n.push({file:e,errors:[Rt]})})),r.splice(0)),L({acceptedFiles:r,fileRejections:n,type:"setFiles"}),b&&b(r,n,t),n.length>0&&y&&y(n,t),r.length>0&&v&&v(r,t)}),[L,f,_,u,i,h,b,v,y,T]),X=c((function(e){e.preventDefault(),e.persist(),ae(e),Y.current=[],Wt(e)&&Promise.resolve(o(e)).then((function(t){Ht(e)&&!F||G(t,e)})).catch((function(e){return U(e)})),L({type:"reset"})}),[o,G,U,F]),J=c((function(){if(H.current){L({type:"openDialog"}),M();var e={multiple:f,types:I};window.showOpenFilePicker(e).then((function(e){return o(e)})).then((function(e){G(e,null),L({type:"closeDialog"})})).catch((function(e){var t;(t=e)instanceof DOMException&&("AbortError"===t.name||t.code===t.ABORT_ERR)?(A(e),L({type:"closeDialog"})):!function(e){return e instanceof DOMException&&("SecurityError"===e.name||e.code===e.SECURITY_ERR)}(e)?U(e):(H.current=!1,j.current?(j.current.value=null,j.current.click()):U(new Error("Cannot open the file picker because the https://developer.mozilla.org/en-US/docs/Web/API/File_System_Access_API is not supported and no <input> was provided.")))}))}else j.current&&(L({type:"openDialog"}),M(),j.current.value=null,j.current.click())}),[L,M,A,$,G,U,I,f]),Q=c((function(e){B.current&&B.current.isEqualNode(e.target)&&(" "!==e.key&&"Enter"!==e.key&&32!==e.keyCode&&13!==e.keyCode||(e.preventDefault(),J()))}),[B,J]),ee=c((function(){L({type:"focus"})}),[]),te=c((function(){L({type:"blur"})}),[]),re=c((function(){S||(!function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:window.navigator.userAgent;return function(e){return-1!==e.indexOf("MSIE")||-1!==e.indexOf("Trident/")}(e)||function(e){return-1!==e.indexOf("Edge/")}(e)}()?J():setTimeout(J,0))}),[S,J]),ne=function(e){return n?null:e},oe=function(e){return k?null:ne(e)},ie=function(e){return E?null:ne(e)},ae=function(e){F&&e.stopPropagation()},le=a((function(){return function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.refKey,r=void 0===t?"ref":t,o=e.role,i=e.onKeyDown,a=e.onFocus,l=e.onBlur,s=e.onClick,d=e.onDragEnter,c=e.onDragOver,u=e.onDragLeave,f=e.onDrop,h=ir(e,Gt);return nr(nr(or({onKeyDown:oe(Vt(i,Q)),onFocus:oe(Vt(a,ee)),onBlur:oe(Vt(l,te)),onClick:ne(Vt(s,re)),onDragEnter:ie(Vt(d,K)),onDragOver:ie(Vt(c,q)),onDragLeave:ie(Vt(u,Z)),onDrop:ie(Vt(f,X)),role:"string"==typeof o&&""!==o?o:"presentation"},r,B),n||k?{}:{tabIndex:0}),h)}}),[B,Q,ee,te,re,K,q,Z,X,k,E,n]),se=c((function(e){e.stopPropagation()}),[]),de=a((function(){return function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.refKey,r=void 0===t?"ref":t,n=e.onChange,o=e.onClick,i=ir(e,Xt);return nr(nr({},or({accept:_,multiple:f,type:"file",style:{display:"none"},onChange:ne(Vt(n,X)),onClick:ne(Vt(o,se)),tabIndex:-1},r,j)),i)}}),[j,r,f,X,n]);return nr(nr({},R),{},{isFocused:P&&!n,getRootProps:le,getInputProps:de,rootRef:B,inputRef:j,open:ne(J)})}function cr(e,t){switch(t.type){case"focus":return nr(nr({},e),{},{isFocused:!0});case"blur":return nr(nr({},e),{},{isFocused:!1});case"openDialog":return nr(nr({},sr),{},{isFileDialogActive:!0});case"closeDialog":return nr(nr({},e),{},{isFileDialogActive:!1});case"setDraggedFiles":return nr(nr({},e),{},{isDragActive:t.isDragActive,isDragAccept:t.isDragAccept,isDragReject:t.isDragReject});case"setFiles":return nr(nr({},e),{},{acceptedFiles:t.acceptedFiles,fileRejections:t.fileRejections});case"reset":return nr({},sr);default:return e}}function ur(){}var fr=Array.isArray,hr="object"==typeof Be&&Be&&Be.Object===Object&&Be,pr=hr,gr="object"==typeof self&&self&&self.Object===Object&&self,mr=pr||gr||Function("return this")(),br=mr.Symbol,vr=br,yr=Object.prototype,xr=yr.hasOwnProperty,wr=yr.toString,$r=vr?vr.toStringTag:void 0;var Cr=function(e){var t=xr.call(e,$r),r=e[$r];try{e[$r]=void 0;var n=!0}catch(e){}var o=wr.call(e);return n&&(t?e[$r]=r:delete e[$r]),o},Dr=Object.prototype.toString;var Sr=Cr,kr=function(e){return Dr.call(e)},Er=br?br.toStringTag:void 0;var Fr=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":Er&&Er in Object(e)?Sr(e):kr(e)};var Or=function(e){return null!=e&&"object"==typeof e},Tr=Fr,_r=Or;var Ir=function(e){return"symbol"==typeof e||_r(e)&&"[object Symbol]"==Tr(e)},Mr=fr,Ar=Ir,Br=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,jr=/^\w*$/;var zr=function(e,t){if(Mr(e))return!1;var r=typeof e;return!("number"!=r&&"symbol"!=r&&"boolean"!=r&&null!=e&&!Ar(e))||(jr.test(e)||!Br.test(e)||null!=t&&e in Object(t))};var Rr=function(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)},Lr=Fr,Pr=Rr;var Nr,Hr=function(e){if(!Pr(e))return!1;var t=Lr(e);return"[object Function]"==t||"[object GeneratorFunction]"==t||"[object AsyncFunction]"==t||"[object Proxy]"==t},Wr=mr["__core-js_shared__"],Yr=(Nr=/[^.]+$/.exec(Wr&&Wr.keys&&Wr.keys.IE_PROTO||""))?"Symbol(src)_1."+Nr:"";var Vr=function(e){return!!Yr&&Yr in e},Ur=Function.prototype.toString;var Kr=function(e){if(null!=e){try{return Ur.call(e)}catch(e){}try{return e+""}catch(e){}}return""},qr=Hr,Zr=Vr,Gr=Rr,Xr=Kr,Jr=/^\[object .+?Constructor\]$/,Qr=Function.prototype,en=Object.prototype,tn=Qr.toString,rn=en.hasOwnProperty,nn=RegExp("^"+tn.call(rn).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");var on=function(e,t){return null==e?void 0:e[t]},an=function(e){return!(!Gr(e)||Zr(e))&&(qr(e)?nn:Jr).test(Xr(e))},ln=on;var sn=function(e,t){var r=ln(e,t);return an(r)?r:void 0},dn=sn(Object,"create"),cn=dn;var un=function(){this.__data__=cn?cn(null):{},this.size=0};var fn=function(e){var t=this.has(e)&&delete this.__data__[e];return this.size-=t?1:0,t},hn=dn,pn=Object.prototype.hasOwnProperty;var gn=function(e){var t=this.__data__;if(hn){var r=t[e];return"__lodash_hash_undefined__"===r?void 0:r}return pn.call(t,e)?t[e]:void 0},mn=dn,bn=Object.prototype.hasOwnProperty;var vn=function(e){var t=this.__data__;return mn?void 0!==t[e]:bn.call(t,e)},yn=dn;var xn=function(e,t){var r=this.__data__;return this.size+=this.has(e)?0:1,r[e]=yn&&void 0===t?"__lodash_hash_undefined__":t,this},wn=un,$n=fn,Cn=gn,Dn=vn,Sn=xn;function kn(e){var t=-1,r=null==e?0:e.length;for(this.clear();++t<r;){var n=e[t];this.set(n[0],n[1])}}kn.prototype.clear=wn,kn.prototype.delete=$n,kn.prototype.get=Cn,kn.prototype.has=Dn,kn.prototype.set=Sn;var En=kn;var Fn=function(){this.__data__=[],this.size=0};var On=function(e,t){return e===t||e!=e&&t!=t},Tn=On;var _n=function(e,t){for(var r=e.length;r--;)if(Tn(e[r][0],t))return r;return-1},In=_n,Mn=Array.prototype.splice;var An=function(e){var t=this.__data__,r=In(t,e);return!(r<0)&&(r==t.length-1?t.pop():Mn.call(t,r,1),--this.size,!0)},Bn=_n;var jn=function(e){var t=this.__data__,r=Bn(t,e);return r<0?void 0:t[r][1]},zn=_n;var Rn=function(e){return zn(this.__data__,e)>-1},Ln=_n;var Pn=function(e,t){var r=this.__data__,n=Ln(r,e);return n<0?(++this.size,r.push([e,t])):r[n][1]=t,this},Nn=Fn,Hn=An,Wn=jn,Yn=Rn,Vn=Pn;function Un(e){var t=-1,r=null==e?0:e.length;for(this.clear();++t<r;){var n=e[t];this.set(n[0],n[1])}}Un.prototype.clear=Nn,Un.prototype.delete=Hn,Un.prototype.get=Wn,Un.prototype.has=Yn,Un.prototype.set=Vn;var Kn=Un,qn=sn(mr,"Map"),Zn=En,Gn=Kn,Xn=qn;var Jn=function(e){var t=typeof e;return"string"==t||"number"==t||"symbol"==t||"boolean"==t?"__proto__"!==e:null===e};var Qn=function(e,t){var r=e.__data__;return Jn(t)?r["string"==typeof t?"string":"hash"]:r.map},eo=Qn;var to=function(e){var t=eo(this,e).delete(e);return this.size-=t?1:0,t},ro=Qn;var no=function(e){return ro(this,e).get(e)},oo=Qn;var io=function(e){return oo(this,e).has(e)},ao=Qn;var lo=function(e,t){var r=ao(this,e),n=r.size;return r.set(e,t),this.size+=r.size==n?0:1,this},so=function(){this.size=0,this.__data__={hash:new Zn,map:new(Xn||Gn),string:new Zn}},co=to,uo=no,fo=io,ho=lo;function po(e){var t=-1,r=null==e?0:e.length;for(this.clear();++t<r;){var n=e[t];this.set(n[0],n[1])}}po.prototype.clear=so,po.prototype.delete=co,po.prototype.get=uo,po.prototype.has=fo,po.prototype.set=ho;var go=po,mo=go;function bo(e,t){if("function"!=typeof e||null!=t&&"function"!=typeof t)throw new TypeError("Expected a function");var r=function(){var n=arguments,o=t?t.apply(this,n):n[0],i=r.cache;if(i.has(o))return i.get(o);var a=e.apply(this,n);return r.cache=i.set(o,a)||i,a};return r.cache=new(bo.Cache||mo),r}bo.Cache=mo;var vo=bo;var yo=function(e){var t=vo(e,(function(e){return 500===r.size&&r.clear(),e})),r=t.cache;return t},xo=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,wo=/\\(\\)?/g,$o=yo((function(e){var t=[];return 46===e.charCodeAt(0)&&t.push(""),e.replace(xo,(function(e,r,n,o){t.push(n?o.replace(wo,"$1"):r||e)})),t}));var Co=function(e,t){for(var r=-1,n=null==e?0:e.length,o=Array(n);++r<n;)o[r]=t(e[r],r,e);return o},Do=fr,So=Ir,ko=br?br.prototype:void 0,Eo=ko?ko.toString:void 0;var Fo=function e(t){if("string"==typeof t)return t;if(Do(t))return Co(t,e)+"";if(So(t))return Eo?Eo.call(t):"";var r=t+"";return"0"==r&&1/t==-1/0?"-0":r},Oo=Fo;var To=fr,_o=zr,Io=$o,Mo=function(e){return null==e?"":Oo(e)};var Ao=function(e,t){return To(e)?e:_o(e,t)?[e]:Io(Mo(e))},Bo=Ir;var jo=function(e){if("string"==typeof e||Bo(e))return e;var t=e+"";return"0"==t&&1/e==-1/0?"-0":t},zo=Ao,Ro=jo;var Lo=function(e,t){for(var r=0,n=(t=zo(t,e)).length;null!=e&&r<n;)e=e[Ro(t[r++])];return r&&r==n?e:void 0},Po=Lo;var No=function(e,t,r){var n=null==e?void 0:Po(e,t);return void 0===n?r:n},Ho=je(No);const Wo=(e,t,r)=>Ho(r,t)||Ho(e,t),Yo=(e,t)=>{const r=t||e.defaultValue;return Ho(e.collections,r)},Vo={collections:{default:{"width-005":.5,"width-010":1,"width-020":2,"width-040":4,solid:"solid"}},defaultValue:"default"},Uo=e=>t=>{var r;const n=t.theme,o=Yo(Vo,null==n?void 0:n.borderScheme);return(null===(r=null==n?void 0:n.overrides)||void 0===r?void 0:r.border)?`${Wo(o,e,n.overrides.border)}px`:`${o[e]}px`},Ko={"width-005":Uo("width-005"),"width-010":Uo("width-010"),"width-020":Uo("width-020"),"width-040":Uo("width-040"),solid:(qo="solid",e=>{var t;const r=e.theme,n=Yo(Vo,null==r?void 0:r.borderScheme),o=(null===(t=null==r?void 0:r.overrides)||void 0===t?void 0:t.border)?Wo(n,qo,r.overrides.border):n[qo];return"function"==typeof o?o(e):o})};var qo;const Zo={"brand-10":"#2C0C0B","brand-20":"#4C1513","brand-30":"#6C1D1B","brand-40":"#922825","brand-50":"#BF3431","brand-60":"#F15D5A","brand-70":"#F69491","brand-80":"#FABAB7","brand-90":"#FCD7D2","brand-95":"#FFEBE7","brand-100":"#FFF6F4","primary-10":"#1A122C","primary-20":"#2F1F4D","primary-30":"#422D6E","primary-40":"#5B3D97","primary-50":"#7654BC","primary-60":"#9A82CD","primary-70":"#B7A7D8","primary-80":"#CFC5E5","primary-90":"#E3DDF0","primary-95":"#F0EDF7","primary-100":"#F9F8FC","secondary-10":"#0E1723","secondary-20":"#18293D","secondary-30":"#233A57","secondary-40":"#305078","secondary-50":"#4B6A8F","secondary-60":"#7B91A9","secondary-70":"#A1B1C3","secondary-80":"#C1CBD7","secondary-90":"#DBE1E8","secondary-95":"#EBEFF2","secondary-100":"#F7F8FA","neutral-10":"#161616","neutral-20":"#282828","neutral-30":"#393939","neutral-40":"#4E4E4E","neutral-50":"#686868","neutral-60":"#8E8E8E","neutral-70":"#AFAFB0","neutral-80":"#C7CACA","neutral-90":"#DDE1E2","neutral-95":"#EDEFEF","neutral-100":"#F9F9F9","success-10":"#081A0F","success-20":"#0E2D1B","success-30":"#154126","success-40":"#1C5A34","success-50":"#257645","success-60":"#44A068","success-70":"#64C189","success-80":"#80DCA5","success-90":"#B4ECCB","success-95":"#D5F6E2","success-100":"#EFFCF4","warning-10":"#221302","warning-20":"#3B2204","warning-30":"#543106","warning-40":"#744408","warning-50":"#98590C","warning-60":"#D07A13","warning-70":"#E4A244","warning-80":"#F5C26C","warning-90":"#FADBA6","warning-95":"#FCECD4","warning-100":"#FDF7F0","error-10":"#330505","error-20":"#550808","error-30":"#750C0C","error-40":"#9E130F","error-50":"#CB2213","error-60":"#DE6C6C","error-70":"#E89B9B","error-80":"#EFBEBE","error-90":"#F5D9D9","error-95":"#F9ECEC","error-100":"#FCF7F7","info-10":"#021824","info-20":"#032B3F","info-30":"#053D59","info-40":"#06547B","info-50":"#176E9B","info-60":"#5296BE","info-70":"#82B5DA","info-80":"#ACCFE7","info-90":"#CCE3F1","info-95":"#E3F1F8","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000","primary-inverse":"#FEAB10"},Go={"brand-10":"#1F1221","brand-20":"#371F3B","brand-30":"#4E2C53","brand-40":"#6B3E73","brand-50":"#8D5197","brand-60":"#FF3399","brand-70":"#FF88C4","brand-80":"#FFB3D9","brand-90":"#FFD4E9","brand-95":"#FFE8F3","brand-100":"#FFF8FC","primary-10":"#1F1221","primary-20":"#371F3B","primary-30":"#4E2C53","primary-40":"#6B3E73","primary-50":"#8D5197","primary-60":"#B07DB7","primary-70":"#C7A3CC","primary-80":"#D9C2DD","primary-90":"#E9DBEB","primary-95":"#F3ECF4","primary-100":"#FAF7FA","secondary-10":"#2D091B","secondary-20":"#4D0F2E","secondary-30":"#6B1540","secondary-40":"#931D58","secondary-50":"#C02673","secondary-60":"#FF409F","secondary-70":"#FF88C4","secondary-80":"#FFB3D9","secondary-90":"#FFD4E9","secondary-95":"#FFE8F3","secondary-100":"#FFF8FC","neutral-10":"#161616","neutral-20":"#282828","neutral-30":"#393939","neutral-40":"#4E4E4E","neutral-50":"#686868","neutral-60":"#8E8E8E","neutral-70":"#AFAFB0","neutral-80":"#C7CACA","neutral-90":"#DDE1E2","neutral-95":"#EDEFEF","neutral-100":"#F9F9F9","success-10":"#081A0F","success-20":"#0E2D1B","success-30":"#154126","success-40":"#1C5A34","success-50":"#257645","success-60":"#44A068","success-70":"#64C189","success-80":"#80DCA5","success-90":"#B4ECCB","success-95":"#D5F6E2","success-100":"#EFFCF4","warning-10":"#221302","warning-20":"#3B2204","warning-30":"#543106","warning-40":"#744408","warning-50":"#98590C","warning-60":"#D07A13","warning-70":"#E4A244","warning-80":"#F5C26C","warning-90":"#FADBA6","warning-95":"#FCECD4","warning-100":"#FDF7F0","error-10":"#330505","error-20":"#550808","error-30":"#750C0C","error-40":"#9E130F","error-50":"#CB2213","error-60":"#DE6C6C","error-70":"#E89B9B","error-80":"#EFBEBE","error-90":"#F5D9D9","error-95":"#F9ECEC","error-100":"#FCF7F7","info-10":"#021824","info-20":"#032B3F","info-30":"#053D59","info-40":"#06547B","info-50":"#176E9B","info-60":"#5296BE","info-70":"#82B5DA","info-80":"#ACCFE7","info-90":"#CCE3F1","info-95":"#E3F1F8","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000","primary-inverse":"#FEAB10"},Xo={"brand-10":"#2C0C0B","brand-20":"#4C1513","brand-30":"#6C1D1B","brand-40":"#922825","brand-50":"#BF3431","brand-60":"#F15D5A","brand-70":"#F69491","brand-80":"#FABAB7","brand-90":"#FCD7D2","brand-95":"#FFEBE7","brand-100":"#FFF6F4","primary-10":"#001731","primary-20":"#002752","primary-30":"#003874","primary-40":"#004D9F","primary-50":"#1768BE","primary-60":"#3C91EC","primary-70":"#6CB4FF","primary-80":"#A5CDFF","primary-90":"#CFE1FE","primary-95":"#E8F0FE","primary-100":"#F7F9FF","secondary-10":"#131529","secondary-20":"#222547","secondary-30":"#2F3565","secondary-40":"#42498B","secondary-50":"#5B62A7","secondary-60":"#858CBD","secondary-70":"#A8ADCF","secondary-80":"#C6C9E0","secondary-90":"#DDDFEC","secondary-95":"#EDEEF5","secondary-100":"#F8F8FB","neutral-10":"#161616","neutral-20":"#282828","neutral-30":"#393939","neutral-40":"#4E4E4E","neutral-50":"#686868","neutral-60":"#8E8E8E","neutral-70":"#AFAFB0","neutral-80":"#C7CACA","neutral-90":"#DDE1E2","neutral-95":"#EDEFEF","neutral-100":"#F9F9F9","success-10":"#081A0F","success-20":"#0E2D1B","success-30":"#154126","success-40":"#1C5A34","success-50":"#257645","success-60":"#44A068","success-70":"#64C189","success-80":"#80DCA5","success-90":"#B4ECCB","success-95":"#D5F6E2","success-100":"#EFFCF4","warning-10":"#221302","warning-20":"#3B2204","warning-30":"#543106","warning-40":"#744408","warning-50":"#98590C","warning-60":"#D07A13","warning-70":"#E4A244","warning-80":"#F5C26C","warning-90":"#FADBA6","warning-95":"#FCECD4","warning-100":"#FDF7F0","error-10":"#330505","error-20":"#550808","error-30":"#750C0C","error-40":"#9E130F","error-50":"#CB2213","error-60":"#DE6C6C","error-70":"#E89B9B","error-80":"#EFBEBE","error-90":"#F5D9D9","error-95":"#F9ECEC","error-100":"#FCF7F7","info-10":"#021824","info-20":"#032B3F","info-30":"#053D59","info-40":"#06547B","info-50":"#176E9B","info-60":"#5296BE","info-70":"#82B5DA","info-80":"#ACCFE7","info-90":"#CCE3F1","info-95":"#E3F1F8","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000","primary-inverse":"#FEAB10"},Jo={"brand-10":"#2C0C0B","brand-20":"#4C1513","brand-30":"#6C1D1B","brand-40":"#922825","brand-50":"#BF3431","brand-60":"#F15D5A","brand-70":"#F69491","brand-80":"#FABAB7","brand-90":"#FCD7D2","brand-95":"#FFEBE7","brand-100":"#FFF6F4","primary-10":"#0011924","primary-20":"#032B40","primary-30":"#043D5A","primary-40":"#05547B","primary-50":"#096EA1","primary-60":"#2098D3","primary-70":"#5CB9E8","primary-80":"#8BD3F6","primary-90":"#BEE6FA","primary-95":"#E2F2FA","primary-100":"#F4FAFC","secondary-10":"#131529","secondary-20":"#222547","secondary-30":"#2F3565","secondary-40":"#42498B","secondary-50":"#5B62A7","secondary-60":"#858CBD","secondary-70":"#A8ADCF","secondary-80":"#C6C9E0","secondary-90":"#DDDFEC","secondary-95":"#EDEEF5","secondary-100":"#F8F8FB","neutral-10":"#161616","neutral-20":"#282828","neutral-30":"#393939","neutral-40":"#4E4E4E","neutral-50":"#686868","neutral-60":"#8E8E8E","neutral-70":"#AFAFB0","neutral-80":"#C7CACA","neutral-90":"#DDE1E2","neutral-95":"#EDEFEF","neutral-100":"#F9F9F9","success-10":"#081A0F","success-20":"#0E2D1B","success-30":"#154126","success-40":"#1C5A34","success-50":"#257645","success-60":"#44A068","success-70":"#64C189","success-80":"#80DCA5","success-90":"#B4ECCB","success-95":"#D5F6E2","success-100":"#EFFCF4","warning-10":"#221302","warning-20":"#3B2204","warning-30":"#543106","warning-40":"#744408","warning-50":"#98590C","warning-60":"#D07A13","warning-70":"#E4A244","warning-80":"#F5C26C","warning-90":"#FADBA6","warning-95":"#FCECD4","warning-100":"#FDF7F0","error-10":"#330505","error-20":"#550808","error-30":"#750C0C","error-40":"#9E130F","error-50":"#CB2213","error-60":"#DE6C6C","error-70":"#E89B9B","error-80":"#EFBEBE","error-90":"#F5D9D9","error-95":"#F9ECEC","error-100":"#FCF7F7","info-10":"#021824","info-20":"#032B3F","info-30":"#053D59","info-40":"#06547B","info-50":"#176E9B","info-60":"#5296BE","info-70":"#82B5DA","info-80":"#ACCFE7","info-90":"#CCE3F1","info-95":"#E3F1F8","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000","primary-inverse":"#FEAB10"},Qo={"brand-10":"#001A19","brand-20":"#002D2B","brand-30":"#00413D","brand-40":"#005954","brand-50":"#00756F","brand-60":"#03A098","brand-70":"#55BFBA","brand-80":"#92D6D2","brand-90":"#BFE7E5","brand-95":"#DDF2F1","brand-100":"#F4FBFA","primary-10":"#09191D","primary-20":"#102B34","primary-30":"#173D49","primary-40":"#205666","primary-50":"#2A7086","primary-60":"#5D97A9","primary-70":"#8CB6C2","primary-80":"#B2CED6","primary-90":"#D1E2E7","primary-95":"#E8F0F3","primary-100":"#F7FAFB","secondary-10":"#001731","secondary-20":"#002752","secondary-30":"#003874","secondary-40":"#004D9F","secondary-50":"#5B62A7","secondary-60":"#858CBD","secondary-70":"#A8ADCF","secondary-80":"#C6C9E0","secondary-90":"#DDDFEC","secondary-95":"#EDEEF5","secondary-100":"#F8F8FB","neutral-10":"#161616","neutral-20":"#282828","neutral-30":"#393939","neutral-40":"#4E4E4E","neutral-50":"#686868","neutral-60":"#8E8E8E","neutral-70":"#AFAFB0","neutral-80":"#C7CACA","neutral-90":"#DDE1E2","neutral-95":"#EDEFEF","neutral-100":"#F9F9F9","success-10":"#081A0F","success-20":"#0E2D1B","success-30":"#154126","success-40":"#1C5A34","success-50":"#257645","success-60":"#44A068","success-70":"#64C189","success-80":"#80DCA5","success-90":"#B4ECCB","success-95":"#D5F6E2","success-100":"#EFFCF4","warning-10":"#221302","warning-20":"#3B2204","warning-30":"#543106","warning-40":"#744408","warning-50":"#98590C","warning-60":"#D07A13","warning-70":"#E4A244","warning-80":"#F5C26C","warning-90":"#FADBA6","warning-95":"#FCECD4","warning-100":"#FDF7F0","error-10":"#330505","error-20":"#550808","error-30":"#750C0C","error-40":"#9E130F","error-50":"#CB2213","error-60":"#DE6C6C","error-70":"#E89B9B","error-80":"#EFBEBE","error-90":"#F5D9D9","error-95":"#F9ECEC","error-100":"#FCF7F7","info-10":"#021824","info-20":"#032B3F","info-30":"#053D59","info-40":"#06547B","info-50":"#176E9B","info-60":"#5296BE","info-70":"#82B5DA","info-80":"#ACCFE7","info-90":"#CCE3F1","info-95":"#E3F1F8","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000","primary-inverse":"#FEAB10"},ei={"brand-10":"#881317","brand-20":"#B5191E","brand-30":"#B5040A","brand-40":"#D0333F","brand-50":"#DC666F","brand-60":"#E28087","brand-70":"#E7999F","brand-80":"#EDB3B7","brand-90":"#F3CCCF","brand-95":"#F9E6E7","brand-100":"#FCF2F3","primary-10":"#000000","primary-20":"#191919","primary-30":"#333333","primary-40":"#4D4D4D","primary-50":"#666666","primary-60":"#808080","primary-70":"#999999","primary-80":"#B3B3B3","primary-90":"#E6E6E6","primary-95":"#F7F7F7","primary-100":"#FFFFFF","secondary-10":"#19151D","secondary-20":"#2B2533","secondary-30":"#3E3649","secondary-40":"#564A64","secondary-50":"#6F637D","secondary-60":"#948B9F","secondary-70":"#B3ACBB","secondary-80":"#CCC8D2","secondary-90":"#E1DEE4","secondary-95":"#EFEEF1","secondary-100":"#F9F8F9","neutral-10":"#000000","neutral-20":"#191919","neutral-30":"#333333","neutral-40":"#4D4D4D","neutral-50":"#666666","neutral-60":"#808080","neutral-70":"#999999","neutral-80":"#B3B3B3","neutral-90":"#E6E6E6","neutral-95":"#F7F7F7","neutral-100":"#FFFFFF","success-10":"#081A0F","success-20":"#0E2D1B","success-30":"#154126","success-40":"#1C5A34","success-50":"#257645","success-60":"#44A068","success-70":"#64C189","success-80":"#80DCA5","success-90":"#B4ECCB","success-95":"#D5F6E2","success-100":"#EFFCF4","warning-10":"#221302","warning-20":"#3B2204","warning-30":"#543106","warning-40":"#744408","warning-50":"#98590C","warning-60":"#D07A13","warning-70":"#E4A244","warning-80":"#F5C26C","warning-90":"#FADBA6","warning-95":"#FCECD4","warning-100":"#FDF7F0","error-10":"#330505","error-20":"#550808","error-30":"#750C0C","error-40":"#9E130F","error-50":"#CB2213","error-60":"#DE6C6C","error-70":"#E89B9B","error-80":"#EFBEBE","error-90":"#F5D9D9","error-95":"#F9ECEC","error-100":"#FCF7F7","info-10":"#021824","info-20":"#032B3F","info-30":"#053D59","info-40":"#06547B","info-50":"#176E9B","info-60":"#5296BE","info-70":"#82B5DA","info-80":"#ACCFE7","info-90":"#CCE3F1","info-95":"#E3F1F8","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000","primary-inverse":"#FEAB10"},ti={"brand-10":"#0E123A","brand-20":"#191E65","brand-30":"#232B90","brand-40":"#303BC5","brand-50":"#494CFF","brand-60":"#AD6EFF","brand-70":"#AEA4FF","brand-80":"#C5C4FF","brand-90":"#DDDCFF","brand-95":"#EDECFF","brand-100":"#F8F8FF","primary-10":"#10152B","primary-20":"#1C254B","primary-30":"#28356C","primary-40":"#38489A","primary-50":"#4D5AD7","primary-60":"#7487F2","primary-70":"#9AAAFC","primary-80":"#BDC7FD","primary-90":"#DADFFB","primary-95":"#ECEEFE","primary-100":"#F7F8FF","secondary-10":"#19151D","secondary-20":"#2B2533","secondary-30":"#3E3649","secondary-40":"#564A64","secondary-50":"#6F637D","secondary-60":"#948B9F","secondary-70":"#B3ACBB","secondary-80":"#CCC8D2","secondary-90":"#E1DEE4","secondary-95":"#EFEEF1","secondary-100":"#F9F8F9","neutral-10":"#161616","neutral-20":"#282828","neutral-30":"#393939","neutral-40":"#4E4E4E","neutral-50":"#686868","neutral-60":"#8E8E8E","neutral-70":"#AFAFB0","neutral-80":"#C7CACA","neutral-90":"#DDE1E2","neutral-95":"#EDEFEF","neutral-100":"#F9F9F9","success-10":"#081A0F","success-20":"#0E2D1B","success-30":"#154126","success-40":"#1C5A34","success-50":"#257645","success-60":"#44A068","success-70":"#64C189","success-80":"#80DCA5","success-90":"#B4ECCB","success-95":"#D5F6E2","success-100":"#EFFCF4","warning-10":"#221302","warning-20":"#3B2204","warning-30":"#543106","warning-40":"#744408","warning-50":"#98590C","warning-60":"#D07A13","warning-70":"#E4A244","warning-80":"#F5C26C","warning-90":"#FADBA6","warning-95":"#FCECD4","warning-100":"#FDF7F0","error-10":"#330505","error-20":"#550808","error-30":"#750C0C","error-40":"#9E130F","error-50":"#CB2213","error-60":"#DE6C6C","error-70":"#E89B9B","error-80":"#EFBEBE","error-90":"#F5D9D9","error-95":"#F9ECEC","error-100":"#FCF7F7","info-10":"#021824","info-20":"#032B3F","info-30":"#053D59","info-40":"#06547B","info-50":"#176E9B","info-60":"#5296BE","info-70":"#82B5DA","info-80":"#ACCFE7","info-90":"#CCE3F1","info-95":"#E3F1F8","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000","primary-inverse":"#FEAB10"},ri={"brand-10":"#170F39","brand-20":"#281C62","brand-30":"#38268B","brand-40":"#4D34BF","brand-50":"#5735DF","brand-60":"#9986F9","brand-70":"#B2A5F8","brand-80":"#CDC2FA","brand-90":"#E2DCFC","brand-95":"#EFEDFE","brand-100":"#FAF8FD","primary-10":"#170F39","primary-20":"#281C62","primary-30":"#38268B","primary-40":"#4D34BF","primary-50":"#5735DF","primary-60":"#9986F9","primary-70":"#B2A5F8","primary-80":"#CDC2FA","primary-90":"#E2DCFC","primary-95":"#EFEDFE","primary-100":"#FAF8FD","secondary-10":"#251204","secondary-20":"#401F08","secondary-30":"#5B2C0B","secondary-40":"#7E3D0F","secondary-50":"#B04900","secondary-60":"#E26E1C","secondary-70":"#FF9445","secondary-80":"#FFBB8E","secondary-90":"#FFD9BF","secondary-95":"#FFECDF","secondary-100":"#FFF8F3","neutral-10":"#161616","neutral-20":"#282828","neutral-30":"#393939","neutral-40":"#4E4E4E","neutral-50":"#686868","neutral-60":"#8E8E8E","neutral-70":"#AFAFB0","neutral-80":"#C7CACA","neutral-90":"#DDE1E2","neutral-95":"#EDEFEF","neutral-100":"#F9F9F9","success-10":"#031B15","success-20":"#082D24","success-30":"#094134","success-40":"#0D5947","success-50":"#10755E","success-60":"#16A181","success-70":"#1EC59D","success-80":"#6FDDC2","success-90":"#AFECDE","success-95":"#D5F5ED","success-100":"#F1FCF9","warning-10":"#1F1500","warning-20":"#362500","warning-30":"#4D3501","warning-40":"#6A4801","warning-50":"#8B6001","warning-60":"#BF8301","warning-70":"#EAA102","warning-80":"#FFBF34","warning-90":"#FFDC8F","warning-95":"#FFEDC7","warning-100":"#FFF8EA","error-10":"#270F10","error-20":"#441B1B","error-30":"#612627","error-40":"#853535","error-50":"#AF4546","error-60":"#EC6162","error-70":"#F29696","error-80":"#F7BBBC","error-90":"#FAD8D8","error-95":"#FCEAEA","error-100":"#FEF7F7","info-10":"#0F1627","info-20":"#1B2745","info-30":"#273763","info-40":"#354D88","info-50":"#4665B3","info-60":"#618AF6","info-70":"#8DADFF","info-80":"#B4C9FF","info-90":"#D3DFFF","info-95":"#E9EFFF","info-100":"#F5F8FF",white:"#FFFFFF",black:"#000000","primary-inverse":"#FEAB10"},ni={"brand-10":"#0E113C","brand-20":"#191E67","brand-30":"#232A92","brand-40":"#233FC2","brand-50":"#135CEA","brand-60":"#378FFB","brand-70":"#71B3FD","brand-80":"#9DCFFE","brand-90":"#C1E5FF","brand-95":"#DCF1FF","brand-100":"#F3FAFF","primary-10":"#0E113C","primary-20":"#191E67","primary-30":"#232A92","primary-40":"#233FC2","primary-50":"#135CEA","primary-60":"#378FFB","primary-70":"#71B3FD","primary-80":"#9DCFFE","primary-90":"#C1E5FF","primary-95":"#DCF1FF","primary-100":"#F3FAFF","secondary-10":"#34001F","secondary-20":"#540033","secondary-30":"#730045","secondary-40":"#9D0054","secondary-50":"#C61C64","secondary-60":"#DE6792","secondary-70":"#EB96B6","secondary-80":"#F5BAD2","secondary-90":"#FCD5E3","secondary-95":"#FDEBF1","secondary-100":"#FDF6F9","neutral-10":"#161616","neutral-20":"#282828","neutral-30":"#393939","neutral-40":"#4E4E4E","neutral-50":"#686868","neutral-60":"#8E8E8E","neutral-70":"#AFAFB0","neutral-80":"#C7CACA","neutral-90":"#DDE1E2","neutral-95":"#EDEFEF","neutral-100":"#F9F9F9","success-10":"#081A0F","success-20":"#0E2D1B","success-30":"#154126","success-40":"#1C5A34","success-50":"#257645","success-60":"#44A068","success-70":"#64C189","success-80":"#80DCA5","success-90":"#B4ECCB","success-95":"#D5F6E2","success-100":"#EFFCF4","warning-10":"#221302","warning-20":"#3B2204","warning-30":"#543106","warning-40":"#744408","warning-50":"#98590C","warning-60":"#D07A13","warning-70":"#E4A244","warning-80":"#F5C26C","warning-90":"#FADBA6","warning-95":"#FCECD4","warning-100":"#FDF7F0","error-10":"#330505","error-20":"#550808","error-30":"#750C0C","error-40":"#9E130F","error-50":"#CB2213","error-60":"#DE6C6C","error-70":"#E89B9B","error-80":"#EFBEBE","error-90":"#F5D9D9","error-95":"#F9ECEC","error-100":"#FCF7F7","info-10":"#021824","info-20":"#032B3F","info-30":"#053D59","info-40":"#06547B","info-50":"#176E9B","info-60":"#5296BE","info-70":"#82B5DA","info-80":"#ACCFE7","info-90":"#CCE3F1","info-95":"#E3F1F8","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000","primary-inverse":"#FEAB10"},oi={"brand-10":"#370009","brand-20":"#4E000D","brand-30":"#640011","brand-40":"#850017","brand-50":"#9B001A","brand-60":"#EF2D4E","brand-70":"#F692A3","brand-80":"#FAB9C4","brand-90":"#FCD7DD","brand-95":"#FDEAED","brand-100":"#FEF8F9","primary-10":"#1F102A","primary-20":"#2F193F","primary-30":"#3E2053","primary-40":"#562D71","primary-50":"#663587","primary-60":"#9370AA","primary-70":"#BCA7CB","primary-80":"#D3C5DC","primary-90":"#E5DDEB","primary-95":"#F2EEF5","primary-100":"#FAF9FB","secondary-10":"#201316","secondary-20":"#311D22","secondary-30":"#3F272C","secondary-40":"#58363D","secondary-50":"#684049","secondary-60":"#AF6A7A","secondary-70":"#F393A8","secondary-80":"#FFB6C6","secondary-90":"#FFD6DF","secondary-95":"#FFE9EE","secondary-100":"#FFF7F9","neutral-10":"#161616","neutral-20":"#222222","neutral-30":"#2D2D2D","neutral-40":"#3F3F3F","neutral-50":"#4B4B4B","neutral-60":"#7E7E7E","neutral-70":"#AFAFB0","neutral-80":"#C7CACA","neutral-90":"#DDE1E2","neutral-95":"#EDEFEF","neutral-100":"#F9F9F9","success-10":"#081917","success-20":"#0D2724","success-30":"#11332E","success-40":"#174740","success-50":"#1B554C","success-60":"#2D8C7E","success-70":"#46C2AF","success-80":"#89D8CC","success-90":"#BCE9E2","success-95":"#DAF3EF","success-100":"#F0FAF9","warning-10":"#241200","warning-20":"#371C00","warning-30":"#482500","warning-40":"#633300","warning-50":"#763C00","warning-60":"#C36400","warning-70":"#FF9524","warning-80":"#FFBD77","warning-90":"#FFD9B2","warning-95":"#FFEBD6","warning-100":"#FFF7F0","error-10":"#330505","error-20":"#4B0707","error-30":"#600909","error-40":"#810D0D","error-50":"#98110F","error-60":"#D7504C","error-70":"#E89B9B","error-80":"#EFBEBE","error-90":"#F5D9D9","error-95":"#F9ECEC","error-100":"#FCF7F7","info-10":"#021824","info-20":"#032537","info-30":"#043148","info-40":"#054462","info-50":"#065175","info-60":"#3985AF","info-70":"#82B5DA","info-80":"#ACCFE7","info-90":"#CCE3F1","info-95":"#E3F1F8","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000","primary-inverse":"#FEAB10"},ii={"brand-10":"#00143A","brand-20":"#00205B","brand-30":"#153368","brand-40":"#18417C","brand-50":"#00558C","brand-60":"#009CDE","brand-70":"#5AB9E7","brand-80":"#9ED0ED","brand-90":"#CAE3F4","brand-95":"#E2F0F9","brand-100":"#F4FAFD","primary-10":"#00143A","primary-20":"#00205B","primary-30":"#153368","primary-40":"#18417C","primary-50":"#00558C","primary-60":"#009CDE","primary-70":"#5AB9E7","primary-80":"#9ED0ED","primary-90":"#CAE3F4","primary-95":"#E2F0F9","primary-100":"#F4FAFD","secondary-10":"#10171F","secondary-20":"#1E252C","secondary-30":"#2F353B","secondary-40":"#3D4247","secondary-50":"#4E5255","secondary-60":"#8F9396","secondary-70":"#A9B0B3","secondary-80":"#C7CBCC","secondary-90":"#DDDFE0","secondary-95":"#ECEDEE","secondary-100":"#F8F8F9","neutral-10":"#10171F","neutral-20":"#1E252C","neutral-30":"#2F353B","neutral-40":"#3D4247","neutral-50":"#4E5255","neutral-60":"#8F9396","neutral-70":"#A9B0B3","neutral-80":"#C7CBCC","neutral-90":"#DDDFE0","neutral-95":"#ECEDEE","neutral-100":"#F8F8F9","success-10":"#001B0E","success-20":"#012A16","success-30":"#013D20","success-40":"#014D28","success-50":"#005F30","success-60":"#48A377","success-70":"#77BD9B","success-80":"#A3D5BD","success-90":"#C4E7D6","success-95":"#DBF4E7","success-100":"#ECFDF5","warning-10":"#1F1500","warning-20":"#312100","warning-30":"#473000","warning-40":"#593C00","warning-50":"#6E4B00","warning-60":"#B78C31","warning-70":"#DDA633","warning-80":"#E0C792","warning-90":"#E9DEC5","warning-95":"#F4EEE0","warning-100":"#FAF8F3","error-10":"#360109","error-20":"#50010E","error-30":"#6F0213","error-40":"#88051A","error-50":"#A60A24","error-60":"#E07083","error-70":"#EA98A6","error-80":"#F3BBC4","error-90":"#FAD5DC","error-95":"#FEE9ED","error-100":"#FFF6F8","info-10":"#00143A","info-20":"#00205B","info-30":"#153368","info-40":"#18417C","info-50":"#00558C","info-60":"#009CDE","info-70":"#5AB9E7","info-80":"#9ED0ED","info-90":"#CAE3F4","info-95":"#E2F0F9","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000","primary-inverse":"#FFCB6A"},ai={collections:{lifesg:Xo,bookingsg:Zo,rbs:ti,mylegacy:Jo,ccube:Go,oneservice:Qo,pa:ei,a11yplayground:ri,supportgowhere:ni,imda:oi,spf:ii},defaultValue:"lifesg"},li={collections:{lifesg:Xo,bookingsg:Zo,rbs:ti,mylegacy:Jo,ccube:Go,oneservice:Qo,pa:ei,a11yplayground:ri,supportgowhere:ni,imda:oi,spf:ii},defaultValue:"lifesg"},si=e=>t=>{var r;const n=t.theme,o="dark"===(null==n?void 0:n.colourMode),i=Yo(o?li:ai,null==n?void 0:n.colourScheme),a=o?"primitiveColourDark":"primitiveColour",l=null===(r=null==n?void 0:n.overrides)||void 0===r?void 0:r[a];return l?Wo(i,e,l):i[e]},di={"brand-10":si("brand-10"),"brand-20":si("brand-20"),"brand-30":si("brand-30"),"brand-40":si("brand-40"),"brand-50":si("brand-50"),"brand-60":si("brand-60"),"brand-70":si("brand-70"),"brand-80":si("brand-80"),"brand-90":si("brand-90"),"brand-95":si("brand-95"),"brand-100":si("brand-100"),"primary-10":si("primary-10"),"primary-20":si("primary-20"),"primary-30":si("primary-30"),"primary-40":si("primary-40"),"primary-50":si("primary-50"),"primary-60":si("primary-60"),"primary-70":si("primary-70"),"primary-80":si("primary-80"),"primary-90":si("primary-90"),"primary-95":si("primary-95"),"primary-100":si("primary-100"),"secondary-10":si("secondary-10"),"secondary-20":si("secondary-20"),"secondary-30":si("secondary-30"),"secondary-40":si("secondary-40"),"secondary-50":si("secondary-50"),"secondary-60":si("secondary-60"),"secondary-70":si("secondary-70"),"secondary-80":si("secondary-80"),"secondary-90":si("secondary-90"),"secondary-95":si("secondary-95"),"secondary-100":si("secondary-100"),"neutral-10":si("neutral-10"),"neutral-20":si("neutral-20"),"neutral-30":si("neutral-30"),"neutral-40":si("neutral-40"),"neutral-50":si("neutral-50"),"neutral-60":si("neutral-60"),"neutral-70":si("neutral-70"),"neutral-80":si("neutral-80"),"neutral-90":si("neutral-90"),"neutral-95":si("neutral-95"),"neutral-100":si("neutral-100"),"success-10":si("success-10"),"success-20":si("success-20"),"success-30":si("success-30"),"success-40":si("success-40"),"success-50":si("success-50"),"success-60":si("success-60"),"success-70":si("success-70"),"success-80":si("success-80"),"success-90":si("success-90"),"success-95":si("success-95"),"success-100":si("success-100"),"warning-10":si("warning-10"),"warning-20":si("warning-20"),"warning-30":si("warning-30"),"warning-40":si("warning-40"),"warning-50":si("warning-50"),"warning-60":si("warning-60"),"warning-70":si("warning-70"),"warning-80":si("warning-80"),"warning-90":si("warning-90"),"warning-95":si("warning-95"),"warning-100":si("warning-100"),"error-10":si("error-10"),"error-20":si("error-20"),"error-30":si("error-30"),"error-40":si("error-40"),"error-50":si("error-50"),"error-60":si("error-60"),"error-70":si("error-70"),"error-80":si("error-80"),"error-90":si("error-90"),"error-95":si("error-95"),"error-100":si("error-100"),"info-10":si("info-10"),"info-20":si("info-20"),"info-30":si("info-30"),"info-40":si("info-40"),"info-50":si("info-50"),"info-60":si("info-60"),"info-70":si("info-70"),"info-80":si("info-80"),"info-90":si("info-90"),"info-95":si("info-95"),"info-100":si("info-100"),white:si("white"),black:si("black"),"primary-inverse":si("primary-inverse")},ci={text:si("neutral-20"),"text-subtle":si("neutral-30"),"text-subtler":si("neutral-50"),"text-subtlest":si("neutral-60"),"text-primary":si("primary-50"),"text-primary-strongest":si("primary-20"),"text-hover":si("primary-40"),"text-selected":si("primary-50"),"text-selected-hover":si("primary-40"),"text-disabled":si("neutral-50"),"text-disabled-subtle":si("neutral-60"),"text-disabled-subtlest":si("neutral-80"),"text-selected-disabled":si("neutral-20"),"text-success":si("success-40"),"text-warning":si("warning-40"),"text-error":si("error-40"),"text-info":si("info-40"),"text-inverse":si("white"),icon:si("neutral-50"),"icon-subtle":si("neutral-60"),"icon-strongest":si("neutral-20"),"icon-primary":si("primary-50"),"icon-primary-subtle":si("primary-60"),"icon-primary-subtlest":si("primary-70"),"icon-hover":si("primary-40"),"icon-selected":si("primary-50"),"icon-selected-hover":si("primary-40"),"icon-disabled":si("neutral-50"),"icon-disabled-subtle":si("neutral-60"),"icon-selected-disabled":si("neutral-60"),"icon-success":si("success-50"),"icon-warning":si("warning-60"),"icon-error":si("error-50"),"icon-error-strong":si("error-40"),"icon-info":si("info-50"),"icon-inverse":si("white"),"icon-primary-inverse":si("primary-inverse"),border:si("neutral-90"),"border-strong":si("neutral-70"),"border-stronger":si("neutral-50"),"border-primary":si("primary-50"),"border-primary-subtle":si("primary-60"),"border-hover":si("primary-90"),"border-hover-strong":si("primary-60"),"border-selected":si("primary-50"),"border-selected-subtle":si("primary-70"),"border-selected-subtlest":si("primary-90"),"border-selected-hover":si("primary-40"),"border-focus":si("primary-60"),"border-focus-strong":si("primary-50"),"border-disabled":si("neutral-90"),"border-selected-disabled":si("neutral-70"),"border-success":si("success-60"),"border-warning":si("warning-60"),"border-error":si("error-60"),"border-error-focus":si("error-60"),"border-error-focus-strong":si("error-40"),"border-error-strong":si("error-40"),"border-info":si("info-60"),bg:si("white"),"bg-strong":si("neutral-100"),"bg-stronger":si("neutral-95"),"bg-strongest":si("neutral-90"),"bg-hover":si("primary-95"),"bg-hover-strong":si("primary-90"),"bg-hover-subtle":si("primary-100"),"bg-hover-neutral":si("neutral-100"),"bg-hover-neutral-strong":si("neutral-90"),"bg-selected":si("primary-95"),"bg-selected-hover":si("primary-90"),"bg-selected-strong":si("primary-90"),"bg-selected-stronger":si("primary-70"),"bg-selected-strongest":si("primary-50"),"bg-selected-strongest-hover":si("primary-40"),"bg-disabled":si("neutral-95"),"bg-selected-disabled":si("neutral-95"),"bg-selected-stronger-disabled":si("neutral-70"),"bg-success":si("success-100"),"bg-success-hover":si("success-95"),"bg-success-strong":si("success-50"),"bg-success-strong-hover":si("success-40"),"bg-warning":si("warning-100"),"bg-warning-hover":si("warning-95"),"bg-warning-strong":si("warning-50"),"bg-warning-strong-hover":si("warning-40"),"bg-info":si("info-100"),"bg-info-hover":si("info-95"),"bg-info-strong":si("info-50"),"bg-info-strong-hover":si("info-40"),"bg-error":si("error-100"),"bg-error-hover":si("error-95"),"bg-error-strong":si("error-50"),"bg-error-strong-hover":si("error-40"),"bg-inverse":si("neutral-20"),"bg-inverse-subtle":si("neutral-30"),"bg-inverse-subtler":si("neutral-50"),"bg-inverse-subtlest":si("neutral-60"),"bg-inverse-hover":si("neutral-40"),"bg-primary":si("primary-50"),"bg-primary-subtle":si("primary-60"),"bg-primary-subtler":si("primary-95"),"bg-primary-subtlest":si("primary-100"),"bg-available":"#6DD0A1","bg-primary-hover":si("primary-40"),"bg-primary-subtlest-hover":si("primary-90"),"bg-primary-subtlest-selected":si("primary-90"),"overlay-strong":"rgba(40, 40, 40, 0.85)","overlay-subtle":"rgba(40, 40, 40, 0.20)",hyperlink:si("primary-50"),"hyperlink-hover":si("primary-40"),"hyperlink-visited":si("primary-40"),"hyperlink-inverse":si("primary-inverse"),"focus-ring":si("primary-50"),"focus-ring-inverse":si("white")},ui={text:si("neutral-100"),"text-subtle":si("neutral-80"),"text-subtler":si("neutral-60"),"text-subtlest":si("neutral-50"),"text-primary":si("primary-60"),"text-primary-strongest":si("primary-90"),"text-hover":si("primary-70"),"text-selected":si("primary-60"),"text-selected-hover":si("primary-70"),"text-disabled":si("neutral-60"),"text-disabled-subtle":si("neutral-50"),"text-disabled-subtlest":si("neutral-30"),"text-selected-disabled":si("neutral-90"),"text-success":si("success-70"),"text-warning":si("warning-70"),"text-error":si("error-70"),"text-info":si("info-70"),"text-inverse":si("black"),icon:si("neutral-60"),"icon-subtle":si("neutral-50"),"icon-strongest":si("neutral-90"),"icon-primary":si("primary-60"),"icon-primary-subtle":si("primary-50"),"icon-primary-subtlest":si("primary-40"),"icon-hover":si("primary-70"),"icon-selected":si("primary-60"),"icon-selected-hover":si("primary-70"),"icon-disabled":si("neutral-60"),"icon-disabled-subtle":si("neutral-50"),"icon-selected-disabled":si("neutral-50"),"icon-success":si("success-60"),"icon-warning":si("warning-50"),"icon-error":si("error-60"),"icon-error-strong":si("error-70"),"icon-info":si("info-60"),"icon-inverse":si("black"),"icon-primary-inverse":si("primary-inverse"),border:si("neutral-20"),"border-strong":si("neutral-40"),"border-stronger":si("neutral-60"),"border-primary":si("primary-60"),"border-primary-subtle":si("primary-50"),"border-hover":si("primary-20"),"border-hover-strong":si("primary-50"),"border-selected":si("primary-60"),"border-selected-subtle":si("primary-40"),"border-selected-subtlest":si("primary-20"),"border-selected-hover":si("primary-70"),"border-focus":si("primary-50"),"border-focus-strong":si("primary-60"),"border-disabled":si("neutral-20"),"border-selected-disabled":si("neutral-40"),"border-success":si("success-50"),"border-warning":si("warning-50"),"border-error":si("error-50"),"border-error-focus":si("error-50"),"border-error-focus-strong":si("error-70"),"border-error-strong":si("error-70"),"border-info":si("info-50"),bg:si("black"),"bg-strong":si("neutral-10"),"bg-stronger":si("neutral-20"),"bg-strongest":si("neutral-20"),"bg-hover":si("primary-20"),"bg-hover-strong":si("primary-20"),"bg-hover-subtle":si("primary-10"),"bg-hover-neutral":si("neutral-10"),"bg-hover-neutral-strong":si("neutral-20"),"bg-selected":si("primary-20"),"bg-selected-hover":si("primary-20"),"bg-selected-strong":si("primary-20"),"bg-selected-stronger":si("primary-40"),"bg-selected-strongest":si("primary-60"),"bg-selected-strongest-hover":si("primary-70"),"bg-disabled":si("neutral-20"),"bg-selected-disabled":si("neutral-20"),"bg-selected-stronger-disabled":si("neutral-40"),"bg-success":si("success-10"),"bg-success-hover":si("success-20"),"bg-success-strong":si("success-60"),"bg-success-strong-hover":si("success-70"),"bg-warning":si("warning-10"),"bg-warning-hover":si("warning-20"),"bg-warning-strong":si("warning-60"),"bg-warning-strong-hover":si("warning-70"),"bg-info":si("info-10"),"bg-info-hover":si("info-20"),"bg-info-strong":si("info-60"),"bg-info-strong-hover":si("info-70"),"bg-error":si("error-10"),"bg-error-hover":si("error-20"),"bg-error-strong":si("error-60"),"bg-error-strong-hover":si("error-70"),"bg-inverse":si("neutral-90"),"bg-inverse-subtle":si("neutral-80"),"bg-inverse-subtler":si("neutral-60"),"bg-inverse-subtlest":si("neutral-50"),"bg-inverse-hover":si("neutral-70"),"bg-primary":si("primary-60"),"bg-primary-subtle":si("primary-50"),"bg-primary-subtler":si("primary-20"),"bg-primary-subtlest":si("primary-10"),"bg-available":"#185339","bg-primary-hover":si("primary-70"),"bg-primary-subtlest-hover":si("primary-20"),"bg-primary-subtlest-selected":si("primary-20"),"overlay-strong":"rgba(78, 78, 78, 0.80)","overlay-subtle":"rgba(78, 78, 78, 0.50)",hyperlink:si("primary-60"),"hyperlink-hover":si("primary-70"),"hyperlink-visited":si("primary-70"),"hyperlink-inverse":si("primary-inverse"),"focus-ring":si("primary-60"),"focus-ring-inverse":si("black")},fi={text:si("neutral-30"),"text-subtle":si("neutral-40"),"text-subtler":si("neutral-50"),"text-subtlest":si("neutral-70"),"text-primary":si("neutral-10"),"text-primary-strongest":si("neutral-10"),"text-hover":si("neutral-70"),"text-selected":si("neutral-20"),"text-selected-hover":si("neutral-10"),"text-disabled":si("neutral-50"),"text-disabled-subtle":si("neutral-70"),"text-disabled-subtlest":si("neutral-80"),"text-selected-disabled":si("neutral-40"),"text-success":si("success-40"),"text-warning":si("warning-40"),"text-error":si("brand-30"),"text-info":si("neutral-40"),"text-inverse":si("neutral-100"),icon:si("neutral-40"),"icon-subtle":si("neutral-50"),"icon-strongest":si("neutral-10"),"icon-primary":si("neutral-10"),"icon-primary-subtle":si("neutral-30"),"icon-primary-subtlest":si("neutral-60"),"icon-hover":si("neutral-70"),"icon-selected":si("brand-20"),"icon-selected-hover":si("brand-10"),"icon-disabled":si("neutral-50"),"icon-disabled-subtle":si("neutral-70"),"icon-selected-disabled":si("neutral-40"),"icon-success":si("success-40"),"icon-warning":si("warning-60"),"icon-error":si("brand-30"),"icon-error-strong":si("brand-10"),"icon-info":si("neutral-40"),"icon-inverse":si("neutral-100"),"icon-primary-inverse":"#F9B371",border:si("neutral-90"),"border-strong":si("neutral-30"),"border-stronger":si("neutral-20"),"border-primary":si("neutral-40"),"border-primary-subtle":si("neutral-60"),"border-hover":si("neutral-80"),"border-hover-strong":si("neutral-10"),"border-selected":si("brand-20"),"border-selected-subtle":si("neutral-40"),"border-selected-subtlest":si("neutral-70"),"border-selected-hover":si("neutral-10"),"border-focus":si("neutral-20"),"border-focus-strong":si("neutral-10"),"border-disabled":si("neutral-90"),"border-selected-disabled":si("neutral-80"),"border-success":si("success-40"),"border-warning":si("warning-60"),"border-error":si("brand-30"),"border-error-focus":si("brand-20"),"border-error-focus-strong":si("brand-10"),"border-error-strong":si("brand-20"),"border-info":si("neutral-40"),bg:si("neutral-100"),"bg-strong":si("neutral-95"),"bg-stronger":si("neutral-90"),"bg-strongest":si("neutral-80"),"bg-hover":si("brand-90"),"bg-hover-strong":si("brand-80"),"bg-hover-subtle":si("neutral-90"),"bg-hover-neutral":si("neutral-90"),"bg-hover-neutral-strong":si("neutral-90"),"bg-selected":si("brand-100"),"bg-selected-hover":si("brand-30"),"bg-selected-strong":si("brand-50"),"bg-selected-stronger":si("brand-40"),"bg-selected-strongest":si("brand-20"),"bg-selected-strongest-hover":si("brand-10"),"bg-disabled":si("neutral-90"),"bg-selected-disabled":si("neutral-90"),"bg-selected-stronger-disabled":si("neutral-80"),"bg-success":si("success-100"),"bg-success-hover":si("success-95"),"bg-success-strong":si("success-50"),"bg-success-strong-hover":si("success-40"),"bg-warning":si("warning-100"),"bg-warning-hover":si("warning-95"),"bg-warning-strong":si("warning-50"),"bg-warning-strong-hover":si("warning-40"),"bg-info":si("neutral-95"),"bg-info-hover":si("info-95"),"bg-info-strong":si("info-50"),"bg-info-strong-hover":si("info-40"),"bg-error":si("brand-100"),"bg-error-hover":si("error-95"),"bg-error-strong":si("error-50"),"bg-error-strong-hover":si("error-40"),"bg-inverse":si("neutral-40"),"bg-inverse-subtle":si("neutral-60"),"bg-inverse-subtler":si("neutral-70"),"bg-inverse-subtlest":si("neutral-80"),"bg-inverse-hover":si("neutral-30"),"bg-primary":si("brand-20"),"bg-primary-subtle":si("brand-60"),"bg-primary-subtler":si("brand-80"),"bg-primary-subtlest":si("brand-100"),"bg-available":si("success-60"),"bg-primary-hover":si("brand-10"),"bg-primary-subtlest-hover":si("brand-80"),"bg-primary-subtlest-selected":si("brand-40"),"overlay-strong":"rgba(25, 25, 25, 0.95)","overlay-subtle":"rgba(25, 25, 25, 0.20)",hyperlink:si("neutral-10"),"hyperlink-hover":si("neutral-40"),"hyperlink-visited":si("neutral-50"),"hyperlink-inverse":"#F8AE68","focus-ring":si("primary-50"),"focus-ring-inverse":si("white")},hi={text:si("neutral-20"),"text-subtle":si("neutral-30"),"text-subtler":si("neutral-50"),"text-subtlest":si("neutral-60"),"text-primary":si("primary-50"),"text-primary-strongest":si("primary-20"),"text-hover":si("primary-40"),"text-selected":si("primary-50"),"text-selected-hover":si("primary-40"),"text-disabled":si("neutral-50"),"text-disabled-subtle":si("neutral-60"),"text-disabled-subtlest":si("neutral-80"),"text-selected-disabled":si("neutral-20"),"text-success":si("success-40"),"text-warning":si("warning-40"),"text-error":si("error-40"),"text-info":si("info-40"),"text-inverse":si("white"),icon:si("neutral-50"),"icon-subtle":si("neutral-60"),"icon-strongest":si("neutral-20"),"icon-primary":si("primary-50"),"icon-primary-subtle":si("primary-60"),"icon-primary-subtlest":si("primary-70"),"icon-hover":si("primary-40"),"icon-selected":si("primary-50"),"icon-selected-hover":si("primary-40"),"icon-disabled":si("neutral-50"),"icon-disabled-subtle":si("neutral-60"),"icon-selected-disabled":si("neutral-60"),"icon-success":si("success-50"),"icon-warning":si("warning-60"),"icon-error":si("error-50"),"icon-error-strong":si("error-40"),"icon-info":si("info-50"),"icon-inverse":si("white"),"icon-primary-inverse":si("primary-inverse"),border:si("neutral-90"),"border-strong":si("neutral-70"),"border-stronger":si("neutral-50"),"border-primary":si("primary-50"),"border-primary-subtle":si("primary-60"),"border-hover":si("primary-90"),"border-hover-strong":si("primary-60"),"border-selected":si("primary-50"),"border-selected-subtle":si("primary-70"),"border-selected-subtlest":si("primary-90"),"border-selected-hover":si("primary-40"),"border-focus":si("primary-60"),"border-focus-strong":si("primary-50"),"border-disabled":si("neutral-90"),"border-selected-disabled":si("neutral-70"),"border-success":si("success-60"),"border-warning":si("warning-60"),"border-error":si("error-60"),"border-error-focus":si("error-60"),"border-error-focus-strong":si("error-40"),"border-error-strong":si("error-40"),"border-info":si("info-60"),bg:si("white"),"bg-strong":si("neutral-100"),"bg-stronger":si("neutral-95"),"bg-strongest":si("neutral-90"),"bg-hover":si("primary-95"),"bg-hover-strong":si("primary-90"),"bg-hover-subtle":si("primary-100"),"bg-hover-neutral":si("neutral-100"),"bg-hover-neutral-strong":si("neutral-90"),"bg-selected":si("primary-95"),"bg-selected-hover":si("primary-90"),"bg-selected-strong":si("primary-90"),"bg-selected-stronger":si("primary-70"),"bg-selected-strongest":si("primary-50"),"bg-selected-strongest-hover":si("primary-40"),"bg-disabled":si("neutral-95"),"bg-selected-disabled":si("neutral-95"),"bg-selected-stronger-disabled":si("neutral-70"),"bg-success":si("success-100"),"bg-success-hover":si("success-95"),"bg-success-strong":si("success-50"),"bg-success-strong-hover":si("success-40"),"bg-warning":si("warning-100"),"bg-warning-hover":si("warning-95"),"bg-warning-strong":si("warning-50"),"bg-warning-strong-hover":si("warning-40"),"bg-info":si("info-100"),"bg-info-hover":si("info-95"),"bg-info-strong":si("info-50"),"bg-info-strong-hover":si("info-40"),"bg-error":si("error-100"),"bg-error-hover":si("error-95"),"bg-error-strong":si("error-50"),"bg-error-strong-hover":si("error-40"),"bg-inverse":si("neutral-20"),"bg-inverse-subtle":si("neutral-30"),"bg-inverse-subtler":si("neutral-50"),"bg-inverse-subtlest":si("neutral-60"),"bg-inverse-hover":si("neutral-40"),"bg-primary":si("primary-50"),"bg-primary-subtle":si("primary-60"),"bg-primary-subtler":si("primary-95"),"bg-primary-subtlest":si("primary-100"),"bg-available":"#6DD0A1","bg-primary-hover":si("primary-40"),"bg-primary-subtlest-hover":si("primary-90"),"bg-primary-subtlest-selected":si("primary-90"),"overlay-strong":"rgba(40, 40, 40, 0.85)","overlay-subtle":"rgba(40, 40, 40, 0.20)",hyperlink:si("primary-50"),"hyperlink-hover":si("primary-40"),"hyperlink-visited":si("primary-40"),"hyperlink-inverse":si("primary-inverse"),"focus-ring":si("primary-50"),"focus-ring-inverse":si("white")},pi={text:si("neutral-100"),"text-subtle":si("neutral-80"),"text-subtler":si("neutral-60"),"text-subtlest":si("neutral-50"),"text-primary":si("primary-60"),"text-primary-strongest":si("primary-90"),"text-hover":si("primary-70"),"text-selected":si("primary-60"),"text-selected-hover":si("primary-70"),"text-disabled":si("neutral-60"),"text-disabled-subtle":si("neutral-50"),"text-disabled-subtlest":si("neutral-30"),"text-selected-disabled":si("neutral-90"),"text-success":si("success-70"),"text-warning":si("warning-70"),"text-error":si("error-70"),"text-info":si("info-70"),"text-inverse":si("black"),icon:si("neutral-60"),"icon-subtle":si("neutral-50"),"icon-strongest":si("neutral-90"),"icon-primary":si("primary-60"),"icon-primary-subtle":si("primary-50"),"icon-primary-subtlest":si("primary-40"),"icon-hover":si("primary-70"),"icon-selected":si("primary-60"),"icon-selected-hover":si("primary-70"),"icon-disabled":si("neutral-60"),"icon-disabled-subtle":si("neutral-50"),"icon-selected-disabled":si("neutral-50"),"icon-success":si("success-60"),"icon-warning":si("warning-50"),"icon-error":si("error-60"),"icon-error-strong":si("error-70"),"icon-info":si("info-60"),"icon-inverse":si("black"),"icon-primary-inverse":si("primary-inverse"),border:si("neutral-20"),"border-strong":si("neutral-40"),"border-stronger":si("neutral-60"),"border-primary":si("primary-60"),"border-primary-subtle":si("primary-50"),"border-hover":si("primary-20"),"border-hover-strong":si("primary-50"),"border-selected":si("primary-60"),"border-selected-subtle":si("primary-40"),"border-selected-subtlest":si("primary-20"),"border-selected-hover":si("primary-70"),"border-focus":si("primary-50"),"border-focus-strong":si("primary-60"),"border-disabled":si("neutral-20"),"border-selected-disabled":si("neutral-40"),"border-success":si("success-50"),"border-warning":si("warning-50"),"border-error":si("error-50"),"border-error-focus":si("error-50"),"border-error-focus-strong":si("error-70"),"border-error-strong":si("error-70"),"border-info":si("info-50"),bg:si("black"),"bg-strong":si("neutral-10"),"bg-stronger":si("neutral-20"),"bg-strongest":si("neutral-20"),"bg-hover":si("primary-20"),"bg-hover-strong":si("primary-20"),"bg-hover-subtle":si("primary-10"),"bg-hover-neutral":si("neutral-10"),"bg-hover-neutral-strong":si("neutral-20"),"bg-selected":si("primary-20"),"bg-selected-hover":si("primary-20"),"bg-selected-strong":si("primary-20"),"bg-selected-stronger":si("primary-40"),"bg-selected-strongest":si("primary-60"),"bg-selected-strongest-hover":si("primary-70"),"bg-disabled":si("neutral-20"),"bg-selected-disabled":si("neutral-20"),"bg-selected-stronger-disabled":si("neutral-40"),"bg-success":si("success-10"),"bg-success-hover":si("success-20"),"bg-success-strong":si("success-60"),"bg-success-strong-hover":si("success-70"),"bg-warning":si("warning-10"),"bg-warning-hover":si("warning-20"),"bg-warning-strong":si("warning-60"),"bg-warning-strong-hover":si("warning-70"),"bg-info":si("info-10"),"bg-info-hover":si("info-20"),"bg-info-strong":si("info-60"),"bg-info-strong-hover":si("info-70"),"bg-error":si("error-10"),"bg-error-hover":si("error-20"),"bg-error-strong":si("error-60"),"bg-error-strong-hover":si("error-70"),"bg-inverse":si("neutral-90"),"bg-inverse-subtle":si("neutral-80"),"bg-inverse-subtler":si("neutral-60"),"bg-inverse-subtlest":si("neutral-50"),"bg-inverse-hover":si("neutral-70"),"bg-primary":si("primary-60"),"bg-primary-subtle":si("primary-50"),"bg-primary-subtler":si("primary-20"),"bg-primary-subtlest":si("primary-10"),"bg-available":"#185339","bg-primary-hover":si("primary-70"),"bg-primary-subtlest-hover":si("primary-20"),"bg-primary-subtlest-selected":si("primary-20"),"overlay-strong":"rgba(78, 78, 78, 0.80)","overlay-subtle":"rgba(78, 78, 78, 0.50)",hyperlink:si("primary-60"),"hyperlink-hover":si("primary-70"),"hyperlink-visited":si("primary-70"),"hyperlink-inverse":si("primary-inverse"),"focus-ring":si("primary-60"),"focus-ring-inverse":si("black")},gi={collections:{lifesg:ci,bookingsg:ci,rbs:ci,mylegacy:ci,ccube:ci,oneservice:ci,pa:fi,a11yplayground:hi,supportgowhere:ci,imda:ci,spf:ci},defaultValue:"lifesg"},mi={collections:{lifesg:ui,bookingsg:ui,rbs:ui,mylegacy:ui,ccube:ui,oneservice:ui,pa:ui,a11yplayground:pi,supportgowhere:ui,imda:ui,spf:ui},defaultValue:"lifesg"},bi=e=>t=>{var r;const n=t.theme,o="dark"===(null==n?void 0:n.colourMode),i=Yo(o?mi:gi,null==n?void 0:n.colourScheme),a=o?"semanticColourDark":"semanticColour",l=null===(r=null==n?void 0:n.overrides)||void 0===r?void 0:r[a],s=l?Wo(i,e,l):i[e];return"function"==typeof s?s(t):s},vi={text:bi("text"),"text-subtle":bi("text-subtle"),"text-subtler":bi("text-subtler"),"text-subtlest":bi("text-subtlest"),"text-primary":bi("text-primary"),"text-primary-strongest":bi("text-primary-strongest"),"text-hover":bi("text-hover"),"text-selected":bi("text-selected"),"text-selected-hover":bi("text-selected-hover"),"text-disabled":bi("text-disabled"),"text-disabled-subtle":bi("text-disabled-subtle"),"text-disabled-subtlest":bi("text-disabled-subtlest"),"text-selected-disabled":bi("text-selected-disabled"),"text-success":bi("text-success"),"text-warning":bi("text-warning"),"text-error":bi("text-error"),"text-info":bi("text-info"),"text-inverse":bi("text-inverse"),icon:bi("icon"),"icon-subtle":bi("icon-subtle"),"icon-strongest":bi("icon-strongest"),"icon-primary":bi("icon-primary"),"icon-primary-subtle":bi("icon-primary-subtle"),"icon-primary-subtlest":bi("icon-primary-subtlest"),"icon-hover":bi("icon-hover"),"icon-selected":bi("icon-selected"),"icon-selected-hover":bi("icon-selected-hover"),"icon-disabled":bi("icon-disabled"),"icon-disabled-subtle":bi("icon-disabled-subtle"),"icon-selected-disabled":bi("icon-selected-disabled"),"icon-success":bi("icon-success"),"icon-warning":bi("icon-warning"),"icon-error":bi("icon-error"),"icon-error-strong":bi("icon-error-strong"),"icon-info":bi("icon-info"),"icon-inverse":bi("icon-inverse"),"icon-primary-inverse":bi("icon-primary-inverse"),border:bi("border"),"border-strong":bi("border-strong"),"border-stronger":bi("border-stronger"),"border-primary":bi("border-primary"),"border-primary-subtle":bi("border-primary-subtle"),"border-hover":bi("border-hover"),"border-hover-strong":bi("border-hover-strong"),"border-selected":bi("border-selected"),"border-selected-subtle":bi("border-selected-subtle"),"border-selected-subtlest":bi("border-selected-subtlest"),"border-selected-hover":bi("border-selected-hover"),"border-focus":bi("border-focus"),"border-focus-strong":bi("border-focus-strong"),"border-disabled":bi("border-disabled"),"border-selected-disabled":bi("border-selected-disabled"),"border-success":bi("border-success"),"border-warning":bi("border-warning"),"border-error":bi("border-error"),"border-error-focus":bi("border-error-focus"),"border-error-focus-strong":bi("border-error-focus-strong"),"border-error-strong":bi("border-error-strong"),"border-info":bi("border-info"),bg:bi("bg"),"bg-strong":bi("bg-strong"),"bg-stronger":bi("bg-stronger"),"bg-strongest":bi("bg-strongest"),"bg-hover":bi("bg-hover"),"bg-hover-strong":bi("bg-hover-strong"),"bg-hover-subtle":bi("bg-hover-subtle"),"bg-hover-neutral":bi("bg-hover-neutral"),"bg-hover-neutral-strong":bi("bg-hover-neutral-strong"),"bg-selected":bi("bg-selected"),"bg-selected-hover":bi("bg-selected-hover"),"bg-selected-strong":bi("bg-selected-strong"),"bg-selected-stronger":bi("bg-selected-stronger"),"bg-selected-strongest":bi("bg-selected-strongest"),"bg-selected-strongest-hover":bi("bg-selected-strongest-hover"),"bg-disabled":bi("bg-disabled"),"bg-selected-disabled":bi("bg-selected-disabled"),"bg-selected-stronger-disabled":bi("bg-selected-stronger-disabled"),"bg-success":bi("bg-success"),"bg-success-hover":bi("bg-success-hover"),"bg-success-strong":bi("bg-success-strong"),"bg-success-strong-hover":bi("bg-success-strong-hover"),"bg-warning":bi("bg-warning"),"bg-warning-hover":bi("bg-warning-hover"),"bg-warning-strong":bi("bg-warning-strong"),"bg-warning-strong-hover":bi("bg-warning-strong-hover"),"bg-info":bi("bg-info"),"bg-info-hover":bi("bg-info-hover"),"bg-info-strong":bi("bg-info-strong"),"bg-info-strong-hover":bi("bg-info-strong-hover"),"bg-error":bi("bg-error"),"bg-error-hover":bi("bg-error-hover"),"bg-error-strong":bi("bg-error-strong"),"bg-error-strong-hover":bi("bg-error-strong-hover"),"bg-inverse":bi("bg-inverse"),"bg-inverse-subtle":bi("bg-inverse-subtle"),"bg-inverse-subtler":bi("bg-inverse-subtler"),"bg-inverse-subtlest":bi("bg-inverse-subtlest"),"bg-inverse-hover":bi("bg-inverse-hover"),"bg-primary":bi("bg-primary"),"bg-primary-subtle":bi("bg-primary-subtle"),"bg-primary-subtler":bi("bg-primary-subtler"),"bg-primary-subtlest":bi("bg-primary-subtlest"),"bg-available":bi("bg-available"),"bg-primary-hover":bi("bg-primary-hover"),"bg-primary-subtlest-hover":bi("bg-primary-subtlest-hover"),"bg-primary-subtlest-selected":bi("bg-primary-subtlest-selected"),"overlay-strong":bi("overlay-strong"),"overlay-subtle":bi("overlay-subtle"),hyperlink:bi("hyperlink"),"hyperlink-hover":bi("hyperlink-hover"),"hyperlink-visited":bi("hyperlink-visited"),"hyperlink-inverse":bi("hyperlink-inverse"),"focus-ring":bi("focus-ring"),"focus-ring-inverse":bi("focus-ring-inverse")},yi={collections:{default:{solid:e=>t=>{var r,n,o;const{thickness:i,radius:a,colour:l}=e||{},s=null!==(r="function"==typeof i?i(t):i+"px")&&void 0!==r?r:Ko["width-010"](t),d=null!==(n="function"==typeof a?a(t):a+"px")&&void 0!==n?n:0,c=null!==(o="function"==typeof l?l(t):l)&&void 0!==o?o:vi.border(t),u=Ko.solid;return O`
            border: ${s} ${u} ${c};
            border-radius: ${d};
        `},"dashed-default":e=>t=>{var r,n,o;const{thickness:i,radius:a,colour:l}=e||{},s=null!==(r="function"==typeof i?i(t):i)&&void 0!==r?r:Ko["width-010"](t),d=null!==(n="function"==typeof a?a(t):a)&&void 0!==n?n:0,c=null!==(o="function"==typeof l?l(t):l)&&void 0!==o?o:vi.border(t),u=encodeURIComponent(`<svg width='100%' height='100%' xmlns='http://www.w3.org/2000/svg'><rect width='100%' height='100%' fill='none' rx='${d}' ry='${d}' stroke='${c}' stroke-width='${s}' stroke-dasharray='4, 8' stroke-dashoffset='0' stroke-linecap='square'/></svg>`);return O`
            background-image: url("data:image/svg+xml,${u}");
            border-radius: ${d};
        `}}},defaultValue:"default"},xi=e=>1===e.length&&"theme"in e[0],wi=e=>(...t)=>r=>{const n=xi(t)?[]:t,o=xi(t)?t[0]:r,i=o.theme;return(0,Yo(yi,null==i?void 0:i.borderScheme)[e])(...n)(o)},$i={solid:wi("solid"),"dashed-default":wi("dashed-default")},Ci={collections:{default:{"xxs-min":0,"xxs-max":320,"xs-min":321,"xs-max":375,"sm-min":376,"sm-max":480,"md-min":481,"md-max":768,"lg-min":769,"lg-max":1200,"xl-min":1201,"xl-max":1440,"xxl-min":1441,"xxs-column":8,"xs-column":8,"sm-column":8,"md-column":8,"lg-column":12,"xl-column":12,"xxl-column":12,"xxs-gutter":16,"xs-gutter":16,"sm-gutter":16,"md-gutter":16,"lg-gutter":32,"xl-gutter":32,"xxl-gutter":32,"xxs-margin":24,"xs-margin":24,"sm-margin":24,"md-margin":24,"lg-margin":48,"xl-margin":48,"xxl-margin":48}},defaultValue:"default"},Di=e=>t=>{var r;const n=t.theme,o=Yo(Ci,null==n?void 0:n.breakpointScheme);let i;return i=(null===(r=null==n?void 0:n.overrides)||void 0===r?void 0:r.breakpoint)?Wo(o,e,n.overrides.breakpoint):o[e],i},Si={"xxs-min":Di("xxs-min"),"xxs-max":Di("xxs-max"),"xs-min":Di("xs-min"),"xs-max":Di("xs-max"),"sm-min":Di("sm-min"),"sm-max":Di("sm-max"),"md-min":Di("md-min"),"md-max":Di("md-max"),"lg-min":Di("lg-min"),"lg-max":Di("lg-max"),"xl-min":Di("xl-min"),"xl-max":Di("xl-max"),"xxl-min":Di("xxl-min"),"xxs-column":Di("xxs-column"),"xs-column":Di("xs-column"),"sm-column":Di("sm-column"),"md-column":Di("md-column"),"lg-column":Di("lg-column"),"xl-column":Di("xl-column"),"xxl-column":Di("xxl-column"),"xxs-gutter":Di("xxs-gutter"),"xs-gutter":Di("xs-gutter"),"sm-gutter":Di("sm-gutter"),"md-gutter":Di("md-gutter"),"lg-gutter":Di("lg-gutter"),"xl-gutter":Di("xl-gutter"),"xxl-gutter":Di("xxl-gutter"),"xxs-margin":Di("xxs-margin"),"xs-margin":Di("xs-margin"),"sm-margin":Di("sm-margin"),"md-margin":Di("md-margin"),"lg-margin":Di("lg-margin"),"xl-margin":Di("xl-margin"),"xxl-margin":Di("xxl-margin")},ki=e=>("max-width"===e?["xxs","xs","sm","md","lg","xl"]:["xxs","xs","sm","md","lg","xl","xxl"]).reduce(((t,r)=>(t[r]=((e,t)=>{const r=Si["max-width"===e?`${t}-max`:`${t}-min`];return t=>{const n=r(t);return`@media screen and (${e}: ${n}px)`}})(e,r),t)),{}),Ei={MaxWidth:ki("max-width"),MinWidth:ki("min-width")},Fi={collections:{default:{none:0,xs:2,sm:4,md:8,lg:12,full:9999},spf:{none:0,xs:2,sm:8,md:8,lg:12,full:9999}},defaultValue:"default"},Oi=e=>t=>{var r;const n=t.theme,o=Yo(Fi,null==n?void 0:n.radiusScheme);return(null===(r=null==n?void 0:n.overrides)||void 0===r?void 0:r.radius)?`${Wo(o,e,n.overrides.radius)}px`:`${o[e]}px`},Ti={none:Oi("none"),xs:Oi("xs"),sm:Oi("sm"),md:Oi("md"),lg:Oi("lg"),full:Oi("full")},_i={Button:{"button-radius":Ti.md,"button-default-colour-bg":vi["bg-primary"],"button-default-colour-bg-hover":vi["bg-primary-hover"],"button-default-colour-text":vi["text-inverse"],"button-secondary-colour-border":vi["border-primary"],"button-secondary-colour-text":vi["text-primary"],"button-light-colour-text":vi["text-primary"],"button-link-colour-text":vi["text-primary"]},Animation:{"loading-dots-spinner-colour":vi["icon-primary"]},Navbar:{"navbar-full-height":"6rem","navbar-full-logo-height":"2rem","navbar-compressed-height":"4rem","navbar-compressed-logo-height":"1.5rem","navbar-mobile-height":"3.5rem","navbar-mobile-logo-height":"1.5rem","navbar-colour-bg":vi.bg,"navbar-colour-icon":vi.icon,"navbar-link-colour-text":vi.text,"navbar-link-colour-text-hover":vi["text-hover"],"navbar-link-colour-text-selected-hover":vi["text-selected-hover"]},Footer:{"footer-colour-bg":vi["bg-strong"],"footer-colour-text":vi.text,"footer-link-colour-text":vi.text,"footer-link-colour-text-hover":vi["text-hover"],"footer-disclaimer-link-colour-text":vi.text,"footer-disclaimer-link-colour-text-hover":vi["text-subtler"]}},Ii={Button:{"button-radius":Ti.sm,"button-default-colour-bg":vi["bg-primary"],"button-default-colour-bg-hover":vi["bg-primary-hover"],"button-default-colour-text":vi["text-inverse"],"button-secondary-colour-border":vi["border-primary"],"button-secondary-colour-text":vi["text-primary"],"button-light-colour-text":vi["text-primary"],"button-link-colour-text":vi["text-primary"]},Animation:{"loading-dots-spinner-colour":vi["icon-primary"]},Navbar:{"navbar-full-height":"6rem","navbar-full-logo-height":"2rem","navbar-compressed-height":"4rem","navbar-compressed-logo-height":"1.5rem","navbar-mobile-height":"3.5rem","navbar-mobile-logo-height":"1.5rem","navbar-colour-bg":vi.bg,"navbar-colour-icon":vi.icon,"navbar-link-colour-text":vi.text,"navbar-link-colour-text-hover":vi["text-hover"],"navbar-link-colour-text-selected-hover":vi["text-selected-hover"]},Footer:{"footer-colour-bg":vi["bg-strong"],"footer-colour-text":vi.text,"footer-link-colour-text":vi.text,"footer-link-colour-text-hover":vi["text-hover"],"footer-disclaimer-link-colour-text":vi.text,"footer-disclaimer-link-colour-text-hover":vi["text-subtler"]}},Mi={Button:{"button-radius":Ti.sm,"button-default-colour-bg":vi["bg-primary"],"button-default-colour-bg-hover":vi["bg-primary-hover"],"button-default-colour-text":vi["text-inverse"],"button-secondary-colour-border":vi["border-primary"],"button-secondary-colour-text":vi["text-primary"],"button-light-colour-text":vi["text-primary"],"button-link-colour-text":vi["text-primary"]},Animation:{"loading-dots-spinner-colour":di["brand-50"]},Navbar:{"navbar-full-height":"6rem","navbar-full-logo-height":"2rem","navbar-compressed-height":"4rem","navbar-compressed-logo-height":"1.5rem","navbar-mobile-height":"3.5rem","navbar-mobile-logo-height":"1.5rem","navbar-colour-bg":vi.bg,"navbar-colour-icon":vi.icon,"navbar-link-colour-text":vi.text,"navbar-link-colour-text-hover":vi["text-hover"],"navbar-link-colour-text-selected-hover":vi["text-selected-hover"]},Footer:{"footer-colour-bg":vi["bg-strong"],"footer-colour-text":vi.text,"footer-link-colour-text":vi.text,"footer-link-colour-text-hover":vi["text-hover"],"footer-disclaimer-link-colour-text":vi.text,"footer-disclaimer-link-colour-text-hover":vi["text-subtler"]}},Ai={collections:{default:Ii,pa:{Button:{"button-radius":Ti.full,"button-default-colour-bg":vi["bg-primary"],"button-default-colour-bg-hover":vi["bg-primary-hover"],"button-default-colour-text":vi["text-inverse"],"button-secondary-colour-border":vi["border-primary"],"button-secondary-colour-text":vi["text-primary"],"button-light-colour-text":vi["text-primary"],"button-link-colour-text":vi["text-primary"]},Animation:{"loading-dots-spinner-colour":vi["icon-primary"]},Navbar:{"navbar-full-height":"6rem","navbar-full-logo-height":"2rem","navbar-compressed-height":"4rem","navbar-compressed-logo-height":"1.5rem","navbar-mobile-height":"3.5rem","navbar-mobile-logo-height":"1.5rem","navbar-colour-bg":vi.bg,"navbar-colour-icon":vi.icon,"navbar-link-colour-text":vi.text,"navbar-link-colour-text-hover":vi["text-hover"],"navbar-link-colour-text-selected-hover":vi["text-selected-hover"]},Footer:{"footer-colour-bg":vi["bg-strong"],"footer-colour-text":vi.text,"footer-link-colour-text":vi.text,"footer-link-colour-text-hover":vi["text-hover"],"footer-disclaimer-link-colour-text":vi.text,"footer-disclaimer-link-colour-text-hover":vi["text-subtler"]}},a11yplayground:_i,lifesg:Mi,spf:{Button:{"button-radius":Ti.md,"button-default-colour-bg":vi["bg-primary"],"button-default-colour-bg-hover":vi["bg-primary-hover"],"button-default-colour-text":vi["text-inverse"],"button-secondary-colour-border":vi["border-primary"],"button-secondary-colour-text":vi["text-primary"],"button-light-colour-text":vi["text-primary"],"button-link-colour-text":vi["text-primary"]},Animation:{"loading-dots-spinner-colour":vi["icon-primary"]},Navbar:{"navbar-full-height":"6rem","navbar-full-logo-height":"3rem","navbar-compressed-height":"5rem","navbar-compressed-logo-height":"2rem","navbar-mobile-height":"4rem","navbar-mobile-logo-height":"2rem","navbar-colour-bg":vi.bg,"navbar-colour-icon":vi.icon,"navbar-link-colour-text":vi["text-primary-strongest"],"navbar-link-colour-text-hover":vi["text-subtler"],"navbar-link-colour-text-selected-hover":vi["text-subtler"]},Footer:{"footer-colour-bg":vi["bg-inverse"],"footer-colour-text":vi["text-inverse"],"footer-link-colour-text":vi["text-inverse"],"footer-link-colour-text-hover":vi["text-inverse"],"footer-disclaimer-link-colour-text":vi["text-inverse"],"footer-disclaimer-link-colour-text-hover":vi["text-inverse"]}}},defaultValue:"default"},Bi=(e,t)=>r=>{var n,o;const i=r.theme,a=Yo(Ai,null==i?void 0:i.componentScheme);return ji((null===(o=null===(n=null==i?void 0:i.componentOverrides)||void 0===n?void 0:n[e])||void 0===o?void 0:o[t])||a[e][t],r)},ji=(e,t)=>{switch(typeof e){case"function":return e(t);case"number":return e+"px";case"string":return e}},zi=Bi("Button","button-radius"),Ri=Bi("Button","button-default-colour-bg"),Li=Bi("Button","button-default-colour-bg-hover"),Pi=Bi("Button","button-default-colour-text"),Ni=Bi("Button","button-secondary-colour-border"),Hi=Bi("Button","button-secondary-colour-text"),Wi=Bi("Button","button-light-colour-text"),Yi=Bi("Button","button-link-colour-text"),Vi={collections:{default:{"heading-size-xxl":"3rem","heading-size-xl":"2.5rem","heading-size-lg":"2rem","heading-size-md":"1.625rem","heading-size-sm":"1.375rem","heading-size-xs":"1.125rem","heading-lh-xxl":"3.5rem","heading-lh-xl":"3rem","heading-lh-lg":"2.5rem","heading-lh-md":"2.25rem","heading-lh-sm":"1.75rem","heading-lh-xs":"1.625rem","heading-ls-xxl":"-0.035rem","heading-ls-xl":"-0.02rem","heading-ls-lg":"-0.02rem","heading-ls-md":"0rem","heading-ls-sm":"0rem","heading-ls-xs":"0rem","weight-light":"300","weight-regular":"400","weight-semibold":"600","weight-bold":"700","font-family":"Open Sans","body-size-baseline":"1.125rem","body-size-md":"1rem","body-size-sm":"0.875rem","body-size-xs":"0.75rem","body-lh-baseline":"1.625rem","body-lh-md":"1.5rem","body-lh-sm":"1.625rem","body-lh-xs":"1.25rem","body-ls-baseline":"0rem","body-ls-md":"0.009rem","body-ls-sm":"0.008rem","body-ls-xs":"0.008rem","form-label-size":"1rem","form-description-size":"0.875rem","form-label-lh":"1.5rem","form-description-lh":"1.625rem","form-label-ls":"0.009rem","form-description-ls":"0.008rem"},bookingsg:{"heading-size-xxl":"3rem","heading-size-xl":"2.5rem","heading-size-lg":"2rem","heading-size-md":"1.625rem","heading-size-sm":"1.375rem","heading-size-xs":"1.125rem","heading-lh-xxl":"3.5rem","heading-lh-xl":"3rem","heading-lh-lg":"2.5rem","heading-lh-md":"2.25rem","heading-lh-sm":"1.75rem","heading-lh-xs":"1.75rem","heading-ls-xxl":"-0.035rem","heading-ls-xl":"-0.02rem","heading-ls-lg":"-0.02rem","heading-ls-md":"0rem","heading-ls-sm":"0rem","heading-ls-xs":"0rem","weight-light":"300","weight-regular":"400","weight-semibold":"600","weight-bold":"700","font-family":"Plus Jakarta Sans","body-size-baseline":"1.125rem","body-size-md":"1rem","body-size-sm":"0.875rem","body-size-xs":"0.75rem","body-lh-baseline":"1.75rem","body-lh-md":"1.5rem","body-lh-sm":"1.6rem","body-lh-xs":"1.2rem","body-ls-baseline":"0rem","body-ls-md":"0.009rem","body-ls-sm":"0.008rem","body-ls-xs":"0.008rem","form-label-size":"1rem","form-description-size":"0.875rem","form-label-lh":"1.5rem","form-description-lh":"1.625rem","form-label-ls":"0.009rem","form-description-ls":"0.008rem"},mylegacy:{"heading-size-xxl":"3rem","heading-size-xl":"2.5rem","heading-size-lg":"2rem","heading-size-md":"1.625rem","heading-size-sm":"1.375rem","heading-size-xs":"1.125rem","heading-lh-xxl":"3.5rem","heading-lh-xl":"3rem","heading-lh-lg":"2.5rem","heading-lh-md":"2.25rem","heading-lh-sm":"1.75rem","heading-lh-xs":"1.625rem","heading-ls-xxl":"-0.035rem","heading-ls-xl":"-0.02rem","heading-ls-lg":"-0.02rem","heading-ls-md":"0rem","heading-ls-sm":"0rem","heading-ls-xs":"0rem","weight-light":"300","weight-regular":"400","weight-semibold":"600","weight-bold":"700","font-family":"Open Sans","body-size-baseline":"1.125rem","body-size-md":"1rem","body-size-sm":"0.875rem","body-size-xs":"0.75rem","body-lh-baseline":"1.625rem","body-lh-md":"1.5rem","body-lh-sm":"1.625rem","body-lh-xs":"1.25rem","body-ls-baseline":"0rem","body-ls-md":"0.009rem","body-ls-sm":"0.008rem","body-ls-xs":"0.008rem","form-label-size":"1.125rem","form-description-size":"1rem","form-label-lh":"1.5rem","form-description-lh":"1.625rem","form-label-ls":"0rem","form-description-ls":"0.009rem"},pa:{"heading-size-xxl":"2.5rem","heading-size-xl":"2rem","heading-size-lg":"1.75rem","heading-size-md":"1.5rem","heading-size-sm":"1.25rem","heading-size-xs":"1rem","heading-lh-xxl":"3rem","heading-lh-xl":"2.5rem","heading-lh-lg":"2.25rem","heading-lh-md":"2rem","heading-lh-sm":"2rem","heading-lh-xs":"1.75rem","heading-ls-xxl":"-0.032rem","heading-ls-xl":"-0.032rem","heading-ls-lg":"0rem","heading-ls-md":"0rem","heading-ls-sm":"0rem","heading-ls-xs":"0rem","weight-light":"300","weight-regular":"400","weight-semibold":"600","weight-bold":"700","font-family":"Lato","body-size-baseline":"1rem","body-size-md":"0.875rem","body-size-sm":"0.75rem","body-size-xs":"0.625rem","body-lh-baseline":"1.75rem","body-lh-md":"1.5rem","body-lh-sm":"1.25rem","body-lh-xs":"1.25rem","body-ls-baseline":"0rem","body-ls-md":"0.014rem","body-ls-sm":"0.012rem","body-ls-xs":"0.012rem","form-label-size":"1rem","form-description-size":"0.875rem","form-label-lh":"1.5rem","form-description-lh":"1.6rem","form-label-ls":"0.014rem","form-description-ls":"0.012rem"},a11yplayground:{"heading-size-xxl":"3rem","heading-size-xl":"2.5rem","heading-size-lg":"2rem","heading-size-md":"1.625rem","heading-size-sm":"1.375rem","heading-size-xs":"1.125rem","heading-lh-xxl":"3.5rem","heading-lh-xl":"3rem","heading-lh-lg":"2.5rem","heading-lh-md":"2.25rem","heading-lh-sm":"1.75rem","heading-lh-xs":"1.625rem","heading-ls-xxl":"-0.035rem","heading-ls-xl":"-0.02rem","heading-ls-lg":"-0.02rem","heading-ls-md":"0rem","heading-ls-sm":"0rem","heading-ls-xs":"0rem","weight-light":"300","weight-regular":"400","weight-semibold":"600","weight-bold":"700","font-family":"Atkinson Hyperlegible Next","body-size-baseline":"1.125rem","body-size-md":"1rem","body-size-sm":"0.875rem","body-size-xs":"0.75rem","body-lh-baseline":"1.625rem","body-lh-md":"1.5rem","body-lh-sm":"1.625rem","body-lh-xs":"1.25rem","body-ls-baseline":"0rem","body-ls-md":"0.009rem","body-ls-sm":"0.008rem","body-ls-xs":"0.008rem","form-label-size":"1.125rem","form-description-size":"1rem","form-label-lh":"1.5rem","form-description-lh":"1.625rem","form-label-ls":"0rem","form-description-ls":"0.009rem"},supportgowhere:{"heading-size-xxl":"3rem","heading-size-xl":"2.5rem","heading-size-lg":"2rem","heading-size-md":"1.625rem","heading-size-sm":"1.375rem","heading-size-xs":"1.125rem","heading-lh-xxl":"3.5rem","heading-lh-xl":"3rem","heading-lh-lg":"2.5rem","heading-lh-md":"2.25rem","heading-lh-sm":"1.75rem","heading-lh-xs":"1.625rem","heading-ls-xxl":"-0.035rem","heading-ls-xl":"-0.02rem","heading-ls-lg":"-0.02rem","heading-ls-md":"0rem","heading-ls-sm":"0rem","heading-ls-xs":"0rem","weight-light":"300","weight-regular":"400","weight-semibold":"600","weight-bold":"700","font-family":"Libre Franklin","body-size-baseline":"1.125rem","body-size-md":"1rem","body-size-sm":"0.875rem","body-size-xs":"0.75rem","body-lh-baseline":"1.625rem","body-lh-md":"1.5rem","body-lh-sm":"1.625rem","body-lh-xs":"1.25rem","body-ls-baseline":"0rem","body-ls-md":"0.009rem","body-ls-sm":"0.008rem","body-ls-xs":"0.008rem","form-label-size":"1rem","form-description-size":"0.875rem","form-label-lh":"1.5rem","form-description-lh":"1.625rem","form-label-ls":"0.009rem","form-description-ls":"0.008rem"},sgwdigitallobby:{"heading-size-xxl":"3.75rem","heading-size-xl":"3rem","heading-size-lg":"2.5rem","heading-size-md":"2rem","heading-size-sm":"1.625rem","heading-size-xs":"1.375rem","heading-lh-xxl":"4.5rem","heading-lh-xl":"3.5rem","heading-lh-lg":"3rem","heading-lh-md":"2.5rem","heading-lh-sm":"2.25rem","heading-lh-xs":"1.75rem","heading-ls-xxl":"-0.035rem","heading-ls-xl":"-0.035em","heading-ls-lg":"-0.02rem","heading-ls-md":"-0.02rem","heading-ls-sm":"0rem","heading-ls-xs":"0rem","weight-light":"300","weight-regular":"400","weight-semibold":"600","weight-bold":"700","font-family":"Libre Franklin","body-size-baseline":"1.375rem","body-size-md":"1.2rem","body-size-sm":"1.125rem","body-size-xs":"1rem","body-lh-baseline":"1.75rem","body-lh-md":"1.625rem","body-lh-sm":"1.625rem","body-lh-xs":"1.5rem","body-ls-baseline":"0rem","body-ls-md":"0rem","body-ls-sm":"0rem","body-ls-xs":"0.009rem","form-label-size":"1.25rem","form-description-size":"1.125rem","form-label-lh":"1.625rem","form-description-lh":"1.625rem","form-label-ls":"0rem","form-description-ls":"0rem"},imda:{"heading-size-xxl":"3rem","heading-size-xl":"2.5rem","heading-size-lg":"2rem","heading-size-md":"1.625rem","heading-size-sm":"1.375rem","heading-size-xs":"1.125rem","heading-lh-xxl":"3.5rem","heading-lh-xl":"3rem","heading-lh-lg":"2.5rem","heading-lh-md":"2.25rem","heading-lh-sm":"1.75rem","heading-lh-xs":"1.625rem","heading-ls-xxl":"-0.035rem","heading-ls-xl":"-0.02rem","heading-ls-lg":"-0.02rem","heading-ls-md":"0rem","heading-ls-sm":"0rem","heading-ls-xs":"0rem","weight-light":"300","weight-regular":"400","weight-semibold":"600","weight-bold":"700","font-family":"Montserrat","body-size-baseline":"1.125rem","body-size-md":"1rem","body-size-sm":"0.875rem","body-size-xs":"0.75rem","body-lh-baseline":"1.625rem","body-lh-md":"1.5rem","body-lh-sm":"1.625rem","body-lh-xs":"1.25rem","body-ls-baseline":"0rem","body-ls-md":"0.009rem","body-ls-sm":"0.008rem","body-ls-xs":"0.008rem","form-label-size":"1rem","form-description-size":"0.875rem","form-label-lh":"1.5rem","form-description-lh":"1.625rem","form-label-ls":"0.009rem","form-description-ls":"0.008rem"},spf:{"heading-size-xxl":"3.75rem","heading-size-xl":"3rem","heading-size-lg":"2.5rem","heading-size-md":"2rem","heading-size-sm":"1.75rem","heading-size-xs":"1.5rem","heading-lh-xxl":"4.5rem","heading-lh-xl":"3.5rem","heading-lh-lg":"3rem","heading-lh-md":"2.25rem","heading-lh-sm":"2rem","heading-lh-xs":"1.75rem","heading-ls-xxl":"-0.035rem","heading-ls-xl":"-0.02rem","heading-ls-lg":"-0.02rem","heading-ls-md":"0rem","heading-ls-sm":"0rem","heading-ls-xs":"0rem","weight-light":"300","weight-regular":"400","weight-semibold":"600","weight-bold":"700","font-family":"Public Sans","body-size-baseline":"1.2rem","body-size-md":"1.125rem","body-size-sm":"1rem","body-size-xs":"0.875rem","body-lh-baseline":"1.5rem","body-lh-md":"1.5rem","body-lh-sm":"1.5rem","body-lh-xs":"1.125rem","body-ls-baseline":"0rem","body-ls-md":"0.009rem","body-ls-sm":"0.008rem","body-ls-xs":"0.008rem","form-label-size":"1.125rem","form-description-size":"1rem","form-label-lh":"1.5rem","form-description-lh":"1.625rem","form-label-ls":"0.009rem","form-description-ls":"0.008rem"},oneservice:{"heading-size-xxl":"2.5rem","heading-size-xl":"2rem","heading-size-lg":"1.75rem","heading-size-md":"1.375rem","heading-size-sm":"1.125rem","heading-size-xs":"1rem","heading-lh-xxl":"3.5rem","heading-lh-xl":"3rem","heading-lh-lg":"2.625rem","heading-lh-md":"2rem","heading-lh-sm":"1.625rem","heading-lh-xs":"1.5rem","heading-ls-xxl":"0rem","heading-ls-xl":"0rem","heading-ls-lg":"0rem","heading-ls-md":"0rem","heading-ls-sm":"0rem","heading-ls-xs":"0rem","weight-light":"300","weight-regular":"400","weight-semibold":"600","weight-bold":"700","font-family":"Open Sans","body-size-baseline":"1rem","body-size-md":"0.875rem","body-size-sm":"0.75rem","body-size-xs":"0.75rem","body-lh-baseline":"1.5rem","body-lh-md":"1.313rem","body-lh-sm":"1.125rem","body-lh-xs":"1.125rem","body-ls-baseline":"0rem","body-ls-md":"0rem","body-ls-sm":"0rem","body-ls-xs":"0rem","form-label-size":"0.875rem","form-description-size":"0.875rem","form-label-lh":"1.313rem","form-description-lh":"1.313rem","form-label-ls":"0rem","form-description-ls":"0rem"}},defaultValue:"default"},Ui=e=>t=>{var r;const n=t.theme,o=Yo(Vi,null==n?void 0:n.fontScheme);return(null===(r=null==n?void 0:n.overrides)||void 0===r?void 0:r.fontSpec)?Wo(o,e,n.overrides.fontSpec):o[e]},Ki={"heading-size-xxl":Ui("heading-size-xxl"),"heading-size-xl":Ui("heading-size-xl"),"heading-size-lg":Ui("heading-size-lg"),"heading-size-md":Ui("heading-size-md"),"heading-size-sm":Ui("heading-size-sm"),"heading-size-xs":Ui("heading-size-xs"),"heading-lh-xxl":Ui("heading-lh-xxl"),"heading-lh-xl":Ui("heading-lh-xl"),"heading-lh-lg":Ui("heading-lh-lg"),"heading-lh-md":Ui("heading-lh-md"),"heading-lh-sm":Ui("heading-lh-sm"),"heading-lh-xs":Ui("heading-lh-xs"),"heading-ls-xxl":Ui("heading-ls-xxl"),"heading-ls-xl":Ui("heading-ls-xl"),"heading-ls-lg":Ui("heading-ls-lg"),"heading-ls-md":Ui("heading-ls-md"),"heading-ls-sm":Ui("heading-ls-sm"),"heading-ls-xs":Ui("heading-ls-xs"),"weight-light":Ui("weight-light"),"weight-regular":Ui("weight-regular"),"weight-semibold":Ui("weight-semibold"),"weight-bold":Ui("weight-bold"),"font-family":Ui("font-family"),"body-size-baseline":Ui("body-size-baseline"),"body-size-md":Ui("body-size-md"),"body-size-sm":Ui("body-size-sm"),"body-size-xs":Ui("body-size-xs"),"body-lh-baseline":Ui("body-lh-baseline"),"body-lh-md":Ui("body-lh-md"),"body-lh-sm":Ui("body-lh-sm"),"body-lh-xs":Ui("body-lh-xs"),"body-ls-baseline":Ui("body-ls-baseline"),"body-ls-md":Ui("body-ls-md"),"body-ls-sm":Ui("body-ls-sm"),"body-ls-xs":Ui("body-ls-xs"),"form-label-size":Ui("form-label-size"),"form-description-size":Ui("form-description-size"),"form-label-lh":Ui("form-label-lh"),"form-description-lh":Ui("form-description-lh"),"form-label-ls":Ui("form-label-ls"),"form-description-ls":Ui("form-description-ls")},qi=(e,t,r,n,o)=>{const{disableLigatures:i}=o||{};return O`
        font-family: ${Ui("font-family")};
        font-size: ${Ui(e)};
        font-weight: ${Ui(t)};
        line-height: ${Ui(r)};
        letter-spacing: ${Ui(n)};

        font-variant: ${i?"no-common-ligatures":"normal"};
    `},Zi=(e={})=>({"heading-xxl-light":qi("heading-size-xxl","weight-light","heading-lh-xxl","heading-ls-xxl",e),"heading-xxl-regular":qi("heading-size-xxl","weight-regular","heading-lh-xxl","heading-ls-xxl",e),"heading-xxl-semibold":qi("heading-size-xxl","weight-semibold","heading-lh-xxl","heading-ls-xxl",e),"heading-xxl-bold":qi("heading-size-xxl","weight-bold","heading-lh-xxl","heading-ls-xxl",e),"heading-xl-light":qi("heading-size-xl","weight-light","heading-lh-xl","heading-ls-xl",e),"heading-xl-regular":qi("heading-size-xl","weight-regular","heading-lh-xl","heading-ls-xl",e),"heading-xl-semibold":qi("heading-size-xl","weight-semibold","heading-lh-xl","heading-ls-xl",e),"heading-xl-bold":qi("heading-size-xl","weight-bold","heading-lh-xl","heading-ls-xl",e),"heading-lg-light":qi("heading-size-lg","weight-light","heading-lh-lg","heading-ls-lg",e),"heading-lg-regular":qi("heading-size-lg","weight-regular","heading-lh-lg","heading-ls-lg",e),"heading-lg-semibold":qi("heading-size-lg","weight-semibold","heading-lh-lg","heading-ls-lg",e),"heading-lg-bold":qi("heading-size-lg","weight-bold","heading-lh-lg","heading-ls-lg",e),"heading-md-light":qi("heading-size-md","weight-light","heading-lh-md","heading-ls-md",e),"heading-md-regular":qi("heading-size-md","weight-regular","heading-lh-md","heading-ls-md",e),"heading-md-semibold":qi("heading-size-md","weight-semibold","heading-lh-md","heading-ls-md",e),"heading-md-bold":qi("heading-size-md","weight-bold","heading-lh-md","heading-ls-md",e),"heading-sm-light":qi("heading-size-sm","weight-light","heading-lh-sm","heading-ls-sm",e),"heading-sm-regular":qi("heading-size-sm","weight-regular","heading-lh-sm","heading-ls-sm",e),"heading-sm-semibold":qi("heading-size-sm","weight-semibold","heading-lh-sm","heading-ls-sm",e),"heading-sm-bold":qi("heading-size-sm","weight-bold","heading-lh-sm","heading-ls-sm",e),"heading-xs-light":qi("heading-size-xs","weight-light","heading-lh-xs","heading-ls-xs",e),"heading-xs-regular":qi("heading-size-xs","weight-regular","heading-lh-xs","heading-ls-xs",e),"heading-xs-semibold":qi("heading-size-xs","weight-semibold","heading-lh-xs","heading-ls-xs",e),"heading-xs-bold":qi("heading-size-xs","weight-bold","heading-lh-xs","heading-ls-xs",e),"body-baseline-light":qi("body-size-baseline","weight-light","body-lh-baseline","body-ls-baseline",e),"body-baseline-regular":qi("body-size-baseline","weight-regular","body-lh-baseline","body-ls-baseline",e),"body-baseline-semibold":qi("body-size-baseline","weight-semibold","body-lh-baseline","body-ls-baseline",e),"body-baseline-bold":qi("body-size-baseline","weight-bold","body-lh-baseline","body-ls-baseline",e),"body-md-light":qi("body-size-md","weight-light","body-lh-md","body-ls-md",e),"body-md-regular":qi("body-size-md","weight-regular","body-lh-md","body-ls-md",e),"body-md-semibold":qi("body-size-md","weight-semibold","body-lh-md","body-ls-md",e),"body-md-bold":qi("body-size-md","weight-bold","body-lh-md","body-ls-md",e),"body-sm-light":qi("body-size-sm","weight-light","body-lh-sm","body-ls-sm",e),"body-sm-regular":qi("body-size-sm","weight-regular","body-lh-sm","body-ls-sm",e),"body-sm-semibold":qi("body-size-sm","weight-semibold","body-lh-sm","body-ls-sm",e),"body-sm-bold":qi("body-size-sm","weight-bold","body-lh-sm","body-ls-sm",e),"body-xs-light":qi("body-size-xs","weight-light","body-lh-xs","body-ls-xs",e),"body-xs-regular":qi("body-size-xs","weight-regular","body-lh-xs","body-ls-xs",e),"body-xs-semibold":qi("body-size-xs","weight-semibold","body-lh-xs","body-ls-xs",e),"body-xs-bold":qi("body-size-xs","weight-bold","body-lh-xs","body-ls-xs",e),"form-label":qi("form-label-size","weight-semibold","form-label-lh","form-label-ls",e),"form-description":qi("form-description-size","weight-regular","form-description-lh","form-description-ls",e)}),Gi=Zi({disableLigatures:!0}),Xi=Zi(),Ji=Zi({disableLigatures:!0}),Qi=Zi({disableLigatures:!0}),ea=Zi({disableLigatures:!0}),ta={collections:{default:Xi,bookingsg:Gi,mylegacy:Xi,pa:Ji,a11yplayground:Qi,supportgowhere:ea,sgwdigitallobby:ea,imda:Zi({disableLigatures:!0}),spf:Zi({disableLigatures:!0}),oneservice:Zi()},defaultValue:"default"},ra=e=>t=>{var r;const n=t.theme,o=Yo(ta,null==n?void 0:n.fontScheme),i=(null===(r=null==n?void 0:n.overrides)||void 0===r?void 0:r.font)?Wo(o,e,n.overrides.font):o[e];return"function"==typeof i?i(t):i},na={"heading-xxl-light":ra("heading-xxl-light"),"heading-xxl-regular":ra("heading-xxl-regular"),"heading-xxl-semibold":ra("heading-xxl-semibold"),"heading-xxl-bold":ra("heading-xxl-bold"),"heading-xl-light":ra("heading-xl-light"),"heading-xl-regular":ra("heading-xl-regular"),"heading-xl-semibold":ra("heading-xl-semibold"),"heading-xl-bold":ra("heading-xl-bold"),"heading-lg-light":ra("heading-lg-light"),"heading-lg-regular":ra("heading-lg-regular"),"heading-lg-semibold":ra("heading-lg-semibold"),"heading-lg-bold":ra("heading-lg-bold"),"heading-md-light":ra("heading-md-light"),"heading-md-regular":ra("heading-md-regular"),"heading-md-semibold":ra("heading-md-semibold"),"heading-md-bold":ra("heading-md-bold"),"heading-sm-light":ra("heading-sm-light"),"heading-sm-regular":ra("heading-sm-regular"),"heading-sm-semibold":ra("heading-sm-semibold"),"heading-sm-bold":ra("heading-sm-bold"),"heading-xs-light":ra("heading-xs-light"),"heading-xs-regular":ra("heading-xs-regular"),"heading-xs-semibold":ra("heading-xs-semibold"),"heading-xs-bold":ra("heading-xs-bold"),"body-baseline-light":ra("body-baseline-light"),"body-baseline-regular":ra("body-baseline-regular"),"body-baseline-semibold":ra("body-baseline-semibold"),"body-baseline-bold":ra("body-baseline-bold"),"body-md-light":ra("body-md-light"),"body-md-regular":ra("body-md-regular"),"body-md-semibold":ra("body-md-semibold"),"body-md-bold":ra("body-md-bold"),"body-sm-light":ra("body-sm-light"),"body-sm-regular":ra("body-sm-regular"),"body-sm-semibold":ra("body-sm-semibold"),"body-sm-bold":ra("body-sm-bold"),"body-xs-light":ra("body-xs-light"),"body-xs-regular":ra("body-xs-regular"),"body-xs-semibold":ra("body-xs-semibold"),"body-xs-bold":ra("body-xs-bold"),"form-label":ra("form-label"),"form-description":ra("form-description")},oa={collections:{default:{"duration-150":"150ms","duration-250":"250ms","duration-350":"350ms","duration-500":"500ms","duration-800":"800ms","duration-1000":"1000ms","ease-default":"cubic-bezier(0.45, 0.05, 0.55, 0.95)","ease-standard":"cubic-bezier(0.86, 0, 0.07, 1)","ease-entrance":"cubic-bezier(0.18, 0.13, 0, 1)","ease-exit":"cubic-bezier(1, 0, 0.8, 0.85)"}},defaultValue:"default"},ia=e=>t=>{var r;const n=t.theme,o=Yo(oa,null==n?void 0:n.motionScheme);return(null===(r=null==n?void 0:n.overrides)||void 0===r?void 0:r.motion)?Wo(o,e,n.overrides.motion):o[e]},aa={"duration-150":ia("duration-150"),"duration-250":ia("duration-250"),"duration-350":ia("duration-350"),"duration-500":ia("duration-500"),"duration-800":ia("duration-800"),"duration-1000":ia("duration-1000"),"ease-default":ia("ease-default"),"ease-standard":ia("ease-standard"),"ease-entrance":ia("ease-entrance"),"ease-exit":ia("ease-exit")},la=(e,t,r)=>n=>{const o=bi(t)(n)||si(t)(n);return`${e} rgba(from ${o} r g b / ${100*r}%)`},sa={collections:{default:{"xs-subtle":la("0 0 4px 1px","neutral-50",.24),"xs-strong":la("0 0 4px 1px","neutral-50",.5),"xs-focus-strong":la("0 0 4px 1px","border-focus",.5),"xs-error-strong":la("0 0 4px 1px","border-error",.5),"sm-subtle":la("0 2px 4px 0","neutral-50",.24),"sm-strong":la("0 2px 4px 0","neutral-50",.5),"md-subtle":la("0 2px 8px 0","neutral-50",.24),"md-strong":la("0 2px 8px 0","neutral-50",.5),"lg-subtle":la("0 2px 12px 1px","neutral-50",.24),"lg-strong":la("0 2px 12px 1px","neutral-50",.5)}},defaultValue:"default"},da=e=>t=>{var r;const n=t.theme,o=Yo(sa,null==n?void 0:n.shadowScheme),i=(null===(r=null==n?void 0:n.overrides)||void 0===r?void 0:r.shadow)?Wo(o,e,n.overrides.shadow):o[e];return"function"==typeof i?i(t):i},ca={"xs-subtle":da("xs-subtle"),"xs-strong":da("xs-strong"),"xs-focus-strong":da("xs-focus-strong"),"xs-error-strong":da("xs-error-strong"),"sm-subtle":da("sm-subtle"),"sm-strong":da("sm-strong"),"md-subtle":da("md-subtle"),"md-strong":da("md-strong"),"lg-subtle":da("lg-subtle"),"lg-strong":da("lg-strong")},ua={collections:{default:{"spacing-0":0,"spacing-4":4,"spacing-8":8,"spacing-12":12,"spacing-16":16,"spacing-20":20,"spacing-24":24,"spacing-32":32,"spacing-40":40,"spacing-48":48,"spacing-64":64,"spacing-72":72,"layout-xs":8,"layout-sm":16,"layout-md":24,"layout-lg":32,"layout-xl":48,"layout-xxl":64,"layout-xxxl":128}},defaultValue:"default"},fa=e=>t=>{var r;const n=t.theme,o=Yo(ua,null==n?void 0:n.spacingScheme);return(null===(r=null==n?void 0:n.overrides)||void 0===r?void 0:r.spacing)?`${Wo(o,e,n.overrides.spacing)}px`:`${o[e]}px`},ha={"spacing-0":fa("spacing-0"),"spacing-4":fa("spacing-4"),"spacing-8":fa("spacing-8"),"spacing-12":fa("spacing-12"),"spacing-16":fa("spacing-16"),"spacing-20":fa("spacing-20"),"spacing-24":fa("spacing-24"),"spacing-32":fa("spacing-32"),"spacing-40":fa("spacing-40"),"spacing-48":fa("spacing-48"),"spacing-64":fa("spacing-64"),"spacing-72":fa("spacing-72"),"layout-xs":fa("layout-xs"),"layout-sm":fa("layout-sm"),"layout-md":fa("layout-md"),"layout-lg":fa("layout-lg"),"layout-xl":fa("layout-xl"),"layout-xxl":fa("layout-xxl"),"layout-xxxl":fa("layout-xxxl")},pa=(e,t)=>Object.assign(Object.assign({},e),{colourMode:t}),ga=Object.assign(Object.assign({},vi),{Primitive:di}),ma=Object.assign(Object.assign({},na),{Spec:Ki}),ba=aa,va=Object.assign(Object.assign({},Ko),{Util:$i}),ya=ha,xa=Ti,wa=ca,$a=Si,Ca=Ei,Da={colourScheme:"lifesg",fontScheme:"default",motionScheme:"default",borderScheme:"default",spacingScheme:"default",radiusScheme:"default",shadowScheme:"default",breakpointScheme:"default",resourceScheme:"lifesg",componentScheme:"lifesg",_v2:{colorScheme:"base",textStyleScheme:"base",designTokenScheme:"base",resourceScheme:"base"}},Sa={colourScheme:"bookingsg",fontScheme:"bookingsg",motionScheme:"default",borderScheme:"default",spacingScheme:"default",radiusScheme:"default",shadowScheme:"default",breakpointScheme:"default",resourceScheme:"bookingsg",_v2:{colorScheme:"bookingsg",textStyleScheme:"base",designTokenScheme:"base",resourceScheme:"bookingsg"}},ka={colourScheme:"ccube",fontScheme:"default",motionScheme:"default",borderScheme:"default",spacingScheme:"default",radiusScheme:"default",shadowScheme:"default",breakpointScheme:"default",resourceScheme:"ccube",_v2:{colorScheme:"ccube",textStyleScheme:"base",designTokenScheme:"base",resourceScheme:"ccube"}},Ea={colourScheme:"mylegacy",fontScheme:"mylegacy",motionScheme:"default",borderScheme:"default",spacingScheme:"default",radiusScheme:"default",shadowScheme:"default",breakpointScheme:"default",resourceScheme:"mylegacy",_v2:{colorScheme:"mylegacy",textStyleScheme:"base",designTokenScheme:"base",resourceScheme:"mylegacy"}},Fa={colourScheme:"rbs",fontScheme:"default",motionScheme:"default",borderScheme:"default",spacingScheme:"default",radiusScheme:"default",shadowScheme:"default",breakpointScheme:"default",resourceScheme:"rbs",_v2:{colorScheme:"rbs",textStyleScheme:"base",designTokenScheme:"rbs",resourceScheme:"rbs"}},Oa={colourScheme:"oneservice",fontScheme:"oneservice",motionScheme:"default",borderScheme:"default",spacingScheme:"default",radiusScheme:"default",shadowScheme:"default",breakpointScheme:"default",resourceScheme:"oneservice"},Ta={colourScheme:"pa",fontScheme:"pa",motionScheme:"default",borderScheme:"default",spacingScheme:"default",radiusScheme:"default",shadowScheme:"default",breakpointScheme:"default",resourceScheme:"pa",componentScheme:"pa"},_a={colourScheme:"a11yplayground",fontScheme:"a11yplayground",motionScheme:"default",borderScheme:"default",spacingScheme:"default",radiusScheme:"default",shadowScheme:"default",breakpointScheme:"default",resourceScheme:"a11yplayground",componentScheme:"a11yplayground"},Ia={colourScheme:"supportgowhere",fontScheme:"supportgowhere",motionScheme:"default",borderScheme:"default",spacingScheme:"default",radiusScheme:"default",shadowScheme:"default",breakpointScheme:"default",resourceScheme:"supportgowhere",componentScheme:"default"},Ma={colourScheme:"supportgowhere",fontScheme:"sgwdigitallobby",motionScheme:"default",borderScheme:"default",spacingScheme:"default",radiusScheme:"default",shadowScheme:"default",breakpointScheme:"default",resourceScheme:"supportgowhere",componentScheme:"default"},Aa={colourScheme:"imda",fontScheme:"imda",motionScheme:"default",borderScheme:"default",spacingScheme:"default",radiusScheme:"default",shadowScheme:"default",breakpointScheme:"default",resourceScheme:"imda",componentScheme:"default"},Ba={colourScheme:"spf",fontScheme:"spf",motionScheme:"default",borderScheme:"default",spacingScheme:"default",radiusScheme:"spf",shadowScheme:"default",breakpointScheme:"default",resourceScheme:"spf",componentScheme:"spf"};Object.assign(Object.assign({},Da),{light:pa(Da,"light"),dark:pa(Da,"dark")}),Object.assign(Object.assign({},Sa),{light:pa(Sa,"light"),dark:pa(Sa,"dark")}),Object.assign(Object.assign({},ka),{light:pa(ka,"light"),dark:pa(ka,"dark")}),Object.assign(Object.assign({},Ea),{light:pa(Ea,"light"),dark:pa(Ea,"dark")}),Object.assign(Object.assign({},Fa),{light:pa(Fa,"light"),dark:pa(Fa,"dark")}),Object.assign(Object.assign({},Oa),{light:pa(Oa,"light"),dark:pa(Oa,"dark")}),Object.assign(Object.assign({},Ta),{light:pa(Ta,"light"),dark:pa(Ta,"dark")}),Object.assign(Object.assign({},_a),{light:pa(_a,"light"),dark:pa(_a,"dark")}),Object.assign(Object.assign({},Ia),{light:pa(Ia,"light"),dark:pa(Ia,"dark")}),Object.assign(Object.assign({},Ma),{light:pa(Ma,"light"),dark:pa(Ma,"dark")}),Object.assign(Object.assign({},Aa),{light:pa(Aa,"light"),dark:pa(Aa,"dark")}),Object.assign(Object.assign({},Ba),{light:pa(Ba,"light"),dark:pa(Ba,"dark")});const ja=e=>O`
    display: -webkit-box;
    -webkit-line-clamp: ${e};
    -webkit-box-orient: vertical;
    overflow: hidden;
`,za=(e,t,r=!1)=>O`
        ${ma[`${e}-${t}`]}
        ${r?"margin-bottom: 1.05em;":"margin-bottom: 0;"}
    `,Ra=e=>{if(e)return O`
            ${ja(e)}
        `},La=(e,t,r,n,o)=>O`
    ${za(e,t||"regular",n)}
    ${((e=!1,t=!1,r)=>t?O`
            display: block;
            ${Ra(r)}
        `:e?O`
            display: inline;
        `:O`
            display: block;
            ${Ra(r)}
        `)(r,n,o)}
    color: ${ga.text};
`,Pa=F.div`
    ${e=>La(e.$textStyle,e.$weight,e.$inline,e.$paragraph,e.$maxLines)}
`,Na=F.a`
    ${e=>{var t;return O`
        ${za(e.$textStyle,e.$weight||"regular")}
        color: ${ga.hyperlink};
        text-decoration: ${null!==(t=e.$underlineStyle)&&void 0!==t?t:"underline"};

        &:hover,
        &:active,
        &:focus {
            color: ${ga["text-hover"]};
        }
    `}}
`,Ha=F(M)`
    height: 1lh;
    width: 1em;
    margin-left: 0.4em;
    vertical-align: middle;
`;var Wa;!function(r){const n=(t,r,n)=>{const i=(n,o)=>{var{weight:i,inline:a,paragraph:l,maxLines:s}=n,d=st(n,["weight","inline","paragraph","maxLines"]);return e(Pa,Object.assign({ref:o,as:a?"span":t,$textStyle:r,$weight:i,$inline:a,$paragraph:l,$maxLines:s},d))};return i.displayName=`Typography.${n}`,o.forwardRef(i)};r.HeadingXXL=n("h1","heading-xxl","HeadingXXL"),r.HeadingXL=n("h2","heading-xl","HeadingXL"),r.HeadingLG=n("h3","heading-lg","HeadingLG"),r.HeadingMD=n("h4","heading-md","HeadingMD"),r.HeadingSM=n("h5","heading-sm","HeadingSM"),r.HeadingXS=n("h6","heading-xs","HeadingXS");const i=(t,r)=>{const n=(r,n)=>{var{weight:o,inline:i,paragraph:a,maxLines:l}=r,s=st(r,["weight","inline","paragraph","maxLines"]);return e(Pa,Object.assign({ref:n,as:i?"span":"p",$textStyle:t,$weight:o,$inline:i,$paragraph:a,$maxLines:l},s))};return n.displayName=`Typography.${r}`,o.forwardRef(n)};r.BodyBL=i("body-baseline","BodyBL"),r.BodyMD=i("body-md","BodyMD"),r.BodySM=i("body-sm","BodySM"),r.BodyXS=i("body-xs","BodyXS");const a=(r,n)=>{const i=(n,o)=>{var{weight:i,children:a,external:l,underlineStyle:s="underline"}=n,d=st(n,["weight","children","external","underlineStyle"]);return t(Na,Object.assign({ref:o,$textStyle:r,$weight:i,$underlineStyle:s},d,{children:[a,l&&e(Ha,{})]}))};return i.displayName=`Typography.${n}`,o.forwardRef(i)};r.LinkBL=a("body-baseline","LinkBL"),r.LinkMD=a("body-md","LinkMD"),r.LinkSM=a("body-sm","LinkSM"),r.LinkXS=a("body-xs","LinkXS")}(Wa||(Wa={}));const Ya=F.div`
    position: relative;
    display: flex;
    flex-direction: column;

    ${e=>{if(e.$border)return O`
                ${va.Util["dashed-default"]({radius:xa.sm,thickness:va["width-040"],colour:ga.border})}
                padding: ${ya["spacing-32"]};

                ${Ca.MaxWidth.md} {
                    padding: ${ya["spacing-32"]} ${ya["spacing-20"]};
                }
            `}}
`,Va=F.input`
    display: none;
`,Ua=F.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;

    background: ${ga["bg-primary-subtler"]};
    ${va.Util["dashed-default"]({radius:xa.sm,thickness:va["width-040"],colour:ga["border-primary"]})}

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`,Ka=F(Wa.BodyMD)`
    color: ${ga["text-primary"]};
    text-align: center;
`,qa=F(E)`
    color: ${ga["icon-primary"]};
    height: 4rem;
    width: 4rem;
`,Za=u((({children:r,accept:n,capture:o,multiple:i,id:a,className:s,name:d,border:c,disabled:u,onChange:h,"data-testid":p},g)=>{const m=l(null),{getRootProps:b,isDragActive:v}=dr({onDrop:h,noClick:!0,disabled:u});f(g,(()=>Object.assign(Object.assign({},m.current),{openFileDialog:()=>{m.current&&(m.current.value="",m.current.click())}})));return t(Ya,Object.assign({id:a,"data-testid":p||"dropzone",$border:c,className:s},b(),{children:[e(Va,{type:"file",name:d,ref:m,tabIndex:-1,"aria-hidden":!0,accept:n,capture:o,multiple:i,"data-testid":p?`${p}-input`:"dropzone-input",onChange:e=>{e.target.files&&h(Array.from(e.target.files))}}),r,v&&t(Ua,{children:[e(qa,{}),e(Ka,{weight:"semibold",children:"Drop files here"})]})]}))}));const Ga="undefined"!=typeof window&&void 0!==window.document&&void 0!==window.document.createElement;function Xa(e){const t=Object.prototype.toString.call(e);return"[object Window]"===t||"[object global]"===t}function Ja(e){return"nodeType"in e}function Qa(e){var t,r;return e?Xa(e)?e:Ja(e)&&null!=(t=null==(r=e.ownerDocument)?void 0:r.defaultView)?t:window:window}function el(e){const{Document:t}=Qa(e);return e instanceof t}function tl(e){return!Xa(e)&&e instanceof Qa(e).HTMLElement}function rl(e){return e instanceof Qa(e).SVGElement}function nl(e){return e?Xa(e)?e.document:Ja(e)?el(e)?e:tl(e)||rl(e)?e.ownerDocument:document:document:document}const ol=Ga?p:d;function il(e){const t=l(e);return ol((()=>{t.current=e})),c((function(){for(var e=arguments.length,r=new Array(e),n=0;n<e;n++)r[n]=arguments[n];return null==t.current?void 0:t.current(...r)}),[])}function al(e,t){void 0===t&&(t=[e]);const r=l(e);return ol((()=>{r.current!==e&&(r.current=e)}),t),r}function ll(e,t){const r=l();return a((()=>{const t=e(r.current);return r.current=t,t}),[...t])}function sl(e){const t=il(e),r=l(null),n=c((e=>{e!==r.current&&(null==t||t(e,r.current)),r.current=e}),[]);return[r,n]}function dl(e){const t=l();return d((()=>{t.current=e}),[e]),t.current}let cl={};function ul(e,t){return a((()=>{if(t)return t;const r=null==cl[e]?0:cl[e]+1;return cl[e]=r,e+"-"+r}),[e,t])}function fl(e){return function(t){for(var r=arguments.length,n=new Array(r>1?r-1:0),o=1;o<r;o++)n[o-1]=arguments[o];return n.reduce(((t,r)=>{const n=Object.entries(r);for(const[r,o]of n){const n=t[r];null!=n&&(t[r]=n+e*o)}return t}),{...t})}}const hl=fl(1),pl=fl(-1);function gl(e){if(!e)return!1;const{KeyboardEvent:t}=Qa(e.target);return t&&e instanceof t}function ml(e){if(function(e){if(!e)return!1;const{TouchEvent:t}=Qa(e.target);return t&&e instanceof t}(e)){if(e.touches&&e.touches.length){const{clientX:t,clientY:r}=e.touches[0];return{x:t,y:r}}if(e.changedTouches&&e.changedTouches.length){const{clientX:t,clientY:r}=e.changedTouches[0];return{x:t,y:r}}}return function(e){return"clientX"in e&&"clientY"in e}(e)?{x:e.clientX,y:e.clientY}:null}const bl=Object.freeze({Translate:{toString(e){if(!e)return;const{x:t,y:r}=e;return"translate3d("+(t?Math.round(t):0)+"px, "+(r?Math.round(r):0)+"px, 0)"}},Scale:{toString(e){if(!e)return;const{scaleX:t,scaleY:r}=e;return"scaleX("+t+") scaleY("+r+")"}},Transform:{toString(e){if(e)return[bl.Translate.toString(e),bl.Scale.toString(e)].join(" ")}},Transition:{toString(e){let{property:t,duration:r,easing:n}=e;return t+" "+r+"ms "+n}}}),vl="a,frame,iframe,input:not([type=hidden]):not(:disabled),select:not(:disabled),textarea:not(:disabled),button:not(:disabled),*[tabindex]";function yl(e){return e.matches(vl)?e:e.querySelector(vl)}const xl={display:"none"};function wl(e){let{id:t,value:r}=e;return o.createElement("div",{id:t,style:xl},r)}function $l(e){let{id:t,announcement:r,ariaLiveType:n="assertive"}=e;return o.createElement("div",{id:t,style:{position:"fixed",width:1,height:1,margin:-1,border:0,padding:0,overflow:"hidden",clip:"rect(0 0 0 0)",clipPath:"inset(100%)",whiteSpace:"nowrap"},role:"status","aria-live":n,"aria-atomic":!0},r)}const Cl=i(null);const Dl={draggable:"\n    To pick up a draggable item, press the space bar.\n    While dragging, use the arrow keys to move the item.\n    Press space again to drop the item in its new position, or press escape to cancel.\n  "},Sl={onDragStart(e){let{active:t}=e;return"Picked up draggable item "+t.id+"."},onDragOver(e){let{active:t,over:r}=e;return r?"Draggable item "+t.id+" was moved over droppable area "+r.id+".":"Draggable item "+t.id+" is no longer over a droppable area."},onDragEnd(e){let{active:t,over:r}=e;return r?"Draggable item "+t.id+" was dropped over droppable area "+r.id:"Draggable item "+t.id+" was dropped."},onDragCancel(e){let{active:t}=e;return"Dragging was cancelled. Draggable item "+t.id+" was dropped."}};function kl(e){let{announcements:t=Sl,container:r,hiddenTextDescribedById:n,screenReaderInstructions:i=Dl}=e;const{announce:l,announcement:s}=function(){const[e,t]=g("");return{announce:c((e=>{null!=e&&t(e)}),[]),announcement:e}}(),u=ul("DndLiveRegion"),[f,h]=g(!1);if(d((()=>{h(!0)}),[]),function(e){const t=b(Cl);d((()=>{if(!t)throw new Error("useDndMonitor must be used within a children of <DndContext>");return t(e)}),[e,t])}(a((()=>({onDragStart(e){let{active:r}=e;l(t.onDragStart({active:r}))},onDragMove(e){let{active:r,over:n}=e;t.onDragMove&&l(t.onDragMove({active:r,over:n}))},onDragOver(e){let{active:r,over:n}=e;l(t.onDragOver({active:r,over:n}))},onDragEnd(e){let{active:r,over:n}=e;l(t.onDragEnd({active:r,over:n}))},onDragCancel(e){let{active:r,over:n}=e;l(t.onDragCancel({active:r,over:n}))}})),[l,t])),!f)return null;const p=o.createElement(o.Fragment,null,o.createElement(wl,{id:n,value:i.draggable}),o.createElement($l,{id:u,announcement:s}));return r?j(p,r):p}var El;function Fl(){}function Ol(e,t){return a((()=>({sensor:e,options:null!=t?t:{}})),[e,t])}!function(e){e.DragStart="dragStart",e.DragMove="dragMove",e.DragEnd="dragEnd",e.DragCancel="dragCancel",e.DragOver="dragOver",e.RegisterDroppable="registerDroppable",e.SetDroppableDisabled="setDroppableDisabled",e.UnregisterDroppable="unregisterDroppable"}(El||(El={}));const Tl=Object.freeze({x:0,y:0});function _l(e,t){let{data:{value:r}}=e,{data:{value:n}}=t;return r-n}function Il(e,t){let{data:{value:r}}=e,{data:{value:n}}=t;return n-r}function Ml(e){let{left:t,top:r,height:n,width:o}=e;return[{x:t,y:r},{x:t+o,y:r},{x:t,y:r+n},{x:t+o,y:r+n}]}function Al(e,t){if(!e||0===e.length)return null;const[r]=e;return t?r[t]:r}function Bl(e,t){const r=Math.max(t.top,e.top),n=Math.max(t.left,e.left),o=Math.min(t.left+t.width,e.left+e.width),i=Math.min(t.top+t.height,e.top+e.height),a=o-n,l=i-r;if(n<o&&r<i){const r=t.width*t.height,n=e.width*e.height,o=a*l;return Number((o/(r+n-o)).toFixed(4))}return 0}const jl=e=>{let{collisionRect:t,droppableRects:r,droppableContainers:n}=e;const o=[];for(const e of n){const{id:n}=e,i=r.get(n);if(i){const r=Bl(i,t);r>0&&o.push({id:n,data:{droppableContainer:e,value:r}})}}return o.sort(Il)};function zl(e,t){return e&&t?{x:e.left-t.left,y:e.top-t.top}:Tl}function Rl(e){return function(t){for(var r=arguments.length,n=new Array(r>1?r-1:0),o=1;o<r;o++)n[o-1]=arguments[o];return n.reduce(((t,r)=>({...t,top:t.top+e*r.y,bottom:t.bottom+e*r.y,left:t.left+e*r.x,right:t.right+e*r.x})),{...t})}}const Ll=Rl(1);const Pl={ignoreTransform:!1};function Nl(e,t){void 0===t&&(t=Pl);let r=e.getBoundingClientRect();if(t.ignoreTransform){const{transform:t,transformOrigin:n}=Qa(e).getComputedStyle(e);t&&(r=function(e,t,r){const n=function(e){if(e.startsWith("matrix3d(")){const t=e.slice(9,-1).split(/, /);return{x:+t[12],y:+t[13],scaleX:+t[0],scaleY:+t[5]}}if(e.startsWith("matrix(")){const t=e.slice(7,-1).split(/, /);return{x:+t[4],y:+t[5],scaleX:+t[0],scaleY:+t[3]}}return null}(t);if(!n)return e;const{scaleX:o,scaleY:i,x:a,y:l}=n,s=e.left-a-(1-o)*parseFloat(r),d=e.top-l-(1-i)*parseFloat(r.slice(r.indexOf(" ")+1)),c=o?e.width/o:e.width,u=i?e.height/i:e.height;return{width:c,height:u,top:d,right:s+c,bottom:d+u,left:s}}(r,t,n))}const{top:n,left:o,width:i,height:a,bottom:l,right:s}=r;return{top:n,left:o,width:i,height:a,bottom:l,right:s}}function Hl(e){return Nl(e,{ignoreTransform:!0})}function Wl(e,t){const r=[];return e?function n(o){if(null!=t&&r.length>=t)return r;if(!o)return r;if(el(o)&&null!=o.scrollingElement&&!r.includes(o.scrollingElement))return r.push(o.scrollingElement),r;if(!tl(o)||rl(o))return r;if(r.includes(o))return r;const i=Qa(e).getComputedStyle(o);return o!==e&&function(e,t){void 0===t&&(t=Qa(e).getComputedStyle(e));const r=/(auto|scroll|overlay)/;return["overflow","overflowX","overflowY"].some((e=>{const n=t[e];return"string"==typeof n&&r.test(n)}))}(o,i)&&r.push(o),function(e,t){return void 0===t&&(t=Qa(e).getComputedStyle(e)),"fixed"===t.position}(o,i)?r:n(o.parentNode)}(e):r}function Yl(e){const[t]=Wl(e,1);return null!=t?t:null}function Vl(e){return Ga&&e?Xa(e)?e:Ja(e)?el(e)||e===nl(e).scrollingElement?window:tl(e)?e:null:null:null}function Ul(e){return Xa(e)?e.scrollX:e.scrollLeft}function Kl(e){return Xa(e)?e.scrollY:e.scrollTop}function ql(e){return{x:Ul(e),y:Kl(e)}}var Zl;function Gl(e){return!(!Ga||!e)&&e===document.scrollingElement}function Xl(e){const t={x:0,y:0},r=Gl(e)?{height:window.innerHeight,width:window.innerWidth}:{height:e.clientHeight,width:e.clientWidth},n={x:e.scrollWidth-r.width,y:e.scrollHeight-r.height};return{isTop:e.scrollTop<=t.y,isLeft:e.scrollLeft<=t.x,isBottom:e.scrollTop>=n.y,isRight:e.scrollLeft>=n.x,maxScroll:n,minScroll:t}}!function(e){e[e.Forward=1]="Forward",e[e.Backward=-1]="Backward"}(Zl||(Zl={}));const Jl={x:.2,y:.2};function Ql(e,t,r,n,o){let{top:i,left:a,right:l,bottom:s}=r;void 0===n&&(n=10),void 0===o&&(o=Jl);const{isTop:d,isBottom:c,isLeft:u,isRight:f}=Xl(e),h={x:0,y:0},p={x:0,y:0},g=t.height*o.y,m=t.width*o.x;return!d&&i<=t.top+g?(h.y=Zl.Backward,p.y=n*Math.abs((t.top+g-i)/g)):!c&&s>=t.bottom-g&&(h.y=Zl.Forward,p.y=n*Math.abs((t.bottom-g-s)/g)),!f&&l>=t.right-m?(h.x=Zl.Forward,p.x=n*Math.abs((t.right-m-l)/m)):!u&&a<=t.left+m&&(h.x=Zl.Backward,p.x=n*Math.abs((t.left+m-a)/m)),{direction:h,speed:p}}function es(e){if(e===document.scrollingElement){const{innerWidth:e,innerHeight:t}=window;return{top:0,left:0,right:e,bottom:t,width:e,height:t}}const{top:t,left:r,right:n,bottom:o}=e.getBoundingClientRect();return{top:t,left:r,right:n,bottom:o,width:e.clientWidth,height:e.clientHeight}}function ts(e){return e.reduce(((e,t)=>hl(e,ql(t))),Tl)}const rs=[["x",["left","right"],function(e){return e.reduce(((e,t)=>e+Ul(t)),0)}],["y",["top","bottom"],function(e){return e.reduce(((e,t)=>e+Kl(t)),0)}]];class ns{constructor(e,t){this.rect=void 0,this.width=void 0,this.height=void 0,this.top=void 0,this.bottom=void 0,this.right=void 0,this.left=void 0;const r=Wl(t),n=ts(r);this.rect={...e},this.width=e.width,this.height=e.height;for(const[e,t,o]of rs)for(const i of t)Object.defineProperty(this,i,{get:()=>{const t=o(r),a=n[e]-t;return this.rect[i]+a},enumerable:!0});Object.defineProperty(this,"rect",{enumerable:!1})}}class os{constructor(e){this.target=void 0,this.listeners=[],this.removeAll=()=>{this.listeners.forEach((e=>{var t;return null==(t=this.target)?void 0:t.removeEventListener(...e)}))},this.target=e}add(e,t,r){var n;null==(n=this.target)||n.addEventListener(e,t,r),this.listeners.push([e,t,r])}}function is(e,t){const r=Math.abs(e.x),n=Math.abs(e.y);return"number"==typeof t?Math.sqrt(r**2+n**2)>t:"x"in t&&"y"in t?r>t.x&&n>t.y:"x"in t?r>t.x:"y"in t&&n>t.y}var as,ls;function ss(e){e.preventDefault()}function ds(e){e.stopPropagation()}!function(e){e.Click="click",e.DragStart="dragstart",e.Keydown="keydown",e.ContextMenu="contextmenu",e.Resize="resize",e.SelectionChange="selectionchange",e.VisibilityChange="visibilitychange"}(as||(as={})),function(e){e.Space="Space",e.Down="ArrowDown",e.Right="ArrowRight",e.Left="ArrowLeft",e.Up="ArrowUp",e.Esc="Escape",e.Enter="Enter"}(ls||(ls={}));const cs={start:[ls.Space,ls.Enter],cancel:[ls.Esc],end:[ls.Space,ls.Enter]},us=(e,t)=>{let{currentCoordinates:r}=t;switch(e.code){case ls.Right:return{...r,x:r.x+25};case ls.Left:return{...r,x:r.x-25};case ls.Down:return{...r,y:r.y+25};case ls.Up:return{...r,y:r.y-25}}};let fs=class{constructor(e){this.props=void 0,this.autoScrollEnabled=!1,this.referenceCoordinates=void 0,this.listeners=void 0,this.windowListeners=void 0,this.props=e;const{event:{target:t}}=e;this.props=e,this.listeners=new os(nl(t)),this.windowListeners=new os(Qa(t)),this.handleKeyDown=this.handleKeyDown.bind(this),this.handleCancel=this.handleCancel.bind(this),this.attach()}attach(){this.handleStart(),this.windowListeners.add(as.Resize,this.handleCancel),this.windowListeners.add(as.VisibilityChange,this.handleCancel),setTimeout((()=>this.listeners.add(as.Keydown,this.handleKeyDown)))}handleStart(){const{activeNode:e,onStart:t}=this.props,r=e.node.current;r&&function(e,t){if(void 0===t&&(t=Nl),!e)return;const{top:r,left:n,bottom:o,right:i}=t(e);Yl(e)&&(o<=0||i<=0||r>=window.innerHeight||n>=window.innerWidth)&&e.scrollIntoView({block:"center",inline:"center"})}(r),t(Tl)}handleKeyDown(e){if(gl(e)){const{active:t,context:r,options:n}=this.props,{keyboardCodes:o=cs,coordinateGetter:i=us,scrollBehavior:a="smooth"}=n,{code:l}=e;if(o.end.includes(l))return void this.handleEnd(e);if(o.cancel.includes(l))return void this.handleCancel(e);const{collisionRect:s}=r.current,d=s?{x:s.left,y:s.top}:Tl;this.referenceCoordinates||(this.referenceCoordinates=d);const c=i(e,{active:t,context:r.current,currentCoordinates:d});if(c){const t=pl(c,d),n={x:0,y:0},{scrollableAncestors:o}=r.current;for(const r of o){const o=e.code,{isTop:i,isRight:l,isLeft:s,isBottom:d,maxScroll:u,minScroll:f}=Xl(r),h=es(r),p={x:Math.min(o===ls.Right?h.right-h.width/2:h.right,Math.max(o===ls.Right?h.left:h.left+h.width/2,c.x)),y:Math.min(o===ls.Down?h.bottom-h.height/2:h.bottom,Math.max(o===ls.Down?h.top:h.top+h.height/2,c.y))},g=o===ls.Right&&!l||o===ls.Left&&!s,m=o===ls.Down&&!d||o===ls.Up&&!i;if(g&&p.x!==c.x){const e=r.scrollLeft+t.x,i=o===ls.Right&&e<=u.x||o===ls.Left&&e>=f.x;if(i&&!t.y)return void r.scrollTo({left:e,behavior:a});n.x=i?r.scrollLeft-e:o===ls.Right?r.scrollLeft-u.x:r.scrollLeft-f.x,n.x&&r.scrollBy({left:-n.x,behavior:a});break}if(m&&p.y!==c.y){const e=r.scrollTop+t.y,i=o===ls.Down&&e<=u.y||o===ls.Up&&e>=f.y;if(i&&!t.x)return void r.scrollTo({top:e,behavior:a});n.y=i?r.scrollTop-e:o===ls.Down?r.scrollTop-u.y:r.scrollTop-f.y,n.y&&r.scrollBy({top:-n.y,behavior:a});break}}this.handleMove(e,hl(pl(c,this.referenceCoordinates),n))}}}handleMove(e,t){const{onMove:r}=this.props;e.preventDefault(),r(t)}handleEnd(e){const{onEnd:t}=this.props;e.preventDefault(),this.detach(),t()}handleCancel(e){const{onCancel:t}=this.props;e.preventDefault(),this.detach(),t()}detach(){this.listeners.removeAll(),this.windowListeners.removeAll()}};function hs(e){return Boolean(e&&"distance"in e)}function ps(e){return Boolean(e&&"delay"in e)}fs.activators=[{eventName:"onKeyDown",handler:(e,t,r)=>{let{keyboardCodes:n=cs,onActivation:o}=t,{active:i}=r;const{code:a}=e.nativeEvent;if(n.start.includes(a)){const t=i.activatorNode.current;return(!t||e.target===t)&&(e.preventDefault(),null==o||o({event:e.nativeEvent}),!0)}return!1}}];class gs{constructor(e,t,r){var n;void 0===r&&(r=function(e){const{EventTarget:t}=Qa(e);return e instanceof t?e:nl(e)}(e.event.target)),this.props=void 0,this.events=void 0,this.autoScrollEnabled=!0,this.document=void 0,this.activated=!1,this.initialCoordinates=void 0,this.timeoutId=null,this.listeners=void 0,this.documentListeners=void 0,this.windowListeners=void 0,this.props=e,this.events=t;const{event:o}=e,{target:i}=o;this.props=e,this.events=t,this.document=nl(i),this.documentListeners=new os(this.document),this.listeners=new os(r),this.windowListeners=new os(Qa(i)),this.initialCoordinates=null!=(n=ml(o))?n:Tl,this.handleStart=this.handleStart.bind(this),this.handleMove=this.handleMove.bind(this),this.handleEnd=this.handleEnd.bind(this),this.handleCancel=this.handleCancel.bind(this),this.handleKeydown=this.handleKeydown.bind(this),this.removeTextSelection=this.removeTextSelection.bind(this),this.attach()}attach(){const{events:e,props:{options:{activationConstraint:t,bypassActivationConstraint:r}}}=this;if(this.listeners.add(e.move.name,this.handleMove,{passive:!1}),this.listeners.add(e.end.name,this.handleEnd),this.windowListeners.add(as.Resize,this.handleCancel),this.windowListeners.add(as.DragStart,ss),this.windowListeners.add(as.VisibilityChange,this.handleCancel),this.windowListeners.add(as.ContextMenu,ss),this.documentListeners.add(as.Keydown,this.handleKeydown),t){if(null!=r&&r({event:this.props.event,activeNode:this.props.activeNode,options:this.props.options}))return this.handleStart();if(ps(t))return void(this.timeoutId=setTimeout(this.handleStart,t.delay));if(hs(t))return}this.handleStart()}detach(){this.listeners.removeAll(),this.windowListeners.removeAll(),setTimeout(this.documentListeners.removeAll,50),null!==this.timeoutId&&(clearTimeout(this.timeoutId),this.timeoutId=null)}handleStart(){const{initialCoordinates:e}=this,{onStart:t}=this.props;e&&(this.activated=!0,this.documentListeners.add(as.Click,ds,{capture:!0}),this.removeTextSelection(),this.documentListeners.add(as.SelectionChange,this.removeTextSelection),t(e))}handleMove(e){var t;const{activated:r,initialCoordinates:n,props:o}=this,{onMove:i,options:{activationConstraint:a}}=o;if(!n)return;const l=null!=(t=ml(e))?t:Tl,s=pl(n,l);if(!r&&a){if(hs(a)){if(null!=a.tolerance&&is(s,a.tolerance))return this.handleCancel();if(is(s,a.distance))return this.handleStart()}return ps(a)&&is(s,a.tolerance)?this.handleCancel():void 0}e.cancelable&&e.preventDefault(),i(l)}handleEnd(){const{onEnd:e}=this.props;this.detach(),e()}handleCancel(){const{onCancel:e}=this.props;this.detach(),e()}handleKeydown(e){e.code===ls.Esc&&this.handleCancel()}removeTextSelection(){var e;null==(e=this.document.getSelection())||e.removeAllRanges()}}const ms={move:{name:"pointermove"},end:{name:"pointerup"}};class bs extends gs{constructor(e){const{event:t}=e,r=nl(t.target);super(e,ms,r)}}bs.activators=[{eventName:"onPointerDown",handler:(e,t)=>{let{nativeEvent:r}=e,{onActivation:n}=t;return!(!r.isPrimary||0!==r.button)&&(null==n||n({event:r}),!0)}}];const vs={move:{name:"mousemove"},end:{name:"mouseup"}};var ys;!function(e){e[e.RightClick=2]="RightClick"}(ys||(ys={}));let xs=class extends gs{constructor(e){super(e,vs,nl(e.event.target))}};xs.activators=[{eventName:"onMouseDown",handler:(e,t)=>{let{nativeEvent:r}=e,{onActivation:n}=t;return r.button!==ys.RightClick&&(null==n||n({event:r}),!0)}}];const ws={move:{name:"touchmove"},end:{name:"touchend"}};class $s extends gs{constructor(e){super(e,ws)}static setup(){return window.addEventListener(ws.move.name,e,{capture:!1,passive:!1}),function(){window.removeEventListener(ws.move.name,e)};function e(){}}}var Cs,Ds;function Ss(e){let{acceleration:t,activator:r=Cs.Pointer,canScroll:n,draggingRect:o,enabled:i,interval:s=5,order:u=Ds.TreeOrder,pointerCoordinates:f,scrollableAncestors:h,scrollableAncestorRects:p,delta:g,threshold:m}=e;const b=function(e){let{delta:t,disabled:r}=e;const n=dl(t);return ll((e=>{if(r||!n||!e)return ks;const o={x:Math.sign(t.x-n.x),y:Math.sign(t.y-n.y)};return{x:{[Zl.Backward]:e.x[Zl.Backward]||-1===o.x,[Zl.Forward]:e.x[Zl.Forward]||1===o.x},y:{[Zl.Backward]:e.y[Zl.Backward]||-1===o.y,[Zl.Forward]:e.y[Zl.Forward]||1===o.y}}}),[r,t,n])}({delta:g,disabled:!i}),[v,y]=function(){const e=l(null);return[c(((t,r)=>{e.current=setInterval(t,r)}),[]),c((()=>{null!==e.current&&(clearInterval(e.current),e.current=null)}),[])]}(),x=l({x:0,y:0}),w=l({x:0,y:0}),$=a((()=>{switch(r){case Cs.Pointer:return f?{top:f.y,bottom:f.y,left:f.x,right:f.x}:null;case Cs.DraggableRect:return o}}),[r,o,f]),C=l(null),D=c((()=>{const e=C.current;if(!e)return;const t=x.current.x*w.current.x,r=x.current.y*w.current.y;e.scrollBy(t,r)}),[]),S=a((()=>u===Ds.TreeOrder?[...h].reverse():h),[u,h]);d((()=>{if(i&&h.length&&$){for(const e of S){if(!1===(null==n?void 0:n(e)))continue;const r=h.indexOf(e),o=p[r];if(!o)continue;const{direction:i,speed:a}=Ql(e,o,$,t,m);for(const e of["x","y"])b[e][i[e]]||(a[e]=0,i[e]=0);if(a.x>0||a.y>0)return y(),C.current=e,v(D,s),x.current=a,void(w.current=i)}x.current={x:0,y:0},w.current={x:0,y:0},y()}else y()}),[t,D,n,y,i,s,JSON.stringify($),JSON.stringify(b),v,h,S,p,JSON.stringify(m)])}$s.activators=[{eventName:"onTouchStart",handler:(e,t)=>{let{nativeEvent:r}=e,{onActivation:n}=t;const{touches:o}=r;return!(o.length>1)&&(null==n||n({event:r}),!0)}}],function(e){e[e.Pointer=0]="Pointer",e[e.DraggableRect=1]="DraggableRect"}(Cs||(Cs={})),function(e){e[e.TreeOrder=0]="TreeOrder",e[e.ReversedTreeOrder=1]="ReversedTreeOrder"}(Ds||(Ds={}));const ks={x:{[Zl.Backward]:!1,[Zl.Forward]:!1},y:{[Zl.Backward]:!1,[Zl.Forward]:!1}};var Es,Fs;!function(e){e[e.Always=0]="Always",e[e.BeforeDragging=1]="BeforeDragging",e[e.WhileDragging=2]="WhileDragging"}(Es||(Es={})),function(e){e.Optimized="optimized"}(Fs||(Fs={}));const Os=new Map;function Ts(e,t){return ll((r=>e?r||("function"==typeof t?t(e):e):null),[t,e])}function _s(e){let{callback:t,disabled:r}=e;const n=il(t),o=a((()=>{if(r||"undefined"==typeof window||void 0===window.ResizeObserver)return;const{ResizeObserver:e}=window;return new e(n)}),[r]);return d((()=>()=>null==o?void 0:o.disconnect()),[o]),o}function Is(e){return new ns(Nl(e),e)}function Ms(e,t,r){void 0===t&&(t=Is);const[n,o]=s((function(n){if(!e)return null;var o;if(!1===e.isConnected)return null!=(o=null!=n?n:r)?o:null;const i=t(e);if(JSON.stringify(n)===JSON.stringify(i))return n;return i}),null),i=function(e){let{callback:t,disabled:r}=e;const n=il(t),o=a((()=>{if(r||"undefined"==typeof window||void 0===window.MutationObserver)return;const{MutationObserver:e}=window;return new e(n)}),[n,r]);return d((()=>()=>null==o?void 0:o.disconnect()),[o]),o}({callback(t){if(e)for(const r of t){const{type:t,target:n}=r;if("childList"===t&&n instanceof HTMLElement&&n.contains(e)){o();break}}}}),l=_s({callback:o});return ol((()=>{o(),e?(null==l||l.observe(e),null==i||i.observe(document.body,{childList:!0,subtree:!0})):(null==l||l.disconnect(),null==i||i.disconnect())}),[e]),n}const As=[];function Bs(e,t){void 0===t&&(t=[]);const r=l(null);return d((()=>{r.current=null}),t),d((()=>{const t=e!==Tl;t&&!r.current&&(r.current=e),!t&&r.current&&(r.current=null)}),[e]),r.current?pl(e,r.current):Tl}function js(e){return a((()=>e?function(e){const t=e.innerWidth,r=e.innerHeight;return{top:0,left:0,right:t,bottom:r,width:t,height:r}}(e):null),[e])}const zs=[];function Rs(e){let{measure:t}=e;const[r,n]=g(null),o=c((e=>{for(const{target:r}of e)if(tl(r)){n((e=>{const n=t(r);return e?{...e,width:n.width,height:n.height}:n}));break}}),[t]),i=_s({callback:o}),l=c((e=>{const r=function(e){if(!e)return null;if(e.children.length>1)return e;const t=e.children[0];return tl(t)?t:e}(e);null==i||i.disconnect(),r&&(null==i||i.observe(r)),n(r?t(r):null)}),[t,i]),[s,d]=sl(l);return a((()=>({nodeRef:s,rect:r,setRef:d})),[r,s,d])}const Ls=[{sensor:bs,options:{}},{sensor:fs,options:{}}],Ps={current:{}},Ns={draggable:{measure:Hl},droppable:{measure:Hl,strategy:Es.WhileDragging,frequency:Fs.Optimized},dragOverlay:{measure:Nl}};class Hs extends Map{get(e){var t;return null!=e&&null!=(t=super.get(e))?t:void 0}toArray(){return Array.from(this.values())}getEnabled(){return this.toArray().filter((e=>{let{disabled:t}=e;return!t}))}getNodeFor(e){var t,r;return null!=(t=null==(r=this.get(e))?void 0:r.node.current)?t:void 0}}const Ws={activatorEvent:null,active:null,activeNode:null,activeNodeRect:null,collisions:null,containerNodeRect:null,draggableNodes:new Map,droppableRects:new Map,droppableContainers:new Hs,over:null,dragOverlay:{nodeRef:{current:null},rect:null,setRef:Fl},scrollableAncestors:[],scrollableAncestorRects:[],measuringConfiguration:Ns,measureDroppableContainers:Fl,windowRect:null,measuringScheduled:!1},Ys=i({activatorEvent:null,activators:[],active:null,activeNodeRect:null,ariaDescribedById:{draggable:""},dispatch:Fl,draggableNodes:new Map,over:null,measureDroppableContainers:Fl}),Vs=i(Ws);function Us(){return{draggable:{active:null,initialCoordinates:{x:0,y:0},nodes:new Map,translate:{x:0,y:0}},droppable:{containers:new Hs}}}function Ks(e,t){switch(t.type){case El.DragStart:return{...e,draggable:{...e.draggable,initialCoordinates:t.initialCoordinates,active:t.active}};case El.DragMove:return e.draggable.active?{...e,draggable:{...e.draggable,translate:{x:t.coordinates.x-e.draggable.initialCoordinates.x,y:t.coordinates.y-e.draggable.initialCoordinates.y}}}:e;case El.DragEnd:case El.DragCancel:return{...e,draggable:{...e.draggable,active:null,initialCoordinates:{x:0,y:0},translate:{x:0,y:0}}};case El.RegisterDroppable:{const{element:r}=t,{id:n}=r,o=new Hs(e.droppable.containers);return o.set(n,r),{...e,droppable:{...e.droppable,containers:o}}}case El.SetDroppableDisabled:{const{id:r,key:n,disabled:o}=t,i=e.droppable.containers.get(r);if(!i||n!==i.key)return e;const a=new Hs(e.droppable.containers);return a.set(r,{...i,disabled:o}),{...e,droppable:{...e.droppable,containers:a}}}case El.UnregisterDroppable:{const{id:r,key:n}=t,o=e.droppable.containers.get(r);if(!o||n!==o.key)return e;const i=new Hs(e.droppable.containers);return i.delete(r),{...e,droppable:{...e.droppable,containers:i}}}default:return e}}function qs(e){let{disabled:t}=e;const{active:r,activatorEvent:n,draggableNodes:o}=b(Ys),i=dl(n),a=dl(null==r?void 0:r.id);return d((()=>{if(!t&&!n&&i&&null!=a){if(!gl(i))return;if(document.activeElement===i.target)return;const e=o.get(a);if(!e)return;const{activatorNode:t,node:r}=e;if(!t.current&&!r.current)return;requestAnimationFrame((()=>{for(const e of[t.current,r.current]){if(!e)continue;const t=yl(e);if(t){t.focus();break}}}))}}),[n,t,o,a,i]),null}const Zs=i({...Tl,scaleX:1,scaleY:1});var Gs;!function(e){e[e.Uninitialized=0]="Uninitialized",e[e.Initializing=1]="Initializing",e[e.Initialized=2]="Initialized"}(Gs||(Gs={}));const Xs=m((function(e){var t,r,n,i;let{id:u,accessibility:f,autoScroll:h=!0,children:p,sensors:m=Ls,collisionDetection:b=jl,measuring:v,modifiers:y,...x}=e;const w=s(Ks,void 0,Us),[$,C]=w,[D,S]=function(){const[e]=g((()=>new Set)),t=c((t=>(e.add(t),()=>e.delete(t))),[e]);return[c((t=>{let{type:r,event:n}=t;e.forEach((e=>{var t;return null==(t=e[r])?void 0:t.call(e,n)}))}),[e]),t]}(),[k,E]=g(Gs.Uninitialized),F=k===Gs.Initialized,{draggable:{active:O,nodes:T,translate:_},droppable:{containers:I}}=$,M=O?T.get(O):null,A=l({initial:null,translated:null}),j=a((()=>{var e;return null!=O?{id:O,data:null!=(e=null==M?void 0:M.data)?e:Ps,rect:A}:null}),[O,M]),z=l(null),[R,L]=g(null),[P,N]=g(null),H=al(x,Object.values(x)),W=ul("DndDescribedBy",u),Y=a((()=>I.getEnabled()),[I]),V=a((()=>({draggable:{...Ns.draggable,...null==U?void 0:U.draggable},droppable:{...Ns.droppable,...null==U?void 0:U.droppable},dragOverlay:{...Ns.dragOverlay,...null==U?void 0:U.dragOverlay}})),[null==(U=v)?void 0:U.draggable,null==U?void 0:U.droppable,null==U?void 0:U.dragOverlay]);var U;const{droppableRects:K,measureDroppableContainers:q,measuringScheduled:Z}=function(e,t){let{dragging:r,dependencies:n,config:o}=t;const[i,a]=g(null),{frequency:s,measure:u,strategy:f}=o,h=l(e),p=function(){switch(f){case Es.Always:return!1;case Es.BeforeDragging:return r;default:return!r}}(),m=al(p),b=c((function(e){void 0===e&&(e=[]),m.current||a((t=>null===t?e:t.concat(e.filter((e=>!t.includes(e))))))}),[m]),v=l(null),y=ll((t=>{if(p&&!r)return Os;if(!t||t===Os||h.current!==e||null!=i){const t=new Map;for(let r of e){if(!r)continue;if(i&&i.length>0&&!i.includes(r.id)&&r.rect.current){t.set(r.id,r.rect.current);continue}const e=r.node.current,n=e?new ns(u(e),e):null;r.rect.current=n,n&&t.set(r.id,n)}return t}return t}),[e,i,r,p,u]);return d((()=>{h.current=e}),[e]),d((()=>{p||b()}),[r,p]),d((()=>{i&&i.length>0&&a(null)}),[JSON.stringify(i)]),d((()=>{p||"number"!=typeof s||null!==v.current||(v.current=setTimeout((()=>{b(),v.current=null}),s))}),[s,p,b,...n]),{droppableRects:y,measureDroppableContainers:b,measuringScheduled:null!=i}}(Y,{dragging:F,dependencies:[_.x,_.y],config:V.droppable}),G=function(e,t){const r=null!==t?e.get(t):void 0,n=r?r.node.current:null;return ll((e=>{var r;return null===t?null:null!=(r=null!=n?n:e)?r:null}),[n,t])}(T,O),X=a((()=>P?ml(P):null),[P]),J=function(){const e=!1===(null==R?void 0:R.autoScrollEnabled),t="object"==typeof h?!1===h.enabled:!1===h,r=F&&!e&&!t;if("object"==typeof h)return{...h,enabled:r};return{enabled:r}}(),Q=function(e,t){return Ts(e,t)}(G,V.draggable.measure);!function(e){let{activeNode:t,measure:r,initialRect:n,config:o=!0}=e;const i=l(!1),{x:a,y:s}="boolean"==typeof o?{x:o,y:o}:o;ol((()=>{if(!a&&!s||!t)return void(i.current=!1);if(i.current||!n)return;const e=null==t?void 0:t.node.current;if(!e||!1===e.isConnected)return;const o=zl(r(e),n);if(a||(o.x=0),s||(o.y=0),i.current=!0,Math.abs(o.x)>0||Math.abs(o.y)>0){const t=Yl(e);t&&t.scrollBy({top:o.y,left:o.x})}}),[t,a,s,n,r])}({activeNode:O?T.get(O):null,config:J.layoutShiftCompensation,initialRect:Q,measure:V.draggable.measure});const ee=Ms(G,V.draggable.measure,Q),te=Ms(G?G.parentElement:null),re=l({activatorEvent:null,active:null,activeNode:G,collisionRect:null,collisions:null,droppableRects:K,draggableNodes:T,draggingNode:null,draggingNodeRect:null,droppableContainers:I,over:null,scrollableAncestors:[],scrollAdjustedTranslate:null}),ne=I.getNodeFor(null==(t=re.current.over)?void 0:t.id),oe=Rs({measure:V.dragOverlay.measure}),ie=null!=(r=oe.nodeRef.current)?r:G,ae=F?null!=(n=oe.rect)?n:ee:null,le=Boolean(oe.nodeRef.current&&oe.rect),se=zl(de=le?null:ee,Ts(de));var de;const ce=js(ie?Qa(ie):null),ue=function(e){const t=l(e),r=ll((r=>e?r&&r!==As&&e&&t.current&&e.parentNode===t.current.parentNode?r:Wl(e):As),[e]);return d((()=>{t.current=e}),[e]),r}(F?null!=ne?ne:G:null),fe=function(e,t){void 0===t&&(t=Nl);const[r]=e,n=js(r?Qa(r):null),[o,i]=s((function(){return e.length?e.map((e=>Gl(e)?n:new ns(t(e),e))):zs}),zs),a=_s({callback:i});return e.length>0&&o===zs&&i(),ol((()=>{e.length?e.forEach((e=>null==a?void 0:a.observe(e))):(null==a||a.disconnect(),i())}),[e]),o}(ue),he=function(e,t){let{transform:r,...n}=t;return null!=e&&e.length?e.reduce(((e,t)=>t({transform:e,...n})),r):r}(y,{transform:{x:_.x-se.x,y:_.y-se.y,scaleX:1,scaleY:1},activatorEvent:P,active:j,activeNodeRect:ee,containerNodeRect:te,draggingNodeRect:ae,over:re.current.over,overlayNodeRect:oe.rect,scrollableAncestors:ue,scrollableAncestorRects:fe,windowRect:ce}),pe=X?hl(X,_):null,ge=function(e){const[t,r]=g(null),n=l(e),o=c((e=>{const t=Vl(e.target);t&&r((e=>e?(e.set(t,ql(t)),new Map(e)):null))}),[]);return d((()=>{const t=n.current;if(e!==t){i(t);const a=e.map((e=>{const t=Vl(e);return t?(t.addEventListener("scroll",o,{passive:!0}),[t,ql(t)]):null})).filter((e=>null!=e));r(a.length?new Map(a):null),n.current=e}return()=>{i(e),i(t)};function i(e){e.forEach((e=>{const t=Vl(e);null==t||t.removeEventListener("scroll",o)}))}}),[o,e]),a((()=>e.length?t?Array.from(t.values()).reduce(((e,t)=>hl(e,t)),Tl):ts(e):Tl),[e,t])}(ue),me=Bs(ge),be=Bs(ge,[ee]),ve=hl(he,me),ye=ae?Ll(ae,he):null,xe=j&&ye?b({active:j,collisionRect:ye,droppableRects:K,droppableContainers:Y,pointerCoordinates:pe}):null,we=Al(xe,"id"),[$e,Ce]=g(null),De=function(e,t,r){return{...e,scaleX:t&&r?t.width/r.width:1,scaleY:t&&r?t.height/r.height:1}}(le?he:hl(he,be),null!=(i=null==$e?void 0:$e.rect)?i:null,ee),Se=c(((e,t)=>{let{sensor:r,options:n}=t;if(null==z.current)return;const o=T.get(z.current);if(!o)return;const i=e.nativeEvent,a=new r({active:z.current,activeNode:o,event:i,options:n,context:re,onStart(e){const t=z.current;if(null==t)return;const r=T.get(t);if(!r)return;const{onDragStart:n}=H.current,o={active:{id:t,data:r.data,rect:A}};B((()=>{null==n||n(o),E(Gs.Initializing),C({type:El.DragStart,initialCoordinates:e,active:t}),D({type:"onDragStart",event:o})}))},onMove(e){C({type:El.DragMove,coordinates:e})},onEnd:l(El.DragEnd),onCancel:l(El.DragCancel)});function l(e){return async function(){const{active:t,collisions:r,over:n,scrollAdjustedTranslate:o}=re.current;let a=null;if(t&&o){const{cancelDrop:l}=H.current;if(a={activatorEvent:i,active:t,collisions:r,delta:o,over:n},e===El.DragEnd&&"function"==typeof l){await Promise.resolve(l(a))&&(e=El.DragCancel)}}z.current=null,B((()=>{C({type:e}),E(Gs.Uninitialized),Ce(null),L(null),N(null);const t=e===El.DragEnd?"onDragEnd":"onDragCancel";if(a){const e=H.current[t];null==e||e(a),D({type:t,event:a})}}))}}B((()=>{L(a),N(e.nativeEvent)}))}),[T]),ke=c(((e,t)=>(r,n)=>{const o=r.nativeEvent,i=T.get(n);if(null!==z.current||!i||o.dndKit||o.defaultPrevented)return;const a={active:i};!0===e(r,t.options,a)&&(o.dndKit={capturedBy:t.sensor},z.current=n,Se(r,t))}),[T,Se]),Ee=function(e,t){return a((()=>e.reduce(((e,r)=>{const{sensor:n}=r;return[...e,...n.activators.map((e=>({eventName:e.eventName,handler:t(e.handler,r)})))]}),[])),[e,t])}(m,ke);!function(e){d((()=>{if(!Ga)return;const t=e.map((e=>{let{sensor:t}=e;return null==t.setup?void 0:t.setup()}));return()=>{for(const e of t)null==e||e()}}),e.map((e=>{let{sensor:t}=e;return t})))}(m),ol((()=>{ee&&k===Gs.Initializing&&E(Gs.Initialized)}),[ee,k]),d((()=>{const{onDragMove:e}=H.current,{active:t,activatorEvent:r,collisions:n,over:o}=re.current;if(!t||!r)return;const i={active:t,activatorEvent:r,collisions:n,delta:{x:ve.x,y:ve.y},over:o};B((()=>{null==e||e(i),D({type:"onDragMove",event:i})}))}),[ve.x,ve.y]),d((()=>{const{active:e,activatorEvent:t,collisions:r,droppableContainers:n,scrollAdjustedTranslate:o}=re.current;if(!e||null==z.current||!t||!o)return;const{onDragOver:i}=H.current,a=n.get(we),l=a&&a.rect.current?{id:a.id,rect:a.rect.current,data:a.data,disabled:a.disabled}:null,s={active:e,activatorEvent:t,collisions:r,delta:{x:o.x,y:o.y},over:l};B((()=>{Ce(l),null==i||i(s),D({type:"onDragOver",event:s})}))}),[we]),ol((()=>{re.current={activatorEvent:P,active:j,activeNode:G,collisionRect:ye,collisions:xe,droppableRects:K,draggableNodes:T,draggingNode:ie,draggingNodeRect:ae,droppableContainers:I,over:$e,scrollableAncestors:ue,scrollAdjustedTranslate:ve},A.current={initial:ae,translated:ye}}),[j,G,xe,ye,T,ie,ae,K,I,$e,ue,ve]),Ss({...J,delta:_,draggingRect:ye,pointerCoordinates:pe,scrollableAncestors:ue,scrollableAncestorRects:fe});const Fe=a((()=>({active:j,activeNode:G,activeNodeRect:ee,activatorEvent:P,collisions:xe,containerNodeRect:te,dragOverlay:oe,draggableNodes:T,droppableContainers:I,droppableRects:K,over:$e,measureDroppableContainers:q,scrollableAncestors:ue,scrollableAncestorRects:fe,measuringConfiguration:V,measuringScheduled:Z,windowRect:ce})),[j,G,ee,P,xe,te,oe,T,I,K,$e,q,ue,fe,V,Z,ce]),Oe=a((()=>({activatorEvent:P,activators:Ee,active:j,activeNodeRect:ee,ariaDescribedById:{draggable:W},dispatch:C,draggableNodes:T,over:$e,measureDroppableContainers:q})),[P,Ee,j,ee,C,W,T,$e,q]);return o.createElement(Cl.Provider,{value:S},o.createElement(Ys.Provider,{value:Oe},o.createElement(Vs.Provider,{value:Fe},o.createElement(Zs.Provider,{value:De},p)),o.createElement(qs,{disabled:!1===(null==f?void 0:f.restoreFocus)})),o.createElement(kl,{...f,hiddenTextDescribedById:W}))})),Js=i(null),Qs="button";function ed(e){let{id:t,data:r,disabled:n=!1,attributes:o}=e;const i=ul("Droppable"),{activators:l,activatorEvent:s,active:d,activeNodeRect:c,ariaDescribedById:u,draggableNodes:f,over:h}=b(Ys),{role:p=Qs,roleDescription:g="draggable",tabIndex:m=0}=null!=o?o:{},v=(null==d?void 0:d.id)===t,y=b(v?Zs:Js),[x,w]=sl(),[$,C]=sl(),D=function(e,t){return a((()=>e.reduce(((e,r)=>{let{eventName:n,handler:o}=r;return e[n]=e=>{o(e,t)},e}),{})),[e,t])}(l,t),S=al(r);ol((()=>(f.set(t,{id:t,key:i,node:x,activatorNode:$,data:S}),()=>{const e=f.get(t);e&&e.key===i&&f.delete(t)})),[f,t]);return{active:d,activatorEvent:s,activeNodeRect:c,attributes:a((()=>({role:p,tabIndex:m,"aria-disabled":n,"aria-pressed":!(!v||p!==Qs)||void 0,"aria-roledescription":g,"aria-describedby":u.draggable})),[n,p,m,v,g,u.draggable]),isDragging:v,listeners:n?void 0:D,node:x,over:h,setNodeRef:w,setActivatorNodeRef:C,transform:y}}const td={timeout:25};function rd(e,t,r){const n=e.slice();return n.splice(r<0?n.length+r:r,0,n.splice(t,1)[0]),n}function nd(e,t){return e.reduce(((e,r,n)=>{const o=t.get(r);return o&&(e[n]=o),e}),Array(e.length))}function od(e){return null!==e&&e>=0}const id=e=>{let{rects:t,activeIndex:r,overIndex:n,index:o}=e;const i=rd(t,n,r),a=t[o],l=i[o];return l&&a?{x:l.left-a.left,y:l.top-a.top,scaleX:l.width/a.width,scaleY:l.height/a.height}:null},ad={scaleX:1,scaleY:1},ld=e=>{var t;let{activeIndex:r,activeNodeRect:n,index:o,rects:i,overIndex:a}=e;const l=null!=(t=i[r])?t:n;if(!l)return null;if(o===r){const e=i[a];return e?{x:0,y:r<a?e.top+e.height-(l.top+l.height):e.top-l.top,...ad}:null}const s=function(e,t,r){const n=e[t],o=e[t-1],i=e[t+1];if(!n)return 0;if(r<t)return o?n.top-(o.top+o.height):i?i.top-(n.top+n.height):0;return i?i.top-(n.top+n.height):o?n.top-(o.top+o.height):0}(i,o,r);return o>r&&o<=a?{x:0,y:-l.height-s,...ad}:o<r&&o>=a?{x:0,y:l.height+s,...ad}:{x:0,y:0,...ad}};const sd="Sortable",dd=o.createContext({activeIndex:-1,containerId:sd,disableTransforms:!1,items:[],overIndex:-1,useDragOverlay:!1,sortedRects:[],strategy:id,disabled:{draggable:!1,droppable:!1}});function cd(e){let{children:t,id:r,items:n,strategy:i=id,disabled:s=!1}=e;const{active:c,dragOverlay:u,droppableRects:f,over:h,measureDroppableContainers:p}=b(Vs),g=ul(sd,r),m=Boolean(null!==u.rect),v=a((()=>n.map((e=>"object"==typeof e&&"id"in e?e.id:e))),[n]),y=null!=c,x=c?v.indexOf(c.id):-1,w=h?v.indexOf(h.id):-1,$=l(v),C=!function(e,t){if(e===t)return!0;if(e.length!==t.length)return!1;for(let r=0;r<e.length;r++)if(e[r]!==t[r])return!1;return!0}(v,$.current),D=-1!==w&&-1===x||C,S=function(e){return"boolean"==typeof e?{draggable:e,droppable:e}:e}(s);ol((()=>{C&&y&&p(v)}),[C,v,y,p]),d((()=>{$.current=v}),[v]);const k=a((()=>({activeIndex:x,containerId:g,disabled:S,disableTransforms:D,items:v,overIndex:w,useDragOverlay:m,sortedRects:nd(v,f),strategy:i})),[x,g,S.draggable,S.droppable,D,v,w,f,m,i]);return o.createElement(dd.Provider,{value:k},t)}const ud=e=>{let{id:t,items:r,activeIndex:n,overIndex:o}=e;return rd(r,n,o).indexOf(t)},fd=e=>{let{containerId:t,isSorting:r,wasDragging:n,index:o,items:i,newIndex:a,previousItems:l,previousContainerId:s,transition:d}=e;return!(!d||!n)&&((l===i||o!==a)&&(!!r||a!==o&&t===s))},hd={duration:200,easing:"ease"},pd="transform",gd=bl.Transition.toString({property:pd,duration:0,easing:"linear"}),md={roleDescription:"sortable"};function bd(e){let{animateLayoutChanges:t=fd,attributes:r,disabled:n,data:o,getNewIndex:i=ud,id:s,strategy:u,resizeObserverConfig:f,transition:h=hd}=e;const{items:p,containerId:m,activeIndex:v,disabled:y,disableTransforms:x,sortedRects:w,overIndex:$,useDragOverlay:C,strategy:D}=b(dd),S=function(e,t){var r,n;if("boolean"==typeof e)return{draggable:e,droppable:!1};return{draggable:null!=(r=null==e?void 0:e.draggable)?r:t.draggable,droppable:null!=(n=null==e?void 0:e.droppable)?n:t.droppable}}(n,y),k=p.indexOf(s),E=a((()=>({sortable:{containerId:m,index:k,items:p},...o})),[m,o,k,p]),F=a((()=>p.slice(p.indexOf(s))),[p,s]),{rect:O,node:T,isOver:_,setNodeRef:I}=function(e){let{data:t,disabled:r=!1,id:n,resizeObserverConfig:o}=e;const i=ul("Droppable"),{active:a,dispatch:s,over:u,measureDroppableContainers:f}=b(Ys),h=l({disabled:r}),p=l(!1),g=l(null),m=l(null),{disabled:v,updateMeasurementsFor:y,timeout:x}={...td,...o},w=al(null!=y?y:n),$=_s({callback:c((()=>{p.current?(null!=m.current&&clearTimeout(m.current),m.current=setTimeout((()=>{f(Array.isArray(w.current)?w.current:[w.current]),m.current=null}),x)):p.current=!0}),[x]),disabled:v||!a}),C=c(((e,t)=>{$&&(t&&($.unobserve(t),p.current=!1),e&&$.observe(e))}),[$]),[D,S]=sl(C),k=al(t);return d((()=>{$&&D.current&&($.disconnect(),p.current=!1,$.observe(D.current))}),[D,$]),ol((()=>(s({type:El.RegisterDroppable,element:{id:n,key:i,disabled:r,node:D,rect:g,data:k}}),()=>s({type:El.UnregisterDroppable,key:i,id:n}))),[n]),d((()=>{r!==h.current.disabled&&(s({type:El.SetDroppableDisabled,id:n,key:i,disabled:r}),h.current.disabled=r)}),[n,i,r,s]),{active:a,rect:g,isOver:(null==u?void 0:u.id)===n,node:D,over:u,setNodeRef:S}}({id:s,data:E,disabled:S.droppable,resizeObserverConfig:{updateMeasurementsFor:F,...f}}),{active:M,activatorEvent:A,activeNodeRect:B,attributes:j,setNodeRef:z,listeners:R,isDragging:L,over:P,setActivatorNodeRef:N,transform:H}=ed({id:s,data:E,attributes:{...md,...r},disabled:S.draggable}),W=function(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];return a((()=>e=>{t.forEach((t=>t(e)))}),t)}(I,z),Y=Boolean(M),V=Y&&!x&&od(v)&&od($),U=!C&&L,K=U&&V?H:null,q=V?null!=K?K:(null!=u?u:D)({rects:w,activeNodeRect:B,activeIndex:v,overIndex:$,index:k}):null,Z=od(v)&&od($)?i({id:s,items:p,activeIndex:v,overIndex:$}):k,G=null==M?void 0:M.id,X=l({activeId:G,items:p,newIndex:Z,containerId:m}),J=p!==X.current.items,Q=t({active:M,containerId:m,isDragging:L,isSorting:Y,id:s,index:k,items:p,newIndex:X.current.newIndex,previousItems:X.current.items,previousContainerId:X.current.containerId,transition:h,wasDragging:null!=X.current.activeId}),ee=function(e){let{disabled:t,index:r,node:n,rect:o}=e;const[i,a]=g(null),s=l(r);return ol((()=>{if(!t&&r!==s.current&&n.current){const e=o.current;if(e){const t=Nl(n.current,{ignoreTransform:!0}),r={x:e.left-t.left,y:e.top-t.top,scaleX:e.width/t.width,scaleY:e.height/t.height};(r.x||r.y)&&a(r)}}r!==s.current&&(s.current=r)}),[t,r,n,o]),d((()=>{i&&a(null)}),[i]),i}({disabled:!Q,index:k,node:T,rect:O});return d((()=>{Y&&X.current.newIndex!==Z&&(X.current.newIndex=Z),m!==X.current.containerId&&(X.current.containerId=m),p!==X.current.items&&(X.current.items=p)}),[Y,Z,m,p]),d((()=>{if(G===X.current.activeId)return;if(G&&!X.current.activeId)return void(X.current.activeId=G);const e=setTimeout((()=>{X.current.activeId=G}),50);return()=>clearTimeout(e)}),[G]),{active:M,activeIndex:v,attributes:j,data:E,rect:O,index:k,newIndex:Z,items:p,isOver:_,isSorting:Y,isDragging:L,listeners:R,node:T,overIndex:$,over:P,setNodeRef:W,setActivatorNodeRef:N,setDroppableNodeRef:I,setDraggableNodeRef:z,transform:null!=ee?ee:q,transition:function(){if(ee||J&&X.current.newIndex===k)return gd;if(U&&!gl(A)||!h)return;if(Y||Q)return bl.Transition.toString({...h,property:pd});return}()}}function vd(e){if(!e)return!1;const t=e.data.current;return!!(t&&"sortable"in t&&"object"==typeof t.sortable&&"containerId"in t.sortable&&"items"in t.sortable&&"index"in t.sortable)}const yd=[ls.Down,ls.Right,ls.Up,ls.Left],xd=(e,t)=>{let{context:{active:r,collisionRect:n,droppableRects:o,droppableContainers:i,over:a,scrollableAncestors:l}}=t;if(yd.includes(e.code)){if(e.preventDefault(),!r||!n)return;const t=[];i.getEnabled().forEach((r=>{if(!r||null!=r&&r.disabled)return;const i=o.get(r.id);if(i)switch(e.code){case ls.Down:n.top<i.top&&t.push(r);break;case ls.Up:n.top>i.top&&t.push(r);break;case ls.Left:n.left>i.left&&t.push(r);break;case ls.Right:n.left<i.left&&t.push(r)}}));const s=(e=>{let{collisionRect:t,droppableRects:r,droppableContainers:n}=e;const o=Ml(t),i=[];for(const e of n){const{id:t}=e,n=r.get(t);if(n){const r=Ml(n),a=o.reduce(((e,t,n)=>{return e+(o=r[n],i=t,Math.sqrt(Math.pow(o.x-i.x,2)+Math.pow(o.y-i.y,2)));var o,i}),0),l=Number((a/4).toFixed(4));i.push({id:t,data:{droppableContainer:e,value:l}})}}return i.sort(_l)})({active:r,collisionRect:n,droppableRects:o,droppableContainers:t,pointerCoordinates:null});let d=Al(s,"id");if(d===(null==a?void 0:a.id)&&s.length>1&&(d=s[1].id),null!=d){const e=i.get(r.id),t=i.get(d),a=t?o.get(t.id):null,s=null==t?void 0:t.node.current;if(s&&a&&e&&t){const r=Wl(s).some(((e,t)=>l[t]!==e)),o=wd(e,t),i=function(e,t){if(!vd(e)||!vd(t))return!1;if(!wd(e,t))return!1;return e.data.current.sortable.index<t.data.current.sortable.index}(e,t),d=r||!o?{x:0,y:0}:{x:i?n.width-a.width:0,y:i?n.height-a.height:0},c={x:a.left,y:a.top};return d.x&&d.y?c:pl(c,d)}}}};function wd(e,t){return!(!vd(e)||!vd(t))&&e.data.current.sortable.containerId===t.data.current.sortable.containerId}var $d=function(e,t){return $d=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])},$d(e,t)};var Cd=function(){return Cd=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var o in t=arguments[r])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e},Cd.apply(this,arguments)};var Dd="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};var Sd=function(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)},kd="object"==typeof Dd&&Dd&&Dd.Object===Object&&Dd,Ed="object"==typeof self&&self&&self.Object===Object&&self,Fd=kd||Ed||Function("return this")(),Od=Fd,Td=function(){return Od.Date.now()},_d=/\s/;var Id=function(e){for(var t=e.length;t--&&_d.test(e.charAt(t)););return t},Md=/^\s+/;var Ad=function(e){return e?e.slice(0,Id(e)+1).replace(Md,""):e},Bd=Fd.Symbol,jd=Bd,zd=Object.prototype,Rd=zd.hasOwnProperty,Ld=zd.toString,Pd=jd?jd.toStringTag:void 0;var Nd=function(e){var t=Rd.call(e,Pd),r=e[Pd];try{e[Pd]=void 0;var n=!0}catch(e){}var o=Ld.call(e);return n&&(t?e[Pd]=r:delete e[Pd]),o},Hd=Object.prototype.toString;var Wd=Nd,Yd=function(e){return Hd.call(e)},Vd=Bd?Bd.toStringTag:void 0;var Ud=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":Vd&&Vd in Object(e)?Wd(e):Yd(e)},Kd=function(e){return null!=e&&"object"==typeof e};var qd=Ad,Zd=Sd,Gd=function(e){return"symbol"==typeof e||Kd(e)&&"[object Symbol]"==Ud(e)},Xd=/^[-+]0x[0-9a-f]+$/i,Jd=/^0b[01]+$/i,Qd=/^0o[0-7]+$/i,ec=parseInt;var tc=Sd,rc=Td,nc=function(e){if("number"==typeof e)return e;if(Gd(e))return NaN;if(Zd(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=Zd(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=qd(e);var r=Jd.test(e);return r||Qd.test(e)?ec(e.slice(2),r?2:8):Xd.test(e)?NaN:+e},oc=Math.max,ic=Math.min;var ac=function(e,t,r){var n,o,i,a,l,s,d=0,c=!1,u=!1,f=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function h(t){var r=n,i=o;return n=o=void 0,d=t,a=e.apply(i,r)}function p(e){var r=e-s;return void 0===s||r>=t||r<0||u&&e-d>=i}function g(){var e=rc();if(p(e))return m(e);l=setTimeout(g,function(e){var r=t-(e-s);return u?ic(r,i-(e-d)):r}(e))}function m(e){return l=void 0,f&&n?h(e):(n=o=void 0,a)}function b(){var e=rc(),r=p(e);if(n=arguments,o=this,s=e,r){if(void 0===l)return function(e){return d=e,l=setTimeout(g,t),c?h(e):a}(s);if(u)return clearTimeout(l),l=setTimeout(g,t),h(s)}return void 0===l&&(l=setTimeout(g,t)),a}return t=nc(t)||0,tc(r)&&(c=!!r.leading,i=(u="maxWait"in r)?oc(nc(r.maxWait)||0,t):i,f="trailing"in r?!!r.trailing:f),b.cancel=function(){void 0!==l&&clearTimeout(l),d=0,n=s=o=l=void 0},b.flush=function(){return void 0===l?a:m(rc())},b},lc=ac,sc=Sd;var dc=function(e,t,r){var n=!0,o=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return sc(r)&&(n="leading"in r?!!r.leading:n,o="trailing"in r?!!r.trailing:o),lc(e,t,{leading:n,maxWait:t,trailing:o})},cc=function(e,t,r,n){switch(t){case"debounce":return ac(e,r,n);case"throttle":return dc(e,r,n);default:return e}},uc=function(e){return"function"==typeof e},fc=function(){return"undefined"==typeof window},hc=function(e){return e instanceof Element||e instanceof HTMLDocument},pc=function(e,t,r,n){return function(o){var i=o.width,a=o.height;t((function(t){return t.width===i&&t.height===a||t.width===i&&!n||t.height===a&&!r?t:(e&&uc(e)&&e(i,a),{width:i,height:a})}))}};!function(e){function t(t){var r=e.call(this,t)||this;r.cancelHandler=function(){r.resizeHandler&&r.resizeHandler.cancel&&(r.resizeHandler.cancel(),r.resizeHandler=null)},r.attachObserver=function(){var e=r.props,t=e.targetRef,n=e.observerOptions;if(!fc()){t&&t.current&&(r.targetRef.current=t.current);var o=r.getElement();o&&(r.observableElement&&r.observableElement===o||(r.observableElement=o,r.resizeObserver.observe(o,n)))}},r.getElement=function(){var e=r.props,t=e.querySelector,n=e.targetDomEl;if(fc())return null;if(t)return document.querySelector(t);if(n&&hc(n))return n;if(r.targetRef&&hc(r.targetRef.current))return r.targetRef.current;var o=z(r);if(!o)return null;switch(r.getRenderType()){case"renderProp":case"childFunction":case"child":case"childArray":return o;default:return o.parentElement}},r.createResizeHandler=function(e){var t=r.props,n=t.handleWidth,o=void 0===n||n,i=t.handleHeight,a=void 0===i||i,l=t.onResize;if(o||a){var s=pc(l,r.setState.bind(r),o,a);e.forEach((function(e){var t=e&&e.contentRect||{},n=t.width,o=t.height;!r.skipOnMount&&!fc()&&s({width:n,height:o}),r.skipOnMount=!1}))}},r.getRenderType=function(){var e=r.props,t=e.render,n=e.children;return uc(t)?"renderProp":uc(n)?"childFunction":v(n)?"child":Array.isArray(n)?"childArray":"parent"};var n=t.skipOnMount,o=t.refreshMode,i=t.refreshRate,a=void 0===i?1e3:i,l=t.refreshOptions;return r.state={width:void 0,height:void 0},r.skipOnMount=n,r.targetRef=y(),r.observableElement=null,fc()||(r.resizeHandler=cc(r.createResizeHandler,o,a,l),r.resizeObserver=new window.ResizeObserver(r.resizeHandler)),r}(function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");function r(){this.constructor=e}$d(e,t),e.prototype=null===t?Object.create(t):(r.prototype=t.prototype,new r)})(t,e),t.prototype.componentDidMount=function(){this.attachObserver()},t.prototype.componentDidUpdate=function(){this.attachObserver()},t.prototype.componentWillUnmount=function(){fc()||(this.observableElement=null,this.resizeObserver.disconnect(),this.cancelHandler())},t.prototype.render=function(){var e,t=this.props,r=t.render,o=t.children,i=t.nodeType,a=void 0===i?"div":i,l=this.state,s={width:l.width,height:l.height,targetRef:this.targetRef};switch(this.getRenderType()){case"renderProp":return r&&r(s);case"childFunction":return(e=o)(s);case"child":if((e=o).type&&"string"==typeof e.type){var d=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(n=Object.getOwnPropertySymbols(e);o<n.length;o++)t.indexOf(n[o])<0&&Object.prototype.propertyIsEnumerable.call(e,n[o])&&(r[n[o]]=e[n[o]])}return r}(s,["targetRef"]);return x(e,d)}return x(e,s);case"childArray":return(e=o).map((function(e){return!!e&&x(e,s)}));default:return n.createElement(a,null)}}}(w);var gc=fc()?d:p;function mc(e){void 0===e&&(e={});var t=e.skipOnMount,r=void 0!==t&&t,n=e.refreshMode,o=e.refreshRate,i=void 0===o?1e3:o,a=e.refreshOptions,s=e.handleWidth,d=void 0===s||s,c=e.handleHeight,u=void 0===c||c,f=e.targetRef,h=e.observerOptions,p=e.onResize,m=l(r),b=l(null),v=null!=f?f:b,y=l(),x=g({width:void 0,height:void 0}),w=x[0],$=x[1];return gc((function(){if(!fc()){var e=pc(p,$,d,u);y.current=cc((function(t){(d||u)&&t.forEach((function(t){var r=t&&t.contentRect||{},n=r.width,o=r.height;!m.current&&!fc()&&e({width:n,height:o}),m.current=!1}))}),n,i,a);var t=new window.ResizeObserver(y.current);return v.current&&t.observe(v.current,h),function(){t.disconnect();var e=y.current;e&&e.cancel&&e.cancel()}}}),[n,i,a,d,u,p,h,v.current]),Cd({ref:v},w)}class bc extends xs{}bc.activators=[{eventName:"onMouseDown",handler:({nativeEvent:e})=>vc(e.target)}];function vc(e){let t=e;for(;t;){if(t.dataset&&t.dataset.noDnd)return!1;t=t.parentElement}return!0}(class extends fs{}).activators=[{eventName:"onKeyDown",handler:({nativeEvent:e})=>vc(e.target)}];var yc={exports:{}};yc.exports=function(){var e=1e3,t=6e4,r=36e5,n="millisecond",o="second",i="minute",a="hour",l="day",s="week",d="month",c="quarter",u="year",f="date",h="Invalid Date",p=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,g=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,m={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(e){var t=["th","st","nd","rd"],r=e%100;return"["+e+(t[(r-20)%10]||t[r]||t[0])+"]"}},b=function(e,t,r){var n=String(e);return!n||n.length>=t?e:""+Array(t+1-n.length).join(r)+e},v={s:b,z:function(e){var t=-e.utcOffset(),r=Math.abs(t),n=Math.floor(r/60),o=r%60;return(t<=0?"+":"-")+b(n,2,"0")+":"+b(o,2,"0")},m:function e(t,r){if(t.date()<r.date())return-e(r,t);var n=12*(r.year()-t.year())+(r.month()-t.month()),o=t.clone().add(n,d),i=r-o<0,a=t.clone().add(n+(i?-1:1),d);return+(-(n+(r-o)/(i?o-a:a-o))||0)},a:function(e){return e<0?Math.ceil(e)||0:Math.floor(e)},p:function(e){return{M:d,y:u,w:s,d:l,D:f,h:a,m:i,s:o,ms:n,Q:c}[e]||String(e||"").toLowerCase().replace(/s$/,"")},u:function(e){return void 0===e}},y="en",x={};x[y]=m;var w="$isDayjsObject",$=function(e){return e instanceof k||!(!e||!e[w])},C=function e(t,r,n){var o;if(!t)return y;if("string"==typeof t){var i=t.toLowerCase();x[i]&&(o=i),r&&(x[i]=r,o=i);var a=t.split("-");if(!o&&a.length>1)return e(a[0])}else{var l=t.name;x[l]=t,o=l}return!n&&o&&(y=o),o||!n&&y},D=function(e,t){if($(e))return e.clone();var r="object"==typeof t?t:{};return r.date=e,r.args=arguments,new k(r)},S=v;S.l=C,S.i=$,S.w=function(e,t){return D(e,{locale:t.$L,utc:t.$u,x:t.$x,$offset:t.$offset})};var k=function(){function m(e){this.$L=C(e.locale,null,!0),this.parse(e),this.$x=this.$x||e.x||{},this[w]=!0}var b=m.prototype;return b.parse=function(e){this.$d=function(e){var t=e.date,r=e.utc;if(null===t)return new Date(NaN);if(S.u(t))return new Date;if(t instanceof Date)return new Date(t);if("string"==typeof t&&!/Z$/i.test(t)){var n=t.match(p);if(n){var o=n[2]-1||0,i=(n[7]||"0").substring(0,3);return r?new Date(Date.UTC(n[1],o,n[3]||1,n[4]||0,n[5]||0,n[6]||0,i)):new Date(n[1],o,n[3]||1,n[4]||0,n[5]||0,n[6]||0,i)}}return new Date(t)}(e),this.init()},b.init=function(){var e=this.$d;this.$y=e.getFullYear(),this.$M=e.getMonth(),this.$D=e.getDate(),this.$W=e.getDay(),this.$H=e.getHours(),this.$m=e.getMinutes(),this.$s=e.getSeconds(),this.$ms=e.getMilliseconds()},b.$utils=function(){return S},b.isValid=function(){return!(this.$d.toString()===h)},b.isSame=function(e,t){var r=D(e);return this.startOf(t)<=r&&r<=this.endOf(t)},b.isAfter=function(e,t){return D(e)<this.startOf(t)},b.isBefore=function(e,t){return this.endOf(t)<D(e)},b.$g=function(e,t,r){return S.u(e)?this[t]:this.set(r,e)},b.unix=function(){return Math.floor(this.valueOf()/1e3)},b.valueOf=function(){return this.$d.getTime()},b.startOf=function(e,t){var r=this,n=!!S.u(t)||t,c=S.p(e),h=function(e,t){var o=S.w(r.$u?Date.UTC(r.$y,t,e):new Date(r.$y,t,e),r);return n?o:o.endOf(l)},p=function(e,t){return S.w(r.toDate()[e].apply(r.toDate("s"),(n?[0,0,0,0]:[23,59,59,999]).slice(t)),r)},g=this.$W,m=this.$M,b=this.$D,v="set"+(this.$u?"UTC":"");switch(c){case u:return n?h(1,0):h(31,11);case d:return n?h(1,m):h(0,m+1);case s:var y=this.$locale().weekStart||0,x=(g<y?g+7:g)-y;return h(n?b-x:b+(6-x),m);case l:case f:return p(v+"Hours",0);case a:return p(v+"Minutes",1);case i:return p(v+"Seconds",2);case o:return p(v+"Milliseconds",3);default:return this.clone()}},b.endOf=function(e){return this.startOf(e,!1)},b.$set=function(e,t){var r,s=S.p(e),c="set"+(this.$u?"UTC":""),h=(r={},r[l]=c+"Date",r[f]=c+"Date",r[d]=c+"Month",r[u]=c+"FullYear",r[a]=c+"Hours",r[i]=c+"Minutes",r[o]=c+"Seconds",r[n]=c+"Milliseconds",r)[s],p=s===l?this.$D+(t-this.$W):t;if(s===d||s===u){var g=this.clone().set(f,1);g.$d[h](p),g.init(),this.$d=g.set(f,Math.min(this.$D,g.daysInMonth())).$d}else h&&this.$d[h](p);return this.init(),this},b.set=function(e,t){return this.clone().$set(e,t)},b.get=function(e){return this[S.p(e)]()},b.add=function(n,c){var f,h=this;n=Number(n);var p=S.p(c),g=function(e){var t=D(h);return S.w(t.date(t.date()+Math.round(e*n)),h)};if(p===d)return this.set(d,this.$M+n);if(p===u)return this.set(u,this.$y+n);if(p===l)return g(1);if(p===s)return g(7);var m=(f={},f[i]=t,f[a]=r,f[o]=e,f)[p]||1,b=this.$d.getTime()+n*m;return S.w(b,this)},b.subtract=function(e,t){return this.add(-1*e,t)},b.format=function(e){var t=this,r=this.$locale();if(!this.isValid())return r.invalidDate||h;var n=e||"YYYY-MM-DDTHH:mm:ssZ",o=S.z(this),i=this.$H,a=this.$m,l=this.$M,s=r.weekdays,d=r.months,c=r.meridiem,u=function(e,r,o,i){return e&&(e[r]||e(t,n))||o[r].slice(0,i)},f=function(e){return S.s(i%12||12,e,"0")},p=c||function(e,t,r){var n=e<12?"AM":"PM";return r?n.toLowerCase():n};return n.replace(g,(function(e,n){return n||function(e){switch(e){case"YY":return String(t.$y).slice(-2);case"YYYY":return S.s(t.$y,4,"0");case"M":return l+1;case"MM":return S.s(l+1,2,"0");case"MMM":return u(r.monthsShort,l,d,3);case"MMMM":return u(d,l);case"D":return t.$D;case"DD":return S.s(t.$D,2,"0");case"d":return String(t.$W);case"dd":return u(r.weekdaysMin,t.$W,s,2);case"ddd":return u(r.weekdaysShort,t.$W,s,3);case"dddd":return s[t.$W];case"H":return String(i);case"HH":return S.s(i,2,"0");case"h":return f(1);case"hh":return f(2);case"a":return p(i,a,!0);case"A":return p(i,a,!1);case"m":return String(a);case"mm":return S.s(a,2,"0");case"s":return String(t.$s);case"ss":return S.s(t.$s,2,"0");case"SSS":return S.s(t.$ms,3,"0");case"Z":return o}return null}(e)||o.replace(":","")}))},b.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},b.diff=function(n,f,h){var p,g=this,m=S.p(f),b=D(n),v=(b.utcOffset()-this.utcOffset())*t,y=this-b,x=function(){return S.m(g,b)};switch(m){case u:p=x()/12;break;case d:p=x();break;case c:p=x()/3;break;case s:p=(y-v)/6048e5;break;case l:p=(y-v)/864e5;break;case a:p=y/r;break;case i:p=y/t;break;case o:p=y/e;break;default:p=y}return h?p:S.a(p)},b.daysInMonth=function(){return this.endOf(d).$D},b.$locale=function(){return x[this.$L]},b.locale=function(e,t){if(!e)return this.$L;var r=this.clone(),n=C(e,t,!0);return n&&(r.$L=n),r},b.clone=function(){return S.w(this.$d,this)},b.toDate=function(){return new Date(this.valueOf())},b.toJSON=function(){return this.isValid()?this.toISOString():null},b.toISOString=function(){return this.$d.toISOString()},b.toString=function(){return this.$d.toUTCString()},m}(),E=k.prototype;return D.prototype=E,[["$ms",n],["$s",o],["$m",i],["$H",a],["$W",l],["$M",d],["$y",u],["$D",f]].forEach((function(e){E[e[1]]=function(t){return this.$g(t,e[0],e[1])}})),D.extend=function(e,t){return e.$i||(e(t,k,D),e.$i=!0),D},D.locale=C,D.isDayjs=$,D.unix=function(e){return D(1e3*e)},D.en=x[y],D.Ls=x,D.p={},D}();var xc=je(yc.exports),wc={exports:{}};wc.exports=function(){var e={LTS:"h:mm:ss A",LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D, YYYY",LLL:"MMMM D, YYYY h:mm A",LLLL:"dddd, MMMM D, YYYY h:mm A"},t=/(\[[^[]*\])|([-_:/.,()\s]+)|(A|a|YYYY|YY?|MM?M?M?|Do|DD?|hh?|HH?|mm?|ss?|S{1,3}|z|ZZ?)/g,r=/\d\d/,n=/\d\d?/,o=/\d*[^-_:/,()\s\d]+/,i={},a=function(e){return(e=+e)+(e>68?1900:2e3)},l=function(e){return function(t){this[e]=+t}},s=[/[+-]\d\d:?(\d\d)?|Z/,function(e){(this.zone||(this.zone={})).offset=function(e){if(!e)return 0;if("Z"===e)return 0;var t=e.match(/([+-]|\d\d)/g),r=60*t[1]+(+t[2]||0);return 0===r?0:"+"===t[0]?-r:r}(e)}],d=function(e){var t=i[e];return t&&(t.indexOf?t:t.s.concat(t.f))},c=function(e,t){var r,n=i.meridiem;if(n){for(var o=1;o<=24;o+=1)if(e.indexOf(n(o,0,t))>-1){r=o>12;break}}else r=e===(t?"pm":"PM");return r},u={A:[o,function(e){this.afternoon=c(e,!1)}],a:[o,function(e){this.afternoon=c(e,!0)}],S:[/\d/,function(e){this.milliseconds=100*+e}],SS:[r,function(e){this.milliseconds=10*+e}],SSS:[/\d{3}/,function(e){this.milliseconds=+e}],s:[n,l("seconds")],ss:[n,l("seconds")],m:[n,l("minutes")],mm:[n,l("minutes")],H:[n,l("hours")],h:[n,l("hours")],HH:[n,l("hours")],hh:[n,l("hours")],D:[n,l("day")],DD:[r,l("day")],Do:[o,function(e){var t=i.ordinal,r=e.match(/\d+/);if(this.day=r[0],t)for(var n=1;n<=31;n+=1)t(n).replace(/\[|\]/g,"")===e&&(this.day=n)}],M:[n,l("month")],MM:[r,l("month")],MMM:[o,function(e){var t=d("months"),r=(d("monthsShort")||t.map((function(e){return e.slice(0,3)}))).indexOf(e)+1;if(r<1)throw new Error;this.month=r%12||r}],MMMM:[o,function(e){var t=d("months").indexOf(e)+1;if(t<1)throw new Error;this.month=t%12||t}],Y:[/[+-]?\d+/,l("year")],YY:[r,function(e){this.year=a(e)}],YYYY:[/\d{4}/,l("year")],Z:s,ZZ:s};function f(r){var n,o;n=r,o=i&&i.formats;for(var a=(r=n.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g,(function(t,r,n){var i=n&&n.toUpperCase();return r||o[n]||e[n]||o[i].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g,(function(e,t,r){return t||r.slice(1)}))}))).match(t),l=a.length,s=0;s<l;s+=1){var d=a[s],c=u[d],f=c&&c[0],h=c&&c[1];a[s]=h?{regex:f,parser:h}:d.replace(/^\[|\]$/g,"")}return function(e){for(var t={},r=0,n=0;r<l;r+=1){var o=a[r];if("string"==typeof o)n+=o.length;else{var i=o.regex,s=o.parser,d=e.slice(n),c=i.exec(d)[0];s.call(t,c),e=e.replace(c,"")}}return function(e){var t=e.afternoon;if(void 0!==t){var r=e.hours;t?r<12&&(e.hours+=12):12===r&&(e.hours=0),delete e.afternoon}}(t),t}}return function(e,t,r){r.p.customParseFormat=!0,e&&e.parseTwoDigitYear&&(a=e.parseTwoDigitYear);var n=t.prototype,o=n.parse;n.parse=function(e){var t=e.date,n=e.utc,a=e.args;this.$u=n;var l=a[1];if("string"==typeof l){var s=!0===a[2],d=!0===a[3],c=s||d,u=a[2];d&&(u=a[2]),i=this.$locale(),!s&&u&&(i=r.Ls[u]),this.$d=function(e,t,r){try{if(["x","X"].indexOf(t)>-1)return new Date(("X"===t?1e3:1)*e);var n=f(t)(e),o=n.year,i=n.month,a=n.day,l=n.hours,s=n.minutes,d=n.seconds,c=n.milliseconds,u=n.zone,h=new Date,p=a||(o||i?1:h.getDate()),g=o||h.getFullYear(),m=0;o&&!i||(m=i>0?i-1:h.getMonth());var b=l||0,v=s||0,y=d||0,x=c||0;return u?new Date(Date.UTC(g,m,p,b,v,y,x+60*u.offset*1e3)):r?new Date(Date.UTC(g,m,p,b,v,y,x)):new Date(g,m,p,b,v,y,x)}catch(e){return new Date("")}}(t,l,n),this.init(),u&&!0!==u&&(this.$L=this.locale(u).$L),c&&t!=this.format(l)&&(this.$d=new Date("")),i={}}else if(l instanceof Array)for(var h=l.length,p=1;p<=h;p+=1){a[1]=l[p-1];var g=r.apply(this,a);if(g.isValid()){this.$d=g.$d,this.$L=g.$L,this.init();break}p===h&&(this.$d=new Date(""))}else o.call(this,e)}}}();var $c=je(wc.exports),Cc={exports:{}};Cc.exports=function(e,t,r){t.prototype.isBetween=function(e,t,n,o){var i=r(e),a=r(t),l="("===(o=o||"()")[0],s=")"===o[1];return(l?this.isAfter(i,n):!this.isBefore(i,n))&&(s?this.isBefore(a,n):!this.isAfter(a,n))||(l?this.isBefore(i,n):!this.isAfter(i,n))&&(s?this.isAfter(a,n):!this.isBefore(a,n))}};var Dc=je(Cc.exports),Sc={exports:{}};Sc.exports=function(e,t){t.prototype.isSameOrAfter=function(e,t){return this.isSame(e,t)||this.isAfter(e,t)}};var kc=je(Sc.exports),Ec={exports:{}};Ec.exports=function(e,t){t.prototype.isSameOrBefore=function(e,t){return this.isSame(e,t)||this.isBefore(e,t)}};var Fc,Oc,Tc=je(Ec.exports),_c={exports:{}};_c.exports=(Fc={year:0,month:1,day:2,hour:3,minute:4,second:5},Oc={},function(e,t,r){var n,o=function(e,t,r){void 0===r&&(r={});var n=new Date(e),o=function(e,t){void 0===t&&(t={});var r=t.timeZoneName||"short",n=e+"|"+r,o=Oc[n];return o||(o=new Intl.DateTimeFormat("en-US",{hour12:!1,timeZone:e,year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit",timeZoneName:r}),Oc[n]=o),o}(t,r);return o.formatToParts(n)},i=function(e,t){for(var n=o(e,t),i=[],a=0;a<n.length;a+=1){var l=n[a],s=l.type,d=l.value,c=Fc[s];c>=0&&(i[c]=parseInt(d,10))}var u=i[3],f=24===u?0:u,h=i[0]+"-"+i[1]+"-"+i[2]+" "+f+":"+i[4]+":"+i[5]+":000",p=+e;return(r.utc(h).valueOf()-(p-=p%1e3))/6e4},a=t.prototype;a.tz=function(e,t){void 0===e&&(e=n);var o=this.utcOffset(),i=this.toDate(),a=i.toLocaleString("en-US",{timeZone:e}),l=Math.round((i-new Date(a))/1e3/60),s=r(a,{locale:this.$L}).$set("millisecond",this.$ms).utcOffset(15*-Math.round(i.getTimezoneOffset()/15)-l,!0);if(t){var d=s.utcOffset();s=s.add(o-d,"minute")}return s.$x.$timezone=e,s},a.offsetName=function(e){var t=this.$x.$timezone||r.tz.guess(),n=o(this.valueOf(),t,{timeZoneName:e}).find((function(e){return"timezonename"===e.type.toLowerCase()}));return n&&n.value};var l=a.startOf;a.startOf=function(e,t){if(!this.$x||!this.$x.$timezone)return l.call(this,e,t);var n=r(this.format("YYYY-MM-DD HH:mm:ss:SSS"),{locale:this.$L});return l.call(n,e,t).tz(this.$x.$timezone,!0)},r.tz=function(e,t,o){var a=o&&t,l=o||t||n,s=i(+r(),l);if("string"!=typeof e)return r(e).tz(l);var d=function(e,t,r){var n=e-60*t*1e3,o=i(n,r);if(t===o)return[n,t];var a=i(n-=60*(o-t)*1e3,r);return o===a?[n,o]:[e-60*Math.min(o,a)*1e3,Math.max(o,a)]}(r.utc(e,a).valueOf(),s,l),c=d[0],u=d[1],f=r(c).utcOffset(u);return f.$x.$timezone=l,f},r.tz.guess=function(){return Intl.DateTimeFormat().resolvedOptions().timeZone},r.tz.setDefault=function(e){n=e}});var Ic,Mc=je(_c.exports);xc.extend(Dc),xc.extend(Tc),xc.extend(kc),xc.extend($c),xc.extend(Mc),function(e){e.generateDays=e=>{const t=e.startOf("month"),r=xc(t).startOf("week");return Ac(r).map((e=>Bc(e)))},e.generateDaysForCurrentWeek=e=>{const t=e.startOf("week");return Bc(t)},e.generateMonths=e=>{const t=[];for(let r=0;r<12;r++){const n=e.month(r);t.push(xc(n))}return t},e.generateDecadeOfYears=e=>{const t=e.year(),r=10*Math.floor(t/10),n=e.year(r),o=[n.subtract(1,"year"),n];for(let e=1;e<11;e++)o.push(n.add(e,"year"));return o},e.getStartEndDecade=e=>{const t=10*Math.floor(+e.format("YYYY")/10);return{beginDecade:t,endDecade:+xc(`${t+9}-01-01`).format("YYYY")}},e.convertTo12HourFormat=e=>{const t=xc(e,"HH:mm");return t.isValid()?t.format("h:mm a"):""},e.isWithinRange=(e,t,r,n="day")=>!t&&!r||(t&&r?e.isBetween(t,r,n,"[]"):t?e.isSameOrAfter(t,n):e.isSameOrBefore(r,n)),e.isPreviousMonthWithinRange=(t,r)=>e.isWithinRange(t.subtract(1,"month"),r,void 0,"month"),e.isPreviousYearWithinRange=(t,r)=>e.isWithinRange(t.subtract(1,"year"),r,void 0,"year"),e.isPreviousDecadeWithinRange=(t,r)=>{const{beginDecade:n}=e.getStartEndDecade(t);return e.isWithinRange(t.year(n).subtract(1,"year"),r,void 0,"year")},e.isNextMonthWithinRange=(t,r)=>e.isWithinRange(t.add(1,"month"),void 0,r,"month"),e.isNextYearWithinRange=(t,r)=>e.isWithinRange(t.add(1,"year"),void 0,r,"year"),e.isNextDecadeWithinRange=(t,r)=>{const{endDecade:n}=e.getStartEndDecade(t);return e.isWithinRange(t.year(n).add(1,"year"),void 0,r,"year")},e.getWeekStartEnd=e=>({start:e.startOf("week").format("YYYY-MM-DD"),end:e.endOf("week").format("YYYY-MM-DD")}),e.getFixedRangeStartEnd=(e,t)=>({start:e.format("YYYY-MM-DD"),end:e.add(t-1,"day").format("YYYY-MM-DD")}),e.isDisabledDay=(t,r,n,o)=>{const i=e.isWithinRange(t,n?xc(n):void 0,o?xc(o):void 0),a=r&&r.includes(t.format("YYYY-MM-DD"));return!i||!!a}}(Ic||(Ic={}));const Ac=e=>{const t=[e];for(let r=1;r<6;r++){const n=e.add(r,"week");t.push(n)}return t},Bc=e=>{const t=[];for(let r=0;r<7;r++){const n=e.add(r,"day");t.push(n)}return t},jc=[1,3,5,7,8,10,12],zc=[4,6,9,11];var Rc,Lc;!function(e){e.clampDay=(t,r,n)=>{const o=parseInt(t),i=parseInt(r),a=parseInt(n);return 0==o?"1":jc.includes(i)?Math.min(o,31).toString():zc.includes(i)?Math.min(o,30).toString():2===i?e.isLeapYear(a)?Math.min(o,29).toString():Math.min(o,28).toString():t},e.clampMonth=e=>{const t=parseInt(e);return 0==t?"1":t>12?"12":e},e.isLeapYear=e=>e%4==0&&e%100!=0||e%400==0,e.getTimeDiffInMinutes=(e,t,r="HH:mm")=>{const n=xc(e,r);return xc(t,r).diff(n,"minute")},e.toDayjs=e=>e?xc(e):xc(),e.addMinutesToTime=(e,t,r="HH:mm")=>xc(e,r).add(t,"minutes").format(r),e.isSame=(e,t,r="day")=>xc(e).isSame(xc(t),r)}(Rc||(Rc={})),function(e){e.isDateDisabled=(e,t)=>{const{disabledDates:r,minDate:n,maxDate:o}=t;return!!(e&&r&&r.length&&r.includes(e))||(!(!n||!xc(e).isBefore(n,"day"))||!(!o||!xc(e).isAfter(o,"day")))},e.sanitizeInput=e=>{if(e){const r=t(e);if(xc(r,"YYYY-MM-DD",!0).isValid())return r}return""};const t=e=>{const t=e.match(/^(\d{1,4})-(\d{1,2})-(\d{1,2})$/);if(!t)return"";const[,r,n,o]=t;if(r.length<=2||parseInt(r,10)<100)return"";return`${r.padStart(4,"0")}-${n.padStart(2,"0")}-${o.padStart(2,"0")}`}}(Lc||(Lc={}));const Pc=()=>{const e=$.split(".");return parseInt(e[0],10)>=19},Nc=(...e)=>t=>{const r=[];for(const n of e)if("function"==typeof n){const e=n(t),o="function"==typeof e;r.push(o?e:()=>n(null))}else n.current=t,r.push((()=>{n.current=null}));if(Pc())return()=>{for(const e of r)e()}};var Hc,Wc;!function(e){e.generate=()=>Math.random().toString(36).substring(2,9)}(Hc||(Hc={})),function(e){e.transformWithSpaces=(e,t)=>{const r="(.{"+t+"})";return e.replace(/[^\dA-Z]/gi,"").replace(new RegExp(r,"g"),"$1 ").trim()},e.padValue=(e,t)=>{if("0"===e)return t?e:e.padStart(2,"0");if(""===e)return e;return parseInt(e).toString().padStart(2,"0")},e.shouldTruncateToTwoLines=(e,t)=>{const r=Math.floor(t/9);return e.length>=2*r||1===e.split(" ").length&&e.length>r},e.truncateOneLine=(e,t,r,n,o=8)=>{let i=0;t>r&&(i=Math.floor((t-r)/o));const a=n+i;if(a<e.length){const t=Math.floor(a/2);return e.substring(0,t)+" ... "+e.substring(e.length-t,e.length)}return e},e.truncateTwoLines=(e,t,r,n=1.2)=>{const o=Math.floor(2*t/(.6*r))*(2/n);if(e.length<=o)return e;const i=Math.floor(.6*o),a=Math.floor(.2*o);return`${e.substring(0,i)}...${e.substring(e.length-a)}`},e.getTextWidth=(t,r)=>{if("undefined"==typeof document)return 0;const n=(e.getTextWidth.canvas||(e.getTextWidth.canvas=document.createElement("canvas"))).getContext("2d");n.font=r;return n.measureText(t).width},e.maskValue=(e,r)=>{if(!e)return e;const{maskRange:n,unmaskRange:o,maskChar:i="•",maskRegex:a,maskTransformer:l}=r;if(l)return l(e);if(a)return e.replace(a,i);if(n){const{startIndex:r,endIndex:o}=t(n[0],n[1]);return e.substring(0,r)+i.repeat(e.substring(r,o+1).length)+e.substring(o+1)}if(o){const{startIndex:r,endIndex:n}=t(o[0],o[1]);return i.repeat(e.substring(0,r).length)+e.substring(r,n+1)+i.repeat(e.substring(n+1).length)}return e};const t=(e,t)=>e<t?{startIndex:e,endIndex:t}:{startIndex:t,endIndex:e},r=new Intl.PluralRules("en",{type:"ordinal"}),n=new Map([["one","st"],["two","nd"],["few","rd"],["other","th"]]);e.formatOrdinal=e=>{const t=r.select(e);return`${e}${n.get(t)}`},e.getMaskedDescription=(e,t,r)=>{if(!e||"masked"!==t||!r)return"";const[n,o]=r,i=n>0,a=o<e.length-1,l=i?e.substring(0,n):"",s=a?e.substring(o+1):"";return i&&a?`Starting with ${l} and ending with ${s}`:i?`Starting with ${l}`:a?`Ending with ${s}`:""}}(Wc||(Wc={}));function Yc(e){const t=l(null);p((()=>{t.current=e}),[e]);return c(((...e)=>{var r;return null===(r=t.current)||void 0===r?void 0:r.call(t,...e)}),[])}const Vc=(e,t,r="window",n)=>{const o=l();d((()=>{o.current=t}),[t]),d((()=>{let t;switch(r){case"window":t=window;break;case"document":t=document;break;default:t=r}if(!t||!t.addEventListener)return;const i=e=>{var t;return null===(t=o.current)||void 0===t?void 0:t.call(o,e)};return t.addEventListener(e,i,n),()=>{null==t||t.removeEventListener(e,i,n)}}),[e,r])},Uc=()=>{const[e,t]=g(!1);return d((()=>{t(!0)}),[]),e};function Kc({ref:e,formatter:t}){return()=>{var r;const n=e.current;if(!n)return;const o=n.value,i=t(o),a=null!==(r=n.selectionEnd)&&void 0!==r?r:0,l=o.substring(0,a),s=t(l),d=l.length-s.length,c=Math.max(0,a-d);return{nextValue:i,updateCaretPosition:()=>{n.value=i,n.setSelectionRange(c,c)}}}}const qc=e=>{const t=(e=>{const t=l(e),r=l();return d((()=>{r.current=t.current,t.current=e}),[e]),r.current})(e);return t!==e},Zc=e=>{const[t,r]=g(e),n=l(e);return[t,c((e=>{n.current=e,r(e)}),[]),n]};var Gc,Xc={exports:{}};Gc=e=>(()=>{var t={"./node_modules/css-mediaquery/index.js":
/*!**********************************************!*\
	  !*** ./node_modules/css-mediaquery/index.js ***!
	  \**********************************************/(e,t)=>{t.match=function(e,t){return l(e).some((function(e){var r=e.inverse,n="all"===e.type||t.type===e.type;if(n&&r||!n&&!r)return!1;var o=e.expressions.every((function(e){var r=e.feature,n=e.modifier,o=e.value,i=t[r];if(!i)return!1;switch(r){case"orientation":case"scan":return i.toLowerCase()===o.toLowerCase();case"width":case"height":case"device-width":case"device-height":o=c(o),i=c(i);break;case"resolution":o=d(o),i=d(i);break;case"aspect-ratio":case"device-aspect-ratio":case"device-pixel-ratio":o=s(o),i=s(i);break;case"grid":case"color":case"color-index":case"monochrome":o=parseInt(o,10)||1,i=parseInt(i,10)||0}switch(n){case"min":return i>=o;case"max":return i<=o;default:return i===o}}));return o&&!r||!o&&r}))},t.parse=l;var r=/(?:(only|not)?\s*([^\s\(\)]+)(?:\s*and)?\s*)?(.+)?/i,n=/\(\s*([^\s\:\)]+)\s*(?:\:\s*([^\s\)]+))?\s*\)/,o=/^(?:(min|max)-)?(.+)/,i=/(em|rem|px|cm|mm|in|pt|pc)?$/,a=/(dpi|dpcm|dppx)?$/;function l(e){return e.split(",").map((function(e){var t=(e=e.trim()).match(r),i=t[1],a=t[2],l=t[3]||"",s={};return s.inverse=!!i&&"not"===i.toLowerCase(),s.type=a?a.toLowerCase():"all",l=l.match(/\([^\)]+\)/g)||[],s.expressions=l.map((function(e){var t=e.match(n),r=t[1].toLowerCase().match(o);return{modifier:r[1],feature:r[2],value:t[2]}})),s}))}function s(e){var t,r=Number(e);return r||(r=(t=e.match(/^(\d+)\s*\/\s*(\d+)$/))[1]/t[2]),r}function d(e){var t=parseFloat(e);switch(String(e).match(a)[1]){case"dpcm":return t/2.54;case"dppx":return 96*t;default:return t}}function c(e){var t=parseFloat(e);switch(String(e).match(i)[1]){case"em":case"rem":return 16*t;case"cm":return 96*t/2.54;case"mm":return 96*t/2.54/10;case"in":return 96*t;case"pt":return 72*t;case"pc":return 72*t/12;default:return t}}},"./node_modules/hyphenate-style-name/index.js":
/*!****************************************************!*\
	  !*** ./node_modules/hyphenate-style-name/index.js ***!
	  \****************************************************/(e,t,r)=>{r.r(t),r.d(t,{default:()=>l});var n=/[A-Z]/g,o=/^ms-/,i={};function a(e){return"-"+e.toLowerCase()}const l=function(e){if(i.hasOwnProperty(e))return i[e];var t=e.replace(n,a);return i[e]=o.test(t)?"-"+t:t}},"./node_modules/matchmediaquery/index.js":
/*!***********************************************!*\
	  !*** ./node_modules/matchmediaquery/index.js ***!
	  \***********************************************/(e,t,r)=>{var n=r(/*! css-mediaquery */"./node_modules/css-mediaquery/index.js").match,o="undefined"!=typeof window?window.matchMedia:null;function i(e,t,r){var i=this;if(o&&!r){var a=o.call(window,e);this.matches=a.matches,this.media=a.media,a.addListener(l)}else this.matches=n(e,t),this.media=e;function l(e){i.matches=e.matches,i.media=e.media}this.addListener=function(e){a&&a.addListener(e)},this.removeListener=function(e){a&&a.removeListener(e)},this.dispose=function(){a&&a.removeListener(l)}}e.exports=function(e,t,r){return new i(e,t,r)}},"./node_modules/object-assign/index.js":
/*!*********************************************!*\
	  !*** ./node_modules/object-assign/index.js ***!
	  \*********************************************/e=>{
/*
	object-assign
	(c) Sindre Sorhus
	@license MIT
	*/
var t=Object.getOwnPropertySymbols,r=Object.prototype.hasOwnProperty,n=Object.prototype.propertyIsEnumerable;e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},r=0;r<10;r++)t["_"+String.fromCharCode(r)]=r;var n=Object.getOwnPropertyNames(t).map((function(e){return t[e]}));if("0123456789"!==n.join(""))return!1;var o={};return"abcdefghijklmnopqrst".split("").forEach((function(e){o[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},o)).join("")}catch(e){return!1}}()?Object.assign:function(e,o){for(var i,a,l=function(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}(e),s=1;s<arguments.length;s++){for(var d in i=Object(arguments[s]))r.call(i,d)&&(l[d]=i[d]);if(t){a=t(i);for(var c=0;c<a.length;c++)n.call(i,a[c])&&(l[a[c]]=i[a[c]])}}return l}},"./node_modules/prop-types/checkPropTypes.js":
/*!***************************************************!*\
	  !*** ./node_modules/prop-types/checkPropTypes.js ***!
	  \***************************************************/(e,t,r)=>{var n,o=r(/*! ./lib/ReactPropTypesSecret */"./node_modules/prop-types/lib/ReactPropTypesSecret.js"),i={},a=r(/*! ./lib/has */"./node_modules/prop-types/lib/has.js");function l(e,t,r,l,s){for(var d in e)if(a(e,d)){var c;try{if("function"!=typeof e[d]){var u=Error((l||"React class")+": "+r+" type `"+d+"` is invalid; it must be a function, usually from the `prop-types` package, but received `"+typeof e[d]+"`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");throw u.name="Invariant Violation",u}c=e[d](t,d,l,r,null,o)}catch(e){c=e}if(!c||c instanceof Error||n((l||"React class")+": type specification of "+r+" `"+d+"` is invalid; the type checker function must return `null` or an `Error` but returned a "+typeof c+". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."),c instanceof Error&&!(c.message in i)){i[c.message]=!0;var f=s?s():"";n("Failed "+r+" type: "+c.message+(null!=f?f:""))}}}n=function(e){var t="Warning: "+e;"undefined"!=typeof console&&console.error(t);try{throw new Error(t)}catch(e){}},l.resetWarningCache=function(){i={}},e.exports=l},"./node_modules/prop-types/factoryWithTypeCheckers.js":
/*!************************************************************!*\
	  !*** ./node_modules/prop-types/factoryWithTypeCheckers.js ***!
	  \************************************************************/(e,t,r)=>{var n,o=r(/*! react-is */"./node_modules/react-is/index.js"),i=r(/*! object-assign */"./node_modules/object-assign/index.js"),a=r(/*! ./lib/ReactPropTypesSecret */"./node_modules/prop-types/lib/ReactPropTypesSecret.js"),l=r(/*! ./lib/has */"./node_modules/prop-types/lib/has.js"),s=r(/*! ./checkPropTypes */"./node_modules/prop-types/checkPropTypes.js");function d(){return null}n=function(e){var t="Warning: "+e;"undefined"!=typeof console&&console.error(t);try{throw new Error(t)}catch(e){}},e.exports=function(e,t){var r="function"==typeof Symbol&&Symbol.iterator,c="<<anonymous>>",u={array:g("array"),bigint:g("bigint"),bool:g("boolean"),func:g("function"),number:g("number"),object:g("object"),string:g("string"),symbol:g("symbol"),any:p(d),arrayOf:function(e){return p((function(t,r,n,o,i){if("function"!=typeof e)return new h("Property `"+i+"` of component `"+n+"` has invalid PropType notation inside arrayOf.");var l=t[r];if(!Array.isArray(l))return new h("Invalid "+o+" `"+i+"` of type `"+v(l)+"` supplied to `"+n+"`, expected an array.");for(var s=0;s<l.length;s++){var d=e(l,s,n,o,i+"["+s+"]",a);if(d instanceof Error)return d}return null}))},element:p((function(t,r,n,o,i){var a=t[r];return e(a)?null:new h("Invalid "+o+" `"+i+"` of type `"+v(a)+"` supplied to `"+n+"`, expected a single ReactElement.")})),elementType:p((function(e,t,r,n,i){var a=e[t];return o.isValidElementType(a)?null:new h("Invalid "+n+" `"+i+"` of type `"+v(a)+"` supplied to `"+r+"`, expected a single ReactElement type.")})),instanceOf:function(e){return p((function(t,r,n,o,i){if(!(t[r]instanceof e)){var a=e.name||c;return new h("Invalid "+o+" `"+i+"` of type `"+((l=t[r]).constructor&&l.constructor.name?l.constructor.name:c)+"` supplied to `"+n+"`, expected instance of `"+a+"`.")}var l;return null}))},node:p((function(e,t,r,n,o){return b(e[t])?null:new h("Invalid "+n+" `"+o+"` supplied to `"+r+"`, expected a ReactNode.")})),objectOf:function(e){return p((function(t,r,n,o,i){if("function"!=typeof e)return new h("Property `"+i+"` of component `"+n+"` has invalid PropType notation inside objectOf.");var s=t[r],d=v(s);if("object"!==d)return new h("Invalid "+o+" `"+i+"` of type `"+d+"` supplied to `"+n+"`, expected an object.");for(var c in s)if(l(s,c)){var u=e(s,c,n,o,i+"."+c,a);if(u instanceof Error)return u}return null}))},oneOf:function(e){return Array.isArray(e)?p((function(t,r,n,o,i){for(var a=t[r],l=0;l<e.length;l++)if(f(a,e[l]))return null;var s=JSON.stringify(e,(function(e,t){return"symbol"===y(t)?String(t):t}));return new h("Invalid "+o+" `"+i+"` of value `"+String(a)+"` supplied to `"+n+"`, expected one of "+s+".")})):(n(arguments.length>1?"Invalid arguments supplied to oneOf, expected an array, got "+arguments.length+" arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z]).":"Invalid argument supplied to oneOf, expected an array."),d)},oneOfType:function(e){if(!Array.isArray(e))return n("Invalid argument supplied to oneOfType, expected an instance of array."),d;for(var t=0;t<e.length;t++){var r=e[t];if("function"!=typeof r)return n("Invalid argument supplied to oneOfType. Expected an array of check functions, but received "+x(r)+" at index "+t+"."),d}return p((function(t,r,n,o,i){for(var s=[],d=0;d<e.length;d++){var c=(0,e[d])(t,r,n,o,i,a);if(null==c)return null;c.data&&l(c.data,"expectedType")&&s.push(c.data.expectedType)}return new h("Invalid "+o+" `"+i+"` supplied to `"+n+"`"+(s.length>0?", expected one of type ["+s.join(", ")+"]":"")+".")}))},shape:function(e){return p((function(t,r,n,o,i){var l=t[r],s=v(l);if("object"!==s)return new h("Invalid "+o+" `"+i+"` of type `"+s+"` supplied to `"+n+"`, expected `object`.");for(var d in e){var c=e[d];if("function"!=typeof c)return m(n,o,i,d,y(c));var u=c(l,d,n,o,i+"."+d,a);if(u)return u}return null}))},exact:function(e){return p((function(t,r,n,o,s){var d=t[r],c=v(d);if("object"!==c)return new h("Invalid "+o+" `"+s+"` of type `"+c+"` supplied to `"+n+"`, expected `object`.");var u=i({},t[r],e);for(var f in u){var p=e[f];if(l(e,f)&&"function"!=typeof p)return m(n,o,s,f,y(p));if(!p)return new h("Invalid "+o+" `"+s+"` key `"+f+"` supplied to `"+n+"`.\nBad object: "+JSON.stringify(t[r],null,"  ")+"\nValid keys: "+JSON.stringify(Object.keys(e),null,"  "));var g=p(d,f,n,o,s+"."+f,a);if(g)return g}return null}))}};function f(e,t){return e===t?0!==e||1/e==1/t:e!=e&&t!=t}function h(e,t){this.message=e,this.data=t&&"object"==typeof t?t:{},this.stack=""}function p(e){var r={},o=0;function i(i,l,s,d,u,f,p){if(d=d||c,f=f||s,p!==a){if(t){var g=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types");throw g.name="Invariant Violation",g}if("undefined"!=typeof console){var m=d+":"+s;!r[m]&&o<3&&(n("You are manually calling a React.PropTypes validation function for the `"+f+"` prop on `"+d+"`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."),r[m]=!0,o++)}}return null==l[s]?i?null===l[s]?new h("The "+u+" `"+f+"` is marked as required in `"+d+"`, but its value is `null`."):new h("The "+u+" `"+f+"` is marked as required in `"+d+"`, but its value is `undefined`."):null:e(l,s,d,u,f)}var l=i.bind(null,!1);return l.isRequired=i.bind(null,!0),l}function g(e){return p((function(t,r,n,o,i,a){var l=t[r];return v(l)!==e?new h("Invalid "+o+" `"+i+"` of type `"+y(l)+"` supplied to `"+n+"`, expected `"+e+"`.",{expectedType:e}):null}))}function m(e,t,r,n,o){return new h((e||"React class")+": "+t+" type `"+r+"."+n+"` is invalid; it must be a function, usually from the `prop-types` package, but received `"+o+"`.")}function b(t){switch(typeof t){case"number":case"string":case"undefined":return!0;case"boolean":return!t;case"object":if(Array.isArray(t))return t.every(b);if(null===t||e(t))return!0;var n=function(e){var t=e&&(r&&e[r]||e["@@iterator"]);if("function"==typeof t)return t}(t);if(!n)return!1;var o,i=n.call(t);if(n!==t.entries){for(;!(o=i.next()).done;)if(!b(o.value))return!1}else for(;!(o=i.next()).done;){var a=o.value;if(a&&!b(a[1]))return!1}return!0;default:return!1}}function v(e){var t=typeof e;return Array.isArray(e)?"array":e instanceof RegExp?"object":function(e,t){return"symbol"===e||!!t&&("Symbol"===t["@@toStringTag"]||"function"==typeof Symbol&&t instanceof Symbol)}(t,e)?"symbol":t}function y(e){if(null==e)return""+e;var t=v(e);if("object"===t){if(e instanceof Date)return"date";if(e instanceof RegExp)return"regexp"}return t}function x(e){var t=y(e);switch(t){case"array":case"object":return"an "+t;case"boolean":case"date":case"regexp":return"a "+t;default:return t}}return h.prototype=Error.prototype,u.checkPropTypes=s,u.resetWarningCache=s.resetWarningCache,u.PropTypes=u,u}},"./node_modules/prop-types/index.js":
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
	  \***********************************************************/(e,t)=>{!function(){var e="function"==typeof Symbol&&Symbol.for,r=e?Symbol.for("react.element"):60103,n=e?Symbol.for("react.portal"):60106,o=e?Symbol.for("react.fragment"):60107,i=e?Symbol.for("react.strict_mode"):60108,a=e?Symbol.for("react.profiler"):60114,l=e?Symbol.for("react.provider"):60109,s=e?Symbol.for("react.context"):60110,d=e?Symbol.for("react.async_mode"):60111,c=e?Symbol.for("react.concurrent_mode"):60111,u=e?Symbol.for("react.forward_ref"):60112,f=e?Symbol.for("react.suspense"):60113,h=e?Symbol.for("react.suspense_list"):60120,p=e?Symbol.for("react.memo"):60115,g=e?Symbol.for("react.lazy"):60116,m=e?Symbol.for("react.block"):60121,b=e?Symbol.for("react.fundamental"):60117,v=e?Symbol.for("react.responder"):60118,y=e?Symbol.for("react.scope"):60119;function x(e){if("object"==typeof e&&null!==e){var t=e.$$typeof;switch(t){case r:var h=e.type;switch(h){case d:case c:case o:case a:case i:case f:return h;default:var m=h&&h.$$typeof;switch(m){case s:case u:case g:case p:case l:return m;default:return t}}case n:return t}}}var w=d,$=c,C=s,D=l,S=r,k=u,E=o,F=g,O=p,T=n,_=a,I=i,M=f,A=!1;function B(e){return x(e)===c}t.AsyncMode=w,t.ConcurrentMode=$,t.ContextConsumer=C,t.ContextProvider=D,t.Element=S,t.ForwardRef=k,t.Fragment=E,t.Lazy=F,t.Memo=O,t.Portal=T,t.Profiler=_,t.StrictMode=I,t.Suspense=M,t.isAsyncMode=function(e){return A||(A=!0,console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")),B(e)||x(e)===d},t.isConcurrentMode=B,t.isContextConsumer=function(e){return x(e)===s},t.isContextProvider=function(e){return x(e)===l},t.isElement=function(e){return"object"==typeof e&&null!==e&&e.$$typeof===r},t.isForwardRef=function(e){return x(e)===u},t.isFragment=function(e){return x(e)===o},t.isLazy=function(e){return x(e)===g},t.isMemo=function(e){return x(e)===p},t.isPortal=function(e){return x(e)===n},t.isProfiler=function(e){return x(e)===a},t.isStrictMode=function(e){return x(e)===i},t.isSuspense=function(e){return x(e)===f},t.isValidElementType=function(e){return"string"==typeof e||"function"==typeof e||e===o||e===c||e===a||e===i||e===f||e===h||"object"==typeof e&&null!==e&&(e.$$typeof===g||e.$$typeof===p||e.$$typeof===l||e.$$typeof===s||e.$$typeof===u||e.$$typeof===b||e.$$typeof===v||e.$$typeof===y||e.$$typeof===m)},t.typeOf=x}()},"./node_modules/react-is/index.js":
/*!****************************************!*\
	  !*** ./node_modules/react-is/index.js ***!
	  \****************************************/(e,t,r)=>{e.exports=r(/*! ./cjs/react-is.development.js */"./node_modules/react-is/cjs/react-is.development.js")},"./node_modules/shallow-equal/dist/index.esm.js":
/*!******************************************************!*\
	  !*** ./node_modules/shallow-equal/dist/index.esm.js ***!
	  \******************************************************/(e,t,r)=>{function n(e,t){if(e===t)return!0;if(!e||!t)return!1;var r=Object.keys(e),n=Object.keys(t),o=r.length;if(n.length!==o)return!1;for(var i=0;i<o;i++){var a=r[i];if(e[a]!==t[a]||!Object.prototype.hasOwnProperty.call(t,a))return!1}return!0}function o(e,t){if(e===t)return!0;if(!e||!t)return!1;var r=e.length;if(t.length!==r)return!1;for(var n=0;n<r;n++)if(e[n]!==t[n])return!1;return!0}r.r(t),r.d(t,{shallowEqualArrays:()=>o,shallowEqualObjects:()=>n})},"./src/Component.ts":
/*!**************************!*\
	  !*** ./src/Component.ts ***!
	  \**************************/function(e,t,r){var n=this&&this.__rest||function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(n=Object.getOwnPropertySymbols(e);o<n.length;o++)t.indexOf(n[o])<0&&Object.prototype.propertyIsEnumerable.call(e,n[o])&&(r[n[o]]=e[n[o]])}return r},o=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var i=o(r(/*! ./useMediaQuery */"./src/useMediaQuery.ts"));t.default=function(e){var t=e.children,r=e.device,o=e.onChange,a=n(e,["children","device","onChange"]),l=(0,i.default)(a,r,o);return"function"==typeof t?t(l):l?t:null}},"./src/Context.ts":
/*!************************!*\
	  !*** ./src/Context.ts ***!
	  \************************/(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0});var n=(0,r(/*! react */"react").createContext)(void 0);t.default=n},"./src/index.ts":
/*!**********************!*\
	  !*** ./src/index.ts ***!
	  \**********************/function(e,t,r){var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.Context=t.toQuery=t.useMediaQuery=t.default=void 0;var o=n(r(/*! ./useMediaQuery */"./src/useMediaQuery.ts"));t.useMediaQuery=o.default;var i=n(r(/*! ./Component */"./src/Component.ts"));t.default=i.default;var a=n(r(/*! ./toQuery */"./src/toQuery.ts"));t.toQuery=a.default;var l=n(r(/*! ./Context */"./src/Context.ts"));t.Context=l.default},"./src/mediaQuery.ts":
/*!***************************!*\
	  !*** ./src/mediaQuery.ts ***!
	  \***************************/function(e,t,r){var n=this&&this.__assign||function(){return n=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var o in t=arguments[r])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e},n.apply(this,arguments)},o=this&&this.__rest||function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(n=Object.getOwnPropertySymbols(e);o<n.length;o++)t.indexOf(n[o])<0&&Object.prototype.propertyIsEnumerable.call(e,n[o])&&(r[n[o]]=e[n[o]])}return r},i=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var a=i(r(/*! prop-types */"./node_modules/prop-types/index.js")),l=a.default.oneOfType([a.default.string,a.default.number]),s={all:a.default.bool,grid:a.default.bool,aural:a.default.bool,braille:a.default.bool,handheld:a.default.bool,print:a.default.bool,projection:a.default.bool,screen:a.default.bool,tty:a.default.bool,tv:a.default.bool,embossed:a.default.bool},d={orientation:a.default.oneOf(["portrait","landscape"]),scan:a.default.oneOf(["progressive","interlace"]),aspectRatio:a.default.string,deviceAspectRatio:a.default.string,height:l,deviceHeight:l,width:l,deviceWidth:l,color:a.default.bool,colorIndex:a.default.bool,monochrome:a.default.bool,resolution:l,type:Object.keys(s)},c=o(d,["type"]),u=n({minAspectRatio:a.default.string,maxAspectRatio:a.default.string,minDeviceAspectRatio:a.default.string,maxDeviceAspectRatio:a.default.string,minHeight:l,maxHeight:l,minDeviceHeight:l,maxDeviceHeight:l,minWidth:l,maxWidth:l,minDeviceWidth:l,maxDeviceWidth:l,minColor:a.default.number,maxColor:a.default.number,minColorIndex:a.default.number,maxColorIndex:a.default.number,minMonochrome:a.default.number,maxMonochrome:a.default.number,minResolution:l,maxResolution:l},c),f=n(n({},s),u);t.default={all:f,types:s,matchers:d,features:u}},"./src/toQuery.ts":
/*!************************!*\
	  !*** ./src/toQuery.ts ***!
	  \************************/function(e,t,r){var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var o=n(r(/*! hyphenate-style-name */"./node_modules/hyphenate-style-name/index.js")),i=n(r(/*! ./mediaQuery */"./src/mediaQuery.ts"));t.default=function(e){var t=[];return Object.keys(i.default.all).forEach((function(r){var n=e[r];null!=n&&t.push(function(e,t){var r=(0,o.default)(e);return"number"==typeof t&&(t="".concat(t,"px")),!0===t?r:!1===t?"not ".concat(r):"(".concat(r,": ").concat(t,")")}(r,n))})),t.join(" and ")}},"./src/useMediaQuery.ts":
/*!******************************!*\
	  !*** ./src/useMediaQuery.ts ***!
	  \******************************/function(e,t,r){var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var o=r(/*! react */"react"),i=n(r(/*! matchmediaquery */"./node_modules/matchmediaquery/index.js")),a=n(r(/*! hyphenate-style-name */"./node_modules/hyphenate-style-name/index.js")),l=r(/*! shallow-equal */"./node_modules/shallow-equal/dist/index.esm.js"),s=n(r(/*! ./toQuery */"./src/toQuery.ts")),d=n(r(/*! ./Context */"./src/Context.ts")),c=function(e){if(e)return Object.keys(e).reduce((function(t,r){return t[(0,a.default)(r)]=e[r],t}),{})},u=function(){var e=(0,o.useRef)(!1);return(0,o.useEffect)((function(){e.current=!0}),[]),e.current},f=function(e){var t=function(){return function(e){return e.query||(0,s.default)(e)}(e)},r=(0,o.useState)(t),n=r[0],i=r[1];return(0,o.useEffect)((function(){var e=t();n!==e&&i(e)}),[e]),n};t.default=function(e,t,r){var n=function(e){var t=(0,o.useContext)(d.default),r=function(){return c(e)||c(t)},n=(0,o.useState)(r),i=n[0],a=n[1];return(0,o.useEffect)((function(){var e=r();(0,l.shallowEqualObjects)(i,e)||a(e)}),[e,t]),i}(t),a=f(e);if(!a)throw new Error("Invalid or missing MediaQuery!");var s=function(e,t){var r=function(){return(0,i.default)(e,t||{},!!t)},n=(0,o.useState)(r),a=n[0],l=n[1],s=u();return(0,o.useEffect)((function(){if(s){var e=r();return l(e),function(){e&&e.dispose()}}}),[e,t]),a}(a,n),h=function(e){var t=(0,o.useState)(e.matches),r=t[0],n=t[1];return(0,o.useEffect)((function(){var t=function(e){n(e.matches)};return e.addListener(t),n(e.matches),function(){e.removeListener(t)}}),[e]),r}(s),p=u();return(0,o.useEffect)((function(){p&&r&&r(h)}),[h]),(0,o.useEffect)((function(){return function(){s&&s.dispose()}}),[]),h}},react:
/*!**************************************************************************************!*\
	  !*** external {"commonjs":"react","commonjs2":"react","amd":"react","root":"React"} ***!
	  \**************************************************************************************/t=>{t.exports=e}},r={};function n(e){var o=r[e];if(void 0!==o)return o.exports;var i=r[e]={exports:{}};return t[e].call(i.exports,i,i.exports,n),i.exports}return n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n("./src/index.ts")})();var Jc=Xc.exports=Gc(o);const Qc=F.div`
    border-radius: ${xa.md};
    background: ${ga.bg};
    padding: ${ya["spacing-16"]} ${ya["spacing-32"]};
    ${e=>{var t;return"dark"===(null===(t=e.theme)||void 0===t?void 0:t.colourMode)?O`
                  border: ${va["width-010"]} ${va.solid}
                      ${ga.border};
              `:O`
                  box-shadow: ${wa["md-subtle"]};
              `}}
`,eu=F.button`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: ${ya["spacing-24"]};
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
                background-color: ${ga["bg-hover-neutral"]};
            `}
    }
`,tu=o.forwardRef(((t,r)=>{var{children:n,focusHighlight:o=!0,focusOutline:i="none",type:a="button"}=t,l=st(t,["children","focusHighlight","focusOutline","type"]);return e(eu,Object.assign({ref:r,$outline:i,$highlight:o,type:a},l,{children:n}))})),ru=F.div`
    position: relative;
    display: flex;
    flex-direction: column;
    width: 40rem;
    max-height: 70%;
    background: ${ga.bg};
    box-shadow: ${wa["lg-strong"]};
    border-radius: ${xa.lg};
    overflow: hidden;

    ${Ca.MaxWidth.md} {
        width: 90%;
        max-height: 70%;
    }
`,nu=F(tu)`
    position: absolute;
    top: var(--close-button-top-inset, ${ya["spacing-16"]});
    right: var(--close-button-right-inset, ${ya["spacing-16"]});
    padding: 0;
    color: ${ga.icon};

    svg {
        height: 2rem;
        width: 2rem;
    }

    ${Ca.MaxWidth.sm} {
        right: var(--close-button-right-inset, ${ya["spacing-20"]});
    }
`,ou=r=>{var{id:n="modal-box",children:o,onClose:i,showCloseButton:a=!0}=r,l=st(r,["id","children","onClose","showCloseButton"]);return t(ru,Object.assign({"data-testid":n},l,{onClick:e=>{e.stopPropagation()},children:[a&&e(nu,{onClick:i,"data-testid":"close-button",focusHighlight:!1,focusOutline:"browser",children:e(L,{})}),o]}))},iu=e=>{const{textSize:t}=e||{};return O`
        // Text styling
        ${t&&ma[`${t}-regular`]}

        strong {
            font-weight: ${ma.Spec["weight-semibold"]};
            ${t&&ma[`${t}-semibold`]};
        }

        p {
            margin: 0;
        }

        // Link styling
        a {
            font-weight: ${ma.Spec["weight-semibold"]};
            ${t&&ma[`${t}-semibold`]}
            color: ${ga.hyperlink};
            text-decoration: underline;

            svg {
                color: ${ga["icon-primary"]};
                height: 1lh;
                width: 1em;
                margin-left: 0.4rem;
                vertical-align: middle;
            }

            &:hover,
            &:active,
            &:visited,
            &:focus {
                color: ${ga["hyperlink-hover"]};

                svg {
                    color: ${ga["icon-hover"]};
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
    `},au=F.div`
    max-width: 30rem;
    padding: 0 1rem;
    pointer-events: auto;
    outline: none;
`,lu=F((t=>{var{children:r}=t,n=st(t,["children"]);const o=n["data-testid"]||"card";return e(Qc,Object.assign({},n,{"data-testid":o,children:"string"==typeof r?e(Wa.BodyBL,{children:r}):r}))}))`
    color: ${ga.text};
    ${iu({textSize:"body-md"})}

    ${Ca.MaxWidth.sm} {
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
        background: ${ga["bg-inverse-subtlest"]};
        border: 5px solid transparent;
        border-radius: ${xa.full};
        background-clip: padding-box;
    }
`;F(ou)`
    padding: 3.5rem 1.25rem 2.5rem;
`,F.div`
    overflow-y: scroll;

    &::-webkit-scrollbar {
        display: none; /* Chrome/Safari/Webkit */
    }

    color: ${ga.text};
    ${iu({textSize:"body-md"})}
`;const su=F.div`
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
`,du=F.div`
    position: absolute;
    left: 0;
    top: 0;
    background-color: ${e=>e.$stacked?ga["overlay-subtle"]:ga["overlay-strong"]};
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
`;var cu;!function(e){e.Ready="overlay-context-ready",e.Change="overlay-context-change"}(cu||(cu={}));const uu=()=>{const[e,t]=g(void 0),r=P();return d((()=>{if(!r)return void t(void 0);const e=e=>{t(e.zIndex)};return r.events.on(cu.Change,e),r.events.emit(cu.Ready),()=>r.events.off(cu.Change,e)}),[r]),e},fu=({show:t=!1,rootId:r,onOverlayClick:n,children:i,backgroundOpacity:a,backgroundBlur:s=!0,disableTransition:c=!1,enableOverlayClick:u=!1,zIndex:f,id:h})=>{const[p,m]=g(null),[b,v]=g(),[y]=g((()=>Hc.generate())),x=H(),w=l(),$=l(null),C=i&&o.cloneElement(i,{ref:$}),D=h?`lifesg-ds-overlay-root-${h}`:"lifesg-ds-overlay-root",S=null!=f?f:b?99999:99998;(e=>{const t=P();d((()=>{if(!t)return;const r={zIndex:e};t.events.emit(cu.Change,r)}),[t,e]),d((()=>{if(!t)return;const r=()=>{const r={zIndex:e};t.events.emit(cu.Change,r)};return null==t||t.events.on(cu.Ready,r),()=>null==t?void 0:t.events.off(cu.Ready,r)}),[t,e])})(S),d((()=>(T(),m(F()),()=>{B(),I().length<1&&(E()&&(j("remove"),R()),_("remove"))})),[]),d((()=>{if(t){const e=O();k(e),M(),E()&&1===I().length&&(z(),j("add"));const t=setTimeout((()=>{_("add")}),200);return()=>clearTimeout(t)}{B(),E()&&I().length<1&&(j("remove"),R());const e=setTimeout((()=>{I().length<1&&_("remove")}),200);return()=>clearTimeout(e)}}),[t]);const k=e=>{w.current=e,v(e)},E=()=>/(iPad|iPhone|iPod)/g.test(navigator.userAgent),F=()=>document&&r?document.getElementById(r):document?document.body:null,O=()=>I().length>0,T=()=>{if(!document.getElementById(pu)){const e=document.createElement("style");e.id=pu;const t=document.documentElement.clientWidth,r=window.innerWidth-t;e.innerHTML=`\n\t\t\t\t.${gu} {\n\t\t\t\t\toverflow: hidden;\n\t\t\t\t\tpadding-right: ${r}px !important;\n\t\t\t\t\t-ms-overflow-style: none;\n\t\t\t\t\tscrollbar-width: none;\n\t\t\t\t}\n\n\t\t\t\t.${gu}::-webkit-scrollbar {\n\t\t\t\t\tdisplay: none;\n\t\t\t\t}\n\n\t\t\t\t.${mu} {\n\t\t\t\t\tposition: fixed;\n\t\t\t\t\ttop: var(${bu}, 0);\n\t\t\t\t\tbottom: 0;\n\t\t\t\t}\n\t\t\t`,document.body.appendChild(e)}},_=e=>{const t=document.body.classList.contains(gu);"add"!==e||t?"remove"===e&&t&&document.body.classList.remove(gu):document.body.classList.add(gu)},I=()=>{const e=document.body.dataset.lifesgDsOverlayOrder;return e?e.split(","):[]},M=()=>{const e=I();document.body.dataset.lifesgDsOverlayOrder=[...e,y].join(",")},B=()=>{const e=I();document.body.dataset.lifesgDsOverlayOrder=e.filter((e=>e!==y)).join(",")},j=e=>{if(!E())return;const t=document.body.classList.contains(mu);"add"!==e||t?"remove"===e&&t&&document.body.classList.remove(mu):document.body.classList.add(mu)},z=()=>{const e=document.body.style,t=e.top?e.top:window.scrollY+"px";document.body.style.setProperty(bu,t)},R=()=>{if(!E())return;const e=document.body.style.getPropertyValue(bu);requestAnimationFrame((()=>{window.scrollTo({top:parseFloat(e)})}))},L=e=>{var t;const r=null===(t=$.current)||void 0===t?void 0:t.firstChild;r&&r.contains(e.target)||n&&u&&(e.preventDefault(),n())};return p?A.createPortal(e(su,{id:D,"data-testid":D,$show:t,$zIndex:S,children:i&&e(W,{id:x,children:e(du,{"data-testid":"overlay-wrapper",$show:t,$stacked:b,$backgroundBlur:s,$disableTransition:c,onClick:L,children:C})})}),p):null},hu=t=>e(N,{children:e(fu,Object.assign({},t))}),pu="lifesg-ds-overlay-stylesheet",gu="lifesg-ds-overlay-open",mu="lifesg-ds-overlay-scroll-lock",bu="--lifesg-ds-overlay-scroll-y",vu=()=>{const[e,t]=g(),[r,n]=g(),o=c((()=>{const e=.01*window.innerHeight;t(e)}),[]),i=c((()=>{if(window.visualViewport){const e=.01*window.visualViewport.height;t(e),n(window.visualViewport.offsetTop)}}),[]);return d((()=>window.visualViewport?(i(),window.visualViewport.addEventListener("resize",i),()=>{var e;null===(e=window.visualViewport)||void 0===e||e.removeEventListener("resize",i)}):(o(),window.addEventListener("resize",o),()=>{window.removeEventListener("resize",o)})),[]),{verticalHeight:e,offsetTop:r}},yu=i({onClose:()=>{}}),xu=F.div`
    position: relative;
    width: 100%;
    height: 100%;

    overflow: auto;

    ${Ca.MaxWidth.sm} {
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
            transition: all ${ba["duration-250"]}
                ${ba["ease-entrance"]}
            transition-delay: ${ba["duration-150"]};
        }

        &[data-status="close"] {
            opacity: 0;
            ${e.$animationFrom}: -3%;
            transition: all ${ba["duration-250"]}
                ${ba["ease-exit"]};
        }
    `}
`,wu=F.div`
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100%;
    pointer-events: none;
`,$u=F.div`
    pointer-events: auto;
    width: 100%;
    outline: none;
`,Cu=F.div`
    width: 40rem;
    margin: ${ya["spacing-64"]} auto;
    background: ${ga.bg};
    box-shadow: ${wa["xs-strong"]};
    border-radius: ${xa.lg};

    display: flex;
    flex-direction: column-reverse;

    max-width: calc(100% - ${$a["xxl-margin"]}px * 2);

    ${Ca.MaxWidth.xl} {
        max-width: calc(100% - ${$a["xl-margin"]}px * 2);
    }

    ${Ca.MaxWidth.lg} {
        max-width: calc(100% - ${$a["lg-margin"]}px * 2);
    }

    ${Ca.MaxWidth.md} {
        max-width: calc(100% - ${$a["md-margin"]}px * 2);
    }

    ${Ca.MaxWidth.sm} {
        max-width: calc(100% - ${$a["sm-margin"]}px * 2);
    }

    ${Ca.MaxWidth.xs} {
        max-width: calc(100% - ${$a["xs-margin"]}px * 2);
    }

    ${Ca.MaxWidth.xxs} {
        max-width: calc(100% - ${$a["xxs-margin"]}px * 2);
    }
`,Du=F.div`
    margin-right: ${ya["spacing-16"]};
    margin-left: auto;
    margin-top: ${ya["spacing-16"]};
    margin-bottom: ${ya["spacing-16"]};
`,Su=F(tu)`
    padding: 0;
    color: ${ga.icon};

    svg {
        height: 2rem;
        width: 2rem;
    }
`,ku=F.div`
    margin-right: ${ya["spacing-64"]};
    margin-left: ${ya["spacing-64"]};

    ${Ca.MaxWidth.sm} {
        margin-right: ${ya["spacing-20"]};
        margin-left: ${ya["spacing-20"]};
    }
`,Eu=F.div`
    margin-right: ${ya["spacing-64"]};
    margin-left: ${ya["spacing-64"]};

    ${Ca.MaxWidth.sm} {
        margin-right: ${ya["spacing-20"]};
        margin-left: ${ya["spacing-20"]};
    }

    display: flex;
    flex-direction: row-reverse; /* primary button on right */
    column-gap: ${ya["spacing-32"]};
    row-gap: ${ya["spacing-16"]};

    & > button {
        flex: 1;
    }

    ${Ca.MaxWidth.md} {
        flex-direction: column;
    }
`,Fu=F.div`
    :where(& > ${ku}:last-child) {
        margin-bottom: ${ya["spacing-64"]};
    }

    :where(& > ${Eu}:not(:first-child)) {
        margin-top: ${ya["spacing-32"]};
    }

    :where(& > ${Eu}:last-child) {
        margin-bottom: ${ya["spacing-64"]};
    }

    ${e=>e.$hasCloseButton?O`
                  :where(& > ${ku}:first-child),
                  :where(& > ${Eu}:first-child) {
                      margin-top: 0;
                  }
              `:O`
                  :where(& > ${ku}:first-child),
                  :where(& > ${Eu}:first-child) {
                      margin-top: ${ya["spacing-64"]};
                  }
              `}
`,Ou=t=>{var{"data-testid":r="modal-close-button"}=t,n=st(t,["data-testid"]);const{onClose:o}=b(yu);return e(Du,Object.assign({"data-testid":r},n,{children:e(Su,{onClick:o,"data-testid":"close-button",focusHighlight:!1,focusOutline:"browser","aria-label":"Close button",children:e(L,{"aria-hidden":!0})})}))};Ou.displayName="ModalV2.CloseButton";const Tu=t=>{var{"data-testid":r="modal-content",children:n}=t,o=st(t,["data-testid","children"]);return e(ku,Object.assign({"data-testid":r},o,{children:n}))};Tu.displayName="ModalV2.Content";const _u=e=>{var{"data-testid":r="modal-footer",primaryButton:n,secondaryButton:o}=e,i=st(e,["data-testid","primaryButton","secondaryButton"]);return t(Eu,Object.assign({"data-testid":r},i,{children:[n,o]}))};_u.displayName="ModalV2.Footer";const Iu=e=>{var{id:r,"data-testid":n="modal-card",children:i}=e,a=st(e,["id","data-testid","children"]);const l=e=>o.Children.toArray(i).find((t=>((e,t)=>T(e.type)?e.type.target===t:e.type===t)(t,e))),s=l(Ou),d=l(Tu),c=l(_u),u=!!s;return t(Cu,Object.assign({id:r,"data-testid":n},a,{onClick:e=>{e.stopPropagation()},children:[t(Fu,{$hasCloseButton:u,children:[d,c]}),u&&s]}))};Iu.displayName="ModalV2.Card";const Mu=Object.assign((t=>{var{id:r,show:n,onClose:o,animationFrom:i="bottom",children:a,enableOverlayClick:l=!0,rootComponentId:s,zIndex:c,onOverlayClick:u,dismissKeyboardOnShow:f=!0,"data-testid":h="modal"}=t,p=st(t,["id","show","onClose","animationFrom","children","enableOverlayClick","rootComponentId","zIndex","onOverlayClick","dismissKeyboardOnShow","data-testid"]);const{verticalHeight:g,offsetTop:m}=vu(),{refs:b,context:v}=Y({open:n,onOpenChange:e=>{e||null==o||o()}}),{isMounted:y,status:x}=V(v,{duration:300}),w=U(v,{outsidePress:!1,enabled:!!o}),{getFloatingProps:$}=K([w]);return d((()=>{var e,t;n&&f&&(null===(t=null===(e=document.activeElement)||void 0===e?void 0:e.blur)||void 0===t||t.call(e))}),[f,n]),e(hu,{"data-testid":`${h}-overlay`,show:y,enableOverlayClick:l,onOverlayClick:u,id:r,rootId:s,zIndex:c,children:e(xu,Object.assign({$show:y,$animationFrom:i,"data-testid":h,$verticalHeight:g,$offsetTop:m},p,{"data-status":x,children:e(yu.Provider,{value:{onClose:o},children:y&&e(q,{context:v,initialFocus:b.floating,children:e(wu,{children:e($u,Object.assign({ref:b.setFloating},$(),{"aria-modal":!0,role:"dialog",children:a}))})})})}))})}),{Card:Iu,CloseButton:Ou,Content:Tu,Footer:_u}),Au=n=>{var{children:o,visible:i,onMobileClose:a,maxHeight:l,overflow:s,ariaLabel:d,id:c}=n,u=st(n,["children","visible","onMobileClose","maxHeight","overflow","ariaLabel","id"]);const f=u["data-testid"]||"popover",h=b(_),p=$a["sm-max"]({theme:h}),g=Jc.useMediaQuery({maxWidth:p}),m=()=>{a&&a()},v=()=>"string"==typeof o?e(Wa.BodyMD,{children:o}):o;return t(r,{children:[i&&e(au,Object.assign({tabIndex:0,"data-testid":f},u,{id:c,role:"dialog","aria-label":null!=d?d:"More information",children:e(lu,{$maxHeight:l,$overflow:s,children:v()})})),g&&e(Mu,{show:null!=i&&i,onOverlayClick:m,onClose:m,id:c,role:"dialog","aria-label":null!=d?d:"More information",children:t(Mu.Card,{children:[e(Mu.Content,{children:v()}),e(Mu.CloseButton,{})]})})]})},Bu=F.div`
    display: inline;
    width: fit-content;
    cursor: pointer;
    position: relative;
`,ju=n=>{var o,i,{children:a,popoverContent:s,trigger:d="click",position:c="top",zIndex:u,rootNode:f,customOffset:h,delay:p,onPopoverAppear:m,onPopoverDismiss:v,popoverAriaLabel:y,enableFlip:x=!0,enableResize:w=!1,overflow:$="auto",triggerOnFocus:C=!1,isModal:D=!0}=n,S=st(n,["children","popoverContent","trigger","position","zIndex","rootNode","customOffset","delay","onPopoverAppear","onPopoverDismiss","popoverAriaLabel","enableFlip","enableResize","overflow","triggerOnFocus","isModal"]);const[k,E]=g(!1),F=l(null),O=l(null),T=b(_),I=$a["sm-max"]({theme:T}),M=Jc.useMediaQuery({maxWidth:I}),[A,B]=g(0),j=`${l(Hc.generate()).current}-popover`,{refs:z,floatingStyles:R,context:L}=Y({open:k,placement:c,whileElementsMounted:Z,middleware:[G(null!=h?h:16),x&&X(),J({limiter:Q()}),w&&ee({apply({availableHeight:e}){B(e)}})],onOpenChange:e=>{E(e),k!==e&&de(e)}}),P=uu(),N="hover"===(M?"click":d),H=te(L,{ignoreMouse:N}),W=U(L),V=re(L,{enabled:N,delay:{open:null!==(o=null==p?void 0:p.open)&&void 0!==o?o:0,close:null!==(i=null==p?void 0:p.close)&&void 0!==i?i:500}}),ie=ne(L,{enabled:C}),{getReferenceProps:ae,getFloatingProps:le}=K([H,W,V,ie]),se=()=>{E(!1),de(!1)},de=e=>{e&&m&&m(),!e&&v&&v()};return t(r,{children:[e(Bu,Object.assign({ref:e=>{F.current=e,z.setReference(e)}},ae({onClick:e=>{e.stopPropagation(),e.preventDefault()}}),S,{children:a})),k&&e(oe,{root:f,children:e(q,Object.assign({context:L},!D&&{initialFocus:-1,returnFocus:!1,modal:!1},{children:e("div",Object.assign({ref:e=>{O.current=e,z.setFloating(e)},onBlur:e=>{var t;const r=null!==(t=e.relatedTarget)&&void 0!==t?t:document.activeElement;r&&(e=>{var t;if(!e)return!1;if(e instanceof HTMLElement&&e.hasAttribute("data-floating-ui-focus-guard"))return!0;const r=F.current,n=null===(t=O.current)||void 0===t?void 0:t.parentElement;return!!r&&r.contains(e)||!!n&&n.contains(e)})(r)||(E(!1),de(!1))},style:Object.assign(Object.assign({},R),{outline:"none",zIndex:null!=u?u:P})},le(),{children:"function"==typeof s?s(w?{maxHeight:A,overflow:$}:{}):e(Au,{visible:!0,onMobileClose:se,maxHeight:w?A:void 0,overflow:w?$:void 0,ariaLabel:y,id:j,children:s})}))}))})]})},zu=e=>{switch(e){case"underline":return"text-decoration: underline 1px;";case"underline-dashed":return"text-decoration: underline dashed 1px;"}},Ru=F.span`
    color: ${ga["text-primary"]};
    font-weight: 600;
    text-underline-position: under;

    ${({$defaultStyle:e})=>zu(e)}

    &:hover,
    &:focus-visible {
        color: ${ga["text-hover"]};
        ${({$hoverStyle:e})=>zu(e)}
    }

    svg {
        height: 1lh; // align vertically
        width: 1em; // scale icon with font size
        vertical-align: top;
    }
`,Lu=F.span`
    ${e=>!e.$standalone&&"margin-left: 0.25rem;"}
`,Pu=r=>{var{ariaLabel:n,content:o,icon:i,underlineStyle:a="default",underlineHoverStyle:l="default"}=r,s=st(r,["ariaLabel","content","icon","underlineStyle","underlineHoverStyle"]);const d=!!o;return e(ju,Object.assign({},s,{children:t(Ru,{"aria-label":null!=n?n:d?void 0:"More info",role:"button","aria-haspopup":"dialog",tabIndex:0,$defaultStyle:a,$hoverStyle:l,children:[o,i&&e(Lu,{$standalone:!d,children:i})]})}))},Nu=F.div`
    padding-left: ${ya["spacing-4"]};
    display: inline;
`,Hu=({addon:t,rootNode:r})=>{const{content:n,type:o,icon:i,id:a,zIndex:l,"data-testid":s}=t;return e(Nu,{children:e(Pu,{trigger:"click",id:a,"data-testid":s,popoverContent:n,rootNode:r,zIndex:l,icon:null!=i?i:e(R,{"data-testid":`${o}-icon`}),ariaLabel:"More info"})})},Wu=F.div`
    margin-bottom: ${ya["spacing-8"]};
`,Yu=F.label`
    color: ${ga["text-subtle"]};
    display: inline-block;

    ${ma["form-label"]}
    ${iu()}
    font-weight: ${ma.Spec["weight-semibold"]};
`,Vu=F(ae)`
    height: 1lh;
    width: 1em;
    flex-shrink: 0;
    color: ${ga["icon-error-strong"]};
`,Uu=F.div`
    ${ma["body-sm-semibold"]}
    display: flex;
    gap: ${ya["spacing-4"]};
    margin-top: ${ya["spacing-8"]};
`,Ku=F.p`
    color: ${ga["text-error"]};
    margin-bottom: 0;
    outline: none;
`,qu=F.span`
    ${ma["form-description"]}
    color: ${ga["text-subtler"]};
    display: block;
`,Zu=r=>{var{id:n,children:o,addon:i,subtitle:a,"data-testid":l,className:s,style:d}=r,c=st(r,["id","children","addon","subtitle","data-testid","className","style"]);return t(Wu,{className:s,style:d,"data-testid":l,children:[t(Yu,Object.assign({id:n},c,{children:[o,i&&i.type&&("popover"===(null==i?void 0:i.type)?e(Hu,{addon:i}):null)]})),"string"==typeof a?e(qu,{id:n?`${n}-subtitle`:void 0,"data-testid":l?`${l}-subtitle`:"subtitle",children:a}):a]})},Gu=r=>t(Uu,{children:[e(Vu,{"aria-hidden":!0}),e(Ku,Object.assign({},r))]}),Xu=F.div`
    position: relative;

    ${e=>{const{$xxlStart:t,$xxlSpan:r,$xlStart:n,$xlSpan:o,$lgStart:i,$lgSpan:a,$mdStart:l,$mdSpan:s,$smStart:d,$smSpan:c,$xsStart:u,$xsSpan:f,$xxsStart:h,$xxsSpan:p}=e;return O`
            grid-column: ${t||"auto"} / span ${r||1};

            ${Ei.MaxWidth.xl} {
                grid-column: ${n||"auto"} / span ${o||1};
            }

            ${Ei.MaxWidth.lg} {
                grid-column: ${i||"auto"} / span ${a||1};
            }

            ${Ei.MaxWidth.md} {
                grid-column: ${l||"auto"} / span ${s||1};
            }

            ${Ei.MaxWidth.sm} {
                grid-column: ${d||"auto"} / span ${c||1};
            }

            ${Ei.MaxWidth.xs} {
                grid-column: ${u||"auto"} / span ${f||1};
            }

            ${Ei.MaxWidth.xxs} {
                grid-column: ${h||"auto"} / span ${p||1};
            }
        `}}
`,Ju=o.forwardRef(((t,r)=>{const n=b(_),{xxlCols:o,xlCols:i,lgCols:a,mdCols:l,smCols:s,xsCols:d,xxsCols:c}=t,u=st(t,["xxlCols","xlCols","lgCols","mdCols","smCols","xsCols","xxsCols"]),f=(e,t,r)=>{if(!e)return{start:void 0,span:void 0};if("development"===process.env.NODE_ENV&&("number"==typeof e&&e>t?console.warn(`Warning: ${r}Cols exceeds maximum (${t}): ${e}`):Array.isArray(e)&&(e[0]>t+1||e[1]>t+1)&&console.warn(`Warning: ${r}Cols array exceeds maximum (${t}): [${e[0]}, ${e[1]}]`)),Array.isArray(e)){const[r,n]=e;if(-1===n)return{start:r,span:t-r+1};return{start:r,span:Math.min(n-r,t)}}return{start:void 0,span:Math.min(e,t)}};return e(Xu,Object.assign({ref:r},(()=>{const e=Si["xxl-column"]({theme:n}),t=Si["xl-column"]({theme:n}),r=Si["lg-column"]({theme:n}),u=Si["md-column"]({theme:n}),h=Si["sm-column"]({theme:n}),p=Si["xs-column"]({theme:n}),g=Si["xxs-column"]({theme:n}),m=f(o||i||a||l||s||d||c,e,"xxl"),b=f(i||a||l||s||d||c,t,"xl"),v=f(a||l||s||d||c,r,"lg"),y=f(l||s||d||c,u,"md"),x=f(s||d||c,h,"sm"),w=f(d||c,p,"xs"),$=f(c,g,"xxs");return{$xxlStart:m.start,$xxlSpan:m.span,$xlStart:b.start,$xlSpan:b.span,$lgStart:v.start,$lgSpan:v.span,$mdStart:y.start,$mdSpan:y.span,$smStart:x.start,$smSpan:x.span,$xsStart:w.start,$xsSpan:w.span,$xxsStart:$.start,$xxsSpan:$.span}})(),u))})),Qu={mobileS:320,mobileM:375,mobileL:480,tablet:1199,desktopM:1399,desktopL:1999,desktop4k:3840},ef=e=>Object.keys(Qu).reduce(((t,r)=>{const n=Qu[r];return t[r]=`@media screen and (${e}: ${n}px)`,t}),{}),tf=ef("max-width"),rf=(ef("min-width"),F.div`
    position: relative;
    ${e=>{const{$desktopStart:t,$desktopSpan:r,$tabletStart:n,$tabletSpan:o,$mobileStart:i,$mobileSpan:a}=e;return O`
            grid-column: ${t||"auto"} / span ${r||1};

            ${tf.tablet} {
                grid-column: ${n||"auto"} / span
                    ${o||1};
            }

            ${tf.mobileL} {
                grid-column: ${i||"auto"} / span
                    ${a||1};
            }
        `}}
`),nf=o.forwardRef(((t,r)=>{const{mobileCols:n,tabletCols:o,desktopCols:i}=t,a=st(t,["mobileCols","tabletCols","desktopCols"]);return e(rf,Object.assign({ref:r},(()=>{const e=o||n,t=n,r=of(i||o||n),a=of(e),l=of(t);return{$desktopSpan:r.span,$desktopStart:r.start,$mobileSpan:l.span,$mobileStart:l.start,$tabletSpan:a.span,$tabletStart:a.start}})(),a))})),of=e=>{if(Array.isArray(e)&&e.length>1){const[t,r]=e,n=t<=r?t:r,o=t<=r?r:t;let i;return i=o===n?1:o-n,{start:n,span:i}}return"number"==typeof e?{start:void 0,span:e}:{start:void 0,span:void 0}},af=O`
    display: flex;
    flex-direction: column;

    &:not(:last-child) {
        margin-bottom: ${ya["spacing-32"]};
    }
`,lf=F.div`
    ${af}
`,sf=F(Ju)`
    ${af}
`,df=F(nf)`
    ${af}
`,cf=({label:r,errorMessage:n,id:o,disabled:i,children:a,layoutType:l,mobileCols:s,tabletCols:d,desktopCols:c,xxsCols:u,xsCols:f,smCols:h,mdCols:p,lgCols:m,xlCols:b,xxlCols:v,"data-testid":y,"data-error-testid":w})=>{const $=!l&&(s||d||c)?"v2-grid":!l&&(u||f||h||p||m||b||v)?"grid":l||"flex",D="string"==typeof n?n.trim():n,[S]=g((()=>Hc.generate())),k=`${null!=o?o:S}-label`,E=`${null!=o?o:S}-label-subtitle`,F=`${null!=o?o:S}-error-message`;const O=(e=>{switch(e){case"v2-grid":return df;case"grid":return sf;case"flex":return lf}})($);return t(O,Object.assign({"data-testid":y},(e=>{switch(e){case"v2-grid":return{mobileCols:s,tabletCols:d,desktopCols:c};case"grid":return{xxsCols:u,xsCols:f,smCols:h,mdCols:p,lgCols:m,xlCols:b,xxlCols:v};case"flex":return}})($),{children:[r&&e(Zu,"string"==typeof r?{htmlFor:`${o}-base`,"data-testid":o?`${o}-label`:"form-label",id:k,disabled:i,children:r}:Object.assign({htmlFor:`${o}-base`,"data-testid":o?`${o}-label`:"form-label",id:k,disabled:i},r)),(()=>{const e={"aria-invalid":!!n,"aria-describedby":[D?F:void 0,"object"==typeof r&&(null==r?void 0:r.subtitle)?E:void 0].filter(Boolean).join(" ")||void 0,"aria-labelledby":r?k:void 0};return C.map(a,(t=>x(t,e)))})(),D&&t(Uu,{children:[e(Vu,{"aria-hidden":!0}),e(Ku,{id:F,tabIndex:0,"data-testid":null!=w?w:o?`${o}-error-message`:"error-message",children:D})]})]}))},uf=e=>"small"===e?2.5:3,ff=F.div`
    position: relative;
    width: 100%;
    ${e=>{const t=uf(e.$variant);return O`
            min-height: ${t}rem;
            height: ${t}rem; // Need this to persist the height when expanding or collapsing list
        `}}
`,hf=O`
    display: flex;
    position: relative;
    align-items: center;
    justify-content: space-between;
    padding: 0 ${ya["spacing-16"]};
    // exclude top and bottom borders
    height: calc(${e=>uf(e.$variant)}rem - 2px);
    width: 100%;
    border-radius: ${xa.sm};
    border: none;
    background: transparent;

    &:focus,
    &:active {
        outline: none;
    }

    &:focus-visible {
        outline: 2px solid ${ga["border-focus"]};
    }
`,pf=F.button`
    ${hf}
    cursor: pointer;
`;F.div`
    ${hf}
`;const gf=I`
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
    border: ${va["width-010"]} ${va.solid} ${ga.border};
    border-radius: ${xa.sm};
    background: ${ga.bg};
    overflow: hidden;

    &:focus-within {
        border-color: ${ga["border-focus"]};
        box-shadow: 0px 0px 4px 0px
            rgb(from ${ga["border-focus"]} r g b / 50%) inset; // TODO: confirm shadow
    }

    ${e=>e.$expanded?O`
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                z-index: 2;
            `:O`
                animation: ${gf} 0.5s ease-in-out;
            `}

    ${e=>e.$disabled?O`
                background: ${ga["bg-disabled"]};

                ${pf} {
                    cursor: not-allowed;
                }

                &:focus-within {
                    border-color: ${ga.border};
                    box-shadow: none;
                }
            `:e.$readOnly?O`
                border: none;
                background: transparent !important;

                ${pf} {
                    padding: 0;
                }

                &:focus-within {
                    border: none;
                    box-shadow: none;
                }
            `:e.$error?O`
                border-color: ${ga["border-error"]};

                &:focus-within {
                    border-color: ${ga["border-error"]};
                    box-shadow: 0px 0px 4px 0px
                        rgb(from ${ga["border-error"]} r g b / 50%) inset; // TODO: confirm shadow
                }
            `:void 0}
`,F.div`
    transform: rotate(${e=>e.$expanded?180:0}deg);
    transition: transform ${ba["duration-250"]} ${ba["ease-default"]};
    margin-left: ${ya["spacing-16"]};
`,F(le)`
    color: ${ga.icon};
`,F.div`
    height: 1px;
    background: ${ga.border};
    margin: 0 ${ya["spacing-8"]};
`;const mf=F.div`
    display: flex;
    flex: 1;
    word-break: break-all;
    ${e=>{if(e.$disabled)return O`
                color: ${ga["text-disabled"]};
            `}}
`,bf=F.div`
    ${e=>"small"===e.$variant?ma["body-md-regular"]:ma["body-baseline-regular"]}
    text-align: left;
    ${e=>{if("middle"!==e.$truncateType)return O`
                    ${ja(1)}
                `}}
    overflow: hidden;
`,vf=F(bf)`
    color: ${ga["text-subtler"]};
`,yf=e=>"right"===e?"bottom-end":"bottom-start",xf=i({elementWidth:0,styles:{},setFloatingRef:()=>{},getFloatingProps:()=>({})}),wf=()=>b(xf),$f=({enabled:n,isOpen:o,onOpen:i,onClose:a,onDismiss:s,renderElement:d,renderDropdown:c,customZIndex:u,clickToToggle:f=!1,offset:h=0,alignment:p="left",fitAvailableHeight:g,rootNode:m,positionRef:v})=>{var y;const x=b(_),w=$a["sm-max"]({theme:x}),$=l(null),{width:C=0}=mc({targetRef:null!=v?v:$,handleHeight:!1}),D={name:"center",fn:({x:e,rects:t})=>{const r=0===e||e+t.floating.width===window.innerWidth,n=window.innerWidth<w;return{x:r&&n?(window.innerWidth-t.floating.width)/2:e}}},{refs:S,floatingStyles:k,context:E}=Y({open:o,onOpenChange:(e,t,r)=>{"escape-key"===r?null==s||s():e&&!o?null==i||i():!e&&o&&(null==a||a(r))},whileElementsMounted:Z,placement:yf(p),middleware:[G(h),X(),J({limiter:Q()}),ee({apply({availableHeight:e,elements:t}){!g||e>=t.floating.scrollHeight?t.floating.style.setProperty("--available-height",""):t.floating.style.setProperty("--available-height",`${Math.max(0,e)}px`)}}),D]}),F=uu(),{isMounted:O,styles:T}=ie(E,{initial:{opacity:0},open:{opacity:1},duration:300}),I=te(E,{enabled:n,toggle:f,keyboardHandlers:f}),M=U(E,{enabled:n}),{getReferenceProps:A,getFloatingProps:B}=K([I,M]),j={elementWidth:C,styles:Object.assign(Object.assign(Object.assign({},T),k),{zIndex:null!==(y=null!=u?u:F)&&void 0!==y?y:50}),setFloatingRef:S.setFloating,getFloatingProps:B};return t(r,{children:[e("div",Object.assign({ref:e=>{$.current=e,S.setReference(e)}},A(),{children:d()})),O&&e(oe,{root:m,children:e(q,{context:E,modal:!1,initialFocus:-1,returnFocus:!1,children:e(xf.Provider,{value:j,children:c(j)})})})]})},Cf=F.div`
    --vertical-inset: ${ya["spacing-24"]};
    --horizontal-inset: ${ya["spacing-20"]};
    --header-bottom-spacing: ${ya["spacing-4"]};

    border: ${va["width-010"]} ${va.solid} ${ga.border};
    border-radius: ${xa.sm};
    overflow: hidden;

    width: ${e=>e.$width}px;
    max-width: 41rem;
    min-width: 21rem;

    ${Ca.MaxWidth.sm} {
        min-width: 17.5rem;
    }
`,Df=F.span`
    clip-path: inset(50%);
    height: 1px;
    width: 1px;
    overflow: hidden;
    position: absolute;
    white-space: nowrap;
`,Sf=e=>Pc()?e:e?"true":void 0,kf=(...e)=>e.filter((e=>!!e)).join(" "),Ef=F.div`
    display: inline-block;
    position: relative;
    width: ${({$size:e})=>e?`${e}px`:"1em"};
    height: ${({$size:e})=>e?`${e}px`:"1em"};
    color: ${e=>e.$color||"currentColor"};
`,Ff=I`
	0% {
	  transform: rotate(0deg);
	}
	100% {
	  transform: rotate(360deg);
	}
`,Of=F.div`
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
    animation: ${Ff} 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
`,Tf=F(Of)`
    animation-delay: -0.45s;
`,_f=F(Of)`
    animation-delay: -0.3s;
`,If=F(Of)`
    animation-delay: -0.15s;
`,Mf=({color:r,className:n,size:o})=>t(Ef,{className:n,$size:o,$color:r,"data-testid":"component-loading-spinner",children:[e(Of,{id:"inner1"}),e(Tf,{id:"inner2"}),e(_f,{id:"inner3"}),e(If,{id:"inner4"})]}),Af=F.button`
    padding: ${ya["spacing-8"]} ${ya["spacing-16"]};
    min-width: 4rem;
    border: ${va["width-010"]} ${va.solid} transparent;
    transition: all ${ba["duration-250"]} ${ba["ease-default"]};
    border-radius: ${zi};
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;

    // -----------------------------------------------------------------------------
    // BUTTON STYLE + TEXT COLOR
    // -----------------------------------------------------------------------------
    ${e=>{switch(e.$buttonStyle){case"secondary":return O`
                    background-color: ${ga.bg};
                    border-color: ${e.$buttonIsDanger?ga["border-error-strong"]:Ni};

                    color: ${e.$buttonIsDanger?ga["text-error"]:Hi};

                    &:hover,
                    &:active {
                        @media (pointer: fine) {
                            background-color: ${ga["bg-hover-neutral"]};
                        }
                    }
                `;case"light":return O`
                    background-color: ${ga.bg};
                    border-color: ${ga.border};

                    color: ${e.$buttonIsDanger?ga["text-error"]:Wi};

                    &:hover,
                    &:active {
                        @media (pointer: fine) {
                            background-color: ${ga["bg-hover-neutral"]};
                        }
                    }
                `;case"link":return O`
                    background-color: transparent;

                    color: ${e.$buttonIsDanger?ga["text-error"]:Yi};
                    &:hover,
                    &:active {
                        @media (pointer: fine) {
                            background-color: ${ga["bg-hover-neutral"]};
                        }
                    }
                `;case"disabled":return O`
                    background-color: ${ga["bg-disabled"]};

                    cursor: not-allowed;

                    &:hover {
                        box-shadow: none;
                    }

                    color: ${ga["text-disabled"]};
                `;default:return O`
                    background-color: ${e.$buttonIsDanger?ga["bg-error-strong"]:Ri};

                    ${Ca.MaxWidth.sm} {
                        width: 100%;
                    }

                    color: ${Pi};

                    &:hover,
                    &:active {
                        @media (pointer: fine) {
                            background-color: ${e.$buttonIsDanger?ga["bg-error-strong-hover"]:Li};
                        }
                    }
                `}}}

    // -----------------------------------------------------------------------------
	// BUTTON SIZE + TEXT SIZE
	// -----------------------------------------------------------------------------
	${e=>{switch(e.$buttonSizeStyle){case"small":return O`
                    height: 2.5rem;
                    ${ma["body-md-semibold"]}

                    ${Ca.MaxWidth.xxs} {
                        height: auto;
                    }
                `;case"large":return O`
                    height: 4rem;
                    ${ma["heading-md-semibold"]}

                    ${Ca.MaxWidth.xxs} {
                        height: auto;
                    }
                `;default:return O`
                    height: 3rem;
                    ${ma["heading-xs-semibold"]}

                    ${Ca.MaxWidth.xxs} {
                        height: auto;
                    }
                `}}}
`,Bf=F(Mf)`
    margin-right: ${e=>e.$hasChildren?"0.5rem":"0"};
`,jf=e=>o.Children.toArray(e).some((e=>"string"==typeof e?""!==e.trim():null!=e)),zf=(r,n)=>{const{children:o,disabled:i=!1,loading:a=!1,styleType:l="default",danger:s=!1,focusableWhenDisabled:d=!1,onClick:c}=r,u=st(r,["children","disabled","loading","styleType","danger","focusableWhenDisabled","onClick"]),f={$buttonStyle:i?"disabled":l,$buttonSizeStyle:"default",$buttonIsDanger:s};return t(Af,Object.assign({ref:n,"data-testid":u["data-testid"]||"button",disabled:i&&!d,"aria-disabled":i,"aria-busy":a,onClick:i?void 0:c},f,u,{children:[a&&e(Bf,{$hasChildren:jf(o)}),e("span",{children:o})]}))};zf.displayName="Button.Default";const Rf=(r,n)=>{const{children:o,disabled:i=!1,loading:a=!1,styleType:l="default",danger:s=!1,focusableWhenDisabled:d=!1,onClick:c}=r,u=st(r,["children","disabled","loading","styleType","danger","focusableWhenDisabled","onClick"]),f={$buttonStyle:i?"disabled":l,$buttonSizeStyle:"small",$buttonIsDanger:s};return t(Af,Object.assign({ref:n,"data-testid":u["data-testid"]||"button",disabled:i&&!d,"aria-disabled":i,"aria-busy":a,onClick:i?void 0:c},f,u,{children:[a&&e(Bf,{$hasChildren:jf(o)}),e("span",{children:o})]}))};Rf.displayName="Button.Small";const Lf=(r,n)=>{const{children:o,disabled:i=!1,loading:a=!1,styleType:l="default",danger:s=!1,focusableWhenDisabled:d=!1,onClick:c}=r,u=st(r,["children","disabled","loading","styleType","danger","focusableWhenDisabled","onClick"]),f={$buttonStyle:i?"disabled":l,$buttonSizeStyle:"large",$buttonIsDanger:s};return t(Af,Object.assign({ref:n,"data-testid":u["data-testid"]||"button",disabled:i&&!d,"aria-disabled":i,"aria-busy":a,onClick:i?void 0:c},f,u,{children:[a&&e(Bf,{$hasChildren:jf(o)}),e("span",{children:o})]}))};Lf.displayName="Button.Large";const Pf={Default:o.forwardRef(zf),Small:o.forwardRef(Rf),Large:o.forwardRef(Lf)},Nf=O`
    color: ${ga.icon};
    height: 1rem;
    width: 1rem;
`,Hf=F(se)`
    ${Nf}
`,Wf=F(de)`
    ${Nf}
`,Yf=F(le)`
    ${Nf}
    transition: transform 250ms ease-in-out;
    margin-left: 0.5rem;
`,Vf=F.div`
    position: relative;
    width: 100%;
    display: flex;
    flex-direction: column;

    padding-top: var(--vertical-inset);
    padding-bottom: var(--vertical-inset);
`,Uf=F.div`
    display: flex;
    flex: 1;
    position: relative;
`,Kf=F.div`
    isolation: isolate;
    width: 100%;

    padding-left: var(--horizontal-inset);
    padding-right: var(--horizontal-inset);
`,qf=F.div`
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    background: ${ga.bg};

    padding-left: var(--horizontal-inset);
    padding-right: var(--horizontal-inset);

    ${e=>{if(!e.$visible)return O`
                display: none;
            `}}
`,Zf=F.div`
    display: flex;
    justify-content: space-between;

    padding-left: var(--header-horizontal-inset, var(--horizontal-inset));
    padding-right: var(--header-horizontal-inset, var(--horizontal-inset));
    padding-bottom: var(--header-bottom-spacing);
`,Gf=F.div`
    display: flex;
`,Xf=F.button`
    border: none;
    display: flex;
    align-items: center;
    padding: 0.5rem;
    background: transparent;
    cursor: pointer;

    ${e=>!1===e.$visible?O`
                display: none;
            `:e.$expanded?O`
                ${Yf} {
                    transform: rotate(180deg);
                }
            `:void 0};
`,Jf=F.span`
    ${ma["body-md-regular"]}
    color: ${ga.text};
`,Qf=F.div`
    display: flex;
`,eh=F(tu)`
    margin: auto 0;
    padding: 0.75rem;

    &:disabled {
        cursor: not-allowed;
    }
`,th=F.div`
    display: flex;
    gap: 0.5rem;
    margin-top: 1.5rem;

    padding-left: var(--horizontal-inset);
    padding-right: var(--horizontal-inset);
`,rh=F(Pf.Small)`
    flex: 1;
`,nh=F.div`
    width: 100%;
    height: 100%;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(6, 2.5rem);
    align-content: center;
    justify-content: center;

    gap: 0.5rem 0;
`,oh=F.div`
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: ${xa.md};
    margin: 0 0.5rem;
    transition: ${ba["duration-150"]} ${ba["ease-default"]};

    // default styles
    ${ma["body-md-regular"]}
    border-radius: ${xa.md};
    border: ${va["width-010"]} ${va.solid} transparent;
    background-clip: border-box;
    color: ${ga.text};
    cursor: default;

    // cursor style
    ${e=>e.$interactive?O`
                cursor: pointer;
            `:e.$disabledDisplay?O`
                cursor: not-allowed;
            `:void 0}

    // background, border and text styles
    ${({$variant:e,$interactive:t,$disabledDisplay:r})=>"selected-month"===e?O`
                background: ${ga["bg-selected"]};
                border-color: ${ga["border-selected"]};
                color: ${ga["text-selected"]};
                font-weight: ${ma.Spec["weight-semibold"]};

                ${t&&O`
                    &:hover {
                        background: ${ga["bg-selected-hover"]};
                        border-color: ${ga["border-selected-hover"]};
                        color: ${ga["text-selected-hover"]};
                    }
                `}
            `:"current-month"===e?O`
                color: ${ga["text-primary"]};
                font-weight: ${ma.Spec["weight-semibold"]};
            `:r?O`
                color: ${ga["text-disabled-subtlest"]};
            `:void 0}

    // hover styles
    ${({$variant:e,$interactive:t})=>{if(t)return"selected-month"===e?O`
                &:hover {
                    background: ${ga["bg-selected-hover"]};
                    border-color: ${ga["border-selected-hover"]};
                    color: ${ga["text-selected-hover"]};
                    font-weight: ${ma.Spec["weight-semibold"]};
                }
            `:O`
            &:hover {
                background: ${ga["bg-hover"]};
                color: ${ga["text-hover"]};
                font-weight: ${ma.Spec["weight-semibold"]};
            }
        `}}
`,ih=({calendarDate:t,currentFocus:r,selectedStartDate:n,selectedEndDate:o,viewCalendarDate:i,isNewSelection:s,minDate:c,maxDate:u,allowDisabledSelection:f,onMonthSelect:h})=>{const p=a((()=>Ic.generateMonths(xc(t))),[t]),m=l(new Array(p.length).fill(null)),[b,v]=g(p.findIndex((e=>e.isSame(i,"month"))));d((()=>{var e;null!==b&&(null===(e=m.current[b])||void 0===e||e.focus())}),[b,p]);const y=(e,t)=>{t||h(e)},x=e=>{const t="start"===r&&o&&e.isAfter(o,"month")&&s,i="end"===r&&n&&e.isBefore(n,"month")&&s;return!(!t&&!i)},w=e=>{const t=e.format("MMMM"),r=(n=e,!Ic.isWithinRange(n,c?xc(c):void 0,u?xc(u):void 0,"month"));var n;const o=i.isSame(e,"month"),a=o?"selected-month":xc().isSame(e,"month")?"current-month":"default",l=i.isSame(e,"year")?o?0:-1:0===e.month()?0:-1;return{disabledDisplay:r||x(e),interactive:!r||f,month:t,variant:a,tabIndex:l}};return p.length?e(nh,{onBlur:()=>{v(null)},children:p.map(((t,r)=>{const{disabledDisplay:n,interactive:o,variant:i,month:a,tabIndex:l}=w(t);return e(oh,{ref:e=>m.current[r]=e,tabIndex:l,role:"button","aria-disabled":!o,"aria-selected":"selected-month"===i,$variant:i,$disabledDisplay:n,$interactive:o,onClick:()=>y(t,!o),onKeyDown:e=>{((e,t,r)=>{const n=e.key;let o;const i=p.indexOf(t);switch(n){case"Enter":case" ":e.preventDefault(),y(t,r);break;case"ArrowLeft":o=i-1;break;case"ArrowRight":o=i+1;break;case"ArrowUp":o=i-2;break;case"ArrowDown":o=i+2}void 0!==o&&o>=0&&o<p.length&&(e.preventDefault(),v(o))})(e,t,!o)},children:a},a)}))}):null},ah=F.div`
    width: 100%;
    height: 100%;
    display: grid;
    align-content: center;
    align-items: center;
    grid-template-columns: repeat(3, 1fr);
`,lh=F.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 1rem 0.5rem;
    transition: ${ba["duration-150"]} ${ba["ease-default"]};
    padding: 0.5rem;

    // default styles
    ${ma["body-md-regular"]}
    border-radius: ${xa.md};
    border: ${va["width-010"]} ${va.solid} transparent;
    background-clip: border-box;
    color: ${ga.text};
    cursor: default;

    // cursor style
    ${({$interactive:e,$disabledDisplay:t})=>e?O`
                cursor: pointer;
            `:t?O`
                cursor: not-allowed;
            `:void 0}

    // background, border and text styles
    ${({$variant:e,$interactive:t,$disabledDisplay:r})=>"selected-year"===e?O`
                background: ${ga["bg-selected"]};
                border-color: ${ga["border-selected"]};
                color: ${ga["text-selected"]};
                font-weight: ${ma.Spec["weight-semibold"]};

                ${t&&O`
                    &:hover {
                        background: ${ga["bg-selected-hover"]};
                        border-color: ${ga["border-selected-hover"]};
                        color: ${ga["text-selected-hover"]};
                    }
                `}
            `:"current-year"===e?O`
                color: ${ga["text-primary"]};
                font-weight: ${ma.Spec["weight-semibold"]};
            `:"other-decade"===e||r?O`
                color: ${ga["text-disabled-subtlest"]};
            `:void 0}

    // hover styles
    ${({$variant:e,$interactive:t})=>{if(t)return"selected-year"===e?O`
                &:hover {
                    background: ${ga["bg-selected-hover"]};
                    border-color: ${ga["border-selected-hover"]};
                    color: ${ga["text-selected-hover"]};
                    font-weight: ${ma.Spec["weight-semibold"]};
                }
            `:O`
            &:hover {
                background: ${ga["bg-hover"]};
                color: ${ga["text-hover"]};
                font-weight: ${ma.Spec["weight-semibold"]};
            }
        `}}
`,sh=({calendarDate:t,currentFocus:r,selectedStartDate:n,selectedEndDate:o,viewCalendarDate:i,isNewSelection:s,minDate:c,maxDate:u,allowDisabledSelection:f,onYearSelect:h,setCalendarDate:p})=>{const m=a((()=>Ic.generateDecadeOfYears(xc(t))),[t]),b=l(new Array(m.length).fill(null)),[v,y]=g(t);d((()=>{var e;if(null===v)return;const t=m.findIndex((e=>e.isSame(v,"year")));t>=0&&(null===(e=b.current[t])||void 0===e||e.focus())}),[v,m]);const x=(e,t)=>{t||h(e)},w=e=>{const t="start"===r&&o&&e.isAfter(o,"year")&&s,i="end"===r&&n&&e.isBefore(n,"year")&&s;return!(!t&&!i)},$=e=>{const t=m.indexOf(e),r=[0,11].includes(t),n=e.year(),o=(a=e,!Ic.isWithinRange(a,c?xc(c):void 0,u?xc(u):void 0,"year"));var a;const l=r?"other-decade":i.isSame(e,"year")?"selected-year":xc().isSame(e,"year")?"current-year":"default",s=i.year()>=m[0].year()&&i.year()<=m[m.length-1].year()?"selected-year"===l?0:-1:1===t?0:-1;return{disabledDisplay:o||w(e),interactive:!o||f,year:n,variant:l,tabIndex:s}};return m.length?e(ah,{onBlur:()=>{y(null)},children:m.map(((t,r)=>{const{disabledDisplay:n,interactive:o,variant:i,year:a,tabIndex:l}=$(t);return e(lh,{ref:e=>{b.current[r]=e},tabIndex:l,role:"button","aria-label":`${a}`,"aria-disabled":!o,"aria-selected":"selected-year"===i,$variant:i,$disabledDisplay:n,$interactive:!!o,onClick:()=>x(t,!o),onKeyDown:e=>{((e,t,r)=>{let n;switch(e.key){case"Enter":case" ":e.preventDefault(),x(t,r);break;case"ArrowLeft":n=t.subtract(1,"year");break;case"ArrowRight":n=t.add(1,"year");break;case"ArrowUp":n=t.subtract(3,"year");break;case"ArrowDown":n=t.add(3,"year")}void 0!==n&&(e.preventDefault(),p(n),y(n))})(e,t,!o)},children:a},a)}))}):null},dh=o.forwardRef(((n,o)=>{var{children:i,initialCalendarDate:a,minDate:s,maxDate:c,currentFocus:u,selectedStartDate:h,selectedEndDate:p,selectWithinRange:m,dynamicHeight:b=!1,allowDisabledSelection:v,onCalendarDateChange:y,withButton:x,doneButtonDisabled:w,onDismiss:$,showNavigationHeader:C=!0,getLeftArrowDate:D,getRightArrowDate:S,isLeftArrowDisabled:k,isRightArrowDisabled:E,getMonthHeaderLabel:F,getYearHeaderLabel:O,isFocusable:T=!1}=n,_=st(n,["children","initialCalendarDate","minDate","maxDate","currentFocus","selectedStartDate","selectedEndDate","selectWithinRange","dynamicHeight","allowDisabledSelection","onCalendarDateChange","withButton","doneButtonDisabled","onDismiss","showNavigationHeader","getLeftArrowDate","getRightArrowDate","isLeftArrowDisabled","isRightArrowDisabled","getMonthHeaderLabel","getYearHeaderLabel","isFocusable"]);const[I,M]=g(Rc.toDayjs(a)),[A,B]=g(Rc.toDayjs(a)),[j,z]=g("default"),R=l(null),L=l(null),P=l(null),N=l(null);f(o,(()=>({defaultView(){z("default")},resetView(){const e=Rc.toDayjs(a);M(e),B(e),z("default")},setCalendarDate(e){const t=Rc.toDayjs(e);M(t),B(t)}}))),d((()=>{const e=Rc.toDayjs(a);M(e),B(e)}),[a]),d((()=>{G(A)}),[A]);const H=()=>{var e;"month-options"!==j?(z("month-options"),null===(e=P.current)||void 0===e||e.focus()):(z("default"),M(A))},W=e=>{var t;if("Enter"!==e.key&&" "!==e.key||(e.preventDefault(),H(),null===(t=N.current)||void 0===t||t.focus()),"ArrowUp"===e.key||"ArrowDown"===e.key){e.preventDefault();const t="ArrowUp"===e.key?I.subtract(1,"month"):I.add(1,"month");if(!Ic.isWithinRange(t,s?xc(s):void 0,c?xc(c):void 0,"month"))return;M(t),"default"===j&&B(t)}},Y=()=>{"default"!==j?(z("default"),M(A)):z("year-options")},V=e=>{if("Enter"!==e.key&&" "!==e.key||(e.preventDefault(),Y()),"ArrowUp"===e.key||"ArrowDown"===e.key){e.preventDefault();let t;if(t="year-options"===j?"ArrowUp"===e.key?I.subtract(10,"year"):I.add(10,"year"):"ArrowUp"===e.key?I.subtract(1,"year"):I.add(1,"year"),!Ic.isWithinRange(t,s?xc(s):void 0,c?xc(c):void 0,"year"))return;M(t),"default"===j&&B(t)}},U=()=>{var e;null===(e=P.current)||void 0===e||e.focus();const t=D?D(I):I.subtract(1,"month");switch(j){case"default":B(t),M(t);break;case"month-options":M((e=>e.subtract(1,"year")));break;case"year-options":M((e=>e.subtract(10,"year")))}},K=()=>{var e;null===(e=P.current)||void 0===e||e.focus();const t=S?S(I):I.add(1,"month");switch(j){case"default":B(t),M(t);break;case"month-options":M((e=>e.add(1,"year")));break;case"year-options":M((e=>e.add(10,"year")))}},q=e=>{M(e),B(e),x||z("default")},Z=()=>{const e=Rc.toDayjs(a);M(e),B(e),"default"===j?X("reset"):z("default")},G=e=>{y&&y(e)},X=e=>{$&&$(e)},J=()=>{if(!s||v)return!1;const e=xc(s);return"month-options"===j?!Ic.isPreviousYearWithinRange(I,e):"year-options"===j?!Ic.isPreviousDecadeWithinRange(I,e):k?k(I):!Ic.isPreviousMonthWithinRange(I,e)},Q=()=>{if(!c||v)return!1;const e=xc(c);return"month-options"===j?!Ic.isNextYearWithinRange(I,e):"year-options"===j?!Ic.isNextDecadeWithinRange(I,e):E?E(I):!Ic.isNextMonthWithinRange(I,e)},ee=()=>{const n=F?F(I):I.format("MMM"),o=xc(n,"MMM").format("MMMM"),i=(()=>{if("year-options"===j){const{beginDecade:e,endDecade:t}=Ic.getStartEndDecade(I);return`${e} to ${t}`}return O?O(I):I.format("YYYY")})(),a={"month-options":`${i}, Close month selection`,"year-options":`${i}, Close year selection`,default:`${i}, Select year`};return t(r,{children:[t(Xf,{"aria-label":`${o}, Select month`,type:"button",$expanded:"month-options"===j,$visible:"default"===j,id:"month-dropdown",onClick:H,onKeyDown:W,tabIndex:T?0:-1,children:[e(Jf,{children:n}),e(Yf,{})]}),t(Xf,{ref:N,"aria-label":a[j],type:"button",$expanded:"default"!==j,id:"year-dropdown",onClick:Y,onKeyDown:V,tabIndex:T?0:-1,children:[e(Jf,{children:i}),e(Yf,{})]})]})},te=()=>{switch(j){case"month-options":return e(ih,{calendarDate:I,currentFocus:u,minDate:s,maxDate:c,selectedStartDate:h,selectedEndDate:p,viewCalendarDate:A,isNewSelection:!!m,onMonthSelect:q,allowDisabledSelection:v});case"year-options":return e(sh,{setCalendarDate:M,calendarDate:I,currentFocus:u,minDate:s,maxDate:c,selectedStartDate:h,selectedEndDate:p,viewCalendarDate:A,isNewSelection:!!m,onYearSelect:q,allowDisabledSelection:v});default:return null}};return t(Vf,Object.assign({ref:P,"data-id":"calendar-container","data-testid":"calendar-container","aria-label":A.format("MMMM, YYYY"),role:"group"},_,{children:[C&&(()=>{const r={"month-options":"year","year-options":"decade",default:"month"}[j];return t(Zf,{"data-id":"calendar-header","data-testid":"calendar-header",children:[e(Gf,{children:ee()}),t(Qf,{children:[e(eh,{"aria-label":`Previous ${r}`,"data-testid":"left-arrow-btn",disabled:J(),focusHighlight:!1,focusOutline:"browser",onClick:U,tabIndex:T?0:-1,children:e(Hf,{})}),e(eh,{"aria-label":`Next ${r}`,"data-testid":"right-arrow-btn",disabled:Q(),focusHighlight:!1,focusOutline:"browser",onClick:K,tabIndex:T?0:-1,children:e(Wf,{})})]})]})})(),e(Uf,{children:(()=>{const n="function"==typeof i?i({calendarDate:A,currentView:j}):i;if(b)return t(r,{children:["default"===j&&n,te()]});{const o="default"===j;return t(r,{children:[e(Kf,{inert:Sf(!o),children:n}),e(qf,{$visible:!o,children:te()})]})}})()}),(()=>{if(!x)return;const r=!!("default"===j)&&w;return t(th,{children:[e(rh,{ref:L,"data-testid":"cancel-button",styleType:"light",type:"button",onClick:Z,children:"Cancel"}),e(rh,{"data-testid":"done-button",ref:R,type:"button",onClick:()=>{r||(M(A),"default"===j?X("confirmed"):z("default"))},disabled:r,children:"Done"})]})})()]}))})),ch=F.div`
    width: 100%;
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    row-gap: 0.25rem;
`,uh=F.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 2.5rem;
    pointer-events: none;
    user-select: none;

    ${ma["body-sm-semibold"]};
    color: ${ga.text};
`,fh=F.div`
    grid-column: 1 / -1;
    display: flex;
`,hh=e=>{let t=ga.bg,r="transparent";switch(e.$type){case"hover-subtle":t=ga["bg-hover"],r=ga["bg-hover"];break;case"hover":t=ga["bg-hover-strong"],r=ga["bg-hover-strong"];break;case"hover-outline":t=ga["bg-hover-subtle"],r=ga["border-hover"];break;case"selected-outline":t=ga["bg-selected"],r=ga["border-selected"];break;case"selected-outline-subtle":t=ga["bg-selected"],r=ga["border-selected-subtle"];break;case"selected-hover":t=ga["bg-selected-hover"];break;case"selected-hover-outline":t=ga["bg-selected-hover"],r=ga["border-selected-hover"]}return{color:t,borderColor:r}},ph=F.div`
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    width: 100%;
    height: 2.5rem;
`,gh=F.div`
    position: absolute;
    height: 2.5rem;
    width: 50%;
    transition: ${ba["duration-150"]} ${ba["ease-default"]};
    border: ${va["width-010"]} ${va.solid} transparent;
    border-left: none;
    border-right: none;

    ${e=>{if(!e.$type)return;const{color:t,borderColor:r}=hh(e);return O`
            background-color: ${t};
            background-clip: border-box;
            border-top-color: ${r};
            border-bottom-color: ${r};
        `}}
`,mh=F(gh)`
    left: 0;
`,bh=F(gh)`
    right: 0;
`,vh=F.div`
    position: absolute;
    z-index: 1;

    display: flex;
    align-items: center;
    justify-content: center;
    height: 2.5rem;
    width: 2.5rem;
    transition: ${ba["duration-150"]} ${ba["ease-default"]};

    border: ${va["width-010"]} ${va.solid} transparent;
    border-radius: ${xa.md};

    ${e=>{if(e.$type){const{color:t,borderColor:r}=hh(e);return O`
                background-color: ${t};
                background-clip: content-box;
                border-color: ${r};
            `}}}
`,yh=F(vh)`
    right: calc(50% - 1.25rem);
    clip-path: inset(-3px 1.25rem -3px -3px);
`,xh=F(vh)`
    left: calc(50% - 1.25rem);
    clip-path: inset(-3px -3px -3px 1.25rem);
`,wh=F.span`
    position: absolute;
    top: 0;
    bottom: 0;
    z-index: 2;
    cursor: ${e=>e.$interactive?"pointer":null===e.$interactive?"default":"not-allowed"};
`,$h=F.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 2.5rem;
    width: 2.5rem;
    ${ma["body-md-regular"]}
    transition: ${ba["duration-150"]} ${ba["ease-default"]};

    pointer-events: ${e=>e.$interactive||null===e.$interactive?"auto":"none"};

    ${e=>{const{$disabled:t,$type:r}=e;if(t)return"hidden"===r?O`
                    visibility: hidden;
                `:O`
                color: ${ga["text-disabled-subtlest"]};
            `;switch(r){case"selected":return O`
                    font-weight: ${ma.Spec["weight-semibold"]};
                    color: ${ga["text-selected"]};
                `;case"selected-hover":return O`
                    font-weight: ${ma.Spec["weight-semibold"]};
                    color: ${ga["text-selected-hover"]};
                `;case"current":return O`
                    font-weight: ${ma.Spec["weight-semibold"]};
                    color: ${ga["text-primary"]};
                `;case"hover":return O`
                    font-weight: ${ma.Spec["weight-semibold"]};
                    color: ${ga["text-hover"]};
                `;case"unavailable":return O`
                    color: ${ga["text-disabled-subtlest"]};
                `;case"hidden":return O`
                    visibility: hidden;
                `;default:return O`
                    color: ${ga.text};
                `}}}

    &:focus {
        outline: none;
    }
`,Ch=F.div`
    position: absolute;
    width: 4px;
    height: 4px;
    background-color: currentColor;
    border-radius: 100%;
    bottom: 4px;
`,Dh=({bgLeft:r,bgRight:n,circleLeft:o,circleRight:i,labelType:a,disabled:s,interactive:c,currentDateIndicator:u,date:f,onSelect:h,onHover:p,onFocus:g,onHoverEnd:m,onKeyDown:b,focusDate:v,label:y,ariaHidden:x,tabIndex:w=-1,role:$="button"})=>{const C=xc().isSame(f,"day"),D=!!v&&v.isSame(f,"day"),S=`${f.format("D MMMM YYYY dddd")}, ${s?"Unavailable":"Available"}`,k=l(null);d((()=>{var e;D&&k.current&&(null===(e=k.current)||void 0===e||e.focus())}),[D]);return t(ph,{"aria-hidden":x,children:[e(mh,{$type:r}),e(yh,{$type:o}),e(bh,{$type:n}),e(xh,{$type:i}),e(wh,{$interactive:c,children:t($h,{ref:k,tabIndex:w,role:$,"aria-label":y||S,"aria-disabled":!c,"aria-selected":"selected"===a||"selected-hover"===a,$type:a,$disabled:s,$interactive:c,onClick:()=>{null==h||h(f)},onKeyDown:e=>{null==b||b(e)},onMouseEnter:()=>{null==p||p(f)},onMouseLeave:()=>{null==m||m(f)},onFocus:()=>{null==g||g(f)},children:[f.date(),u&&C&&e(Ch,{$disabled:s})]})})]})},Sh=({date:t,calendarDate:r,startDate:n,endDate:o,currentFocus:i,hoverDate:a,focusDate:l,minDate:s,maxDate:d,disabledDates:c,allowDisabledSelection:u,isNewSelection:f,showActiveMonthDaysOnly:h,onSelect:p,onHover:g,onFocus:m,setFocusCell:b,tabIndex:v})=>{const y=Ic.isDisabledDay(t,c,s,d),x=!y||u,w=()=>{p(t,!x)},$=()=>{const e=xc(a),t=e.isBefore(o,"day"),r=e.isAfter(n,"day");let l,s,d,c;return"start"===i&&o&&t&&(n&&r?(d=a,c=o):(l=a,s=n||o)),"end"===i&&n&&r&&(o&&t?(d=n,c=a):(l=o||n,s=a)),{hoverStart:l,hoverEnd:s,overlapStart:d,overlapEnd:c}},C={date:t,calendarDate:r,disabled:y,interactive:x,currentDateIndicator:!0,onSelect:w,onHover:()=>{g(t.format("YYYY-MM-DD"),!x)},onFocus:()=>{m(t.format("YYYY-MM-DD"))},onKeyDown:e=>{const r=e.key;if("Enter"===r||" "===r)return e.preventDefault(),void(x&&w());(e=>{let r;const n={ArrowLeft:()=>t.subtract(1,"day"),ArrowRight:()=>t.add(1,"day"),ArrowUp:()=>t.subtract(7,"day"),ArrowDown:()=>t.add(7,"day"),Home:()=>t.startOf("week"),End:()=>t.endOf("week"),PageUp:()=>e.shiftKey?t.subtract(1,"year"):t.subtract(1,"month"),PageDown:()=>e.shiftKey?t.add(1,"year"):t.add(1,"month")}[e.key];n&&(e.preventDefault(),r=n(),b(r.format("YYYY-MM-DD")))})(e)},role:"gridcell",focusDate:xc(l),tabIndex:v};return e(Dh,Object.assign({},C,(()=>{const e={};if(r.month()!==t.month())e.labelType=h?"hidden":"unavailable";else if(xc().isSame(t,"day")&&!y)e.labelType="current";else if(f){const r="end"===i&&n&&t.isBefore(n),a="start"===i&&o&&t.isAfter(o);(r||a)&&(e.labelType="unavailable")}return e})(),(()=>{const e={},i=t.isSame(n,"day"),a=t.isSame(o,"day");return h&&r.month()!==t.month()?(e.labelType="hidden",e):((n&&i||o&&a)&&(e.labelType="selected",e.circleLeft="selected-outline",e.circleRight="selected-outline"),n&&o&&t.isBetween(n,o,"day","[]")&&(e.labelType="selected",i||(e.bgLeft="selected-outline-subtle"),a||(e.bgRight="selected-outline-subtle")),e)})(),(()=>{if(!a)return{};const e={},r=t.isSame(a,"day"),{hoverStart:i,hoverEnd:l,overlapStart:s,overlapEnd:d}=$();if(r){const r=t.isSame(n,"day"),i=t.isSame(o,"day");r||i?(e.labelType="selected-hover",e.circleLeft="selected-hover-outline",e.circleRight="selected-hover-outline"):(e.labelType="hover",e.circleLeft="hover",e.circleRight="hover")}if(i&&l){if(t.isBetween(i,l,"day","[]")){const r=t.isSame(i,"day"),n=t.isSame(l,"day");r||(e.labelType="hover",e.bgLeft="hover-outline"),n||(e.labelType="hover",e.bgRight="hover-outline")}return e}return s&&d?(t.isBetween(s,d,"day","[]")&&r&&(e.labelType="selected-hover",e.circleLeft="selected-hover",e.circleRight="selected-hover"),e):e})()))};xc.extend(Dc);const kh=({calendarDate:r,currentFocus:n,disabledDates:o,selectedStartDate:i,selectedEndDate:s,onSelect:u,onHover:f,isNewSelection:h,minDate:p,maxDate:m,allowDisabledSelection:b,showActiveMonthDaysOnly:v,setCalendarDate:y})=>{const x=l(null);d((()=>{if(x.current){const e=x.current;x.current=null,k(e)}}),[r]);const w=c((()=>i&&xc(i).isSame(r,"month")?xc(i):s&&xc(s).isSame(r,"month")?xc(s):xc().isSame(r,"month")?xc():p&&r.isSame(xc(p),"month")?xc(p):xc(r).startOf("month")),[i,r,s,p]),$=e=>{const t=xc(e);if(Ic.isWithinRange(t,p?xc(p):void 0,m?xc(m):void 0)){if(!t.isSame(r,"month"))return null==y||y(e),void(x.current=e);k(e)}},C=a((()=>Ic.generateDays(r)),[r]),D=a((()=>w()),[w]),[S,k]=g(""),[E,F]=g(""),O=(e,t)=>{t&&!b||u(e)},T=(e,t)=>{t&&!b||(F(e),f(e))},_=e=>{F(e),f(e)},I=()=>{F(""),f("")};return t(ch,{role:"grid","aria-label":"Date grid","data-testid":"calendar-content",onBlur:e=>{e.currentTarget.contains(e.relatedTarget)||(k(""),F(""),f(""))},children:[C[0].map(((t,r)=>e(uh,{"aria-hidden":!0,children:xc(t).format("ddd")},`week-day-${r}`))),C.map(((t,a)=>e(fh,{role:"row","aria-label":`Week ${a+1}`,onMouseLeave:I,children:t.map(((t,a)=>e(Sh,{date:t,calendarDate:r,startDate:i,endDate:s,hoverDate:E,focusDate:S,currentFocus:n,minDate:p,maxDate:m,disabledDates:o,allowDisabledSelection:b,isNewSelection:h,showActiveMonthDaysOnly:v,onSelect:O,onHover:T,onFocus:_,setFocusCell:$,tabIndex:t.isSame(D,"day")?0:-1},`day-${a}`)))},a)))]})},Eh=({date:t,calendarDate:r,selectedDate:n,hoverDate:o,focusDate:i,minDate:a,maxDate:l,disabledDates:s,allowDisabledSelection:d,numberOfDays:c=1,onSelect:u,onHover:f,onFocus:h,setFocusCell:p,tabIndex:g})=>{const m=Ic.isDisabledDay(t,s,a,l),b=!m||d,{start:v,end:y}=n?Ic.getFixedRangeStartEnd(Rc.toDayjs(n),c):{start:void 0,end:void 0},{start:x,end:w}=o?Ic.getFixedRangeStartEnd(Rc.toDayjs(o),c):{start:void 0,end:void 0},$=!!n&&t.isBetween(v,y,"day","[]"),C=!!o&&t.isBetween(x,w,"day","[]"),D=$&&t.isSame(v,"day")||C&&t.isSame(x,"day"),S=$&&t.isSame(y,"day")||C&&t.isSame(w,"day"),k=`From ${xc(x).format("D MMMM")} to ${xc(w).format("D MMMM")}, ${m?"Unavailable":"Available"}`,E=()=>{u(t,!b)},F=(e,t,r,n)=>{r?e.circleLeft=t:e.bgLeft=t,n?e.circleRight=t:e.bgRight=t},O={date:t,calendarDate:r,disabled:m,interactive:b,currentDateIndicator:!0,onSelect:E,onHover:()=>{f(t.format("YYYY-MM-DD"),!b)},onFocus:()=>{h(t.format("YYYY-MM-DD"))},onKeyDown:e=>{const r=e.key;if("Enter"===r||" "===r)return e.preventDefault(),void(b&&E());(e=>{let r;const n={ArrowLeft:()=>t.subtract(1,"day"),ArrowRight:()=>t.add(1,"day"),ArrowUp:()=>t.subtract(7,"day"),ArrowDown:()=>t.add(7,"day"),Home:()=>t.startOf("week"),End:()=>t.endOf("week"),PageUp:()=>e.shiftKey?t.subtract(1,"year"):t.subtract(1,"month"),PageDown:()=>e.shiftKey?t.add(1,"year"):t.add(1,"month")}[e.key];n&&(e.preventDefault(),r=n(),p(r.format("YYYY-MM-DD")))})(e)},focusDate:xc(i),role:"gridcell",tabIndex:g,label:k};return e(Dh,Object.assign({},O,(()=>{const e={};return $||C?e.labelType="selected":r.month()!==t.month()?e.labelType="unavailable":xc().isSame(t,"day")&&!m&&(e.labelType="current"),e})(),(()=>{const e={},r=t.format("YYYY-MM-DD");return C&&F(e,"hover",r===x,r===w),$&&F(e,"selected-outline",r===v,r===y),$&&C&&(F(e,"selected-hover-outline",D,S),r===x&&r!==v&&(e.circleLeft="selected-hover")),e})()))},Fh=({calendarDate:r,disabledDates:n,selectedStartDate:o,onSelect:i,onHover:s,minDate:u,maxDate:f,allowDisabledSelection:h,numberOfDays:p,setCalendarDate:m})=>{const b=l(null);d((()=>{if(b.current){const e=b.current;b.current=null,C(e)}}),[r]);const v=c((()=>o&&xc(o).isSame(r,"month")?xc(o):xc().isSame(r,"month")?xc():u&&r.isSame(xc(u),"month")?xc(u):xc(r).startOf("month")),[o,r,u]),y=e=>{const t=xc(e);if(Ic.isWithinRange(t,u?xc(u):void 0,f?xc(f):void 0)){if(!t.isSame(r,"month"))return null==m||m(e),void(b.current=e);C(e)}},x=a((()=>Ic.generateDays(r)),[r]),w=a((()=>v()),[v]),[$,C]=g(""),[D,S]=g(""),k=(e,t)=>{t&&!h||(i(e),e&&!xc(e).isSame(e,"month")&&S(""))},E=(e,t)=>{t&&!h||(S(e),s(e))},F=e=>{S(e),s(e)},O=()=>{S(""),s("")};return t(ch,{role:"grid",onBlur:e=>{e.currentTarget.contains(e.relatedTarget)||(C(""),S(""),s(""))},"data-testid":"calendar-content","aria-label":"Date grid",children:[x[0].map(((t,r)=>e(uh,{"aria-hidden":!0,children:xc(t).format("ddd")},`week-day-${r}`))),x.map(((t,i)=>e(fh,{role:"row",onMouseLeave:O,children:t.map(((t,i)=>e(Eh,{date:t,calendarDate:r,selectedDate:o,hoverDate:D,focusDate:$,minDate:u,maxDate:f,disabledDates:n,allowDisabledSelection:h,onSelect:k,onHover:E,numberOfDays:p,onFocus:F,setFocusCell:y,tabIndex:xc(t).isSame(w,"day")?0:-1},`day-${i}`)))},i)))]})},Oh=F.div`
    width: 100%;
    background: ${ga.bg};
`,Th=({date:t,calendarDate:r,selectedDate:n,hoverDate:o,focusDate:i,minDate:a,maxDate:l,disabledDates:s,allowDisabledSelection:d,showActiveMonthDaysOnly:c,onSelect:u,onHover:f,onFocus:h,setFocusCell:p,tabIndex:g})=>{const m=Ic.isDisabledDay(t,s,a,l),b=!m||d,v=()=>{u(t,!b)},y={date:t,calendarDate:r,disabled:m,interactive:b,currentDateIndicator:!0,onSelect:v,onHover:()=>{f(t.format("YYYY-MM-DD"),!b)},onFocus:()=>{h(t.format("YYYY-MM-DD"))},onKeyDown:e=>{const r=e.key;if("Enter"===r||" "===r)return e.preventDefault(),void(b&&v());(e=>{let r;const n={ArrowLeft:()=>t.subtract(1,"day"),ArrowRight:()=>t.add(1,"day"),ArrowUp:()=>t.subtract(7,"day"),ArrowDown:()=>t.add(7,"day"),Home:()=>t.startOf("week"),End:()=>t.endOf("week"),PageUp:()=>e.shiftKey?t.subtract(1,"year"):t.subtract(1,"month"),PageDown:()=>e.shiftKey?t.add(1,"year"):t.add(1,"month")}[e.key];n&&(e.preventDefault(),r=n(),p(r.format("YYYY-MM-DD")))})(e)},role:"gridcell",focusDate:xc(i),tabIndex:g};return e(Dh,Object.assign({},y,(()=>{const e={};r.month()!==t.month()?e.labelType=c?"hidden":"unavailable":xc().isSame(t,"day")&&!m&&(e.labelType="current");const i=t.isSame(n,"day"),a=t.isSame(o,"day");return i&&a?(e.labelType="selected-hover",e.circleLeft="selected-hover-outline",e.circleRight="selected-hover-outline"):i?(e.labelType="selected",e.circleLeft="selected-outline",e.circleRight="selected-outline"):a&&(e.labelType="hover",e.circleLeft="hover-subtle",e.circleRight="hover-subtle"),e})()))};xc.extend(Dc);const _h=({calendarDate:r,disabledDates:n,selectedDate:o,onSelect:i,onHover:s,minDate:u,maxDate:f,allowDisabledSelection:h,showActiveMonthDaysOnly:p,setCalendarDate:m})=>{const b=l(null);d((()=>{if(b.current){const e=b.current;b.current=null,C(e)}}),[r]);const v=c((()=>o&&xc(o).isSame(r,"month")?xc(o):xc().isSame(r,"month")?xc():u&&r.isSame(xc(u),"month")?xc(u):xc(r).startOf("month")),[o,r,u]),y=e=>{const t=xc(e);if(Ic.isWithinRange(t,u?xc(u):void 0,f?xc(f):void 0)){if(!t.isSame(r,"month"))return null==m||m(e),void(b.current=e);C(e)}},x=a((()=>Ic.generateDays(r)),[r]),w=a((()=>v()),[v]),[$,C]=g(""),[D,S]=g(""),k=(e,t)=>{t&&!h||i(e)},E=(e,t)=>{t&&!h||(S(e),s(e))},F=e=>{S(e),s(e)},O=()=>{S(""),s("")};return t(ch,{role:"grid",onBlur:e=>{e.currentTarget.contains(e.relatedTarget)||(C(""),S(""),s(""))},"data-testid":"calendar-content","aria-label":"Date grid",children:[x[0].map(((t,r)=>e(uh,{"aria-hidden":!0,children:xc(t).format("ddd")},`week-day-${r}`))),x.map(((t,i)=>e(fh,{role:"row","aria-label":`Week ${i+1}`,onMouseLeave:O,children:t.map(((t,i)=>e(Th,{date:t,calendarDate:r,selectedDate:o,hoverDate:D,focusDate:$,minDate:u,maxDate:f,disabledDates:n,allowDisabledSelection:h,showActiveMonthDaysOnly:p,onSelect:k,onHover:E,onFocus:F,setFocusCell:y,tabIndex:xc(t).isSame(w,"day")?0:-1},`day-${i}`)))},i)))]})},Ih=({date:t,calendarDate:r,selectedDate:n,hoverDate:o,focusDate:i,minDate:a,maxDate:l,disabledDates:s,allowDisabledSelection:d,onSelect:c,onHover:u,onFocus:f,setFocusCell:h,tabIndex:p})=>{const g=Ic.isDisabledDay(t,s,a,l),m=!g||d,{start:b,end:v}=Ic.getWeekStartEnd(Rc.toDayjs(n)),{start:y,end:x}=Ic.getWeekStartEnd(Rc.toDayjs(o)),{start:w,end:$}=Ic.getWeekStartEnd(t),C=t.isSame(w,"day"),D=n&&t.isBetween(b,v,"day","[]"),S=o&&t.isBetween(y,x,"day","[]"),k=D&&t.isSame(b)||S&&t.isSame(y),E=D&&t.isSame(v)||S&&t.isSame(x),F=`From ${xc(w).format("D MMMM")} to ${xc($).format("D MMMM")}, ${g?"Unavailable":"Available"}`,O=()=>{c(t,!m)},T={date:t,calendarDate:r,disabled:g,interactive:m,currentDateIndicator:!0,onSelect:O,onHover:()=>{u(t.format("YYYY-MM-DD"),!m)},onFocus:()=>{f(t.format("YYYY-MM-DD"))},onKeyDown:e=>{const r=e.key;if("Enter"===r||" "===r)return e.preventDefault(),void(m&&O());(e=>{let r;const n={ArrowUp:()=>t.subtract(7,"day"),ArrowDown:()=>t.add(7,"day"),Home:()=>t.startOf("week"),End:()=>t.endOf("week"),PageUp:()=>e.shiftKey?t.subtract(1,"year"):t.subtract(1,"month"),PageDown:()=>e.shiftKey?t.add(1,"year"):t.add(1,"month")}[e.key];n&&(e.preventDefault(),r=n(),h(r.format("YYYY-MM-DD")))})(e)},focusDate:xc(i),tabIndex:p,label:F,ariaHidden:!C||void 0,role:C?"button":"none"};return e(Dh,Object.assign({},T,(()=>{const e={};return r.month()!==t.month()?e.labelType="unavailable":xc().isSame(t,"day")&&!g&&(e.labelType="current"),e})(),(()=>{const e={};let t,r;return D&&S?(t="selected-hover-outline",r="selected-hover"):D?(t="selected-outline",r="selected"):S&&(t="hover",r="hover"),t&&(e.labelType=r,k?e.circleLeft=t:e.bgLeft=t,E?e.circleRight=t:e.bgRight=t),e})()))},Mh=({calendarDate:r,disabledDates:n,selectedStartDate:o,onSelect:i,onHover:s,minDate:u,maxDate:f,allowDisabledSelection:h,setCalendarDate:p})=>{const m=l(null);d((()=>{if(m.current){const e=m.current;m.current=null,$(e)}}),[r]);const b=c((()=>o&&xc(o).isSame(r,"month")?xc(o):xc().isSame(r,"month")?xc().startOf("week"):u&&r.isSame(xc(u),"month")?xc(u):xc(r).startOf("month")),[o,r,u]),v=e=>{const t=xc(e);if(Ic.isWithinRange(t,u?xc(u):void 0,f?xc(f):void 0)){if(!t.isSame(r,"month"))return null==p||p(e),void(m.current=e);$(e)}},y=a((()=>Ic.generateDays(r)),[r]),x=a((()=>b()),[b]),[w,$]=g(""),[C,D]=g(""),S=(e,t)=>{if(t&&!h)return;const r=e.startOf("week");i(r),e&&!xc(e).isSame(r,"month")&&D("")},k=(e,t)=>{t&&!h||(D(e),s(e))},E=e=>{D(e),s(e)},F=()=>{D(""),s("")};return t(ch,{"data-testid":"calendar-content",onBlur:e=>{e.currentTarget.contains(e.relatedTarget)||($(""),D(""),s(""))},"aria-label":"Week selection",children:[y[0].map(((t,r)=>e(uh,{"aria-hidden":!0,children:xc(t).format("ddd")},`week-day-${r}`))),y.map(((t,i)=>e(fh,{onMouseLeave:F,role:"group",children:t.map(((t,i)=>e(Ih,{date:t,calendarDate:r,selectedDate:o,hoverDate:C,focusDate:w,minDate:u,maxDate:f,disabledDates:n,allowDisabledSelection:h,onSelect:S,onHover:k,onFocus:E,setFocusCell:v,tabIndex:xc(t).isSame(x,"day")?0:-1},`day-${i}`)))},i)))]})},Ah=({date:t,calendarDate:r,selectedDates:n,hoverDate:o,focusDate:i,minDate:a,maxDate:l,disabledDates:s,allowDisabledSelection:d,showActiveMonthDaysOnly:c,onSelect:u,onHover:f,onFocus:h,setFocusCell:p,tabIndex:g})=>{const m=Ic.isDisabledDay(t,s,a,l),b=!m||d,v=()=>{u(t,!b)},y={date:t,calendarDate:r,disabled:m,interactive:b,currentDateIndicator:!0,onSelect:v,onHover:()=>{f(t.format("YYYY-MM-DD"),!b)},onFocus:()=>{h(t.format("YYYY-MM-DD"))},onKeyDown:e=>{const r=e.key;if("Enter"===r||" "===r)return e.preventDefault(),void(b&&v());(e=>{let r;const n={ArrowLeft:()=>t.subtract(1,"day"),ArrowRight:()=>t.add(1,"day"),ArrowUp:()=>t.subtract(7,"day"),ArrowDown:()=>t.add(7,"day"),Home:()=>t.startOf("week"),End:()=>t.endOf("week"),PageUp:()=>e.shiftKey?t.subtract(1,"year"):t.subtract(1,"month"),PageDown:()=>e.shiftKey?t.add(1,"year"):t.add(1,"month")}[e.key];n&&(e.preventDefault(),r=n(),p(r.format("YYYY-MM-DD")))})(e)},role:"gridcell",focusDate:xc(i),tabIndex:g};return e(Dh,Object.assign({},y,(()=>{const e={},i=t.format("YYYY-MM-DD"),a=r.month()===t.month();return!a&&c?(e.labelType="hidden",e):(a?xc().isSame(t,"day")&&!m&&(e.labelType="current"):e.labelType="unavailable",n.includes(i)&&(e.labelType="selected",e.circleLeft="selected-outline",e.circleRight="selected-outline"),o&&t.isSame(o,"day")&&(n.includes(i)?(e.labelType="selected-hover",e.circleLeft="selected-hover-outline",e.circleRight="selected-hover-outline"):(e.labelType="hover",e.circleLeft="hover-subtle",e.circleRight="hover-subtle")),e)})()))},Bh=({calendarDate:r,disabledDates:n,selectedDates:o,onSelect:i,onHover:s,minDate:u,maxDate:f,allowDisabledSelection:h,showActiveMonthDaysOnly:p,setCalendarDate:m})=>{const b=l(null);d((()=>{if(b.current){const e=b.current;b.current=null,C(e)}}),[r]);const v=c((()=>{const e=o.find((e=>xc(e).isSame(r,"month")));return e?xc(e):xc().isSame(r,"month")?xc():u&&r.isSame(xc(u),"month")?xc(u):xc(r).startOf("month")}),[o,r,u]),y=e=>{const t=xc(e);if(Ic.isWithinRange(t,u?xc(u):void 0,f?xc(f):void 0)){if(!t.isSame(r,"month"))return null==m||m(e),void(b.current=e);C(e)}},x=a((()=>Ic.generateDays(r)),[r]),w=a((()=>v()),[v]),[$,C]=g(""),[D,S]=g(""),k=(e,t)=>{t&&!h||i(e)},E=(e,t)=>{t&&!h||(S(e),s(e))},F=e=>{S(e),s(e)},O=()=>{S(""),s("")};return t(ch,{role:"grid",onBlur:e=>{e.currentTarget.contains(e.relatedTarget)||(C(""),S(""),s(""))},"data-testid":"calendar-content","aria-label":"Date grid",children:[x[0].map(((t,r)=>e(uh,{"aria-hidden":!0,children:xc(t).format("ddd")},`week-day-${r}`))),x.map(((t,i)=>e(fh,{role:"row","aria-label":`Week ${i+1}`,onMouseLeave:O,children:t.map(((t,i)=>e(Ah,{date:t,calendarDate:r,selectedDates:o,hoverDate:D,focusDate:$,minDate:u,maxDate:f,disabledDates:n,allowDisabledSelection:h,showActiveMonthDaysOnly:p,onSelect:k,onHover:E,onFocus:F,setFocusCell:y,tabIndex:xc(t).isSame(w,"day")?0:-1},`day-${i}`)))},i)))]})},jh=o.forwardRef((({disabledDates:t,onYearMonthDisplayChange:r,onSelect:n,onHover:o,onDismiss:i,value:a,endValue:s,values:d=[],minSelectable:c,maxSelectable:u,currentFocus:h,withButton:p,variant:g,minDate:m,maxDate:b,allowDisabledSelection:v,selectWithinRange:y=!0,initialCalendarDate:x,numberOfDays:w,onChange:$,showActiveMonthDaysOnly:C=!1,isFocusable:D=!1},S)=>{const k=l(null),E=l(void 0),F=l(null);f(S,(()=>({reset(){var e;null===(e=k.current)||void 0===e||e.resetView()},setCalendarDate(e){var t;null===(t=k.current)||void 0===t||t.setCalendarDate(e)},contains(e){var t;return(null===(t=F.current)||void 0===t?void 0:t.contains(e))||!1}})));const O=e=>{var t;const r=e.format("YYYY-MM-DD");null===(t=k.current)||void 0===t||t.setCalendarDate(r),null==n||n(r)},T=e=>{null==o||o(e)},_=e=>{const t=e.format("YYYY-MM-DD");if(d.includes(t)){const e=d.filter((e=>e!==t));null==$||$(e)}else{if(void 0!==u&&d.length>=u)return;null==$||$([...d,t])}};return e(Oh,{ref:F,children:e(dh,{ref:k,withButton:p,doneButtonDisabled:(()=>{if(!p)return;let e=!0;switch(g){case"single":e=!1;break;case"range":case"fixed-range":e=!!a!=!!s;break;case"week":e=!a&&!s;break;case"multi":e=0===d.length||void 0!==c&&d.length<c}return e})(),onDismiss:i,minDate:m,maxDate:b,selectWithinRange:y,currentFocus:h,selectedStartDate:a,selectedEndDate:s,allowDisabledSelection:v,onCalendarDateChange:e=>{var t;E.current&&E.current.isSame(e,"month")||(null===(t=k.current)||void 0===t||t.setCalendarDate(e.format("YYYY-MM-DD")),null==r||r({month:e.month()+1,year:e.year()})),E.current=e},initialCalendarDate:x,isFocusable:D,children:({calendarDate:r})=>(r=>{var n;const o=null===(n=k.current)||void 0===n?void 0:n.setCalendarDate;switch(g){case"week":return e(Mh,{calendarDate:r,disabledDates:t,selectedStartDate:a,minDate:m,maxDate:b,allowDisabledSelection:v,onSelect:O,onHover:T,setCalendarDate:o});case"fixed-range":return e(Fh,{calendarDate:r,disabledDates:t,selectedStartDate:a,minDate:m,maxDate:b,allowDisabledSelection:v,onSelect:O,onHover:T,numberOfDays:w,setCalendarDate:o});case"single":return e(_h,{calendarDate:r,disabledDates:t,selectedDate:a,minDate:m,maxDate:b,allowDisabledSelection:v,showActiveMonthDaysOnly:C,onSelect:O,onHover:T,setCalendarDate:o});case"multi":return e(Bh,{calendarDate:r,disabledDates:t,selectedDates:d,minDate:m,maxDate:b,allowDisabledSelection:v,showActiveMonthDaysOnly:C,onSelect:_,onHover:T,setCalendarDate:o});default:return e(kh,{calendarDate:r,currentFocus:h,disabledDates:t,selectedStartDate:a,selectedEndDate:s,minDate:m,maxDate:b,isNewSelection:y,allowDisabledSelection:v,showActiveMonthDaysOnly:C,onSelect:O,onHover:T,setCalendarDate:o})}})(r)})})})),zh=o.forwardRef(((t,r)=>{const{elementWidth:n,setFloatingRef:o,getFloatingProps:i,styles:a}=wf();return e(Cf,Object.assign({$width:n,"data-testid":"calendar-dropdown",ref:o,style:a},i(),{children:e(jh,Object.assign({ref:r},t))}))})),Rh=O`
    outline-offset: -1px;
    outline: ${va["width-020"]} ${va.solid} ${ga["border-focus"]};
`,Lh=O`
    outline-color: ${ga["border-focus"]};
`,Ph=O`
    outline-color: ${ga["border-disabled"]};
`,Nh=O`
    outline-color: ${ga["border-error-focus"]};
`,Hh=O`
    outline: none;
`,Wh=F.div`
    border: ${va["width-010"]} ${va.solid} ${ga.border};
    border-radius: ${xa.sm};
    background: ${ga.bg};

    &:focus-within {
        ${Rh}
    }
    ${e=>e.$focused&&!e.$noBorder&&Rh}

    ${e=>e.$readOnly?O`
                border-color: transparent;
                padding: 0;
                background: transparent !important;

                &:focus-within {
                    ${Lh}
                }
                ${e.$focused&&Lh}
            `:e.$disabled?O`
                background: ${ga["bg-disabled"]};
                cursor: not-allowed;

                &:focus-within {
                    ${Ph}
                }
                ${e.$focused&&Ph}
            `:e.$error?O`
                border-color: ${ga["border-error"]};

                &:focus-within {
                    ${Nh}
                }
                ${e.$focused&&Nh}
            `:void 0}
    ${e=>{if(e.$noBorder)return O`
                border-color: transparent;
                background: transparent;
                &:focus-within {
                    ${Hh}
                }
            `}}
`,Yh=F(Wh)`
    display: flex;
    align-items: center;
    position: relative;
    height: max-content;
    width: 100%;
    padding: 0 ${ya["spacing-16"]} 0
        ${e=>e.$readOnly?"0":ya["spacing-16"]};
    flex-direction: ${e=>"right"===e.$position?"row-reverse":"row"};
`,Vh=F.input`
    ${e=>"small"===e.$variant?ma["body-md-regular"]:ma["body-baseline-regular"]}
    color: ${ga.text};
    display: block;
    background: transparent;
    border: none;
    outline: none;
    box-shadow: none;
    padding: 0;
    margin: 0;

    &:disabled {
        color: ${ga["text-subtler"]};

        &:hover {
            cursor: not-allowed;
        }
    }

    &::placeholder,
    &::-webkit-input-placeholder {
        color: ${ga["text-subtler"]};
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
`,Uh=F.button`
    background: transparent;
    border: none;
    outline: none;

    &:focus,
    &:active {
        outline: none;
    }

    &:focus-visible {
        outline: ${va["width-010"]} ${va.solid}
            ${ga["border-focus"]};
        border-radius: ${xa.sm};
    }
`,Kh=F.div`
    display: flex;
    align-items: center;
    position: relative;

    flex: 1;
`,qh=F.div`
    display: flex;
    align-items: center;

    ${e=>{if(e.$hover)return O`
                ${Zh}, ${Qh} {
                    color: ${ga["text-subtler"]};
                }
            `}}
`,Zh=F(Vh)`
    background: transparent;
    text-align: center;
`,Gh=F(Zh)`
    width: 2rem;
    margin-right: ${ya["spacing-4"]};
`,Xh=F(Zh)`
    width: 2.5rem;
`,Jh=F(Zh)`
    width: 3rem;
    margin-left: ${ya["spacing-4"]};
`,Qh=F.span`
    ${ma["body-baseline-regular"]}
    ${e=>{if(e.$inactive)return O`
                color: ${ga.text};
            `}}
`,ep=F.div`
    ${ma["body-baseline-regular"]}
    background-color: ${ga.bg};
    color: ${ga["text-subtler"]};
    position: absolute;
    display: flex;
    align-items: center;
    width: 100%;
    height: 100%;

    ${e=>e.$disabled?O`
                background-color: ${ga["bg-disabled"]};
                cursor: not-allowed;
            `:e.$hide?O`
                display: none;
            `:void 0}
`;xc.extend($c);const tp=o.forwardRef((({disabled:r,readOnly:n,names:o,value:i,focused:a,hoverValue:s,placeholder:c,label:u,onChange:h,onFocus:p,onBlur:m,hideInputKeyboard:b,inputLabels:v=["Date","Month","Year"]},y)=>{const x=b?"none":"numeric",[w,$,C]=Zc(""),[D,S,k]=Zc(""),[E,F,O]=Zc(""),[T,_]=g("none"),[I,M]=g(!1),A=l(null),B=l(null),j=l(null),z=l(null),[R,L,P]=U(s);d((()=>{var e;const[t="",r="",n=""]=U(i);$(t),S(r),F(n),t||r||n||!A.current||!A.current.contains(document.activeElement)||null===(e=B.current)||void 0===e||e.focus()}),[i]),d((()=>{var e;a||_("none"),a&&(M(!0),A.current&&!A.current.contains(document.activeElement)&&(null===(e=B.current)||void 0===e||e.focus()))}),[a]),f(y,(()=>({ref:A,resetPlaceholder(){M(!1)},resetInput(){const[e="",t="",r=""]=U(i);$(e),S(t),F(r)},focusYearRef(){var e;null===(e=z.current)||void 0===e||e.focus()}})),[$,S,F,i]);const N=e=>{var t;e.preventDefault(),null===(t=B.current)||void 0===t||t.focus()},H=e=>{e.target.select();const t=e.target.name;_(t)},W=e=>{const[t,r,n]=o,i={[t]:C.current,[r]:k.current,[n]:O.current},a=e.target.name,l=i[a],s=a!==n?Wc.padValue(l,!0):l;switch(a){case t:i[t]=s,$(s);break;case r:i[r]=s,S(s)}const d=`${i[n]}-${i[r]}-${i[t]}`,c=xc(d,"YYYY-MM-DD",!0).isValid(),u=!i[t]&&!i[r]&&!i[n];c&&l!==s&&h(d),A.current&&!A.current.contains(e.relatedTarget)&&(_("none"),null==m||m(u||c))},Y=e=>{var t,r;if(s)return;const n=e.target.name,i=e.target.value.replace(/[^0-9]/g,""),a={day:w,month:D,year:E};switch(n){case o[0]:a.day=i,$(i),2===i.length&&(null===(t=j.current)||void 0===t||t.focus());break;case o[1]:a.month=i,S(i),2===i.length&&(null===(r=z.current)||void 0===r||r.focus());break;case o[2]:a.year=i,F(i)}if(!a.day&&!a.month&&!a.year)return void h("");const l=`${a.year}-${a.month}-${a.day}`;xc(l,"YYYY-MM-DD",!0).isValid()&&h(l)},V=e=>{var t,r;"Backspace"!==e.code&&"Backspace"!==e.key||(T===o[1]&&0===D.length&&(null===(t=B.current)||void 0===t||t.focus()),T===o[2]&&0===E.length&&(null===(r=j.current)||void 0===r||r.focus()))};function U(e){if(e){const t=Lc.sanitizeInput(e);if(!t)return[void 0,void 0,void 0];const r=xc(t,"YYYY-MM-DD",!0);return[Wc.padValue(r.date().toString()),Wc.padValue((r.month()+1).toString()),r.year().toString()]}return[void 0,void 0,void 0]}return t(Kh,{role:"group","aria-label":u,onClick:()=>{var e;r||n||(M(!0),A.current&&!A.current.contains(document.activeElement)&&(null===(e=B.current)||void 0===e||e.focus()))},onFocus:e=>{r||(M(!0),a||null==p||p(e))},children:[t(qh,{ref:A,$hover:!!s,children:[e(Gh,{ref:B,name:o[0],maxLength:2,value:null!=R?R:w,onFocus:H,onBlur:W,onChange:Y,type:"text",inputMode:x,pattern:"[0-9]{2}","data-testid":`${o[0]}-input`,"aria-label":v[0],disabled:r,readOnly:n,tabIndex:n?-1:0,autoComplete:"off",placeholder:T!==o[0]||n?"DD":""}),e(Qh,{$inactive:0===w.length,children:"/"}),e(Xh,{ref:j,name:o[1],maxLength:2,value:null!=L?L:D,onFocus:H,onBlur:W,onChange:Y,onKeyDown:V,type:"text",inputMode:x,pattern:"[0-9]{2}","data-testid":`${o[1]}-input`,"aria-label":v[1],disabled:r,readOnly:n,tabIndex:n?-1:0,autoComplete:"off",placeholder:T!==o[1]||n?"MM":""}),e(Qh,{$inactive:0===D.length,children:"/"}),e(Jh,{ref:z,name:o[2],maxLength:4,value:null!=P?P:E,onFocus:H,onBlur:W,onChange:Y,onKeyDown:V,type:"text",inputMode:x,pattern:"[0-9]{4}","data-testid":`${o[2]}-input`,"aria-label":v[2],disabled:r,readOnly:n,tabIndex:n?-1:0,autoComplete:"off",placeholder:T!==o[2]||n?"YYYY":""})]}),(()=>{if(!i&&!n&&c)return e(ep,{$hide:I,$disabled:r,onMouseDown:N,children:c})})()]})})),rp=F(Yh)`
    height: 3rem;
`,np=t=>{var{minDate:r,maxDate:n,disabled:o,disabledDates:i,error:a,hideInputKeyboard:s,value:c,onChange:u,onFocus:f,onBlur:h,onYearMonthDisplayChange:p,withButton:m=!0,readOnly:b,id:v,allowDisabledSelection:y,zIndex:x,dropdownRootNode:w}=t,$=st(t,["minDate","maxDate","disabled","disabledDates","error","hideInputKeyboard","value","onChange","onFocus","onBlur","onYearMonthDisplayChange","withButton","readOnly","id","allowDisabledSelection","zIndex","dropdownRootNode"]);const[C,D]=g(Lc.sanitizeInput(c)),[S,k]=g(Lc.sanitizeInput(c)),[E,F]=g(void 0),[O,T]=g(!1),[_,I]=g(!1),M=l(null),A=l(null),B=l(null);d((()=>{const e=Lc.sanitizeInput(c);D(e),k(e)}),[c]);const j=e=>{!y&&Lc.isDateDisabled(e,{disabledDates:i,minDate:r,maxDate:n})||(k(e),m||(H(e),D(e),e&&T(!1)))},z=e=>{var t;k(e),m||(H(e),D(e),e&&(null===(t=A.current)||void 0===t||t.focusYearRef(),T(!1)),F(void 0))},R=()=>{b||o||(T(!0),_||(I(!0),f&&f()))},L=e=>{var t,r,n;const o=e.relatedTarget,i=B.current&&B.current.contains(o),a=M.current&&M.current.contains(o),l=(null===(t=null==o?void 0:o.matches)||void 0===t?void 0:t.call(o,"[data-floating-ui-focusable]"))||(null===(r=null==o?void 0:o.matches)||void 0===r?void 0:r.call(o,"[data-floating-ui-focus-guard]"));(_&&!O&&!a&&!l||O&&!a&&!i&&!l)&&(null===(n=A.current)||void 0===n||n.resetInput(),k(C),I(!1),T(!1),W())},P=e=>{F(e)},N=e=>{var t,r;switch(e){case"reset":k(C);break;case"confirmed":D(S),H(S)}xc(S,"YYYY-MM-DD",!0).isValid()?null===(t=A.current)||void 0===t||t.focusYearRef():null===(r=M.current)||void 0===r||r.focus(),T(!1)},H=e=>{u&&u(e)},W=()=>{h&&h()};return e($f,{enabled:!b&&!o,isOpen:O,renderElement:()=>e(rp,Object.assign({role:"group",tabIndex:0,ref:M,onBlur:L,onFocus:R,$disabled:o,$readOnly:b,$focused:_,$error:a,id:v,"data-testid":$["data-testid"],"aria-disabled":o},$,{children:e(tp,{ref:A,disabled:o,onChange:j,readOnly:b,focused:O,names:["start-day","start-month","start-year"],value:S,hoverValue:E,hideInputKeyboard:s})})),renderDropdown:({elementWidth:t})=>e(zh,{variant:"single",ref:B,initialCalendarDate:S,withButton:m,value:S,disabledDates:i,minDate:r,maxDate:n,allowDisabledSelection:y,onHover:P,onSelect:z,onDismiss:N,onYearMonthDisplayChange:p,width:t,isFocusable:!b&&!o}),onClose:()=>{var e;null===(e=A.current)||void 0===e||e.resetInput(),k(C),T(!1),I(!1),W(),F(void 0)},onDismiss:()=>{var e,t;null===(e=A.current)||void 0===e||e.resetInput(),null===(t=M.current)||void 0===t||t.focus(),k(C),T(!1)},customZIndex:x,offset:16,rootNode:w})},op=F.div`
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
                        100% - ${ma.Spec["body-size-baseline"]} -
                            ${ya["spacing-16"]}
                    );
                    flex: unset;
                }

                [data-id="range-container-elem2-container"] {
                    margin-top: ${ya["spacing-8"]};
                }
            `}}
`,ip=F.div`
    width: 100%; // Force next flex item to break to next line
`,ap=F.div`
    display: flex;
    flex: 1;
    align-items: center;
`,lp=F(ce)`
    color: ${ga.icon};
    width: ${ma.Spec["body-size-baseline"]};
    height: ${ma.Spec["body-size-baseline"]};
    flex-shrink: 0;
    margin: 0 ${ya["spacing-8"]};
    align-self: center;
`,sp=F.div`
    position: absolute;
    background: ${e=>e.$error?ga["border-error-focus-strong"]:ga["border-focus-strong"]};
    height: 2px;
    // half - half padding - half icon width
    width: calc(
        50% - ${ya["spacing-8"]} - (${ma.Spec["body-size-baseline"]} / 2)
    );
    transition: left ${ba["duration-350"]} ${ba["ease-standard"]},
        opacity ${ba["duration-350"]} ${ba["ease-standard"]};
    left: 0;
    bottom: 0;

    ${e=>{switch(e.$position){case"start":return O`
                    opacity: 1;
                `;case"end":return O`
                    left: calc(50% + ${ya["spacing-16"]});
                    opacity: 1;
                `;case"none":return O`
                    opacity: 0;
                `}}}

    ${e=>{if(e.$wrap)return O`
                display: none;
            `}}
`,dp=({children:r,currentActive:n,error:o,className:i,wrap:a})=>{const[l,s]=r;return t(op,{className:i,$wrap:a,children:[e(ap,{"data-id":"range-container-elem1-container",children:l}),e(lp,{"aria-hidden":"true"}),a&&e(ip,{}),e(ap,{"data-id":"range-container-elem2-container",children:s}),e(sp,{"data-id":"range-container-indicator",$position:n,$error:o,$wrap:a})]})},cp=(e,t,r)=>{const n=[];e&&n.push(`[${e}]`),n.push(t,r),console.log(...n)},up=F(Yh)`
    ${e=>{if(e.$wrap)return!0===e.$readOnly?O`
                    padding: ${ya["spacing-12"]} 0;
                `:O`
                padding: ${ya["spacing-12"]} ${ya["spacing-16"]};
            `}}
`,fp=F.div`
    display: flex;
    align-items: center;
    height: calc(3rem - 2px); // exclude top and bottom borders
    width: 100%;

    ${e=>e.$wrap&&O`
            height: fit-content;
        `}
`,hp={initialStart:"",initialEnd:"",selectedStart:"",selectedEnd:"",currentFocus:"none",calendarOpen:!1,isStartDirty:!1,isEndDirty:!1,focused:!1},pp=r=>{var{minDate:n,maxDate:o,disabled:i,disabledDates:a,error:u,hideInputKeyboard:f,value:h,valueEnd:p,onChange:m,onFocus:b,onBlur:v,onYearMonthDisplayChange:y,withButton:x=!0,variant:w="range",numberOfDays:$=7,readOnly:C,id:D,allowDisabledSelection:S,zIndex:k,dropdownRootNode:E}=r,F=st(r,["minDate","maxDate","disabled","disabledDates","error","hideInputKeyboard","value","valueEnd","onChange","onFocus","onBlur","onYearMonthDisplayChange","withButton","variant","numberOfDays","readOnly","id","allowDisabledSelection","zIndex","dropdownRootNode"]);const[O,T]=g(),[_,I]=g(void 0),M="week"===w,A="fixed-range"===w,[B,j]=g(!1),[z,R]=g(!1),[{selectedStart:L,selectedEnd:P,currentFocus:N,calendarOpen:H,isStartDirty:W,isEndDirty:Y,focused:V},U]=(({initialState:e,reducers:t,name:r,debug:n})=>{const[o,i]=s(((e,r)=>t[r.type]?t[r.type](e,r.payload):e),e);return[o,Object.fromEntries(Object.keys(t).map((e=>[e,t=>{n&&cp(r,e,t),i({type:e,payload:t})}])))]})({name:"date-range-input",initialState:hp,reducers:{blur:e=>Object.assign(Object.assign({},e),{selectedStart:e.initialStart,selectedEnd:e.initialEnd,currentFocus:"none",calendarOpen:!1,isStartDirty:!1,isEndDirty:!1,focused:!1}),dismiss:e=>Object.assign(Object.assign({},e),{selectedStart:e.initialStart,selectedEnd:e.initialEnd,currentFocus:"none",calendarOpen:!1,isStartDirty:!1,isEndDirty:!1}),changeStart:(e,t)=>Object.assign(Object.assign({},e),{selectedStart:t,isStartDirty:!0}),changeEnd:(e,t)=>Object.assign(Object.assign({},e),{selectedEnd:t,isEndDirty:!0}),reselectStart:e=>Object.assign(Object.assign({},e),{selectedStart:"",currentFocus:"start"}),reselectEnd:e=>Object.assign(Object.assign({},e),{selectedEnd:"",currentFocus:"end"}),focus:(e,t)=>Object.assign(Object.assign({},e),{currentFocus:M?"none":A?"start":t,calendarOpen:!C,focused:!0}),cancel:e=>Object.assign(Object.assign({},e),{selectedStart:e.initialStart,selectedEnd:e.initialEnd,currentFocus:"none",calendarOpen:!1}),done:(e,t)=>Object.assign(Object.assign({},e),{selectedStart:t.start,selectedEnd:t.end,initialStart:t.start,initialEnd:t.end,currentFocus:"none",calendarOpen:!1,isStartDirty:!1,isEndDirty:!1}),resetStart:e=>Object.assign(Object.assign({},e),{selectedStart:e.initialStart}),resetEnd:e=>Object.assign(Object.assign({},e),{selectedEnd:e.initialEnd}),resetRange:(e,t)=>Object.assign(Object.assign({},e),{initialStart:t.start,selectedStart:t.start,initialEnd:t.end,selectedEnd:t.end})}}),K=l(!1),q=l(null),Z=l(null),G=l(null),X=l(null),J=(({maxWidth:e,targetRef:t})=>{const[r,n]=g(!1);return mc({targetRef:t,refreshMode:"throttle",refreshRate:300,handleHeight:!1,onResize:c((t=>{n(t<=e)}),[e])}),r})({maxWidth:320,targetRef:q});d((()=>{U.resetRange({start:Lc.sanitizeInput(h),end:Lc.sanitizeInput(p)})}),[h,p]),d((()=>{"start"===N?T(L):"end"===N&&P&&T(P)}),[N]);const Q=e=>{var t,r,n;"Enter"!==e.code||x||(L&&P?(U.done({start:L,end:P}),null==m||m(L,P)):(U.dismiss(),null===(t=q.current)||void 0===t||t.focus(),null===(r=G.current)||void 0===r||r.resetPlaceholder(),null===(n=X.current)||void 0===n||n.resetPlaceholder()))},ee=e=>{var t;if(pe(e))return void(K.current=!0);if(U.changeStart(e),e&&(null===(t=Z.current)||void 0===t||t.setCalendarDate(e)),K.current=!1,!e)return void(x||P||!Y||(U.resetRange({start:"",end:""}),null==m||m("","")));if(!P)return void U.focus("end");if(xc(e).isAfter(P,"day"))U.reselectEnd();else{if(Y)return x?void 0:(U.done({start:e,end:P}),void(null==m||m(e,P)));U.focus("end")}},te=e=>{var t,r,n;if(pe(e))return void(K.current=!0);if(xc(e).isBefore(L,"day"))return U.changeStart(e),null===(t=Z.current)||void 0===t||t.setCalendarDate(e),void U.reselectEnd();if(U.changeEnd(e),e&&(null===(r=Z.current)||void 0===r||r.setCalendarDate(e)),e){if(L)return x?void 0:(null===(n=X.current)||void 0===n||n.focusYearRef(),U.done({start:L,end:e}),void(null==m||m(L,e)));U.focus("start")}else x||L||!W||(U.resetRange({start:"",end:""}),null==m||m("",""))},re=e=>{var t,r;if(pe(e))return void(K.current=!0);if(U.changeStart(e),null===(t=Z.current)||void 0===t||t.setCalendarDate(e),K.current=!1,!e)return void(x?U.changeEnd(""):(U.resetRange({start:"",end:""}),null==m||m("","")));const n=xc(e).format("YYYY-MM-DD"),o=xc(n).add($-1,"day").format("YYYY-MM-DD");return U.changeStart(n),U.changeEnd(o),K.current=!1,x?void 0:(U.done({start:n,end:o}),null===(r=G.current)||void 0===r||r.focusYearRef(),void(null==m||m(n,o)))},ne=()=>{(M||A)&&R(!0),M&&j(!0),C||i||V||(U.focus("start"),null==b||b())},oe=e=>{var t,r,n,o;const i=e.relatedTarget,a=Z.current&&Z.current.contains(i),l=q.current&&q.current.contains(i),s=(null===(t=null==i?void 0:i.matches)||void 0===t?void 0:t.call(i,"[data-floating-ui-focusable]"))||(null===(r=null==i?void 0:i.matches)||void 0===r?void 0:r.call(i,"[data-floating-ui-focus-guard]"));(V&&!H&&!l&&!s||H&&!l&&!a&&!s)&&(U.blur(),R(!1),j(!1),null===(n=G.current)||void 0===n||n.resetPlaceholder(),null===(o=X.current)||void 0===o||o.resetPlaceholder(),he())},ie=e=>t=>{t.stopPropagation(),C||(U.focus(e),ae(),le(),V||null==b||b())},ae=()=>{if(M){const e=Rc.toDayjs(L).startOf("week").format("YYYY-MM-DD");j(!0),R(!0),T(e)}},le=()=>{A&&(R(!0),T(L))},se=e=>{var t;e&&!K.current||(U.resetStart(),null===(t=G.current)||void 0===t||t.resetInput())},de=e=>{var t;e&&!K.current||(U.resetEnd(),null===(t=X.current)||void 0===t||t.resetInput())},ce=e=>{switch(w){case"week":(e=>{var t;const r=xc(e).startOf("week").format("YYYY-MM-DD"),n=xc(e).endOf("week").format("YYYY-MM-DD");if(U.changeStart(r),U.changeEnd(n),K.current=!1,!x)null===(t=X.current)||void 0===t||t.focusYearRef(),U.done({start:r,end:n}),null==m||m(r,n)})(e);break;case"fixed-range":re(e);break;default:"start"===N?ee(e):"end"===N&&te(e)}},ue=e=>{var t,r,n;switch(null===(t=q.current)||void 0===t||t.focus(),e){case"reset":U.cancel();break;case"confirmed":if(U.done({start:L,end:P}),null==m||m(L,P),M)break;ge(L,P)&&("range"===w?null===(r=X.current)||void 0===r||r.focusYearRef():null===(n=G.current)||void 0===n||n.focusYearRef())}},fe=e=>{I(e)},he=()=>{v&&v()},pe=e=>!S&&e&&Lc.isDateDisabled(e,{disabledDates:a,minDate:n,maxDate:o}),ge=(e,t)=>!(!e||!t)&&xc(e).isBefore(t,"day"),me=e=>{let t={start:void 0,end:void 0};switch(w){case"range":t={start:"start"===N?_:void 0,end:"end"===N?_:void 0};break;case"week":if(!_)return;t={start:xc(_).startOf("week").format("YYYY-MM-DD"),end:xc(_).endOf("week").format("YYYY-MM-DD")};break;case"fixed-range":if(!_)return;t={start:xc(_).format("YYYY-MM-DD"),end:xc(_).add($-1,"day").format("YYYY-MM-DD")}}return t[e]};return e($f,{enabled:!C&&!i,isOpen:H,onClose:()=>{var e,t;U.blur(),j(!1),R(!1),null===(e=G.current)||void 0===e||e.resetPlaceholder(),null===(t=X.current)||void 0===t||t.resetPlaceholder(),he()},onDismiss:()=>{var e,t,r;U.dismiss(),null===(e=q.current)||void 0===e||e.focus(),null===(t=G.current)||void 0===t||t.resetPlaceholder(),null===(r=X.current)||void 0===r||r.resetPlaceholder()},renderElement:()=>e(up,Object.assign({role:"group",ref:q,tabIndex:0,onFocus:ne,onBlur:oe,$focused:V,$disabled:i,$readOnly:C,$error:u,$wrap:J,id:D,"data-testid":F["data-testid"],"aria-disabled":i,onKeyDown:Q},F,{children:t(dp,{currentActive:N,wrap:J,error:u,children:[e(fp,{$wrap:J,children:e(tp,{ref:G,placeholder:"From",names:["start-day","start-month","start-year"],inputLabels:["Start Date","Start Month","Start Year"],value:L,disabled:i,readOnly:B||C,focused:"start"===N,hoverValue:me("start"),onChange:A?re:ee,onFocus:ie("start"),onBlur:se,hideInputKeyboard:f})}),e(fp,{$wrap:J,children:e(tp,{ref:X,placeholder:"To",names:["end-day","end-month","end-year"],inputLabels:["End Date","End Month","End Year"],value:P,disabled:i,readOnly:z||C,focused:"end"===N,hoverValue:me("end"),onChange:te,onFocus:ie("end"),onBlur:de,hideInputKeyboard:f})})]})})),renderDropdown:({elementWidth:t})=>e(zh,{ref:Z,variant:w,initialCalendarDate:O,withButton:x,value:L,endValue:P,selectWithinRange:W||Y,currentFocus:N,disabledDates:a,minDate:n,maxDate:o,allowDisabledSelection:S,onSelect:ce,onDismiss:ue,onHover:fe,onYearMonthDisplayChange:y,numberOfDays:$,width:t,isFocusable:!C&&!i}),customZIndex:k,offset:16,rootNode:E})},gp=F(Af)`
    flex-direction: ${e=>"right"===e.$buttonIconPosition?"row-reverse":"row"};
    gap: 0.5rem;

    svg {
        flex-shrink: 0;
        height: 1em;
        width: 1em;
    }
`,mp=(r,n)=>{const{children:i,disabled:a=!1,styleType:l="default",danger:s=!1,icon:d,iconPosition:c="left",loading:u=!1,focusableWhenDisabled:f=!1,onClick:h}=r,p=st(r,["children","disabled","styleType","danger","icon","iconPosition","loading","focusableWhenDisabled","onClick"]),g={$buttonIconPosition:c,$buttonStyle:a?"disabled":l,$buttonSizeStyle:"default",$buttonIsDanger:s};return t(gp,Object.assign({ref:n,"data-testid":p["data-testid"]||"button-with-icon",disabled:a&&!f,"aria-disabled":a,"aria-busy":u,onClick:a?void 0:h},g,p,{children:[u?e(Mf,{}):d?o.cloneElement(d,{"aria-hidden":!0}):null,e("span",{children:i})]}))};mp.displayName="ButtonWithIcon.Default";const bp=(r,n)=>{const{children:i,disabled:a=!1,styleType:l="default",danger:s=!1,icon:d,iconPosition:c="left",loading:u=!1,focusableWhenDisabled:f=!1,onClick:h}=r,p=st(r,["children","disabled","styleType","danger","icon","iconPosition","loading","focusableWhenDisabled","onClick"]),g={$buttonIconPosition:c,$buttonStyle:a?"disabled":l,$buttonSizeStyle:"small",$buttonIsDanger:s};return t(gp,Object.assign({ref:n,"data-testid":p["data-testid"]||"button-with-icon",disabled:a&&!f,"aria-disabled":a,"aria-busy":u,onClick:a?void 0:h},g,p,{children:[u?e(Mf,{}):d?o.cloneElement(d,{"aria-hidden":!0}):null,e("span",{children:i})]}))};bp.displayName="ButtonWithIcon.Small";const vp={Default:o.forwardRef(mp),Small:o.forwardRef(bp)},yp=({className:t,progress:r,color:n,"data-testid":o})=>e(xp,{className:t,$innerWidth:r,$color:n,"data-testid":o,children:e("progress",{value:100*r,max:100})}),xp=F.div`
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

    ${e=>{const{$color:t}=e;let r;return r=t&&"string"==typeof t?t:t?t(e):ga["icon-primary-subtle"](e),O`
            border: ${va["width-010"]} ${va.solid} ${r};
            border-radius: ${xa.sm};

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
`,wp=F.button`
    align-items: center;
    border-radius: ${xa.sm};
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
                    background-color: ${ga.bg};
                    border: ${va["width-010"]} ${va.solid}
                        ${ga["border-primary"]};
                    color: ${ga["text-primary"]};

                    &:hover {
                        background-color: ${ga["bg-hover-neutral"]};
                    }
                `;case"light":return O`
                    background-color: ${ga.bg};
                    border: ${va["width-010"]} ${va.solid}
                        ${ga.border};
                    color: ${ga["text-primary"]};

                    &:hover {
                        background-color: ${ga["bg-hover-neutral"]};
                    }
                `;case"disabled":return O`
                    background-color: ${ga["bg-disabled"]};
                    border: ${va["width-010"]} ${va.solid}
                        ${ga["border-disabled"]};
                    color: ${ga["text-disabled"]};
                    cursor: not-allowed;
                `;default:return O`
                    background-color: ${ga["bg-primary"]};
                    border: none;
                    color: ${ga["text-inverse"]};

                    &:hover {
                        background-color: ${ga["bg-primary-hover"]};
                    }
                `}}}
`,$p=o.forwardRef(((t,r)=>{var{"data-testid":n,styleType:o="primary",children:i,sizeType:a="default",type:l="button",disabled:s=!1,focusableWhenDisabled:d=!1,onClick:c}=t,u=st(t,["data-testid","styleType","children","sizeType","type","disabled","focusableWhenDisabled","onClick"]);return e(wp,Object.assign({"data-testid":n||"iconButton",ref:r,type:l,$styleType:s?"disabled":o,$sizeType:a,"aria-disabled":s,disabled:s&&!d,onClick:s?void 0:c},u,{children:i}))})),Cp=F.div`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 100%;
    overflow: hidden;
    ${e=>{return t=e.$show,r=e.$animationFrom||"bottom",t?`\n\t\t\t${r}: 0;\n\t\t\topacity: 1;\n\t\t\ttransition: all 300ms cubic-bezier(0.21, 0.79, 0.53, 1);\n\t\t\ttransition-delay: 200ms;\n\t\t`:`\n\t\t${r}: -3%;\n\t\topacity: 0;\n\t\ttransition: all 300ms cubic-bezier(0.4, 0.34, 0.38, 1);\n\t`;var t,r}}

    ${Ca.MaxWidth.sm} {
        height: calc(
            ${e=>e.$verticalHeight?`${e.$verticalHeight}px`:"1vh"} * 100
        );

        top: ${e=>e.$offsetTop||0}px;
    }
`,Dp=Object.assign((t=>{var{id:r="modal",show:n,animationFrom:o="bottom",children:i,enableOverlayClick:a=!0,rootComponentId:l,zIndex:s,onOverlayClick:c,dismissKeyboardOnShow:u=!0}=t,f=st(t,["id","show","animationFrom","children","enableOverlayClick","rootComponentId","zIndex","onOverlayClick","dismissKeyboardOnShow"]);const{verticalHeight:h,offsetTop:p}=vu();return d((()=>{var e,t;n&&u&&(null===(t=null===(e=document.activeElement)||void 0===e?void 0:e.blur)||void 0===t||t.call(e))}),[n]),e(hu,{"data-testid":`${r}-overlay`,show:n,enableOverlayClick:a,onOverlayClick:c,id:r,rootId:l,zIndex:s,children:e(Cp,Object.assign({$show:n,$animationFrom:o,"data-testid":r,$verticalHeight:h,$offsetTop:p},f,{children:i}))})}),{Box:ou}),Sp=O`
    ${e=>`\n        ${Ca.MaxWidth.sm(e)},\n        (orientation: landscape) and (max-height: ${$a["sm-max"](e)}px)\n    `}
`,kp=O`
    ${e=>`\n        @media (orientation: landscape) and (max-height: ${$a["sm-max"](e)}px)\n    `}
`,Ep=F.div`
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    ${e=>O`
            ${va.Util["dashed-default"]({radius:xa.sm,thickness:va["width-040"],colour:e.$disabled?ga["border-disabled"]:ga.border})}

            background-color: ${e.$disabled?ga["bg-disabled"]:ga.bg};
        `}
    height: 14.125rem;
`,Fp=F(Pf.Default)`
    width: fit-content;
    margin: 0 ${ya["spacing-20"]};

    &:disabled {
        border-color: ${ga["border-strong"]};
    }
`,Op=F($p)`
    position: absolute;
    top: ${ya["spacing-16"]};
    right: ${ya["spacing-16"]};

    &:disabled {
        border-color: ${ga["border-strong"]};
    }
`,Tp=F.img`
    display: block;
    object-fit: contain;
    object-position: center;
    width: calc(100% - (3rem + ${ya["spacing-16"]}) * 2);
    height: 100%;
`,_p=F.div`
    background: ${ga["bg-primary-subtlest"]};
    border: ${va["width-010"]} ${va.solid} ${ga.border};
    border-radius: ${xa.sm};
    margin: 0 ${ya["spacing-20"]};
    padding: ${ya["spacing-16"]};
    display: flex;
    gap: ${ya["spacing-16"]};
    flex: 1;
    flex-direction: column;
    align-items: center;
`,Ip=F(Wa.BodySM)`
    margin-top: ${ya["spacing-16"]};
`,Mp=F(Dp)`
    /* increase specificity as the styles are overwritten */
    && {
        height: 100%;
        overflow-y: auto;
    }
`,Ap=F.div`
    width: 100%;
    margin: auto;
    padding: ${ya["layout-xxl"]} ${ya["layout-sm"]};

    ${Sp} {
        padding: 0;
        width: 100%;
        height: 100%;
    }
`,Bp=F(Dp.Box)`
    width: 100%;
    height: 29rem;
    max-width: 672px;
    max-height: none;
    margin: 0 auto;
    padding: ${ya["spacing-16"]};

    ${Sp} {
        display: flex;
        flex-direction: column;
        max-width: none;
        height: 100%;
        border-radius: 0;
        padding: 0;

        --close-button-top-inset: ${ya["spacing-8"]};
        --close-button-right-inset: ${ya["spacing-20"]};
    }
`,jp=F.h2`
    ${ma["body-baseline-semibold"]}
    color: ${ga.text};
    margin-bottom: ${ya["spacing-16"]};
    text-align: center;

    ${Sp} {
        ${ma["body-md-semibold"]}
        margin: ${ya["spacing-12"]} 0;
    }
`,zp=F.div`
    width: 100%;
    height: 20rem;
    border-radius: ${xa.lg};
    overflow: hidden;

    ${Sp} {
        border-radius: 0;
        flex: 1;
    }

    ${kp} {
        background: ${ga["bg-strong"]};
    }
`,Rp=F.div`
    position: relative;
    width: 100%;
    height: 100%;
    background: ${ga["bg-stronger"]};
    margin: auto;

    ${Sp} {
        aspect-ratio: 4/3;
    }
    ${Ca.MaxWidth.sm} {
        width: 100%;
        height: auto;
    }
    ${kp} {
        width: auto;
        height: 100%;
    }
`,Lp=F.div`
    position: absolute;
    left: 50%;
    top: calc(75% - 1px);
    width: 300px;
    height: 2px;
    transform: translateX(-50%);
    background-color: ${ga["border-strong"]};
    pointer-events: none;

    ${Sp} {
        width: calc(100% - ${ya["spacing-40"]});
        max-width: 300px;
        left: 50%;
    }
`,Pp=F.div`
    display: flex;
    justify-content: space-between;
    margin-top: ${ya["spacing-16"]};

    ${Ca.MaxWidth.sm} {
        flex-direction: column-reverse;
        margin: ${ya["spacing-16"]} ${ya["spacing-24"]}
            ${ya["spacing-48"]};
        gap: ${ya["spacing-16"]};
    }

    ${kp} {
        flex-direction: row;
        margin: ${ya["spacing-16"]} ${ya["spacing-20"]};
    }
`,Np=F(Pf.Default)`
    width: 8.5rem;
    ${Ca.MaxWidth.sm} {
        width: 100%;
    }
    ${kp} {
        height: 2.5rem;
    }
`,Hp=F.div`
    width: 100%;
    height: 100%;
    overflow: hidden;
`,Wp=F.canvas`
    cursor: crosshair;
`,Yp=D((()=>dt(void 0,void 0,void 0,(function*(){return{default:(yield import("./e-signature-canvas.efb70933.js")).ESignatureCanvas}})))),Vp=n=>{const{description:o,id:i,loadingProgress:a,loadingLabel:s="Uploading...",onChange:c,value:u,disabled:f}=n,h=st(n,["description","id","loadingProgress","loadingLabel","onChange","value","disabled"]),[p,m]=g(!1),v=l(null),[y,x]=g(u),w=b(_),$=$a["sm-max"]({theme:w}),C=Jc.useMediaQuery({maxWidth:$}),D=Jc.useMediaQuery({maxHeight:$,orientation:"landscape"}),k=()=>{var e;null===(e=v.current)||void 0===e||e.clear()},E=()=>{if(v.current){const e=v.current.export();x(e),m(!1),null==c||c(e)}};d((()=>{x(u)}),[u]);return t("div",Object.assign({},h,{children:[e(Ep,{$disabled:f,children:"number"==typeof a?t(_p,{children:[s&&e(Wa.BodyMD,{children:s}),e(yp,{progress:null!=a?a:0,"data-testid":`${i||"e-signature"}-progress-bar`})]}):y?t(r,{children:[e(Tp,{src:y,alt:"Signature preview"}),e(Op,{styleType:"light",onClick:()=>m(!0),id:i,"aria-label":"Edit signature",disabled:f,children:e(ue,{})})]}):e(Fp,{type:"button",styleType:"secondary","aria-label":"Add signature",id:i,onClick:()=>m(!0),disabled:f,children:"Add signature"})}),e(Mp,{"data-testid":"signature-modal",show:p,children:e(Ap,{children:t(Bp,{onClose:()=>m(!1),children:[e(jp,{children:"Signature"}),e(zp,{children:t(Rp,{children:[e(Lp,{}),e(S,{fallback:null,children:p&&e(Yp,{ref:v,baseImageDataURL:y})})]})}),t(Pp,{children:[e(Np,{as:D?vp.Small:vp.Default,type:"button",styleType:C&&!D?"light":"link",icon:e(fe,{}),onClick:k,children:"Clear"}),e(Np,{as:D?Pf.Small:Pf.Default,type:"button",onClick:E,children:"Save"})]})]})})}),o?e(Ip,{children:o}):null]}))};let Up=null;class Kp{isAttached(){var e;return null===(e=this.node)||void 0===e?void 0:e.isConnected}createLog(e){let t=document.createElement("div");return t.setAttribute("role","log"),t.setAttribute("aria-live",e),t.setAttribute("aria-relevant","additions"),t}destroy(){this.node&&(document.body.removeChild(this.node),this.node=null)}announce(e,t="assertive",r=7e3){var n,o;if(!this.node)return;let i=document.createElement("div");"object"==typeof e?(i.setAttribute("role","img"),i.setAttribute("aria-labelledby",e["aria-labelledby"])):i.textContent=e,"assertive"===t?null===(n=this.assertiveLog)||void 0===n||n.appendChild(i):null===(o=this.politeLog)||void 0===o||o.appendChild(i),""!==e&&setTimeout((()=>{i.remove()}),r)}clear(e){this.node&&(e&&"assertive"!==e||!this.assertiveLog||(this.assertiveLog.innerHTML=""),e&&"polite"!==e||!this.politeLog||(this.politeLog.innerHTML=""))}constructor(){this.node=null,this.assertiveLog=null,this.politeLog=null,"undefined"!=typeof document&&(this.node=document.createElement("div"),this.node.dataset.liveAnnouncer="true",Object.assign(this.node.style,{border:0,clip:"rect(0 0 0 0)",clipPath:"inset(50%)",height:"1px",margin:"-1px",overflow:"hidden",padding:0,position:"absolute",width:"1px",whiteSpace:"nowrap"}),this.assertiveLog=this.createLog("assertive"),this.node.appendChild(this.assertiveLog),this.politeLog=this.createLog("polite"),this.node.appendChild(this.politeLog),document.body.prepend(this.node))}}function qp(e,t){return qp=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},qp(e,t)}function Zp(e){return e&&e.stopPropagation&&e.stopPropagation(),e&&e.preventDefault&&e.preventDefault(),!1}function Gp(e){return null==e?[]:Array.isArray(e)?e.slice():[e]}function Xp(e){return null!==e&&1===e.length?e[0]:e.slice()}function Jp(e){Object.keys(e).forEach((t=>{"undefined"!=typeof document&&document.addEventListener(t,e[t],!1)}))}function Qp(e,t){return eg(function(e,t){let r=e;return r<=t.min&&(r=t.min),r>=t.max&&(r=t.max),r}(e,t),t)}function eg(e,t){const r=(e-t.min)%t.step;let n=e-r;return 2*Math.abs(r)>=t.step&&(n+=r>0?t.step:-t.step),parseFloat(n.toFixed(5))}let tg=function(e){function t(t){var r;(r=e.call(this,t)||this).onKeyUp=()=>{r.onEnd()},r.onMouseUp=()=>{r.onEnd(r.getMouseEventMap())},r.onTouchEnd=e=>{e.preventDefault(),r.onEnd(r.getTouchEventMap())},r.onBlur=()=>{r.setState({index:-1},r.onEnd(r.getKeyDownEventMap()))},r.onMouseMove=e=>{r.setState({pending:!0});const t=r.getMousePosition(e),n=r.getDiffPosition(t[0]),o=r.getValueFromPosition(n);r.move(o)},r.onTouchMove=e=>{if(e.touches.length>1)return;r.setState({pending:!0});const t=r.getTouchPosition(e);if(void 0===r.isScrolling){const e=t[0]-r.startPosition[0],n=t[1]-r.startPosition[1];r.isScrolling=Math.abs(n)>Math.abs(e)}if(r.isScrolling)return void r.setState({index:-1});const n=r.getDiffPosition(t[0]),o=r.getValueFromPosition(n);r.move(o)},r.onKeyDown=e=>{if(!(e.ctrlKey||e.shiftKey||e.altKey||e.metaKey))switch(r.setState({pending:!0}),e.key){case"ArrowLeft":case"ArrowDown":case"Left":case"Down":e.preventDefault(),r.moveDownByStep();break;case"ArrowRight":case"ArrowUp":case"Right":case"Up":e.preventDefault(),r.moveUpByStep();break;case"Home":e.preventDefault(),r.move(r.props.min);break;case"End":e.preventDefault(),r.move(r.props.max);break;case"PageDown":e.preventDefault(),r.moveDownByStep(r.props.pageFn(r.props.step));break;case"PageUp":e.preventDefault(),r.moveUpByStep(r.props.pageFn(r.props.step))}},r.onSliderMouseDown=e=>{if(!r.props.disabled&&2!==e.button){if(r.setState({pending:!0}),!r.props.snapDragDisabled){const t=r.getMousePosition(e);r.forceValueFromPosition(t[0],(e=>{r.start(e,t[0]),Jp(r.getMouseEventMap())}))}Zp(e)}},r.onSliderClick=e=>{if(!r.props.disabled&&r.props.onSliderClick&&!r.hasMoved){const t=r.getMousePosition(e),n=Qp(r.calcValue(r.calcOffsetFromPosition(t[0])),r.props);r.props.onSliderClick(n)}},r.createOnKeyDown=e=>t=>{r.props.disabled||(r.start(e),Jp(r.getKeyDownEventMap()),Zp(t))},r.createOnMouseDown=e=>t=>{if(r.props.disabled||2===t.button)return;r.setState({pending:!0});const n=r.getMousePosition(t);r.start(e,n[0]),Jp(r.getMouseEventMap()),Zp(t)},r.createOnTouchStart=e=>t=>{if(r.props.disabled||t.touches.length>1)return;r.setState({pending:!0});const n=r.getTouchPosition(t);r.startPosition=n,r.isScrolling=void 0,r.start(e,n[0]),Jp(r.getTouchEventMap()),function(e){e.stopPropagation&&e.stopPropagation()}(t)},r.handleResize=()=>{const e=window.setTimeout((()=>{r.pendingResizeTimeouts.shift(),r.resize()}),0);r.pendingResizeTimeouts.push(e)},r.renderThumb=(e,t)=>{const n=r.props.thumbClassName+" "+r.props.thumbClassName+"-"+t+" "+(r.state.index===t?r.props.thumbActiveClassName:""),o={ref:e=>{r["thumb"+t]=e},key:r.props.thumbClassName+"-"+t,className:n,style:e,onMouseDown:r.createOnMouseDown(t),onTouchStart:r.createOnTouchStart(t),onFocus:r.createOnKeyDown(t),tabIndex:0,role:"slider","aria-orientation":r.props.orientation,"aria-valuenow":r.state.value[t],"aria-valuemin":r.props.min,"aria-valuemax":r.props.max,"aria-label":Array.isArray(r.props.ariaLabel)?r.props.ariaLabel[t]:r.props.ariaLabel,"aria-labelledby":Array.isArray(r.props.ariaLabelledby)?r.props.ariaLabelledby[t]:r.props.ariaLabelledby,"aria-disabled":r.props.disabled},i={index:t,value:Xp(r.state.value),valueNow:r.state.value[t]};return r.props.ariaValuetext&&(o["aria-valuetext"]="string"==typeof r.props.ariaValuetext?r.props.ariaValuetext:r.props.ariaValuetext(i)),r.props.renderThumb(o,i)},r.renderTrack=(e,t,n)=>{const o={key:r.props.trackClassName+"-"+e,className:r.props.trackClassName+" "+r.props.trackClassName+"-"+e,style:r.buildTrackStyle(t,r.state.upperBound-n)},i={index:e,value:Xp(r.state.value)};return r.props.renderTrack(o,i)};let n=Gp(t.value);n.length||(n=Gp(t.defaultValue)),r.pendingResizeTimeouts=[];const i=[];for(let e=0;e<n.length;e+=1)n[e]=Qp(n[e],t),i.push(e);return r.resizeObserver=null,r.resizeElementRef=o.createRef(),r.state={index:-1,upperBound:0,sliderLength:0,value:n,zIndices:i},r}!function(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,qp(e,t)}(t,e);var r=t.prototype;return r.componentDidMount=function(){"undefined"!=typeof window&&(this.resizeObserver=new ResizeObserver(this.handleResize),this.resizeObserver.observe(this.resizeElementRef.current),this.resize())},t.getDerivedStateFromProps=function(e,t){const r=Gp(e.value);return r.length?t.pending?null:{value:r.map((t=>Qp(t,e)))}:null},r.componentDidUpdate=function(){0===this.state.upperBound&&this.resize()},r.componentWillUnmount=function(){this.clearPendingResizeTimeouts(),this.resizeObserver&&this.resizeObserver.disconnect()},r.onEnd=function(e){e&&function(e){Object.keys(e).forEach((t=>{"undefined"!=typeof document&&document.removeEventListener(t,e[t],!1)}))}(e),this.hasMoved&&this.fireChangeEvent("onAfterChange"),this.setState({pending:!1}),this.hasMoved=!1},r.getValue=function(){return Xp(this.state.value)},r.getClosestIndex=function(e){let t=Number.MAX_VALUE,r=-1;const{value:n}=this.state,o=n.length;for(let i=0;i<o;i+=1){const o=this.calcOffset(n[i]),a=Math.abs(e-o);a<t&&(t=a,r=i)}return r},r.getMousePosition=function(e){return[e["page"+this.axisKey()],e["page"+this.orthogonalAxisKey()]]},r.getTouchPosition=function(e){const t=e.touches[0];return[t["page"+this.axisKey()],t["page"+this.orthogonalAxisKey()]]},r.getKeyDownEventMap=function(){return{keydown:this.onKeyDown,keyup:this.onKeyUp,focusout:this.onBlur}},r.getMouseEventMap=function(){return{mousemove:this.onMouseMove,mouseup:this.onMouseUp}},r.getTouchEventMap=function(){return{touchmove:this.onTouchMove,touchend:this.onTouchEnd}},r.getValueFromPosition=function(e){const t=e/(this.state.sliderLength-this.state.thumbSize)*(this.props.max-this.props.min);return Qp(this.state.startValue+t,this.props)},r.getDiffPosition=function(e){let t=e-this.state.startPosition;return this.props.invert&&(t*=-1),t},r.resize=function(){const{slider:e,thumb0:t}=this;if(!e||!t)return;const r=this.sizeKey(),n=e.getBoundingClientRect(),o=e[r],i=n[this.posMaxKey()],a=n[this.posMinKey()],l=t.getBoundingClientRect()[r.replace("client","").toLowerCase()],s=o-l,d=Math.abs(i-a);this.state.upperBound===s&&this.state.sliderLength===d&&this.state.thumbSize===l||this.setState({upperBound:s,sliderLength:d,thumbSize:l})},r.calcOffset=function(e){const t=this.props.max-this.props.min;return 0===t?0:(e-this.props.min)/t*this.state.upperBound},r.calcValue=function(e){return e/this.state.upperBound*(this.props.max-this.props.min)+this.props.min},r.calcOffsetFromPosition=function(e){const{slider:t}=this,r=t.getBoundingClientRect(),n=r[this.posMaxKey()],o=r[this.posMinKey()];let i=e-(window["page"+this.axisKey()+"Offset"]+(this.props.invert?n:o));return this.props.invert&&(i=this.state.sliderLength-i),i-=this.state.thumbSize/2,i},r.forceValueFromPosition=function(e,t){const r=this.calcOffsetFromPosition(e),n=this.getClosestIndex(r),o=Qp(this.calcValue(r),this.props),i=this.state.value.slice();i[n]=o;for(let e=0;e<i.length-1;e+=1)if(i[e+1]-i[e]<this.props.minDistance)return;this.fireChangeEvent("onBeforeChange"),this.hasMoved=!0,this.setState({value:i},(()=>{t(n),this.fireChangeEvent("onChange")}))},r.clearPendingResizeTimeouts=function(){do{const e=this.pendingResizeTimeouts.shift();clearTimeout(e)}while(this.pendingResizeTimeouts.length)},r.start=function(e,t){const r=this["thumb"+e];r&&r.focus();const{zIndices:n}=this.state;n.splice(n.indexOf(e),1),n.push(e),this.setState((r=>({startValue:r.value[e],startPosition:void 0!==t?t:r.startPosition,index:e,zIndices:n})))},r.moveUpByStep=function(e){void 0===e&&(e=this.props.step);const t=this.state.value[this.state.index],r=Qp(this.props.invert&&"horizontal"===this.props.orientation?t-e:t+e,this.props);this.move(Math.min(r,this.props.max))},r.moveDownByStep=function(e){void 0===e&&(e=this.props.step);const t=this.state.value[this.state.index],r=Qp(this.props.invert&&"horizontal"===this.props.orientation?t+e:t-e,this.props);this.move(Math.max(r,this.props.min))},r.move=function(e){const t=this.state.value.slice(),{index:r}=this.state,{length:n}=t,o=t[r];if(e===o)return;this.hasMoved||this.fireChangeEvent("onBeforeChange"),this.hasMoved=!0;const{pearling:i,max:a,min:l,minDistance:s}=this.props;if(!i){if(r>0){const n=t[r-1];e<n+s&&(e=n+s)}if(r<n-1){const n=t[r+1];e>n-s&&(e=n-s)}}t[r]=e,i&&n>1&&(e>o?(this.pushSucceeding(t,s,r),function(e,t,r,n){for(let o=0;o<e;o+=1){const i=n-o*r;t[e-1-o]>i&&(t[e-1-o]=i)}}(n,t,s,a)):e<o&&(this.pushPreceding(t,s,r),function(e,t,r,n){for(let o=0;o<e;o+=1){const e=n+o*r;t[o]<e&&(t[o]=e)}}(n,t,s,l))),this.setState({value:t},this.fireChangeEvent.bind(this,"onChange"))},r.pushSucceeding=function(e,t,r){let n,o;for(n=r,o=e[n]+t;null!==e[n+1]&&o>e[n+1];n+=1,o=e[n]+t)e[n+1]=eg(o,this.props)},r.pushPreceding=function(e,t,r){for(let n=r,o=e[n]-t;null!==e[n-1]&&o<e[n-1];n-=1,o=e[n]-t)e[n-1]=eg(o,this.props)},r.axisKey=function(){return"vertical"===this.props.orientation?"Y":"X"},r.orthogonalAxisKey=function(){return"vertical"===this.props.orientation?"X":"Y"},r.posMinKey=function(){return"vertical"===this.props.orientation?this.props.invert?"bottom":"top":this.props.invert?"right":"left"},r.posMaxKey=function(){return"vertical"===this.props.orientation?this.props.invert?"top":"bottom":this.props.invert?"left":"right"},r.sizeKey=function(){return"vertical"===this.props.orientation?"clientHeight":"clientWidth"},r.fireChangeEvent=function(e){this.props[e]&&this.props[e](Xp(this.state.value),this.state.index)},r.buildThumbStyle=function(e,t){const r={position:"absolute",touchAction:"none",willChange:this.state.index>=0?this.posMinKey():void 0,zIndex:this.state.zIndices.indexOf(t)+1};return r[this.posMinKey()]=e+"px",r},r.buildTrackStyle=function(e,t){const r={position:"absolute",willChange:this.state.index>=0?this.posMinKey()+","+this.posMaxKey():void 0};return r[this.posMinKey()]=e,r[this.posMaxKey()]=t,r},r.buildMarkStyle=function(e){var t;return(t={position:"absolute"})[this.posMinKey()]=e,t},r.renderThumbs=function(e){const{length:t}=e,r=[];for(let n=0;n<t;n+=1)r[n]=this.buildThumbStyle(e[n],n);const n=[];for(let e=0;e<t;e+=1)n[e]=this.renderThumb(r[e],e);return n},r.renderTracks=function(e){const t=[],r=e.length-1;t.push(this.renderTrack(0,0,e[0]));for(let n=0;n<r;n+=1)t.push(this.renderTrack(n+1,e[n],e[n+1]));return t.push(this.renderTrack(r+1,e[r],this.state.upperBound)),t},r.renderMarks=function(){let{marks:e}=this.props;const t=this.props.max-this.props.min+1;return"boolean"==typeof e?e=Array.from({length:t}).map(((e,t)=>t)):"number"==typeof e&&(e=Array.from({length:t}).map(((e,t)=>t)).filter((t=>t%e==0))),e.map(parseFloat).sort(((e,t)=>e-t)).map((e=>{const t=this.calcOffset(e),r={key:e,className:this.props.markClassName,style:this.buildMarkStyle(t)};return this.props.renderMark(r)}))},r.render=function(){const e=[],{value:t}=this.state,r=t.length;for(let n=0;n<r;n+=1)e[n]=this.calcOffset(t[n],n);const n=this.props.withTracks?this.renderTracks(e):null,i=this.renderThumbs(e),a=this.props.marks?this.renderMarks():null;return o.createElement("div",{ref:e=>{this.slider=e,this.resizeElementRef.current=e},style:{position:"relative"},className:this.props.className+(this.props.disabled?" disabled":""),onMouseDown:this.onSliderMouseDown,onClick:this.onSliderClick},n,i,a)},t}(o.Component);tg.displayName="ReactSlider",tg.defaultProps={min:0,max:100,step:1,pageFn:e=>10*e,minDistance:0,defaultValue:0,orientation:"horizontal",className:"slider",thumbClassName:"thumb",thumbActiveClassName:"active",trackClassName:"track",markClassName:"mark",withTracks:!0,pearling:!1,disabled:!1,snapDragDisabled:!1,invert:!1,marks:[],renderThumb:e=>o.createElement("div",e),renderTrack:e=>o.createElement("div",e),renderMark:e=>o.createElement("span",e)};var rg=tg;const ng=F.div`
    isolation: isolate;
`,og=F.div`
    margin-top: ${ya["spacing-8"]};
    display: flex;
    justify-content: space-between;
    gap: ${ya["spacing-8"]};
`,ig=F.div`
    margin-bottom: ${ya["spacing-8"]};
`,ag=F(Wa.BodyBL)`
    overflow-wrap: anywhere;
`,lg=F(rg)`
    height: 0.875rem;
`,sg=F.div`
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

        background-color: ${ga.bg};
        box-shadow: ${wa["sm-subtle"]};
        border: ${va["width-010"]} ${va.solid}
            ${e=>e.$disabled?ga["border-selected-disabled"]:ga["border-strong"]};
        border-radius: ${xa.full};
    }
`,dg=F.div`
    height: 0.875rem;
    width: 0.875rem;
    position: relative;
    outline: none;

    &:focus ${sg}:after {
        outline-offset: -1px;
        outline: ${va["width-040"]} ${va.solid}
            ${ga["border-selected"]};
    }
`,cg=F.div`
    height: 0.25rem;
    top: 50%;
    transform: translateY(-50%);
    border-radius: ${xa.full};

    background: ${e=>e.$color&&"function"==typeof e.$color?e.$color(e):e.$color||ga["border-strong"](e)};
`,ug=r=>{var{id:n,value:o,min:i=0,max:a=100,step:l=1,minRange:s=0,numOfThumbs:c=2,colors:u,disabled:f,readOnly:h,showSliderLabels:p,sliderLabelPrefix:m,sliderLabelSuffix:b,showIndicatorLabel:v,indicatorLabelPrefix:y,indicatorLabelSuffix:x,ariaLabels:w,"aria-invalid":$,"aria-labelledby":C,"aria-describedby":D,renderSliderLabel:S,onChange:k,onChangeEnd:E}=r,F=st(r,["id","value","min","max","step","minRange","numOfThumbs","colors","disabled","readOnly","showSliderLabels","sliderLabelPrefix","sliderLabelSuffix","showIndicatorLabel","indicatorLabelPrefix","indicatorLabelSuffix","ariaLabels","aria-invalid","aria-labelledby","aria-describedby","renderSliderLabel","onChange","onChangeEnd"]);const[O,T]=g(z()),[_]=g((()=>Hc.generate())),I=function(){const e=function(){const e=f||h?ga["border-disabled"]:ga["border-strong"],t=f||h?ga["border-selected-disabled"]:ga["border-selected"];if(1===c)return[t,e];const r=[e];for(let e=0;e<c-1;e++)r.push(t);return r.push(e),r}();return new Array(c+1).fill(0).map(((t,r)=>(null==u?void 0:u[r])||e[r]))}(),M=`${_}-indicator`,A=`${_}-instruction`,B=Array.from({length:c},((e,t)=>(null==w?void 0:w[t])||function(e){return 1===c?"":0===e?"Minimum value slider":e===c-1?"Maximum value slider":"Indeterminate value slider"}(t)));d((()=>{o!==O&&T(z())}),[o]);const j=(e,t)=>{if(f||h)return;const r=function(e,t){if(c<2)return"";const r=O[t],n=t>0?O[t-1]:void 0,o=t<O.length-1?O[t+1]:void 0,i=B[t],a=t>0?B[t-1]:void 0,l=t<B.length-1?B[t+1]:void 0;if(function(e){return["ArrowRight","ArrowUp","PageUp","End"].includes(e)}(e)&&void 0!==o&&r>=o-s)return`The ${R(i)} has reached its limit. Increase the ${L(l)} to set a higher ${L(i)}.`;if(function(e){return["ArrowLeft","ArrowDown","PageDown","Home"].includes(e)}(e)&&void 0!==n&&r<=n+s)return`The ${R(i)} has reached its limit. Decrease the ${L(a)} to set a lower ${L(i)}.`;return""}(e.key,t);var n;r&&(n="assertive",Up&&Up.clear(n),function(e,t="assertive",r=7e3){Up?Up.announce(e,t,r):(Up=new Kp,("boolean"==typeof IS_REACT_ACT_ENVIRONMENT?IS_REACT_ACT_ENVIRONMENT:"undefined"!=typeof jest)?Up.announce(e,t,r):setTimeout((()=>{(null==Up?void 0:Up.isAttached())&&(null==Up||Up.announce(e,t,r))}),100))}(r,"assertive"))};function z(){if(o&&o.length===c)return o;const e=[];for(let t=0;t<c;t++)e.push(i+l*t);return e}function R(e){return e?e.toLowerCase():"slider"}function L(e){return e?e.replace(/ slider$/i,"").toLowerCase():"slider"}const P=e=>S?S(e):t(ag,{children:[m,e,b]});return t(ng,Object.assign({},F,{id:n,role:"group","aria-disabled":f||void 0,children:[!f&&!h&&e(Df,{id:A,children:"Use left and right arrow keys to adjust the slider."}),v&&e(ig,{id:M,children:(()=>{let e="";if(1===O.length)e=`${O[0]}`;else if(2===O.length)e=`${O[0]} - ${O[1]}`;else if(O.length>2){e=`${Math.min(...O)} - ${Math.max(...O)}`}return t(ag,{children:[y,e,x]})})()}),e(lg,{step:l,min:i,max:a,value:O,disabled:f||h,onChange:(e,t)=>{if(h||f)return;if("number"==typeof e){const t=[e];return T(t),void(null==k||k(t))}if(t>-1&&O[t]===e[t])return;const r=[...e];T(r),null==k||k(r)},onAfterChange:e=>{if(!h&&!f)if("number"==typeof e){const t=[e];T(t),null==E||E(t)}else{const t=[...e];T(t),null==E||E(t)}},minDistance:s,renderThumb:(r,n)=>{const o=`${_}-thumb-label-${n.index}`,l=O[n.index];return t(dg,Object.assign({"data-testid":`slider-thumb-${n.index}`},r,{tabIndex:r.tabIndex,"aria-labelledby":kf(C,o),"aria-describedby":kf(D,v?M:void 0,f||h?void 0:A),"aria-valuetext":(d=l,`${m||""}${d}${b||""}`),"aria-valuemin":i,"aria-valuemax":a,"aria-valuenow":l,"aria-readonly":h||void 0,"aria-invalid":$||void 0,onKeyDown:e=>{var t;j(e,n.index),null===(t=r.onKeyDown)||void 0===t||t.call(r,e)},children:[e(Df,{id:o,children:(s=n.index,B[s])}),e(sg,{$disabled:f,$readOnly:h})]}));var s,d},renderTrack:(t,r)=>e(cg,Object.assign({"data-testid":`slider-track-${r.index}`},t,{$color:I[r.index]}))}),p&&t(og,{children:[e("div",{children:P(i)}),e("div",{children:P(a)})]})]}))},fg=F.div`
    display: flex;
    margin-bottom: ${ya["spacing-16"]};
    align-items: baseline;
`,hg=F.div`
    margin: 0 0.5rem;
`,pg=F.div`
    width: 100%;
    height: 4rem;
    display: flex;
    align-items: flex-end;
    padding: 0 0.4375rem;
`,gg=F.div`
    flex: 1;
    border-radius: ${xa.sm} ${xa.sm} 0 0;
    border: 0.5px solid transparent; // space between bars
    background-clip: content-box;

    ${e=>{let t=ga["bg-strongest"];return e.$disabled&&e.$selected?t=ga["bg-selected-stronger-disabled"]:e.$disabled?t=ga["bg-disabled"]:e.$selected&&(t=ga["bg-selected-stronger"]),O`
            background-color: ${t};
        `}}
`,mg=F(ug)`
    margin-top: -0.3125rem;
`,bg=n=>{var{bins:o=[],interval:i,disabled:l,readOnly:s,value:c,showRangeLabels:u,rangeLabelPrefix:f,rangeLabelSuffix:h,ariaLabels:p,onChange:m,onChangeEnd:b,renderEmptyView:v,renderRangeLabel:y}=n,x=st(n,["bins","interval","disabled","readOnly","value","showRangeLabels","rangeLabelPrefix","rangeLabelSuffix","ariaLabels","onChange","onChangeEnd","renderEmptyView","renderRangeLabel"]);const w=o.map((e=>e.count)),$=Math.max(...w),C=o.map((e=>e.minValue)),D=Math.max(...C),S=Math.min(...C),[k,E]=g(_()),F=a((()=>{const e=[...o].sort(((e,t)=>e.minValue-t.minValue)),t=(D-S)/i+1,r=[];for(let n=0;n<t;n++){const t=e.find((e=>e.minValue===S+i*n));t?r.push(t):r.push({count:0,minValue:S+i*n})}return r}),[o,i]);d((()=>{c!==k&&E(_())}),[c]);const O=e=>{const[t,r]=e,n=[t,r];E(n),null==m||m(n)},T=e=>{const[t,r]=e,n=[t,r];E(n),null==b||b(n)};function _(){return null!=c?c:[S,S+i]}const I=e=>y?y(e):t(Wa.BodyBL,{children:[f,e,h]});return t("div",Object.assign({},x,{children:[u&&t(fg,{children:[I(k[0]),e(hg,{children:"-"}),I(k[1])]}),F.every((e=>0===e.count))&&v?v():t(r,{children:[e(pg,{children:F.map(((t,r)=>{const n=t.count/$;return e(gg,{style:{height:n?`calc(calc(100% - 0.25rem) * ${n} + 0.25rem)`:0},$selected:t.minValue>=k[0]&&t.minValue<k[1],$disabled:l||s},r)}))}),e(mg,{min:S,max:D+i,step:i,minRange:i,numOfThumbs:2,value:k,disabled:l,readOnly:s,ariaLabels:p,onChange:O,onChangeEnd:T})]})]}))},vg=F(Vh)`
    width: 100%;
    height: calc(3rem - 2px); // exclude top and bottom borders

    ${e=>"no-border"!==e.$styleType&&O`
            padding-left: ${e.$visuallyReadOnly?0:ya["spacing-16"]};
            padding-right: ${e.$visuallyReadOnly||e.$showClear?0:ya["spacing-16"]};
        `}
`,yg=F(Uh)`
    height: auto;
    padding: ${ya["spacing-12"]} ${ya["spacing-16"]};

    cursor: pointer;
    color: ${ga.icon};

    ${e=>"no-border"===e.$styleType&&O`
            margin-right: -${ya["spacing-12"]};
        `}
`,xg=F(L)`
    height: 1.25rem;
    width: 1.25rem;
    vertical-align: middle;
`,wg=F.div`
    display: flex;
    width: 100%;
`,$g=F(Wh)`
    display: flex;
    align-items: center;
    width: 100%;
`,Cg=o.forwardRef(((n,o)=>{var{value:i,spacing:a,type:s,error:d,disabled:c,readOnly:u,onChange:h,onClear:p,allowClear:g=!1,className:m,styleType:b="bordered"}=n,v=st(n,["value","spacing","type","error","disabled","readOnly","onChange","onClear","allowClear","className","styleType"]);const y=((e,t)=>"tel"===e&&!!t)(s,a),x=l(null);f(o,(()=>x.current),[]);const w=Kc({ref:x,formatter:e=>y?Wc.transformWithSpaces(e,a):e}),$=e=>{h&&(y?D(e):h(e))},C=()=>{p&&p(),x&&x.current&&x.current.focus()},D=e=>{const t=w();if(!t)return;const{nextValue:r,updateCaretPosition:n}=t,o=r.replace(/\s/g,"");e.target.value=o,null==h||h(e),n()},S=i?(e=>e?y?Wc.transformWithSpaces(e,a):e:"")(i):i,k=g&&!c&&!u&&!!i,E=()=>t(r,{children:[e(vg,Object.assign({"data-testid":"input",ref:x,"aria-disabled":c,value:S,onChange:$,type:s,readOnly:u||c,$showClear:k,$styleType:b,$visuallyReadOnly:u},v)),k&&e(yg,{onClick:C,type:"button","aria-label":"Clear input",$styleType:b,children:e(xg,{"aria-hidden":!0})})]});return e(r,{children:"no-border"===b?e(wg,{className:m,children:E()}):e($g,{$disabled:c,$error:d,$readOnly:u,className:m,children:E()})})})),Dg=o.forwardRef(((t,r)=>{const{label:n,errorMessage:o,id:i,"data-error-testid":a,"data-testid":l,layoutType:s,mobileCols:d,tabletCols:c,desktopCols:u,xxsCols:f,xsCols:h,smCols:p,mdCols:m,lgCols:b,xlCols:v,xxlCols:y}=t,x=st(t,["label","errorMessage","id","data-error-testid","data-testid","layoutType","mobileCols","tabletCols","desktopCols","xxsCols","xsCols","smCols","mdCols","lgCols","xlCols","xxlCols"]),[w]=g((()=>`form-field-${Hc.generate()}`)),$=null!=i?i:w;return e(cf,{id:$,"data-testid":l,label:n,errorMessage:o,disabled:x.disabled,"data-error-testid":a,layoutType:s,mobileCols:d,tabletCols:c,desktopCols:u,xxsCols:f,xsCols:h,smCols:p,mdCols:m,lgCols:b,xlCols:v,xxlCols:y,children:e(Cg,Object.assign({id:`${$}-base`,"data-testid":l?`${l}-base`:void 0,ref:r,error:!!o},x))})})),Sg=F.div`
    font-weight: ${e=>e.$bold?ma.Spec["weight-semibold"]:ma.Spec["weight-regular"]};

    ${e=>e.$disabled?O`
                color: ${ga["text-disabled"]};
            `:e.$selected?O`
                color: ${ga["text-selected"]};
            `:O`
                color: ${ga.text};
            `}
    width: 100%;

    ${e=>"end"===e.$truncateType&&ja(e.$maxLines||2)}
    overflow-wrap: break-word;
`,kg=F.div`
    color: ${ga["text-subtlest"]};
    width: 100%;

    ${e=>"end"===e.$truncateType&&ja(e.$maxLines||2)}
    overflow-wrap: break-word;

    ${e=>"next-line"===e.$labelDisplayType?O`
                    ${ma["body-md-semibold"]}
                `:O`
                    ${ma["body-baseline-regular"]}
                `}
`,Eg=F.span`
    font-weight: ${ma.Spec["weight-semibold"]};
`,Fg=F.div`
    text-align: left;
    width: 100%;
    overflow: hidden;
    overflow-wrap: break-word;

    ${e=>"small"===e.$variant?ma["body-md-regular"]:ma["body-baseline-regular"]}

    ${e=>{switch(e.$labelDisplayType){case"next-line":return O`
                    display: flex;
                    flex-direction: column;
                `;case"inline":return O`
                    ${Sg} {
                        display: inline;
                    }

                    ${kg} {
                        display: inline;
                        margin-left: 0.5rem;
                    }
                `}}}
`,Og=F.div`
    display: inline-block;
    width: ${e=>1===e.$maxLines?50:100}%;
    height: 1lh;
    word-break: break-all;
    overflow: hidden;
`,Tg=F.div`
    display: inline-block;
    width: ${e=>1===e.$maxLines?50:100}%;
    height: 1lh;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    direction: rtl;
    text-align: right;
`,_g=({bold:n,displayType:o="inline",label:i,searchTerm:l,maxLines:s=2,selected:d,disabled:u,sublabel:f,truncationType:h="middle",variant:p="default"})=>{const g=b(_),m="small"===p?ma.Spec["body-size-md"]({theme:g}):ma.Spec["body-size-baseline"]({theme:g}),v=ma.Spec["font-family"]({theme:g}),{ref:y,width:x}=mc(),w=c((e=>{if("inline"!==o||!x)return!1;return Wc.getTextWidth(e,`${m} '${v}'`)>x*s-50}),[x,o,m,v,s]),$=a((()=>w(i)),[w,i]),C=a((()=>f&&w(f)),[w,f]),D=n=>{if(!l)return n;const o=l.toLowerCase().trim(),a=n.toLowerCase().indexOf(o),s=a+l.length;return-1===a?n:t(r,{children:[i.slice(0,a),e(Eg,{$variant:p,children:i.slice(a,s)}),i.slice(s)]})},S=n=>t(r,{children:[e(Og,{$maxLines:s,"aria-hidden":!0,children:D(n)}),e(Tg,{$maxLines:s,"aria-hidden":!0,children:D(n)})]});return t(Fg,{ref:y,$labelDisplayType:$||C?"next-line":o,$variant:p,children:[e(Sg,{"aria-label":i,$bold:n,$maxLines:s,$selected:d,$disabled:u,$truncateType:h,children:"middle"===h&&$?S(i):D(i)}),f&&e(kg,{"aria-label":f,$maxLines:s,$truncateType:h,$labelDisplayType:o,children:"middle"===h&&C?S(f):f})]})};var Ig=Kn;var Mg=function(e){var t=this.__data__,r=t.delete(e);return this.size=t.size,r};var Ag=function(e){return this.__data__.get(e)};var Bg=function(e){return this.__data__.has(e)},jg=Kn,zg=qn,Rg=go;var Lg=function(e,t){var r=this.__data__;if(r instanceof jg){var n=r.__data__;if(!zg||n.length<199)return n.push([e,t]),this.size=++r.size,this;r=this.__data__=new Rg(n)}return r.set(e,t),this.size=r.size,this},Pg=Kn,Ng=function(){this.__data__=new Ig,this.size=0},Hg=Mg,Wg=Ag,Yg=Bg,Vg=Lg;function Ug(e){var t=this.__data__=new Pg(e);this.size=t.size}Ug.prototype.clear=Ng,Ug.prototype.delete=Hg,Ug.prototype.get=Wg,Ug.prototype.has=Yg,Ug.prototype.set=Vg;var Kg=Ug;var qg=go,Zg=function(e){return this.__data__.set(e,"__lodash_hash_undefined__"),this},Gg=function(e){return this.__data__.has(e)};function Xg(e){var t=-1,r=null==e?0:e.length;for(this.__data__=new qg;++t<r;)this.add(e[t])}Xg.prototype.add=Xg.prototype.push=Zg,Xg.prototype.has=Gg;var Jg=function(e,t){return e.has(t)},Qg=Xg,em=function(e,t){for(var r=-1,n=null==e?0:e.length;++r<n;)if(t(e[r],r,e))return!0;return!1},tm=Jg;var rm=function(e,t,r,n,o,i){var a=1&r,l=e.length,s=t.length;if(l!=s&&!(a&&s>l))return!1;var d=i.get(e),c=i.get(t);if(d&&c)return d==t&&c==e;var u=-1,f=!0,h=2&r?new Qg:void 0;for(i.set(e,t),i.set(t,e);++u<l;){var p=e[u],g=t[u];if(n)var m=a?n(g,p,u,t,e,i):n(p,g,u,e,t,i);if(void 0!==m){if(m)continue;f=!1;break}if(h){if(!em(t,(function(e,t){if(!tm(h,t)&&(p===e||o(p,e,r,n,i)))return h.push(t)}))){f=!1;break}}else if(p!==g&&!o(p,g,r,n,i)){f=!1;break}}return i.delete(e),i.delete(t),f};var nm=function(e){var t=-1,r=Array(e.size);return e.forEach((function(e,n){r[++t]=[n,e]})),r};var om=function(e){var t=-1,r=Array(e.size);return e.forEach((function(e){r[++t]=e})),r},im=mr.Uint8Array,am=On,lm=rm,sm=nm,dm=om,cm=br?br.prototype:void 0,um=cm?cm.valueOf:void 0;var fm=function(e,t,r,n,o,i,a){switch(r){case"[object DataView]":if(e.byteLength!=t.byteLength||e.byteOffset!=t.byteOffset)return!1;e=e.buffer,t=t.buffer;case"[object ArrayBuffer]":return!(e.byteLength!=t.byteLength||!i(new im(e),new im(t)));case"[object Boolean]":case"[object Date]":case"[object Number]":return am(+e,+t);case"[object Error]":return e.name==t.name&&e.message==t.message;case"[object RegExp]":case"[object String]":return e==t+"";case"[object Map]":var l=sm;case"[object Set]":var s=1&n;if(l||(l=dm),e.size!=t.size&&!s)return!1;var d=a.get(e);if(d)return d==t;n|=2,a.set(e,t);var c=lm(l(e),l(t),n,o,i,a);return a.delete(e),c;case"[object Symbol]":if(um)return um.call(e)==um.call(t)}return!1};var hm=function(e,t){for(var r=-1,n=t.length,o=e.length;++r<n;)e[o+r]=t[r];return e},pm=hm,gm=fr;var mm=function(e,t,r){var n=t(e);return gm(e)?n:pm(n,r(e))};var bm=function(e,t){for(var r=-1,n=null==e?0:e.length,o=0,i=[];++r<n;){var a=e[r];t(a,r,e)&&(i[o++]=a)}return i},vm=function(){return[]},ym=Object.prototype.propertyIsEnumerable,xm=Object.getOwnPropertySymbols,wm=xm?function(e){return null==e?[]:(e=Object(e),bm(xm(e),(function(t){return ym.call(e,t)})))}:vm;var $m=function(e,t){for(var r=-1,n=Array(e);++r<e;)n[r]=t(r);return n},Cm=Fr,Dm=Or;var Sm=function(e){return Dm(e)&&"[object Arguments]"==Cm(e)},km=Or,Em=Object.prototype,Fm=Em.hasOwnProperty,Om=Em.propertyIsEnumerable,Tm=Sm(function(){return arguments}())?Sm:function(e){return km(e)&&Fm.call(e,"callee")&&!Om.call(e,"callee")},_m={exports:{}};var Im=function(){return!1};!function(e,t){var r=mr,n=Im,o=t&&!t.nodeType&&t,i=o&&e&&!e.nodeType&&e,a=i&&i.exports===o?r.Buffer:void 0,l=(a?a.isBuffer:void 0)||n;e.exports=l}(_m,_m.exports);var Mm=_m.exports,Am=/^(?:0|[1-9]\d*)$/;var Bm=function(e,t){var r=typeof e;return!!(t=null==t?9007199254740991:t)&&("number"==r||"symbol"!=r&&Am.test(e))&&e>-1&&e%1==0&&e<t};var jm=function(e){return"number"==typeof e&&e>-1&&e%1==0&&e<=9007199254740991},zm=Fr,Rm=jm,Lm=Or,Pm={};Pm["[object Float32Array]"]=Pm["[object Float64Array]"]=Pm["[object Int8Array]"]=Pm["[object Int16Array]"]=Pm["[object Int32Array]"]=Pm["[object Uint8Array]"]=Pm["[object Uint8ClampedArray]"]=Pm["[object Uint16Array]"]=Pm["[object Uint32Array]"]=!0,Pm["[object Arguments]"]=Pm["[object Array]"]=Pm["[object ArrayBuffer]"]=Pm["[object Boolean]"]=Pm["[object DataView]"]=Pm["[object Date]"]=Pm["[object Error]"]=Pm["[object Function]"]=Pm["[object Map]"]=Pm["[object Number]"]=Pm["[object Object]"]=Pm["[object RegExp]"]=Pm["[object Set]"]=Pm["[object String]"]=Pm["[object WeakMap]"]=!1;var Nm=function(e){return Lm(e)&&Rm(e.length)&&!!Pm[zm(e)]};var Hm=function(e){return function(t){return e(t)}},Wm={exports:{}};!function(e,t){var r=hr,n=t&&!t.nodeType&&t,o=n&&e&&!e.nodeType&&e,i=o&&o.exports===n&&r.process,a=function(){try{var e=o&&o.require&&o.require("util").types;return e||i&&i.binding&&i.binding("util")}catch(e){}}();e.exports=a}(Wm,Wm.exports);var Ym=Wm.exports,Vm=Nm,Um=Hm,Km=Ym&&Ym.isTypedArray,qm=Km?Um(Km):Vm,Zm=$m,Gm=Tm,Xm=fr,Jm=Mm,Qm=Bm,eb=qm,tb=Object.prototype.hasOwnProperty;var rb=function(e,t){var r=Xm(e),n=!r&&Gm(e),o=!r&&!n&&Jm(e),i=!r&&!n&&!o&&eb(e),a=r||n||o||i,l=a?Zm(e.length,String):[],s=l.length;for(var d in e)!t&&!tb.call(e,d)||a&&("length"==d||o&&("offset"==d||"parent"==d)||i&&("buffer"==d||"byteLength"==d||"byteOffset"==d)||Qm(d,s))||l.push(d);return l},nb=Object.prototype;var ob=function(e){var t=e&&e.constructor;return e===("function"==typeof t&&t.prototype||nb)};var ib=function(e,t){return function(r){return e(t(r))}}(Object.keys,Object),ab=ob,lb=ib,sb=Object.prototype.hasOwnProperty;var db=function(e){if(!ab(e))return lb(e);var t=[];for(var r in Object(e))sb.call(e,r)&&"constructor"!=r&&t.push(r);return t},cb=Hr,ub=jm;var fb=function(e){return null!=e&&ub(e.length)&&!cb(e)},hb=rb,pb=db,gb=fb;var mb=function(e){return gb(e)?hb(e):pb(e)},bb=mm,vb=wm,yb=mb;var xb=function(e){return bb(e,yb,vb)},wb=Object.prototype.hasOwnProperty;var $b=function(e,t,r,n,o,i){var a=1&r,l=xb(e),s=l.length;if(s!=xb(t).length&&!a)return!1;for(var d=s;d--;){var c=l[d];if(!(a?c in t:wb.call(t,c)))return!1}var u=i.get(e),f=i.get(t);if(u&&f)return u==t&&f==e;var h=!0;i.set(e,t),i.set(t,e);for(var p=a;++d<s;){var g=e[c=l[d]],m=t[c];if(n)var b=a?n(m,g,c,t,e,i):n(g,m,c,e,t,i);if(!(void 0===b?g===m||o(g,m,r,n,i):b)){h=!1;break}p||(p="constructor"==c)}if(h&&!p){var v=e.constructor,y=t.constructor;v==y||!("constructor"in e)||!("constructor"in t)||"function"==typeof v&&v instanceof v&&"function"==typeof y&&y instanceof y||(h=!1)}return i.delete(e),i.delete(t),h},Cb=sn(mr,"DataView"),Db=qn,Sb=sn(mr,"Promise"),kb=sn(mr,"Set"),Eb=sn(mr,"WeakMap"),Fb=Fr,Ob=Kr,Tb="[object Map]",_b="[object Promise]",Ib="[object Set]",Mb="[object WeakMap]",Ab="[object DataView]",Bb=Ob(Cb),jb=Ob(Db),zb=Ob(Sb),Rb=Ob(kb),Lb=Ob(Eb),Pb=Fb;(Cb&&Pb(new Cb(new ArrayBuffer(1)))!=Ab||Db&&Pb(new Db)!=Tb||Sb&&Pb(Sb.resolve())!=_b||kb&&Pb(new kb)!=Ib||Eb&&Pb(new Eb)!=Mb)&&(Pb=function(e){var t=Fb(e),r="[object Object]"==t?e.constructor:void 0,n=r?Ob(r):"";if(n)switch(n){case Bb:return Ab;case jb:return Tb;case zb:return _b;case Rb:return Ib;case Lb:return Mb}return t});var Nb=Pb,Hb=Kg,Wb=rm,Yb=fm,Vb=$b,Ub=Nb,Kb=fr,qb=Mm,Zb=qm,Gb="[object Arguments]",Xb="[object Array]",Jb="[object Object]",Qb=Object.prototype.hasOwnProperty;var ev=function(e,t,r,n,o,i){var a=Kb(e),l=Kb(t),s=a?Xb:Ub(e),d=l?Xb:Ub(t),c=(s=s==Gb?Jb:s)==Jb,u=(d=d==Gb?Jb:d)==Jb,f=s==d;if(f&&qb(e)){if(!qb(t))return!1;a=!0,c=!1}if(f&&!c)return i||(i=new Hb),a||Zb(e)?Wb(e,t,r,n,o,i):Yb(e,t,s,r,n,o,i);if(!(1&r)){var h=c&&Qb.call(e,"__wrapped__"),p=u&&Qb.call(t,"__wrapped__");if(h||p){var g=h?e.value():e,m=p?t.value():t;return i||(i=new Hb),o(g,m,r,n,i)}}return!!f&&(i||(i=new Hb),Vb(e,t,r,n,o,i))},tv=Or;var rv=function e(t,r,n,o,i){return t===r||(null==t||null==r||!tv(t)&&!tv(r)?t!=t&&r!=r:ev(t,r,n,o,e,i))},nv=Kg,ov=rv;var iv=function(e,t,r,n){var o=r.length,i=o,a=!n;if(null==e)return!i;for(e=Object(e);o--;){var l=r[o];if(a&&l[2]?l[1]!==e[l[0]]:!(l[0]in e))return!1}for(;++o<i;){var s=(l=r[o])[0],d=e[s],c=l[1];if(a&&l[2]){if(void 0===d&&!(s in e))return!1}else{var u=new nv;if(n)var f=n(d,c,s,e,t,u);if(!(void 0===f?ov(c,d,3,n,u):f))return!1}}return!0},av=Rr;var lv=function(e){return e==e&&!av(e)},sv=lv,dv=mb;var cv=function(e){for(var t=dv(e),r=t.length;r--;){var n=t[r],o=e[n];t[r]=[n,o,sv(o)]}return t};var uv=function(e,t){return function(r){return null!=r&&(r[e]===t&&(void 0!==t||e in Object(r)))}},fv=iv,hv=cv,pv=uv;var gv=function(e,t){return null!=e&&t in Object(e)},mv=Ao,bv=Tm,vv=fr,yv=Bm,xv=jm,wv=jo;var $v=function(e,t,r){for(var n=-1,o=(t=mv(t,e)).length,i=!1;++n<o;){var a=wv(t[n]);if(!(i=null!=e&&r(e,a)))break;e=e[a]}return i||++n!=o?i:!!(o=null==e?0:e.length)&&xv(o)&&yv(a,o)&&(vv(e)||bv(e))},Cv=gv,Dv=$v;var Sv=rv,kv=No,Ev=function(e,t){return null!=e&&Dv(e,t,Cv)},Fv=zr,Ov=lv,Tv=uv,_v=jo;var Iv=function(e){return function(t){return null==t?void 0:t[e]}},Mv=Lo;var Av=Iv,Bv=function(e){return function(t){return Mv(t,e)}},jv=zr,zv=jo;var Rv=function(e){var t=hv(e);return 1==t.length&&t[0][2]?pv(t[0][0],t[0][1]):function(r){return r===e||fv(r,e,t)}},Lv=function(e,t){return Fv(e)&&Ov(t)?Tv(_v(e),t):function(r){var n=kv(r,e);return void 0===n&&n===t?Ev(r,e):Sv(t,n,3)}},Pv=function(e){return e},Nv=fr,Hv=function(e){return jv(e)?Av(zv(e)):Bv(e)};var Wv=function(e){return"function"==typeof e?e:null==e?Pv:"object"==typeof e?Nv(e)?Lv(e[0],e[1]):Rv(e):Hv(e)},Yv=Wv,Vv=fb,Uv=mb;var Kv=function(e){return function(t,r,n){var o=Object(t);if(!Vv(t)){var i=Yv(r);t=Uv(t),r=function(e){return i(o[e],e,o)}}var a=e(t,r,n);return a>-1?o[i?t[a]:a]:void 0}};var qv=/\s/;var Zv=function(e){for(var t=e.length;t--&&qv.test(e.charAt(t)););return t},Gv=/^\s+/;var Xv=function(e){return e?e.slice(0,Zv(e)+1).replace(Gv,""):e},Jv=Rr,Qv=Ir,ey=/^[-+]0x[0-9a-f]+$/i,ty=/^0b[01]+$/i,ry=/^0o[0-7]+$/i,ny=parseInt;var oy=function(e){if("number"==typeof e)return e;if(Qv(e))return NaN;if(Jv(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=Jv(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=Xv(e);var r=ty.test(e);return r||ry.test(e)?ny(e.slice(2),r?2:8):ey.test(e)?NaN:+e},iy=oy,ay=1/0;var ly=function(e){return e?(e=iy(e))===ay||e===-1/0?17976931348623157e292*(e<0?-1:1):e==e?e:0:0===e?e:0};var sy=function(e,t,r,n){for(var o=e.length,i=r+(n?1:-1);n?i--:++i<o;)if(t(e[i],i,e))return i;return-1},dy=Wv,cy=function(e){var t=ly(e),r=t%1;return t==t?r?t-r:t:0},uy=Math.max;var fy=function(e,t,r){var n=null==e?0:e.length;if(!n)return-1;var o=null==r?0:cy(r);return o<0&&(o=uy(n+o,0)),sy(e,dy(t),o)},hy=je(fy),py=je(Kv(fy)),gy=rv;var my=je((function(e,t){return gy(e,t)}));function by(e){return()=>e}function vy(e){e()}function yy(e,t){return r=>e(t(r))}function xy(e,t){return()=>e(t)}function wy(e,t){return r=>e(t,r)}function $y(e){return void 0!==e}function Cy(){}function Dy(e,t){return t(e),e}function Sy(e,t){return t(e)}function ky(...e){return e}function Ey(e,t){return e(1,t)}function Fy(e,t){e(0,t)}function Oy(e){e(2)}function Ty(e){return e(4)}function _y(e,t){return Ey(e,wy(t,0))}function Iy(e,t){const r=e(1,(e=>{r(),t(e)}));return r}function My(e){let t,r;return n=>o=>{t=o,r&&clearTimeout(r),r=setTimeout((()=>{n(t)}),e)}}function Ay(e,t){return e===t}function By(e=Ay){let t;return r=>n=>{e(t,n)||(t=n,r(n))}}function jy(e){return t=>r=>{e(r)&&t(r)}}function zy(e){return t=>yy(t,e)}function Ry(e){return t=>()=>{t(e)}}function Ly(e,...t){const r=function(...e){return t=>e.reduceRight(Sy,t)}(...t);return(t,n)=>{switch(t){case 2:return void Oy(e);case 1:return Ey(e,r(n))}}}function Py(e,t){return r=>n=>{r(t=e(t,n))}}function Ny(e){return t=>r=>{e>0?e--:t(r)}}function Hy(e){let t,r=null;return n=>o=>{r=o,!t&&(t=setTimeout((()=>{t=void 0,n(r)}),e))}}function Wy(...e){const t=new Array(e.length);let r=0,n=null;const o=Math.pow(2,e.length)-1;return e.forEach(((e,i)=>{const a=Math.pow(2,i);Ey(e,(e=>{const l=r;r|=a,t[i]=e,l!==o&&r===o&&n&&(n(),n=null)}))})),e=>i=>{const a=()=>{e([i].concat(t))};r===o?a():n=a}}function Yy(e){let t=e;const r=Uy();return(e,n)=>{switch(e){case 0:t=n;break;case 1:n(t);break;case 4:return t}return r(e,n)}}function Vy(e,t){return Dy(Yy(t),(t=>_y(e,t)))}function Uy(){const e=[];return(t,r)=>{switch(t){case 0:return void e.slice().forEach((e=>{e(r)}));case 2:return void e.splice(0,e.length);case 1:return e.push(r),()=>{const t=e.indexOf(r);t>-1&&e.splice(t,1)}}}}function Ky(e){return Dy(Uy(),(t=>_y(e,t)))}function qy(e,t=[],{singleton:r}={singleton:!0}){return{constructor:e,dependencies:t,id:Zy(),singleton:r}}const Zy=()=>Symbol();function Gy(...e){const t=Uy(),r=new Array(e.length);let n=0;const o=Math.pow(2,e.length)-1;return e.forEach(((e,i)=>{const a=Math.pow(2,i);Ey(e,(e=>{r[i]=e,n|=a,n===o&&Fy(t,r)}))})),function(e,i){switch(e){case 2:return void Oy(t);case 1:return n===o&&i(r),Ey(t,i)}}}function Xy(e,t=Ay){return Ly(e,By(t))}function Jy(...e){return function(t,r){switch(t){case 2:return;case 1:return function(...e){return()=>{e.map(vy)}}(...e.map((e=>Ey(e,r))))}}}var Qy=(e=>(e[e.DEBUG=0]="DEBUG",e[e.INFO=1]="INFO",e[e.WARN=2]="WARN",e[e.ERROR=3]="ERROR",e))(Qy||{});const ex={0:"debug",3:"error",1:"log",2:"warn"},tx=qy((()=>{const e=Yy(3);return{log:Yy(((t,r,n=1)=>{var o;n>=(null!=(o=(typeof globalThis>"u"?window:globalThis).VIRTUOSO_LOG_LEVEL)?o:Ty(e))&&console[ex[n]]("%creact-virtuoso: %c%s %o","color: #0253b3; font-weight: bold","color: initial",t,r)})),logLevel:e}}),[],{singleton:!0});function rx(e,t,r){return nx(e,t,r).callbackRef}function nx(e,t,r){const n=o.useRef(null);let i=e=>{};if(typeof ResizeObserver<"u"){const a=o.useMemo((()=>new ResizeObserver((t=>{const n=()=>{const r=t[0].target;null!==r.offsetParent&&e(r)};r?n():requestAnimationFrame(n)}))),[e]);i=e=>{e&&t?(a.observe(e),n.current=e):(n.current&&a.unobserve(n.current),n.current=null)}}return{callbackRef:i,ref:n}}function ox(e,t,r,n,i,a,l,s,d){const c=o.useCallback((r=>{const o=function(e,t,r,n){const o=e.length;if(0===o)return null;const i=[];for(let a=0;a<o;a++){const o=e.item(a);if(void 0===o.dataset.index)continue;const l=parseInt(o.dataset.index),s=parseFloat(o.dataset.knownSize),d=t(o,r);if(0===d&&n("Zero-sized element, this should not happen",{child:o},Qy.ERROR),d===s)continue;const c=i[i.length-1];0===i.length||c.size!==d||c.endIndex!==l-1?i.push({endIndex:l,size:d,startIndex:l}):i[i.length-1].endIndex++}return i}(r.children,t,s?"offsetWidth":"offsetHeight",i);let d=r.parentElement;for(;!d.dataset.virtuosoScroller;)d=d.parentElement;const c="window"===d.lastElementChild.dataset.viewportType,u=l?s?l.scrollLeft:l.scrollTop:c?s?window.pageXOffset||document.documentElement.scrollLeft:window.pageYOffset||document.documentElement.scrollTop:s?d.scrollLeft:d.scrollTop,f=l?s?l.scrollWidth:l.scrollHeight:c?s?document.documentElement.scrollWidth:document.documentElement.scrollHeight:s?d.scrollWidth:d.scrollHeight,h=l?s?l.offsetWidth:l.offsetHeight:c?s?window.innerWidth:window.innerHeight:s?d.offsetWidth:d.offsetHeight;n({scrollHeight:f,scrollTop:Math.max(u,0),viewportHeight:h}),null==a||a(s?ix("column-gap",getComputedStyle(r).columnGap,i):ix("row-gap",getComputedStyle(r).rowGap,i)),null!==o&&e(o)}),[e,t,i,a,l,n]);return nx(c,r,d)}function ix(e,t,r){return"normal"!==t&&!(null!=t&&t.endsWith("px"))&&r(`${e} was not resolved to pixel value correctly`,t,Qy.WARN),"normal"===t?0:parseInt(null!=t?t:"0",10)}function ax(e,t,r){const n=o.useRef(null),i=o.useCallback((r=>{if(null==r||!r.offsetParent)return;const o=r.getBoundingClientRect(),i=o.width;let a,l;if(t){const e=t.getBoundingClientRect(),r=o.top-e.top;l=e.height-Math.max(0,r),a=r+t.scrollTop}else l=window.innerHeight-Math.max(0,o.top),a=o.top+window.pageYOffset;n.current={offsetTop:a,visibleHeight:l,visibleWidth:i},e(n.current)}),[e,t]),{callbackRef:a,ref:l}=nx(i,!0,r),s=o.useCallback((()=>{i(l.current)}),[i,l]);return o.useEffect((()=>{if(t){t.addEventListener("scroll",s);const e=new ResizeObserver((()=>{requestAnimationFrame(s)}));return e.observe(t),()=>{t.removeEventListener("scroll",s),e.unobserve(t)}}return window.addEventListener("scroll",s),window.addEventListener("resize",s),()=>{window.removeEventListener("scroll",s),window.removeEventListener("resize",s)}}),[s,t]),a}const lx=qy((()=>{const e=Uy(),t=Uy(),r=Yy(0),n=Uy(),o=Yy(0),i=Uy(),a=Uy(),l=Yy(0),s=Yy(0),d=Yy(0),c=Yy(0),u=Uy(),f=Uy(),h=Yy(!1),p=Yy(!1),g=Yy(!1);return _y(Ly(e,zy((({scrollTop:e})=>e))),t),_y(Ly(e,zy((({scrollHeight:e})=>e))),a),_y(t,o),{deviation:r,fixedFooterHeight:d,fixedHeaderHeight:s,footerHeight:c,headerHeight:l,horizontalDirection:p,scrollBy:f,scrollContainerState:e,scrollHeight:a,scrollingInProgress:h,scrollTo:u,scrollTop:t,skipAnimationFrameInResizeObserver:g,smoothScrollTargetReached:n,statefulScrollTop:o,viewportHeight:i}}),[],{singleton:!0}),sx={lvl:0};function dx(e,t){const r=e.length;if(0===r)return[];let{index:n,value:o}=t(e[0]);const i=[];for(let a=1;a<r;a++){const{index:r,value:l}=t(e[a]);i.push({end:r-1,start:n,value:o}),n=r,o=l}return i.push({end:1/0,start:n,value:o}),i}function cx(e){return e===sx}function ux(e,t){if(!cx(e))return t===e.k?e.v:t<e.k?ux(e.l,t):ux(e.r,t)}function fx(e,t,r="k"){if(cx(e))return[-1/0,void 0];if(Number(e[r])===t)return[e.k,e.v];if(Number(e[r])<t){const n=fx(e.r,t,r);return n[0]===-1/0?[e.k,e.v]:n}return fx(e.l,t,r)}function hx(e,t,r){return cx(e)?Dx(t,r,1):t===e.k?xx(e,{k:t,v:r}):t<e.k?Sx(xx(e,{l:hx(e.l,t,r)})):Sx(xx(e,{r:hx(e.r,t,r)}))}function px(){return sx}function gx(e,t,r){if(cx(e))return[];return function(e){return dx(e,(({k:e,v:t})=>({index:e,value:t})))}(vx(e,fx(e,t)[0],r))}function mx(e,t){if(cx(e))return sx;const{k:r,l:n,r:o}=e;if(t===r){if(cx(n))return o;if(cx(o))return n;{const[t,r]=Cx(n);return yx(xx(e,{k:t,l:wx(n),v:r}))}}return yx(xx(e,t<r?{l:mx(n,t)}:{r:mx(o,t)}))}function bx(e){return cx(e)?[]:[...bx(e.l),{k:e.k,v:e.v},...bx(e.r)]}function vx(e,t,r){if(cx(e))return[];const{k:n,l:o,r:i,v:a}=e;let l=[];return n>t&&(l=l.concat(vx(o,t,r))),n>=t&&n<=r&&l.push({k:n,v:a}),n<=r&&(l=l.concat(vx(i,t,r))),l}function yx(e){const{l:t,lvl:r,r:n}=e;if(n.lvl>=r-1&&t.lvl>=r-1)return e;if(r>n.lvl+1){if($x(t))return kx(xx(e,{lvl:r-1}));if(!cx(t)&&!cx(t.r))return xx(t.r,{l:xx(t,{r:t.r.l}),lvl:r,r:xx(e,{l:t.r.r,lvl:r-1})});throw new Error("Unexpected empty nodes")}if($x(e))return Ex(xx(e,{lvl:r-1}));if(cx(n)||cx(n.l))throw new Error("Unexpected empty nodes");{const t=n.l,o=$x(t)?n.lvl-1:n.lvl;return xx(t,{l:xx(e,{lvl:r-1,r:t.l}),lvl:t.lvl+1,r:Ex(xx(n,{l:t.r,lvl:o}))})}}function xx(e,t){return Dx(void 0!==t.k?t.k:e.k,void 0!==t.v?t.v:e.v,void 0!==t.lvl?t.lvl:e.lvl,void 0!==t.l?t.l:e.l,void 0!==t.r?t.r:e.r)}function wx(e){return cx(e.r)?e.l:yx(xx(e,{r:wx(e.r)}))}function $x(e){return cx(e)||e.lvl>e.r.lvl}function Cx(e){return cx(e.r)?[e.k,e.v]:Cx(e.r)}function Dx(e,t,r,n=sx,o=sx){return{k:e,l:n,lvl:r,r:o,v:t}}function Sx(e){return Ex(kx(e))}function kx(e){const{l:t}=e;return cx(t)||t.lvl!==e.lvl?e:xx(t,{r:xx(e,{l:t.r})})}function Ex(e){const{lvl:t,r:r}=e;return cx(r)||cx(r.r)||r.lvl!==t||r.r.lvl!==t?e:xx(r,{l:xx(e,{r:r.l}),lvl:t+1})}function Fx(e,t){return!(!e||e.startIndex!==t.startIndex||e.endIndex!==t.endIndex)}function Ox(e,t){return!(!e||e[0]!==t[0]||e[1]!==t[1])}const Tx=qy((()=>({recalcInProgress:Yy(!1)})),[],{singleton:!0});function _x(e,t,r){return e[Ix(e,t,r)]}function Ix(e,t,r,n=0){let o=e.length-1;for(;n<=o;){const i=Math.floor((n+o)/2),a=r(e[i],t);if(0===a)return i;if(-1===a){if(o-n<2)return i-1;o=i-1}else{if(o===n)return i;n=i+1}}throw new Error(`Failed binary finding record in array - ${e.join(",")}, searched for ${t}`)}function Mx(e,t){return Math.round(e.getBoundingClientRect()[t])}function Ax(e){return!cx(e.groupOffsetTree)}function Bx({index:e},t){return t===e?0:t<e?-1:1}function jx({offset:e},t){return t===e?0:t<e?-1:1}function zx(e,t,r){if(0===t.length)return 0;const{index:n,offset:o,size:i}=_x(t,e,Bx),a=e-n,l=i*a+(a-1)*r+o;return l>0?l+r:l}function Rx(e,t){if(!Ax(t))return e;let r=0;for(;t.groupIndices[r]<=e+r;)r++;return e+r}function Lx(e,t,r){if(function(e){return typeof e.groupIndex<"u"}(e))return t.groupIndices[e.groupIndex]+1;{let n=Rx("LAST"===e.index?r:e.index,t);return n=Math.max(0,n,Math.min(r,n)),n}}function Px(e,t,r,n=0){return n>0&&(t=Math.max(t,_x(e,n,Bx).offset)),dx(function(e,t,r,n){const o=Ix(e,t,n),i=Ix(e,r,n,o);return e.slice(o,i+1)}(e,t,r,jx),Yx)}function Nx(e,[t,r,n,o]){t.length>0&&n("received item sizes",t,Qy.DEBUG);const i=e.sizeTree;let a=i,l=0;if(r.length>0&&cx(i)&&2===t.length){const e=t[0].size,n=t[1].size;a=r.reduce(((t,r)=>hx(hx(t,r,e),r+1,n)),a)}else[a,l]=function(e,t){let r=cx(e)?0:1/0;for(const n of t){const{endIndex:t,size:o,startIndex:i}=n;if(r=Math.min(r,i),cx(e)){e=hx(e,0,o);continue}const a=gx(e,i-1,t+1);if(a.some(Vx(n)))continue;let l=!1,s=!1;for(const{end:r,start:n,value:i}of a)l?(t>=n||o===i)&&(e=mx(e,n)):(s=i!==o,l=!0),r>t&&t>=n&&i!==o&&(e=hx(e,t+1,i));s&&(e=hx(e,i,o))}return[e,r]}(a,t);if(a===i)return e;const{lastIndex:s,lastOffset:d,lastSize:c,offsetTree:u}=Wx(e.offsetTree,l,a,o);return{groupIndices:r,groupOffsetTree:r.reduce(((e,t)=>hx(e,t,zx(t,u,o))),px()),lastIndex:s,lastOffset:d,lastSize:c,offsetTree:u,sizeTree:a}}function Hx(e,t){let r=0,n=0;for(;r<e;)r+=t[n+1]-t[n]-1,n++;return n-(r===e?0:1)}function Wx(e,t,r,n){let o=e,i=0,a=0,l=0,s=0;if(0!==t){s=Ix(o,t-1,Bx),l=o[s].offset;const e=fx(r,t-1);i=e[0],a=e[1],o.length&&o[s].size===fx(r,t)[1]&&(s-=1),o=o.slice(0,s+1)}else o=[];for(const{start:e,value:s}of gx(r,t,1/0)){const t=e-i,r=t*a+l+t*n;o.push({index:e,offset:r,size:s}),i=e,l=r,a=s}return{lastIndex:i,lastOffset:l,lastSize:a,offsetTree:o}}function Yx(e){return{index:e.index,value:e}}function Vx(e){const{endIndex:t,size:r,startIndex:n}=e;return e=>e.start===n&&(e.end===t||e.end===1/0)&&e.value===r}const Ux={offsetHeight:"height",offsetWidth:"width"},Kx=qy((([{log:e},{recalcInProgress:t}])=>{const r=Uy(),n=Uy(),o=Vy(n,0),i=Uy(),a=Uy(),l=Yy(0),s=Yy([]),d=Yy(void 0),c=Yy(void 0),u=Yy(((e,t)=>Mx(e,Ux[t]))),f=Yy(void 0),h=Yy(0),p={groupIndices:[],groupOffsetTree:px(),lastIndex:0,lastOffset:0,lastSize:0,offsetTree:[],sizeTree:px()},g=Vy(Ly(r,Wy(s,e,h),Py(Nx,p),By()),p),m=Vy(Ly(s,By(),Py(((e,t)=>({current:t,prev:e.current})),{current:[],prev:[]}),zy((({prev:e})=>e))),[]);_y(Ly(s,jy((e=>e.length>0)),Wy(g,h),zy((([e,t,r])=>{const n=e.reduce(((e,n,o)=>hx(e,n,zx(n,t.offsetTree,r)||o)),px());return{...t,groupIndices:e,groupOffsetTree:n}}))),g),_y(Ly(n,Wy(g),jy((([e,{lastIndex:t}])=>e<t)),zy((([e,{lastIndex:t,lastSize:r}])=>[{endIndex:t,size:r,startIndex:e}]))),r),_y(d,c);const b=Vy(Ly(d,zy((e=>void 0===e))),!0);_y(Ly(c,jy((e=>void 0!==e&&cx(Ty(g).sizeTree))),zy((e=>[{endIndex:0,size:e,startIndex:0}]))),r);const v=Ky(Ly(r,Wy(g),Py((({sizes:e},[t,r])=>({changed:r!==e,sizes:r})),{changed:!1,sizes:p}),zy((e=>e.changed))));Ey(Ly(l,Py(((e,t)=>({diff:e.prev-t,prev:t})),{diff:0,prev:0}),zy((e=>e.diff))),(e=>{const{groupIndices:r}=Ty(g);if(e>0)Fy(t,!0),Fy(i,e+Hx(e,r));else if(e<0){const t=Ty(m);t.length>0&&(e-=Hx(-e,t)),Fy(a,e)}})),Ey(Ly(l,Wy(e)),(([e,t])=>{e<0&&t("`firstItemIndex` prop should not be set to less than zero. If you don't know the total count, just use a very high value",{firstItemIndex:l},Qy.ERROR)}));const y=Ky(i);_y(Ly(i,Wy(g),zy((([e,t])=>{const r=t.groupIndices.length>0,n=[],o=t.lastSize;if(r){const r=ux(t.sizeTree,0);let i=0,a=0;for(;i<e;){const e=t.groupIndices[a],l=t.groupIndices.length===a+1?1/0:t.groupIndices[a+1]-e-1;n.push({endIndex:e,size:r,startIndex:e}),n.push({endIndex:e+1+l-1,size:o,startIndex:e+1}),a++,i+=l+1}const l=bx(t.sizeTree);return i!==e&&l.shift(),l.reduce(((t,{k:r,v:n})=>{let o=t.ranges;return 0!==t.prevSize&&(o=[...t.ranges,{endIndex:r+e-1,size:t.prevSize,startIndex:t.prevIndex}]),{prevIndex:r+e,prevSize:n,ranges:o}}),{prevIndex:e,prevSize:0,ranges:n}).ranges}return bx(t.sizeTree).reduce(((t,{k:r,v:n})=>({prevIndex:r+e,prevSize:n,ranges:[...t.ranges,{endIndex:r+e-1,size:t.prevSize,startIndex:t.prevIndex}]})),{prevIndex:0,prevSize:o,ranges:[]}).ranges}))),r);const x=Ky(Ly(a,Wy(g,h),zy((([e,{offsetTree:t},r])=>zx(-e,t,r)))));return _y(Ly(a,Wy(g,h),zy((([e,t,r])=>{if(t.groupIndices.length>0){if(cx(t.sizeTree))return t;let n=px();const o=Ty(m);let i=0,a=0,l=0;for(;i<-e;){l=o[a];const e=o[a+1]-l-1;a++,i+=e+1}if(n=bx(t.sizeTree).reduce(((t,{k:r,v:n})=>hx(t,Math.max(0,r+e),n)),n),i!==-e){n=hx(n,0,ux(t.sizeTree,l));n=hx(n,1,fx(t.sizeTree,1-e)[1])}return{...t,sizeTree:n,...Wx(t.offsetTree,0,n,r)}}{const n=bx(t.sizeTree).reduce(((t,{k:r,v:n})=>hx(t,Math.max(0,r+e),n)),px());return{...t,sizeTree:n,...Wx(t.offsetTree,0,n,r)}}}))),g),{beforeUnshiftWith:y,data:f,defaultItemSize:c,firstItemIndex:l,fixedItemSize:d,gap:h,groupIndices:s,itemSize:u,listRefresh:v,shiftWith:a,shiftWithOffset:x,sizeRanges:r,sizes:g,statefulTotalCount:o,totalCount:n,trackItemSizes:b,unshiftWith:i}}),ky(tx,Tx),{singleton:!0});function qx(e){return e.reduce(((e,t)=>(e.groupIndices.push(e.totalCount),e.totalCount+=t+1,e)),{groupIndices:[],totalCount:0})}const Zx=qy((([{groupIndices:e,sizes:t,totalCount:r},{headerHeight:n,scrollTop:o}])=>{const i=Uy(),a=Uy(),l=Ky(Ly(i,zy(qx)));return _y(Ly(l,zy((e=>e.totalCount))),r),_y(Ly(l,zy((e=>e.groupIndices))),e),_y(Ly(Gy(o,t,n),jy((([e,t])=>Ax(t))),zy((([e,t,r])=>fx(t.groupOffsetTree,Math.max(e-r,0),"v")[0])),By(),zy((e=>[e]))),a),{groupCounts:i,topItemsIndexes:a}}),ky(Kx,lx)),Gx=qy((([{log:e}])=>{const t=Yy(!1),r=Ky(Ly(t,jy((e=>e)),By()));return Ey(t,(t=>{t&&Ty(e)("props updated",{},Qy.DEBUG)})),{didMount:r,propsReady:t}}),ky(tx),{singleton:!0}),Xx=typeof document<"u"&&"scrollBehavior"in document.documentElement.style;function Jx(e){const t="number"==typeof e?{index:e}:e;return t.align||(t.align="start"),(!t.behavior||!Xx)&&(t.behavior="auto"),t.offset||(t.offset=0),t}const Qx=qy((([{gap:e,listRefresh:t,sizes:r,totalCount:n},{fixedFooterHeight:o,fixedHeaderHeight:i,footerHeight:a,headerHeight:l,scrollingInProgress:s,scrollTo:d,smoothScrollTargetReached:c,viewportHeight:u},{log:f}])=>{const h=Uy(),p=Uy(),g=Yy(0);let m=null,b=null,v=null;function y(){m&&(m(),m=null),v&&(v(),v=null),b&&(clearTimeout(b),b=null),Fy(s,!1)}return _y(Ly(h,Wy(r,u,n,g,l,a,f),Wy(e,i,o),zy((([[e,r,n,o,i,a,l,d],u,f,g])=>{const x=Jx(e),{align:w,behavior:$,offset:C}=x,D=o-1,S=Lx(x,r,D);let k=zx(S,r.offsetTree,u)+a;"end"===w?(k+=f+fx(r.sizeTree,S)[1]-n+g,S===D&&(k+=l)):"center"===w?k+=(f+fx(r.sizeTree,S)[1]-n+g)/2:k-=i,C&&(k+=C);const E=t=>{y(),t?(d("retrying to scroll to",{location:e},Qy.DEBUG),Fy(h,e)):(Fy(p,!0),d("list did not change, scroll successful",{},Qy.DEBUG))};if(y(),"smooth"===$){let e=!1;v=Ey(t,(t=>{e=e||t})),m=Iy(c,(()=>{E(e)}))}else m=Iy(Ly(t,function(e){return t=>{const r=setTimeout((()=>{t(!1)}),e);return e=>{e&&(t(!0),clearTimeout(r))}}}(150)),E);return b=setTimeout((()=>{y()}),1200),Fy(s,!0),d("scrolling from index to",{behavior:$,index:S,top:k},Qy.DEBUG),{behavior:$,top:k}}))),d),{scrollTargetReached:p,scrollToIndex:h,topListHeight:g}}),ky(Kx,lx,tx),{singleton:!0});function ew(e,t){0==e?t():requestAnimationFrame((()=>{ew(e-1,t)}))}function tw(e,t){const r=t-1;return"number"==typeof e?e:"LAST"===e.index?r:e.index}const rw=qy((([{defaultItemSize:e,listRefresh:t,sizes:r},{scrollTop:n},{scrollTargetReached:o,scrollToIndex:i},{didMount:a}])=>{const l=Yy(!0),s=Yy(0),d=Yy(!0);return _y(Ly(a,Wy(s),jy((([e,t])=>!!t)),Ry(!1)),l),_y(Ly(a,Wy(s),jy((([e,t])=>!!t)),Ry(!1)),d),Ey(Ly(Gy(t,a),Wy(l,r,e,d),jy((([[,e],t,{sizeTree:r},n,o])=>e&&(!cx(r)||$y(n))&&!t&&!o)),Wy(s)),(([,e])=>{Iy(o,(()=>{Fy(d,!0)})),ew(4,(()=>{Iy(n,(()=>{Fy(l,!0)})),Fy(i,e)}))})),{initialItemFinalLocationReached:d,initialTopMostItemIndex:s,scrolledToInitialItem:l}}),ky(Kx,lx,Qx,Gx),{singleton:!0});function nw(e,t){return Math.abs(e-t)<1.01}const ow="up",iw="down",aw={atBottom:!1,notAtBottomBecause:"NOT_SHOWING_LAST_ITEM",state:{offsetBottom:0,scrollHeight:0,scrollTop:0,viewportHeight:0}},lw=qy((([{footerHeight:e,headerHeight:t,scrollBy:r,scrollContainerState:n,scrollTop:o,viewportHeight:i}])=>{const a=Yy(!1),l=Yy(!0),s=Uy(),d=Uy(),c=Yy(4),u=Yy(0),f=Vy(Ly(Jy(Ly(Xy(o),Ny(1),Ry(!0)),Ly(Xy(o),Ny(1),Ry(!1),My(100))),By()),!1),h=Vy(Ly(Jy(Ly(r,Ry(!0)),Ly(r,Ry(!1),My(200))),By()),!1);_y(Ly(Gy(Xy(o),Xy(u)),zy((([e,t])=>e<=t)),By()),l),_y(Ly(l,Hy(50)),d);const p=Ky(Ly(Gy(n,Xy(i),Xy(t),Xy(e),Xy(c)),Py(((e,[{scrollHeight:t,scrollTop:r},n,o,i,a])=>{const l={scrollHeight:t,scrollTop:r,viewportHeight:n};if(r+n-t>-a){let t,n;return r>e.state.scrollTop?(t="SCROLLED_DOWN",n=e.state.scrollTop-r):(t="SIZE_DECREASED",n=e.state.scrollTop-r||e.scrollTopDelta),{atBottom:!0,atBottomBecause:t,scrollTopDelta:n,state:l}}let s;return s=l.scrollHeight>e.state.scrollHeight?"SIZE_INCREASED":n<e.state.viewportHeight?"VIEWPORT_HEIGHT_DECREASING":r<e.state.scrollTop?"SCROLLING_UPWARDS":"NOT_FULLY_SCROLLED_TO_LAST_ITEM_BOTTOM",{atBottom:!1,notAtBottomBecause:s,state:l}}),aw),By(((e,t)=>e&&e.atBottom===t.atBottom)))),g=Vy(Ly(n,Py(((e,{scrollHeight:t,scrollTop:r,viewportHeight:n})=>{if(nw(e.scrollHeight,t))return{changed:!1,jump:0,scrollHeight:t,scrollTop:r};{const o=t-(r+n)<1;return e.scrollTop!==r&&o?{changed:!0,jump:e.scrollTop-r,scrollHeight:t,scrollTop:r}:{changed:!0,jump:0,scrollHeight:t,scrollTop:r}}}),{changed:!1,jump:0,scrollHeight:0,scrollTop:0}),jy((e=>e.changed)),zy((e=>e.jump))),0);_y(Ly(p,zy((e=>e.atBottom))),a),_y(Ly(a,Hy(50)),s);const m=Yy(iw);_y(Ly(n,zy((({scrollTop:e})=>e)),By(),Py(((e,t)=>Ty(h)?{direction:e.direction,prevScrollTop:t}:{direction:t<e.prevScrollTop?ow:iw,prevScrollTop:t}),{direction:iw,prevScrollTop:0}),zy((e=>e.direction))),m),_y(Ly(n,Hy(50),Ry("none")),m);const b=Yy(0);return _y(Ly(f,jy((e=>!e)),Ry(0)),b),_y(Ly(o,Hy(100),Wy(f),jy((([e,t])=>!!t)),Py((([e,t],[r])=>[t,r]),[0,0]),zy((([e,t])=>t-e))),b),{atBottomState:p,atBottomStateChange:s,atBottomThreshold:c,atTopStateChange:d,atTopThreshold:u,isAtBottom:a,isAtTop:l,isScrolling:f,lastJumpDueToItemResize:g,scrollDirection:m,scrollVelocity:b}}),ky(lx)),sw="top",dw="bottom",cw="none";function uw(e,t,r){return"number"==typeof e?r===ow&&t===sw||r===iw&&t===dw?e:0:r===ow?t===sw?e.main:e.reverse:t===dw?e.main:e.reverse}function fw(e,t){var r;return"number"==typeof e?e:null!=(r=e[t])?r:0}const hw=qy((([{deviation:e,fixedHeaderHeight:t,headerHeight:r,scrollTop:n,viewportHeight:o}])=>{const i=Uy(),a=Yy(0),l=Yy(0),s=Yy(0),d=Vy(Ly(Gy(Xy(n),Xy(o),Xy(r),Xy(i,Ox),Xy(s),Xy(a),Xy(t),Xy(e),Xy(l)),zy((([e,t,r,[n,o],i,a,l,s,d])=>{const c=e-s,u=a+l,f=Math.max(r-c,0);let h=cw;const p=fw(d,sw),g=fw(d,dw);return n-=s,o+=r+l,(n+=r+l)>e+u-p&&(h=ow),(o-=s)<e-f+t+g&&(h=iw),h!==cw?[Math.max(c-r-uw(i,sw,h)-p,0),c-f-l+t+uw(i,dw,h)+g]:null})),jy((e=>null!=e)),By(Ox)),[0,0]);return{increaseViewportBy:l,listBoundary:i,overscan:s,topListHeight:a,visibleRange:d}}),ky(lx),{singleton:!0});const pw={bottom:0,firstItemIndex:0,items:[],offsetBottom:0,offsetTop:0,top:0,topItems:[],topListHeight:0,totalCount:0};function gw(e,t,r,n,o,i){const{lastIndex:a,lastOffset:l,lastSize:s}=o;let d=0,c=0;if(e.length>0){d=e[0].offset;const t=e[e.length-1];c=t.offset+t.size}const u=r-a,f=d,h=l+u*s+(u-1)*n-c;return{bottom:c,firstItemIndex:i,items:bw(e,o,i),offsetBottom:h,offsetTop:d,top:f,topItems:bw(t,o,i),topListHeight:t.reduce(((e,t)=>t.size+e),0),totalCount:r}}function mw(e,t,r,n,o,i){let a=0;if(r.groupIndices.length>0)for(const t of r.groupIndices){if(t-a>=e)break;a++}const l=e+a,s=tw(t,l);return gw(Array.from({length:l}).map(((e,t)=>({data:i[t+s],index:t+s,offset:0,size:0}))),[],l,o,r,n)}function bw(e,t,r){if(0===e.length)return[];if(!Ax(t))return e.map((e=>({...e,index:e.index+r,originalIndex:e.index})));const n=e[0].index,o=e[e.length-1].index,i=[],a=gx(t.groupOffsetTree,n,o);let l,s=0;for(const n of e){let e;(!l||l.end<n.index)&&(l=a.shift(),s=t.groupIndices.indexOf(l.start)),e=n.index===l.start?{index:s,type:"group"}:{groupIndex:s,index:n.index-(s+1)+r},i.push({...e,data:n.data,offset:n.offset,originalIndex:n.index,size:n.size})}return i}const vw=qy((([{data:e,firstItemIndex:t,gap:r,sizes:n,totalCount:o},i,{listBoundary:a,topListHeight:l,visibleRange:s},{initialTopMostItemIndex:d,scrolledToInitialItem:c},{topListHeight:u},f,{didMount:h},{recalcInProgress:p}])=>{const g=Yy([]),m=Yy(0),b=Uy();_y(i.topItemsIndexes,g);const v=Vy(Ly(Gy(h,p,Xy(s,Ox),Xy(o),Xy(n),Xy(d),c,Xy(g),Xy(t),Xy(r),e),jy((([e,t,,r,,,,,,,n])=>{const o=n&&n.length!==r;return e&&!t&&!o})),zy((([,,[e,t],r,n,o,i,a,l,s,d])=>{const c=n,{offsetTree:u,sizeTree:f}=c,h=Ty(m);if(0===r)return{...pw,totalCount:r};if(0===e&&0===t)return 0===h?{...pw,totalCount:r}:mw(h,o,n,l,s,d||[]);if(cx(f))return h>0?null:gw(function(e,t,r){if(Ax(t)){const n=Rx(e,t);return[{index:fx(t.groupOffsetTree,n)[0],offset:0,size:0},{data:null==r?void 0:r[0],index:n,offset:0,size:0}]}return[{data:null==r?void 0:r[0],index:e,offset:0,size:0}]}(tw(o,r),c,d),[],r,s,c,l);const p=[];if(a.length>0){const e=a[0],t=a[a.length-1];let r=0;for(const n of gx(f,e,t)){const o=n.value,i=Math.max(n.start,e),a=Math.min(n.end,t);for(let e=i;e<=a;e++)p.push({data:null==d?void 0:d[e],index:e,offset:r,size:o}),r+=o}}if(!i)return gw([],p,r,s,c,l);const g=a.length>0?a[a.length-1]+1:0,b=Px(u,e,t,g);if(0===b.length)return null;const v=r-1;return gw(Dy([],(r=>{for(const n of b){const o=n.value;let i=o.offset,a=n.start;const l=o.size;if(o.offset<e){a+=Math.floor((e-o.offset+s)/(l+s));const t=a-n.start;i+=t*l+t*s}a<g&&(i+=(g-a)*l,a=g);const c=Math.min(n.end,v);for(let e=a;e<=c&&!(i>=t);e++)r.push({data:null==d?void 0:d[e],index:e,offset:i,size:l}),i+=l+s}})),p,r,s,c,l)})),jy((e=>null!==e)),By()),pw);_y(Ly(e,jy($y),zy((e=>null==e?void 0:e.length))),o),_y(Ly(v,zy((e=>e.topListHeight))),u),_y(u,l),_y(Ly(v,zy((e=>[e.top,e.bottom]))),a),_y(Ly(v,zy((e=>e.items))),b);const y=Ky(Ly(v,jy((({items:e})=>e.length>0)),Wy(o,e),jy((([{items:e},t])=>e[e.length-1].originalIndex===t-1)),zy((([,e,t])=>[e-1,t])),By(Ox),zy((([e])=>e)))),x=Ky(Ly(v,Hy(200),jy((({items:e,topItems:t})=>e.length>0&&e[0].originalIndex===t.length)),zy((({items:e})=>e[0].index)),By())),w=Ky(Ly(v,jy((({items:e})=>e.length>0)),zy((({items:e})=>{let t=0,r=e.length-1;for(;"group"===e[t].type&&t<r;)t++;for(;"group"===e[r].type&&r>t;)r--;return{endIndex:e[r].index,startIndex:e[t].index}})),By(Fx)));return{endReached:y,initialItemCount:m,itemsRendered:b,listState:v,rangeChanged:w,startReached:x,topItemsIndexes:g,...f}}),ky(Kx,Zx,hw,rw,Qx,lw,Gx,Tx),{singleton:!0}),yw=qy((([{fixedFooterHeight:e,fixedHeaderHeight:t,footerHeight:r,headerHeight:n},{listState:o}])=>{const i=Uy(),a=Vy(Ly(Gy(r,e,n,t,o),zy((([e,t,r,n,o])=>e+t+r+n+o.offsetBottom+o.bottom))),0);return _y(Xy(a),i),{totalListHeight:a,totalListHeightChanged:i}}),ky(lx,vw),{singleton:!0}),xw=qy((([{viewportHeight:e},{totalListHeight:t}])=>{const r=Yy(!1),n=Vy(Ly(Gy(r,e,t),jy((([e])=>e)),zy((([,e,t])=>Math.max(0,e-t))),Hy(0),By()),0);return{alignToBottom:r,paddingTopAddition:n}}),ky(lx,yw),{singleton:!0});function ww(e){return!!e&&("smooth"===e?"smooth":"auto")}const $w=qy((([{listRefresh:e,totalCount:t},{atBottomState:r,isAtBottom:n},{scrollToIndex:o},{scrolledToInitialItem:i},{didMount:a,propsReady:l},{log:s},{scrollingInProgress:d}])=>{const c=Yy(!1),u=Uy();let f=null;function h(e){Fy(o,{align:"end",behavior:e,index:"LAST"})}function p(e){const t=Iy(r,(t=>{e&&!t.atBottom&&"SIZE_INCREASED"===t.notAtBottomBecause&&!f&&(Ty(s)("scrolling to bottom due to increased size",{},Qy.DEBUG),h("auto"))}));setTimeout(t,100)}return Ey(Ly(Gy(Ly(Xy(t),Ny(1)),a),Wy(Xy(c),n,i,d),zy((([[e,t],r,n,o,i])=>{let a=t&&o,l="auto";return a&&(l=((e,t)=>"function"==typeof e?ww(e(t)):t&&ww(e))(r,n||i),a=a&&!!l),{followOutputBehavior:l,shouldFollow:a,totalCount:e}})),jy((({shouldFollow:e})=>e))),(({followOutputBehavior:t,totalCount:r})=>{f&&(f(),f=null),f=Iy(e,(()=>{Ty(s)("following output to ",{totalCount:r},Qy.DEBUG),h(t),f=null}))})),Ey(Ly(Gy(Xy(c),t,l),jy((([e,,t])=>e&&t)),Py((({value:e},[,t])=>({refreshed:e===t,value:t})),{refreshed:!1,value:0}),jy((({refreshed:e})=>e)),Wy(c,t)),(([,e])=>{Ty(i)&&p(!1!==e)})),Ey(u,(()=>{p(!1!==Ty(c))})),Ey(Gy(Xy(c),r),(([e,t])=>{e&&!t.atBottom&&"VIEWPORT_HEIGHT_DECREASING"===t.notAtBottomBecause&&h("auto")})),{autoscrollToBottom:u,followOutput:c}}),ky(Kx,lw,Qx,rw,Gx,tx,lx)),Cw=qy((([{data:e,firstItemIndex:t,gap:r,sizes:n},{initialTopMostItemIndex:o},{initialItemCount:i,listState:a},{didMount:l}])=>(_y(Ly(l,Wy(i),jy((([,e])=>0!==e)),Wy(o,n,t,r,e),zy((([[,e],t,r,n,o,i=[]])=>mw(e,t,r,n,o,i)))),a),{})),ky(Kx,rw,vw,Gx),{singleton:!0}),Dw=qy((([{didMount:e},{scrollTo:t},{listState:r}])=>{const n=Yy(0);return Ey(Ly(e,Wy(n),jy((([,e])=>0!==e)),zy((([,e])=>({top:e})))),(e=>{Iy(Ly(r,Ny(1),jy((e=>e.items.length>1))),(()=>{requestAnimationFrame((()=>{Fy(t,e)}))}))})),{initialScrollTop:n}}),ky(Gx,lx,vw),{singleton:!0}),Sw=({itemBottom:e,itemTop:t,locationParams:{align:r,behavior:n,...o},viewportBottom:i,viewportTop:a})=>t<a?{...o,align:null!=r?r:"start",behavior:n}:e>i?{...o,align:null!=r?r:"end",behavior:n}:null,kw=qy((([{gap:e,sizes:t,totalCount:r},{fixedFooterHeight:n,fixedHeaderHeight:o,headerHeight:i,scrollingInProgress:a,scrollTop:l,viewportHeight:s},{scrollToIndex:d}])=>{const c=Uy();return _y(Ly(c,Wy(t,s,r,i,o,n,l),Wy(e),zy((([[e,t,r,n,o,i,l,s],d])=>{const{align:c,behavior:u,calculateViewLocation:f=Sw,done:h,...p}=e,g=Lx(e,t,n-1),m=zx(g,t.offsetTree,d)+o+i,b=f({itemBottom:m+fx(t.sizeTree,g)[1],itemTop:m,locationParams:{align:c,behavior:u,...p},viewportBottom:s+r-l,viewportTop:s+i});return b?h&&Iy(Ly(a,jy((e=>!e)),Ny(Ty(a)?1:2)),h):h&&h(),b})),jy((e=>null!==e))),d),{scrollIntoView:c}}),ky(Kx,lx,Qx,vw,tx),{singleton:!0}),Ew=qy((([{scrollVelocity:e}])=>{const t=Yy(!1),r=Uy(),n=Yy(!1);return _y(Ly(e,Wy(n,t,r),jy((([e,t])=>!!t)),zy((([e,t,r,n])=>{const{enter:o,exit:i}=t;if(r){if(i(e,n))return!1}else if(o(e,n))return!0;return r})),By()),t),Ey(Ly(Gy(t,e,r),Wy(n)),(([[e,t,r],n])=>{e&&n&&n.change&&n.change(t,r)})),{isSeeking:t,scrollSeekConfiguration:n,scrollSeekRangeChanged:r,scrollVelocity:e}}),ky(lw),{singleton:!0}),Fw=qy((([{scrollContainerState:e,scrollTo:t}])=>{const r=Uy(),n=Uy(),o=Uy(),i=Yy(!1),a=Yy(void 0);return _y(Ly(Gy(r,n),zy((([{scrollHeight:e,scrollTop:t,viewportHeight:r},{offsetTop:n}])=>({scrollHeight:e,scrollTop:Math.max(0,t-n),viewportHeight:r})))),e),_y(Ly(t,Wy(n),zy((([e,{offsetTop:t}])=>({...e,top:e.top+t})))),o),{customScrollParent:a,useWindowScroll:i,windowScrollContainerState:r,windowScrollTo:o,windowViewportRect:n}}),ky(lx)),Ow=qy((([{sizeRanges:e,sizes:t},{headerHeight:r,scrollTop:n},{initialTopMostItemIndex:o},{didMount:i},{useWindowScroll:a,windowScrollContainerState:l,windowViewportRect:s}])=>{const d=Uy(),c=Yy(void 0),u=Yy(null),f=Yy(null);return _y(l,u),_y(s,f),Ey(Ly(d,Wy(t,n,a,u,f,r)),(([e,t,r,n,o,i,a])=>{const l=function(e){return bx(e).map((({k:e,v:t},r,n)=>{const o=n[r+1];return{endIndex:o?o.k-1:1/0,size:t,startIndex:e}}))}(t.sizeTree);n&&null!==o&&null!==i&&(r=o.scrollTop-i.offsetTop),e({ranges:l,scrollTop:r-=a})})),_y(Ly(c,jy($y),zy(Tw)),o),_y(Ly(i,Wy(c),jy((([,e])=>void 0!==e)),By(),zy((([,e])=>e.ranges))),e),{getState:d,restoreStateFrom:c}}),ky(Kx,lx,rw,Gx,Fw));function Tw(e){return{align:"start",index:0,offset:e.scrollTop}}const _w=qy((([{topItemsIndexes:e}])=>{const t=Yy(0);return _y(Ly(t,jy((e=>e>=0)),zy((e=>Array.from({length:e}).map(((e,t)=>t))))),e),{topItemCount:t}}),ky(vw));function Iw(e){let t,r=!1;return()=>(r||(r=!0,t=e()),t)}const Mw=Iw((()=>/iP(ad|od|hone)/i.test(navigator.userAgent)&&/WebKit/i.test(navigator.userAgent))),Aw=qy((([{deviation:e,scrollBy:t,scrollingInProgress:r,scrollTop:n},{isAtBottom:o,isScrolling:i,lastJumpDueToItemResize:a,scrollDirection:l},{listState:s},{beforeUnshiftWith:d,gap:c,shiftWithOffset:u,sizes:f},{log:h},{recalcInProgress:p}])=>{const g=Ky(Ly(s,Wy(a),Py((([,e,t,r],[{bottom:n,items:o,offsetBottom:i,totalCount:a},l])=>{const s=n+i;let d=0;return t===a&&e.length>0&&o.length>0&&(0===o[0].originalIndex&&0===e[0].originalIndex||(d=s-r,0!==d&&(d+=l))),[d,o,a,s]}),[0,[],0,0]),jy((([e])=>0!==e)),Wy(n,l,r,o,h,p),jy((([,e,t,r,,,n])=>!n&&!r&&0!==e&&t===ow)),zy((([[e],,,,,t])=>(t("Upward scrolling compensation",{amount:e},Qy.DEBUG),e)))));function m(r){r>0?(Fy(t,{behavior:"auto",top:-r}),Fy(e,0)):(Fy(e,0),Fy(t,{behavior:"auto",top:-r}))}return Ey(Ly(g,Wy(e,i)),(([t,r,n])=>{n&&Mw()?Fy(e,r-t):m(-t)})),Ey(Ly(Gy(Vy(i,!1),e,p),jy((([e,t,r])=>!e&&!r&&0!==t)),zy((([e,t])=>t)),Hy(1)),m),_y(Ly(u,zy((e=>({top:-e})))),t),Ey(Ly(d,Wy(f,c),zy((([e,{groupIndices:t,lastSize:r,sizeTree:n},o])=>{function i(e){return e*(r+o)}if(0===t.length)return i(e);{let r=0;const o=ux(n,0);let a=0,l=0;for(;a<e;){a++,r+=o;let n=t.length===l+1?1/0:t[l+1]-t[l]-1;a+n>e&&(r-=o,n=e-a+1),a+=n,r+=i(n),l++}return r}}))),(r=>{Fy(e,r),requestAnimationFrame((()=>{Fy(t,{top:r}),requestAnimationFrame((()=>{Fy(e,0),Fy(p,!1)}))}))})),{deviation:e}}),ky(lx,lw,vw,Kx,tx,Tx)),Bw=qy((([e,t,r,n,o,i,a,l,s,d])=>({...e,...t,...r,...n,...o,...i,...a,...l,...s,...d})),ky(hw,Cw,Gx,Ew,yw,Dw,xw,Fw,kw,tx)),jw=qy((([{data:e,defaultItemSize:t,firstItemIndex:r,fixedItemSize:n,gap:o,groupIndices:i,itemSize:a,sizeRanges:l,sizes:s,statefulTotalCount:d,totalCount:c,trackItemSizes:u},{initialItemFinalLocationReached:f,initialTopMostItemIndex:h,scrolledToInitialItem:p},g,m,b,{listState:v,topItemsIndexes:y,...x},{scrollToIndex:w},$,{topItemCount:C},{groupCounts:D},S])=>(_y(x.rangeChanged,S.scrollSeekRangeChanged),_y(Ly(S.windowViewportRect,zy((e=>e.visibleHeight))),g.viewportHeight),{data:e,defaultItemHeight:t,firstItemIndex:r,fixedItemHeight:n,gap:o,groupCounts:D,initialItemFinalLocationReached:f,initialTopMostItemIndex:h,scrolledToInitialItem:p,sizeRanges:l,topItemCount:C,topItemsIndexes:y,totalCount:c,...b,groupIndices:i,itemSize:a,listState:v,scrollToIndex:w,statefulTotalCount:d,trackItemSizes:u,...x,...S,...g,sizes:s,...m})),ky(Kx,rw,lx,Ow,$w,vw,Qx,Aw,_w,Zx,Bw));function zw(e,t){const r={},n={};let o=0;const i=e.length;for(;o<i;)n[e[o]]=1,o+=1;for(const e in t)Object.hasOwn(n,e)||(r[e]=t[e]);return r}const Rw=typeof document<"u"?o.useLayoutEffect:o.useEffect;function Lw(t,r,n){const i=Object.keys(r.required||{}),a=Object.keys(r.optional||{}),l=Object.keys(r.methods||{}),s=Object.keys(r.events||{}),d=o.createContext({});function c(e,t){e.propsReady&&Fy(e.propsReady,!1);for(const n of i){Fy(e[r.required[n]],t[n])}for(const n of a)if(n in t){Fy(e[r.optional[n]],t[n])}e.propsReady&&Fy(e.propsReady,!0)}function u(e){return s.reduce(((t,n)=>(t[n]=function(e){let t,r;const n=()=>null==t?void 0:t();return function(o,i){switch(o){case 1:return i?r===i?void 0:(n(),r=i,t=Ey(e,i),t):(n(),Cy);case 2:return n(),void(r=null)}}}(e[r.events[n]]),t)),{})}const f=o.forwardRef(((f,h)=>{const{children:p,...g}=f,[m]=o.useState((()=>Dy(function(e){const t=new Map,r=({constructor:e,dependencies:n,id:o,singleton:i})=>{if(i&&t.has(o))return t.get(o);const a=e(n.map((e=>r(e))));return i&&t.set(o,a),a};return r(e)}(t),(e=>{c(e,g)})))),[b]=o.useState(xy(u,m));Rw((()=>{for(const e of s)e in g&&Ey(b[e],g[e]);return()=>{Object.values(b).map(Oy)}}),[g,b,m]),Rw((()=>{c(m,g)})),o.useImperativeHandle(h,by(function(e){return l.reduce(((t,n)=>(t[n]=t=>{Fy(e[r.methods[n]],t)},t)),{})}(m)));const v=n;return e(d.Provider,{value:m,children:n?e(v,{...zw([...i,...a,...s],g),children:p}):p})})),h=o.version.startsWith("18")?e=>{const t=o.useContext(d)[e],r=o.useCallback((e=>Ey(t,e)),[t]);return o.useSyncExternalStore(r,(()=>Ty(t)),(()=>Ty(t)))}:e=>{const t=o.useContext(d)[e],[r,n]=o.useState(xy(Ty,t));return Rw((()=>Ey(t,(e=>{e!==r&&n(by(e))}))),[t,r]),r};return{Component:f,useEmitter:(e,t)=>{const r=o.useContext(d)[e];Rw((()=>Ey(r,t)),[t,r])},useEmitterValue:h,usePublisher:e=>o.useCallback(wy(Fy,o.useContext(d)[e]),[e])}}const Pw=o.createContext(void 0),Nw=o.createContext(void 0),Hw=typeof document<"u"?o.useLayoutEffect:o.useEffect;function Ww(e,t,r,n=Cy,i,a){const l=o.useRef(null),s=o.useRef(null),d=o.useRef(null),c=o.useCallback((r=>{const n=r.target,o=n===window||n===document,i=a?o?window.pageXOffset||document.documentElement.scrollLeft:n.scrollLeft:o?window.pageYOffset||document.documentElement.scrollTop:n.scrollTop,l=a?o?document.documentElement.scrollWidth:n.scrollWidth:o?document.documentElement.scrollHeight:n.scrollHeight,c=a?o?window.innerWidth:n.offsetWidth:o?window.innerHeight:n.offsetHeight,u=()=>{e({scrollHeight:l,scrollTop:Math.max(i,0),viewportHeight:c})};r.suppressFlushSync?u():A.flushSync(u),null!==s.current&&(i===s.current||i<=0||i===l-c)&&(s.current=null,t(!0),d.current&&(clearTimeout(d.current),d.current=null))}),[e,t]);return o.useEffect((()=>{const e=i||l.current;return n(i||l.current),c({suppressFlushSync:!0,target:e}),e.addEventListener("scroll",c,{passive:!0}),()=>{n(null),e.removeEventListener("scroll",c)}}),[l,c,r,n,i]),{scrollByCallback:function(e){a&&(e={behavior:e.behavior,left:e.top}),l.current.scrollBy(e)},scrollerRef:l,scrollToCallback:function(r){const n=l.current;if(!n||(a?"offsetWidth"in n&&0===n.offsetWidth:"offsetHeight"in n&&0===n.offsetHeight))return;const o="smooth"===r.behavior;let i,c,u;n===window?(c=Math.max(Mx(document.documentElement,a?"width":"height"),a?document.documentElement.scrollWidth:document.documentElement.scrollHeight),i=a?window.innerWidth:window.innerHeight,u=a?document.documentElement.scrollLeft:document.documentElement.scrollTop):(c=n[a?"scrollWidth":"scrollHeight"],i=Mx(n,a?"width":"height"),u=n[a?"scrollLeft":"scrollTop"]);const f=c-i;if(r.top=Math.ceil(Math.max(Math.min(f,r.top),0)),nw(i,c)||r.top===u)return e({scrollHeight:c,scrollTop:u,viewportHeight:i}),void(o&&t(!0));o?(s.current=r.top,d.current&&clearTimeout(d.current),d.current=setTimeout((()=>{d.current=null,s.current=null,t(!0)}),1e3)):s.current=null,a&&(r={behavior:r.behavior,left:r.top}),n.scrollTo(r)}}}const Yw="-webkit-sticky",Vw="sticky",Uw=Iw((()=>{if(typeof document>"u")return Vw;const e=document.createElement("div");return e.style.position=Yw,e.style.position===Yw?Yw:Vw}));function Kw(e){return e}const qw=qy((()=>{const e=Yy((e=>`Item ${e}`)),t=Yy(null),r=Yy((e=>`Group ${e}`)),n=Yy({}),o=Yy(Kw),i=Yy("div"),a=Yy(Cy),l=(e,t=null)=>Vy(Ly(n,zy((t=>t[e])),By()),t);return{components:n,computeItemKey:o,context:t,EmptyPlaceholder:l("EmptyPlaceholder"),FooterComponent:l("Footer"),GroupComponent:l("Group","div"),groupContent:r,HeaderComponent:l("Header"),HeaderFooterTag:i,ItemComponent:l("Item","div"),itemContent:e,ListComponent:l("List","div"),ScrollerComponent:l("Scroller","div"),scrollerRef:a,ScrollSeekPlaceholder:l("ScrollSeekPlaceholder"),TopItemListComponent:l("TopItemList")}})),Zw=qy((([e,t])=>({...e,...t})),ky(jw,qw)),Gw=({height:t})=>e("div",{style:{height:t}}),Xw={overflowAnchor:"none",position:Uw(),zIndex:1},Jw={overflowAnchor:"none"},Qw={...Jw,display:"inline-block",height:"100%"},e$=o.memo((function({showTopList:t=!1}){const r=b$("listState"),n=v$("sizeRanges"),i=b$("useWindowScroll"),a=b$("customScrollParent"),l=v$("windowScrollContainerState"),s=v$("scrollContainerState"),d=a||i?l:s,c=b$("itemContent"),u=b$("context"),f=b$("groupContent"),h=b$("trackItemSizes"),p=b$("itemSize"),g=b$("log"),m=v$("gap"),b=b$("horizontalDirection"),{callbackRef:v}=ox(n,p,h,t?Cy:d,g,m,a,b,b$("skipAnimationFrameInResizeObserver")),[y,x]=o.useState(0);m$("deviation",(e=>{y!==e&&x(e)}));const w=b$("EmptyPlaceholder"),$=b$("ScrollSeekPlaceholder")||Gw,C=b$("ListComponent"),D=b$("ItemComponent"),S=b$("GroupComponent"),E=b$("computeItemKey"),F=b$("isSeeking"),O=b$("groupIndices").length>0,T=b$("alignToBottom"),_=b$("initialItemFinalLocationReached"),I=t?{}:{boxSizing:"border-box",...b?{display:"inline-block",height:"100%",marginLeft:0!==y?y:T?"auto":0,paddingLeft:r.offsetTop,paddingRight:r.offsetBottom,whiteSpace:"nowrap"}:{marginTop:0!==y?y:T?"auto":0,paddingBottom:r.offsetBottom,paddingTop:r.offsetTop},..._?{}:{visibility:"hidden"}};return!t&&0===r.totalCount&&w?e(w,{...i$(w,u)}):e(C,{...i$(C,u),"data-testid":t?"virtuoso-top-item-list":"virtuoso-item-list",ref:v,style:I,children:(t?r.topItems:r.items).map((e=>{const t=e.originalIndex,n=E(t+r.firstItemIndex,e.data,u);return F?k($,{...i$($,u),height:e.size,index:e.index,key:n,type:e.type||"item",..."group"===e.type?{}:{groupIndex:e.groupIndex}}):"group"===e.type?k(S,{...i$(S,u),"data-index":t,"data-item-index":e.index,"data-known-size":e.size,key:n,style:Xw},f(e.index,u)):k(D,{...i$(D,u),...a$(D,e.data),"data-index":t,"data-item-group-index":e.groupIndex,"data-item-index":e.index,"data-known-size":e.size,key:n,style:b?Qw:Jw},O?c(e.index,e.groupIndex,e.data,u):c(e.index,e.data,u))}))})})),t$={height:"100%",outline:"none",overflowY:"auto",position:"relative",WebkitOverflowScrolling:"touch"},r$={outline:"none",overflowX:"auto",position:"relative"},n$=e=>({height:"100%",position:"absolute",top:0,width:"100%",...e?{display:"flex",flexDirection:"column"}:{}}),o$={position:Uw(),top:0,width:"100%",zIndex:1};function i$(e,t){if("string"!=typeof e)return{context:t}}function a$(e,t){return{item:"string"==typeof e?void 0:t}}const l$=o.memo((function(){const t=b$("HeaderComponent"),r=v$("headerHeight"),n=b$("HeaderFooterTag"),i=rx(o.useMemo((()=>e=>{r(Mx(e,"height"))}),[r]),!0,b$("skipAnimationFrameInResizeObserver")),a=b$("context");return t?e(n,{ref:i,children:e(t,{...i$(t,a)})}):null})),s$=o.memo((function(){const t=b$("FooterComponent"),r=v$("footerHeight"),n=b$("HeaderFooterTag"),i=rx(o.useMemo((()=>e=>{r(Mx(e,"height"))}),[r]),!0,b$("skipAnimationFrameInResizeObserver")),a=b$("context");return t?e(n,{ref:i,children:e(t,{...i$(t,a)})}):null}));function d$({useEmitter:t,useEmitterValue:r,usePublisher:n}){return o.memo((function({children:o,style:i,...a}){const l=n("scrollContainerState"),s=r("ScrollerComponent"),d=n("smoothScrollTargetReached"),c=r("scrollerRef"),u=r("context"),f=r("horizontalDirection")||!1,{scrollByCallback:h,scrollerRef:p,scrollToCallback:g}=Ww(l,d,s,c,void 0,f);return t("scrollTo",g),t("scrollBy",h),e(s,{"data-testid":"virtuoso-scroller","data-virtuoso-scroller":!0,ref:p,style:{...f?r$:t$,...i},tabIndex:0,...a,...i$(s,u),children:o})}))}function c$({useEmitter:t,useEmitterValue:r,usePublisher:n}){return o.memo((function({children:o,style:i,...a}){const l=n("windowScrollContainerState"),s=r("ScrollerComponent"),d=n("smoothScrollTargetReached"),c=r("totalListHeight"),u=r("deviation"),f=r("customScrollParent"),h=r("context"),{scrollByCallback:p,scrollerRef:g,scrollToCallback:m}=Ww(l,d,s,Cy,f);return Hw((()=>(g.current=f||window,()=>{g.current=null})),[g,f]),t("windowScrollTo",m),t("scrollBy",p),e(s,{"data-virtuoso-scroller":!0,style:{position:"relative",...i,...0!==c?{height:c+u}:{}},...a,...i$(s,h),children:o})}))}const u$=({children:t})=>{const r=o.useContext(Pw),n=v$("viewportHeight"),i=v$("fixedItemHeight"),a=b$("alignToBottom"),l=b$("horizontalDirection"),s=rx(o.useMemo((()=>yy(n,(e=>Mx(e,l?"width":"height")))),[n,l]),!0,b$("skipAnimationFrameInResizeObserver"));return o.useEffect((()=>{r&&(n(r.viewportHeight),i(r.itemHeight))}),[r,n,i]),e("div",{"data-viewport-type":"element",ref:s,style:n$(a),children:t})},f$=({children:t})=>{const r=o.useContext(Pw),n=v$("windowViewportRect"),i=v$("fixedItemHeight"),a=b$("customScrollParent"),l=ax(n,a,b$("skipAnimationFrameInResizeObserver")),s=b$("alignToBottom");return o.useEffect((()=>{r&&(i(r.itemHeight),n({offsetTop:0,visibleHeight:r.viewportHeight,visibleWidth:100}))}),[r,n,i]),e("div",{"data-viewport-type":"window",ref:l,style:n$(s),children:t})},h$=({children:t})=>{const r=b$("TopItemListComponent")||"div",n=b$("headerHeight"),o={...o$,marginTop:`${n}px`},i=b$("context");return e(r,{style:o,...i$(r,i),children:t})},p$=o.memo((function(r){const n=b$("useWindowScroll"),o=b$("topItemsIndexes").length>0,i=b$("customScrollParent"),a=b$("context"),l=i||n?x$:y$,s=i||n?f$:u$;return t(l,{...r,...i$(l,a),children:[o&&e(h$,{children:e(e$,{showTopList:!0})}),t(s,{children:[e(l$,{}),e(e$,{}),e(s$,{})]})]})})),{Component:g$,useEmitter:m$,useEmitterValue:b$,usePublisher:v$}=Lw(Zw,{events:{atBottomStateChange:"atBottomStateChange",atTopStateChange:"atTopStateChange",endReached:"endReached",groupIndices:"groupIndices",isScrolling:"isScrolling",itemsRendered:"itemsRendered",rangeChanged:"rangeChanged",startReached:"startReached",totalListHeightChanged:"totalListHeightChanged"},methods:{autoscrollToBottom:"autoscrollToBottom",getState:"getState",scrollBy:"scrollBy",scrollIntoView:"scrollIntoView",scrollTo:"scrollTo",scrollToIndex:"scrollToIndex"},optional:{alignToBottom:"alignToBottom",atBottomThreshold:"atBottomThreshold",atTopThreshold:"atTopThreshold",components:"components",computeItemKey:"computeItemKey",context:"context",customScrollParent:"customScrollParent",data:"data",defaultItemHeight:"defaultItemHeight",firstItemIndex:"firstItemIndex",fixedItemHeight:"fixedItemHeight",followOutput:"followOutput",groupContent:"groupContent",groupCounts:"groupCounts",headerFooterTag:"HeaderFooterTag",horizontalDirection:"horizontalDirection",increaseViewportBy:"increaseViewportBy",initialItemCount:"initialItemCount",initialScrollTop:"initialScrollTop",initialTopMostItemIndex:"initialTopMostItemIndex",itemContent:"itemContent",itemSize:"itemSize",logLevel:"logLevel",overscan:"overscan",restoreStateFrom:"restoreStateFrom",scrollerRef:"scrollerRef",scrollSeekConfiguration:"scrollSeekConfiguration",skipAnimationFrameInResizeObserver:"skipAnimationFrameInResizeObserver",topItemCount:"topItemCount",totalCount:"totalCount",useWindowScroll:"useWindowScroll"},required:{}},p$),y$=d$({useEmitter:m$,useEmitterValue:b$,usePublisher:v$}),x$=c$({useEmitter:m$,useEmitterValue:b$,usePublisher:v$}),w$=g$,$$={bottom:0,itemHeight:0,items:[],itemWidth:0,offsetBottom:0,offsetTop:0,top:0},C$={bottom:0,itemHeight:0,items:[{index:0}],itemWidth:0,offsetBottom:0,offsetTop:0,top:0},{ceil:D$,floor:S$,max:k$,min:E$,round:F$}=Math;function O$(e,t,r){return Array.from({length:t-e+1}).map(((t,n)=>({data:null===r?null:r[n+e],index:n+e})))}function T$(e,t){return e&&e.width===t.width&&e.height===t.height}function _$(e,t){return e&&e.column===t.column&&e.row===t.row}const I$=qy((([{increaseViewportBy:e,listBoundary:t,overscan:r,visibleRange:n},{footerHeight:o,headerHeight:i,scrollBy:a,scrollContainerState:l,scrollTo:s,scrollTop:d,smoothScrollTargetReached:c,viewportHeight:u},f,h,{didMount:p,propsReady:g},{customScrollParent:m,useWindowScroll:b,windowScrollContainerState:v,windowScrollTo:y,windowViewportRect:x},w])=>{const $=Yy(0),C=Yy(0),D=Yy($$),S=Yy({height:0,width:0}),k=Yy({height:0,width:0}),E=Uy(),F=Uy(),O=Yy(0),T=Yy(null),_=Yy({column:0,row:0}),I=Uy(),M=Uy(),A=Yy(!1),B=Yy(0),j=Yy(!0),z=Yy(!1),R=Yy(!1);Ey(Ly(p,Wy(B),jy((([e,t])=>!!t))),(()=>{Fy(j,!1)})),Ey(Ly(Gy(p,j,k,S,B,z),jy((([e,t,r,n,,o])=>e&&!t&&0!==r.height&&0!==n.height&&!o))),(([,,,,e])=>{Fy(z,!0),ew(1,(()=>{Fy(E,e)})),Iy(Ly(d),(()=>{Fy(t,[0,0]),Fy(j,!0)}))})),_y(Ly(M,jy((e=>null!=e&&e.scrollTop>0)),Ry(0)),C),Ey(Ly(p,Wy(M),jy((([,e])=>null!=e))),(([,e])=>{e&&(Fy(S,e.viewport),Fy(k,e.item),Fy(_,e.gap),e.scrollTop>0&&(Fy(A,!0),Iy(Ly(d,Ny(1)),(e=>{Fy(A,!1)})),Fy(s,{top:e.scrollTop})))})),_y(Ly(S,zy((({height:e})=>e))),u),_y(Ly(Gy(Xy(S,T$),Xy(k,T$),Xy(_,((e,t)=>e&&e.column===t.column&&e.row===t.row)),Xy(d)),zy((([e,t,r,n])=>({gap:r,item:t,scrollTop:n,viewport:e})))),I),_y(Ly(Gy(Xy($),n,Xy(_,_$),Xy(k,T$),Xy(S,T$),Xy(T),Xy(C),Xy(A),Xy(j),Xy(B)),jy((([,,,,,,,e])=>!e)),zy((([e,[t,r],n,o,i,a,l,,s,d])=>{const{column:c,row:u}=n,{height:f,width:h}=o,{width:p}=i;if(0===l&&(0===e||0===p))return $$;if(0===h){const t=tw(d,e);return function(e){return{...C$,items:e}}(O$(t,t+Math.max(l-1,0),a))}const g=M$(p,h,c);let m,b;s?0===t&&0===r&&l>0?(m=0,b=l-1):(m=g*S$((t+u)/(f+u)),b=g*D$((r+u)/(f+u))-1,b=E$(e-1,k$(b,g-1)),m=E$(b,k$(0,m))):(m=0,b=-1);const v=O$(m,b,a),{bottom:y,top:x}=A$(i,n,o,v),w=D$(e/g);return{bottom:y,itemHeight:f,items:v,itemWidth:h,offsetBottom:w*f+(w-1)*u-y,offsetTop:x,top:x}}))),D),_y(Ly(T,jy((e=>null!==e)),zy((e=>e.length))),$),_y(Ly(Gy(S,k,D,_),jy((([e,t,{items:r}])=>r.length>0&&0!==t.height&&0!==e.height)),zy((([e,t,{items:r},n])=>{const{bottom:o,top:i}=A$(e,n,t,r);return[i,o]})),By(Ox)),t);const L=Yy(!1);_y(Ly(d,Wy(L),zy((([e,t])=>t||0!==e))),L);const P=Ky(Ly(Gy(D,$),jy((([{items:e}])=>e.length>0)),Wy(L),jy((([[e,t],r])=>{const n=e.items[e.items.length-1].index===t-1;return(r||e.bottom>0&&e.itemHeight>0&&0===e.offsetBottom&&e.items.length===t)&&n})),zy((([[,e]])=>e-1)),By())),N=Ky(Ly(Xy(D),jy((({items:e})=>e.length>0&&0===e[0].index)),Ry(0),By())),H=Ky(Ly(Xy(D),Wy(A),jy((([{items:e},t])=>e.length>0&&!t)),zy((([{items:e}])=>({endIndex:e[e.length-1].index,startIndex:e[0].index}))),By(Fx),Hy(0)));_y(H,h.scrollSeekRangeChanged),_y(Ly(E,Wy(S,k,$,_),zy((([e,t,r,n,o])=>{const i=Jx(e),{align:a,behavior:l,offset:s}=i;let d=i.index;"LAST"===d&&(d=n-1),d=k$(0,d,E$(n-1,d));let c=B$(t,o,r,d);return"end"===a?c=F$(c-t.height+r.height):"center"===a&&(c=F$(c-t.height/2+r.height/2)),s&&(c+=s),{behavior:l,top:c}}))),s);const W=Vy(Ly(D,zy((e=>e.offsetBottom+e.bottom))),0);return _y(Ly(x,zy((e=>({height:e.visibleHeight,width:e.visibleWidth})))),S),{customScrollParent:m,data:T,deviation:O,footerHeight:o,gap:_,headerHeight:i,increaseViewportBy:e,initialItemCount:C,itemDimensions:k,overscan:r,restoreStateFrom:M,scrollBy:a,scrollContainerState:l,scrollHeight:F,scrollTo:s,scrollToIndex:E,scrollTop:d,smoothScrollTargetReached:c,totalCount:$,useWindowScroll:b,viewportDimensions:S,windowScrollContainerState:v,windowScrollTo:y,windowViewportRect:x,...h,gridState:D,horizontalDirection:R,initialTopMostItemIndex:B,totalListHeight:W,...f,endReached:P,propsReady:g,rangeChanged:H,startReached:N,stateChanged:I,stateRestoreInProgress:A,...w}}),ky(hw,lx,lw,Ew,Gx,Fw,tx));function M$(e,t,r){return k$(1,S$((e+r)/(S$(t)+r)))}function A$(e,t,r,n){const{height:o}=r;if(void 0===o||0===n.length)return{bottom:0,top:0};const i=B$(e,t,r,n[0].index);return{bottom:B$(e,t,r,n[n.length-1].index)+o,top:i}}function B$(e,t,r,n){const o=M$(e.width,r.width,t.column),i=S$(n/o),a=i*r.height+k$(0,i-1)*t.row;return a>0?a+t.row:a}const j$=qy((()=>{const e=Yy((e=>`Item ${e}`)),t=Yy({}),r=Yy(null),n=Yy("virtuoso-grid-item"),o=Yy("virtuoso-grid-list"),i=Yy(Kw),a=Yy("div"),l=Yy(Cy),s=(e,r=null)=>Vy(Ly(t,zy((t=>t[e])),By()),r),d=Yy(!1),c=Yy(!1);return _y(Xy(c),d),{components:t,computeItemKey:i,context:r,FooterComponent:s("Footer"),HeaderComponent:s("Header"),headerFooterTag:a,itemClassName:n,ItemComponent:s("Item","div"),itemContent:e,listClassName:o,ListComponent:s("List","div"),readyStateChanged:d,reportReadyState:c,ScrollerComponent:s("Scroller","div"),scrollerRef:l,ScrollSeekPlaceholder:s("ScrollSeekPlaceholder","div")}})),z$=qy((([e,t])=>({...e,...t})),ky(I$,j$)),R$=o.memo((function(){const t=U$("gridState"),r=U$("listClassName"),n=U$("itemClassName"),i=U$("itemContent"),a=U$("computeItemKey"),l=U$("isSeeking"),s=K$("scrollHeight"),d=U$("ItemComponent"),c=U$("ListComponent"),u=U$("ScrollSeekPlaceholder"),f=U$("context"),h=K$("itemDimensions"),p=K$("gap"),g=U$("log"),m=U$("stateRestoreInProgress"),b=K$("reportReadyState"),v=rx(o.useMemo((()=>e=>{const t=e.parentElement.parentElement.scrollHeight;s(t);const r=e.firstChild;if(r){const{height:e,width:t}=r.getBoundingClientRect();h({height:e,width:t})}p({column:G$("column-gap",getComputedStyle(e).columnGap,g),row:G$("row-gap",getComputedStyle(e).rowGap,g)})}),[s,h,p,g]),!0,!1);return Hw((()=>{t.itemHeight>0&&t.itemWidth>0&&b(!0)}),[t]),m?null:e(c,{className:r,ref:v,...i$(c,f),"data-testid":"virtuoso-item-list",style:{paddingBottom:t.offsetBottom,paddingTop:t.offsetTop},children:t.items.map((r=>{const o=a(r.index,r.data,f);return l?e(u,{...i$(u,f),height:t.itemHeight,index:r.index,width:t.itemWidth},o):k(d,{...i$(d,f),className:n,"data-index":r.index,key:o},i(r.index,r.data,f))}))})})),L$=o.memo((function(){const t=U$("HeaderComponent"),r=K$("headerHeight"),n=U$("headerFooterTag"),i=rx(o.useMemo((()=>e=>{r(Mx(e,"height"))}),[r]),!0,!1),a=U$("context");return t?e(n,{ref:i,children:e(t,{...i$(t,a)})}):null})),P$=o.memo((function(){const t=U$("FooterComponent"),r=K$("footerHeight"),n=U$("headerFooterTag"),i=rx(o.useMemo((()=>e=>{r(Mx(e,"height"))}),[r]),!0,!1),a=U$("context");return t?e(n,{ref:i,children:e(t,{...i$(t,a)})}):null})),N$=({children:t})=>{const r=o.useContext(Nw),n=K$("itemDimensions"),i=K$("viewportDimensions"),a=rx(o.useMemo((()=>e=>{i(e.getBoundingClientRect())}),[i]),!0,!1);return o.useEffect((()=>{r&&(i({height:r.viewportHeight,width:r.viewportWidth}),n({height:r.itemHeight,width:r.itemWidth}))}),[r,i,n]),e("div",{ref:a,style:n$(!1),children:t})},H$=({children:t})=>{const r=o.useContext(Nw),n=K$("windowViewportRect"),i=K$("itemDimensions"),a=U$("customScrollParent"),l=ax(n,a,!1);return o.useEffect((()=>{r&&(i({height:r.itemHeight,width:r.itemWidth}),n({offsetTop:0,visibleHeight:r.viewportHeight,visibleWidth:r.viewportWidth}))}),[r,n,i]),e("div",{ref:l,style:n$(!1),children:t})},W$=o.memo((function({...r}){const n=U$("useWindowScroll"),o=U$("customScrollParent"),i=o||n?Z$:q$,a=o||n?H$:N$,l=U$("context");return e(i,{...r,...i$(i,l),children:t(a,{children:[e(L$,{}),e(R$,{}),e(P$,{})]})})})),{Component:Y$,useEmitter:V$,useEmitterValue:U$,usePublisher:K$}=Lw(z$,{events:{atBottomStateChange:"atBottomStateChange",atTopStateChange:"atTopStateChange",endReached:"endReached",isScrolling:"isScrolling",rangeChanged:"rangeChanged",readyStateChanged:"readyStateChanged",startReached:"startReached",stateChanged:"stateChanged"},methods:{scrollBy:"scrollBy",scrollTo:"scrollTo",scrollToIndex:"scrollToIndex"},optional:{components:"components",computeItemKey:"computeItemKey",context:"context",customScrollParent:"customScrollParent",data:"data",headerFooterTag:"headerFooterTag",increaseViewportBy:"increaseViewportBy",initialItemCount:"initialItemCount",initialTopMostItemIndex:"initialTopMostItemIndex",itemClassName:"itemClassName",itemContent:"itemContent",listClassName:"listClassName",logLevel:"logLevel",overscan:"overscan",restoreStateFrom:"restoreStateFrom",scrollerRef:"scrollerRef",scrollSeekConfiguration:"scrollSeekConfiguration",totalCount:"totalCount",useWindowScroll:"useWindowScroll"}},W$),q$=d$({useEmitter:V$,useEmitterValue:U$,usePublisher:K$}),Z$=c$({useEmitter:V$,useEmitterValue:U$,usePublisher:K$});function G$(e,t,r){return"normal"!==t&&!(null!=t&&t.endsWith("px"))&&r(`${e} was not resolved to pixel value correctly`,t,Qy.WARN),"normal"===t?0:parseInt(null!=t?t:"0",10)}const X$=o.createContext({focusedIndex:-1,setFocusedIndex:()=>{}}),J$=({children:t})=>{const[r,n]=g(-1);return e(X$.Provider,{value:{focusedIndex:r,setFocusedIndex:n},children:t})},Q$=F.div`
    border: ${va["width-010"]} ${va.solid} ${ga.border};
    border-radius: ${xa.sm};
    background: ${ga.bg};

    --x-spacing: 0px;
    --available-width: calc(100vw - var(--x-spacing) * 2);

    ${Ca.MaxWidth.sm} {
        --x-spacing: ${$a["sm-margin"]}px;
        max-height: 15rem;
    }

    ${Ca.MaxWidth.xs} {
        --x-spacing: ${$a["xs-margin"]}px;
    }

    ${Ca.MaxWidth.xxs} {
        --x-spacing: ${$a["xxs-margin"]}px;
    }

    max-width: var(--available-width);

    ${e=>e.$customWidth?`width: ${e.$customWidth};`:e.$width?`width: ${e.$width}px; min-width: min(23rem, var(--available-width));`:"min-width: min(23rem, var(--available-width));"}

    max-height: min(27rem, var(--available-height, infinity * 1px));
    overflow: hidden;
    overflow-y: auto;
    ${e=>"small"===e.$variant?ma["body-md-regular"]:ma["body-baseline-regular"]}

    &::-webkit-scrollbar {
        width: 14px;
    }

    &::-webkit-scrollbar-track {
        background: transparent;
    }

    &::-webkit-scrollbar-thumb {
        background: ${ga["bg-inverse-subtlest"]};
        border: 5px solid transparent;
        border-radius: ${xa.full};
        background-clip: padding-box;
    }
`,eC=F.div`
    background: transparent;
    padding: ${ya["spacing-8"]};
`,tC=F.ul`
    list-style-type: none;
`,rC=F.li`
    display: flex;
    align-items: flex-start;
    gap: ${ya["spacing-8"]};
    padding: ${ya["spacing-12"]} ${ya["spacing-8"]};
    cursor: pointer;
    border: none;
    border-radius: ${xa.none};
    outline: none;

    ${e=>e.$disabled?O`
                cursor: not-allowed;
            `:e.$active&&e.$selected?O`
                background: ${ga["bg-hover"]};
            `:e.$active?O`
                background: ${ga["bg-hover-subtle"]};
            `:void 0}
`,nC=F(ve)`
    flex-shrink: 0;
    height: 1lh;
    width: 1rem;
    color: ${ga["icon-selected"]};
`,oC=F.div`
    flex-shrink: 0;
    height: 1lh;
    width: 1rem;
`,iC=F(be)`
    flex-shrink: 0;
    height: 1lh;
    width: 1lh;
    color: ${ga["icon-selected"]};
`,aC=F(ge)`
    flex-shrink: 0;
    height: 1lh;
    width: 1lh;
    color: ${ga["icon-primary-subtlest"]};
`,lC=F(me)`
    flex-shrink: 0;
    height: 1lh;
    width: 1lh;
    color: ${ga["icon-disabled-subtle"]};
`,sC=F.div`
    width: 100%;
    display: flex;
    justify-content: flex-end;
`,dC=F(Uh)`
    cursor: pointer;
    overflow: hidden;
    color: ${ga["text-primary"]};
    font-size: inherit;
`,cC=F(dC)`
    ${ma["body-baseline-semibold"]}
`,uC=F(dC)`
    ${ma["body-md-semibold"]}
    padding: ${ya["spacing-8"]} ${ya["spacing-8"]};
`,fC=F.div`
    width: 100%;
    display: flex;
    padding: ${ya["spacing-12"]} ${ya["spacing-16"]};
    align-items: center;
`,hC=F(ae)`
    margin-right: ${ya["spacing-4"]};
    color: ${ga["icon-error"]};
    height: 1em;
    width: 1em;
`,pC=F(Mf)`
    margin-right: ${ya["spacing-8"]};
    color: ${ga.icon};
`,gC=F.div`
    ${iu()}
    color: ${ga["text-subtle"]};
    padding: 0 ${ya["spacing-16"]} ${ya["spacing-12"]}
        ${ya["spacing-16"]};
`,mC=F.div`
    background: ${ga["bg-strong"]};
    border-radius: ${xa.sm};
    display: flex;
    align-items: center;

    ${e=>"small"===e.$variant?ma["body-md-regular"]:ma["body-baseline-regular"]}
`,bC=F.label`
    flex: 1;
    display: flex;
    align-items: center;
    gap: ${ya["spacing-8"]};
    padding: ${e=>"small"===e.$variant?O`
                  ${ya["spacing-8"]} ${ya["spacing-16"]}
              `:O`10px ${ya["spacing-8"]}`};
`,vC=F(Vh)`
    flex: 1;
`,yC=F(ye)`
    color: ${ga.icon};
    flex-shrink: 0;
    height: 1em;
    width: 1em;
`,xC=F(tu)`
    flex-shrink: 0;
    align-self: stretch;
    box-sizing: content-box;
    padding: ${ya["spacing-8"]};
    margin-left: -${ya["spacing-8"]};
    color: ${ga.icon};
    cursor: pointer;
    font-size: inherit;

    svg {
        flex-shrink: 0;
        height: 1em;
        width: 1em;
    }
`,wC=u(((r,n)=>{var{value:o,variant:i,onClear:a}=r,l=st(r,["value","variant","onClear"]);return t(mC,{$variant:i,children:[t(bC,{$variant:i,children:[e(yC,{"aria-hidden":!0}),e(vC,Object.assign({ref:n,value:o,$variant:i},l))]}),o&&e(xC,{"aria-label":"Clear search",focusOutline:"browser",onClick:a,children:e(L,{"aria-hidden":!0})})]})})),$C=u((({listItems:n,multiSelect:o,maxSelectable:i,selectedItems:a,disableItemFocus:s,itemsLoadState:u="success",itemTruncationType:h="end",itemMaxLines:p=2,labelDisplayType:m="inline",variant:v="default",listboxId:y,ariaLabel:x,matchElementWidth:w=!1,width:$,topScrollItem:C,onSelectItem:D,onSelectAll:S,onDismiss:k,onRetry:E,valueExtractor:F,listExtractor:O,renderListItem:T,renderCustomCallToAction:_,enableSearch:I,hideNoResultsDisplay:M,noResultsDescription:A,customLabels:B,searchPlaceholder:j,searchFunction:z,onSearch:R},L)=>{const{noResultsLabel:P="No results found.",selectAllButtonLabel:N="Select all",clearAllButtonLabel:H="Clear all"}=B||{},W=(null==B?void 0:B.searchPlaceholder)||j||"Search",Y=(null==B?void 0:B.noResultsDescription)||A,{focusedIndex:V,setFocusedIndex:U}=b(X$),{elementWidth:K,setFloatingRef:q,getFloatingProps:Z,styles:G}=wf(),[X,J]=g(""),[Q,ee]=g(null!=n?n:[]),te=qc(u),re=Uc(),ne=l(null),oe=l(null),ie=l([]),ae=l(null),le=l(null),se=!!i&&!!a&&(null==a?void 0:a.length)===i,de=e=>{const t=O?O(e):null==e?void 0:e.toString();return"object"==typeof t?{title:t.title,secondaryLabel:t.secondaryLabel}:{title:null!=t?t:""}},ce=c((e=>!!py(a,(t=>my(t,e)))),[a]),ue=Yc((()=>null==z?void 0:z(X))),fe=Yc((()=>null==n?void 0:n.filter((e=>{const{title:t,secondaryLabel:r}=de(e),n=X.trim().toLowerCase();return t.toLowerCase().includes(n)||r&&r.toLowerCase().includes(n)})))),he=c((e=>{var t,r;if(s)return;if(ae.current)return U(-1),void setTimeout((()=>{var e;return null===(e=ae.current)||void 0===e?void 0:e.focus()}),0);const n=null!=Q?Q:[];if(0===n.length)return;if(void 0!==(null==e?void 0:e.index)){const r=Math.max(0,Math.min(e.index,n.length-1));return null===(t=le.current)||void 0===t||t.scrollToIndex({index:r,align:"center"}),U(r),void setTimeout((()=>{var e;return null===(e=ie.current[r])||void 0===e?void 0:e.focus()}),0)}const o=(null==e?void 0:e.preferSelected)?n.findIndex((e=>ce(e))):-1,i=-1!==o?o:V>=0&&V<n.length?V:0;null===(r=le.current)||void 0===r||r.scrollToIndex({index:i,align:"center"}),U(i),setTimeout((()=>{var e;return null===(e=ie.current[i])||void 0===e?void 0:e.focus()}),0)}),[ce,s,Q,V,U]),pe=(e,t)=>{se&&!ce(e)||(U(t),null==D||D(e,(e=>F?F(e):e)(e)))},ge=e=>{const t=e.target.value;J(t),null==R||R()},me=()=>{var e;J(""),null===(e=ae.current)||void 0===e||e.focus(),null==R||R()},be=()=>null==E?void 0:E();Vc("keydown",(e=>{var t,r;switch(e.code){case"ArrowDown":if(e.preventDefault(),V<Q.length-1){const e=V+1;null===(t=ie.current[e])||void 0===t||t.focus(),U(e)}break;case"ArrowUp":if(e.preventDefault(),V>0){const e=V-1;null===(r=ie.current[e])||void 0===r||r.focus(),U(e)}else 0===V&&ae.current&&(ae.current.focus(),U(-1));break;case"Space":case"Enter":document.activeElement===ie.current[V]&&(e.preventDefault(),Q[V]&&pe(Q[V],V))}})),f(L,(()=>({refocus:he})),[he]),d((()=>{var e;if(!C)return void(null===(e=le.current)||void 0===e||e.scrollTo({top:0}));const t=setTimeout((()=>{if(!n)return;const e=n.indexOf(C);le.current&&-1!==e&&(le.current.scrollToIndex({index:e}),U(e))}),0);return()=>clearTimeout(t)}),[ie,n,U,C]),d((()=>{s||re&&te&&"success"===u&&ae.current&&(U(-1),ae.current.focus())}),[re,te,u,U,s]),d((()=>{var e;ee(null!==(e=""===X?n:z?ue():fe())&&void 0!==e?e:[])}),[ue,fe,n,z,X]),d((()=>{var e,t,r;if(re)return;if(s||!n)return;const o=n.findIndex((e=>ce(e)));ae.current?(U(-1),setTimeout((()=>{var e;return null===(e=ae.current)||void 0===e?void 0:e.focus()}),200)):V>0?(null===(e=le.current)||void 0===e||e.scrollToIndex({index:V,align:"center"}),setTimeout((()=>{var e;return null===(e=ie.current[V])||void 0===e?void 0:e.focus()}),200)):-1!==o?(null===(t=le.current)||void 0===t||t.scrollToIndex({index:o,align:"center"}),U(o),setTimeout((()=>{var e;return null===(e=ie.current[o])||void 0===e?void 0:e.focus()}),200)):(null===(r=le.current)||void 0===r||r.scrollToIndex({index:0}),U(0),setTimeout((()=>{var e;return null===(e=ie.current[0])||void 0===e?void 0:e.focus()}),200))}),[ce,s,V,n,re,U]);const ve=t=>o?e(se&&!t?lC:t?iC:aC,{"aria-hidden":!0}):t?e(nC,{"aria-hidden":!0}):e(oC,{}),ye=(t,r)=>{const{title:n,secondaryLabel:o}=de(t);return e(_g,{displayType:m,label:n,maxLines:p,selected:r,disabled:!r&&se,sublabel:o,truncationType:h,variant:v})},xe=(n,i)=>{if(!E||"success"===u){const a=ce(n),l=i===V;return e(rC,{"aria-selected":a,"aria-multiselectable":o,"aria-disabled":!a&&se,"aria-posinset":i+1,"aria-setsize":null==Q?void 0:Q.length,"data-testid":"list-item",onClick:()=>pe(n,i),onMouseEnter:()=>(e=>U(e))(i),ref:e=>{ie.current[i]=e},role:"option",tabIndex:l?0:-1,$active:l,$selected:a,$disabled:!a&&se,children:T?T(n,{selected:a}):t(r,{children:[ve(a),ye(n,a)]})},((e,t)=>`item_${t}__${F?F(e):e}`)(n,i))}},we=()=>{if((I||z)&&"success"===u)return e(wC,{ref:ae,onChange:ge,value:X,placeholder:W,"data-testid":"search-input","aria-label":"Enter text to search",onClear:me,variant:v})},$e=()=>{if(a&&o&&Q.length>0&&!X&&"success"===u)return e(sC,{children:e(uC,{onClick:S,type:"button",$variant:v,children:i||0!==a.length?H:N})})},Ce=()=>{if(!M&&(X||!I)&&0===Q.length&&"success"===u)return t(r,{children:[t(fC,{"data-testid":"list-no-results",children:[e(hC,{"data-testid":"no-result-icon"}),P]}),Y&&e(gC,{"data-testid":"no-result-desc",children:Y})]})},De=()=>{if(E&&"loading"===u)return t(fC,{"data-testid":"list-loading",children:[e(pC,{}),"Loading..."]})},Se=()=>{if(E&&"fail"===u)return t(fC,{"data-testid":"list-fail",children:[e(hC,{"data-testid":"load-error-icon"}),"Failed to load. ",e(cC,{onClick:be,type:"button",$variant:v,children:"Try again."})]})},ke=()=>{var t;const r="test"===process.env.NODE_ENV;return e(tC,{role:"listbox",id:y,children:e(w$,Object.assign({ref:le,style:{height:"100%"},data:Q,customScrollParent:null!==(t=ne.current)&&void 0!==t?t:void 0,itemContent:(e,t)=>xe(t,e)},r?{initialItemCount:Q.length}:{}),r?Q.length:void 0)})};return t(Q$,Object.assign({"data-testid":"dropdown-container",ref:Nc(ne,q),style:G},Z(),{$width:w?K:void 0,$customWidth:$,$variant:v,children:[e(Df,{role:"status",children:x}),t(eC,{ref:oe,"data-testid":"dropdown-list",role:"group","aria-label":x,children:[we(),$e(),Ce(),De(),Se(),ke()]}),(()=>{if(_)return e("div",{"data-testid":"custom-cta",children:_(k,Q)})})()]}))})),CC=F(Uh)`
    display: flex;
    align-items: center;
    gap: ${ya["spacing-8"]};
    width: 100%;
    padding: ${e=>e.$readOnly?`0 ${ya["spacing-16"]}`:ya["spacing-16"]};

    ${e=>"small"===e.$variant?O`
                  ${ma["body-md-regular"]}
                  height: calc(2.5rem - 2px); // exclude top and bottom borders
              `:O`
                  ${ma["body-baseline-regular"]}
                  height: calc(3rem - 2px);
              `}

    &:disabled {
        cursor: not-allowed;
    }

    &:focus-visible {
        outline: 2px solid ${ga["focus-ring"]};
        outline-offset: -2px;
    }
`,DC=F.div`
    display: flex;
    align-items: center;
    transform: rotate(${e=>e.$expanded?180:0}deg);
    transition: transform ${ba["duration-250"]} ${ba["ease-default"]};

    svg {
        color: ${ga.icon};
        height: 1em;
        width: 1em;
    }
`,SC=u(((r,n)=>{var{children:o,disabled:i,expanded:a,listboxId:l,popupRole:s,readOnly:d,variant:c}=r,u=st(r,["children","disabled","expanded","listboxId","popupRole","readOnly","variant"]);return t(CC,Object.assign({ref:n,type:"button",role:"combobox","aria-expanded":a,"aria-haspopup":s,"aria-controls":a?l:void 0,"data-testid":"selector","aria-disabled":i,"aria-readonly":d,$variant:c,$readOnly:d},u,{children:[o,!d&&e(DC,{$expanded:a,$variant:c,children:e(le,{"aria-hidden":!0})})]}))}));var kC=Symbol.for("immer-nothing"),EC=Symbol.for("immer-draftable"),FC=Symbol.for("immer-state"),OC="production"!==process.env.NODE_ENV?[function(e){return`The plugin for '${e}' has not been loaded into Immer. To enable the plugin, import and call \`enable${e}()\` when initializing your application.`},function(e){return`produce can only be called on things that are draftable: plain objects, arrays, Map, Set or classes that are marked with '[immerable]: true'. Got '${e}'`},"This object has been frozen and should not be mutated",function(e){return"Cannot use a proxy that has been revoked. Did you pass an object from inside an immer function to an async process? "+e},"An immer producer returned a new value *and* modified its draft. Either return a new value *or* modify the draft.","Immer forbids circular references","The first or second argument to `produce` must be a function","The third argument to `produce` must be a function or undefined","First argument to `createDraft` must be a plain object, an array, or an immerable object","First argument to `finishDraft` must be a draft returned by `createDraft`",function(e){return`'current' expects a draft, got: ${e}`},"Object.defineProperty() cannot be used on an Immer draft","Object.setPrototypeOf() cannot be used on an Immer draft","Immer only supports deleting array indices","Immer only supports setting array indices and the 'length' property",function(e){return`'original' expects a draft, got: ${e}`}]:[];function TC(e,...t){if("production"!==process.env.NODE_ENV){const r=OC[e],n="function"==typeof r?r.apply(null,t):r;throw new Error(`[Immer] ${n}`)}throw new Error(`[Immer] minified error nr: ${e}. Full error at: https://bit.ly/3cXEKWf`)}var _C=Object.getPrototypeOf;function IC(e){return!!e&&!!e[FC]}function MC(e){return!!e&&(BC(e)||Array.isArray(e)||!!e[EC]||!!e.constructor?.[EC]||PC(e)||NC(e))}var AC=Object.prototype.constructor.toString();function BC(e){if(!e||"object"!=typeof e)return!1;const t=_C(e);if(null===t)return!0;const r=Object.hasOwnProperty.call(t,"constructor")&&t.constructor;return r===Object||"function"==typeof r&&Function.toString.call(r)===AC}function jC(e,t){0===zC(e)?Reflect.ownKeys(e).forEach((r=>{t(r,e[r],e)})):e.forEach(((r,n)=>t(n,r,e)))}function zC(e){const t=e[FC];return t?t.type_:Array.isArray(e)?1:PC(e)?2:NC(e)?3:0}function RC(e,t){return 2===zC(e)?e.has(t):Object.prototype.hasOwnProperty.call(e,t)}function LC(e,t,r){const n=zC(e);2===n?e.set(t,r):3===n?e.add(r):e[t]=r}function PC(e){return e instanceof Map}function NC(e){return e instanceof Set}function HC(e){return e.copy_||e.base_}function WC(e,t){if(PC(e))return new Map(e);if(NC(e))return new Set(e);if(Array.isArray(e))return Array.prototype.slice.call(e);const r=BC(e);if(!0===t||"class_only"===t&&!r){const t=Object.getOwnPropertyDescriptors(e);delete t[FC];let r=Reflect.ownKeys(t);for(let n=0;n<r.length;n++){const o=r[n],i=t[o];!1===i.writable&&(i.writable=!0,i.configurable=!0),(i.get||i.set)&&(t[o]={configurable:!0,writable:!0,enumerable:i.enumerable,value:e[o]})}return Object.create(_C(e),t)}{const t=_C(e);if(null!==t&&r)return{...e};const n=Object.create(t);return Object.assign(n,e)}}function YC(e,t=!1){return UC(e)||IC(e)||!MC(e)||(zC(e)>1&&(e.set=e.add=e.clear=e.delete=VC),Object.freeze(e),t&&Object.entries(e).forEach((([e,t])=>YC(t,!0)))),e}function VC(){TC(2)}function UC(e){return Object.isFrozen(e)}var KC,qC={};function ZC(e){const t=qC[e];return t||TC(0,e),t}function GC(){return KC}function XC(e,t){t&&(ZC("Patches"),e.patches_=[],e.inversePatches_=[],e.patchListener_=t)}function JC(e){QC(e),e.drafts_.forEach(tD),e.drafts_=null}function QC(e){e===KC&&(KC=e.parent_)}function eD(e){return KC={drafts_:[],parent_:KC,immer_:e,canAutoFreeze_:!0,unfinalizedDrafts_:0}}function tD(e){const t=e[FC];0===t.type_||1===t.type_?t.revoke_():t.revoked_=!0}function rD(e,t){t.unfinalizedDrafts_=t.drafts_.length;const r=t.drafts_[0];return void 0!==e&&e!==r?(r[FC].modified_&&(JC(t),TC(4)),MC(e)&&(e=nD(t,e),t.parent_||iD(t,e)),t.patches_&&ZC("Patches").generateReplacementPatches_(r[FC].base_,e,t.patches_,t.inversePatches_)):e=nD(t,r,[]),JC(t),t.patches_&&t.patchListener_(t.patches_,t.inversePatches_),e!==kC?e:void 0}function nD(e,t,r){if(UC(t))return t;const n=t[FC];if(!n)return jC(t,((o,i)=>oD(e,n,t,o,i,r))),t;if(n.scope_!==e)return t;if(!n.modified_)return iD(e,n.base_,!0),n.base_;if(!n.finalized_){n.finalized_=!0,n.scope_.unfinalizedDrafts_--;const t=n.copy_;let o=t,i=!1;3===n.type_&&(o=new Set(t),t.clear(),i=!0),jC(o,((o,a)=>oD(e,n,t,o,a,r,i))),iD(e,t,!1),r&&e.patches_&&ZC("Patches").generatePatches_(n,r,e.patches_,e.inversePatches_)}return n.copy_}function oD(e,t,r,n,o,i,a){if("production"!==process.env.NODE_ENV&&o===r&&TC(5),IC(o)){const a=nD(e,o,i&&t&&3!==t.type_&&!RC(t.assigned_,n)?i.concat(n):void 0);if(LC(r,n,a),!IC(a))return;e.canAutoFreeze_=!1}else a&&r.add(o);if(MC(o)&&!UC(o)){if(!e.immer_.autoFreeze_&&e.unfinalizedDrafts_<1)return;nD(e,o),t&&t.scope_.parent_||"symbol"==typeof n||!Object.prototype.propertyIsEnumerable.call(r,n)||iD(e,o)}}function iD(e,t,r=!1){!e.parent_&&e.immer_.autoFreeze_&&e.canAutoFreeze_&&YC(t,r)}var aD={get(e,t){if(t===FC)return e;const r=HC(e);if(!RC(r,t))return function(e,t,r){const n=dD(t,r);return n?"value"in n?n.value:n.get?.call(e.draft_):void 0}(e,r,t);const n=r[t];return e.finalized_||!MC(n)?n:n===sD(e.base_,t)?(uD(e),e.copy_[t]=fD(n,e)):n},has:(e,t)=>t in HC(e),ownKeys:e=>Reflect.ownKeys(HC(e)),set(e,t,r){const n=dD(HC(e),t);if(n?.set)return n.set.call(e.draft_,r),!0;if(!e.modified_){const n=sD(HC(e),t),o=n?.[FC];if(o&&o.base_===r)return e.copy_[t]=r,e.assigned_[t]=!1,!0;if(function(e,t){return e===t?0!==e||1/e==1/t:e!=e&&t!=t}(r,n)&&(void 0!==r||RC(e.base_,t)))return!0;uD(e),cD(e)}return e.copy_[t]===r&&(void 0!==r||t in e.copy_)||Number.isNaN(r)&&Number.isNaN(e.copy_[t])||(e.copy_[t]=r,e.assigned_[t]=!0),!0},deleteProperty:(e,t)=>(void 0!==sD(e.base_,t)||t in e.base_?(e.assigned_[t]=!1,uD(e),cD(e)):delete e.assigned_[t],e.copy_&&delete e.copy_[t],!0),getOwnPropertyDescriptor(e,t){const r=HC(e),n=Reflect.getOwnPropertyDescriptor(r,t);return n?{writable:!0,configurable:1!==e.type_||"length"!==t,enumerable:n.enumerable,value:r[t]}:n},defineProperty(){TC(11)},getPrototypeOf:e=>_C(e.base_),setPrototypeOf(){TC(12)}},lD={};function sD(e,t){const r=e[FC];return(r?HC(r):e)[t]}function dD(e,t){if(!(t in e))return;let r=_C(e);for(;r;){const e=Object.getOwnPropertyDescriptor(r,t);if(e)return e;r=_C(r)}}function cD(e){e.modified_||(e.modified_=!0,e.parent_&&cD(e.parent_))}function uD(e){e.copy_||(e.copy_=WC(e.base_,e.scope_.immer_.useStrictShallowCopy_))}jC(aD,((e,t)=>{lD[e]=function(){return arguments[0]=arguments[0][0],t.apply(this,arguments)}})),lD.deleteProperty=function(e,t){return"production"!==process.env.NODE_ENV&&isNaN(parseInt(t))&&TC(13),lD.set.call(this,e,t,void 0)},lD.set=function(e,t,r){return"production"!==process.env.NODE_ENV&&"length"!==t&&isNaN(parseInt(t))&&TC(14),aD.set.call(this,e[0],t,r,e[0])};function fD(e,t){const r=PC(e)?ZC("MapSet").proxyMap_(e,t):NC(e)?ZC("MapSet").proxySet_(e,t):function(e,t){const r=Array.isArray(e),n={type_:r?1:0,scope_:t?t.scope_:GC(),modified_:!1,finalized_:!1,assigned_:{},parent_:t,base_:e,draft_:null,copy_:null,revoke_:null,isManual_:!1};let o=n,i=aD;r&&(o=[n],i=lD);const{revoke:a,proxy:l}=Proxy.revocable(o,i);return n.draft_=l,n.revoke_=a,l}(e,t);return(t?t.scope_:GC()).drafts_.push(r),r}function hD(e){if(!MC(e)||UC(e))return e;const t=e[FC];let r;if(t){if(!t.modified_)return t.base_;t.finalized_=!0,r=WC(e,t.scope_.immer_.useStrictShallowCopy_)}else r=WC(e,!0);return jC(r,((e,t)=>{LC(r,e,hD(t))})),t&&(t.finalized_=!1),r}var pD=new class{constructor(e){this.autoFreeze_=!0,this.useStrictShallowCopy_=!1,this.produce=(e,t,r)=>{if("function"==typeof e&&"function"!=typeof t){const r=t;t=e;const n=this;return function(e=r,...o){return n.produce(e,(e=>t.call(this,e,...o)))}}let n;if("function"!=typeof t&&TC(6),void 0!==r&&"function"!=typeof r&&TC(7),MC(e)){const o=eD(this),i=fD(e,void 0);let a=!0;try{n=t(i),a=!1}finally{a?JC(o):QC(o)}return XC(o,r),rD(n,o)}if(!e||"object"!=typeof e){if(n=t(e),void 0===n&&(n=e),n===kC&&(n=void 0),this.autoFreeze_&&YC(n,!0),r){const t=[],o=[];ZC("Patches").generateReplacementPatches_(e,n,t,o),r(t,o)}return n}TC(1,e)},this.produceWithPatches=(e,t)=>{if("function"==typeof e)return(t,...r)=>this.produceWithPatches(t,(t=>e(t,...r)));let r,n;const o=this.produce(e,t,((e,t)=>{r=e,n=t}));return[o,r,n]},"boolean"==typeof e?.autoFreeze&&this.setAutoFreeze(e.autoFreeze),"boolean"==typeof e?.useStrictShallowCopy&&this.setUseStrictShallowCopy(e.useStrictShallowCopy)}createDraft(e){MC(e)||TC(8),IC(e)&&(e=function(e){IC(e)||TC(10,e);return hD(e)}(e));const t=eD(this),r=fD(e,void 0);return r[FC].isManual_=!0,QC(t),r}finishDraft(e,t){const r=e&&e[FC];r&&r.isManual_||TC(9);const{scope_:n}=r;return XC(n,t),rD(void 0,n)}setAutoFreeze(e){this.autoFreeze_=e}setUseStrictShallowCopy(e){this.useStrictShallowCopy_=e}applyPatches(e,t){let r;for(r=t.length-1;r>=0;r--){const n=t[r];if(0===n.path.length&&"replace"===n.op){e=n.value;break}}r>-1&&(t=t.slice(r+1));const n=ZC("Patches").applyPatches_;return IC(e)?n(e,t):this.produce(e,(e=>n(e,t)))}},gD=pD.produce;pD.produceWithPatches.bind(pD),pD.setAutoFreeze.bind(pD),pD.setUseStrictShallowCopy.bind(pD),pD.applyPatches.bind(pD),pD.createDraft.bind(pD),pD.finishDraft.bind(pD);var mD=db,bD=Nb,vD=Tm,yD=fr,xD=fb,wD=Mm,$D=ob,CD=qm,DD=Object.prototype.hasOwnProperty;var SD=function(e){if(null==e)return!0;if(xD(e)&&(yD(e)||"string"==typeof e||"function"==typeof e.splice||wD(e)||CD(e)||vD(e)))return!e.length;var t=bD(e);if("[object Map]"==t||"[object Set]"==t)return!e.size;if($D(e))return!mD(e).length;for(var r in e)if(DD.call(e,r))return!1;return!0},kD=je(SD);const ED=(e,t,r)=>{const n=gD(e,(e=>{for(let n=e.length-1;n>=0;n--){const o=e[n],i=OD(o.keyPath);if(o.checked=t.has(i),o.hasSubItems&&r&&!0!==o.checked){const t=o.subItemIndexes.map((t=>e[t])),r=t.every((e=>!0===e.checked)),n=t.some((e=>!1!==e.checked));r?o.checked=!0:n&&(o.checked="mixed")}}}));return n},FD=(e,t)=>{const[r,...n]=t;if(kD(e)||kD(r))return;const o=e.find((e=>e.key===r));return o&&n.length?FD(o.subItems,n):o},OD=e=>e.join(","),TD=e=>new Set(e.map((e=>e.join(",")))),_D=F.li`
    display: ${e=>e.$visible?"flex":"none"};
`,ID=F.div`
    flex: 1;
    display: flex;
    align-items: flex-start;
    gap: ${ya["spacing-8"]};
    padding: ${ya["spacing-12"]} ${ya["spacing-8"]};
    cursor: ${e=>e.$toggleable?"default":"pointer"};
    overflow: hidden; // required for label to truncate properly
    border-radius: ${xa.none};
    outline: none;

    ${e=>e.$active&&O`
            background: ${ga["bg-hover"]};
        `}
`,MD=F.div`
    height: 1px;
    width: calc((1lh + ${ya["spacing-8"]}) * ${e=>e.$level});
`,AD=F.div`
    width: 1lh;
    height: 1lh;
    color: ${ga["icon-primary"]};
    cursor: pointer;

    svg {
        width: 1lh;
        height: 1lh;
        transition: transform ${ba["duration-350"]}
            ${ba["ease-standard"]};

        ${e=>{if(e.$expanded)return O`
                    transform: rotate(90deg);
                `}}
    }
`,BD=F.div`
    width: 1lh;
    height: 1lh;
    margin-right: ${ya["spacing-8"]};
`,jD=F.div`
    flex-shrink: 0;
    height: 1lh;
    width: ${e=>e.$hasNestedSiblings?"1lh":ya["spacing-16"]};

    display: flex;
    justify-content: center;
`,zD=F(we)`
    flex-shrink: 0;
    height: 1lh;
    width: 1lh;
    color: ${ga["icon-selected"]};
`,RD=({listItems:n,multiSelect:o=!1,selectedKeyPaths:i,itemsLoadState:s="success",itemTruncationType:c="end",itemMaxLines:u=2,variant:f="default",listboxId:h,matchElementWidth:p=!1,width:m,mode:b="default",selectableCategory:v,onSelectItem:y,onSelectAll:x,onRetry:w,enableSearch:$,hideNoResultsDisplay:C,noResultsDescription:D,customLabels:S,searchPlaceholder:k,onSearch:E})=>{const{noResultsLabel:F="No results found.",selectAllButtonLabel:O="Select all",clearAllButtonLabel:T="Clear all"}=S||{},_=(null==S?void 0:S.searchPlaceholder)||k||"Search",I=(null==S?void 0:S.noResultsDescription)||D,M=o||v,{elementWidth:A,setFloatingRef:B,getFloatingProps:j,styles:z}=wf(),[R,L]=g(""),P=R.toLowerCase().trim(),[N,H]=g(!1),W=l(null),Y=l(null),V=l([]),U=l(null),K=Uc(),[q,Z]=g([]),[G,X]=g([]),J=N?G:q,Q=a((()=>{let e=0;for(const t of q)t.level>e&&(e=t.level);return e}),[q]),[ee,te]=g(0),[re,ne]=g([]),[oe,ie]=g(0),ae=e=>{const t=e.target.value;L(t),""===t?H(!1):t.trim().length>=3&&H(!0),null==E||E()},le=()=>{var e;L(""),H(!1),null===(e=U.current)||void 0===e||e.focus(),null==E||E()},se=()=>{null==w||w()},de=()=>{if(0===i.size){const e=[],t=[];q.forEach((r=>{r.hasSubItems||(e.push(r.keyPath),t.push(r))})),null==x||x(e,t)}else null==x||x([],[])},ce=Yc(((e,t)=>((e,t,r,n,o)=>{const i=[],a=(e,l)=>{const s=[],d=e.some((e=>{var t;return null===(t=e.subItems)||void 0===t?void 0:t.length}));return e.forEach(((c,u)=>{var f,h;const p=l?l.level+1:0,g=l?[...l.keyPath,c.key]:[c.key],m=OD(g),b={item:c,index:i.length,indexInParent:u,parentSetSize:e.length,keyPath:g,parentIndex:l?l.index:-1,parentKeyPath:l?l.keyPath:[],level:p,visible:0===p||o||(null==l?void 0:l.expanded)||!1,expanded:o,checked:t.has(m),hasSubItems:!!(null===(f=c.subItems)||void 0===f?void 0:f.length),subItemIndexes:[],hasNestedSiblings:d,matched:!!n&&-1!==c.label.toLowerCase().indexOf(n),hasMatchedSubItems:!1};if(s.push(b),i.push(b),null===(h=c.subItems)||void 0===h?void 0:h.length){const e=a(c.subItems,b);if(r&&!0!==b.checked){const t=e.every((e=>!0===e.checked)),r=e.some((e=>!1!==e.checked));t?b.checked=!0:r&&(b.checked="mixed")}b.hasMatchedSubItems=e.some((e=>e.matched||e.hasMatchedSubItems)),b.subItemIndexes=e.map((e=>e.index))}})),s};return a(e,void 0),i})(e,i,o,P,t))),ue=Yc((e=>{return i.size?(t=ce(e,!1),gD(t,(e=>{const t=e.filter((e=>!0===e.checked));for(const r of t){let t=r.parentIndex;for(;t>=0;){const r=e[t];r.visible=!0,r.expanded=!0;for(const t of r.subItemIndexes)e[t].visible=!0;t=r.parentIndex}}}))):(e=>gD(e,(e=>{const t=e.findIndex((e=>e.hasSubItems));if(t<0)return;let r=t,n=0;for(let t=r;t<e.length;t++){const o=e[t].keyPath.length;if(o>n)n=o;else if(o<n)break;r=t,e[t].visible=!0,e[t].expanded=!0}for(let t=0;t<e.length;t++){const n=e[t],o=n.keyPath.slice(0,-1),i=e[r].keyPath.slice(0,o.length);my(o,i)&&(n.visible=!0)}return e})))(ce(e,!1));var t})),fe=Yc((e=>{const t=e=>{const r=[];for(const n of e){if(-1!==n.label.toLowerCase().indexOf(P))r.push(n);else if(n.subItems){const e=t(n.subItems);if(e.length>0){r.push(Object.assign(Object.assign({},n),{subItems:e}));continue}}}return r};return t(e)})),he=Yc((()=>{Z((e=>ED(e,i,o))),N&&X((e=>ED(e,i,o)))})),pe=(e,t,r)=>{const n=((e,t,r)=>gD(e,(e=>{e[t].expanded=r;const n=e[t].keyPath;for(let o=t+1;o<e.length;o++){const t=e[o],i=e[t.parentIndex],a=t.keyPath.slice(0,n.length);if(!my(n,a))break;t.visible=r&&i.expanded&&i.visible}})))(J,e,t);te(e),ie(r),N?X(n):Z(n)};Vc("keydown",(e=>{var t,r;switch(e.code){case"ArrowDown":{e.preventDefault();const r=((e,t,r)=>{for(let n=r;n<e.length;n++)if(t(e[n]))return e[n]})(J,(e=>e.visible),ee+1);r&&(ie((e=>e+1)),te(r.index),null===(t=V.current[r.index])||void 0===t||t.focus());break}case"ArrowUp":{e.preventDefault();const t=((e,t,r)=>{for(let n=r;n>=0;n--)if(t(e[n]))return e[n]})(J,(e=>e.visible),ee-1);t?(ie((e=>e-1)),te(t.index),null===(r=V.current[t.index])||void 0===r||r.focus()):0===oe&&U.current&&(U.current.focus(),ie(-1),te(-1));break}case"ArrowRight":e.preventDefault(),pe(ee,!0,oe);break;case"ArrowLeft":e.preventDefault(),pe(ee,!1,oe);break;case"Space":if(document.activeElement===V.current[ee]){e.preventDefault();const t=J[ee];if(t.hasSubItems&&!M)return;null==y||y(t)}}})),d((()=>{let e=[];"default"===b?e=ue(n):"expand"===b?e=ce(n,!0):"collapse"===b&&(e=ce(n,!1)),Z(e)}),[ce,ue,n,b]),d((()=>{ne(J.filter((e=>e.visible)))}),[N,J]),d((()=>{he()}),[o,i,he]),d((()=>{if(N&&R.trim().length>=3){const e=fe(n),t=(e=>gD(e,(e=>{for(const t of e)if(t.matched&&(t.visible=!0),t.hasMatchedSubItems){t.visible=!0,t.expanded=!0;for(const r of t.subItemIndexes)e[r].visible=!0}})))(ce(e,!1));X(t)}}),[fe,ce,n,N,R]),d((()=>{K||(U.current?(te(-1),ie(-1),setTimeout((()=>{var e;return null===(e=U.current)||void 0===e?void 0:e.focus()}),200)):V.current[ee]?setTimeout((()=>{var e;return null===(e=V.current[ee])||void 0===e?void 0:e.focus()}),200):(te(0),ie(0),setTimeout((()=>{var e;return null===(e=V.current[0])||void 0===e?void 0:e.focus()}),200)))}),[ee,oe,K]);const ge=()=>{if($&&"success"===s)return e(wC,{ref:U,onChange:ae,value:R,placeholder:_,"data-testid":"search-input","aria-label":"Enter text to search",onClear:le,variant:f})},me=()=>{if(o&&!N&&q.length>0&&"success"===s)return e(sC,{children:e(uC,{onClick:de,type:"button",$variant:f,children:0===i.size?O:T})})},be=()=>{if(!C&&N&&0===G.length&&"success"===s)return t(r,{children:[t(fC,{"data-testid":"list-no-results",children:[e(hC,{"data-testid":"no-result-icon"}),F]}),I&&e(gC,{"data-testid":"no-result-desc",children:I})]})},ve=()=>{if(w&&"loading"===s)return t(fC,{"data-testid":"list-loading",children:[e(Bf,{$hasChildren:!0}),"Loading..."]})},ye=()=>{if(w&&"fail"===s)return t(fC,{"data-testid":"list-fail",children:[e(hC,{"data-testid":"load-error-icon"}),"Failed to load. ",e(cC,{onClick:se,type:"button",$variant:f,children:"Try again."})]})},we=t=>{if(o)switch(t.checked){case"mixed":return e(zD,{"aria-hidden":!0});case!0:return e(iC,{"aria-hidden":!0});default:return e(aC,{"aria-hidden":!0})}if(!t.hasSubItems)return e(jD,{$hasNestedSiblings:t.hasNestedSiblings||0===t.level,children:t.checked&&e(nC,{"aria-hidden":!0})})},$e=(r,n)=>{const{level:i,visible:a,expanded:l,keyPath:s,checked:d,hasSubItems:f,indexInParent:h,parentSetSize:p}=r,g=r.index,m=oe===n,b=f&&!M;return t(_D,{$visible:a,children:[Q>0&&e(MD,{$level:i}),Q>0&&!f&&o&&e(BD,{}),t(ID,{"aria-checked":d,"aria-selected":!!d,"aria-expanded":f?l:void 0,"aria-level":i+1,"aria-posinset":h+1,"aria-setsize":p,"data-testid":"list-item",onClick:e=>{e.stopPropagation(),b?pe(g,!l,n):((e,t)=>{ie(t),te(e),null==y||y(J[e])})(g,n)},onMouseEnter:()=>((e,t)=>{te(t.index),ie(e)})(n,r),ref:e=>V.current[r.index]=e,role:"treeitem",tabIndex:m?0:-1,$active:m,$toggleable:b,children:[f&&e(AD,{"data-testid":"toggle-category-button",onClick:e=>{e.stopPropagation(),pe(g,!l,n)},$expanded:l,children:e(xe,{})}),we(r),e(_g,{bold:f,searchTerm:N?P:void 0,label:r.item.label,selected:!!d,truncationType:c,maxLines:u})]})]},`[${s.join("---")}]`)},Ce=()=>{var t;const r="test"===process.env.NODE_ENV;return e("div",{"aria-multiselectable":o,id:h,ref:Y,role:"tree",children:e(w$,Object.assign({style:{height:"100%"},customScrollParent:null!==(t=W.current)&&void 0!==t?t:void 0,data:re,itemContent:(e,t)=>$e(t,e)},r?{initialItemCount:re.length}:{}),r?re.length:void 0)})};return e(Q$,Object.assign({"data-testid":"dropdown-container",ref:Nc(W,B),style:z},j(),{$width:p?A:void 0,$variant:f,$customWidth:m,children:t(eC,{"data-testid":"nested-dropdown-list",children:[ge(),me(),be(),ve(),ye(),Ce()]})}))},LD=F(Wh)`
    display: flex;
    align-items: center;

    ${e=>"right"===e.$position?O`
                    flex-direction: row-reverse;
                `:O`
                    flex-direction: row;
                `}
`,PD=F(SC)`
    ${e=>{if(e.$noBorder)return"right"===e.$position?O`
                        padding-right: 0;
                    `:O`
                        padding-left: 0;
                    `}}
`,ND=F.div`
    flex: 0 0 auto;
`,HD=F(Cg)`
    ${e=>e.readOnly?O`
                padding: 0;
            `:e.$noBorder?"right"===e.$position?O`
                        padding-left: 0;
                    `:O`
                        padding-right: 0;
                    `:"right"===e.$position?O`
                    padding-left: ${ya["spacing-16"]};
                `:O`
                    padding-right: ${ya["spacing-16"]};
                `}
`,WD=F.div`
    padding: 10px 0; // TODO: confirm vertical spacing
    display: flex;
    align-items: center;
    padding: 0;
    background: transparent;
    margin-right: ${ya["spacing-12"]};
    color: ${ga.text};
`,YD=F.div`
    width: 1px;
    background: ${ga.border};
    flex-shrink: 0;
    height: 1.25rem;

    ${e=>{if(e.$readOnly)return O`
                display: none;
            `}}

    ${e=>"right"===e.$position?O`
                    margin-left: ${ya["spacing-12"]};
                `:O`
                    margin-right: ${ya["spacing-12"]};
                `}
`,VD=o.forwardRef(((r,n)=>{var{addon:o,error:i,onChange:a,readOnly:s,disabled:c,className:u,onBlur:f,noBorder:h,"data-testid":p,"aria-labelledby":m,"aria-describedby":b,"aria-invalid":v,"aria-label":y}=r,x=st(r,["addon","error","onChange","readOnly","disabled","className","onBlur","noBorder","data-testid","aria-labelledby","aria-describedby","aria-invalid","aria-label"]);const{valueExtractor:w,listExtractor:$,enableSearch:C,hideNoResultsDisplay:D,noResultsDescription:S,searchPlaceholder:k,searchFunction:E,onSearch:F,placeholder:O="Select",displayValueExtractor:T,"data-selector-testid":_,options:I,selectedOption:M,onSelectOption:A,optionsLoadState:B,optionTruncationType:j,onRetry:z,onHideOptions:R,onShowOptions:L,dropdownZIndex:P,dropdownRootNode:N,"aria-label":H}=o.attributes,{position:W}=o,[Y,V]=g(M),[U,K]=g(!1),[q,Z]=g(!1),[G]=g((()=>Hc.generate())),X=`${G}-listbox`,J=`${G}-instruction`,Q=`${G}-combobox-label`,ee=`${G}-textbox-label`,te=l(null),re=l(null);d((()=>{V(M)}),[M]);const ne=()=>{if(Y)return T?T(Y):w?w(Y):Y.toString()},oe=e=>{e?null==L||L():null==R||R()},ie=(e,t)=>{var r;null===(r=re.current)||void 0===r||r.focus(),V(e),K(!1),oe(!1),null==A||A(e,t)},ae=()=>{U&&(K(!1),oe(!1))},le=()=>{K(!0),oe(!0),Z(!0)},se=e=>{K(!1),oe(!1),"click"!==e&&(Z(!1),null==f||f())},de=()=>{var e;null===(e=re.current)||void 0===e||e.focus(),K(!1),oe(!1)},ce=()=>t("div",{children:[e(PD,{ref:re,disabled:c,expanded:U,listboxId:X,popupRole:"listbox",readOnly:s,"aria-labelledby":kf(m,Q),"aria-describedby":kf(b,J),"aria-invalid":v,$noBorder:h,$position:W,children:e(mf,{$disabled:c,children:Y?e(bf,{children:ne()}):e(vf,{children:O})})}),e(Df,{id:J,children:"Press space to open options"})]}),ue=()=>e($C,{listboxId:X,listItems:I,onSelectItem:ie,onDismiss:ae,valueExtractor:w,listExtractor:$,enableSearch:C,hideNoResultsDisplay:D,noResultsDescription:S,searchPlaceholder:k,searchFunction:E,onSearch:F,selectedItems:Y?[Y]:[],itemsLoadState:B,itemTruncationType:j,onRetry:z,matchElementWidth:!0});return e(J$,{children:t(LD,{$focused:q,$disabled:c,$readOnly:s,$error:i,$position:W,ref:te,className:u,"data-testid":p,$noBorder:h,tabIndex:-1,onFocus:()=>{q||U||Z(!0)},onBlur:e=>{q&&!U&&te.current&&!te.current.contains(e.relatedTarget)&&(Z(!1),null==f||f())},children:[e(Df,{"aria-hidden":!0,id:Q,children:H}),e(ND,{"data-testid":_,children:s?Y?e(WD,{"data-testid":"selector-label",tabIndex:0,role:"combobox","aria-haspopup":"listbox","aria-readonly":!0,"aria-expanded":!1,"aria-labelledby":m,"aria-describedby":b,"aria-invalid":v,children:e(bf,{children:ne()})}):null:e($f,{enabled:!s&&!c,isOpen:U,renderElement:ce,renderDropdown:ue,onOpen:le,onClose:se,onDismiss:de,clickToToggle:!0,offset:8,alignment:"right"===W?"right":"left",fitAvailableHeight:!0,customZIndex:P,rootNode:N,positionRef:te})}),e(YD,{$readOnly:s,$position:W}),e(Df,{"aria-hidden":!0,id:ee,children:y}),e(HD,Object.assign({ref:n},x,{$position:W,$noBorder:h,readOnly:s,disabled:c,error:i,onChange:e=>{a&&a(e)},"data-testid":"input",styleType:"no-border","aria-labelledby":kf(m,ee),"aria-describedby":b,"aria-invalid":v}))]})})})),UD=F(Wh)`
    display: flex;
    align-items: center;
    width: 100%;
    padding: 0
        ${e=>e.$readOnly||e.$noBorder?"0":ya["spacing-16"]};
    flex-direction: ${e=>"right"===e.$position?"row-reverse":"row"};
`,KD=F(Wh)`
    display: flex;
    position: relative;
    width: 100%;
    padding: 0
        ${e=>e.$readOnly||e.$noBorder?"0":ya["spacing-16"]};
    flex-direction: ${e=>"right"===e.$position?"row-reverse":"row"};
`,qD=F(Cg)``,ZD=F.div`
    position: relative;
    display: flex;
    align-items: center;

    ${ma["body-baseline-regular"]}
    color: ${ga.text};

    /* SVG Icon */
    svg {
        height: 1em;
        width: 1em;
    }

    ${e=>{if(e.$disabled)return O`
                color: ${ga["text-subtler"]};
            `}}

    ${e=>"right"===e.$position?O`
                    margin-left: ${e.$readOnly?ya["spacing-4"]:ya["spacing-12"]};
                `:O`
                    margin-right: ${e.$readOnly?ya["spacing-4"]:ya["spacing-12"]};
                `};
`,GD=o.forwardRef(((r,n)=>{var{addon:o,error:i,className:a}=r,l=st(r,["addon","error","className"]);const s=()=>e(KD,{$disabled:l.disabled,$error:i,$readOnly:l.readOnly,"data-testid":l["data-testid"],className:a,$noBorder:l.noBorder,children:e(qD,Object.assign({ref:n},l,{"data-testid":"input",styleType:"no-border"}))});if(!o)return s();{const{type:r="label",position:d="left"}=o,{allowClear:c}=l;switch(r){case"list":{const t=o.attributes;return t.options&&t.options.length>0?e(VD,Object.assign({ref:n,addon:o,error:i,className:a,noBorder:l.noBorder},l)):s()}case"custom":{const r=o.attributes;return r.children?t(UD,{$error:i,$disabled:l.disabled,$readOnly:l.readOnly,"data-testid":l["data-testid"],$position:d,className:a,$noBorder:l.noBorder,children:[e(ZD,{"data-testid":"addon",$disabled:l.disabled,$readOnly:l.readOnly,$position:d,children:r.children}),e(qD,Object.assign({ref:n},l,{allowClear:c&&"right"!==d,error:i,"data-testid":"input",styleType:"no-border"}))]}):s()}default:{const r=o.attributes;return r.value?t(UD,{$disabled:l.disabled,$error:i,$readOnly:l.readOnly,"data-testid":l["data-testid"],$position:d,className:a,$noBorder:l.noBorder,children:[e(ZD,{"data-testid":"addon",$disabled:l.disabled,$readOnly:l.readOnly,$position:d,children:r.value}),e(qD,Object.assign({ref:n},l,{allowClear:c&&"right"!==d,error:i,"data-testid":"input",styleType:"no-border"}))]}):s()}}}})),XD=o.forwardRef(((t,r)=>{const{label:n,errorMessage:o,id:i,"data-error-testid":a,"data-testid":l,layoutType:s,mobileCols:d,tabletCols:c,desktopCols:u,xxsCols:f,xsCols:h,smCols:p,mdCols:m,lgCols:b,xlCols:v,xxlCols:y}=t,x=st(t,["label","errorMessage","id","data-error-testid","data-testid","layoutType","mobileCols","tabletCols","desktopCols","xxsCols","xsCols","smCols","mdCols","lgCols","xlCols","xxlCols"]),[w]=g((()=>`form-field-${Hc.generate()}`)),$=null!=i?i:w;return e(cf,{id:$,"data-testid":l,label:n,errorMessage:o,"data-error-testid":a,disabled:x.disabled,layoutType:s,mobileCols:d,tabletCols:c,desktopCols:u,xxsCols:f,xsCols:h,smCols:p,mdCols:m,lgCols:b,xlCols:v,xxlCols:y,children:e(GD,Object.assign({ref:r,id:`${$}-base`,"data-testid":l?`${l}-base`:void 0,"aria-labelledby":`${$}-label`,error:!!o},x))})})),JD=F(GD)`
    padding: 0 0 0 ${({readOnly:e})=>e?"0":ya["spacing-16"]};
    input {
        cursor: ${({readOnly:e,$isDisabled:t})=>e&&!t?"pointer":"initial"};
    }
`,QD=F.div`
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: ${({$isDisabled:e})=>e?"initial":"pointer"};
    color: ${({$isDisabled:e,$inactiveColor:t=ga.icon,$activeColor:r=ga["icon-primary"]})=>e?t:r};
    padding: ${ya["spacing-12"]} ${ya["spacing-16"]};

    svg {
        height: 1em;
        width: 1em;
    }
`,eS=F.div`
    display: flex;
    align-items: center;
    height: 3rem;
`,tS=F(Wa.BodyBL)`
    color: ${ga["text-subtler"]};
`,rS=F(Mf)`
    margin-right: ${ya["spacing-8"]};
    color: ${ga.icon};
`,nS=F.span`
    color: ${ga["text-primary"]};
    font-weight: ${ma.Spec["weight-semibold"]};
`,oS=F.span`
    display: flex;
    align-items: center;
    margin-right: ${ya["spacing-8"]};
`,iS=F(De)`
    color: ${ga["icon-warning"]};
    margin-right: ${ya["spacing-8"]};
    height: 1em;
    width: 1em;
`,aS=F.span`
    color: ${ga["text-warning"]};
`,lS=F(Uh)`
    width: 100%;
    height: 3rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border: none;
    background: transparent;
    cursor: pointer;

    ${ma["body-baseline-regular"]}

    &:hover, &:active, &:focus {
        ${nS} {
            color: ${ga["text-hover"]};
        }
    }
`,sS=F.button`
    ${ma["body-baseline-regular"]}
    color: ${ga.text};
    border: none;
    background: transparent;
    display: flex;
    align-items: center;
    cursor: pointer;
    text-align: left;
    width: 100%;
    justify-content: space-between;
    min-height: 3rem;
`,dS=F.span`
    overflow-wrap: anywhere;
`,cS=F.span`
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${ga["icon-primary"]};
    padding: 0 1rem;
    flex-shrink: 0;

    svg {
        width: ${ma.Spec["body-size-baseline"]};
        height: ${ma.Spec["body-size-baseline"]};
    }
`;var uS,fS,hS={exports:{}};
/**
 * @license
 * Lodash <https://lodash.com/>
 * Copyright OpenJS Foundation and other contributors <https://openjsf.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */uS=hS,fS=hS.exports,function(){var e,t="Expected a function",r="__lodash_hash_undefined__",n="__lodash_placeholder__",o=16,i=32,a=64,l=128,s=256,d=1/0,c=9007199254740991,u=NaN,f=4294967295,h=[["ary",l],["bind",1],["bindKey",2],["curry",8],["curryRight",o],["flip",512],["partial",i],["partialRight",a],["rearg",s]],p="[object Arguments]",g="[object Array]",m="[object Boolean]",b="[object Date]",v="[object Error]",y="[object Function]",x="[object GeneratorFunction]",w="[object Map]",$="[object Number]",C="[object Object]",D="[object Promise]",S="[object RegExp]",k="[object Set]",E="[object String]",F="[object Symbol]",O="[object WeakMap]",T="[object ArrayBuffer]",_="[object DataView]",I="[object Float32Array]",M="[object Float64Array]",A="[object Int8Array]",B="[object Int16Array]",j="[object Int32Array]",z="[object Uint8Array]",R="[object Uint8ClampedArray]",L="[object Uint16Array]",P="[object Uint32Array]",N=/\b__p \+= '';/g,H=/\b(__p \+=) '' \+/g,W=/(__e\(.*?\)|\b__t\)) \+\n'';/g,Y=/&(?:amp|lt|gt|quot|#39);/g,V=/[&<>"']/g,U=RegExp(Y.source),K=RegExp(V.source),q=/<%-([\s\S]+?)%>/g,Z=/<%([\s\S]+?)%>/g,G=/<%=([\s\S]+?)%>/g,X=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,J=/^\w*$/,Q=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,ee=/[\\^$.*+?()[\]{}|]/g,te=RegExp(ee.source),re=/^\s+/,ne=/\s/,oe=/\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/,ie=/\{\n\/\* \[wrapped with (.+)\] \*/,ae=/,? & /,le=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g,se=/[()=,{}\[\]\/\s]/,de=/\\(\\)?/g,ce=/\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g,ue=/\w*$/,fe=/^[-+]0x[0-9a-f]+$/i,he=/^0b[01]+$/i,pe=/^\[object .+?Constructor\]$/,ge=/^0o[0-7]+$/i,me=/^(?:0|[1-9]\d*)$/,be=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,ve=/($^)/,ye=/['\n\r\u2028\u2029\\]/g,xe="\\ud800-\\udfff",we="\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff",$e="\\u2700-\\u27bf",Ce="a-z\\xdf-\\xf6\\xf8-\\xff",De="A-Z\\xc0-\\xd6\\xd8-\\xde",Se="\\ufe0e\\ufe0f",ke="\\xac\\xb1\\xd7\\xf7\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf\\u2000-\\u206f \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",Ee="['’]",Fe="["+xe+"]",Oe="["+ke+"]",Te="["+we+"]",_e="\\d+",Ie="["+$e+"]",Me="["+Ce+"]",Ae="[^"+xe+ke+_e+$e+Ce+De+"]",je="\\ud83c[\\udffb-\\udfff]",ze="[^"+xe+"]",Re="(?:\\ud83c[\\udde6-\\uddff]){2}",Le="[\\ud800-\\udbff][\\udc00-\\udfff]",Pe="["+De+"]",Ne="\\u200d",He="(?:"+Me+"|"+Ae+")",We="(?:"+Pe+"|"+Ae+")",Ye="(?:['’](?:d|ll|m|re|s|t|ve))?",Ve="(?:['’](?:D|LL|M|RE|S|T|VE))?",Ue="(?:"+Te+"|"+je+")?",Ke="["+Se+"]?",qe=Ke+Ue+"(?:"+Ne+"(?:"+[ze,Re,Le].join("|")+")"+Ke+Ue+")*",Ze="(?:"+[Ie,Re,Le].join("|")+")"+qe,Ge="(?:"+[ze+Te+"?",Te,Re,Le,Fe].join("|")+")",Xe=RegExp(Ee,"g"),Je=RegExp(Te,"g"),Qe=RegExp(je+"(?="+je+")|"+Ge+qe,"g"),et=RegExp([Pe+"?"+Me+"+"+Ye+"(?="+[Oe,Pe,"$"].join("|")+")",We+"+"+Ve+"(?="+[Oe,Pe+He,"$"].join("|")+")",Pe+"?"+He+"+"+Ye,Pe+"+"+Ve,"\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])","\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",_e,Ze].join("|"),"g"),tt=RegExp("["+Ne+xe+we+Se+"]"),rt=/[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/,nt=["Array","Buffer","DataView","Date","Error","Float32Array","Float64Array","Function","Int8Array","Int16Array","Int32Array","Map","Math","Object","Promise","RegExp","Set","String","Symbol","TypeError","Uint8Array","Uint8ClampedArray","Uint16Array","Uint32Array","WeakMap","_","clearTimeout","isFinite","parseInt","setTimeout"],ot=-1,it={};it[I]=it[M]=it[A]=it[B]=it[j]=it[z]=it[R]=it[L]=it[P]=!0,it[p]=it[g]=it[T]=it[m]=it[_]=it[b]=it[v]=it[y]=it[w]=it[$]=it[C]=it[S]=it[k]=it[E]=it[O]=!1;var at={};at[p]=at[g]=at[T]=at[_]=at[m]=at[b]=at[I]=at[M]=at[A]=at[B]=at[j]=at[w]=at[$]=at[C]=at[S]=at[k]=at[E]=at[F]=at[z]=at[R]=at[L]=at[P]=!0,at[v]=at[y]=at[O]=!1;var lt={"\\":"\\","'":"'","\n":"n","\r":"r","\u2028":"u2028","\u2029":"u2029"},st=parseFloat,dt=parseInt,ct="object"==typeof Be&&Be&&Be.Object===Object&&Be,ut="object"==typeof self&&self&&self.Object===Object&&self,ft=ct||ut||Function("return this")(),ht=fS&&!fS.nodeType&&fS,pt=ht&&uS&&!uS.nodeType&&uS,gt=pt&&pt.exports===ht,mt=gt&&ct.process,bt=function(){try{var e=pt&&pt.require&&pt.require("util").types;return e||mt&&mt.binding&&mt.binding("util")}catch(e){}}(),vt=bt&&bt.isArrayBuffer,yt=bt&&bt.isDate,xt=bt&&bt.isMap,wt=bt&&bt.isRegExp,$t=bt&&bt.isSet,Ct=bt&&bt.isTypedArray;function Dt(e,t,r){switch(r.length){case 0:return e.call(t);case 1:return e.call(t,r[0]);case 2:return e.call(t,r[0],r[1]);case 3:return e.call(t,r[0],r[1],r[2])}return e.apply(t,r)}function St(e,t,r,n){for(var o=-1,i=null==e?0:e.length;++o<i;){var a=e[o];t(n,a,r(a),e)}return n}function kt(e,t){for(var r=-1,n=null==e?0:e.length;++r<n&&!1!==t(e[r],r,e););return e}function Et(e,t){for(var r=null==e?0:e.length;r--&&!1!==t(e[r],r,e););return e}function Ft(e,t){for(var r=-1,n=null==e?0:e.length;++r<n;)if(!t(e[r],r,e))return!1;return!0}function Ot(e,t){for(var r=-1,n=null==e?0:e.length,o=0,i=[];++r<n;){var a=e[r];t(a,r,e)&&(i[o++]=a)}return i}function Tt(e,t){return!(null==e||!e.length)&&Pt(e,t,0)>-1}function _t(e,t,r){for(var n=-1,o=null==e?0:e.length;++n<o;)if(r(t,e[n]))return!0;return!1}function It(e,t){for(var r=-1,n=null==e?0:e.length,o=Array(n);++r<n;)o[r]=t(e[r],r,e);return o}function Mt(e,t){for(var r=-1,n=t.length,o=e.length;++r<n;)e[o+r]=t[r];return e}function At(e,t,r,n){var o=-1,i=null==e?0:e.length;for(n&&i&&(r=e[++o]);++o<i;)r=t(r,e[o],o,e);return r}function Bt(e,t,r,n){var o=null==e?0:e.length;for(n&&o&&(r=e[--o]);o--;)r=t(r,e[o],o,e);return r}function jt(e,t){for(var r=-1,n=null==e?0:e.length;++r<n;)if(t(e[r],r,e))return!0;return!1}var zt=Yt("length");function Rt(e,t,r){var n;return r(e,(function(e,r,o){if(t(e,r,o))return n=r,!1})),n}function Lt(e,t,r,n){for(var o=e.length,i=r+(n?1:-1);n?i--:++i<o;)if(t(e[i],i,e))return i;return-1}function Pt(e,t,r){return t==t?function(e,t,r){for(var n=r-1,o=e.length;++n<o;)if(e[n]===t)return n;return-1}(e,t,r):Lt(e,Ht,r)}function Nt(e,t,r,n){for(var o=r-1,i=e.length;++o<i;)if(n(e[o],t))return o;return-1}function Ht(e){return e!=e}function Wt(e,t){var r=null==e?0:e.length;return r?Kt(e,t)/r:u}function Yt(t){return function(r){return null==r?e:r[t]}}function Vt(t){return function(r){return null==t?e:t[r]}}function Ut(e,t,r,n,o){return o(e,(function(e,o,i){r=n?(n=!1,e):t(r,e,o,i)})),r}function Kt(t,r){for(var n,o=-1,i=t.length;++o<i;){var a=r(t[o]);a!==e&&(n=n===e?a:n+a)}return n}function qt(e,t){for(var r=-1,n=Array(e);++r<e;)n[r]=t(r);return n}function Zt(e){return e?e.slice(0,fr(e)+1).replace(re,""):e}function Gt(e){return function(t){return e(t)}}function Xt(e,t){return It(t,(function(t){return e[t]}))}function Jt(e,t){return e.has(t)}function Qt(e,t){for(var r=-1,n=e.length;++r<n&&Pt(t,e[r],0)>-1;);return r}function er(e,t){for(var r=e.length;r--&&Pt(t,e[r],0)>-1;);return r}var tr=Vt({"À":"A","Á":"A","Â":"A","Ã":"A","Ä":"A","Å":"A","à":"a","á":"a","â":"a","ã":"a","ä":"a","å":"a","Ç":"C","ç":"c","Ð":"D","ð":"d","È":"E","É":"E","Ê":"E","Ë":"E","è":"e","é":"e","ê":"e","ë":"e","Ì":"I","Í":"I","Î":"I","Ï":"I","ì":"i","í":"i","î":"i","ï":"i","Ñ":"N","ñ":"n","Ò":"O","Ó":"O","Ô":"O","Õ":"O","Ö":"O","Ø":"O","ò":"o","ó":"o","ô":"o","õ":"o","ö":"o","ø":"o","Ù":"U","Ú":"U","Û":"U","Ü":"U","ù":"u","ú":"u","û":"u","ü":"u","Ý":"Y","ý":"y","ÿ":"y","Æ":"Ae","æ":"ae","Þ":"Th","þ":"th","ß":"ss","Ā":"A","Ă":"A","Ą":"A","ā":"a","ă":"a","ą":"a","Ć":"C","Ĉ":"C","Ċ":"C","Č":"C","ć":"c","ĉ":"c","ċ":"c","č":"c","Ď":"D","Đ":"D","ď":"d","đ":"d","Ē":"E","Ĕ":"E","Ė":"E","Ę":"E","Ě":"E","ē":"e","ĕ":"e","ė":"e","ę":"e","ě":"e","Ĝ":"G","Ğ":"G","Ġ":"G","Ģ":"G","ĝ":"g","ğ":"g","ġ":"g","ģ":"g","Ĥ":"H","Ħ":"H","ĥ":"h","ħ":"h","Ĩ":"I","Ī":"I","Ĭ":"I","Į":"I","İ":"I","ĩ":"i","ī":"i","ĭ":"i","į":"i","ı":"i","Ĵ":"J","ĵ":"j","Ķ":"K","ķ":"k","ĸ":"k","Ĺ":"L","Ļ":"L","Ľ":"L","Ŀ":"L","Ł":"L","ĺ":"l","ļ":"l","ľ":"l","ŀ":"l","ł":"l","Ń":"N","Ņ":"N","Ň":"N","Ŋ":"N","ń":"n","ņ":"n","ň":"n","ŋ":"n","Ō":"O","Ŏ":"O","Ő":"O","ō":"o","ŏ":"o","ő":"o","Ŕ":"R","Ŗ":"R","Ř":"R","ŕ":"r","ŗ":"r","ř":"r","Ś":"S","Ŝ":"S","Ş":"S","Š":"S","ś":"s","ŝ":"s","ş":"s","š":"s","Ţ":"T","Ť":"T","Ŧ":"T","ţ":"t","ť":"t","ŧ":"t","Ũ":"U","Ū":"U","Ŭ":"U","Ů":"U","Ű":"U","Ų":"U","ũ":"u","ū":"u","ŭ":"u","ů":"u","ű":"u","ų":"u","Ŵ":"W","ŵ":"w","Ŷ":"Y","ŷ":"y","Ÿ":"Y","Ź":"Z","Ż":"Z","Ž":"Z","ź":"z","ż":"z","ž":"z","Ĳ":"IJ","ĳ":"ij","Œ":"Oe","œ":"oe","ŉ":"'n","ſ":"s"}),rr=Vt({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"});function nr(e){return"\\"+lt[e]}function or(e){return tt.test(e)}function ir(e){var t=-1,r=Array(e.size);return e.forEach((function(e,n){r[++t]=[n,e]})),r}function ar(e,t){return function(r){return e(t(r))}}function lr(e,t){for(var r=-1,o=e.length,i=0,a=[];++r<o;){var l=e[r];l!==t&&l!==n||(e[r]=n,a[i++]=r)}return a}function sr(e){var t=-1,r=Array(e.size);return e.forEach((function(e){r[++t]=e})),r}function dr(e){var t=-1,r=Array(e.size);return e.forEach((function(e){r[++t]=[e,e]})),r}function cr(e){return or(e)?function(e){for(var t=Qe.lastIndex=0;Qe.test(e);)++t;return t}(e):zt(e)}function ur(e){return or(e)?function(e){return e.match(Qe)||[]}(e):function(e){return e.split("")}(e)}function fr(e){for(var t=e.length;t--&&ne.test(e.charAt(t)););return t}var hr=Vt({"&amp;":"&","&lt;":"<","&gt;":">","&quot;":'"',"&#39;":"'"}),pr=function ne(xe){var we=(xe=null==xe?ft:pr.defaults(ft.Object(),xe,pr.pick(ft,nt))).Array,$e=xe.Date,Ce=xe.Error,De=xe.Function,Se=xe.Math,ke=xe.Object,Ee=xe.RegExp,Fe=xe.String,Oe=xe.TypeError,Te=we.prototype,_e=De.prototype,Ie=ke.prototype,Me=xe["__core-js_shared__"],Ae=_e.toString,Be=Ie.hasOwnProperty,je=0,ze=function(){var e=/[^.]+$/.exec(Me&&Me.keys&&Me.keys.IE_PROTO||"");return e?"Symbol(src)_1."+e:""}(),Re=Ie.toString,Le=Ae.call(ke),Pe=ft._,Ne=Ee("^"+Ae.call(Be).replace(ee,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),He=gt?xe.Buffer:e,We=xe.Symbol,Ye=xe.Uint8Array,Ve=He?He.allocUnsafe:e,Ue=ar(ke.getPrototypeOf,ke),Ke=ke.create,qe=Ie.propertyIsEnumerable,Ze=Te.splice,Ge=We?We.isConcatSpreadable:e,Qe=We?We.iterator:e,tt=We?We.toStringTag:e,lt=function(){try{var e=fi(ke,"defineProperty");return e({},"",{}),e}catch(e){}}(),ct=xe.clearTimeout!==ft.clearTimeout&&xe.clearTimeout,ut=$e&&$e.now!==ft.Date.now&&$e.now,ht=xe.setTimeout!==ft.setTimeout&&xe.setTimeout,pt=Se.ceil,mt=Se.floor,bt=ke.getOwnPropertySymbols,zt=He?He.isBuffer:e,Vt=xe.isFinite,gr=Te.join,mr=ar(ke.keys,ke),br=Se.max,vr=Se.min,yr=$e.now,xr=xe.parseInt,wr=Se.random,$r=Te.reverse,Cr=fi(xe,"DataView"),Dr=fi(xe,"Map"),Sr=fi(xe,"Promise"),kr=fi(xe,"Set"),Er=fi(xe,"WeakMap"),Fr=fi(ke,"create"),Or=Er&&new Er,Tr={},_r=Ri(Cr),Ir=Ri(Dr),Mr=Ri(Sr),Ar=Ri(kr),Br=Ri(Er),jr=We?We.prototype:e,zr=jr?jr.valueOf:e,Rr=jr?jr.toString:e;function Lr(e){if(tl(e)&&!Ya(e)&&!(e instanceof Wr)){if(e instanceof Hr)return e;if(Be.call(e,"__wrapped__"))return Li(e)}return new Hr(e)}var Pr=function(){function t(){}return function(r){if(!el(r))return{};if(Ke)return Ke(r);t.prototype=r;var n=new t;return t.prototype=e,n}}();function Nr(){}function Hr(t,r){this.__wrapped__=t,this.__actions__=[],this.__chain__=!!r,this.__index__=0,this.__values__=e}function Wr(e){this.__wrapped__=e,this.__actions__=[],this.__dir__=1,this.__filtered__=!1,this.__iteratees__=[],this.__takeCount__=f,this.__views__=[]}function Yr(e){var t=-1,r=null==e?0:e.length;for(this.clear();++t<r;){var n=e[t];this.set(n[0],n[1])}}function Vr(e){var t=-1,r=null==e?0:e.length;for(this.clear();++t<r;){var n=e[t];this.set(n[0],n[1])}}function Ur(e){var t=-1,r=null==e?0:e.length;for(this.clear();++t<r;){var n=e[t];this.set(n[0],n[1])}}function Kr(e){var t=-1,r=null==e?0:e.length;for(this.__data__=new Ur;++t<r;)this.add(e[t])}function qr(e){var t=this.__data__=new Vr(e);this.size=t.size}function Zr(e,t){var r=Ya(e),n=!r&&Wa(e),o=!r&&!n&&qa(e),i=!r&&!n&&!o&&dl(e),a=r||n||o||i,l=a?qt(e.length,Fe):[],s=l.length;for(var d in e)!t&&!Be.call(e,d)||a&&("length"==d||o&&("offset"==d||"parent"==d)||i&&("buffer"==d||"byteLength"==d||"byteOffset"==d)||yi(d,s))||l.push(d);return l}function Gr(t){var r=t.length;return r?t[qn(0,r-1)]:e}function Xr(e,t){return Bi(To(e),ln(t,0,e.length))}function Jr(e){return Bi(To(e))}function Qr(t,r,n){(n!==e&&!Pa(t[r],n)||n===e&&!(r in t))&&on(t,r,n)}function en(t,r,n){var o=t[r];Be.call(t,r)&&Pa(o,n)&&(n!==e||r in t)||on(t,r,n)}function tn(e,t){for(var r=e.length;r--;)if(Pa(e[r][0],t))return r;return-1}function rn(e,t,r,n){return fn(e,(function(e,o,i){t(n,e,r(e),i)})),n}function nn(e,t){return e&&_o(t,_l(t),e)}function on(e,t,r){"__proto__"==t&&lt?lt(e,t,{configurable:!0,enumerable:!0,value:r,writable:!0}):e[t]=r}function an(t,r){for(var n=-1,o=r.length,i=we(o),a=null==t;++n<o;)i[n]=a?e:kl(t,r[n]);return i}function ln(t,r,n){return t==t&&(n!==e&&(t=t<=n?t:n),r!==e&&(t=t>=r?t:r)),t}function sn(t,r,n,o,i,a){var l,s=1&r,d=2&r,c=4&r;if(n&&(l=i?n(t,o,i,a):n(t)),l!==e)return l;if(!el(t))return t;var u=Ya(t);if(u){if(l=function(e){var t=e.length,r=new e.constructor(t);return t&&"string"==typeof e[0]&&Be.call(e,"index")&&(r.index=e.index,r.input=e.input),r}(t),!s)return To(t,l)}else{var f=gi(t),h=f==y||f==x;if(qa(t))return Do(t,s);if(f==C||f==p||h&&!i){if(l=d||h?{}:bi(t),!s)return d?function(e,t){return _o(e,pi(e),t)}(t,function(e,t){return e&&_o(t,Il(t),e)}(l,t)):function(e,t){return _o(e,hi(e),t)}(t,nn(l,t))}else{if(!at[f])return i?t:{};l=function(e,t,r){var n,o=e.constructor;switch(t){case T:return So(e);case m:case b:return new o(+e);case _:return function(e,t){var r=t?So(e.buffer):e.buffer;return new e.constructor(r,e.byteOffset,e.byteLength)}(e,r);case I:case M:case A:case B:case j:case z:case R:case L:case P:return ko(e,r);case w:return new o;case $:case E:return new o(e);case S:return function(e){var t=new e.constructor(e.source,ue.exec(e));return t.lastIndex=e.lastIndex,t}(e);case k:return new o;case F:return n=e,zr?ke(zr.call(n)):{}}}(t,f,s)}}a||(a=new qr);var g=a.get(t);if(g)return g;a.set(t,l),al(t)?t.forEach((function(e){l.add(sn(e,r,n,e,t,a))})):rl(t)&&t.forEach((function(e,o){l.set(o,sn(e,r,n,o,t,a))}));var v=u?e:(c?d?ii:oi:d?Il:_l)(t);return kt(v||t,(function(e,o){v&&(e=t[o=e]),en(l,o,sn(e,r,n,o,t,a))})),l}function dn(t,r,n){var o=n.length;if(null==t)return!o;for(t=ke(t);o--;){var i=n[o],a=r[i],l=t[i];if(l===e&&!(i in t)||!a(l))return!1}return!0}function cn(r,n,o){if("function"!=typeof r)throw new Oe(t);return _i((function(){r.apply(e,o)}),n)}function un(e,t,r,n){var o=-1,i=Tt,a=!0,l=e.length,s=[],d=t.length;if(!l)return s;r&&(t=It(t,Gt(r))),n?(i=_t,a=!1):t.length>=200&&(i=Jt,a=!1,t=new Kr(t));e:for(;++o<l;){var c=e[o],u=null==r?c:r(c);if(c=n||0!==c?c:0,a&&u==u){for(var f=d;f--;)if(t[f]===u)continue e;s.push(c)}else i(t,u,n)||s.push(c)}return s}Lr.templateSettings={escape:q,evaluate:Z,interpolate:G,variable:"",imports:{_:Lr}},Lr.prototype=Nr.prototype,Lr.prototype.constructor=Lr,Hr.prototype=Pr(Nr.prototype),Hr.prototype.constructor=Hr,Wr.prototype=Pr(Nr.prototype),Wr.prototype.constructor=Wr,Yr.prototype.clear=function(){this.__data__=Fr?Fr(null):{},this.size=0},Yr.prototype.delete=function(e){var t=this.has(e)&&delete this.__data__[e];return this.size-=t?1:0,t},Yr.prototype.get=function(t){var n=this.__data__;if(Fr){var o=n[t];return o===r?e:o}return Be.call(n,t)?n[t]:e},Yr.prototype.has=function(t){var r=this.__data__;return Fr?r[t]!==e:Be.call(r,t)},Yr.prototype.set=function(t,n){var o=this.__data__;return this.size+=this.has(t)?0:1,o[t]=Fr&&n===e?r:n,this},Vr.prototype.clear=function(){this.__data__=[],this.size=0},Vr.prototype.delete=function(e){var t=this.__data__,r=tn(t,e);return!(r<0||(r==t.length-1?t.pop():Ze.call(t,r,1),--this.size,0))},Vr.prototype.get=function(t){var r=this.__data__,n=tn(r,t);return n<0?e:r[n][1]},Vr.prototype.has=function(e){return tn(this.__data__,e)>-1},Vr.prototype.set=function(e,t){var r=this.__data__,n=tn(r,e);return n<0?(++this.size,r.push([e,t])):r[n][1]=t,this},Ur.prototype.clear=function(){this.size=0,this.__data__={hash:new Yr,map:new(Dr||Vr),string:new Yr}},Ur.prototype.delete=function(e){var t=ci(this,e).delete(e);return this.size-=t?1:0,t},Ur.prototype.get=function(e){return ci(this,e).get(e)},Ur.prototype.has=function(e){return ci(this,e).has(e)},Ur.prototype.set=function(e,t){var r=ci(this,e),n=r.size;return r.set(e,t),this.size+=r.size==n?0:1,this},Kr.prototype.add=Kr.prototype.push=function(e){return this.__data__.set(e,r),this},Kr.prototype.has=function(e){return this.__data__.has(e)},qr.prototype.clear=function(){this.__data__=new Vr,this.size=0},qr.prototype.delete=function(e){var t=this.__data__,r=t.delete(e);return this.size=t.size,r},qr.prototype.get=function(e){return this.__data__.get(e)},qr.prototype.has=function(e){return this.__data__.has(e)},qr.prototype.set=function(e,t){var r=this.__data__;if(r instanceof Vr){var n=r.__data__;if(!Dr||n.length<199)return n.push([e,t]),this.size=++r.size,this;r=this.__data__=new Ur(n)}return r.set(e,t),this.size=r.size,this};var fn=Ao(xn),hn=Ao(wn,!0);function pn(e,t){var r=!0;return fn(e,(function(e,n,o){return r=!!t(e,n,o)})),r}function gn(t,r,n){for(var o=-1,i=t.length;++o<i;){var a=t[o],l=r(a);if(null!=l&&(s===e?l==l&&!sl(l):n(l,s)))var s=l,d=a}return d}function mn(e,t){var r=[];return fn(e,(function(e,n,o){t(e,n,o)&&r.push(e)})),r}function bn(e,t,r,n,o){var i=-1,a=e.length;for(r||(r=vi),o||(o=[]);++i<a;){var l=e[i];t>0&&r(l)?t>1?bn(l,t-1,r,n,o):Mt(o,l):n||(o[o.length]=l)}return o}var vn=Bo(),yn=Bo(!0);function xn(e,t){return e&&vn(e,t,_l)}function wn(e,t){return e&&yn(e,t,_l)}function $n(e,t){return Ot(t,(function(t){return Xa(e[t])}))}function Cn(t,r){for(var n=0,o=(r=xo(r,t)).length;null!=t&&n<o;)t=t[zi(r[n++])];return n&&n==o?t:e}function Dn(e,t,r){var n=t(e);return Ya(e)?n:Mt(n,r(e))}function Sn(t){return null==t?t===e?"[object Undefined]":"[object Null]":tt&&tt in ke(t)?function(t){var r=Be.call(t,tt),n=t[tt];try{t[tt]=e;var o=!0}catch(e){}var i=Re.call(t);return o&&(r?t[tt]=n:delete t[tt]),i}(t):function(e){return Re.call(e)}(t)}function kn(e,t){return e>t}function En(e,t){return null!=e&&Be.call(e,t)}function Fn(e,t){return null!=e&&t in ke(e)}function On(t,r,n){for(var o=n?_t:Tt,i=t[0].length,a=t.length,l=a,s=we(a),d=1/0,c=[];l--;){var u=t[l];l&&r&&(u=It(u,Gt(r))),d=vr(u.length,d),s[l]=!n&&(r||i>=120&&u.length>=120)?new Kr(l&&u):e}u=t[0];var f=-1,h=s[0];e:for(;++f<i&&c.length<d;){var p=u[f],g=r?r(p):p;if(p=n||0!==p?p:0,!(h?Jt(h,g):o(c,g,n))){for(l=a;--l;){var m=s[l];if(!(m?Jt(m,g):o(t[l],g,n)))continue e}h&&h.push(g),c.push(p)}}return c}function Tn(t,r,n){var o=null==(t=Fi(t,r=xo(r,t)))?t:t[zi(Gi(r))];return null==o?e:Dt(o,t,n)}function _n(e){return tl(e)&&Sn(e)==p}function In(t,r,n,o,i){return t===r||(null==t||null==r||!tl(t)&&!tl(r)?t!=t&&r!=r:function(t,r,n,o,i,a){var l=Ya(t),s=Ya(r),d=l?g:gi(t),c=s?g:gi(r),u=(d=d==p?C:d)==C,f=(c=c==p?C:c)==C,h=d==c;if(h&&qa(t)){if(!qa(r))return!1;l=!0,u=!1}if(h&&!u)return a||(a=new qr),l||dl(t)?ri(t,r,n,o,i,a):function(e,t,r,n,o,i,a){switch(r){case _:if(e.byteLength!=t.byteLength||e.byteOffset!=t.byteOffset)return!1;e=e.buffer,t=t.buffer;case T:return!(e.byteLength!=t.byteLength||!i(new Ye(e),new Ye(t)));case m:case b:case $:return Pa(+e,+t);case v:return e.name==t.name&&e.message==t.message;case S:case E:return e==t+"";case w:var l=ir;case k:var s=1&n;if(l||(l=sr),e.size!=t.size&&!s)return!1;var d=a.get(e);if(d)return d==t;n|=2,a.set(e,t);var c=ri(l(e),l(t),n,o,i,a);return a.delete(e),c;case F:if(zr)return zr.call(e)==zr.call(t)}return!1}(t,r,d,n,o,i,a);if(!(1&n)){var y=u&&Be.call(t,"__wrapped__"),x=f&&Be.call(r,"__wrapped__");if(y||x){var D=y?t.value():t,O=x?r.value():r;return a||(a=new qr),i(D,O,n,o,a)}}return!!h&&(a||(a=new qr),function(t,r,n,o,i,a){var l=1&n,s=oi(t),d=s.length,c=oi(r),u=c.length;if(d!=u&&!l)return!1;for(var f=d;f--;){var h=s[f];if(!(l?h in r:Be.call(r,h)))return!1}var p=a.get(t),g=a.get(r);if(p&&g)return p==r&&g==t;var m=!0;a.set(t,r),a.set(r,t);for(var b=l;++f<d;){var v=t[h=s[f]],y=r[h];if(o)var x=l?o(y,v,h,r,t,a):o(v,y,h,t,r,a);if(!(x===e?v===y||i(v,y,n,o,a):x)){m=!1;break}b||(b="constructor"==h)}if(m&&!b){var w=t.constructor,$=r.constructor;w==$||!("constructor"in t)||!("constructor"in r)||"function"==typeof w&&w instanceof w&&"function"==typeof $&&$ instanceof $||(m=!1)}return a.delete(t),a.delete(r),m}(t,r,n,o,i,a))}(t,r,n,o,In,i))}function Mn(t,r,n,o){var i=n.length,a=i,l=!o;if(null==t)return!a;for(t=ke(t);i--;){var s=n[i];if(l&&s[2]?s[1]!==t[s[0]]:!(s[0]in t))return!1}for(;++i<a;){var d=(s=n[i])[0],c=t[d],u=s[1];if(l&&s[2]){if(c===e&&!(d in t))return!1}else{var f=new qr;if(o)var h=o(c,u,d,t,r,f);if(!(h===e?In(u,c,3,o,f):h))return!1}}return!0}function An(e){return!(!el(e)||(t=e,ze&&ze in t))&&(Xa(e)?Ne:pe).test(Ri(e));var t}function Bn(e){return"function"==typeof e?e:null==e?ns:"object"==typeof e?Ya(e)?Nn(e[0],e[1]):Pn(e):fs(e)}function jn(e){if(!Di(e))return mr(e);var t=[];for(var r in ke(e))Be.call(e,r)&&"constructor"!=r&&t.push(r);return t}function zn(e){if(!el(e))return function(e){var t=[];if(null!=e)for(var r in ke(e))t.push(r);return t}(e);var t=Di(e),r=[];for(var n in e)("constructor"!=n||!t&&Be.call(e,n))&&r.push(n);return r}function Rn(e,t){return e<t}function Ln(e,t){var r=-1,n=Ua(e)?we(e.length):[];return fn(e,(function(e,o,i){n[++r]=t(e,o,i)})),n}function Pn(e){var t=ui(e);return 1==t.length&&t[0][2]?ki(t[0][0],t[0][1]):function(r){return r===e||Mn(r,e,t)}}function Nn(t,r){return wi(t)&&Si(r)?ki(zi(t),r):function(n){var o=kl(n,t);return o===e&&o===r?El(n,t):In(r,o,3)}}function Hn(t,r,n,o,i){t!==r&&vn(r,(function(a,l){if(i||(i=new qr),el(a))!function(t,r,n,o,i,a,l){var s=Oi(t,n),d=Oi(r,n),c=l.get(d);if(c)Qr(t,n,c);else{var u=a?a(s,d,n+"",t,r,l):e,f=u===e;if(f){var h=Ya(d),p=!h&&qa(d),g=!h&&!p&&dl(d);u=d,h||p||g?Ya(s)?u=s:Ka(s)?u=To(s):p?(f=!1,u=Do(d,!0)):g?(f=!1,u=ko(d,!0)):u=[]:ol(d)||Wa(d)?(u=s,Wa(s)?u=bl(s):el(s)&&!Xa(s)||(u=bi(d))):f=!1}f&&(l.set(d,u),i(u,d,o,a,l),l.delete(d)),Qr(t,n,u)}}(t,r,l,n,Hn,o,i);else{var s=o?o(Oi(t,l),a,l+"",t,r,i):e;s===e&&(s=a),Qr(t,l,s)}}),Il)}function Wn(t,r){var n=t.length;if(n)return yi(r+=r<0?n:0,n)?t[r]:e}function Yn(e,t,r){t=t.length?It(t,(function(e){return Ya(e)?function(t){return Cn(t,1===e.length?e[0]:e)}:e})):[ns];var n=-1;t=It(t,Gt(di()));var o=Ln(e,(function(e,r,o){var i=It(t,(function(t){return t(e)}));return{criteria:i,index:++n,value:e}}));return function(e,t){var r=e.length;for(e.sort(t);r--;)e[r]=e[r].value;return e}(o,(function(e,t){return function(e,t,r){for(var n=-1,o=e.criteria,i=t.criteria,a=o.length,l=r.length;++n<a;){var s=Eo(o[n],i[n]);if(s)return n>=l?s:s*("desc"==r[n]?-1:1)}return e.index-t.index}(e,t,r)}))}function Vn(e,t,r){for(var n=-1,o=t.length,i={};++n<o;){var a=t[n],l=Cn(e,a);r(l,a)&&Qn(i,xo(a,e),l)}return i}function Un(e,t,r,n){var o=n?Nt:Pt,i=-1,a=t.length,l=e;for(e===t&&(t=To(t)),r&&(l=It(e,Gt(r)));++i<a;)for(var s=0,d=t[i],c=r?r(d):d;(s=o(l,c,s,n))>-1;)l!==e&&Ze.call(l,s,1),Ze.call(e,s,1);return e}function Kn(e,t){for(var r=e?t.length:0,n=r-1;r--;){var o=t[r];if(r==n||o!==i){var i=o;yi(o)?Ze.call(e,o,1):fo(e,o)}}return e}function qn(e,t){return e+mt(wr()*(t-e+1))}function Zn(e,t){var r="";if(!e||t<1||t>c)return r;do{t%2&&(r+=e),(t=mt(t/2))&&(e+=e)}while(t);return r}function Gn(e,t){return Ii(Ei(e,t,ns),e+"")}function Xn(e){return Gr(Pl(e))}function Jn(e,t){var r=Pl(e);return Bi(r,ln(t,0,r.length))}function Qn(t,r,n,o){if(!el(t))return t;for(var i=-1,a=(r=xo(r,t)).length,l=a-1,s=t;null!=s&&++i<a;){var d=zi(r[i]),c=n;if("__proto__"===d||"constructor"===d||"prototype"===d)return t;if(i!=l){var u=s[d];(c=o?o(u,d,s):e)===e&&(c=el(u)?u:yi(r[i+1])?[]:{})}en(s,d,c),s=s[d]}return t}var eo=Or?function(e,t){return Or.set(e,t),e}:ns,to=lt?function(e,t){return lt(e,"toString",{configurable:!0,enumerable:!1,value:es(t),writable:!0})}:ns;function ro(e){return Bi(Pl(e))}function no(e,t,r){var n=-1,o=e.length;t<0&&(t=-t>o?0:o+t),(r=r>o?o:r)<0&&(r+=o),o=t>r?0:r-t>>>0,t>>>=0;for(var i=we(o);++n<o;)i[n]=e[n+t];return i}function oo(e,t){var r;return fn(e,(function(e,n,o){return!(r=t(e,n,o))})),!!r}function io(e,t,r){var n=0,o=null==e?n:e.length;if("number"==typeof t&&t==t&&o<=2147483647){for(;n<o;){var i=n+o>>>1,a=e[i];null!==a&&!sl(a)&&(r?a<=t:a<t)?n=i+1:o=i}return o}return ao(e,t,ns,r)}function ao(t,r,n,o){var i=0,a=null==t?0:t.length;if(0===a)return 0;for(var l=(r=n(r))!=r,s=null===r,d=sl(r),c=r===e;i<a;){var u=mt((i+a)/2),f=n(t[u]),h=f!==e,p=null===f,g=f==f,m=sl(f);if(l)var b=o||g;else b=c?g&&(o||h):s?g&&h&&(o||!p):d?g&&h&&!p&&(o||!m):!p&&!m&&(o?f<=r:f<r);b?i=u+1:a=u}return vr(a,4294967294)}function lo(e,t){for(var r=-1,n=e.length,o=0,i=[];++r<n;){var a=e[r],l=t?t(a):a;if(!r||!Pa(l,s)){var s=l;i[o++]=0===a?0:a}}return i}function so(e){return"number"==typeof e?e:sl(e)?u:+e}function co(e){if("string"==typeof e)return e;if(Ya(e))return It(e,co)+"";if(sl(e))return Rr?Rr.call(e):"";var t=e+"";return"0"==t&&1/e==-1/0?"-0":t}function uo(e,t,r){var n=-1,o=Tt,i=e.length,a=!0,l=[],s=l;if(r)a=!1,o=_t;else if(i>=200){var d=t?null:Go(e);if(d)return sr(d);a=!1,o=Jt,s=new Kr}else s=t?[]:l;e:for(;++n<i;){var c=e[n],u=t?t(c):c;if(c=r||0!==c?c:0,a&&u==u){for(var f=s.length;f--;)if(s[f]===u)continue e;t&&s.push(u),l.push(c)}else o(s,u,r)||(s!==l&&s.push(u),l.push(c))}return l}function fo(e,t){var r=-1,n=(t=xo(t,e)).length;if(!n)return!0;for(var o=null==e||"object"!=typeof e&&"function"!=typeof e;++r<n;){var i=t[r];if("string"==typeof i){if("__proto__"===i&&!Be.call(e,"__proto__"))return!1;if("constructor"===i&&r+1<n&&"string"==typeof t[r+1]&&"prototype"===t[r+1]){if(o&&0===r)continue;return!1}}}var a=Fi(e,t);return null==a||delete a[zi(Gi(t))]}function ho(e,t,r,n){return Qn(e,t,r(Cn(e,t)),n)}function po(e,t,r,n){for(var o=e.length,i=n?o:-1;(n?i--:++i<o)&&t(e[i],i,e););return r?no(e,n?0:i,n?i+1:o):no(e,n?i+1:0,n?o:i)}function go(e,t){var r=e;return r instanceof Wr&&(r=r.value()),At(t,(function(e,t){return t.func.apply(t.thisArg,Mt([e],t.args))}),r)}function mo(e,t,r){var n=e.length;if(n<2)return n?uo(e[0]):[];for(var o=-1,i=we(n);++o<n;)for(var a=e[o],l=-1;++l<n;)l!=o&&(i[o]=un(i[o]||a,e[l],t,r));return uo(bn(i,1),t,r)}function bo(t,r,n){for(var o=-1,i=t.length,a=r.length,l={};++o<i;){var s=o<a?r[o]:e;n(l,t[o],s)}return l}function vo(e){return Ka(e)?e:[]}function yo(e){return"function"==typeof e?e:ns}function xo(e,t){return Ya(e)?e:wi(e,t)?[e]:ji(vl(e))}var wo=Gn;function $o(t,r,n){var o=t.length;return n=n===e?o:n,!r&&n>=o?t:no(t,r,n)}var Co=ct||function(e){return ft.clearTimeout(e)};function Do(e,t){if(t)return e.slice();var r=e.length,n=Ve?Ve(r):new e.constructor(r);return e.copy(n),n}function So(e){var t=new e.constructor(e.byteLength);return new Ye(t).set(new Ye(e)),t}function ko(e,t){var r=t?So(e.buffer):e.buffer;return new e.constructor(r,e.byteOffset,e.length)}function Eo(t,r){if(t!==r){var n=t!==e,o=null===t,i=t==t,a=sl(t),l=r!==e,s=null===r,d=r==r,c=sl(r);if(!s&&!c&&!a&&t>r||a&&l&&d&&!s&&!c||o&&l&&d||!n&&d||!i)return 1;if(!o&&!a&&!c&&t<r||c&&n&&i&&!o&&!a||s&&n&&i||!l&&i||!d)return-1}return 0}function Fo(e,t,r,n){for(var o=-1,i=e.length,a=r.length,l=-1,s=t.length,d=br(i-a,0),c=we(s+d),u=!n;++l<s;)c[l]=t[l];for(;++o<a;)(u||o<i)&&(c[r[o]]=e[o]);for(;d--;)c[l++]=e[o++];return c}function Oo(e,t,r,n){for(var o=-1,i=e.length,a=-1,l=r.length,s=-1,d=t.length,c=br(i-l,0),u=we(c+d),f=!n;++o<c;)u[o]=e[o];for(var h=o;++s<d;)u[h+s]=t[s];for(;++a<l;)(f||o<i)&&(u[h+r[a]]=e[o++]);return u}function To(e,t){var r=-1,n=e.length;for(t||(t=we(n));++r<n;)t[r]=e[r];return t}function _o(t,r,n,o){var i=!n;n||(n={});for(var a=-1,l=r.length;++a<l;){var s=r[a],d=o?o(n[s],t[s],s,n,t):e;d===e&&(d=t[s]),i?on(n,s,d):en(n,s,d)}return n}function Io(e,t){return function(r,n){var o=Ya(r)?St:rn,i=t?t():{};return o(r,e,di(n,2),i)}}function Mo(t){return Gn((function(r,n){var o=-1,i=n.length,a=i>1?n[i-1]:e,l=i>2?n[2]:e;for(a=t.length>3&&"function"==typeof a?(i--,a):e,l&&xi(n[0],n[1],l)&&(a=i<3?e:a,i=1),r=ke(r);++o<i;){var s=n[o];s&&t(r,s,o,a)}return r}))}function Ao(e,t){return function(r,n){if(null==r)return r;if(!Ua(r))return e(r,n);for(var o=r.length,i=t?o:-1,a=ke(r);(t?i--:++i<o)&&!1!==n(a[i],i,a););return r}}function Bo(e){return function(t,r,n){for(var o=-1,i=ke(t),a=n(t),l=a.length;l--;){var s=a[e?l:++o];if(!1===r(i[s],s,i))break}return t}}function jo(t){return function(r){var n=or(r=vl(r))?ur(r):e,o=n?n[0]:r.charAt(0),i=n?$o(n,1).join(""):r.slice(1);return o[t]()+i}}function zo(e){return function(t){return At(Xl(Wl(t).replace(Xe,"")),e,"")}}function Ro(e){return function(){var t=arguments;switch(t.length){case 0:return new e;case 1:return new e(t[0]);case 2:return new e(t[0],t[1]);case 3:return new e(t[0],t[1],t[2]);case 4:return new e(t[0],t[1],t[2],t[3]);case 5:return new e(t[0],t[1],t[2],t[3],t[4]);case 6:return new e(t[0],t[1],t[2],t[3],t[4],t[5]);case 7:return new e(t[0],t[1],t[2],t[3],t[4],t[5],t[6])}var r=Pr(e.prototype),n=e.apply(r,t);return el(n)?n:r}}function Lo(t){return function(r,n,o){var i=ke(r);if(!Ua(r)){var a=di(n,3);r=_l(r),n=function(e){return a(i[e],e,i)}}var l=t(r,n,o);return l>-1?i[a?r[l]:l]:e}}function Po(r){return ni((function(n){var o=n.length,i=o,a=Hr.prototype.thru;for(r&&n.reverse();i--;){var l=n[i];if("function"!=typeof l)throw new Oe(t);if(a&&!s&&"wrapper"==li(l))var s=new Hr([],!0)}for(i=s?i:o;++i<o;){var d=li(l=n[i]),c="wrapper"==d?ai(l):e;s=c&&$i(c[0])&&424==c[1]&&!c[4].length&&1==c[9]?s[li(c[0])].apply(s,c[3]):1==l.length&&$i(l)?s[d]():s.thru(l)}return function(){var e=arguments,t=e[0];if(s&&1==e.length&&Ya(t))return s.plant(t).value();for(var r=0,i=o?n[r].apply(this,e):t;++r<o;)i=n[r].call(this,i);return i}}))}function No(t,r,n,o,i,a,s,d,c,u){var f=r&l,h=1&r,p=2&r,g=24&r,m=512&r,b=p?e:Ro(t);return function l(){for(var v=arguments.length,y=we(v),x=v;x--;)y[x]=arguments[x];if(g)var w=si(l),$=function(e,t){for(var r=e.length,n=0;r--;)e[r]===t&&++n;return n}(y,w);if(o&&(y=Fo(y,o,i,g)),a&&(y=Oo(y,a,s,g)),v-=$,g&&v<u){var C=lr(y,w);return qo(t,r,No,l.placeholder,n,y,C,d,c,u-v)}var D=h?n:this,S=p?D[t]:t;return v=y.length,d?y=function(t,r){for(var n=t.length,o=vr(r.length,n),i=To(t);o--;){var a=r[o];t[o]=yi(a,n)?i[a]:e}return t}(y,d):m&&v>1&&y.reverse(),f&&c<v&&(y.length=c),this&&this!==ft&&this instanceof l&&(S=b||Ro(S)),S.apply(D,y)}}function Ho(e,t){return function(r,n){return function(e,t,r,n){return xn(e,(function(e,o,i){t(n,r(e),o,i)})),n}(r,e,t(n),{})}}function Wo(t,r){return function(n,o){var i;if(n===e&&o===e)return r;if(n!==e&&(i=n),o!==e){if(i===e)return o;"string"==typeof n||"string"==typeof o?(n=co(n),o=co(o)):(n=so(n),o=so(o)),i=t(n,o)}return i}}function Yo(e){return ni((function(t){return t=It(t,Gt(di())),Gn((function(r){var n=this;return e(t,(function(e){return Dt(e,n,r)}))}))}))}function Vo(t,r){var n=(r=r===e?" ":co(r)).length;if(n<2)return n?Zn(r,t):r;var o=Zn(r,pt(t/cr(r)));return or(r)?$o(ur(o),0,t).join(""):o.slice(0,t)}function Uo(t){return function(r,n,o){return o&&"number"!=typeof o&&xi(r,n,o)&&(n=o=e),r=hl(r),n===e?(n=r,r=0):n=hl(n),function(e,t,r,n){for(var o=-1,i=br(pt((t-e)/(r||1)),0),a=we(i);i--;)a[n?i:++o]=e,e+=r;return a}(r,n,o=o===e?r<n?1:-1:hl(o),t)}}function Ko(e){return function(t,r){return"string"==typeof t&&"string"==typeof r||(t=ml(t),r=ml(r)),e(t,r)}}function qo(t,r,n,o,l,s,d,c,u,f){var h=8&r;r|=h?i:a,4&(r&=~(h?a:i))||(r&=-4);var p=[t,r,l,h?s:e,h?d:e,h?e:s,h?e:d,c,u,f],g=n.apply(e,p);return $i(t)&&Ti(g,p),g.placeholder=o,Mi(g,t,r)}function Zo(e){var t=Se[e];return function(e,r){if(e=ml(e),(r=null==r?0:vr(pl(r),292))&&Vt(e)){var n=(vl(e)+"e").split("e");return+((n=(vl(t(n[0]+"e"+(+n[1]+r)))+"e").split("e"))[0]+"e"+(+n[1]-r))}return t(e)}}var Go=kr&&1/sr(new kr([,-0]))[1]==d?function(e){return new kr(e)}:ss;function Xo(e){return function(t){var r=gi(t);return r==w?ir(t):r==k?dr(t):function(e,t){return It(t,(function(t){return[t,e[t]]}))}(t,e(t))}}function Jo(r,d,c,u,f,h,p,g){var m=2&d;if(!m&&"function"!=typeof r)throw new Oe(t);var b=u?u.length:0;if(b||(d&=-97,u=f=e),p=p===e?p:br(pl(p),0),g=g===e?g:pl(g),b-=f?f.length:0,d&a){var v=u,y=f;u=f=e}var x=m?e:ai(r),w=[r,d,c,u,f,v,y,h,p,g];if(x&&function(e,t){var r=e[1],o=t[1],i=r|o,a=i<131,d=o==l&&8==r||o==l&&r==s&&e[7].length<=t[8]||384==o&&t[7].length<=t[8]&&8==r;if(!a&&!d)return e;1&o&&(e[2]=t[2],i|=1&r?0:4);var c=t[3];if(c){var u=e[3];e[3]=u?Fo(u,c,t[4]):c,e[4]=u?lr(e[3],n):t[4]}(c=t[5])&&(u=e[5],e[5]=u?Oo(u,c,t[6]):c,e[6]=u?lr(e[5],n):t[6]),(c=t[7])&&(e[7]=c),o&l&&(e[8]=null==e[8]?t[8]:vr(e[8],t[8])),null==e[9]&&(e[9]=t[9]),e[0]=t[0],e[1]=i}(w,x),r=w[0],d=w[1],c=w[2],u=w[3],f=w[4],!(g=w[9]=w[9]===e?m?0:r.length:br(w[9]-b,0))&&24&d&&(d&=-25),d&&1!=d)$=8==d||d==o?function(t,r,n){var o=Ro(t);return function i(){for(var a=arguments.length,l=we(a),s=a,d=si(i);s--;)l[s]=arguments[s];var c=a<3&&l[0]!==d&&l[a-1]!==d?[]:lr(l,d);return(a-=c.length)<n?qo(t,r,No,i.placeholder,e,l,c,e,e,n-a):Dt(this&&this!==ft&&this instanceof i?o:t,this,l)}}(r,d,g):d!=i&&33!=d||f.length?No.apply(e,w):function(e,t,r,n){var o=1&t,i=Ro(e);return function t(){for(var a=-1,l=arguments.length,s=-1,d=n.length,c=we(d+l),u=this&&this!==ft&&this instanceof t?i:e;++s<d;)c[s]=n[s];for(;l--;)c[s++]=arguments[++a];return Dt(u,o?r:this,c)}}(r,d,c,u);else var $=function(e,t,r){var n=1&t,o=Ro(e);return function t(){return(this&&this!==ft&&this instanceof t?o:e).apply(n?r:this,arguments)}}(r,d,c);return Mi((x?eo:Ti)($,w),r,d)}function Qo(t,r,n,o){return t===e||Pa(t,Ie[n])&&!Be.call(o,n)?r:t}function ei(t,r,n,o,i,a){return el(t)&&el(r)&&(a.set(r,t),Hn(t,r,e,ei,a),a.delete(r)),t}function ti(t){return ol(t)?e:t}function ri(t,r,n,o,i,a){var l=1&n,s=t.length,d=r.length;if(s!=d&&!(l&&d>s))return!1;var c=a.get(t),u=a.get(r);if(c&&u)return c==r&&u==t;var f=-1,h=!0,p=2&n?new Kr:e;for(a.set(t,r),a.set(r,t);++f<s;){var g=t[f],m=r[f];if(o)var b=l?o(m,g,f,r,t,a):o(g,m,f,t,r,a);if(b!==e){if(b)continue;h=!1;break}if(p){if(!jt(r,(function(e,t){if(!Jt(p,t)&&(g===e||i(g,e,n,o,a)))return p.push(t)}))){h=!1;break}}else if(g!==m&&!i(g,m,n,o,a)){h=!1;break}}return a.delete(t),a.delete(r),h}function ni(t){return Ii(Ei(t,e,Vi),t+"")}function oi(e){return Dn(e,_l,hi)}function ii(e){return Dn(e,Il,pi)}var ai=Or?function(e){return Or.get(e)}:ss;function li(e){for(var t=e.name+"",r=Tr[t],n=Be.call(Tr,t)?r.length:0;n--;){var o=r[n],i=o.func;if(null==i||i==e)return o.name}return t}function si(e){return(Be.call(Lr,"placeholder")?Lr:e).placeholder}function di(){var e=Lr.iteratee||os;return e=e===os?Bn:e,arguments.length?e(arguments[0],arguments[1]):e}function ci(e,t){var r,n,o=e.__data__;return("string"==(n=typeof(r=t))||"number"==n||"symbol"==n||"boolean"==n?"__proto__"!==r:null===r)?o["string"==typeof t?"string":"hash"]:o.map}function ui(e){for(var t=_l(e),r=t.length;r--;){var n=t[r],o=e[n];t[r]=[n,o,Si(o)]}return t}function fi(t,r){var n=function(t,r){return null==t?e:t[r]}(t,r);return An(n)?n:e}var hi=bt?function(e){return null==e?[]:(e=ke(e),Ot(bt(e),(function(t){return qe.call(e,t)})))}:gs,pi=bt?function(e){for(var t=[];e;)Mt(t,hi(e)),e=Ue(e);return t}:gs,gi=Sn;function mi(e,t,r){for(var n=-1,o=(t=xo(t,e)).length,i=!1;++n<o;){var a=zi(t[n]);if(!(i=null!=e&&r(e,a)))break;e=e[a]}return i||++n!=o?i:!!(o=null==e?0:e.length)&&Qa(o)&&yi(a,o)&&(Ya(e)||Wa(e))}function bi(e){return"function"!=typeof e.constructor||Di(e)?{}:Pr(Ue(e))}function vi(e){return Ya(e)||Wa(e)||!!(Ge&&e&&e[Ge])}function yi(e,t){var r=typeof e;return!!(t=null==t?c:t)&&("number"==r||"symbol"!=r&&me.test(e))&&e>-1&&e%1==0&&e<t}function xi(e,t,r){if(!el(r))return!1;var n=typeof t;return!!("number"==n?Ua(r)&&yi(t,r.length):"string"==n&&t in r)&&Pa(r[t],e)}function wi(e,t){if(Ya(e))return!1;var r=typeof e;return!("number"!=r&&"symbol"!=r&&"boolean"!=r&&null!=e&&!sl(e))||J.test(e)||!X.test(e)||null!=t&&e in ke(t)}function $i(e){var t=li(e),r=Lr[t];if("function"!=typeof r||!(t in Wr.prototype))return!1;if(e===r)return!0;var n=ai(r);return!!n&&e===n[0]}(Cr&&gi(new Cr(new ArrayBuffer(1)))!=_||Dr&&gi(new Dr)!=w||Sr&&gi(Sr.resolve())!=D||kr&&gi(new kr)!=k||Er&&gi(new Er)!=O)&&(gi=function(t){var r=Sn(t),n=r==C?t.constructor:e,o=n?Ri(n):"";if(o)switch(o){case _r:return _;case Ir:return w;case Mr:return D;case Ar:return k;case Br:return O}return r});var Ci=Me?Xa:ms;function Di(e){var t=e&&e.constructor;return e===("function"==typeof t&&t.prototype||Ie)}function Si(e){return e==e&&!el(e)}function ki(t,r){return function(n){return null!=n&&n[t]===r&&(r!==e||t in ke(n))}}function Ei(t,r,n){return r=br(r===e?t.length-1:r,0),function(){for(var e=arguments,o=-1,i=br(e.length-r,0),a=we(i);++o<i;)a[o]=e[r+o];o=-1;for(var l=we(r+1);++o<r;)l[o]=e[o];return l[r]=n(a),Dt(t,this,l)}}function Fi(e,t){return t.length<2?e:Cn(e,no(t,0,-1))}function Oi(e,t){if(("constructor"!==t||"function"!=typeof e[t])&&"__proto__"!=t)return e[t]}var Ti=Ai(eo),_i=ht||function(e,t){return ft.setTimeout(e,t)},Ii=Ai(to);function Mi(e,t,r){var n=t+"";return Ii(e,function(e,t){var r=t.length;if(!r)return e;var n=r-1;return t[n]=(r>1?"& ":"")+t[n],t=t.join(r>2?", ":" "),e.replace(oe,"{\n/* [wrapped with "+t+"] */\n")}(n,function(e,t){return kt(h,(function(r){var n="_."+r[0];t&r[1]&&!Tt(e,n)&&e.push(n)})),e.sort()}(function(e){var t=e.match(ie);return t?t[1].split(ae):[]}(n),r)))}function Ai(t){var r=0,n=0;return function(){var o=yr(),i=16-(o-n);if(n=o,i>0){if(++r>=800)return arguments[0]}else r=0;return t.apply(e,arguments)}}function Bi(t,r){var n=-1,o=t.length,i=o-1;for(r=r===e?o:r;++n<r;){var a=qn(n,i),l=t[a];t[a]=t[n],t[n]=l}return t.length=r,t}var ji=function(e){var t=Aa(e,(function(e){return 500===r.size&&r.clear(),e})),r=t.cache;return t}((function(e){var t=[];return 46===e.charCodeAt(0)&&t.push(""),e.replace(Q,(function(e,r,n,o){t.push(n?o.replace(de,"$1"):r||e)})),t}));function zi(e){if("string"==typeof e||sl(e))return e;var t=e+"";return"0"==t&&1/e==-1/0?"-0":t}function Ri(e){if(null!=e){try{return Ae.call(e)}catch(e){}try{return e+""}catch(e){}}return""}function Li(e){if(e instanceof Wr)return e.clone();var t=new Hr(e.__wrapped__,e.__chain__);return t.__actions__=To(e.__actions__),t.__index__=e.__index__,t.__values__=e.__values__,t}var Pi=Gn((function(e,t){return Ka(e)?un(e,bn(t,1,Ka,!0)):[]})),Ni=Gn((function(t,r){var n=Gi(r);return Ka(n)&&(n=e),Ka(t)?un(t,bn(r,1,Ka,!0),di(n,2)):[]})),Hi=Gn((function(t,r){var n=Gi(r);return Ka(n)&&(n=e),Ka(t)?un(t,bn(r,1,Ka,!0),e,n):[]}));function Wi(e,t,r){var n=null==e?0:e.length;if(!n)return-1;var o=null==r?0:pl(r);return o<0&&(o=br(n+o,0)),Lt(e,di(t,3),o)}function Yi(t,r,n){var o=null==t?0:t.length;if(!o)return-1;var i=o-1;return n!==e&&(i=pl(n),i=n<0?br(o+i,0):vr(i,o-1)),Lt(t,di(r,3),i,!0)}function Vi(e){return null!=e&&e.length?bn(e,1):[]}function Ui(t){return t&&t.length?t[0]:e}var Ki=Gn((function(e){var t=It(e,vo);return t.length&&t[0]===e[0]?On(t):[]})),qi=Gn((function(t){var r=Gi(t),n=It(t,vo);return r===Gi(n)?r=e:n.pop(),n.length&&n[0]===t[0]?On(n,di(r,2)):[]})),Zi=Gn((function(t){var r=Gi(t),n=It(t,vo);return(r="function"==typeof r?r:e)&&n.pop(),n.length&&n[0]===t[0]?On(n,e,r):[]}));function Gi(t){var r=null==t?0:t.length;return r?t[r-1]:e}var Xi=Gn(Ji);function Ji(e,t){return e&&e.length&&t&&t.length?Un(e,t):e}var Qi=ni((function(e,t){var r=null==e?0:e.length,n=an(e,t);return Kn(e,It(t,(function(e){return yi(e,r)?+e:e})).sort(Eo)),n}));function ea(e){return null==e?e:$r.call(e)}var ta=Gn((function(e){return uo(bn(e,1,Ka,!0))})),ra=Gn((function(t){var r=Gi(t);return Ka(r)&&(r=e),uo(bn(t,1,Ka,!0),di(r,2))})),na=Gn((function(t){var r=Gi(t);return r="function"==typeof r?r:e,uo(bn(t,1,Ka,!0),e,r)}));function oa(e){if(!e||!e.length)return[];var t=0;return e=Ot(e,(function(e){if(Ka(e))return t=br(e.length,t),!0})),qt(t,(function(t){return It(e,Yt(t))}))}function ia(t,r){if(!t||!t.length)return[];var n=oa(t);return null==r?n:It(n,(function(t){return Dt(r,e,t)}))}var aa=Gn((function(e,t){return Ka(e)?un(e,t):[]})),la=Gn((function(e){return mo(Ot(e,Ka))})),sa=Gn((function(t){var r=Gi(t);return Ka(r)&&(r=e),mo(Ot(t,Ka),di(r,2))})),da=Gn((function(t){var r=Gi(t);return r="function"==typeof r?r:e,mo(Ot(t,Ka),e,r)})),ca=Gn(oa),ua=Gn((function(t){var r=t.length,n=r>1?t[r-1]:e;return n="function"==typeof n?(t.pop(),n):e,ia(t,n)}));function fa(e){var t=Lr(e);return t.__chain__=!0,t}function ha(e,t){return t(e)}var pa=ni((function(t){var r=t.length,n=r?t[0]:0,o=this.__wrapped__,i=function(e){return an(e,t)};return!(r>1||this.__actions__.length)&&o instanceof Wr&&yi(n)?((o=o.slice(n,+n+(r?1:0))).__actions__.push({func:ha,args:[i],thisArg:e}),new Hr(o,this.__chain__).thru((function(t){return r&&!t.length&&t.push(e),t}))):this.thru(i)})),ga=Io((function(e,t,r){Be.call(e,r)?++e[r]:on(e,r,1)})),ma=Lo(Wi),ba=Lo(Yi);function va(e,t){return(Ya(e)?kt:fn)(e,di(t,3))}function ya(e,t){return(Ya(e)?Et:hn)(e,di(t,3))}var xa=Io((function(e,t,r){Be.call(e,r)?e[r].push(t):on(e,r,[t])})),wa=Gn((function(e,t,r){var n=-1,o="function"==typeof t,i=Ua(e)?we(e.length):[];return fn(e,(function(e){i[++n]=o?Dt(t,e,r):Tn(e,t,r)})),i})),$a=Io((function(e,t,r){on(e,r,t)}));function Ca(e,t){return(Ya(e)?It:Ln)(e,di(t,3))}var Da=Io((function(e,t,r){e[r?0:1].push(t)}),(function(){return[[],[]]})),Sa=Gn((function(e,t){if(null==e)return[];var r=t.length;return r>1&&xi(e,t[0],t[1])?t=[]:r>2&&xi(t[0],t[1],t[2])&&(t=[t[0]]),Yn(e,bn(t,1),[])})),ka=ut||function(){return ft.Date.now()};function Ea(t,r,n){return r=n?e:r,r=t&&null==r?t.length:r,Jo(t,l,e,e,e,e,r)}function Fa(r,n){var o;if("function"!=typeof n)throw new Oe(t);return r=pl(r),function(){return--r>0&&(o=n.apply(this,arguments)),r<=1&&(n=e),o}}var Oa=Gn((function(e,t,r){var n=1;if(r.length){var o=lr(r,si(Oa));n|=i}return Jo(e,n,t,r,o)})),Ta=Gn((function(e,t,r){var n=3;if(r.length){var o=lr(r,si(Ta));n|=i}return Jo(t,n,e,r,o)}));function _a(r,n,o){var i,a,l,s,d,c,u=0,f=!1,h=!1,p=!0;if("function"!=typeof r)throw new Oe(t);function g(t){var n=i,o=a;return i=a=e,u=t,s=r.apply(o,n)}function m(t){var r=t-c;return c===e||r>=n||r<0||h&&t-u>=l}function b(){var e=ka();if(m(e))return v(e);d=_i(b,function(e){var t=n-(e-c);return h?vr(t,l-(e-u)):t}(e))}function v(t){return d=e,p&&i?g(t):(i=a=e,s)}function y(){var t=ka(),r=m(t);if(i=arguments,a=this,c=t,r){if(d===e)return function(e){return u=e,d=_i(b,n),f?g(e):s}(c);if(h)return Co(d),d=_i(b,n),g(c)}return d===e&&(d=_i(b,n)),s}return n=ml(n)||0,el(o)&&(f=!!o.leading,l=(h="maxWait"in o)?br(ml(o.maxWait)||0,n):l,p="trailing"in o?!!o.trailing:p),y.cancel=function(){d!==e&&Co(d),u=0,i=c=a=d=e},y.flush=function(){return d===e?s:v(ka())},y}var Ia=Gn((function(e,t){return cn(e,1,t)})),Ma=Gn((function(e,t,r){return cn(e,ml(t)||0,r)}));function Aa(e,r){if("function"!=typeof e||null!=r&&"function"!=typeof r)throw new Oe(t);var n=function(){var t=arguments,o=r?r.apply(this,t):t[0],i=n.cache;if(i.has(o))return i.get(o);var a=e.apply(this,t);return n.cache=i.set(o,a)||i,a};return n.cache=new(Aa.Cache||Ur),n}function Ba(e){if("function"!=typeof e)throw new Oe(t);return function(){var t=arguments;switch(t.length){case 0:return!e.call(this);case 1:return!e.call(this,t[0]);case 2:return!e.call(this,t[0],t[1]);case 3:return!e.call(this,t[0],t[1],t[2])}return!e.apply(this,t)}}Aa.Cache=Ur;var ja=wo((function(e,t){var r=(t=1==t.length&&Ya(t[0])?It(t[0],Gt(di())):It(bn(t,1),Gt(di()))).length;return Gn((function(n){for(var o=-1,i=vr(n.length,r);++o<i;)n[o]=t[o].call(this,n[o]);return Dt(e,this,n)}))})),za=Gn((function(t,r){var n=lr(r,si(za));return Jo(t,i,e,r,n)})),Ra=Gn((function(t,r){var n=lr(r,si(Ra));return Jo(t,a,e,r,n)})),La=ni((function(t,r){return Jo(t,s,e,e,e,r)}));function Pa(e,t){return e===t||e!=e&&t!=t}var Na=Ko(kn),Ha=Ko((function(e,t){return e>=t})),Wa=_n(function(){return arguments}())?_n:function(e){return tl(e)&&Be.call(e,"callee")&&!qe.call(e,"callee")},Ya=we.isArray,Va=vt?Gt(vt):function(e){return tl(e)&&Sn(e)==T};function Ua(e){return null!=e&&Qa(e.length)&&!Xa(e)}function Ka(e){return tl(e)&&Ua(e)}var qa=zt||ms,Za=yt?Gt(yt):function(e){return tl(e)&&Sn(e)==b};function Ga(e){if(!tl(e))return!1;var t=Sn(e);return t==v||"[object DOMException]"==t||"string"==typeof e.message&&"string"==typeof e.name&&!ol(e)}function Xa(e){if(!el(e))return!1;var t=Sn(e);return t==y||t==x||"[object AsyncFunction]"==t||"[object Proxy]"==t}function Ja(e){return"number"==typeof e&&e==pl(e)}function Qa(e){return"number"==typeof e&&e>-1&&e%1==0&&e<=c}function el(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)}function tl(e){return null!=e&&"object"==typeof e}var rl=xt?Gt(xt):function(e){return tl(e)&&gi(e)==w};function nl(e){return"number"==typeof e||tl(e)&&Sn(e)==$}function ol(e){if(!tl(e)||Sn(e)!=C)return!1;var t=Ue(e);if(null===t)return!0;var r=Be.call(t,"constructor")&&t.constructor;return"function"==typeof r&&r instanceof r&&Ae.call(r)==Le}var il=wt?Gt(wt):function(e){return tl(e)&&Sn(e)==S},al=$t?Gt($t):function(e){return tl(e)&&gi(e)==k};function ll(e){return"string"==typeof e||!Ya(e)&&tl(e)&&Sn(e)==E}function sl(e){return"symbol"==typeof e||tl(e)&&Sn(e)==F}var dl=Ct?Gt(Ct):function(e){return tl(e)&&Qa(e.length)&&!!it[Sn(e)]},cl=Ko(Rn),ul=Ko((function(e,t){return e<=t}));function fl(e){if(!e)return[];if(Ua(e))return ll(e)?ur(e):To(e);if(Qe&&e[Qe])return function(e){for(var t,r=[];!(t=e.next()).done;)r.push(t.value);return r}(e[Qe]());var t=gi(e);return(t==w?ir:t==k?sr:Pl)(e)}function hl(e){return e?(e=ml(e))===d||e===-1/0?17976931348623157e292*(e<0?-1:1):e==e?e:0:0===e?e:0}function pl(e){var t=hl(e),r=t%1;return t==t?r?t-r:t:0}function gl(e){return e?ln(pl(e),0,f):0}function ml(e){if("number"==typeof e)return e;if(sl(e))return u;if(el(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=el(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=Zt(e);var r=he.test(e);return r||ge.test(e)?dt(e.slice(2),r?2:8):fe.test(e)?u:+e}function bl(e){return _o(e,Il(e))}function vl(e){return null==e?"":co(e)}var yl=Mo((function(e,t){if(Di(t)||Ua(t))_o(t,_l(t),e);else for(var r in t)Be.call(t,r)&&en(e,r,t[r])})),xl=Mo((function(e,t){_o(t,Il(t),e)})),wl=Mo((function(e,t,r,n){_o(t,Il(t),e,n)})),$l=Mo((function(e,t,r,n){_o(t,_l(t),e,n)})),Cl=ni(an),Dl=Gn((function(t,r){t=ke(t);var n=-1,o=r.length,i=o>2?r[2]:e;for(i&&xi(r[0],r[1],i)&&(o=1);++n<o;)for(var a=r[n],l=Il(a),s=-1,d=l.length;++s<d;){var c=l[s],u=t[c];(u===e||Pa(u,Ie[c])&&!Be.call(t,c))&&(t[c]=a[c])}return t})),Sl=Gn((function(t){return t.push(e,ei),Dt(Al,e,t)}));function kl(t,r,n){var o=null==t?e:Cn(t,r);return o===e?n:o}function El(e,t){return null!=e&&mi(e,t,Fn)}var Fl=Ho((function(e,t,r){null!=t&&"function"!=typeof t.toString&&(t=Re.call(t)),e[t]=r}),es(ns)),Ol=Ho((function(e,t,r){null!=t&&"function"!=typeof t.toString&&(t=Re.call(t)),Be.call(e,t)?e[t].push(r):e[t]=[r]}),di),Tl=Gn(Tn);function _l(e){return Ua(e)?Zr(e):jn(e)}function Il(e){return Ua(e)?Zr(e,!0):zn(e)}var Ml=Mo((function(e,t,r){Hn(e,t,r)})),Al=Mo((function(e,t,r,n){Hn(e,t,r,n)})),Bl=ni((function(e,t){var r={};if(null==e)return r;var n=!1;t=It(t,(function(t){return t=xo(t,e),n||(n=t.length>1),t})),_o(e,ii(e),r),n&&(r=sn(r,7,ti));for(var o=t.length;o--;)fo(r,t[o]);return r})),jl=ni((function(e,t){return null==e?{}:function(e,t){return Vn(e,t,(function(t,r){return El(e,r)}))}(e,t)}));function zl(e,t){if(null==e)return{};var r=It(ii(e),(function(e){return[e]}));return t=di(t),Vn(e,r,(function(e,r){return t(e,r[0])}))}var Rl=Xo(_l),Ll=Xo(Il);function Pl(e){return null==e?[]:Xt(e,_l(e))}var Nl=zo((function(e,t,r){return t=t.toLowerCase(),e+(r?Hl(t):t)}));function Hl(e){return Gl(vl(e).toLowerCase())}function Wl(e){return(e=vl(e))&&e.replace(be,tr).replace(Je,"")}var Yl=zo((function(e,t,r){return e+(r?"-":"")+t.toLowerCase()})),Vl=zo((function(e,t,r){return e+(r?" ":"")+t.toLowerCase()})),Ul=jo("toLowerCase"),Kl=zo((function(e,t,r){return e+(r?"_":"")+t.toLowerCase()})),ql=zo((function(e,t,r){return e+(r?" ":"")+Gl(t)})),Zl=zo((function(e,t,r){return e+(r?" ":"")+t.toUpperCase()})),Gl=jo("toUpperCase");function Xl(t,r,n){return t=vl(t),(r=n?e:r)===e?function(e){return rt.test(e)}(t)?function(e){return e.match(et)||[]}(t):function(e){return e.match(le)||[]}(t):t.match(r)||[]}var Jl=Gn((function(t,r){try{return Dt(t,e,r)}catch(e){return Ga(e)?e:new Ce(e)}})),Ql=ni((function(e,t){return kt(t,(function(t){t=zi(t),on(e,t,Oa(e[t],e))})),e}));function es(e){return function(){return e}}var ts=Po(),rs=Po(!0);function ns(e){return e}function os(e){return Bn("function"==typeof e?e:sn(e,1))}var is=Gn((function(e,t){return function(r){return Tn(r,e,t)}})),as=Gn((function(e,t){return function(r){return Tn(e,r,t)}}));function ls(e,t,r){var n=_l(t),o=$n(t,n);null!=r||el(t)&&(o.length||!n.length)||(r=t,t=e,e=this,o=$n(t,_l(t)));var i=!(el(r)&&"chain"in r&&!r.chain),a=Xa(e);return kt(o,(function(r){var n=t[r];e[r]=n,a&&(e.prototype[r]=function(){var t=this.__chain__;if(i||t){var r=e(this.__wrapped__);return(r.__actions__=To(this.__actions__)).push({func:n,args:arguments,thisArg:e}),r.__chain__=t,r}return n.apply(e,Mt([this.value()],arguments))})})),e}function ss(){}var ds=Yo(It),cs=Yo(Ft),us=Yo(jt);function fs(e){return wi(e)?Yt(zi(e)):function(e){return function(t){return Cn(t,e)}}(e)}var hs=Uo(),ps=Uo(!0);function gs(){return[]}function ms(){return!1}var bs,vs=Wo((function(e,t){return e+t}),0),ys=Zo("ceil"),xs=Wo((function(e,t){return e/t}),1),ws=Zo("floor"),$s=Wo((function(e,t){return e*t}),1),Cs=Zo("round"),Ds=Wo((function(e,t){return e-t}),0);return Lr.after=function(e,r){if("function"!=typeof r)throw new Oe(t);return e=pl(e),function(){if(--e<1)return r.apply(this,arguments)}},Lr.ary=Ea,Lr.assign=yl,Lr.assignIn=xl,Lr.assignInWith=wl,Lr.assignWith=$l,Lr.at=Cl,Lr.before=Fa,Lr.bind=Oa,Lr.bindAll=Ql,Lr.bindKey=Ta,Lr.castArray=function(){if(!arguments.length)return[];var e=arguments[0];return Ya(e)?e:[e]},Lr.chain=fa,Lr.chunk=function(t,r,n){r=(n?xi(t,r,n):r===e)?1:br(pl(r),0);var o=null==t?0:t.length;if(!o||r<1)return[];for(var i=0,a=0,l=we(pt(o/r));i<o;)l[a++]=no(t,i,i+=r);return l},Lr.compact=function(e){for(var t=-1,r=null==e?0:e.length,n=0,o=[];++t<r;){var i=e[t];i&&(o[n++]=i)}return o},Lr.concat=function(){var e=arguments.length;if(!e)return[];for(var t=we(e-1),r=arguments[0],n=e;n--;)t[n-1]=arguments[n];return Mt(Ya(r)?To(r):[r],bn(t,1))},Lr.cond=function(e){var r=null==e?0:e.length,n=di();return e=r?It(e,(function(e){if("function"!=typeof e[1])throw new Oe(t);return[n(e[0]),e[1]]})):[],Gn((function(t){for(var n=-1;++n<r;){var o=e[n];if(Dt(o[0],this,t))return Dt(o[1],this,t)}}))},Lr.conforms=function(e){return function(e){var t=_l(e);return function(r){return dn(r,e,t)}}(sn(e,1))},Lr.constant=es,Lr.countBy=ga,Lr.create=function(e,t){var r=Pr(e);return null==t?r:nn(r,t)},Lr.curry=function t(r,n,o){var i=Jo(r,8,e,e,e,e,e,n=o?e:n);return i.placeholder=t.placeholder,i},Lr.curryRight=function t(r,n,i){var a=Jo(r,o,e,e,e,e,e,n=i?e:n);return a.placeholder=t.placeholder,a},Lr.debounce=_a,Lr.defaults=Dl,Lr.defaultsDeep=Sl,Lr.defer=Ia,Lr.delay=Ma,Lr.difference=Pi,Lr.differenceBy=Ni,Lr.differenceWith=Hi,Lr.drop=function(t,r,n){var o=null==t?0:t.length;return o?no(t,(r=n||r===e?1:pl(r))<0?0:r,o):[]},Lr.dropRight=function(t,r,n){var o=null==t?0:t.length;return o?no(t,0,(r=o-(r=n||r===e?1:pl(r)))<0?0:r):[]},Lr.dropRightWhile=function(e,t){return e&&e.length?po(e,di(t,3),!0,!0):[]},Lr.dropWhile=function(e,t){return e&&e.length?po(e,di(t,3),!0):[]},Lr.fill=function(t,r,n,o){var i=null==t?0:t.length;return i?(n&&"number"!=typeof n&&xi(t,r,n)&&(n=0,o=i),function(t,r,n,o){var i=t.length;for((n=pl(n))<0&&(n=-n>i?0:i+n),(o=o===e||o>i?i:pl(o))<0&&(o+=i),o=n>o?0:gl(o);n<o;)t[n++]=r;return t}(t,r,n,o)):[]},Lr.filter=function(e,t){return(Ya(e)?Ot:mn)(e,di(t,3))},Lr.flatMap=function(e,t){return bn(Ca(e,t),1)},Lr.flatMapDeep=function(e,t){return bn(Ca(e,t),d)},Lr.flatMapDepth=function(t,r,n){return n=n===e?1:pl(n),bn(Ca(t,r),n)},Lr.flatten=Vi,Lr.flattenDeep=function(e){return null!=e&&e.length?bn(e,d):[]},Lr.flattenDepth=function(t,r){return null!=t&&t.length?bn(t,r=r===e?1:pl(r)):[]},Lr.flip=function(e){return Jo(e,512)},Lr.flow=ts,Lr.flowRight=rs,Lr.fromPairs=function(e){for(var t=-1,r=null==e?0:e.length,n={};++t<r;){var o=e[t];n[o[0]]=o[1]}return n},Lr.functions=function(e){return null==e?[]:$n(e,_l(e))},Lr.functionsIn=function(e){return null==e?[]:$n(e,Il(e))},Lr.groupBy=xa,Lr.initial=function(e){return null!=e&&e.length?no(e,0,-1):[]},Lr.intersection=Ki,Lr.intersectionBy=qi,Lr.intersectionWith=Zi,Lr.invert=Fl,Lr.invertBy=Ol,Lr.invokeMap=wa,Lr.iteratee=os,Lr.keyBy=$a,Lr.keys=_l,Lr.keysIn=Il,Lr.map=Ca,Lr.mapKeys=function(e,t){var r={};return t=di(t,3),xn(e,(function(e,n,o){on(r,t(e,n,o),e)})),r},Lr.mapValues=function(e,t){var r={};return t=di(t,3),xn(e,(function(e,n,o){on(r,n,t(e,n,o))})),r},Lr.matches=function(e){return Pn(sn(e,1))},Lr.matchesProperty=function(e,t){return Nn(e,sn(t,1))},Lr.memoize=Aa,Lr.merge=Ml,Lr.mergeWith=Al,Lr.method=is,Lr.methodOf=as,Lr.mixin=ls,Lr.negate=Ba,Lr.nthArg=function(e){return e=pl(e),Gn((function(t){return Wn(t,e)}))},Lr.omit=Bl,Lr.omitBy=function(e,t){return zl(e,Ba(di(t)))},Lr.once=function(e){return Fa(2,e)},Lr.orderBy=function(t,r,n,o){return null==t?[]:(Ya(r)||(r=null==r?[]:[r]),Ya(n=o?e:n)||(n=null==n?[]:[n]),Yn(t,r,n))},Lr.over=ds,Lr.overArgs=ja,Lr.overEvery=cs,Lr.overSome=us,Lr.partial=za,Lr.partialRight=Ra,Lr.partition=Da,Lr.pick=jl,Lr.pickBy=zl,Lr.property=fs,Lr.propertyOf=function(t){return function(r){return null==t?e:Cn(t,r)}},Lr.pull=Xi,Lr.pullAll=Ji,Lr.pullAllBy=function(e,t,r){return e&&e.length&&t&&t.length?Un(e,t,di(r,2)):e},Lr.pullAllWith=function(t,r,n){return t&&t.length&&r&&r.length?Un(t,r,e,n):t},Lr.pullAt=Qi,Lr.range=hs,Lr.rangeRight=ps,Lr.rearg=La,Lr.reject=function(e,t){return(Ya(e)?Ot:mn)(e,Ba(di(t,3)))},Lr.remove=function(e,t){var r=[];if(!e||!e.length)return r;var n=-1,o=[],i=e.length;for(t=di(t,3);++n<i;){var a=e[n];t(a,n,e)&&(r.push(a),o.push(n))}return Kn(e,o),r},Lr.rest=function(r,n){if("function"!=typeof r)throw new Oe(t);return Gn(r,n=n===e?n:pl(n))},Lr.reverse=ea,Lr.sampleSize=function(t,r,n){return r=(n?xi(t,r,n):r===e)?1:pl(r),(Ya(t)?Xr:Jn)(t,r)},Lr.set=function(e,t,r){return null==e?e:Qn(e,t,r)},Lr.setWith=function(t,r,n,o){return o="function"==typeof o?o:e,null==t?t:Qn(t,r,n,o)},Lr.shuffle=function(e){return(Ya(e)?Jr:ro)(e)},Lr.slice=function(t,r,n){var o=null==t?0:t.length;return o?(n&&"number"!=typeof n&&xi(t,r,n)?(r=0,n=o):(r=null==r?0:pl(r),n=n===e?o:pl(n)),no(t,r,n)):[]},Lr.sortBy=Sa,Lr.sortedUniq=function(e){return e&&e.length?lo(e):[]},Lr.sortedUniqBy=function(e,t){return e&&e.length?lo(e,di(t,2)):[]},Lr.split=function(t,r,n){return n&&"number"!=typeof n&&xi(t,r,n)&&(r=n=e),(n=n===e?f:n>>>0)?(t=vl(t))&&("string"==typeof r||null!=r&&!il(r))&&!(r=co(r))&&or(t)?$o(ur(t),0,n):t.split(r,n):[]},Lr.spread=function(e,r){if("function"!=typeof e)throw new Oe(t);return r=null==r?0:br(pl(r),0),Gn((function(t){var n=t[r],o=$o(t,0,r);return n&&Mt(o,n),Dt(e,this,o)}))},Lr.tail=function(e){var t=null==e?0:e.length;return t?no(e,1,t):[]},Lr.take=function(t,r,n){return t&&t.length?no(t,0,(r=n||r===e?1:pl(r))<0?0:r):[]},Lr.takeRight=function(t,r,n){var o=null==t?0:t.length;return o?no(t,(r=o-(r=n||r===e?1:pl(r)))<0?0:r,o):[]},Lr.takeRightWhile=function(e,t){return e&&e.length?po(e,di(t,3),!1,!0):[]},Lr.takeWhile=function(e,t){return e&&e.length?po(e,di(t,3)):[]},Lr.tap=function(e,t){return t(e),e},Lr.throttle=function(e,r,n){var o=!0,i=!0;if("function"!=typeof e)throw new Oe(t);return el(n)&&(o="leading"in n?!!n.leading:o,i="trailing"in n?!!n.trailing:i),_a(e,r,{leading:o,maxWait:r,trailing:i})},Lr.thru=ha,Lr.toArray=fl,Lr.toPairs=Rl,Lr.toPairsIn=Ll,Lr.toPath=function(e){return Ya(e)?It(e,zi):sl(e)?[e]:To(ji(vl(e)))},Lr.toPlainObject=bl,Lr.transform=function(e,t,r){var n=Ya(e),o=n||qa(e)||dl(e);if(t=di(t,4),null==r){var i=e&&e.constructor;r=o?n?new i:[]:el(e)&&Xa(i)?Pr(Ue(e)):{}}return(o?kt:xn)(e,(function(e,n,o){return t(r,e,n,o)})),r},Lr.unary=function(e){return Ea(e,1)},Lr.union=ta,Lr.unionBy=ra,Lr.unionWith=na,Lr.uniq=function(e){return e&&e.length?uo(e):[]},Lr.uniqBy=function(e,t){return e&&e.length?uo(e,di(t,2)):[]},Lr.uniqWith=function(t,r){return r="function"==typeof r?r:e,t&&t.length?uo(t,e,r):[]},Lr.unset=function(e,t){return null==e||fo(e,t)},Lr.unzip=oa,Lr.unzipWith=ia,Lr.update=function(e,t,r){return null==e?e:ho(e,t,yo(r))},Lr.updateWith=function(t,r,n,o){return o="function"==typeof o?o:e,null==t?t:ho(t,r,yo(n),o)},Lr.values=Pl,Lr.valuesIn=function(e){return null==e?[]:Xt(e,Il(e))},Lr.without=aa,Lr.words=Xl,Lr.wrap=function(e,t){return za(yo(t),e)},Lr.xor=la,Lr.xorBy=sa,Lr.xorWith=da,Lr.zip=ca,Lr.zipObject=function(e,t){return bo(e||[],t||[],en)},Lr.zipObjectDeep=function(e,t){return bo(e||[],t||[],Qn)},Lr.zipWith=ua,Lr.entries=Rl,Lr.entriesIn=Ll,Lr.extend=xl,Lr.extendWith=wl,ls(Lr,Lr),Lr.add=vs,Lr.attempt=Jl,Lr.camelCase=Nl,Lr.capitalize=Hl,Lr.ceil=ys,Lr.clamp=function(t,r,n){return n===e&&(n=r,r=e),n!==e&&(n=(n=ml(n))==n?n:0),r!==e&&(r=(r=ml(r))==r?r:0),ln(ml(t),r,n)},Lr.clone=function(e){return sn(e,4)},Lr.cloneDeep=function(e){return sn(e,5)},Lr.cloneDeepWith=function(t,r){return sn(t,5,r="function"==typeof r?r:e)},Lr.cloneWith=function(t,r){return sn(t,4,r="function"==typeof r?r:e)},Lr.conformsTo=function(e,t){return null==t||dn(e,t,_l(t))},Lr.deburr=Wl,Lr.defaultTo=function(e,t){return null==e||e!=e?t:e},Lr.divide=xs,Lr.endsWith=function(t,r,n){t=vl(t),r=co(r);var o=t.length,i=n=n===e?o:ln(pl(n),0,o);return(n-=r.length)>=0&&t.slice(n,i)==r},Lr.eq=Pa,Lr.escape=function(e){return(e=vl(e))&&K.test(e)?e.replace(V,rr):e},Lr.escapeRegExp=function(e){return(e=vl(e))&&te.test(e)?e.replace(ee,"\\$&"):e},Lr.every=function(t,r,n){var o=Ya(t)?Ft:pn;return n&&xi(t,r,n)&&(r=e),o(t,di(r,3))},Lr.find=ma,Lr.findIndex=Wi,Lr.findKey=function(e,t){return Rt(e,di(t,3),xn)},Lr.findLast=ba,Lr.findLastIndex=Yi,Lr.findLastKey=function(e,t){return Rt(e,di(t,3),wn)},Lr.floor=ws,Lr.forEach=va,Lr.forEachRight=ya,Lr.forIn=function(e,t){return null==e?e:vn(e,di(t,3),Il)},Lr.forInRight=function(e,t){return null==e?e:yn(e,di(t,3),Il)},Lr.forOwn=function(e,t){return e&&xn(e,di(t,3))},Lr.forOwnRight=function(e,t){return e&&wn(e,di(t,3))},Lr.get=kl,Lr.gt=Na,Lr.gte=Ha,Lr.has=function(e,t){return null!=e&&mi(e,t,En)},Lr.hasIn=El,Lr.head=Ui,Lr.identity=ns,Lr.includes=function(e,t,r,n){e=Ua(e)?e:Pl(e),r=r&&!n?pl(r):0;var o=e.length;return r<0&&(r=br(o+r,0)),ll(e)?r<=o&&e.indexOf(t,r)>-1:!!o&&Pt(e,t,r)>-1},Lr.indexOf=function(e,t,r){var n=null==e?0:e.length;if(!n)return-1;var o=null==r?0:pl(r);return o<0&&(o=br(n+o,0)),Pt(e,t,o)},Lr.inRange=function(t,r,n){return r=hl(r),n===e?(n=r,r=0):n=hl(n),function(e,t,r){return e>=vr(t,r)&&e<br(t,r)}(t=ml(t),r,n)},Lr.invoke=Tl,Lr.isArguments=Wa,Lr.isArray=Ya,Lr.isArrayBuffer=Va,Lr.isArrayLike=Ua,Lr.isArrayLikeObject=Ka,Lr.isBoolean=function(e){return!0===e||!1===e||tl(e)&&Sn(e)==m},Lr.isBuffer=qa,Lr.isDate=Za,Lr.isElement=function(e){return tl(e)&&1===e.nodeType&&!ol(e)},Lr.isEmpty=function(e){if(null==e)return!0;if(Ua(e)&&(Ya(e)||"string"==typeof e||"function"==typeof e.splice||qa(e)||dl(e)||Wa(e)))return!e.length;var t=gi(e);if(t==w||t==k)return!e.size;if(Di(e))return!jn(e).length;for(var r in e)if(Be.call(e,r))return!1;return!0},Lr.isEqual=function(e,t){return In(e,t)},Lr.isEqualWith=function(t,r,n){var o=(n="function"==typeof n?n:e)?n(t,r):e;return o===e?In(t,r,e,n):!!o},Lr.isError=Ga,Lr.isFinite=function(e){return"number"==typeof e&&Vt(e)},Lr.isFunction=Xa,Lr.isInteger=Ja,Lr.isLength=Qa,Lr.isMap=rl,Lr.isMatch=function(e,t){return e===t||Mn(e,t,ui(t))},Lr.isMatchWith=function(t,r,n){return n="function"==typeof n?n:e,Mn(t,r,ui(r),n)},Lr.isNaN=function(e){return nl(e)&&e!=+e},Lr.isNative=function(e){if(Ci(e))throw new Ce("Unsupported core-js use. Try https://npms.io/search?q=ponyfill.");return An(e)},Lr.isNil=function(e){return null==e},Lr.isNull=function(e){return null===e},Lr.isNumber=nl,Lr.isObject=el,Lr.isObjectLike=tl,Lr.isPlainObject=ol,Lr.isRegExp=il,Lr.isSafeInteger=function(e){return Ja(e)&&e>=-9007199254740991&&e<=c},Lr.isSet=al,Lr.isString=ll,Lr.isSymbol=sl,Lr.isTypedArray=dl,Lr.isUndefined=function(t){return t===e},Lr.isWeakMap=function(e){return tl(e)&&gi(e)==O},Lr.isWeakSet=function(e){return tl(e)&&"[object WeakSet]"==Sn(e)},Lr.join=function(e,t){return null==e?"":gr.call(e,t)},Lr.kebabCase=Yl,Lr.last=Gi,Lr.lastIndexOf=function(t,r,n){var o=null==t?0:t.length;if(!o)return-1;var i=o;return n!==e&&(i=(i=pl(n))<0?br(o+i,0):vr(i,o-1)),r==r?function(e,t,r){for(var n=r+1;n--;)if(e[n]===t)return n;return n}(t,r,i):Lt(t,Ht,i,!0)},Lr.lowerCase=Vl,Lr.lowerFirst=Ul,Lr.lt=cl,Lr.lte=ul,Lr.max=function(t){return t&&t.length?gn(t,ns,kn):e},Lr.maxBy=function(t,r){return t&&t.length?gn(t,di(r,2),kn):e},Lr.mean=function(e){return Wt(e,ns)},Lr.meanBy=function(e,t){return Wt(e,di(t,2))},Lr.min=function(t){return t&&t.length?gn(t,ns,Rn):e},Lr.minBy=function(t,r){return t&&t.length?gn(t,di(r,2),Rn):e},Lr.stubArray=gs,Lr.stubFalse=ms,Lr.stubObject=function(){return{}},Lr.stubString=function(){return""},Lr.stubTrue=function(){return!0},Lr.multiply=$s,Lr.nth=function(t,r){return t&&t.length?Wn(t,pl(r)):e},Lr.noConflict=function(){return ft._===this&&(ft._=Pe),this},Lr.noop=ss,Lr.now=ka,Lr.pad=function(e,t,r){e=vl(e);var n=(t=pl(t))?cr(e):0;if(!t||n>=t)return e;var o=(t-n)/2;return Vo(mt(o),r)+e+Vo(pt(o),r)},Lr.padEnd=function(e,t,r){e=vl(e);var n=(t=pl(t))?cr(e):0;return t&&n<t?e+Vo(t-n,r):e},Lr.padStart=function(e,t,r){e=vl(e);var n=(t=pl(t))?cr(e):0;return t&&n<t?Vo(t-n,r)+e:e},Lr.parseInt=function(e,t,r){return r||null==t?t=0:t&&(t=+t),xr(vl(e).replace(re,""),t||0)},Lr.random=function(t,r,n){if(n&&"boolean"!=typeof n&&xi(t,r,n)&&(r=n=e),n===e&&("boolean"==typeof r?(n=r,r=e):"boolean"==typeof t&&(n=t,t=e)),t===e&&r===e?(t=0,r=1):(t=hl(t),r===e?(r=t,t=0):r=hl(r)),t>r){var o=t;t=r,r=o}if(n||t%1||r%1){var i=wr();return vr(t+i*(r-t+st("1e-"+((i+"").length-1))),r)}return qn(t,r)},Lr.reduce=function(e,t,r){var n=Ya(e)?At:Ut,o=arguments.length<3;return n(e,di(t,4),r,o,fn)},Lr.reduceRight=function(e,t,r){var n=Ya(e)?Bt:Ut,o=arguments.length<3;return n(e,di(t,4),r,o,hn)},Lr.repeat=function(t,r,n){return r=(n?xi(t,r,n):r===e)?1:pl(r),Zn(vl(t),r)},Lr.replace=function(){var e=arguments,t=vl(e[0]);return e.length<3?t:t.replace(e[1],e[2])},Lr.result=function(t,r,n){var o=-1,i=(r=xo(r,t)).length;for(i||(i=1,t=e);++o<i;){var a=null==t?e:t[zi(r[o])];a===e&&(o=i,a=n),t=Xa(a)?a.call(t):a}return t},Lr.round=Cs,Lr.runInContext=ne,Lr.sample=function(e){return(Ya(e)?Gr:Xn)(e)},Lr.size=function(e){if(null==e)return 0;if(Ua(e))return ll(e)?cr(e):e.length;var t=gi(e);return t==w||t==k?e.size:jn(e).length},Lr.snakeCase=Kl,Lr.some=function(t,r,n){var o=Ya(t)?jt:oo;return n&&xi(t,r,n)&&(r=e),o(t,di(r,3))},Lr.sortedIndex=function(e,t){return io(e,t)},Lr.sortedIndexBy=function(e,t,r){return ao(e,t,di(r,2))},Lr.sortedIndexOf=function(e,t){var r=null==e?0:e.length;if(r){var n=io(e,t);if(n<r&&Pa(e[n],t))return n}return-1},Lr.sortedLastIndex=function(e,t){return io(e,t,!0)},Lr.sortedLastIndexBy=function(e,t,r){return ao(e,t,di(r,2),!0)},Lr.sortedLastIndexOf=function(e,t){if(null!=e&&e.length){var r=io(e,t,!0)-1;if(Pa(e[r],t))return r}return-1},Lr.startCase=ql,Lr.startsWith=function(e,t,r){return e=vl(e),r=null==r?0:ln(pl(r),0,e.length),t=co(t),e.slice(r,r+t.length)==t},Lr.subtract=Ds,Lr.sum=function(e){return e&&e.length?Kt(e,ns):0},Lr.sumBy=function(e,t){return e&&e.length?Kt(e,di(t,2)):0},Lr.template=function(t,r,n){var o=Lr.templateSettings;n&&xi(t,r,n)&&(r=e),t=vl(t),r=wl({},r,o,Qo);var i,a,l=wl({},r.imports,o.imports,Qo),s=_l(l),d=Xt(l,s),c=0,u=r.interpolate||ve,f="__p += '",h=Ee((r.escape||ve).source+"|"+u.source+"|"+(u===G?ce:ve).source+"|"+(r.evaluate||ve).source+"|$","g"),p="//# sourceURL="+(Be.call(r,"sourceURL")?(r.sourceURL+"").replace(/\s/g," "):"lodash.templateSources["+ ++ot+"]")+"\n";t.replace(h,(function(e,r,n,o,l,s){return n||(n=o),f+=t.slice(c,s).replace(ye,nr),r&&(i=!0,f+="' +\n__e("+r+") +\n'"),l&&(a=!0,f+="';\n"+l+";\n__p += '"),n&&(f+="' +\n((__t = ("+n+")) == null ? '' : __t) +\n'"),c=s+e.length,e})),f+="';\n";var g=Be.call(r,"variable")&&r.variable;if(g){if(se.test(g))throw new Ce("Invalid `variable` option passed into `_.template`")}else f="with (obj) {\n"+f+"\n}\n";f=(a?f.replace(N,""):f).replace(H,"$1").replace(W,"$1;"),f="function("+(g||"obj")+") {\n"+(g?"":"obj || (obj = {});\n")+"var __t, __p = ''"+(i?", __e = _.escape":"")+(a?", __j = Array.prototype.join;\nfunction print() { __p += __j.call(arguments, '') }\n":";\n")+f+"return __p\n}";var m=Jl((function(){return De(s,p+"return "+f).apply(e,d)}));if(m.source=f,Ga(m))throw m;return m},Lr.times=function(e,t){if((e=pl(e))<1||e>c)return[];var r=f,n=vr(e,f);t=di(t),e-=f;for(var o=qt(n,t);++r<e;)t(r);return o},Lr.toFinite=hl,Lr.toInteger=pl,Lr.toLength=gl,Lr.toLower=function(e){return vl(e).toLowerCase()},Lr.toNumber=ml,Lr.toSafeInteger=function(e){return e?ln(pl(e),-9007199254740991,c):0===e?e:0},Lr.toString=vl,Lr.toUpper=function(e){return vl(e).toUpperCase()},Lr.trim=function(t,r,n){if((t=vl(t))&&(n||r===e))return Zt(t);if(!t||!(r=co(r)))return t;var o=ur(t),i=ur(r);return $o(o,Qt(o,i),er(o,i)+1).join("")},Lr.trimEnd=function(t,r,n){if((t=vl(t))&&(n||r===e))return t.slice(0,fr(t)+1);if(!t||!(r=co(r)))return t;var o=ur(t);return $o(o,0,er(o,ur(r))+1).join("")},Lr.trimStart=function(t,r,n){if((t=vl(t))&&(n||r===e))return t.replace(re,"");if(!t||!(r=co(r)))return t;var o=ur(t);return $o(o,Qt(o,ur(r))).join("")},Lr.truncate=function(t,r){var n=30,o="...";if(el(r)){var i="separator"in r?r.separator:i;n="length"in r?pl(r.length):n,o="omission"in r?co(r.omission):o}var a=(t=vl(t)).length;if(or(t)){var l=ur(t);a=l.length}if(n>=a)return t;var s=n-cr(o);if(s<1)return o;var d=l?$o(l,0,s).join(""):t.slice(0,s);if(i===e)return d+o;if(l&&(s+=d.length-s),il(i)){if(t.slice(s).search(i)){var c,u=d;for(i.global||(i=Ee(i.source,vl(ue.exec(i))+"g")),i.lastIndex=0;c=i.exec(u);)var f=c.index;d=d.slice(0,f===e?s:f)}}else if(t.indexOf(co(i),s)!=s){var h=d.lastIndexOf(i);h>-1&&(d=d.slice(0,h))}return d+o},Lr.unescape=function(e){return(e=vl(e))&&U.test(e)?e.replace(Y,hr):e},Lr.uniqueId=function(e){var t=++je;return vl(e)+t},Lr.upperCase=Zl,Lr.upperFirst=Gl,Lr.each=va,Lr.eachRight=ya,Lr.first=Ui,ls(Lr,(bs={},xn(Lr,(function(e,t){Be.call(Lr.prototype,t)||(bs[t]=e)})),bs),{chain:!1}),Lr.VERSION="4.17.23",kt(["bind","bindKey","curry","curryRight","partial","partialRight"],(function(e){Lr[e].placeholder=Lr})),kt(["drop","take"],(function(t,r){Wr.prototype[t]=function(n){n=n===e?1:br(pl(n),0);var o=this.__filtered__&&!r?new Wr(this):this.clone();return o.__filtered__?o.__takeCount__=vr(n,o.__takeCount__):o.__views__.push({size:vr(n,f),type:t+(o.__dir__<0?"Right":"")}),o},Wr.prototype[t+"Right"]=function(e){return this.reverse()[t](e).reverse()}})),kt(["filter","map","takeWhile"],(function(e,t){var r=t+1,n=1==r||3==r;Wr.prototype[e]=function(e){var t=this.clone();return t.__iteratees__.push({iteratee:di(e,3),type:r}),t.__filtered__=t.__filtered__||n,t}})),kt(["head","last"],(function(e,t){var r="take"+(t?"Right":"");Wr.prototype[e]=function(){return this[r](1).value()[0]}})),kt(["initial","tail"],(function(e,t){var r="drop"+(t?"":"Right");Wr.prototype[e]=function(){return this.__filtered__?new Wr(this):this[r](1)}})),Wr.prototype.compact=function(){return this.filter(ns)},Wr.prototype.find=function(e){return this.filter(e).head()},Wr.prototype.findLast=function(e){return this.reverse().find(e)},Wr.prototype.invokeMap=Gn((function(e,t){return"function"==typeof e?new Wr(this):this.map((function(r){return Tn(r,e,t)}))})),Wr.prototype.reject=function(e){return this.filter(Ba(di(e)))},Wr.prototype.slice=function(t,r){t=pl(t);var n=this;return n.__filtered__&&(t>0||r<0)?new Wr(n):(t<0?n=n.takeRight(-t):t&&(n=n.drop(t)),r!==e&&(n=(r=pl(r))<0?n.dropRight(-r):n.take(r-t)),n)},Wr.prototype.takeRightWhile=function(e){return this.reverse().takeWhile(e).reverse()},Wr.prototype.toArray=function(){return this.take(f)},xn(Wr.prototype,(function(t,r){var n=/^(?:filter|find|map|reject)|While$/.test(r),o=/^(?:head|last)$/.test(r),i=Lr[o?"take"+("last"==r?"Right":""):r],a=o||/^find/.test(r);i&&(Lr.prototype[r]=function(){var r=this.__wrapped__,l=o?[1]:arguments,s=r instanceof Wr,d=l[0],c=s||Ya(r),u=function(e){var t=i.apply(Lr,Mt([e],l));return o&&f?t[0]:t};c&&n&&"function"==typeof d&&1!=d.length&&(s=c=!1);var f=this.__chain__,h=!!this.__actions__.length,p=a&&!f,g=s&&!h;if(!a&&c){r=g?r:new Wr(this);var m=t.apply(r,l);return m.__actions__.push({func:ha,args:[u],thisArg:e}),new Hr(m,f)}return p&&g?t.apply(this,l):(m=this.thru(u),p?o?m.value()[0]:m.value():m)})})),kt(["pop","push","shift","sort","splice","unshift"],(function(e){var t=Te[e],r=/^(?:push|sort|unshift)$/.test(e)?"tap":"thru",n=/^(?:pop|shift)$/.test(e);Lr.prototype[e]=function(){var e=arguments;if(n&&!this.__chain__){var o=this.value();return t.apply(Ya(o)?o:[],e)}return this[r]((function(r){return t.apply(Ya(r)?r:[],e)}))}})),xn(Wr.prototype,(function(e,t){var r=Lr[t];if(r){var n=r.name+"";Be.call(Tr,n)||(Tr[n]=[]),Tr[n].push({name:t,func:r})}})),Tr[No(e,2).name]=[{name:"wrapper",func:e}],Wr.prototype.clone=function(){var e=new Wr(this.__wrapped__);return e.__actions__=To(this.__actions__),e.__dir__=this.__dir__,e.__filtered__=this.__filtered__,e.__iteratees__=To(this.__iteratees__),e.__takeCount__=this.__takeCount__,e.__views__=To(this.__views__),e},Wr.prototype.reverse=function(){if(this.__filtered__){var e=new Wr(this);e.__dir__=-1,e.__filtered__=!0}else(e=this.clone()).__dir__*=-1;return e},Wr.prototype.value=function(){var e=this.__wrapped__.value(),t=this.__dir__,r=Ya(e),n=t<0,o=r?e.length:0,i=function(e,t,r){for(var n=-1,o=r.length;++n<o;){var i=r[n],a=i.size;switch(i.type){case"drop":e+=a;break;case"dropRight":t-=a;break;case"take":t=vr(t,e+a);break;case"takeRight":e=br(e,t-a)}}return{start:e,end:t}}(0,o,this.__views__),a=i.start,l=i.end,s=l-a,d=n?l:a-1,c=this.__iteratees__,u=c.length,f=0,h=vr(s,this.__takeCount__);if(!r||!n&&o==s&&h==s)return go(e,this.__actions__);var p=[];e:for(;s--&&f<h;){for(var g=-1,m=e[d+=t];++g<u;){var b=c[g],v=b.iteratee,y=b.type,x=v(m);if(2==y)m=x;else if(!x){if(1==y)continue e;break e}}p[f++]=m}return p},Lr.prototype.at=pa,Lr.prototype.chain=function(){return fa(this)},Lr.prototype.commit=function(){return new Hr(this.value(),this.__chain__)},Lr.prototype.next=function(){this.__values__===e&&(this.__values__=fl(this.value()));var t=this.__index__>=this.__values__.length;return{done:t,value:t?e:this.__values__[this.__index__++]}},Lr.prototype.plant=function(t){for(var r,n=this;n instanceof Nr;){var o=Li(n);o.__index__=0,o.__values__=e,r?i.__wrapped__=o:r=o;var i=o;n=n.__wrapped__}return i.__wrapped__=t,r},Lr.prototype.reverse=function(){var t=this.__wrapped__;if(t instanceof Wr){var r=t;return this.__actions__.length&&(r=new Wr(this)),(r=r.reverse()).__actions__.push({func:ha,args:[ea],thisArg:e}),new Hr(r,this.__chain__)}return this.thru(ea)},Lr.prototype.toJSON=Lr.prototype.valueOf=Lr.prototype.value=function(){return go(this.__wrapped__,this.__actions__)},Lr.prototype.first=Lr.prototype.head,Qe&&(Lr.prototype[Qe]=function(){return this}),Lr}();pt?((pt.exports=pr)._=pr,ht._=pr):ft._=pr}.call(Be);var pS=hS.exports;const gS=o.forwardRef(((n,o)=>{var i,{value:a,readOnly:s,"data-testid":c,maskRange:u,unmaskRange:h,maskRegex:p,maskTransformer:m,iconMask:b=e(Ce,{}),iconUnmask:v=e($e,{}),iconActiveColor:y,iconInactiveColor:x,maskChar:w="•",error:$,disableMask:C,transformInput:D,loadState:S,onMask:k,onUnmask:E,onChange:F,onFocus:O,onBlur:T,onTryAgain:_}=n,I=st(n,["value","readOnly","data-testid","maskRange","unmaskRange","maskRegex","maskTransformer","iconMask","iconUnmask","iconActiveColor","iconInactiveColor","maskChar","error","disableMask","transformInput","loadState","onMask","onUnmask","onChange","onFocus","onBlur","onTryAgain"]);const M=s&&pS.isEmpty(a),[A,B]=g(!C),[j,z]=g(a||""),[R]=g((()=>Hc.generate())),L=`${null!==(i=I.id)&&void 0!==i?i:R}-value`,P=l(null),N=l(null),H=l(null),W=l(!C),Y=I["aria-labelledby"];f(o,(()=>P.current),[]),d((()=>{z(a||"")}),[a]),d((()=>{var e,t;s&&("fail"===S&&(null===(e=N.current)||void 0===e||e.focus()),"success"===S&&(null===(t=H.current)||void 0===t||t.focus()))}),[s,S]);const V=e=>{X(!1),null==O||O(e)},U=e=>{X(!0),null==T||T(e)},K=e=>{let t=e.target.value;switch(D){case"uppercase":t=t.toUpperCase();break;case"lowercase":t=t.toLowerCase()}z(t),e.target.value=t,null==F||F(e)},q=()=>{s&&(null==_||_())},Z=e=>{e.preventDefault()},G=()=>{var e;const t=!A;X(t),t||null===(e=P.current)||void 0===e||e.focus()},X=e=>{W.current!==e&&(W.current=e,B(e),e?null==k||k():null==E||E())},J=()=>M?"-":A&&!C?Wc.maskValue(j,{maskChar:w,maskRange:u,unmaskRange:h,maskRegex:p,maskTransformer:m}):j,Q=()=>!(null==j?void 0:j.toString().length)||C,ee=()=>{if(M)return"-";if(A&&!C){return Wc.getMaskedDescription(j,"masked",u)||"Masked value"}return j},te=()=>{if(M)return e(r,{});const t=Q();return e(QD,{"data-testid":"icon-"+(A?"masked":"unmasked"),onMouseDown:t?void 0:Z,onClick:t?void 0:G,$isDisabled:t,$inactiveColor:x,$activeColor:y,"aria-hidden":"true",children:A?v:b})};return e("div",{"aria-busy":"loading"===S,children:(()=>{if(s)switch(S){case"fail":return t(lS,{ref:N,onClick:q,"data-testid":"try-again-button",type:"button",children:[t(oS,{children:[e(iS,{}),e(aS,{children:"Error"})]}),e(nS,{children:"Try again?"})]});case"loading":return t(eS,{children:[e(rS,{}),e(tS,{children:"Retrieving..."})]});default:return(()=>{const n=Q()||M;return t(r,{children:[e(Df,{id:L,children:ee()}),t(sS,{ref:H,"data-testid":"masked-input-readonly-button",onClick:n?void 0:G,type:"button","aria-labelledby":kf(L,Y),"aria-disabled":n,children:[e(dS,{children:J()}),!n&&e(cS,{children:A?e($e,{"data-testid":"masked-icon"}):e(Ce,{"data-testid":"unmasked-icon"})})]})]})})()}return e(JD,Object.assign({ref:P,"data-testid":`${c||"masked-input"}${A?"-masked":"-unmasked"}`,addon:{type:"custom",attributes:{children:te()},position:"right"},onFocus:s?void 0:V,onBlur:s?void 0:U,onClick:s?G:void 0,onChange:K,value:J(),readOnly:s,error:$,$isDisabled:Q()},I))})()})})),mS=o.forwardRef(((t,r)=>{const{label:n,errorMessage:o,id:i,"data-error-testid":a,"data-testid":l,layoutType:s,mobileCols:d,tabletCols:c,desktopCols:u}=t,f=st(t,["label","errorMessage","id","data-error-testid","data-testid","layoutType","mobileCols","tabletCols","desktopCols"]),[h]=g((()=>Hc.generate())),p=null!=i?i:`form-field-masked-input-${h}`;return e(cf,{id:p,label:n,errorMessage:o,disabled:f.disabled,"data-error-testid":a,layoutType:s,mobileCols:d,tabletCols:c,desktopCols:u,children:e(gS,Object.assign({ref:r,id:`${p}-base`,"data-testid":l?`${l}-base`:void 0,error:!!o},f))})})),bS=({selectedOptions:t,placeholder:r="Select",options:n,disabled:o,error:i,className:a,"data-testid":s,id:c,"aria-labelledby":u,"aria-describedby":f,"aria-invalid":h,enableSearch:p=!1,searchFunction:m,searchPlaceholder:b,valueExtractor:v,listExtractor:y,onSelectOptions:x,onShowOptions:w,onHideOptions:$,onRetry:C,optionsLoadState:D="success",optionTruncationType:S="end",renderListItem:k,hideNoResultsDisplay:E,noResultsDescription:F,customLabels:O,renderCustomCallToAction:T,onBlur:_,variant:I="default",readOnly:M,alignment:A,dropdownZIndex:B,maxSelectable:j,dropdownRootNode:z,dropdownWidth:R})=>{const{allSelectedLabel:L,multiSelectedLabel:P}=O||{},[N,H]=g(t||[]),[W,Y]=g(!1),[V,U]=g(!1),[K]=g((()=>Hc.generate())),q=l(null),Z=l(null);d((()=>{H(t||[])}),[t]);const G=()=>{N&&N.length>0||j?(H([]),re([])):(H(n),re(n))},X=(e,t)=>{const r=[...N],n=hy(N,(e=>(v?v(e):e)===t));n>-1?r.splice(n,1):r.push(e),H(r),re(r)},J=()=>{W&&(Y(!1),te(!1))},Q=()=>{V||W||U(!0)},ee=e=>{V&&!W&&q.current&&!q.current.contains(e.relatedTarget)&&(U(!1),null==_||_())},te=e=>{!e&&$&&$(),e&&w&&w()},re=e=>{x&&x(e)};return e(J$,{children:e($f,{enabled:!M&&!o,isOpen:W,renderElement:()=>e(Wh,{className:a,"data-testid":s,id:c,ref:q,tabIndex:-1,onFocus:Q,onBlur:ee,$focused:V,$disabled:o,$readOnly:M,$error:i,children:e(SC,{ref:Z,disabled:o,expanded:W,listboxId:K,popupRole:"listbox",readOnly:M,variant:I,"aria-labelledby":u,"aria-describedby":f,"aria-invalid":h,children:e(mf,{$disabled:o,children:N&&0!==N.length?e(bf,{$variant:I,children:n&&N.length===n.length?L||"All selected":P||`${N.length} selected`}):e(vf,{$truncateType:S,$variant:I,children:r})})})}),renderDropdown:()=>e($C,{listboxId:K,listItems:n,onSelectItem:X,onDismiss:J,valueExtractor:v,listExtractor:y,enableSearch:p,searchFunction:m,searchPlaceholder:b,multiSelect:!0,maxSelectable:j,selectedItems:N,onSelectAll:G,onRetry:C,itemsLoadState:D,itemTruncationType:S,renderListItem:k,hideNoResultsDisplay:E,noResultsDescription:F,customLabels:O,renderCustomCallToAction:T,variant:I,width:R,matchElementWidth:!0}),onOpen:()=>{Y(!0),te(!0),U(!0)},onClose:e=>{Y(!1),te(!1),"click"!==e&&(U(!1),null==_||_())},onDismiss:()=>{var e;null===(e=Z.current)||void 0===e||e.focus(),Y(!1),te(!1)},clickToToggle:!0,offset:8,alignment:A,fitAvailableHeight:!0,customZIndex:B,rootNode:z})})},vS=(e,t)=>{const[r,...n]=t;if(kD(e)||!r)return;const o=e.find((e=>e.key===r));return o?n.length?vS(o.subItems,n):o:void 0},yS=(e,t)=>{const r=[];for(const n of e)n.subItems?r.push(...yS(n.subItems,[...t,n.key])):r.push({value:n.value,label:n.label,keyPath:[...t,n.key]});return r},xS=({placeholder:t="Select",options:r,disabled:n,error:o,className:i,"data-testid":a,id:s,"aria-labelledby":c,"aria-describedby":u,"aria-invalid":f,selectedKeyPaths:h,mode:p,valueToStringFunction:m,enableSearch:b,searchPlaceholder:v,hideNoResultsDisplay:y,noResultsDescription:x,customLabels:w,readOnly:$,onSearch:C,onSelectOptions:D,onShowOptions:S,onHideOptions:k,onRetry:E,onBlur:F,optionsLoadState:O="success",optionTruncationType:T="end",variant:_="default",alignment:I,dropdownZIndex:M,dropdownWidth:A,dropdownRootNode:B})=>{const{multiSelectedLabel:j}=w||{},z=r,[R,L]=g(h?TD(h):new Set),[P,N]=g([]),[H,W]=g(!1),[Y,V]=g(!1),[U]=g((()=>Hc.generate())),K=l(null),q=l(null),Z=l(null);d((()=>{const e=h||[],t=((e,t)=>{const r=[];for(let n=0;n<t.length;n++){const o=t[n],i=vS(e,o);i&&r.push({value:i.value,label:i.label,keyPath:o})}return r})(z,e);L(TD(e)),N(t)}),[h,z]);const G=(e,t)=>{const r=t.map((e=>({keyPath:e.keyPath,label:e.item.label,value:e.item.value})));L(TD(e)),N(r),ne(e,r)},X=e=>{const t=oe(e),r=t.map((e=>e.keyPath));N(t),L(TD(r)),ne(r,t)},J=()=>{Y||H||V(!0)},Q=e=>{Y&&!H&&K.current&&!K.current.contains(e.relatedTarget)&&(V(!1),null==F||F())},ee=()=>{if(P.length>1)return j||`${P.length} selected`;const{label:e,value:t}=P[0];return m?m(t):e},te=e=>{if("middle"===T){let t=0;return Z&&Z.current&&(t=Z.current.getBoundingClientRect().width),Wc.truncateOneLine(e,t,120,6)}return e},re=e=>{!e&&k&&k(),e&&S&&S()},ne=(e,t)=>{if(D){const r=t.map((e=>e.value));D(e,r)}},oe=e=>{if(!0===e.checked)return P.filter((t=>{const r=t.keyPath.slice(0,e.keyPath.length);return!my(e.keyPath,r)}));{const t=[...P],r=e.hasSubItems?((e,t)=>{const r=vS(e,t);return r&&r.subItems?yS(r.subItems,t):[]})(z,e.keyPath):[{value:e.item.value,label:e.item.label,keyPath:e.keyPath}];return r.forEach((e=>{P.find((t=>my(t.keyPath,e.keyPath)))||t.push(e)})),t}};return e($f,{enabled:!$&&!n,isOpen:H,renderElement:()=>e(Wh,{className:i,"data-testid":a,id:s,ref:K,tabIndex:-1,onFocus:J,onBlur:Q,$focused:Y,$disabled:n,$readOnly:$,$error:o,children:e(SC,{ref:q,disabled:n,expanded:H,listboxId:U,popupRole:"tree",readOnly:$,variant:_,"aria-labelledby":c,"aria-describedby":u,"aria-invalid":f,children:e(mf,{ref:Z,$disabled:n,children:kD(P)?e(vf,{$truncateType:T,children:t}):e(bf,{$truncateType:T,children:te(ee())})})})}),renderDropdown:()=>e(RD,{listboxId:U,listItems:z,multiSelect:!0,selectedKeyPaths:R,itemsLoadState:O,itemTruncationType:T,enableSearch:b,searchPlaceholder:v,hideNoResultsDisplay:y,noResultsDescription:x,customLabels:w,onSelectItem:X,onSelectAll:G,onRetry:E,onSearch:C,variant:_,mode:p,width:A,matchElementWidth:!0}),onOpen:()=>{W(!0),re(!0),V(!0)},onClose:e=>{W(!1),re(!1),"click"!==e&&(V(!1),null==F||F())},onDismiss:()=>{var e;null===(e=q.current)||void 0===e||e.focus(),W(!1),re(!1)},clickToToggle:!0,offset:8,alignment:I,fitAvailableHeight:!0,customZIndex:M,rootNode:B})},wS=({placeholder:t="Select",options:r,disabled:n,error:o,className:i,"data-testid":a,id:s,"aria-labelledby":c,"aria-describedby":u,"aria-invalid":f,selectedKeyPath:h,mode:p,valueToStringFunction:m,enableSearch:b,searchPlaceholder:v,selectableCategory:y,hideNoResultsDisplay:x,noResultsDescription:w,customLabels:$,readOnly:C,onBlur:D,onSearch:S,onSelectOption:k,onShowOptions:E,onHideOptions:F,onRetry:O,optionsLoadState:T="success",optionTruncationType:_="end",variant:I="default",alignment:M,dropdownZIndex:A,dropdownWidth:B,dropdownRootNode:j})=>{const z=r,[R,L]=g(h?TD([h]):new Set),[P,N]=g(),[H,W]=g(!1),[Y,V]=g(!1),[U]=g((()=>Hc.generate())),K=l(null),q=l(null),Z=l(null);d((()=>{L(h?TD([h]):new Set);const e=FD(z,h||[]);N(null!=e?e:void 0)}),[h,z]);const G=e=>{var t;const{keyPath:r,item:{label:n,value:o}}=e;L(TD([r])),N({label:n,value:o}),W(!1),te(!1),null===(t=q.current)||void 0===t||t.focus(),null==k||k(r,o)},X=()=>{Y||H||V(!0)},J=e=>{Y&&!H&&K.current&&!K.current.contains(e.relatedTarget)&&(V(!1),null==D||D())},Q=()=>{if(!P)return"";const{label:e,value:t}=P;return m?m(t):e},ee=e=>{if("middle"===_){let t=0;return Z&&Z.current&&(t=Z.current.getBoundingClientRect().width),Wc.truncateOneLine(e,t,120,6)}return e},te=e=>{!e&&F&&F(),e&&E&&E()};return e($f,{enabled:!C&&!n,isOpen:H,renderElement:()=>e(Wh,{className:i,"data-testid":a,id:s,ref:K,tabIndex:-1,onFocus:X,onBlur:J,$focused:Y,$disabled:n,$readOnly:C,$error:o,children:e(SC,{ref:q,disabled:n,expanded:H,listboxId:U,popupRole:"tree",readOnly:C,variant:I,"aria-labelledby":c,"aria-describedby":u,"aria-invalid":f,children:e(mf,{ref:Z,$disabled:n,children:kD(P)?e(vf,{$truncateType:_,children:t}):e(bf,{$truncateType:_,children:ee(Q())})})})}),renderDropdown:()=>e(RD,{listboxId:U,listItems:z,selectedKeyPaths:R,selectableCategory:y,itemsLoadState:T,itemTruncationType:_,enableSearch:b,searchPlaceholder:v,hideNoResultsDisplay:x,noResultsDescription:w,customLabels:$,onSelectItem:G,onRetry:O,onSearch:S,variant:I,mode:p,width:B,matchElementWidth:!0}),onOpen:()=>{W(!0),te(!0),V(!0)},onClose:e=>{W(!1),te(!1),"click"!==e&&(V(!1),null==D||D())},onDismiss:()=>{var e;null===(e=q.current)||void 0===e||e.focus(),W(!1),te(!1)},clickToToggle:!0,offset:8,alignment:M,fitAvailableHeight:!0,customZIndex:A,rootNode:j})};var $S=function(e,t,r,n){var o=-1,i=null==e?0:e.length;for(n&&i&&(r=e[++o]);++o<i;)r=t(r,e[o],o,e);return r};var CS=function(e){return function(t,r,n){for(var o=-1,i=Object(t),a=n(t),l=a.length;l--;){var s=a[e?l:++o];if(!1===r(i[s],s,i))break}return t}},DS=CS(),SS=mb;var kS=fb;var ES=function(e,t){return function(r,n){if(null==r)return r;if(!kS(r))return e(r,n);for(var o=r.length,i=t?o:-1,a=Object(r);(t?i--:++i<o)&&!1!==n(a[i],i,a););return r}}((function(e,t){return e&&DS(e,t,SS)}));var FS=$S,OS=ES,TS=Wv,_S=function(e,t,r,n,o){return o(e,(function(e,o,i){r=n?(n=!1,e):t(r,e,o,i)})),r},IS=fr;var MS=je((function(e,t,r){var n=IS(e)?FS:_S,o=arguments.length<3;return n(e,TS(t),r,o,OS)}));const AS=[["Afghanistan",["asia"],"af","93"],["Albania",["europe"],"al","355"],["Algeria",["africa","north-africa"],"dz","213"],["Andorra",["europe"],"ad","376"],["Angola",["africa"],"ao","244"],["Antigua and Barbuda",["america","carribean"],"ag","1268"],["Argentina",["america","south-america"],"ar","54","(..) ........"],["Armenia",["asia","ex-ussr"],"am","374",".. ......"],["Aruba",["america","carribean"],"aw","297"],["Australia",["oceania"],"au","61","(..) .... ...."],["Austria",["europe","eu-union"],"at","43"],["Azerbaijan",["asia","ex-ussr"],"az","994","(..) ... .. .."],["Bahamas",["america","carribean"],"bs","1242"],["Bahrain",["middle-east"],"bh","973"],["Bangladesh",["asia"],"bd","880"],["Barbados",["america","carribean"],"bb","1246"],["Belarus",["europe","ex-ussr"],"by","375","(..) ... .. .."],["Belgium",["europe","eu-union"],"be","32","... .. .. .."],["Belize",["america","central-america"],"bz","501"],["Benin",["africa"],"bj","229"],["Bhutan",["asia"],"bt","975"],["Bolivia",["america","south-america"],"bo","591"],["Bosnia and Herzegovina",["europe","ex-yugos"],"ba","387"],["Botswana",["africa"],"bw","267"],["Brazil",["america","south-america"],"br","55","(..) ........."],["British Indian Ocean Territory",["asia"],"io","246"],["Brunei",["asia"],"bn","673"],["Bulgaria",["europe","eu-union"],"bg","359"],["Burkina Faso",["africa"],"bf","226"],["Burundi",["africa"],"bi","257"],["Cambodia",["asia"],"kh","855"],["Cameroon",["africa"],"cm","237"],["Canada",["america","north-america"],"ca","1","(...) ... ...."],["Cape Verde",["africa"],"cv","238"],["Caribbean Netherlands",["america","carribean"],"bq","599",""],["Central African Republic",["africa"],"cf","236"],["Chad",["africa"],"td","235"],["Chile",["america","south-america"],"cl","56"],["China",["asia"],"cn","86",".. ........."],["Colombia",["america","south-america"],"co","57","... ... ...."],["Comoros",["africa"],"km","269"],["Congo",["africa"],"cd","243"],["Congo",["africa"],"cg","242"],["Costa Rica",["america","central-america"],"cr","506",".... ...."],["Côte d’Ivoire",["africa"],"ci","225",".. .. .. .."],["Croatia",["europe","eu-union","ex-yugos"],"hr","385"],["Cuba",["america","carribean"],"cu","53"],["Curaçao",["america","carribean"],"cw","599",""],["Cyprus",["europe","eu-union"],"cy","357",".. ......"],["Czech Republic",["europe","eu-union"],"cz","420","... ... ..."],["Denmark",["europe","eu-union","baltic"],"dk","45",".. .. .. .."],["Djibouti",["africa"],"dj","253"],["Dominica",["america","carribean"],"dm","1767"],["Dominican Republic",["america","carribean"],"do","1",""],["Ecuador",["america","south-america"],"ec","593"],["Egypt",["africa","north-africa"],"eg","20"],["El Salvador",["america","central-america"],"sv","503",".... ...."],["Equatorial Guinea",["africa"],"gq","240"],["Eritrea",["africa"],"er","291"],["Estonia",["europe","eu-union","ex-ussr","baltic"],"ee","372",".... ......"],["Ethiopia",["africa"],"et","251"],["Fiji",["oceania"],"fj","679"],["Finland",["europe","eu-union","baltic"],"fi","358",".. ... .. .."],["France",["europe","eu-union"],"fr","33",". .. .. .. .."],["French Guiana",["america","south-america"],"gf","594"],["French Polynesia",["oceania"],"pf","689"],["Gabon",["africa"],"ga","241"],["Gambia",["africa"],"gm","220"],["Georgia",["asia","ex-ussr"],"ge","995"],["Germany",["europe","eu-union","baltic"],"de","49",".... ........"],["Ghana",["africa"],"gh","233"],["Greece",["europe","eu-union"],"gr","30"],["Grenada",["america","carribean"],"gd","1473"],["Guadeloupe",["america","carribean"],"gp","590","",0],["Guam",["oceania"],"gu","1671"],["Guatemala",["america","central-america"],"gt","502",".... ...."],["Guinea",["africa"],"gn","224"],["Guinea-Bissau",["africa"],"gw","245"],["Guyana",["america","south-america"],"gy","592"],["Haiti",["america","carribean"],"ht","509",".... ...."],["Honduras",["america","central-america"],"hn","504"],["Hong Kong",["asia"],"hk","852",".... ...."],["Hungary",["europe","eu-union"],"hu","36"],["Iceland",["europe"],"is","354","... ...."],["India",["asia"],"in","91","..... ....."],["Indonesia",["asia"],"id","62"],["Iran",["middle-east"],"ir","98","... ... ...."],["Iraq",["middle-east"],"iq","964"],["Ireland",["europe","eu-union"],"ie","353",".. ......."],["Israel",["middle-east"],"il","972","... ... ...."],["Italy",["europe","eu-union"],"it","39","... ......."],["Jamaica",["america","carribean"],"jm","1876"],["Japan",["asia"],"jp","81",".. .... ...."],["Jordan",["middle-east"],"jo","962"],["Kazakhstan",["asia","ex-ussr"],"kz","7","... ... .. .."],["Kenya",["africa"],"ke","254"],["Kiribati",["oceania"],"ki","686"],["Kosovo",["europe","ex-yugos"],"xk","383"],["Kuwait",["middle-east"],"kw","965"],["Kyrgyzstan",["asia","ex-ussr"],"kg","996","... ... ..."],["Laos",["asia"],"la","856"],["Latvia",["europe","eu-union","ex-ussr","baltic"],"lv","371",".. ... ..."],["Lebanon",["middle-east"],"lb","961"],["Lesotho",["africa"],"ls","266"],["Liberia",["africa"],"lr","231"],["Libya",["africa","north-africa"],"ly","218"],["Liechtenstein",["europe"],"li","423"],["Lithuania",["europe","eu-union","ex-ussr","baltic"],"lt","370"],["Luxembourg",["europe","eu-union"],"lu","352"],["Macau",["asia"],"mo","853"],["Macedonia",["europe","ex-yugos"],"mk","389"],["Madagascar",["africa"],"mg","261"],["Malawi",["africa"],"mw","265"],["Malaysia",["asia"],"my","60",".. .... ...."],["Maldives",["asia"],"mv","960"],["Mali",["africa"],"ml","223"],["Malta",["europe","eu-union"],"mt","356"],["Marshall Islands",["oceania"],"mh","692"],["Martinique",["america","carribean"],"mq","596"],["Mauritania",["africa"],"mr","222"],["Mauritius",["africa"],"mu","230"],["Mexico",["america","central-america"],"mx","52","... ... ...."],["Micronesia",["oceania"],"fm","691"],["Moldova",["europe"],"md","373","(..) .. .. .."],["Monaco",["europe"],"mc","377"],["Mongolia",["asia"],"mn","976"],["Montenegro",["europe","ex-yugos"],"me","382"],["Morocco",["africa","north-africa"],"ma","212"],["Mozambique",["africa"],"mz","258"],["Myanmar",["asia"],"mm","95"],["Namibia",["africa"],"na","264"],["Nauru",["africa"],"nr","674"],["Nepal",["asia"],"np","977"],["Netherlands",["europe","eu-union"],"nl","31",".. ........"],["New Caledonia",["oceania"],"nc","687"],["New Zealand",["oceania"],"nz","64","... ... ...."],["Nicaragua",["america","central-america"],"ni","505"],["Niger",["africa"],"ne","227"],["Nigeria",["africa"],"ng","234"],["North Korea",["asia"],"kp","850"],["Norway",["europe","baltic"],"no","47","... .. ..."],["Oman",["middle-east"],"om","968"],["Pakistan",["asia"],"pk","92","... ......."],["Palau",["oceania"],"pw","680"],["Palestine",["middle-east"],"ps","970"],["Panama",["america","central-america"],"pa","507"],["Papua New Guinea",["oceania"],"pg","675"],["Paraguay",["america","south-america"],"py","595"],["Peru",["america","south-america"],"pe","51"],["Philippines",["asia"],"ph","63",".... ......."],["Poland",["europe","eu-union","baltic"],"pl","48","... ... ..."],["Portugal",["europe","eu-union"],"pt","351"],["Puerto Rico",["america","carribean"],"pr","1",""],["Qatar",["middle-east"],"qa","974"],["Réunion",["africa"],"re","262"],["Romania",["europe","eu-union"],"ro","40"],["Russia",["europe","asia","ex-ussr","baltic"],"ru","7","(...) ... .. .."],["Rwanda",["africa"],"rw","250"],["Saint Kitts and Nevis",["america","carribean"],"kn","1869"],["Saint Lucia",["america","carribean"],"lc","1758"],["Saint Vincent and the Grenadines",["america","carribean"],"vc","1784"],["Samoa",["oceania"],"ws","685"],["San Marino",["europe"],"sm","378"],["São Tomé and Príncipe",["africa"],"st","239"],["Saudi Arabia",["middle-east"],"sa","966"],["Senegal",["africa"],"sn","221"],["Serbia",["europe","ex-yugos"],"rs","381"],["Seychelles",["africa"],"sc","248"],["Sierra Leone",["africa"],"sl","232"],["Singapore",["asia"],"sg","65",".... ...."],["Slovakia",["europe","eu-union"],"sk","421"],["Slovenia",["europe","eu-union","ex-yugos"],"si","386"],["Solomon Islands",["oceania"],"sb","677"],["Somalia",["africa"],"so","252"],["South Africa",["africa"],"za","27"],["South Korea",["asia"],"kr","82","... .... ...."],["South Sudan",["africa","north-africa"],"ss","211"],["Spain",["europe","eu-union"],"es","34","... ... ..."],["Sri Lanka",["asia"],"lk","94"],["Sudan",["africa"],"sd","249"],["Suriname",["america","south-america"],"sr","597"],["Swaziland",["africa"],"sz","268"],["Sweden",["europe","eu-union","baltic"],"se","46","(...) ... ..."],["Switzerland",["europe"],"ch","41",".. ... .. .."],["Syria",["middle-east"],"sy","963"],["Taiwan",["asia"],"tw","886"],["Tajikistan",["asia","ex-ussr"],"tj","992"],["Tanzania",["africa"],"tz","255"],["Thailand",["asia"],"th","66"],["Timor-Leste",["asia"],"tl","670"],["Togo",["africa"],"tg","228"],["Tonga",["oceania"],"to","676"],["Trinidad and Tobago",["america","carribean"],"tt","1868"],["Tunisia",["africa","north-africa"],"tn","216"],["Turkey",["europe"],"tr","90","... ... .. .."],["Turkmenistan",["asia","ex-ussr"],"tm","993"],["Tuvalu",["asia"],"tv","688"],["Uganda",["africa"],"ug","256"],["Ukraine",["europe","ex-ussr"],"ua","380","(..) ... .. .."],["United Arab Emirates",["middle-east"],"ae","971"],["United Kingdom",["europe","eu-union"],"gb","44",".... ......"],["United States",["america","north-america"],"us","1","(...) ... ...."],["Uruguay",["america","south-america"],"uy","598"],["Uzbekistan",["asia","ex-ussr"],"uz","998",".. ... .. .."],["Vanuatu",["oceania"],"vu","678"],["Vatican City",["europe"],"va","39",".. .... ...."],["Venezuela",["america","south-america"],"ve","58"],["Vietnam",["asia"],"vn","84"],["Yemen",["middle-east"],"ye","967"],["Zambia",["africa"],"zm","260"],["Zimbabwe",["africa"],"zw","263"]],BS=(e,t,r,n)=>r?e+"".padEnd(t.length,".")+" "+r:e+"".padEnd(t.length,".")+" "+n;var jS;!function(e){e.getCountries=()=>[].concat(...AS.map((e=>({name:e[0],regions:e[1],iso2:e[2],countryCode:e[3],format:BS("+",e[3],e[4],"... ... ... ... ..")})))),e.formatNumber=(e="",t)=>{if(!t)return e;const r=e.replace(/[\s()]+/g,""),{format:n}=t,o=n.split(" ");o.shift();const i=o.join(" ");return MS(i,((e,t)=>{if(0===e.remainingText.length)return e;if("."!==t)return{formattedText:e.formattedText+t,remainingText:e.remainingText};const r=e.remainingText.slice(0,1),n=e.remainingText.slice(1);return{formattedText:e.formattedText+r,remainingText:n}}),{formattedText:"",remainingText:r}).formattedText}}(jS||(jS={}));const zS=t=>{var{onChange:r,value:n,allowClear:o,onClear:i,onBlur:a,error:s,fixedCountry:c=!1,optionPlaceholder:u="Select",optionSearchPlaceholder:f,enableSearch:h,onHideOptions:p,onShowOptions:m,placeholder:b,autoComplete:v,noBorder:y=!1}=t,x=st(t,["onChange","value","allowClear","onClear","onBlur","error","fixedCountry","optionPlaceholder","optionSearchPlaceholder","enableSearch","onHideOptions","onShowOptions","placeholder","autoComplete","noBorder"]);const[w]=g(jS.getCountries()),[$,C]=g(void 0),[D,S]=g(""),k=l(null),E=Kc({ref:k,formatter:e=>jS.formatNumber(e.replace(/[^0-9]/g,""),$)});d((()=>{const e=w.filter((e=>e.countryCode===RS(null==n?void 0:n.countryCode)))[0];C(e),S(jS.formatNumber(null==n?void 0:n.number,e))}),[n]);const F=e=>{T(D,e),r&&O(D,e)},O=(e,t)=>{const n=jS.formatNumber(e,t);null==r||r({number:n.replace(/[\s()]+/g,""),countryCode:t&&LS(t.countryCode)})},T=(e,t)=>{S(jS.formatNumber(e,t)),C(t)};return e(GD,Object.assign({ref:k,value:D,onChange:()=>{const e=E();if(!e)return;const{nextValue:t,updateCaretPosition:n}=e;n(),T(t,$),r&&O(t,$)},allowClear:o&&!!D,onClear:()=>{i?i():S("")},onBlur:a,error:s,placeholder:b,addon:c?{type:"label",attributes:{value:LS(null==$?void 0:$.countryCode)}}:{type:"list",attributes:{"aria-label":"Country code",placeholder:u,options:w,selectedOption:$,enableSearch:h,searchPlaceholder:f,valueExtractor:e=>`+${e.countryCode}`,listExtractor:e=>({title:e.name,secondaryLabel:LS(e.countryCode)}),onSelectOption:F,onHideOptions:p,onShowOptions:m}},inputMode:"numeric",autoComplete:v,"aria-label":"Enter phone number",noBorder:y},x))},RS=e=>e?e.replace("+",""):"",LS=e=>e?e.includes("+")?e:`+${e}`:"",PS=F.div`
    display: flex;
    flex-direction: column;
`,NS=F.div`
    display: flex;
`,HS=F.div`
    display: flex;
    align-items: center;
    width: ${e=>e.$isMaxWidth?"100%":"auto"};
    border-radius: ${xa.sm} 0 0 ${xa.sm};
    box-shadow: inset 1px 0 0 ${ga.border},
        inset 0 1px 0 ${ga.border}, inset 0 -1px 0 ${ga.border};

    &:focus-within {
        box-shadow: inset 2px 0 0 ${ga["border-focus"]},
            inset 0 2px 0 ${ga["border-focus"]},
            inset 0 -2px 0 ${ga["border-focus"]};
    }

    ${e=>e.$error?O`
                box-shadow: inset 1px 0 0 ${ga["border-error"]},
                    inset 0 1px 0 ${ga["border-error"]},
                    inset 0 -1px 0 ${ga["border-error"]};

                &:focus-within {
                    box-shadow: inset 2px 0 0 ${ga["border-error-focus"]},
                        inset 0 2px 0 ${ga["border-error-focus"]},
                        inset 0 -2px 0 ${ga["border-error-focus"]};
                }
            `:e.$disabled?O`
                box-shadow: inset 0 0 0 1px ${ga.border};
                border-radius: ${xa.sm};
                background: ${ga["bg-disabled"]};
                color: ${ga["text-disabled"]};
                &:focus-within {
                    box-shadow: inset 0 0 0 2px ${ga.border};
                }

                /* Spacer to maintain width when disabled */
                ${!e.$isMaxWidth&&O`
                    &::after {
                        content: "";
                        min-width: 120px;
                        flex-shrink: 0;
                    }

                    /* Hide spacer on mobile to prevent text coverage */
                    ${Ca.MaxWidth.sm} {
                        &::after {
                            display: none;
                        }
                    }
                `}
            `:e.$readonly?O`
                box-shadow: none;
                border-radius: ${xa.sm};
                &:focus-within {
                    box-shadow: inset 0 0 0 2px ${ga["border-focus"]};
                }
            `:void 0}
`,WS=F.div`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0 ${ya["spacing-12"]};
    color: ${ga["icon-success"]};
    flex-shrink: 0;

    svg {
        width: 1.25rem;
        height: 1.25rem;
    }
`,YS=F(Pf.Default)`
    min-width: 120px;
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
    flex-shrink: 0;
    ${Ca.MaxWidth.sm} {
        width: fit-content;
    }
`,VS=F(GD)`
    padding: 0 ${ya["spacing-16"]};
    width: 100%;
    background: transparent;

    ${e=>e.disabled&&O`
            input {
                color: ${ga["text-disabled"]};
            }
        `}

    ${e=>e.readOnly&&O`
            padding: 0;
        `}
`,US=F(zS)`
    padding: 0 ${ya["spacing-16"]};
    background: transparent;

    ${e=>e.disabled&&O`
            input {
                color: ${ga["text-disabled"]};
            }
        `}

    ${e=>e.readOnly&&O`
            padding: 0;
            input {
                margin-left: ${ya["spacing-12"]};
            }
        `}
`,KS=({id:r,"data-testid":n,disabled:o,readOnly:i,inputId:a,type:l,sendOtpPlaceholder:s,emailValue:d,onEmailChange:c,phoneNumberValue:u,onPhoneNumberChange:f,fixedCountry:h,isLoading:p,isVerified:g,countdown:m,onSendOtp:b,onStateReset:v,sendOtpError:y})=>{const x=e=>{v(),"email"===l&&c&&c(e.target.value)},w=e=>{v(),"phone-number"===l&&f&&f(e)};return t(PS,{id:r,"data-testid":n,children:[t(NS,{children:[t(HS,{$isMaxWidth:"email"===l,$error:!!y,$disabled:o,$readonly:i,children:["email"===l?e(VS,{id:a,"data-testid":n?`${n}-contact-input`:void 0,placeholder:s||"Enter email",value:d,onChange:x,type:"email",noBorder:!0,"aria-invalid":!!y,"aria-required":!0,disabled:o,readOnly:i}):e(US,{id:a,"data-testid":n?`${n}-contact-input`:void 0,placeholder:s||"Enter mobile number",value:u,onChange:w,noBorder:!0,fixedCountry:h,"aria-invalid":!!y,"aria-required":!0,disabled:o,readOnly:i}),g&&e(WS,{"aria-label":"Verified",role:"img",children:e(he,{})})]}),!o&&!i&&e(YS,{id:r?`${r}-contact-button`:void 0,type:"button","data-testid":n?`${n}-contact-button`:void 0,onClick:b,disabled:m.isRunning||g,loading:p,children:g?"Verified":p?"":m.isRunning?"Sent OTP":"Send OTP"})]}),y&&e(Gu,{id:r?`${r}-contact-error`:void 0,"data-testid":n?`${n}-contact-error`:void 0,role:"alert",children:y})]})},qS=F.div`
    display: flex;
    flex-direction: column;
    gap: ${ya["spacing-16"]};
`,ZS=F.svg`
    .background-circle {
        fill: ${ga["bg-stronger"]};
    }

    .primary-path {
        fill: ${ga["icon-primary"]};
    }

    .validation-icon {
        fill: ${ga["bg-available"]};
    }

    .accent-light-3 {
        fill: ${ga["icon-primary-subtle"]};
    }

    .accent-light-4 {
        fill: ${ga["icon-primary-subtlest"]};
    }
`,GS=({width:r=120,height:n=120,className:o})=>t(ZS,{width:r,height:n,viewBox:"0 0 120 120",fill:"none",xmlns:"http://www.w3.org/2000/svg",className:o,children:[t("g",{clipPath:"url(#clip0_email_icon)",children:[e("circle",{cx:"60",cy:"60",r:"60",className:"background-circle"}),e("path",{d:"M22.9744 60.2636L62.1602 72.5619C62.6183 72.7414 63.1075 72.7591 63.5596 72.638C64.0116 72.5169 64.4265 72.2569 64.7334 71.8724L92.5201 41.6289L52.1928 25.0006C51.2645 24.6309 50.2039 24.9151 49.5848 25.6994L22.9744 60.2636Z",className:"primary-path"}),e("path",{d:"M72.6935 18.8097L29.2275 30.4564C26.8325 31.0982 25.4042 33.5744 26.0465 35.9714L38.8689 83.8253C39.1907 85.026 40.4254 85.7396 41.6251 85.4182L89.4378 72.6068C90.6374 72.2854 91.3499 71.05 91.0282 69.8493L78.2058 21.9954C77.5635 19.5984 75.0929 18.1668 72.6935 18.8097Z",fill:"white"}),e("path",{d:"M64.7456 71.7935C64.4385 72.1773 64.0235 72.4369 63.5715 72.5581C63.1194 72.6792 62.6303 72.6618 62.1724 72.483L23 60.2346L33.4375 99.188C34.0777 101.577 36.5445 102.994 38.9439 102.352L99.7963 86.0462C102.196 85.4033 103.623 82.9425 102.983 80.5533L92.5457 41.5999L64.7456 71.7935Z",className:"accent-light-3"}),e("path",{d:"M99.8349 86.0769L38.9824 102.382C36.544 103.036 34.127 101.648 33.4768 99.2216C33.2926 98.5339 33.4491 97.7966 33.8965 97.2409L60.7012 66.8793C61.0084 66.4957 61.4233 66.2361 61.8754 66.115C62.3274 65.9939 62.8166 66.0112 63.2744 66.1898L101.669 79.0814C102.334 79.3389 102.838 79.8992 103.023 80.5869C103.673 83.0134 102.273 85.4235 99.8349 86.0769Z",className:"accent-light-4"}),e("path",{d:"M56.1874 49.1387L52.6167 47.0772C52.2767 46.8809 51.9109 46.8352 51.5193 46.9401C51.1288 47.0447 50.8354 47.2671 50.6391 47.6071C50.4263 47.9757 50.3723 48.3558 50.4772 48.7474C50.5819 49.1379 50.8155 49.4283 51.1781 49.6186L55.9386 52.3685C56.2844 52.5863 56.6531 52.6427 57.0447 52.5378C57.4352 52.4332 57.737 52.1971 57.9501 51.8295L63.423 42.35C63.6193 42.01 63.6666 41.65 63.5649 41.2703C63.4628 40.8894 63.2418 40.6009 62.9017 40.4045C62.5617 40.2082 62.1958 40.1625 61.8043 40.2674C61.4138 40.372 61.1204 40.5944 60.924 40.9344L56.1874 49.1387ZM61.0069 59.8842C59.152 60.3812 57.3145 60.4964 55.4942 60.2299C53.674 59.9633 51.9987 59.3883 50.4684 58.5048C48.9382 57.6213 47.6026 56.458 46.4616 55.0148C45.3206 53.5717 44.5017 51.9227 44.0046 50.0678C43.5076 48.2129 43.3924 46.3754 43.6589 44.5551C43.9255 42.7348 44.5005 41.0595 45.384 39.5293C46.2674 37.999 47.4308 36.6634 48.8739 35.5224C50.317 34.3814 51.966 33.5625 53.8208 33.0655C55.6757 32.5685 57.5132 32.4532 59.3335 32.7198C61.1537 32.9863 62.829 33.5613 64.3593 34.4448C65.8895 35.3283 67.2251 36.4917 68.3661 37.9348C69.5071 39.378 70.326 41.027 70.8231 42.8818C71.3201 44.7367 71.4353 46.5743 71.1688 48.3945C70.9023 50.2148 70.3272 51.8901 69.4438 53.4204C68.5603 54.9506 67.3969 56.2863 65.9538 57.4272C64.5107 58.5682 62.8617 59.3872 61.0069 59.8842Z",className:"validation-icon"})]}),e("defs",{children:e("clipPath",{id:"clip0_email_icon",children:e("rect",{width:"120",height:"120",fill:"white"})})})]}),XS=F.svg`
    .background-circle {
        fill: ${ga["bg-stronger"]};
    }

    .primary-path {
        fill: ${ga["icon-primary"]};
    }

    .validation-icon {
        fill: ${ga["bg-available"]};
    }

    .accent-light {
        fill: ${ga["bg-selected-stronger"]};
    }
`,JS=({width:r=120,height:n=120,className:o})=>t(XS,{width:r,height:n,viewBox:"0 0 120 120",fill:"none",xmlns:"http://www.w3.org/2000/svg",className:o,children:[t("g",{clipPath:"url(#clip0_phone_icon)",children:[e("circle",{cx:"60",cy:"60.5",r:"60",className:"background-circle"}),e("path",{d:"M85.7091 99.047L56.9789 106.705C51.6167 108.134 46.0606 104.916 44.6318 99.5553L27.1393 33.9319C25.9969 29.6444 27.8244 25.2332 31.3437 22.9073C32.2263 22.3231 33.2151 21.8712 34.2899 21.5845L34.4374 21.5449L40.7667 19.8586L56.4455 15.6787L56.4545 15.6763L63.02 13.9267C68.3822 12.497 73.9383 15.715 75.3671 21.0761L92.8596 86.6995C94.2888 92.0619 91.0712 97.6172 85.7091 99.047Z",className:"primary-path"}),e("path",{d:"M90.0893 85.5165L72.9593 22.8765C72.8393 22.4365 72.6893 22.0165 72.5093 21.6165C72.0993 20.6965 71.5393 19.8765 70.8693 19.1765C70.2493 18.5365 69.5393 17.9865 68.7593 17.5665C66.8993 16.5465 64.6593 16.2165 62.4593 16.8065L58.8593 17.8765C58.8593 17.8765 58.8693 17.9065 58.8793 17.9265C59.2793 19.4065 58.8293 20.8265 57.8893 21.0665L42.2093 25.2365C41.3193 25.4765 40.3093 24.5765 39.8593 23.2265L36.0693 24.2365C31.5193 25.4465 28.7793 30.1665 29.9993 34.7265L30.3093 35.8765L32.1393 42.7565L35.8493 56.6765L36.8693 60.5165L38.1493 65.3165L47.0793 97.5165C48.2893 102.067 53.0093 104.807 57.5693 103.587L83.9993 95.9965C88.5493 94.7865 91.2893 90.0665 90.0693 85.5065L90.0893 85.5165ZM38.6893 26.3265L34.8993 27.3365C34.5793 27.4265 34.2493 27.2265 34.1593 26.9065C34.0693 26.5865 34.2693 26.2565 34.5893 26.1665L38.3793 25.1565C38.6993 25.0665 39.0293 25.2665 39.1193 25.5865C39.2093 25.9065 39.0093 26.2365 38.6893 26.3265ZM65.6893 19.3265L61.8993 20.3365C61.5793 20.4265 61.2493 20.2265 61.1593 19.9065C61.0693 19.5865 61.2693 19.2565 61.5893 19.1665L65.3793 18.1565C65.6993 18.0665 66.0293 18.2665 66.1193 18.5865C66.2093 18.9065 66.0093 19.2365 65.6893 19.3265Z",fill:"white"}),e("path",{d:"M55.1766 48.5674L51.606 46.5059C51.2659 46.3096 50.9001 46.2639 50.5086 46.3688C50.1181 46.4734 49.8247 46.6958 49.6283 47.0358C49.4155 47.4045 49.3616 47.7846 49.4665 48.1761C49.5711 48.5666 49.8047 48.857 50.1673 49.0473L54.9279 51.7972C55.2737 52.015 55.6424 52.0715 56.0339 51.9665C56.4244 51.8619 56.7262 51.6258 56.9393 51.2583L62.4123 41.7787C62.6086 41.4387 62.6559 41.0788 62.5541 40.699C62.4521 40.3181 62.231 40.0296 61.891 39.8332C61.5509 39.6369 61.1851 39.5912 60.7935 39.6961C60.403 39.8007 60.1096 40.0231 59.9133 40.3631L55.1766 48.5674ZM59.9961 59.3129C58.1413 59.8099 56.3037 59.9251 54.4835 59.6586C52.6632 59.392 50.988 58.817 49.4577 57.9335C47.9274 57.05 46.5918 55.8867 45.4509 54.4435C44.3099 53.0004 43.4909 51.3514 42.9939 49.4965C42.4969 47.6417 42.3817 45.8041 42.6482 43.9838C42.9147 42.1635 43.4897 40.4882 44.3732 38.958C45.2567 37.4277 46.42 36.0921 47.8631 34.9511C49.3063 33.8102 50.9552 32.9912 52.8101 32.4942C54.6649 31.9972 56.5025 31.8819 58.3227 32.1485C60.143 32.415 61.8183 32.99 63.3485 33.8736C64.8788 34.7571 66.2144 35.9204 67.3554 37.3635C68.4963 38.8067 69.3153 40.4557 69.8123 42.3105C70.3093 44.1654 70.4246 46.003 70.158 47.8233C69.8915 49.6435 69.3165 51.3188 68.433 52.8491C67.5495 54.3794 66.3862 55.715 64.9431 56.8559C63.5 57.9969 61.851 58.8159 59.9961 59.3129Z",className:"validation-icon"}),e("path",{d:"M76.5801 68.8601C77.3501 68.6501 77.8201 67.8501 77.6101 67.0801C77.4001 66.3101 76.6001 65.8401 75.8301 66.0501L49.0801 73.1601C48.3101 73.3701 47.8401 74.1701 48.0501 74.9401C48.2601 75.7101 49.0601 76.1801 49.8301 75.9701L76.5801 68.8601Z",className:"accent-light"}),e("path",{d:"M78.5098 76.1402C79.2798 75.9302 79.7498 75.1302 79.5398 74.3602C79.3298 73.5902 78.5298 73.1202 77.7598 73.3302L51.0098 80.4402C50.2398 80.6502 49.7698 81.4502 49.9798 82.2202C50.1898 82.9902 50.9898 83.4602 51.7598 83.2502L78.5098 76.1402Z",className:"accent-light"}),e("path",{d:"M81.6702 82.3401C81.4602 81.5701 80.6602 81.1001 79.8902 81.3101L53.1402 88.4201C52.3702 88.6301 51.9002 89.4301 52.1102 90.2001C52.3202 90.9701 53.1202 91.4401 53.8902 91.2301L80.6402 84.1201C81.4102 83.9101 81.8802 83.1101 81.6702 82.3401Z",className:"accent-light"})]}),e("defs",{children:e("clipPath",{id:"clip0_phone_icon",children:e("rect",{width:"120",height:"120",fill:"white"})})})]}),QS=F.div`
    display: flex;
    align-items: center;
    background-color: ${ga["bg-strong"]};
    padding: ${ya["spacing-16"]} ${ya["spacing-32"]};
    gap: ${ya["spacing-32"]};
    ${Ca.MaxWidth.sm} {
        flex-direction: column;
        align-items: start;
        gap: ${ya["spacing-16"]};
        padding: ${ya["spacing-16"]};
    }
`,ek=F.div`
    display: flex;
    flex-direction: column;
    gap: ${ya["spacing-16"]};
`,tk=F(Wa.BodyMD)`
    color: ${ga["text-subtlest"]};
`,rk=F.div`
    display: flex;
    gap: ${ya["spacing-8"]};
    max-width: 472px;
`,nk=F(Pf.Default)`
    flex-shrink: 0;
    width: 83px;
`,ok=({id:r,"data-testid":n,type:o,showVerifyOtpThumbnail:i=!1,verifyOtpTitle:a,verifyOtpMessage:l,otpCode:s,setOtpCode:d,isVerifyLoading:c,countdown:u,onVerifyOtp:f,verifyOtpError:h,otpPrefix:p,otpSeparator:g})=>{const m=b(_),v=Jc.useMediaQuery({maxWidth:$a["sm-max"]({theme:m})})?64:120;return t(QS,{id:r,"data-testid":n,role:"group","aria-labelledby":r?`${r}-title`:void 0,children:[(()=>{if(!i)return null;return e("div",{"aria-label":"email"===o?"Email verification":"Phone verification",role:"img",children:e("email"===o?GS:JS,{width:v,height:v})})})(),t(ek,{children:[t("div",{children:[e(Wa.BodyMD,{weight:"semibold",id:r?`${r}-title`:void 0,"data-testid":n?`${n}-title`:void 0,children:a}),e(Wa.BodyMD,{weight:"regular",id:r?`${r}-message`:void 0,"data-testid":n?`${n}-message`:void 0,children:l})]}),t("div",{children:[t(rk,{children:[e(GD,{id:r?`${r}-verify-input`:void 0,"data-testid":n?`${n}-verify-input`:void 0,value:s,onChange:e=>null==d?void 0:d(e.target.value),placeholder:"Enter OTP",addon:{type:"label",attributes:{value:`${null!=p?p:""}${null!=g?g:""}`}},type:"number",error:!!h,"aria-label":"Enter OTP code","aria-invalid":!!h,"aria-required":!0}),e(nk,{id:r?`${r}-verify-button`:void 0,type:"button","data-testid":n?`${n}-verify-button`:void 0,onClick:f,loading:c,styleType:"light",disabled:!s||0===s.length,children:!c&&"Verify"})]}),h&&e(Gu,{id:r?`${r}-verify-error`:void 0,"data-testid":n?`${n}-verify-error`:void 0,role:"alert",children:h})]}),u.isRunning&&t(tk,{id:r?`${r}-countdown`:void 0,"data-testid":n?`${n}-countdown`:void 0,children:["Resend OTP in ",u.formatTime()]})]})]})},ik=r=>{const{id:n,"data-testid":o,className:i,inputId:a,onSendOtp:s,onVerifyOtp:c,verifyOtpCountdownTimer:u=60,sendOtpError:f,verifyOtpError:h,otpValue:p,onOtpChange:m,otpState:b,onOtpStateChange:v}=r,[y,x]=g(!1),[w,$]=g(!1),C=(({duration:e,onComplete:t})=>{const[r,n]=g(e),[o,i]=g(!1),a=l(null),s=l(null),c=()=>{i(!1),a.current&&(clearInterval(a.current),a.current=null)};return d((()=>{o||n(e)}),[e,o]),{timeLeft:r,isRunning:o,start:()=>{o||(s.current=Date.now(),i(!0),a.current=setInterval((()=>{const r=Math.floor((Date.now()-s.current)/1e3),o=Math.max(0,e-r);n(o),o<=0&&(i(!1),a.current&&(clearInterval(a.current),a.current=null),null==t||t())}),1e3))},stop:c,reset:()=>{c(),n(e),s.current=null},formatTime:e=>{const t=null!=e?e:r;return`${t} second${1===t?"":"s"}`}}})({duration:u});return t(qS,{id:n,"data-testid":o,className:i,children:[e(KS,Object.assign({},r,{inputId:a,"data-testid":o?`${o}-contact`:void 0,isLoading:y,isVerified:"verified"===b,countdown:C,onSendOtp:()=>dt(void 0,void 0,void 0,(function*(){if(s)try{x(!0),yield s(),v("sent"),C.reset(),C.start()}catch(e){}finally{x(!1)}})),onStateReset:()=>{"verified"===b&&v("default")},sendOtpError:f,fixedCountry:"phone-number"!==r.type||r.fixedCountry})),"sent"===b&&e(ok,Object.assign({},r,{"data-testid":o?`${o}-verification`:void 0,otpCode:null==p?void 0:p.value,otpPrefix:null==p?void 0:p.prefix,otpSeparator:null==p?void 0:p.separator,setOtpCode:m,isVerifyLoading:w,countdown:C,onVerifyOtp:()=>dt(void 0,void 0,void 0,(function*(){if(c&&(null==p?void 0:p.value))try{$(!0),yield c(p.value),v("verified"),C.reset(),null==m||m("")}catch(e){}finally{$(!1)}})),verifyOtpError:h}))]})};var ak=mr,lk=Rr,sk=function(){return ak.Date.now()},dk=oy,ck=Math.max,uk=Math.min;var fk=je((function(e,t,r){var n,o,i,a,l,s,d=0,c=!1,u=!1,f=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function h(t){var r=n,i=o;return n=o=void 0,d=t,a=e.apply(i,r)}function p(e){var r=e-s;return void 0===s||r>=t||r<0||u&&e-d>=i}function g(){var e=sk();if(p(e))return m(e);l=setTimeout(g,function(e){var r=t-(e-s);return u?uk(r,i-(e-d)):r}(e))}function m(e){return l=void 0,f&&n?h(e):(n=o=void 0,a)}function b(){var e=sk(),r=p(e);if(n=arguments,o=this,s=e,r){if(void 0===l)return function(e){return d=e,l=setTimeout(g,t),c?h(e):a}(s);if(u)return clearTimeout(l),l=setTimeout(g,t),h(s)}return void 0===l&&(l=setTimeout(g,t)),a}return t=dk(t)||0,lk(r)&&(c=!!r.leading,i=(u="maxWait"in r)?ck(dk(r.maxWait)||0,t):i,f="trailing"in r?!!r.trailing:f),b.cancel=function(){void 0!==l&&clearTimeout(l),d=0,n=s=o=l=void 0},b.flush=function(){return void 0===l?a:m(sk())},b}));const hk=n=>{var{className:o,"data-testid":i,selectedOption:a,minimumCharacters:s=3,fetchOptions:u,placeholder:f="Enter here...",readOnly:h=!1,disabled:p=!1,error:m,valueExtractor:b,listExtractor:v,displayValueExtractor:y,onSelectOption:x,alignment:w,dropdownZIndex:$,dropdownRootNode:C,dropdownWidth:D,"aria-describedby":S}=n,k=st(n,["className","data-testid","selectedOption","minimumCharacters","fetchOptions","placeholder","readOnly","disabled","error","valueExtractor","listExtractor","displayValueExtractor","onSelectOption","alignment","dropdownZIndex","dropdownRootNode","dropdownWidth","aria-describedby"]);const E=e=>e?y?y(e):e.toString():"",[F,O]=g((()=>a?E(a):"")),[T,_]=g((()=>a?E(a):"")),[I,M]=g([]),[A,B]=g(!0),[j,z]=g(!1),[R,L]=g(!!a),[P,N]=g(a),[H,W]=g(!1),[Y,V]=g(!1),[U]=g((()=>Hc.generate())),[K,q]=g(null),Z=`${U}-instruction`,G=l(null),X=l(null),J=l(u),Q=c((e=>dt(void 0,void 0,void 0,(function*(){if(J.current){z(!1),B(!0);try{const t=yield J.current(e);_(e),M(null!=t?t:[]),B(!1)}catch(e){z(!0),B(!1)}}}))),[]),ee=c(fk((e=>{Q(e)}),500),[Q]);d((()=>{J.current=u}),[u]),d((()=>{F&&F.length>=s?R?F!==T&&ee(F):(W(!0),ee(F)):ee.cancel(),""===F&&P&&(null==x||x(void 0,void 0),se(),N(void 0)),a&&F!==E(a)&&L(!1)}),[F,a]),d((()=>{O(a?E(a):""),_(a?E(a):""),N(a),M([]),L(!!a)}),[a]),d((()=>{var e;const t=de(),r=null!==(e=null==I?void 0:I.length)&&void 0!==e?e:0;"loading"===t&&F.length>=s?q("Loading suggested results"):"fail"!==t?!H||A||j||q(0===r?F?"No results found.":null:`${r} result${r>1?"s":""} found. Press down arrow to scroll through the list.`):q("Suggestions failed to load. Try again.")}),[I,F,j,A]),d((()=>()=>{ee.cancel()}),[ee]);const te=(e,t)=>{var r;null===(r=X.current)||void 0===r||r.focus(),O(E(e)),_(e?E(e):""),L(!0),N(e),W(!1),null==x||x(e,t)},re=()=>{V(!0)},ne=e=>{H||!G.current||G.current.contains(e.relatedTarget)||(V(!1),ae())},oe=()=>{W(!1),V(!1)},ie=()=>{O(""),M([]),L(!1),W(!1),null==x||x(void 0,void 0)},ae=()=>{if(!R)if(P){const e=E(P);O(e),W(!1)}else ie()},le=e=>{O(e.target.value),L(!1)},se=e=>{_(e?E(e):""),L(!!e),M([]),B(!0)},de=()=>j?"fail":A?"loading":"success";return e(J$,{children:e($f,{enabled:!h&&!p,isOpen:H,renderElement:()=>t(Yh,{className:o,"data-testid":i,ref:G,tabIndex:-1,onFocus:re,onBlur:ne,$focused:Y,$disabled:p,$readOnly:h,$error:m,children:[t(Df,{id:Z,"aria-hidden":!0,children:["Type in ",s," or more characters for suggested results."]}),K&&e(Df,{"aria-live":"polite",children:K}),e(Cg,Object.assign({role:"combobox",ref:X,id:U,type:"text",value:F,onChange:le,placeholder:f,readOnly:h,disabled:p,allowClear:!0,onClear:ie,"aria-expanded":H,"aria-controls":U,"aria-autocomplete":"list","aria-haspopup":"listbox",onBlur:F.length<s?ae:void 0,styleType:"no-border","aria-describedby":kf(S,Z)},k))]}),renderDropdown:()=>e(r,{children:e($C,{listboxId:U,listItems:I,onSelectItem:te,onDismiss:oe,valueExtractor:b,listExtractor:v,itemsLoadState:de(),itemTruncationType:"end",itemMaxLines:1,labelDisplayType:"next-line",disableItemFocus:!0,onRetry:()=>Q(F),width:D,matchElementWidth:!0})}),onOpen:()=>{!R&&F.length>=s&&V(!0)},onClose:()=>{W(!1),V(!1),ae()},onDismiss:()=>{var e;W(!1),V(!1),ae(),null===(e=X.current)||void 0===e||e.focus()},clickToToggle:!1,offset:8,alignment:w,fitAvailableHeight:!0,customZIndex:$,rootNode:C})})},pk=F(yg)`
    position: absolute;
    right: 0;
    padding-left: ${ya["spacing-8"]};
    margin-right: 0;
`,gk=F(Yh)`
    height: 3rem;
`,mk=F.button`
    appearance: none;
    border: 0;
    background: transparent;
    display: flex;
    flex: 1;
    color: ${ga.text};

    &:focus,
    &:active {
        outline: none;
    }

    &:focus-visible {
        outline: 2px solid ${ga["border-focus"]};
        border-radius: 4px;
    }

    &:disabled {
        cursor: not-allowed;
    }
`,bk=r=>{var{selectedOptions:n,placeholders:o={from:"Select",to:"Select"},options:i,disabled:s,className:c,readOnly:u,error:f,"data-testid":h,id:p,enableSearch:m=!1,searchFunction:b,searchPlaceholder:v,valueExtractor:y,valueToStringFunction:x,listExtractor:w,displayValueExtractor:$,onSelectOption:C,onShowOptions:D,onHideOptions:S,onRetry:k,optionsLoadState:E={from:"success",to:"success"},optionTruncationType:F="middle",renderCustomSelectedOption:O,renderListItem:T,renderCustomCallToAction:_,alignment:I,dropdownZIndex:M,dropdownRootNode:A,dropdownWidth:B,"aria-labelledby":j,"aria-describedby":z}=r,R=st(r,["selectedOptions","placeholders","options","disabled","className","readOnly","error","data-testid","id","enableSearch","searchFunction","searchPlaceholder","valueExtractor","valueToStringFunction","listExtractor","displayValueExtractor","onSelectOption","onShowOptions","onHideOptions","onRetry","optionsLoadState","optionTruncationType","renderCustomSelectedOption","renderListItem","renderCustomCallToAction","alignment","dropdownZIndex","dropdownRootNode","dropdownWidth","aria-labelledby","aria-describedby"]);const[L,P]=g(),[N,H]=g(),[W,Y]=g("none"),V="none"!==W,U={from:l(null),to:l(null)},K=l(null),[q]=g((()=>Hc.generate())),Z=`${q}-range-listbox`,G=`${q}-from-label`,X=`${q}-to-label`;d((()=>{P(null==n?void 0:n.from),H(null==n?void 0:n.to)}),[n]),d((()=>{var e;V&&"to"===W&&(null===(e=K.current)||void 0===e||e.refocus({index:0}))}),[V,W]);const J=e=>{e||null==S||S(),e&&(null==D||D())},Q=e=>{var t,r;const n="from"===e?L:N;if(!n)return"";if($)return $(n);if(y){const e=y(n);return x?x(e):null!==(r=null===(t=null==e?void 0:e.toString)||void 0===t?void 0:t.call(e))&&void 0!==r?r:""}return n.toString()},ee=(e,t)=>{var r;if("middle"===F){let n=0;return(null===(r=U[e])||void 0===r?void 0:r.current)&&(n=U[e].current.getBoundingClientRect().width),Wc.truncateOneLine(t,n,120,8)}return t},te=()=>{switch(W){case"from":return"start";case"to":return"end";case"none":return W}},re=a((()=>{var e;return"none"===W?[]:null!==(e=null==i?void 0:i[W])&&void 0!==e?e:[]}),[W,i]),ne=a((()=>{if("none"===W)return[];const e="from"===W?L:N;return e?[e]:[]}),[W,L,N]),oe=e=>{if(s||u)return;Y("to"!==e||L?e:"from"),J(!0)},ie=e=>{var t;null===(t=U[e].current)||void 0===t||t.focus()},ae=e=>kf("from"===e?G:X,j),le=e=>t=>{t.stopPropagation(),t.preventDefault(),oe(e)},se=e=>t=>{if(!s&&!u)switch(t.key){case"Enter":case" ":case"ArrowDown":t.preventDefault(),oe(e)}},de=(e,t)=>{if("none"!==W){if("from"===W)return P(e),null==C||C({from:e},t),H(void 0),Y("to"),J(!0),void ie("to");H(e),null==C||C({to:e},t),Y("none"),J(!1),ie("to")}},ce=()=>{const e=W;Y("none"),J(!1),ie("to"===e?"to":"from"),L&&N||(P(void 0),H(void 0))},ue=e=>{e.stopPropagation(),e.preventDefault(),P(void 0),H(void 0),null==C||C({from:void 0,to:void 0},void 0),ie("from")},fe=t=>{const r="from"===t?L:N;return r?O?O(r):e(bf,{$truncateType:F,children:ee(t,Q(t))}):e(vf,{$truncateType:F,children:ee(t,(null==o?void 0:o[t])||"")})},he=t=>e(mk,{type:"button",role:"combobox","aria-labelledby":ae(t),"aria-describedby":z,"aria-expanded":V&&W===t,"aria-controls":Z,"aria-disabled":s,"aria-readonly":u,onClick:le(t),onKeyDown:se(t),ref:U[t],tabIndex:0,children:fe(t)});return e(ff,Object.assign({id:p},R,{children:e(J$,{children:e($f,{enabled:!u&&!s,isOpen:V,renderElement:()=>t(gk,{className:c,"data-testid":h,$disabled:s,$readOnly:u,$error:f,$focused:V,children:[e(Df,{id:G,children:(null==o?void 0:o.from)||"Select From"}),e(Df,{id:X,children:(null==o?void 0:o.to)||"Select To"}),t(dp,{currentActive:te(),error:f,children:[he("from"),he("to")]}),!V&&L&&N&&!u&&!s&&e(pk,{onClick:ue,type:"button","aria-label":"Clear",children:e(xg,{"aria-hidden":!0})})]}),renderDropdown:()=>e($C,{ref:K,"data-testid":`${h}-dropdown`,listboxId:Z,ariaLabel:"from"===W?`Selecting for: ${null==o?void 0:o.from}`:"to"===W?`Selecting for: ${null==o?void 0:o.to}`:void 0,listItems:re,onSelectItem:de,onDismiss:ce,valueExtractor:y,listExtractor:w,selectedItems:ne,itemsLoadState:E[W],itemTruncationType:F,onRetry:k,width:B,matchElementWidth:!B,enableSearch:m,searchFunction:b,searchPlaceholder:v,renderListItem:T,renderCustomCallToAction:_}),onOpen:()=>{s||u||"none"===W&&(Y("from"),J(!0))},onClose:()=>{Y("none"),J(!1),L&&N||(P(void 0),H(void 0))},onDismiss:ce,clickToToggle:!1,offset:8,alignment:I,fitAvailableHeight:!0,customZIndex:M,rootNode:A})})}))},vk=({selectedOption:t,placeholder:r="Select",options:n,disabled:o,error:i,className:a,"data-testid":s,id:c,"aria-labelledby":u,"aria-describedby":f,"aria-invalid":h,enableSearch:p=!1,searchFunction:m,searchPlaceholder:b,valueExtractor:v,valueToStringFunction:y,listExtractor:x,displayValueExtractor:w,onSelectOption:$,onShowOptions:C,onHideOptions:D,onRetry:S,optionsLoadState:k="success",optionTruncationType:E="end",renderCustomSelectedOption:F,renderListItem:O,hideNoResultsDisplay:T,noResultsDescription:_,customLabels:I,renderCustomCallToAction:M,onBlur:A,variant:B="default",readOnly:j,alignment:z,dropdownZIndex:R,dropdownRootNode:L,dropdownWidth:P})=>{const[N,H]=g(t),[W,Y]=g(!1),[V,U]=g(!1),[K]=g((()=>Hc.generate())),q=l(null),Z=l(null),G=l(null);d((()=>{H(t)}),[t]);const X=(e,t)=>{var r;null===(r=Z.current)||void 0===r||r.focus(),H(e),Y(!1),ne(!1),null==$||$(e,t)},J=()=>{W&&(Y(!1),ne(!1))},Q=()=>{V||W||U(!0)},ee=e=>{V&&!W&&q.current&&!q.current.contains(e.relatedTarget)&&(U(!1),null==A||A())},te=()=>{var e;if(!N)return"";if(w)return w(N);if(v){const t=v(N);return y?y(t):null!==(e=null==t?void 0:t.toString())&&void 0!==e?e:""}return N.toString()},re=e=>{if("middle"===E){let t=0;return G&&G.current&&(t=G.current.getBoundingClientRect().width),Wc.truncateOneLine(e,t,120,8)}return e},ne=e=>{e?null==C||C():null==D||D()};return e(J$,{children:e($f,{enabled:!j&&!o,isOpen:W,renderElement:()=>e(Wh,{className:a,"data-testid":s,id:c,ref:q,tabIndex:-1,onFocus:Q,onBlur:ee,$focused:V,$disabled:o,$readOnly:j,$error:i,children:e(SC,{ref:Z,disabled:o,expanded:W,listboxId:K,popupRole:"listbox",readOnly:j,variant:B,"aria-labelledby":u,"aria-describedby":f,"aria-invalid":h,children:e(mf,{ref:G,$disabled:o,children:N?F?F(N):e(bf,{$truncateType:E,$variant:B,children:re(te())}):e(vf,{$truncateType:E,$variant:B,children:r})})})}),renderDropdown:()=>e($C,{listboxId:K,listItems:n,onSelectItem:X,onDismiss:J,valueExtractor:v,listExtractor:x,enableSearch:p,searchPlaceholder:b,searchFunction:m,selectedItems:N?[N]:[],onRetry:S,itemsLoadState:k,itemTruncationType:E,renderListItem:O,hideNoResultsDisplay:T,noResultsDescription:_,customLabels:I,renderCustomCallToAction:M,variant:B,width:P,matchElementWidth:!0}),onOpen:()=>{Y(!0),ne(!0),U(!0)},onClose:e=>{Y(!1),ne(!1),"click"!==e&&(U(!1),null==A||A())},onDismiss:()=>{var e;null===(e=Z.current)||void 0===e||e.focus(),Y(!1),ne(!1)},clickToToggle:!0,offset:8,alignment:z,fitAvailableHeight:!0,customZIndex:R,rootNode:L})})},yk=F.div`
    overflow: hidden;
    border: ${va["width-010"]} ${va.solid} ${ga.border};
    border-radius: ${xa.sm};
    background: ${ga.bg};
    padding: ${ya["spacing-16"]};
    min-width: 23rem;

    ${Ca.MaxWidth.sm} {
        min-width: unset;
        width: calc(100vw - ${$a["sm-margin"]}px * 2);
    }

    ${Ca.MaxWidth.xs} {
        width: calc(100vw - ${$a["xs-margin"]}px * 2);
    }

    ${Ca.MaxWidth.xxs} {
        width: calc(100vw - ${$a["xxs-margin"]}px * 2);
    }
`,xk=F.div`
    display: flex;
    align-items: baseline;
`,wk=F.div`
    margin: 0 0.5rem;
    color: ${ga.text};
`,$k=F(F.div`
    ${e=>"small"===e.$variant?ma["body-md-regular"]:ma["body-baseline-regular"]}
    text-align: left;
    ${e=>{if("middle"!==e.$truncateType)return O`
                    ${ja(1)}
                `}}
    overflow: hidden;
`)`
    color: ${ga["text-subtler"]};
`,Ck=r=>{var{alignment:n="left",className:o,disabled:i,dropdownZIndex:a,error:s,histogramSlider:c,id:u,"aria-labelledby":f,"aria-describedby":h,"aria-invalid":p,onBlur:m,onChange:b,onChangeEnd:v,optionTruncationType:y="end",placeholder:x="Select",rangeLabelPrefix:w,rangeLabelSuffix:$,readOnly:C,renderRangeLabel:D,value:S,dropdownRootNode:k}=r,E=st(r,["alignment","className","disabled","dropdownZIndex","error","histogramSlider","id","aria-labelledby","aria-describedby","aria-invalid","onBlur","onChange","onChangeEnd","optionTruncationType","placeholder","rangeLabelPrefix","rangeLabelSuffix","readOnly","renderRangeLabel","value","dropdownRootNode"]);const{interval:F,bins:O=[],renderEmptyView:T,ariaLabels:_}=c,I=O.map((e=>e.minValue)),M=Math.min(...I),[A,B]=g(Z()),[j,z]=g(!1),[R,L]=g(!1),[P]=g((()=>Hc.generate())),N=l(null),H=l(null),W=l(null),Y=E["data-testid"]||"select-histogram";d((()=>{S!==A&&B(Z())}),[S]);const V=e=>{B(e),null==b||b(e)},U=e=>{B(e),null==v||v(e)},K=()=>{R||j||L(!0)},q=e=>{R&&!j&&N.current&&!N.current.contains(e.relatedTarget)&&(L(!1),null==m||m())};function Z(){return null!=S?S:[M,M+F]}const G=e=>D?D(e):t(Wa.BodyBL,{children:[w,e,$]});return e(J$,{children:e($f,{enabled:!C&&!i,isOpen:j,renderElement:()=>e(Wh,{className:o,"data-testid":Y,id:u,ref:N,tabIndex:-1,onFocus:K,onBlur:q,$focused:R,$disabled:i,$readOnly:C,$error:s,children:e(SC,{ref:H,disabled:i,expanded:j,listboxId:P,popupRole:"dialog",readOnly:C,variant:"default","aria-labelledby":f,"aria-describedby":h,"aria-invalid":p,children:e(mf,{ref:W,$disabled:i,children:I&&0!==I.length?t(xk,{children:[G(A[0]),e(wk,{children:"-"}),G(A[1])]}):e($k,{$truncateType:y,$variant:"default",children:x})})})}),renderDropdown:({elementWidth:t,styles:r,setFloatingRef:n,getFloatingProps:o})=>e(yk,Object.assign({style:Object.assign(Object.assign({},r),{width:t}),ref:n},o(),{children:e(bg,{interval:F,value:A,bins:O,onChange:V,onChangeEnd:U,showRangeLabels:!1,renderEmptyView:T,ariaLabels:_})})),onOpen:()=>{z(!0)},onClose:()=>{z(!1)},onDismiss:()=>{var e;null===(e=H.current)||void 0===e||e.focus(),z(!1)},clickToToggle:!0,offset:8,alignment:n,fitAvailableHeight:!0,customZIndex:a,rootNode:k})})},Dk=t=>{var{value:r,ariaLabel:n,onChange:o,onChangeEnd:i}=t,a=st(t,["value","ariaLabel","onChange","onChangeEnd"]);const[l,s]=g(c());d((()=>{r!==l[0]&&s(c())}),[r]);function c(){return null!=r?[r]:[0]}return e(ug,Object.assign({},a,{value:l,numOfThumbs:1,onChange:e=>{const[t]=e;s([t]),null==o||o(t)},onChangeEnd:e=>{const[t]=e;s([t]),null==i||i(t)},ariaLabels:n?[n]:void 0}))},Sk=F.p`
    text-align: right;
    ${ma["body-sm-semibold"]}
    color: ${ga["text-subtler"]};
`,kk=({value:t,maxLength:n,renderCustomCounter:i})=>{const[a,l]=g("");d((()=>{l(s(`${t||""}`))}),[t,n]);const s=e=>{if(i)return i(n,e.toString().length);{const t=n-e.toString().length;return 1===t?`${t} character left`:`${t.toLocaleString()} characters left`}};return e(r,{children:o.isValidElement(a)?a:e(Sk,{"data-testid":"counter-label",children:a})})},Ek=F.div`
    display: flex;
    flex-direction: column;
`,Fk=F.textarea`
    border: ${va["width-010"]} ${va.solid} ${ga.border};
    border-radius: ${xa.sm};
    background: ${ga.bg};
    outline: none;
    overflow: auto;

    display: block;
    padding: ${ya["spacing-12"]} ${ya["spacing-16"]};
    width: 100%;

    ${ma["body-baseline-regular"]}
    color: ${ga.text};

    &:focus,
    &:active {
        outline-offset: -1px;
        outline: ${va["width-020"]} ${va.solid}
            ${ga["border-focus"]};
    }

    &::placeholder,
    &::-webkit-input-placeholder {
        color: ${ga["text-subtler"]};
    }

    &::-webkit-scrollbar {
        width: 14px;
    }

    &::-webkit-scrollbar-track {
        background: transparent;
    }

    &::-webkit-scrollbar-thumb {
        background: ${ga["bg-inverse-subtlest"]};
        border: 5px solid transparent;
        border-radius: ${xa.full};
        background-clip: padding-box;
    }

    ${e=>e.readOnly?O`
                border-color: transparent;
                background: transparent !important;
                padding: ${ya["spacing-12"]} 0;

                &:focus,
                &:active {
                    outline-color: ${ga["border-focus"]};
                }
            `:e.disabled?O`
                background: ${ga["bg-disabled"]};
                cursor: not-allowed;

                &:focus,
                &:active {
                    outline-color: ${ga["border-disabled"]};
                }
            `:e.$error?O`
                border-color: ${ga["border-error"]};

                &:focus,
                &:active {
                    outline-color: ${ga["border-error-focus"]};
                }
            `:void 0}
`,Ok=o.forwardRef(((t,r)=>{var{value:n,disabled:o,error:i,rows:a=5,prefix:l,transformValue:s,onChange:c,maxLength:u}=t,f=st(t,["value","disabled","error","rows","prefix","transformValue","onChange","maxLength"]);const[h,p]=g(n);d((()=>{p(n)}),[n]);return e(Fk,Object.assign({ref:r,disabled:o,value:l?l+(null!=h?h:""):h,onChange:e=>{let t=e.target.value;if(l){t.startsWith(l)||(t=l+t.trimStart()),t.length<l.length&&(t=l);if((e.target.selectionStart||0)<l.length)return void e.preventDefault();const r=t.slice(l.length),n=s?s(r):r;if(p(n),e.target.value=l+n,c){const t=Object.assign(Object.assign({},e),{target:Object.assign(Object.assign({},e.target),{value:n})});c(t)}}else{const r=s?s(null!=t?t:""):t;p(r),e.target.value=r,c&&c(e)}},onKeyDown:e=>{if(!l)return;const{selectionStart:t}=e.currentTarget;"Backspace"===e.key&&t<=l.length&&e.preventDefault(),"ArrowLeft"===e.key&&t<=l.length&&e.preventDefault(),"Home"===e.key&&(e.preventDefault(),requestAnimationFrame((()=>{e.currentTarget.setSelectionRange(l.length,l.length)})))},$error:i,rows:a,maxLength:l&&u?l.length+u:u},f))}));o.forwardRef(((r,n)=>{var{value:o,disabled:i,rows:a=5,onChange:l,transformValue:s,prefix:c,maxLength:u,renderCustomCounter:f}=r,h=st(r,["value","disabled","rows","onChange","transformValue","prefix","maxLength","renderCustomCounter"]);const[p,m]=g(o);d((()=>{m(o)}),[o]);return t(Ek,{children:[e(Ok,Object.assign({ref:n,disabled:i,value:p,rows:a||5,onChange:e=>{const t=e.target.value;m(t),l&&l(e)},prefix:c,transformValue:s,maxLength:u},h)),u&&e(kk,{value:p,maxLength:u,renderCustomCounter:f})]})}));const Tk=F.div`
    display: flex;
    justify-content: flex-end;
    margin-top: ${ya["spacing-4"]};
`,_k=F.div`
    display: flex;
    flex: 1;
    margin-right: ${ya["spacing-12"]};
    gap: ${ya["spacing-4"]};
`,Ik=F(Ku)`
    margin-top: 0;
`,Mk=o.forwardRef(((n,o)=>{const{label:i,value:a,errorMessage:l,id:s="form-textarea","data-error-testid":c,"data-testid":u,onChange:f,layoutType:h,mobileCols:p,tabletCols:m,desktopCols:b,xxsCols:v,xsCols:y,smCols:x,mdCols:w,lgCols:$,xlCols:C,xxlCols:D,transformValue:S,prefix:k=""}=n,E=st(n,["label","value","errorMessage","id","data-error-testid","data-testid","onChange","layoutType","mobileCols","tabletCols","desktopCols","xxsCols","xsCols","smCols","mdCols","lgCols","xlCols","xxlCols","transformValue","prefix"]),[F,O]=g(a);d((()=>{O(a)}),[a]);return t(cf,{id:s,label:i,disabled:E.disabled,layoutType:h,mobileCols:p,tabletCols:m,desktopCols:b,xxsCols:v,xsCols:y,smCols:x,mdCols:w,lgCols:$,xlCols:C,xxlCols:D,children:[e(Ok,Object.assign({id:`${s}-base`,"data-testid":u||s,value:F,error:!!l,onChange:e=>{const t=e.target.value;O(t),f&&f(e)},ref:o,prefix:k,transformValue:S},E)),l||E.maxLength?t(Tk,{children:[l&&t(_k,{children:[e(Vu,{"aria-hidden":!0}),e(Ik,{"data-testid":c||(s?`${s}-error-message`:"error-message"),children:l})]}),E.maxLength&&e(kk,{value:F,maxLength:E.maxLength,renderCustomCounter:E.renderCustomCounter})]}):e(r,{})]})})),Ak=F.div`
    position: relative;
`,Bk=F(Yh)`
    height: 3rem;
    gap: ${ya["spacing-8"]};
`,jk=F(Vh)`
    display: block;
    width: 100%;
    flex: 1;
`;var zk,Rk;!function(e){e.AM="AM",e.PM="PM"}(zk||(zk={})),function(e){e.roundToNearestInterval=(e,t,r)=>{const[n,o]=e.split(":"),i=parseInt(n,10),a=parseInt(o,10);if(isNaN(i)||isNaN(a)||a<0||a>=60)throw new Error("Invalid time format");const l=60*i+a,s=l%t,d=0===s?l:r?l+(t-s):l-s,c=d%60;return`${Math.floor(d/60).toString().padStart(2,"0")}:${c.toString().padStart(2,"0")}`},e.generateHourlyIntervals=(e,t,r="ha")=>{const n="HH:mm";let o=xc(e,n),i=xc(t,n);o.isSame(i)&&(i=i.add(1,"day"));const a=[];for(;o.isBefore(i);)a.push(o.format(r)),o=o.add(1,"hour");return a},e.getTimeValues=(e,t)=>{const r={hour:"",minute:"",period:zk.AM};if(!t)return r;try{if("24hr"===e){const n=Hk(t,e);r.minute=Wc.padValue(n.minute);const o=parseInt(n.hour);0===Math.floor(o/12)?(r.period=zk.AM,r.hour=0===o?"12":Wc.padValue(o.toString())):(r.period=zk.PM,r.hour=12===o?o.toString():Wc.padValue((o-12).toString()))}else{const{hour:n,minute:o,period:i=""}=Hk(t,e);r.hour=Wc.padValue(n),r.minute=Wc.padValue(o),r.period="am"===i.toLowerCase()?zk.AM:zk.PM}return r}catch(e){return r}},e.updateMinutes=(e,t)=>{const r=parseInt(e);if(isNaN(r))return"add"===t?Wc.padValue("0"):"55";const n=Math.floor(r/5),o=(("add"===t?n+1:r%5==0?n-1:n)%12+12)%12;return Wc.padValue((5*o).toString())},e.updateHours=(e,t)=>{const r=parseInt(e);if(isNaN(r))return"add"===t?Wc.padValue("1"):"12";const n="add"===t?r+1:r-1;return n<=12&&n>0?Wc.padValue(n.toString()):13===n?Wc.padValue("1"):"12"},e.convertTo24HourFormat=e=>{const t=parseInt(e.hour);let r;return r=e.period===zk.PM?12===t?t.toString():(t+12).toString():12===t?"00":e.hour,`${r}:${e.minute}`},e.convertHourTo12HourFormat=e=>{const t=parseInt(e),r=t%12==0?12..toString():(t%12).toString();return Wc.padValue(r)},e.formatDisplayValue=(e,t)=>{try{const{hour:r,minute:n,period:o=""}=Hk(e,t),i=Wc.padValue(r);let a=`${i}:${Wc.padValue(n)}`;return"12hr"===t?(a+=o.toLowerCase(),a):a}catch(e){return""}},e.toMinutesSeconds=e=>({minutes:Math.floor(e/60),seconds:e%60}),e.to24Hour=e=>{if((null==e?void 0:e.includes("am"))||(null==e?void 0:e.includes("pm"))){const[t,r]=e.split(/(am|pm)/i),[n,o]=t.split(":").map(Number);let i=n;return"pm"===r&&i<12&&(i+=12),"am"===r&&12===i&&(i=0),Wk(i,o)}return e},e.generateTimings=(t,r="12hr",n,o)=>{const i=[];let a=0,l=1440-t;for(n&&(a=e.timeToMinutes(n)),o&&(l=e.timeToMinutes(o));a<=l;){let e=Math.floor(a/60);const n=a%60;if("12hr"===r){const t=e>=12?"pm":"am";e%=12,e=e||12;const r=Wk(e,n,t);i.push(r)}else{const t=Wk(e,n);i.push(t)}a+=t}return i},e.parseInput=(e,t="12hr")=>{if(""===e||void 0===e)return e;const r=e.trim().toLowerCase(),n=/^(?:(\d{1,2})([:.])?(\d{2})?)?(a|p|am|pm)?$/.exec(r);if(!n)return;let o=parseInt(n[1]||"0",10);const i=parseInt(n[3]||"0",10);let a=n[4];if(void 0===n[1]||o>24||i>59)return;if("a"===a?a="am":"p"===a&&(a="pm"),"24hr"===t)return"pm"===a&&o<12?o+=12:("am"===a&&12===o||24===o)&&(o=0),Wk(o,i);a?0===o||24===o?(a="am",o=12):o>12&&(a="pm",o-=12):(a=0===o||24===o||o>6&&o<12?"am":"pm",o=o%12||12);return Wk(o,i,a)},e.findClosestFlooredTime=(t,r)=>{if(!t)return t;const n=e.timeToMinutes(t);let o="",i=1/0;for(const t of r){const r=e.timeToMinutes(t)-n;if(r<=0&&Math.abs(r)<i)i=Math.abs(r),o=t;else if(r>0)break}return o},e.timeToMinutes=e=>{const[t,r]=e.toLowerCase().split(/(am|pm)/),[n,o]=t.split(":").map(Number);let i=n;return"pm"===r&&12!==i&&(i+=12),"am"===r&&12===i&&(i=0),60*i+o},e.calculateDuration=(t,r)=>{const n=e.timeToMinutes(t);return e.timeToMinutes(r)-n},e.calculateScrollPosition=t=>{const{scrollTime:r,minTime:n,maxTime:o,interval:i,intervalWidth:a,options:l}=t;try{if(!/^([0-1]?[0-9]|2[0-3]):[0-5][0-9]$/.test(r))return console.warn(`Invalid scrollTime format: "${r}". Expected format: HH:mm.`),null;const t=(null==l?void 0:l.roundToInterval)?e.roundToNearestInterval(r,i):r,[s,d]=Lk(t);if(isNaN(s)||isNaN(d))return console.warn(`Invalid scrollTime: "${r}".`),null;const c=60*s+d,[u,f]=Lk(n),h=60*u+f,[p,g]=Lk(o);(c<h||c>60*p+g)&&console.warn(`scrollTime "${r}" is outside the range (${n} - ${o}).`);return(c-h)/i*a}catch(e){return console.warn(`Error processing scrollTime: "${r}".`,e),null}}}(Rk||(Rk={}));const Lk=e=>e.split(":").map(Number),Pk=(e,t)=>{const r=parseInt(e);return"24hr"===t?r>=0&&r<=23:r>=1&&r<=12},Nk=e=>{const t=parseInt(e);return t>=0&&t<=59},Hk=(e,t)=>{const r=e?e.split(":"):[],n=new Error("Invalid format");if("12hr"===t){if(2!==r.length||4!==r[1].length)throw n;const e=r[1].substring(0,2),i=r[1].substring(2);if(!Pk(r[0],t)||!Nk(e)||"am"!==(o=i).toLowerCase()&&"pm"!==o.toLowerCase())throw n;return{hour:r[0],minute:e,period:r[1].substring(2)}}if(2!==r.length)throw n;if(!Pk(r[0],t)||!Nk(r[1]))throw n;return{hour:r[0],minute:r[1]};var o},Wk=(e,t,r)=>r?`${e}:${t.toString().padStart(2,"0")}${r}`:`${e.toString().padStart(2,"0")}:${t.toString().padStart(2,"0")}`,Yk=F.div`
    padding: ${ya["spacing-8"]} ${ya["spacing-16"]};
    display: flex;

    ${e=>{let t,r;switch(e.$type){case"error":t=ga["bg-error"](e),r=ga["border-error"](e);break;case"success":t=ga["bg-success"](e),r=ga["border-success"](e);break;case"warning":default:t=ga["bg-warning"](e),r=ga["border-warning"](e);break;case"info":t=ga["bg-info"](e),r=ga["border-info"](e);break;case"description":t=ga["bg-strong"](e),r=ga["border-strong"](e)}return O`
            background: ${t};
            border-left: ${va["width-020"]} ${va.solid}
                ${r};
        `}}
`,Vk=F.div`
    display: flex;
    align-items: center;
    height: 1lh;
    margin-right: ${ya["spacing-8"]};

    ${e=>{let t;const r="small"===e.$sizeType?"1.25rem":"1.5rem";switch(e.$type){case"error":t=ga["icon-error"](e);break;case"success":t=ga["icon-success"](e);break;case"warning":default:t=ga["icon-warning"](e);break;case"info":t=ga["icon-info"](e);break;case"description":t=ga["icon-subtle"](e)}return O`
            svg {
                color: ${t};
                width: ${r};
                height: ${r};
            }
        `}}
`,Uk=F(Wa.LinkSM)`
    ${e=>"small"===e.$sizeType?O`
                ${ma["body-sm-semibold"]}
                margin-top: ${ya["spacing-4"]};
            `:O`
                ${ma["body-md-semibold"]}
                margin-top: ${ya["spacing-8"]};
            `}
    display: flex;
    align-items: center;
    align-self: flex-start;

    svg {
        height: 1rem;
        width: 1rem;
        margin-left: ${ya["spacing-4"]};
    }
`,Kk=F.div`
    display: flex;
    flex-direction: column;
    flex: 1;
    overflow-wrap: anywhere;
`,qk=F.div`
    display: flex;
    flex-direction: column;
    flex: 1;
    order: 1;
    ${e=>{if(e.$showMore&&e.$hasActionLink)return O`
                margin-bottom: ${ya["spacing-8"]};
            `}}
    ${e=>{const t="linear-gradient(to bottom, black 50%, transparent 100%)";if(!e.$showMore&&e.$maxCollapsedHeight)return`\n                max-height: ${e.$maxCollapsedHeight}px;\n\t\t\t\toverflow: hidden;\n                -webkit-mask-image: ${t};\n                mask-image: ${t};\n\t\t\t`}}
`,Zk=F.div`
    color: ${ga.text};

    ${e=>"small"===e.$sizeType?iu({textSize:"body-sm"}):iu({textSize:"body-md"})}
`,Gk=F.button`
    ${e=>"small"===e.$sizeType?O`
                ${ma["body-sm-semibold"]}
            `:O`
                ${ma["body-md-semibold"]}
            `}

    display: flex;
    align-items: center;
    align-self: flex-start;
    gap: ${ya["spacing-4"]};
    margin-top: ${ya["spacing-8"]};
    order: 2;

    cursor: pointer;
    user-select: none;
    border: none;
    background: transparent;

    color: ${ga["text-primary"]};
`,Xk=F(pe)`
    transform: rotate(${e=>e.$expanded?180:0}deg);
    transition: transform ${ba["duration-350"]} ${ba["ease-standard"]};
`,Jk=r=>{var{type:n,className:o,children:i,actionLink:a,actionLinkIcon:l,sizeType:s="default",showIcon:u=!1,customIcon:f,maxCollapsedHeight:h,role:p}=r,m=st(r,["type","className","children","actionLink","actionLinkIcon","sizeType","showIcon","customIcon","maxCollapsedHeight","role"]);const[b,v]=g(!1),[y,x]=g(!1),{height:w,ref:$}=mc(),[C]=g((()=>Hc.generate())),D=c((()=>{v(!h),x(S())}),[h,w]),S=()=>!(!w||!h)&&w>h;d((()=>{D()}),[h,w,D]);return t(Yk,{className:o,$type:n,$sizeType:s,"aria-label":`${(()=>{switch(n){case"success":return"Success";case"warning":return"Warning";case"error":return"Error";case"info":return"Information";case"description":return"Description";default:return"Alert"}})()}`,"data-testid":m["data-testid"],role:p,children:[u&&e(Vk,{$sizeType:s,$type:n,children:(()=>{if(n&&f)return f;switch(n){case"success":return e(Fe,{"aria-hidden":!0});case"warning":return e(Ee,{"aria-hidden":!0});case"error":return e(ae,{"aria-hidden":!0});case"info":case"description":return e(R,{"aria-hidden":!0});default:return null}})()}),t(Kk,{children:[y&&t(Gk,{$sizeType:s,$type:n,type:"button","aria-expanded":b,"aria-controls":C,onClick:()=>v(!b),children:["Show ",b?"less":"more",e(Xk,{$expanded:b})]}),t(qk,{id:C,$maxCollapsedHeight:S()?h:void 0,$showMore:b,$hasActionLink:!!a,inert:Sf(!!h&&!b),children:[e(Zk,{ref:$,$type:n,$sizeType:s,children:i}),a?t(Uk,Object.assign({"data-testid":"action-link",$type:n,$sizeType:s,underlineStyle:"none"},a,{children:[a.children,l||e(ke,{})]})):null]})]})]})},Qk=F.div`
    height: 1.625rem;
    width: 1.625rem;
    margin-right: 0.5rem;
    flex-shrink: 0;

    svg {
        height: 100%;
        width: 100%;
    }

    ${e=>e.$disabled?e.$active?O`
                    color: ${ga["icon-selected-disabled"]};
                `:O`
                    color: ${ga["icon-disabled-subtle"]};
                `:e.$active?O`
                color: ${ga["icon-selected"]};
            `:O`
            color: ${ga["icon-subtle"]};
        `};
`,eE=O`
    margin-bottom: ${e=>e.$bottomMargin||0}rem;

    // Counter matters
    counter-reset: list;

    ${e=>e.$size&&ma[`${e.$size}-regular`]}
    font-weight: ${ma.Spec["weight-regular"]};
    color: ${ga.text};

    // nested lists styling
    ol,
    ul {
        margin-top: 0.5rem;
        margin-bottom: 0.5rem;
    }
`,tE=F.ol`
    ${eE}

    margin-left: 3em;

    ${Ca.MaxWidth.lg} {
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
`,rE=F.ul`
    ${eE}

    margin-left: ${e=>e.$hasCustomIcon?0:"2.5em"};
    list-style-type: ${e=>e.$hasCustomIcon?"none":e.$bulletType||"disc"};

    ${e=>e.$hasCustomIcon&&O`
            & > li {
                display: flex;
                align-items: flex-start;
                gap: 0.5em;
            }
        `}
`,nE=n=>{var{size:i,bulletType:a,bottomMargin:l,children:s}=n,d=st(n,["size","bulletType","bottomMargin","children"]);const c=void 0!==a&&"string"!=typeof a;return e(rE,Object.assign({$size:i,$bulletType:c?void 0:a,$bottomMargin:l,$hasCustomIcon:c},d,{children:c?o.Children.map(s,(n=>o.isValidElement(n)?o.cloneElement(n,{children:t(r,{children:[e("div",{"aria-hidden":!0,children:a}),e("div",{children:n.props.children})]})}):n)):s}))};nE.displayName="TextList.Ul";const oE=t=>{var{size:r,counterType:n,counterSeparator:o,bottomMargin:i,children:a}=t,l=st(t,["size","counterType","counterSeparator","bottomMargin","children"]);return e(tE,Object.assign({$size:r,$counterType:n,$counterSeparator:o,$bottomMargin:i},l,{children:a}))};oE.displayName="TextList.Ol";const iE=nE,aE=F.div`
    position: relative;
    display: inline-flex;
    min-width: 10.375rem;
    border-radius: ${xa.sm};
    border-width: 1px;
    border-style: solid;
    overflow: hidden;
    flex-direction: column;
    height: fit-content;
    background: ${ga.bg};

    &:has(input:focus-visible) {
        outline: 2px solid ${ga["focus-ring"]};
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
                            border-color: ${ga["border-error"]};
                        `:O`
                            border-color: ${ga["border-error"]};

                            &:has(${fE}:hover) {
                                @media (pointer: fine) {
                                    background: ${ga["bg-hover-subtle"]};
                                }
                            }
                        `:e.$disabled?e.$selected?O`
                            border: none;
                            background: ${ga["bg-selected-disabled"]};
                        `:O`
                            border: none;
                        `:e.$selected?O`
                        border: none;
                        background: ${ga["bg-selected"]};

                        &:has(${fE}:hover) {
                            @media (pointer: fine) {
                                background: ${ga["bg-selected-hover"]};

                                & ${dE} {
                                    color: ${ga["text-selected-hover"]};
                                }

                                & ${wE} {
                                    color: ${ga["icon-selected-hover"]};
                                }
                            }
                        }
                    `:O`
                    border: none;

                    &:has(${fE}:hover) {
                        @media (pointer: fine) {
                            background: ${ga["bg-hover-subtle"]};
                        }
                    }
                `:e.$error?e.$disabled?O`
                            border-color: ${ga["border-error"]};
                        `:O`
                            border-color: ${ga["border-error"]};

                            &:has(${fE}:hover) {
                                @media (pointer: fine) {
                                    background: ${ga["bg-hover-subtle"]};
                                }
                            }
                        `:e.$disabled?e.$selected?O`
                            border-color: ${ga["border-selected-disabled"]};
                            background: ${ga["bg-selected-disabled"]};
                        `:O`
                            border-color: ${ga["border-disabled"]};
                            background: ${ga["bg-disabled"]};
                        `:e.$selected?O`
                        border-color: ${ga["border-selected"]};
                        background: ${ga["bg-selected"]};

                        &:has(${fE}:hover) {
                            @media (pointer: fine) {
                                background: ${ga["bg-selected-hover"]};

                                & ${dE} {
                                    color: ${ga["text-selected-hover"]};
                                }

                                & ${wE} {
                                    color: ${ga["icon-selected-hover"]};
                                }
                            }
                        }
                    `:O`
                    border-color: ${ga.border};

                    &:has(${fE}:hover) {
                        @media (pointer: fine) {
                            background: ${ga["bg-hover-subtle"]};
                        }
                    }
                `}
`,lE=F.input`
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
`,sE=F.div`
    display: flex;
`,dE=F.div`
    display: flex;
    flex-direction: column;
    overflow-wrap: anywhere;
    width: 100%;
    overflow: hidden;

    // apply header container text color
    ${e=>e.$disabled?e.$selected?O`
                    color: ${ga["text-selected-disabled"]};
                `:O`
                    color: ${ga["text-disabled"]};
                `:e.$selected?O`
                color: ${ga["text-selected"]};
            `:O`
            color: ${ga.text};
        `}
`,cE=F.label`
    ${e=>e.$selected?ma["body-baseline-semibold"]:ma["body-baseline-regular"]};
    overflow: hidden;
    display: -webkit-box;
    text-overflow: ellipsis;
    -webkit-box-orient: vertical;
    overflow-wrap: break-word;
    -webkit-line-clamp: ${e=>{var t,r;return null!==(r=null===(t=e.$maxLines)||void 0===t?void 0:t.desktop)&&void 0!==r?r:"none"}};
    ${Ca.MaxWidth.lg} {
        -webkit-line-clamp: ${e=>{var t,r;return null!==(r=null===(t=e.$maxLines)||void 0===t?void 0:t.tablet)&&void 0!==r?r:"none"}};
    }
    ${Ca.MaxWidth.sm} {
        -webkit-line-clamp: ${e=>{var t,r;return null!==(r=null===(t=e.$maxLines)||void 0===t?void 0:t.mobile)&&void 0!==r?r:"none"}};
    }
`,uE=F.div`
    ${ma["body-md-regular"]}
    margin-top: 0.5rem;

    z-index: 1; // forces sublabel to render above the input
    pointer-events: none; // to allow click events to be passed to the input

    strong,
    b {
        ${ma["body-md-semibold"]}
    }
`,fE=F.div`
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
`,hE=F.div`
    display: flex;
    height: 100%;
    width: 100%;
    position: relative;
    padding: ${e=>e.$addPadding?"0.6875rem 0rem 0.6875rem 1rem":"0.6875rem 1rem"};
`,pE=F.button`
    color: ${e=>e.$disabled?ga["text-disabled"]:ga["text-error"]};
    white-space: nowrap;
    ${ma["body-md-semibold"]}
    height: fit-content;
    padding: 0.6875rem 1rem 0.6875rem 0.5rem;
    border: none;
    background: none;

    cursor: ${e=>e.$disabled?"not-allowed":"pointer"};
`,gE=F.button`
    color: ${e=>e.disabled?ga["text-disabled"]:ga["text-primary"]};
    ${ma["body-baseline-semibold"]}
    display: flex;
    align-items: center;
    justify-content: flex-end;
    border: none;
    background-color: ${ga.bg};
    cursor: ${e=>e.disabled?"not-allowed":"pointer"};
    padding: 0 1rem 0.6875rem 1rem;
    padding-top: ${e=>e.$paddingTopRequired?"0.6875rem":"0rem"};
    width: 100%;

    svg {
        width: 1em;
        height: 1em;
        margin-left: 0.5rem;
    }
`,mE=F.div`
    width: 100%;
    color: ${e=>e.$disabled?ga["text-disabled"]:ga["text-error"]};
    border: none;
    background: ${ga.bg};
    cursor: ${e=>e.$disabled?"not-allowed":"pointer"};
    padding: 0.6875rem 1rem 0.5rem 1rem;
`,bE=F(Jk)`
    width: 100%;
    user-select: none;
`,vE=F.div`
    padding: 0 1rem;
    padding-top: 0.6875rem;
    padding-bottom: ${e=>e.$isFinalItem?"0.6875rem":"0.5rem"};
    background-color: ${ga.bg};
    ${iu({textSize:"body-md"})}

    ${e=>e.$disabled?O`
                color: ${ga["text-disabled"]};
            `:e.$selected?O`
                color: ${ga["text-selected"]};
            `:O`
                color: ${ga.text};
            `}
`,yE=F(Wa.BodyMD)`
    color: ${e=>e.$disabled?ga["text-disabled"]:ga["text-error"]};
`,xE=F(iE)`
    color: ${e=>e.$disabled?ga["text-disabled"]:ga["text-error"]};
`,wE=F((({type:t,active:r=!1,disabled:n,className:o})=>{let i;switch(t){case"checkbox":i=e(r?be:ge,{});break;case"radio":i=e(r?Te:Oe,{});break;case"tick":i=e(ve,{});break;case"cross":i=e(L,{});break;default:i=null}return e(Qk,{className:o,$active:r,$disabled:n,"aria-hidden":!0,children:i})}))`
    ${e=>e.$disabled?e.$selected?O`
                    color: ${ga["icon-selected-disabled"]};
                `:O`
                    color: ${ga["icon-disabled-subtle"]};
                `:e.$selected?O`
                color: ${ga["icon-selected"]};
            `:O`
            color: ${ga["icon-subtle"]};
        `};
`,$E=F.div`
    overflow: hidden;

    ${Ca.MaxWidth.xxs} {
        max-width: 100%;
    }
`,CE=F.div`
    position: relative;
    width: 100%;
    padding: ${ya["spacing-8"]} ${ya["spacing-20"]}
        ${ya["spacing-24"]} ${ya["spacing-20"]};
    display: flex;
    flex-direction: column;
    background: ${ga.bg};
    border: ${va["width-010"]} ${va.solid} ${ga.border};
    border-radius: ${xa.sm};
`,DE=F.div`
    display: flex;
    align-items: center;
    justify-content: space-between;

    ${Ca.MaxWidth.xxs} {
        flex-direction: column;
        width: 100%;
    }
`,SE=F.div`
    display: flex;
    justify-content: flex-end;
    margin-top: ${ya["spacing-16"]};
    gap: ${ya["spacing-8"]};

    ${Ca.MaxWidth.xxs} {
        flex-direction: column-reverse; // FIXME: this breaks tab focus
        margin-top: ${ya["spacing-32"]};
    }
`,kE=F.div`
    display: flex;
    align-items: center;
    margin-right: ${ya["spacing-32"]};

    ${Ca.MaxWidth.xxs} {
        margin-right: 0;
        width: 100%;
    }
`,EE=F.div`
    display: flex;
    gap: ${ya["spacing-8"]};

    ${Ca.MaxWidth.lg} {
        flex-direction: column;
    }

    ${Ca.MaxWidth.xxs} {
        flex-direction: row;
        width: 100%;
    }
`,FE=F.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    ${Ca.MaxWidth.xxs} {
        width: 6rem;
    }
`,OE=F(tu)`
    width: 5rem;
    padding: ${ya["spacing-16"]} 0;
    color: ${ga.icon};

    svg {
        height: 1rem;
        width: 1rem;
    }

    &:hover {
        color: ${ga["icon-hover"]};
    }
`,TE=F(Wa.BodyBL)`
    flex-shrink: 0;
    width: 1.5rem;
    text-align: center;
`,_E=F(Wh)`
    height: calc(3rem - 2px);
    width: 5rem;
    display: flex;
    align-items: center;
    justify-content: center;

    ${Ca.MaxWidth.xxs} {
        width: 100%;
    }
`,IE=F(Vh)`
    text-align: center;
    width: 100%;

    &:focus::placeholder {
        color: transparent;
    }
`,ME=F((n=>{var{type:o="checkbox",indicator:i,checked:s,styleType:c="default",children:u,childrenMaxLines:f,subLabel:h,disabled:p,error:m,name:b,id:v,className:y,compositeSection:x,removable:w,onRemove:$,"data-testid":C,onChange:D,useContentWidth:S,"aria-describedby":k}=n,E=st(n,["type","indicator","checked","styleType","children","childrenMaxLines","subLabel","disabled","error","name","id","className","compositeSection","removable","onRemove","data-testid","onChange","useContentWidth","aria-describedby"]);const{collapsible:F=!0,errors:O,children:T,initialExpanded:_}=x||{},[I,M]=g(s),[A,B]=g(!!_),j=a((()=>{const e=Array.isArray(O)&&(null==O?void 0:O.length)>0,t=!Array.isArray(O)&&!!O;return e||t}),[O]),[z]=g(Hc.generate()),R=v?`${v}`:`tg-${z}`,L=l(null);d((()=>{M(s)}),[s]),d((()=>{I&&B(null==_||_)}),[I]);const P=e=>{if(!p){if(D)return void D(e);switch(o){case"checkbox":M((e=>!e));break;case"radio":case"yes":case"no":I||M(!0)}}},N=()=>{p||B(!A)},H=()=>{p||!$||$()},W=()=>{var e;null===(e=null==L?void 0:L.current)||void 0===e||e.click()},Y=e=>{e.stopPropagation()},V=()=>{let t;switch(o){case"yes":t="tick";break;case"no":t="cross";break;case"checkbox":case"radio":t=o}return e(wE,{type:t,active:I,disabled:p,$selected:I,$disabled:p})},U=()=>{if(!h)return null;let t;return t="function"==typeof h?h():h,e(uE,{"data-id":"toggle-sublabel",id:`${R}-sublabel`,"aria-hidden":!0,children:t})},K=n=>t(r,{children:[e(yE,{weight:"semibold",$disabled:p,children:"Error"}),e(xE,{$disabled:p,children:null==n?void 0:n.map(((t,r)=>e("li",{id:`${R}-error-list-item-${r}`,children:e(yE,{weight:"semibold",$disabled:p,children:t})},r)))})]});return t(aE,{$selected:I,$disabled:p,className:y,$styleType:c,$error:m,$indicator:i,$useContentWidth:S,id:v,"data-testid":C,children:[(()=>{const r=["string"==typeof h?`${R}-sublabel`:null,k].filter(Boolean).join(" ")||void 0;return t(fE,{id:`${R}-header-container`,$disabled:p,$error:m,$selected:I,$indicator:i,$styleType:c,children:[e(hE,{$addPadding:w,children:t(sE,{id:`${R}-input-container`,onClick:W,children:[e(lE,Object.assign({ref:L,name:b,id:`${R}-input`,type:"checkbox"===o?"checkbox":"radio","data-testid":"toggle-input",disabled:p,onChange:P,onClick:Y,checked:I,"aria-describedby":r},E)),i&&V(),t(dE,{$selected:I,$disabled:p,children:[e(cE,{htmlFor:`${R}-input`,"data-testid":"toggle-label",id:`${R}-label`,$maxLines:f,$selected:I,children:u}),h&&U()]})]})}),w&&e(pE,{type:"button",$disabled:p,onClick:H,id:`${R}-remove-button`,children:"Remove"})]})})(),T&&t("div",{children:[(!F||A)&&e(vE,{"data-id":"toggle-composite-children",$isFinalItem:!F,$disabled:p,children:T}),F&&!A&&j&&e(mE,{$disabled:p,onClick:N,id:`${R}-error-alert`,children:e(bE,{type:p?"description":"error",className:y,showIcon:!0,children:Array.isArray(O)?K(O):O})}),F&&t(gE,{$paddingTopRequired:!A&&!j,disabled:p,onClick:N,"data-testid":A?"collapse-button":"expand-button",children:[A?"Show less":"Show more",e(A?Se:le,{"aria-hidden":!0})]})]})]})}))`
    min-width: 5rem;
    flex: 1;
`,AE=F(Pf.Small)`
    width: 7rem;

    ${Ca.MaxWidth.sm} {
        flex: 1;
    }

    ${Ca.MaxWidth.xxs} {
        width: 100%;
    }
`;var BE,jE,zE;!function(e){e.HOUR_UP="hour-up",e.HOUR_DOWN="hour-down",e.MINUTE_UP="minute-up",e.MINUTE_DOWN="minute-down"}(BE||(BE={})),function(e){e.HOUR="hour",e.MINUTE="minute"}(jE||(jE={})),function(e){e.AM="am",e.PM="pm"}(zE||(zE={}));const RE=({id:r,value:n,show:o,format:i,onChange:a,onCancel:s})=>{const u=Rk.getTimeValues(i,n),[f,h]=g(u.hour),[p,m]=g(u.minute),[b,v]=g(u.period),y=l(null),x=l(null);d((()=>{if(o&&y.current&&y.current.focus({preventScroll:!0}),o){const{hour:e,minute:t,period:r}=Rk.getTimeValues(i,n);h(e),m(t),v(r)}}),[o,n,i]),d((()=>{const e=y.current,t=x.current;return e&&e.addEventListener("keydown",w),t&&t.addEventListener("keydown",w),()=>{e&&e.removeEventListener("keydown",w),t&&t.removeEventListener("keydown",w)}}),[]);const w=e=>{["Digit0","Digit1","Digit2","Digit3","Digit4","Digit5","Digit6","Digit7","Digit8","Digit9","Tab","Backspace","Delete","ArrowLeft","ArrowRight","ArrowUp","ArrowDown"].includes(e.code)||["Backspace","0","1","2","3","4","5","6","7","8","9"].includes(e.key)||e.preventDefault()},$=c((e=>{switch(e.currentTarget.name){case BE.MINUTE_UP:m(Rk.updateMinutes(p,"add"));break;case BE.MINUTE_DOWN:m(Rk.updateMinutes(p,"minus"));break;case BE.HOUR_UP:h(Rk.updateHours(f,"add"));break;case BE.HOUR_DOWN:h(Rk.updateHours(f,"minus"))}}),[f,p]),C=e=>{e.target.select()},D=e=>{const t=e.target.value;switch(e.target.name){case jE.HOUR:t.length<=2&&h(t);break;case jE.MINUTE:t.length<=2&&m(t)}},S=e=>{const t=parseInt(e.target.value);if(!isNaN(t))switch(e.target.name){case jE.HOUR:{const r=t>23||t<0?u.hour:Rk.convertHourTo12HourFormat(e.target.value);h(r);break}case jE.MINUTE:{const r=t>59||t<0?u.minute:e.target.value;m(Wc.padValue(r));break}}},k=e=>{switch(e.target.name){case zE.AM:v(zk.AM);break;case zE.PM:v(zk.PM)}},E=e=>r?`${r}-${e}`:e;return e($E,{children:t(CE,{"data-testid":E("timepicker-dropdown"),inert:Sf(!o),children:[t(DE,{children:[t(kE,{children:[t(FE,{children:[e(OE,{"aria-label":"increase hour",name:BE.HOUR_UP,tabIndex:-1,onClick:$,"data-testid":E("hour-increment-button"),children:e(Se,{})}),e(_E,{children:e(IE,{"aria-label":"hour",type:"number",name:jE.HOUR,id:"hour",maxLength:2,pattern:"[0-9]{2}",ref:y,value:f,onFocus:C,onChange:D,onBlur:S,min:1,max:12,placeholder:"HH","data-testid":E("hour-input")})}),e(OE,{"aria-label":"decrease hour",name:BE.HOUR_DOWN,tabIndex:-1,onClick:$,"data-testid":E("hour-decrement-button"),children:e(le,{})})]}),e(TE,{children:":"}),t(FE,{children:[e(OE,{"aria-label":"increase minute",name:BE.MINUTE_UP,tabIndex:-1,onClick:$,"data-testid":E("minute-increment-button"),children:e(Se,{})}),e(_E,{children:e(IE,{"aria-label":"minute",type:"number",name:jE.MINUTE,id:"minute",maxLength:2,pattern:"[0-9]{2}",ref:x,value:p,onChange:D,onBlur:S,onFocus:C,min:0,max:59,placeholder:"MM","data-testid":E("minute-input")})}),e(OE,{"aria-label":"decrease minute",name:BE.MINUTE_DOWN,tabIndex:-1,onClick:$,"data-testid":E("minute-decrement-button"),children:e(le,{})})]})]}),t(EE,{children:[e(ME,{checked:b===zk.AM,name:zE.AM,type:"radio",onChange:k,"data-testid":E("am-toggle"),"aria-label":"AM",children:"AM"}),e(ME,{checked:b===zk.PM,name:zE.PM,type:"radio",onChange:k,"data-testid":E("pm-toggle"),"aria-label":"PM",children:"PM"})]})]}),t(SE,{children:[e(AE,{type:"button",styleType:"secondary",onClick:s,"data-testid":E("cancel-button"),children:"Cancel"}),e(AE,{type:"button",onClick:()=>{let e;e="24hr"===i?Rk.convertTo24HourFormat({hour:f,minute:p,period:b}):`${f}:${p}${b}`,a(e)},disabled:""===f||""===p,"data-testid":E("confirm-button"),children:"Done"})]})]})})},LE=r=>{var{id:n,disabled:o=!1,error:i,value:a,format:s="24hr",readOnly:c,onChange:u,onFocus:f,onBlur:h,alignment:p="left",dropdownZIndex:m,dropdownRootNode:b,"aria-labelledby":v,"aria-describedby":y,"aria-invalid":x}=r,w=st(r,["id","disabled","error","value","format","readOnly","onChange","onFocus","onBlur","alignment","dropdownZIndex","dropdownRootNode","aria-labelledby","aria-describedby","aria-invalid"]);const[$,C]=g(!1),[D,S]=g("none"),[k,E]=g(""),[F,O]=g(""),[T,_]=g(!1),I=!c&&!o,M=l(null),[A]=g((()=>Hc.generate())),B=`${A}-start-label`,j=`${A}-end-label`,z=e=>kf(v,"start"===e?B:j),R=()=>kf(y);d((()=>{a&&(E(a.start),O(a.end))}),[a]);const L=e=>{I&&(T||$||null==f||f(),_(!0),S(e),C(!0))},P=e=>{var t,r;const n=!!(null==e?void 0:e.keepFocus),o=null!==(t=null==e?void 0:e.triggerBlur)&&void 0!==t?t:!n;C(!1),S("none"),_(n),o&&(null==h||h()),n&&(null===(r=M.current)||void 0===r||r.focus())},N=e=>{var t,r,n;if(!T||$)return;const o=e.relatedTarget,i=(null===(t=null==o?void 0:o.matches)||void 0===t?void 0:t.call(o,"[data-floating-ui-focusable]"))||(null===(r=null==o?void 0:o.matches)||void 0===r?void 0:r.call(o,"[data-floating-ui-focus-guard]"));!(!o||!(null===(n=M.current)||void 0===n?void 0:n.contains(o)))||i||(_(!1),null==h||h())},H=e=>{E(e),null==u||u({start:e,end:F}),S("end"),C(!0),_(!0)},W=e=>{O(e),null==u||u({start:k,end:e}),""===k?(S("start"),C(!0),_(!0)):P({keepFocus:!0})};return e(Ak,Object.assign({id:n},w,{children:e($f,{enabled:I,isOpen:$,renderElement:()=>e(Bk,{ref:M,tabIndex:-1,onBlur:N,"data-testid":"timepicker-container",role:"group",$disabled:o,$error:i,$readOnly:c,$focused:T,children:t(dp,{error:i,currentActive:D,children:[e(jk,{onFocus:()=>L("start"),onClick:()=>L("start"),readOnly:!0,placeholder:"From",value:Rk.formatDisplayValue(k,s),"data-testid":w["data-testid"]?`${w["data-testid"]}-timepicker-selector-from`:"timepicker-selector-from",role:"combobox","aria-expanded":!o&&!c&&$,"aria-invalid":i||x,"aria-disabled":o,"aria-readonly":c,"aria-labelledby":z("start"),"aria-describedby":R()}),e(jk,{onClick:()=>L("end"),readOnly:!0,placeholder:"To",value:Rk.formatDisplayValue(F,s),"data-testid":w["data-testid"]?`${w["data-testid"]}-timepicker-selector-to`:"timepicker-selector-to",role:"combobox","aria-expanded":!o&&!c&&$,"aria-invalid":i||x||void 0,"aria-disabled":o||void 0,"aria-readonly":c||void 0,"aria-labelledby":z("end"),"aria-describedby":R()})]})}),renderDropdown:({styles:r,setFloatingRef:o,getFloatingProps:i})=>$?t("div",Object.assign({ref:o,style:r,role:"dialog","aria-label":"start"===D?"Selecting for: Start time":"end"===D?"Selecting for: End time":void 0},i(),{children:["start"===D&&e(RE,{id:n?`${n}-start`:void 0,show:!0,value:k,format:s,onCancel:()=>P({keepFocus:!0}),onChange:H}),"end"===D&&e(RE,{id:n?`${n}-end`:void 0,show:!0,value:F,format:s,onCancel:()=>P({keepFocus:!1}),onChange:W})]}),D):null,onClose:()=>P({keepFocus:!1}),onDismiss:()=>P({keepFocus:!0}),clickToToggle:!1,offset:8,alignment:p,customZIndex:m,rootNode:b})}))},PE=F(Yh)`
    height: 3rem;
    gap: ${ya["spacing-8"]};
    // space for clear icon
    padding-right: calc(1.25rem + ${ya["spacing-20"]});
`,NE=r=>{var{id:n,disabled:o=!1,error:i,value:s,format:u="12hr",readOnly:f,onChange:h,onFocus:p,onBlur:m,alignment:b="left",dropdownZIndex:v,startLimit:y,endLimit:x,interval:w=15,dropdownRootNode:$,"aria-labelledby":C,"aria-describedby":D,"aria-invalid":S}=r,k=st(r,["id","disabled","error","value","format","readOnly","onChange","onFocus","onBlur","alignment","dropdownZIndex","startLimit","endLimit","interval","dropdownRootNode","aria-labelledby","aria-describedby","aria-invalid"]);const[E]=g((()=>Hc.generate())),[F,O]=g(null),[T,_]=g(!1),[I,M]=g(""),[A,B]=g(""),[j,z]=g(""),[R,L]=g(""),[P,N]=g(""),H=l(null),W=l(null),Y=l(null),V=`${E}-listbox`,U=`${E}-start-label`,K=`${E}-end-label`,q=`${E}-error-message`,Z=a((()=>Rk.generateTimings(w,u,y,x)),[w,u,y,x]),G=a((()=>{if(""===R)return Z;const e=Rk.findClosestFlooredTime(R,Z);return e?Z.slice(Z.indexOf(e)):[]}),[Z,R]),X=c((e=>Rk.parseInput(e,u)),[u]);d((()=>{var e,t;if(s){const r=null!==(e=X(s.start))&&void 0!==e?e:"",n=null!==(t=X(s.end))&&void 0!==t?t:"";B(r),z(n),L(r),N(n)}}),[s,X]),d((()=>{if(i)return void _(!1);const e=X(A),t=X(j);if(void 0===e)M("Invalid start time");else if(void 0===t)M("Invalid end time");else{if(!(""!==e&&""!==t&&Rk.to24Hour(t)<Rk.to24Hour(e)))return M(""),void(document.activeElement!==W.current&&document.activeElement!==Y.current||_(!0));M("End time must be after start time")}_(!1)}),[A,j,X,i]);const J=()=>"start"===F?"Selecting for: Start time":"end"===F?"Selecting for: End time":void 0,Q=e=>kf(C,"start"===e?U:K),ee=()=>kf(D,!i&&I?q:void 0),te=e=>{o||f||(F||T||null==p||p(),O(e),_(!0))},re=e=>{var t;o||f||(O(e),_(!0),null===(t=("start"===e?W:Y).current)||void 0===t||t.select())};function ne(e){var t;switch(e.code){case"Enter":"start"===F?oe(A):"end"===F&&(T&&ie(j),null===(t=Y.current)||void 0===t||t.blur());break;case"Tab":ae(A,j,{})}}const oe=e=>{ae(e,j,{goToNextInput:!0})},ie=e=>{ae(A,e,{triggerOnBlur:!0})},ae=(e,t,{goToNextInput:r,triggerOnBlur:n})=>{var o,i,a;const l=null!==(o=X(e))&&void 0!==o?o:R,s=null!==(i=X(t))&&void 0!==i?i:P;B(l),z(s);l===R&&s===P||null==h||h({start:l,end:s}),r&&void 0!==X(e)&&(O("end"),null===(a=Y.current)||void 0===a||a.select()),n&&(O(null),_(!1),null==m||m()),L(l),N(s)},le=e=>{e.stopPropagation(),B(""),z(""),L(""),N("");null==h||h({start:"",end:""}),O(null),_(!1)},se=e=>{var t,r;const n=e.relatedTarget,o=(null===(t=null==n?void 0:n.matches)||void 0===t?void 0:t.call(n,"[data-floating-ui-focusable]"))||(null===(r=null==n?void 0:n.matches)||void 0===r?void 0:r.call(n,"[data-floating-ui-focus-guard]")),i=H.current&&H.current.contains(n);F&&!T&&!i&&!o&&ae(A,j,{triggerOnBlur:!0})},de=()=>{if(!f&&!o&&((null==A?void 0:A.length)>0||(null==j?void 0:j.length)>0))return e(pk,{onClick:le,type:"button","aria-label":"Clear",children:e(xg,{"aria-hidden":!0})})};return t(Ak,Object.assign({id:n},k,{children:[e(J$,{children:e($f,{enabled:!f&&!o,isOpen:T,renderElement:()=>t(PE,{ref:H,$disabled:o,$error:i||!!I,$readOnly:f,onBlur:se,role:"group",children:[e(Df,{id:U,children:"Start time"}),e(Df,{id:K,children:"End time"}),t(dp,{error:i||!!I,currentActive:null===F?"none":F,children:[e(jk,{ref:W,onFocus:()=>te("start"),placeholder:"start"===F?"hh:mm":"From",onChange:e=>B(e.target.value),value:A,readOnly:f,"data-testid":k["data-testid"]?`${k["data-testid"]}-timepicker-selector-start`:"timepicker-selector-start",onClick:()=>re("start"),onKeyDown:ne,autoComplete:"off",type:"text",role:"combobox","aria-labelledby":Q("start"),"aria-describedby":ee(),"aria-expanded":T&&"start"===F,"aria-controls":V,"aria-autocomplete":"list","aria-invalid":i||S||!!I,"aria-disabled":o,"aria-readonly":f}),e(jk,{ref:Y,onFocus:()=>te("end"),placeholder:"end"===F?"hh:mm":"To",onChange:e=>z(e.target.value),value:j,readOnly:f,"data-testid":k["data-testid"]?`${k["data-testid"]}-timepicker-selector-end`:"timepicker-selector-end",onClick:()=>re("end"),onKeyDown:ne,autoComplete:"off",type:"text",role:"combobox","aria-labelledby":Q("end"),"aria-describedby":ee(),"aria-expanded":T&&"end"===F,"aria-controls":V,"aria-autocomplete":"list","aria-invalid":i||S||!!I||void 0,"aria-disabled":o||void 0,"aria-readonly":f||void 0})]}),de()]}),renderDropdown:()=>e($C,"start"===F?{listItems:Z,onSelectItem:oe,selectedItems:[A],topScrollItem:Rk.findClosestFlooredTime(X(A),Z),listboxId:V,ariaLabel:J(),disableItemFocus:!0,matchElementWidth:!0}:{listItems:G,onSelectItem:ie,selectedItems:[j],topScrollItem:Rk.findClosestFlooredTime(X(j),G),listboxId:V,ariaLabel:J(),disableItemFocus:!0,matchElementWidth:!0}),onClose:e=>{"outside-press"===e?(O(null),_(!1),null==m||m()):ae(A,j,{triggerOnBlur:!0})},onDismiss:()=>{var e;null===(e=("start"===F?W:Y).current)||void 0===e||e.focus(),_(!1)},offset:8,alignment:b,fitAvailableHeight:!0,customZIndex:v,rootNode:$})}),!i&&I&&t(Uu,{children:[e(Vu,{"aria-hidden":!0}),e(Ku,{id:q,tabIndex:0,"data-testid":n?`${n}-error-message`:"error-message",children:I})]})]}))},HE=t=>{var{variant:r="dial"}=t,n=st(t,["variant"]);return e("combobox"===r?NE:LE,Object.assign({},n))};F.div`
    position: relative;
`;const WE=F(Vh)`
    height: calc(3rem - 2px); // exclude top and bottom borders
`,YE=t=>{var{id:r,disabled:n=!1,readOnly:o=!1,error:i,value:a,placeholder:s,format:d="24hr",onChange:u,onFocus:f,onBlur:h,alignment:p,dropdownZIndex:m,dropdownRootNode:b,"aria-labelledby":v,"aria-describedby":y}=t,x=st(t,["id","disabled","readOnly","error","value","placeholder","format","onChange","onFocus","onBlur","alignment","dropdownZIndex","dropdownRootNode","aria-labelledby","aria-describedby"]);const[w,$]=g(!1),C=l(null),D=l(null),S=c((()=>"12hr"===d?"HH:MMam":"HH:MM"),[d]),k=()=>{var e;null===(e=D.current)||void 0===e||e.focus({preventScroll:!0})},E=()=>{n||o||$(!0)},F=()=>{$(!1),k()},O=e=>{null==u||u(e),$(!1),k()},T=()=>{null==f||f()},_=e=>{var t;if(w)return;const r=e.relatedTarget;r&&(null===(t=C.current)||void 0===t?void 0:t.contains(r))||null==h||h()},I=e=>{n||o||"Enter"!==e.key&&" "!==e.key&&"ArrowDown"!==e.key||(e.preventDefault(),E())};return e($f,{enabled:!o&&!n,isOpen:w,renderElement:()=>e(Yh,Object.assign({ref:C,role:"group",$readOnly:o,$disabled:n,$focused:w,$error:i},x,{children:e(WE,{ref:D,readOnly:!0,placeholder:s||S(),value:Rk.formatDisplayValue(a,d),role:"combobox","aria-invalid":i||void 0,"aria-disabled":n||void 0,"aria-readonly":o||void 0,"aria-labelledby":v,"aria-describedby":y,"aria-expanded":!n&&!o&&w,"data-testid":r?`${r}-timepicker-selector`:"timepicker-selector",onFocus:T,onClick:E,onKeyDown:I,onBlur:_})})),renderDropdown:({styles:t,setFloatingRef:n,getFloatingProps:o})=>e("div",Object.assign({ref:n,style:t,role:"dialog","aria-label":"Time picker"},o(),{children:e(RE,{id:r,show:w,value:a,format:d,onCancel:F,onChange:O})})),onOpen:E,onClose:()=>{$(!1),null==h||h()},onDismiss:F,offset:8,alignment:p,customZIndex:m,rootNode:b})},VE=F(ZD)`
    margin-right: 0.5rem;
`,UE=F(Cg)`
    width: 2.5rem;

    input {
        text-align: center;
    }
`,KE=F(UE)`
    // Cheat to balance the placeholder look while ensuring enough width
    margin-left: 0.5rem;
    width: 6rem;

    input {
        text-align: left;
    }
`,qE=F(Wa.BodyBL)`
    margin: 0 0.25rem;
    ${e=>{if(e.$inactive)return O`
                color: ${ga["text-disabled"]};
            `}}
`,ZE=F.div`
    display: flex;
    align-items: center;
    height: calc(3rem - 2px); // exclude top and bottom borders
`,GE=F(Wa.BodyBL)``,XE=n=>{var{disabled:o,error:i,value:s,onChange:c,onBlur:u,onChangeRaw:f,onBlurRaw:h,readOnly:p,placeholder:m="00-8888",autoComplete:b,"aria-labelledby":v,"aria-describedby":y,"aria-invalid":x}=n,w=st(n,["disabled","error","value","onChange","onBlur","onChangeRaw","onBlurRaw","readOnly","placeholder","autoComplete","aria-labelledby","aria-describedby","aria-invalid"]);const[$,C]=g(""),[D,S]=g(""),[k,E]=g("none"),[F]=g((()=>Hc.generate())),O=`${F}-floor-label`,T=`${F}-unit-label`,_=`${F}-live-message`,I=l(null),M=l(null),A=l(null),B=l($),j=l(D),z=l(k),R=e=>e.toLocaleUpperCase().replace(/[^0-9A-Za-z]/g,""),L=Kc({ref:M,formatter:R}),P=Kc({ref:A,formatter:R}),N=a((()=>{let e="";const t=te("Hash",$),r=te("Dash",D);switch(k){case"floor":e=t;break;case"unit":e=$?[t,r].join(" "):r;break;default:e=""}return e}),[k,$,D]),H=e=>{B.current=e,C(e)},W=e=>{j.current=e,S(e)},Y=e=>{z.current=e,E(e)};d((()=>{"floor"===k&&3===$.length&&A.current&&A.current.focus()}),[$]),d((()=>{G(s)}),[s]);const V=e=>{Y(e.target.name),e.target.select()},U=e=>{const t=e.target.name,r=e.target.value,n=Z(r);"floor"===t?(H(n),n!==$&&X(n,t)):"unit"===t&&(W(n),n!==D&&X(n,t))},K=e=>{const t=e.target.name;if("floor"===t){const e=L();if(!e)return;const{nextValue:r,updateCaretPosition:n}=e;n(),H(r),X(r,t)}else if("unit"===t){const e=P();if(!e)return;const{nextValue:r,updateCaretPosition:n}=e;n(),W(r),X(r,t)}},q=e=>{var t;"Backspace"!==e.code&&"Backspace"!==e.key||"unit"===k&&0===D.length&&(null===(t=M.current)||void 0===t||t.focus())},Z=e=>/^[0-9]$/.test(e)?Wc.padValue(e,!0):e.toLocaleUpperCase(),G=e=>{if(e!==JE)if(void 0===e||0===e.length)H(""),W("");else{const t=e.split("-");if(2===t.length){const e=t[0],r=t[1];H("floor"===k?e:Z(e)),W("unit"===k?r:Z(r))}}},X=(e,t)=>{if(!c&&!f)return;const r={floor:B.current,unit:j.current};if(r[t]=e,c){const e=Q(r);c(e)}f&&f([r.floor,r.unit])},J=()=>{if(!u&&!h)return;const e={floor:Z(B.current),unit:Z(j.current)};if(u){const t=Q(e);u(t)}h&&h([e.floor,e.unit])},Q=e=>{const t=[e.floor,e.unit];return e.floor.length>0&&e.unit.length>0?t.join("-"):t.every((e=>""===e))?"":JE},ee=e=>e.split("-");function te(e,t){return t?`${e} ${Array.from(t).join(" ")}`:""}return t(Yh,Object.assign({},w,{ref:I,onClick:()=>{"none"===k&&M.current&&M.current.focus()},$disabled:o,$error:i,$readOnly:p,tabIndex:-1,onBlur:e=>{I.current&&I.current.contains(e.relatedTarget)||"none"!==z.current&&(Y("none"),J())},children:[e(VE,{"data-testid":"addon",$disabled:o,$readOnly:p,children:"#"}),p&&s?(r=>{const n=r.split("-"),o=[te("Hash",n[0]),te("Dash",n[1])].join(" ");return t(ZE,{"data-testid":"readonly-display",tabIndex:0,role:"textbox","aria-readonly":!0,"aria-labelledby":v,"aria-describedby":y,"aria-invalid":x,children:[e(GE,{children:n[0]}),e(qE,{children:"-"}),e(GE,{children:n[1]}),e(Df,{children:o})]})})(s):t(r,{children:[e(UE,{name:"floor",maxLength:3,value:$,ref:M,onFocus:V,onBlur:U,onChange:K,disabled:o,readOnly:p,type:"text",pattern:"[0-9A-Z]{2,3}","data-testid":"floor-input","aria-labelledby":kf(v,O),"aria-describedby":kf(y,_),"aria-invalid":x,placeholder:"floor"!==k||p||o?ee(m)[0]:"",autoComplete:b,styleType:"no-border"}),e(Df,{"aria-hidden":!0,id:O,children:"Enter floor number"}),e(qE,{$inactive:0===$.length,children:"-"}),e(KE,{name:"unit",maxLength:5,value:D,ref:A,onFocus:V,onBlur:U,onChange:K,onKeyDown:q,disabled:o,readOnly:p,type:"text",pattern:"[0-9A-Z]{2,5}","data-testid":"unit-input","aria-labelledby":kf(v,T),"aria-describedby":kf(y,_),"aria-invalid":x,placeholder:"unit"!==k||p||o?ee(m)[1]:"",autoComplete:b,styleType:"no-border"}),e(Df,{"aria-hidden":!0,id:T,children:"Enter unit number"}),e(Df,{id:_,"aria-live":"polite",children:N})]})]}))},JE="Invalid unit number",QE={DateInput:t=>{var{label:r,errorMessage:n,id:o,"data-error-testid":i,"data-testid":a,layoutType:l,mobileCols:s,tabletCols:d,desktopCols:c,xxsCols:u,xsCols:f,smCols:h,mdCols:p,lgCols:m,xlCols:b,xxlCols:v}=t,y=st(t,["label","errorMessage","id","data-error-testid","data-testid","layoutType","mobileCols","tabletCols","desktopCols","xxsCols","xsCols","smCols","mdCols","lgCols","xlCols","xxlCols"]);const[x]=g((()=>`form-date-input-${Hc.generate()}`)),w=null!=o?o:x;return e(cf,{id:w,label:r,errorMessage:n,"data-error-testid":i,disabled:y.disabled,layoutType:l,mobileCols:s,tabletCols:d,desktopCols:c,xxsCols:u,xsCols:f,smCols:h,mdCols:p,lgCols:m,xlCols:b,xxlCols:v,children:e(np,Object.assign({id:`${w}-base`,"data-testid":a||o,"aria-labelledby":`${w}-label`,error:!!n},y))})},DateRangeInput:t=>{var{label:r,errorMessage:n,id:o,"data-error-testid":i,"data-testid":a,layoutType:l,mobileCols:s,tabletCols:d,desktopCols:c,xxsCols:u,xsCols:f,smCols:h,mdCols:p,lgCols:m,xlCols:b,xxlCols:v}=t,y=st(t,["label","errorMessage","id","data-error-testid","data-testid","layoutType","mobileCols","tabletCols","desktopCols","xxsCols","xsCols","smCols","mdCols","lgCols","xlCols","xxlCols"]);const[x]=g((()=>`form-date-range-input-${Hc.generate()}`)),w=null!=o?o:x;return e(cf,{id:w,label:r,errorMessage:n,"data-error-testid":i,disabled:y.disabled,layoutType:l,mobileCols:s,tabletCols:d,desktopCols:c,xxsCols:u,xsCols:f,smCols:h,mdCols:p,lgCols:m,xlCols:b,xxlCols:v,children:e(pp,Object.assign({id:`${o}-base`,"data-testid":a?`${a}-base`:void 0,"aria-labelledby":`${w}-label`,error:!!n},y))})},ESignature:t=>{const{label:r,errorMessage:n,id:o="form-field","data-error-testid":i,"data-testid":a,layoutType:l,mobileCols:s,tabletCols:d,desktopCols:c,xxsCols:u,xsCols:f,smCols:h,mdCols:p,lgCols:g,xlCols:m,xxlCols:b}=t,v=st(t,["label","errorMessage","id","data-error-testid","data-testid","layoutType","mobileCols","tabletCols","desktopCols","xxsCols","xsCols","smCols","mdCols","lgCols","xlCols","xxlCols"]);return e(cf,{id:o,label:r,errorMessage:n,"data-error-testid":i,layoutType:l,mobileCols:s,tabletCols:d,desktopCols:c,xxsCols:u,xsCols:f,smCols:h,mdCols:p,lgCols:g,xlCols:m,xxlCols:b,children:e(Vp,Object.assign({id:`${o}-base`,"data-testid":a||o},v))})},HistogramSlider:t=>{var{label:r,errorMessage:n,id:o="form-histogram-slider","data-error-testid":i,"data-testid":a,layoutType:l,mobileCols:s,tabletCols:d,desktopCols:c,xxsCols:u,xsCols:f,smCols:h,mdCols:p,lgCols:g,xlCols:m,xxlCols:b}=t,v=st(t,["label","errorMessage","id","data-error-testid","data-testid","layoutType","mobileCols","tabletCols","desktopCols","xxsCols","xsCols","smCols","mdCols","lgCols","xlCols","xxlCols"]);return e(cf,{id:o,label:r,errorMessage:n,"data-error-testid":i,disabled:v.disabled,layoutType:l,mobileCols:s,tabletCols:d,desktopCols:c,xxsCols:u,xsCols:f,smCols:h,mdCols:p,lgCols:g,xlCols:m,xxlCols:b,children:e(bg,Object.assign({id:`${o}-base`,"data-testid":a||o},v))})},Input:Dg,InputGroup:XD,MaskedInput:mS,Label:Zu,MultiSelect:t=>{var{label:r,errorMessage:n,id:o,"data-error-testid":i,"data-testid":a,enableSearch:l=!1,layoutType:s,mobileCols:d,tabletCols:c,desktopCols:u,xxsCols:f,xsCols:h,smCols:p,mdCols:m,lgCols:b,xlCols:v,xxlCols:y,variant:x}=t,w=st(t,["label","errorMessage","id","data-error-testid","data-testid","enableSearch","layoutType","mobileCols","tabletCols","desktopCols","xxsCols","xsCols","smCols","mdCols","lgCols","xlCols","xxlCols","variant"]);const[$]=g((()=>`form-field-${Hc.generate()}`)),C=null!=o?o:$;return e(cf,{id:C,"data-testid":a,label:r,errorMessage:n,"data-error-testid":i,disabled:w.disabled,layoutType:s,mobileCols:d,tabletCols:c,desktopCols:u,xxsCols:f,xsCols:h,smCols:p,mdCols:m,lgCols:b,xlCols:v,xxlCols:y,children:e(bS,Object.assign({id:`${C}-base`,"data-testid":a?`${a}-base`:void 0,error:!!n,enableSearch:l,variant:x},w))})},NestedSelect:t=>{var{label:r,errorMessage:n,id:o,"data-error-testid":i,"data-testid":a,layoutType:l,mobileCols:s,tabletCols:d,desktopCols:c,xxsCols:u,xsCols:f,smCols:h,mdCols:p,lgCols:m,xlCols:b,xxlCols:v}=t,y=st(t,["label","errorMessage","id","data-error-testid","data-testid","layoutType","mobileCols","tabletCols","desktopCols","xxsCols","xsCols","smCols","mdCols","lgCols","xlCols","xxlCols"]);const[x]=g((()=>`form-field-${Hc.generate()}`)),w=null!=o?o:x;return e(cf,{id:w,"data-testid":a,label:r,errorMessage:n,"data-error-testid":i,disabled:y.disabled,layoutType:l,mobileCols:s,tabletCols:d,desktopCols:c,xxsCols:u,xsCols:f,smCols:h,mdCols:p,lgCols:m,xlCols:b,xxlCols:v,children:e(wS,Object.assign({id:`${w}-base`,"data-testid":a?`${a}-base`:void 0,error:!!n},y))})},NestedMultiSelect:t=>{var{label:r,errorMessage:n,id:o,"data-error-testid":i,"data-testid":a,layoutType:l,mobileCols:s,tabletCols:d,desktopCols:c,xxsCols:u,xsCols:f,smCols:h,mdCols:p,lgCols:m,xlCols:b,xxlCols:v}=t,y=st(t,["label","errorMessage","id","data-error-testid","data-testid","layoutType","mobileCols","tabletCols","desktopCols","xxsCols","xsCols","smCols","mdCols","lgCols","xlCols","xxlCols"]);const[x]=g((()=>`form-field-${Hc.generate()}`)),w=null!=o?o:x;return e(cf,{id:w,"data-testid":a,label:r,errorMessage:n,"data-error-testid":i,disabled:y.disabled,layoutType:l,mobileCols:s,tabletCols:d,desktopCols:c,xxsCols:u,xsCols:f,smCols:h,mdCols:p,lgCols:m,xlCols:b,xxlCols:v,children:e(xS,Object.assign({id:`${w}-base`,"data-testid":a?`${a}-base`:void 0,error:!!n},y))})},Select:t=>{var{label:r,errorMessage:n,id:o,"data-error-testid":i,"data-testid":a,enableSearch:l=!1,layoutType:s,mobileCols:d,tabletCols:c,desktopCols:u,xxsCols:f,xsCols:h,smCols:p,mdCols:m,lgCols:b,xlCols:v,xxlCols:y,variant:x}=t,w=st(t,["label","errorMessage","id","data-error-testid","data-testid","enableSearch","layoutType","mobileCols","tabletCols","desktopCols","xxsCols","xsCols","smCols","mdCols","lgCols","xlCols","xxlCols","variant"]);const[$]=g((()=>`form-field-${Hc.generate()}`)),C=null!=o?o:$;return e(cf,{id:C,"data-testid":a,label:r,errorMessage:n,"data-error-testid":i,disabled:w.disabled,layoutType:s,mobileCols:d,tabletCols:c,desktopCols:u,xxsCols:f,xsCols:h,smCols:p,mdCols:m,lgCols:b,xlCols:v,xxlCols:y,children:e(vk,Object.assign({id:`${C}-base`,"data-testid":a?`${a}-base`:void 0,error:!!n,enableSearch:l,variant:x},w))})},SelectHistogram:t=>{var{label:r,errorMessage:n,id:o,"data-error-testid":i,"data-testid":a,layoutType:l,mobileCols:s,tabletCols:d,desktopCols:c,xxsCols:u,xsCols:f,smCols:h,mdCols:p,lgCols:m,xlCols:b,xxlCols:v,histogramSlider:y}=t,x=st(t,["label","errorMessage","id","data-error-testid","data-testid","layoutType","mobileCols","tabletCols","desktopCols","xxsCols","xsCols","smCols","mdCols","lgCols","xlCols","xxlCols","histogramSlider"]);const[w]=g((()=>`form-field-${Hc.generate()}`)),$=null!=o?o:w;return e(cf,{id:$,"data-testid":a,label:r,errorMessage:n,"data-error-testid":i,disabled:x.disabled,layoutType:l,mobileCols:s,tabletCols:d,desktopCols:c,xxsCols:u,xsCols:f,smCols:h,mdCols:p,lgCols:m,xlCols:b,xxlCols:v,children:e(Ck,Object.assign({histogramSlider:y,error:!!n,"data-testid":a?`${a}-base`:void 0,id:`${$}-base`},x))})},Slider:t=>{var{label:r,errorMessage:n,id:o,"data-error-testid":i,"data-testid":a,layoutType:l,mobileCols:s,tabletCols:d,desktopCols:c,xxsCols:u,xsCols:f,smCols:h,mdCols:p,lgCols:m,xlCols:b,xxlCols:v}=t,y=st(t,["label","errorMessage","id","data-error-testid","data-testid","layoutType","mobileCols","tabletCols","desktopCols","xxsCols","xsCols","smCols","mdCols","lgCols","xlCols","xxlCols"]);const[x]=g((()=>Hc.generate())),w=null!=o?o:`form-slider-${x}`;return e(cf,{id:w,label:r,errorMessage:n,"data-error-testid":i,disabled:y.disabled,layoutType:l,mobileCols:s,tabletCols:d,desktopCols:c,xxsCols:u,xsCols:f,smCols:h,mdCols:p,lgCols:m,xlCols:b,xxlCols:v,children:e(Dk,Object.assign({id:`${w}-base`,"data-testid":a?`${a}-base`:void 0},y))})},RangeSlider:t=>{var{label:r,errorMessage:n,id:o,"data-error-testid":i,"data-testid":a,layoutType:l,mobileCols:s,tabletCols:d,desktopCols:c,xxsCols:u,xsCols:f,smCols:h,mdCols:p,lgCols:m,xlCols:b,xxlCols:v}=t,y=st(t,["label","errorMessage","id","data-error-testid","data-testid","layoutType","mobileCols","tabletCols","desktopCols","xxsCols","xsCols","smCols","mdCols","lgCols","xlCols","xxlCols"]);const[x]=g((()=>Hc.generate())),w=null!=o?o:`form-range-slider-${x}`;return e(cf,{id:w,label:r,errorMessage:n,"data-error-testid":i,disabled:y.disabled,layoutType:l,mobileCols:s,tabletCols:d,desktopCols:c,xxsCols:u,xsCols:f,smCols:h,mdCols:p,lgCols:m,xlCols:b,xxlCols:v,children:e(ug,Object.assign({id:`${w}-base`,"data-testid":a?`${a}-base`:void 0},y))})},RangeSelect:t=>{var{label:r,errorMessage:n,id:o,"data-error-testid":i,"data-testid":a,enableSearch:l=!1,layoutType:s,mobileCols:d,tabletCols:c,desktopCols:u,xxsCols:f,xsCols:h,smCols:p,mdCols:m,lgCols:b,xlCols:v,xxlCols:y}=t,x=st(t,["label","errorMessage","id","data-error-testid","data-testid","enableSearch","layoutType","mobileCols","tabletCols","desktopCols","xxsCols","xsCols","smCols","mdCols","lgCols","xlCols","xxlCols"]);const[w]=g((()=>Hc.generate())),$=null!=o?o:`form-field-range-select-${w}`;return e(cf,{id:$,label:r,errorMessage:n,"data-error-testid":i,disabled:x.disabled,layoutType:s,mobileCols:d,tabletCols:c,desktopCols:u,xxsCols:f,xsCols:h,smCols:p,mdCols:m,lgCols:b,xlCols:v,xxlCols:y,children:e(bk,Object.assign({id:`${$}-base`,"data-testid":a?`${a}-base`:void 0,error:!!n,enableSearch:l},x))})},Textarea:Mk,Timepicker:t=>{var{label:r,errorMessage:n,id:o,"data-error-testid":i,"data-testid":a,layoutType:l,mobileCols:s,tabletCols:d,desktopCols:c,xxsCols:u,xsCols:f,smCols:h,mdCols:p,lgCols:m,xlCols:b,xxlCols:v}=t,y=st(t,["label","errorMessage","id","data-error-testid","data-testid","layoutType","mobileCols","tabletCols","desktopCols","xxsCols","xsCols","smCols","mdCols","lgCols","xlCols","xxlCols"]);const[x]=g((()=>`form-timepicker-input-${Hc.generate()}`)),w=null!=o?o:x;return e(cf,{id:w,label:r,errorMessage:n,disabled:y.disabled,"data-error-testid":i,layoutType:l,mobileCols:s,tabletCols:d,desktopCols:c,xxsCols:u,xsCols:f,smCols:h,mdCols:p,lgCols:m,xlCols:b,xxlCols:v,children:e(YE,Object.assign({id:`${w}-base`,"data-testid":a?`${a}-base`:void 0,error:!!n},y))})},TimeRangePicker:t=>{var{label:r,errorMessage:n,id:o,"data-error-testid":i,"data-testid":a,layoutType:l,mobileCols:s,tabletCols:d,desktopCols:c,xxsCols:u,xsCols:f,smCols:h,mdCols:p,lgCols:m,xlCols:b,xxlCols:v}=t,y=st(t,["label","errorMessage","id","data-error-testid","data-testid","layoutType","mobileCols","tabletCols","desktopCols","xxsCols","xsCols","smCols","mdCols","lgCols","xlCols","xxlCols"]);const[x]=g((()=>`form-time-range-picker-${Hc.generate()}`)),w=null!=o?o:x;return e(cf,{id:w,label:r,errorMessage:n,disabled:y.disabled,"data-error-testid":i,layoutType:l,mobileCols:s,tabletCols:d,desktopCols:c,xxsCols:u,xsCols:f,smCols:h,mdCols:p,lgCols:m,xlCols:b,xxlCols:v,children:e(HE,Object.assign({id:`${w}-base`,"data-testid":a?`${a}-base`:void 0,error:!!n},y))})},CustomField:t=>{var{id:r="form-custom-field","data-error-testid":n,children:o}=t,i=st(t,["id","data-error-testid","children"]);return e(cf,Object.assign({id:r,"data-error-testid":n},i,{children:o}))},UnitNumberInput:t=>{var{label:r,errorMessage:n,id:o,"data-error-testid":i,"data-testid":a,layoutType:l,mobileCols:s,tabletCols:d,desktopCols:c,xxsCols:u,xsCols:f,smCols:h,mdCols:p,lgCols:m,xlCols:b,xxlCols:v}=t,y=st(t,["label","errorMessage","id","data-error-testid","data-testid","layoutType","mobileCols","tabletCols","desktopCols","xxsCols","xsCols","smCols","mdCols","lgCols","xlCols","xxlCols"]);const[x]=g((()=>`form-unit-number-input-${Hc.generate()}`)),w=null!=o?o:x;return e(cf,{id:w,"data-testid":a,label:r,errorMessage:n,"data-error-testid":i,disabled:y.disabled,layoutType:l,mobileCols:s,tabletCols:d,desktopCols:c,xxsCols:u,xsCols:f,smCols:h,mdCols:p,lgCols:m,xlCols:b,xxlCols:v,children:e(XE,Object.assign({id:`${w}-base`,"data-testid":a?`${a}-base`:void 0,"aria-labelledby":`${w}-label`,error:!!n},y))})},PhoneNumberInput:t=>{var{label:r,errorMessage:n,id:o,"data-error-testid":i,"data-testid":a,layoutType:l,mobileCols:s,tabletCols:d,desktopCols:c,xxsCols:u,xsCols:f,smCols:h,mdCols:p,lgCols:m,xlCols:b,xxlCols:v}=t,y=st(t,["label","errorMessage","id","data-error-testid","data-testid","layoutType","mobileCols","tabletCols","desktopCols","xxsCols","xsCols","smCols","mdCols","lgCols","xlCols","xxlCols"]);const[x]=g((()=>`form-phone-number-input-${Hc.generate()}`)),w=null!=o?o:x;return e(cf,{id:w,"data-testid":a,label:r,errorMessage:n,"data-error-testid":i,disabled:y.disabled,layoutType:l,mobileCols:s,tabletCols:d,desktopCols:c,xxsCols:u,xsCols:f,smCols:h,mdCols:p,lgCols:m,xlCols:b,xxlCols:v,children:e(zS,Object.assign({id:`${w}-base`,"data-testid":a?`${a}-base`:void 0,"aria-labelledby":`${w}-label`,error:!!n},y))})},PredictiveTextInput:t=>{var{label:r,errorMessage:n,id:o,"data-error-testid":i,"data-testid":a,layoutType:l,mobileCols:s,tabletCols:d,desktopCols:c,xxsCols:u,xsCols:f,smCols:h,mdCols:p,lgCols:m,xlCols:b,xxlCols:v}=t,y=st(t,["label","errorMessage","id","data-error-testid","data-testid","layoutType","mobileCols","tabletCols","desktopCols","xxsCols","xsCols","smCols","mdCols","lgCols","xlCols","xxlCols"]);const[x]=g((()=>`form-field-${Hc.generate()}`)),w=null!=o?o:x;return e(cf,{id:w,"data-testid":a,label:r,errorMessage:n,"data-error-testid":i,disabled:y.disabled,layoutType:l,mobileCols:s,tabletCols:d,desktopCols:c,xxsCols:u,xsCols:f,smCols:h,mdCols:p,lgCols:m,xlCols:b,xxlCols:v,children:e(hk,Object.assign({id:`${w}-base`,"data-testid":a?`${a}-base`:void 0,"aria-labelledby":`${w}-label`,error:!!n},y))})},OtpVerification:t=>{var{label:r,id:n,"data-error-testid":o,"data-testid":i,layoutType:a,mobileCols:l,tabletCols:s,desktopCols:d,xxsCols:c,xsCols:u,smCols:f,mdCols:h,lgCols:p,xlCols:m,xxlCols:b}=t,v=st(t,["label","id","data-error-testid","data-testid","layoutType","mobileCols","tabletCols","desktopCols","xxsCols","xsCols","smCols","mdCols","lgCols","xlCols","xxlCols"]);const[y]=g((()=>`form-otp-verification-${Hc.generate()}`)),x=null!=n?n:y;return e(cf,{id:x,"data-testid":i,label:r,"data-error-testid":o,layoutType:a,mobileCols:l,tabletCols:s,desktopCols:d,xxsCols:c,xsCols:u,smCols:f,mdCols:h,lgCols:p,xlCols:m,xxlCols:b,children:e(ik,Object.assign({id:`${x}-base-field`,inputId:`${x}-base`,"data-testid":i?`${i}-base`:void 0},v))})}},eF=F.li`
    display: flex;
    flex-direction: column;
    padding: ${ya["spacing-32"]} 0;
    background: transparent;

    &:not(:last-child) {
        border-bottom: ${va["width-010"]} ${va.solid} ${ga.border};
    }
`,tF=F.div`
    display: flex;
    align-items: flex-start;
    margin-bottom: ${ya["spacing-16"]};
    width: 100%;
`,rF=F.div`
    display: flex;
    flex: 1;
    flex-direction: column;
`,nF=F.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin-bottom: ${ya["spacing-16"]};

    ${Ca.MaxWidth.md} {
        flex-direction: column;
        justify-content: flex-start;
    }
`,oF=F(Wa.BodyMD)`
    display: flex;
    flex: 1;
    margin-right: ${ya["spacing-16"]};

    ${Ca.MaxWidth.md} {
        margin-right: 0;
        margin-bottom: ${ya["spacing-8"]};
    }
`,iF=F(Wa.BodyMD)``,aF=F.div`
    display: flex;
    ${Ca.MaxWidth.md} {
        flex-direction: column;
    }

    ${e=>{if(e.$thumbnail)return O`
                margin-left: calc(
                    96px + ${ya["spacing-32"]}
                ); // thumbnail width + right margin

                ${Ca.MaxWidth.md} {
                    margin-left: 0;
                }
            `}}
`,lF=F(Pf.Small)`
    width: 7.5rem;
    &:not(:last-of-type) {
        margin-right: ${ya["spacing-16"]};
    }

    ${Ca.MaxWidth.md} {
        width: 100%;
        &:not(:last-of-type) {
            margin-bottom: ${ya["spacing-16"]};
        }
    }
`;const sF=({thumbnailImageDataUrl:r,"data-testid":n,renderReplaceButton:o,onReplaceClick:i})=>t(dF,{"data-testid":n,children:[e(cF,{"data-testid":n?`${n}-image`:void 0,src:r}),o&&e(uF,{type:"button",onClick:()=>{i&&i()},children:"Replace"})]}),dF=F.div`
    width: auto;
    margin-right: ${ya["spacing-32"]};
    display: flex;
    flex-shrink: 0;
    flex-direction: column;
    justify-content: center;
`,cF=F((({src:t,alt:r,className:n,"data-testid":o})=>e("img",{src:t,alt:r||"",className:n,"data-testid":o,onError:e=>{e.target.onerror=null,e.target.src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKAAAABQCAYAAACeXX40AAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAARTSURBVHgB7Z1tUuJAEIY7qMRYWnIE9wR6BD2Be5S9weoN1pusJ1iPwJ5guYH4GeNH2HkppgojYAIhbXrepwoJEMofPHZP9zQxkgJpmh5HUfTdHZ6624EQsiLOp7676+d5fp4kyeDda/5gNBr1siz76Q5/CCHr41ccx+dOyiEejAWcyHflDg+FkDWDiNjtdk8gYQdPTCIf5SON4ALe0cQ5idya78CZ+E8IaRgn4gki4JkQogCK3Y77wdRLtDiNnp6eRkKIEh0hRBEKSFShgEQVCkhUoYBEFQpIVKGARBUKSFShgEQVCkhUoYBEFQpIVNkUokqWZfLy8iJvb2/jx1tbWxLHsWxsbEgIcBpGCQh3e3srr6+vH16Lokh2dnbGN+swAioA+a6vrzERPPN1PP/w8CB5nsvu7q5YhmvAhoFciHzz5JsmTVNxGUosQwEbBmu+WWl3Ho+Pj6VkbSsUsGGqRjSka6Riq1DAhllGJkZAUhuocKtCAUltLNPfs9wTpIAL8M3hOtne3q50PhrTnY7dj4kCzgFrteFwKM/Pz1In3W53vNNRFvYBA+Xm5mYs4bzdilWAVJubn+8B7O3tlTqvzVDAGaAB7KVDAXB/f19rIYCU2uv1JEmSmUUJpMPrVdN1G+FecAGs+5B6i+0SpM79/X2pG/weyI57yIiCw3rUm4Z7wVMgyt3d3c3s1WEtiMiIqFUniIaQO1SYgqfALgVGo+aBVFx3URI6FHACoh4mUD4DRYnlrbGmoYATUPWWKTRwDtaIlncnmoQCyvuqtwwoVJCOyeoELyBkKpN6i2C9iFEpshrBC1h2OHQWEHeZogTvwVwgCVxARLBVdzmqFiUQD+/BbR17zW0jWAHx4deRQhE9yxYwfu3oz10l+lohWAHLSlMGRFE0sBfhhxumoyXeF3oxE6SAiHx1pz+k1nnj9pDODzcUwXusf/FoEcEJiKizruoVUbC4k+LlW7TW9F/BDJHgBFz3uqu4l4zHnxU6fuwrxPVgUAKi4bzuytNf8cAPNpRt0yByhthXDGYcC1EIVyNoCoxUVW3xYBwLQ6hVJqbbThAR0EejJlmmv+iHX0NaDwYhYB0N56bw68FQMC8gxMPar02EtB40LyBSbxurS7RmFg3HWsG0gG1KvbNo6x9PFcwKiOixzJjVV2K6pWMVkwL6atIC1ke3TArY9tRbpMxuSlsxJ2Abq94yWE3F5gS0+kFZ/R6KKQFRdFieMsbYlrXobkbAUJq31ka3zFyaAwKGsomPqrjuS4RowYsTEVX4xXSiCgUkqlBAogoFJKpQQKIKBSSqUECiCgUkqlBAogoFJKpAwIEQokO/k+f5pRCiQBRF/ShN02N38EcIaZjRaPStkyTJlYuCF0JIs1w49wbj/5TnTOxlWYYoeCSErJ+/cRwj8w7HVTAO3BMnjISkAS68fHjw4X+FujXhgbs7cyccCiMiqYeBu126TPsbS77pF/4DuxeyMpdnp3gAAAAASUVORK5CYII="}})))`
    width: 96px;
    height: 96px;
    aspect-ratio: 1;
    border-radius: ${xa.sm};
    border: ${va["width-010"]} ${va.solid} ${ga.border};
    object-fit: cover;

    ${Ca.MaxWidth.md} {
        width: 64px;
        height: 64px;
    }
`,uF=F.button`
    width: 100%;
    height: 1.625rem;
    margin-top: ${ya["spacing-8"]};
    border: none;
    background: transparent;
    cursor: pointer;

    ${ma["body-md-semibold"]}
    color: ${ga["text-primary"]};

    &:hover {
        color: ${ga["text-hover"]};
    }
`;var fF;!function(e){e.formatFileSizeDisplay=e=>{if(!e||0===e)return"0 KB";const t=Math.floor(Math.log(e)/Math.log(1024));return`${Number(e/Math.pow(1024,t)).toFixed(0)} ${["B","KB","MB","GB","TB","PB","EB","ZB","YB"][t]}`},e.isSupportedImageType=e=>["image/avif","image/gif","image/jpeg","image/png","image/svg+xml","image/webp"].includes(e)}(fF||(fF={}));const hF=({fileItem:r,fileDescriptionMaxLength:n,wrapperWidth:o,onSave:i,onCancel:a,onBlur:s})=>{const{id:c,name:u,size:f,truncateText:h=!0,thumbnailImageDataUrl:p}=r,[m,b]=g(),[v,y]=g(""),x=l(null),w=l(null);d((()=>{b($(u))}),[o]),d((()=>{y(r.description||"")}),[r]);const $=e=>{if(!h)return e;const t=w&&w.current?w.current.getBoundingClientRect().width:0;return Wc.truncateOneLine(e,t,t/2,t/2/8,16)};return t(eF,{"data-testid":`${c}-edit-display`,children:[t(tF,{children:[p&&e(sF,{thumbnailImageDataUrl:p}),t(rF,{children:[t(nF,{ref:w,children:[e(oF,{weight:"semibold",children:m}),e(iF,{children:fF.formatFileSizeDisplay(f)})]}),e(QE.Textarea,{ref:x,id:`${c}-description-textarea`,"data-testid":`${c}-textarea`,value:v,maxLength:n,onChange:e=>{y(e.target.value)},onBlur:e=>{s(e.target.value)},rows:3,"aria-label":`Photo description for ${u}`,label:{children:"Photo description",subtitle:"Describe this photo to users who may not be able to see the image."}})]})]}),t(aF,{$thumbnail:!!p,children:[e(lF,{"data-testid":`${c}-save-button`,type:"button",disabled:0===v.trim().length,onClick:()=>{x.current&&i(x.current.value.trim())},children:"Save"}),e(lF,{type:"button",styleType:"secondary","data-testid":`${c}-cancel-button`,onClick:a,children:"Cancel"})]})]})},pF=F.li`
    display: flex;
    align-items: center;
    width: 100%;
    border: none;

    &:not(:last-child) {
        margin-bottom: ${ya["spacing-16"]};
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
`,gF=F(Me)`
    margin-right: ${ya["spacing-16"]};
    height: 1.5rem;
    width: 1.5rem;
    color: ${ga.icon};

    ${e=>e.$active?O`
                color: ${ga["icon-primary"]};
            `:e.$disabled?O`
                color: ${ga["icon-disabled"]};
            `:void 0};
`,mF=F.div`
    background: ${ga["bg-primary-subtlest"]};
    border: ${va["width-010"]} ${va.solid} ${ga.border};
    border-radius: ${xa.sm};
    padding: ${ya["spacing-16"]} ${ya["spacing-32"]};
    display: flex;
    align-items: center;
    width: 100%;

    ${Ca.MaxWidth.md} {
        padding: ${ya["spacing-16"]};
    }

    ${e=>e.$focused?O`
                border-color: ${ga["border-focus"]};
                box-shadow: ${wa["xs-focus-strong"]};
            `:e.$disabled?O`
                border-color: ${ga["border-disabled"]};
            `:e.$error?O`
                background: ${ga["bg-error"]};
                border-color: ${ga["border-error"]};
            `:void 0}

    ${e=>{if(!e.$error&&(e.$loading||e.$editable))return O`
                ${Ca.MaxWidth.md} {
                    flex-direction: column;
                    align-items: flex-start;
                }
            `}}
`,bF=F.div`
    display: flex;
    flex: 1;
    align-items: center;

    ${Ca.MaxWidth.md} {
        flex-direction: column;
        width: 100%;
        align-items: flex-start;
    }

    ${e=>{if(e.$hasThumbnail)return O`
                ${Ca.MaxWidth.md} {
                    flex-direction: row;
                    align-items: center;
                }
            `}}
`,vF=F.div`
    display: flex;
    flex: 1;
    flex-direction: column;
    width: 100%;
`,yF=F.div`
    display: flex;
    flex: 1;
    align-items: center;

    ${Ca.MaxWidth.md} {
        flex-direction: column;
        align-items: flex-start;
        width: 100%;
    }
`,xF=F.div`
    display: flex;
    width: 5rem;
    margin-left: ${ya["spacing-8"]};
    justify-content: flex-end;

    ${Ca.MaxWidth.md} {
        ${e=>e.$hideInMobile?O`
                    display: none;
                    visibility: hidden;
                `:O`
                    width: 100%;
                    margin-left: 0;
                    margin-top: ${ya["spacing-8"]};
                    justify-content: flex-start;
                `}
    }
`,wF=F(Wa.BodyMD)``,$F=F(wF)`
    margin-top: ${ya["spacing-4"]};
`,CF=F(ae)`
    height: 1lh;
    width: 1em;
    flex-shrink: 0;
    color: ${ga["icon-error-strong"]};
`,DF=F(Wa.BodySM)`
    color: ${ga["text-error"]};
`,SF=F(DF)`
    margin-top: ${ya["spacing-4"]};
    display: flex;
    gap: ${ya["spacing-4"]};

    ${Ca.MaxWidth.md} {
        display: none;
        visibility: hidden;
    }
`,kF=F(DF)`
    display: none;
    visibility: hidden;

    ${Ca.MaxWidth.md} {
        display: flex;
        gap: ${ya["spacing-4"]};
        visibility: visible;
        margin-top: ${ya["spacing-8"]};
    }
`,EF=F.div`
    width: 6rem;
    margin-left: ${ya["spacing-32"]};
    display: flex;
    justify-content: flex-end;
    align-items: center;

    ${Ca.MaxWidth.md} {
        width: fit-content;

        ${e=>e.$loading&&!e.$error?O`
                    margin-left: 0;
                    margin-top: ${ya["spacing-16"]};
                    width: 100%;
                `:e.$editable&&!e.$error?O`
                    margin-left: 0;
                    margin-top: ${ya["spacing-16"]};
                    align-self: flex-end;
                `:void 0}
    }
`,FF=F($p)`
    min-width: unset;

    &:not(:last-child) {
        margin-right: ${ya["spacing-16"]};
    }
`,OF=F(tu)`
    height: 2.5rem;
    width: 2.5rem;
    padding: unset;
    svg {
        height: 1.5rem;
        width: 1.5rem;
        color: ${ga.icon};
    }
`,TF=m((({fileItem:n,editable:o,sortable:i,wrapperWidth:a,disabled:s,readOnly:c,onDelete:u,onEditClick:f})=>{const{id:h,name:p,size:m,description:v,progress:y=1,errorMessage:x,thumbnailImageDataUrl:w,truncateText:$=!0}=n,[C,D]=g(),{activeId:S}=b(Ae),{attributes:k,listeners:E,setNodeRef:F,transform:O,transition:T}=bd({id:h}),_=l(null),I={transform:bl.Translate.toString(O),transition:T},M=Object.assign(Object.assign({style:I},k),E),A=y<1,B=fF.formatFileSizeDisplay(m),j=S?S===h?"self":"others":"none";d((()=>{D(N(p))}),[a]);const z=()=>{u()},R=()=>{f&&f()},P=e=>{i&&e.stopPropagation()},N=e=>{if(!$)return e;const t=_&&_.current?_.current.getBoundingClientRect().width:0;return Wc.truncateOneLine(e,t,t/2,t/2/8,16)},H=()=>s||!!S,W=()=>!!i&&!c,Y=()=>t(r,{children:[e(wF,{weight:v?"semibold":"regular",children:C}),v&&e($F,{children:v})]});return t(pF,Object.assign({id:h,ref:F,$sortable:W(),$disabled:H(),$focusType:j},W()?M:{},{children:[W()&&e(gF,{"data-testid":`${h}-drag-handle`,$disabled:H(),$active:"self"===j}),t(mF,{$focused:"self"===j,$error:!!x,$loading:A,$disabled:H(),$editable:o,children:[(()=>{let n;return n=x?t(r,{children:[t(vF,{ref:_,children:[Y(),x&&t(SF,{weight:"semibold",children:[e(CF,{"aria-hidden":!0}),x]})]}),e(xF,{children:e(wF,{children:B})}),x&&t(kF,{weight:"semibold",children:[e(CF,{"aria-hidden":!0}),x]})]}):w?(n=>t(r,{children:[e(sF,{thumbnailImageDataUrl:n,"data-testid":`${h}-thumbnail`}),t(yF,{children:[e(vF,{ref:_,children:Y()}),e(xF,{children:e(wF,{children:B})})]})]}))(w):t(r,{children:[e(vF,{ref:_,children:Y()}),e(xF,{$hideInMobile:A,children:e(wF,{children:B})})]}),e(bF,{$hasThumbnail:!!w,children:n})})(),!c&&(()=>{let n;return n=x?e(OF,{onClick:z,"data-testid":`${h}-error-delete-button`,"aria-label":`delete ${p}, error: ${x}`,children:e(L,{"aria-hidden":!0})}):A?e(yp,{progress:y,"data-testid":`${h}-progress-bar`}):t(r,{children:[o&&e(FF,{"data-testid":`${h}-edit-button`,"data-no-dnd":"true",type:"button",styleType:"light",sizeType:"small","aria-label":`edit ${p}`,disabled:H(),onClick:R,onKeyDown:P,children:e(Ie,{"aria-hidden":!0})},"edit"),e(FF,{"data-testid":`${h}-delete-button`,"data-no-dnd":"true",type:"button",styleType:"light",sizeType:"small","aria-label":`delete ${p}`,disabled:H(),onClick:z,onKeyDown:P,children:e(_e,{"aria-hidden":!0})},"delete")]}),e(EF,{$editable:o,$error:!!x,$loading:A,children:n})})()]})]}))})),_F=F.ul`
    list-style-type: none;
    margin-bottom: ${e=>e.$readOnly?"0":ya["spacing-32"]};
`,IF=F.li`
    border-top: ${va["width-010"]} ${va.solid} ${ga.border};
    border-bottom: ${va["width-010"]} ${va.solid} ${ga.border};

    &:not(:last-child) {
        margin-bottom: ${ya["spacing-32"]};
    }

    &:not(:first-child) {
        margin-top: ${ya["spacing-32"]};
    }

    ul {
        list-style-type: none;
    }
`;const MF=u((function({fileItems:n=[],editableFileItems:o,fileDescriptionMaxLength:i,sortable:s,disabled:c,readOnly:u,onItemUpdate:h,onItemDelete:p,onSort:m},v){const[y,x]=g({}),{setActiveId:w}=b(Ae),[$,C]=g(""),D=l({});f(v,(()=>({focus:()=>{var e;null===(e=k.current)||void 0===e||e.focus()}})));const{width:S=0,ref:k}=mc(),E=l({}),F=function(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];return a((()=>[...t].filter((e=>null!=e))),[...t])}(Ol(bc,{activationConstraint:{distance:8}}),Ol($s,{activationConstraint:{delay:150,tolerance:5}}),Ol(fs,{coordinateGetter:xd})),O=e=>{delete E.current[e]};d((()=>{const e=L(n);((e,t)=>{const r=Object.keys(e),n=Object.keys(t);if(r.length!==n.length)return!1;for(const r of n)if(e[r]!==t[r])return!1;return!0})(y,e)||x(e)}),[n,o,u]),d((()=>{var e;if(!n||0===n.length)return void C("");const t=Date.now(),r=[];for(const o of n){const n=D.current[o.id];if(o.errorMessage)"error"!==(null==n?void 0:n.status)&&(r.push("string"==typeof o.errorMessage?`Error uploading ${o.name}: ${o.errorMessage}`:`Error uploading ${o.name}`),D.current[o.id]={progress:null!==(e=o.progress)&&void 0!==e?e:1,timestamp:t,status:"error"});else if(void 0!==o.progress)if(o.progress>=1)"complete"!==(null==n?void 0:n.status)&&(r.push(`${o.name} upload is complete`),D.current[o.id]={progress:1,timestamp:t,status:"complete"});else if("number"==typeof o.progress&&o.progress<1){(!n||"in-progress"!==n.status)&&(r.push(`Starting upload of ${o.name}`),D.current[o.id]={progress:o.progress,timestamp:t,status:"in-progress"})}}r.length>0&&C(r.join(", "))}),[n]);const T=e=>t=>{P(e.id,"display"),O(e.id);const r=Object.assign(Object.assign({},e),{description:t});h(r)},_=e=>t=>{E.current[e.id]=t},I=e=>()=>{e.description&&0!==e.description.length?P(e.id,"display"):p(e),O(e.id)},M=e=>()=>{P(e.id,"edit")},A=e=>()=>{p(e),k.current&&k.current.focus()},B=e=>{if(m&&n){const{active:t,over:r}=e;if(r&&t.id!==r.id){const e=n.findIndex((e=>e.id===t.id)),o=n.findIndex((e=>e.id===r.id)),i=rd(n,e,o);m(i)}}w(void 0)},j=e=>{const{active:t}=e;w(t.id)},z=e=>o&&fF.isSupportedImageType(e.type),R=e=>!e.errorMessage&&!u&&!("number"==typeof e.progress&&e.progress<1)&&z(e)&&!e.description,L=e=>{if(!e||0===e.length)return{};const t={};for(const r of e)r.errorMessage?t[r.id]="error":y[r.id]?t[r.id]=y[r.id]:t[r.id]=R(r)?"edit":"display";return t},P=(e,t)=>{x((r=>Object.assign(Object.assign({},r),{[e]:t})))},N=()=>n&&n.length>1&&s&&Object.values(y).every((e=>"display"===e)),H=()=>{if(0===n.length)return"No files uploaded";const e=n.filter((e=>!(null==e?void 0:e.errorMessage)&&(1===e.progress||void 0===e.progress))).length,t=n.filter((e=>"number"==typeof e.progress&&e.progress<1)).length,r=n.filter((e=>e.errorMessage)).length;if(0===e&&0===t&&0===r)return"File list";const o=[e>0?`${e} completed files`:"",t>0?`${t} file in progress`:"",r>0?`${r} ${r>1?"files":"file"} with error`:""].filter(Boolean);return`${u?"Read-only file list":"File list"}. ${o.join(", ")}`},W=()=>{const t=((e,t)=>{if(!e||0===e.length)return[];const r=[];for(const n of e)if("edit"===t[n.id]){const e=r[r.length-1];Array.isArray(e)?e.push(n):r.push([n])}else r.push(n);return r})(n,y);return 0===t.length?null:t.map(((t,r)=>Array.isArray(t)?((t,r)=>{const n=t.map((t=>{const r=Object.assign({},t);return void 0!==E.current[t.id]&&(r.description=E.current[t.id]),e(hF,{fileItem:r,wrapperWidth:S,fileDescriptionMaxLength:i,onSave:T(t),onCancel:I(t),onBlur:_(t)},t.id)}));return e(IF,{children:e("ul",{children:n})},`editable-${r}`)})(t,r):e(TF,{fileItem:t,editable:z(t),wrapperWidth:S,sortable:N(),disabled:c,readOnly:u,onDelete:A(t),onEditClick:M(t)},t.id)))},Y=()=>t(r,{children:[e(Df,{"aria-live":"polite","aria-atomic":"true",children:$}),e(_F,{tabIndex:-1,$readOnly:u,ref:k,"aria-label":H(),children:W()})]});return c||u||!N()?Y():e(Xs,{sensors:F,onDragEnd:B,onDragStart:j,children:e(cd,{items:n,strategy:ld,children:Y()})})})),AF=F.div`
    display: flex;
    flex-direction: column;
    margin-bottom: ${ya["spacing-32"]};
    gap: ${ya["spacing-8"]};
`,BF=F(Wa.BodyBL)``,jF=F.div`
    color: ${ga.text};
    ${iu({textSize:"body-baseline"})}
`,zF=F(Wa.BodyMD)`
    color: ${ga["text-subtler"]};
`,RF=F.div`
    color: ${ga.text};
    ${iu({textSize:"body-md"})}
`,LF=F(Jk)`
    margin-bottom: ${ya["spacing-32"]};
`,PF=F.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-end;

    ${Ca.MaxWidth.md} {
        align-items: flex-start;
    }
`,NF=F(Pf.Small)`
    width: 10rem;

    ${Ca.MaxWidth.md} {
        width: 100%;
    }
`,HF=F(Wa.BodyMD)`
    color: ${ga["text-subtler"]};
    margin-top: ${ya["spacing-8"]};
    width: 10rem;
    text-align: center;
    ${Ca.MaxWidth.md} {
        display: none;
        visibility: hidden;
    }
`,WF=F(Jk)`
    margin-bottom: ${ya["spacing-32"]};
`,YF=({styleType:r="bordered",fileItems:n,title:o,description:i,maxFiles:a,warning:s,className:d,name:c,id:u,"data-testid":f,accept:h,capture:p,multiple:m,disabled:b,sortable:v=!1,fileDescriptionMaxLength:y,editableFileItems:x=!1,errorMessage:w,readOnly:$,customLabels:C,onChange:D,onDelete:S,onEdit:k,onSort:E})=>{const F={uploadButton:(null==C?void 0:C.uploadButtonLabel)||"Upload files"},O=l(null),T=l(null),[_,I]=g(),M=()=>!(!a||!n)&&n.length>=a;return e(Ae.Provider,{value:{activeId:_,setActiveId:I},children:t(Za,{ref:O,onChange:e=>{var t;!b&&D&&(D(e),null===(t=T.current)||void 0===t||t.focus())},id:u?`${u}-dropzone`:"dropzone",accept:h,capture:p,border:"bordered"===r,className:d,"data-testid":f,name:c,multiple:m,disabled:b||M()||$,children:[!(!o&&!i)&&t(AF,{children:[o?e("string"==typeof o?BF:jF,{children:o}):null,i?e("string"==typeof i?zF:RF,{children:i}):null]}),!!s&&e(LF,{type:"warning",children:s}),e(MF,{ref:T,fileItems:n,editableFileItems:x,fileDescriptionMaxLength:y,sortable:v,disabled:b,readOnly:$,onItemDelete:e=>{var t;S&&(S(e),null===(t=T.current)||void 0===t||t.focus())},onItemUpdate:e=>{k&&k(e)},onSort:e=>{E&&E(e)}}),w&&e(WF,{type:"error",children:w}),!$&&t(PF,{children:[e(NF,{type:"button",styleType:"secondary",disabled:!!_||b||M(),onClick:e=>{b||(e.preventDefault(),O.current&&O.current.openFileDialog())},children:F.uploadButton}),e(HF,{weight:"semibold",children:"or drop them here"})]})]})})};export{ga as C,YF as F,Hp as S,dt as _,Wp as a};
//# sourceMappingURL=index.b2b637c6.js.map
