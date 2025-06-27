import{jsxs as e,jsx as t,Fragment as r}from"react/jsx-runtime";import*as n from"react";import o,{useRef as i,useEffect as s,useState as a,isValidElement as l,createRef as d,cloneElement as c,PureComponent as u,useLayoutEffect as h,forwardRef as g,useCallback as m,useContext as p,useMemo as f,createElement as b}from"react";import{ArrowRightIcon as y,ChevronDownIcon as v}from"@lifesg/react-icons";import x,{css as w,keyframes as $,useTheme as F}from"styled-components";import{ChevronDownIcon as C}from"@lifesg/react-icons/chevron-down";import{ChevronUpIcon as E}from"@lifesg/react-icons/chevron-up";import S,{findDOMNode as k,unstable_batchedUpdates as D}from"react-dom";import{ArrowRightIcon as I}from"@lifesg/react-icons/arrow-right";import{ExclamationCircleFillIcon as T}from"@lifesg/react-icons/exclamation-circle-fill";import{ExclamationTriangleFillIcon as B}from"@lifesg/react-icons/exclamation-triangle-fill";import{ICircleFillIcon as A}from"@lifesg/react-icons/i-circle-fill";import{TickCircleFillIcon as z}from"@lifesg/react-icons/tick-circle-fill";import{ExternalIcon as O}from"@lifesg/react-icons/external";import{CircleIcon as M}from"@lifesg/react-icons/circle";import{CircleDotIcon as _}from"@lifesg/react-icons/circle-dot";import{CrossIcon as R}from"@lifesg/react-icons/cross";import{SquareIcon as H}from"@lifesg/react-icons/square";import{SquareTickFillIcon as j}from"@lifesg/react-icons/square-tick-fill";import{TickIcon as L}from"@lifesg/react-icons/tick";import{SquareFillIcon as P}from"@lifesg/react-icons/square-fill";import{MagnifierIcon as W}from"@lifesg/react-icons/magnifier";import"@lifesg/react-icons/caret-right";import{MinusSquareFillIcon as N}from"@lifesg/react-icons/minus-square-fill";import{useFloatingTree as V,useFloating as Y,autoUpdate as U,offset as q,flip as G,shift as Z,limitShift as Q,size as X,useTransitionStyles as K,useClick as J,useDismiss as ee,useInteractions as te,FloatingPortal as re,FloatingFocusManager as ne}from"@floating-ui/react";function oe(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(n=Object.getOwnPropertySymbols(e);o<n.length;o++)t.indexOf(n[o])<0&&Object.prototype.propertyIsEnumerable.call(e,n[o])&&(r[n[o]]=e[n[o]])}return r}"function"==typeof SuppressedError&&SuppressedError;const ie=(e,t,r="window",n)=>{const o=i();s((()=>{o.current=t}),[t]),s((()=>{let t;switch(r){case"window":t=window;break;case"document":t=document;break;default:t=r}if(!t||!t.addEventListener)return;const i=e=>{var t;return null===(t=o.current)||void 0===t?void 0:t.call(o,e)};return t.addEventListener(e,i,n),()=>{null==t||t.removeEventListener(e,i,n)}}),[e,r])};var se="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};function ae(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var le=Array.isArray,de="object"==typeof se&&se&&se.Object===Object&&se,ce=de,ue="object"==typeof self&&self&&self.Object===Object&&self,he=ce||ue||Function("return this")(),ge=he.Symbol,me=ge,pe=Object.prototype,fe=pe.hasOwnProperty,be=pe.toString,ye=me?me.toStringTag:void 0;var ve=function(e){var t=fe.call(e,ye),r=e[ye];try{e[ye]=void 0;var n=!0}catch(e){}var o=be.call(e);return n&&(t?e[ye]=r:delete e[ye]),o},xe=Object.prototype.toString;var we=ve,$e=function(e){return xe.call(e)},Fe=ge?ge.toStringTag:void 0;var Ce=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":Fe&&Fe in Object(e)?we(e):$e(e)};var Ee=function(e){return null!=e&&"object"==typeof e},Se=Ce,ke=Ee;var De=function(e){return"symbol"==typeof e||ke(e)&&"[object Symbol]"==Se(e)},Ie=le,Te=De,Be=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,Ae=/^\w*$/;var ze=function(e,t){if(Ie(e))return!1;var r=typeof e;return!("number"!=r&&"symbol"!=r&&"boolean"!=r&&null!=e&&!Te(e))||(Ae.test(e)||!Be.test(e)||null!=t&&e in Object(t))};var Oe=function(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)},Me=Ce,_e=Oe;var Re,He=function(e){if(!_e(e))return!1;var t=Me(e);return"[object Function]"==t||"[object GeneratorFunction]"==t||"[object AsyncFunction]"==t||"[object Proxy]"==t},je=he["__core-js_shared__"],Le=(Re=/[^.]+$/.exec(je&&je.keys&&je.keys.IE_PROTO||""))?"Symbol(src)_1."+Re:"";var Pe=function(e){return!!Le&&Le in e},We=Function.prototype.toString;var Ne=function(e){if(null!=e){try{return We.call(e)}catch(e){}try{return e+""}catch(e){}}return""},Ve=He,Ye=Pe,Ue=Oe,qe=Ne,Ge=/^\[object .+?Constructor\]$/,Ze=Function.prototype,Qe=Object.prototype,Xe=Ze.toString,Ke=Qe.hasOwnProperty,Je=RegExp("^"+Xe.call(Ke).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");var et=function(e,t){return null==e?void 0:e[t]},tt=function(e){return!(!Ue(e)||Ye(e))&&(Ve(e)?Je:Ge).test(qe(e))},rt=et;var nt=function(e,t){var r=rt(e,t);return tt(r)?r:void 0},ot=nt(Object,"create"),it=ot;var st=function(){this.__data__=it?it(null):{},this.size=0};var at=function(e){var t=this.has(e)&&delete this.__data__[e];return this.size-=t?1:0,t},lt=ot,dt=Object.prototype.hasOwnProperty;var ct=function(e){var t=this.__data__;if(lt){var r=t[e];return"__lodash_hash_undefined__"===r?void 0:r}return dt.call(t,e)?t[e]:void 0},ut=ot,ht=Object.prototype.hasOwnProperty;var gt=function(e){var t=this.__data__;return ut?void 0!==t[e]:ht.call(t,e)},mt=ot;var pt=function(e,t){var r=this.__data__;return this.size+=this.has(e)?0:1,r[e]=mt&&void 0===t?"__lodash_hash_undefined__":t,this},ft=st,bt=at,yt=ct,vt=gt,xt=pt;function wt(e){var t=-1,r=null==e?0:e.length;for(this.clear();++t<r;){var n=e[t];this.set(n[0],n[1])}}wt.prototype.clear=ft,wt.prototype.delete=bt,wt.prototype.get=yt,wt.prototype.has=vt,wt.prototype.set=xt;var $t=wt;var Ft=function(){this.__data__=[],this.size=0};var Ct=function(e,t){return e===t||e!=e&&t!=t},Et=Ct;var St=function(e,t){for(var r=e.length;r--;)if(Et(e[r][0],t))return r;return-1},kt=St,Dt=Array.prototype.splice;var It=function(e){var t=this.__data__,r=kt(t,e);return!(r<0)&&(r==t.length-1?t.pop():Dt.call(t,r,1),--this.size,!0)},Tt=St;var Bt=function(e){var t=this.__data__,r=Tt(t,e);return r<0?void 0:t[r][1]},At=St;var zt=function(e){return At(this.__data__,e)>-1},Ot=St;var Mt=function(e,t){var r=this.__data__,n=Ot(r,e);return n<0?(++this.size,r.push([e,t])):r[n][1]=t,this},_t=Ft,Rt=It,Ht=Bt,jt=zt,Lt=Mt;function Pt(e){var t=-1,r=null==e?0:e.length;for(this.clear();++t<r;){var n=e[t];this.set(n[0],n[1])}}Pt.prototype.clear=_t,Pt.prototype.delete=Rt,Pt.prototype.get=Ht,Pt.prototype.has=jt,Pt.prototype.set=Lt;var Wt=Pt,Nt=nt(he,"Map"),Vt=$t,Yt=Wt,Ut=Nt;var qt=function(e){var t=typeof e;return"string"==t||"number"==t||"symbol"==t||"boolean"==t?"__proto__"!==e:null===e};var Gt=function(e,t){var r=e.__data__;return qt(t)?r["string"==typeof t?"string":"hash"]:r.map},Zt=Gt;var Qt=function(e){var t=Zt(this,e).delete(e);return this.size-=t?1:0,t},Xt=Gt;var Kt=function(e){return Xt(this,e).get(e)},Jt=Gt;var er=function(e){return Jt(this,e).has(e)},tr=Gt;var rr=function(e,t){var r=tr(this,e),n=r.size;return r.set(e,t),this.size+=r.size==n?0:1,this},nr=function(){this.size=0,this.__data__={hash:new Vt,map:new(Ut||Yt),string:new Vt}},or=Qt,ir=Kt,sr=er,ar=rr;function lr(e){var t=-1,r=null==e?0:e.length;for(this.clear();++t<r;){var n=e[t];this.set(n[0],n[1])}}lr.prototype.clear=nr,lr.prototype.delete=or,lr.prototype.get=ir,lr.prototype.has=sr,lr.prototype.set=ar;var dr=lr,cr=dr;function ur(e,t){if("function"!=typeof e||null!=t&&"function"!=typeof t)throw new TypeError("Expected a function");var r=function(){var n=arguments,o=t?t.apply(this,n):n[0],i=r.cache;if(i.has(o))return i.get(o);var s=e.apply(this,n);return r.cache=i.set(o,s)||i,s};return r.cache=new(ur.Cache||cr),r}ur.Cache=cr;var hr=ur;var gr=function(e){var t=hr(e,(function(e){return 500===r.size&&r.clear(),e})),r=t.cache;return t},mr=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,pr=/\\(\\)?/g,fr=gr((function(e){var t=[];return 46===e.charCodeAt(0)&&t.push(""),e.replace(mr,(function(e,r,n,o){t.push(n?o.replace(pr,"$1"):r||e)})),t}));var br=function(e,t){for(var r=-1,n=null==e?0:e.length,o=Array(n);++r<n;)o[r]=t(e[r],r,e);return o},yr=le,vr=De,xr=ge?ge.prototype:void 0,wr=xr?xr.toString:void 0;var $r=function e(t){if("string"==typeof t)return t;if(yr(t))return br(t,e)+"";if(vr(t))return wr?wr.call(t):"";var r=t+"";return"0"==r&&1/t==-1/0?"-0":r},Fr=$r;var Cr=le,Er=ze,Sr=fr,kr=function(e){return null==e?"":Fr(e)};var Dr=function(e,t){return Cr(e)?e:Er(e,t)?[e]:Sr(kr(e))},Ir=De;var Tr=function(e){if("string"==typeof e||Ir(e))return e;var t=e+"";return"0"==t&&1/e==-1/0?"-0":t},Br=Dr,Ar=Tr;var zr=function(e,t){for(var r=0,n=(t=Br(t,e)).length;null!=e&&r<n;)e=e[Ar(t[r++])];return r&&r==n?e:void 0},Or=zr;var Mr=function(e,t,r){var n=null==e?void 0:Or(e,t);return void 0===n?r:n},_r=ae(Mr);const Rr=(e,t,r)=>_r(r,t)||_r(e,t),Hr=(e,t)=>{const r=t||e.defaultValue;return _r(e.collections,r)},jr={collections:{default:{"width-005":.5,"width-010":1,"width-020":2,"width-040":4,solid:"solid"}},defaultValue:"default"},Lr=e=>t=>{var r;const n=t.theme,o=Hr(jr,null==n?void 0:n.borderScheme);return(null===(r=null==n?void 0:n.overrides)||void 0===r?void 0:r.border)?`${Rr(o,e,n.overrides.border)}px`:`${o[e]}px`},Pr={"width-005":Lr("width-005"),"width-010":Lr("width-010"),"width-020":Lr("width-020"),"width-040":Lr("width-040"),solid:(Wr="solid",e=>{var t;const r=e.theme,n=Hr(jr,null==r?void 0:r.borderScheme),o=(null===(t=null==r?void 0:r.overrides)||void 0===t?void 0:t.border)?Rr(n,Wr,r.overrides.border):n[Wr];return"function"==typeof o?o(e):o})};var Wr;const Nr={"brand-10":"#2C0C0B","brand-20":"#4C1513","brand-30":"#6C1D1B","brand-40":"#922825","brand-50":"#BF3431","brand-60":"#F15D5A","brand-70":"#F69491","brand-80":"#FABAB7","brand-90":"#FCD7D2","brand-95":"#FFEBE7","brand-100":"#FFF6F4","primary-10":"#1A122C","primary-20":"#2F1F4D","primary-30":"#422D6E","primary-40":"#5B3D97","primary-50":"#7654BC","primary-60":"#9A82CD","primary-70":"#B7A7D8","primary-80":"#CFC5E5","primary-90":"#E3DDF0","primary-95":"#F0EDF7","primary-100":"#F9F8FC","secondary-10":"#0E1723","secondary-20":"#18293D","secondary-30":"#233A57","secondary-40":"#305078","secondary-50":"#4B6A8F","secondary-60":"#7B91A9","secondary-70":"#A1B1C3","secondary-80":"#C1CBD7","secondary-90":"#DBE1E8","secondary-95":"#EBEFF2","secondary-100":"#F7F8FA","neutral-10":"#161616","neutral-20":"#282828","neutral-30":"#393939","neutral-40":"#4E4E4E","neutral-50":"#686868","neutral-60":"#8E8E8E","neutral-70":"#AFAFB0","neutral-80":"#C7CACA","neutral-90":"#DDE1E2","neutral-95":"#EDEFEF","neutral-100":"#F9F9F9","success-10":"#081A0F","success-20":"#0E2D1B","success-30":"#154126","success-40":"#1C5A34","success-50":"#257645","success-60":"#44A068","success-70":"#64C189","success-80":"#80DCA5","success-90":"#B4ECCB","success-95":"#D5F6E2","success-100":"#EFFCF4","warning-10":"#221302","warning-20":"#3B2204","warning-30":"#543106","warning-40":"#744408","warning-50":"#98590C","warning-60":"#D07A13","warning-70":"#E4A244","warning-80":"#F5C26C","warning-90":"#FADBA6","warning-95":"#FCECD4","warning-100":"#FDF7F0","error-10":"#330505","error-20":"#550808","error-30":"#750C0C","error-40":"#9E130F","error-50":"#CB2213","error-60":"#DE6C6C","error-70":"#E89B9B","error-80":"#EFBEBE","error-90":"#F5D9D9","error-95":"#F9ECEC","error-100":"#FCF7F7","info-10":"#021824","info-20":"#032B3F","info-30":"#053D59","info-40":"#065478","info-50":"#176E9B","info-60":"#5296BE","info-70":"#82B5DA","info-80":"#ACCFE7","info-90":"#CCE3F1","info-95":"#E3F1F8","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000","primary-inverse":"#FEAB10"},Vr={"brand-10":"#1F1221","brand-20":"#371F3B","brand-30":"#4E2C53","brand-40":"#6B3E73","brand-50":"#8D5197","brand-60":"#FF3399","brand-70":"#FF88C4","brand-80":"#FFB3D9","brand-90":"#FFD4E9","brand-95":"#FFE8F3","brand-100":"#FFD6EB","primary-10":"#1F1221","primary-20":"#371F3B","primary-30":"#4E2C53","primary-40":"#6B3E73","primary-50":"#8D5197","primary-60":"#B07DB7","primary-70":"#C7A3CC","primary-80":"#D9C2DD","primary-90":"#E9DBEB","primary-95":"#F3ECF4","primary-100":"#FAF7FA","secondary-10":"#2D091B","secondary-20":"#4D0F2E","secondary-30":"#6B1540","secondary-40":"#931D58","secondary-50":"#C02673","secondary-60":"#FF409F","secondary-70":"#FF88C4","secondary-80":"#FFB3D9","secondary-90":"#FFD4E9","secondary-95":"#FFE8F3","secondary-100":"#FFF8FC","neutral-10":"#161616","neutral-20":"#282828","neutral-30":"#393939","neutral-40":"#4E4E4E","neutral-50":"#686868","neutral-60":"#8E8E8E","neutral-70":"#AFAFB0","neutral-80":"#C7CACA","neutral-90":"#DDE1E2","neutral-95":"#EDEFEF","neutral-100":"#F9F9F9","success-10":"#081A0F","success-20":"#0E2D1B","success-30":"#154126","success-40":"#1C5A34","success-50":"#257645","success-60":"#44A068","success-70":"#64C189","success-80":"#80DCA5","success-90":"#B4ECCB","success-95":"#D5F6E2","success-100":"#EFFCF4","warning-10":"#221302","warning-20":"#3B2204","warning-30":"#543106","warning-40":"#744408","warning-50":"#98590C","warning-60":"#D07A13","warning-70":"#E4A244","warning-80":"#F5C26C","warning-90":"#FADBA6","warning-95":"#FCECD4","warning-100":"#FDF7F0","error-10":"#330505","error-20":"#550808","error-30":"#750C0C","error-40":"#9E130F","error-50":"#CB2213","error-60":"#DE6C6C","error-70":"#E89B9B","error-80":"#EFBEBE","error-90":"#F5D9D9","error-95":"#F9ECEC","error-100":"#FCF7F7","info-10":"#021824","info-20":"#032B3F","info-30":"#053D59","info-40":"#065478","info-50":"#176E9B","info-60":"#5296BE","info-70":"#82B5DA","info-80":"#ACCFE7","info-90":"#CCE3F1","info-95":"#E3F1F8","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000","primary-inverse":"#FEAB10"},Yr={"brand-10":"#2C0C0B","brand-20":"#4C1513","brand-30":"#6C1D1B","brand-40":"#922825","brand-50":"#BF3431","brand-60":"#F15D5A","brand-70":"#F69491","brand-80":"#FABAB7","brand-90":"#FCD7D2","brand-95":"#FFEBE7","brand-100":"#FFF6F4","primary-10":"#001731","primary-20":"#002752","primary-30":"#003874","primary-40":"#004D9F","primary-50":"#1768BE","primary-60":"#3C91EC","primary-70":"#6CB4FF","primary-80":"#A5CDFF","primary-90":"#CFE1FE","primary-95":"#E8F0FE","primary-100":"#F7F9FF","secondary-10":"#131529","secondary-20":"#222547","secondary-30":"#2F3565","secondary-40":"#42498B","secondary-50":"#5B62A7","secondary-60":"#858CBD","secondary-70":"#A8ADCF","secondary-80":"#C6C9E0","secondary-90":"#DDDFEC","secondary-95":"#EDEEF5","secondary-100":"#F8F8FB","neutral-10":"#161616","neutral-20":"#282828","neutral-30":"#393939","neutral-40":"#4E4E4E","neutral-50":"#686868","neutral-60":"#8E8E8E","neutral-70":"#AFAFB0","neutral-80":"#C7CACA","neutral-90":"#DDE1E2","neutral-95":"#EDEFEF","neutral-100":"#F9F9F9","success-10":"#081A0F","success-20":"#0E2D1B","success-30":"#154126","success-40":"#1C5A34","success-50":"#257645","success-60":"#44A068","success-70":"#64C189","success-80":"#80DCA5","success-90":"#B4ECCB","success-95":"#D5F6E2","success-100":"#EFFCF4","warning-10":"#221302","warning-20":"#3B2204","warning-30":"#543106","warning-40":"#744408","warning-50":"#98590C","warning-60":"#D07A13","warning-70":"#E4A244","warning-80":"#F5C26C","warning-90":"#FADBA6","warning-95":"#FCECD4","warning-100":"#FDF7F0","error-10":"#330505","error-20":"#550808","error-30":"#750C0C","error-40":"#9E130F","error-50":"#CB2213","error-60":"#DE6C6C","error-70":"#E89B9B","error-80":"#EFBEBE","error-90":"#F5D9D9","error-95":"#F9ECEC","error-100":"#FCF7F7","info-10":"#021824","info-20":"#032B3F","info-30":"#053D59","info-40":"#065478","info-50":"#176E9B","info-60":"#5296BE","info-70":"#82B5DA","info-80":"#ACCFE7","info-90":"#CCE3F1","info-95":"#E3F1F8","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000","primary-inverse":"#FEAB10"},Ur={"brand-10":"#2C0C0B","brand-20":"#4C1513","brand-30":"#6C1D1B","brand-40":"#922825","brand-50":"#BF3431","brand-60":"#F15D5A","brand-70":"#F69491","brand-80":"#FABAB7","brand-90":"#FCD7D2","brand-95":"#FFEBE7","brand-100":"#FFF6F4","primary-10":"#0011924","primary-20":"#032B40","primary-30":"#043D5A","primary-40":"#05547B","primary-50":"#096EA1","primary-60":"#2098D3","primary-70":"#5CB9E8","primary-80":"#8BD3F6","primary-90":"#BEE6FA","primary-95":"#E2F2FA","primary-100":"#F4FAFC","secondary-10":"#131529","secondary-20":"#222547","secondary-30":"#2F3565","secondary-40":"#42498B","secondary-50":"#5B62A7","secondary-60":"#858CBD","secondary-70":"#A8ADCF","secondary-80":"#C6C9E0","secondary-90":"#DDDFEC","secondary-95":"#EDEEF5","secondary-100":"#F8F8FB","neutral-10":"#161616","neutral-20":"#282828","neutral-30":"#393939","neutral-40":"#4E4E4E","neutral-50":"#686868","neutral-60":"#8E8E8E","neutral-70":"#AFAFB0","neutral-80":"#C7CACA","neutral-90":"#DDE1E2","neutral-95":"#EDEFEF","neutral-100":"#F9F9F9","success-10":"#081A0F","success-20":"#0E2D1B","success-30":"#154126","success-40":"#1C5A34","success-50":"#257645","success-60":"#44A068","success-70":"#64C189","success-80":"#80DCA5","success-90":"#B4ECCB","success-95":"#D5F6E2","success-100":"#EFFCF4","warning-10":"#221302","warning-20":"#3B2204","warning-30":"#543106","warning-40":"#744408","warning-50":"#98590C","warning-60":"#D07A13","warning-70":"#E4A244","warning-80":"#F5C26C","warning-90":"#FADBA6","warning-95":"#FCECD4","warning-100":"#FDF7F0","error-10":"#330505","error-20":"#550808","error-30":"#750C0C","error-40":"#9E130F","error-50":"#CB2213","error-60":"#DE6C6C","error-70":"#E89B9B","error-80":"#EFBEBE","error-90":"#F5D9D9","error-95":"#F9ECEC","error-100":"#FCF7F7","info-10":"#021824","info-20":"#032B3F","info-30":"#053D59","info-40":"#065478","info-50":"#176E9B","info-60":"#5296BE","info-70":"#82B5DA","info-80":"#ACCFE7","info-90":"#CCE3F1","info-95":"#E3F1F8","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000","primary-inverse":"#FEAB10"},qr={"brand-10":"#001A19","brand-20":"#002D2B","brand-30":"#00413D","brand-40":"#005954","brand-50":"#00756F","brand-60":"#03A098","brand-70":"#55BFBA","brand-80":"#92D6D2","brand-90":"#BFE7E5","brand-95":"#DDF2F1","brand-100":"#F4FBFA","primary-10":"#09191D","primary-20":"#102B34","primary-30":"#173D49","primary-40":"#205666","primary-50":"#2A7086","primary-60":"#2A7086","primary-70":"#8CB6C2","primary-80":"#B2CED6","primary-90":"#D1E2E7","primary-95":"#E8F0F3","primary-100":"#F9F8FC","secondary-10":"#001731","secondary-20":"#002752","secondary-30":"#003874","secondary-40":"#004D9F","secondary-50":"#5B62A7","secondary-60":"#858CBD","secondary-70":"#A8ADCF","secondary-80":"#C6C9E0","secondary-90":"#DDDFEC","secondary-95":"#EDEEF5","secondary-100":"#F8F8FB","neutral-10":"#161616","neutral-20":"#282828","neutral-30":"#393939","neutral-40":"#4E4E4E","neutral-50":"#686868","neutral-60":"#8E8E8E","neutral-70":"#AFAFB0","neutral-80":"#C7CACA","neutral-90":"#DDE1E2","neutral-95":"#EDEFEF","neutral-100":"#F9F9F9","success-10":"#081A0F","success-20":"#0E2D1B","success-30":"#154126","success-40":"#1C5A34","success-50":"#257645","success-60":"#44A068","success-70":"#64C189","success-80":"#80DCA5","success-90":"#B4ECCB","success-95":"#D5F6E2","success-100":"#EFFCF4","warning-10":"#221302","warning-20":"#3B2204","warning-30":"#543106","warning-40":"#744408","warning-50":"#98590C","warning-60":"#D07A13","warning-70":"#E4A244","warning-80":"#F5C26C","warning-90":"#FADBA6","warning-95":"#FCECD4","warning-100":"#FDF7F0","error-10":"#330505","error-20":"#550808","error-30":"#750C0C","error-40":"#9E130F","error-50":"#CB2213","error-60":"#DE6C6C","error-70":"#E89B9B","error-80":"#EFBEBE","error-90":"#F5D9D9","error-95":"#F9ECEC","error-100":"#FCF7F7","info-10":"#021824","info-20":"#032B3F","info-30":"#053D59","info-40":"#065478","info-50":"#176E9B","info-60":"#5296BE","info-70":"#82B5DA","info-80":"#ACCFE7","info-90":"#CCE3F1","info-95":"#E3F1F8","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000","primary-inverse":"#FEAB10"},Gr={"brand-10":"#881317","brand-20":"#B5191E","brand-30":"#B5040A","brand-40":"#D0333F","brand-50":"#DC666F","brand-60":"#E28087","brand-70":"#E7999F","brand-80":"#EDB3B7","brand-90":"#F3CCCF","brand-95":"#F9E6E7","brand-100":"#FCF2F3","primary-10":"#000000","primary-20":"#191919","primary-30":"#333333","primary-40":"#4D4D4D","primary-50":"#666666","primary-60":"#808080","primary-70":"#999999","primary-80":"#B3B3B3","primary-90":"#E6E6E6","primary-95":"#F7F7F7","primary-100":"#FFFFFF","secondary-10":"#19151D","secondary-20":"#2B2533","secondary-30":"#3E3649","secondary-40":"#564A64","secondary-50":"#6F637D","secondary-60":"#948B9F","secondary-70":"#B3ACBB","secondary-80":"#CCC8D2","secondary-90":"#E1DEE4","secondary-95":"#EFEEF1","secondary-100":"#F9F8F9","neutral-10":"#000000","neutral-20":"#191919","neutral-30":"#333333","neutral-40":"#4D4D4D","neutral-50":"#666666","neutral-60":"#808080","neutral-70":"#999999","neutral-80":"#B3B3B3","neutral-90":"#E6E6E6","neutral-95":"#F7F7F7","neutral-100":"#FFFFFF","success-10":"#081A0F","success-20":"#0E2D1B","success-30":"#154126","success-40":"#1C5A34","success-50":"#257645","success-60":"#44A068","success-70":"#64C189","success-80":"#80DCA5","success-90":"#B4ECCB","success-95":"#D5F6E2","success-100":"#EFFCF4","warning-10":"#221302","warning-20":"#3B2204","warning-30":"#543106","warning-40":"#744408","warning-50":"#98590C","warning-60":"#D07A13","warning-70":"#E4A244","warning-80":"#F5C26C","warning-90":"#FADBA6","warning-95":"#FCECD4","warning-100":"#FDF7F0","error-10":"#330505","error-20":"#550808","error-30":"#750C0C","error-40":"#9E130F","error-50":"#CB2213","error-60":"#DE6C6C","error-70":"#E89B9B","error-80":"#EFBEBE","error-90":"#F5D9D9","error-95":"#F9ECEC","error-100":"#FCF7F7","info-10":"#021824","info-20":"#032B3F","info-30":"#053D59","info-40":"#065478","info-50":"#176E9B","info-60":"#5296BE","info-70":"#82B5DA","info-80":"#ACCFE7","info-90":"#CCE3F1","info-95":"#E3F1F8","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000","primary-inverse":"#FEAB10"},Zr={"brand-10":"#0E123A","brand-20":"#191E65","brand-30":"#232B90","brand-40":"#303BC5","brand-50":"#494CFF","brand-60":"#AD6EFF","brand-70":"#AEA4FF","brand-80":"#C5C4FF","brand-90":"#DDDCFF","brand-95":"#EDECFF","brand-100":"#F8F8FF","primary-10":"#10152B","primary-20":"#1C254B","primary-30":"#28356C","primary-40":"#38489A","primary-50":"#4D5AD7","primary-60":"#7487F2","primary-70":"#9AAAFC","primary-80":"#BDC7FD","primary-90":"#DADFFB","primary-95":"#ECEEFE","primary-100":"#F7F8FF","secondary-10":"#19151D","secondary-20":"#2B2533","secondary-30":"#3E3649","secondary-40":"#564A64","secondary-50":"#6F637D","secondary-60":"#948B9F","secondary-70":"#B3ACBB","secondary-80":"#CCC8D2","secondary-90":"#E1DEE4","secondary-95":"#EFEEF1","secondary-100":"#F9F8F9","neutral-10":"#161616","neutral-20":"#282828","neutral-30":"#393939","neutral-40":"#4E4E4E","neutral-50":"#686868","neutral-60":"#8E8E8E","neutral-70":"#AFAFB0","neutral-80":"#C7CACA","neutral-90":"#DDE1E2","neutral-95":"#EDEFEF","neutral-100":"#F9F9F9","success-10":"#081A0F","success-20":"#0E2D1B","success-30":"#154126","success-40":"#1C5A34","success-50":"#257645","success-60":"#44A068","success-70":"#64C189","success-80":"#80DCA5","success-90":"#B4ECCB","success-95":"#D5F6E2","success-100":"#EFFCF4","warning-10":"#221302","warning-20":"#3B2204","warning-30":"#543106","warning-40":"#744408","warning-50":"#98590C","warning-60":"#D07A13","warning-70":"#E4A244","warning-80":"#F5C26C","warning-90":"#FADBA6","warning-95":"#FCECD4","warning-100":"#FDF7F0","error-10":"#330505","error-20":"#550808","error-30":"#750C0C","error-40":"#9E130F","error-50":"#CB2213","error-60":"#DE6C6C","error-70":"#E89B9B","error-80":"#EFBEBE","error-90":"#F5D9D9","error-95":"#F9ECEC","error-100":"#FCF7F7","info-10":"#021824","info-20":"#032B3F","info-30":"#053D59","info-40":"#065478","info-50":"#176E9B","info-60":"#5296BE","info-70":"#82B5DA","info-80":"#ACCFE7","info-90":"#CCE3F1","info-95":"#E3F1F8","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000","primary-inverse":"#FEAB10"},Qr={"brand-10":"#170F39","brand-20":"#281C62","brand-30":"#38268B","brand-40":"#4D34BF","brand-50":"#5735DF","brand-60":"#9986F9","brand-70":"#B2A5F8","brand-80":"#CDC2FA","brand-90":"#E2DCFC","brand-95":"#EFEDFE","brand-100":"#FAF8FD","primary-10":"#170F39","primary-20":"#281C62","primary-30":"#38268B","primary-40":"#4D34BF","primary-50":"#5735DF","primary-60":"#9986F9","primary-70":"#B2A5F8","primary-80":"#CDC2FA","primary-90":"#E2DCFC","primary-95":"#EFEDFE","primary-100":"#FAF8FD","secondary-10":"#251204","secondary-20":"#401F08","secondary-30":"#5B2C0B","secondary-40":"#7E3D0F","secondary-50":"#B04900","secondary-60":"#E26E1C","secondary-70":"#FF9445","secondary-80":"#FFBB8E","secondary-90":"#FFD9BF","secondary-95":"#FFECDF","secondary-100":"#FFF8F3","neutral-10":"#161616","neutral-20":"#282828","neutral-30":"#393939","neutral-40":"#4E4E4E","neutral-50":"#686868","neutral-60":"#8E8E8E","neutral-70":"#AFAFB0","neutral-80":"#C7CACA","neutral-90":"#DDE1E2","neutral-95":"#EDEFEF","neutral-100":"#F9F9F9","success-10":"#031B15","success-20":"#082D24","success-30":"#094134","success-40":"#0D5947","success-50":"#10755E","success-60":"#16A181","success-70":"#1EC59D","success-80":"#6FDDC2","success-90":"#AFECDE","success-95":"#D5F5ED","success-100":"#F1FCF9","warning-10":"#1F1500","warning-20":"#362500","warning-30":"#4D3501","warning-40":"#6A4801","warning-50":"#8B6001","warning-60":"#BF8301","warning-70":"#EAA102","warning-80":"#FFBF34","warning-90":"#FFDC8F","warning-95":"#FFEDC7","warning-100":"#FFF8EA","error-10":"#270F10","error-20":"#441B1B","error-30":"#612627","error-40":"#853535","error-50":"#AF4546","error-60":"#EC6162","error-70":"#F29696","error-80":"#F7BBBC","error-90":"#FAD8D8","error-95":"#FCEAEA","error-100":"#FEF7F7","info-10":"#0F1627","info-20":"#1B2745","info-30":"#273763","info-40":"#354D88","info-50":"#4665B3","info-60":"#618AF6","info-70":"#8DADFF","info-80":"#B4C9FF","info-90":"#D3DFFF","info-95":"#E9EFFF","info-100":"#F5F8FF",white:"#FFFFFF",black:"#000000","primary-inverse":"#FEAB10"},Xr={"brand-10":"#0E113C","brand-20":"#191E67","brand-30":"#232A92","brand-40":"#233FC2","brand-50":"#135CEA","brand-60":"#378FFB","brand-70":"#71B3FD","brand-80":"#9DCFFE","brand-90":"#C1E5FF","brand-95":"#DCF1FF","brand-100":"#F3FAFF","primary-10":"#0E113C","primary-20":"#191E67","primary-30":"#232A92","primary-40":"#233FC2","primary-50":"#135CEA","primary-60":"#378FFB","primary-70":"#71B3FD","primary-80":"#9DCFFE","primary-90":"#C1E5FF","primary-95":"#DCF1FF","primary-100":"#F3FAFF","secondary-10":"#34001F","secondary-20":"#540033","secondary-30":"#730045","secondary-40":"#9D0054","secondary-50":"#C61C64","secondary-60":"#DE6792","secondary-70":"#EB96B6","secondary-80":"#F5BAD2","secondary-90":"#FCD5E3","secondary-95":"#FDEBF1","secondary-100":"#FDF6F9","neutral-10":"#161616","neutral-20":"#282828","neutral-30":"#393939","neutral-40":"#4E4E4E","neutral-50":"#686868","neutral-60":"#8E8E8E","neutral-70":"#AFAFB0","neutral-80":"#C7CACA","neutral-90":"#DDE1E2","neutral-95":"#EDEFEF","neutral-100":"#F9F9F9","success-10":"#081A0F","success-20":"#0E2D1B","success-30":"#154126","success-40":"#1C5A34","success-50":"#257645","success-60":"#44A068","success-70":"#64C189","success-80":"#80DCA5","success-90":"#B4ECCB","success-95":"#D5F6E2","success-100":"#EFFCF4","warning-10":"#221302","warning-20":"#3B2204","warning-30":"#543106","warning-40":"#744408","warning-50":"#98590C","warning-60":"#D07A13","warning-70":"#E4A244","warning-80":"#F5C26C","warning-90":"#FADBA6","warning-95":"#FCECD4","warning-100":"#FDF7F0","error-10":"#330505","error-20":"#550808","error-30":"#750C0C","error-40":"#9E130F","error-50":"#CB2213","error-60":"#DE6C6C","error-70":"#E89B9B","error-80":"#EFBEBE","error-90":"#F5D9D9","error-95":"#F9ECEC","error-100":"#FCF7F7","info-10":"#021824","info-20":"#032B3F","info-30":"#053D59","info-40":"#065478","info-50":"#176E9B","info-60":"#5296BE","info-70":"#82B5DA","info-80":"#ACCFE7","info-90":"#CCE3F1","info-95":"#E3F1F8","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000","primary-inverse":"#FEAB10"},Kr={collections:{lifesg:Yr,bookingsg:Nr,rbs:Zr,mylegacy:Ur,ccube:Vr,oneservice:qr,pa:Gr,a11yplayground:Qr,supportgowhere:Xr},defaultValue:"lifesg"},Jr={collections:{lifesg:Yr,bookingsg:Nr,rbs:Zr,mylegacy:Ur,ccube:Vr,oneservice:qr,pa:Gr,a11yplayground:Qr,supportgowhere:Xr},defaultValue:"lifesg"},en=e=>t=>{var r;const n=t.theme,o="dark"===(null==n?void 0:n.colourMode),i=Hr(o?Jr:Kr,null==n?void 0:n.colourScheme),s=o?"primitiveColourDark":"primitiveColour",a=null===(r=null==n?void 0:n.overrides)||void 0===r?void 0:r[s];return a?Rr(i,e,a):i[e]},tn={"brand-10":en("brand-10"),"brand-20":en("brand-20"),"brand-30":en("brand-30"),"brand-40":en("brand-40"),"brand-50":en("brand-50"),"brand-60":en("brand-60"),"brand-70":en("brand-70"),"brand-80":en("brand-80"),"brand-90":en("brand-90"),"brand-95":en("brand-95"),"brand-100":en("brand-100"),"primary-10":en("primary-10"),"primary-20":en("primary-20"),"primary-30":en("primary-30"),"primary-40":en("primary-40"),"primary-50":en("primary-50"),"primary-60":en("primary-60"),"primary-70":en("primary-70"),"primary-80":en("primary-80"),"primary-90":en("primary-90"),"primary-95":en("primary-95"),"primary-100":en("primary-100"),"secondary-10":en("secondary-10"),"secondary-20":en("secondary-20"),"secondary-30":en("secondary-30"),"secondary-40":en("secondary-40"),"secondary-50":en("secondary-50"),"secondary-60":en("secondary-60"),"secondary-70":en("secondary-70"),"secondary-80":en("secondary-80"),"secondary-90":en("secondary-90"),"secondary-95":en("secondary-95"),"secondary-100":en("secondary-100"),"neutral-10":en("neutral-10"),"neutral-20":en("neutral-20"),"neutral-30":en("neutral-30"),"neutral-40":en("neutral-40"),"neutral-50":en("neutral-50"),"neutral-60":en("neutral-60"),"neutral-70":en("neutral-70"),"neutral-80":en("neutral-80"),"neutral-90":en("neutral-90"),"neutral-95":en("neutral-95"),"neutral-100":en("neutral-100"),"success-10":en("success-10"),"success-20":en("success-20"),"success-30":en("success-30"),"success-40":en("success-40"),"success-50":en("success-50"),"success-60":en("success-60"),"success-70":en("success-70"),"success-80":en("success-80"),"success-90":en("success-90"),"success-95":en("success-95"),"success-100":en("success-100"),"warning-10":en("warning-10"),"warning-20":en("warning-20"),"warning-30":en("warning-30"),"warning-40":en("warning-40"),"warning-50":en("warning-50"),"warning-60":en("warning-60"),"warning-70":en("warning-70"),"warning-80":en("warning-80"),"warning-90":en("warning-90"),"warning-95":en("warning-95"),"warning-100":en("warning-100"),"error-10":en("error-10"),"error-20":en("error-20"),"error-30":en("error-30"),"error-40":en("error-40"),"error-50":en("error-50"),"error-60":en("error-60"),"error-70":en("error-70"),"error-80":en("error-80"),"error-90":en("error-90"),"error-95":en("error-95"),"error-100":en("error-100"),"info-10":en("info-10"),"info-20":en("info-20"),"info-30":en("info-30"),"info-40":en("info-40"),"info-50":en("info-50"),"info-60":en("info-60"),"info-70":en("info-70"),"info-80":en("info-80"),"info-90":en("info-90"),"info-95":en("info-95"),"info-100":en("info-100"),white:en("white"),black:en("black"),"primary-inverse":en("primary-inverse")},rn={text:en("neutral-20"),"text-subtle":en("neutral-30"),"text-subtler":en("neutral-50"),"text-subtlest":en("neutral-60"),"text-primary":en("primary-50"),"text-hover":en("primary-40"),"text-selected":en("primary-50"),"text-selected-hover":en("primary-40"),"text-disabled":en("neutral-50"),"text-disabled-subtle":en("neutral-60"),"text-disabled-subtlest":en("neutral-80"),"text-selected-disabled":en("neutral-20"),"text-success":en("success-40"),"text-warning":en("warning-40"),"text-error":en("error-40"),"text-info":en("info-40"),"text-inverse":en("white"),icon:en("neutral-50"),"icon-subtle":en("neutral-60"),"icon-strongest":en("neutral-20"),"icon-primary":en("primary-50"),"icon-primary-subtle":en("primary-60"),"icon-primary-subtlest":en("primary-70"),"icon-hover":en("primary-40"),"icon-selected":en("primary-50"),"icon-selected-hover":en("primary-40"),"icon-disabled":en("neutral-50"),"icon-disabled-subtle":en("neutral-60"),"icon-selected-disabled":en("neutral-60"),"icon-success":en("success-50"),"icon-warning":en("warning-60"),"icon-error":en("error-50"),"icon-error-strong":en("error-40"),"icon-info":en("info-50"),"icon-inverse":en("white"),"icon-primary-inverse":en("primary-inverse"),border:en("neutral-90"),"border-strong":en("neutral-70"),"border-stronger":en("neutral-50"),"border-primary":en("primary-50"),"border-primary-subtle":en("primary-60"),"border-hover":en("primary-90"),"border-hover-strong":en("primary-60"),"border-selected":en("primary-50"),"border-selected-subtle":en("primary-70"),"border-selected-subtlest":en("primary-90"),"border-selected-hover":en("primary-40"),"border-focus":en("primary-60"),"border-focus-strong":en("primary-50"),"border-disabled":en("neutral-90"),"border-selected-disabled":en("neutral-70"),"border-success":en("success-60"),"border-warning":en("warning-60"),"border-error":en("error-60"),"border-error-focus":en("error-60"),"border-error-focus-strong":en("error-40"),"border-error-strong":en("error-40"),"border-info":en("info-60"),bg:en("white"),"bg-strong":en("neutral-100"),"bg-stronger":en("neutral-95"),"bg-strongest":en("neutral-90"),"bg-hover":en("primary-95"),"bg-hover-strong":en("primary-90"),"bg-hover-subtle":en("primary-100"),"bg-hover-neutral":en("neutral-100"),"bg-hover-neutral-strong":en("neutral-90"),"bg-selected":en("primary-95"),"bg-selected-hover":en("primary-90"),"bg-selected-strong":en("primary-90"),"bg-selected-stronger":en("primary-70"),"bg-selected-strongest":en("primary-50"),"bg-selected-strongest-hover":en("primary-40"),"bg-disabled":en("neutral-95"),"bg-selected-disabled":en("neutral-95"),"bg-selected-stronger-disabled":en("neutral-70"),"bg-success":en("success-100"),"bg-success-hover":en("success-95"),"bg-success-strong":en("success-50"),"bg-success-strong-hover":en("success-40"),"bg-warning":en("warning-100"),"bg-warning-hover":en("warning-95"),"bg-warning-strong":en("warning-50"),"bg-warning-strong-hover":en("warning-40"),"bg-info":en("info-100"),"bg-info-hover":en("info-95"),"bg-info-strong":en("info-50"),"bg-info-strong-hover":en("info-40"),"bg-error":en("error-100"),"bg-error-hover":en("error-95"),"bg-error-strong":en("error-50"),"bg-error-strong-hover":en("error-40"),"bg-inverse":en("neutral-20"),"bg-inverse-subtle":en("neutral-30"),"bg-inverse-subtler":en("neutral-50"),"bg-inverse-subtlest":en("neutral-60"),"bg-inverse-hover":en("neutral-40"),"bg-primary":en("primary-50"),"bg-primary-subtle":en("primary-60"),"bg-primary-subtler":en("primary-95"),"bg-primary-subtlest":en("primary-100"),"bg-available":"#6DD0A1","bg-primary-hover":en("primary-40"),"bg-primary-subtlest-hover":en("primary-90"),"bg-primary-subtlest-selected":en("primary-90"),"overlay-strong":"rgba(40, 40, 40, 0.85)","overlay-subtle":"rgba(40, 40, 40, 0.20)",hyperlink:en("primary-50"),"hyperlink-hover":en("primary-40"),"hyperlink-visited":en("primary-40"),"hyperlink-inverse":en("primary-inverse"),"focus-ring":en("black"),"focus-ring-inverse":en("white")},nn={text:en("neutral-100"),"text-subtle":en("neutral-80"),"text-subtler":en("neutral-60"),"text-subtlest":en("neutral-50"),"text-primary":en("primary-60"),"text-hover":en("primary-70"),"text-selected":en("primary-60"),"text-selected-hover":en("primary-70"),"text-disabled":en("neutral-60"),"text-disabled-subtle":en("neutral-50"),"text-disabled-subtlest":en("neutral-30"),"text-selected-disabled":en("neutral-90"),"text-success":en("success-70"),"text-warning":en("warning-70"),"text-error":en("error-70"),"text-info":en("info-70"),"text-inverse":en("black"),icon:en("neutral-60"),"icon-subtle":en("neutral-50"),"icon-strongest":en("neutral-90"),"icon-primary":en("primary-60"),"icon-primary-subtle":en("primary-50"),"icon-primary-subtlest":en("primary-40"),"icon-hover":en("primary-70"),"icon-selected":en("primary-60"),"icon-selected-hover":en("primary-70"),"icon-disabled":en("neutral-60"),"icon-disabled-subtle":en("neutral-50"),"icon-selected-disabled":en("neutral-50"),"icon-success":en("success-60"),"icon-warning":en("warning-50"),"icon-error":en("error-60"),"icon-error-strong":en("error-70"),"icon-info":en("info-60"),"icon-inverse":en("black"),"icon-primary-inverse":en("primary-inverse"),border:en("neutral-20"),"border-strong":en("neutral-40"),"border-stronger":en("neutral-60"),"border-primary":en("primary-60"),"border-primary-subtle":en("primary-50"),"border-hover":en("primary-20"),"border-hover-strong":en("primary-50"),"border-selected":en("primary-60"),"border-selected-subtle":en("primary-40"),"border-selected-subtlest":en("primary-20"),"border-selected-hover":en("primary-70"),"border-focus":en("primary-50"),"border-focus-strong":en("primary-60"),"border-disabled":en("neutral-20"),"border-selected-disabled":en("neutral-40"),"border-success":en("success-50"),"border-warning":en("warning-50"),"border-error":en("error-50"),"border-error-focus":en("error-50"),"border-error-focus-strong":en("error-70"),"border-error-strong":en("error-70"),"border-info":en("info-50"),bg:en("black"),"bg-strong":en("neutral-10"),"bg-stronger":en("neutral-20"),"bg-strongest":en("neutral-20"),"bg-hover":en("primary-20"),"bg-hover-strong":en("primary-20"),"bg-hover-subtle":en("primary-10"),"bg-hover-neutral":en("neutral-10"),"bg-hover-neutral-strong":en("neutral-20"),"bg-selected":en("primary-20"),"bg-selected-hover":en("primary-20"),"bg-selected-strong":en("primary-20"),"bg-selected-stronger":en("primary-40"),"bg-selected-strongest":en("primary-60"),"bg-selected-strongest-hover":en("primary-70"),"bg-disabled":en("neutral-20"),"bg-selected-disabled":en("neutral-20"),"bg-selected-stronger-disabled":en("neutral-40"),"bg-success":en("success-10"),"bg-success-hover":en("success-20"),"bg-success-strong":en("success-60"),"bg-success-strong-hover":en("success-70"),"bg-warning":en("warning-10"),"bg-warning-hover":en("warning-20"),"bg-warning-strong":en("warning-60"),"bg-warning-strong-hover":en("warning-70"),"bg-info":en("info-10"),"bg-info-hover":en("info-20"),"bg-info-strong":en("info-60"),"bg-info-strong-hover":en("info-70"),"bg-error":en("error-10"),"bg-error-hover":en("error-20"),"bg-error-strong":en("error-60"),"bg-error-strong-hover":en("error-70"),"bg-inverse":en("neutral-90"),"bg-inverse-subtle":en("neutral-80"),"bg-inverse-subtler":en("neutral-60"),"bg-inverse-subtlest":en("neutral-50"),"bg-inverse-hover":en("neutral-70"),"bg-primary":en("primary-60"),"bg-primary-subtle":en("primary-50"),"bg-primary-subtler":en("primary-20"),"bg-primary-subtlest":en("primary-10"),"bg-available":"#185339","bg-primary-hover":en("primary-70"),"bg-primary-subtlest-hover":en("primary-20"),"bg-primary-subtlest-selected":en("primary-20"),"overlay-strong":"rgba(78, 78, 78, 0.80)","overlay-subtle":"rgba(78, 78, 78, 0.50)",hyperlink:en("primary-60"),"hyperlink-hover":en("primary-70"),"hyperlink-visited":en("primary-70"),"hyperlink-inverse":en("primary-inverse"),"focus-ring":en("primary-60"),"focus-ring-inverse":en("black")},on={text:en("neutral-30"),"text-subtle":en("neutral-40"),"text-subtler":en("neutral-50"),"text-subtlest":en("neutral-70"),"text-primary":en("neutral-10"),"text-hover":en("neutral-70"),"text-selected":en("neutral-20"),"text-selected-hover":en("neutral-10"),"text-disabled":en("neutral-50"),"text-disabled-subtle":en("neutral-60"),"text-disabled-subtlest":en("neutral-80"),"text-selected-disabled":en("neutral-40"),"text-success":en("success-40"),"text-warning":en("warning-40"),"text-error":en("brand-30"),"text-info":en("neutral-40"),"text-inverse":en("neutral-100"),icon:en("neutral-40"),"icon-subtle":en("neutral-50"),"icon-strongest":en("neutral-10"),"icon-primary":en("neutral-10"),"icon-primary-subtle":en("neutral-30"),"icon-primary-subtlest":en("neutral-60"),"icon-hover":en("neutral-70"),"icon-selected":en("brand-20"),"icon-selected-hover":en("brand-10"),"icon-disabled":en("neutral-50"),"icon-disabled-subtle":en("neutral-60"),"icon-selected-disabled":en("neutral-40"),"icon-success":en("success-40"),"icon-warning":en("warning-60"),"icon-error":en("brand-30"),"icon-error-strong":en("brand-10"),"icon-info":en("neutral-40"),"icon-inverse":en("neutral-100"),"icon-primary-inverse":"#F9B371",border:en("neutral-90"),"border-strong":en("neutral-30"),"border-stronger":en("neutral-20"),"border-primary":en("neutral-40"),"border-primary-subtle":en("neutral-60"),"border-hover":en("neutral-80"),"border-hover-strong":en("neutral-10"),"border-selected":en("brand-20"),"border-selected-subtle":en("neutral-40"),"border-selected-subtlest":en("neutral-70"),"border-selected-hover":en("neutral-10"),"border-focus":en("neutral-20"),"border-focus-strong":en("neutral-10"),"border-disabled":en("neutral-90"),"border-selected-disabled":en("neutral-80"),"border-success":en("success-40"),"border-warning":en("warning-60"),"border-error":en("brand-30"),"border-error-focus":en("brand-20"),"border-error-focus-strong":en("brand-10"),"border-error-strong":en("brand-20"),"border-info":en("neutral-40"),bg:en("neutral-100"),"bg-strong":en("neutral-95"),"bg-stronger":en("neutral-90"),"bg-strongest":en("neutral-80"),"bg-hover":en("brand-90"),"bg-hover-strong":en("brand-80"),"bg-hover-subtle":en("neutral-90"),"bg-hover-neutral":en("neutral-90"),"bg-hover-neutral-strong":en("neutral-90"),"bg-selected":en("brand-100"),"bg-selected-hover":en("brand-30"),"bg-selected-strong":en("brand-50"),"bg-selected-stronger":en("brand-40"),"bg-selected-strongest":en("brand-20"),"bg-selected-strongest-hover":en("brand-10"),"bg-disabled":en("neutral-90"),"bg-selected-disabled":en("neutral-90"),"bg-selected-stronger-disabled":en("neutral-80"),"bg-success":en("success-100"),"bg-success-hover":en("success-95"),"bg-success-strong":en("success-50"),"bg-success-strong-hover":en("success-40"),"bg-warning":en("warning-100"),"bg-warning-hover":en("warning-95"),"bg-warning-strong":en("warning-50"),"bg-warning-strong-hover":en("warning-40"),"bg-info":en("neutral-95"),"bg-info-hover":en("info-95"),"bg-info-strong":en("info-50"),"bg-info-strong-hover":en("info-40"),"bg-error":en("brand-100"),"bg-error-hover":en("error-95"),"bg-error-strong":en("error-50"),"bg-error-strong-hover":en("error-40"),"bg-inverse":en("neutral-40"),"bg-inverse-subtle":en("neutral-60"),"bg-inverse-subtler":en("neutral-70"),"bg-inverse-subtlest":en("neutral-80"),"bg-inverse-hover":en("neutral-30"),"bg-primary":en("brand-20"),"bg-primary-subtle":en("brand-60"),"bg-primary-subtler":en("brand-80"),"bg-primary-subtlest":en("brand-100"),"bg-available":en("success-60"),"bg-primary-hover":en("brand-10"),"bg-primary-subtlest-hover":en("brand-80"),"bg-primary-subtlest-selected":en("brand-40"),"overlay-strong":"rgba(25, 25, 25, 0.95)","overlay-subtle":"rgba(25, 25, 25, 0.20)",hyperlink:en("neutral-10"),"hyperlink-hover":en("neutral-40"),"hyperlink-visited":en("neutral-50"),"hyperlink-inverse":"#F8AE68","focus-ring":en("black"),"focus-ring-inverse":en("white")},sn={text:en("neutral-20"),"text-subtle":en("neutral-30"),"text-subtler":en("neutral-50"),"text-subtlest":en("neutral-60"),"text-primary":en("primary-50"),"text-hover":en("primary-40"),"text-selected":en("primary-50"),"text-selected-hover":en("primary-40"),"text-disabled":en("neutral-50"),"text-disabled-subtle":en("neutral-60"),"text-disabled-subtlest":en("neutral-80"),"text-selected-disabled":en("neutral-20"),"text-success":en("success-40"),"text-warning":en("warning-40"),"text-error":en("error-40"),"text-info":en("info-40"),"text-inverse":en("white"),icon:en("neutral-50"),"icon-subtle":en("neutral-60"),"icon-strongest":en("neutral-20"),"icon-primary":en("primary-50"),"icon-primary-subtle":en("primary-60"),"icon-primary-subtlest":en("primary-70"),"icon-hover":en("primary-40"),"icon-selected":en("primary-50"),"icon-selected-hover":en("primary-40"),"icon-disabled":en("neutral-50"),"icon-disabled-subtle":en("neutral-60"),"icon-selected-disabled":en("neutral-60"),"icon-success":en("success-50"),"icon-warning":en("warning-60"),"icon-error":en("error-50"),"icon-error-strong":en("error-40"),"icon-info":en("info-50"),"icon-inverse":en("white"),"icon-primary-inverse":en("primary-inverse"),border:en("neutral-90"),"border-strong":en("neutral-70"),"border-stronger":en("neutral-50"),"border-primary":en("primary-50"),"border-primary-subtle":en("primary-60"),"border-hover":en("primary-90"),"border-hover-strong":en("primary-60"),"border-selected":en("primary-50"),"border-selected-subtle":en("primary-70"),"border-selected-subtlest":en("primary-90"),"border-selected-hover":en("primary-40"),"border-focus":en("primary-60"),"border-focus-strong":en("primary-50"),"border-disabled":en("neutral-90"),"border-selected-disabled":en("neutral-70"),"border-success":en("success-60"),"border-warning":en("warning-60"),"border-error":en("error-60"),"border-error-focus":en("error-60"),"border-error-focus-strong":en("error-40"),"border-error-strong":en("error-40"),"border-info":en("info-60"),bg:en("white"),"bg-strong":en("neutral-100"),"bg-stronger":en("neutral-95"),"bg-strongest":en("neutral-90"),"bg-hover":en("primary-95"),"bg-hover-strong":en("primary-90"),"bg-hover-subtle":en("primary-100"),"bg-hover-neutral":en("neutral-100"),"bg-hover-neutral-strong":en("neutral-90"),"bg-selected":en("primary-95"),"bg-selected-hover":en("primary-90"),"bg-selected-strong":en("primary-90"),"bg-selected-stronger":en("primary-70"),"bg-selected-strongest":en("primary-50"),"bg-selected-strongest-hover":en("primary-40"),"bg-disabled":en("neutral-95"),"bg-selected-disabled":en("neutral-95"),"bg-selected-stronger-disabled":en("neutral-70"),"bg-success":en("success-100"),"bg-success-hover":en("success-95"),"bg-success-strong":en("success-50"),"bg-success-strong-hover":en("success-40"),"bg-warning":en("warning-100"),"bg-warning-hover":en("warning-95"),"bg-warning-strong":en("warning-50"),"bg-warning-strong-hover":en("warning-40"),"bg-info":en("info-100"),"bg-info-hover":en("info-95"),"bg-info-strong":en("info-50"),"bg-info-strong-hover":en("info-40"),"bg-error":en("error-100"),"bg-error-hover":en("error-95"),"bg-error-strong":en("error-50"),"bg-error-strong-hover":en("error-40"),"bg-inverse":en("neutral-20"),"bg-inverse-subtle":en("neutral-30"),"bg-inverse-subtler":en("neutral-50"),"bg-inverse-subtlest":en("neutral-60"),"bg-inverse-hover":en("neutral-40"),"bg-primary":en("primary-50"),"bg-primary-subtle":en("primary-60"),"bg-primary-subtler":en("primary-95"),"bg-primary-subtlest":en("primary-100"),"bg-available":"#6DD0A1","bg-primary-hover":en("primary-40"),"bg-primary-subtlest-hover":en("primary-90"),"bg-primary-subtlest-selected":en("primary-90"),"overlay-strong":"rgba(40, 40, 40, 0.85)","overlay-subtle":"rgba(40, 40, 40, 0.20)",hyperlink:en("primary-50"),"hyperlink-hover":en("primary-40"),"hyperlink-visited":en("primary-40"),"hyperlink-inverse":en("primary-inverse"),"focus-ring":en("black"),"focus-ring-inverse":en("white")},an={text:en("neutral-100"),"text-subtle":en("neutral-80"),"text-subtler":en("neutral-60"),"text-subtlest":en("neutral-50"),"text-primary":en("primary-60"),"text-hover":en("primary-70"),"text-selected":en("primary-60"),"text-selected-hover":en("primary-70"),"text-disabled":en("neutral-60"),"text-disabled-subtle":en("neutral-50"),"text-disabled-subtlest":en("neutral-30"),"text-selected-disabled":en("neutral-90"),"text-success":en("success-70"),"text-warning":en("warning-70"),"text-error":en("error-70"),"text-info":en("info-70"),"text-inverse":en("black"),icon:en("neutral-60"),"icon-subtle":en("neutral-50"),"icon-strongest":en("neutral-90"),"icon-primary":en("primary-60"),"icon-primary-subtle":en("primary-50"),"icon-primary-subtlest":en("primary-40"),"icon-hover":en("primary-70"),"icon-selected":en("primary-60"),"icon-selected-hover":en("primary-70"),"icon-disabled":en("neutral-60"),"icon-disabled-subtle":en("neutral-50"),"icon-selected-disabled":en("neutral-50"),"icon-success":en("success-60"),"icon-warning":en("warning-50"),"icon-error":en("error-60"),"icon-error-strong":en("error-70"),"icon-info":en("info-60"),"icon-inverse":en("black"),"icon-primary-inverse":en("primary-inverse"),border:en("neutral-20"),"border-strong":en("neutral-40"),"border-stronger":en("neutral-60"),"border-primary":en("primary-60"),"border-primary-subtle":en("primary-50"),"border-hover":en("primary-20"),"border-hover-strong":en("primary-50"),"border-selected":en("primary-60"),"border-selected-subtle":en("primary-40"),"border-selected-subtlest":en("primary-20"),"border-selected-hover":en("primary-70"),"border-focus":en("primary-50"),"border-focus-strong":en("primary-60"),"border-disabled":en("neutral-20"),"border-selected-disabled":en("neutral-40"),"border-success":en("success-50"),"border-warning":en("warning-50"),"border-error":en("error-50"),"border-error-focus":en("error-50"),"border-error-focus-strong":en("error-70"),"border-error-strong":en("error-70"),"border-info":en("info-50"),bg:en("black"),"bg-strong":en("neutral-10"),"bg-stronger":en("neutral-20"),"bg-strongest":en("neutral-20"),"bg-hover":en("primary-20"),"bg-hover-strong":en("primary-20"),"bg-hover-subtle":en("primary-10"),"bg-hover-neutral":en("neutral-10"),"bg-hover-neutral-strong":en("neutral-20"),"bg-selected":en("primary-20"),"bg-selected-hover":en("primary-20"),"bg-selected-strong":en("primary-20"),"bg-selected-stronger":en("primary-40"),"bg-selected-strongest":en("primary-60"),"bg-selected-strongest-hover":en("primary-70"),"bg-disabled":en("neutral-20"),"bg-selected-disabled":en("neutral-20"),"bg-selected-stronger-disabled":en("neutral-40"),"bg-success":en("success-10"),"bg-success-hover":en("success-20"),"bg-success-strong":en("success-60"),"bg-success-strong-hover":en("success-70"),"bg-warning":en("warning-10"),"bg-warning-hover":en("warning-20"),"bg-warning-strong":en("warning-60"),"bg-warning-strong-hover":en("warning-70"),"bg-info":en("info-10"),"bg-info-hover":en("info-20"),"bg-info-strong":en("info-60"),"bg-info-strong-hover":en("info-70"),"bg-error":en("error-10"),"bg-error-hover":en("error-20"),"bg-error-strong":en("error-60"),"bg-error-strong-hover":en("error-70"),"bg-inverse":en("neutral-90"),"bg-inverse-subtle":en("neutral-80"),"bg-inverse-subtler":en("neutral-60"),"bg-inverse-subtlest":en("neutral-50"),"bg-inverse-hover":en("neutral-70"),"bg-primary":en("primary-60"),"bg-primary-subtle":en("primary-50"),"bg-primary-subtler":en("primary-20"),"bg-primary-subtlest":en("primary-10"),"bg-available":"#185339","bg-primary-hover":en("primary-70"),"bg-primary-subtlest-hover":en("primary-20"),"bg-primary-subtlest-selected":en("primary-20"),"overlay-strong":"rgba(78, 78, 78, 0.80)","overlay-subtle":"rgba(78, 78, 78, 0.50)",hyperlink:en("primary-60"),"hyperlink-hover":en("primary-70"),"hyperlink-visited":en("primary-70"),"hyperlink-inverse":en("primary-inverse"),"focus-ring":en("primary-60"),"focus-ring-inverse":en("black")},ln={collections:{lifesg:rn,bookingsg:rn,rbs:rn,mylegacy:rn,ccube:rn,oneservice:rn,pa:on,a11yplayground:sn,supportgowhere:rn},defaultValue:"lifesg"},dn={collections:{lifesg:nn,bookingsg:nn,rbs:nn,mylegacy:nn,ccube:nn,oneservice:nn,pa:nn,a11yplayground:an,supportgowhere:nn},defaultValue:"lifesg"},cn=e=>t=>{var r;const n=t.theme,o="dark"===(null==n?void 0:n.colourMode),i=Hr(o?dn:ln,null==n?void 0:n.colourScheme),s=o?"semanticColourDark":"semanticColour",a=null===(r=null==n?void 0:n.overrides)||void 0===r?void 0:r[s],l=a?Rr(i,e,a):i[e];return"function"==typeof l?l(t):l},un={text:cn("text"),"text-subtle":cn("text-subtle"),"text-subtler":cn("text-subtler"),"text-subtlest":cn("text-subtlest"),"text-primary":cn("text-primary"),"text-hover":cn("text-hover"),"text-selected":cn("text-selected"),"text-selected-hover":cn("text-selected-hover"),"text-disabled":cn("text-disabled"),"text-disabled-subtle":cn("text-disabled-subtle"),"text-disabled-subtlest":cn("text-disabled-subtlest"),"text-selected-disabled":cn("text-selected-disabled"),"text-success":cn("text-success"),"text-warning":cn("text-warning"),"text-error":cn("text-error"),"text-info":cn("text-info"),"text-inverse":cn("text-inverse"),icon:cn("icon"),"icon-subtle":cn("icon-subtle"),"icon-strongest":cn("icon-strongest"),"icon-primary":cn("icon-primary"),"icon-primary-subtle":cn("icon-primary-subtle"),"icon-primary-subtlest":cn("icon-primary-subtlest"),"icon-hover":cn("icon-hover"),"icon-selected":cn("icon-selected"),"icon-selected-hover":cn("icon-selected-hover"),"icon-disabled":cn("icon-disabled"),"icon-disabled-subtle":cn("icon-disabled-subtle"),"icon-selected-disabled":cn("icon-selected-disabled"),"icon-success":cn("icon-success"),"icon-warning":cn("icon-warning"),"icon-error":cn("icon-error"),"icon-error-strong":cn("icon-error-strong"),"icon-info":cn("icon-info"),"icon-inverse":cn("icon-inverse"),"icon-primary-inverse":cn("icon-primary-inverse"),border:cn("border"),"border-strong":cn("border-strong"),"border-stronger":cn("border-stronger"),"border-primary":cn("border-primary"),"border-primary-subtle":cn("border-primary-subtle"),"border-hover":cn("border-hover"),"border-hover-strong":cn("border-hover-strong"),"border-selected":cn("border-selected"),"border-selected-subtle":cn("border-selected-subtle"),"border-selected-subtlest":cn("border-selected-subtlest"),"border-selected-hover":cn("border-selected-hover"),"border-focus":cn("border-focus"),"border-focus-strong":cn("border-focus-strong"),"border-disabled":cn("border-disabled"),"border-selected-disabled":cn("border-selected-disabled"),"border-success":cn("border-success"),"border-warning":cn("border-warning"),"border-error":cn("border-error"),"border-error-focus":cn("border-error-focus"),"border-error-focus-strong":cn("border-error-focus-strong"),"border-error-strong":cn("border-error-strong"),"border-info":cn("border-info"),bg:cn("bg"),"bg-strong":cn("bg-strong"),"bg-stronger":cn("bg-stronger"),"bg-strongest":cn("bg-strongest"),"bg-hover":cn("bg-hover"),"bg-hover-strong":cn("bg-hover-strong"),"bg-hover-subtle":cn("bg-hover-subtle"),"bg-hover-neutral":cn("bg-hover-neutral"),"bg-hover-neutral-strong":cn("bg-hover-neutral-strong"),"bg-selected":cn("bg-selected"),"bg-selected-hover":cn("bg-selected-hover"),"bg-selected-strong":cn("bg-selected-strong"),"bg-selected-stronger":cn("bg-selected-stronger"),"bg-selected-strongest":cn("bg-selected-strongest"),"bg-selected-strongest-hover":cn("bg-selected-strongest-hover"),"bg-disabled":cn("bg-disabled"),"bg-selected-disabled":cn("bg-selected-disabled"),"bg-selected-stronger-disabled":cn("bg-selected-stronger-disabled"),"bg-success":cn("bg-success"),"bg-success-hover":cn("bg-success-hover"),"bg-success-strong":cn("bg-success-strong"),"bg-success-strong-hover":cn("bg-success-strong-hover"),"bg-warning":cn("bg-warning"),"bg-warning-hover":cn("bg-warning-hover"),"bg-warning-strong":cn("bg-warning-strong"),"bg-warning-strong-hover":cn("bg-warning-strong-hover"),"bg-info":cn("bg-info"),"bg-info-hover":cn("bg-info-hover"),"bg-info-strong":cn("bg-info-strong"),"bg-info-strong-hover":cn("bg-info-strong-hover"),"bg-error":cn("bg-error"),"bg-error-hover":cn("bg-error-hover"),"bg-error-strong":cn("bg-error-strong"),"bg-error-strong-hover":cn("bg-error-strong-hover"),"bg-inverse":cn("bg-inverse"),"bg-inverse-subtle":cn("bg-inverse-subtle"),"bg-inverse-subtler":cn("bg-inverse-subtler"),"bg-inverse-subtlest":cn("bg-inverse-subtlest"),"bg-inverse-hover":cn("bg-inverse-hover"),"bg-primary":cn("bg-primary"),"bg-primary-subtle":cn("bg-primary-subtle"),"bg-primary-subtler":cn("bg-primary-subtler"),"bg-primary-subtlest":cn("bg-primary-subtlest"),"bg-available":cn("bg-available"),"bg-primary-hover":cn("bg-primary-hover"),"bg-primary-subtlest-hover":cn("bg-primary-subtlest-hover"),"bg-primary-subtlest-selected":cn("bg-primary-subtlest-selected"),"overlay-strong":cn("overlay-strong"),"overlay-subtle":cn("overlay-subtle"),hyperlink:cn("hyperlink"),"hyperlink-hover":cn("hyperlink-hover"),"hyperlink-visited":cn("hyperlink-visited"),"hyperlink-inverse":cn("hyperlink-inverse"),"focus-ring":cn("focus-ring"),"focus-ring-inverse":cn("focus-ring-inverse")},hn={collections:{default:{solid:e=>t=>{var r,n,o;const{thickness:i,radius:s,colour:a}=e||{},l=null!==(r="function"==typeof i?i(t):i)&&void 0!==r?r:Pr["width-010"](t),d=null!==(n="function"==typeof s?s(t):s)&&void 0!==n?n:0,c=null!==(o="function"==typeof a?a(t):a)&&void 0!==o?o:un.border(t),u=Pr.solid;return w`
            border: ${l} ${u} ${c};
            border-radius: ${d};
        `},"dashed-default":e=>t=>{var r,n,o;const{thickness:i,radius:s,colour:a}=e||{},l=null!==(r="function"==typeof i?i(t):i)&&void 0!==r?r:Pr["width-010"](t),d=null!==(n="function"==typeof s?s(t):s)&&void 0!==n?n:0,c=null!==(o="function"==typeof a?a(t):a)&&void 0!==o?o:un.border(t),u=encodeURIComponent(`<svg width='100%' height='100%' xmlns='http://www.w3.org/2000/svg'><rect width='100%' height='100%' fill='none' rx='${d}' ry='${d}' stroke='${c}' stroke-width='${l}' stroke-dasharray='4, 8' stroke-dashoffset='0' stroke-linecap='square'/></svg>`);return w`
            background-image: url("data:image/svg+xml,${u}");
            border-radius: ${d};
        `}}},defaultValue:"default"},gn=e=>1===e.length&&"theme"in e[0],mn=e=>(...t)=>r=>{const n=gn(t)?[]:t,o=gn(t)?t[0]:r,i=o.theme;return(0,Hr(hn,null==i?void 0:i.borderScheme)[e])(...n)(o)},pn={solid:mn("solid"),"dashed-default":mn("dashed-default")},fn={collections:{default:{"xxs-min":0,"xxs-max":320,"xs-min":321,"xs-max":375,"sm-min":376,"sm-max":420,"md-min":421,"md-max":767,"lg-min":768,"lg-max":1023,"xl-min":1024,"xl-max":1440,"xxl-min":1441,"xxs-column":8,"xs-column":8,"sm-column":8,"md-column":8,"lg-column":12,"xl-column":12,"xxl-column":12,"xxs-gutter":16,"xs-gutter":16,"sm-gutter":16,"md-gutter":16,"lg-gutter":32,"xl-gutter":32,"xxl-gutter":32,"xxs-margin":24,"xs-margin":24,"sm-margin":24,"md-margin":24,"lg-margin":48,"xl-margin":48,"xxl-margin":48}},defaultValue:"default"},bn=e=>t=>{var r;const n=t.theme,o=Hr(fn,null==n?void 0:n.breakpointScheme);let i;return i=(null===(r=null==n?void 0:n.overrides)||void 0===r?void 0:r.breakpoint)?Rr(o,e,n.overrides.breakpoint):o[e],i},yn={"xxs-min":bn("xxs-min"),"xxs-max":bn("xxs-max"),"xs-min":bn("xs-min"),"xs-max":bn("xs-max"),"sm-min":bn("sm-min"),"sm-max":bn("sm-max"),"md-min":bn("md-min"),"md-max":bn("md-max"),"lg-min":bn("lg-min"),"lg-max":bn("lg-max"),"xl-min":bn("xl-min"),"xl-max":bn("xl-max"),"xxl-min":bn("xxl-min"),"xxs-column":bn("xxs-column"),"xs-column":bn("xs-column"),"sm-column":bn("sm-column"),"md-column":bn("md-column"),"lg-column":bn("lg-column"),"xl-column":bn("xl-column"),"xxl-column":bn("xxl-column"),"xxs-gutter":bn("xxs-gutter"),"xs-gutter":bn("xs-gutter"),"sm-gutter":bn("sm-gutter"),"md-gutter":bn("md-gutter"),"lg-gutter":bn("lg-gutter"),"xl-gutter":bn("xl-gutter"),"xxl-gutter":bn("xxl-gutter"),"xxs-margin":bn("xxs-margin"),"xs-margin":bn("xs-margin"),"sm-margin":bn("sm-margin"),"md-margin":bn("md-margin"),"lg-margin":bn("lg-margin"),"xl-margin":bn("xl-margin"),"xxl-margin":bn("xxl-margin")},vn=e=>("max-width"===e?["xxs","xs","sm","md","lg","xl"]:["xxs","xs","sm","md","lg","xl","xxl"]).reduce(((t,r)=>(t[r]=((e,t)=>{const r=yn["max-width"===e?`${t}-max`:`${t}-min`];return t=>{const n=r(t);return`@media screen and (${e}: ${n}px)`}})(e,r),t)),{}),xn={MaxWidth:vn("max-width"),MinWidth:vn("min-width")},wn={collections:{default:{"heading-size-xxl":"3rem","heading-size-xl":"2.5rem","heading-size-lg":"2rem","heading-size-md":"1.625rem","heading-size-sm":"1.375rem","heading-size-xs":"1.125rem","heading-lh-xxl":"3.5rem","heading-lh-xl":"3rem","heading-lh-lg":"2.5rem","heading-lh-md":"2.25rem","heading-lh-sm":"1.75rem","heading-lh-xs":"1.625rem","heading-ls-xxl":"-0.056rem","heading-ls-xl":"-0.032rem","heading-ls-lg":"-0.032rem","heading-ls-md":"0rem","heading-ls-sm":"0rem","heading-ls-xs":"0rem","weight-light":"300","weight-regular":"400","weight-semibold":"600","weight-bold":"700","font-family":"Open Sans","body-size-baseline":"1.125rem","body-size-md":"1rem","body-size-sm":"0.875rem","body-size-xs":"0.75rem","body-lh-baseline":"1.625rem","body-lh-md":"1.5rem","body-lh-sm":"1.625rem","body-lh-xs":"1.25rem","body-ls-baseline":"0rem","body-ls-md":"0.014rem","body-ls-sm":"0.012rem","body-ls-xs":"0.012rem","form-label-size":"1rem","form-description-size":"0.875rem","form-label-lh":"1.5rem","form-description-lh":"1.6rem","form-label-ls":"0.014rem","form-description-ls":"0.012rem"},bookingsg:{"heading-size-xxl":"3rem","heading-size-xl":"2.5rem","heading-size-lg":"2rem","heading-size-md":"1.625rem","heading-size-sm":"1.375rem","heading-size-xs":"1.125rem","heading-lh-xxl":"3.5rem","heading-lh-xl":"3rem","heading-lh-lg":"2.5rem","heading-lh-md":"2.25rem","heading-lh-sm":"1.75rem","heading-lh-xs":"1.75rem","heading-ls-xxl":"-0.056rem","heading-ls-xl":"-0.032rem","heading-ls-lg":"-0.032rem","heading-ls-md":"0rem","heading-ls-sm":"0rem","heading-ls-xs":"0rem","weight-light":"300","weight-regular":"400","weight-semibold":"600","weight-bold":"700","font-family":"Plus Jakarta Sans","body-size-baseline":"1.125rem","body-size-md":"1rem","body-size-sm":"0.875rem","body-size-xs":"0.75rem","body-lh-baseline":"1.75rem","body-lh-md":"1.5rem","body-lh-sm":"1.6rem","body-lh-xs":"1.2rem","body-ls-baseline":"0rem","body-ls-md":"0.014rem","body-ls-sm":"0.012rem","body-ls-xs":"0.012rem","form-label-size":"1rem","form-description-size":"0.875rem","form-label-lh":"1.5rem","form-description-lh":"1.6rem","form-label-ls":"0.014rem","form-description-ls":"0.012rem"},pa:{"heading-size-xxl":"2.5rem","heading-size-xl":"2rem","heading-size-lg":"1.75rem","heading-size-md":"1.5rem","heading-size-sm":"1.25rem","heading-size-xs":"1rem","heading-lh-xxl":"3rem","heading-lh-xl":"2.5rem","heading-lh-lg":"2.25rem","heading-lh-md":"2rem","heading-lh-sm":"2rem","heading-lh-xs":"1.75rem","heading-ls-xxl":"-0.032rem","heading-ls-xl":"-0.032rem","heading-ls-lg":"0rem","heading-ls-md":"0rem","heading-ls-sm":"0rem","heading-ls-xs":"0rem","weight-light":"300","weight-regular":"400","weight-semibold":"600","weight-bold":"700","font-family":"Lato","body-size-baseline":"1rem","body-size-md":"0.875rem","body-size-sm":"0.75rem","body-size-xs":"0.625rem","body-lh-baseline":"1.75rem","body-lh-md":"1.5rem","body-lh-sm":"1.25rem","body-lh-xs":"1.25rem","body-ls-baseline":"0rem","body-ls-md":"0.014rem","body-ls-sm":"0.012rem","body-ls-xs":"0.012rem","form-label-size":"1rem","form-description-size":"0.875rem","form-label-lh":"1.5rem","form-description-lh":"1.6rem","form-label-ls":"0.014rem","form-description-ls":"0.012rem"},a11yplayground:{"heading-size-xxl":"3rem","heading-size-xl":"2.5rem","heading-size-lg":"2rem","heading-size-md":"1.625rem","heading-size-sm":"1.375rem","heading-size-xs":"1.125rem","heading-lh-xxl":"3.5rem","heading-lh-xl":"3rem","heading-lh-lg":"2.5rem","heading-lh-md":"2.25rem","heading-lh-sm":"1.75rem","heading-lh-xs":"1.625rem","heading-ls-xxl":"-0.056rem","heading-ls-xl":"-0.032rem","heading-ls-lg":"-0.032rem","heading-ls-md":"0rem","heading-ls-sm":"0rem","heading-ls-xs":"0rem","weight-light":"300","weight-regular":"400","weight-semibold":"600","weight-bold":"700","font-family":"Atkinson Hyperlegible Next","body-size-baseline":"1.125rem","body-size-md":"1rem","body-size-sm":"0.875rem","body-size-xs":"0.75rem","body-lh-baseline":"1.625rem","body-lh-md":"1.5rem","body-lh-sm":"1.625rem","body-lh-xs":"1.25rem","body-ls-baseline":"0rem","body-ls-md":"0.014rem","body-ls-sm":"0.012rem","body-ls-xs":"0.012rem","form-label-size":"1.125rem","form-description-size":"1rem","form-label-lh":"1.5rem","form-description-lh":"1.625rem","form-label-ls":"0rem","form-description-ls":"0.00875rem"},supportgowhere:{"heading-size-xxl":"3rem","heading-size-xl":"2.5rem","heading-size-lg":"2rem","heading-size-md":"1.625rem","heading-size-sm":"1.375rem","heading-size-xs":"1.125rem","heading-lh-xxl":"3.5rem","heading-lh-xl":"3rem","heading-lh-lg":"2.5rem","heading-lh-md":"2.25rem","heading-lh-sm":"1.75rem","heading-lh-xs":"1.625rem","heading-ls-xxl":"-0.056rem","heading-ls-xl":"-0.032rem","heading-ls-lg":"-0.032rem","heading-ls-md":"0rem","heading-ls-sm":"0rem","heading-ls-xs":"0rem","weight-light":"300","weight-regular":"400","weight-semibold":"600","weight-bold":"700","font-family":"Libre Franklin","body-size-baseline":"1.125rem","body-size-md":"1rem","body-size-sm":"0.875rem","body-size-xs":"0.75rem","body-lh-baseline":"1.625rem","body-lh-md":"1.5rem","body-lh-sm":"1.625rem","body-lh-xs":"1.25rem","body-ls-baseline":"0rem","body-ls-md":"0.014rem","body-ls-sm":"0.012rem","body-ls-xs":"0.012rem","form-label-size":"1rem","form-description-size":"0.875rem","form-label-lh":"1.5rem","form-description-lh":"1.6rem","form-label-ls":"0.014rem","form-description-ls":"0.012rem"}},defaultValue:"default"},$n=e=>t=>{var r;const n=t.theme,o=Hr(wn,null==n?void 0:n.fontScheme);return(null===(r=null==n?void 0:n.overrides)||void 0===r?void 0:r.fontSpec)?Rr(o,e,n.overrides.fontSpec):o[e]},Fn={"heading-size-xxl":$n("heading-size-xxl"),"heading-size-xl":$n("heading-size-xl"),"heading-size-lg":$n("heading-size-lg"),"heading-size-md":$n("heading-size-md"),"heading-size-sm":$n("heading-size-sm"),"heading-size-xs":$n("heading-size-xs"),"heading-lh-xxl":$n("heading-lh-xxl"),"heading-lh-xl":$n("heading-lh-xl"),"heading-lh-lg":$n("heading-lh-lg"),"heading-lh-md":$n("heading-lh-md"),"heading-lh-sm":$n("heading-lh-sm"),"heading-lh-xs":$n("heading-lh-xs"),"heading-ls-xxl":$n("heading-ls-xxl"),"heading-ls-xl":$n("heading-ls-xl"),"heading-ls-lg":$n("heading-ls-lg"),"heading-ls-md":$n("heading-ls-md"),"heading-ls-sm":$n("heading-ls-sm"),"heading-ls-xs":$n("heading-ls-xs"),"weight-light":$n("weight-light"),"weight-regular":$n("weight-regular"),"weight-semibold":$n("weight-semibold"),"weight-bold":$n("weight-bold"),"font-family":$n("font-family"),"body-size-baseline":$n("body-size-baseline"),"body-size-md":$n("body-size-md"),"body-size-sm":$n("body-size-sm"),"body-size-xs":$n("body-size-xs"),"body-lh-baseline":$n("body-lh-baseline"),"body-lh-md":$n("body-lh-md"),"body-lh-sm":$n("body-lh-sm"),"body-lh-xs":$n("body-lh-xs"),"body-ls-baseline":$n("body-ls-baseline"),"body-ls-md":$n("body-ls-md"),"body-ls-sm":$n("body-ls-sm"),"body-ls-xs":$n("body-ls-xs"),"form-label-size":$n("form-label-size"),"form-description-size":$n("form-description-size"),"form-label-lh":$n("form-label-lh"),"form-description-lh":$n("form-description-lh"),"form-label-ls":$n("form-label-ls"),"form-description-ls":$n("form-description-ls")},Cn=(e,t,r,n,o)=>{const{disableLigatures:i}=o||{};return w`
        font-family: ${$n("font-family")};
        font-size: ${$n(e)};
        font-weight: ${$n(t)};
        line-height: ${$n(r)};
        letter-spacing: ${$n(n)};

        font-variant: ${i?"no-common-ligatures":"normal"};
    `},En=(e={})=>({"heading-xxl-light":Cn("heading-size-xxl","weight-light","heading-lh-xxl","heading-ls-xxl",e),"heading-xxl-regular":Cn("heading-size-xxl","weight-regular","heading-lh-xxl","heading-ls-xxl",e),"heading-xxl-semibold":Cn("heading-size-xxl","weight-semibold","heading-lh-xxl","heading-ls-xxl",e),"heading-xxl-bold":Cn("heading-size-xxl","weight-bold","heading-lh-xxl","heading-ls-xxl",e),"heading-xl-light":Cn("heading-size-xl","weight-light","heading-lh-xl","heading-ls-xl",e),"heading-xl-regular":Cn("heading-size-xl","weight-regular","heading-lh-xl","heading-ls-xl",e),"heading-xl-semibold":Cn("heading-size-xl","weight-semibold","heading-lh-xl","heading-ls-xl",e),"heading-xl-bold":Cn("heading-size-xl","weight-bold","heading-lh-xl","heading-ls-xl",e),"heading-lg-light":Cn("heading-size-lg","weight-light","heading-lh-lg","heading-ls-lg",e),"heading-lg-regular":Cn("heading-size-lg","weight-regular","heading-lh-lg","heading-ls-lg",e),"heading-lg-semibold":Cn("heading-size-lg","weight-semibold","heading-lh-lg","heading-ls-lg",e),"heading-lg-bold":Cn("heading-size-lg","weight-bold","heading-lh-lg","heading-ls-lg",e),"heading-md-light":Cn("heading-size-md","weight-light","heading-lh-md","heading-ls-md",e),"heading-md-regular":Cn("heading-size-md","weight-regular","heading-lh-md","heading-ls-md",e),"heading-md-semibold":Cn("heading-size-md","weight-semibold","heading-lh-md","heading-ls-md",e),"heading-md-bold":Cn("heading-size-md","weight-bold","heading-lh-md","heading-ls-md",e),"heading-sm-light":Cn("heading-size-sm","weight-light","heading-lh-sm","heading-ls-sm",e),"heading-sm-regular":Cn("heading-size-sm","weight-regular","heading-lh-sm","heading-ls-sm",e),"heading-sm-semibold":Cn("heading-size-sm","weight-semibold","heading-lh-sm","heading-ls-sm",e),"heading-sm-bold":Cn("heading-size-sm","weight-bold","heading-lh-sm","heading-ls-sm",e),"heading-xs-light":Cn("heading-size-xs","weight-light","heading-lh-xs","heading-ls-xs",e),"heading-xs-regular":Cn("heading-size-xs","weight-regular","heading-lh-xs","heading-ls-xs",e),"heading-xs-semibold":Cn("heading-size-xs","weight-semibold","heading-lh-xs","heading-ls-xs",e),"heading-xs-bold":Cn("heading-size-xs","weight-bold","heading-lh-xs","heading-ls-xs",e),"body-baseline-light":Cn("body-size-baseline","weight-light","body-lh-baseline","body-ls-baseline",e),"body-baseline-regular":Cn("body-size-baseline","weight-regular","body-lh-baseline","body-ls-baseline",e),"body-baseline-semibold":Cn("body-size-baseline","weight-semibold","body-lh-baseline","body-ls-baseline",e),"body-baseline-bold":Cn("body-size-baseline","weight-bold","body-lh-baseline","body-ls-baseline",e),"body-md-light":Cn("body-size-md","weight-light","body-lh-md","body-ls-md",e),"body-md-regular":Cn("body-size-md","weight-regular","body-lh-md","body-ls-md",e),"body-md-semibold":Cn("body-size-md","weight-semibold","body-lh-md","body-ls-md",e),"body-md-bold":Cn("body-size-md","weight-bold","body-lh-md","body-ls-md",e),"body-sm-light":Cn("body-size-sm","weight-light","body-lh-sm","body-ls-sm",e),"body-sm-regular":Cn("body-size-sm","weight-regular","body-lh-sm","body-ls-sm",e),"body-sm-semibold":Cn("body-size-sm","weight-semibold","body-lh-sm","body-ls-sm",e),"body-sm-bold":Cn("body-size-sm","weight-bold","body-lh-sm","body-ls-sm",e),"body-xs-light":Cn("body-size-xs","weight-light","body-lh-xs","body-ls-xs",e),"body-xs-regular":Cn("body-size-xs","weight-regular","body-lh-xs","body-ls-xs",e),"body-xs-semibold":Cn("body-size-xs","weight-semibold","body-lh-xs","body-ls-xs",e),"body-xs-bold":Cn("body-size-xs","weight-bold","body-lh-xs","body-ls-xs",e),"form-label":Cn("form-label-size","weight-semibold","form-label-lh","form-label-ls",e),"form-description":Cn("form-description-size","weight-regular","form-description-lh","form-description-ls",e)}),Sn=En({disableLigatures:!0}),kn={collections:{default:En(),bookingsg:Sn,pa:En({disableLigatures:!0}),a11yplayground:En({disableLigatures:!0}),supportgowhere:En({disableLigatures:!0})},defaultValue:"default"},Dn=e=>t=>{var r;const n=t.theme,o=Hr(kn,null==n?void 0:n.fontScheme),i=(null===(r=null==n?void 0:n.overrides)||void 0===r?void 0:r.font)?Rr(o,e,n.overrides.font):o[e];return"function"==typeof i?i(t):i},In={"heading-xxl-light":Dn("heading-xxl-light"),"heading-xxl-regular":Dn("heading-xxl-regular"),"heading-xxl-semibold":Dn("heading-xxl-semibold"),"heading-xxl-bold":Dn("heading-xxl-bold"),"heading-xl-light":Dn("heading-xl-light"),"heading-xl-regular":Dn("heading-xl-regular"),"heading-xl-semibold":Dn("heading-xl-semibold"),"heading-xl-bold":Dn("heading-xl-bold"),"heading-lg-light":Dn("heading-lg-light"),"heading-lg-regular":Dn("heading-lg-regular"),"heading-lg-semibold":Dn("heading-lg-semibold"),"heading-lg-bold":Dn("heading-lg-bold"),"heading-md-light":Dn("heading-md-light"),"heading-md-regular":Dn("heading-md-regular"),"heading-md-semibold":Dn("heading-md-semibold"),"heading-md-bold":Dn("heading-md-bold"),"heading-sm-light":Dn("heading-sm-light"),"heading-sm-regular":Dn("heading-sm-regular"),"heading-sm-semibold":Dn("heading-sm-semibold"),"heading-sm-bold":Dn("heading-sm-bold"),"heading-xs-light":Dn("heading-xs-light"),"heading-xs-regular":Dn("heading-xs-regular"),"heading-xs-semibold":Dn("heading-xs-semibold"),"heading-xs-bold":Dn("heading-xs-bold"),"body-baseline-light":Dn("body-baseline-light"),"body-baseline-regular":Dn("body-baseline-regular"),"body-baseline-semibold":Dn("body-baseline-semibold"),"body-baseline-bold":Dn("body-baseline-bold"),"body-md-light":Dn("body-md-light"),"body-md-regular":Dn("body-md-regular"),"body-md-semibold":Dn("body-md-semibold"),"body-md-bold":Dn("body-md-bold"),"body-sm-light":Dn("body-sm-light"),"body-sm-regular":Dn("body-sm-regular"),"body-sm-semibold":Dn("body-sm-semibold"),"body-sm-bold":Dn("body-sm-bold"),"body-xs-light":Dn("body-xs-light"),"body-xs-regular":Dn("body-xs-regular"),"body-xs-semibold":Dn("body-xs-semibold"),"body-xs-bold":Dn("body-xs-bold"),"form-label":Dn("form-label"),"form-description":Dn("form-description")},Tn={collections:{default:{"duration-150":"150ms","duration-250":"250ms","duration-350":"350ms","duration-500":"500ms","duration-800":"800ms","duration-1000":"1000ms","ease-default":"cubic-bezier(0.45, 0.05, 0.55, 0.95)","ease-standard":"cubic-bezier(0.86, 0, 0.07, 1)","ease-entrance":"cubic-bezier(0.18, 0.13, 0, 1)","ease-exit":"cubic-bezier(1, 0, 0.8, 0.85)"}},defaultValue:"default"},Bn=e=>t=>{var r;const n=t.theme,o=Hr(Tn,null==n?void 0:n.motionScheme);return(null===(r=null==n?void 0:n.overrides)||void 0===r?void 0:r.motion)?Rr(o,e,n.overrides.motion):o[e]},An={"duration-150":Bn("duration-150"),"duration-250":Bn("duration-250"),"duration-350":Bn("duration-350"),"duration-500":Bn("duration-500"),"duration-800":Bn("duration-800"),"duration-1000":Bn("duration-1000"),"ease-default":Bn("ease-default"),"ease-standard":Bn("ease-standard"),"ease-entrance":Bn("ease-entrance"),"ease-exit":Bn("ease-exit")},zn={collections:{default:{none:0,xs:2,sm:4,md:8,lg:12,full:9999}},defaultValue:"default"},On=e=>t=>{var r;const n=t.theme,o=Hr(zn,null==n?void 0:n.radiusScheme);return(null===(r=null==n?void 0:n.overrides)||void 0===r?void 0:r.radius)?`${Rr(o,e,n.overrides.radius)}px`:`${o[e]}px`},Mn={none:On("none"),xs:On("xs"),sm:On("sm"),md:On("md"),lg:On("lg"),full:On("full")},_n={collections:{default:{"spacing-0":0,"spacing-4":4,"spacing-8":8,"spacing-12":12,"spacing-16":16,"spacing-20":20,"spacing-24":24,"spacing-32":32,"spacing-40":40,"spacing-48":48,"spacing-64":64,"spacing-72":72,"layout-xs":8,"layout-sm":16,"layout-md":24,"layout-lg":32,"layout-xl":48,"layout-xxl":64,"layout-xxxl":128}},defaultValue:"default"},Rn=e=>t=>{var r;const n=t.theme,o=Hr(_n,null==n?void 0:n.spacingScheme);return(null===(r=null==n?void 0:n.overrides)||void 0===r?void 0:r.spacing)?`${Rr(o,e,n.overrides.spacing)}px`:`${o[e]}px`},Hn={"spacing-0":Rn("spacing-0"),"spacing-4":Rn("spacing-4"),"spacing-8":Rn("spacing-8"),"spacing-12":Rn("spacing-12"),"spacing-16":Rn("spacing-16"),"spacing-20":Rn("spacing-20"),"spacing-24":Rn("spacing-24"),"spacing-32":Rn("spacing-32"),"spacing-40":Rn("spacing-40"),"spacing-48":Rn("spacing-48"),"spacing-64":Rn("spacing-64"),"spacing-72":Rn("spacing-72"),"layout-xs":Rn("layout-xs"),"layout-sm":Rn("layout-sm"),"layout-md":Rn("layout-md"),"layout-lg":Rn("layout-lg"),"layout-xl":Rn("layout-xl"),"layout-xxl":Rn("layout-xxl"),"layout-xxxl":Rn("layout-xxxl")},jn=(e,t)=>Object.assign(Object.assign({},e),{colourMode:t}),Ln=Object.assign(Object.assign({},un),{Primitive:tn}),Pn=Object.assign(Object.assign({},In),{Spec:Fn}),Wn=An,Nn=Object.assign(Object.assign({},Pr),{Util:pn}),Vn=Hn,Yn=Mn,Un=yn,qn=xn,Gn={colourScheme:"lifesg",fontScheme:"default",motionScheme:"default",borderScheme:"default",spacingScheme:"default",radiusScheme:"default",breakpointScheme:"default",resourceScheme:"lifesg",_v2:{colorScheme:"base",textStyleScheme:"base",designTokenScheme:"base",resourceScheme:"base"}},Zn={colourScheme:"bookingsg",fontScheme:"bookingsg",motionScheme:"default",borderScheme:"default",spacingScheme:"default",radiusScheme:"default",breakpointScheme:"default",resourceScheme:"bookingsg",_v2:{colorScheme:"bookingsg",textStyleScheme:"base",designTokenScheme:"base",resourceScheme:"bookingsg"}},Qn={colourScheme:"ccube",fontScheme:"default",motionScheme:"default",borderScheme:"default",spacingScheme:"default",radiusScheme:"default",breakpointScheme:"default",resourceScheme:"ccube",_v2:{colorScheme:"ccube",textStyleScheme:"base",designTokenScheme:"base",resourceScheme:"ccube"}},Xn={colourScheme:"mylegacy",fontScheme:"default",motionScheme:"default",borderScheme:"default",spacingScheme:"default",radiusScheme:"default",breakpointScheme:"default",resourceScheme:"mylegacy",_v2:{colorScheme:"mylegacy",textStyleScheme:"base",designTokenScheme:"base",resourceScheme:"mylegacy"}},Kn={colourScheme:"rbs",fontScheme:"default",motionScheme:"default",borderScheme:"default",spacingScheme:"default",radiusScheme:"default",breakpointScheme:"default",resourceScheme:"rbs",_v2:{colorScheme:"rbs",textStyleScheme:"base",designTokenScheme:"rbs",resourceScheme:"rbs"}},Jn={colourScheme:"oneservice",fontScheme:"default",motionScheme:"default",borderScheme:"default",spacingScheme:"default",radiusScheme:"default",breakpointScheme:"default",resourceScheme:"oneservice"},eo={colourScheme:"pa",fontScheme:"pa",motionScheme:"default",borderScheme:"default",spacingScheme:"default",radiusScheme:"default",breakpointScheme:"default",resourceScheme:"pa",componentScheme:"pa"},to={colourScheme:"a11yplayground",fontScheme:"a11yplayground",motionScheme:"default",borderScheme:"default",spacingScheme:"default",radiusScheme:"default",breakpointScheme:"default",resourceScheme:"a11yplayground",componentScheme:"a11yplayground"},ro={colourScheme:"supportgowhere",fontScheme:"supportgowhere",motionScheme:"default",borderScheme:"default",spacingScheme:"default",radiusScheme:"default",breakpointScheme:"default",resourceScheme:"supportgowhere",componentScheme:"default"};Object.assign(Object.assign({},Gn),{light:jn(Gn,"light"),dark:jn(Gn,"dark")}),Object.assign(Object.assign({},Zn),{light:jn(Zn,"light"),dark:jn(Zn,"dark")}),Object.assign(Object.assign({},Qn),{light:jn(Qn,"light"),dark:jn(Qn,"dark")}),Object.assign(Object.assign({},Xn),{light:jn(Xn,"light"),dark:jn(Xn,"dark")}),Object.assign(Object.assign({},Kn),{light:jn(Kn,"light"),dark:jn(Kn,"dark")}),Object.assign(Object.assign({},Jn),{light:jn(Jn,"light"),dark:jn(Jn,"dark")}),Object.assign(Object.assign({},eo),{light:jn(eo,"light"),dark:jn(eo,"dark")}),Object.assign(Object.assign({},to),{light:jn(to,"light"),dark:jn(to,"dark")}),Object.assign(Object.assign({},ro),{light:jn(ro,"light"),dark:jn(ro,"dark")});const no=x.div`
    position: relative;
    height: 100%;
    display: flex;
    flex: 1;

    ${e=>{if(e.$wrap)return w`
                /* Parent container need to provide space */
                flex-wrap: wrap;

                [data-id="range-container-elem1-container"],
                [data-id="range-container-elem2-container"] {
                    // 100% - Icon size - 2padding
                    max-width: calc(
                        100% - ${Pn.Spec["body-size-baseline"]} -
                            ${Vn["spacing-16"]}
                    );
                    flex: unset;
                }

                [data-id="range-container-elem2-container"] {
                    margin-top: ${Vn["spacing-8"]};
                }
            `}}
`,oo=x.div`
    width: 100%; // Force next flex item to break to next line
`,io=x.div`
    display: flex;
    flex: 1;
    align-items: center;
`,so=x(y)`
    color: ${Ln.icon};
    width: ${Pn.Spec["body-size-baseline"]};
    height: ${Pn.Spec["body-size-baseline"]};
    flex-shrink: 0;
    margin: 0 ${Vn["spacing-8"]};
    align-self: center;
`,ao=x.div`
    position: absolute;
    background: ${e=>e.$error?Ln["border-error-focus-strong"]:Ln["border-focus-strong"]};
    height: 2px;
    // half - half padding - half icon width
    width: calc(
        50% - ${Vn["spacing-8"]} - (${Pn.Spec["body-size-baseline"]} / 2)
    );
    transition: left ${Wn["duration-350"]} ${Wn["ease-standard"]},
        opacity ${Wn["duration-350"]} ${Wn["ease-standard"]};
    left: 0;
    bottom: 0;

    ${e=>{switch(e.$position){case"start":return w`
                    opacity: 1;
                `;case"end":return w`
                    left: calc(50% + ${Vn["spacing-16"]});
                    opacity: 1;
                `;case"none":return w`
                    opacity: 0;
                `}}}

    ${e=>{if(e.$wrap)return w`
                display: none;
            `}}
`,lo=({children:r,currentActive:n,error:o,className:i,wrap:s})=>{const[a,l]=r;return e(no,{className:i,$wrap:s,children:[t(io,{"data-id":"range-container-elem1-container",children:a}),t(so,{}),s&&t(oo,{}),t(io,{"data-id":"range-container-elem2-container",children:l}),t(ao,{"data-id":"range-container-indicator",$position:n,$error:o,$wrap:s})]})},co=w`
    outline-offset: -1px;
    outline: ${Nn["width-020"]} ${Nn.solid} ${Ln["border-focus"]};
`,uo=w`
    outline-color: ${Ln["border-focus"]};
`,ho=w`
    outline-color: ${Ln["border-disabled"]};
`,go=w`
    outline-color: ${Ln["border-error-focus"]};
`,mo=x.div`
    border: ${Nn["width-010"]} ${Nn.solid} ${Ln.border};
    border-radius: ${Yn.sm};
    background: ${Ln.bg};

    :focus-within {
        ${co}
    }
    ${e=>e.$focused&&co}

    ${e=>e.$readOnly?w`
                border-color: transparent;
                padding: 0;
                background: transparent !important;

                :focus-within {
                    ${uo}
                }
                ${e.$focused&&uo}
            `:e.$disabled?w`
                background: ${Ln["bg-disabled"]};
                cursor: not-allowed;

                :focus-within {
                    ${ho}
                }
                ${e.$focused&&ho}
            `:e.$error?w`
                border-color: ${Ln["border-error"]};

                :focus-within {
                    ${go}
                }
                ${e.$focused&&go}
            `:void 0}
`,po=x(mo)`
    display: flex;
    align-items: center;
    position: relative;
    height: max-content;
    width: 100%;
    padding: 0 ${Vn["spacing-16"]};
    flex-direction: ${e=>"right"===e.$position?"row-reverse":"row"};
`,fo=x.input`
    ${e=>"small"===e.$variant?Pn["body-md-regular"]:Pn["body-baseline-regular"]}
    color: ${Ln.text};
    display: block;
    background: transparent;
    border: none;
    outline: none;
    box-shadow: none;
    padding: 0;
    margin: 0;

    :disabled {
        color: ${Ln["text-subtler"]};

        :hover {
            cursor: not-allowed;
        }
    }

    ::placeholder,
    ::-webkit-input-placeholder {
        color: ${Ln["text-subtler"]};
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
`,bo=x.button`
    background: transparent;
    border: none;
    outline: none;

    :focus,
    :active {
        outline: none;
    }

    :focus-visible {
        outline: ${Nn["width-010"]} ${Nn.solid}
            ${Ln["border-focus"]};
        border-radius: ${Yn.sm};
    }
`,yo=x.div`
    position: relative;
`,vo=x(po)`
    height: 3rem;
    gap: ${Vn["spacing-8"]};
`,xo=x(fo)`
    display: block;
    width: 100%;
    flex: 1;
`;var wo={exports:{}};wo.exports=function(){var e=1e3,t=6e4,r=36e5,n="millisecond",o="second",i="minute",s="hour",a="day",l="week",d="month",c="quarter",u="year",h="date",g="Invalid Date",m=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,p=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,f={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(e){var t=["th","st","nd","rd"],r=e%100;return"["+e+(t[(r-20)%10]||t[r]||t[0])+"]"}},b=function(e,t,r){var n=String(e);return!n||n.length>=t?e:""+Array(t+1-n.length).join(r)+e},y={s:b,z:function(e){var t=-e.utcOffset(),r=Math.abs(t),n=Math.floor(r/60),o=r%60;return(t<=0?"+":"-")+b(n,2,"0")+":"+b(o,2,"0")},m:function e(t,r){if(t.date()<r.date())return-e(r,t);var n=12*(r.year()-t.year())+(r.month()-t.month()),o=t.clone().add(n,d),i=r-o<0,s=t.clone().add(n+(i?-1:1),d);return+(-(n+(r-o)/(i?o-s:s-o))||0)},a:function(e){return e<0?Math.ceil(e)||0:Math.floor(e)},p:function(e){return{M:d,y:u,w:l,d:a,D:h,h:s,m:i,s:o,ms:n,Q:c}[e]||String(e||"").toLowerCase().replace(/s$/,"")},u:function(e){return void 0===e}},v="en",x={};x[v]=f;var w="$isDayjsObject",$=function(e){return e instanceof S||!(!e||!e[w])},F=function e(t,r,n){var o;if(!t)return v;if("string"==typeof t){var i=t.toLowerCase();x[i]&&(o=i),r&&(x[i]=r,o=i);var s=t.split("-");if(!o&&s.length>1)return e(s[0])}else{var a=t.name;x[a]=t,o=a}return!n&&o&&(v=o),o||!n&&v},C=function(e,t){if($(e))return e.clone();var r="object"==typeof t?t:{};return r.date=e,r.args=arguments,new S(r)},E=y;E.l=F,E.i=$,E.w=function(e,t){return C(e,{locale:t.$L,utc:t.$u,x:t.$x,$offset:t.$offset})};var S=function(){function f(e){this.$L=F(e.locale,null,!0),this.parse(e),this.$x=this.$x||e.x||{},this[w]=!0}var b=f.prototype;return b.parse=function(e){this.$d=function(e){var t=e.date,r=e.utc;if(null===t)return new Date(NaN);if(E.u(t))return new Date;if(t instanceof Date)return new Date(t);if("string"==typeof t&&!/Z$/i.test(t)){var n=t.match(m);if(n){var o=n[2]-1||0,i=(n[7]||"0").substring(0,3);return r?new Date(Date.UTC(n[1],o,n[3]||1,n[4]||0,n[5]||0,n[6]||0,i)):new Date(n[1],o,n[3]||1,n[4]||0,n[5]||0,n[6]||0,i)}}return new Date(t)}(e),this.init()},b.init=function(){var e=this.$d;this.$y=e.getFullYear(),this.$M=e.getMonth(),this.$D=e.getDate(),this.$W=e.getDay(),this.$H=e.getHours(),this.$m=e.getMinutes(),this.$s=e.getSeconds(),this.$ms=e.getMilliseconds()},b.$utils=function(){return E},b.isValid=function(){return!(this.$d.toString()===g)},b.isSame=function(e,t){var r=C(e);return this.startOf(t)<=r&&r<=this.endOf(t)},b.isAfter=function(e,t){return C(e)<this.startOf(t)},b.isBefore=function(e,t){return this.endOf(t)<C(e)},b.$g=function(e,t,r){return E.u(e)?this[t]:this.set(r,e)},b.unix=function(){return Math.floor(this.valueOf()/1e3)},b.valueOf=function(){return this.$d.getTime()},b.startOf=function(e,t){var r=this,n=!!E.u(t)||t,c=E.p(e),g=function(e,t){var o=E.w(r.$u?Date.UTC(r.$y,t,e):new Date(r.$y,t,e),r);return n?o:o.endOf(a)},m=function(e,t){return E.w(r.toDate()[e].apply(r.toDate("s"),(n?[0,0,0,0]:[23,59,59,999]).slice(t)),r)},p=this.$W,f=this.$M,b=this.$D,y="set"+(this.$u?"UTC":"");switch(c){case u:return n?g(1,0):g(31,11);case d:return n?g(1,f):g(0,f+1);case l:var v=this.$locale().weekStart||0,x=(p<v?p+7:p)-v;return g(n?b-x:b+(6-x),f);case a:case h:return m(y+"Hours",0);case s:return m(y+"Minutes",1);case i:return m(y+"Seconds",2);case o:return m(y+"Milliseconds",3);default:return this.clone()}},b.endOf=function(e){return this.startOf(e,!1)},b.$set=function(e,t){var r,l=E.p(e),c="set"+(this.$u?"UTC":""),g=(r={},r[a]=c+"Date",r[h]=c+"Date",r[d]=c+"Month",r[u]=c+"FullYear",r[s]=c+"Hours",r[i]=c+"Minutes",r[o]=c+"Seconds",r[n]=c+"Milliseconds",r)[l],m=l===a?this.$D+(t-this.$W):t;if(l===d||l===u){var p=this.clone().set(h,1);p.$d[g](m),p.init(),this.$d=p.set(h,Math.min(this.$D,p.daysInMonth())).$d}else g&&this.$d[g](m);return this.init(),this},b.set=function(e,t){return this.clone().$set(e,t)},b.get=function(e){return this[E.p(e)]()},b.add=function(n,c){var h,g=this;n=Number(n);var m=E.p(c),p=function(e){var t=C(g);return E.w(t.date(t.date()+Math.round(e*n)),g)};if(m===d)return this.set(d,this.$M+n);if(m===u)return this.set(u,this.$y+n);if(m===a)return p(1);if(m===l)return p(7);var f=(h={},h[i]=t,h[s]=r,h[o]=e,h)[m]||1,b=this.$d.getTime()+n*f;return E.w(b,this)},b.subtract=function(e,t){return this.add(-1*e,t)},b.format=function(e){var t=this,r=this.$locale();if(!this.isValid())return r.invalidDate||g;var n=e||"YYYY-MM-DDTHH:mm:ssZ",o=E.z(this),i=this.$H,s=this.$m,a=this.$M,l=r.weekdays,d=r.months,c=r.meridiem,u=function(e,r,o,i){return e&&(e[r]||e(t,n))||o[r].slice(0,i)},h=function(e){return E.s(i%12||12,e,"0")},m=c||function(e,t,r){var n=e<12?"AM":"PM";return r?n.toLowerCase():n};return n.replace(p,(function(e,n){return n||function(e){switch(e){case"YY":return String(t.$y).slice(-2);case"YYYY":return E.s(t.$y,4,"0");case"M":return a+1;case"MM":return E.s(a+1,2,"0");case"MMM":return u(r.monthsShort,a,d,3);case"MMMM":return u(d,a);case"D":return t.$D;case"DD":return E.s(t.$D,2,"0");case"d":return String(t.$W);case"dd":return u(r.weekdaysMin,t.$W,l,2);case"ddd":return u(r.weekdaysShort,t.$W,l,3);case"dddd":return l[t.$W];case"H":return String(i);case"HH":return E.s(i,2,"0");case"h":return h(1);case"hh":return h(2);case"a":return m(i,s,!0);case"A":return m(i,s,!1);case"m":return String(s);case"mm":return E.s(s,2,"0");case"s":return String(t.$s);case"ss":return E.s(t.$s,2,"0");case"SSS":return E.s(t.$ms,3,"0");case"Z":return o}return null}(e)||o.replace(":","")}))},b.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},b.diff=function(n,h,g){var m,p=this,f=E.p(h),b=C(n),y=(b.utcOffset()-this.utcOffset())*t,v=this-b,x=function(){return E.m(p,b)};switch(f){case u:m=x()/12;break;case d:m=x();break;case c:m=x()/3;break;case l:m=(v-y)/6048e5;break;case a:m=(v-y)/864e5;break;case s:m=v/r;break;case i:m=v/t;break;case o:m=v/e;break;default:m=v}return g?m:E.a(m)},b.daysInMonth=function(){return this.endOf(d).$D},b.$locale=function(){return x[this.$L]},b.locale=function(e,t){if(!e)return this.$L;var r=this.clone(),n=F(e,t,!0);return n&&(r.$L=n),r},b.clone=function(){return E.w(this.$d,this)},b.toDate=function(){return new Date(this.valueOf())},b.toJSON=function(){return this.isValid()?this.toISOString():null},b.toISOString=function(){return this.$d.toISOString()},b.toString=function(){return this.$d.toUTCString()},f}(),k=S.prototype;return C.prototype=k,[["$ms",n],["$s",o],["$m",i],["$H",s],["$W",a],["$M",d],["$y",u],["$D",h]].forEach((function(e){k[e[1]]=function(t){return this.$g(t,e[0],e[1])}})),C.extend=function(e,t){return e.$i||(e(t,S,C),e.$i=!0),C},C.locale=F,C.isDayjs=$,C.unix=function(e){return C(1e3*e)},C.en=x[v],C.Ls=x,C.p={},C}();var $o,Fo,Co,Eo=ae(wo.exports);!function(e){e.transformWithSpaces=(e,t)=>{const r="(.{"+t+"})";return e.replace(/[^\dA-Z]/gi,"").replace(new RegExp(r,"g"),"$1 ").trim()},e.padValue=(e,t)=>{if("0"===e)return t?e:e.padStart(2,"0");if(""===e)return e;return parseInt(e).toString().padStart(2,"0")},e.shouldTruncateToTwoLines=(e,t)=>{const r=Math.floor(t/9);return e.length>=2*r||1===e.split(" ").length&&e.length>r},e.truncateOneLine=(e,t,r,n,o=8)=>{let i=0;t>r&&(i=Math.floor((t-r)/o));const s=n+i;if(s<e.length){const t=Math.floor(s/2);return e.substring(0,t)+" ... "+e.substring(e.length-t,e.length)}return e},e.truncateTwoLines=(e,t,r,n=1.2)=>{const o=Math.floor(2*t/(.6*r))*(2/n);if(e.length<=o)return e;const i=Math.floor(.6*o),s=Math.floor(.2*o);return`${e.substring(0,i)}...${e.substring(e.length-s)}`},e.getTextWidth=(t,r)=>{if("undefined"==typeof document)return 0;const n=(e.getTextWidth.canvas||(e.getTextWidth.canvas=document.createElement("canvas"))).getContext("2d");n.font=r;return n.measureText(t).width},e.maskValue=(e,r)=>{if(!e)return e;const{maskRange:n,unmaskRange:o,maskChar:i="•",maskRegex:s,maskTransformer:a}=r;if(a)return a(e);if(s)return e.replace(s,i);if(n){const{startIndex:r,endIndex:o}=t(n[0],n[1]);return e.substring(0,r)+i.repeat(e.substring(r,o+1).length)+e.substring(o+1)}if(o){const{startIndex:r,endIndex:n}=t(o[0],o[1]);return i.repeat(e.substring(0,r).length)+e.substring(r,n+1)+i.repeat(e.substring(n+1).length)}return e};const t=(e,t)=>e<t?{startIndex:e,endIndex:t}:{startIndex:t,endIndex:e},r=new Intl.PluralRules("en",{type:"ordinal"}),n=new Map([["one","st"],["two","nd"],["few","rd"],["other","th"]]);e.formatOrdinal=e=>{const t=r.select(e);return`${e}${n.get(t)}`}}($o||($o={})),function(e){e.AM="AM",e.PM="PM"}(Fo||(Fo={})),function(e){e.roundToNearestInterval=(e,t,r)=>{const[n,o]=e.split(":"),i=parseInt(n,10),s=parseInt(o,10);if(isNaN(i)||isNaN(s)||s<0||s>=60)throw new Error("Invalid time format");const a=60*i+s,l=a%t,d=0===l?a:r?a+(t-l):a-l,c=d%60;return`${Math.floor(d/60).toString().padStart(2,"0")}:${c.toString().padStart(2,"0")}`},e.generateHourlyIntervals=(e,t,r="ha")=>{const n="HH:mm";let o=Eo(e,n),i=Eo(t,n);o.isSame(i)&&(i=i.add(1,"day"));const s=[];for(;o.isBefore(i);)s.push(o.format(r)),o=o.add(1,"hour");return s},e.getTimeValues=(e,t)=>{const r={hour:"",minute:"",period:Fo.AM};if(!t)return r;try{if("24hr"===e){const n=Do(t,e);r.minute=$o.padValue(n.minute);const o=parseInt(n.hour);0===Math.floor(o/12)?(r.period=Fo.AM,r.hour=0===o?"12":$o.padValue(o.toString())):(r.period=Fo.PM,r.hour=12===o?o.toString():$o.padValue((o-12).toString()))}else{const{hour:n,minute:o,period:i=""}=Do(t,e);r.hour=$o.padValue(n),r.minute=$o.padValue(o),r.period="am"===i.toLowerCase()?Fo.AM:Fo.PM}return r}catch(e){return r}},e.updateMinutes=(e,t)=>{const r=parseInt(e);if(isNaN(r))return"add"===t?$o.padValue("0"):"55";const n=Math.floor(r/5),o=(("add"===t?n+1:r%5==0?n-1:n)%12+12)%12;return $o.padValue((5*o).toString())},e.updateHours=(e,t)=>{const r=parseInt(e);if(isNaN(r))return"add"===t?$o.padValue("1"):"12";const n="add"===t?r+1:r-1;return n<=12&&n>0?$o.padValue(n.toString()):13===n?$o.padValue("1"):"12"},e.convertTo24HourFormat=e=>{const t=parseInt(e.hour);let r;return r=e.period===Fo.PM?12===t?t.toString():(t+12).toString():12===t?"00":e.hour,`${r}:${e.minute}`},e.convertHourTo12HourFormat=e=>{const t=parseInt(e),r=t%12==0?12..toString():(t%12).toString();return $o.padValue(r)},e.formatDisplayValue=(e,t)=>{try{const{hour:r,minute:n,period:o=""}=Do(e,t),i=$o.padValue(r);let s=`${i}:${$o.padValue(n)}`;return"12hr"===t?(s+=o.toLowerCase(),s):s}catch(e){return""}},e.toMinutesSeconds=e=>({minutes:Math.floor(e/60),seconds:e%60}),e.to24Hour=e=>{if((null==e?void 0:e.includes("am"))||(null==e?void 0:e.includes("pm"))){const[t,r]=e.split(/(am|pm)/i),[n,o]=t.split(":").map(Number);let i=n;return"pm"===r&&i<12&&(i+=12),"am"===r&&12===i&&(i=0),Io(i,o)}return e},e.generateTimings=(t,r="12hr",n,o)=>{const i=[];let s=0,a=1440-t;for(n&&(s=e.timeToMinutes(n)),o&&(a=e.timeToMinutes(o));s<=a;){let e=Math.floor(s/60);const n=s%60;if("12hr"===r){const t=e>=12?"pm":"am";e%=12,e=e||12;const r=Io(e,n,t);i.push(r)}else{const t=Io(e,n);i.push(t)}s+=t}return i},e.parseInput=(e,t="12hr")=>{if(""===e||void 0===e)return e;const r=e.trim().toLowerCase(),n=/^(?:(\d{1,2})([:.])?(\d{2})?)?(a|p|am|pm)?$/.exec(r);if(!n)return;let o=parseInt(n[1]||"0",10);const i=parseInt(n[3]||"0",10);let s=n[4];if(void 0===n[1]||o>24||i>59)return;if("a"===s?s="am":"p"===s&&(s="pm"),"24hr"===t)return"pm"===s&&o<12?o+=12:("am"===s&&12===o||24===o)&&(o=0),Io(o,i);s?0===o||24===o?(s="am",o=12):o>12&&(s="pm",o-=12):(s=0===o||24===o||o>6&&o<12?"am":"pm",o=o%12||12);return Io(o,i,s)},e.findClosestFlooredTime=(t,r)=>{if(!t)return t;const n=e.timeToMinutes(t);let o="",i=1/0;for(const t of r){const r=e.timeToMinutes(t)-n;if(r<=0&&Math.abs(r)<i)i=Math.abs(r),o=t;else if(r>0)break}return o},e.timeToMinutes=e=>{const[t,r]=e.toLowerCase().split(/(am|pm)/),[n,o]=t.split(":").map(Number);let i=n;return"pm"===r&&12!==i&&(i+=12),"am"===r&&12===i&&(i=0),60*i+o}}(Co||(Co={}));const So=(e,t)=>{const r=parseInt(e);return"24hr"===t?r>=0&&r<=23:r>=1&&r<=12},ko=e=>{const t=parseInt(e);return t>=0&&t<=59},Do=(e,t)=>{const r=e?e.split(":"):[],n=new Error("Invalid format");if("12hr"===t){if(2!==r.length||4!==r[1].length)throw n;const e=r[1].substring(0,2),i=r[1].substring(2);if(!So(r[0],t)||!ko(e)||"am"!==(o=i).toLowerCase()&&"pm"!==o.toLowerCase())throw n;return{hour:r[0],minute:e,period:r[1].substring(2)}}if(2!==r.length)throw n;if(!So(r[0],t)||!ko(r[1]))throw n;return{hour:r[0],minute:r[1]};var o},Io=(e,t,r)=>r?`${e}:${t.toString().padStart(2,"0")}${r}`:`${e.toString().padStart(2,"0")}:${t.toString().padStart(2,"0")}`;var To=function(e,t){return To=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])},To(e,t)};var Bo=function(){return Bo=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var o in t=arguments[r])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e},Bo.apply(this,arguments)};var Ao="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};var zo=function(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)},Oo="object"==typeof Ao&&Ao&&Ao.Object===Object&&Ao,Mo="object"==typeof self&&self&&self.Object===Object&&self,_o=Oo||Mo||Function("return this")(),Ro=_o,Ho=function(){return Ro.Date.now()},jo=/\s/;var Lo=function(e){for(var t=e.length;t--&&jo.test(e.charAt(t)););return t},Po=/^\s+/;var Wo=function(e){return e?e.slice(0,Lo(e)+1).replace(Po,""):e},No=_o.Symbol,Vo=No,Yo=Object.prototype,Uo=Yo.hasOwnProperty,qo=Yo.toString,Go=Vo?Vo.toStringTag:void 0;var Zo=function(e){var t=Uo.call(e,Go),r=e[Go];try{e[Go]=void 0;var n=!0}catch(e){}var o=qo.call(e);return n&&(t?e[Go]=r:delete e[Go]),o},Qo=Object.prototype.toString;var Xo=Zo,Ko=function(e){return Qo.call(e)},Jo=No?No.toStringTag:void 0;var ei=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":Jo&&Jo in Object(e)?Xo(e):Ko(e)},ti=function(e){return null!=e&&"object"==typeof e};var ri=Wo,ni=zo,oi=function(e){return"symbol"==typeof e||ti(e)&&"[object Symbol]"==ei(e)},ii=/^[-+]0x[0-9a-f]+$/i,si=/^0b[01]+$/i,ai=/^0o[0-7]+$/i,li=parseInt;var di=zo,ci=Ho,ui=function(e){if("number"==typeof e)return e;if(oi(e))return NaN;if(ni(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=ni(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=ri(e);var r=si.test(e);return r||ai.test(e)?li(e.slice(2),r?2:8):ii.test(e)?NaN:+e},hi=Math.max,gi=Math.min;var mi=function(e,t,r){var n,o,i,s,a,l,d=0,c=!1,u=!1,h=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function g(t){var r=n,i=o;return n=o=void 0,d=t,s=e.apply(i,r)}function m(e){var r=e-l;return void 0===l||r>=t||r<0||u&&e-d>=i}function p(){var e=ci();if(m(e))return f(e);a=setTimeout(p,function(e){var r=t-(e-l);return u?gi(r,i-(e-d)):r}(e))}function f(e){return a=void 0,h&&n?g(e):(n=o=void 0,s)}function b(){var e=ci(),r=m(e);if(n=arguments,o=this,l=e,r){if(void 0===a)return function(e){return d=e,a=setTimeout(p,t),c?g(e):s}(l);if(u)return clearTimeout(a),a=setTimeout(p,t),g(l)}return void 0===a&&(a=setTimeout(p,t)),s}return t=ui(t)||0,di(r)&&(c=!!r.leading,i=(u="maxWait"in r)?hi(ui(r.maxWait)||0,t):i,h="trailing"in r?!!r.trailing:h),b.cancel=function(){void 0!==a&&clearTimeout(a),d=0,n=l=o=a=void 0},b.flush=function(){return void 0===a?s:f(ci())},b},pi=mi,fi=zo;var bi=function(e,t,r){var n=!0,o=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return fi(r)&&(n="leading"in r?!!r.leading:n,o="trailing"in r?!!r.trailing:o),pi(e,t,{leading:n,maxWait:t,trailing:o})},yi=function(e,t,r,n){switch(t){case"debounce":return mi(e,r,n);case"throttle":return bi(e,r,n);default:return e}},vi=function(e){return"function"==typeof e},xi=function(){return"undefined"==typeof window},wi=function(e){return e instanceof Element||e instanceof HTMLDocument},$i=function(e,t,r,n){return function(o){var i=o.width,s=o.height;t((function(t){return t.width===i&&t.height===s||t.width===i&&!n||t.height===s&&!r?t:(e&&vi(e)&&e(i,s),{width:i,height:s})}))}};!function(e){function t(t){var r=e.call(this,t)||this;r.cancelHandler=function(){r.resizeHandler&&r.resizeHandler.cancel&&(r.resizeHandler.cancel(),r.resizeHandler=null)},r.attachObserver=function(){var e=r.props,t=e.targetRef,n=e.observerOptions;if(!xi()){t&&t.current&&(r.targetRef.current=t.current);var o=r.getElement();o&&(r.observableElement&&r.observableElement===o||(r.observableElement=o,r.resizeObserver.observe(o,n)))}},r.getElement=function(){var e=r.props,t=e.querySelector,n=e.targetDomEl;if(xi())return null;if(t)return document.querySelector(t);if(n&&wi(n))return n;if(r.targetRef&&wi(r.targetRef.current))return r.targetRef.current;var o=k(r);if(!o)return null;switch(r.getRenderType()){case"renderProp":case"childFunction":case"child":case"childArray":return o;default:return o.parentElement}},r.createResizeHandler=function(e){var t=r.props,n=t.handleWidth,o=void 0===n||n,i=t.handleHeight,s=void 0===i||i,a=t.onResize;if(o||s){var l=$i(a,r.setState.bind(r),o,s);e.forEach((function(e){var t=e&&e.contentRect||{},n=t.width,o=t.height;!r.skipOnMount&&!xi()&&l({width:n,height:o}),r.skipOnMount=!1}))}},r.getRenderType=function(){var e=r.props,t=e.render,n=e.children;return vi(t)?"renderProp":vi(n)?"childFunction":l(n)?"child":Array.isArray(n)?"childArray":"parent"};var n=t.skipOnMount,o=t.refreshMode,i=t.refreshRate,s=void 0===i?1e3:i,a=t.refreshOptions;return r.state={width:void 0,height:void 0},r.skipOnMount=n,r.targetRef=d(),r.observableElement=null,xi()||(r.resizeHandler=yi(r.createResizeHandler,o,s,a),r.resizeObserver=new window.ResizeObserver(r.resizeHandler)),r}(function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");function r(){this.constructor=e}To(e,t),e.prototype=null===t?Object.create(t):(r.prototype=t.prototype,new r)})(t,e),t.prototype.componentDidMount=function(){this.attachObserver()},t.prototype.componentDidUpdate=function(){this.attachObserver()},t.prototype.componentWillUnmount=function(){xi()||(this.observableElement=null,this.resizeObserver.disconnect(),this.cancelHandler())},t.prototype.render=function(){var e,t=this.props,r=t.render,o=t.children,i=t.nodeType,s=void 0===i?"div":i,a=this.state,l={width:a.width,height:a.height,targetRef:this.targetRef};switch(this.getRenderType()){case"renderProp":return r&&r(l);case"childFunction":return(e=o)(l);case"child":if((e=o).type&&"string"==typeof e.type){var d=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(n=Object.getOwnPropertySymbols(e);o<n.length;o++)t.indexOf(n[o])<0&&Object.prototype.propertyIsEnumerable.call(e,n[o])&&(r[n[o]]=e[n[o]])}return r}(l,["targetRef"]);return c(e,d)}return c(e,l);case"childArray":return(e=o).map((function(e){return!!e&&c(e,l)}));default:return n.createElement(s,null)}}}(u);var Fi=xi()?s:h;function Ci(e){void 0===e&&(e={});var t=e.skipOnMount,r=void 0!==t&&t,n=e.refreshMode,o=e.refreshRate,s=void 0===o?1e3:o,l=e.refreshOptions,d=e.handleWidth,c=void 0===d||d,u=e.handleHeight,h=void 0===u||u,g=e.targetRef,m=e.observerOptions,p=e.onResize,f=i(r),b=i(null),y=null!=g?g:b,v=i(),x=a({width:void 0,height:void 0}),w=x[0],$=x[1];return Fi((function(){if(!xi()){var e=$i(p,$,c,h);v.current=yi((function(t){(c||h)&&t.forEach((function(t){var r=t&&t.contentRect||{},n=r.width,o=r.height;!f.current&&!xi()&&e({width:n,height:o}),f.current=!1}))}),n,s,l);var t=new window.ResizeObserver(v.current);return y.current&&t.observe(y.current,m),function(){t.disconnect();var e=v.current;e&&e.cancel&&e.cancel()}}}),[n,s,l,c,h,p,m,y.current]),Bo({ref:y},w)}var Ei=Object.defineProperty,Si={};((e,t)=>{for(var r in t)Ei(e,r,{get:t[r],enumerable:!0})})(Si,{assign:()=>is,colors:()=>rs,createStringInterpolator:()=>Ki,skipAnimation:()=>ns,to:()=>Ji,willAdvance:()=>os});var ki=Ni(),Di=e=>ji(e,ki),Ii=Ni();Di.write=e=>ji(e,Ii);var Ti=Ni();Di.onStart=e=>ji(e,Ti);var Bi=Ni();Di.onFrame=e=>ji(e,Bi);var Ai=Ni();Di.onFinish=e=>ji(e,Ai);var zi=[];Di.setTimeout=(e,t)=>{const r=Di.now()+t,n=()=>{const e=zi.findIndex((e=>e.cancel==n));~e&&zi.splice(e,1),Ri-=~e?1:0},o={time:r,handler:e,cancel:n};return zi.splice(Oi(r),0,o),Ri+=1,Li(),o};var Oi=e=>~(~zi.findIndex((t=>t.time>e))||~zi.length);Di.cancel=e=>{Ti.delete(e),Bi.delete(e),Ai.delete(e),ki.delete(e),Ii.delete(e)},Di.sync=e=>{Hi=!0,Di.batchedUpdates(e),Hi=!1},Di.throttle=e=>{let t;function r(){try{e(...t)}finally{t=null}}function n(...e){t=e,Di.onStart(r)}return n.handler=e,n.cancel=()=>{Ti.delete(r),t=null},n};var Mi="undefined"!=typeof window?window.requestAnimationFrame:()=>{};Di.use=e=>Mi=e,Di.now="undefined"!=typeof performance?()=>performance.now():Date.now,Di.batchedUpdates=e=>e(),Di.catch=console.error,Di.frameLoop="always",Di.advance=()=>{"demand"!==Di.frameLoop?console.warn("Cannot call the manual advancement of rafz whilst frameLoop is not set as demand"):Wi()};var _i=-1,Ri=0,Hi=!1;function ji(e,t){Hi?(t.delete(e),e(0)):(t.add(e),Li())}function Li(){_i<0&&(_i=0,"demand"!==Di.frameLoop&&Mi(Pi))}function Pi(){~_i&&(Mi(Pi),Di.batchedUpdates(Wi))}function Wi(){const e=_i;_i=Di.now();const t=Oi(_i);t&&(Vi(zi.splice(0,t),(e=>e.handler())),Ri-=t),Ri?(Ti.flush(),ki.flush(e?Math.min(64,_i-e):16.667),Bi.flush(),Ii.flush(),Ai.flush()):_i=-1}function Ni(){let e=new Set,t=e;return{add(r){Ri+=t!=e||e.has(r)?0:1,e.add(r)},delete:r=>(Ri-=t==e&&e.has(r)?1:0,e.delete(r)),flush(r){t.size&&(e=new Set,Ri-=t.size,Vi(t,(t=>t(r)&&e.add(t))),Ri+=e.size,t=e)}}}function Vi(e,t){e.forEach((e=>{try{t(e)}catch(e){Di.catch(e)}}))}function Yi(){}var Ui={arr:Array.isArray,obj:e=>!!e&&"Object"===e.constructor.name,fun:e=>"function"==typeof e,str:e=>"string"==typeof e,num:e=>"number"==typeof e,und:e=>void 0===e};function qi(e,t){if(Ui.arr(e)){if(!Ui.arr(t)||e.length!==t.length)return!1;for(let r=0;r<e.length;r++)if(e[r]!==t[r])return!1;return!0}return e===t}var Gi=(e,t)=>e.forEach(t);function Zi(e,t,r){if(Ui.arr(e))for(let n=0;n<e.length;n++)t.call(r,e[n],`${n}`);else for(const n in e)e.hasOwnProperty(n)&&t.call(r,e[n],n)}var Qi=e=>Ui.und(e)?[]:Ui.arr(e)?e:[e];function Xi(e,t){if(e.size){const r=Array.from(e);e.clear(),Gi(r,t)}}var Ki,Ji,es=(e,...t)=>Xi(e,(e=>e(...t))),ts=()=>"undefined"==typeof window||!window.navigator||/ServerSideRendering|^Deno\//.test(window.navigator.userAgent),rs=null,ns=!1,os=Yi,is=e=>{e.to&&(Ji=e.to),e.now&&(Di.now=e.now),void 0!==e.colors&&(rs=e.colors),null!=e.skipAnimation&&(ns=e.skipAnimation),e.createStringInterpolator&&(Ki=e.createStringInterpolator),e.requestAnimationFrame&&Di.use(e.requestAnimationFrame),e.batchedUpdates&&(Di.batchedUpdates=e.batchedUpdates),e.willAdvance&&(os=e.willAdvance),e.frameLoop&&(Di.frameLoop=e.frameLoop)},ss=new Set,as=[],ls=[],ds=0,cs={get idle(){return!ss.size&&!as.length},start(e){ds>e.priority?(ss.add(e),Di.onStart(us)):(hs(e),Di(ms))},advance:ms,sort(e){if(ds)Di.onFrame((()=>cs.sort(e)));else{const t=as.indexOf(e);~t&&(as.splice(t,1),gs(e))}},clear(){as=[],ss.clear()}};function us(){ss.forEach(hs),ss.clear(),Di(ms)}function hs(e){as.includes(e)||gs(e)}function gs(e){as.splice(function(e,t){const r=e.findIndex(t);return r<0?e.length:r}(as,(t=>t.priority>e.priority)),0,e)}function ms(e){const t=ls;for(let r=0;r<as.length;r++){const n=as[r];ds=n.priority,n.idle||(os(n),n.advance(e),n.idle||t.push(n))}return ds=0,(ls=as).length=0,(as=t).length>0}var ps="[-+]?\\d*\\.?\\d+",fs=ps+"%";function bs(...e){return"\\(\\s*("+e.join(")\\s*,\\s*(")+")\\s*\\)"}var ys=new RegExp("rgb"+bs(ps,ps,ps)),vs=new RegExp("rgba"+bs(ps,ps,ps,ps)),xs=new RegExp("hsl"+bs(ps,fs,fs)),ws=new RegExp("hsla"+bs(ps,fs,fs,ps)),$s=/^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,Fs=/^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,Cs=/^#([0-9a-fA-F]{6})$/,Es=/^#([0-9a-fA-F]{8})$/;function Ss(e,t,r){return r<0&&(r+=1),r>1&&(r-=1),r<1/6?e+6*(t-e)*r:r<.5?t:r<2/3?e+(t-e)*(2/3-r)*6:e}function ks(e,t,r){const n=r<.5?r*(1+t):r+t-r*t,o=2*r-n,i=Ss(o,n,e+1/3),s=Ss(o,n,e),a=Ss(o,n,e-1/3);return Math.round(255*i)<<24|Math.round(255*s)<<16|Math.round(255*a)<<8}function Ds(e){const t=parseInt(e,10);return t<0?0:t>255?255:t}function Is(e){return(parseFloat(e)%360+360)%360/360}function Ts(e){const t=parseFloat(e);return t<0?0:t>1?255:Math.round(255*t)}function Bs(e){const t=parseFloat(e);return t<0?0:t>100?1:t/100}function As(e){let t=function(e){let t;return"number"==typeof e?e>>>0===e&&e>=0&&e<=4294967295?e:null:(t=Cs.exec(e))?parseInt(t[1]+"ff",16)>>>0:rs&&void 0!==rs[e]?rs[e]:(t=ys.exec(e))?(Ds(t[1])<<24|Ds(t[2])<<16|Ds(t[3])<<8|255)>>>0:(t=vs.exec(e))?(Ds(t[1])<<24|Ds(t[2])<<16|Ds(t[3])<<8|Ts(t[4]))>>>0:(t=$s.exec(e))?parseInt(t[1]+t[1]+t[2]+t[2]+t[3]+t[3]+"ff",16)>>>0:(t=Es.exec(e))?parseInt(t[1],16)>>>0:(t=Fs.exec(e))?parseInt(t[1]+t[1]+t[2]+t[2]+t[3]+t[3]+t[4]+t[4],16)>>>0:(t=xs.exec(e))?(255|ks(Is(t[1]),Bs(t[2]),Bs(t[3])))>>>0:(t=ws.exec(e))?(ks(Is(t[1]),Bs(t[2]),Bs(t[3]))|Ts(t[4]))>>>0:null}(e);if(null===t)return e;t=t||0;return`rgba(${(4278190080&t)>>>24}, ${(16711680&t)>>>16}, ${(65280&t)>>>8}, ${(255&t)/255})`}var zs=(e,t,r)=>{if(Ui.fun(e))return e;if(Ui.arr(e))return zs({range:e,output:t,extrapolate:r});if(Ui.str(e.output[0]))return Ki(e);const n=e,o=n.output,i=n.range||[0,1],s=n.extrapolateLeft||n.extrapolate||"extend",a=n.extrapolateRight||n.extrapolate||"extend",l=n.easing||(e=>e);return e=>{const t=function(e,t){for(var r=1;r<t.length-1&&!(t[r]>=e);++r);return r-1}(e,i);return function(e,t,r,n,o,i,s,a,l){let d=l?l(e):e;if(d<t){if("identity"===s)return d;"clamp"===s&&(d=t)}if(d>r){if("identity"===a)return d;"clamp"===a&&(d=r)}if(n===o)return n;if(t===r)return e<=t?n:o;t===-1/0?d=-d:r===1/0?d-=t:d=(d-t)/(r-t);d=i(d),n===-1/0?d=-d:o===1/0?d+=n:d=d*(o-n)+n;return d}(e,i[t],i[t+1],o[t],o[t+1],l,s,a,n.map)}};var Os=1.70158,Ms=1.525*Os,_s=Os+1,Rs=2*Math.PI/3,Hs=2*Math.PI/4.5,js=e=>{const t=7.5625,r=2.75;return e<1/r?t*e*e:e<2/r?t*(e-=1.5/r)*e+.75:e<2.5/r?t*(e-=2.25/r)*e+.9375:t*(e-=2.625/r)*e+.984375},Ls={linear:e=>e,easeInQuad:e=>e*e,easeOutQuad:e=>1-(1-e)*(1-e),easeInOutQuad:e=>e<.5?2*e*e:1-Math.pow(-2*e+2,2)/2,easeInCubic:e=>e*e*e,easeOutCubic:e=>1-Math.pow(1-e,3),easeInOutCubic:e=>e<.5?4*e*e*e:1-Math.pow(-2*e+2,3)/2,easeInQuart:e=>e*e*e*e,easeOutQuart:e=>1-Math.pow(1-e,4),easeInOutQuart:e=>e<.5?8*e*e*e*e:1-Math.pow(-2*e+2,4)/2,easeInQuint:e=>e*e*e*e*e,easeOutQuint:e=>1-Math.pow(1-e,5),easeInOutQuint:e=>e<.5?16*e*e*e*e*e:1-Math.pow(-2*e+2,5)/2,easeInSine:e=>1-Math.cos(e*Math.PI/2),easeOutSine:e=>Math.sin(e*Math.PI/2),easeInOutSine:e=>-(Math.cos(Math.PI*e)-1)/2,easeInExpo:e=>0===e?0:Math.pow(2,10*e-10),easeOutExpo:e=>1===e?1:1-Math.pow(2,-10*e),easeInOutExpo:e=>0===e?0:1===e?1:e<.5?Math.pow(2,20*e-10)/2:(2-Math.pow(2,-20*e+10))/2,easeInCirc:e=>1-Math.sqrt(1-Math.pow(e,2)),easeOutCirc:e=>Math.sqrt(1-Math.pow(e-1,2)),easeInOutCirc:e=>e<.5?(1-Math.sqrt(1-Math.pow(2*e,2)))/2:(Math.sqrt(1-Math.pow(-2*e+2,2))+1)/2,easeInBack:e=>_s*e*e*e-Os*e*e,easeOutBack:e=>1+_s*Math.pow(e-1,3)+Os*Math.pow(e-1,2),easeInOutBack:e=>e<.5?Math.pow(2*e,2)*(7.189819*e-Ms)/2:(Math.pow(2*e-2,2)*((Ms+1)*(2*e-2)+Ms)+2)/2,easeInElastic:e=>0===e?0:1===e?1:-Math.pow(2,10*e-10)*Math.sin((10*e-10.75)*Rs),easeOutElastic:e=>0===e?0:1===e?1:Math.pow(2,-10*e)*Math.sin((10*e-.75)*Rs)+1,easeInOutElastic:e=>0===e?0:1===e?1:e<.5?-Math.pow(2,20*e-10)*Math.sin((20*e-11.125)*Hs)/2:Math.pow(2,-20*e+10)*Math.sin((20*e-11.125)*Hs)/2+1,easeInBounce:e=>1-js(1-e),easeOutBounce:js,easeInOutBounce:e=>e<.5?(1-js(1-2*e))/2:(1+js(2*e-1))/2,steps:(e,t="end")=>r=>{const n=(r="end"===t?Math.min(r,.999):Math.max(r,.001))*e,o="end"===t?Math.floor(n):Math.ceil(n);return i=0,s=1,a=o/e,Math.min(Math.max(a,i),s);var i,s,a}},Ps=Symbol.for("FluidValue.get"),Ws=Symbol.for("FluidValue.observers"),Ns=e=>Boolean(e&&e[Ps]),Vs=e=>e&&e[Ps]?e[Ps]():e,Ys=e=>e[Ws]||null;function Us(e,t){const r=e[Ws];r&&r.forEach((e=>{!function(e,t){e.eventObserved?e.eventObserved(t):e(t)}(e,t)}))}var qs=class{constructor(e){if(!e&&!(e=this.get))throw Error("Unknown getter");Gs(this,e)}},Gs=(e,t)=>Ks(e,Ps,t);function Zs(e,t){if(e[Ps]){let r=e[Ws];r||Ks(e,Ws,r=new Set),r.has(t)||(r.add(t),e.observerAdded&&e.observerAdded(r.size,t))}return t}function Qs(e,t){const r=e[Ws];if(r&&r.has(t)){const n=r.size-1;n?r.delete(t):e[Ws]=null,e.observerRemoved&&e.observerRemoved(n,t)}}var Xs,Ks=(e,t,r)=>Object.defineProperty(e,t,{value:r,writable:!0,configurable:!0}),Js=/[+\-]?(?:0|[1-9]\d*)(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,ea=/(#(?:[0-9a-f]{2}){2,4}|(#[0-9a-f]{3})|(rgb|hsl)a?\((-?\d+%?[,\s]+){2,3}\s*[\d\.]+%?\))/gi,ta=new RegExp(`(${Js.source})(%|[a-z]+)`,"i"),ra=/rgba\(([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+)\)/gi,na=/var\((--[a-zA-Z0-9-_]+),? ?([a-zA-Z0-9 ()%#.,-]+)?\)/,oa=e=>{const[t,r]=ia(e);if(!t||ts())return e;const n=window.getComputedStyle(document.documentElement).getPropertyValue(t);if(n)return n.trim();if(r&&r.startsWith("--")){const t=window.getComputedStyle(document.documentElement).getPropertyValue(r);return t||e}return r&&na.test(r)?oa(r):r||e},ia=e=>{const t=na.exec(e);if(!t)return[,];const[,r,n]=t;return[r,n]},sa=(e,t,r,n,o)=>`rgba(${Math.round(t)}, ${Math.round(r)}, ${Math.round(n)}, ${o})`,aa=e=>{Xs||(Xs=rs?new RegExp(`(${Object.keys(rs).join("|")})(?!\\w)`,"g"):/^\b$/);const t=e.output.map((e=>Vs(e).replace(na,oa).replace(ea,As).replace(Xs,As))),r=t.map((e=>e.match(Js).map(Number))),n=r[0].map(((e,t)=>r.map((e=>{if(!(t in e))throw Error('The arity of each "output" value must be equal');return e[t]})))).map((t=>zs({...e,output:t})));return e=>{const r=!ta.test(t[0])&&t.find((e=>ta.test(e)))?.replace(Js,"");let o=0;return t[0].replace(Js,(()=>`${n[o++](e)}${r||""}`)).replace(ra,sa)}},la="react-spring: ",da=e=>{const t=e;let r=!1;if("function"!=typeof t)throw new TypeError(`${la}once requires a function parameter`);return(...e)=>{r||(t(...e),r=!0)}},ca=da(console.warn);var ua=da(console.warn);function ha(e){return Ui.str(e)&&("#"==e[0]||/\d/.test(e)||!ts()&&na.test(e)||e in(rs||{}))}var ga=ts()?s:h;function ma(){const e=a()[1],t=(()=>{const e=i(!1);return ga((()=>(e.current=!0,()=>{e.current=!1})),[]),e})();return()=>{t.current&&e(Math.random())}}var pa=e=>s(e,fa),fa=[];function ba(e){const t=i();return s((()=>{t.current=e})),t.current}var ya=Symbol.for("Animated:node"),va=e=>e&&e[ya],xa=(e,t)=>((e,t,r)=>Object.defineProperty(e,t,{value:r,writable:!0,configurable:!0}))(e,ya,t),wa=e=>e&&e[ya]&&e[ya].getPayload(),$a=class{constructor(){xa(this,this)}getPayload(){return this.payload||[]}},Fa=class extends $a{constructor(e){super(),this._value=e,this.done=!0,this.durationProgress=0,Ui.num(this._value)&&(this.lastPosition=this._value)}static create(e){return new Fa(e)}getPayload(){return[this]}getValue(){return this._value}setValue(e,t){return Ui.num(e)&&(this.lastPosition=e,t&&(e=Math.round(e/t)*t,this.done&&(this.lastPosition=e))),this._value!==e&&(this._value=e,!0)}reset(){const{done:e}=this;this.done=!1,Ui.num(this._value)&&(this.elapsedTime=0,this.durationProgress=0,this.lastPosition=this._value,e&&(this.lastVelocity=null),this.v0=null)}},Ca=class extends Fa{constructor(e){super(0),this._string=null,this._toString=zs({output:[e,e]})}static create(e){return new Ca(e)}getValue(){const e=this._string;return null==e?this._string=this._toString(this._value):e}setValue(e){if(Ui.str(e)){if(e==this._string)return!1;this._string=e,this._value=1}else{if(!super.setValue(e))return!1;this._string=null}return!0}reset(e){e&&(this._toString=zs({output:[this.getValue(),e]})),this._value=0,super.reset()}},Ea={dependencies:null},Sa=class extends $a{constructor(e){super(),this.source=e,this.setValue(e)}getValue(e){const t={};return Zi(this.source,((r,n)=>{var o;(o=r)&&o[ya]===o?t[n]=r.getValue(e):Ns(r)?t[n]=Vs(r):e||(t[n]=r)})),t}setValue(e){this.source=e,this.payload=this._makePayload(e)}reset(){this.payload&&Gi(this.payload,(e=>e.reset()))}_makePayload(e){if(e){const t=new Set;return Zi(e,this._addToPayload,t),Array.from(t)}}_addToPayload(e){Ea.dependencies&&Ns(e)&&Ea.dependencies.add(e);const t=wa(e);t&&Gi(t,(e=>this.add(e)))}},ka=class extends Sa{constructor(e){super(e)}static create(e){return new ka(e)}getValue(){return this.source.map((e=>e.getValue()))}setValue(e){const t=this.getPayload();return e.length==t.length?t.map(((t,r)=>t.setValue(e[r]))).some(Boolean):(super.setValue(e.map(Da)),!0)}};function Da(e){return(ha(e)?Ca:Fa).create(e)}function Ia(e){const t=va(e);return t?t.constructor:Ui.arr(e)?ka:ha(e)?Ca:Fa}var Ta=(e,t)=>{const r=!Ui.fun(e)||e.prototype&&e.prototype.isReactComponent;return g(((o,a)=>{const l=i(null),d=r&&m((e=>{l.current=function(e,t){e&&(Ui.fun(e)?e(t):e.current=t);return t}(a,e)}),[a]),[c,u]=function(e,t){const r=new Set;Ea.dependencies=r,e.style&&(e={...e,style:t.createAnimatedStyle(e.style)});return e=new Sa(e),Ea.dependencies=null,[e,r]}(o,t),h=ma(),g=()=>{const e=l.current;if(r&&!e)return;!1===(!!e&&t.applyAnimatedValues(e,c.getValue(!0)))&&h()},p=new Ba(g,u),f=i();ga((()=>(f.current=p,Gi(u,(e=>Zs(e,p))),()=>{f.current&&(Gi(f.current.deps,(e=>Qs(e,f.current))),Di.cancel(f.current.update))}))),s(g,[]),pa((()=>()=>{const e=f.current;Gi(e.deps,(t=>Qs(t,e)))}));const b=t.getComponentProps(c.getValue());return n.createElement(e,{...b,ref:d})}))},Ba=class{constructor(e,t){this.update=e,this.deps=t}eventObserved(e){"change"==e.type&&Di.write(this.update)}};var Aa=Symbol.for("AnimatedComponent"),za=e=>Ui.str(e)?e:e&&Ui.str(e.displayName)?e.displayName:Ui.fun(e)&&e.name||null;function Oa(e,...t){return Ui.fun(e)?e(...t):e}var Ma=(e,t)=>!0===e||!!(t&&e&&(Ui.fun(e)?e(t):Qi(e).includes(t))),_a=(e,t)=>Ui.obj(e)?t&&e[t]:e,Ra=(e,t)=>!0===e.default?e[t]:e.default?e.default[t]:void 0,Ha=e=>e,ja=(e,t=Ha)=>{let r=La;e.default&&!0!==e.default&&(e=e.default,r=Object.keys(e));const n={};for(const o of r){const r=t(e[o],o);Ui.und(r)||(n[o]=r)}return n},La=["config","onProps","onStart","onChange","onPause","onResume","onRest"],Pa={config:1,from:1,to:1,ref:1,loop:1,reset:1,pause:1,cancel:1,reverse:1,immediate:1,default:1,delay:1,onProps:1,onStart:1,onChange:1,onPause:1,onResume:1,onRest:1,onResolve:1,items:1,trail:1,sort:1,expires:1,initial:1,enter:1,update:1,leave:1,children:1,onDestroyed:1,keys:1,callId:1,parentId:1};function Wa(e){const t=function(e){const t={};let r=0;if(Zi(e,((e,n)=>{Pa[n]||(t[n]=e,r++)})),r)return t}(e);if(t){const r={to:t};return Zi(e,((e,n)=>n in t||(r[n]=e))),r}return{...e}}function Na(e){return e=Vs(e),Ui.arr(e)?e.map(Na):ha(e)?Si.createStringInterpolator({range:[0,1],output:[e,e]})(1):e}function Va(e){return Ui.fun(e)||Ui.arr(e)&&Ui.obj(e[0])}var Ya={tension:170,friction:26,mass:1,damping:1,easing:Ls.linear,clamp:!1},Ua=class{constructor(){this.velocity=0,Object.assign(this,Ya)}};function qa(e,t){if(Ui.und(t.decay)){const r=!Ui.und(t.tension)||!Ui.und(t.friction);!r&&Ui.und(t.frequency)&&Ui.und(t.damping)&&Ui.und(t.mass)||(e.duration=void 0,e.decay=void 0),r&&(e.frequency=void 0)}else e.duration=void 0}var Ga=[],Za=class{constructor(){this.changed=!1,this.values=Ga,this.toValues=null,this.fromValues=Ga,this.config=new Ua,this.immediate=!1}};function Qa(e,{key:t,props:r,defaultProps:n,state:o,actions:i}){return new Promise(((s,a)=>{let l,d,c=Ma(r.cancel??n?.cancel,t);if(c)g();else{Ui.und(r.pause)||(o.paused=Ma(r.pause,t));let e=n?.pause;!0!==e&&(e=o.paused||Ma(e,t)),l=Oa(r.delay||0,t),e?(o.resumeQueue.add(h),i.pause()):(i.resume(),h())}function u(){o.resumeQueue.add(h),o.timeouts.delete(d),d.cancel(),l=d.time-Di.now()}function h(){l>0&&!Si.skipAnimation?(o.delayed=!0,d=Di.setTimeout(g,l),o.pauseQueue.add(u),o.timeouts.add(d)):g()}function g(){o.delayed&&(o.delayed=!1),o.pauseQueue.delete(u),o.timeouts.delete(d),e<=(o.cancelId||0)&&(c=!0);try{i.start({...r,callId:e,cancel:c},s)}catch(e){a(e)}}}))}var Xa=(e,t)=>1==t.length?t[0]:t.some((e=>e.cancelled))?el(e.get()):t.every((e=>e.noop))?Ka(e.get()):Ja(e.get(),t.every((e=>e.finished))),Ka=e=>({value:e,noop:!0,finished:!0,cancelled:!1}),Ja=(e,t,r=!1)=>({value:e,finished:t,cancelled:r}),el=e=>({value:e,cancelled:!0,finished:!1});function tl(e,t,r,n){const{callId:o,parentId:i,onRest:s}=t,{asyncTo:a,promise:l}=r;return i||e!==a||t.reset?r.promise=(async()=>{r.asyncId=o,r.asyncTo=e;const d=ja(t,((e,t)=>"onRest"===t?void 0:e));let c,u;const h=new Promise(((e,t)=>(c=e,u=t))),g=e=>{const t=o<=(r.cancelId||0)&&el(n)||o!==r.asyncId&&Ja(n,!1);if(t)throw e.result=t,u(e),e},m=(e,t)=>{const i=new nl,s=new ol;return(async()=>{if(Si.skipAnimation)throw rl(r),s.result=Ja(n,!1),u(s),s;g(i);const a=Ui.obj(e)?{...e}:{...t,to:e};a.parentId=o,Zi(d,((e,t)=>{Ui.und(a[t])&&(a[t]=e)}));const l=await n.start(a);return g(i),r.paused&&await new Promise((e=>{r.resumeQueue.add(e)})),l})()};let p;if(Si.skipAnimation)return rl(r),Ja(n,!1);try{let t;t=Ui.arr(e)?(async e=>{for(const t of e)await m(t)})(e):Promise.resolve(e(m,n.stop.bind(n))),await Promise.all([t.then(c),h]),p=Ja(n.get(),!0,!1)}catch(e){if(e instanceof nl)p=e.result;else{if(!(e instanceof ol))throw e;p=e.result}}finally{o==r.asyncId&&(r.asyncId=i,r.asyncTo=i?a:void 0,r.promise=i?l:void 0)}return Ui.fun(s)&&Di.batchedUpdates((()=>{s(p,n,n.item)})),p})():l}function rl(e,t){Xi(e.timeouts,(e=>e.cancel())),e.pauseQueue.clear(),e.resumeQueue.clear(),e.asyncId=e.asyncTo=e.promise=void 0,t&&(e.cancelId=t)}var nl=class extends Error{constructor(){super("An async animation has been interrupted. You see this error because you forgot to use `await` or `.catch(...)` on its returned promise.")}},ol=class extends Error{constructor(){super("SkipAnimationSignal")}},il=e=>e instanceof al,sl=1,al=class extends qs{constructor(){super(...arguments),this.id=sl++,this._priority=0}get priority(){return this._priority}set priority(e){this._priority!=e&&(this._priority=e,this._onPriorityChange(e))}get(){const e=va(this);return e&&e.getValue()}to(...e){return Si.to(this,e)}interpolate(...e){return ca(`${la}The "interpolate" function is deprecated in v9 (use "to" instead)`),Si.to(this,e)}toJSON(){return this.get()}observerAdded(e){1==e&&this._attach()}observerRemoved(e){0==e&&this._detach()}_attach(){}_detach(){}_onChange(e,t=!1){Us(this,{type:"change",parent:this,value:e,idle:t})}_onPriorityChange(e){this.idle||cs.sort(this),Us(this,{type:"priority",parent:this,priority:e})}},ll=Symbol.for("SpringPhase"),dl=e=>(1&e[ll])>0,cl=e=>(2&e[ll])>0,ul=e=>(4&e[ll])>0,hl=(e,t)=>t?e[ll]|=3:e[ll]&=-3,gl=(e,t)=>t?e[ll]|=4:e[ll]&=-5,ml=class extends al{constructor(e,t){if(super(),this.animation=new Za,this.defaultProps={},this._state={paused:!1,delayed:!1,pauseQueue:new Set,resumeQueue:new Set,timeouts:new Set},this._pendingCalls=new Set,this._lastCallId=0,this._lastToId=0,this._memoizedDuration=0,!Ui.und(e)||!Ui.und(t)){const r=Ui.obj(e)?{...e}:{...t,from:e};Ui.und(r.default)&&(r.default=!0),this.start(r)}}get idle(){return!(cl(this)||this._state.asyncTo)||ul(this)}get goal(){return Vs(this.animation.to)}get velocity(){const e=va(this);return e instanceof Fa?e.lastVelocity||0:e.getPayload().map((e=>e.lastVelocity||0))}get hasAnimated(){return dl(this)}get isAnimating(){return cl(this)}get isPaused(){return ul(this)}get isDelayed(){return this._state.delayed}advance(e){let t=!0,r=!1;const n=this.animation;let{toValues:o}=n;const{config:i}=n,s=wa(n.to);!s&&Ns(n.to)&&(o=Qi(Vs(n.to))),n.values.forEach(((a,l)=>{if(a.done)return;const d=a.constructor==Ca?1:s?s[l].lastPosition:o[l];let c=n.immediate,u=d;if(!c){if(u=a.lastPosition,i.tension<=0)return void(a.done=!0);let t=a.elapsedTime+=e;const r=n.fromValues[l],o=null!=a.v0?a.v0:a.v0=Ui.arr(i.velocity)?i.velocity[l]:i.velocity;let s;const h=i.precision||(r==d?.005:Math.min(1,.001*Math.abs(d-r)));if(Ui.und(i.duration))if(i.decay){const e=!0===i.decay?.998:i.decay,n=Math.exp(-(1-e)*t);u=r+o/(1-e)*(1-n),c=Math.abs(a.lastPosition-u)<=h,s=o*n}else{s=null==a.lastVelocity?o:a.lastVelocity;const t=i.restVelocity||h/10,n=i.clamp?0:i.bounce,l=!Ui.und(n),g=r==d?a.v0>0:r<d;let m,p=!1;const f=1,b=Math.ceil(e/f);for(let e=0;e<b&&(m=Math.abs(s)>t,m||(c=Math.abs(d-u)<=h,!c));++e){l&&(p=u==d||u>d==g,p&&(s=-s*n,u=d));s+=(1e-6*-i.tension*(u-d)+.001*-i.friction*s)/i.mass*f,u+=s*f}}else{let n=1;i.duration>0&&(this._memoizedDuration!==i.duration&&(this._memoizedDuration=i.duration,a.durationProgress>0&&(a.elapsedTime=i.duration*a.durationProgress,t=a.elapsedTime+=e)),n=(i.progress||0)+t/this._memoizedDuration,n=n>1?1:n<0?0:n,a.durationProgress=n),u=r+i.easing(n)*(d-r),s=(u-a.lastPosition)/e,c=1==n}a.lastVelocity=s,Number.isNaN(u)&&(console.warn("Got NaN while animating:",this),c=!0)}s&&!s[l].done&&(c=!1),c?a.done=!0:t=!1,a.setValue(u,i.round)&&(r=!0)}));const a=va(this),l=a.getValue();if(t){const e=Vs(n.to);l===e&&!r||i.decay?r&&i.decay&&this._onChange(l):(a.setValue(e),this._onChange(e)),this._stop()}else r&&this._onChange(l)}set(e){return Di.batchedUpdates((()=>{this._stop(),this._focus(e),this._set(e)})),this}pause(){this._update({pause:!0})}resume(){this._update({pause:!1})}finish(){if(cl(this)){const{to:e,config:t}=this.animation;Di.batchedUpdates((()=>{this._onStart(),t.decay||this._set(e,!1),this._stop()}))}return this}update(e){return(this.queue||(this.queue=[])).push(e),this}start(e,t){let r;return Ui.und(e)?(r=this.queue||[],this.queue=[]):r=[Ui.obj(e)?e:{...t,to:e}],Promise.all(r.map((e=>this._update(e)))).then((e=>Xa(this,e)))}stop(e){const{to:t}=this.animation;return this._focus(this.get()),rl(this._state,e&&this._lastCallId),Di.batchedUpdates((()=>this._stop(t,e))),this}reset(){this._update({reset:!0})}eventObserved(e){"change"==e.type?this._start():"priority"==e.type&&(this.priority=e.priority+1)}_prepareNode(e){const t=this.key||"";let{to:r,from:n}=e;r=Ui.obj(r)?r[t]:r,(null==r||Va(r))&&(r=void 0),n=Ui.obj(n)?n[t]:n,null==n&&(n=void 0);const o={to:r,from:n};return dl(this)||(e.reverse&&([r,n]=[n,r]),n=Vs(n),Ui.und(n)?va(this)||this._set(r):this._set(n)),o}_update({...e},t){const{key:r,defaultProps:n}=this;e.default&&Object.assign(n,ja(e,((e,t)=>/^on/.test(t)?_a(e,r):e))),wl(this,e,"onProps"),$l(this,"onProps",e,this);const o=this._prepareNode(e);if(Object.isFrozen(this))throw Error("Cannot animate a `SpringValue` object that is frozen. Did you forget to pass your component to `animated(...)` before animating its props?");const i=this._state;return Qa(++this._lastCallId,{key:r,props:e,defaultProps:n,state:i,actions:{pause:()=>{ul(this)||(gl(this,!0),es(i.pauseQueue),$l(this,"onPause",Ja(this,pl(this,this.animation.to)),this))},resume:()=>{ul(this)&&(gl(this,!1),cl(this)&&this._resume(),es(i.resumeQueue),$l(this,"onResume",Ja(this,pl(this,this.animation.to)),this))},start:this._merge.bind(this,o)}}).then((r=>{if(e.loop&&r.finished&&(!t||!r.noop)){const t=fl(e);if(t)return this._update(t,!0)}return r}))}_merge(e,t,r){if(t.cancel)return this.stop(!0),r(el(this));const n=!Ui.und(e.to),o=!Ui.und(e.from);if(n||o){if(!(t.callId>this._lastToId))return r(el(this));this._lastToId=t.callId}const{key:i,defaultProps:s,animation:a}=this,{to:l,from:d}=a;let{to:c=l,from:u=d}=e;!o||n||t.default&&!Ui.und(c)||(c=u),t.reverse&&([c,u]=[u,c]);const h=!qi(u,d);h&&(a.from=u),u=Vs(u);const g=!qi(c,l);g&&this._focus(c);const m=Va(t.to),{config:p}=a,{decay:f,velocity:b}=p;(n||o)&&(p.velocity=0),t.config&&!m&&function(e,t,r){r&&(qa(r={...r},t),t={...r,...t}),qa(e,t),Object.assign(e,t);for(const t in Ya)null==e[t]&&(e[t]=Ya[t]);let{frequency:n,damping:o}=e;const{mass:i}=e;Ui.und(n)||(n<.01&&(n=.01),o<0&&(o=0),e.tension=Math.pow(2*Math.PI/n,2)*i,e.friction=4*Math.PI*o*i/n)}(p,Oa(t.config,i),t.config!==s.config?Oa(s.config,i):void 0);let y=va(this);if(!y||Ui.und(c))return r(Ja(this,!0));const v=Ui.und(t.reset)?o&&!t.default:!Ui.und(u)&&Ma(t.reset,i),x=v?u:this.get(),w=Na(c),$=Ui.num(w)||Ui.arr(w)||ha(w),F=!m&&(!$||Ma(s.immediate||t.immediate,i));if(g){const e=Ia(c);if(e!==y.constructor){if(!F)throw Error(`Cannot animate between ${y.constructor.name} and ${e.name}, as the "to" prop suggests`);y=this._set(w)}}const C=y.constructor;let E=Ns(c),S=!1;if(!E){const e=v||!dl(this)&&h;(g||e)&&(S=qi(Na(x),w),E=!S),(qi(a.immediate,F)||F)&&qi(p.decay,f)&&qi(p.velocity,b)||(E=!0)}if(S&&cl(this)&&(a.changed&&!v?E=!0:E||this._stop(l)),!m&&((E||Ns(l))&&(a.values=y.getPayload(),a.toValues=Ns(c)?null:C==Ca?[1]:Qi(w)),a.immediate!=F&&(a.immediate=F,F||v||this._set(l)),E)){const{onRest:e}=a;Gi(xl,(e=>wl(this,t,e)));const n=Ja(this,pl(this,l));es(this._pendingCalls,n),this._pendingCalls.add(r),a.changed&&Di.batchedUpdates((()=>{a.changed=!v,e?.(n,this),v?Oa(s.onRest,n):a.onStart?.(n,this)}))}v&&this._set(x),m?r(tl(t.to,t,this._state,this)):E?this._start():cl(this)&&!g?this._pendingCalls.add(r):r(Ka(x))}_focus(e){const t=this.animation;e!==t.to&&(Ys(this)&&this._detach(),t.to=e,Ys(this)&&this._attach())}_attach(){let e=0;const{to:t}=this.animation;Ns(t)&&(Zs(t,this),il(t)&&(e=t.priority+1)),this.priority=e}_detach(){const{to:e}=this.animation;Ns(e)&&Qs(e,this)}_set(e,t=!0){const r=Vs(e);if(!Ui.und(r)){const e=va(this);if(!e||!qi(r,e.getValue())){const n=Ia(r);e&&e.constructor==n?e.setValue(r):xa(this,n.create(r)),e&&Di.batchedUpdates((()=>{this._onChange(r,t)}))}}return va(this)}_onStart(){const e=this.animation;e.changed||(e.changed=!0,$l(this,"onStart",Ja(this,pl(this,e.to)),this))}_onChange(e,t){t||(this._onStart(),Oa(this.animation.onChange,e,this)),Oa(this.defaultProps.onChange,e,this),super._onChange(e,t)}_start(){const e=this.animation;va(this).reset(Vs(e.to)),e.immediate||(e.fromValues=e.values.map((e=>e.lastPosition))),cl(this)||(hl(this,!0),ul(this)||this._resume())}_resume(){Si.skipAnimation?this.finish():cs.start(this)}_stop(e,t){if(cl(this)){hl(this,!1);const r=this.animation;Gi(r.values,(e=>{e.done=!0})),r.toValues&&(r.onChange=r.onPause=r.onResume=void 0),Us(this,{type:"idle",parent:this});const n=t?el(this.get()):Ja(this.get(),pl(this,e??r.to));es(this._pendingCalls,n),r.changed&&(r.changed=!1,$l(this,"onRest",n,this))}}};function pl(e,t){const r=Na(t);return qi(Na(e.get()),r)}function fl(e,t=e.loop,r=e.to){const n=Oa(t);if(n){const o=!0!==n&&Wa(n),i=(o||e).reverse,s=!o||o.reset;return bl({...e,loop:t,default:!1,pause:void 0,to:!i||Va(r)?r:void 0,from:s?e.from:void 0,reset:s,...o})}}function bl(e){const{to:t,from:r}=e=Wa(e),n=new Set;return Ui.obj(t)&&vl(t,n),Ui.obj(r)&&vl(r,n),e.keys=n.size?Array.from(n):null,e}function yl(e){const t=bl(e);return Ui.und(t.default)&&(t.default=ja(t)),t}function vl(e,t){Zi(e,((e,r)=>null!=e&&t.add(r)))}var xl=["onStart","onRest","onChange","onPause","onResume"];function wl(e,t,r){e.animation[r]=t[r]!==Ra(t,r)?_a(t[r],e.key):void 0}function $l(e,t,...r){e.animation[t]?.(...r),e.defaultProps[t]?.(...r)}var Fl=["onStart","onChange","onRest"],Cl=1,El=class{constructor(e,t){this.id=Cl++,this.springs={},this.queue=[],this._lastAsyncId=0,this._active=new Set,this._changed=new Set,this._started=!1,this._state={paused:!1,pauseQueue:new Set,resumeQueue:new Set,timeouts:new Set},this._events={onStart:new Map,onChange:new Map,onRest:new Map},this._onFrame=this._onFrame.bind(this),t&&(this._flush=t),e&&this.start({default:!0,...e})}get idle(){return!this._state.asyncTo&&Object.values(this.springs).every((e=>e.idle&&!e.isDelayed&&!e.isPaused))}get item(){return this._item}set item(e){this._item=e}get(){const e={};return this.each(((t,r)=>e[r]=t.get())),e}set(e){for(const t in e){const r=e[t];Ui.und(r)||this.springs[t].set(r)}}update(e){return e&&this.queue.push(bl(e)),this}start(e){let{queue:t}=this;return e?t=Qi(e).map(bl):this.queue=[],this._flush?this._flush(this,t):(Al(this,t),Sl(this,t))}stop(e,t){if(e!==!!e&&(t=e),t){const r=this.springs;Gi(Qi(t),(t=>r[t].stop(!!e)))}else rl(this._state,this._lastAsyncId),this.each((t=>t.stop(!!e)));return this}pause(e){if(Ui.und(e))this.start({pause:!0});else{const t=this.springs;Gi(Qi(e),(e=>t[e].pause()))}return this}resume(e){if(Ui.und(e))this.start({pause:!1});else{const t=this.springs;Gi(Qi(e),(e=>t[e].resume()))}return this}each(e){Zi(this.springs,e)}_onFrame(){const{onStart:e,onChange:t,onRest:r}=this._events,n=this._active.size>0,o=this._changed.size>0;(n&&!this._started||o&&!this._started)&&(this._started=!0,Xi(e,(([e,t])=>{t.value=this.get(),e(t,this,this._item)})));const i=!n&&this._started,s=o||i&&r.size?this.get():null;o&&t.size&&Xi(t,(([e,t])=>{t.value=s,e(t,this,this._item)})),i&&(this._started=!1,Xi(r,(([e,t])=>{t.value=s,e(t,this,this._item)})))}eventObserved(e){if("change"==e.type)this._changed.add(e.parent),e.idle||this._active.add(e.parent);else{if("idle"!=e.type)return;this._active.delete(e.parent)}Di.onFrame(this._onFrame)}};function Sl(e,t){return Promise.all(t.map((t=>kl(e,t)))).then((t=>Xa(e,t)))}async function kl(e,t,r){const{keys:n,to:o,from:i,loop:s,onRest:a,onResolve:l}=t,d=Ui.obj(t.default)&&t.default;s&&(t.loop=!1),!1===o&&(t.to=null),!1===i&&(t.from=null);const c=Ui.arr(o)||Ui.fun(o)?o:void 0;c?(t.to=void 0,t.onRest=void 0,d&&(d.onRest=void 0)):Gi(Fl,(r=>{const n=t[r];if(Ui.fun(n)){const o=e._events[r];t[r]=({finished:e,cancelled:t})=>{const r=o.get(n);r?(e||(r.finished=!1),t&&(r.cancelled=!0)):o.set(n,{value:null,finished:e||!1,cancelled:t||!1})},d&&(d[r]=t[r])}}));const u=e._state;t.pause===!u.paused?(u.paused=t.pause,es(t.pause?u.pauseQueue:u.resumeQueue)):u.paused&&(t.pause=!0);const h=(n||Object.keys(e.springs)).map((r=>e.springs[r].start(t))),g=!0===t.cancel||!0===Ra(t,"cancel");(c||g&&u.asyncId)&&h.push(Qa(++e._lastAsyncId,{props:t,state:u,actions:{pause:Yi,resume:Yi,start(t,r){g?(rl(u,e._lastAsyncId),r(el(e))):(t.onRest=a,r(tl(c,t,u,e)))}}})),u.paused&&await new Promise((e=>{u.resumeQueue.add(e)}));const m=Xa(e,await Promise.all(h));if(s&&m.finished&&(!r||!m.noop)){const r=fl(t,s,o);if(r)return Al(e,[r]),kl(e,r,!0)}return l&&Di.batchedUpdates((()=>l(m,e,e.item))),m}function Dl(e,t){const r={...e.springs};return t&&Gi(Qi(t),(e=>{Ui.und(e.keys)&&(e=bl(e)),Ui.obj(e.to)||(e={...e,to:void 0}),Bl(r,e,(e=>Tl(e)))})),Il(e,r),r}function Il(e,t){Zi(t,((t,r)=>{e.springs[r]||(e.springs[r]=t,Zs(t,e))}))}function Tl(e,t){const r=new ml;return r.key=e,t&&Zs(r,t),r}function Bl(e,t,r){t.keys&&Gi(t.keys,(n=>{(e[n]||(e[n]=r(n)))._prepareNode(t)}))}function Al(e,t){Gi(t,(t=>{Bl(e.springs,t,(t=>Tl(t,e)))}))}var zl,Ol,Ml=({children:e,...t})=>{const r=p(_l),o=t.pause||!!r.pause,l=t.immediate||!!r.immediate;t=function(e,t){const[r]=a((()=>({inputs:t,result:e()}))),n=i(),o=n.current;let l=o;l?Boolean(t&&l.inputs&&function(e,t){if(e.length!==t.length)return!1;for(let r=0;r<e.length;r++)if(e[r]!==t[r])return!1;return!0}(t,l.inputs))||(l={inputs:t,result:e()}):l=r;return s((()=>{n.current=l,o==r&&(r.inputs=r.result=void 0)}),[l]),l.result}((()=>({pause:o,immediate:l})),[o,l]);const{Provider:d}=_l;return n.createElement(d,{value:t},e)},_l=(zl=Ml,Ol={},Object.assign(zl,n.createContext(Ol)),zl.Provider._context=zl,zl.Consumer._context=zl,zl);Ml.Provider=_l.Provider,Ml.Consumer=_l.Consumer;var Rl=()=>{const e=[],t=function(t){ua(`${la}Directly calling start instead of using the api object is deprecated in v9 (use ".start" instead), this will be removed in later 0.X.0 versions`);const n=[];return Gi(e,((e,o)=>{if(Ui.und(t))n.push(e.start());else{const i=r(t,e,o);i&&n.push(e.start(i))}})),n};t.current=e,t.add=function(t){e.includes(t)||e.push(t)},t.delete=function(t){const r=e.indexOf(t);~r&&e.splice(r,1)},t.pause=function(){return Gi(e,(e=>e.pause(...arguments))),this},t.resume=function(){return Gi(e,(e=>e.resume(...arguments))),this},t.set=function(t){Gi(e,((e,r)=>{const n=Ui.fun(t)?t(r,e):t;n&&e.set(n)}))},t.start=function(t){const r=[];return Gi(e,((e,n)=>{if(Ui.und(t))r.push(e.start());else{const o=this._getProps(t,e,n);o&&r.push(e.start(o))}})),r},t.stop=function(){return Gi(e,(e=>e.stop(...arguments))),this},t.update=function(t){return Gi(e,((e,r)=>e.update(this._getProps(t,e,r)))),this};const r=function(e,t,r){return Ui.fun(e)?e(r,t):e};return t._getProps=r,t};function Hl(e,t){const r=Ui.fun(e),[[n],o]=function(e,t,r){const n=Ui.fun(t)&&t;n&&!r&&(r=[]);const o=f((()=>n||3==arguments.length?Rl():void 0),[]),s=i(0),a=ma(),l=f((()=>({ctrls:[],queue:[],flush(e,t){const r=Dl(e,t),n=s.current>0&&!l.queue.length&&!Object.keys(r).some((t=>!e.springs[t]));return n?Sl(e,t):new Promise((n=>{Il(e,r),l.queue.push((()=>{n(Sl(e,t))})),a()}))}})),[]),d=i([...l.ctrls]),c=[],u=ba(e)||0;function h(e,r){for(let o=e;o<r;o++){const e=d.current[o]||(d.current[o]=new El(null,l.flush)),r=n?n(o,e):t[o];r&&(c[o]=yl(r))}}f((()=>{Gi(d.current.slice(e,u),(e=>{!function(e,t){e.ref?.delete(e),t?.delete(e)}(e,o),e.stop(!0)})),d.current.length=e,h(u,e)}),[e]),f((()=>{h(0,Math.min(u,e))}),r);const g=d.current.map(((e,t)=>Dl(e,c[t]))),m=p(Ml),b=ba(m),y=m!==b&&function(e){for(const t in e)return!0;return!1}(m);ga((()=>{s.current++,l.ctrls=d.current;const{queue:e}=l;e.length&&(l.queue=[],Gi(e,(e=>e()))),Gi(d.current,((e,t)=>{o?.add(e),y&&e.start({default:m});const r=c[t];r&&(function(e,t){t&&e.ref!==t&&(e.ref?.delete(e),t.add(e),e.ref=t)}(e,r.ref),e.ref?e.queue.push(r):e.start(r))}))})),pa((()=>()=>{Gi(l.ctrls,(e=>e.stop(!0)))}));const v=g.map((e=>({...e})));return o?[v,o]:v}(1,r?e:[e],r?t||[]:t);return r||2==arguments.length?[n,o]:n}var jl=class extends al{constructor(e,t){super(),this.source=e,this.idle=!0,this._active=new Set,this.calc=zs(...t);const r=this._get(),n=Ia(r);xa(this,n.create(r))}advance(e){const t=this._get();qi(t,this.get())||(va(this).setValue(t),this._onChange(t,this.idle)),!this.idle&&Pl(this._active)&&Wl(this)}_get(){const e=Ui.arr(this.source)?this.source.map(Vs):Qi(Vs(this.source));return this.calc(...e)}_start(){this.idle&&!Pl(this._active)&&(this.idle=!1,Gi(wa(this),(e=>{e.done=!1})),Si.skipAnimation?(Di.batchedUpdates((()=>this.advance())),Wl(this)):cs.start(this))}_attach(){let e=1;Gi(Qi(this.source),(t=>{Ns(t)&&Zs(t,this),il(t)&&(t.idle||this._active.add(t),e=Math.max(e,t.priority+1))})),this.priority=e,this._start()}_detach(){Gi(Qi(this.source),(e=>{Ns(e)&&Qs(e,this)})),this._active.clear(),Wl(this)}eventObserved(e){"change"==e.type?e.idle?this.advance():(this._active.add(e.parent),this._start()):"idle"==e.type?this._active.delete(e.parent):"priority"==e.type&&(this.priority=Qi(this.source).reduce(((e,t)=>Math.max(e,(il(t)?t.priority:0)+1)),0))}};function Ll(e){return!1!==e.idle}function Pl(e){return!e.size||Array.from(e).every(Ll)}function Wl(e){e.idle||(e.idle=!0,Gi(wa(e),(e=>{e.done=!0})),Us(e,{type:"idle",parent:e}))}Si.assign({createStringInterpolator:aa,to:(e,t)=>new jl(e,t)});var Nl=/^--/;function Vl(e,t){return null==t||"boolean"==typeof t||""===t?"":"number"!=typeof t||0===t||Nl.test(e)||Ul.hasOwnProperty(e)&&Ul[e]?(""+t).trim():t+"px"}var Yl={};var Ul={animationIterationCount:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},ql=["Webkit","Ms","Moz","O"];Ul=Object.keys(Ul).reduce(((e,t)=>(ql.forEach((r=>e[((e,t)=>e+t.charAt(0).toUpperCase()+t.substring(1))(r,t)]=e[t])),e)),Ul);var Gl=/^(matrix|translate|scale|rotate|skew)/,Zl=/^(translate)/,Ql=/^(rotate|skew)/,Xl=(e,t)=>Ui.num(e)&&0!==e?e+t:e,Kl=(e,t)=>Ui.arr(e)?e.every((e=>Kl(e,t))):Ui.num(e)?e===t:parseFloat(e)===t,Jl=class extends Sa{constructor({x:e,y:t,z:r,...n}){const o=[],i=[];(e||t||r)&&(o.push([e||0,t||0,r||0]),i.push((e=>[`translate3d(${e.map((e=>Xl(e,"px"))).join(",")})`,Kl(e,0)]))),Zi(n,((e,t)=>{if("transform"===t)o.push([e||""]),i.push((e=>[e,""===e]));else if(Gl.test(t)){if(delete n[t],Ui.und(e))return;const r=Zl.test(t)?"px":Ql.test(t)?"deg":"";o.push(Qi(e)),i.push("rotate3d"===t?([e,t,n,o])=>[`rotate3d(${e},${t},${n},${Xl(o,r)})`,Kl(o,0)]:e=>[`${t}(${e.map((e=>Xl(e,r))).join(",")})`,Kl(e,t.startsWith("scale")?1:0)])}})),o.length&&(n.transform=new ed(o,i)),super(n)}},ed=class extends qs{constructor(e,t){super(),this.inputs=e,this.transforms=t,this._value=null}get(){return this._value||(this._value=this._get())}_get(){let e="",t=!0;return Gi(this.inputs,((r,n)=>{const o=Vs(r[0]),[i,s]=this.transforms[n](Ui.arr(o)?o:r.map(Vs));e+=" "+i,t=t&&s})),t?"none":e}observerAdded(e){1==e&&Gi(this.inputs,(e=>Gi(e,(e=>Ns(e)&&Zs(e,this)))))}observerRemoved(e){0==e&&Gi(this.inputs,(e=>Gi(e,(e=>Ns(e)&&Qs(e,this)))))}eventObserved(e){"change"==e.type&&(this._value=null),Us(this,e)}};Si.assign({batchedUpdates:D,createStringInterpolator:aa,colors:{transparent:0,aliceblue:4042850303,antiquewhite:4209760255,aqua:16777215,aquamarine:2147472639,azure:4043309055,beige:4126530815,bisque:4293182719,black:255,blanchedalmond:4293643775,blue:65535,blueviolet:2318131967,brown:2771004159,burlywood:3736635391,burntsienna:3934150143,cadetblue:1604231423,chartreuse:2147418367,chocolate:3530104575,coral:4286533887,cornflowerblue:1687547391,cornsilk:4294499583,crimson:3692313855,cyan:16777215,darkblue:35839,darkcyan:9145343,darkgoldenrod:3095792639,darkgray:2846468607,darkgreen:6553855,darkgrey:2846468607,darkkhaki:3182914559,darkmagenta:2332068863,darkolivegreen:1433087999,darkorange:4287365375,darkorchid:2570243327,darkred:2332033279,darksalmon:3918953215,darkseagreen:2411499519,darkslateblue:1211993087,darkslategray:793726975,darkslategrey:793726975,darkturquoise:13554175,darkviolet:2483082239,deeppink:4279538687,deepskyblue:12582911,dimgray:1768516095,dimgrey:1768516095,dodgerblue:512819199,firebrick:2988581631,floralwhite:4294635775,forestgreen:579543807,fuchsia:4278255615,gainsboro:3705462015,ghostwhite:4177068031,gold:4292280575,goldenrod:3668254975,gray:2155905279,green:8388863,greenyellow:2919182335,grey:2155905279,honeydew:4043305215,hotpink:4285117695,indianred:3445382399,indigo:1258324735,ivory:4294963455,khaki:4041641215,lavender:3873897215,lavenderblush:4293981695,lawngreen:2096890111,lemonchiffon:4294626815,lightblue:2916673279,lightcoral:4034953471,lightcyan:3774873599,lightgoldenrodyellow:4210742015,lightgray:3553874943,lightgreen:2431553791,lightgrey:3553874943,lightpink:4290167295,lightsalmon:4288707327,lightseagreen:548580095,lightskyblue:2278488831,lightslategray:2005441023,lightslategrey:2005441023,lightsteelblue:2965692159,lightyellow:4294959359,lime:16711935,limegreen:852308735,linen:4210091775,magenta:4278255615,maroon:2147483903,mediumaquamarine:1724754687,mediumblue:52735,mediumorchid:3126187007,mediumpurple:2473647103,mediumseagreen:1018393087,mediumslateblue:2070474495,mediumspringgreen:16423679,mediumturquoise:1221709055,mediumvioletred:3340076543,midnightblue:421097727,mintcream:4127193855,mistyrose:4293190143,moccasin:4293178879,navajowhite:4292783615,navy:33023,oldlace:4260751103,olive:2155872511,olivedrab:1804477439,orange:4289003775,orangered:4282712319,orchid:3664828159,palegoldenrod:4008225535,palegreen:2566625535,paleturquoise:2951671551,palevioletred:3681588223,papayawhip:4293907967,peachpuff:4292524543,peru:3448061951,pink:4290825215,plum:3718307327,powderblue:2967529215,purple:2147516671,rebeccapurple:1714657791,red:4278190335,rosybrown:3163525119,royalblue:1097458175,saddlebrown:2336560127,salmon:4202722047,sandybrown:4104413439,seagreen:780883967,seashell:4294307583,sienna:2689740287,silver:3233857791,skyblue:2278484991,slateblue:1784335871,slategray:1887473919,slategrey:1887473919,snow:4294638335,springgreen:16744447,steelblue:1182971135,tan:3535047935,teal:8421631,thistle:3636451583,tomato:4284696575,turquoise:1088475391,violet:4001558271,wheat:4125012991,white:4294967295,whitesmoke:4126537215,yellow:4294902015,yellowgreen:2597139199}});var td=((e,{applyAnimatedValues:t=()=>!1,createAnimatedStyle:r=e=>new Sa(e),getComponentProps:n=e=>e}={})=>{const o={applyAnimatedValues:t,createAnimatedStyle:r,getComponentProps:n},i=e=>{const t=za(e)||"Anonymous";return(e=Ui.str(e)?i[e]||(i[e]=Ta(e,o)):e[Aa]||(e[Aa]=Ta(e,o))).displayName=`Animated(${t})`,e};return Zi(e,((t,r)=>{Ui.arr(e)&&(r=za(t)),i[r]=i(t)})),{animated:i}})(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"],{applyAnimatedValues:function(e,t){if(!e.nodeType||!e.setAttribute)return!1;const r="filter"===e.nodeName||e.parentNode&&"filter"===e.parentNode.nodeName,{style:n,children:o,scrollTop:i,scrollLeft:s,viewBox:a,...l}=t,d=Object.values(l),c=Object.keys(l).map((t=>r||e.hasAttribute(t)?t:Yl[t]||(Yl[t]=t.replace(/([A-Z])/g,(e=>"-"+e.toLowerCase())))));void 0!==o&&(e.textContent=o);for(const t in n)if(n.hasOwnProperty(t)){const r=Vl(t,n[t]);Nl.test(t)?e.style.setProperty(t,r):e.style[t]=r}c.forEach(((t,r)=>{e.setAttribute(t,d[r])})),void 0!==i&&(e.scrollTop=i),void 0!==s&&(e.scrollLeft=s),void 0!==a&&e.setAttribute("viewBox",a)},createAnimatedStyle:e=>new Jl(e),getComponentProps:({scrollTop:e,scrollLeft:t,...r})=>r}),rd=td.animated;const nd=x.div`
    display: inline-block;
    position: relative;
    width: ${({$size:e})=>e?`${e}px`:"1em"};
    height: ${({$size:e})=>e?`${e}px`:"1em"};
    color: ${e=>e.$color||"currentColor"};
`,od=$`
	0% {
	  transform: rotate(0deg);
	}
	100% {
	  transform: rotate(360deg);
	}
`,id=x.div`
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
    animation: ${od} 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
`,sd=x(id)`
    animation-delay: -0.45s;
`,ad=x(id)`
    animation-delay: -0.3s;
`,ld=x(id)`
    animation-delay: -0.15s;
`,dd=({color:r,className:n,size:o})=>e(nd,{className:n,$size:o,$color:r,"data-testid":"component-loading-spinner",children:[t(id,{id:"inner1"}),t(sd,{id:"inner2"}),t(ad,{id:"inner3"}),t(ld,{id:"inner4"})]}),cd={Button:{"button-radius":Mn.md,"button-default-colour-bg":un["bg-primary"],"button-default-colour-bg-hover":un["bg-primary-hover"],"button-default-colour-text":un["text-inverse"],"button-secondary-colour-border":un["border-primary"],"button-secondary-colour-text":un["text-primary"],"button-light-colour-text":un["text-primary"],"button-link-colour-text":un["text-primary"]}},ud={collections:{default:{Button:{"button-radius":Mn.sm,"button-default-colour-bg":un["bg-primary"],"button-default-colour-bg-hover":un["bg-primary-hover"],"button-default-colour-text":un["text-inverse"],"button-secondary-colour-border":un["border-primary"],"button-secondary-colour-text":un["text-primary"],"button-light-colour-text":un["text-primary"],"button-link-colour-text":un["text-primary"]}},pa:{Button:{"button-radius":Mn.full,"button-default-colour-bg":un["bg-primary"],"button-default-colour-bg-hover":un["bg-primary-hover"],"button-default-colour-text":un["text-inverse"],"button-secondary-colour-border":un["border-primary"],"button-secondary-colour-text":un["text-primary"],"button-light-colour-text":un["text-primary"],"button-link-colour-text":un["text-primary"]}},a11yplayground:cd},defaultValue:"default"},hd=(e,t)=>r=>{var n,o;const i=r.theme,s=Hr(ud,null==i?void 0:i.componentScheme);return gd((null===(o=null===(n=null==i?void 0:i.componentOverrides)||void 0===n?void 0:n[e])||void 0===o?void 0:o[t])||s[e][t],r)},gd=(e,t)=>{switch(typeof e){case"function":return e(t);case"number":return e+"px";case"string":return e}},md=hd("Button","button-radius"),pd=hd("Button","button-default-colour-bg"),fd=hd("Button","button-default-colour-bg-hover"),bd=hd("Button","button-default-colour-text"),yd=hd("Button","button-secondary-colour-border"),vd=hd("Button","button-secondary-colour-text"),xd=hd("Button","button-light-colour-text"),wd=hd("Button","button-link-colour-text"),$d=x.button`
    padding: ${Vn["spacing-8"]} ${Vn["spacing-16"]};
    min-width: 4rem;
    border: ${Nn["width-010"]} ${Nn.solid} transparent;
    transition: all ${Wn["duration-250"]} ${Wn["ease-default"]};
    border-radius: ${md};
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;

    // -----------------------------------------------------------------------------
    // BUTTON STYLE + TEXT COLOR
    // -----------------------------------------------------------------------------
    ${e=>{switch(e.$buttonStyle){case"secondary":return w`
                    background-color: ${Ln.Primitive.white};
                    border-color: ${e.$buttonIsDanger?Ln["border-error-strong"]:yd};

                    color: ${e.$buttonIsDanger?Ln["text-error"]:vd};

                    &:hover,
                    &:active {
                        background-color: ${Ln["bg-hover-neutral"]};
                    }
                `;case"light":return w`
                    background-color: ${Ln.bg};
                    border-color: ${Ln.border};

                    color: ${e.$buttonIsDanger?Ln["text-error"]:xd};

                    &:hover,
                    &:active {
                        background-color: ${Ln["bg-hover-neutral"]};
                    }
                `;case"link":return w`
                    background-color: transparent;

                    color: ${e.$buttonIsDanger?Ln["text-error"]:wd};
                    &:hover,
                    &:active {
                        background-color: ${Ln["bg-hover-neutral"]};
                    }
                `;case"disabled":return w`
                    background-color: ${Ln["bg-disabled"]};

                    cursor: not-allowed;

                    &:hover {
                        box-shadow: none;
                    }

                    color: ${Ln["text-disabled"]};
                `;default:return w`
                    background-color: ${e.$buttonIsDanger?Ln["bg-error-strong"]:pd};};

                    ${qn.MaxWidth.sm} {
                        width: 100%;
                    }

                    color: ${bd}};

                    &:hover,
                    &:active {
                        background-color: ${e.$buttonIsDanger?Ln["bg-error-strong-hover"]:fd}
                        };
                    }
                `}}}

    // -----------------------------------------------------------------------------
	// BUTTON SIZE + TEXT SIZE
	// -----------------------------------------------------------------------------
	${e=>{switch(e.$buttonSizeStyle){case"small":return w`
                    height: 2.5rem;
                    ${Pn["body-md-semibold"]}

                    ${qn.MaxWidth.xxs} {
                        height: auto;
                    }
                `;case"large":return w`
                    height: 4rem;
                    ${Pn["heading-md-semibold"]}

                    ${qn.MaxWidth.xxs} {
                        height: auto;
                    }
                `;default:return w`
                    height: 3rem;
                    ${Pn["heading-xs-semibold"]}

                    ${qn.MaxWidth.xxs} {
                        height: auto;
                    }
                `}}}
`,Fd=x(dd)`
    margin-right: 0.5rem;
`,Cd=(r,n)=>{const{children:o,disabled:i=!1,loading:s=!1,styleType:a="default",danger:l=!1}=r,d=oe(r,["children","disabled","loading","styleType","danger"]),c={$buttonStyle:i?"disabled":a,$buttonSizeStyle:"default",$buttonIsDanger:l};return e($d,Object.assign({ref:n,"data-testid":d["data-testid"]||"button",disabled:i},c,d,{children:[s&&t(Fd,{}),t("span",{children:o})]}))};Cd.displayName="Button.Default";const Ed=(r,n)=>{const{children:o,disabled:i=!1,loading:s=!1,styleType:a="default",danger:l=!1}=r,d=oe(r,["children","disabled","loading","styleType","danger"]),c={$buttonStyle:i?"disabled":a,$buttonSizeStyle:"small",$buttonIsDanger:l};return e($d,Object.assign({ref:n,"data-testid":d["data-testid"]||"button",disabled:i},c,d,{children:[s&&t(Fd,{}),t("span",{children:o})]}))};Ed.displayName="Button.Small";const Sd=(r,n)=>{const{children:o,disabled:i=!1,loading:s=!1,styleType:a="default",danger:l=!1}=r,d=oe(r,["children","disabled","loading","styleType","danger"]),c={$buttonStyle:i?"disabled":a,$buttonSizeStyle:"large",$buttonIsDanger:l};return e($d,Object.assign({ref:n,"data-testid":d["data-testid"]||"button",disabled:i},c,d,{children:[s&&t(Fd,{}),t("span",{children:o})]}))};Sd.displayName="Button.Large";const kd={Default:o.forwardRef(Cd),Small:o.forwardRef(Ed),Large:o.forwardRef(Sd)};var Dd={exports:{}};Dd.exports=function(){var e={LTS:"h:mm:ss A",LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D, YYYY",LLL:"MMMM D, YYYY h:mm A",LLLL:"dddd, MMMM D, YYYY h:mm A"},t=/(\[[^[]*\])|([-_:/.,()\s]+)|(A|a|YYYY|YY?|MM?M?M?|Do|DD?|hh?|HH?|mm?|ss?|S{1,3}|z|ZZ?)/g,r=/\d\d/,n=/\d\d?/,o=/\d*[^-_:/,()\s\d]+/,i={},s=function(e){return(e=+e)+(e>68?1900:2e3)},a=function(e){return function(t){this[e]=+t}},l=[/[+-]\d\d:?(\d\d)?|Z/,function(e){(this.zone||(this.zone={})).offset=function(e){if(!e)return 0;if("Z"===e)return 0;var t=e.match(/([+-]|\d\d)/g),r=60*t[1]+(+t[2]||0);return 0===r?0:"+"===t[0]?-r:r}(e)}],d=function(e){var t=i[e];return t&&(t.indexOf?t:t.s.concat(t.f))},c=function(e,t){var r,n=i.meridiem;if(n){for(var o=1;o<=24;o+=1)if(e.indexOf(n(o,0,t))>-1){r=o>12;break}}else r=e===(t?"pm":"PM");return r},u={A:[o,function(e){this.afternoon=c(e,!1)}],a:[o,function(e){this.afternoon=c(e,!0)}],S:[/\d/,function(e){this.milliseconds=100*+e}],SS:[r,function(e){this.milliseconds=10*+e}],SSS:[/\d{3}/,function(e){this.milliseconds=+e}],s:[n,a("seconds")],ss:[n,a("seconds")],m:[n,a("minutes")],mm:[n,a("minutes")],H:[n,a("hours")],h:[n,a("hours")],HH:[n,a("hours")],hh:[n,a("hours")],D:[n,a("day")],DD:[r,a("day")],Do:[o,function(e){var t=i.ordinal,r=e.match(/\d+/);if(this.day=r[0],t)for(var n=1;n<=31;n+=1)t(n).replace(/\[|\]/g,"")===e&&(this.day=n)}],M:[n,a("month")],MM:[r,a("month")],MMM:[o,function(e){var t=d("months"),r=(d("monthsShort")||t.map((function(e){return e.slice(0,3)}))).indexOf(e)+1;if(r<1)throw new Error;this.month=r%12||r}],MMMM:[o,function(e){var t=d("months").indexOf(e)+1;if(t<1)throw new Error;this.month=t%12||t}],Y:[/[+-]?\d+/,a("year")],YY:[r,function(e){this.year=s(e)}],YYYY:[/\d{4}/,a("year")],Z:l,ZZ:l};function h(r){var n,o;n=r,o=i&&i.formats;for(var s=(r=n.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g,(function(t,r,n){var i=n&&n.toUpperCase();return r||o[n]||e[n]||o[i].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g,(function(e,t,r){return t||r.slice(1)}))}))).match(t),a=s.length,l=0;l<a;l+=1){var d=s[l],c=u[d],h=c&&c[0],g=c&&c[1];s[l]=g?{regex:h,parser:g}:d.replace(/^\[|\]$/g,"")}return function(e){for(var t={},r=0,n=0;r<a;r+=1){var o=s[r];if("string"==typeof o)n+=o.length;else{var i=o.regex,l=o.parser,d=e.slice(n),c=i.exec(d)[0];l.call(t,c),e=e.replace(c,"")}}return function(e){var t=e.afternoon;if(void 0!==t){var r=e.hours;t?r<12&&(e.hours+=12):12===r&&(e.hours=0),delete e.afternoon}}(t),t}}return function(e,t,r){r.p.customParseFormat=!0,e&&e.parseTwoDigitYear&&(s=e.parseTwoDigitYear);var n=t.prototype,o=n.parse;n.parse=function(e){var t=e.date,n=e.utc,s=e.args;this.$u=n;var a=s[1];if("string"==typeof a){var l=!0===s[2],d=!0===s[3],c=l||d,u=s[2];d&&(u=s[2]),i=this.$locale(),!l&&u&&(i=r.Ls[u]),this.$d=function(e,t,r){try{if(["x","X"].indexOf(t)>-1)return new Date(("X"===t?1e3:1)*e);var n=h(t)(e),o=n.year,i=n.month,s=n.day,a=n.hours,l=n.minutes,d=n.seconds,c=n.milliseconds,u=n.zone,g=new Date,m=s||(o||i?1:g.getDate()),p=o||g.getFullYear(),f=0;o&&!i||(f=i>0?i-1:g.getMonth());var b=a||0,y=l||0,v=d||0,x=c||0;return u?new Date(Date.UTC(p,f,m,b,y,v,x+60*u.offset*1e3)):r?new Date(Date.UTC(p,f,m,b,y,v,x)):new Date(p,f,m,b,y,v,x)}catch(e){return new Date("")}}(t,a,n),this.init(),u&&!0!==u&&(this.$L=this.locale(u).$L),c&&t!=this.format(a)&&(this.$d=new Date("")),i={}}else if(a instanceof Array)for(var g=a.length,m=1;m<=g;m+=1){s[1]=a[m-1];var p=r.apply(this,s);if(p.isValid()){this.$d=p.$d,this.$L=p.$L,this.init();break}m===g&&(this.$d=new Date(""))}else o.call(this,e)}}}();var Id=ae(Dd.exports),Td={exports:{}};Td.exports=function(e,t,r){t.prototype.isBetween=function(e,t,n,o){var i=r(e),s=r(t),a="("===(o=o||"()")[0],l=")"===o[1];return(a?this.isAfter(i,n):!this.isBefore(i,n))&&(l?this.isBefore(s,n):!this.isAfter(s,n))||(a?this.isBefore(i,n):!this.isAfter(i,n))&&(l?this.isAfter(s,n):!this.isBefore(s,n))}};var Bd=ae(Td.exports),Ad={exports:{}};Ad.exports=function(e,t){t.prototype.isSameOrAfter=function(e,t){return this.isSame(e,t)||this.isAfter(e,t)}};var zd=ae(Ad.exports),Od={exports:{}};Od.exports=function(e,t){t.prototype.isSameOrBefore=function(e,t){return this.isSame(e,t)||this.isBefore(e,t)}};var Md,_d,Rd,Hd=ae(Od.exports),jd={exports:{}},Ld=ae(jd.exports=(Md={year:0,month:1,day:2,hour:3,minute:4,second:5},_d={},function(e,t,r){var n,o=function(e,t,r){void 0===r&&(r={});var n=new Date(e),o=function(e,t){void 0===t&&(t={});var r=t.timeZoneName||"short",n=e+"|"+r,o=_d[n];return o||(o=new Intl.DateTimeFormat("en-US",{hour12:!1,timeZone:e,year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit",timeZoneName:r}),_d[n]=o),o}(t,r);return o.formatToParts(n)},i=function(e,t){for(var n=o(e,t),i=[],s=0;s<n.length;s+=1){var a=n[s],l=a.type,d=a.value,c=Md[l];c>=0&&(i[c]=parseInt(d,10))}var u=i[3],h=24===u?0:u,g=i[0]+"-"+i[1]+"-"+i[2]+" "+h+":"+i[4]+":"+i[5]+":000",m=+e;return(r.utc(g).valueOf()-(m-=m%1e3))/6e4},s=t.prototype;s.tz=function(e,t){void 0===e&&(e=n);var o=this.utcOffset(),i=this.toDate(),s=i.toLocaleString("en-US",{timeZone:e}),a=Math.round((i-new Date(s))/1e3/60),l=r(s,{locale:this.$L}).$set("millisecond",this.$ms).utcOffset(15*-Math.round(i.getTimezoneOffset()/15)-a,!0);if(t){var d=l.utcOffset();l=l.add(o-d,"minute")}return l.$x.$timezone=e,l},s.offsetName=function(e){var t=this.$x.$timezone||r.tz.guess(),n=o(this.valueOf(),t,{timeZoneName:e}).find((function(e){return"timezonename"===e.type.toLowerCase()}));return n&&n.value};var a=s.startOf;s.startOf=function(e,t){if(!this.$x||!this.$x.$timezone)return a.call(this,e,t);var n=r(this.format("YYYY-MM-DD HH:mm:ss:SSS"),{locale:this.$L});return a.call(n,e,t).tz(this.$x.$timezone,!0)},r.tz=function(e,t,o){var s=o&&t,a=o||t||n,l=i(+r(),a);if("string"!=typeof e)return r(e).tz(a);var d=function(e,t,r){var n=e-60*t*1e3,o=i(n,r);if(t===o)return[n,t];var s=i(n-=60*(o-t)*1e3,r);return o===s?[n,o]:[e-60*Math.min(o,s)*1e3,Math.max(o,s)]}(r.utc(e,s).valueOf(),l,a),c=d[0],u=d[1],h=r(c).utcOffset(u);return h.$x.$timezone=a,h},r.tz.guess=function(){return Intl.DateTimeFormat().resolvedOptions().timeZone},r.tz.setDefault=function(e){n=e}}));Eo.extend(Bd),Eo.extend(Hd),Eo.extend(zd),Eo.extend(Id),Eo.extend(Ld),function(e){e.generateDays=e=>{const t=e.startOf("month"),r=Eo(t).startOf("week");return Pd(r).map((e=>Wd(e)))},e.generateDaysForCurrentWeek=e=>{const t=e.startOf("week");return Wd(t)},e.generateMonths=e=>{const t=[];for(let r=0;r<12;r++){const n=e.month(r);t.push(Eo(n))}return t},e.generateDecadeOfYears=e=>{const t=e.year(),r=10*Math.floor(t/10),n=e.year(r),o=[n.subtract(1,"year"),n];for(let e=1;e<11;e++)o.push(n.add(e,"year"));return o},e.getStartEndDecade=e=>{const t=10*Math.floor(+e.format("YYYY")/10);return{beginDecade:t,endDecade:+Eo(`${t+9}-01-01`).format("YYYY")}},e.convertTo12HourFormat=e=>{const t=Eo(e,"HH:mm");return t.isValid()?t.format("h:mm a"):""},e.isWithinRange=(e,t,r,n="day")=>!t&&!r||(t&&r?e.isBetween(t,r,n,"[]"):t?e.isSameOrAfter(t,n):e.isSameOrBefore(r,n)),e.isPreviousMonthWithinRange=(t,r)=>e.isWithinRange(t.subtract(1,"month"),r,void 0,"month"),e.isPreviousYearWithinRange=(t,r)=>e.isWithinRange(t.subtract(1,"year"),r,void 0,"year"),e.isPreviousDecadeWithinRange=(t,r)=>{const{beginDecade:n}=e.getStartEndDecade(t);return e.isWithinRange(t.year(n).subtract(1,"year"),r,void 0,"year")},e.isNextMonthWithinRange=(t,r)=>e.isWithinRange(t.add(1,"month"),void 0,r,"month"),e.isNextYearWithinRange=(t,r)=>e.isWithinRange(t.add(1,"year"),void 0,r,"year"),e.isNextDecadeWithinRange=(t,r)=>{const{endDecade:n}=e.getStartEndDecade(t);return e.isWithinRange(t.year(n).add(1,"year"),void 0,r,"year")},e.getWeekStartEnd=e=>({start:e.startOf("week").format("YYYY-MM-DD"),end:e.endOf("week").format("YYYY-MM-DD")}),e.getFixedRangeStartEnd=(e,t)=>({start:e.format("YYYY-MM-DD"),end:e.add(t-1,"day").format("YYYY-MM-DD")}),e.isDisabledDay=(t,r,n,o)=>{const i=e.isWithinRange(t,n?Eo(n):void 0,o?Eo(o):void 0),s=r&&r.includes(t.format("YYYY-MM-DD"));return!i||!!s}}(Rd||(Rd={}));const Pd=e=>{const t=[e];for(let r=1;r<6;r++){const n=e.add(r,"week");t.push(n)}return t},Wd=e=>{const t=[];for(let r=0;r<7;r++){const n=e.add(r,"day");t.push(n)}return t},Nd=[1,3,5,7,8,10,12],Vd=[4,6,9,11];var Yd,Ud,qd;function Gd(e){const t=i(null);return h((()=>{t.current=e}),[e]),m(((...e)=>{var r;return null===(r=t.current)||void 0===r?void 0:r.call(t,...e)}),[])}!function(e){e.clampDay=(t,r,n)=>{const o=parseInt(t),i=parseInt(r),s=parseInt(n);return 0==o?"1":Nd.includes(i)?Math.min(o,31).toString():Vd.includes(i)?Math.min(o,30).toString():2===i?e.isLeapYear(s)?Math.min(o,29).toString():Math.min(o,28).toString():t},e.clampMonth=e=>{const t=parseInt(e);return 0==t?"1":t>12?"12":e},e.isLeapYear=e=>e%4==0&&e%100!=0||e%400==0,e.getTimeDiffInMinutes=(e,t,r="HH:mm")=>{const n=Eo(e,r);return Eo(t,r).diff(n,"minute")},e.toDayjs=e=>e?Eo(e):Eo(),e.addMinutesToTime=(e,t,r="HH:mm")=>Eo(e,r).add(t,"minutes").format(r),e.isSame=(e,t,r="day")=>Eo(e).isSame(Eo(t),r)}(Yd||(Yd={})),function(e){e.isDateDisabled=(e,t)=>{const{disabledDates:r,minDate:n,maxDate:o}=t;return!!(e&&r&&r.length&&r.includes(e))||(!(!n||!Eo(e).isBefore(n,"day"))||!(!o||!Eo(e).isAfter(o,"day")))},e.sanitizeInput=e=>{if(e){if(Eo(e).isValid())return e}return""}}(Ud||(Ud={})),function(e){e.generate=()=>Math.random().toString(36).substring(2,9)}(qd||(qd={}));const Zd=e=>{const t=(e=>{const t=i(e),r=i();return s((()=>{r.current=t.current,t.current=e}),[e]),r.current})(e);return t!==e},Qd=e=>{const{textSize:t}=e||{};return w`
        // Text styling
        ${t&&Pn[`${t}-regular`]}

        strong {
            font-weight: ${Pn.Spec["weight-semibold"]};
            ${t&&Pn[`${t}-semibold`]};
        }

        p {
            margin: 0;
        }

        // Link styling
        a {
            font-weight: ${Pn.Spec["weight-semibold"]};
            ${t&&Pn[`${t}-semibold`]}
            color: ${Ln.hyperlink};
            text-decoration: none;

            svg {
                color: ${Ln["icon-primary"]};
                height: 1lh;
                width: 1em;
                margin-left: 0.4rem;
                vertical-align: middle;
            }

            :hover,
            :active,
            :visited,
            :focus {
                color: ${Ln["hyperlink-hover"]};

                svg {
                    color: ${Ln["icon-hover"]};
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
    `},Xd=e=>w`
    display: -webkit-box;
    -webkit-line-clamp: ${e};
    -webkit-box-orient: vertical;
    overflow: hidden;
`,Kd=(e,t,r=!1)=>w`
        ${Pn[`${e}-${t}`]}
        ${r?"margin-bottom: 1.05em;":"margin-bottom: 0;"}
    `,Jd=e=>{if(e)return w`
            ${Xd(e)}
        `},ec=(e,t)=>w`
    ${Kd(e,t.weight||"regular",t.paragraph)}
    ${((e=!1,t=!1,r)=>t?w`
            display: block;
            ${Jd(r)}
        `:e?w`
            display: inline;
        `:w`
            display: block;
            ${Jd(r)}
        `)(t.inline,t.paragraph,t.maxLines)}
    color: ${Ln.text};
`;var tc;!function(r){const n=(e,t,r)=>{const n=x(e).attrs((({inline:e})=>({as:e?"span":void 0})))`
            ${e=>ec(t,e)}
        `;return n.displayName=`Typography.${r}`,n};r.HeadingXXL=n("h1","heading-xxl","HeadingXXL"),r.HeadingXL=n("h2","heading-xl","HeadingXL"),r.HeadingLG=n("h3","heading-lg","HeadingLG"),r.HeadingMD=n("h4","heading-md","HeadingMD"),r.HeadingSM=n("h5","heading-sm","HeadingSM"),r.HeadingXS=n("h6","heading-xs","HeadingXS");const o=(e,t)=>{const r=x.p.attrs((({inline:e})=>({as:e?"span":void 0})))`
            ${t=>ec(e,t)}
        `;return r.displayName=`Typography.${t}`,r};r.BodyBL=o("body-baseline","BodyBL"),r.BodyMD=o("body-md","BodyMD"),r.BodySM=o("body-sm","BodySM"),r.BodyXS=o("body-xs","BodyXS");const i=(r,n)=>{const o=x.a`
            ${e=>w`
                ${Kd(r,e.weight||"regular")}
                color: ${Ln.hyperlink};
                text-decoration: none;

                :hover,
                :active,
                :focus {
                    color: ${Ln["text-hover"]};
                }
            `}
        `,i=r=>{var{external:n=!1,children:i}=r,s=oe(r,["external","children"]);return e(o,Object.assign({},s,{children:[i,n&&t(rc,{})]}))};return i.displayName=`Typography.${n}`,i};r.LinkBL=i("body-baseline","LinkBL"),r.LinkMD=i("body-md","LinkMD"),r.LinkSM=i("body-sm","LinkSM"),r.LinkXS=i("body-xs","LinkXS")}(tc||(tc={}));const rc=x(O)`
    height: 1lh;
    width: 1em;
    margin-left: 0.4em;
    vertical-align: middle;
`,nc=x.div`
    padding: ${Vn["spacing-8"]} ${Vn["spacing-16"]};
    display: flex;

    ${e=>{let t,r;switch(e.$type){case"error":t=Ln["bg-error"](e),r=Ln["border-error"](e);break;case"success":t=Ln["bg-success"](e),r=Ln["border-success"](e);break;case"warning":default:t=Ln["bg-warning"](e),r=Ln["border-warning"](e);break;case"info":t=Ln["bg-info"](e),r=Ln["border-info"](e);break;case"description":t=Ln["bg-strong"](e),r=Ln["border-strong"](e)}return w`
            background: ${t};
            border-left: ${Nn["width-020"]} ${Nn.solid}
                ${r};
        `}}

    color: ${Ln.text};
    ${e=>"small"===e.$sizeType?Qd({textSize:"body-sm"}):Qd({textSize:"body-md"})}
`,oc=x.div`
    display: flex;
    align-items: center;
    height: 1lh;
    margin-right: ${Vn["spacing-8"]};

    ${e=>{let t;const r="small"===e.$sizeType?"1.25rem":"1.5rem";switch(e.$type){case"error":t=Ln["icon-error"](e);break;case"success":t=Ln["icon-success"](e);break;case"warning":default:t=Ln["icon-warning"](e);break;case"info":t=Ln["icon-info"](e);break;case"description":t=Ln["icon-subtle"](e)}return w`
            svg {
                color: ${t};
                width: ${r};
                height: ${r};
            }
        `}}
`,ic=x(tc.LinkSM)`
    ${e=>"small"===e.$sizeType?w`
                ${Pn["body-sm-semibold"]}
                margin-top: ${Vn["spacing-4"]};
            `:w`
                ${Pn["body-md-semibold"]}
                margin-top: ${Vn["spacing-8"]};
            `}
    display: flex;
    align-items: center;
    align-self: flex-start;

    svg {
        height: 1rem;
        width: 1rem;
        margin-left: ${Vn["spacing-4"]};
    }
`,sc=x.div`
    display: flex;
    flex-direction: column;
    flex: 1;
    overflow-wrap: anywhere;
`,ac=x.div`
    display: flex;
    flex-direction: column;
    flex: 1;
    ${e=>{if(e.$showMore&&e.$hasActionLink)return w`
                margin-bottom: ${Vn["spacing-8"]};
            `}}
    ${e=>{const t="linear-gradient(to bottom, black 50%, transparent 100%)";if(!e.$showMore&&e.$maxCollapsedHeight)return`\n                max-height: ${e.$maxCollapsedHeight}px;\n\t\t\t\toverflow: hidden;\n                -webkit-mask-image: ${t};\n                mask-image: ${t};\n\t\t\t`}}
`,lc=x.button`
    ${e=>"small"===e.$sizeType?w`
                ${Pn["body-sm-semibold"]}
            `:w`
                ${Pn["body-md-semibold"]}
            `}

    display: flex;
    align-items: center;
    align-self: flex-start;
    gap: ${Vn["spacing-4"]};
    margin-top: ${Vn["spacing-8"]};

    cursor: pointer;
    user-select: none;
    border: none;
    background: transparent;

    color: ${Ln["text-primary"]};
`,dc=x(v)`
    transform: rotate(${e=>e.$expanded?180:0}deg);
    transition: transform ${Wn["duration-350"]} ${Wn["ease-standard"]};
`,cc=x.div`
    height: 1.625rem;
    width: 1.625rem;
    margin-right: 0.5rem;
    flex-shrink: 0;

    svg {
        height: 100%;
        width: 100%;
    }

    ${e=>e.$disabled?e.$active?w`
                    color: ${Ln["icon-selected-disabled"]};
                `:w`
                    color: ${Ln["icon-disabled-subtle"]};
                `:e.$active?w`
                color: ${Ln["icon-selected"]};
            `:w`
            color: ${Ln["icon-subtle"]};
        `};
`,uc=w`
    margin-bottom: ${e=>e.$bottomMargin||0}rem;

    // Counter matters
    counter-reset: list;

    li {
        font-weight: ${Pn.Spec["weight-regular"]};
        ${e=>e.$size&&Pn[`${e.$size}-regular`]}
        color: ${Ln.text};
    }

    // nested lists styling
    ol,
    ul {
        margin-top: 0.5rem;
        margin-bottom: 0.5rem;
    }
`,hc=x.ol`
    ${uc}

    margin-left: 3rem;

    ${qn.MaxWidth.lg} {
        margin-left: 2.5rem;
    }

    li {
        position: relative;
    }

    ${e=>{const{reversed:t}=e,r=e.$counterType||"decimal",n=e.$counterSeparator||")";return w`
            li:before {
                content: counter(list, ${r}) "${n}";
                counter-increment: ${t?"list -1":"list"};
                position: absolute;
                left: -2rem;
            }
        `}}

    ${e=>{const{reversed:t,start:r}=e;if(r){return w`
                counter-reset: list ${t?r+1:r-1};
            `}}}

    list-style-position: outside;
    list-style-type: none;

    ul > li:before {
        content: "";
    }
`,gc=x.ul`
    ${uc}

    margin-left: 2.5rem;
    list-style-type: ${e=>e.$bulletType||"disc"};
`,mc=e=>{var{size:r,bulletType:n,bottomMargin:o,children:i}=e,s=oe(e,["size","bulletType","bottomMargin","children"]);return t(gc,Object.assign({$size:r,$bulletType:n,$bottomMargin:o},s,{children:i}))};mc.displayName="TextList.Ul";const pc=e=>{var{size:r,counterType:n,counterSeparator:o,bottomMargin:i,children:s}=e,a=oe(e,["size","counterType","counterSeparator","bottomMargin","children"]);return t(hc,Object.assign({$size:r,$counterType:n,$counterSeparator:o,$bottomMargin:i},a,{children:s}))};pc.displayName="TextList.Ol";const fc=mc,bc=x.div`
    position: relative;
    display: inline-flex;
    min-width: 10.375rem;
    border-radius: 4px;
    border-width: 1px;
    border-style: solid;
    overflow: hidden;
    flex-direction: column;
    height: fit-content;
    background: ${Ln.bg};

    ${e=>{if(!e.$indicator)return w`
                justify-content: center;
            `}}

    // Container min width to fit content
    ${e=>{if(e.$useContentWidth)return w`
                min-width: unset;
            `}}

    // apply container border and header background color
    ${e=>"no-border"===e.$styleType?e.$error?e.$disabled?w`
                            border-color: ${Ln["border-error"]};
                        `:w`
                            border-color: ${Ln["border-error"]};

                            &:has(${$c}:hover) {
                                background: ${Ln["bg-hover-subtle"]};
                            }
                        `:e.$disabled?e.$selected?w`
                            border: none;
                            background: ${Ln["bg-selected-disabled"]};
                        `:w`
                            border: none;
                        `:e.$selected?w`
                        border: none;
                        background: ${Ln["bg-selected"]};

                        &:has(${$c}:hover) {
                            background: ${Ln["bg-selected-hover"]};

                            & ${vc} {
                                color: ${Ln["text-selected-hover"]};
                            }

                            & ${Bc} {
                                color: ${Ln["icon-selected-hover"]};
                            }
                        }
                    `:w`
                    border: none;

                    &:has(${$c}:hover) {
                        background: ${Ln["bg-hover-subtle"]};
                    }
                `:e.$error?e.$disabled?w`
                            border-color: ${Ln["border-error"]};
                        `:w`
                            border-color: ${Ln["border-error"]};

                            &:has(${$c}:hover) {
                                background: ${Ln["bg-hover-subtle"]};
                            }
                        `:e.$disabled?e.$selected?w`
                            border-color: ${Ln["border-selected-disabled"]};
                            background: ${Ln["bg-selected-disabled"]};
                        `:w`
                            border-color: ${Ln["border-disabled"]};
                            background: ${Ln["bg-disabled"]};
                        `:e.$selected?w`
                        border-color: ${Ln["border-selected"]};
                        background: ${Ln["bg-selected"]};

                        &:has(${$c}:hover) {
                            background: ${Ln["bg-selected-hover"]};

                            & ${vc} {
                                color: ${Ln["text-selected-hover"]};
                            }

                            & ${Bc} {
                                color: ${Ln["icon-selected-hover"]};
                            }
                        }
                    `:w`
                    border-color: ${Ln.border};

                    &:has(${$c}:hover) {
                        background: ${Ln["bg-hover-subtle"]};
                    }
                `}
`,yc=x.input`
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
`,vc=x.div`
    display: flex;
    flex-direction: column;
    overflow-wrap: anywhere;
    width: 100%;
    overflow: hidden;

    // apply header container text color
    ${e=>e.$disabled?e.$selected?w`
                    color: ${Ln["text-selected-disabled"]};
                `:w`
                    color: ${Ln["text-disabled"]};
                `:e.$selected?w`
                color: ${Ln["text-selected"]};
            `:w`
            color: ${Ln.text};
        `}
`,xc=x.label`
    ${Pn["body-baseline-regular"]}
    overflow: hidden;
    display: -webkit-box;
    text-overflow: ellipsis;
    -webkit-box-orient: vertical;
    overflow-wrap: break-word;
    -webkit-line-clamp: ${e=>{var t,r;return null!==(r=null===(t=e.$maxLines)||void 0===t?void 0:t.desktop)&&void 0!==r?r:"none"}};
    ${qn.MaxWidth.lg} {
        -webkit-line-clamp: ${e=>{var t,r;return null!==(r=null===(t=e.$maxLines)||void 0===t?void 0:t.tablet)&&void 0!==r?r:"none"}};
    }
    ${qn.MaxWidth.sm} {
        -webkit-line-clamp: ${e=>{var t,r;return null!==(r=null===(t=e.$maxLines)||void 0===t?void 0:t.mobile)&&void 0!==r?r:"none"}};
    }
`,wc=x.div`
    ${Pn["body-md-regular"]}
    margin-top: 0.5rem;

    z-index: 1; // forces sublabel to render above the input
    pointer-events: none; // to allow click events to be passed to the input

    strong,
    b {
        ${Pn["body-md-semibold"]}
    }
`,$c=x.div`
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
`,Fc=x.div`
    display: flex;
    height: 100%;
    width: 100%;
    position: relative;
    padding: ${e=>e.$addPadding?"0.6875rem 0rem 0.6875rem 1rem":"0.6875rem 1rem"};
`,Cc=x.button`
    color: ${e=>e.$disabled?Ln["text-disabled"]:Ln["text-error"]};
    white-space: nowrap;
    ${Pn["body-md-semibold"]}
    height: fit-content;
    padding: 0.6875rem 1rem 0.6875rem 0.5rem;
    border: none;
    background: none;

    cursor: ${e=>e.$disabled?"not-allowed":"pointer"};
`,Ec=x.button`
    color: ${e=>e.disabled?Ln["text-disabled"]:Ln["text-primary"]};
    ${Pn["body-baseline-semibold"]}
    display: flex;
    align-items: center;
    justify-content: flex-end;
    border: none;
    background-color: ${Ln.bg};
    cursor: ${e=>e.disabled?"not-allowed":"pointer"};
    padding: 0 1rem 0.6875rem 1rem;
    padding-top: ${e=>e.$paddingTopRequired?"0.6875rem":"0rem"};
    width: 100%;

    svg {
        width: 1em;
        height: 1em;
        margin-left: 0.5rem;
    }
`,Sc=x.div`
    width: 100%;
    color: ${e=>e.$disabled?Ln["text-disabled"]:Ln["text-error"]};
    border: none;
    background: ${Ln.bg};
    cursor: ${e=>e.$disabled?"not-allowed":"pointer"};
    padding: 0.6875rem 1rem 0.5rem 1rem;
`,kc=x((r=>{var{type:n,className:o,children:i,actionLink:l,actionLinkIcon:d,sizeType:c="default",showIcon:u=!1,customIcon:h,maxCollapsedHeight:g}=r,m=oe(r,["type","className","children","actionLink","actionLinkIcon","sizeType","showIcon","customIcon","maxCollapsedHeight"]);const[p,f]=a(!1),[b,y]=a(!1),{height:v,ref:x}=Ci();s((()=>{w()}),[g,v]);const w=()=>{f(!g),y($())},$=()=>!(!v||!g)&&v>g;return e(nc,{className:o,$type:n,$sizeType:c,"data-testid":m["data-testid"],children:[u&&t(oc,{$sizeType:c,$type:n,children:(()=>{if(n&&h)return h;switch(n){case"success":return t(z,{});case"warning":return t(B,{});case"error":return t(T,{});case"info":case"description":return t(A,{});default:return null}})()}),e(sc,{children:[e(ac,{$maxCollapsedHeight:$()?g:void 0,$showMore:p,$hasActionLink:!!l,children:[t("div",{ref:x,children:i}),l?e(ic,Object.assign({"data-testid":"action-link",$type:n,$sizeType:c},l,{children:[l.children,d||t(I,{})]})):null]}),b&&e(lc,{$sizeType:c,$type:n,type:"button",onClick:()=>f(!p),children:["Show ",p?"less":"more",t(dc,{$expanded:p})]})]})]})}))`
    width: 100%;
    user-select: none;
`,Dc=x.div`
    padding: 0 1rem;
    padding-top: 0.6875rem;
    padding-bottom: ${e=>e.$isFinalItem?"0.6875rem":"0.5rem"};
    background-color: ${Ln.bg};
    ${Qd({textSize:"body-md"})}

    ${e=>e.$disabled?w`
                color: ${Ln["text-disabled"]};
            `:e.$selected?w`
                color: ${Ln["text-selected"]};
            `:w`
                color: ${Ln.text};
            `}
`,Ic=x(tc.BodyMD)`
    color: ${e=>e.$disabled?Ln["text-disabled"]:Ln["text-error"]};
`,Tc=x(fc)`
    color: ${e=>e.$disabled?Ln["text-disabled"]:Ln["text-error"]};
`,Bc=x((({type:e,active:r=!1,disabled:n,className:o})=>{let i;switch(e){case"checkbox":i=t(r?j:H,{});break;case"radio":i=t(r?_:M,{});break;case"tick":i=t(L,{});break;case"cross":i=t(R,{});break;default:i=null}return t(cc,{className:o,$active:r,$disabled:n,children:i})}))`
    ${e=>e.$disabled?e.$selected?w`
                    color: ${Ln["icon-selected-disabled"]};
                `:w`
                    color: ${Ln["icon-disabled-subtle"]};
                `:e.$selected?w`
                color: ${Ln["icon-selected"]};
            `:w`
            color: ${Ln["icon-subtle"]};
        `};
`,Ac=x.button`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: ${Vn["spacing-24"]};
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

        ${({$highlight:e})=>e&&w`
                background-color: ${Ln["bg-hover-neutral"]};
            `}
    }
`,zc=o.forwardRef(((e,r)=>{var{children:n,focusHighlight:o=!0,focusOutline:i="none",type:s="button"}=e,a=oe(e,["children","focusHighlight","focusOutline","type"]);return t(Ac,Object.assign({ref:r,$outline:i,$highlight:o,type:s},a,{children:n}))})),Oc=x(rd.div)`
    position: absolute;
    top: calc(3rem + ${Vn["spacing-8"]});
    left: 0;
    overflow: hidden;
    z-index: 1;

    ${qn.MaxWidth.xxs} {
        max-width: 100%;
    }
`,Mc=x.div`
    position: relative;
    width: 100%;
    padding: ${Vn["spacing-8"]} ${Vn["spacing-20"]}
        ${Vn["spacing-24"]} ${Vn["spacing-20"]};
    display: flex;
    flex-direction: column;
    background: ${Ln.bg};
    border: ${Nn["width-010"]} ${Nn.solid} ${Ln.border};
    border-radius: ${Yn.sm};
`,_c=x.div`
    display: flex;
    align-items: center;
    justify-content: space-between;

    ${qn.MaxWidth.xxs} {
        flex-direction: column;
        width: 100%;
    }
`,Rc=x.div`
    display: flex;
    justify-content: flex-end;
    margin-top: ${Vn["spacing-16"]};
    gap: ${Vn["spacing-8"]} ${Vn["spacing-16"]};

    ${qn.MaxWidth.xxs} {
        flex-direction: column-reverse; // FIXME: this breaks tab focus
        margin-top: ${Vn["spacing-32"]};
    }
`,Hc=x.div`
    display: flex;
    align-items: center;
    margin-right: ${Vn["spacing-32"]};

    ${qn.MaxWidth.xxs} {
        margin-right: 0;
        width: 100%;
    }
`,jc=x.div`
    display: flex;
    gap: ${Vn["spacing-8"]};

    ${qn.MaxWidth.lg} {
        flex-direction: column;
    }

    ${qn.MaxWidth.xxs} {
        flex-direction: row;
        width: 100%;
    }
`,Lc=x.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    ${qn.MaxWidth.xxs} {
        width: 6rem;
    }
`,Pc=x(zc)`
    width: 5rem;
    padding: ${Vn["spacing-16"]} 0;
    color: ${Ln.icon};

    svg {
        height: 1rem;
        width: 1rem;
    }

    &:hover {
        color: ${Ln["icon-hover"]};
    }
`,Wc=x(tc.BodyBL)`
    flex-shrink: 0;
    width: 1.5rem;
    text-align: center;
`,Nc=x(mo)`
    height: calc(3rem - 2px);
    width: 5rem;
    display: flex;
    align-items: center;
    justify-content: center;

    ${qn.MaxWidth.xxs} {
        width: 100%;
    }
`,Vc=x(fo)`
    text-align: center;
    width: 100%;

    :focus::placeholder {
        color: transparent;
    }
`,Yc=x((({type:n="checkbox",indicator:o,checked:l,styleType:d="default",children:c,childrenMaxLines:u,subLabel:h,disabled:g,error:m,name:p,id:b,className:y,compositeSection:v,removable:x,onRemove:w,"data-testid":$,onChange:F,useContentWidth:S})=>{const{collapsible:k=!0,errors:D,children:I,initialExpanded:T}=v||{},[B,A]=a(l),[z,O]=a(!!T),M=f((()=>{const e=Array.isArray(D)&&(null==D?void 0:D.length)>0,t=!Array.isArray(D)&&!!D;return e||t}),[D]),[_]=a(qd.generate()),R=b?`${b}`:`tg-${_}`,H=i(null);s((()=>{A(l)}),[l]),s((()=>{B&&O(null==T||T)}),[B]);const j=()=>{g||O(!z)},L=()=>{g||!w||w()},P=()=>{let e;switch(n){case"yes":e="tick";break;case"no":e="cross";break;case"checkbox":case"radio":e=n}return t(Bc,{type:e,active:B,disabled:g,$selected:B,$disabled:g})},W=()=>{if(!h)return null;let e;return e="function"==typeof h?h():h,t(wc,{"data-id":"toggle-sublabel",children:e})},N=n=>e(r,{children:[t(Ic,{weight:"semibold",$disabled:g,children:"Error"}),t(Tc,{$disabled:g,children:null==n?void 0:n.map(((e,r)=>t("li",{id:`${R}-error-list-item-${r}`,children:t(Ic,{weight:"semibold",$disabled:g,children:e})},r)))})]});return e(bc,{$selected:B,$disabled:g,className:y,$styleType:d,$error:m,$indicator:o,$useContentWidth:S,id:b,"data-testid":$,children:[e($c,{id:`${R}-header-container`,$disabled:g,$error:m,$selected:B,$indicator:o,$styleType:d,children:[e(Fc,{$addPadding:x,children:[t(yc,{ref:H,name:p,id:`${R}-input`,type:"checkbox"===n?"checkbox":"radio","data-testid":"toggle-input",disabled:g,onChange:e=>{if(!g){if(F)return void F(e);switch(n){case"checkbox":A((e=>!e));break;case"radio":case"yes":case"no":B||A(!0)}}},checked:B}),o&&P(),e(vc,{$selected:B,$disabled:g,children:[t(xc,{htmlFor:`${R}-input`,"data-testid":`${R}-toggle-label`,$maxLines:u,children:c}),h&&W()]})]}),x&&t(Cc,{type:"button",$disabled:g,onClick:L,id:`${R}-remove-button`,children:"Remove"})]}),I&&e("div",{children:[(!k||z)&&t(Dc,{"data-id":"toggle-composite-children",$isFinalItem:!k,$disabled:g,children:I}),k&&!z&&M&&t(Sc,{$disabled:g,onClick:j,id:`${R}-error-alert`,children:t(kc,{type:g?"description":"error",className:y,showIcon:!0,children:Array.isArray(D)?N(D):D})}),k&&e(Ec,{$paddingTopRequired:!z&&!M,disabled:g,onClick:j,"data-testid":z?"collapse-button":"expand-button",children:[z?"Show less":"Show more",t(z?E:C,{"aria-hidden":!0})]})]})]})}))`
    min-width: 5rem;
    flex: 1;
`,Uc=x(kd.Small)`
    width: 7rem;

    ${qn.MaxWidth.sm} {
        flex: 1;
    }

    ${qn.MaxWidth.xxs} {
        width: 100%;
    }
`;var qc,Gc,Zc;!function(e){e.HOUR_UP="hour-up",e.HOUR_DOWN="hour-down",e.MINUTE_UP="minute-up",e.MINUTE_DOWN="minute-down"}(qc||(qc={})),function(e){e.HOUR="hour",e.MINUTE="minute"}(Gc||(Gc={})),function(e){e.AM="am",e.PM="pm"}(Zc||(Zc={}));const Qc=({id:r,value:n,show:o,format:l,onChange:d,onCancel:c})=>{var u;const h=Co.getTimeValues(l,n),[g,p]=a(h.hour),[f,b]=a(h.minute),[y,v]=a(h.period),x=i(null),w=i(null),$=Ci();s((()=>{if(o&&x.current&&x.current.focus(),o){const{hour:e,minute:t,period:r}=Co.getTimeValues(l,n);p(e),b(t),v(r)}}),[o,n,l]),s((()=>{const e=x.current,t=w.current;return e&&e.addEventListener("keydown",F),t&&t.addEventListener("keydown",F),()=>{e&&e.removeEventListener("keydown",F),t&&t.removeEventListener("keydown",F)}}),[]);const F=e=>{["Digit0","Digit1","Digit2","Digit3","Digit4","Digit5","Digit6","Digit7","Digit8","Digit9","Tab","Backspace","Delete","ArrowLeft","ArrowRight","ArrowUp","ArrowDown"].includes(e.code)||["Backspace","0","1","2","3","4","5","6","7","8","9"].includes(e.key)||e.preventDefault()},S=m((e=>{switch(e.currentTarget.name){case qc.MINUTE_UP:b(Co.updateMinutes(f,"add"));break;case qc.MINUTE_DOWN:b(Co.updateMinutes(f,"minus"));break;case qc.HOUR_UP:p(Co.updateHours(g,"add"));break;case qc.HOUR_DOWN:p(Co.updateHours(g,"minus"))}}),[g,f]),k=e=>{e.target.select()},D=e=>{const t=e.target.value;switch(e.target.name){case Gc.HOUR:t.length<=2&&p(t);break;case Gc.MINUTE:t.length<=2&&b(t)}},I=e=>{const t=parseInt(e.target.value);if(!isNaN(t))switch(e.target.name){case Gc.HOUR:{const r=t>23||t<0?h.hour:Co.convertHourTo12HourFormat(e.target.value);p(r);break}case Gc.MINUTE:{const r=t>59||t<0?h.minute:e.target.value;b($o.padValue(r));break}}},T=e=>{switch(e.target.name){case Zc.AM:v(Fo.AM);break;case Zc.PM:v(Fo.PM)}},B=e=>r?`${r}-${e}`:e,A=Hl({opacity:o?1:0,height:o?(null!==(u=$.height)&&void 0!==u?u:0)+32+2:0});return t(Oc,{"data-testid":"animated-dropdown-wrapper",style:A,children:e(Mc,{ref:$.ref,"data-testid":B("timepicker-dropdown"),inert:o?void 0:"",children:[e(_c,{children:[e(Hc,{children:[e(Lc,{children:[t(Pc,{"aria-label":"increase hour",name:qc.HOUR_UP,tabIndex:-1,onClick:S,"data-testid":B("hour-increment-button"),children:t(E,{})}),t(Nc,{children:t(Vc,{"aria-label":"hour",type:"number",name:Gc.HOUR,id:"hour",maxLength:2,pattern:"[0-9]{2}",ref:x,value:g,onFocus:k,onChange:D,onBlur:I,min:1,max:12,placeholder:"HH","data-testid":B("hour-input")})}),t(Pc,{"aria-label":"decrease hour",name:qc.HOUR_DOWN,tabIndex:-1,onClick:S,"data-testid":B("hour-decrement-button"),children:t(C,{})})]}),t(Wc,{children:":"}),e(Lc,{children:[t(Pc,{"aria-label":"increase minute",name:qc.MINUTE_UP,tabIndex:-1,onClick:S,"data-testid":B("minute-increment-button"),children:t(E,{})}),t(Nc,{children:t(Vc,{"aria-label":"minute",type:"number",name:Gc.MINUTE,id:"minute",maxLength:2,pattern:"[0-9]{2}",ref:w,value:f,onChange:D,onBlur:I,onFocus:k,min:0,max:59,placeholder:"MM","data-testid":B("minute-input")})}),t(Pc,{"aria-label":"decrease minute",name:qc.MINUTE_DOWN,tabIndex:-1,onClick:S,"data-testid":B("minute-decrement-button"),children:t(C,{})})]})]}),e(jc,{children:[t(Yc,{checked:y===Fo.AM,name:Zc.AM,type:"radio",onChange:T,"data-testid":B("am-toggle"),"aria-label":"AM",children:"AM"}),t(Yc,{checked:y===Fo.PM,name:Zc.PM,type:"radio",onChange:T,"data-testid":B("pm-toggle"),"aria-label":"PM",children:"PM"})]})]}),e(Rc,{children:[t(Uc,{"aria-label":"close selector",type:"button",styleType:"secondary",onClick:c,"data-testid":B("cancel-button"),children:"Cancel"}),t(Uc,{"aria-label":"confirm selection",type:"button",onClick:()=>{let e;e="24hr"===l?Co.convertTo24HourFormat({hour:g,minute:f,period:y}):`${g}:${f}${y}`,d(e)},disabled:""===g||""===f,"data-testid":B("confirm-button"),children:"Done"})]})]})})},Xc=r=>{var{id:n,disabled:o=!1,error:l,value:d,format:c="24hr",readOnly:u,onChange:h,onFocus:g,onBlur:m}=r,p=oe(r,["id","disabled","error","value","format","readOnly","onChange","onFocus","onBlur"]);const[f,b]=a(!1),[y,v]=a(!1),[x,w]=a(""),[$,F]=a(""),C=i(null);s((()=>{d&&(w(d.start),F(d.end))}),[d]),ie("mousedown",(function(e){o||D(e)}),"document"),ie("keyup",(function(e){if("Tab"===e.code)D(e)}),"document");const E=()=>{k()},S=()=>{f||y||g&&g()},k=()=>{b(!1),v(!1),m&&m()},D=e=>{C.current&&!C.current.contains(e.target)&&(y||f)&&k()};return t(yo,Object.assign({ref:C,id:n},p,{children:e(vo,{$disabled:o,$error:l,$readOnly:u,children:[e(lo,{error:l,currentActive:f?"start":y?"end":"none",children:[t(xo,{onFocus:()=>{o||u||f||(v(!1),b(!0),S())},readOnly:!0,placeholder:"From",value:Co.formatDisplayValue(x,c),disabled:o,"data-testid":p["data-testid"]?`${p["data-testid"]}-timepicker-selector`:"timepicker-selector"}),t(xo,{onFocus:()=>{o||u||y||(b(!1),v(!0),S())},readOnly:!0,placeholder:"To",value:Co.formatDisplayValue($,c),disabled:o,"data-testid":p["data-testid"]?`${p["data-testid"]}-timepicker-selector`:"timepicker-selector"})]}),t(Qc,{id:n,show:f,value:x,format:c,onCancel:E,onChange:e=>{b(!1),v(!0),w(e);h&&h({start:e,end:$})}}),t(Qc,{id:n,show:y,value:$,format:c,onCancel:E,onChange:e=>{v(!1),F(e);h&&h({start:x,end:e}),""==x?b(!0):m&&m()}})]})}))};x.label`
    color: ${Ln["text-subtle"]};
    margin-bottom: ${Vn["spacing-8"]};
    display: inline-block;

    ${Pn["form-label"]}
    ${Qd()}
    font-weight: ${Pn.Spec["weight-semibold"]};
`;const Kc=x.p`
    ${Pn["body-sm-semibold"]}
    color: ${Ln["text-error"]};
    margin-top: ${Vn["spacing-8"]};
    margin-bottom: 0;
    outline: none;
`;x.span`
    ${Pn["form-description"]}
    color: ${Ln["text-subtler"]};
    display: block;
`,x(fo)`
    width: 100%;
    height: calc(3rem - 2px); // exclude top and bottom borders

    ${e=>"no-border"!==e.$styleType&&w`
            padding-left: ${Vn["spacing-16"]};
            padding-right: ${e.$showClear?0:Vn["spacing-16"]};
        `}
`;const Jc=x(bo)`
    height: auto;
    padding: ${Vn["spacing-12"]} ${Vn["spacing-16"]};

    cursor: pointer;
    color: ${Ln.icon};

    ${e=>"no-border"===e.$styleType&&w`
            margin-right: -${Vn["spacing-12"]};
        `}
`,eu=x(R)`
    height: 1.25rem;
    width: 1.25rem;
    vertical-align: middle;
`;x.div`
    display: flex;
    width: 100%;
`,x(mo)`
    display: flex;
    align-items: center;
    width: 100%;
`;const tu=e=>"small"===e?2.5:3;x.div`
    position: relative;
    width: 100%;
    ${e=>{const t=tu(e.$variant);return w`
            min-height: ${t}rem;
            height: ${t}rem; // Need this to persist the height when expanding or collapsing list
        `}}
`;const ru=w`
    display: flex;
    position: relative;
    align-items: center;
    justify-content: space-between;
    padding: 0 ${Vn["spacing-16"]};
    // exclude top and bottom borders
    height: calc(${e=>tu(e.$variant)}rem - 2px);
    width: 100%;
    border-radius: ${Yn.sm};
    border: none;
    background: transparent;

    :focus,
    :active {
        outline: none;
    }

    :focus-visible {
        outline: 2px solid ${Ln["border-focus"]};
    }
`,nu=x.button`
    ${ru}
    cursor: pointer;
`;x.div`
    ${ru}
`;const ou=$`
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
`;x.div`
    position: relative;
    border: ${Nn["width-010"]} ${Nn.solid} ${Ln.border};
    border-radius: ${Yn.sm};
    background: ${Ln.bg};
    overflow: hidden;

    :focus-within {
        border-color: ${Ln["border-focus"]};
        box-shadow: 0px 0px 4px 0px
            rgb(from ${Ln["border-focus"]} r g b / 50%) inset; // TODO: confirm shadow
    }

    ${e=>e.expanded?w`
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                z-index: 2;
            `:w`
                animation: ${ou} 0.5s ease-in-out;
            `}

    ${e=>e.disabled?w`
                background: ${Ln["bg-disabled"]};

                ${nu} {
                    cursor: not-allowed;
                }

                :focus-within {
                    border-color: ${Ln.border};
                    box-shadow: none;
                }
            `:e.$readOnly?w`
                border: none;
                background: transparent !important;

                ${nu} {
                    padding: 0;
                }

                :focus-within {
                    border: none;
                    box-shadow: none;
                }
            `:e.error?w`
                border-color: ${Ln["border-error"]};

                :focus-within {
                    border-color: ${Ln["border-error"]};
                    box-shadow: 0px 0px 4px 0px
                        rgb(from ${Ln["border-error"]} r g b / 50%) inset; // TODO: confirm shadow
                }
            `:void 0}
`,x.div`
    transform: rotate(${e=>e.expanded?180:0}deg);
    transition: transform ${Wn["duration-250"]} ${Wn["ease-default"]};
    margin-left: ${Vn["spacing-16"]};
`,x(C)`
    color: ${Ln.icon};
`,x.div`
    height: 1px;
    background: ${Ln.border};
    margin: 0 ${Vn["spacing-8"]};
`,x.div`
    display: flex;
    flex: 1;
    word-break: break-all;
    ${e=>{if(e.$disabled)return w`
                color: ${Ln["text-disabled"]};
            `}}
`;const iu=x.div`
    ${e=>"small"===e.$variant?Pn["body-md-regular"]:Pn["body-baseline-regular"]}
    text-align: left;
    ${e=>{if("middle"!==e.truncateType)return w`
                    ${Xd(1)}
                `}}
    overflow: hidden;
`;x(iu)`
    color: ${Ln["text-subtler"]};
`,x.div`
    display: flex;
    position: relative;
    align-items: center;
    justify-content: space-between;
`;const su=x(Jc)`
    position: absolute;
    right: 0;
    padding-left: ${Vn["spacing-8"]};
    margin-right: 0;
`;x(nu)`
    // space for clear icon
    padding-right: calc(1.25rem + ${Vn["spacing-16"]});
`;const au=x.div`
    font-weight: ${e=>e.$bold?Pn.Spec["weight-semibold"]:Pn.Spec["weight-regular"]};

    ${e=>e.$disabled?w`
                color: ${Ln["text-disabled"]};
            `:e.$selected?w`
                color: ${Ln["text-selected"]};
            `:w`
                color: ${Ln.text};
            `}
    width: 100%;

    ${e=>"end"===e.$truncateType&&Xd(e.$maxLines||2)}
    overflow-wrap: break-word;
`,lu=x.div`
    color: ${Ln["text-subtlest"]};
    width: 100%;

    ${e=>"end"===e.$truncateType&&Xd(e.$maxLines||2)}
    overflow-wrap: break-word;

    ${e=>"next-line"===e.$labelDisplayType?w`
                    ${Pn["body-md-semibold"]}
                `:w`
                    ${Pn["body-baseline-regular"]}
                `}
`,du=x.span`
    font-weight: ${Pn.Spec["weight-semibold"]};
`,cu=x.div`
    text-align: left;
    width: 100%;
    overflow: hidden;
    overflow-wrap: break-word;

    ${e=>"small"===e.$variant?Pn["body-md-regular"]:Pn["body-baseline-regular"]}

    ${e=>{switch(e.$labelDisplayType){case"next-line":return w`
                    display: flex;
                    flex-direction: column;
                `;case"inline":return w`
                    ${au} {
                        display: inline;
                    }

                    ${lu} {
                        display: inline;
                        margin-left: 0.5rem;
                    }
                `}}}
`,uu=x.div`
    display: inline-block;
    width: ${e=>1===e.$maxLines?50:100}%;
    height: 1lh;
    word-break: break-all;
    overflow: hidden;
`,hu=x.div`
    display: inline-block;
    width: ${e=>1===e.$maxLines?50:100}%;
    height: 1lh;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    direction: rtl;
    text-align: right;
`,gu=({bold:n,displayType:o="inline",label:i,searchTerm:s,maxLines:a=2,selected:l,disabled:d,sublabel:c,truncationType:u="middle",variant:h="default"})=>{const g=F(),p="small"===h?Pn.Spec["body-size-md"]({theme:g}):Pn.Spec["body-size-baseline"]({theme:g}),b=Pn.Spec["font-family"]({theme:g}),{ref:y,width:v}=Ci(),x=m((e=>{if("inline"!==o||!v)return!1;return $o.getTextWidth(e,`${p} '${b}'`)>v*a-50}),[v,o,p,b,a]),w=f((()=>x(i)),[x,i]),$=f((()=>c&&x(c)),[x,c]),C=n=>{if(!s)return n;const o=s.toLowerCase().trim(),a=n.toLowerCase().indexOf(o),l=a+s.length;return-1===a?n:e(r,{children:[i.slice(0,a),t(du,{$variant:h,children:i.slice(a,l)}),i.slice(l)]})},E=n=>e(r,{children:[t(uu,{$maxLines:a,"aria-hidden":!0,children:C(n)}),t(hu,{$maxLines:a,"aria-hidden":!0,children:C(n)})]});return e(cu,{ref:y,$labelDisplayType:w||$?"next-line":o,$variant:h,children:[t(au,{"aria-label":i,$bold:n,$maxLines:a,$selected:l,$disabled:d,$truncateType:u,children:"middle"===u&&w?E(i):C(i)}),c&&t(lu,{"aria-label":c,$maxLines:a,$truncateType:u,$labelDisplayType:o,children:"middle"===u&&$?E(c):c})]})};var mu=Wt;var pu=function(e){var t=this.__data__,r=t.delete(e);return this.size=t.size,r};var fu=function(e){return this.__data__.get(e)};var bu=function(e){return this.__data__.has(e)},yu=Wt,vu=Nt,xu=dr;var wu=function(e,t){var r=this.__data__;if(r instanceof yu){var n=r.__data__;if(!vu||n.length<199)return n.push([e,t]),this.size=++r.size,this;r=this.__data__=new xu(n)}return r.set(e,t),this.size=r.size,this},$u=Wt,Fu=function(){this.__data__=new mu,this.size=0},Cu=pu,Eu=fu,Su=bu,ku=wu;function Du(e){var t=this.__data__=new $u(e);this.size=t.size}Du.prototype.clear=Fu,Du.prototype.delete=Cu,Du.prototype.get=Eu,Du.prototype.has=Su,Du.prototype.set=ku;var Iu=Du;var Tu=dr,Bu=function(e){return this.__data__.set(e,"__lodash_hash_undefined__"),this},Au=function(e){return this.__data__.has(e)};function zu(e){var t=-1,r=null==e?0:e.length;for(this.__data__=new Tu;++t<r;)this.add(e[t])}zu.prototype.add=zu.prototype.push=Bu,zu.prototype.has=Au;var Ou=function(e,t){return e.has(t)},Mu=zu,_u=function(e,t){for(var r=-1,n=null==e?0:e.length;++r<n;)if(t(e[r],r,e))return!0;return!1},Ru=Ou;var Hu=function(e,t,r,n,o,i){var s=1&r,a=e.length,l=t.length;if(a!=l&&!(s&&l>a))return!1;var d=i.get(e),c=i.get(t);if(d&&c)return d==t&&c==e;var u=-1,h=!0,g=2&r?new Mu:void 0;for(i.set(e,t),i.set(t,e);++u<a;){var m=e[u],p=t[u];if(n)var f=s?n(p,m,u,t,e,i):n(m,p,u,e,t,i);if(void 0!==f){if(f)continue;h=!1;break}if(g){if(!_u(t,(function(e,t){if(!Ru(g,t)&&(m===e||o(m,e,r,n,i)))return g.push(t)}))){h=!1;break}}else if(m!==p&&!o(m,p,r,n,i)){h=!1;break}}return i.delete(e),i.delete(t),h};var ju=function(e){var t=-1,r=Array(e.size);return e.forEach((function(e,n){r[++t]=[n,e]})),r};var Lu=he.Uint8Array,Pu=Ct,Wu=Hu,Nu=ju,Vu=function(e){var t=-1,r=Array(e.size);return e.forEach((function(e){r[++t]=e})),r},Yu=ge?ge.prototype:void 0,Uu=Yu?Yu.valueOf:void 0;var qu=function(e,t,r,n,o,i,s){switch(r){case"[object DataView]":if(e.byteLength!=t.byteLength||e.byteOffset!=t.byteOffset)return!1;e=e.buffer,t=t.buffer;case"[object ArrayBuffer]":return!(e.byteLength!=t.byteLength||!i(new Lu(e),new Lu(t)));case"[object Boolean]":case"[object Date]":case"[object Number]":return Pu(+e,+t);case"[object Error]":return e.name==t.name&&e.message==t.message;case"[object RegExp]":case"[object String]":return e==t+"";case"[object Map]":var a=Nu;case"[object Set]":var l=1&n;if(a||(a=Vu),e.size!=t.size&&!l)return!1;var d=s.get(e);if(d)return d==t;n|=2,s.set(e,t);var c=Wu(a(e),a(t),n,o,i,s);return s.delete(e),c;case"[object Symbol]":if(Uu)return Uu.call(e)==Uu.call(t)}return!1};var Gu=function(e,t){for(var r=-1,n=t.length,o=e.length;++r<n;)e[o+r]=t[r];return e},Zu=Gu,Qu=le;var Xu=function(e,t,r){var n=t(e);return Qu(e)?n:Zu(n,r(e))};var Ku=function(e,t){for(var r=-1,n=null==e?0:e.length,o=0,i=[];++r<n;){var s=e[r];t(s,r,e)&&(i[o++]=s)}return i},Ju=function(){return[]},eh=Object.prototype.propertyIsEnumerable,th=Object.getOwnPropertySymbols,rh=th?function(e){return null==e?[]:(e=Object(e),Ku(th(e),(function(t){return eh.call(e,t)})))}:Ju;var nh=function(e,t){for(var r=-1,n=Array(e);++r<e;)n[r]=t(r);return n},oh=Ce,ih=Ee;var sh=function(e){return ih(e)&&"[object Arguments]"==oh(e)},ah=Ee,lh=Object.prototype,dh=lh.hasOwnProperty,ch=lh.propertyIsEnumerable,uh=sh(function(){return arguments}())?sh:function(e){return ah(e)&&dh.call(e,"callee")&&!ch.call(e,"callee")},hh={exports:{}};var gh=function(){return!1};!function(e,t){var r=he,n=gh,o=t&&!t.nodeType&&t,i=o&&e&&!e.nodeType&&e,s=i&&i.exports===o?r.Buffer:void 0,a=(s?s.isBuffer:void 0)||n;e.exports=a}(hh,hh.exports);var mh=hh.exports,ph=/^(?:0|[1-9]\d*)$/;var fh=function(e,t){var r=typeof e;return!!(t=null==t?9007199254740991:t)&&("number"==r||"symbol"!=r&&ph.test(e))&&e>-1&&e%1==0&&e<t};var bh=function(e){return"number"==typeof e&&e>-1&&e%1==0&&e<=9007199254740991},yh=Ce,vh=bh,xh=Ee,wh={};wh["[object Float32Array]"]=wh["[object Float64Array]"]=wh["[object Int8Array]"]=wh["[object Int16Array]"]=wh["[object Int32Array]"]=wh["[object Uint8Array]"]=wh["[object Uint8ClampedArray]"]=wh["[object Uint16Array]"]=wh["[object Uint32Array]"]=!0,wh["[object Arguments]"]=wh["[object Array]"]=wh["[object ArrayBuffer]"]=wh["[object Boolean]"]=wh["[object DataView]"]=wh["[object Date]"]=wh["[object Error]"]=wh["[object Function]"]=wh["[object Map]"]=wh["[object Number]"]=wh["[object Object]"]=wh["[object RegExp]"]=wh["[object Set]"]=wh["[object String]"]=wh["[object WeakMap]"]=!1;var $h=function(e){return xh(e)&&vh(e.length)&&!!wh[yh(e)]};var Fh=function(e){return function(t){return e(t)}},Ch={exports:{}};!function(e,t){var r=de,n=t&&!t.nodeType&&t,o=n&&e&&!e.nodeType&&e,i=o&&o.exports===n&&r.process,s=function(){try{var e=o&&o.require&&o.require("util").types;return e||i&&i.binding&&i.binding("util")}catch(e){}}();e.exports=s}(Ch,Ch.exports);var Eh=Ch.exports,Sh=$h,kh=Fh,Dh=Eh&&Eh.isTypedArray,Ih=Dh?kh(Dh):Sh,Th=nh,Bh=uh,Ah=le,zh=mh,Oh=fh,Mh=Ih,_h=Object.prototype.hasOwnProperty;var Rh=function(e,t){var r=Ah(e),n=!r&&Bh(e),o=!r&&!n&&zh(e),i=!r&&!n&&!o&&Mh(e),s=r||n||o||i,a=s?Th(e.length,String):[],l=a.length;for(var d in e)!t&&!_h.call(e,d)||s&&("length"==d||o&&("offset"==d||"parent"==d)||i&&("buffer"==d||"byteLength"==d||"byteOffset"==d)||Oh(d,l))||a.push(d);return a},Hh=Object.prototype;var jh=function(e){var t=e&&e.constructor;return e===("function"==typeof t&&t.prototype||Hh)};var Lh=function(e,t){return function(r){return e(t(r))}}(Object.keys,Object),Ph=jh,Wh=Lh,Nh=Object.prototype.hasOwnProperty;var Vh=function(e){if(!Ph(e))return Wh(e);var t=[];for(var r in Object(e))Nh.call(e,r)&&"constructor"!=r&&t.push(r);return t},Yh=He,Uh=bh;var qh=function(e){return null!=e&&Uh(e.length)&&!Yh(e)},Gh=Rh,Zh=Vh,Qh=qh;var Xh=function(e){return Qh(e)?Gh(e):Zh(e)},Kh=Xu,Jh=rh,eg=Xh;var tg=function(e){return Kh(e,eg,Jh)},rg=Object.prototype.hasOwnProperty;var ng=function(e,t,r,n,o,i){var s=1&r,a=tg(e),l=a.length;if(l!=tg(t).length&&!s)return!1;for(var d=l;d--;){var c=a[d];if(!(s?c in t:rg.call(t,c)))return!1}var u=i.get(e),h=i.get(t);if(u&&h)return u==t&&h==e;var g=!0;i.set(e,t),i.set(t,e);for(var m=s;++d<l;){var p=e[c=a[d]],f=t[c];if(n)var b=s?n(f,p,c,t,e,i):n(p,f,c,e,t,i);if(!(void 0===b?p===f||o(p,f,r,n,i):b)){g=!1;break}m||(m="constructor"==c)}if(g&&!m){var y=e.constructor,v=t.constructor;y==v||!("constructor"in e)||!("constructor"in t)||"function"==typeof y&&y instanceof y&&"function"==typeof v&&v instanceof v||(g=!1)}return i.delete(e),i.delete(t),g},og=nt(he,"DataView"),ig=Nt,sg=nt(he,"Promise"),ag=nt(he,"Set"),lg=nt(he,"WeakMap"),dg=Ce,cg=Ne,ug="[object Map]",hg="[object Promise]",gg="[object Set]",mg="[object WeakMap]",pg="[object DataView]",fg=cg(og),bg=cg(ig),yg=cg(sg),vg=cg(ag),xg=cg(lg),wg=dg;(og&&wg(new og(new ArrayBuffer(1)))!=pg||ig&&wg(new ig)!=ug||sg&&wg(sg.resolve())!=hg||ag&&wg(new ag)!=gg||lg&&wg(new lg)!=mg)&&(wg=function(e){var t=dg(e),r="[object Object]"==t?e.constructor:void 0,n=r?cg(r):"";if(n)switch(n){case fg:return pg;case bg:return ug;case yg:return hg;case vg:return gg;case xg:return mg}return t});var $g=Iu,Fg=Hu,Cg=qu,Eg=ng,Sg=wg,kg=le,Dg=mh,Ig=Ih,Tg="[object Arguments]",Bg="[object Array]",Ag="[object Object]",zg=Object.prototype.hasOwnProperty;var Og=function(e,t,r,n,o,i){var s=kg(e),a=kg(t),l=s?Bg:Sg(e),d=a?Bg:Sg(t),c=(l=l==Tg?Ag:l)==Ag,u=(d=d==Tg?Ag:d)==Ag,h=l==d;if(h&&Dg(e)){if(!Dg(t))return!1;s=!0,c=!1}if(h&&!c)return i||(i=new $g),s||Ig(e)?Fg(e,t,r,n,o,i):Cg(e,t,l,r,n,o,i);if(!(1&r)){var g=c&&zg.call(e,"__wrapped__"),m=u&&zg.call(t,"__wrapped__");if(g||m){var p=g?e.value():e,f=m?t.value():t;return i||(i=new $g),o(p,f,r,n,i)}}return!!h&&(i||(i=new $g),Eg(e,t,r,n,o,i))},Mg=Ee;var _g=function e(t,r,n,o,i){return t===r||(null==t||null==r||!Mg(t)&&!Mg(r)?t!=t&&r!=r:Og(t,r,n,o,e,i))},Rg=Iu,Hg=_g;var jg=function(e,t,r,n){var o=r.length,i=o,s=!n;if(null==e)return!i;for(e=Object(e);o--;){var a=r[o];if(s&&a[2]?a[1]!==e[a[0]]:!(a[0]in e))return!1}for(;++o<i;){var l=(a=r[o])[0],d=e[l],c=a[1];if(s&&a[2]){if(void 0===d&&!(l in e))return!1}else{var u=new Rg;if(n)var h=n(d,c,l,e,t,u);if(!(void 0===h?Hg(c,d,3,n,u):h))return!1}}return!0},Lg=Oe;var Pg=function(e){return e==e&&!Lg(e)},Wg=Pg,Ng=Xh;var Vg=function(e){for(var t=Ng(e),r=t.length;r--;){var n=t[r],o=e[n];t[r]=[n,o,Wg(o)]}return t};var Yg=function(e,t){return function(r){return null!=r&&(r[e]===t&&(void 0!==t||e in Object(r)))}},Ug=jg,qg=Vg,Gg=Yg;var Zg=function(e,t){return null!=e&&t in Object(e)},Qg=Dr,Xg=uh,Kg=le,Jg=fh,em=bh,tm=Tr;var rm=function(e,t,r){for(var n=-1,o=(t=Qg(t,e)).length,i=!1;++n<o;){var s=tm(t[n]);if(!(i=null!=e&&r(e,s)))break;e=e[s]}return i||++n!=o?i:!!(o=null==e?0:e.length)&&em(o)&&Jg(s,o)&&(Kg(e)||Xg(e))},nm=Zg,om=rm;var im=_g,sm=Mr,am=function(e,t){return null!=e&&om(e,t,nm)},lm=ze,dm=Pg,cm=Yg,um=Tr;var hm=function(e){return function(t){return null==t?void 0:t[e]}},gm=zr;var mm=hm,pm=function(e){return function(t){return gm(t,e)}},fm=ze,bm=Tr;var ym=function(e){var t=qg(e);return 1==t.length&&t[0][2]?Gg(t[0][0],t[0][1]):function(r){return r===e||Ug(r,e,t)}},vm=function(e,t){return lm(e)&&dm(t)?cm(um(e),t):function(r){var n=sm(r,e);return void 0===n&&n===t?am(r,e):im(t,n,3)}},xm=function(e){return e},wm=le,$m=function(e){return fm(e)?mm(bm(e)):pm(e)};var Fm=function(e){return"function"==typeof e?e:null==e?xm:"object"==typeof e?wm(e)?vm(e[0],e[1]):ym(e):$m(e)},Cm=Fm,Em=qh,Sm=Xh;var km=function(e){return function(t,r,n){var o=Object(t);if(!Em(t)){var i=Cm(r);t=Sm(t),r=function(e){return i(o[e],e,o)}}var s=e(t,r,n);return s>-1?o[i?t[s]:s]:void 0}};var Dm=/\s/;var Im=function(e){for(var t=e.length;t--&&Dm.test(e.charAt(t)););return t},Tm=/^\s+/;var Bm=function(e){return e?e.slice(0,Im(e)+1).replace(Tm,""):e},Am=Oe,zm=De,Om=/^[-+]0x[0-9a-f]+$/i,Mm=/^0b[01]+$/i,_m=/^0o[0-7]+$/i,Rm=parseInt;var Hm=function(e){if("number"==typeof e)return e;if(zm(e))return NaN;if(Am(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=Am(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=Bm(e);var r=Mm.test(e);return r||_m.test(e)?Rm(e.slice(2),r?2:8):Om.test(e)?NaN:+e},jm=1/0;var Lm=function(e){return e?(e=Hm(e))===jm||e===-1/0?17976931348623157e292*(e<0?-1:1):e==e?e:0:0===e?e:0};var Pm=function(e,t,r,n){for(var o=e.length,i=r+(n?1:-1);n?i--:++i<o;)if(t(e[i],i,e))return i;return-1},Wm=Fm,Nm=function(e){var t=Lm(e),r=t%1;return t==t?r?t-r:t:0},Vm=Math.max;var Ym=ae(km((function(e,t,r){var n=null==e?0:e.length;if(!n)return-1;var o=null==r?0:Nm(r);return o<0&&(o=Vm(n+o,0)),Pm(e,Wm(t),o)}))),Um=_g;var qm=ae((function(e,t){return Um(e,t)}));function Gm(e){return()=>e}function Zm(e){e()}function Qm(e,t){return r=>e(t(r))}function Xm(e,t){return()=>e(t)}function Km(e,t){return r=>e(t,r)}function Jm(e){return void 0!==e}function ep(){}function tp(e,t){return t(e),e}function rp(e,t){return t(e)}function np(...e){return e}function op(e,t){return e(1,t)}function ip(e,t){e(0,t)}function sp(e){e(2)}function ap(e){return e(4)}function lp(e,t){return op(e,Km(t,0))}function dp(e,t){const r=e(1,(e=>{r(),t(e)}));return r}function cp(e){let t,r;return n=>o=>{t=o,r&&clearTimeout(r),r=setTimeout((()=>{n(t)}),e)}}function up(e,t){return e===t}function hp(e=up){let t;return r=>n=>{e(t,n)||(t=n,r(n))}}function gp(e){return t=>r=>{e(r)&&t(r)}}function mp(e){return t=>Qm(t,e)}function pp(e){return t=>()=>{t(e)}}function fp(e,...t){const r=function(...e){return t=>e.reduceRight(rp,t)}(...t);return(t,n)=>{switch(t){case 2:return void sp(e);case 1:return op(e,r(n))}}}function bp(e,t){return r=>n=>{r(t=e(t,n))}}function yp(e){return t=>r=>{e>0?e--:t(r)}}function vp(e){let t,r=null;return n=>o=>{r=o,!t&&(t=setTimeout((()=>{t=void 0,n(r)}),e))}}function xp(...e){const t=new Array(e.length);let r=0,n=null;const o=Math.pow(2,e.length)-1;return e.forEach(((e,i)=>{const s=Math.pow(2,i);op(e,(e=>{const a=r;r|=s,t[i]=e,a!==o&&r===o&&n&&(n(),n=null)}))})),e=>i=>{const s=()=>{e([i].concat(t))};r===o?s():n=s}}function wp(e){let t=e;const r=Fp();return(e,n)=>{switch(e){case 0:t=n;break;case 1:n(t);break;case 4:return t}return r(e,n)}}function $p(e,t){return tp(wp(t),(t=>lp(e,t)))}function Fp(){const e=[];return(t,r)=>{switch(t){case 0:return void e.slice().forEach((e=>{e(r)}));case 2:return void e.splice(0,e.length);case 1:return e.push(r),()=>{const t=e.indexOf(r);t>-1&&e.splice(t,1)}}}}function Cp(e){return tp(Fp(),(t=>lp(e,t)))}function Ep(e,t=[],{singleton:r}={singleton:!0}){return{constructor:e,dependencies:t,id:Sp(),singleton:r}}const Sp=()=>Symbol();function kp(...e){const t=Fp(),r=new Array(e.length);let n=0;const o=Math.pow(2,e.length)-1;return e.forEach(((e,i)=>{const s=Math.pow(2,i);op(e,(e=>{r[i]=e,n|=s,n===o&&ip(t,r)}))})),function(e,i){switch(e){case 2:return void sp(t);case 1:return n===o&&i(r),op(t,i)}}}function Dp(e,t=up){return fp(e,hp(t))}function Ip(...e){return function(t,r){switch(t){case 2:return;case 1:return function(...e){return()=>{e.map(Zm)}}(...e.map((e=>op(e,r))))}}}var Tp=(e=>(e[e.DEBUG=0]="DEBUG",e[e.INFO=1]="INFO",e[e.WARN=2]="WARN",e[e.ERROR=3]="ERROR",e))(Tp||{});const Bp={0:"debug",3:"error",1:"log",2:"warn"},Ap=Ep((()=>{const e=wp(3);return{log:wp(((t,r,n=1)=>{var o;n>=(null!=(o=(typeof globalThis>"u"?window:globalThis).VIRTUOSO_LOG_LEVEL)?o:ap(e))&&console[Bp[n]]("%creact-virtuoso: %c%s %o","color: #0253b3; font-weight: bold","color: initial",t,r)})),logLevel:e}}),[],{singleton:!0});function zp(e,t,r){return Op(e,t,r).callbackRef}function Op(e,t,r){const n=o.useRef(null);let i=e=>{};if(typeof ResizeObserver<"u"){const s=o.useMemo((()=>new ResizeObserver((t=>{const n=()=>{const r=t[0].target;null!==r.offsetParent&&e(r)};r?n():requestAnimationFrame(n)}))),[e]);i=e=>{e&&t?(s.observe(e),n.current=e):(n.current&&s.unobserve(n.current),n.current=null)}}return{callbackRef:i,ref:n}}function Mp(e,t,r,n,i,s,a,l,d){const c=o.useCallback((r=>{const o=function(e,t,r,n){const o=e.length;if(0===o)return null;const i=[];for(let s=0;s<o;s++){const o=e.item(s);if(void 0===o.dataset.index)continue;const a=parseInt(o.dataset.index),l=parseFloat(o.dataset.knownSize),d=t(o,r);if(0===d&&n("Zero-sized element, this should not happen",{child:o},Tp.ERROR),d===l)continue;const c=i[i.length-1];0===i.length||c.size!==d||c.endIndex!==a-1?i.push({endIndex:a,size:d,startIndex:a}):i[i.length-1].endIndex++}return i}(r.children,t,l?"offsetWidth":"offsetHeight",i);let d=r.parentElement;for(;!d.dataset.virtuosoScroller;)d=d.parentElement;const c="window"===d.lastElementChild.dataset.viewportType,u=a?l?a.scrollLeft:a.scrollTop:c?l?window.pageXOffset||document.documentElement.scrollLeft:window.pageYOffset||document.documentElement.scrollTop:l?d.scrollLeft:d.scrollTop,h=a?l?a.scrollWidth:a.scrollHeight:c?l?document.documentElement.scrollWidth:document.documentElement.scrollHeight:l?d.scrollWidth:d.scrollHeight,g=a?l?a.offsetWidth:a.offsetHeight:c?l?window.innerWidth:window.innerHeight:l?d.offsetWidth:d.offsetHeight;n({scrollHeight:h,scrollTop:Math.max(u,0),viewportHeight:g}),null==s||s(l?_p("column-gap",getComputedStyle(r).columnGap,i):_p("row-gap",getComputedStyle(r).rowGap,i)),null!==o&&e(o)}),[e,t,i,s,a,n]);return Op(c,r,d)}function _p(e,t,r){return"normal"!==t&&!(null!=t&&t.endsWith("px"))&&r(`${e} was not resolved to pixel value correctly`,t,Tp.WARN),"normal"===t?0:parseInt(null!=t?t:"0",10)}function Rp(e,t,r){const n=o.useRef(null),i=o.useCallback((r=>{if(null==r||!r.offsetParent)return;const o=r.getBoundingClientRect(),i=o.width;let s,a;if(t){const e=t.getBoundingClientRect(),r=o.top-e.top;a=e.height-Math.max(0,r),s=r+t.scrollTop}else a=window.innerHeight-Math.max(0,o.top),s=o.top+window.pageYOffset;n.current={offsetTop:s,visibleHeight:a,visibleWidth:i},e(n.current)}),[e,t]),{callbackRef:s,ref:a}=Op(i,!0,r),l=o.useCallback((()=>{i(a.current)}),[i,a]);return o.useEffect((()=>{if(t){t.addEventListener("scroll",l);const e=new ResizeObserver((()=>{requestAnimationFrame(l)}));return e.observe(t),()=>{t.removeEventListener("scroll",l),e.unobserve(t)}}return window.addEventListener("scroll",l),window.addEventListener("resize",l),()=>{window.removeEventListener("scroll",l),window.removeEventListener("resize",l)}}),[l,t]),s}const Hp=Ep((()=>{const e=Fp(),t=Fp(),r=wp(0),n=Fp(),o=wp(0),i=Fp(),s=Fp(),a=wp(0),l=wp(0),d=wp(0),c=wp(0),u=Fp(),h=Fp(),g=wp(!1),m=wp(!1),p=wp(!1);return lp(fp(e,mp((({scrollTop:e})=>e))),t),lp(fp(e,mp((({scrollHeight:e})=>e))),s),lp(t,o),{deviation:r,fixedFooterHeight:d,fixedHeaderHeight:l,footerHeight:c,headerHeight:a,horizontalDirection:m,scrollBy:h,scrollContainerState:e,scrollHeight:s,scrollingInProgress:g,scrollTo:u,scrollTop:t,skipAnimationFrameInResizeObserver:p,smoothScrollTargetReached:n,statefulScrollTop:o,viewportHeight:i}}),[],{singleton:!0}),jp={lvl:0};function Lp(e,t){const r=e.length;if(0===r)return[];let{index:n,value:o}=t(e[0]);const i=[];for(let s=1;s<r;s++){const{index:r,value:a}=t(e[s]);i.push({end:r-1,start:n,value:o}),n=r,o=a}return i.push({end:1/0,start:n,value:o}),i}function Pp(e){return e===jp}function Wp(e,t){if(!Pp(e))return t===e.k?e.v:t<e.k?Wp(e.l,t):Wp(e.r,t)}function Np(e,t,r="k"){if(Pp(e))return[-1/0,void 0];if(Number(e[r])===t)return[e.k,e.v];if(Number(e[r])<t){const n=Np(e.r,t,r);return n[0]===-1/0?[e.k,e.v]:n}return Np(e.l,t,r)}function Vp(e,t,r){return Pp(e)?tf(t,r,1):t===e.k?Xp(e,{k:t,v:r}):t<e.k?rf(Xp(e,{l:Vp(e.l,t,r)})):rf(Xp(e,{r:Vp(e.r,t,r)}))}function Yp(){return jp}function Up(e,t,r){if(Pp(e))return[];return function(e){return Lp(e,(({k:e,v:t})=>({index:e,value:t})))}(Zp(e,Np(e,t)[0],r))}function qp(e,t){if(Pp(e))return jp;const{k:r,l:n,r:o}=e;if(t===r){if(Pp(n))return o;if(Pp(o))return n;{const[t,r]=ef(n);return Qp(Xp(e,{k:t,l:Kp(n),v:r}))}}return Qp(Xp(e,t<r?{l:qp(n,t)}:{r:qp(o,t)}))}function Gp(e){return Pp(e)?[]:[...Gp(e.l),{k:e.k,v:e.v},...Gp(e.r)]}function Zp(e,t,r){if(Pp(e))return[];const{k:n,l:o,r:i,v:s}=e;let a=[];return n>t&&(a=a.concat(Zp(o,t,r))),n>=t&&n<=r&&a.push({k:n,v:s}),n<=r&&(a=a.concat(Zp(i,t,r))),a}function Qp(e){const{l:t,lvl:r,r:n}=e;if(n.lvl>=r-1&&t.lvl>=r-1)return e;if(r>n.lvl+1){if(Jp(t))return nf(Xp(e,{lvl:r-1}));if(!Pp(t)&&!Pp(t.r))return Xp(t.r,{l:Xp(t,{r:t.r.l}),lvl:r,r:Xp(e,{l:t.r.r,lvl:r-1})});throw new Error("Unexpected empty nodes")}if(Jp(e))return of(Xp(e,{lvl:r-1}));if(Pp(n)||Pp(n.l))throw new Error("Unexpected empty nodes");{const t=n.l,o=Jp(t)?n.lvl-1:n.lvl;return Xp(t,{l:Xp(e,{lvl:r-1,r:t.l}),lvl:t.lvl+1,r:of(Xp(n,{l:t.r,lvl:o}))})}}function Xp(e,t){return tf(void 0!==t.k?t.k:e.k,void 0!==t.v?t.v:e.v,void 0!==t.lvl?t.lvl:e.lvl,void 0!==t.l?t.l:e.l,void 0!==t.r?t.r:e.r)}function Kp(e){return Pp(e.r)?e.l:Qp(Xp(e,{r:Kp(e.r)}))}function Jp(e){return Pp(e)||e.lvl>e.r.lvl}function ef(e){return Pp(e.r)?[e.k,e.v]:ef(e.r)}function tf(e,t,r,n=jp,o=jp){return{k:e,l:n,lvl:r,r:o,v:t}}function rf(e){return of(nf(e))}function nf(e){const{l:t}=e;return Pp(t)||t.lvl!==e.lvl?e:Xp(t,{r:Xp(e,{l:t.r})})}function of(e){const{lvl:t,r:r}=e;return Pp(r)||Pp(r.r)||r.lvl!==t||r.r.lvl!==t?e:Xp(r,{l:Xp(e,{r:r.l}),lvl:t+1})}function sf(e,t){return!(!e||e.startIndex!==t.startIndex||e.endIndex!==t.endIndex)}function af(e,t){return!(!e||e[0]!==t[0]||e[1]!==t[1])}const lf=Ep((()=>({recalcInProgress:wp(!1)})),[],{singleton:!0});function df(e,t,r){return e[cf(e,t,r)]}function cf(e,t,r,n=0){let o=e.length-1;for(;n<=o;){const i=Math.floor((n+o)/2),s=r(e[i],t);if(0===s)return i;if(-1===s){if(o-n<2)return i-1;o=i-1}else{if(o===n)return i;n=i+1}}throw new Error(`Failed binary finding record in array - ${e.join(",")}, searched for ${t}`)}function uf(e,t){return Math.round(e.getBoundingClientRect()[t])}function hf(e){return!Pp(e.groupOffsetTree)}function gf({index:e},t){return t===e?0:t<e?-1:1}function mf({offset:e},t){return t===e?0:t<e?-1:1}function pf(e,t,r){if(0===t.length)return 0;const{index:n,offset:o,size:i}=df(t,e,gf),s=e-n,a=i*s+(s-1)*r+o;return a>0?a+r:a}function ff(e,t){if(!hf(t))return e;let r=0;for(;t.groupIndices[r]<=e+r;)r++;return e+r}function bf(e,t,r){if(function(e){return typeof e.groupIndex<"u"}(e))return t.groupIndices[e.groupIndex]+1;{let n=ff("LAST"===e.index?r:e.index,t);return n=Math.max(0,n,Math.min(r,n)),n}}function yf(e,t,r,n=0){return n>0&&(t=Math.max(t,df(e,n,gf).offset)),Lp(function(e,t,r,n){const o=cf(e,t,n),i=cf(e,r,n,o);return e.slice(o,i+1)}(e,t,r,mf),$f)}function vf(e,[t,r,n,o]){t.length>0&&n("received item sizes",t,Tp.DEBUG);const i=e.sizeTree;let s=i,a=0;if(r.length>0&&Pp(i)&&2===t.length){const e=t[0].size,n=t[1].size;s=r.reduce(((t,r)=>Vp(Vp(t,r,e),r+1,n)),s)}else[s,a]=function(e,t){let r=Pp(e)?0:1/0;for(const n of t){const{endIndex:t,size:o,startIndex:i}=n;if(r=Math.min(r,i),Pp(e)){e=Vp(e,0,o);continue}const s=Up(e,i-1,t+1);if(s.some(Ff(n)))continue;let a=!1,l=!1;for(const{end:r,start:n,value:i}of s)a?(t>=n||o===i)&&(e=qp(e,n)):(l=i!==o,a=!0),r>t&&t>=n&&i!==o&&(e=Vp(e,t+1,i));l&&(e=Vp(e,i,o))}return[e,r]}(s,t);if(s===i)return e;const{lastIndex:l,lastOffset:d,lastSize:c,offsetTree:u}=wf(e.offsetTree,a,s,o);return{groupIndices:r,groupOffsetTree:r.reduce(((e,t)=>Vp(e,t,pf(t,u,o))),Yp()),lastIndex:l,lastOffset:d,lastSize:c,offsetTree:u,sizeTree:s}}function xf(e,t){let r=0,n=0;for(;r<e;)r+=t[n+1]-t[n]-1,n++;return n-(r===e?0:1)}function wf(e,t,r,n){let o=e,i=0,s=0,a=0,l=0;if(0!==t){l=cf(o,t-1,gf),a=o[l].offset;const e=Np(r,t-1);i=e[0],s=e[1],o.length&&o[l].size===Np(r,t)[1]&&(l-=1),o=o.slice(0,l+1)}else o=[];for(const{start:e,value:l}of Up(r,t,1/0)){const t=e-i,r=t*s+a+t*n;o.push({index:e,offset:r,size:l}),i=e,a=r,s=l}return{lastIndex:i,lastOffset:a,lastSize:s,offsetTree:o}}function $f(e){return{index:e.index,value:e}}function Ff(e){const{endIndex:t,size:r,startIndex:n}=e;return e=>e.start===n&&(e.end===t||e.end===1/0)&&e.value===r}const Cf={offsetHeight:"height",offsetWidth:"width"},Ef=Ep((([{log:e},{recalcInProgress:t}])=>{const r=Fp(),n=Fp(),o=$p(n,0),i=Fp(),s=Fp(),a=wp(0),l=wp([]),d=wp(void 0),c=wp(void 0),u=wp(((e,t)=>uf(e,Cf[t]))),h=wp(void 0),g=wp(0),m={groupIndices:[],groupOffsetTree:Yp(),lastIndex:0,lastOffset:0,lastSize:0,offsetTree:[],sizeTree:Yp()},p=$p(fp(r,xp(l,e,g),bp(vf,m),hp()),m),f=$p(fp(l,hp(),bp(((e,t)=>({current:t,prev:e.current})),{current:[],prev:[]}),mp((({prev:e})=>e))),[]);lp(fp(l,gp((e=>e.length>0)),xp(p,g),mp((([e,t,r])=>{const n=e.reduce(((e,n,o)=>Vp(e,n,pf(n,t.offsetTree,r)||o)),Yp());return{...t,groupIndices:e,groupOffsetTree:n}}))),p),lp(fp(n,xp(p),gp((([e,{lastIndex:t}])=>e<t)),mp((([e,{lastIndex:t,lastSize:r}])=>[{endIndex:t,size:r,startIndex:e}]))),r),lp(d,c);const b=$p(fp(d,mp((e=>void 0===e))),!0);lp(fp(c,gp((e=>void 0!==e&&Pp(ap(p).sizeTree))),mp((e=>[{endIndex:0,size:e,startIndex:0}]))),r);const y=Cp(fp(r,xp(p),bp((({sizes:e},[t,r])=>({changed:r!==e,sizes:r})),{changed:!1,sizes:m}),mp((e=>e.changed))));op(fp(a,bp(((e,t)=>({diff:e.prev-t,prev:t})),{diff:0,prev:0}),mp((e=>e.diff))),(e=>{const{groupIndices:r}=ap(p);if(e>0)ip(t,!0),ip(i,e+xf(e,r));else if(e<0){const t=ap(f);t.length>0&&(e-=xf(-e,t)),ip(s,e)}})),op(fp(a,xp(e)),(([e,t])=>{e<0&&t("`firstItemIndex` prop should not be set to less than zero. If you don't know the total count, just use a very high value",{firstItemIndex:a},Tp.ERROR)}));const v=Cp(i);lp(fp(i,xp(p),mp((([e,t])=>{const r=t.groupIndices.length>0,n=[],o=t.lastSize;if(r){const r=Wp(t.sizeTree,0);let i=0,s=0;for(;i<e;){const e=t.groupIndices[s],a=t.groupIndices.length===s+1?1/0:t.groupIndices[s+1]-e-1;n.push({endIndex:e,size:r,startIndex:e}),n.push({endIndex:e+1+a-1,size:o,startIndex:e+1}),s++,i+=a+1}const a=Gp(t.sizeTree);return i!==e&&a.shift(),a.reduce(((t,{k:r,v:n})=>{let o=t.ranges;return 0!==t.prevSize&&(o=[...t.ranges,{endIndex:r+e-1,size:t.prevSize,startIndex:t.prevIndex}]),{prevIndex:r+e,prevSize:n,ranges:o}}),{prevIndex:e,prevSize:0,ranges:n}).ranges}return Gp(t.sizeTree).reduce(((t,{k:r,v:n})=>({prevIndex:r+e,prevSize:n,ranges:[...t.ranges,{endIndex:r+e-1,size:t.prevSize,startIndex:t.prevIndex}]})),{prevIndex:0,prevSize:o,ranges:[]}).ranges}))),r);const x=Cp(fp(s,xp(p,g),mp((([e,{offsetTree:t},r])=>pf(-e,t,r)))));return lp(fp(s,xp(p,g),mp((([e,t,r])=>{if(t.groupIndices.length>0){if(Pp(t.sizeTree))return t;let n=Yp();const o=ap(f);let i=0,s=0,a=0;for(;i<-e;){a=o[s];const e=o[s+1]-a-1;s++,i+=e+1}if(n=Gp(t.sizeTree).reduce(((t,{k:r,v:n})=>Vp(t,Math.max(0,r+e),n)),n),i!==-e){n=Vp(n,0,Wp(t.sizeTree,a));n=Vp(n,1,Np(t.sizeTree,1-e)[1])}return{...t,sizeTree:n,...wf(t.offsetTree,0,n,r)}}{const n=Gp(t.sizeTree).reduce(((t,{k:r,v:n})=>Vp(t,Math.max(0,r+e),n)),Yp());return{...t,sizeTree:n,...wf(t.offsetTree,0,n,r)}}}))),p),{beforeUnshiftWith:v,data:h,defaultItemSize:c,firstItemIndex:a,fixedItemSize:d,gap:g,groupIndices:l,itemSize:u,listRefresh:y,shiftWith:s,shiftWithOffset:x,sizeRanges:r,sizes:p,statefulTotalCount:o,totalCount:n,trackItemSizes:b,unshiftWith:i}}),np(Ap,lf),{singleton:!0});function Sf(e){return e.reduce(((e,t)=>(e.groupIndices.push(e.totalCount),e.totalCount+=t+1,e)),{groupIndices:[],totalCount:0})}const kf=Ep((([{groupIndices:e,sizes:t,totalCount:r},{headerHeight:n,scrollTop:o}])=>{const i=Fp(),s=Fp(),a=Cp(fp(i,mp(Sf)));return lp(fp(a,mp((e=>e.totalCount))),r),lp(fp(a,mp((e=>e.groupIndices))),e),lp(fp(kp(o,t,n),gp((([e,t])=>hf(t))),mp((([e,t,r])=>Np(t.groupOffsetTree,Math.max(e-r,0),"v")[0])),hp(),mp((e=>[e]))),s),{groupCounts:i,topItemsIndexes:s}}),np(Ef,Hp)),Df=Ep((([{log:e}])=>{const t=wp(!1),r=Cp(fp(t,gp((e=>e)),hp()));return op(t,(t=>{t&&ap(e)("props updated",{},Tp.DEBUG)})),{didMount:r,propsReady:t}}),np(Ap),{singleton:!0}),If=typeof document<"u"&&"scrollBehavior"in document.documentElement.style;function Tf(e){const t="number"==typeof e?{index:e}:e;return t.align||(t.align="start"),(!t.behavior||!If)&&(t.behavior="auto"),t.offset||(t.offset=0),t}const Bf=Ep((([{gap:e,listRefresh:t,sizes:r,totalCount:n},{fixedFooterHeight:o,fixedHeaderHeight:i,footerHeight:s,headerHeight:a,scrollingInProgress:l,scrollTo:d,smoothScrollTargetReached:c,viewportHeight:u},{log:h}])=>{const g=Fp(),m=Fp(),p=wp(0);let f=null,b=null,y=null;function v(){f&&(f(),f=null),y&&(y(),y=null),b&&(clearTimeout(b),b=null),ip(l,!1)}return lp(fp(g,xp(r,u,n,p,a,s,h),xp(e,i,o),mp((([[e,r,n,o,i,s,a,d],u,h,p])=>{const x=Tf(e),{align:w,behavior:$,offset:F}=x,C=o-1,E=bf(x,r,C);let S=pf(E,r.offsetTree,u)+s;"end"===w?(S+=h+Np(r.sizeTree,E)[1]-n+p,E===C&&(S+=a)):"center"===w?S+=(h+Np(r.sizeTree,E)[1]-n+p)/2:S-=i,F&&(S+=F);const k=t=>{v(),t?(d("retrying to scroll to",{location:e},Tp.DEBUG),ip(g,e)):(ip(m,!0),d("list did not change, scroll successful",{},Tp.DEBUG))};if(v(),"smooth"===$){let e=!1;y=op(t,(t=>{e=e||t})),f=dp(c,(()=>{k(e)}))}else f=dp(fp(t,function(e){return t=>{const r=setTimeout((()=>{t(!1)}),e);return e=>{e&&(t(!0),clearTimeout(r))}}}(150)),k);return b=setTimeout((()=>{v()}),1200),ip(l,!0),d("scrolling from index to",{behavior:$,index:E,top:S},Tp.DEBUG),{behavior:$,top:S}}))),d),{scrollTargetReached:m,scrollToIndex:g,topListHeight:p}}),np(Ef,Hp,Ap),{singleton:!0});function Af(e,t){0==e?t():requestAnimationFrame((()=>{Af(e-1,t)}))}function zf(e,t){const r=t-1;return"number"==typeof e?e:"LAST"===e.index?r:e.index}const Of=Ep((([{defaultItemSize:e,listRefresh:t,sizes:r},{scrollTop:n},{scrollTargetReached:o,scrollToIndex:i},{didMount:s}])=>{const a=wp(!0),l=wp(0),d=wp(!0);return lp(fp(s,xp(l),gp((([e,t])=>!!t)),pp(!1)),a),lp(fp(s,xp(l),gp((([e,t])=>!!t)),pp(!1)),d),op(fp(kp(t,s),xp(a,r,e,d),gp((([[,e],t,{sizeTree:r},n,o])=>e&&(!Pp(r)||Jm(n))&&!t&&!o)),xp(l)),(([,e])=>{dp(o,(()=>{ip(d,!0)})),Af(4,(()=>{dp(n,(()=>{ip(a,!0)})),ip(i,e)}))})),{initialItemFinalLocationReached:d,initialTopMostItemIndex:l,scrolledToInitialItem:a}}),np(Ef,Hp,Bf,Df),{singleton:!0});function Mf(e,t){return Math.abs(e-t)<1.01}const _f="up",Rf="down",Hf={atBottom:!1,notAtBottomBecause:"NOT_SHOWING_LAST_ITEM",state:{offsetBottom:0,scrollHeight:0,scrollTop:0,viewportHeight:0}},jf=Ep((([{footerHeight:e,headerHeight:t,scrollBy:r,scrollContainerState:n,scrollTop:o,viewportHeight:i}])=>{const s=wp(!1),a=wp(!0),l=Fp(),d=Fp(),c=wp(4),u=wp(0),h=$p(fp(Ip(fp(Dp(o),yp(1),pp(!0)),fp(Dp(o),yp(1),pp(!1),cp(100))),hp()),!1),g=$p(fp(Ip(fp(r,pp(!0)),fp(r,pp(!1),cp(200))),hp()),!1);lp(fp(kp(Dp(o),Dp(u)),mp((([e,t])=>e<=t)),hp()),a),lp(fp(a,vp(50)),d);const m=Cp(fp(kp(n,Dp(i),Dp(t),Dp(e),Dp(c)),bp(((e,[{scrollHeight:t,scrollTop:r},n,o,i,s])=>{const a={scrollHeight:t,scrollTop:r,viewportHeight:n};if(r+n-t>-s){let t,n;return r>e.state.scrollTop?(t="SCROLLED_DOWN",n=e.state.scrollTop-r):(t="SIZE_DECREASED",n=e.state.scrollTop-r||e.scrollTopDelta),{atBottom:!0,atBottomBecause:t,scrollTopDelta:n,state:a}}let l;return l=a.scrollHeight>e.state.scrollHeight?"SIZE_INCREASED":n<e.state.viewportHeight?"VIEWPORT_HEIGHT_DECREASING":r<e.state.scrollTop?"SCROLLING_UPWARDS":"NOT_FULLY_SCROLLED_TO_LAST_ITEM_BOTTOM",{atBottom:!1,notAtBottomBecause:l,state:a}}),Hf),hp(((e,t)=>e&&e.atBottom===t.atBottom)))),p=$p(fp(n,bp(((e,{scrollHeight:t,scrollTop:r,viewportHeight:n})=>{if(Mf(e.scrollHeight,t))return{changed:!1,jump:0,scrollHeight:t,scrollTop:r};{const o=t-(r+n)<1;return e.scrollTop!==r&&o?{changed:!0,jump:e.scrollTop-r,scrollHeight:t,scrollTop:r}:{changed:!0,jump:0,scrollHeight:t,scrollTop:r}}}),{changed:!1,jump:0,scrollHeight:0,scrollTop:0}),gp((e=>e.changed)),mp((e=>e.jump))),0);lp(fp(m,mp((e=>e.atBottom))),s),lp(fp(s,vp(50)),l);const f=wp(Rf);lp(fp(n,mp((({scrollTop:e})=>e)),hp(),bp(((e,t)=>ap(g)?{direction:e.direction,prevScrollTop:t}:{direction:t<e.prevScrollTop?_f:Rf,prevScrollTop:t}),{direction:Rf,prevScrollTop:0}),mp((e=>e.direction))),f),lp(fp(n,vp(50),pp("none")),f);const b=wp(0);return lp(fp(h,gp((e=>!e)),pp(0)),b),lp(fp(o,vp(100),xp(h),gp((([e,t])=>!!t)),bp((([e,t],[r])=>[t,r]),[0,0]),mp((([e,t])=>t-e))),b),{atBottomState:m,atBottomStateChange:l,atBottomThreshold:c,atTopStateChange:d,atTopThreshold:u,isAtBottom:s,isAtTop:a,isScrolling:h,lastJumpDueToItemResize:p,scrollDirection:f,scrollVelocity:b}}),np(Hp)),Lf="top",Pf="bottom",Wf="none";function Nf(e,t,r){return"number"==typeof e?r===_f&&t===Lf||r===Rf&&t===Pf?e:0:r===_f?t===Lf?e.main:e.reverse:t===Pf?e.main:e.reverse}function Vf(e,t){var r;return"number"==typeof e?e:null!=(r=e[t])?r:0}const Yf=Ep((([{deviation:e,fixedHeaderHeight:t,headerHeight:r,scrollTop:n,viewportHeight:o}])=>{const i=Fp(),s=wp(0),a=wp(0),l=wp(0);return{increaseViewportBy:a,listBoundary:i,overscan:l,topListHeight:s,visibleRange:$p(fp(kp(Dp(n),Dp(o),Dp(r),Dp(i,af),Dp(l),Dp(s),Dp(t),Dp(e),Dp(a)),mp((([e,t,r,[n,o],i,s,a,l,d])=>{const c=e-l,u=s+a,h=Math.max(r-c,0);let g=Wf;const m=Vf(d,Lf),p=Vf(d,Pf);return n-=l,o+=r+a,(n+=r+a)>e+u-m&&(g=_f),(o-=l)<e-h+t+p&&(g=Rf),g!==Wf?[Math.max(c-r-Nf(i,Lf,g)-m,0),c-h-a+t+Nf(i,Pf,g)+p]:null})),gp((e=>null!=e)),hp(af)),[0,0])}}),np(Hp),{singleton:!0});const Uf={bottom:0,firstItemIndex:0,items:[],offsetBottom:0,offsetTop:0,top:0,topItems:[],topListHeight:0,totalCount:0};function qf(e,t,r,n,o,i){const{lastIndex:s,lastOffset:a,lastSize:l}=o;let d=0,c=0;if(e.length>0){d=e[0].offset;const t=e[e.length-1];c=t.offset+t.size}const u=r-s,h=d,g=a+u*l+(u-1)*n-c;return{bottom:c,firstItemIndex:i,items:Zf(e,o,i),offsetBottom:g,offsetTop:d,top:h,topItems:Zf(t,o,i),topListHeight:t.reduce(((e,t)=>t.size+e),0),totalCount:r}}function Gf(e,t,r,n,o,i){let s=0;if(r.groupIndices.length>0)for(const t of r.groupIndices){if(t-s>=e)break;s++}const a=e+s,l=zf(t,a);return qf(Array.from({length:a}).map(((e,t)=>({data:i[t+l],index:t+l,offset:0,size:0}))),[],a,o,r,n)}function Zf(e,t,r){if(0===e.length)return[];if(!hf(t))return e.map((e=>({...e,index:e.index+r,originalIndex:e.index})));const n=e[0].index,o=e[e.length-1].index,i=[],s=Up(t.groupOffsetTree,n,o);let a,l=0;for(const n of e){let e;(!a||a.end<n.index)&&(a=s.shift(),l=t.groupIndices.indexOf(a.start)),e=n.index===a.start?{index:l,type:"group"}:{groupIndex:l,index:n.index-(l+1)+r},i.push({...e,data:n.data,offset:n.offset,originalIndex:n.index,size:n.size})}return i}const Qf=Ep((([{data:e,firstItemIndex:t,gap:r,sizes:n,totalCount:o},i,{listBoundary:s,topListHeight:a,visibleRange:l},{initialTopMostItemIndex:d,scrolledToInitialItem:c},{topListHeight:u},h,{didMount:g},{recalcInProgress:m}])=>{const p=wp([]),f=wp(0),b=Fp();lp(i.topItemsIndexes,p);const y=$p(fp(kp(g,m,Dp(l,af),Dp(o),Dp(n),Dp(d),c,Dp(p),Dp(t),Dp(r),e),gp((([e,t,,r,,,,,,,n])=>{const o=n&&n.length!==r;return e&&!t&&!o})),mp((([,,[e,t],r,n,o,i,s,a,l,d])=>{const c=n,{offsetTree:u,sizeTree:h}=c,g=ap(f);if(0===r)return{...Uf,totalCount:r};if(0===e&&0===t)return 0===g?{...Uf,totalCount:r}:Gf(g,o,n,a,l,d||[]);if(Pp(h))return g>0?null:qf(function(e,t,r){if(hf(t)){const n=ff(e,t);return[{index:Np(t.groupOffsetTree,n)[0],offset:0,size:0},{data:null==r?void 0:r[0],index:n,offset:0,size:0}]}return[{data:null==r?void 0:r[0],index:e,offset:0,size:0}]}(zf(o,r),c,d),[],r,l,c,a);const m=[];if(s.length>0){const e=s[0],t=s[s.length-1];let r=0;for(const n of Up(h,e,t)){const o=n.value,i=Math.max(n.start,e),s=Math.min(n.end,t);for(let e=i;e<=s;e++)m.push({data:null==d?void 0:d[e],index:e,offset:r,size:o}),r+=o}}if(!i)return qf([],m,r,l,c,a);const p=s.length>0?s[s.length-1]+1:0,b=yf(u,e,t,p);if(0===b.length)return null;const y=r-1;return qf(tp([],(r=>{for(const n of b){const o=n.value;let i=o.offset,s=n.start;const a=o.size;if(o.offset<e){s+=Math.floor((e-o.offset+l)/(a+l));const t=s-n.start;i+=t*a+t*l}s<p&&(i+=(p-s)*a,s=p);const c=Math.min(n.end,y);for(let e=s;e<=c&&!(i>=t);e++)r.push({data:null==d?void 0:d[e],index:e,offset:i,size:a}),i+=a+l}})),m,r,l,c,a)})),gp((e=>null!==e)),hp()),Uf);lp(fp(e,gp(Jm),mp((e=>null==e?void 0:e.length))),o),lp(fp(y,mp((e=>e.topListHeight))),u),lp(u,a),lp(fp(y,mp((e=>[e.top,e.bottom]))),s),lp(fp(y,mp((e=>e.items))),b);const v=Cp(fp(y,gp((({items:e})=>e.length>0)),xp(o,e),gp((([{items:e},t])=>e[e.length-1].originalIndex===t-1)),mp((([,e,t])=>[e-1,t])),hp(af),mp((([e])=>e)))),x=Cp(fp(y,vp(200),gp((({items:e,topItems:t})=>e.length>0&&e[0].originalIndex===t.length)),mp((({items:e})=>e[0].index)),hp())),w=Cp(fp(y,gp((({items:e})=>e.length>0)),mp((({items:e})=>{let t=0,r=e.length-1;for(;"group"===e[t].type&&t<r;)t++;for(;"group"===e[r].type&&r>t;)r--;return{endIndex:e[r].index,startIndex:e[t].index}})),hp(sf)));return{endReached:v,initialItemCount:f,itemsRendered:b,listState:y,rangeChanged:w,startReached:x,topItemsIndexes:p,...h}}),np(Ef,kf,Yf,Of,Bf,jf,Df,lf),{singleton:!0}),Xf=Ep((([{fixedFooterHeight:e,fixedHeaderHeight:t,footerHeight:r,headerHeight:n},{listState:o}])=>{const i=Fp(),s=$p(fp(kp(r,e,n,t,o),mp((([e,t,r,n,o])=>e+t+r+n+o.offsetBottom+o.bottom))),0);return lp(Dp(s),i),{totalListHeight:s,totalListHeightChanged:i}}),np(Hp,Qf),{singleton:!0}),Kf=Ep((([{viewportHeight:e},{totalListHeight:t}])=>{const r=wp(!1);return{alignToBottom:r,paddingTopAddition:$p(fp(kp(r,e,t),gp((([e])=>e)),mp((([,e,t])=>Math.max(0,e-t))),vp(0),hp()),0)}}),np(Hp,Xf),{singleton:!0});function Jf(e){return!!e&&("smooth"===e?"smooth":"auto")}const eb=Ep((([{listRefresh:e,totalCount:t},{atBottomState:r,isAtBottom:n},{scrollToIndex:o},{scrolledToInitialItem:i},{didMount:s,propsReady:a},{log:l},{scrollingInProgress:d}])=>{const c=wp(!1),u=Fp();let h=null;function g(e){ip(o,{align:"end",behavior:e,index:"LAST"})}function m(e){const t=dp(r,(t=>{e&&!t.atBottom&&"SIZE_INCREASED"===t.notAtBottomBecause&&!h&&(ap(l)("scrolling to bottom due to increased size",{},Tp.DEBUG),g("auto"))}));setTimeout(t,100)}return op(fp(kp(fp(Dp(t),yp(1)),s),xp(Dp(c),n,i,d),mp((([[e,t],r,n,o,i])=>{let s=t&&o,a="auto";return s&&(a=((e,t)=>"function"==typeof e?Jf(e(t)):t&&Jf(e))(r,n||i),s=s&&!!a),{followOutputBehavior:a,shouldFollow:s,totalCount:e}})),gp((({shouldFollow:e})=>e))),(({followOutputBehavior:t,totalCount:r})=>{h&&(h(),h=null),h=dp(e,(()=>{ap(l)("following output to ",{totalCount:r},Tp.DEBUG),g(t),h=null}))})),op(fp(kp(Dp(c),t,a),gp((([e,,t])=>e&&t)),bp((({value:e},[,t])=>({refreshed:e===t,value:t})),{refreshed:!1,value:0}),gp((({refreshed:e})=>e)),xp(c,t)),(([,e])=>{ap(i)&&m(!1!==e)})),op(u,(()=>{m(!1!==ap(c))})),op(kp(Dp(c),r),(([e,t])=>{e&&!t.atBottom&&"VIEWPORT_HEIGHT_DECREASING"===t.notAtBottomBecause&&g("auto")})),{autoscrollToBottom:u,followOutput:c}}),np(Ef,jf,Bf,Of,Df,Ap,Hp)),tb=Ep((([{data:e,firstItemIndex:t,gap:r,sizes:n},{initialTopMostItemIndex:o},{initialItemCount:i,listState:s},{didMount:a}])=>(lp(fp(a,xp(i),gp((([,e])=>0!==e)),xp(o,n,t,r,e),mp((([[,e],t,r,n,o,i=[]])=>Gf(e,t,r,n,o,i)))),s),{})),np(Ef,Of,Qf,Df),{singleton:!0}),rb=Ep((([{didMount:e},{scrollTo:t},{listState:r}])=>{const n=wp(0);return op(fp(e,xp(n),gp((([,e])=>0!==e)),mp((([,e])=>({top:e})))),(e=>{dp(fp(r,yp(1),gp((e=>e.items.length>1))),(()=>{requestAnimationFrame((()=>{ip(t,e)}))}))})),{initialScrollTop:n}}),np(Df,Hp,Qf),{singleton:!0}),nb=({itemBottom:e,itemTop:t,locationParams:{align:r,behavior:n,...o},viewportBottom:i,viewportTop:s})=>t<s?{...o,align:null!=r?r:"start",behavior:n}:e>i?{...o,align:null!=r?r:"end",behavior:n}:null,ob=Ep((([{gap:e,sizes:t,totalCount:r},{fixedFooterHeight:n,fixedHeaderHeight:o,headerHeight:i,scrollingInProgress:s,scrollTop:a,viewportHeight:l},{scrollToIndex:d}])=>{const c=Fp();return lp(fp(c,xp(t,l,r,i,o,n,a),xp(e),mp((([[e,t,r,n,o,i,a,l],d])=>{const{align:c,behavior:u,calculateViewLocation:h=nb,done:g,...m}=e,p=bf(e,t,n-1),f=pf(p,t.offsetTree,d)+o+i,b=h({itemBottom:f+Np(t.sizeTree,p)[1],itemTop:f,locationParams:{align:c,behavior:u,...m},viewportBottom:l+r-a,viewportTop:l+i});return b?g&&dp(fp(s,gp((e=>!e)),yp(ap(s)?1:2)),g):g&&g(),b})),gp((e=>null!==e))),d),{scrollIntoView:c}}),np(Ef,Hp,Bf,Qf,Ap),{singleton:!0}),ib=Ep((([{scrollVelocity:e}])=>{const t=wp(!1),r=Fp(),n=wp(!1);return lp(fp(e,xp(n,t,r),gp((([e,t])=>!!t)),mp((([e,t,r,n])=>{const{enter:o,exit:i}=t;if(r){if(i(e,n))return!1}else if(o(e,n))return!0;return r})),hp()),t),op(fp(kp(t,e,r),xp(n)),(([[e,t,r],n])=>{e&&n&&n.change&&n.change(t,r)})),{isSeeking:t,scrollSeekConfiguration:n,scrollSeekRangeChanged:r,scrollVelocity:e}}),np(jf),{singleton:!0}),sb=Ep((([{scrollContainerState:e,scrollTo:t}])=>{const r=Fp(),n=Fp(),o=Fp(),i=wp(!1),s=wp(void 0);return lp(fp(kp(r,n),mp((([{scrollHeight:e,scrollTop:t,viewportHeight:r},{offsetTop:n}])=>({scrollHeight:e,scrollTop:Math.max(0,t-n),viewportHeight:r})))),e),lp(fp(t,xp(n),mp((([e,{offsetTop:t}])=>({...e,top:e.top+t})))),o),{customScrollParent:s,useWindowScroll:i,windowScrollContainerState:r,windowScrollTo:o,windowViewportRect:n}}),np(Hp)),ab=Ep((([{sizeRanges:e,sizes:t},{headerHeight:r,scrollTop:n},{initialTopMostItemIndex:o},{didMount:i},{useWindowScroll:s,windowScrollContainerState:a,windowViewportRect:l}])=>{const d=Fp(),c=wp(void 0),u=wp(null),h=wp(null);return lp(a,u),lp(l,h),op(fp(d,xp(t,n,s,u,h,r)),(([e,t,r,n,o,i,s])=>{const a=function(e){return Gp(e).map((({k:e,v:t},r,n)=>{const o=n[r+1];return{endIndex:o?o.k-1:1/0,size:t,startIndex:e}}))}(t.sizeTree);n&&null!==o&&null!==i&&(r=o.scrollTop-i.offsetTop),e({ranges:a,scrollTop:r-=s})})),lp(fp(c,gp(Jm),mp(lb)),o),lp(fp(i,xp(c),gp((([,e])=>void 0!==e)),hp(),mp((([,e])=>e.ranges))),e),{getState:d,restoreStateFrom:c}}),np(Ef,Hp,Of,Df,sb));function lb(e){return{align:"start",index:0,offset:e.scrollTop}}const db=Ep((([{topItemsIndexes:e}])=>{const t=wp(0);return lp(fp(t,gp((e=>e>=0)),mp((e=>Array.from({length:e}).map(((e,t)=>t))))),e),{topItemCount:t}}),np(Qf));function cb(e){let t,r=!1;return()=>(r||(r=!0,t=e()),t)}const ub=cb((()=>/iP(ad|od|hone)/i.test(navigator.userAgent)&&/WebKit/i.test(navigator.userAgent))),hb=Ep((([{deviation:e,scrollBy:t,scrollingInProgress:r,scrollTop:n},{isAtBottom:o,isScrolling:i,lastJumpDueToItemResize:s,scrollDirection:a},{listState:l},{beforeUnshiftWith:d,gap:c,shiftWithOffset:u,sizes:h},{log:g},{recalcInProgress:m}])=>{const p=Cp(fp(l,xp(s),bp((([,e,t,r],[{bottom:n,items:o,offsetBottom:i,totalCount:s},a])=>{const l=n+i;let d=0;return t===s&&e.length>0&&o.length>0&&(0===o[0].originalIndex&&0===e[0].originalIndex||(d=l-r,0!==d&&(d+=a))),[d,o,s,l]}),[0,[],0,0]),gp((([e])=>0!==e)),xp(n,a,r,o,g,m),gp((([,e,t,r,,,n])=>!n&&!r&&0!==e&&t===_f)),mp((([[e],,,,,t])=>(t("Upward scrolling compensation",{amount:e},Tp.DEBUG),e)))));function f(r){r>0?(ip(t,{behavior:"auto",top:-r}),ip(e,0)):(ip(e,0),ip(t,{behavior:"auto",top:-r}))}return op(fp(p,xp(e,i)),(([t,r,n])=>{n&&ub()?ip(e,r-t):f(-t)})),op(fp(kp($p(i,!1),e,m),gp((([e,t,r])=>!e&&!r&&0!==t)),mp((([e,t])=>t)),vp(1)),f),lp(fp(u,mp((e=>({top:-e})))),t),op(fp(d,xp(h,c),mp((([e,{groupIndices:t,lastSize:r,sizeTree:n},o])=>{function i(e){return e*(r+o)}if(0===t.length)return i(e);{let r=0;const o=Wp(n,0);let s=0,a=0;for(;s<e;){s++,r+=o;let n=t.length===a+1?1/0:t[a+1]-t[a]-1;s+n>e&&(r-=o,n=e-s+1),s+=n,r+=i(n),a++}return r}}))),(r=>{ip(e,r),requestAnimationFrame((()=>{ip(t,{top:r}),requestAnimationFrame((()=>{ip(e,0),ip(m,!1)}))}))})),{deviation:e}}),np(Hp,jf,Qf,Ef,Ap,lf)),gb=Ep((([e,t,r,n,o,i,s,a,l,d])=>({...e,...t,...r,...n,...o,...i,...s,...a,...l,...d})),np(Yf,tb,Df,ib,Xf,rb,Kf,sb,ob,Ap)),mb=Ep((([{data:e,defaultItemSize:t,firstItemIndex:r,fixedItemSize:n,gap:o,groupIndices:i,itemSize:s,sizeRanges:a,sizes:l,statefulTotalCount:d,totalCount:c,trackItemSizes:u},{initialItemFinalLocationReached:h,initialTopMostItemIndex:g,scrolledToInitialItem:m},p,f,b,{listState:y,topItemsIndexes:v,...x},{scrollToIndex:w},$,{topItemCount:F},{groupCounts:C},E])=>(lp(x.rangeChanged,E.scrollSeekRangeChanged),lp(fp(E.windowViewportRect,mp((e=>e.visibleHeight))),p.viewportHeight),{data:e,defaultItemHeight:t,firstItemIndex:r,fixedItemHeight:n,gap:o,groupCounts:C,initialItemFinalLocationReached:h,initialTopMostItemIndex:g,scrolledToInitialItem:m,sizeRanges:a,topItemCount:F,topItemsIndexes:v,totalCount:c,...b,groupIndices:i,itemSize:s,listState:y,scrollToIndex:w,statefulTotalCount:d,trackItemSizes:u,...x,...E,...p,sizes:l,...f})),np(Ef,Of,Hp,ab,eb,Qf,Bf,hb,db,kf,gb));function pb(e,t){const r={},n={};let o=0;const i=e.length;for(;o<i;)n[e[o]]=1,o+=1;for(const e in t)Object.hasOwn(n,e)||(r[e]=t[e]);return r}const fb=typeof document<"u"?o.useLayoutEffect:o.useEffect;function bb(e,r,n){const i=Object.keys(r.required||{}),s=Object.keys(r.optional||{}),a=Object.keys(r.methods||{}),l=Object.keys(r.events||{}),d=o.createContext({});function c(e,t){e.propsReady&&ip(e.propsReady,!1);for(const n of i){ip(e[r.required[n]],t[n])}for(const n of s)if(n in t){ip(e[r.optional[n]],t[n])}e.propsReady&&ip(e.propsReady,!0)}function u(e){return l.reduce(((t,n)=>(t[n]=function(e){let t,r;const n=()=>null==t?void 0:t();return function(o,i){switch(o){case 1:return i?r===i?void 0:(n(),r=i,t=op(e,i),t):(n(),ep);case 2:return n(),void(r=null)}}}(e[r.events[n]]),t)),{})}const h=o.forwardRef(((h,g)=>{const{children:m,...p}=h,[f]=o.useState((()=>tp(function(e){const t=new Map,r=({constructor:e,dependencies:n,id:o,singleton:i})=>{if(i&&t.has(o))return t.get(o);const s=e(n.map((e=>r(e))));return i&&t.set(o,s),s};return r(e)}(e),(e=>{c(e,p)})))),[b]=o.useState(Xm(u,f));fb((()=>{for(const e of l)e in p&&op(b[e],p[e]);return()=>{Object.values(b).map(sp)}}),[p,b,f]),fb((()=>{c(f,p)})),o.useImperativeHandle(g,Gm(function(e){return a.reduce(((t,n)=>(t[n]=t=>{ip(e[r.methods[n]],t)},t)),{})}(f)));const y=n;return t(d.Provider,{value:f,children:n?t(y,{...pb([...i,...s,...l],p),children:m}):m})}));return{Component:h,useEmitter:(e,t)=>{const r=o.useContext(d)[e];fb((()=>op(r,t)),[t,r])},useEmitterValue:o.version.startsWith("18")?e=>{const t=o.useContext(d)[e],r=o.useCallback((e=>op(t,e)),[t]);return o.useSyncExternalStore(r,(()=>ap(t)),(()=>ap(t)))}:e=>{const t=o.useContext(d)[e],[r,n]=o.useState(Xm(ap,t));return fb((()=>op(t,(e=>{e!==r&&n(Gm(e))}))),[t,r]),r},usePublisher:e=>o.useCallback(Km(ip,o.useContext(d)[e]),[e])}}const yb=o.createContext(void 0),vb=o.createContext(void 0),xb=typeof document<"u"?o.useLayoutEffect:o.useEffect;function wb(e,t,r,n=ep,i,s){const a=o.useRef(null),l=o.useRef(null),d=o.useRef(null),c=o.useCallback((r=>{const n=r.target,o=n===window||n===document,i=s?o?window.pageXOffset||document.documentElement.scrollLeft:n.scrollLeft:o?window.pageYOffset||document.documentElement.scrollTop:n.scrollTop,a=s?o?document.documentElement.scrollWidth:n.scrollWidth:o?document.documentElement.scrollHeight:n.scrollHeight,c=s?o?window.innerWidth:n.offsetWidth:o?window.innerHeight:n.offsetHeight,u=()=>{e({scrollHeight:a,scrollTop:Math.max(i,0),viewportHeight:c})};r.suppressFlushSync?u():S.flushSync(u),null!==l.current&&(i===l.current||i<=0||i===a-c)&&(l.current=null,t(!0),d.current&&(clearTimeout(d.current),d.current=null))}),[e,t]);return o.useEffect((()=>{const e=i||a.current;return n(i||a.current),c({suppressFlushSync:!0,target:e}),e.addEventListener("scroll",c,{passive:!0}),()=>{n(null),e.removeEventListener("scroll",c)}}),[a,c,r,n,i]),{scrollByCallback:function(e){s&&(e={behavior:e.behavior,left:e.top}),a.current.scrollBy(e)},scrollerRef:a,scrollToCallback:function(r){const n=a.current;if(!n||(s?"offsetWidth"in n&&0===n.offsetWidth:"offsetHeight"in n&&0===n.offsetHeight))return;const o="smooth"===r.behavior;let i,c,u;n===window?(c=Math.max(uf(document.documentElement,s?"width":"height"),s?document.documentElement.scrollWidth:document.documentElement.scrollHeight),i=s?window.innerWidth:window.innerHeight,u=s?document.documentElement.scrollLeft:document.documentElement.scrollTop):(c=n[s?"scrollWidth":"scrollHeight"],i=uf(n,s?"width":"height"),u=n[s?"scrollLeft":"scrollTop"]);const h=c-i;if(r.top=Math.ceil(Math.max(Math.min(h,r.top),0)),Mf(i,c)||r.top===u)return e({scrollHeight:c,scrollTop:u,viewportHeight:i}),void(o&&t(!0));o?(l.current=r.top,d.current&&clearTimeout(d.current),d.current=setTimeout((()=>{d.current=null,l.current=null,t(!0)}),1e3)):l.current=null,s&&(r={behavior:r.behavior,left:r.top}),n.scrollTo(r)}}}const $b="-webkit-sticky",Fb="sticky",Cb=cb((()=>{if(typeof document>"u")return Fb;const e=document.createElement("div");return e.style.position=$b,e.style.position===$b?$b:Fb}));function Eb(e){return e}const Sb=Ep((()=>{const e=wp((e=>`Item ${e}`)),t=wp(null),r=wp((e=>`Group ${e}`)),n=wp({}),o=wp(Eb),i=wp("div"),s=wp(ep),a=(e,t=null)=>$p(fp(n,mp((t=>t[e])),hp()),t);return{components:n,computeItemKey:o,context:t,EmptyPlaceholder:a("EmptyPlaceholder"),FooterComponent:a("Footer"),GroupComponent:a("Group","div"),groupContent:r,HeaderComponent:a("Header"),HeaderFooterTag:i,ItemComponent:a("Item","div"),itemContent:e,ListComponent:a("List","div"),ScrollerComponent:a("Scroller","div"),scrollerRef:s,ScrollSeekPlaceholder:a("ScrollSeekPlaceholder"),TopItemListComponent:a("TopItemList")}})),kb=Ep((([e,t])=>({...e,...t})),np(mb,Sb)),Db=({height:e})=>t("div",{style:{height:e}}),Ib={overflowAnchor:"none",position:Cb(),zIndex:1},Tb={overflowAnchor:"none"},Bb={...Tb,display:"inline-block",height:"100%"},Ab=o.memo((function({showTopList:e=!1}){const r=Zb("listState"),n=Qb("sizeRanges"),i=Zb("useWindowScroll"),s=Zb("customScrollParent"),a=Qb("windowScrollContainerState"),l=Qb("scrollContainerState"),d=s||i?a:l,c=Zb("itemContent"),u=Zb("context"),h=Zb("groupContent"),g=Zb("trackItemSizes"),m=Zb("itemSize"),p=Zb("log"),f=Qb("gap"),y=Zb("horizontalDirection"),{callbackRef:v}=Mp(n,m,g,e?ep:d,p,f,s,y,Zb("skipAnimationFrameInResizeObserver")),[x,w]=o.useState(0);Gb("deviation",(e=>{x!==e&&w(e)}));const $=Zb("EmptyPlaceholder"),F=Zb("ScrollSeekPlaceholder")||Db,C=Zb("ListComponent"),E=Zb("ItemComponent"),S=Zb("GroupComponent"),k=Zb("computeItemKey"),D=Zb("isSeeking"),I=Zb("groupIndices").length>0,T=Zb("alignToBottom"),B=Zb("initialItemFinalLocationReached"),A=e?{}:{boxSizing:"border-box",...y?{display:"inline-block",height:"100%",marginLeft:0!==x?x:T?"auto":0,paddingLeft:r.offsetTop,paddingRight:r.offsetBottom,whiteSpace:"nowrap"}:{marginTop:0!==x?x:T?"auto":0,paddingBottom:r.offsetBottom,paddingTop:r.offsetTop},...B?{}:{visibility:"hidden"}};return!e&&0===r.totalCount&&$?t($,{...Rb($,u)}):t(C,{...Rb(C,u),"data-testid":e?"virtuoso-top-item-list":"virtuoso-item-list",ref:v,style:A,children:(e?r.topItems:r.items).map((e=>{const t=e.originalIndex,n=k(t+r.firstItemIndex,e.data,u);return D?b(F,{...Rb(F,u),height:e.size,index:e.index,key:n,type:e.type||"item",..."group"===e.type?{}:{groupIndex:e.groupIndex}}):"group"===e.type?b(S,{...Rb(S,u),"data-index":t,"data-item-index":e.index,"data-known-size":e.size,key:n,style:Ib},h(e.index,u)):b(E,{...Rb(E,u),...Hb(E,e.data),"data-index":t,"data-item-group-index":e.groupIndex,"data-item-index":e.index,"data-known-size":e.size,key:n,style:y?Bb:Tb},I?c(e.index,e.groupIndex,e.data,u):c(e.index,e.data,u))}))})})),zb={height:"100%",outline:"none",overflowY:"auto",position:"relative",WebkitOverflowScrolling:"touch"},Ob={outline:"none",overflowX:"auto",position:"relative"},Mb=e=>({height:"100%",position:"absolute",top:0,width:"100%",...e?{display:"flex",flexDirection:"column"}:{}}),_b={position:Cb(),top:0,width:"100%",zIndex:1};function Rb(e,t){if("string"!=typeof e)return{context:t}}function Hb(e,t){return{item:"string"==typeof e?void 0:t}}const jb=o.memo((function(){const e=Zb("HeaderComponent"),r=Qb("headerHeight"),n=Zb("HeaderFooterTag"),i=zp(o.useMemo((()=>e=>{r(uf(e,"height"))}),[r]),!0,Zb("skipAnimationFrameInResizeObserver")),s=Zb("context");return e?t(n,{ref:i,children:t(e,{...Rb(e,s)})}):null})),Lb=o.memo((function(){const e=Zb("FooterComponent"),r=Qb("footerHeight"),n=Zb("HeaderFooterTag"),i=zp(o.useMemo((()=>e=>{r(uf(e,"height"))}),[r]),!0,Zb("skipAnimationFrameInResizeObserver")),s=Zb("context");return e?t(n,{ref:i,children:t(e,{...Rb(e,s)})}):null}));function Pb({useEmitter:e,useEmitterValue:r,usePublisher:n}){return o.memo((function({children:o,style:i,...s}){const a=n("scrollContainerState"),l=r("ScrollerComponent"),d=n("smoothScrollTargetReached"),c=r("scrollerRef"),u=r("context"),h=r("horizontalDirection")||!1,{scrollByCallback:g,scrollerRef:m,scrollToCallback:p}=wb(a,d,l,c,void 0,h);return e("scrollTo",p),e("scrollBy",g),t(l,{"data-testid":"virtuoso-scroller","data-virtuoso-scroller":!0,ref:m,style:{...h?Ob:zb,...i},tabIndex:0,...s,...Rb(l,u),children:o})}))}function Wb({useEmitter:e,useEmitterValue:r,usePublisher:n}){return o.memo((function({children:o,style:i,...s}){const a=n("windowScrollContainerState"),l=r("ScrollerComponent"),d=n("smoothScrollTargetReached"),c=r("totalListHeight"),u=r("deviation"),h=r("customScrollParent"),g=r("context"),{scrollByCallback:m,scrollerRef:p,scrollToCallback:f}=wb(a,d,l,ep,h);return xb((()=>(p.current=h||window,()=>{p.current=null})),[p,h]),e("windowScrollTo",f),e("scrollBy",m),t(l,{"data-virtuoso-scroller":!0,style:{position:"relative",...i,...0!==c?{height:c+u}:{}},...s,...Rb(l,g),children:o})}))}const Nb=({children:e})=>{const r=o.useContext(yb),n=Qb("viewportHeight"),i=Qb("fixedItemHeight"),s=Zb("alignToBottom"),a=Zb("horizontalDirection"),l=zp(o.useMemo((()=>Qm(n,(e=>uf(e,a?"width":"height")))),[n,a]),!0,Zb("skipAnimationFrameInResizeObserver"));return o.useEffect((()=>{r&&(n(r.viewportHeight),i(r.itemHeight))}),[r,n,i]),t("div",{"data-viewport-type":"element",ref:l,style:Mb(s),children:e})},Vb=({children:e})=>{const r=o.useContext(yb),n=Qb("windowViewportRect"),i=Qb("fixedItemHeight"),s=Zb("customScrollParent"),a=Rp(n,s,Zb("skipAnimationFrameInResizeObserver")),l=Zb("alignToBottom");return o.useEffect((()=>{r&&(i(r.itemHeight),n({offsetTop:0,visibleHeight:r.viewportHeight,visibleWidth:100}))}),[r,n,i]),t("div",{"data-viewport-type":"window",ref:a,style:Mb(l),children:e})},Yb=({children:e})=>{const r=Zb("TopItemListComponent")||"div",n=Zb("headerHeight"),o={..._b,marginTop:`${n}px`},i=Zb("context");return t(r,{style:o,...Rb(r,i),children:e})},Ub=o.memo((function(r){const n=Zb("useWindowScroll"),o=Zb("topItemsIndexes").length>0,i=Zb("customScrollParent"),s=Zb("context"),a=i||n?Kb:Xb,l=i||n?Vb:Nb;return e(a,{...r,...Rb(a,s),children:[o&&t(Yb,{children:t(Ab,{showTopList:!0})}),e(l,{children:[t(jb,{}),t(Ab,{}),t(Lb,{})]})]})})),{Component:qb,useEmitter:Gb,useEmitterValue:Zb,usePublisher:Qb}=bb(kb,{events:{atBottomStateChange:"atBottomStateChange",atTopStateChange:"atTopStateChange",endReached:"endReached",groupIndices:"groupIndices",isScrolling:"isScrolling",itemsRendered:"itemsRendered",rangeChanged:"rangeChanged",startReached:"startReached",totalListHeightChanged:"totalListHeightChanged"},methods:{autoscrollToBottom:"autoscrollToBottom",getState:"getState",scrollBy:"scrollBy",scrollIntoView:"scrollIntoView",scrollTo:"scrollTo",scrollToIndex:"scrollToIndex"},optional:{alignToBottom:"alignToBottom",atBottomThreshold:"atBottomThreshold",atTopThreshold:"atTopThreshold",components:"components",computeItemKey:"computeItemKey",context:"context",customScrollParent:"customScrollParent",data:"data",defaultItemHeight:"defaultItemHeight",firstItemIndex:"firstItemIndex",fixedItemHeight:"fixedItemHeight",followOutput:"followOutput",groupContent:"groupContent",groupCounts:"groupCounts",headerFooterTag:"HeaderFooterTag",horizontalDirection:"horizontalDirection",increaseViewportBy:"increaseViewportBy",initialItemCount:"initialItemCount",initialScrollTop:"initialScrollTop",initialTopMostItemIndex:"initialTopMostItemIndex",itemContent:"itemContent",itemSize:"itemSize",logLevel:"logLevel",overscan:"overscan",restoreStateFrom:"restoreStateFrom",scrollerRef:"scrollerRef",scrollSeekConfiguration:"scrollSeekConfiguration",skipAnimationFrameInResizeObserver:"skipAnimationFrameInResizeObserver",topItemCount:"topItemCount",totalCount:"totalCount",useWindowScroll:"useWindowScroll"},required:{}},Ub),Xb=Pb({useEmitter:Gb,useEmitterValue:Zb,usePublisher:Qb}),Kb=Wb({useEmitter:Gb,useEmitterValue:Zb,usePublisher:Qb}),Jb=qb,ey={bottom:0,itemHeight:0,items:[],itemWidth:0,offsetBottom:0,offsetTop:0,top:0},ty={bottom:0,itemHeight:0,items:[{index:0}],itemWidth:0,offsetBottom:0,offsetTop:0,top:0},{ceil:ry,floor:ny,max:oy,min:iy,round:sy}=Math;function ay(e,t,r){return Array.from({length:t-e+1}).map(((t,n)=>({data:null===r?null:r[n+e],index:n+e})))}function ly(e,t){return e&&e.width===t.width&&e.height===t.height}function dy(e,t){return e&&e.column===t.column&&e.row===t.row}const cy=Ep((([{increaseViewportBy:e,listBoundary:t,overscan:r,visibleRange:n},{footerHeight:o,headerHeight:i,scrollBy:s,scrollContainerState:a,scrollTo:l,scrollTop:d,smoothScrollTargetReached:c,viewportHeight:u},h,g,{didMount:m,propsReady:p},{customScrollParent:f,useWindowScroll:b,windowScrollContainerState:y,windowScrollTo:v,windowViewportRect:x},w])=>{const $=wp(0),F=wp(0),C=wp(ey),E=wp({height:0,width:0}),S=wp({height:0,width:0}),k=Fp(),D=Fp(),I=wp(0),T=wp(null),B=wp({column:0,row:0}),A=Fp(),z=Fp(),O=wp(!1),M=wp(0),_=wp(!0),R=wp(!1),H=wp(!1);op(fp(m,xp(M),gp((([e,t])=>!!t))),(()=>{ip(_,!1)})),op(fp(kp(m,_,S,E,M,R),gp((([e,t,r,n,,o])=>e&&!t&&0!==r.height&&0!==n.height&&!o))),(([,,,,e])=>{ip(R,!0),Af(1,(()=>{ip(k,e)})),dp(fp(d),(()=>{ip(t,[0,0]),ip(_,!0)}))})),lp(fp(z,gp((e=>null!=e&&e.scrollTop>0)),pp(0)),F),op(fp(m,xp(z),gp((([,e])=>null!=e))),(([,e])=>{e&&(ip(E,e.viewport),ip(S,e.item),ip(B,e.gap),e.scrollTop>0&&(ip(O,!0),dp(fp(d,yp(1)),(e=>{ip(O,!1)})),ip(l,{top:e.scrollTop})))})),lp(fp(E,mp((({height:e})=>e))),u),lp(fp(kp(Dp(E,ly),Dp(S,ly),Dp(B,((e,t)=>e&&e.column===t.column&&e.row===t.row)),Dp(d)),mp((([e,t,r,n])=>({gap:r,item:t,scrollTop:n,viewport:e})))),A),lp(fp(kp(Dp($),n,Dp(B,dy),Dp(S,ly),Dp(E,ly),Dp(T),Dp(F),Dp(O),Dp(_),Dp(M)),gp((([,,,,,,,e])=>!e)),mp((([e,[t,r],n,o,i,s,a,,l,d])=>{const{column:c,row:u}=n,{height:h,width:g}=o,{width:m}=i;if(0===a&&(0===e||0===m))return ey;if(0===g){const t=zf(d,e);return function(e){return{...ty,items:e}}(ay(t,t+Math.max(a-1,0),s))}const p=uy(m,g,c);let f,b;l?0===t&&0===r&&a>0?(f=0,b=a-1):(f=p*ny((t+u)/(h+u)),b=p*ry((r+u)/(h+u))-1,b=iy(e-1,oy(b,p-1)),f=iy(b,oy(0,f))):(f=0,b=-1);const y=ay(f,b,s),{bottom:v,top:x}=hy(i,n,o,y),w=ry(e/p);return{bottom:v,itemHeight:h,items:y,itemWidth:g,offsetBottom:w*h+(w-1)*u-v,offsetTop:x,top:x}}))),C),lp(fp(T,gp((e=>null!==e)),mp((e=>e.length))),$),lp(fp(kp(E,S,C,B),gp((([e,t,{items:r}])=>r.length>0&&0!==t.height&&0!==e.height)),mp((([e,t,{items:r},n])=>{const{bottom:o,top:i}=hy(e,n,t,r);return[i,o]})),hp(af)),t);const j=wp(!1);lp(fp(d,xp(j),mp((([e,t])=>t||0!==e))),j);const L=Cp(fp(kp(C,$),gp((([{items:e}])=>e.length>0)),xp(j),gp((([[e,t],r])=>{const n=e.items[e.items.length-1].index===t-1;return(r||e.bottom>0&&e.itemHeight>0&&0===e.offsetBottom&&e.items.length===t)&&n})),mp((([[,e]])=>e-1)),hp())),P=Cp(fp(Dp(C),gp((({items:e})=>e.length>0&&0===e[0].index)),pp(0),hp())),W=Cp(fp(Dp(C),xp(O),gp((([{items:e},t])=>e.length>0&&!t)),mp((([{items:e}])=>({endIndex:e[e.length-1].index,startIndex:e[0].index}))),hp(sf),vp(0)));lp(W,g.scrollSeekRangeChanged),lp(fp(k,xp(E,S,$,B),mp((([e,t,r,n,o])=>{const i=Tf(e),{align:s,behavior:a,offset:l}=i;let d=i.index;"LAST"===d&&(d=n-1),d=oy(0,d,iy(n-1,d));let c=gy(t,o,r,d);return"end"===s?c=sy(c-t.height+r.height):"center"===s&&(c=sy(c-t.height/2+r.height/2)),l&&(c+=l),{behavior:a,top:c}}))),l);const N=$p(fp(C,mp((e=>e.offsetBottom+e.bottom))),0);return lp(fp(x,mp((e=>({height:e.visibleHeight,width:e.visibleWidth})))),E),{customScrollParent:f,data:T,deviation:I,footerHeight:o,gap:B,headerHeight:i,increaseViewportBy:e,initialItemCount:F,itemDimensions:S,overscan:r,restoreStateFrom:z,scrollBy:s,scrollContainerState:a,scrollHeight:D,scrollTo:l,scrollToIndex:k,scrollTop:d,smoothScrollTargetReached:c,totalCount:$,useWindowScroll:b,viewportDimensions:E,windowScrollContainerState:y,windowScrollTo:v,windowViewportRect:x,...g,gridState:C,horizontalDirection:H,initialTopMostItemIndex:M,totalListHeight:N,...h,endReached:L,propsReady:p,rangeChanged:W,startReached:P,stateChanged:A,stateRestoreInProgress:O,...w}}),np(Yf,Hp,jf,ib,Df,sb,Ap));function uy(e,t,r){return oy(1,ny((e+r)/(ny(t)+r)))}function hy(e,t,r,n){const{height:o}=r;if(void 0===o||0===n.length)return{bottom:0,top:0};const i=gy(e,t,r,n[0].index);return{bottom:gy(e,t,r,n[n.length-1].index)+o,top:i}}function gy(e,t,r,n){const o=uy(e.width,r.width,t.column),i=ny(n/o),s=i*r.height+oy(0,i-1)*t.row;return s>0?s+t.row:s}const my=Ep((()=>{const e=wp((e=>`Item ${e}`)),t=wp({}),r=wp(null),n=wp("virtuoso-grid-item"),o=wp("virtuoso-grid-list"),i=wp(Eb),s=wp("div"),a=wp(ep),l=(e,r=null)=>$p(fp(t,mp((t=>t[e])),hp()),r),d=wp(!1),c=wp(!1);return lp(Dp(c),d),{components:t,computeItemKey:i,context:r,FooterComponent:l("Footer"),HeaderComponent:l("Header"),headerFooterTag:s,itemClassName:n,ItemComponent:l("Item","div"),itemContent:e,listClassName:o,ListComponent:l("List","div"),readyStateChanged:d,reportReadyState:c,ScrollerComponent:l("Scroller","div"),scrollerRef:a,ScrollSeekPlaceholder:l("ScrollSeekPlaceholder","div")}})),py=Ep((([e,t])=>({...e,...t})),np(cy,my)),fy=o.memo((function(){const e=Cy("gridState"),r=Cy("listClassName"),n=Cy("itemClassName"),i=Cy("itemContent"),s=Cy("computeItemKey"),a=Cy("isSeeking"),l=Ey("scrollHeight"),d=Cy("ItemComponent"),c=Cy("ListComponent"),u=Cy("ScrollSeekPlaceholder"),h=Cy("context"),g=Ey("itemDimensions"),m=Ey("gap"),p=Cy("log"),f=Cy("stateRestoreInProgress"),y=Ey("reportReadyState"),v=zp(o.useMemo((()=>e=>{const t=e.parentElement.parentElement.scrollHeight;l(t);const r=e.firstChild;if(r){const{height:e,width:t}=r.getBoundingClientRect();g({height:e,width:t})}m({column:Dy("column-gap",getComputedStyle(e).columnGap,p),row:Dy("row-gap",getComputedStyle(e).rowGap,p)})}),[l,g,m,p]),!0,!1);return xb((()=>{e.itemHeight>0&&e.itemWidth>0&&y(!0)}),[e]),f?null:t(c,{className:r,ref:v,...Rb(c,h),"data-testid":"virtuoso-item-list",style:{paddingBottom:e.offsetBottom,paddingTop:e.offsetTop},children:e.items.map((r=>{const o=s(r.index,r.data,h);return a?t(u,{...Rb(u,h),height:e.itemHeight,index:r.index,width:e.itemWidth},o):b(d,{...Rb(d,h),className:n,"data-index":r.index,key:o},i(r.index,r.data,h))}))})})),by=o.memo((function(){const e=Cy("HeaderComponent"),r=Ey("headerHeight"),n=Cy("headerFooterTag"),i=zp(o.useMemo((()=>e=>{r(uf(e,"height"))}),[r]),!0,!1),s=Cy("context");return e?t(n,{ref:i,children:t(e,{...Rb(e,s)})}):null})),yy=o.memo((function(){const e=Cy("FooterComponent"),r=Ey("footerHeight"),n=Cy("headerFooterTag"),i=zp(o.useMemo((()=>e=>{r(uf(e,"height"))}),[r]),!0,!1),s=Cy("context");return e?t(n,{ref:i,children:t(e,{...Rb(e,s)})}):null})),vy=({children:e})=>{const r=o.useContext(vb),n=Ey("itemDimensions"),i=Ey("viewportDimensions"),s=zp(o.useMemo((()=>e=>{i(e.getBoundingClientRect())}),[i]),!0,!1);return o.useEffect((()=>{r&&(i({height:r.viewportHeight,width:r.viewportWidth}),n({height:r.itemHeight,width:r.itemWidth}))}),[r,i,n]),t("div",{ref:s,style:Mb(!1),children:e})},xy=({children:e})=>{const r=o.useContext(vb),n=Ey("windowViewportRect"),i=Ey("itemDimensions"),s=Cy("customScrollParent"),a=Rp(n,s,!1);return o.useEffect((()=>{r&&(i({height:r.itemHeight,width:r.itemWidth}),n({offsetTop:0,visibleHeight:r.viewportHeight,visibleWidth:r.viewportWidth}))}),[r,n,i]),t("div",{ref:a,style:Mb(!1),children:e})},wy=o.memo((function({...r}){const n=Cy("useWindowScroll"),o=Cy("customScrollParent"),i=o||n?ky:Sy,s=o||n?xy:vy,a=Cy("context");return t(i,{...r,...Rb(i,a),children:e(s,{children:[t(by,{}),t(fy,{}),t(yy,{})]})})})),{Component:$y,useEmitter:Fy,useEmitterValue:Cy,usePublisher:Ey}=bb(py,{events:{atBottomStateChange:"atBottomStateChange",atTopStateChange:"atTopStateChange",endReached:"endReached",isScrolling:"isScrolling",rangeChanged:"rangeChanged",readyStateChanged:"readyStateChanged",startReached:"startReached",stateChanged:"stateChanged"},methods:{scrollBy:"scrollBy",scrollTo:"scrollTo",scrollToIndex:"scrollToIndex"},optional:{components:"components",computeItemKey:"computeItemKey",context:"context",customScrollParent:"customScrollParent",data:"data",headerFooterTag:"headerFooterTag",increaseViewportBy:"increaseViewportBy",initialItemCount:"initialItemCount",initialTopMostItemIndex:"initialTopMostItemIndex",itemClassName:"itemClassName",itemContent:"itemContent",listClassName:"listClassName",logLevel:"logLevel",overscan:"overscan",restoreStateFrom:"restoreStateFrom",scrollerRef:"scrollerRef",scrollSeekConfiguration:"scrollSeekConfiguration",totalCount:"totalCount",useWindowScroll:"useWindowScroll"}},wy),Sy=Pb({useEmitter:Fy,useEmitterValue:Cy,usePublisher:Ey}),ky=Wb({useEmitter:Fy,useEmitterValue:Cy,usePublisher:Ey});function Dy(e,t,r){return"normal"!==t&&!(null!=t&&t.endsWith("px"))&&r(`${e} was not resolved to pixel value correctly`,t,Tp.WARN),"normal"===t?0:parseInt(null!=t?t:"0",10)}const Iy=o.createContext({focusedIndex:-1,setFocusedIndex:()=>{}}),Ty=({children:e})=>{const[r,n]=a(-1);return t(Iy.Provider,{value:{focusedIndex:r,setFocusedIndex:n},children:e})},By=x.div`
    overflow: hidden;
    border: ${Nn["width-010"]} ${Nn.solid} ${Ln.border};
    border-radius: ${Yn.sm};
    background: ${Ln.bg};

    min-width: 23rem;
    ${e=>e.$width&&`width: ${e.$width}px;`}
    max-height: 27rem;
    overflow-y: auto;

    ${e=>"small"===e.$variant?Pn["body-md-regular"]:Pn["body-baseline-regular"]}

    ${qn.MaxWidth.sm} {
        min-width: unset;
        width: calc(100vw - ${Un["sm-margin"]} * 2);
        max-height: 15rem;
    }

    ${qn.MaxWidth.xs} {
        width: calc(100vw - ${Un["xs-margin"]} * 2);
    }

    ${qn.MaxWidth.xxs} {
        width: calc(100vw - ${Un["xxs-margin"]} * 2);
    }

    ::-webkit-scrollbar {
        width: 14px;
    }

    ::-webkit-scrollbar-track {
        background: transparent;
    }

    ::-webkit-scrollbar-thumb {
        background: ${Ln["bg-inverse-subtlest"]};
        border: 5px solid transparent;
        border-radius: 9999px;
        background-clip: padding-box;
    }
`,Ay=x.div`
    background: transparent;
    padding: ${Vn["spacing-8"]};
`,zy=x.ul`
    list-style-type: none;
`,Oy=x.li`
    display: flex;
    align-items: flex-start;
    gap: ${Vn["spacing-8"]};
    padding: ${Vn["spacing-12"]} ${Vn["spacing-8"]};
    cursor: pointer;

    outline: none;

    ${e=>e.$disabled?w`
                cursor: not-allowed;
            `:e.$active&&e.$selected?w`
                background: ${Ln["bg-hover"]};
            `:e.$active?w`
                background: ${Ln["bg-hover-subtle"]};
            `:void 0}
`,My=x(L)`
    flex-shrink: 0;
    height: 1lh;
    width: 1rem;
    color: ${Ln["icon-selected"]};
`,_y=x.div`
    flex-shrink: 0;
    height: 1lh;
    width: 1rem;
`,Ry=x(j)`
    flex-shrink: 0;
    height: 1lh;
    width: 1lh;
    color: ${Ln["icon-selected"]};
`,Hy=x(H)`
    flex-shrink: 0;
    height: 1lh;
    width: 1lh;
    color: ${Ln["icon-primary-subtlest"]};
`,jy=x(P)`
    flex-shrink: 0;
    height: 1lh;
    width: 1lh;
    color: ${Ln["icon-disabled-subtle"]};
`,Ly=x.div`
    width: 100%;
    display: flex;
    justify-content: flex-end;
`,Py=x(bo)`
    cursor: pointer;
    overflow: hidden;
    color: ${Ln["text-primary"]};
    font-size: inherit;
`,Wy=x(Py)`
    ${Pn["body-baseline-semibold"]}
`,Ny=x(Py)`
    ${Pn["body-md-semibold"]}
    padding: ${Vn["spacing-8"]} ${Vn["spacing-8"]};
`,Vy=x.div`
    width: 100%;
    display: flex;
    padding: ${Vn["spacing-12"]} ${Vn["spacing-16"]};
    align-items: center;
`,Yy=x(T)`
    margin-right: ${Vn["spacing-4"]};
    color: ${Ln["icon-error"]};
    height: 1em;
    width: 1em;
`,Uy=x(dd)`
    margin-right: ${Vn["spacing-8"]};
    color: ${Ln.icon};
`,qy=x.div`
    ${Qd()}
    color: ${Ln["text-subtle"]};
    padding: 0 ${Vn["spacing-16"]} ${Vn["spacing-12"]}
        ${Vn["spacing-16"]};
`,Gy=x.div`
    background: ${Ln["bg-strong"]};
    border-radius: ${Yn.sm};
    display: flex;
    align-items: center;

    ${e=>"small"===e.$variant?Pn["body-md-regular"]:Pn["body-baseline-regular"]}
`,Zy=x.label`
    flex: 1;
    display: flex;
    align-items: center;
    gap: ${Vn["spacing-8"]};
    padding: ${e=>"small"===e.$variant?w`
                  ${Vn["spacing-8"]} ${Vn["spacing-16"]}
              `:w`10px ${Vn["spacing-16"]}`};
`,Qy=x(fo)`
    flex: 1;
`,Xy=x(W)`
    color: ${Ln.icon};
    flex-shrink: 0;
    height: 1em;
    width: 1em;
`,Ky=x(zc)`
    flex-shrink: 0;
    align-self: stretch;
    box-sizing: content-box;
    padding: ${Vn["spacing-8"]};
    margin-left: -${Vn["spacing-8"]};
    color: ${Ln.icon};
    cursor: pointer;
    font-size: inherit;

    svg {
        flex-shrink: 0;
        height: 1em;
        width: 1em;
    }
`,Jy=g(((r,n)=>{var{value:o,variant:i,onClear:s}=r,a=oe(r,["value","variant","onClear"]);return e(Gy,{$variant:i,children:[e(Zy,{$variant:i,children:[t(Xy,{"aria-hidden":!0}),t(Qy,Object.assign({ref:n,value:o,$variant:i},a))]}),o&&t(Ky,{"aria-label":"Clear search",focusOutline:"browser",onClick:s,children:t(R,{"aria-hidden":!0})})]})})),ev=({listItems:n,multiSelect:o,maxSelectable:l,selectedItems:d,disableItemFocus:c,itemsLoadState:u="success",itemTruncationType:h="end",itemMaxLines:g=2,labelDisplayType:f="inline",variant:b="default",listboxId:y,width:v,topScrollItem:x,onSelectItem:w,onSelectAll:$,onDismiss:F,onRetry:C,valueExtractor:E,listExtractor:S,renderListItem:k,renderCustomCallToAction:D,enableSearch:I,hideNoResultsDisplay:T,noResultsDescription:B,searchPlaceholder:A="Search",searchFunction:z,onSearch:O})=>{const{focusedIndex:M,setFocusedIndex:_}=p(Iy),[R,H]=a(""),[j,L]=a(null!=n?n:[]),P=Zd(u),W=(()=>{const[e,t]=a(!1);return s((()=>{t(!0)}),[]),e})(),N=i(null),V=i(null),Y=i([]),U=i(null),q=i(null),G=!!l&&!!d&&(null==d?void 0:d.length)===l,Z=e=>{const t=S?S(e):null==e?void 0:e.toString();return"object"==typeof t?{title:t.title,secondaryLabel:t.secondaryLabel}:{title:null!=t?t:""}},Q=m((e=>!!Ym(d,(t=>qm(t,e)))),[d]),X=Gd((()=>null==z?void 0:z(R))),K=Gd((()=>null==n?void 0:n.filter((e=>{const{title:t,secondaryLabel:r}=Z(e),n=R.trim().toLowerCase();return t.toLowerCase().includes(n)||r&&r.toLowerCase().includes(n)})))),J=(e,t)=>{G&&!Q(e)||(_(t),null==w||w(e,(e=>E?E(e):e)(e)))},ee=e=>{const t=e.target.value;H(t),null==O||O()},te=()=>{var e;H(""),null===(e=U.current)||void 0===e||e.focus(),null==O||O()},re=()=>{null==C||C()};ie("keydown",(e=>{var t,r;switch(e.code){case"ArrowDown":if(e.preventDefault(),M<j.length-1){const e=M+1;null===(t=Y.current[e])||void 0===t||t.focus(),_(e)}break;case"ArrowUp":if(e.preventDefault(),M>0){const e=M-1;null===(r=Y.current[e])||void 0===r||r.focus(),_(e)}else 0===M&&U.current&&(U.current.focus(),_(-1));break;case"Space":case"Enter":document.activeElement===Y.current[M]&&(e.preventDefault(),j[M]&&J(j[M],M))}})),s((()=>{var e;if(!x)return void(null===(e=q.current)||void 0===e||e.scrollTo({top:0}));const t=setTimeout((()=>{if(!n)return;const e=n.indexOf(x);q.current&&-1!==e&&(q.current.scrollToIndex({index:e}),_(e))}),0);return()=>clearTimeout(t)}),[Y,n,_,x]),s((()=>{var e,t,r;if(W)return;if(c||!n)return;const o=n.findIndex((e=>Q(e)));U.current?(_(-1),setTimeout((()=>{var e;return null===(e=U.current)||void 0===e?void 0:e.focus()}),200)):M>0?(null===(e=q.current)||void 0===e||e.scrollToIndex({index:M,align:"center"}),setTimeout((()=>{var e;return null===(e=Y.current[M])||void 0===e?void 0:e.focus()}),200)):-1!==o?(null===(t=q.current)||void 0===t||t.scrollToIndex({index:o,align:"center"}),_(o),setTimeout((()=>{var e;return null===(e=Y.current[o])||void 0===e?void 0:e.focus()}),200)):(null===(r=q.current)||void 0===r||r.scrollToIndex({index:0}),_(0),setTimeout((()=>{var e;return null===(e=Y.current[0])||void 0===e?void 0:e.focus()}),200))}),[Q,c,M,n,W,_]),s((()=>{W&&P&&(c||"success"===u&&U.current&&(_(-1),U.current.focus()))}),[W,P,u,_,c]),s((()=>{var e;L(null!==(e=""===R?n:z?X():K())&&void 0!==e?e:[])}),[X,K,n,z,R]);const ne=e=>o?t(G&&!e?jy:e?Ry:Hy,{"aria-hidden":!0}):e?t(My,{"aria-hidden":!0}):t(_y,{}),oe=(e,r)=>{const{title:n,secondaryLabel:o}=Z(e);return t(gu,{displayType:f,label:n,maxLines:g,selected:r,disabled:!r&&G,sublabel:o,truncationType:h,variant:b})},se=(n,i)=>{if(!C||"success"===u){const s=Q(n),a=i===M;return t(Oy,{"aria-selected":s,"aria-multiselectable":o,"aria-disabled":!s&&G,"data-testid":"list-item",onClick:()=>J(n,i),onMouseEnter:()=>(e=>{_(e)})(i),ref:e=>{Y.current[i]=e},role:"option",tabIndex:a?0:-1,$active:a,$selected:s,$disabled:!s&&G,children:k?k(n,{selected:s}):e(r,{children:[ne(s),oe(n,s)]})},((e,t)=>`item_${t}__${E?E(e):e}`)(n,i))}},ae=()=>{if(d&&o&&j.length>0&&!R&&"success"===u)return t(Ly,{children:t(Ny,{onClick:$,type:"button",$variant:b,children:l||0!==d.length?"Clear all":"Select all"})})},le=()=>{if(!T&&(R||!I)&&0===j.length&&"success"===u)return e(r,{children:[e(Vy,{"data-testid":"list-no-results",children:[t(Yy,{"data-testid":"no-result-icon"}),"No results found."]}),B&&t(qy,{"data-testid":"no-result-desc",children:B})]})},de=()=>{if(C&&"loading"===u)return e(Vy,{"data-testid":"list-loading",children:[t(Uy,{}),"Loading..."]})},ce=()=>{if(C&&"fail"===u)return e(Vy,{"data-testid":"list-fail",children:[t(Yy,{"data-testid":"load-error-icon"}),"Failed to load. ",t(Wy,{onClick:re,type:"button",$variant:b,children:"Try again."})]})},ue=()=>{var e;const r="test"===process.env.NODE_ENV;return t(zy,{role:"listbox",id:y,children:t(Jb,Object.assign({ref:q,style:{height:"100%"},data:j,customScrollParent:null!==(e=N.current)&&void 0!==e?e:void 0,itemContent:(e,t)=>se(t,e)},r?{initialItemCount:j.length}:{}),r?j.length:void 0)})};return e(By,{"data-testid":"dropdown-container",ref:N,$width:v,$variant:b,children:[e(Ay,{ref:V,"data-testid":"dropdown-list",children:[(()=>{if((I||z)&&"success"===u)return t(Jy,{ref:U,onChange:ee,value:R,placeholder:A,"data-testid":"search-input","aria-label":"Enter text to search",onClear:te,variant:b})})(),ae(),le(),de(),ce(),ue()]}),(()=>{if(D)return t("div",{"data-testid":"custom-cta",children:D(F,j)})})()]})},tv=x(bo)`
    display: flex;
    align-items: center;
    gap: ${Vn["spacing-8"]};
    width: 100%;
    height: calc(3rem - 2px); // exclude top and bottom borders
    padding: ${Vn["spacing-16"]};

    ${e=>"small"===e.$variant?Pn["body-md-regular"]:Pn["body-baseline-regular"]}

    :disabled {
        cursor: not-allowed;
    }
`,rv=x.div`
    display: flex;
    align-items: center;
    transform: rotate(${e=>e.$expanded?180:0}deg);
    transition: transform ${Wn["duration-250"]} ${Wn["ease-default"]};

    svg {
        color: ${Ln.icon};
        height: 1em;
        width: 1em;
    }
`;var nv;g((({children:r,disabled:n,expanded:o,listboxId:i,popupRole:s,readOnly:a,variant:l},d)=>e(tv,{ref:d,type:"button","aria-expanded":o,"aria-haspopup":s,"data-testid":"selector",disabled:n,"aria-controls":i,$variant:l,children:[r,!a&&t(rv,{$expanded:o,$variant:l,children:t(C,{"aria-hidden":!0})})]}))),x.li`
    display: ${e=>e.$visible?"flex":"none"};
`,x.div`
    flex: 1;
    display: flex;
    align-items: flex-start;
    gap: ${Vn["spacing-8"]};
    padding: ${Vn["spacing-12"]} ${Vn["spacing-8"]};
    cursor: ${e=>e.$toggleable?"default":"pointer"};
    overflow: hidden; // required for label to truncate properly

    outline: none;

    ${e=>e.$active&&w`
            background: ${Ln["bg-hover"]};
        `}
`,x.div`
    height: 1px;
    width: calc((1lh + ${Vn["spacing-8"]}) * ${e=>e.$level});
`,x.div`
    width: 1lh;
    height: 1lh;
    color: ${Ln["icon-primary"]};
    cursor: pointer;

    svg {
        width: 1lh;
        height: 1lh;
        transition: transform ${Wn["duration-350"]}
            ${Wn["ease-standard"]};

        ${e=>{if(e.$expanded)return w`
                    transform: rotate(90deg);
                `}}
    }
`,x.div`
    width: 1lh;
    height: 1lh;
    margin-right: ${Vn["spacing-8"]};
`,x.div`
    flex-shrink: 0;
    height: 1lh;
    width: ${e=>e.$hasNestedSiblings?"1lh":Vn["spacing-16"]};

    display: flex;
    justify-content: center;
`,x(N)`
    flex-shrink: 0;
    height: 1lh;
    width: 1lh;
    color: ${Ln["icon-selected"]};
`,function(e){e.Ready="overlay-context-ready",e.Change="overlay-context-change"}(nv||(nv={}));const ov=x.div`
    display: flex;
    flex-direction: column;
`,iv=e=>"right"===e?"bottom-end":"bottom-start",sv=({enabled:n,isOpen:o,onOpen:l,onClose:d,onDismiss:c,renderElement:u,renderDropdown:h,customZIndex:g,clickToToggle:m=!1,offset:p=0,alignment:f="left",fitAvailableHeight:b,rootNode:y})=>{var v;const x=F(),w=Un["sm-max"]({theme:x}),$=i(null),C=i(null),{width:E=0}=Ci({targetRef:$,handleHeight:!1}),S={name:"center",fn:({x:e,rects:t})=>{const r=0===e||e+t.floating.width===window.innerWidth,n=window.innerWidth<w;return{x:r&&n?(window.innerWidth-t.floating.width)/2:e}}},{refs:k,floatingStyles:D,context:I}=Y({open:o,onOpenChange:(e,t,r)=>{"escape-key"===r?null==c||c():e&&!o?null==l||l():!e&&o&&(null==d||d(r))},whileElementsMounted:U,placement:iv(f),middleware:[q(p),G(),Z({limiter:Q()}),X({apply({availableHeight:e}){C.current&&Object.assign(C.current.style,{maxHeight:b?`${e}px`:void 0,overflowY:b?"hidden":void 0})}}),S]}),T=(()=>{const[e,t]=a(void 0),r=V();return s((()=>{if(!r)return void t(void 0);const e=e=>{t(e.zIndex)};return r.events.on(nv.Change,e),r.events.emit(nv.Ready),()=>r.events.off(nv.Change,e)}),[r]),e})(),{isMounted:B,styles:A}=K(I,{initial:{opacity:0},open:{opacity:1},duration:300}),z=J(I,{enabled:n,toggle:m}),O=ee(I,{enabled:n}),{getReferenceProps:M,getFloatingProps:_}=te([z,O]);return e(r,{children:[t("div",Object.assign({ref:e=>{$.current=e,k.setReference(e)}},M(),{children:u()})),B&&t(re,{root:y,children:t(ne,{context:I,modal:!1,initialFocus:C,returnFocus:!1,children:t("div",Object.assign({ref:k.setFloating,style:Object.assign(Object.assign({},D),{zIndex:null!==(v=null!=g?g:T)&&void 0!==v?v:50})},_(),{children:t(ov,{ref:C,style:Object.assign({},A),inert:A.opacity<1?"":void 0,children:h({elementWidth:E})})}))})})]})},av=x(po)`
    height: 3rem;
    gap: ${Vn["spacing-8"]};
    // space for clear icon
    padding-right: calc(1.25rem + ${Vn["spacing-20"]});
`,lv=r=>{var{id:n,disabled:o=!1,error:l,value:d,format:c="12hr",readOnly:u,onChange:h,onFocus:g,onBlur:p,alignment:b="left",dropdownZIndex:y,startLimit:v,endLimit:x,interval:w=15}=r,$=oe(r,["id","disabled","error","value","format","readOnly","onChange","onFocus","onBlur","alignment","dropdownZIndex","startLimit","endLimit","interval"]);const[F]=a((()=>qd.generate())),[C,E]=a(null),[S,k]=a(!1),[D,I]=a(""),[T,B]=a(""),[A,z]=a(""),[O,M]=a(""),[_,R]=a(""),H=i(null),j=i(null),L=i(null),P=f((()=>Co.generateTimings(w,c,v,x)),[w,c,v,x]),W=f((()=>{if(""===O)return P;const e=Co.findClosestFlooredTime(O,P);return e?P.slice(P.indexOf(e)):[]}),[P,O]),N=m((e=>Co.parseInput(e,c)),[c]);s((()=>{var e,t;if(d){const r=null!==(e=N(d.start))&&void 0!==e?e:"",n=null!==(t=N(d.end))&&void 0!==t?t:"";B(r),z(n),M(r),R(n)}}),[d,N]),s((()=>{if(l)return void k(!1);const e=N(T),t=N(A);if(void 0===e)I("Invalid start time");else if(void 0===t)I("Invalid end time");else{if(!(""!==e&&""!==t&&Co.to24Hour(t)<Co.to24Hour(e)))return I(""),void(document.activeElement!==j.current&&document.activeElement!==L.current||k(!0));I("End time must be after start time")}k(!1)}),[T,A,N,l]);const V=e=>{o||u||(C||S||null==g||g(),E(e),k(!0))},Y=e=>{var t;o||u||(E(e),k(!0),null===(t=("start"===e?j:L).current)||void 0===t||t.select())};function U(e){var t;switch(e.code){case"Enter":"start"===C?q(T):"end"===C&&(S&&G(A),null===(t=L.current)||void 0===t||t.blur());break;case"Tab":Z(T,A,{})}}const q=e=>{Z(e,A,{goToNextInput:!0})},G=e=>{Z(T,e,{triggerOnBlur:!0})},Z=(e,t,{goToNextInput:r,triggerOnBlur:n})=>{var o,i,s;const a=null!==(o=N(e))&&void 0!==o?o:O,l=null!==(i=N(t))&&void 0!==i?i:_;B(a),z(l);a===O&&l===_||null==h||h({start:a,end:l}),r&&void 0!==N(e)&&(E("end"),null===(s=L.current)||void 0===s||s.select()),n&&(E(null),k(!1),null==p||p()),M(a),R(l)},Q=e=>{e.stopPropagation(),B(""),z(""),M(""),R("");null==h||h({start:"",end:""}),E(null),k(!1)},X=e=>{H.current&&!H.current.contains(e.relatedTarget)&&C&&!S&&Z(T,A,{triggerOnBlur:!0})},K=()=>{if(!u&&!o&&((null==T?void 0:T.length)>0||(null==A?void 0:A.length)>0))return t(su,{onClick:Q,type:"button","aria-label":"Clear",children:t(eu,{"aria-hidden":!0})})};return e(yo,Object.assign({id:n},$,{children:[t(Ty,{children:t(sv,{enabled:!u&&!o,isOpen:S,renderElement:()=>e(av,{ref:H,$disabled:o,$error:l||!!D,$readOnly:u,onBlur:X,children:[e(lo,{error:l||!!D,currentActive:null===C?"none":C,children:[t(xo,{ref:j,onFocus:()=>V("start"),placeholder:"start"===C?"hh:mm":"From",onChange:e=>B(e.target.value),value:T,disabled:o,readOnly:u,"data-testid":$["data-testid"]?`${$["data-testid"]}-timepicker-selector`:"timepicker-selector",onClick:()=>Y("start"),onKeyDown:U,autoComplete:"off","aria-label":"Start time input",type:"text",role:"combobox","aria-expanded":S,"aria-controls":F,"aria-autocomplete":"list"}),t(xo,{ref:L,onFocus:()=>V("end"),placeholder:"end"===C?"hh:mm":"To",onChange:e=>z(e.target.value),value:A,disabled:o,readOnly:u,"data-testid":$["data-testid"]?`${$["data-testid"]}-timepicker-selector`:"timepicker-selector",onClick:()=>Y("end"),onKeyDown:U,autoComplete:"off","aria-label":"End time input",type:"text",role:"combobox","aria-expanded":S,"aria-controls":F,"aria-autocomplete":"list"})]}),K()]}),renderDropdown:()=>{if(S)return t(ev,"start"===C?{listItems:P,onSelectItem:q,selectedItems:[T],disableItemFocus:!0,topScrollItem:Co.findClosestFlooredTime(N(T),P),listboxId:F}:{listItems:W,onSelectItem:G,selectedItems:[A],disableItemFocus:!0,topScrollItem:Co.findClosestFlooredTime(N(A),W),listboxId:F})},onClose:e=>{"outside-press"===e?(E(null),k(!1),null==p||p()):Z(T,A,{triggerOnBlur:!0})},onDismiss:()=>{var e;null===(e=("start"===C?j:L).current)||void 0===e||e.focus(),k(!1)},offset:8,alignment:b,fitAvailableHeight:!0,customZIndex:y})}),!l&&D&&t(Kc,{id:n?`${n}-error-message`:"error-message",tabIndex:0,"data-testid":n?`${n}-error-message`:"error-message",children:D})]}))},dv=e=>{var{variant:r="dial"}=e,n=oe(e,["variant"]);return t("combobox"===r?lv:Xc,Object.assign({},n))};export{dv as TimeRangePicker};
//# sourceMappingURL=index.js.map
