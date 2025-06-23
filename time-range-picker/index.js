import{jsxs as e,jsx as t,Fragment as r}from"react/jsx-runtime";import*as n from"react";import o,{useRef as i,useEffect as s,useState as a,isValidElement as l,createRef as d,cloneElement as c,PureComponent as u,useLayoutEffect as h,forwardRef as g,useCallback as m,useContext as p,useMemo as f,createElement as b}from"react";import{ArrowRightIcon as y,ChevronDownIcon as v}from"@lifesg/react-icons";import x,{css as w,keyframes as $,useTheme as F}from"styled-components";import{ChevronDownIcon as C}from"@lifesg/react-icons/chevron-down";import{ChevronUpIcon as S}from"@lifesg/react-icons/chevron-up";import E,{findDOMNode as k,unstable_batchedUpdates as D}from"react-dom";import{ArrowRightIcon as I}from"@lifesg/react-icons/arrow-right";import{ExclamationCircleFillIcon as T}from"@lifesg/react-icons/exclamation-circle-fill";import{ExclamationTriangleFillIcon as B}from"@lifesg/react-icons/exclamation-triangle-fill";import{ICircleFillIcon as A}from"@lifesg/react-icons/i-circle-fill";import{TickCircleFillIcon as z}from"@lifesg/react-icons/tick-circle-fill";import{ExternalIcon as O}from"@lifesg/react-icons/external";import{CircleIcon as M}from"@lifesg/react-icons/circle";import{CircleDotIcon as _}from"@lifesg/react-icons/circle-dot";import{CrossIcon as R}from"@lifesg/react-icons/cross";import{SquareIcon as H}from"@lifesg/react-icons/square";import{SquareTickFillIcon as j}from"@lifesg/react-icons/square-tick-fill";import{TickIcon as L}from"@lifesg/react-icons/tick";import{SquareFillIcon as P}from"@lifesg/react-icons/square-fill";import{MagnifierIcon as W}from"@lifesg/react-icons/magnifier";import"@lifesg/react-icons/caret-right";import{MinusSquareFillIcon as N}from"@lifesg/react-icons/minus-square-fill";import{useFloatingTree as V,useFloating as Y,autoUpdate as U,offset as q,flip as G,shift as Z,limitShift as Q,size as X,useTransitionStyles as K,useClick as J,useDismiss as ee,useInteractions as te,FloatingPortal as re,FloatingFocusManager as ne}from"@floating-ui/react";function oe(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(n=Object.getOwnPropertySymbols(e);o<n.length;o++)t.indexOf(n[o])<0&&Object.prototype.propertyIsEnumerable.call(e,n[o])&&(r[n[o]]=e[n[o]])}return r}"function"==typeof SuppressedError&&SuppressedError;const ie=(e,t,r="window",n)=>{const o=i();s((()=>{o.current=t}),[t]),s((()=>{let t;switch(r){case"window":t=window;break;case"document":t=document;break;default:t=r}if(!t||!t.addEventListener)return;const i=e=>{var t;return null===(t=o.current)||void 0===t?void 0:t.call(o,e)};return t.addEventListener(e,i,n),()=>{null==t||t.removeEventListener(e,i,n)}}),[e,r])};var se="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};function ae(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var le=Array.isArray,de="object"==typeof se&&se&&se.Object===Object&&se,ce=de,ue="object"==typeof self&&self&&self.Object===Object&&self,he=ce||ue||Function("return this")(),ge=he.Symbol,me=ge,pe=Object.prototype,fe=pe.hasOwnProperty,be=pe.toString,ye=me?me.toStringTag:void 0;var ve=function(e){var t=fe.call(e,ye),r=e[ye];try{e[ye]=void 0;var n=!0}catch(e){}var o=be.call(e);return n&&(t?e[ye]=r:delete e[ye]),o},xe=Object.prototype.toString;var we=ve,$e=function(e){return xe.call(e)},Fe=ge?ge.toStringTag:void 0;var Ce=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":Fe&&Fe in Object(e)?we(e):$e(e)};var Se=function(e){return null!=e&&"object"==typeof e},Ee=Ce,ke=Se;var De=function(e){return"symbol"==typeof e||ke(e)&&"[object Symbol]"==Ee(e)},Ie=le,Te=De,Be=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,Ae=/^\w*$/;var ze=function(e,t){if(Ie(e))return!1;var r=typeof e;return!("number"!=r&&"symbol"!=r&&"boolean"!=r&&null!=e&&!Te(e))||(Ae.test(e)||!Be.test(e)||null!=t&&e in Object(t))};var Oe=function(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)},Me=Ce,_e=Oe;var Re,He=function(e){if(!_e(e))return!1;var t=Me(e);return"[object Function]"==t||"[object GeneratorFunction]"==t||"[object AsyncFunction]"==t||"[object Proxy]"==t},je=he["__core-js_shared__"],Le=(Re=/[^.]+$/.exec(je&&je.keys&&je.keys.IE_PROTO||""))?"Symbol(src)_1."+Re:"";var Pe=function(e){return!!Le&&Le in e},We=Function.prototype.toString;var Ne=function(e){if(null!=e){try{return We.call(e)}catch(e){}try{return e+""}catch(e){}}return""},Ve=He,Ye=Pe,Ue=Oe,qe=Ne,Ge=/^\[object .+?Constructor\]$/,Ze=Function.prototype,Qe=Object.prototype,Xe=Ze.toString,Ke=Qe.hasOwnProperty,Je=RegExp("^"+Xe.call(Ke).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");var et=function(e,t){return null==e?void 0:e[t]},tt=function(e){return!(!Ue(e)||Ye(e))&&(Ve(e)?Je:Ge).test(qe(e))},rt=et;var nt=function(e,t){var r=rt(e,t);return tt(r)?r:void 0},ot=nt(Object,"create"),it=ot;var st=function(){this.__data__=it?it(null):{},this.size=0};var at=function(e){var t=this.has(e)&&delete this.__data__[e];return this.size-=t?1:0,t},lt=ot,dt=Object.prototype.hasOwnProperty;var ct=function(e){var t=this.__data__;if(lt){var r=t[e];return"__lodash_hash_undefined__"===r?void 0:r}return dt.call(t,e)?t[e]:void 0},ut=ot,ht=Object.prototype.hasOwnProperty;var gt=function(e){var t=this.__data__;return ut?void 0!==t[e]:ht.call(t,e)},mt=ot;var pt=function(e,t){var r=this.__data__;return this.size+=this.has(e)?0:1,r[e]=mt&&void 0===t?"__lodash_hash_undefined__":t,this},ft=st,bt=at,yt=ct,vt=gt,xt=pt;function wt(e){var t=-1,r=null==e?0:e.length;for(this.clear();++t<r;){var n=e[t];this.set(n[0],n[1])}}wt.prototype.clear=ft,wt.prototype.delete=bt,wt.prototype.get=yt,wt.prototype.has=vt,wt.prototype.set=xt;var $t=wt;var Ft=function(){this.__data__=[],this.size=0};var Ct=function(e,t){return e===t||e!=e&&t!=t},St=Ct;var Et=function(e,t){for(var r=e.length;r--;)if(St(e[r][0],t))return r;return-1},kt=Et,Dt=Array.prototype.splice;var It=function(e){var t=this.__data__,r=kt(t,e);return!(r<0)&&(r==t.length-1?t.pop():Dt.call(t,r,1),--this.size,!0)},Tt=Et;var Bt=function(e){var t=this.__data__,r=Tt(t,e);return r<0?void 0:t[r][1]},At=Et;var zt=function(e){return At(this.__data__,e)>-1},Ot=Et;var Mt=function(e,t){var r=this.__data__,n=Ot(r,e);return n<0?(++this.size,r.push([e,t])):r[n][1]=t,this},_t=Ft,Rt=It,Ht=Bt,jt=zt,Lt=Mt;function Pt(e){var t=-1,r=null==e?0:e.length;for(this.clear();++t<r;){var n=e[t];this.set(n[0],n[1])}}Pt.prototype.clear=_t,Pt.prototype.delete=Rt,Pt.prototype.get=Ht,Pt.prototype.has=jt,Pt.prototype.set=Lt;var Wt=Pt,Nt=nt(he,"Map"),Vt=$t,Yt=Wt,Ut=Nt;var qt=function(e){var t=typeof e;return"string"==t||"number"==t||"symbol"==t||"boolean"==t?"__proto__"!==e:null===e};var Gt=function(e,t){var r=e.__data__;return qt(t)?r["string"==typeof t?"string":"hash"]:r.map},Zt=Gt;var Qt=function(e){var t=Zt(this,e).delete(e);return this.size-=t?1:0,t},Xt=Gt;var Kt=function(e){return Xt(this,e).get(e)},Jt=Gt;var er=function(e){return Jt(this,e).has(e)},tr=Gt;var rr=function(e,t){var r=tr(this,e),n=r.size;return r.set(e,t),this.size+=r.size==n?0:1,this},nr=function(){this.size=0,this.__data__={hash:new Vt,map:new(Ut||Yt),string:new Vt}},or=Qt,ir=Kt,sr=er,ar=rr;function lr(e){var t=-1,r=null==e?0:e.length;for(this.clear();++t<r;){var n=e[t];this.set(n[0],n[1])}}lr.prototype.clear=nr,lr.prototype.delete=or,lr.prototype.get=ir,lr.prototype.has=sr,lr.prototype.set=ar;var dr=lr,cr=dr;function ur(e,t){if("function"!=typeof e||null!=t&&"function"!=typeof t)throw new TypeError("Expected a function");var r=function(){var n=arguments,o=t?t.apply(this,n):n[0],i=r.cache;if(i.has(o))return i.get(o);var s=e.apply(this,n);return r.cache=i.set(o,s)||i,s};return r.cache=new(ur.Cache||cr),r}ur.Cache=cr;var hr=ur;var gr=function(e){var t=hr(e,(function(e){return 500===r.size&&r.clear(),e})),r=t.cache;return t},mr=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,pr=/\\(\\)?/g,fr=gr((function(e){var t=[];return 46===e.charCodeAt(0)&&t.push(""),e.replace(mr,(function(e,r,n,o){t.push(n?o.replace(pr,"$1"):r||e)})),t}));var br=function(e,t){for(var r=-1,n=null==e?0:e.length,o=Array(n);++r<n;)o[r]=t(e[r],r,e);return o},yr=le,vr=De,xr=ge?ge.prototype:void 0,wr=xr?xr.toString:void 0;var $r=function e(t){if("string"==typeof t)return t;if(yr(t))return br(t,e)+"";if(vr(t))return wr?wr.call(t):"";var r=t+"";return"0"==r&&1/t==-1/0?"-0":r},Fr=$r;var Cr=le,Sr=ze,Er=fr,kr=function(e){return null==e?"":Fr(e)};var Dr=function(e,t){return Cr(e)?e:Sr(e,t)?[e]:Er(kr(e))},Ir=De;var Tr=function(e){if("string"==typeof e||Ir(e))return e;var t=e+"";return"0"==t&&1/e==-1/0?"-0":t},Br=Dr,Ar=Tr;var zr=function(e,t){for(var r=0,n=(t=Br(t,e)).length;null!=e&&r<n;)e=e[Ar(t[r++])];return r&&r==n?e:void 0},Or=zr;var Mr=function(e,t,r){var n=null==e?void 0:Or(e,t);return void 0===n?r:n},_r=ae(Mr);const Rr=(e,t,r)=>_r(r,t)||_r(e,t),Hr=(e,t)=>{const r=t||e.defaultValue;return _r(e.collections,r)},jr={collections:{default:{"width-005":.5,"width-010":1,"width-020":2,"width-040":4,solid:"solid"}},defaultValue:"default"},Lr=e=>t=>{var r;const n=t.theme,o=Hr(jr,null==n?void 0:n.borderScheme);return(null===(r=null==n?void 0:n.overrides)||void 0===r?void 0:r.border)?`${Rr(o,e,n.overrides.border)}px`:`${o[e]}px`},Pr={"width-005":Lr("width-005"),"width-010":Lr("width-010"),"width-020":Lr("width-020"),"width-040":Lr("width-040"),solid:(Wr="solid",e=>{var t;const r=e.theme,n=Hr(jr,null==r?void 0:r.borderScheme),o=(null===(t=null==r?void 0:r.overrides)||void 0===t?void 0:t.border)?Rr(n,Wr,r.overrides.border):n[Wr];return"function"==typeof o?o(e):o})};var Wr;const Nr={"brand-10":"#2C0C0B","brand-20":"#4C1513","brand-30":"#6C1D1B","brand-40":"#922825","brand-50":"#BF3431","brand-60":"#F15D5A","brand-70":"#F69491","brand-80":"#FABAB7","brand-90":"#FCD7D2","brand-95":"#FFEBE7","brand-100":"#FFF6F4","primary-10":"#1A122C","primary-20":"#2F1F4D","primary-30":"#422D6E","primary-40":"#5B3D97","primary-50":"#7654BC","primary-60":"#9A82CD","primary-70":"#B7A7D8","primary-80":"#CFC5E5","primary-90":"#E3DDF0","primary-95":"#F0EDF7","primary-100":"#F9F8FC","secondary-10":"#0E1723","secondary-20":"#18293D","secondary-30":"#233A57","secondary-40":"#305078","secondary-50":"#4B6A8F","secondary-60":"#7B91A9","secondary-70":"#A1B1C3","secondary-80":"#C1CBD7","secondary-90":"#DBE1E8","secondary-95":"#EBEFF2","secondary-100":"#F7F8FA","neutral-10":"#161616","neutral-20":"#282828","neutral-30":"#393939","neutral-40":"#4E4E4E","neutral-50":"#686868","neutral-60":"#8E8E8E","neutral-70":"#AFAFB0","neutral-80":"#C7CACA","neutral-90":"#DDE1E2","neutral-95":"#EDEFEF","neutral-100":"#F9F9F9","success-10":"#081A0F","success-20":"#0E2D1B","success-30":"#154126","success-40":"#1C5A34","success-50":"#257645","success-60":"#44A068","success-70":"#64C189","success-80":"#80DCA5","success-90":"#B4ECCB","success-95":"#D5F6E2","success-100":"#EFFCF4","warning-10":"#221302","warning-20":"#3B2204","warning-30":"#543106","warning-40":"#744408","warning-50":"#98590C","warning-60":"#D07A13","warning-70":"#E4A244","warning-80":"#F5C26C","warning-90":"#FADBA6","warning-95":"#FCECD4","warning-100":"#FDF7F0","error-10":"#330505","error-20":"#550808","error-30":"#750C0C","error-40":"#9E130F","error-50":"#CB2213","error-60":"#DE6C6C","error-70":"#E89B9B","error-80":"#EFBEBE","error-90":"#F5D9D9","error-95":"#F9ECEC","error-100":"#FCF7F7","info-10":"#021824","info-20":"#032B3F","info-30":"#053D59","info-40":"#065478","info-50":"#176E9B","info-60":"#5296BE","info-70":"#82B5DA","info-80":"#ACCFE7","info-90":"#CCE3F1","info-95":"#E3F1F8","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000","primary-inverse":"#FEAB10"},Vr={"brand-10":"#1F1221","brand-20":"#371F3B","brand-30":"#4E2C53","brand-40":"#6B3E73","brand-50":"#8D5197","brand-60":"#FF3399","brand-70":"#FF88C4","brand-80":"#FFB3D9","brand-90":"#FFD4E9","brand-95":"#FFE8F3","brand-100":"#FFD6EB","primary-10":"#1F1221","primary-20":"#371F3B","primary-30":"#4E2C53","primary-40":"#6B3E73","primary-50":"#8D5197","primary-60":"#B07DB7","primary-70":"#C7A3CC","primary-80":"#D9C2DD","primary-90":"#E9DBEB","primary-95":"#F3ECF4","primary-100":"#FAF7FA","secondary-10":"#2D091B","secondary-20":"#4D0F2E","secondary-30":"#6B1540","secondary-40":"#931D58","secondary-50":"#C02673","secondary-60":"#FF409F","secondary-70":"#FF88C4","secondary-80":"#FFB3D9","secondary-90":"#FFD4E9","secondary-95":"#FFE8F3","secondary-100":"#FFF8FC","neutral-10":"#161616","neutral-20":"#282828","neutral-30":"#393939","neutral-40":"#4E4E4E","neutral-50":"#686868","neutral-60":"#8E8E8E","neutral-70":"#AFAFB0","neutral-80":"#C7CACA","neutral-90":"#DDE1E2","neutral-95":"#EDEFEF","neutral-100":"#F9F9F9","success-10":"#081A0F","success-20":"#0E2D1B","success-30":"#154126","success-40":"#1C5A34","success-50":"#257645","success-60":"#44A068","success-70":"#64C189","success-80":"#80DCA5","success-90":"#B4ECCB","success-95":"#D5F6E2","success-100":"#EFFCF4","warning-10":"#221302","warning-20":"#3B2204","warning-30":"#543106","warning-40":"#744408","warning-50":"#98590C","warning-60":"#D07A13","warning-70":"#E4A244","warning-80":"#F5C26C","warning-90":"#FADBA6","warning-95":"#FCECD4","warning-100":"#FDF7F0","error-10":"#330505","error-20":"#550808","error-30":"#750C0C","error-40":"#9E130F","error-50":"#CB2213","error-60":"#DE6C6C","error-70":"#E89B9B","error-80":"#EFBEBE","error-90":"#F5D9D9","error-95":"#F9ECEC","error-100":"#FCF7F7","info-10":"#021824","info-20":"#032B3F","info-30":"#053D59","info-40":"#065478","info-50":"#176E9B","info-60":"#5296BE","info-70":"#82B5DA","info-80":"#ACCFE7","info-90":"#CCE3F1","info-95":"#E3F1F8","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000","primary-inverse":"#FEAB10"},Yr={"brand-10":"#2C0C0B","brand-20":"#4C1513","brand-30":"#6C1D1B","brand-40":"#922825","brand-50":"#BF3431","brand-60":"#F15D5A","brand-70":"#F69491","brand-80":"#FABAB7","brand-90":"#FCD7D2","brand-95":"#FFEBE7","brand-100":"#FFF6F4","primary-10":"#001731","primary-20":"#002752","primary-30":"#003874","primary-40":"#004D9F","primary-50":"#1768BE","primary-60":"#3C91EC","primary-70":"#6CB4FF","primary-80":"#A5CDFF","primary-90":"#CFE1FE","primary-95":"#E8F0FE","primary-100":"#F7F9FF","secondary-10":"#131529","secondary-20":"#222547","secondary-30":"#2F3565","secondary-40":"#42498B","secondary-50":"#5B62A7","secondary-60":"#858CBD","secondary-70":"#A8ADCF","secondary-80":"#C6C9E0","secondary-90":"#DDDFEC","secondary-95":"#EDEEF5","secondary-100":"#F8F8FB","neutral-10":"#161616","neutral-20":"#282828","neutral-30":"#393939","neutral-40":"#4E4E4E","neutral-50":"#686868","neutral-60":"#8E8E8E","neutral-70":"#AFAFB0","neutral-80":"#C7CACA","neutral-90":"#DDE1E2","neutral-95":"#EDEFEF","neutral-100":"#F9F9F9","success-10":"#081A0F","success-20":"#0E2D1B","success-30":"#154126","success-40":"#1C5A34","success-50":"#257645","success-60":"#44A068","success-70":"#64C189","success-80":"#80DCA5","success-90":"#B4ECCB","success-95":"#D5F6E2","success-100":"#EFFCF4","warning-10":"#221302","warning-20":"#3B2204","warning-30":"#543106","warning-40":"#744408","warning-50":"#98590C","warning-60":"#D07A13","warning-70":"#E4A244","warning-80":"#F5C26C","warning-90":"#FADBA6","warning-95":"#FCECD4","warning-100":"#FDF7F0","error-10":"#330505","error-20":"#550808","error-30":"#750C0C","error-40":"#9E130F","error-50":"#CB2213","error-60":"#DE6C6C","error-70":"#E89B9B","error-80":"#EFBEBE","error-90":"#F5D9D9","error-95":"#F9ECEC","error-100":"#FCF7F7","info-10":"#021824","info-20":"#032B3F","info-30":"#053D59","info-40":"#065478","info-50":"#176E9B","info-60":"#5296BE","info-70":"#82B5DA","info-80":"#ACCFE7","info-90":"#CCE3F1","info-95":"#E3F1F8","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000","primary-inverse":"#FEAB10"},Ur={"brand-10":"#2C0C0B","brand-20":"#4C1513","brand-30":"#6C1D1B","brand-40":"#922825","brand-50":"#BF3431","brand-60":"#F15D5A","brand-70":"#F69491","brand-80":"#FABAB7","brand-90":"#FCD7D2","brand-95":"#FFEBE7","brand-100":"#FFF6F4","primary-10":"#0011924","primary-20":"#032B40","primary-30":"#043D5A","primary-40":"#05547B","primary-50":"#096EA1","primary-60":"#2098D3","primary-70":"#5CB9E8","primary-80":"#8BD3F6","primary-90":"#BEE6FA","primary-95":"#E2F2FA","primary-100":"#F4FAFC","secondary-10":"#131529","secondary-20":"#222547","secondary-30":"#2F3565","secondary-40":"#42498B","secondary-50":"#5B62A7","secondary-60":"#858CBD","secondary-70":"#A8ADCF","secondary-80":"#C6C9E0","secondary-90":"#DDDFEC","secondary-95":"#EDEEF5","secondary-100":"#F8F8FB","neutral-10":"#161616","neutral-20":"#282828","neutral-30":"#393939","neutral-40":"#4E4E4E","neutral-50":"#686868","neutral-60":"#8E8E8E","neutral-70":"#AFAFB0","neutral-80":"#C7CACA","neutral-90":"#DDE1E2","neutral-95":"#EDEFEF","neutral-100":"#F9F9F9","success-10":"#081A0F","success-20":"#0E2D1B","success-30":"#154126","success-40":"#1C5A34","success-50":"#257645","success-60":"#44A068","success-70":"#64C189","success-80":"#80DCA5","success-90":"#B4ECCB","success-95":"#D5F6E2","success-100":"#EFFCF4","warning-10":"#221302","warning-20":"#3B2204","warning-30":"#543106","warning-40":"#744408","warning-50":"#98590C","warning-60":"#D07A13","warning-70":"#E4A244","warning-80":"#F5C26C","warning-90":"#FADBA6","warning-95":"#FCECD4","warning-100":"#FDF7F0","error-10":"#330505","error-20":"#550808","error-30":"#750C0C","error-40":"#9E130F","error-50":"#CB2213","error-60":"#DE6C6C","error-70":"#E89B9B","error-80":"#EFBEBE","error-90":"#F5D9D9","error-95":"#F9ECEC","error-100":"#FCF7F7","info-10":"#021824","info-20":"#032B3F","info-30":"#053D59","info-40":"#065478","info-50":"#176E9B","info-60":"#5296BE","info-70":"#82B5DA","info-80":"#ACCFE7","info-90":"#CCE3F1","info-95":"#E3F1F8","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000","primary-inverse":"#FEAB10"},qr={"brand-10":"#001A19","brand-20":"#002D2B","brand-30":"#00413D","brand-40":"#005954","brand-50":"#00756F","brand-60":"#03A098","brand-70":"#55BFBA","brand-80":"#92D6D2","brand-90":"#BFE7E5","brand-95":"#DDF2F1","brand-100":"#F4FBFA","primary-10":"#09191D","primary-20":"#102B34","primary-30":"#173D49","primary-40":"#205666","primary-50":"#2A7086","primary-60":"#2A7086","primary-70":"#8CB6C2","primary-80":"#B2CED6","primary-90":"#D1E2E7","primary-95":"#E8F0F3","primary-100":"#F9F8FC","secondary-10":"#001731","secondary-20":"#002752","secondary-30":"#003874","secondary-40":"#004D9F","secondary-50":"#5B62A7","secondary-60":"#858CBD","secondary-70":"#A8ADCF","secondary-80":"#C6C9E0","secondary-90":"#DDDFEC","secondary-95":"#EDEEF5","secondary-100":"#F8F8FB","neutral-10":"#161616","neutral-20":"#282828","neutral-30":"#393939","neutral-40":"#4E4E4E","neutral-50":"#686868","neutral-60":"#8E8E8E","neutral-70":"#AFAFB0","neutral-80":"#C7CACA","neutral-90":"#DDE1E2","neutral-95":"#EDEFEF","neutral-100":"#F9F9F9","success-10":"#081A0F","success-20":"#0E2D1B","success-30":"#154126","success-40":"#1C5A34","success-50":"#257645","success-60":"#44A068","success-70":"#64C189","success-80":"#80DCA5","success-90":"#B4ECCB","success-95":"#D5F6E2","success-100":"#EFFCF4","warning-10":"#221302","warning-20":"#3B2204","warning-30":"#543106","warning-40":"#744408","warning-50":"#98590C","warning-60":"#D07A13","warning-70":"#E4A244","warning-80":"#F5C26C","warning-90":"#FADBA6","warning-95":"#FCECD4","warning-100":"#FDF7F0","error-10":"#330505","error-20":"#550808","error-30":"#750C0C","error-40":"#9E130F","error-50":"#CB2213","error-60":"#DE6C6C","error-70":"#E89B9B","error-80":"#EFBEBE","error-90":"#F5D9D9","error-95":"#F9ECEC","error-100":"#FCF7F7","info-10":"#021824","info-20":"#032B3F","info-30":"#053D59","info-40":"#065478","info-50":"#176E9B","info-60":"#5296BE","info-70":"#82B5DA","info-80":"#ACCFE7","info-90":"#CCE3F1","info-95":"#E3F1F8","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000","primary-inverse":"#FEAB10"},Gr={"brand-10":"#881317","brand-20":"#B5191E","brand-30":"#B5040A","brand-40":"#D0333F","brand-50":"#DC666F","brand-60":"#E28087","brand-70":"#E7999F","brand-80":"#EDB3B7","brand-90":"#F3CCCF","brand-95":"#F9E6E7","brand-100":"#FCF2F3","primary-10":"#000000","primary-20":"#191919","primary-30":"#333333","primary-40":"#4D4D4D","primary-50":"#666666","primary-60":"#808080","primary-70":"#999999","primary-80":"#B3B3B3","primary-90":"#E6E6E6","primary-95":"#F7F7F7","primary-100":"#FFFFFF","secondary-10":"#19151D","secondary-20":"#2B2533","secondary-30":"#3E3649","secondary-40":"#564A64","secondary-50":"#6F637D","secondary-60":"#948B9F","secondary-70":"#B3ACBB","secondary-80":"#CCC8D2","secondary-90":"#E1DEE4","secondary-95":"#EFEEF1","secondary-100":"#F9F8F9","neutral-10":"#000000","neutral-20":"#191919","neutral-30":"#333333","neutral-40":"#4D4D4D","neutral-50":"#666666","neutral-60":"#808080","neutral-70":"#999999","neutral-80":"#B3B3B3","neutral-90":"#E6E6E6","neutral-95":"#F7F7F7","neutral-100":"#FFFFFF","success-10":"#081A0F","success-20":"#0E2D1B","success-30":"#154126","success-40":"#1C5A34","success-50":"#257645","success-60":"#44A068","success-70":"#64C189","success-80":"#80DCA5","success-90":"#B4ECCB","success-95":"#D5F6E2","success-100":"#EFFCF4","warning-10":"#221302","warning-20":"#3B2204","warning-30":"#543106","warning-40":"#744408","warning-50":"#98590C","warning-60":"#D07A13","warning-70":"#E4A244","warning-80":"#F5C26C","warning-90":"#FADBA6","warning-95":"#FCECD4","warning-100":"#FDF7F0","error-10":"#330505","error-20":"#550808","error-30":"#750C0C","error-40":"#9E130F","error-50":"#CB2213","error-60":"#DE6C6C","error-70":"#E89B9B","error-80":"#EFBEBE","error-90":"#F5D9D9","error-95":"#F9ECEC","error-100":"#FCF7F7","info-10":"#021824","info-20":"#032B3F","info-30":"#053D59","info-40":"#065478","info-50":"#176E9B","info-60":"#5296BE","info-70":"#82B5DA","info-80":"#ACCFE7","info-90":"#CCE3F1","info-95":"#E3F1F8","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000","primary-inverse":"#FEAB10"},Zr={"brand-10":"#0E123A","brand-20":"#191E65","brand-30":"#232B90","brand-40":"#303BC5","brand-50":"#494CFF","brand-60":"#AD6EFF","brand-70":"#AEA4FF","brand-80":"#C5C4FF","brand-90":"#DDDCFF","brand-95":"#EDECFF","brand-100":"#F8F8FF","primary-10":"#10152B","primary-20":"#1C254B","primary-30":"#28356C","primary-40":"#38489A","primary-50":"#4D5AD7","primary-60":"#7487F2","primary-70":"#9AAAFC","primary-80":"#BDC7FD","primary-90":"#DADFFB","primary-95":"#ECEEFE","primary-100":"#F7F8FF","secondary-10":"#19151D","secondary-20":"#2B2533","secondary-30":"#3E3649","secondary-40":"#564A64","secondary-50":"#6F637D","secondary-60":"#948B9F","secondary-70":"#B3ACBB","secondary-80":"#CCC8D2","secondary-90":"#E1DEE4","secondary-95":"#EFEEF1","secondary-100":"#F9F8F9","neutral-10":"#161616","neutral-20":"#282828","neutral-30":"#393939","neutral-40":"#4E4E4E","neutral-50":"#686868","neutral-60":"#8E8E8E","neutral-70":"#AFAFB0","neutral-80":"#C7CACA","neutral-90":"#DDE1E2","neutral-95":"#EDEFEF","neutral-100":"#F9F9F9","success-10":"#081A0F","success-20":"#0E2D1B","success-30":"#154126","success-40":"#1C5A34","success-50":"#257645","success-60":"#44A068","success-70":"#64C189","success-80":"#80DCA5","success-90":"#B4ECCB","success-95":"#D5F6E2","success-100":"#EFFCF4","warning-10":"#221302","warning-20":"#3B2204","warning-30":"#543106","warning-40":"#744408","warning-50":"#98590C","warning-60":"#D07A13","warning-70":"#E4A244","warning-80":"#F5C26C","warning-90":"#FADBA6","warning-95":"#FCECD4","warning-100":"#FDF7F0","error-10":"#330505","error-20":"#550808","error-30":"#750C0C","error-40":"#9E130F","error-50":"#CB2213","error-60":"#DE6C6C","error-70":"#E89B9B","error-80":"#EFBEBE","error-90":"#F5D9D9","error-95":"#F9ECEC","error-100":"#FCF7F7","info-10":"#021824","info-20":"#032B3F","info-30":"#053D59","info-40":"#065478","info-50":"#176E9B","info-60":"#5296BE","info-70":"#82B5DA","info-80":"#ACCFE7","info-90":"#CCE3F1","info-95":"#E3F1F8","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000","primary-inverse":"#FEAB10"},Qr={"brand-10":"#170F39","brand-20":"#281C62","brand-30":"#38268B","brand-40":"#4D34BF","brand-50":"#5735DF","brand-60":"#9986F9","brand-70":"#B2A5F8","brand-80":"#CDC2FA","brand-90":"#E2DCFC","brand-95":"#EFEDFE","brand-100":"#FAF8FD","primary-10":"#170F39","primary-20":"#281C62","primary-30":"#38268B","primary-40":"#4D34BF","primary-50":"#5735DF","primary-60":"#9986F9","primary-70":"#B2A5F8","primary-80":"#CDC2FA","primary-90":"#E2DCFC","primary-95":"#EFEDFE","primary-100":"#FAF8FD","secondary-10":"#251204","secondary-20":"#401F08","secondary-30":"#5B2C0B","secondary-40":"#7E3D0F","secondary-50":"#B04900","secondary-60":"#E26E1C","secondary-70":"#FF9445","secondary-80":"#FFBB8E","secondary-90":"#FFD9BF","secondary-95":"#FFECDF","secondary-100":"#FFF8F3","neutral-10":"#161616","neutral-20":"#282828","neutral-30":"#393939","neutral-40":"#4E4E4E","neutral-50":"#686868","neutral-60":"#8E8E8E","neutral-70":"#AFAFB0","neutral-80":"#C7CACA","neutral-90":"#DDE1E2","neutral-95":"#EDEFEF","neutral-100":"#F9F9F9","success-10":"#031B15","success-20":"#082D24","success-30":"#094134","success-40":"#0D5947","success-50":"#10755E","success-60":"#16A181","success-70":"#1EC59D","success-80":"#6FDDC2","success-90":"#AFECDE","success-95":"#D5F5ED","success-100":"#F1FCF9","warning-10":"#1F1500","warning-20":"#362500","warning-30":"#4D3501","warning-40":"#6A4801","warning-50":"#8B6001","warning-60":"#BF8301","warning-70":"#EAA102","warning-80":"#FFBF34","warning-90":"#FFDC8F","warning-95":"#FFEDC7","warning-100":"#FFF8EA","error-10":"#270F10","error-20":"#441B1B","error-30":"#612627","error-40":"#853535","error-50":"#AF4546","error-60":"#EC6162","error-70":"#F29696","error-80":"#F7BBBC","error-90":"#FAD8D8","error-95":"#FCEAEA","error-100":"#FEF7F7","info-10":"#0F1627","info-20":"#1B2745","info-30":"#273763","info-40":"#354D88","info-50":"#4665B3","info-60":"#618AF6","info-70":"#8DADFF","info-80":"#B4C9FF","info-90":"#D3DFFF","info-95":"#E9EFFF","info-100":"#F5F8FF",white:"#FFFFFF",black:"#000000","primary-inverse":"#FEAB10"},Xr={collections:{lifesg:Yr,bookingsg:Nr,rbs:Zr,mylegacy:Ur,ccube:Vr,oneservice:qr,pa:Gr,a11yplayground:Qr},defaultValue:"lifesg"},Kr={collections:{lifesg:Yr,bookingsg:Nr,rbs:Zr,mylegacy:Ur,ccube:Vr,oneservice:qr,pa:Gr,a11yplayground:Qr},defaultValue:"lifesg"},Jr=e=>t=>{var r;const n=t.theme,o="dark"===(null==n?void 0:n.colourMode),i=Hr(o?Kr:Xr,null==n?void 0:n.colourScheme),s=o?"primitiveColourDark":"primitiveColour",a=null===(r=null==n?void 0:n.overrides)||void 0===r?void 0:r[s];return a?Rr(i,e,a):i[e]},en={"brand-10":Jr("brand-10"),"brand-20":Jr("brand-20"),"brand-30":Jr("brand-30"),"brand-40":Jr("brand-40"),"brand-50":Jr("brand-50"),"brand-60":Jr("brand-60"),"brand-70":Jr("brand-70"),"brand-80":Jr("brand-80"),"brand-90":Jr("brand-90"),"brand-95":Jr("brand-95"),"brand-100":Jr("brand-100"),"primary-10":Jr("primary-10"),"primary-20":Jr("primary-20"),"primary-30":Jr("primary-30"),"primary-40":Jr("primary-40"),"primary-50":Jr("primary-50"),"primary-60":Jr("primary-60"),"primary-70":Jr("primary-70"),"primary-80":Jr("primary-80"),"primary-90":Jr("primary-90"),"primary-95":Jr("primary-95"),"primary-100":Jr("primary-100"),"secondary-10":Jr("secondary-10"),"secondary-20":Jr("secondary-20"),"secondary-30":Jr("secondary-30"),"secondary-40":Jr("secondary-40"),"secondary-50":Jr("secondary-50"),"secondary-60":Jr("secondary-60"),"secondary-70":Jr("secondary-70"),"secondary-80":Jr("secondary-80"),"secondary-90":Jr("secondary-90"),"secondary-95":Jr("secondary-95"),"secondary-100":Jr("secondary-100"),"neutral-10":Jr("neutral-10"),"neutral-20":Jr("neutral-20"),"neutral-30":Jr("neutral-30"),"neutral-40":Jr("neutral-40"),"neutral-50":Jr("neutral-50"),"neutral-60":Jr("neutral-60"),"neutral-70":Jr("neutral-70"),"neutral-80":Jr("neutral-80"),"neutral-90":Jr("neutral-90"),"neutral-95":Jr("neutral-95"),"neutral-100":Jr("neutral-100"),"success-10":Jr("success-10"),"success-20":Jr("success-20"),"success-30":Jr("success-30"),"success-40":Jr("success-40"),"success-50":Jr("success-50"),"success-60":Jr("success-60"),"success-70":Jr("success-70"),"success-80":Jr("success-80"),"success-90":Jr("success-90"),"success-95":Jr("success-95"),"success-100":Jr("success-100"),"warning-10":Jr("warning-10"),"warning-20":Jr("warning-20"),"warning-30":Jr("warning-30"),"warning-40":Jr("warning-40"),"warning-50":Jr("warning-50"),"warning-60":Jr("warning-60"),"warning-70":Jr("warning-70"),"warning-80":Jr("warning-80"),"warning-90":Jr("warning-90"),"warning-95":Jr("warning-95"),"warning-100":Jr("warning-100"),"error-10":Jr("error-10"),"error-20":Jr("error-20"),"error-30":Jr("error-30"),"error-40":Jr("error-40"),"error-50":Jr("error-50"),"error-60":Jr("error-60"),"error-70":Jr("error-70"),"error-80":Jr("error-80"),"error-90":Jr("error-90"),"error-95":Jr("error-95"),"error-100":Jr("error-100"),"info-10":Jr("info-10"),"info-20":Jr("info-20"),"info-30":Jr("info-30"),"info-40":Jr("info-40"),"info-50":Jr("info-50"),"info-60":Jr("info-60"),"info-70":Jr("info-70"),"info-80":Jr("info-80"),"info-90":Jr("info-90"),"info-95":Jr("info-95"),"info-100":Jr("info-100"),white:Jr("white"),black:Jr("black"),"primary-inverse":Jr("primary-inverse")},tn={text:Jr("neutral-20"),"text-subtle":Jr("neutral-30"),"text-subtler":Jr("neutral-50"),"text-subtlest":Jr("neutral-60"),"text-primary":Jr("primary-50"),"text-hover":Jr("primary-40"),"text-selected":Jr("primary-50"),"text-selected-hover":Jr("primary-40"),"text-disabled":Jr("neutral-50"),"text-disabled-subtle":Jr("neutral-60"),"text-disabled-subtlest":Jr("neutral-80"),"text-selected-disabled":Jr("neutral-20"),"text-success":Jr("success-40"),"text-warning":Jr("warning-40"),"text-error":Jr("error-40"),"text-info":Jr("info-40"),"text-inverse":Jr("white"),icon:Jr("neutral-50"),"icon-subtle":Jr("neutral-60"),"icon-strongest":Jr("neutral-20"),"icon-primary":Jr("primary-50"),"icon-primary-subtle":Jr("primary-60"),"icon-primary-subtlest":Jr("primary-70"),"icon-hover":Jr("primary-40"),"icon-selected":Jr("primary-50"),"icon-selected-hover":Jr("primary-40"),"icon-disabled":Jr("neutral-50"),"icon-disabled-subtle":Jr("neutral-60"),"icon-selected-disabled":Jr("neutral-60"),"icon-success":Jr("success-50"),"icon-warning":Jr("warning-60"),"icon-error":Jr("error-50"),"icon-error-strong":Jr("error-40"),"icon-info":Jr("info-50"),"icon-inverse":Jr("white"),"icon-primary-inverse":Jr("primary-inverse"),border:Jr("neutral-90"),"border-strong":Jr("neutral-70"),"border-stronger":Jr("neutral-50"),"border-primary":Jr("primary-50"),"border-primary-subtle":Jr("primary-60"),"border-hover":Jr("primary-90"),"border-hover-strong":Jr("primary-60"),"border-selected":Jr("primary-50"),"border-selected-subtle":Jr("primary-70"),"border-selected-subtlest":Jr("primary-90"),"border-selected-hover":Jr("primary-40"),"border-focus":Jr("primary-60"),"border-focus-strong":Jr("primary-50"),"border-disabled":Jr("neutral-90"),"border-selected-disabled":Jr("neutral-70"),"border-success":Jr("success-60"),"border-warning":Jr("warning-60"),"border-error":Jr("error-60"),"border-error-focus":Jr("error-60"),"border-error-focus-strong":Jr("error-40"),"border-error-strong":Jr("error-40"),"border-info":Jr("info-60"),bg:Jr("white"),"bg-strong":Jr("neutral-100"),"bg-stronger":Jr("neutral-95"),"bg-strongest":Jr("neutral-90"),"bg-hover":Jr("primary-95"),"bg-hover-strong":Jr("primary-90"),"bg-hover-subtle":Jr("primary-100"),"bg-hover-neutral":Jr("neutral-100"),"bg-hover-neutral-strong":Jr("neutral-90"),"bg-selected":Jr("primary-95"),"bg-selected-hover":Jr("primary-90"),"bg-selected-strong":Jr("primary-90"),"bg-selected-stronger":Jr("primary-70"),"bg-selected-strongest":Jr("primary-50"),"bg-selected-strongest-hover":Jr("primary-40"),"bg-disabled":Jr("neutral-95"),"bg-selected-disabled":Jr("neutral-95"),"bg-selected-stronger-disabled":Jr("neutral-70"),"bg-success":Jr("success-100"),"bg-success-hover":Jr("success-95"),"bg-success-strong":Jr("success-50"),"bg-success-strong-hover":Jr("success-40"),"bg-warning":Jr("warning-100"),"bg-warning-hover":Jr("warning-95"),"bg-warning-strong":Jr("warning-50"),"bg-warning-strong-hover":Jr("warning-40"),"bg-info":Jr("info-100"),"bg-info-hover":Jr("info-95"),"bg-info-strong":Jr("info-50"),"bg-info-strong-hover":Jr("info-40"),"bg-error":Jr("error-100"),"bg-error-hover":Jr("error-95"),"bg-error-strong":Jr("error-50"),"bg-error-strong-hover":Jr("error-40"),"bg-inverse":Jr("neutral-20"),"bg-inverse-subtle":Jr("neutral-30"),"bg-inverse-subtler":Jr("neutral-50"),"bg-inverse-subtlest":Jr("neutral-60"),"bg-inverse-hover":Jr("neutral-40"),"bg-primary":Jr("primary-50"),"bg-primary-subtle":Jr("primary-60"),"bg-primary-subtler":Jr("primary-95"),"bg-primary-subtlest":Jr("primary-100"),"bg-available":"#6DD0A1","bg-primary-hover":Jr("primary-40"),"bg-primary-subtlest-hover":Jr("primary-90"),"bg-primary-subtlest-selected":Jr("primary-90"),"overlay-strong":"rgba(40, 40, 40, 0.85)","overlay-subtle":"rgba(40, 40, 40, 0.20)",hyperlink:Jr("primary-50"),"hyperlink-hover":Jr("primary-40"),"hyperlink-visited":Jr("primary-40"),"hyperlink-inverse":Jr("primary-inverse"),"focus-ring":Jr("black"),"focus-ring-inverse":Jr("white")},rn={text:Jr("neutral-100"),"text-subtle":Jr("neutral-80"),"text-subtler":Jr("neutral-60"),"text-subtlest":Jr("neutral-50"),"text-primary":Jr("primary-60"),"text-hover":Jr("primary-70"),"text-selected":Jr("primary-60"),"text-selected-hover":Jr("primary-70"),"text-disabled":Jr("neutral-60"),"text-disabled-subtle":Jr("neutral-50"),"text-disabled-subtlest":Jr("neutral-30"),"text-selected-disabled":Jr("neutral-90"),"text-success":Jr("success-70"),"text-warning":Jr("warning-70"),"text-error":Jr("error-70"),"text-info":Jr("info-70"),"text-inverse":Jr("black"),icon:Jr("neutral-60"),"icon-subtle":Jr("neutral-50"),"icon-strongest":Jr("neutral-90"),"icon-primary":Jr("primary-60"),"icon-primary-subtle":Jr("primary-50"),"icon-primary-subtlest":Jr("primary-40"),"icon-hover":Jr("primary-70"),"icon-selected":Jr("primary-60"),"icon-selected-hover":Jr("primary-70"),"icon-disabled":Jr("neutral-60"),"icon-disabled-subtle":Jr("neutral-50"),"icon-selected-disabled":Jr("neutral-50"),"icon-success":Jr("success-60"),"icon-warning":Jr("warning-50"),"icon-error":Jr("error-60"),"icon-error-strong":Jr("error-70"),"icon-info":Jr("info-60"),"icon-inverse":Jr("black"),"icon-primary-inverse":Jr("primary-inverse"),border:Jr("neutral-20"),"border-strong":Jr("neutral-40"),"border-stronger":Jr("neutral-60"),"border-primary":Jr("primary-60"),"border-primary-subtle":Jr("primary-50"),"border-hover":Jr("primary-20"),"border-hover-strong":Jr("primary-50"),"border-selected":Jr("primary-60"),"border-selected-subtle":Jr("primary-40"),"border-selected-subtlest":Jr("primary-20"),"border-selected-hover":Jr("primary-70"),"border-focus":Jr("primary-50"),"border-focus-strong":Jr("primary-60"),"border-disabled":Jr("neutral-20"),"border-selected-disabled":Jr("neutral-40"),"border-success":Jr("success-50"),"border-warning":Jr("warning-50"),"border-error":Jr("error-50"),"border-error-focus":Jr("error-50"),"border-error-focus-strong":Jr("error-70"),"border-error-strong":Jr("error-70"),"border-info":Jr("info-50"),bg:Jr("black"),"bg-strong":Jr("neutral-10"),"bg-stronger":Jr("neutral-20"),"bg-strongest":Jr("neutral-20"),"bg-hover":Jr("primary-20"),"bg-hover-strong":Jr("primary-20"),"bg-hover-subtle":Jr("primary-10"),"bg-hover-neutral":Jr("neutral-10"),"bg-hover-neutral-strong":Jr("neutral-20"),"bg-selected":Jr("primary-20"),"bg-selected-hover":Jr("primary-20"),"bg-selected-strong":Jr("primary-20"),"bg-selected-stronger":Jr("primary-40"),"bg-selected-strongest":Jr("primary-60"),"bg-selected-strongest-hover":Jr("primary-70"),"bg-disabled":Jr("neutral-20"),"bg-selected-disabled":Jr("neutral-20"),"bg-selected-stronger-disabled":Jr("neutral-40"),"bg-success":Jr("success-10"),"bg-success-hover":Jr("success-20"),"bg-success-strong":Jr("success-60"),"bg-success-strong-hover":Jr("success-70"),"bg-warning":Jr("warning-10"),"bg-warning-hover":Jr("warning-20"),"bg-warning-strong":Jr("warning-60"),"bg-warning-strong-hover":Jr("warning-70"),"bg-info":Jr("info-10"),"bg-info-hover":Jr("info-20"),"bg-info-strong":Jr("info-60"),"bg-info-strong-hover":Jr("info-70"),"bg-error":Jr("error-10"),"bg-error-hover":Jr("error-20"),"bg-error-strong":Jr("error-60"),"bg-error-strong-hover":Jr("error-70"),"bg-inverse":Jr("neutral-90"),"bg-inverse-subtle":Jr("neutral-80"),"bg-inverse-subtler":Jr("neutral-60"),"bg-inverse-subtlest":Jr("neutral-50"),"bg-inverse-hover":Jr("neutral-70"),"bg-primary":Jr("primary-60"),"bg-primary-subtle":Jr("primary-50"),"bg-primary-subtler":Jr("primary-20"),"bg-primary-subtlest":Jr("primary-10"),"bg-available":"#185339","bg-primary-hover":Jr("primary-70"),"bg-primary-subtlest-hover":Jr("primary-20"),"bg-primary-subtlest-selected":Jr("primary-20"),"overlay-strong":"rgba(78, 78, 78, 0.80)","overlay-subtle":"rgba(78, 78, 78, 0.50)",hyperlink:Jr("primary-60"),"hyperlink-hover":Jr("primary-70"),"hyperlink-visited":Jr("primary-70"),"hyperlink-inverse":Jr("primary-inverse"),"focus-ring":Jr("primary-60"),"focus-ring-inverse":Jr("black")},nn={text:Jr("neutral-30"),"text-subtle":Jr("neutral-40"),"text-subtler":Jr("neutral-50"),"text-subtlest":Jr("neutral-70"),"text-primary":Jr("neutral-10"),"text-hover":Jr("neutral-70"),"text-selected":Jr("neutral-20"),"text-selected-hover":Jr("neutral-10"),"text-disabled":Jr("neutral-50"),"text-disabled-subtle":Jr("neutral-60"),"text-disabled-subtlest":Jr("neutral-80"),"text-selected-disabled":Jr("neutral-40"),"text-success":Jr("success-40"),"text-warning":Jr("warning-40"),"text-error":Jr("brand-30"),"text-info":Jr("neutral-40"),"text-inverse":Jr("neutral-100"),icon:Jr("neutral-40"),"icon-subtle":Jr("neutral-50"),"icon-strongest":Jr("neutral-10"),"icon-primary":Jr("neutral-10"),"icon-primary-subtle":Jr("neutral-30"),"icon-primary-subtlest":Jr("neutral-60"),"icon-hover":Jr("neutral-70"),"icon-selected":Jr("brand-20"),"icon-selected-hover":Jr("brand-10"),"icon-disabled":Jr("neutral-50"),"icon-disabled-subtle":Jr("neutral-60"),"icon-selected-disabled":Jr("neutral-40"),"icon-success":Jr("success-40"),"icon-warning":Jr("warning-60"),"icon-error":Jr("brand-30"),"icon-error-strong":Jr("brand-10"),"icon-info":Jr("neutral-40"),"icon-inverse":Jr("neutral-100"),"icon-primary-inverse":"#F9B371",border:Jr("neutral-90"),"border-strong":Jr("neutral-30"),"border-stronger":Jr("neutral-20"),"border-primary":Jr("neutral-40"),"border-primary-subtle":Jr("neutral-60"),"border-hover":Jr("neutral-80"),"border-hover-strong":Jr("neutral-10"),"border-selected":Jr("brand-20"),"border-selected-subtle":Jr("neutral-40"),"border-selected-subtlest":Jr("neutral-70"),"border-selected-hover":Jr("neutral-10"),"border-focus":Jr("neutral-20"),"border-focus-strong":Jr("neutral-10"),"border-disabled":Jr("neutral-90"),"border-selected-disabled":Jr("neutral-80"),"border-success":Jr("success-40"),"border-warning":Jr("warning-60"),"border-error":Jr("brand-30"),"border-error-focus":Jr("brand-20"),"border-error-focus-strong":Jr("brand-10"),"border-error-strong":Jr("brand-20"),"border-info":Jr("neutral-40"),bg:Jr("neutral-100"),"bg-strong":Jr("neutral-95"),"bg-stronger":Jr("neutral-90"),"bg-strongest":Jr("neutral-80"),"bg-hover":Jr("brand-90"),"bg-hover-strong":Jr("brand-80"),"bg-hover-subtle":Jr("neutral-90"),"bg-hover-neutral":Jr("neutral-90"),"bg-hover-neutral-strong":Jr("neutral-90"),"bg-selected":Jr("brand-100"),"bg-selected-hover":Jr("brand-30"),"bg-selected-strong":Jr("brand-50"),"bg-selected-stronger":Jr("brand-40"),"bg-selected-strongest":Jr("brand-20"),"bg-selected-strongest-hover":Jr("brand-10"),"bg-disabled":Jr("neutral-90"),"bg-selected-disabled":Jr("neutral-90"),"bg-selected-stronger-disabled":Jr("neutral-80"),"bg-success":Jr("success-100"),"bg-success-hover":Jr("success-95"),"bg-success-strong":Jr("success-50"),"bg-success-strong-hover":Jr("success-40"),"bg-warning":Jr("warning-100"),"bg-warning-hover":Jr("warning-95"),"bg-warning-strong":Jr("warning-50"),"bg-warning-strong-hover":Jr("warning-40"),"bg-info":Jr("neutral-95"),"bg-info-hover":Jr("info-95"),"bg-info-strong":Jr("info-50"),"bg-info-strong-hover":Jr("info-40"),"bg-error":Jr("brand-100"),"bg-error-hover":Jr("error-95"),"bg-error-strong":Jr("error-50"),"bg-error-strong-hover":Jr("error-40"),"bg-inverse":Jr("neutral-40"),"bg-inverse-subtle":Jr("neutral-60"),"bg-inverse-subtler":Jr("neutral-70"),"bg-inverse-subtlest":Jr("neutral-80"),"bg-inverse-hover":Jr("neutral-30"),"bg-primary":Jr("brand-20"),"bg-primary-subtle":Jr("brand-60"),"bg-primary-subtler":Jr("brand-80"),"bg-primary-subtlest":Jr("brand-100"),"bg-available":Jr("success-60"),"bg-primary-hover":Jr("brand-10"),"bg-primary-subtlest-hover":Jr("brand-80"),"bg-primary-subtlest-selected":Jr("brand-40"),"overlay-strong":"rgba(25, 25, 25, 0.95)","overlay-subtle":"rgba(25, 25, 25, 0.20)",hyperlink:Jr("neutral-10"),"hyperlink-hover":Jr("neutral-40"),"hyperlink-visited":Jr("neutral-50"),"hyperlink-inverse":"#F8AE68","focus-ring":Jr("black"),"focus-ring-inverse":Jr("white")},on={text:Jr("neutral-20"),"text-subtle":Jr("neutral-30"),"text-subtler":Jr("neutral-50"),"text-subtlest":Jr("neutral-60"),"text-primary":Jr("primary-50"),"text-hover":Jr("primary-40"),"text-selected":Jr("primary-50"),"text-selected-hover":Jr("primary-40"),"text-disabled":Jr("neutral-50"),"text-disabled-subtle":Jr("neutral-60"),"text-disabled-subtlest":Jr("neutral-80"),"text-selected-disabled":Jr("neutral-20"),"text-success":Jr("success-40"),"text-warning":Jr("warning-40"),"text-error":Jr("error-40"),"text-info":Jr("info-40"),"text-inverse":Jr("white"),icon:Jr("neutral-50"),"icon-subtle":Jr("neutral-60"),"icon-strongest":Jr("neutral-20"),"icon-primary":Jr("primary-50"),"icon-primary-subtle":Jr("primary-60"),"icon-primary-subtlest":Jr("primary-70"),"icon-hover":Jr("primary-40"),"icon-selected":Jr("primary-50"),"icon-selected-hover":Jr("primary-40"),"icon-disabled":Jr("neutral-50"),"icon-disabled-subtle":Jr("neutral-60"),"icon-selected-disabled":Jr("neutral-60"),"icon-success":Jr("success-50"),"icon-warning":Jr("warning-60"),"icon-error":Jr("error-50"),"icon-error-strong":Jr("error-40"),"icon-info":Jr("info-50"),"icon-inverse":Jr("white"),"icon-primary-inverse":Jr("primary-inverse"),border:Jr("neutral-90"),"border-strong":Jr("neutral-70"),"border-stronger":Jr("neutral-50"),"border-primary":Jr("primary-50"),"border-primary-subtle":Jr("primary-60"),"border-hover":Jr("primary-90"),"border-hover-strong":Jr("primary-60"),"border-selected":Jr("primary-50"),"border-selected-subtle":Jr("primary-70"),"border-selected-subtlest":Jr("primary-90"),"border-selected-hover":Jr("primary-40"),"border-focus":Jr("primary-60"),"border-focus-strong":Jr("primary-50"),"border-disabled":Jr("neutral-90"),"border-selected-disabled":Jr("neutral-70"),"border-success":Jr("success-60"),"border-warning":Jr("warning-60"),"border-error":Jr("error-60"),"border-error-focus":Jr("error-60"),"border-error-focus-strong":Jr("error-40"),"border-error-strong":Jr("error-40"),"border-info":Jr("info-60"),bg:Jr("white"),"bg-strong":Jr("neutral-100"),"bg-stronger":Jr("neutral-95"),"bg-strongest":Jr("neutral-90"),"bg-hover":Jr("primary-95"),"bg-hover-strong":Jr("primary-90"),"bg-hover-subtle":Jr("primary-100"),"bg-hover-neutral":Jr("neutral-100"),"bg-hover-neutral-strong":Jr("neutral-90"),"bg-selected":Jr("primary-95"),"bg-selected-hover":Jr("primary-90"),"bg-selected-strong":Jr("primary-90"),"bg-selected-stronger":Jr("primary-70"),"bg-selected-strongest":Jr("primary-50"),"bg-selected-strongest-hover":Jr("primary-40"),"bg-disabled":Jr("neutral-95"),"bg-selected-disabled":Jr("neutral-95"),"bg-selected-stronger-disabled":Jr("neutral-70"),"bg-success":Jr("success-100"),"bg-success-hover":Jr("success-95"),"bg-success-strong":Jr("success-50"),"bg-success-strong-hover":Jr("success-40"),"bg-warning":Jr("warning-100"),"bg-warning-hover":Jr("warning-95"),"bg-warning-strong":Jr("warning-50"),"bg-warning-strong-hover":Jr("warning-40"),"bg-info":Jr("info-100"),"bg-info-hover":Jr("info-95"),"bg-info-strong":Jr("info-50"),"bg-info-strong-hover":Jr("info-40"),"bg-error":Jr("error-100"),"bg-error-hover":Jr("error-95"),"bg-error-strong":Jr("error-50"),"bg-error-strong-hover":Jr("error-40"),"bg-inverse":Jr("neutral-20"),"bg-inverse-subtle":Jr("neutral-30"),"bg-inverse-subtler":Jr("neutral-50"),"bg-inverse-subtlest":Jr("neutral-60"),"bg-inverse-hover":Jr("neutral-40"),"bg-primary":Jr("primary-50"),"bg-primary-subtle":Jr("primary-60"),"bg-primary-subtler":Jr("primary-95"),"bg-primary-subtlest":Jr("primary-100"),"bg-available":"#6DD0A1","bg-primary-hover":Jr("primary-40"),"bg-primary-subtlest-hover":Jr("primary-90"),"bg-primary-subtlest-selected":Jr("primary-90"),"overlay-strong":"rgba(40, 40, 40, 0.85)","overlay-subtle":"rgba(40, 40, 40, 0.20)",hyperlink:Jr("primary-50"),"hyperlink-hover":Jr("primary-40"),"hyperlink-visited":Jr("primary-40"),"hyperlink-inverse":Jr("primary-inverse"),"focus-ring":Jr("black"),"focus-ring-inverse":Jr("white")},sn={text:Jr("neutral-100"),"text-subtle":Jr("neutral-80"),"text-subtler":Jr("neutral-60"),"text-subtlest":Jr("neutral-50"),"text-primary":Jr("primary-60"),"text-hover":Jr("primary-70"),"text-selected":Jr("primary-60"),"text-selected-hover":Jr("primary-70"),"text-disabled":Jr("neutral-60"),"text-disabled-subtle":Jr("neutral-50"),"text-disabled-subtlest":Jr("neutral-30"),"text-selected-disabled":Jr("neutral-90"),"text-success":Jr("success-70"),"text-warning":Jr("warning-70"),"text-error":Jr("error-70"),"text-info":Jr("info-70"),"text-inverse":Jr("black"),icon:Jr("neutral-60"),"icon-subtle":Jr("neutral-50"),"icon-strongest":Jr("neutral-90"),"icon-primary":Jr("primary-60"),"icon-primary-subtle":Jr("primary-50"),"icon-primary-subtlest":Jr("primary-40"),"icon-hover":Jr("primary-70"),"icon-selected":Jr("primary-60"),"icon-selected-hover":Jr("primary-70"),"icon-disabled":Jr("neutral-60"),"icon-disabled-subtle":Jr("neutral-50"),"icon-selected-disabled":Jr("neutral-50"),"icon-success":Jr("success-60"),"icon-warning":Jr("warning-50"),"icon-error":Jr("error-60"),"icon-error-strong":Jr("error-70"),"icon-info":Jr("info-60"),"icon-inverse":Jr("black"),"icon-primary-inverse":Jr("primary-inverse"),border:Jr("neutral-20"),"border-strong":Jr("neutral-40"),"border-stronger":Jr("neutral-60"),"border-primary":Jr("primary-60"),"border-primary-subtle":Jr("primary-50"),"border-hover":Jr("primary-20"),"border-hover-strong":Jr("primary-50"),"border-selected":Jr("primary-60"),"border-selected-subtle":Jr("primary-40"),"border-selected-subtlest":Jr("primary-20"),"border-selected-hover":Jr("primary-70"),"border-focus":Jr("primary-50"),"border-focus-strong":Jr("primary-60"),"border-disabled":Jr("neutral-20"),"border-selected-disabled":Jr("neutral-40"),"border-success":Jr("success-50"),"border-warning":Jr("warning-50"),"border-error":Jr("error-50"),"border-error-focus":Jr("error-50"),"border-error-focus-strong":Jr("error-70"),"border-error-strong":Jr("error-70"),"border-info":Jr("info-50"),bg:Jr("black"),"bg-strong":Jr("neutral-10"),"bg-stronger":Jr("neutral-20"),"bg-strongest":Jr("neutral-20"),"bg-hover":Jr("primary-20"),"bg-hover-strong":Jr("primary-20"),"bg-hover-subtle":Jr("primary-10"),"bg-hover-neutral":Jr("neutral-10"),"bg-hover-neutral-strong":Jr("neutral-20"),"bg-selected":Jr("primary-20"),"bg-selected-hover":Jr("primary-20"),"bg-selected-strong":Jr("primary-20"),"bg-selected-stronger":Jr("primary-40"),"bg-selected-strongest":Jr("primary-60"),"bg-selected-strongest-hover":Jr("primary-70"),"bg-disabled":Jr("neutral-20"),"bg-selected-disabled":Jr("neutral-20"),"bg-selected-stronger-disabled":Jr("neutral-40"),"bg-success":Jr("success-10"),"bg-success-hover":Jr("success-20"),"bg-success-strong":Jr("success-60"),"bg-success-strong-hover":Jr("success-70"),"bg-warning":Jr("warning-10"),"bg-warning-hover":Jr("warning-20"),"bg-warning-strong":Jr("warning-60"),"bg-warning-strong-hover":Jr("warning-70"),"bg-info":Jr("info-10"),"bg-info-hover":Jr("info-20"),"bg-info-strong":Jr("info-60"),"bg-info-strong-hover":Jr("info-70"),"bg-error":Jr("error-10"),"bg-error-hover":Jr("error-20"),"bg-error-strong":Jr("error-60"),"bg-error-strong-hover":Jr("error-70"),"bg-inverse":Jr("neutral-90"),"bg-inverse-subtle":Jr("neutral-80"),"bg-inverse-subtler":Jr("neutral-60"),"bg-inverse-subtlest":Jr("neutral-50"),"bg-inverse-hover":Jr("neutral-70"),"bg-primary":Jr("primary-60"),"bg-primary-subtle":Jr("primary-50"),"bg-primary-subtler":Jr("primary-20"),"bg-primary-subtlest":Jr("primary-10"),"bg-available":"#185339","bg-primary-hover":Jr("primary-70"),"bg-primary-subtlest-hover":Jr("primary-20"),"bg-primary-subtlest-selected":Jr("primary-20"),"overlay-strong":"rgba(78, 78, 78, 0.80)","overlay-subtle":"rgba(78, 78, 78, 0.50)",hyperlink:Jr("primary-60"),"hyperlink-hover":Jr("primary-70"),"hyperlink-visited":Jr("primary-70"),"hyperlink-inverse":Jr("primary-inverse"),"focus-ring":Jr("primary-60"),"focus-ring-inverse":Jr("black")},an={collections:{lifesg:tn,bookingsg:tn,rbs:tn,mylegacy:tn,ccube:tn,oneservice:tn,pa:nn,a11yplayground:on},defaultValue:"lifesg"},ln={collections:{lifesg:rn,bookingsg:rn,rbs:rn,mylegacy:rn,ccube:rn,oneservice:rn,pa:rn,a11yplayground:sn},defaultValue:"lifesg"},dn=e=>t=>{var r;const n=t.theme,o="dark"===(null==n?void 0:n.colourMode),i=Hr(o?ln:an,null==n?void 0:n.colourScheme),s=o?"semanticColourDark":"semanticColour",a=null===(r=null==n?void 0:n.overrides)||void 0===r?void 0:r[s],l=a?Rr(i,e,a):i[e];return"function"==typeof l?l(t):l},cn={text:dn("text"),"text-subtle":dn("text-subtle"),"text-subtler":dn("text-subtler"),"text-subtlest":dn("text-subtlest"),"text-primary":dn("text-primary"),"text-hover":dn("text-hover"),"text-selected":dn("text-selected"),"text-selected-hover":dn("text-selected-hover"),"text-disabled":dn("text-disabled"),"text-disabled-subtle":dn("text-disabled-subtle"),"text-disabled-subtlest":dn("text-disabled-subtlest"),"text-selected-disabled":dn("text-selected-disabled"),"text-success":dn("text-success"),"text-warning":dn("text-warning"),"text-error":dn("text-error"),"text-info":dn("text-info"),"text-inverse":dn("text-inverse"),icon:dn("icon"),"icon-subtle":dn("icon-subtle"),"icon-strongest":dn("icon-strongest"),"icon-primary":dn("icon-primary"),"icon-primary-subtle":dn("icon-primary-subtle"),"icon-primary-subtlest":dn("icon-primary-subtlest"),"icon-hover":dn("icon-hover"),"icon-selected":dn("icon-selected"),"icon-selected-hover":dn("icon-selected-hover"),"icon-disabled":dn("icon-disabled"),"icon-disabled-subtle":dn("icon-disabled-subtle"),"icon-selected-disabled":dn("icon-selected-disabled"),"icon-success":dn("icon-success"),"icon-warning":dn("icon-warning"),"icon-error":dn("icon-error"),"icon-error-strong":dn("icon-error-strong"),"icon-info":dn("icon-info"),"icon-inverse":dn("icon-inverse"),"icon-primary-inverse":dn("icon-primary-inverse"),border:dn("border"),"border-strong":dn("border-strong"),"border-stronger":dn("border-stronger"),"border-primary":dn("border-primary"),"border-primary-subtle":dn("border-primary-subtle"),"border-hover":dn("border-hover"),"border-hover-strong":dn("border-hover-strong"),"border-selected":dn("border-selected"),"border-selected-subtle":dn("border-selected-subtle"),"border-selected-subtlest":dn("border-selected-subtlest"),"border-selected-hover":dn("border-selected-hover"),"border-focus":dn("border-focus"),"border-focus-strong":dn("border-focus-strong"),"border-disabled":dn("border-disabled"),"border-selected-disabled":dn("border-selected-disabled"),"border-success":dn("border-success"),"border-warning":dn("border-warning"),"border-error":dn("border-error"),"border-error-focus":dn("border-error-focus"),"border-error-focus-strong":dn("border-error-focus-strong"),"border-error-strong":dn("border-error-strong"),"border-info":dn("border-info"),bg:dn("bg"),"bg-strong":dn("bg-strong"),"bg-stronger":dn("bg-stronger"),"bg-strongest":dn("bg-strongest"),"bg-hover":dn("bg-hover"),"bg-hover-strong":dn("bg-hover-strong"),"bg-hover-subtle":dn("bg-hover-subtle"),"bg-hover-neutral":dn("bg-hover-neutral"),"bg-hover-neutral-strong":dn("bg-hover-neutral-strong"),"bg-selected":dn("bg-selected"),"bg-selected-hover":dn("bg-selected-hover"),"bg-selected-strong":dn("bg-selected-strong"),"bg-selected-stronger":dn("bg-selected-stronger"),"bg-selected-strongest":dn("bg-selected-strongest"),"bg-selected-strongest-hover":dn("bg-selected-strongest-hover"),"bg-disabled":dn("bg-disabled"),"bg-selected-disabled":dn("bg-selected-disabled"),"bg-selected-stronger-disabled":dn("bg-selected-stronger-disabled"),"bg-success":dn("bg-success"),"bg-success-hover":dn("bg-success-hover"),"bg-success-strong":dn("bg-success-strong"),"bg-success-strong-hover":dn("bg-success-strong-hover"),"bg-warning":dn("bg-warning"),"bg-warning-hover":dn("bg-warning-hover"),"bg-warning-strong":dn("bg-warning-strong"),"bg-warning-strong-hover":dn("bg-warning-strong-hover"),"bg-info":dn("bg-info"),"bg-info-hover":dn("bg-info-hover"),"bg-info-strong":dn("bg-info-strong"),"bg-info-strong-hover":dn("bg-info-strong-hover"),"bg-error":dn("bg-error"),"bg-error-hover":dn("bg-error-hover"),"bg-error-strong":dn("bg-error-strong"),"bg-error-strong-hover":dn("bg-error-strong-hover"),"bg-inverse":dn("bg-inverse"),"bg-inverse-subtle":dn("bg-inverse-subtle"),"bg-inverse-subtler":dn("bg-inverse-subtler"),"bg-inverse-subtlest":dn("bg-inverse-subtlest"),"bg-inverse-hover":dn("bg-inverse-hover"),"bg-primary":dn("bg-primary"),"bg-primary-subtle":dn("bg-primary-subtle"),"bg-primary-subtler":dn("bg-primary-subtler"),"bg-primary-subtlest":dn("bg-primary-subtlest"),"bg-available":dn("bg-available"),"bg-primary-hover":dn("bg-primary-hover"),"bg-primary-subtlest-hover":dn("bg-primary-subtlest-hover"),"bg-primary-subtlest-selected":dn("bg-primary-subtlest-selected"),"overlay-strong":dn("overlay-strong"),"overlay-subtle":dn("overlay-subtle"),hyperlink:dn("hyperlink"),"hyperlink-hover":dn("hyperlink-hover"),"hyperlink-visited":dn("hyperlink-visited"),"hyperlink-inverse":dn("hyperlink-inverse"),"focus-ring":dn("focus-ring"),"focus-ring-inverse":dn("focus-ring-inverse")},un={collections:{default:{solid:e=>t=>{var r,n,o;const{thickness:i,radius:s,colour:a}=e||{},l=null!==(r="function"==typeof i?i(t):i)&&void 0!==r?r:Pr["width-010"](t),d=null!==(n="function"==typeof s?s(t):s)&&void 0!==n?n:0,c=null!==(o="function"==typeof a?a(t):a)&&void 0!==o?o:cn.border(t),u=Pr.solid;return w`
            border: ${l} ${u} ${c};
            border-radius: ${d};
        `},"dashed-default":e=>t=>{var r,n,o;const{thickness:i,radius:s,colour:a}=e||{},l=null!==(r="function"==typeof i?i(t):i)&&void 0!==r?r:Pr["width-010"](t),d=null!==(n="function"==typeof s?s(t):s)&&void 0!==n?n:0,c=null!==(o="function"==typeof a?a(t):a)&&void 0!==o?o:cn.border(t),u=encodeURIComponent(`<svg width='100%' height='100%' xmlns='http://www.w3.org/2000/svg'><rect width='100%' height='100%' fill='none' rx='${d}' ry='${d}' stroke='${c}' stroke-width='${l}' stroke-dasharray='4, 8' stroke-dashoffset='0' stroke-linecap='square'/></svg>`);return w`
            background-image: url("data:image/svg+xml,${u}");
            border-radius: ${d};
        `}}},defaultValue:"default"},hn=e=>1===e.length&&"theme"in e[0],gn=e=>(...t)=>r=>{const n=hn(t)?[]:t,o=hn(t)?t[0]:r,i=o.theme;return(0,Hr(un,null==i?void 0:i.borderScheme)[e])(...n)(o)},mn={solid:gn("solid"),"dashed-default":gn("dashed-default")},pn={collections:{default:{"xxs-min":0,"xxs-max":320,"xs-min":321,"xs-max":375,"sm-min":376,"sm-max":420,"md-min":421,"md-max":767,"lg-min":768,"lg-max":1023,"xl-min":1024,"xl-max":1440,"xxl-min":1441,"xxs-column":8,"xs-column":8,"sm-column":8,"md-column":8,"lg-column":12,"xl-column":12,"xxl-column":12,"xxs-gutter":16,"xs-gutter":16,"sm-gutter":16,"md-gutter":16,"lg-gutter":32,"xl-gutter":32,"xxl-gutter":32,"xxs-margin":24,"xs-margin":24,"sm-margin":24,"md-margin":24,"lg-margin":48,"xl-margin":48,"xxl-margin":48}},defaultValue:"default"},fn=e=>t=>{var r;const n=t.theme,o=Hr(pn,null==n?void 0:n.breakpointScheme);let i;return i=(null===(r=null==n?void 0:n.overrides)||void 0===r?void 0:r.breakpoint)?Rr(o,e,n.overrides.breakpoint):o[e],i},bn={"xxs-min":fn("xxs-min"),"xxs-max":fn("xxs-max"),"xs-min":fn("xs-min"),"xs-max":fn("xs-max"),"sm-min":fn("sm-min"),"sm-max":fn("sm-max"),"md-min":fn("md-min"),"md-max":fn("md-max"),"lg-min":fn("lg-min"),"lg-max":fn("lg-max"),"xl-min":fn("xl-min"),"xl-max":fn("xl-max"),"xxl-min":fn("xxl-min"),"xxs-column":fn("xxs-column"),"xs-column":fn("xs-column"),"sm-column":fn("sm-column"),"md-column":fn("md-column"),"lg-column":fn("lg-column"),"xl-column":fn("xl-column"),"xxl-column":fn("xxl-column"),"xxs-gutter":fn("xxs-gutter"),"xs-gutter":fn("xs-gutter"),"sm-gutter":fn("sm-gutter"),"md-gutter":fn("md-gutter"),"lg-gutter":fn("lg-gutter"),"xl-gutter":fn("xl-gutter"),"xxl-gutter":fn("xxl-gutter"),"xxs-margin":fn("xxs-margin"),"xs-margin":fn("xs-margin"),"sm-margin":fn("sm-margin"),"md-margin":fn("md-margin"),"lg-margin":fn("lg-margin"),"xl-margin":fn("xl-margin"),"xxl-margin":fn("xxl-margin")},yn=e=>("max-width"===e?["xxs","xs","sm","md","lg","xl"]:["xxs","xs","sm","md","lg","xl","xxl"]).reduce(((t,r)=>(t[r]=((e,t)=>{const r=bn["max-width"===e?`${t}-max`:`${t}-min`];return t=>{const n=r(t);return`@media screen and (${e}: ${n}px)`}})(e,r),t)),{}),vn={MaxWidth:yn("max-width"),MinWidth:yn("min-width")},xn={collections:{default:{"heading-size-xxl":"3rem","heading-size-xl":"2.5rem","heading-size-lg":"2rem","heading-size-md":"1.625rem","heading-size-sm":"1.375rem","heading-size-xs":"1.125rem","heading-lh-xxl":"3.5rem","heading-lh-xl":"3rem","heading-lh-lg":"2.5rem","heading-lh-md":"2.25rem","heading-lh-sm":"1.75rem","heading-lh-xs":"1.625rem","heading-ls-xxl":"-0.056rem","heading-ls-xl":"-0.032rem","heading-ls-lg":"-0.032rem","heading-ls-md":"0rem","heading-ls-sm":"0rem","heading-ls-xs":"0rem","weight-light":"300","weight-regular":"400","weight-semibold":"600","weight-bold":"700","font-family":"Open Sans","body-size-baseline":"1.125rem","body-size-md":"1rem","body-size-sm":"0.875rem","body-size-xs":"0.75rem","body-lh-baseline":"1.625rem","body-lh-md":"1.5rem","body-lh-sm":"1.625rem","body-lh-xs":"1.25rem","body-ls-baseline":"0rem","body-ls-md":"0.014rem","body-ls-sm":"0.012rem","body-ls-xs":"0.012rem","form-label-size":"1rem","form-description-size":"0.875rem","form-label-lh":"1.5rem","form-description-lh":"1.6rem","form-label-ls":"0.014rem","form-description-ls":"0.012rem"},bookingsg:{"heading-size-xxl":"3rem","heading-size-xl":"2.5rem","heading-size-lg":"2rem","heading-size-md":"1.625rem","heading-size-sm":"1.375rem","heading-size-xs":"1.125rem","heading-lh-xxl":"3.5rem","heading-lh-xl":"3rem","heading-lh-lg":"2.5rem","heading-lh-md":"2.25rem","heading-lh-sm":"1.75rem","heading-lh-xs":"1.75rem","heading-ls-xxl":"-0.056rem","heading-ls-xl":"-0.032rem","heading-ls-lg":"-0.032rem","heading-ls-md":"0rem","heading-ls-sm":"0rem","heading-ls-xs":"0rem","weight-light":"300","weight-regular":"400","weight-semibold":"600","weight-bold":"700","font-family":"Plus Jakarta Sans","body-size-baseline":"1.125rem","body-size-md":"1rem","body-size-sm":"0.875rem","body-size-xs":"0.75rem","body-lh-baseline":"1.75rem","body-lh-md":"1.5rem","body-lh-sm":"1.6rem","body-lh-xs":"1.2rem","body-ls-baseline":"0rem","body-ls-md":"0.014rem","body-ls-sm":"0.012rem","body-ls-xs":"0.012rem","form-label-size":"1rem","form-description-size":"0.875rem","form-label-lh":"1.5rem","form-description-lh":"1.6rem","form-label-ls":"0.014rem","form-description-ls":"0.012rem"},pa:{"heading-size-xxl":"2.5rem","heading-size-xl":"2rem","heading-size-lg":"1.75rem","heading-size-md":"1.5rem","heading-size-sm":"1.25rem","heading-size-xs":"1rem","heading-lh-xxl":"3rem","heading-lh-xl":"2.5rem","heading-lh-lg":"2.25rem","heading-lh-md":"2rem","heading-lh-sm":"2rem","heading-lh-xs":"1.75rem","heading-ls-xxl":"-0.032rem","heading-ls-xl":"-0.032rem","heading-ls-lg":"0rem","heading-ls-md":"0rem","heading-ls-sm":"0rem","heading-ls-xs":"0rem","weight-light":"300","weight-regular":"400","weight-semibold":"600","weight-bold":"700","font-family":"Lato","body-size-baseline":"1rem","body-size-md":"0.875rem","body-size-sm":"0.75rem","body-size-xs":"0.625rem","body-lh-baseline":"1.75rem","body-lh-md":"1.5rem","body-lh-sm":"1.25rem","body-lh-xs":"1.25rem","body-ls-baseline":"0rem","body-ls-md":"0.014rem","body-ls-sm":"0.012rem","body-ls-xs":"0.012rem","form-label-size":"1rem","form-description-size":"0.875rem","form-label-lh":"1.5rem","form-description-lh":"1.6rem","form-label-ls":"0.014rem","form-description-ls":"0.012rem"},a11yplayground:{"heading-size-xxl":"3rem","heading-size-xl":"2.5rem","heading-size-lg":"2rem","heading-size-md":"1.625rem","heading-size-sm":"1.375rem","heading-size-xs":"1.125rem","heading-lh-xxl":"3.5rem","heading-lh-xl":"3rem","heading-lh-lg":"2.5rem","heading-lh-md":"2.25rem","heading-lh-sm":"1.75rem","heading-lh-xs":"1.625rem","heading-ls-xxl":"-0.056rem","heading-ls-xl":"-0.032rem","heading-ls-lg":"-0.032rem","heading-ls-md":"0rem","heading-ls-sm":"0rem","heading-ls-xs":"0rem","weight-light":"300","weight-regular":"400","weight-semibold":"600","weight-bold":"700","font-family":"Atkinson Hyperlegible Next","body-size-baseline":"1.125rem","body-size-md":"1rem","body-size-sm":"0.875rem","body-size-xs":"0.75rem","body-lh-baseline":"1.625rem","body-lh-md":"1.5rem","body-lh-sm":"1.625rem","body-lh-xs":"1.25rem","body-ls-baseline":"0rem","body-ls-md":"0.014rem","body-ls-sm":"0.012rem","body-ls-xs":"0.012rem","form-label-size":"1.125rem","form-description-size":"1rem","form-label-lh":"1.5rem","form-description-lh":"1.625rem","form-label-ls":"0rem","form-description-ls":"0.00875rem"}},defaultValue:"default"},wn=e=>t=>{var r;const n=t.theme,o=Hr(xn,null==n?void 0:n.fontScheme);return(null===(r=null==n?void 0:n.overrides)||void 0===r?void 0:r.fontSpec)?Rr(o,e,n.overrides.fontSpec):o[e]},$n={"heading-size-xxl":wn("heading-size-xxl"),"heading-size-xl":wn("heading-size-xl"),"heading-size-lg":wn("heading-size-lg"),"heading-size-md":wn("heading-size-md"),"heading-size-sm":wn("heading-size-sm"),"heading-size-xs":wn("heading-size-xs"),"heading-lh-xxl":wn("heading-lh-xxl"),"heading-lh-xl":wn("heading-lh-xl"),"heading-lh-lg":wn("heading-lh-lg"),"heading-lh-md":wn("heading-lh-md"),"heading-lh-sm":wn("heading-lh-sm"),"heading-lh-xs":wn("heading-lh-xs"),"heading-ls-xxl":wn("heading-ls-xxl"),"heading-ls-xl":wn("heading-ls-xl"),"heading-ls-lg":wn("heading-ls-lg"),"heading-ls-md":wn("heading-ls-md"),"heading-ls-sm":wn("heading-ls-sm"),"heading-ls-xs":wn("heading-ls-xs"),"weight-light":wn("weight-light"),"weight-regular":wn("weight-regular"),"weight-semibold":wn("weight-semibold"),"weight-bold":wn("weight-bold"),"font-family":wn("font-family"),"body-size-baseline":wn("body-size-baseline"),"body-size-md":wn("body-size-md"),"body-size-sm":wn("body-size-sm"),"body-size-xs":wn("body-size-xs"),"body-lh-baseline":wn("body-lh-baseline"),"body-lh-md":wn("body-lh-md"),"body-lh-sm":wn("body-lh-sm"),"body-lh-xs":wn("body-lh-xs"),"body-ls-baseline":wn("body-ls-baseline"),"body-ls-md":wn("body-ls-md"),"body-ls-sm":wn("body-ls-sm"),"body-ls-xs":wn("body-ls-xs"),"form-label-size":wn("form-label-size"),"form-description-size":wn("form-description-size"),"form-label-lh":wn("form-label-lh"),"form-description-lh":wn("form-description-lh"),"form-label-ls":wn("form-label-ls"),"form-description-ls":wn("form-description-ls")},Fn=(e,t,r,n,o)=>{const{disableLigatures:i}=o||{};return w`
        font-family: ${wn("font-family")};
        font-size: ${wn(e)};
        font-weight: ${wn(t)};
        line-height: ${wn(r)};
        letter-spacing: ${wn(n)};

        font-variant: ${i?"no-common-ligatures":"normal"};
    `},Cn=(e={})=>({"heading-xxl-light":Fn("heading-size-xxl","weight-light","heading-lh-xxl","heading-ls-xxl",e),"heading-xxl-regular":Fn("heading-size-xxl","weight-regular","heading-lh-xxl","heading-ls-xxl",e),"heading-xxl-semibold":Fn("heading-size-xxl","weight-semibold","heading-lh-xxl","heading-ls-xxl",e),"heading-xxl-bold":Fn("heading-size-xxl","weight-bold","heading-lh-xxl","heading-ls-xxl",e),"heading-xl-light":Fn("heading-size-xl","weight-light","heading-lh-xl","heading-ls-xl",e),"heading-xl-regular":Fn("heading-size-xl","weight-regular","heading-lh-xl","heading-ls-xl",e),"heading-xl-semibold":Fn("heading-size-xl","weight-semibold","heading-lh-xl","heading-ls-xl",e),"heading-xl-bold":Fn("heading-size-xl","weight-bold","heading-lh-xl","heading-ls-xl",e),"heading-lg-light":Fn("heading-size-lg","weight-light","heading-lh-lg","heading-ls-lg",e),"heading-lg-regular":Fn("heading-size-lg","weight-regular","heading-lh-lg","heading-ls-lg",e),"heading-lg-semibold":Fn("heading-size-lg","weight-semibold","heading-lh-lg","heading-ls-lg",e),"heading-lg-bold":Fn("heading-size-lg","weight-bold","heading-lh-lg","heading-ls-lg",e),"heading-md-light":Fn("heading-size-md","weight-light","heading-lh-md","heading-ls-md",e),"heading-md-regular":Fn("heading-size-md","weight-regular","heading-lh-md","heading-ls-md",e),"heading-md-semibold":Fn("heading-size-md","weight-semibold","heading-lh-md","heading-ls-md",e),"heading-md-bold":Fn("heading-size-md","weight-bold","heading-lh-md","heading-ls-md",e),"heading-sm-light":Fn("heading-size-sm","weight-light","heading-lh-sm","heading-ls-sm",e),"heading-sm-regular":Fn("heading-size-sm","weight-regular","heading-lh-sm","heading-ls-sm",e),"heading-sm-semibold":Fn("heading-size-sm","weight-semibold","heading-lh-sm","heading-ls-sm",e),"heading-sm-bold":Fn("heading-size-sm","weight-bold","heading-lh-sm","heading-ls-sm",e),"heading-xs-light":Fn("heading-size-xs","weight-light","heading-lh-xs","heading-ls-xs",e),"heading-xs-regular":Fn("heading-size-xs","weight-regular","heading-lh-xs","heading-ls-xs",e),"heading-xs-semibold":Fn("heading-size-xs","weight-semibold","heading-lh-xs","heading-ls-xs",e),"heading-xs-bold":Fn("heading-size-xs","weight-bold","heading-lh-xs","heading-ls-xs",e),"body-baseline-light":Fn("body-size-baseline","weight-light","body-lh-baseline","body-ls-baseline",e),"body-baseline-regular":Fn("body-size-baseline","weight-regular","body-lh-baseline","body-ls-baseline",e),"body-baseline-semibold":Fn("body-size-baseline","weight-semibold","body-lh-baseline","body-ls-baseline",e),"body-baseline-bold":Fn("body-size-baseline","weight-bold","body-lh-baseline","body-ls-baseline",e),"body-md-light":Fn("body-size-md","weight-light","body-lh-md","body-ls-md",e),"body-md-regular":Fn("body-size-md","weight-regular","body-lh-md","body-ls-md",e),"body-md-semibold":Fn("body-size-md","weight-semibold","body-lh-md","body-ls-md",e),"body-md-bold":Fn("body-size-md","weight-bold","body-lh-md","body-ls-md",e),"body-sm-light":Fn("body-size-sm","weight-light","body-lh-sm","body-ls-sm",e),"body-sm-regular":Fn("body-size-sm","weight-regular","body-lh-sm","body-ls-sm",e),"body-sm-semibold":Fn("body-size-sm","weight-semibold","body-lh-sm","body-ls-sm",e),"body-sm-bold":Fn("body-size-sm","weight-bold","body-lh-sm","body-ls-sm",e),"body-xs-light":Fn("body-size-xs","weight-light","body-lh-xs","body-ls-xs",e),"body-xs-regular":Fn("body-size-xs","weight-regular","body-lh-xs","body-ls-xs",e),"body-xs-semibold":Fn("body-size-xs","weight-semibold","body-lh-xs","body-ls-xs",e),"body-xs-bold":Fn("body-size-xs","weight-bold","body-lh-xs","body-ls-xs",e),"form-label":Fn("form-label-size","weight-semibold","form-label-lh","form-label-ls",e),"form-description":Fn("form-description-size","weight-regular","form-description-lh","form-description-ls",e)}),Sn=Cn({disableLigatures:!0}),En={collections:{default:Cn(),bookingsg:Sn,pa:Cn({disableLigatures:!0}),a11yplayground:Cn({disableLigatures:!0})},defaultValue:"default"},kn=e=>t=>{var r;const n=t.theme,o=Hr(En,null==n?void 0:n.fontScheme),i=(null===(r=null==n?void 0:n.overrides)||void 0===r?void 0:r.font)?Rr(o,e,n.overrides.font):o[e];return"function"==typeof i?i(t):i},Dn={"heading-xxl-light":kn("heading-xxl-light"),"heading-xxl-regular":kn("heading-xxl-regular"),"heading-xxl-semibold":kn("heading-xxl-semibold"),"heading-xxl-bold":kn("heading-xxl-bold"),"heading-xl-light":kn("heading-xl-light"),"heading-xl-regular":kn("heading-xl-regular"),"heading-xl-semibold":kn("heading-xl-semibold"),"heading-xl-bold":kn("heading-xl-bold"),"heading-lg-light":kn("heading-lg-light"),"heading-lg-regular":kn("heading-lg-regular"),"heading-lg-semibold":kn("heading-lg-semibold"),"heading-lg-bold":kn("heading-lg-bold"),"heading-md-light":kn("heading-md-light"),"heading-md-regular":kn("heading-md-regular"),"heading-md-semibold":kn("heading-md-semibold"),"heading-md-bold":kn("heading-md-bold"),"heading-sm-light":kn("heading-sm-light"),"heading-sm-regular":kn("heading-sm-regular"),"heading-sm-semibold":kn("heading-sm-semibold"),"heading-sm-bold":kn("heading-sm-bold"),"heading-xs-light":kn("heading-xs-light"),"heading-xs-regular":kn("heading-xs-regular"),"heading-xs-semibold":kn("heading-xs-semibold"),"heading-xs-bold":kn("heading-xs-bold"),"body-baseline-light":kn("body-baseline-light"),"body-baseline-regular":kn("body-baseline-regular"),"body-baseline-semibold":kn("body-baseline-semibold"),"body-baseline-bold":kn("body-baseline-bold"),"body-md-light":kn("body-md-light"),"body-md-regular":kn("body-md-regular"),"body-md-semibold":kn("body-md-semibold"),"body-md-bold":kn("body-md-bold"),"body-sm-light":kn("body-sm-light"),"body-sm-regular":kn("body-sm-regular"),"body-sm-semibold":kn("body-sm-semibold"),"body-sm-bold":kn("body-sm-bold"),"body-xs-light":kn("body-xs-light"),"body-xs-regular":kn("body-xs-regular"),"body-xs-semibold":kn("body-xs-semibold"),"body-xs-bold":kn("body-xs-bold"),"form-label":kn("form-label"),"form-description":kn("form-description")},In={collections:{default:{"duration-150":"150ms","duration-250":"250ms","duration-350":"350ms","duration-500":"500ms","duration-800":"800ms","duration-1000":"1000ms","ease-default":"cubic-bezier(0.45, 0.05, 0.55, 0.95)","ease-standard":"cubic-bezier(0.86, 0, 0.07, 1)","ease-entrance":"cubic-bezier(0.18, 0.13, 0, 1)","ease-exit":"cubic-bezier(1, 0, 0.8, 0.85)"}},defaultValue:"default"},Tn=e=>t=>{var r;const n=t.theme,o=Hr(In,null==n?void 0:n.motionScheme);return(null===(r=null==n?void 0:n.overrides)||void 0===r?void 0:r.motion)?Rr(o,e,n.overrides.motion):o[e]},Bn={"duration-150":Tn("duration-150"),"duration-250":Tn("duration-250"),"duration-350":Tn("duration-350"),"duration-500":Tn("duration-500"),"duration-800":Tn("duration-800"),"duration-1000":Tn("duration-1000"),"ease-default":Tn("ease-default"),"ease-standard":Tn("ease-standard"),"ease-entrance":Tn("ease-entrance"),"ease-exit":Tn("ease-exit")},An={collections:{default:{none:0,xs:2,sm:4,md:8,lg:12,full:9999}},defaultValue:"default"},zn=e=>t=>{var r;const n=t.theme,o=Hr(An,null==n?void 0:n.radiusScheme);return(null===(r=null==n?void 0:n.overrides)||void 0===r?void 0:r.radius)?`${Rr(o,e,n.overrides.radius)}px`:`${o[e]}px`},On={none:zn("none"),xs:zn("xs"),sm:zn("sm"),md:zn("md"),lg:zn("lg"),full:zn("full")},Mn={collections:{default:{"spacing-0":0,"spacing-4":4,"spacing-8":8,"spacing-12":12,"spacing-16":16,"spacing-20":20,"spacing-24":24,"spacing-32":32,"spacing-40":40,"spacing-48":48,"spacing-64":64,"spacing-72":72,"layout-xs":8,"layout-sm":16,"layout-md":24,"layout-lg":32,"layout-xl":48,"layout-xxl":64,"layout-xxxl":128}},defaultValue:"default"},_n=e=>t=>{var r;const n=t.theme,o=Hr(Mn,null==n?void 0:n.spacingScheme);return(null===(r=null==n?void 0:n.overrides)||void 0===r?void 0:r.spacing)?`${Rr(o,e,n.overrides.spacing)}px`:`${o[e]}px`},Rn={"spacing-0":_n("spacing-0"),"spacing-4":_n("spacing-4"),"spacing-8":_n("spacing-8"),"spacing-12":_n("spacing-12"),"spacing-16":_n("spacing-16"),"spacing-20":_n("spacing-20"),"spacing-24":_n("spacing-24"),"spacing-32":_n("spacing-32"),"spacing-40":_n("spacing-40"),"spacing-48":_n("spacing-48"),"spacing-64":_n("spacing-64"),"spacing-72":_n("spacing-72"),"layout-xs":_n("layout-xs"),"layout-sm":_n("layout-sm"),"layout-md":_n("layout-md"),"layout-lg":_n("layout-lg"),"layout-xl":_n("layout-xl"),"layout-xxl":_n("layout-xxl"),"layout-xxxl":_n("layout-xxxl")},Hn=(e,t)=>Object.assign(Object.assign({},e),{colourMode:t}),jn=Object.assign(Object.assign({},cn),{Primitive:en}),Ln=Object.assign(Object.assign({},Dn),{Spec:$n}),Pn=Bn,Wn=Object.assign(Object.assign({},Pr),{Util:mn}),Nn=Rn,Vn=On,Yn=bn,Un=vn,qn={colourScheme:"lifesg",fontScheme:"default",motionScheme:"default",borderScheme:"default",spacingScheme:"default",radiusScheme:"default",breakpointScheme:"default",resourceScheme:"lifesg",_v2:{colorScheme:"base",textStyleScheme:"base",designTokenScheme:"base",resourceScheme:"base"}},Gn={colourScheme:"bookingsg",fontScheme:"bookingsg",motionScheme:"default",borderScheme:"default",spacingScheme:"default",radiusScheme:"default",breakpointScheme:"default",resourceScheme:"bookingsg",_v2:{colorScheme:"bookingsg",textStyleScheme:"base",designTokenScheme:"base",resourceScheme:"bookingsg"}},Zn={colourScheme:"ccube",fontScheme:"default",motionScheme:"default",borderScheme:"default",spacingScheme:"default",radiusScheme:"default",breakpointScheme:"default",resourceScheme:"ccube",_v2:{colorScheme:"ccube",textStyleScheme:"base",designTokenScheme:"base",resourceScheme:"ccube"}},Qn={colourScheme:"mylegacy",fontScheme:"default",motionScheme:"default",borderScheme:"default",spacingScheme:"default",radiusScheme:"default",breakpointScheme:"default",resourceScheme:"mylegacy",_v2:{colorScheme:"mylegacy",textStyleScheme:"base",designTokenScheme:"base",resourceScheme:"mylegacy"}},Xn={colourScheme:"rbs",fontScheme:"default",motionScheme:"default",borderScheme:"default",spacingScheme:"default",radiusScheme:"default",breakpointScheme:"default",resourceScheme:"rbs",_v2:{colorScheme:"rbs",textStyleScheme:"base",designTokenScheme:"rbs",resourceScheme:"rbs"}},Kn={colourScheme:"oneservice",fontScheme:"default",motionScheme:"default",borderScheme:"default",spacingScheme:"default",radiusScheme:"default",breakpointScheme:"default",resourceScheme:"oneservice"},Jn={colourScheme:"pa",fontScheme:"pa",motionScheme:"default",borderScheme:"default",spacingScheme:"default",radiusScheme:"default",breakpointScheme:"default",resourceScheme:"pa",componentScheme:"pa"},eo={colourScheme:"a11yplayground",fontScheme:"a11yplayground",motionScheme:"default",borderScheme:"default",spacingScheme:"default",radiusScheme:"default",breakpointScheme:"default",resourceScheme:"a11yplayground",componentScheme:"default"};Object.assign(Object.assign({},qn),{light:Hn(qn,"light"),dark:Hn(qn,"dark")}),Object.assign(Object.assign({},Gn),{light:Hn(Gn,"light"),dark:Hn(Gn,"dark")}),Object.assign(Object.assign({},Zn),{light:Hn(Zn,"light"),dark:Hn(Zn,"dark")}),Object.assign(Object.assign({},Qn),{light:Hn(Qn,"light"),dark:Hn(Qn,"dark")}),Object.assign(Object.assign({},Xn),{light:Hn(Xn,"light"),dark:Hn(Xn,"dark")}),Object.assign(Object.assign({},Kn),{light:Hn(Kn,"light"),dark:Hn(Kn,"dark")}),Object.assign(Object.assign({},Jn),{light:Hn(Jn,"light"),dark:Hn(Jn,"dark")}),Object.assign(Object.assign({},eo),{light:Hn(eo,"light"),dark:Hn(eo,"dark")});const to=x.div`
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
                        100% - ${Ln.Spec["body-size-baseline"]} -
                            ${Nn["spacing-16"]}
                    );
                    flex: unset;
                }

                [data-id="range-container-elem2-container"] {
                    margin-top: ${Nn["spacing-8"]};
                }
            `}}
`,ro=x.div`
    width: 100%; // Force next flex item to break to next line
`,no=x.div`
    display: flex;
    flex: 1;
    align-items: center;
`,oo=x(y)`
    color: ${jn.icon};
    width: ${Ln.Spec["body-size-baseline"]};
    height: ${Ln.Spec["body-size-baseline"]};
    flex-shrink: 0;
    margin: 0 ${Nn["spacing-8"]};
    align-self: center;
`,io=x.div`
    position: absolute;
    background: ${e=>e.$error?jn["border-error-focus-strong"]:jn["border-focus-strong"]};
    height: 2px;
    // half - half padding - half icon width
    width: calc(
        50% - ${Nn["spacing-8"]} - (${Ln.Spec["body-size-baseline"]} / 2)
    );
    transition: left ${Pn["duration-350"]} ${Pn["ease-standard"]},
        opacity ${Pn["duration-350"]} ${Pn["ease-standard"]};
    left: 0;
    bottom: 0;

    ${e=>{switch(e.$position){case"start":return w`
                    opacity: 1;
                `;case"end":return w`
                    left: calc(50% + ${Nn["spacing-16"]});
                    opacity: 1;
                `;case"none":return w`
                    opacity: 0;
                `}}}

    ${e=>{if(e.$wrap)return w`
                display: none;
            `}}
`,so=({children:r,currentActive:n,error:o,className:i,wrap:s})=>{const[a,l]=r;return e(to,{className:i,$wrap:s,children:[t(no,{"data-id":"range-container-elem1-container",children:a}),t(oo,{}),s&&t(ro,{}),t(no,{"data-id":"range-container-elem2-container",children:l}),t(io,{"data-id":"range-container-indicator",$position:n,$error:o,$wrap:s})]})},ao=w`
    outline-offset: -1px;
    outline: ${Wn["width-020"]} ${Wn.solid} ${jn["border-focus"]};
`,lo=w`
    outline-color: ${jn["border-focus"]};
`,co=w`
    outline-color: ${jn["border-disabled"]};
`,uo=w`
    outline-color: ${jn["border-error-focus"]};
`,ho=x.div`
    border: ${Wn["width-010"]} ${Wn.solid} ${jn.border};
    border-radius: ${Vn.sm};
    background: ${jn.bg};

    :focus-within {
        ${ao}
    }
    ${e=>e.$focused&&ao}

    ${e=>e.$readOnly?w`
                border-color: transparent;
                padding: 0;
                background: transparent !important;

                :focus-within {
                    ${lo}
                }
                ${e.$focused&&lo}
            `:e.$disabled?w`
                background: ${jn["bg-disabled"]};
                cursor: not-allowed;

                :focus-within {
                    ${co}
                }
                ${e.$focused&&co}
            `:e.$error?w`
                border-color: ${jn["border-error"]};

                :focus-within {
                    ${uo}
                }
                ${e.$focused&&uo}
            `:void 0}
`,go=x(ho)`
    display: flex;
    align-items: center;
    position: relative;
    height: max-content;
    width: 100%;
    padding: 0 ${Nn["spacing-16"]};
    flex-direction: ${e=>"right"===e.$position?"row-reverse":"row"};
`,mo=x.input`
    ${e=>"small"===e.$variant?Ln["body-md-regular"]:Ln["body-baseline-regular"]}
    color: ${jn.text};
    display: block;
    background: transparent;
    border: none;
    outline: none;
    box-shadow: none;
    padding: 0;
    margin: 0;

    :disabled {
        color: ${jn["text-subtler"]};

        :hover {
            cursor: not-allowed;
        }
    }

    ::placeholder,
    ::-webkit-input-placeholder {
        color: ${jn["text-subtler"]};
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
`,po=x.button`
    background: transparent;
    border: none;
    outline: none;

    :focus,
    :active {
        outline: none;
    }

    :focus-visible {
        outline: ${Wn["width-010"]} ${Wn.solid}
            ${jn["border-focus"]};
        border-radius: ${Vn.sm};
    }
`,fo=x.div`
    position: relative;
`,bo=x(go)`
    height: 3rem;
    gap: ${Nn["spacing-8"]};
`,yo=x(mo)`
    display: block;
    width: 100%;
    flex: 1;
`;var vo={exports:{}};vo.exports=function(){var e=1e3,t=6e4,r=36e5,n="millisecond",o="second",i="minute",s="hour",a="day",l="week",d="month",c="quarter",u="year",h="date",g="Invalid Date",m=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,p=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,f={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(e){var t=["th","st","nd","rd"],r=e%100;return"["+e+(t[(r-20)%10]||t[r]||t[0])+"]"}},b=function(e,t,r){var n=String(e);return!n||n.length>=t?e:""+Array(t+1-n.length).join(r)+e},y={s:b,z:function(e){var t=-e.utcOffset(),r=Math.abs(t),n=Math.floor(r/60),o=r%60;return(t<=0?"+":"-")+b(n,2,"0")+":"+b(o,2,"0")},m:function e(t,r){if(t.date()<r.date())return-e(r,t);var n=12*(r.year()-t.year())+(r.month()-t.month()),o=t.clone().add(n,d),i=r-o<0,s=t.clone().add(n+(i?-1:1),d);return+(-(n+(r-o)/(i?o-s:s-o))||0)},a:function(e){return e<0?Math.ceil(e)||0:Math.floor(e)},p:function(e){return{M:d,y:u,w:l,d:a,D:h,h:s,m:i,s:o,ms:n,Q:c}[e]||String(e||"").toLowerCase().replace(/s$/,"")},u:function(e){return void 0===e}},v="en",x={};x[v]=f;var w="$isDayjsObject",$=function(e){return e instanceof E||!(!e||!e[w])},F=function e(t,r,n){var o;if(!t)return v;if("string"==typeof t){var i=t.toLowerCase();x[i]&&(o=i),r&&(x[i]=r,o=i);var s=t.split("-");if(!o&&s.length>1)return e(s[0])}else{var a=t.name;x[a]=t,o=a}return!n&&o&&(v=o),o||!n&&v},C=function(e,t){if($(e))return e.clone();var r="object"==typeof t?t:{};return r.date=e,r.args=arguments,new E(r)},S=y;S.l=F,S.i=$,S.w=function(e,t){return C(e,{locale:t.$L,utc:t.$u,x:t.$x,$offset:t.$offset})};var E=function(){function f(e){this.$L=F(e.locale,null,!0),this.parse(e),this.$x=this.$x||e.x||{},this[w]=!0}var b=f.prototype;return b.parse=function(e){this.$d=function(e){var t=e.date,r=e.utc;if(null===t)return new Date(NaN);if(S.u(t))return new Date;if(t instanceof Date)return new Date(t);if("string"==typeof t&&!/Z$/i.test(t)){var n=t.match(m);if(n){var o=n[2]-1||0,i=(n[7]||"0").substring(0,3);return r?new Date(Date.UTC(n[1],o,n[3]||1,n[4]||0,n[5]||0,n[6]||0,i)):new Date(n[1],o,n[3]||1,n[4]||0,n[5]||0,n[6]||0,i)}}return new Date(t)}(e),this.init()},b.init=function(){var e=this.$d;this.$y=e.getFullYear(),this.$M=e.getMonth(),this.$D=e.getDate(),this.$W=e.getDay(),this.$H=e.getHours(),this.$m=e.getMinutes(),this.$s=e.getSeconds(),this.$ms=e.getMilliseconds()},b.$utils=function(){return S},b.isValid=function(){return!(this.$d.toString()===g)},b.isSame=function(e,t){var r=C(e);return this.startOf(t)<=r&&r<=this.endOf(t)},b.isAfter=function(e,t){return C(e)<this.startOf(t)},b.isBefore=function(e,t){return this.endOf(t)<C(e)},b.$g=function(e,t,r){return S.u(e)?this[t]:this.set(r,e)},b.unix=function(){return Math.floor(this.valueOf()/1e3)},b.valueOf=function(){return this.$d.getTime()},b.startOf=function(e,t){var r=this,n=!!S.u(t)||t,c=S.p(e),g=function(e,t){var o=S.w(r.$u?Date.UTC(r.$y,t,e):new Date(r.$y,t,e),r);return n?o:o.endOf(a)},m=function(e,t){return S.w(r.toDate()[e].apply(r.toDate("s"),(n?[0,0,0,0]:[23,59,59,999]).slice(t)),r)},p=this.$W,f=this.$M,b=this.$D,y="set"+(this.$u?"UTC":"");switch(c){case u:return n?g(1,0):g(31,11);case d:return n?g(1,f):g(0,f+1);case l:var v=this.$locale().weekStart||0,x=(p<v?p+7:p)-v;return g(n?b-x:b+(6-x),f);case a:case h:return m(y+"Hours",0);case s:return m(y+"Minutes",1);case i:return m(y+"Seconds",2);case o:return m(y+"Milliseconds",3);default:return this.clone()}},b.endOf=function(e){return this.startOf(e,!1)},b.$set=function(e,t){var r,l=S.p(e),c="set"+(this.$u?"UTC":""),g=(r={},r[a]=c+"Date",r[h]=c+"Date",r[d]=c+"Month",r[u]=c+"FullYear",r[s]=c+"Hours",r[i]=c+"Minutes",r[o]=c+"Seconds",r[n]=c+"Milliseconds",r)[l],m=l===a?this.$D+(t-this.$W):t;if(l===d||l===u){var p=this.clone().set(h,1);p.$d[g](m),p.init(),this.$d=p.set(h,Math.min(this.$D,p.daysInMonth())).$d}else g&&this.$d[g](m);return this.init(),this},b.set=function(e,t){return this.clone().$set(e,t)},b.get=function(e){return this[S.p(e)]()},b.add=function(n,c){var h,g=this;n=Number(n);var m=S.p(c),p=function(e){var t=C(g);return S.w(t.date(t.date()+Math.round(e*n)),g)};if(m===d)return this.set(d,this.$M+n);if(m===u)return this.set(u,this.$y+n);if(m===a)return p(1);if(m===l)return p(7);var f=(h={},h[i]=t,h[s]=r,h[o]=e,h)[m]||1,b=this.$d.getTime()+n*f;return S.w(b,this)},b.subtract=function(e,t){return this.add(-1*e,t)},b.format=function(e){var t=this,r=this.$locale();if(!this.isValid())return r.invalidDate||g;var n=e||"YYYY-MM-DDTHH:mm:ssZ",o=S.z(this),i=this.$H,s=this.$m,a=this.$M,l=r.weekdays,d=r.months,c=r.meridiem,u=function(e,r,o,i){return e&&(e[r]||e(t,n))||o[r].slice(0,i)},h=function(e){return S.s(i%12||12,e,"0")},m=c||function(e,t,r){var n=e<12?"AM":"PM";return r?n.toLowerCase():n};return n.replace(p,(function(e,n){return n||function(e){switch(e){case"YY":return String(t.$y).slice(-2);case"YYYY":return S.s(t.$y,4,"0");case"M":return a+1;case"MM":return S.s(a+1,2,"0");case"MMM":return u(r.monthsShort,a,d,3);case"MMMM":return u(d,a);case"D":return t.$D;case"DD":return S.s(t.$D,2,"0");case"d":return String(t.$W);case"dd":return u(r.weekdaysMin,t.$W,l,2);case"ddd":return u(r.weekdaysShort,t.$W,l,3);case"dddd":return l[t.$W];case"H":return String(i);case"HH":return S.s(i,2,"0");case"h":return h(1);case"hh":return h(2);case"a":return m(i,s,!0);case"A":return m(i,s,!1);case"m":return String(s);case"mm":return S.s(s,2,"0");case"s":return String(t.$s);case"ss":return S.s(t.$s,2,"0");case"SSS":return S.s(t.$ms,3,"0");case"Z":return o}return null}(e)||o.replace(":","")}))},b.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},b.diff=function(n,h,g){var m,p=this,f=S.p(h),b=C(n),y=(b.utcOffset()-this.utcOffset())*t,v=this-b,x=function(){return S.m(p,b)};switch(f){case u:m=x()/12;break;case d:m=x();break;case c:m=x()/3;break;case l:m=(v-y)/6048e5;break;case a:m=(v-y)/864e5;break;case s:m=v/r;break;case i:m=v/t;break;case o:m=v/e;break;default:m=v}return g?m:S.a(m)},b.daysInMonth=function(){return this.endOf(d).$D},b.$locale=function(){return x[this.$L]},b.locale=function(e,t){if(!e)return this.$L;var r=this.clone(),n=F(e,t,!0);return n&&(r.$L=n),r},b.clone=function(){return S.w(this.$d,this)},b.toDate=function(){return new Date(this.valueOf())},b.toJSON=function(){return this.isValid()?this.toISOString():null},b.toISOString=function(){return this.$d.toISOString()},b.toString=function(){return this.$d.toUTCString()},f}(),k=E.prototype;return C.prototype=k,[["$ms",n],["$s",o],["$m",i],["$H",s],["$W",a],["$M",d],["$y",u],["$D",h]].forEach((function(e){k[e[1]]=function(t){return this.$g(t,e[0],e[1])}})),C.extend=function(e,t){return e.$i||(e(t,E,C),e.$i=!0),C},C.locale=F,C.isDayjs=$,C.unix=function(e){return C(1e3*e)},C.en=x[v],C.Ls=x,C.p={},C}();var xo,wo,$o,Fo=ae(vo.exports);!function(e){e.transformWithSpaces=(e,t)=>{const r="(.{"+t+"})";return e.replace(/[^\dA-Z]/gi,"").replace(new RegExp(r,"g"),"$1 ").trim()},e.padValue=(e,t)=>{if("0"===e)return t?e:e.padStart(2,"0");if(""===e)return e;return parseInt(e).toString().padStart(2,"0")},e.shouldTruncateToTwoLines=(e,t)=>{const r=Math.floor(t/9);return e.length>=2*r||1===e.split(" ").length&&e.length>r},e.truncateOneLine=(e,t,r,n,o=8)=>{let i=0;t>r&&(i=Math.floor((t-r)/o));const s=n+i;if(s<e.length){const t=Math.floor(s/2);return e.substring(0,t)+" ... "+e.substring(e.length-t,e.length)}return e},e.truncateTwoLines=(e,t,r,n=1.2)=>{const o=Math.floor(2*t/(.6*r))*(2/n);if(e.length<=o)return e;const i=Math.floor(.6*o),s=Math.floor(.2*o);return`${e.substring(0,i)}...${e.substring(e.length-s)}`},e.getTextWidth=(t,r)=>{if("undefined"==typeof document)return 0;const n=(e.getTextWidth.canvas||(e.getTextWidth.canvas=document.createElement("canvas"))).getContext("2d");n.font=r;return n.measureText(t).width},e.maskValue=(e,r)=>{if(!e)return e;const{maskRange:n,unmaskRange:o,maskChar:i="•",maskRegex:s,maskTransformer:a}=r;if(a)return a(e);if(s)return e.replace(s,i);if(n){const{startIndex:r,endIndex:o}=t(n[0],n[1]);return e.substring(0,r)+i.repeat(e.substring(r,o+1).length)+e.substring(o+1)}if(o){const{startIndex:r,endIndex:n}=t(o[0],o[1]);return i.repeat(e.substring(0,r).length)+e.substring(r,n+1)+i.repeat(e.substring(n+1).length)}return e};const t=(e,t)=>e<t?{startIndex:e,endIndex:t}:{startIndex:t,endIndex:e},r=new Intl.PluralRules("en",{type:"ordinal"}),n=new Map([["one","st"],["two","nd"],["few","rd"],["other","th"]]);e.formatOrdinal=e=>{const t=r.select(e);return`${e}${n.get(t)}`}}(xo||(xo={})),function(e){e.AM="AM",e.PM="PM"}(wo||(wo={})),function(e){e.roundToNearestInterval=(e,t,r)=>{const[n,o]=e.split(":"),i=parseInt(n,10),s=parseInt(o,10);if(isNaN(i)||isNaN(s)||s<0||s>=60)throw new Error("Invalid time format");const a=60*i+s,l=a%t,d=0===l?a:r?a+(t-l):a-l,c=d%60;return`${Math.floor(d/60).toString().padStart(2,"0")}:${c.toString().padStart(2,"0")}`},e.generateHourlyIntervals=(e,t,r="ha")=>{const n="HH:mm";let o=Fo(e,n),i=Fo(t,n);o.isSame(i)&&(i=i.add(1,"day"));const s=[];for(;o.isBefore(i);)s.push(o.format(r)),o=o.add(1,"hour");return s},e.getTimeValues=(e,t)=>{const r={hour:"",minute:"",period:wo.AM};if(!t)return r;try{if("24hr"===e){const n=Eo(t,e);r.minute=xo.padValue(n.minute);const o=parseInt(n.hour);0===Math.floor(o/12)?(r.period=wo.AM,r.hour=0===o?"12":xo.padValue(o.toString())):(r.period=wo.PM,r.hour=12===o?o.toString():xo.padValue((o-12).toString()))}else{const{hour:n,minute:o,period:i=""}=Eo(t,e);r.hour=xo.padValue(n),r.minute=xo.padValue(o),r.period="am"===i.toLowerCase()?wo.AM:wo.PM}return r}catch(e){return r}},e.updateMinutes=(e,t)=>{const r=parseInt(e);if(isNaN(r))return"add"===t?xo.padValue("0"):"55";const n=Math.floor(r/5),o=(("add"===t?n+1:r%5==0?n-1:n)%12+12)%12;return xo.padValue((5*o).toString())},e.updateHours=(e,t)=>{const r=parseInt(e);if(isNaN(r))return"add"===t?xo.padValue("1"):"12";const n="add"===t?r+1:r-1;return n<=12&&n>0?xo.padValue(n.toString()):13===n?xo.padValue("1"):"12"},e.convertTo24HourFormat=e=>{const t=parseInt(e.hour);let r;return r=e.period===wo.PM?12===t?t.toString():(t+12).toString():12===t?"00":e.hour,`${r}:${e.minute}`},e.convertHourTo12HourFormat=e=>{const t=parseInt(e),r=t%12==0?12..toString():(t%12).toString();return xo.padValue(r)},e.formatDisplayValue=(e,t)=>{try{const{hour:r,minute:n,period:o=""}=Eo(e,t),i=xo.padValue(r);let s=`${i}:${xo.padValue(n)}`;return"12hr"===t?(s+=o.toLowerCase(),s):s}catch(e){return""}},e.toMinutesSeconds=e=>({minutes:Math.floor(e/60),seconds:e%60}),e.to24Hour=e=>{if((null==e?void 0:e.includes("am"))||(null==e?void 0:e.includes("pm"))){const[t,r]=e.split(/(am|pm)/i),[n,o]=t.split(":").map(Number);let i=n;return"pm"===r&&i<12&&(i+=12),"am"===r&&12===i&&(i=0),ko(i,o)}return e},e.generateTimings=(t,r="12hr",n,o)=>{const i=[];let s=0,a=1440-t;for(n&&(s=e.timeToMinutes(n)),o&&(a=e.timeToMinutes(o));s<=a;){let e=Math.floor(s/60);const n=s%60;if("12hr"===r){const t=e>=12?"pm":"am";e%=12,e=e||12;const r=ko(e,n,t);i.push(r)}else{const t=ko(e,n);i.push(t)}s+=t}return i},e.parseInput=(e,t="12hr")=>{if(""===e||void 0===e)return e;const r=e.trim().toLowerCase(),n=/^(?:(\d{1,2})([:.])?(\d{2})?)?(a|p|am|pm)?$/.exec(r);if(!n)return;let o=parseInt(n[1]||"0",10);const i=parseInt(n[3]||"0",10);let s=n[4];if(void 0===n[1]||o>24||i>59)return;if("a"===s?s="am":"p"===s&&(s="pm"),"24hr"===t)return"pm"===s&&o<12?o+=12:("am"===s&&12===o||24===o)&&(o=0),ko(o,i);s?0===o||24===o?(s="am",o=12):o>12&&(s="pm",o-=12):(s=0===o||24===o||o>6&&o<12?"am":"pm",o=o%12||12);return ko(o,i,s)},e.findClosestFlooredTime=(t,r)=>{if(!t)return t;const n=e.timeToMinutes(t);let o="",i=1/0;for(const t of r){const r=e.timeToMinutes(t)-n;if(r<=0&&Math.abs(r)<i)i=Math.abs(r),o=t;else if(r>0)break}return o},e.timeToMinutes=e=>{const[t,r]=e.toLowerCase().split(/(am|pm)/),[n,o]=t.split(":").map(Number);let i=n;return"pm"===r&&12!==i&&(i+=12),"am"===r&&12===i&&(i=0),60*i+o}}($o||($o={}));const Co=(e,t)=>{const r=parseInt(e);return"24hr"===t?r>=0&&r<=23:r>=1&&r<=12},So=e=>{const t=parseInt(e);return t>=0&&t<=59},Eo=(e,t)=>{const r=e?e.split(":"):[],n=new Error("Invalid format");if("12hr"===t){if(2!==r.length||4!==r[1].length)throw n;const e=r[1].substring(0,2),i=r[1].substring(2);if(!Co(r[0],t)||!So(e)||"am"!==(o=i).toLowerCase()&&"pm"!==o.toLowerCase())throw n;return{hour:r[0],minute:e,period:r[1].substring(2)}}if(2!==r.length)throw n;if(!Co(r[0],t)||!So(r[1]))throw n;return{hour:r[0],minute:r[1]};var o},ko=(e,t,r)=>r?`${e}:${t.toString().padStart(2,"0")}${r}`:`${e.toString().padStart(2,"0")}:${t.toString().padStart(2,"0")}`;var Do=function(e,t){return Do=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])},Do(e,t)};var Io=function(){return Io=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var o in t=arguments[r])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e},Io.apply(this,arguments)};var To="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};var Bo=function(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)},Ao="object"==typeof To&&To&&To.Object===Object&&To,zo="object"==typeof self&&self&&self.Object===Object&&self,Oo=Ao||zo||Function("return this")(),Mo=Oo,_o=function(){return Mo.Date.now()},Ro=/\s/;var Ho=function(e){for(var t=e.length;t--&&Ro.test(e.charAt(t)););return t},jo=/^\s+/;var Lo=function(e){return e?e.slice(0,Ho(e)+1).replace(jo,""):e},Po=Oo.Symbol,Wo=Po,No=Object.prototype,Vo=No.hasOwnProperty,Yo=No.toString,Uo=Wo?Wo.toStringTag:void 0;var qo=function(e){var t=Vo.call(e,Uo),r=e[Uo];try{e[Uo]=void 0;var n=!0}catch(e){}var o=Yo.call(e);return n&&(t?e[Uo]=r:delete e[Uo]),o},Go=Object.prototype.toString;var Zo=qo,Qo=function(e){return Go.call(e)},Xo=Po?Po.toStringTag:void 0;var Ko=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":Xo&&Xo in Object(e)?Zo(e):Qo(e)},Jo=function(e){return null!=e&&"object"==typeof e};var ei=Lo,ti=Bo,ri=function(e){return"symbol"==typeof e||Jo(e)&&"[object Symbol]"==Ko(e)},ni=/^[-+]0x[0-9a-f]+$/i,oi=/^0b[01]+$/i,ii=/^0o[0-7]+$/i,si=parseInt;var ai=Bo,li=_o,di=function(e){if("number"==typeof e)return e;if(ri(e))return NaN;if(ti(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=ti(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=ei(e);var r=oi.test(e);return r||ii.test(e)?si(e.slice(2),r?2:8):ni.test(e)?NaN:+e},ci=Math.max,ui=Math.min;var hi=function(e,t,r){var n,o,i,s,a,l,d=0,c=!1,u=!1,h=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function g(t){var r=n,i=o;return n=o=void 0,d=t,s=e.apply(i,r)}function m(e){var r=e-l;return void 0===l||r>=t||r<0||u&&e-d>=i}function p(){var e=li();if(m(e))return f(e);a=setTimeout(p,function(e){var r=t-(e-l);return u?ui(r,i-(e-d)):r}(e))}function f(e){return a=void 0,h&&n?g(e):(n=o=void 0,s)}function b(){var e=li(),r=m(e);if(n=arguments,o=this,l=e,r){if(void 0===a)return function(e){return d=e,a=setTimeout(p,t),c?g(e):s}(l);if(u)return clearTimeout(a),a=setTimeout(p,t),g(l)}return void 0===a&&(a=setTimeout(p,t)),s}return t=di(t)||0,ai(r)&&(c=!!r.leading,i=(u="maxWait"in r)?ci(di(r.maxWait)||0,t):i,h="trailing"in r?!!r.trailing:h),b.cancel=function(){void 0!==a&&clearTimeout(a),d=0,n=l=o=a=void 0},b.flush=function(){return void 0===a?s:f(li())},b},gi=hi,mi=Bo;var pi=function(e,t,r){var n=!0,o=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return mi(r)&&(n="leading"in r?!!r.leading:n,o="trailing"in r?!!r.trailing:o),gi(e,t,{leading:n,maxWait:t,trailing:o})},fi=function(e,t,r,n){switch(t){case"debounce":return hi(e,r,n);case"throttle":return pi(e,r,n);default:return e}},bi=function(e){return"function"==typeof e},yi=function(){return"undefined"==typeof window},vi=function(e){return e instanceof Element||e instanceof HTMLDocument},xi=function(e,t,r,n){return function(o){var i=o.width,s=o.height;t((function(t){return t.width===i&&t.height===s||t.width===i&&!n||t.height===s&&!r?t:(e&&bi(e)&&e(i,s),{width:i,height:s})}))}};!function(e){function t(t){var r=e.call(this,t)||this;r.cancelHandler=function(){r.resizeHandler&&r.resizeHandler.cancel&&(r.resizeHandler.cancel(),r.resizeHandler=null)},r.attachObserver=function(){var e=r.props,t=e.targetRef,n=e.observerOptions;if(!yi()){t&&t.current&&(r.targetRef.current=t.current);var o=r.getElement();o&&(r.observableElement&&r.observableElement===o||(r.observableElement=o,r.resizeObserver.observe(o,n)))}},r.getElement=function(){var e=r.props,t=e.querySelector,n=e.targetDomEl;if(yi())return null;if(t)return document.querySelector(t);if(n&&vi(n))return n;if(r.targetRef&&vi(r.targetRef.current))return r.targetRef.current;var o=k(r);if(!o)return null;switch(r.getRenderType()){case"renderProp":case"childFunction":case"child":case"childArray":return o;default:return o.parentElement}},r.createResizeHandler=function(e){var t=r.props,n=t.handleWidth,o=void 0===n||n,i=t.handleHeight,s=void 0===i||i,a=t.onResize;if(o||s){var l=xi(a,r.setState.bind(r),o,s);e.forEach((function(e){var t=e&&e.contentRect||{},n=t.width,o=t.height;!r.skipOnMount&&!yi()&&l({width:n,height:o}),r.skipOnMount=!1}))}},r.getRenderType=function(){var e=r.props,t=e.render,n=e.children;return bi(t)?"renderProp":bi(n)?"childFunction":l(n)?"child":Array.isArray(n)?"childArray":"parent"};var n=t.skipOnMount,o=t.refreshMode,i=t.refreshRate,s=void 0===i?1e3:i,a=t.refreshOptions;return r.state={width:void 0,height:void 0},r.skipOnMount=n,r.targetRef=d(),r.observableElement=null,yi()||(r.resizeHandler=fi(r.createResizeHandler,o,s,a),r.resizeObserver=new window.ResizeObserver(r.resizeHandler)),r}(function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");function r(){this.constructor=e}Do(e,t),e.prototype=null===t?Object.create(t):(r.prototype=t.prototype,new r)})(t,e),t.prototype.componentDidMount=function(){this.attachObserver()},t.prototype.componentDidUpdate=function(){this.attachObserver()},t.prototype.componentWillUnmount=function(){yi()||(this.observableElement=null,this.resizeObserver.disconnect(),this.cancelHandler())},t.prototype.render=function(){var e,t=this.props,r=t.render,o=t.children,i=t.nodeType,s=void 0===i?"div":i,a=this.state,l={width:a.width,height:a.height,targetRef:this.targetRef};switch(this.getRenderType()){case"renderProp":return r&&r(l);case"childFunction":return(e=o)(l);case"child":if((e=o).type&&"string"==typeof e.type){var d=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(n=Object.getOwnPropertySymbols(e);o<n.length;o++)t.indexOf(n[o])<0&&Object.prototype.propertyIsEnumerable.call(e,n[o])&&(r[n[o]]=e[n[o]])}return r}(l,["targetRef"]);return c(e,d)}return c(e,l);case"childArray":return(e=o).map((function(e){return!!e&&c(e,l)}));default:return n.createElement(s,null)}}}(u);var wi=yi()?s:h;function $i(e){void 0===e&&(e={});var t=e.skipOnMount,r=void 0!==t&&t,n=e.refreshMode,o=e.refreshRate,s=void 0===o?1e3:o,l=e.refreshOptions,d=e.handleWidth,c=void 0===d||d,u=e.handleHeight,h=void 0===u||u,g=e.targetRef,m=e.observerOptions,p=e.onResize,f=i(r),b=i(null),y=null!=g?g:b,v=i(),x=a({width:void 0,height:void 0}),w=x[0],$=x[1];return wi((function(){if(!yi()){var e=xi(p,$,c,h);v.current=fi((function(t){(c||h)&&t.forEach((function(t){var r=t&&t.contentRect||{},n=r.width,o=r.height;!f.current&&!yi()&&e({width:n,height:o}),f.current=!1}))}),n,s,l);var t=new window.ResizeObserver(v.current);return y.current&&t.observe(y.current,m),function(){t.disconnect();var e=v.current;e&&e.cancel&&e.cancel()}}}),[n,s,l,c,h,p,m,y.current]),Io({ref:y},w)}var Fi=Object.defineProperty,Ci={};((e,t)=>{for(var r in t)Fi(e,r,{get:t[r],enumerable:!0})})(Ci,{assign:()=>ns,colors:()=>es,createStringInterpolator:()=>Qi,skipAnimation:()=>ts,to:()=>Xi,willAdvance:()=>rs});var Si=Pi(),Ei=e=>Ri(e,Si),ki=Pi();Ei.write=e=>Ri(e,ki);var Di=Pi();Ei.onStart=e=>Ri(e,Di);var Ii=Pi();Ei.onFrame=e=>Ri(e,Ii);var Ti=Pi();Ei.onFinish=e=>Ri(e,Ti);var Bi=[];Ei.setTimeout=(e,t)=>{const r=Ei.now()+t,n=()=>{const e=Bi.findIndex((e=>e.cancel==n));~e&&Bi.splice(e,1),Mi-=~e?1:0},o={time:r,handler:e,cancel:n};return Bi.splice(Ai(r),0,o),Mi+=1,Hi(),o};var Ai=e=>~(~Bi.findIndex((t=>t.time>e))||~Bi.length);Ei.cancel=e=>{Di.delete(e),Ii.delete(e),Ti.delete(e),Si.delete(e),ki.delete(e)},Ei.sync=e=>{_i=!0,Ei.batchedUpdates(e),_i=!1},Ei.throttle=e=>{let t;function r(){try{e(...t)}finally{t=null}}function n(...e){t=e,Ei.onStart(r)}return n.handler=e,n.cancel=()=>{Di.delete(r),t=null},n};var zi="undefined"!=typeof window?window.requestAnimationFrame:()=>{};Ei.use=e=>zi=e,Ei.now="undefined"!=typeof performance?()=>performance.now():Date.now,Ei.batchedUpdates=e=>e(),Ei.catch=console.error,Ei.frameLoop="always",Ei.advance=()=>{"demand"!==Ei.frameLoop?console.warn("Cannot call the manual advancement of rafz whilst frameLoop is not set as demand"):Li()};var Oi=-1,Mi=0,_i=!1;function Ri(e,t){_i?(t.delete(e),e(0)):(t.add(e),Hi())}function Hi(){Oi<0&&(Oi=0,"demand"!==Ei.frameLoop&&zi(ji))}function ji(){~Oi&&(zi(ji),Ei.batchedUpdates(Li))}function Li(){const e=Oi;Oi=Ei.now();const t=Ai(Oi);t&&(Wi(Bi.splice(0,t),(e=>e.handler())),Mi-=t),Mi?(Di.flush(),Si.flush(e?Math.min(64,Oi-e):16.667),Ii.flush(),ki.flush(),Ti.flush()):Oi=-1}function Pi(){let e=new Set,t=e;return{add(r){Mi+=t!=e||e.has(r)?0:1,e.add(r)},delete:r=>(Mi-=t==e&&e.has(r)?1:0,e.delete(r)),flush(r){t.size&&(e=new Set,Mi-=t.size,Wi(t,(t=>t(r)&&e.add(t))),Mi+=e.size,t=e)}}}function Wi(e,t){e.forEach((e=>{try{t(e)}catch(e){Ei.catch(e)}}))}function Ni(){}var Vi={arr:Array.isArray,obj:e=>!!e&&"Object"===e.constructor.name,fun:e=>"function"==typeof e,str:e=>"string"==typeof e,num:e=>"number"==typeof e,und:e=>void 0===e};function Yi(e,t){if(Vi.arr(e)){if(!Vi.arr(t)||e.length!==t.length)return!1;for(let r=0;r<e.length;r++)if(e[r]!==t[r])return!1;return!0}return e===t}var Ui=(e,t)=>e.forEach(t);function qi(e,t,r){if(Vi.arr(e))for(let n=0;n<e.length;n++)t.call(r,e[n],`${n}`);else for(const n in e)e.hasOwnProperty(n)&&t.call(r,e[n],n)}var Gi=e=>Vi.und(e)?[]:Vi.arr(e)?e:[e];function Zi(e,t){if(e.size){const r=Array.from(e);e.clear(),Ui(r,t)}}var Qi,Xi,Ki=(e,...t)=>Zi(e,(e=>e(...t))),Ji=()=>"undefined"==typeof window||!window.navigator||/ServerSideRendering|^Deno\//.test(window.navigator.userAgent),es=null,ts=!1,rs=Ni,ns=e=>{e.to&&(Xi=e.to),e.now&&(Ei.now=e.now),void 0!==e.colors&&(es=e.colors),null!=e.skipAnimation&&(ts=e.skipAnimation),e.createStringInterpolator&&(Qi=e.createStringInterpolator),e.requestAnimationFrame&&Ei.use(e.requestAnimationFrame),e.batchedUpdates&&(Ei.batchedUpdates=e.batchedUpdates),e.willAdvance&&(rs=e.willAdvance),e.frameLoop&&(Ei.frameLoop=e.frameLoop)},os=new Set,is=[],ss=[],as=0,ls={get idle(){return!os.size&&!is.length},start(e){as>e.priority?(os.add(e),Ei.onStart(ds)):(cs(e),Ei(hs))},advance:hs,sort(e){if(as)Ei.onFrame((()=>ls.sort(e)));else{const t=is.indexOf(e);~t&&(is.splice(t,1),us(e))}},clear(){is=[],os.clear()}};function ds(){os.forEach(cs),os.clear(),Ei(hs)}function cs(e){is.includes(e)||us(e)}function us(e){is.splice(function(e,t){const r=e.findIndex(t);return r<0?e.length:r}(is,(t=>t.priority>e.priority)),0,e)}function hs(e){const t=ss;for(let r=0;r<is.length;r++){const n=is[r];as=n.priority,n.idle||(rs(n),n.advance(e),n.idle||t.push(n))}return as=0,(ss=is).length=0,(is=t).length>0}var gs="[-+]?\\d*\\.?\\d+",ms=gs+"%";function ps(...e){return"\\(\\s*("+e.join(")\\s*,\\s*(")+")\\s*\\)"}var fs=new RegExp("rgb"+ps(gs,gs,gs)),bs=new RegExp("rgba"+ps(gs,gs,gs,gs)),ys=new RegExp("hsl"+ps(gs,ms,ms)),vs=new RegExp("hsla"+ps(gs,ms,ms,gs)),xs=/^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,ws=/^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,$s=/^#([0-9a-fA-F]{6})$/,Fs=/^#([0-9a-fA-F]{8})$/;function Cs(e,t,r){return r<0&&(r+=1),r>1&&(r-=1),r<1/6?e+6*(t-e)*r:r<.5?t:r<2/3?e+(t-e)*(2/3-r)*6:e}function Ss(e,t,r){const n=r<.5?r*(1+t):r+t-r*t,o=2*r-n,i=Cs(o,n,e+1/3),s=Cs(o,n,e),a=Cs(o,n,e-1/3);return Math.round(255*i)<<24|Math.round(255*s)<<16|Math.round(255*a)<<8}function Es(e){const t=parseInt(e,10);return t<0?0:t>255?255:t}function ks(e){return(parseFloat(e)%360+360)%360/360}function Ds(e){const t=parseFloat(e);return t<0?0:t>1?255:Math.round(255*t)}function Is(e){const t=parseFloat(e);return t<0?0:t>100?1:t/100}function Ts(e){let t=function(e){let t;return"number"==typeof e?e>>>0===e&&e>=0&&e<=4294967295?e:null:(t=$s.exec(e))?parseInt(t[1]+"ff",16)>>>0:es&&void 0!==es[e]?es[e]:(t=fs.exec(e))?(Es(t[1])<<24|Es(t[2])<<16|Es(t[3])<<8|255)>>>0:(t=bs.exec(e))?(Es(t[1])<<24|Es(t[2])<<16|Es(t[3])<<8|Ds(t[4]))>>>0:(t=xs.exec(e))?parseInt(t[1]+t[1]+t[2]+t[2]+t[3]+t[3]+"ff",16)>>>0:(t=Fs.exec(e))?parseInt(t[1],16)>>>0:(t=ws.exec(e))?parseInt(t[1]+t[1]+t[2]+t[2]+t[3]+t[3]+t[4]+t[4],16)>>>0:(t=ys.exec(e))?(255|Ss(ks(t[1]),Is(t[2]),Is(t[3])))>>>0:(t=vs.exec(e))?(Ss(ks(t[1]),Is(t[2]),Is(t[3]))|Ds(t[4]))>>>0:null}(e);if(null===t)return e;t=t||0;return`rgba(${(4278190080&t)>>>24}, ${(16711680&t)>>>16}, ${(65280&t)>>>8}, ${(255&t)/255})`}var Bs=(e,t,r)=>{if(Vi.fun(e))return e;if(Vi.arr(e))return Bs({range:e,output:t,extrapolate:r});if(Vi.str(e.output[0]))return Qi(e);const n=e,o=n.output,i=n.range||[0,1],s=n.extrapolateLeft||n.extrapolate||"extend",a=n.extrapolateRight||n.extrapolate||"extend",l=n.easing||(e=>e);return e=>{const t=function(e,t){for(var r=1;r<t.length-1&&!(t[r]>=e);++r);return r-1}(e,i);return function(e,t,r,n,o,i,s,a,l){let d=l?l(e):e;if(d<t){if("identity"===s)return d;"clamp"===s&&(d=t)}if(d>r){if("identity"===a)return d;"clamp"===a&&(d=r)}if(n===o)return n;if(t===r)return e<=t?n:o;t===-1/0?d=-d:r===1/0?d-=t:d=(d-t)/(r-t);d=i(d),n===-1/0?d=-d:o===1/0?d+=n:d=d*(o-n)+n;return d}(e,i[t],i[t+1],o[t],o[t+1],l,s,a,n.map)}};var As=1.70158,zs=1.525*As,Os=As+1,Ms=2*Math.PI/3,_s=2*Math.PI/4.5,Rs=e=>{const t=7.5625,r=2.75;return e<1/r?t*e*e:e<2/r?t*(e-=1.5/r)*e+.75:e<2.5/r?t*(e-=2.25/r)*e+.9375:t*(e-=2.625/r)*e+.984375},Hs={linear:e=>e,easeInQuad:e=>e*e,easeOutQuad:e=>1-(1-e)*(1-e),easeInOutQuad:e=>e<.5?2*e*e:1-Math.pow(-2*e+2,2)/2,easeInCubic:e=>e*e*e,easeOutCubic:e=>1-Math.pow(1-e,3),easeInOutCubic:e=>e<.5?4*e*e*e:1-Math.pow(-2*e+2,3)/2,easeInQuart:e=>e*e*e*e,easeOutQuart:e=>1-Math.pow(1-e,4),easeInOutQuart:e=>e<.5?8*e*e*e*e:1-Math.pow(-2*e+2,4)/2,easeInQuint:e=>e*e*e*e*e,easeOutQuint:e=>1-Math.pow(1-e,5),easeInOutQuint:e=>e<.5?16*e*e*e*e*e:1-Math.pow(-2*e+2,5)/2,easeInSine:e=>1-Math.cos(e*Math.PI/2),easeOutSine:e=>Math.sin(e*Math.PI/2),easeInOutSine:e=>-(Math.cos(Math.PI*e)-1)/2,easeInExpo:e=>0===e?0:Math.pow(2,10*e-10),easeOutExpo:e=>1===e?1:1-Math.pow(2,-10*e),easeInOutExpo:e=>0===e?0:1===e?1:e<.5?Math.pow(2,20*e-10)/2:(2-Math.pow(2,-20*e+10))/2,easeInCirc:e=>1-Math.sqrt(1-Math.pow(e,2)),easeOutCirc:e=>Math.sqrt(1-Math.pow(e-1,2)),easeInOutCirc:e=>e<.5?(1-Math.sqrt(1-Math.pow(2*e,2)))/2:(Math.sqrt(1-Math.pow(-2*e+2,2))+1)/2,easeInBack:e=>Os*e*e*e-As*e*e,easeOutBack:e=>1+Os*Math.pow(e-1,3)+As*Math.pow(e-1,2),easeInOutBack:e=>e<.5?Math.pow(2*e,2)*(7.189819*e-zs)/2:(Math.pow(2*e-2,2)*((zs+1)*(2*e-2)+zs)+2)/2,easeInElastic:e=>0===e?0:1===e?1:-Math.pow(2,10*e-10)*Math.sin((10*e-10.75)*Ms),easeOutElastic:e=>0===e?0:1===e?1:Math.pow(2,-10*e)*Math.sin((10*e-.75)*Ms)+1,easeInOutElastic:e=>0===e?0:1===e?1:e<.5?-Math.pow(2,20*e-10)*Math.sin((20*e-11.125)*_s)/2:Math.pow(2,-20*e+10)*Math.sin((20*e-11.125)*_s)/2+1,easeInBounce:e=>1-Rs(1-e),easeOutBounce:Rs,easeInOutBounce:e=>e<.5?(1-Rs(1-2*e))/2:(1+Rs(2*e-1))/2,steps:(e,t="end")=>r=>{const n=(r="end"===t?Math.min(r,.999):Math.max(r,.001))*e,o="end"===t?Math.floor(n):Math.ceil(n);return i=0,s=1,a=o/e,Math.min(Math.max(a,i),s);var i,s,a}},js=Symbol.for("FluidValue.get"),Ls=Symbol.for("FluidValue.observers"),Ps=e=>Boolean(e&&e[js]),Ws=e=>e&&e[js]?e[js]():e,Ns=e=>e[Ls]||null;function Vs(e,t){const r=e[Ls];r&&r.forEach((e=>{!function(e,t){e.eventObserved?e.eventObserved(t):e(t)}(e,t)}))}var Ys=class{constructor(e){if(!e&&!(e=this.get))throw Error("Unknown getter");Us(this,e)}},Us=(e,t)=>Qs(e,js,t);function qs(e,t){if(e[js]){let r=e[Ls];r||Qs(e,Ls,r=new Set),r.has(t)||(r.add(t),e.observerAdded&&e.observerAdded(r.size,t))}return t}function Gs(e,t){const r=e[Ls];if(r&&r.has(t)){const n=r.size-1;n?r.delete(t):e[Ls]=null,e.observerRemoved&&e.observerRemoved(n,t)}}var Zs,Qs=(e,t,r)=>Object.defineProperty(e,t,{value:r,writable:!0,configurable:!0}),Xs=/[+\-]?(?:0|[1-9]\d*)(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,Ks=/(#(?:[0-9a-f]{2}){2,4}|(#[0-9a-f]{3})|(rgb|hsl)a?\((-?\d+%?[,\s]+){2,3}\s*[\d\.]+%?\))/gi,Js=new RegExp(`(${Xs.source})(%|[a-z]+)`,"i"),ea=/rgba\(([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+)\)/gi,ta=/var\((--[a-zA-Z0-9-_]+),? ?([a-zA-Z0-9 ()%#.,-]+)?\)/,ra=e=>{const[t,r]=na(e);if(!t||Ji())return e;const n=window.getComputedStyle(document.documentElement).getPropertyValue(t);if(n)return n.trim();if(r&&r.startsWith("--")){const t=window.getComputedStyle(document.documentElement).getPropertyValue(r);return t||e}return r&&ta.test(r)?ra(r):r||e},na=e=>{const t=ta.exec(e);if(!t)return[,];const[,r,n]=t;return[r,n]},oa=(e,t,r,n,o)=>`rgba(${Math.round(t)}, ${Math.round(r)}, ${Math.round(n)}, ${o})`,ia=e=>{Zs||(Zs=es?new RegExp(`(${Object.keys(es).join("|")})(?!\\w)`,"g"):/^\b$/);const t=e.output.map((e=>Ws(e).replace(ta,ra).replace(Ks,Ts).replace(Zs,Ts))),r=t.map((e=>e.match(Xs).map(Number))),n=r[0].map(((e,t)=>r.map((e=>{if(!(t in e))throw Error('The arity of each "output" value must be equal');return e[t]})))).map((t=>Bs({...e,output:t})));return e=>{const r=!Js.test(t[0])&&t.find((e=>Js.test(e)))?.replace(Xs,"");let o=0;return t[0].replace(Xs,(()=>`${n[o++](e)}${r||""}`)).replace(ea,oa)}},sa="react-spring: ",aa=e=>{const t=e;let r=!1;if("function"!=typeof t)throw new TypeError(`${sa}once requires a function parameter`);return(...e)=>{r||(t(...e),r=!0)}},la=aa(console.warn);var da=aa(console.warn);function ca(e){return Vi.str(e)&&("#"==e[0]||/\d/.test(e)||!Ji()&&ta.test(e)||e in(es||{}))}var ua=Ji()?s:h;function ha(){const e=a()[1],t=(()=>{const e=i(!1);return ua((()=>(e.current=!0,()=>{e.current=!1})),[]),e})();return()=>{t.current&&e(Math.random())}}var ga=e=>s(e,ma),ma=[];function pa(e){const t=i();return s((()=>{t.current=e})),t.current}var fa=Symbol.for("Animated:node"),ba=e=>e&&e[fa],ya=(e,t)=>((e,t,r)=>Object.defineProperty(e,t,{value:r,writable:!0,configurable:!0}))(e,fa,t),va=e=>e&&e[fa]&&e[fa].getPayload(),xa=class{constructor(){ya(this,this)}getPayload(){return this.payload||[]}},wa=class extends xa{constructor(e){super(),this._value=e,this.done=!0,this.durationProgress=0,Vi.num(this._value)&&(this.lastPosition=this._value)}static create(e){return new wa(e)}getPayload(){return[this]}getValue(){return this._value}setValue(e,t){return Vi.num(e)&&(this.lastPosition=e,t&&(e=Math.round(e/t)*t,this.done&&(this.lastPosition=e))),this._value!==e&&(this._value=e,!0)}reset(){const{done:e}=this;this.done=!1,Vi.num(this._value)&&(this.elapsedTime=0,this.durationProgress=0,this.lastPosition=this._value,e&&(this.lastVelocity=null),this.v0=null)}},$a=class extends wa{constructor(e){super(0),this._string=null,this._toString=Bs({output:[e,e]})}static create(e){return new $a(e)}getValue(){const e=this._string;return null==e?this._string=this._toString(this._value):e}setValue(e){if(Vi.str(e)){if(e==this._string)return!1;this._string=e,this._value=1}else{if(!super.setValue(e))return!1;this._string=null}return!0}reset(e){e&&(this._toString=Bs({output:[this.getValue(),e]})),this._value=0,super.reset()}},Fa={dependencies:null},Ca=class extends xa{constructor(e){super(),this.source=e,this.setValue(e)}getValue(e){const t={};return qi(this.source,((r,n)=>{var o;(o=r)&&o[fa]===o?t[n]=r.getValue(e):Ps(r)?t[n]=Ws(r):e||(t[n]=r)})),t}setValue(e){this.source=e,this.payload=this._makePayload(e)}reset(){this.payload&&Ui(this.payload,(e=>e.reset()))}_makePayload(e){if(e){const t=new Set;return qi(e,this._addToPayload,t),Array.from(t)}}_addToPayload(e){Fa.dependencies&&Ps(e)&&Fa.dependencies.add(e);const t=va(e);t&&Ui(t,(e=>this.add(e)))}},Sa=class extends Ca{constructor(e){super(e)}static create(e){return new Sa(e)}getValue(){return this.source.map((e=>e.getValue()))}setValue(e){const t=this.getPayload();return e.length==t.length?t.map(((t,r)=>t.setValue(e[r]))).some(Boolean):(super.setValue(e.map(Ea)),!0)}};function Ea(e){return(ca(e)?$a:wa).create(e)}function ka(e){const t=ba(e);return t?t.constructor:Vi.arr(e)?Sa:ca(e)?$a:wa}var Da=(e,t)=>{const r=!Vi.fun(e)||e.prototype&&e.prototype.isReactComponent;return g(((o,a)=>{const l=i(null),d=r&&m((e=>{l.current=function(e,t){e&&(Vi.fun(e)?e(t):e.current=t);return t}(a,e)}),[a]),[c,u]=function(e,t){const r=new Set;Fa.dependencies=r,e.style&&(e={...e,style:t.createAnimatedStyle(e.style)});return e=new Ca(e),Fa.dependencies=null,[e,r]}(o,t),h=ha(),g=()=>{const e=l.current;if(r&&!e)return;!1===(!!e&&t.applyAnimatedValues(e,c.getValue(!0)))&&h()},p=new Ia(g,u),f=i();ua((()=>(f.current=p,Ui(u,(e=>qs(e,p))),()=>{f.current&&(Ui(f.current.deps,(e=>Gs(e,f.current))),Ei.cancel(f.current.update))}))),s(g,[]),ga((()=>()=>{const e=f.current;Ui(e.deps,(t=>Gs(t,e)))}));const b=t.getComponentProps(c.getValue());return n.createElement(e,{...b,ref:d})}))},Ia=class{constructor(e,t){this.update=e,this.deps=t}eventObserved(e){"change"==e.type&&Ei.write(this.update)}};var Ta=Symbol.for("AnimatedComponent"),Ba=e=>Vi.str(e)?e:e&&Vi.str(e.displayName)?e.displayName:Vi.fun(e)&&e.name||null;function Aa(e,...t){return Vi.fun(e)?e(...t):e}var za=(e,t)=>!0===e||!!(t&&e&&(Vi.fun(e)?e(t):Gi(e).includes(t))),Oa=(e,t)=>Vi.obj(e)?t&&e[t]:e,Ma=(e,t)=>!0===e.default?e[t]:e.default?e.default[t]:void 0,_a=e=>e,Ra=(e,t=_a)=>{let r=Ha;e.default&&!0!==e.default&&(e=e.default,r=Object.keys(e));const n={};for(const o of r){const r=t(e[o],o);Vi.und(r)||(n[o]=r)}return n},Ha=["config","onProps","onStart","onChange","onPause","onResume","onRest"],ja={config:1,from:1,to:1,ref:1,loop:1,reset:1,pause:1,cancel:1,reverse:1,immediate:1,default:1,delay:1,onProps:1,onStart:1,onChange:1,onPause:1,onResume:1,onRest:1,onResolve:1,items:1,trail:1,sort:1,expires:1,initial:1,enter:1,update:1,leave:1,children:1,onDestroyed:1,keys:1,callId:1,parentId:1};function La(e){const t=function(e){const t={};let r=0;if(qi(e,((e,n)=>{ja[n]||(t[n]=e,r++)})),r)return t}(e);if(t){const r={to:t};return qi(e,((e,n)=>n in t||(r[n]=e))),r}return{...e}}function Pa(e){return e=Ws(e),Vi.arr(e)?e.map(Pa):ca(e)?Ci.createStringInterpolator({range:[0,1],output:[e,e]})(1):e}function Wa(e){return Vi.fun(e)||Vi.arr(e)&&Vi.obj(e[0])}var Na={tension:170,friction:26,mass:1,damping:1,easing:Hs.linear,clamp:!1},Va=class{constructor(){this.velocity=0,Object.assign(this,Na)}};function Ya(e,t){if(Vi.und(t.decay)){const r=!Vi.und(t.tension)||!Vi.und(t.friction);!r&&Vi.und(t.frequency)&&Vi.und(t.damping)&&Vi.und(t.mass)||(e.duration=void 0,e.decay=void 0),r&&(e.frequency=void 0)}else e.duration=void 0}var Ua=[],qa=class{constructor(){this.changed=!1,this.values=Ua,this.toValues=null,this.fromValues=Ua,this.config=new Va,this.immediate=!1}};function Ga(e,{key:t,props:r,defaultProps:n,state:o,actions:i}){return new Promise(((s,a)=>{let l,d,c=za(r.cancel??n?.cancel,t);if(c)g();else{Vi.und(r.pause)||(o.paused=za(r.pause,t));let e=n?.pause;!0!==e&&(e=o.paused||za(e,t)),l=Aa(r.delay||0,t),e?(o.resumeQueue.add(h),i.pause()):(i.resume(),h())}function u(){o.resumeQueue.add(h),o.timeouts.delete(d),d.cancel(),l=d.time-Ei.now()}function h(){l>0&&!Ci.skipAnimation?(o.delayed=!0,d=Ei.setTimeout(g,l),o.pauseQueue.add(u),o.timeouts.add(d)):g()}function g(){o.delayed&&(o.delayed=!1),o.pauseQueue.delete(u),o.timeouts.delete(d),e<=(o.cancelId||0)&&(c=!0);try{i.start({...r,callId:e,cancel:c},s)}catch(e){a(e)}}}))}var Za=(e,t)=>1==t.length?t[0]:t.some((e=>e.cancelled))?Ka(e.get()):t.every((e=>e.noop))?Qa(e.get()):Xa(e.get(),t.every((e=>e.finished))),Qa=e=>({value:e,noop:!0,finished:!0,cancelled:!1}),Xa=(e,t,r=!1)=>({value:e,finished:t,cancelled:r}),Ka=e=>({value:e,cancelled:!0,finished:!1});function Ja(e,t,r,n){const{callId:o,parentId:i,onRest:s}=t,{asyncTo:a,promise:l}=r;return i||e!==a||t.reset?r.promise=(async()=>{r.asyncId=o,r.asyncTo=e;const d=Ra(t,((e,t)=>"onRest"===t?void 0:e));let c,u;const h=new Promise(((e,t)=>(c=e,u=t))),g=e=>{const t=o<=(r.cancelId||0)&&Ka(n)||o!==r.asyncId&&Xa(n,!1);if(t)throw e.result=t,u(e),e},m=(e,t)=>{const i=new tl,s=new rl;return(async()=>{if(Ci.skipAnimation)throw el(r),s.result=Xa(n,!1),u(s),s;g(i);const a=Vi.obj(e)?{...e}:{...t,to:e};a.parentId=o,qi(d,((e,t)=>{Vi.und(a[t])&&(a[t]=e)}));const l=await n.start(a);return g(i),r.paused&&await new Promise((e=>{r.resumeQueue.add(e)})),l})()};let p;if(Ci.skipAnimation)return el(r),Xa(n,!1);try{let t;t=Vi.arr(e)?(async e=>{for(const t of e)await m(t)})(e):Promise.resolve(e(m,n.stop.bind(n))),await Promise.all([t.then(c),h]),p=Xa(n.get(),!0,!1)}catch(e){if(e instanceof tl)p=e.result;else{if(!(e instanceof rl))throw e;p=e.result}}finally{o==r.asyncId&&(r.asyncId=i,r.asyncTo=i?a:void 0,r.promise=i?l:void 0)}return Vi.fun(s)&&Ei.batchedUpdates((()=>{s(p,n,n.item)})),p})():l}function el(e,t){Zi(e.timeouts,(e=>e.cancel())),e.pauseQueue.clear(),e.resumeQueue.clear(),e.asyncId=e.asyncTo=e.promise=void 0,t&&(e.cancelId=t)}var tl=class extends Error{constructor(){super("An async animation has been interrupted. You see this error because you forgot to use `await` or `.catch(...)` on its returned promise.")}},rl=class extends Error{constructor(){super("SkipAnimationSignal")}},nl=e=>e instanceof il,ol=1,il=class extends Ys{constructor(){super(...arguments),this.id=ol++,this._priority=0}get priority(){return this._priority}set priority(e){this._priority!=e&&(this._priority=e,this._onPriorityChange(e))}get(){const e=ba(this);return e&&e.getValue()}to(...e){return Ci.to(this,e)}interpolate(...e){return la(`${sa}The "interpolate" function is deprecated in v9 (use "to" instead)`),Ci.to(this,e)}toJSON(){return this.get()}observerAdded(e){1==e&&this._attach()}observerRemoved(e){0==e&&this._detach()}_attach(){}_detach(){}_onChange(e,t=!1){Vs(this,{type:"change",parent:this,value:e,idle:t})}_onPriorityChange(e){this.idle||ls.sort(this),Vs(this,{type:"priority",parent:this,priority:e})}},sl=Symbol.for("SpringPhase"),al=e=>(1&e[sl])>0,ll=e=>(2&e[sl])>0,dl=e=>(4&e[sl])>0,cl=(e,t)=>t?e[sl]|=3:e[sl]&=-3,ul=(e,t)=>t?e[sl]|=4:e[sl]&=-5,hl=class extends il{constructor(e,t){if(super(),this.animation=new qa,this.defaultProps={},this._state={paused:!1,delayed:!1,pauseQueue:new Set,resumeQueue:new Set,timeouts:new Set},this._pendingCalls=new Set,this._lastCallId=0,this._lastToId=0,this._memoizedDuration=0,!Vi.und(e)||!Vi.und(t)){const r=Vi.obj(e)?{...e}:{...t,from:e};Vi.und(r.default)&&(r.default=!0),this.start(r)}}get idle(){return!(ll(this)||this._state.asyncTo)||dl(this)}get goal(){return Ws(this.animation.to)}get velocity(){const e=ba(this);return e instanceof wa?e.lastVelocity||0:e.getPayload().map((e=>e.lastVelocity||0))}get hasAnimated(){return al(this)}get isAnimating(){return ll(this)}get isPaused(){return dl(this)}get isDelayed(){return this._state.delayed}advance(e){let t=!0,r=!1;const n=this.animation;let{toValues:o}=n;const{config:i}=n,s=va(n.to);!s&&Ps(n.to)&&(o=Gi(Ws(n.to))),n.values.forEach(((a,l)=>{if(a.done)return;const d=a.constructor==$a?1:s?s[l].lastPosition:o[l];let c=n.immediate,u=d;if(!c){if(u=a.lastPosition,i.tension<=0)return void(a.done=!0);let t=a.elapsedTime+=e;const r=n.fromValues[l],o=null!=a.v0?a.v0:a.v0=Vi.arr(i.velocity)?i.velocity[l]:i.velocity;let s;const h=i.precision||(r==d?.005:Math.min(1,.001*Math.abs(d-r)));if(Vi.und(i.duration))if(i.decay){const e=!0===i.decay?.998:i.decay,n=Math.exp(-(1-e)*t);u=r+o/(1-e)*(1-n),c=Math.abs(a.lastPosition-u)<=h,s=o*n}else{s=null==a.lastVelocity?o:a.lastVelocity;const t=i.restVelocity||h/10,n=i.clamp?0:i.bounce,l=!Vi.und(n),g=r==d?a.v0>0:r<d;let m,p=!1;const f=1,b=Math.ceil(e/f);for(let e=0;e<b&&(m=Math.abs(s)>t,m||(c=Math.abs(d-u)<=h,!c));++e){l&&(p=u==d||u>d==g,p&&(s=-s*n,u=d));s+=(1e-6*-i.tension*(u-d)+.001*-i.friction*s)/i.mass*f,u+=s*f}}else{let n=1;i.duration>0&&(this._memoizedDuration!==i.duration&&(this._memoizedDuration=i.duration,a.durationProgress>0&&(a.elapsedTime=i.duration*a.durationProgress,t=a.elapsedTime+=e)),n=(i.progress||0)+t/this._memoizedDuration,n=n>1?1:n<0?0:n,a.durationProgress=n),u=r+i.easing(n)*(d-r),s=(u-a.lastPosition)/e,c=1==n}a.lastVelocity=s,Number.isNaN(u)&&(console.warn("Got NaN while animating:",this),c=!0)}s&&!s[l].done&&(c=!1),c?a.done=!0:t=!1,a.setValue(u,i.round)&&(r=!0)}));const a=ba(this),l=a.getValue();if(t){const e=Ws(n.to);l===e&&!r||i.decay?r&&i.decay&&this._onChange(l):(a.setValue(e),this._onChange(e)),this._stop()}else r&&this._onChange(l)}set(e){return Ei.batchedUpdates((()=>{this._stop(),this._focus(e),this._set(e)})),this}pause(){this._update({pause:!0})}resume(){this._update({pause:!1})}finish(){if(ll(this)){const{to:e,config:t}=this.animation;Ei.batchedUpdates((()=>{this._onStart(),t.decay||this._set(e,!1),this._stop()}))}return this}update(e){return(this.queue||(this.queue=[])).push(e),this}start(e,t){let r;return Vi.und(e)?(r=this.queue||[],this.queue=[]):r=[Vi.obj(e)?e:{...t,to:e}],Promise.all(r.map((e=>this._update(e)))).then((e=>Za(this,e)))}stop(e){const{to:t}=this.animation;return this._focus(this.get()),el(this._state,e&&this._lastCallId),Ei.batchedUpdates((()=>this._stop(t,e))),this}reset(){this._update({reset:!0})}eventObserved(e){"change"==e.type?this._start():"priority"==e.type&&(this.priority=e.priority+1)}_prepareNode(e){const t=this.key||"";let{to:r,from:n}=e;r=Vi.obj(r)?r[t]:r,(null==r||Wa(r))&&(r=void 0),n=Vi.obj(n)?n[t]:n,null==n&&(n=void 0);const o={to:r,from:n};return al(this)||(e.reverse&&([r,n]=[n,r]),n=Ws(n),Vi.und(n)?ba(this)||this._set(r):this._set(n)),o}_update({...e},t){const{key:r,defaultProps:n}=this;e.default&&Object.assign(n,Ra(e,((e,t)=>/^on/.test(t)?Oa(e,r):e))),vl(this,e,"onProps"),xl(this,"onProps",e,this);const o=this._prepareNode(e);if(Object.isFrozen(this))throw Error("Cannot animate a `SpringValue` object that is frozen. Did you forget to pass your component to `animated(...)` before animating its props?");const i=this._state;return Ga(++this._lastCallId,{key:r,props:e,defaultProps:n,state:i,actions:{pause:()=>{dl(this)||(ul(this,!0),Ki(i.pauseQueue),xl(this,"onPause",Xa(this,gl(this,this.animation.to)),this))},resume:()=>{dl(this)&&(ul(this,!1),ll(this)&&this._resume(),Ki(i.resumeQueue),xl(this,"onResume",Xa(this,gl(this,this.animation.to)),this))},start:this._merge.bind(this,o)}}).then((r=>{if(e.loop&&r.finished&&(!t||!r.noop)){const t=ml(e);if(t)return this._update(t,!0)}return r}))}_merge(e,t,r){if(t.cancel)return this.stop(!0),r(Ka(this));const n=!Vi.und(e.to),o=!Vi.und(e.from);if(n||o){if(!(t.callId>this._lastToId))return r(Ka(this));this._lastToId=t.callId}const{key:i,defaultProps:s,animation:a}=this,{to:l,from:d}=a;let{to:c=l,from:u=d}=e;!o||n||t.default&&!Vi.und(c)||(c=u),t.reverse&&([c,u]=[u,c]);const h=!Yi(u,d);h&&(a.from=u),u=Ws(u);const g=!Yi(c,l);g&&this._focus(c);const m=Wa(t.to),{config:p}=a,{decay:f,velocity:b}=p;(n||o)&&(p.velocity=0),t.config&&!m&&function(e,t,r){r&&(Ya(r={...r},t),t={...r,...t}),Ya(e,t),Object.assign(e,t);for(const t in Na)null==e[t]&&(e[t]=Na[t]);let{frequency:n,damping:o}=e;const{mass:i}=e;Vi.und(n)||(n<.01&&(n=.01),o<0&&(o=0),e.tension=Math.pow(2*Math.PI/n,2)*i,e.friction=4*Math.PI*o*i/n)}(p,Aa(t.config,i),t.config!==s.config?Aa(s.config,i):void 0);let y=ba(this);if(!y||Vi.und(c))return r(Xa(this,!0));const v=Vi.und(t.reset)?o&&!t.default:!Vi.und(u)&&za(t.reset,i),x=v?u:this.get(),w=Pa(c),$=Vi.num(w)||Vi.arr(w)||ca(w),F=!m&&(!$||za(s.immediate||t.immediate,i));if(g){const e=ka(c);if(e!==y.constructor){if(!F)throw Error(`Cannot animate between ${y.constructor.name} and ${e.name}, as the "to" prop suggests`);y=this._set(w)}}const C=y.constructor;let S=Ps(c),E=!1;if(!S){const e=v||!al(this)&&h;(g||e)&&(E=Yi(Pa(x),w),S=!E),(Yi(a.immediate,F)||F)&&Yi(p.decay,f)&&Yi(p.velocity,b)||(S=!0)}if(E&&ll(this)&&(a.changed&&!v?S=!0:S||this._stop(l)),!m&&((S||Ps(l))&&(a.values=y.getPayload(),a.toValues=Ps(c)?null:C==$a?[1]:Gi(w)),a.immediate!=F&&(a.immediate=F,F||v||this._set(l)),S)){const{onRest:e}=a;Ui(yl,(e=>vl(this,t,e)));const n=Xa(this,gl(this,l));Ki(this._pendingCalls,n),this._pendingCalls.add(r),a.changed&&Ei.batchedUpdates((()=>{a.changed=!v,e?.(n,this),v?Aa(s.onRest,n):a.onStart?.(n,this)}))}v&&this._set(x),m?r(Ja(t.to,t,this._state,this)):S?this._start():ll(this)&&!g?this._pendingCalls.add(r):r(Qa(x))}_focus(e){const t=this.animation;e!==t.to&&(Ns(this)&&this._detach(),t.to=e,Ns(this)&&this._attach())}_attach(){let e=0;const{to:t}=this.animation;Ps(t)&&(qs(t,this),nl(t)&&(e=t.priority+1)),this.priority=e}_detach(){const{to:e}=this.animation;Ps(e)&&Gs(e,this)}_set(e,t=!0){const r=Ws(e);if(!Vi.und(r)){const e=ba(this);if(!e||!Yi(r,e.getValue())){const n=ka(r);e&&e.constructor==n?e.setValue(r):ya(this,n.create(r)),e&&Ei.batchedUpdates((()=>{this._onChange(r,t)}))}}return ba(this)}_onStart(){const e=this.animation;e.changed||(e.changed=!0,xl(this,"onStart",Xa(this,gl(this,e.to)),this))}_onChange(e,t){t||(this._onStart(),Aa(this.animation.onChange,e,this)),Aa(this.defaultProps.onChange,e,this),super._onChange(e,t)}_start(){const e=this.animation;ba(this).reset(Ws(e.to)),e.immediate||(e.fromValues=e.values.map((e=>e.lastPosition))),ll(this)||(cl(this,!0),dl(this)||this._resume())}_resume(){Ci.skipAnimation?this.finish():ls.start(this)}_stop(e,t){if(ll(this)){cl(this,!1);const r=this.animation;Ui(r.values,(e=>{e.done=!0})),r.toValues&&(r.onChange=r.onPause=r.onResume=void 0),Vs(this,{type:"idle",parent:this});const n=t?Ka(this.get()):Xa(this.get(),gl(this,e??r.to));Ki(this._pendingCalls,n),r.changed&&(r.changed=!1,xl(this,"onRest",n,this))}}};function gl(e,t){const r=Pa(t);return Yi(Pa(e.get()),r)}function ml(e,t=e.loop,r=e.to){const n=Aa(t);if(n){const o=!0!==n&&La(n),i=(o||e).reverse,s=!o||o.reset;return pl({...e,loop:t,default:!1,pause:void 0,to:!i||Wa(r)?r:void 0,from:s?e.from:void 0,reset:s,...o})}}function pl(e){const{to:t,from:r}=e=La(e),n=new Set;return Vi.obj(t)&&bl(t,n),Vi.obj(r)&&bl(r,n),e.keys=n.size?Array.from(n):null,e}function fl(e){const t=pl(e);return Vi.und(t.default)&&(t.default=Ra(t)),t}function bl(e,t){qi(e,((e,r)=>null!=e&&t.add(r)))}var yl=["onStart","onRest","onChange","onPause","onResume"];function vl(e,t,r){e.animation[r]=t[r]!==Ma(t,r)?Oa(t[r],e.key):void 0}function xl(e,t,...r){e.animation[t]?.(...r),e.defaultProps[t]?.(...r)}var wl=["onStart","onChange","onRest"],$l=1,Fl=class{constructor(e,t){this.id=$l++,this.springs={},this.queue=[],this._lastAsyncId=0,this._active=new Set,this._changed=new Set,this._started=!1,this._state={paused:!1,pauseQueue:new Set,resumeQueue:new Set,timeouts:new Set},this._events={onStart:new Map,onChange:new Map,onRest:new Map},this._onFrame=this._onFrame.bind(this),t&&(this._flush=t),e&&this.start({default:!0,...e})}get idle(){return!this._state.asyncTo&&Object.values(this.springs).every((e=>e.idle&&!e.isDelayed&&!e.isPaused))}get item(){return this._item}set item(e){this._item=e}get(){const e={};return this.each(((t,r)=>e[r]=t.get())),e}set(e){for(const t in e){const r=e[t];Vi.und(r)||this.springs[t].set(r)}}update(e){return e&&this.queue.push(pl(e)),this}start(e){let{queue:t}=this;return e?t=Gi(e).map(pl):this.queue=[],this._flush?this._flush(this,t):(Tl(this,t),Cl(this,t))}stop(e,t){if(e!==!!e&&(t=e),t){const r=this.springs;Ui(Gi(t),(t=>r[t].stop(!!e)))}else el(this._state,this._lastAsyncId),this.each((t=>t.stop(!!e)));return this}pause(e){if(Vi.und(e))this.start({pause:!0});else{const t=this.springs;Ui(Gi(e),(e=>t[e].pause()))}return this}resume(e){if(Vi.und(e))this.start({pause:!1});else{const t=this.springs;Ui(Gi(e),(e=>t[e].resume()))}return this}each(e){qi(this.springs,e)}_onFrame(){const{onStart:e,onChange:t,onRest:r}=this._events,n=this._active.size>0,o=this._changed.size>0;(n&&!this._started||o&&!this._started)&&(this._started=!0,Zi(e,(([e,t])=>{t.value=this.get(),e(t,this,this._item)})));const i=!n&&this._started,s=o||i&&r.size?this.get():null;o&&t.size&&Zi(t,(([e,t])=>{t.value=s,e(t,this,this._item)})),i&&(this._started=!1,Zi(r,(([e,t])=>{t.value=s,e(t,this,this._item)})))}eventObserved(e){if("change"==e.type)this._changed.add(e.parent),e.idle||this._active.add(e.parent);else{if("idle"!=e.type)return;this._active.delete(e.parent)}Ei.onFrame(this._onFrame)}};function Cl(e,t){return Promise.all(t.map((t=>Sl(e,t)))).then((t=>Za(e,t)))}async function Sl(e,t,r){const{keys:n,to:o,from:i,loop:s,onRest:a,onResolve:l}=t,d=Vi.obj(t.default)&&t.default;s&&(t.loop=!1),!1===o&&(t.to=null),!1===i&&(t.from=null);const c=Vi.arr(o)||Vi.fun(o)?o:void 0;c?(t.to=void 0,t.onRest=void 0,d&&(d.onRest=void 0)):Ui(wl,(r=>{const n=t[r];if(Vi.fun(n)){const o=e._events[r];t[r]=({finished:e,cancelled:t})=>{const r=o.get(n);r?(e||(r.finished=!1),t&&(r.cancelled=!0)):o.set(n,{value:null,finished:e||!1,cancelled:t||!1})},d&&(d[r]=t[r])}}));const u=e._state;t.pause===!u.paused?(u.paused=t.pause,Ki(t.pause?u.pauseQueue:u.resumeQueue)):u.paused&&(t.pause=!0);const h=(n||Object.keys(e.springs)).map((r=>e.springs[r].start(t))),g=!0===t.cancel||!0===Ma(t,"cancel");(c||g&&u.asyncId)&&h.push(Ga(++e._lastAsyncId,{props:t,state:u,actions:{pause:Ni,resume:Ni,start(t,r){g?(el(u,e._lastAsyncId),r(Ka(e))):(t.onRest=a,r(Ja(c,t,u,e)))}}})),u.paused&&await new Promise((e=>{u.resumeQueue.add(e)}));const m=Za(e,await Promise.all(h));if(s&&m.finished&&(!r||!m.noop)){const r=ml(t,s,o);if(r)return Tl(e,[r]),Sl(e,r,!0)}return l&&Ei.batchedUpdates((()=>l(m,e,e.item))),m}function El(e,t){const r={...e.springs};return t&&Ui(Gi(t),(e=>{Vi.und(e.keys)&&(e=pl(e)),Vi.obj(e.to)||(e={...e,to:void 0}),Il(r,e,(e=>Dl(e)))})),kl(e,r),r}function kl(e,t){qi(t,((t,r)=>{e.springs[r]||(e.springs[r]=t,qs(t,e))}))}function Dl(e,t){const r=new hl;return r.key=e,t&&qs(r,t),r}function Il(e,t,r){t.keys&&Ui(t.keys,(n=>{(e[n]||(e[n]=r(n)))._prepareNode(t)}))}function Tl(e,t){Ui(t,(t=>{Il(e.springs,t,(t=>Dl(t,e)))}))}var Bl,Al,zl=({children:e,...t})=>{const r=p(Ol),o=t.pause||!!r.pause,l=t.immediate||!!r.immediate;t=function(e,t){const[r]=a((()=>({inputs:t,result:e()}))),n=i(),o=n.current;let l=o;l?Boolean(t&&l.inputs&&function(e,t){if(e.length!==t.length)return!1;for(let r=0;r<e.length;r++)if(e[r]!==t[r])return!1;return!0}(t,l.inputs))||(l={inputs:t,result:e()}):l=r;return s((()=>{n.current=l,o==r&&(r.inputs=r.result=void 0)}),[l]),l.result}((()=>({pause:o,immediate:l})),[o,l]);const{Provider:d}=Ol;return n.createElement(d,{value:t},e)},Ol=(Bl=zl,Al={},Object.assign(Bl,n.createContext(Al)),Bl.Provider._context=Bl,Bl.Consumer._context=Bl,Bl);zl.Provider=Ol.Provider,zl.Consumer=Ol.Consumer;var Ml=()=>{const e=[],t=function(t){da(`${sa}Directly calling start instead of using the api object is deprecated in v9 (use ".start" instead), this will be removed in later 0.X.0 versions`);const n=[];return Ui(e,((e,o)=>{if(Vi.und(t))n.push(e.start());else{const i=r(t,e,o);i&&n.push(e.start(i))}})),n};t.current=e,t.add=function(t){e.includes(t)||e.push(t)},t.delete=function(t){const r=e.indexOf(t);~r&&e.splice(r,1)},t.pause=function(){return Ui(e,(e=>e.pause(...arguments))),this},t.resume=function(){return Ui(e,(e=>e.resume(...arguments))),this},t.set=function(t){Ui(e,((e,r)=>{const n=Vi.fun(t)?t(r,e):t;n&&e.set(n)}))},t.start=function(t){const r=[];return Ui(e,((e,n)=>{if(Vi.und(t))r.push(e.start());else{const o=this._getProps(t,e,n);o&&r.push(e.start(o))}})),r},t.stop=function(){return Ui(e,(e=>e.stop(...arguments))),this},t.update=function(t){return Ui(e,((e,r)=>e.update(this._getProps(t,e,r)))),this};const r=function(e,t,r){return Vi.fun(e)?e(r,t):e};return t._getProps=r,t};function _l(e,t){const r=Vi.fun(e),[[n],o]=function(e,t,r){const n=Vi.fun(t)&&t;n&&!r&&(r=[]);const o=f((()=>n||3==arguments.length?Ml():void 0),[]),s=i(0),a=ha(),l=f((()=>({ctrls:[],queue:[],flush(e,t){const r=El(e,t),n=s.current>0&&!l.queue.length&&!Object.keys(r).some((t=>!e.springs[t]));return n?Cl(e,t):new Promise((n=>{kl(e,r),l.queue.push((()=>{n(Cl(e,t))})),a()}))}})),[]),d=i([...l.ctrls]),c=[],u=pa(e)||0;function h(e,r){for(let o=e;o<r;o++){const e=d.current[o]||(d.current[o]=new Fl(null,l.flush)),r=n?n(o,e):t[o];r&&(c[o]=fl(r))}}f((()=>{Ui(d.current.slice(e,u),(e=>{!function(e,t){e.ref?.delete(e),t?.delete(e)}(e,o),e.stop(!0)})),d.current.length=e,h(u,e)}),[e]),f((()=>{h(0,Math.min(u,e))}),r);const g=d.current.map(((e,t)=>El(e,c[t]))),m=p(zl),b=pa(m),y=m!==b&&function(e){for(const t in e)return!0;return!1}(m);ua((()=>{s.current++,l.ctrls=d.current;const{queue:e}=l;e.length&&(l.queue=[],Ui(e,(e=>e()))),Ui(d.current,((e,t)=>{o?.add(e),y&&e.start({default:m});const r=c[t];r&&(function(e,t){t&&e.ref!==t&&(e.ref?.delete(e),t.add(e),e.ref=t)}(e,r.ref),e.ref?e.queue.push(r):e.start(r))}))})),ga((()=>()=>{Ui(l.ctrls,(e=>e.stop(!0)))}));const v=g.map((e=>({...e})));return o?[v,o]:v}(1,r?e:[e],r?t||[]:t);return r||2==arguments.length?[n,o]:n}var Rl=class extends il{constructor(e,t){super(),this.source=e,this.idle=!0,this._active=new Set,this.calc=Bs(...t);const r=this._get(),n=ka(r);ya(this,n.create(r))}advance(e){const t=this._get();Yi(t,this.get())||(ba(this).setValue(t),this._onChange(t,this.idle)),!this.idle&&jl(this._active)&&Ll(this)}_get(){const e=Vi.arr(this.source)?this.source.map(Ws):Gi(Ws(this.source));return this.calc(...e)}_start(){this.idle&&!jl(this._active)&&(this.idle=!1,Ui(va(this),(e=>{e.done=!1})),Ci.skipAnimation?(Ei.batchedUpdates((()=>this.advance())),Ll(this)):ls.start(this))}_attach(){let e=1;Ui(Gi(this.source),(t=>{Ps(t)&&qs(t,this),nl(t)&&(t.idle||this._active.add(t),e=Math.max(e,t.priority+1))})),this.priority=e,this._start()}_detach(){Ui(Gi(this.source),(e=>{Ps(e)&&Gs(e,this)})),this._active.clear(),Ll(this)}eventObserved(e){"change"==e.type?e.idle?this.advance():(this._active.add(e.parent),this._start()):"idle"==e.type?this._active.delete(e.parent):"priority"==e.type&&(this.priority=Gi(this.source).reduce(((e,t)=>Math.max(e,(nl(t)?t.priority:0)+1)),0))}};function Hl(e){return!1!==e.idle}function jl(e){return!e.size||Array.from(e).every(Hl)}function Ll(e){e.idle||(e.idle=!0,Ui(va(e),(e=>{e.done=!0})),Vs(e,{type:"idle",parent:e}))}Ci.assign({createStringInterpolator:ia,to:(e,t)=>new Rl(e,t)});var Pl=/^--/;function Wl(e,t){return null==t||"boolean"==typeof t||""===t?"":"number"!=typeof t||0===t||Pl.test(e)||Vl.hasOwnProperty(e)&&Vl[e]?(""+t).trim():t+"px"}var Nl={};var Vl={animationIterationCount:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Yl=["Webkit","Ms","Moz","O"];Vl=Object.keys(Vl).reduce(((e,t)=>(Yl.forEach((r=>e[((e,t)=>e+t.charAt(0).toUpperCase()+t.substring(1))(r,t)]=e[t])),e)),Vl);var Ul=/^(matrix|translate|scale|rotate|skew)/,ql=/^(translate)/,Gl=/^(rotate|skew)/,Zl=(e,t)=>Vi.num(e)&&0!==e?e+t:e,Ql=(e,t)=>Vi.arr(e)?e.every((e=>Ql(e,t))):Vi.num(e)?e===t:parseFloat(e)===t,Xl=class extends Ca{constructor({x:e,y:t,z:r,...n}){const o=[],i=[];(e||t||r)&&(o.push([e||0,t||0,r||0]),i.push((e=>[`translate3d(${e.map((e=>Zl(e,"px"))).join(",")})`,Ql(e,0)]))),qi(n,((e,t)=>{if("transform"===t)o.push([e||""]),i.push((e=>[e,""===e]));else if(Ul.test(t)){if(delete n[t],Vi.und(e))return;const r=ql.test(t)?"px":Gl.test(t)?"deg":"";o.push(Gi(e)),i.push("rotate3d"===t?([e,t,n,o])=>[`rotate3d(${e},${t},${n},${Zl(o,r)})`,Ql(o,0)]:e=>[`${t}(${e.map((e=>Zl(e,r))).join(",")})`,Ql(e,t.startsWith("scale")?1:0)])}})),o.length&&(n.transform=new Kl(o,i)),super(n)}},Kl=class extends Ys{constructor(e,t){super(),this.inputs=e,this.transforms=t,this._value=null}get(){return this._value||(this._value=this._get())}_get(){let e="",t=!0;return Ui(this.inputs,((r,n)=>{const o=Ws(r[0]),[i,s]=this.transforms[n](Vi.arr(o)?o:r.map(Ws));e+=" "+i,t=t&&s})),t?"none":e}observerAdded(e){1==e&&Ui(this.inputs,(e=>Ui(e,(e=>Ps(e)&&qs(e,this)))))}observerRemoved(e){0==e&&Ui(this.inputs,(e=>Ui(e,(e=>Ps(e)&&Gs(e,this)))))}eventObserved(e){"change"==e.type&&(this._value=null),Vs(this,e)}};Ci.assign({batchedUpdates:D,createStringInterpolator:ia,colors:{transparent:0,aliceblue:4042850303,antiquewhite:4209760255,aqua:16777215,aquamarine:2147472639,azure:4043309055,beige:4126530815,bisque:4293182719,black:255,blanchedalmond:4293643775,blue:65535,blueviolet:2318131967,brown:2771004159,burlywood:3736635391,burntsienna:3934150143,cadetblue:1604231423,chartreuse:2147418367,chocolate:3530104575,coral:4286533887,cornflowerblue:1687547391,cornsilk:4294499583,crimson:3692313855,cyan:16777215,darkblue:35839,darkcyan:9145343,darkgoldenrod:3095792639,darkgray:2846468607,darkgreen:6553855,darkgrey:2846468607,darkkhaki:3182914559,darkmagenta:2332068863,darkolivegreen:1433087999,darkorange:4287365375,darkorchid:2570243327,darkred:2332033279,darksalmon:3918953215,darkseagreen:2411499519,darkslateblue:1211993087,darkslategray:793726975,darkslategrey:793726975,darkturquoise:13554175,darkviolet:2483082239,deeppink:4279538687,deepskyblue:12582911,dimgray:1768516095,dimgrey:1768516095,dodgerblue:512819199,firebrick:2988581631,floralwhite:4294635775,forestgreen:579543807,fuchsia:4278255615,gainsboro:3705462015,ghostwhite:4177068031,gold:4292280575,goldenrod:3668254975,gray:2155905279,green:8388863,greenyellow:2919182335,grey:2155905279,honeydew:4043305215,hotpink:4285117695,indianred:3445382399,indigo:1258324735,ivory:4294963455,khaki:4041641215,lavender:3873897215,lavenderblush:4293981695,lawngreen:2096890111,lemonchiffon:4294626815,lightblue:2916673279,lightcoral:4034953471,lightcyan:3774873599,lightgoldenrodyellow:4210742015,lightgray:3553874943,lightgreen:2431553791,lightgrey:3553874943,lightpink:4290167295,lightsalmon:4288707327,lightseagreen:548580095,lightskyblue:2278488831,lightslategray:2005441023,lightslategrey:2005441023,lightsteelblue:2965692159,lightyellow:4294959359,lime:16711935,limegreen:852308735,linen:4210091775,magenta:4278255615,maroon:2147483903,mediumaquamarine:1724754687,mediumblue:52735,mediumorchid:3126187007,mediumpurple:2473647103,mediumseagreen:1018393087,mediumslateblue:2070474495,mediumspringgreen:16423679,mediumturquoise:1221709055,mediumvioletred:3340076543,midnightblue:421097727,mintcream:4127193855,mistyrose:4293190143,moccasin:4293178879,navajowhite:4292783615,navy:33023,oldlace:4260751103,olive:2155872511,olivedrab:1804477439,orange:4289003775,orangered:4282712319,orchid:3664828159,palegoldenrod:4008225535,palegreen:2566625535,paleturquoise:2951671551,palevioletred:3681588223,papayawhip:4293907967,peachpuff:4292524543,peru:3448061951,pink:4290825215,plum:3718307327,powderblue:2967529215,purple:2147516671,rebeccapurple:1714657791,red:4278190335,rosybrown:3163525119,royalblue:1097458175,saddlebrown:2336560127,salmon:4202722047,sandybrown:4104413439,seagreen:780883967,seashell:4294307583,sienna:2689740287,silver:3233857791,skyblue:2278484991,slateblue:1784335871,slategray:1887473919,slategrey:1887473919,snow:4294638335,springgreen:16744447,steelblue:1182971135,tan:3535047935,teal:8421631,thistle:3636451583,tomato:4284696575,turquoise:1088475391,violet:4001558271,wheat:4125012991,white:4294967295,whitesmoke:4126537215,yellow:4294902015,yellowgreen:2597139199}});var Jl=((e,{applyAnimatedValues:t=()=>!1,createAnimatedStyle:r=e=>new Ca(e),getComponentProps:n=e=>e}={})=>{const o={applyAnimatedValues:t,createAnimatedStyle:r,getComponentProps:n},i=e=>{const t=Ba(e)||"Anonymous";return(e=Vi.str(e)?i[e]||(i[e]=Da(e,o)):e[Ta]||(e[Ta]=Da(e,o))).displayName=`Animated(${t})`,e};return qi(e,((t,r)=>{Vi.arr(e)&&(r=Ba(t)),i[r]=i(t)})),{animated:i}})(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"],{applyAnimatedValues:function(e,t){if(!e.nodeType||!e.setAttribute)return!1;const r="filter"===e.nodeName||e.parentNode&&"filter"===e.parentNode.nodeName,{style:n,children:o,scrollTop:i,scrollLeft:s,viewBox:a,...l}=t,d=Object.values(l),c=Object.keys(l).map((t=>r||e.hasAttribute(t)?t:Nl[t]||(Nl[t]=t.replace(/([A-Z])/g,(e=>"-"+e.toLowerCase())))));void 0!==o&&(e.textContent=o);for(const t in n)if(n.hasOwnProperty(t)){const r=Wl(t,n[t]);Pl.test(t)?e.style.setProperty(t,r):e.style[t]=r}c.forEach(((t,r)=>{e.setAttribute(t,d[r])})),void 0!==i&&(e.scrollTop=i),void 0!==s&&(e.scrollLeft=s),void 0!==a&&e.setAttribute("viewBox",a)},createAnimatedStyle:e=>new Xl(e),getComponentProps:({scrollTop:e,scrollLeft:t,...r})=>r}),ed=Jl.animated;const td=x.div`
    display: inline-block;
    position: relative;
    width: ${({$size:e})=>e?`${e}px`:"1em"};
    height: ${({$size:e})=>e?`${e}px`:"1em"};
    color: ${e=>e.$color||"currentColor"};
`,rd=$`
	0% {
	  transform: rotate(0deg);
	}
	100% {
	  transform: rotate(360deg);
	}
`,nd=x.div`
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
    animation: ${rd} 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
`,od=x(nd)`
    animation-delay: -0.45s;
`,id=x(nd)`
    animation-delay: -0.3s;
`,sd=x(nd)`
    animation-delay: -0.15s;
`,ad=({color:r,className:n,size:o})=>e(td,{className:n,$size:o,$color:r,"data-testid":"component-loading-spinner",children:[t(nd,{id:"inner1"}),t(od,{id:"inner2"}),t(id,{id:"inner3"}),t(sd,{id:"inner4"})]}),ld={collections:{default:{Button:{"button-radius":On.sm,"button-default-colour-bg":cn["bg-primary"],"button-default-colour-bg-hover":cn["bg-primary-hover"],"button-default-colour-text":cn["text-inverse"],"button-secondary-colour-border":cn["border-primary"],"button-secondary-colour-text":cn["text-primary"],"button-light-colour-text":cn["text-primary"],"button-link-colour-text":cn["text-primary"]}},pa:{Button:{"button-radius":On.full,"button-default-colour-bg":cn["bg-primary"],"button-default-colour-bg-hover":cn["bg-primary-hover"],"button-default-colour-text":cn["text-inverse"],"button-secondary-colour-border":cn["border-primary"],"button-secondary-colour-text":cn["text-primary"],"button-light-colour-text":cn["text-primary"],"button-link-colour-text":cn["text-primary"]}}},defaultValue:"default"},dd=(e,t)=>r=>{var n,o;const i=r.theme,s=Hr(ld,null==i?void 0:i.componentScheme);return cd((null===(o=null===(n=null==i?void 0:i.componentOverrides)||void 0===n?void 0:n[e])||void 0===o?void 0:o[t])||s[e][t],r)},cd=(e,t)=>{switch(typeof e){case"function":return e(t);case"number":return e+"px";case"string":return e}},ud=dd("Button","button-radius"),hd=dd("Button","button-default-colour-bg"),gd=dd("Button","button-default-colour-bg-hover"),md=dd("Button","button-default-colour-text"),pd=dd("Button","button-secondary-colour-border"),fd=dd("Button","button-secondary-colour-text"),bd=dd("Button","button-light-colour-text"),yd=dd("Button","button-link-colour-text"),vd=x.button`
    padding: ${Nn["spacing-8"]} ${Nn["spacing-16"]};
    min-width: 4rem;
    border: ${Wn["width-010"]} ${Wn.solid} transparent;
    transition: all ${Pn["duration-250"]} ${Pn["ease-default"]};
    border-radius: ${ud};
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;

    // -----------------------------------------------------------------------------
    // BUTTON STYLE + TEXT COLOR
    // -----------------------------------------------------------------------------
    ${e=>{switch(e.$buttonStyle){case"secondary":return w`
                    background-color: ${jn.Primitive.white};
                    border-color: ${e.$buttonIsDanger?jn["border-error-strong"]:pd};

                    color: ${e.$buttonIsDanger?jn["text-error"]:fd};

                    &:hover,
                    &:active {
                        background-color: ${jn["bg-hover-neutral"]};
                    }
                `;case"light":return w`
                    background-color: ${jn.bg};
                    border-color: ${jn.border};

                    color: ${e.$buttonIsDanger?jn["text-error"]:bd};

                    &:hover,
                    &:active {
                        background-color: ${jn["bg-hover-neutral"]};
                    }
                `;case"link":return w`
                    background-color: transparent;

                    color: ${e.$buttonIsDanger?jn["text-error"]:yd};
                    &:hover,
                    &:active {
                        background-color: ${jn["bg-hover-neutral"]};
                    }
                `;case"disabled":return w`
                    background-color: ${jn["bg-disabled"]};

                    cursor: not-allowed;

                    &:hover {
                        box-shadow: none;
                    }

                    color: ${jn["text-disabled"]};
                `;default:return w`
                    background-color: ${e.$buttonIsDanger?jn["bg-error-strong"]:hd};};

                    ${Un.MaxWidth.sm} {
                        width: 100%;
                    }

                    color: ${md}};

                    &:hover,
                    &:active {
                        background-color: ${e.$buttonIsDanger?jn["bg-error-strong-hover"]:gd}
                        };
                    }
                `}}}

    // -----------------------------------------------------------------------------
	// BUTTON SIZE + TEXT SIZE
	// -----------------------------------------------------------------------------
	${e=>{switch(e.$buttonSizeStyle){case"small":return w`
                    height: 2.5rem;
                    ${Ln["body-md-semibold"]}

                    ${Un.MaxWidth.xxs} {
                        height: auto;
                    }
                `;case"large":return w`
                    height: 4rem;
                    ${Ln["heading-md-semibold"]}

                    ${Un.MaxWidth.xxs} {
                        height: auto;
                    }
                `;default:return w`
                    height: 3rem;
                    ${Ln["heading-xs-semibold"]}

                    ${Un.MaxWidth.xxs} {
                        height: auto;
                    }
                `}}}
`,xd=x(ad)`
    margin-right: 0.5rem;
`,wd=(r,n)=>{const{children:o,disabled:i=!1,loading:s=!1,styleType:a="default",danger:l=!1}=r,d=oe(r,["children","disabled","loading","styleType","danger"]),c={$buttonStyle:i?"disabled":a,$buttonSizeStyle:"default",$buttonIsDanger:l};return e(vd,Object.assign({ref:n,"data-testid":d["data-testid"]||"button",disabled:i},c,d,{children:[s&&t(xd,{}),t("span",{children:o})]}))};wd.displayName="Button.Default";const $d=(r,n)=>{const{children:o,disabled:i=!1,loading:s=!1,styleType:a="default",danger:l=!1}=r,d=oe(r,["children","disabled","loading","styleType","danger"]),c={$buttonStyle:i?"disabled":a,$buttonSizeStyle:"small",$buttonIsDanger:l};return e(vd,Object.assign({ref:n,"data-testid":d["data-testid"]||"button",disabled:i},c,d,{children:[s&&t(xd,{}),t("span",{children:o})]}))};$d.displayName="Button.Small";const Fd=(r,n)=>{const{children:o,disabled:i=!1,loading:s=!1,styleType:a="default",danger:l=!1}=r,d=oe(r,["children","disabled","loading","styleType","danger"]),c={$buttonStyle:i?"disabled":a,$buttonSizeStyle:"large",$buttonIsDanger:l};return e(vd,Object.assign({ref:n,"data-testid":d["data-testid"]||"button",disabled:i},c,d,{children:[s&&t(xd,{}),t("span",{children:o})]}))};Fd.displayName="Button.Large";const Cd={Default:o.forwardRef(wd),Small:o.forwardRef($d),Large:o.forwardRef(Fd)};var Sd={exports:{}};Sd.exports=function(){var e={LTS:"h:mm:ss A",LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D, YYYY",LLL:"MMMM D, YYYY h:mm A",LLLL:"dddd, MMMM D, YYYY h:mm A"},t=/(\[[^[]*\])|([-_:/.,()\s]+)|(A|a|YYYY|YY?|MM?M?M?|Do|DD?|hh?|HH?|mm?|ss?|S{1,3}|z|ZZ?)/g,r=/\d\d/,n=/\d\d?/,o=/\d*[^-_:/,()\s\d]+/,i={},s=function(e){return(e=+e)+(e>68?1900:2e3)},a=function(e){return function(t){this[e]=+t}},l=[/[+-]\d\d:?(\d\d)?|Z/,function(e){(this.zone||(this.zone={})).offset=function(e){if(!e)return 0;if("Z"===e)return 0;var t=e.match(/([+-]|\d\d)/g),r=60*t[1]+(+t[2]||0);return 0===r?0:"+"===t[0]?-r:r}(e)}],d=function(e){var t=i[e];return t&&(t.indexOf?t:t.s.concat(t.f))},c=function(e,t){var r,n=i.meridiem;if(n){for(var o=1;o<=24;o+=1)if(e.indexOf(n(o,0,t))>-1){r=o>12;break}}else r=e===(t?"pm":"PM");return r},u={A:[o,function(e){this.afternoon=c(e,!1)}],a:[o,function(e){this.afternoon=c(e,!0)}],S:[/\d/,function(e){this.milliseconds=100*+e}],SS:[r,function(e){this.milliseconds=10*+e}],SSS:[/\d{3}/,function(e){this.milliseconds=+e}],s:[n,a("seconds")],ss:[n,a("seconds")],m:[n,a("minutes")],mm:[n,a("minutes")],H:[n,a("hours")],h:[n,a("hours")],HH:[n,a("hours")],hh:[n,a("hours")],D:[n,a("day")],DD:[r,a("day")],Do:[o,function(e){var t=i.ordinal,r=e.match(/\d+/);if(this.day=r[0],t)for(var n=1;n<=31;n+=1)t(n).replace(/\[|\]/g,"")===e&&(this.day=n)}],M:[n,a("month")],MM:[r,a("month")],MMM:[o,function(e){var t=d("months"),r=(d("monthsShort")||t.map((function(e){return e.slice(0,3)}))).indexOf(e)+1;if(r<1)throw new Error;this.month=r%12||r}],MMMM:[o,function(e){var t=d("months").indexOf(e)+1;if(t<1)throw new Error;this.month=t%12||t}],Y:[/[+-]?\d+/,a("year")],YY:[r,function(e){this.year=s(e)}],YYYY:[/\d{4}/,a("year")],Z:l,ZZ:l};function h(r){var n,o;n=r,o=i&&i.formats;for(var s=(r=n.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g,(function(t,r,n){var i=n&&n.toUpperCase();return r||o[n]||e[n]||o[i].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g,(function(e,t,r){return t||r.slice(1)}))}))).match(t),a=s.length,l=0;l<a;l+=1){var d=s[l],c=u[d],h=c&&c[0],g=c&&c[1];s[l]=g?{regex:h,parser:g}:d.replace(/^\[|\]$/g,"")}return function(e){for(var t={},r=0,n=0;r<a;r+=1){var o=s[r];if("string"==typeof o)n+=o.length;else{var i=o.regex,l=o.parser,d=e.slice(n),c=i.exec(d)[0];l.call(t,c),e=e.replace(c,"")}}return function(e){var t=e.afternoon;if(void 0!==t){var r=e.hours;t?r<12&&(e.hours+=12):12===r&&(e.hours=0),delete e.afternoon}}(t),t}}return function(e,t,r){r.p.customParseFormat=!0,e&&e.parseTwoDigitYear&&(s=e.parseTwoDigitYear);var n=t.prototype,o=n.parse;n.parse=function(e){var t=e.date,n=e.utc,s=e.args;this.$u=n;var a=s[1];if("string"==typeof a){var l=!0===s[2],d=!0===s[3],c=l||d,u=s[2];d&&(u=s[2]),i=this.$locale(),!l&&u&&(i=r.Ls[u]),this.$d=function(e,t,r){try{if(["x","X"].indexOf(t)>-1)return new Date(("X"===t?1e3:1)*e);var n=h(t)(e),o=n.year,i=n.month,s=n.day,a=n.hours,l=n.minutes,d=n.seconds,c=n.milliseconds,u=n.zone,g=new Date,m=s||(o||i?1:g.getDate()),p=o||g.getFullYear(),f=0;o&&!i||(f=i>0?i-1:g.getMonth());var b=a||0,y=l||0,v=d||0,x=c||0;return u?new Date(Date.UTC(p,f,m,b,y,v,x+60*u.offset*1e3)):r?new Date(Date.UTC(p,f,m,b,y,v,x)):new Date(p,f,m,b,y,v,x)}catch(e){return new Date("")}}(t,a,n),this.init(),u&&!0!==u&&(this.$L=this.locale(u).$L),c&&t!=this.format(a)&&(this.$d=new Date("")),i={}}else if(a instanceof Array)for(var g=a.length,m=1;m<=g;m+=1){s[1]=a[m-1];var p=r.apply(this,s);if(p.isValid()){this.$d=p.$d,this.$L=p.$L,this.init();break}m===g&&(this.$d=new Date(""))}else o.call(this,e)}}}();var Ed=ae(Sd.exports),kd={exports:{}};kd.exports=function(e,t,r){t.prototype.isBetween=function(e,t,n,o){var i=r(e),s=r(t),a="("===(o=o||"()")[0],l=")"===o[1];return(a?this.isAfter(i,n):!this.isBefore(i,n))&&(l?this.isBefore(s,n):!this.isAfter(s,n))||(a?this.isBefore(i,n):!this.isAfter(i,n))&&(l?this.isAfter(s,n):!this.isBefore(s,n))}};var Dd=ae(kd.exports),Id={exports:{}};Id.exports=function(e,t){t.prototype.isSameOrAfter=function(e,t){return this.isSame(e,t)||this.isAfter(e,t)}};var Td=ae(Id.exports),Bd={exports:{}};Bd.exports=function(e,t){t.prototype.isSameOrBefore=function(e,t){return this.isSame(e,t)||this.isBefore(e,t)}};var Ad,zd,Od,Md=ae(Bd.exports),_d={exports:{}},Rd=ae(_d.exports=(Ad={year:0,month:1,day:2,hour:3,minute:4,second:5},zd={},function(e,t,r){var n,o=function(e,t,r){void 0===r&&(r={});var n=new Date(e),o=function(e,t){void 0===t&&(t={});var r=t.timeZoneName||"short",n=e+"|"+r,o=zd[n];return o||(o=new Intl.DateTimeFormat("en-US",{hour12:!1,timeZone:e,year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit",timeZoneName:r}),zd[n]=o),o}(t,r);return o.formatToParts(n)},i=function(e,t){for(var n=o(e,t),i=[],s=0;s<n.length;s+=1){var a=n[s],l=a.type,d=a.value,c=Ad[l];c>=0&&(i[c]=parseInt(d,10))}var u=i[3],h=24===u?0:u,g=i[0]+"-"+i[1]+"-"+i[2]+" "+h+":"+i[4]+":"+i[5]+":000",m=+e;return(r.utc(g).valueOf()-(m-=m%1e3))/6e4},s=t.prototype;s.tz=function(e,t){void 0===e&&(e=n);var o=this.utcOffset(),i=this.toDate(),s=i.toLocaleString("en-US",{timeZone:e}),a=Math.round((i-new Date(s))/1e3/60),l=r(s,{locale:this.$L}).$set("millisecond",this.$ms).utcOffset(15*-Math.round(i.getTimezoneOffset()/15)-a,!0);if(t){var d=l.utcOffset();l=l.add(o-d,"minute")}return l.$x.$timezone=e,l},s.offsetName=function(e){var t=this.$x.$timezone||r.tz.guess(),n=o(this.valueOf(),t,{timeZoneName:e}).find((function(e){return"timezonename"===e.type.toLowerCase()}));return n&&n.value};var a=s.startOf;s.startOf=function(e,t){if(!this.$x||!this.$x.$timezone)return a.call(this,e,t);var n=r(this.format("YYYY-MM-DD HH:mm:ss:SSS"),{locale:this.$L});return a.call(n,e,t).tz(this.$x.$timezone,!0)},r.tz=function(e,t,o){var s=o&&t,a=o||t||n,l=i(+r(),a);if("string"!=typeof e)return r(e).tz(a);var d=function(e,t,r){var n=e-60*t*1e3,o=i(n,r);if(t===o)return[n,t];var s=i(n-=60*(o-t)*1e3,r);return o===s?[n,o]:[e-60*Math.min(o,s)*1e3,Math.max(o,s)]}(r.utc(e,s).valueOf(),l,a),c=d[0],u=d[1],h=r(c).utcOffset(u);return h.$x.$timezone=a,h},r.tz.guess=function(){return Intl.DateTimeFormat().resolvedOptions().timeZone},r.tz.setDefault=function(e){n=e}}));Fo.extend(Dd),Fo.extend(Md),Fo.extend(Td),Fo.extend(Ed),Fo.extend(Rd),function(e){e.generateDays=e=>{const t=e.startOf("month"),r=Fo(t).startOf("week");return Hd(r).map((e=>jd(e)))},e.generateDaysForCurrentWeek=e=>{const t=e.startOf("week");return jd(t)},e.generateMonths=e=>{const t=[];for(let r=0;r<12;r++){const n=e.month(r);t.push(Fo(n))}return t},e.generateDecadeOfYears=e=>{const t=e.year(),r=10*Math.floor(t/10),n=e.year(r),o=[n.subtract(1,"year"),n];for(let e=1;e<11;e++)o.push(n.add(e,"year"));return o},e.getStartEndDecade=e=>{const t=10*Math.floor(+e.format("YYYY")/10);return{beginDecade:t,endDecade:+Fo(`${t+9}-01-01`).format("YYYY")}},e.convertTo12HourFormat=e=>{const t=Fo(e,"HH:mm");return t.isValid()?t.format("h:mm a"):""},e.isWithinRange=(e,t,r,n="day")=>!t&&!r||(t&&r?e.isBetween(t,r,n,"[]"):t?e.isSameOrAfter(t,n):e.isSameOrBefore(r,n)),e.isPreviousMonthWithinRange=(t,r)=>e.isWithinRange(t.subtract(1,"month"),r,void 0,"month"),e.isPreviousYearWithinRange=(t,r)=>e.isWithinRange(t.subtract(1,"year"),r,void 0,"year"),e.isPreviousDecadeWithinRange=(t,r)=>{const{beginDecade:n}=e.getStartEndDecade(t);return e.isWithinRange(t.year(n).subtract(1,"year"),r,void 0,"year")},e.isNextMonthWithinRange=(t,r)=>e.isWithinRange(t.add(1,"month"),void 0,r,"month"),e.isNextYearWithinRange=(t,r)=>e.isWithinRange(t.add(1,"year"),void 0,r,"year"),e.isNextDecadeWithinRange=(t,r)=>{const{endDecade:n}=e.getStartEndDecade(t);return e.isWithinRange(t.year(n).add(1,"year"),void 0,r,"year")},e.getWeekStartEnd=e=>({start:e.startOf("week").format("YYYY-MM-DD"),end:e.endOf("week").format("YYYY-MM-DD")}),e.getFixedRangeStartEnd=(e,t)=>({start:e.format("YYYY-MM-DD"),end:e.add(t-1,"day").format("YYYY-MM-DD")}),e.isDisabledDay=(t,r,n,o)=>{const i=e.isWithinRange(t,n?Fo(n):void 0,o?Fo(o):void 0),s=r&&r.includes(t.format("YYYY-MM-DD"));return!i||!!s}}(Od||(Od={}));const Hd=e=>{const t=[e];for(let r=1;r<6;r++){const n=e.add(r,"week");t.push(n)}return t},jd=e=>{const t=[];for(let r=0;r<7;r++){const n=e.add(r,"day");t.push(n)}return t},Ld=[1,3,5,7,8,10,12],Pd=[4,6,9,11];var Wd,Nd,Vd;function Yd(e){const t=i(null);return h((()=>{t.current=e}),[e]),m(((...e)=>{var r;return null===(r=t.current)||void 0===r?void 0:r.call(t,...e)}),[])}!function(e){e.clampDay=(t,r,n)=>{const o=parseInt(t),i=parseInt(r),s=parseInt(n);return 0==o?"1":Ld.includes(i)?Math.min(o,31).toString():Pd.includes(i)?Math.min(o,30).toString():2===i?e.isLeapYear(s)?Math.min(o,29).toString():Math.min(o,28).toString():t},e.clampMonth=e=>{const t=parseInt(e);return 0==t?"1":t>12?"12":e},e.isLeapYear=e=>e%4==0&&e%100!=0||e%400==0,e.getTimeDiffInMinutes=(e,t,r="HH:mm")=>{const n=Fo(e,r);return Fo(t,r).diff(n,"minute")},e.toDayjs=e=>e?Fo(e):Fo(),e.addMinutesToTime=(e,t,r="HH:mm")=>Fo(e,r).add(t,"minutes").format(r),e.isSame=(e,t,r="day")=>Fo(e).isSame(Fo(t),r)}(Wd||(Wd={})),function(e){e.isDateDisabled=(e,t)=>{const{disabledDates:r,minDate:n,maxDate:o}=t;return!!(e&&r&&r.length&&r.includes(e))||(!(!n||!Fo(e).isBefore(n,"day"))||!(!o||!Fo(e).isAfter(o,"day")))},e.sanitizeInput=e=>{if(e){if(Fo(e).isValid())return e}return""}}(Nd||(Nd={})),function(e){e.generate=()=>Math.random().toString(36).substring(2,9)}(Vd||(Vd={}));const Ud=e=>{const t=(e=>{const t=i(e),r=i();return s((()=>{r.current=t.current,t.current=e}),[e]),r.current})(e);return t!==e},qd=e=>{const{textSize:t}=e||{};return w`
        // Text styling
        ${t&&Ln[`${t}-regular`]}

        strong {
            font-weight: ${Ln.Spec["weight-semibold"]};
            ${t&&Ln[`${t}-semibold`]};
        }

        p {
            margin: 0;
        }

        // Link styling
        a {
            font-weight: ${Ln.Spec["weight-semibold"]};
            ${t&&Ln[`${t}-semibold`]}
            color: ${jn.hyperlink};
            text-decoration: none;

            svg {
                color: ${jn["icon-primary"]};
                height: 1lh;
                width: 1em;
                margin-left: 0.4rem;
                vertical-align: middle;
            }

            :hover,
            :active,
            :visited,
            :focus {
                color: ${jn["hyperlink-hover"]};

                svg {
                    color: ${jn["icon-hover"]};
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
    `},Gd=e=>w`
    display: -webkit-box;
    -webkit-line-clamp: ${e};
    -webkit-box-orient: vertical;
    overflow: hidden;
`,Zd=(e,t,r=!1)=>w`
        ${Ln[`${e}-${t}`]}
        ${r?"margin-bottom: 1.05em;":"margin-bottom: 0;"}
    `,Qd=e=>{if(e)return w`
            ${Gd(e)}
        `},Xd=(e,t)=>w`
    ${Zd(e,t.weight||"regular",t.paragraph)}
    ${((e=!1,t=!1,r)=>t?w`
            display: block;
            ${Qd(r)}
        `:e?w`
            display: inline;
        `:w`
            display: block;
            ${Qd(r)}
        `)(t.inline,t.paragraph,t.maxLines)}
    color: ${jn.text};
`;var Kd;!function(r){const n=(e,t,r)=>{const n=x(e).attrs((({inline:e})=>({as:e?"span":void 0})))`
            ${e=>Xd(t,e)}
        `;return n.displayName=`Typography.${r}`,n};r.HeadingXXL=n("h1","heading-xxl","HeadingXXL"),r.HeadingXL=n("h2","heading-xl","HeadingXL"),r.HeadingLG=n("h3","heading-lg","HeadingLG"),r.HeadingMD=n("h4","heading-md","HeadingMD"),r.HeadingSM=n("h5","heading-sm","HeadingSM"),r.HeadingXS=n("h6","heading-xs","HeadingXS");const o=(e,t)=>{const r=x.p.attrs((({inline:e})=>({as:e?"span":void 0})))`
            ${t=>Xd(e,t)}
        `;return r.displayName=`Typography.${t}`,r};r.BodyBL=o("body-baseline","BodyBL"),r.BodyMD=o("body-md","BodyMD"),r.BodySM=o("body-sm","BodySM"),r.BodyXS=o("body-xs","BodyXS");const i=(r,n)=>{const o=x.a`
            ${e=>w`
                ${Zd(r,e.weight||"regular")}
                color: ${jn.hyperlink};
                text-decoration: none;

                :hover,
                :active,
                :focus {
                    color: ${jn["text-hover"]};
                }
            `}
        `,i=r=>{var{external:n=!1,children:i}=r,s=oe(r,["external","children"]);return e(o,Object.assign({},s,{children:[i,n&&t(Jd,{})]}))};return i.displayName=`Typography.${n}`,i};r.LinkBL=i("body-baseline","LinkBL"),r.LinkMD=i("body-md","LinkMD"),r.LinkSM=i("body-sm","LinkSM"),r.LinkXS=i("body-xs","LinkXS")}(Kd||(Kd={}));const Jd=x(O)`
    height: 1lh;
    width: 1em;
    margin-left: 0.4em;
    vertical-align: middle;
`,ec=x.div`
    padding: ${Nn["spacing-8"]} ${Nn["spacing-16"]};
    display: flex;

    ${e=>{let t,r;switch(e.$type){case"error":t=jn["bg-error"](e),r=jn["border-error"](e);break;case"success":t=jn["bg-success"](e),r=jn["border-success"](e);break;case"warning":default:t=jn["bg-warning"](e),r=jn["border-warning"](e);break;case"info":t=jn["bg-info"](e),r=jn["border-info"](e);break;case"description":t=jn["bg-strong"](e),r=jn["border-strong"](e)}return w`
            background: ${t};
            border-left: ${Wn["width-020"]} ${Wn.solid}
                ${r};
        `}}

    color: ${jn.text};
    ${e=>"small"===e.$sizeType?qd({textSize:"body-sm"}):qd({textSize:"body-md"})}
`,tc=x.div`
    display: flex;
    align-items: center;
    height: 1lh;
    margin-right: ${Nn["spacing-8"]};

    ${e=>{let t;const r="small"===e.$sizeType?"1.25rem":"1.5rem";switch(e.$type){case"error":t=jn["icon-error"](e);break;case"success":t=jn["icon-success"](e);break;case"warning":default:t=jn["icon-warning"](e);break;case"info":t=jn["icon-info"](e);break;case"description":t=jn["icon-subtle"](e)}return w`
            svg {
                color: ${t};
                width: ${r};
                height: ${r};
            }
        `}}
`,rc=x(Kd.LinkSM)`
    ${e=>"small"===e.$sizeType?w`
                ${Ln["body-sm-semibold"]}
                margin-top: ${Nn["spacing-4"]};
            `:w`
                ${Ln["body-md-semibold"]}
                margin-top: ${Nn["spacing-8"]};
            `}
    display: flex;
    align-items: center;
    align-self: flex-start;

    svg {
        height: 1rem;
        width: 1rem;
        margin-left: ${Nn["spacing-4"]};
    }
`,nc=x.div`
    display: flex;
    flex-direction: column;
    flex: 1;
    overflow-wrap: anywhere;
`,oc=x.div`
    display: flex;
    flex-direction: column;
    flex: 1;
    ${e=>{if(e.$showMore&&e.$hasActionLink)return w`
                margin-bottom: ${Nn["spacing-8"]};
            `}}
    ${e=>{const t="linear-gradient(to bottom, black 50%, transparent 100%)";if(!e.$showMore&&e.$maxCollapsedHeight)return`\n                max-height: ${e.$maxCollapsedHeight}px;\n\t\t\t\toverflow: hidden;\n                -webkit-mask-image: ${t};\n                mask-image: ${t};\n\t\t\t`}}
`,ic=x.button`
    ${e=>"small"===e.$sizeType?w`
                ${Ln["body-sm-semibold"]}
            `:w`
                ${Ln["body-md-semibold"]}
            `}

    display: flex;
    align-items: center;
    align-self: flex-start;
    gap: ${Nn["spacing-4"]};
    margin-top: ${Nn["spacing-8"]};

    cursor: pointer;
    user-select: none;
    border: none;
    background: transparent;

    color: ${jn["text-primary"]};
`,sc=x(v)`
    transform: rotate(${e=>e.$expanded?180:0}deg);
    transition: transform ${Pn["duration-350"]} ${Pn["ease-standard"]};
`,ac=x.div`
    height: 1.625rem;
    width: 1.625rem;
    margin-right: 0.5rem;
    flex-shrink: 0;

    svg {
        height: 100%;
        width: 100%;
    }

    ${e=>e.$disabled?e.$active?w`
                    color: ${jn["icon-selected-disabled"]};
                `:w`
                    color: ${jn["icon-disabled-subtle"]};
                `:e.$active?w`
                color: ${jn["icon-selected"]};
            `:w`
            color: ${jn["icon-subtle"]};
        `};
`,lc=w`
    margin-bottom: ${e=>e.$bottomMargin||0}rem;

    // Counter matters
    counter-reset: list;

    li {
        font-weight: ${Ln.Spec["weight-regular"]};
        ${e=>e.$size&&Ln[`${e.$size}-regular`]}
        color: ${jn.text};
    }

    // nested lists styling
    ol,
    ul {
        margin-top: 0.5rem;
        margin-bottom: 0.5rem;
    }
`,dc=x.ol`
    ${lc}

    margin-left: 3rem;

    ${Un.MaxWidth.lg} {
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
`,cc=x.ul`
    ${lc}

    margin-left: 2.5rem;
    list-style-type: ${e=>e.$bulletType||"disc"};
`,uc=e=>{var{size:r,bulletType:n,bottomMargin:o,children:i}=e,s=oe(e,["size","bulletType","bottomMargin","children"]);return t(cc,Object.assign({$size:r,$bulletType:n,$bottomMargin:o},s,{children:i}))};uc.displayName="TextList.Ul";const hc=e=>{var{size:r,counterType:n,counterSeparator:o,bottomMargin:i,children:s}=e,a=oe(e,["size","counterType","counterSeparator","bottomMargin","children"]);return t(dc,Object.assign({$size:r,$counterType:n,$counterSeparator:o,$bottomMargin:i},a,{children:s}))};hc.displayName="TextList.Ol";const gc=uc,mc=x.div`
    position: relative;
    display: inline-flex;
    min-width: 10.375rem;
    border-radius: 4px;
    border-width: 1px;
    border-style: solid;
    overflow: hidden;
    flex-direction: column;
    height: fit-content;
    background: ${jn.bg};

    ${e=>{if(!e.$indicator)return w`
                justify-content: center;
            `}}

    // Container min width to fit content
    ${e=>{if(e.$useContentWidth)return w`
                min-width: unset;
            `}}

    // apply container border and header background color
    ${e=>"no-border"===e.$styleType?e.$error?e.$disabled?w`
                            border-color: ${jn["border-error"]};
                        `:w`
                            border-color: ${jn["border-error"]};

                            &:has(${vc}:hover) {
                                background: ${jn["bg-hover-subtle"]};
                            }
                        `:e.$disabled?e.$selected?w`
                            border: none;
                            background: ${jn["bg-selected-disabled"]};
                        `:w`
                            border: none;
                        `:e.$selected?w`
                        border: none;
                        background: ${jn["bg-selected"]};

                        &:has(${vc}:hover) {
                            background: ${jn["bg-selected-hover"]};

                            & ${fc} {
                                color: ${jn["text-selected-hover"]};
                            }

                            & ${Dc} {
                                color: ${jn["icon-selected-hover"]};
                            }
                        }
                    `:w`
                    border: none;

                    &:has(${vc}:hover) {
                        background: ${jn["bg-hover-subtle"]};
                    }
                `:e.$error?e.$disabled?w`
                            border-color: ${jn["border-error"]};
                        `:w`
                            border-color: ${jn["border-error"]};

                            &:has(${vc}:hover) {
                                background: ${jn["bg-hover-subtle"]};
                            }
                        `:e.$disabled?e.$selected?w`
                            border-color: ${jn["border-selected-disabled"]};
                            background: ${jn["bg-selected-disabled"]};
                        `:w`
                            border-color: ${jn["border-disabled"]};
                            background: ${jn["bg-disabled"]};
                        `:e.$selected?w`
                        border-color: ${jn["border-selected"]};
                        background: ${jn["bg-selected"]};

                        &:has(${vc}:hover) {
                            background: ${jn["bg-selected-hover"]};

                            & ${fc} {
                                color: ${jn["text-selected-hover"]};
                            }

                            & ${Dc} {
                                color: ${jn["icon-selected-hover"]};
                            }
                        }
                    `:w`
                    border-color: ${jn.border};

                    &:has(${vc}:hover) {
                        background: ${jn["bg-hover-subtle"]};
                    }
                `}
`,pc=x.input`
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
`,fc=x.div`
    display: flex;
    flex-direction: column;
    overflow-wrap: anywhere;
    width: 100%;
    overflow: hidden;

    // apply header container text color
    ${e=>e.$disabled?e.$selected?w`
                    color: ${jn["text-selected-disabled"]};
                `:w`
                    color: ${jn["text-disabled"]};
                `:e.$selected?w`
                color: ${jn["text-selected"]};
            `:w`
            color: ${jn.text};
        `}
`,bc=x.label`
    ${Ln["body-baseline-regular"]}
    overflow: hidden;
    display: -webkit-box;
    text-overflow: ellipsis;
    -webkit-box-orient: vertical;
    overflow-wrap: break-word;
    -webkit-line-clamp: ${e=>{var t,r;return null!==(r=null===(t=e.$maxLines)||void 0===t?void 0:t.desktop)&&void 0!==r?r:"none"}};
    ${Un.MaxWidth.lg} {
        -webkit-line-clamp: ${e=>{var t,r;return null!==(r=null===(t=e.$maxLines)||void 0===t?void 0:t.tablet)&&void 0!==r?r:"none"}};
    }
    ${Un.MaxWidth.sm} {
        -webkit-line-clamp: ${e=>{var t,r;return null!==(r=null===(t=e.$maxLines)||void 0===t?void 0:t.mobile)&&void 0!==r?r:"none"}};
    }
`,yc=x.div`
    ${Ln["body-md-regular"]}
    margin-top: 0.5rem;

    z-index: 1; // forces sublabel to render above the input
    pointer-events: none; // to allow click events to be passed to the input

    strong,
    b {
        ${Ln["body-md-semibold"]}
    }
`,vc=x.div`
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
`,xc=x.div`
    display: flex;
    height: 100%;
    width: 100%;
    position: relative;
    padding: ${e=>e.$addPadding?"0.6875rem 0rem 0.6875rem 1rem":"0.6875rem 1rem"};
`,wc=x.button`
    color: ${e=>e.$disabled?jn["text-disabled"]:jn["text-error"]};
    white-space: nowrap;
    ${Ln["body-md-semibold"]}
    height: fit-content;
    padding: 0.6875rem 1rem 0.6875rem 0.5rem;
    border: none;
    background: none;

    cursor: ${e=>e.$disabled?"not-allowed":"pointer"};
`,$c=x.button`
    color: ${e=>e.disabled?jn["text-disabled"]:jn["text-primary"]};
    ${Ln["body-baseline-semibold"]}
    display: flex;
    align-items: center;
    justify-content: flex-end;
    border: none;
    background-color: ${jn.bg};
    cursor: ${e=>e.disabled?"not-allowed":"pointer"};
    padding: 0 1rem 0.6875rem 1rem;
    padding-top: ${e=>e.$paddingTopRequired?"0.6875rem":"0rem"};
    width: 100%;

    svg {
        width: 1em;
        height: 1em;
        margin-left: 0.5rem;
    }
`,Fc=x.div`
    width: 100%;
    color: ${e=>e.$disabled?jn["text-disabled"]:jn["text-error"]};
    border: none;
    background: ${jn.bg};
    cursor: ${e=>e.$disabled?"not-allowed":"pointer"};
    padding: 0.6875rem 1rem 0.5rem 1rem;
`,Cc=x((r=>{var{type:n,className:o,children:i,actionLink:l,actionLinkIcon:d,sizeType:c="default",showIcon:u=!1,customIcon:h,maxCollapsedHeight:g}=r,m=oe(r,["type","className","children","actionLink","actionLinkIcon","sizeType","showIcon","customIcon","maxCollapsedHeight"]);const[p,f]=a(!1),[b,y]=a(!1),{height:v,ref:x}=$i();s((()=>{w()}),[g,v]);const w=()=>{f(!g),y($())},$=()=>!(!v||!g)&&v>g;return e(ec,{className:o,$type:n,$sizeType:c,"data-testid":m["data-testid"],children:[u&&t(tc,{$sizeType:c,$type:n,children:(()=>{if(n&&h)return h;switch(n){case"success":return t(z,{});case"warning":return t(B,{});case"error":return t(T,{});case"info":case"description":return t(A,{});default:return null}})()}),e(nc,{children:[e(oc,{$maxCollapsedHeight:$()?g:void 0,$showMore:p,$hasActionLink:!!l,children:[t("div",{ref:x,children:i}),l?e(rc,Object.assign({"data-testid":"action-link",$type:n,$sizeType:c},l,{children:[l.children,d||t(I,{})]})):null]}),b&&e(ic,{$sizeType:c,$type:n,type:"button",onClick:()=>f(!p),children:["Show ",p?"less":"more",t(sc,{$expanded:p})]})]})]})}))`
    width: 100%;
    user-select: none;
`,Sc=x.div`
    padding: 0 1rem;
    padding-top: 0.6875rem;
    padding-bottom: ${e=>e.$isFinalItem?"0.6875rem":"0.5rem"};
    background-color: ${jn.bg};
    ${qd({textSize:"body-md"})}

    ${e=>e.$disabled?w`
                color: ${jn["text-disabled"]};
            `:e.$selected?w`
                color: ${jn["text-selected"]};
            `:w`
                color: ${jn.text};
            `}
`,Ec=x(Kd.BodyMD)`
    color: ${e=>e.$disabled?jn["text-disabled"]:jn["text-error"]};
`,kc=x(gc)`
    color: ${e=>e.$disabled?jn["text-disabled"]:jn["text-error"]};
`,Dc=x((({type:e,active:r=!1,disabled:n,className:o})=>{let i;switch(e){case"checkbox":i=t(r?j:H,{});break;case"radio":i=t(r?_:M,{});break;case"tick":i=t(L,{});break;case"cross":i=t(R,{});break;default:i=null}return t(ac,{className:o,$active:r,$disabled:n,children:i})}))`
    ${e=>e.$disabled?e.$selected?w`
                    color: ${jn["icon-selected-disabled"]};
                `:w`
                    color: ${jn["icon-disabled-subtle"]};
                `:e.$selected?w`
                color: ${jn["icon-selected"]};
            `:w`
            color: ${jn["icon-subtle"]};
        `};
`,Ic=x.button`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: ${Nn["spacing-24"]};
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
                background-color: ${jn["bg-hover-neutral"]};
            `}
    }
`,Tc=o.forwardRef(((e,r)=>{var{children:n,focusHighlight:o=!0,focusOutline:i="none",type:s="button"}=e,a=oe(e,["children","focusHighlight","focusOutline","type"]);return t(Ic,Object.assign({ref:r,$outline:i,$highlight:o,type:s},a,{children:n}))})),Bc=x(ed.div)`
    position: absolute;
    top: calc(3rem + ${Nn["spacing-8"]});
    left: 0;
    overflow: hidden;
    z-index: 1;

    ${Un.MaxWidth.xxs} {
        max-width: 100%;
    }
`,Ac=x.div`
    position: relative;
    width: 100%;
    padding: ${Nn["spacing-8"]} ${Nn["spacing-20"]}
        ${Nn["spacing-24"]} ${Nn["spacing-20"]};
    display: flex;
    flex-direction: column;
    background: ${jn.bg};
    border: ${Wn["width-010"]} ${Wn.solid} ${jn.border};
    border-radius: ${Vn.sm};
`,zc=x.div`
    display: flex;
    align-items: center;
    justify-content: space-between;

    ${Un.MaxWidth.xxs} {
        flex-direction: column;
        width: 100%;
    }
`,Oc=x.div`
    display: flex;
    justify-content: flex-end;
    margin-top: ${Nn["spacing-16"]};
    gap: ${Nn["spacing-8"]} ${Nn["spacing-16"]};

    ${Un.MaxWidth.xxs} {
        flex-direction: column-reverse; // FIXME: this breaks tab focus
        margin-top: ${Nn["spacing-32"]};
    }
`,Mc=x.div`
    display: flex;
    align-items: center;
    margin-right: ${Nn["spacing-32"]};

    ${Un.MaxWidth.xxs} {
        margin-right: 0;
        width: 100%;
    }
`,_c=x.div`
    display: flex;
    gap: ${Nn["spacing-8"]};

    ${Un.MaxWidth.lg} {
        flex-direction: column;
    }

    ${Un.MaxWidth.xxs} {
        flex-direction: row;
        width: 100%;
    }
`,Rc=x.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    ${Un.MaxWidth.xxs} {
        width: 6rem;
    }
`,Hc=x(Tc)`
    width: 5rem;
    padding: ${Nn["spacing-16"]} 0;
    color: ${jn.icon};

    svg {
        height: 1rem;
        width: 1rem;
    }

    &:hover {
        color: ${jn["icon-hover"]};
    }
`,jc=x(Kd.BodyBL)`
    flex-shrink: 0;
    width: 1.5rem;
    text-align: center;
`,Lc=x(ho)`
    height: calc(3rem - 2px);
    width: 5rem;
    display: flex;
    align-items: center;
    justify-content: center;

    ${Un.MaxWidth.xxs} {
        width: 100%;
    }
`,Pc=x(mo)`
    text-align: center;
    width: 100%;

    :focus::placeholder {
        color: transparent;
    }
`,Wc=x((({type:n="checkbox",indicator:o,checked:l,styleType:d="default",children:c,childrenMaxLines:u,subLabel:h,disabled:g,error:m,name:p,id:b,className:y,compositeSection:v,removable:x,onRemove:w,"data-testid":$,onChange:F,useContentWidth:E})=>{const{collapsible:k=!0,errors:D,children:I,initialExpanded:T}=v||{},[B,A]=a(l),[z,O]=a(!!T),M=f((()=>{const e=Array.isArray(D)&&(null==D?void 0:D.length)>0,t=!Array.isArray(D)&&!!D;return e||t}),[D]),[_]=a(Vd.generate()),R=b?`${b}`:`tg-${_}`,H=i(null);s((()=>{A(l)}),[l]),s((()=>{B&&O(null==T||T)}),[B]);const j=()=>{g||O(!z)},L=()=>{g||!w||w()},P=()=>{let e;switch(n){case"yes":e="tick";break;case"no":e="cross";break;case"checkbox":case"radio":e=n}return t(Dc,{type:e,active:B,disabled:g,$selected:B,$disabled:g})},W=()=>{if(!h)return null;let e;return e="function"==typeof h?h():h,t(yc,{"data-id":"toggle-sublabel",children:e})},N=n=>e(r,{children:[t(Ec,{weight:"semibold",$disabled:g,children:"Error"}),t(kc,{$disabled:g,children:null==n?void 0:n.map(((e,r)=>t("li",{id:`${R}-error-list-item-${r}`,children:t(Ec,{weight:"semibold",$disabled:g,children:e})},r)))})]});return e(mc,{$selected:B,$disabled:g,className:y,$styleType:d,$error:m,$indicator:o,$useContentWidth:E,id:b,"data-testid":$,children:[e(vc,{id:`${R}-header-container`,$disabled:g,$error:m,$selected:B,$indicator:o,$styleType:d,children:[e(xc,{$addPadding:x,children:[t(pc,{ref:H,name:p,id:`${R}-input`,type:"checkbox"===n?"checkbox":"radio","data-testid":"toggle-input",disabled:g,onChange:e=>{if(!g){if(F)return void F(e);switch(n){case"checkbox":A((e=>!e));break;case"radio":case"yes":case"no":B||A(!0)}}},checked:B}),o&&P(),e(fc,{$selected:B,$disabled:g,children:[t(bc,{htmlFor:`${R}-input`,"data-testid":`${R}-toggle-label`,$maxLines:u,children:c}),h&&W()]})]}),x&&t(wc,{type:"button",$disabled:g,onClick:L,id:`${R}-remove-button`,children:"Remove"})]}),I&&e("div",{children:[(!k||z)&&t(Sc,{"data-id":"toggle-composite-children",$isFinalItem:!k,$disabled:g,children:I}),k&&!z&&M&&t(Fc,{$disabled:g,onClick:j,id:`${R}-error-alert`,children:t(Cc,{type:g?"description":"error",className:y,showIcon:!0,children:Array.isArray(D)?N(D):D})}),k&&e($c,{$paddingTopRequired:!z&&!M,disabled:g,onClick:j,"data-testid":z?"collapse-button":"expand-button",children:[z?"Show less":"Show more",t(z?S:C,{"aria-hidden":!0})]})]})]})}))`
    min-width: 5rem;
    flex: 1;
`,Nc=x(Cd.Small)`
    width: 7rem;

    ${Un.MaxWidth.sm} {
        flex: 1;
    }

    ${Un.MaxWidth.xxs} {
        width: 100%;
    }
`;var Vc,Yc,Uc;!function(e){e.HOUR_UP="hour-up",e.HOUR_DOWN="hour-down",e.MINUTE_UP="minute-up",e.MINUTE_DOWN="minute-down"}(Vc||(Vc={})),function(e){e.HOUR="hour",e.MINUTE="minute"}(Yc||(Yc={})),function(e){e.AM="am",e.PM="pm"}(Uc||(Uc={}));const qc=({id:r,value:n,show:o,format:l,onChange:d,onCancel:c})=>{var u;const h=$o.getTimeValues(l,n),[g,p]=a(h.hour),[f,b]=a(h.minute),[y,v]=a(h.period),x=i(null),w=i(null),$=$i();s((()=>{if(o&&x.current&&x.current.focus(),o){const{hour:e,minute:t,period:r}=$o.getTimeValues(l,n);p(e),b(t),v(r)}}),[o,n,l]),s((()=>{const e=x.current,t=w.current;return e&&e.addEventListener("keydown",F),t&&t.addEventListener("keydown",F),()=>{e&&e.removeEventListener("keydown",F),t&&t.removeEventListener("keydown",F)}}),[]);const F=e=>{["Digit0","Digit1","Digit2","Digit3","Digit4","Digit5","Digit6","Digit7","Digit8","Digit9","Tab","Backspace","Delete","ArrowLeft","ArrowRight","ArrowUp","ArrowDown"].includes(e.code)||["Backspace","0","1","2","3","4","5","6","7","8","9"].includes(e.key)||e.preventDefault()},E=m((e=>{switch(e.currentTarget.name){case Vc.MINUTE_UP:b($o.updateMinutes(f,"add"));break;case Vc.MINUTE_DOWN:b($o.updateMinutes(f,"minus"));break;case Vc.HOUR_UP:p($o.updateHours(g,"add"));break;case Vc.HOUR_DOWN:p($o.updateHours(g,"minus"))}}),[g,f]),k=e=>{e.target.select()},D=e=>{const t=e.target.value;switch(e.target.name){case Yc.HOUR:t.length<=2&&p(t);break;case Yc.MINUTE:t.length<=2&&b(t)}},I=e=>{const t=parseInt(e.target.value);if(!isNaN(t))switch(e.target.name){case Yc.HOUR:{const r=t>23||t<0?h.hour:$o.convertHourTo12HourFormat(e.target.value);p(r);break}case Yc.MINUTE:{const r=t>59||t<0?h.minute:e.target.value;b(xo.padValue(r));break}}},T=e=>{switch(e.target.name){case Uc.AM:v(wo.AM);break;case Uc.PM:v(wo.PM)}},B=e=>r?`${r}-${e}`:e,A=_l({opacity:o?1:0,height:o?(null!==(u=$.height)&&void 0!==u?u:0)+32+2:0});return t(Bc,{"data-testid":"animated-dropdown-wrapper",style:A,children:e(Ac,{ref:$.ref,"data-testid":B("timepicker-dropdown"),inert:o?void 0:"",children:[e(zc,{children:[e(Mc,{children:[e(Rc,{children:[t(Hc,{"aria-label":"increase hour",name:Vc.HOUR_UP,tabIndex:-1,onClick:E,"data-testid":B("hour-increment-button"),children:t(S,{})}),t(Lc,{children:t(Pc,{"aria-label":"hour",type:"number",name:Yc.HOUR,id:"hour",maxLength:2,pattern:"[0-9]{2}",ref:x,value:g,onFocus:k,onChange:D,onBlur:I,min:1,max:12,placeholder:"HH","data-testid":B("hour-input")})}),t(Hc,{"aria-label":"decrease hour",name:Vc.HOUR_DOWN,tabIndex:-1,onClick:E,"data-testid":B("hour-decrement-button"),children:t(C,{})})]}),t(jc,{children:":"}),e(Rc,{children:[t(Hc,{"aria-label":"increase minute",name:Vc.MINUTE_UP,tabIndex:-1,onClick:E,"data-testid":B("minute-increment-button"),children:t(S,{})}),t(Lc,{children:t(Pc,{"aria-label":"minute",type:"number",name:Yc.MINUTE,id:"minute",maxLength:2,pattern:"[0-9]{2}",ref:w,value:f,onChange:D,onBlur:I,onFocus:k,min:0,max:59,placeholder:"MM","data-testid":B("minute-input")})}),t(Hc,{"aria-label":"decrease minute",name:Vc.MINUTE_DOWN,tabIndex:-1,onClick:E,"data-testid":B("minute-decrement-button"),children:t(C,{})})]})]}),e(_c,{children:[t(Wc,{checked:y===wo.AM,name:Uc.AM,type:"radio",onChange:T,"data-testid":B("am-toggle"),"aria-label":"AM",children:"AM"}),t(Wc,{checked:y===wo.PM,name:Uc.PM,type:"radio",onChange:T,"data-testid":B("pm-toggle"),"aria-label":"PM",children:"PM"})]})]}),e(Oc,{children:[t(Nc,{"aria-label":"close selector",type:"button",styleType:"secondary",onClick:c,"data-testid":B("cancel-button"),children:"Cancel"}),t(Nc,{"aria-label":"confirm selection",type:"button",onClick:()=>{let e;e="24hr"===l?$o.convertTo24HourFormat({hour:g,minute:f,period:y}):`${g}:${f}${y}`,d(e)},disabled:""===g||""===f,"data-testid":B("confirm-button"),children:"Done"})]})]})})},Gc=r=>{var{id:n,disabled:o=!1,error:l,value:d,format:c="24hr",readOnly:u,onChange:h,onFocus:g,onBlur:m}=r,p=oe(r,["id","disabled","error","value","format","readOnly","onChange","onFocus","onBlur"]);const[f,b]=a(!1),[y,v]=a(!1),[x,w]=a(""),[$,F]=a(""),C=i(null);s((()=>{d&&(w(d.start),F(d.end))}),[d]),ie("mousedown",(function(e){o||D(e)}),"document"),ie("keyup",(function(e){if("Tab"===e.code)D(e)}),"document");const S=()=>{k()},E=()=>{f||y||g&&g()},k=()=>{b(!1),v(!1),m&&m()},D=e=>{C.current&&!C.current.contains(e.target)&&(y||f)&&k()};return t(fo,Object.assign({ref:C,id:n},p,{children:e(bo,{$disabled:o,$error:l,$readOnly:u,children:[e(so,{error:l,currentActive:f?"start":y?"end":"none",children:[t(yo,{onFocus:()=>{o||u||f||(v(!1),b(!0),E())},readOnly:!0,placeholder:"From",value:$o.formatDisplayValue(x,c),disabled:o,"data-testid":p["data-testid"]?`${p["data-testid"]}-timepicker-selector`:"timepicker-selector"}),t(yo,{onFocus:()=>{o||u||y||(b(!1),v(!0),E())},readOnly:!0,placeholder:"To",value:$o.formatDisplayValue($,c),disabled:o,"data-testid":p["data-testid"]?`${p["data-testid"]}-timepicker-selector`:"timepicker-selector"})]}),t(qc,{id:n,show:f,value:x,format:c,onCancel:S,onChange:e=>{b(!1),v(!0),w(e);h&&h({start:e,end:$})}}),t(qc,{id:n,show:y,value:$,format:c,onCancel:S,onChange:e=>{v(!1),F(e);h&&h({start:x,end:e}),""==x?b(!0):m&&m()}})]})}))};x.label`
    color: ${jn["text-subtle"]};
    margin-bottom: ${Nn["spacing-8"]};
    display: inline-block;

    ${Ln["form-label"]}
    ${qd()}
    font-weight: ${Ln.Spec["weight-semibold"]};
`;const Zc=x.p`
    ${Ln["body-sm-semibold"]}
    color: ${jn["text-error"]};
    margin-top: ${Nn["spacing-8"]};
    margin-bottom: 0;
    outline: none;
`;x.span`
    ${Ln["form-description"]}
    color: ${jn["text-subtler"]};
    display: block;
`,x(mo)`
    width: 100%;
    height: calc(3rem - 2px); // exclude top and bottom borders

    ${e=>"no-border"!==e.$styleType&&w`
            padding-left: ${Nn["spacing-16"]};
            padding-right: ${e.$showClear?0:Nn["spacing-16"]};
        `}
`;const Qc=x(po)`
    height: auto;
    padding: ${Nn["spacing-12"]} ${Nn["spacing-16"]};

    cursor: pointer;
    color: ${jn.icon};

    ${e=>"no-border"===e.$styleType&&w`
            margin-right: -${Nn["spacing-12"]};
        `}
`,Xc=x(R)`
    height: 1.25rem;
    width: 1.25rem;
    vertical-align: middle;
`;x.div`
    display: flex;
    width: 100%;
`,x(ho)`
    display: flex;
    align-items: center;
    width: 100%;
`;const Kc=e=>"small"===e?2.5:3;x.div`
    position: relative;
    width: 100%;
    ${e=>{const t=Kc(e.$variant);return w`
            min-height: ${t}rem;
            height: ${t}rem; // Need this to persist the height when expanding or collapsing list
        `}}
`;const Jc=w`
    display: flex;
    position: relative;
    align-items: center;
    justify-content: space-between;
    padding: 0 ${Nn["spacing-16"]};
    // exclude top and bottom borders
    height: calc(${e=>Kc(e.$variant)}rem - 2px);
    width: 100%;
    border-radius: ${Vn.sm};
    border: none;
    background: transparent;

    :focus,
    :active {
        outline: none;
    }

    :focus-visible {
        outline: 2px solid ${jn["border-focus"]};
    }
`,eu=x.button`
    ${Jc}
    cursor: pointer;
`;x.div`
    ${Jc}
`;const tu=$`
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
    border: ${Wn["width-010"]} ${Wn.solid} ${jn.border};
    border-radius: ${Vn.sm};
    background: ${jn.bg};
    overflow: hidden;

    :focus-within {
        border-color: ${jn["border-focus"]};
        box-shadow: 0px 0px 4px 0px
            rgb(from ${jn["border-focus"]} r g b / 50%) inset; // TODO: confirm shadow
    }

    ${e=>e.expanded?w`
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                z-index: 2;
            `:w`
                animation: ${tu} 0.5s ease-in-out;
            `}

    ${e=>e.disabled?w`
                background: ${jn["bg-disabled"]};

                ${eu} {
                    cursor: not-allowed;
                }

                :focus-within {
                    border-color: ${jn.border};
                    box-shadow: none;
                }
            `:e.$readOnly?w`
                border: none;
                background: transparent !important;

                ${eu} {
                    padding: 0;
                }

                :focus-within {
                    border: none;
                    box-shadow: none;
                }
            `:e.error?w`
                border-color: ${jn["border-error"]};

                :focus-within {
                    border-color: ${jn["border-error"]};
                    box-shadow: 0px 0px 4px 0px
                        rgb(from ${jn["border-error"]} r g b / 50%) inset; // TODO: confirm shadow
                }
            `:void 0}
`,x.div`
    transform: rotate(${e=>e.expanded?180:0}deg);
    transition: transform ${Pn["duration-250"]} ${Pn["ease-default"]};
    margin-left: ${Nn["spacing-16"]};
`,x(C)`
    color: ${jn.icon};
`,x.div`
    height: 1px;
    background: ${jn.border};
    margin: 0 ${Nn["spacing-8"]};
`,x.div`
    display: flex;
    flex: 1;
    word-break: break-all;
    ${e=>{if(e.$disabled)return w`
                color: ${jn["text-disabled"]};
            `}}
`;const ru=x.div`
    ${e=>"small"===e.$variant?Ln["body-md-regular"]:Ln["body-baseline-regular"]}
    text-align: left;
    ${e=>{if("middle"!==e.truncateType)return w`
                    ${Gd(1)}
                `}}
    overflow: hidden;
`;x(ru)`
    color: ${jn["text-subtler"]};
`,x.div`
    display: flex;
    position: relative;
    align-items: center;
    justify-content: space-between;
`;const nu=x(Qc)`
    position: absolute;
    right: 0;
    padding-left: ${Nn["spacing-8"]};
    margin-right: 0;
`;x(eu)`
    // space for clear icon
    padding-right: calc(1.25rem + ${Nn["spacing-16"]});
`;const ou=x.div`
    font-weight: ${e=>e.$bold?Ln.Spec["weight-semibold"]:Ln.Spec["weight-regular"]};

    ${e=>e.$disabled?w`
                color: ${jn["text-disabled"]};
            `:e.$selected?w`
                color: ${jn["text-selected"]};
            `:w`
                color: ${jn.text};
            `}
    width: 100%;

    ${e=>"end"===e.$truncateType&&Gd(e.$maxLines||2)}
    overflow-wrap: break-word;
`,iu=x.div`
    color: ${jn["text-subtlest"]};
    width: 100%;

    ${e=>"end"===e.$truncateType&&Gd(e.$maxLines||2)}
    overflow-wrap: break-word;

    ${e=>"next-line"===e.$labelDisplayType?w`
                    ${Ln["body-md-semibold"]}
                `:w`
                    ${Ln["body-baseline-regular"]}
                `}
`,su=x.span`
    font-weight: ${Ln.Spec["weight-semibold"]};
`,au=x.div`
    text-align: left;
    width: 100%;
    overflow: hidden;
    overflow-wrap: break-word;

    ${e=>"small"===e.$variant?Ln["body-md-regular"]:Ln["body-baseline-regular"]}

    ${e=>{switch(e.$labelDisplayType){case"next-line":return w`
                    display: flex;
                    flex-direction: column;
                `;case"inline":return w`
                    ${ou} {
                        display: inline;
                    }

                    ${iu} {
                        display: inline;
                        margin-left: 0.5rem;
                    }
                `}}}
`,lu=x.div`
    display: inline-block;
    width: ${e=>1===e.$maxLines?50:100}%;
    height: 1lh;
    word-break: break-all;
    overflow: hidden;
`,du=x.div`
    display: inline-block;
    width: ${e=>1===e.$maxLines?50:100}%;
    height: 1lh;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    direction: rtl;
    text-align: right;
`,cu=({bold:n,displayType:o="inline",label:i,searchTerm:s,maxLines:a=2,selected:l,disabled:d,sublabel:c,truncationType:u="middle",variant:h="default"})=>{const g=F(),p="small"===h?Ln.Spec["body-size-md"]({theme:g}):Ln.Spec["body-size-baseline"]({theme:g}),b=Ln.Spec["font-family"]({theme:g}),{ref:y,width:v}=$i(),x=m((e=>{if("inline"!==o||!v)return!1;return xo.getTextWidth(e,`${p} '${b}'`)>v*a-50}),[v,o,p,b,a]),w=f((()=>x(i)),[x,i]),$=f((()=>c&&x(c)),[x,c]),C=n=>{if(!s)return n;const o=s.toLowerCase().trim(),a=n.toLowerCase().indexOf(o),l=a+s.length;return-1===a?n:e(r,{children:[i.slice(0,a),t(su,{$variant:h,children:i.slice(a,l)}),i.slice(l)]})},S=n=>e(r,{children:[t(lu,{$maxLines:a,"aria-hidden":!0,children:C(n)}),t(du,{$maxLines:a,"aria-hidden":!0,children:C(n)})]});return e(au,{ref:y,$labelDisplayType:w||$?"next-line":o,$variant:h,children:[t(ou,{"aria-label":i,$bold:n,$maxLines:a,$selected:l,$disabled:d,$truncateType:u,children:"middle"===u&&w?S(i):C(i)}),c&&t(iu,{"aria-label":c,$maxLines:a,$truncateType:u,$labelDisplayType:o,children:"middle"===u&&$?S(c):c})]})};var uu=Wt;var hu=function(e){var t=this.__data__,r=t.delete(e);return this.size=t.size,r};var gu=function(e){return this.__data__.get(e)};var mu=function(e){return this.__data__.has(e)},pu=Wt,fu=Nt,bu=dr;var yu=function(e,t){var r=this.__data__;if(r instanceof pu){var n=r.__data__;if(!fu||n.length<199)return n.push([e,t]),this.size=++r.size,this;r=this.__data__=new bu(n)}return r.set(e,t),this.size=r.size,this},vu=Wt,xu=function(){this.__data__=new uu,this.size=0},wu=hu,$u=gu,Fu=mu,Cu=yu;function Su(e){var t=this.__data__=new vu(e);this.size=t.size}Su.prototype.clear=xu,Su.prototype.delete=wu,Su.prototype.get=$u,Su.prototype.has=Fu,Su.prototype.set=Cu;var Eu=Su;var ku=dr,Du=function(e){return this.__data__.set(e,"__lodash_hash_undefined__"),this},Iu=function(e){return this.__data__.has(e)};function Tu(e){var t=-1,r=null==e?0:e.length;for(this.__data__=new ku;++t<r;)this.add(e[t])}Tu.prototype.add=Tu.prototype.push=Du,Tu.prototype.has=Iu;var Bu=function(e,t){return e.has(t)},Au=Tu,zu=function(e,t){for(var r=-1,n=null==e?0:e.length;++r<n;)if(t(e[r],r,e))return!0;return!1},Ou=Bu;var Mu=function(e,t,r,n,o,i){var s=1&r,a=e.length,l=t.length;if(a!=l&&!(s&&l>a))return!1;var d=i.get(e),c=i.get(t);if(d&&c)return d==t&&c==e;var u=-1,h=!0,g=2&r?new Au:void 0;for(i.set(e,t),i.set(t,e);++u<a;){var m=e[u],p=t[u];if(n)var f=s?n(p,m,u,t,e,i):n(m,p,u,e,t,i);if(void 0!==f){if(f)continue;h=!1;break}if(g){if(!zu(t,(function(e,t){if(!Ou(g,t)&&(m===e||o(m,e,r,n,i)))return g.push(t)}))){h=!1;break}}else if(m!==p&&!o(m,p,r,n,i)){h=!1;break}}return i.delete(e),i.delete(t),h};var _u=function(e){var t=-1,r=Array(e.size);return e.forEach((function(e,n){r[++t]=[n,e]})),r};var Ru=he.Uint8Array,Hu=Ct,ju=Mu,Lu=_u,Pu=function(e){var t=-1,r=Array(e.size);return e.forEach((function(e){r[++t]=e})),r},Wu=ge?ge.prototype:void 0,Nu=Wu?Wu.valueOf:void 0;var Vu=function(e,t,r,n,o,i,s){switch(r){case"[object DataView]":if(e.byteLength!=t.byteLength||e.byteOffset!=t.byteOffset)return!1;e=e.buffer,t=t.buffer;case"[object ArrayBuffer]":return!(e.byteLength!=t.byteLength||!i(new Ru(e),new Ru(t)));case"[object Boolean]":case"[object Date]":case"[object Number]":return Hu(+e,+t);case"[object Error]":return e.name==t.name&&e.message==t.message;case"[object RegExp]":case"[object String]":return e==t+"";case"[object Map]":var a=Lu;case"[object Set]":var l=1&n;if(a||(a=Pu),e.size!=t.size&&!l)return!1;var d=s.get(e);if(d)return d==t;n|=2,s.set(e,t);var c=ju(a(e),a(t),n,o,i,s);return s.delete(e),c;case"[object Symbol]":if(Nu)return Nu.call(e)==Nu.call(t)}return!1};var Yu=function(e,t){for(var r=-1,n=t.length,o=e.length;++r<n;)e[o+r]=t[r];return e},Uu=Yu,qu=le;var Gu=function(e,t,r){var n=t(e);return qu(e)?n:Uu(n,r(e))};var Zu=function(e,t){for(var r=-1,n=null==e?0:e.length,o=0,i=[];++r<n;){var s=e[r];t(s,r,e)&&(i[o++]=s)}return i},Qu=function(){return[]},Xu=Object.prototype.propertyIsEnumerable,Ku=Object.getOwnPropertySymbols,Ju=Ku?function(e){return null==e?[]:(e=Object(e),Zu(Ku(e),(function(t){return Xu.call(e,t)})))}:Qu;var eh=function(e,t){for(var r=-1,n=Array(e);++r<e;)n[r]=t(r);return n},th=Ce,rh=Se;var nh=function(e){return rh(e)&&"[object Arguments]"==th(e)},oh=Se,ih=Object.prototype,sh=ih.hasOwnProperty,ah=ih.propertyIsEnumerable,lh=nh(function(){return arguments}())?nh:function(e){return oh(e)&&sh.call(e,"callee")&&!ah.call(e,"callee")},dh={exports:{}};var ch=function(){return!1};!function(e,t){var r=he,n=ch,o=t&&!t.nodeType&&t,i=o&&e&&!e.nodeType&&e,s=i&&i.exports===o?r.Buffer:void 0,a=(s?s.isBuffer:void 0)||n;e.exports=a}(dh,dh.exports);var uh=dh.exports,hh=/^(?:0|[1-9]\d*)$/;var gh=function(e,t){var r=typeof e;return!!(t=null==t?9007199254740991:t)&&("number"==r||"symbol"!=r&&hh.test(e))&&e>-1&&e%1==0&&e<t};var mh=function(e){return"number"==typeof e&&e>-1&&e%1==0&&e<=9007199254740991},ph=Ce,fh=mh,bh=Se,yh={};yh["[object Float32Array]"]=yh["[object Float64Array]"]=yh["[object Int8Array]"]=yh["[object Int16Array]"]=yh["[object Int32Array]"]=yh["[object Uint8Array]"]=yh["[object Uint8ClampedArray]"]=yh["[object Uint16Array]"]=yh["[object Uint32Array]"]=!0,yh["[object Arguments]"]=yh["[object Array]"]=yh["[object ArrayBuffer]"]=yh["[object Boolean]"]=yh["[object DataView]"]=yh["[object Date]"]=yh["[object Error]"]=yh["[object Function]"]=yh["[object Map]"]=yh["[object Number]"]=yh["[object Object]"]=yh["[object RegExp]"]=yh["[object Set]"]=yh["[object String]"]=yh["[object WeakMap]"]=!1;var vh=function(e){return bh(e)&&fh(e.length)&&!!yh[ph(e)]};var xh=function(e){return function(t){return e(t)}},wh={exports:{}};!function(e,t){var r=de,n=t&&!t.nodeType&&t,o=n&&e&&!e.nodeType&&e,i=o&&o.exports===n&&r.process,s=function(){try{var e=o&&o.require&&o.require("util").types;return e||i&&i.binding&&i.binding("util")}catch(e){}}();e.exports=s}(wh,wh.exports);var $h=wh.exports,Fh=vh,Ch=xh,Sh=$h&&$h.isTypedArray,Eh=Sh?Ch(Sh):Fh,kh=eh,Dh=lh,Ih=le,Th=uh,Bh=gh,Ah=Eh,zh=Object.prototype.hasOwnProperty;var Oh=function(e,t){var r=Ih(e),n=!r&&Dh(e),o=!r&&!n&&Th(e),i=!r&&!n&&!o&&Ah(e),s=r||n||o||i,a=s?kh(e.length,String):[],l=a.length;for(var d in e)!t&&!zh.call(e,d)||s&&("length"==d||o&&("offset"==d||"parent"==d)||i&&("buffer"==d||"byteLength"==d||"byteOffset"==d)||Bh(d,l))||a.push(d);return a},Mh=Object.prototype;var _h=function(e){var t=e&&e.constructor;return e===("function"==typeof t&&t.prototype||Mh)};var Rh=function(e,t){return function(r){return e(t(r))}}(Object.keys,Object),Hh=_h,jh=Rh,Lh=Object.prototype.hasOwnProperty;var Ph=function(e){if(!Hh(e))return jh(e);var t=[];for(var r in Object(e))Lh.call(e,r)&&"constructor"!=r&&t.push(r);return t},Wh=He,Nh=mh;var Vh=function(e){return null!=e&&Nh(e.length)&&!Wh(e)},Yh=Oh,Uh=Ph,qh=Vh;var Gh=function(e){return qh(e)?Yh(e):Uh(e)},Zh=Gu,Qh=Ju,Xh=Gh;var Kh=function(e){return Zh(e,Xh,Qh)},Jh=Object.prototype.hasOwnProperty;var eg=function(e,t,r,n,o,i){var s=1&r,a=Kh(e),l=a.length;if(l!=Kh(t).length&&!s)return!1;for(var d=l;d--;){var c=a[d];if(!(s?c in t:Jh.call(t,c)))return!1}var u=i.get(e),h=i.get(t);if(u&&h)return u==t&&h==e;var g=!0;i.set(e,t),i.set(t,e);for(var m=s;++d<l;){var p=e[c=a[d]],f=t[c];if(n)var b=s?n(f,p,c,t,e,i):n(p,f,c,e,t,i);if(!(void 0===b?p===f||o(p,f,r,n,i):b)){g=!1;break}m||(m="constructor"==c)}if(g&&!m){var y=e.constructor,v=t.constructor;y==v||!("constructor"in e)||!("constructor"in t)||"function"==typeof y&&y instanceof y&&"function"==typeof v&&v instanceof v||(g=!1)}return i.delete(e),i.delete(t),g},tg=nt(he,"DataView"),rg=Nt,ng=nt(he,"Promise"),og=nt(he,"Set"),ig=nt(he,"WeakMap"),sg=Ce,ag=Ne,lg="[object Map]",dg="[object Promise]",cg="[object Set]",ug="[object WeakMap]",hg="[object DataView]",gg=ag(tg),mg=ag(rg),pg=ag(ng),fg=ag(og),bg=ag(ig),yg=sg;(tg&&yg(new tg(new ArrayBuffer(1)))!=hg||rg&&yg(new rg)!=lg||ng&&yg(ng.resolve())!=dg||og&&yg(new og)!=cg||ig&&yg(new ig)!=ug)&&(yg=function(e){var t=sg(e),r="[object Object]"==t?e.constructor:void 0,n=r?ag(r):"";if(n)switch(n){case gg:return hg;case mg:return lg;case pg:return dg;case fg:return cg;case bg:return ug}return t});var vg=Eu,xg=Mu,wg=Vu,$g=eg,Fg=yg,Cg=le,Sg=uh,Eg=Eh,kg="[object Arguments]",Dg="[object Array]",Ig="[object Object]",Tg=Object.prototype.hasOwnProperty;var Bg=function(e,t,r,n,o,i){var s=Cg(e),a=Cg(t),l=s?Dg:Fg(e),d=a?Dg:Fg(t),c=(l=l==kg?Ig:l)==Ig,u=(d=d==kg?Ig:d)==Ig,h=l==d;if(h&&Sg(e)){if(!Sg(t))return!1;s=!0,c=!1}if(h&&!c)return i||(i=new vg),s||Eg(e)?xg(e,t,r,n,o,i):wg(e,t,l,r,n,o,i);if(!(1&r)){var g=c&&Tg.call(e,"__wrapped__"),m=u&&Tg.call(t,"__wrapped__");if(g||m){var p=g?e.value():e,f=m?t.value():t;return i||(i=new vg),o(p,f,r,n,i)}}return!!h&&(i||(i=new vg),$g(e,t,r,n,o,i))},Ag=Se;var zg=function e(t,r,n,o,i){return t===r||(null==t||null==r||!Ag(t)&&!Ag(r)?t!=t&&r!=r:Bg(t,r,n,o,e,i))},Og=Eu,Mg=zg;var _g=function(e,t,r,n){var o=r.length,i=o,s=!n;if(null==e)return!i;for(e=Object(e);o--;){var a=r[o];if(s&&a[2]?a[1]!==e[a[0]]:!(a[0]in e))return!1}for(;++o<i;){var l=(a=r[o])[0],d=e[l],c=a[1];if(s&&a[2]){if(void 0===d&&!(l in e))return!1}else{var u=new Og;if(n)var h=n(d,c,l,e,t,u);if(!(void 0===h?Mg(c,d,3,n,u):h))return!1}}return!0},Rg=Oe;var Hg=function(e){return e==e&&!Rg(e)},jg=Hg,Lg=Gh;var Pg=function(e){for(var t=Lg(e),r=t.length;r--;){var n=t[r],o=e[n];t[r]=[n,o,jg(o)]}return t};var Wg=function(e,t){return function(r){return null!=r&&(r[e]===t&&(void 0!==t||e in Object(r)))}},Ng=_g,Vg=Pg,Yg=Wg;var Ug=function(e,t){return null!=e&&t in Object(e)},qg=Dr,Gg=lh,Zg=le,Qg=gh,Xg=mh,Kg=Tr;var Jg=function(e,t,r){for(var n=-1,o=(t=qg(t,e)).length,i=!1;++n<o;){var s=Kg(t[n]);if(!(i=null!=e&&r(e,s)))break;e=e[s]}return i||++n!=o?i:!!(o=null==e?0:e.length)&&Xg(o)&&Qg(s,o)&&(Zg(e)||Gg(e))},em=Ug,tm=Jg;var rm=zg,nm=Mr,om=function(e,t){return null!=e&&tm(e,t,em)},im=ze,sm=Hg,am=Wg,lm=Tr;var dm=function(e){return function(t){return null==t?void 0:t[e]}},cm=zr;var um=dm,hm=function(e){return function(t){return cm(t,e)}},gm=ze,mm=Tr;var pm=function(e){var t=Vg(e);return 1==t.length&&t[0][2]?Yg(t[0][0],t[0][1]):function(r){return r===e||Ng(r,e,t)}},fm=function(e,t){return im(e)&&sm(t)?am(lm(e),t):function(r){var n=nm(r,e);return void 0===n&&n===t?om(r,e):rm(t,n,3)}},bm=function(e){return e},ym=le,vm=function(e){return gm(e)?um(mm(e)):hm(e)};var xm=function(e){return"function"==typeof e?e:null==e?bm:"object"==typeof e?ym(e)?fm(e[0],e[1]):pm(e):vm(e)},wm=xm,$m=Vh,Fm=Gh;var Cm=function(e){return function(t,r,n){var o=Object(t);if(!$m(t)){var i=wm(r);t=Fm(t),r=function(e){return i(o[e],e,o)}}var s=e(t,r,n);return s>-1?o[i?t[s]:s]:void 0}};var Sm=/\s/;var Em=function(e){for(var t=e.length;t--&&Sm.test(e.charAt(t)););return t},km=/^\s+/;var Dm=function(e){return e?e.slice(0,Em(e)+1).replace(km,""):e},Im=Oe,Tm=De,Bm=/^[-+]0x[0-9a-f]+$/i,Am=/^0b[01]+$/i,zm=/^0o[0-7]+$/i,Om=parseInt;var Mm=function(e){if("number"==typeof e)return e;if(Tm(e))return NaN;if(Im(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=Im(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=Dm(e);var r=Am.test(e);return r||zm.test(e)?Om(e.slice(2),r?2:8):Bm.test(e)?NaN:+e},_m=1/0;var Rm=function(e){return e?(e=Mm(e))===_m||e===-1/0?17976931348623157e292*(e<0?-1:1):e==e?e:0:0===e?e:0};var Hm=function(e,t,r,n){for(var o=e.length,i=r+(n?1:-1);n?i--:++i<o;)if(t(e[i],i,e))return i;return-1},jm=xm,Lm=function(e){var t=Rm(e),r=t%1;return t==t?r?t-r:t:0},Pm=Math.max;var Wm=ae(Cm((function(e,t,r){var n=null==e?0:e.length;if(!n)return-1;var o=null==r?0:Lm(r);return o<0&&(o=Pm(n+o,0)),Hm(e,jm(t),o)}))),Nm=zg;var Vm=ae((function(e,t){return Nm(e,t)}));function Ym(e){return()=>e}function Um(e){e()}function qm(e,t){return r=>e(t(r))}function Gm(e,t){return()=>e(t)}function Zm(e,t){return r=>e(t,r)}function Qm(e){return void 0!==e}function Xm(){}function Km(e,t){return t(e),e}function Jm(e,t){return t(e)}function ep(...e){return e}function tp(e,t){return e(1,t)}function rp(e,t){e(0,t)}function np(e){e(2)}function op(e){return e(4)}function ip(e,t){return tp(e,Zm(t,0))}function sp(e,t){const r=e(1,(e=>{r(),t(e)}));return r}function ap(e){let t,r;return n=>o=>{t=o,r&&clearTimeout(r),r=setTimeout((()=>{n(t)}),e)}}function lp(e,t){return e===t}function dp(e=lp){let t;return r=>n=>{e(t,n)||(t=n,r(n))}}function cp(e){return t=>r=>{e(r)&&t(r)}}function up(e){return t=>qm(t,e)}function hp(e){return t=>()=>{t(e)}}function gp(e,...t){const r=function(...e){return t=>e.reduceRight(Jm,t)}(...t);return(t,n)=>{switch(t){case 2:return void np(e);case 1:return tp(e,r(n))}}}function mp(e,t){return r=>n=>{r(t=e(t,n))}}function pp(e){return t=>r=>{e>0?e--:t(r)}}function fp(e){let t,r=null;return n=>o=>{r=o,!t&&(t=setTimeout((()=>{t=void 0,n(r)}),e))}}function bp(...e){const t=new Array(e.length);let r=0,n=null;const o=Math.pow(2,e.length)-1;return e.forEach(((e,i)=>{const s=Math.pow(2,i);tp(e,(e=>{const a=r;r|=s,t[i]=e,a!==o&&r===o&&n&&(n(),n=null)}))})),e=>i=>{const s=()=>{e([i].concat(t))};r===o?s():n=s}}function yp(e){let t=e;const r=xp();return(e,n)=>{switch(e){case 0:t=n;break;case 1:n(t);break;case 4:return t}return r(e,n)}}function vp(e,t){return Km(yp(t),(t=>ip(e,t)))}function xp(){const e=[];return(t,r)=>{switch(t){case 0:return void e.slice().forEach((e=>{e(r)}));case 2:return void e.splice(0,e.length);case 1:return e.push(r),()=>{const t=e.indexOf(r);t>-1&&e.splice(t,1)}}}}function wp(e){return Km(xp(),(t=>ip(e,t)))}function $p(e,t=[],{singleton:r}={singleton:!0}){return{constructor:e,dependencies:t,id:Fp(),singleton:r}}const Fp=()=>Symbol();function Cp(...e){const t=xp(),r=new Array(e.length);let n=0;const o=Math.pow(2,e.length)-1;return e.forEach(((e,i)=>{const s=Math.pow(2,i);tp(e,(e=>{r[i]=e,n|=s,n===o&&rp(t,r)}))})),function(e,i){switch(e){case 2:return void np(t);case 1:return n===o&&i(r),tp(t,i)}}}function Sp(e,t=lp){return gp(e,dp(t))}function Ep(...e){return function(t,r){switch(t){case 2:return;case 1:return function(...e){return()=>{e.map(Um)}}(...e.map((e=>tp(e,r))))}}}var kp=(e=>(e[e.DEBUG=0]="DEBUG",e[e.INFO=1]="INFO",e[e.WARN=2]="WARN",e[e.ERROR=3]="ERROR",e))(kp||{});const Dp={0:"debug",3:"error",1:"log",2:"warn"},Ip=$p((()=>{const e=yp(3);return{log:yp(((t,r,n=1)=>{var o;n>=(null!=(o=(typeof globalThis>"u"?window:globalThis).VIRTUOSO_LOG_LEVEL)?o:op(e))&&console[Dp[n]]("%creact-virtuoso: %c%s %o","color: #0253b3; font-weight: bold","color: initial",t,r)})),logLevel:e}}),[],{singleton:!0});function Tp(e,t,r){return Bp(e,t,r).callbackRef}function Bp(e,t,r){const n=o.useRef(null);let i=e=>{};if(typeof ResizeObserver<"u"){const s=o.useMemo((()=>new ResizeObserver((t=>{const n=()=>{const r=t[0].target;null!==r.offsetParent&&e(r)};r?n():requestAnimationFrame(n)}))),[e]);i=e=>{e&&t?(s.observe(e),n.current=e):(n.current&&s.unobserve(n.current),n.current=null)}}return{callbackRef:i,ref:n}}function Ap(e,t,r,n,i,s,a,l,d){const c=o.useCallback((r=>{const o=function(e,t,r,n){const o=e.length;if(0===o)return null;const i=[];for(let s=0;s<o;s++){const o=e.item(s);if(void 0===o.dataset.index)continue;const a=parseInt(o.dataset.index),l=parseFloat(o.dataset.knownSize),d=t(o,r);if(0===d&&n("Zero-sized element, this should not happen",{child:o},kp.ERROR),d===l)continue;const c=i[i.length-1];0===i.length||c.size!==d||c.endIndex!==a-1?i.push({endIndex:a,size:d,startIndex:a}):i[i.length-1].endIndex++}return i}(r.children,t,l?"offsetWidth":"offsetHeight",i);let d=r.parentElement;for(;!d.dataset.virtuosoScroller;)d=d.parentElement;const c="window"===d.lastElementChild.dataset.viewportType,u=a?l?a.scrollLeft:a.scrollTop:c?l?window.pageXOffset||document.documentElement.scrollLeft:window.pageYOffset||document.documentElement.scrollTop:l?d.scrollLeft:d.scrollTop,h=a?l?a.scrollWidth:a.scrollHeight:c?l?document.documentElement.scrollWidth:document.documentElement.scrollHeight:l?d.scrollWidth:d.scrollHeight,g=a?l?a.offsetWidth:a.offsetHeight:c?l?window.innerWidth:window.innerHeight:l?d.offsetWidth:d.offsetHeight;n({scrollHeight:h,scrollTop:Math.max(u,0),viewportHeight:g}),null==s||s(l?zp("column-gap",getComputedStyle(r).columnGap,i):zp("row-gap",getComputedStyle(r).rowGap,i)),null!==o&&e(o)}),[e,t,i,s,a,n]);return Bp(c,r,d)}function zp(e,t,r){return"normal"!==t&&!(null!=t&&t.endsWith("px"))&&r(`${e} was not resolved to pixel value correctly`,t,kp.WARN),"normal"===t?0:parseInt(null!=t?t:"0",10)}function Op(e,t,r){const n=o.useRef(null),i=o.useCallback((r=>{if(null==r||!r.offsetParent)return;const o=r.getBoundingClientRect(),i=o.width;let s,a;if(t){const e=t.getBoundingClientRect(),r=o.top-e.top;a=e.height-Math.max(0,r),s=r+t.scrollTop}else a=window.innerHeight-Math.max(0,o.top),s=o.top+window.pageYOffset;n.current={offsetTop:s,visibleHeight:a,visibleWidth:i},e(n.current)}),[e,t]),{callbackRef:s,ref:a}=Bp(i,!0,r),l=o.useCallback((()=>{i(a.current)}),[i,a]);return o.useEffect((()=>{if(t){t.addEventListener("scroll",l);const e=new ResizeObserver((()=>{requestAnimationFrame(l)}));return e.observe(t),()=>{t.removeEventListener("scroll",l),e.unobserve(t)}}return window.addEventListener("scroll",l),window.addEventListener("resize",l),()=>{window.removeEventListener("scroll",l),window.removeEventListener("resize",l)}}),[l,t]),s}const Mp=$p((()=>{const e=xp(),t=xp(),r=yp(0),n=xp(),o=yp(0),i=xp(),s=xp(),a=yp(0),l=yp(0),d=yp(0),c=yp(0),u=xp(),h=xp(),g=yp(!1),m=yp(!1),p=yp(!1);return ip(gp(e,up((({scrollTop:e})=>e))),t),ip(gp(e,up((({scrollHeight:e})=>e))),s),ip(t,o),{deviation:r,fixedFooterHeight:d,fixedHeaderHeight:l,footerHeight:c,headerHeight:a,horizontalDirection:m,scrollBy:h,scrollContainerState:e,scrollHeight:s,scrollingInProgress:g,scrollTo:u,scrollTop:t,skipAnimationFrameInResizeObserver:p,smoothScrollTargetReached:n,statefulScrollTop:o,viewportHeight:i}}),[],{singleton:!0}),_p={lvl:0};function Rp(e,t){const r=e.length;if(0===r)return[];let{index:n,value:o}=t(e[0]);const i=[];for(let s=1;s<r;s++){const{index:r,value:a}=t(e[s]);i.push({end:r-1,start:n,value:o}),n=r,o=a}return i.push({end:1/0,start:n,value:o}),i}function Hp(e){return e===_p}function jp(e,t){if(!Hp(e))return t===e.k?e.v:t<e.k?jp(e.l,t):jp(e.r,t)}function Lp(e,t,r="k"){if(Hp(e))return[-1/0,void 0];if(Number(e[r])===t)return[e.k,e.v];if(Number(e[r])<t){const n=Lp(e.r,t,r);return n[0]===-1/0?[e.k,e.v]:n}return Lp(e.l,t,r)}function Pp(e,t,r){return Hp(e)?Kp(t,r,1):t===e.k?Gp(e,{k:t,v:r}):t<e.k?Jp(Gp(e,{l:Pp(e.l,t,r)})):Jp(Gp(e,{r:Pp(e.r,t,r)}))}function Wp(){return _p}function Np(e,t,r){if(Hp(e))return[];return function(e){return Rp(e,(({k:e,v:t})=>({index:e,value:t})))}(Up(e,Lp(e,t)[0],r))}function Vp(e,t){if(Hp(e))return _p;const{k:r,l:n,r:o}=e;if(t===r){if(Hp(n))return o;if(Hp(o))return n;{const[t,r]=Xp(n);return qp(Gp(e,{k:t,l:Zp(n),v:r}))}}return qp(Gp(e,t<r?{l:Vp(n,t)}:{r:Vp(o,t)}))}function Yp(e){return Hp(e)?[]:[...Yp(e.l),{k:e.k,v:e.v},...Yp(e.r)]}function Up(e,t,r){if(Hp(e))return[];const{k:n,l:o,r:i,v:s}=e;let a=[];return n>t&&(a=a.concat(Up(o,t,r))),n>=t&&n<=r&&a.push({k:n,v:s}),n<=r&&(a=a.concat(Up(i,t,r))),a}function qp(e){const{l:t,lvl:r,r:n}=e;if(n.lvl>=r-1&&t.lvl>=r-1)return e;if(r>n.lvl+1){if(Qp(t))return ef(Gp(e,{lvl:r-1}));if(!Hp(t)&&!Hp(t.r))return Gp(t.r,{l:Gp(t,{r:t.r.l}),lvl:r,r:Gp(e,{l:t.r.r,lvl:r-1})});throw new Error("Unexpected empty nodes")}if(Qp(e))return tf(Gp(e,{lvl:r-1}));if(Hp(n)||Hp(n.l))throw new Error("Unexpected empty nodes");{const t=n.l,o=Qp(t)?n.lvl-1:n.lvl;return Gp(t,{l:Gp(e,{lvl:r-1,r:t.l}),lvl:t.lvl+1,r:tf(Gp(n,{l:t.r,lvl:o}))})}}function Gp(e,t){return Kp(void 0!==t.k?t.k:e.k,void 0!==t.v?t.v:e.v,void 0!==t.lvl?t.lvl:e.lvl,void 0!==t.l?t.l:e.l,void 0!==t.r?t.r:e.r)}function Zp(e){return Hp(e.r)?e.l:qp(Gp(e,{r:Zp(e.r)}))}function Qp(e){return Hp(e)||e.lvl>e.r.lvl}function Xp(e){return Hp(e.r)?[e.k,e.v]:Xp(e.r)}function Kp(e,t,r,n=_p,o=_p){return{k:e,l:n,lvl:r,r:o,v:t}}function Jp(e){return tf(ef(e))}function ef(e){const{l:t}=e;return Hp(t)||t.lvl!==e.lvl?e:Gp(t,{r:Gp(e,{l:t.r})})}function tf(e){const{lvl:t,r:r}=e;return Hp(r)||Hp(r.r)||r.lvl!==t||r.r.lvl!==t?e:Gp(r,{l:Gp(e,{r:r.l}),lvl:t+1})}function rf(e,t){return!(!e||e.startIndex!==t.startIndex||e.endIndex!==t.endIndex)}function nf(e,t){return!(!e||e[0]!==t[0]||e[1]!==t[1])}const of=$p((()=>({recalcInProgress:yp(!1)})),[],{singleton:!0});function sf(e,t,r){return e[af(e,t,r)]}function af(e,t,r,n=0){let o=e.length-1;for(;n<=o;){const i=Math.floor((n+o)/2),s=r(e[i],t);if(0===s)return i;if(-1===s){if(o-n<2)return i-1;o=i-1}else{if(o===n)return i;n=i+1}}throw new Error(`Failed binary finding record in array - ${e.join(",")}, searched for ${t}`)}function lf(e,t){return Math.round(e.getBoundingClientRect()[t])}function df(e){return!Hp(e.groupOffsetTree)}function cf({index:e},t){return t===e?0:t<e?-1:1}function uf({offset:e},t){return t===e?0:t<e?-1:1}function hf(e,t,r){if(0===t.length)return 0;const{index:n,offset:o,size:i}=sf(t,e,cf),s=e-n,a=i*s+(s-1)*r+o;return a>0?a+r:a}function gf(e,t){if(!df(t))return e;let r=0;for(;t.groupIndices[r]<=e+r;)r++;return e+r}function mf(e,t,r){if(function(e){return typeof e.groupIndex<"u"}(e))return t.groupIndices[e.groupIndex]+1;{let n=gf("LAST"===e.index?r:e.index,t);return n=Math.max(0,n,Math.min(r,n)),n}}function pf(e,t,r,n=0){return n>0&&(t=Math.max(t,sf(e,n,cf).offset)),Rp(function(e,t,r,n){const o=af(e,t,n),i=af(e,r,n,o);return e.slice(o,i+1)}(e,t,r,uf),vf)}function ff(e,[t,r,n,o]){t.length>0&&n("received item sizes",t,kp.DEBUG);const i=e.sizeTree;let s=i,a=0;if(r.length>0&&Hp(i)&&2===t.length){const e=t[0].size,n=t[1].size;s=r.reduce(((t,r)=>Pp(Pp(t,r,e),r+1,n)),s)}else[s,a]=function(e,t){let r=Hp(e)?0:1/0;for(const n of t){const{endIndex:t,size:o,startIndex:i}=n;if(r=Math.min(r,i),Hp(e)){e=Pp(e,0,o);continue}const s=Np(e,i-1,t+1);if(s.some(xf(n)))continue;let a=!1,l=!1;for(const{end:r,start:n,value:i}of s)a?(t>=n||o===i)&&(e=Vp(e,n)):(l=i!==o,a=!0),r>t&&t>=n&&i!==o&&(e=Pp(e,t+1,i));l&&(e=Pp(e,i,o))}return[e,r]}(s,t);if(s===i)return e;const{lastIndex:l,lastOffset:d,lastSize:c,offsetTree:u}=yf(e.offsetTree,a,s,o);return{groupIndices:r,groupOffsetTree:r.reduce(((e,t)=>Pp(e,t,hf(t,u,o))),Wp()),lastIndex:l,lastOffset:d,lastSize:c,offsetTree:u,sizeTree:s}}function bf(e,t){let r=0,n=0;for(;r<e;)r+=t[n+1]-t[n]-1,n++;return n-(r===e?0:1)}function yf(e,t,r,n){let o=e,i=0,s=0,a=0,l=0;if(0!==t){l=af(o,t-1,cf),a=o[l].offset;const e=Lp(r,t-1);i=e[0],s=e[1],o.length&&o[l].size===Lp(r,t)[1]&&(l-=1),o=o.slice(0,l+1)}else o=[];for(const{start:e,value:l}of Np(r,t,1/0)){const t=e-i,r=t*s+a+t*n;o.push({index:e,offset:r,size:l}),i=e,a=r,s=l}return{lastIndex:i,lastOffset:a,lastSize:s,offsetTree:o}}function vf(e){return{index:e.index,value:e}}function xf(e){const{endIndex:t,size:r,startIndex:n}=e;return e=>e.start===n&&(e.end===t||e.end===1/0)&&e.value===r}const wf={offsetHeight:"height",offsetWidth:"width"},$f=$p((([{log:e},{recalcInProgress:t}])=>{const r=xp(),n=xp(),o=vp(n,0),i=xp(),s=xp(),a=yp(0),l=yp([]),d=yp(void 0),c=yp(void 0),u=yp(((e,t)=>lf(e,wf[t]))),h=yp(void 0),g=yp(0),m={groupIndices:[],groupOffsetTree:Wp(),lastIndex:0,lastOffset:0,lastSize:0,offsetTree:[],sizeTree:Wp()},p=vp(gp(r,bp(l,e,g),mp(ff,m),dp()),m),f=vp(gp(l,dp(),mp(((e,t)=>({current:t,prev:e.current})),{current:[],prev:[]}),up((({prev:e})=>e))),[]);ip(gp(l,cp((e=>e.length>0)),bp(p,g),up((([e,t,r])=>{const n=e.reduce(((e,n,o)=>Pp(e,n,hf(n,t.offsetTree,r)||o)),Wp());return{...t,groupIndices:e,groupOffsetTree:n}}))),p),ip(gp(n,bp(p),cp((([e,{lastIndex:t}])=>e<t)),up((([e,{lastIndex:t,lastSize:r}])=>[{endIndex:t,size:r,startIndex:e}]))),r),ip(d,c);const b=vp(gp(d,up((e=>void 0===e))),!0);ip(gp(c,cp((e=>void 0!==e&&Hp(op(p).sizeTree))),up((e=>[{endIndex:0,size:e,startIndex:0}]))),r);const y=wp(gp(r,bp(p),mp((({sizes:e},[t,r])=>({changed:r!==e,sizes:r})),{changed:!1,sizes:m}),up((e=>e.changed))));tp(gp(a,mp(((e,t)=>({diff:e.prev-t,prev:t})),{diff:0,prev:0}),up((e=>e.diff))),(e=>{const{groupIndices:r}=op(p);if(e>0)rp(t,!0),rp(i,e+bf(e,r));else if(e<0){const t=op(f);t.length>0&&(e-=bf(-e,t)),rp(s,e)}})),tp(gp(a,bp(e)),(([e,t])=>{e<0&&t("`firstItemIndex` prop should not be set to less than zero. If you don't know the total count, just use a very high value",{firstItemIndex:a},kp.ERROR)}));const v=wp(i);ip(gp(i,bp(p),up((([e,t])=>{const r=t.groupIndices.length>0,n=[],o=t.lastSize;if(r){const r=jp(t.sizeTree,0);let i=0,s=0;for(;i<e;){const e=t.groupIndices[s],a=t.groupIndices.length===s+1?1/0:t.groupIndices[s+1]-e-1;n.push({endIndex:e,size:r,startIndex:e}),n.push({endIndex:e+1+a-1,size:o,startIndex:e+1}),s++,i+=a+1}const a=Yp(t.sizeTree);return i!==e&&a.shift(),a.reduce(((t,{k:r,v:n})=>{let o=t.ranges;return 0!==t.prevSize&&(o=[...t.ranges,{endIndex:r+e-1,size:t.prevSize,startIndex:t.prevIndex}]),{prevIndex:r+e,prevSize:n,ranges:o}}),{prevIndex:e,prevSize:0,ranges:n}).ranges}return Yp(t.sizeTree).reduce(((t,{k:r,v:n})=>({prevIndex:r+e,prevSize:n,ranges:[...t.ranges,{endIndex:r+e-1,size:t.prevSize,startIndex:t.prevIndex}]})),{prevIndex:0,prevSize:o,ranges:[]}).ranges}))),r);const x=wp(gp(s,bp(p,g),up((([e,{offsetTree:t},r])=>hf(-e,t,r)))));return ip(gp(s,bp(p,g),up((([e,t,r])=>{if(t.groupIndices.length>0){if(Hp(t.sizeTree))return t;let n=Wp();const o=op(f);let i=0,s=0,a=0;for(;i<-e;){a=o[s];const e=o[s+1]-a-1;s++,i+=e+1}if(n=Yp(t.sizeTree).reduce(((t,{k:r,v:n})=>Pp(t,Math.max(0,r+e),n)),n),i!==-e){n=Pp(n,0,jp(t.sizeTree,a));n=Pp(n,1,Lp(t.sizeTree,1-e)[1])}return{...t,sizeTree:n,...yf(t.offsetTree,0,n,r)}}{const n=Yp(t.sizeTree).reduce(((t,{k:r,v:n})=>Pp(t,Math.max(0,r+e),n)),Wp());return{...t,sizeTree:n,...yf(t.offsetTree,0,n,r)}}}))),p),{beforeUnshiftWith:v,data:h,defaultItemSize:c,firstItemIndex:a,fixedItemSize:d,gap:g,groupIndices:l,itemSize:u,listRefresh:y,shiftWith:s,shiftWithOffset:x,sizeRanges:r,sizes:p,statefulTotalCount:o,totalCount:n,trackItemSizes:b,unshiftWith:i}}),ep(Ip,of),{singleton:!0});function Ff(e){return e.reduce(((e,t)=>(e.groupIndices.push(e.totalCount),e.totalCount+=t+1,e)),{groupIndices:[],totalCount:0})}const Cf=$p((([{groupIndices:e,sizes:t,totalCount:r},{headerHeight:n,scrollTop:o}])=>{const i=xp(),s=xp(),a=wp(gp(i,up(Ff)));return ip(gp(a,up((e=>e.totalCount))),r),ip(gp(a,up((e=>e.groupIndices))),e),ip(gp(Cp(o,t,n),cp((([e,t])=>df(t))),up((([e,t,r])=>Lp(t.groupOffsetTree,Math.max(e-r,0),"v")[0])),dp(),up((e=>[e]))),s),{groupCounts:i,topItemsIndexes:s}}),ep($f,Mp)),Sf=$p((([{log:e}])=>{const t=yp(!1),r=wp(gp(t,cp((e=>e)),dp()));return tp(t,(t=>{t&&op(e)("props updated",{},kp.DEBUG)})),{didMount:r,propsReady:t}}),ep(Ip),{singleton:!0}),Ef=typeof document<"u"&&"scrollBehavior"in document.documentElement.style;function kf(e){const t="number"==typeof e?{index:e}:e;return t.align||(t.align="start"),(!t.behavior||!Ef)&&(t.behavior="auto"),t.offset||(t.offset=0),t}const Df=$p((([{gap:e,listRefresh:t,sizes:r,totalCount:n},{fixedFooterHeight:o,fixedHeaderHeight:i,footerHeight:s,headerHeight:a,scrollingInProgress:l,scrollTo:d,smoothScrollTargetReached:c,viewportHeight:u},{log:h}])=>{const g=xp(),m=xp(),p=yp(0);let f=null,b=null,y=null;function v(){f&&(f(),f=null),y&&(y(),y=null),b&&(clearTimeout(b),b=null),rp(l,!1)}return ip(gp(g,bp(r,u,n,p,a,s,h),bp(e,i,o),up((([[e,r,n,o,i,s,a,d],u,h,p])=>{const x=kf(e),{align:w,behavior:$,offset:F}=x,C=o-1,S=mf(x,r,C);let E=hf(S,r.offsetTree,u)+s;"end"===w?(E+=h+Lp(r.sizeTree,S)[1]-n+p,S===C&&(E+=a)):"center"===w?E+=(h+Lp(r.sizeTree,S)[1]-n+p)/2:E-=i,F&&(E+=F);const k=t=>{v(),t?(d("retrying to scroll to",{location:e},kp.DEBUG),rp(g,e)):(rp(m,!0),d("list did not change, scroll successful",{},kp.DEBUG))};if(v(),"smooth"===$){let e=!1;y=tp(t,(t=>{e=e||t})),f=sp(c,(()=>{k(e)}))}else f=sp(gp(t,function(e){return t=>{const r=setTimeout((()=>{t(!1)}),e);return e=>{e&&(t(!0),clearTimeout(r))}}}(150)),k);return b=setTimeout((()=>{v()}),1200),rp(l,!0),d("scrolling from index to",{behavior:$,index:S,top:E},kp.DEBUG),{behavior:$,top:E}}))),d),{scrollTargetReached:m,scrollToIndex:g,topListHeight:p}}),ep($f,Mp,Ip),{singleton:!0});function If(e,t){0==e?t():requestAnimationFrame((()=>{If(e-1,t)}))}function Tf(e,t){const r=t-1;return"number"==typeof e?e:"LAST"===e.index?r:e.index}const Bf=$p((([{defaultItemSize:e,listRefresh:t,sizes:r},{scrollTop:n},{scrollTargetReached:o,scrollToIndex:i},{didMount:s}])=>{const a=yp(!0),l=yp(0),d=yp(!0);return ip(gp(s,bp(l),cp((([e,t])=>!!t)),hp(!1)),a),ip(gp(s,bp(l),cp((([e,t])=>!!t)),hp(!1)),d),tp(gp(Cp(t,s),bp(a,r,e,d),cp((([[,e],t,{sizeTree:r},n,o])=>e&&(!Hp(r)||Qm(n))&&!t&&!o)),bp(l)),(([,e])=>{sp(o,(()=>{rp(d,!0)})),If(4,(()=>{sp(n,(()=>{rp(a,!0)})),rp(i,e)}))})),{initialItemFinalLocationReached:d,initialTopMostItemIndex:l,scrolledToInitialItem:a}}),ep($f,Mp,Df,Sf),{singleton:!0});function Af(e,t){return Math.abs(e-t)<1.01}const zf="up",Of="down",Mf={atBottom:!1,notAtBottomBecause:"NOT_SHOWING_LAST_ITEM",state:{offsetBottom:0,scrollHeight:0,scrollTop:0,viewportHeight:0}},_f=$p((([{footerHeight:e,headerHeight:t,scrollBy:r,scrollContainerState:n,scrollTop:o,viewportHeight:i}])=>{const s=yp(!1),a=yp(!0),l=xp(),d=xp(),c=yp(4),u=yp(0),h=vp(gp(Ep(gp(Sp(o),pp(1),hp(!0)),gp(Sp(o),pp(1),hp(!1),ap(100))),dp()),!1),g=vp(gp(Ep(gp(r,hp(!0)),gp(r,hp(!1),ap(200))),dp()),!1);ip(gp(Cp(Sp(o),Sp(u)),up((([e,t])=>e<=t)),dp()),a),ip(gp(a,fp(50)),d);const m=wp(gp(Cp(n,Sp(i),Sp(t),Sp(e),Sp(c)),mp(((e,[{scrollHeight:t,scrollTop:r},n,o,i,s])=>{const a={scrollHeight:t,scrollTop:r,viewportHeight:n};if(r+n-t>-s){let t,n;return r>e.state.scrollTop?(t="SCROLLED_DOWN",n=e.state.scrollTop-r):(t="SIZE_DECREASED",n=e.state.scrollTop-r||e.scrollTopDelta),{atBottom:!0,atBottomBecause:t,scrollTopDelta:n,state:a}}let l;return l=a.scrollHeight>e.state.scrollHeight?"SIZE_INCREASED":n<e.state.viewportHeight?"VIEWPORT_HEIGHT_DECREASING":r<e.state.scrollTop?"SCROLLING_UPWARDS":"NOT_FULLY_SCROLLED_TO_LAST_ITEM_BOTTOM",{atBottom:!1,notAtBottomBecause:l,state:a}}),Mf),dp(((e,t)=>e&&e.atBottom===t.atBottom)))),p=vp(gp(n,mp(((e,{scrollHeight:t,scrollTop:r,viewportHeight:n})=>{if(Af(e.scrollHeight,t))return{changed:!1,jump:0,scrollHeight:t,scrollTop:r};{const o=t-(r+n)<1;return e.scrollTop!==r&&o?{changed:!0,jump:e.scrollTop-r,scrollHeight:t,scrollTop:r}:{changed:!0,jump:0,scrollHeight:t,scrollTop:r}}}),{changed:!1,jump:0,scrollHeight:0,scrollTop:0}),cp((e=>e.changed)),up((e=>e.jump))),0);ip(gp(m,up((e=>e.atBottom))),s),ip(gp(s,fp(50)),l);const f=yp(Of);ip(gp(n,up((({scrollTop:e})=>e)),dp(),mp(((e,t)=>op(g)?{direction:e.direction,prevScrollTop:t}:{direction:t<e.prevScrollTop?zf:Of,prevScrollTop:t}),{direction:Of,prevScrollTop:0}),up((e=>e.direction))),f),ip(gp(n,fp(50),hp("none")),f);const b=yp(0);return ip(gp(h,cp((e=>!e)),hp(0)),b),ip(gp(o,fp(100),bp(h),cp((([e,t])=>!!t)),mp((([e,t],[r])=>[t,r]),[0,0]),up((([e,t])=>t-e))),b),{atBottomState:m,atBottomStateChange:l,atBottomThreshold:c,atTopStateChange:d,atTopThreshold:u,isAtBottom:s,isAtTop:a,isScrolling:h,lastJumpDueToItemResize:p,scrollDirection:f,scrollVelocity:b}}),ep(Mp)),Rf="top",Hf="bottom",jf="none";function Lf(e,t,r){return"number"==typeof e?r===zf&&t===Rf||r===Of&&t===Hf?e:0:r===zf?t===Rf?e.main:e.reverse:t===Hf?e.main:e.reverse}function Pf(e,t){var r;return"number"==typeof e?e:null!=(r=e[t])?r:0}const Wf=$p((([{deviation:e,fixedHeaderHeight:t,headerHeight:r,scrollTop:n,viewportHeight:o}])=>{const i=xp(),s=yp(0),a=yp(0),l=yp(0);return{increaseViewportBy:a,listBoundary:i,overscan:l,topListHeight:s,visibleRange:vp(gp(Cp(Sp(n),Sp(o),Sp(r),Sp(i,nf),Sp(l),Sp(s),Sp(t),Sp(e),Sp(a)),up((([e,t,r,[n,o],i,s,a,l,d])=>{const c=e-l,u=s+a,h=Math.max(r-c,0);let g=jf;const m=Pf(d,Rf),p=Pf(d,Hf);return n-=l,o+=r+a,(n+=r+a)>e+u-m&&(g=zf),(o-=l)<e-h+t+p&&(g=Of),g!==jf?[Math.max(c-r-Lf(i,Rf,g)-m,0),c-h-a+t+Lf(i,Hf,g)+p]:null})),cp((e=>null!=e)),dp(nf)),[0,0])}}),ep(Mp),{singleton:!0});const Nf={bottom:0,firstItemIndex:0,items:[],offsetBottom:0,offsetTop:0,top:0,topItems:[],topListHeight:0,totalCount:0};function Vf(e,t,r,n,o,i){const{lastIndex:s,lastOffset:a,lastSize:l}=o;let d=0,c=0;if(e.length>0){d=e[0].offset;const t=e[e.length-1];c=t.offset+t.size}const u=r-s,h=d,g=a+u*l+(u-1)*n-c;return{bottom:c,firstItemIndex:i,items:Uf(e,o,i),offsetBottom:g,offsetTop:d,top:h,topItems:Uf(t,o,i),topListHeight:t.reduce(((e,t)=>t.size+e),0),totalCount:r}}function Yf(e,t,r,n,o,i){let s=0;if(r.groupIndices.length>0)for(const t of r.groupIndices){if(t-s>=e)break;s++}const a=e+s,l=Tf(t,a);return Vf(Array.from({length:a}).map(((e,t)=>({data:i[t+l],index:t+l,offset:0,size:0}))),[],a,o,r,n)}function Uf(e,t,r){if(0===e.length)return[];if(!df(t))return e.map((e=>({...e,index:e.index+r,originalIndex:e.index})));const n=e[0].index,o=e[e.length-1].index,i=[],s=Np(t.groupOffsetTree,n,o);let a,l=0;for(const n of e){let e;(!a||a.end<n.index)&&(a=s.shift(),l=t.groupIndices.indexOf(a.start)),e=n.index===a.start?{index:l,type:"group"}:{groupIndex:l,index:n.index-(l+1)+r},i.push({...e,data:n.data,offset:n.offset,originalIndex:n.index,size:n.size})}return i}const qf=$p((([{data:e,firstItemIndex:t,gap:r,sizes:n,totalCount:o},i,{listBoundary:s,topListHeight:a,visibleRange:l},{initialTopMostItemIndex:d,scrolledToInitialItem:c},{topListHeight:u},h,{didMount:g},{recalcInProgress:m}])=>{const p=yp([]),f=yp(0),b=xp();ip(i.topItemsIndexes,p);const y=vp(gp(Cp(g,m,Sp(l,nf),Sp(o),Sp(n),Sp(d),c,Sp(p),Sp(t),Sp(r),e),cp((([e,t,,r,,,,,,,n])=>{const o=n&&n.length!==r;return e&&!t&&!o})),up((([,,[e,t],r,n,o,i,s,a,l,d])=>{const c=n,{offsetTree:u,sizeTree:h}=c,g=op(f);if(0===r)return{...Nf,totalCount:r};if(0===e&&0===t)return 0===g?{...Nf,totalCount:r}:Yf(g,o,n,a,l,d||[]);if(Hp(h))return g>0?null:Vf(function(e,t,r){if(df(t)){const n=gf(e,t);return[{index:Lp(t.groupOffsetTree,n)[0],offset:0,size:0},{data:null==r?void 0:r[0],index:n,offset:0,size:0}]}return[{data:null==r?void 0:r[0],index:e,offset:0,size:0}]}(Tf(o,r),c,d),[],r,l,c,a);const m=[];if(s.length>0){const e=s[0],t=s[s.length-1];let r=0;for(const n of Np(h,e,t)){const o=n.value,i=Math.max(n.start,e),s=Math.min(n.end,t);for(let e=i;e<=s;e++)m.push({data:null==d?void 0:d[e],index:e,offset:r,size:o}),r+=o}}if(!i)return Vf([],m,r,l,c,a);const p=s.length>0?s[s.length-1]+1:0,b=pf(u,e,t,p);if(0===b.length)return null;const y=r-1;return Vf(Km([],(r=>{for(const n of b){const o=n.value;let i=o.offset,s=n.start;const a=o.size;if(o.offset<e){s+=Math.floor((e-o.offset+l)/(a+l));const t=s-n.start;i+=t*a+t*l}s<p&&(i+=(p-s)*a,s=p);const c=Math.min(n.end,y);for(let e=s;e<=c&&!(i>=t);e++)r.push({data:null==d?void 0:d[e],index:e,offset:i,size:a}),i+=a+l}})),m,r,l,c,a)})),cp((e=>null!==e)),dp()),Nf);ip(gp(e,cp(Qm),up((e=>null==e?void 0:e.length))),o),ip(gp(y,up((e=>e.topListHeight))),u),ip(u,a),ip(gp(y,up((e=>[e.top,e.bottom]))),s),ip(gp(y,up((e=>e.items))),b);const v=wp(gp(y,cp((({items:e})=>e.length>0)),bp(o,e),cp((([{items:e},t])=>e[e.length-1].originalIndex===t-1)),up((([,e,t])=>[e-1,t])),dp(nf),up((([e])=>e)))),x=wp(gp(y,fp(200),cp((({items:e,topItems:t})=>e.length>0&&e[0].originalIndex===t.length)),up((({items:e})=>e[0].index)),dp())),w=wp(gp(y,cp((({items:e})=>e.length>0)),up((({items:e})=>{let t=0,r=e.length-1;for(;"group"===e[t].type&&t<r;)t++;for(;"group"===e[r].type&&r>t;)r--;return{endIndex:e[r].index,startIndex:e[t].index}})),dp(rf)));return{endReached:v,initialItemCount:f,itemsRendered:b,listState:y,rangeChanged:w,startReached:x,topItemsIndexes:p,...h}}),ep($f,Cf,Wf,Bf,Df,_f,Sf,of),{singleton:!0}),Gf=$p((([{fixedFooterHeight:e,fixedHeaderHeight:t,footerHeight:r,headerHeight:n},{listState:o}])=>{const i=xp(),s=vp(gp(Cp(r,e,n,t,o),up((([e,t,r,n,o])=>e+t+r+n+o.offsetBottom+o.bottom))),0);return ip(Sp(s),i),{totalListHeight:s,totalListHeightChanged:i}}),ep(Mp,qf),{singleton:!0}),Zf=$p((([{viewportHeight:e},{totalListHeight:t}])=>{const r=yp(!1);return{alignToBottom:r,paddingTopAddition:vp(gp(Cp(r,e,t),cp((([e])=>e)),up((([,e,t])=>Math.max(0,e-t))),fp(0),dp()),0)}}),ep(Mp,Gf),{singleton:!0});function Qf(e){return!!e&&("smooth"===e?"smooth":"auto")}const Xf=$p((([{listRefresh:e,totalCount:t},{atBottomState:r,isAtBottom:n},{scrollToIndex:o},{scrolledToInitialItem:i},{didMount:s,propsReady:a},{log:l},{scrollingInProgress:d}])=>{const c=yp(!1),u=xp();let h=null;function g(e){rp(o,{align:"end",behavior:e,index:"LAST"})}function m(e){const t=sp(r,(t=>{e&&!t.atBottom&&"SIZE_INCREASED"===t.notAtBottomBecause&&!h&&(op(l)("scrolling to bottom due to increased size",{},kp.DEBUG),g("auto"))}));setTimeout(t,100)}return tp(gp(Cp(gp(Sp(t),pp(1)),s),bp(Sp(c),n,i,d),up((([[e,t],r,n,o,i])=>{let s=t&&o,a="auto";return s&&(a=((e,t)=>"function"==typeof e?Qf(e(t)):t&&Qf(e))(r,n||i),s=s&&!!a),{followOutputBehavior:a,shouldFollow:s,totalCount:e}})),cp((({shouldFollow:e})=>e))),(({followOutputBehavior:t,totalCount:r})=>{h&&(h(),h=null),h=sp(e,(()=>{op(l)("following output to ",{totalCount:r},kp.DEBUG),g(t),h=null}))})),tp(gp(Cp(Sp(c),t,a),cp((([e,,t])=>e&&t)),mp((({value:e},[,t])=>({refreshed:e===t,value:t})),{refreshed:!1,value:0}),cp((({refreshed:e})=>e)),bp(c,t)),(([,e])=>{op(i)&&m(!1!==e)})),tp(u,(()=>{m(!1!==op(c))})),tp(Cp(Sp(c),r),(([e,t])=>{e&&!t.atBottom&&"VIEWPORT_HEIGHT_DECREASING"===t.notAtBottomBecause&&g("auto")})),{autoscrollToBottom:u,followOutput:c}}),ep($f,_f,Df,Bf,Sf,Ip,Mp)),Kf=$p((([{data:e,firstItemIndex:t,gap:r,sizes:n},{initialTopMostItemIndex:o},{initialItemCount:i,listState:s},{didMount:a}])=>(ip(gp(a,bp(i),cp((([,e])=>0!==e)),bp(o,n,t,r,e),up((([[,e],t,r,n,o,i=[]])=>Yf(e,t,r,n,o,i)))),s),{})),ep($f,Bf,qf,Sf),{singleton:!0}),Jf=$p((([{didMount:e},{scrollTo:t},{listState:r}])=>{const n=yp(0);return tp(gp(e,bp(n),cp((([,e])=>0!==e)),up((([,e])=>({top:e})))),(e=>{sp(gp(r,pp(1),cp((e=>e.items.length>1))),(()=>{requestAnimationFrame((()=>{rp(t,e)}))}))})),{initialScrollTop:n}}),ep(Sf,Mp,qf),{singleton:!0}),eb=({itemBottom:e,itemTop:t,locationParams:{align:r,behavior:n,...o},viewportBottom:i,viewportTop:s})=>t<s?{...o,align:null!=r?r:"start",behavior:n}:e>i?{...o,align:null!=r?r:"end",behavior:n}:null,tb=$p((([{gap:e,sizes:t,totalCount:r},{fixedFooterHeight:n,fixedHeaderHeight:o,headerHeight:i,scrollingInProgress:s,scrollTop:a,viewportHeight:l},{scrollToIndex:d}])=>{const c=xp();return ip(gp(c,bp(t,l,r,i,o,n,a),bp(e),up((([[e,t,r,n,o,i,a,l],d])=>{const{align:c,behavior:u,calculateViewLocation:h=eb,done:g,...m}=e,p=mf(e,t,n-1),f=hf(p,t.offsetTree,d)+o+i,b=h({itemBottom:f+Lp(t.sizeTree,p)[1],itemTop:f,locationParams:{align:c,behavior:u,...m},viewportBottom:l+r-a,viewportTop:l+i});return b?g&&sp(gp(s,cp((e=>!e)),pp(op(s)?1:2)),g):g&&g(),b})),cp((e=>null!==e))),d),{scrollIntoView:c}}),ep($f,Mp,Df,qf,Ip),{singleton:!0}),rb=$p((([{scrollVelocity:e}])=>{const t=yp(!1),r=xp(),n=yp(!1);return ip(gp(e,bp(n,t,r),cp((([e,t])=>!!t)),up((([e,t,r,n])=>{const{enter:o,exit:i}=t;if(r){if(i(e,n))return!1}else if(o(e,n))return!0;return r})),dp()),t),tp(gp(Cp(t,e,r),bp(n)),(([[e,t,r],n])=>{e&&n&&n.change&&n.change(t,r)})),{isSeeking:t,scrollSeekConfiguration:n,scrollSeekRangeChanged:r,scrollVelocity:e}}),ep(_f),{singleton:!0}),nb=$p((([{scrollContainerState:e,scrollTo:t}])=>{const r=xp(),n=xp(),o=xp(),i=yp(!1),s=yp(void 0);return ip(gp(Cp(r,n),up((([{scrollHeight:e,scrollTop:t,viewportHeight:r},{offsetTop:n}])=>({scrollHeight:e,scrollTop:Math.max(0,t-n),viewportHeight:r})))),e),ip(gp(t,bp(n),up((([e,{offsetTop:t}])=>({...e,top:e.top+t})))),o),{customScrollParent:s,useWindowScroll:i,windowScrollContainerState:r,windowScrollTo:o,windowViewportRect:n}}),ep(Mp)),ob=$p((([{sizeRanges:e,sizes:t},{headerHeight:r,scrollTop:n},{initialTopMostItemIndex:o},{didMount:i},{useWindowScroll:s,windowScrollContainerState:a,windowViewportRect:l}])=>{const d=xp(),c=yp(void 0),u=yp(null),h=yp(null);return ip(a,u),ip(l,h),tp(gp(d,bp(t,n,s,u,h,r)),(([e,t,r,n,o,i,s])=>{const a=function(e){return Yp(e).map((({k:e,v:t},r,n)=>{const o=n[r+1];return{endIndex:o?o.k-1:1/0,size:t,startIndex:e}}))}(t.sizeTree);n&&null!==o&&null!==i&&(r=o.scrollTop-i.offsetTop),e({ranges:a,scrollTop:r-=s})})),ip(gp(c,cp(Qm),up(ib)),o),ip(gp(i,bp(c),cp((([,e])=>void 0!==e)),dp(),up((([,e])=>e.ranges))),e),{getState:d,restoreStateFrom:c}}),ep($f,Mp,Bf,Sf,nb));function ib(e){return{align:"start",index:0,offset:e.scrollTop}}const sb=$p((([{topItemsIndexes:e}])=>{const t=yp(0);return ip(gp(t,cp((e=>e>=0)),up((e=>Array.from({length:e}).map(((e,t)=>t))))),e),{topItemCount:t}}),ep(qf));function ab(e){let t,r=!1;return()=>(r||(r=!0,t=e()),t)}const lb=ab((()=>/iP(ad|od|hone)/i.test(navigator.userAgent)&&/WebKit/i.test(navigator.userAgent))),db=$p((([{deviation:e,scrollBy:t,scrollingInProgress:r,scrollTop:n},{isAtBottom:o,isScrolling:i,lastJumpDueToItemResize:s,scrollDirection:a},{listState:l},{beforeUnshiftWith:d,gap:c,shiftWithOffset:u,sizes:h},{log:g},{recalcInProgress:m}])=>{const p=wp(gp(l,bp(s),mp((([,e,t,r],[{bottom:n,items:o,offsetBottom:i,totalCount:s},a])=>{const l=n+i;let d=0;return t===s&&e.length>0&&o.length>0&&(0===o[0].originalIndex&&0===e[0].originalIndex||(d=l-r,0!==d&&(d+=a))),[d,o,s,l]}),[0,[],0,0]),cp((([e])=>0!==e)),bp(n,a,r,o,g,m),cp((([,e,t,r,,,n])=>!n&&!r&&0!==e&&t===zf)),up((([[e],,,,,t])=>(t("Upward scrolling compensation",{amount:e},kp.DEBUG),e)))));function f(r){r>0?(rp(t,{behavior:"auto",top:-r}),rp(e,0)):(rp(e,0),rp(t,{behavior:"auto",top:-r}))}return tp(gp(p,bp(e,i)),(([t,r,n])=>{n&&lb()?rp(e,r-t):f(-t)})),tp(gp(Cp(vp(i,!1),e,m),cp((([e,t,r])=>!e&&!r&&0!==t)),up((([e,t])=>t)),fp(1)),f),ip(gp(u,up((e=>({top:-e})))),t),tp(gp(d,bp(h,c),up((([e,{groupIndices:t,lastSize:r,sizeTree:n},o])=>{function i(e){return e*(r+o)}if(0===t.length)return i(e);{let r=0;const o=jp(n,0);let s=0,a=0;for(;s<e;){s++,r+=o;let n=t.length===a+1?1/0:t[a+1]-t[a]-1;s+n>e&&(r-=o,n=e-s+1),s+=n,r+=i(n),a++}return r}}))),(r=>{rp(e,r),requestAnimationFrame((()=>{rp(t,{top:r}),requestAnimationFrame((()=>{rp(e,0),rp(m,!1)}))}))})),{deviation:e}}),ep(Mp,_f,qf,$f,Ip,of)),cb=$p((([e,t,r,n,o,i,s,a,l,d])=>({...e,...t,...r,...n,...o,...i,...s,...a,...l,...d})),ep(Wf,Kf,Sf,rb,Gf,Jf,Zf,nb,tb,Ip)),ub=$p((([{data:e,defaultItemSize:t,firstItemIndex:r,fixedItemSize:n,gap:o,groupIndices:i,itemSize:s,sizeRanges:a,sizes:l,statefulTotalCount:d,totalCount:c,trackItemSizes:u},{initialItemFinalLocationReached:h,initialTopMostItemIndex:g,scrolledToInitialItem:m},p,f,b,{listState:y,topItemsIndexes:v,...x},{scrollToIndex:w},$,{topItemCount:F},{groupCounts:C},S])=>(ip(x.rangeChanged,S.scrollSeekRangeChanged),ip(gp(S.windowViewportRect,up((e=>e.visibleHeight))),p.viewportHeight),{data:e,defaultItemHeight:t,firstItemIndex:r,fixedItemHeight:n,gap:o,groupCounts:C,initialItemFinalLocationReached:h,initialTopMostItemIndex:g,scrolledToInitialItem:m,sizeRanges:a,topItemCount:F,topItemsIndexes:v,totalCount:c,...b,groupIndices:i,itemSize:s,listState:y,scrollToIndex:w,statefulTotalCount:d,trackItemSizes:u,...x,...S,...p,sizes:l,...f})),ep($f,Bf,Mp,ob,Xf,qf,Df,db,sb,Cf,cb));function hb(e,t){const r={},n={};let o=0;const i=e.length;for(;o<i;)n[e[o]]=1,o+=1;for(const e in t)Object.hasOwn(n,e)||(r[e]=t[e]);return r}const gb=typeof document<"u"?o.useLayoutEffect:o.useEffect;function mb(e,r,n){const i=Object.keys(r.required||{}),s=Object.keys(r.optional||{}),a=Object.keys(r.methods||{}),l=Object.keys(r.events||{}),d=o.createContext({});function c(e,t){e.propsReady&&rp(e.propsReady,!1);for(const n of i){rp(e[r.required[n]],t[n])}for(const n of s)if(n in t){rp(e[r.optional[n]],t[n])}e.propsReady&&rp(e.propsReady,!0)}function u(e){return l.reduce(((t,n)=>(t[n]=function(e){let t,r;const n=()=>null==t?void 0:t();return function(o,i){switch(o){case 1:return i?r===i?void 0:(n(),r=i,t=tp(e,i),t):(n(),Xm);case 2:return n(),void(r=null)}}}(e[r.events[n]]),t)),{})}const h=o.forwardRef(((h,g)=>{const{children:m,...p}=h,[f]=o.useState((()=>Km(function(e){const t=new Map,r=({constructor:e,dependencies:n,id:o,singleton:i})=>{if(i&&t.has(o))return t.get(o);const s=e(n.map((e=>r(e))));return i&&t.set(o,s),s};return r(e)}(e),(e=>{c(e,p)})))),[b]=o.useState(Gm(u,f));gb((()=>{for(const e of l)e in p&&tp(b[e],p[e]);return()=>{Object.values(b).map(np)}}),[p,b,f]),gb((()=>{c(f,p)})),o.useImperativeHandle(g,Ym(function(e){return a.reduce(((t,n)=>(t[n]=t=>{rp(e[r.methods[n]],t)},t)),{})}(f)));const y=n;return t(d.Provider,{value:f,children:n?t(y,{...hb([...i,...s,...l],p),children:m}):m})}));return{Component:h,useEmitter:(e,t)=>{const r=o.useContext(d)[e];gb((()=>tp(r,t)),[t,r])},useEmitterValue:o.version.startsWith("18")?e=>{const t=o.useContext(d)[e],r=o.useCallback((e=>tp(t,e)),[t]);return o.useSyncExternalStore(r,(()=>op(t)),(()=>op(t)))}:e=>{const t=o.useContext(d)[e],[r,n]=o.useState(Gm(op,t));return gb((()=>tp(t,(e=>{e!==r&&n(Ym(e))}))),[t,r]),r},usePublisher:e=>o.useCallback(Zm(rp,o.useContext(d)[e]),[e])}}const pb=o.createContext(void 0),fb=o.createContext(void 0),bb=typeof document<"u"?o.useLayoutEffect:o.useEffect;function yb(e,t,r,n=Xm,i,s){const a=o.useRef(null),l=o.useRef(null),d=o.useRef(null),c=o.useCallback((r=>{const n=r.target,o=n===window||n===document,i=s?o?window.pageXOffset||document.documentElement.scrollLeft:n.scrollLeft:o?window.pageYOffset||document.documentElement.scrollTop:n.scrollTop,a=s?o?document.documentElement.scrollWidth:n.scrollWidth:o?document.documentElement.scrollHeight:n.scrollHeight,c=s?o?window.innerWidth:n.offsetWidth:o?window.innerHeight:n.offsetHeight,u=()=>{e({scrollHeight:a,scrollTop:Math.max(i,0),viewportHeight:c})};r.suppressFlushSync?u():E.flushSync(u),null!==l.current&&(i===l.current||i<=0||i===a-c)&&(l.current=null,t(!0),d.current&&(clearTimeout(d.current),d.current=null))}),[e,t]);return o.useEffect((()=>{const e=i||a.current;return n(i||a.current),c({suppressFlushSync:!0,target:e}),e.addEventListener("scroll",c,{passive:!0}),()=>{n(null),e.removeEventListener("scroll",c)}}),[a,c,r,n,i]),{scrollByCallback:function(e){s&&(e={behavior:e.behavior,left:e.top}),a.current.scrollBy(e)},scrollerRef:a,scrollToCallback:function(r){const n=a.current;if(!n||(s?"offsetWidth"in n&&0===n.offsetWidth:"offsetHeight"in n&&0===n.offsetHeight))return;const o="smooth"===r.behavior;let i,c,u;n===window?(c=Math.max(lf(document.documentElement,s?"width":"height"),s?document.documentElement.scrollWidth:document.documentElement.scrollHeight),i=s?window.innerWidth:window.innerHeight,u=s?document.documentElement.scrollLeft:document.documentElement.scrollTop):(c=n[s?"scrollWidth":"scrollHeight"],i=lf(n,s?"width":"height"),u=n[s?"scrollLeft":"scrollTop"]);const h=c-i;if(r.top=Math.ceil(Math.max(Math.min(h,r.top),0)),Af(i,c)||r.top===u)return e({scrollHeight:c,scrollTop:u,viewportHeight:i}),void(o&&t(!0));o?(l.current=r.top,d.current&&clearTimeout(d.current),d.current=setTimeout((()=>{d.current=null,l.current=null,t(!0)}),1e3)):l.current=null,s&&(r={behavior:r.behavior,left:r.top}),n.scrollTo(r)}}}const vb="-webkit-sticky",xb="sticky",wb=ab((()=>{if(typeof document>"u")return xb;const e=document.createElement("div");return e.style.position=vb,e.style.position===vb?vb:xb}));function $b(e){return e}const Fb=$p((()=>{const e=yp((e=>`Item ${e}`)),t=yp(null),r=yp((e=>`Group ${e}`)),n=yp({}),o=yp($b),i=yp("div"),s=yp(Xm),a=(e,t=null)=>vp(gp(n,up((t=>t[e])),dp()),t);return{components:n,computeItemKey:o,context:t,EmptyPlaceholder:a("EmptyPlaceholder"),FooterComponent:a("Footer"),GroupComponent:a("Group","div"),groupContent:r,HeaderComponent:a("Header"),HeaderFooterTag:i,ItemComponent:a("Item","div"),itemContent:e,ListComponent:a("List","div"),ScrollerComponent:a("Scroller","div"),scrollerRef:s,ScrollSeekPlaceholder:a("ScrollSeekPlaceholder"),TopItemListComponent:a("TopItemList")}})),Cb=$p((([e,t])=>({...e,...t})),ep(ub,Fb)),Sb=({height:e})=>t("div",{style:{height:e}}),Eb={overflowAnchor:"none",position:wb(),zIndex:1},kb={overflowAnchor:"none"},Db={...kb,display:"inline-block",height:"100%"},Ib=o.memo((function({showTopList:e=!1}){const r=Ub("listState"),n=qb("sizeRanges"),i=Ub("useWindowScroll"),s=Ub("customScrollParent"),a=qb("windowScrollContainerState"),l=qb("scrollContainerState"),d=s||i?a:l,c=Ub("itemContent"),u=Ub("context"),h=Ub("groupContent"),g=Ub("trackItemSizes"),m=Ub("itemSize"),p=Ub("log"),f=qb("gap"),y=Ub("horizontalDirection"),{callbackRef:v}=Ap(n,m,g,e?Xm:d,p,f,s,y,Ub("skipAnimationFrameInResizeObserver")),[x,w]=o.useState(0);Yb("deviation",(e=>{x!==e&&w(e)}));const $=Ub("EmptyPlaceholder"),F=Ub("ScrollSeekPlaceholder")||Sb,C=Ub("ListComponent"),S=Ub("ItemComponent"),E=Ub("GroupComponent"),k=Ub("computeItemKey"),D=Ub("isSeeking"),I=Ub("groupIndices").length>0,T=Ub("alignToBottom"),B=Ub("initialItemFinalLocationReached"),A=e?{}:{boxSizing:"border-box",...y?{display:"inline-block",height:"100%",marginLeft:0!==x?x:T?"auto":0,paddingLeft:r.offsetTop,paddingRight:r.offsetBottom,whiteSpace:"nowrap"}:{marginTop:0!==x?x:T?"auto":0,paddingBottom:r.offsetBottom,paddingTop:r.offsetTop},...B?{}:{visibility:"hidden"}};return!e&&0===r.totalCount&&$?t($,{...Ob($,u)}):t(C,{...Ob(C,u),"data-testid":e?"virtuoso-top-item-list":"virtuoso-item-list",ref:v,style:A,children:(e?r.topItems:r.items).map((e=>{const t=e.originalIndex,n=k(t+r.firstItemIndex,e.data,u);return D?b(F,{...Ob(F,u),height:e.size,index:e.index,key:n,type:e.type||"item",..."group"===e.type?{}:{groupIndex:e.groupIndex}}):"group"===e.type?b(E,{...Ob(E,u),"data-index":t,"data-item-index":e.index,"data-known-size":e.size,key:n,style:Eb},h(e.index,u)):b(S,{...Ob(S,u),...Mb(S,e.data),"data-index":t,"data-item-group-index":e.groupIndex,"data-item-index":e.index,"data-known-size":e.size,key:n,style:y?Db:kb},I?c(e.index,e.groupIndex,e.data,u):c(e.index,e.data,u))}))})})),Tb={height:"100%",outline:"none",overflowY:"auto",position:"relative",WebkitOverflowScrolling:"touch"},Bb={outline:"none",overflowX:"auto",position:"relative"},Ab=e=>({height:"100%",position:"absolute",top:0,width:"100%",...e?{display:"flex",flexDirection:"column"}:{}}),zb={position:wb(),top:0,width:"100%",zIndex:1};function Ob(e,t){if("string"!=typeof e)return{context:t}}function Mb(e,t){return{item:"string"==typeof e?void 0:t}}const _b=o.memo((function(){const e=Ub("HeaderComponent"),r=qb("headerHeight"),n=Ub("HeaderFooterTag"),i=Tp(o.useMemo((()=>e=>{r(lf(e,"height"))}),[r]),!0,Ub("skipAnimationFrameInResizeObserver")),s=Ub("context");return e?t(n,{ref:i,children:t(e,{...Ob(e,s)})}):null})),Rb=o.memo((function(){const e=Ub("FooterComponent"),r=qb("footerHeight"),n=Ub("HeaderFooterTag"),i=Tp(o.useMemo((()=>e=>{r(lf(e,"height"))}),[r]),!0,Ub("skipAnimationFrameInResizeObserver")),s=Ub("context");return e?t(n,{ref:i,children:t(e,{...Ob(e,s)})}):null}));function Hb({useEmitter:e,useEmitterValue:r,usePublisher:n}){return o.memo((function({children:o,style:i,...s}){const a=n("scrollContainerState"),l=r("ScrollerComponent"),d=n("smoothScrollTargetReached"),c=r("scrollerRef"),u=r("context"),h=r("horizontalDirection")||!1,{scrollByCallback:g,scrollerRef:m,scrollToCallback:p}=yb(a,d,l,c,void 0,h);return e("scrollTo",p),e("scrollBy",g),t(l,{"data-testid":"virtuoso-scroller","data-virtuoso-scroller":!0,ref:m,style:{...h?Bb:Tb,...i},tabIndex:0,...s,...Ob(l,u),children:o})}))}function jb({useEmitter:e,useEmitterValue:r,usePublisher:n}){return o.memo((function({children:o,style:i,...s}){const a=n("windowScrollContainerState"),l=r("ScrollerComponent"),d=n("smoothScrollTargetReached"),c=r("totalListHeight"),u=r("deviation"),h=r("customScrollParent"),g=r("context"),{scrollByCallback:m,scrollerRef:p,scrollToCallback:f}=yb(a,d,l,Xm,h);return bb((()=>(p.current=h||window,()=>{p.current=null})),[p,h]),e("windowScrollTo",f),e("scrollBy",m),t(l,{"data-virtuoso-scroller":!0,style:{position:"relative",...i,...0!==c?{height:c+u}:{}},...s,...Ob(l,g),children:o})}))}const Lb=({children:e})=>{const r=o.useContext(pb),n=qb("viewportHeight"),i=qb("fixedItemHeight"),s=Ub("alignToBottom"),a=Ub("horizontalDirection"),l=Tp(o.useMemo((()=>qm(n,(e=>lf(e,a?"width":"height")))),[n,a]),!0,Ub("skipAnimationFrameInResizeObserver"));return o.useEffect((()=>{r&&(n(r.viewportHeight),i(r.itemHeight))}),[r,n,i]),t("div",{"data-viewport-type":"element",ref:l,style:Ab(s),children:e})},Pb=({children:e})=>{const r=o.useContext(pb),n=qb("windowViewportRect"),i=qb("fixedItemHeight"),s=Ub("customScrollParent"),a=Op(n,s,Ub("skipAnimationFrameInResizeObserver")),l=Ub("alignToBottom");return o.useEffect((()=>{r&&(i(r.itemHeight),n({offsetTop:0,visibleHeight:r.viewportHeight,visibleWidth:100}))}),[r,n,i]),t("div",{"data-viewport-type":"window",ref:a,style:Ab(l),children:e})},Wb=({children:e})=>{const r=Ub("TopItemListComponent")||"div",n=Ub("headerHeight"),o={...zb,marginTop:`${n}px`},i=Ub("context");return t(r,{style:o,...Ob(r,i),children:e})},Nb=o.memo((function(r){const n=Ub("useWindowScroll"),o=Ub("topItemsIndexes").length>0,i=Ub("customScrollParent"),s=Ub("context"),a=i||n?Zb:Gb,l=i||n?Pb:Lb;return e(a,{...r,...Ob(a,s),children:[o&&t(Wb,{children:t(Ib,{showTopList:!0})}),e(l,{children:[t(_b,{}),t(Ib,{}),t(Rb,{})]})]})})),{Component:Vb,useEmitter:Yb,useEmitterValue:Ub,usePublisher:qb}=mb(Cb,{events:{atBottomStateChange:"atBottomStateChange",atTopStateChange:"atTopStateChange",endReached:"endReached",groupIndices:"groupIndices",isScrolling:"isScrolling",itemsRendered:"itemsRendered",rangeChanged:"rangeChanged",startReached:"startReached",totalListHeightChanged:"totalListHeightChanged"},methods:{autoscrollToBottom:"autoscrollToBottom",getState:"getState",scrollBy:"scrollBy",scrollIntoView:"scrollIntoView",scrollTo:"scrollTo",scrollToIndex:"scrollToIndex"},optional:{alignToBottom:"alignToBottom",atBottomThreshold:"atBottomThreshold",atTopThreshold:"atTopThreshold",components:"components",computeItemKey:"computeItemKey",context:"context",customScrollParent:"customScrollParent",data:"data",defaultItemHeight:"defaultItemHeight",firstItemIndex:"firstItemIndex",fixedItemHeight:"fixedItemHeight",followOutput:"followOutput",groupContent:"groupContent",groupCounts:"groupCounts",headerFooterTag:"HeaderFooterTag",horizontalDirection:"horizontalDirection",increaseViewportBy:"increaseViewportBy",initialItemCount:"initialItemCount",initialScrollTop:"initialScrollTop",initialTopMostItemIndex:"initialTopMostItemIndex",itemContent:"itemContent",itemSize:"itemSize",logLevel:"logLevel",overscan:"overscan",restoreStateFrom:"restoreStateFrom",scrollerRef:"scrollerRef",scrollSeekConfiguration:"scrollSeekConfiguration",skipAnimationFrameInResizeObserver:"skipAnimationFrameInResizeObserver",topItemCount:"topItemCount",totalCount:"totalCount",useWindowScroll:"useWindowScroll"},required:{}},Nb),Gb=Hb({useEmitter:Yb,useEmitterValue:Ub,usePublisher:qb}),Zb=jb({useEmitter:Yb,useEmitterValue:Ub,usePublisher:qb}),Qb=Vb,Xb={bottom:0,itemHeight:0,items:[],itemWidth:0,offsetBottom:0,offsetTop:0,top:0},Kb={bottom:0,itemHeight:0,items:[{index:0}],itemWidth:0,offsetBottom:0,offsetTop:0,top:0},{ceil:Jb,floor:ey,max:ty,min:ry,round:ny}=Math;function oy(e,t,r){return Array.from({length:t-e+1}).map(((t,n)=>({data:null===r?null:r[n+e],index:n+e})))}function iy(e,t){return e&&e.width===t.width&&e.height===t.height}function sy(e,t){return e&&e.column===t.column&&e.row===t.row}const ay=$p((([{increaseViewportBy:e,listBoundary:t,overscan:r,visibleRange:n},{footerHeight:o,headerHeight:i,scrollBy:s,scrollContainerState:a,scrollTo:l,scrollTop:d,smoothScrollTargetReached:c,viewportHeight:u},h,g,{didMount:m,propsReady:p},{customScrollParent:f,useWindowScroll:b,windowScrollContainerState:y,windowScrollTo:v,windowViewportRect:x},w])=>{const $=yp(0),F=yp(0),C=yp(Xb),S=yp({height:0,width:0}),E=yp({height:0,width:0}),k=xp(),D=xp(),I=yp(0),T=yp(null),B=yp({column:0,row:0}),A=xp(),z=xp(),O=yp(!1),M=yp(0),_=yp(!0),R=yp(!1),H=yp(!1);tp(gp(m,bp(M),cp((([e,t])=>!!t))),(()=>{rp(_,!1)})),tp(gp(Cp(m,_,E,S,M,R),cp((([e,t,r,n,,o])=>e&&!t&&0!==r.height&&0!==n.height&&!o))),(([,,,,e])=>{rp(R,!0),If(1,(()=>{rp(k,e)})),sp(gp(d),(()=>{rp(t,[0,0]),rp(_,!0)}))})),ip(gp(z,cp((e=>null!=e&&e.scrollTop>0)),hp(0)),F),tp(gp(m,bp(z),cp((([,e])=>null!=e))),(([,e])=>{e&&(rp(S,e.viewport),rp(E,e.item),rp(B,e.gap),e.scrollTop>0&&(rp(O,!0),sp(gp(d,pp(1)),(e=>{rp(O,!1)})),rp(l,{top:e.scrollTop})))})),ip(gp(S,up((({height:e})=>e))),u),ip(gp(Cp(Sp(S,iy),Sp(E,iy),Sp(B,((e,t)=>e&&e.column===t.column&&e.row===t.row)),Sp(d)),up((([e,t,r,n])=>({gap:r,item:t,scrollTop:n,viewport:e})))),A),ip(gp(Cp(Sp($),n,Sp(B,sy),Sp(E,iy),Sp(S,iy),Sp(T),Sp(F),Sp(O),Sp(_),Sp(M)),cp((([,,,,,,,e])=>!e)),up((([e,[t,r],n,o,i,s,a,,l,d])=>{const{column:c,row:u}=n,{height:h,width:g}=o,{width:m}=i;if(0===a&&(0===e||0===m))return Xb;if(0===g){const t=Tf(d,e);return function(e){return{...Kb,items:e}}(oy(t,t+Math.max(a-1,0),s))}const p=ly(m,g,c);let f,b;l?0===t&&0===r&&a>0?(f=0,b=a-1):(f=p*ey((t+u)/(h+u)),b=p*Jb((r+u)/(h+u))-1,b=ry(e-1,ty(b,p-1)),f=ry(b,ty(0,f))):(f=0,b=-1);const y=oy(f,b,s),{bottom:v,top:x}=dy(i,n,o,y),w=Jb(e/p);return{bottom:v,itemHeight:h,items:y,itemWidth:g,offsetBottom:w*h+(w-1)*u-v,offsetTop:x,top:x}}))),C),ip(gp(T,cp((e=>null!==e)),up((e=>e.length))),$),ip(gp(Cp(S,E,C,B),cp((([e,t,{items:r}])=>r.length>0&&0!==t.height&&0!==e.height)),up((([e,t,{items:r},n])=>{const{bottom:o,top:i}=dy(e,n,t,r);return[i,o]})),dp(nf)),t);const j=yp(!1);ip(gp(d,bp(j),up((([e,t])=>t||0!==e))),j);const L=wp(gp(Cp(C,$),cp((([{items:e}])=>e.length>0)),bp(j),cp((([[e,t],r])=>{const n=e.items[e.items.length-1].index===t-1;return(r||e.bottom>0&&e.itemHeight>0&&0===e.offsetBottom&&e.items.length===t)&&n})),up((([[,e]])=>e-1)),dp())),P=wp(gp(Sp(C),cp((({items:e})=>e.length>0&&0===e[0].index)),hp(0),dp())),W=wp(gp(Sp(C),bp(O),cp((([{items:e},t])=>e.length>0&&!t)),up((([{items:e}])=>({endIndex:e[e.length-1].index,startIndex:e[0].index}))),dp(rf),fp(0)));ip(W,g.scrollSeekRangeChanged),ip(gp(k,bp(S,E,$,B),up((([e,t,r,n,o])=>{const i=kf(e),{align:s,behavior:a,offset:l}=i;let d=i.index;"LAST"===d&&(d=n-1),d=ty(0,d,ry(n-1,d));let c=cy(t,o,r,d);return"end"===s?c=ny(c-t.height+r.height):"center"===s&&(c=ny(c-t.height/2+r.height/2)),l&&(c+=l),{behavior:a,top:c}}))),l);const N=vp(gp(C,up((e=>e.offsetBottom+e.bottom))),0);return ip(gp(x,up((e=>({height:e.visibleHeight,width:e.visibleWidth})))),S),{customScrollParent:f,data:T,deviation:I,footerHeight:o,gap:B,headerHeight:i,increaseViewportBy:e,initialItemCount:F,itemDimensions:E,overscan:r,restoreStateFrom:z,scrollBy:s,scrollContainerState:a,scrollHeight:D,scrollTo:l,scrollToIndex:k,scrollTop:d,smoothScrollTargetReached:c,totalCount:$,useWindowScroll:b,viewportDimensions:S,windowScrollContainerState:y,windowScrollTo:v,windowViewportRect:x,...g,gridState:C,horizontalDirection:H,initialTopMostItemIndex:M,totalListHeight:N,...h,endReached:L,propsReady:p,rangeChanged:W,startReached:P,stateChanged:A,stateRestoreInProgress:O,...w}}),ep(Wf,Mp,_f,rb,Sf,nb,Ip));function ly(e,t,r){return ty(1,ey((e+r)/(ey(t)+r)))}function dy(e,t,r,n){const{height:o}=r;if(void 0===o||0===n.length)return{bottom:0,top:0};const i=cy(e,t,r,n[0].index);return{bottom:cy(e,t,r,n[n.length-1].index)+o,top:i}}function cy(e,t,r,n){const o=ly(e.width,r.width,t.column),i=ey(n/o),s=i*r.height+ty(0,i-1)*t.row;return s>0?s+t.row:s}const uy=$p((()=>{const e=yp((e=>`Item ${e}`)),t=yp({}),r=yp(null),n=yp("virtuoso-grid-item"),o=yp("virtuoso-grid-list"),i=yp($b),s=yp("div"),a=yp(Xm),l=(e,r=null)=>vp(gp(t,up((t=>t[e])),dp()),r),d=yp(!1),c=yp(!1);return ip(Sp(c),d),{components:t,computeItemKey:i,context:r,FooterComponent:l("Footer"),HeaderComponent:l("Header"),headerFooterTag:s,itemClassName:n,ItemComponent:l("Item","div"),itemContent:e,listClassName:o,ListComponent:l("List","div"),readyStateChanged:d,reportReadyState:c,ScrollerComponent:l("Scroller","div"),scrollerRef:a,ScrollSeekPlaceholder:l("ScrollSeekPlaceholder","div")}})),hy=$p((([e,t])=>({...e,...t})),ep(ay,uy)),gy=o.memo((function(){const e=wy("gridState"),r=wy("listClassName"),n=wy("itemClassName"),i=wy("itemContent"),s=wy("computeItemKey"),a=wy("isSeeking"),l=$y("scrollHeight"),d=wy("ItemComponent"),c=wy("ListComponent"),u=wy("ScrollSeekPlaceholder"),h=wy("context"),g=$y("itemDimensions"),m=$y("gap"),p=wy("log"),f=wy("stateRestoreInProgress"),y=$y("reportReadyState"),v=Tp(o.useMemo((()=>e=>{const t=e.parentElement.parentElement.scrollHeight;l(t);const r=e.firstChild;if(r){const{height:e,width:t}=r.getBoundingClientRect();g({height:e,width:t})}m({column:Sy("column-gap",getComputedStyle(e).columnGap,p),row:Sy("row-gap",getComputedStyle(e).rowGap,p)})}),[l,g,m,p]),!0,!1);return bb((()=>{e.itemHeight>0&&e.itemWidth>0&&y(!0)}),[e]),f?null:t(c,{className:r,ref:v,...Ob(c,h),"data-testid":"virtuoso-item-list",style:{paddingBottom:e.offsetBottom,paddingTop:e.offsetTop},children:e.items.map((r=>{const o=s(r.index,r.data,h);return a?t(u,{...Ob(u,h),height:e.itemHeight,index:r.index,width:e.itemWidth},o):b(d,{...Ob(d,h),className:n,"data-index":r.index,key:o},i(r.index,r.data,h))}))})})),my=o.memo((function(){const e=wy("HeaderComponent"),r=$y("headerHeight"),n=wy("headerFooterTag"),i=Tp(o.useMemo((()=>e=>{r(lf(e,"height"))}),[r]),!0,!1),s=wy("context");return e?t(n,{ref:i,children:t(e,{...Ob(e,s)})}):null})),py=o.memo((function(){const e=wy("FooterComponent"),r=$y("footerHeight"),n=wy("headerFooterTag"),i=Tp(o.useMemo((()=>e=>{r(lf(e,"height"))}),[r]),!0,!1),s=wy("context");return e?t(n,{ref:i,children:t(e,{...Ob(e,s)})}):null})),fy=({children:e})=>{const r=o.useContext(fb),n=$y("itemDimensions"),i=$y("viewportDimensions"),s=Tp(o.useMemo((()=>e=>{i(e.getBoundingClientRect())}),[i]),!0,!1);return o.useEffect((()=>{r&&(i({height:r.viewportHeight,width:r.viewportWidth}),n({height:r.itemHeight,width:r.itemWidth}))}),[r,i,n]),t("div",{ref:s,style:Ab(!1),children:e})},by=({children:e})=>{const r=o.useContext(fb),n=$y("windowViewportRect"),i=$y("itemDimensions"),s=wy("customScrollParent"),a=Op(n,s,!1);return o.useEffect((()=>{r&&(i({height:r.itemHeight,width:r.itemWidth}),n({offsetTop:0,visibleHeight:r.viewportHeight,visibleWidth:r.viewportWidth}))}),[r,n,i]),t("div",{ref:a,style:Ab(!1),children:e})},yy=o.memo((function({...r}){const n=wy("useWindowScroll"),o=wy("customScrollParent"),i=o||n?Cy:Fy,s=o||n?by:fy,a=wy("context");return t(i,{...r,...Ob(i,a),children:e(s,{children:[t(my,{}),t(gy,{}),t(py,{})]})})})),{Component:vy,useEmitter:xy,useEmitterValue:wy,usePublisher:$y}=mb(hy,{events:{atBottomStateChange:"atBottomStateChange",atTopStateChange:"atTopStateChange",endReached:"endReached",isScrolling:"isScrolling",rangeChanged:"rangeChanged",readyStateChanged:"readyStateChanged",startReached:"startReached",stateChanged:"stateChanged"},methods:{scrollBy:"scrollBy",scrollTo:"scrollTo",scrollToIndex:"scrollToIndex"},optional:{components:"components",computeItemKey:"computeItemKey",context:"context",customScrollParent:"customScrollParent",data:"data",headerFooterTag:"headerFooterTag",increaseViewportBy:"increaseViewportBy",initialItemCount:"initialItemCount",initialTopMostItemIndex:"initialTopMostItemIndex",itemClassName:"itemClassName",itemContent:"itemContent",listClassName:"listClassName",logLevel:"logLevel",overscan:"overscan",restoreStateFrom:"restoreStateFrom",scrollerRef:"scrollerRef",scrollSeekConfiguration:"scrollSeekConfiguration",totalCount:"totalCount",useWindowScroll:"useWindowScroll"}},yy),Fy=Hb({useEmitter:xy,useEmitterValue:wy,usePublisher:$y}),Cy=jb({useEmitter:xy,useEmitterValue:wy,usePublisher:$y});function Sy(e,t,r){return"normal"!==t&&!(null!=t&&t.endsWith("px"))&&r(`${e} was not resolved to pixel value correctly`,t,kp.WARN),"normal"===t?0:parseInt(null!=t?t:"0",10)}const Ey=o.createContext({focusedIndex:-1,setFocusedIndex:()=>{}}),ky=({children:e})=>{const[r,n]=a(-1);return t(Ey.Provider,{value:{focusedIndex:r,setFocusedIndex:n},children:e})},Dy=x.div`
    overflow: hidden;
    border: ${Wn["width-010"]} ${Wn.solid} ${jn.border};
    border-radius: ${Vn.sm};
    background: ${jn.bg};

    min-width: 23rem;
    ${e=>e.$width&&`width: ${e.$width}px;`}
    max-height: 27rem;
    overflow-y: auto;

    ${e=>"small"===e.$variant?Ln["body-md-regular"]:Ln["body-baseline-regular"]}

    ${Un.MaxWidth.sm} {
        min-width: unset;
        width: calc(100vw - ${Yn["sm-margin"]} * 2);
        max-height: 15rem;
    }

    ${Un.MaxWidth.xs} {
        width: calc(100vw - ${Yn["xs-margin"]} * 2);
    }

    ${Un.MaxWidth.xxs} {
        width: calc(100vw - ${Yn["xxs-margin"]} * 2);
    }

    ::-webkit-scrollbar {
        width: 14px;
    }

    ::-webkit-scrollbar-track {
        background: transparent;
    }

    ::-webkit-scrollbar-thumb {
        background: ${jn["bg-inverse-subtlest"]};
        border: 5px solid transparent;
        border-radius: 9999px;
        background-clip: padding-box;
    }
`,Iy=x.div`
    background: transparent;
    padding: ${Nn["spacing-8"]};
`,Ty=x.ul`
    list-style-type: none;
`,By=x.li`
    display: flex;
    align-items: flex-start;
    gap: ${Nn["spacing-8"]};
    padding: ${Nn["spacing-12"]} ${Nn["spacing-8"]};
    cursor: pointer;

    outline: none;

    ${e=>e.$disabled?w`
                cursor: not-allowed;
            `:e.$active&&e.$selected?w`
                background: ${jn["bg-hover"]};
            `:e.$active?w`
                background: ${jn["bg-hover-subtle"]};
            `:void 0}
`,Ay=x(L)`
    flex-shrink: 0;
    height: 1lh;
    width: 1rem;
    color: ${jn["icon-selected"]};
`,zy=x.div`
    flex-shrink: 0;
    height: 1lh;
    width: 1rem;
`,Oy=x(j)`
    flex-shrink: 0;
    height: 1lh;
    width: 1lh;
    color: ${jn["icon-selected"]};
`,My=x(H)`
    flex-shrink: 0;
    height: 1lh;
    width: 1lh;
    color: ${jn["icon-primary-subtlest"]};
`,_y=x(P)`
    flex-shrink: 0;
    height: 1lh;
    width: 1lh;
    color: ${jn["icon-disabled-subtle"]};
`,Ry=x.div`
    width: 100%;
    display: flex;
    justify-content: flex-end;
`,Hy=x(po)`
    cursor: pointer;
    overflow: hidden;
    color: ${jn["text-primary"]};
    font-size: inherit;
`,jy=x(Hy)`
    ${Ln["body-baseline-semibold"]}
`,Ly=x(Hy)`
    ${Ln["body-md-semibold"]}
    padding: ${Nn["spacing-8"]} ${Nn["spacing-8"]};
`,Py=x.div`
    width: 100%;
    display: flex;
    padding: ${Nn["spacing-12"]} ${Nn["spacing-16"]};
    align-items: center;
`,Wy=x(T)`
    margin-right: ${Nn["spacing-4"]};
    color: ${jn["icon-error"]};
    height: 1em;
    width: 1em;
`,Ny=x(ad)`
    margin-right: ${Nn["spacing-8"]};
    color: ${jn.icon};
`,Vy=x.div`
    ${qd()}
    color: ${jn["text-subtle"]};
    padding: 0 ${Nn["spacing-16"]} ${Nn["spacing-12"]}
        ${Nn["spacing-16"]};
`,Yy=x.div`
    background: ${jn["bg-strong"]};
    border-radius: ${Vn.sm};
    display: flex;
    align-items: center;

    ${e=>"small"===e.$variant?Ln["body-md-regular"]:Ln["body-baseline-regular"]}
`,Uy=x.label`
    flex: 1;
    display: flex;
    align-items: center;
    gap: ${Nn["spacing-8"]};
    padding: ${e=>"small"===e.$variant?w`
                  ${Nn["spacing-8"]} ${Nn["spacing-16"]}
              `:w`10px ${Nn["spacing-16"]}`};
`,qy=x(mo)`
    flex: 1;
`,Gy=x(W)`
    color: ${jn.icon};
    flex-shrink: 0;
    height: 1em;
    width: 1em;
`,Zy=x(Tc)`
    flex-shrink: 0;
    align-self: stretch;
    box-sizing: content-box;
    padding: ${Nn["spacing-8"]};
    margin-left: -${Nn["spacing-8"]};
    color: ${jn.icon};
    cursor: pointer;
    font-size: inherit;

    svg {
        flex-shrink: 0;
        height: 1em;
        width: 1em;
    }
`,Qy=g(((r,n)=>{var{value:o,variant:i,onClear:s}=r,a=oe(r,["value","variant","onClear"]);return e(Yy,{$variant:i,children:[e(Uy,{$variant:i,children:[t(Gy,{"aria-hidden":!0}),t(qy,Object.assign({ref:n,value:o,$variant:i},a))]}),o&&t(Zy,{"aria-label":"Clear search",focusOutline:"browser",onClick:s,children:t(R,{"aria-hidden":!0})})]})})),Xy=({listItems:n,multiSelect:o,maxSelectable:l,selectedItems:d,disableItemFocus:c,itemsLoadState:u="success",itemTruncationType:h="end",itemMaxLines:g=2,labelDisplayType:f="inline",variant:b="default",listboxId:y,width:v,topScrollItem:x,onSelectItem:w,onSelectAll:$,onDismiss:F,onRetry:C,valueExtractor:S,listExtractor:E,renderListItem:k,renderCustomCallToAction:D,enableSearch:I,hideNoResultsDisplay:T,noResultsDescription:B,searchPlaceholder:A="Search",searchFunction:z,onSearch:O})=>{const{focusedIndex:M,setFocusedIndex:_}=p(Ey),[R,H]=a(""),[j,L]=a(null!=n?n:[]),P=Ud(u),W=(()=>{const[e,t]=a(!1);return s((()=>{t(!0)}),[]),e})(),N=i(null),V=i(null),Y=i([]),U=i(null),q=i(null),G=!!l&&!!d&&(null==d?void 0:d.length)===l,Z=e=>{const t=E?E(e):null==e?void 0:e.toString();return"object"==typeof t?{title:t.title,secondaryLabel:t.secondaryLabel}:{title:null!=t?t:""}},Q=m((e=>!!Wm(d,(t=>Vm(t,e)))),[d]),X=Yd((()=>null==z?void 0:z(R))),K=Yd((()=>null==n?void 0:n.filter((e=>{const{title:t,secondaryLabel:r}=Z(e),n=R.trim().toLowerCase();return t.toLowerCase().includes(n)||r&&r.toLowerCase().includes(n)})))),J=(e,t)=>{G&&!Q(e)||(_(t),null==w||w(e,(e=>S?S(e):e)(e)))},ee=e=>{const t=e.target.value;H(t),null==O||O()},te=()=>{var e;H(""),null===(e=U.current)||void 0===e||e.focus(),null==O||O()},re=()=>{null==C||C()};ie("keydown",(e=>{var t,r;switch(e.code){case"ArrowDown":if(e.preventDefault(),M<j.length-1){const e=M+1;null===(t=Y.current[e])||void 0===t||t.focus(),_(e)}break;case"ArrowUp":if(e.preventDefault(),M>0){const e=M-1;null===(r=Y.current[e])||void 0===r||r.focus(),_(e)}else 0===M&&U.current&&(U.current.focus(),_(-1));break;case"Space":case"Enter":document.activeElement===Y.current[M]&&(e.preventDefault(),j[M]&&J(j[M],M))}})),s((()=>{var e;if(!x)return void(null===(e=q.current)||void 0===e||e.scrollTo({top:0}));const t=setTimeout((()=>{if(!n)return;const e=n.indexOf(x);q.current&&-1!==e&&(q.current.scrollToIndex({index:e}),_(e))}),0);return()=>clearTimeout(t)}),[Y,n,_,x]),s((()=>{var e,t,r;if(W)return;if(c||!n)return;const o=n.findIndex((e=>Q(e)));U.current?(_(-1),setTimeout((()=>{var e;return null===(e=U.current)||void 0===e?void 0:e.focus()}),200)):M>0?(null===(e=q.current)||void 0===e||e.scrollToIndex({index:M,align:"center"}),setTimeout((()=>{var e;return null===(e=Y.current[M])||void 0===e?void 0:e.focus()}),200)):-1!==o?(null===(t=q.current)||void 0===t||t.scrollToIndex({index:o,align:"center"}),_(o),setTimeout((()=>{var e;return null===(e=Y.current[o])||void 0===e?void 0:e.focus()}),200)):(null===(r=q.current)||void 0===r||r.scrollToIndex({index:0}),_(0),setTimeout((()=>{var e;return null===(e=Y.current[0])||void 0===e?void 0:e.focus()}),200))}),[Q,c,M,n,W,_]),s((()=>{W&&P&&(c||"success"===u&&U.current&&(_(-1),U.current.focus()))}),[W,P,u,_,c]),s((()=>{var e;L(null!==(e=""===R?n:z?X():K())&&void 0!==e?e:[])}),[X,K,n,z,R]);const ne=e=>o?t(G&&!e?_y:e?Oy:My,{"aria-hidden":!0}):e?t(Ay,{"aria-hidden":!0}):t(zy,{}),oe=(e,r)=>{const{title:n,secondaryLabel:o}=Z(e);return t(cu,{displayType:f,label:n,maxLines:g,selected:r,disabled:!r&&G,sublabel:o,truncationType:h,variant:b})},se=(n,i)=>{if(!C||"success"===u){const s=Q(n),a=i===M;return t(By,{"aria-selected":s,"aria-multiselectable":o,"aria-disabled":!s&&G,"data-testid":"list-item",onClick:()=>J(n,i),onMouseEnter:()=>(e=>{_(e)})(i),ref:e=>{Y.current[i]=e},role:"option",tabIndex:a?0:-1,$active:a,$selected:s,$disabled:!s&&G,children:k?k(n,{selected:s}):e(r,{children:[ne(s),oe(n,s)]})},((e,t)=>`item_${t}__${S?S(e):e}`)(n,i))}},ae=()=>{if(d&&o&&j.length>0&&!R&&"success"===u)return t(Ry,{children:t(Ly,{onClick:$,type:"button",$variant:b,children:l||0!==d.length?"Clear all":"Select all"})})},le=()=>{if(!T&&(R||!I)&&0===j.length&&"success"===u)return e(r,{children:[e(Py,{"data-testid":"list-no-results",children:[t(Wy,{"data-testid":"no-result-icon"}),"No results found."]}),B&&t(Vy,{"data-testid":"no-result-desc",children:B})]})},de=()=>{if(C&&"loading"===u)return e(Py,{"data-testid":"list-loading",children:[t(Ny,{}),"Loading..."]})},ce=()=>{if(C&&"fail"===u)return e(Py,{"data-testid":"list-fail",children:[t(Wy,{"data-testid":"load-error-icon"}),"Failed to load. ",t(jy,{onClick:re,type:"button",$variant:b,children:"Try again."})]})},ue=()=>{var e;const r="test"===process.env.NODE_ENV;return t(Ty,{role:"listbox",id:y,children:t(Qb,Object.assign({ref:q,style:{height:"100%"},data:j,customScrollParent:null!==(e=N.current)&&void 0!==e?e:void 0,itemContent:(e,t)=>se(t,e)},r?{initialItemCount:j.length}:{}),r?j.length:void 0)})};return e(Dy,{"data-testid":"dropdown-container",ref:N,$width:v,$variant:b,children:[e(Iy,{ref:V,"data-testid":"dropdown-list",children:[(()=>{if((I||z)&&"success"===u)return t(Qy,{ref:U,onChange:ee,value:R,placeholder:A,"data-testid":"search-input","aria-label":"Enter text to search",onClear:te,variant:b})})(),ae(),le(),de(),ce(),ue()]}),(()=>{if(D)return t("div",{"data-testid":"custom-cta",children:D(F,j)})})()]})},Ky=x(po)`
    display: flex;
    align-items: center;
    gap: ${Nn["spacing-8"]};
    width: 100%;
    height: calc(3rem - 2px); // exclude top and bottom borders
    padding: ${Nn["spacing-16"]};

    ${e=>"small"===e.$variant?Ln["body-md-regular"]:Ln["body-baseline-regular"]}

    :disabled {
        cursor: not-allowed;
    }
`,Jy=x.div`
    display: flex;
    align-items: center;
    transform: rotate(${e=>e.$expanded?180:0}deg);
    transition: transform ${Pn["duration-250"]} ${Pn["ease-default"]};

    svg {
        color: ${jn.icon};
        height: 1em;
        width: 1em;
    }
`;var ev;g((({children:r,disabled:n,expanded:o,listboxId:i,popupRole:s,readOnly:a,variant:l},d)=>e(Ky,{ref:d,type:"button","aria-expanded":o,"aria-haspopup":s,"data-testid":"selector",disabled:n,"aria-controls":i,$variant:l,children:[r,!a&&t(Jy,{$expanded:o,$variant:l,children:t(C,{"aria-hidden":!0})})]}))),x.li`
    display: ${e=>e.$visible?"flex":"none"};
`,x.div`
    flex: 1;
    display: flex;
    align-items: flex-start;
    gap: ${Nn["spacing-8"]};
    padding: ${Nn["spacing-12"]} ${Nn["spacing-8"]};
    cursor: ${e=>e.$toggleable?"default":"pointer"};
    overflow: hidden; // required for label to truncate properly

    outline: none;

    ${e=>e.$active&&w`
            background: ${jn["bg-hover"]};
        `}
`,x.div`
    height: 1px;
    width: calc((1lh + ${Nn["spacing-8"]}) * ${e=>e.$level});
`,x.div`
    width: 1lh;
    height: 1lh;
    color: ${jn["icon-primary"]};
    cursor: pointer;

    svg {
        width: 1lh;
        height: 1lh;
        transition: transform ${Pn["duration-350"]}
            ${Pn["ease-standard"]};

        ${e=>{if(e.$expanded)return w`
                    transform: rotate(90deg);
                `}}
    }
`,x.div`
    width: 1lh;
    height: 1lh;
    margin-right: ${Nn["spacing-8"]};
`,x.div`
    flex-shrink: 0;
    height: 1lh;
    width: ${e=>e.$hasNestedSiblings?"1lh":Nn["spacing-16"]};

    display: flex;
    justify-content: center;
`,x(N)`
    flex-shrink: 0;
    height: 1lh;
    width: 1lh;
    color: ${jn["icon-selected"]};
`,function(e){e.Ready="overlay-context-ready",e.Change="overlay-context-change"}(ev||(ev={}));const tv=x.div`
    display: flex;
    flex-direction: column;
`,rv=e=>"right"===e?"bottom-end":"bottom-start",nv=({enabled:n,isOpen:o,onOpen:l,onClose:d,onDismiss:c,renderElement:u,renderDropdown:h,customZIndex:g,clickToToggle:m=!1,offset:p=0,alignment:f="left",fitAvailableHeight:b,rootNode:y})=>{var v;const x=F(),w=Yn["sm-max"]({theme:x}),$=i(null),C=i(null),{width:S=0}=$i({targetRef:$,handleHeight:!1}),E={name:"center",fn:({x:e,rects:t})=>{const r=0===e||e+t.floating.width===window.innerWidth,n=window.innerWidth<w;return{x:r&&n?(window.innerWidth-t.floating.width)/2:e}}},{refs:k,floatingStyles:D,context:I}=Y({open:o,onOpenChange:(e,t,r)=>{"escape-key"===r?null==c||c():e&&!o?null==l||l():!e&&o&&(null==d||d(r))},whileElementsMounted:U,placement:rv(f),middleware:[q(p),G(),Z({limiter:Q()}),X({apply({availableHeight:e}){C.current&&Object.assign(C.current.style,{maxHeight:b?`${e}px`:void 0,overflowY:b?"hidden":void 0})}}),E]}),T=(()=>{const[e,t]=a(void 0),r=V();return s((()=>{if(!r)return void t(void 0);const e=e=>{t(e.zIndex)};return r.events.on(ev.Change,e),r.events.emit(ev.Ready),()=>r.events.off(ev.Change,e)}),[r]),e})(),{isMounted:B,styles:A}=K(I,{initial:{opacity:0},open:{opacity:1},duration:300}),z=J(I,{enabled:n,toggle:m}),O=ee(I,{enabled:n}),{getReferenceProps:M,getFloatingProps:_}=te([z,O]);return e(r,{children:[t("div",Object.assign({ref:e=>{$.current=e,k.setReference(e)}},M(),{children:u()})),B&&t(re,{root:y,children:t(ne,{context:I,modal:!1,initialFocus:C,returnFocus:!1,children:t("div",Object.assign({ref:k.setFloating,style:Object.assign(Object.assign({},D),{zIndex:null!==(v=null!=g?g:T)&&void 0!==v?v:50})},_(),{children:t(tv,{ref:C,style:Object.assign({},A),inert:A.opacity<1?"":void 0,children:h({elementWidth:S})})}))})})]})},ov=x(go)`
    height: 3rem;
    gap: ${Nn["spacing-8"]};
    // space for clear icon
    padding-right: calc(1.25rem + ${Nn["spacing-20"]});
`,iv=r=>{var{id:n,disabled:o=!1,error:l,value:d,format:c="12hr",readOnly:u,onChange:h,onFocus:g,onBlur:p,alignment:b="left",dropdownZIndex:y,startLimit:v,endLimit:x,interval:w=15}=r,$=oe(r,["id","disabled","error","value","format","readOnly","onChange","onFocus","onBlur","alignment","dropdownZIndex","startLimit","endLimit","interval"]);const[F]=a((()=>Vd.generate())),[C,S]=a(null),[E,k]=a(!1),[D,I]=a(""),[T,B]=a(""),[A,z]=a(""),[O,M]=a(""),[_,R]=a(""),H=i(null),j=i(null),L=i(null),P=f((()=>$o.generateTimings(w,c,v,x)),[w,c,v,x]),W=f((()=>{if(""===O)return P;const e=$o.findClosestFlooredTime(O,P);return e?P.slice(P.indexOf(e)):[]}),[P,O]),N=m((e=>$o.parseInput(e,c)),[c]);s((()=>{var e,t;if(d){const r=null!==(e=N(d.start))&&void 0!==e?e:"",n=null!==(t=N(d.end))&&void 0!==t?t:"";B(r),z(n),M(r),R(n)}}),[d,N]),s((()=>{if(l)return void k(!1);const e=N(T),t=N(A);if(void 0===e)I("Invalid start time");else if(void 0===t)I("Invalid end time");else{if(!(""!==e&&""!==t&&$o.to24Hour(t)<$o.to24Hour(e)))return I(""),void(document.activeElement!==j.current&&document.activeElement!==L.current||k(!0));I("End time must be after start time")}k(!1)}),[T,A,N,l]);const V=e=>{o||u||(C||E||null==g||g(),S(e),k(!0))},Y=e=>{var t;o||u||(S(e),k(!0),null===(t=("start"===e?j:L).current)||void 0===t||t.select())};function U(e){var t;switch(e.code){case"Enter":"start"===C?q(T):"end"===C&&(E&&G(A),null===(t=L.current)||void 0===t||t.blur());break;case"Tab":Z(T,A,{})}}const q=e=>{Z(e,A,{goToNextInput:!0})},G=e=>{Z(T,e,{triggerOnBlur:!0})},Z=(e,t,{goToNextInput:r,triggerOnBlur:n})=>{var o,i,s;const a=null!==(o=N(e))&&void 0!==o?o:O,l=null!==(i=N(t))&&void 0!==i?i:_;B(a),z(l);a===O&&l===_||null==h||h({start:a,end:l}),r&&void 0!==N(e)&&(S("end"),null===(s=L.current)||void 0===s||s.select()),n&&(S(null),k(!1),null==p||p()),M(a),R(l)},Q=e=>{e.stopPropagation(),B(""),z(""),M(""),R("");null==h||h({start:"",end:""}),S(null),k(!1)},X=e=>{H.current&&!H.current.contains(e.relatedTarget)&&C&&!E&&Z(T,A,{triggerOnBlur:!0})},K=()=>{if(!u&&!o&&((null==T?void 0:T.length)>0||(null==A?void 0:A.length)>0))return t(nu,{onClick:Q,type:"button","aria-label":"Clear",children:t(Xc,{"aria-hidden":!0})})};return e(fo,Object.assign({id:n},$,{children:[t(ky,{children:t(nv,{enabled:!u&&!o,isOpen:E,renderElement:()=>e(ov,{ref:H,$disabled:o,$error:l||!!D,$readOnly:u,onBlur:X,children:[e(so,{error:l||!!D,currentActive:null===C?"none":C,children:[t(yo,{ref:j,onFocus:()=>V("start"),placeholder:"start"===C?"hh:mm":"From",onChange:e=>B(e.target.value),value:T,disabled:o,readOnly:u,"data-testid":$["data-testid"]?`${$["data-testid"]}-timepicker-selector`:"timepicker-selector",onClick:()=>Y("start"),onKeyDown:U,autoComplete:"off","aria-label":"Start time input",type:"text",role:"combobox","aria-expanded":E,"aria-controls":F,"aria-autocomplete":"list"}),t(yo,{ref:L,onFocus:()=>V("end"),placeholder:"end"===C?"hh:mm":"To",onChange:e=>z(e.target.value),value:A,disabled:o,readOnly:u,"data-testid":$["data-testid"]?`${$["data-testid"]}-timepicker-selector`:"timepicker-selector",onClick:()=>Y("end"),onKeyDown:U,autoComplete:"off","aria-label":"End time input",type:"text",role:"combobox","aria-expanded":E,"aria-controls":F,"aria-autocomplete":"list"})]}),K()]}),renderDropdown:()=>{if(E)return t(Xy,"start"===C?{listItems:P,onSelectItem:q,selectedItems:[T],disableItemFocus:!0,topScrollItem:$o.findClosestFlooredTime(N(T),P),listboxId:F}:{listItems:W,onSelectItem:G,selectedItems:[A],disableItemFocus:!0,topScrollItem:$o.findClosestFlooredTime(N(A),W),listboxId:F})},onClose:e=>{"outside-press"===e?(S(null),k(!1),null==p||p()):Z(T,A,{triggerOnBlur:!0})},onDismiss:()=>{var e;null===(e=("start"===C?j:L).current)||void 0===e||e.focus(),k(!1)},offset:8,alignment:b,fitAvailableHeight:!0,customZIndex:y})}),!l&&D&&t(Zc,{id:n?`${n}-error-message`:"error-message",tabIndex:0,"data-testid":n?`${n}-error-message`:"error-message",children:D})]}))},sv=e=>{var{variant:r="dial"}=e,n=oe(e,["variant"]);return t("combobox"===r?iv:Gc,Object.assign({},n))};export{sv as TimeRangePicker};
//# sourceMappingURL=index.js.map
