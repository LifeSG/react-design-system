import{jsxs as e,jsx as t,Fragment as r}from"react/jsx-runtime";import*as n from"react";import o,{useRef as i,useEffect as s,useState as a,isValidElement as l,createRef as d,cloneElement as c,PureComponent as u,useLayoutEffect as h,forwardRef as g,useCallback as m,useContext as p,useMemo as f,version as b,createElement as y}from"react";import{ArrowRightIcon as v,ChevronDownIcon as x}from"@lifesg/react-icons";import w,{css as $,keyframes as F,useTheme as C}from"styled-components";import{ChevronDownIcon as E}from"@lifesg/react-icons/chevron-down";import{ChevronUpIcon as S}from"@lifesg/react-icons/chevron-up";import k,{findDOMNode as D,unstable_batchedUpdates as I}from"react-dom";import{ArrowRightIcon as T}from"@lifesg/react-icons/arrow-right";import{ExclamationCircleFillIcon as B}from"@lifesg/react-icons/exclamation-circle-fill";import{ExclamationTriangleFillIcon as A}from"@lifesg/react-icons/exclamation-triangle-fill";import{ICircleFillIcon as z}from"@lifesg/react-icons/i-circle-fill";import{TickCircleFillIcon as O}from"@lifesg/react-icons/tick-circle-fill";import{ExternalIcon as M}from"@lifesg/react-icons/external";import{CircleIcon as _}from"@lifesg/react-icons/circle";import{CircleDotIcon as R}from"@lifesg/react-icons/circle-dot";import{CrossIcon as H}from"@lifesg/react-icons/cross";import{SquareIcon as j}from"@lifesg/react-icons/square";import{SquareTickFillIcon as L}from"@lifesg/react-icons/square-tick-fill";import{TickIcon as P}from"@lifesg/react-icons/tick";import{SquareFillIcon as W}from"@lifesg/react-icons/square-fill";import{MagnifierIcon as N}from"@lifesg/react-icons/magnifier";import"@lifesg/react-icons/caret-right";import{MinusSquareFillIcon as V}from"@lifesg/react-icons/minus-square-fill";import{useFloatingTree as Y,useFloating as U,autoUpdate as q,offset as G,flip as Z,shift as Q,limitShift as X,size as K,useTransitionStyles as J,useClick as ee,useDismiss as te,useInteractions as re,FloatingPortal as ne,FloatingFocusManager as oe}from"@floating-ui/react";function ie(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(n=Object.getOwnPropertySymbols(e);o<n.length;o++)t.indexOf(n[o])<0&&Object.prototype.propertyIsEnumerable.call(e,n[o])&&(r[n[o]]=e[n[o]])}return r}"function"==typeof SuppressedError&&SuppressedError;const se=(e,t,r="window",n)=>{const o=i();s((()=>{o.current=t}),[t]),s((()=>{let t;switch(r){case"window":t=window;break;case"document":t=document;break;default:t=r}if(!t||!t.addEventListener)return;const i=e=>{var t;return null===(t=o.current)||void 0===t?void 0:t.call(o,e)};return t.addEventListener(e,i,n),()=>{null==t||t.removeEventListener(e,i,n)}}),[e,r])};var ae="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};function le(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var de=Array.isArray,ce="object"==typeof ae&&ae&&ae.Object===Object&&ae,ue=ce,he="object"==typeof self&&self&&self.Object===Object&&self,ge=ue||he||Function("return this")(),me=ge.Symbol,pe=me,fe=Object.prototype,be=fe.hasOwnProperty,ye=fe.toString,ve=pe?pe.toStringTag:void 0;var xe=function(e){var t=be.call(e,ve),r=e[ve];try{e[ve]=void 0;var n=!0}catch(e){}var o=ye.call(e);return n&&(t?e[ve]=r:delete e[ve]),o},we=Object.prototype.toString;var $e=xe,Fe=function(e){return we.call(e)},Ce=me?me.toStringTag:void 0;var Ee=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":Ce&&Ce in Object(e)?$e(e):Fe(e)};var Se=function(e){return null!=e&&"object"==typeof e},ke=Ee,De=Se;var Ie=function(e){return"symbol"==typeof e||De(e)&&"[object Symbol]"==ke(e)},Te=de,Be=Ie,Ae=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,ze=/^\w*$/;var Oe=function(e,t){if(Te(e))return!1;var r=typeof e;return!("number"!=r&&"symbol"!=r&&"boolean"!=r&&null!=e&&!Be(e))||(ze.test(e)||!Ae.test(e)||null!=t&&e in Object(t))};var Me=function(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)},_e=Ee,Re=Me;var He,je=function(e){if(!Re(e))return!1;var t=_e(e);return"[object Function]"==t||"[object GeneratorFunction]"==t||"[object AsyncFunction]"==t||"[object Proxy]"==t},Le=ge["__core-js_shared__"],Pe=(He=/[^.]+$/.exec(Le&&Le.keys&&Le.keys.IE_PROTO||""))?"Symbol(src)_1."+He:"";var We=function(e){return!!Pe&&Pe in e},Ne=Function.prototype.toString;var Ve=function(e){if(null!=e){try{return Ne.call(e)}catch(e){}try{return e+""}catch(e){}}return""},Ye=je,Ue=We,qe=Me,Ge=Ve,Ze=/^\[object .+?Constructor\]$/,Qe=Function.prototype,Xe=Object.prototype,Ke=Qe.toString,Je=Xe.hasOwnProperty,et=RegExp("^"+Ke.call(Je).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");var tt=function(e,t){return null==e?void 0:e[t]},rt=function(e){return!(!qe(e)||Ue(e))&&(Ye(e)?et:Ze).test(Ge(e))},nt=tt;var ot=function(e,t){var r=nt(e,t);return rt(r)?r:void 0},it=ot(Object,"create"),st=it;var at=function(){this.__data__=st?st(null):{},this.size=0};var lt=function(e){var t=this.has(e)&&delete this.__data__[e];return this.size-=t?1:0,t},dt=it,ct=Object.prototype.hasOwnProperty;var ut=function(e){var t=this.__data__;if(dt){var r=t[e];return"__lodash_hash_undefined__"===r?void 0:r}return ct.call(t,e)?t[e]:void 0},ht=it,gt=Object.prototype.hasOwnProperty;var mt=function(e){var t=this.__data__;return ht?void 0!==t[e]:gt.call(t,e)},pt=it;var ft=function(e,t){var r=this.__data__;return this.size+=this.has(e)?0:1,r[e]=pt&&void 0===t?"__lodash_hash_undefined__":t,this},bt=at,yt=lt,vt=ut,xt=mt,wt=ft;function $t(e){var t=-1,r=null==e?0:e.length;for(this.clear();++t<r;){var n=e[t];this.set(n[0],n[1])}}$t.prototype.clear=bt,$t.prototype.delete=yt,$t.prototype.get=vt,$t.prototype.has=xt,$t.prototype.set=wt;var Ft=$t;var Ct=function(){this.__data__=[],this.size=0};var Et=function(e,t){return e===t||e!=e&&t!=t},St=Et;var kt=function(e,t){for(var r=e.length;r--;)if(St(e[r][0],t))return r;return-1},Dt=kt,It=Array.prototype.splice;var Tt=function(e){var t=this.__data__,r=Dt(t,e);return!(r<0)&&(r==t.length-1?t.pop():It.call(t,r,1),--this.size,!0)},Bt=kt;var At=function(e){var t=this.__data__,r=Bt(t,e);return r<0?void 0:t[r][1]},zt=kt;var Ot=function(e){return zt(this.__data__,e)>-1},Mt=kt;var _t=function(e,t){var r=this.__data__,n=Mt(r,e);return n<0?(++this.size,r.push([e,t])):r[n][1]=t,this},Rt=Ct,Ht=Tt,jt=At,Lt=Ot,Pt=_t;function Wt(e){var t=-1,r=null==e?0:e.length;for(this.clear();++t<r;){var n=e[t];this.set(n[0],n[1])}}Wt.prototype.clear=Rt,Wt.prototype.delete=Ht,Wt.prototype.get=jt,Wt.prototype.has=Lt,Wt.prototype.set=Pt;var Nt=Wt,Vt=ot(ge,"Map"),Yt=Ft,Ut=Nt,qt=Vt;var Gt=function(e){var t=typeof e;return"string"==t||"number"==t||"symbol"==t||"boolean"==t?"__proto__"!==e:null===e};var Zt=function(e,t){var r=e.__data__;return Gt(t)?r["string"==typeof t?"string":"hash"]:r.map},Qt=Zt;var Xt=function(e){var t=Qt(this,e).delete(e);return this.size-=t?1:0,t},Kt=Zt;var Jt=function(e){return Kt(this,e).get(e)},er=Zt;var tr=function(e){return er(this,e).has(e)},rr=Zt;var nr=function(e,t){var r=rr(this,e),n=r.size;return r.set(e,t),this.size+=r.size==n?0:1,this},or=function(){this.size=0,this.__data__={hash:new Yt,map:new(qt||Ut),string:new Yt}},ir=Xt,sr=Jt,ar=tr,lr=nr;function dr(e){var t=-1,r=null==e?0:e.length;for(this.clear();++t<r;){var n=e[t];this.set(n[0],n[1])}}dr.prototype.clear=or,dr.prototype.delete=ir,dr.prototype.get=sr,dr.prototype.has=ar,dr.prototype.set=lr;var cr=dr,ur=cr;function hr(e,t){if("function"!=typeof e||null!=t&&"function"!=typeof t)throw new TypeError("Expected a function");var r=function(){var n=arguments,o=t?t.apply(this,n):n[0],i=r.cache;if(i.has(o))return i.get(o);var s=e.apply(this,n);return r.cache=i.set(o,s)||i,s};return r.cache=new(hr.Cache||ur),r}hr.Cache=ur;var gr=hr;var mr=function(e){var t=gr(e,(function(e){return 500===r.size&&r.clear(),e})),r=t.cache;return t},pr=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,fr=/\\(\\)?/g,br=mr((function(e){var t=[];return 46===e.charCodeAt(0)&&t.push(""),e.replace(pr,(function(e,r,n,o){t.push(n?o.replace(fr,"$1"):r||e)})),t}));var yr=function(e,t){for(var r=-1,n=null==e?0:e.length,o=Array(n);++r<n;)o[r]=t(e[r],r,e);return o},vr=de,xr=Ie,wr=me?me.prototype:void 0,$r=wr?wr.toString:void 0;var Fr=function e(t){if("string"==typeof t)return t;if(vr(t))return yr(t,e)+"";if(xr(t))return $r?$r.call(t):"";var r=t+"";return"0"==r&&1/t==-1/0?"-0":r},Cr=Fr;var Er=de,Sr=Oe,kr=br,Dr=function(e){return null==e?"":Cr(e)};var Ir=function(e,t){return Er(e)?e:Sr(e,t)?[e]:kr(Dr(e))},Tr=Ie;var Br=function(e){if("string"==typeof e||Tr(e))return e;var t=e+"";return"0"==t&&1/e==-1/0?"-0":t},Ar=Ir,zr=Br;var Or=function(e,t){for(var r=0,n=(t=Ar(t,e)).length;null!=e&&r<n;)e=e[zr(t[r++])];return r&&r==n?e:void 0},Mr=Or;var _r=function(e,t,r){var n=null==e?void 0:Mr(e,t);return void 0===n?r:n},Rr=le(_r);const Hr=(e,t,r)=>Rr(r,t)||Rr(e,t),jr=(e,t)=>{const r=t||e.defaultValue;return Rr(e.collections,r)},Lr={collections:{default:{"width-005":.5,"width-010":1,"width-020":2,"width-040":4,solid:"solid"}},defaultValue:"default"},Pr=e=>t=>{var r;const n=t.theme,o=jr(Lr,null==n?void 0:n.borderScheme);return(null===(r=null==n?void 0:n.overrides)||void 0===r?void 0:r.border)?`${Hr(o,e,n.overrides.border)}px`:`${o[e]}px`},Wr={"width-005":Pr("width-005"),"width-010":Pr("width-010"),"width-020":Pr("width-020"),"width-040":Pr("width-040"),solid:(Nr="solid",e=>{var t;const r=e.theme,n=jr(Lr,null==r?void 0:r.borderScheme),o=(null===(t=null==r?void 0:r.overrides)||void 0===t?void 0:t.border)?Hr(n,Nr,r.overrides.border):n[Nr];return"function"==typeof o?o(e):o})};var Nr;const Vr={"brand-10":"#2C0C0B","brand-20":"#4C1513","brand-30":"#6C1D1B","brand-40":"#922825","brand-50":"#BF3431","brand-60":"#F15D5A","brand-70":"#F69491","brand-80":"#FABAB7","brand-90":"#FCD7D2","brand-95":"#FFEBE7","brand-100":"#FFF6F4","primary-10":"#1A122C","primary-20":"#2F1F4D","primary-30":"#422D6E","primary-40":"#5B3D97","primary-50":"#7654BC","primary-60":"#9A82CD","primary-70":"#B7A7D8","primary-80":"#CFC5E5","primary-90":"#E3DDF0","primary-95":"#F0EDF7","primary-100":"#F9F8FC","secondary-10":"#0E1723","secondary-20":"#18293D","secondary-30":"#233A57","secondary-40":"#305078","secondary-50":"#4B6A8F","secondary-60":"#7B91A9","secondary-70":"#A1B1C3","secondary-80":"#C1CBD7","secondary-90":"#DBE1E8","secondary-95":"#EBEFF2","secondary-100":"#F7F8FA","neutral-10":"#161616","neutral-20":"#282828","neutral-30":"#393939","neutral-40":"#4E4E4E","neutral-50":"#686868","neutral-60":"#8E8E8E","neutral-70":"#AFAFB0","neutral-80":"#C7CACA","neutral-90":"#DDE1E2","neutral-95":"#EDEFEF","neutral-100":"#F9F9F9","success-10":"#081A0F","success-20":"#0E2D1B","success-30":"#154126","success-40":"#1C5A34","success-50":"#257645","success-60":"#44A068","success-70":"#64C189","success-80":"#80DCA5","success-90":"#B4ECCB","success-95":"#D5F6E2","success-100":"#EFFCF4","warning-10":"#221302","warning-20":"#3B2204","warning-30":"#543106","warning-40":"#744408","warning-50":"#98590C","warning-60":"#D07A13","warning-70":"#E4A244","warning-80":"#F5C26C","warning-90":"#FADBA6","warning-95":"#FCECD4","warning-100":"#FDF7F0","error-10":"#330505","error-20":"#550808","error-30":"#750C0C","error-40":"#9E130F","error-50":"#CB2213","error-60":"#DE6C6C","error-70":"#E89B9B","error-80":"#EFBEBE","error-90":"#F5D9D9","error-95":"#F9ECEC","error-100":"#FCF7F7","info-10":"#021824","info-20":"#032B3F","info-30":"#053D59","info-40":"#065478","info-50":"#176E9B","info-60":"#5296BE","info-70":"#82B5DA","info-80":"#ACCFE7","info-90":"#CCE3F1","info-95":"#E3F1F8","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000","primary-inverse":"#FEAB10"},Yr={"brand-10":"#1F1221","brand-20":"#371F3B","brand-30":"#4E2C53","brand-40":"#6B3E73","brand-50":"#8D5197","brand-60":"#FF3399","brand-70":"#FF88C4","brand-80":"#FFB3D9","brand-90":"#FFD4E9","brand-95":"#FFE8F3","brand-100":"#FFD6EB","primary-10":"#1F1221","primary-20":"#371F3B","primary-30":"#4E2C53","primary-40":"#6B3E73","primary-50":"#8D5197","primary-60":"#B07DB7","primary-70":"#C7A3CC","primary-80":"#D9C2DD","primary-90":"#E9DBEB","primary-95":"#F3ECF4","primary-100":"#FAF7FA","secondary-10":"#2D091B","secondary-20":"#4D0F2E","secondary-30":"#6B1540","secondary-40":"#931D58","secondary-50":"#C02673","secondary-60":"#FF409F","secondary-70":"#FF88C4","secondary-80":"#FFB3D9","secondary-90":"#FFD4E9","secondary-95":"#FFE8F3","secondary-100":"#FFF8FC","neutral-10":"#161616","neutral-20":"#282828","neutral-30":"#393939","neutral-40":"#4E4E4E","neutral-50":"#686868","neutral-60":"#8E8E8E","neutral-70":"#AFAFB0","neutral-80":"#C7CACA","neutral-90":"#DDE1E2","neutral-95":"#EDEFEF","neutral-100":"#F9F9F9","success-10":"#081A0F","success-20":"#0E2D1B","success-30":"#154126","success-40":"#1C5A34","success-50":"#257645","success-60":"#44A068","success-70":"#64C189","success-80":"#80DCA5","success-90":"#B4ECCB","success-95":"#D5F6E2","success-100":"#EFFCF4","warning-10":"#221302","warning-20":"#3B2204","warning-30":"#543106","warning-40":"#744408","warning-50":"#98590C","warning-60":"#D07A13","warning-70":"#E4A244","warning-80":"#F5C26C","warning-90":"#FADBA6","warning-95":"#FCECD4","warning-100":"#FDF7F0","error-10":"#330505","error-20":"#550808","error-30":"#750C0C","error-40":"#9E130F","error-50":"#CB2213","error-60":"#DE6C6C","error-70":"#E89B9B","error-80":"#EFBEBE","error-90":"#F5D9D9","error-95":"#F9ECEC","error-100":"#FCF7F7","info-10":"#021824","info-20":"#032B3F","info-30":"#053D59","info-40":"#065478","info-50":"#176E9B","info-60":"#5296BE","info-70":"#82B5DA","info-80":"#ACCFE7","info-90":"#CCE3F1","info-95":"#E3F1F8","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000","primary-inverse":"#FEAB10"},Ur={"brand-10":"#2C0C0B","brand-20":"#4C1513","brand-30":"#6C1D1B","brand-40":"#922825","brand-50":"#BF3431","brand-60":"#F15D5A","brand-70":"#F69491","brand-80":"#FABAB7","brand-90":"#FCD7D2","brand-95":"#FFEBE7","brand-100":"#FFF6F4","primary-10":"#001731","primary-20":"#002752","primary-30":"#003874","primary-40":"#004D9F","primary-50":"#1768BE","primary-60":"#3C91EC","primary-70":"#6CB4FF","primary-80":"#A5CDFF","primary-90":"#CFE1FE","primary-95":"#E8F0FE","primary-100":"#F7F9FF","secondary-10":"#131529","secondary-20":"#222547","secondary-30":"#2F3565","secondary-40":"#42498B","secondary-50":"#5B62A7","secondary-60":"#858CBD","secondary-70":"#A8ADCF","secondary-80":"#C6C9E0","secondary-90":"#DDDFEC","secondary-95":"#EDEEF5","secondary-100":"#F8F8FB","neutral-10":"#161616","neutral-20":"#282828","neutral-30":"#393939","neutral-40":"#4E4E4E","neutral-50":"#686868","neutral-60":"#8E8E8E","neutral-70":"#AFAFB0","neutral-80":"#C7CACA","neutral-90":"#DDE1E2","neutral-95":"#EDEFEF","neutral-100":"#F9F9F9","success-10":"#081A0F","success-20":"#0E2D1B","success-30":"#154126","success-40":"#1C5A34","success-50":"#257645","success-60":"#44A068","success-70":"#64C189","success-80":"#80DCA5","success-90":"#B4ECCB","success-95":"#D5F6E2","success-100":"#EFFCF4","warning-10":"#221302","warning-20":"#3B2204","warning-30":"#543106","warning-40":"#744408","warning-50":"#98590C","warning-60":"#D07A13","warning-70":"#E4A244","warning-80":"#F5C26C","warning-90":"#FADBA6","warning-95":"#FCECD4","warning-100":"#FDF7F0","error-10":"#330505","error-20":"#550808","error-30":"#750C0C","error-40":"#9E130F","error-50":"#CB2213","error-60":"#DE6C6C","error-70":"#E89B9B","error-80":"#EFBEBE","error-90":"#F5D9D9","error-95":"#F9ECEC","error-100":"#FCF7F7","info-10":"#021824","info-20":"#032B3F","info-30":"#053D59","info-40":"#065478","info-50":"#176E9B","info-60":"#5296BE","info-70":"#82B5DA","info-80":"#ACCFE7","info-90":"#CCE3F1","info-95":"#E3F1F8","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000","primary-inverse":"#FEAB10"},qr={"brand-10":"#2C0C0B","brand-20":"#4C1513","brand-30":"#6C1D1B","brand-40":"#922825","brand-50":"#BF3431","brand-60":"#F15D5A","brand-70":"#F69491","brand-80":"#FABAB7","brand-90":"#FCD7D2","brand-95":"#FFEBE7","brand-100":"#FFF6F4","primary-10":"#0011924","primary-20":"#032B40","primary-30":"#043D5A","primary-40":"#05547B","primary-50":"#096EA1","primary-60":"#2098D3","primary-70":"#5CB9E8","primary-80":"#8BD3F6","primary-90":"#BEE6FA","primary-95":"#E2F2FA","primary-100":"#F4FAFC","secondary-10":"#131529","secondary-20":"#222547","secondary-30":"#2F3565","secondary-40":"#42498B","secondary-50":"#5B62A7","secondary-60":"#858CBD","secondary-70":"#A8ADCF","secondary-80":"#C6C9E0","secondary-90":"#DDDFEC","secondary-95":"#EDEEF5","secondary-100":"#F8F8FB","neutral-10":"#161616","neutral-20":"#282828","neutral-30":"#393939","neutral-40":"#4E4E4E","neutral-50":"#686868","neutral-60":"#8E8E8E","neutral-70":"#AFAFB0","neutral-80":"#C7CACA","neutral-90":"#DDE1E2","neutral-95":"#EDEFEF","neutral-100":"#F9F9F9","success-10":"#081A0F","success-20":"#0E2D1B","success-30":"#154126","success-40":"#1C5A34","success-50":"#257645","success-60":"#44A068","success-70":"#64C189","success-80":"#80DCA5","success-90":"#B4ECCB","success-95":"#D5F6E2","success-100":"#EFFCF4","warning-10":"#221302","warning-20":"#3B2204","warning-30":"#543106","warning-40":"#744408","warning-50":"#98590C","warning-60":"#D07A13","warning-70":"#E4A244","warning-80":"#F5C26C","warning-90":"#FADBA6","warning-95":"#FCECD4","warning-100":"#FDF7F0","error-10":"#330505","error-20":"#550808","error-30":"#750C0C","error-40":"#9E130F","error-50":"#CB2213","error-60":"#DE6C6C","error-70":"#E89B9B","error-80":"#EFBEBE","error-90":"#F5D9D9","error-95":"#F9ECEC","error-100":"#FCF7F7","info-10":"#021824","info-20":"#032B3F","info-30":"#053D59","info-40":"#065478","info-50":"#176E9B","info-60":"#5296BE","info-70":"#82B5DA","info-80":"#ACCFE7","info-90":"#CCE3F1","info-95":"#E3F1F8","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000","primary-inverse":"#FEAB10"},Gr={"brand-10":"#001A19","brand-20":"#002D2B","brand-30":"#00413D","brand-40":"#005954","brand-50":"#00756F","brand-60":"#03A098","brand-70":"#55BFBA","brand-80":"#92D6D2","brand-90":"#BFE7E5","brand-95":"#DDF2F1","brand-100":"#F4FBFA","primary-10":"#09191D","primary-20":"#102B34","primary-30":"#173D49","primary-40":"#205666","primary-50":"#2A7086","primary-60":"#2A7086","primary-70":"#8CB6C2","primary-80":"#B2CED6","primary-90":"#D1E2E7","primary-95":"#E8F0F3","primary-100":"#F9F8FC","secondary-10":"#001731","secondary-20":"#002752","secondary-30":"#003874","secondary-40":"#004D9F","secondary-50":"#5B62A7","secondary-60":"#858CBD","secondary-70":"#A8ADCF","secondary-80":"#C6C9E0","secondary-90":"#DDDFEC","secondary-95":"#EDEEF5","secondary-100":"#F8F8FB","neutral-10":"#161616","neutral-20":"#282828","neutral-30":"#393939","neutral-40":"#4E4E4E","neutral-50":"#686868","neutral-60":"#8E8E8E","neutral-70":"#AFAFB0","neutral-80":"#C7CACA","neutral-90":"#DDE1E2","neutral-95":"#EDEFEF","neutral-100":"#F9F9F9","success-10":"#081A0F","success-20":"#0E2D1B","success-30":"#154126","success-40":"#1C5A34","success-50":"#257645","success-60":"#44A068","success-70":"#64C189","success-80":"#80DCA5","success-90":"#B4ECCB","success-95":"#D5F6E2","success-100":"#EFFCF4","warning-10":"#221302","warning-20":"#3B2204","warning-30":"#543106","warning-40":"#744408","warning-50":"#98590C","warning-60":"#D07A13","warning-70":"#E4A244","warning-80":"#F5C26C","warning-90":"#FADBA6","warning-95":"#FCECD4","warning-100":"#FDF7F0","error-10":"#330505","error-20":"#550808","error-30":"#750C0C","error-40":"#9E130F","error-50":"#CB2213","error-60":"#DE6C6C","error-70":"#E89B9B","error-80":"#EFBEBE","error-90":"#F5D9D9","error-95":"#F9ECEC","error-100":"#FCF7F7","info-10":"#021824","info-20":"#032B3F","info-30":"#053D59","info-40":"#065478","info-50":"#176E9B","info-60":"#5296BE","info-70":"#82B5DA","info-80":"#ACCFE7","info-90":"#CCE3F1","info-95":"#E3F1F8","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000","primary-inverse":"#FEAB10"},Zr={"brand-10":"#881317","brand-20":"#B5191E","brand-30":"#B5040A","brand-40":"#D0333F","brand-50":"#DC666F","brand-60":"#E28087","brand-70":"#E7999F","brand-80":"#EDB3B7","brand-90":"#F3CCCF","brand-95":"#F9E6E7","brand-100":"#FCF2F3","primary-10":"#000000","primary-20":"#191919","primary-30":"#333333","primary-40":"#4D4D4D","primary-50":"#666666","primary-60":"#808080","primary-70":"#999999","primary-80":"#B3B3B3","primary-90":"#E6E6E6","primary-95":"#F7F7F7","primary-100":"#FFFFFF","secondary-10":"#19151D","secondary-20":"#2B2533","secondary-30":"#3E3649","secondary-40":"#564A64","secondary-50":"#6F637D","secondary-60":"#948B9F","secondary-70":"#B3ACBB","secondary-80":"#CCC8D2","secondary-90":"#E1DEE4","secondary-95":"#EFEEF1","secondary-100":"#F9F8F9","neutral-10":"#000000","neutral-20":"#191919","neutral-30":"#333333","neutral-40":"#4D4D4D","neutral-50":"#666666","neutral-60":"#808080","neutral-70":"#999999","neutral-80":"#B3B3B3","neutral-90":"#E6E6E6","neutral-95":"#F7F7F7","neutral-100":"#FFFFFF","success-10":"#081A0F","success-20":"#0E2D1B","success-30":"#154126","success-40":"#1C5A34","success-50":"#257645","success-60":"#44A068","success-70":"#64C189","success-80":"#80DCA5","success-90":"#B4ECCB","success-95":"#D5F6E2","success-100":"#EFFCF4","warning-10":"#221302","warning-20":"#3B2204","warning-30":"#543106","warning-40":"#744408","warning-50":"#98590C","warning-60":"#D07A13","warning-70":"#E4A244","warning-80":"#F5C26C","warning-90":"#FADBA6","warning-95":"#FCECD4","warning-100":"#FDF7F0","error-10":"#330505","error-20":"#550808","error-30":"#750C0C","error-40":"#9E130F","error-50":"#CB2213","error-60":"#DE6C6C","error-70":"#E89B9B","error-80":"#EFBEBE","error-90":"#F5D9D9","error-95":"#F9ECEC","error-100":"#FCF7F7","info-10":"#021824","info-20":"#032B3F","info-30":"#053D59","info-40":"#065478","info-50":"#176E9B","info-60":"#5296BE","info-70":"#82B5DA","info-80":"#ACCFE7","info-90":"#CCE3F1","info-95":"#E3F1F8","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000","primary-inverse":"#FEAB10"},Qr={"brand-10":"#0E123A","brand-20":"#191E65","brand-30":"#232B90","brand-40":"#303BC5","brand-50":"#494CFF","brand-60":"#AD6EFF","brand-70":"#AEA4FF","brand-80":"#C5C4FF","brand-90":"#DDDCFF","brand-95":"#EDECFF","brand-100":"#F8F8FF","primary-10":"#10152B","primary-20":"#1C254B","primary-30":"#28356C","primary-40":"#38489A","primary-50":"#4D5AD7","primary-60":"#7487F2","primary-70":"#9AAAFC","primary-80":"#BDC7FD","primary-90":"#DADFFB","primary-95":"#ECEEFE","primary-100":"#F7F8FF","secondary-10":"#19151D","secondary-20":"#2B2533","secondary-30":"#3E3649","secondary-40":"#564A64","secondary-50":"#6F637D","secondary-60":"#948B9F","secondary-70":"#B3ACBB","secondary-80":"#CCC8D2","secondary-90":"#E1DEE4","secondary-95":"#EFEEF1","secondary-100":"#F9F8F9","neutral-10":"#161616","neutral-20":"#282828","neutral-30":"#393939","neutral-40":"#4E4E4E","neutral-50":"#686868","neutral-60":"#8E8E8E","neutral-70":"#AFAFB0","neutral-80":"#C7CACA","neutral-90":"#DDE1E2","neutral-95":"#EDEFEF","neutral-100":"#F9F9F9","success-10":"#081A0F","success-20":"#0E2D1B","success-30":"#154126","success-40":"#1C5A34","success-50":"#257645","success-60":"#44A068","success-70":"#64C189","success-80":"#80DCA5","success-90":"#B4ECCB","success-95":"#D5F6E2","success-100":"#EFFCF4","warning-10":"#221302","warning-20":"#3B2204","warning-30":"#543106","warning-40":"#744408","warning-50":"#98590C","warning-60":"#D07A13","warning-70":"#E4A244","warning-80":"#F5C26C","warning-90":"#FADBA6","warning-95":"#FCECD4","warning-100":"#FDF7F0","error-10":"#330505","error-20":"#550808","error-30":"#750C0C","error-40":"#9E130F","error-50":"#CB2213","error-60":"#DE6C6C","error-70":"#E89B9B","error-80":"#EFBEBE","error-90":"#F5D9D9","error-95":"#F9ECEC","error-100":"#FCF7F7","info-10":"#021824","info-20":"#032B3F","info-30":"#053D59","info-40":"#065478","info-50":"#176E9B","info-60":"#5296BE","info-70":"#82B5DA","info-80":"#ACCFE7","info-90":"#CCE3F1","info-95":"#E3F1F8","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000","primary-inverse":"#FEAB10"},Xr={"brand-10":"#170F39","brand-20":"#281C62","brand-30":"#38268B","brand-40":"#4D34BF","brand-50":"#5735DF","brand-60":"#9986F9","brand-70":"#B2A5F8","brand-80":"#CDC2FA","brand-90":"#E2DCFC","brand-95":"#EFEDFE","brand-100":"#FAF8FD","primary-10":"#170F39","primary-20":"#281C62","primary-30":"#38268B","primary-40":"#4D34BF","primary-50":"#5735DF","primary-60":"#9986F9","primary-70":"#B2A5F8","primary-80":"#CDC2FA","primary-90":"#E2DCFC","primary-95":"#EFEDFE","primary-100":"#FAF8FD","secondary-10":"#251204","secondary-20":"#401F08","secondary-30":"#5B2C0B","secondary-40":"#7E3D0F","secondary-50":"#B04900","secondary-60":"#E26E1C","secondary-70":"#FF9445","secondary-80":"#FFBB8E","secondary-90":"#FFD9BF","secondary-95":"#FFECDF","secondary-100":"#FFF8F3","neutral-10":"#161616","neutral-20":"#282828","neutral-30":"#393939","neutral-40":"#4E4E4E","neutral-50":"#686868","neutral-60":"#8E8E8E","neutral-70":"#AFAFB0","neutral-80":"#C7CACA","neutral-90":"#DDE1E2","neutral-95":"#EDEFEF","neutral-100":"#F9F9F9","success-10":"#031B15","success-20":"#082D24","success-30":"#094134","success-40":"#0D5947","success-50":"#10755E","success-60":"#16A181","success-70":"#1EC59D","success-80":"#6FDDC2","success-90":"#AFECDE","success-95":"#D5F5ED","success-100":"#F1FCF9","warning-10":"#1F1500","warning-20":"#362500","warning-30":"#4D3501","warning-40":"#6A4801","warning-50":"#8B6001","warning-60":"#BF8301","warning-70":"#EAA102","warning-80":"#FFBF34","warning-90":"#FFDC8F","warning-95":"#FFEDC7","warning-100":"#FFF8EA","error-10":"#270F10","error-20":"#441B1B","error-30":"#612627","error-40":"#853535","error-50":"#AF4546","error-60":"#EC6162","error-70":"#F29696","error-80":"#F7BBBC","error-90":"#FAD8D8","error-95":"#FCEAEA","error-100":"#FEF7F7","info-10":"#0F1627","info-20":"#1B2745","info-30":"#273763","info-40":"#354D88","info-50":"#4665B3","info-60":"#618AF6","info-70":"#8DADFF","info-80":"#B4C9FF","info-90":"#D3DFFF","info-95":"#E9EFFF","info-100":"#F5F8FF",white:"#FFFFFF",black:"#000000","primary-inverse":"#FEAB10"},Kr={"brand-10":"#0E113C","brand-20":"#191E67","brand-30":"#232A92","brand-40":"#233FC2","brand-50":"#135CEA","brand-60":"#378FFB","brand-70":"#71B3FD","brand-80":"#9DCFFE","brand-90":"#C1E5FF","brand-95":"#DCF1FF","brand-100":"#F3FAFF","primary-10":"#0E113C","primary-20":"#191E67","primary-30":"#232A92","primary-40":"#233FC2","primary-50":"#135CEA","primary-60":"#378FFB","primary-70":"#71B3FD","primary-80":"#9DCFFE","primary-90":"#C1E5FF","primary-95":"#DCF1FF","primary-100":"#F3FAFF","secondary-10":"#34001F","secondary-20":"#540033","secondary-30":"#730045","secondary-40":"#9D0054","secondary-50":"#C61C64","secondary-60":"#DE6792","secondary-70":"#EB96B6","secondary-80":"#F5BAD2","secondary-90":"#FCD5E3","secondary-95":"#FDEBF1","secondary-100":"#FDF6F9","neutral-10":"#161616","neutral-20":"#282828","neutral-30":"#393939","neutral-40":"#4E4E4E","neutral-50":"#686868","neutral-60":"#8E8E8E","neutral-70":"#AFAFB0","neutral-80":"#C7CACA","neutral-90":"#DDE1E2","neutral-95":"#EDEFEF","neutral-100":"#F9F9F9","success-10":"#081A0F","success-20":"#0E2D1B","success-30":"#154126","success-40":"#1C5A34","success-50":"#257645","success-60":"#44A068","success-70":"#64C189","success-80":"#80DCA5","success-90":"#B4ECCB","success-95":"#D5F6E2","success-100":"#EFFCF4","warning-10":"#221302","warning-20":"#3B2204","warning-30":"#543106","warning-40":"#744408","warning-50":"#98590C","warning-60":"#D07A13","warning-70":"#E4A244","warning-80":"#F5C26C","warning-90":"#FADBA6","warning-95":"#FCECD4","warning-100":"#FDF7F0","error-10":"#330505","error-20":"#550808","error-30":"#750C0C","error-40":"#9E130F","error-50":"#CB2213","error-60":"#DE6C6C","error-70":"#E89B9B","error-80":"#EFBEBE","error-90":"#F5D9D9","error-95":"#F9ECEC","error-100":"#FCF7F7","info-10":"#021824","info-20":"#032B3F","info-30":"#053D59","info-40":"#065478","info-50":"#176E9B","info-60":"#5296BE","info-70":"#82B5DA","info-80":"#ACCFE7","info-90":"#CCE3F1","info-95":"#E3F1F8","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000","primary-inverse":"#FEAB10"},Jr={collections:{lifesg:Ur,bookingsg:Vr,rbs:Qr,mylegacy:qr,ccube:Yr,oneservice:Gr,pa:Zr,a11yplayground:Xr,supportgowhere:Kr},defaultValue:"lifesg"},en={collections:{lifesg:Ur,bookingsg:Vr,rbs:Qr,mylegacy:qr,ccube:Yr,oneservice:Gr,pa:Zr,a11yplayground:Xr,supportgowhere:Kr},defaultValue:"lifesg"},tn=e=>t=>{var r;const n=t.theme,o="dark"===(null==n?void 0:n.colourMode),i=jr(o?en:Jr,null==n?void 0:n.colourScheme),s=o?"primitiveColourDark":"primitiveColour",a=null===(r=null==n?void 0:n.overrides)||void 0===r?void 0:r[s];return a?Hr(i,e,a):i[e]},rn={"brand-10":tn("brand-10"),"brand-20":tn("brand-20"),"brand-30":tn("brand-30"),"brand-40":tn("brand-40"),"brand-50":tn("brand-50"),"brand-60":tn("brand-60"),"brand-70":tn("brand-70"),"brand-80":tn("brand-80"),"brand-90":tn("brand-90"),"brand-95":tn("brand-95"),"brand-100":tn("brand-100"),"primary-10":tn("primary-10"),"primary-20":tn("primary-20"),"primary-30":tn("primary-30"),"primary-40":tn("primary-40"),"primary-50":tn("primary-50"),"primary-60":tn("primary-60"),"primary-70":tn("primary-70"),"primary-80":tn("primary-80"),"primary-90":tn("primary-90"),"primary-95":tn("primary-95"),"primary-100":tn("primary-100"),"secondary-10":tn("secondary-10"),"secondary-20":tn("secondary-20"),"secondary-30":tn("secondary-30"),"secondary-40":tn("secondary-40"),"secondary-50":tn("secondary-50"),"secondary-60":tn("secondary-60"),"secondary-70":tn("secondary-70"),"secondary-80":tn("secondary-80"),"secondary-90":tn("secondary-90"),"secondary-95":tn("secondary-95"),"secondary-100":tn("secondary-100"),"neutral-10":tn("neutral-10"),"neutral-20":tn("neutral-20"),"neutral-30":tn("neutral-30"),"neutral-40":tn("neutral-40"),"neutral-50":tn("neutral-50"),"neutral-60":tn("neutral-60"),"neutral-70":tn("neutral-70"),"neutral-80":tn("neutral-80"),"neutral-90":tn("neutral-90"),"neutral-95":tn("neutral-95"),"neutral-100":tn("neutral-100"),"success-10":tn("success-10"),"success-20":tn("success-20"),"success-30":tn("success-30"),"success-40":tn("success-40"),"success-50":tn("success-50"),"success-60":tn("success-60"),"success-70":tn("success-70"),"success-80":tn("success-80"),"success-90":tn("success-90"),"success-95":tn("success-95"),"success-100":tn("success-100"),"warning-10":tn("warning-10"),"warning-20":tn("warning-20"),"warning-30":tn("warning-30"),"warning-40":tn("warning-40"),"warning-50":tn("warning-50"),"warning-60":tn("warning-60"),"warning-70":tn("warning-70"),"warning-80":tn("warning-80"),"warning-90":tn("warning-90"),"warning-95":tn("warning-95"),"warning-100":tn("warning-100"),"error-10":tn("error-10"),"error-20":tn("error-20"),"error-30":tn("error-30"),"error-40":tn("error-40"),"error-50":tn("error-50"),"error-60":tn("error-60"),"error-70":tn("error-70"),"error-80":tn("error-80"),"error-90":tn("error-90"),"error-95":tn("error-95"),"error-100":tn("error-100"),"info-10":tn("info-10"),"info-20":tn("info-20"),"info-30":tn("info-30"),"info-40":tn("info-40"),"info-50":tn("info-50"),"info-60":tn("info-60"),"info-70":tn("info-70"),"info-80":tn("info-80"),"info-90":tn("info-90"),"info-95":tn("info-95"),"info-100":tn("info-100"),white:tn("white"),black:tn("black"),"primary-inverse":tn("primary-inverse")},nn={text:tn("neutral-20"),"text-subtle":tn("neutral-30"),"text-subtler":tn("neutral-50"),"text-subtlest":tn("neutral-60"),"text-primary":tn("primary-50"),"text-hover":tn("primary-40"),"text-selected":tn("primary-50"),"text-selected-hover":tn("primary-40"),"text-disabled":tn("neutral-50"),"text-disabled-subtle":tn("neutral-60"),"text-disabled-subtlest":tn("neutral-80"),"text-selected-disabled":tn("neutral-20"),"text-success":tn("success-40"),"text-warning":tn("warning-40"),"text-error":tn("error-40"),"text-info":tn("info-40"),"text-inverse":tn("white"),icon:tn("neutral-50"),"icon-subtle":tn("neutral-60"),"icon-strongest":tn("neutral-20"),"icon-primary":tn("primary-50"),"icon-primary-subtle":tn("primary-60"),"icon-primary-subtlest":tn("primary-70"),"icon-hover":tn("primary-40"),"icon-selected":tn("primary-50"),"icon-selected-hover":tn("primary-40"),"icon-disabled":tn("neutral-50"),"icon-disabled-subtle":tn("neutral-60"),"icon-selected-disabled":tn("neutral-60"),"icon-success":tn("success-50"),"icon-warning":tn("warning-60"),"icon-error":tn("error-50"),"icon-error-strong":tn("error-40"),"icon-info":tn("info-50"),"icon-inverse":tn("white"),"icon-primary-inverse":tn("primary-inverse"),border:tn("neutral-90"),"border-strong":tn("neutral-70"),"border-stronger":tn("neutral-50"),"border-primary":tn("primary-50"),"border-primary-subtle":tn("primary-60"),"border-hover":tn("primary-90"),"border-hover-strong":tn("primary-60"),"border-selected":tn("primary-50"),"border-selected-subtle":tn("primary-70"),"border-selected-subtlest":tn("primary-90"),"border-selected-hover":tn("primary-40"),"border-focus":tn("primary-60"),"border-focus-strong":tn("primary-50"),"border-disabled":tn("neutral-90"),"border-selected-disabled":tn("neutral-70"),"border-success":tn("success-60"),"border-warning":tn("warning-60"),"border-error":tn("error-60"),"border-error-focus":tn("error-60"),"border-error-focus-strong":tn("error-40"),"border-error-strong":tn("error-40"),"border-info":tn("info-60"),bg:tn("white"),"bg-strong":tn("neutral-100"),"bg-stronger":tn("neutral-95"),"bg-strongest":tn("neutral-90"),"bg-hover":tn("primary-95"),"bg-hover-strong":tn("primary-90"),"bg-hover-subtle":tn("primary-100"),"bg-hover-neutral":tn("neutral-100"),"bg-hover-neutral-strong":tn("neutral-90"),"bg-selected":tn("primary-95"),"bg-selected-hover":tn("primary-90"),"bg-selected-strong":tn("primary-90"),"bg-selected-stronger":tn("primary-70"),"bg-selected-strongest":tn("primary-50"),"bg-selected-strongest-hover":tn("primary-40"),"bg-disabled":tn("neutral-95"),"bg-selected-disabled":tn("neutral-95"),"bg-selected-stronger-disabled":tn("neutral-70"),"bg-success":tn("success-100"),"bg-success-hover":tn("success-95"),"bg-success-strong":tn("success-50"),"bg-success-strong-hover":tn("success-40"),"bg-warning":tn("warning-100"),"bg-warning-hover":tn("warning-95"),"bg-warning-strong":tn("warning-50"),"bg-warning-strong-hover":tn("warning-40"),"bg-info":tn("info-100"),"bg-info-hover":tn("info-95"),"bg-info-strong":tn("info-50"),"bg-info-strong-hover":tn("info-40"),"bg-error":tn("error-100"),"bg-error-hover":tn("error-95"),"bg-error-strong":tn("error-50"),"bg-error-strong-hover":tn("error-40"),"bg-inverse":tn("neutral-20"),"bg-inverse-subtle":tn("neutral-30"),"bg-inverse-subtler":tn("neutral-50"),"bg-inverse-subtlest":tn("neutral-60"),"bg-inverse-hover":tn("neutral-40"),"bg-primary":tn("primary-50"),"bg-primary-subtle":tn("primary-60"),"bg-primary-subtler":tn("primary-95"),"bg-primary-subtlest":tn("primary-100"),"bg-available":"#6DD0A1","bg-primary-hover":tn("primary-40"),"bg-primary-subtlest-hover":tn("primary-90"),"bg-primary-subtlest-selected":tn("primary-90"),"overlay-strong":"rgba(40, 40, 40, 0.85)","overlay-subtle":"rgba(40, 40, 40, 0.20)",hyperlink:tn("primary-50"),"hyperlink-hover":tn("primary-40"),"hyperlink-visited":tn("primary-40"),"hyperlink-inverse":tn("primary-inverse"),"focus-ring":tn("primary-50"),"focus-ring-inverse":tn("white")},on={text:tn("neutral-100"),"text-subtle":tn("neutral-80"),"text-subtler":tn("neutral-60"),"text-subtlest":tn("neutral-50"),"text-primary":tn("primary-60"),"text-hover":tn("primary-70"),"text-selected":tn("primary-60"),"text-selected-hover":tn("primary-70"),"text-disabled":tn("neutral-60"),"text-disabled-subtle":tn("neutral-50"),"text-disabled-subtlest":tn("neutral-30"),"text-selected-disabled":tn("neutral-90"),"text-success":tn("success-70"),"text-warning":tn("warning-70"),"text-error":tn("error-70"),"text-info":tn("info-70"),"text-inverse":tn("black"),icon:tn("neutral-60"),"icon-subtle":tn("neutral-50"),"icon-strongest":tn("neutral-90"),"icon-primary":tn("primary-60"),"icon-primary-subtle":tn("primary-50"),"icon-primary-subtlest":tn("primary-40"),"icon-hover":tn("primary-70"),"icon-selected":tn("primary-60"),"icon-selected-hover":tn("primary-70"),"icon-disabled":tn("neutral-60"),"icon-disabled-subtle":tn("neutral-50"),"icon-selected-disabled":tn("neutral-50"),"icon-success":tn("success-60"),"icon-warning":tn("warning-50"),"icon-error":tn("error-60"),"icon-error-strong":tn("error-70"),"icon-info":tn("info-60"),"icon-inverse":tn("black"),"icon-primary-inverse":tn("primary-inverse"),border:tn("neutral-20"),"border-strong":tn("neutral-40"),"border-stronger":tn("neutral-60"),"border-primary":tn("primary-60"),"border-primary-subtle":tn("primary-50"),"border-hover":tn("primary-20"),"border-hover-strong":tn("primary-50"),"border-selected":tn("primary-60"),"border-selected-subtle":tn("primary-40"),"border-selected-subtlest":tn("primary-20"),"border-selected-hover":tn("primary-70"),"border-focus":tn("primary-50"),"border-focus-strong":tn("primary-60"),"border-disabled":tn("neutral-20"),"border-selected-disabled":tn("neutral-40"),"border-success":tn("success-50"),"border-warning":tn("warning-50"),"border-error":tn("error-50"),"border-error-focus":tn("error-50"),"border-error-focus-strong":tn("error-70"),"border-error-strong":tn("error-70"),"border-info":tn("info-50"),bg:tn("black"),"bg-strong":tn("neutral-10"),"bg-stronger":tn("neutral-20"),"bg-strongest":tn("neutral-20"),"bg-hover":tn("primary-20"),"bg-hover-strong":tn("primary-20"),"bg-hover-subtle":tn("primary-10"),"bg-hover-neutral":tn("neutral-10"),"bg-hover-neutral-strong":tn("neutral-20"),"bg-selected":tn("primary-20"),"bg-selected-hover":tn("primary-20"),"bg-selected-strong":tn("primary-20"),"bg-selected-stronger":tn("primary-40"),"bg-selected-strongest":tn("primary-60"),"bg-selected-strongest-hover":tn("primary-70"),"bg-disabled":tn("neutral-20"),"bg-selected-disabled":tn("neutral-20"),"bg-selected-stronger-disabled":tn("neutral-40"),"bg-success":tn("success-10"),"bg-success-hover":tn("success-20"),"bg-success-strong":tn("success-60"),"bg-success-strong-hover":tn("success-70"),"bg-warning":tn("warning-10"),"bg-warning-hover":tn("warning-20"),"bg-warning-strong":tn("warning-60"),"bg-warning-strong-hover":tn("warning-70"),"bg-info":tn("info-10"),"bg-info-hover":tn("info-20"),"bg-info-strong":tn("info-60"),"bg-info-strong-hover":tn("info-70"),"bg-error":tn("error-10"),"bg-error-hover":tn("error-20"),"bg-error-strong":tn("error-60"),"bg-error-strong-hover":tn("error-70"),"bg-inverse":tn("neutral-90"),"bg-inverse-subtle":tn("neutral-80"),"bg-inverse-subtler":tn("neutral-60"),"bg-inverse-subtlest":tn("neutral-50"),"bg-inverse-hover":tn("neutral-70"),"bg-primary":tn("primary-60"),"bg-primary-subtle":tn("primary-50"),"bg-primary-subtler":tn("primary-20"),"bg-primary-subtlest":tn("primary-10"),"bg-available":"#185339","bg-primary-hover":tn("primary-70"),"bg-primary-subtlest-hover":tn("primary-20"),"bg-primary-subtlest-selected":tn("primary-20"),"overlay-strong":"rgba(78, 78, 78, 0.80)","overlay-subtle":"rgba(78, 78, 78, 0.50)",hyperlink:tn("primary-60"),"hyperlink-hover":tn("primary-70"),"hyperlink-visited":tn("primary-70"),"hyperlink-inverse":tn("primary-inverse"),"focus-ring":tn("primary-60"),"focus-ring-inverse":tn("black")},sn={text:tn("neutral-30"),"text-subtle":tn("neutral-40"),"text-subtler":tn("neutral-50"),"text-subtlest":tn("neutral-70"),"text-primary":tn("neutral-10"),"text-hover":tn("neutral-70"),"text-selected":tn("neutral-20"),"text-selected-hover":tn("neutral-10"),"text-disabled":tn("neutral-50"),"text-disabled-subtle":tn("neutral-60"),"text-disabled-subtlest":tn("neutral-80"),"text-selected-disabled":tn("neutral-40"),"text-success":tn("success-40"),"text-warning":tn("warning-40"),"text-error":tn("brand-30"),"text-info":tn("neutral-40"),"text-inverse":tn("neutral-100"),icon:tn("neutral-40"),"icon-subtle":tn("neutral-50"),"icon-strongest":tn("neutral-10"),"icon-primary":tn("neutral-10"),"icon-primary-subtle":tn("neutral-30"),"icon-primary-subtlest":tn("neutral-60"),"icon-hover":tn("neutral-70"),"icon-selected":tn("brand-20"),"icon-selected-hover":tn("brand-10"),"icon-disabled":tn("neutral-50"),"icon-disabled-subtle":tn("neutral-60"),"icon-selected-disabled":tn("neutral-40"),"icon-success":tn("success-40"),"icon-warning":tn("warning-60"),"icon-error":tn("brand-30"),"icon-error-strong":tn("brand-10"),"icon-info":tn("neutral-40"),"icon-inverse":tn("neutral-100"),"icon-primary-inverse":"#F9B371",border:tn("neutral-90"),"border-strong":tn("neutral-30"),"border-stronger":tn("neutral-20"),"border-primary":tn("neutral-40"),"border-primary-subtle":tn("neutral-60"),"border-hover":tn("neutral-80"),"border-hover-strong":tn("neutral-10"),"border-selected":tn("brand-20"),"border-selected-subtle":tn("neutral-40"),"border-selected-subtlest":tn("neutral-70"),"border-selected-hover":tn("neutral-10"),"border-focus":tn("neutral-20"),"border-focus-strong":tn("neutral-10"),"border-disabled":tn("neutral-90"),"border-selected-disabled":tn("neutral-80"),"border-success":tn("success-40"),"border-warning":tn("warning-60"),"border-error":tn("brand-30"),"border-error-focus":tn("brand-20"),"border-error-focus-strong":tn("brand-10"),"border-error-strong":tn("brand-20"),"border-info":tn("neutral-40"),bg:tn("neutral-100"),"bg-strong":tn("neutral-95"),"bg-stronger":tn("neutral-90"),"bg-strongest":tn("neutral-80"),"bg-hover":tn("brand-90"),"bg-hover-strong":tn("brand-80"),"bg-hover-subtle":tn("neutral-90"),"bg-hover-neutral":tn("neutral-90"),"bg-hover-neutral-strong":tn("neutral-90"),"bg-selected":tn("brand-100"),"bg-selected-hover":tn("brand-30"),"bg-selected-strong":tn("brand-50"),"bg-selected-stronger":tn("brand-40"),"bg-selected-strongest":tn("brand-20"),"bg-selected-strongest-hover":tn("brand-10"),"bg-disabled":tn("neutral-90"),"bg-selected-disabled":tn("neutral-90"),"bg-selected-stronger-disabled":tn("neutral-80"),"bg-success":tn("success-100"),"bg-success-hover":tn("success-95"),"bg-success-strong":tn("success-50"),"bg-success-strong-hover":tn("success-40"),"bg-warning":tn("warning-100"),"bg-warning-hover":tn("warning-95"),"bg-warning-strong":tn("warning-50"),"bg-warning-strong-hover":tn("warning-40"),"bg-info":tn("neutral-95"),"bg-info-hover":tn("info-95"),"bg-info-strong":tn("info-50"),"bg-info-strong-hover":tn("info-40"),"bg-error":tn("brand-100"),"bg-error-hover":tn("error-95"),"bg-error-strong":tn("error-50"),"bg-error-strong-hover":tn("error-40"),"bg-inverse":tn("neutral-40"),"bg-inverse-subtle":tn("neutral-60"),"bg-inverse-subtler":tn("neutral-70"),"bg-inverse-subtlest":tn("neutral-80"),"bg-inverse-hover":tn("neutral-30"),"bg-primary":tn("brand-20"),"bg-primary-subtle":tn("brand-60"),"bg-primary-subtler":tn("brand-80"),"bg-primary-subtlest":tn("brand-100"),"bg-available":tn("success-60"),"bg-primary-hover":tn("brand-10"),"bg-primary-subtlest-hover":tn("brand-80"),"bg-primary-subtlest-selected":tn("brand-40"),"overlay-strong":"rgba(25, 25, 25, 0.95)","overlay-subtle":"rgba(25, 25, 25, 0.20)",hyperlink:tn("neutral-10"),"hyperlink-hover":tn("neutral-40"),"hyperlink-visited":tn("neutral-50"),"hyperlink-inverse":"#F8AE68","focus-ring":tn("primary-50"),"focus-ring-inverse":tn("white")},an={text:tn("neutral-20"),"text-subtle":tn("neutral-30"),"text-subtler":tn("neutral-50"),"text-subtlest":tn("neutral-60"),"text-primary":tn("primary-50"),"text-hover":tn("primary-40"),"text-selected":tn("primary-50"),"text-selected-hover":tn("primary-40"),"text-disabled":tn("neutral-50"),"text-disabled-subtle":tn("neutral-60"),"text-disabled-subtlest":tn("neutral-80"),"text-selected-disabled":tn("neutral-20"),"text-success":tn("success-40"),"text-warning":tn("warning-40"),"text-error":tn("error-40"),"text-info":tn("info-40"),"text-inverse":tn("white"),icon:tn("neutral-50"),"icon-subtle":tn("neutral-60"),"icon-strongest":tn("neutral-20"),"icon-primary":tn("primary-50"),"icon-primary-subtle":tn("primary-60"),"icon-primary-subtlest":tn("primary-70"),"icon-hover":tn("primary-40"),"icon-selected":tn("primary-50"),"icon-selected-hover":tn("primary-40"),"icon-disabled":tn("neutral-50"),"icon-disabled-subtle":tn("neutral-60"),"icon-selected-disabled":tn("neutral-60"),"icon-success":tn("success-50"),"icon-warning":tn("warning-60"),"icon-error":tn("error-50"),"icon-error-strong":tn("error-40"),"icon-info":tn("info-50"),"icon-inverse":tn("white"),"icon-primary-inverse":tn("primary-inverse"),border:tn("neutral-90"),"border-strong":tn("neutral-70"),"border-stronger":tn("neutral-50"),"border-primary":tn("primary-50"),"border-primary-subtle":tn("primary-60"),"border-hover":tn("primary-90"),"border-hover-strong":tn("primary-60"),"border-selected":tn("primary-50"),"border-selected-subtle":tn("primary-70"),"border-selected-subtlest":tn("primary-90"),"border-selected-hover":tn("primary-40"),"border-focus":tn("primary-60"),"border-focus-strong":tn("primary-50"),"border-disabled":tn("neutral-90"),"border-selected-disabled":tn("neutral-70"),"border-success":tn("success-60"),"border-warning":tn("warning-60"),"border-error":tn("error-60"),"border-error-focus":tn("error-60"),"border-error-focus-strong":tn("error-40"),"border-error-strong":tn("error-40"),"border-info":tn("info-60"),bg:tn("white"),"bg-strong":tn("neutral-100"),"bg-stronger":tn("neutral-95"),"bg-strongest":tn("neutral-90"),"bg-hover":tn("primary-95"),"bg-hover-strong":tn("primary-90"),"bg-hover-subtle":tn("primary-100"),"bg-hover-neutral":tn("neutral-100"),"bg-hover-neutral-strong":tn("neutral-90"),"bg-selected":tn("primary-95"),"bg-selected-hover":tn("primary-90"),"bg-selected-strong":tn("primary-90"),"bg-selected-stronger":tn("primary-70"),"bg-selected-strongest":tn("primary-50"),"bg-selected-strongest-hover":tn("primary-40"),"bg-disabled":tn("neutral-95"),"bg-selected-disabled":tn("neutral-95"),"bg-selected-stronger-disabled":tn("neutral-70"),"bg-success":tn("success-100"),"bg-success-hover":tn("success-95"),"bg-success-strong":tn("success-50"),"bg-success-strong-hover":tn("success-40"),"bg-warning":tn("warning-100"),"bg-warning-hover":tn("warning-95"),"bg-warning-strong":tn("warning-50"),"bg-warning-strong-hover":tn("warning-40"),"bg-info":tn("info-100"),"bg-info-hover":tn("info-95"),"bg-info-strong":tn("info-50"),"bg-info-strong-hover":tn("info-40"),"bg-error":tn("error-100"),"bg-error-hover":tn("error-95"),"bg-error-strong":tn("error-50"),"bg-error-strong-hover":tn("error-40"),"bg-inverse":tn("neutral-20"),"bg-inverse-subtle":tn("neutral-30"),"bg-inverse-subtler":tn("neutral-50"),"bg-inverse-subtlest":tn("neutral-60"),"bg-inverse-hover":tn("neutral-40"),"bg-primary":tn("primary-50"),"bg-primary-subtle":tn("primary-60"),"bg-primary-subtler":tn("primary-95"),"bg-primary-subtlest":tn("primary-100"),"bg-available":"#6DD0A1","bg-primary-hover":tn("primary-40"),"bg-primary-subtlest-hover":tn("primary-90"),"bg-primary-subtlest-selected":tn("primary-90"),"overlay-strong":"rgba(40, 40, 40, 0.85)","overlay-subtle":"rgba(40, 40, 40, 0.20)",hyperlink:tn("primary-50"),"hyperlink-hover":tn("primary-40"),"hyperlink-visited":tn("primary-40"),"hyperlink-inverse":tn("primary-inverse"),"focus-ring":tn("primary-50"),"focus-ring-inverse":tn("white")},ln={text:tn("neutral-100"),"text-subtle":tn("neutral-80"),"text-subtler":tn("neutral-60"),"text-subtlest":tn("neutral-50"),"text-primary":tn("primary-60"),"text-hover":tn("primary-70"),"text-selected":tn("primary-60"),"text-selected-hover":tn("primary-70"),"text-disabled":tn("neutral-60"),"text-disabled-subtle":tn("neutral-50"),"text-disabled-subtlest":tn("neutral-30"),"text-selected-disabled":tn("neutral-90"),"text-success":tn("success-70"),"text-warning":tn("warning-70"),"text-error":tn("error-70"),"text-info":tn("info-70"),"text-inverse":tn("black"),icon:tn("neutral-60"),"icon-subtle":tn("neutral-50"),"icon-strongest":tn("neutral-90"),"icon-primary":tn("primary-60"),"icon-primary-subtle":tn("primary-50"),"icon-primary-subtlest":tn("primary-40"),"icon-hover":tn("primary-70"),"icon-selected":tn("primary-60"),"icon-selected-hover":tn("primary-70"),"icon-disabled":tn("neutral-60"),"icon-disabled-subtle":tn("neutral-50"),"icon-selected-disabled":tn("neutral-50"),"icon-success":tn("success-60"),"icon-warning":tn("warning-50"),"icon-error":tn("error-60"),"icon-error-strong":tn("error-70"),"icon-info":tn("info-60"),"icon-inverse":tn("black"),"icon-primary-inverse":tn("primary-inverse"),border:tn("neutral-20"),"border-strong":tn("neutral-40"),"border-stronger":tn("neutral-60"),"border-primary":tn("primary-60"),"border-primary-subtle":tn("primary-50"),"border-hover":tn("primary-20"),"border-hover-strong":tn("primary-50"),"border-selected":tn("primary-60"),"border-selected-subtle":tn("primary-40"),"border-selected-subtlest":tn("primary-20"),"border-selected-hover":tn("primary-70"),"border-focus":tn("primary-50"),"border-focus-strong":tn("primary-60"),"border-disabled":tn("neutral-20"),"border-selected-disabled":tn("neutral-40"),"border-success":tn("success-50"),"border-warning":tn("warning-50"),"border-error":tn("error-50"),"border-error-focus":tn("error-50"),"border-error-focus-strong":tn("error-70"),"border-error-strong":tn("error-70"),"border-info":tn("info-50"),bg:tn("black"),"bg-strong":tn("neutral-10"),"bg-stronger":tn("neutral-20"),"bg-strongest":tn("neutral-20"),"bg-hover":tn("primary-20"),"bg-hover-strong":tn("primary-20"),"bg-hover-subtle":tn("primary-10"),"bg-hover-neutral":tn("neutral-10"),"bg-hover-neutral-strong":tn("neutral-20"),"bg-selected":tn("primary-20"),"bg-selected-hover":tn("primary-20"),"bg-selected-strong":tn("primary-20"),"bg-selected-stronger":tn("primary-40"),"bg-selected-strongest":tn("primary-60"),"bg-selected-strongest-hover":tn("primary-70"),"bg-disabled":tn("neutral-20"),"bg-selected-disabled":tn("neutral-20"),"bg-selected-stronger-disabled":tn("neutral-40"),"bg-success":tn("success-10"),"bg-success-hover":tn("success-20"),"bg-success-strong":tn("success-60"),"bg-success-strong-hover":tn("success-70"),"bg-warning":tn("warning-10"),"bg-warning-hover":tn("warning-20"),"bg-warning-strong":tn("warning-60"),"bg-warning-strong-hover":tn("warning-70"),"bg-info":tn("info-10"),"bg-info-hover":tn("info-20"),"bg-info-strong":tn("info-60"),"bg-info-strong-hover":tn("info-70"),"bg-error":tn("error-10"),"bg-error-hover":tn("error-20"),"bg-error-strong":tn("error-60"),"bg-error-strong-hover":tn("error-70"),"bg-inverse":tn("neutral-90"),"bg-inverse-subtle":tn("neutral-80"),"bg-inverse-subtler":tn("neutral-60"),"bg-inverse-subtlest":tn("neutral-50"),"bg-inverse-hover":tn("neutral-70"),"bg-primary":tn("primary-60"),"bg-primary-subtle":tn("primary-50"),"bg-primary-subtler":tn("primary-20"),"bg-primary-subtlest":tn("primary-10"),"bg-available":"#185339","bg-primary-hover":tn("primary-70"),"bg-primary-subtlest-hover":tn("primary-20"),"bg-primary-subtlest-selected":tn("primary-20"),"overlay-strong":"rgba(78, 78, 78, 0.80)","overlay-subtle":"rgba(78, 78, 78, 0.50)",hyperlink:tn("primary-60"),"hyperlink-hover":tn("primary-70"),"hyperlink-visited":tn("primary-70"),"hyperlink-inverse":tn("primary-inverse"),"focus-ring":tn("primary-60"),"focus-ring-inverse":tn("black")},dn={collections:{lifesg:nn,bookingsg:nn,rbs:nn,mylegacy:nn,ccube:nn,oneservice:nn,pa:sn,a11yplayground:an,supportgowhere:nn},defaultValue:"lifesg"},cn={collections:{lifesg:on,bookingsg:on,rbs:on,mylegacy:on,ccube:on,oneservice:on,pa:on,a11yplayground:ln,supportgowhere:on},defaultValue:"lifesg"},un=e=>t=>{var r;const n=t.theme,o="dark"===(null==n?void 0:n.colourMode),i=jr(o?cn:dn,null==n?void 0:n.colourScheme),s=o?"semanticColourDark":"semanticColour",a=null===(r=null==n?void 0:n.overrides)||void 0===r?void 0:r[s],l=a?Hr(i,e,a):i[e];return"function"==typeof l?l(t):l},hn={text:un("text"),"text-subtle":un("text-subtle"),"text-subtler":un("text-subtler"),"text-subtlest":un("text-subtlest"),"text-primary":un("text-primary"),"text-hover":un("text-hover"),"text-selected":un("text-selected"),"text-selected-hover":un("text-selected-hover"),"text-disabled":un("text-disabled"),"text-disabled-subtle":un("text-disabled-subtle"),"text-disabled-subtlest":un("text-disabled-subtlest"),"text-selected-disabled":un("text-selected-disabled"),"text-success":un("text-success"),"text-warning":un("text-warning"),"text-error":un("text-error"),"text-info":un("text-info"),"text-inverse":un("text-inverse"),icon:un("icon"),"icon-subtle":un("icon-subtle"),"icon-strongest":un("icon-strongest"),"icon-primary":un("icon-primary"),"icon-primary-subtle":un("icon-primary-subtle"),"icon-primary-subtlest":un("icon-primary-subtlest"),"icon-hover":un("icon-hover"),"icon-selected":un("icon-selected"),"icon-selected-hover":un("icon-selected-hover"),"icon-disabled":un("icon-disabled"),"icon-disabled-subtle":un("icon-disabled-subtle"),"icon-selected-disabled":un("icon-selected-disabled"),"icon-success":un("icon-success"),"icon-warning":un("icon-warning"),"icon-error":un("icon-error"),"icon-error-strong":un("icon-error-strong"),"icon-info":un("icon-info"),"icon-inverse":un("icon-inverse"),"icon-primary-inverse":un("icon-primary-inverse"),border:un("border"),"border-strong":un("border-strong"),"border-stronger":un("border-stronger"),"border-primary":un("border-primary"),"border-primary-subtle":un("border-primary-subtle"),"border-hover":un("border-hover"),"border-hover-strong":un("border-hover-strong"),"border-selected":un("border-selected"),"border-selected-subtle":un("border-selected-subtle"),"border-selected-subtlest":un("border-selected-subtlest"),"border-selected-hover":un("border-selected-hover"),"border-focus":un("border-focus"),"border-focus-strong":un("border-focus-strong"),"border-disabled":un("border-disabled"),"border-selected-disabled":un("border-selected-disabled"),"border-success":un("border-success"),"border-warning":un("border-warning"),"border-error":un("border-error"),"border-error-focus":un("border-error-focus"),"border-error-focus-strong":un("border-error-focus-strong"),"border-error-strong":un("border-error-strong"),"border-info":un("border-info"),bg:un("bg"),"bg-strong":un("bg-strong"),"bg-stronger":un("bg-stronger"),"bg-strongest":un("bg-strongest"),"bg-hover":un("bg-hover"),"bg-hover-strong":un("bg-hover-strong"),"bg-hover-subtle":un("bg-hover-subtle"),"bg-hover-neutral":un("bg-hover-neutral"),"bg-hover-neutral-strong":un("bg-hover-neutral-strong"),"bg-selected":un("bg-selected"),"bg-selected-hover":un("bg-selected-hover"),"bg-selected-strong":un("bg-selected-strong"),"bg-selected-stronger":un("bg-selected-stronger"),"bg-selected-strongest":un("bg-selected-strongest"),"bg-selected-strongest-hover":un("bg-selected-strongest-hover"),"bg-disabled":un("bg-disabled"),"bg-selected-disabled":un("bg-selected-disabled"),"bg-selected-stronger-disabled":un("bg-selected-stronger-disabled"),"bg-success":un("bg-success"),"bg-success-hover":un("bg-success-hover"),"bg-success-strong":un("bg-success-strong"),"bg-success-strong-hover":un("bg-success-strong-hover"),"bg-warning":un("bg-warning"),"bg-warning-hover":un("bg-warning-hover"),"bg-warning-strong":un("bg-warning-strong"),"bg-warning-strong-hover":un("bg-warning-strong-hover"),"bg-info":un("bg-info"),"bg-info-hover":un("bg-info-hover"),"bg-info-strong":un("bg-info-strong"),"bg-info-strong-hover":un("bg-info-strong-hover"),"bg-error":un("bg-error"),"bg-error-hover":un("bg-error-hover"),"bg-error-strong":un("bg-error-strong"),"bg-error-strong-hover":un("bg-error-strong-hover"),"bg-inverse":un("bg-inverse"),"bg-inverse-subtle":un("bg-inverse-subtle"),"bg-inverse-subtler":un("bg-inverse-subtler"),"bg-inverse-subtlest":un("bg-inverse-subtlest"),"bg-inverse-hover":un("bg-inverse-hover"),"bg-primary":un("bg-primary"),"bg-primary-subtle":un("bg-primary-subtle"),"bg-primary-subtler":un("bg-primary-subtler"),"bg-primary-subtlest":un("bg-primary-subtlest"),"bg-available":un("bg-available"),"bg-primary-hover":un("bg-primary-hover"),"bg-primary-subtlest-hover":un("bg-primary-subtlest-hover"),"bg-primary-subtlest-selected":un("bg-primary-subtlest-selected"),"overlay-strong":un("overlay-strong"),"overlay-subtle":un("overlay-subtle"),hyperlink:un("hyperlink"),"hyperlink-hover":un("hyperlink-hover"),"hyperlink-visited":un("hyperlink-visited"),"hyperlink-inverse":un("hyperlink-inverse"),"focus-ring":un("focus-ring"),"focus-ring-inverse":un("focus-ring-inverse")},gn={collections:{default:{solid:e=>t=>{var r,n,o;const{thickness:i,radius:s,colour:a}=e||{},l=null!==(r="function"==typeof i?i(t):i)&&void 0!==r?r:Wr["width-010"](t),d=null!==(n="function"==typeof s?s(t):s)&&void 0!==n?n:0,c=null!==(o="function"==typeof a?a(t):a)&&void 0!==o?o:hn.border(t),u=Wr.solid;return $`
            border: ${l} ${u} ${c};
            border-radius: ${d};
        `},"dashed-default":e=>t=>{var r,n,o;const{thickness:i,radius:s,colour:a}=e||{},l=null!==(r="function"==typeof i?i(t):i)&&void 0!==r?r:Wr["width-010"](t),d=null!==(n="function"==typeof s?s(t):s)&&void 0!==n?n:0,c=null!==(o="function"==typeof a?a(t):a)&&void 0!==o?o:hn.border(t),u=encodeURIComponent(`<svg width='100%' height='100%' xmlns='http://www.w3.org/2000/svg'><rect width='100%' height='100%' fill='none' rx='${d}' ry='${d}' stroke='${c}' stroke-width='${l}' stroke-dasharray='4, 8' stroke-dashoffset='0' stroke-linecap='square'/></svg>`);return $`
            background-image: url("data:image/svg+xml,${u}");
            border-radius: ${d};
        `}}},defaultValue:"default"},mn=e=>1===e.length&&"theme"in e[0],pn=e=>(...t)=>r=>{const n=mn(t)?[]:t,o=mn(t)?t[0]:r,i=o.theme;return(0,jr(gn,null==i?void 0:i.borderScheme)[e])(...n)(o)},fn={solid:pn("solid"),"dashed-default":pn("dashed-default")},bn={collections:{default:{"xxs-min":0,"xxs-max":320,"xs-min":321,"xs-max":375,"sm-min":376,"sm-max":420,"md-min":421,"md-max":767,"lg-min":768,"lg-max":1023,"xl-min":1024,"xl-max":1440,"xxl-min":1441,"xxs-column":8,"xs-column":8,"sm-column":8,"md-column":8,"lg-column":12,"xl-column":12,"xxl-column":12,"xxs-gutter":16,"xs-gutter":16,"sm-gutter":16,"md-gutter":16,"lg-gutter":32,"xl-gutter":32,"xxl-gutter":32,"xxs-margin":24,"xs-margin":24,"sm-margin":24,"md-margin":24,"lg-margin":48,"xl-margin":48,"xxl-margin":48}},defaultValue:"default"},yn=e=>t=>{var r;const n=t.theme,o=jr(bn,null==n?void 0:n.breakpointScheme);let i;return i=(null===(r=null==n?void 0:n.overrides)||void 0===r?void 0:r.breakpoint)?Hr(o,e,n.overrides.breakpoint):o[e],i},vn={"xxs-min":yn("xxs-min"),"xxs-max":yn("xxs-max"),"xs-min":yn("xs-min"),"xs-max":yn("xs-max"),"sm-min":yn("sm-min"),"sm-max":yn("sm-max"),"md-min":yn("md-min"),"md-max":yn("md-max"),"lg-min":yn("lg-min"),"lg-max":yn("lg-max"),"xl-min":yn("xl-min"),"xl-max":yn("xl-max"),"xxl-min":yn("xxl-min"),"xxs-column":yn("xxs-column"),"xs-column":yn("xs-column"),"sm-column":yn("sm-column"),"md-column":yn("md-column"),"lg-column":yn("lg-column"),"xl-column":yn("xl-column"),"xxl-column":yn("xxl-column"),"xxs-gutter":yn("xxs-gutter"),"xs-gutter":yn("xs-gutter"),"sm-gutter":yn("sm-gutter"),"md-gutter":yn("md-gutter"),"lg-gutter":yn("lg-gutter"),"xl-gutter":yn("xl-gutter"),"xxl-gutter":yn("xxl-gutter"),"xxs-margin":yn("xxs-margin"),"xs-margin":yn("xs-margin"),"sm-margin":yn("sm-margin"),"md-margin":yn("md-margin"),"lg-margin":yn("lg-margin"),"xl-margin":yn("xl-margin"),"xxl-margin":yn("xxl-margin")},xn=e=>("max-width"===e?["xxs","xs","sm","md","lg","xl"]:["xxs","xs","sm","md","lg","xl","xxl"]).reduce(((t,r)=>(t[r]=((e,t)=>{const r=vn["max-width"===e?`${t}-max`:`${t}-min`];return t=>{const n=r(t);return`@media screen and (${e}: ${n}px)`}})(e,r),t)),{}),wn={MaxWidth:xn("max-width"),MinWidth:xn("min-width")},$n={collections:{default:{"heading-size-xxl":"3rem","heading-size-xl":"2.5rem","heading-size-lg":"2rem","heading-size-md":"1.625rem","heading-size-sm":"1.375rem","heading-size-xs":"1.125rem","heading-lh-xxl":"3.5rem","heading-lh-xl":"3rem","heading-lh-lg":"2.5rem","heading-lh-md":"2.25rem","heading-lh-sm":"1.75rem","heading-lh-xs":"1.625rem","heading-ls-xxl":"-0.056rem","heading-ls-xl":"-0.032rem","heading-ls-lg":"-0.032rem","heading-ls-md":"0rem","heading-ls-sm":"0rem","heading-ls-xs":"0rem","weight-light":"300","weight-regular":"400","weight-semibold":"600","weight-bold":"700","font-family":"Open Sans","body-size-baseline":"1.125rem","body-size-md":"1rem","body-size-sm":"0.875rem","body-size-xs":"0.75rem","body-lh-baseline":"1.625rem","body-lh-md":"1.5rem","body-lh-sm":"1.625rem","body-lh-xs":"1.25rem","body-ls-baseline":"0rem","body-ls-md":"0.014rem","body-ls-sm":"0.012rem","body-ls-xs":"0.012rem","form-label-size":"1rem","form-description-size":"0.875rem","form-label-lh":"1.5rem","form-description-lh":"1.6rem","form-label-ls":"0.014rem","form-description-ls":"0.012rem"},bookingsg:{"heading-size-xxl":"3rem","heading-size-xl":"2.5rem","heading-size-lg":"2rem","heading-size-md":"1.625rem","heading-size-sm":"1.375rem","heading-size-xs":"1.125rem","heading-lh-xxl":"3.5rem","heading-lh-xl":"3rem","heading-lh-lg":"2.5rem","heading-lh-md":"2.25rem","heading-lh-sm":"1.75rem","heading-lh-xs":"1.75rem","heading-ls-xxl":"-0.056rem","heading-ls-xl":"-0.032rem","heading-ls-lg":"-0.032rem","heading-ls-md":"0rem","heading-ls-sm":"0rem","heading-ls-xs":"0rem","weight-light":"300","weight-regular":"400","weight-semibold":"600","weight-bold":"700","font-family":"Plus Jakarta Sans","body-size-baseline":"1.125rem","body-size-md":"1rem","body-size-sm":"0.875rem","body-size-xs":"0.75rem","body-lh-baseline":"1.75rem","body-lh-md":"1.5rem","body-lh-sm":"1.6rem","body-lh-xs":"1.2rem","body-ls-baseline":"0rem","body-ls-md":"0.014rem","body-ls-sm":"0.012rem","body-ls-xs":"0.012rem","form-label-size":"1rem","form-description-size":"0.875rem","form-label-lh":"1.5rem","form-description-lh":"1.6rem","form-label-ls":"0.014rem","form-description-ls":"0.012rem"},pa:{"heading-size-xxl":"2.5rem","heading-size-xl":"2rem","heading-size-lg":"1.75rem","heading-size-md":"1.5rem","heading-size-sm":"1.25rem","heading-size-xs":"1rem","heading-lh-xxl":"3rem","heading-lh-xl":"2.5rem","heading-lh-lg":"2.25rem","heading-lh-md":"2rem","heading-lh-sm":"2rem","heading-lh-xs":"1.75rem","heading-ls-xxl":"-0.032rem","heading-ls-xl":"-0.032rem","heading-ls-lg":"0rem","heading-ls-md":"0rem","heading-ls-sm":"0rem","heading-ls-xs":"0rem","weight-light":"300","weight-regular":"400","weight-semibold":"600","weight-bold":"700","font-family":"Lato","body-size-baseline":"1rem","body-size-md":"0.875rem","body-size-sm":"0.75rem","body-size-xs":"0.625rem","body-lh-baseline":"1.75rem","body-lh-md":"1.5rem","body-lh-sm":"1.25rem","body-lh-xs":"1.25rem","body-ls-baseline":"0rem","body-ls-md":"0.014rem","body-ls-sm":"0.012rem","body-ls-xs":"0.012rem","form-label-size":"1rem","form-description-size":"0.875rem","form-label-lh":"1.5rem","form-description-lh":"1.6rem","form-label-ls":"0.014rem","form-description-ls":"0.012rem"},a11yplayground:{"heading-size-xxl":"3rem","heading-size-xl":"2.5rem","heading-size-lg":"2rem","heading-size-md":"1.625rem","heading-size-sm":"1.375rem","heading-size-xs":"1.125rem","heading-lh-xxl":"3.5rem","heading-lh-xl":"3rem","heading-lh-lg":"2.5rem","heading-lh-md":"2.25rem","heading-lh-sm":"1.75rem","heading-lh-xs":"1.625rem","heading-ls-xxl":"-0.056rem","heading-ls-xl":"-0.032rem","heading-ls-lg":"-0.032rem","heading-ls-md":"0rem","heading-ls-sm":"0rem","heading-ls-xs":"0rem","weight-light":"300","weight-regular":"400","weight-semibold":"600","weight-bold":"700","font-family":"Atkinson Hyperlegible Next","body-size-baseline":"1.125rem","body-size-md":"1rem","body-size-sm":"0.875rem","body-size-xs":"0.75rem","body-lh-baseline":"1.625rem","body-lh-md":"1.5rem","body-lh-sm":"1.625rem","body-lh-xs":"1.25rem","body-ls-baseline":"0rem","body-ls-md":"0.014rem","body-ls-sm":"0.012rem","body-ls-xs":"0.012rem","form-label-size":"1.125rem","form-description-size":"1rem","form-label-lh":"1.5rem","form-description-lh":"1.625rem","form-label-ls":"0rem","form-description-ls":"0.00875rem"},supportgowhere:{"heading-size-xxl":"3rem","heading-size-xl":"2.5rem","heading-size-lg":"2rem","heading-size-md":"1.625rem","heading-size-sm":"1.375rem","heading-size-xs":"1.125rem","heading-lh-xxl":"3.5rem","heading-lh-xl":"3rem","heading-lh-lg":"2.5rem","heading-lh-md":"2.25rem","heading-lh-sm":"1.75rem","heading-lh-xs":"1.625rem","heading-ls-xxl":"-0.056rem","heading-ls-xl":"-0.032rem","heading-ls-lg":"-0.032rem","heading-ls-md":"0rem","heading-ls-sm":"0rem","heading-ls-xs":"0rem","weight-light":"300","weight-regular":"400","weight-semibold":"600","weight-bold":"700","font-family":"Libre Franklin","body-size-baseline":"1.125rem","body-size-md":"1rem","body-size-sm":"0.875rem","body-size-xs":"0.75rem","body-lh-baseline":"1.625rem","body-lh-md":"1.5rem","body-lh-sm":"1.625rem","body-lh-xs":"1.25rem","body-ls-baseline":"0rem","body-ls-md":"0.014rem","body-ls-sm":"0.012rem","body-ls-xs":"0.012rem","form-label-size":"1rem","form-description-size":"0.875rem","form-label-lh":"1.5rem","form-description-lh":"1.6rem","form-label-ls":"0.014rem","form-description-ls":"0.012rem"}},defaultValue:"default"},Fn=e=>t=>{var r;const n=t.theme,o=jr($n,null==n?void 0:n.fontScheme);return(null===(r=null==n?void 0:n.overrides)||void 0===r?void 0:r.fontSpec)?Hr(o,e,n.overrides.fontSpec):o[e]},Cn={"heading-size-xxl":Fn("heading-size-xxl"),"heading-size-xl":Fn("heading-size-xl"),"heading-size-lg":Fn("heading-size-lg"),"heading-size-md":Fn("heading-size-md"),"heading-size-sm":Fn("heading-size-sm"),"heading-size-xs":Fn("heading-size-xs"),"heading-lh-xxl":Fn("heading-lh-xxl"),"heading-lh-xl":Fn("heading-lh-xl"),"heading-lh-lg":Fn("heading-lh-lg"),"heading-lh-md":Fn("heading-lh-md"),"heading-lh-sm":Fn("heading-lh-sm"),"heading-lh-xs":Fn("heading-lh-xs"),"heading-ls-xxl":Fn("heading-ls-xxl"),"heading-ls-xl":Fn("heading-ls-xl"),"heading-ls-lg":Fn("heading-ls-lg"),"heading-ls-md":Fn("heading-ls-md"),"heading-ls-sm":Fn("heading-ls-sm"),"heading-ls-xs":Fn("heading-ls-xs"),"weight-light":Fn("weight-light"),"weight-regular":Fn("weight-regular"),"weight-semibold":Fn("weight-semibold"),"weight-bold":Fn("weight-bold"),"font-family":Fn("font-family"),"body-size-baseline":Fn("body-size-baseline"),"body-size-md":Fn("body-size-md"),"body-size-sm":Fn("body-size-sm"),"body-size-xs":Fn("body-size-xs"),"body-lh-baseline":Fn("body-lh-baseline"),"body-lh-md":Fn("body-lh-md"),"body-lh-sm":Fn("body-lh-sm"),"body-lh-xs":Fn("body-lh-xs"),"body-ls-baseline":Fn("body-ls-baseline"),"body-ls-md":Fn("body-ls-md"),"body-ls-sm":Fn("body-ls-sm"),"body-ls-xs":Fn("body-ls-xs"),"form-label-size":Fn("form-label-size"),"form-description-size":Fn("form-description-size"),"form-label-lh":Fn("form-label-lh"),"form-description-lh":Fn("form-description-lh"),"form-label-ls":Fn("form-label-ls"),"form-description-ls":Fn("form-description-ls")},En=(e,t,r,n,o)=>{const{disableLigatures:i}=o||{};return $`
        font-family: ${Fn("font-family")};
        font-size: ${Fn(e)};
        font-weight: ${Fn(t)};
        line-height: ${Fn(r)};
        letter-spacing: ${Fn(n)};

        font-variant: ${i?"no-common-ligatures":"normal"};
    `},Sn=(e={})=>({"heading-xxl-light":En("heading-size-xxl","weight-light","heading-lh-xxl","heading-ls-xxl",e),"heading-xxl-regular":En("heading-size-xxl","weight-regular","heading-lh-xxl","heading-ls-xxl",e),"heading-xxl-semibold":En("heading-size-xxl","weight-semibold","heading-lh-xxl","heading-ls-xxl",e),"heading-xxl-bold":En("heading-size-xxl","weight-bold","heading-lh-xxl","heading-ls-xxl",e),"heading-xl-light":En("heading-size-xl","weight-light","heading-lh-xl","heading-ls-xl",e),"heading-xl-regular":En("heading-size-xl","weight-regular","heading-lh-xl","heading-ls-xl",e),"heading-xl-semibold":En("heading-size-xl","weight-semibold","heading-lh-xl","heading-ls-xl",e),"heading-xl-bold":En("heading-size-xl","weight-bold","heading-lh-xl","heading-ls-xl",e),"heading-lg-light":En("heading-size-lg","weight-light","heading-lh-lg","heading-ls-lg",e),"heading-lg-regular":En("heading-size-lg","weight-regular","heading-lh-lg","heading-ls-lg",e),"heading-lg-semibold":En("heading-size-lg","weight-semibold","heading-lh-lg","heading-ls-lg",e),"heading-lg-bold":En("heading-size-lg","weight-bold","heading-lh-lg","heading-ls-lg",e),"heading-md-light":En("heading-size-md","weight-light","heading-lh-md","heading-ls-md",e),"heading-md-regular":En("heading-size-md","weight-regular","heading-lh-md","heading-ls-md",e),"heading-md-semibold":En("heading-size-md","weight-semibold","heading-lh-md","heading-ls-md",e),"heading-md-bold":En("heading-size-md","weight-bold","heading-lh-md","heading-ls-md",e),"heading-sm-light":En("heading-size-sm","weight-light","heading-lh-sm","heading-ls-sm",e),"heading-sm-regular":En("heading-size-sm","weight-regular","heading-lh-sm","heading-ls-sm",e),"heading-sm-semibold":En("heading-size-sm","weight-semibold","heading-lh-sm","heading-ls-sm",e),"heading-sm-bold":En("heading-size-sm","weight-bold","heading-lh-sm","heading-ls-sm",e),"heading-xs-light":En("heading-size-xs","weight-light","heading-lh-xs","heading-ls-xs",e),"heading-xs-regular":En("heading-size-xs","weight-regular","heading-lh-xs","heading-ls-xs",e),"heading-xs-semibold":En("heading-size-xs","weight-semibold","heading-lh-xs","heading-ls-xs",e),"heading-xs-bold":En("heading-size-xs","weight-bold","heading-lh-xs","heading-ls-xs",e),"body-baseline-light":En("body-size-baseline","weight-light","body-lh-baseline","body-ls-baseline",e),"body-baseline-regular":En("body-size-baseline","weight-regular","body-lh-baseline","body-ls-baseline",e),"body-baseline-semibold":En("body-size-baseline","weight-semibold","body-lh-baseline","body-ls-baseline",e),"body-baseline-bold":En("body-size-baseline","weight-bold","body-lh-baseline","body-ls-baseline",e),"body-md-light":En("body-size-md","weight-light","body-lh-md","body-ls-md",e),"body-md-regular":En("body-size-md","weight-regular","body-lh-md","body-ls-md",e),"body-md-semibold":En("body-size-md","weight-semibold","body-lh-md","body-ls-md",e),"body-md-bold":En("body-size-md","weight-bold","body-lh-md","body-ls-md",e),"body-sm-light":En("body-size-sm","weight-light","body-lh-sm","body-ls-sm",e),"body-sm-regular":En("body-size-sm","weight-regular","body-lh-sm","body-ls-sm",e),"body-sm-semibold":En("body-size-sm","weight-semibold","body-lh-sm","body-ls-sm",e),"body-sm-bold":En("body-size-sm","weight-bold","body-lh-sm","body-ls-sm",e),"body-xs-light":En("body-size-xs","weight-light","body-lh-xs","body-ls-xs",e),"body-xs-regular":En("body-size-xs","weight-regular","body-lh-xs","body-ls-xs",e),"body-xs-semibold":En("body-size-xs","weight-semibold","body-lh-xs","body-ls-xs",e),"body-xs-bold":En("body-size-xs","weight-bold","body-lh-xs","body-ls-xs",e),"form-label":En("form-label-size","weight-semibold","form-label-lh","form-label-ls",e),"form-description":En("form-description-size","weight-regular","form-description-lh","form-description-ls",e)}),kn=Sn({disableLigatures:!0}),Dn={collections:{default:Sn(),bookingsg:kn,pa:Sn({disableLigatures:!0}),a11yplayground:Sn({disableLigatures:!0}),supportgowhere:Sn({disableLigatures:!0})},defaultValue:"default"},In=e=>t=>{var r;const n=t.theme,o=jr(Dn,null==n?void 0:n.fontScheme),i=(null===(r=null==n?void 0:n.overrides)||void 0===r?void 0:r.font)?Hr(o,e,n.overrides.font):o[e];return"function"==typeof i?i(t):i},Tn={"heading-xxl-light":In("heading-xxl-light"),"heading-xxl-regular":In("heading-xxl-regular"),"heading-xxl-semibold":In("heading-xxl-semibold"),"heading-xxl-bold":In("heading-xxl-bold"),"heading-xl-light":In("heading-xl-light"),"heading-xl-regular":In("heading-xl-regular"),"heading-xl-semibold":In("heading-xl-semibold"),"heading-xl-bold":In("heading-xl-bold"),"heading-lg-light":In("heading-lg-light"),"heading-lg-regular":In("heading-lg-regular"),"heading-lg-semibold":In("heading-lg-semibold"),"heading-lg-bold":In("heading-lg-bold"),"heading-md-light":In("heading-md-light"),"heading-md-regular":In("heading-md-regular"),"heading-md-semibold":In("heading-md-semibold"),"heading-md-bold":In("heading-md-bold"),"heading-sm-light":In("heading-sm-light"),"heading-sm-regular":In("heading-sm-regular"),"heading-sm-semibold":In("heading-sm-semibold"),"heading-sm-bold":In("heading-sm-bold"),"heading-xs-light":In("heading-xs-light"),"heading-xs-regular":In("heading-xs-regular"),"heading-xs-semibold":In("heading-xs-semibold"),"heading-xs-bold":In("heading-xs-bold"),"body-baseline-light":In("body-baseline-light"),"body-baseline-regular":In("body-baseline-regular"),"body-baseline-semibold":In("body-baseline-semibold"),"body-baseline-bold":In("body-baseline-bold"),"body-md-light":In("body-md-light"),"body-md-regular":In("body-md-regular"),"body-md-semibold":In("body-md-semibold"),"body-md-bold":In("body-md-bold"),"body-sm-light":In("body-sm-light"),"body-sm-regular":In("body-sm-regular"),"body-sm-semibold":In("body-sm-semibold"),"body-sm-bold":In("body-sm-bold"),"body-xs-light":In("body-xs-light"),"body-xs-regular":In("body-xs-regular"),"body-xs-semibold":In("body-xs-semibold"),"body-xs-bold":In("body-xs-bold"),"form-label":In("form-label"),"form-description":In("form-description")},Bn={collections:{default:{"duration-150":"150ms","duration-250":"250ms","duration-350":"350ms","duration-500":"500ms","duration-800":"800ms","duration-1000":"1000ms","ease-default":"cubic-bezier(0.45, 0.05, 0.55, 0.95)","ease-standard":"cubic-bezier(0.86, 0, 0.07, 1)","ease-entrance":"cubic-bezier(0.18, 0.13, 0, 1)","ease-exit":"cubic-bezier(1, 0, 0.8, 0.85)"}},defaultValue:"default"},An=e=>t=>{var r;const n=t.theme,o=jr(Bn,null==n?void 0:n.motionScheme);return(null===(r=null==n?void 0:n.overrides)||void 0===r?void 0:r.motion)?Hr(o,e,n.overrides.motion):o[e]},zn={"duration-150":An("duration-150"),"duration-250":An("duration-250"),"duration-350":An("duration-350"),"duration-500":An("duration-500"),"duration-800":An("duration-800"),"duration-1000":An("duration-1000"),"ease-default":An("ease-default"),"ease-standard":An("ease-standard"),"ease-entrance":An("ease-entrance"),"ease-exit":An("ease-exit")},On={collections:{default:{none:0,xs:2,sm:4,md:8,lg:12,full:9999}},defaultValue:"default"},Mn=e=>t=>{var r;const n=t.theme,o=jr(On,null==n?void 0:n.radiusScheme);return(null===(r=null==n?void 0:n.overrides)||void 0===r?void 0:r.radius)?`${Hr(o,e,n.overrides.radius)}px`:`${o[e]}px`},_n={none:Mn("none"),xs:Mn("xs"),sm:Mn("sm"),md:Mn("md"),lg:Mn("lg"),full:Mn("full")},Rn={collections:{default:{"spacing-0":0,"spacing-4":4,"spacing-8":8,"spacing-12":12,"spacing-16":16,"spacing-20":20,"spacing-24":24,"spacing-32":32,"spacing-40":40,"spacing-48":48,"spacing-64":64,"spacing-72":72,"layout-xs":8,"layout-sm":16,"layout-md":24,"layout-lg":32,"layout-xl":48,"layout-xxl":64,"layout-xxxl":128}},defaultValue:"default"},Hn=e=>t=>{var r;const n=t.theme,o=jr(Rn,null==n?void 0:n.spacingScheme);return(null===(r=null==n?void 0:n.overrides)||void 0===r?void 0:r.spacing)?`${Hr(o,e,n.overrides.spacing)}px`:`${o[e]}px`},jn={"spacing-0":Hn("spacing-0"),"spacing-4":Hn("spacing-4"),"spacing-8":Hn("spacing-8"),"spacing-12":Hn("spacing-12"),"spacing-16":Hn("spacing-16"),"spacing-20":Hn("spacing-20"),"spacing-24":Hn("spacing-24"),"spacing-32":Hn("spacing-32"),"spacing-40":Hn("spacing-40"),"spacing-48":Hn("spacing-48"),"spacing-64":Hn("spacing-64"),"spacing-72":Hn("spacing-72"),"layout-xs":Hn("layout-xs"),"layout-sm":Hn("layout-sm"),"layout-md":Hn("layout-md"),"layout-lg":Hn("layout-lg"),"layout-xl":Hn("layout-xl"),"layout-xxl":Hn("layout-xxl"),"layout-xxxl":Hn("layout-xxxl")},Ln=(e,t)=>Object.assign(Object.assign({},e),{colourMode:t}),Pn=Object.assign(Object.assign({},hn),{Primitive:rn}),Wn=Object.assign(Object.assign({},Tn),{Spec:Cn}),Nn=zn,Vn=Object.assign(Object.assign({},Wr),{Util:fn}),Yn=jn,Un=_n,qn=vn,Gn=wn,Zn={colourScheme:"lifesg",fontScheme:"default",motionScheme:"default",borderScheme:"default",spacingScheme:"default",radiusScheme:"default",breakpointScheme:"default",resourceScheme:"lifesg",_v2:{colorScheme:"base",textStyleScheme:"base",designTokenScheme:"base",resourceScheme:"base"}},Qn={colourScheme:"bookingsg",fontScheme:"bookingsg",motionScheme:"default",borderScheme:"default",spacingScheme:"default",radiusScheme:"default",breakpointScheme:"default",resourceScheme:"bookingsg",_v2:{colorScheme:"bookingsg",textStyleScheme:"base",designTokenScheme:"base",resourceScheme:"bookingsg"}},Xn={colourScheme:"ccube",fontScheme:"default",motionScheme:"default",borderScheme:"default",spacingScheme:"default",radiusScheme:"default",breakpointScheme:"default",resourceScheme:"ccube",_v2:{colorScheme:"ccube",textStyleScheme:"base",designTokenScheme:"base",resourceScheme:"ccube"}},Kn={colourScheme:"mylegacy",fontScheme:"default",motionScheme:"default",borderScheme:"default",spacingScheme:"default",radiusScheme:"default",breakpointScheme:"default",resourceScheme:"mylegacy",_v2:{colorScheme:"mylegacy",textStyleScheme:"base",designTokenScheme:"base",resourceScheme:"mylegacy"}},Jn={colourScheme:"rbs",fontScheme:"default",motionScheme:"default",borderScheme:"default",spacingScheme:"default",radiusScheme:"default",breakpointScheme:"default",resourceScheme:"rbs",_v2:{colorScheme:"rbs",textStyleScheme:"base",designTokenScheme:"rbs",resourceScheme:"rbs"}},eo={colourScheme:"oneservice",fontScheme:"default",motionScheme:"default",borderScheme:"default",spacingScheme:"default",radiusScheme:"default",breakpointScheme:"default",resourceScheme:"oneservice"},to={colourScheme:"pa",fontScheme:"pa",motionScheme:"default",borderScheme:"default",spacingScheme:"default",radiusScheme:"default",breakpointScheme:"default",resourceScheme:"pa",componentScheme:"pa"},ro={colourScheme:"a11yplayground",fontScheme:"a11yplayground",motionScheme:"default",borderScheme:"default",spacingScheme:"default",radiusScheme:"default",breakpointScheme:"default",resourceScheme:"a11yplayground",componentScheme:"a11yplayground"},no={colourScheme:"supportgowhere",fontScheme:"supportgowhere",motionScheme:"default",borderScheme:"default",spacingScheme:"default",radiusScheme:"default",breakpointScheme:"default",resourceScheme:"supportgowhere",componentScheme:"default"};Object.assign(Object.assign({},Zn),{light:Ln(Zn,"light"),dark:Ln(Zn,"dark")}),Object.assign(Object.assign({},Qn),{light:Ln(Qn,"light"),dark:Ln(Qn,"dark")}),Object.assign(Object.assign({},Xn),{light:Ln(Xn,"light"),dark:Ln(Xn,"dark")}),Object.assign(Object.assign({},Kn),{light:Ln(Kn,"light"),dark:Ln(Kn,"dark")}),Object.assign(Object.assign({},Jn),{light:Ln(Jn,"light"),dark:Ln(Jn,"dark")}),Object.assign(Object.assign({},eo),{light:Ln(eo,"light"),dark:Ln(eo,"dark")}),Object.assign(Object.assign({},to),{light:Ln(to,"light"),dark:Ln(to,"dark")}),Object.assign(Object.assign({},ro),{light:Ln(ro,"light"),dark:Ln(ro,"dark")}),Object.assign(Object.assign({},no),{light:Ln(no,"light"),dark:Ln(no,"dark")});const oo=w.div`
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
                        100% - ${Wn.Spec["body-size-baseline"]} -
                            ${Yn["spacing-16"]}
                    );
                    flex: unset;
                }

                [data-id="range-container-elem2-container"] {
                    margin-top: ${Yn["spacing-8"]};
                }
            `}}
`,io=w.div`
    width: 100%; // Force next flex item to break to next line
`,so=w.div`
    display: flex;
    flex: 1;
    align-items: center;
`,ao=w(v)`
    color: ${Pn.icon};
    width: ${Wn.Spec["body-size-baseline"]};
    height: ${Wn.Spec["body-size-baseline"]};
    flex-shrink: 0;
    margin: 0 ${Yn["spacing-8"]};
    align-self: center;
`,lo=w.div`
    position: absolute;
    background: ${e=>e.$error?Pn["border-error-focus-strong"]:Pn["border-focus-strong"]};
    height: 2px;
    // half - half padding - half icon width
    width: calc(
        50% - ${Yn["spacing-8"]} - (${Wn.Spec["body-size-baseline"]} / 2)
    );
    transition: left ${Nn["duration-350"]} ${Nn["ease-standard"]},
        opacity ${Nn["duration-350"]} ${Nn["ease-standard"]};
    left: 0;
    bottom: 0;

    ${e=>{switch(e.$position){case"start":return $`
                    opacity: 1;
                `;case"end":return $`
                    left: calc(50% + ${Yn["spacing-16"]});
                    opacity: 1;
                `;case"none":return $`
                    opacity: 0;
                `}}}

    ${e=>{if(e.$wrap)return $`
                display: none;
            `}}
`,co=({children:r,currentActive:n,error:o,className:i,wrap:s})=>{const[a,l]=r;return e(oo,{className:i,$wrap:s,children:[t(so,{"data-id":"range-container-elem1-container",children:a}),t(ao,{}),s&&t(io,{}),t(so,{"data-id":"range-container-elem2-container",children:l}),t(lo,{"data-id":"range-container-indicator",$position:n,$error:o,$wrap:s})]})},uo=$`
    outline-offset: -1px;
    outline: ${Vn["width-020"]} ${Vn.solid} ${Pn["border-focus"]};
`,ho=$`
    outline-color: ${Pn["border-focus"]};
`,go=$`
    outline-color: ${Pn["border-disabled"]};
`,mo=$`
    outline-color: ${Pn["border-error-focus"]};
`,po=w.div`
    border: ${Vn["width-010"]} ${Vn.solid} ${Pn.border};
    border-radius: ${Un.sm};
    background: ${Pn.bg};

    :focus-within {
        ${uo}
    }
    ${e=>e.$focused&&uo}

    ${e=>e.$readOnly?$`
                border-color: transparent;
                padding: 0;
                background: transparent !important;

                :focus-within {
                    ${ho}
                }
                ${e.$focused&&ho}
            `:e.$disabled?$`
                background: ${Pn["bg-disabled"]};
                cursor: not-allowed;

                :focus-within {
                    ${go}
                }
                ${e.$focused&&go}
            `:e.$error?$`
                border-color: ${Pn["border-error"]};

                :focus-within {
                    ${mo}
                }
                ${e.$focused&&mo}
            `:void 0}
`,fo=w(po)`
    display: flex;
    align-items: center;
    position: relative;
    height: max-content;
    width: 100%;
    padding: 0 ${Yn["spacing-16"]};
    flex-direction: ${e=>"right"===e.$position?"row-reverse":"row"};
`,bo=w.input`
    ${e=>"small"===e.$variant?Wn["body-md-regular"]:Wn["body-baseline-regular"]}
    color: ${Pn.text};
    display: block;
    background: transparent;
    border: none;
    outline: none;
    box-shadow: none;
    padding: 0;
    margin: 0;

    :disabled {
        color: ${Pn["text-subtler"]};

        :hover {
            cursor: not-allowed;
        }
    }

    ::placeholder,
    ::-webkit-input-placeholder {
        color: ${Pn["text-subtler"]};
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
`,yo=w.button`
    background: transparent;
    border: none;
    outline: none;

    :focus,
    :active {
        outline: none;
    }

    :focus-visible {
        outline: ${Vn["width-010"]} ${Vn.solid}
            ${Pn["border-focus"]};
        border-radius: ${Un.sm};
    }
`,vo=w.div`
    position: relative;
`,xo=w(fo)`
    height: 3rem;
    gap: ${Yn["spacing-8"]};
`,wo=w(bo)`
    display: block;
    width: 100%;
    flex: 1;
`;var $o={exports:{}};$o.exports=function(){var e=1e3,t=6e4,r=36e5,n="millisecond",o="second",i="minute",s="hour",a="day",l="week",d="month",c="quarter",u="year",h="date",g="Invalid Date",m=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,p=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,f={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(e){var t=["th","st","nd","rd"],r=e%100;return"["+e+(t[(r-20)%10]||t[r]||t[0])+"]"}},b=function(e,t,r){var n=String(e);return!n||n.length>=t?e:""+Array(t+1-n.length).join(r)+e},y={s:b,z:function(e){var t=-e.utcOffset(),r=Math.abs(t),n=Math.floor(r/60),o=r%60;return(t<=0?"+":"-")+b(n,2,"0")+":"+b(o,2,"0")},m:function e(t,r){if(t.date()<r.date())return-e(r,t);var n=12*(r.year()-t.year())+(r.month()-t.month()),o=t.clone().add(n,d),i=r-o<0,s=t.clone().add(n+(i?-1:1),d);return+(-(n+(r-o)/(i?o-s:s-o))||0)},a:function(e){return e<0?Math.ceil(e)||0:Math.floor(e)},p:function(e){return{M:d,y:u,w:l,d:a,D:h,h:s,m:i,s:o,ms:n,Q:c}[e]||String(e||"").toLowerCase().replace(/s$/,"")},u:function(e){return void 0===e}},v="en",x={};x[v]=f;var w="$isDayjsObject",$=function(e){return e instanceof S||!(!e||!e[w])},F=function e(t,r,n){var o;if(!t)return v;if("string"==typeof t){var i=t.toLowerCase();x[i]&&(o=i),r&&(x[i]=r,o=i);var s=t.split("-");if(!o&&s.length>1)return e(s[0])}else{var a=t.name;x[a]=t,o=a}return!n&&o&&(v=o),o||!n&&v},C=function(e,t){if($(e))return e.clone();var r="object"==typeof t?t:{};return r.date=e,r.args=arguments,new S(r)},E=y;E.l=F,E.i=$,E.w=function(e,t){return C(e,{locale:t.$L,utc:t.$u,x:t.$x,$offset:t.$offset})};var S=function(){function f(e){this.$L=F(e.locale,null,!0),this.parse(e),this.$x=this.$x||e.x||{},this[w]=!0}var b=f.prototype;return b.parse=function(e){this.$d=function(e){var t=e.date,r=e.utc;if(null===t)return new Date(NaN);if(E.u(t))return new Date;if(t instanceof Date)return new Date(t);if("string"==typeof t&&!/Z$/i.test(t)){var n=t.match(m);if(n){var o=n[2]-1||0,i=(n[7]||"0").substring(0,3);return r?new Date(Date.UTC(n[1],o,n[3]||1,n[4]||0,n[5]||0,n[6]||0,i)):new Date(n[1],o,n[3]||1,n[4]||0,n[5]||0,n[6]||0,i)}}return new Date(t)}(e),this.init()},b.init=function(){var e=this.$d;this.$y=e.getFullYear(),this.$M=e.getMonth(),this.$D=e.getDate(),this.$W=e.getDay(),this.$H=e.getHours(),this.$m=e.getMinutes(),this.$s=e.getSeconds(),this.$ms=e.getMilliseconds()},b.$utils=function(){return E},b.isValid=function(){return!(this.$d.toString()===g)},b.isSame=function(e,t){var r=C(e);return this.startOf(t)<=r&&r<=this.endOf(t)},b.isAfter=function(e,t){return C(e)<this.startOf(t)},b.isBefore=function(e,t){return this.endOf(t)<C(e)},b.$g=function(e,t,r){return E.u(e)?this[t]:this.set(r,e)},b.unix=function(){return Math.floor(this.valueOf()/1e3)},b.valueOf=function(){return this.$d.getTime()},b.startOf=function(e,t){var r=this,n=!!E.u(t)||t,c=E.p(e),g=function(e,t){var o=E.w(r.$u?Date.UTC(r.$y,t,e):new Date(r.$y,t,e),r);return n?o:o.endOf(a)},m=function(e,t){return E.w(r.toDate()[e].apply(r.toDate("s"),(n?[0,0,0,0]:[23,59,59,999]).slice(t)),r)},p=this.$W,f=this.$M,b=this.$D,y="set"+(this.$u?"UTC":"");switch(c){case u:return n?g(1,0):g(31,11);case d:return n?g(1,f):g(0,f+1);case l:var v=this.$locale().weekStart||0,x=(p<v?p+7:p)-v;return g(n?b-x:b+(6-x),f);case a:case h:return m(y+"Hours",0);case s:return m(y+"Minutes",1);case i:return m(y+"Seconds",2);case o:return m(y+"Milliseconds",3);default:return this.clone()}},b.endOf=function(e){return this.startOf(e,!1)},b.$set=function(e,t){var r,l=E.p(e),c="set"+(this.$u?"UTC":""),g=(r={},r[a]=c+"Date",r[h]=c+"Date",r[d]=c+"Month",r[u]=c+"FullYear",r[s]=c+"Hours",r[i]=c+"Minutes",r[o]=c+"Seconds",r[n]=c+"Milliseconds",r)[l],m=l===a?this.$D+(t-this.$W):t;if(l===d||l===u){var p=this.clone().set(h,1);p.$d[g](m),p.init(),this.$d=p.set(h,Math.min(this.$D,p.daysInMonth())).$d}else g&&this.$d[g](m);return this.init(),this},b.set=function(e,t){return this.clone().$set(e,t)},b.get=function(e){return this[E.p(e)]()},b.add=function(n,c){var h,g=this;n=Number(n);var m=E.p(c),p=function(e){var t=C(g);return E.w(t.date(t.date()+Math.round(e*n)),g)};if(m===d)return this.set(d,this.$M+n);if(m===u)return this.set(u,this.$y+n);if(m===a)return p(1);if(m===l)return p(7);var f=(h={},h[i]=t,h[s]=r,h[o]=e,h)[m]||1,b=this.$d.getTime()+n*f;return E.w(b,this)},b.subtract=function(e,t){return this.add(-1*e,t)},b.format=function(e){var t=this,r=this.$locale();if(!this.isValid())return r.invalidDate||g;var n=e||"YYYY-MM-DDTHH:mm:ssZ",o=E.z(this),i=this.$H,s=this.$m,a=this.$M,l=r.weekdays,d=r.months,c=r.meridiem,u=function(e,r,o,i){return e&&(e[r]||e(t,n))||o[r].slice(0,i)},h=function(e){return E.s(i%12||12,e,"0")},m=c||function(e,t,r){var n=e<12?"AM":"PM";return r?n.toLowerCase():n};return n.replace(p,(function(e,n){return n||function(e){switch(e){case"YY":return String(t.$y).slice(-2);case"YYYY":return E.s(t.$y,4,"0");case"M":return a+1;case"MM":return E.s(a+1,2,"0");case"MMM":return u(r.monthsShort,a,d,3);case"MMMM":return u(d,a);case"D":return t.$D;case"DD":return E.s(t.$D,2,"0");case"d":return String(t.$W);case"dd":return u(r.weekdaysMin,t.$W,l,2);case"ddd":return u(r.weekdaysShort,t.$W,l,3);case"dddd":return l[t.$W];case"H":return String(i);case"HH":return E.s(i,2,"0");case"h":return h(1);case"hh":return h(2);case"a":return m(i,s,!0);case"A":return m(i,s,!1);case"m":return String(s);case"mm":return E.s(s,2,"0");case"s":return String(t.$s);case"ss":return E.s(t.$s,2,"0");case"SSS":return E.s(t.$ms,3,"0");case"Z":return o}return null}(e)||o.replace(":","")}))},b.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},b.diff=function(n,h,g){var m,p=this,f=E.p(h),b=C(n),y=(b.utcOffset()-this.utcOffset())*t,v=this-b,x=function(){return E.m(p,b)};switch(f){case u:m=x()/12;break;case d:m=x();break;case c:m=x()/3;break;case l:m=(v-y)/6048e5;break;case a:m=(v-y)/864e5;break;case s:m=v/r;break;case i:m=v/t;break;case o:m=v/e;break;default:m=v}return g?m:E.a(m)},b.daysInMonth=function(){return this.endOf(d).$D},b.$locale=function(){return x[this.$L]},b.locale=function(e,t){if(!e)return this.$L;var r=this.clone(),n=F(e,t,!0);return n&&(r.$L=n),r},b.clone=function(){return E.w(this.$d,this)},b.toDate=function(){return new Date(this.valueOf())},b.toJSON=function(){return this.isValid()?this.toISOString():null},b.toISOString=function(){return this.$d.toISOString()},b.toString=function(){return this.$d.toUTCString()},f}(),k=S.prototype;return C.prototype=k,[["$ms",n],["$s",o],["$m",i],["$H",s],["$W",a],["$M",d],["$y",u],["$D",h]].forEach((function(e){k[e[1]]=function(t){return this.$g(t,e[0],e[1])}})),C.extend=function(e,t){return e.$i||(e(t,S,C),e.$i=!0),C},C.locale=F,C.isDayjs=$,C.unix=function(e){return C(1e3*e)},C.en=x[v],C.Ls=x,C.p={},C}();var Fo,Co,Eo,So=le($o.exports);!function(e){e.transformWithSpaces=(e,t)=>{const r="(.{"+t+"})";return e.replace(/[^\dA-Z]/gi,"").replace(new RegExp(r,"g"),"$1 ").trim()},e.padValue=(e,t)=>{if("0"===e)return t?e:e.padStart(2,"0");if(""===e)return e;return parseInt(e).toString().padStart(2,"0")},e.shouldTruncateToTwoLines=(e,t)=>{const r=Math.floor(t/9);return e.length>=2*r||1===e.split(" ").length&&e.length>r},e.truncateOneLine=(e,t,r,n,o=8)=>{let i=0;t>r&&(i=Math.floor((t-r)/o));const s=n+i;if(s<e.length){const t=Math.floor(s/2);return e.substring(0,t)+" ... "+e.substring(e.length-t,e.length)}return e},e.truncateTwoLines=(e,t,r,n=1.2)=>{const o=Math.floor(2*t/(.6*r))*(2/n);if(e.length<=o)return e;const i=Math.floor(.6*o),s=Math.floor(.2*o);return`${e.substring(0,i)}...${e.substring(e.length-s)}`},e.getTextWidth=(t,r)=>{if("undefined"==typeof document)return 0;const n=(e.getTextWidth.canvas||(e.getTextWidth.canvas=document.createElement("canvas"))).getContext("2d");n.font=r;return n.measureText(t).width},e.maskValue=(e,r)=>{if(!e)return e;const{maskRange:n,unmaskRange:o,maskChar:i="•",maskRegex:s,maskTransformer:a}=r;if(a)return a(e);if(s)return e.replace(s,i);if(n){const{startIndex:r,endIndex:o}=t(n[0],n[1]);return e.substring(0,r)+i.repeat(e.substring(r,o+1).length)+e.substring(o+1)}if(o){const{startIndex:r,endIndex:n}=t(o[0],o[1]);return i.repeat(e.substring(0,r).length)+e.substring(r,n+1)+i.repeat(e.substring(n+1).length)}return e};const t=(e,t)=>e<t?{startIndex:e,endIndex:t}:{startIndex:t,endIndex:e},r=new Intl.PluralRules("en",{type:"ordinal"}),n=new Map([["one","st"],["two","nd"],["few","rd"],["other","th"]]);e.formatOrdinal=e=>{const t=r.select(e);return`${e}${n.get(t)}`}}(Fo||(Fo={})),function(e){e.AM="AM",e.PM="PM"}(Co||(Co={})),function(e){e.roundToNearestInterval=(e,t,r)=>{const[n,o]=e.split(":"),i=parseInt(n,10),s=parseInt(o,10);if(isNaN(i)||isNaN(s)||s<0||s>=60)throw new Error("Invalid time format");const a=60*i+s,l=a%t,d=0===l?a:r?a+(t-l):a-l,c=d%60;return`${Math.floor(d/60).toString().padStart(2,"0")}:${c.toString().padStart(2,"0")}`},e.generateHourlyIntervals=(e,t,r="ha")=>{const n="HH:mm";let o=So(e,n),i=So(t,n);o.isSame(i)&&(i=i.add(1,"day"));const s=[];for(;o.isBefore(i);)s.push(o.format(r)),o=o.add(1,"hour");return s},e.getTimeValues=(e,t)=>{const r={hour:"",minute:"",period:Co.AM};if(!t)return r;try{if("24hr"===e){const n=Io(t,e);r.minute=Fo.padValue(n.minute);const o=parseInt(n.hour);0===Math.floor(o/12)?(r.period=Co.AM,r.hour=0===o?"12":Fo.padValue(o.toString())):(r.period=Co.PM,r.hour=12===o?o.toString():Fo.padValue((o-12).toString()))}else{const{hour:n,minute:o,period:i=""}=Io(t,e);r.hour=Fo.padValue(n),r.minute=Fo.padValue(o),r.period="am"===i.toLowerCase()?Co.AM:Co.PM}return r}catch(e){return r}},e.updateMinutes=(e,t)=>{const r=parseInt(e);if(isNaN(r))return"add"===t?Fo.padValue("0"):"55";const n=Math.floor(r/5),o=(("add"===t?n+1:r%5==0?n-1:n)%12+12)%12;return Fo.padValue((5*o).toString())},e.updateHours=(e,t)=>{const r=parseInt(e);if(isNaN(r))return"add"===t?Fo.padValue("1"):"12";const n="add"===t?r+1:r-1;return n<=12&&n>0?Fo.padValue(n.toString()):13===n?Fo.padValue("1"):"12"},e.convertTo24HourFormat=e=>{const t=parseInt(e.hour);let r;return r=e.period===Co.PM?12===t?t.toString():(t+12).toString():12===t?"00":e.hour,`${r}:${e.minute}`},e.convertHourTo12HourFormat=e=>{const t=parseInt(e),r=t%12==0?12..toString():(t%12).toString();return Fo.padValue(r)},e.formatDisplayValue=(e,t)=>{try{const{hour:r,minute:n,period:o=""}=Io(e,t),i=Fo.padValue(r);let s=`${i}:${Fo.padValue(n)}`;return"12hr"===t?(s+=o.toLowerCase(),s):s}catch(e){return""}},e.toMinutesSeconds=e=>({minutes:Math.floor(e/60),seconds:e%60}),e.to24Hour=e=>{if((null==e?void 0:e.includes("am"))||(null==e?void 0:e.includes("pm"))){const[t,r]=e.split(/(am|pm)/i),[n,o]=t.split(":").map(Number);let i=n;return"pm"===r&&i<12&&(i+=12),"am"===r&&12===i&&(i=0),To(i,o)}return e},e.generateTimings=(t,r="12hr",n,o)=>{const i=[];let s=0,a=1440-t;for(n&&(s=e.timeToMinutes(n)),o&&(a=e.timeToMinutes(o));s<=a;){let e=Math.floor(s/60);const n=s%60;if("12hr"===r){const t=e>=12?"pm":"am";e%=12,e=e||12;const r=To(e,n,t);i.push(r)}else{const t=To(e,n);i.push(t)}s+=t}return i},e.parseInput=(e,t="12hr")=>{if(""===e||void 0===e)return e;const r=e.trim().toLowerCase(),n=/^(?:(\d{1,2})([:.])?(\d{2})?)?(a|p|am|pm)?$/.exec(r);if(!n)return;let o=parseInt(n[1]||"0",10);const i=parseInt(n[3]||"0",10);let s=n[4];if(void 0===n[1]||o>24||i>59)return;if("a"===s?s="am":"p"===s&&(s="pm"),"24hr"===t)return"pm"===s&&o<12?o+=12:("am"===s&&12===o||24===o)&&(o=0),To(o,i);s?0===o||24===o?(s="am",o=12):o>12&&(s="pm",o-=12):(s=0===o||24===o||o>6&&o<12?"am":"pm",o=o%12||12);return To(o,i,s)},e.findClosestFlooredTime=(t,r)=>{if(!t)return t;const n=e.timeToMinutes(t);let o="",i=1/0;for(const t of r){const r=e.timeToMinutes(t)-n;if(r<=0&&Math.abs(r)<i)i=Math.abs(r),o=t;else if(r>0)break}return o},e.timeToMinutes=e=>{const[t,r]=e.toLowerCase().split(/(am|pm)/),[n,o]=t.split(":").map(Number);let i=n;return"pm"===r&&12!==i&&(i+=12),"am"===r&&12===i&&(i=0),60*i+o}}(Eo||(Eo={}));const ko=(e,t)=>{const r=parseInt(e);return"24hr"===t?r>=0&&r<=23:r>=1&&r<=12},Do=e=>{const t=parseInt(e);return t>=0&&t<=59},Io=(e,t)=>{const r=e?e.split(":"):[],n=new Error("Invalid format");if("12hr"===t){if(2!==r.length||4!==r[1].length)throw n;const e=r[1].substring(0,2),i=r[1].substring(2);if(!ko(r[0],t)||!Do(e)||"am"!==(o=i).toLowerCase()&&"pm"!==o.toLowerCase())throw n;return{hour:r[0],minute:e,period:r[1].substring(2)}}if(2!==r.length)throw n;if(!ko(r[0],t)||!Do(r[1]))throw n;return{hour:r[0],minute:r[1]};var o},To=(e,t,r)=>r?`${e}:${t.toString().padStart(2,"0")}${r}`:`${e.toString().padStart(2,"0")}:${t.toString().padStart(2,"0")}`;var Bo=function(e,t){return Bo=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])},Bo(e,t)};var Ao=function(){return Ao=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var o in t=arguments[r])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e},Ao.apply(this,arguments)};var zo="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};var Oo=function(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)},Mo="object"==typeof zo&&zo&&zo.Object===Object&&zo,_o="object"==typeof self&&self&&self.Object===Object&&self,Ro=Mo||_o||Function("return this")(),Ho=Ro,jo=function(){return Ho.Date.now()},Lo=/\s/;var Po=function(e){for(var t=e.length;t--&&Lo.test(e.charAt(t)););return t},Wo=/^\s+/;var No=function(e){return e?e.slice(0,Po(e)+1).replace(Wo,""):e},Vo=Ro.Symbol,Yo=Vo,Uo=Object.prototype,qo=Uo.hasOwnProperty,Go=Uo.toString,Zo=Yo?Yo.toStringTag:void 0;var Qo=function(e){var t=qo.call(e,Zo),r=e[Zo];try{e[Zo]=void 0;var n=!0}catch(e){}var o=Go.call(e);return n&&(t?e[Zo]=r:delete e[Zo]),o},Xo=Object.prototype.toString;var Ko=Qo,Jo=function(e){return Xo.call(e)},ei=Vo?Vo.toStringTag:void 0;var ti=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":ei&&ei in Object(e)?Ko(e):Jo(e)},ri=function(e){return null!=e&&"object"==typeof e};var ni=No,oi=Oo,ii=function(e){return"symbol"==typeof e||ri(e)&&"[object Symbol]"==ti(e)},si=/^[-+]0x[0-9a-f]+$/i,ai=/^0b[01]+$/i,li=/^0o[0-7]+$/i,di=parseInt;var ci=Oo,ui=jo,hi=function(e){if("number"==typeof e)return e;if(ii(e))return NaN;if(oi(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=oi(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=ni(e);var r=ai.test(e);return r||li.test(e)?di(e.slice(2),r?2:8):si.test(e)?NaN:+e},gi=Math.max,mi=Math.min;var pi=function(e,t,r){var n,o,i,s,a,l,d=0,c=!1,u=!1,h=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function g(t){var r=n,i=o;return n=o=void 0,d=t,s=e.apply(i,r)}function m(e){var r=e-l;return void 0===l||r>=t||r<0||u&&e-d>=i}function p(){var e=ui();if(m(e))return f(e);a=setTimeout(p,function(e){var r=t-(e-l);return u?mi(r,i-(e-d)):r}(e))}function f(e){return a=void 0,h&&n?g(e):(n=o=void 0,s)}function b(){var e=ui(),r=m(e);if(n=arguments,o=this,l=e,r){if(void 0===a)return function(e){return d=e,a=setTimeout(p,t),c?g(e):s}(l);if(u)return clearTimeout(a),a=setTimeout(p,t),g(l)}return void 0===a&&(a=setTimeout(p,t)),s}return t=hi(t)||0,ci(r)&&(c=!!r.leading,i=(u="maxWait"in r)?gi(hi(r.maxWait)||0,t):i,h="trailing"in r?!!r.trailing:h),b.cancel=function(){void 0!==a&&clearTimeout(a),d=0,n=l=o=a=void 0},b.flush=function(){return void 0===a?s:f(ui())},b},fi=pi,bi=Oo;var yi=function(e,t,r){var n=!0,o=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return bi(r)&&(n="leading"in r?!!r.leading:n,o="trailing"in r?!!r.trailing:o),fi(e,t,{leading:n,maxWait:t,trailing:o})},vi=function(e,t,r,n){switch(t){case"debounce":return pi(e,r,n);case"throttle":return yi(e,r,n);default:return e}},xi=function(e){return"function"==typeof e},wi=function(){return"undefined"==typeof window},$i=function(e){return e instanceof Element||e instanceof HTMLDocument},Fi=function(e,t,r,n){return function(o){var i=o.width,s=o.height;t((function(t){return t.width===i&&t.height===s||t.width===i&&!n||t.height===s&&!r?t:(e&&xi(e)&&e(i,s),{width:i,height:s})}))}};!function(e){function t(t){var r=e.call(this,t)||this;r.cancelHandler=function(){r.resizeHandler&&r.resizeHandler.cancel&&(r.resizeHandler.cancel(),r.resizeHandler=null)},r.attachObserver=function(){var e=r.props,t=e.targetRef,n=e.observerOptions;if(!wi()){t&&t.current&&(r.targetRef.current=t.current);var o=r.getElement();o&&(r.observableElement&&r.observableElement===o||(r.observableElement=o,r.resizeObserver.observe(o,n)))}},r.getElement=function(){var e=r.props,t=e.querySelector,n=e.targetDomEl;if(wi())return null;if(t)return document.querySelector(t);if(n&&$i(n))return n;if(r.targetRef&&$i(r.targetRef.current))return r.targetRef.current;var o=D(r);if(!o)return null;switch(r.getRenderType()){case"renderProp":case"childFunction":case"child":case"childArray":return o;default:return o.parentElement}},r.createResizeHandler=function(e){var t=r.props,n=t.handleWidth,o=void 0===n||n,i=t.handleHeight,s=void 0===i||i,a=t.onResize;if(o||s){var l=Fi(a,r.setState.bind(r),o,s);e.forEach((function(e){var t=e&&e.contentRect||{},n=t.width,o=t.height;!r.skipOnMount&&!wi()&&l({width:n,height:o}),r.skipOnMount=!1}))}},r.getRenderType=function(){var e=r.props,t=e.render,n=e.children;return xi(t)?"renderProp":xi(n)?"childFunction":l(n)?"child":Array.isArray(n)?"childArray":"parent"};var n=t.skipOnMount,o=t.refreshMode,i=t.refreshRate,s=void 0===i?1e3:i,a=t.refreshOptions;return r.state={width:void 0,height:void 0},r.skipOnMount=n,r.targetRef=d(),r.observableElement=null,wi()||(r.resizeHandler=vi(r.createResizeHandler,o,s,a),r.resizeObserver=new window.ResizeObserver(r.resizeHandler)),r}(function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");function r(){this.constructor=e}Bo(e,t),e.prototype=null===t?Object.create(t):(r.prototype=t.prototype,new r)})(t,e),t.prototype.componentDidMount=function(){this.attachObserver()},t.prototype.componentDidUpdate=function(){this.attachObserver()},t.prototype.componentWillUnmount=function(){wi()||(this.observableElement=null,this.resizeObserver.disconnect(),this.cancelHandler())},t.prototype.render=function(){var e,t=this.props,r=t.render,o=t.children,i=t.nodeType,s=void 0===i?"div":i,a=this.state,l={width:a.width,height:a.height,targetRef:this.targetRef};switch(this.getRenderType()){case"renderProp":return r&&r(l);case"childFunction":return(e=o)(l);case"child":if((e=o).type&&"string"==typeof e.type){var d=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(n=Object.getOwnPropertySymbols(e);o<n.length;o++)t.indexOf(n[o])<0&&Object.prototype.propertyIsEnumerable.call(e,n[o])&&(r[n[o]]=e[n[o]])}return r}(l,["targetRef"]);return c(e,d)}return c(e,l);case"childArray":return(e=o).map((function(e){return!!e&&c(e,l)}));default:return n.createElement(s,null)}}}(u);var Ci=wi()?s:h;function Ei(e){void 0===e&&(e={});var t=e.skipOnMount,r=void 0!==t&&t,n=e.refreshMode,o=e.refreshRate,s=void 0===o?1e3:o,l=e.refreshOptions,d=e.handleWidth,c=void 0===d||d,u=e.handleHeight,h=void 0===u||u,g=e.targetRef,m=e.observerOptions,p=e.onResize,f=i(r),b=i(null),y=null!=g?g:b,v=i(),x=a({width:void 0,height:void 0}),w=x[0],$=x[1];return Ci((function(){if(!wi()){var e=Fi(p,$,c,h);v.current=vi((function(t){(c||h)&&t.forEach((function(t){var r=t&&t.contentRect||{},n=r.width,o=r.height;!f.current&&!wi()&&e({width:n,height:o}),f.current=!1}))}),n,s,l);var t=new window.ResizeObserver(v.current);return y.current&&t.observe(y.current,m),function(){t.disconnect();var e=v.current;e&&e.cancel&&e.cancel()}}}),[n,s,l,c,h,p,m,y.current]),Ao({ref:y},w)}var Si=Object.defineProperty,ki={};((e,t)=>{for(var r in t)Si(e,r,{get:t[r],enumerable:!0})})(ki,{assign:()=>ss,colors:()=>ns,createStringInterpolator:()=>Ji,skipAnimation:()=>os,to:()=>es,willAdvance:()=>is});var Di=Vi(),Ii=e=>Li(e,Di),Ti=Vi();Ii.write=e=>Li(e,Ti);var Bi=Vi();Ii.onStart=e=>Li(e,Bi);var Ai=Vi();Ii.onFrame=e=>Li(e,Ai);var zi=Vi();Ii.onFinish=e=>Li(e,zi);var Oi=[];Ii.setTimeout=(e,t)=>{const r=Ii.now()+t,n=()=>{const e=Oi.findIndex((e=>e.cancel==n));~e&&Oi.splice(e,1),Hi-=~e?1:0},o={time:r,handler:e,cancel:n};return Oi.splice(Mi(r),0,o),Hi+=1,Pi(),o};var Mi=e=>~(~Oi.findIndex((t=>t.time>e))||~Oi.length);Ii.cancel=e=>{Bi.delete(e),Ai.delete(e),zi.delete(e),Di.delete(e),Ti.delete(e)},Ii.sync=e=>{ji=!0,Ii.batchedUpdates(e),ji=!1},Ii.throttle=e=>{let t;function r(){try{e(...t)}finally{t=null}}function n(...e){t=e,Ii.onStart(r)}return n.handler=e,n.cancel=()=>{Bi.delete(r),t=null},n};var _i="undefined"!=typeof window?window.requestAnimationFrame:()=>{};Ii.use=e=>_i=e,Ii.now="undefined"!=typeof performance?()=>performance.now():Date.now,Ii.batchedUpdates=e=>e(),Ii.catch=console.error,Ii.frameLoop="always",Ii.advance=()=>{"demand"!==Ii.frameLoop?console.warn("Cannot call the manual advancement of rafz whilst frameLoop is not set as demand"):Ni()};var Ri=-1,Hi=0,ji=!1;function Li(e,t){ji?(t.delete(e),e(0)):(t.add(e),Pi())}function Pi(){Ri<0&&(Ri=0,"demand"!==Ii.frameLoop&&_i(Wi))}function Wi(){~Ri&&(_i(Wi),Ii.batchedUpdates(Ni))}function Ni(){const e=Ri;Ri=Ii.now();const t=Mi(Ri);t&&(Yi(Oi.splice(0,t),(e=>e.handler())),Hi-=t),Hi?(Bi.flush(),Di.flush(e?Math.min(64,Ri-e):16.667),Ai.flush(),Ti.flush(),zi.flush()):Ri=-1}function Vi(){let e=new Set,t=e;return{add(r){Hi+=t!=e||e.has(r)?0:1,e.add(r)},delete:r=>(Hi-=t==e&&e.has(r)?1:0,e.delete(r)),flush(r){t.size&&(e=new Set,Hi-=t.size,Yi(t,(t=>t(r)&&e.add(t))),Hi+=e.size,t=e)}}}function Yi(e,t){e.forEach((e=>{try{t(e)}catch(e){Ii.catch(e)}}))}function Ui(){}var qi={arr:Array.isArray,obj:e=>!!e&&"Object"===e.constructor.name,fun:e=>"function"==typeof e,str:e=>"string"==typeof e,num:e=>"number"==typeof e,und:e=>void 0===e};function Gi(e,t){if(qi.arr(e)){if(!qi.arr(t)||e.length!==t.length)return!1;for(let r=0;r<e.length;r++)if(e[r]!==t[r])return!1;return!0}return e===t}var Zi=(e,t)=>e.forEach(t);function Qi(e,t,r){if(qi.arr(e))for(let n=0;n<e.length;n++)t.call(r,e[n],`${n}`);else for(const n in e)e.hasOwnProperty(n)&&t.call(r,e[n],n)}var Xi=e=>qi.und(e)?[]:qi.arr(e)?e:[e];function Ki(e,t){if(e.size){const r=Array.from(e);e.clear(),Zi(r,t)}}var Ji,es,ts=(e,...t)=>Ki(e,(e=>e(...t))),rs=()=>"undefined"==typeof window||!window.navigator||/ServerSideRendering|^Deno\//.test(window.navigator.userAgent),ns=null,os=!1,is=Ui,ss=e=>{e.to&&(es=e.to),e.now&&(Ii.now=e.now),void 0!==e.colors&&(ns=e.colors),null!=e.skipAnimation&&(os=e.skipAnimation),e.createStringInterpolator&&(Ji=e.createStringInterpolator),e.requestAnimationFrame&&Ii.use(e.requestAnimationFrame),e.batchedUpdates&&(Ii.batchedUpdates=e.batchedUpdates),e.willAdvance&&(is=e.willAdvance),e.frameLoop&&(Ii.frameLoop=e.frameLoop)},as=new Set,ls=[],ds=[],cs=0,us={get idle(){return!as.size&&!ls.length},start(e){cs>e.priority?(as.add(e),Ii.onStart(hs)):(gs(e),Ii(ps))},advance:ps,sort(e){if(cs)Ii.onFrame((()=>us.sort(e)));else{const t=ls.indexOf(e);~t&&(ls.splice(t,1),ms(e))}},clear(){ls=[],as.clear()}};function hs(){as.forEach(gs),as.clear(),Ii(ps)}function gs(e){ls.includes(e)||ms(e)}function ms(e){ls.splice(function(e,t){const r=e.findIndex(t);return r<0?e.length:r}(ls,(t=>t.priority>e.priority)),0,e)}function ps(e){const t=ds;for(let r=0;r<ls.length;r++){const n=ls[r];cs=n.priority,n.idle||(is(n),n.advance(e),n.idle||t.push(n))}return cs=0,(ds=ls).length=0,(ls=t).length>0}var fs="[-+]?\\d*\\.?\\d+",bs=fs+"%";function ys(...e){return"\\(\\s*("+e.join(")\\s*,\\s*(")+")\\s*\\)"}var vs=new RegExp("rgb"+ys(fs,fs,fs)),xs=new RegExp("rgba"+ys(fs,fs,fs,fs)),ws=new RegExp("hsl"+ys(fs,bs,bs)),$s=new RegExp("hsla"+ys(fs,bs,bs,fs)),Fs=/^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,Cs=/^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,Es=/^#([0-9a-fA-F]{6})$/,Ss=/^#([0-9a-fA-F]{8})$/;function ks(e,t,r){return r<0&&(r+=1),r>1&&(r-=1),r<1/6?e+6*(t-e)*r:r<.5?t:r<2/3?e+(t-e)*(2/3-r)*6:e}function Ds(e,t,r){const n=r<.5?r*(1+t):r+t-r*t,o=2*r-n,i=ks(o,n,e+1/3),s=ks(o,n,e),a=ks(o,n,e-1/3);return Math.round(255*i)<<24|Math.round(255*s)<<16|Math.round(255*a)<<8}function Is(e){const t=parseInt(e,10);return t<0?0:t>255?255:t}function Ts(e){return(parseFloat(e)%360+360)%360/360}function Bs(e){const t=parseFloat(e);return t<0?0:t>1?255:Math.round(255*t)}function As(e){const t=parseFloat(e);return t<0?0:t>100?1:t/100}function zs(e){let t=function(e){let t;return"number"==typeof e?e>>>0===e&&e>=0&&e<=4294967295?e:null:(t=Es.exec(e))?parseInt(t[1]+"ff",16)>>>0:ns&&void 0!==ns[e]?ns[e]:(t=vs.exec(e))?(Is(t[1])<<24|Is(t[2])<<16|Is(t[3])<<8|255)>>>0:(t=xs.exec(e))?(Is(t[1])<<24|Is(t[2])<<16|Is(t[3])<<8|Bs(t[4]))>>>0:(t=Fs.exec(e))?parseInt(t[1]+t[1]+t[2]+t[2]+t[3]+t[3]+"ff",16)>>>0:(t=Ss.exec(e))?parseInt(t[1],16)>>>0:(t=Cs.exec(e))?parseInt(t[1]+t[1]+t[2]+t[2]+t[3]+t[3]+t[4]+t[4],16)>>>0:(t=ws.exec(e))?(255|Ds(Ts(t[1]),As(t[2]),As(t[3])))>>>0:(t=$s.exec(e))?(Ds(Ts(t[1]),As(t[2]),As(t[3]))|Bs(t[4]))>>>0:null}(e);if(null===t)return e;t=t||0;return`rgba(${(4278190080&t)>>>24}, ${(16711680&t)>>>16}, ${(65280&t)>>>8}, ${(255&t)/255})`}var Os=(e,t,r)=>{if(qi.fun(e))return e;if(qi.arr(e))return Os({range:e,output:t,extrapolate:r});if(qi.str(e.output[0]))return Ji(e);const n=e,o=n.output,i=n.range||[0,1],s=n.extrapolateLeft||n.extrapolate||"extend",a=n.extrapolateRight||n.extrapolate||"extend",l=n.easing||(e=>e);return e=>{const t=function(e,t){for(var r=1;r<t.length-1&&!(t[r]>=e);++r);return r-1}(e,i);return function(e,t,r,n,o,i,s,a,l){let d=l?l(e):e;if(d<t){if("identity"===s)return d;"clamp"===s&&(d=t)}if(d>r){if("identity"===a)return d;"clamp"===a&&(d=r)}if(n===o)return n;if(t===r)return e<=t?n:o;t===-1/0?d=-d:r===1/0?d-=t:d=(d-t)/(r-t);d=i(d),n===-1/0?d=-d:o===1/0?d+=n:d=d*(o-n)+n;return d}(e,i[t],i[t+1],o[t],o[t+1],l,s,a,n.map)}};var Ms=1.70158,_s=1.525*Ms,Rs=Ms+1,Hs=2*Math.PI/3,js=2*Math.PI/4.5,Ls=e=>{const t=7.5625,r=2.75;return e<1/r?t*e*e:e<2/r?t*(e-=1.5/r)*e+.75:e<2.5/r?t*(e-=2.25/r)*e+.9375:t*(e-=2.625/r)*e+.984375},Ps={linear:e=>e,easeInQuad:e=>e*e,easeOutQuad:e=>1-(1-e)*(1-e),easeInOutQuad:e=>e<.5?2*e*e:1-Math.pow(-2*e+2,2)/2,easeInCubic:e=>e*e*e,easeOutCubic:e=>1-Math.pow(1-e,3),easeInOutCubic:e=>e<.5?4*e*e*e:1-Math.pow(-2*e+2,3)/2,easeInQuart:e=>e*e*e*e,easeOutQuart:e=>1-Math.pow(1-e,4),easeInOutQuart:e=>e<.5?8*e*e*e*e:1-Math.pow(-2*e+2,4)/2,easeInQuint:e=>e*e*e*e*e,easeOutQuint:e=>1-Math.pow(1-e,5),easeInOutQuint:e=>e<.5?16*e*e*e*e*e:1-Math.pow(-2*e+2,5)/2,easeInSine:e=>1-Math.cos(e*Math.PI/2),easeOutSine:e=>Math.sin(e*Math.PI/2),easeInOutSine:e=>-(Math.cos(Math.PI*e)-1)/2,easeInExpo:e=>0===e?0:Math.pow(2,10*e-10),easeOutExpo:e=>1===e?1:1-Math.pow(2,-10*e),easeInOutExpo:e=>0===e?0:1===e?1:e<.5?Math.pow(2,20*e-10)/2:(2-Math.pow(2,-20*e+10))/2,easeInCirc:e=>1-Math.sqrt(1-Math.pow(e,2)),easeOutCirc:e=>Math.sqrt(1-Math.pow(e-1,2)),easeInOutCirc:e=>e<.5?(1-Math.sqrt(1-Math.pow(2*e,2)))/2:(Math.sqrt(1-Math.pow(-2*e+2,2))+1)/2,easeInBack:e=>Rs*e*e*e-Ms*e*e,easeOutBack:e=>1+Rs*Math.pow(e-1,3)+Ms*Math.pow(e-1,2),easeInOutBack:e=>e<.5?Math.pow(2*e,2)*(7.189819*e-_s)/2:(Math.pow(2*e-2,2)*((_s+1)*(2*e-2)+_s)+2)/2,easeInElastic:e=>0===e?0:1===e?1:-Math.pow(2,10*e-10)*Math.sin((10*e-10.75)*Hs),easeOutElastic:e=>0===e?0:1===e?1:Math.pow(2,-10*e)*Math.sin((10*e-.75)*Hs)+1,easeInOutElastic:e=>0===e?0:1===e?1:e<.5?-Math.pow(2,20*e-10)*Math.sin((20*e-11.125)*js)/2:Math.pow(2,-20*e+10)*Math.sin((20*e-11.125)*js)/2+1,easeInBounce:e=>1-Ls(1-e),easeOutBounce:Ls,easeInOutBounce:e=>e<.5?(1-Ls(1-2*e))/2:(1+Ls(2*e-1))/2,steps:(e,t="end")=>r=>{const n=(r="end"===t?Math.min(r,.999):Math.max(r,.001))*e,o="end"===t?Math.floor(n):Math.ceil(n);return i=0,s=1,a=o/e,Math.min(Math.max(a,i),s);var i,s,a}},Ws=Symbol.for("FluidValue.get"),Ns=Symbol.for("FluidValue.observers"),Vs=e=>Boolean(e&&e[Ws]),Ys=e=>e&&e[Ws]?e[Ws]():e,Us=e=>e[Ns]||null;function qs(e,t){const r=e[Ns];r&&r.forEach((e=>{!function(e,t){e.eventObserved?e.eventObserved(t):e(t)}(e,t)}))}var Gs=class{constructor(e){if(!e&&!(e=this.get))throw Error("Unknown getter");Zs(this,e)}},Zs=(e,t)=>Js(e,Ws,t);function Qs(e,t){if(e[Ws]){let r=e[Ns];r||Js(e,Ns,r=new Set),r.has(t)||(r.add(t),e.observerAdded&&e.observerAdded(r.size,t))}return t}function Xs(e,t){const r=e[Ns];if(r&&r.has(t)){const n=r.size-1;n?r.delete(t):e[Ns]=null,e.observerRemoved&&e.observerRemoved(n,t)}}var Ks,Js=(e,t,r)=>Object.defineProperty(e,t,{value:r,writable:!0,configurable:!0}),ea=/[+\-]?(?:0|[1-9]\d*)(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,ta=/(#(?:[0-9a-f]{2}){2,4}|(#[0-9a-f]{3})|(rgb|hsl)a?\((-?\d+%?[,\s]+){2,3}\s*[\d\.]+%?\))/gi,ra=new RegExp(`(${ea.source})(%|[a-z]+)`,"i"),na=/rgba\(([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+)\)/gi,oa=/var\((--[a-zA-Z0-9-_]+),? ?([a-zA-Z0-9 ()%#.,-]+)?\)/,ia=e=>{const[t,r]=sa(e);if(!t||rs())return e;const n=window.getComputedStyle(document.documentElement).getPropertyValue(t);if(n)return n.trim();if(r&&r.startsWith("--")){const t=window.getComputedStyle(document.documentElement).getPropertyValue(r);return t||e}return r&&oa.test(r)?ia(r):r||e},sa=e=>{const t=oa.exec(e);if(!t)return[,];const[,r,n]=t;return[r,n]},aa=(e,t,r,n,o)=>`rgba(${Math.round(t)}, ${Math.round(r)}, ${Math.round(n)}, ${o})`,la=e=>{Ks||(Ks=ns?new RegExp(`(${Object.keys(ns).join("|")})(?!\\w)`,"g"):/^\b$/);const t=e.output.map((e=>Ys(e).replace(oa,ia).replace(ta,zs).replace(Ks,zs))),r=t.map((e=>e.match(ea).map(Number))),n=r[0].map(((e,t)=>r.map((e=>{if(!(t in e))throw Error('The arity of each "output" value must be equal');return e[t]})))).map((t=>Os({...e,output:t})));return e=>{const r=!ra.test(t[0])&&t.find((e=>ra.test(e)))?.replace(ea,"");let o=0;return t[0].replace(ea,(()=>`${n[o++](e)}${r||""}`)).replace(na,aa)}},da="react-spring: ",ca=e=>{const t=e;let r=!1;if("function"!=typeof t)throw new TypeError(`${da}once requires a function parameter`);return(...e)=>{r||(t(...e),r=!0)}},ua=ca(console.warn);var ha=ca(console.warn);function ga(e){return qi.str(e)&&("#"==e[0]||/\d/.test(e)||!rs()&&oa.test(e)||e in(ns||{}))}var ma=rs()?s:h;function pa(){const e=a()[1],t=(()=>{const e=i(!1);return ma((()=>(e.current=!0,()=>{e.current=!1})),[]),e})();return()=>{t.current&&e(Math.random())}}var fa=e=>s(e,ba),ba=[];function ya(e){const t=i();return s((()=>{t.current=e})),t.current}var va=Symbol.for("Animated:node"),xa=e=>e&&e[va],wa=(e,t)=>((e,t,r)=>Object.defineProperty(e,t,{value:r,writable:!0,configurable:!0}))(e,va,t),$a=e=>e&&e[va]&&e[va].getPayload(),Fa=class{constructor(){wa(this,this)}getPayload(){return this.payload||[]}},Ca=class extends Fa{constructor(e){super(),this._value=e,this.done=!0,this.durationProgress=0,qi.num(this._value)&&(this.lastPosition=this._value)}static create(e){return new Ca(e)}getPayload(){return[this]}getValue(){return this._value}setValue(e,t){return qi.num(e)&&(this.lastPosition=e,t&&(e=Math.round(e/t)*t,this.done&&(this.lastPosition=e))),this._value!==e&&(this._value=e,!0)}reset(){const{done:e}=this;this.done=!1,qi.num(this._value)&&(this.elapsedTime=0,this.durationProgress=0,this.lastPosition=this._value,e&&(this.lastVelocity=null),this.v0=null)}},Ea=class extends Ca{constructor(e){super(0),this._string=null,this._toString=Os({output:[e,e]})}static create(e){return new Ea(e)}getValue(){const e=this._string;return null==e?this._string=this._toString(this._value):e}setValue(e){if(qi.str(e)){if(e==this._string)return!1;this._string=e,this._value=1}else{if(!super.setValue(e))return!1;this._string=null}return!0}reset(e){e&&(this._toString=Os({output:[this.getValue(),e]})),this._value=0,super.reset()}},Sa={dependencies:null},ka=class extends Fa{constructor(e){super(),this.source=e,this.setValue(e)}getValue(e){const t={};return Qi(this.source,((r,n)=>{var o;(o=r)&&o[va]===o?t[n]=r.getValue(e):Vs(r)?t[n]=Ys(r):e||(t[n]=r)})),t}setValue(e){this.source=e,this.payload=this._makePayload(e)}reset(){this.payload&&Zi(this.payload,(e=>e.reset()))}_makePayload(e){if(e){const t=new Set;return Qi(e,this._addToPayload,t),Array.from(t)}}_addToPayload(e){Sa.dependencies&&Vs(e)&&Sa.dependencies.add(e);const t=$a(e);t&&Zi(t,(e=>this.add(e)))}},Da=class extends ka{constructor(e){super(e)}static create(e){return new Da(e)}getValue(){return this.source.map((e=>e.getValue()))}setValue(e){const t=this.getPayload();return e.length==t.length?t.map(((t,r)=>t.setValue(e[r]))).some(Boolean):(super.setValue(e.map(Ia)),!0)}};function Ia(e){return(ga(e)?Ea:Ca).create(e)}function Ta(e){const t=xa(e);return t?t.constructor:qi.arr(e)?Da:ga(e)?Ea:Ca}var Ba=(e,t)=>{const r=!qi.fun(e)||e.prototype&&e.prototype.isReactComponent;return g(((o,a)=>{const l=i(null),d=r&&m((e=>{l.current=function(e,t){e&&(qi.fun(e)?e(t):e.current=t);return t}(a,e)}),[a]),[c,u]=function(e,t){const r=new Set;Sa.dependencies=r,e.style&&(e={...e,style:t.createAnimatedStyle(e.style)});return e=new ka(e),Sa.dependencies=null,[e,r]}(o,t),h=pa(),g=()=>{const e=l.current;if(r&&!e)return;!1===(!!e&&t.applyAnimatedValues(e,c.getValue(!0)))&&h()},p=new Aa(g,u),f=i();ma((()=>(f.current=p,Zi(u,(e=>Qs(e,p))),()=>{f.current&&(Zi(f.current.deps,(e=>Xs(e,f.current))),Ii.cancel(f.current.update))}))),s(g,[]),fa((()=>()=>{const e=f.current;Zi(e.deps,(t=>Xs(t,e)))}));const b=t.getComponentProps(c.getValue());return n.createElement(e,{...b,ref:d})}))},Aa=class{constructor(e,t){this.update=e,this.deps=t}eventObserved(e){"change"==e.type&&Ii.write(this.update)}};var za=Symbol.for("AnimatedComponent"),Oa=e=>qi.str(e)?e:e&&qi.str(e.displayName)?e.displayName:qi.fun(e)&&e.name||null;function Ma(e,...t){return qi.fun(e)?e(...t):e}var _a=(e,t)=>!0===e||!!(t&&e&&(qi.fun(e)?e(t):Xi(e).includes(t))),Ra=(e,t)=>qi.obj(e)?t&&e[t]:e,Ha=(e,t)=>!0===e.default?e[t]:e.default?e.default[t]:void 0,ja=e=>e,La=(e,t=ja)=>{let r=Pa;e.default&&!0!==e.default&&(e=e.default,r=Object.keys(e));const n={};for(const o of r){const r=t(e[o],o);qi.und(r)||(n[o]=r)}return n},Pa=["config","onProps","onStart","onChange","onPause","onResume","onRest"],Wa={config:1,from:1,to:1,ref:1,loop:1,reset:1,pause:1,cancel:1,reverse:1,immediate:1,default:1,delay:1,onProps:1,onStart:1,onChange:1,onPause:1,onResume:1,onRest:1,onResolve:1,items:1,trail:1,sort:1,expires:1,initial:1,enter:1,update:1,leave:1,children:1,onDestroyed:1,keys:1,callId:1,parentId:1};function Na(e){const t=function(e){const t={};let r=0;if(Qi(e,((e,n)=>{Wa[n]||(t[n]=e,r++)})),r)return t}(e);if(t){const r={to:t};return Qi(e,((e,n)=>n in t||(r[n]=e))),r}return{...e}}function Va(e){return e=Ys(e),qi.arr(e)?e.map(Va):ga(e)?ki.createStringInterpolator({range:[0,1],output:[e,e]})(1):e}function Ya(e){return qi.fun(e)||qi.arr(e)&&qi.obj(e[0])}var Ua={tension:170,friction:26,mass:1,damping:1,easing:Ps.linear,clamp:!1},qa=class{constructor(){this.velocity=0,Object.assign(this,Ua)}};function Ga(e,t){if(qi.und(t.decay)){const r=!qi.und(t.tension)||!qi.und(t.friction);!r&&qi.und(t.frequency)&&qi.und(t.damping)&&qi.und(t.mass)||(e.duration=void 0,e.decay=void 0),r&&(e.frequency=void 0)}else e.duration=void 0}var Za=[],Qa=class{constructor(){this.changed=!1,this.values=Za,this.toValues=null,this.fromValues=Za,this.config=new qa,this.immediate=!1}};function Xa(e,{key:t,props:r,defaultProps:n,state:o,actions:i}){return new Promise(((s,a)=>{let l,d,c=_a(r.cancel??n?.cancel,t);if(c)g();else{qi.und(r.pause)||(o.paused=_a(r.pause,t));let e=n?.pause;!0!==e&&(e=o.paused||_a(e,t)),l=Ma(r.delay||0,t),e?(o.resumeQueue.add(h),i.pause()):(i.resume(),h())}function u(){o.resumeQueue.add(h),o.timeouts.delete(d),d.cancel(),l=d.time-Ii.now()}function h(){l>0&&!ki.skipAnimation?(o.delayed=!0,d=Ii.setTimeout(g,l),o.pauseQueue.add(u),o.timeouts.add(d)):g()}function g(){o.delayed&&(o.delayed=!1),o.pauseQueue.delete(u),o.timeouts.delete(d),e<=(o.cancelId||0)&&(c=!0);try{i.start({...r,callId:e,cancel:c},s)}catch(e){a(e)}}}))}var Ka=(e,t)=>1==t.length?t[0]:t.some((e=>e.cancelled))?tl(e.get()):t.every((e=>e.noop))?Ja(e.get()):el(e.get(),t.every((e=>e.finished))),Ja=e=>({value:e,noop:!0,finished:!0,cancelled:!1}),el=(e,t,r=!1)=>({value:e,finished:t,cancelled:r}),tl=e=>({value:e,cancelled:!0,finished:!1});function rl(e,t,r,n){const{callId:o,parentId:i,onRest:s}=t,{asyncTo:a,promise:l}=r;return i||e!==a||t.reset?r.promise=(async()=>{r.asyncId=o,r.asyncTo=e;const d=La(t,((e,t)=>"onRest"===t?void 0:e));let c,u;const h=new Promise(((e,t)=>(c=e,u=t))),g=e=>{const t=o<=(r.cancelId||0)&&tl(n)||o!==r.asyncId&&el(n,!1);if(t)throw e.result=t,u(e),e},m=(e,t)=>{const i=new ol,s=new il;return(async()=>{if(ki.skipAnimation)throw nl(r),s.result=el(n,!1),u(s),s;g(i);const a=qi.obj(e)?{...e}:{...t,to:e};a.parentId=o,Qi(d,((e,t)=>{qi.und(a[t])&&(a[t]=e)}));const l=await n.start(a);return g(i),r.paused&&await new Promise((e=>{r.resumeQueue.add(e)})),l})()};let p;if(ki.skipAnimation)return nl(r),el(n,!1);try{let t;t=qi.arr(e)?(async e=>{for(const t of e)await m(t)})(e):Promise.resolve(e(m,n.stop.bind(n))),await Promise.all([t.then(c),h]),p=el(n.get(),!0,!1)}catch(e){if(e instanceof ol)p=e.result;else{if(!(e instanceof il))throw e;p=e.result}}finally{o==r.asyncId&&(r.asyncId=i,r.asyncTo=i?a:void 0,r.promise=i?l:void 0)}return qi.fun(s)&&Ii.batchedUpdates((()=>{s(p,n,n.item)})),p})():l}function nl(e,t){Ki(e.timeouts,(e=>e.cancel())),e.pauseQueue.clear(),e.resumeQueue.clear(),e.asyncId=e.asyncTo=e.promise=void 0,t&&(e.cancelId=t)}var ol=class extends Error{constructor(){super("An async animation has been interrupted. You see this error because you forgot to use `await` or `.catch(...)` on its returned promise.")}},il=class extends Error{constructor(){super("SkipAnimationSignal")}},sl=e=>e instanceof ll,al=1,ll=class extends Gs{constructor(){super(...arguments),this.id=al++,this._priority=0}get priority(){return this._priority}set priority(e){this._priority!=e&&(this._priority=e,this._onPriorityChange(e))}get(){const e=xa(this);return e&&e.getValue()}to(...e){return ki.to(this,e)}interpolate(...e){return ua(`${da}The "interpolate" function is deprecated in v9 (use "to" instead)`),ki.to(this,e)}toJSON(){return this.get()}observerAdded(e){1==e&&this._attach()}observerRemoved(e){0==e&&this._detach()}_attach(){}_detach(){}_onChange(e,t=!1){qs(this,{type:"change",parent:this,value:e,idle:t})}_onPriorityChange(e){this.idle||us.sort(this),qs(this,{type:"priority",parent:this,priority:e})}},dl=Symbol.for("SpringPhase"),cl=e=>(1&e[dl])>0,ul=e=>(2&e[dl])>0,hl=e=>(4&e[dl])>0,gl=(e,t)=>t?e[dl]|=3:e[dl]&=-3,ml=(e,t)=>t?e[dl]|=4:e[dl]&=-5,pl=class extends ll{constructor(e,t){if(super(),this.animation=new Qa,this.defaultProps={},this._state={paused:!1,delayed:!1,pauseQueue:new Set,resumeQueue:new Set,timeouts:new Set},this._pendingCalls=new Set,this._lastCallId=0,this._lastToId=0,this._memoizedDuration=0,!qi.und(e)||!qi.und(t)){const r=qi.obj(e)?{...e}:{...t,from:e};qi.und(r.default)&&(r.default=!0),this.start(r)}}get idle(){return!(ul(this)||this._state.asyncTo)||hl(this)}get goal(){return Ys(this.animation.to)}get velocity(){const e=xa(this);return e instanceof Ca?e.lastVelocity||0:e.getPayload().map((e=>e.lastVelocity||0))}get hasAnimated(){return cl(this)}get isAnimating(){return ul(this)}get isPaused(){return hl(this)}get isDelayed(){return this._state.delayed}advance(e){let t=!0,r=!1;const n=this.animation;let{toValues:o}=n;const{config:i}=n,s=$a(n.to);!s&&Vs(n.to)&&(o=Xi(Ys(n.to))),n.values.forEach(((a,l)=>{if(a.done)return;const d=a.constructor==Ea?1:s?s[l].lastPosition:o[l];let c=n.immediate,u=d;if(!c){if(u=a.lastPosition,i.tension<=0)return void(a.done=!0);let t=a.elapsedTime+=e;const r=n.fromValues[l],o=null!=a.v0?a.v0:a.v0=qi.arr(i.velocity)?i.velocity[l]:i.velocity;let s;const h=i.precision||(r==d?.005:Math.min(1,.001*Math.abs(d-r)));if(qi.und(i.duration))if(i.decay){const e=!0===i.decay?.998:i.decay,n=Math.exp(-(1-e)*t);u=r+o/(1-e)*(1-n),c=Math.abs(a.lastPosition-u)<=h,s=o*n}else{s=null==a.lastVelocity?o:a.lastVelocity;const t=i.restVelocity||h/10,n=i.clamp?0:i.bounce,l=!qi.und(n),g=r==d?a.v0>0:r<d;let m,p=!1;const f=1,b=Math.ceil(e/f);for(let e=0;e<b&&(m=Math.abs(s)>t,m||(c=Math.abs(d-u)<=h,!c));++e){l&&(p=u==d||u>d==g,p&&(s=-s*n,u=d));s+=(1e-6*-i.tension*(u-d)+.001*-i.friction*s)/i.mass*f,u+=s*f}}else{let n=1;i.duration>0&&(this._memoizedDuration!==i.duration&&(this._memoizedDuration=i.duration,a.durationProgress>0&&(a.elapsedTime=i.duration*a.durationProgress,t=a.elapsedTime+=e)),n=(i.progress||0)+t/this._memoizedDuration,n=n>1?1:n<0?0:n,a.durationProgress=n),u=r+i.easing(n)*(d-r),s=(u-a.lastPosition)/e,c=1==n}a.lastVelocity=s,Number.isNaN(u)&&(console.warn("Got NaN while animating:",this),c=!0)}s&&!s[l].done&&(c=!1),c?a.done=!0:t=!1,a.setValue(u,i.round)&&(r=!0)}));const a=xa(this),l=a.getValue();if(t){const e=Ys(n.to);l===e&&!r||i.decay?r&&i.decay&&this._onChange(l):(a.setValue(e),this._onChange(e)),this._stop()}else r&&this._onChange(l)}set(e){return Ii.batchedUpdates((()=>{this._stop(),this._focus(e),this._set(e)})),this}pause(){this._update({pause:!0})}resume(){this._update({pause:!1})}finish(){if(ul(this)){const{to:e,config:t}=this.animation;Ii.batchedUpdates((()=>{this._onStart(),t.decay||this._set(e,!1),this._stop()}))}return this}update(e){return(this.queue||(this.queue=[])).push(e),this}start(e,t){let r;return qi.und(e)?(r=this.queue||[],this.queue=[]):r=[qi.obj(e)?e:{...t,to:e}],Promise.all(r.map((e=>this._update(e)))).then((e=>Ka(this,e)))}stop(e){const{to:t}=this.animation;return this._focus(this.get()),nl(this._state,e&&this._lastCallId),Ii.batchedUpdates((()=>this._stop(t,e))),this}reset(){this._update({reset:!0})}eventObserved(e){"change"==e.type?this._start():"priority"==e.type&&(this.priority=e.priority+1)}_prepareNode(e){const t=this.key||"";let{to:r,from:n}=e;r=qi.obj(r)?r[t]:r,(null==r||Ya(r))&&(r=void 0),n=qi.obj(n)?n[t]:n,null==n&&(n=void 0);const o={to:r,from:n};return cl(this)||(e.reverse&&([r,n]=[n,r]),n=Ys(n),qi.und(n)?xa(this)||this._set(r):this._set(n)),o}_update({...e},t){const{key:r,defaultProps:n}=this;e.default&&Object.assign(n,La(e,((e,t)=>/^on/.test(t)?Ra(e,r):e))),$l(this,e,"onProps"),Fl(this,"onProps",e,this);const o=this._prepareNode(e);if(Object.isFrozen(this))throw Error("Cannot animate a `SpringValue` object that is frozen. Did you forget to pass your component to `animated(...)` before animating its props?");const i=this._state;return Xa(++this._lastCallId,{key:r,props:e,defaultProps:n,state:i,actions:{pause:()=>{hl(this)||(ml(this,!0),ts(i.pauseQueue),Fl(this,"onPause",el(this,fl(this,this.animation.to)),this))},resume:()=>{hl(this)&&(ml(this,!1),ul(this)&&this._resume(),ts(i.resumeQueue),Fl(this,"onResume",el(this,fl(this,this.animation.to)),this))},start:this._merge.bind(this,o)}}).then((r=>{if(e.loop&&r.finished&&(!t||!r.noop)){const t=bl(e);if(t)return this._update(t,!0)}return r}))}_merge(e,t,r){if(t.cancel)return this.stop(!0),r(tl(this));const n=!qi.und(e.to),o=!qi.und(e.from);if(n||o){if(!(t.callId>this._lastToId))return r(tl(this));this._lastToId=t.callId}const{key:i,defaultProps:s,animation:a}=this,{to:l,from:d}=a;let{to:c=l,from:u=d}=e;!o||n||t.default&&!qi.und(c)||(c=u),t.reverse&&([c,u]=[u,c]);const h=!Gi(u,d);h&&(a.from=u),u=Ys(u);const g=!Gi(c,l);g&&this._focus(c);const m=Ya(t.to),{config:p}=a,{decay:f,velocity:b}=p;(n||o)&&(p.velocity=0),t.config&&!m&&function(e,t,r){r&&(Ga(r={...r},t),t={...r,...t}),Ga(e,t),Object.assign(e,t);for(const t in Ua)null==e[t]&&(e[t]=Ua[t]);let{frequency:n,damping:o}=e;const{mass:i}=e;qi.und(n)||(n<.01&&(n=.01),o<0&&(o=0),e.tension=Math.pow(2*Math.PI/n,2)*i,e.friction=4*Math.PI*o*i/n)}(p,Ma(t.config,i),t.config!==s.config?Ma(s.config,i):void 0);let y=xa(this);if(!y||qi.und(c))return r(el(this,!0));const v=qi.und(t.reset)?o&&!t.default:!qi.und(u)&&_a(t.reset,i),x=v?u:this.get(),w=Va(c),$=qi.num(w)||qi.arr(w)||ga(w),F=!m&&(!$||_a(s.immediate||t.immediate,i));if(g){const e=Ta(c);if(e!==y.constructor){if(!F)throw Error(`Cannot animate between ${y.constructor.name} and ${e.name}, as the "to" prop suggests`);y=this._set(w)}}const C=y.constructor;let E=Vs(c),S=!1;if(!E){const e=v||!cl(this)&&h;(g||e)&&(S=Gi(Va(x),w),E=!S),(Gi(a.immediate,F)||F)&&Gi(p.decay,f)&&Gi(p.velocity,b)||(E=!0)}if(S&&ul(this)&&(a.changed&&!v?E=!0:E||this._stop(l)),!m&&((E||Vs(l))&&(a.values=y.getPayload(),a.toValues=Vs(c)?null:C==Ea?[1]:Xi(w)),a.immediate!=F&&(a.immediate=F,F||v||this._set(l)),E)){const{onRest:e}=a;Zi(wl,(e=>$l(this,t,e)));const n=el(this,fl(this,l));ts(this._pendingCalls,n),this._pendingCalls.add(r),a.changed&&Ii.batchedUpdates((()=>{a.changed=!v,e?.(n,this),v?Ma(s.onRest,n):a.onStart?.(n,this)}))}v&&this._set(x),m?r(rl(t.to,t,this._state,this)):E?this._start():ul(this)&&!g?this._pendingCalls.add(r):r(Ja(x))}_focus(e){const t=this.animation;e!==t.to&&(Us(this)&&this._detach(),t.to=e,Us(this)&&this._attach())}_attach(){let e=0;const{to:t}=this.animation;Vs(t)&&(Qs(t,this),sl(t)&&(e=t.priority+1)),this.priority=e}_detach(){const{to:e}=this.animation;Vs(e)&&Xs(e,this)}_set(e,t=!0){const r=Ys(e);if(!qi.und(r)){const e=xa(this);if(!e||!Gi(r,e.getValue())){const n=Ta(r);e&&e.constructor==n?e.setValue(r):wa(this,n.create(r)),e&&Ii.batchedUpdates((()=>{this._onChange(r,t)}))}}return xa(this)}_onStart(){const e=this.animation;e.changed||(e.changed=!0,Fl(this,"onStart",el(this,fl(this,e.to)),this))}_onChange(e,t){t||(this._onStart(),Ma(this.animation.onChange,e,this)),Ma(this.defaultProps.onChange,e,this),super._onChange(e,t)}_start(){const e=this.animation;xa(this).reset(Ys(e.to)),e.immediate||(e.fromValues=e.values.map((e=>e.lastPosition))),ul(this)||(gl(this,!0),hl(this)||this._resume())}_resume(){ki.skipAnimation?this.finish():us.start(this)}_stop(e,t){if(ul(this)){gl(this,!1);const r=this.animation;Zi(r.values,(e=>{e.done=!0})),r.toValues&&(r.onChange=r.onPause=r.onResume=void 0),qs(this,{type:"idle",parent:this});const n=t?tl(this.get()):el(this.get(),fl(this,e??r.to));ts(this._pendingCalls,n),r.changed&&(r.changed=!1,Fl(this,"onRest",n,this))}}};function fl(e,t){const r=Va(t);return Gi(Va(e.get()),r)}function bl(e,t=e.loop,r=e.to){const n=Ma(t);if(n){const o=!0!==n&&Na(n),i=(o||e).reverse,s=!o||o.reset;return yl({...e,loop:t,default:!1,pause:void 0,to:!i||Ya(r)?r:void 0,from:s?e.from:void 0,reset:s,...o})}}function yl(e){const{to:t,from:r}=e=Na(e),n=new Set;return qi.obj(t)&&xl(t,n),qi.obj(r)&&xl(r,n),e.keys=n.size?Array.from(n):null,e}function vl(e){const t=yl(e);return qi.und(t.default)&&(t.default=La(t)),t}function xl(e,t){Qi(e,((e,r)=>null!=e&&t.add(r)))}var wl=["onStart","onRest","onChange","onPause","onResume"];function $l(e,t,r){e.animation[r]=t[r]!==Ha(t,r)?Ra(t[r],e.key):void 0}function Fl(e,t,...r){e.animation[t]?.(...r),e.defaultProps[t]?.(...r)}var Cl=["onStart","onChange","onRest"],El=1,Sl=class{constructor(e,t){this.id=El++,this.springs={},this.queue=[],this._lastAsyncId=0,this._active=new Set,this._changed=new Set,this._started=!1,this._state={paused:!1,pauseQueue:new Set,resumeQueue:new Set,timeouts:new Set},this._events={onStart:new Map,onChange:new Map,onRest:new Map},this._onFrame=this._onFrame.bind(this),t&&(this._flush=t),e&&this.start({default:!0,...e})}get idle(){return!this._state.asyncTo&&Object.values(this.springs).every((e=>e.idle&&!e.isDelayed&&!e.isPaused))}get item(){return this._item}set item(e){this._item=e}get(){const e={};return this.each(((t,r)=>e[r]=t.get())),e}set(e){for(const t in e){const r=e[t];qi.und(r)||this.springs[t].set(r)}}update(e){return e&&this.queue.push(yl(e)),this}start(e){let{queue:t}=this;return e?t=Xi(e).map(yl):this.queue=[],this._flush?this._flush(this,t):(zl(this,t),kl(this,t))}stop(e,t){if(e!==!!e&&(t=e),t){const r=this.springs;Zi(Xi(t),(t=>r[t].stop(!!e)))}else nl(this._state,this._lastAsyncId),this.each((t=>t.stop(!!e)));return this}pause(e){if(qi.und(e))this.start({pause:!0});else{const t=this.springs;Zi(Xi(e),(e=>t[e].pause()))}return this}resume(e){if(qi.und(e))this.start({pause:!1});else{const t=this.springs;Zi(Xi(e),(e=>t[e].resume()))}return this}each(e){Qi(this.springs,e)}_onFrame(){const{onStart:e,onChange:t,onRest:r}=this._events,n=this._active.size>0,o=this._changed.size>0;(n&&!this._started||o&&!this._started)&&(this._started=!0,Ki(e,(([e,t])=>{t.value=this.get(),e(t,this,this._item)})));const i=!n&&this._started,s=o||i&&r.size?this.get():null;o&&t.size&&Ki(t,(([e,t])=>{t.value=s,e(t,this,this._item)})),i&&(this._started=!1,Ki(r,(([e,t])=>{t.value=s,e(t,this,this._item)})))}eventObserved(e){if("change"==e.type)this._changed.add(e.parent),e.idle||this._active.add(e.parent);else{if("idle"!=e.type)return;this._active.delete(e.parent)}Ii.onFrame(this._onFrame)}};function kl(e,t){return Promise.all(t.map((t=>Dl(e,t)))).then((t=>Ka(e,t)))}async function Dl(e,t,r){const{keys:n,to:o,from:i,loop:s,onRest:a,onResolve:l}=t,d=qi.obj(t.default)&&t.default;s&&(t.loop=!1),!1===o&&(t.to=null),!1===i&&(t.from=null);const c=qi.arr(o)||qi.fun(o)?o:void 0;c?(t.to=void 0,t.onRest=void 0,d&&(d.onRest=void 0)):Zi(Cl,(r=>{const n=t[r];if(qi.fun(n)){const o=e._events[r];t[r]=({finished:e,cancelled:t})=>{const r=o.get(n);r?(e||(r.finished=!1),t&&(r.cancelled=!0)):o.set(n,{value:null,finished:e||!1,cancelled:t||!1})},d&&(d[r]=t[r])}}));const u=e._state;t.pause===!u.paused?(u.paused=t.pause,ts(t.pause?u.pauseQueue:u.resumeQueue)):u.paused&&(t.pause=!0);const h=(n||Object.keys(e.springs)).map((r=>e.springs[r].start(t))),g=!0===t.cancel||!0===Ha(t,"cancel");(c||g&&u.asyncId)&&h.push(Xa(++e._lastAsyncId,{props:t,state:u,actions:{pause:Ui,resume:Ui,start(t,r){g?(nl(u,e._lastAsyncId),r(tl(e))):(t.onRest=a,r(rl(c,t,u,e)))}}})),u.paused&&await new Promise((e=>{u.resumeQueue.add(e)}));const m=Ka(e,await Promise.all(h));if(s&&m.finished&&(!r||!m.noop)){const r=bl(t,s,o);if(r)return zl(e,[r]),Dl(e,r,!0)}return l&&Ii.batchedUpdates((()=>l(m,e,e.item))),m}function Il(e,t){const r={...e.springs};return t&&Zi(Xi(t),(e=>{qi.und(e.keys)&&(e=yl(e)),qi.obj(e.to)||(e={...e,to:void 0}),Al(r,e,(e=>Bl(e)))})),Tl(e,r),r}function Tl(e,t){Qi(t,((t,r)=>{e.springs[r]||(e.springs[r]=t,Qs(t,e))}))}function Bl(e,t){const r=new pl;return r.key=e,t&&Qs(r,t),r}function Al(e,t,r){t.keys&&Zi(t.keys,(n=>{(e[n]||(e[n]=r(n)))._prepareNode(t)}))}function zl(e,t){Zi(t,(t=>{Al(e.springs,t,(t=>Bl(t,e)))}))}var Ol,Ml,_l=({children:e,...t})=>{const r=p(Rl),o=t.pause||!!r.pause,l=t.immediate||!!r.immediate;t=function(e,t){const[r]=a((()=>({inputs:t,result:e()}))),n=i(),o=n.current;let l=o;l?Boolean(t&&l.inputs&&function(e,t){if(e.length!==t.length)return!1;for(let r=0;r<e.length;r++)if(e[r]!==t[r])return!1;return!0}(t,l.inputs))||(l={inputs:t,result:e()}):l=r;return s((()=>{n.current=l,o==r&&(r.inputs=r.result=void 0)}),[l]),l.result}((()=>({pause:o,immediate:l})),[o,l]);const{Provider:d}=Rl;return n.createElement(d,{value:t},e)},Rl=(Ol=_l,Ml={},Object.assign(Ol,n.createContext(Ml)),Ol.Provider._context=Ol,Ol.Consumer._context=Ol,Ol);_l.Provider=Rl.Provider,_l.Consumer=Rl.Consumer;var Hl=()=>{const e=[],t=function(t){ha(`${da}Directly calling start instead of using the api object is deprecated in v9 (use ".start" instead), this will be removed in later 0.X.0 versions`);const n=[];return Zi(e,((e,o)=>{if(qi.und(t))n.push(e.start());else{const i=r(t,e,o);i&&n.push(e.start(i))}})),n};t.current=e,t.add=function(t){e.includes(t)||e.push(t)},t.delete=function(t){const r=e.indexOf(t);~r&&e.splice(r,1)},t.pause=function(){return Zi(e,(e=>e.pause(...arguments))),this},t.resume=function(){return Zi(e,(e=>e.resume(...arguments))),this},t.set=function(t){Zi(e,((e,r)=>{const n=qi.fun(t)?t(r,e):t;n&&e.set(n)}))},t.start=function(t){const r=[];return Zi(e,((e,n)=>{if(qi.und(t))r.push(e.start());else{const o=this._getProps(t,e,n);o&&r.push(e.start(o))}})),r},t.stop=function(){return Zi(e,(e=>e.stop(...arguments))),this},t.update=function(t){return Zi(e,((e,r)=>e.update(this._getProps(t,e,r)))),this};const r=function(e,t,r){return qi.fun(e)?e(r,t):e};return t._getProps=r,t};function jl(e,t){const r=qi.fun(e),[[n],o]=function(e,t,r){const n=qi.fun(t)&&t;n&&!r&&(r=[]);const o=f((()=>n||3==arguments.length?Hl():void 0),[]),s=i(0),a=pa(),l=f((()=>({ctrls:[],queue:[],flush(e,t){const r=Il(e,t),n=s.current>0&&!l.queue.length&&!Object.keys(r).some((t=>!e.springs[t]));return n?kl(e,t):new Promise((n=>{Tl(e,r),l.queue.push((()=>{n(kl(e,t))})),a()}))}})),[]),d=i([...l.ctrls]),c=[],u=ya(e)||0;function h(e,r){for(let o=e;o<r;o++){const e=d.current[o]||(d.current[o]=new Sl(null,l.flush)),r=n?n(o,e):t[o];r&&(c[o]=vl(r))}}f((()=>{Zi(d.current.slice(e,u),(e=>{!function(e,t){e.ref?.delete(e),t?.delete(e)}(e,o),e.stop(!0)})),d.current.length=e,h(u,e)}),[e]),f((()=>{h(0,Math.min(u,e))}),r);const g=d.current.map(((e,t)=>Il(e,c[t]))),m=p(_l),b=ya(m),y=m!==b&&function(e){for(const t in e)return!0;return!1}(m);ma((()=>{s.current++,l.ctrls=d.current;const{queue:e}=l;e.length&&(l.queue=[],Zi(e,(e=>e()))),Zi(d.current,((e,t)=>{o?.add(e),y&&e.start({default:m});const r=c[t];r&&(function(e,t){t&&e.ref!==t&&(e.ref?.delete(e),t.add(e),e.ref=t)}(e,r.ref),e.ref?e.queue.push(r):e.start(r))}))})),fa((()=>()=>{Zi(l.ctrls,(e=>e.stop(!0)))}));const v=g.map((e=>({...e})));return o?[v,o]:v}(1,r?e:[e],r?t||[]:t);return r||2==arguments.length?[n,o]:n}var Ll=class extends ll{constructor(e,t){super(),this.source=e,this.idle=!0,this._active=new Set,this.calc=Os(...t);const r=this._get(),n=Ta(r);wa(this,n.create(r))}advance(e){const t=this._get();Gi(t,this.get())||(xa(this).setValue(t),this._onChange(t,this.idle)),!this.idle&&Wl(this._active)&&Nl(this)}_get(){const e=qi.arr(this.source)?this.source.map(Ys):Xi(Ys(this.source));return this.calc(...e)}_start(){this.idle&&!Wl(this._active)&&(this.idle=!1,Zi($a(this),(e=>{e.done=!1})),ki.skipAnimation?(Ii.batchedUpdates((()=>this.advance())),Nl(this)):us.start(this))}_attach(){let e=1;Zi(Xi(this.source),(t=>{Vs(t)&&Qs(t,this),sl(t)&&(t.idle||this._active.add(t),e=Math.max(e,t.priority+1))})),this.priority=e,this._start()}_detach(){Zi(Xi(this.source),(e=>{Vs(e)&&Xs(e,this)})),this._active.clear(),Nl(this)}eventObserved(e){"change"==e.type?e.idle?this.advance():(this._active.add(e.parent),this._start()):"idle"==e.type?this._active.delete(e.parent):"priority"==e.type&&(this.priority=Xi(this.source).reduce(((e,t)=>Math.max(e,(sl(t)?t.priority:0)+1)),0))}};function Pl(e){return!1!==e.idle}function Wl(e){return!e.size||Array.from(e).every(Pl)}function Nl(e){e.idle||(e.idle=!0,Zi($a(e),(e=>{e.done=!0})),qs(e,{type:"idle",parent:e}))}ki.assign({createStringInterpolator:la,to:(e,t)=>new Ll(e,t)});var Vl=/^--/;function Yl(e,t){return null==t||"boolean"==typeof t||""===t?"":"number"!=typeof t||0===t||Vl.test(e)||ql.hasOwnProperty(e)&&ql[e]?(""+t).trim():t+"px"}var Ul={};var ql={animationIterationCount:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Gl=["Webkit","Ms","Moz","O"];ql=Object.keys(ql).reduce(((e,t)=>(Gl.forEach((r=>e[((e,t)=>e+t.charAt(0).toUpperCase()+t.substring(1))(r,t)]=e[t])),e)),ql);var Zl=/^(matrix|translate|scale|rotate|skew)/,Ql=/^(translate)/,Xl=/^(rotate|skew)/,Kl=(e,t)=>qi.num(e)&&0!==e?e+t:e,Jl=(e,t)=>qi.arr(e)?e.every((e=>Jl(e,t))):qi.num(e)?e===t:parseFloat(e)===t,ed=class extends ka{constructor({x:e,y:t,z:r,...n}){const o=[],i=[];(e||t||r)&&(o.push([e||0,t||0,r||0]),i.push((e=>[`translate3d(${e.map((e=>Kl(e,"px"))).join(",")})`,Jl(e,0)]))),Qi(n,((e,t)=>{if("transform"===t)o.push([e||""]),i.push((e=>[e,""===e]));else if(Zl.test(t)){if(delete n[t],qi.und(e))return;const r=Ql.test(t)?"px":Xl.test(t)?"deg":"";o.push(Xi(e)),i.push("rotate3d"===t?([e,t,n,o])=>[`rotate3d(${e},${t},${n},${Kl(o,r)})`,Jl(o,0)]:e=>[`${t}(${e.map((e=>Kl(e,r))).join(",")})`,Jl(e,t.startsWith("scale")?1:0)])}})),o.length&&(n.transform=new td(o,i)),super(n)}},td=class extends Gs{constructor(e,t){super(),this.inputs=e,this.transforms=t,this._value=null}get(){return this._value||(this._value=this._get())}_get(){let e="",t=!0;return Zi(this.inputs,((r,n)=>{const o=Ys(r[0]),[i,s]=this.transforms[n](qi.arr(o)?o:r.map(Ys));e+=" "+i,t=t&&s})),t?"none":e}observerAdded(e){1==e&&Zi(this.inputs,(e=>Zi(e,(e=>Vs(e)&&Qs(e,this)))))}observerRemoved(e){0==e&&Zi(this.inputs,(e=>Zi(e,(e=>Vs(e)&&Xs(e,this)))))}eventObserved(e){"change"==e.type&&(this._value=null),qs(this,e)}};ki.assign({batchedUpdates:I,createStringInterpolator:la,colors:{transparent:0,aliceblue:4042850303,antiquewhite:4209760255,aqua:16777215,aquamarine:2147472639,azure:4043309055,beige:4126530815,bisque:4293182719,black:255,blanchedalmond:4293643775,blue:65535,blueviolet:2318131967,brown:2771004159,burlywood:3736635391,burntsienna:3934150143,cadetblue:1604231423,chartreuse:2147418367,chocolate:3530104575,coral:4286533887,cornflowerblue:1687547391,cornsilk:4294499583,crimson:3692313855,cyan:16777215,darkblue:35839,darkcyan:9145343,darkgoldenrod:3095792639,darkgray:2846468607,darkgreen:6553855,darkgrey:2846468607,darkkhaki:3182914559,darkmagenta:2332068863,darkolivegreen:1433087999,darkorange:4287365375,darkorchid:2570243327,darkred:2332033279,darksalmon:3918953215,darkseagreen:2411499519,darkslateblue:1211993087,darkslategray:793726975,darkslategrey:793726975,darkturquoise:13554175,darkviolet:2483082239,deeppink:4279538687,deepskyblue:12582911,dimgray:1768516095,dimgrey:1768516095,dodgerblue:512819199,firebrick:2988581631,floralwhite:4294635775,forestgreen:579543807,fuchsia:4278255615,gainsboro:3705462015,ghostwhite:4177068031,gold:4292280575,goldenrod:3668254975,gray:2155905279,green:8388863,greenyellow:2919182335,grey:2155905279,honeydew:4043305215,hotpink:4285117695,indianred:3445382399,indigo:1258324735,ivory:4294963455,khaki:4041641215,lavender:3873897215,lavenderblush:4293981695,lawngreen:2096890111,lemonchiffon:4294626815,lightblue:2916673279,lightcoral:4034953471,lightcyan:3774873599,lightgoldenrodyellow:4210742015,lightgray:3553874943,lightgreen:2431553791,lightgrey:3553874943,lightpink:4290167295,lightsalmon:4288707327,lightseagreen:548580095,lightskyblue:2278488831,lightslategray:2005441023,lightslategrey:2005441023,lightsteelblue:2965692159,lightyellow:4294959359,lime:16711935,limegreen:852308735,linen:4210091775,magenta:4278255615,maroon:2147483903,mediumaquamarine:1724754687,mediumblue:52735,mediumorchid:3126187007,mediumpurple:2473647103,mediumseagreen:1018393087,mediumslateblue:2070474495,mediumspringgreen:16423679,mediumturquoise:1221709055,mediumvioletred:3340076543,midnightblue:421097727,mintcream:4127193855,mistyrose:4293190143,moccasin:4293178879,navajowhite:4292783615,navy:33023,oldlace:4260751103,olive:2155872511,olivedrab:1804477439,orange:4289003775,orangered:4282712319,orchid:3664828159,palegoldenrod:4008225535,palegreen:2566625535,paleturquoise:2951671551,palevioletred:3681588223,papayawhip:4293907967,peachpuff:4292524543,peru:3448061951,pink:4290825215,plum:3718307327,powderblue:2967529215,purple:2147516671,rebeccapurple:1714657791,red:4278190335,rosybrown:3163525119,royalblue:1097458175,saddlebrown:2336560127,salmon:4202722047,sandybrown:4104413439,seagreen:780883967,seashell:4294307583,sienna:2689740287,silver:3233857791,skyblue:2278484991,slateblue:1784335871,slategray:1887473919,slategrey:1887473919,snow:4294638335,springgreen:16744447,steelblue:1182971135,tan:3535047935,teal:8421631,thistle:3636451583,tomato:4284696575,turquoise:1088475391,violet:4001558271,wheat:4125012991,white:4294967295,whitesmoke:4126537215,yellow:4294902015,yellowgreen:2597139199}});var rd=((e,{applyAnimatedValues:t=()=>!1,createAnimatedStyle:r=e=>new ka(e),getComponentProps:n=e=>e}={})=>{const o={applyAnimatedValues:t,createAnimatedStyle:r,getComponentProps:n},i=e=>{const t=Oa(e)||"Anonymous";return(e=qi.str(e)?i[e]||(i[e]=Ba(e,o)):e[za]||(e[za]=Ba(e,o))).displayName=`Animated(${t})`,e};return Qi(e,((t,r)=>{qi.arr(e)&&(r=Oa(t)),i[r]=i(t)})),{animated:i}})(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"],{applyAnimatedValues:function(e,t){if(!e.nodeType||!e.setAttribute)return!1;const r="filter"===e.nodeName||e.parentNode&&"filter"===e.parentNode.nodeName,{style:n,children:o,scrollTop:i,scrollLeft:s,viewBox:a,...l}=t,d=Object.values(l),c=Object.keys(l).map((t=>r||e.hasAttribute(t)?t:Ul[t]||(Ul[t]=t.replace(/([A-Z])/g,(e=>"-"+e.toLowerCase())))));void 0!==o&&(e.textContent=o);for(const t in n)if(n.hasOwnProperty(t)){const r=Yl(t,n[t]);Vl.test(t)?e.style.setProperty(t,r):e.style[t]=r}c.forEach(((t,r)=>{e.setAttribute(t,d[r])})),void 0!==i&&(e.scrollTop=i),void 0!==s&&(e.scrollLeft=s),void 0!==a&&e.setAttribute("viewBox",a)},createAnimatedStyle:e=>new ed(e),getComponentProps:({scrollTop:e,scrollLeft:t,...r})=>r}),nd=rd.animated;const od=w.div`
    display: inline-block;
    position: relative;
    width: ${({$size:e})=>e?`${e}px`:"1em"};
    height: ${({$size:e})=>e?`${e}px`:"1em"};
    color: ${e=>e.$color||"currentColor"};
`,id=F`
	0% {
	  transform: rotate(0deg);
	}
	100% {
	  transform: rotate(360deg);
	}
`,sd=w.div`
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
    animation: ${id} 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
`,ad=w(sd)`
    animation-delay: -0.45s;
`,ld=w(sd)`
    animation-delay: -0.3s;
`,dd=w(sd)`
    animation-delay: -0.15s;
`,cd=({color:r,className:n,size:o})=>e(od,{className:n,$size:o,$color:r,"data-testid":"component-loading-spinner",children:[t(sd,{id:"inner1"}),t(ad,{id:"inner2"}),t(ld,{id:"inner3"}),t(dd,{id:"inner4"})]}),ud={Button:{"button-radius":_n.md,"button-default-colour-bg":hn["bg-primary"],"button-default-colour-bg-hover":hn["bg-primary-hover"],"button-default-colour-text":hn["text-inverse"],"button-secondary-colour-border":hn["border-primary"],"button-secondary-colour-text":hn["text-primary"],"button-light-colour-text":hn["text-primary"],"button-link-colour-text":hn["text-primary"]}},hd={collections:{default:{Button:{"button-radius":_n.sm,"button-default-colour-bg":hn["bg-primary"],"button-default-colour-bg-hover":hn["bg-primary-hover"],"button-default-colour-text":hn["text-inverse"],"button-secondary-colour-border":hn["border-primary"],"button-secondary-colour-text":hn["text-primary"],"button-light-colour-text":hn["text-primary"],"button-link-colour-text":hn["text-primary"]}},pa:{Button:{"button-radius":_n.full,"button-default-colour-bg":hn["bg-primary"],"button-default-colour-bg-hover":hn["bg-primary-hover"],"button-default-colour-text":hn["text-inverse"],"button-secondary-colour-border":hn["border-primary"],"button-secondary-colour-text":hn["text-primary"],"button-light-colour-text":hn["text-primary"],"button-link-colour-text":hn["text-primary"]}},a11yplayground:ud},defaultValue:"default"},gd=(e,t)=>r=>{var n,o;const i=r.theme,s=jr(hd,null==i?void 0:i.componentScheme);return md((null===(o=null===(n=null==i?void 0:i.componentOverrides)||void 0===n?void 0:n[e])||void 0===o?void 0:o[t])||s[e][t],r)},md=(e,t)=>{switch(typeof e){case"function":return e(t);case"number":return e+"px";case"string":return e}},pd=gd("Button","button-radius"),fd=gd("Button","button-default-colour-bg"),bd=gd("Button","button-default-colour-bg-hover"),yd=gd("Button","button-default-colour-text"),vd=gd("Button","button-secondary-colour-border"),xd=gd("Button","button-secondary-colour-text"),wd=gd("Button","button-light-colour-text"),$d=gd("Button","button-link-colour-text"),Fd=w.button`
    padding: ${Yn["spacing-8"]} ${Yn["spacing-16"]};
    min-width: 4rem;
    border: ${Vn["width-010"]} ${Vn.solid} transparent;
    transition: all ${Nn["duration-250"]} ${Nn["ease-default"]};
    border-radius: ${pd};
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;

    // -----------------------------------------------------------------------------
    // BUTTON STYLE + TEXT COLOR
    // -----------------------------------------------------------------------------
    ${e=>{switch(e.$buttonStyle){case"secondary":return $`
                    background-color: ${Pn.bg};
                    border-color: ${e.$buttonIsDanger?Pn["border-error-strong"]:vd};

                    color: ${e.$buttonIsDanger?Pn["text-error"]:xd};

                    &:hover,
                    &:active {
                        background-color: ${Pn["bg-hover-neutral"]};
                    }
                `;case"light":return $`
                    background-color: ${Pn.bg};
                    border-color: ${Pn.border};

                    color: ${e.$buttonIsDanger?Pn["text-error"]:wd};

                    &:hover,
                    &:active {
                        background-color: ${Pn["bg-hover-neutral"]};
                    }
                `;case"link":return $`
                    background-color: transparent;

                    color: ${e.$buttonIsDanger?Pn["text-error"]:$d};
                    &:hover,
                    &:active {
                        background-color: ${Pn["bg-hover-neutral"]};
                    }
                `;case"disabled":return $`
                    background-color: ${Pn["bg-disabled"]};

                    cursor: not-allowed;

                    &:hover {
                        box-shadow: none;
                    }

                    color: ${Pn["text-disabled"]};
                `;default:return $`
                    background-color: ${e.$buttonIsDanger?Pn["bg-error-strong"]:fd};};

                    ${Gn.MaxWidth.sm} {
                        width: 100%;
                    }

                    color: ${yd}};

                    &:hover,
                    &:active {
                        background-color: ${e.$buttonIsDanger?Pn["bg-error-strong-hover"]:bd}
                        };
                    }
                `}}}

    // -----------------------------------------------------------------------------
	// BUTTON SIZE + TEXT SIZE
	// -----------------------------------------------------------------------------
	${e=>{switch(e.$buttonSizeStyle){case"small":return $`
                    height: 2.5rem;
                    ${Wn["body-md-semibold"]}

                    ${Gn.MaxWidth.xxs} {
                        height: auto;
                    }
                `;case"large":return $`
                    height: 4rem;
                    ${Wn["heading-md-semibold"]}

                    ${Gn.MaxWidth.xxs} {
                        height: auto;
                    }
                `;default:return $`
                    height: 3rem;
                    ${Wn["heading-xs-semibold"]}

                    ${Gn.MaxWidth.xxs} {
                        height: auto;
                    }
                `}}}
`,Cd=w(cd)`
    margin-right: 0.5rem;
`,Ed=(r,n)=>{const{children:o,disabled:i=!1,loading:s=!1,styleType:a="default",danger:l=!1,focusableWhenDisabled:d=!1,onClick:c}=r,u=ie(r,["children","disabled","loading","styleType","danger","focusableWhenDisabled","onClick"]),h={$buttonStyle:i?"disabled":a,$buttonSizeStyle:"default",$buttonIsDanger:l};return e(Fd,Object.assign({ref:n,"data-testid":u["data-testid"]||"button",disabled:i&&!d,"aria-disabled":i,"aria-busy":s,onClick:i?void 0:c},h,u,{children:[s&&t(Cd,{}),t("span",{children:o})]}))};Ed.displayName="Button.Default";const Sd=(r,n)=>{const{children:o,disabled:i=!1,loading:s=!1,styleType:a="default",danger:l=!1,focusableWhenDisabled:d=!1,onClick:c}=r,u=ie(r,["children","disabled","loading","styleType","danger","focusableWhenDisabled","onClick"]),h={$buttonStyle:i?"disabled":a,$buttonSizeStyle:"small",$buttonIsDanger:l};return e(Fd,Object.assign({ref:n,"data-testid":u["data-testid"]||"button",disabled:i&&!d,"aria-disabled":i,"aria-busy":s,onClick:i?void 0:c},h,u,{children:[s&&t(Cd,{}),t("span",{children:o})]}))};Sd.displayName="Button.Small";const kd=(r,n)=>{const{children:o,disabled:i=!1,loading:s=!1,styleType:a="default",danger:l=!1,focusableWhenDisabled:d=!1,onClick:c}=r,u=ie(r,["children","disabled","loading","styleType","danger","focusableWhenDisabled","onClick"]),h={$buttonStyle:i?"disabled":a,$buttonSizeStyle:"large",$buttonIsDanger:l};return e(Fd,Object.assign({ref:n,"data-testid":u["data-testid"]||"button",disabled:i&&!d,"aria-disabled":i,"aria-busy":s,onClick:i?void 0:c},h,u,{children:[s&&t(Cd,{}),t("span",{children:o})]}))};kd.displayName="Button.Large";const Dd={Default:o.forwardRef(Ed),Small:o.forwardRef(Sd),Large:o.forwardRef(kd)};var Id={exports:{}};Id.exports=function(){var e={LTS:"h:mm:ss A",LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D, YYYY",LLL:"MMMM D, YYYY h:mm A",LLLL:"dddd, MMMM D, YYYY h:mm A"},t=/(\[[^[]*\])|([-_:/.,()\s]+)|(A|a|YYYY|YY?|MM?M?M?|Do|DD?|hh?|HH?|mm?|ss?|S{1,3}|z|ZZ?)/g,r=/\d\d/,n=/\d\d?/,o=/\d*[^-_:/,()\s\d]+/,i={},s=function(e){return(e=+e)+(e>68?1900:2e3)},a=function(e){return function(t){this[e]=+t}},l=[/[+-]\d\d:?(\d\d)?|Z/,function(e){(this.zone||(this.zone={})).offset=function(e){if(!e)return 0;if("Z"===e)return 0;var t=e.match(/([+-]|\d\d)/g),r=60*t[1]+(+t[2]||0);return 0===r?0:"+"===t[0]?-r:r}(e)}],d=function(e){var t=i[e];return t&&(t.indexOf?t:t.s.concat(t.f))},c=function(e,t){var r,n=i.meridiem;if(n){for(var o=1;o<=24;o+=1)if(e.indexOf(n(o,0,t))>-1){r=o>12;break}}else r=e===(t?"pm":"PM");return r},u={A:[o,function(e){this.afternoon=c(e,!1)}],a:[o,function(e){this.afternoon=c(e,!0)}],S:[/\d/,function(e){this.milliseconds=100*+e}],SS:[r,function(e){this.milliseconds=10*+e}],SSS:[/\d{3}/,function(e){this.milliseconds=+e}],s:[n,a("seconds")],ss:[n,a("seconds")],m:[n,a("minutes")],mm:[n,a("minutes")],H:[n,a("hours")],h:[n,a("hours")],HH:[n,a("hours")],hh:[n,a("hours")],D:[n,a("day")],DD:[r,a("day")],Do:[o,function(e){var t=i.ordinal,r=e.match(/\d+/);if(this.day=r[0],t)for(var n=1;n<=31;n+=1)t(n).replace(/\[|\]/g,"")===e&&(this.day=n)}],M:[n,a("month")],MM:[r,a("month")],MMM:[o,function(e){var t=d("months"),r=(d("monthsShort")||t.map((function(e){return e.slice(0,3)}))).indexOf(e)+1;if(r<1)throw new Error;this.month=r%12||r}],MMMM:[o,function(e){var t=d("months").indexOf(e)+1;if(t<1)throw new Error;this.month=t%12||t}],Y:[/[+-]?\d+/,a("year")],YY:[r,function(e){this.year=s(e)}],YYYY:[/\d{4}/,a("year")],Z:l,ZZ:l};function h(r){var n,o;n=r,o=i&&i.formats;for(var s=(r=n.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g,(function(t,r,n){var i=n&&n.toUpperCase();return r||o[n]||e[n]||o[i].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g,(function(e,t,r){return t||r.slice(1)}))}))).match(t),a=s.length,l=0;l<a;l+=1){var d=s[l],c=u[d],h=c&&c[0],g=c&&c[1];s[l]=g?{regex:h,parser:g}:d.replace(/^\[|\]$/g,"")}return function(e){for(var t={},r=0,n=0;r<a;r+=1){var o=s[r];if("string"==typeof o)n+=o.length;else{var i=o.regex,l=o.parser,d=e.slice(n),c=i.exec(d)[0];l.call(t,c),e=e.replace(c,"")}}return function(e){var t=e.afternoon;if(void 0!==t){var r=e.hours;t?r<12&&(e.hours+=12):12===r&&(e.hours=0),delete e.afternoon}}(t),t}}return function(e,t,r){r.p.customParseFormat=!0,e&&e.parseTwoDigitYear&&(s=e.parseTwoDigitYear);var n=t.prototype,o=n.parse;n.parse=function(e){var t=e.date,n=e.utc,s=e.args;this.$u=n;var a=s[1];if("string"==typeof a){var l=!0===s[2],d=!0===s[3],c=l||d,u=s[2];d&&(u=s[2]),i=this.$locale(),!l&&u&&(i=r.Ls[u]),this.$d=function(e,t,r){try{if(["x","X"].indexOf(t)>-1)return new Date(("X"===t?1e3:1)*e);var n=h(t)(e),o=n.year,i=n.month,s=n.day,a=n.hours,l=n.minutes,d=n.seconds,c=n.milliseconds,u=n.zone,g=new Date,m=s||(o||i?1:g.getDate()),p=o||g.getFullYear(),f=0;o&&!i||(f=i>0?i-1:g.getMonth());var b=a||0,y=l||0,v=d||0,x=c||0;return u?new Date(Date.UTC(p,f,m,b,y,v,x+60*u.offset*1e3)):r?new Date(Date.UTC(p,f,m,b,y,v,x)):new Date(p,f,m,b,y,v,x)}catch(e){return new Date("")}}(t,a,n),this.init(),u&&!0!==u&&(this.$L=this.locale(u).$L),c&&t!=this.format(a)&&(this.$d=new Date("")),i={}}else if(a instanceof Array)for(var g=a.length,m=1;m<=g;m+=1){s[1]=a[m-1];var p=r.apply(this,s);if(p.isValid()){this.$d=p.$d,this.$L=p.$L,this.init();break}m===g&&(this.$d=new Date(""))}else o.call(this,e)}}}();var Td=le(Id.exports),Bd={exports:{}};Bd.exports=function(e,t,r){t.prototype.isBetween=function(e,t,n,o){var i=r(e),s=r(t),a="("===(o=o||"()")[0],l=")"===o[1];return(a?this.isAfter(i,n):!this.isBefore(i,n))&&(l?this.isBefore(s,n):!this.isAfter(s,n))||(a?this.isBefore(i,n):!this.isAfter(i,n))&&(l?this.isAfter(s,n):!this.isBefore(s,n))}};var Ad=le(Bd.exports),zd={exports:{}};zd.exports=function(e,t){t.prototype.isSameOrAfter=function(e,t){return this.isSame(e,t)||this.isAfter(e,t)}};var Od=le(zd.exports),Md={exports:{}};Md.exports=function(e,t){t.prototype.isSameOrBefore=function(e,t){return this.isSame(e,t)||this.isBefore(e,t)}};var _d,Rd,Hd,jd=le(Md.exports),Ld={exports:{}},Pd=le(Ld.exports=(_d={year:0,month:1,day:2,hour:3,minute:4,second:5},Rd={},function(e,t,r){var n,o=function(e,t,r){void 0===r&&(r={});var n=new Date(e),o=function(e,t){void 0===t&&(t={});var r=t.timeZoneName||"short",n=e+"|"+r,o=Rd[n];return o||(o=new Intl.DateTimeFormat("en-US",{hour12:!1,timeZone:e,year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit",timeZoneName:r}),Rd[n]=o),o}(t,r);return o.formatToParts(n)},i=function(e,t){for(var n=o(e,t),i=[],s=0;s<n.length;s+=1){var a=n[s],l=a.type,d=a.value,c=_d[l];c>=0&&(i[c]=parseInt(d,10))}var u=i[3],h=24===u?0:u,g=i[0]+"-"+i[1]+"-"+i[2]+" "+h+":"+i[4]+":"+i[5]+":000",m=+e;return(r.utc(g).valueOf()-(m-=m%1e3))/6e4},s=t.prototype;s.tz=function(e,t){void 0===e&&(e=n);var o=this.utcOffset(),i=this.toDate(),s=i.toLocaleString("en-US",{timeZone:e}),a=Math.round((i-new Date(s))/1e3/60),l=r(s,{locale:this.$L}).$set("millisecond",this.$ms).utcOffset(15*-Math.round(i.getTimezoneOffset()/15)-a,!0);if(t){var d=l.utcOffset();l=l.add(o-d,"minute")}return l.$x.$timezone=e,l},s.offsetName=function(e){var t=this.$x.$timezone||r.tz.guess(),n=o(this.valueOf(),t,{timeZoneName:e}).find((function(e){return"timezonename"===e.type.toLowerCase()}));return n&&n.value};var a=s.startOf;s.startOf=function(e,t){if(!this.$x||!this.$x.$timezone)return a.call(this,e,t);var n=r(this.format("YYYY-MM-DD HH:mm:ss:SSS"),{locale:this.$L});return a.call(n,e,t).tz(this.$x.$timezone,!0)},r.tz=function(e,t,o){var s=o&&t,a=o||t||n,l=i(+r(),a);if("string"!=typeof e)return r(e).tz(a);var d=function(e,t,r){var n=e-60*t*1e3,o=i(n,r);if(t===o)return[n,t];var s=i(n-=60*(o-t)*1e3,r);return o===s?[n,o]:[e-60*Math.min(o,s)*1e3,Math.max(o,s)]}(r.utc(e,s).valueOf(),l,a),c=d[0],u=d[1],h=r(c).utcOffset(u);return h.$x.$timezone=a,h},r.tz.guess=function(){return Intl.DateTimeFormat().resolvedOptions().timeZone},r.tz.setDefault=function(e){n=e}}));So.extend(Ad),So.extend(jd),So.extend(Od),So.extend(Td),So.extend(Pd),function(e){e.generateDays=e=>{const t=e.startOf("month"),r=So(t).startOf("week");return Wd(r).map((e=>Nd(e)))},e.generateDaysForCurrentWeek=e=>{const t=e.startOf("week");return Nd(t)},e.generateMonths=e=>{const t=[];for(let r=0;r<12;r++){const n=e.month(r);t.push(So(n))}return t},e.generateDecadeOfYears=e=>{const t=e.year(),r=10*Math.floor(t/10),n=e.year(r),o=[n.subtract(1,"year"),n];for(let e=1;e<11;e++)o.push(n.add(e,"year"));return o},e.getStartEndDecade=e=>{const t=10*Math.floor(+e.format("YYYY")/10);return{beginDecade:t,endDecade:+So(`${t+9}-01-01`).format("YYYY")}},e.convertTo12HourFormat=e=>{const t=So(e,"HH:mm");return t.isValid()?t.format("h:mm a"):""},e.isWithinRange=(e,t,r,n="day")=>!t&&!r||(t&&r?e.isBetween(t,r,n,"[]"):t?e.isSameOrAfter(t,n):e.isSameOrBefore(r,n)),e.isPreviousMonthWithinRange=(t,r)=>e.isWithinRange(t.subtract(1,"month"),r,void 0,"month"),e.isPreviousYearWithinRange=(t,r)=>e.isWithinRange(t.subtract(1,"year"),r,void 0,"year"),e.isPreviousDecadeWithinRange=(t,r)=>{const{beginDecade:n}=e.getStartEndDecade(t);return e.isWithinRange(t.year(n).subtract(1,"year"),r,void 0,"year")},e.isNextMonthWithinRange=(t,r)=>e.isWithinRange(t.add(1,"month"),void 0,r,"month"),e.isNextYearWithinRange=(t,r)=>e.isWithinRange(t.add(1,"year"),void 0,r,"year"),e.isNextDecadeWithinRange=(t,r)=>{const{endDecade:n}=e.getStartEndDecade(t);return e.isWithinRange(t.year(n).add(1,"year"),void 0,r,"year")},e.getWeekStartEnd=e=>({start:e.startOf("week").format("YYYY-MM-DD"),end:e.endOf("week").format("YYYY-MM-DD")}),e.getFixedRangeStartEnd=(e,t)=>({start:e.format("YYYY-MM-DD"),end:e.add(t-1,"day").format("YYYY-MM-DD")}),e.isDisabledDay=(t,r,n,o)=>{const i=e.isWithinRange(t,n?So(n):void 0,o?So(o):void 0),s=r&&r.includes(t.format("YYYY-MM-DD"));return!i||!!s}}(Hd||(Hd={}));const Wd=e=>{const t=[e];for(let r=1;r<6;r++){const n=e.add(r,"week");t.push(n)}return t},Nd=e=>{const t=[];for(let r=0;r<7;r++){const n=e.add(r,"day");t.push(n)}return t},Vd=[1,3,5,7,8,10,12],Yd=[4,6,9,11];var Ud,qd,Gd;function Zd(e){const t=i(null);return h((()=>{t.current=e}),[e]),m(((...e)=>{var r;return null===(r=t.current)||void 0===r?void 0:r.call(t,...e)}),[])}!function(e){e.clampDay=(t,r,n)=>{const o=parseInt(t),i=parseInt(r),s=parseInt(n);return 0==o?"1":Vd.includes(i)?Math.min(o,31).toString():Yd.includes(i)?Math.min(o,30).toString():2===i?e.isLeapYear(s)?Math.min(o,29).toString():Math.min(o,28).toString():t},e.clampMonth=e=>{const t=parseInt(e);return 0==t?"1":t>12?"12":e},e.isLeapYear=e=>e%4==0&&e%100!=0||e%400==0,e.getTimeDiffInMinutes=(e,t,r="HH:mm")=>{const n=So(e,r);return So(t,r).diff(n,"minute")},e.toDayjs=e=>e?So(e):So(),e.addMinutesToTime=(e,t,r="HH:mm")=>So(e,r).add(t,"minutes").format(r),e.isSame=(e,t,r="day")=>So(e).isSame(So(t),r)}(Ud||(Ud={})),function(e){e.isDateDisabled=(e,t)=>{const{disabledDates:r,minDate:n,maxDate:o}=t;return!!(e&&r&&r.length&&r.includes(e))||(!(!n||!So(e).isBefore(n,"day"))||!(!o||!So(e).isAfter(o,"day")))},e.sanitizeInput=e=>{if(e){if(So(e).isValid())return e}return""}}(qd||(qd={})),function(e){e.generate=()=>Math.random().toString(36).substring(2,9)}(Gd||(Gd={}));const Qd=e=>{const t=(e=>{const t=i(e),r=i();return s((()=>{r.current=t.current,t.current=e}),[e]),r.current})(e);return t!==e},Xd=e=>{const{textSize:t}=e||{};return $`
        // Text styling
        ${t&&Wn[`${t}-regular`]}

        strong {
            font-weight: ${Wn.Spec["weight-semibold"]};
            ${t&&Wn[`${t}-semibold`]};
        }

        p {
            margin: 0;
        }

        // Link styling
        a {
            font-weight: ${Wn.Spec["weight-semibold"]};
            ${t&&Wn[`${t}-semibold`]}
            color: ${Pn.hyperlink};
            text-decoration: none;

            svg {
                color: ${Pn["icon-primary"]};
                height: 1lh;
                width: 1em;
                margin-left: 0.4rem;
                vertical-align: middle;
            }

            :hover,
            :active,
            :visited,
            :focus {
                color: ${Pn["hyperlink-hover"]};

                svg {
                    color: ${Pn["icon-hover"]};
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
    `},Kd=e=>$`
    display: -webkit-box;
    -webkit-line-clamp: ${e};
    -webkit-box-orient: vertical;
    overflow: hidden;
`,Jd=(e,t,r=!1)=>$`
        ${Wn[`${e}-${t}`]}
        ${r?"margin-bottom: 1.05em;":"margin-bottom: 0;"}
    `,ec=e=>{if(e)return $`
            ${Kd(e)}
        `},tc=(e,t)=>$`
    ${Jd(e,t.weight||"regular",t.paragraph)}
    ${((e=!1,t=!1,r)=>t?$`
            display: block;
            ${ec(r)}
        `:e?$`
            display: inline;
        `:$`
            display: block;
            ${ec(r)}
        `)(t.inline,t.paragraph,t.maxLines)}
    color: ${Pn.text};
`;var rc;!function(r){const n=(e,t,r)=>{const n=w(e).attrs((({inline:e})=>({as:e?"span":void 0})))`
            ${e=>tc(t,e)}
        `;return n.displayName=`Typography.${r}`,n};r.HeadingXXL=n("h1","heading-xxl","HeadingXXL"),r.HeadingXL=n("h2","heading-xl","HeadingXL"),r.HeadingLG=n("h3","heading-lg","HeadingLG"),r.HeadingMD=n("h4","heading-md","HeadingMD"),r.HeadingSM=n("h5","heading-sm","HeadingSM"),r.HeadingXS=n("h6","heading-xs","HeadingXS");const o=(e,t)=>{const r=w.p.attrs((({inline:e})=>({as:e?"span":void 0})))`
            ${t=>tc(e,t)}
        `;return r.displayName=`Typography.${t}`,r};r.BodyBL=o("body-baseline","BodyBL"),r.BodyMD=o("body-md","BodyMD"),r.BodySM=o("body-sm","BodySM"),r.BodyXS=o("body-xs","BodyXS");const i=(r,n)=>{const o=w.a`
            ${e=>$`
                ${Jd(r,e.weight||"regular")}
                color: ${Pn.hyperlink};
                text-decoration: none;

                :hover,
                :active,
                :focus {
                    color: ${Pn["text-hover"]};
                }
            `}
        `,i=r=>{var{external:n=!1,children:i}=r,s=ie(r,["external","children"]);return e(o,Object.assign({},s,{children:[i,n&&t(nc,{})]}))};return i.displayName=`Typography.${n}`,i};r.LinkBL=i("body-baseline","LinkBL"),r.LinkMD=i("body-md","LinkMD"),r.LinkSM=i("body-sm","LinkSM"),r.LinkXS=i("body-xs","LinkXS")}(rc||(rc={}));const nc=w(M)`
    height: 1lh;
    width: 1em;
    margin-left: 0.4em;
    vertical-align: middle;
`,oc=w.div`
    padding: ${Yn["spacing-8"]} ${Yn["spacing-16"]};
    display: flex;

    ${e=>{let t,r;switch(e.$type){case"error":t=Pn["bg-error"](e),r=Pn["border-error"](e);break;case"success":t=Pn["bg-success"](e),r=Pn["border-success"](e);break;case"warning":default:t=Pn["bg-warning"](e),r=Pn["border-warning"](e);break;case"info":t=Pn["bg-info"](e),r=Pn["border-info"](e);break;case"description":t=Pn["bg-strong"](e),r=Pn["border-strong"](e)}return $`
            background: ${t};
            border-left: ${Vn["width-020"]} ${Vn.solid}
                ${r};
        `}}

    color: ${Pn.text};
    ${e=>"small"===e.$sizeType?Xd({textSize:"body-sm"}):Xd({textSize:"body-md"})}
`,ic=w.div`
    display: flex;
    align-items: center;
    height: 1lh;
    margin-right: ${Yn["spacing-8"]};

    ${e=>{let t;const r="small"===e.$sizeType?"1.25rem":"1.5rem";switch(e.$type){case"error":t=Pn["icon-error"](e);break;case"success":t=Pn["icon-success"](e);break;case"warning":default:t=Pn["icon-warning"](e);break;case"info":t=Pn["icon-info"](e);break;case"description":t=Pn["icon-subtle"](e)}return $`
            svg {
                color: ${t};
                width: ${r};
                height: ${r};
            }
        `}}
`,sc=w(rc.LinkSM)`
    ${e=>"small"===e.$sizeType?$`
                ${Wn["body-sm-semibold"]}
                margin-top: ${Yn["spacing-4"]};
            `:$`
                ${Wn["body-md-semibold"]}
                margin-top: ${Yn["spacing-8"]};
            `}
    display: flex;
    align-items: center;
    align-self: flex-start;

    svg {
        height: 1rem;
        width: 1rem;
        margin-left: ${Yn["spacing-4"]};
    }
`,ac=w.div`
    display: flex;
    flex-direction: column;
    flex: 1;
    overflow-wrap: anywhere;
`,lc=w.div`
    display: flex;
    flex-direction: column;
    flex: 1;
    ${e=>{if(e.$showMore&&e.$hasActionLink)return $`
                margin-bottom: ${Yn["spacing-8"]};
            `}}
    ${e=>{const t="linear-gradient(to bottom, black 50%, transparent 100%)";if(!e.$showMore&&e.$maxCollapsedHeight)return`\n                max-height: ${e.$maxCollapsedHeight}px;\n\t\t\t\toverflow: hidden;\n                -webkit-mask-image: ${t};\n                mask-image: ${t};\n\t\t\t`}}
`,dc=w.button`
    ${e=>"small"===e.$sizeType?$`
                ${Wn["body-sm-semibold"]}
            `:$`
                ${Wn["body-md-semibold"]}
            `}

    display: flex;
    align-items: center;
    align-self: flex-start;
    gap: ${Yn["spacing-4"]};
    margin-top: ${Yn["spacing-8"]};

    cursor: pointer;
    user-select: none;
    border: none;
    background: transparent;

    color: ${Pn["text-primary"]};
`,cc=w(x)`
    transform: rotate(${e=>e.$expanded?180:0}deg);
    transition: transform ${Nn["duration-350"]} ${Nn["ease-standard"]};
`,uc=w.div`
    height: 1.625rem;
    width: 1.625rem;
    margin-right: 0.5rem;
    flex-shrink: 0;

    svg {
        height: 100%;
        width: 100%;
    }

    ${e=>e.$disabled?e.$active?$`
                    color: ${Pn["icon-selected-disabled"]};
                `:$`
                    color: ${Pn["icon-disabled-subtle"]};
                `:e.$active?$`
                color: ${Pn["icon-selected"]};
            `:$`
            color: ${Pn["icon-subtle"]};
        `};
`,hc=$`
    margin-bottom: ${e=>e.$bottomMargin||0}rem;

    // Counter matters
    counter-reset: list;

    li {
        font-weight: ${Wn.Spec["weight-regular"]};
        ${e=>e.$size&&Wn[`${e.$size}-regular`]}
        color: ${Pn.text};
    }

    // nested lists styling
    ol,
    ul {
        margin-top: 0.5rem;
        margin-bottom: 0.5rem;
    }
`,gc=w.ol`
    ${hc}

    margin-left: 3rem;

    ${Gn.MaxWidth.lg} {
        margin-left: 2.5rem;
    }

    li {
        position: relative;
    }

    ${e=>{const{reversed:t}=e,r=e.$counterType||"decimal",n=e.$counterSeparator||")";return $`
            li:before {
                content: counter(list, ${r}) "${n}";
                counter-increment: ${t?"list -1":"list"};
                position: absolute;
                left: -2rem;
            }
        `}}

    ${e=>{const{reversed:t,start:r}=e;if(r){return $`
                counter-reset: list ${t?r+1:r-1};
            `}}}

    list-style-position: outside;
    list-style-type: none;

    ul > li:before {
        content: "";
    }
`,mc=w.ul`
    ${hc}

    margin-left: 2.5rem;
    list-style-type: ${e=>e.$bulletType||"disc"};
`,pc=e=>{var{size:r,bulletType:n,bottomMargin:o,children:i}=e,s=ie(e,["size","bulletType","bottomMargin","children"]);return t(mc,Object.assign({$size:r,$bulletType:n,$bottomMargin:o},s,{children:i}))};pc.displayName="TextList.Ul";const fc=e=>{var{size:r,counterType:n,counterSeparator:o,bottomMargin:i,children:s}=e,a=ie(e,["size","counterType","counterSeparator","bottomMargin","children"]);return t(gc,Object.assign({$size:r,$counterType:n,$counterSeparator:o,$bottomMargin:i},a,{children:s}))};fc.displayName="TextList.Ol";const bc=pc,yc=w.div`
    position: relative;
    display: inline-flex;
    min-width: 10.375rem;
    border-radius: ${Un.sm};
    border-width: 1px;
    border-style: solid;
    overflow: hidden;
    flex-direction: column;
    height: fit-content;
    background: ${Pn.bg};

    ${e=>{if(!e.$indicator)return $`
                justify-content: center;
            `}}

    // Container min width to fit content
    ${e=>{if(e.$useContentWidth)return $`
                min-width: unset;
            `}}

    // apply container border and header background color
    ${e=>"no-border"===e.$styleType?e.$error?e.$disabled?$`
                            border-color: ${Pn["border-error"]};
                        `:$`
                            border-color: ${Pn["border-error"]};

                            &:has(${Fc}:hover) {
                                background: ${Pn["bg-hover-subtle"]};
                            }
                        `:e.$disabled?e.$selected?$`
                            border: none;
                            background: ${Pn["bg-selected-disabled"]};
                        `:$`
                            border: none;
                        `:e.$selected?$`
                        border: none;
                        background: ${Pn["bg-selected"]};

                        &:has(${Fc}:hover) {
                            background: ${Pn["bg-selected-hover"]};

                            & ${xc} {
                                color: ${Pn["text-selected-hover"]};
                            }

                            & ${Ac} {
                                color: ${Pn["icon-selected-hover"]};
                            }
                        }
                    `:$`
                    border: none;

                    &:has(${Fc}:hover) {
                        background: ${Pn["bg-hover-subtle"]};
                    }
                `:e.$error?e.$disabled?$`
                            border-color: ${Pn["border-error"]};
                        `:$`
                            border-color: ${Pn["border-error"]};

                            &:has(${Fc}:hover) {
                                background: ${Pn["bg-hover-subtle"]};
                            }
                        `:e.$disabled?e.$selected?$`
                            border-color: ${Pn["border-selected-disabled"]};
                            background: ${Pn["bg-selected-disabled"]};
                        `:$`
                            border-color: ${Pn["border-disabled"]};
                            background: ${Pn["bg-disabled"]};
                        `:e.$selected?$`
                        border-color: ${Pn["border-selected"]};
                        background: ${Pn["bg-selected"]};

                        &:has(${Fc}:hover) {
                            background: ${Pn["bg-selected-hover"]};

                            & ${xc} {
                                color: ${Pn["text-selected-hover"]};
                            }

                            & ${Ac} {
                                color: ${Pn["icon-selected-hover"]};
                            }
                        }
                    `:$`
                    border-color: ${Pn.border};

                    &:has(${Fc}:hover) {
                        background: ${Pn["bg-hover-subtle"]};
                    }
                `}
`,vc=w.input`
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
`,xc=w.div`
    display: flex;
    flex-direction: column;
    overflow-wrap: anywhere;
    width: 100%;
    overflow: hidden;

    // apply header container text color
    ${e=>e.$disabled?e.$selected?$`
                    color: ${Pn["text-selected-disabled"]};
                `:$`
                    color: ${Pn["text-disabled"]};
                `:e.$selected?$`
                color: ${Pn["text-selected"]};
            `:$`
            color: ${Pn.text};
        `}
`,wc=w.label`
    ${Wn["body-baseline-regular"]}
    overflow: hidden;
    display: -webkit-box;
    text-overflow: ellipsis;
    -webkit-box-orient: vertical;
    overflow-wrap: break-word;
    -webkit-line-clamp: ${e=>{var t,r;return null!==(r=null===(t=e.$maxLines)||void 0===t?void 0:t.desktop)&&void 0!==r?r:"none"}};
    ${Gn.MaxWidth.lg} {
        -webkit-line-clamp: ${e=>{var t,r;return null!==(r=null===(t=e.$maxLines)||void 0===t?void 0:t.tablet)&&void 0!==r?r:"none"}};
    }
    ${Gn.MaxWidth.sm} {
        -webkit-line-clamp: ${e=>{var t,r;return null!==(r=null===(t=e.$maxLines)||void 0===t?void 0:t.mobile)&&void 0!==r?r:"none"}};
    }
`,$c=w.div`
    ${Wn["body-md-regular"]}
    margin-top: 0.5rem;

    z-index: 1; // forces sublabel to render above the input
    pointer-events: none; // to allow click events to be passed to the input

    strong,
    b {
        ${Wn["body-md-semibold"]}
    }
`,Fc=w.div`
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
`,Cc=w.div`
    display: flex;
    height: 100%;
    width: 100%;
    position: relative;
    padding: ${e=>e.$addPadding?"0.6875rem 0rem 0.6875rem 1rem":"0.6875rem 1rem"};
`,Ec=w.button`
    color: ${e=>e.$disabled?Pn["text-disabled"]:Pn["text-error"]};
    white-space: nowrap;
    ${Wn["body-md-semibold"]}
    height: fit-content;
    padding: 0.6875rem 1rem 0.6875rem 0.5rem;
    border: none;
    background: none;

    cursor: ${e=>e.$disabled?"not-allowed":"pointer"};
`,Sc=w.button`
    color: ${e=>e.disabled?Pn["text-disabled"]:Pn["text-primary"]};
    ${Wn["body-baseline-semibold"]}
    display: flex;
    align-items: center;
    justify-content: flex-end;
    border: none;
    background-color: ${Pn.bg};
    cursor: ${e=>e.disabled?"not-allowed":"pointer"};
    padding: 0 1rem 0.6875rem 1rem;
    padding-top: ${e=>e.$paddingTopRequired?"0.6875rem":"0rem"};
    width: 100%;

    svg {
        width: 1em;
        height: 1em;
        margin-left: 0.5rem;
    }
`,kc=w.div`
    width: 100%;
    color: ${e=>e.$disabled?Pn["text-disabled"]:Pn["text-error"]};
    border: none;
    background: ${Pn.bg};
    cursor: ${e=>e.$disabled?"not-allowed":"pointer"};
    padding: 0.6875rem 1rem 0.5rem 1rem;
`,Dc=w((r=>{var{type:n,className:o,children:i,actionLink:l,actionLinkIcon:d,sizeType:c="default",showIcon:u=!1,customIcon:h,maxCollapsedHeight:g}=r,m=ie(r,["type","className","children","actionLink","actionLinkIcon","sizeType","showIcon","customIcon","maxCollapsedHeight"]);const[p,f]=a(!1),[b,y]=a(!1),{height:v,ref:x}=Ei();s((()=>{w()}),[g,v]);const w=()=>{f(!g),y($())},$=()=>!(!v||!g)&&v>g;return e(oc,{className:o,$type:n,$sizeType:c,"data-testid":m["data-testid"],children:[u&&t(ic,{$sizeType:c,$type:n,children:(()=>{if(n&&h)return h;switch(n){case"success":return t(O,{});case"warning":return t(A,{});case"error":return t(B,{});case"info":case"description":return t(z,{});default:return null}})()}),e(ac,{children:[e(lc,{$maxCollapsedHeight:$()?g:void 0,$showMore:p,$hasActionLink:!!l,children:[t("div",{ref:x,children:i}),l?e(sc,Object.assign({"data-testid":"action-link",$type:n,$sizeType:c},l,{children:[l.children,d||t(T,{})]})):null]}),b&&e(dc,{$sizeType:c,$type:n,type:"button",onClick:()=>f(!p),children:["Show ",p?"less":"more",t(cc,{$expanded:p})]})]})]})}))`
    width: 100%;
    user-select: none;
`,Ic=w.div`
    padding: 0 1rem;
    padding-top: 0.6875rem;
    padding-bottom: ${e=>e.$isFinalItem?"0.6875rem":"0.5rem"};
    background-color: ${Pn.bg};
    ${Xd({textSize:"body-md"})}

    ${e=>e.$disabled?$`
                color: ${Pn["text-disabled"]};
            `:e.$selected?$`
                color: ${Pn["text-selected"]};
            `:$`
                color: ${Pn.text};
            `}
`,Tc=w(rc.BodyMD)`
    color: ${e=>e.$disabled?Pn["text-disabled"]:Pn["text-error"]};
`,Bc=w(bc)`
    color: ${e=>e.$disabled?Pn["text-disabled"]:Pn["text-error"]};
`,Ac=w((({type:e,active:r=!1,disabled:n,className:o})=>{let i;switch(e){case"checkbox":i=t(r?L:j,{});break;case"radio":i=t(r?R:_,{});break;case"tick":i=t(P,{});break;case"cross":i=t(H,{});break;default:i=null}return t(uc,{className:o,$active:r,$disabled:n,children:i})}))`
    ${e=>e.$disabled?e.$selected?$`
                    color: ${Pn["icon-selected-disabled"]};
                `:$`
                    color: ${Pn["icon-disabled-subtle"]};
                `:e.$selected?$`
                color: ${Pn["icon-selected"]};
            `:$`
            color: ${Pn["icon-subtle"]};
        `};
`,zc=w.button`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: ${Yn["spacing-24"]};
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
                background-color: ${Pn["bg-hover-neutral"]};
            `}
    }
`,Oc=o.forwardRef(((e,r)=>{var{children:n,focusHighlight:o=!0,focusOutline:i="none",type:s="button"}=e,a=ie(e,["children","focusHighlight","focusOutline","type"]);return t(zc,Object.assign({ref:r,$outline:i,$highlight:o,type:s},a,{children:n}))})),Mc=w(nd.div)`
    position: absolute;
    top: calc(3rem + ${Yn["spacing-8"]});
    left: 0;
    overflow: hidden;
    z-index: 1;

    ${Gn.MaxWidth.xxs} {
        max-width: 100%;
    }
`,_c=w.div`
    position: relative;
    width: 100%;
    padding: ${Yn["spacing-8"]} ${Yn["spacing-20"]}
        ${Yn["spacing-24"]} ${Yn["spacing-20"]};
    display: flex;
    flex-direction: column;
    background: ${Pn.bg};
    border: ${Vn["width-010"]} ${Vn.solid} ${Pn.border};
    border-radius: ${Un.sm};
`,Rc=w.div`
    display: flex;
    align-items: center;
    justify-content: space-between;

    ${Gn.MaxWidth.xxs} {
        flex-direction: column;
        width: 100%;
    }
`,Hc=w.div`
    display: flex;
    justify-content: flex-end;
    margin-top: ${Yn["spacing-16"]};
    gap: ${Yn["spacing-8"]} ${Yn["spacing-16"]};

    ${Gn.MaxWidth.xxs} {
        flex-direction: column-reverse; // FIXME: this breaks tab focus
        margin-top: ${Yn["spacing-32"]};
    }
`,jc=w.div`
    display: flex;
    align-items: center;
    margin-right: ${Yn["spacing-32"]};

    ${Gn.MaxWidth.xxs} {
        margin-right: 0;
        width: 100%;
    }
`,Lc=w.div`
    display: flex;
    gap: ${Yn["spacing-8"]};

    ${Gn.MaxWidth.lg} {
        flex-direction: column;
    }

    ${Gn.MaxWidth.xxs} {
        flex-direction: row;
        width: 100%;
    }
`,Pc=w.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    ${Gn.MaxWidth.xxs} {
        width: 6rem;
    }
`,Wc=w(Oc)`
    width: 5rem;
    padding: ${Yn["spacing-16"]} 0;
    color: ${Pn.icon};

    svg {
        height: 1rem;
        width: 1rem;
    }

    &:hover {
        color: ${Pn["icon-hover"]};
    }
`,Nc=w(rc.BodyBL)`
    flex-shrink: 0;
    width: 1.5rem;
    text-align: center;
`,Vc=w(po)`
    height: calc(3rem - 2px);
    width: 5rem;
    display: flex;
    align-items: center;
    justify-content: center;

    ${Gn.MaxWidth.xxs} {
        width: 100%;
    }
`,Yc=w(bo)`
    text-align: center;
    width: 100%;

    :focus::placeholder {
        color: transparent;
    }
`,Uc=w((({type:n="checkbox",indicator:o,checked:l,styleType:d="default",children:c,childrenMaxLines:u,subLabel:h,disabled:g,error:m,name:p,id:b,className:y,compositeSection:v,removable:x,onRemove:w,"data-testid":$,onChange:F,useContentWidth:C})=>{const{collapsible:k=!0,errors:D,children:I,initialExpanded:T}=v||{},[B,A]=a(l),[z,O]=a(!!T),M=f((()=>{const e=Array.isArray(D)&&(null==D?void 0:D.length)>0,t=!Array.isArray(D)&&!!D;return e||t}),[D]),[_]=a(Gd.generate()),R=b?`${b}`:`tg-${_}`,H=i(null);s((()=>{A(l)}),[l]),s((()=>{B&&O(null==T||T)}),[B]);const j=()=>{g||O(!z)},L=()=>{g||!w||w()},P=()=>{let e;switch(n){case"yes":e="tick";break;case"no":e="cross";break;case"checkbox":case"radio":e=n}return t(Ac,{type:e,active:B,disabled:g,$selected:B,$disabled:g})},W=()=>{if(!h)return null;let e;return e="function"==typeof h?h():h,t($c,{"data-id":"toggle-sublabel",children:e})},N=n=>e(r,{children:[t(Tc,{weight:"semibold",$disabled:g,children:"Error"}),t(Bc,{$disabled:g,children:null==n?void 0:n.map(((e,r)=>t("li",{id:`${R}-error-list-item-${r}`,children:t(Tc,{weight:"semibold",$disabled:g,children:e})},r)))})]});return e(yc,{$selected:B,$disabled:g,className:y,$styleType:d,$error:m,$indicator:o,$useContentWidth:C,id:b,"data-testid":$,children:[e(Fc,{id:`${R}-header-container`,$disabled:g,$error:m,$selected:B,$indicator:o,$styleType:d,children:[e(Cc,{$addPadding:x,children:[t(vc,{ref:H,name:p,id:`${R}-input`,type:"checkbox"===n?"checkbox":"radio","data-testid":"toggle-input",disabled:g,onChange:e=>{if(!g){if(F)return void F(e);switch(n){case"checkbox":A((e=>!e));break;case"radio":case"yes":case"no":B||A(!0)}}},checked:B}),o&&P(),e(xc,{$selected:B,$disabled:g,children:[t(wc,{htmlFor:`${R}-input`,"data-testid":`${R}-toggle-label`,$maxLines:u,children:c}),h&&W()]})]}),x&&t(Ec,{type:"button",$disabled:g,onClick:L,id:`${R}-remove-button`,children:"Remove"})]}),I&&e("div",{children:[(!k||z)&&t(Ic,{"data-id":"toggle-composite-children",$isFinalItem:!k,$disabled:g,children:I}),k&&!z&&M&&t(kc,{$disabled:g,onClick:j,id:`${R}-error-alert`,children:t(Dc,{type:g?"description":"error",className:y,showIcon:!0,children:Array.isArray(D)?N(D):D})}),k&&e(Sc,{$paddingTopRequired:!z&&!M,disabled:g,onClick:j,"data-testid":z?"collapse-button":"expand-button",children:[z?"Show less":"Show more",t(z?S:E,{"aria-hidden":!0})]})]})]})}))`
    min-width: 5rem;
    flex: 1;
`,qc=w(Dd.Small)`
    width: 7rem;

    ${Gn.MaxWidth.sm} {
        flex: 1;
    }

    ${Gn.MaxWidth.xxs} {
        width: 100%;
    }
`;w.div`
    clip-path: inset(50%);
    height: 1px;
    width: 1px;
    overflow: hidden;
    position: absolute;
    white-space: nowrap;
`;const Gc=e=>{const t=b.split(".");return parseInt(t[0],10)>=19?e:e?"true":void 0};var Zc,Qc,Xc;!function(e){e.HOUR_UP="hour-up",e.HOUR_DOWN="hour-down",e.MINUTE_UP="minute-up",e.MINUTE_DOWN="minute-down"}(Zc||(Zc={})),function(e){e.HOUR="hour",e.MINUTE="minute"}(Qc||(Qc={})),function(e){e.AM="am",e.PM="pm"}(Xc||(Xc={}));const Kc=({id:r,value:n,show:o,format:l,onChange:d,onCancel:c})=>{var u;const h=Eo.getTimeValues(l,n),[g,p]=a(h.hour),[f,b]=a(h.minute),[y,v]=a(h.period),x=i(null),w=i(null),$=Ei();s((()=>{if(o&&x.current&&x.current.focus(),o){const{hour:e,minute:t,period:r}=Eo.getTimeValues(l,n);p(e),b(t),v(r)}}),[o,n,l]),s((()=>{const e=x.current,t=w.current;return e&&e.addEventListener("keydown",F),t&&t.addEventListener("keydown",F),()=>{e&&e.removeEventListener("keydown",F),t&&t.removeEventListener("keydown",F)}}),[]);const F=e=>{["Digit0","Digit1","Digit2","Digit3","Digit4","Digit5","Digit6","Digit7","Digit8","Digit9","Tab","Backspace","Delete","ArrowLeft","ArrowRight","ArrowUp","ArrowDown"].includes(e.code)||["Backspace","0","1","2","3","4","5","6","7","8","9"].includes(e.key)||e.preventDefault()},C=m((e=>{switch(e.currentTarget.name){case Zc.MINUTE_UP:b(Eo.updateMinutes(f,"add"));break;case Zc.MINUTE_DOWN:b(Eo.updateMinutes(f,"minus"));break;case Zc.HOUR_UP:p(Eo.updateHours(g,"add"));break;case Zc.HOUR_DOWN:p(Eo.updateHours(g,"minus"))}}),[g,f]),k=e=>{e.target.select()},D=e=>{const t=e.target.value;switch(e.target.name){case Qc.HOUR:t.length<=2&&p(t);break;case Qc.MINUTE:t.length<=2&&b(t)}},I=e=>{const t=parseInt(e.target.value);if(!isNaN(t))switch(e.target.name){case Qc.HOUR:{const r=t>23||t<0?h.hour:Eo.convertHourTo12HourFormat(e.target.value);p(r);break}case Qc.MINUTE:{const r=t>59||t<0?h.minute:e.target.value;b(Fo.padValue(r));break}}},T=e=>{switch(e.target.name){case Xc.AM:v(Co.AM);break;case Xc.PM:v(Co.PM)}},B=e=>r?`${r}-${e}`:e,A=jl({opacity:o?1:0,height:o?(null!==(u=$.height)&&void 0!==u?u:0)+32+2:0});return t(Mc,{"data-testid":"animated-dropdown-wrapper",style:A,children:e(_c,{ref:$.ref,"data-testid":B("timepicker-dropdown"),inert:Gc(!o),children:[e(Rc,{children:[e(jc,{children:[e(Pc,{children:[t(Wc,{"aria-label":"increase hour",name:Zc.HOUR_UP,tabIndex:-1,onClick:C,"data-testid":B("hour-increment-button"),children:t(S,{})}),t(Vc,{children:t(Yc,{"aria-label":"hour",type:"number",name:Qc.HOUR,id:"hour",maxLength:2,pattern:"[0-9]{2}",ref:x,value:g,onFocus:k,onChange:D,onBlur:I,min:1,max:12,placeholder:"HH","data-testid":B("hour-input")})}),t(Wc,{"aria-label":"decrease hour",name:Zc.HOUR_DOWN,tabIndex:-1,onClick:C,"data-testid":B("hour-decrement-button"),children:t(E,{})})]}),t(Nc,{children:":"}),e(Pc,{children:[t(Wc,{"aria-label":"increase minute",name:Zc.MINUTE_UP,tabIndex:-1,onClick:C,"data-testid":B("minute-increment-button"),children:t(S,{})}),t(Vc,{children:t(Yc,{"aria-label":"minute",type:"number",name:Qc.MINUTE,id:"minute",maxLength:2,pattern:"[0-9]{2}",ref:w,value:f,onChange:D,onBlur:I,onFocus:k,min:0,max:59,placeholder:"MM","data-testid":B("minute-input")})}),t(Wc,{"aria-label":"decrease minute",name:Zc.MINUTE_DOWN,tabIndex:-1,onClick:C,"data-testid":B("minute-decrement-button"),children:t(E,{})})]})]}),e(Lc,{children:[t(Uc,{checked:y===Co.AM,name:Xc.AM,type:"radio",onChange:T,"data-testid":B("am-toggle"),"aria-label":"AM",children:"AM"}),t(Uc,{checked:y===Co.PM,name:Xc.PM,type:"radio",onChange:T,"data-testid":B("pm-toggle"),"aria-label":"PM",children:"PM"})]})]}),e(Hc,{children:[t(qc,{"aria-label":"close selector",type:"button",styleType:"secondary",onClick:c,"data-testid":B("cancel-button"),children:"Cancel"}),t(qc,{"aria-label":"confirm selection",type:"button",onClick:()=>{let e;e="24hr"===l?Eo.convertTo24HourFormat({hour:g,minute:f,period:y}):`${g}:${f}${y}`,d(e)},disabled:""===g||""===f,"data-testid":B("confirm-button"),children:"Done"})]})]})})},Jc=r=>{var{id:n,disabled:o=!1,error:l,value:d,format:c="24hr",readOnly:u,onChange:h,onFocus:g,onBlur:m}=r,p=ie(r,["id","disabled","error","value","format","readOnly","onChange","onFocus","onBlur"]);const[f,b]=a(!1),[y,v]=a(!1),[x,w]=a(""),[$,F]=a(""),C=i(null);s((()=>{d&&(w(d.start),F(d.end))}),[d]),se("mousedown",(function(e){o||D(e)}),"document"),se("keyup",(function(e){if("Tab"===e.code)D(e)}),"document");const E=()=>{k()},S=()=>{f||y||g&&g()},k=()=>{b(!1),v(!1),m&&m()},D=e=>{C.current&&!C.current.contains(e.target)&&(y||f)&&k()};return t(vo,Object.assign({ref:C,id:n},p,{children:e(xo,{$disabled:o,$error:l,$readOnly:u,children:[e(co,{error:l,currentActive:f?"start":y?"end":"none",children:[t(wo,{onFocus:()=>{o||u||f||(v(!1),b(!0),S())},readOnly:!0,placeholder:"From",value:Eo.formatDisplayValue(x,c),disabled:o,"data-testid":p["data-testid"]?`${p["data-testid"]}-timepicker-selector`:"timepicker-selector"}),t(wo,{onFocus:()=>{o||u||y||(b(!1),v(!0),S())},readOnly:!0,placeholder:"To",value:Eo.formatDisplayValue($,c),disabled:o,"data-testid":p["data-testid"]?`${p["data-testid"]}-timepicker-selector`:"timepicker-selector"})]}),t(Kc,{id:n,show:f,value:x,format:c,onCancel:E,onChange:e=>{b(!1),v(!0),w(e);h&&h({start:e,end:$})}}),t(Kc,{id:n,show:y,value:$,format:c,onCancel:E,onChange:e=>{v(!1),F(e);h&&h({start:x,end:e}),""==x?b(!0):m&&m()}})]})}))};w.label`
    color: ${Pn["text-subtle"]};
    margin-bottom: ${Yn["spacing-8"]};
    display: inline-block;

    ${Wn["form-label"]}
    ${Xd()}
    font-weight: ${Wn.Spec["weight-semibold"]};
`;const eu=w.p`
    ${Wn["body-sm-semibold"]}
    color: ${Pn["text-error"]};
    margin-top: ${Yn["spacing-8"]};
    margin-bottom: 0;
    outline: none;
`;w.span`
    ${Wn["form-description"]}
    color: ${Pn["text-subtler"]};
    display: block;
`,w(bo)`
    width: 100%;
    height: calc(3rem - 2px); // exclude top and bottom borders

    ${e=>"no-border"!==e.$styleType&&$`
            padding-left: ${Yn["spacing-16"]};
            padding-right: ${e.$showClear?0:Yn["spacing-16"]};
        `}
`;const tu=w(yo)`
    height: auto;
    padding: ${Yn["spacing-12"]} ${Yn["spacing-16"]};

    cursor: pointer;
    color: ${Pn.icon};

    ${e=>"no-border"===e.$styleType&&$`
            margin-right: -${Yn["spacing-12"]};
        `}
`,ru=w(H)`
    height: 1.25rem;
    width: 1.25rem;
    vertical-align: middle;
`;w.div`
    display: flex;
    width: 100%;
`,w(po)`
    display: flex;
    align-items: center;
    width: 100%;
`;const nu=e=>"small"===e?2.5:3;w.div`
    position: relative;
    width: 100%;
    ${e=>{const t=nu(e.$variant);return $`
            min-height: ${t}rem;
            height: ${t}rem; // Need this to persist the height when expanding or collapsing list
        `}}
`;const ou=$`
    display: flex;
    position: relative;
    align-items: center;
    justify-content: space-between;
    padding: 0 ${Yn["spacing-16"]};
    // exclude top and bottom borders
    height: calc(${e=>nu(e.$variant)}rem - 2px);
    width: 100%;
    border-radius: ${Un.sm};
    border: none;
    background: transparent;

    :focus,
    :active {
        outline: none;
    }

    :focus-visible {
        outline: 2px solid ${Pn["border-focus"]};
    }
`,iu=w.button`
    ${ou}
    cursor: pointer;
`;w.div`
    ${ou}
`;const su=F`
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
`;w.div`
    position: relative;
    border: ${Vn["width-010"]} ${Vn.solid} ${Pn.border};
    border-radius: ${Un.sm};
    background: ${Pn.bg};
    overflow: hidden;

    :focus-within {
        border-color: ${Pn["border-focus"]};
        box-shadow: 0px 0px 4px 0px
            rgb(from ${Pn["border-focus"]} r g b / 50%) inset; // TODO: confirm shadow
    }

    ${e=>e.expanded?$`
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                z-index: 2;
            `:$`
                animation: ${su} 0.5s ease-in-out;
            `}

    ${e=>e.disabled?$`
                background: ${Pn["bg-disabled"]};

                ${iu} {
                    cursor: not-allowed;
                }

                :focus-within {
                    border-color: ${Pn.border};
                    box-shadow: none;
                }
            `:e.$readOnly?$`
                border: none;
                background: transparent !important;

                ${iu} {
                    padding: 0;
                }

                :focus-within {
                    border: none;
                    box-shadow: none;
                }
            `:e.error?$`
                border-color: ${Pn["border-error"]};

                :focus-within {
                    border-color: ${Pn["border-error"]};
                    box-shadow: 0px 0px 4px 0px
                        rgb(from ${Pn["border-error"]} r g b / 50%) inset; // TODO: confirm shadow
                }
            `:void 0}
`,w.div`
    transform: rotate(${e=>e.expanded?180:0}deg);
    transition: transform ${Nn["duration-250"]} ${Nn["ease-default"]};
    margin-left: ${Yn["spacing-16"]};
`,w(E)`
    color: ${Pn.icon};
`,w.div`
    height: 1px;
    background: ${Pn.border};
    margin: 0 ${Yn["spacing-8"]};
`,w.div`
    display: flex;
    flex: 1;
    word-break: break-all;
    ${e=>{if(e.$disabled)return $`
                color: ${Pn["text-disabled"]};
            `}}
`;const au=w.div`
    ${e=>"small"===e.$variant?Wn["body-md-regular"]:Wn["body-baseline-regular"]}
    text-align: left;
    ${e=>{if("middle"!==e.truncateType)return $`
                    ${Kd(1)}
                `}}
    overflow: hidden;
`;w(au)`
    color: ${Pn["text-subtler"]};
`,w.div`
    display: flex;
    position: relative;
    align-items: center;
    justify-content: space-between;
`;const lu=w(tu)`
    position: absolute;
    right: 0;
    padding-left: ${Yn["spacing-8"]};
    margin-right: 0;
`;w(iu)`
    // space for clear icon
    padding-right: calc(1.25rem + ${Yn["spacing-16"]});
`;const du=w.div`
    font-weight: ${e=>e.$bold?Wn.Spec["weight-semibold"]:Wn.Spec["weight-regular"]};

    ${e=>e.$disabled?$`
                color: ${Pn["text-disabled"]};
            `:e.$selected?$`
                color: ${Pn["text-selected"]};
            `:$`
                color: ${Pn.text};
            `}
    width: 100%;

    ${e=>"end"===e.$truncateType&&Kd(e.$maxLines||2)}
    overflow-wrap: break-word;
`,cu=w.div`
    color: ${Pn["text-subtlest"]};
    width: 100%;

    ${e=>"end"===e.$truncateType&&Kd(e.$maxLines||2)}
    overflow-wrap: break-word;

    ${e=>"next-line"===e.$labelDisplayType?$`
                    ${Wn["body-md-semibold"]}
                `:$`
                    ${Wn["body-baseline-regular"]}
                `}
`,uu=w.span`
    font-weight: ${Wn.Spec["weight-semibold"]};
`,hu=w.div`
    text-align: left;
    width: 100%;
    overflow: hidden;
    overflow-wrap: break-word;

    ${e=>"small"===e.$variant?Wn["body-md-regular"]:Wn["body-baseline-regular"]}

    ${e=>{switch(e.$labelDisplayType){case"next-line":return $`
                    display: flex;
                    flex-direction: column;
                `;case"inline":return $`
                    ${du} {
                        display: inline;
                    }

                    ${cu} {
                        display: inline;
                        margin-left: 0.5rem;
                    }
                `}}}
`,gu=w.div`
    display: inline-block;
    width: ${e=>1===e.$maxLines?50:100}%;
    height: 1lh;
    word-break: break-all;
    overflow: hidden;
`,mu=w.div`
    display: inline-block;
    width: ${e=>1===e.$maxLines?50:100}%;
    height: 1lh;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    direction: rtl;
    text-align: right;
`,pu=({bold:n,displayType:o="inline",label:i,searchTerm:s,maxLines:a=2,selected:l,disabled:d,sublabel:c,truncationType:u="middle",variant:h="default"})=>{const g=C(),p="small"===h?Wn.Spec["body-size-md"]({theme:g}):Wn.Spec["body-size-baseline"]({theme:g}),b=Wn.Spec["font-family"]({theme:g}),{ref:y,width:v}=Ei(),x=m((e=>{if("inline"!==o||!v)return!1;return Fo.getTextWidth(e,`${p} '${b}'`)>v*a-50}),[v,o,p,b,a]),w=f((()=>x(i)),[x,i]),$=f((()=>c&&x(c)),[x,c]),F=n=>{if(!s)return n;const o=s.toLowerCase().trim(),a=n.toLowerCase().indexOf(o),l=a+s.length;return-1===a?n:e(r,{children:[i.slice(0,a),t(uu,{$variant:h,children:i.slice(a,l)}),i.slice(l)]})},E=n=>e(r,{children:[t(gu,{$maxLines:a,"aria-hidden":!0,children:F(n)}),t(mu,{$maxLines:a,"aria-hidden":!0,children:F(n)})]});return e(hu,{ref:y,$labelDisplayType:w||$?"next-line":o,$variant:h,children:[t(du,{"aria-label":i,$bold:n,$maxLines:a,$selected:l,$disabled:d,$truncateType:u,children:"middle"===u&&w?E(i):F(i)}),c&&t(cu,{"aria-label":c,$maxLines:a,$truncateType:u,$labelDisplayType:o,children:"middle"===u&&$?E(c):c})]})};var fu=Nt;var bu=function(e){var t=this.__data__,r=t.delete(e);return this.size=t.size,r};var yu=function(e){return this.__data__.get(e)};var vu=function(e){return this.__data__.has(e)},xu=Nt,wu=Vt,$u=cr;var Fu=function(e,t){var r=this.__data__;if(r instanceof xu){var n=r.__data__;if(!wu||n.length<199)return n.push([e,t]),this.size=++r.size,this;r=this.__data__=new $u(n)}return r.set(e,t),this.size=r.size,this},Cu=Nt,Eu=function(){this.__data__=new fu,this.size=0},Su=bu,ku=yu,Du=vu,Iu=Fu;function Tu(e){var t=this.__data__=new Cu(e);this.size=t.size}Tu.prototype.clear=Eu,Tu.prototype.delete=Su,Tu.prototype.get=ku,Tu.prototype.has=Du,Tu.prototype.set=Iu;var Bu=Tu;var Au=cr,zu=function(e){return this.__data__.set(e,"__lodash_hash_undefined__"),this},Ou=function(e){return this.__data__.has(e)};function Mu(e){var t=-1,r=null==e?0:e.length;for(this.__data__=new Au;++t<r;)this.add(e[t])}Mu.prototype.add=Mu.prototype.push=zu,Mu.prototype.has=Ou;var _u=function(e,t){return e.has(t)},Ru=Mu,Hu=function(e,t){for(var r=-1,n=null==e?0:e.length;++r<n;)if(t(e[r],r,e))return!0;return!1},ju=_u;var Lu=function(e,t,r,n,o,i){var s=1&r,a=e.length,l=t.length;if(a!=l&&!(s&&l>a))return!1;var d=i.get(e),c=i.get(t);if(d&&c)return d==t&&c==e;var u=-1,h=!0,g=2&r?new Ru:void 0;for(i.set(e,t),i.set(t,e);++u<a;){var m=e[u],p=t[u];if(n)var f=s?n(p,m,u,t,e,i):n(m,p,u,e,t,i);if(void 0!==f){if(f)continue;h=!1;break}if(g){if(!Hu(t,(function(e,t){if(!ju(g,t)&&(m===e||o(m,e,r,n,i)))return g.push(t)}))){h=!1;break}}else if(m!==p&&!o(m,p,r,n,i)){h=!1;break}}return i.delete(e),i.delete(t),h};var Pu=function(e){var t=-1,r=Array(e.size);return e.forEach((function(e,n){r[++t]=[n,e]})),r};var Wu=ge.Uint8Array,Nu=Et,Vu=Lu,Yu=Pu,Uu=function(e){var t=-1,r=Array(e.size);return e.forEach((function(e){r[++t]=e})),r},qu=me?me.prototype:void 0,Gu=qu?qu.valueOf:void 0;var Zu=function(e,t,r,n,o,i,s){switch(r){case"[object DataView]":if(e.byteLength!=t.byteLength||e.byteOffset!=t.byteOffset)return!1;e=e.buffer,t=t.buffer;case"[object ArrayBuffer]":return!(e.byteLength!=t.byteLength||!i(new Wu(e),new Wu(t)));case"[object Boolean]":case"[object Date]":case"[object Number]":return Nu(+e,+t);case"[object Error]":return e.name==t.name&&e.message==t.message;case"[object RegExp]":case"[object String]":return e==t+"";case"[object Map]":var a=Yu;case"[object Set]":var l=1&n;if(a||(a=Uu),e.size!=t.size&&!l)return!1;var d=s.get(e);if(d)return d==t;n|=2,s.set(e,t);var c=Vu(a(e),a(t),n,o,i,s);return s.delete(e),c;case"[object Symbol]":if(Gu)return Gu.call(e)==Gu.call(t)}return!1};var Qu=function(e,t){for(var r=-1,n=t.length,o=e.length;++r<n;)e[o+r]=t[r];return e},Xu=Qu,Ku=de;var Ju=function(e,t,r){var n=t(e);return Ku(e)?n:Xu(n,r(e))};var eh=function(e,t){for(var r=-1,n=null==e?0:e.length,o=0,i=[];++r<n;){var s=e[r];t(s,r,e)&&(i[o++]=s)}return i},th=function(){return[]},rh=Object.prototype.propertyIsEnumerable,nh=Object.getOwnPropertySymbols,oh=nh?function(e){return null==e?[]:(e=Object(e),eh(nh(e),(function(t){return rh.call(e,t)})))}:th;var ih=function(e,t){for(var r=-1,n=Array(e);++r<e;)n[r]=t(r);return n},sh=Ee,ah=Se;var lh=function(e){return ah(e)&&"[object Arguments]"==sh(e)},dh=Se,ch=Object.prototype,uh=ch.hasOwnProperty,hh=ch.propertyIsEnumerable,gh=lh(function(){return arguments}())?lh:function(e){return dh(e)&&uh.call(e,"callee")&&!hh.call(e,"callee")},mh={exports:{}};var ph=function(){return!1};!function(e,t){var r=ge,n=ph,o=t&&!t.nodeType&&t,i=o&&e&&!e.nodeType&&e,s=i&&i.exports===o?r.Buffer:void 0,a=(s?s.isBuffer:void 0)||n;e.exports=a}(mh,mh.exports);var fh=mh.exports,bh=/^(?:0|[1-9]\d*)$/;var yh=function(e,t){var r=typeof e;return!!(t=null==t?9007199254740991:t)&&("number"==r||"symbol"!=r&&bh.test(e))&&e>-1&&e%1==0&&e<t};var vh=function(e){return"number"==typeof e&&e>-1&&e%1==0&&e<=9007199254740991},xh=Ee,wh=vh,$h=Se,Fh={};Fh["[object Float32Array]"]=Fh["[object Float64Array]"]=Fh["[object Int8Array]"]=Fh["[object Int16Array]"]=Fh["[object Int32Array]"]=Fh["[object Uint8Array]"]=Fh["[object Uint8ClampedArray]"]=Fh["[object Uint16Array]"]=Fh["[object Uint32Array]"]=!0,Fh["[object Arguments]"]=Fh["[object Array]"]=Fh["[object ArrayBuffer]"]=Fh["[object Boolean]"]=Fh["[object DataView]"]=Fh["[object Date]"]=Fh["[object Error]"]=Fh["[object Function]"]=Fh["[object Map]"]=Fh["[object Number]"]=Fh["[object Object]"]=Fh["[object RegExp]"]=Fh["[object Set]"]=Fh["[object String]"]=Fh["[object WeakMap]"]=!1;var Ch=function(e){return $h(e)&&wh(e.length)&&!!Fh[xh(e)]};var Eh=function(e){return function(t){return e(t)}},Sh={exports:{}};!function(e,t){var r=ce,n=t&&!t.nodeType&&t,o=n&&e&&!e.nodeType&&e,i=o&&o.exports===n&&r.process,s=function(){try{var e=o&&o.require&&o.require("util").types;return e||i&&i.binding&&i.binding("util")}catch(e){}}();e.exports=s}(Sh,Sh.exports);var kh=Sh.exports,Dh=Ch,Ih=Eh,Th=kh&&kh.isTypedArray,Bh=Th?Ih(Th):Dh,Ah=ih,zh=gh,Oh=de,Mh=fh,_h=yh,Rh=Bh,Hh=Object.prototype.hasOwnProperty;var jh=function(e,t){var r=Oh(e),n=!r&&zh(e),o=!r&&!n&&Mh(e),i=!r&&!n&&!o&&Rh(e),s=r||n||o||i,a=s?Ah(e.length,String):[],l=a.length;for(var d in e)!t&&!Hh.call(e,d)||s&&("length"==d||o&&("offset"==d||"parent"==d)||i&&("buffer"==d||"byteLength"==d||"byteOffset"==d)||_h(d,l))||a.push(d);return a},Lh=Object.prototype;var Ph=function(e){var t=e&&e.constructor;return e===("function"==typeof t&&t.prototype||Lh)};var Wh=function(e,t){return function(r){return e(t(r))}}(Object.keys,Object),Nh=Ph,Vh=Wh,Yh=Object.prototype.hasOwnProperty;var Uh=function(e){if(!Nh(e))return Vh(e);var t=[];for(var r in Object(e))Yh.call(e,r)&&"constructor"!=r&&t.push(r);return t},qh=je,Gh=vh;var Zh=function(e){return null!=e&&Gh(e.length)&&!qh(e)},Qh=jh,Xh=Uh,Kh=Zh;var Jh=function(e){return Kh(e)?Qh(e):Xh(e)},eg=Ju,tg=oh,rg=Jh;var ng=function(e){return eg(e,rg,tg)},og=Object.prototype.hasOwnProperty;var ig=function(e,t,r,n,o,i){var s=1&r,a=ng(e),l=a.length;if(l!=ng(t).length&&!s)return!1;for(var d=l;d--;){var c=a[d];if(!(s?c in t:og.call(t,c)))return!1}var u=i.get(e),h=i.get(t);if(u&&h)return u==t&&h==e;var g=!0;i.set(e,t),i.set(t,e);for(var m=s;++d<l;){var p=e[c=a[d]],f=t[c];if(n)var b=s?n(f,p,c,t,e,i):n(p,f,c,e,t,i);if(!(void 0===b?p===f||o(p,f,r,n,i):b)){g=!1;break}m||(m="constructor"==c)}if(g&&!m){var y=e.constructor,v=t.constructor;y==v||!("constructor"in e)||!("constructor"in t)||"function"==typeof y&&y instanceof y&&"function"==typeof v&&v instanceof v||(g=!1)}return i.delete(e),i.delete(t),g},sg=ot(ge,"DataView"),ag=Vt,lg=ot(ge,"Promise"),dg=ot(ge,"Set"),cg=ot(ge,"WeakMap"),ug=Ee,hg=Ve,gg="[object Map]",mg="[object Promise]",pg="[object Set]",fg="[object WeakMap]",bg="[object DataView]",yg=hg(sg),vg=hg(ag),xg=hg(lg),wg=hg(dg),$g=hg(cg),Fg=ug;(sg&&Fg(new sg(new ArrayBuffer(1)))!=bg||ag&&Fg(new ag)!=gg||lg&&Fg(lg.resolve())!=mg||dg&&Fg(new dg)!=pg||cg&&Fg(new cg)!=fg)&&(Fg=function(e){var t=ug(e),r="[object Object]"==t?e.constructor:void 0,n=r?hg(r):"";if(n)switch(n){case yg:return bg;case vg:return gg;case xg:return mg;case wg:return pg;case $g:return fg}return t});var Cg=Bu,Eg=Lu,Sg=Zu,kg=ig,Dg=Fg,Ig=de,Tg=fh,Bg=Bh,Ag="[object Arguments]",zg="[object Array]",Og="[object Object]",Mg=Object.prototype.hasOwnProperty;var _g=function(e,t,r,n,o,i){var s=Ig(e),a=Ig(t),l=s?zg:Dg(e),d=a?zg:Dg(t),c=(l=l==Ag?Og:l)==Og,u=(d=d==Ag?Og:d)==Og,h=l==d;if(h&&Tg(e)){if(!Tg(t))return!1;s=!0,c=!1}if(h&&!c)return i||(i=new Cg),s||Bg(e)?Eg(e,t,r,n,o,i):Sg(e,t,l,r,n,o,i);if(!(1&r)){var g=c&&Mg.call(e,"__wrapped__"),m=u&&Mg.call(t,"__wrapped__");if(g||m){var p=g?e.value():e,f=m?t.value():t;return i||(i=new Cg),o(p,f,r,n,i)}}return!!h&&(i||(i=new Cg),kg(e,t,r,n,o,i))},Rg=Se;var Hg=function e(t,r,n,o,i){return t===r||(null==t||null==r||!Rg(t)&&!Rg(r)?t!=t&&r!=r:_g(t,r,n,o,e,i))},jg=Bu,Lg=Hg;var Pg=function(e,t,r,n){var o=r.length,i=o,s=!n;if(null==e)return!i;for(e=Object(e);o--;){var a=r[o];if(s&&a[2]?a[1]!==e[a[0]]:!(a[0]in e))return!1}for(;++o<i;){var l=(a=r[o])[0],d=e[l],c=a[1];if(s&&a[2]){if(void 0===d&&!(l in e))return!1}else{var u=new jg;if(n)var h=n(d,c,l,e,t,u);if(!(void 0===h?Lg(c,d,3,n,u):h))return!1}}return!0},Wg=Me;var Ng=function(e){return e==e&&!Wg(e)},Vg=Ng,Yg=Jh;var Ug=function(e){for(var t=Yg(e),r=t.length;r--;){var n=t[r],o=e[n];t[r]=[n,o,Vg(o)]}return t};var qg=function(e,t){return function(r){return null!=r&&(r[e]===t&&(void 0!==t||e in Object(r)))}},Gg=Pg,Zg=Ug,Qg=qg;var Xg=function(e,t){return null!=e&&t in Object(e)},Kg=Ir,Jg=gh,em=de,tm=yh,rm=vh,nm=Br;var om=function(e,t,r){for(var n=-1,o=(t=Kg(t,e)).length,i=!1;++n<o;){var s=nm(t[n]);if(!(i=null!=e&&r(e,s)))break;e=e[s]}return i||++n!=o?i:!!(o=null==e?0:e.length)&&rm(o)&&tm(s,o)&&(em(e)||Jg(e))},im=Xg,sm=om;var am=Hg,lm=_r,dm=function(e,t){return null!=e&&sm(e,t,im)},cm=Oe,um=Ng,hm=qg,gm=Br;var mm=function(e){return function(t){return null==t?void 0:t[e]}},pm=Or;var fm=mm,bm=function(e){return function(t){return pm(t,e)}},ym=Oe,vm=Br;var xm=function(e){var t=Zg(e);return 1==t.length&&t[0][2]?Qg(t[0][0],t[0][1]):function(r){return r===e||Gg(r,e,t)}},wm=function(e,t){return cm(e)&&um(t)?hm(gm(e),t):function(r){var n=lm(r,e);return void 0===n&&n===t?dm(r,e):am(t,n,3)}},$m=function(e){return e},Fm=de,Cm=function(e){return ym(e)?fm(vm(e)):bm(e)};var Em=function(e){return"function"==typeof e?e:null==e?$m:"object"==typeof e?Fm(e)?wm(e[0],e[1]):xm(e):Cm(e)},Sm=Em,km=Zh,Dm=Jh;var Im=function(e){return function(t,r,n){var o=Object(t);if(!km(t)){var i=Sm(r);t=Dm(t),r=function(e){return i(o[e],e,o)}}var s=e(t,r,n);return s>-1?o[i?t[s]:s]:void 0}};var Tm=/\s/;var Bm=function(e){for(var t=e.length;t--&&Tm.test(e.charAt(t)););return t},Am=/^\s+/;var zm=function(e){return e?e.slice(0,Bm(e)+1).replace(Am,""):e},Om=Me,Mm=Ie,_m=/^[-+]0x[0-9a-f]+$/i,Rm=/^0b[01]+$/i,Hm=/^0o[0-7]+$/i,jm=parseInt;var Lm=function(e){if("number"==typeof e)return e;if(Mm(e))return NaN;if(Om(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=Om(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=zm(e);var r=Rm.test(e);return r||Hm.test(e)?jm(e.slice(2),r?2:8):_m.test(e)?NaN:+e},Pm=1/0;var Wm=function(e){return e?(e=Lm(e))===Pm||e===-1/0?17976931348623157e292*(e<0?-1:1):e==e?e:0:0===e?e:0};var Nm=function(e,t,r,n){for(var o=e.length,i=r+(n?1:-1);n?i--:++i<o;)if(t(e[i],i,e))return i;return-1},Vm=Em,Ym=function(e){var t=Wm(e),r=t%1;return t==t?r?t-r:t:0},Um=Math.max;var qm=le(Im((function(e,t,r){var n=null==e?0:e.length;if(!n)return-1;var o=null==r?0:Ym(r);return o<0&&(o=Um(n+o,0)),Nm(e,Vm(t),o)}))),Gm=Hg;var Zm=le((function(e,t){return Gm(e,t)}));function Qm(e){return()=>e}function Xm(e){e()}function Km(e,t){return r=>e(t(r))}function Jm(e,t){return()=>e(t)}function ep(e,t){return r=>e(t,r)}function tp(e){return void 0!==e}function rp(){}function np(e,t){return t(e),e}function op(e,t){return t(e)}function ip(...e){return e}function sp(e,t){return e(1,t)}function ap(e,t){e(0,t)}function lp(e){e(2)}function dp(e){return e(4)}function cp(e,t){return sp(e,ep(t,0))}function up(e,t){const r=e(1,(e=>{r(),t(e)}));return r}function hp(e){let t,r;return n=>o=>{t=o,r&&clearTimeout(r),r=setTimeout((()=>{n(t)}),e)}}function gp(e,t){return e===t}function mp(e=gp){let t;return r=>n=>{e(t,n)||(t=n,r(n))}}function pp(e){return t=>r=>{e(r)&&t(r)}}function fp(e){return t=>Km(t,e)}function bp(e){return t=>()=>{t(e)}}function yp(e,...t){const r=function(...e){return t=>e.reduceRight(op,t)}(...t);return(t,n)=>{switch(t){case 2:return void lp(e);case 1:return sp(e,r(n))}}}function vp(e,t){return r=>n=>{r(t=e(t,n))}}function xp(e){return t=>r=>{e>0?e--:t(r)}}function wp(e){let t,r=null;return n=>o=>{r=o,!t&&(t=setTimeout((()=>{t=void 0,n(r)}),e))}}function $p(...e){const t=new Array(e.length);let r=0,n=null;const o=Math.pow(2,e.length)-1;return e.forEach(((e,i)=>{const s=Math.pow(2,i);sp(e,(e=>{const a=r;r|=s,t[i]=e,a!==o&&r===o&&n&&(n(),n=null)}))})),e=>i=>{const s=()=>{e([i].concat(t))};r===o?s():n=s}}function Fp(e){let t=e;const r=Ep();return(e,n)=>{switch(e){case 0:t=n;break;case 1:n(t);break;case 4:return t}return r(e,n)}}function Cp(e,t){return np(Fp(t),(t=>cp(e,t)))}function Ep(){const e=[];return(t,r)=>{switch(t){case 0:return void e.slice().forEach((e=>{e(r)}));case 2:return void e.splice(0,e.length);case 1:return e.push(r),()=>{const t=e.indexOf(r);t>-1&&e.splice(t,1)}}}}function Sp(e){return np(Ep(),(t=>cp(e,t)))}function kp(e,t=[],{singleton:r}={singleton:!0}){return{constructor:e,dependencies:t,id:Dp(),singleton:r}}const Dp=()=>Symbol();function Ip(...e){const t=Ep(),r=new Array(e.length);let n=0;const o=Math.pow(2,e.length)-1;return e.forEach(((e,i)=>{const s=Math.pow(2,i);sp(e,(e=>{r[i]=e,n|=s,n===o&&ap(t,r)}))})),function(e,i){switch(e){case 2:return void lp(t);case 1:return n===o&&i(r),sp(t,i)}}}function Tp(e,t=gp){return yp(e,mp(t))}function Bp(...e){return function(t,r){switch(t){case 2:return;case 1:return function(...e){return()=>{e.map(Xm)}}(...e.map((e=>sp(e,r))))}}}var Ap=(e=>(e[e.DEBUG=0]="DEBUG",e[e.INFO=1]="INFO",e[e.WARN=2]="WARN",e[e.ERROR=3]="ERROR",e))(Ap||{});const zp={0:"debug",3:"error",1:"log",2:"warn"},Op=kp((()=>{const e=Fp(3);return{log:Fp(((t,r,n=1)=>{var o;n>=(null!=(o=(typeof globalThis>"u"?window:globalThis).VIRTUOSO_LOG_LEVEL)?o:dp(e))&&console[zp[n]]("%creact-virtuoso: %c%s %o","color: #0253b3; font-weight: bold","color: initial",t,r)})),logLevel:e}}),[],{singleton:!0});function Mp(e,t,r){return _p(e,t,r).callbackRef}function _p(e,t,r){const n=o.useRef(null);let i=e=>{};if(typeof ResizeObserver<"u"){const s=o.useMemo((()=>new ResizeObserver((t=>{const n=()=>{const r=t[0].target;null!==r.offsetParent&&e(r)};r?n():requestAnimationFrame(n)}))),[e]);i=e=>{e&&t?(s.observe(e),n.current=e):(n.current&&s.unobserve(n.current),n.current=null)}}return{callbackRef:i,ref:n}}function Rp(e,t,r,n,i,s,a,l,d){const c=o.useCallback((r=>{const o=function(e,t,r,n){const o=e.length;if(0===o)return null;const i=[];for(let s=0;s<o;s++){const o=e.item(s);if(void 0===o.dataset.index)continue;const a=parseInt(o.dataset.index),l=parseFloat(o.dataset.knownSize),d=t(o,r);if(0===d&&n("Zero-sized element, this should not happen",{child:o},Ap.ERROR),d===l)continue;const c=i[i.length-1];0===i.length||c.size!==d||c.endIndex!==a-1?i.push({endIndex:a,size:d,startIndex:a}):i[i.length-1].endIndex++}return i}(r.children,t,l?"offsetWidth":"offsetHeight",i);let d=r.parentElement;for(;!d.dataset.virtuosoScroller;)d=d.parentElement;const c="window"===d.lastElementChild.dataset.viewportType,u=a?l?a.scrollLeft:a.scrollTop:c?l?window.pageXOffset||document.documentElement.scrollLeft:window.pageYOffset||document.documentElement.scrollTop:l?d.scrollLeft:d.scrollTop,h=a?l?a.scrollWidth:a.scrollHeight:c?l?document.documentElement.scrollWidth:document.documentElement.scrollHeight:l?d.scrollWidth:d.scrollHeight,g=a?l?a.offsetWidth:a.offsetHeight:c?l?window.innerWidth:window.innerHeight:l?d.offsetWidth:d.offsetHeight;n({scrollHeight:h,scrollTop:Math.max(u,0),viewportHeight:g}),null==s||s(l?Hp("column-gap",getComputedStyle(r).columnGap,i):Hp("row-gap",getComputedStyle(r).rowGap,i)),null!==o&&e(o)}),[e,t,i,s,a,n]);return _p(c,r,d)}function Hp(e,t,r){return"normal"!==t&&!(null!=t&&t.endsWith("px"))&&r(`${e} was not resolved to pixel value correctly`,t,Ap.WARN),"normal"===t?0:parseInt(null!=t?t:"0",10)}function jp(e,t,r){const n=o.useRef(null),i=o.useCallback((r=>{if(null==r||!r.offsetParent)return;const o=r.getBoundingClientRect(),i=o.width;let s,a;if(t){const e=t.getBoundingClientRect(),r=o.top-e.top;a=e.height-Math.max(0,r),s=r+t.scrollTop}else a=window.innerHeight-Math.max(0,o.top),s=o.top+window.pageYOffset;n.current={offsetTop:s,visibleHeight:a,visibleWidth:i},e(n.current)}),[e,t]),{callbackRef:s,ref:a}=_p(i,!0,r),l=o.useCallback((()=>{i(a.current)}),[i,a]);return o.useEffect((()=>{if(t){t.addEventListener("scroll",l);const e=new ResizeObserver((()=>{requestAnimationFrame(l)}));return e.observe(t),()=>{t.removeEventListener("scroll",l),e.unobserve(t)}}return window.addEventListener("scroll",l),window.addEventListener("resize",l),()=>{window.removeEventListener("scroll",l),window.removeEventListener("resize",l)}}),[l,t]),s}const Lp=kp((()=>{const e=Ep(),t=Ep(),r=Fp(0),n=Ep(),o=Fp(0),i=Ep(),s=Ep(),a=Fp(0),l=Fp(0),d=Fp(0),c=Fp(0),u=Ep(),h=Ep(),g=Fp(!1),m=Fp(!1),p=Fp(!1);return cp(yp(e,fp((({scrollTop:e})=>e))),t),cp(yp(e,fp((({scrollHeight:e})=>e))),s),cp(t,o),{deviation:r,fixedFooterHeight:d,fixedHeaderHeight:l,footerHeight:c,headerHeight:a,horizontalDirection:m,scrollBy:h,scrollContainerState:e,scrollHeight:s,scrollingInProgress:g,scrollTo:u,scrollTop:t,skipAnimationFrameInResizeObserver:p,smoothScrollTargetReached:n,statefulScrollTop:o,viewportHeight:i}}),[],{singleton:!0}),Pp={lvl:0};function Wp(e,t){const r=e.length;if(0===r)return[];let{index:n,value:o}=t(e[0]);const i=[];for(let s=1;s<r;s++){const{index:r,value:a}=t(e[s]);i.push({end:r-1,start:n,value:o}),n=r,o=a}return i.push({end:1/0,start:n,value:o}),i}function Np(e){return e===Pp}function Vp(e,t){if(!Np(e))return t===e.k?e.v:t<e.k?Vp(e.l,t):Vp(e.r,t)}function Yp(e,t,r="k"){if(Np(e))return[-1/0,void 0];if(Number(e[r])===t)return[e.k,e.v];if(Number(e[r])<t){const n=Yp(e.r,t,r);return n[0]===-1/0?[e.k,e.v]:n}return Yp(e.l,t,r)}function Up(e,t,r){return Np(e)?nf(t,r,1):t===e.k?Jp(e,{k:t,v:r}):t<e.k?of(Jp(e,{l:Up(e.l,t,r)})):of(Jp(e,{r:Up(e.r,t,r)}))}function qp(){return Pp}function Gp(e,t,r){if(Np(e))return[];return function(e){return Wp(e,(({k:e,v:t})=>({index:e,value:t})))}(Xp(e,Yp(e,t)[0],r))}function Zp(e,t){if(Np(e))return Pp;const{k:r,l:n,r:o}=e;if(t===r){if(Np(n))return o;if(Np(o))return n;{const[t,r]=rf(n);return Kp(Jp(e,{k:t,l:ef(n),v:r}))}}return Kp(Jp(e,t<r?{l:Zp(n,t)}:{r:Zp(o,t)}))}function Qp(e){return Np(e)?[]:[...Qp(e.l),{k:e.k,v:e.v},...Qp(e.r)]}function Xp(e,t,r){if(Np(e))return[];const{k:n,l:o,r:i,v:s}=e;let a=[];return n>t&&(a=a.concat(Xp(o,t,r))),n>=t&&n<=r&&a.push({k:n,v:s}),n<=r&&(a=a.concat(Xp(i,t,r))),a}function Kp(e){const{l:t,lvl:r,r:n}=e;if(n.lvl>=r-1&&t.lvl>=r-1)return e;if(r>n.lvl+1){if(tf(t))return sf(Jp(e,{lvl:r-1}));if(!Np(t)&&!Np(t.r))return Jp(t.r,{l:Jp(t,{r:t.r.l}),lvl:r,r:Jp(e,{l:t.r.r,lvl:r-1})});throw new Error("Unexpected empty nodes")}if(tf(e))return af(Jp(e,{lvl:r-1}));if(Np(n)||Np(n.l))throw new Error("Unexpected empty nodes");{const t=n.l,o=tf(t)?n.lvl-1:n.lvl;return Jp(t,{l:Jp(e,{lvl:r-1,r:t.l}),lvl:t.lvl+1,r:af(Jp(n,{l:t.r,lvl:o}))})}}function Jp(e,t){return nf(void 0!==t.k?t.k:e.k,void 0!==t.v?t.v:e.v,void 0!==t.lvl?t.lvl:e.lvl,void 0!==t.l?t.l:e.l,void 0!==t.r?t.r:e.r)}function ef(e){return Np(e.r)?e.l:Kp(Jp(e,{r:ef(e.r)}))}function tf(e){return Np(e)||e.lvl>e.r.lvl}function rf(e){return Np(e.r)?[e.k,e.v]:rf(e.r)}function nf(e,t,r,n=Pp,o=Pp){return{k:e,l:n,lvl:r,r:o,v:t}}function of(e){return af(sf(e))}function sf(e){const{l:t}=e;return Np(t)||t.lvl!==e.lvl?e:Jp(t,{r:Jp(e,{l:t.r})})}function af(e){const{lvl:t,r:r}=e;return Np(r)||Np(r.r)||r.lvl!==t||r.r.lvl!==t?e:Jp(r,{l:Jp(e,{r:r.l}),lvl:t+1})}function lf(e,t){return!(!e||e.startIndex!==t.startIndex||e.endIndex!==t.endIndex)}function df(e,t){return!(!e||e[0]!==t[0]||e[1]!==t[1])}const cf=kp((()=>({recalcInProgress:Fp(!1)})),[],{singleton:!0});function uf(e,t,r){return e[hf(e,t,r)]}function hf(e,t,r,n=0){let o=e.length-1;for(;n<=o;){const i=Math.floor((n+o)/2),s=r(e[i],t);if(0===s)return i;if(-1===s){if(o-n<2)return i-1;o=i-1}else{if(o===n)return i;n=i+1}}throw new Error(`Failed binary finding record in array - ${e.join(",")}, searched for ${t}`)}function gf(e,t){return Math.round(e.getBoundingClientRect()[t])}function mf(e){return!Np(e.groupOffsetTree)}function pf({index:e},t){return t===e?0:t<e?-1:1}function ff({offset:e},t){return t===e?0:t<e?-1:1}function bf(e,t,r){if(0===t.length)return 0;const{index:n,offset:o,size:i}=uf(t,e,pf),s=e-n,a=i*s+(s-1)*r+o;return a>0?a+r:a}function yf(e,t){if(!mf(t))return e;let r=0;for(;t.groupIndices[r]<=e+r;)r++;return e+r}function vf(e,t,r){if(function(e){return typeof e.groupIndex<"u"}(e))return t.groupIndices[e.groupIndex]+1;{let n=yf("LAST"===e.index?r:e.index,t);return n=Math.max(0,n,Math.min(r,n)),n}}function xf(e,t,r,n=0){return n>0&&(t=Math.max(t,uf(e,n,pf).offset)),Wp(function(e,t,r,n){const o=hf(e,t,n),i=hf(e,r,n,o);return e.slice(o,i+1)}(e,t,r,ff),Cf)}function wf(e,[t,r,n,o]){t.length>0&&n("received item sizes",t,Ap.DEBUG);const i=e.sizeTree;let s=i,a=0;if(r.length>0&&Np(i)&&2===t.length){const e=t[0].size,n=t[1].size;s=r.reduce(((t,r)=>Up(Up(t,r,e),r+1,n)),s)}else[s,a]=function(e,t){let r=Np(e)?0:1/0;for(const n of t){const{endIndex:t,size:o,startIndex:i}=n;if(r=Math.min(r,i),Np(e)){e=Up(e,0,o);continue}const s=Gp(e,i-1,t+1);if(s.some(Ef(n)))continue;let a=!1,l=!1;for(const{end:r,start:n,value:i}of s)a?(t>=n||o===i)&&(e=Zp(e,n)):(l=i!==o,a=!0),r>t&&t>=n&&i!==o&&(e=Up(e,t+1,i));l&&(e=Up(e,i,o))}return[e,r]}(s,t);if(s===i)return e;const{lastIndex:l,lastOffset:d,lastSize:c,offsetTree:u}=Ff(e.offsetTree,a,s,o);return{groupIndices:r,groupOffsetTree:r.reduce(((e,t)=>Up(e,t,bf(t,u,o))),qp()),lastIndex:l,lastOffset:d,lastSize:c,offsetTree:u,sizeTree:s}}function $f(e,t){let r=0,n=0;for(;r<e;)r+=t[n+1]-t[n]-1,n++;return n-(r===e?0:1)}function Ff(e,t,r,n){let o=e,i=0,s=0,a=0,l=0;if(0!==t){l=hf(o,t-1,pf),a=o[l].offset;const e=Yp(r,t-1);i=e[0],s=e[1],o.length&&o[l].size===Yp(r,t)[1]&&(l-=1),o=o.slice(0,l+1)}else o=[];for(const{start:e,value:l}of Gp(r,t,1/0)){const t=e-i,r=t*s+a+t*n;o.push({index:e,offset:r,size:l}),i=e,a=r,s=l}return{lastIndex:i,lastOffset:a,lastSize:s,offsetTree:o}}function Cf(e){return{index:e.index,value:e}}function Ef(e){const{endIndex:t,size:r,startIndex:n}=e;return e=>e.start===n&&(e.end===t||e.end===1/0)&&e.value===r}const Sf={offsetHeight:"height",offsetWidth:"width"},kf=kp((([{log:e},{recalcInProgress:t}])=>{const r=Ep(),n=Ep(),o=Cp(n,0),i=Ep(),s=Ep(),a=Fp(0),l=Fp([]),d=Fp(void 0),c=Fp(void 0),u=Fp(((e,t)=>gf(e,Sf[t]))),h=Fp(void 0),g=Fp(0),m={groupIndices:[],groupOffsetTree:qp(),lastIndex:0,lastOffset:0,lastSize:0,offsetTree:[],sizeTree:qp()},p=Cp(yp(r,$p(l,e,g),vp(wf,m),mp()),m),f=Cp(yp(l,mp(),vp(((e,t)=>({current:t,prev:e.current})),{current:[],prev:[]}),fp((({prev:e})=>e))),[]);cp(yp(l,pp((e=>e.length>0)),$p(p,g),fp((([e,t,r])=>{const n=e.reduce(((e,n,o)=>Up(e,n,bf(n,t.offsetTree,r)||o)),qp());return{...t,groupIndices:e,groupOffsetTree:n}}))),p),cp(yp(n,$p(p),pp((([e,{lastIndex:t}])=>e<t)),fp((([e,{lastIndex:t,lastSize:r}])=>[{endIndex:t,size:r,startIndex:e}]))),r),cp(d,c);const b=Cp(yp(d,fp((e=>void 0===e))),!0);cp(yp(c,pp((e=>void 0!==e&&Np(dp(p).sizeTree))),fp((e=>[{endIndex:0,size:e,startIndex:0}]))),r);const y=Sp(yp(r,$p(p),vp((({sizes:e},[t,r])=>({changed:r!==e,sizes:r})),{changed:!1,sizes:m}),fp((e=>e.changed))));sp(yp(a,vp(((e,t)=>({diff:e.prev-t,prev:t})),{diff:0,prev:0}),fp((e=>e.diff))),(e=>{const{groupIndices:r}=dp(p);if(e>0)ap(t,!0),ap(i,e+$f(e,r));else if(e<0){const t=dp(f);t.length>0&&(e-=$f(-e,t)),ap(s,e)}})),sp(yp(a,$p(e)),(([e,t])=>{e<0&&t("`firstItemIndex` prop should not be set to less than zero. If you don't know the total count, just use a very high value",{firstItemIndex:a},Ap.ERROR)}));const v=Sp(i);cp(yp(i,$p(p),fp((([e,t])=>{const r=t.groupIndices.length>0,n=[],o=t.lastSize;if(r){const r=Vp(t.sizeTree,0);let i=0,s=0;for(;i<e;){const e=t.groupIndices[s],a=t.groupIndices.length===s+1?1/0:t.groupIndices[s+1]-e-1;n.push({endIndex:e,size:r,startIndex:e}),n.push({endIndex:e+1+a-1,size:o,startIndex:e+1}),s++,i+=a+1}const a=Qp(t.sizeTree);return i!==e&&a.shift(),a.reduce(((t,{k:r,v:n})=>{let o=t.ranges;return 0!==t.prevSize&&(o=[...t.ranges,{endIndex:r+e-1,size:t.prevSize,startIndex:t.prevIndex}]),{prevIndex:r+e,prevSize:n,ranges:o}}),{prevIndex:e,prevSize:0,ranges:n}).ranges}return Qp(t.sizeTree).reduce(((t,{k:r,v:n})=>({prevIndex:r+e,prevSize:n,ranges:[...t.ranges,{endIndex:r+e-1,size:t.prevSize,startIndex:t.prevIndex}]})),{prevIndex:0,prevSize:o,ranges:[]}).ranges}))),r);const x=Sp(yp(s,$p(p,g),fp((([e,{offsetTree:t},r])=>bf(-e,t,r)))));return cp(yp(s,$p(p,g),fp((([e,t,r])=>{if(t.groupIndices.length>0){if(Np(t.sizeTree))return t;let n=qp();const o=dp(f);let i=0,s=0,a=0;for(;i<-e;){a=o[s];const e=o[s+1]-a-1;s++,i+=e+1}if(n=Qp(t.sizeTree).reduce(((t,{k:r,v:n})=>Up(t,Math.max(0,r+e),n)),n),i!==-e){n=Up(n,0,Vp(t.sizeTree,a));n=Up(n,1,Yp(t.sizeTree,1-e)[1])}return{...t,sizeTree:n,...Ff(t.offsetTree,0,n,r)}}{const n=Qp(t.sizeTree).reduce(((t,{k:r,v:n})=>Up(t,Math.max(0,r+e),n)),qp());return{...t,sizeTree:n,...Ff(t.offsetTree,0,n,r)}}}))),p),{beforeUnshiftWith:v,data:h,defaultItemSize:c,firstItemIndex:a,fixedItemSize:d,gap:g,groupIndices:l,itemSize:u,listRefresh:y,shiftWith:s,shiftWithOffset:x,sizeRanges:r,sizes:p,statefulTotalCount:o,totalCount:n,trackItemSizes:b,unshiftWith:i}}),ip(Op,cf),{singleton:!0});function Df(e){return e.reduce(((e,t)=>(e.groupIndices.push(e.totalCount),e.totalCount+=t+1,e)),{groupIndices:[],totalCount:0})}const If=kp((([{groupIndices:e,sizes:t,totalCount:r},{headerHeight:n,scrollTop:o}])=>{const i=Ep(),s=Ep(),a=Sp(yp(i,fp(Df)));return cp(yp(a,fp((e=>e.totalCount))),r),cp(yp(a,fp((e=>e.groupIndices))),e),cp(yp(Ip(o,t,n),pp((([e,t])=>mf(t))),fp((([e,t,r])=>Yp(t.groupOffsetTree,Math.max(e-r,0),"v")[0])),mp(),fp((e=>[e]))),s),{groupCounts:i,topItemsIndexes:s}}),ip(kf,Lp)),Tf=kp((([{log:e}])=>{const t=Fp(!1),r=Sp(yp(t,pp((e=>e)),mp()));return sp(t,(t=>{t&&dp(e)("props updated",{},Ap.DEBUG)})),{didMount:r,propsReady:t}}),ip(Op),{singleton:!0}),Bf=typeof document<"u"&&"scrollBehavior"in document.documentElement.style;function Af(e){const t="number"==typeof e?{index:e}:e;return t.align||(t.align="start"),(!t.behavior||!Bf)&&(t.behavior="auto"),t.offset||(t.offset=0),t}const zf=kp((([{gap:e,listRefresh:t,sizes:r,totalCount:n},{fixedFooterHeight:o,fixedHeaderHeight:i,footerHeight:s,headerHeight:a,scrollingInProgress:l,scrollTo:d,smoothScrollTargetReached:c,viewportHeight:u},{log:h}])=>{const g=Ep(),m=Ep(),p=Fp(0);let f=null,b=null,y=null;function v(){f&&(f(),f=null),y&&(y(),y=null),b&&(clearTimeout(b),b=null),ap(l,!1)}return cp(yp(g,$p(r,u,n,p,a,s,h),$p(e,i,o),fp((([[e,r,n,o,i,s,a,d],u,h,p])=>{const x=Af(e),{align:w,behavior:$,offset:F}=x,C=o-1,E=vf(x,r,C);let S=bf(E,r.offsetTree,u)+s;"end"===w?(S+=h+Yp(r.sizeTree,E)[1]-n+p,E===C&&(S+=a)):"center"===w?S+=(h+Yp(r.sizeTree,E)[1]-n+p)/2:S-=i,F&&(S+=F);const k=t=>{v(),t?(d("retrying to scroll to",{location:e},Ap.DEBUG),ap(g,e)):(ap(m,!0),d("list did not change, scroll successful",{},Ap.DEBUG))};if(v(),"smooth"===$){let e=!1;y=sp(t,(t=>{e=e||t})),f=up(c,(()=>{k(e)}))}else f=up(yp(t,function(e){return t=>{const r=setTimeout((()=>{t(!1)}),e);return e=>{e&&(t(!0),clearTimeout(r))}}}(150)),k);return b=setTimeout((()=>{v()}),1200),ap(l,!0),d("scrolling from index to",{behavior:$,index:E,top:S},Ap.DEBUG),{behavior:$,top:S}}))),d),{scrollTargetReached:m,scrollToIndex:g,topListHeight:p}}),ip(kf,Lp,Op),{singleton:!0});function Of(e,t){0==e?t():requestAnimationFrame((()=>{Of(e-1,t)}))}function Mf(e,t){const r=t-1;return"number"==typeof e?e:"LAST"===e.index?r:e.index}const _f=kp((([{defaultItemSize:e,listRefresh:t,sizes:r},{scrollTop:n},{scrollTargetReached:o,scrollToIndex:i},{didMount:s}])=>{const a=Fp(!0),l=Fp(0),d=Fp(!0);return cp(yp(s,$p(l),pp((([e,t])=>!!t)),bp(!1)),a),cp(yp(s,$p(l),pp((([e,t])=>!!t)),bp(!1)),d),sp(yp(Ip(t,s),$p(a,r,e,d),pp((([[,e],t,{sizeTree:r},n,o])=>e&&(!Np(r)||tp(n))&&!t&&!o)),$p(l)),(([,e])=>{up(o,(()=>{ap(d,!0)})),Of(4,(()=>{up(n,(()=>{ap(a,!0)})),ap(i,e)}))})),{initialItemFinalLocationReached:d,initialTopMostItemIndex:l,scrolledToInitialItem:a}}),ip(kf,Lp,zf,Tf),{singleton:!0});function Rf(e,t){return Math.abs(e-t)<1.01}const Hf="up",jf="down",Lf={atBottom:!1,notAtBottomBecause:"NOT_SHOWING_LAST_ITEM",state:{offsetBottom:0,scrollHeight:0,scrollTop:0,viewportHeight:0}},Pf=kp((([{footerHeight:e,headerHeight:t,scrollBy:r,scrollContainerState:n,scrollTop:o,viewportHeight:i}])=>{const s=Fp(!1),a=Fp(!0),l=Ep(),d=Ep(),c=Fp(4),u=Fp(0),h=Cp(yp(Bp(yp(Tp(o),xp(1),bp(!0)),yp(Tp(o),xp(1),bp(!1),hp(100))),mp()),!1),g=Cp(yp(Bp(yp(r,bp(!0)),yp(r,bp(!1),hp(200))),mp()),!1);cp(yp(Ip(Tp(o),Tp(u)),fp((([e,t])=>e<=t)),mp()),a),cp(yp(a,wp(50)),d);const m=Sp(yp(Ip(n,Tp(i),Tp(t),Tp(e),Tp(c)),vp(((e,[{scrollHeight:t,scrollTop:r},n,o,i,s])=>{const a={scrollHeight:t,scrollTop:r,viewportHeight:n};if(r+n-t>-s){let t,n;return r>e.state.scrollTop?(t="SCROLLED_DOWN",n=e.state.scrollTop-r):(t="SIZE_DECREASED",n=e.state.scrollTop-r||e.scrollTopDelta),{atBottom:!0,atBottomBecause:t,scrollTopDelta:n,state:a}}let l;return l=a.scrollHeight>e.state.scrollHeight?"SIZE_INCREASED":n<e.state.viewportHeight?"VIEWPORT_HEIGHT_DECREASING":r<e.state.scrollTop?"SCROLLING_UPWARDS":"NOT_FULLY_SCROLLED_TO_LAST_ITEM_BOTTOM",{atBottom:!1,notAtBottomBecause:l,state:a}}),Lf),mp(((e,t)=>e&&e.atBottom===t.atBottom)))),p=Cp(yp(n,vp(((e,{scrollHeight:t,scrollTop:r,viewportHeight:n})=>{if(Rf(e.scrollHeight,t))return{changed:!1,jump:0,scrollHeight:t,scrollTop:r};{const o=t-(r+n)<1;return e.scrollTop!==r&&o?{changed:!0,jump:e.scrollTop-r,scrollHeight:t,scrollTop:r}:{changed:!0,jump:0,scrollHeight:t,scrollTop:r}}}),{changed:!1,jump:0,scrollHeight:0,scrollTop:0}),pp((e=>e.changed)),fp((e=>e.jump))),0);cp(yp(m,fp((e=>e.atBottom))),s),cp(yp(s,wp(50)),l);const f=Fp(jf);cp(yp(n,fp((({scrollTop:e})=>e)),mp(),vp(((e,t)=>dp(g)?{direction:e.direction,prevScrollTop:t}:{direction:t<e.prevScrollTop?Hf:jf,prevScrollTop:t}),{direction:jf,prevScrollTop:0}),fp((e=>e.direction))),f),cp(yp(n,wp(50),bp("none")),f);const b=Fp(0);return cp(yp(h,pp((e=>!e)),bp(0)),b),cp(yp(o,wp(100),$p(h),pp((([e,t])=>!!t)),vp((([e,t],[r])=>[t,r]),[0,0]),fp((([e,t])=>t-e))),b),{atBottomState:m,atBottomStateChange:l,atBottomThreshold:c,atTopStateChange:d,atTopThreshold:u,isAtBottom:s,isAtTop:a,isScrolling:h,lastJumpDueToItemResize:p,scrollDirection:f,scrollVelocity:b}}),ip(Lp)),Wf="top",Nf="bottom",Vf="none";function Yf(e,t,r){return"number"==typeof e?r===Hf&&t===Wf||r===jf&&t===Nf?e:0:r===Hf?t===Wf?e.main:e.reverse:t===Nf?e.main:e.reverse}function Uf(e,t){var r;return"number"==typeof e?e:null!=(r=e[t])?r:0}const qf=kp((([{deviation:e,fixedHeaderHeight:t,headerHeight:r,scrollTop:n,viewportHeight:o}])=>{const i=Ep(),s=Fp(0),a=Fp(0),l=Fp(0);return{increaseViewportBy:a,listBoundary:i,overscan:l,topListHeight:s,visibleRange:Cp(yp(Ip(Tp(n),Tp(o),Tp(r),Tp(i,df),Tp(l),Tp(s),Tp(t),Tp(e),Tp(a)),fp((([e,t,r,[n,o],i,s,a,l,d])=>{const c=e-l,u=s+a,h=Math.max(r-c,0);let g=Vf;const m=Uf(d,Wf),p=Uf(d,Nf);return n-=l,o+=r+a,(n+=r+a)>e+u-m&&(g=Hf),(o-=l)<e-h+t+p&&(g=jf),g!==Vf?[Math.max(c-r-Yf(i,Wf,g)-m,0),c-h-a+t+Yf(i,Nf,g)+p]:null})),pp((e=>null!=e)),mp(df)),[0,0])}}),ip(Lp),{singleton:!0});const Gf={bottom:0,firstItemIndex:0,items:[],offsetBottom:0,offsetTop:0,top:0,topItems:[],topListHeight:0,totalCount:0};function Zf(e,t,r,n,o,i){const{lastIndex:s,lastOffset:a,lastSize:l}=o;let d=0,c=0;if(e.length>0){d=e[0].offset;const t=e[e.length-1];c=t.offset+t.size}const u=r-s,h=d,g=a+u*l+(u-1)*n-c;return{bottom:c,firstItemIndex:i,items:Xf(e,o,i),offsetBottom:g,offsetTop:d,top:h,topItems:Xf(t,o,i),topListHeight:t.reduce(((e,t)=>t.size+e),0),totalCount:r}}function Qf(e,t,r,n,o,i){let s=0;if(r.groupIndices.length>0)for(const t of r.groupIndices){if(t-s>=e)break;s++}const a=e+s,l=Mf(t,a);return Zf(Array.from({length:a}).map(((e,t)=>({data:i[t+l],index:t+l,offset:0,size:0}))),[],a,o,r,n)}function Xf(e,t,r){if(0===e.length)return[];if(!mf(t))return e.map((e=>({...e,index:e.index+r,originalIndex:e.index})));const n=e[0].index,o=e[e.length-1].index,i=[],s=Gp(t.groupOffsetTree,n,o);let a,l=0;for(const n of e){let e;(!a||a.end<n.index)&&(a=s.shift(),l=t.groupIndices.indexOf(a.start)),e=n.index===a.start?{index:l,type:"group"}:{groupIndex:l,index:n.index-(l+1)+r},i.push({...e,data:n.data,offset:n.offset,originalIndex:n.index,size:n.size})}return i}const Kf=kp((([{data:e,firstItemIndex:t,gap:r,sizes:n,totalCount:o},i,{listBoundary:s,topListHeight:a,visibleRange:l},{initialTopMostItemIndex:d,scrolledToInitialItem:c},{topListHeight:u},h,{didMount:g},{recalcInProgress:m}])=>{const p=Fp([]),f=Fp(0),b=Ep();cp(i.topItemsIndexes,p);const y=Cp(yp(Ip(g,m,Tp(l,df),Tp(o),Tp(n),Tp(d),c,Tp(p),Tp(t),Tp(r),e),pp((([e,t,,r,,,,,,,n])=>{const o=n&&n.length!==r;return e&&!t&&!o})),fp((([,,[e,t],r,n,o,i,s,a,l,d])=>{const c=n,{offsetTree:u,sizeTree:h}=c,g=dp(f);if(0===r)return{...Gf,totalCount:r};if(0===e&&0===t)return 0===g?{...Gf,totalCount:r}:Qf(g,o,n,a,l,d||[]);if(Np(h))return g>0?null:Zf(function(e,t,r){if(mf(t)){const n=yf(e,t);return[{index:Yp(t.groupOffsetTree,n)[0],offset:0,size:0},{data:null==r?void 0:r[0],index:n,offset:0,size:0}]}return[{data:null==r?void 0:r[0],index:e,offset:0,size:0}]}(Mf(o,r),c,d),[],r,l,c,a);const m=[];if(s.length>0){const e=s[0],t=s[s.length-1];let r=0;for(const n of Gp(h,e,t)){const o=n.value,i=Math.max(n.start,e),s=Math.min(n.end,t);for(let e=i;e<=s;e++)m.push({data:null==d?void 0:d[e],index:e,offset:r,size:o}),r+=o}}if(!i)return Zf([],m,r,l,c,a);const p=s.length>0?s[s.length-1]+1:0,b=xf(u,e,t,p);if(0===b.length)return null;const y=r-1;return Zf(np([],(r=>{for(const n of b){const o=n.value;let i=o.offset,s=n.start;const a=o.size;if(o.offset<e){s+=Math.floor((e-o.offset+l)/(a+l));const t=s-n.start;i+=t*a+t*l}s<p&&(i+=(p-s)*a,s=p);const c=Math.min(n.end,y);for(let e=s;e<=c&&!(i>=t);e++)r.push({data:null==d?void 0:d[e],index:e,offset:i,size:a}),i+=a+l}})),m,r,l,c,a)})),pp((e=>null!==e)),mp()),Gf);cp(yp(e,pp(tp),fp((e=>null==e?void 0:e.length))),o),cp(yp(y,fp((e=>e.topListHeight))),u),cp(u,a),cp(yp(y,fp((e=>[e.top,e.bottom]))),s),cp(yp(y,fp((e=>e.items))),b);const v=Sp(yp(y,pp((({items:e})=>e.length>0)),$p(o,e),pp((([{items:e},t])=>e[e.length-1].originalIndex===t-1)),fp((([,e,t])=>[e-1,t])),mp(df),fp((([e])=>e)))),x=Sp(yp(y,wp(200),pp((({items:e,topItems:t})=>e.length>0&&e[0].originalIndex===t.length)),fp((({items:e})=>e[0].index)),mp())),w=Sp(yp(y,pp((({items:e})=>e.length>0)),fp((({items:e})=>{let t=0,r=e.length-1;for(;"group"===e[t].type&&t<r;)t++;for(;"group"===e[r].type&&r>t;)r--;return{endIndex:e[r].index,startIndex:e[t].index}})),mp(lf)));return{endReached:v,initialItemCount:f,itemsRendered:b,listState:y,rangeChanged:w,startReached:x,topItemsIndexes:p,...h}}),ip(kf,If,qf,_f,zf,Pf,Tf,cf),{singleton:!0}),Jf=kp((([{fixedFooterHeight:e,fixedHeaderHeight:t,footerHeight:r,headerHeight:n},{listState:o}])=>{const i=Ep(),s=Cp(yp(Ip(r,e,n,t,o),fp((([e,t,r,n,o])=>e+t+r+n+o.offsetBottom+o.bottom))),0);return cp(Tp(s),i),{totalListHeight:s,totalListHeightChanged:i}}),ip(Lp,Kf),{singleton:!0}),eb=kp((([{viewportHeight:e},{totalListHeight:t}])=>{const r=Fp(!1);return{alignToBottom:r,paddingTopAddition:Cp(yp(Ip(r,e,t),pp((([e])=>e)),fp((([,e,t])=>Math.max(0,e-t))),wp(0),mp()),0)}}),ip(Lp,Jf),{singleton:!0});function tb(e){return!!e&&("smooth"===e?"smooth":"auto")}const rb=kp((([{listRefresh:e,totalCount:t},{atBottomState:r,isAtBottom:n},{scrollToIndex:o},{scrolledToInitialItem:i},{didMount:s,propsReady:a},{log:l},{scrollingInProgress:d}])=>{const c=Fp(!1),u=Ep();let h=null;function g(e){ap(o,{align:"end",behavior:e,index:"LAST"})}function m(e){const t=up(r,(t=>{e&&!t.atBottom&&"SIZE_INCREASED"===t.notAtBottomBecause&&!h&&(dp(l)("scrolling to bottom due to increased size",{},Ap.DEBUG),g("auto"))}));setTimeout(t,100)}return sp(yp(Ip(yp(Tp(t),xp(1)),s),$p(Tp(c),n,i,d),fp((([[e,t],r,n,o,i])=>{let s=t&&o,a="auto";return s&&(a=((e,t)=>"function"==typeof e?tb(e(t)):t&&tb(e))(r,n||i),s=s&&!!a),{followOutputBehavior:a,shouldFollow:s,totalCount:e}})),pp((({shouldFollow:e})=>e))),(({followOutputBehavior:t,totalCount:r})=>{h&&(h(),h=null),h=up(e,(()=>{dp(l)("following output to ",{totalCount:r},Ap.DEBUG),g(t),h=null}))})),sp(yp(Ip(Tp(c),t,a),pp((([e,,t])=>e&&t)),vp((({value:e},[,t])=>({refreshed:e===t,value:t})),{refreshed:!1,value:0}),pp((({refreshed:e})=>e)),$p(c,t)),(([,e])=>{dp(i)&&m(!1!==e)})),sp(u,(()=>{m(!1!==dp(c))})),sp(Ip(Tp(c),r),(([e,t])=>{e&&!t.atBottom&&"VIEWPORT_HEIGHT_DECREASING"===t.notAtBottomBecause&&g("auto")})),{autoscrollToBottom:u,followOutput:c}}),ip(kf,Pf,zf,_f,Tf,Op,Lp)),nb=kp((([{data:e,firstItemIndex:t,gap:r,sizes:n},{initialTopMostItemIndex:o},{initialItemCount:i,listState:s},{didMount:a}])=>(cp(yp(a,$p(i),pp((([,e])=>0!==e)),$p(o,n,t,r,e),fp((([[,e],t,r,n,o,i=[]])=>Qf(e,t,r,n,o,i)))),s),{})),ip(kf,_f,Kf,Tf),{singleton:!0}),ob=kp((([{didMount:e},{scrollTo:t},{listState:r}])=>{const n=Fp(0);return sp(yp(e,$p(n),pp((([,e])=>0!==e)),fp((([,e])=>({top:e})))),(e=>{up(yp(r,xp(1),pp((e=>e.items.length>1))),(()=>{requestAnimationFrame((()=>{ap(t,e)}))}))})),{initialScrollTop:n}}),ip(Tf,Lp,Kf),{singleton:!0}),ib=({itemBottom:e,itemTop:t,locationParams:{align:r,behavior:n,...o},viewportBottom:i,viewportTop:s})=>t<s?{...o,align:null!=r?r:"start",behavior:n}:e>i?{...o,align:null!=r?r:"end",behavior:n}:null,sb=kp((([{gap:e,sizes:t,totalCount:r},{fixedFooterHeight:n,fixedHeaderHeight:o,headerHeight:i,scrollingInProgress:s,scrollTop:a,viewportHeight:l},{scrollToIndex:d}])=>{const c=Ep();return cp(yp(c,$p(t,l,r,i,o,n,a),$p(e),fp((([[e,t,r,n,o,i,a,l],d])=>{const{align:c,behavior:u,calculateViewLocation:h=ib,done:g,...m}=e,p=vf(e,t,n-1),f=bf(p,t.offsetTree,d)+o+i,b=h({itemBottom:f+Yp(t.sizeTree,p)[1],itemTop:f,locationParams:{align:c,behavior:u,...m},viewportBottom:l+r-a,viewportTop:l+i});return b?g&&up(yp(s,pp((e=>!e)),xp(dp(s)?1:2)),g):g&&g(),b})),pp((e=>null!==e))),d),{scrollIntoView:c}}),ip(kf,Lp,zf,Kf,Op),{singleton:!0}),ab=kp((([{scrollVelocity:e}])=>{const t=Fp(!1),r=Ep(),n=Fp(!1);return cp(yp(e,$p(n,t,r),pp((([e,t])=>!!t)),fp((([e,t,r,n])=>{const{enter:o,exit:i}=t;if(r){if(i(e,n))return!1}else if(o(e,n))return!0;return r})),mp()),t),sp(yp(Ip(t,e,r),$p(n)),(([[e,t,r],n])=>{e&&n&&n.change&&n.change(t,r)})),{isSeeking:t,scrollSeekConfiguration:n,scrollSeekRangeChanged:r,scrollVelocity:e}}),ip(Pf),{singleton:!0}),lb=kp((([{scrollContainerState:e,scrollTo:t}])=>{const r=Ep(),n=Ep(),o=Ep(),i=Fp(!1),s=Fp(void 0);return cp(yp(Ip(r,n),fp((([{scrollHeight:e,scrollTop:t,viewportHeight:r},{offsetTop:n}])=>({scrollHeight:e,scrollTop:Math.max(0,t-n),viewportHeight:r})))),e),cp(yp(t,$p(n),fp((([e,{offsetTop:t}])=>({...e,top:e.top+t})))),o),{customScrollParent:s,useWindowScroll:i,windowScrollContainerState:r,windowScrollTo:o,windowViewportRect:n}}),ip(Lp)),db=kp((([{sizeRanges:e,sizes:t},{headerHeight:r,scrollTop:n},{initialTopMostItemIndex:o},{didMount:i},{useWindowScroll:s,windowScrollContainerState:a,windowViewportRect:l}])=>{const d=Ep(),c=Fp(void 0),u=Fp(null),h=Fp(null);return cp(a,u),cp(l,h),sp(yp(d,$p(t,n,s,u,h,r)),(([e,t,r,n,o,i,s])=>{const a=function(e){return Qp(e).map((({k:e,v:t},r,n)=>{const o=n[r+1];return{endIndex:o?o.k-1:1/0,size:t,startIndex:e}}))}(t.sizeTree);n&&null!==o&&null!==i&&(r=o.scrollTop-i.offsetTop),e({ranges:a,scrollTop:r-=s})})),cp(yp(c,pp(tp),fp(cb)),o),cp(yp(i,$p(c),pp((([,e])=>void 0!==e)),mp(),fp((([,e])=>e.ranges))),e),{getState:d,restoreStateFrom:c}}),ip(kf,Lp,_f,Tf,lb));function cb(e){return{align:"start",index:0,offset:e.scrollTop}}const ub=kp((([{topItemsIndexes:e}])=>{const t=Fp(0);return cp(yp(t,pp((e=>e>=0)),fp((e=>Array.from({length:e}).map(((e,t)=>t))))),e),{topItemCount:t}}),ip(Kf));function hb(e){let t,r=!1;return()=>(r||(r=!0,t=e()),t)}const gb=hb((()=>/iP(ad|od|hone)/i.test(navigator.userAgent)&&/WebKit/i.test(navigator.userAgent))),mb=kp((([{deviation:e,scrollBy:t,scrollingInProgress:r,scrollTop:n},{isAtBottom:o,isScrolling:i,lastJumpDueToItemResize:s,scrollDirection:a},{listState:l},{beforeUnshiftWith:d,gap:c,shiftWithOffset:u,sizes:h},{log:g},{recalcInProgress:m}])=>{const p=Sp(yp(l,$p(s),vp((([,e,t,r],[{bottom:n,items:o,offsetBottom:i,totalCount:s},a])=>{const l=n+i;let d=0;return t===s&&e.length>0&&o.length>0&&(0===o[0].originalIndex&&0===e[0].originalIndex||(d=l-r,0!==d&&(d+=a))),[d,o,s,l]}),[0,[],0,0]),pp((([e])=>0!==e)),$p(n,a,r,o,g,m),pp((([,e,t,r,,,n])=>!n&&!r&&0!==e&&t===Hf)),fp((([[e],,,,,t])=>(t("Upward scrolling compensation",{amount:e},Ap.DEBUG),e)))));function f(r){r>0?(ap(t,{behavior:"auto",top:-r}),ap(e,0)):(ap(e,0),ap(t,{behavior:"auto",top:-r}))}return sp(yp(p,$p(e,i)),(([t,r,n])=>{n&&gb()?ap(e,r-t):f(-t)})),sp(yp(Ip(Cp(i,!1),e,m),pp((([e,t,r])=>!e&&!r&&0!==t)),fp((([e,t])=>t)),wp(1)),f),cp(yp(u,fp((e=>({top:-e})))),t),sp(yp(d,$p(h,c),fp((([e,{groupIndices:t,lastSize:r,sizeTree:n},o])=>{function i(e){return e*(r+o)}if(0===t.length)return i(e);{let r=0;const o=Vp(n,0);let s=0,a=0;for(;s<e;){s++,r+=o;let n=t.length===a+1?1/0:t[a+1]-t[a]-1;s+n>e&&(r-=o,n=e-s+1),s+=n,r+=i(n),a++}return r}}))),(r=>{ap(e,r),requestAnimationFrame((()=>{ap(t,{top:r}),requestAnimationFrame((()=>{ap(e,0),ap(m,!1)}))}))})),{deviation:e}}),ip(Lp,Pf,Kf,kf,Op,cf)),pb=kp((([e,t,r,n,o,i,s,a,l,d])=>({...e,...t,...r,...n,...o,...i,...s,...a,...l,...d})),ip(qf,nb,Tf,ab,Jf,ob,eb,lb,sb,Op)),fb=kp((([{data:e,defaultItemSize:t,firstItemIndex:r,fixedItemSize:n,gap:o,groupIndices:i,itemSize:s,sizeRanges:a,sizes:l,statefulTotalCount:d,totalCount:c,trackItemSizes:u},{initialItemFinalLocationReached:h,initialTopMostItemIndex:g,scrolledToInitialItem:m},p,f,b,{listState:y,topItemsIndexes:v,...x},{scrollToIndex:w},$,{topItemCount:F},{groupCounts:C},E])=>(cp(x.rangeChanged,E.scrollSeekRangeChanged),cp(yp(E.windowViewportRect,fp((e=>e.visibleHeight))),p.viewportHeight),{data:e,defaultItemHeight:t,firstItemIndex:r,fixedItemHeight:n,gap:o,groupCounts:C,initialItemFinalLocationReached:h,initialTopMostItemIndex:g,scrolledToInitialItem:m,sizeRanges:a,topItemCount:F,topItemsIndexes:v,totalCount:c,...b,groupIndices:i,itemSize:s,listState:y,scrollToIndex:w,statefulTotalCount:d,trackItemSizes:u,...x,...E,...p,sizes:l,...f})),ip(kf,_f,Lp,db,rb,Kf,zf,mb,ub,If,pb));function bb(e,t){const r={},n={};let o=0;const i=e.length;for(;o<i;)n[e[o]]=1,o+=1;for(const e in t)Object.hasOwn(n,e)||(r[e]=t[e]);return r}const yb=typeof document<"u"?o.useLayoutEffect:o.useEffect;function vb(e,r,n){const i=Object.keys(r.required||{}),s=Object.keys(r.optional||{}),a=Object.keys(r.methods||{}),l=Object.keys(r.events||{}),d=o.createContext({});function c(e,t){e.propsReady&&ap(e.propsReady,!1);for(const n of i){ap(e[r.required[n]],t[n])}for(const n of s)if(n in t){ap(e[r.optional[n]],t[n])}e.propsReady&&ap(e.propsReady,!0)}function u(e){return l.reduce(((t,n)=>(t[n]=function(e){let t,r;const n=()=>null==t?void 0:t();return function(o,i){switch(o){case 1:return i?r===i?void 0:(n(),r=i,t=sp(e,i),t):(n(),rp);case 2:return n(),void(r=null)}}}(e[r.events[n]]),t)),{})}const h=o.forwardRef(((h,g)=>{const{children:m,...p}=h,[f]=o.useState((()=>np(function(e){const t=new Map,r=({constructor:e,dependencies:n,id:o,singleton:i})=>{if(i&&t.has(o))return t.get(o);const s=e(n.map((e=>r(e))));return i&&t.set(o,s),s};return r(e)}(e),(e=>{c(e,p)})))),[b]=o.useState(Jm(u,f));yb((()=>{for(const e of l)e in p&&sp(b[e],p[e]);return()=>{Object.values(b).map(lp)}}),[p,b,f]),yb((()=>{c(f,p)})),o.useImperativeHandle(g,Qm(function(e){return a.reduce(((t,n)=>(t[n]=t=>{ap(e[r.methods[n]],t)},t)),{})}(f)));const y=n;return t(d.Provider,{value:f,children:n?t(y,{...bb([...i,...s,...l],p),children:m}):m})}));return{Component:h,useEmitter:(e,t)=>{const r=o.useContext(d)[e];yb((()=>sp(r,t)),[t,r])},useEmitterValue:o.version.startsWith("18")?e=>{const t=o.useContext(d)[e],r=o.useCallback((e=>sp(t,e)),[t]);return o.useSyncExternalStore(r,(()=>dp(t)),(()=>dp(t)))}:e=>{const t=o.useContext(d)[e],[r,n]=o.useState(Jm(dp,t));return yb((()=>sp(t,(e=>{e!==r&&n(Qm(e))}))),[t,r]),r},usePublisher:e=>o.useCallback(ep(ap,o.useContext(d)[e]),[e])}}const xb=o.createContext(void 0),wb=o.createContext(void 0),$b=typeof document<"u"?o.useLayoutEffect:o.useEffect;function Fb(e,t,r,n=rp,i,s){const a=o.useRef(null),l=o.useRef(null),d=o.useRef(null),c=o.useCallback((r=>{const n=r.target,o=n===window||n===document,i=s?o?window.pageXOffset||document.documentElement.scrollLeft:n.scrollLeft:o?window.pageYOffset||document.documentElement.scrollTop:n.scrollTop,a=s?o?document.documentElement.scrollWidth:n.scrollWidth:o?document.documentElement.scrollHeight:n.scrollHeight,c=s?o?window.innerWidth:n.offsetWidth:o?window.innerHeight:n.offsetHeight,u=()=>{e({scrollHeight:a,scrollTop:Math.max(i,0),viewportHeight:c})};r.suppressFlushSync?u():k.flushSync(u),null!==l.current&&(i===l.current||i<=0||i===a-c)&&(l.current=null,t(!0),d.current&&(clearTimeout(d.current),d.current=null))}),[e,t]);return o.useEffect((()=>{const e=i||a.current;return n(i||a.current),c({suppressFlushSync:!0,target:e}),e.addEventListener("scroll",c,{passive:!0}),()=>{n(null),e.removeEventListener("scroll",c)}}),[a,c,r,n,i]),{scrollByCallback:function(e){s&&(e={behavior:e.behavior,left:e.top}),a.current.scrollBy(e)},scrollerRef:a,scrollToCallback:function(r){const n=a.current;if(!n||(s?"offsetWidth"in n&&0===n.offsetWidth:"offsetHeight"in n&&0===n.offsetHeight))return;const o="smooth"===r.behavior;let i,c,u;n===window?(c=Math.max(gf(document.documentElement,s?"width":"height"),s?document.documentElement.scrollWidth:document.documentElement.scrollHeight),i=s?window.innerWidth:window.innerHeight,u=s?document.documentElement.scrollLeft:document.documentElement.scrollTop):(c=n[s?"scrollWidth":"scrollHeight"],i=gf(n,s?"width":"height"),u=n[s?"scrollLeft":"scrollTop"]);const h=c-i;if(r.top=Math.ceil(Math.max(Math.min(h,r.top),0)),Rf(i,c)||r.top===u)return e({scrollHeight:c,scrollTop:u,viewportHeight:i}),void(o&&t(!0));o?(l.current=r.top,d.current&&clearTimeout(d.current),d.current=setTimeout((()=>{d.current=null,l.current=null,t(!0)}),1e3)):l.current=null,s&&(r={behavior:r.behavior,left:r.top}),n.scrollTo(r)}}}const Cb="-webkit-sticky",Eb="sticky",Sb=hb((()=>{if(typeof document>"u")return Eb;const e=document.createElement("div");return e.style.position=Cb,e.style.position===Cb?Cb:Eb}));function kb(e){return e}const Db=kp((()=>{const e=Fp((e=>`Item ${e}`)),t=Fp(null),r=Fp((e=>`Group ${e}`)),n=Fp({}),o=Fp(kb),i=Fp("div"),s=Fp(rp),a=(e,t=null)=>Cp(yp(n,fp((t=>t[e])),mp()),t);return{components:n,computeItemKey:o,context:t,EmptyPlaceholder:a("EmptyPlaceholder"),FooterComponent:a("Footer"),GroupComponent:a("Group","div"),groupContent:r,HeaderComponent:a("Header"),HeaderFooterTag:i,ItemComponent:a("Item","div"),itemContent:e,ListComponent:a("List","div"),ScrollerComponent:a("Scroller","div"),scrollerRef:s,ScrollSeekPlaceholder:a("ScrollSeekPlaceholder"),TopItemListComponent:a("TopItemList")}})),Ib=kp((([e,t])=>({...e,...t})),ip(fb,Db)),Tb=({height:e})=>t("div",{style:{height:e}}),Bb={overflowAnchor:"none",position:Sb(),zIndex:1},Ab={overflowAnchor:"none"},zb={...Ab,display:"inline-block",height:"100%"},Ob=o.memo((function({showTopList:e=!1}){const r=Xb("listState"),n=Kb("sizeRanges"),i=Xb("useWindowScroll"),s=Xb("customScrollParent"),a=Kb("windowScrollContainerState"),l=Kb("scrollContainerState"),d=s||i?a:l,c=Xb("itemContent"),u=Xb("context"),h=Xb("groupContent"),g=Xb("trackItemSizes"),m=Xb("itemSize"),p=Xb("log"),f=Kb("gap"),b=Xb("horizontalDirection"),{callbackRef:v}=Rp(n,m,g,e?rp:d,p,f,s,b,Xb("skipAnimationFrameInResizeObserver")),[x,w]=o.useState(0);Qb("deviation",(e=>{x!==e&&w(e)}));const $=Xb("EmptyPlaceholder"),F=Xb("ScrollSeekPlaceholder")||Tb,C=Xb("ListComponent"),E=Xb("ItemComponent"),S=Xb("GroupComponent"),k=Xb("computeItemKey"),D=Xb("isSeeking"),I=Xb("groupIndices").length>0,T=Xb("alignToBottom"),B=Xb("initialItemFinalLocationReached"),A=e?{}:{boxSizing:"border-box",...b?{display:"inline-block",height:"100%",marginLeft:0!==x?x:T?"auto":0,paddingLeft:r.offsetTop,paddingRight:r.offsetBottom,whiteSpace:"nowrap"}:{marginTop:0!==x?x:T?"auto":0,paddingBottom:r.offsetBottom,paddingTop:r.offsetTop},...B?{}:{visibility:"hidden"}};return!e&&0===r.totalCount&&$?t($,{...jb($,u)}):t(C,{...jb(C,u),"data-testid":e?"virtuoso-top-item-list":"virtuoso-item-list",ref:v,style:A,children:(e?r.topItems:r.items).map((e=>{const t=e.originalIndex,n=k(t+r.firstItemIndex,e.data,u);return D?y(F,{...jb(F,u),height:e.size,index:e.index,key:n,type:e.type||"item",..."group"===e.type?{}:{groupIndex:e.groupIndex}}):"group"===e.type?y(S,{...jb(S,u),"data-index":t,"data-item-index":e.index,"data-known-size":e.size,key:n,style:Bb},h(e.index,u)):y(E,{...jb(E,u),...Lb(E,e.data),"data-index":t,"data-item-group-index":e.groupIndex,"data-item-index":e.index,"data-known-size":e.size,key:n,style:b?zb:Ab},I?c(e.index,e.groupIndex,e.data,u):c(e.index,e.data,u))}))})})),Mb={height:"100%",outline:"none",overflowY:"auto",position:"relative",WebkitOverflowScrolling:"touch"},_b={outline:"none",overflowX:"auto",position:"relative"},Rb=e=>({height:"100%",position:"absolute",top:0,width:"100%",...e?{display:"flex",flexDirection:"column"}:{}}),Hb={position:Sb(),top:0,width:"100%",zIndex:1};function jb(e,t){if("string"!=typeof e)return{context:t}}function Lb(e,t){return{item:"string"==typeof e?void 0:t}}const Pb=o.memo((function(){const e=Xb("HeaderComponent"),r=Kb("headerHeight"),n=Xb("HeaderFooterTag"),i=Mp(o.useMemo((()=>e=>{r(gf(e,"height"))}),[r]),!0,Xb("skipAnimationFrameInResizeObserver")),s=Xb("context");return e?t(n,{ref:i,children:t(e,{...jb(e,s)})}):null})),Wb=o.memo((function(){const e=Xb("FooterComponent"),r=Kb("footerHeight"),n=Xb("HeaderFooterTag"),i=Mp(o.useMemo((()=>e=>{r(gf(e,"height"))}),[r]),!0,Xb("skipAnimationFrameInResizeObserver")),s=Xb("context");return e?t(n,{ref:i,children:t(e,{...jb(e,s)})}):null}));function Nb({useEmitter:e,useEmitterValue:r,usePublisher:n}){return o.memo((function({children:o,style:i,...s}){const a=n("scrollContainerState"),l=r("ScrollerComponent"),d=n("smoothScrollTargetReached"),c=r("scrollerRef"),u=r("context"),h=r("horizontalDirection")||!1,{scrollByCallback:g,scrollerRef:m,scrollToCallback:p}=Fb(a,d,l,c,void 0,h);return e("scrollTo",p),e("scrollBy",g),t(l,{"data-testid":"virtuoso-scroller","data-virtuoso-scroller":!0,ref:m,style:{...h?_b:Mb,...i},tabIndex:0,...s,...jb(l,u),children:o})}))}function Vb({useEmitter:e,useEmitterValue:r,usePublisher:n}){return o.memo((function({children:o,style:i,...s}){const a=n("windowScrollContainerState"),l=r("ScrollerComponent"),d=n("smoothScrollTargetReached"),c=r("totalListHeight"),u=r("deviation"),h=r("customScrollParent"),g=r("context"),{scrollByCallback:m,scrollerRef:p,scrollToCallback:f}=Fb(a,d,l,rp,h);return $b((()=>(p.current=h||window,()=>{p.current=null})),[p,h]),e("windowScrollTo",f),e("scrollBy",m),t(l,{"data-virtuoso-scroller":!0,style:{position:"relative",...i,...0!==c?{height:c+u}:{}},...s,...jb(l,g),children:o})}))}const Yb=({children:e})=>{const r=o.useContext(xb),n=Kb("viewportHeight"),i=Kb("fixedItemHeight"),s=Xb("alignToBottom"),a=Xb("horizontalDirection"),l=Mp(o.useMemo((()=>Km(n,(e=>gf(e,a?"width":"height")))),[n,a]),!0,Xb("skipAnimationFrameInResizeObserver"));return o.useEffect((()=>{r&&(n(r.viewportHeight),i(r.itemHeight))}),[r,n,i]),t("div",{"data-viewport-type":"element",ref:l,style:Rb(s),children:e})},Ub=({children:e})=>{const r=o.useContext(xb),n=Kb("windowViewportRect"),i=Kb("fixedItemHeight"),s=Xb("customScrollParent"),a=jp(n,s,Xb("skipAnimationFrameInResizeObserver")),l=Xb("alignToBottom");return o.useEffect((()=>{r&&(i(r.itemHeight),n({offsetTop:0,visibleHeight:r.viewportHeight,visibleWidth:100}))}),[r,n,i]),t("div",{"data-viewport-type":"window",ref:a,style:Rb(l),children:e})},qb=({children:e})=>{const r=Xb("TopItemListComponent")||"div",n=Xb("headerHeight"),o={...Hb,marginTop:`${n}px`},i=Xb("context");return t(r,{style:o,...jb(r,i),children:e})},Gb=o.memo((function(r){const n=Xb("useWindowScroll"),o=Xb("topItemsIndexes").length>0,i=Xb("customScrollParent"),s=Xb("context"),a=i||n?ey:Jb,l=i||n?Ub:Yb;return e(a,{...r,...jb(a,s),children:[o&&t(qb,{children:t(Ob,{showTopList:!0})}),e(l,{children:[t(Pb,{}),t(Ob,{}),t(Wb,{})]})]})})),{Component:Zb,useEmitter:Qb,useEmitterValue:Xb,usePublisher:Kb}=vb(Ib,{events:{atBottomStateChange:"atBottomStateChange",atTopStateChange:"atTopStateChange",endReached:"endReached",groupIndices:"groupIndices",isScrolling:"isScrolling",itemsRendered:"itemsRendered",rangeChanged:"rangeChanged",startReached:"startReached",totalListHeightChanged:"totalListHeightChanged"},methods:{autoscrollToBottom:"autoscrollToBottom",getState:"getState",scrollBy:"scrollBy",scrollIntoView:"scrollIntoView",scrollTo:"scrollTo",scrollToIndex:"scrollToIndex"},optional:{alignToBottom:"alignToBottom",atBottomThreshold:"atBottomThreshold",atTopThreshold:"atTopThreshold",components:"components",computeItemKey:"computeItemKey",context:"context",customScrollParent:"customScrollParent",data:"data",defaultItemHeight:"defaultItemHeight",firstItemIndex:"firstItemIndex",fixedItemHeight:"fixedItemHeight",followOutput:"followOutput",groupContent:"groupContent",groupCounts:"groupCounts",headerFooterTag:"HeaderFooterTag",horizontalDirection:"horizontalDirection",increaseViewportBy:"increaseViewportBy",initialItemCount:"initialItemCount",initialScrollTop:"initialScrollTop",initialTopMostItemIndex:"initialTopMostItemIndex",itemContent:"itemContent",itemSize:"itemSize",logLevel:"logLevel",overscan:"overscan",restoreStateFrom:"restoreStateFrom",scrollerRef:"scrollerRef",scrollSeekConfiguration:"scrollSeekConfiguration",skipAnimationFrameInResizeObserver:"skipAnimationFrameInResizeObserver",topItemCount:"topItemCount",totalCount:"totalCount",useWindowScroll:"useWindowScroll"},required:{}},Gb),Jb=Nb({useEmitter:Qb,useEmitterValue:Xb,usePublisher:Kb}),ey=Vb({useEmitter:Qb,useEmitterValue:Xb,usePublisher:Kb}),ty=Zb,ry={bottom:0,itemHeight:0,items:[],itemWidth:0,offsetBottom:0,offsetTop:0,top:0},ny={bottom:0,itemHeight:0,items:[{index:0}],itemWidth:0,offsetBottom:0,offsetTop:0,top:0},{ceil:oy,floor:iy,max:sy,min:ay,round:ly}=Math;function dy(e,t,r){return Array.from({length:t-e+1}).map(((t,n)=>({data:null===r?null:r[n+e],index:n+e})))}function cy(e,t){return e&&e.width===t.width&&e.height===t.height}function uy(e,t){return e&&e.column===t.column&&e.row===t.row}const hy=kp((([{increaseViewportBy:e,listBoundary:t,overscan:r,visibleRange:n},{footerHeight:o,headerHeight:i,scrollBy:s,scrollContainerState:a,scrollTo:l,scrollTop:d,smoothScrollTargetReached:c,viewportHeight:u},h,g,{didMount:m,propsReady:p},{customScrollParent:f,useWindowScroll:b,windowScrollContainerState:y,windowScrollTo:v,windowViewportRect:x},w])=>{const $=Fp(0),F=Fp(0),C=Fp(ry),E=Fp({height:0,width:0}),S=Fp({height:0,width:0}),k=Ep(),D=Ep(),I=Fp(0),T=Fp(null),B=Fp({column:0,row:0}),A=Ep(),z=Ep(),O=Fp(!1),M=Fp(0),_=Fp(!0),R=Fp(!1),H=Fp(!1);sp(yp(m,$p(M),pp((([e,t])=>!!t))),(()=>{ap(_,!1)})),sp(yp(Ip(m,_,S,E,M,R),pp((([e,t,r,n,,o])=>e&&!t&&0!==r.height&&0!==n.height&&!o))),(([,,,,e])=>{ap(R,!0),Of(1,(()=>{ap(k,e)})),up(yp(d),(()=>{ap(t,[0,0]),ap(_,!0)}))})),cp(yp(z,pp((e=>null!=e&&e.scrollTop>0)),bp(0)),F),sp(yp(m,$p(z),pp((([,e])=>null!=e))),(([,e])=>{e&&(ap(E,e.viewport),ap(S,e.item),ap(B,e.gap),e.scrollTop>0&&(ap(O,!0),up(yp(d,xp(1)),(e=>{ap(O,!1)})),ap(l,{top:e.scrollTop})))})),cp(yp(E,fp((({height:e})=>e))),u),cp(yp(Ip(Tp(E,cy),Tp(S,cy),Tp(B,((e,t)=>e&&e.column===t.column&&e.row===t.row)),Tp(d)),fp((([e,t,r,n])=>({gap:r,item:t,scrollTop:n,viewport:e})))),A),cp(yp(Ip(Tp($),n,Tp(B,uy),Tp(S,cy),Tp(E,cy),Tp(T),Tp(F),Tp(O),Tp(_),Tp(M)),pp((([,,,,,,,e])=>!e)),fp((([e,[t,r],n,o,i,s,a,,l,d])=>{const{column:c,row:u}=n,{height:h,width:g}=o,{width:m}=i;if(0===a&&(0===e||0===m))return ry;if(0===g){const t=Mf(d,e);return function(e){return{...ny,items:e}}(dy(t,t+Math.max(a-1,0),s))}const p=gy(m,g,c);let f,b;l?0===t&&0===r&&a>0?(f=0,b=a-1):(f=p*iy((t+u)/(h+u)),b=p*oy((r+u)/(h+u))-1,b=ay(e-1,sy(b,p-1)),f=ay(b,sy(0,f))):(f=0,b=-1);const y=dy(f,b,s),{bottom:v,top:x}=my(i,n,o,y),w=oy(e/p);return{bottom:v,itemHeight:h,items:y,itemWidth:g,offsetBottom:w*h+(w-1)*u-v,offsetTop:x,top:x}}))),C),cp(yp(T,pp((e=>null!==e)),fp((e=>e.length))),$),cp(yp(Ip(E,S,C,B),pp((([e,t,{items:r}])=>r.length>0&&0!==t.height&&0!==e.height)),fp((([e,t,{items:r},n])=>{const{bottom:o,top:i}=my(e,n,t,r);return[i,o]})),mp(df)),t);const j=Fp(!1);cp(yp(d,$p(j),fp((([e,t])=>t||0!==e))),j);const L=Sp(yp(Ip(C,$),pp((([{items:e}])=>e.length>0)),$p(j),pp((([[e,t],r])=>{const n=e.items[e.items.length-1].index===t-1;return(r||e.bottom>0&&e.itemHeight>0&&0===e.offsetBottom&&e.items.length===t)&&n})),fp((([[,e]])=>e-1)),mp())),P=Sp(yp(Tp(C),pp((({items:e})=>e.length>0&&0===e[0].index)),bp(0),mp())),W=Sp(yp(Tp(C),$p(O),pp((([{items:e},t])=>e.length>0&&!t)),fp((([{items:e}])=>({endIndex:e[e.length-1].index,startIndex:e[0].index}))),mp(lf),wp(0)));cp(W,g.scrollSeekRangeChanged),cp(yp(k,$p(E,S,$,B),fp((([e,t,r,n,o])=>{const i=Af(e),{align:s,behavior:a,offset:l}=i;let d=i.index;"LAST"===d&&(d=n-1),d=sy(0,d,ay(n-1,d));let c=py(t,o,r,d);return"end"===s?c=ly(c-t.height+r.height):"center"===s&&(c=ly(c-t.height/2+r.height/2)),l&&(c+=l),{behavior:a,top:c}}))),l);const N=Cp(yp(C,fp((e=>e.offsetBottom+e.bottom))),0);return cp(yp(x,fp((e=>({height:e.visibleHeight,width:e.visibleWidth})))),E),{customScrollParent:f,data:T,deviation:I,footerHeight:o,gap:B,headerHeight:i,increaseViewportBy:e,initialItemCount:F,itemDimensions:S,overscan:r,restoreStateFrom:z,scrollBy:s,scrollContainerState:a,scrollHeight:D,scrollTo:l,scrollToIndex:k,scrollTop:d,smoothScrollTargetReached:c,totalCount:$,useWindowScroll:b,viewportDimensions:E,windowScrollContainerState:y,windowScrollTo:v,windowViewportRect:x,...g,gridState:C,horizontalDirection:H,initialTopMostItemIndex:M,totalListHeight:N,...h,endReached:L,propsReady:p,rangeChanged:W,startReached:P,stateChanged:A,stateRestoreInProgress:O,...w}}),ip(qf,Lp,Pf,ab,Tf,lb,Op));function gy(e,t,r){return sy(1,iy((e+r)/(iy(t)+r)))}function my(e,t,r,n){const{height:o}=r;if(void 0===o||0===n.length)return{bottom:0,top:0};const i=py(e,t,r,n[0].index);return{bottom:py(e,t,r,n[n.length-1].index)+o,top:i}}function py(e,t,r,n){const o=gy(e.width,r.width,t.column),i=iy(n/o),s=i*r.height+sy(0,i-1)*t.row;return s>0?s+t.row:s}const fy=kp((()=>{const e=Fp((e=>`Item ${e}`)),t=Fp({}),r=Fp(null),n=Fp("virtuoso-grid-item"),o=Fp("virtuoso-grid-list"),i=Fp(kb),s=Fp("div"),a=Fp(rp),l=(e,r=null)=>Cp(yp(t,fp((t=>t[e])),mp()),r),d=Fp(!1),c=Fp(!1);return cp(Tp(c),d),{components:t,computeItemKey:i,context:r,FooterComponent:l("Footer"),HeaderComponent:l("Header"),headerFooterTag:s,itemClassName:n,ItemComponent:l("Item","div"),itemContent:e,listClassName:o,ListComponent:l("List","div"),readyStateChanged:d,reportReadyState:c,ScrollerComponent:l("Scroller","div"),scrollerRef:a,ScrollSeekPlaceholder:l("ScrollSeekPlaceholder","div")}})),by=kp((([e,t])=>({...e,...t})),ip(hy,fy)),yy=o.memo((function(){const e=Sy("gridState"),r=Sy("listClassName"),n=Sy("itemClassName"),i=Sy("itemContent"),s=Sy("computeItemKey"),a=Sy("isSeeking"),l=ky("scrollHeight"),d=Sy("ItemComponent"),c=Sy("ListComponent"),u=Sy("ScrollSeekPlaceholder"),h=Sy("context"),g=ky("itemDimensions"),m=ky("gap"),p=Sy("log"),f=Sy("stateRestoreInProgress"),b=ky("reportReadyState"),v=Mp(o.useMemo((()=>e=>{const t=e.parentElement.parentElement.scrollHeight;l(t);const r=e.firstChild;if(r){const{height:e,width:t}=r.getBoundingClientRect();g({height:e,width:t})}m({column:Ty("column-gap",getComputedStyle(e).columnGap,p),row:Ty("row-gap",getComputedStyle(e).rowGap,p)})}),[l,g,m,p]),!0,!1);return $b((()=>{e.itemHeight>0&&e.itemWidth>0&&b(!0)}),[e]),f?null:t(c,{className:r,ref:v,...jb(c,h),"data-testid":"virtuoso-item-list",style:{paddingBottom:e.offsetBottom,paddingTop:e.offsetTop},children:e.items.map((r=>{const o=s(r.index,r.data,h);return a?t(u,{...jb(u,h),height:e.itemHeight,index:r.index,width:e.itemWidth},o):y(d,{...jb(d,h),className:n,"data-index":r.index,key:o},i(r.index,r.data,h))}))})})),vy=o.memo((function(){const e=Sy("HeaderComponent"),r=ky("headerHeight"),n=Sy("headerFooterTag"),i=Mp(o.useMemo((()=>e=>{r(gf(e,"height"))}),[r]),!0,!1),s=Sy("context");return e?t(n,{ref:i,children:t(e,{...jb(e,s)})}):null})),xy=o.memo((function(){const e=Sy("FooterComponent"),r=ky("footerHeight"),n=Sy("headerFooterTag"),i=Mp(o.useMemo((()=>e=>{r(gf(e,"height"))}),[r]),!0,!1),s=Sy("context");return e?t(n,{ref:i,children:t(e,{...jb(e,s)})}):null})),wy=({children:e})=>{const r=o.useContext(wb),n=ky("itemDimensions"),i=ky("viewportDimensions"),s=Mp(o.useMemo((()=>e=>{i(e.getBoundingClientRect())}),[i]),!0,!1);return o.useEffect((()=>{r&&(i({height:r.viewportHeight,width:r.viewportWidth}),n({height:r.itemHeight,width:r.itemWidth}))}),[r,i,n]),t("div",{ref:s,style:Rb(!1),children:e})},$y=({children:e})=>{const r=o.useContext(wb),n=ky("windowViewportRect"),i=ky("itemDimensions"),s=Sy("customScrollParent"),a=jp(n,s,!1);return o.useEffect((()=>{r&&(i({height:r.itemHeight,width:r.itemWidth}),n({offsetTop:0,visibleHeight:r.viewportHeight,visibleWidth:r.viewportWidth}))}),[r,n,i]),t("div",{ref:a,style:Rb(!1),children:e})},Fy=o.memo((function({...r}){const n=Sy("useWindowScroll"),o=Sy("customScrollParent"),i=o||n?Iy:Dy,s=o||n?$y:wy,a=Sy("context");return t(i,{...r,...jb(i,a),children:e(s,{children:[t(vy,{}),t(yy,{}),t(xy,{})]})})})),{Component:Cy,useEmitter:Ey,useEmitterValue:Sy,usePublisher:ky}=vb(by,{events:{atBottomStateChange:"atBottomStateChange",atTopStateChange:"atTopStateChange",endReached:"endReached",isScrolling:"isScrolling",rangeChanged:"rangeChanged",readyStateChanged:"readyStateChanged",startReached:"startReached",stateChanged:"stateChanged"},methods:{scrollBy:"scrollBy",scrollTo:"scrollTo",scrollToIndex:"scrollToIndex"},optional:{components:"components",computeItemKey:"computeItemKey",context:"context",customScrollParent:"customScrollParent",data:"data",headerFooterTag:"headerFooterTag",increaseViewportBy:"increaseViewportBy",initialItemCount:"initialItemCount",initialTopMostItemIndex:"initialTopMostItemIndex",itemClassName:"itemClassName",itemContent:"itemContent",listClassName:"listClassName",logLevel:"logLevel",overscan:"overscan",restoreStateFrom:"restoreStateFrom",scrollerRef:"scrollerRef",scrollSeekConfiguration:"scrollSeekConfiguration",totalCount:"totalCount",useWindowScroll:"useWindowScroll"}},Fy),Dy=Nb({useEmitter:Ey,useEmitterValue:Sy,usePublisher:ky}),Iy=Vb({useEmitter:Ey,useEmitterValue:Sy,usePublisher:ky});function Ty(e,t,r){return"normal"!==t&&!(null!=t&&t.endsWith("px"))&&r(`${e} was not resolved to pixel value correctly`,t,Ap.WARN),"normal"===t?0:parseInt(null!=t?t:"0",10)}const By=o.createContext({focusedIndex:-1,setFocusedIndex:()=>{}}),Ay=({children:e})=>{const[r,n]=a(-1);return t(By.Provider,{value:{focusedIndex:r,setFocusedIndex:n},children:e})},zy=w.div`
    overflow: hidden;
    border: ${Vn["width-010"]} ${Vn.solid} ${Pn.border};
    border-radius: ${Un.sm};
    background: ${Pn.bg};

    min-width: 23rem;
    ${e=>e.$width&&`width: ${e.$width}px;`}
    max-height: 27rem;
    overflow-y: auto;

    ${e=>"small"===e.$variant?Wn["body-md-regular"]:Wn["body-baseline-regular"]}

    ${Gn.MaxWidth.sm} {
        min-width: unset;
        width: calc(100vw - ${qn["sm-margin"]} * 2);
        max-height: 15rem;
    }

    ${Gn.MaxWidth.xs} {
        width: calc(100vw - ${qn["xs-margin"]} * 2);
    }

    ${Gn.MaxWidth.xxs} {
        width: calc(100vw - ${qn["xxs-margin"]} * 2);
    }

    ::-webkit-scrollbar {
        width: 14px;
    }

    ::-webkit-scrollbar-track {
        background: transparent;
    }

    ::-webkit-scrollbar-thumb {
        background: ${Pn["bg-inverse-subtlest"]};
        border: 5px solid transparent;
        border-radius: ${Un.full};
        background-clip: padding-box;
    }
`,Oy=w.div`
    background: transparent;
    padding: ${Yn["spacing-8"]};
`,My=w.ul`
    list-style-type: none;
`,_y=w.li`
    display: flex;
    align-items: flex-start;
    gap: ${Yn["spacing-8"]};
    padding: ${Yn["spacing-12"]} ${Yn["spacing-8"]};
    cursor: pointer;
    border: none;
    border-radius: ${Un.none};
    outline: none;

    ${e=>e.$disabled?$`
                cursor: not-allowed;
            `:e.$active&&e.$selected?$`
                background: ${Pn["bg-hover"]};
            `:e.$active?$`
                background: ${Pn["bg-hover-subtle"]};
            `:void 0}
`,Ry=w(P)`
    flex-shrink: 0;
    height: 1lh;
    width: 1rem;
    color: ${Pn["icon-selected"]};
`,Hy=w.div`
    flex-shrink: 0;
    height: 1lh;
    width: 1rem;
`,jy=w(L)`
    flex-shrink: 0;
    height: 1lh;
    width: 1lh;
    color: ${Pn["icon-selected"]};
`,Ly=w(j)`
    flex-shrink: 0;
    height: 1lh;
    width: 1lh;
    color: ${Pn["icon-primary-subtlest"]};
`,Py=w(W)`
    flex-shrink: 0;
    height: 1lh;
    width: 1lh;
    color: ${Pn["icon-disabled-subtle"]};
`,Wy=w.div`
    width: 100%;
    display: flex;
    justify-content: flex-end;
`,Ny=w(yo)`
    cursor: pointer;
    overflow: hidden;
    color: ${Pn["text-primary"]};
    font-size: inherit;
`,Vy=w(Ny)`
    ${Wn["body-baseline-semibold"]}
`,Yy=w(Ny)`
    ${Wn["body-md-semibold"]}
    padding: ${Yn["spacing-8"]} ${Yn["spacing-8"]};
`,Uy=w.div`
    width: 100%;
    display: flex;
    padding: ${Yn["spacing-12"]} ${Yn["spacing-16"]};
    align-items: center;
`,qy=w(B)`
    margin-right: ${Yn["spacing-4"]};
    color: ${Pn["icon-error"]};
    height: 1em;
    width: 1em;
`,Gy=w(cd)`
    margin-right: ${Yn["spacing-8"]};
    color: ${Pn.icon};
`,Zy=w.div`
    ${Xd()}
    color: ${Pn["text-subtle"]};
    padding: 0 ${Yn["spacing-16"]} ${Yn["spacing-12"]}
        ${Yn["spacing-16"]};
`,Qy=w.div`
    background: ${Pn["bg-strong"]};
    border-radius: ${Un.sm};
    display: flex;
    align-items: center;

    ${e=>"small"===e.$variant?Wn["body-md-regular"]:Wn["body-baseline-regular"]}
`,Xy=w.label`
    flex: 1;
    display: flex;
    align-items: center;
    gap: ${Yn["spacing-8"]};
    padding: ${e=>"small"===e.$variant?$`
                  ${Yn["spacing-8"]} ${Yn["spacing-16"]}
              `:$`10px ${Yn["spacing-16"]}`};
`,Ky=w(bo)`
    flex: 1;
`,Jy=w(N)`
    color: ${Pn.icon};
    flex-shrink: 0;
    height: 1em;
    width: 1em;
`,ev=w(Oc)`
    flex-shrink: 0;
    align-self: stretch;
    box-sizing: content-box;
    padding: ${Yn["spacing-8"]};
    margin-left: -${Yn["spacing-8"]};
    color: ${Pn.icon};
    cursor: pointer;
    font-size: inherit;

    svg {
        flex-shrink: 0;
        height: 1em;
        width: 1em;
    }
`,tv=g(((r,n)=>{var{value:o,variant:i,onClear:s}=r,a=ie(r,["value","variant","onClear"]);return e(Qy,{$variant:i,children:[e(Xy,{$variant:i,children:[t(Jy,{"aria-hidden":!0}),t(Ky,Object.assign({ref:n,value:o,$variant:i},a))]}),o&&t(ev,{"aria-label":"Clear search",focusOutline:"browser",onClick:s,children:t(H,{"aria-hidden":!0})})]})})),rv=({listItems:n,multiSelect:o,maxSelectable:l,selectedItems:d,disableItemFocus:c,itemsLoadState:u="success",itemTruncationType:h="end",itemMaxLines:g=2,labelDisplayType:f="inline",variant:b="default",listboxId:y,width:v,topScrollItem:x,onSelectItem:w,onSelectAll:$,onDismiss:F,onRetry:C,valueExtractor:E,listExtractor:S,renderListItem:k,renderCustomCallToAction:D,enableSearch:I,hideNoResultsDisplay:T,noResultsDescription:B,searchPlaceholder:A="Search",searchFunction:z,onSearch:O})=>{const{focusedIndex:M,setFocusedIndex:_}=p(By),[R,H]=a(""),[j,L]=a(null!=n?n:[]),P=Qd(u),W=(()=>{const[e,t]=a(!1);return s((()=>{t(!0)}),[]),e})(),N=i(null),V=i(null),Y=i([]),U=i(null),q=i(null),G=!!l&&!!d&&(null==d?void 0:d.length)===l,Z=e=>{const t=S?S(e):null==e?void 0:e.toString();return"object"==typeof t?{title:t.title,secondaryLabel:t.secondaryLabel}:{title:null!=t?t:""}},Q=m((e=>!!qm(d,(t=>Zm(t,e)))),[d]),X=Zd((()=>null==z?void 0:z(R))),K=Zd((()=>null==n?void 0:n.filter((e=>{const{title:t,secondaryLabel:r}=Z(e),n=R.trim().toLowerCase();return t.toLowerCase().includes(n)||r&&r.toLowerCase().includes(n)})))),J=(e,t)=>{G&&!Q(e)||(_(t),null==w||w(e,(e=>E?E(e):e)(e)))},ee=e=>{const t=e.target.value;H(t),null==O||O()},te=()=>{var e;H(""),null===(e=U.current)||void 0===e||e.focus(),null==O||O()},re=()=>{null==C||C()};se("keydown",(e=>{var t,r;switch(e.code){case"ArrowDown":if(e.preventDefault(),M<j.length-1){const e=M+1;null===(t=Y.current[e])||void 0===t||t.focus(),_(e)}break;case"ArrowUp":if(e.preventDefault(),M>0){const e=M-1;null===(r=Y.current[e])||void 0===r||r.focus(),_(e)}else 0===M&&U.current&&(U.current.focus(),_(-1));break;case"Space":case"Enter":document.activeElement===Y.current[M]&&(e.preventDefault(),j[M]&&J(j[M],M))}})),s((()=>{var e;if(!x)return void(null===(e=q.current)||void 0===e||e.scrollTo({top:0}));const t=setTimeout((()=>{if(!n)return;const e=n.indexOf(x);q.current&&-1!==e&&(q.current.scrollToIndex({index:e}),_(e))}),0);return()=>clearTimeout(t)}),[Y,n,_,x]),s((()=>{var e,t,r;if(W)return;if(c||!n)return;const o=n.findIndex((e=>Q(e)));U.current?(_(-1),setTimeout((()=>{var e;return null===(e=U.current)||void 0===e?void 0:e.focus()}),200)):M>0?(null===(e=q.current)||void 0===e||e.scrollToIndex({index:M,align:"center"}),setTimeout((()=>{var e;return null===(e=Y.current[M])||void 0===e?void 0:e.focus()}),200)):-1!==o?(null===(t=q.current)||void 0===t||t.scrollToIndex({index:o,align:"center"}),_(o),setTimeout((()=>{var e;return null===(e=Y.current[o])||void 0===e?void 0:e.focus()}),200)):(null===(r=q.current)||void 0===r||r.scrollToIndex({index:0}),_(0),setTimeout((()=>{var e;return null===(e=Y.current[0])||void 0===e?void 0:e.focus()}),200))}),[Q,c,M,n,W,_]),s((()=>{W&&P&&(c||"success"===u&&U.current&&(_(-1),U.current.focus()))}),[W,P,u,_,c]),s((()=>{var e;L(null!==(e=""===R?n:z?X():K())&&void 0!==e?e:[])}),[X,K,n,z,R]);const ne=e=>o?t(G&&!e?Py:e?jy:Ly,{"aria-hidden":!0}):e?t(Ry,{"aria-hidden":!0}):t(Hy,{}),oe=(e,r)=>{const{title:n,secondaryLabel:o}=Z(e);return t(pu,{displayType:f,label:n,maxLines:g,selected:r,disabled:!r&&G,sublabel:o,truncationType:h,variant:b})},ie=(n,i)=>{if(!C||"success"===u){const s=Q(n),a=i===M;return t(_y,{"aria-selected":s,"aria-multiselectable":o,"aria-disabled":!s&&G,"data-testid":"list-item",onClick:()=>J(n,i),onMouseEnter:()=>(e=>{_(e)})(i),ref:e=>{Y.current[i]=e},role:"option",tabIndex:a?0:-1,$active:a,$selected:s,$disabled:!s&&G,children:k?k(n,{selected:s}):e(r,{children:[ne(s),oe(n,s)]})},((e,t)=>`item_${t}__${E?E(e):e}`)(n,i))}},ae=()=>{if(d&&o&&j.length>0&&!R&&"success"===u)return t(Wy,{children:t(Yy,{onClick:$,type:"button",$variant:b,children:l||0!==d.length?"Clear all":"Select all"})})},le=()=>{if(!T&&(R||!I)&&0===j.length&&"success"===u)return e(r,{children:[e(Uy,{"data-testid":"list-no-results",children:[t(qy,{"data-testid":"no-result-icon"}),"No results found."]}),B&&t(Zy,{"data-testid":"no-result-desc",children:B})]})},de=()=>{if(C&&"loading"===u)return e(Uy,{"data-testid":"list-loading",children:[t(Gy,{}),"Loading..."]})},ce=()=>{if(C&&"fail"===u)return e(Uy,{"data-testid":"list-fail",children:[t(qy,{"data-testid":"load-error-icon"}),"Failed to load. ",t(Vy,{onClick:re,type:"button",$variant:b,children:"Try again."})]})},ue=()=>{var e;const r="test"===process.env.NODE_ENV;return t(My,{role:"listbox",id:y,children:t(ty,Object.assign({ref:q,style:{height:"100%"},data:j,customScrollParent:null!==(e=N.current)&&void 0!==e?e:void 0,itemContent:(e,t)=>ie(t,e)},r?{initialItemCount:j.length}:{}),r?j.length:void 0)})};return e(zy,{"data-testid":"dropdown-container",ref:N,$width:v,$variant:b,children:[e(Oy,{ref:V,"data-testid":"dropdown-list",children:[(()=>{if((I||z)&&"success"===u)return t(tv,{ref:U,onChange:ee,value:R,placeholder:A,"data-testid":"search-input","aria-label":"Enter text to search",onClear:te,variant:b})})(),ae(),le(),de(),ce(),ue()]}),(()=>{if(D)return t("div",{"data-testid":"custom-cta",children:D(F,j)})})()]})},nv=w(yo)`
    display: flex;
    align-items: center;
    gap: ${Yn["spacing-8"]};
    width: 100%;
    height: calc(3rem - 2px); // exclude top and bottom borders
    padding: ${Yn["spacing-16"]};

    ${e=>"small"===e.$variant?Wn["body-md-regular"]:Wn["body-baseline-regular"]}

    :disabled {
        cursor: not-allowed;
    }
`,ov=w.div`
    display: flex;
    align-items: center;
    transform: rotate(${e=>e.$expanded?180:0}deg);
    transition: transform ${Nn["duration-250"]} ${Nn["ease-default"]};

    svg {
        color: ${Pn.icon};
        height: 1em;
        width: 1em;
    }
`;var iv;g((({children:r,disabled:n,expanded:o,listboxId:i,popupRole:s,readOnly:a,variant:l},d)=>e(nv,{ref:d,type:"button","aria-expanded":o,"aria-haspopup":s,"data-testid":"selector",disabled:n,"aria-controls":i,$variant:l,children:[r,!a&&t(ov,{$expanded:o,$variant:l,children:t(E,{"aria-hidden":!0})})]}))),w.li`
    display: ${e=>e.$visible?"flex":"none"};
`,w.div`
    flex: 1;
    display: flex;
    align-items: flex-start;
    gap: ${Yn["spacing-8"]};
    padding: ${Yn["spacing-12"]} ${Yn["spacing-8"]};
    cursor: ${e=>e.$toggleable?"default":"pointer"};
    overflow: hidden; // required for label to truncate properly
    border-radius: ${Un.none};
    outline: none;

    ${e=>e.$active&&$`
            background: ${Pn["bg-hover"]};
        `}
`,w.div`
    height: 1px;
    width: calc((1lh + ${Yn["spacing-8"]}) * ${e=>e.$level});
`,w.div`
    width: 1lh;
    height: 1lh;
    color: ${Pn["icon-primary"]};
    cursor: pointer;

    svg {
        width: 1lh;
        height: 1lh;
        transition: transform ${Nn["duration-350"]}
            ${Nn["ease-standard"]};

        ${e=>{if(e.$expanded)return $`
                    transform: rotate(90deg);
                `}}
    }
`,w.div`
    width: 1lh;
    height: 1lh;
    margin-right: ${Yn["spacing-8"]};
`,w.div`
    flex-shrink: 0;
    height: 1lh;
    width: ${e=>e.$hasNestedSiblings?"1lh":Yn["spacing-16"]};

    display: flex;
    justify-content: center;
`,w(V)`
    flex-shrink: 0;
    height: 1lh;
    width: 1lh;
    color: ${Pn["icon-selected"]};
`,function(e){e.Ready="overlay-context-ready",e.Change="overlay-context-change"}(iv||(iv={}));const sv=w.div`
    display: flex;
    flex-direction: column;
`,av=e=>"right"===e?"bottom-end":"bottom-start",lv=({enabled:n,isOpen:o,onOpen:l,onClose:d,onDismiss:c,renderElement:u,renderDropdown:h,customZIndex:g,clickToToggle:m=!1,offset:p=0,alignment:f="left",fitAvailableHeight:b,rootNode:y})=>{var v;const x=C(),w=qn["sm-max"]({theme:x}),$=i(null),F=i(null),{width:E=0}=Ei({targetRef:$,handleHeight:!1}),S={name:"center",fn:({x:e,rects:t})=>{const r=0===e||e+t.floating.width===window.innerWidth,n=window.innerWidth<w;return{x:r&&n?(window.innerWidth-t.floating.width)/2:e}}},{refs:k,floatingStyles:D,context:I}=U({open:o,onOpenChange:(e,t,r)=>{"escape-key"===r?null==c||c():e&&!o?null==l||l():!e&&o&&(null==d||d(r))},whileElementsMounted:q,placement:av(f),middleware:[G(p),Z(),Q({limiter:X()}),K({apply({availableHeight:e}){F.current&&Object.assign(F.current.style,{maxHeight:b?`${e}px`:void 0,overflowY:b?"hidden":void 0})}}),S]}),T=(()=>{const[e,t]=a(void 0),r=Y();return s((()=>{if(!r)return void t(void 0);const e=e=>{t(e.zIndex)};return r.events.on(iv.Change,e),r.events.emit(iv.Ready),()=>r.events.off(iv.Change,e)}),[r]),e})(),{isMounted:B,styles:A}=J(I,{initial:{opacity:0},open:{opacity:1},duration:300}),z=ee(I,{enabled:n,toggle:m}),O=te(I,{enabled:n}),{getReferenceProps:M,getFloatingProps:_}=re([z,O]);return e(r,{children:[t("div",Object.assign({ref:e=>{$.current=e,k.setReference(e)}},M(),{children:u()})),B&&t(ne,{root:y,children:t(oe,{context:I,modal:!1,initialFocus:F,returnFocus:!1,children:t("div",Object.assign({ref:k.setFloating,style:Object.assign(Object.assign({},D),{zIndex:null!==(v=null!=g?g:T)&&void 0!==v?v:50})},_(),{children:t(sv,{ref:F,style:Object.assign({},A),inert:Gc(A.opacity<1),children:h({elementWidth:E})})}))})})]})},dv=w(fo)`
    height: 3rem;
    gap: ${Yn["spacing-8"]};
    // space for clear icon
    padding-right: calc(1.25rem + ${Yn["spacing-20"]});
`,cv=r=>{var{id:n,disabled:o=!1,error:l,value:d,format:c="12hr",readOnly:u,onChange:h,onFocus:g,onBlur:p,alignment:b="left",dropdownZIndex:y,startLimit:v,endLimit:x,interval:w=15}=r,$=ie(r,["id","disabled","error","value","format","readOnly","onChange","onFocus","onBlur","alignment","dropdownZIndex","startLimit","endLimit","interval"]);const[F]=a((()=>Gd.generate())),[C,E]=a(null),[S,k]=a(!1),[D,I]=a(""),[T,B]=a(""),[A,z]=a(""),[O,M]=a(""),[_,R]=a(""),H=i(null),j=i(null),L=i(null),P=f((()=>Eo.generateTimings(w,c,v,x)),[w,c,v,x]),W=f((()=>{if(""===O)return P;const e=Eo.findClosestFlooredTime(O,P);return e?P.slice(P.indexOf(e)):[]}),[P,O]),N=m((e=>Eo.parseInput(e,c)),[c]);s((()=>{var e,t;if(d){const r=null!==(e=N(d.start))&&void 0!==e?e:"",n=null!==(t=N(d.end))&&void 0!==t?t:"";B(r),z(n),M(r),R(n)}}),[d,N]),s((()=>{if(l)return void k(!1);const e=N(T),t=N(A);if(void 0===e)I("Invalid start time");else if(void 0===t)I("Invalid end time");else{if(!(""!==e&&""!==t&&Eo.to24Hour(t)<Eo.to24Hour(e)))return I(""),void(document.activeElement!==j.current&&document.activeElement!==L.current||k(!0));I("End time must be after start time")}k(!1)}),[T,A,N,l]);const V=e=>{o||u||(C||S||null==g||g(),E(e),k(!0))},Y=e=>{var t;o||u||(E(e),k(!0),null===(t=("start"===e?j:L).current)||void 0===t||t.select())};function U(e){var t;switch(e.code){case"Enter":"start"===C?q(T):"end"===C&&(S&&G(A),null===(t=L.current)||void 0===t||t.blur());break;case"Tab":Z(T,A,{})}}const q=e=>{Z(e,A,{goToNextInput:!0})},G=e=>{Z(T,e,{triggerOnBlur:!0})},Z=(e,t,{goToNextInput:r,triggerOnBlur:n})=>{var o,i,s;const a=null!==(o=N(e))&&void 0!==o?o:O,l=null!==(i=N(t))&&void 0!==i?i:_;B(a),z(l);a===O&&l===_||null==h||h({start:a,end:l}),r&&void 0!==N(e)&&(E("end"),null===(s=L.current)||void 0===s||s.select()),n&&(E(null),k(!1),null==p||p()),M(a),R(l)},Q=e=>{e.stopPropagation(),B(""),z(""),M(""),R("");null==h||h({start:"",end:""}),E(null),k(!1)},X=e=>{H.current&&!H.current.contains(e.relatedTarget)&&C&&!S&&Z(T,A,{triggerOnBlur:!0})},K=()=>{if(!u&&!o&&((null==T?void 0:T.length)>0||(null==A?void 0:A.length)>0))return t(lu,{onClick:Q,type:"button","aria-label":"Clear",children:t(ru,{"aria-hidden":!0})})};return e(vo,Object.assign({id:n},$,{children:[t(Ay,{children:t(lv,{enabled:!u&&!o,isOpen:S,renderElement:()=>e(dv,{ref:H,$disabled:o,$error:l||!!D,$readOnly:u,onBlur:X,children:[e(co,{error:l||!!D,currentActive:null===C?"none":C,children:[t(wo,{ref:j,onFocus:()=>V("start"),placeholder:"start"===C?"hh:mm":"From",onChange:e=>B(e.target.value),value:T,disabled:o,readOnly:u,"data-testid":$["data-testid"]?`${$["data-testid"]}-timepicker-selector`:"timepicker-selector",onClick:()=>Y("start"),onKeyDown:U,autoComplete:"off","aria-label":"Start time input",type:"text",role:"combobox","aria-expanded":S,"aria-controls":F,"aria-autocomplete":"list"}),t(wo,{ref:L,onFocus:()=>V("end"),placeholder:"end"===C?"hh:mm":"To",onChange:e=>z(e.target.value),value:A,disabled:o,readOnly:u,"data-testid":$["data-testid"]?`${$["data-testid"]}-timepicker-selector`:"timepicker-selector",onClick:()=>Y("end"),onKeyDown:U,autoComplete:"off","aria-label":"End time input",type:"text",role:"combobox","aria-expanded":S,"aria-controls":F,"aria-autocomplete":"list"})]}),K()]}),renderDropdown:()=>{if(S)return t(rv,"start"===C?{listItems:P,onSelectItem:q,selectedItems:[T],disableItemFocus:!0,topScrollItem:Eo.findClosestFlooredTime(N(T),P),listboxId:F}:{listItems:W,onSelectItem:G,selectedItems:[A],disableItemFocus:!0,topScrollItem:Eo.findClosestFlooredTime(N(A),W),listboxId:F})},onClose:e=>{"outside-press"===e?(E(null),k(!1),null==p||p()):Z(T,A,{triggerOnBlur:!0})},onDismiss:()=>{var e;null===(e=("start"===C?j:L).current)||void 0===e||e.focus(),k(!1)},offset:8,alignment:b,fitAvailableHeight:!0,customZIndex:y})}),!l&&D&&t(eu,{id:n?`${n}-error-message`:"error-message",tabIndex:0,"data-testid":n?`${n}-error-message`:"error-message",children:D})]}))},uv=e=>{var{variant:r="dial"}=e,n=ie(e,["variant"]);return t("combobox"===r?cv:Jc,Object.assign({},n))};export{uv as TimeRangePicker};
//# sourceMappingURL=index.js.map
