import{jsxs as e,jsx as t,Fragment as r}from"react/jsx-runtime";import*as n from"react";import o,{useRef as i,useEffect as s,useState as a,isValidElement as l,createRef as d,cloneElement as c,PureComponent as u,useLayoutEffect as h,forwardRef as g,useCallback as m,useContext as f,useMemo as p,createElement as b}from"react";import{ArrowRightIcon as v,ChevronDownIcon as y}from"@lifesg/react-icons";import x,{css as w,keyframes as $,useTheme as F}from"styled-components";import{ChevronDownIcon as C}from"@lifesg/react-icons/chevron-down";import{ChevronUpIcon as E}from"@lifesg/react-icons/chevron-up";import S,{findDOMNode as k,unstable_batchedUpdates as I}from"react-dom";import{ArrowRightIcon as T}from"@lifesg/react-icons/arrow-right";import{ExclamationCircleFillIcon as D}from"@lifesg/react-icons/exclamation-circle-fill";import{ExclamationTriangleFillIcon as B}from"@lifesg/react-icons/exclamation-triangle-fill";import{ICircleFillIcon as z}from"@lifesg/react-icons/i-circle-fill";import{TickCircleFillIcon as M}from"@lifesg/react-icons/tick-circle-fill";import{ExternalIcon as A}from"@lifesg/react-icons/external";import{CircleIcon as _}from"@lifesg/react-icons/circle";import{CircleDotIcon as O}from"@lifesg/react-icons/circle-dot";import{CrossIcon as R}from"@lifesg/react-icons/cross";import{SquareIcon as H}from"@lifesg/react-icons/square";import{SquareTickFillIcon as j}from"@lifesg/react-icons/square-tick-fill";import{TickIcon as L}from"@lifesg/react-icons/tick";import{SquareFillIcon as P}from"@lifesg/react-icons/square-fill";import{MagnifierIcon as W}from"@lifesg/react-icons/magnifier";import"@lifesg/react-icons/caret-right";import{MinusSquareFillIcon as N}from"@lifesg/react-icons/minus-square-fill";import{useFloatingTree as V,useFloating as Y,autoUpdate as U,offset as q,flip as G,shift as Z,limitShift as Q,size as X,useTransitionStyles as K,useClick as J,useDismiss as ee,useInteractions as te,FloatingPortal as re,FloatingFocusManager as ne}from"@floating-ui/react";function oe(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(n=Object.getOwnPropertySymbols(e);o<n.length;o++)t.indexOf(n[o])<0&&Object.prototype.propertyIsEnumerable.call(e,n[o])&&(r[n[o]]=e[n[o]])}return r}"function"==typeof SuppressedError&&SuppressedError;const ie=(e,t,r="window",n)=>{const o=i();s((()=>{o.current=t}),[t]),s((()=>{let t;switch(r){case"window":t=window;break;case"document":t=document;break;default:t=r}if(!t||!t.addEventListener)return;const i=e=>{var t;return null===(t=o.current)||void 0===t?void 0:t.call(o,e)};return t.addEventListener(e,i,n),()=>{null==t||t.removeEventListener(e,i,n)}}),[e,r])};var se="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};function ae(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var le=Array.isArray,de="object"==typeof se&&se&&se.Object===Object&&se,ce=de,ue="object"==typeof self&&self&&self.Object===Object&&self,he=ce||ue||Function("return this")(),ge=he.Symbol,me=ge,fe=Object.prototype,pe=fe.hasOwnProperty,be=fe.toString,ve=me?me.toStringTag:void 0;var ye=function(e){var t=pe.call(e,ve),r=e[ve];try{e[ve]=void 0;var n=!0}catch(e){}var o=be.call(e);return n&&(t?e[ve]=r:delete e[ve]),o},xe=Object.prototype.toString;var we=ye,$e=function(e){return xe.call(e)},Fe=ge?ge.toStringTag:void 0;var Ce=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":Fe&&Fe in Object(e)?we(e):$e(e)};var Ee=function(e){return null!=e&&"object"==typeof e},Se=Ce,ke=Ee;var Ie=function(e){return"symbol"==typeof e||ke(e)&&"[object Symbol]"==Se(e)},Te=le,De=Ie,Be=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,ze=/^\w*$/;var Me=function(e,t){if(Te(e))return!1;var r=typeof e;return!("number"!=r&&"symbol"!=r&&"boolean"!=r&&null!=e&&!De(e))||(ze.test(e)||!Be.test(e)||null!=t&&e in Object(t))};var Ae=function(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)},_e=Ce,Oe=Ae;var Re,He=function(e){if(!Oe(e))return!1;var t=_e(e);return"[object Function]"==t||"[object GeneratorFunction]"==t||"[object AsyncFunction]"==t||"[object Proxy]"==t},je=he["__core-js_shared__"],Le=(Re=/[^.]+$/.exec(je&&je.keys&&je.keys.IE_PROTO||""))?"Symbol(src)_1."+Re:"";var Pe=function(e){return!!Le&&Le in e},We=Function.prototype.toString;var Ne=function(e){if(null!=e){try{return We.call(e)}catch(e){}try{return e+""}catch(e){}}return""},Ve=He,Ye=Pe,Ue=Ae,qe=Ne,Ge=/^\[object .+?Constructor\]$/,Ze=Function.prototype,Qe=Object.prototype,Xe=Ze.toString,Ke=Qe.hasOwnProperty,Je=RegExp("^"+Xe.call(Ke).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");var et=function(e,t){return null==e?void 0:e[t]},tt=function(e){return!(!Ue(e)||Ye(e))&&(Ve(e)?Je:Ge).test(qe(e))},rt=et;var nt=function(e,t){var r=rt(e,t);return tt(r)?r:void 0},ot=nt(Object,"create"),it=ot;var st=function(){this.__data__=it?it(null):{},this.size=0};var at=function(e){var t=this.has(e)&&delete this.__data__[e];return this.size-=t?1:0,t},lt=ot,dt=Object.prototype.hasOwnProperty;var ct=function(e){var t=this.__data__;if(lt){var r=t[e];return"__lodash_hash_undefined__"===r?void 0:r}return dt.call(t,e)?t[e]:void 0},ut=ot,ht=Object.prototype.hasOwnProperty;var gt=function(e){var t=this.__data__;return ut?void 0!==t[e]:ht.call(t,e)},mt=ot;var ft=function(e,t){var r=this.__data__;return this.size+=this.has(e)?0:1,r[e]=mt&&void 0===t?"__lodash_hash_undefined__":t,this},pt=st,bt=at,vt=ct,yt=gt,xt=ft;function wt(e){var t=-1,r=null==e?0:e.length;for(this.clear();++t<r;){var n=e[t];this.set(n[0],n[1])}}wt.prototype.clear=pt,wt.prototype.delete=bt,wt.prototype.get=vt,wt.prototype.has=yt,wt.prototype.set=xt;var $t=wt;var Ft=function(){this.__data__=[],this.size=0};var Ct=function(e,t){return e===t||e!=e&&t!=t},Et=Ct;var St=function(e,t){for(var r=e.length;r--;)if(Et(e[r][0],t))return r;return-1},kt=St,It=Array.prototype.splice;var Tt=function(e){var t=this.__data__,r=kt(t,e);return!(r<0)&&(r==t.length-1?t.pop():It.call(t,r,1),--this.size,!0)},Dt=St;var Bt=function(e){var t=this.__data__,r=Dt(t,e);return r<0?void 0:t[r][1]},zt=St;var Mt=function(e){return zt(this.__data__,e)>-1},At=St;var _t=function(e,t){var r=this.__data__,n=At(r,e);return n<0?(++this.size,r.push([e,t])):r[n][1]=t,this},Ot=Ft,Rt=Tt,Ht=Bt,jt=Mt,Lt=_t;function Pt(e){var t=-1,r=null==e?0:e.length;for(this.clear();++t<r;){var n=e[t];this.set(n[0],n[1])}}Pt.prototype.clear=Ot,Pt.prototype.delete=Rt,Pt.prototype.get=Ht,Pt.prototype.has=jt,Pt.prototype.set=Lt;var Wt=Pt,Nt=nt(he,"Map"),Vt=$t,Yt=Wt,Ut=Nt;var qt=function(e){var t=typeof e;return"string"==t||"number"==t||"symbol"==t||"boolean"==t?"__proto__"!==e:null===e};var Gt=function(e,t){var r=e.__data__;return qt(t)?r["string"==typeof t?"string":"hash"]:r.map},Zt=Gt;var Qt=function(e){var t=Zt(this,e).delete(e);return this.size-=t?1:0,t},Xt=Gt;var Kt=function(e){return Xt(this,e).get(e)},Jt=Gt;var er=function(e){return Jt(this,e).has(e)},tr=Gt;var rr=function(e,t){var r=tr(this,e),n=r.size;return r.set(e,t),this.size+=r.size==n?0:1,this},nr=function(){this.size=0,this.__data__={hash:new Vt,map:new(Ut||Yt),string:new Vt}},or=Qt,ir=Kt,sr=er,ar=rr;function lr(e){var t=-1,r=null==e?0:e.length;for(this.clear();++t<r;){var n=e[t];this.set(n[0],n[1])}}lr.prototype.clear=nr,lr.prototype.delete=or,lr.prototype.get=ir,lr.prototype.has=sr,lr.prototype.set=ar;var dr=lr,cr=dr;function ur(e,t){if("function"!=typeof e||null!=t&&"function"!=typeof t)throw new TypeError("Expected a function");var r=function(){var n=arguments,o=t?t.apply(this,n):n[0],i=r.cache;if(i.has(o))return i.get(o);var s=e.apply(this,n);return r.cache=i.set(o,s)||i,s};return r.cache=new(ur.Cache||cr),r}ur.Cache=cr;var hr=ur;var gr=function(e){var t=hr(e,(function(e){return 500===r.size&&r.clear(),e})),r=t.cache;return t},mr=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,fr=/\\(\\)?/g,pr=gr((function(e){var t=[];return 46===e.charCodeAt(0)&&t.push(""),e.replace(mr,(function(e,r,n,o){t.push(n?o.replace(fr,"$1"):r||e)})),t}));var br=function(e,t){for(var r=-1,n=null==e?0:e.length,o=Array(n);++r<n;)o[r]=t(e[r],r,e);return o},vr=le,yr=Ie,xr=ge?ge.prototype:void 0,wr=xr?xr.toString:void 0;var $r=function e(t){if("string"==typeof t)return t;if(vr(t))return br(t,e)+"";if(yr(t))return wr?wr.call(t):"";var r=t+"";return"0"==r&&1/t==-1/0?"-0":r},Fr=$r;var Cr=le,Er=Me,Sr=pr,kr=function(e){return null==e?"":Fr(e)};var Ir=function(e,t){return Cr(e)?e:Er(e,t)?[e]:Sr(kr(e))},Tr=Ie;var Dr=function(e){if("string"==typeof e||Tr(e))return e;var t=e+"";return"0"==t&&1/e==-1/0?"-0":t},Br=Ir,zr=Dr;var Mr=function(e,t){for(var r=0,n=(t=Br(t,e)).length;null!=e&&r<n;)e=e[zr(t[r++])];return r&&r==n?e:void 0},Ar=Mr;var _r=function(e,t,r){var n=null==e?void 0:Ar(e,t);return void 0===n?r:n},Or=ae(_r);const Rr=(e,t,r)=>Or(r,t)||Or(e,t),Hr=(e,t)=>{const r=t||e.defaultValue;return Or(e.collections,r)},jr={collections:{default:{"width-005":.5,"width-010":1,"width-020":2,"width-040":4,solid:"solid"}},defaultValue:"default"},Lr=e=>t=>{var r;const n=t.theme,o=Hr(jr,null==n?void 0:n.borderScheme);return(null===(r=null==n?void 0:n.overrides)||void 0===r?void 0:r.border)?`${Rr(o,e,n.overrides.border)}px`:`${o[e]}px`},Pr={"width-005":Lr("width-005"),"width-010":Lr("width-010"),"width-020":Lr("width-020"),"width-040":Lr("width-040"),solid:(Wr="solid",e=>{var t;const r=e.theme,n=Hr(jr,null==r?void 0:r.borderScheme),o=(null===(t=null==r?void 0:r.overrides)||void 0===t?void 0:t.border)?Rr(n,Wr,r.overrides.border):n[Wr];return"function"==typeof o?o(e):o})};var Wr;const Nr={collections:{lifesg:{"brand-10":"#2C0C0B","brand-20":"#4C1513","brand-30":"#6C1D1B","brand-40":"#922825","brand-50":"#BF3431","brand-60":"#F15D5A","brand-70":"#F69491","brand-80":"#FABAB7","brand-90":"#FCD7D2","brand-95":"#FFEBE7","brand-100":"#FFF6F4","primary-10":"#001731","primary-20":"#002752","primary-30":"#003874","primary-40":"#004D9F","primary-50":"#1768BE","primary-60":"#3C91EC","primary-70":"#6CB4FF","primary-80":"#A5CDFF","primary-90":"#CFE1FE","primary-95":"#E8F0FE","primary-100":"#F7F9FF","secondary-10":"#131529","secondary-20":"#222547","secondary-30":"#2F3565","secondary-40":"#42498B","secondary-50":"#5B62A7","secondary-60":"#858CBD","secondary-70":"#A8ADCF","secondary-80":"#C6C9E0","secondary-90":"#DDDFEC","secondary-95":"#EDEEF5","secondary-100":"#F8F8FB","neutral-10":"#161616","neutral-20":"#282828","neutral-30":"#393939","neutral-40":"#4E4E4E","neutral-50":"#686868","neutral-60":"#8E8E8E","neutral-70":"#AFAFB0","neutral-80":"#C7CACA","neutral-90":"#DDE1E2","neutral-95":"#EDEFEF","neutral-100":"#F9F9F9","success-10":"#081A0F","success-20":"#0E2D1B","success-30":"#154126","success-40":"#1C5A34","success-50":"#257645","success-60":"#44A068","success-70":"#64C189","success-80":"#80DCA5","success-90":"#B4ECCB","success-95":"#D5F6E2","success-100":"#EFFCF4","warning-10":"#221302","warning-20":"#3B2204","warning-30":"#543106","warning-40":"#744408","warning-50":"#98590C","warning-60":"#D07A13","warning-70":"#E4A244","warning-80":"#F5C26C","warning-90":"#FADBA6","warning-95":"#FCECD4","warning-100":"#FDF7F0","error-10":"#330505","error-20":"#550808","error-30":"#750C0C","error-40":"#9E130F","error-50":"#CB2213","error-60":"#DE6C6C","error-70":"#E89B9B","error-80":"#EFBEBE","error-90":"#F5D9D9","error-95":"#F9ECEC","error-100":"#FCF7F7","info-10":"#021824","info-20":"#032B3F","info-30":"#053D59","info-40":"#065478","info-50":"#176E9B","info-60":"#5296BE","info-70":"#82B5DA","info-80":"#ACCFE7","info-90":"#CCE3F1","info-95":"#E3F1F8","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000","primary-inverse":"#FEAB10"},bookingsg:{"brand-10":"#2C0C0B","brand-20":"#4C1513","brand-30":"#6C1D1B","brand-40":"#922825","brand-50":"#BF3431","brand-60":"#F15D5A","brand-70":"#F69491","brand-80":"#FABAB7","brand-90":"#FCD7D2","brand-95":"#FFEBE7","brand-100":"#FFF6F4","primary-10":"#1A122C","primary-20":"#2F1F4D","primary-30":"#422D6E","primary-40":"#5B3D97","primary-50":"#7654BC","primary-60":"#9A82CD","primary-70":"#B7A7D8","primary-80":"#CFC5E5","primary-90":"#E3DDF0","primary-95":"#F0EDF7","primary-100":"#F9F8FC","secondary-10":"#0E1723","secondary-20":"#18293D","secondary-30":"#233A57","secondary-40":"#305078","secondary-50":"#4B6A8F","secondary-60":"#7B91A9","secondary-70":"#A1B1C3","secondary-80":"#C1CBD7","secondary-90":"#DBE1E8","secondary-95":"#EBEFF2","secondary-100":"#F7F8FA","neutral-10":"#161616","neutral-20":"#282828","neutral-30":"#393939","neutral-40":"#4E4E4E","neutral-50":"#686868","neutral-60":"#8E8E8E","neutral-70":"#AFAFB0","neutral-80":"#C7CACA","neutral-90":"#DDE1E2","neutral-95":"#EDEFEF","neutral-100":"#F9F9F9","success-10":"#081A0F","success-20":"#0E2D1B","success-30":"#154126","success-40":"#1C5A34","success-50":"#257645","success-60":"#44A068","success-70":"#64C189","success-80":"#80DCA5","success-90":"#B4ECCB","success-95":"#D5F6E2","success-100":"#EFFCF4","warning-10":"#221302","warning-20":"#3B2204","warning-30":"#543106","warning-40":"#744408","warning-50":"#98590C","warning-60":"#D07A13","warning-70":"#E4A244","warning-80":"#F5C26C","warning-90":"#FADBA6","warning-95":"#FCECD4","warning-100":"#FDF7F0","error-10":"#330505","error-20":"#550808","error-30":"#750C0C","error-40":"#9E130F","error-50":"#CB2213","error-60":"#DE6C6C","error-70":"#E89B9B","error-80":"#EFBEBE","error-90":"#F5D9D9","error-95":"#F9ECEC","error-100":"#FCF7F7","info-10":"#021824","info-20":"#032B3F","info-30":"#053D59","info-40":"#065478","info-50":"#176E9B","info-60":"#5296BE","info-70":"#82B5DA","info-80":"#ACCFE7","info-90":"#CCE3F1","info-95":"#E3F1F8","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000","primary-inverse":"#FEAB10"},rbs:{"brand-10":"#0E123A","brand-20":"#191E65","brand-30":"#232B90","brand-40":"#303BC5","brand-50":"#494CFF","brand-60":"#AD6EFF","brand-70":"#AEA4FF","brand-80":"#C5C4FF","brand-90":"#DDDCFF","brand-95":"#EDECFF","brand-100":"#F8F8FF","primary-10":"#10152B","primary-20":"#1C254B","primary-30":"#28356C","primary-40":"#38489A","primary-50":"#4D5AD7","primary-60":"#7487F2","primary-70":"#9AAAFC","primary-80":"#BDC7FD","primary-90":"#DADFFB","primary-95":"#ECEEFE","primary-100":"#F7F8FF","secondary-10":"#19151D","secondary-20":"#2B2533","secondary-30":"#3E3649","secondary-40":"#564A64","secondary-50":"#6F637D","secondary-60":"#948B9F","secondary-70":"#B3ACBB","secondary-80":"#CCC8D2","secondary-90":"#E1DEE4","secondary-95":"#EFEEF1","secondary-100":"#F9F8F9","neutral-10":"#161616","neutral-20":"#282828","neutral-30":"#393939","neutral-40":"#4E4E4E","neutral-50":"#686868","neutral-60":"#8E8E8E","neutral-70":"#AFAFB0","neutral-80":"#C7CACA","neutral-90":"#DDE1E2","neutral-95":"#EDEFEF","neutral-100":"#F9F9F9","success-10":"#081A0F","success-20":"#0E2D1B","success-30":"#154126","success-40":"#1C5A34","success-50":"#257645","success-60":"#44A068","success-70":"#64C189","success-80":"#80DCA5","success-90":"#B4ECCB","success-95":"#D5F6E2","success-100":"#EFFCF4","warning-10":"#221302","warning-20":"#3B2204","warning-30":"#543106","warning-40":"#744408","warning-50":"#98590C","warning-60":"#D07A13","warning-70":"#E4A244","warning-80":"#F5C26C","warning-90":"#FADBA6","warning-95":"#FCECD4","warning-100":"#FDF7F0","error-10":"#330505","error-20":"#550808","error-30":"#750C0C","error-40":"#9E130F","error-50":"#CB2213","error-60":"#DE6C6C","error-70":"#E89B9B","error-80":"#EFBEBE","error-90":"#F5D9D9","error-95":"#F9ECEC","error-100":"#FCF7F7","info-10":"#021824","info-20":"#032B3F","info-30":"#053D59","info-40":"#065478","info-50":"#176E9B","info-60":"#5296BE","info-70":"#82B5DA","info-80":"#ACCFE7","info-90":"#CCE3F1","info-95":"#E3F1F8","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000","primary-inverse":"#FEAB10"},mylegacy:{"brand-10":"#2C0C0B","brand-20":"#4C1513","brand-30":"#6C1D1B","brand-40":"#922825","brand-50":"#BF3431","brand-60":"#F15D5A","brand-70":"#F69491","brand-80":"#FABAB7","brand-90":"#FCD7D2","brand-95":"#FFEBE7","brand-100":"#FFF6F4","primary-10":"#0011924","primary-20":"#032B40","primary-30":"#043D5A","primary-40":"#05547B","primary-50":"#096EA1","primary-60":"#2098D3","primary-70":"#5CB9E8","primary-80":"#8BD3F6","primary-90":"#BEE6FA","primary-95":"#E2F2FA","primary-100":"#F4FAFC","secondary-10":"#131529","secondary-20":"#222547","secondary-30":"#2F3565","secondary-40":"#42498B","secondary-50":"#5B62A7","secondary-60":"#858CBD","secondary-70":"#A8ADCF","secondary-80":"#C6C9E0","secondary-90":"#DDDFEC","secondary-95":"#EDEEF5","secondary-100":"#F8F8FB","neutral-10":"#161616","neutral-20":"#282828","neutral-30":"#393939","neutral-40":"#4E4E4E","neutral-50":"#686868","neutral-60":"#8E8E8E","neutral-70":"#AFAFB0","neutral-80":"#C7CACA","neutral-90":"#DDE1E2","neutral-95":"#EDEFEF","neutral-100":"#F9F9F9","success-10":"#081A0F","success-20":"#0E2D1B","success-30":"#154126","success-40":"#1C5A34","success-50":"#257645","success-60":"#44A068","success-70":"#64C189","success-80":"#80DCA5","success-90":"#B4ECCB","success-95":"#D5F6E2","success-100":"#EFFCF4","warning-10":"#221302","warning-20":"#3B2204","warning-30":"#543106","warning-40":"#744408","warning-50":"#98590C","warning-60":"#D07A13","warning-70":"#E4A244","warning-80":"#F5C26C","warning-90":"#FADBA6","warning-95":"#FCECD4","warning-100":"#FDF7F0","error-10":"#330505","error-20":"#550808","error-30":"#750C0C","error-40":"#9E130F","error-50":"#CB2213","error-60":"#DE6C6C","error-70":"#E89B9B","error-80":"#EFBEBE","error-90":"#F5D9D9","error-95":"#F9ECEC","error-100":"#FCF7F7","info-10":"#021824","info-20":"#032B3F","info-30":"#053D59","info-40":"#065478","info-50":"#176E9B","info-60":"#5296BE","info-70":"#82B5DA","info-80":"#ACCFE7","info-90":"#CCE3F1","info-95":"#E3F1F8","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000","primary-inverse":"#FEAB10"},ccube:{"brand-10":"#1F1221","brand-20":"#371F3B","brand-30":"#4E2C53","brand-40":"#6B3E73","brand-50":"#8D5197","brand-60":"#FF3399","brand-70":"#FF88C4","brand-80":"#FFB3D9","brand-90":"#FFD4E9","brand-95":"#FFE8F3","brand-100":"#FFD6EB","primary-10":"#1F1221","primary-20":"#371F3B","primary-30":"#4E2C53","primary-40":"#6B3E73","primary-50":"#8D5197","primary-60":"#B07DB7","primary-70":"#C7A3CC","primary-80":"#D9C2DD","primary-90":"#E9DBEB","primary-95":"#F3ECF4","primary-100":"#FAF7FA","secondary-10":"#2D091B","secondary-20":"#4D0F2E","secondary-30":"#6B1540","secondary-40":"#931D58","secondary-50":"#C02673","secondary-60":"#FF409F","secondary-70":"#FF88C4","secondary-80":"#FFB3D9","secondary-90":"#FFD4E9","secondary-95":"#FFE8F3","secondary-100":"#FFF8FC","neutral-10":"#161616","neutral-20":"#282828","neutral-30":"#393939","neutral-40":"#4E4E4E","neutral-50":"#686868","neutral-60":"#8E8E8E","neutral-70":"#AFAFB0","neutral-80":"#C7CACA","neutral-90":"#DDE1E2","neutral-95":"#EDEFEF","neutral-100":"#F9F9F9","success-10":"#081A0F","success-20":"#0E2D1B","success-30":"#154126","success-40":"#1C5A34","success-50":"#257645","success-60":"#44A068","success-70":"#64C189","success-80":"#80DCA5","success-90":"#B4ECCB","success-95":"#D5F6E2","success-100":"#EFFCF4","warning-10":"#221302","warning-20":"#3B2204","warning-30":"#543106","warning-40":"#744408","warning-50":"#98590C","warning-60":"#D07A13","warning-70":"#E4A244","warning-80":"#F5C26C","warning-90":"#FADBA6","warning-95":"#FCECD4","warning-100":"#FDF7F0","error-10":"#330505","error-20":"#550808","error-30":"#750C0C","error-40":"#9E130F","error-50":"#CB2213","error-60":"#DE6C6C","error-70":"#E89B9B","error-80":"#EFBEBE","error-90":"#F5D9D9","error-95":"#F9ECEC","error-100":"#FCF7F7","info-10":"#021824","info-20":"#032B3F","info-30":"#053D59","info-40":"#065478","info-50":"#176E9B","info-60":"#5296BE","info-70":"#82B5DA","info-80":"#ACCFE7","info-90":"#CCE3F1","info-95":"#E3F1F8","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000","primary-inverse":"#FEAB10"},oneservice:{"brand-10":"#001A19","brand-20":"#002D2B","brand-30":"#00413D","brand-40":"#005954","brand-50":"#00756F","brand-60":"#03A098","brand-70":"#55BFBA","brand-80":"#92D6D2","brand-90":"#BFE7E5","brand-95":"#DDF2F1","brand-100":"#F4FBFA","primary-10":"#09191D","primary-20":"#102B34","primary-30":"#173D49","primary-40":"#205666","primary-50":"#2A7086","primary-60":"#2A7086","primary-70":"#8CB6C2","primary-80":"#B2CED6","primary-90":"#D1E2E7","primary-95":"#E8F0F3","primary-100":"#F9F8FC","secondary-10":"#001731","secondary-20":"#002752","secondary-30":"#003874","secondary-40":"#004D9F","secondary-50":"#5B62A7","secondary-60":"#858CBD","secondary-70":"#A8ADCF","secondary-80":"#C6C9E0","secondary-90":"#DDDFEC","secondary-95":"#EDEEF5","secondary-100":"#F8F8FB","neutral-10":"#161616","neutral-20":"#282828","neutral-30":"#393939","neutral-40":"#4E4E4E","neutral-50":"#686868","neutral-60":"#8E8E8E","neutral-70":"#AFAFB0","neutral-80":"#C7CACA","neutral-90":"#DDE1E2","neutral-95":"#EDEFEF","neutral-100":"#F9F9F9","success-10":"#081A0F","success-20":"#0E2D1B","success-30":"#154126","success-40":"#1C5A34","success-50":"#257645","success-60":"#44A068","success-70":"#64C189","success-80":"#80DCA5","success-90":"#B4ECCB","success-95":"#D5F6E2","success-100":"#EFFCF4","warning-10":"#221302","warning-20":"#3B2204","warning-30":"#543106","warning-40":"#744408","warning-50":"#98590C","warning-60":"#D07A13","warning-70":"#E4A244","warning-80":"#F5C26C","warning-90":"#FADBA6","warning-95":"#FCECD4","warning-100":"#FDF7F0","error-10":"#330505","error-20":"#550808","error-30":"#750C0C","error-40":"#9E130F","error-50":"#CB2213","error-60":"#DE6C6C","error-70":"#E89B9B","error-80":"#EFBEBE","error-90":"#F5D9D9","error-95":"#F9ECEC","error-100":"#FCF7F7","info-10":"#021824","info-20":"#032B3F","info-30":"#053D59","info-40":"#065478","info-50":"#176E9B","info-60":"#5296BE","info-70":"#82B5DA","info-80":"#ACCFE7","info-90":"#CCE3F1","info-95":"#E3F1F8","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000","primary-inverse":"#FEAB10"},pa:{"brand-10":"#881317","brand-20":"#B5191E","brand-30":"#B5040A","brand-40":"#D0333F","brand-50":"#DC666F","brand-60":"#E28087","brand-70":"#E7999F","brand-80":"#EDB3B7","brand-90":"#F3CCCF","brand-95":"#F9E6E7","brand-100":"#FCF2F3","primary-10":"#000000","primary-20":"#191919","primary-30":"#333333","primary-40":"#4D4D4D","primary-50":"#666666","primary-60":"#808080","primary-70":"#999999","primary-80":"#B3B3B3","primary-90":"#E6E6E6","primary-95":"#F7F7F7","primary-100":"#FFFFFF","secondary-10":"#19151D","secondary-20":"#2B2533","secondary-30":"#3E3649","secondary-40":"#564A64","secondary-50":"#6F637D","secondary-60":"#948B9F","secondary-70":"#B3ACBB","secondary-80":"#CCC8D2","secondary-90":"#E1DEE4","secondary-95":"#EFEEF1","secondary-100":"#F9F8F9","neutral-10":"#000000","neutral-20":"#191919","neutral-30":"#333333","neutral-40":"#4D4D4D","neutral-50":"#666666","neutral-60":"#808080","neutral-70":"#999999","neutral-80":"#B3B3B3","neutral-90":"#E6E6E6","neutral-95":"#F7F7F7","neutral-100":"#FFFFFF","success-10":"#081A0F","success-20":"#0E2D1B","success-30":"#154126","success-40":"#1C5A34","success-50":"#257645","success-60":"#44A068","success-70":"#64C189","success-80":"#80DCA5","success-90":"#B4ECCB","success-95":"#D5F6E2","success-100":"#EFFCF4","warning-10":"#221302","warning-20":"#3B2204","warning-30":"#543106","warning-40":"#744408","warning-50":"#98590C","warning-60":"#D07A13","warning-70":"#E4A244","warning-80":"#F5C26C","warning-90":"#FADBA6","warning-95":"#FCECD4","warning-100":"#FDF7F0","error-10":"#330505","error-20":"#550808","error-30":"#750C0C","error-40":"#9E130F","error-50":"#CB2213","error-60":"#DE6C6C","error-70":"#E89B9B","error-80":"#EFBEBE","error-90":"#F5D9D9","error-95":"#F9ECEC","error-100":"#FCF7F7","info-10":"#021824","info-20":"#032B3F","info-30":"#053D59","info-40":"#065478","info-50":"#176E9B","info-60":"#5296BE","info-70":"#82B5DA","info-80":"#ACCFE7","info-90":"#CCE3F1","info-95":"#E3F1F8","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000","primary-inverse":"#FEAB10"}},defaultValue:"lifesg"},Vr=e=>t=>{var r;const n=t.theme,o=Hr(Nr,null==n?void 0:n.colourScheme);return(null===(r=null==n?void 0:n.overrides)||void 0===r?void 0:r.primitiveColour)?Rr(o,e,n.overrides.primitiveColour):o[e]},Yr={"brand-10":Vr("brand-10"),"brand-20":Vr("brand-20"),"brand-30":Vr("brand-30"),"brand-40":Vr("brand-40"),"brand-50":Vr("brand-50"),"brand-60":Vr("brand-60"),"brand-70":Vr("brand-70"),"brand-80":Vr("brand-80"),"brand-90":Vr("brand-90"),"brand-95":Vr("brand-95"),"brand-100":Vr("brand-100"),"primary-10":Vr("primary-10"),"primary-20":Vr("primary-20"),"primary-30":Vr("primary-30"),"primary-40":Vr("primary-40"),"primary-50":Vr("primary-50"),"primary-60":Vr("primary-60"),"primary-70":Vr("primary-70"),"primary-80":Vr("primary-80"),"primary-90":Vr("primary-90"),"primary-95":Vr("primary-95"),"primary-100":Vr("primary-100"),"secondary-10":Vr("secondary-10"),"secondary-20":Vr("secondary-20"),"secondary-30":Vr("secondary-30"),"secondary-40":Vr("secondary-40"),"secondary-50":Vr("secondary-50"),"secondary-60":Vr("secondary-60"),"secondary-70":Vr("secondary-70"),"secondary-80":Vr("secondary-80"),"secondary-90":Vr("secondary-90"),"secondary-95":Vr("secondary-95"),"secondary-100":Vr("secondary-100"),"neutral-10":Vr("neutral-10"),"neutral-20":Vr("neutral-20"),"neutral-30":Vr("neutral-30"),"neutral-40":Vr("neutral-40"),"neutral-50":Vr("neutral-50"),"neutral-60":Vr("neutral-60"),"neutral-70":Vr("neutral-70"),"neutral-80":Vr("neutral-80"),"neutral-90":Vr("neutral-90"),"neutral-95":Vr("neutral-95"),"neutral-100":Vr("neutral-100"),"success-10":Vr("success-10"),"success-20":Vr("success-20"),"success-30":Vr("success-30"),"success-40":Vr("success-40"),"success-50":Vr("success-50"),"success-60":Vr("success-60"),"success-70":Vr("success-70"),"success-80":Vr("success-80"),"success-90":Vr("success-90"),"success-95":Vr("success-95"),"success-100":Vr("success-100"),"warning-10":Vr("warning-10"),"warning-20":Vr("warning-20"),"warning-30":Vr("warning-30"),"warning-40":Vr("warning-40"),"warning-50":Vr("warning-50"),"warning-60":Vr("warning-60"),"warning-70":Vr("warning-70"),"warning-80":Vr("warning-80"),"warning-90":Vr("warning-90"),"warning-95":Vr("warning-95"),"warning-100":Vr("warning-100"),"error-10":Vr("error-10"),"error-20":Vr("error-20"),"error-30":Vr("error-30"),"error-40":Vr("error-40"),"error-50":Vr("error-50"),"error-60":Vr("error-60"),"error-70":Vr("error-70"),"error-80":Vr("error-80"),"error-90":Vr("error-90"),"error-95":Vr("error-95"),"error-100":Vr("error-100"),"info-10":Vr("info-10"),"info-20":Vr("info-20"),"info-30":Vr("info-30"),"info-40":Vr("info-40"),"info-50":Vr("info-50"),"info-60":Vr("info-60"),"info-70":Vr("info-70"),"info-80":Vr("info-80"),"info-90":Vr("info-90"),"info-95":Vr("info-95"),"info-100":Vr("info-100"),white:Vr("white"),black:Vr("black"),"primary-inverse":Vr("primary-inverse")},Ur={text:Vr("neutral-20"),"text-subtle":Vr("neutral-30"),"text-subtler":Vr("neutral-50"),"text-subtlest":Vr("neutral-60"),"text-primary":Vr("primary-50"),"text-hover":Vr("primary-40"),"text-selected":Vr("primary-50"),"text-selected-hover":Vr("primary-40"),"text-disabled":Vr("neutral-50"),"text-disabled-subtle":Vr("neutral-60"),"text-disabled-subtlest":Vr("neutral-80"),"text-selected-disabled":Vr("neutral-20"),"text-success":Vr("success-40"),"text-warning":Vr("warning-40"),"text-error":Vr("error-40"),"text-info":Vr("info-40"),"text-inverse":Vr("white"),icon:Vr("neutral-50"),"icon-subtle":Vr("neutral-60"),"icon-strongest":Vr("neutral-20"),"icon-primary":Vr("primary-50"),"icon-primary-subtle":Vr("primary-60"),"icon-primary-subtlest":Vr("primary-70"),"icon-hover":Vr("primary-40"),"icon-selected":Vr("primary-50"),"icon-selected-hover":Vr("primary-40"),"icon-disabled":Vr("neutral-50"),"icon-disabled-subtle":Vr("neutral-60"),"icon-selected-disabled":Vr("neutral-60"),"icon-success":Vr("success-50"),"icon-warning":Vr("warning-60"),"icon-error":Vr("error-50"),"icon-error-strong":Vr("error-40"),"icon-info":Vr("info-50"),"icon-inverse":Vr("white"),"icon-primary-inverse":Vr("primary-inverse"),border:Vr("neutral-90"),"border-strong":Vr("neutral-70"),"border-stronger":Vr("neutral-50"),"border-primary":Vr("primary-50"),"border-primary-subtle":Vr("primary-60"),"border-hover":Vr("primary-90"),"border-hover-strong":Vr("primary-60"),"border-selected":Vr("primary-50"),"border-selected-subtle":Vr("primary-70"),"border-selected-subtlest":Vr("primary-90"),"border-selected-hover":Vr("primary-40"),"border-focus":Vr("primary-60"),"border-focus-strong":Vr("primary-50"),"border-disabled":Vr("neutral-90"),"border-selected-disabled":Vr("neutral-70"),"border-success":Vr("success-60"),"border-warning":Vr("warning-60"),"border-error":Vr("error-60"),"border-error-focus":Vr("error-60"),"border-error-focus-strong":Vr("error-40"),"border-error-strong":Vr("error-40"),"border-info":Vr("info-60"),bg:Vr("white"),"bg-strong":Vr("neutral-100"),"bg-stronger":Vr("neutral-95"),"bg-strongest":Vr("neutral-90"),"bg-hover":Vr("primary-95"),"bg-hover-strong":Vr("primary-90"),"bg-hover-subtle":Vr("primary-100"),"bg-hover-neutral":Vr("neutral-100"),"bg-hover-neutral-strong":Vr("neutral-90"),"bg-selected":Vr("primary-95"),"bg-selected-hover":Vr("primary-90"),"bg-selected-strong":Vr("primary-90"),"bg-selected-stronger":Vr("primary-70"),"bg-selected-strongest":Vr("primary-50"),"bg-selected-strongest-hover":Vr("primary-40"),"bg-disabled":Vr("neutral-95"),"bg-selected-disabled":Vr("neutral-95"),"bg-selected-stronger-disabled":Vr("neutral-70"),"bg-success":Vr("success-100"),"bg-success-hover":Vr("success-95"),"bg-success-strong":Vr("success-50"),"bg-success-strong-hover":Vr("success-40"),"bg-warning":Vr("warning-100"),"bg-warning-hover":Vr("warning-95"),"bg-warning-strong":Vr("warning-50"),"bg-warning-strong-hover":Vr("warning-40"),"bg-info":Vr("info-100"),"bg-info-hover":Vr("info-95"),"bg-info-strong":Vr("info-50"),"bg-info-strong-hover":Vr("info-40"),"bg-error":Vr("error-100"),"bg-error-hover":Vr("error-95"),"bg-error-strong":Vr("error-50"),"bg-error-strong-hover":Vr("error-40"),"bg-inverse":Vr("neutral-20"),"bg-inverse-subtle":Vr("neutral-30"),"bg-inverse-subtler":Vr("neutral-50"),"bg-inverse-subtlest":Vr("neutral-60"),"bg-inverse-hover":Vr("neutral-40"),"bg-primary":Vr("primary-50"),"bg-primary-subtle":Vr("primary-60"),"bg-primary-subtler":Vr("primary-95"),"bg-primary-subtlest":Vr("primary-100"),"bg-available":"#6DD0A1","bg-primary-hover":Vr("primary-40"),"bg-primary-subtlest-hover":Vr("primary-90"),"bg-primary-subtlest-selected":Vr("primary-90"),"overlay-strong":"rgba(40, 40, 40, 0.85)","overlay-subtle":"rgba(40, 40, 40, 0.20)",hyperlink:Vr("primary-50"),"hyperlink-hover":Vr("primary-40"),"hyperlink-visited":Vr("primary-40"),"hyperlink-inverse":Vr("primary-inverse"),"focus-ring":Vr("black"),"focus-ring-inverse":Vr("white")},qr={collections:{lifesg:Ur,bookingsg:Ur,rbs:Ur,mylegacy:Ur,ccube:Ur,oneservice:Ur,pa:{text:Vr("neutral-30"),"text-subtle":Vr("neutral-40"),"text-subtler":Vr("neutral-50"),"text-subtlest":Vr("neutral-70"),"text-primary":Vr("neutral-10"),"text-hover":Vr("neutral-70"),"text-selected":Vr("neutral-20"),"text-selected-hover":Vr("neutral-10"),"text-disabled":Vr("neutral-50"),"text-disabled-subtle":Vr("neutral-60"),"text-disabled-subtlest":Vr("neutral-80"),"text-selected-disabled":Vr("neutral-40"),"text-success":Vr("success-40"),"text-warning":Vr("warning-40"),"text-error":Vr("brand-30"),"text-info":Vr("neutral-40"),"text-inverse":Vr("neutral-100"),icon:Vr("neutral-40"),"icon-subtle":Vr("neutral-50"),"icon-strongest":Vr("neutral-10"),"icon-primary":Vr("neutral-10"),"icon-primary-subtle":Vr("neutral-30"),"icon-primary-subtlest":Vr("neutral-60"),"icon-hover":Vr("neutral-70"),"icon-selected":Vr("brand-20"),"icon-selected-hover":Vr("brand-10"),"icon-disabled":Vr("neutral-50"),"icon-disabled-subtle":Vr("neutral-60"),"icon-selected-disabled":Vr("neutral-40"),"icon-success":Vr("success-40"),"icon-warning":Vr("warning-60"),"icon-error":Vr("brand-30"),"icon-error-strong":Vr("brand-10"),"icon-info":Vr("neutral-40"),"icon-inverse":Vr("neutral-100"),"icon-primary-inverse":"#F9B371",border:Vr("neutral-90"),"border-strong":Vr("neutral-30"),"border-stronger":Vr("neutral-20"),"border-primary":Vr("neutral-40"),"border-primary-subtle":Vr("neutral-60"),"border-hover":Vr("neutral-80"),"border-hover-strong":Vr("neutral-10"),"border-selected":Vr("brand-20"),"border-selected-subtle":Vr("neutral-40"),"border-selected-subtlest":Vr("neutral-70"),"border-selected-hover":Vr("neutral-10"),"border-focus":Vr("neutral-20"),"border-focus-strong":Vr("neutral-10"),"border-disabled":Vr("neutral-90"),"border-selected-disabled":Vr("neutral-80"),"border-success":Vr("success-40"),"border-warning":Vr("warning-60"),"border-error":Vr("brand-30"),"border-error-focus":Vr("brand-20"),"border-error-focus-strong":Vr("brand-10"),"border-error-strong":Vr("brand-20"),"border-info":Vr("neutral-40"),bg:Vr("neutral-100"),"bg-strong":Vr("neutral-95"),"bg-stronger":Vr("neutral-90"),"bg-strongest":Vr("neutral-80"),"bg-hover":Vr("brand-90"),"bg-hover-strong":Vr("brand-80"),"bg-hover-subtle":Vr("neutral-90"),"bg-hover-neutral":Vr("neutral-90"),"bg-hover-neutral-strong":Vr("neutral-90"),"bg-selected":Vr("brand-100"),"bg-selected-hover":Vr("brand-30"),"bg-selected-strong":Vr("brand-50"),"bg-selected-stronger":Vr("brand-40"),"bg-selected-strongest":Vr("brand-20"),"bg-selected-strongest-hover":Vr("brand-10"),"bg-disabled":Vr("neutral-90"),"bg-selected-disabled":Vr("neutral-90"),"bg-selected-stronger-disabled":Vr("neutral-80"),"bg-success":Vr("success-100"),"bg-success-hover":Vr("success-95"),"bg-success-strong":Vr("success-50"),"bg-success-strong-hover":Vr("success-40"),"bg-warning":Vr("warning-100"),"bg-warning-hover":Vr("warning-95"),"bg-warning-strong":Vr("warning-50"),"bg-warning-strong-hover":Vr("warning-40"),"bg-info":Vr("neutral-95"),"bg-info-hover":Vr("info-95"),"bg-info-strong":Vr("info-50"),"bg-info-strong-hover":Vr("info-40"),"bg-error":Vr("brand-100"),"bg-error-hover":Vr("error-95"),"bg-error-strong":Vr("error-50"),"bg-error-strong-hover":Vr("error-40"),"bg-inverse":Vr("neutral-40"),"bg-inverse-subtle":Vr("neutral-60"),"bg-inverse-subtler":Vr("neutral-70"),"bg-inverse-subtlest":Vr("neutral-80"),"bg-inverse-hover":Vr("neutral-30"),"bg-primary":Vr("brand-20"),"bg-primary-subtle":Vr("brand-60"),"bg-primary-subtler":Vr("brand-80"),"bg-primary-subtlest":Vr("brand-100"),"bg-available":Vr("success-60"),"bg-primary-hover":Vr("brand-10"),"bg-primary-subtlest-hover":Vr("brand-80"),"bg-primary-subtlest-selected":Vr("brand-40"),"overlay-strong":"rgba(25, 25, 25, 0.95)","overlay-subtle":"rgba(25, 25, 25, 0.20)",hyperlink:Vr("neutral-10"),"hyperlink-hover":Vr("neutral-40"),"hyperlink-visited":Vr("neutral-50"),"hyperlink-inverse":"#F8AE68","focus-ring":Vr("black"),"focus-ring-inverse":Vr("white")}},defaultValue:"lifesg"},Gr=e=>t=>{var r;const n=t.theme,o=Hr(qr,null==n?void 0:n.colourScheme),i=(null===(r=null==n?void 0:n.overrides)||void 0===r?void 0:r.semanticColour)?Rr(o,e,n.overrides.semanticColour):o[e];return"function"==typeof i?i(t):i},Zr={text:Gr("text"),"text-subtle":Gr("text-subtle"),"text-subtler":Gr("text-subtler"),"text-subtlest":Gr("text-subtlest"),"text-primary":Gr("text-primary"),"text-hover":Gr("text-hover"),"text-selected":Gr("text-selected"),"text-selected-hover":Gr("text-selected-hover"),"text-disabled":Gr("text-disabled"),"text-disabled-subtle":Gr("text-disabled-subtle"),"text-disabled-subtlest":Gr("text-disabled-subtlest"),"text-selected-disabled":Gr("text-selected-disabled"),"text-success":Gr("text-success"),"text-warning":Gr("text-warning"),"text-error":Gr("text-error"),"text-info":Gr("text-info"),"text-inverse":Gr("text-inverse"),icon:Gr("icon"),"icon-subtle":Gr("icon-subtle"),"icon-strongest":Gr("icon-strongest"),"icon-primary":Gr("icon-primary"),"icon-primary-subtle":Gr("icon-primary-subtle"),"icon-primary-subtlest":Gr("icon-primary-subtlest"),"icon-hover":Gr("icon-hover"),"icon-selected":Gr("icon-selected"),"icon-selected-hover":Gr("icon-selected-hover"),"icon-disabled":Gr("icon-disabled"),"icon-disabled-subtle":Gr("icon-disabled-subtle"),"icon-selected-disabled":Gr("icon-selected-disabled"),"icon-success":Gr("icon-success"),"icon-warning":Gr("icon-warning"),"icon-error":Gr("icon-error"),"icon-error-strong":Gr("icon-error-strong"),"icon-info":Gr("icon-info"),"icon-inverse":Gr("icon-inverse"),"icon-primary-inverse":Gr("icon-primary-inverse"),border:Gr("border"),"border-strong":Gr("border-strong"),"border-stronger":Gr("border-stronger"),"border-primary":Gr("border-primary"),"border-primary-subtle":Gr("border-primary-subtle"),"border-hover":Gr("border-hover"),"border-hover-strong":Gr("border-hover-strong"),"border-selected":Gr("border-selected"),"border-selected-subtle":Gr("border-selected-subtle"),"border-selected-subtlest":Gr("border-selected-subtlest"),"border-selected-hover":Gr("border-selected-hover"),"border-focus":Gr("border-focus"),"border-focus-strong":Gr("border-focus-strong"),"border-disabled":Gr("border-disabled"),"border-selected-disabled":Gr("border-selected-disabled"),"border-success":Gr("border-success"),"border-warning":Gr("border-warning"),"border-error":Gr("border-error"),"border-error-focus":Gr("border-error-focus"),"border-error-focus-strong":Gr("border-error-focus-strong"),"border-error-strong":Gr("border-error-strong"),"border-info":Gr("border-info"),bg:Gr("bg"),"bg-strong":Gr("bg-strong"),"bg-stronger":Gr("bg-stronger"),"bg-strongest":Gr("bg-strongest"),"bg-hover":Gr("bg-hover"),"bg-hover-strong":Gr("bg-hover-strong"),"bg-hover-subtle":Gr("bg-hover-subtle"),"bg-hover-neutral":Gr("bg-hover-neutral"),"bg-hover-neutral-strong":Gr("bg-hover-neutral-strong"),"bg-selected":Gr("bg-selected"),"bg-selected-hover":Gr("bg-selected-hover"),"bg-selected-strong":Gr("bg-selected-strong"),"bg-selected-stronger":Gr("bg-selected-stronger"),"bg-selected-strongest":Gr("bg-selected-strongest"),"bg-selected-strongest-hover":Gr("bg-selected-strongest-hover"),"bg-disabled":Gr("bg-disabled"),"bg-selected-disabled":Gr("bg-selected-disabled"),"bg-selected-stronger-disabled":Gr("bg-selected-stronger-disabled"),"bg-success":Gr("bg-success"),"bg-success-hover":Gr("bg-success-hover"),"bg-success-strong":Gr("bg-success-strong"),"bg-success-strong-hover":Gr("bg-success-strong-hover"),"bg-warning":Gr("bg-warning"),"bg-warning-hover":Gr("bg-warning-hover"),"bg-warning-strong":Gr("bg-warning-strong"),"bg-warning-strong-hover":Gr("bg-warning-strong-hover"),"bg-info":Gr("bg-info"),"bg-info-hover":Gr("bg-info-hover"),"bg-info-strong":Gr("bg-info-strong"),"bg-info-strong-hover":Gr("bg-info-strong-hover"),"bg-error":Gr("bg-error"),"bg-error-hover":Gr("bg-error-hover"),"bg-error-strong":Gr("bg-error-strong"),"bg-error-strong-hover":Gr("bg-error-strong-hover"),"bg-inverse":Gr("bg-inverse"),"bg-inverse-subtle":Gr("bg-inverse-subtle"),"bg-inverse-subtler":Gr("bg-inverse-subtler"),"bg-inverse-subtlest":Gr("bg-inverse-subtlest"),"bg-inverse-hover":Gr("bg-inverse-hover"),"bg-primary":Gr("bg-primary"),"bg-primary-subtle":Gr("bg-primary-subtle"),"bg-primary-subtler":Gr("bg-primary-subtler"),"bg-primary-subtlest":Gr("bg-primary-subtlest"),"bg-available":Gr("bg-available"),"bg-primary-hover":Gr("bg-primary-hover"),"bg-primary-subtlest-hover":Gr("bg-primary-subtlest-hover"),"bg-primary-subtlest-selected":Gr("bg-primary-subtlest-selected"),"overlay-strong":Gr("overlay-strong"),"overlay-subtle":Gr("overlay-subtle"),hyperlink:Gr("hyperlink"),"hyperlink-hover":Gr("hyperlink-hover"),"hyperlink-visited":Gr("hyperlink-visited"),"hyperlink-inverse":Gr("hyperlink-inverse"),"focus-ring":Gr("focus-ring"),"focus-ring-inverse":Gr("focus-ring-inverse")},Qr={collections:{default:{solid:e=>t=>{var r,n,o;const{thickness:i,radius:s,colour:a}=e||{},l=null!==(r="function"==typeof i?i(t):i)&&void 0!==r?r:Pr["width-010"](t),d=null!==(n="function"==typeof s?s(t):s)&&void 0!==n?n:0,c=null!==(o="function"==typeof a?a(t):a)&&void 0!==o?o:Zr.border(t),u=Pr.solid;return w`
            border: ${l} ${u} ${c};
            border-radius: ${d};
        `},"dashed-default":e=>t=>{var r,n,o;const{thickness:i,radius:s,colour:a}=e||{},l=null!==(r="function"==typeof i?i(t):i)&&void 0!==r?r:Pr["width-010"](t),d=null!==(n="function"==typeof s?s(t):s)&&void 0!==n?n:0,c=null!==(o="function"==typeof a?a(t):a)&&void 0!==o?o:Zr.border(t),u=encodeURIComponent(`<svg width='100%' height='100%' xmlns='http://www.w3.org/2000/svg'><rect width='100%' height='100%' fill='none' rx='${d}' ry='${d}' stroke='${c}' stroke-width='${l}' stroke-dasharray='4, 8' stroke-dashoffset='0' stroke-linecap='square'/></svg>`);return w`
            background-image: url("data:image/svg+xml,${u}");
            border-radius: ${d};
        `}}},defaultValue:"default"},Xr=e=>1===e.length&&"theme"in e[0],Kr=e=>(...t)=>r=>{const n=Xr(t)?[]:t,o=Xr(t)?t[0]:r,i=o.theme;return(0,Hr(Qr,null==i?void 0:i.borderScheme)[e])(...n)(o)},Jr={solid:Kr("solid"),"dashed-default":Kr("dashed-default")},en={collections:{default:{"xxs-min":0,"xxs-max":320,"xs-min":321,"xs-max":375,"sm-min":376,"sm-max":420,"md-min":421,"md-max":767,"lg-min":768,"lg-max":1023,"xl-min":1024,"xl-max":1440,"xxl-min":1441,"xxs-column":8,"xs-column":8,"sm-column":8,"md-column":8,"lg-column":12,"xl-column":12,"xxl-column":12,"xxs-gutter":16,"xs-gutter":16,"sm-gutter":16,"md-gutter":16,"lg-gutter":32,"xl-gutter":32,"xxl-gutter":32,"xxs-margin":24,"xs-margin":24,"sm-margin":24,"md-margin":24,"lg-margin":48,"xl-margin":48,"xxl-margin":48}},defaultValue:"default"},tn=e=>t=>{var r;const n=t.theme,o=Hr(en,null==n?void 0:n.breakpointScheme);let i;return i=(null===(r=null==n?void 0:n.overrides)||void 0===r?void 0:r.breakpoint)?Rr(o,e,n.overrides.breakpoint):o[e],i},rn={"xxs-min":tn("xxs-min"),"xxs-max":tn("xxs-max"),"xs-min":tn("xs-min"),"xs-max":tn("xs-max"),"sm-min":tn("sm-min"),"sm-max":tn("sm-max"),"md-min":tn("md-min"),"md-max":tn("md-max"),"lg-min":tn("lg-min"),"lg-max":tn("lg-max"),"xl-min":tn("xl-min"),"xl-max":tn("xl-max"),"xxl-min":tn("xxl-min"),"xxs-column":tn("xxs-column"),"xs-column":tn("xs-column"),"sm-column":tn("sm-column"),"md-column":tn("md-column"),"lg-column":tn("lg-column"),"xl-column":tn("xl-column"),"xxl-column":tn("xxl-column"),"xxs-gutter":tn("xxs-gutter"),"xs-gutter":tn("xs-gutter"),"sm-gutter":tn("sm-gutter"),"md-gutter":tn("md-gutter"),"lg-gutter":tn("lg-gutter"),"xl-gutter":tn("xl-gutter"),"xxl-gutter":tn("xxl-gutter"),"xxs-margin":tn("xxs-margin"),"xs-margin":tn("xs-margin"),"sm-margin":tn("sm-margin"),"md-margin":tn("md-margin"),"lg-margin":tn("lg-margin"),"xl-margin":tn("xl-margin"),"xxl-margin":tn("xxl-margin")},nn=e=>("max-width"===e?["xxs","xs","sm","md","lg","xl"]:["xxs","xs","sm","md","lg","xl","xxl"]).reduce(((t,r)=>(t[r]=((e,t)=>{const r=rn["max-width"===e?`${t}-max`:`${t}-min`];return t=>{const n=r(t);return`@media screen and (${e}: ${n}px)`}})(e,r),t)),{}),on={MaxWidth:nn("max-width"),MinWidth:nn("min-width")},sn={collections:{default:{"heading-size-xxl":"3rem","heading-size-xl":"2.5rem","heading-size-lg":"2rem","heading-size-md":"1.625rem","heading-size-sm":"1.375rem","heading-size-xs":"1.125rem","heading-lh-xxl":"3.5rem","heading-lh-xl":"3rem","heading-lh-lg":"2.5rem","heading-lh-md":"2.25rem","heading-lh-sm":"1.75rem","heading-lh-xs":"1.625rem","heading-ls-xxl":"-0.056rem","heading-ls-xl":"-0.032rem","heading-ls-lg":"-0.032rem","heading-ls-md":"0rem","heading-ls-sm":"0rem","heading-ls-xs":"0rem","weight-light":"300","weight-regular":"400","weight-semibold":"600","weight-bold":"700","font-family":"Open Sans","body-size-baseline":"1.125rem","body-size-md":"1rem","body-size-sm":"0.875rem","body-size-xs":"0.75rem","body-lh-baseline":"1.625rem","body-lh-md":"1.5rem","body-lh-sm":"1.625rem","body-lh-xs":"1.25rem","body-ls-baseline":"0rem","body-ls-md":"0.014rem","body-ls-sm":"0.012rem","body-ls-xs":"0.012rem","form-label-size":"1rem","form-description-size":"0.875rem","form-label-lh":"1.5rem","form-description-lh":"1.6rem","form-label-ls":"0.014rem","form-description-ls":"0.012rem"},bookingsg:{"heading-size-xxl":"3rem","heading-size-xl":"2.5rem","heading-size-lg":"2rem","heading-size-md":"1.625rem","heading-size-sm":"1.375rem","heading-size-xs":"1.125rem","heading-lh-xxl":"3.5rem","heading-lh-xl":"3rem","heading-lh-lg":"2.5rem","heading-lh-md":"2.25rem","heading-lh-sm":"1.75rem","heading-lh-xs":"1.75rem","heading-ls-xxl":"-0.056rem","heading-ls-xl":"-0.032rem","heading-ls-lg":"-0.032rem","heading-ls-md":"0rem","heading-ls-sm":"0rem","heading-ls-xs":"0rem","weight-light":"300","weight-regular":"400","weight-semibold":"600","weight-bold":"700","font-family":"Plus Jakarta Sans","body-size-baseline":"1.125rem","body-size-md":"1rem","body-size-sm":"0.875rem","body-size-xs":"0.75rem","body-lh-baseline":"1.75rem","body-lh-md":"1.5rem","body-lh-sm":"1.6rem","body-lh-xs":"1.2rem","body-ls-baseline":"0rem","body-ls-md":"0.014rem","body-ls-sm":"0.012rem","body-ls-xs":"0.012rem","form-label-size":"1rem","form-description-size":"0.875rem","form-label-lh":"1.5rem","form-description-lh":"1.6rem","form-label-ls":"0.014rem","form-description-ls":"0.012rem"},pa:{"heading-size-xxl":"2.5rem","heading-size-xl":"2rem","heading-size-lg":"1.75rem","heading-size-md":"1.5rem","heading-size-sm":"1.25rem","heading-size-xs":"1rem","heading-lh-xxl":"3rem","heading-lh-xl":"2.5rem","heading-lh-lg":"2.25rem","heading-lh-md":"2rem","heading-lh-sm":"2rem","heading-lh-xs":"1.75rem","heading-ls-xxl":"-0.032rem","heading-ls-xl":"-0.032rem","heading-ls-lg":"0rem","heading-ls-md":"0rem","heading-ls-sm":"0rem","heading-ls-xs":"0rem","weight-light":"300","weight-regular":"400","weight-semibold":"600","weight-bold":"700","font-family":"Lato","body-size-baseline":"1rem","body-size-md":"0.875rem","body-size-sm":"0.75rem","body-size-xs":"0.625rem","body-lh-baseline":"1.75rem","body-lh-md":"1.5rem","body-lh-sm":"1.25rem","body-lh-xs":"1.25rem","body-ls-baseline":"0rem","body-ls-md":"0.014rem","body-ls-sm":"0.012rem","body-ls-xs":"0.012rem","form-label-size":"1rem","form-description-size":"0.875rem","form-label-lh":"1.5rem","form-description-lh":"1.6rem","form-label-ls":"0.014rem","form-description-ls":"0.012rem"}},defaultValue:"default"},an=e=>t=>{var r;const n=t.theme,o=Hr(sn,null==n?void 0:n.fontScheme);return(null===(r=null==n?void 0:n.overrides)||void 0===r?void 0:r.fontSpec)?Rr(o,e,n.overrides.fontSpec):o[e]},ln={"heading-size-xxl":an("heading-size-xxl"),"heading-size-xl":an("heading-size-xl"),"heading-size-lg":an("heading-size-lg"),"heading-size-md":an("heading-size-md"),"heading-size-sm":an("heading-size-sm"),"heading-size-xs":an("heading-size-xs"),"heading-lh-xxl":an("heading-lh-xxl"),"heading-lh-xl":an("heading-lh-xl"),"heading-lh-lg":an("heading-lh-lg"),"heading-lh-md":an("heading-lh-md"),"heading-lh-sm":an("heading-lh-sm"),"heading-lh-xs":an("heading-lh-xs"),"heading-ls-xxl":an("heading-ls-xxl"),"heading-ls-xl":an("heading-ls-xl"),"heading-ls-lg":an("heading-ls-lg"),"heading-ls-md":an("heading-ls-md"),"heading-ls-sm":an("heading-ls-sm"),"heading-ls-xs":an("heading-ls-xs"),"weight-light":an("weight-light"),"weight-regular":an("weight-regular"),"weight-semibold":an("weight-semibold"),"weight-bold":an("weight-bold"),"font-family":an("font-family"),"body-size-baseline":an("body-size-baseline"),"body-size-md":an("body-size-md"),"body-size-sm":an("body-size-sm"),"body-size-xs":an("body-size-xs"),"body-lh-baseline":an("body-lh-baseline"),"body-lh-md":an("body-lh-md"),"body-lh-sm":an("body-lh-sm"),"body-lh-xs":an("body-lh-xs"),"body-ls-baseline":an("body-ls-baseline"),"body-ls-md":an("body-ls-md"),"body-ls-sm":an("body-ls-sm"),"body-ls-xs":an("body-ls-xs"),"form-label-size":an("form-label-size"),"form-description-size":an("form-description-size"),"form-label-lh":an("form-label-lh"),"form-description-lh":an("form-description-lh"),"form-label-ls":an("form-label-ls"),"form-description-ls":an("form-description-ls")},dn=(e,t,r,n,o)=>{const{disableLigatures:i}=o||{};return w`
        font-family: ${an("font-family")};
        font-size: ${an(e)};
        font-weight: ${an(t)};
        line-height: ${an(r)};
        letter-spacing: ${an(n)};

        font-variant: ${i?"no-common-ligatures":"normal"};
    `},cn=(e={})=>({"heading-xxl-light":dn("heading-size-xxl","weight-light","heading-lh-xxl","heading-ls-xxl",e),"heading-xxl-regular":dn("heading-size-xxl","weight-regular","heading-lh-xxl","heading-ls-xxl",e),"heading-xxl-semibold":dn("heading-size-xxl","weight-semibold","heading-lh-xxl","heading-ls-xxl",e),"heading-xxl-bold":dn("heading-size-xxl","weight-bold","heading-lh-xxl","heading-ls-xxl",e),"heading-xl-light":dn("heading-size-xl","weight-light","heading-lh-xl","heading-ls-xl",e),"heading-xl-regular":dn("heading-size-xl","weight-regular","heading-lh-xl","heading-ls-xl",e),"heading-xl-semibold":dn("heading-size-xl","weight-semibold","heading-lh-xl","heading-ls-xl",e),"heading-xl-bold":dn("heading-size-xl","weight-bold","heading-lh-xl","heading-ls-xl",e),"heading-lg-light":dn("heading-size-lg","weight-light","heading-lh-lg","heading-ls-lg",e),"heading-lg-regular":dn("heading-size-lg","weight-regular","heading-lh-lg","heading-ls-lg",e),"heading-lg-semibold":dn("heading-size-lg","weight-semibold","heading-lh-lg","heading-ls-lg",e),"heading-lg-bold":dn("heading-size-lg","weight-bold","heading-lh-lg","heading-ls-lg",e),"heading-md-light":dn("heading-size-md","weight-light","heading-lh-md","heading-ls-md",e),"heading-md-regular":dn("heading-size-md","weight-regular","heading-lh-md","heading-ls-md",e),"heading-md-semibold":dn("heading-size-md","weight-semibold","heading-lh-md","heading-ls-md",e),"heading-md-bold":dn("heading-size-md","weight-bold","heading-lh-md","heading-ls-md",e),"heading-sm-light":dn("heading-size-sm","weight-light","heading-lh-sm","heading-ls-sm",e),"heading-sm-regular":dn("heading-size-sm","weight-regular","heading-lh-sm","heading-ls-sm",e),"heading-sm-semibold":dn("heading-size-sm","weight-semibold","heading-lh-sm","heading-ls-sm",e),"heading-sm-bold":dn("heading-size-sm","weight-bold","heading-lh-sm","heading-ls-sm",e),"heading-xs-light":dn("heading-size-xs","weight-light","heading-lh-xs","heading-ls-xs",e),"heading-xs-regular":dn("heading-size-xs","weight-regular","heading-lh-xs","heading-ls-xs",e),"heading-xs-semibold":dn("heading-size-xs","weight-semibold","heading-lh-xs","heading-ls-xs",e),"heading-xs-bold":dn("heading-size-xs","weight-bold","heading-lh-xs","heading-ls-xs",e),"body-baseline-light":dn("body-size-baseline","weight-light","body-lh-baseline","body-ls-baseline",e),"body-baseline-regular":dn("body-size-baseline","weight-regular","body-lh-baseline","body-ls-baseline",e),"body-baseline-semibold":dn("body-size-baseline","weight-semibold","body-lh-baseline","body-ls-baseline",e),"body-baseline-bold":dn("body-size-baseline","weight-bold","body-lh-baseline","body-ls-baseline",e),"body-md-light":dn("body-size-md","weight-light","body-lh-md","body-ls-md",e),"body-md-regular":dn("body-size-md","weight-regular","body-lh-md","body-ls-md",e),"body-md-semibold":dn("body-size-md","weight-semibold","body-lh-md","body-ls-md",e),"body-md-bold":dn("body-size-md","weight-bold","body-lh-md","body-ls-md",e),"body-sm-light":dn("body-size-sm","weight-light","body-lh-sm","body-ls-sm",e),"body-sm-regular":dn("body-size-sm","weight-regular","body-lh-sm","body-ls-sm",e),"body-sm-semibold":dn("body-size-sm","weight-semibold","body-lh-sm","body-ls-sm",e),"body-sm-bold":dn("body-size-sm","weight-bold","body-lh-sm","body-ls-sm",e),"body-xs-light":dn("body-size-xs","weight-light","body-lh-xs","body-ls-xs",e),"body-xs-regular":dn("body-size-xs","weight-regular","body-lh-xs","body-ls-xs",e),"body-xs-semibold":dn("body-size-xs","weight-semibold","body-lh-xs","body-ls-xs",e),"body-xs-bold":dn("body-size-xs","weight-bold","body-lh-xs","body-ls-xs",e),"form-label":dn("form-label-size","weight-semibold","form-label-lh","form-label-ls",e),"form-description":dn("form-description-size","weight-regular","form-description-lh","form-description-ls",e)}),un=cn({disableLigatures:!0}),hn={collections:{default:cn(),bookingsg:un,pa:cn({disableLigatures:!0})},defaultValue:"default"},gn=e=>t=>{var r;const n=t.theme,o=Hr(hn,null==n?void 0:n.fontScheme),i=(null===(r=null==n?void 0:n.overrides)||void 0===r?void 0:r.font)?Rr(o,e,n.overrides.font):o[e];return"function"==typeof i?i(t):i},mn={"heading-xxl-light":gn("heading-xxl-light"),"heading-xxl-regular":gn("heading-xxl-regular"),"heading-xxl-semibold":gn("heading-xxl-semibold"),"heading-xxl-bold":gn("heading-xxl-bold"),"heading-xl-light":gn("heading-xl-light"),"heading-xl-regular":gn("heading-xl-regular"),"heading-xl-semibold":gn("heading-xl-semibold"),"heading-xl-bold":gn("heading-xl-bold"),"heading-lg-light":gn("heading-lg-light"),"heading-lg-regular":gn("heading-lg-regular"),"heading-lg-semibold":gn("heading-lg-semibold"),"heading-lg-bold":gn("heading-lg-bold"),"heading-md-light":gn("heading-md-light"),"heading-md-regular":gn("heading-md-regular"),"heading-md-semibold":gn("heading-md-semibold"),"heading-md-bold":gn("heading-md-bold"),"heading-sm-light":gn("heading-sm-light"),"heading-sm-regular":gn("heading-sm-regular"),"heading-sm-semibold":gn("heading-sm-semibold"),"heading-sm-bold":gn("heading-sm-bold"),"heading-xs-light":gn("heading-xs-light"),"heading-xs-regular":gn("heading-xs-regular"),"heading-xs-semibold":gn("heading-xs-semibold"),"heading-xs-bold":gn("heading-xs-bold"),"body-baseline-light":gn("body-baseline-light"),"body-baseline-regular":gn("body-baseline-regular"),"body-baseline-semibold":gn("body-baseline-semibold"),"body-baseline-bold":gn("body-baseline-bold"),"body-md-light":gn("body-md-light"),"body-md-regular":gn("body-md-regular"),"body-md-semibold":gn("body-md-semibold"),"body-md-bold":gn("body-md-bold"),"body-sm-light":gn("body-sm-light"),"body-sm-regular":gn("body-sm-regular"),"body-sm-semibold":gn("body-sm-semibold"),"body-sm-bold":gn("body-sm-bold"),"body-xs-light":gn("body-xs-light"),"body-xs-regular":gn("body-xs-regular"),"body-xs-semibold":gn("body-xs-semibold"),"body-xs-bold":gn("body-xs-bold"),"form-label":gn("form-label"),"form-description":gn("form-description")},fn={collections:{default:{"duration-150":"150ms","duration-250":"250ms","duration-350":"350ms","duration-500":"500ms","duration-800":"800ms","duration-1000":"1000ms","ease-default":"cubic-bezier(0.45, 0.05, 0.55, 0.95)","ease-standard":"cubic-bezier(0.86, 0, 0.07, 1)","ease-entrance":"cubic-bezier(0.18, 0.13, 0, 1)","ease-exit":"cubic-bezier(1, 0, 0.8, 0.85)"}},defaultValue:"default"},pn=e=>t=>{var r;const n=t.theme,o=Hr(fn,null==n?void 0:n.motionScheme);return(null===(r=null==n?void 0:n.overrides)||void 0===r?void 0:r.motion)?Rr(o,e,n.overrides.motion):o[e]},bn={"duration-150":pn("duration-150"),"duration-250":pn("duration-250"),"duration-350":pn("duration-350"),"duration-500":pn("duration-500"),"duration-800":pn("duration-800"),"duration-1000":pn("duration-1000"),"ease-default":pn("ease-default"),"ease-standard":pn("ease-standard"),"ease-entrance":pn("ease-entrance"),"ease-exit":pn("ease-exit")},vn={collections:{default:{none:0,xs:2,sm:4,md:8,lg:12,full:9999}},defaultValue:"default"},yn=e=>t=>{var r;const n=t.theme,o=Hr(vn,null==n?void 0:n.radiusScheme);return(null===(r=null==n?void 0:n.overrides)||void 0===r?void 0:r.radius)?`${Rr(o,e,n.overrides.radius)}px`:`${o[e]}px`},xn={none:yn("none"),xs:yn("xs"),sm:yn("sm"),md:yn("md"),lg:yn("lg"),full:yn("full")},wn={collections:{default:{"spacing-0":0,"spacing-4":4,"spacing-8":8,"spacing-12":12,"spacing-16":16,"spacing-20":20,"spacing-24":24,"spacing-32":32,"spacing-40":40,"spacing-48":48,"spacing-64":64,"spacing-72":72,"layout-xs":8,"layout-sm":16,"layout-md":24,"layout-lg":32,"layout-xl":48,"layout-xxl":64,"layout-xxxl":128}},defaultValue:"default"},$n=e=>t=>{var r;const n=t.theme,o=Hr(wn,null==n?void 0:n.spacingScheme);return(null===(r=null==n?void 0:n.overrides)||void 0===r?void 0:r.spacing)?`${Rr(o,e,n.overrides.spacing)}px`:`${o[e]}px`},Fn={"spacing-0":$n("spacing-0"),"spacing-4":$n("spacing-4"),"spacing-8":$n("spacing-8"),"spacing-12":$n("spacing-12"),"spacing-16":$n("spacing-16"),"spacing-20":$n("spacing-20"),"spacing-24":$n("spacing-24"),"spacing-32":$n("spacing-32"),"spacing-40":$n("spacing-40"),"spacing-48":$n("spacing-48"),"spacing-64":$n("spacing-64"),"spacing-72":$n("spacing-72"),"layout-xs":$n("layout-xs"),"layout-sm":$n("layout-sm"),"layout-md":$n("layout-md"),"layout-lg":$n("layout-lg"),"layout-xl":$n("layout-xl"),"layout-xxl":$n("layout-xxl"),"layout-xxxl":$n("layout-xxxl")},Cn=Object.assign(Object.assign({},Zr),{Primitive:Yr}),En=Object.assign(Object.assign({},mn),{Spec:ln}),Sn=bn,kn=Object.assign(Object.assign({},Pr),{Util:Jr}),In=Fn,Tn=xn,Dn=rn,Bn=on,zn=x.div`
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
                        100% - ${En.Spec["body-size-baseline"]} -
                            ${In["spacing-16"]}
                    );
                    flex: unset;
                }

                [data-id="range-container-elem2-container"] {
                    margin-top: ${In["spacing-8"]};
                }
            `}}
`,Mn=x.div`
    width: 100%; // Force next flex item to break to next line
`,An=x.div`
    display: flex;
    flex: 1;
    align-items: center;
`,_n=x(v)`
    color: ${Cn.icon};
    width: ${En.Spec["body-size-baseline"]};
    height: ${En.Spec["body-size-baseline"]};
    flex-shrink: 0;
    margin: 0 ${In["spacing-8"]};
    align-self: center;
`,On=x.div`
    position: absolute;
    background: ${e=>e.$error?Cn["border-error-focus-strong"]:Cn["border-focus-strong"]};
    height: 2px;
    // half - half padding - half icon width
    width: calc(
        50% - ${In["spacing-8"]} - (${En.Spec["body-size-baseline"]} / 2)
    );
    transition: left ${Sn["duration-350"]} ${Sn["ease-standard"]},
        opacity ${Sn["duration-350"]} ${Sn["ease-standard"]};
    left: 0;
    bottom: 0;

    ${e=>{switch(e.$position){case"start":return w`
                    opacity: 1;
                `;case"end":return w`
                    left: calc(50% + ${In["spacing-16"]});
                    opacity: 1;
                `;case"none":return w`
                    opacity: 0;
                `}}}

    ${e=>{if(e.$wrap)return w`
                display: none;
            `}}
`,Rn=({children:r,currentActive:n,error:o,className:i,wrap:s})=>{const[a,l]=r;return e(zn,{className:i,$wrap:s,children:[t(An,{"data-id":"range-container-elem1-container",children:a}),t(_n,{}),s&&t(Mn,{}),t(An,{"data-id":"range-container-elem2-container",children:l}),t(On,{"data-id":"range-container-indicator",$position:n,$error:o,$wrap:s})]})},Hn=w`
    outline-offset: -1px;
    outline: ${kn["width-020"]} ${kn.solid} ${Cn["border-focus"]};
`,jn=w`
    outline-color: ${Cn["border-focus"]};
`,Ln=w`
    outline-color: ${Cn["border-disabled"]};
`,Pn=w`
    outline-color: ${Cn["border-error-focus"]};
`,Wn=x.div`
    border: ${kn["width-010"]} ${kn.solid} ${Cn.border};
    border-radius: ${Tn.sm};
    background: ${Cn.bg};

    :focus-within {
        ${Hn}
    }
    ${e=>e.$focused&&Hn}

    ${e=>e.$readOnly?w`
                border-color: transparent;
                padding: 0;
                background: transparent !important;

                :focus-within {
                    ${jn}
                }
                ${e.$focused&&jn}
            `:e.$disabled?w`
                background: ${Cn["bg-disabled"]};
                cursor: not-allowed;

                :focus-within {
                    ${Ln}
                }
                ${e.$focused&&Ln}
            `:e.$error?w`
                border-color: ${Cn["border-error"]};

                :focus-within {
                    ${Pn}
                }
                ${e.$focused&&Pn}
            `:void 0}
`,Nn=x(Wn)`
    display: flex;
    align-items: center;
    position: relative;
    height: max-content;
    width: 100%;
    padding: 0 ${In["spacing-16"]};
    flex-direction: ${e=>"right"===e.$position?"row-reverse":"row"};
`,Vn=x.input`
    ${e=>"small"===e.$variant?En["body-md-regular"]:En["body-baseline-regular"]}
    color: ${Cn.text};
    display: block;
    background: transparent;
    border: none;
    outline: none;
    box-shadow: none;
    padding: 0;
    margin: 0;

    :disabled {
        color: ${Cn["text-subtler"]};

        :hover {
            cursor: not-allowed;
        }
    }

    ::placeholder,
    ::-webkit-input-placeholder {
        color: ${Cn["text-subtler"]};
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
`,Yn=x.button`
    background: transparent;
    border: none;
    outline: none;

    :focus,
    :active {
        outline: none;
    }

    :focus-visible {
        outline: ${kn["width-010"]} ${kn.solid}
            ${Cn["border-focus"]};
        border-radius: ${Tn.sm};
    }
`,Un=x.div`
    position: relative;
`,qn=x(Nn)`
    height: 3rem;
    gap: ${In["spacing-8"]};
`,Gn=x(Vn)`
    display: block;
    width: 100%;
    flex: 1;
`;var Zn={exports:{}};Zn.exports=function(){var e=1e3,t=6e4,r=36e5,n="millisecond",o="second",i="minute",s="hour",a="day",l="week",d="month",c="quarter",u="year",h="date",g="Invalid Date",m=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,f=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,p={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(e){var t=["th","st","nd","rd"],r=e%100;return"["+e+(t[(r-20)%10]||t[r]||t[0])+"]"}},b=function(e,t,r){var n=String(e);return!n||n.length>=t?e:""+Array(t+1-n.length).join(r)+e},v={s:b,z:function(e){var t=-e.utcOffset(),r=Math.abs(t),n=Math.floor(r/60),o=r%60;return(t<=0?"+":"-")+b(n,2,"0")+":"+b(o,2,"0")},m:function e(t,r){if(t.date()<r.date())return-e(r,t);var n=12*(r.year()-t.year())+(r.month()-t.month()),o=t.clone().add(n,d),i=r-o<0,s=t.clone().add(n+(i?-1:1),d);return+(-(n+(r-o)/(i?o-s:s-o))||0)},a:function(e){return e<0?Math.ceil(e)||0:Math.floor(e)},p:function(e){return{M:d,y:u,w:l,d:a,D:h,h:s,m:i,s:o,ms:n,Q:c}[e]||String(e||"").toLowerCase().replace(/s$/,"")},u:function(e){return void 0===e}},y="en",x={};x[y]=p;var w="$isDayjsObject",$=function(e){return e instanceof S||!(!e||!e[w])},F=function e(t,r,n){var o;if(!t)return y;if("string"==typeof t){var i=t.toLowerCase();x[i]&&(o=i),r&&(x[i]=r,o=i);var s=t.split("-");if(!o&&s.length>1)return e(s[0])}else{var a=t.name;x[a]=t,o=a}return!n&&o&&(y=o),o||!n&&y},C=function(e,t){if($(e))return e.clone();var r="object"==typeof t?t:{};return r.date=e,r.args=arguments,new S(r)},E=v;E.l=F,E.i=$,E.w=function(e,t){return C(e,{locale:t.$L,utc:t.$u,x:t.$x,$offset:t.$offset})};var S=function(){function p(e){this.$L=F(e.locale,null,!0),this.parse(e),this.$x=this.$x||e.x||{},this[w]=!0}var b=p.prototype;return b.parse=function(e){this.$d=function(e){var t=e.date,r=e.utc;if(null===t)return new Date(NaN);if(E.u(t))return new Date;if(t instanceof Date)return new Date(t);if("string"==typeof t&&!/Z$/i.test(t)){var n=t.match(m);if(n){var o=n[2]-1||0,i=(n[7]||"0").substring(0,3);return r?new Date(Date.UTC(n[1],o,n[3]||1,n[4]||0,n[5]||0,n[6]||0,i)):new Date(n[1],o,n[3]||1,n[4]||0,n[5]||0,n[6]||0,i)}}return new Date(t)}(e),this.init()},b.init=function(){var e=this.$d;this.$y=e.getFullYear(),this.$M=e.getMonth(),this.$D=e.getDate(),this.$W=e.getDay(),this.$H=e.getHours(),this.$m=e.getMinutes(),this.$s=e.getSeconds(),this.$ms=e.getMilliseconds()},b.$utils=function(){return E},b.isValid=function(){return!(this.$d.toString()===g)},b.isSame=function(e,t){var r=C(e);return this.startOf(t)<=r&&r<=this.endOf(t)},b.isAfter=function(e,t){return C(e)<this.startOf(t)},b.isBefore=function(e,t){return this.endOf(t)<C(e)},b.$g=function(e,t,r){return E.u(e)?this[t]:this.set(r,e)},b.unix=function(){return Math.floor(this.valueOf()/1e3)},b.valueOf=function(){return this.$d.getTime()},b.startOf=function(e,t){var r=this,n=!!E.u(t)||t,c=E.p(e),g=function(e,t){var o=E.w(r.$u?Date.UTC(r.$y,t,e):new Date(r.$y,t,e),r);return n?o:o.endOf(a)},m=function(e,t){return E.w(r.toDate()[e].apply(r.toDate("s"),(n?[0,0,0,0]:[23,59,59,999]).slice(t)),r)},f=this.$W,p=this.$M,b=this.$D,v="set"+(this.$u?"UTC":"");switch(c){case u:return n?g(1,0):g(31,11);case d:return n?g(1,p):g(0,p+1);case l:var y=this.$locale().weekStart||0,x=(f<y?f+7:f)-y;return g(n?b-x:b+(6-x),p);case a:case h:return m(v+"Hours",0);case s:return m(v+"Minutes",1);case i:return m(v+"Seconds",2);case o:return m(v+"Milliseconds",3);default:return this.clone()}},b.endOf=function(e){return this.startOf(e,!1)},b.$set=function(e,t){var r,l=E.p(e),c="set"+(this.$u?"UTC":""),g=(r={},r[a]=c+"Date",r[h]=c+"Date",r[d]=c+"Month",r[u]=c+"FullYear",r[s]=c+"Hours",r[i]=c+"Minutes",r[o]=c+"Seconds",r[n]=c+"Milliseconds",r)[l],m=l===a?this.$D+(t-this.$W):t;if(l===d||l===u){var f=this.clone().set(h,1);f.$d[g](m),f.init(),this.$d=f.set(h,Math.min(this.$D,f.daysInMonth())).$d}else g&&this.$d[g](m);return this.init(),this},b.set=function(e,t){return this.clone().$set(e,t)},b.get=function(e){return this[E.p(e)]()},b.add=function(n,c){var h,g=this;n=Number(n);var m=E.p(c),f=function(e){var t=C(g);return E.w(t.date(t.date()+Math.round(e*n)),g)};if(m===d)return this.set(d,this.$M+n);if(m===u)return this.set(u,this.$y+n);if(m===a)return f(1);if(m===l)return f(7);var p=(h={},h[i]=t,h[s]=r,h[o]=e,h)[m]||1,b=this.$d.getTime()+n*p;return E.w(b,this)},b.subtract=function(e,t){return this.add(-1*e,t)},b.format=function(e){var t=this,r=this.$locale();if(!this.isValid())return r.invalidDate||g;var n=e||"YYYY-MM-DDTHH:mm:ssZ",o=E.z(this),i=this.$H,s=this.$m,a=this.$M,l=r.weekdays,d=r.months,c=r.meridiem,u=function(e,r,o,i){return e&&(e[r]||e(t,n))||o[r].slice(0,i)},h=function(e){return E.s(i%12||12,e,"0")},m=c||function(e,t,r){var n=e<12?"AM":"PM";return r?n.toLowerCase():n};return n.replace(f,(function(e,n){return n||function(e){switch(e){case"YY":return String(t.$y).slice(-2);case"YYYY":return E.s(t.$y,4,"0");case"M":return a+1;case"MM":return E.s(a+1,2,"0");case"MMM":return u(r.monthsShort,a,d,3);case"MMMM":return u(d,a);case"D":return t.$D;case"DD":return E.s(t.$D,2,"0");case"d":return String(t.$W);case"dd":return u(r.weekdaysMin,t.$W,l,2);case"ddd":return u(r.weekdaysShort,t.$W,l,3);case"dddd":return l[t.$W];case"H":return String(i);case"HH":return E.s(i,2,"0");case"h":return h(1);case"hh":return h(2);case"a":return m(i,s,!0);case"A":return m(i,s,!1);case"m":return String(s);case"mm":return E.s(s,2,"0");case"s":return String(t.$s);case"ss":return E.s(t.$s,2,"0");case"SSS":return E.s(t.$ms,3,"0");case"Z":return o}return null}(e)||o.replace(":","")}))},b.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},b.diff=function(n,h,g){var m,f=this,p=E.p(h),b=C(n),v=(b.utcOffset()-this.utcOffset())*t,y=this-b,x=function(){return E.m(f,b)};switch(p){case u:m=x()/12;break;case d:m=x();break;case c:m=x()/3;break;case l:m=(y-v)/6048e5;break;case a:m=(y-v)/864e5;break;case s:m=y/r;break;case i:m=y/t;break;case o:m=y/e;break;default:m=y}return g?m:E.a(m)},b.daysInMonth=function(){return this.endOf(d).$D},b.$locale=function(){return x[this.$L]},b.locale=function(e,t){if(!e)return this.$L;var r=this.clone(),n=F(e,t,!0);return n&&(r.$L=n),r},b.clone=function(){return E.w(this.$d,this)},b.toDate=function(){return new Date(this.valueOf())},b.toJSON=function(){return this.isValid()?this.toISOString():null},b.toISOString=function(){return this.$d.toISOString()},b.toString=function(){return this.$d.toUTCString()},p}(),k=S.prototype;return C.prototype=k,[["$ms",n],["$s",o],["$m",i],["$H",s],["$W",a],["$M",d],["$y",u],["$D",h]].forEach((function(e){k[e[1]]=function(t){return this.$g(t,e[0],e[1])}})),C.extend=function(e,t){return e.$i||(e(t,S,C),e.$i=!0),C},C.locale=F,C.isDayjs=$,C.unix=function(e){return C(1e3*e)},C.en=x[y],C.Ls=x,C.p={},C}();var Qn,Xn,Kn,Jn=ae(Zn.exports);!function(e){e.transformWithSpaces=(e,t)=>{const r="(.{"+t+"})";return e.replace(/[^\dA-Z]/gi,"").replace(new RegExp(r,"g"),"$1 ").trim()},e.padValue=(e,t)=>{if("0"===e)return t?e:e.padStart(2,"0");if(""===e)return e;return parseInt(e).toString().padStart(2,"0")},e.shouldTruncateToTwoLines=(e,t)=>{const r=Math.floor(t/9);return e.length>=2*r||1===e.split(" ").length&&e.length>r},e.truncateOneLine=(e,t,r,n,o=8)=>{let i=0;t>r&&(i=Math.floor((t-r)/o));const s=n+i;if(s<e.length){const t=Math.floor(s/2);return e.substring(0,t)+" ... "+e.substring(e.length-t,e.length)}return e},e.truncateTwoLines=(e,t,r,n=1.2)=>{const o=Math.floor(2*t/(.6*r))*(2/n);if(e.length<=o)return e;const i=Math.floor(.6*o),s=Math.floor(.2*o);return`${e.substring(0,i)}...${e.substring(e.length-s)}`},e.getTextWidth=(t,r)=>{if("undefined"==typeof document)return 0;const n=(e.getTextWidth.canvas||(e.getTextWidth.canvas=document.createElement("canvas"))).getContext("2d");n.font=r;return n.measureText(t).width},e.maskValue=(e,r)=>{if(!e)return e;const{maskRange:n,unmaskRange:o,maskChar:i="•",maskRegex:s,maskTransformer:a}=r;if(a)return a(e);if(s)return e.replace(s,i);if(n){const{startIndex:r,endIndex:o}=t(n[0],n[1]);return e.substring(0,r)+i.repeat(e.substring(r,o+1).length)+e.substring(o+1)}if(o){const{startIndex:r,endIndex:n}=t(o[0],o[1]);return i.repeat(e.substring(0,r).length)+e.substring(r,n+1)+i.repeat(e.substring(n+1).length)}return e};const t=(e,t)=>e<t?{startIndex:e,endIndex:t}:{startIndex:t,endIndex:e}}(Qn||(Qn={})),function(e){e.AM="AM",e.PM="PM"}(Xn||(Xn={})),function(e){e.roundToNearestInterval=(e,t,r)=>{const[n,o]=e.split(":"),i=parseInt(n,10),s=parseInt(o,10);if(isNaN(i)||isNaN(s)||s<0||s>=60)throw new Error("Invalid time format");const a=60*i+s,l=a%t,d=0===l?a:r?a+(t-l):a-l,c=d%60;return`${Math.floor(d/60).toString().padStart(2,"0")}:${c.toString().padStart(2,"0")}`},e.generateHourlyIntervals=(e,t,r="ha")=>{const n="HH:mm";let o=Jn(e,n),i=Jn(t,n);o.isSame(i)&&(i=i.add(1,"day"));const s=[];for(;o.isBefore(i);)s.push(o.format(r)),o=o.add(1,"hour");return s},e.getTimeValues=(e,t)=>{const r={hour:"",minute:"",period:Xn.AM};if(!t)return r;try{if("24hr"===e){const n=ro(t,e);r.minute=Qn.padValue(n.minute);const o=parseInt(n.hour);0===Math.floor(o/12)?(r.period=Xn.AM,r.hour=0===o?"12":Qn.padValue(o.toString())):(r.period=Xn.PM,r.hour=12===o?o.toString():Qn.padValue((o-12).toString()))}else{const{hour:n,minute:o,period:i=""}=ro(t,e);r.hour=Qn.padValue(n),r.minute=Qn.padValue(o),r.period="am"===i.toLowerCase()?Xn.AM:Xn.PM}return r}catch(e){return r}},e.updateMinutes=(e,t)=>{const r=parseInt(e);if(isNaN(r))return"add"===t?Qn.padValue("0"):"55";const n=Math.floor(r/5),o=(("add"===t?n+1:r%5==0?n-1:n)%12+12)%12;return Qn.padValue((5*o).toString())},e.updateHours=(e,t)=>{const r=parseInt(e);if(isNaN(r))return"add"===t?Qn.padValue("1"):"12";const n="add"===t?r+1:r-1;return n<=12&&n>0?Qn.padValue(n.toString()):13===n?Qn.padValue("1"):"12"},e.convertTo24HourFormat=e=>{const t=parseInt(e.hour);let r;return r=e.period===Xn.PM?12===t?t.toString():(t+12).toString():12===t?"00":e.hour,`${r}:${e.minute}`},e.convertHourTo12HourFormat=e=>{const t=parseInt(e),r=t%12==0?12..toString():(t%12).toString();return Qn.padValue(r)},e.formatDisplayValue=(e,t)=>{try{const{hour:r,minute:n,period:o=""}=ro(e,t),i=Qn.padValue(r);let s=`${i}:${Qn.padValue(n)}`;return"12hr"===t?(s+=o.toLowerCase(),s):s}catch(e){return""}},e.toMinutesSeconds=e=>({minutes:Math.floor(e/60),seconds:e%60}),e.to24Hour=e=>{if((null==e?void 0:e.includes("am"))||(null==e?void 0:e.includes("pm"))){const[t,r]=e.split(/(am|pm)/i),[n,o]=t.split(":").map(Number);let i=n;return"pm"===r&&i<12&&(i+=12),"am"===r&&12===i&&(i=0),no(i,o)}return e},e.generateTimings=(t,r="12hr",n,o)=>{const i=[];let s=0,a=1440-t;for(n&&(s=e.timeToMinutes(n)),o&&(a=e.timeToMinutes(o));s<=a;){let e=Math.floor(s/60);const n=s%60;if("12hr"===r){const t=e>=12?"pm":"am";e%=12,e=e||12;const r=no(e,n,t);i.push(r)}else{const t=no(e,n);i.push(t)}s+=t}return i},e.parseInput=(e,t="12hr")=>{if(""===e||void 0===e)return e;const r=e.trim().toLowerCase(),n=/^(?:(\d{1,2})([:.])?(\d{2})?)?(a|p|am|pm)?$/.exec(r);if(!n)return;let o=parseInt(n[1]||"0",10);const i=parseInt(n[3]||"0",10);let s=n[4];if(void 0===n[1]||o>24||i>59)return;if("a"===s?s="am":"p"===s&&(s="pm"),"24hr"===t)return"pm"===s&&o<12?o+=12:("am"===s&&12===o||24===o)&&(o=0),no(o,i);s?0===o||24===o?(s="am",o=12):o>12&&(s="pm",o-=12):(s=0===o||24===o||o>6&&o<12?"am":"pm",o=o%12||12);return no(o,i,s)},e.findClosestFlooredTime=(t,r)=>{if(!t)return t;const n=e.timeToMinutes(t);let o="",i=1/0;for(const t of r){const r=e.timeToMinutes(t)-n;if(r<=0&&Math.abs(r)<i)i=Math.abs(r),o=t;else if(r>0)break}return o},e.timeToMinutes=e=>{const[t,r]=e.toLowerCase().split(/(am|pm)/),[n,o]=t.split(":").map(Number);let i=n;return"pm"===r&&12!==i&&(i+=12),"am"===r&&12===i&&(i=0),60*i+o}}(Kn||(Kn={}));const eo=(e,t)=>{const r=parseInt(e);return"24hr"===t?r>=0&&r<=23:r>=1&&r<=12},to=e=>{const t=parseInt(e);return t>=0&&t<=59},ro=(e,t)=>{const r=e?e.split(":"):[],n=new Error("Invalid format");if("12hr"===t){if(2!==r.length||4!==r[1].length)throw n;const e=r[1].substring(0,2),i=r[1].substring(2);if(!eo(r[0],t)||!to(e)||"am"!==(o=i).toLowerCase()&&"pm"!==o.toLowerCase())throw n;return{hour:r[0],minute:e,period:r[1].substring(2)}}if(2!==r.length)throw n;if(!eo(r[0],t)||!to(r[1]))throw n;return{hour:r[0],minute:r[1]};var o},no=(e,t,r)=>r?`${e}:${t.toString().padStart(2,"0")}${r}`:`${e.toString().padStart(2,"0")}:${t.toString().padStart(2,"0")}`;var oo=function(e,t){return oo=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])},oo(e,t)};var io=function(){return io=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var o in t=arguments[r])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e},io.apply(this,arguments)};var so="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};var ao=function(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)},lo="object"==typeof so&&so&&so.Object===Object&&so,co="object"==typeof self&&self&&self.Object===Object&&self,uo=lo||co||Function("return this")(),ho=uo,go=function(){return ho.Date.now()},mo=/\s/;var fo=function(e){for(var t=e.length;t--&&mo.test(e.charAt(t)););return t},po=/^\s+/;var bo=function(e){return e?e.slice(0,fo(e)+1).replace(po,""):e},vo=uo.Symbol,yo=vo,xo=Object.prototype,wo=xo.hasOwnProperty,$o=xo.toString,Fo=yo?yo.toStringTag:void 0;var Co=function(e){var t=wo.call(e,Fo),r=e[Fo];try{e[Fo]=void 0;var n=!0}catch(e){}var o=$o.call(e);return n&&(t?e[Fo]=r:delete e[Fo]),o},Eo=Object.prototype.toString;var So=Co,ko=function(e){return Eo.call(e)},Io=vo?vo.toStringTag:void 0;var To=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":Io&&Io in Object(e)?So(e):ko(e)},Do=function(e){return null!=e&&"object"==typeof e};var Bo=bo,zo=ao,Mo=function(e){return"symbol"==typeof e||Do(e)&&"[object Symbol]"==To(e)},Ao=/^[-+]0x[0-9a-f]+$/i,_o=/^0b[01]+$/i,Oo=/^0o[0-7]+$/i,Ro=parseInt;var Ho=ao,jo=go,Lo=function(e){if("number"==typeof e)return e;if(Mo(e))return NaN;if(zo(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=zo(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=Bo(e);var r=_o.test(e);return r||Oo.test(e)?Ro(e.slice(2),r?2:8):Ao.test(e)?NaN:+e},Po=Math.max,Wo=Math.min;var No=function(e,t,r){var n,o,i,s,a,l,d=0,c=!1,u=!1,h=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function g(t){var r=n,i=o;return n=o=void 0,d=t,s=e.apply(i,r)}function m(e){var r=e-l;return void 0===l||r>=t||r<0||u&&e-d>=i}function f(){var e=jo();if(m(e))return p(e);a=setTimeout(f,function(e){var r=t-(e-l);return u?Wo(r,i-(e-d)):r}(e))}function p(e){return a=void 0,h&&n?g(e):(n=o=void 0,s)}function b(){var e=jo(),r=m(e);if(n=arguments,o=this,l=e,r){if(void 0===a)return function(e){return d=e,a=setTimeout(f,t),c?g(e):s}(l);if(u)return clearTimeout(a),a=setTimeout(f,t),g(l)}return void 0===a&&(a=setTimeout(f,t)),s}return t=Lo(t)||0,Ho(r)&&(c=!!r.leading,i=(u="maxWait"in r)?Po(Lo(r.maxWait)||0,t):i,h="trailing"in r?!!r.trailing:h),b.cancel=function(){void 0!==a&&clearTimeout(a),d=0,n=l=o=a=void 0},b.flush=function(){return void 0===a?s:p(jo())},b},Vo=No,Yo=ao;var Uo=function(e,t,r){var n=!0,o=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return Yo(r)&&(n="leading"in r?!!r.leading:n,o="trailing"in r?!!r.trailing:o),Vo(e,t,{leading:n,maxWait:t,trailing:o})},qo=function(e,t,r,n){switch(t){case"debounce":return No(e,r,n);case"throttle":return Uo(e,r,n);default:return e}},Go=function(e){return"function"==typeof e},Zo=function(){return"undefined"==typeof window},Qo=function(e){return e instanceof Element||e instanceof HTMLDocument},Xo=function(e,t,r,n){return function(o){var i=o.width,s=o.height;t((function(t){return t.width===i&&t.height===s||t.width===i&&!n||t.height===s&&!r?t:(e&&Go(e)&&e(i,s),{width:i,height:s})}))}};!function(e){function t(t){var r=e.call(this,t)||this;r.cancelHandler=function(){r.resizeHandler&&r.resizeHandler.cancel&&(r.resizeHandler.cancel(),r.resizeHandler=null)},r.attachObserver=function(){var e=r.props,t=e.targetRef,n=e.observerOptions;if(!Zo()){t&&t.current&&(r.targetRef.current=t.current);var o=r.getElement();o&&(r.observableElement&&r.observableElement===o||(r.observableElement=o,r.resizeObserver.observe(o,n)))}},r.getElement=function(){var e=r.props,t=e.querySelector,n=e.targetDomEl;if(Zo())return null;if(t)return document.querySelector(t);if(n&&Qo(n))return n;if(r.targetRef&&Qo(r.targetRef.current))return r.targetRef.current;var o=k(r);if(!o)return null;switch(r.getRenderType()){case"renderProp":case"childFunction":case"child":case"childArray":return o;default:return o.parentElement}},r.createResizeHandler=function(e){var t=r.props,n=t.handleWidth,o=void 0===n||n,i=t.handleHeight,s=void 0===i||i,a=t.onResize;if(o||s){var l=Xo(a,r.setState.bind(r),o,s);e.forEach((function(e){var t=e&&e.contentRect||{},n=t.width,o=t.height;!r.skipOnMount&&!Zo()&&l({width:n,height:o}),r.skipOnMount=!1}))}},r.getRenderType=function(){var e=r.props,t=e.render,n=e.children;return Go(t)?"renderProp":Go(n)?"childFunction":l(n)?"child":Array.isArray(n)?"childArray":"parent"};var n=t.skipOnMount,o=t.refreshMode,i=t.refreshRate,s=void 0===i?1e3:i,a=t.refreshOptions;return r.state={width:void 0,height:void 0},r.skipOnMount=n,r.targetRef=d(),r.observableElement=null,Zo()||(r.resizeHandler=qo(r.createResizeHandler,o,s,a),r.resizeObserver=new window.ResizeObserver(r.resizeHandler)),r}(function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");function r(){this.constructor=e}oo(e,t),e.prototype=null===t?Object.create(t):(r.prototype=t.prototype,new r)})(t,e),t.prototype.componentDidMount=function(){this.attachObserver()},t.prototype.componentDidUpdate=function(){this.attachObserver()},t.prototype.componentWillUnmount=function(){Zo()||(this.observableElement=null,this.resizeObserver.disconnect(),this.cancelHandler())},t.prototype.render=function(){var e,t=this.props,r=t.render,o=t.children,i=t.nodeType,s=void 0===i?"div":i,a=this.state,l={width:a.width,height:a.height,targetRef:this.targetRef};switch(this.getRenderType()){case"renderProp":return r&&r(l);case"childFunction":return(e=o)(l);case"child":if((e=o).type&&"string"==typeof e.type){var d=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(n=Object.getOwnPropertySymbols(e);o<n.length;o++)t.indexOf(n[o])<0&&Object.prototype.propertyIsEnumerable.call(e,n[o])&&(r[n[o]]=e[n[o]])}return r}(l,["targetRef"]);return c(e,d)}return c(e,l);case"childArray":return(e=o).map((function(e){return!!e&&c(e,l)}));default:return n.createElement(s,null)}}}(u);var Ko=Zo()?s:h;function Jo(e){void 0===e&&(e={});var t=e.skipOnMount,r=void 0!==t&&t,n=e.refreshMode,o=e.refreshRate,s=void 0===o?1e3:o,l=e.refreshOptions,d=e.handleWidth,c=void 0===d||d,u=e.handleHeight,h=void 0===u||u,g=e.targetRef,m=e.observerOptions,f=e.onResize,p=i(r),b=i(null),v=null!=g?g:b,y=i(),x=a({width:void 0,height:void 0}),w=x[0],$=x[1];return Ko((function(){if(!Zo()){var e=Xo(f,$,c,h);y.current=qo((function(t){(c||h)&&t.forEach((function(t){var r=t&&t.contentRect||{},n=r.width,o=r.height;!p.current&&!Zo()&&e({width:n,height:o}),p.current=!1}))}),n,s,l);var t=new window.ResizeObserver(y.current);return v.current&&t.observe(v.current,m),function(){t.disconnect();var e=y.current;e&&e.cancel&&e.cancel()}}}),[n,s,l,c,h,f,m,v.current]),io({ref:v},w)}var ei=Object.defineProperty,ti={};((e,t)=>{for(var r in t)ei(e,r,{get:t[r],enumerable:!0})})(ti,{assign:()=>Ai,colors:()=>Bi,createStringInterpolator:()=>ki,skipAnimation:()=>zi,to:()=>Ii,willAdvance:()=>Mi});var ri=vi(),ni=e=>mi(e,ri),oi=vi();ni.write=e=>mi(e,oi);var ii=vi();ni.onStart=e=>mi(e,ii);var si=vi();ni.onFrame=e=>mi(e,si);var ai=vi();ni.onFinish=e=>mi(e,ai);var li=[];ni.setTimeout=(e,t)=>{const r=ni.now()+t,n=()=>{const e=li.findIndex((e=>e.cancel==n));~e&&li.splice(e,1),hi-=~e?1:0},o={time:r,handler:e,cancel:n};return li.splice(di(r),0,o),hi+=1,fi(),o};var di=e=>~(~li.findIndex((t=>t.time>e))||~li.length);ni.cancel=e=>{ii.delete(e),si.delete(e),ai.delete(e),ri.delete(e),oi.delete(e)},ni.sync=e=>{gi=!0,ni.batchedUpdates(e),gi=!1},ni.throttle=e=>{let t;function r(){try{e(...t)}finally{t=null}}function n(...e){t=e,ni.onStart(r)}return n.handler=e,n.cancel=()=>{ii.delete(r),t=null},n};var ci="undefined"!=typeof window?window.requestAnimationFrame:()=>{};ni.use=e=>ci=e,ni.now="undefined"!=typeof performance?()=>performance.now():Date.now,ni.batchedUpdates=e=>e(),ni.catch=console.error,ni.frameLoop="always",ni.advance=()=>{"demand"!==ni.frameLoop?console.warn("Cannot call the manual advancement of rafz whilst frameLoop is not set as demand"):bi()};var ui=-1,hi=0,gi=!1;function mi(e,t){gi?(t.delete(e),e(0)):(t.add(e),fi())}function fi(){ui<0&&(ui=0,"demand"!==ni.frameLoop&&ci(pi))}function pi(){~ui&&(ci(pi),ni.batchedUpdates(bi))}function bi(){const e=ui;ui=ni.now();const t=di(ui);t&&(yi(li.splice(0,t),(e=>e.handler())),hi-=t),hi?(ii.flush(),ri.flush(e?Math.min(64,ui-e):16.667),si.flush(),oi.flush(),ai.flush()):ui=-1}function vi(){let e=new Set,t=e;return{add(r){hi+=t!=e||e.has(r)?0:1,e.add(r)},delete:r=>(hi-=t==e&&e.has(r)?1:0,e.delete(r)),flush(r){t.size&&(e=new Set,hi-=t.size,yi(t,(t=>t(r)&&e.add(t))),hi+=e.size,t=e)}}}function yi(e,t){e.forEach((e=>{try{t(e)}catch(e){ni.catch(e)}}))}function xi(){}var wi={arr:Array.isArray,obj:e=>!!e&&"Object"===e.constructor.name,fun:e=>"function"==typeof e,str:e=>"string"==typeof e,num:e=>"number"==typeof e,und:e=>void 0===e};function $i(e,t){if(wi.arr(e)){if(!wi.arr(t)||e.length!==t.length)return!1;for(let r=0;r<e.length;r++)if(e[r]!==t[r])return!1;return!0}return e===t}var Fi=(e,t)=>e.forEach(t);function Ci(e,t,r){if(wi.arr(e))for(let n=0;n<e.length;n++)t.call(r,e[n],`${n}`);else for(const n in e)e.hasOwnProperty(n)&&t.call(r,e[n],n)}var Ei=e=>wi.und(e)?[]:wi.arr(e)?e:[e];function Si(e,t){if(e.size){const r=Array.from(e);e.clear(),Fi(r,t)}}var ki,Ii,Ti=(e,...t)=>Si(e,(e=>e(...t))),Di=()=>"undefined"==typeof window||!window.navigator||/ServerSideRendering|^Deno\//.test(window.navigator.userAgent),Bi=null,zi=!1,Mi=xi,Ai=e=>{e.to&&(Ii=e.to),e.now&&(ni.now=e.now),void 0!==e.colors&&(Bi=e.colors),null!=e.skipAnimation&&(zi=e.skipAnimation),e.createStringInterpolator&&(ki=e.createStringInterpolator),e.requestAnimationFrame&&ni.use(e.requestAnimationFrame),e.batchedUpdates&&(ni.batchedUpdates=e.batchedUpdates),e.willAdvance&&(Mi=e.willAdvance),e.frameLoop&&(ni.frameLoop=e.frameLoop)},_i=new Set,Oi=[],Ri=[],Hi=0,ji={get idle(){return!_i.size&&!Oi.length},start(e){Hi>e.priority?(_i.add(e),ni.onStart(Li)):(Pi(e),ni(Ni))},advance:Ni,sort(e){if(Hi)ni.onFrame((()=>ji.sort(e)));else{const t=Oi.indexOf(e);~t&&(Oi.splice(t,1),Wi(e))}},clear(){Oi=[],_i.clear()}};function Li(){_i.forEach(Pi),_i.clear(),ni(Ni)}function Pi(e){Oi.includes(e)||Wi(e)}function Wi(e){Oi.splice(function(e,t){const r=e.findIndex(t);return r<0?e.length:r}(Oi,(t=>t.priority>e.priority)),0,e)}function Ni(e){const t=Ri;for(let r=0;r<Oi.length;r++){const n=Oi[r];Hi=n.priority,n.idle||(Mi(n),n.advance(e),n.idle||t.push(n))}return Hi=0,(Ri=Oi).length=0,(Oi=t).length>0}var Vi="[-+]?\\d*\\.?\\d+",Yi=Vi+"%";function Ui(...e){return"\\(\\s*("+e.join(")\\s*,\\s*(")+")\\s*\\)"}var qi=new RegExp("rgb"+Ui(Vi,Vi,Vi)),Gi=new RegExp("rgba"+Ui(Vi,Vi,Vi,Vi)),Zi=new RegExp("hsl"+Ui(Vi,Yi,Yi)),Qi=new RegExp("hsla"+Ui(Vi,Yi,Yi,Vi)),Xi=/^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,Ki=/^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,Ji=/^#([0-9a-fA-F]{6})$/,es=/^#([0-9a-fA-F]{8})$/;function ts(e,t,r){return r<0&&(r+=1),r>1&&(r-=1),r<1/6?e+6*(t-e)*r:r<.5?t:r<2/3?e+(t-e)*(2/3-r)*6:e}function rs(e,t,r){const n=r<.5?r*(1+t):r+t-r*t,o=2*r-n,i=ts(o,n,e+1/3),s=ts(o,n,e),a=ts(o,n,e-1/3);return Math.round(255*i)<<24|Math.round(255*s)<<16|Math.round(255*a)<<8}function ns(e){const t=parseInt(e,10);return t<0?0:t>255?255:t}function os(e){return(parseFloat(e)%360+360)%360/360}function is(e){const t=parseFloat(e);return t<0?0:t>1?255:Math.round(255*t)}function ss(e){const t=parseFloat(e);return t<0?0:t>100?1:t/100}function as(e){let t=function(e){let t;return"number"==typeof e?e>>>0===e&&e>=0&&e<=4294967295?e:null:(t=Ji.exec(e))?parseInt(t[1]+"ff",16)>>>0:Bi&&void 0!==Bi[e]?Bi[e]:(t=qi.exec(e))?(ns(t[1])<<24|ns(t[2])<<16|ns(t[3])<<8|255)>>>0:(t=Gi.exec(e))?(ns(t[1])<<24|ns(t[2])<<16|ns(t[3])<<8|is(t[4]))>>>0:(t=Xi.exec(e))?parseInt(t[1]+t[1]+t[2]+t[2]+t[3]+t[3]+"ff",16)>>>0:(t=es.exec(e))?parseInt(t[1],16)>>>0:(t=Ki.exec(e))?parseInt(t[1]+t[1]+t[2]+t[2]+t[3]+t[3]+t[4]+t[4],16)>>>0:(t=Zi.exec(e))?(255|rs(os(t[1]),ss(t[2]),ss(t[3])))>>>0:(t=Qi.exec(e))?(rs(os(t[1]),ss(t[2]),ss(t[3]))|is(t[4]))>>>0:null}(e);if(null===t)return e;t=t||0;return`rgba(${(4278190080&t)>>>24}, ${(16711680&t)>>>16}, ${(65280&t)>>>8}, ${(255&t)/255})`}var ls=(e,t,r)=>{if(wi.fun(e))return e;if(wi.arr(e))return ls({range:e,output:t,extrapolate:r});if(wi.str(e.output[0]))return ki(e);const n=e,o=n.output,i=n.range||[0,1],s=n.extrapolateLeft||n.extrapolate||"extend",a=n.extrapolateRight||n.extrapolate||"extend",l=n.easing||(e=>e);return e=>{const t=function(e,t){for(var r=1;r<t.length-1&&!(t[r]>=e);++r);return r-1}(e,i);return function(e,t,r,n,o,i,s,a,l){let d=l?l(e):e;if(d<t){if("identity"===s)return d;"clamp"===s&&(d=t)}if(d>r){if("identity"===a)return d;"clamp"===a&&(d=r)}if(n===o)return n;if(t===r)return e<=t?n:o;t===-1/0?d=-d:r===1/0?d-=t:d=(d-t)/(r-t);d=i(d),n===-1/0?d=-d:o===1/0?d+=n:d=d*(o-n)+n;return d}(e,i[t],i[t+1],o[t],o[t+1],l,s,a,n.map)}};var ds=1.70158,cs=1.525*ds,us=ds+1,hs=2*Math.PI/3,gs=2*Math.PI/4.5,ms=e=>{const t=7.5625,r=2.75;return e<1/r?t*e*e:e<2/r?t*(e-=1.5/r)*e+.75:e<2.5/r?t*(e-=2.25/r)*e+.9375:t*(e-=2.625/r)*e+.984375},fs={linear:e=>e,easeInQuad:e=>e*e,easeOutQuad:e=>1-(1-e)*(1-e),easeInOutQuad:e=>e<.5?2*e*e:1-Math.pow(-2*e+2,2)/2,easeInCubic:e=>e*e*e,easeOutCubic:e=>1-Math.pow(1-e,3),easeInOutCubic:e=>e<.5?4*e*e*e:1-Math.pow(-2*e+2,3)/2,easeInQuart:e=>e*e*e*e,easeOutQuart:e=>1-Math.pow(1-e,4),easeInOutQuart:e=>e<.5?8*e*e*e*e:1-Math.pow(-2*e+2,4)/2,easeInQuint:e=>e*e*e*e*e,easeOutQuint:e=>1-Math.pow(1-e,5),easeInOutQuint:e=>e<.5?16*e*e*e*e*e:1-Math.pow(-2*e+2,5)/2,easeInSine:e=>1-Math.cos(e*Math.PI/2),easeOutSine:e=>Math.sin(e*Math.PI/2),easeInOutSine:e=>-(Math.cos(Math.PI*e)-1)/2,easeInExpo:e=>0===e?0:Math.pow(2,10*e-10),easeOutExpo:e=>1===e?1:1-Math.pow(2,-10*e),easeInOutExpo:e=>0===e?0:1===e?1:e<.5?Math.pow(2,20*e-10)/2:(2-Math.pow(2,-20*e+10))/2,easeInCirc:e=>1-Math.sqrt(1-Math.pow(e,2)),easeOutCirc:e=>Math.sqrt(1-Math.pow(e-1,2)),easeInOutCirc:e=>e<.5?(1-Math.sqrt(1-Math.pow(2*e,2)))/2:(Math.sqrt(1-Math.pow(-2*e+2,2))+1)/2,easeInBack:e=>us*e*e*e-ds*e*e,easeOutBack:e=>1+us*Math.pow(e-1,3)+ds*Math.pow(e-1,2),easeInOutBack:e=>e<.5?Math.pow(2*e,2)*(7.189819*e-cs)/2:(Math.pow(2*e-2,2)*((cs+1)*(2*e-2)+cs)+2)/2,easeInElastic:e=>0===e?0:1===e?1:-Math.pow(2,10*e-10)*Math.sin((10*e-10.75)*hs),easeOutElastic:e=>0===e?0:1===e?1:Math.pow(2,-10*e)*Math.sin((10*e-.75)*hs)+1,easeInOutElastic:e=>0===e?0:1===e?1:e<.5?-Math.pow(2,20*e-10)*Math.sin((20*e-11.125)*gs)/2:Math.pow(2,-20*e+10)*Math.sin((20*e-11.125)*gs)/2+1,easeInBounce:e=>1-ms(1-e),easeOutBounce:ms,easeInOutBounce:e=>e<.5?(1-ms(1-2*e))/2:(1+ms(2*e-1))/2,steps:(e,t="end")=>r=>{const n=(r="end"===t?Math.min(r,.999):Math.max(r,.001))*e,o="end"===t?Math.floor(n):Math.ceil(n);return i=0,s=1,a=o/e,Math.min(Math.max(a,i),s);var i,s,a}},ps=Symbol.for("FluidValue.get"),bs=Symbol.for("FluidValue.observers"),vs=e=>Boolean(e&&e[ps]),ys=e=>e&&e[ps]?e[ps]():e,xs=e=>e[bs]||null;function ws(e,t){const r=e[bs];r&&r.forEach((e=>{!function(e,t){e.eventObserved?e.eventObserved(t):e(t)}(e,t)}))}var $s=class{constructor(e){if(!e&&!(e=this.get))throw Error("Unknown getter");Fs(this,e)}},Fs=(e,t)=>ks(e,ps,t);function Cs(e,t){if(e[ps]){let r=e[bs];r||ks(e,bs,r=new Set),r.has(t)||(r.add(t),e.observerAdded&&e.observerAdded(r.size,t))}return t}function Es(e,t){const r=e[bs];if(r&&r.has(t)){const n=r.size-1;n?r.delete(t):e[bs]=null,e.observerRemoved&&e.observerRemoved(n,t)}}var Ss,ks=(e,t,r)=>Object.defineProperty(e,t,{value:r,writable:!0,configurable:!0}),Is=/[+\-]?(?:0|[1-9]\d*)(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,Ts=/(#(?:[0-9a-f]{2}){2,4}|(#[0-9a-f]{3})|(rgb|hsl)a?\((-?\d+%?[,\s]+){2,3}\s*[\d\.]+%?\))/gi,Ds=new RegExp(`(${Is.source})(%|[a-z]+)`,"i"),Bs=/rgba\(([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+)\)/gi,zs=/var\((--[a-zA-Z0-9-_]+),? ?([a-zA-Z0-9 ()%#.,-]+)?\)/,Ms=e=>{const[t,r]=As(e);if(!t||Di())return e;const n=window.getComputedStyle(document.documentElement).getPropertyValue(t);if(n)return n.trim();if(r&&r.startsWith("--")){const t=window.getComputedStyle(document.documentElement).getPropertyValue(r);return t||e}return r&&zs.test(r)?Ms(r):r||e},As=e=>{const t=zs.exec(e);if(!t)return[,];const[,r,n]=t;return[r,n]},_s=(e,t,r,n,o)=>`rgba(${Math.round(t)}, ${Math.round(r)}, ${Math.round(n)}, ${o})`,Os=e=>{Ss||(Ss=Bi?new RegExp(`(${Object.keys(Bi).join("|")})(?!\\w)`,"g"):/^\b$/);const t=e.output.map((e=>ys(e).replace(zs,Ms).replace(Ts,as).replace(Ss,as))),r=t.map((e=>e.match(Is).map(Number))),n=r[0].map(((e,t)=>r.map((e=>{if(!(t in e))throw Error('The arity of each "output" value must be equal');return e[t]})))).map((t=>ls({...e,output:t})));return e=>{const r=!Ds.test(t[0])&&t.find((e=>Ds.test(e)))?.replace(Is,"");let o=0;return t[0].replace(Is,(()=>`${n[o++](e)}${r||""}`)).replace(Bs,_s)}},Rs="react-spring: ",Hs=e=>{const t=e;let r=!1;if("function"!=typeof t)throw new TypeError(`${Rs}once requires a function parameter`);return(...e)=>{r||(t(...e),r=!0)}},js=Hs(console.warn);var Ls=Hs(console.warn);function Ps(e){return wi.str(e)&&("#"==e[0]||/\d/.test(e)||!Di()&&zs.test(e)||e in(Bi||{}))}var Ws=Di()?s:h;function Ns(){const e=a()[1],t=(()=>{const e=i(!1);return Ws((()=>(e.current=!0,()=>{e.current=!1})),[]),e})();return()=>{t.current&&e(Math.random())}}var Vs=e=>s(e,Ys),Ys=[];function Us(e){const t=i();return s((()=>{t.current=e})),t.current}var qs=Symbol.for("Animated:node"),Gs=e=>e&&e[qs],Zs=(e,t)=>((e,t,r)=>Object.defineProperty(e,t,{value:r,writable:!0,configurable:!0}))(e,qs,t),Qs=e=>e&&e[qs]&&e[qs].getPayload(),Xs=class{constructor(){Zs(this,this)}getPayload(){return this.payload||[]}},Ks=class extends Xs{constructor(e){super(),this._value=e,this.done=!0,this.durationProgress=0,wi.num(this._value)&&(this.lastPosition=this._value)}static create(e){return new Ks(e)}getPayload(){return[this]}getValue(){return this._value}setValue(e,t){return wi.num(e)&&(this.lastPosition=e,t&&(e=Math.round(e/t)*t,this.done&&(this.lastPosition=e))),this._value!==e&&(this._value=e,!0)}reset(){const{done:e}=this;this.done=!1,wi.num(this._value)&&(this.elapsedTime=0,this.durationProgress=0,this.lastPosition=this._value,e&&(this.lastVelocity=null),this.v0=null)}},Js=class extends Ks{constructor(e){super(0),this._string=null,this._toString=ls({output:[e,e]})}static create(e){return new Js(e)}getValue(){const e=this._string;return null==e?this._string=this._toString(this._value):e}setValue(e){if(wi.str(e)){if(e==this._string)return!1;this._string=e,this._value=1}else{if(!super.setValue(e))return!1;this._string=null}return!0}reset(e){e&&(this._toString=ls({output:[this.getValue(),e]})),this._value=0,super.reset()}},ea={dependencies:null},ta=class extends Xs{constructor(e){super(),this.source=e,this.setValue(e)}getValue(e){const t={};return Ci(this.source,((r,n)=>{var o;(o=r)&&o[qs]===o?t[n]=r.getValue(e):vs(r)?t[n]=ys(r):e||(t[n]=r)})),t}setValue(e){this.source=e,this.payload=this._makePayload(e)}reset(){this.payload&&Fi(this.payload,(e=>e.reset()))}_makePayload(e){if(e){const t=new Set;return Ci(e,this._addToPayload,t),Array.from(t)}}_addToPayload(e){ea.dependencies&&vs(e)&&ea.dependencies.add(e);const t=Qs(e);t&&Fi(t,(e=>this.add(e)))}},ra=class extends ta{constructor(e){super(e)}static create(e){return new ra(e)}getValue(){return this.source.map((e=>e.getValue()))}setValue(e){const t=this.getPayload();return e.length==t.length?t.map(((t,r)=>t.setValue(e[r]))).some(Boolean):(super.setValue(e.map(na)),!0)}};function na(e){return(Ps(e)?Js:Ks).create(e)}function oa(e){const t=Gs(e);return t?t.constructor:wi.arr(e)?ra:Ps(e)?Js:Ks}var ia=(e,t)=>{const r=!wi.fun(e)||e.prototype&&e.prototype.isReactComponent;return g(((o,a)=>{const l=i(null),d=r&&m((e=>{l.current=function(e,t){e&&(wi.fun(e)?e(t):e.current=t);return t}(a,e)}),[a]),[c,u]=function(e,t){const r=new Set;ea.dependencies=r,e.style&&(e={...e,style:t.createAnimatedStyle(e.style)});return e=new ta(e),ea.dependencies=null,[e,r]}(o,t),h=Ns(),g=()=>{const e=l.current;if(r&&!e)return;!1===(!!e&&t.applyAnimatedValues(e,c.getValue(!0)))&&h()},f=new sa(g,u),p=i();Ws((()=>(p.current=f,Fi(u,(e=>Cs(e,f))),()=>{p.current&&(Fi(p.current.deps,(e=>Es(e,p.current))),ni.cancel(p.current.update))}))),s(g,[]),Vs((()=>()=>{const e=p.current;Fi(e.deps,(t=>Es(t,e)))}));const b=t.getComponentProps(c.getValue());return n.createElement(e,{...b,ref:d})}))},sa=class{constructor(e,t){this.update=e,this.deps=t}eventObserved(e){"change"==e.type&&ni.write(this.update)}};var aa=Symbol.for("AnimatedComponent"),la=e=>wi.str(e)?e:e&&wi.str(e.displayName)?e.displayName:wi.fun(e)&&e.name||null;function da(e,...t){return wi.fun(e)?e(...t):e}var ca=(e,t)=>!0===e||!!(t&&e&&(wi.fun(e)?e(t):Ei(e).includes(t))),ua=(e,t)=>wi.obj(e)?t&&e[t]:e,ha=(e,t)=>!0===e.default?e[t]:e.default?e.default[t]:void 0,ga=e=>e,ma=(e,t=ga)=>{let r=fa;e.default&&!0!==e.default&&(e=e.default,r=Object.keys(e));const n={};for(const o of r){const r=t(e[o],o);wi.und(r)||(n[o]=r)}return n},fa=["config","onProps","onStart","onChange","onPause","onResume","onRest"],pa={config:1,from:1,to:1,ref:1,loop:1,reset:1,pause:1,cancel:1,reverse:1,immediate:1,default:1,delay:1,onProps:1,onStart:1,onChange:1,onPause:1,onResume:1,onRest:1,onResolve:1,items:1,trail:1,sort:1,expires:1,initial:1,enter:1,update:1,leave:1,children:1,onDestroyed:1,keys:1,callId:1,parentId:1};function ba(e){const t=function(e){const t={};let r=0;if(Ci(e,((e,n)=>{pa[n]||(t[n]=e,r++)})),r)return t}(e);if(t){const r={to:t};return Ci(e,((e,n)=>n in t||(r[n]=e))),r}return{...e}}function va(e){return e=ys(e),wi.arr(e)?e.map(va):Ps(e)?ti.createStringInterpolator({range:[0,1],output:[e,e]})(1):e}function ya(e){return wi.fun(e)||wi.arr(e)&&wi.obj(e[0])}var xa={tension:170,friction:26,mass:1,damping:1,easing:fs.linear,clamp:!1},wa=class{constructor(){this.velocity=0,Object.assign(this,xa)}};function $a(e,t){if(wi.und(t.decay)){const r=!wi.und(t.tension)||!wi.und(t.friction);!r&&wi.und(t.frequency)&&wi.und(t.damping)&&wi.und(t.mass)||(e.duration=void 0,e.decay=void 0),r&&(e.frequency=void 0)}else e.duration=void 0}var Fa=[],Ca=class{constructor(){this.changed=!1,this.values=Fa,this.toValues=null,this.fromValues=Fa,this.config=new wa,this.immediate=!1}};function Ea(e,{key:t,props:r,defaultProps:n,state:o,actions:i}){return new Promise(((s,a)=>{let l,d,c=ca(r.cancel??n?.cancel,t);if(c)g();else{wi.und(r.pause)||(o.paused=ca(r.pause,t));let e=n?.pause;!0!==e&&(e=o.paused||ca(e,t)),l=da(r.delay||0,t),e?(o.resumeQueue.add(h),i.pause()):(i.resume(),h())}function u(){o.resumeQueue.add(h),o.timeouts.delete(d),d.cancel(),l=d.time-ni.now()}function h(){l>0&&!ti.skipAnimation?(o.delayed=!0,d=ni.setTimeout(g,l),o.pauseQueue.add(u),o.timeouts.add(d)):g()}function g(){o.delayed&&(o.delayed=!1),o.pauseQueue.delete(u),o.timeouts.delete(d),e<=(o.cancelId||0)&&(c=!0);try{i.start({...r,callId:e,cancel:c},s)}catch(e){a(e)}}}))}var Sa=(e,t)=>1==t.length?t[0]:t.some((e=>e.cancelled))?Ta(e.get()):t.every((e=>e.noop))?ka(e.get()):Ia(e.get(),t.every((e=>e.finished))),ka=e=>({value:e,noop:!0,finished:!0,cancelled:!1}),Ia=(e,t,r=!1)=>({value:e,finished:t,cancelled:r}),Ta=e=>({value:e,cancelled:!0,finished:!1});function Da(e,t,r,n){const{callId:o,parentId:i,onRest:s}=t,{asyncTo:a,promise:l}=r;return i||e!==a||t.reset?r.promise=(async()=>{r.asyncId=o,r.asyncTo=e;const d=ma(t,((e,t)=>"onRest"===t?void 0:e));let c,u;const h=new Promise(((e,t)=>(c=e,u=t))),g=e=>{const t=o<=(r.cancelId||0)&&Ta(n)||o!==r.asyncId&&Ia(n,!1);if(t)throw e.result=t,u(e),e},m=(e,t)=>{const i=new za,s=new Ma;return(async()=>{if(ti.skipAnimation)throw Ba(r),s.result=Ia(n,!1),u(s),s;g(i);const a=wi.obj(e)?{...e}:{...t,to:e};a.parentId=o,Ci(d,((e,t)=>{wi.und(a[t])&&(a[t]=e)}));const l=await n.start(a);return g(i),r.paused&&await new Promise((e=>{r.resumeQueue.add(e)})),l})()};let f;if(ti.skipAnimation)return Ba(r),Ia(n,!1);try{let t;t=wi.arr(e)?(async e=>{for(const t of e)await m(t)})(e):Promise.resolve(e(m,n.stop.bind(n))),await Promise.all([t.then(c),h]),f=Ia(n.get(),!0,!1)}catch(e){if(e instanceof za)f=e.result;else{if(!(e instanceof Ma))throw e;f=e.result}}finally{o==r.asyncId&&(r.asyncId=i,r.asyncTo=i?a:void 0,r.promise=i?l:void 0)}return wi.fun(s)&&ni.batchedUpdates((()=>{s(f,n,n.item)})),f})():l}function Ba(e,t){Si(e.timeouts,(e=>e.cancel())),e.pauseQueue.clear(),e.resumeQueue.clear(),e.asyncId=e.asyncTo=e.promise=void 0,t&&(e.cancelId=t)}var za=class extends Error{constructor(){super("An async animation has been interrupted. You see this error because you forgot to use `await` or `.catch(...)` on its returned promise.")}},Ma=class extends Error{constructor(){super("SkipAnimationSignal")}},Aa=e=>e instanceof Oa,_a=1,Oa=class extends $s{constructor(){super(...arguments),this.id=_a++,this._priority=0}get priority(){return this._priority}set priority(e){this._priority!=e&&(this._priority=e,this._onPriorityChange(e))}get(){const e=Gs(this);return e&&e.getValue()}to(...e){return ti.to(this,e)}interpolate(...e){return js(`${Rs}The "interpolate" function is deprecated in v9 (use "to" instead)`),ti.to(this,e)}toJSON(){return this.get()}observerAdded(e){1==e&&this._attach()}observerRemoved(e){0==e&&this._detach()}_attach(){}_detach(){}_onChange(e,t=!1){ws(this,{type:"change",parent:this,value:e,idle:t})}_onPriorityChange(e){this.idle||ji.sort(this),ws(this,{type:"priority",parent:this,priority:e})}},Ra=Symbol.for("SpringPhase"),Ha=e=>(1&e[Ra])>0,ja=e=>(2&e[Ra])>0,La=e=>(4&e[Ra])>0,Pa=(e,t)=>t?e[Ra]|=3:e[Ra]&=-3,Wa=(e,t)=>t?e[Ra]|=4:e[Ra]&=-5,Na=class extends Oa{constructor(e,t){if(super(),this.animation=new Ca,this.defaultProps={},this._state={paused:!1,delayed:!1,pauseQueue:new Set,resumeQueue:new Set,timeouts:new Set},this._pendingCalls=new Set,this._lastCallId=0,this._lastToId=0,this._memoizedDuration=0,!wi.und(e)||!wi.und(t)){const r=wi.obj(e)?{...e}:{...t,from:e};wi.und(r.default)&&(r.default=!0),this.start(r)}}get idle(){return!(ja(this)||this._state.asyncTo)||La(this)}get goal(){return ys(this.animation.to)}get velocity(){const e=Gs(this);return e instanceof Ks?e.lastVelocity||0:e.getPayload().map((e=>e.lastVelocity||0))}get hasAnimated(){return Ha(this)}get isAnimating(){return ja(this)}get isPaused(){return La(this)}get isDelayed(){return this._state.delayed}advance(e){let t=!0,r=!1;const n=this.animation;let{toValues:o}=n;const{config:i}=n,s=Qs(n.to);!s&&vs(n.to)&&(o=Ei(ys(n.to))),n.values.forEach(((a,l)=>{if(a.done)return;const d=a.constructor==Js?1:s?s[l].lastPosition:o[l];let c=n.immediate,u=d;if(!c){if(u=a.lastPosition,i.tension<=0)return void(a.done=!0);let t=a.elapsedTime+=e;const r=n.fromValues[l],o=null!=a.v0?a.v0:a.v0=wi.arr(i.velocity)?i.velocity[l]:i.velocity;let s;const h=i.precision||(r==d?.005:Math.min(1,.001*Math.abs(d-r)));if(wi.und(i.duration))if(i.decay){const e=!0===i.decay?.998:i.decay,n=Math.exp(-(1-e)*t);u=r+o/(1-e)*(1-n),c=Math.abs(a.lastPosition-u)<=h,s=o*n}else{s=null==a.lastVelocity?o:a.lastVelocity;const t=i.restVelocity||h/10,n=i.clamp?0:i.bounce,l=!wi.und(n),g=r==d?a.v0>0:r<d;let m,f=!1;const p=1,b=Math.ceil(e/p);for(let e=0;e<b&&(m=Math.abs(s)>t,m||(c=Math.abs(d-u)<=h,!c));++e){l&&(f=u==d||u>d==g,f&&(s=-s*n,u=d));s+=(1e-6*-i.tension*(u-d)+.001*-i.friction*s)/i.mass*p,u+=s*p}}else{let n=1;i.duration>0&&(this._memoizedDuration!==i.duration&&(this._memoizedDuration=i.duration,a.durationProgress>0&&(a.elapsedTime=i.duration*a.durationProgress,t=a.elapsedTime+=e)),n=(i.progress||0)+t/this._memoizedDuration,n=n>1?1:n<0?0:n,a.durationProgress=n),u=r+i.easing(n)*(d-r),s=(u-a.lastPosition)/e,c=1==n}a.lastVelocity=s,Number.isNaN(u)&&(console.warn("Got NaN while animating:",this),c=!0)}s&&!s[l].done&&(c=!1),c?a.done=!0:t=!1,a.setValue(u,i.round)&&(r=!0)}));const a=Gs(this),l=a.getValue();if(t){const e=ys(n.to);l===e&&!r||i.decay?r&&i.decay&&this._onChange(l):(a.setValue(e),this._onChange(e)),this._stop()}else r&&this._onChange(l)}set(e){return ni.batchedUpdates((()=>{this._stop(),this._focus(e),this._set(e)})),this}pause(){this._update({pause:!0})}resume(){this._update({pause:!1})}finish(){if(ja(this)){const{to:e,config:t}=this.animation;ni.batchedUpdates((()=>{this._onStart(),t.decay||this._set(e,!1),this._stop()}))}return this}update(e){return(this.queue||(this.queue=[])).push(e),this}start(e,t){let r;return wi.und(e)?(r=this.queue||[],this.queue=[]):r=[wi.obj(e)?e:{...t,to:e}],Promise.all(r.map((e=>this._update(e)))).then((e=>Sa(this,e)))}stop(e){const{to:t}=this.animation;return this._focus(this.get()),Ba(this._state,e&&this._lastCallId),ni.batchedUpdates((()=>this._stop(t,e))),this}reset(){this._update({reset:!0})}eventObserved(e){"change"==e.type?this._start():"priority"==e.type&&(this.priority=e.priority+1)}_prepareNode(e){const t=this.key||"";let{to:r,from:n}=e;r=wi.obj(r)?r[t]:r,(null==r||ya(r))&&(r=void 0),n=wi.obj(n)?n[t]:n,null==n&&(n=void 0);const o={to:r,from:n};return Ha(this)||(e.reverse&&([r,n]=[n,r]),n=ys(n),wi.und(n)?Gs(this)||this._set(r):this._set(n)),o}_update({...e},t){const{key:r,defaultProps:n}=this;e.default&&Object.assign(n,ma(e,((e,t)=>/^on/.test(t)?ua(e,r):e))),Qa(this,e,"onProps"),Xa(this,"onProps",e,this);const o=this._prepareNode(e);if(Object.isFrozen(this))throw Error("Cannot animate a `SpringValue` object that is frozen. Did you forget to pass your component to `animated(...)` before animating its props?");const i=this._state;return Ea(++this._lastCallId,{key:r,props:e,defaultProps:n,state:i,actions:{pause:()=>{La(this)||(Wa(this,!0),Ti(i.pauseQueue),Xa(this,"onPause",Ia(this,Va(this,this.animation.to)),this))},resume:()=>{La(this)&&(Wa(this,!1),ja(this)&&this._resume(),Ti(i.resumeQueue),Xa(this,"onResume",Ia(this,Va(this,this.animation.to)),this))},start:this._merge.bind(this,o)}}).then((r=>{if(e.loop&&r.finished&&(!t||!r.noop)){const t=Ya(e);if(t)return this._update(t,!0)}return r}))}_merge(e,t,r){if(t.cancel)return this.stop(!0),r(Ta(this));const n=!wi.und(e.to),o=!wi.und(e.from);if(n||o){if(!(t.callId>this._lastToId))return r(Ta(this));this._lastToId=t.callId}const{key:i,defaultProps:s,animation:a}=this,{to:l,from:d}=a;let{to:c=l,from:u=d}=e;!o||n||t.default&&!wi.und(c)||(c=u),t.reverse&&([c,u]=[u,c]);const h=!$i(u,d);h&&(a.from=u),u=ys(u);const g=!$i(c,l);g&&this._focus(c);const m=ya(t.to),{config:f}=a,{decay:p,velocity:b}=f;(n||o)&&(f.velocity=0),t.config&&!m&&function(e,t,r){r&&($a(r={...r},t),t={...r,...t}),$a(e,t),Object.assign(e,t);for(const t in xa)null==e[t]&&(e[t]=xa[t]);let{frequency:n,damping:o}=e;const{mass:i}=e;wi.und(n)||(n<.01&&(n=.01),o<0&&(o=0),e.tension=Math.pow(2*Math.PI/n,2)*i,e.friction=4*Math.PI*o*i/n)}(f,da(t.config,i),t.config!==s.config?da(s.config,i):void 0);let v=Gs(this);if(!v||wi.und(c))return r(Ia(this,!0));const y=wi.und(t.reset)?o&&!t.default:!wi.und(u)&&ca(t.reset,i),x=y?u:this.get(),w=va(c),$=wi.num(w)||wi.arr(w)||Ps(w),F=!m&&(!$||ca(s.immediate||t.immediate,i));if(g){const e=oa(c);if(e!==v.constructor){if(!F)throw Error(`Cannot animate between ${v.constructor.name} and ${e.name}, as the "to" prop suggests`);v=this._set(w)}}const C=v.constructor;let E=vs(c),S=!1;if(!E){const e=y||!Ha(this)&&h;(g||e)&&(S=$i(va(x),w),E=!S),($i(a.immediate,F)||F)&&$i(f.decay,p)&&$i(f.velocity,b)||(E=!0)}if(S&&ja(this)&&(a.changed&&!y?E=!0:E||this._stop(l)),!m&&((E||vs(l))&&(a.values=v.getPayload(),a.toValues=vs(c)?null:C==Js?[1]:Ei(w)),a.immediate!=F&&(a.immediate=F,F||y||this._set(l)),E)){const{onRest:e}=a;Fi(Za,(e=>Qa(this,t,e)));const n=Ia(this,Va(this,l));Ti(this._pendingCalls,n),this._pendingCalls.add(r),a.changed&&ni.batchedUpdates((()=>{a.changed=!y,e?.(n,this),y?da(s.onRest,n):a.onStart?.(n,this)}))}y&&this._set(x),m?r(Da(t.to,t,this._state,this)):E?this._start():ja(this)&&!g?this._pendingCalls.add(r):r(ka(x))}_focus(e){const t=this.animation;e!==t.to&&(xs(this)&&this._detach(),t.to=e,xs(this)&&this._attach())}_attach(){let e=0;const{to:t}=this.animation;vs(t)&&(Cs(t,this),Aa(t)&&(e=t.priority+1)),this.priority=e}_detach(){const{to:e}=this.animation;vs(e)&&Es(e,this)}_set(e,t=!0){const r=ys(e);if(!wi.und(r)){const e=Gs(this);if(!e||!$i(r,e.getValue())){const n=oa(r);e&&e.constructor==n?e.setValue(r):Zs(this,n.create(r)),e&&ni.batchedUpdates((()=>{this._onChange(r,t)}))}}return Gs(this)}_onStart(){const e=this.animation;e.changed||(e.changed=!0,Xa(this,"onStart",Ia(this,Va(this,e.to)),this))}_onChange(e,t){t||(this._onStart(),da(this.animation.onChange,e,this)),da(this.defaultProps.onChange,e,this),super._onChange(e,t)}_start(){const e=this.animation;Gs(this).reset(ys(e.to)),e.immediate||(e.fromValues=e.values.map((e=>e.lastPosition))),ja(this)||(Pa(this,!0),La(this)||this._resume())}_resume(){ti.skipAnimation?this.finish():ji.start(this)}_stop(e,t){if(ja(this)){Pa(this,!1);const r=this.animation;Fi(r.values,(e=>{e.done=!0})),r.toValues&&(r.onChange=r.onPause=r.onResume=void 0),ws(this,{type:"idle",parent:this});const n=t?Ta(this.get()):Ia(this.get(),Va(this,e??r.to));Ti(this._pendingCalls,n),r.changed&&(r.changed=!1,Xa(this,"onRest",n,this))}}};function Va(e,t){const r=va(t);return $i(va(e.get()),r)}function Ya(e,t=e.loop,r=e.to){const n=da(t);if(n){const o=!0!==n&&ba(n),i=(o||e).reverse,s=!o||o.reset;return Ua({...e,loop:t,default:!1,pause:void 0,to:!i||ya(r)?r:void 0,from:s?e.from:void 0,reset:s,...o})}}function Ua(e){const{to:t,from:r}=e=ba(e),n=new Set;return wi.obj(t)&&Ga(t,n),wi.obj(r)&&Ga(r,n),e.keys=n.size?Array.from(n):null,e}function qa(e){const t=Ua(e);return wi.und(t.default)&&(t.default=ma(t)),t}function Ga(e,t){Ci(e,((e,r)=>null!=e&&t.add(r)))}var Za=["onStart","onRest","onChange","onPause","onResume"];function Qa(e,t,r){e.animation[r]=t[r]!==ha(t,r)?ua(t[r],e.key):void 0}function Xa(e,t,...r){e.animation[t]?.(...r),e.defaultProps[t]?.(...r)}var Ka=["onStart","onChange","onRest"],Ja=1,el=class{constructor(e,t){this.id=Ja++,this.springs={},this.queue=[],this._lastAsyncId=0,this._active=new Set,this._changed=new Set,this._started=!1,this._state={paused:!1,pauseQueue:new Set,resumeQueue:new Set,timeouts:new Set},this._events={onStart:new Map,onChange:new Map,onRest:new Map},this._onFrame=this._onFrame.bind(this),t&&(this._flush=t),e&&this.start({default:!0,...e})}get idle(){return!this._state.asyncTo&&Object.values(this.springs).every((e=>e.idle&&!e.isDelayed&&!e.isPaused))}get item(){return this._item}set item(e){this._item=e}get(){const e={};return this.each(((t,r)=>e[r]=t.get())),e}set(e){for(const t in e){const r=e[t];wi.und(r)||this.springs[t].set(r)}}update(e){return e&&this.queue.push(Ua(e)),this}start(e){let{queue:t}=this;return e?t=Ei(e).map(Ua):this.queue=[],this._flush?this._flush(this,t):(al(this,t),tl(this,t))}stop(e,t){if(e!==!!e&&(t=e),t){const r=this.springs;Fi(Ei(t),(t=>r[t].stop(!!e)))}else Ba(this._state,this._lastAsyncId),this.each((t=>t.stop(!!e)));return this}pause(e){if(wi.und(e))this.start({pause:!0});else{const t=this.springs;Fi(Ei(e),(e=>t[e].pause()))}return this}resume(e){if(wi.und(e))this.start({pause:!1});else{const t=this.springs;Fi(Ei(e),(e=>t[e].resume()))}return this}each(e){Ci(this.springs,e)}_onFrame(){const{onStart:e,onChange:t,onRest:r}=this._events,n=this._active.size>0,o=this._changed.size>0;(n&&!this._started||o&&!this._started)&&(this._started=!0,Si(e,(([e,t])=>{t.value=this.get(),e(t,this,this._item)})));const i=!n&&this._started,s=o||i&&r.size?this.get():null;o&&t.size&&Si(t,(([e,t])=>{t.value=s,e(t,this,this._item)})),i&&(this._started=!1,Si(r,(([e,t])=>{t.value=s,e(t,this,this._item)})))}eventObserved(e){if("change"==e.type)this._changed.add(e.parent),e.idle||this._active.add(e.parent);else{if("idle"!=e.type)return;this._active.delete(e.parent)}ni.onFrame(this._onFrame)}};function tl(e,t){return Promise.all(t.map((t=>rl(e,t)))).then((t=>Sa(e,t)))}async function rl(e,t,r){const{keys:n,to:o,from:i,loop:s,onRest:a,onResolve:l}=t,d=wi.obj(t.default)&&t.default;s&&(t.loop=!1),!1===o&&(t.to=null),!1===i&&(t.from=null);const c=wi.arr(o)||wi.fun(o)?o:void 0;c?(t.to=void 0,t.onRest=void 0,d&&(d.onRest=void 0)):Fi(Ka,(r=>{const n=t[r];if(wi.fun(n)){const o=e._events[r];t[r]=({finished:e,cancelled:t})=>{const r=o.get(n);r?(e||(r.finished=!1),t&&(r.cancelled=!0)):o.set(n,{value:null,finished:e||!1,cancelled:t||!1})},d&&(d[r]=t[r])}}));const u=e._state;t.pause===!u.paused?(u.paused=t.pause,Ti(t.pause?u.pauseQueue:u.resumeQueue)):u.paused&&(t.pause=!0);const h=(n||Object.keys(e.springs)).map((r=>e.springs[r].start(t))),g=!0===t.cancel||!0===ha(t,"cancel");(c||g&&u.asyncId)&&h.push(Ea(++e._lastAsyncId,{props:t,state:u,actions:{pause:xi,resume:xi,start(t,r){g?(Ba(u,e._lastAsyncId),r(Ta(e))):(t.onRest=a,r(Da(c,t,u,e)))}}})),u.paused&&await new Promise((e=>{u.resumeQueue.add(e)}));const m=Sa(e,await Promise.all(h));if(s&&m.finished&&(!r||!m.noop)){const r=Ya(t,s,o);if(r)return al(e,[r]),rl(e,r,!0)}return l&&ni.batchedUpdates((()=>l(m,e,e.item))),m}function nl(e,t){const r={...e.springs};return t&&Fi(Ei(t),(e=>{wi.und(e.keys)&&(e=Ua(e)),wi.obj(e.to)||(e={...e,to:void 0}),sl(r,e,(e=>il(e)))})),ol(e,r),r}function ol(e,t){Ci(t,((t,r)=>{e.springs[r]||(e.springs[r]=t,Cs(t,e))}))}function il(e,t){const r=new Na;return r.key=e,t&&Cs(r,t),r}function sl(e,t,r){t.keys&&Fi(t.keys,(n=>{(e[n]||(e[n]=r(n)))._prepareNode(t)}))}function al(e,t){Fi(t,(t=>{sl(e.springs,t,(t=>il(t,e)))}))}var ll,dl,cl=({children:e,...t})=>{const r=f(ul),o=t.pause||!!r.pause,l=t.immediate||!!r.immediate;t=function(e,t){const[r]=a((()=>({inputs:t,result:e()}))),n=i(),o=n.current;let l=o;l?Boolean(t&&l.inputs&&function(e,t){if(e.length!==t.length)return!1;for(let r=0;r<e.length;r++)if(e[r]!==t[r])return!1;return!0}(t,l.inputs))||(l={inputs:t,result:e()}):l=r;return s((()=>{n.current=l,o==r&&(r.inputs=r.result=void 0)}),[l]),l.result}((()=>({pause:o,immediate:l})),[o,l]);const{Provider:d}=ul;return n.createElement(d,{value:t},e)},ul=(ll=cl,dl={},Object.assign(ll,n.createContext(dl)),ll.Provider._context=ll,ll.Consumer._context=ll,ll);cl.Provider=ul.Provider,cl.Consumer=ul.Consumer;var hl=()=>{const e=[],t=function(t){Ls(`${Rs}Directly calling start instead of using the api object is deprecated in v9 (use ".start" instead), this will be removed in later 0.X.0 versions`);const n=[];return Fi(e,((e,o)=>{if(wi.und(t))n.push(e.start());else{const i=r(t,e,o);i&&n.push(e.start(i))}})),n};t.current=e,t.add=function(t){e.includes(t)||e.push(t)},t.delete=function(t){const r=e.indexOf(t);~r&&e.splice(r,1)},t.pause=function(){return Fi(e,(e=>e.pause(...arguments))),this},t.resume=function(){return Fi(e,(e=>e.resume(...arguments))),this},t.set=function(t){Fi(e,((e,r)=>{const n=wi.fun(t)?t(r,e):t;n&&e.set(n)}))},t.start=function(t){const r=[];return Fi(e,((e,n)=>{if(wi.und(t))r.push(e.start());else{const o=this._getProps(t,e,n);o&&r.push(e.start(o))}})),r},t.stop=function(){return Fi(e,(e=>e.stop(...arguments))),this},t.update=function(t){return Fi(e,((e,r)=>e.update(this._getProps(t,e,r)))),this};const r=function(e,t,r){return wi.fun(e)?e(r,t):e};return t._getProps=r,t};function gl(e,t){const r=wi.fun(e),[[n],o]=function(e,t,r){const n=wi.fun(t)&&t;n&&!r&&(r=[]);const o=p((()=>n||3==arguments.length?hl():void 0),[]),s=i(0),a=Ns(),l=p((()=>({ctrls:[],queue:[],flush(e,t){const r=nl(e,t),n=s.current>0&&!l.queue.length&&!Object.keys(r).some((t=>!e.springs[t]));return n?tl(e,t):new Promise((n=>{ol(e,r),l.queue.push((()=>{n(tl(e,t))})),a()}))}})),[]),d=i([...l.ctrls]),c=[],u=Us(e)||0;function h(e,r){for(let o=e;o<r;o++){const e=d.current[o]||(d.current[o]=new el(null,l.flush)),r=n?n(o,e):t[o];r&&(c[o]=qa(r))}}p((()=>{Fi(d.current.slice(e,u),(e=>{!function(e,t){e.ref?.delete(e),t?.delete(e)}(e,o),e.stop(!0)})),d.current.length=e,h(u,e)}),[e]),p((()=>{h(0,Math.min(u,e))}),r);const g=d.current.map(((e,t)=>nl(e,c[t]))),m=f(cl),b=Us(m),v=m!==b&&function(e){for(const t in e)return!0;return!1}(m);Ws((()=>{s.current++,l.ctrls=d.current;const{queue:e}=l;e.length&&(l.queue=[],Fi(e,(e=>e()))),Fi(d.current,((e,t)=>{o?.add(e),v&&e.start({default:m});const r=c[t];r&&(function(e,t){t&&e.ref!==t&&(e.ref?.delete(e),t.add(e),e.ref=t)}(e,r.ref),e.ref?e.queue.push(r):e.start(r))}))})),Vs((()=>()=>{Fi(l.ctrls,(e=>e.stop(!0)))}));const y=g.map((e=>({...e})));return o?[y,o]:y}(1,r?e:[e],r?t||[]:t);return r||2==arguments.length?[n,o]:n}var ml=class extends Oa{constructor(e,t){super(),this.source=e,this.idle=!0,this._active=new Set,this.calc=ls(...t);const r=this._get(),n=oa(r);Zs(this,n.create(r))}advance(e){const t=this._get();$i(t,this.get())||(Gs(this).setValue(t),this._onChange(t,this.idle)),!this.idle&&pl(this._active)&&bl(this)}_get(){const e=wi.arr(this.source)?this.source.map(ys):Ei(ys(this.source));return this.calc(...e)}_start(){this.idle&&!pl(this._active)&&(this.idle=!1,Fi(Qs(this),(e=>{e.done=!1})),ti.skipAnimation?(ni.batchedUpdates((()=>this.advance())),bl(this)):ji.start(this))}_attach(){let e=1;Fi(Ei(this.source),(t=>{vs(t)&&Cs(t,this),Aa(t)&&(t.idle||this._active.add(t),e=Math.max(e,t.priority+1))})),this.priority=e,this._start()}_detach(){Fi(Ei(this.source),(e=>{vs(e)&&Es(e,this)})),this._active.clear(),bl(this)}eventObserved(e){"change"==e.type?e.idle?this.advance():(this._active.add(e.parent),this._start()):"idle"==e.type?this._active.delete(e.parent):"priority"==e.type&&(this.priority=Ei(this.source).reduce(((e,t)=>Math.max(e,(Aa(t)?t.priority:0)+1)),0))}};function fl(e){return!1!==e.idle}function pl(e){return!e.size||Array.from(e).every(fl)}function bl(e){e.idle||(e.idle=!0,Fi(Qs(e),(e=>{e.done=!0})),ws(e,{type:"idle",parent:e}))}ti.assign({createStringInterpolator:Os,to:(e,t)=>new ml(e,t)});var vl=/^--/;function yl(e,t){return null==t||"boolean"==typeof t||""===t?"":"number"!=typeof t||0===t||vl.test(e)||wl.hasOwnProperty(e)&&wl[e]?(""+t).trim():t+"px"}var xl={};var wl={animationIterationCount:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},$l=["Webkit","Ms","Moz","O"];wl=Object.keys(wl).reduce(((e,t)=>($l.forEach((r=>e[((e,t)=>e+t.charAt(0).toUpperCase()+t.substring(1))(r,t)]=e[t])),e)),wl);var Fl=/^(matrix|translate|scale|rotate|skew)/,Cl=/^(translate)/,El=/^(rotate|skew)/,Sl=(e,t)=>wi.num(e)&&0!==e?e+t:e,kl=(e,t)=>wi.arr(e)?e.every((e=>kl(e,t))):wi.num(e)?e===t:parseFloat(e)===t,Il=class extends ta{constructor({x:e,y:t,z:r,...n}){const o=[],i=[];(e||t||r)&&(o.push([e||0,t||0,r||0]),i.push((e=>[`translate3d(${e.map((e=>Sl(e,"px"))).join(",")})`,kl(e,0)]))),Ci(n,((e,t)=>{if("transform"===t)o.push([e||""]),i.push((e=>[e,""===e]));else if(Fl.test(t)){if(delete n[t],wi.und(e))return;const r=Cl.test(t)?"px":El.test(t)?"deg":"";o.push(Ei(e)),i.push("rotate3d"===t?([e,t,n,o])=>[`rotate3d(${e},${t},${n},${Sl(o,r)})`,kl(o,0)]:e=>[`${t}(${e.map((e=>Sl(e,r))).join(",")})`,kl(e,t.startsWith("scale")?1:0)])}})),o.length&&(n.transform=new Tl(o,i)),super(n)}},Tl=class extends $s{constructor(e,t){super(),this.inputs=e,this.transforms=t,this._value=null}get(){return this._value||(this._value=this._get())}_get(){let e="",t=!0;return Fi(this.inputs,((r,n)=>{const o=ys(r[0]),[i,s]=this.transforms[n](wi.arr(o)?o:r.map(ys));e+=" "+i,t=t&&s})),t?"none":e}observerAdded(e){1==e&&Fi(this.inputs,(e=>Fi(e,(e=>vs(e)&&Cs(e,this)))))}observerRemoved(e){0==e&&Fi(this.inputs,(e=>Fi(e,(e=>vs(e)&&Es(e,this)))))}eventObserved(e){"change"==e.type&&(this._value=null),ws(this,e)}};ti.assign({batchedUpdates:I,createStringInterpolator:Os,colors:{transparent:0,aliceblue:4042850303,antiquewhite:4209760255,aqua:16777215,aquamarine:2147472639,azure:4043309055,beige:4126530815,bisque:4293182719,black:255,blanchedalmond:4293643775,blue:65535,blueviolet:2318131967,brown:2771004159,burlywood:3736635391,burntsienna:3934150143,cadetblue:1604231423,chartreuse:2147418367,chocolate:3530104575,coral:4286533887,cornflowerblue:1687547391,cornsilk:4294499583,crimson:3692313855,cyan:16777215,darkblue:35839,darkcyan:9145343,darkgoldenrod:3095792639,darkgray:2846468607,darkgreen:6553855,darkgrey:2846468607,darkkhaki:3182914559,darkmagenta:2332068863,darkolivegreen:1433087999,darkorange:4287365375,darkorchid:2570243327,darkred:2332033279,darksalmon:3918953215,darkseagreen:2411499519,darkslateblue:1211993087,darkslategray:793726975,darkslategrey:793726975,darkturquoise:13554175,darkviolet:2483082239,deeppink:4279538687,deepskyblue:12582911,dimgray:1768516095,dimgrey:1768516095,dodgerblue:512819199,firebrick:2988581631,floralwhite:4294635775,forestgreen:579543807,fuchsia:4278255615,gainsboro:3705462015,ghostwhite:4177068031,gold:4292280575,goldenrod:3668254975,gray:2155905279,green:8388863,greenyellow:2919182335,grey:2155905279,honeydew:4043305215,hotpink:4285117695,indianred:3445382399,indigo:1258324735,ivory:4294963455,khaki:4041641215,lavender:3873897215,lavenderblush:4293981695,lawngreen:2096890111,lemonchiffon:4294626815,lightblue:2916673279,lightcoral:4034953471,lightcyan:3774873599,lightgoldenrodyellow:4210742015,lightgray:3553874943,lightgreen:2431553791,lightgrey:3553874943,lightpink:4290167295,lightsalmon:4288707327,lightseagreen:548580095,lightskyblue:2278488831,lightslategray:2005441023,lightslategrey:2005441023,lightsteelblue:2965692159,lightyellow:4294959359,lime:16711935,limegreen:852308735,linen:4210091775,magenta:4278255615,maroon:2147483903,mediumaquamarine:1724754687,mediumblue:52735,mediumorchid:3126187007,mediumpurple:2473647103,mediumseagreen:1018393087,mediumslateblue:2070474495,mediumspringgreen:16423679,mediumturquoise:1221709055,mediumvioletred:3340076543,midnightblue:421097727,mintcream:4127193855,mistyrose:4293190143,moccasin:4293178879,navajowhite:4292783615,navy:33023,oldlace:4260751103,olive:2155872511,olivedrab:1804477439,orange:4289003775,orangered:4282712319,orchid:3664828159,palegoldenrod:4008225535,palegreen:2566625535,paleturquoise:2951671551,palevioletred:3681588223,papayawhip:4293907967,peachpuff:4292524543,peru:3448061951,pink:4290825215,plum:3718307327,powderblue:2967529215,purple:2147516671,rebeccapurple:1714657791,red:4278190335,rosybrown:3163525119,royalblue:1097458175,saddlebrown:2336560127,salmon:4202722047,sandybrown:4104413439,seagreen:780883967,seashell:4294307583,sienna:2689740287,silver:3233857791,skyblue:2278484991,slateblue:1784335871,slategray:1887473919,slategrey:1887473919,snow:4294638335,springgreen:16744447,steelblue:1182971135,tan:3535047935,teal:8421631,thistle:3636451583,tomato:4284696575,turquoise:1088475391,violet:4001558271,wheat:4125012991,white:4294967295,whitesmoke:4126537215,yellow:4294902015,yellowgreen:2597139199}});var Dl=((e,{applyAnimatedValues:t=()=>!1,createAnimatedStyle:r=e=>new ta(e),getComponentProps:n=e=>e}={})=>{const o={applyAnimatedValues:t,createAnimatedStyle:r,getComponentProps:n},i=e=>{const t=la(e)||"Anonymous";return(e=wi.str(e)?i[e]||(i[e]=ia(e,o)):e[aa]||(e[aa]=ia(e,o))).displayName=`Animated(${t})`,e};return Ci(e,((t,r)=>{wi.arr(e)&&(r=la(t)),i[r]=i(t)})),{animated:i}})(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"],{applyAnimatedValues:function(e,t){if(!e.nodeType||!e.setAttribute)return!1;const r="filter"===e.nodeName||e.parentNode&&"filter"===e.parentNode.nodeName,{style:n,children:o,scrollTop:i,scrollLeft:s,viewBox:a,...l}=t,d=Object.values(l),c=Object.keys(l).map((t=>r||e.hasAttribute(t)?t:xl[t]||(xl[t]=t.replace(/([A-Z])/g,(e=>"-"+e.toLowerCase())))));void 0!==o&&(e.textContent=o);for(const t in n)if(n.hasOwnProperty(t)){const r=yl(t,n[t]);vl.test(t)?e.style.setProperty(t,r):e.style[t]=r}c.forEach(((t,r)=>{e.setAttribute(t,d[r])})),void 0!==i&&(e.scrollTop=i),void 0!==s&&(e.scrollLeft=s),void 0!==a&&e.setAttribute("viewBox",a)},createAnimatedStyle:e=>new Il(e),getComponentProps:({scrollTop:e,scrollLeft:t,...r})=>r}),Bl=Dl.animated;const zl=x.div`
    display: inline-block;
    position: relative;
    width: ${({$size:e})=>e?`${e}px`:"1em"};
    height: ${({$size:e})=>e?`${e}px`:"1em"};
    color: ${e=>e.$color||"currentColor"};
`,Ml=$`
	0% {
	  transform: rotate(0deg);
	}
	100% {
	  transform: rotate(360deg);
	}
`,Al=x.div`
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
    animation: ${Ml} 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
`,_l=x(Al)`
    animation-delay: -0.45s;
`,Ol=x(Al)`
    animation-delay: -0.3s;
`,Rl=x(Al)`
    animation-delay: -0.15s;
`,Hl=({color:r,className:n,size:o})=>e(zl,{className:n,$size:o,$color:r,"data-testid":"component-loading-spinner",children:[t(Al,{id:"inner1"}),t(_l,{id:"inner2"}),t(Ol,{id:"inner3"}),t(Rl,{id:"inner4"})]}),jl={collections:{default:{Button:{"button-radius":xn.sm,"button-default-colour-bg":Zr["bg-primary"],"button-default-colour-bg-hover":Zr["bg-primary-hover"],"button-default-colour-text":Zr["text-inverse"],"button-secondary-colour-border":Zr["border-primary"],"button-secondary-colour-text":Zr["text-primary"],"button-light-colour-text":Zr["text-primary"],"button-link-colour-text":Zr["text-primary"]}},pa:{Button:{"button-radius":xn.full,"button-default-colour-bg":Zr["bg-primary"],"button-default-colour-bg-hover":Zr["bg-primary-hover"],"button-default-colour-text":Zr["text-inverse"],"button-secondary-colour-border":Zr["border-primary"],"button-secondary-colour-text":Zr["text-primary"],"button-light-colour-text":Zr["text-primary"],"button-link-colour-text":Zr["text-primary"]}}},defaultValue:"default"},Ll=(e,t)=>r=>{var n,o;const i=r.theme,s=Hr(jl,null==i?void 0:i.componentScheme);return Pl((null===(o=null===(n=null==i?void 0:i.componentOverrides)||void 0===n?void 0:n[e])||void 0===o?void 0:o[t])||s[e][t],r)},Pl=(e,t)=>{switch(typeof e){case"function":return e(t);case"number":return e+"px";case"string":return e}},Wl=Ll("Button","button-radius"),Nl=Ll("Button","button-default-colour-bg"),Vl=Ll("Button","button-default-colour-bg-hover"),Yl=Ll("Button","button-default-colour-text"),Ul=Ll("Button","button-secondary-colour-border"),ql=Ll("Button","button-secondary-colour-text"),Gl=Ll("Button","button-light-colour-text"),Zl=Ll("Button","button-link-colour-text"),Ql=x.button`
    padding: ${In["spacing-8"]} ${In["spacing-16"]};
    min-width: 4rem;
    border: ${kn["width-010"]} ${kn.solid} transparent;
    transition: all ${Sn["duration-250"]} ${Sn["ease-default"]};
    border-radius: ${Wl};
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;

    // -----------------------------------------------------------------------------
    // BUTTON STYLE + TEXT COLOR
    // -----------------------------------------------------------------------------
    ${e=>{switch(e.$buttonStyle){case"secondary":return w`
                    background-color: ${Cn.Primitive.white};
                    border-color: ${e.$buttonIsDanger?Cn["border-error-strong"]:Ul};

                    color: ${e.$buttonIsDanger?Cn["text-error"]:ql};

                    &:hover,
                    &:active {
                        background-color: ${Cn["bg-hover-neutral"]};
                    }
                `;case"light":return w`
                    background-color: ${Cn.bg};
                    border-color: ${Cn.border};

                    color: ${e.$buttonIsDanger?Cn["text-error"]:Gl};

                    &:hover,
                    &:active {
                        background-color: ${Cn["bg-hover-neutral"]};
                    }
                `;case"link":return w`
                    background-color: transparent;

                    color: ${e.$buttonIsDanger?Cn["text-error"]:Zl};
                    &:hover,
                    &:active {
                        background-color: ${Cn["bg-hover-neutral"]};
                    }
                `;case"disabled":return w`
                    background-color: ${Cn["bg-disabled"]};

                    cursor: not-allowed;

                    &:hover {
                        box-shadow: none;
                    }

                    color: ${Cn["text-disabled"]};
                `;default:return w`
                    background-color: ${e.$buttonIsDanger?Cn["bg-error-strong"]:Nl};};

                    ${Bn.MaxWidth.sm} {
                        width: 100%;
                    }

                    color: ${Yl}};

                    &:hover,
                    &:active {
                        background-color: ${e.$buttonIsDanger?Cn["bg-error-strong-hover"]:Vl}
                        };
                    }
                `}}}

    // -----------------------------------------------------------------------------
	// BUTTON SIZE + TEXT SIZE
	// -----------------------------------------------------------------------------
	${e=>{switch(e.$buttonSizeStyle){case"small":return w`
                    height: 2.5rem;
                    ${En["body-md-semibold"]}

                    ${Bn.MaxWidth.xxs} {
                        height: auto;
                    }
                `;case"large":return w`
                    height: 4rem;
                    ${En["heading-md-semibold"]}

                    ${Bn.MaxWidth.xxs} {
                        height: auto;
                    }
                `;default:return w`
                    height: 3rem;
                    ${En["heading-xs-semibold"]}

                    ${Bn.MaxWidth.xxs} {
                        height: auto;
                    }
                `}}}
`,Xl=x(Hl)`
    margin-right: 0.5rem;
`,Kl=(r,n)=>{const{children:o,disabled:i=!1,loading:s=!1,styleType:a="default",danger:l=!1}=r,d=oe(r,["children","disabled","loading","styleType","danger"]),c={$buttonStyle:i?"disabled":a,$buttonSizeStyle:"default",$buttonIsDanger:l};return e(Ql,Object.assign({ref:n,"data-testid":d["data-testid"]||"button",disabled:i},c,d,{children:[s&&t(Xl,{}),t("span",{children:o})]}))};Kl.displayName="Button.Default";const Jl=(r,n)=>{const{children:o,disabled:i=!1,loading:s=!1,styleType:a="default",danger:l=!1}=r,d=oe(r,["children","disabled","loading","styleType","danger"]),c={$buttonStyle:i?"disabled":a,$buttonSizeStyle:"small",$buttonIsDanger:l};return e(Ql,Object.assign({ref:n,"data-testid":d["data-testid"]||"button",disabled:i},c,d,{children:[s&&t(Xl,{}),t("span",{children:o})]}))};Jl.displayName="Button.Small";const ed=(r,n)=>{const{children:o,disabled:i=!1,loading:s=!1,styleType:a="default",danger:l=!1}=r,d=oe(r,["children","disabled","loading","styleType","danger"]),c={$buttonStyle:i?"disabled":a,$buttonSizeStyle:"large",$buttonIsDanger:l};return e(Ql,Object.assign({ref:n,"data-testid":d["data-testid"]||"button",disabled:i},c,d,{children:[s&&t(Xl,{}),t("span",{children:o})]}))};ed.displayName="Button.Large";const td={Default:o.forwardRef(Kl),Small:o.forwardRef(Jl),Large:o.forwardRef(ed)};var rd={exports:{}};rd.exports=function(){var e={LTS:"h:mm:ss A",LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D, YYYY",LLL:"MMMM D, YYYY h:mm A",LLLL:"dddd, MMMM D, YYYY h:mm A"},t=/(\[[^[]*\])|([-_:/.,()\s]+)|(A|a|YYYY|YY?|MM?M?M?|Do|DD?|hh?|HH?|mm?|ss?|S{1,3}|z|ZZ?)/g,r=/\d\d/,n=/\d\d?/,o=/\d*[^-_:/,()\s\d]+/,i={},s=function(e){return(e=+e)+(e>68?1900:2e3)},a=function(e){return function(t){this[e]=+t}},l=[/[+-]\d\d:?(\d\d)?|Z/,function(e){(this.zone||(this.zone={})).offset=function(e){if(!e)return 0;if("Z"===e)return 0;var t=e.match(/([+-]|\d\d)/g),r=60*t[1]+(+t[2]||0);return 0===r?0:"+"===t[0]?-r:r}(e)}],d=function(e){var t=i[e];return t&&(t.indexOf?t:t.s.concat(t.f))},c=function(e,t){var r,n=i.meridiem;if(n){for(var o=1;o<=24;o+=1)if(e.indexOf(n(o,0,t))>-1){r=o>12;break}}else r=e===(t?"pm":"PM");return r},u={A:[o,function(e){this.afternoon=c(e,!1)}],a:[o,function(e){this.afternoon=c(e,!0)}],S:[/\d/,function(e){this.milliseconds=100*+e}],SS:[r,function(e){this.milliseconds=10*+e}],SSS:[/\d{3}/,function(e){this.milliseconds=+e}],s:[n,a("seconds")],ss:[n,a("seconds")],m:[n,a("minutes")],mm:[n,a("minutes")],H:[n,a("hours")],h:[n,a("hours")],HH:[n,a("hours")],hh:[n,a("hours")],D:[n,a("day")],DD:[r,a("day")],Do:[o,function(e){var t=i.ordinal,r=e.match(/\d+/);if(this.day=r[0],t)for(var n=1;n<=31;n+=1)t(n).replace(/\[|\]/g,"")===e&&(this.day=n)}],M:[n,a("month")],MM:[r,a("month")],MMM:[o,function(e){var t=d("months"),r=(d("monthsShort")||t.map((function(e){return e.slice(0,3)}))).indexOf(e)+1;if(r<1)throw new Error;this.month=r%12||r}],MMMM:[o,function(e){var t=d("months").indexOf(e)+1;if(t<1)throw new Error;this.month=t%12||t}],Y:[/[+-]?\d+/,a("year")],YY:[r,function(e){this.year=s(e)}],YYYY:[/\d{4}/,a("year")],Z:l,ZZ:l};function h(r){var n,o;n=r,o=i&&i.formats;for(var s=(r=n.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g,(function(t,r,n){var i=n&&n.toUpperCase();return r||o[n]||e[n]||o[i].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g,(function(e,t,r){return t||r.slice(1)}))}))).match(t),a=s.length,l=0;l<a;l+=1){var d=s[l],c=u[d],h=c&&c[0],g=c&&c[1];s[l]=g?{regex:h,parser:g}:d.replace(/^\[|\]$/g,"")}return function(e){for(var t={},r=0,n=0;r<a;r+=1){var o=s[r];if("string"==typeof o)n+=o.length;else{var i=o.regex,l=o.parser,d=e.slice(n),c=i.exec(d)[0];l.call(t,c),e=e.replace(c,"")}}return function(e){var t=e.afternoon;if(void 0!==t){var r=e.hours;t?r<12&&(e.hours+=12):12===r&&(e.hours=0),delete e.afternoon}}(t),t}}return function(e,t,r){r.p.customParseFormat=!0,e&&e.parseTwoDigitYear&&(s=e.parseTwoDigitYear);var n=t.prototype,o=n.parse;n.parse=function(e){var t=e.date,n=e.utc,s=e.args;this.$u=n;var a=s[1];if("string"==typeof a){var l=!0===s[2],d=!0===s[3],c=l||d,u=s[2];d&&(u=s[2]),i=this.$locale(),!l&&u&&(i=r.Ls[u]),this.$d=function(e,t,r){try{if(["x","X"].indexOf(t)>-1)return new Date(("X"===t?1e3:1)*e);var n=h(t)(e),o=n.year,i=n.month,s=n.day,a=n.hours,l=n.minutes,d=n.seconds,c=n.milliseconds,u=n.zone,g=new Date,m=s||(o||i?1:g.getDate()),f=o||g.getFullYear(),p=0;o&&!i||(p=i>0?i-1:g.getMonth());var b=a||0,v=l||0,y=d||0,x=c||0;return u?new Date(Date.UTC(f,p,m,b,v,y,x+60*u.offset*1e3)):r?new Date(Date.UTC(f,p,m,b,v,y,x)):new Date(f,p,m,b,v,y,x)}catch(e){return new Date("")}}(t,a,n),this.init(),u&&!0!==u&&(this.$L=this.locale(u).$L),c&&t!=this.format(a)&&(this.$d=new Date("")),i={}}else if(a instanceof Array)for(var g=a.length,m=1;m<=g;m+=1){s[1]=a[m-1];var f=r.apply(this,s);if(f.isValid()){this.$d=f.$d,this.$L=f.$L,this.init();break}m===g&&(this.$d=new Date(""))}else o.call(this,e)}}}();var nd=ae(rd.exports),od={exports:{}};od.exports=function(e,t,r){t.prototype.isBetween=function(e,t,n,o){var i=r(e),s=r(t),a="("===(o=o||"()")[0],l=")"===o[1];return(a?this.isAfter(i,n):!this.isBefore(i,n))&&(l?this.isBefore(s,n):!this.isAfter(s,n))||(a?this.isBefore(i,n):!this.isAfter(i,n))&&(l?this.isAfter(s,n):!this.isBefore(s,n))}};var id=ae(od.exports),sd={exports:{}};sd.exports=function(e,t){t.prototype.isSameOrAfter=function(e,t){return this.isSame(e,t)||this.isAfter(e,t)}};var ad=ae(sd.exports),ld={exports:{}};ld.exports=function(e,t){t.prototype.isSameOrBefore=function(e,t){return this.isSame(e,t)||this.isBefore(e,t)}};var dd,cd,ud,hd=ae(ld.exports),gd={exports:{}},md=ae(gd.exports=(dd={year:0,month:1,day:2,hour:3,minute:4,second:5},cd={},function(e,t,r){var n,o=function(e,t,r){void 0===r&&(r={});var n=new Date(e),o=function(e,t){void 0===t&&(t={});var r=t.timeZoneName||"short",n=e+"|"+r,o=cd[n];return o||(o=new Intl.DateTimeFormat("en-US",{hour12:!1,timeZone:e,year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit",timeZoneName:r}),cd[n]=o),o}(t,r);return o.formatToParts(n)},i=function(e,t){for(var n=o(e,t),i=[],s=0;s<n.length;s+=1){var a=n[s],l=a.type,d=a.value,c=dd[l];c>=0&&(i[c]=parseInt(d,10))}var u=i[3],h=24===u?0:u,g=i[0]+"-"+i[1]+"-"+i[2]+" "+h+":"+i[4]+":"+i[5]+":000",m=+e;return(r.utc(g).valueOf()-(m-=m%1e3))/6e4},s=t.prototype;s.tz=function(e,t){void 0===e&&(e=n);var o=this.utcOffset(),i=this.toDate(),s=i.toLocaleString("en-US",{timeZone:e}),a=Math.round((i-new Date(s))/1e3/60),l=r(s,{locale:this.$L}).$set("millisecond",this.$ms).utcOffset(15*-Math.round(i.getTimezoneOffset()/15)-a,!0);if(t){var d=l.utcOffset();l=l.add(o-d,"minute")}return l.$x.$timezone=e,l},s.offsetName=function(e){var t=this.$x.$timezone||r.tz.guess(),n=o(this.valueOf(),t,{timeZoneName:e}).find((function(e){return"timezonename"===e.type.toLowerCase()}));return n&&n.value};var a=s.startOf;s.startOf=function(e,t){if(!this.$x||!this.$x.$timezone)return a.call(this,e,t);var n=r(this.format("YYYY-MM-DD HH:mm:ss:SSS"),{locale:this.$L});return a.call(n,e,t).tz(this.$x.$timezone,!0)},r.tz=function(e,t,o){var s=o&&t,a=o||t||n,l=i(+r(),a);if("string"!=typeof e)return r(e).tz(a);var d=function(e,t,r){var n=e-60*t*1e3,o=i(n,r);if(t===o)return[n,t];var s=i(n-=60*(o-t)*1e3,r);return o===s?[n,o]:[e-60*Math.min(o,s)*1e3,Math.max(o,s)]}(r.utc(e,s).valueOf(),l,a),c=d[0],u=d[1],h=r(c).utcOffset(u);return h.$x.$timezone=a,h},r.tz.guess=function(){return Intl.DateTimeFormat().resolvedOptions().timeZone},r.tz.setDefault=function(e){n=e}}));Jn.extend(id),Jn.extend(hd),Jn.extend(ad),Jn.extend(nd),Jn.extend(md),function(e){e.generateDays=e=>{const t=e.startOf("month"),r=Jn(t).startOf("week");return fd(r).map((e=>pd(e)))},e.generateDaysForCurrentWeek=e=>{const t=e.startOf("week");return pd(t)},e.generateMonths=e=>{const t=[];for(let r=0;r<12;r++){const n=e.month(r);t.push(Jn(n))}return t},e.generateDecadeOfYears=e=>{const t=e.year(),r=10*Math.floor(t/10),n=e.year(r),o=[n.subtract(1,"year"),n];for(let e=1;e<11;e++)o.push(n.add(e,"year"));return o},e.getStartEndDecade=e=>{const t=10*Math.floor(+e.format("YYYY")/10);return{beginDecade:t,endDecade:+Jn(`${t+9}-01-01`).format("YYYY")}},e.convertTo12HourFormat=e=>{const t=Jn(e,"HH:mm");return t.isValid()?t.format("h:mm a"):""},e.isWithinRange=(e,t,r,n="day")=>!t&&!r||(t&&r?e.isBetween(t,r,n,"[]"):t?e.isSameOrAfter(t,n):e.isSameOrBefore(r,n)),e.isPreviousMonthWithinRange=(t,r)=>e.isWithinRange(t.subtract(1,"month"),r,void 0,"month"),e.isPreviousYearWithinRange=(t,r)=>e.isWithinRange(t.subtract(1,"year"),r,void 0,"year"),e.isPreviousDecadeWithinRange=(t,r)=>{const{beginDecade:n}=e.getStartEndDecade(t);return e.isWithinRange(t.year(n).subtract(1,"year"),r,void 0,"year")},e.isNextMonthWithinRange=(t,r)=>e.isWithinRange(t.add(1,"month"),void 0,r,"month"),e.isNextYearWithinRange=(t,r)=>e.isWithinRange(t.add(1,"year"),void 0,r,"year"),e.isNextDecadeWithinRange=(t,r)=>{const{endDecade:n}=e.getStartEndDecade(t);return e.isWithinRange(t.year(n).add(1,"year"),void 0,r,"year")},e.getWeekStartEnd=e=>({start:e.startOf("week").format("YYYY-MM-DD"),end:e.endOf("week").format("YYYY-MM-DD")}),e.getFixedRangeStartEnd=(e,t)=>({start:e.format("YYYY-MM-DD"),end:e.add(t-1,"day").format("YYYY-MM-DD")}),e.isDisabledDay=(t,r,n,o)=>{const i=e.isWithinRange(t,n?Jn(n):void 0,o?Jn(o):void 0),s=r&&r.includes(t.format("YYYY-MM-DD"));return!i||!!s}}(ud||(ud={}));const fd=e=>{const t=[e];for(let r=1;r<6;r++){const n=e.add(r,"week");t.push(n)}return t},pd=e=>{const t=[];for(let r=0;r<7;r++){const n=e.add(r,"day");t.push(n)}return t},bd=[1,3,5,7,8,10,12],vd=[4,6,9,11];var yd,xd,wd;function $d(e){const t=i(null);return h((()=>{t.current=e}),[e]),m(((...e)=>{var r;return null===(r=t.current)||void 0===r?void 0:r.call(t,...e)}),[])}!function(e){e.clampDay=(t,r,n)=>{const o=parseInt(t),i=parseInt(r),s=parseInt(n);return 0==o?"1":bd.includes(i)?Math.min(o,31).toString():vd.includes(i)?Math.min(o,30).toString():2===i?e.isLeapYear(s)?Math.min(o,29).toString():Math.min(o,28).toString():t},e.clampMonth=e=>{const t=parseInt(e);return 0==t?"1":t>12?"12":e},e.isLeapYear=e=>e%4==0&&e%100!=0||e%400==0,e.getTimeDiffInMinutes=(e,t,r="HH:mm")=>{const n=Jn(e,r);return Jn(t,r).diff(n,"minute")},e.toDayjs=e=>e?Jn(e):Jn(),e.addMinutesToTime=(e,t,r="HH:mm")=>Jn(e,r).add(t,"minutes").format(r),e.isSame=(e,t,r="day")=>Jn(e).isSame(Jn(t),r)}(yd||(yd={})),function(e){e.isDateDisabled=(e,t)=>{const{disabledDates:r,minDate:n,maxDate:o}=t;return!!(e&&r&&r.length&&r.includes(e))||(!(!n||!Jn(e).isBefore(n,"day"))||!(!o||!Jn(e).isAfter(o,"day")))},e.sanitizeInput=e=>{if(e){if(Jn(e).isValid())return e}return""}}(xd||(xd={})),function(e){e.generate=()=>Math.random().toString(36).substring(2,9)}(wd||(wd={}));const Fd=e=>{const t=(e=>{const t=i(e),r=i();return s((()=>{r.current=t.current,t.current=e}),[e]),r.current})(e);return t!==e},Cd=e=>{const{textSize:t}=e||{};return w`
        // Text styling
        ${t&&En[`${t}-regular`]}

        strong {
            font-weight: ${En.Spec["weight-semibold"]};
            ${t&&En[`${t}-semibold`]};
        }

        p {
            margin: 0;
        }

        // Link styling
        a {
            font-weight: ${En.Spec["weight-semibold"]};
            ${t&&En[`${t}-semibold`]}
            color: ${Cn.hyperlink};
            text-decoration: none;

            svg {
                color: ${Cn["icon-primary"]};
                height: 1lh;
                width: 1em;
                margin-left: 0.4rem;
                vertical-align: middle;
            }

            :hover,
            :active,
            :visited,
            :focus {
                color: ${Cn["hyperlink-hover"]};

                svg {
                    color: ${Cn["icon-hover"]};
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
    `},Ed=e=>w`
    display: -webkit-box;
    -webkit-line-clamp: ${e};
    -webkit-box-orient: vertical;
    overflow: hidden;
`,Sd=(e,t,r=!1)=>w`
        ${En[`${e}-${t}`]}
        ${r?"margin-bottom: 1.05em;":"margin-bottom: 0;"}
    `,kd=e=>{if(e)return w`
            ${Ed(e)}
        `},Id=(e,t)=>w`
    ${Sd(e,t.weight||"regular",t.paragraph)}
    ${((e=!1,t=!1,r)=>t?w`
            display: block;
            ${kd(r)}
        `:e?w`
            display: inline;
        `:w`
            display: block;
            ${kd(r)}
        `)(t.inline,t.paragraph,t.maxLines)}
    color: ${Cn.text};
`;var Td;!function(r){const n=(e,t,r)=>{const n=x(e).attrs((({inline:e})=>({as:e?"span":void 0})))`
            ${e=>Id(t,e)}
        `;return n.displayName=`Typography.${r}`,n};r.HeadingXXL=n("h1","heading-xxl","HeadingXXL"),r.HeadingXL=n("h2","heading-xl","HeadingXL"),r.HeadingLG=n("h3","heading-lg","HeadingLG"),r.HeadingMD=n("h4","heading-md","HeadingMD"),r.HeadingSM=n("h5","heading-sm","HeadingSM"),r.HeadingXS=n("h6","heading-xs","HeadingXS");const o=(e,t)=>{const r=x.p.attrs((({inline:e})=>({as:e?"span":void 0})))`
            ${t=>Id(e,t)}
        `;return r.displayName=`Typography.${t}`,r};r.BodyBL=o("body-baseline","BodyBL"),r.BodyMD=o("body-md","BodyMD"),r.BodySM=o("body-sm","BodySM"),r.BodyXS=o("body-xs","BodyXS");const i=(r,n)=>{const o=x.a`
            ${e=>w`
                ${Sd(r,e.weight||"regular")}
                color: ${Cn.hyperlink};
                text-decoration: none;

                :hover,
                :active,
                :focus {
                    color: ${Cn["text-hover"]};
                }
            `}
        `,i=r=>{var{external:n=!1,children:i}=r,s=oe(r,["external","children"]);return e(o,Object.assign({},s,{children:[i,n&&t(Dd,{})]}))};return i.displayName=`Typography.${n}`,i};r.LinkBL=i("body-baseline","LinkBL"),r.LinkMD=i("body-md","LinkMD"),r.LinkSM=i("body-sm","LinkSM"),r.LinkXS=i("body-xs","LinkXS")}(Td||(Td={}));const Dd=x(A)`
    height: 1lh;
    width: 1em;
    margin-left: 0.4em;
    vertical-align: middle;
`,Bd=x.div`
    padding: ${In["spacing-8"]} ${In["spacing-16"]};
    display: flex;

    ${e=>{let t,r;switch(e.$type){case"error":t=Cn["bg-error"](e),r=Cn["border-error"](e);break;case"success":t=Cn["bg-success"](e),r=Cn["border-success"](e);break;case"warning":default:t=Cn["bg-warning"](e),r=Cn["border-warning"](e);break;case"info":t=Cn["bg-info"](e),r=Cn["border-info"](e);break;case"description":t=Cn["bg-strong"](e),r=Cn["border-strong"](e)}return w`
            background: ${t};
            border-left: ${kn["width-020"]} ${kn.solid}
                ${r};
        `}}

    color: ${Cn.text};
    ${e=>"small"===e.$sizeType?Cd({textSize:"body-sm"}):Cd({textSize:"body-md"})}
`,zd=x.div`
    display: flex;
    align-items: center;
    height: 1lh;
    margin-right: ${In["spacing-8"]};

    ${e=>{let t;const r="small"===e.$sizeType?"1.25rem":"1.5rem";switch(e.$type){case"error":t=Cn["icon-error"](e);break;case"success":t=Cn["icon-success"](e);break;case"warning":default:t=Cn["icon-warning"](e);break;case"info":t=Cn["icon-info"](e);break;case"description":t=Cn["icon-subtle"](e)}return w`
            svg {
                color: ${t};
                width: ${r};
                height: ${r};
            }
        `}}
`,Md=x(Td.LinkSM)`
    ${e=>"small"===e.$sizeType?w`
                ${En["body-sm-semibold"]}
                margin-top: ${In["spacing-4"]};
            `:w`
                ${En["body-md-semibold"]}
                margin-top: ${In["spacing-8"]};
            `}
    display: flex;
    align-items: center;
    align-self: flex-start;

    svg {
        height: 1rem;
        width: 1rem;
        margin-left: ${In["spacing-4"]};
    }
`,Ad=x.div`
    display: flex;
    flex-direction: column;
    flex: 1;
    overflow-wrap: anywhere;
`,_d=x.div`
    display: flex;
    flex-direction: column;
    flex: 1;
    ${e=>{if(e.$showMore&&e.$hasActionLink)return w`
                margin-bottom: ${In["spacing-8"]};
            `}}
    ${e=>{const t="linear-gradient(to bottom, black 50%, transparent 100%)";if(!e.$showMore&&e.$maxCollapsedHeight)return`\n                max-height: ${e.$maxCollapsedHeight}px;\n\t\t\t\toverflow: hidden;\n                -webkit-mask-image: ${t};\n                mask-image: ${t};\n\t\t\t`}}
`,Od=x.button`
    ${e=>"small"===e.$sizeType?w`
                ${En["body-sm-semibold"]}
            `:w`
                ${En["body-md-semibold"]}
            `}

    display: flex;
    align-items: center;
    align-self: flex-start;
    gap: ${In["spacing-4"]};
    margin-top: ${In["spacing-8"]};

    cursor: pointer;
    user-select: none;
    border: none;
    background: transparent;

    color: ${Cn["text-primary"]};
`,Rd=x(y)`
    transform: rotate(${e=>e.$expanded?180:0}deg);
    transition: transform ${Sn["duration-350"]} ${Sn["ease-standard"]};
`,Hd=x.div`
    height: 1.625rem;
    width: 1.625rem;
    margin-right: 0.5rem;
    flex-shrink: 0;

    svg {
        height: 100%;
        width: 100%;
    }

    ${e=>e.$disabled?e.$active?w`
                    color: ${Cn["icon-selected-disabled"]};
                `:w`
                    color: ${Cn["icon-disabled-subtle"]};
                `:e.$active?w`
                color: ${Cn["icon-selected"]};
            `:w`
            color: ${Cn["icon-subtle"]};
        `};
`,jd=w`
    margin-bottom: ${e=>e.$bottomMargin||0}rem;

    // Counter matters
    counter-reset: list;

    li {
        font-weight: ${En.Spec["weight-regular"]};
        ${e=>e.$size&&En[`${e.$size}-regular`]}
        color: ${Cn.text};
    }

    // nested lists styling
    ol,
    ul {
        margin-top: 0.5rem;
        margin-bottom: 0.5rem;
    }
`,Ld=x.ol`
    ${jd}

    margin-left: 3rem;

    ${Bn.MaxWidth.lg} {
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
`,Pd=x.ul`
    ${jd}

    margin-left: 2.5rem;
    list-style-type: ${e=>e.$bulletType||"disc"};
`,Wd=e=>{var{size:r,bulletType:n,bottomMargin:o,children:i}=e,s=oe(e,["size","bulletType","bottomMargin","children"]);return t(Pd,Object.assign({$size:r,$bulletType:n,$bottomMargin:o},s,{children:i}))};Wd.displayName="TextList.Ul";const Nd=e=>{var{size:r,counterType:n,counterSeparator:o,bottomMargin:i,children:s}=e,a=oe(e,["size","counterType","counterSeparator","bottomMargin","children"]);return t(Ld,Object.assign({$size:r,$counterType:n,$counterSeparator:o,$bottomMargin:i},a,{children:s}))};Nd.displayName="TextList.Ol";const Vd=Wd,Yd=x.div`
    position: relative;
    display: inline-flex;
    min-width: 10.375rem;
    border-radius: 4px;
    border-width: 1px;
    border-style: solid;
    overflow: hidden;
    flex-direction: column;
    height: fit-content;
    background: ${Cn.bg};

    ${e=>{if(!e.$indicator)return w`
                justify-content: center;
            `}}

    // Container min width to fit content
    ${e=>{if(e.$useContentWidth)return w`
                min-width: unset;
            `}}

    // apply container border and header background color
    ${e=>"no-border"===e.$styleType?e.$error?e.$disabled?w`
                            border-color: ${Cn["border-error"]};
                        `:w`
                            border-color: ${Cn["border-error"]};

                            &:has(${Qd}:hover) {
                                background: ${Cn["bg-hover-subtle"]};
                            }
                        `:e.$disabled?e.$selected?w`
                            border: none;
                            background: ${Cn["bg-selected-disabled"]};
                        `:w`
                            border: none;
                        `:e.$selected?w`
                        border: none;
                        background: ${Cn["bg-selected"]};

                        &:has(${Qd}:hover) {
                            background: ${Cn["bg-selected-hover"]};

                            & ${qd} {
                                color: ${Cn["text-selected-hover"]};
                            }

                            & ${ic} {
                                color: ${Cn["icon-selected-hover"]};
                            }
                        }
                    `:w`
                    border: none;

                    &:has(${Qd}:hover) {
                        background: ${Cn["bg-hover-subtle"]};
                    }
                `:e.$error?e.$disabled?w`
                            border-color: ${Cn["border-error"]};
                        `:w`
                            border-color: ${Cn["border-error"]};

                            &:has(${Qd}:hover) {
                                background: ${Cn["bg-hover-subtle"]};
                            }
                        `:e.$disabled?e.$selected?w`
                            border-color: ${Cn["border-selected-disabled"]};
                            background: ${Cn["bg-selected-disabled"]};
                        `:w`
                            border-color: ${Cn["border-disabled"]};
                            background: ${Cn["bg-disabled"]};
                        `:e.$selected?w`
                        border-color: ${Cn["border-selected"]};
                        background: ${Cn["bg-selected"]};

                        &:has(${Qd}:hover) {
                            background: ${Cn["bg-selected-hover"]};

                            & ${qd} {
                                color: ${Cn["text-selected-hover"]};
                            }

                            & ${ic} {
                                color: ${Cn["icon-selected-hover"]};
                            }
                        }
                    `:w`
                    border-color: ${Cn.border};

                    &:has(${Qd}:hover) {
                        background: ${Cn["bg-hover-subtle"]};
                    }
                `}
`,Ud=x.input`
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
`,qd=x.div`
    display: flex;
    flex-direction: column;
    overflow-wrap: anywhere;
    width: 100%;
    overflow: hidden;

    // apply header container text color
    ${e=>e.$disabled?e.$selected?w`
                    color: ${Cn["text-selected-disabled"]};
                `:w`
                    color: ${Cn["text-disabled"]};
                `:e.$selected?w`
                color: ${Cn["text-selected"]};
            `:w`
            color: ${Cn.text};
        `}
`,Gd=x.label`
    ${En["body-baseline-regular"]}
    overflow: hidden;
    display: -webkit-box;
    text-overflow: ellipsis;
    -webkit-box-orient: vertical;
    overflow-wrap: break-word;
    -webkit-line-clamp: ${e=>{var t,r;return null!==(r=null===(t=e.$maxLines)||void 0===t?void 0:t.desktop)&&void 0!==r?r:"none"}};
    ${Bn.MaxWidth.lg} {
        -webkit-line-clamp: ${e=>{var t,r;return null!==(r=null===(t=e.$maxLines)||void 0===t?void 0:t.tablet)&&void 0!==r?r:"none"}};
    }
    ${Bn.MaxWidth.sm} {
        -webkit-line-clamp: ${e=>{var t,r;return null!==(r=null===(t=e.$maxLines)||void 0===t?void 0:t.mobile)&&void 0!==r?r:"none"}};
    }
`,Zd=x.div`
    ${En["body-md-regular"]}
    margin-top: 0.5rem;

    z-index: 1; // forces sublabel to render above the input
    pointer-events: none; // to allow click events to be passed to the input

    strong,
    b {
        ${En["body-md-semibold"]}
    }
`,Qd=x.div`
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
`,Xd=x.div`
    display: flex;
    height: 100%;
    width: 100%;
    position: relative;
    padding: ${e=>e.$addPadding?"0.6875rem 0rem 0.6875rem 1rem":"0.6875rem 1rem"};
`,Kd=x.button`
    color: ${e=>e.$disabled?Cn["text-disabled"]:Cn["text-error"]};
    white-space: nowrap;
    ${En["body-md-semibold"]}
    height: fit-content;
    padding: 0.6875rem 1rem 0.6875rem 0.5rem;
    border: none;
    background: none;

    cursor: ${e=>e.$disabled?"not-allowed":"pointer"};
`,Jd=x.button`
    color: ${e=>e.disabled?Cn["text-disabled"]:Cn["text-primary"]};
    ${En["body-baseline-semibold"]}
    display: flex;
    align-items: center;
    justify-content: flex-end;
    border: none;
    background-color: ${Cn.bg};
    cursor: ${e=>e.disabled?"not-allowed":"pointer"};
    padding: 0 1rem 0.6875rem 1rem;
    padding-top: ${e=>e.$paddingTopRequired?"0.6875rem":"0rem"};
    width: 100%;

    svg {
        width: 1em;
        height: 1em;
        margin-left: 0.5rem;
    }
`,ec=x.div`
    width: 100%;
    color: ${e=>e.$disabled?Cn["text-disabled"]:Cn["text-error"]};
    border: none;
    background: ${Cn.bg};
    cursor: ${e=>e.$disabled?"not-allowed":"pointer"};
    padding: 0.6875rem 1rem 0.5rem 1rem;
`,tc=x((r=>{var{type:n,className:o,children:i,actionLink:l,actionLinkIcon:d,sizeType:c="default",showIcon:u=!1,customIcon:h,maxCollapsedHeight:g}=r,m=oe(r,["type","className","children","actionLink","actionLinkIcon","sizeType","showIcon","customIcon","maxCollapsedHeight"]);const[f,p]=a(!1),[b,v]=a(!1),{height:y,ref:x}=Jo();s((()=>{w()}),[g,y]);const w=()=>{p(!g),v($())},$=()=>!(!y||!g)&&y>g;return e(Bd,{className:o,$type:n,$sizeType:c,"data-testid":m["data-testid"],children:[u&&t(zd,{$sizeType:c,$type:n,children:(()=>{if(n&&h)return h;switch(n){case"success":return t(M,{});case"warning":return t(B,{});case"error":return t(D,{});case"info":case"description":return t(z,{});default:return null}})()}),e(Ad,{children:[e(_d,{$maxCollapsedHeight:$()?g:void 0,$showMore:f,$hasActionLink:!!l,children:[t("div",{ref:x,children:i}),l?e(Md,Object.assign({"data-testid":"action-link",$type:n,$sizeType:c},l,{children:[l.children,d||t(T,{})]})):null]}),b&&e(Od,{$sizeType:c,$type:n,type:"button",onClick:()=>p(!f),children:["Show ",f?"less":"more",t(Rd,{$expanded:f})]})]})]})}))`
    width: 100%;
    user-select: none;
`,rc=x.div`
    padding: 0 1rem;
    padding-top: 0.6875rem;
    padding-bottom: ${e=>e.$isFinalItem?"0.6875rem":"0.5rem"};
    background-color: ${Cn.bg};
    ${Cd({textSize:"body-md"})}

    ${e=>e.$disabled?w`
                color: ${Cn["text-disabled"]};
            `:e.$selected?w`
                color: ${Cn["text-selected"]};
            `:w`
                color: ${Cn.text};
            `}
`,nc=x(Td.BodyMD)`
    color: ${e=>e.$disabled?Cn["text-disabled"]:Cn["text-error"]};
`,oc=x(Vd)`
    color: ${e=>e.$disabled?Cn["text-disabled"]:Cn["text-error"]};
`,ic=x((({type:e,active:r=!1,disabled:n,className:o})=>{let i;switch(e){case"checkbox":i=t(r?j:H,{});break;case"radio":i=t(r?O:_,{});break;case"tick":i=t(L,{});break;case"cross":i=t(R,{});break;default:i=null}return t(Hd,{className:o,$active:r,$disabled:n,children:i})}))`
    ${e=>e.$disabled?e.$selected?w`
                    color: ${Cn["icon-selected-disabled"]};
                `:w`
                    color: ${Cn["icon-disabled-subtle"]};
                `:e.$selected?w`
                color: ${Cn["icon-selected"]};
            `:w`
            color: ${Cn["icon-subtle"]};
        `};
`,sc=x.button`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: ${In["spacing-24"]};
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
                background-color: ${Cn["bg-hover-neutral"]};
            `}
    }
`,ac=o.forwardRef(((e,r)=>{var{children:n,focusHighlight:o=!0,focusOutline:i="none",type:s="button"}=e,a=oe(e,["children","focusHighlight","focusOutline","type"]);return t(sc,Object.assign({ref:r,$outline:i,$highlight:o,type:s},a,{children:n}))})),lc=x(Bl.div)`
    position: absolute;
    top: calc(3rem + ${In["spacing-8"]});
    left: 0;
    overflow: hidden;
    z-index: 1;

    ${Bn.MaxWidth.xxs} {
        max-width: 100%;
    }
`,dc=x.div`
    position: relative;
    width: 100%;
    padding: ${In["spacing-8"]} ${In["spacing-20"]}
        ${In["spacing-24"]} ${In["spacing-20"]};
    display: flex;
    flex-direction: column;
    background: ${Cn.bg};
    border: ${kn["width-010"]} ${kn.solid} ${Cn.border};
    border-radius: ${Tn.sm};
`,cc=x.div`
    display: flex;
    align-items: center;
    justify-content: space-between;

    ${Bn.MaxWidth.xxs} {
        flex-direction: column;
        width: 100%;
    }
`,uc=x.div`
    display: flex;
    justify-content: flex-end;
    margin-top: ${In["spacing-16"]};
    gap: ${In["spacing-8"]} ${In["spacing-16"]};

    ${Bn.MaxWidth.xxs} {
        flex-direction: column-reverse; // FIXME: this breaks tab focus
        margin-top: ${In["spacing-32"]};
    }
`,hc=x.div`
    display: flex;
    align-items: center;
    margin-right: ${In["spacing-32"]};

    ${Bn.MaxWidth.xxs} {
        margin-right: 0;
        width: 100%;
    }
`,gc=x.div`
    display: flex;
    gap: ${In["spacing-8"]};

    ${Bn.MaxWidth.lg} {
        flex-direction: column;
    }

    ${Bn.MaxWidth.xxs} {
        flex-direction: row;
        width: 100%;
    }
`,mc=x.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    ${Bn.MaxWidth.xxs} {
        width: 6rem;
    }
`,fc=x(ac)`
    width: 5rem;
    padding: ${In["spacing-16"]} 0;
    color: ${Cn.icon};

    svg {
        height: 1rem;
        width: 1rem;
    }

    &:hover {
        color: ${Cn["icon-hover"]};
    }
`,pc=x(Td.BodyBL)`
    flex-shrink: 0;
    width: 1.5rem;
    text-align: center;
`,bc=x(Wn)`
    height: calc(3rem - 2px);
    width: 5rem;
    display: flex;
    align-items: center;
    justify-content: center;

    ${Bn.MaxWidth.xxs} {
        width: 100%;
    }
`,vc=x(Vn)`
    text-align: center;
    width: 100%;

    :focus::placeholder {
        color: transparent;
    }
`,yc=x((({type:n="checkbox",indicator:o,checked:l,styleType:d="default",children:c,childrenMaxLines:u,subLabel:h,disabled:g,error:m,name:f,id:b,className:v,compositeSection:y,removable:x,onRemove:w,"data-testid":$,onChange:F,useContentWidth:S})=>{const{collapsible:k=!0,errors:I,children:T,initialExpanded:D}=y||{},[B,z]=a(l),[M,A]=a(!!D),_=p((()=>{const e=Array.isArray(I)&&(null==I?void 0:I.length)>0,t=!Array.isArray(I)&&!!I;return e||t}),[I]),[O]=a(wd.generate()),R=b?`${b}`:`tg-${O}`,H=i(null);s((()=>{z(l)}),[l]),s((()=>{B&&A(null==D||D)}),[B]);const j=()=>{g||A(!M)},L=()=>{g||!w||w()},P=()=>{let e;switch(n){case"yes":e="tick";break;case"no":e="cross";break;case"checkbox":case"radio":e=n}return t(ic,{type:e,active:B,disabled:g,$selected:B,$disabled:g})},W=()=>{if(!h)return null;let e;return e="function"==typeof h?h():h,t(Zd,{"data-id":"toggle-sublabel",children:e})},N=n=>e(r,{children:[t(nc,{weight:"semibold",$disabled:g,children:"Error"}),t(oc,{$disabled:g,children:null==n?void 0:n.map(((e,r)=>t("li",{id:`${R}-error-list-item-${r}`,children:t(nc,{weight:"semibold",$disabled:g,children:e})},r)))})]});return e(Yd,{$selected:B,$disabled:g,className:v,$styleType:d,$error:m,$indicator:o,$useContentWidth:S,id:b,"data-testid":$,children:[e(Qd,{id:`${R}-header-container`,$disabled:g,$error:m,$selected:B,$indicator:o,$styleType:d,children:[e(Xd,{$addPadding:x,children:[t(Ud,{ref:H,name:f,id:`${R}-input`,type:"checkbox"===n?"checkbox":"radio","data-testid":"toggle-input",disabled:g,onChange:e=>{if(!g){if(F)return void F(e);switch(n){case"checkbox":z((e=>!e));break;case"radio":case"yes":case"no":B||z(!0)}}},checked:B}),o&&P(),e(qd,{$selected:B,$disabled:g,children:[t(Gd,{htmlFor:`${R}-input`,"data-testid":`${R}-toggle-label`,$maxLines:u,children:c}),h&&W()]})]}),x&&t(Kd,{type:"button",$disabled:g,onClick:L,id:`${R}-remove-button`,children:"Remove"})]}),T&&e("div",{children:[(!k||M)&&t(rc,{"data-id":"toggle-composite-children",$isFinalItem:!k,$disabled:g,children:T}),k&&!M&&_&&t(ec,{$disabled:g,onClick:j,id:`${R}-error-alert`,children:t(tc,{type:g?"description":"error",className:v,showIcon:!0,children:Array.isArray(I)?N(I):I})}),k&&e(Jd,{$paddingTopRequired:!M&&!_,disabled:g,onClick:j,"data-testid":M?"collapse-button":"expand-button",children:[M?"Show less":"Show more",t(M?E:C,{"aria-hidden":!0})]})]})]})}))`
    min-width: 5rem;
    flex: 1;
`,xc=x(td.Small)`
    width: 7rem;

    ${Bn.MaxWidth.sm} {
        flex: 1;
    }

    ${Bn.MaxWidth.xxs} {
        width: 100%;
    }
`;var wc,$c,Fc;!function(e){e.HOUR_UP="hour-up",e.HOUR_DOWN="hour-down",e.MINUTE_UP="minute-up",e.MINUTE_DOWN="minute-down"}(wc||(wc={})),function(e){e.HOUR="hour",e.MINUTE="minute"}($c||($c={})),function(e){e.AM="am",e.PM="pm"}(Fc||(Fc={}));const Cc=({id:r,value:n,show:o,format:l,onChange:d,onCancel:c})=>{var u;const h=Kn.getTimeValues(l,n),[g,f]=a(h.hour),[p,b]=a(h.minute),[v,y]=a(h.period),x=i(null),w=i(null),$=Jo();s((()=>{if(o&&x.current&&x.current.focus(),o){const{hour:e,minute:t,period:r}=Kn.getTimeValues(l,n);f(e),b(t),y(r)}}),[o,n,l]),s((()=>{const e=x.current,t=w.current;return e&&e.addEventListener("keydown",F),t&&t.addEventListener("keydown",F),()=>{e&&e.removeEventListener("keydown",F),t&&t.removeEventListener("keydown",F)}}),[]);const F=e=>{["Digit0","Digit1","Digit2","Digit3","Digit4","Digit5","Digit6","Digit7","Digit8","Digit9","Tab","Backspace","Delete","ArrowLeft","ArrowRight","ArrowUp","ArrowDown"].includes(e.code)||["Backspace","0","1","2","3","4","5","6","7","8","9"].includes(e.key)||e.preventDefault()},S=m((e=>{switch(e.currentTarget.name){case wc.MINUTE_UP:b(Kn.updateMinutes(p,"add"));break;case wc.MINUTE_DOWN:b(Kn.updateMinutes(p,"minus"));break;case wc.HOUR_UP:f(Kn.updateHours(g,"add"));break;case wc.HOUR_DOWN:f(Kn.updateHours(g,"minus"))}}),[g,p]),k=e=>{e.target.select()},I=e=>{const t=e.target.value;switch(e.target.name){case $c.HOUR:t.length<=2&&f(t);break;case $c.MINUTE:t.length<=2&&b(t)}},T=e=>{const t=parseInt(e.target.value);if(!isNaN(t))switch(e.target.name){case $c.HOUR:{const r=t>23||t<0?h.hour:Kn.convertHourTo12HourFormat(e.target.value);f(r);break}case $c.MINUTE:{const r=t>59||t<0?h.minute:e.target.value;b(Qn.padValue(r));break}}},D=e=>{switch(e.target.name){case Fc.AM:y(Xn.AM);break;case Fc.PM:y(Xn.PM)}},B=e=>r?`${r}-${e}`:e,z=gl({opacity:o?1:0,height:o?(null!==(u=$.height)&&void 0!==u?u:0)+32+2:0});return t(lc,{"data-testid":"animated-dropdown-wrapper",style:z,children:e(dc,{ref:$.ref,"data-testid":B("timepicker-dropdown"),inert:o?void 0:"",children:[e(cc,{children:[e(hc,{children:[e(mc,{children:[t(fc,{"aria-label":"increase hour",name:wc.HOUR_UP,tabIndex:-1,onClick:S,"data-testid":B("hour-increment-button"),children:t(E,{})}),t(bc,{children:t(vc,{"aria-label":"hour",type:"number",name:$c.HOUR,id:"hour",maxLength:2,pattern:"[0-9]{2}",ref:x,value:g,onFocus:k,onChange:I,onBlur:T,min:1,max:12,placeholder:"HH","data-testid":B("hour-input")})}),t(fc,{"aria-label":"decrease hour",name:wc.HOUR_DOWN,tabIndex:-1,onClick:S,"data-testid":B("hour-decrement-button"),children:t(C,{})})]}),t(pc,{children:":"}),e(mc,{children:[t(fc,{"aria-label":"increase minute",name:wc.MINUTE_UP,tabIndex:-1,onClick:S,"data-testid":B("minute-increment-button"),children:t(E,{})}),t(bc,{children:t(vc,{"aria-label":"minute",type:"number",name:$c.MINUTE,id:"minute",maxLength:2,pattern:"[0-9]{2}",ref:w,value:p,onChange:I,onBlur:T,onFocus:k,min:0,max:59,placeholder:"MM","data-testid":B("minute-input")})}),t(fc,{"aria-label":"decrease minute",name:wc.MINUTE_DOWN,tabIndex:-1,onClick:S,"data-testid":B("minute-decrement-button"),children:t(C,{})})]})]}),e(gc,{children:[t(yc,{checked:v===Xn.AM,name:Fc.AM,type:"radio",onChange:D,"data-testid":B("am-toggle"),"aria-label":"AM",children:"AM"}),t(yc,{checked:v===Xn.PM,name:Fc.PM,type:"radio",onChange:D,"data-testid":B("pm-toggle"),"aria-label":"PM",children:"PM"})]})]}),e(uc,{children:[t(xc,{"aria-label":"close selector",type:"button",styleType:"secondary",onClick:c,"data-testid":B("cancel-button"),children:"Cancel"}),t(xc,{"aria-label":"confirm selection",type:"button",onClick:()=>{let e;e="24hr"===l?Kn.convertTo24HourFormat({hour:g,minute:p,period:v}):`${g}:${p}${v}`,d(e)},disabled:""===g||""===p,"data-testid":B("confirm-button"),children:"Done"})]})]})})},Ec=r=>{var{id:n,disabled:o=!1,error:l,value:d,format:c="24hr",readOnly:u,onChange:h,onFocus:g,onBlur:m}=r,f=oe(r,["id","disabled","error","value","format","readOnly","onChange","onFocus","onBlur"]);const[p,b]=a(!1),[v,y]=a(!1),[x,w]=a(""),[$,F]=a(""),C=i(null);s((()=>{d&&(w(d.start),F(d.end))}),[d]),ie("mousedown",(function(e){o||I(e)}),"document"),ie("keyup",(function(e){if("Tab"===e.code)I(e)}),"document");const E=()=>{k()},S=()=>{p||v||g&&g()},k=()=>{b(!1),y(!1),m&&m()},I=e=>{C.current&&!C.current.contains(e.target)&&(v||p)&&k()};return t(Un,Object.assign({ref:C,id:n},f,{children:e(qn,{$disabled:o,$error:l,$readOnly:u,children:[e(Rn,{error:l,currentActive:p?"start":v?"end":"none",children:[t(Gn,{onFocus:()=>{o||u||p||(y(!1),b(!0),S())},readOnly:!0,placeholder:"From",value:Kn.formatDisplayValue(x,c),disabled:o,"data-testid":f["data-testid"]?`${f["data-testid"]}-timepicker-selector`:"timepicker-selector"}),t(Gn,{onFocus:()=>{o||u||v||(b(!1),y(!0),S())},readOnly:!0,placeholder:"To",value:Kn.formatDisplayValue($,c),disabled:o,"data-testid":f["data-testid"]?`${f["data-testid"]}-timepicker-selector`:"timepicker-selector"})]}),t(Cc,{id:n,show:p,value:x,format:c,onCancel:E,onChange:e=>{b(!1),y(!0),w(e);h&&h({start:e,end:$})}}),t(Cc,{id:n,show:v,value:$,format:c,onCancel:E,onChange:e=>{y(!1),F(e);h&&h({start:x,end:e}),""==x?b(!0):m&&m()}})]})}))};x.label`
    color: ${Cn["text-subtle"]};
    margin-bottom: ${In["spacing-8"]};
    display: inline-block;

    ${En["form-label"]}
    ${Cd()}
    font-weight: ${En.Spec["weight-semibold"]};
`;const Sc=x.p`
    ${En["body-sm-semibold"]}
    color: ${Cn["text-error"]};
    margin-top: ${In["spacing-8"]};
    margin-bottom: 0;
    outline: none;
`;x.span`
    ${En["form-description"]}
    color: ${Cn["text-subtler"]};
    display: block;
`,x(Vn)`
    width: 100%;
    height: calc(3rem - 2px); // exclude top and bottom borders

    ${e=>"no-border"!==e.$styleType&&w`
            padding-left: ${In["spacing-16"]};
            padding-right: ${e.$showClear?0:In["spacing-16"]};
        `}
`;const kc=x(Yn)`
    height: auto;
    padding: ${In["spacing-12"]} ${In["spacing-16"]};

    cursor: pointer;
    color: ${Cn.icon};

    ${e=>"no-border"===e.$styleType&&w`
            margin-right: -${In["spacing-12"]};
        `}
`,Ic=x(R)`
    height: 1.25rem;
    width: 1.25rem;
    vertical-align: middle;
`;x.div`
    display: flex;
    width: 100%;
`,x(Wn)`
    display: flex;
    align-items: center;
    width: 100%;
`;const Tc=e=>"small"===e?2.5:3;x.div`
    position: relative;
    width: 100%;
    ${e=>{const t=Tc(e.$variant);return w`
            min-height: ${t}rem;
            height: ${t}rem; // Need this to persist the height when expanding or collapsing list
        `}}
`;const Dc=w`
    display: flex;
    position: relative;
    align-items: center;
    justify-content: space-between;
    padding: 0 ${In["spacing-16"]};
    // exclude top and bottom borders
    height: calc(${e=>Tc(e.$variant)}rem - 2px);
    width: 100%;
    border-radius: ${Tn.sm};
    border: none;
    background: transparent;

    :focus,
    :active {
        outline: none;
    }

    :focus-visible {
        outline: 2px solid ${Cn["border-focus"]};
    }
`,Bc=x.button`
    ${Dc}
    cursor: pointer;
`;x.div`
    ${Dc}
`;const zc=$`
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
    border: ${kn["width-010"]} ${kn.solid} ${Cn.border};
    border-radius: ${Tn.sm};
    background: ${Cn.bg};
    overflow: hidden;

    :focus-within {
        border-color: ${Cn["border-focus"]};
        box-shadow: 0px 0px 4px 0px
            rgb(from ${Cn["border-focus"]} r g b / 50%) inset; // TODO: confirm shadow
    }

    ${e=>e.expanded?w`
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                z-index: 2;
            `:w`
                animation: ${zc} 0.5s ease-in-out;
            `}

    ${e=>e.disabled?w`
                background: ${Cn["bg-disabled"]};

                ${Bc} {
                    cursor: not-allowed;
                }

                :focus-within {
                    border-color: ${Cn.border};
                    box-shadow: none;
                }
            `:e.$readOnly?w`
                border: none;
                background: transparent !important;

                ${Bc} {
                    padding: 0;
                }

                :focus-within {
                    border: none;
                    box-shadow: none;
                }
            `:e.error?w`
                border-color: ${Cn["border-error"]};

                :focus-within {
                    border-color: ${Cn["border-error"]};
                    box-shadow: 0px 0px 4px 0px
                        rgb(from ${Cn["border-error"]} r g b / 50%) inset; // TODO: confirm shadow
                }
            `:void 0}
`,x.div`
    transform: rotate(${e=>e.expanded?180:0}deg);
    transition: transform ${Sn["duration-250"]} ${Sn["ease-default"]};
    margin-left: ${In["spacing-16"]};
`,x(C)`
    color: ${Cn.icon};
`,x.div`
    height: 1px;
    background: ${Cn.border};
    margin: 0 ${In["spacing-8"]};
`,x.div`
    display: flex;
    flex: 1;
    word-break: break-all;
    ${e=>{if(e.$disabled)return w`
                color: ${Cn["text-disabled"]};
            `}}
`;const Mc=x.div`
    ${e=>"small"===e.$variant?En["body-md-regular"]:En["body-baseline-regular"]}
    text-align: left;
    ${e=>{if("middle"!==e.truncateType)return w`
                    ${Ed(1)}
                `}}
    overflow: hidden;
`;x(Mc)`
    color: ${Cn["text-subtler"]};
`,x.div`
    display: flex;
    position: relative;
    align-items: center;
    justify-content: space-between;
`;const Ac=x(kc)`
    position: absolute;
    right: 0;
    padding-left: ${In["spacing-8"]};
    margin-right: 0;
`;x(Bc)`
    // space for clear icon
    padding-right: calc(1.25rem + ${In["spacing-16"]});
`;const _c=x.div`
    font-weight: ${e=>e.$bold?En.Spec["weight-semibold"]:En.Spec["weight-regular"]};

    ${e=>e.$disabled?w`
                color: ${Cn["text-disabled"]};
            `:e.$selected?w`
                color: ${Cn["text-selected"]};
            `:w`
                color: ${Cn.text};
            `}
    width: 100%;

    ${e=>"end"===e.$truncateType&&Ed(e.$maxLines||2)}
    overflow-wrap: break-word;
`,Oc=x.div`
    color: ${Cn["text-subtlest"]};
    width: 100%;

    ${e=>"end"===e.$truncateType&&Ed(e.$maxLines||2)}
    overflow-wrap: break-word;

    ${e=>"next-line"===e.$labelDisplayType?w`
                    ${En["body-md-semibold"]}
                `:w`
                    ${En["body-baseline-regular"]}
                `}
`,Rc=x.span`
    font-weight: ${En.Spec["weight-semibold"]};
`,Hc=x.div`
    text-align: left;
    width: 100%;
    overflow: hidden;
    overflow-wrap: break-word;

    ${e=>"small"===e.$variant?En["body-md-regular"]:En["body-baseline-regular"]}

    ${e=>{switch(e.$labelDisplayType){case"next-line":return w`
                    display: flex;
                    flex-direction: column;
                `;case"inline":return w`
                    ${_c} {
                        display: inline;
                    }

                    ${Oc} {
                        display: inline;
                        margin-left: 0.5rem;
                    }
                `}}}
`,jc=x.div`
    display: inline-block;
    width: ${e=>1===e.$maxLines?50:100}%;
    height: 1lh;
    word-break: break-all;
    overflow: hidden;
`,Lc=x.div`
    display: inline-block;
    width: ${e=>1===e.$maxLines?50:100}%;
    height: 1lh;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    direction: rtl;
    text-align: right;
`,Pc=({bold:n,displayType:o="inline",label:i,searchTerm:s,maxLines:a=2,selected:l,disabled:d,sublabel:c,truncationType:u="middle",variant:h="default"})=>{const g=F(),f="small"===h?En.Spec["body-size-md"]({theme:g}):En.Spec["body-size-baseline"]({theme:g}),b=En.Spec["font-family"]({theme:g}),{ref:v,width:y}=Jo(),x=m((e=>{if("inline"!==o||!y)return!1;return Qn.getTextWidth(e,`${f} '${b}'`)>y*a-50}),[y,o,f,b,a]),w=p((()=>x(i)),[x,i]),$=p((()=>c&&x(c)),[x,c]),C=n=>{if(!s)return n;const o=s.toLowerCase().trim(),a=n.toLowerCase().indexOf(o),l=a+s.length;return-1===a?n:e(r,{children:[i.slice(0,a),t(Rc,{$variant:h,children:i.slice(a,l)}),i.slice(l)]})},E=n=>e(r,{children:[t(jc,{$maxLines:a,"aria-hidden":!0,children:C(n)}),t(Lc,{$maxLines:a,"aria-hidden":!0,children:C(n)})]});return e(Hc,{ref:v,$labelDisplayType:w||$?"next-line":o,$variant:h,children:[t(_c,{"aria-label":i,$bold:n,$maxLines:a,$selected:l,$disabled:d,$truncateType:u,children:"middle"===u&&w?E(i):C(i)}),c&&t(Oc,{"aria-label":c,$maxLines:a,$truncateType:u,$labelDisplayType:o,children:"middle"===u&&$?E(c):c})]})};var Wc=Wt;var Nc=function(e){var t=this.__data__,r=t.delete(e);return this.size=t.size,r};var Vc=function(e){return this.__data__.get(e)};var Yc=function(e){return this.__data__.has(e)},Uc=Wt,qc=Nt,Gc=dr;var Zc=function(e,t){var r=this.__data__;if(r instanceof Uc){var n=r.__data__;if(!qc||n.length<199)return n.push([e,t]),this.size=++r.size,this;r=this.__data__=new Gc(n)}return r.set(e,t),this.size=r.size,this},Qc=Wt,Xc=function(){this.__data__=new Wc,this.size=0},Kc=Nc,Jc=Vc,eu=Yc,tu=Zc;function ru(e){var t=this.__data__=new Qc(e);this.size=t.size}ru.prototype.clear=Xc,ru.prototype.delete=Kc,ru.prototype.get=Jc,ru.prototype.has=eu,ru.prototype.set=tu;var nu=ru;var ou=dr,iu=function(e){return this.__data__.set(e,"__lodash_hash_undefined__"),this},su=function(e){return this.__data__.has(e)};function au(e){var t=-1,r=null==e?0:e.length;for(this.__data__=new ou;++t<r;)this.add(e[t])}au.prototype.add=au.prototype.push=iu,au.prototype.has=su;var lu=function(e,t){return e.has(t)},du=au,cu=function(e,t){for(var r=-1,n=null==e?0:e.length;++r<n;)if(t(e[r],r,e))return!0;return!1},uu=lu;var hu=function(e,t,r,n,o,i){var s=1&r,a=e.length,l=t.length;if(a!=l&&!(s&&l>a))return!1;var d=i.get(e),c=i.get(t);if(d&&c)return d==t&&c==e;var u=-1,h=!0,g=2&r?new du:void 0;for(i.set(e,t),i.set(t,e);++u<a;){var m=e[u],f=t[u];if(n)var p=s?n(f,m,u,t,e,i):n(m,f,u,e,t,i);if(void 0!==p){if(p)continue;h=!1;break}if(g){if(!cu(t,(function(e,t){if(!uu(g,t)&&(m===e||o(m,e,r,n,i)))return g.push(t)}))){h=!1;break}}else if(m!==f&&!o(m,f,r,n,i)){h=!1;break}}return i.delete(e),i.delete(t),h};var gu=function(e){var t=-1,r=Array(e.size);return e.forEach((function(e,n){r[++t]=[n,e]})),r};var mu=he.Uint8Array,fu=Ct,pu=hu,bu=gu,vu=function(e){var t=-1,r=Array(e.size);return e.forEach((function(e){r[++t]=e})),r},yu=ge?ge.prototype:void 0,xu=yu?yu.valueOf:void 0;var wu=function(e,t,r,n,o,i,s){switch(r){case"[object DataView]":if(e.byteLength!=t.byteLength||e.byteOffset!=t.byteOffset)return!1;e=e.buffer,t=t.buffer;case"[object ArrayBuffer]":return!(e.byteLength!=t.byteLength||!i(new mu(e),new mu(t)));case"[object Boolean]":case"[object Date]":case"[object Number]":return fu(+e,+t);case"[object Error]":return e.name==t.name&&e.message==t.message;case"[object RegExp]":case"[object String]":return e==t+"";case"[object Map]":var a=bu;case"[object Set]":var l=1&n;if(a||(a=vu),e.size!=t.size&&!l)return!1;var d=s.get(e);if(d)return d==t;n|=2,s.set(e,t);var c=pu(a(e),a(t),n,o,i,s);return s.delete(e),c;case"[object Symbol]":if(xu)return xu.call(e)==xu.call(t)}return!1};var $u=function(e,t){for(var r=-1,n=t.length,o=e.length;++r<n;)e[o+r]=t[r];return e},Fu=$u,Cu=le;var Eu=function(e,t,r){var n=t(e);return Cu(e)?n:Fu(n,r(e))};var Su=function(e,t){for(var r=-1,n=null==e?0:e.length,o=0,i=[];++r<n;){var s=e[r];t(s,r,e)&&(i[o++]=s)}return i},ku=function(){return[]},Iu=Object.prototype.propertyIsEnumerable,Tu=Object.getOwnPropertySymbols,Du=Tu?function(e){return null==e?[]:(e=Object(e),Su(Tu(e),(function(t){return Iu.call(e,t)})))}:ku;var Bu=function(e,t){for(var r=-1,n=Array(e);++r<e;)n[r]=t(r);return n},zu=Ce,Mu=Ee;var Au=function(e){return Mu(e)&&"[object Arguments]"==zu(e)},_u=Ee,Ou=Object.prototype,Ru=Ou.hasOwnProperty,Hu=Ou.propertyIsEnumerable,ju=Au(function(){return arguments}())?Au:function(e){return _u(e)&&Ru.call(e,"callee")&&!Hu.call(e,"callee")},Lu={exports:{}};var Pu=function(){return!1};!function(e,t){var r=he,n=Pu,o=t&&!t.nodeType&&t,i=o&&e&&!e.nodeType&&e,s=i&&i.exports===o?r.Buffer:void 0,a=(s?s.isBuffer:void 0)||n;e.exports=a}(Lu,Lu.exports);var Wu=Lu.exports,Nu=/^(?:0|[1-9]\d*)$/;var Vu=function(e,t){var r=typeof e;return!!(t=null==t?9007199254740991:t)&&("number"==r||"symbol"!=r&&Nu.test(e))&&e>-1&&e%1==0&&e<t};var Yu=function(e){return"number"==typeof e&&e>-1&&e%1==0&&e<=9007199254740991},Uu=Ce,qu=Yu,Gu=Ee,Zu={};Zu["[object Float32Array]"]=Zu["[object Float64Array]"]=Zu["[object Int8Array]"]=Zu["[object Int16Array]"]=Zu["[object Int32Array]"]=Zu["[object Uint8Array]"]=Zu["[object Uint8ClampedArray]"]=Zu["[object Uint16Array]"]=Zu["[object Uint32Array]"]=!0,Zu["[object Arguments]"]=Zu["[object Array]"]=Zu["[object ArrayBuffer]"]=Zu["[object Boolean]"]=Zu["[object DataView]"]=Zu["[object Date]"]=Zu["[object Error]"]=Zu["[object Function]"]=Zu["[object Map]"]=Zu["[object Number]"]=Zu["[object Object]"]=Zu["[object RegExp]"]=Zu["[object Set]"]=Zu["[object String]"]=Zu["[object WeakMap]"]=!1;var Qu=function(e){return Gu(e)&&qu(e.length)&&!!Zu[Uu(e)]};var Xu=function(e){return function(t){return e(t)}},Ku={exports:{}};!function(e,t){var r=de,n=t&&!t.nodeType&&t,o=n&&e&&!e.nodeType&&e,i=o&&o.exports===n&&r.process,s=function(){try{var e=o&&o.require&&o.require("util").types;return e||i&&i.binding&&i.binding("util")}catch(e){}}();e.exports=s}(Ku,Ku.exports);var Ju=Ku.exports,eh=Qu,th=Xu,rh=Ju&&Ju.isTypedArray,nh=rh?th(rh):eh,oh=Bu,ih=ju,sh=le,ah=Wu,lh=Vu,dh=nh,ch=Object.prototype.hasOwnProperty;var uh=function(e,t){var r=sh(e),n=!r&&ih(e),o=!r&&!n&&ah(e),i=!r&&!n&&!o&&dh(e),s=r||n||o||i,a=s?oh(e.length,String):[],l=a.length;for(var d in e)!t&&!ch.call(e,d)||s&&("length"==d||o&&("offset"==d||"parent"==d)||i&&("buffer"==d||"byteLength"==d||"byteOffset"==d)||lh(d,l))||a.push(d);return a},hh=Object.prototype;var gh=function(e){var t=e&&e.constructor;return e===("function"==typeof t&&t.prototype||hh)};var mh=function(e,t){return function(r){return e(t(r))}}(Object.keys,Object),fh=gh,ph=mh,bh=Object.prototype.hasOwnProperty;var vh=function(e){if(!fh(e))return ph(e);var t=[];for(var r in Object(e))bh.call(e,r)&&"constructor"!=r&&t.push(r);return t},yh=He,xh=Yu;var wh=function(e){return null!=e&&xh(e.length)&&!yh(e)},$h=uh,Fh=vh,Ch=wh;var Eh=function(e){return Ch(e)?$h(e):Fh(e)},Sh=Eu,kh=Du,Ih=Eh;var Th=function(e){return Sh(e,Ih,kh)},Dh=Object.prototype.hasOwnProperty;var Bh=function(e,t,r,n,o,i){var s=1&r,a=Th(e),l=a.length;if(l!=Th(t).length&&!s)return!1;for(var d=l;d--;){var c=a[d];if(!(s?c in t:Dh.call(t,c)))return!1}var u=i.get(e),h=i.get(t);if(u&&h)return u==t&&h==e;var g=!0;i.set(e,t),i.set(t,e);for(var m=s;++d<l;){var f=e[c=a[d]],p=t[c];if(n)var b=s?n(p,f,c,t,e,i):n(f,p,c,e,t,i);if(!(void 0===b?f===p||o(f,p,r,n,i):b)){g=!1;break}m||(m="constructor"==c)}if(g&&!m){var v=e.constructor,y=t.constructor;v==y||!("constructor"in e)||!("constructor"in t)||"function"==typeof v&&v instanceof v&&"function"==typeof y&&y instanceof y||(g=!1)}return i.delete(e),i.delete(t),g},zh=nt(he,"DataView"),Mh=Nt,Ah=nt(he,"Promise"),_h=nt(he,"Set"),Oh=nt(he,"WeakMap"),Rh=Ce,Hh=Ne,jh="[object Map]",Lh="[object Promise]",Ph="[object Set]",Wh="[object WeakMap]",Nh="[object DataView]",Vh=Hh(zh),Yh=Hh(Mh),Uh=Hh(Ah),qh=Hh(_h),Gh=Hh(Oh),Zh=Rh;(zh&&Zh(new zh(new ArrayBuffer(1)))!=Nh||Mh&&Zh(new Mh)!=jh||Ah&&Zh(Ah.resolve())!=Lh||_h&&Zh(new _h)!=Ph||Oh&&Zh(new Oh)!=Wh)&&(Zh=function(e){var t=Rh(e),r="[object Object]"==t?e.constructor:void 0,n=r?Hh(r):"";if(n)switch(n){case Vh:return Nh;case Yh:return jh;case Uh:return Lh;case qh:return Ph;case Gh:return Wh}return t});var Qh=nu,Xh=hu,Kh=wu,Jh=Bh,eg=Zh,tg=le,rg=Wu,ng=nh,og="[object Arguments]",ig="[object Array]",sg="[object Object]",ag=Object.prototype.hasOwnProperty;var lg=function(e,t,r,n,o,i){var s=tg(e),a=tg(t),l=s?ig:eg(e),d=a?ig:eg(t),c=(l=l==og?sg:l)==sg,u=(d=d==og?sg:d)==sg,h=l==d;if(h&&rg(e)){if(!rg(t))return!1;s=!0,c=!1}if(h&&!c)return i||(i=new Qh),s||ng(e)?Xh(e,t,r,n,o,i):Kh(e,t,l,r,n,o,i);if(!(1&r)){var g=c&&ag.call(e,"__wrapped__"),m=u&&ag.call(t,"__wrapped__");if(g||m){var f=g?e.value():e,p=m?t.value():t;return i||(i=new Qh),o(f,p,r,n,i)}}return!!h&&(i||(i=new Qh),Jh(e,t,r,n,o,i))},dg=Ee;var cg=function e(t,r,n,o,i){return t===r||(null==t||null==r||!dg(t)&&!dg(r)?t!=t&&r!=r:lg(t,r,n,o,e,i))},ug=nu,hg=cg;var gg=function(e,t,r,n){var o=r.length,i=o,s=!n;if(null==e)return!i;for(e=Object(e);o--;){var a=r[o];if(s&&a[2]?a[1]!==e[a[0]]:!(a[0]in e))return!1}for(;++o<i;){var l=(a=r[o])[0],d=e[l],c=a[1];if(s&&a[2]){if(void 0===d&&!(l in e))return!1}else{var u=new ug;if(n)var h=n(d,c,l,e,t,u);if(!(void 0===h?hg(c,d,3,n,u):h))return!1}}return!0},mg=Ae;var fg=function(e){return e==e&&!mg(e)},pg=fg,bg=Eh;var vg=function(e){for(var t=bg(e),r=t.length;r--;){var n=t[r],o=e[n];t[r]=[n,o,pg(o)]}return t};var yg=function(e,t){return function(r){return null!=r&&(r[e]===t&&(void 0!==t||e in Object(r)))}},xg=gg,wg=vg,$g=yg;var Fg=function(e,t){return null!=e&&t in Object(e)},Cg=Ir,Eg=ju,Sg=le,kg=Vu,Ig=Yu,Tg=Dr;var Dg=function(e,t,r){for(var n=-1,o=(t=Cg(t,e)).length,i=!1;++n<o;){var s=Tg(t[n]);if(!(i=null!=e&&r(e,s)))break;e=e[s]}return i||++n!=o?i:!!(o=null==e?0:e.length)&&Ig(o)&&kg(s,o)&&(Sg(e)||Eg(e))},Bg=Fg,zg=Dg;var Mg=cg,Ag=_r,_g=function(e,t){return null!=e&&zg(e,t,Bg)},Og=Me,Rg=fg,Hg=yg,jg=Dr;var Lg=function(e){return function(t){return null==t?void 0:t[e]}},Pg=Mr;var Wg=Lg,Ng=function(e){return function(t){return Pg(t,e)}},Vg=Me,Yg=Dr;var Ug=function(e){var t=wg(e);return 1==t.length&&t[0][2]?$g(t[0][0],t[0][1]):function(r){return r===e||xg(r,e,t)}},qg=function(e,t){return Og(e)&&Rg(t)?Hg(jg(e),t):function(r){var n=Ag(r,e);return void 0===n&&n===t?_g(r,e):Mg(t,n,3)}},Gg=function(e){return e},Zg=le,Qg=function(e){return Vg(e)?Wg(Yg(e)):Ng(e)};var Xg=function(e){return"function"==typeof e?e:null==e?Gg:"object"==typeof e?Zg(e)?qg(e[0],e[1]):Ug(e):Qg(e)},Kg=Xg,Jg=wh,em=Eh;var tm=function(e){return function(t,r,n){var o=Object(t);if(!Jg(t)){var i=Kg(r);t=em(t),r=function(e){return i(o[e],e,o)}}var s=e(t,r,n);return s>-1?o[i?t[s]:s]:void 0}};var rm=/\s/;var nm=function(e){for(var t=e.length;t--&&rm.test(e.charAt(t)););return t},om=/^\s+/;var im=function(e){return e?e.slice(0,nm(e)+1).replace(om,""):e},sm=Ae,am=Ie,lm=/^[-+]0x[0-9a-f]+$/i,dm=/^0b[01]+$/i,cm=/^0o[0-7]+$/i,um=parseInt;var hm=function(e){if("number"==typeof e)return e;if(am(e))return NaN;if(sm(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=sm(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=im(e);var r=dm.test(e);return r||cm.test(e)?um(e.slice(2),r?2:8):lm.test(e)?NaN:+e},gm=1/0;var mm=function(e){return e?(e=hm(e))===gm||e===-1/0?17976931348623157e292*(e<0?-1:1):e==e?e:0:0===e?e:0};var fm=function(e,t,r,n){for(var o=e.length,i=r+(n?1:-1);n?i--:++i<o;)if(t(e[i],i,e))return i;return-1},pm=Xg,bm=function(e){var t=mm(e),r=t%1;return t==t?r?t-r:t:0},vm=Math.max;var ym=ae(tm((function(e,t,r){var n=null==e?0:e.length;if(!n)return-1;var o=null==r?0:bm(r);return o<0&&(o=vm(n+o,0)),fm(e,pm(t),o)}))),xm=cg;var wm=ae((function(e,t){return xm(e,t)}));function $m(e){return()=>e}function Fm(e){e()}function Cm(e,t){return r=>e(t(r))}function Em(e,t){return()=>e(t)}function Sm(e,t){return r=>e(t,r)}function km(e){return void 0!==e}function Im(){}function Tm(e,t){return t(e),e}function Dm(e,t){return t(e)}function Bm(...e){return e}function zm(e,t){return e(1,t)}function Mm(e,t){e(0,t)}function Am(e){e(2)}function _m(e){return e(4)}function Om(e,t){return zm(e,Sm(t,0))}function Rm(e,t){const r=e(1,(e=>{r(),t(e)}));return r}function Hm(e){let t,r;return n=>o=>{t=o,r&&clearTimeout(r),r=setTimeout((()=>{n(t)}),e)}}function jm(e,t){return e===t}function Lm(e=jm){let t;return r=>n=>{e(t,n)||(t=n,r(n))}}function Pm(e){return t=>r=>{e(r)&&t(r)}}function Wm(e){return t=>Cm(t,e)}function Nm(e){return t=>()=>{t(e)}}function Vm(e,...t){const r=function(...e){return t=>e.reduceRight(Dm,t)}(...t);return(t,n)=>{switch(t){case 2:return void Am(e);case 1:return zm(e,r(n))}}}function Ym(e,t){return r=>n=>{r(t=e(t,n))}}function Um(e){return t=>r=>{e>0?e--:t(r)}}function qm(e){let t,r=null;return n=>o=>{r=o,!t&&(t=setTimeout((()=>{t=void 0,n(r)}),e))}}function Gm(...e){const t=new Array(e.length);let r=0,n=null;const o=Math.pow(2,e.length)-1;return e.forEach(((e,i)=>{const s=Math.pow(2,i);zm(e,(e=>{const a=r;r|=s,t[i]=e,a!==o&&r===o&&n&&(n(),n=null)}))})),e=>i=>{const s=()=>{e([i].concat(t))};r===o?s():n=s}}function Zm(e){let t=e;const r=Xm();return(e,n)=>{switch(e){case 0:t=n;break;case 1:n(t);break;case 4:return t}return r(e,n)}}function Qm(e,t){return Tm(Zm(t),(t=>Om(e,t)))}function Xm(){const e=[];return(t,r)=>{switch(t){case 0:return void e.slice().forEach((e=>{e(r)}));case 2:return void e.splice(0,e.length);case 1:return e.push(r),()=>{const t=e.indexOf(r);t>-1&&e.splice(t,1)}}}}function Km(e){return Tm(Xm(),(t=>Om(e,t)))}function Jm(e,t=[],{singleton:r}={singleton:!0}){return{constructor:e,dependencies:t,id:ef(),singleton:r}}const ef=()=>Symbol();function tf(...e){const t=Xm(),r=new Array(e.length);let n=0;const o=Math.pow(2,e.length)-1;return e.forEach(((e,i)=>{const s=Math.pow(2,i);zm(e,(e=>{r[i]=e,n|=s,n===o&&Mm(t,r)}))})),function(e,i){switch(e){case 2:return void Am(t);case 1:return n===o&&i(r),zm(t,i)}}}function rf(e,t=jm){return Vm(e,Lm(t))}function nf(...e){return function(t,r){switch(t){case 2:return;case 1:return function(...e){return()=>{e.map(Fm)}}(...e.map((e=>zm(e,r))))}}}var of=(e=>(e[e.DEBUG=0]="DEBUG",e[e.INFO=1]="INFO",e[e.WARN=2]="WARN",e[e.ERROR=3]="ERROR",e))(of||{});const sf={0:"debug",3:"error",1:"log",2:"warn"},af=Jm((()=>{const e=Zm(3);return{log:Zm(((t,r,n=1)=>{var o;n>=(null!=(o=(typeof globalThis>"u"?window:globalThis).VIRTUOSO_LOG_LEVEL)?o:_m(e))&&console[sf[n]]("%creact-virtuoso: %c%s %o","color: #0253b3; font-weight: bold","color: initial",t,r)})),logLevel:e}}),[],{singleton:!0});function lf(e,t,r){return df(e,t,r).callbackRef}function df(e,t,r){const n=o.useRef(null);let i=e=>{};if(typeof ResizeObserver<"u"){const s=o.useMemo((()=>new ResizeObserver((t=>{const n=()=>{const r=t[0].target;null!==r.offsetParent&&e(r)};r?n():requestAnimationFrame(n)}))),[e]);i=e=>{e&&t?(s.observe(e),n.current=e):(n.current&&s.unobserve(n.current),n.current=null)}}return{callbackRef:i,ref:n}}function cf(e,t,r,n,i,s,a,l,d){const c=o.useCallback((r=>{const o=function(e,t,r,n){const o=e.length;if(0===o)return null;const i=[];for(let s=0;s<o;s++){const o=e.item(s);if(void 0===o.dataset.index)continue;const a=parseInt(o.dataset.index),l=parseFloat(o.dataset.knownSize),d=t(o,r);if(0===d&&n("Zero-sized element, this should not happen",{child:o},of.ERROR),d===l)continue;const c=i[i.length-1];0===i.length||c.size!==d||c.endIndex!==a-1?i.push({endIndex:a,size:d,startIndex:a}):i[i.length-1].endIndex++}return i}(r.children,t,l?"offsetWidth":"offsetHeight",i);let d=r.parentElement;for(;!d.dataset.virtuosoScroller;)d=d.parentElement;const c="window"===d.lastElementChild.dataset.viewportType,u=a?l?a.scrollLeft:a.scrollTop:c?l?window.pageXOffset||document.documentElement.scrollLeft:window.pageYOffset||document.documentElement.scrollTop:l?d.scrollLeft:d.scrollTop,h=a?l?a.scrollWidth:a.scrollHeight:c?l?document.documentElement.scrollWidth:document.documentElement.scrollHeight:l?d.scrollWidth:d.scrollHeight,g=a?l?a.offsetWidth:a.offsetHeight:c?l?window.innerWidth:window.innerHeight:l?d.offsetWidth:d.offsetHeight;n({scrollHeight:h,scrollTop:Math.max(u,0),viewportHeight:g}),null==s||s(l?uf("column-gap",getComputedStyle(r).columnGap,i):uf("row-gap",getComputedStyle(r).rowGap,i)),null!==o&&e(o)}),[e,t,i,s,a,n]);return df(c,r,d)}function uf(e,t,r){return"normal"!==t&&!(null!=t&&t.endsWith("px"))&&r(`${e} was not resolved to pixel value correctly`,t,of.WARN),"normal"===t?0:parseInt(null!=t?t:"0",10)}function hf(e,t,r){const n=o.useRef(null),i=o.useCallback((r=>{if(null==r||!r.offsetParent)return;const o=r.getBoundingClientRect(),i=o.width;let s,a;if(t){const e=t.getBoundingClientRect(),r=o.top-e.top;a=e.height-Math.max(0,r),s=r+t.scrollTop}else a=window.innerHeight-Math.max(0,o.top),s=o.top+window.pageYOffset;n.current={offsetTop:s,visibleHeight:a,visibleWidth:i},e(n.current)}),[e,t]),{callbackRef:s,ref:a}=df(i,!0,r),l=o.useCallback((()=>{i(a.current)}),[i,a]);return o.useEffect((()=>{if(t){t.addEventListener("scroll",l);const e=new ResizeObserver((()=>{requestAnimationFrame(l)}));return e.observe(t),()=>{t.removeEventListener("scroll",l),e.unobserve(t)}}return window.addEventListener("scroll",l),window.addEventListener("resize",l),()=>{window.removeEventListener("scroll",l),window.removeEventListener("resize",l)}}),[l,t]),s}const gf=Jm((()=>{const e=Xm(),t=Xm(),r=Zm(0),n=Xm(),o=Zm(0),i=Xm(),s=Xm(),a=Zm(0),l=Zm(0),d=Zm(0),c=Zm(0),u=Xm(),h=Xm(),g=Zm(!1),m=Zm(!1),f=Zm(!1);return Om(Vm(e,Wm((({scrollTop:e})=>e))),t),Om(Vm(e,Wm((({scrollHeight:e})=>e))),s),Om(t,o),{deviation:r,fixedFooterHeight:d,fixedHeaderHeight:l,footerHeight:c,headerHeight:a,horizontalDirection:m,scrollBy:h,scrollContainerState:e,scrollHeight:s,scrollingInProgress:g,scrollTo:u,scrollTop:t,skipAnimationFrameInResizeObserver:f,smoothScrollTargetReached:n,statefulScrollTop:o,viewportHeight:i}}),[],{singleton:!0}),mf={lvl:0};function ff(e,t){const r=e.length;if(0===r)return[];let{index:n,value:o}=t(e[0]);const i=[];for(let s=1;s<r;s++){const{index:r,value:a}=t(e[s]);i.push({end:r-1,start:n,value:o}),n=r,o=a}return i.push({end:1/0,start:n,value:o}),i}function pf(e){return e===mf}function bf(e,t){if(!pf(e))return t===e.k?e.v:t<e.k?bf(e.l,t):bf(e.r,t)}function vf(e,t,r="k"){if(pf(e))return[-1/0,void 0];if(Number(e[r])===t)return[e.k,e.v];if(Number(e[r])<t){const n=vf(e.r,t,r);return n[0]===-1/0?[e.k,e.v]:n}return vf(e.l,t,r)}function yf(e,t,r){return pf(e)?Df(t,r,1):t===e.k?Sf(e,{k:t,v:r}):t<e.k?Bf(Sf(e,{l:yf(e.l,t,r)})):Bf(Sf(e,{r:yf(e.r,t,r)}))}function xf(){return mf}function wf(e,t,r){if(pf(e))return[];return function(e){return ff(e,(({k:e,v:t})=>({index:e,value:t})))}(Cf(e,vf(e,t)[0],r))}function $f(e,t){if(pf(e))return mf;const{k:r,l:n,r:o}=e;if(t===r){if(pf(n))return o;if(pf(o))return n;{const[t,r]=Tf(n);return Ef(Sf(e,{k:t,l:kf(n),v:r}))}}return Ef(Sf(e,t<r?{l:$f(n,t)}:{r:$f(o,t)}))}function Ff(e){return pf(e)?[]:[...Ff(e.l),{k:e.k,v:e.v},...Ff(e.r)]}function Cf(e,t,r){if(pf(e))return[];const{k:n,l:o,r:i,v:s}=e;let a=[];return n>t&&(a=a.concat(Cf(o,t,r))),n>=t&&n<=r&&a.push({k:n,v:s}),n<=r&&(a=a.concat(Cf(i,t,r))),a}function Ef(e){const{l:t,lvl:r,r:n}=e;if(n.lvl>=r-1&&t.lvl>=r-1)return e;if(r>n.lvl+1){if(If(t))return zf(Sf(e,{lvl:r-1}));if(!pf(t)&&!pf(t.r))return Sf(t.r,{l:Sf(t,{r:t.r.l}),lvl:r,r:Sf(e,{l:t.r.r,lvl:r-1})});throw new Error("Unexpected empty nodes")}if(If(e))return Mf(Sf(e,{lvl:r-1}));if(pf(n)||pf(n.l))throw new Error("Unexpected empty nodes");{const t=n.l,o=If(t)?n.lvl-1:n.lvl;return Sf(t,{l:Sf(e,{lvl:r-1,r:t.l}),lvl:t.lvl+1,r:Mf(Sf(n,{l:t.r,lvl:o}))})}}function Sf(e,t){return Df(void 0!==t.k?t.k:e.k,void 0!==t.v?t.v:e.v,void 0!==t.lvl?t.lvl:e.lvl,void 0!==t.l?t.l:e.l,void 0!==t.r?t.r:e.r)}function kf(e){return pf(e.r)?e.l:Ef(Sf(e,{r:kf(e.r)}))}function If(e){return pf(e)||e.lvl>e.r.lvl}function Tf(e){return pf(e.r)?[e.k,e.v]:Tf(e.r)}function Df(e,t,r,n=mf,o=mf){return{k:e,l:n,lvl:r,r:o,v:t}}function Bf(e){return Mf(zf(e))}function zf(e){const{l:t}=e;return pf(t)||t.lvl!==e.lvl?e:Sf(t,{r:Sf(e,{l:t.r})})}function Mf(e){const{lvl:t,r:r}=e;return pf(r)||pf(r.r)||r.lvl!==t||r.r.lvl!==t?e:Sf(r,{l:Sf(e,{r:r.l}),lvl:t+1})}function Af(e,t){return!(!e||e.startIndex!==t.startIndex||e.endIndex!==t.endIndex)}function _f(e,t){return!(!e||e[0]!==t[0]||e[1]!==t[1])}const Of=Jm((()=>({recalcInProgress:Zm(!1)})),[],{singleton:!0});function Rf(e,t,r){return e[Hf(e,t,r)]}function Hf(e,t,r,n=0){let o=e.length-1;for(;n<=o;){const i=Math.floor((n+o)/2),s=r(e[i],t);if(0===s)return i;if(-1===s){if(o-n<2)return i-1;o=i-1}else{if(o===n)return i;n=i+1}}throw new Error(`Failed binary finding record in array - ${e.join(",")}, searched for ${t}`)}function jf(e,t){return Math.round(e.getBoundingClientRect()[t])}function Lf(e){return!pf(e.groupOffsetTree)}function Pf({index:e},t){return t===e?0:t<e?-1:1}function Wf({offset:e},t){return t===e?0:t<e?-1:1}function Nf(e,t,r){if(0===t.length)return 0;const{index:n,offset:o,size:i}=Rf(t,e,Pf),s=e-n,a=i*s+(s-1)*r+o;return a>0?a+r:a}function Vf(e,t){if(!Lf(t))return e;let r=0;for(;t.groupIndices[r]<=e+r;)r++;return e+r}function Yf(e,t,r){if(function(e){return typeof e.groupIndex<"u"}(e))return t.groupIndices[e.groupIndex]+1;{let n=Vf("LAST"===e.index?r:e.index,t);return n=Math.max(0,n,Math.min(r,n)),n}}function Uf(e,t,r,n=0){return n>0&&(t=Math.max(t,Rf(e,n,Pf).offset)),ff(function(e,t,r,n){const o=Hf(e,t,n),i=Hf(e,r,n,o);return e.slice(o,i+1)}(e,t,r,Wf),Qf)}function qf(e,[t,r,n,o]){t.length>0&&n("received item sizes",t,of.DEBUG);const i=e.sizeTree;let s=i,a=0;if(r.length>0&&pf(i)&&2===t.length){const e=t[0].size,n=t[1].size;s=r.reduce(((t,r)=>yf(yf(t,r,e),r+1,n)),s)}else[s,a]=function(e,t){let r=pf(e)?0:1/0;for(const n of t){const{endIndex:t,size:o,startIndex:i}=n;if(r=Math.min(r,i),pf(e)){e=yf(e,0,o);continue}const s=wf(e,i-1,t+1);if(s.some(Xf(n)))continue;let a=!1,l=!1;for(const{end:r,start:n,value:i}of s)a?(t>=n||o===i)&&(e=$f(e,n)):(l=i!==o,a=!0),r>t&&t>=n&&i!==o&&(e=yf(e,t+1,i));l&&(e=yf(e,i,o))}return[e,r]}(s,t);if(s===i)return e;const{lastIndex:l,lastOffset:d,lastSize:c,offsetTree:u}=Zf(e.offsetTree,a,s,o);return{groupIndices:r,groupOffsetTree:r.reduce(((e,t)=>yf(e,t,Nf(t,u,o))),xf()),lastIndex:l,lastOffset:d,lastSize:c,offsetTree:u,sizeTree:s}}function Gf(e,t){let r=0,n=0;for(;r<e;)r+=t[n+1]-t[n]-1,n++;return n-(r===e?0:1)}function Zf(e,t,r,n){let o=e,i=0,s=0,a=0,l=0;if(0!==t){l=Hf(o,t-1,Pf),a=o[l].offset;const e=vf(r,t-1);i=e[0],s=e[1],o.length&&o[l].size===vf(r,t)[1]&&(l-=1),o=o.slice(0,l+1)}else o=[];for(const{start:e,value:l}of wf(r,t,1/0)){const t=e-i,r=t*s+a+t*n;o.push({index:e,offset:r,size:l}),i=e,a=r,s=l}return{lastIndex:i,lastOffset:a,lastSize:s,offsetTree:o}}function Qf(e){return{index:e.index,value:e}}function Xf(e){const{endIndex:t,size:r,startIndex:n}=e;return e=>e.start===n&&(e.end===t||e.end===1/0)&&e.value===r}const Kf={offsetHeight:"height",offsetWidth:"width"},Jf=Jm((([{log:e},{recalcInProgress:t}])=>{const r=Xm(),n=Xm(),o=Qm(n,0),i=Xm(),s=Xm(),a=Zm(0),l=Zm([]),d=Zm(void 0),c=Zm(void 0),u=Zm(((e,t)=>jf(e,Kf[t]))),h=Zm(void 0),g=Zm(0),m={groupIndices:[],groupOffsetTree:xf(),lastIndex:0,lastOffset:0,lastSize:0,offsetTree:[],sizeTree:xf()},f=Qm(Vm(r,Gm(l,e,g),Ym(qf,m),Lm()),m),p=Qm(Vm(l,Lm(),Ym(((e,t)=>({current:t,prev:e.current})),{current:[],prev:[]}),Wm((({prev:e})=>e))),[]);Om(Vm(l,Pm((e=>e.length>0)),Gm(f,g),Wm((([e,t,r])=>{const n=e.reduce(((e,n,o)=>yf(e,n,Nf(n,t.offsetTree,r)||o)),xf());return{...t,groupIndices:e,groupOffsetTree:n}}))),f),Om(Vm(n,Gm(f),Pm((([e,{lastIndex:t}])=>e<t)),Wm((([e,{lastIndex:t,lastSize:r}])=>[{endIndex:t,size:r,startIndex:e}]))),r),Om(d,c);const b=Qm(Vm(d,Wm((e=>void 0===e))),!0);Om(Vm(c,Pm((e=>void 0!==e&&pf(_m(f).sizeTree))),Wm((e=>[{endIndex:0,size:e,startIndex:0}]))),r);const v=Km(Vm(r,Gm(f),Ym((({sizes:e},[t,r])=>({changed:r!==e,sizes:r})),{changed:!1,sizes:m}),Wm((e=>e.changed))));zm(Vm(a,Ym(((e,t)=>({diff:e.prev-t,prev:t})),{diff:0,prev:0}),Wm((e=>e.diff))),(e=>{const{groupIndices:r}=_m(f);if(e>0)Mm(t,!0),Mm(i,e+Gf(e,r));else if(e<0){const t=_m(p);t.length>0&&(e-=Gf(-e,t)),Mm(s,e)}})),zm(Vm(a,Gm(e)),(([e,t])=>{e<0&&t("`firstItemIndex` prop should not be set to less than zero. If you don't know the total count, just use a very high value",{firstItemIndex:a},of.ERROR)}));const y=Km(i);Om(Vm(i,Gm(f),Wm((([e,t])=>{const r=t.groupIndices.length>0,n=[],o=t.lastSize;if(r){const r=bf(t.sizeTree,0);let i=0,s=0;for(;i<e;){const e=t.groupIndices[s],a=t.groupIndices.length===s+1?1/0:t.groupIndices[s+1]-e-1;n.push({endIndex:e,size:r,startIndex:e}),n.push({endIndex:e+1+a-1,size:o,startIndex:e+1}),s++,i+=a+1}const a=Ff(t.sizeTree);return i!==e&&a.shift(),a.reduce(((t,{k:r,v:n})=>{let o=t.ranges;return 0!==t.prevSize&&(o=[...t.ranges,{endIndex:r+e-1,size:t.prevSize,startIndex:t.prevIndex}]),{prevIndex:r+e,prevSize:n,ranges:o}}),{prevIndex:e,prevSize:0,ranges:n}).ranges}return Ff(t.sizeTree).reduce(((t,{k:r,v:n})=>({prevIndex:r+e,prevSize:n,ranges:[...t.ranges,{endIndex:r+e-1,size:t.prevSize,startIndex:t.prevIndex}]})),{prevIndex:0,prevSize:o,ranges:[]}).ranges}))),r);const x=Km(Vm(s,Gm(f,g),Wm((([e,{offsetTree:t},r])=>Nf(-e,t,r)))));return Om(Vm(s,Gm(f,g),Wm((([e,t,r])=>{if(t.groupIndices.length>0){if(pf(t.sizeTree))return t;let n=xf();const o=_m(p);let i=0,s=0,a=0;for(;i<-e;){a=o[s];const e=o[s+1]-a-1;s++,i+=e+1}if(n=Ff(t.sizeTree).reduce(((t,{k:r,v:n})=>yf(t,Math.max(0,r+e),n)),n),i!==-e){n=yf(n,0,bf(t.sizeTree,a));n=yf(n,1,vf(t.sizeTree,1-e)[1])}return{...t,sizeTree:n,...Zf(t.offsetTree,0,n,r)}}{const n=Ff(t.sizeTree).reduce(((t,{k:r,v:n})=>yf(t,Math.max(0,r+e),n)),xf());return{...t,sizeTree:n,...Zf(t.offsetTree,0,n,r)}}}))),f),{beforeUnshiftWith:y,data:h,defaultItemSize:c,firstItemIndex:a,fixedItemSize:d,gap:g,groupIndices:l,itemSize:u,listRefresh:v,shiftWith:s,shiftWithOffset:x,sizeRanges:r,sizes:f,statefulTotalCount:o,totalCount:n,trackItemSizes:b,unshiftWith:i}}),Bm(af,Of),{singleton:!0});function ep(e){return e.reduce(((e,t)=>(e.groupIndices.push(e.totalCount),e.totalCount+=t+1,e)),{groupIndices:[],totalCount:0})}const tp=Jm((([{groupIndices:e,sizes:t,totalCount:r},{headerHeight:n,scrollTop:o}])=>{const i=Xm(),s=Xm(),a=Km(Vm(i,Wm(ep)));return Om(Vm(a,Wm((e=>e.totalCount))),r),Om(Vm(a,Wm((e=>e.groupIndices))),e),Om(Vm(tf(o,t,n),Pm((([e,t])=>Lf(t))),Wm((([e,t,r])=>vf(t.groupOffsetTree,Math.max(e-r,0),"v")[0])),Lm(),Wm((e=>[e]))),s),{groupCounts:i,topItemsIndexes:s}}),Bm(Jf,gf)),rp=Jm((([{log:e}])=>{const t=Zm(!1),r=Km(Vm(t,Pm((e=>e)),Lm()));return zm(t,(t=>{t&&_m(e)("props updated",{},of.DEBUG)})),{didMount:r,propsReady:t}}),Bm(af),{singleton:!0}),np=typeof document<"u"&&"scrollBehavior"in document.documentElement.style;function op(e){const t="number"==typeof e?{index:e}:e;return t.align||(t.align="start"),(!t.behavior||!np)&&(t.behavior="auto"),t.offset||(t.offset=0),t}const ip=Jm((([{gap:e,listRefresh:t,sizes:r,totalCount:n},{fixedFooterHeight:o,fixedHeaderHeight:i,footerHeight:s,headerHeight:a,scrollingInProgress:l,scrollTo:d,smoothScrollTargetReached:c,viewportHeight:u},{log:h}])=>{const g=Xm(),m=Xm(),f=Zm(0);let p=null,b=null,v=null;function y(){p&&(p(),p=null),v&&(v(),v=null),b&&(clearTimeout(b),b=null),Mm(l,!1)}return Om(Vm(g,Gm(r,u,n,f,a,s,h),Gm(e,i,o),Wm((([[e,r,n,o,i,s,a,d],u,h,f])=>{const x=op(e),{align:w,behavior:$,offset:F}=x,C=o-1,E=Yf(x,r,C);let S=Nf(E,r.offsetTree,u)+s;"end"===w?(S+=h+vf(r.sizeTree,E)[1]-n+f,E===C&&(S+=a)):"center"===w?S+=(h+vf(r.sizeTree,E)[1]-n+f)/2:S-=i,F&&(S+=F);const k=t=>{y(),t?(d("retrying to scroll to",{location:e},of.DEBUG),Mm(g,e)):(Mm(m,!0),d("list did not change, scroll successful",{},of.DEBUG))};if(y(),"smooth"===$){let e=!1;v=zm(t,(t=>{e=e||t})),p=Rm(c,(()=>{k(e)}))}else p=Rm(Vm(t,function(e){return t=>{const r=setTimeout((()=>{t(!1)}),e);return e=>{e&&(t(!0),clearTimeout(r))}}}(150)),k);return b=setTimeout((()=>{y()}),1200),Mm(l,!0),d("scrolling from index to",{behavior:$,index:E,top:S},of.DEBUG),{behavior:$,top:S}}))),d),{scrollTargetReached:m,scrollToIndex:g,topListHeight:f}}),Bm(Jf,gf,af),{singleton:!0});function sp(e,t){0==e?t():requestAnimationFrame((()=>{sp(e-1,t)}))}function ap(e,t){const r=t-1;return"number"==typeof e?e:"LAST"===e.index?r:e.index}const lp=Jm((([{defaultItemSize:e,listRefresh:t,sizes:r},{scrollTop:n},{scrollTargetReached:o,scrollToIndex:i},{didMount:s}])=>{const a=Zm(!0),l=Zm(0),d=Zm(!0);return Om(Vm(s,Gm(l),Pm((([e,t])=>!!t)),Nm(!1)),a),Om(Vm(s,Gm(l),Pm((([e,t])=>!!t)),Nm(!1)),d),zm(Vm(tf(t,s),Gm(a,r,e,d),Pm((([[,e],t,{sizeTree:r},n,o])=>e&&(!pf(r)||km(n))&&!t&&!o)),Gm(l)),(([,e])=>{Rm(o,(()=>{Mm(d,!0)})),sp(4,(()=>{Rm(n,(()=>{Mm(a,!0)})),Mm(i,e)}))})),{initialItemFinalLocationReached:d,initialTopMostItemIndex:l,scrolledToInitialItem:a}}),Bm(Jf,gf,ip,rp),{singleton:!0});function dp(e,t){return Math.abs(e-t)<1.01}const cp="up",up="down",hp={atBottom:!1,notAtBottomBecause:"NOT_SHOWING_LAST_ITEM",state:{offsetBottom:0,scrollHeight:0,scrollTop:0,viewportHeight:0}},gp=Jm((([{footerHeight:e,headerHeight:t,scrollBy:r,scrollContainerState:n,scrollTop:o,viewportHeight:i}])=>{const s=Zm(!1),a=Zm(!0),l=Xm(),d=Xm(),c=Zm(4),u=Zm(0),h=Qm(Vm(nf(Vm(rf(o),Um(1),Nm(!0)),Vm(rf(o),Um(1),Nm(!1),Hm(100))),Lm()),!1),g=Qm(Vm(nf(Vm(r,Nm(!0)),Vm(r,Nm(!1),Hm(200))),Lm()),!1);Om(Vm(tf(rf(o),rf(u)),Wm((([e,t])=>e<=t)),Lm()),a),Om(Vm(a,qm(50)),d);const m=Km(Vm(tf(n,rf(i),rf(t),rf(e),rf(c)),Ym(((e,[{scrollHeight:t,scrollTop:r},n,o,i,s])=>{const a={scrollHeight:t,scrollTop:r,viewportHeight:n};if(r+n-t>-s){let t,n;return r>e.state.scrollTop?(t="SCROLLED_DOWN",n=e.state.scrollTop-r):(t="SIZE_DECREASED",n=e.state.scrollTop-r||e.scrollTopDelta),{atBottom:!0,atBottomBecause:t,scrollTopDelta:n,state:a}}let l;return l=a.scrollHeight>e.state.scrollHeight?"SIZE_INCREASED":n<e.state.viewportHeight?"VIEWPORT_HEIGHT_DECREASING":r<e.state.scrollTop?"SCROLLING_UPWARDS":"NOT_FULLY_SCROLLED_TO_LAST_ITEM_BOTTOM",{atBottom:!1,notAtBottomBecause:l,state:a}}),hp),Lm(((e,t)=>e&&e.atBottom===t.atBottom)))),f=Qm(Vm(n,Ym(((e,{scrollHeight:t,scrollTop:r,viewportHeight:n})=>{if(dp(e.scrollHeight,t))return{changed:!1,jump:0,scrollHeight:t,scrollTop:r};{const o=t-(r+n)<1;return e.scrollTop!==r&&o?{changed:!0,jump:e.scrollTop-r,scrollHeight:t,scrollTop:r}:{changed:!0,jump:0,scrollHeight:t,scrollTop:r}}}),{changed:!1,jump:0,scrollHeight:0,scrollTop:0}),Pm((e=>e.changed)),Wm((e=>e.jump))),0);Om(Vm(m,Wm((e=>e.atBottom))),s),Om(Vm(s,qm(50)),l);const p=Zm(up);Om(Vm(n,Wm((({scrollTop:e})=>e)),Lm(),Ym(((e,t)=>_m(g)?{direction:e.direction,prevScrollTop:t}:{direction:t<e.prevScrollTop?cp:up,prevScrollTop:t}),{direction:up,prevScrollTop:0}),Wm((e=>e.direction))),p),Om(Vm(n,qm(50),Nm("none")),p);const b=Zm(0);return Om(Vm(h,Pm((e=>!e)),Nm(0)),b),Om(Vm(o,qm(100),Gm(h),Pm((([e,t])=>!!t)),Ym((([e,t],[r])=>[t,r]),[0,0]),Wm((([e,t])=>t-e))),b),{atBottomState:m,atBottomStateChange:l,atBottomThreshold:c,atTopStateChange:d,atTopThreshold:u,isAtBottom:s,isAtTop:a,isScrolling:h,lastJumpDueToItemResize:f,scrollDirection:p,scrollVelocity:b}}),Bm(gf)),mp="top",fp="bottom",pp="none";function bp(e,t,r){return"number"==typeof e?r===cp&&t===mp||r===up&&t===fp?e:0:r===cp?t===mp?e.main:e.reverse:t===fp?e.main:e.reverse}function vp(e,t){var r;return"number"==typeof e?e:null!=(r=e[t])?r:0}const yp=Jm((([{deviation:e,fixedHeaderHeight:t,headerHeight:r,scrollTop:n,viewportHeight:o}])=>{const i=Xm(),s=Zm(0),a=Zm(0),l=Zm(0);return{increaseViewportBy:a,listBoundary:i,overscan:l,topListHeight:s,visibleRange:Qm(Vm(tf(rf(n),rf(o),rf(r),rf(i,_f),rf(l),rf(s),rf(t),rf(e),rf(a)),Wm((([e,t,r,[n,o],i,s,a,l,d])=>{const c=e-l,u=s+a,h=Math.max(r-c,0);let g=pp;const m=vp(d,mp),f=vp(d,fp);return n-=l,o+=r+a,(n+=r+a)>e+u-m&&(g=cp),(o-=l)<e-h+t+f&&(g=up),g!==pp?[Math.max(c-r-bp(i,mp,g)-m,0),c-h-a+t+bp(i,fp,g)+f]:null})),Pm((e=>null!=e)),Lm(_f)),[0,0])}}),Bm(gf),{singleton:!0});const xp={bottom:0,firstItemIndex:0,items:[],offsetBottom:0,offsetTop:0,top:0,topItems:[],topListHeight:0,totalCount:0};function wp(e,t,r,n,o,i){const{lastIndex:s,lastOffset:a,lastSize:l}=o;let d=0,c=0;if(e.length>0){d=e[0].offset;const t=e[e.length-1];c=t.offset+t.size}const u=r-s,h=d,g=a+u*l+(u-1)*n-c;return{bottom:c,firstItemIndex:i,items:Fp(e,o,i),offsetBottom:g,offsetTop:d,top:h,topItems:Fp(t,o,i),topListHeight:t.reduce(((e,t)=>t.size+e),0),totalCount:r}}function $p(e,t,r,n,o,i){let s=0;if(r.groupIndices.length>0)for(const t of r.groupIndices){if(t-s>=e)break;s++}const a=e+s,l=ap(t,a);return wp(Array.from({length:a}).map(((e,t)=>({data:i[t+l],index:t+l,offset:0,size:0}))),[],a,o,r,n)}function Fp(e,t,r){if(0===e.length)return[];if(!Lf(t))return e.map((e=>({...e,index:e.index+r,originalIndex:e.index})));const n=e[0].index,o=e[e.length-1].index,i=[],s=wf(t.groupOffsetTree,n,o);let a,l=0;for(const n of e){let e;(!a||a.end<n.index)&&(a=s.shift(),l=t.groupIndices.indexOf(a.start)),e=n.index===a.start?{index:l,type:"group"}:{groupIndex:l,index:n.index-(l+1)+r},i.push({...e,data:n.data,offset:n.offset,originalIndex:n.index,size:n.size})}return i}const Cp=Jm((([{data:e,firstItemIndex:t,gap:r,sizes:n,totalCount:o},i,{listBoundary:s,topListHeight:a,visibleRange:l},{initialTopMostItemIndex:d,scrolledToInitialItem:c},{topListHeight:u},h,{didMount:g},{recalcInProgress:m}])=>{const f=Zm([]),p=Zm(0),b=Xm();Om(i.topItemsIndexes,f);const v=Qm(Vm(tf(g,m,rf(l,_f),rf(o),rf(n),rf(d),c,rf(f),rf(t),rf(r),e),Pm((([e,t,,r,,,,,,,n])=>{const o=n&&n.length!==r;return e&&!t&&!o})),Wm((([,,[e,t],r,n,o,i,s,a,l,d])=>{const c=n,{offsetTree:u,sizeTree:h}=c,g=_m(p);if(0===r)return{...xp,totalCount:r};if(0===e&&0===t)return 0===g?{...xp,totalCount:r}:$p(g,o,n,a,l,d||[]);if(pf(h))return g>0?null:wp(function(e,t,r){if(Lf(t)){const n=Vf(e,t);return[{index:vf(t.groupOffsetTree,n)[0],offset:0,size:0},{data:null==r?void 0:r[0],index:n,offset:0,size:0}]}return[{data:null==r?void 0:r[0],index:e,offset:0,size:0}]}(ap(o,r),c,d),[],r,l,c,a);const m=[];if(s.length>0){const e=s[0],t=s[s.length-1];let r=0;for(const n of wf(h,e,t)){const o=n.value,i=Math.max(n.start,e),s=Math.min(n.end,t);for(let e=i;e<=s;e++)m.push({data:null==d?void 0:d[e],index:e,offset:r,size:o}),r+=o}}if(!i)return wp([],m,r,l,c,a);const f=s.length>0?s[s.length-1]+1:0,b=Uf(u,e,t,f);if(0===b.length)return null;const v=r-1;return wp(Tm([],(r=>{for(const n of b){const o=n.value;let i=o.offset,s=n.start;const a=o.size;if(o.offset<e){s+=Math.floor((e-o.offset+l)/(a+l));const t=s-n.start;i+=t*a+t*l}s<f&&(i+=(f-s)*a,s=f);const c=Math.min(n.end,v);for(let e=s;e<=c&&!(i>=t);e++)r.push({data:null==d?void 0:d[e],index:e,offset:i,size:a}),i+=a+l}})),m,r,l,c,a)})),Pm((e=>null!==e)),Lm()),xp);Om(Vm(e,Pm(km),Wm((e=>null==e?void 0:e.length))),o),Om(Vm(v,Wm((e=>e.topListHeight))),u),Om(u,a),Om(Vm(v,Wm((e=>[e.top,e.bottom]))),s),Om(Vm(v,Wm((e=>e.items))),b);const y=Km(Vm(v,Pm((({items:e})=>e.length>0)),Gm(o,e),Pm((([{items:e},t])=>e[e.length-1].originalIndex===t-1)),Wm((([,e,t])=>[e-1,t])),Lm(_f),Wm((([e])=>e)))),x=Km(Vm(v,qm(200),Pm((({items:e,topItems:t})=>e.length>0&&e[0].originalIndex===t.length)),Wm((({items:e})=>e[0].index)),Lm())),w=Km(Vm(v,Pm((({items:e})=>e.length>0)),Wm((({items:e})=>{let t=0,r=e.length-1;for(;"group"===e[t].type&&t<r;)t++;for(;"group"===e[r].type&&r>t;)r--;return{endIndex:e[r].index,startIndex:e[t].index}})),Lm(Af)));return{endReached:y,initialItemCount:p,itemsRendered:b,listState:v,rangeChanged:w,startReached:x,topItemsIndexes:f,...h}}),Bm(Jf,tp,yp,lp,ip,gp,rp,Of),{singleton:!0}),Ep=Jm((([{fixedFooterHeight:e,fixedHeaderHeight:t,footerHeight:r,headerHeight:n},{listState:o}])=>{const i=Xm(),s=Qm(Vm(tf(r,e,n,t,o),Wm((([e,t,r,n,o])=>e+t+r+n+o.offsetBottom+o.bottom))),0);return Om(rf(s),i),{totalListHeight:s,totalListHeightChanged:i}}),Bm(gf,Cp),{singleton:!0}),Sp=Jm((([{viewportHeight:e},{totalListHeight:t}])=>{const r=Zm(!1);return{alignToBottom:r,paddingTopAddition:Qm(Vm(tf(r,e,t),Pm((([e])=>e)),Wm((([,e,t])=>Math.max(0,e-t))),qm(0),Lm()),0)}}),Bm(gf,Ep),{singleton:!0});function kp(e){return!!e&&("smooth"===e?"smooth":"auto")}const Ip=Jm((([{listRefresh:e,totalCount:t},{atBottomState:r,isAtBottom:n},{scrollToIndex:o},{scrolledToInitialItem:i},{didMount:s,propsReady:a},{log:l},{scrollingInProgress:d}])=>{const c=Zm(!1),u=Xm();let h=null;function g(e){Mm(o,{align:"end",behavior:e,index:"LAST"})}function m(e){const t=Rm(r,(t=>{e&&!t.atBottom&&"SIZE_INCREASED"===t.notAtBottomBecause&&!h&&(_m(l)("scrolling to bottom due to increased size",{},of.DEBUG),g("auto"))}));setTimeout(t,100)}return zm(Vm(tf(Vm(rf(t),Um(1)),s),Gm(rf(c),n,i,d),Wm((([[e,t],r,n,o,i])=>{let s=t&&o,a="auto";return s&&(a=((e,t)=>"function"==typeof e?kp(e(t)):t&&kp(e))(r,n||i),s=s&&!!a),{followOutputBehavior:a,shouldFollow:s,totalCount:e}})),Pm((({shouldFollow:e})=>e))),(({followOutputBehavior:t,totalCount:r})=>{h&&(h(),h=null),h=Rm(e,(()=>{_m(l)("following output to ",{totalCount:r},of.DEBUG),g(t),h=null}))})),zm(Vm(tf(rf(c),t,a),Pm((([e,,t])=>e&&t)),Ym((({value:e},[,t])=>({refreshed:e===t,value:t})),{refreshed:!1,value:0}),Pm((({refreshed:e})=>e)),Gm(c,t)),(([,e])=>{_m(i)&&m(!1!==e)})),zm(u,(()=>{m(!1!==_m(c))})),zm(tf(rf(c),r),(([e,t])=>{e&&!t.atBottom&&"VIEWPORT_HEIGHT_DECREASING"===t.notAtBottomBecause&&g("auto")})),{autoscrollToBottom:u,followOutput:c}}),Bm(Jf,gp,ip,lp,rp,af,gf)),Tp=Jm((([{data:e,firstItemIndex:t,gap:r,sizes:n},{initialTopMostItemIndex:o},{initialItemCount:i,listState:s},{didMount:a}])=>(Om(Vm(a,Gm(i),Pm((([,e])=>0!==e)),Gm(o,n,t,r,e),Wm((([[,e],t,r,n,o,i=[]])=>$p(e,t,r,n,o,i)))),s),{})),Bm(Jf,lp,Cp,rp),{singleton:!0}),Dp=Jm((([{didMount:e},{scrollTo:t},{listState:r}])=>{const n=Zm(0);return zm(Vm(e,Gm(n),Pm((([,e])=>0!==e)),Wm((([,e])=>({top:e})))),(e=>{Rm(Vm(r,Um(1),Pm((e=>e.items.length>1))),(()=>{requestAnimationFrame((()=>{Mm(t,e)}))}))})),{initialScrollTop:n}}),Bm(rp,gf,Cp),{singleton:!0}),Bp=({itemBottom:e,itemTop:t,locationParams:{align:r,behavior:n,...o},viewportBottom:i,viewportTop:s})=>t<s?{...o,align:null!=r?r:"start",behavior:n}:e>i?{...o,align:null!=r?r:"end",behavior:n}:null,zp=Jm((([{gap:e,sizes:t,totalCount:r},{fixedFooterHeight:n,fixedHeaderHeight:o,headerHeight:i,scrollingInProgress:s,scrollTop:a,viewportHeight:l},{scrollToIndex:d}])=>{const c=Xm();return Om(Vm(c,Gm(t,l,r,i,o,n,a),Gm(e),Wm((([[e,t,r,n,o,i,a,l],d])=>{const{align:c,behavior:u,calculateViewLocation:h=Bp,done:g,...m}=e,f=Yf(e,t,n-1),p=Nf(f,t.offsetTree,d)+o+i,b=h({itemBottom:p+vf(t.sizeTree,f)[1],itemTop:p,locationParams:{align:c,behavior:u,...m},viewportBottom:l+r-a,viewportTop:l+i});return b?g&&Rm(Vm(s,Pm((e=>!e)),Um(_m(s)?1:2)),g):g&&g(),b})),Pm((e=>null!==e))),d),{scrollIntoView:c}}),Bm(Jf,gf,ip,Cp,af),{singleton:!0}),Mp=Jm((([{scrollVelocity:e}])=>{const t=Zm(!1),r=Xm(),n=Zm(!1);return Om(Vm(e,Gm(n,t,r),Pm((([e,t])=>!!t)),Wm((([e,t,r,n])=>{const{enter:o,exit:i}=t;if(r){if(i(e,n))return!1}else if(o(e,n))return!0;return r})),Lm()),t),zm(Vm(tf(t,e,r),Gm(n)),(([[e,t,r],n])=>{e&&n&&n.change&&n.change(t,r)})),{isSeeking:t,scrollSeekConfiguration:n,scrollSeekRangeChanged:r,scrollVelocity:e}}),Bm(gp),{singleton:!0}),Ap=Jm((([{scrollContainerState:e,scrollTo:t}])=>{const r=Xm(),n=Xm(),o=Xm(),i=Zm(!1),s=Zm(void 0);return Om(Vm(tf(r,n),Wm((([{scrollHeight:e,scrollTop:t,viewportHeight:r},{offsetTop:n}])=>({scrollHeight:e,scrollTop:Math.max(0,t-n),viewportHeight:r})))),e),Om(Vm(t,Gm(n),Wm((([e,{offsetTop:t}])=>({...e,top:e.top+t})))),o),{customScrollParent:s,useWindowScroll:i,windowScrollContainerState:r,windowScrollTo:o,windowViewportRect:n}}),Bm(gf)),_p=Jm((([{sizeRanges:e,sizes:t},{headerHeight:r,scrollTop:n},{initialTopMostItemIndex:o},{didMount:i},{useWindowScroll:s,windowScrollContainerState:a,windowViewportRect:l}])=>{const d=Xm(),c=Zm(void 0),u=Zm(null),h=Zm(null);return Om(a,u),Om(l,h),zm(Vm(d,Gm(t,n,s,u,h,r)),(([e,t,r,n,o,i,s])=>{const a=function(e){return Ff(e).map((({k:e,v:t},r,n)=>{const o=n[r+1];return{endIndex:o?o.k-1:1/0,size:t,startIndex:e}}))}(t.sizeTree);n&&null!==o&&null!==i&&(r=o.scrollTop-i.offsetTop),e({ranges:a,scrollTop:r-=s})})),Om(Vm(c,Pm(km),Wm(Op)),o),Om(Vm(i,Gm(c),Pm((([,e])=>void 0!==e)),Lm(),Wm((([,e])=>e.ranges))),e),{getState:d,restoreStateFrom:c}}),Bm(Jf,gf,lp,rp,Ap));function Op(e){return{align:"start",index:0,offset:e.scrollTop}}const Rp=Jm((([{topItemsIndexes:e}])=>{const t=Zm(0);return Om(Vm(t,Pm((e=>e>=0)),Wm((e=>Array.from({length:e}).map(((e,t)=>t))))),e),{topItemCount:t}}),Bm(Cp));function Hp(e){let t,r=!1;return()=>(r||(r=!0,t=e()),t)}const jp=Hp((()=>/iP(ad|od|hone)/i.test(navigator.userAgent)&&/WebKit/i.test(navigator.userAgent))),Lp=Jm((([{deviation:e,scrollBy:t,scrollingInProgress:r,scrollTop:n},{isAtBottom:o,isScrolling:i,lastJumpDueToItemResize:s,scrollDirection:a},{listState:l},{beforeUnshiftWith:d,gap:c,shiftWithOffset:u,sizes:h},{log:g},{recalcInProgress:m}])=>{const f=Km(Vm(l,Gm(s),Ym((([,e,t,r],[{bottom:n,items:o,offsetBottom:i,totalCount:s},a])=>{const l=n+i;let d=0;return t===s&&e.length>0&&o.length>0&&(0===o[0].originalIndex&&0===e[0].originalIndex||(d=l-r,0!==d&&(d+=a))),[d,o,s,l]}),[0,[],0,0]),Pm((([e])=>0!==e)),Gm(n,a,r,o,g,m),Pm((([,e,t,r,,,n])=>!n&&!r&&0!==e&&t===cp)),Wm((([[e],,,,,t])=>(t("Upward scrolling compensation",{amount:e},of.DEBUG),e)))));function p(r){r>0?(Mm(t,{behavior:"auto",top:-r}),Mm(e,0)):(Mm(e,0),Mm(t,{behavior:"auto",top:-r}))}return zm(Vm(f,Gm(e,i)),(([t,r,n])=>{n&&jp()?Mm(e,r-t):p(-t)})),zm(Vm(tf(Qm(i,!1),e,m),Pm((([e,t,r])=>!e&&!r&&0!==t)),Wm((([e,t])=>t)),qm(1)),p),Om(Vm(u,Wm((e=>({top:-e})))),t),zm(Vm(d,Gm(h,c),Wm((([e,{groupIndices:t,lastSize:r,sizeTree:n},o])=>{function i(e){return e*(r+o)}if(0===t.length)return i(e);{let r=0;const o=bf(n,0);let s=0,a=0;for(;s<e;){s++,r+=o;let n=t.length===a+1?1/0:t[a+1]-t[a]-1;s+n>e&&(r-=o,n=e-s+1),s+=n,r+=i(n),a++}return r}}))),(r=>{Mm(e,r),requestAnimationFrame((()=>{Mm(t,{top:r}),requestAnimationFrame((()=>{Mm(e,0),Mm(m,!1)}))}))})),{deviation:e}}),Bm(gf,gp,Cp,Jf,af,Of)),Pp=Jm((([e,t,r,n,o,i,s,a,l,d])=>({...e,...t,...r,...n,...o,...i,...s,...a,...l,...d})),Bm(yp,Tp,rp,Mp,Ep,Dp,Sp,Ap,zp,af)),Wp=Jm((([{data:e,defaultItemSize:t,firstItemIndex:r,fixedItemSize:n,gap:o,groupIndices:i,itemSize:s,sizeRanges:a,sizes:l,statefulTotalCount:d,totalCount:c,trackItemSizes:u},{initialItemFinalLocationReached:h,initialTopMostItemIndex:g,scrolledToInitialItem:m},f,p,b,{listState:v,topItemsIndexes:y,...x},{scrollToIndex:w},$,{topItemCount:F},{groupCounts:C},E])=>(Om(x.rangeChanged,E.scrollSeekRangeChanged),Om(Vm(E.windowViewportRect,Wm((e=>e.visibleHeight))),f.viewportHeight),{data:e,defaultItemHeight:t,firstItemIndex:r,fixedItemHeight:n,gap:o,groupCounts:C,initialItemFinalLocationReached:h,initialTopMostItemIndex:g,scrolledToInitialItem:m,sizeRanges:a,topItemCount:F,topItemsIndexes:y,totalCount:c,...b,groupIndices:i,itemSize:s,listState:v,scrollToIndex:w,statefulTotalCount:d,trackItemSizes:u,...x,...E,...f,sizes:l,...p})),Bm(Jf,lp,gf,_p,Ip,Cp,ip,Lp,Rp,tp,Pp));function Np(e,t){const r={},n={};let o=0;const i=e.length;for(;o<i;)n[e[o]]=1,o+=1;for(const e in t)Object.hasOwn(n,e)||(r[e]=t[e]);return r}const Vp=typeof document<"u"?o.useLayoutEffect:o.useEffect;function Yp(e,r,n){const i=Object.keys(r.required||{}),s=Object.keys(r.optional||{}),a=Object.keys(r.methods||{}),l=Object.keys(r.events||{}),d=o.createContext({});function c(e,t){e.propsReady&&Mm(e.propsReady,!1);for(const n of i){Mm(e[r.required[n]],t[n])}for(const n of s)if(n in t){Mm(e[r.optional[n]],t[n])}e.propsReady&&Mm(e.propsReady,!0)}function u(e){return l.reduce(((t,n)=>(t[n]=function(e){let t,r;const n=()=>null==t?void 0:t();return function(o,i){switch(o){case 1:return i?r===i?void 0:(n(),r=i,t=zm(e,i),t):(n(),Im);case 2:return n(),void(r=null)}}}(e[r.events[n]]),t)),{})}const h=o.forwardRef(((h,g)=>{const{children:m,...f}=h,[p]=o.useState((()=>Tm(function(e){const t=new Map,r=({constructor:e,dependencies:n,id:o,singleton:i})=>{if(i&&t.has(o))return t.get(o);const s=e(n.map((e=>r(e))));return i&&t.set(o,s),s};return r(e)}(e),(e=>{c(e,f)})))),[b]=o.useState(Em(u,p));Vp((()=>{for(const e of l)e in f&&zm(b[e],f[e]);return()=>{Object.values(b).map(Am)}}),[f,b,p]),Vp((()=>{c(p,f)})),o.useImperativeHandle(g,$m(function(e){return a.reduce(((t,n)=>(t[n]=t=>{Mm(e[r.methods[n]],t)},t)),{})}(p)));const v=n;return t(d.Provider,{value:p,children:n?t(v,{...Np([...i,...s,...l],f),children:m}):m})}));return{Component:h,useEmitter:(e,t)=>{const r=o.useContext(d)[e];Vp((()=>zm(r,t)),[t,r])},useEmitterValue:o.version.startsWith("18")?e=>{const t=o.useContext(d)[e],r=o.useCallback((e=>zm(t,e)),[t]);return o.useSyncExternalStore(r,(()=>_m(t)),(()=>_m(t)))}:e=>{const t=o.useContext(d)[e],[r,n]=o.useState(Em(_m,t));return Vp((()=>zm(t,(e=>{e!==r&&n($m(e))}))),[t,r]),r},usePublisher:e=>o.useCallback(Sm(Mm,o.useContext(d)[e]),[e])}}const Up=o.createContext(void 0),qp=o.createContext(void 0),Gp=typeof document<"u"?o.useLayoutEffect:o.useEffect;function Zp(e,t,r,n=Im,i,s){const a=o.useRef(null),l=o.useRef(null),d=o.useRef(null),c=o.useCallback((r=>{const n=r.target,o=n===window||n===document,i=s?o?window.pageXOffset||document.documentElement.scrollLeft:n.scrollLeft:o?window.pageYOffset||document.documentElement.scrollTop:n.scrollTop,a=s?o?document.documentElement.scrollWidth:n.scrollWidth:o?document.documentElement.scrollHeight:n.scrollHeight,c=s?o?window.innerWidth:n.offsetWidth:o?window.innerHeight:n.offsetHeight,u=()=>{e({scrollHeight:a,scrollTop:Math.max(i,0),viewportHeight:c})};r.suppressFlushSync?u():S.flushSync(u),null!==l.current&&(i===l.current||i<=0||i===a-c)&&(l.current=null,t(!0),d.current&&(clearTimeout(d.current),d.current=null))}),[e,t]);return o.useEffect((()=>{const e=i||a.current;return n(i||a.current),c({suppressFlushSync:!0,target:e}),e.addEventListener("scroll",c,{passive:!0}),()=>{n(null),e.removeEventListener("scroll",c)}}),[a,c,r,n,i]),{scrollByCallback:function(e){s&&(e={behavior:e.behavior,left:e.top}),a.current.scrollBy(e)},scrollerRef:a,scrollToCallback:function(r){const n=a.current;if(!n||(s?"offsetWidth"in n&&0===n.offsetWidth:"offsetHeight"in n&&0===n.offsetHeight))return;const o="smooth"===r.behavior;let i,c,u;n===window?(c=Math.max(jf(document.documentElement,s?"width":"height"),s?document.documentElement.scrollWidth:document.documentElement.scrollHeight),i=s?window.innerWidth:window.innerHeight,u=s?document.documentElement.scrollLeft:document.documentElement.scrollTop):(c=n[s?"scrollWidth":"scrollHeight"],i=jf(n,s?"width":"height"),u=n[s?"scrollLeft":"scrollTop"]);const h=c-i;if(r.top=Math.ceil(Math.max(Math.min(h,r.top),0)),dp(i,c)||r.top===u)return e({scrollHeight:c,scrollTop:u,viewportHeight:i}),void(o&&t(!0));o?(l.current=r.top,d.current&&clearTimeout(d.current),d.current=setTimeout((()=>{d.current=null,l.current=null,t(!0)}),1e3)):l.current=null,s&&(r={behavior:r.behavior,left:r.top}),n.scrollTo(r)}}}const Qp="-webkit-sticky",Xp="sticky",Kp=Hp((()=>{if(typeof document>"u")return Xp;const e=document.createElement("div");return e.style.position=Qp,e.style.position===Qp?Qp:Xp}));function Jp(e){return e}const eb=Jm((()=>{const e=Zm((e=>`Item ${e}`)),t=Zm(null),r=Zm((e=>`Group ${e}`)),n=Zm({}),o=Zm(Jp),i=Zm("div"),s=Zm(Im),a=(e,t=null)=>Qm(Vm(n,Wm((t=>t[e])),Lm()),t);return{components:n,computeItemKey:o,context:t,EmptyPlaceholder:a("EmptyPlaceholder"),FooterComponent:a("Footer"),GroupComponent:a("Group","div"),groupContent:r,HeaderComponent:a("Header"),HeaderFooterTag:i,ItemComponent:a("Item","div"),itemContent:e,ListComponent:a("List","div"),ScrollerComponent:a("Scroller","div"),scrollerRef:s,ScrollSeekPlaceholder:a("ScrollSeekPlaceholder"),TopItemListComponent:a("TopItemList")}})),tb=Jm((([e,t])=>({...e,...t})),Bm(Wp,eb)),rb=({height:e})=>t("div",{style:{height:e}}),nb={overflowAnchor:"none",position:Kp(),zIndex:1},ob={overflowAnchor:"none"},ib={...ob,display:"inline-block",height:"100%"},sb=o.memo((function({showTopList:e=!1}){const r=Fb("listState"),n=Cb("sizeRanges"),i=Fb("useWindowScroll"),s=Fb("customScrollParent"),a=Cb("windowScrollContainerState"),l=Cb("scrollContainerState"),d=s||i?a:l,c=Fb("itemContent"),u=Fb("context"),h=Fb("groupContent"),g=Fb("trackItemSizes"),m=Fb("itemSize"),f=Fb("log"),p=Cb("gap"),v=Fb("horizontalDirection"),{callbackRef:y}=cf(n,m,g,e?Im:d,f,p,s,v,Fb("skipAnimationFrameInResizeObserver")),[x,w]=o.useState(0);$b("deviation",(e=>{x!==e&&w(e)}));const $=Fb("EmptyPlaceholder"),F=Fb("ScrollSeekPlaceholder")||rb,C=Fb("ListComponent"),E=Fb("ItemComponent"),S=Fb("GroupComponent"),k=Fb("computeItemKey"),I=Fb("isSeeking"),T=Fb("groupIndices").length>0,D=Fb("alignToBottom"),B=Fb("initialItemFinalLocationReached"),z=e?{}:{boxSizing:"border-box",...v?{display:"inline-block",height:"100%",marginLeft:0!==x?x:D?"auto":0,paddingLeft:r.offsetTop,paddingRight:r.offsetBottom,whiteSpace:"nowrap"}:{marginTop:0!==x?x:D?"auto":0,paddingBottom:r.offsetBottom,paddingTop:r.offsetTop},...B?{}:{visibility:"hidden"}};return!e&&0===r.totalCount&&$?t($,{...ub($,u)}):t(C,{...ub(C,u),"data-testid":e?"virtuoso-top-item-list":"virtuoso-item-list",ref:y,style:z,children:(e?r.topItems:r.items).map((e=>{const t=e.originalIndex,n=k(t+r.firstItemIndex,e.data,u);return I?b(F,{...ub(F,u),height:e.size,index:e.index,key:n,type:e.type||"item",..."group"===e.type?{}:{groupIndex:e.groupIndex}}):"group"===e.type?b(S,{...ub(S,u),"data-index":t,"data-item-index":e.index,"data-known-size":e.size,key:n,style:nb},h(e.index,u)):b(E,{...ub(E,u),...hb(E,e.data),"data-index":t,"data-item-group-index":e.groupIndex,"data-item-index":e.index,"data-known-size":e.size,key:n,style:v?ib:ob},T?c(e.index,e.groupIndex,e.data,u):c(e.index,e.data,u))}))})})),ab={height:"100%",outline:"none",overflowY:"auto",position:"relative",WebkitOverflowScrolling:"touch"},lb={outline:"none",overflowX:"auto",position:"relative"},db=e=>({height:"100%",position:"absolute",top:0,width:"100%",...e?{display:"flex",flexDirection:"column"}:{}}),cb={position:Kp(),top:0,width:"100%",zIndex:1};function ub(e,t){if("string"!=typeof e)return{context:t}}function hb(e,t){return{item:"string"==typeof e?void 0:t}}const gb=o.memo((function(){const e=Fb("HeaderComponent"),r=Cb("headerHeight"),n=Fb("HeaderFooterTag"),i=lf(o.useMemo((()=>e=>{r(jf(e,"height"))}),[r]),!0,Fb("skipAnimationFrameInResizeObserver")),s=Fb("context");return e?t(n,{ref:i,children:t(e,{...ub(e,s)})}):null})),mb=o.memo((function(){const e=Fb("FooterComponent"),r=Cb("footerHeight"),n=Fb("HeaderFooterTag"),i=lf(o.useMemo((()=>e=>{r(jf(e,"height"))}),[r]),!0,Fb("skipAnimationFrameInResizeObserver")),s=Fb("context");return e?t(n,{ref:i,children:t(e,{...ub(e,s)})}):null}));function fb({useEmitter:e,useEmitterValue:r,usePublisher:n}){return o.memo((function({children:o,style:i,...s}){const a=n("scrollContainerState"),l=r("ScrollerComponent"),d=n("smoothScrollTargetReached"),c=r("scrollerRef"),u=r("context"),h=r("horizontalDirection")||!1,{scrollByCallback:g,scrollerRef:m,scrollToCallback:f}=Zp(a,d,l,c,void 0,h);return e("scrollTo",f),e("scrollBy",g),t(l,{"data-testid":"virtuoso-scroller","data-virtuoso-scroller":!0,ref:m,style:{...h?lb:ab,...i},tabIndex:0,...s,...ub(l,u),children:o})}))}function pb({useEmitter:e,useEmitterValue:r,usePublisher:n}){return o.memo((function({children:o,style:i,...s}){const a=n("windowScrollContainerState"),l=r("ScrollerComponent"),d=n("smoothScrollTargetReached"),c=r("totalListHeight"),u=r("deviation"),h=r("customScrollParent"),g=r("context"),{scrollByCallback:m,scrollerRef:f,scrollToCallback:p}=Zp(a,d,l,Im,h);return Gp((()=>(f.current=h||window,()=>{f.current=null})),[f,h]),e("windowScrollTo",p),e("scrollBy",m),t(l,{"data-virtuoso-scroller":!0,style:{position:"relative",...i,...0!==c?{height:c+u}:{}},...s,...ub(l,g),children:o})}))}const bb=({children:e})=>{const r=o.useContext(Up),n=Cb("viewportHeight"),i=Cb("fixedItemHeight"),s=Fb("alignToBottom"),a=Fb("horizontalDirection"),l=lf(o.useMemo((()=>Cm(n,(e=>jf(e,a?"width":"height")))),[n,a]),!0,Fb("skipAnimationFrameInResizeObserver"));return o.useEffect((()=>{r&&(n(r.viewportHeight),i(r.itemHeight))}),[r,n,i]),t("div",{"data-viewport-type":"element",ref:l,style:db(s),children:e})},vb=({children:e})=>{const r=o.useContext(Up),n=Cb("windowViewportRect"),i=Cb("fixedItemHeight"),s=Fb("customScrollParent"),a=hf(n,s,Fb("skipAnimationFrameInResizeObserver")),l=Fb("alignToBottom");return o.useEffect((()=>{r&&(i(r.itemHeight),n({offsetTop:0,visibleHeight:r.viewportHeight,visibleWidth:100}))}),[r,n,i]),t("div",{"data-viewport-type":"window",ref:a,style:db(l),children:e})},yb=({children:e})=>{const r=Fb("TopItemListComponent")||"div",n=Fb("headerHeight"),o={...cb,marginTop:`${n}px`},i=Fb("context");return t(r,{style:o,...ub(r,i),children:e})},xb=o.memo((function(r){const n=Fb("useWindowScroll"),o=Fb("topItemsIndexes").length>0,i=Fb("customScrollParent"),s=Fb("context"),a=i||n?Sb:Eb,l=i||n?vb:bb;return e(a,{...r,...ub(a,s),children:[o&&t(yb,{children:t(sb,{showTopList:!0})}),e(l,{children:[t(gb,{}),t(sb,{}),t(mb,{})]})]})})),{Component:wb,useEmitter:$b,useEmitterValue:Fb,usePublisher:Cb}=Yp(tb,{events:{atBottomStateChange:"atBottomStateChange",atTopStateChange:"atTopStateChange",endReached:"endReached",groupIndices:"groupIndices",isScrolling:"isScrolling",itemsRendered:"itemsRendered",rangeChanged:"rangeChanged",startReached:"startReached",totalListHeightChanged:"totalListHeightChanged"},methods:{autoscrollToBottom:"autoscrollToBottom",getState:"getState",scrollBy:"scrollBy",scrollIntoView:"scrollIntoView",scrollTo:"scrollTo",scrollToIndex:"scrollToIndex"},optional:{alignToBottom:"alignToBottom",atBottomThreshold:"atBottomThreshold",atTopThreshold:"atTopThreshold",components:"components",computeItemKey:"computeItemKey",context:"context",customScrollParent:"customScrollParent",data:"data",defaultItemHeight:"defaultItemHeight",firstItemIndex:"firstItemIndex",fixedItemHeight:"fixedItemHeight",followOutput:"followOutput",groupContent:"groupContent",groupCounts:"groupCounts",headerFooterTag:"HeaderFooterTag",horizontalDirection:"horizontalDirection",increaseViewportBy:"increaseViewportBy",initialItemCount:"initialItemCount",initialScrollTop:"initialScrollTop",initialTopMostItemIndex:"initialTopMostItemIndex",itemContent:"itemContent",itemSize:"itemSize",logLevel:"logLevel",overscan:"overscan",restoreStateFrom:"restoreStateFrom",scrollerRef:"scrollerRef",scrollSeekConfiguration:"scrollSeekConfiguration",skipAnimationFrameInResizeObserver:"skipAnimationFrameInResizeObserver",topItemCount:"topItemCount",totalCount:"totalCount",useWindowScroll:"useWindowScroll"},required:{}},xb),Eb=fb({useEmitter:$b,useEmitterValue:Fb,usePublisher:Cb}),Sb=pb({useEmitter:$b,useEmitterValue:Fb,usePublisher:Cb}),kb=wb,Ib={bottom:0,itemHeight:0,items:[],itemWidth:0,offsetBottom:0,offsetTop:0,top:0},Tb={bottom:0,itemHeight:0,items:[{index:0}],itemWidth:0,offsetBottom:0,offsetTop:0,top:0},{ceil:Db,floor:Bb,max:zb,min:Mb,round:Ab}=Math;function _b(e,t,r){return Array.from({length:t-e+1}).map(((t,n)=>({data:null===r?null:r[n+e],index:n+e})))}function Ob(e,t){return e&&e.width===t.width&&e.height===t.height}function Rb(e,t){return e&&e.column===t.column&&e.row===t.row}const Hb=Jm((([{increaseViewportBy:e,listBoundary:t,overscan:r,visibleRange:n},{footerHeight:o,headerHeight:i,scrollBy:s,scrollContainerState:a,scrollTo:l,scrollTop:d,smoothScrollTargetReached:c,viewportHeight:u},h,g,{didMount:m,propsReady:f},{customScrollParent:p,useWindowScroll:b,windowScrollContainerState:v,windowScrollTo:y,windowViewportRect:x},w])=>{const $=Zm(0),F=Zm(0),C=Zm(Ib),E=Zm({height:0,width:0}),S=Zm({height:0,width:0}),k=Xm(),I=Xm(),T=Zm(0),D=Zm(null),B=Zm({column:0,row:0}),z=Xm(),M=Xm(),A=Zm(!1),_=Zm(0),O=Zm(!0),R=Zm(!1),H=Zm(!1);zm(Vm(m,Gm(_),Pm((([e,t])=>!!t))),(()=>{Mm(O,!1)})),zm(Vm(tf(m,O,S,E,_,R),Pm((([e,t,r,n,,o])=>e&&!t&&0!==r.height&&0!==n.height&&!o))),(([,,,,e])=>{Mm(R,!0),sp(1,(()=>{Mm(k,e)})),Rm(Vm(d),(()=>{Mm(t,[0,0]),Mm(O,!0)}))})),Om(Vm(M,Pm((e=>null!=e&&e.scrollTop>0)),Nm(0)),F),zm(Vm(m,Gm(M),Pm((([,e])=>null!=e))),(([,e])=>{e&&(Mm(E,e.viewport),Mm(S,e.item),Mm(B,e.gap),e.scrollTop>0&&(Mm(A,!0),Rm(Vm(d,Um(1)),(e=>{Mm(A,!1)})),Mm(l,{top:e.scrollTop})))})),Om(Vm(E,Wm((({height:e})=>e))),u),Om(Vm(tf(rf(E,Ob),rf(S,Ob),rf(B,((e,t)=>e&&e.column===t.column&&e.row===t.row)),rf(d)),Wm((([e,t,r,n])=>({gap:r,item:t,scrollTop:n,viewport:e})))),z),Om(Vm(tf(rf($),n,rf(B,Rb),rf(S,Ob),rf(E,Ob),rf(D),rf(F),rf(A),rf(O),rf(_)),Pm((([,,,,,,,e])=>!e)),Wm((([e,[t,r],n,o,i,s,a,,l,d])=>{const{column:c,row:u}=n,{height:h,width:g}=o,{width:m}=i;if(0===a&&(0===e||0===m))return Ib;if(0===g){const t=ap(d,e);return function(e){return{...Tb,items:e}}(_b(t,t+Math.max(a-1,0),s))}const f=jb(m,g,c);let p,b;l?0===t&&0===r&&a>0?(p=0,b=a-1):(p=f*Bb((t+u)/(h+u)),b=f*Db((r+u)/(h+u))-1,b=Mb(e-1,zb(b,f-1)),p=Mb(b,zb(0,p))):(p=0,b=-1);const v=_b(p,b,s),{bottom:y,top:x}=Lb(i,n,o,v),w=Db(e/f);return{bottom:y,itemHeight:h,items:v,itemWidth:g,offsetBottom:w*h+(w-1)*u-y,offsetTop:x,top:x}}))),C),Om(Vm(D,Pm((e=>null!==e)),Wm((e=>e.length))),$),Om(Vm(tf(E,S,C,B),Pm((([e,t,{items:r}])=>r.length>0&&0!==t.height&&0!==e.height)),Wm((([e,t,{items:r},n])=>{const{bottom:o,top:i}=Lb(e,n,t,r);return[i,o]})),Lm(_f)),t);const j=Zm(!1);Om(Vm(d,Gm(j),Wm((([e,t])=>t||0!==e))),j);const L=Km(Vm(tf(C,$),Pm((([{items:e}])=>e.length>0)),Gm(j),Pm((([[e,t],r])=>{const n=e.items[e.items.length-1].index===t-1;return(r||e.bottom>0&&e.itemHeight>0&&0===e.offsetBottom&&e.items.length===t)&&n})),Wm((([[,e]])=>e-1)),Lm())),P=Km(Vm(rf(C),Pm((({items:e})=>e.length>0&&0===e[0].index)),Nm(0),Lm())),W=Km(Vm(rf(C),Gm(A),Pm((([{items:e},t])=>e.length>0&&!t)),Wm((([{items:e}])=>({endIndex:e[e.length-1].index,startIndex:e[0].index}))),Lm(Af),qm(0)));Om(W,g.scrollSeekRangeChanged),Om(Vm(k,Gm(E,S,$,B),Wm((([e,t,r,n,o])=>{const i=op(e),{align:s,behavior:a,offset:l}=i;let d=i.index;"LAST"===d&&(d=n-1),d=zb(0,d,Mb(n-1,d));let c=Pb(t,o,r,d);return"end"===s?c=Ab(c-t.height+r.height):"center"===s&&(c=Ab(c-t.height/2+r.height/2)),l&&(c+=l),{behavior:a,top:c}}))),l);const N=Qm(Vm(C,Wm((e=>e.offsetBottom+e.bottom))),0);return Om(Vm(x,Wm((e=>({height:e.visibleHeight,width:e.visibleWidth})))),E),{customScrollParent:p,data:D,deviation:T,footerHeight:o,gap:B,headerHeight:i,increaseViewportBy:e,initialItemCount:F,itemDimensions:S,overscan:r,restoreStateFrom:M,scrollBy:s,scrollContainerState:a,scrollHeight:I,scrollTo:l,scrollToIndex:k,scrollTop:d,smoothScrollTargetReached:c,totalCount:$,useWindowScroll:b,viewportDimensions:E,windowScrollContainerState:v,windowScrollTo:y,windowViewportRect:x,...g,gridState:C,horizontalDirection:H,initialTopMostItemIndex:_,totalListHeight:N,...h,endReached:L,propsReady:f,rangeChanged:W,startReached:P,stateChanged:z,stateRestoreInProgress:A,...w}}),Bm(yp,gf,gp,Mp,rp,Ap,af));function jb(e,t,r){return zb(1,Bb((e+r)/(Bb(t)+r)))}function Lb(e,t,r,n){const{height:o}=r;if(void 0===o||0===n.length)return{bottom:0,top:0};const i=Pb(e,t,r,n[0].index);return{bottom:Pb(e,t,r,n[n.length-1].index)+o,top:i}}function Pb(e,t,r,n){const o=jb(e.width,r.width,t.column),i=Bb(n/o),s=i*r.height+zb(0,i-1)*t.row;return s>0?s+t.row:s}const Wb=Jm((()=>{const e=Zm((e=>`Item ${e}`)),t=Zm({}),r=Zm(null),n=Zm("virtuoso-grid-item"),o=Zm("virtuoso-grid-list"),i=Zm(Jp),s=Zm("div"),a=Zm(Im),l=(e,r=null)=>Qm(Vm(t,Wm((t=>t[e])),Lm()),r),d=Zm(!1),c=Zm(!1);return Om(rf(c),d),{components:t,computeItemKey:i,context:r,FooterComponent:l("Footer"),HeaderComponent:l("Header"),headerFooterTag:s,itemClassName:n,ItemComponent:l("Item","div"),itemContent:e,listClassName:o,ListComponent:l("List","div"),readyStateChanged:d,reportReadyState:c,ScrollerComponent:l("Scroller","div"),scrollerRef:a,ScrollSeekPlaceholder:l("ScrollSeekPlaceholder","div")}})),Nb=Jm((([e,t])=>({...e,...t})),Bm(Hb,Wb)),Vb=o.memo((function(){const e=Kb("gridState"),r=Kb("listClassName"),n=Kb("itemClassName"),i=Kb("itemContent"),s=Kb("computeItemKey"),a=Kb("isSeeking"),l=Jb("scrollHeight"),d=Kb("ItemComponent"),c=Kb("ListComponent"),u=Kb("ScrollSeekPlaceholder"),h=Kb("context"),g=Jb("itemDimensions"),m=Jb("gap"),f=Kb("log"),p=Kb("stateRestoreInProgress"),v=Jb("reportReadyState"),y=lf(o.useMemo((()=>e=>{const t=e.parentElement.parentElement.scrollHeight;l(t);const r=e.firstChild;if(r){const{height:e,width:t}=r.getBoundingClientRect();g({height:e,width:t})}m({column:rv("column-gap",getComputedStyle(e).columnGap,f),row:rv("row-gap",getComputedStyle(e).rowGap,f)})}),[l,g,m,f]),!0,!1);return Gp((()=>{e.itemHeight>0&&e.itemWidth>0&&v(!0)}),[e]),p?null:t(c,{className:r,ref:y,...ub(c,h),"data-testid":"virtuoso-item-list",style:{paddingBottom:e.offsetBottom,paddingTop:e.offsetTop},children:e.items.map((r=>{const o=s(r.index,r.data,h);return a?t(u,{...ub(u,h),height:e.itemHeight,index:r.index,width:e.itemWidth},o):b(d,{...ub(d,h),className:n,"data-index":r.index,key:o},i(r.index,r.data,h))}))})})),Yb=o.memo((function(){const e=Kb("HeaderComponent"),r=Jb("headerHeight"),n=Kb("headerFooterTag"),i=lf(o.useMemo((()=>e=>{r(jf(e,"height"))}),[r]),!0,!1),s=Kb("context");return e?t(n,{ref:i,children:t(e,{...ub(e,s)})}):null})),Ub=o.memo((function(){const e=Kb("FooterComponent"),r=Jb("footerHeight"),n=Kb("headerFooterTag"),i=lf(o.useMemo((()=>e=>{r(jf(e,"height"))}),[r]),!0,!1),s=Kb("context");return e?t(n,{ref:i,children:t(e,{...ub(e,s)})}):null})),qb=({children:e})=>{const r=o.useContext(qp),n=Jb("itemDimensions"),i=Jb("viewportDimensions"),s=lf(o.useMemo((()=>e=>{i(e.getBoundingClientRect())}),[i]),!0,!1);return o.useEffect((()=>{r&&(i({height:r.viewportHeight,width:r.viewportWidth}),n({height:r.itemHeight,width:r.itemWidth}))}),[r,i,n]),t("div",{ref:s,style:db(!1),children:e})},Gb=({children:e})=>{const r=o.useContext(qp),n=Jb("windowViewportRect"),i=Jb("itemDimensions"),s=Kb("customScrollParent"),a=hf(n,s,!1);return o.useEffect((()=>{r&&(i({height:r.itemHeight,width:r.itemWidth}),n({offsetTop:0,visibleHeight:r.viewportHeight,visibleWidth:r.viewportWidth}))}),[r,n,i]),t("div",{ref:a,style:db(!1),children:e})},Zb=o.memo((function({...r}){const n=Kb("useWindowScroll"),o=Kb("customScrollParent"),i=o||n?tv:ev,s=o||n?Gb:qb,a=Kb("context");return t(i,{...r,...ub(i,a),children:e(s,{children:[t(Yb,{}),t(Vb,{}),t(Ub,{})]})})})),{Component:Qb,useEmitter:Xb,useEmitterValue:Kb,usePublisher:Jb}=Yp(Nb,{events:{atBottomStateChange:"atBottomStateChange",atTopStateChange:"atTopStateChange",endReached:"endReached",isScrolling:"isScrolling",rangeChanged:"rangeChanged",readyStateChanged:"readyStateChanged",startReached:"startReached",stateChanged:"stateChanged"},methods:{scrollBy:"scrollBy",scrollTo:"scrollTo",scrollToIndex:"scrollToIndex"},optional:{components:"components",computeItemKey:"computeItemKey",context:"context",customScrollParent:"customScrollParent",data:"data",headerFooterTag:"headerFooterTag",increaseViewportBy:"increaseViewportBy",initialItemCount:"initialItemCount",initialTopMostItemIndex:"initialTopMostItemIndex",itemClassName:"itemClassName",itemContent:"itemContent",listClassName:"listClassName",logLevel:"logLevel",overscan:"overscan",restoreStateFrom:"restoreStateFrom",scrollerRef:"scrollerRef",scrollSeekConfiguration:"scrollSeekConfiguration",totalCount:"totalCount",useWindowScroll:"useWindowScroll"}},Zb),ev=fb({useEmitter:Xb,useEmitterValue:Kb,usePublisher:Jb}),tv=pb({useEmitter:Xb,useEmitterValue:Kb,usePublisher:Jb});function rv(e,t,r){return"normal"!==t&&!(null!=t&&t.endsWith("px"))&&r(`${e} was not resolved to pixel value correctly`,t,of.WARN),"normal"===t?0:parseInt(null!=t?t:"0",10)}const nv=o.createContext({focusedIndex:-1,setFocusedIndex:()=>{}}),ov=({children:e})=>{const[r,n]=a(-1);return t(nv.Provider,{value:{focusedIndex:r,setFocusedIndex:n},children:e})},iv=x.div`
    overflow: hidden;
    border: ${kn["width-010"]} ${kn.solid} ${Cn.border};
    border-radius: ${Tn.sm};
    background: ${Cn.bg};

    min-width: 23rem;
    ${e=>e.$width&&`width: ${e.$width}px;`}
    max-height: 27rem;
    overflow-y: auto;

    ${e=>"small"===e.$variant?En["body-md-regular"]:En["body-baseline-regular"]}

    ${Bn.MaxWidth.sm} {
        min-width: unset;
        width: calc(100vw - ${Dn["sm-margin"]} * 2);
        max-height: 15rem;
    }

    ${Bn.MaxWidth.xs} {
        width: calc(100vw - ${Dn["xs-margin"]} * 2);
    }

    ${Bn.MaxWidth.xxs} {
        width: calc(100vw - ${Dn["xxs-margin"]} * 2);
    }

    ::-webkit-scrollbar {
        width: 14px;
    }

    ::-webkit-scrollbar-track {
        background: transparent;
    }

    ::-webkit-scrollbar-thumb {
        background: ${Cn["bg-inverse-subtlest"]};
        border: 5px solid transparent;
        border-radius: 9999px;
        background-clip: padding-box;
    }
`,sv=x.div`
    background: transparent;
    padding: ${In["spacing-8"]};
`,av=x.ul`
    list-style-type: none;
`,lv=x.li`
    display: flex;
    align-items: flex-start;
    gap: ${In["spacing-8"]};
    padding: ${In["spacing-12"]} ${In["spacing-8"]};
    cursor: pointer;

    outline: none;

    ${e=>e.$disabled?w`
                cursor: not-allowed;
            `:e.$active&&e.$selected?w`
                background: ${Cn["bg-hover"]};
            `:e.$active?w`
                background: ${Cn["bg-hover-subtle"]};
            `:void 0}
`,dv=x(L)`
    flex-shrink: 0;
    height: 1lh;
    width: 1rem;
    color: ${Cn["icon-selected"]};
`,cv=x.div`
    flex-shrink: 0;
    height: 1lh;
    width: 1rem;
`,uv=x(j)`
    flex-shrink: 0;
    height: 1lh;
    width: 1lh;
    color: ${Cn["icon-selected"]};
`,hv=x(H)`
    flex-shrink: 0;
    height: 1lh;
    width: 1lh;
    color: ${Cn["icon-primary-subtlest"]};
`,gv=x(P)`
    flex-shrink: 0;
    height: 1lh;
    width: 1lh;
    color: ${Cn["icon-disabled-subtle"]};
`,mv=x.div`
    width: 100%;
    display: flex;
    justify-content: flex-end;
`,fv=x(Yn)`
    cursor: pointer;
    overflow: hidden;
    color: ${Cn["text-primary"]};
    font-size: inherit;
`,pv=x(fv)`
    ${En["body-baseline-semibold"]}
`,bv=x(fv)`
    ${En["body-md-semibold"]}
    padding: ${In["spacing-8"]} ${In["spacing-8"]};
`,vv=x.div`
    width: 100%;
    display: flex;
    padding: ${In["spacing-12"]} ${In["spacing-16"]};
    align-items: center;
`,yv=x(D)`
    margin-right: ${In["spacing-4"]};
    color: ${Cn["icon-error"]};
    height: 1em;
    width: 1em;
`,xv=x(Hl)`
    margin-right: ${In["spacing-8"]};
    color: ${Cn.icon};
`,wv=x.div`
    ${Cd()}
    color: ${Cn["text-subtle"]};
    padding: 0 ${In["spacing-16"]} ${In["spacing-12"]}
        ${In["spacing-16"]};
`,$v=x.div`
    background: ${Cn["bg-strong"]};
    border-radius: ${Tn.sm};
    display: flex;
    align-items: center;

    ${e=>"small"===e.$variant?En["body-md-regular"]:En["body-baseline-regular"]}
`,Fv=x.label`
    flex: 1;
    display: flex;
    align-items: center;
    gap: ${In["spacing-8"]};
    padding: ${e=>"small"===e.$variant?w`
                  ${In["spacing-8"]} ${In["spacing-16"]}
              `:w`10px ${In["spacing-16"]}`};
`,Cv=x(Vn)`
    flex: 1;
`,Ev=x(W)`
    color: ${Cn.icon};
    flex-shrink: 0;
    height: 1em;
    width: 1em;
`,Sv=x(ac)`
    flex-shrink: 0;
    align-self: stretch;
    box-sizing: content-box;
    padding: ${In["spacing-8"]};
    margin-left: -${In["spacing-8"]};
    color: ${Cn.icon};
    cursor: pointer;
    font-size: inherit;

    svg {
        flex-shrink: 0;
        height: 1em;
        width: 1em;
    }
`,kv=g(((r,n)=>{var{value:o,variant:i,onClear:s}=r,a=oe(r,["value","variant","onClear"]);return e($v,{$variant:i,children:[e(Fv,{$variant:i,children:[t(Ev,{"aria-hidden":!0}),t(Cv,Object.assign({ref:n,value:o,$variant:i},a))]}),o&&t(Sv,{"aria-label":"Clear search",focusOutline:"browser",onClick:s,children:t(R,{"aria-hidden":!0})})]})})),Iv=({listItems:n,multiSelect:o,maxSelectable:l,selectedItems:d,disableItemFocus:c,itemsLoadState:u="success",itemTruncationType:h="end",itemMaxLines:g=2,labelDisplayType:p="inline",variant:b="default",listboxId:v,width:y,topScrollItem:x,onSelectItem:w,onSelectAll:$,onDismiss:F,onRetry:C,valueExtractor:E,listExtractor:S,renderListItem:k,renderCustomCallToAction:I,enableSearch:T,hideNoResultsDisplay:D,noResultsDescription:B,searchPlaceholder:z="Search",searchFunction:M,onSearch:A})=>{const{focusedIndex:_,setFocusedIndex:O}=f(nv),[R,H]=a(""),[j,L]=a(null!=n?n:[]),P=Fd(u),W=(()=>{const[e,t]=a(!1);return s((()=>{t(!0)}),[]),e})(),N=i(null),V=i(null),Y=i([]),U=i(null),q=i(null),G=!!l&&!!d&&(null==d?void 0:d.length)===l,Z=e=>{const t=S?S(e):null==e?void 0:e.toString();return"object"==typeof t?{title:t.title,secondaryLabel:t.secondaryLabel}:{title:null!=t?t:""}},Q=m((e=>!!ym(d,(t=>wm(t,e)))),[d]),X=$d((()=>null==M?void 0:M(R))),K=$d((()=>null==n?void 0:n.filter((e=>{const{title:t,secondaryLabel:r}=Z(e),n=R.trim().toLowerCase();return t.includes(n)||r&&r.includes(n)})))),J=(e,t)=>{G&&!Q(e)||(O(t),null==w||w(e,(e=>E?E(e):e)(e)))},ee=e=>{const t=e.target.value;H(t),null==A||A()},te=()=>{var e;H(""),null===(e=U.current)||void 0===e||e.focus(),null==A||A()},re=()=>{null==C||C()};ie("keydown",(e=>{var t,r;switch(e.code){case"ArrowDown":if(e.preventDefault(),_<j.length-1){const e=_+1;null===(t=Y.current[e])||void 0===t||t.focus(),O(e)}break;case"ArrowUp":if(e.preventDefault(),_>0){const e=_-1;null===(r=Y.current[e])||void 0===r||r.focus(),O(e)}else 0===_&&U.current&&(U.current.focus(),O(-1));break;case"Space":case"Enter":document.activeElement===Y.current[_]&&(e.preventDefault(),j[_]&&J(j[_],_))}})),s((()=>{var e;if(!x)return void(null===(e=q.current)||void 0===e||e.scrollTo({top:0}));const t=setTimeout((()=>{if(!n)return;const e=n.indexOf(x);q.current&&-1!==e&&(q.current.scrollToIndex({index:e}),O(e))}),0);return()=>clearTimeout(t)}),[Y,n,O,x]),s((()=>{var e,t,r;if(W)return;if(c||!n)return;const o=n.findIndex((e=>Q(e)));U.current?(O(-1),setTimeout((()=>{var e;return null===(e=U.current)||void 0===e?void 0:e.focus()}),200)):_>0?(null===(e=q.current)||void 0===e||e.scrollToIndex({index:_,align:"center"}),setTimeout((()=>{var e;return null===(e=Y.current[_])||void 0===e?void 0:e.focus()}),200)):-1!==o?(null===(t=q.current)||void 0===t||t.scrollToIndex({index:o,align:"center"}),O(o),setTimeout((()=>{var e;return null===(e=Y.current[o])||void 0===e?void 0:e.focus()}),200)):(null===(r=q.current)||void 0===r||r.scrollToIndex({index:0}),O(0),setTimeout((()=>{var e;return null===(e=Y.current[0])||void 0===e?void 0:e.focus()}),200))}),[Q,c,_,n,W,O]),s((()=>{W&&P&&(c||"success"===u&&U.current&&(O(-1),U.current.focus()))}),[W,P,u,O,c]),s((()=>{var e;L(null!==(e=""===R?n:M?X():K())&&void 0!==e?e:[])}),[X,K,n,M,R]);const ne=e=>o?t(G&&!e?gv:e?uv:hv,{"aria-hidden":!0}):e?t(dv,{"aria-hidden":!0}):t(cv,{}),oe=(e,r)=>{const{title:n,secondaryLabel:o}=Z(e);return t(Pc,{displayType:p,label:n,maxLines:g,selected:r,disabled:!r&&G,sublabel:o,truncationType:h,variant:b})},se=(n,i)=>{if(!C||"success"===u){const s=Q(n),a=i===_;return t(lv,{"aria-selected":s,"aria-multiselectable":o,"aria-disabled":!s&&G,"data-testid":"list-item",onClick:()=>J(n,i),onMouseEnter:()=>(e=>{O(e)})(i),ref:e=>{Y.current[i]=e},role:"option",tabIndex:a?0:-1,$active:a,$selected:s,$disabled:!s&&G,children:k?k(n,{selected:s}):e(r,{children:[ne(s),oe(n,s)]})},((e,t)=>`item_${t}__${E?E(e):e}`)(n,i))}},ae=()=>{if(d&&o&&j.length>0&&!R&&"success"===u)return t(mv,{children:t(bv,{onClick:$,type:"button",$variant:b,children:l||0!==d.length?"Clear all":"Select all"})})},le=()=>{if(!D&&(R||!T)&&0===j.length&&"success"===u)return e(r,{children:[e(vv,{"data-testid":"list-no-results",children:[t(yv,{"data-testid":"no-result-icon"}),"No results found."]}),B&&t(wv,{"data-testid":"no-result-desc",children:B})]})},de=()=>{if(C&&"loading"===u)return e(vv,{"data-testid":"list-loading",children:[t(xv,{}),"Loading..."]})},ce=()=>{if(C&&"fail"===u)return e(vv,{"data-testid":"list-fail",children:[t(yv,{"data-testid":"load-error-icon"}),"Failed to load. ",t(pv,{onClick:re,type:"button",$variant:b,children:"Try again."})]})},ue=()=>{var e;const r="test"===process.env.NODE_ENV;return t(av,{role:"listbox",id:v,children:t(kb,Object.assign({ref:q,style:{height:"100%"},data:j,customScrollParent:null!==(e=N.current)&&void 0!==e?e:void 0,itemContent:(e,t)=>se(t,e)},r?{initialItemCount:j.length}:{}),r?j.length:void 0)})};return e(iv,{"data-testid":"dropdown-container",ref:N,$width:y,$variant:b,children:[e(sv,{ref:V,"data-testid":"dropdown-list",children:[(()=>{if((T||M)&&"success"===u)return t(kv,{ref:U,onChange:ee,value:R,placeholder:z,"data-testid":"search-input","aria-label":"Enter text to search",onClear:te,variant:b})})(),ae(),le(),de(),ce(),ue()]}),(()=>{if(I)return t("div",{"data-testid":"custom-cta",children:I(F,j)})})()]})},Tv=x(Yn)`
    display: flex;
    align-items: center;
    gap: ${In["spacing-8"]};
    width: 100%;
    height: calc(3rem - 2px); // exclude top and bottom borders
    padding: ${In["spacing-16"]};

    ${e=>"small"===e.$variant?En["body-md-regular"]:En["body-baseline-regular"]}

    :disabled {
        cursor: not-allowed;
    }
`,Dv=x.div`
    display: flex;
    align-items: center;
    transform: rotate(${e=>e.$expanded?180:0}deg);
    transition: transform ${Sn["duration-250"]} ${Sn["ease-default"]};

    svg {
        color: ${Cn.icon};
        height: 1em;
        width: 1em;
    }
`;var Bv;g((({children:r,disabled:n,expanded:o,listboxId:i,popupRole:s,readOnly:a,variant:l},d)=>e(Tv,{ref:d,type:"button","aria-expanded":o,"aria-haspopup":s,"data-testid":"selector",disabled:n,"aria-controls":i,$variant:l,children:[r,!a&&t(Dv,{$expanded:o,$variant:l,children:t(C,{"aria-hidden":!0})})]}))),x.li`
    display: ${e=>e.$visible?"flex":"none"};
`,x.div`
    flex: 1;
    display: flex;
    align-items: flex-start;
    gap: ${In["spacing-8"]};
    padding: ${In["spacing-12"]} ${In["spacing-8"]};
    cursor: ${e=>e.$toggleable?"default":"pointer"};
    overflow: hidden; // required for label to truncate properly

    outline: none;

    ${e=>e.$active&&w`
            background: ${Cn["bg-hover"]};
        `}
`,x.div`
    height: 1px;
    width: calc((1lh + ${In["spacing-8"]}) * ${e=>e.$level});
`,x.div`
    width: 1lh;
    height: 1lh;
    color: ${Cn["icon-primary"]};
    cursor: pointer;

    svg {
        width: 1lh;
        height: 1lh;
        transition: transform ${Sn["duration-350"]}
            ${Sn["ease-standard"]};

        ${e=>{if(e.$expanded)return w`
                    transform: rotate(90deg);
                `}}
    }
`,x.div`
    width: 1lh;
    height: 1lh;
    margin-right: ${In["spacing-8"]};
`,x.div`
    flex-shrink: 0;
    height: 1lh;
    width: ${e=>e.$hasNestedSiblings?"1lh":In["spacing-16"]};

    display: flex;
    justify-content: center;
`,x(N)`
    flex-shrink: 0;
    height: 1lh;
    width: 1lh;
    color: ${Cn["icon-selected"]};
`,function(e){e.Ready="overlay-context-ready",e.Change="overlay-context-change"}(Bv||(Bv={}));const zv=x.div`
    display: flex;
    flex-direction: column;
`,Mv=e=>"right"===e?"bottom-end":"bottom-start",Av=({enabled:n,isOpen:o,onOpen:l,onClose:d,onDismiss:c,renderElement:u,renderDropdown:h,customZIndex:g,clickToToggle:m=!1,offset:f=0,alignment:p="left",fitAvailableHeight:b})=>{var v;const y=F(),x=Dn["sm-max"]({theme:y}),w=i(null),$=i(null),{width:C=0}=Jo({targetRef:w,handleHeight:!1}),E={name:"center",fn:({x:e,rects:t})=>{const r=0===e||e+t.floating.width===window.innerWidth,n=window.innerWidth<x;return{x:r&&n?(window.innerWidth-t.floating.width)/2:e}}},{refs:S,floatingStyles:k,context:I}=Y({open:o,onOpenChange:(e,t,r)=>{"escape-key"===r?null==c||c():e&&!o?null==l||l():!e&&o&&(null==d||d(r))},whileElementsMounted:U,placement:Mv(p),middleware:[q(f),G(),Z({limiter:Q()}),X({apply({availableHeight:e}){$.current&&Object.assign($.current.style,{maxHeight:b?`${e}px`:void 0,overflowY:b?"hidden":void 0})}}),E]}),T=(()=>{const[e,t]=a(void 0),r=V();return s((()=>{if(!r)return void t(void 0);const e=e=>{t(e.zIndex)};return r.events.on(Bv.Change,e),r.events.emit(Bv.Ready),()=>r.events.off(Bv.Change,e)}),[r]),e})(),{isMounted:D,styles:B}=K(I,{initial:{opacity:0},open:{opacity:1},duration:300}),z=J(I,{enabled:n,toggle:m}),M=ee(I,{enabled:n}),{getReferenceProps:A,getFloatingProps:_}=te([z,M]);return e(r,{children:[t("div",Object.assign({ref:e=>{w.current=e,S.setReference(e)}},A(),{children:u()})),D&&t(re,{children:t(ne,{context:I,modal:!1,initialFocus:$,returnFocus:!1,children:t("div",Object.assign({ref:S.setFloating,style:Object.assign(Object.assign({},k),{zIndex:null!==(v=null!=g?g:T)&&void 0!==v?v:50})},_(),{children:t(zv,{ref:$,style:Object.assign({},B),inert:B.opacity<1?"":void 0,children:h({elementWidth:C})})}))})})]})},_v=x(Nn)`
    height: 3rem;
    gap: ${In["spacing-8"]};
    // space for clear icon
    padding-right: calc(1.25rem + ${In["spacing-20"]});
`,Ov=r=>{var{id:n,disabled:o=!1,error:l,value:d,format:c="12hr",readOnly:u,onChange:h,onFocus:g,onBlur:f,alignment:b="left",dropdownZIndex:v,startLimit:y,endLimit:x,interval:w=15}=r,$=oe(r,["id","disabled","error","value","format","readOnly","onChange","onFocus","onBlur","alignment","dropdownZIndex","startLimit","endLimit","interval"]);const[F]=a((()=>wd.generate())),[C,E]=a(null),[S,k]=a(!1),[I,T]=a(""),[D,B]=a(""),[z,M]=a(""),[A,_]=a(""),[O,R]=a(""),H=i(null),j=i(null),L=i(null),P=p((()=>Kn.generateTimings(w,c,y,x)),[w,c,y,x]),W=p((()=>{if(""===A)return P;const e=Kn.findClosestFlooredTime(A,P);return e?P.slice(P.indexOf(e)):[]}),[P,A]),N=m((e=>Kn.parseInput(e,c)),[c]);s((()=>{var e,t;if(d){const r=null!==(e=N(d.start))&&void 0!==e?e:"",n=null!==(t=N(d.end))&&void 0!==t?t:"";B(r),M(n),_(r),R(n)}}),[d,N]),s((()=>{if(l)return void k(!1);const e=N(D),t=N(z);if(void 0===e)T("Invalid start time");else if(void 0===t)T("Invalid end time");else{if(!(""!==e&&""!==t&&Kn.to24Hour(t)<Kn.to24Hour(e)))return T(""),void(document.activeElement!==j.current&&document.activeElement!==L.current||k(!0));T("End time must be after start time")}k(!1)}),[D,z,N,l]);const V=e=>{o||u||(C||S||null==g||g(),E(e),k(!0))},Y=e=>{var t;o||u||(E(e),k(!0),null===(t=("start"===e?j:L).current)||void 0===t||t.select())};function U(e){var t;switch(e.code){case"Enter":"start"===C?q(D):"end"===C&&(S&&G(z),null===(t=L.current)||void 0===t||t.blur());break;case"Tab":Z(D,z,{})}}const q=e=>{Z(e,z,{goToNextInput:!0})},G=e=>{Z(D,e,{triggerOnBlur:!0})},Z=(e,t,{goToNextInput:r,triggerOnBlur:n})=>{var o,i,s;const a=null!==(o=N(e))&&void 0!==o?o:A,l=null!==(i=N(t))&&void 0!==i?i:O;B(a),M(l);a===A&&l===O||null==h||h({start:a,end:l}),r&&void 0!==N(e)&&(E("end"),null===(s=L.current)||void 0===s||s.select()),n&&(E(null),k(!1),null==f||f()),_(a),R(l)},Q=e=>{e.stopPropagation(),B(""),M(""),_(""),R("");null==h||h({start:"",end:""}),E(null),k(!1)},X=e=>{H.current&&!H.current.contains(e.relatedTarget)&&C&&!S&&Z(D,z,{triggerOnBlur:!0})},K=()=>{if(!u&&!o&&((null==D?void 0:D.length)>0||(null==z?void 0:z.length)>0))return t(Ac,{onClick:Q,type:"button","aria-label":"Clear",children:t(Ic,{"aria-hidden":!0})})};return e(Un,Object.assign({id:n},$,{children:[t(ov,{children:t(Av,{enabled:!u&&!o,isOpen:S,renderElement:()=>e(_v,{ref:H,$disabled:o,$error:l||!!I,$readOnly:u,onBlur:X,children:[e(Rn,{error:l||!!I,currentActive:null===C?"none":C,children:[t(Gn,{ref:j,onFocus:()=>V("start"),placeholder:"start"===C?"hh:mm":"From",onChange:e=>B(e.target.value),value:D,disabled:o,readOnly:u,"data-testid":$["data-testid"]?`${$["data-testid"]}-timepicker-selector`:"timepicker-selector",onClick:()=>Y("start"),onKeyDown:U,autoComplete:"off","aria-label":"Start time input",type:"text",role:"combobox","aria-expanded":S,"aria-controls":F,"aria-autocomplete":"list"}),t(Gn,{ref:L,onFocus:()=>V("end"),placeholder:"end"===C?"hh:mm":"To",onChange:e=>M(e.target.value),value:z,disabled:o,readOnly:u,"data-testid":$["data-testid"]?`${$["data-testid"]}-timepicker-selector`:"timepicker-selector",onClick:()=>Y("end"),onKeyDown:U,autoComplete:"off","aria-label":"End time input",type:"text",role:"combobox","aria-expanded":S,"aria-controls":F,"aria-autocomplete":"list"})]}),K()]}),renderDropdown:()=>{if(S)return t(Iv,"start"===C?{listItems:P,onSelectItem:q,selectedItems:[D],disableItemFocus:!0,topScrollItem:Kn.findClosestFlooredTime(N(D),P),listboxId:F}:{listItems:W,onSelectItem:G,selectedItems:[z],disableItemFocus:!0,topScrollItem:Kn.findClosestFlooredTime(N(z),W),listboxId:F})},onClose:e=>{"outside-press"===e?(E(null),k(!1),null==f||f()):Z(D,z,{triggerOnBlur:!0})},onDismiss:()=>{var e;null===(e=("start"===C?j:L).current)||void 0===e||e.focus(),k(!1)},offset:8,alignment:b,fitAvailableHeight:!0,customZIndex:v})}),!l&&I&&t(Sc,{id:n?`${n}-error-message`:"error-message",tabIndex:0,"data-testid":n?`${n}-error-message`:"error-message",children:I})]}))},Rv=e=>{var{variant:r="dial"}=e,n=oe(e,["variant"]);return t("combobox"===r?Ov:Ec,Object.assign({},n))};export{Rv as TimeRangePicker};
//# sourceMappingURL=index.js.map
