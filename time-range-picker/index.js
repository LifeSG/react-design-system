import{jsxs as e,jsx as r,Fragment as t}from"react/jsx-runtime";import*as n from"react";import o,{useRef as i,useEffect as s,useState as a,isValidElement as l,createRef as d,cloneElement as c,PureComponent as u,useLayoutEffect as h,forwardRef as g,useCallback as m,useMemo as f,useContext as p,version as b,createElement as y,createContext as v}from"react";import{ArrowRightIcon as x,ChevronDownIcon as w}from"@lifesg/react-icons";import F,{css as $,keyframes as C,ThemeContext as E}from"styled-components";import{ChevronDownIcon as S}from"@lifesg/react-icons/chevron-down";import{ChevronUpIcon as k}from"@lifesg/react-icons/chevron-up";import D,{findDOMNode as B,unstable_batchedUpdates as I}from"react-dom";import{ArrowRightIcon as A}from"@lifesg/react-icons/arrow-right";import{ExclamationCircleFillIcon as T}from"@lifesg/react-icons/exclamation-circle-fill";import{ExclamationTriangleFillIcon as z}from"@lifesg/react-icons/exclamation-triangle-fill";import{ICircleFillIcon as O}from"@lifesg/react-icons/i-circle-fill";import{TickCircleFillIcon as M}from"@lifesg/react-icons/tick-circle-fill";import{ExternalIcon as _}from"@lifesg/react-icons/external";import{CircleIcon as R}from"@lifesg/react-icons/circle";import{CircleDotIcon as H}from"@lifesg/react-icons/circle-dot";import{CrossIcon as j}from"@lifesg/react-icons/cross";import{SquareIcon as L}from"@lifesg/react-icons/square";import{SquareTickFillIcon as P}from"@lifesg/react-icons/square-tick-fill";import{TickIcon as W}from"@lifesg/react-icons/tick";import{useFloatingTree as N,useFloating as V,autoUpdate as Y,offset as U,flip as q,shift as G,limitShift as Z,size as Q,useTransitionStyles as X,useClick as K,useDismiss as J,useInteractions as ee,FloatingPortal as re,FloatingFocusManager as te}from"@floating-ui/react";import{SquareFillIcon as ne}from"@lifesg/react-icons/square-fill";import{MagnifierIcon as oe}from"@lifesg/react-icons/magnifier";import"@lifesg/react-icons/caret-right";import{MinusSquareFillIcon as ie}from"@lifesg/react-icons/minus-square-fill";function se(e,r){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(n=Object.getOwnPropertySymbols(e);o<n.length;o++)r.indexOf(n[o])<0&&Object.prototype.propertyIsEnumerable.call(e,n[o])&&(t[n[o]]=e[n[o]])}return t}"function"==typeof SuppressedError&&SuppressedError;const ae=(e,r,t="window",n)=>{const o=i();s((()=>{o.current=r}),[r]),s((()=>{let r;switch(t){case"window":r=window;break;case"document":r=document;break;default:r=t}if(!r||!r.addEventListener)return;const i=e=>{var r;return null===(r=o.current)||void 0===r?void 0:r.call(o,e)};return r.addEventListener(e,i,n),()=>{null==r||r.removeEventListener(e,i,n)}}),[e,t])};var le="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};function de(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var ce=Array.isArray,ue="object"==typeof le&&le&&le.Object===Object&&le,he=ue,ge="object"==typeof self&&self&&self.Object===Object&&self,me=he||ge||Function("return this")(),fe=me.Symbol,pe=fe,be=Object.prototype,ye=be.hasOwnProperty,ve=be.toString,xe=pe?pe.toStringTag:void 0;var we=function(e){var r=ye.call(e,xe),t=e[xe];try{e[xe]=void 0;var n=!0}catch(e){}var o=ve.call(e);return n&&(r?e[xe]=t:delete e[xe]),o},Fe=Object.prototype.toString;var $e=we,Ce=function(e){return Fe.call(e)},Ee=fe?fe.toStringTag:void 0;var Se=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":Ee&&Ee in Object(e)?$e(e):Ce(e)};var ke=function(e){return null!=e&&"object"==typeof e},De=Se,Be=ke;var Ie=function(e){return"symbol"==typeof e||Be(e)&&"[object Symbol]"==De(e)},Ae=ce,Te=Ie,ze=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,Oe=/^\w*$/;var Me=function(e,r){if(Ae(e))return!1;var t=typeof e;return!("number"!=t&&"symbol"!=t&&"boolean"!=t&&null!=e&&!Te(e))||(Oe.test(e)||!ze.test(e)||null!=r&&e in Object(r))};var _e=function(e){var r=typeof e;return null!=e&&("object"==r||"function"==r)},Re=Se,He=_e;var je,Le=function(e){if(!He(e))return!1;var r=Re(e);return"[object Function]"==r||"[object GeneratorFunction]"==r||"[object AsyncFunction]"==r||"[object Proxy]"==r},Pe=me["__core-js_shared__"],We=(je=/[^.]+$/.exec(Pe&&Pe.keys&&Pe.keys.IE_PROTO||""))?"Symbol(src)_1."+je:"";var Ne=function(e){return!!We&&We in e},Ve=Function.prototype.toString;var Ye=function(e){if(null!=e){try{return Ve.call(e)}catch(e){}try{return e+""}catch(e){}}return""},Ue=Le,qe=Ne,Ge=_e,Ze=Ye,Qe=/^\[object .+?Constructor\]$/,Xe=Function.prototype,Ke=Object.prototype,Je=Xe.toString,er=Ke.hasOwnProperty,rr=RegExp("^"+Je.call(er).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");var tr=function(e,r){return null==e?void 0:e[r]},nr=function(e){return!(!Ge(e)||qe(e))&&(Ue(e)?rr:Qe).test(Ze(e))},or=tr;var ir=function(e,r){var t=or(e,r);return nr(t)?t:void 0},sr=ir(Object,"create"),ar=sr;var lr=function(){this.__data__=ar?ar(null):{},this.size=0};var dr=function(e){var r=this.has(e)&&delete this.__data__[e];return this.size-=r?1:0,r},cr=sr,ur=Object.prototype.hasOwnProperty;var hr=function(e){var r=this.__data__;if(cr){var t=r[e];return"__lodash_hash_undefined__"===t?void 0:t}return ur.call(r,e)?r[e]:void 0},gr=sr,mr=Object.prototype.hasOwnProperty;var fr=function(e){var r=this.__data__;return gr?void 0!==r[e]:mr.call(r,e)},pr=sr;var br=function(e,r){var t=this.__data__;return this.size+=this.has(e)?0:1,t[e]=pr&&void 0===r?"__lodash_hash_undefined__":r,this},yr=lr,vr=dr,xr=hr,wr=fr,Fr=br;function $r(e){var r=-1,t=null==e?0:e.length;for(this.clear();++r<t;){var n=e[r];this.set(n[0],n[1])}}$r.prototype.clear=yr,$r.prototype.delete=vr,$r.prototype.get=xr,$r.prototype.has=wr,$r.prototype.set=Fr;var Cr=$r;var Er=function(){this.__data__=[],this.size=0};var Sr=function(e,r){return e===r||e!=e&&r!=r},kr=Sr;var Dr=function(e,r){for(var t=e.length;t--;)if(kr(e[t][0],r))return t;return-1},Br=Dr,Ir=Array.prototype.splice;var Ar=function(e){var r=this.__data__,t=Br(r,e);return!(t<0)&&(t==r.length-1?r.pop():Ir.call(r,t,1),--this.size,!0)},Tr=Dr;var zr=function(e){var r=this.__data__,t=Tr(r,e);return t<0?void 0:r[t][1]},Or=Dr;var Mr=function(e){return Or(this.__data__,e)>-1},_r=Dr;var Rr=function(e,r){var t=this.__data__,n=_r(t,e);return n<0?(++this.size,t.push([e,r])):t[n][1]=r,this},Hr=Er,jr=Ar,Lr=zr,Pr=Mr,Wr=Rr;function Nr(e){var r=-1,t=null==e?0:e.length;for(this.clear();++r<t;){var n=e[r];this.set(n[0],n[1])}}Nr.prototype.clear=Hr,Nr.prototype.delete=jr,Nr.prototype.get=Lr,Nr.prototype.has=Pr,Nr.prototype.set=Wr;var Vr=Nr,Yr=ir(me,"Map"),Ur=Cr,qr=Vr,Gr=Yr;var Zr=function(e){var r=typeof e;return"string"==r||"number"==r||"symbol"==r||"boolean"==r?"__proto__"!==e:null===e};var Qr=function(e,r){var t=e.__data__;return Zr(r)?t["string"==typeof r?"string":"hash"]:t.map},Xr=Qr;var Kr=function(e){var r=Xr(this,e).delete(e);return this.size-=r?1:0,r},Jr=Qr;var et=function(e){return Jr(this,e).get(e)},rt=Qr;var tt=function(e){return rt(this,e).has(e)},nt=Qr;var ot=function(e,r){var t=nt(this,e),n=t.size;return t.set(e,r),this.size+=t.size==n?0:1,this},it=function(){this.size=0,this.__data__={hash:new Ur,map:new(Gr||qr),string:new Ur}},st=Kr,at=et,lt=tt,dt=ot;function ct(e){var r=-1,t=null==e?0:e.length;for(this.clear();++r<t;){var n=e[r];this.set(n[0],n[1])}}ct.prototype.clear=it,ct.prototype.delete=st,ct.prototype.get=at,ct.prototype.has=lt,ct.prototype.set=dt;var ut=ct,ht=ut;function gt(e,r){if("function"!=typeof e||null!=r&&"function"!=typeof r)throw new TypeError("Expected a function");var t=function(){var n=arguments,o=r?r.apply(this,n):n[0],i=t.cache;if(i.has(o))return i.get(o);var s=e.apply(this,n);return t.cache=i.set(o,s)||i,s};return t.cache=new(gt.Cache||ht),t}gt.Cache=ht;var mt=gt;var ft=function(e){var r=mt(e,(function(e){return 500===t.size&&t.clear(),e})),t=r.cache;return r},pt=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,bt=/\\(\\)?/g,yt=ft((function(e){var r=[];return 46===e.charCodeAt(0)&&r.push(""),e.replace(pt,(function(e,t,n,o){r.push(n?o.replace(bt,"$1"):t||e)})),r}));var vt=function(e,r){for(var t=-1,n=null==e?0:e.length,o=Array(n);++t<n;)o[t]=r(e[t],t,e);return o},xt=ce,wt=Ie,Ft=fe?fe.prototype:void 0,$t=Ft?Ft.toString:void 0;var Ct=function e(r){if("string"==typeof r)return r;if(xt(r))return vt(r,e)+"";if(wt(r))return $t?$t.call(r):"";var t=r+"";return"0"==t&&1/r==-1/0?"-0":t},Et=Ct;var St=ce,kt=Me,Dt=yt,Bt=function(e){return null==e?"":Et(e)};var It=function(e,r){return St(e)?e:kt(e,r)?[e]:Dt(Bt(e))},At=Ie;var Tt=function(e){if("string"==typeof e||At(e))return e;var r=e+"";return"0"==r&&1/e==-1/0?"-0":r},zt=It,Ot=Tt;var Mt=function(e,r){for(var t=0,n=(r=zt(r,e)).length;null!=e&&t<n;)e=e[Ot(r[t++])];return t&&t==n?e:void 0},_t=Mt;var Rt=function(e,r,t){var n=null==e?void 0:_t(e,r);return void 0===n?t:n},Ht=de(Rt);const jt=(e,r,t)=>Ht(t,r)||Ht(e,r),Lt=(e,r)=>{const t=r||e.defaultValue;return Ht(e.collections,t)},Pt={collections:{default:{"width-005":.5,"width-010":1,"width-020":2,"width-040":4,solid:"solid"}},defaultValue:"default"},Wt=e=>r=>{var t;const n=r.theme,o=Lt(Pt,null==n?void 0:n.borderScheme);return(null===(t=null==n?void 0:n.overrides)||void 0===t?void 0:t.border)?`${jt(o,e,n.overrides.border)}px`:`${o[e]}px`},Nt={"width-005":Wt("width-005"),"width-010":Wt("width-010"),"width-020":Wt("width-020"),"width-040":Wt("width-040"),solid:(Vt="solid",e=>{var r;const t=e.theme,n=Lt(Pt,null==t?void 0:t.borderScheme),o=(null===(r=null==t?void 0:t.overrides)||void 0===r?void 0:r.border)?jt(n,Vt,t.overrides.border):n[Vt];return"function"==typeof o?o(e):o})};var Vt;const Yt={"brand-10":"#2C0C0B","brand-20":"#4C1513","brand-30":"#6C1D1B","brand-40":"#922825","brand-50":"#BF3431","brand-60":"#F15D5A","brand-70":"#F69491","brand-80":"#FABAB7","brand-90":"#FCD7D2","brand-95":"#FFEBE7","brand-100":"#FFF6F4","primary-10":"#1A122C","primary-20":"#2F1F4D","primary-30":"#422D6E","primary-40":"#5B3D97","primary-50":"#7654BC","primary-60":"#9A82CD","primary-70":"#B7A7D8","primary-80":"#CFC5E5","primary-90":"#E3DDF0","primary-95":"#F0EDF7","primary-100":"#F9F8FC","secondary-10":"#0E1723","secondary-20":"#18293D","secondary-30":"#233A57","secondary-40":"#305078","secondary-50":"#4B6A8F","secondary-60":"#7B91A9","secondary-70":"#A1B1C3","secondary-80":"#C1CBD7","secondary-90":"#DBE1E8","secondary-95":"#EBEFF2","secondary-100":"#F7F8FA","neutral-10":"#161616","neutral-20":"#282828","neutral-30":"#393939","neutral-40":"#4E4E4E","neutral-50":"#686868","neutral-60":"#8E8E8E","neutral-70":"#AFAFB0","neutral-80":"#C7CACA","neutral-90":"#DDE1E2","neutral-95":"#EDEFEF","neutral-100":"#F9F9F9","success-10":"#081A0F","success-20":"#0E2D1B","success-30":"#154126","success-40":"#1C5A34","success-50":"#257645","success-60":"#44A068","success-70":"#64C189","success-80":"#80DCA5","success-90":"#B4ECCB","success-95":"#D5F6E2","success-100":"#EFFCF4","warning-10":"#221302","warning-20":"#3B2204","warning-30":"#543106","warning-40":"#744408","warning-50":"#98590C","warning-60":"#D07A13","warning-70":"#E4A244","warning-80":"#F5C26C","warning-90":"#FADBA6","warning-95":"#FCECD4","warning-100":"#FDF7F0","error-10":"#330505","error-20":"#550808","error-30":"#750C0C","error-40":"#9E130F","error-50":"#CB2213","error-60":"#DE6C6C","error-70":"#E89B9B","error-80":"#EFBEBE","error-90":"#F5D9D9","error-95":"#F9ECEC","error-100":"#FCF7F7","info-10":"#021824","info-20":"#032B3F","info-30":"#053D59","info-40":"#06547B","info-50":"#176E9B","info-60":"#5296BE","info-70":"#82B5DA","info-80":"#ACCFE7","info-90":"#CCE3F1","info-95":"#E3F1F8","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000","primary-inverse":"#FEAB10"},Ut={"brand-10":"#1F1221","brand-20":"#371F3B","brand-30":"#4E2C53","brand-40":"#6B3E73","brand-50":"#8D5197","brand-60":"#FF3399","brand-70":"#FF88C4","brand-80":"#FFB3D9","brand-90":"#FFD4E9","brand-95":"#FFE8F3","brand-100":"#FFF8FC","primary-10":"#1F1221","primary-20":"#371F3B","primary-30":"#4E2C53","primary-40":"#6B3E73","primary-50":"#8D5197","primary-60":"#B07DB7","primary-70":"#C7A3CC","primary-80":"#D9C2DD","primary-90":"#E9DBEB","primary-95":"#F3ECF4","primary-100":"#FAF7FA","secondary-10":"#2D091B","secondary-20":"#4D0F2E","secondary-30":"#6B1540","secondary-40":"#931D58","secondary-50":"#C02673","secondary-60":"#FF409F","secondary-70":"#FF88C4","secondary-80":"#FFB3D9","secondary-90":"#FFD4E9","secondary-95":"#FFE8F3","secondary-100":"#FFF8FC","neutral-10":"#161616","neutral-20":"#282828","neutral-30":"#393939","neutral-40":"#4E4E4E","neutral-50":"#686868","neutral-60":"#8E8E8E","neutral-70":"#AFAFB0","neutral-80":"#C7CACA","neutral-90":"#DDE1E2","neutral-95":"#EDEFEF","neutral-100":"#F9F9F9","success-10":"#081A0F","success-20":"#0E2D1B","success-30":"#154126","success-40":"#1C5A34","success-50":"#257645","success-60":"#44A068","success-70":"#64C189","success-80":"#80DCA5","success-90":"#B4ECCB","success-95":"#D5F6E2","success-100":"#EFFCF4","warning-10":"#221302","warning-20":"#3B2204","warning-30":"#543106","warning-40":"#744408","warning-50":"#98590C","warning-60":"#D07A13","warning-70":"#E4A244","warning-80":"#F5C26C","warning-90":"#FADBA6","warning-95":"#FCECD4","warning-100":"#FDF7F0","error-10":"#330505","error-20":"#550808","error-30":"#750C0C","error-40":"#9E130F","error-50":"#CB2213","error-60":"#DE6C6C","error-70":"#E89B9B","error-80":"#EFBEBE","error-90":"#F5D9D9","error-95":"#F9ECEC","error-100":"#FCF7F7","info-10":"#021824","info-20":"#032B3F","info-30":"#053D59","info-40":"#06547B","info-50":"#176E9B","info-60":"#5296BE","info-70":"#82B5DA","info-80":"#ACCFE7","info-90":"#CCE3F1","info-95":"#E3F1F8","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000","primary-inverse":"#FEAB10"},qt={"brand-10":"#2C0C0B","brand-20":"#4C1513","brand-30":"#6C1D1B","brand-40":"#922825","brand-50":"#BF3431","brand-60":"#F15D5A","brand-70":"#F69491","brand-80":"#FABAB7","brand-90":"#FCD7D2","brand-95":"#FFEBE7","brand-100":"#FFF6F4","primary-10":"#001731","primary-20":"#002752","primary-30":"#003874","primary-40":"#004D9F","primary-50":"#1768BE","primary-60":"#3C91EC","primary-70":"#6CB4FF","primary-80":"#A5CDFF","primary-90":"#CFE1FE","primary-95":"#E8F0FE","primary-100":"#F7F9FF","secondary-10":"#131529","secondary-20":"#222547","secondary-30":"#2F3565","secondary-40":"#42498B","secondary-50":"#5B62A7","secondary-60":"#858CBD","secondary-70":"#A8ADCF","secondary-80":"#C6C9E0","secondary-90":"#DDDFEC","secondary-95":"#EDEEF5","secondary-100":"#F8F8FB","neutral-10":"#161616","neutral-20":"#282828","neutral-30":"#393939","neutral-40":"#4E4E4E","neutral-50":"#686868","neutral-60":"#8E8E8E","neutral-70":"#AFAFB0","neutral-80":"#C7CACA","neutral-90":"#DDE1E2","neutral-95":"#EDEFEF","neutral-100":"#F9F9F9","success-10":"#081A0F","success-20":"#0E2D1B","success-30":"#154126","success-40":"#1C5A34","success-50":"#257645","success-60":"#44A068","success-70":"#64C189","success-80":"#80DCA5","success-90":"#B4ECCB","success-95":"#D5F6E2","success-100":"#EFFCF4","warning-10":"#221302","warning-20":"#3B2204","warning-30":"#543106","warning-40":"#744408","warning-50":"#98590C","warning-60":"#D07A13","warning-70":"#E4A244","warning-80":"#F5C26C","warning-90":"#FADBA6","warning-95":"#FCECD4","warning-100":"#FDF7F0","error-10":"#330505","error-20":"#550808","error-30":"#750C0C","error-40":"#9E130F","error-50":"#CB2213","error-60":"#DE6C6C","error-70":"#E89B9B","error-80":"#EFBEBE","error-90":"#F5D9D9","error-95":"#F9ECEC","error-100":"#FCF7F7","info-10":"#021824","info-20":"#032B3F","info-30":"#053D59","info-40":"#06547B","info-50":"#176E9B","info-60":"#5296BE","info-70":"#82B5DA","info-80":"#ACCFE7","info-90":"#CCE3F1","info-95":"#E3F1F8","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000","primary-inverse":"#FEAB10"},Gt={"brand-10":"#2C0C0B","brand-20":"#4C1513","brand-30":"#6C1D1B","brand-40":"#922825","brand-50":"#BF3431","brand-60":"#F15D5A","brand-70":"#F69491","brand-80":"#FABAB7","brand-90":"#FCD7D2","brand-95":"#FFEBE7","brand-100":"#FFF6F4","primary-10":"#0011924","primary-20":"#032B40","primary-30":"#043D5A","primary-40":"#05547B","primary-50":"#096EA1","primary-60":"#2098D3","primary-70":"#5CB9E8","primary-80":"#8BD3F6","primary-90":"#BEE6FA","primary-95":"#E2F2FA","primary-100":"#F4FAFC","secondary-10":"#131529","secondary-20":"#222547","secondary-30":"#2F3565","secondary-40":"#42498B","secondary-50":"#5B62A7","secondary-60":"#858CBD","secondary-70":"#A8ADCF","secondary-80":"#C6C9E0","secondary-90":"#DDDFEC","secondary-95":"#EDEEF5","secondary-100":"#F8F8FB","neutral-10":"#161616","neutral-20":"#282828","neutral-30":"#393939","neutral-40":"#4E4E4E","neutral-50":"#686868","neutral-60":"#8E8E8E","neutral-70":"#AFAFB0","neutral-80":"#C7CACA","neutral-90":"#DDE1E2","neutral-95":"#EDEFEF","neutral-100":"#F9F9F9","success-10":"#081A0F","success-20":"#0E2D1B","success-30":"#154126","success-40":"#1C5A34","success-50":"#257645","success-60":"#44A068","success-70":"#64C189","success-80":"#80DCA5","success-90":"#B4ECCB","success-95":"#D5F6E2","success-100":"#EFFCF4","warning-10":"#221302","warning-20":"#3B2204","warning-30":"#543106","warning-40":"#744408","warning-50":"#98590C","warning-60":"#D07A13","warning-70":"#E4A244","warning-80":"#F5C26C","warning-90":"#FADBA6","warning-95":"#FCECD4","warning-100":"#FDF7F0","error-10":"#330505","error-20":"#550808","error-30":"#750C0C","error-40":"#9E130F","error-50":"#CB2213","error-60":"#DE6C6C","error-70":"#E89B9B","error-80":"#EFBEBE","error-90":"#F5D9D9","error-95":"#F9ECEC","error-100":"#FCF7F7","info-10":"#021824","info-20":"#032B3F","info-30":"#053D59","info-40":"#06547B","info-50":"#176E9B","info-60":"#5296BE","info-70":"#82B5DA","info-80":"#ACCFE7","info-90":"#CCE3F1","info-95":"#E3F1F8","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000","primary-inverse":"#FEAB10"},Zt={"brand-10":"#001A19","brand-20":"#002D2B","brand-30":"#00413D","brand-40":"#005954","brand-50":"#00756F","brand-60":"#03A098","brand-70":"#55BFBA","brand-80":"#92D6D2","brand-90":"#BFE7E5","brand-95":"#DDF2F1","brand-100":"#F4FBFA","primary-10":"#09191D","primary-20":"#102B34","primary-30":"#173D49","primary-40":"#205666","primary-50":"#2A7086","primary-60":"#5D97A9","primary-70":"#8CB6C2","primary-80":"#B2CED6","primary-90":"#D1E2E7","primary-95":"#E8F0F3","primary-100":"#F7FAFB","secondary-10":"#001731","secondary-20":"#002752","secondary-30":"#003874","secondary-40":"#004D9F","secondary-50":"#5B62A7","secondary-60":"#858CBD","secondary-70":"#A8ADCF","secondary-80":"#C6C9E0","secondary-90":"#DDDFEC","secondary-95":"#EDEEF5","secondary-100":"#F8F8FB","neutral-10":"#161616","neutral-20":"#282828","neutral-30":"#393939","neutral-40":"#4E4E4E","neutral-50":"#686868","neutral-60":"#8E8E8E","neutral-70":"#AFAFB0","neutral-80":"#C7CACA","neutral-90":"#DDE1E2","neutral-95":"#EDEFEF","neutral-100":"#F9F9F9","success-10":"#081A0F","success-20":"#0E2D1B","success-30":"#154126","success-40":"#1C5A34","success-50":"#257645","success-60":"#44A068","success-70":"#64C189","success-80":"#80DCA5","success-90":"#B4ECCB","success-95":"#D5F6E2","success-100":"#EFFCF4","warning-10":"#221302","warning-20":"#3B2204","warning-30":"#543106","warning-40":"#744408","warning-50":"#98590C","warning-60":"#D07A13","warning-70":"#E4A244","warning-80":"#F5C26C","warning-90":"#FADBA6","warning-95":"#FCECD4","warning-100":"#FDF7F0","error-10":"#330505","error-20":"#550808","error-30":"#750C0C","error-40":"#9E130F","error-50":"#CB2213","error-60":"#DE6C6C","error-70":"#E89B9B","error-80":"#EFBEBE","error-90":"#F5D9D9","error-95":"#F9ECEC","error-100":"#FCF7F7","info-10":"#021824","info-20":"#032B3F","info-30":"#053D59","info-40":"#06547B","info-50":"#176E9B","info-60":"#5296BE","info-70":"#82B5DA","info-80":"#ACCFE7","info-90":"#CCE3F1","info-95":"#E3F1F8","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000","primary-inverse":"#FEAB10"},Qt={"brand-10":"#881317","brand-20":"#B5191E","brand-30":"#B5040A","brand-40":"#D0333F","brand-50":"#DC666F","brand-60":"#E28087","brand-70":"#E7999F","brand-80":"#EDB3B7","brand-90":"#F3CCCF","brand-95":"#F9E6E7","brand-100":"#FCF2F3","primary-10":"#000000","primary-20":"#191919","primary-30":"#333333","primary-40":"#4D4D4D","primary-50":"#666666","primary-60":"#808080","primary-70":"#999999","primary-80":"#B3B3B3","primary-90":"#E6E6E6","primary-95":"#F7F7F7","primary-100":"#FFFFFF","secondary-10":"#19151D","secondary-20":"#2B2533","secondary-30":"#3E3649","secondary-40":"#564A64","secondary-50":"#6F637D","secondary-60":"#948B9F","secondary-70":"#B3ACBB","secondary-80":"#CCC8D2","secondary-90":"#E1DEE4","secondary-95":"#EFEEF1","secondary-100":"#F9F8F9","neutral-10":"#000000","neutral-20":"#191919","neutral-30":"#333333","neutral-40":"#4D4D4D","neutral-50":"#666666","neutral-60":"#808080","neutral-70":"#999999","neutral-80":"#B3B3B3","neutral-90":"#E6E6E6","neutral-95":"#F7F7F7","neutral-100":"#FFFFFF","success-10":"#081A0F","success-20":"#0E2D1B","success-30":"#154126","success-40":"#1C5A34","success-50":"#257645","success-60":"#44A068","success-70":"#64C189","success-80":"#80DCA5","success-90":"#B4ECCB","success-95":"#D5F6E2","success-100":"#EFFCF4","warning-10":"#221302","warning-20":"#3B2204","warning-30":"#543106","warning-40":"#744408","warning-50":"#98590C","warning-60":"#D07A13","warning-70":"#E4A244","warning-80":"#F5C26C","warning-90":"#FADBA6","warning-95":"#FCECD4","warning-100":"#FDF7F0","error-10":"#330505","error-20":"#550808","error-30":"#750C0C","error-40":"#9E130F","error-50":"#CB2213","error-60":"#DE6C6C","error-70":"#E89B9B","error-80":"#EFBEBE","error-90":"#F5D9D9","error-95":"#F9ECEC","error-100":"#FCF7F7","info-10":"#021824","info-20":"#032B3F","info-30":"#053D59","info-40":"#06547B","info-50":"#176E9B","info-60":"#5296BE","info-70":"#82B5DA","info-80":"#ACCFE7","info-90":"#CCE3F1","info-95":"#E3F1F8","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000","primary-inverse":"#FEAB10"},Xt={"brand-10":"#0E123A","brand-20":"#191E65","brand-30":"#232B90","brand-40":"#303BC5","brand-50":"#494CFF","brand-60":"#AD6EFF","brand-70":"#AEA4FF","brand-80":"#C5C4FF","brand-90":"#DDDCFF","brand-95":"#EDECFF","brand-100":"#F8F8FF","primary-10":"#10152B","primary-20":"#1C254B","primary-30":"#28356C","primary-40":"#38489A","primary-50":"#4D5AD7","primary-60":"#7487F2","primary-70":"#9AAAFC","primary-80":"#BDC7FD","primary-90":"#DADFFB","primary-95":"#ECEEFE","primary-100":"#F7F8FF","secondary-10":"#19151D","secondary-20":"#2B2533","secondary-30":"#3E3649","secondary-40":"#564A64","secondary-50":"#6F637D","secondary-60":"#948B9F","secondary-70":"#B3ACBB","secondary-80":"#CCC8D2","secondary-90":"#E1DEE4","secondary-95":"#EFEEF1","secondary-100":"#F9F8F9","neutral-10":"#161616","neutral-20":"#282828","neutral-30":"#393939","neutral-40":"#4E4E4E","neutral-50":"#686868","neutral-60":"#8E8E8E","neutral-70":"#AFAFB0","neutral-80":"#C7CACA","neutral-90":"#DDE1E2","neutral-95":"#EDEFEF","neutral-100":"#F9F9F9","success-10":"#081A0F","success-20":"#0E2D1B","success-30":"#154126","success-40":"#1C5A34","success-50":"#257645","success-60":"#44A068","success-70":"#64C189","success-80":"#80DCA5","success-90":"#B4ECCB","success-95":"#D5F6E2","success-100":"#EFFCF4","warning-10":"#221302","warning-20":"#3B2204","warning-30":"#543106","warning-40":"#744408","warning-50":"#98590C","warning-60":"#D07A13","warning-70":"#E4A244","warning-80":"#F5C26C","warning-90":"#FADBA6","warning-95":"#FCECD4","warning-100":"#FDF7F0","error-10":"#330505","error-20":"#550808","error-30":"#750C0C","error-40":"#9E130F","error-50":"#CB2213","error-60":"#DE6C6C","error-70":"#E89B9B","error-80":"#EFBEBE","error-90":"#F5D9D9","error-95":"#F9ECEC","error-100":"#FCF7F7","info-10":"#021824","info-20":"#032B3F","info-30":"#053D59","info-40":"#06547B","info-50":"#176E9B","info-60":"#5296BE","info-70":"#82B5DA","info-80":"#ACCFE7","info-90":"#CCE3F1","info-95":"#E3F1F8","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000","primary-inverse":"#FEAB10"},Kt={"brand-10":"#170F39","brand-20":"#281C62","brand-30":"#38268B","brand-40":"#4D34BF","brand-50":"#5735DF","brand-60":"#9986F9","brand-70":"#B2A5F8","brand-80":"#CDC2FA","brand-90":"#E2DCFC","brand-95":"#EFEDFE","brand-100":"#FAF8FD","primary-10":"#170F39","primary-20":"#281C62","primary-30":"#38268B","primary-40":"#4D34BF","primary-50":"#5735DF","primary-60":"#9986F9","primary-70":"#B2A5F8","primary-80":"#CDC2FA","primary-90":"#E2DCFC","primary-95":"#EFEDFE","primary-100":"#FAF8FD","secondary-10":"#251204","secondary-20":"#401F08","secondary-30":"#5B2C0B","secondary-40":"#7E3D0F","secondary-50":"#B04900","secondary-60":"#E26E1C","secondary-70":"#FF9445","secondary-80":"#FFBB8E","secondary-90":"#FFD9BF","secondary-95":"#FFECDF","secondary-100":"#FFF8F3","neutral-10":"#161616","neutral-20":"#282828","neutral-30":"#393939","neutral-40":"#4E4E4E","neutral-50":"#686868","neutral-60":"#8E8E8E","neutral-70":"#AFAFB0","neutral-80":"#C7CACA","neutral-90":"#DDE1E2","neutral-95":"#EDEFEF","neutral-100":"#F9F9F9","success-10":"#031B15","success-20":"#082D24","success-30":"#094134","success-40":"#0D5947","success-50":"#10755E","success-60":"#16A181","success-70":"#1EC59D","success-80":"#6FDDC2","success-90":"#AFECDE","success-95":"#D5F5ED","success-100":"#F1FCF9","warning-10":"#1F1500","warning-20":"#362500","warning-30":"#4D3501","warning-40":"#6A4801","warning-50":"#8B6001","warning-60":"#BF8301","warning-70":"#EAA102","warning-80":"#FFBF34","warning-90":"#FFDC8F","warning-95":"#FFEDC7","warning-100":"#FFF8EA","error-10":"#270F10","error-20":"#441B1B","error-30":"#612627","error-40":"#853535","error-50":"#AF4546","error-60":"#EC6162","error-70":"#F29696","error-80":"#F7BBBC","error-90":"#FAD8D8","error-95":"#FCEAEA","error-100":"#FEF7F7","info-10":"#0F1627","info-20":"#1B2745","info-30":"#273763","info-40":"#354D88","info-50":"#4665B3","info-60":"#618AF6","info-70":"#8DADFF","info-80":"#B4C9FF","info-90":"#D3DFFF","info-95":"#E9EFFF","info-100":"#F5F8FF",white:"#FFFFFF",black:"#000000","primary-inverse":"#FEAB10"},Jt={"brand-10":"#0E113C","brand-20":"#191E67","brand-30":"#232A92","brand-40":"#233FC2","brand-50":"#135CEA","brand-60":"#378FFB","brand-70":"#71B3FD","brand-80":"#9DCFFE","brand-90":"#C1E5FF","brand-95":"#DCF1FF","brand-100":"#F3FAFF","primary-10":"#0E113C","primary-20":"#191E67","primary-30":"#232A92","primary-40":"#233FC2","primary-50":"#135CEA","primary-60":"#378FFB","primary-70":"#71B3FD","primary-80":"#9DCFFE","primary-90":"#C1E5FF","primary-95":"#DCF1FF","primary-100":"#F3FAFF","secondary-10":"#34001F","secondary-20":"#540033","secondary-30":"#730045","secondary-40":"#9D0054","secondary-50":"#C61C64","secondary-60":"#DE6792","secondary-70":"#EB96B6","secondary-80":"#F5BAD2","secondary-90":"#FCD5E3","secondary-95":"#FDEBF1","secondary-100":"#FDF6F9","neutral-10":"#161616","neutral-20":"#282828","neutral-30":"#393939","neutral-40":"#4E4E4E","neutral-50":"#686868","neutral-60":"#8E8E8E","neutral-70":"#AFAFB0","neutral-80":"#C7CACA","neutral-90":"#DDE1E2","neutral-95":"#EDEFEF","neutral-100":"#F9F9F9","success-10":"#081A0F","success-20":"#0E2D1B","success-30":"#154126","success-40":"#1C5A34","success-50":"#257645","success-60":"#44A068","success-70":"#64C189","success-80":"#80DCA5","success-90":"#B4ECCB","success-95":"#D5F6E2","success-100":"#EFFCF4","warning-10":"#221302","warning-20":"#3B2204","warning-30":"#543106","warning-40":"#744408","warning-50":"#98590C","warning-60":"#D07A13","warning-70":"#E4A244","warning-80":"#F5C26C","warning-90":"#FADBA6","warning-95":"#FCECD4","warning-100":"#FDF7F0","error-10":"#330505","error-20":"#550808","error-30":"#750C0C","error-40":"#9E130F","error-50":"#CB2213","error-60":"#DE6C6C","error-70":"#E89B9B","error-80":"#EFBEBE","error-90":"#F5D9D9","error-95":"#F9ECEC","error-100":"#FCF7F7","info-10":"#021824","info-20":"#032B3F","info-30":"#053D59","info-40":"#06547B","info-50":"#176E9B","info-60":"#5296BE","info-70":"#82B5DA","info-80":"#ACCFE7","info-90":"#CCE3F1","info-95":"#E3F1F8","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000","primary-inverse":"#FEAB10"},en={"brand-10":"#370009","brand-20":"#4E000D","brand-30":"#640011","brand-40":"#850017","brand-50":"#9B001A","brand-60":"#EF2D4E","brand-70":"#F692A3","brand-80":"#FAB9C4","brand-90":"#FCD7DD","brand-95":"#FDEAED","brand-100":"#FEF8F9","primary-10":"#1F102A","primary-20":"#2F193F","primary-30":"#3E2053","primary-40":"#562D71","primary-50":"#663587","primary-60":"#9370AA","primary-70":"#BCA7CB","primary-80":"#D3C5DC","primary-90":"#E5DDEB","primary-95":"#F2EEF5","primary-100":"#FAF9FB","secondary-10":"#201316","secondary-20":"#311D22","secondary-30":"#3F272C","secondary-40":"#58363D","secondary-50":"#684049","secondary-60":"#AF6A7A","secondary-70":"#F393A8","secondary-80":"#FFB6C6","secondary-90":"#FFD6DF","secondary-95":"#FFE9EE","secondary-100":"#FFF7F9","neutral-10":"#161616","neutral-20":"#222222","neutral-30":"#2D2D2D","neutral-40":"#3F3F3F","neutral-50":"#4B4B4B","neutral-60":"#7E7E7E","neutral-70":"#AFAFB0","neutral-80":"#C7CACA","neutral-90":"#DDE1E2","neutral-95":"#EDEFEF","neutral-100":"#F9F9F9","success-10":"#081917","success-20":"#0D2724","success-30":"#11332E","success-40":"#174740","success-50":"#1B554C","success-60":"#2D8C7E","success-70":"#46C2AF","success-80":"#89D8CC","success-90":"#BCE9E2","success-95":"#DAF3EF","success-100":"#F0FAF9","warning-10":"#241200","warning-20":"#371C00","warning-30":"#482500","warning-40":"#633300","warning-50":"#763C00","warning-60":"#C36400","warning-70":"#FF9524","warning-80":"#FFBD77","warning-90":"#FFD9B2","warning-95":"#FFEBD6","warning-100":"#FFF7F0","error-10":"#330505","error-20":"#4B0707","error-30":"#600909","error-40":"#810D0D","error-50":"#98110F","error-60":"#D7504C","error-70":"#E89B9B","error-80":"#EFBEBE","error-90":"#F5D9D9","error-95":"#F9ECEC","error-100":"#FCF7F7","info-10":"#021824","info-20":"#032537","info-30":"#043148","info-40":"#054462","info-50":"#065175","info-60":"#3985AF","info-70":"#82B5DA","info-80":"#ACCFE7","info-90":"#CCE3F1","info-95":"#E3F1F8","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000","primary-inverse":"#FEAB10"},rn={"brand-10":"#00143A","brand-20":"#00205B","brand-30":"#153368","brand-40":"#18417C","brand-50":"#00558C","brand-60":"#009CDE","brand-70":"#5AB9E7","brand-80":"#9ED0ED","brand-90":"#CAE3F4","brand-95":"#E2F0F9","brand-100":"#F4FAFD","primary-10":"#00143A","primary-20":"#00205B","primary-30":"#153368","primary-40":"#18417C","primary-50":"#00558C","primary-60":"#009CDE","primary-70":"#5AB9E7","primary-80":"#9ED0ED","primary-90":"#CAE3F4","primary-95":"#E2F0F9","primary-100":"#F4FAFD","secondary-10":"#10171F","secondary-20":"#1E252C","secondary-30":"#2F353B","secondary-40":"#3D4247","secondary-50":"#4E5255","secondary-60":"#8F9396","secondary-70":"#A9B0B3","secondary-80":"#C7CBCC","secondary-90":"#DDDFE0","secondary-95":"#ECEDEE","secondary-100":"#F8F8F9","neutral-10":"#10171F","neutral-20":"#1E252C","neutral-30":"#2F353B","neutral-40":"#3D4247","neutral-50":"#4E5255","neutral-60":"#8F9396","neutral-70":"#A9B0B3","neutral-80":"#C7CBCC","neutral-90":"#DDDFE0","neutral-95":"#ECEDEE","neutral-100":"#F8F8F9","success-10":"#001B0E","success-20":"#012A16","success-30":"#013D20","success-40":"#014D28","success-50":"#005F30","success-60":"#48A377","success-70":"#77BD9B","success-80":"#A3D5BD","success-90":"#C4E7D6","success-95":"#DBF4E7","success-100":"#ECFDF5","warning-10":"#1F1500","warning-20":"#312100","warning-30":"#473000","warning-40":"#593C00","warning-50":"#6E4B00","warning-60":"#B78C31","warning-70":"#DDA633","warning-80":"#E0C792","warning-90":"#E9DEC5","warning-95":"#F4EEE0","warning-100":"#FAF8F3","error-10":"#360109","error-20":"#50010E","error-30":"#6F0213","error-40":"#88051A","error-50":"#A60A24","error-60":"#E07083","error-70":"#EA98A6","error-80":"#F3BBC4","error-90":"#FAD5DC","error-95":"#FEE9ED","error-100":"#FFF6F8","info-10":"#00143A","info-20":"#00205B","info-30":"#153368","info-40":"#18417C","info-50":"#00558C","info-60":"#009CDE","info-70":"#5AB9E7","info-80":"#9ED0ED","info-90":"#CAE3F4","info-95":"#E2F0F9","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000","primary-inverse":"#FFCB6A"},tn={collections:{lifesg:qt,bookingsg:Yt,rbs:Xt,mylegacy:Gt,ccube:Ut,oneservice:Zt,pa:Qt,a11yplayground:Kt,supportgowhere:Jt,imda:en,spf:rn},defaultValue:"lifesg"},nn={collections:{lifesg:qt,bookingsg:Yt,rbs:Xt,mylegacy:Gt,ccube:Ut,oneservice:Zt,pa:Qt,a11yplayground:Kt,supportgowhere:Jt,imda:en,spf:rn},defaultValue:"lifesg"},on=e=>r=>{var t;const n=r.theme,o="dark"===(null==n?void 0:n.colourMode),i=Lt(o?nn:tn,null==n?void 0:n.colourScheme),s=o?"primitiveColourDark":"primitiveColour",a=null===(t=null==n?void 0:n.overrides)||void 0===t?void 0:t[s];return a?jt(i,e,a):i[e]},sn={"brand-10":on("brand-10"),"brand-20":on("brand-20"),"brand-30":on("brand-30"),"brand-40":on("brand-40"),"brand-50":on("brand-50"),"brand-60":on("brand-60"),"brand-70":on("brand-70"),"brand-80":on("brand-80"),"brand-90":on("brand-90"),"brand-95":on("brand-95"),"brand-100":on("brand-100"),"primary-10":on("primary-10"),"primary-20":on("primary-20"),"primary-30":on("primary-30"),"primary-40":on("primary-40"),"primary-50":on("primary-50"),"primary-60":on("primary-60"),"primary-70":on("primary-70"),"primary-80":on("primary-80"),"primary-90":on("primary-90"),"primary-95":on("primary-95"),"primary-100":on("primary-100"),"secondary-10":on("secondary-10"),"secondary-20":on("secondary-20"),"secondary-30":on("secondary-30"),"secondary-40":on("secondary-40"),"secondary-50":on("secondary-50"),"secondary-60":on("secondary-60"),"secondary-70":on("secondary-70"),"secondary-80":on("secondary-80"),"secondary-90":on("secondary-90"),"secondary-95":on("secondary-95"),"secondary-100":on("secondary-100"),"neutral-10":on("neutral-10"),"neutral-20":on("neutral-20"),"neutral-30":on("neutral-30"),"neutral-40":on("neutral-40"),"neutral-50":on("neutral-50"),"neutral-60":on("neutral-60"),"neutral-70":on("neutral-70"),"neutral-80":on("neutral-80"),"neutral-90":on("neutral-90"),"neutral-95":on("neutral-95"),"neutral-100":on("neutral-100"),"success-10":on("success-10"),"success-20":on("success-20"),"success-30":on("success-30"),"success-40":on("success-40"),"success-50":on("success-50"),"success-60":on("success-60"),"success-70":on("success-70"),"success-80":on("success-80"),"success-90":on("success-90"),"success-95":on("success-95"),"success-100":on("success-100"),"warning-10":on("warning-10"),"warning-20":on("warning-20"),"warning-30":on("warning-30"),"warning-40":on("warning-40"),"warning-50":on("warning-50"),"warning-60":on("warning-60"),"warning-70":on("warning-70"),"warning-80":on("warning-80"),"warning-90":on("warning-90"),"warning-95":on("warning-95"),"warning-100":on("warning-100"),"error-10":on("error-10"),"error-20":on("error-20"),"error-30":on("error-30"),"error-40":on("error-40"),"error-50":on("error-50"),"error-60":on("error-60"),"error-70":on("error-70"),"error-80":on("error-80"),"error-90":on("error-90"),"error-95":on("error-95"),"error-100":on("error-100"),"info-10":on("info-10"),"info-20":on("info-20"),"info-30":on("info-30"),"info-40":on("info-40"),"info-50":on("info-50"),"info-60":on("info-60"),"info-70":on("info-70"),"info-80":on("info-80"),"info-90":on("info-90"),"info-95":on("info-95"),"info-100":on("info-100"),white:on("white"),black:on("black"),"primary-inverse":on("primary-inverse")},an={text:on("neutral-20"),"text-subtle":on("neutral-30"),"text-subtler":on("neutral-50"),"text-subtlest":on("neutral-60"),"text-primary":on("primary-50"),"text-primary-strongest":on("primary-20"),"text-hover":on("primary-40"),"text-selected":on("primary-50"),"text-selected-hover":on("primary-40"),"text-disabled":on("neutral-50"),"text-disabled-subtle":on("neutral-60"),"text-disabled-subtlest":on("neutral-80"),"text-selected-disabled":on("neutral-20"),"text-success":on("success-40"),"text-warning":on("warning-40"),"text-error":on("error-40"),"text-info":on("info-40"),"text-inverse":on("white"),icon:on("neutral-50"),"icon-subtle":on("neutral-60"),"icon-strongest":on("neutral-20"),"icon-primary":on("primary-50"),"icon-primary-subtle":on("primary-60"),"icon-primary-subtlest":on("primary-70"),"icon-hover":on("primary-40"),"icon-selected":on("primary-50"),"icon-selected-hover":on("primary-40"),"icon-disabled":on("neutral-50"),"icon-disabled-subtle":on("neutral-60"),"icon-selected-disabled":on("neutral-60"),"icon-success":on("success-50"),"icon-warning":on("warning-60"),"icon-error":on("error-50"),"icon-error-strong":on("error-40"),"icon-info":on("info-50"),"icon-inverse":on("white"),"icon-primary-inverse":on("primary-inverse"),border:on("neutral-90"),"border-strong":on("neutral-70"),"border-stronger":on("neutral-50"),"border-primary":on("primary-50"),"border-primary-subtle":on("primary-60"),"border-hover":on("primary-90"),"border-hover-strong":on("primary-60"),"border-selected":on("primary-50"),"border-selected-subtle":on("primary-70"),"border-selected-subtlest":on("primary-90"),"border-selected-hover":on("primary-40"),"border-focus":on("primary-60"),"border-focus-strong":on("primary-50"),"border-disabled":on("neutral-90"),"border-selected-disabled":on("neutral-70"),"border-success":on("success-60"),"border-warning":on("warning-60"),"border-error":on("error-60"),"border-error-focus":on("error-60"),"border-error-focus-strong":on("error-40"),"border-error-strong":on("error-40"),"border-info":on("info-60"),bg:on("white"),"bg-strong":on("neutral-100"),"bg-stronger":on("neutral-95"),"bg-strongest":on("neutral-90"),"bg-hover":on("primary-95"),"bg-hover-strong":on("primary-90"),"bg-hover-subtle":on("primary-100"),"bg-hover-neutral":on("neutral-100"),"bg-hover-neutral-strong":on("neutral-90"),"bg-selected":on("primary-95"),"bg-selected-hover":on("primary-90"),"bg-selected-strong":on("primary-90"),"bg-selected-stronger":on("primary-70"),"bg-selected-strongest":on("primary-50"),"bg-selected-strongest-hover":on("primary-40"),"bg-disabled":on("neutral-95"),"bg-selected-disabled":on("neutral-95"),"bg-selected-stronger-disabled":on("neutral-70"),"bg-success":on("success-100"),"bg-success-hover":on("success-95"),"bg-success-strong":on("success-50"),"bg-success-strong-hover":on("success-40"),"bg-warning":on("warning-100"),"bg-warning-hover":on("warning-95"),"bg-warning-strong":on("warning-50"),"bg-warning-strong-hover":on("warning-40"),"bg-info":on("info-100"),"bg-info-hover":on("info-95"),"bg-info-strong":on("info-50"),"bg-info-strong-hover":on("info-40"),"bg-error":on("error-100"),"bg-error-hover":on("error-95"),"bg-error-strong":on("error-50"),"bg-error-strong-hover":on("error-40"),"bg-inverse":on("neutral-20"),"bg-inverse-subtle":on("neutral-30"),"bg-inverse-subtler":on("neutral-50"),"bg-inverse-subtlest":on("neutral-60"),"bg-inverse-hover":on("neutral-40"),"bg-primary":on("primary-50"),"bg-primary-subtle":on("primary-60"),"bg-primary-subtler":on("primary-95"),"bg-primary-subtlest":on("primary-100"),"bg-available":"#6DD0A1","bg-primary-hover":on("primary-40"),"bg-primary-subtlest-hover":on("primary-90"),"bg-primary-subtlest-selected":on("primary-90"),"overlay-strong":"rgba(40, 40, 40, 0.85)","overlay-subtle":"rgba(40, 40, 40, 0.20)",hyperlink:on("primary-50"),"hyperlink-hover":on("primary-40"),"hyperlink-visited":on("primary-40"),"hyperlink-inverse":on("primary-inverse"),"focus-ring":on("primary-50"),"focus-ring-inverse":on("white")},ln={text:on("neutral-100"),"text-subtle":on("neutral-80"),"text-subtler":on("neutral-60"),"text-subtlest":on("neutral-50"),"text-primary":on("primary-60"),"text-primary-strongest":on("primary-90"),"text-hover":on("primary-70"),"text-selected":on("primary-60"),"text-selected-hover":on("primary-70"),"text-disabled":on("neutral-60"),"text-disabled-subtle":on("neutral-50"),"text-disabled-subtlest":on("neutral-30"),"text-selected-disabled":on("neutral-90"),"text-success":on("success-70"),"text-warning":on("warning-70"),"text-error":on("error-70"),"text-info":on("info-70"),"text-inverse":on("black"),icon:on("neutral-60"),"icon-subtle":on("neutral-50"),"icon-strongest":on("neutral-90"),"icon-primary":on("primary-60"),"icon-primary-subtle":on("primary-50"),"icon-primary-subtlest":on("primary-40"),"icon-hover":on("primary-70"),"icon-selected":on("primary-60"),"icon-selected-hover":on("primary-70"),"icon-disabled":on("neutral-60"),"icon-disabled-subtle":on("neutral-50"),"icon-selected-disabled":on("neutral-50"),"icon-success":on("success-60"),"icon-warning":on("warning-50"),"icon-error":on("error-60"),"icon-error-strong":on("error-70"),"icon-info":on("info-60"),"icon-inverse":on("black"),"icon-primary-inverse":on("primary-inverse"),border:on("neutral-20"),"border-strong":on("neutral-40"),"border-stronger":on("neutral-60"),"border-primary":on("primary-60"),"border-primary-subtle":on("primary-50"),"border-hover":on("primary-20"),"border-hover-strong":on("primary-50"),"border-selected":on("primary-60"),"border-selected-subtle":on("primary-40"),"border-selected-subtlest":on("primary-20"),"border-selected-hover":on("primary-70"),"border-focus":on("primary-50"),"border-focus-strong":on("primary-60"),"border-disabled":on("neutral-20"),"border-selected-disabled":on("neutral-40"),"border-success":on("success-50"),"border-warning":on("warning-50"),"border-error":on("error-50"),"border-error-focus":on("error-50"),"border-error-focus-strong":on("error-70"),"border-error-strong":on("error-70"),"border-info":on("info-50"),bg:on("black"),"bg-strong":on("neutral-10"),"bg-stronger":on("neutral-20"),"bg-strongest":on("neutral-20"),"bg-hover":on("primary-20"),"bg-hover-strong":on("primary-20"),"bg-hover-subtle":on("primary-10"),"bg-hover-neutral":on("neutral-10"),"bg-hover-neutral-strong":on("neutral-20"),"bg-selected":on("primary-20"),"bg-selected-hover":on("primary-20"),"bg-selected-strong":on("primary-20"),"bg-selected-stronger":on("primary-40"),"bg-selected-strongest":on("primary-60"),"bg-selected-strongest-hover":on("primary-70"),"bg-disabled":on("neutral-20"),"bg-selected-disabled":on("neutral-20"),"bg-selected-stronger-disabled":on("neutral-40"),"bg-success":on("success-10"),"bg-success-hover":on("success-20"),"bg-success-strong":on("success-60"),"bg-success-strong-hover":on("success-70"),"bg-warning":on("warning-10"),"bg-warning-hover":on("warning-20"),"bg-warning-strong":on("warning-60"),"bg-warning-strong-hover":on("warning-70"),"bg-info":on("info-10"),"bg-info-hover":on("info-20"),"bg-info-strong":on("info-60"),"bg-info-strong-hover":on("info-70"),"bg-error":on("error-10"),"bg-error-hover":on("error-20"),"bg-error-strong":on("error-60"),"bg-error-strong-hover":on("error-70"),"bg-inverse":on("neutral-90"),"bg-inverse-subtle":on("neutral-80"),"bg-inverse-subtler":on("neutral-60"),"bg-inverse-subtlest":on("neutral-50"),"bg-inverse-hover":on("neutral-70"),"bg-primary":on("primary-60"),"bg-primary-subtle":on("primary-50"),"bg-primary-subtler":on("primary-20"),"bg-primary-subtlest":on("primary-10"),"bg-available":"#185339","bg-primary-hover":on("primary-70"),"bg-primary-subtlest-hover":on("primary-20"),"bg-primary-subtlest-selected":on("primary-20"),"overlay-strong":"rgba(78, 78, 78, 0.80)","overlay-subtle":"rgba(78, 78, 78, 0.50)",hyperlink:on("primary-60"),"hyperlink-hover":on("primary-70"),"hyperlink-visited":on("primary-70"),"hyperlink-inverse":on("primary-inverse"),"focus-ring":on("primary-60"),"focus-ring-inverse":on("black")},dn={text:on("neutral-30"),"text-subtle":on("neutral-40"),"text-subtler":on("neutral-50"),"text-subtlest":on("neutral-70"),"text-primary":on("neutral-10"),"text-primary-strongest":on("neutral-10"),"text-hover":on("neutral-70"),"text-selected":on("neutral-20"),"text-selected-hover":on("neutral-10"),"text-disabled":on("neutral-50"),"text-disabled-subtle":on("neutral-70"),"text-disabled-subtlest":on("neutral-80"),"text-selected-disabled":on("neutral-40"),"text-success":on("success-40"),"text-warning":on("warning-40"),"text-error":on("brand-30"),"text-info":on("neutral-40"),"text-inverse":on("neutral-100"),icon:on("neutral-40"),"icon-subtle":on("neutral-50"),"icon-strongest":on("neutral-10"),"icon-primary":on("neutral-10"),"icon-primary-subtle":on("neutral-30"),"icon-primary-subtlest":on("neutral-60"),"icon-hover":on("neutral-70"),"icon-selected":on("brand-20"),"icon-selected-hover":on("brand-10"),"icon-disabled":on("neutral-50"),"icon-disabled-subtle":on("neutral-70"),"icon-selected-disabled":on("neutral-40"),"icon-success":on("success-40"),"icon-warning":on("warning-60"),"icon-error":on("brand-30"),"icon-error-strong":on("brand-10"),"icon-info":on("neutral-40"),"icon-inverse":on("neutral-100"),"icon-primary-inverse":"#F9B371",border:on("neutral-90"),"border-strong":on("neutral-30"),"border-stronger":on("neutral-20"),"border-primary":on("neutral-40"),"border-primary-subtle":on("neutral-60"),"border-hover":on("neutral-80"),"border-hover-strong":on("neutral-10"),"border-selected":on("brand-20"),"border-selected-subtle":on("neutral-40"),"border-selected-subtlest":on("neutral-70"),"border-selected-hover":on("neutral-10"),"border-focus":on("neutral-20"),"border-focus-strong":on("neutral-10"),"border-disabled":on("neutral-90"),"border-selected-disabled":on("neutral-80"),"border-success":on("success-40"),"border-warning":on("warning-60"),"border-error":on("brand-30"),"border-error-focus":on("brand-20"),"border-error-focus-strong":on("brand-10"),"border-error-strong":on("brand-20"),"border-info":on("neutral-40"),bg:on("neutral-100"),"bg-strong":on("neutral-95"),"bg-stronger":on("neutral-90"),"bg-strongest":on("neutral-80"),"bg-hover":on("brand-90"),"bg-hover-strong":on("brand-80"),"bg-hover-subtle":on("neutral-90"),"bg-hover-neutral":on("neutral-90"),"bg-hover-neutral-strong":on("neutral-90"),"bg-selected":on("brand-100"),"bg-selected-hover":on("brand-30"),"bg-selected-strong":on("brand-50"),"bg-selected-stronger":on("brand-40"),"bg-selected-strongest":on("brand-20"),"bg-selected-strongest-hover":on("brand-10"),"bg-disabled":on("neutral-90"),"bg-selected-disabled":on("neutral-90"),"bg-selected-stronger-disabled":on("neutral-80"),"bg-success":on("success-100"),"bg-success-hover":on("success-95"),"bg-success-strong":on("success-50"),"bg-success-strong-hover":on("success-40"),"bg-warning":on("warning-100"),"bg-warning-hover":on("warning-95"),"bg-warning-strong":on("warning-50"),"bg-warning-strong-hover":on("warning-40"),"bg-info":on("neutral-95"),"bg-info-hover":on("info-95"),"bg-info-strong":on("info-50"),"bg-info-strong-hover":on("info-40"),"bg-error":on("brand-100"),"bg-error-hover":on("error-95"),"bg-error-strong":on("error-50"),"bg-error-strong-hover":on("error-40"),"bg-inverse":on("neutral-40"),"bg-inverse-subtle":on("neutral-60"),"bg-inverse-subtler":on("neutral-70"),"bg-inverse-subtlest":on("neutral-80"),"bg-inverse-hover":on("neutral-30"),"bg-primary":on("brand-20"),"bg-primary-subtle":on("brand-60"),"bg-primary-subtler":on("brand-80"),"bg-primary-subtlest":on("brand-100"),"bg-available":on("success-60"),"bg-primary-hover":on("brand-10"),"bg-primary-subtlest-hover":on("brand-80"),"bg-primary-subtlest-selected":on("brand-40"),"overlay-strong":"rgba(25, 25, 25, 0.95)","overlay-subtle":"rgba(25, 25, 25, 0.20)",hyperlink:on("neutral-10"),"hyperlink-hover":on("neutral-40"),"hyperlink-visited":on("neutral-50"),"hyperlink-inverse":"#F8AE68","focus-ring":on("primary-50"),"focus-ring-inverse":on("white")},cn={text:on("neutral-20"),"text-subtle":on("neutral-30"),"text-subtler":on("neutral-50"),"text-subtlest":on("neutral-60"),"text-primary":on("primary-50"),"text-primary-strongest":on("primary-20"),"text-hover":on("primary-40"),"text-selected":on("primary-50"),"text-selected-hover":on("primary-40"),"text-disabled":on("neutral-50"),"text-disabled-subtle":on("neutral-60"),"text-disabled-subtlest":on("neutral-80"),"text-selected-disabled":on("neutral-20"),"text-success":on("success-40"),"text-warning":on("warning-40"),"text-error":on("error-40"),"text-info":on("info-40"),"text-inverse":on("white"),icon:on("neutral-50"),"icon-subtle":on("neutral-60"),"icon-strongest":on("neutral-20"),"icon-primary":on("primary-50"),"icon-primary-subtle":on("primary-60"),"icon-primary-subtlest":on("primary-70"),"icon-hover":on("primary-40"),"icon-selected":on("primary-50"),"icon-selected-hover":on("primary-40"),"icon-disabled":on("neutral-50"),"icon-disabled-subtle":on("neutral-60"),"icon-selected-disabled":on("neutral-60"),"icon-success":on("success-50"),"icon-warning":on("warning-60"),"icon-error":on("error-50"),"icon-error-strong":on("error-40"),"icon-info":on("info-50"),"icon-inverse":on("white"),"icon-primary-inverse":on("primary-inverse"),border:on("neutral-90"),"border-strong":on("neutral-70"),"border-stronger":on("neutral-50"),"border-primary":on("primary-50"),"border-primary-subtle":on("primary-60"),"border-hover":on("primary-90"),"border-hover-strong":on("primary-60"),"border-selected":on("primary-50"),"border-selected-subtle":on("primary-70"),"border-selected-subtlest":on("primary-90"),"border-selected-hover":on("primary-40"),"border-focus":on("primary-60"),"border-focus-strong":on("primary-50"),"border-disabled":on("neutral-90"),"border-selected-disabled":on("neutral-70"),"border-success":on("success-60"),"border-warning":on("warning-60"),"border-error":on("error-60"),"border-error-focus":on("error-60"),"border-error-focus-strong":on("error-40"),"border-error-strong":on("error-40"),"border-info":on("info-60"),bg:on("white"),"bg-strong":on("neutral-100"),"bg-stronger":on("neutral-95"),"bg-strongest":on("neutral-90"),"bg-hover":on("primary-95"),"bg-hover-strong":on("primary-90"),"bg-hover-subtle":on("primary-100"),"bg-hover-neutral":on("neutral-100"),"bg-hover-neutral-strong":on("neutral-90"),"bg-selected":on("primary-95"),"bg-selected-hover":on("primary-90"),"bg-selected-strong":on("primary-90"),"bg-selected-stronger":on("primary-70"),"bg-selected-strongest":on("primary-50"),"bg-selected-strongest-hover":on("primary-40"),"bg-disabled":on("neutral-95"),"bg-selected-disabled":on("neutral-95"),"bg-selected-stronger-disabled":on("neutral-70"),"bg-success":on("success-100"),"bg-success-hover":on("success-95"),"bg-success-strong":on("success-50"),"bg-success-strong-hover":on("success-40"),"bg-warning":on("warning-100"),"bg-warning-hover":on("warning-95"),"bg-warning-strong":on("warning-50"),"bg-warning-strong-hover":on("warning-40"),"bg-info":on("info-100"),"bg-info-hover":on("info-95"),"bg-info-strong":on("info-50"),"bg-info-strong-hover":on("info-40"),"bg-error":on("error-100"),"bg-error-hover":on("error-95"),"bg-error-strong":on("error-50"),"bg-error-strong-hover":on("error-40"),"bg-inverse":on("neutral-20"),"bg-inverse-subtle":on("neutral-30"),"bg-inverse-subtler":on("neutral-50"),"bg-inverse-subtlest":on("neutral-60"),"bg-inverse-hover":on("neutral-40"),"bg-primary":on("primary-50"),"bg-primary-subtle":on("primary-60"),"bg-primary-subtler":on("primary-95"),"bg-primary-subtlest":on("primary-100"),"bg-available":"#6DD0A1","bg-primary-hover":on("primary-40"),"bg-primary-subtlest-hover":on("primary-90"),"bg-primary-subtlest-selected":on("primary-90"),"overlay-strong":"rgba(40, 40, 40, 0.85)","overlay-subtle":"rgba(40, 40, 40, 0.20)",hyperlink:on("primary-50"),"hyperlink-hover":on("primary-40"),"hyperlink-visited":on("primary-40"),"hyperlink-inverse":on("primary-inverse"),"focus-ring":on("primary-50"),"focus-ring-inverse":on("white")},un={text:on("neutral-100"),"text-subtle":on("neutral-80"),"text-subtler":on("neutral-60"),"text-subtlest":on("neutral-50"),"text-primary":on("primary-60"),"text-primary-strongest":on("primary-90"),"text-hover":on("primary-70"),"text-selected":on("primary-60"),"text-selected-hover":on("primary-70"),"text-disabled":on("neutral-60"),"text-disabled-subtle":on("neutral-50"),"text-disabled-subtlest":on("neutral-30"),"text-selected-disabled":on("neutral-90"),"text-success":on("success-70"),"text-warning":on("warning-70"),"text-error":on("error-70"),"text-info":on("info-70"),"text-inverse":on("black"),icon:on("neutral-60"),"icon-subtle":on("neutral-50"),"icon-strongest":on("neutral-90"),"icon-primary":on("primary-60"),"icon-primary-subtle":on("primary-50"),"icon-primary-subtlest":on("primary-40"),"icon-hover":on("primary-70"),"icon-selected":on("primary-60"),"icon-selected-hover":on("primary-70"),"icon-disabled":on("neutral-60"),"icon-disabled-subtle":on("neutral-50"),"icon-selected-disabled":on("neutral-50"),"icon-success":on("success-60"),"icon-warning":on("warning-50"),"icon-error":on("error-60"),"icon-error-strong":on("error-70"),"icon-info":on("info-60"),"icon-inverse":on("black"),"icon-primary-inverse":on("primary-inverse"),border:on("neutral-20"),"border-strong":on("neutral-40"),"border-stronger":on("neutral-60"),"border-primary":on("primary-60"),"border-primary-subtle":on("primary-50"),"border-hover":on("primary-20"),"border-hover-strong":on("primary-50"),"border-selected":on("primary-60"),"border-selected-subtle":on("primary-40"),"border-selected-subtlest":on("primary-20"),"border-selected-hover":on("primary-70"),"border-focus":on("primary-50"),"border-focus-strong":on("primary-60"),"border-disabled":on("neutral-20"),"border-selected-disabled":on("neutral-40"),"border-success":on("success-50"),"border-warning":on("warning-50"),"border-error":on("error-50"),"border-error-focus":on("error-50"),"border-error-focus-strong":on("error-70"),"border-error-strong":on("error-70"),"border-info":on("info-50"),bg:on("black"),"bg-strong":on("neutral-10"),"bg-stronger":on("neutral-20"),"bg-strongest":on("neutral-20"),"bg-hover":on("primary-20"),"bg-hover-strong":on("primary-20"),"bg-hover-subtle":on("primary-10"),"bg-hover-neutral":on("neutral-10"),"bg-hover-neutral-strong":on("neutral-20"),"bg-selected":on("primary-20"),"bg-selected-hover":on("primary-20"),"bg-selected-strong":on("primary-20"),"bg-selected-stronger":on("primary-40"),"bg-selected-strongest":on("primary-60"),"bg-selected-strongest-hover":on("primary-70"),"bg-disabled":on("neutral-20"),"bg-selected-disabled":on("neutral-20"),"bg-selected-stronger-disabled":on("neutral-40"),"bg-success":on("success-10"),"bg-success-hover":on("success-20"),"bg-success-strong":on("success-60"),"bg-success-strong-hover":on("success-70"),"bg-warning":on("warning-10"),"bg-warning-hover":on("warning-20"),"bg-warning-strong":on("warning-60"),"bg-warning-strong-hover":on("warning-70"),"bg-info":on("info-10"),"bg-info-hover":on("info-20"),"bg-info-strong":on("info-60"),"bg-info-strong-hover":on("info-70"),"bg-error":on("error-10"),"bg-error-hover":on("error-20"),"bg-error-strong":on("error-60"),"bg-error-strong-hover":on("error-70"),"bg-inverse":on("neutral-90"),"bg-inverse-subtle":on("neutral-80"),"bg-inverse-subtler":on("neutral-60"),"bg-inverse-subtlest":on("neutral-50"),"bg-inverse-hover":on("neutral-70"),"bg-primary":on("primary-60"),"bg-primary-subtle":on("primary-50"),"bg-primary-subtler":on("primary-20"),"bg-primary-subtlest":on("primary-10"),"bg-available":"#185339","bg-primary-hover":on("primary-70"),"bg-primary-subtlest-hover":on("primary-20"),"bg-primary-subtlest-selected":on("primary-20"),"overlay-strong":"rgba(78, 78, 78, 0.80)","overlay-subtle":"rgba(78, 78, 78, 0.50)",hyperlink:on("primary-60"),"hyperlink-hover":on("primary-70"),"hyperlink-visited":on("primary-70"),"hyperlink-inverse":on("primary-inverse"),"focus-ring":on("primary-60"),"focus-ring-inverse":on("black")},hn={collections:{lifesg:an,bookingsg:an,rbs:an,mylegacy:an,ccube:an,oneservice:an,pa:dn,a11yplayground:cn,supportgowhere:an,imda:an,spf:an},defaultValue:"lifesg"},gn={collections:{lifesg:ln,bookingsg:ln,rbs:ln,mylegacy:ln,ccube:ln,oneservice:ln,pa:ln,a11yplayground:un,supportgowhere:ln,imda:ln,spf:ln},defaultValue:"lifesg"},mn=e=>r=>{var t;const n=r.theme,o="dark"===(null==n?void 0:n.colourMode),i=Lt(o?gn:hn,null==n?void 0:n.colourScheme),s=o?"semanticColourDark":"semanticColour",a=null===(t=null==n?void 0:n.overrides)||void 0===t?void 0:t[s],l=a?jt(i,e,a):i[e];return"function"==typeof l?l(r):l},fn={text:mn("text"),"text-subtle":mn("text-subtle"),"text-subtler":mn("text-subtler"),"text-subtlest":mn("text-subtlest"),"text-primary":mn("text-primary"),"text-primary-strongest":mn("text-primary-strongest"),"text-hover":mn("text-hover"),"text-selected":mn("text-selected"),"text-selected-hover":mn("text-selected-hover"),"text-disabled":mn("text-disabled"),"text-disabled-subtle":mn("text-disabled-subtle"),"text-disabled-subtlest":mn("text-disabled-subtlest"),"text-selected-disabled":mn("text-selected-disabled"),"text-success":mn("text-success"),"text-warning":mn("text-warning"),"text-error":mn("text-error"),"text-info":mn("text-info"),"text-inverse":mn("text-inverse"),icon:mn("icon"),"icon-subtle":mn("icon-subtle"),"icon-strongest":mn("icon-strongest"),"icon-primary":mn("icon-primary"),"icon-primary-subtle":mn("icon-primary-subtle"),"icon-primary-subtlest":mn("icon-primary-subtlest"),"icon-hover":mn("icon-hover"),"icon-selected":mn("icon-selected"),"icon-selected-hover":mn("icon-selected-hover"),"icon-disabled":mn("icon-disabled"),"icon-disabled-subtle":mn("icon-disabled-subtle"),"icon-selected-disabled":mn("icon-selected-disabled"),"icon-success":mn("icon-success"),"icon-warning":mn("icon-warning"),"icon-error":mn("icon-error"),"icon-error-strong":mn("icon-error-strong"),"icon-info":mn("icon-info"),"icon-inverse":mn("icon-inverse"),"icon-primary-inverse":mn("icon-primary-inverse"),border:mn("border"),"border-strong":mn("border-strong"),"border-stronger":mn("border-stronger"),"border-primary":mn("border-primary"),"border-primary-subtle":mn("border-primary-subtle"),"border-hover":mn("border-hover"),"border-hover-strong":mn("border-hover-strong"),"border-selected":mn("border-selected"),"border-selected-subtle":mn("border-selected-subtle"),"border-selected-subtlest":mn("border-selected-subtlest"),"border-selected-hover":mn("border-selected-hover"),"border-focus":mn("border-focus"),"border-focus-strong":mn("border-focus-strong"),"border-disabled":mn("border-disabled"),"border-selected-disabled":mn("border-selected-disabled"),"border-success":mn("border-success"),"border-warning":mn("border-warning"),"border-error":mn("border-error"),"border-error-focus":mn("border-error-focus"),"border-error-focus-strong":mn("border-error-focus-strong"),"border-error-strong":mn("border-error-strong"),"border-info":mn("border-info"),bg:mn("bg"),"bg-strong":mn("bg-strong"),"bg-stronger":mn("bg-stronger"),"bg-strongest":mn("bg-strongest"),"bg-hover":mn("bg-hover"),"bg-hover-strong":mn("bg-hover-strong"),"bg-hover-subtle":mn("bg-hover-subtle"),"bg-hover-neutral":mn("bg-hover-neutral"),"bg-hover-neutral-strong":mn("bg-hover-neutral-strong"),"bg-selected":mn("bg-selected"),"bg-selected-hover":mn("bg-selected-hover"),"bg-selected-strong":mn("bg-selected-strong"),"bg-selected-stronger":mn("bg-selected-stronger"),"bg-selected-strongest":mn("bg-selected-strongest"),"bg-selected-strongest-hover":mn("bg-selected-strongest-hover"),"bg-disabled":mn("bg-disabled"),"bg-selected-disabled":mn("bg-selected-disabled"),"bg-selected-stronger-disabled":mn("bg-selected-stronger-disabled"),"bg-success":mn("bg-success"),"bg-success-hover":mn("bg-success-hover"),"bg-success-strong":mn("bg-success-strong"),"bg-success-strong-hover":mn("bg-success-strong-hover"),"bg-warning":mn("bg-warning"),"bg-warning-hover":mn("bg-warning-hover"),"bg-warning-strong":mn("bg-warning-strong"),"bg-warning-strong-hover":mn("bg-warning-strong-hover"),"bg-info":mn("bg-info"),"bg-info-hover":mn("bg-info-hover"),"bg-info-strong":mn("bg-info-strong"),"bg-info-strong-hover":mn("bg-info-strong-hover"),"bg-error":mn("bg-error"),"bg-error-hover":mn("bg-error-hover"),"bg-error-strong":mn("bg-error-strong"),"bg-error-strong-hover":mn("bg-error-strong-hover"),"bg-inverse":mn("bg-inverse"),"bg-inverse-subtle":mn("bg-inverse-subtle"),"bg-inverse-subtler":mn("bg-inverse-subtler"),"bg-inverse-subtlest":mn("bg-inverse-subtlest"),"bg-inverse-hover":mn("bg-inverse-hover"),"bg-primary":mn("bg-primary"),"bg-primary-subtle":mn("bg-primary-subtle"),"bg-primary-subtler":mn("bg-primary-subtler"),"bg-primary-subtlest":mn("bg-primary-subtlest"),"bg-available":mn("bg-available"),"bg-primary-hover":mn("bg-primary-hover"),"bg-primary-subtlest-hover":mn("bg-primary-subtlest-hover"),"bg-primary-subtlest-selected":mn("bg-primary-subtlest-selected"),"overlay-strong":mn("overlay-strong"),"overlay-subtle":mn("overlay-subtle"),hyperlink:mn("hyperlink"),"hyperlink-hover":mn("hyperlink-hover"),"hyperlink-visited":mn("hyperlink-visited"),"hyperlink-inverse":mn("hyperlink-inverse"),"focus-ring":mn("focus-ring"),"focus-ring-inverse":mn("focus-ring-inverse")},pn={collections:{default:{solid:e=>r=>{var t,n,o;const{thickness:i,radius:s,colour:a}=e||{},l=null!==(t="function"==typeof i?i(r):i)&&void 0!==t?t:Nt["width-010"](r),d=null!==(n="function"==typeof s?s(r):s)&&void 0!==n?n:0,c=null!==(o="function"==typeof a?a(r):a)&&void 0!==o?o:fn.border(r),u=Nt.solid;return $`
            border: ${l} ${u} ${c};
            border-radius: ${d};
        `},"dashed-default":e=>r=>{var t,n,o;const{thickness:i,radius:s,colour:a}=e||{},l=null!==(t="function"==typeof i?i(r):i)&&void 0!==t?t:Nt["width-010"](r),d=null!==(n="function"==typeof s?s(r):s)&&void 0!==n?n:0,c=null!==(o="function"==typeof a?a(r):a)&&void 0!==o?o:fn.border(r),u=encodeURIComponent(`<svg width='100%' height='100%' xmlns='http://www.w3.org/2000/svg'><rect width='100%' height='100%' fill='none' rx='${d}' ry='${d}' stroke='${c}' stroke-width='${l}' stroke-dasharray='4, 8' stroke-dashoffset='0' stroke-linecap='square'/></svg>`);return $`
            background-image: url("data:image/svg+xml,${u}");
            border-radius: ${d};
        `}}},defaultValue:"default"},bn=e=>1===e.length&&"theme"in e[0],yn=e=>(...r)=>t=>{const n=bn(r)?[]:r,o=bn(r)?r[0]:t,i=o.theme;return(0,Lt(pn,null==i?void 0:i.borderScheme)[e])(...n)(o)},vn={solid:yn("solid"),"dashed-default":yn("dashed-default")},xn={collections:{default:{"xxs-min":0,"xxs-max":320,"xs-min":321,"xs-max":375,"sm-min":376,"sm-max":480,"md-min":481,"md-max":768,"lg-min":769,"lg-max":1200,"xl-min":1201,"xl-max":1440,"xxl-min":1441,"xxs-column":8,"xs-column":8,"sm-column":8,"md-column":8,"lg-column":12,"xl-column":12,"xxl-column":12,"xxs-gutter":16,"xs-gutter":16,"sm-gutter":16,"md-gutter":16,"lg-gutter":32,"xl-gutter":32,"xxl-gutter":32,"xxs-margin":24,"xs-margin":24,"sm-margin":24,"md-margin":24,"lg-margin":48,"xl-margin":48,"xxl-margin":48}},defaultValue:"default"},wn=e=>r=>{var t;const n=r.theme,o=Lt(xn,null==n?void 0:n.breakpointScheme);let i;return i=(null===(t=null==n?void 0:n.overrides)||void 0===t?void 0:t.breakpoint)?jt(o,e,n.overrides.breakpoint):o[e],i},Fn={"xxs-min":wn("xxs-min"),"xxs-max":wn("xxs-max"),"xs-min":wn("xs-min"),"xs-max":wn("xs-max"),"sm-min":wn("sm-min"),"sm-max":wn("sm-max"),"md-min":wn("md-min"),"md-max":wn("md-max"),"lg-min":wn("lg-min"),"lg-max":wn("lg-max"),"xl-min":wn("xl-min"),"xl-max":wn("xl-max"),"xxl-min":wn("xxl-min"),"xxs-column":wn("xxs-column"),"xs-column":wn("xs-column"),"sm-column":wn("sm-column"),"md-column":wn("md-column"),"lg-column":wn("lg-column"),"xl-column":wn("xl-column"),"xxl-column":wn("xxl-column"),"xxs-gutter":wn("xxs-gutter"),"xs-gutter":wn("xs-gutter"),"sm-gutter":wn("sm-gutter"),"md-gutter":wn("md-gutter"),"lg-gutter":wn("lg-gutter"),"xl-gutter":wn("xl-gutter"),"xxl-gutter":wn("xxl-gutter"),"xxs-margin":wn("xxs-margin"),"xs-margin":wn("xs-margin"),"sm-margin":wn("sm-margin"),"md-margin":wn("md-margin"),"lg-margin":wn("lg-margin"),"xl-margin":wn("xl-margin"),"xxl-margin":wn("xxl-margin")},$n=e=>("max-width"===e?["xxs","xs","sm","md","lg","xl"]:["xxs","xs","sm","md","lg","xl","xxl"]).reduce(((r,t)=>(r[t]=((e,r)=>{const t=Fn["max-width"===e?`${r}-max`:`${r}-min`];return r=>{const n=t(r);return`@media screen and (${e}: ${n}px)`}})(e,t),r)),{}),Cn={MaxWidth:$n("max-width"),MinWidth:$n("min-width")},En={collections:{default:{"heading-size-xxl":"3rem","heading-size-xl":"2.5rem","heading-size-lg":"2rem","heading-size-md":"1.625rem","heading-size-sm":"1.375rem","heading-size-xs":"1.125rem","heading-lh-xxl":"3.5rem","heading-lh-xl":"3rem","heading-lh-lg":"2.5rem","heading-lh-md":"2.25rem","heading-lh-sm":"1.75rem","heading-lh-xs":"1.625rem","heading-ls-xxl":"-0.056rem","heading-ls-xl":"-0.032rem","heading-ls-lg":"-0.032rem","heading-ls-md":"0rem","heading-ls-sm":"0rem","heading-ls-xs":"0rem","weight-light":"300","weight-regular":"400","weight-semibold":"600","weight-bold":"700","font-family":"Open Sans","body-size-baseline":"1.125rem","body-size-md":"1rem","body-size-sm":"0.875rem","body-size-xs":"0.75rem","body-lh-baseline":"1.625rem","body-lh-md":"1.5rem","body-lh-sm":"1.625rem","body-lh-xs":"1.25rem","body-ls-baseline":"0rem","body-ls-md":"0.014rem","body-ls-sm":"0.012rem","body-ls-xs":"0.012rem","form-label-size":"1rem","form-description-size":"0.875rem","form-label-lh":"1.5rem","form-description-lh":"1.6rem","form-label-ls":"0.014rem","form-description-ls":"0.012rem"},bookingsg:{"heading-size-xxl":"3rem","heading-size-xl":"2.5rem","heading-size-lg":"2rem","heading-size-md":"1.625rem","heading-size-sm":"1.375rem","heading-size-xs":"1.125rem","heading-lh-xxl":"3.5rem","heading-lh-xl":"3rem","heading-lh-lg":"2.5rem","heading-lh-md":"2.25rem","heading-lh-sm":"1.75rem","heading-lh-xs":"1.75rem","heading-ls-xxl":"-0.056rem","heading-ls-xl":"-0.032rem","heading-ls-lg":"-0.032rem","heading-ls-md":"0rem","heading-ls-sm":"0rem","heading-ls-xs":"0rem","weight-light":"300","weight-regular":"400","weight-semibold":"600","weight-bold":"700","font-family":"Plus Jakarta Sans","body-size-baseline":"1.125rem","body-size-md":"1rem","body-size-sm":"0.875rem","body-size-xs":"0.75rem","body-lh-baseline":"1.75rem","body-lh-md":"1.5rem","body-lh-sm":"1.6rem","body-lh-xs":"1.2rem","body-ls-baseline":"0rem","body-ls-md":"0.014rem","body-ls-sm":"0.012rem","body-ls-xs":"0.012rem","form-label-size":"1rem","form-description-size":"0.875rem","form-label-lh":"1.5rem","form-description-lh":"1.6rem","form-label-ls":"0.014rem","form-description-ls":"0.012rem"},pa:{"heading-size-xxl":"2.5rem","heading-size-xl":"2rem","heading-size-lg":"1.75rem","heading-size-md":"1.5rem","heading-size-sm":"1.25rem","heading-size-xs":"1rem","heading-lh-xxl":"3rem","heading-lh-xl":"2.5rem","heading-lh-lg":"2.25rem","heading-lh-md":"2rem","heading-lh-sm":"2rem","heading-lh-xs":"1.75rem","heading-ls-xxl":"-0.032rem","heading-ls-xl":"-0.032rem","heading-ls-lg":"0rem","heading-ls-md":"0rem","heading-ls-sm":"0rem","heading-ls-xs":"0rem","weight-light":"300","weight-regular":"400","weight-semibold":"600","weight-bold":"700","font-family":"Lato","body-size-baseline":"1rem","body-size-md":"0.875rem","body-size-sm":"0.75rem","body-size-xs":"0.625rem","body-lh-baseline":"1.75rem","body-lh-md":"1.5rem","body-lh-sm":"1.25rem","body-lh-xs":"1.25rem","body-ls-baseline":"0rem","body-ls-md":"0.014rem","body-ls-sm":"0.012rem","body-ls-xs":"0.012rem","form-label-size":"1rem","form-description-size":"0.875rem","form-label-lh":"1.5rem","form-description-lh":"1.6rem","form-label-ls":"0.014rem","form-description-ls":"0.012rem"},a11yplayground:{"heading-size-xxl":"3rem","heading-size-xl":"2.5rem","heading-size-lg":"2rem","heading-size-md":"1.625rem","heading-size-sm":"1.375rem","heading-size-xs":"1.125rem","heading-lh-xxl":"3.5rem","heading-lh-xl":"3rem","heading-lh-lg":"2.5rem","heading-lh-md":"2.25rem","heading-lh-sm":"1.75rem","heading-lh-xs":"1.625rem","heading-ls-xxl":"-0.056rem","heading-ls-xl":"-0.032rem","heading-ls-lg":"-0.032rem","heading-ls-md":"0rem","heading-ls-sm":"0rem","heading-ls-xs":"0rem","weight-light":"300","weight-regular":"400","weight-semibold":"600","weight-bold":"700","font-family":"Atkinson Hyperlegible Next","body-size-baseline":"1.125rem","body-size-md":"1rem","body-size-sm":"0.875rem","body-size-xs":"0.75rem","body-lh-baseline":"1.625rem","body-lh-md":"1.5rem","body-lh-sm":"1.625rem","body-lh-xs":"1.25rem","body-ls-baseline":"0rem","body-ls-md":"0.014rem","body-ls-sm":"0.012rem","body-ls-xs":"0.012rem","form-label-size":"1.125rem","form-description-size":"1rem","form-label-lh":"1.5rem","form-description-lh":"1.625rem","form-label-ls":"0rem","form-description-ls":"0.00875rem"},supportgowhere:{"heading-size-xxl":"3rem","heading-size-xl":"2.5rem","heading-size-lg":"2rem","heading-size-md":"1.625rem","heading-size-sm":"1.375rem","heading-size-xs":"1.125rem","heading-lh-xxl":"3.5rem","heading-lh-xl":"3rem","heading-lh-lg":"2.5rem","heading-lh-md":"2.25rem","heading-lh-sm":"1.75rem","heading-lh-xs":"1.625rem","heading-ls-xxl":"-0.056rem","heading-ls-xl":"-0.032rem","heading-ls-lg":"-0.032rem","heading-ls-md":"0rem","heading-ls-sm":"0rem","heading-ls-xs":"0rem","weight-light":"300","weight-regular":"400","weight-semibold":"600","weight-bold":"700","font-family":"Libre Franklin","body-size-baseline":"1.125rem","body-size-md":"1rem","body-size-sm":"0.875rem","body-size-xs":"0.75rem","body-lh-baseline":"1.625rem","body-lh-md":"1.5rem","body-lh-sm":"1.625rem","body-lh-xs":"1.25rem","body-ls-baseline":"0rem","body-ls-md":"0.014rem","body-ls-sm":"0.012rem","body-ls-xs":"0.012rem","form-label-size":"1rem","form-description-size":"0.875rem","form-label-lh":"1.5rem","form-description-lh":"1.6rem","form-label-ls":"0.014rem","form-description-ls":"0.012rem"},imda:{"heading-size-xxl":"3rem","heading-size-xl":"2.5rem","heading-size-lg":"2rem","heading-size-md":"1.625rem","heading-size-sm":"1.375rem","heading-size-xs":"1.125rem","heading-lh-xxl":"3.5rem","heading-lh-xl":"3rem","heading-lh-lg":"2.5rem","heading-lh-md":"2.25rem","heading-lh-sm":"1.75rem","heading-lh-xs":"1.625rem","heading-ls-xxl":"-0.056rem","heading-ls-xl":"-0.032rem","heading-ls-lg":"-0.032rem","heading-ls-md":"0rem","heading-ls-sm":"0rem","heading-ls-xs":"0rem","weight-light":"300","weight-regular":"400","weight-semibold":"600","weight-bold":"700","font-family":"Montserrat","body-size-baseline":"1.125rem","body-size-md":"1rem","body-size-sm":"0.875rem","body-size-xs":"0.75rem","body-lh-baseline":"1.625rem","body-lh-md":"1.5rem","body-lh-sm":"1.625rem","body-lh-xs":"1.25rem","body-ls-baseline":"0rem","body-ls-md":"0.014rem","body-ls-sm":"0.012rem","body-ls-xs":"0.012rem","form-label-size":"1rem","form-description-size":"0.875rem","form-label-lh":"1.5rem","form-description-lh":"1.625rem","form-label-ls":"0.014rem","form-description-ls":"0.012rem"},spf:{"heading-size-xxl":"3.75rem","heading-size-xl":"3rem","heading-size-lg":"2.5rem","heading-size-md":"2rem","heading-size-sm":"1.75rem","heading-size-xs":"1.5rem","heading-lh-xxl":"4.5rem","heading-lh-xl":"3.5rem","heading-lh-lg":"3rem","heading-lh-md":"2.25rem","heading-lh-sm":"2rem","heading-lh-xs":"1.75rem","heading-ls-xxl":"-0.035rem","heading-ls-xl":"-0.02rem","heading-ls-lg":"-0.02rem","heading-ls-md":"0rem","heading-ls-sm":"0rem","heading-ls-xs":"0rem","weight-light":"300","weight-regular":"400","weight-semibold":"600","weight-bold":"700","font-family":"Public Sans","body-size-baseline":"1.2rem","body-size-md":"1.125rem","body-size-sm":"1rem","body-size-xs":"0.875rem","body-lh-baseline":"1.5rem","body-lh-md":"1.5rem","body-lh-sm":"1.5rem","body-lh-xs":"1.125rem","body-ls-baseline":"0rem","body-ls-md":"0.009rem","body-ls-sm":"0.008rem","body-ls-xs":"0.008rem","form-label-size":"1.125rem","form-description-size":"1rem","form-label-lh":"1.5rem","form-description-lh":"1.625rem","form-label-ls":"0.009rem","form-description-ls":"0.008rem"}},defaultValue:"default"},Sn=e=>r=>{var t;const n=r.theme,o=Lt(En,null==n?void 0:n.fontScheme);return(null===(t=null==n?void 0:n.overrides)||void 0===t?void 0:t.fontSpec)?jt(o,e,n.overrides.fontSpec):o[e]},kn={"heading-size-xxl":Sn("heading-size-xxl"),"heading-size-xl":Sn("heading-size-xl"),"heading-size-lg":Sn("heading-size-lg"),"heading-size-md":Sn("heading-size-md"),"heading-size-sm":Sn("heading-size-sm"),"heading-size-xs":Sn("heading-size-xs"),"heading-lh-xxl":Sn("heading-lh-xxl"),"heading-lh-xl":Sn("heading-lh-xl"),"heading-lh-lg":Sn("heading-lh-lg"),"heading-lh-md":Sn("heading-lh-md"),"heading-lh-sm":Sn("heading-lh-sm"),"heading-lh-xs":Sn("heading-lh-xs"),"heading-ls-xxl":Sn("heading-ls-xxl"),"heading-ls-xl":Sn("heading-ls-xl"),"heading-ls-lg":Sn("heading-ls-lg"),"heading-ls-md":Sn("heading-ls-md"),"heading-ls-sm":Sn("heading-ls-sm"),"heading-ls-xs":Sn("heading-ls-xs"),"weight-light":Sn("weight-light"),"weight-regular":Sn("weight-regular"),"weight-semibold":Sn("weight-semibold"),"weight-bold":Sn("weight-bold"),"font-family":Sn("font-family"),"body-size-baseline":Sn("body-size-baseline"),"body-size-md":Sn("body-size-md"),"body-size-sm":Sn("body-size-sm"),"body-size-xs":Sn("body-size-xs"),"body-lh-baseline":Sn("body-lh-baseline"),"body-lh-md":Sn("body-lh-md"),"body-lh-sm":Sn("body-lh-sm"),"body-lh-xs":Sn("body-lh-xs"),"body-ls-baseline":Sn("body-ls-baseline"),"body-ls-md":Sn("body-ls-md"),"body-ls-sm":Sn("body-ls-sm"),"body-ls-xs":Sn("body-ls-xs"),"form-label-size":Sn("form-label-size"),"form-description-size":Sn("form-description-size"),"form-label-lh":Sn("form-label-lh"),"form-description-lh":Sn("form-description-lh"),"form-label-ls":Sn("form-label-ls"),"form-description-ls":Sn("form-description-ls")},Dn=(e,r,t,n,o)=>{const{disableLigatures:i}=o||{};return $`
        font-family: ${Sn("font-family")};
        font-size: ${Sn(e)};
        font-weight: ${Sn(r)};
        line-height: ${Sn(t)};
        letter-spacing: ${Sn(n)};

        font-variant: ${i?"no-common-ligatures":"normal"};
    `},Bn=(e={})=>({"heading-xxl-light":Dn("heading-size-xxl","weight-light","heading-lh-xxl","heading-ls-xxl",e),"heading-xxl-regular":Dn("heading-size-xxl","weight-regular","heading-lh-xxl","heading-ls-xxl",e),"heading-xxl-semibold":Dn("heading-size-xxl","weight-semibold","heading-lh-xxl","heading-ls-xxl",e),"heading-xxl-bold":Dn("heading-size-xxl","weight-bold","heading-lh-xxl","heading-ls-xxl",e),"heading-xl-light":Dn("heading-size-xl","weight-light","heading-lh-xl","heading-ls-xl",e),"heading-xl-regular":Dn("heading-size-xl","weight-regular","heading-lh-xl","heading-ls-xl",e),"heading-xl-semibold":Dn("heading-size-xl","weight-semibold","heading-lh-xl","heading-ls-xl",e),"heading-xl-bold":Dn("heading-size-xl","weight-bold","heading-lh-xl","heading-ls-xl",e),"heading-lg-light":Dn("heading-size-lg","weight-light","heading-lh-lg","heading-ls-lg",e),"heading-lg-regular":Dn("heading-size-lg","weight-regular","heading-lh-lg","heading-ls-lg",e),"heading-lg-semibold":Dn("heading-size-lg","weight-semibold","heading-lh-lg","heading-ls-lg",e),"heading-lg-bold":Dn("heading-size-lg","weight-bold","heading-lh-lg","heading-ls-lg",e),"heading-md-light":Dn("heading-size-md","weight-light","heading-lh-md","heading-ls-md",e),"heading-md-regular":Dn("heading-size-md","weight-regular","heading-lh-md","heading-ls-md",e),"heading-md-semibold":Dn("heading-size-md","weight-semibold","heading-lh-md","heading-ls-md",e),"heading-md-bold":Dn("heading-size-md","weight-bold","heading-lh-md","heading-ls-md",e),"heading-sm-light":Dn("heading-size-sm","weight-light","heading-lh-sm","heading-ls-sm",e),"heading-sm-regular":Dn("heading-size-sm","weight-regular","heading-lh-sm","heading-ls-sm",e),"heading-sm-semibold":Dn("heading-size-sm","weight-semibold","heading-lh-sm","heading-ls-sm",e),"heading-sm-bold":Dn("heading-size-sm","weight-bold","heading-lh-sm","heading-ls-sm",e),"heading-xs-light":Dn("heading-size-xs","weight-light","heading-lh-xs","heading-ls-xs",e),"heading-xs-regular":Dn("heading-size-xs","weight-regular","heading-lh-xs","heading-ls-xs",e),"heading-xs-semibold":Dn("heading-size-xs","weight-semibold","heading-lh-xs","heading-ls-xs",e),"heading-xs-bold":Dn("heading-size-xs","weight-bold","heading-lh-xs","heading-ls-xs",e),"body-baseline-light":Dn("body-size-baseline","weight-light","body-lh-baseline","body-ls-baseline",e),"body-baseline-regular":Dn("body-size-baseline","weight-regular","body-lh-baseline","body-ls-baseline",e),"body-baseline-semibold":Dn("body-size-baseline","weight-semibold","body-lh-baseline","body-ls-baseline",e),"body-baseline-bold":Dn("body-size-baseline","weight-bold","body-lh-baseline","body-ls-baseline",e),"body-md-light":Dn("body-size-md","weight-light","body-lh-md","body-ls-md",e),"body-md-regular":Dn("body-size-md","weight-regular","body-lh-md","body-ls-md",e),"body-md-semibold":Dn("body-size-md","weight-semibold","body-lh-md","body-ls-md",e),"body-md-bold":Dn("body-size-md","weight-bold","body-lh-md","body-ls-md",e),"body-sm-light":Dn("body-size-sm","weight-light","body-lh-sm","body-ls-sm",e),"body-sm-regular":Dn("body-size-sm","weight-regular","body-lh-sm","body-ls-sm",e),"body-sm-semibold":Dn("body-size-sm","weight-semibold","body-lh-sm","body-ls-sm",e),"body-sm-bold":Dn("body-size-sm","weight-bold","body-lh-sm","body-ls-sm",e),"body-xs-light":Dn("body-size-xs","weight-light","body-lh-xs","body-ls-xs",e),"body-xs-regular":Dn("body-size-xs","weight-regular","body-lh-xs","body-ls-xs",e),"body-xs-semibold":Dn("body-size-xs","weight-semibold","body-lh-xs","body-ls-xs",e),"body-xs-bold":Dn("body-size-xs","weight-bold","body-lh-xs","body-ls-xs",e),"form-label":Dn("form-label-size","weight-semibold","form-label-lh","form-label-ls",e),"form-description":Dn("form-description-size","weight-regular","form-description-lh","form-description-ls",e)}),In=Bn({disableLigatures:!0}),An={collections:{default:Bn(),bookingsg:In,pa:Bn({disableLigatures:!0}),a11yplayground:Bn({disableLigatures:!0}),supportgowhere:Bn({disableLigatures:!0}),imda:Bn({disableLigatures:!0}),spf:Bn({disableLigatures:!0})},defaultValue:"default"},Tn=e=>r=>{var t;const n=r.theme,o=Lt(An,null==n?void 0:n.fontScheme),i=(null===(t=null==n?void 0:n.overrides)||void 0===t?void 0:t.font)?jt(o,e,n.overrides.font):o[e];return"function"==typeof i?i(r):i},zn={"heading-xxl-light":Tn("heading-xxl-light"),"heading-xxl-regular":Tn("heading-xxl-regular"),"heading-xxl-semibold":Tn("heading-xxl-semibold"),"heading-xxl-bold":Tn("heading-xxl-bold"),"heading-xl-light":Tn("heading-xl-light"),"heading-xl-regular":Tn("heading-xl-regular"),"heading-xl-semibold":Tn("heading-xl-semibold"),"heading-xl-bold":Tn("heading-xl-bold"),"heading-lg-light":Tn("heading-lg-light"),"heading-lg-regular":Tn("heading-lg-regular"),"heading-lg-semibold":Tn("heading-lg-semibold"),"heading-lg-bold":Tn("heading-lg-bold"),"heading-md-light":Tn("heading-md-light"),"heading-md-regular":Tn("heading-md-regular"),"heading-md-semibold":Tn("heading-md-semibold"),"heading-md-bold":Tn("heading-md-bold"),"heading-sm-light":Tn("heading-sm-light"),"heading-sm-regular":Tn("heading-sm-regular"),"heading-sm-semibold":Tn("heading-sm-semibold"),"heading-sm-bold":Tn("heading-sm-bold"),"heading-xs-light":Tn("heading-xs-light"),"heading-xs-regular":Tn("heading-xs-regular"),"heading-xs-semibold":Tn("heading-xs-semibold"),"heading-xs-bold":Tn("heading-xs-bold"),"body-baseline-light":Tn("body-baseline-light"),"body-baseline-regular":Tn("body-baseline-regular"),"body-baseline-semibold":Tn("body-baseline-semibold"),"body-baseline-bold":Tn("body-baseline-bold"),"body-md-light":Tn("body-md-light"),"body-md-regular":Tn("body-md-regular"),"body-md-semibold":Tn("body-md-semibold"),"body-md-bold":Tn("body-md-bold"),"body-sm-light":Tn("body-sm-light"),"body-sm-regular":Tn("body-sm-regular"),"body-sm-semibold":Tn("body-sm-semibold"),"body-sm-bold":Tn("body-sm-bold"),"body-xs-light":Tn("body-xs-light"),"body-xs-regular":Tn("body-xs-regular"),"body-xs-semibold":Tn("body-xs-semibold"),"body-xs-bold":Tn("body-xs-bold"),"form-label":Tn("form-label"),"form-description":Tn("form-description")},On={collections:{default:{"duration-150":"150ms","duration-250":"250ms","duration-350":"350ms","duration-500":"500ms","duration-800":"800ms","duration-1000":"1000ms","ease-default":"cubic-bezier(0.45, 0.05, 0.55, 0.95)","ease-standard":"cubic-bezier(0.86, 0, 0.07, 1)","ease-entrance":"cubic-bezier(0.18, 0.13, 0, 1)","ease-exit":"cubic-bezier(1, 0, 0.8, 0.85)"}},defaultValue:"default"},Mn=e=>r=>{var t;const n=r.theme,o=Lt(On,null==n?void 0:n.motionScheme);return(null===(t=null==n?void 0:n.overrides)||void 0===t?void 0:t.motion)?jt(o,e,n.overrides.motion):o[e]},_n={"duration-150":Mn("duration-150"),"duration-250":Mn("duration-250"),"duration-350":Mn("duration-350"),"duration-500":Mn("duration-500"),"duration-800":Mn("duration-800"),"duration-1000":Mn("duration-1000"),"ease-default":Mn("ease-default"),"ease-standard":Mn("ease-standard"),"ease-entrance":Mn("ease-entrance"),"ease-exit":Mn("ease-exit")},Rn={collections:{default:{none:0,xs:2,sm:4,md:8,lg:12,full:9999},spf:{none:0,xs:2,sm:8,md:8,lg:12,full:9999}},defaultValue:"default"},Hn=e=>r=>{var t;const n=r.theme,o=Lt(Rn,null==n?void 0:n.radiusScheme);return(null===(t=null==n?void 0:n.overrides)||void 0===t?void 0:t.radius)?`${jt(o,e,n.overrides.radius)}px`:`${o[e]}px`},jn={none:Hn("none"),xs:Hn("xs"),sm:Hn("sm"),md:Hn("md"),lg:Hn("lg"),full:Hn("full")},Ln={collections:{default:{"spacing-0":0,"spacing-4":4,"spacing-8":8,"spacing-12":12,"spacing-16":16,"spacing-20":20,"spacing-24":24,"spacing-32":32,"spacing-40":40,"spacing-48":48,"spacing-64":64,"spacing-72":72,"layout-xs":8,"layout-sm":16,"layout-md":24,"layout-lg":32,"layout-xl":48,"layout-xxl":64,"layout-xxxl":128}},defaultValue:"default"},Pn=e=>r=>{var t;const n=r.theme,o=Lt(Ln,null==n?void 0:n.spacingScheme);return(null===(t=null==n?void 0:n.overrides)||void 0===t?void 0:t.spacing)?`${jt(o,e,n.overrides.spacing)}px`:`${o[e]}px`},Wn={"spacing-0":Pn("spacing-0"),"spacing-4":Pn("spacing-4"),"spacing-8":Pn("spacing-8"),"spacing-12":Pn("spacing-12"),"spacing-16":Pn("spacing-16"),"spacing-20":Pn("spacing-20"),"spacing-24":Pn("spacing-24"),"spacing-32":Pn("spacing-32"),"spacing-40":Pn("spacing-40"),"spacing-48":Pn("spacing-48"),"spacing-64":Pn("spacing-64"),"spacing-72":Pn("spacing-72"),"layout-xs":Pn("layout-xs"),"layout-sm":Pn("layout-sm"),"layout-md":Pn("layout-md"),"layout-lg":Pn("layout-lg"),"layout-xl":Pn("layout-xl"),"layout-xxl":Pn("layout-xxl"),"layout-xxxl":Pn("layout-xxxl")},Nn=(e,r)=>Object.assign(Object.assign({},e),{colourMode:r}),Vn=Object.assign(Object.assign({},fn),{Primitive:sn}),Yn=Object.assign(Object.assign({},zn),{Spec:kn}),Un=_n,qn=Object.assign(Object.assign({},Nt),{Util:vn}),Gn=Wn,Zn=jn,Qn=Fn,Xn=Cn,Kn={colourScheme:"lifesg",fontScheme:"default",motionScheme:"default",borderScheme:"default",spacingScheme:"default",radiusScheme:"default",shadowScheme:"default",breakpointScheme:"default",resourceScheme:"lifesg",componentScheme:"lifesg",_v2:{colorScheme:"base",textStyleScheme:"base",designTokenScheme:"base",resourceScheme:"base"}},Jn={colourScheme:"bookingsg",fontScheme:"bookingsg",motionScheme:"default",borderScheme:"default",spacingScheme:"default",radiusScheme:"default",shadowScheme:"default",breakpointScheme:"default",resourceScheme:"bookingsg",_v2:{colorScheme:"bookingsg",textStyleScheme:"base",designTokenScheme:"base",resourceScheme:"bookingsg"}},eo={colourScheme:"ccube",fontScheme:"default",motionScheme:"default",borderScheme:"default",spacingScheme:"default",radiusScheme:"default",shadowScheme:"default",breakpointScheme:"default",resourceScheme:"ccube",_v2:{colorScheme:"ccube",textStyleScheme:"base",designTokenScheme:"base",resourceScheme:"ccube"}},ro={colourScheme:"mylegacy",fontScheme:"default",motionScheme:"default",borderScheme:"default",spacingScheme:"default",radiusScheme:"default",shadowScheme:"default",breakpointScheme:"default",resourceScheme:"mylegacy",_v2:{colorScheme:"mylegacy",textStyleScheme:"base",designTokenScheme:"base",resourceScheme:"mylegacy"}},to={colourScheme:"rbs",fontScheme:"default",motionScheme:"default",borderScheme:"default",spacingScheme:"default",radiusScheme:"default",shadowScheme:"default",breakpointScheme:"default",resourceScheme:"rbs",_v2:{colorScheme:"rbs",textStyleScheme:"base",designTokenScheme:"rbs",resourceScheme:"rbs"}},no={colourScheme:"oneservice",fontScheme:"default",motionScheme:"default",borderScheme:"default",spacingScheme:"default",radiusScheme:"default",shadowScheme:"default",breakpointScheme:"default",resourceScheme:"oneservice"},oo={colourScheme:"pa",fontScheme:"pa",motionScheme:"default",borderScheme:"default",spacingScheme:"default",radiusScheme:"default",shadowScheme:"default",breakpointScheme:"default",resourceScheme:"pa",componentScheme:"pa"},io={colourScheme:"a11yplayground",fontScheme:"a11yplayground",motionScheme:"default",borderScheme:"default",spacingScheme:"default",radiusScheme:"default",shadowScheme:"default",breakpointScheme:"default",resourceScheme:"a11yplayground",componentScheme:"a11yplayground"},so={colourScheme:"supportgowhere",fontScheme:"supportgowhere",motionScheme:"default",borderScheme:"default",spacingScheme:"default",radiusScheme:"default",shadowScheme:"default",breakpointScheme:"default",resourceScheme:"supportgowhere",componentScheme:"default"},ao={colourScheme:"imda",fontScheme:"imda",motionScheme:"default",borderScheme:"default",spacingScheme:"default",radiusScheme:"default",shadowScheme:"default",breakpointScheme:"default",resourceScheme:"imda",componentScheme:"default"},lo={colourScheme:"spf",fontScheme:"spf",motionScheme:"default",borderScheme:"default",spacingScheme:"default",radiusScheme:"spf",shadowScheme:"default",breakpointScheme:"default",resourceScheme:"spf",componentScheme:"spf"};Object.assign(Object.assign({},Kn),{light:Nn(Kn,"light"),dark:Nn(Kn,"dark")}),Object.assign(Object.assign({},Jn),{light:Nn(Jn,"light"),dark:Nn(Jn,"dark")}),Object.assign(Object.assign({},eo),{light:Nn(eo,"light"),dark:Nn(eo,"dark")}),Object.assign(Object.assign({},ro),{light:Nn(ro,"light"),dark:Nn(ro,"dark")}),Object.assign(Object.assign({},to),{light:Nn(to,"light"),dark:Nn(to,"dark")}),Object.assign(Object.assign({},no),{light:Nn(no,"light"),dark:Nn(no,"dark")}),Object.assign(Object.assign({},oo),{light:Nn(oo,"light"),dark:Nn(oo,"dark")}),Object.assign(Object.assign({},io),{light:Nn(io,"light"),dark:Nn(io,"dark")}),Object.assign(Object.assign({},so),{light:Nn(so,"light"),dark:Nn(so,"dark")}),Object.assign(Object.assign({},ao),{light:Nn(ao,"light"),dark:Nn(ao,"dark")}),Object.assign(Object.assign({},lo),{light:Nn(lo,"light"),dark:Nn(lo,"dark")});const co=F.div`
    position: relative;
    height: 100%;
    display: flex;
    flex: 1;

    ${e=>{if(e.$wrap)return $`
                /* Parent container need to provide space */
                flex-wrap: wrap;

                [data-id="range-container-elem1-container"],
                [data-id="range-container-elem2-container"] {
                    // 100% - Icon size - 2padding
                    max-width: calc(
                        100% - ${Yn.Spec["body-size-baseline"]} -
                            ${Gn["spacing-16"]}
                    );
                    flex: unset;
                }

                [data-id="range-container-elem2-container"] {
                    margin-top: ${Gn["spacing-8"]};
                }
            `}}
`,uo=F.div`
    width: 100%; // Force next flex item to break to next line
`,ho=F.div`
    display: flex;
    flex: 1;
    align-items: center;
`,go=F(x)`
    color: ${Vn.icon};
    width: ${Yn.Spec["body-size-baseline"]};
    height: ${Yn.Spec["body-size-baseline"]};
    flex-shrink: 0;
    margin: 0 ${Gn["spacing-8"]};
    align-self: center;
`,mo=F.div`
    position: absolute;
    background: ${e=>e.$error?Vn["border-error-focus-strong"]:Vn["border-focus-strong"]};
    height: 2px;
    // half - half padding - half icon width
    width: calc(
        50% - ${Gn["spacing-8"]} - (${Yn.Spec["body-size-baseline"]} / 2)
    );
    transition: left ${Un["duration-350"]} ${Un["ease-standard"]},
        opacity ${Un["duration-350"]} ${Un["ease-standard"]};
    left: 0;
    bottom: 0;

    ${e=>{switch(e.$position){case"start":return $`
                    opacity: 1;
                `;case"end":return $`
                    left: calc(50% + ${Gn["spacing-16"]});
                    opacity: 1;
                `;case"none":return $`
                    opacity: 0;
                `}}}

    ${e=>{if(e.$wrap)return $`
                display: none;
            `}}
`,fo=({children:t,currentActive:n,error:o,className:i,wrap:s})=>{const[a,l]=t;return e(co,{className:i,$wrap:s,children:[r(ho,{"data-id":"range-container-elem1-container",children:a}),r(go,{}),s&&r(uo,{}),r(ho,{"data-id":"range-container-elem2-container",children:l}),r(mo,{"data-id":"range-container-indicator",$position:n,$error:o,$wrap:s})]})},po=$`
    outline-offset: -1px;
    outline: ${qn["width-020"]} ${qn.solid} ${Vn["border-focus"]};
`,bo=$`
    outline-color: ${Vn["border-focus"]};
`,yo=$`
    outline-color: ${Vn["border-disabled"]};
`,vo=$`
    outline-color: ${Vn["border-error-focus"]};
`,xo=F.div`
    border: ${qn["width-010"]} ${qn.solid} ${Vn.border};
    border-radius: ${Zn.sm};
    background: ${Vn.bg};

    &:focus-within {
        ${po}
    }
    ${e=>e.$focused&&po}

    ${e=>e.$readOnly?$`
                border-color: transparent;
                padding: 0;
                background: transparent !important;

                &:focus-within {
                    ${bo}
                }
                ${e.$focused&&bo}
            `:e.$disabled?$`
                background: ${Vn["bg-disabled"]};
                cursor: not-allowed;

                &:focus-within {
                    ${yo}
                }
                ${e.$focused&&yo}
            `:e.$error?$`
                border-color: ${Vn["border-error"]};

                &:focus-within {
                    ${vo}
                }
                ${e.$focused&&vo}
            `:void 0}
`,wo=F(xo)`
    display: flex;
    align-items: center;
    position: relative;
    height: max-content;
    width: 100%;
    padding: 0 ${Gn["spacing-16"]} 0
        ${e=>e.$readOnly?"0":Gn["spacing-16"]};
    flex-direction: ${e=>"right"===e.$position?"row-reverse":"row"};
`,Fo=F.input`
    ${e=>"small"===e.$variant?Yn["body-md-regular"]:Yn["body-baseline-regular"]}
    color: ${Vn.text};
    display: block;
    background: transparent;
    border: none;
    outline: none;
    box-shadow: none;
    padding: 0;
    margin: 0;

    &:disabled {
        color: ${Vn["text-subtler"]};

        &:hover {
            cursor: not-allowed;
        }
    }

    &::placeholder,
    &::-webkit-input-placeholder {
        color: ${Vn["text-subtler"]};
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
`,$o=F.button`
    background: transparent;
    border: none;
    outline: none;

    &:focus,
    &:active {
        outline: none;
    }

    &:focus-visible {
        outline: ${qn["width-010"]} ${qn.solid}
            ${Vn["border-focus"]};
        border-radius: ${Zn.sm};
    }
`,Co=F.div`
    position: relative;
`,Eo=F(wo)`
    height: 3rem;
    gap: ${Gn["spacing-8"]};
`,So=F(Fo)`
    display: block;
    width: 100%;
    flex: 1;
`;var ko={exports:{}};ko.exports=function(){var e=1e3,r=6e4,t=36e5,n="millisecond",o="second",i="minute",s="hour",a="day",l="week",d="month",c="quarter",u="year",h="date",g="Invalid Date",m=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,f=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,p={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(e){var r=["th","st","nd","rd"],t=e%100;return"["+e+(r[(t-20)%10]||r[t]||r[0])+"]"}},b=function(e,r,t){var n=String(e);return!n||n.length>=r?e:""+Array(r+1-n.length).join(t)+e},y={s:b,z:function(e){var r=-e.utcOffset(),t=Math.abs(r),n=Math.floor(t/60),o=t%60;return(r<=0?"+":"-")+b(n,2,"0")+":"+b(o,2,"0")},m:function e(r,t){if(r.date()<t.date())return-e(t,r);var n=12*(t.year()-r.year())+(t.month()-r.month()),o=r.clone().add(n,d),i=t-o<0,s=r.clone().add(n+(i?-1:1),d);return+(-(n+(t-o)/(i?o-s:s-o))||0)},a:function(e){return e<0?Math.ceil(e)||0:Math.floor(e)},p:function(e){return{M:d,y:u,w:l,d:a,D:h,h:s,m:i,s:o,ms:n,Q:c}[e]||String(e||"").toLowerCase().replace(/s$/,"")},u:function(e){return void 0===e}},v="en",x={};x[v]=p;var w="$isDayjsObject",F=function(e){return e instanceof S||!(!e||!e[w])},$=function e(r,t,n){var o;if(!r)return v;if("string"==typeof r){var i=r.toLowerCase();x[i]&&(o=i),t&&(x[i]=t,o=i);var s=r.split("-");if(!o&&s.length>1)return e(s[0])}else{var a=r.name;x[a]=r,o=a}return!n&&o&&(v=o),o||!n&&v},C=function(e,r){if(F(e))return e.clone();var t="object"==typeof r?r:{};return t.date=e,t.args=arguments,new S(t)},E=y;E.l=$,E.i=F,E.w=function(e,r){return C(e,{locale:r.$L,utc:r.$u,x:r.$x,$offset:r.$offset})};var S=function(){function p(e){this.$L=$(e.locale,null,!0),this.parse(e),this.$x=this.$x||e.x||{},this[w]=!0}var b=p.prototype;return b.parse=function(e){this.$d=function(e){var r=e.date,t=e.utc;if(null===r)return new Date(NaN);if(E.u(r))return new Date;if(r instanceof Date)return new Date(r);if("string"==typeof r&&!/Z$/i.test(r)){var n=r.match(m);if(n){var o=n[2]-1||0,i=(n[7]||"0").substring(0,3);return t?new Date(Date.UTC(n[1],o,n[3]||1,n[4]||0,n[5]||0,n[6]||0,i)):new Date(n[1],o,n[3]||1,n[4]||0,n[5]||0,n[6]||0,i)}}return new Date(r)}(e),this.init()},b.init=function(){var e=this.$d;this.$y=e.getFullYear(),this.$M=e.getMonth(),this.$D=e.getDate(),this.$W=e.getDay(),this.$H=e.getHours(),this.$m=e.getMinutes(),this.$s=e.getSeconds(),this.$ms=e.getMilliseconds()},b.$utils=function(){return E},b.isValid=function(){return!(this.$d.toString()===g)},b.isSame=function(e,r){var t=C(e);return this.startOf(r)<=t&&t<=this.endOf(r)},b.isAfter=function(e,r){return C(e)<this.startOf(r)},b.isBefore=function(e,r){return this.endOf(r)<C(e)},b.$g=function(e,r,t){return E.u(e)?this[r]:this.set(t,e)},b.unix=function(){return Math.floor(this.valueOf()/1e3)},b.valueOf=function(){return this.$d.getTime()},b.startOf=function(e,r){var t=this,n=!!E.u(r)||r,c=E.p(e),g=function(e,r){var o=E.w(t.$u?Date.UTC(t.$y,r,e):new Date(t.$y,r,e),t);return n?o:o.endOf(a)},m=function(e,r){return E.w(t.toDate()[e].apply(t.toDate("s"),(n?[0,0,0,0]:[23,59,59,999]).slice(r)),t)},f=this.$W,p=this.$M,b=this.$D,y="set"+(this.$u?"UTC":"");switch(c){case u:return n?g(1,0):g(31,11);case d:return n?g(1,p):g(0,p+1);case l:var v=this.$locale().weekStart||0,x=(f<v?f+7:f)-v;return g(n?b-x:b+(6-x),p);case a:case h:return m(y+"Hours",0);case s:return m(y+"Minutes",1);case i:return m(y+"Seconds",2);case o:return m(y+"Milliseconds",3);default:return this.clone()}},b.endOf=function(e){return this.startOf(e,!1)},b.$set=function(e,r){var t,l=E.p(e),c="set"+(this.$u?"UTC":""),g=(t={},t[a]=c+"Date",t[h]=c+"Date",t[d]=c+"Month",t[u]=c+"FullYear",t[s]=c+"Hours",t[i]=c+"Minutes",t[o]=c+"Seconds",t[n]=c+"Milliseconds",t)[l],m=l===a?this.$D+(r-this.$W):r;if(l===d||l===u){var f=this.clone().set(h,1);f.$d[g](m),f.init(),this.$d=f.set(h,Math.min(this.$D,f.daysInMonth())).$d}else g&&this.$d[g](m);return this.init(),this},b.set=function(e,r){return this.clone().$set(e,r)},b.get=function(e){return this[E.p(e)]()},b.add=function(n,c){var h,g=this;n=Number(n);var m=E.p(c),f=function(e){var r=C(g);return E.w(r.date(r.date()+Math.round(e*n)),g)};if(m===d)return this.set(d,this.$M+n);if(m===u)return this.set(u,this.$y+n);if(m===a)return f(1);if(m===l)return f(7);var p=(h={},h[i]=r,h[s]=t,h[o]=e,h)[m]||1,b=this.$d.getTime()+n*p;return E.w(b,this)},b.subtract=function(e,r){return this.add(-1*e,r)},b.format=function(e){var r=this,t=this.$locale();if(!this.isValid())return t.invalidDate||g;var n=e||"YYYY-MM-DDTHH:mm:ssZ",o=E.z(this),i=this.$H,s=this.$m,a=this.$M,l=t.weekdays,d=t.months,c=t.meridiem,u=function(e,t,o,i){return e&&(e[t]||e(r,n))||o[t].slice(0,i)},h=function(e){return E.s(i%12||12,e,"0")},m=c||function(e,r,t){var n=e<12?"AM":"PM";return t?n.toLowerCase():n};return n.replace(f,(function(e,n){return n||function(e){switch(e){case"YY":return String(r.$y).slice(-2);case"YYYY":return E.s(r.$y,4,"0");case"M":return a+1;case"MM":return E.s(a+1,2,"0");case"MMM":return u(t.monthsShort,a,d,3);case"MMMM":return u(d,a);case"D":return r.$D;case"DD":return E.s(r.$D,2,"0");case"d":return String(r.$W);case"dd":return u(t.weekdaysMin,r.$W,l,2);case"ddd":return u(t.weekdaysShort,r.$W,l,3);case"dddd":return l[r.$W];case"H":return String(i);case"HH":return E.s(i,2,"0");case"h":return h(1);case"hh":return h(2);case"a":return m(i,s,!0);case"A":return m(i,s,!1);case"m":return String(s);case"mm":return E.s(s,2,"0");case"s":return String(r.$s);case"ss":return E.s(r.$s,2,"0");case"SSS":return E.s(r.$ms,3,"0");case"Z":return o}return null}(e)||o.replace(":","")}))},b.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},b.diff=function(n,h,g){var m,f=this,p=E.p(h),b=C(n),y=(b.utcOffset()-this.utcOffset())*r,v=this-b,x=function(){return E.m(f,b)};switch(p){case u:m=x()/12;break;case d:m=x();break;case c:m=x()/3;break;case l:m=(v-y)/6048e5;break;case a:m=(v-y)/864e5;break;case s:m=v/t;break;case i:m=v/r;break;case o:m=v/e;break;default:m=v}return g?m:E.a(m)},b.daysInMonth=function(){return this.endOf(d).$D},b.$locale=function(){return x[this.$L]},b.locale=function(e,r){if(!e)return this.$L;var t=this.clone(),n=$(e,r,!0);return n&&(t.$L=n),t},b.clone=function(){return E.w(this.$d,this)},b.toDate=function(){return new Date(this.valueOf())},b.toJSON=function(){return this.isValid()?this.toISOString():null},b.toISOString=function(){return this.$d.toISOString()},b.toString=function(){return this.$d.toUTCString()},p}(),k=S.prototype;return C.prototype=k,[["$ms",n],["$s",o],["$m",i],["$H",s],["$W",a],["$M",d],["$y",u],["$D",h]].forEach((function(e){k[e[1]]=function(r){return this.$g(r,e[0],e[1])}})),C.extend=function(e,r){return e.$i||(e(r,S,C),e.$i=!0),C},C.locale=$,C.isDayjs=F,C.unix=function(e){return C(1e3*e)},C.en=x[v],C.Ls=x,C.p={},C}();var Do,Bo,Io,Ao=de(ko.exports);!function(e){e.transformWithSpaces=(e,r)=>{const t="(.{"+r+"})";return e.replace(/[^\dA-Z]/gi,"").replace(new RegExp(t,"g"),"$1 ").trim()},e.padValue=(e,r)=>{if("0"===e)return r?e:e.padStart(2,"0");if(""===e)return e;return parseInt(e).toString().padStart(2,"0")},e.shouldTruncateToTwoLines=(e,r)=>{const t=Math.floor(r/9);return e.length>=2*t||1===e.split(" ").length&&e.length>t},e.truncateOneLine=(e,r,t,n,o=8)=>{let i=0;r>t&&(i=Math.floor((r-t)/o));const s=n+i;if(s<e.length){const r=Math.floor(s/2);return e.substring(0,r)+" ... "+e.substring(e.length-r,e.length)}return e},e.truncateTwoLines=(e,r,t,n=1.2)=>{const o=Math.floor(2*r/(.6*t))*(2/n);if(e.length<=o)return e;const i=Math.floor(.6*o),s=Math.floor(.2*o);return`${e.substring(0,i)}...${e.substring(e.length-s)}`},e.getTextWidth=(r,t)=>{if("undefined"==typeof document)return 0;const n=(e.getTextWidth.canvas||(e.getTextWidth.canvas=document.createElement("canvas"))).getContext("2d");n.font=t;return n.measureText(r).width},e.maskValue=(e,t)=>{if(!e)return e;const{maskRange:n,unmaskRange:o,maskChar:i="•",maskRegex:s,maskTransformer:a}=t;if(a)return a(e);if(s)return e.replace(s,i);if(n){const{startIndex:t,endIndex:o}=r(n[0],n[1]);return e.substring(0,t)+i.repeat(e.substring(t,o+1).length)+e.substring(o+1)}if(o){const{startIndex:t,endIndex:n}=r(o[0],o[1]);return i.repeat(e.substring(0,t).length)+e.substring(t,n+1)+i.repeat(e.substring(n+1).length)}return e};const r=(e,r)=>e<r?{startIndex:e,endIndex:r}:{startIndex:r,endIndex:e},t=new Intl.PluralRules("en",{type:"ordinal"}),n=new Map([["one","st"],["two","nd"],["few","rd"],["other","th"]]);e.formatOrdinal=e=>{const r=t.select(e);return`${e}${n.get(r)}`},e.getMaskedDescription=(e,r,t)=>{if(!e||"masked"!==r||!t)return"";const[n,o]=t,i=n>0,s=o<e.length-1,a=i?e.substring(0,n):"",l=s?e.substring(o+1):"";return i&&s?`Starting with ${a} and ending with ${l}`:i?`Starting with ${a}`:s?`Ending with ${l}`:""}}(Do||(Do={})),function(e){e.AM="AM",e.PM="PM"}(Bo||(Bo={})),function(e){e.roundToNearestInterval=(e,r,t)=>{const[n,o]=e.split(":"),i=parseInt(n,10),s=parseInt(o,10);if(isNaN(i)||isNaN(s)||s<0||s>=60)throw new Error("Invalid time format");const a=60*i+s,l=a%r,d=0===l?a:t?a+(r-l):a-l,c=d%60;return`${Math.floor(d/60).toString().padStart(2,"0")}:${c.toString().padStart(2,"0")}`},e.generateHourlyIntervals=(e,r,t="ha")=>{const n="HH:mm";let o=Ao(e,n),i=Ao(r,n);o.isSame(i)&&(i=i.add(1,"day"));const s=[];for(;o.isBefore(i);)s.push(o.format(t)),o=o.add(1,"hour");return s},e.getTimeValues=(e,r)=>{const t={hour:"",minute:"",period:Bo.AM};if(!r)return t;try{if("24hr"===e){const n=Oo(r,e);t.minute=Do.padValue(n.minute);const o=parseInt(n.hour);0===Math.floor(o/12)?(t.period=Bo.AM,t.hour=0===o?"12":Do.padValue(o.toString())):(t.period=Bo.PM,t.hour=12===o?o.toString():Do.padValue((o-12).toString()))}else{const{hour:n,minute:o,period:i=""}=Oo(r,e);t.hour=Do.padValue(n),t.minute=Do.padValue(o),t.period="am"===i.toLowerCase()?Bo.AM:Bo.PM}return t}catch(e){return t}},e.updateMinutes=(e,r)=>{const t=parseInt(e);if(isNaN(t))return"add"===r?Do.padValue("0"):"55";const n=Math.floor(t/5),o=(("add"===r?n+1:t%5==0?n-1:n)%12+12)%12;return Do.padValue((5*o).toString())},e.updateHours=(e,r)=>{const t=parseInt(e);if(isNaN(t))return"add"===r?Do.padValue("1"):"12";const n="add"===r?t+1:t-1;return n<=12&&n>0?Do.padValue(n.toString()):13===n?Do.padValue("1"):"12"},e.convertTo24HourFormat=e=>{const r=parseInt(e.hour);let t;return t=e.period===Bo.PM?12===r?r.toString():(r+12).toString():12===r?"00":e.hour,`${t}:${e.minute}`},e.convertHourTo12HourFormat=e=>{const r=parseInt(e),t=r%12==0?12..toString():(r%12).toString();return Do.padValue(t)},e.formatDisplayValue=(e,r)=>{try{const{hour:t,minute:n,period:o=""}=Oo(e,r),i=Do.padValue(t);let s=`${i}:${Do.padValue(n)}`;return"12hr"===r?(s+=o.toLowerCase(),s):s}catch(e){return""}},e.toMinutesSeconds=e=>({minutes:Math.floor(e/60),seconds:e%60}),e.to24Hour=e=>{if((null==e?void 0:e.includes("am"))||(null==e?void 0:e.includes("pm"))){const[r,t]=e.split(/(am|pm)/i),[n,o]=r.split(":").map(Number);let i=n;return"pm"===t&&i<12&&(i+=12),"am"===t&&12===i&&(i=0),Mo(i,o)}return e},e.generateTimings=(r,t="12hr",n,o)=>{const i=[];let s=0,a=1440-r;for(n&&(s=e.timeToMinutes(n)),o&&(a=e.timeToMinutes(o));s<=a;){let e=Math.floor(s/60);const n=s%60;if("12hr"===t){const r=e>=12?"pm":"am";e%=12,e=e||12;const t=Mo(e,n,r);i.push(t)}else{const r=Mo(e,n);i.push(r)}s+=r}return i},e.parseInput=(e,r="12hr")=>{if(""===e||void 0===e)return e;const t=e.trim().toLowerCase(),n=/^(?:(\d{1,2})([:.])?(\d{2})?)?(a|p|am|pm)?$/.exec(t);if(!n)return;let o=parseInt(n[1]||"0",10);const i=parseInt(n[3]||"0",10);let s=n[4];if(void 0===n[1]||o>24||i>59)return;if("a"===s?s="am":"p"===s&&(s="pm"),"24hr"===r)return"pm"===s&&o<12?o+=12:("am"===s&&12===o||24===o)&&(o=0),Mo(o,i);s?0===o||24===o?(s="am",o=12):o>12&&(s="pm",o-=12):(s=0===o||24===o||o>6&&o<12?"am":"pm",o=o%12||12);return Mo(o,i,s)},e.findClosestFlooredTime=(r,t)=>{if(!r)return r;const n=e.timeToMinutes(r);let o="",i=1/0;for(const r of t){const t=e.timeToMinutes(r)-n;if(t<=0&&Math.abs(t)<i)i=Math.abs(t),o=r;else if(t>0)break}return o},e.timeToMinutes=e=>{const[r,t]=e.toLowerCase().split(/(am|pm)/),[n,o]=r.split(":").map(Number);let i=n;return"pm"===t&&12!==i&&(i+=12),"am"===t&&12===i&&(i=0),60*i+o},e.calculateDuration=(r,t)=>{const n=e.timeToMinutes(r);return e.timeToMinutes(t)-n}}(Io||(Io={}));const To=(e,r)=>{const t=parseInt(e);return"24hr"===r?t>=0&&t<=23:t>=1&&t<=12},zo=e=>{const r=parseInt(e);return r>=0&&r<=59},Oo=(e,r)=>{const t=e?e.split(":"):[],n=new Error("Invalid format");if("12hr"===r){if(2!==t.length||4!==t[1].length)throw n;const e=t[1].substring(0,2),i=t[1].substring(2);if(!To(t[0],r)||!zo(e)||"am"!==(o=i).toLowerCase()&&"pm"!==o.toLowerCase())throw n;return{hour:t[0],minute:e,period:t[1].substring(2)}}if(2!==t.length)throw n;if(!To(t[0],r)||!zo(t[1]))throw n;return{hour:t[0],minute:t[1]};var o},Mo=(e,r,t)=>t?`${e}:${r.toString().padStart(2,"0")}${t}`:`${e.toString().padStart(2,"0")}:${r.toString().padStart(2,"0")}`;var _o=function(e,r){return _o=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,r){e.__proto__=r}||function(e,r){for(var t in r)Object.prototype.hasOwnProperty.call(r,t)&&(e[t]=r[t])},_o(e,r)};var Ro=function(){return Ro=Object.assign||function(e){for(var r,t=1,n=arguments.length;t<n;t++)for(var o in r=arguments[t])Object.prototype.hasOwnProperty.call(r,o)&&(e[o]=r[o]);return e},Ro.apply(this,arguments)};var Ho="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};var jo=function(e){var r=typeof e;return null!=e&&("object"==r||"function"==r)},Lo="object"==typeof Ho&&Ho&&Ho.Object===Object&&Ho,Po="object"==typeof self&&self&&self.Object===Object&&self,Wo=Lo||Po||Function("return this")(),No=Wo,Vo=function(){return No.Date.now()},Yo=/\s/;var Uo=function(e){for(var r=e.length;r--&&Yo.test(e.charAt(r)););return r},qo=/^\s+/;var Go=function(e){return e?e.slice(0,Uo(e)+1).replace(qo,""):e},Zo=Wo.Symbol,Qo=Zo,Xo=Object.prototype,Ko=Xo.hasOwnProperty,Jo=Xo.toString,ei=Qo?Qo.toStringTag:void 0;var ri=function(e){var r=Ko.call(e,ei),t=e[ei];try{e[ei]=void 0;var n=!0}catch(e){}var o=Jo.call(e);return n&&(r?e[ei]=t:delete e[ei]),o},ti=Object.prototype.toString;var ni=ri,oi=function(e){return ti.call(e)},ii=Zo?Zo.toStringTag:void 0;var si=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":ii&&ii in Object(e)?ni(e):oi(e)},ai=function(e){return null!=e&&"object"==typeof e};var li=Go,di=jo,ci=function(e){return"symbol"==typeof e||ai(e)&&"[object Symbol]"==si(e)},ui=/^[-+]0x[0-9a-f]+$/i,hi=/^0b[01]+$/i,gi=/^0o[0-7]+$/i,mi=parseInt;var fi=jo,pi=Vo,bi=function(e){if("number"==typeof e)return e;if(ci(e))return NaN;if(di(e)){var r="function"==typeof e.valueOf?e.valueOf():e;e=di(r)?r+"":r}if("string"!=typeof e)return 0===e?e:+e;e=li(e);var t=hi.test(e);return t||gi.test(e)?mi(e.slice(2),t?2:8):ui.test(e)?NaN:+e},yi=Math.max,vi=Math.min;var xi=function(e,r,t){var n,o,i,s,a,l,d=0,c=!1,u=!1,h=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function g(r){var t=n,i=o;return n=o=void 0,d=r,s=e.apply(i,t)}function m(e){var t=e-l;return void 0===l||t>=r||t<0||u&&e-d>=i}function f(){var e=pi();if(m(e))return p(e);a=setTimeout(f,function(e){var t=r-(e-l);return u?vi(t,i-(e-d)):t}(e))}function p(e){return a=void 0,h&&n?g(e):(n=o=void 0,s)}function b(){var e=pi(),t=m(e);if(n=arguments,o=this,l=e,t){if(void 0===a)return function(e){return d=e,a=setTimeout(f,r),c?g(e):s}(l);if(u)return clearTimeout(a),a=setTimeout(f,r),g(l)}return void 0===a&&(a=setTimeout(f,r)),s}return r=bi(r)||0,fi(t)&&(c=!!t.leading,i=(u="maxWait"in t)?yi(bi(t.maxWait)||0,r):i,h="trailing"in t?!!t.trailing:h),b.cancel=function(){void 0!==a&&clearTimeout(a),d=0,n=l=o=a=void 0},b.flush=function(){return void 0===a?s:p(pi())},b},wi=xi,Fi=jo;var $i=function(e,r,t){var n=!0,o=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return Fi(t)&&(n="leading"in t?!!t.leading:n,o="trailing"in t?!!t.trailing:o),wi(e,r,{leading:n,maxWait:r,trailing:o})},Ci=function(e,r,t,n){switch(r){case"debounce":return xi(e,t,n);case"throttle":return $i(e,t,n);default:return e}},Ei=function(e){return"function"==typeof e},Si=function(){return"undefined"==typeof window},ki=function(e){return e instanceof Element||e instanceof HTMLDocument},Di=function(e,r,t,n){return function(o){var i=o.width,s=o.height;r((function(r){return r.width===i&&r.height===s||r.width===i&&!n||r.height===s&&!t?r:(e&&Ei(e)&&e(i,s),{width:i,height:s})}))}};!function(e){function r(r){var t=e.call(this,r)||this;t.cancelHandler=function(){t.resizeHandler&&t.resizeHandler.cancel&&(t.resizeHandler.cancel(),t.resizeHandler=null)},t.attachObserver=function(){var e=t.props,r=e.targetRef,n=e.observerOptions;if(!Si()){r&&r.current&&(t.targetRef.current=r.current);var o=t.getElement();o&&(t.observableElement&&t.observableElement===o||(t.observableElement=o,t.resizeObserver.observe(o,n)))}},t.getElement=function(){var e=t.props,r=e.querySelector,n=e.targetDomEl;if(Si())return null;if(r)return document.querySelector(r);if(n&&ki(n))return n;if(t.targetRef&&ki(t.targetRef.current))return t.targetRef.current;var o=B(t);if(!o)return null;switch(t.getRenderType()){case"renderProp":case"childFunction":case"child":case"childArray":return o;default:return o.parentElement}},t.createResizeHandler=function(e){var r=t.props,n=r.handleWidth,o=void 0===n||n,i=r.handleHeight,s=void 0===i||i,a=r.onResize;if(o||s){var l=Di(a,t.setState.bind(t),o,s);e.forEach((function(e){var r=e&&e.contentRect||{},n=r.width,o=r.height;!t.skipOnMount&&!Si()&&l({width:n,height:o}),t.skipOnMount=!1}))}},t.getRenderType=function(){var e=t.props,r=e.render,n=e.children;return Ei(r)?"renderProp":Ei(n)?"childFunction":l(n)?"child":Array.isArray(n)?"childArray":"parent"};var n=r.skipOnMount,o=r.refreshMode,i=r.refreshRate,s=void 0===i?1e3:i,a=r.refreshOptions;return t.state={width:void 0,height:void 0},t.skipOnMount=n,t.targetRef=d(),t.observableElement=null,Si()||(t.resizeHandler=Ci(t.createResizeHandler,o,s,a),t.resizeObserver=new window.ResizeObserver(t.resizeHandler)),t}(function(e,r){if("function"!=typeof r&&null!==r)throw new TypeError("Class extends value "+String(r)+" is not a constructor or null");function t(){this.constructor=e}_o(e,r),e.prototype=null===r?Object.create(r):(t.prototype=r.prototype,new t)})(r,e),r.prototype.componentDidMount=function(){this.attachObserver()},r.prototype.componentDidUpdate=function(){this.attachObserver()},r.prototype.componentWillUnmount=function(){Si()||(this.observableElement=null,this.resizeObserver.disconnect(),this.cancelHandler())},r.prototype.render=function(){var e,r=this.props,t=r.render,o=r.children,i=r.nodeType,s=void 0===i?"div":i,a=this.state,l={width:a.width,height:a.height,targetRef:this.targetRef};switch(this.getRenderType()){case"renderProp":return t&&t(l);case"childFunction":return(e=o)(l);case"child":if((e=o).type&&"string"==typeof e.type){var d=function(e,r){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(n=Object.getOwnPropertySymbols(e);o<n.length;o++)r.indexOf(n[o])<0&&Object.prototype.propertyIsEnumerable.call(e,n[o])&&(t[n[o]]=e[n[o]])}return t}(l,["targetRef"]);return c(e,d)}return c(e,l);case"childArray":return(e=o).map((function(e){return!!e&&c(e,l)}));default:return n.createElement(s,null)}}}(u);var Bi=Si()?s:h;function Ii(e){void 0===e&&(e={});var r=e.skipOnMount,t=void 0!==r&&r,n=e.refreshMode,o=e.refreshRate,s=void 0===o?1e3:o,l=e.refreshOptions,d=e.handleWidth,c=void 0===d||d,u=e.handleHeight,h=void 0===u||u,g=e.targetRef,m=e.observerOptions,f=e.onResize,p=i(t),b=i(null),y=null!=g?g:b,v=i(),x=a({width:void 0,height:void 0}),w=x[0],F=x[1];return Bi((function(){if(!Si()){var e=Di(f,F,c,h);v.current=Ci((function(r){(c||h)&&r.forEach((function(r){var t=r&&r.contentRect||{},n=t.width,o=t.height;!p.current&&!Si()&&e({width:n,height:o}),p.current=!1}))}),n,s,l);var r=new window.ResizeObserver(v.current);return y.current&&r.observe(y.current,m),function(){r.disconnect();var e=v.current;e&&e.cancel&&e.cancel()}}}),[n,s,l,c,h,f,m,y.current]),Ro({ref:y},w)}var Ai=qi(),Ti=e=>Ni(e,Ai),zi=qi();Ti.write=e=>Ni(e,zi);var Oi=qi();Ti.onStart=e=>Ni(e,Oi);var Mi=qi();Ti.onFrame=e=>Ni(e,Mi);var _i=qi();Ti.onFinish=e=>Ni(e,_i);var Ri=[];Ti.setTimeout=(e,r)=>{const t=Ti.now()+r,n=()=>{const e=Ri.findIndex((e=>e.cancel==n));~e&&Ri.splice(e,1),Pi-=~e?1:0},o={time:t,handler:e,cancel:n};return Ri.splice(Hi(t),0,o),Pi+=1,Vi(),o};var Hi=e=>~(~Ri.findIndex((r=>r.time>e))||~Ri.length);Ti.cancel=e=>{Oi.delete(e),Mi.delete(e),_i.delete(e),Ai.delete(e),zi.delete(e)},Ti.sync=e=>{Wi=!0,Ti.batchedUpdates(e),Wi=!1},Ti.throttle=e=>{let r;function t(){try{e(...r)}finally{r=null}}function n(...e){r=e,Ti.onStart(t)}return n.handler=e,n.cancel=()=>{Oi.delete(t),r=null},n};var ji="undefined"!=typeof window?window.requestAnimationFrame:()=>{};Ti.use=e=>ji=e,Ti.now="undefined"!=typeof performance?()=>performance.now():Date.now,Ti.batchedUpdates=e=>e(),Ti.catch=console.error,Ti.frameLoop="always",Ti.advance=()=>{"demand"!==Ti.frameLoop?console.warn("Cannot call the manual advancement of rafz whilst frameLoop is not set as demand"):Ui()};var Li=-1,Pi=0,Wi=!1;function Ni(e,r){Wi?(r.delete(e),e(0)):(r.add(e),Vi())}function Vi(){Li<0&&(Li=0,"demand"!==Ti.frameLoop&&ji(Yi))}function Yi(){~Li&&(ji(Yi),Ti.batchedUpdates(Ui))}function Ui(){const e=Li;Li=Ti.now();const r=Hi(Li);r&&(Gi(Ri.splice(0,r),(e=>e.handler())),Pi-=r),Pi?(Oi.flush(),Ai.flush(e?Math.min(64,Li-e):16.667),Mi.flush(),zi.flush(),_i.flush()):Li=-1}function qi(){let e=new Set,r=e;return{add(t){Pi+=r!=e||e.has(t)?0:1,e.add(t)},delete:t=>(Pi-=r==e&&e.has(t)?1:0,e.delete(t)),flush(t){r.size&&(e=new Set,Pi-=r.size,Gi(r,(r=>r(t)&&e.add(r))),Pi+=e.size,r=e)}}}function Gi(e,r){e.forEach((e=>{try{r(e)}catch(e){Ti.catch(e)}}))}var Zi=Object.defineProperty,Qi={};function Xi(){}((e,r)=>{for(var t in r)Zi(e,t,{get:r[t],enumerable:!0})})(Qi,{assign:()=>us,colors:()=>ls,createStringInterpolator:()=>os,skipAnimation:()=>ds,to:()=>is,willAdvance:()=>cs});var Ki={arr:Array.isArray,obj:e=>!!e&&"Object"===e.constructor.name,fun:e=>"function"==typeof e,str:e=>"string"==typeof e,num:e=>"number"==typeof e,und:e=>void 0===e};function Ji(e,r){if(Ki.arr(e)){if(!Ki.arr(r)||e.length!==r.length)return!1;for(let t=0;t<e.length;t++)if(e[t]!==r[t])return!1;return!0}return e===r}var es=(e,r)=>e.forEach(r);function rs(e,r,t){if(Ki.arr(e))for(let n=0;n<e.length;n++)r.call(t,e[n],`${n}`);else for(const n in e)e.hasOwnProperty(n)&&r.call(t,e[n],n)}var ts=e=>Ki.und(e)?[]:Ki.arr(e)?e:[e];function ns(e,r){if(e.size){const t=Array.from(e);e.clear(),es(t,r)}}var os,is,ss=(e,...r)=>ns(e,(e=>e(...r))),as=()=>"undefined"==typeof window||!window.navigator||/ServerSideRendering|^Deno\//.test(window.navigator.userAgent),ls=null,ds=!1,cs=Xi,us=e=>{e.to&&(is=e.to),e.now&&(Ti.now=e.now),void 0!==e.colors&&(ls=e.colors),null!=e.skipAnimation&&(ds=e.skipAnimation),e.createStringInterpolator&&(os=e.createStringInterpolator),e.requestAnimationFrame&&Ti.use(e.requestAnimationFrame),e.batchedUpdates&&(Ti.batchedUpdates=e.batchedUpdates),e.willAdvance&&(cs=e.willAdvance),e.frameLoop&&(Ti.frameLoop=e.frameLoop)},hs=new Set,gs=[],ms=[],fs=0,ps={get idle(){return!hs.size&&!gs.length},start(e){fs>e.priority?(hs.add(e),Ti.onStart(bs)):(ys(e),Ti(xs))},advance:xs,sort(e){if(fs)Ti.onFrame((()=>ps.sort(e)));else{const r=gs.indexOf(e);~r&&(gs.splice(r,1),vs(e))}},clear(){gs=[],hs.clear()}};function bs(){hs.forEach(ys),hs.clear(),Ti(xs)}function ys(e){gs.includes(e)||vs(e)}function vs(e){gs.splice(function(e,r){const t=e.findIndex(r);return t<0?e.length:t}(gs,(r=>r.priority>e.priority)),0,e)}function xs(e){const r=ms;for(let t=0;t<gs.length;t++){const n=gs[t];fs=n.priority,n.idle||(cs(n),n.advance(e),n.idle||r.push(n))}return fs=0,(ms=gs).length=0,(gs=r).length>0}var ws="[-+]?\\d*\\.?\\d+",Fs=ws+"%";function $s(...e){return"\\(\\s*("+e.join(")\\s*,\\s*(")+")\\s*\\)"}var Cs=new RegExp("rgb"+$s(ws,ws,ws)),Es=new RegExp("rgba"+$s(ws,ws,ws,ws)),Ss=new RegExp("hsl"+$s(ws,Fs,Fs)),ks=new RegExp("hsla"+$s(ws,Fs,Fs,ws)),Ds=/^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,Bs=/^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,Is=/^#([0-9a-fA-F]{6})$/,As=/^#([0-9a-fA-F]{8})$/;function Ts(e,r,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?e+6*(r-e)*t:t<.5?r:t<2/3?e+(r-e)*(2/3-t)*6:e}function zs(e,r,t){const n=t<.5?t*(1+r):t+r-t*r,o=2*t-n,i=Ts(o,n,e+1/3),s=Ts(o,n,e),a=Ts(o,n,e-1/3);return Math.round(255*i)<<24|Math.round(255*s)<<16|Math.round(255*a)<<8}function Os(e){const r=parseInt(e,10);return r<0?0:r>255?255:r}function Ms(e){return(parseFloat(e)%360+360)%360/360}function _s(e){const r=parseFloat(e);return r<0?0:r>1?255:Math.round(255*r)}function Rs(e){const r=parseFloat(e);return r<0?0:r>100?1:r/100}function Hs(e){let r=function(e){let r;return"number"==typeof e?e>>>0===e&&e>=0&&e<=4294967295?e:null:(r=Is.exec(e))?parseInt(r[1]+"ff",16)>>>0:ls&&void 0!==ls[e]?ls[e]:(r=Cs.exec(e))?(Os(r[1])<<24|Os(r[2])<<16|Os(r[3])<<8|255)>>>0:(r=Es.exec(e))?(Os(r[1])<<24|Os(r[2])<<16|Os(r[3])<<8|_s(r[4]))>>>0:(r=Ds.exec(e))?parseInt(r[1]+r[1]+r[2]+r[2]+r[3]+r[3]+"ff",16)>>>0:(r=As.exec(e))?parseInt(r[1],16)>>>0:(r=Bs.exec(e))?parseInt(r[1]+r[1]+r[2]+r[2]+r[3]+r[3]+r[4]+r[4],16)>>>0:(r=Ss.exec(e))?(255|zs(Ms(r[1]),Rs(r[2]),Rs(r[3])))>>>0:(r=ks.exec(e))?(zs(Ms(r[1]),Rs(r[2]),Rs(r[3]))|_s(r[4]))>>>0:null}(e);if(null===r)return e;r=r||0;return`rgba(${(4278190080&r)>>>24}, ${(16711680&r)>>>16}, ${(65280&r)>>>8}, ${(255&r)/255})`}var js=(e,r,t)=>{if(Ki.fun(e))return e;if(Ki.arr(e))return js({range:e,output:r,extrapolate:t});if(Ki.str(e.output[0]))return os(e);const n=e,o=n.output,i=n.range||[0,1],s=n.extrapolateLeft||n.extrapolate||"extend",a=n.extrapolateRight||n.extrapolate||"extend",l=n.easing||(e=>e);return e=>{const r=function(e,r){for(var t=1;t<r.length-1&&!(r[t]>=e);++t);return t-1}(e,i);return function(e,r,t,n,o,i,s,a,l){let d=l?l(e):e;if(d<r){if("identity"===s)return d;"clamp"===s&&(d=r)}if(d>t){if("identity"===a)return d;"clamp"===a&&(d=t)}if(n===o)return n;if(r===t)return e<=r?n:o;r===-1/0?d=-d:t===1/0?d-=r:d=(d-r)/(t-r);d=i(d),n===-1/0?d=-d:o===1/0?d+=n:d=d*(o-n)+n;return d}(e,i[r],i[r+1],o[r],o[r+1],l,s,a,n.map)}};var Ls=1.70158,Ps=1.525*Ls,Ws=Ls+1,Ns=2*Math.PI/3,Vs=2*Math.PI/4.5,Ys=e=>{const r=7.5625,t=2.75;return e<1/t?r*e*e:e<2/t?r*(e-=1.5/t)*e+.75:e<2.5/t?r*(e-=2.25/t)*e+.9375:r*(e-=2.625/t)*e+.984375},Us={linear:e=>e,easeInQuad:e=>e*e,easeOutQuad:e=>1-(1-e)*(1-e),easeInOutQuad:e=>e<.5?2*e*e:1-Math.pow(-2*e+2,2)/2,easeInCubic:e=>e*e*e,easeOutCubic:e=>1-Math.pow(1-e,3),easeInOutCubic:e=>e<.5?4*e*e*e:1-Math.pow(-2*e+2,3)/2,easeInQuart:e=>e*e*e*e,easeOutQuart:e=>1-Math.pow(1-e,4),easeInOutQuart:e=>e<.5?8*e*e*e*e:1-Math.pow(-2*e+2,4)/2,easeInQuint:e=>e*e*e*e*e,easeOutQuint:e=>1-Math.pow(1-e,5),easeInOutQuint:e=>e<.5?16*e*e*e*e*e:1-Math.pow(-2*e+2,5)/2,easeInSine:e=>1-Math.cos(e*Math.PI/2),easeOutSine:e=>Math.sin(e*Math.PI/2),easeInOutSine:e=>-(Math.cos(Math.PI*e)-1)/2,easeInExpo:e=>0===e?0:Math.pow(2,10*e-10),easeOutExpo:e=>1===e?1:1-Math.pow(2,-10*e),easeInOutExpo:e=>0===e?0:1===e?1:e<.5?Math.pow(2,20*e-10)/2:(2-Math.pow(2,-20*e+10))/2,easeInCirc:e=>1-Math.sqrt(1-Math.pow(e,2)),easeOutCirc:e=>Math.sqrt(1-Math.pow(e-1,2)),easeInOutCirc:e=>e<.5?(1-Math.sqrt(1-Math.pow(2*e,2)))/2:(Math.sqrt(1-Math.pow(-2*e+2,2))+1)/2,easeInBack:e=>Ws*e*e*e-Ls*e*e,easeOutBack:e=>1+Ws*Math.pow(e-1,3)+Ls*Math.pow(e-1,2),easeInOutBack:e=>e<.5?Math.pow(2*e,2)*(7.189819*e-Ps)/2:(Math.pow(2*e-2,2)*((Ps+1)*(2*e-2)+Ps)+2)/2,easeInElastic:e=>0===e?0:1===e?1:-Math.pow(2,10*e-10)*Math.sin((10*e-10.75)*Ns),easeOutElastic:e=>0===e?0:1===e?1:Math.pow(2,-10*e)*Math.sin((10*e-.75)*Ns)+1,easeInOutElastic:e=>0===e?0:1===e?1:e<.5?-Math.pow(2,20*e-10)*Math.sin((20*e-11.125)*Vs)/2:Math.pow(2,-20*e+10)*Math.sin((20*e-11.125)*Vs)/2+1,easeInBounce:e=>1-Ys(1-e),easeOutBounce:Ys,easeInOutBounce:e=>e<.5?(1-Ys(1-2*e))/2:(1+Ys(2*e-1))/2,steps:(e,r="end")=>t=>{const n=(t="end"===r?Math.min(t,.999):Math.max(t,.001))*e,o="end"===r?Math.floor(n):Math.ceil(n);return i=0,s=1,a=o/e,Math.min(Math.max(a,i),s);var i,s,a}},qs=Symbol.for("FluidValue.get"),Gs=Symbol.for("FluidValue.observers"),Zs=e=>Boolean(e&&e[qs]),Qs=e=>e&&e[qs]?e[qs]():e,Xs=e=>e[Gs]||null;function Ks(e,r){const t=e[Gs];t&&t.forEach((e=>{!function(e,r){e.eventObserved?e.eventObserved(r):e(r)}(e,r)}))}var Js=class{constructor(e){if(!e&&!(e=this.get))throw Error("Unknown getter");ea(this,e)}},ea=(e,r)=>oa(e,qs,r);function ra(e,r){if(e[qs]){let t=e[Gs];t||oa(e,Gs,t=new Set),t.has(r)||(t.add(r),e.observerAdded&&e.observerAdded(t.size,r))}return r}function ta(e,r){const t=e[Gs];if(t&&t.has(r)){const n=t.size-1;n?t.delete(r):e[Gs]=null,e.observerRemoved&&e.observerRemoved(n,r)}}var na,oa=(e,r,t)=>Object.defineProperty(e,r,{value:t,writable:!0,configurable:!0}),ia=/[+\-]?(?:0|[1-9]\d*)(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,sa=/(#(?:[0-9a-f]{2}){2,4}|(#[0-9a-f]{3})|(rgb|hsl)a?\((-?\d+%?[,\s]+){2,3}\s*[\d\.]+%?\))/gi,aa=new RegExp(`(${ia.source})(%|[a-z]+)`,"i"),la=/rgba\(([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+)\)/gi,da=/var\((--[a-zA-Z0-9-_]+),? ?([a-zA-Z0-9 ()%#.,-]+)?\)/,ca=e=>{const[r,t]=ua(e);if(!r||as())return e;const n=window.getComputedStyle(document.documentElement).getPropertyValue(r);if(n)return n.trim();if(t&&t.startsWith("--")){const r=window.getComputedStyle(document.documentElement).getPropertyValue(t);return r||e}return t&&da.test(t)?ca(t):t||e},ua=e=>{const r=da.exec(e);if(!r)return[,];const[,t,n]=r;return[t,n]},ha=(e,r,t,n,o)=>`rgba(${Math.round(r)}, ${Math.round(t)}, ${Math.round(n)}, ${o})`,ga=e=>{na||(na=ls?new RegExp(`(${Object.keys(ls).join("|")})(?!\\w)`,"g"):/^\b$/);const r=e.output.map((e=>Qs(e).replace(da,ca).replace(sa,Hs).replace(na,Hs))),t=r.map((e=>e.match(ia).map(Number))),n=t[0].map(((e,r)=>t.map((e=>{if(!(r in e))throw Error('The arity of each "output" value must be equal');return e[r]})))).map((r=>js({...e,output:r})));return e=>{const t=!aa.test(r[0])&&r.find((e=>aa.test(e)))?.replace(ia,"");let o=0;return r[0].replace(ia,(()=>`${n[o++](e)}${t||""}`)).replace(la,ha)}},ma="react-spring: ",fa=e=>{const r=e;let t=!1;if("function"!=typeof r)throw new TypeError(`${ma}once requires a function parameter`);return(...e)=>{t||(r(...e),t=!0)}},pa=fa(console.warn);var ba=fa(console.warn);function ya(e){return Ki.str(e)&&("#"==e[0]||/\d/.test(e)||!as()&&da.test(e)||e in(ls||{}))}var va=as()?s:h;function xa(){const e=a()[1],r=(()=>{const e=i(!1);return va((()=>(e.current=!0,()=>{e.current=!1})),[]),e})();return()=>{r.current&&e(Math.random())}}var wa=e=>s(e,Fa),Fa=[];function $a(e){const r=i(void 0);return s((()=>{r.current=e})),r.current}var Ca=Symbol.for("Animated:node"),Ea=e=>e&&e[Ca],Sa=(e,r)=>((e,r,t)=>Object.defineProperty(e,r,{value:t,writable:!0,configurable:!0}))(e,Ca,r),ka=e=>e&&e[Ca]&&e[Ca].getPayload(),Da=class{constructor(){Sa(this,this)}getPayload(){return this.payload||[]}},Ba=class e extends Da{constructor(e){super(),this._value=e,this.done=!0,this.durationProgress=0,Ki.num(this._value)&&(this.lastPosition=this._value)}static create(r){return new e(r)}getPayload(){return[this]}getValue(){return this._value}setValue(e,r){return Ki.num(e)&&(this.lastPosition=e,r&&(e=Math.round(e/r)*r,this.done&&(this.lastPosition=e))),this._value!==e&&(this._value=e,!0)}reset(){const{done:e}=this;this.done=!1,Ki.num(this._value)&&(this.elapsedTime=0,this.durationProgress=0,this.lastPosition=this._value,e&&(this.lastVelocity=null),this.v0=null)}},Ia=class e extends Ba{constructor(e){super(0),this._string=null,this._toString=js({output:[e,e]})}static create(r){return new e(r)}getValue(){const e=this._string;return null==e?this._string=this._toString(this._value):e}setValue(e){if(Ki.str(e)){if(e==this._string)return!1;this._string=e,this._value=1}else{if(!super.setValue(e))return!1;this._string=null}return!0}reset(e){e&&(this._toString=js({output:[this.getValue(),e]})),this._value=0,super.reset()}},Aa={dependencies:null},Ta=class extends Da{constructor(e){super(),this.source=e,this.setValue(e)}getValue(e){const r={};return rs(this.source,((t,n)=>{var o;(o=t)&&o[Ca]===o?r[n]=t.getValue(e):Zs(t)?r[n]=Qs(t):e||(r[n]=t)})),r}setValue(e){this.source=e,this.payload=this._makePayload(e)}reset(){this.payload&&es(this.payload,(e=>e.reset()))}_makePayload(e){if(e){const r=new Set;return rs(e,this._addToPayload,r),Array.from(r)}}_addToPayload(e){Aa.dependencies&&Zs(e)&&Aa.dependencies.add(e);const r=ka(e);r&&es(r,(e=>this.add(e)))}},za=class e extends Ta{constructor(e){super(e)}static create(r){return new e(r)}getValue(){return this.source.map((e=>e.getValue()))}setValue(e){const r=this.getPayload();return e.length==r.length?r.map(((r,t)=>r.setValue(e[t]))).some(Boolean):(super.setValue(e.map(Oa)),!0)}};function Oa(e){return(ya(e)?Ia:Ba).create(e)}function Ma(e){const r=Ea(e);return r?r.constructor:Ki.arr(e)?za:ya(e)?Ia:Ba}var _a=(e,r)=>{const t=!Ki.fun(e)||e.prototype&&e.prototype.isReactComponent;return g(((o,a)=>{const l=i(null),d=t&&m((e=>{l.current=function(e,r){e&&(Ki.fun(e)?e(r):e.current=r);return r}(a,e)}),[a]),[c,u]=function(e,r){const t=new Set;Aa.dependencies=t,e.style&&(e={...e,style:r.createAnimatedStyle(e.style)});return e=new Ta(e),Aa.dependencies=null,[e,t]}(o,r),h=xa(),g=()=>{const e=l.current;if(t&&!e)return;!1===(!!e&&r.applyAnimatedValues(e,c.getValue(!0)))&&h()},f=new Ra(g,u),p=i(void 0);va((()=>(p.current=f,es(u,(e=>ra(e,f))),()=>{p.current&&(es(p.current.deps,(e=>ta(e,p.current))),Ti.cancel(p.current.update))}))),s(g,[]),wa((()=>()=>{const e=p.current;es(e.deps,(r=>ta(r,e)))}));const b=r.getComponentProps(c.getValue());return n.createElement(e,{...b,ref:d})}))},Ra=class{constructor(e,r){this.update=e,this.deps=r}eventObserved(e){"change"==e.type&&Ti.write(this.update)}};var Ha=Symbol.for("AnimatedComponent"),ja=e=>Ki.str(e)?e:e&&Ki.str(e.displayName)?e.displayName:Ki.fun(e)&&e.name||null;function La(e,...r){return Ki.fun(e)?e(...r):e}var Pa=(e,r)=>!0===e||!!(r&&e&&(Ki.fun(e)?e(r):ts(e).includes(r))),Wa=(e,r)=>Ki.obj(e)?r&&e[r]:e,Na=(e,r)=>!0===e.default?e[r]:e.default?e.default[r]:void 0,Va=e=>e,Ya=(e,r=Va)=>{let t=Ua;e.default&&!0!==e.default&&(e=e.default,t=Object.keys(e));const n={};for(const o of t){const t=r(e[o],o);Ki.und(t)||(n[o]=t)}return n},Ua=["config","onProps","onStart","onChange","onPause","onResume","onRest"],qa={config:1,from:1,to:1,ref:1,loop:1,reset:1,pause:1,cancel:1,reverse:1,immediate:1,default:1,delay:1,onProps:1,onStart:1,onChange:1,onPause:1,onResume:1,onRest:1,onResolve:1,items:1,trail:1,sort:1,expires:1,initial:1,enter:1,update:1,leave:1,children:1,onDestroyed:1,keys:1,callId:1,parentId:1};function Ga(e){const r=function(e){const r={};let t=0;if(rs(e,((e,n)=>{qa[n]||(r[n]=e,t++)})),t)return r}(e);if(r){const t={to:r};return rs(e,((e,n)=>n in r||(t[n]=e))),t}return{...e}}function Za(e){return e=Qs(e),Ki.arr(e)?e.map(Za):ya(e)?Qi.createStringInterpolator({range:[0,1],output:[e,e]})(1):e}function Qa(e){return Ki.fun(e)||Ki.arr(e)&&Ki.obj(e[0])}var Xa={tension:170,friction:26,mass:1,damping:1,easing:Us.linear,clamp:!1},Ka=class{constructor(){this.velocity=0,Object.assign(this,Xa)}};function Ja(e,r){if(Ki.und(r.decay)){const t=!Ki.und(r.tension)||!Ki.und(r.friction);!t&&Ki.und(r.frequency)&&Ki.und(r.damping)&&Ki.und(r.mass)||(e.duration=void 0,e.decay=void 0),t&&(e.frequency=void 0)}else e.duration=void 0}var el=[],rl=class{constructor(){this.changed=!1,this.values=el,this.toValues=null,this.fromValues=el,this.config=new Ka,this.immediate=!1}};function tl(e,{key:r,props:t,defaultProps:n,state:o,actions:i}){return new Promise(((s,a)=>{let l,d,c=Pa(t.cancel??n?.cancel,r);if(c)g();else{Ki.und(t.pause)||(o.paused=Pa(t.pause,r));let e=n?.pause;!0!==e&&(e=o.paused||Pa(e,r)),l=La(t.delay||0,r),e?(o.resumeQueue.add(h),i.pause()):(i.resume(),h())}function u(){o.resumeQueue.add(h),o.timeouts.delete(d),d.cancel(),l=d.time-Ti.now()}function h(){l>0&&!Qi.skipAnimation?(o.delayed=!0,d=Ti.setTimeout(g,l),o.pauseQueue.add(u),o.timeouts.add(d)):g()}function g(){o.delayed&&(o.delayed=!1),o.pauseQueue.delete(u),o.timeouts.delete(d),e<=(o.cancelId||0)&&(c=!0);try{i.start({...t,callId:e,cancel:c},s)}catch(e){a(e)}}}))}var nl=(e,r)=>1==r.length?r[0]:r.some((e=>e.cancelled))?sl(e.get()):r.every((e=>e.noop))?ol(e.get()):il(e.get(),r.every((e=>e.finished))),ol=e=>({value:e,noop:!0,finished:!0,cancelled:!1}),il=(e,r,t=!1)=>({value:e,finished:r,cancelled:t}),sl=e=>({value:e,cancelled:!0,finished:!1});function al(e,r,t,n){const{callId:o,parentId:i,onRest:s}=r,{asyncTo:a,promise:l}=t;return i||e!==a||r.reset?t.promise=(async()=>{t.asyncId=o,t.asyncTo=e;const d=Ya(r,((e,r)=>"onRest"===r?void 0:e));let c,u;const h=new Promise(((e,r)=>(c=e,u=r))),g=e=>{const r=o<=(t.cancelId||0)&&sl(n)||o!==t.asyncId&&il(n,!1);if(r)throw e.result=r,u(e),e},m=(e,r)=>{const i=new dl,s=new cl;return(async()=>{if(Qi.skipAnimation)throw ll(t),s.result=il(n,!1),u(s),s;g(i);const a=Ki.obj(e)?{...e}:{...r,to:e};a.parentId=o,rs(d,((e,r)=>{Ki.und(a[r])&&(a[r]=e)}));const l=await n.start(a);return g(i),t.paused&&await new Promise((e=>{t.resumeQueue.add(e)})),l})()};let f;if(Qi.skipAnimation)return ll(t),il(n,!1);try{let r;r=Ki.arr(e)?(async e=>{for(const r of e)await m(r)})(e):Promise.resolve(e(m,n.stop.bind(n))),await Promise.all([r.then(c),h]),f=il(n.get(),!0,!1)}catch(e){if(e instanceof dl)f=e.result;else{if(!(e instanceof cl))throw e;f=e.result}}finally{o==t.asyncId&&(t.asyncId=i,t.asyncTo=i?a:void 0,t.promise=i?l:void 0)}return Ki.fun(s)&&Ti.batchedUpdates((()=>{s(f,n,n.item)})),f})():l}function ll(e,r){ns(e.timeouts,(e=>e.cancel())),e.pauseQueue.clear(),e.resumeQueue.clear(),e.asyncId=e.asyncTo=e.promise=void 0,r&&(e.cancelId=r)}var dl=class extends Error{constructor(){super("An async animation has been interrupted. You see this error because you forgot to use `await` or `.catch(...)` on its returned promise.")}},cl=class extends Error{constructor(){super("SkipAnimationSignal")}},ul=e=>e instanceof gl,hl=1,gl=class extends Js{constructor(){super(...arguments),this.id=hl++,this._priority=0}get priority(){return this._priority}set priority(e){this._priority!=e&&(this._priority=e,this._onPriorityChange(e))}get(){const e=Ea(this);return e&&e.getValue()}to(...e){return Qi.to(this,e)}interpolate(...e){return pa(`${ma}The "interpolate" function is deprecated in v9 (use "to" instead)`),Qi.to(this,e)}toJSON(){return this.get()}observerAdded(e){1==e&&this._attach()}observerRemoved(e){0==e&&this._detach()}_attach(){}_detach(){}_onChange(e,r=!1){Ks(this,{type:"change",parent:this,value:e,idle:r})}_onPriorityChange(e){this.idle||ps.sort(this),Ks(this,{type:"priority",parent:this,priority:e})}},ml=Symbol.for("SpringPhase"),fl=e=>(1&e[ml])>0,pl=e=>(2&e[ml])>0,bl=e=>(4&e[ml])>0,yl=(e,r)=>r?e[ml]|=3:e[ml]&=-3,vl=(e,r)=>r?e[ml]|=4:e[ml]&=-5,xl=class extends gl{constructor(e,r){if(super(),this.animation=new rl,this.defaultProps={},this._state={paused:!1,delayed:!1,pauseQueue:new Set,resumeQueue:new Set,timeouts:new Set},this._pendingCalls=new Set,this._lastCallId=0,this._lastToId=0,this._memoizedDuration=0,!Ki.und(e)||!Ki.und(r)){const t=Ki.obj(e)?{...e}:{...r,from:e};Ki.und(t.default)&&(t.default=!0),this.start(t)}}get idle(){return!(pl(this)||this._state.asyncTo)||bl(this)}get goal(){return Qs(this.animation.to)}get velocity(){const e=Ea(this);return e instanceof Ba?e.lastVelocity||0:e.getPayload().map((e=>e.lastVelocity||0))}get hasAnimated(){return fl(this)}get isAnimating(){return pl(this)}get isPaused(){return bl(this)}get isDelayed(){return this._state.delayed}advance(e){let r=!0,t=!1;const n=this.animation;let{toValues:o}=n;const{config:i}=n,s=ka(n.to);!s&&Zs(n.to)&&(o=ts(Qs(n.to))),n.values.forEach(((a,l)=>{if(a.done)return;const d=a.constructor==Ia?1:s?s[l].lastPosition:o[l];let c=n.immediate,u=d;if(!c){if(u=a.lastPosition,i.tension<=0)return void(a.done=!0);let r=a.elapsedTime+=e;const t=n.fromValues[l],o=null!=a.v0?a.v0:a.v0=Ki.arr(i.velocity)?i.velocity[l]:i.velocity;let s;const h=i.precision||(t==d?.005:Math.min(1,.001*Math.abs(d-t)));if(Ki.und(i.duration))if(i.decay){const e=!0===i.decay?.998:i.decay,n=Math.exp(-(1-e)*r);u=t+o/(1-e)*(1-n),c=Math.abs(a.lastPosition-u)<=h,s=o*n}else{s=null==a.lastVelocity?o:a.lastVelocity;const r=i.restVelocity||h/10,n=i.clamp?0:i.bounce,l=!Ki.und(n),g=t==d?a.v0>0:t<d;let m,f=!1;const p=1,b=Math.ceil(e/p);for(let e=0;e<b&&(m=Math.abs(s)>r,m||(c=Math.abs(d-u)<=h,!c));++e){l&&(f=u==d||u>d==g,f&&(s=-s*n,u=d));s+=(1e-6*-i.tension*(u-d)+.001*-i.friction*s)/i.mass*p,u+=s*p}}else{let n=1;i.duration>0&&(this._memoizedDuration!==i.duration&&(this._memoizedDuration=i.duration,a.durationProgress>0&&(a.elapsedTime=i.duration*a.durationProgress,r=a.elapsedTime+=e)),n=(i.progress||0)+r/this._memoizedDuration,n=n>1?1:n<0?0:n,a.durationProgress=n),u=t+i.easing(n)*(d-t),s=(u-a.lastPosition)/e,c=1==n}a.lastVelocity=s,Number.isNaN(u)&&(console.warn("Got NaN while animating:",this),c=!0)}s&&!s[l].done&&(c=!1),c?a.done=!0:r=!1,a.setValue(u,i.round)&&(t=!0)}));const a=Ea(this),l=a.getValue();if(r){const e=Qs(n.to);l===e&&!t||i.decay?t&&i.decay&&this._onChange(l):(a.setValue(e),this._onChange(e)),this._stop()}else t&&this._onChange(l)}set(e){return Ti.batchedUpdates((()=>{this._stop(),this._focus(e),this._set(e)})),this}pause(){this._update({pause:!0})}resume(){this._update({pause:!1})}finish(){if(pl(this)){const{to:e,config:r}=this.animation;Ti.batchedUpdates((()=>{this._onStart(),r.decay||this._set(e,!1),this._stop()}))}return this}update(e){return(this.queue||(this.queue=[])).push(e),this}start(e,r){let t;return Ki.und(e)?(t=this.queue||[],this.queue=[]):t=[Ki.obj(e)?e:{...r,to:e}],Promise.all(t.map((e=>this._update(e)))).then((e=>nl(this,e)))}stop(e){const{to:r}=this.animation;return this._focus(this.get()),ll(this._state,e&&this._lastCallId),Ti.batchedUpdates((()=>this._stop(r,e))),this}reset(){this._update({reset:!0})}eventObserved(e){"change"==e.type?this._start():"priority"==e.type&&(this.priority=e.priority+1)}_prepareNode(e){const r=this.key||"";let{to:t,from:n}=e;t=Ki.obj(t)?t[r]:t,(null==t||Qa(t))&&(t=void 0),n=Ki.obj(n)?n[r]:n,null==n&&(n=void 0);const o={to:t,from:n};return fl(this)||(e.reverse&&([t,n]=[n,t]),n=Qs(n),Ki.und(n)?Ea(this)||this._set(t):this._set(n)),o}_update({...e},r){const{key:t,defaultProps:n}=this;e.default&&Object.assign(n,Ya(e,((e,r)=>/^on/.test(r)?Wa(e,t):e))),kl(this,e,"onProps"),Dl(this,"onProps",e,this);const o=this._prepareNode(e);if(Object.isFrozen(this))throw Error("Cannot animate a `SpringValue` object that is frozen. Did you forget to pass your component to `animated(...)` before animating its props?");const i=this._state;return tl(++this._lastCallId,{key:t,props:e,defaultProps:n,state:i,actions:{pause:()=>{bl(this)||(vl(this,!0),ss(i.pauseQueue),Dl(this,"onPause",il(this,wl(this,this.animation.to)),this))},resume:()=>{bl(this)&&(vl(this,!1),pl(this)&&this._resume(),ss(i.resumeQueue),Dl(this,"onResume",il(this,wl(this,this.animation.to)),this))},start:this._merge.bind(this,o)}}).then((t=>{if(e.loop&&t.finished&&(!r||!t.noop)){const r=Fl(e);if(r)return this._update(r,!0)}return t}))}_merge(e,r,t){if(r.cancel)return this.stop(!0),t(sl(this));const n=!Ki.und(e.to),o=!Ki.und(e.from);if(n||o){if(!(r.callId>this._lastToId))return t(sl(this));this._lastToId=r.callId}const{key:i,defaultProps:s,animation:a}=this,{to:l,from:d}=a;let{to:c=l,from:u=d}=e;!o||n||r.default&&!Ki.und(c)||(c=u),r.reverse&&([c,u]=[u,c]);const h=!Ji(u,d);h&&(a.from=u),u=Qs(u);const g=!Ji(c,l);g&&this._focus(c);const m=Qa(r.to),{config:f}=a,{decay:p,velocity:b}=f;(n||o)&&(f.velocity=0),r.config&&!m&&function(e,r,t){t&&(Ja(t={...t},r),r={...t,...r}),Ja(e,r),Object.assign(e,r);for(const r in Xa)null==e[r]&&(e[r]=Xa[r]);let{frequency:n,damping:o}=e;const{mass:i}=e;Ki.und(n)||(n<.01&&(n=.01),o<0&&(o=0),e.tension=Math.pow(2*Math.PI/n,2)*i,e.friction=4*Math.PI*o*i/n)}(f,La(r.config,i),r.config!==s.config?La(s.config,i):void 0);let y=Ea(this);if(!y||Ki.und(c))return t(il(this,!0));const v=Ki.und(r.reset)?o&&!r.default:!Ki.und(u)&&Pa(r.reset,i),x=v?u:this.get(),w=Za(c),F=Ki.num(w)||Ki.arr(w)||ya(w),$=!m&&(!F||Pa(s.immediate||r.immediate,i));if(g){const e=Ma(c);if(e!==y.constructor){if(!$)throw Error(`Cannot animate between ${y.constructor.name} and ${e.name}, as the "to" prop suggests`);y=this._set(w)}}const C=y.constructor;let E=Zs(c),S=!1;if(!E){const e=v||!fl(this)&&h;(g||e)&&(S=Ji(Za(x),w),E=!S),(Ji(a.immediate,$)||$)&&Ji(f.decay,p)&&Ji(f.velocity,b)||(E=!0)}if(S&&pl(this)&&(a.changed&&!v?E=!0:E||this._stop(l)),!m&&((E||Zs(l))&&(a.values=y.getPayload(),a.toValues=Zs(c)?null:C==Ia?[1]:ts(w)),a.immediate!=$&&(a.immediate=$,$||v||this._set(l)),E)){const{onRest:e}=a;es(Sl,(e=>kl(this,r,e)));const n=il(this,wl(this,l));ss(this._pendingCalls,n),this._pendingCalls.add(t),a.changed&&Ti.batchedUpdates((()=>{a.changed=!v,e?.(n,this),v?La(s.onRest,n):a.onStart?.(n,this)}))}v&&this._set(x),m?t(al(r.to,r,this._state,this)):E?this._start():pl(this)&&!g?this._pendingCalls.add(t):t(ol(x))}_focus(e){const r=this.animation;e!==r.to&&(Xs(this)&&this._detach(),r.to=e,Xs(this)&&this._attach())}_attach(){let e=0;const{to:r}=this.animation;Zs(r)&&(ra(r,this),ul(r)&&(e=r.priority+1)),this.priority=e}_detach(){const{to:e}=this.animation;Zs(e)&&ta(e,this)}_set(e,r=!0){const t=Qs(e);if(!Ki.und(t)){const e=Ea(this);if(!e||!Ji(t,e.getValue())){const n=Ma(t);e&&e.constructor==n?e.setValue(t):Sa(this,n.create(t)),e&&Ti.batchedUpdates((()=>{this._onChange(t,r)}))}}return Ea(this)}_onStart(){const e=this.animation;e.changed||(e.changed=!0,Dl(this,"onStart",il(this,wl(this,e.to)),this))}_onChange(e,r){r||(this._onStart(),La(this.animation.onChange,e,this)),La(this.defaultProps.onChange,e,this),super._onChange(e,r)}_start(){const e=this.animation;Ea(this).reset(Qs(e.to)),e.immediate||(e.fromValues=e.values.map((e=>e.lastPosition))),pl(this)||(yl(this,!0),bl(this)||this._resume())}_resume(){Qi.skipAnimation?this.finish():ps.start(this)}_stop(e,r){if(pl(this)){yl(this,!1);const t=this.animation;es(t.values,(e=>{e.done=!0})),t.toValues&&(t.onChange=t.onPause=t.onResume=void 0),Ks(this,{type:"idle",parent:this});const n=r?sl(this.get()):il(this.get(),wl(this,e??t.to));ss(this._pendingCalls,n),t.changed&&(t.changed=!1,Dl(this,"onRest",n,this))}}};function wl(e,r){const t=Za(r);return Ji(Za(e.get()),t)}function Fl(e,r=e.loop,t=e.to){const n=La(r);if(n){const o=!0!==n&&Ga(n),i=(o||e).reverse,s=!o||o.reset;return $l({...e,loop:r,default:!1,pause:void 0,to:!i||Qa(t)?t:void 0,from:s?e.from:void 0,reset:s,...o})}}function $l(e){const{to:r,from:t}=e=Ga(e),n=new Set;return Ki.obj(r)&&El(r,n),Ki.obj(t)&&El(t,n),e.keys=n.size?Array.from(n):null,e}function Cl(e){const r=$l(e);return Ki.und(r.default)&&(r.default=Ya(r)),r}function El(e,r){rs(e,((e,t)=>null!=e&&r.add(t)))}var Sl=["onStart","onRest","onChange","onPause","onResume"];function kl(e,r,t){e.animation[t]=r[t]!==Na(r,t)?Wa(r[t],e.key):void 0}function Dl(e,r,...t){e.animation[r]?.(...t),e.defaultProps[r]?.(...t)}var Bl=["onStart","onChange","onRest"],Il=1,Al=class{constructor(e,r){this.id=Il++,this.springs={},this.queue=[],this._lastAsyncId=0,this._active=new Set,this._changed=new Set,this._started=!1,this._state={paused:!1,pauseQueue:new Set,resumeQueue:new Set,timeouts:new Set},this._events={onStart:new Map,onChange:new Map,onRest:new Map},this._onFrame=this._onFrame.bind(this),r&&(this._flush=r),e&&this.start({default:!0,...e})}get idle(){return!this._state.asyncTo&&Object.values(this.springs).every((e=>e.idle&&!e.isDelayed&&!e.isPaused))}get item(){return this._item}set item(e){this._item=e}get(){const e={};return this.each(((r,t)=>e[t]=r.get())),e}set(e){for(const r in e){const t=e[r];Ki.und(t)||this.springs[r].set(t)}}update(e){return e&&this.queue.push($l(e)),this}start(e){let{queue:r}=this;return e?r=ts(e).map($l):this.queue=[],this._flush?this._flush(this,r):(Hl(this,r),Tl(this,r))}stop(e,r){if(e!==!!e&&(r=e),r){const t=this.springs;es(ts(r),(r=>t[r].stop(!!e)))}else ll(this._state,this._lastAsyncId),this.each((r=>r.stop(!!e)));return this}pause(e){if(Ki.und(e))this.start({pause:!0});else{const r=this.springs;es(ts(e),(e=>r[e].pause()))}return this}resume(e){if(Ki.und(e))this.start({pause:!1});else{const r=this.springs;es(ts(e),(e=>r[e].resume()))}return this}each(e){rs(this.springs,e)}_onFrame(){const{onStart:e,onChange:r,onRest:t}=this._events,n=this._active.size>0,o=this._changed.size>0;(n&&!this._started||o&&!this._started)&&(this._started=!0,ns(e,(([e,r])=>{r.value=this.get(),e(r,this,this._item)})));const i=!n&&this._started,s=o||i&&t.size?this.get():null;o&&r.size&&ns(r,(([e,r])=>{r.value=s,e(r,this,this._item)})),i&&(this._started=!1,ns(t,(([e,r])=>{r.value=s,e(r,this,this._item)})))}eventObserved(e){if("change"==e.type)this._changed.add(e.parent),e.idle||this._active.add(e.parent);else{if("idle"!=e.type)return;this._active.delete(e.parent)}Ti.onFrame(this._onFrame)}};function Tl(e,r){return Promise.all(r.map((r=>zl(e,r)))).then((r=>nl(e,r)))}async function zl(e,r,t){const{keys:n,to:o,from:i,loop:s,onRest:a,onResolve:l}=r,d=Ki.obj(r.default)&&r.default;s&&(r.loop=!1),!1===o&&(r.to=null),!1===i&&(r.from=null);const c=Ki.arr(o)||Ki.fun(o)?o:void 0;c?(r.to=void 0,r.onRest=void 0,d&&(d.onRest=void 0)):es(Bl,(t=>{const n=r[t];if(Ki.fun(n)){const o=e._events[t];r[t]=({finished:e,cancelled:r})=>{const t=o.get(n);t?(e||(t.finished=!1),r&&(t.cancelled=!0)):o.set(n,{value:null,finished:e||!1,cancelled:r||!1})},d&&(d[t]=r[t])}}));const u=e._state;r.pause===!u.paused?(u.paused=r.pause,ss(r.pause?u.pauseQueue:u.resumeQueue)):u.paused&&(r.pause=!0);const h=(n||Object.keys(e.springs)).map((t=>e.springs[t].start(r))),g=!0===r.cancel||!0===Na(r,"cancel");(c||g&&u.asyncId)&&h.push(tl(++e._lastAsyncId,{props:r,state:u,actions:{pause:Xi,resume:Xi,start(r,t){g?(ll(u,e._lastAsyncId),t(sl(e))):(r.onRest=a,t(al(c,r,u,e)))}}})),u.paused&&await new Promise((e=>{u.resumeQueue.add(e)}));const m=nl(e,await Promise.all(h));if(s&&m.finished&&(!t||!m.noop)){const t=Fl(r,s,o);if(t)return Hl(e,[t]),zl(e,t,!0)}return l&&Ti.batchedUpdates((()=>l(m,e,e.item))),m}function Ol(e,r){const t={...e.springs};return r&&es(ts(r),(e=>{Ki.und(e.keys)&&(e=$l(e)),Ki.obj(e.to)||(e={...e,to:void 0}),Rl(t,e,(e=>_l(e)))})),Ml(e,t),t}function Ml(e,r){rs(r,((r,t)=>{e.springs[t]||(e.springs[t]=r,ra(r,e))}))}function _l(e,r){const t=new xl;return t.key=e,r&&ra(t,r),t}function Rl(e,r,t){r.keys&&es(r.keys,(n=>{(e[n]||(e[n]=t(n)))._prepareNode(r)}))}function Hl(e,r){es(r,(r=>{Rl(e.springs,r,(r=>_l(r,e)))}))}var jl=n.createContext({pause:!1,immediate:!1}),Ll=()=>{const e=[],r=function(r){ba(`${ma}Directly calling start instead of using the api object is deprecated in v9 (use ".start" instead), this will be removed in later 0.X.0 versions`);const n=[];return es(e,((e,o)=>{if(Ki.und(r))n.push(e.start());else{const i=t(r,e,o);i&&n.push(e.start(i))}})),n};r.current=e,r.add=function(r){e.includes(r)||e.push(r)},r.delete=function(r){const t=e.indexOf(r);~t&&e.splice(t,1)},r.pause=function(){return es(e,(e=>e.pause(...arguments))),this},r.resume=function(){return es(e,(e=>e.resume(...arguments))),this},r.set=function(r){es(e,((e,t)=>{const n=Ki.fun(r)?r(t,e):r;n&&e.set(n)}))},r.start=function(r){const t=[];return es(e,((e,n)=>{if(Ki.und(r))t.push(e.start());else{const o=this._getProps(r,e,n);o&&t.push(e.start(o))}})),t},r.stop=function(){return es(e,(e=>e.stop(...arguments))),this},r.update=function(r){return es(e,((e,t)=>e.update(this._getProps(r,e,t)))),this};const t=function(e,r,t){return Ki.fun(e)?e(t,r):e};return r._getProps=t,r};function Pl(e,r){const t=Ki.fun(e),[[n],o]=function(e,r,t){const n=Ki.fun(r)&&r;n&&!t&&(t=[]);const o=f((()=>n||3==arguments.length?Ll():void 0),[]),s=i(0),a=xa(),l=f((()=>({ctrls:[],queue:[],flush(e,r){const t=Ol(e,r),n=s.current>0&&!l.queue.length&&!Object.keys(t).some((r=>!e.springs[r]));return n?Tl(e,r):new Promise((n=>{Ml(e,t),l.queue.push((()=>{n(Tl(e,r))})),a()}))}})),[]),d=i([...l.ctrls]),c=i([]),u=$a(e)||0;function h(e,t){for(let o=e;o<t;o++){const e=d.current[o]||(d.current[o]=new Al(null,l.flush)),t=n?n(o,e):r[o];t&&(c.current[o]=Cl(t))}}f((()=>{es(d.current.slice(e,u),(e=>{!function(e,r){e.ref?.delete(e),r?.delete(e)}(e,o),e.stop(!0)})),d.current.length=e,h(u,e)}),[e]),f((()=>{h(0,Math.min(u,e))}),t);const g=d.current.map(((e,r)=>Ol(e,c.current[r]))),m=p(jl),b=$a(m),y=m!==b&&function(e){for(const r in e)return!0;return!1}(m);va((()=>{s.current++,l.ctrls=d.current;const{queue:e}=l;e.length&&(l.queue=[],es(e,(e=>e()))),es(d.current,((e,r)=>{o?.add(e),y&&e.start({default:m});const t=c.current[r];t&&(function(e,r){r&&e.ref!==r&&(e.ref?.delete(e),r.add(e),e.ref=r)}(e,t.ref),e.ref?e.queue.push(t):e.start(t))}))})),wa((()=>()=>{es(l.ctrls,(e=>e.stop(!0)))}));const v=g.map((e=>({...e})));return o?[v,o]:v}(1,t?e:[e],t?r||[]:r);return t||2==arguments.length?[n,o]:n}var Wl=class extends gl{constructor(e,r){super(),this.source=e,this.idle=!0,this._active=new Set,this.calc=js(...r);const t=this._get(),n=Ma(t);Sa(this,n.create(t))}advance(e){const r=this._get();Ji(r,this.get())||(Ea(this).setValue(r),this._onChange(r,this.idle)),!this.idle&&Vl(this._active)&&Yl(this)}_get(){const e=Ki.arr(this.source)?this.source.map(Qs):ts(Qs(this.source));return this.calc(...e)}_start(){this.idle&&!Vl(this._active)&&(this.idle=!1,es(ka(this),(e=>{e.done=!1})),Qi.skipAnimation?(Ti.batchedUpdates((()=>this.advance())),Yl(this)):ps.start(this))}_attach(){let e=1;es(ts(this.source),(r=>{Zs(r)&&ra(r,this),ul(r)&&(r.idle||this._active.add(r),e=Math.max(e,r.priority+1))})),this.priority=e,this._start()}_detach(){es(ts(this.source),(e=>{Zs(e)&&ta(e,this)})),this._active.clear(),Yl(this)}eventObserved(e){"change"==e.type?e.idle?this.advance():(this._active.add(e.parent),this._start()):"idle"==e.type?this._active.delete(e.parent):"priority"==e.type&&(this.priority=ts(this.source).reduce(((e,r)=>Math.max(e,(ul(r)?r.priority:0)+1)),0))}};function Nl(e){return!1!==e.idle}function Vl(e){return!e.size||Array.from(e).every(Nl)}function Yl(e){e.idle||(e.idle=!0,es(ka(e),(e=>{e.done=!0})),Ks(e,{type:"idle",parent:e}))}Qi.assign({createStringInterpolator:ga,to:(e,r)=>new Wl(e,r)});var Ul=/^--/;function ql(e,r){return null==r||"boolean"==typeof r||""===r?"":"number"!=typeof r||0===r||Ul.test(e)||Zl.hasOwnProperty(e)&&Zl[e]?(""+r).trim():r+"px"}var Gl={};var Zl={animationIterationCount:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Ql=["Webkit","Ms","Moz","O"];Zl=Object.keys(Zl).reduce(((e,r)=>(Ql.forEach((t=>e[((e,r)=>e+r.charAt(0).toUpperCase()+r.substring(1))(t,r)]=e[r])),e)),Zl);var Xl=/^(matrix|translate|scale|rotate|skew)/,Kl=/^(translate)/,Jl=/^(rotate|skew)/,ed=(e,r)=>Ki.num(e)&&0!==e?e+r:e,rd=(e,r)=>Ki.arr(e)?e.every((e=>rd(e,r))):Ki.num(e)?e===r:parseFloat(e)===r,td=class extends Ta{constructor({x:e,y:r,z:t,...n}){const o=[],i=[];(e||r||t)&&(o.push([e||0,r||0,t||0]),i.push((e=>[`translate3d(${e.map((e=>ed(e,"px"))).join(",")})`,rd(e,0)]))),rs(n,((e,r)=>{if("transform"===r)o.push([e||""]),i.push((e=>[e,""===e]));else if(Xl.test(r)){if(delete n[r],Ki.und(e))return;const t=Kl.test(r)?"px":Jl.test(r)?"deg":"";o.push(ts(e)),i.push("rotate3d"===r?([e,r,n,o])=>[`rotate3d(${e},${r},${n},${ed(o,t)})`,rd(o,0)]:e=>[`${r}(${e.map((e=>ed(e,t))).join(",")})`,rd(e,r.startsWith("scale")?1:0)])}})),o.length&&(n.transform=new nd(o,i)),super(n)}},nd=class extends Js{constructor(e,r){super(),this.inputs=e,this.transforms=r,this._value=null}get(){return this._value||(this._value=this._get())}_get(){let e="",r=!0;return es(this.inputs,((t,n)=>{const o=Qs(t[0]),[i,s]=this.transforms[n](Ki.arr(o)?o:t.map(Qs));e+=" "+i,r=r&&s})),r?"none":e}observerAdded(e){1==e&&es(this.inputs,(e=>es(e,(e=>Zs(e)&&ra(e,this)))))}observerRemoved(e){0==e&&es(this.inputs,(e=>es(e,(e=>Zs(e)&&ta(e,this)))))}eventObserved(e){"change"==e.type&&(this._value=null),Ks(this,e)}};Qi.assign({batchedUpdates:I,createStringInterpolator:ga,colors:{transparent:0,aliceblue:4042850303,antiquewhite:4209760255,aqua:16777215,aquamarine:2147472639,azure:4043309055,beige:4126530815,bisque:4293182719,black:255,blanchedalmond:4293643775,blue:65535,blueviolet:2318131967,brown:2771004159,burlywood:3736635391,burntsienna:3934150143,cadetblue:1604231423,chartreuse:2147418367,chocolate:3530104575,coral:4286533887,cornflowerblue:1687547391,cornsilk:4294499583,crimson:3692313855,cyan:16777215,darkblue:35839,darkcyan:9145343,darkgoldenrod:3095792639,darkgray:2846468607,darkgreen:6553855,darkgrey:2846468607,darkkhaki:3182914559,darkmagenta:2332068863,darkolivegreen:1433087999,darkorange:4287365375,darkorchid:2570243327,darkred:2332033279,darksalmon:3918953215,darkseagreen:2411499519,darkslateblue:1211993087,darkslategray:793726975,darkslategrey:793726975,darkturquoise:13554175,darkviolet:2483082239,deeppink:4279538687,deepskyblue:12582911,dimgray:1768516095,dimgrey:1768516095,dodgerblue:512819199,firebrick:2988581631,floralwhite:4294635775,forestgreen:579543807,fuchsia:4278255615,gainsboro:3705462015,ghostwhite:4177068031,gold:4292280575,goldenrod:3668254975,gray:2155905279,green:8388863,greenyellow:2919182335,grey:2155905279,honeydew:4043305215,hotpink:4285117695,indianred:3445382399,indigo:1258324735,ivory:4294963455,khaki:4041641215,lavender:3873897215,lavenderblush:4293981695,lawngreen:2096890111,lemonchiffon:4294626815,lightblue:2916673279,lightcoral:4034953471,lightcyan:3774873599,lightgoldenrodyellow:4210742015,lightgray:3553874943,lightgreen:2431553791,lightgrey:3553874943,lightpink:4290167295,lightsalmon:4288707327,lightseagreen:548580095,lightskyblue:2278488831,lightslategray:2005441023,lightslategrey:2005441023,lightsteelblue:2965692159,lightyellow:4294959359,lime:16711935,limegreen:852308735,linen:4210091775,magenta:4278255615,maroon:2147483903,mediumaquamarine:1724754687,mediumblue:52735,mediumorchid:3126187007,mediumpurple:2473647103,mediumseagreen:1018393087,mediumslateblue:2070474495,mediumspringgreen:16423679,mediumturquoise:1221709055,mediumvioletred:3340076543,midnightblue:421097727,mintcream:4127193855,mistyrose:4293190143,moccasin:4293178879,navajowhite:4292783615,navy:33023,oldlace:4260751103,olive:2155872511,olivedrab:1804477439,orange:4289003775,orangered:4282712319,orchid:3664828159,palegoldenrod:4008225535,palegreen:2566625535,paleturquoise:2951671551,palevioletred:3681588223,papayawhip:4293907967,peachpuff:4292524543,peru:3448061951,pink:4290825215,plum:3718307327,powderblue:2967529215,purple:2147516671,rebeccapurple:1714657791,red:4278190335,rosybrown:3163525119,royalblue:1097458175,saddlebrown:2336560127,salmon:4202722047,sandybrown:4104413439,seagreen:780883967,seashell:4294307583,sienna:2689740287,silver:3233857791,skyblue:2278484991,slateblue:1784335871,slategray:1887473919,slategrey:1887473919,snow:4294638335,springgreen:16744447,steelblue:1182971135,tan:3535047935,teal:8421631,thistle:3636451583,tomato:4284696575,turquoise:1088475391,violet:4001558271,wheat:4125012991,white:4294967295,whitesmoke:4126537215,yellow:4294902015,yellowgreen:2597139199}});var od=((e,{applyAnimatedValues:r=()=>!1,createAnimatedStyle:t=e=>new Ta(e),getComponentProps:n=e=>e}={})=>{const o={applyAnimatedValues:r,createAnimatedStyle:t,getComponentProps:n},i=e=>{const r=ja(e)||"Anonymous";return(e=Ki.str(e)?i[e]||(i[e]=_a(e,o)):e[Ha]||(e[Ha]=_a(e,o))).displayName=`Animated(${r})`,e};return rs(e,((r,t)=>{Ki.arr(e)&&(t=ja(r)),i[t]=i(r)})),{animated:i}})(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"],{applyAnimatedValues:function(e,r){if(!e.nodeType||!e.setAttribute)return!1;const t="filter"===e.nodeName||e.parentNode&&"filter"===e.parentNode.nodeName,{className:n,style:o,children:i,scrollTop:s,scrollLeft:a,viewBox:l,...d}=r,c=Object.values(d),u=Object.keys(d).map((r=>t||e.hasAttribute(r)?r:Gl[r]||(Gl[r]=r.replace(/([A-Z])/g,(e=>"-"+e.toLowerCase())))));void 0!==i&&(e.textContent=i);for(const r in o)if(o.hasOwnProperty(r)){const t=ql(r,o[r]);Ul.test(r)?e.style.setProperty(r,t):e.style[r]=t}u.forEach(((r,t)=>{e.setAttribute(r,c[t])})),void 0!==n&&(e.className=n),void 0!==s&&(e.scrollTop=s),void 0!==a&&(e.scrollLeft=a),void 0!==l&&e.setAttribute("viewBox",l)},createAnimatedStyle:e=>new td(e),getComponentProps:({scrollTop:e,scrollLeft:r,...t})=>t}),id=od.animated;const sd=F.div`
    display: inline-block;
    position: relative;
    width: ${({$size:e})=>e?`${e}px`:"1em"};
    height: ${({$size:e})=>e?`${e}px`:"1em"};
    color: ${e=>e.$color||"currentColor"};
`,ad=C`
	0% {
	  transform: rotate(0deg);
	}
	100% {
	  transform: rotate(360deg);
	}
`,ld=F.div`
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
    animation: ${ad} 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
`,dd=F(ld)`
    animation-delay: -0.45s;
`,cd=F(ld)`
    animation-delay: -0.3s;
`,ud=F(ld)`
    animation-delay: -0.15s;
`,hd=({color:t,className:n,size:o})=>e(sd,{className:n,$size:o,$color:t,"data-testid":"component-loading-spinner",children:[r(ld,{id:"inner1"}),r(dd,{id:"inner2"}),r(cd,{id:"inner3"}),r(ud,{id:"inner4"})]}),gd={Button:{"button-radius":jn.md,"button-default-colour-bg":fn["bg-primary"],"button-default-colour-bg-hover":fn["bg-primary-hover"],"button-default-colour-text":fn["text-inverse"],"button-secondary-colour-border":fn["border-primary"],"button-secondary-colour-text":fn["text-primary"],"button-light-colour-text":fn["text-primary"],"button-link-colour-text":fn["text-primary"]},Animation:{"loading-dots-spinner-colour":fn["icon-primary"]},Navbar:{"navbar-full-height":"6rem","navbar-full-logo-height":"2rem","navbar-compressed-height":"4rem","navbar-compressed-logo-height":"1.5rem","navbar-mobile-height":"3.5rem","navbar-mobile-logo-height":"1.5rem","navbar-colour-bg":fn.bg,"navbar-colour-icon":fn.icon,"navbar-link-colour-text":fn.text,"navbar-link-colour-text-hover":fn["text-hover"],"navbar-link-colour-text-selected-hover":fn["text-selected-hover"]},Footer:{"footer-colour-bg":fn["bg-strong"],"footer-colour-text":fn.text,"footer-link-colour-text":fn.text,"footer-link-colour-text-hover":fn["text-hover"],"footer-disclaimer-link-colour-text":fn.text,"footer-disclaimer-link-colour-text-hover":fn["text-subtler"]}},md={Button:{"button-radius":jn.sm,"button-default-colour-bg":fn["bg-primary"],"button-default-colour-bg-hover":fn["bg-primary-hover"],"button-default-colour-text":fn["text-inverse"],"button-secondary-colour-border":fn["border-primary"],"button-secondary-colour-text":fn["text-primary"],"button-light-colour-text":fn["text-primary"],"button-link-colour-text":fn["text-primary"]},Animation:{"loading-dots-spinner-colour":fn["icon-primary"]},Navbar:{"navbar-full-height":"6rem","navbar-full-logo-height":"2rem","navbar-compressed-height":"4rem","navbar-compressed-logo-height":"1.5rem","navbar-mobile-height":"3.5rem","navbar-mobile-logo-height":"1.5rem","navbar-colour-bg":fn.bg,"navbar-colour-icon":fn.icon,"navbar-link-colour-text":fn.text,"navbar-link-colour-text-hover":fn["text-hover"],"navbar-link-colour-text-selected-hover":fn["text-selected-hover"]},Footer:{"footer-colour-bg":fn["bg-strong"],"footer-colour-text":fn.text,"footer-link-colour-text":fn.text,"footer-link-colour-text-hover":fn["text-hover"],"footer-disclaimer-link-colour-text":fn.text,"footer-disclaimer-link-colour-text-hover":fn["text-subtler"]}},fd={Button:{"button-radius":jn.sm,"button-default-colour-bg":fn["bg-primary"],"button-default-colour-bg-hover":fn["bg-primary-hover"],"button-default-colour-text":fn["text-inverse"],"button-secondary-colour-border":fn["border-primary"],"button-secondary-colour-text":fn["text-primary"],"button-light-colour-text":fn["text-primary"],"button-link-colour-text":fn["text-primary"]},Animation:{"loading-dots-spinner-colour":Vn.Primitive["brand-50"]},Navbar:{"navbar-full-height":"6rem","navbar-full-logo-height":"2rem","navbar-compressed-height":"4rem","navbar-compressed-logo-height":"1.5rem","navbar-mobile-height":"3.5rem","navbar-mobile-logo-height":"1.5rem","navbar-colour-bg":fn.bg,"navbar-colour-icon":fn.icon,"navbar-link-colour-text":fn.text,"navbar-link-colour-text-hover":fn["text-hover"],"navbar-link-colour-text-selected-hover":fn["text-selected-hover"]},Footer:{"footer-colour-bg":fn["bg-strong"],"footer-colour-text":fn.text,"footer-link-colour-text":fn.text,"footer-link-colour-text-hover":fn["text-hover"],"footer-disclaimer-link-colour-text":fn.text,"footer-disclaimer-link-colour-text-hover":fn["text-subtler"]}},pd={collections:{default:md,pa:{Button:{"button-radius":jn.full,"button-default-colour-bg":fn["bg-primary"],"button-default-colour-bg-hover":fn["bg-primary-hover"],"button-default-colour-text":fn["text-inverse"],"button-secondary-colour-border":fn["border-primary"],"button-secondary-colour-text":fn["text-primary"],"button-light-colour-text":fn["text-primary"],"button-link-colour-text":fn["text-primary"]},Animation:{"loading-dots-spinner-colour":fn["icon-primary"]},Navbar:{"navbar-full-height":"6rem","navbar-full-logo-height":"2rem","navbar-compressed-height":"4rem","navbar-compressed-logo-height":"1.5rem","navbar-mobile-height":"3.5rem","navbar-mobile-logo-height":"1.5rem","navbar-colour-bg":fn.bg,"navbar-colour-icon":fn.icon,"navbar-link-colour-text":fn.text,"navbar-link-colour-text-hover":fn["text-hover"],"navbar-link-colour-text-selected-hover":fn["text-selected-hover"]},Footer:{"footer-colour-bg":fn["bg-strong"],"footer-colour-text":fn.text,"footer-link-colour-text":fn.text,"footer-link-colour-text-hover":fn["text-hover"],"footer-disclaimer-link-colour-text":fn.text,"footer-disclaimer-link-colour-text-hover":fn["text-subtler"]}},a11yplayground:gd,lifesg:fd,spf:{Button:{"button-radius":jn.md,"button-default-colour-bg":fn["bg-primary"],"button-default-colour-bg-hover":fn["bg-primary-hover"],"button-default-colour-text":fn["text-inverse"],"button-secondary-colour-border":fn["border-primary"],"button-secondary-colour-text":fn["text-primary"],"button-light-colour-text":fn["text-primary"],"button-link-colour-text":fn["text-primary"]},Animation:{"loading-dots-spinner-colour":fn["icon-primary"]},Navbar:{"navbar-full-height":"6rem","navbar-full-logo-height":"3rem","navbar-compressed-height":"5rem","navbar-compressed-logo-height":"2rem","navbar-mobile-height":"4rem","navbar-mobile-logo-height":"2rem","navbar-colour-bg":fn.bg,"navbar-colour-icon":fn.icon,"navbar-link-colour-text":fn["text-primary-strongest"],"navbar-link-colour-text-hover":fn["text-subtler"],"navbar-link-colour-text-selected-hover":fn["text-subtler"]},Footer:{"footer-colour-bg":fn["bg-inverse"],"footer-colour-text":fn["text-inverse"],"footer-link-colour-text":fn["text-inverse"],"footer-link-colour-text-hover":fn["text-inverse"],"footer-disclaimer-link-colour-text":fn["text-inverse"],"footer-disclaimer-link-colour-text-hover":fn["text-inverse"]}}},defaultValue:"default"},bd=(e,r)=>t=>{var n,o;const i=t.theme,s=Lt(pd,null==i?void 0:i.componentScheme);return yd((null===(o=null===(n=null==i?void 0:i.componentOverrides)||void 0===n?void 0:n[e])||void 0===o?void 0:o[r])||s[e][r],t)},yd=(e,r)=>{switch(typeof e){case"function":return e(r);case"number":return e+"px";case"string":return e}},vd=bd("Button","button-radius"),xd=bd("Button","button-default-colour-bg"),wd=bd("Button","button-default-colour-bg-hover"),Fd=bd("Button","button-default-colour-text"),$d=bd("Button","button-secondary-colour-border"),Cd=bd("Button","button-secondary-colour-text"),Ed=bd("Button","button-light-colour-text"),Sd=bd("Button","button-link-colour-text"),kd=F.button`
    padding: ${Gn["spacing-8"]} ${Gn["spacing-16"]};
    min-width: 4rem;
    border: ${qn["width-010"]} ${qn.solid} transparent;
    transition: all ${Un["duration-250"]} ${Un["ease-default"]};
    border-radius: ${vd};
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;

    // -----------------------------------------------------------------------------
    // BUTTON STYLE + TEXT COLOR
    // -----------------------------------------------------------------------------
    ${e=>{switch(e.$buttonStyle){case"secondary":return $`
                    background-color: ${Vn.bg};
                    border-color: ${e.$buttonIsDanger?Vn["border-error-strong"]:$d};

                    color: ${e.$buttonIsDanger?Vn["text-error"]:Cd};

                    &:hover,
                    &:active {
                        @media (pointer: fine) {
                            background-color: ${Vn["bg-hover-neutral"]};
                        }
                    }
                `;case"light":return $`
                    background-color: ${Vn.bg};
                    border-color: ${Vn.border};

                    color: ${e.$buttonIsDanger?Vn["text-error"]:Ed};

                    &:hover,
                    &:active {
                        @media (pointer: fine) {
                            background-color: ${Vn["bg-hover-neutral"]};
                        }
                    }
                `;case"link":return $`
                    background-color: transparent;

                    color: ${e.$buttonIsDanger?Vn["text-error"]:Sd};
                    &:hover,
                    &:active {
                        @media (pointer: fine) {
                            background-color: ${Vn["bg-hover-neutral"]};
                        }
                    }
                `;case"disabled":return $`
                    background-color: ${Vn["bg-disabled"]};

                    cursor: not-allowed;

                    &:hover {
                        box-shadow: none;
                    }

                    color: ${Vn["text-disabled"]};
                `;default:return $`
                    background-color: ${e.$buttonIsDanger?Vn["bg-error-strong"]:xd};

                    ${Xn.MaxWidth.sm} {
                        width: 100%;
                    }

                    color: ${Fd};

                    &:hover,
                    &:active {
                        @media (pointer: fine) {
                            background-color: ${e.$buttonIsDanger?Vn["bg-error-strong-hover"]:wd};
                        }
                    }
                `}}}

    // -----------------------------------------------------------------------------
	// BUTTON SIZE + TEXT SIZE
	// -----------------------------------------------------------------------------
	${e=>{switch(e.$buttonSizeStyle){case"small":return $`
                    height: 2.5rem;
                    ${Yn["body-md-semibold"]}

                    ${Xn.MaxWidth.xxs} {
                        height: auto;
                    }
                `;case"large":return $`
                    height: 4rem;
                    ${Yn["heading-md-semibold"]}

                    ${Xn.MaxWidth.xxs} {
                        height: auto;
                    }
                `;default:return $`
                    height: 3rem;
                    ${Yn["heading-xs-semibold"]}

                    ${Xn.MaxWidth.xxs} {
                        height: auto;
                    }
                `}}}
`,Dd=F(hd)`
    margin-right: 0.5rem;
`,Bd=(t,n)=>{const{children:o,disabled:i=!1,loading:s=!1,styleType:a="default",danger:l=!1,focusableWhenDisabled:d=!1,onClick:c}=t,u=se(t,["children","disabled","loading","styleType","danger","focusableWhenDisabled","onClick"]),h={$buttonStyle:i?"disabled":a,$buttonSizeStyle:"default",$buttonIsDanger:l};return e(kd,Object.assign({ref:n,"data-testid":u["data-testid"]||"button",disabled:i&&!d,"aria-disabled":i,"aria-busy":s,onClick:i?void 0:c},h,u,{children:[s&&r(Dd,{}),r("span",{children:o})]}))};Bd.displayName="Button.Default";const Id=(t,n)=>{const{children:o,disabled:i=!1,loading:s=!1,styleType:a="default",danger:l=!1,focusableWhenDisabled:d=!1,onClick:c}=t,u=se(t,["children","disabled","loading","styleType","danger","focusableWhenDisabled","onClick"]),h={$buttonStyle:i?"disabled":a,$buttonSizeStyle:"small",$buttonIsDanger:l};return e(kd,Object.assign({ref:n,"data-testid":u["data-testid"]||"button",disabled:i&&!d,"aria-disabled":i,"aria-busy":s,onClick:i?void 0:c},h,u,{children:[s&&r(Dd,{}),r("span",{children:o})]}))};Id.displayName="Button.Small";const Ad=(t,n)=>{const{children:o,disabled:i=!1,loading:s=!1,styleType:a="default",danger:l=!1,focusableWhenDisabled:d=!1,onClick:c}=t,u=se(t,["children","disabled","loading","styleType","danger","focusableWhenDisabled","onClick"]),h={$buttonStyle:i?"disabled":a,$buttonSizeStyle:"large",$buttonIsDanger:l};return e(kd,Object.assign({ref:n,"data-testid":u["data-testid"]||"button",disabled:i&&!d,"aria-disabled":i,"aria-busy":s,onClick:i?void 0:c},h,u,{children:[s&&r(Dd,{}),r("span",{children:o})]}))};Ad.displayName="Button.Large";const Td={Default:o.forwardRef(Bd),Small:o.forwardRef(Id),Large:o.forwardRef(Ad)};var zd={exports:{}};zd.exports=function(){var e={LTS:"h:mm:ss A",LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D, YYYY",LLL:"MMMM D, YYYY h:mm A",LLLL:"dddd, MMMM D, YYYY h:mm A"},r=/(\[[^[]*\])|([-_:/.,()\s]+)|(A|a|YYYY|YY?|MM?M?M?|Do|DD?|hh?|HH?|mm?|ss?|S{1,3}|z|ZZ?)/g,t=/\d\d/,n=/\d\d?/,o=/\d*[^-_:/,()\s\d]+/,i={},s=function(e){return(e=+e)+(e>68?1900:2e3)},a=function(e){return function(r){this[e]=+r}},l=[/[+-]\d\d:?(\d\d)?|Z/,function(e){(this.zone||(this.zone={})).offset=function(e){if(!e)return 0;if("Z"===e)return 0;var r=e.match(/([+-]|\d\d)/g),t=60*r[1]+(+r[2]||0);return 0===t?0:"+"===r[0]?-t:t}(e)}],d=function(e){var r=i[e];return r&&(r.indexOf?r:r.s.concat(r.f))},c=function(e,r){var t,n=i.meridiem;if(n){for(var o=1;o<=24;o+=1)if(e.indexOf(n(o,0,r))>-1){t=o>12;break}}else t=e===(r?"pm":"PM");return t},u={A:[o,function(e){this.afternoon=c(e,!1)}],a:[o,function(e){this.afternoon=c(e,!0)}],S:[/\d/,function(e){this.milliseconds=100*+e}],SS:[t,function(e){this.milliseconds=10*+e}],SSS:[/\d{3}/,function(e){this.milliseconds=+e}],s:[n,a("seconds")],ss:[n,a("seconds")],m:[n,a("minutes")],mm:[n,a("minutes")],H:[n,a("hours")],h:[n,a("hours")],HH:[n,a("hours")],hh:[n,a("hours")],D:[n,a("day")],DD:[t,a("day")],Do:[o,function(e){var r=i.ordinal,t=e.match(/\d+/);if(this.day=t[0],r)for(var n=1;n<=31;n+=1)r(n).replace(/\[|\]/g,"")===e&&(this.day=n)}],M:[n,a("month")],MM:[t,a("month")],MMM:[o,function(e){var r=d("months"),t=(d("monthsShort")||r.map((function(e){return e.slice(0,3)}))).indexOf(e)+1;if(t<1)throw new Error;this.month=t%12||t}],MMMM:[o,function(e){var r=d("months").indexOf(e)+1;if(r<1)throw new Error;this.month=r%12||r}],Y:[/[+-]?\d+/,a("year")],YY:[t,function(e){this.year=s(e)}],YYYY:[/\d{4}/,a("year")],Z:l,ZZ:l};function h(t){var n,o;n=t,o=i&&i.formats;for(var s=(t=n.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g,(function(r,t,n){var i=n&&n.toUpperCase();return t||o[n]||e[n]||o[i].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g,(function(e,r,t){return r||t.slice(1)}))}))).match(r),a=s.length,l=0;l<a;l+=1){var d=s[l],c=u[d],h=c&&c[0],g=c&&c[1];s[l]=g?{regex:h,parser:g}:d.replace(/^\[|\]$/g,"")}return function(e){for(var r={},t=0,n=0;t<a;t+=1){var o=s[t];if("string"==typeof o)n+=o.length;else{var i=o.regex,l=o.parser,d=e.slice(n),c=i.exec(d)[0];l.call(r,c),e=e.replace(c,"")}}return function(e){var r=e.afternoon;if(void 0!==r){var t=e.hours;r?t<12&&(e.hours+=12):12===t&&(e.hours=0),delete e.afternoon}}(r),r}}return function(e,r,t){t.p.customParseFormat=!0,e&&e.parseTwoDigitYear&&(s=e.parseTwoDigitYear);var n=r.prototype,o=n.parse;n.parse=function(e){var r=e.date,n=e.utc,s=e.args;this.$u=n;var a=s[1];if("string"==typeof a){var l=!0===s[2],d=!0===s[3],c=l||d,u=s[2];d&&(u=s[2]),i=this.$locale(),!l&&u&&(i=t.Ls[u]),this.$d=function(e,r,t){try{if(["x","X"].indexOf(r)>-1)return new Date(("X"===r?1e3:1)*e);var n=h(r)(e),o=n.year,i=n.month,s=n.day,a=n.hours,l=n.minutes,d=n.seconds,c=n.milliseconds,u=n.zone,g=new Date,m=s||(o||i?1:g.getDate()),f=o||g.getFullYear(),p=0;o&&!i||(p=i>0?i-1:g.getMonth());var b=a||0,y=l||0,v=d||0,x=c||0;return u?new Date(Date.UTC(f,p,m,b,y,v,x+60*u.offset*1e3)):t?new Date(Date.UTC(f,p,m,b,y,v,x)):new Date(f,p,m,b,y,v,x)}catch(e){return new Date("")}}(r,a,n),this.init(),u&&!0!==u&&(this.$L=this.locale(u).$L),c&&r!=this.format(a)&&(this.$d=new Date("")),i={}}else if(a instanceof Array)for(var g=a.length,m=1;m<=g;m+=1){s[1]=a[m-1];var f=t.apply(this,s);if(f.isValid()){this.$d=f.$d,this.$L=f.$L,this.init();break}m===g&&(this.$d=new Date(""))}else o.call(this,e)}}}();var Od=de(zd.exports),Md={exports:{}};Md.exports=function(e,r,t){r.prototype.isBetween=function(e,r,n,o){var i=t(e),s=t(r),a="("===(o=o||"()")[0],l=")"===o[1];return(a?this.isAfter(i,n):!this.isBefore(i,n))&&(l?this.isBefore(s,n):!this.isAfter(s,n))||(a?this.isBefore(i,n):!this.isAfter(i,n))&&(l?this.isAfter(s,n):!this.isBefore(s,n))}};var _d=de(Md.exports),Rd={exports:{}};Rd.exports=function(e,r){r.prototype.isSameOrAfter=function(e,r){return this.isSame(e,r)||this.isAfter(e,r)}};var Hd=de(Rd.exports),jd={exports:{}};jd.exports=function(e,r){r.prototype.isSameOrBefore=function(e,r){return this.isSame(e,r)||this.isBefore(e,r)}};var Ld,Pd,Wd,Nd=de(jd.exports),Vd={exports:{}},Yd=de(Vd.exports=(Ld={year:0,month:1,day:2,hour:3,minute:4,second:5},Pd={},function(e,r,t){var n,o=function(e,r,t){void 0===t&&(t={});var n=new Date(e),o=function(e,r){void 0===r&&(r={});var t=r.timeZoneName||"short",n=e+"|"+t,o=Pd[n];return o||(o=new Intl.DateTimeFormat("en-US",{hour12:!1,timeZone:e,year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit",timeZoneName:t}),Pd[n]=o),o}(r,t);return o.formatToParts(n)},i=function(e,r){for(var n=o(e,r),i=[],s=0;s<n.length;s+=1){var a=n[s],l=a.type,d=a.value,c=Ld[l];c>=0&&(i[c]=parseInt(d,10))}var u=i[3],h=24===u?0:u,g=i[0]+"-"+i[1]+"-"+i[2]+" "+h+":"+i[4]+":"+i[5]+":000",m=+e;return(t.utc(g).valueOf()-(m-=m%1e3))/6e4},s=r.prototype;s.tz=function(e,r){void 0===e&&(e=n);var o=this.utcOffset(),i=this.toDate(),s=i.toLocaleString("en-US",{timeZone:e}),a=Math.round((i-new Date(s))/1e3/60),l=t(s,{locale:this.$L}).$set("millisecond",this.$ms).utcOffset(15*-Math.round(i.getTimezoneOffset()/15)-a,!0);if(r){var d=l.utcOffset();l=l.add(o-d,"minute")}return l.$x.$timezone=e,l},s.offsetName=function(e){var r=this.$x.$timezone||t.tz.guess(),n=o(this.valueOf(),r,{timeZoneName:e}).find((function(e){return"timezonename"===e.type.toLowerCase()}));return n&&n.value};var a=s.startOf;s.startOf=function(e,r){if(!this.$x||!this.$x.$timezone)return a.call(this,e,r);var n=t(this.format("YYYY-MM-DD HH:mm:ss:SSS"),{locale:this.$L});return a.call(n,e,r).tz(this.$x.$timezone,!0)},t.tz=function(e,r,o){var s=o&&r,a=o||r||n,l=i(+t(),a);if("string"!=typeof e)return t(e).tz(a);var d=function(e,r,t){var n=e-60*r*1e3,o=i(n,t);if(r===o)return[n,r];var s=i(n-=60*(o-r)*1e3,t);return o===s?[n,o]:[e-60*Math.min(o,s)*1e3,Math.max(o,s)]}(t.utc(e,s).valueOf(),l,a),c=d[0],u=d[1],h=t(c).utcOffset(u);return h.$x.$timezone=a,h},t.tz.guess=function(){return Intl.DateTimeFormat().resolvedOptions().timeZone},t.tz.setDefault=function(e){n=e}}));Ao.extend(_d),Ao.extend(Nd),Ao.extend(Hd),Ao.extend(Od),Ao.extend(Yd),function(e){e.generateDays=e=>{const r=e.startOf("month"),t=Ao(r).startOf("week");return Ud(t).map((e=>qd(e)))},e.generateDaysForCurrentWeek=e=>{const r=e.startOf("week");return qd(r)},e.generateMonths=e=>{const r=[];for(let t=0;t<12;t++){const n=e.month(t);r.push(Ao(n))}return r},e.generateDecadeOfYears=e=>{const r=e.year(),t=10*Math.floor(r/10),n=e.year(t),o=[n.subtract(1,"year"),n];for(let e=1;e<11;e++)o.push(n.add(e,"year"));return o},e.getStartEndDecade=e=>{const r=10*Math.floor(+e.format("YYYY")/10);return{beginDecade:r,endDecade:+Ao(`${r+9}-01-01`).format("YYYY")}},e.convertTo12HourFormat=e=>{const r=Ao(e,"HH:mm");return r.isValid()?r.format("h:mm a"):""},e.isWithinRange=(e,r,t,n="day")=>!r&&!t||(r&&t?e.isBetween(r,t,n,"[]"):r?e.isSameOrAfter(r,n):e.isSameOrBefore(t,n)),e.isPreviousMonthWithinRange=(r,t)=>e.isWithinRange(r.subtract(1,"month"),t,void 0,"month"),e.isPreviousYearWithinRange=(r,t)=>e.isWithinRange(r.subtract(1,"year"),t,void 0,"year"),e.isPreviousDecadeWithinRange=(r,t)=>{const{beginDecade:n}=e.getStartEndDecade(r);return e.isWithinRange(r.year(n).subtract(1,"year"),t,void 0,"year")},e.isNextMonthWithinRange=(r,t)=>e.isWithinRange(r.add(1,"month"),void 0,t,"month"),e.isNextYearWithinRange=(r,t)=>e.isWithinRange(r.add(1,"year"),void 0,t,"year"),e.isNextDecadeWithinRange=(r,t)=>{const{endDecade:n}=e.getStartEndDecade(r);return e.isWithinRange(r.year(n).add(1,"year"),void 0,t,"year")},e.getWeekStartEnd=e=>({start:e.startOf("week").format("YYYY-MM-DD"),end:e.endOf("week").format("YYYY-MM-DD")}),e.getFixedRangeStartEnd=(e,r)=>({start:e.format("YYYY-MM-DD"),end:e.add(r-1,"day").format("YYYY-MM-DD")}),e.isDisabledDay=(r,t,n,o)=>{const i=e.isWithinRange(r,n?Ao(n):void 0,o?Ao(o):void 0),s=t&&t.includes(r.format("YYYY-MM-DD"));return!i||!!s}}(Wd||(Wd={}));const Ud=e=>{const r=[e];for(let t=1;t<6;t++){const n=e.add(t,"week");r.push(n)}return r},qd=e=>{const r=[];for(let t=0;t<7;t++){const n=e.add(t,"day");r.push(n)}return r},Gd=[1,3,5,7,8,10,12],Zd=[4,6,9,11];var Qd,Xd;!function(e){e.clampDay=(r,t,n)=>{const o=parseInt(r),i=parseInt(t),s=parseInt(n);return 0==o?"1":Gd.includes(i)?Math.min(o,31).toString():Zd.includes(i)?Math.min(o,30).toString():2===i?e.isLeapYear(s)?Math.min(o,29).toString():Math.min(o,28).toString():r},e.clampMonth=e=>{const r=parseInt(e);return 0==r?"1":r>12?"12":e},e.isLeapYear=e=>e%4==0&&e%100!=0||e%400==0,e.getTimeDiffInMinutes=(e,r,t="HH:mm")=>{const n=Ao(e,t);return Ao(r,t).diff(n,"minute")},e.toDayjs=e=>e?Ao(e):Ao(),e.addMinutesToTime=(e,r,t="HH:mm")=>Ao(e,t).add(r,"minutes").format(t),e.isSame=(e,r,t="day")=>Ao(e).isSame(Ao(r),t)}(Qd||(Qd={})),function(e){e.isDateDisabled=(e,r)=>{const{disabledDates:t,minDate:n,maxDate:o}=r;return!!(e&&t&&t.length&&t.includes(e))||(!(!n||!Ao(e).isBefore(n,"day"))||!(!o||!Ao(e).isAfter(o,"day")))},e.sanitizeInput=e=>{if(e){if(Ao(e).isValid())return e}return""}}(Xd||(Xd={}));const Kd=()=>{const e=b.split(".");return parseInt(e[0],10)>=19},Jd=(...e)=>r=>{const t=[];for(const n of e)if("function"==typeof n){const e=n(r),o="function"==typeof e;t.push(o?e:()=>n(null))}else n.current=r,t.push((()=>{n.current=null}));if(Kd())return()=>{for(const e of t)e()}};var ec;function rc(e){const r=i(null);h((()=>{r.current=e}),[e]);return m(((...e)=>{var t;return null===(t=r.current)||void 0===t?void 0:t.call(r,...e)}),[])}!function(e){e.generate=()=>Math.random().toString(36).substring(2,9)}(ec||(ec={}));const tc=e=>{const r=(e=>{const r=i(e),t=i();return s((()=>{t.current=r.current,r.current=e}),[e]),t.current})(e);return r!==e};F.div`
    clip-path: inset(50%);
    height: 1px;
    width: 1px;
    overflow: hidden;
    position: absolute;
    white-space: nowrap;
`;const nc=e=>Kd()?e:e?"true":void 0,oc=e=>{const{textSize:r}=e||{};return $`
        // Text styling
        ${r&&Yn[`${r}-regular`]}

        strong {
            font-weight: ${Yn.Spec["weight-semibold"]};
            ${r&&Yn[`${r}-semibold`]};
        }

        p {
            margin: 0;
        }

        // Link styling
        a {
            font-weight: ${Yn.Spec["weight-semibold"]};
            ${r&&Yn[`${r}-semibold`]}
            color: ${Vn.hyperlink};
            text-decoration: underline;

            svg {
                color: ${Vn["icon-primary"]};
                height: 1lh;
                width: 1em;
                margin-left: 0.4rem;
                vertical-align: middle;
            }

            &:hover,
            &:active,
            &:visited,
            &:focus {
                color: ${Vn["hyperlink-hover"]};

                svg {
                    color: ${Vn["icon-hover"]};
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
    `},ic=e=>$`
    display: -webkit-box;
    -webkit-line-clamp: ${e};
    -webkit-box-orient: vertical;
    overflow: hidden;
`,sc=(e,r,t=!1)=>$`
        ${Yn[`${e}-${r}`]}
        ${t?"margin-bottom: 1.05em;":"margin-bottom: 0;"}
    `,ac=e=>{if(e)return $`
            ${ic(e)}
        `},lc=(e,r,t,n,o)=>$`
    ${sc(e,r||"regular",n)}
    ${((e=!1,r=!1,t)=>r?$`
            display: block;
            ${ac(t)}
        `:e?$`
            display: inline;
        `:$`
            display: block;
            ${ac(t)}
        `)(t,n,o)}
    color: ${Vn.text};
`,dc=F.div`
    ${e=>lc(e.$textStyle,e.$weight,e.$inline,e.$paragraph,e.$maxLines)}
`,cc=F.a`
    ${e=>{var r;return $`
        ${sc(e.$textStyle,e.$weight||"regular")}
        color: ${Vn.hyperlink};
        text-decoration: ${null!==(r=e.$underlineStyle)&&void 0!==r?r:"underline"};

        &:hover,
        &:active,
        &:focus {
            color: ${Vn["text-hover"]};
        }
    `}}
`,uc=F(_)`
    height: 1lh;
    width: 1em;
    margin-left: 0.4em;
    vertical-align: middle;
`;var hc;!function(t){const n=(e,t,n)=>{const i=(n,o)=>{var{weight:i,inline:s,paragraph:a,maxLines:l}=n,d=se(n,["weight","inline","paragraph","maxLines"]);return r(dc,Object.assign({ref:o,as:s?"span":e,$textStyle:t,$weight:i,$inline:s,$paragraph:a,$maxLines:l},d))};return i.displayName=`Typography.${n}`,o.forwardRef(i)};t.HeadingXXL=n("h1","heading-xxl","HeadingXXL"),t.HeadingXL=n("h2","heading-xl","HeadingXL"),t.HeadingLG=n("h3","heading-lg","HeadingLG"),t.HeadingMD=n("h4","heading-md","HeadingMD"),t.HeadingSM=n("h5","heading-sm","HeadingSM"),t.HeadingXS=n("h6","heading-xs","HeadingXS");const i=(e,t)=>{const n=(t,n)=>{var{weight:o,inline:i,paragraph:s,maxLines:a}=t,l=se(t,["weight","inline","paragraph","maxLines"]);return r(dc,Object.assign({ref:n,as:i?"span":"p",$textStyle:e,$weight:o,$inline:i,$paragraph:s,$maxLines:a},l))};return n.displayName=`Typography.${t}`,o.forwardRef(n)};t.BodyBL=i("body-baseline","BodyBL"),t.BodyMD=i("body-md","BodyMD"),t.BodySM=i("body-sm","BodySM"),t.BodyXS=i("body-xs","BodyXS");const s=(t,n)=>{const i=(n,o)=>{var{weight:i,children:s,external:a,underlineStyle:l="underline"}=n,d=se(n,["weight","children","external","underlineStyle"]);return e(cc,Object.assign({ref:o,$textStyle:t,$weight:i,$underlineStyle:l},d,{children:[s,a&&r(uc,{})]}))};return i.displayName=`Typography.${n}`,o.forwardRef(i)};t.LinkBL=s("body-baseline","LinkBL"),t.LinkMD=s("body-md","LinkMD"),t.LinkSM=s("body-sm","LinkSM"),t.LinkXS=s("body-xs","LinkXS")}(hc||(hc={}));const gc=F.div`
    padding: ${Gn["spacing-8"]} ${Gn["spacing-16"]};
    display: flex;

    ${e=>{let r,t;switch(e.$type){case"error":r=Vn["bg-error"](e),t=Vn["border-error"](e);break;case"success":r=Vn["bg-success"](e),t=Vn["border-success"](e);break;case"warning":default:r=Vn["bg-warning"](e),t=Vn["border-warning"](e);break;case"info":r=Vn["bg-info"](e),t=Vn["border-info"](e);break;case"description":r=Vn["bg-strong"](e),t=Vn["border-strong"](e)}return $`
            background: ${r};
            border-left: ${qn["width-020"]} ${qn.solid}
                ${t};
        `}}
`,mc=F.div`
    display: flex;
    align-items: center;
    height: 1lh;
    margin-right: ${Gn["spacing-8"]};

    ${e=>{let r;const t="small"===e.$sizeType?"1.25rem":"1.5rem";switch(e.$type){case"error":r=Vn["icon-error"](e);break;case"success":r=Vn["icon-success"](e);break;case"warning":default:r=Vn["icon-warning"](e);break;case"info":r=Vn["icon-info"](e);break;case"description":r=Vn["icon-subtle"](e)}return $`
            svg {
                color: ${r};
                width: ${t};
                height: ${t};
            }
        `}}
`,fc=F(hc.LinkSM)`
    ${e=>"small"===e.$sizeType?$`
                ${Yn["body-sm-semibold"]}
                margin-top: ${Gn["spacing-4"]};
            `:$`
                ${Yn["body-md-semibold"]}
                margin-top: ${Gn["spacing-8"]};
            `}
    display: flex;
    align-items: center;
    align-self: flex-start;

    svg {
        height: 1rem;
        width: 1rem;
        margin-left: ${Gn["spacing-4"]};
    }
`,pc=F.div`
    display: flex;
    flex-direction: column;
    flex: 1;
    overflow-wrap: anywhere;
`,bc=F.div`
    display: flex;
    flex-direction: column;
    flex: 1;
    order: 1;
    ${e=>{if(e.$showMore&&e.$hasActionLink)return $`
                margin-bottom: ${Gn["spacing-8"]};
            `}}
    ${e=>{const r="linear-gradient(to bottom, black 50%, transparent 100%)";if(!e.$showMore&&e.$maxCollapsedHeight)return`\n                max-height: ${e.$maxCollapsedHeight}px;\n\t\t\t\toverflow: hidden;\n                -webkit-mask-image: ${r};\n                mask-image: ${r};\n\t\t\t`}}
`,yc=F.div`
    color: ${Vn.text};

    ${e=>"small"===e.$sizeType?oc({textSize:"body-sm"}):oc({textSize:"body-md"})}
`,vc=F.button`
    ${e=>"small"===e.$sizeType?$`
                ${Yn["body-sm-semibold"]}
            `:$`
                ${Yn["body-md-semibold"]}
            `}

    display: flex;
    align-items: center;
    align-self: flex-start;
    gap: ${Gn["spacing-4"]};
    margin-top: ${Gn["spacing-8"]};
    order: 2;

    cursor: pointer;
    user-select: none;
    border: none;
    background: transparent;

    color: ${Vn["text-primary"]};
`,xc=F(w)`
    transform: rotate(${e=>e.$expanded?180:0}deg);
    transition: transform ${Un["duration-350"]} ${Un["ease-standard"]};
`,wc=F.div`
    height: 1.625rem;
    width: 1.625rem;
    margin-right: 0.5rem;
    flex-shrink: 0;

    svg {
        height: 100%;
        width: 100%;
    }

    ${e=>e.$disabled?e.$active?$`
                    color: ${Vn["icon-selected-disabled"]};
                `:$`
                    color: ${Vn["icon-disabled-subtle"]};
                `:e.$active?$`
                color: ${Vn["icon-selected"]};
            `:$`
            color: ${Vn["icon-subtle"]};
        `};
`,Fc=$`
    margin-bottom: ${e=>e.$bottomMargin||0}rem;

    // Counter matters
    counter-reset: list;

    li {
        font-weight: ${Yn.Spec["weight-regular"]};
        ${e=>e.$size&&Yn[`${e.$size}-regular`]}
        color: ${Vn.text};
    }

    // nested lists styling
    ol,
    ul {
        margin-top: 0.5rem;
        margin-bottom: 0.5rem;
    }
`,$c=F.ol`
    ${Fc}

    margin-left: 3rem;

    ${Xn.MaxWidth.lg} {
        margin-left: 2.5rem;
    }

    li {
        position: relative;
    }

    ${e=>{const{reversed:r}=e,t=e.$counterType||"decimal",n=e.$counterSeparator||")";return $`
            li:before {
                content: counter(list, ${t}) "${n}";
                counter-increment: ${r?"list -1":"list"};
                position: absolute;
                left: -2rem;
            }
        `}}

    ${e=>{const{reversed:r,start:t}=e;if(t){return $`
                counter-reset: list ${r?t+1:t-1};
            `}}}

    list-style-position: outside;
    list-style-type: none;

    ul > li:before {
        content: "";
    }
`,Cc=F.ul`
    ${Fc}

    margin-left: 2.5rem;
    list-style-type: ${e=>e.$bulletType||"disc"};
`,Ec=e=>{var{size:t,bulletType:n,bottomMargin:o,children:i}=e,s=se(e,["size","bulletType","bottomMargin","children"]);return r(Cc,Object.assign({$size:t,$bulletType:n,$bottomMargin:o},s,{children:i}))};Ec.displayName="TextList.Ul";const Sc=e=>{var{size:t,counterType:n,counterSeparator:o,bottomMargin:i,children:s}=e,a=se(e,["size","counterType","counterSeparator","bottomMargin","children"]);return r($c,Object.assign({$size:t,$counterType:n,$counterSeparator:o,$bottomMargin:i},a,{children:s}))};Sc.displayName="TextList.Ol";const kc=Ec,Dc=F.div`
    position: relative;
    display: inline-flex;
    min-width: 10.375rem;
    border-radius: ${Zn.sm};
    border-width: 1px;
    border-style: solid;
    overflow: hidden;
    flex-direction: column;
    height: fit-content;
    background: ${Vn.bg};

    &:has(input:focus-visible) {
        outline: 2px solid ${Vn["focus-ring"]};
        outline-offset: 0;
    }

    ${e=>{if(!e.$indicator)return $`
                justify-content: center;
            `}}

    // Container min width to fit content
    ${e=>{if(e.$useContentWidth)return $`
                min-width: unset;
            `}}

    // apply container border and header background color
    ${e=>"no-border"===e.$styleType?e.$error?e.$disabled?$`
                            border-color: ${Vn["border-error"]};
                        `:$`
                            border-color: ${Vn["border-error"]};

                            &:has(${Oc}:hover) {
                                @media (pointer: fine) {
                                    background: ${Vn["bg-hover-subtle"]};
                                }
                            }
                        `:e.$disabled?e.$selected?$`
                            border: none;
                            background: ${Vn["bg-selected-disabled"]};
                        `:$`
                            border: none;
                        `:e.$selected?$`
                        border: none;
                        background: ${Vn["bg-selected"]};

                        &:has(${Oc}:hover) {
                            @media (pointer: fine) {
                                background: ${Vn["bg-selected-hover"]};

                                & ${Ac} {
                                    color: ${Vn["text-selected-hover"]};
                                }

                                & ${Nc} {
                                    color: ${Vn["icon-selected-hover"]};
                                }
                            }
                        }
                    `:$`
                    border: none;

                    &:has(${Oc}:hover) {
                        @media (pointer: fine) {
                            background: ${Vn["bg-hover-subtle"]};
                        }
                    }
                `:e.$error?e.$disabled?$`
                            border-color: ${Vn["border-error"]};
                        `:$`
                            border-color: ${Vn["border-error"]};

                            &:has(${Oc}:hover) {
                                @media (pointer: fine) {
                                    background: ${Vn["bg-hover-subtle"]};
                                }
                            }
                        `:e.$disabled?e.$selected?$`
                            border-color: ${Vn["border-selected-disabled"]};
                            background: ${Vn["bg-selected-disabled"]};
                        `:$`
                            border-color: ${Vn["border-disabled"]};
                            background: ${Vn["bg-disabled"]};
                        `:e.$selected?$`
                        border-color: ${Vn["border-selected"]};
                        background: ${Vn["bg-selected"]};

                        &:has(${Oc}:hover) {
                            @media (pointer: fine) {
                                background: ${Vn["bg-selected-hover"]};

                                & ${Ac} {
                                    color: ${Vn["text-selected-hover"]};
                                }

                                & ${Nc} {
                                    color: ${Vn["icon-selected-hover"]};
                                }
                            }
                        }
                    `:$`
                    border-color: ${Vn.border};

                    &:has(${Oc}:hover) {
                        @media (pointer: fine) {
                            background: ${Vn["bg-hover-subtle"]};
                        }
                    }
                `}
`,Bc=F.input`
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
`,Ic=F.div`
    display: flex;
`,Ac=F.div`
    display: flex;
    flex-direction: column;
    overflow-wrap: anywhere;
    width: 100%;
    overflow: hidden;

    // apply header container text color
    ${e=>e.$disabled?e.$selected?$`
                    color: ${Vn["text-selected-disabled"]};
                `:$`
                    color: ${Vn["text-disabled"]};
                `:e.$selected?$`
                color: ${Vn["text-selected"]};
            `:$`
            color: ${Vn.text};
        `}
`,Tc=F.label`
    ${Yn["body-baseline-regular"]}
    overflow: hidden;
    display: -webkit-box;
    text-overflow: ellipsis;
    -webkit-box-orient: vertical;
    overflow-wrap: break-word;
    -webkit-line-clamp: ${e=>{var r,t;return null!==(t=null===(r=e.$maxLines)||void 0===r?void 0:r.desktop)&&void 0!==t?t:"none"}};
    ${Xn.MaxWidth.lg} {
        -webkit-line-clamp: ${e=>{var r,t;return null!==(t=null===(r=e.$maxLines)||void 0===r?void 0:r.tablet)&&void 0!==t?t:"none"}};
    }
    ${Xn.MaxWidth.sm} {
        -webkit-line-clamp: ${e=>{var r,t;return null!==(t=null===(r=e.$maxLines)||void 0===r?void 0:r.mobile)&&void 0!==t?t:"none"}};
    }
`,zc=F.div`
    ${Yn["body-md-regular"]}
    margin-top: 0.5rem;

    z-index: 1; // forces sublabel to render above the input
    pointer-events: none; // to allow click events to be passed to the input

    strong,
    b {
        ${Yn["body-md-semibold"]}
    }
`,Oc=F.div`
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
`,Mc=F.div`
    display: flex;
    height: 100%;
    width: 100%;
    position: relative;
    padding: ${e=>e.$addPadding?"0.6875rem 0rem 0.6875rem 1rem":"0.6875rem 1rem"};
`,_c=F.button`
    color: ${e=>e.$disabled?Vn["text-disabled"]:Vn["text-error"]};
    white-space: nowrap;
    ${Yn["body-md-semibold"]}
    height: fit-content;
    padding: 0.6875rem 1rem 0.6875rem 0.5rem;
    border: none;
    background: none;

    cursor: ${e=>e.$disabled?"not-allowed":"pointer"};
`,Rc=F.button`
    color: ${e=>e.disabled?Vn["text-disabled"]:Vn["text-primary"]};
    ${Yn["body-baseline-semibold"]}
    display: flex;
    align-items: center;
    justify-content: flex-end;
    border: none;
    background-color: ${Vn.bg};
    cursor: ${e=>e.disabled?"not-allowed":"pointer"};
    padding: 0 1rem 0.6875rem 1rem;
    padding-top: ${e=>e.$paddingTopRequired?"0.6875rem":"0rem"};
    width: 100%;

    svg {
        width: 1em;
        height: 1em;
        margin-left: 0.5rem;
    }
`,Hc=F.div`
    width: 100%;
    color: ${e=>e.$disabled?Vn["text-disabled"]:Vn["text-error"]};
    border: none;
    background: ${Vn.bg};
    cursor: ${e=>e.$disabled?"not-allowed":"pointer"};
    padding: 0.6875rem 1rem 0.5rem 1rem;
`,jc=F((t=>{var{type:n,className:o,children:i,actionLink:l,actionLinkIcon:d,sizeType:c="default",showIcon:u=!1,customIcon:h,maxCollapsedHeight:g,role:f}=t,p=se(t,["type","className","children","actionLink","actionLinkIcon","sizeType","showIcon","customIcon","maxCollapsedHeight","role"]);const[b,y]=a(!1),[v,x]=a(!1),{height:w,ref:F}=Ii(),[$]=a((()=>ec.generate())),C=m((()=>{y(!g),x(E())}),[g,w]),E=()=>!(!w||!g)&&w>g;s((()=>{C()}),[g,w,C]);return e(gc,{className:o,$type:n,$sizeType:c,"aria-label":`${(()=>{switch(n){case"success":return"Success";case"warning":return"Warning";case"error":return"Error";case"info":return"Information";case"description":return"Description";default:return"Alert"}})()}`,"data-testid":p["data-testid"],role:f,children:[u&&r(mc,{$sizeType:c,$type:n,children:(()=>{if(n&&h)return h;switch(n){case"success":return r(M,{"aria-hidden":!0});case"warning":return r(z,{"aria-hidden":!0});case"error":return r(T,{"aria-hidden":!0});case"info":case"description":return r(O,{"aria-hidden":!0});default:return null}})()}),e(pc,{children:[v&&e(vc,{$sizeType:c,$type:n,type:"button","aria-expanded":b,"aria-controls":$,onClick:()=>y(!b),children:["Show ",b?"less":"more",r(xc,{$expanded:b})]}),e(bc,{id:$,$maxCollapsedHeight:E()?g:void 0,$showMore:b,$hasActionLink:!!l,inert:nc(!!g&&!b),children:[r(yc,{ref:F,$type:n,$sizeType:c,children:i}),l?e(fc,Object.assign({"data-testid":"action-link",$type:n,$sizeType:c,underlineStyle:"none"},l,{children:[l.children,d||r(A,{})]})):null]})]})]})}))`
    width: 100%;
    user-select: none;
`,Lc=F.div`
    padding: 0 1rem;
    padding-top: 0.6875rem;
    padding-bottom: ${e=>e.$isFinalItem?"0.6875rem":"0.5rem"};
    background-color: ${Vn.bg};
    ${oc({textSize:"body-md"})}

    ${e=>e.$disabled?$`
                color: ${Vn["text-disabled"]};
            `:e.$selected?$`
                color: ${Vn["text-selected"]};
            `:$`
                color: ${Vn.text};
            `}
`,Pc=F(hc.BodyMD)`
    color: ${e=>e.$disabled?Vn["text-disabled"]:Vn["text-error"]};
`,Wc=F(kc)`
    color: ${e=>e.$disabled?Vn["text-disabled"]:Vn["text-error"]};
`,Nc=F((({type:e,active:t=!1,disabled:n,className:o})=>{let i;switch(e){case"checkbox":i=r(t?P:L,{});break;case"radio":i=r(t?H:R,{});break;case"tick":i=r(W,{});break;case"cross":i=r(j,{});break;default:i=null}return r(wc,{className:o,$active:t,$disabled:n,"aria-hidden":!0,children:i})}))`
    ${e=>e.$disabled?e.$selected?$`
                    color: ${Vn["icon-selected-disabled"]};
                `:$`
                    color: ${Vn["icon-disabled-subtle"]};
                `:e.$selected?$`
                color: ${Vn["icon-selected"]};
            `:$`
            color: ${Vn["icon-subtle"]};
        `};
`,Vc=F.button`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: ${Gn["spacing-24"]};
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

        ${({$highlight:e})=>e&&$`
                background-color: ${Vn["bg-hover-neutral"]};
            `}
    }
`,Yc=o.forwardRef(((e,t)=>{var{children:n,focusHighlight:o=!0,focusOutline:i="none",type:s="button"}=e,a=se(e,["children","focusHighlight","focusOutline","type"]);return r(Vc,Object.assign({ref:t,$outline:i,$highlight:o,type:s},a,{children:n}))})),Uc=id(F.div`
    position: absolute;
    top: calc(3rem + ${Gn["spacing-8"]});
    left: 0;
    overflow: hidden;
    z-index: 1;

    ${Xn.MaxWidth.xxs} {
        max-width: 100%;
    }
`),qc=F.div`
    position: relative;
    width: 100%;
    padding: ${Gn["spacing-8"]} ${Gn["spacing-20"]}
        ${Gn["spacing-24"]} ${Gn["spacing-20"]};
    display: flex;
    flex-direction: column;
    background: ${Vn.bg};
    border: ${qn["width-010"]} ${qn.solid} ${Vn.border};
    border-radius: ${Zn.sm};
`,Gc=F.div`
    display: flex;
    align-items: center;
    justify-content: space-between;

    ${Xn.MaxWidth.xxs} {
        flex-direction: column;
        width: 100%;
    }
`,Zc=F.div`
    display: flex;
    justify-content: flex-end;
    margin-top: ${Gn["spacing-16"]};
    gap: ${Gn["spacing-8"]} ${Gn["spacing-16"]};

    ${Xn.MaxWidth.xxs} {
        flex-direction: column-reverse; // FIXME: this breaks tab focus
        margin-top: ${Gn["spacing-32"]};
    }
`,Qc=F.div`
    display: flex;
    align-items: center;
    margin-right: ${Gn["spacing-32"]};

    ${Xn.MaxWidth.xxs} {
        margin-right: 0;
        width: 100%;
    }
`,Xc=F.div`
    display: flex;
    gap: ${Gn["spacing-8"]};

    ${Xn.MaxWidth.lg} {
        flex-direction: column;
    }

    ${Xn.MaxWidth.xxs} {
        flex-direction: row;
        width: 100%;
    }
`,Kc=F.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    ${Xn.MaxWidth.xxs} {
        width: 6rem;
    }
`,Jc=F(Yc)`
    width: 5rem;
    padding: ${Gn["spacing-16"]} 0;
    color: ${Vn.icon};

    svg {
        height: 1rem;
        width: 1rem;
    }

    &:hover {
        color: ${Vn["icon-hover"]};
    }
`,eu=F(hc.BodyBL)`
    flex-shrink: 0;
    width: 1.5rem;
    text-align: center;
`,ru=F(xo)`
    height: calc(3rem - 2px);
    width: 5rem;
    display: flex;
    align-items: center;
    justify-content: center;

    ${Xn.MaxWidth.xxs} {
        width: 100%;
    }
`,tu=F(Fo)`
    text-align: center;
    width: 100%;

    &:focus::placeholder {
        color: transparent;
    }
`,nu=F((n=>{var{type:o="checkbox",indicator:l,checked:d,styleType:c="default",children:u,childrenMaxLines:h,subLabel:g,disabled:m,error:p,name:b,id:y,className:v,compositeSection:x,removable:w,onRemove:F,"data-testid":$,onChange:C,useContentWidth:E,"aria-describedby":D}=n,B=se(n,["type","indicator","checked","styleType","children","childrenMaxLines","subLabel","disabled","error","name","id","className","compositeSection","removable","onRemove","data-testid","onChange","useContentWidth","aria-describedby"]);const{collapsible:I=!0,errors:A,children:T,initialExpanded:z}=x||{},[O,M]=a(d),[_,R]=a(!!z),H=f((()=>{const e=Array.isArray(A)&&(null==A?void 0:A.length)>0,r=!Array.isArray(A)&&!!A;return e||r}),[A]),[j]=a(ec.generate()),L=y?`${y}`:`tg-${j}`,P=i(null);s((()=>{M(d)}),[d]),s((()=>{O&&R(null==z||z)}),[O]);const W=e=>{if(!m){if(C)return void C(e);switch(o){case"checkbox":M((e=>!e));break;case"radio":case"yes":case"no":O||M(!0)}}},N=()=>{m||R(!_)},V=()=>{m||!F||F()},Y=()=>{var e;null===(e=null==P?void 0:P.current)||void 0===e||e.click()},U=e=>{e.stopPropagation()},q=()=>{let e;switch(o){case"yes":e="tick";break;case"no":e="cross";break;case"checkbox":case"radio":e=o}return r(Nc,{type:e,active:O,disabled:m,$selected:O,$disabled:m})},G=()=>{if(!g)return null;let e;return e="function"==typeof g?g():g,r(zc,{"data-id":"toggle-sublabel",id:`${L}-sublabel`,"aria-hidden":!0,children:e})},Z=n=>e(t,{children:[r(Pc,{weight:"semibold",$disabled:m,children:"Error"}),r(Wc,{$disabled:m,children:null==n?void 0:n.map(((e,t)=>r("li",{id:`${L}-error-list-item-${t}`,children:r(Pc,{weight:"semibold",$disabled:m,children:e})},t)))})]});return e(Dc,{$selected:O,$disabled:m,className:v,$styleType:c,$error:p,$indicator:l,$useContentWidth:E,id:y,"data-testid":$,children:[(()=>{const t=["string"==typeof g?`${L}-sublabel`:null,D].filter(Boolean).join(" ")||void 0;return e(Oc,{id:`${L}-header-container`,$disabled:m,$error:p,$selected:O,$indicator:l,$styleType:c,children:[r(Mc,{$addPadding:w,children:e(Ic,{id:`${L}-input-container`,onClick:Y,children:[r(Bc,Object.assign({ref:P,name:b,id:`${L}-input`,type:"checkbox"===o?"checkbox":"radio","data-testid":"toggle-input",disabled:m,onChange:W,onClick:U,checked:O,"aria-describedby":t},B)),l&&q(),e(Ac,{$selected:O,$disabled:m,children:[r(Tc,{htmlFor:`${L}-input`,"data-testid":"toggle-label",id:`${L}-label`,$maxLines:h,children:u}),g&&G()]})]})}),w&&r(_c,{type:"button",$disabled:m,onClick:V,id:`${L}-remove-button`,children:"Remove"})]})})(),T&&e("div",{children:[(!I||_)&&r(Lc,{"data-id":"toggle-composite-children",$isFinalItem:!I,$disabled:m,children:T}),I&&!_&&H&&r(Hc,{$disabled:m,onClick:N,id:`${L}-error-alert`,children:r(jc,{type:m?"description":"error",className:v,showIcon:!0,children:Array.isArray(A)?Z(A):A})}),I&&e(Rc,{$paddingTopRequired:!_&&!H,disabled:m,onClick:N,"data-testid":_?"collapse-button":"expand-button",children:[_?"Show less":"Show more",r(_?k:S,{"aria-hidden":!0})]})]})]})}))`
    min-width: 5rem;
    flex: 1;
`,ou=F(Td.Small)`
    width: 7rem;

    ${Xn.MaxWidth.sm} {
        flex: 1;
    }

    ${Xn.MaxWidth.xxs} {
        width: 100%;
    }
`;var iu,su,au;!function(e){e.HOUR_UP="hour-up",e.HOUR_DOWN="hour-down",e.MINUTE_UP="minute-up",e.MINUTE_DOWN="minute-down"}(iu||(iu={})),function(e){e.HOUR="hour",e.MINUTE="minute"}(su||(su={})),function(e){e.AM="am",e.PM="pm"}(au||(au={}));const lu=({id:t,value:n,show:o,format:l,onChange:d,onCancel:c})=>{var u;const h=Io.getTimeValues(l,n),[g,f]=a(h.hour),[p,b]=a(h.minute),[y,v]=a(h.period),x=i(null),w=i(null),F=Ii();s((()=>{if(o&&x.current&&x.current.focus(),o){const{hour:e,minute:r,period:t}=Io.getTimeValues(l,n);f(e),b(r),v(t)}}),[o,n,l]),s((()=>{const e=x.current,r=w.current;return e&&e.addEventListener("keydown",$),r&&r.addEventListener("keydown",$),()=>{e&&e.removeEventListener("keydown",$),r&&r.removeEventListener("keydown",$)}}),[]);const $=e=>{["Digit0","Digit1","Digit2","Digit3","Digit4","Digit5","Digit6","Digit7","Digit8","Digit9","Tab","Backspace","Delete","ArrowLeft","ArrowRight","ArrowUp","ArrowDown"].includes(e.code)||["Backspace","0","1","2","3","4","5","6","7","8","9"].includes(e.key)||e.preventDefault()},C=m((e=>{switch(e.currentTarget.name){case iu.MINUTE_UP:b(Io.updateMinutes(p,"add"));break;case iu.MINUTE_DOWN:b(Io.updateMinutes(p,"minus"));break;case iu.HOUR_UP:f(Io.updateHours(g,"add"));break;case iu.HOUR_DOWN:f(Io.updateHours(g,"minus"))}}),[g,p]),E=e=>{e.target.select()},D=e=>{const r=e.target.value;switch(e.target.name){case su.HOUR:r.length<=2&&f(r);break;case su.MINUTE:r.length<=2&&b(r)}},B=e=>{const r=parseInt(e.target.value);if(!isNaN(r))switch(e.target.name){case su.HOUR:{const t=r>23||r<0?h.hour:Io.convertHourTo12HourFormat(e.target.value);f(t);break}case su.MINUTE:{const t=r>59||r<0?h.minute:e.target.value;b(Do.padValue(t));break}}},I=e=>{switch(e.target.name){case au.AM:v(Bo.AM);break;case au.PM:v(Bo.PM)}},A=e=>t?`${t}-${e}`:e,T=Pl({opacity:o?1:0,height:o?(null!==(u=F.height)&&void 0!==u?u:0)+32+2:0});return r(Uc,{"data-testid":"animated-dropdown-wrapper",style:T,children:e(qc,{ref:F.ref,"data-testid":A("timepicker-dropdown"),inert:nc(!o),children:[e(Gc,{children:[e(Qc,{children:[e(Kc,{children:[r(Jc,{"aria-label":"increase hour",name:iu.HOUR_UP,tabIndex:-1,onClick:C,"data-testid":A("hour-increment-button"),children:r(k,{})}),r(ru,{children:r(tu,{"aria-label":"hour",type:"number",name:su.HOUR,id:"hour",maxLength:2,pattern:"[0-9]{2}",ref:x,value:g,onFocus:E,onChange:D,onBlur:B,min:1,max:12,placeholder:"HH","data-testid":A("hour-input")})}),r(Jc,{"aria-label":"decrease hour",name:iu.HOUR_DOWN,tabIndex:-1,onClick:C,"data-testid":A("hour-decrement-button"),children:r(S,{})})]}),r(eu,{children:":"}),e(Kc,{children:[r(Jc,{"aria-label":"increase minute",name:iu.MINUTE_UP,tabIndex:-1,onClick:C,"data-testid":A("minute-increment-button"),children:r(k,{})}),r(ru,{children:r(tu,{"aria-label":"minute",type:"number",name:su.MINUTE,id:"minute",maxLength:2,pattern:"[0-9]{2}",ref:w,value:p,onChange:D,onBlur:B,onFocus:E,min:0,max:59,placeholder:"MM","data-testid":A("minute-input")})}),r(Jc,{"aria-label":"decrease minute",name:iu.MINUTE_DOWN,tabIndex:-1,onClick:C,"data-testid":A("minute-decrement-button"),children:r(S,{})})]})]}),e(Xc,{children:[r(nu,{checked:y===Bo.AM,name:au.AM,type:"radio",onChange:I,"data-testid":A("am-toggle"),"aria-label":"AM",children:"AM"}),r(nu,{checked:y===Bo.PM,name:au.PM,type:"radio",onChange:I,"data-testid":A("pm-toggle"),"aria-label":"PM",children:"PM"})]})]}),e(Zc,{children:[r(ou,{"aria-label":"close selector",type:"button",styleType:"secondary",onClick:c,"data-testid":A("cancel-button"),children:"Cancel"}),r(ou,{"aria-label":"confirm selection",type:"button",onClick:()=>{let e;e="24hr"===l?Io.convertTo24HourFormat({hour:g,minute:p,period:y}):`${g}:${p}${y}`,d(e)},disabled:""===g||""===p,"data-testid":A("confirm-button"),children:"Done"})]})]})})},du=t=>{var{id:n,disabled:o=!1,error:l,value:d,format:c="24hr",readOnly:u,onChange:h,onFocus:g,onBlur:m}=t,f=se(t,["id","disabled","error","value","format","readOnly","onChange","onFocus","onBlur"]);const[p,b]=a(!1),[y,v]=a(!1),[x,w]=a(""),[F,$]=a(""),C=i(null);s((()=>{d&&(w(d.start),$(d.end))}),[d]),ae("mousedown",(function(e){o||D(e)}),"document"),ae("keyup",(function(e){if("Tab"===e.code)D(e)}),"document");const E=()=>{k()},S=()=>{p||y||null==g||g()},k=()=>{b(!1),v(!1),null==m||m()},D=e=>{C.current&&!C.current.contains(e.target)&&(y||p)&&k()};return r(Co,Object.assign({ref:C,id:n},f,{children:e(Eo,{$disabled:o,$error:l,$readOnly:u,children:[e(fo,{error:l,currentActive:p?"start":y?"end":"none",children:[r(So,{onFocus:()=>{o||u||p||(v(!1),b(!0),S())},readOnly:!0,placeholder:"From",value:Io.formatDisplayValue(x,c),disabled:o,"data-testid":f["data-testid"]?`${f["data-testid"]}-timepicker-selector`:"timepicker-selector"}),r(So,{onFocus:()=>{o||u||y||(b(!1),v(!0),S())},readOnly:!0,placeholder:"To",value:Io.formatDisplayValue(F,c),disabled:o,"data-testid":f["data-testid"]?`${f["data-testid"]}-timepicker-selector`:"timepicker-selector"})]}),r(lu,{id:n,show:p,value:x,format:c,onCancel:E,onChange:e=>{b(!1),v(!0),w(e);null==h||h({start:e,end:F})}}),r(lu,{id:n,show:y,value:F,format:c,onCancel:E,onChange:e=>{v(!1),$(e);null==h||h({start:x,end:e}),""==x?b(!0):null==m||m()}})]})}))};F.div`
    margin-bottom: ${Gn["spacing-8"]};
`,F.label`
    color: ${Vn["text-subtle"]};
    display: inline-block;

    ${Yn["form-label"]}
    ${oc()}
    font-weight: ${Yn.Spec["weight-semibold"]};
`;const cu=F(T)`
    height: 1lh;
    width: 1em;
    flex-shrink: 0;
    color: ${Vn["icon-error-strong"]};
`,uu=F.div`
    ${Yn["body-sm-semibold"]}
    display: flex;
    gap: ${Gn["spacing-4"]};
    margin-top: ${Gn["spacing-8"]};
`,hu=F.p`
    color: ${Vn["text-error"]};
    margin-bottom: 0;
    outline: none;
`;F.span`
    ${Yn["form-description"]}
    color: ${Vn["text-subtler"]};
    display: block;
`,F(Fo)`
    width: 100%;
    height: calc(3rem - 2px); // exclude top and bottom borders

    ${e=>"no-border"!==e.$styleType&&$`
            padding-left: ${e.$visuallyReadOnly?0:Gn["spacing-16"]};
            padding-right: ${e.$visuallyReadOnly||e.$showClear?0:Gn["spacing-16"]};
        `}
`;const gu=F($o)`
    height: auto;
    padding: ${Gn["spacing-12"]} ${Gn["spacing-16"]};

    cursor: pointer;
    color: ${Vn.icon};

    ${e=>"no-border"===e.$styleType&&$`
            margin-right: -${Gn["spacing-12"]};
        `}
`,mu=F(j)`
    height: 1.25rem;
    width: 1.25rem;
    vertical-align: middle;
`;F.div`
    display: flex;
    width: 100%;
`,F(xo)`
    display: flex;
    align-items: center;
    width: 100%;
`;const fu=e=>"small"===e?2.5:3;F.div`
    position: relative;
    width: 100%;
    ${e=>{const r=fu(e.$variant);return $`
            min-height: ${r}rem;
            height: ${r}rem; // Need this to persist the height when expanding or collapsing list
        `}}
`;const pu=$`
    display: flex;
    position: relative;
    align-items: center;
    justify-content: space-between;
    padding: 0 ${Gn["spacing-16"]};
    // exclude top and bottom borders
    height: calc(${e=>fu(e.$variant)}rem - 2px);
    width: 100%;
    border-radius: ${Zn.sm};
    border: none;
    background: transparent;

    &:focus,
    &:active {
        outline: none;
    }

    &:focus-visible {
        outline: 2px solid ${Vn["border-focus"]};
    }
`,bu=F.button`
    ${pu}
    cursor: pointer;
`;F.div`
    ${pu}
`;const yu=C`
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
    border: ${qn["width-010"]} ${qn.solid} ${Vn.border};
    border-radius: ${Zn.sm};
    background: ${Vn.bg};
    overflow: hidden;

    &:focus-within {
        border-color: ${Vn["border-focus"]};
        box-shadow: 0px 0px 4px 0px
            rgb(from ${Vn["border-focus"]} r g b / 50%) inset; // TODO: confirm shadow
    }

    ${e=>e.$expanded?$`
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                z-index: 2;
            `:$`
                animation: ${yu} 0.5s ease-in-out;
            `}

    ${e=>e.$disabled?$`
                background: ${Vn["bg-disabled"]};

                ${bu} {
                    cursor: not-allowed;
                }

                &:focus-within {
                    border-color: ${Vn.border};
                    box-shadow: none;
                }
            `:e.$readOnly?$`
                border: none;
                background: transparent !important;

                ${bu} {
                    padding: 0;
                }

                &:focus-within {
                    border: none;
                    box-shadow: none;
                }
            `:e.$error?$`
                border-color: ${Vn["border-error"]};

                &:focus-within {
                    border-color: ${Vn["border-error"]};
                    box-shadow: 0px 0px 4px 0px
                        rgb(from ${Vn["border-error"]} r g b / 50%) inset; // TODO: confirm shadow
                }
            `:void 0}
`,F.div`
    transform: rotate(${e=>e.$expanded?180:0}deg);
    transition: transform ${Un["duration-250"]} ${Un["ease-default"]};
    margin-left: ${Gn["spacing-16"]};
`,F(S)`
    color: ${Vn.icon};
`,F.div`
    height: 1px;
    background: ${Vn.border};
    margin: 0 ${Gn["spacing-8"]};
`,F.div`
    display: flex;
    flex: 1;
    word-break: break-all;
    ${e=>{if(e.$disabled)return $`
                color: ${Vn["text-disabled"]};
            `}}
`;F(F.div`
    ${e=>"small"===e.$variant?Yn["body-md-regular"]:Yn["body-baseline-regular"]}
    text-align: left;
    ${e=>{if("middle"!==e.$truncateType)return $`
                    ${ic(1)}
                `}}
    overflow: hidden;
`)`
    color: ${Vn["text-subtler"]};
`,F.div`
    display: flex;
    position: relative;
    align-items: center;
    justify-content: space-between;
`;const vu=F(gu)`
    position: absolute;
    right: 0;
    padding-left: ${Gn["spacing-8"]};
    margin-right: 0;
`;F(bu)`
    // space for clear icon
    padding-right: calc(1.25rem + ${Gn["spacing-16"]});
`;const xu=F.div`
    font-weight: ${e=>e.$bold?Yn.Spec["weight-semibold"]:Yn.Spec["weight-regular"]};

    ${e=>e.$disabled?$`
                color: ${Vn["text-disabled"]};
            `:e.$selected?$`
                color: ${Vn["text-selected"]};
            `:$`
                color: ${Vn.text};
            `}
    width: 100%;

    ${e=>"end"===e.$truncateType&&ic(e.$maxLines||2)}
    overflow-wrap: break-word;
`,wu=F.div`
    color: ${Vn["text-subtlest"]};
    width: 100%;

    ${e=>"end"===e.$truncateType&&ic(e.$maxLines||2)}
    overflow-wrap: break-word;

    ${e=>"next-line"===e.$labelDisplayType?$`
                    ${Yn["body-md-semibold"]}
                `:$`
                    ${Yn["body-baseline-regular"]}
                `}
`,Fu=F.span`
    font-weight: ${Yn.Spec["weight-semibold"]};
`,$u=F.div`
    text-align: left;
    width: 100%;
    overflow: hidden;
    overflow-wrap: break-word;

    ${e=>"small"===e.$variant?Yn["body-md-regular"]:Yn["body-baseline-regular"]}

    ${e=>{switch(e.$labelDisplayType){case"next-line":return $`
                    display: flex;
                    flex-direction: column;
                `;case"inline":return $`
                    ${xu} {
                        display: inline;
                    }

                    ${wu} {
                        display: inline;
                        margin-left: 0.5rem;
                    }
                `}}}
`,Cu=F.div`
    display: inline-block;
    width: ${e=>1===e.$maxLines?50:100}%;
    height: 1lh;
    word-break: break-all;
    overflow: hidden;
`,Eu=F.div`
    display: inline-block;
    width: ${e=>1===e.$maxLines?50:100}%;
    height: 1lh;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    direction: rtl;
    text-align: right;
`,Su=({bold:n,displayType:o="inline",label:i,searchTerm:s,maxLines:a=2,selected:l,disabled:d,sublabel:c,truncationType:u="middle",variant:h="default"})=>{const g=p(E),b="small"===h?Yn.Spec["body-size-md"]({theme:g}):Yn.Spec["body-size-baseline"]({theme:g}),y=Yn.Spec["font-family"]({theme:g}),{ref:v,width:x}=Ii(),w=m((e=>{if("inline"!==o||!x)return!1;return Do.getTextWidth(e,`${b} '${y}'`)>x*a-50}),[x,o,b,y,a]),F=f((()=>w(i)),[w,i]),$=f((()=>c&&w(c)),[w,c]),C=n=>{if(!s)return n;const o=s.toLowerCase().trim(),a=n.toLowerCase().indexOf(o),l=a+s.length;return-1===a?n:e(t,{children:[i.slice(0,a),r(Fu,{$variant:h,children:i.slice(a,l)}),i.slice(l)]})},S=n=>e(t,{children:[r(Cu,{$maxLines:a,"aria-hidden":!0,children:C(n)}),r(Eu,{$maxLines:a,"aria-hidden":!0,children:C(n)})]});return e($u,{ref:v,$labelDisplayType:F||$?"next-line":o,$variant:h,children:[r(xu,{"aria-label":i,$bold:n,$maxLines:a,$selected:l,$disabled:d,$truncateType:u,children:"middle"===u&&F?S(i):C(i)}),c&&r(wu,{"aria-label":c,$maxLines:a,$truncateType:u,$labelDisplayType:o,children:"middle"===u&&$?S(c):c})]})};var ku=Vr;var Du=function(e){var r=this.__data__,t=r.delete(e);return this.size=r.size,t};var Bu=function(e){return this.__data__.get(e)};var Iu=function(e){return this.__data__.has(e)},Au=Vr,Tu=Yr,zu=ut;var Ou=function(e,r){var t=this.__data__;if(t instanceof Au){var n=t.__data__;if(!Tu||n.length<199)return n.push([e,r]),this.size=++t.size,this;t=this.__data__=new zu(n)}return t.set(e,r),this.size=t.size,this},Mu=Vr,_u=function(){this.__data__=new ku,this.size=0},Ru=Du,Hu=Bu,ju=Iu,Lu=Ou;function Pu(e){var r=this.__data__=new Mu(e);this.size=r.size}Pu.prototype.clear=_u,Pu.prototype.delete=Ru,Pu.prototype.get=Hu,Pu.prototype.has=ju,Pu.prototype.set=Lu;var Wu=Pu;var Nu=ut,Vu=function(e){return this.__data__.set(e,"__lodash_hash_undefined__"),this},Yu=function(e){return this.__data__.has(e)};function Uu(e){var r=-1,t=null==e?0:e.length;for(this.__data__=new Nu;++r<t;)this.add(e[r])}Uu.prototype.add=Uu.prototype.push=Vu,Uu.prototype.has=Yu;var qu=function(e,r){return e.has(r)},Gu=Uu,Zu=function(e,r){for(var t=-1,n=null==e?0:e.length;++t<n;)if(r(e[t],t,e))return!0;return!1},Qu=qu;var Xu=function(e,r,t,n,o,i){var s=1&t,a=e.length,l=r.length;if(a!=l&&!(s&&l>a))return!1;var d=i.get(e),c=i.get(r);if(d&&c)return d==r&&c==e;var u=-1,h=!0,g=2&t?new Gu:void 0;for(i.set(e,r),i.set(r,e);++u<a;){var m=e[u],f=r[u];if(n)var p=s?n(f,m,u,r,e,i):n(m,f,u,e,r,i);if(void 0!==p){if(p)continue;h=!1;break}if(g){if(!Zu(r,(function(e,r){if(!Qu(g,r)&&(m===e||o(m,e,t,n,i)))return g.push(r)}))){h=!1;break}}else if(m!==f&&!o(m,f,t,n,i)){h=!1;break}}return i.delete(e),i.delete(r),h};var Ku=function(e){var r=-1,t=Array(e.size);return e.forEach((function(e,n){t[++r]=[n,e]})),t};var Ju=me.Uint8Array,eh=Sr,rh=Xu,th=Ku,nh=function(e){var r=-1,t=Array(e.size);return e.forEach((function(e){t[++r]=e})),t},oh=fe?fe.prototype:void 0,ih=oh?oh.valueOf:void 0;var sh=function(e,r,t,n,o,i,s){switch(t){case"[object DataView]":if(e.byteLength!=r.byteLength||e.byteOffset!=r.byteOffset)return!1;e=e.buffer,r=r.buffer;case"[object ArrayBuffer]":return!(e.byteLength!=r.byteLength||!i(new Ju(e),new Ju(r)));case"[object Boolean]":case"[object Date]":case"[object Number]":return eh(+e,+r);case"[object Error]":return e.name==r.name&&e.message==r.message;case"[object RegExp]":case"[object String]":return e==r+"";case"[object Map]":var a=th;case"[object Set]":var l=1&n;if(a||(a=nh),e.size!=r.size&&!l)return!1;var d=s.get(e);if(d)return d==r;n|=2,s.set(e,r);var c=rh(a(e),a(r),n,o,i,s);return s.delete(e),c;case"[object Symbol]":if(ih)return ih.call(e)==ih.call(r)}return!1};var ah=function(e,r){for(var t=-1,n=r.length,o=e.length;++t<n;)e[o+t]=r[t];return e},lh=ah,dh=ce;var ch=function(e,r,t){var n=r(e);return dh(e)?n:lh(n,t(e))};var uh=function(e,r){for(var t=-1,n=null==e?0:e.length,o=0,i=[];++t<n;){var s=e[t];r(s,t,e)&&(i[o++]=s)}return i},hh=function(){return[]},gh=Object.prototype.propertyIsEnumerable,mh=Object.getOwnPropertySymbols,fh=mh?function(e){return null==e?[]:(e=Object(e),uh(mh(e),(function(r){return gh.call(e,r)})))}:hh;var ph=function(e,r){for(var t=-1,n=Array(e);++t<e;)n[t]=r(t);return n},bh=Se,yh=ke;var vh=function(e){return yh(e)&&"[object Arguments]"==bh(e)},xh=ke,wh=Object.prototype,Fh=wh.hasOwnProperty,$h=wh.propertyIsEnumerable,Ch=vh(function(){return arguments}())?vh:function(e){return xh(e)&&Fh.call(e,"callee")&&!$h.call(e,"callee")},Eh={exports:{}};var Sh=function(){return!1};!function(e,r){var t=me,n=Sh,o=r&&!r.nodeType&&r,i=o&&e&&!e.nodeType&&e,s=i&&i.exports===o?t.Buffer:void 0,a=(s?s.isBuffer:void 0)||n;e.exports=a}(Eh,Eh.exports);var kh=Eh.exports,Dh=/^(?:0|[1-9]\d*)$/;var Bh=function(e,r){var t=typeof e;return!!(r=null==r?9007199254740991:r)&&("number"==t||"symbol"!=t&&Dh.test(e))&&e>-1&&e%1==0&&e<r};var Ih=function(e){return"number"==typeof e&&e>-1&&e%1==0&&e<=9007199254740991},Ah=Se,Th=Ih,zh=ke,Oh={};Oh["[object Float32Array]"]=Oh["[object Float64Array]"]=Oh["[object Int8Array]"]=Oh["[object Int16Array]"]=Oh["[object Int32Array]"]=Oh["[object Uint8Array]"]=Oh["[object Uint8ClampedArray]"]=Oh["[object Uint16Array]"]=Oh["[object Uint32Array]"]=!0,Oh["[object Arguments]"]=Oh["[object Array]"]=Oh["[object ArrayBuffer]"]=Oh["[object Boolean]"]=Oh["[object DataView]"]=Oh["[object Date]"]=Oh["[object Error]"]=Oh["[object Function]"]=Oh["[object Map]"]=Oh["[object Number]"]=Oh["[object Object]"]=Oh["[object RegExp]"]=Oh["[object Set]"]=Oh["[object String]"]=Oh["[object WeakMap]"]=!1;var Mh=function(e){return zh(e)&&Th(e.length)&&!!Oh[Ah(e)]};var _h=function(e){return function(r){return e(r)}},Rh={exports:{}};!function(e,r){var t=ue,n=r&&!r.nodeType&&r,o=n&&e&&!e.nodeType&&e,i=o&&o.exports===n&&t.process,s=function(){try{var e=o&&o.require&&o.require("util").types;return e||i&&i.binding&&i.binding("util")}catch(e){}}();e.exports=s}(Rh,Rh.exports);var Hh=Rh.exports,jh=Mh,Lh=_h,Ph=Hh&&Hh.isTypedArray,Wh=Ph?Lh(Ph):jh,Nh=ph,Vh=Ch,Yh=ce,Uh=kh,qh=Bh,Gh=Wh,Zh=Object.prototype.hasOwnProperty;var Qh=function(e,r){var t=Yh(e),n=!t&&Vh(e),o=!t&&!n&&Uh(e),i=!t&&!n&&!o&&Gh(e),s=t||n||o||i,a=s?Nh(e.length,String):[],l=a.length;for(var d in e)!r&&!Zh.call(e,d)||s&&("length"==d||o&&("offset"==d||"parent"==d)||i&&("buffer"==d||"byteLength"==d||"byteOffset"==d)||qh(d,l))||a.push(d);return a},Xh=Object.prototype;var Kh=function(e){var r=e&&e.constructor;return e===("function"==typeof r&&r.prototype||Xh)};var Jh=function(e,r){return function(t){return e(r(t))}}(Object.keys,Object),eg=Kh,rg=Jh,tg=Object.prototype.hasOwnProperty;var ng=function(e){if(!eg(e))return rg(e);var r=[];for(var t in Object(e))tg.call(e,t)&&"constructor"!=t&&r.push(t);return r},og=Le,ig=Ih;var sg=function(e){return null!=e&&ig(e.length)&&!og(e)},ag=Qh,lg=ng,dg=sg;var cg=function(e){return dg(e)?ag(e):lg(e)},ug=ch,hg=fh,gg=cg;var mg=function(e){return ug(e,gg,hg)},fg=Object.prototype.hasOwnProperty;var pg=function(e,r,t,n,o,i){var s=1&t,a=mg(e),l=a.length;if(l!=mg(r).length&&!s)return!1;for(var d=l;d--;){var c=a[d];if(!(s?c in r:fg.call(r,c)))return!1}var u=i.get(e),h=i.get(r);if(u&&h)return u==r&&h==e;var g=!0;i.set(e,r),i.set(r,e);for(var m=s;++d<l;){var f=e[c=a[d]],p=r[c];if(n)var b=s?n(p,f,c,r,e,i):n(f,p,c,e,r,i);if(!(void 0===b?f===p||o(f,p,t,n,i):b)){g=!1;break}m||(m="constructor"==c)}if(g&&!m){var y=e.constructor,v=r.constructor;y==v||!("constructor"in e)||!("constructor"in r)||"function"==typeof y&&y instanceof y&&"function"==typeof v&&v instanceof v||(g=!1)}return i.delete(e),i.delete(r),g},bg=ir(me,"DataView"),yg=Yr,vg=ir(me,"Promise"),xg=ir(me,"Set"),wg=ir(me,"WeakMap"),Fg=Se,$g=Ye,Cg="[object Map]",Eg="[object Promise]",Sg="[object Set]",kg="[object WeakMap]",Dg="[object DataView]",Bg=$g(bg),Ig=$g(yg),Ag=$g(vg),Tg=$g(xg),zg=$g(wg),Og=Fg;(bg&&Og(new bg(new ArrayBuffer(1)))!=Dg||yg&&Og(new yg)!=Cg||vg&&Og(vg.resolve())!=Eg||xg&&Og(new xg)!=Sg||wg&&Og(new wg)!=kg)&&(Og=function(e){var r=Fg(e),t="[object Object]"==r?e.constructor:void 0,n=t?$g(t):"";if(n)switch(n){case Bg:return Dg;case Ig:return Cg;case Ag:return Eg;case Tg:return Sg;case zg:return kg}return r});var Mg=Wu,_g=Xu,Rg=sh,Hg=pg,jg=Og,Lg=ce,Pg=kh,Wg=Wh,Ng="[object Arguments]",Vg="[object Array]",Yg="[object Object]",Ug=Object.prototype.hasOwnProperty;var qg=function(e,r,t,n,o,i){var s=Lg(e),a=Lg(r),l=s?Vg:jg(e),d=a?Vg:jg(r),c=(l=l==Ng?Yg:l)==Yg,u=(d=d==Ng?Yg:d)==Yg,h=l==d;if(h&&Pg(e)){if(!Pg(r))return!1;s=!0,c=!1}if(h&&!c)return i||(i=new Mg),s||Wg(e)?_g(e,r,t,n,o,i):Rg(e,r,l,t,n,o,i);if(!(1&t)){var g=c&&Ug.call(e,"__wrapped__"),m=u&&Ug.call(r,"__wrapped__");if(g||m){var f=g?e.value():e,p=m?r.value():r;return i||(i=new Mg),o(f,p,t,n,i)}}return!!h&&(i||(i=new Mg),Hg(e,r,t,n,o,i))},Gg=ke;var Zg=function e(r,t,n,o,i){return r===t||(null==r||null==t||!Gg(r)&&!Gg(t)?r!=r&&t!=t:qg(r,t,n,o,e,i))},Qg=Wu,Xg=Zg;var Kg=function(e,r,t,n){var o=t.length,i=o,s=!n;if(null==e)return!i;for(e=Object(e);o--;){var a=t[o];if(s&&a[2]?a[1]!==e[a[0]]:!(a[0]in e))return!1}for(;++o<i;){var l=(a=t[o])[0],d=e[l],c=a[1];if(s&&a[2]){if(void 0===d&&!(l in e))return!1}else{var u=new Qg;if(n)var h=n(d,c,l,e,r,u);if(!(void 0===h?Xg(c,d,3,n,u):h))return!1}}return!0},Jg=_e;var em=function(e){return e==e&&!Jg(e)},rm=em,tm=cg;var nm=function(e){for(var r=tm(e),t=r.length;t--;){var n=r[t],o=e[n];r[t]=[n,o,rm(o)]}return r};var om=function(e,r){return function(t){return null!=t&&(t[e]===r&&(void 0!==r||e in Object(t)))}},im=Kg,sm=nm,am=om;var lm=function(e,r){return null!=e&&r in Object(e)},dm=It,cm=Ch,um=ce,hm=Bh,gm=Ih,mm=Tt;var fm=function(e,r,t){for(var n=-1,o=(r=dm(r,e)).length,i=!1;++n<o;){var s=mm(r[n]);if(!(i=null!=e&&t(e,s)))break;e=e[s]}return i||++n!=o?i:!!(o=null==e?0:e.length)&&gm(o)&&hm(s,o)&&(um(e)||cm(e))},pm=lm,bm=fm;var ym=Zg,vm=Rt,xm=function(e,r){return null!=e&&bm(e,r,pm)},wm=Me,Fm=em,$m=om,Cm=Tt;var Em=function(e){return function(r){return null==r?void 0:r[e]}},Sm=Mt;var km=Em,Dm=function(e){return function(r){return Sm(r,e)}},Bm=Me,Im=Tt;var Am=function(e){var r=sm(e);return 1==r.length&&r[0][2]?am(r[0][0],r[0][1]):function(t){return t===e||im(t,e,r)}},Tm=function(e,r){return wm(e)&&Fm(r)?$m(Cm(e),r):function(t){var n=vm(t,e);return void 0===n&&n===r?xm(t,e):ym(r,n,3)}},zm=function(e){return e},Om=ce,Mm=function(e){return Bm(e)?km(Im(e)):Dm(e)};var _m=function(e){return"function"==typeof e?e:null==e?zm:"object"==typeof e?Om(e)?Tm(e[0],e[1]):Am(e):Mm(e)},Rm=_m,Hm=sg,jm=cg;var Lm=function(e){return function(r,t,n){var o=Object(r);if(!Hm(r)){var i=Rm(t);r=jm(r),t=function(e){return i(o[e],e,o)}}var s=e(r,t,n);return s>-1?o[i?r[s]:s]:void 0}};var Pm=/\s/;var Wm=function(e){for(var r=e.length;r--&&Pm.test(e.charAt(r)););return r},Nm=/^\s+/;var Vm=function(e){return e?e.slice(0,Wm(e)+1).replace(Nm,""):e},Ym=_e,Um=Ie,qm=/^[-+]0x[0-9a-f]+$/i,Gm=/^0b[01]+$/i,Zm=/^0o[0-7]+$/i,Qm=parseInt;var Xm=function(e){if("number"==typeof e)return e;if(Um(e))return NaN;if(Ym(e)){var r="function"==typeof e.valueOf?e.valueOf():e;e=Ym(r)?r+"":r}if("string"!=typeof e)return 0===e?e:+e;e=Vm(e);var t=Gm.test(e);return t||Zm.test(e)?Qm(e.slice(2),t?2:8):qm.test(e)?NaN:+e},Km=1/0;var Jm=function(e){return e?(e=Xm(e))===Km||e===-1/0?17976931348623157e292*(e<0?-1:1):e==e?e:0:0===e?e:0};var ef=function(e,r,t,n){for(var o=e.length,i=t+(n?1:-1);n?i--:++i<o;)if(r(e[i],i,e))return i;return-1},rf=_m,tf=function(e){var r=Jm(e),t=r%1;return r==r?t?r-t:r:0},nf=Math.max;var of=de(Lm((function(e,r,t){var n=null==e?0:e.length;if(!n)return-1;var o=null==t?0:tf(t);return o<0&&(o=nf(n+o,0)),ef(e,rf(r),o)}))),sf=Zg;var af=de((function(e,r){return sf(e,r)}));function lf(e){return()=>e}function df(e){e()}function cf(e,r){return t=>e(r(t))}function uf(e,r){return()=>e(r)}function hf(e,r){return t=>e(r,t)}function gf(e){return void 0!==e}function mf(){}function ff(e,r){return r(e),e}function pf(e,r){return r(e)}function bf(...e){return e}function yf(e,r){return e(1,r)}function vf(e,r){e(0,r)}function xf(e){e(2)}function wf(e){return e(4)}function Ff(e,r){return yf(e,hf(r,0))}function $f(e,r){const t=e(1,(e=>{t(),r(e)}));return t}function Cf(e){let r,t;return n=>o=>{r=o,t&&clearTimeout(t),t=setTimeout((()=>{n(r)}),e)}}function Ef(e,r){return e===r}function Sf(e=Ef){let r;return t=>n=>{e(r,n)||(r=n,t(n))}}function kf(e){return r=>t=>{e(t)&&r(t)}}function Df(e){return r=>cf(r,e)}function Bf(e){return r=>()=>{r(e)}}function If(e,...r){const t=function(...e){return r=>e.reduceRight(pf,r)}(...r);return(r,n)=>{switch(r){case 2:return void xf(e);case 1:return yf(e,t(n))}}}function Af(e,r){return t=>n=>{t(r=e(r,n))}}function Tf(e){return r=>t=>{e>0?e--:r(t)}}function zf(e){let r,t=null;return n=>o=>{t=o,!r&&(r=setTimeout((()=>{r=void 0,n(t)}),e))}}function Of(...e){const r=new Array(e.length);let t=0,n=null;const o=Math.pow(2,e.length)-1;return e.forEach(((e,i)=>{const s=Math.pow(2,i);yf(e,(e=>{const a=t;t|=s,r[i]=e,a!==o&&t===o&&n&&(n(),n=null)}))})),e=>i=>{const s=()=>{e([i].concat(r))};t===o?s():n=s}}function Mf(e){let r=e;const t=Rf();return(e,n)=>{switch(e){case 0:r=n;break;case 1:n(r);break;case 4:return r}return t(e,n)}}function _f(e,r){return ff(Mf(r),(r=>Ff(e,r)))}function Rf(){const e=[];return(r,t)=>{switch(r){case 0:return void e.slice().forEach((e=>{e(t)}));case 2:return void e.splice(0,e.length);case 1:return e.push(t),()=>{const r=e.indexOf(t);r>-1&&e.splice(r,1)}}}}function Hf(e){return ff(Rf(),(r=>Ff(e,r)))}function jf(e,r=[],{singleton:t}={singleton:!0}){return{constructor:e,dependencies:r,id:Lf(),singleton:t}}const Lf=()=>Symbol();function Pf(...e){const r=Rf(),t=new Array(e.length);let n=0;const o=Math.pow(2,e.length)-1;return e.forEach(((e,i)=>{const s=Math.pow(2,i);yf(e,(e=>{t[i]=e,n|=s,n===o&&vf(r,t)}))})),function(e,i){switch(e){case 2:return void xf(r);case 1:return n===o&&i(t),yf(r,i)}}}function Wf(e,r=Ef){return If(e,Sf(r))}function Nf(...e){return function(r,t){switch(r){case 2:return;case 1:return function(...e){return()=>{e.map(df)}}(...e.map((e=>yf(e,t))))}}}var Vf=(e=>(e[e.DEBUG=0]="DEBUG",e[e.INFO=1]="INFO",e[e.WARN=2]="WARN",e[e.ERROR=3]="ERROR",e))(Vf||{});const Yf={0:"debug",3:"error",1:"log",2:"warn"},Uf=jf((()=>{const e=Mf(3);return{log:Mf(((r,t,n=1)=>{var o;n>=(null!=(o=(typeof globalThis>"u"?window:globalThis).VIRTUOSO_LOG_LEVEL)?o:wf(e))&&console[Yf[n]]("%creact-virtuoso: %c%s %o","color: #0253b3; font-weight: bold","color: initial",r,t)})),logLevel:e}}),[],{singleton:!0});function qf(e,r,t){return Gf(e,r,t).callbackRef}function Gf(e,r,t){const n=o.useRef(null);let i=e=>{};if(typeof ResizeObserver<"u"){const s=o.useMemo((()=>new ResizeObserver((r=>{const n=()=>{const t=r[0].target;null!==t.offsetParent&&e(t)};t?n():requestAnimationFrame(n)}))),[e]);i=e=>{e&&r?(s.observe(e),n.current=e):(n.current&&s.unobserve(n.current),n.current=null)}}return{callbackRef:i,ref:n}}function Zf(e,r,t,n,i,s,a,l,d){const c=o.useCallback((t=>{const o=function(e,r,t,n){const o=e.length;if(0===o)return null;const i=[];for(let s=0;s<o;s++){const o=e.item(s);if(void 0===o.dataset.index)continue;const a=parseInt(o.dataset.index),l=parseFloat(o.dataset.knownSize),d=r(o,t);if(0===d&&n("Zero-sized element, this should not happen",{child:o},Vf.ERROR),d===l)continue;const c=i[i.length-1];0===i.length||c.size!==d||c.endIndex!==a-1?i.push({endIndex:a,size:d,startIndex:a}):i[i.length-1].endIndex++}return i}(t.children,r,l?"offsetWidth":"offsetHeight",i);let d=t.parentElement;for(;!d.dataset.virtuosoScroller;)d=d.parentElement;const c="window"===d.lastElementChild.dataset.viewportType,u=a?l?a.scrollLeft:a.scrollTop:c?l?window.pageXOffset||document.documentElement.scrollLeft:window.pageYOffset||document.documentElement.scrollTop:l?d.scrollLeft:d.scrollTop,h=a?l?a.scrollWidth:a.scrollHeight:c?l?document.documentElement.scrollWidth:document.documentElement.scrollHeight:l?d.scrollWidth:d.scrollHeight,g=a?l?a.offsetWidth:a.offsetHeight:c?l?window.innerWidth:window.innerHeight:l?d.offsetWidth:d.offsetHeight;n({scrollHeight:h,scrollTop:Math.max(u,0),viewportHeight:g}),null==s||s(l?Qf("column-gap",getComputedStyle(t).columnGap,i):Qf("row-gap",getComputedStyle(t).rowGap,i)),null!==o&&e(o)}),[e,r,i,s,a,n]);return Gf(c,t,d)}function Qf(e,r,t){return"normal"!==r&&!(null!=r&&r.endsWith("px"))&&t(`${e} was not resolved to pixel value correctly`,r,Vf.WARN),"normal"===r?0:parseInt(null!=r?r:"0",10)}function Xf(e,r,t){const n=o.useRef(null),i=o.useCallback((t=>{if(null==t||!t.offsetParent)return;const o=t.getBoundingClientRect(),i=o.width;let s,a;if(r){const e=r.getBoundingClientRect(),t=o.top-e.top;a=e.height-Math.max(0,t),s=t+r.scrollTop}else a=window.innerHeight-Math.max(0,o.top),s=o.top+window.pageYOffset;n.current={offsetTop:s,visibleHeight:a,visibleWidth:i},e(n.current)}),[e,r]),{callbackRef:s,ref:a}=Gf(i,!0,t),l=o.useCallback((()=>{i(a.current)}),[i,a]);return o.useEffect((()=>{if(r){r.addEventListener("scroll",l);const e=new ResizeObserver((()=>{requestAnimationFrame(l)}));return e.observe(r),()=>{r.removeEventListener("scroll",l),e.unobserve(r)}}return window.addEventListener("scroll",l),window.addEventListener("resize",l),()=>{window.removeEventListener("scroll",l),window.removeEventListener("resize",l)}}),[l,r]),s}const Kf=jf((()=>{const e=Rf(),r=Rf(),t=Mf(0),n=Rf(),o=Mf(0),i=Rf(),s=Rf(),a=Mf(0),l=Mf(0),d=Mf(0),c=Mf(0),u=Rf(),h=Rf(),g=Mf(!1),m=Mf(!1),f=Mf(!1);return Ff(If(e,Df((({scrollTop:e})=>e))),r),Ff(If(e,Df((({scrollHeight:e})=>e))),s),Ff(r,o),{deviation:t,fixedFooterHeight:d,fixedHeaderHeight:l,footerHeight:c,headerHeight:a,horizontalDirection:m,scrollBy:h,scrollContainerState:e,scrollHeight:s,scrollingInProgress:g,scrollTo:u,scrollTop:r,skipAnimationFrameInResizeObserver:f,smoothScrollTargetReached:n,statefulScrollTop:o,viewportHeight:i}}),[],{singleton:!0}),Jf={lvl:0};function ep(e,r){const t=e.length;if(0===t)return[];let{index:n,value:o}=r(e[0]);const i=[];for(let s=1;s<t;s++){const{index:t,value:a}=r(e[s]);i.push({end:t-1,start:n,value:o}),n=t,o=a}return i.push({end:1/0,start:n,value:o}),i}function rp(e){return e===Jf}function tp(e,r){if(!rp(e))return r===e.k?e.v:r<e.k?tp(e.l,r):tp(e.r,r)}function np(e,r,t="k"){if(rp(e))return[-1/0,void 0];if(Number(e[t])===r)return[e.k,e.v];if(Number(e[t])<r){const n=np(e.r,r,t);return n[0]===-1/0?[e.k,e.v]:n}return np(e.l,r,t)}function op(e,r,t){return rp(e)?fp(r,t,1):r===e.k?up(e,{k:r,v:t}):r<e.k?pp(up(e,{l:op(e.l,r,t)})):pp(up(e,{r:op(e.r,r,t)}))}function ip(){return Jf}function sp(e,r,t){if(rp(e))return[];return function(e){return ep(e,(({k:e,v:r})=>({index:e,value:r})))}(dp(e,np(e,r)[0],t))}function ap(e,r){if(rp(e))return Jf;const{k:t,l:n,r:o}=e;if(r===t){if(rp(n))return o;if(rp(o))return n;{const[r,t]=mp(n);return cp(up(e,{k:r,l:hp(n),v:t}))}}return cp(up(e,r<t?{l:ap(n,r)}:{r:ap(o,r)}))}function lp(e){return rp(e)?[]:[...lp(e.l),{k:e.k,v:e.v},...lp(e.r)]}function dp(e,r,t){if(rp(e))return[];const{k:n,l:o,r:i,v:s}=e;let a=[];return n>r&&(a=a.concat(dp(o,r,t))),n>=r&&n<=t&&a.push({k:n,v:s}),n<=t&&(a=a.concat(dp(i,r,t))),a}function cp(e){const{l:r,lvl:t,r:n}=e;if(n.lvl>=t-1&&r.lvl>=t-1)return e;if(t>n.lvl+1){if(gp(r))return bp(up(e,{lvl:t-1}));if(!rp(r)&&!rp(r.r))return up(r.r,{l:up(r,{r:r.r.l}),lvl:t,r:up(e,{l:r.r.r,lvl:t-1})});throw new Error("Unexpected empty nodes")}if(gp(e))return yp(up(e,{lvl:t-1}));if(rp(n)||rp(n.l))throw new Error("Unexpected empty nodes");{const r=n.l,o=gp(r)?n.lvl-1:n.lvl;return up(r,{l:up(e,{lvl:t-1,r:r.l}),lvl:r.lvl+1,r:yp(up(n,{l:r.r,lvl:o}))})}}function up(e,r){return fp(void 0!==r.k?r.k:e.k,void 0!==r.v?r.v:e.v,void 0!==r.lvl?r.lvl:e.lvl,void 0!==r.l?r.l:e.l,void 0!==r.r?r.r:e.r)}function hp(e){return rp(e.r)?e.l:cp(up(e,{r:hp(e.r)}))}function gp(e){return rp(e)||e.lvl>e.r.lvl}function mp(e){return rp(e.r)?[e.k,e.v]:mp(e.r)}function fp(e,r,t,n=Jf,o=Jf){return{k:e,l:n,lvl:t,r:o,v:r}}function pp(e){return yp(bp(e))}function bp(e){const{l:r}=e;return rp(r)||r.lvl!==e.lvl?e:up(r,{r:up(e,{l:r.r})})}function yp(e){const{lvl:r,r:t}=e;return rp(t)||rp(t.r)||t.lvl!==r||t.r.lvl!==r?e:up(t,{l:up(e,{r:t.l}),lvl:r+1})}function vp(e,r){return!(!e||e.startIndex!==r.startIndex||e.endIndex!==r.endIndex)}function xp(e,r){return!(!e||e[0]!==r[0]||e[1]!==r[1])}const wp=jf((()=>({recalcInProgress:Mf(!1)})),[],{singleton:!0});function Fp(e,r,t){return e[$p(e,r,t)]}function $p(e,r,t,n=0){let o=e.length-1;for(;n<=o;){const i=Math.floor((n+o)/2),s=t(e[i],r);if(0===s)return i;if(-1===s){if(o-n<2)return i-1;o=i-1}else{if(o===n)return i;n=i+1}}throw new Error(`Failed binary finding record in array - ${e.join(",")}, searched for ${r}`)}function Cp(e,r){return Math.round(e.getBoundingClientRect()[r])}function Ep(e){return!rp(e.groupOffsetTree)}function Sp({index:e},r){return r===e?0:r<e?-1:1}function kp({offset:e},r){return r===e?0:r<e?-1:1}function Dp(e,r,t){if(0===r.length)return 0;const{index:n,offset:o,size:i}=Fp(r,e,Sp),s=e-n,a=i*s+(s-1)*t+o;return a>0?a+t:a}function Bp(e,r){if(!Ep(r))return e;let t=0;for(;r.groupIndices[t]<=e+t;)t++;return e+t}function Ip(e,r,t){if(function(e){return typeof e.groupIndex<"u"}(e))return r.groupIndices[e.groupIndex]+1;{let n=Bp("LAST"===e.index?t:e.index,r);return n=Math.max(0,n,Math.min(t,n)),n}}function Ap(e,r,t,n=0){return n>0&&(r=Math.max(r,Fp(e,n,Sp).offset)),ep(function(e,r,t,n){const o=$p(e,r,n),i=$p(e,t,n,o);return e.slice(o,i+1)}(e,r,t,kp),Mp)}function Tp(e,[r,t,n,o]){r.length>0&&n("received item sizes",r,Vf.DEBUG);const i=e.sizeTree;let s=i,a=0;if(t.length>0&&rp(i)&&2===r.length){const e=r[0].size,n=r[1].size;s=t.reduce(((r,t)=>op(op(r,t,e),t+1,n)),s)}else[s,a]=function(e,r){let t=rp(e)?0:1/0;for(const n of r){const{endIndex:r,size:o,startIndex:i}=n;if(t=Math.min(t,i),rp(e)){e=op(e,0,o);continue}const s=sp(e,i-1,r+1);if(s.some(_p(n)))continue;let a=!1,l=!1;for(const{end:t,start:n,value:i}of s)a?(r>=n||o===i)&&(e=ap(e,n)):(l=i!==o,a=!0),t>r&&r>=n&&i!==o&&(e=op(e,r+1,i));l&&(e=op(e,i,o))}return[e,t]}(s,r);if(s===i)return e;const{lastIndex:l,lastOffset:d,lastSize:c,offsetTree:u}=Op(e.offsetTree,a,s,o);return{groupIndices:t,groupOffsetTree:t.reduce(((e,r)=>op(e,r,Dp(r,u,o))),ip()),lastIndex:l,lastOffset:d,lastSize:c,offsetTree:u,sizeTree:s}}function zp(e,r){let t=0,n=0;for(;t<e;)t+=r[n+1]-r[n]-1,n++;return n-(t===e?0:1)}function Op(e,r,t,n){let o=e,i=0,s=0,a=0,l=0;if(0!==r){l=$p(o,r-1,Sp),a=o[l].offset;const e=np(t,r-1);i=e[0],s=e[1],o.length&&o[l].size===np(t,r)[1]&&(l-=1),o=o.slice(0,l+1)}else o=[];for(const{start:e,value:l}of sp(t,r,1/0)){const r=e-i,t=r*s+a+r*n;o.push({index:e,offset:t,size:l}),i=e,a=t,s=l}return{lastIndex:i,lastOffset:a,lastSize:s,offsetTree:o}}function Mp(e){return{index:e.index,value:e}}function _p(e){const{endIndex:r,size:t,startIndex:n}=e;return e=>e.start===n&&(e.end===r||e.end===1/0)&&e.value===t}const Rp={offsetHeight:"height",offsetWidth:"width"},Hp=jf((([{log:e},{recalcInProgress:r}])=>{const t=Rf(),n=Rf(),o=_f(n,0),i=Rf(),s=Rf(),a=Mf(0),l=Mf([]),d=Mf(void 0),c=Mf(void 0),u=Mf(((e,r)=>Cp(e,Rp[r]))),h=Mf(void 0),g=Mf(0),m={groupIndices:[],groupOffsetTree:ip(),lastIndex:0,lastOffset:0,lastSize:0,offsetTree:[],sizeTree:ip()},f=_f(If(t,Of(l,e,g),Af(Tp,m),Sf()),m),p=_f(If(l,Sf(),Af(((e,r)=>({current:r,prev:e.current})),{current:[],prev:[]}),Df((({prev:e})=>e))),[]);Ff(If(l,kf((e=>e.length>0)),Of(f,g),Df((([e,r,t])=>{const n=e.reduce(((e,n,o)=>op(e,n,Dp(n,r.offsetTree,t)||o)),ip());return{...r,groupIndices:e,groupOffsetTree:n}}))),f),Ff(If(n,Of(f),kf((([e,{lastIndex:r}])=>e<r)),Df((([e,{lastIndex:r,lastSize:t}])=>[{endIndex:r,size:t,startIndex:e}]))),t),Ff(d,c);const b=_f(If(d,Df((e=>void 0===e))),!0);Ff(If(c,kf((e=>void 0!==e&&rp(wf(f).sizeTree))),Df((e=>[{endIndex:0,size:e,startIndex:0}]))),t);const y=Hf(If(t,Of(f),Af((({sizes:e},[r,t])=>({changed:t!==e,sizes:t})),{changed:!1,sizes:m}),Df((e=>e.changed))));yf(If(a,Af(((e,r)=>({diff:e.prev-r,prev:r})),{diff:0,prev:0}),Df((e=>e.diff))),(e=>{const{groupIndices:t}=wf(f);if(e>0)vf(r,!0),vf(i,e+zp(e,t));else if(e<0){const r=wf(p);r.length>0&&(e-=zp(-e,r)),vf(s,e)}})),yf(If(a,Of(e)),(([e,r])=>{e<0&&r("`firstItemIndex` prop should not be set to less than zero. If you don't know the total count, just use a very high value",{firstItemIndex:a},Vf.ERROR)}));const v=Hf(i);Ff(If(i,Of(f),Df((([e,r])=>{const t=r.groupIndices.length>0,n=[],o=r.lastSize;if(t){const t=tp(r.sizeTree,0);let i=0,s=0;for(;i<e;){const e=r.groupIndices[s],a=r.groupIndices.length===s+1?1/0:r.groupIndices[s+1]-e-1;n.push({endIndex:e,size:t,startIndex:e}),n.push({endIndex:e+1+a-1,size:o,startIndex:e+1}),s++,i+=a+1}const a=lp(r.sizeTree);return i!==e&&a.shift(),a.reduce(((r,{k:t,v:n})=>{let o=r.ranges;return 0!==r.prevSize&&(o=[...r.ranges,{endIndex:t+e-1,size:r.prevSize,startIndex:r.prevIndex}]),{prevIndex:t+e,prevSize:n,ranges:o}}),{prevIndex:e,prevSize:0,ranges:n}).ranges}return lp(r.sizeTree).reduce(((r,{k:t,v:n})=>({prevIndex:t+e,prevSize:n,ranges:[...r.ranges,{endIndex:t+e-1,size:r.prevSize,startIndex:r.prevIndex}]})),{prevIndex:0,prevSize:o,ranges:[]}).ranges}))),t);const x=Hf(If(s,Of(f,g),Df((([e,{offsetTree:r},t])=>Dp(-e,r,t)))));return Ff(If(s,Of(f,g),Df((([e,r,t])=>{if(r.groupIndices.length>0){if(rp(r.sizeTree))return r;let n=ip();const o=wf(p);let i=0,s=0,a=0;for(;i<-e;){a=o[s];const e=o[s+1]-a-1;s++,i+=e+1}if(n=lp(r.sizeTree).reduce(((r,{k:t,v:n})=>op(r,Math.max(0,t+e),n)),n),i!==-e){n=op(n,0,tp(r.sizeTree,a));n=op(n,1,np(r.sizeTree,1-e)[1])}return{...r,sizeTree:n,...Op(r.offsetTree,0,n,t)}}{const n=lp(r.sizeTree).reduce(((r,{k:t,v:n})=>op(r,Math.max(0,t+e),n)),ip());return{...r,sizeTree:n,...Op(r.offsetTree,0,n,t)}}}))),f),{beforeUnshiftWith:v,data:h,defaultItemSize:c,firstItemIndex:a,fixedItemSize:d,gap:g,groupIndices:l,itemSize:u,listRefresh:y,shiftWith:s,shiftWithOffset:x,sizeRanges:t,sizes:f,statefulTotalCount:o,totalCount:n,trackItemSizes:b,unshiftWith:i}}),bf(Uf,wp),{singleton:!0});function jp(e){return e.reduce(((e,r)=>(e.groupIndices.push(e.totalCount),e.totalCount+=r+1,e)),{groupIndices:[],totalCount:0})}const Lp=jf((([{groupIndices:e,sizes:r,totalCount:t},{headerHeight:n,scrollTop:o}])=>{const i=Rf(),s=Rf(),a=Hf(If(i,Df(jp)));return Ff(If(a,Df((e=>e.totalCount))),t),Ff(If(a,Df((e=>e.groupIndices))),e),Ff(If(Pf(o,r,n),kf((([e,r])=>Ep(r))),Df((([e,r,t])=>np(r.groupOffsetTree,Math.max(e-t,0),"v")[0])),Sf(),Df((e=>[e]))),s),{groupCounts:i,topItemsIndexes:s}}),bf(Hp,Kf)),Pp=jf((([{log:e}])=>{const r=Mf(!1),t=Hf(If(r,kf((e=>e)),Sf()));return yf(r,(r=>{r&&wf(e)("props updated",{},Vf.DEBUG)})),{didMount:t,propsReady:r}}),bf(Uf),{singleton:!0}),Wp=typeof document<"u"&&"scrollBehavior"in document.documentElement.style;function Np(e){const r="number"==typeof e?{index:e}:e;return r.align||(r.align="start"),(!r.behavior||!Wp)&&(r.behavior="auto"),r.offset||(r.offset=0),r}const Vp=jf((([{gap:e,listRefresh:r,sizes:t,totalCount:n},{fixedFooterHeight:o,fixedHeaderHeight:i,footerHeight:s,headerHeight:a,scrollingInProgress:l,scrollTo:d,smoothScrollTargetReached:c,viewportHeight:u},{log:h}])=>{const g=Rf(),m=Rf(),f=Mf(0);let p=null,b=null,y=null;function v(){p&&(p(),p=null),y&&(y(),y=null),b&&(clearTimeout(b),b=null),vf(l,!1)}return Ff(If(g,Of(t,u,n,f,a,s,h),Of(e,i,o),Df((([[e,t,n,o,i,s,a,d],u,h,f])=>{const x=Np(e),{align:w,behavior:F,offset:$}=x,C=o-1,E=Ip(x,t,C);let S=Dp(E,t.offsetTree,u)+s;"end"===w?(S+=h+np(t.sizeTree,E)[1]-n+f,E===C&&(S+=a)):"center"===w?S+=(h+np(t.sizeTree,E)[1]-n+f)/2:S-=i,$&&(S+=$);const k=r=>{v(),r?(d("retrying to scroll to",{location:e},Vf.DEBUG),vf(g,e)):(vf(m,!0),d("list did not change, scroll successful",{},Vf.DEBUG))};if(v(),"smooth"===F){let e=!1;y=yf(r,(r=>{e=e||r})),p=$f(c,(()=>{k(e)}))}else p=$f(If(r,function(e){return r=>{const t=setTimeout((()=>{r(!1)}),e);return e=>{e&&(r(!0),clearTimeout(t))}}}(150)),k);return b=setTimeout((()=>{v()}),1200),vf(l,!0),d("scrolling from index to",{behavior:F,index:E,top:S},Vf.DEBUG),{behavior:F,top:S}}))),d),{scrollTargetReached:m,scrollToIndex:g,topListHeight:f}}),bf(Hp,Kf,Uf),{singleton:!0});function Yp(e,r){0==e?r():requestAnimationFrame((()=>{Yp(e-1,r)}))}function Up(e,r){const t=r-1;return"number"==typeof e?e:"LAST"===e.index?t:e.index}const qp=jf((([{defaultItemSize:e,listRefresh:r,sizes:t},{scrollTop:n},{scrollTargetReached:o,scrollToIndex:i},{didMount:s}])=>{const a=Mf(!0),l=Mf(0),d=Mf(!0);return Ff(If(s,Of(l),kf((([e,r])=>!!r)),Bf(!1)),a),Ff(If(s,Of(l),kf((([e,r])=>!!r)),Bf(!1)),d),yf(If(Pf(r,s),Of(a,t,e,d),kf((([[,e],r,{sizeTree:t},n,o])=>e&&(!rp(t)||gf(n))&&!r&&!o)),Of(l)),(([,e])=>{$f(o,(()=>{vf(d,!0)})),Yp(4,(()=>{$f(n,(()=>{vf(a,!0)})),vf(i,e)}))})),{initialItemFinalLocationReached:d,initialTopMostItemIndex:l,scrolledToInitialItem:a}}),bf(Hp,Kf,Vp,Pp),{singleton:!0});function Gp(e,r){return Math.abs(e-r)<1.01}const Zp="up",Qp="down",Xp={atBottom:!1,notAtBottomBecause:"NOT_SHOWING_LAST_ITEM",state:{offsetBottom:0,scrollHeight:0,scrollTop:0,viewportHeight:0}},Kp=jf((([{footerHeight:e,headerHeight:r,scrollBy:t,scrollContainerState:n,scrollTop:o,viewportHeight:i}])=>{const s=Mf(!1),a=Mf(!0),l=Rf(),d=Rf(),c=Mf(4),u=Mf(0),h=_f(If(Nf(If(Wf(o),Tf(1),Bf(!0)),If(Wf(o),Tf(1),Bf(!1),Cf(100))),Sf()),!1),g=_f(If(Nf(If(t,Bf(!0)),If(t,Bf(!1),Cf(200))),Sf()),!1);Ff(If(Pf(Wf(o),Wf(u)),Df((([e,r])=>e<=r)),Sf()),a),Ff(If(a,zf(50)),d);const m=Hf(If(Pf(n,Wf(i),Wf(r),Wf(e),Wf(c)),Af(((e,[{scrollHeight:r,scrollTop:t},n,o,i,s])=>{const a={scrollHeight:r,scrollTop:t,viewportHeight:n};if(t+n-r>-s){let r,n;return t>e.state.scrollTop?(r="SCROLLED_DOWN",n=e.state.scrollTop-t):(r="SIZE_DECREASED",n=e.state.scrollTop-t||e.scrollTopDelta),{atBottom:!0,atBottomBecause:r,scrollTopDelta:n,state:a}}let l;return l=a.scrollHeight>e.state.scrollHeight?"SIZE_INCREASED":n<e.state.viewportHeight?"VIEWPORT_HEIGHT_DECREASING":t<e.state.scrollTop?"SCROLLING_UPWARDS":"NOT_FULLY_SCROLLED_TO_LAST_ITEM_BOTTOM",{atBottom:!1,notAtBottomBecause:l,state:a}}),Xp),Sf(((e,r)=>e&&e.atBottom===r.atBottom)))),f=_f(If(n,Af(((e,{scrollHeight:r,scrollTop:t,viewportHeight:n})=>{if(Gp(e.scrollHeight,r))return{changed:!1,jump:0,scrollHeight:r,scrollTop:t};{const o=r-(t+n)<1;return e.scrollTop!==t&&o?{changed:!0,jump:e.scrollTop-t,scrollHeight:r,scrollTop:t}:{changed:!0,jump:0,scrollHeight:r,scrollTop:t}}}),{changed:!1,jump:0,scrollHeight:0,scrollTop:0}),kf((e=>e.changed)),Df((e=>e.jump))),0);Ff(If(m,Df((e=>e.atBottom))),s),Ff(If(s,zf(50)),l);const p=Mf(Qp);Ff(If(n,Df((({scrollTop:e})=>e)),Sf(),Af(((e,r)=>wf(g)?{direction:e.direction,prevScrollTop:r}:{direction:r<e.prevScrollTop?Zp:Qp,prevScrollTop:r}),{direction:Qp,prevScrollTop:0}),Df((e=>e.direction))),p),Ff(If(n,zf(50),Bf("none")),p);const b=Mf(0);return Ff(If(h,kf((e=>!e)),Bf(0)),b),Ff(If(o,zf(100),Of(h),kf((([e,r])=>!!r)),Af((([e,r],[t])=>[r,t]),[0,0]),Df((([e,r])=>r-e))),b),{atBottomState:m,atBottomStateChange:l,atBottomThreshold:c,atTopStateChange:d,atTopThreshold:u,isAtBottom:s,isAtTop:a,isScrolling:h,lastJumpDueToItemResize:f,scrollDirection:p,scrollVelocity:b}}),bf(Kf)),Jp="top",eb="bottom",rb="none";function tb(e,r,t){return"number"==typeof e?t===Zp&&r===Jp||t===Qp&&r===eb?e:0:t===Zp?r===Jp?e.main:e.reverse:r===eb?e.main:e.reverse}function nb(e,r){var t;return"number"==typeof e?e:null!=(t=e[r])?t:0}const ob=jf((([{deviation:e,fixedHeaderHeight:r,headerHeight:t,scrollTop:n,viewportHeight:o}])=>{const i=Rf(),s=Mf(0),a=Mf(0),l=Mf(0);return{increaseViewportBy:a,listBoundary:i,overscan:l,topListHeight:s,visibleRange:_f(If(Pf(Wf(n),Wf(o),Wf(t),Wf(i,xp),Wf(l),Wf(s),Wf(r),Wf(e),Wf(a)),Df((([e,r,t,[n,o],i,s,a,l,d])=>{const c=e-l,u=s+a,h=Math.max(t-c,0);let g=rb;const m=nb(d,Jp),f=nb(d,eb);return n-=l,o+=t+a,(n+=t+a)>e+u-m&&(g=Zp),(o-=l)<e-h+r+f&&(g=Qp),g!==rb?[Math.max(c-t-tb(i,Jp,g)-m,0),c-h-a+r+tb(i,eb,g)+f]:null})),kf((e=>null!=e)),Sf(xp)),[0,0])}}),bf(Kf),{singleton:!0});const ib={bottom:0,firstItemIndex:0,items:[],offsetBottom:0,offsetTop:0,top:0,topItems:[],topListHeight:0,totalCount:0};function sb(e,r,t,n,o,i){const{lastIndex:s,lastOffset:a,lastSize:l}=o;let d=0,c=0;if(e.length>0){d=e[0].offset;const r=e[e.length-1];c=r.offset+r.size}const u=t-s,h=d,g=a+u*l+(u-1)*n-c;return{bottom:c,firstItemIndex:i,items:lb(e,o,i),offsetBottom:g,offsetTop:d,top:h,topItems:lb(r,o,i),topListHeight:r.reduce(((e,r)=>r.size+e),0),totalCount:t}}function ab(e,r,t,n,o,i){let s=0;if(t.groupIndices.length>0)for(const r of t.groupIndices){if(r-s>=e)break;s++}const a=e+s,l=Up(r,a);return sb(Array.from({length:a}).map(((e,r)=>({data:i[r+l],index:r+l,offset:0,size:0}))),[],a,o,t,n)}function lb(e,r,t){if(0===e.length)return[];if(!Ep(r))return e.map((e=>({...e,index:e.index+t,originalIndex:e.index})));const n=e[0].index,o=e[e.length-1].index,i=[],s=sp(r.groupOffsetTree,n,o);let a,l=0;for(const n of e){let e;(!a||a.end<n.index)&&(a=s.shift(),l=r.groupIndices.indexOf(a.start)),e=n.index===a.start?{index:l,type:"group"}:{groupIndex:l,index:n.index-(l+1)+t},i.push({...e,data:n.data,offset:n.offset,originalIndex:n.index,size:n.size})}return i}const db=jf((([{data:e,firstItemIndex:r,gap:t,sizes:n,totalCount:o},i,{listBoundary:s,topListHeight:a,visibleRange:l},{initialTopMostItemIndex:d,scrolledToInitialItem:c},{topListHeight:u},h,{didMount:g},{recalcInProgress:m}])=>{const f=Mf([]),p=Mf(0),b=Rf();Ff(i.topItemsIndexes,f);const y=_f(If(Pf(g,m,Wf(l,xp),Wf(o),Wf(n),Wf(d),c,Wf(f),Wf(r),Wf(t),e),kf((([e,r,,t,,,,,,,n])=>{const o=n&&n.length!==t;return e&&!r&&!o})),Df((([,,[e,r],t,n,o,i,s,a,l,d])=>{const c=n,{offsetTree:u,sizeTree:h}=c,g=wf(p);if(0===t)return{...ib,totalCount:t};if(0===e&&0===r)return 0===g?{...ib,totalCount:t}:ab(g,o,n,a,l,d||[]);if(rp(h))return g>0?null:sb(function(e,r,t){if(Ep(r)){const n=Bp(e,r);return[{index:np(r.groupOffsetTree,n)[0],offset:0,size:0},{data:null==t?void 0:t[0],index:n,offset:0,size:0}]}return[{data:null==t?void 0:t[0],index:e,offset:0,size:0}]}(Up(o,t),c,d),[],t,l,c,a);const m=[];if(s.length>0){const e=s[0],r=s[s.length-1];let t=0;for(const n of sp(h,e,r)){const o=n.value,i=Math.max(n.start,e),s=Math.min(n.end,r);for(let e=i;e<=s;e++)m.push({data:null==d?void 0:d[e],index:e,offset:t,size:o}),t+=o}}if(!i)return sb([],m,t,l,c,a);const f=s.length>0?s[s.length-1]+1:0,b=Ap(u,e,r,f);if(0===b.length)return null;const y=t-1;return sb(ff([],(t=>{for(const n of b){const o=n.value;let i=o.offset,s=n.start;const a=o.size;if(o.offset<e){s+=Math.floor((e-o.offset+l)/(a+l));const r=s-n.start;i+=r*a+r*l}s<f&&(i+=(f-s)*a,s=f);const c=Math.min(n.end,y);for(let e=s;e<=c&&!(i>=r);e++)t.push({data:null==d?void 0:d[e],index:e,offset:i,size:a}),i+=a+l}})),m,t,l,c,a)})),kf((e=>null!==e)),Sf()),ib);Ff(If(e,kf(gf),Df((e=>null==e?void 0:e.length))),o),Ff(If(y,Df((e=>e.topListHeight))),u),Ff(u,a),Ff(If(y,Df((e=>[e.top,e.bottom]))),s),Ff(If(y,Df((e=>e.items))),b);const v=Hf(If(y,kf((({items:e})=>e.length>0)),Of(o,e),kf((([{items:e},r])=>e[e.length-1].originalIndex===r-1)),Df((([,e,r])=>[e-1,r])),Sf(xp),Df((([e])=>e)))),x=Hf(If(y,zf(200),kf((({items:e,topItems:r})=>e.length>0&&e[0].originalIndex===r.length)),Df((({items:e})=>e[0].index)),Sf())),w=Hf(If(y,kf((({items:e})=>e.length>0)),Df((({items:e})=>{let r=0,t=e.length-1;for(;"group"===e[r].type&&r<t;)r++;for(;"group"===e[t].type&&t>r;)t--;return{endIndex:e[t].index,startIndex:e[r].index}})),Sf(vp)));return{endReached:v,initialItemCount:p,itemsRendered:b,listState:y,rangeChanged:w,startReached:x,topItemsIndexes:f,...h}}),bf(Hp,Lp,ob,qp,Vp,Kp,Pp,wp),{singleton:!0}),cb=jf((([{fixedFooterHeight:e,fixedHeaderHeight:r,footerHeight:t,headerHeight:n},{listState:o}])=>{const i=Rf(),s=_f(If(Pf(t,e,n,r,o),Df((([e,r,t,n,o])=>e+r+t+n+o.offsetBottom+o.bottom))),0);return Ff(Wf(s),i),{totalListHeight:s,totalListHeightChanged:i}}),bf(Kf,db),{singleton:!0}),ub=jf((([{viewportHeight:e},{totalListHeight:r}])=>{const t=Mf(!1);return{alignToBottom:t,paddingTopAddition:_f(If(Pf(t,e,r),kf((([e])=>e)),Df((([,e,r])=>Math.max(0,e-r))),zf(0),Sf()),0)}}),bf(Kf,cb),{singleton:!0});function hb(e){return!!e&&("smooth"===e?"smooth":"auto")}const gb=jf((([{listRefresh:e,totalCount:r},{atBottomState:t,isAtBottom:n},{scrollToIndex:o},{scrolledToInitialItem:i},{didMount:s,propsReady:a},{log:l},{scrollingInProgress:d}])=>{const c=Mf(!1),u=Rf();let h=null;function g(e){vf(o,{align:"end",behavior:e,index:"LAST"})}function m(e){const r=$f(t,(r=>{e&&!r.atBottom&&"SIZE_INCREASED"===r.notAtBottomBecause&&!h&&(wf(l)("scrolling to bottom due to increased size",{},Vf.DEBUG),g("auto"))}));setTimeout(r,100)}return yf(If(Pf(If(Wf(r),Tf(1)),s),Of(Wf(c),n,i,d),Df((([[e,r],t,n,o,i])=>{let s=r&&o,a="auto";return s&&(a=((e,r)=>"function"==typeof e?hb(e(r)):r&&hb(e))(t,n||i),s=s&&!!a),{followOutputBehavior:a,shouldFollow:s,totalCount:e}})),kf((({shouldFollow:e})=>e))),(({followOutputBehavior:r,totalCount:t})=>{h&&(h(),h=null),h=$f(e,(()=>{wf(l)("following output to ",{totalCount:t},Vf.DEBUG),g(r),h=null}))})),yf(If(Pf(Wf(c),r,a),kf((([e,,r])=>e&&r)),Af((({value:e},[,r])=>({refreshed:e===r,value:r})),{refreshed:!1,value:0}),kf((({refreshed:e})=>e)),Of(c,r)),(([,e])=>{wf(i)&&m(!1!==e)})),yf(u,(()=>{m(!1!==wf(c))})),yf(Pf(Wf(c),t),(([e,r])=>{e&&!r.atBottom&&"VIEWPORT_HEIGHT_DECREASING"===r.notAtBottomBecause&&g("auto")})),{autoscrollToBottom:u,followOutput:c}}),bf(Hp,Kp,Vp,qp,Pp,Uf,Kf)),mb=jf((([{data:e,firstItemIndex:r,gap:t,sizes:n},{initialTopMostItemIndex:o},{initialItemCount:i,listState:s},{didMount:a}])=>(Ff(If(a,Of(i),kf((([,e])=>0!==e)),Of(o,n,r,t,e),Df((([[,e],r,t,n,o,i=[]])=>ab(e,r,t,n,o,i)))),s),{})),bf(Hp,qp,db,Pp),{singleton:!0}),fb=jf((([{didMount:e},{scrollTo:r},{listState:t}])=>{const n=Mf(0);return yf(If(e,Of(n),kf((([,e])=>0!==e)),Df((([,e])=>({top:e})))),(e=>{$f(If(t,Tf(1),kf((e=>e.items.length>1))),(()=>{requestAnimationFrame((()=>{vf(r,e)}))}))})),{initialScrollTop:n}}),bf(Pp,Kf,db),{singleton:!0}),pb=({itemBottom:e,itemTop:r,locationParams:{align:t,behavior:n,...o},viewportBottom:i,viewportTop:s})=>r<s?{...o,align:null!=t?t:"start",behavior:n}:e>i?{...o,align:null!=t?t:"end",behavior:n}:null,bb=jf((([{gap:e,sizes:r,totalCount:t},{fixedFooterHeight:n,fixedHeaderHeight:o,headerHeight:i,scrollingInProgress:s,scrollTop:a,viewportHeight:l},{scrollToIndex:d}])=>{const c=Rf();return Ff(If(c,Of(r,l,t,i,o,n,a),Of(e),Df((([[e,r,t,n,o,i,a,l],d])=>{const{align:c,behavior:u,calculateViewLocation:h=pb,done:g,...m}=e,f=Ip(e,r,n-1),p=Dp(f,r.offsetTree,d)+o+i,b=h({itemBottom:p+np(r.sizeTree,f)[1],itemTop:p,locationParams:{align:c,behavior:u,...m},viewportBottom:l+t-a,viewportTop:l+i});return b?g&&$f(If(s,kf((e=>!e)),Tf(wf(s)?1:2)),g):g&&g(),b})),kf((e=>null!==e))),d),{scrollIntoView:c}}),bf(Hp,Kf,Vp,db,Uf),{singleton:!0}),yb=jf((([{scrollVelocity:e}])=>{const r=Mf(!1),t=Rf(),n=Mf(!1);return Ff(If(e,Of(n,r,t),kf((([e,r])=>!!r)),Df((([e,r,t,n])=>{const{enter:o,exit:i}=r;if(t){if(i(e,n))return!1}else if(o(e,n))return!0;return t})),Sf()),r),yf(If(Pf(r,e,t),Of(n)),(([[e,r,t],n])=>{e&&n&&n.change&&n.change(r,t)})),{isSeeking:r,scrollSeekConfiguration:n,scrollSeekRangeChanged:t,scrollVelocity:e}}),bf(Kp),{singleton:!0}),vb=jf((([{scrollContainerState:e,scrollTo:r}])=>{const t=Rf(),n=Rf(),o=Rf(),i=Mf(!1),s=Mf(void 0);return Ff(If(Pf(t,n),Df((([{scrollHeight:e,scrollTop:r,viewportHeight:t},{offsetTop:n}])=>({scrollHeight:e,scrollTop:Math.max(0,r-n),viewportHeight:t})))),e),Ff(If(r,Of(n),Df((([e,{offsetTop:r}])=>({...e,top:e.top+r})))),o),{customScrollParent:s,useWindowScroll:i,windowScrollContainerState:t,windowScrollTo:o,windowViewportRect:n}}),bf(Kf)),xb=jf((([{sizeRanges:e,sizes:r},{headerHeight:t,scrollTop:n},{initialTopMostItemIndex:o},{didMount:i},{useWindowScroll:s,windowScrollContainerState:a,windowViewportRect:l}])=>{const d=Rf(),c=Mf(void 0),u=Mf(null),h=Mf(null);return Ff(a,u),Ff(l,h),yf(If(d,Of(r,n,s,u,h,t)),(([e,r,t,n,o,i,s])=>{const a=function(e){return lp(e).map((({k:e,v:r},t,n)=>{const o=n[t+1];return{endIndex:o?o.k-1:1/0,size:r,startIndex:e}}))}(r.sizeTree);n&&null!==o&&null!==i&&(t=o.scrollTop-i.offsetTop),e({ranges:a,scrollTop:t-=s})})),Ff(If(c,kf(gf),Df(wb)),o),Ff(If(i,Of(c),kf((([,e])=>void 0!==e)),Sf(),Df((([,e])=>e.ranges))),e),{getState:d,restoreStateFrom:c}}),bf(Hp,Kf,qp,Pp,vb));function wb(e){return{align:"start",index:0,offset:e.scrollTop}}const Fb=jf((([{topItemsIndexes:e}])=>{const r=Mf(0);return Ff(If(r,kf((e=>e>=0)),Df((e=>Array.from({length:e}).map(((e,r)=>r))))),e),{topItemCount:r}}),bf(db));function $b(e){let r,t=!1;return()=>(t||(t=!0,r=e()),r)}const Cb=$b((()=>/iP(ad|od|hone)/i.test(navigator.userAgent)&&/WebKit/i.test(navigator.userAgent))),Eb=jf((([{deviation:e,scrollBy:r,scrollingInProgress:t,scrollTop:n},{isAtBottom:o,isScrolling:i,lastJumpDueToItemResize:s,scrollDirection:a},{listState:l},{beforeUnshiftWith:d,gap:c,shiftWithOffset:u,sizes:h},{log:g},{recalcInProgress:m}])=>{const f=Hf(If(l,Of(s),Af((([,e,r,t],[{bottom:n,items:o,offsetBottom:i,totalCount:s},a])=>{const l=n+i;let d=0;return r===s&&e.length>0&&o.length>0&&(0===o[0].originalIndex&&0===e[0].originalIndex||(d=l-t,0!==d&&(d+=a))),[d,o,s,l]}),[0,[],0,0]),kf((([e])=>0!==e)),Of(n,a,t,o,g,m),kf((([,e,r,t,,,n])=>!n&&!t&&0!==e&&r===Zp)),Df((([[e],,,,,r])=>(r("Upward scrolling compensation",{amount:e},Vf.DEBUG),e)))));function p(t){t>0?(vf(r,{behavior:"auto",top:-t}),vf(e,0)):(vf(e,0),vf(r,{behavior:"auto",top:-t}))}return yf(If(f,Of(e,i)),(([r,t,n])=>{n&&Cb()?vf(e,t-r):p(-r)})),yf(If(Pf(_f(i,!1),e,m),kf((([e,r,t])=>!e&&!t&&0!==r)),Df((([e,r])=>r)),zf(1)),p),Ff(If(u,Df((e=>({top:-e})))),r),yf(If(d,Of(h,c),Df((([e,{groupIndices:r,lastSize:t,sizeTree:n},o])=>{function i(e){return e*(t+o)}if(0===r.length)return i(e);{let t=0;const o=tp(n,0);let s=0,a=0;for(;s<e;){s++,t+=o;let n=r.length===a+1?1/0:r[a+1]-r[a]-1;s+n>e&&(t-=o,n=e-s+1),s+=n,t+=i(n),a++}return t}}))),(t=>{vf(e,t),requestAnimationFrame((()=>{vf(r,{top:t}),requestAnimationFrame((()=>{vf(e,0),vf(m,!1)}))}))})),{deviation:e}}),bf(Kf,Kp,db,Hp,Uf,wp)),Sb=jf((([e,r,t,n,o,i,s,a,l,d])=>({...e,...r,...t,...n,...o,...i,...s,...a,...l,...d})),bf(ob,mb,Pp,yb,cb,fb,ub,vb,bb,Uf)),kb=jf((([{data:e,defaultItemSize:r,firstItemIndex:t,fixedItemSize:n,gap:o,groupIndices:i,itemSize:s,sizeRanges:a,sizes:l,statefulTotalCount:d,totalCount:c,trackItemSizes:u},{initialItemFinalLocationReached:h,initialTopMostItemIndex:g,scrolledToInitialItem:m},f,p,b,{listState:y,topItemsIndexes:v,...x},{scrollToIndex:w},F,{topItemCount:$},{groupCounts:C},E])=>(Ff(x.rangeChanged,E.scrollSeekRangeChanged),Ff(If(E.windowViewportRect,Df((e=>e.visibleHeight))),f.viewportHeight),{data:e,defaultItemHeight:r,firstItemIndex:t,fixedItemHeight:n,gap:o,groupCounts:C,initialItemFinalLocationReached:h,initialTopMostItemIndex:g,scrolledToInitialItem:m,sizeRanges:a,topItemCount:$,topItemsIndexes:v,totalCount:c,...b,groupIndices:i,itemSize:s,listState:y,scrollToIndex:w,statefulTotalCount:d,trackItemSizes:u,...x,...E,...f,sizes:l,...p})),bf(Hp,qp,Kf,xb,gb,db,Vp,Eb,Fb,Lp,Sb));function Db(e,r){const t={},n={};let o=0;const i=e.length;for(;o<i;)n[e[o]]=1,o+=1;for(const e in r)Object.hasOwn(n,e)||(t[e]=r[e]);return t}const Bb=typeof document<"u"?o.useLayoutEffect:o.useEffect;function Ib(e,t,n){const i=Object.keys(t.required||{}),s=Object.keys(t.optional||{}),a=Object.keys(t.methods||{}),l=Object.keys(t.events||{}),d=o.createContext({});function c(e,r){e.propsReady&&vf(e.propsReady,!1);for(const n of i){vf(e[t.required[n]],r[n])}for(const n of s)if(n in r){vf(e[t.optional[n]],r[n])}e.propsReady&&vf(e.propsReady,!0)}function u(e){return l.reduce(((r,n)=>(r[n]=function(e){let r,t;const n=()=>null==r?void 0:r();return function(o,i){switch(o){case 1:return i?t===i?void 0:(n(),t=i,r=yf(e,i),r):(n(),mf);case 2:return n(),void(t=null)}}}(e[t.events[n]]),r)),{})}const h=o.forwardRef(((h,g)=>{const{children:m,...f}=h,[p]=o.useState((()=>ff(function(e){const r=new Map,t=({constructor:e,dependencies:n,id:o,singleton:i})=>{if(i&&r.has(o))return r.get(o);const s=e(n.map((e=>t(e))));return i&&r.set(o,s),s};return t(e)}(e),(e=>{c(e,f)})))),[b]=o.useState(uf(u,p));Bb((()=>{for(const e of l)e in f&&yf(b[e],f[e]);return()=>{Object.values(b).map(xf)}}),[f,b,p]),Bb((()=>{c(p,f)})),o.useImperativeHandle(g,lf(function(e){return a.reduce(((r,n)=>(r[n]=r=>{vf(e[t.methods[n]],r)},r)),{})}(p)));const y=n;return r(d.Provider,{value:p,children:n?r(y,{...Db([...i,...s,...l],f),children:m}):m})}));return{Component:h,useEmitter:(e,r)=>{const t=o.useContext(d)[e];Bb((()=>yf(t,r)),[r,t])},useEmitterValue:o.version.startsWith("18")?e=>{const r=o.useContext(d)[e],t=o.useCallback((e=>yf(r,e)),[r]);return o.useSyncExternalStore(t,(()=>wf(r)),(()=>wf(r)))}:e=>{const r=o.useContext(d)[e],[t,n]=o.useState(uf(wf,r));return Bb((()=>yf(r,(e=>{e!==t&&n(lf(e))}))),[r,t]),t},usePublisher:e=>o.useCallback(hf(vf,o.useContext(d)[e]),[e])}}const Ab=o.createContext(void 0),Tb=o.createContext(void 0),zb=typeof document<"u"?o.useLayoutEffect:o.useEffect;function Ob(e,r,t,n=mf,i,s){const a=o.useRef(null),l=o.useRef(null),d=o.useRef(null),c=o.useCallback((t=>{const n=t.target,o=n===window||n===document,i=s?o?window.pageXOffset||document.documentElement.scrollLeft:n.scrollLeft:o?window.pageYOffset||document.documentElement.scrollTop:n.scrollTop,a=s?o?document.documentElement.scrollWidth:n.scrollWidth:o?document.documentElement.scrollHeight:n.scrollHeight,c=s?o?window.innerWidth:n.offsetWidth:o?window.innerHeight:n.offsetHeight,u=()=>{e({scrollHeight:a,scrollTop:Math.max(i,0),viewportHeight:c})};t.suppressFlushSync?u():D.flushSync(u),null!==l.current&&(i===l.current||i<=0||i===a-c)&&(l.current=null,r(!0),d.current&&(clearTimeout(d.current),d.current=null))}),[e,r]);return o.useEffect((()=>{const e=i||a.current;return n(i||a.current),c({suppressFlushSync:!0,target:e}),e.addEventListener("scroll",c,{passive:!0}),()=>{n(null),e.removeEventListener("scroll",c)}}),[a,c,t,n,i]),{scrollByCallback:function(e){s&&(e={behavior:e.behavior,left:e.top}),a.current.scrollBy(e)},scrollerRef:a,scrollToCallback:function(t){const n=a.current;if(!n||(s?"offsetWidth"in n&&0===n.offsetWidth:"offsetHeight"in n&&0===n.offsetHeight))return;const o="smooth"===t.behavior;let i,c,u;n===window?(c=Math.max(Cp(document.documentElement,s?"width":"height"),s?document.documentElement.scrollWidth:document.documentElement.scrollHeight),i=s?window.innerWidth:window.innerHeight,u=s?document.documentElement.scrollLeft:document.documentElement.scrollTop):(c=n[s?"scrollWidth":"scrollHeight"],i=Cp(n,s?"width":"height"),u=n[s?"scrollLeft":"scrollTop"]);const h=c-i;if(t.top=Math.ceil(Math.max(Math.min(h,t.top),0)),Gp(i,c)||t.top===u)return e({scrollHeight:c,scrollTop:u,viewportHeight:i}),void(o&&r(!0));o?(l.current=t.top,d.current&&clearTimeout(d.current),d.current=setTimeout((()=>{d.current=null,l.current=null,r(!0)}),1e3)):l.current=null,s&&(t={behavior:t.behavior,left:t.top}),n.scrollTo(t)}}}const Mb="-webkit-sticky",_b="sticky",Rb=$b((()=>{if(typeof document>"u")return _b;const e=document.createElement("div");return e.style.position=Mb,e.style.position===Mb?Mb:_b}));function Hb(e){return e}const jb=jf((()=>{const e=Mf((e=>`Item ${e}`)),r=Mf(null),t=Mf((e=>`Group ${e}`)),n=Mf({}),o=Mf(Hb),i=Mf("div"),s=Mf(mf),a=(e,r=null)=>_f(If(n,Df((r=>r[e])),Sf()),r);return{components:n,computeItemKey:o,context:r,EmptyPlaceholder:a("EmptyPlaceholder"),FooterComponent:a("Footer"),GroupComponent:a("Group","div"),groupContent:t,HeaderComponent:a("Header"),HeaderFooterTag:i,ItemComponent:a("Item","div"),itemContent:e,ListComponent:a("List","div"),ScrollerComponent:a("Scroller","div"),scrollerRef:s,ScrollSeekPlaceholder:a("ScrollSeekPlaceholder"),TopItemListComponent:a("TopItemList")}})),Lb=jf((([e,r])=>({...e,...r})),bf(kb,jb)),Pb=({height:e})=>r("div",{style:{height:e}}),Wb={overflowAnchor:"none",position:Rb(),zIndex:1},Nb={overflowAnchor:"none"},Vb={...Nb,display:"inline-block",height:"100%"},Yb=o.memo((function({showTopList:e=!1}){const t=ly("listState"),n=dy("sizeRanges"),i=ly("useWindowScroll"),s=ly("customScrollParent"),a=dy("windowScrollContainerState"),l=dy("scrollContainerState"),d=s||i?a:l,c=ly("itemContent"),u=ly("context"),h=ly("groupContent"),g=ly("trackItemSizes"),m=ly("itemSize"),f=ly("log"),p=dy("gap"),b=ly("horizontalDirection"),{callbackRef:v}=Zf(n,m,g,e?mf:d,f,p,s,b,ly("skipAnimationFrameInResizeObserver")),[x,w]=o.useState(0);ay("deviation",(e=>{x!==e&&w(e)}));const F=ly("EmptyPlaceholder"),$=ly("ScrollSeekPlaceholder")||Pb,C=ly("ListComponent"),E=ly("ItemComponent"),S=ly("GroupComponent"),k=ly("computeItemKey"),D=ly("isSeeking"),B=ly("groupIndices").length>0,I=ly("alignToBottom"),A=ly("initialItemFinalLocationReached"),T=e?{}:{boxSizing:"border-box",...b?{display:"inline-block",height:"100%",marginLeft:0!==x?x:I?"auto":0,paddingLeft:t.offsetTop,paddingRight:t.offsetBottom,whiteSpace:"nowrap"}:{marginTop:0!==x?x:I?"auto":0,paddingBottom:t.offsetBottom,paddingTop:t.offsetTop},...A?{}:{visibility:"hidden"}};return!e&&0===t.totalCount&&F?r(F,{...Qb(F,u)}):r(C,{...Qb(C,u),"data-testid":e?"virtuoso-top-item-list":"virtuoso-item-list",ref:v,style:T,children:(e?t.topItems:t.items).map((e=>{const r=e.originalIndex,n=k(r+t.firstItemIndex,e.data,u);return D?y($,{...Qb($,u),height:e.size,index:e.index,key:n,type:e.type||"item",..."group"===e.type?{}:{groupIndex:e.groupIndex}}):"group"===e.type?y(S,{...Qb(S,u),"data-index":r,"data-item-index":e.index,"data-known-size":e.size,key:n,style:Wb},h(e.index,u)):y(E,{...Qb(E,u),...Xb(E,e.data),"data-index":r,"data-item-group-index":e.groupIndex,"data-item-index":e.index,"data-known-size":e.size,key:n,style:b?Vb:Nb},B?c(e.index,e.groupIndex,e.data,u):c(e.index,e.data,u))}))})})),Ub={height:"100%",outline:"none",overflowY:"auto",position:"relative",WebkitOverflowScrolling:"touch"},qb={outline:"none",overflowX:"auto",position:"relative"},Gb=e=>({height:"100%",position:"absolute",top:0,width:"100%",...e?{display:"flex",flexDirection:"column"}:{}}),Zb={position:Rb(),top:0,width:"100%",zIndex:1};function Qb(e,r){if("string"!=typeof e)return{context:r}}function Xb(e,r){return{item:"string"==typeof e?void 0:r}}const Kb=o.memo((function(){const e=ly("HeaderComponent"),t=dy("headerHeight"),n=ly("HeaderFooterTag"),i=qf(o.useMemo((()=>e=>{t(Cp(e,"height"))}),[t]),!0,ly("skipAnimationFrameInResizeObserver")),s=ly("context");return e?r(n,{ref:i,children:r(e,{...Qb(e,s)})}):null})),Jb=o.memo((function(){const e=ly("FooterComponent"),t=dy("footerHeight"),n=ly("HeaderFooterTag"),i=qf(o.useMemo((()=>e=>{t(Cp(e,"height"))}),[t]),!0,ly("skipAnimationFrameInResizeObserver")),s=ly("context");return e?r(n,{ref:i,children:r(e,{...Qb(e,s)})}):null}));function ey({useEmitter:e,useEmitterValue:t,usePublisher:n}){return o.memo((function({children:o,style:i,...s}){const a=n("scrollContainerState"),l=t("ScrollerComponent"),d=n("smoothScrollTargetReached"),c=t("scrollerRef"),u=t("context"),h=t("horizontalDirection")||!1,{scrollByCallback:g,scrollerRef:m,scrollToCallback:f}=Ob(a,d,l,c,void 0,h);return e("scrollTo",f),e("scrollBy",g),r(l,{"data-testid":"virtuoso-scroller","data-virtuoso-scroller":!0,ref:m,style:{...h?qb:Ub,...i},tabIndex:0,...s,...Qb(l,u),children:o})}))}function ry({useEmitter:e,useEmitterValue:t,usePublisher:n}){return o.memo((function({children:o,style:i,...s}){const a=n("windowScrollContainerState"),l=t("ScrollerComponent"),d=n("smoothScrollTargetReached"),c=t("totalListHeight"),u=t("deviation"),h=t("customScrollParent"),g=t("context"),{scrollByCallback:m,scrollerRef:f,scrollToCallback:p}=Ob(a,d,l,mf,h);return zb((()=>(f.current=h||window,()=>{f.current=null})),[f,h]),e("windowScrollTo",p),e("scrollBy",m),r(l,{"data-virtuoso-scroller":!0,style:{position:"relative",...i,...0!==c?{height:c+u}:{}},...s,...Qb(l,g),children:o})}))}const ty=({children:e})=>{const t=o.useContext(Ab),n=dy("viewportHeight"),i=dy("fixedItemHeight"),s=ly("alignToBottom"),a=ly("horizontalDirection"),l=qf(o.useMemo((()=>cf(n,(e=>Cp(e,a?"width":"height")))),[n,a]),!0,ly("skipAnimationFrameInResizeObserver"));return o.useEffect((()=>{t&&(n(t.viewportHeight),i(t.itemHeight))}),[t,n,i]),r("div",{"data-viewport-type":"element",ref:l,style:Gb(s),children:e})},ny=({children:e})=>{const t=o.useContext(Ab),n=dy("windowViewportRect"),i=dy("fixedItemHeight"),s=ly("customScrollParent"),a=Xf(n,s,ly("skipAnimationFrameInResizeObserver")),l=ly("alignToBottom");return o.useEffect((()=>{t&&(i(t.itemHeight),n({offsetTop:0,visibleHeight:t.viewportHeight,visibleWidth:100}))}),[t,n,i]),r("div",{"data-viewport-type":"window",ref:a,style:Gb(l),children:e})},oy=({children:e})=>{const t=ly("TopItemListComponent")||"div",n=ly("headerHeight"),o={...Zb,marginTop:`${n}px`},i=ly("context");return r(t,{style:o,...Qb(t,i),children:e})},iy=o.memo((function(t){const n=ly("useWindowScroll"),o=ly("topItemsIndexes").length>0,i=ly("customScrollParent"),s=ly("context"),a=i||n?uy:cy,l=i||n?ny:ty;return e(a,{...t,...Qb(a,s),children:[o&&r(oy,{children:r(Yb,{showTopList:!0})}),e(l,{children:[r(Kb,{}),r(Yb,{}),r(Jb,{})]})]})})),{Component:sy,useEmitter:ay,useEmitterValue:ly,usePublisher:dy}=Ib(Lb,{events:{atBottomStateChange:"atBottomStateChange",atTopStateChange:"atTopStateChange",endReached:"endReached",groupIndices:"groupIndices",isScrolling:"isScrolling",itemsRendered:"itemsRendered",rangeChanged:"rangeChanged",startReached:"startReached",totalListHeightChanged:"totalListHeightChanged"},methods:{autoscrollToBottom:"autoscrollToBottom",getState:"getState",scrollBy:"scrollBy",scrollIntoView:"scrollIntoView",scrollTo:"scrollTo",scrollToIndex:"scrollToIndex"},optional:{alignToBottom:"alignToBottom",atBottomThreshold:"atBottomThreshold",atTopThreshold:"atTopThreshold",components:"components",computeItemKey:"computeItemKey",context:"context",customScrollParent:"customScrollParent",data:"data",defaultItemHeight:"defaultItemHeight",firstItemIndex:"firstItemIndex",fixedItemHeight:"fixedItemHeight",followOutput:"followOutput",groupContent:"groupContent",groupCounts:"groupCounts",headerFooterTag:"HeaderFooterTag",horizontalDirection:"horizontalDirection",increaseViewportBy:"increaseViewportBy",initialItemCount:"initialItemCount",initialScrollTop:"initialScrollTop",initialTopMostItemIndex:"initialTopMostItemIndex",itemContent:"itemContent",itemSize:"itemSize",logLevel:"logLevel",overscan:"overscan",restoreStateFrom:"restoreStateFrom",scrollerRef:"scrollerRef",scrollSeekConfiguration:"scrollSeekConfiguration",skipAnimationFrameInResizeObserver:"skipAnimationFrameInResizeObserver",topItemCount:"topItemCount",totalCount:"totalCount",useWindowScroll:"useWindowScroll"},required:{}},iy),cy=ey({useEmitter:ay,useEmitterValue:ly,usePublisher:dy}),uy=ry({useEmitter:ay,useEmitterValue:ly,usePublisher:dy}),hy=sy,gy={bottom:0,itemHeight:0,items:[],itemWidth:0,offsetBottom:0,offsetTop:0,top:0},my={bottom:0,itemHeight:0,items:[{index:0}],itemWidth:0,offsetBottom:0,offsetTop:0,top:0},{ceil:fy,floor:py,max:by,min:yy,round:vy}=Math;function xy(e,r,t){return Array.from({length:r-e+1}).map(((r,n)=>({data:null===t?null:t[n+e],index:n+e})))}function wy(e,r){return e&&e.width===r.width&&e.height===r.height}function Fy(e,r){return e&&e.column===r.column&&e.row===r.row}const $y=jf((([{increaseViewportBy:e,listBoundary:r,overscan:t,visibleRange:n},{footerHeight:o,headerHeight:i,scrollBy:s,scrollContainerState:a,scrollTo:l,scrollTop:d,smoothScrollTargetReached:c,viewportHeight:u},h,g,{didMount:m,propsReady:f},{customScrollParent:p,useWindowScroll:b,windowScrollContainerState:y,windowScrollTo:v,windowViewportRect:x},w])=>{const F=Mf(0),$=Mf(0),C=Mf(gy),E=Mf({height:0,width:0}),S=Mf({height:0,width:0}),k=Rf(),D=Rf(),B=Mf(0),I=Mf(null),A=Mf({column:0,row:0}),T=Rf(),z=Rf(),O=Mf(!1),M=Mf(0),_=Mf(!0),R=Mf(!1),H=Mf(!1);yf(If(m,Of(M),kf((([e,r])=>!!r))),(()=>{vf(_,!1)})),yf(If(Pf(m,_,S,E,M,R),kf((([e,r,t,n,,o])=>e&&!r&&0!==t.height&&0!==n.height&&!o))),(([,,,,e])=>{vf(R,!0),Yp(1,(()=>{vf(k,e)})),$f(If(d),(()=>{vf(r,[0,0]),vf(_,!0)}))})),Ff(If(z,kf((e=>null!=e&&e.scrollTop>0)),Bf(0)),$),yf(If(m,Of(z),kf((([,e])=>null!=e))),(([,e])=>{e&&(vf(E,e.viewport),vf(S,e.item),vf(A,e.gap),e.scrollTop>0&&(vf(O,!0),$f(If(d,Tf(1)),(e=>{vf(O,!1)})),vf(l,{top:e.scrollTop})))})),Ff(If(E,Df((({height:e})=>e))),u),Ff(If(Pf(Wf(E,wy),Wf(S,wy),Wf(A,((e,r)=>e&&e.column===r.column&&e.row===r.row)),Wf(d)),Df((([e,r,t,n])=>({gap:t,item:r,scrollTop:n,viewport:e})))),T),Ff(If(Pf(Wf(F),n,Wf(A,Fy),Wf(S,wy),Wf(E,wy),Wf(I),Wf($),Wf(O),Wf(_),Wf(M)),kf((([,,,,,,,e])=>!e)),Df((([e,[r,t],n,o,i,s,a,,l,d])=>{const{column:c,row:u}=n,{height:h,width:g}=o,{width:m}=i;if(0===a&&(0===e||0===m))return gy;if(0===g){const r=Up(d,e);return function(e){return{...my,items:e}}(xy(r,r+Math.max(a-1,0),s))}const f=Cy(m,g,c);let p,b;l?0===r&&0===t&&a>0?(p=0,b=a-1):(p=f*py((r+u)/(h+u)),b=f*fy((t+u)/(h+u))-1,b=yy(e-1,by(b,f-1)),p=yy(b,by(0,p))):(p=0,b=-1);const y=xy(p,b,s),{bottom:v,top:x}=Ey(i,n,o,y),w=fy(e/f);return{bottom:v,itemHeight:h,items:y,itemWidth:g,offsetBottom:w*h+(w-1)*u-v,offsetTop:x,top:x}}))),C),Ff(If(I,kf((e=>null!==e)),Df((e=>e.length))),F),Ff(If(Pf(E,S,C,A),kf((([e,r,{items:t}])=>t.length>0&&0!==r.height&&0!==e.height)),Df((([e,r,{items:t},n])=>{const{bottom:o,top:i}=Ey(e,n,r,t);return[i,o]})),Sf(xp)),r);const j=Mf(!1);Ff(If(d,Of(j),Df((([e,r])=>r||0!==e))),j);const L=Hf(If(Pf(C,F),kf((([{items:e}])=>e.length>0)),Of(j),kf((([[e,r],t])=>{const n=e.items[e.items.length-1].index===r-1;return(t||e.bottom>0&&e.itemHeight>0&&0===e.offsetBottom&&e.items.length===r)&&n})),Df((([[,e]])=>e-1)),Sf())),P=Hf(If(Wf(C),kf((({items:e})=>e.length>0&&0===e[0].index)),Bf(0),Sf())),W=Hf(If(Wf(C),Of(O),kf((([{items:e},r])=>e.length>0&&!r)),Df((([{items:e}])=>({endIndex:e[e.length-1].index,startIndex:e[0].index}))),Sf(vp),zf(0)));Ff(W,g.scrollSeekRangeChanged),Ff(If(k,Of(E,S,F,A),Df((([e,r,t,n,o])=>{const i=Np(e),{align:s,behavior:a,offset:l}=i;let d=i.index;"LAST"===d&&(d=n-1),d=by(0,d,yy(n-1,d));let c=Sy(r,o,t,d);return"end"===s?c=vy(c-r.height+t.height):"center"===s&&(c=vy(c-r.height/2+t.height/2)),l&&(c+=l),{behavior:a,top:c}}))),l);const N=_f(If(C,Df((e=>e.offsetBottom+e.bottom))),0);return Ff(If(x,Df((e=>({height:e.visibleHeight,width:e.visibleWidth})))),E),{customScrollParent:p,data:I,deviation:B,footerHeight:o,gap:A,headerHeight:i,increaseViewportBy:e,initialItemCount:$,itemDimensions:S,overscan:t,restoreStateFrom:z,scrollBy:s,scrollContainerState:a,scrollHeight:D,scrollTo:l,scrollToIndex:k,scrollTop:d,smoothScrollTargetReached:c,totalCount:F,useWindowScroll:b,viewportDimensions:E,windowScrollContainerState:y,windowScrollTo:v,windowViewportRect:x,...g,gridState:C,horizontalDirection:H,initialTopMostItemIndex:M,totalListHeight:N,...h,endReached:L,propsReady:f,rangeChanged:W,startReached:P,stateChanged:T,stateRestoreInProgress:O,...w}}),bf(ob,Kf,Kp,yb,Pp,vb,Uf));function Cy(e,r,t){return by(1,py((e+t)/(py(r)+t)))}function Ey(e,r,t,n){const{height:o}=t;if(void 0===o||0===n.length)return{bottom:0,top:0};const i=Sy(e,r,t,n[0].index);return{bottom:Sy(e,r,t,n[n.length-1].index)+o,top:i}}function Sy(e,r,t,n){const o=Cy(e.width,t.width,r.column),i=py(n/o),s=i*t.height+by(0,i-1)*r.row;return s>0?s+r.row:s}const ky=jf((()=>{const e=Mf((e=>`Item ${e}`)),r=Mf({}),t=Mf(null),n=Mf("virtuoso-grid-item"),o=Mf("virtuoso-grid-list"),i=Mf(Hb),s=Mf("div"),a=Mf(mf),l=(e,t=null)=>_f(If(r,Df((r=>r[e])),Sf()),t),d=Mf(!1),c=Mf(!1);return Ff(Wf(c),d),{components:r,computeItemKey:i,context:t,FooterComponent:l("Footer"),HeaderComponent:l("Header"),headerFooterTag:s,itemClassName:n,ItemComponent:l("Item","div"),itemContent:e,listClassName:o,ListComponent:l("List","div"),readyStateChanged:d,reportReadyState:c,ScrollerComponent:l("Scroller","div"),scrollerRef:a,ScrollSeekPlaceholder:l("ScrollSeekPlaceholder","div")}})),Dy=jf((([e,r])=>({...e,...r})),bf($y,ky)),By=o.memo((function(){const e=Ry("gridState"),t=Ry("listClassName"),n=Ry("itemClassName"),i=Ry("itemContent"),s=Ry("computeItemKey"),a=Ry("isSeeking"),l=Hy("scrollHeight"),d=Ry("ItemComponent"),c=Ry("ListComponent"),u=Ry("ScrollSeekPlaceholder"),h=Ry("context"),g=Hy("itemDimensions"),m=Hy("gap"),f=Ry("log"),p=Ry("stateRestoreInProgress"),b=Hy("reportReadyState"),v=qf(o.useMemo((()=>e=>{const r=e.parentElement.parentElement.scrollHeight;l(r);const t=e.firstChild;if(t){const{height:e,width:r}=t.getBoundingClientRect();g({height:e,width:r})}m({column:Py("column-gap",getComputedStyle(e).columnGap,f),row:Py("row-gap",getComputedStyle(e).rowGap,f)})}),[l,g,m,f]),!0,!1);return zb((()=>{e.itemHeight>0&&e.itemWidth>0&&b(!0)}),[e]),p?null:r(c,{className:t,ref:v,...Qb(c,h),"data-testid":"virtuoso-item-list",style:{paddingBottom:e.offsetBottom,paddingTop:e.offsetTop},children:e.items.map((t=>{const o=s(t.index,t.data,h);return a?r(u,{...Qb(u,h),height:e.itemHeight,index:t.index,width:e.itemWidth},o):y(d,{...Qb(d,h),className:n,"data-index":t.index,key:o},i(t.index,t.data,h))}))})})),Iy=o.memo((function(){const e=Ry("HeaderComponent"),t=Hy("headerHeight"),n=Ry("headerFooterTag"),i=qf(o.useMemo((()=>e=>{t(Cp(e,"height"))}),[t]),!0,!1),s=Ry("context");return e?r(n,{ref:i,children:r(e,{...Qb(e,s)})}):null})),Ay=o.memo((function(){const e=Ry("FooterComponent"),t=Hy("footerHeight"),n=Ry("headerFooterTag"),i=qf(o.useMemo((()=>e=>{t(Cp(e,"height"))}),[t]),!0,!1),s=Ry("context");return e?r(n,{ref:i,children:r(e,{...Qb(e,s)})}):null})),Ty=({children:e})=>{const t=o.useContext(Tb),n=Hy("itemDimensions"),i=Hy("viewportDimensions"),s=qf(o.useMemo((()=>e=>{i(e.getBoundingClientRect())}),[i]),!0,!1);return o.useEffect((()=>{t&&(i({height:t.viewportHeight,width:t.viewportWidth}),n({height:t.itemHeight,width:t.itemWidth}))}),[t,i,n]),r("div",{ref:s,style:Gb(!1),children:e})},zy=({children:e})=>{const t=o.useContext(Tb),n=Hy("windowViewportRect"),i=Hy("itemDimensions"),s=Ry("customScrollParent"),a=Xf(n,s,!1);return o.useEffect((()=>{t&&(i({height:t.itemHeight,width:t.itemWidth}),n({offsetTop:0,visibleHeight:t.viewportHeight,visibleWidth:t.viewportWidth}))}),[t,n,i]),r("div",{ref:a,style:Gb(!1),children:e})},Oy=o.memo((function({...t}){const n=Ry("useWindowScroll"),o=Ry("customScrollParent"),i=o||n?Ly:jy,s=o||n?zy:Ty,a=Ry("context");return r(i,{...t,...Qb(i,a),children:e(s,{children:[r(Iy,{}),r(By,{}),r(Ay,{})]})})})),{Component:My,useEmitter:_y,useEmitterValue:Ry,usePublisher:Hy}=Ib(Dy,{events:{atBottomStateChange:"atBottomStateChange",atTopStateChange:"atTopStateChange",endReached:"endReached",isScrolling:"isScrolling",rangeChanged:"rangeChanged",readyStateChanged:"readyStateChanged",startReached:"startReached",stateChanged:"stateChanged"},methods:{scrollBy:"scrollBy",scrollTo:"scrollTo",scrollToIndex:"scrollToIndex"},optional:{components:"components",computeItemKey:"computeItemKey",context:"context",customScrollParent:"customScrollParent",data:"data",headerFooterTag:"headerFooterTag",increaseViewportBy:"increaseViewportBy",initialItemCount:"initialItemCount",initialTopMostItemIndex:"initialTopMostItemIndex",itemClassName:"itemClassName",itemContent:"itemContent",listClassName:"listClassName",logLevel:"logLevel",overscan:"overscan",restoreStateFrom:"restoreStateFrom",scrollerRef:"scrollerRef",scrollSeekConfiguration:"scrollSeekConfiguration",totalCount:"totalCount",useWindowScroll:"useWindowScroll"}},Oy),jy=ey({useEmitter:_y,useEmitterValue:Ry,usePublisher:Hy}),Ly=ry({useEmitter:_y,useEmitterValue:Ry,usePublisher:Hy});function Py(e,r,t){return"normal"!==r&&!(null!=r&&r.endsWith("px"))&&t(`${e} was not resolved to pixel value correctly`,r,Vf.WARN),"normal"===r?0:parseInt(null!=r?r:"0",10)}var Wy;!function(e){e.Ready="overlay-context-ready",e.Change="overlay-context-change"}(Wy||(Wy={}));const Ny=e=>"right"===e?"bottom-end":"bottom-start",Vy=v({elementWidth:0,styles:{},setFloatingRef:()=>{},getFloatingProps:()=>({})}),Yy=({enabled:n,isOpen:o,onOpen:l,onClose:d,onDismiss:c,renderElement:u,renderDropdown:h,customZIndex:g,clickToToggle:m=!1,offset:f=0,alignment:b="left",fitAvailableHeight:y,rootNode:v,positionRef:x})=>{var w;const F=p(E),$=Qn["sm-max"]({theme:F}),C=i(null),{width:S=0}=Ii({targetRef:null!=x?x:C,handleHeight:!1}),k={name:"center",fn:({x:e,rects:r})=>{const t=0===e||e+r.floating.width===window.innerWidth,n=window.innerWidth<$;return{x:t&&n?(window.innerWidth-r.floating.width)/2:e}}},{refs:D,floatingStyles:B,context:I}=V({open:o,onOpenChange:(e,r,t)=>{"escape-key"===t?null==c||c():e&&!o?null==l||l():!e&&o&&(null==d||d(t))},whileElementsMounted:Y,placement:Ny(b),middleware:[U(f),q(),G({limiter:Z()}),Q({apply({availableHeight:e,elements:r}){!y||e>=r.floating.scrollHeight?r.floating.style.setProperty("--available-height",""):r.floating.style.setProperty("--available-height",`${Math.max(0,e)}px`)}}),k]}),A=(()=>{const[e,r]=a(void 0),t=N();return s((()=>{if(!t)return void r(void 0);const e=e=>{r(e.zIndex)};return t.events.on(Wy.Change,e),t.events.emit(Wy.Ready),()=>t.events.off(Wy.Change,e)}),[t]),e})(),{isMounted:T,styles:z}=X(I,{initial:{opacity:0},open:{opacity:1},duration:300}),O=K(I,{enabled:n,toggle:m}),M=J(I,{enabled:n}),{getReferenceProps:_,getFloatingProps:R}=ee([O,M]),H={elementWidth:S,styles:Object.assign(Object.assign(Object.assign({},z),B),{zIndex:null!==(w=null!=g?g:A)&&void 0!==w?w:50}),setFloatingRef:D.setFloating,getFloatingProps:R};return e(t,{children:[r("div",Object.assign({ref:e=>{C.current=e,D.setReference(e)}},_(),{children:u()})),T&&r(re,{root:v,children:r(te,{context:I,modal:!1,initialFocus:-1,returnFocus:!1,children:r(Vy.Provider,{value:H,children:h(H)})})})]})},Uy=o.createContext({focusedIndex:-1,setFocusedIndex:()=>{}}),qy=({children:e})=>{const[t,n]=a(-1);return r(Uy.Provider,{value:{focusedIndex:t,setFocusedIndex:n},children:e})},Gy=F.div`
    border: ${qn["width-010"]} ${qn.solid} ${Vn.border};
    border-radius: ${Zn.sm};
    background: ${Vn.bg};

    ${e=>e.$customWidth?`width: ${e.$customWidth};`:e.$width?`width: ${e.$width}px; min-width: 23rem;`:"min-width: 23rem;"}
    max-height: min(27rem, var(--available-height, infinity * 1px));
    overflow: hidden;
    overflow-y: auto;
    ${e=>"small"===e.$variant?Yn["body-md-regular"]:Yn["body-baseline-regular"]}

    ${Xn.MaxWidth.sm} {
        min-width: unset;
        width: calc(100vw - ${Qn["sm-margin"]} * 2);
        max-height: 15rem;
    }

    ${Xn.MaxWidth.xs} {
        width: calc(100vw - ${Qn["xs-margin"]} * 2);
    }

    ${Xn.MaxWidth.xxs} {
        width: calc(100vw - ${Qn["xxs-margin"]} * 2);
    }

    &::-webkit-scrollbar {
        width: 14px;
    }

    &::-webkit-scrollbar-track {
        background: transparent;
    }

    &::-webkit-scrollbar-thumb {
        background: ${Vn["bg-inverse-subtlest"]};
        border: 5px solid transparent;
        border-radius: ${Zn.full};
        background-clip: padding-box;
    }
`,Zy=F.div`
    background: transparent;
    padding: ${Gn["spacing-8"]};
`,Qy=F.ul`
    list-style-type: none;
`,Xy=F.li`
    display: flex;
    align-items: flex-start;
    gap: ${Gn["spacing-8"]};
    padding: ${Gn["spacing-12"]} ${Gn["spacing-8"]};
    cursor: pointer;
    border: none;
    border-radius: ${Zn.none};
    outline: none;

    ${e=>e.$disabled?$`
                cursor: not-allowed;
            `:e.$active&&e.$selected?$`
                background: ${Vn["bg-hover"]};
            `:e.$active?$`
                background: ${Vn["bg-hover-subtle"]};
            `:void 0}
`,Ky=F(W)`
    flex-shrink: 0;
    height: 1lh;
    width: 1rem;
    color: ${Vn["icon-selected"]};
`,Jy=F.div`
    flex-shrink: 0;
    height: 1lh;
    width: 1rem;
`,ev=F(P)`
    flex-shrink: 0;
    height: 1lh;
    width: 1lh;
    color: ${Vn["icon-selected"]};
`,rv=F(L)`
    flex-shrink: 0;
    height: 1lh;
    width: 1lh;
    color: ${Vn["icon-primary-subtlest"]};
`,tv=F(ne)`
    flex-shrink: 0;
    height: 1lh;
    width: 1lh;
    color: ${Vn["icon-disabled-subtle"]};
`,nv=F.div`
    width: 100%;
    display: flex;
    justify-content: flex-end;
`,ov=F($o)`
    cursor: pointer;
    overflow: hidden;
    color: ${Vn["text-primary"]};
    font-size: inherit;
`,iv=F(ov)`
    ${Yn["body-baseline-semibold"]}
`,sv=F(ov)`
    ${Yn["body-md-semibold"]}
    padding: ${Gn["spacing-8"]} ${Gn["spacing-8"]};
`,av=F.div`
    width: 100%;
    display: flex;
    padding: ${Gn["spacing-12"]} ${Gn["spacing-16"]};
    align-items: center;
`,lv=F(T)`
    margin-right: ${Gn["spacing-4"]};
    color: ${Vn["icon-error"]};
    height: 1em;
    width: 1em;
`,dv=F(hd)`
    margin-right: ${Gn["spacing-8"]};
    color: ${Vn.icon};
`,cv=F.div`
    ${oc()}
    color: ${Vn["text-subtle"]};
    padding: 0 ${Gn["spacing-16"]} ${Gn["spacing-12"]}
        ${Gn["spacing-16"]};
`,uv=F.div`
    background: ${Vn["bg-strong"]};
    border-radius: ${Zn.sm};
    display: flex;
    align-items: center;

    ${e=>"small"===e.$variant?Yn["body-md-regular"]:Yn["body-baseline-regular"]}
`,hv=F.label`
    flex: 1;
    display: flex;
    align-items: center;
    gap: ${Gn["spacing-8"]};
    padding: ${e=>"small"===e.$variant?$`
                  ${Gn["spacing-8"]} ${Gn["spacing-16"]}
              `:$`10px ${Gn["spacing-16"]}`};
`,gv=F(Fo)`
    flex: 1;
`,mv=F(oe)`
    color: ${Vn.icon};
    flex-shrink: 0;
    height: 1em;
    width: 1em;
`,fv=F(Yc)`
    flex-shrink: 0;
    align-self: stretch;
    box-sizing: content-box;
    padding: ${Gn["spacing-8"]};
    margin-left: -${Gn["spacing-8"]};
    color: ${Vn.icon};
    cursor: pointer;
    font-size: inherit;

    svg {
        flex-shrink: 0;
        height: 1em;
        width: 1em;
    }
`,pv=g(((t,n)=>{var{value:o,variant:i,onClear:s}=t,a=se(t,["value","variant","onClear"]);return e(uv,{$variant:i,children:[e(hv,{$variant:i,children:[r(mv,{"aria-hidden":!0}),r(gv,Object.assign({ref:n,value:o,$variant:i},a))]}),o&&r(fv,{"aria-label":"Clear search",focusOutline:"browser",onClick:s,children:r(j,{"aria-hidden":!0})})]})})),bv=({listItems:n,multiSelect:o,maxSelectable:l,selectedItems:d,disableItemFocus:c,itemsLoadState:u="success",itemTruncationType:h="end",itemMaxLines:g=2,labelDisplayType:f="inline",variant:b="default",listboxId:y,matchElementWidth:v=!1,width:x,topScrollItem:w,onSelectItem:F,onSelectAll:$,onDismiss:C,onRetry:E,valueExtractor:S,listExtractor:k,renderListItem:D,renderCustomCallToAction:B,enableSearch:I,hideNoResultsDisplay:A,noResultsDescription:T,customLabels:z,searchPlaceholder:O,searchFunction:M,onSearch:_})=>{const{noResultsLabel:R="No results found.",selectAllButtonLabel:H="Select all",clearAllButtonLabel:j="Clear all"}=z||{},L=(null==z?void 0:z.searchPlaceholder)||O||"Search",P=(null==z?void 0:z.noResultsDescription)||T,{focusedIndex:W,setFocusedIndex:N}=p(Uy),{elementWidth:V,setFloatingRef:Y,getFloatingProps:U,styles:q}=p(Vy),[G,Z]=a(""),[Q,X]=a(null!=n?n:[]),K=tc(u),J=(()=>{const[e,r]=a(!1);return s((()=>{r(!0)}),[]),e})(),ee=i(null),re=i(null),te=i([]),ne=i(null),oe=i(null),ie=!!l&&!!d&&(null==d?void 0:d.length)===l,se=e=>{const r=k?k(e):null==e?void 0:e.toString();return"object"==typeof r?{title:r.title,secondaryLabel:r.secondaryLabel}:{title:null!=r?r:""}},le=m((e=>!!of(d,(r=>af(r,e)))),[d]),de=rc((()=>null==M?void 0:M(G))),ce=rc((()=>null==n?void 0:n.filter((e=>{const{title:r,secondaryLabel:t}=se(e),n=G.trim().toLowerCase();return r.toLowerCase().includes(n)||t&&t.toLowerCase().includes(n)})))),ue=(e,r)=>{ie&&!le(e)||(N(r),null==F||F(e,(e=>S?S(e):e)(e)))},he=e=>{const r=e.target.value;Z(r),null==_||_()},ge=()=>{var e;Z(""),null===(e=ne.current)||void 0===e||e.focus(),null==_||_()},me=()=>{null==E||E()};ae("keydown",(e=>{var r,t;switch(e.code){case"ArrowDown":if(e.preventDefault(),W<Q.length-1){const e=W+1;null===(r=te.current[e])||void 0===r||r.focus(),N(e)}break;case"ArrowUp":if(e.preventDefault(),W>0){const e=W-1;null===(t=te.current[e])||void 0===t||t.focus(),N(e)}else 0===W&&ne.current&&(ne.current.focus(),N(-1));break;case"Space":case"Enter":document.activeElement===te.current[W]&&(e.preventDefault(),Q[W]&&ue(Q[W],W))}})),s((()=>{var e;if(!w)return void(null===(e=oe.current)||void 0===e||e.scrollTo({top:0}));const r=setTimeout((()=>{if(!n)return;const e=n.indexOf(w);oe.current&&-1!==e&&(oe.current.scrollToIndex({index:e}),N(e))}),0);return()=>clearTimeout(r)}),[te,n,N,w]),s((()=>{var e,r,t;if(J)return;if(c||!n)return;const o=n.findIndex((e=>le(e)));ne.current?(N(-1),setTimeout((()=>{var e;return null===(e=ne.current)||void 0===e?void 0:e.focus()}),200)):W>0?(null===(e=oe.current)||void 0===e||e.scrollToIndex({index:W,align:"center"}),setTimeout((()=>{var e;return null===(e=te.current[W])||void 0===e?void 0:e.focus()}),200)):-1!==o?(null===(r=oe.current)||void 0===r||r.scrollToIndex({index:o,align:"center"}),N(o),setTimeout((()=>{var e;return null===(e=te.current[o])||void 0===e?void 0:e.focus()}),200)):(null===(t=oe.current)||void 0===t||t.scrollToIndex({index:0}),N(0),setTimeout((()=>{var e;return null===(e=te.current[0])||void 0===e?void 0:e.focus()}),200))}),[le,c,W,n,J,N]),s((()=>{J&&K&&(c||"success"===u&&ne.current&&(N(-1),ne.current.focus()))}),[J,K,u,N,c]),s((()=>{var e;X(null!==(e=""===G?n:M?de():ce())&&void 0!==e?e:[])}),[de,ce,n,M,G]);const fe=e=>o?r(ie&&!e?tv:e?ev:rv,{"aria-hidden":!0}):e?r(Ky,{"aria-hidden":!0}):r(Jy,{}),pe=(e,t)=>{const{title:n,secondaryLabel:o}=se(e);return r(Su,{displayType:f,label:n,maxLines:g,selected:t,disabled:!t&&ie,sublabel:o,truncationType:h,variant:b})},be=(n,i)=>{if(!E||"success"===u){const s=le(n),a=i===W;return r(Xy,{"aria-selected":s,"aria-multiselectable":o,"aria-disabled":!s&&ie,"data-testid":"list-item",onClick:()=>ue(n,i),onMouseEnter:()=>(e=>{N(e)})(i),ref:e=>{te.current[i]=e},role:"option",tabIndex:a?0:-1,$active:a,$selected:s,$disabled:!s&&ie,children:D?D(n,{selected:s}):e(t,{children:[fe(s),pe(n,s)]})},((e,r)=>`item_${r}__${S?S(e):e}`)(n,i))}},ye=()=>{if((I||M)&&"success"===u)return r(pv,{ref:ne,onChange:he,value:G,placeholder:L,"data-testid":"search-input","aria-label":"Enter text to search",onClear:ge,variant:b})},ve=()=>{if(d&&o&&Q.length>0&&!G&&"success"===u)return r(nv,{children:r(sv,{onClick:$,type:"button",$variant:b,children:l||0!==d.length?j:H})})},xe=()=>{if(!A&&(G||!I)&&0===Q.length&&"success"===u)return e(t,{children:[e(av,{"data-testid":"list-no-results",children:[r(lv,{"data-testid":"no-result-icon"}),R]}),P&&r(cv,{"data-testid":"no-result-desc",children:P})]})},we=()=>{if(E&&"loading"===u)return e(av,{"data-testid":"list-loading",children:[r(dv,{}),"Loading..."]})},Fe=()=>{if(E&&"fail"===u)return e(av,{"data-testid":"list-fail",children:[r(lv,{"data-testid":"load-error-icon"}),"Failed to load. ",r(iv,{onClick:me,type:"button",$variant:b,children:"Try again."})]})},$e=()=>{var e;const t="test"===process.env.NODE_ENV;return r(Qy,{role:"listbox",id:y,children:r(hy,Object.assign({ref:oe,style:{height:"100%"},data:Q,customScrollParent:null!==(e=ee.current)&&void 0!==e?e:void 0,itemContent:(e,r)=>be(r,e)},t?{initialItemCount:Q.length}:{}),t?Q.length:void 0)})};return e(Gy,Object.assign({"data-testid":"dropdown-container",ref:Jd(ee,Y),style:q},U(),{$width:v?V:void 0,$customWidth:x,$variant:b,children:[e(Zy,{ref:re,"data-testid":"dropdown-list",children:[ye(),ve(),xe(),we(),Fe(),$e()]}),(()=>{if(B)return r("div",{"data-testid":"custom-cta",children:B(C,Q)})})()]}))},yv=F($o)`
    display: flex;
    align-items: center;
    gap: ${Gn["spacing-8"]};
    width: 100%;
    padding: ${e=>e.$readOnly?`0 ${Gn["spacing-16"]}`:Gn["spacing-16"]};

    ${e=>"small"===e.$variant?$`
                  ${Yn["body-md-regular"]}
                  height: calc(2.5rem - 2px); // exclude top and bottom borders
              `:$`
                  ${Yn["body-baseline-regular"]}
                  height: calc(3rem - 2px);
              `}

    &:disabled {
        cursor: not-allowed;
    }

    &:focus-visible {
        outline: 2px solid ${Vn["focus-ring"]};
        outline-offset: -2px;
    }
`,vv=F.div`
    display: flex;
    align-items: center;
    transform: rotate(${e=>e.$expanded?180:0}deg);
    transition: transform ${Un["duration-250"]} ${Un["ease-default"]};

    svg {
        color: ${Vn.icon};
        height: 1em;
        width: 1em;
    }
`;g(((t,n)=>{var{children:o,disabled:i,expanded:s,listboxId:a,popupRole:l,readOnly:d,variant:c}=t,u=se(t,["children","disabled","expanded","listboxId","popupRole","readOnly","variant"]);return e(yv,Object.assign({ref:n,type:"button",role:"combobox","aria-expanded":s,"aria-haspopup":l,"aria-controls":s?a:void 0,"data-testid":"selector","aria-disabled":i,"aria-readonly":d,$variant:c,$readOnly:d},u,{children:[o,!d&&r(vv,{$expanded:s,$variant:c,children:r(S,{"aria-hidden":!0})})]}))})),F.li`
    display: ${e=>e.$visible?"flex":"none"};
`,F.div`
    flex: 1;
    display: flex;
    align-items: flex-start;
    gap: ${Gn["spacing-8"]};
    padding: ${Gn["spacing-12"]} ${Gn["spacing-8"]};
    cursor: ${e=>e.$toggleable?"default":"pointer"};
    overflow: hidden; // required for label to truncate properly
    border-radius: ${Zn.none};
    outline: none;

    ${e=>e.$active&&$`
            background: ${Vn["bg-hover"]};
        `}
`,F.div`
    height: 1px;
    width: calc((1lh + ${Gn["spacing-8"]}) * ${e=>e.$level});
`,F.div`
    width: 1lh;
    height: 1lh;
    color: ${Vn["icon-primary"]};
    cursor: pointer;

    svg {
        width: 1lh;
        height: 1lh;
        transition: transform ${Un["duration-350"]}
            ${Un["ease-standard"]};

        ${e=>{if(e.$expanded)return $`
                    transform: rotate(90deg);
                `}}
    }
`,F.div`
    width: 1lh;
    height: 1lh;
    margin-right: ${Gn["spacing-8"]};
`,F.div`
    flex-shrink: 0;
    height: 1lh;
    width: ${e=>e.$hasNestedSiblings?"1lh":Gn["spacing-16"]};

    display: flex;
    justify-content: center;
`,F(ie)`
    flex-shrink: 0;
    height: 1lh;
    width: 1lh;
    color: ${Vn["icon-selected"]};
`;const xv=F(wo)`
    height: 3rem;
    gap: ${Gn["spacing-8"]};
    // space for clear icon
    padding-right: calc(1.25rem + ${Gn["spacing-20"]});
`,wv=t=>{var{id:n,disabled:o=!1,error:l,value:d,format:c="12hr",readOnly:u,onChange:h,onFocus:g,onBlur:p,alignment:b="left",dropdownZIndex:y,startLimit:v,endLimit:x,interval:w=15}=t,F=se(t,["id","disabled","error","value","format","readOnly","onChange","onFocus","onBlur","alignment","dropdownZIndex","startLimit","endLimit","interval"]);const[$]=a((()=>ec.generate())),[C,E]=a(null),[S,k]=a(!1),[D,B]=a(""),[I,A]=a(""),[T,z]=a(""),[O,M]=a(""),[_,R]=a(""),H=i(null),j=i(null),L=i(null),P=f((()=>Io.generateTimings(w,c,v,x)),[w,c,v,x]),W=f((()=>{if(""===O)return P;const e=Io.findClosestFlooredTime(O,P);return e?P.slice(P.indexOf(e)):[]}),[P,O]),N=m((e=>Io.parseInput(e,c)),[c]);s((()=>{var e,r;if(d){const t=null!==(e=N(d.start))&&void 0!==e?e:"",n=null!==(r=N(d.end))&&void 0!==r?r:"";A(t),z(n),M(t),R(n)}}),[d,N]),s((()=>{if(l)return void k(!1);const e=N(I),r=N(T);if(void 0===e)B("Invalid start time");else if(void 0===r)B("Invalid end time");else{if(!(""!==e&&""!==r&&Io.to24Hour(r)<Io.to24Hour(e)))return B(""),void(document.activeElement!==j.current&&document.activeElement!==L.current||k(!0));B("End time must be after start time")}k(!1)}),[I,T,N,l]);const V=e=>{o||u||(C||S||null==g||g(),E(e),k(!0))},Y=e=>{var r;o||u||(E(e),k(!0),null===(r=("start"===e?j:L).current)||void 0===r||r.select())};function U(e){var r;switch(e.code){case"Enter":"start"===C?q(I):"end"===C&&(S&&G(T),null===(r=L.current)||void 0===r||r.blur());break;case"Tab":Z(I,T,{})}}const q=e=>{Z(e,T,{goToNextInput:!0})},G=e=>{Z(I,e,{triggerOnBlur:!0})},Z=(e,r,{goToNextInput:t,triggerOnBlur:n})=>{var o,i,s;const a=null!==(o=N(e))&&void 0!==o?o:O,l=null!==(i=N(r))&&void 0!==i?i:_;A(a),z(l);a===O&&l===_||null==h||h({start:a,end:l}),t&&void 0!==N(e)&&(E("end"),null===(s=L.current)||void 0===s||s.select()),n&&(E(null),k(!1),null==p||p()),M(a),R(l)},Q=e=>{e.stopPropagation(),A(""),z(""),M(""),R("");null==h||h({start:"",end:""}),E(null),k(!1)},X=e=>{var r,t;const n=e.relatedTarget,o=(null===(r=null==n?void 0:n.matches)||void 0===r?void 0:r.call(n,"[data-floating-ui-focusable]"))||(null===(t=null==n?void 0:n.matches)||void 0===t?void 0:t.call(n,"[data-floating-ui-focus-guard]")),i=H.current&&H.current.contains(n);C&&!S&&!i&&!o&&Z(I,T,{triggerOnBlur:!0})},K=()=>{if(!u&&!o&&((null==I?void 0:I.length)>0||(null==T?void 0:T.length)>0))return r(vu,{onClick:Q,type:"button","aria-label":"Clear",children:r(mu,{"aria-hidden":!0})})};return e(Co,Object.assign({id:n},F,{children:[r(qy,{children:r(Yy,{enabled:!u&&!o,isOpen:S,renderElement:()=>e(xv,{ref:H,$disabled:o,$error:l||!!D,$readOnly:u,onBlur:X,children:[e(fo,{error:l||!!D,currentActive:null===C?"none":C,children:[r(So,{ref:j,onFocus:()=>V("start"),placeholder:"start"===C?"hh:mm":"From",onChange:e=>A(e.target.value),value:I,disabled:o,readOnly:u,"data-testid":F["data-testid"]?`${F["data-testid"]}-timepicker-selector`:"timepicker-selector",onClick:()=>Y("start"),onKeyDown:U,autoComplete:"off","aria-label":"Start time input",type:"text",role:"combobox","aria-expanded":S,"aria-controls":$,"aria-autocomplete":"list"}),r(So,{ref:L,onFocus:()=>V("end"),placeholder:"end"===C?"hh:mm":"To",onChange:e=>z(e.target.value),value:T,disabled:o,readOnly:u,"data-testid":F["data-testid"]?`${F["data-testid"]}-timepicker-selector`:"timepicker-selector",onClick:()=>Y("end"),onKeyDown:U,autoComplete:"off","aria-label":"End time input",type:"text",role:"combobox","aria-expanded":S,"aria-controls":$,"aria-autocomplete":"list"})]}),K()]}),renderDropdown:()=>r(bv,"start"===C?{listItems:P,onSelectItem:q,selectedItems:[I],disableItemFocus:!0,topScrollItem:Io.findClosestFlooredTime(N(I),P),listboxId:$}:{listItems:W,onSelectItem:G,selectedItems:[T],disableItemFocus:!0,topScrollItem:Io.findClosestFlooredTime(N(T),W),listboxId:$}),onClose:e=>{"outside-press"===e?(E(null),k(!1),null==p||p()):Z(I,T,{triggerOnBlur:!0})},onDismiss:()=>{var e;null===(e=("start"===C?j:L).current)||void 0===e||e.focus(),k(!1)},offset:8,alignment:b,fitAvailableHeight:!0,customZIndex:y})}),!l&&D&&e(uu,{children:[r(cu,{"aria-hidden":!0}),r(hu,{id:n?`${n}-error-message`:"error-message",tabIndex:0,"data-testid":n?`${n}-error-message`:"error-message",children:D})]})]}))},Fv=e=>{var{variant:t="dial"}=e,n=se(e,["variant"]);return r("combobox"===t?wv:du,Object.assign({},n))};export{Fv as TimeRangePicker};
//# sourceMappingURL=index.js.map
