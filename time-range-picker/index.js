import{jsxs as e,jsx as t,Fragment as r}from"react/jsx-runtime";import*as n from"react";import o,{useRef as i,useEffect as s,useState as a,isValidElement as l,createRef as d,cloneElement as c,PureComponent as u,useLayoutEffect as h,forwardRef as g,useCallback as m,useMemo as p,useContext as f,version as b,createElement as y,createContext as v}from"react";import{ArrowRightIcon as x,ChevronDownIcon as w}from"@lifesg/react-icons";import $,{css as F,keyframes as C,ThemeContext as E}from"styled-components";import{ChevronDownIcon as S}from"@lifesg/react-icons/chevron-down";import{ChevronUpIcon as k}from"@lifesg/react-icons/chevron-up";import D,{findDOMNode as I,unstable_batchedUpdates as T}from"react-dom";import{ArrowRightIcon as B}from"@lifesg/react-icons/arrow-right";import{ExclamationCircleFillIcon as A}from"@lifesg/react-icons/exclamation-circle-fill";import{ExclamationTriangleFillIcon as z}from"@lifesg/react-icons/exclamation-triangle-fill";import{ICircleFillIcon as O}from"@lifesg/react-icons/i-circle-fill";import{TickCircleFillIcon as M}from"@lifesg/react-icons/tick-circle-fill";import{ExternalIcon as _}from"@lifesg/react-icons/external";import{CircleIcon as R}from"@lifesg/react-icons/circle";import{CircleDotIcon as H}from"@lifesg/react-icons/circle-dot";import{CrossIcon as j}from"@lifesg/react-icons/cross";import{SquareIcon as L}from"@lifesg/react-icons/square";import{SquareTickFillIcon as P}from"@lifesg/react-icons/square-tick-fill";import{TickIcon as W}from"@lifesg/react-icons/tick";import{useFloatingTree as N,useFloating as V,autoUpdate as Y,offset as U,flip as q,shift as G,limitShift as Z,size as Q,useTransitionStyles as X,useClick as K,useDismiss as J,useInteractions as ee,FloatingPortal as te,FloatingFocusManager as re}from"@floating-ui/react";import{SquareFillIcon as ne}from"@lifesg/react-icons/square-fill";import{MagnifierIcon as oe}from"@lifesg/react-icons/magnifier";import"@lifesg/react-icons/caret-right";import{MinusSquareFillIcon as ie}from"@lifesg/react-icons/minus-square-fill";function se(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(n=Object.getOwnPropertySymbols(e);o<n.length;o++)t.indexOf(n[o])<0&&Object.prototype.propertyIsEnumerable.call(e,n[o])&&(r[n[o]]=e[n[o]])}return r}"function"==typeof SuppressedError&&SuppressedError;const ae=(e,t,r="window",n)=>{const o=i();s((()=>{o.current=t}),[t]),s((()=>{let t;switch(r){case"window":t=window;break;case"document":t=document;break;default:t=r}if(!t||!t.addEventListener)return;const i=e=>{var t;return null===(t=o.current)||void 0===t?void 0:t.call(o,e)};return t.addEventListener(e,i,n),()=>{null==t||t.removeEventListener(e,i,n)}}),[e,r])};var le="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};function de(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var ce=Array.isArray,ue="object"==typeof le&&le&&le.Object===Object&&le,he=ue,ge="object"==typeof self&&self&&self.Object===Object&&self,me=he||ge||Function("return this")(),pe=me.Symbol,fe=pe,be=Object.prototype,ye=be.hasOwnProperty,ve=be.toString,xe=fe?fe.toStringTag:void 0;var we=function(e){var t=ye.call(e,xe),r=e[xe];try{e[xe]=void 0;var n=!0}catch(e){}var o=ve.call(e);return n&&(t?e[xe]=r:delete e[xe]),o},$e=Object.prototype.toString;var Fe=we,Ce=function(e){return $e.call(e)},Ee=pe?pe.toStringTag:void 0;var Se=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":Ee&&Ee in Object(e)?Fe(e):Ce(e)};var ke=function(e){return null!=e&&"object"==typeof e},De=Se,Ie=ke;var Te=function(e){return"symbol"==typeof e||Ie(e)&&"[object Symbol]"==De(e)},Be=ce,Ae=Te,ze=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,Oe=/^\w*$/;var Me=function(e,t){if(Be(e))return!1;var r=typeof e;return!("number"!=r&&"symbol"!=r&&"boolean"!=r&&null!=e&&!Ae(e))||(Oe.test(e)||!ze.test(e)||null!=t&&e in Object(t))};var _e=function(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)},Re=Se,He=_e;var je,Le=function(e){if(!He(e))return!1;var t=Re(e);return"[object Function]"==t||"[object GeneratorFunction]"==t||"[object AsyncFunction]"==t||"[object Proxy]"==t},Pe=me["__core-js_shared__"],We=(je=/[^.]+$/.exec(Pe&&Pe.keys&&Pe.keys.IE_PROTO||""))?"Symbol(src)_1."+je:"";var Ne=function(e){return!!We&&We in e},Ve=Function.prototype.toString;var Ye=function(e){if(null!=e){try{return Ve.call(e)}catch(e){}try{return e+""}catch(e){}}return""},Ue=Le,qe=Ne,Ge=_e,Ze=Ye,Qe=/^\[object .+?Constructor\]$/,Xe=Function.prototype,Ke=Object.prototype,Je=Xe.toString,et=Ke.hasOwnProperty,tt=RegExp("^"+Je.call(et).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");var rt=function(e,t){return null==e?void 0:e[t]},nt=function(e){return!(!Ge(e)||qe(e))&&(Ue(e)?tt:Qe).test(Ze(e))},ot=rt;var it=function(e,t){var r=ot(e,t);return nt(r)?r:void 0},st=it(Object,"create"),at=st;var lt=function(){this.__data__=at?at(null):{},this.size=0};var dt=function(e){var t=this.has(e)&&delete this.__data__[e];return this.size-=t?1:0,t},ct=st,ut=Object.prototype.hasOwnProperty;var ht=function(e){var t=this.__data__;if(ct){var r=t[e];return"__lodash_hash_undefined__"===r?void 0:r}return ut.call(t,e)?t[e]:void 0},gt=st,mt=Object.prototype.hasOwnProperty;var pt=function(e){var t=this.__data__;return gt?void 0!==t[e]:mt.call(t,e)},ft=st;var bt=function(e,t){var r=this.__data__;return this.size+=this.has(e)?0:1,r[e]=ft&&void 0===t?"__lodash_hash_undefined__":t,this},yt=lt,vt=dt,xt=ht,wt=pt,$t=bt;function Ft(e){var t=-1,r=null==e?0:e.length;for(this.clear();++t<r;){var n=e[t];this.set(n[0],n[1])}}Ft.prototype.clear=yt,Ft.prototype.delete=vt,Ft.prototype.get=xt,Ft.prototype.has=wt,Ft.prototype.set=$t;var Ct=Ft;var Et=function(){this.__data__=[],this.size=0};var St=function(e,t){return e===t||e!=e&&t!=t},kt=St;var Dt=function(e,t){for(var r=e.length;r--;)if(kt(e[r][0],t))return r;return-1},It=Dt,Tt=Array.prototype.splice;var Bt=function(e){var t=this.__data__,r=It(t,e);return!(r<0)&&(r==t.length-1?t.pop():Tt.call(t,r,1),--this.size,!0)},At=Dt;var zt=function(e){var t=this.__data__,r=At(t,e);return r<0?void 0:t[r][1]},Ot=Dt;var Mt=function(e){return Ot(this.__data__,e)>-1},_t=Dt;var Rt=function(e,t){var r=this.__data__,n=_t(r,e);return n<0?(++this.size,r.push([e,t])):r[n][1]=t,this},Ht=Et,jt=Bt,Lt=zt,Pt=Mt,Wt=Rt;function Nt(e){var t=-1,r=null==e?0:e.length;for(this.clear();++t<r;){var n=e[t];this.set(n[0],n[1])}}Nt.prototype.clear=Ht,Nt.prototype.delete=jt,Nt.prototype.get=Lt,Nt.prototype.has=Pt,Nt.prototype.set=Wt;var Vt=Nt,Yt=it(me,"Map"),Ut=Ct,qt=Vt,Gt=Yt;var Zt=function(e){var t=typeof e;return"string"==t||"number"==t||"symbol"==t||"boolean"==t?"__proto__"!==e:null===e};var Qt=function(e,t){var r=e.__data__;return Zt(t)?r["string"==typeof t?"string":"hash"]:r.map},Xt=Qt;var Kt=function(e){var t=Xt(this,e).delete(e);return this.size-=t?1:0,t},Jt=Qt;var er=function(e){return Jt(this,e).get(e)},tr=Qt;var rr=function(e){return tr(this,e).has(e)},nr=Qt;var or=function(e,t){var r=nr(this,e),n=r.size;return r.set(e,t),this.size+=r.size==n?0:1,this},ir=function(){this.size=0,this.__data__={hash:new Ut,map:new(Gt||qt),string:new Ut}},sr=Kt,ar=er,lr=rr,dr=or;function cr(e){var t=-1,r=null==e?0:e.length;for(this.clear();++t<r;){var n=e[t];this.set(n[0],n[1])}}cr.prototype.clear=ir,cr.prototype.delete=sr,cr.prototype.get=ar,cr.prototype.has=lr,cr.prototype.set=dr;var ur=cr,hr=ur;function gr(e,t){if("function"!=typeof e||null!=t&&"function"!=typeof t)throw new TypeError("Expected a function");var r=function(){var n=arguments,o=t?t.apply(this,n):n[0],i=r.cache;if(i.has(o))return i.get(o);var s=e.apply(this,n);return r.cache=i.set(o,s)||i,s};return r.cache=new(gr.Cache||hr),r}gr.Cache=hr;var mr=gr;var pr=function(e){var t=mr(e,(function(e){return 500===r.size&&r.clear(),e})),r=t.cache;return t},fr=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,br=/\\(\\)?/g,yr=pr((function(e){var t=[];return 46===e.charCodeAt(0)&&t.push(""),e.replace(fr,(function(e,r,n,o){t.push(n?o.replace(br,"$1"):r||e)})),t}));var vr=function(e,t){for(var r=-1,n=null==e?0:e.length,o=Array(n);++r<n;)o[r]=t(e[r],r,e);return o},xr=ce,wr=Te,$r=pe?pe.prototype:void 0,Fr=$r?$r.toString:void 0;var Cr=function e(t){if("string"==typeof t)return t;if(xr(t))return vr(t,e)+"";if(wr(t))return Fr?Fr.call(t):"";var r=t+"";return"0"==r&&1/t==-1/0?"-0":r},Er=Cr;var Sr=ce,kr=Me,Dr=yr,Ir=function(e){return null==e?"":Er(e)};var Tr=function(e,t){return Sr(e)?e:kr(e,t)?[e]:Dr(Ir(e))},Br=Te;var Ar=function(e){if("string"==typeof e||Br(e))return e;var t=e+"";return"0"==t&&1/e==-1/0?"-0":t},zr=Tr,Or=Ar;var Mr=function(e,t){for(var r=0,n=(t=zr(t,e)).length;null!=e&&r<n;)e=e[Or(t[r++])];return r&&r==n?e:void 0},_r=Mr;var Rr=function(e,t,r){var n=null==e?void 0:_r(e,t);return void 0===n?r:n},Hr=de(Rr);const jr=(e,t,r)=>Hr(r,t)||Hr(e,t),Lr=(e,t)=>{const r=t||e.defaultValue;return Hr(e.collections,r)},Pr={collections:{default:{"width-005":.5,"width-010":1,"width-020":2,"width-040":4,solid:"solid"}},defaultValue:"default"},Wr=e=>t=>{var r;const n=t.theme,o=Lr(Pr,null==n?void 0:n.borderScheme);return(null===(r=null==n?void 0:n.overrides)||void 0===r?void 0:r.border)?`${jr(o,e,n.overrides.border)}px`:`${o[e]}px`},Nr={"width-005":Wr("width-005"),"width-010":Wr("width-010"),"width-020":Wr("width-020"),"width-040":Wr("width-040"),solid:(Vr="solid",e=>{var t;const r=e.theme,n=Lr(Pr,null==r?void 0:r.borderScheme),o=(null===(t=null==r?void 0:r.overrides)||void 0===t?void 0:t.border)?jr(n,Vr,r.overrides.border):n[Vr];return"function"==typeof o?o(e):o})};var Vr;const Yr={"brand-10":"#2C0C0B","brand-20":"#4C1513","brand-30":"#6C1D1B","brand-40":"#922825","brand-50":"#BF3431","brand-60":"#F15D5A","brand-70":"#F69491","brand-80":"#FABAB7","brand-90":"#FCD7D2","brand-95":"#FFEBE7","brand-100":"#FFF6F4","primary-10":"#1A122C","primary-20":"#2F1F4D","primary-30":"#422D6E","primary-40":"#5B3D97","primary-50":"#7654BC","primary-60":"#9A82CD","primary-70":"#B7A7D8","primary-80":"#CFC5E5","primary-90":"#E3DDF0","primary-95":"#F0EDF7","primary-100":"#F9F8FC","secondary-10":"#0E1723","secondary-20":"#18293D","secondary-30":"#233A57","secondary-40":"#305078","secondary-50":"#4B6A8F","secondary-60":"#7B91A9","secondary-70":"#A1B1C3","secondary-80":"#C1CBD7","secondary-90":"#DBE1E8","secondary-95":"#EBEFF2","secondary-100":"#F7F8FA","neutral-10":"#161616","neutral-20":"#282828","neutral-30":"#393939","neutral-40":"#4E4E4E","neutral-50":"#686868","neutral-60":"#8E8E8E","neutral-70":"#AFAFB0","neutral-80":"#C7CACA","neutral-90":"#DDE1E2","neutral-95":"#EDEFEF","neutral-100":"#F9F9F9","success-10":"#081A0F","success-20":"#0E2D1B","success-30":"#154126","success-40":"#1C5A34","success-50":"#257645","success-60":"#44A068","success-70":"#64C189","success-80":"#80DCA5","success-90":"#B4ECCB","success-95":"#D5F6E2","success-100":"#EFFCF4","warning-10":"#221302","warning-20":"#3B2204","warning-30":"#543106","warning-40":"#744408","warning-50":"#98590C","warning-60":"#D07A13","warning-70":"#E4A244","warning-80":"#F5C26C","warning-90":"#FADBA6","warning-95":"#FCECD4","warning-100":"#FDF7F0","error-10":"#330505","error-20":"#550808","error-30":"#750C0C","error-40":"#9E130F","error-50":"#CB2213","error-60":"#DE6C6C","error-70":"#E89B9B","error-80":"#EFBEBE","error-90":"#F5D9D9","error-95":"#F9ECEC","error-100":"#FCF7F7","info-10":"#021824","info-20":"#032B3F","info-30":"#053D59","info-40":"#06547B","info-50":"#176E9B","info-60":"#5296BE","info-70":"#82B5DA","info-80":"#ACCFE7","info-90":"#CCE3F1","info-95":"#E3F1F8","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000","primary-inverse":"#FEAB10"},Ur={"brand-10":"#1F1221","brand-20":"#371F3B","brand-30":"#4E2C53","brand-40":"#6B3E73","brand-50":"#8D5197","brand-60":"#FF3399","brand-70":"#FF88C4","brand-80":"#FFB3D9","brand-90":"#FFD4E9","brand-95":"#FFE8F3","brand-100":"#FFF8FC","primary-10":"#1F1221","primary-20":"#371F3B","primary-30":"#4E2C53","primary-40":"#6B3E73","primary-50":"#8D5197","primary-60":"#B07DB7","primary-70":"#C7A3CC","primary-80":"#D9C2DD","primary-90":"#E9DBEB","primary-95":"#F3ECF4","primary-100":"#FAF7FA","secondary-10":"#2D091B","secondary-20":"#4D0F2E","secondary-30":"#6B1540","secondary-40":"#931D58","secondary-50":"#C02673","secondary-60":"#FF409F","secondary-70":"#FF88C4","secondary-80":"#FFB3D9","secondary-90":"#FFD4E9","secondary-95":"#FFE8F3","secondary-100":"#FFF8FC","neutral-10":"#161616","neutral-20":"#282828","neutral-30":"#393939","neutral-40":"#4E4E4E","neutral-50":"#686868","neutral-60":"#8E8E8E","neutral-70":"#AFAFB0","neutral-80":"#C7CACA","neutral-90":"#DDE1E2","neutral-95":"#EDEFEF","neutral-100":"#F9F9F9","success-10":"#081A0F","success-20":"#0E2D1B","success-30":"#154126","success-40":"#1C5A34","success-50":"#257645","success-60":"#44A068","success-70":"#64C189","success-80":"#80DCA5","success-90":"#B4ECCB","success-95":"#D5F6E2","success-100":"#EFFCF4","warning-10":"#221302","warning-20":"#3B2204","warning-30":"#543106","warning-40":"#744408","warning-50":"#98590C","warning-60":"#D07A13","warning-70":"#E4A244","warning-80":"#F5C26C","warning-90":"#FADBA6","warning-95":"#FCECD4","warning-100":"#FDF7F0","error-10":"#330505","error-20":"#550808","error-30":"#750C0C","error-40":"#9E130F","error-50":"#CB2213","error-60":"#DE6C6C","error-70":"#E89B9B","error-80":"#EFBEBE","error-90":"#F5D9D9","error-95":"#F9ECEC","error-100":"#FCF7F7","info-10":"#021824","info-20":"#032B3F","info-30":"#053D59","info-40":"#06547B","info-50":"#176E9B","info-60":"#5296BE","info-70":"#82B5DA","info-80":"#ACCFE7","info-90":"#CCE3F1","info-95":"#E3F1F8","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000","primary-inverse":"#FEAB10"},qr={"brand-10":"#2C0C0B","brand-20":"#4C1513","brand-30":"#6C1D1B","brand-40":"#922825","brand-50":"#BF3431","brand-60":"#F15D5A","brand-70":"#F69491","brand-80":"#FABAB7","brand-90":"#FCD7D2","brand-95":"#FFEBE7","brand-100":"#FFF6F4","primary-10":"#001731","primary-20":"#002752","primary-30":"#003874","primary-40":"#004D9F","primary-50":"#1768BE","primary-60":"#3C91EC","primary-70":"#6CB4FF","primary-80":"#A5CDFF","primary-90":"#CFE1FE","primary-95":"#E8F0FE","primary-100":"#F7F9FF","secondary-10":"#131529","secondary-20":"#222547","secondary-30":"#2F3565","secondary-40":"#42498B","secondary-50":"#5B62A7","secondary-60":"#858CBD","secondary-70":"#A8ADCF","secondary-80":"#C6C9E0","secondary-90":"#DDDFEC","secondary-95":"#EDEEF5","secondary-100":"#F8F8FB","neutral-10":"#161616","neutral-20":"#282828","neutral-30":"#393939","neutral-40":"#4E4E4E","neutral-50":"#686868","neutral-60":"#8E8E8E","neutral-70":"#AFAFB0","neutral-80":"#C7CACA","neutral-90":"#DDE1E2","neutral-95":"#EDEFEF","neutral-100":"#F9F9F9","success-10":"#081A0F","success-20":"#0E2D1B","success-30":"#154126","success-40":"#1C5A34","success-50":"#257645","success-60":"#44A068","success-70":"#64C189","success-80":"#80DCA5","success-90":"#B4ECCB","success-95":"#D5F6E2","success-100":"#EFFCF4","warning-10":"#221302","warning-20":"#3B2204","warning-30":"#543106","warning-40":"#744408","warning-50":"#98590C","warning-60":"#D07A13","warning-70":"#E4A244","warning-80":"#F5C26C","warning-90":"#FADBA6","warning-95":"#FCECD4","warning-100":"#FDF7F0","error-10":"#330505","error-20":"#550808","error-30":"#750C0C","error-40":"#9E130F","error-50":"#CB2213","error-60":"#DE6C6C","error-70":"#E89B9B","error-80":"#EFBEBE","error-90":"#F5D9D9","error-95":"#F9ECEC","error-100":"#FCF7F7","info-10":"#021824","info-20":"#032B3F","info-30":"#053D59","info-40":"#06547B","info-50":"#176E9B","info-60":"#5296BE","info-70":"#82B5DA","info-80":"#ACCFE7","info-90":"#CCE3F1","info-95":"#E3F1F8","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000","primary-inverse":"#FEAB10"},Gr={"brand-10":"#2C0C0B","brand-20":"#4C1513","brand-30":"#6C1D1B","brand-40":"#922825","brand-50":"#BF3431","brand-60":"#F15D5A","brand-70":"#F69491","brand-80":"#FABAB7","brand-90":"#FCD7D2","brand-95":"#FFEBE7","brand-100":"#FFF6F4","primary-10":"#0011924","primary-20":"#032B40","primary-30":"#043D5A","primary-40":"#05547B","primary-50":"#096EA1","primary-60":"#2098D3","primary-70":"#5CB9E8","primary-80":"#8BD3F6","primary-90":"#BEE6FA","primary-95":"#E2F2FA","primary-100":"#F4FAFC","secondary-10":"#131529","secondary-20":"#222547","secondary-30":"#2F3565","secondary-40":"#42498B","secondary-50":"#5B62A7","secondary-60":"#858CBD","secondary-70":"#A8ADCF","secondary-80":"#C6C9E0","secondary-90":"#DDDFEC","secondary-95":"#EDEEF5","secondary-100":"#F8F8FB","neutral-10":"#161616","neutral-20":"#282828","neutral-30":"#393939","neutral-40":"#4E4E4E","neutral-50":"#686868","neutral-60":"#8E8E8E","neutral-70":"#AFAFB0","neutral-80":"#C7CACA","neutral-90":"#DDE1E2","neutral-95":"#EDEFEF","neutral-100":"#F9F9F9","success-10":"#081A0F","success-20":"#0E2D1B","success-30":"#154126","success-40":"#1C5A34","success-50":"#257645","success-60":"#44A068","success-70":"#64C189","success-80":"#80DCA5","success-90":"#B4ECCB","success-95":"#D5F6E2","success-100":"#EFFCF4","warning-10":"#221302","warning-20":"#3B2204","warning-30":"#543106","warning-40":"#744408","warning-50":"#98590C","warning-60":"#D07A13","warning-70":"#E4A244","warning-80":"#F5C26C","warning-90":"#FADBA6","warning-95":"#FCECD4","warning-100":"#FDF7F0","error-10":"#330505","error-20":"#550808","error-30":"#750C0C","error-40":"#9E130F","error-50":"#CB2213","error-60":"#DE6C6C","error-70":"#E89B9B","error-80":"#EFBEBE","error-90":"#F5D9D9","error-95":"#F9ECEC","error-100":"#FCF7F7","info-10":"#021824","info-20":"#032B3F","info-30":"#053D59","info-40":"#06547B","info-50":"#176E9B","info-60":"#5296BE","info-70":"#82B5DA","info-80":"#ACCFE7","info-90":"#CCE3F1","info-95":"#E3F1F8","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000","primary-inverse":"#FEAB10"},Zr={"brand-10":"#001A19","brand-20":"#002D2B","brand-30":"#00413D","brand-40":"#005954","brand-50":"#00756F","brand-60":"#03A098","brand-70":"#55BFBA","brand-80":"#92D6D2","brand-90":"#BFE7E5","brand-95":"#DDF2F1","brand-100":"#F4FBFA","primary-10":"#09191D","primary-20":"#102B34","primary-30":"#173D49","primary-40":"#205666","primary-50":"#2A7086","primary-60":"#5D97A9","primary-70":"#8CB6C2","primary-80":"#B2CED6","primary-90":"#D1E2E7","primary-95":"#E8F0F3","primary-100":"#F7FAFB","secondary-10":"#001731","secondary-20":"#002752","secondary-30":"#003874","secondary-40":"#004D9F","secondary-50":"#5B62A7","secondary-60":"#858CBD","secondary-70":"#A8ADCF","secondary-80":"#C6C9E0","secondary-90":"#DDDFEC","secondary-95":"#EDEEF5","secondary-100":"#F8F8FB","neutral-10":"#161616","neutral-20":"#282828","neutral-30":"#393939","neutral-40":"#4E4E4E","neutral-50":"#686868","neutral-60":"#8E8E8E","neutral-70":"#AFAFB0","neutral-80":"#C7CACA","neutral-90":"#DDE1E2","neutral-95":"#EDEFEF","neutral-100":"#F9F9F9","success-10":"#081A0F","success-20":"#0E2D1B","success-30":"#154126","success-40":"#1C5A34","success-50":"#257645","success-60":"#44A068","success-70":"#64C189","success-80":"#80DCA5","success-90":"#B4ECCB","success-95":"#D5F6E2","success-100":"#EFFCF4","warning-10":"#221302","warning-20":"#3B2204","warning-30":"#543106","warning-40":"#744408","warning-50":"#98590C","warning-60":"#D07A13","warning-70":"#E4A244","warning-80":"#F5C26C","warning-90":"#FADBA6","warning-95":"#FCECD4","warning-100":"#FDF7F0","error-10":"#330505","error-20":"#550808","error-30":"#750C0C","error-40":"#9E130F","error-50":"#CB2213","error-60":"#DE6C6C","error-70":"#E89B9B","error-80":"#EFBEBE","error-90":"#F5D9D9","error-95":"#F9ECEC","error-100":"#FCF7F7","info-10":"#021824","info-20":"#032B3F","info-30":"#053D59","info-40":"#06547B","info-50":"#176E9B","info-60":"#5296BE","info-70":"#82B5DA","info-80":"#ACCFE7","info-90":"#CCE3F1","info-95":"#E3F1F8","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000","primary-inverse":"#FEAB10"},Qr={"brand-10":"#881317","brand-20":"#B5191E","brand-30":"#B5040A","brand-40":"#D0333F","brand-50":"#DC666F","brand-60":"#E28087","brand-70":"#E7999F","brand-80":"#EDB3B7","brand-90":"#F3CCCF","brand-95":"#F9E6E7","brand-100":"#FCF2F3","primary-10":"#000000","primary-20":"#191919","primary-30":"#333333","primary-40":"#4D4D4D","primary-50":"#666666","primary-60":"#808080","primary-70":"#999999","primary-80":"#B3B3B3","primary-90":"#E6E6E6","primary-95":"#F7F7F7","primary-100":"#FFFFFF","secondary-10":"#19151D","secondary-20":"#2B2533","secondary-30":"#3E3649","secondary-40":"#564A64","secondary-50":"#6F637D","secondary-60":"#948B9F","secondary-70":"#B3ACBB","secondary-80":"#CCC8D2","secondary-90":"#E1DEE4","secondary-95":"#EFEEF1","secondary-100":"#F9F8F9","neutral-10":"#000000","neutral-20":"#191919","neutral-30":"#333333","neutral-40":"#4D4D4D","neutral-50":"#666666","neutral-60":"#808080","neutral-70":"#999999","neutral-80":"#B3B3B3","neutral-90":"#E6E6E6","neutral-95":"#F7F7F7","neutral-100":"#FFFFFF","success-10":"#081A0F","success-20":"#0E2D1B","success-30":"#154126","success-40":"#1C5A34","success-50":"#257645","success-60":"#44A068","success-70":"#64C189","success-80":"#80DCA5","success-90":"#B4ECCB","success-95":"#D5F6E2","success-100":"#EFFCF4","warning-10":"#221302","warning-20":"#3B2204","warning-30":"#543106","warning-40":"#744408","warning-50":"#98590C","warning-60":"#D07A13","warning-70":"#E4A244","warning-80":"#F5C26C","warning-90":"#FADBA6","warning-95":"#FCECD4","warning-100":"#FDF7F0","error-10":"#330505","error-20":"#550808","error-30":"#750C0C","error-40":"#9E130F","error-50":"#CB2213","error-60":"#DE6C6C","error-70":"#E89B9B","error-80":"#EFBEBE","error-90":"#F5D9D9","error-95":"#F9ECEC","error-100":"#FCF7F7","info-10":"#021824","info-20":"#032B3F","info-30":"#053D59","info-40":"#06547B","info-50":"#176E9B","info-60":"#5296BE","info-70":"#82B5DA","info-80":"#ACCFE7","info-90":"#CCE3F1","info-95":"#E3F1F8","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000","primary-inverse":"#FEAB10"},Xr={"brand-10":"#0E123A","brand-20":"#191E65","brand-30":"#232B90","brand-40":"#303BC5","brand-50":"#494CFF","brand-60":"#AD6EFF","brand-70":"#AEA4FF","brand-80":"#C5C4FF","brand-90":"#DDDCFF","brand-95":"#EDECFF","brand-100":"#F8F8FF","primary-10":"#10152B","primary-20":"#1C254B","primary-30":"#28356C","primary-40":"#38489A","primary-50":"#4D5AD7","primary-60":"#7487F2","primary-70":"#9AAAFC","primary-80":"#BDC7FD","primary-90":"#DADFFB","primary-95":"#ECEEFE","primary-100":"#F7F8FF","secondary-10":"#19151D","secondary-20":"#2B2533","secondary-30":"#3E3649","secondary-40":"#564A64","secondary-50":"#6F637D","secondary-60":"#948B9F","secondary-70":"#B3ACBB","secondary-80":"#CCC8D2","secondary-90":"#E1DEE4","secondary-95":"#EFEEF1","secondary-100":"#F9F8F9","neutral-10":"#161616","neutral-20":"#282828","neutral-30":"#393939","neutral-40":"#4E4E4E","neutral-50":"#686868","neutral-60":"#8E8E8E","neutral-70":"#AFAFB0","neutral-80":"#C7CACA","neutral-90":"#DDE1E2","neutral-95":"#EDEFEF","neutral-100":"#F9F9F9","success-10":"#081A0F","success-20":"#0E2D1B","success-30":"#154126","success-40":"#1C5A34","success-50":"#257645","success-60":"#44A068","success-70":"#64C189","success-80":"#80DCA5","success-90":"#B4ECCB","success-95":"#D5F6E2","success-100":"#EFFCF4","warning-10":"#221302","warning-20":"#3B2204","warning-30":"#543106","warning-40":"#744408","warning-50":"#98590C","warning-60":"#D07A13","warning-70":"#E4A244","warning-80":"#F5C26C","warning-90":"#FADBA6","warning-95":"#FCECD4","warning-100":"#FDF7F0","error-10":"#330505","error-20":"#550808","error-30":"#750C0C","error-40":"#9E130F","error-50":"#CB2213","error-60":"#DE6C6C","error-70":"#E89B9B","error-80":"#EFBEBE","error-90":"#F5D9D9","error-95":"#F9ECEC","error-100":"#FCF7F7","info-10":"#021824","info-20":"#032B3F","info-30":"#053D59","info-40":"#06547B","info-50":"#176E9B","info-60":"#5296BE","info-70":"#82B5DA","info-80":"#ACCFE7","info-90":"#CCE3F1","info-95":"#E3F1F8","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000","primary-inverse":"#FEAB10"},Kr={"brand-10":"#170F39","brand-20":"#281C62","brand-30":"#38268B","brand-40":"#4D34BF","brand-50":"#5735DF","brand-60":"#9986F9","brand-70":"#B2A5F8","brand-80":"#CDC2FA","brand-90":"#E2DCFC","brand-95":"#EFEDFE","brand-100":"#FAF8FD","primary-10":"#170F39","primary-20":"#281C62","primary-30":"#38268B","primary-40":"#4D34BF","primary-50":"#5735DF","primary-60":"#9986F9","primary-70":"#B2A5F8","primary-80":"#CDC2FA","primary-90":"#E2DCFC","primary-95":"#EFEDFE","primary-100":"#FAF8FD","secondary-10":"#251204","secondary-20":"#401F08","secondary-30":"#5B2C0B","secondary-40":"#7E3D0F","secondary-50":"#B04900","secondary-60":"#E26E1C","secondary-70":"#FF9445","secondary-80":"#FFBB8E","secondary-90":"#FFD9BF","secondary-95":"#FFECDF","secondary-100":"#FFF8F3","neutral-10":"#161616","neutral-20":"#282828","neutral-30":"#393939","neutral-40":"#4E4E4E","neutral-50":"#686868","neutral-60":"#8E8E8E","neutral-70":"#AFAFB0","neutral-80":"#C7CACA","neutral-90":"#DDE1E2","neutral-95":"#EDEFEF","neutral-100":"#F9F9F9","success-10":"#031B15","success-20":"#082D24","success-30":"#094134","success-40":"#0D5947","success-50":"#10755E","success-60":"#16A181","success-70":"#1EC59D","success-80":"#6FDDC2","success-90":"#AFECDE","success-95":"#D5F5ED","success-100":"#F1FCF9","warning-10":"#1F1500","warning-20":"#362500","warning-30":"#4D3501","warning-40":"#6A4801","warning-50":"#8B6001","warning-60":"#BF8301","warning-70":"#EAA102","warning-80":"#FFBF34","warning-90":"#FFDC8F","warning-95":"#FFEDC7","warning-100":"#FFF8EA","error-10":"#270F10","error-20":"#441B1B","error-30":"#612627","error-40":"#853535","error-50":"#AF4546","error-60":"#EC6162","error-70":"#F29696","error-80":"#F7BBBC","error-90":"#FAD8D8","error-95":"#FCEAEA","error-100":"#FEF7F7","info-10":"#0F1627","info-20":"#1B2745","info-30":"#273763","info-40":"#354D88","info-50":"#4665B3","info-60":"#618AF6","info-70":"#8DADFF","info-80":"#B4C9FF","info-90":"#D3DFFF","info-95":"#E9EFFF","info-100":"#F5F8FF",white:"#FFFFFF",black:"#000000","primary-inverse":"#FEAB10"},Jr={"brand-10":"#0E113C","brand-20":"#191E67","brand-30":"#232A92","brand-40":"#233FC2","brand-50":"#135CEA","brand-60":"#378FFB","brand-70":"#71B3FD","brand-80":"#9DCFFE","brand-90":"#C1E5FF","brand-95":"#DCF1FF","brand-100":"#F3FAFF","primary-10":"#0E113C","primary-20":"#191E67","primary-30":"#232A92","primary-40":"#233FC2","primary-50":"#135CEA","primary-60":"#378FFB","primary-70":"#71B3FD","primary-80":"#9DCFFE","primary-90":"#C1E5FF","primary-95":"#DCF1FF","primary-100":"#F3FAFF","secondary-10":"#34001F","secondary-20":"#540033","secondary-30":"#730045","secondary-40":"#9D0054","secondary-50":"#C61C64","secondary-60":"#DE6792","secondary-70":"#EB96B6","secondary-80":"#F5BAD2","secondary-90":"#FCD5E3","secondary-95":"#FDEBF1","secondary-100":"#FDF6F9","neutral-10":"#161616","neutral-20":"#282828","neutral-30":"#393939","neutral-40":"#4E4E4E","neutral-50":"#686868","neutral-60":"#8E8E8E","neutral-70":"#AFAFB0","neutral-80":"#C7CACA","neutral-90":"#DDE1E2","neutral-95":"#EDEFEF","neutral-100":"#F9F9F9","success-10":"#081A0F","success-20":"#0E2D1B","success-30":"#154126","success-40":"#1C5A34","success-50":"#257645","success-60":"#44A068","success-70":"#64C189","success-80":"#80DCA5","success-90":"#B4ECCB","success-95":"#D5F6E2","success-100":"#EFFCF4","warning-10":"#221302","warning-20":"#3B2204","warning-30":"#543106","warning-40":"#744408","warning-50":"#98590C","warning-60":"#D07A13","warning-70":"#E4A244","warning-80":"#F5C26C","warning-90":"#FADBA6","warning-95":"#FCECD4","warning-100":"#FDF7F0","error-10":"#330505","error-20":"#550808","error-30":"#750C0C","error-40":"#9E130F","error-50":"#CB2213","error-60":"#DE6C6C","error-70":"#E89B9B","error-80":"#EFBEBE","error-90":"#F5D9D9","error-95":"#F9ECEC","error-100":"#FCF7F7","info-10":"#021824","info-20":"#032B3F","info-30":"#053D59","info-40":"#06547B","info-50":"#176E9B","info-60":"#5296BE","info-70":"#82B5DA","info-80":"#ACCFE7","info-90":"#CCE3F1","info-95":"#E3F1F8","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000","primary-inverse":"#FEAB10"},en={collections:{lifesg:qr,bookingsg:Yr,rbs:Xr,mylegacy:Gr,ccube:Ur,oneservice:Zr,pa:Qr,a11yplayground:Kr,supportgowhere:Jr},defaultValue:"lifesg"},tn={collections:{lifesg:qr,bookingsg:Yr,rbs:Xr,mylegacy:Gr,ccube:Ur,oneservice:Zr,pa:Qr,a11yplayground:Kr,supportgowhere:Jr},defaultValue:"lifesg"},rn=e=>t=>{var r;const n=t.theme,o="dark"===(null==n?void 0:n.colourMode),i=Lr(o?tn:en,null==n?void 0:n.colourScheme),s=o?"primitiveColourDark":"primitiveColour",a=null===(r=null==n?void 0:n.overrides)||void 0===r?void 0:r[s];return a?jr(i,e,a):i[e]},nn={"brand-10":rn("brand-10"),"brand-20":rn("brand-20"),"brand-30":rn("brand-30"),"brand-40":rn("brand-40"),"brand-50":rn("brand-50"),"brand-60":rn("brand-60"),"brand-70":rn("brand-70"),"brand-80":rn("brand-80"),"brand-90":rn("brand-90"),"brand-95":rn("brand-95"),"brand-100":rn("brand-100"),"primary-10":rn("primary-10"),"primary-20":rn("primary-20"),"primary-30":rn("primary-30"),"primary-40":rn("primary-40"),"primary-50":rn("primary-50"),"primary-60":rn("primary-60"),"primary-70":rn("primary-70"),"primary-80":rn("primary-80"),"primary-90":rn("primary-90"),"primary-95":rn("primary-95"),"primary-100":rn("primary-100"),"secondary-10":rn("secondary-10"),"secondary-20":rn("secondary-20"),"secondary-30":rn("secondary-30"),"secondary-40":rn("secondary-40"),"secondary-50":rn("secondary-50"),"secondary-60":rn("secondary-60"),"secondary-70":rn("secondary-70"),"secondary-80":rn("secondary-80"),"secondary-90":rn("secondary-90"),"secondary-95":rn("secondary-95"),"secondary-100":rn("secondary-100"),"neutral-10":rn("neutral-10"),"neutral-20":rn("neutral-20"),"neutral-30":rn("neutral-30"),"neutral-40":rn("neutral-40"),"neutral-50":rn("neutral-50"),"neutral-60":rn("neutral-60"),"neutral-70":rn("neutral-70"),"neutral-80":rn("neutral-80"),"neutral-90":rn("neutral-90"),"neutral-95":rn("neutral-95"),"neutral-100":rn("neutral-100"),"success-10":rn("success-10"),"success-20":rn("success-20"),"success-30":rn("success-30"),"success-40":rn("success-40"),"success-50":rn("success-50"),"success-60":rn("success-60"),"success-70":rn("success-70"),"success-80":rn("success-80"),"success-90":rn("success-90"),"success-95":rn("success-95"),"success-100":rn("success-100"),"warning-10":rn("warning-10"),"warning-20":rn("warning-20"),"warning-30":rn("warning-30"),"warning-40":rn("warning-40"),"warning-50":rn("warning-50"),"warning-60":rn("warning-60"),"warning-70":rn("warning-70"),"warning-80":rn("warning-80"),"warning-90":rn("warning-90"),"warning-95":rn("warning-95"),"warning-100":rn("warning-100"),"error-10":rn("error-10"),"error-20":rn("error-20"),"error-30":rn("error-30"),"error-40":rn("error-40"),"error-50":rn("error-50"),"error-60":rn("error-60"),"error-70":rn("error-70"),"error-80":rn("error-80"),"error-90":rn("error-90"),"error-95":rn("error-95"),"error-100":rn("error-100"),"info-10":rn("info-10"),"info-20":rn("info-20"),"info-30":rn("info-30"),"info-40":rn("info-40"),"info-50":rn("info-50"),"info-60":rn("info-60"),"info-70":rn("info-70"),"info-80":rn("info-80"),"info-90":rn("info-90"),"info-95":rn("info-95"),"info-100":rn("info-100"),white:rn("white"),black:rn("black"),"primary-inverse":rn("primary-inverse")},on={text:rn("neutral-20"),"text-subtle":rn("neutral-30"),"text-subtler":rn("neutral-50"),"text-subtlest":rn("neutral-60"),"text-primary":rn("primary-50"),"text-hover":rn("primary-40"),"text-selected":rn("primary-50"),"text-selected-hover":rn("primary-40"),"text-disabled":rn("neutral-50"),"text-disabled-subtle":rn("neutral-60"),"text-disabled-subtlest":rn("neutral-80"),"text-selected-disabled":rn("neutral-20"),"text-success":rn("success-40"),"text-warning":rn("warning-40"),"text-error":rn("error-40"),"text-info":rn("info-40"),"text-inverse":rn("white"),icon:rn("neutral-50"),"icon-subtle":rn("neutral-60"),"icon-strongest":rn("neutral-20"),"icon-primary":rn("primary-50"),"icon-primary-subtle":rn("primary-60"),"icon-primary-subtlest":rn("primary-70"),"icon-hover":rn("primary-40"),"icon-selected":rn("primary-50"),"icon-selected-hover":rn("primary-40"),"icon-disabled":rn("neutral-50"),"icon-disabled-subtle":rn("neutral-60"),"icon-selected-disabled":rn("neutral-60"),"icon-success":rn("success-50"),"icon-warning":rn("warning-60"),"icon-error":rn("error-50"),"icon-error-strong":rn("error-40"),"icon-info":rn("info-50"),"icon-inverse":rn("white"),"icon-primary-inverse":rn("primary-inverse"),border:rn("neutral-90"),"border-strong":rn("neutral-70"),"border-stronger":rn("neutral-50"),"border-primary":rn("primary-50"),"border-primary-subtle":rn("primary-60"),"border-hover":rn("primary-90"),"border-hover-strong":rn("primary-60"),"border-selected":rn("primary-50"),"border-selected-subtle":rn("primary-70"),"border-selected-subtlest":rn("primary-90"),"border-selected-hover":rn("primary-40"),"border-focus":rn("primary-60"),"border-focus-strong":rn("primary-50"),"border-disabled":rn("neutral-90"),"border-selected-disabled":rn("neutral-70"),"border-success":rn("success-60"),"border-warning":rn("warning-60"),"border-error":rn("error-60"),"border-error-focus":rn("error-60"),"border-error-focus-strong":rn("error-40"),"border-error-strong":rn("error-40"),"border-info":rn("info-60"),bg:rn("white"),"bg-strong":rn("neutral-100"),"bg-stronger":rn("neutral-95"),"bg-strongest":rn("neutral-90"),"bg-hover":rn("primary-95"),"bg-hover-strong":rn("primary-90"),"bg-hover-subtle":rn("primary-100"),"bg-hover-neutral":rn("neutral-100"),"bg-hover-neutral-strong":rn("neutral-90"),"bg-selected":rn("primary-95"),"bg-selected-hover":rn("primary-90"),"bg-selected-strong":rn("primary-90"),"bg-selected-stronger":rn("primary-70"),"bg-selected-strongest":rn("primary-50"),"bg-selected-strongest-hover":rn("primary-40"),"bg-disabled":rn("neutral-95"),"bg-selected-disabled":rn("neutral-95"),"bg-selected-stronger-disabled":rn("neutral-70"),"bg-success":rn("success-100"),"bg-success-hover":rn("success-95"),"bg-success-strong":rn("success-50"),"bg-success-strong-hover":rn("success-40"),"bg-warning":rn("warning-100"),"bg-warning-hover":rn("warning-95"),"bg-warning-strong":rn("warning-50"),"bg-warning-strong-hover":rn("warning-40"),"bg-info":rn("info-100"),"bg-info-hover":rn("info-95"),"bg-info-strong":rn("info-50"),"bg-info-strong-hover":rn("info-40"),"bg-error":rn("error-100"),"bg-error-hover":rn("error-95"),"bg-error-strong":rn("error-50"),"bg-error-strong-hover":rn("error-40"),"bg-inverse":rn("neutral-20"),"bg-inverse-subtle":rn("neutral-30"),"bg-inverse-subtler":rn("neutral-50"),"bg-inverse-subtlest":rn("neutral-60"),"bg-inverse-hover":rn("neutral-40"),"bg-primary":rn("primary-50"),"bg-primary-subtle":rn("primary-60"),"bg-primary-subtler":rn("primary-95"),"bg-primary-subtlest":rn("primary-100"),"bg-available":"#6DD0A1","bg-primary-hover":rn("primary-40"),"bg-primary-subtlest-hover":rn("primary-90"),"bg-primary-subtlest-selected":rn("primary-90"),"overlay-strong":"rgba(40, 40, 40, 0.85)","overlay-subtle":"rgba(40, 40, 40, 0.20)",hyperlink:rn("primary-50"),"hyperlink-hover":rn("primary-40"),"hyperlink-visited":rn("primary-40"),"hyperlink-inverse":rn("primary-inverse"),"focus-ring":rn("primary-50"),"focus-ring-inverse":rn("white")},sn={text:rn("neutral-100"),"text-subtle":rn("neutral-80"),"text-subtler":rn("neutral-60"),"text-subtlest":rn("neutral-50"),"text-primary":rn("primary-60"),"text-hover":rn("primary-70"),"text-selected":rn("primary-60"),"text-selected-hover":rn("primary-70"),"text-disabled":rn("neutral-60"),"text-disabled-subtle":rn("neutral-50"),"text-disabled-subtlest":rn("neutral-30"),"text-selected-disabled":rn("neutral-90"),"text-success":rn("success-70"),"text-warning":rn("warning-70"),"text-error":rn("error-70"),"text-info":rn("info-70"),"text-inverse":rn("black"),icon:rn("neutral-60"),"icon-subtle":rn("neutral-50"),"icon-strongest":rn("neutral-90"),"icon-primary":rn("primary-60"),"icon-primary-subtle":rn("primary-50"),"icon-primary-subtlest":rn("primary-40"),"icon-hover":rn("primary-70"),"icon-selected":rn("primary-60"),"icon-selected-hover":rn("primary-70"),"icon-disabled":rn("neutral-60"),"icon-disabled-subtle":rn("neutral-50"),"icon-selected-disabled":rn("neutral-50"),"icon-success":rn("success-60"),"icon-warning":rn("warning-50"),"icon-error":rn("error-60"),"icon-error-strong":rn("error-70"),"icon-info":rn("info-60"),"icon-inverse":rn("black"),"icon-primary-inverse":rn("primary-inverse"),border:rn("neutral-20"),"border-strong":rn("neutral-40"),"border-stronger":rn("neutral-60"),"border-primary":rn("primary-60"),"border-primary-subtle":rn("primary-50"),"border-hover":rn("primary-20"),"border-hover-strong":rn("primary-50"),"border-selected":rn("primary-60"),"border-selected-subtle":rn("primary-40"),"border-selected-subtlest":rn("primary-20"),"border-selected-hover":rn("primary-70"),"border-focus":rn("primary-50"),"border-focus-strong":rn("primary-60"),"border-disabled":rn("neutral-20"),"border-selected-disabled":rn("neutral-40"),"border-success":rn("success-50"),"border-warning":rn("warning-50"),"border-error":rn("error-50"),"border-error-focus":rn("error-50"),"border-error-focus-strong":rn("error-70"),"border-error-strong":rn("error-70"),"border-info":rn("info-50"),bg:rn("black"),"bg-strong":rn("neutral-10"),"bg-stronger":rn("neutral-20"),"bg-strongest":rn("neutral-20"),"bg-hover":rn("primary-20"),"bg-hover-strong":rn("primary-20"),"bg-hover-subtle":rn("primary-10"),"bg-hover-neutral":rn("neutral-10"),"bg-hover-neutral-strong":rn("neutral-20"),"bg-selected":rn("primary-20"),"bg-selected-hover":rn("primary-20"),"bg-selected-strong":rn("primary-20"),"bg-selected-stronger":rn("primary-40"),"bg-selected-strongest":rn("primary-60"),"bg-selected-strongest-hover":rn("primary-70"),"bg-disabled":rn("neutral-20"),"bg-selected-disabled":rn("neutral-20"),"bg-selected-stronger-disabled":rn("neutral-40"),"bg-success":rn("success-10"),"bg-success-hover":rn("success-20"),"bg-success-strong":rn("success-60"),"bg-success-strong-hover":rn("success-70"),"bg-warning":rn("warning-10"),"bg-warning-hover":rn("warning-20"),"bg-warning-strong":rn("warning-60"),"bg-warning-strong-hover":rn("warning-70"),"bg-info":rn("info-10"),"bg-info-hover":rn("info-20"),"bg-info-strong":rn("info-60"),"bg-info-strong-hover":rn("info-70"),"bg-error":rn("error-10"),"bg-error-hover":rn("error-20"),"bg-error-strong":rn("error-60"),"bg-error-strong-hover":rn("error-70"),"bg-inverse":rn("neutral-90"),"bg-inverse-subtle":rn("neutral-80"),"bg-inverse-subtler":rn("neutral-60"),"bg-inverse-subtlest":rn("neutral-50"),"bg-inverse-hover":rn("neutral-70"),"bg-primary":rn("primary-60"),"bg-primary-subtle":rn("primary-50"),"bg-primary-subtler":rn("primary-20"),"bg-primary-subtlest":rn("primary-10"),"bg-available":"#185339","bg-primary-hover":rn("primary-70"),"bg-primary-subtlest-hover":rn("primary-20"),"bg-primary-subtlest-selected":rn("primary-20"),"overlay-strong":"rgba(78, 78, 78, 0.80)","overlay-subtle":"rgba(78, 78, 78, 0.50)",hyperlink:rn("primary-60"),"hyperlink-hover":rn("primary-70"),"hyperlink-visited":rn("primary-70"),"hyperlink-inverse":rn("primary-inverse"),"focus-ring":rn("primary-60"),"focus-ring-inverse":rn("black")},an={text:rn("neutral-30"),"text-subtle":rn("neutral-40"),"text-subtler":rn("neutral-50"),"text-subtlest":rn("neutral-70"),"text-primary":rn("neutral-10"),"text-hover":rn("neutral-70"),"text-selected":rn("neutral-20"),"text-selected-hover":rn("neutral-10"),"text-disabled":rn("neutral-50"),"text-disabled-subtle":rn("neutral-60"),"text-disabled-subtlest":rn("neutral-80"),"text-selected-disabled":rn("neutral-40"),"text-success":rn("success-40"),"text-warning":rn("warning-40"),"text-error":rn("brand-30"),"text-info":rn("neutral-40"),"text-inverse":rn("neutral-100"),icon:rn("neutral-40"),"icon-subtle":rn("neutral-50"),"icon-strongest":rn("neutral-10"),"icon-primary":rn("neutral-10"),"icon-primary-subtle":rn("neutral-30"),"icon-primary-subtlest":rn("neutral-60"),"icon-hover":rn("neutral-70"),"icon-selected":rn("brand-20"),"icon-selected-hover":rn("brand-10"),"icon-disabled":rn("neutral-50"),"icon-disabled-subtle":rn("neutral-60"),"icon-selected-disabled":rn("neutral-40"),"icon-success":rn("success-40"),"icon-warning":rn("warning-60"),"icon-error":rn("brand-30"),"icon-error-strong":rn("brand-10"),"icon-info":rn("neutral-40"),"icon-inverse":rn("neutral-100"),"icon-primary-inverse":"#F9B371",border:rn("neutral-90"),"border-strong":rn("neutral-30"),"border-stronger":rn("neutral-20"),"border-primary":rn("neutral-40"),"border-primary-subtle":rn("neutral-60"),"border-hover":rn("neutral-80"),"border-hover-strong":rn("neutral-10"),"border-selected":rn("brand-20"),"border-selected-subtle":rn("neutral-40"),"border-selected-subtlest":rn("neutral-70"),"border-selected-hover":rn("neutral-10"),"border-focus":rn("neutral-20"),"border-focus-strong":rn("neutral-10"),"border-disabled":rn("neutral-90"),"border-selected-disabled":rn("neutral-80"),"border-success":rn("success-40"),"border-warning":rn("warning-60"),"border-error":rn("brand-30"),"border-error-focus":rn("brand-20"),"border-error-focus-strong":rn("brand-10"),"border-error-strong":rn("brand-20"),"border-info":rn("neutral-40"),bg:rn("neutral-100"),"bg-strong":rn("neutral-95"),"bg-stronger":rn("neutral-90"),"bg-strongest":rn("neutral-80"),"bg-hover":rn("brand-90"),"bg-hover-strong":rn("brand-80"),"bg-hover-subtle":rn("neutral-90"),"bg-hover-neutral":rn("neutral-90"),"bg-hover-neutral-strong":rn("neutral-90"),"bg-selected":rn("brand-100"),"bg-selected-hover":rn("brand-30"),"bg-selected-strong":rn("brand-50"),"bg-selected-stronger":rn("brand-40"),"bg-selected-strongest":rn("brand-20"),"bg-selected-strongest-hover":rn("brand-10"),"bg-disabled":rn("neutral-90"),"bg-selected-disabled":rn("neutral-90"),"bg-selected-stronger-disabled":rn("neutral-80"),"bg-success":rn("success-100"),"bg-success-hover":rn("success-95"),"bg-success-strong":rn("success-50"),"bg-success-strong-hover":rn("success-40"),"bg-warning":rn("warning-100"),"bg-warning-hover":rn("warning-95"),"bg-warning-strong":rn("warning-50"),"bg-warning-strong-hover":rn("warning-40"),"bg-info":rn("neutral-95"),"bg-info-hover":rn("info-95"),"bg-info-strong":rn("info-50"),"bg-info-strong-hover":rn("info-40"),"bg-error":rn("brand-100"),"bg-error-hover":rn("error-95"),"bg-error-strong":rn("error-50"),"bg-error-strong-hover":rn("error-40"),"bg-inverse":rn("neutral-40"),"bg-inverse-subtle":rn("neutral-60"),"bg-inverse-subtler":rn("neutral-70"),"bg-inverse-subtlest":rn("neutral-80"),"bg-inverse-hover":rn("neutral-30"),"bg-primary":rn("brand-20"),"bg-primary-subtle":rn("brand-60"),"bg-primary-subtler":rn("brand-80"),"bg-primary-subtlest":rn("brand-100"),"bg-available":rn("success-60"),"bg-primary-hover":rn("brand-10"),"bg-primary-subtlest-hover":rn("brand-80"),"bg-primary-subtlest-selected":rn("brand-40"),"overlay-strong":"rgba(25, 25, 25, 0.95)","overlay-subtle":"rgba(25, 25, 25, 0.20)",hyperlink:rn("neutral-10"),"hyperlink-hover":rn("neutral-40"),"hyperlink-visited":rn("neutral-50"),"hyperlink-inverse":"#F8AE68","focus-ring":rn("primary-50"),"focus-ring-inverse":rn("white")},ln={text:rn("neutral-20"),"text-subtle":rn("neutral-30"),"text-subtler":rn("neutral-50"),"text-subtlest":rn("neutral-60"),"text-primary":rn("primary-50"),"text-hover":rn("primary-40"),"text-selected":rn("primary-50"),"text-selected-hover":rn("primary-40"),"text-disabled":rn("neutral-50"),"text-disabled-subtle":rn("neutral-60"),"text-disabled-subtlest":rn("neutral-80"),"text-selected-disabled":rn("neutral-20"),"text-success":rn("success-40"),"text-warning":rn("warning-40"),"text-error":rn("error-40"),"text-info":rn("info-40"),"text-inverse":rn("white"),icon:rn("neutral-50"),"icon-subtle":rn("neutral-60"),"icon-strongest":rn("neutral-20"),"icon-primary":rn("primary-50"),"icon-primary-subtle":rn("primary-60"),"icon-primary-subtlest":rn("primary-70"),"icon-hover":rn("primary-40"),"icon-selected":rn("primary-50"),"icon-selected-hover":rn("primary-40"),"icon-disabled":rn("neutral-50"),"icon-disabled-subtle":rn("neutral-60"),"icon-selected-disabled":rn("neutral-60"),"icon-success":rn("success-50"),"icon-warning":rn("warning-60"),"icon-error":rn("error-50"),"icon-error-strong":rn("error-40"),"icon-info":rn("info-50"),"icon-inverse":rn("white"),"icon-primary-inverse":rn("primary-inverse"),border:rn("neutral-90"),"border-strong":rn("neutral-70"),"border-stronger":rn("neutral-50"),"border-primary":rn("primary-50"),"border-primary-subtle":rn("primary-60"),"border-hover":rn("primary-90"),"border-hover-strong":rn("primary-60"),"border-selected":rn("primary-50"),"border-selected-subtle":rn("primary-70"),"border-selected-subtlest":rn("primary-90"),"border-selected-hover":rn("primary-40"),"border-focus":rn("primary-60"),"border-focus-strong":rn("primary-50"),"border-disabled":rn("neutral-90"),"border-selected-disabled":rn("neutral-70"),"border-success":rn("success-60"),"border-warning":rn("warning-60"),"border-error":rn("error-60"),"border-error-focus":rn("error-60"),"border-error-focus-strong":rn("error-40"),"border-error-strong":rn("error-40"),"border-info":rn("info-60"),bg:rn("white"),"bg-strong":rn("neutral-100"),"bg-stronger":rn("neutral-95"),"bg-strongest":rn("neutral-90"),"bg-hover":rn("primary-95"),"bg-hover-strong":rn("primary-90"),"bg-hover-subtle":rn("primary-100"),"bg-hover-neutral":rn("neutral-100"),"bg-hover-neutral-strong":rn("neutral-90"),"bg-selected":rn("primary-95"),"bg-selected-hover":rn("primary-90"),"bg-selected-strong":rn("primary-90"),"bg-selected-stronger":rn("primary-70"),"bg-selected-strongest":rn("primary-50"),"bg-selected-strongest-hover":rn("primary-40"),"bg-disabled":rn("neutral-95"),"bg-selected-disabled":rn("neutral-95"),"bg-selected-stronger-disabled":rn("neutral-70"),"bg-success":rn("success-100"),"bg-success-hover":rn("success-95"),"bg-success-strong":rn("success-50"),"bg-success-strong-hover":rn("success-40"),"bg-warning":rn("warning-100"),"bg-warning-hover":rn("warning-95"),"bg-warning-strong":rn("warning-50"),"bg-warning-strong-hover":rn("warning-40"),"bg-info":rn("info-100"),"bg-info-hover":rn("info-95"),"bg-info-strong":rn("info-50"),"bg-info-strong-hover":rn("info-40"),"bg-error":rn("error-100"),"bg-error-hover":rn("error-95"),"bg-error-strong":rn("error-50"),"bg-error-strong-hover":rn("error-40"),"bg-inverse":rn("neutral-20"),"bg-inverse-subtle":rn("neutral-30"),"bg-inverse-subtler":rn("neutral-50"),"bg-inverse-subtlest":rn("neutral-60"),"bg-inverse-hover":rn("neutral-40"),"bg-primary":rn("primary-50"),"bg-primary-subtle":rn("primary-60"),"bg-primary-subtler":rn("primary-95"),"bg-primary-subtlest":rn("primary-100"),"bg-available":"#6DD0A1","bg-primary-hover":rn("primary-40"),"bg-primary-subtlest-hover":rn("primary-90"),"bg-primary-subtlest-selected":rn("primary-90"),"overlay-strong":"rgba(40, 40, 40, 0.85)","overlay-subtle":"rgba(40, 40, 40, 0.20)",hyperlink:rn("primary-50"),"hyperlink-hover":rn("primary-40"),"hyperlink-visited":rn("primary-40"),"hyperlink-inverse":rn("primary-inverse"),"focus-ring":rn("primary-50"),"focus-ring-inverse":rn("white")},dn={text:rn("neutral-100"),"text-subtle":rn("neutral-80"),"text-subtler":rn("neutral-60"),"text-subtlest":rn("neutral-50"),"text-primary":rn("primary-60"),"text-hover":rn("primary-70"),"text-selected":rn("primary-60"),"text-selected-hover":rn("primary-70"),"text-disabled":rn("neutral-60"),"text-disabled-subtle":rn("neutral-50"),"text-disabled-subtlest":rn("neutral-30"),"text-selected-disabled":rn("neutral-90"),"text-success":rn("success-70"),"text-warning":rn("warning-70"),"text-error":rn("error-70"),"text-info":rn("info-70"),"text-inverse":rn("black"),icon:rn("neutral-60"),"icon-subtle":rn("neutral-50"),"icon-strongest":rn("neutral-90"),"icon-primary":rn("primary-60"),"icon-primary-subtle":rn("primary-50"),"icon-primary-subtlest":rn("primary-40"),"icon-hover":rn("primary-70"),"icon-selected":rn("primary-60"),"icon-selected-hover":rn("primary-70"),"icon-disabled":rn("neutral-60"),"icon-disabled-subtle":rn("neutral-50"),"icon-selected-disabled":rn("neutral-50"),"icon-success":rn("success-60"),"icon-warning":rn("warning-50"),"icon-error":rn("error-60"),"icon-error-strong":rn("error-70"),"icon-info":rn("info-60"),"icon-inverse":rn("black"),"icon-primary-inverse":rn("primary-inverse"),border:rn("neutral-20"),"border-strong":rn("neutral-40"),"border-stronger":rn("neutral-60"),"border-primary":rn("primary-60"),"border-primary-subtle":rn("primary-50"),"border-hover":rn("primary-20"),"border-hover-strong":rn("primary-50"),"border-selected":rn("primary-60"),"border-selected-subtle":rn("primary-40"),"border-selected-subtlest":rn("primary-20"),"border-selected-hover":rn("primary-70"),"border-focus":rn("primary-50"),"border-focus-strong":rn("primary-60"),"border-disabled":rn("neutral-20"),"border-selected-disabled":rn("neutral-40"),"border-success":rn("success-50"),"border-warning":rn("warning-50"),"border-error":rn("error-50"),"border-error-focus":rn("error-50"),"border-error-focus-strong":rn("error-70"),"border-error-strong":rn("error-70"),"border-info":rn("info-50"),bg:rn("black"),"bg-strong":rn("neutral-10"),"bg-stronger":rn("neutral-20"),"bg-strongest":rn("neutral-20"),"bg-hover":rn("primary-20"),"bg-hover-strong":rn("primary-20"),"bg-hover-subtle":rn("primary-10"),"bg-hover-neutral":rn("neutral-10"),"bg-hover-neutral-strong":rn("neutral-20"),"bg-selected":rn("primary-20"),"bg-selected-hover":rn("primary-20"),"bg-selected-strong":rn("primary-20"),"bg-selected-stronger":rn("primary-40"),"bg-selected-strongest":rn("primary-60"),"bg-selected-strongest-hover":rn("primary-70"),"bg-disabled":rn("neutral-20"),"bg-selected-disabled":rn("neutral-20"),"bg-selected-stronger-disabled":rn("neutral-40"),"bg-success":rn("success-10"),"bg-success-hover":rn("success-20"),"bg-success-strong":rn("success-60"),"bg-success-strong-hover":rn("success-70"),"bg-warning":rn("warning-10"),"bg-warning-hover":rn("warning-20"),"bg-warning-strong":rn("warning-60"),"bg-warning-strong-hover":rn("warning-70"),"bg-info":rn("info-10"),"bg-info-hover":rn("info-20"),"bg-info-strong":rn("info-60"),"bg-info-strong-hover":rn("info-70"),"bg-error":rn("error-10"),"bg-error-hover":rn("error-20"),"bg-error-strong":rn("error-60"),"bg-error-strong-hover":rn("error-70"),"bg-inverse":rn("neutral-90"),"bg-inverse-subtle":rn("neutral-80"),"bg-inverse-subtler":rn("neutral-60"),"bg-inverse-subtlest":rn("neutral-50"),"bg-inverse-hover":rn("neutral-70"),"bg-primary":rn("primary-60"),"bg-primary-subtle":rn("primary-50"),"bg-primary-subtler":rn("primary-20"),"bg-primary-subtlest":rn("primary-10"),"bg-available":"#185339","bg-primary-hover":rn("primary-70"),"bg-primary-subtlest-hover":rn("primary-20"),"bg-primary-subtlest-selected":rn("primary-20"),"overlay-strong":"rgba(78, 78, 78, 0.80)","overlay-subtle":"rgba(78, 78, 78, 0.50)",hyperlink:rn("primary-60"),"hyperlink-hover":rn("primary-70"),"hyperlink-visited":rn("primary-70"),"hyperlink-inverse":rn("primary-inverse"),"focus-ring":rn("primary-60"),"focus-ring-inverse":rn("black")},cn={collections:{lifesg:on,bookingsg:on,rbs:on,mylegacy:on,ccube:on,oneservice:on,pa:an,a11yplayground:ln,supportgowhere:on},defaultValue:"lifesg"},un={collections:{lifesg:sn,bookingsg:sn,rbs:sn,mylegacy:sn,ccube:sn,oneservice:sn,pa:sn,a11yplayground:dn,supportgowhere:sn},defaultValue:"lifesg"},hn=e=>t=>{var r;const n=t.theme,o="dark"===(null==n?void 0:n.colourMode),i=Lr(o?un:cn,null==n?void 0:n.colourScheme),s=o?"semanticColourDark":"semanticColour",a=null===(r=null==n?void 0:n.overrides)||void 0===r?void 0:r[s],l=a?jr(i,e,a):i[e];return"function"==typeof l?l(t):l},gn={text:hn("text"),"text-subtle":hn("text-subtle"),"text-subtler":hn("text-subtler"),"text-subtlest":hn("text-subtlest"),"text-primary":hn("text-primary"),"text-hover":hn("text-hover"),"text-selected":hn("text-selected"),"text-selected-hover":hn("text-selected-hover"),"text-disabled":hn("text-disabled"),"text-disabled-subtle":hn("text-disabled-subtle"),"text-disabled-subtlest":hn("text-disabled-subtlest"),"text-selected-disabled":hn("text-selected-disabled"),"text-success":hn("text-success"),"text-warning":hn("text-warning"),"text-error":hn("text-error"),"text-info":hn("text-info"),"text-inverse":hn("text-inverse"),icon:hn("icon"),"icon-subtle":hn("icon-subtle"),"icon-strongest":hn("icon-strongest"),"icon-primary":hn("icon-primary"),"icon-primary-subtle":hn("icon-primary-subtle"),"icon-primary-subtlest":hn("icon-primary-subtlest"),"icon-hover":hn("icon-hover"),"icon-selected":hn("icon-selected"),"icon-selected-hover":hn("icon-selected-hover"),"icon-disabled":hn("icon-disabled"),"icon-disabled-subtle":hn("icon-disabled-subtle"),"icon-selected-disabled":hn("icon-selected-disabled"),"icon-success":hn("icon-success"),"icon-warning":hn("icon-warning"),"icon-error":hn("icon-error"),"icon-error-strong":hn("icon-error-strong"),"icon-info":hn("icon-info"),"icon-inverse":hn("icon-inverse"),"icon-primary-inverse":hn("icon-primary-inverse"),border:hn("border"),"border-strong":hn("border-strong"),"border-stronger":hn("border-stronger"),"border-primary":hn("border-primary"),"border-primary-subtle":hn("border-primary-subtle"),"border-hover":hn("border-hover"),"border-hover-strong":hn("border-hover-strong"),"border-selected":hn("border-selected"),"border-selected-subtle":hn("border-selected-subtle"),"border-selected-subtlest":hn("border-selected-subtlest"),"border-selected-hover":hn("border-selected-hover"),"border-focus":hn("border-focus"),"border-focus-strong":hn("border-focus-strong"),"border-disabled":hn("border-disabled"),"border-selected-disabled":hn("border-selected-disabled"),"border-success":hn("border-success"),"border-warning":hn("border-warning"),"border-error":hn("border-error"),"border-error-focus":hn("border-error-focus"),"border-error-focus-strong":hn("border-error-focus-strong"),"border-error-strong":hn("border-error-strong"),"border-info":hn("border-info"),bg:hn("bg"),"bg-strong":hn("bg-strong"),"bg-stronger":hn("bg-stronger"),"bg-strongest":hn("bg-strongest"),"bg-hover":hn("bg-hover"),"bg-hover-strong":hn("bg-hover-strong"),"bg-hover-subtle":hn("bg-hover-subtle"),"bg-hover-neutral":hn("bg-hover-neutral"),"bg-hover-neutral-strong":hn("bg-hover-neutral-strong"),"bg-selected":hn("bg-selected"),"bg-selected-hover":hn("bg-selected-hover"),"bg-selected-strong":hn("bg-selected-strong"),"bg-selected-stronger":hn("bg-selected-stronger"),"bg-selected-strongest":hn("bg-selected-strongest"),"bg-selected-strongest-hover":hn("bg-selected-strongest-hover"),"bg-disabled":hn("bg-disabled"),"bg-selected-disabled":hn("bg-selected-disabled"),"bg-selected-stronger-disabled":hn("bg-selected-stronger-disabled"),"bg-success":hn("bg-success"),"bg-success-hover":hn("bg-success-hover"),"bg-success-strong":hn("bg-success-strong"),"bg-success-strong-hover":hn("bg-success-strong-hover"),"bg-warning":hn("bg-warning"),"bg-warning-hover":hn("bg-warning-hover"),"bg-warning-strong":hn("bg-warning-strong"),"bg-warning-strong-hover":hn("bg-warning-strong-hover"),"bg-info":hn("bg-info"),"bg-info-hover":hn("bg-info-hover"),"bg-info-strong":hn("bg-info-strong"),"bg-info-strong-hover":hn("bg-info-strong-hover"),"bg-error":hn("bg-error"),"bg-error-hover":hn("bg-error-hover"),"bg-error-strong":hn("bg-error-strong"),"bg-error-strong-hover":hn("bg-error-strong-hover"),"bg-inverse":hn("bg-inverse"),"bg-inverse-subtle":hn("bg-inverse-subtle"),"bg-inverse-subtler":hn("bg-inverse-subtler"),"bg-inverse-subtlest":hn("bg-inverse-subtlest"),"bg-inverse-hover":hn("bg-inverse-hover"),"bg-primary":hn("bg-primary"),"bg-primary-subtle":hn("bg-primary-subtle"),"bg-primary-subtler":hn("bg-primary-subtler"),"bg-primary-subtlest":hn("bg-primary-subtlest"),"bg-available":hn("bg-available"),"bg-primary-hover":hn("bg-primary-hover"),"bg-primary-subtlest-hover":hn("bg-primary-subtlest-hover"),"bg-primary-subtlest-selected":hn("bg-primary-subtlest-selected"),"overlay-strong":hn("overlay-strong"),"overlay-subtle":hn("overlay-subtle"),hyperlink:hn("hyperlink"),"hyperlink-hover":hn("hyperlink-hover"),"hyperlink-visited":hn("hyperlink-visited"),"hyperlink-inverse":hn("hyperlink-inverse"),"focus-ring":hn("focus-ring"),"focus-ring-inverse":hn("focus-ring-inverse")},mn={collections:{default:{solid:e=>t=>{var r,n,o;const{thickness:i,radius:s,colour:a}=e||{},l=null!==(r="function"==typeof i?i(t):i)&&void 0!==r?r:Nr["width-010"](t),d=null!==(n="function"==typeof s?s(t):s)&&void 0!==n?n:0,c=null!==(o="function"==typeof a?a(t):a)&&void 0!==o?o:gn.border(t),u=Nr.solid;return F`
            border: ${l} ${u} ${c};
            border-radius: ${d};
        `},"dashed-default":e=>t=>{var r,n,o;const{thickness:i,radius:s,colour:a}=e||{},l=null!==(r="function"==typeof i?i(t):i)&&void 0!==r?r:Nr["width-010"](t),d=null!==(n="function"==typeof s?s(t):s)&&void 0!==n?n:0,c=null!==(o="function"==typeof a?a(t):a)&&void 0!==o?o:gn.border(t),u=encodeURIComponent(`<svg width='100%' height='100%' xmlns='http://www.w3.org/2000/svg'><rect width='100%' height='100%' fill='none' rx='${d}' ry='${d}' stroke='${c}' stroke-width='${l}' stroke-dasharray='4, 8' stroke-dashoffset='0' stroke-linecap='square'/></svg>`);return F`
            background-image: url("data:image/svg+xml,${u}");
            border-radius: ${d};
        `}}},defaultValue:"default"},pn=e=>1===e.length&&"theme"in e[0],fn=e=>(...t)=>r=>{const n=pn(t)?[]:t,o=pn(t)?t[0]:r,i=o.theme;return(0,Lr(mn,null==i?void 0:i.borderScheme)[e])(...n)(o)},bn={solid:fn("solid"),"dashed-default":fn("dashed-default")},yn={collections:{default:{"xxs-min":0,"xxs-max":320,"xs-min":321,"xs-max":375,"sm-min":376,"sm-max":480,"md-min":481,"md-max":768,"lg-min":769,"lg-max":1024,"xl-min":1025,"xl-max":1440,"xxl-min":1441,"xxs-column":8,"xs-column":8,"sm-column":8,"md-column":8,"lg-column":12,"xl-column":12,"xxl-column":12,"xxs-gutter":16,"xs-gutter":16,"sm-gutter":16,"md-gutter":16,"lg-gutter":32,"xl-gutter":32,"xxl-gutter":32,"xxs-margin":24,"xs-margin":24,"sm-margin":24,"md-margin":24,"lg-margin":48,"xl-margin":48,"xxl-margin":48}},defaultValue:"default"},vn=e=>t=>{var r;const n=t.theme,o=Lr(yn,null==n?void 0:n.breakpointScheme);let i;return i=(null===(r=null==n?void 0:n.overrides)||void 0===r?void 0:r.breakpoint)?jr(o,e,n.overrides.breakpoint):o[e],i},xn={"xxs-min":vn("xxs-min"),"xxs-max":vn("xxs-max"),"xs-min":vn("xs-min"),"xs-max":vn("xs-max"),"sm-min":vn("sm-min"),"sm-max":vn("sm-max"),"md-min":vn("md-min"),"md-max":vn("md-max"),"lg-min":vn("lg-min"),"lg-max":vn("lg-max"),"xl-min":vn("xl-min"),"xl-max":vn("xl-max"),"xxl-min":vn("xxl-min"),"xxs-column":vn("xxs-column"),"xs-column":vn("xs-column"),"sm-column":vn("sm-column"),"md-column":vn("md-column"),"lg-column":vn("lg-column"),"xl-column":vn("xl-column"),"xxl-column":vn("xxl-column"),"xxs-gutter":vn("xxs-gutter"),"xs-gutter":vn("xs-gutter"),"sm-gutter":vn("sm-gutter"),"md-gutter":vn("md-gutter"),"lg-gutter":vn("lg-gutter"),"xl-gutter":vn("xl-gutter"),"xxl-gutter":vn("xxl-gutter"),"xxs-margin":vn("xxs-margin"),"xs-margin":vn("xs-margin"),"sm-margin":vn("sm-margin"),"md-margin":vn("md-margin"),"lg-margin":vn("lg-margin"),"xl-margin":vn("xl-margin"),"xxl-margin":vn("xxl-margin")},wn=e=>("max-width"===e?["xxs","xs","sm","md","lg","xl"]:["xxs","xs","sm","md","lg","xl","xxl"]).reduce(((t,r)=>(t[r]=((e,t)=>{const r=xn["max-width"===e?`${t}-max`:`${t}-min`];return t=>{const n=r(t);return`@media screen and (${e}: ${n}px)`}})(e,r),t)),{}),$n={MaxWidth:wn("max-width"),MinWidth:wn("min-width")},Fn={collections:{default:{"heading-size-xxl":"3rem","heading-size-xl":"2.5rem","heading-size-lg":"2rem","heading-size-md":"1.625rem","heading-size-sm":"1.375rem","heading-size-xs":"1.125rem","heading-lh-xxl":"3.5rem","heading-lh-xl":"3rem","heading-lh-lg":"2.5rem","heading-lh-md":"2.25rem","heading-lh-sm":"1.75rem","heading-lh-xs":"1.625rem","heading-ls-xxl":"-0.056rem","heading-ls-xl":"-0.032rem","heading-ls-lg":"-0.032rem","heading-ls-md":"0rem","heading-ls-sm":"0rem","heading-ls-xs":"0rem","weight-light":"300","weight-regular":"400","weight-semibold":"600","weight-bold":"700","font-family":"Open Sans","body-size-baseline":"1.125rem","body-size-md":"1rem","body-size-sm":"0.875rem","body-size-xs":"0.75rem","body-lh-baseline":"1.625rem","body-lh-md":"1.5rem","body-lh-sm":"1.625rem","body-lh-xs":"1.25rem","body-ls-baseline":"0rem","body-ls-md":"0.014rem","body-ls-sm":"0.012rem","body-ls-xs":"0.012rem","form-label-size":"1rem","form-description-size":"0.875rem","form-label-lh":"1.5rem","form-description-lh":"1.6rem","form-label-ls":"0.014rem","form-description-ls":"0.012rem"},bookingsg:{"heading-size-xxl":"3rem","heading-size-xl":"2.5rem","heading-size-lg":"2rem","heading-size-md":"1.625rem","heading-size-sm":"1.375rem","heading-size-xs":"1.125rem","heading-lh-xxl":"3.5rem","heading-lh-xl":"3rem","heading-lh-lg":"2.5rem","heading-lh-md":"2.25rem","heading-lh-sm":"1.75rem","heading-lh-xs":"1.75rem","heading-ls-xxl":"-0.056rem","heading-ls-xl":"-0.032rem","heading-ls-lg":"-0.032rem","heading-ls-md":"0rem","heading-ls-sm":"0rem","heading-ls-xs":"0rem","weight-light":"300","weight-regular":"400","weight-semibold":"600","weight-bold":"700","font-family":"Plus Jakarta Sans","body-size-baseline":"1.125rem","body-size-md":"1rem","body-size-sm":"0.875rem","body-size-xs":"0.75rem","body-lh-baseline":"1.75rem","body-lh-md":"1.5rem","body-lh-sm":"1.6rem","body-lh-xs":"1.2rem","body-ls-baseline":"0rem","body-ls-md":"0.014rem","body-ls-sm":"0.012rem","body-ls-xs":"0.012rem","form-label-size":"1rem","form-description-size":"0.875rem","form-label-lh":"1.5rem","form-description-lh":"1.6rem","form-label-ls":"0.014rem","form-description-ls":"0.012rem"},pa:{"heading-size-xxl":"2.5rem","heading-size-xl":"2rem","heading-size-lg":"1.75rem","heading-size-md":"1.5rem","heading-size-sm":"1.25rem","heading-size-xs":"1rem","heading-lh-xxl":"3rem","heading-lh-xl":"2.5rem","heading-lh-lg":"2.25rem","heading-lh-md":"2rem","heading-lh-sm":"2rem","heading-lh-xs":"1.75rem","heading-ls-xxl":"-0.032rem","heading-ls-xl":"-0.032rem","heading-ls-lg":"0rem","heading-ls-md":"0rem","heading-ls-sm":"0rem","heading-ls-xs":"0rem","weight-light":"300","weight-regular":"400","weight-semibold":"600","weight-bold":"700","font-family":"Lato","body-size-baseline":"1rem","body-size-md":"0.875rem","body-size-sm":"0.75rem","body-size-xs":"0.625rem","body-lh-baseline":"1.75rem","body-lh-md":"1.5rem","body-lh-sm":"1.25rem","body-lh-xs":"1.25rem","body-ls-baseline":"0rem","body-ls-md":"0.014rem","body-ls-sm":"0.012rem","body-ls-xs":"0.012rem","form-label-size":"1rem","form-description-size":"0.875rem","form-label-lh":"1.5rem","form-description-lh":"1.6rem","form-label-ls":"0.014rem","form-description-ls":"0.012rem"},a11yplayground:{"heading-size-xxl":"3rem","heading-size-xl":"2.5rem","heading-size-lg":"2rem","heading-size-md":"1.625rem","heading-size-sm":"1.375rem","heading-size-xs":"1.125rem","heading-lh-xxl":"3.5rem","heading-lh-xl":"3rem","heading-lh-lg":"2.5rem","heading-lh-md":"2.25rem","heading-lh-sm":"1.75rem","heading-lh-xs":"1.625rem","heading-ls-xxl":"-0.056rem","heading-ls-xl":"-0.032rem","heading-ls-lg":"-0.032rem","heading-ls-md":"0rem","heading-ls-sm":"0rem","heading-ls-xs":"0rem","weight-light":"300","weight-regular":"400","weight-semibold":"600","weight-bold":"700","font-family":"Atkinson Hyperlegible Next","body-size-baseline":"1.125rem","body-size-md":"1rem","body-size-sm":"0.875rem","body-size-xs":"0.75rem","body-lh-baseline":"1.625rem","body-lh-md":"1.5rem","body-lh-sm":"1.625rem","body-lh-xs":"1.25rem","body-ls-baseline":"0rem","body-ls-md":"0.014rem","body-ls-sm":"0.012rem","body-ls-xs":"0.012rem","form-label-size":"1.125rem","form-description-size":"1rem","form-label-lh":"1.5rem","form-description-lh":"1.625rem","form-label-ls":"0rem","form-description-ls":"0.00875rem"},supportgowhere:{"heading-size-xxl":"3rem","heading-size-xl":"2.5rem","heading-size-lg":"2rem","heading-size-md":"1.625rem","heading-size-sm":"1.375rem","heading-size-xs":"1.125rem","heading-lh-xxl":"3.5rem","heading-lh-xl":"3rem","heading-lh-lg":"2.5rem","heading-lh-md":"2.25rem","heading-lh-sm":"1.75rem","heading-lh-xs":"1.625rem","heading-ls-xxl":"-0.056rem","heading-ls-xl":"-0.032rem","heading-ls-lg":"-0.032rem","heading-ls-md":"0rem","heading-ls-sm":"0rem","heading-ls-xs":"0rem","weight-light":"300","weight-regular":"400","weight-semibold":"600","weight-bold":"700","font-family":"Libre Franklin","body-size-baseline":"1.125rem","body-size-md":"1rem","body-size-sm":"0.875rem","body-size-xs":"0.75rem","body-lh-baseline":"1.625rem","body-lh-md":"1.5rem","body-lh-sm":"1.625rem","body-lh-xs":"1.25rem","body-ls-baseline":"0rem","body-ls-md":"0.014rem","body-ls-sm":"0.012rem","body-ls-xs":"0.012rem","form-label-size":"1rem","form-description-size":"0.875rem","form-label-lh":"1.5rem","form-description-lh":"1.6rem","form-label-ls":"0.014rem","form-description-ls":"0.012rem"}},defaultValue:"default"},Cn=e=>t=>{var r;const n=t.theme,o=Lr(Fn,null==n?void 0:n.fontScheme);return(null===(r=null==n?void 0:n.overrides)||void 0===r?void 0:r.fontSpec)?jr(o,e,n.overrides.fontSpec):o[e]},En={"heading-size-xxl":Cn("heading-size-xxl"),"heading-size-xl":Cn("heading-size-xl"),"heading-size-lg":Cn("heading-size-lg"),"heading-size-md":Cn("heading-size-md"),"heading-size-sm":Cn("heading-size-sm"),"heading-size-xs":Cn("heading-size-xs"),"heading-lh-xxl":Cn("heading-lh-xxl"),"heading-lh-xl":Cn("heading-lh-xl"),"heading-lh-lg":Cn("heading-lh-lg"),"heading-lh-md":Cn("heading-lh-md"),"heading-lh-sm":Cn("heading-lh-sm"),"heading-lh-xs":Cn("heading-lh-xs"),"heading-ls-xxl":Cn("heading-ls-xxl"),"heading-ls-xl":Cn("heading-ls-xl"),"heading-ls-lg":Cn("heading-ls-lg"),"heading-ls-md":Cn("heading-ls-md"),"heading-ls-sm":Cn("heading-ls-sm"),"heading-ls-xs":Cn("heading-ls-xs"),"weight-light":Cn("weight-light"),"weight-regular":Cn("weight-regular"),"weight-semibold":Cn("weight-semibold"),"weight-bold":Cn("weight-bold"),"font-family":Cn("font-family"),"body-size-baseline":Cn("body-size-baseline"),"body-size-md":Cn("body-size-md"),"body-size-sm":Cn("body-size-sm"),"body-size-xs":Cn("body-size-xs"),"body-lh-baseline":Cn("body-lh-baseline"),"body-lh-md":Cn("body-lh-md"),"body-lh-sm":Cn("body-lh-sm"),"body-lh-xs":Cn("body-lh-xs"),"body-ls-baseline":Cn("body-ls-baseline"),"body-ls-md":Cn("body-ls-md"),"body-ls-sm":Cn("body-ls-sm"),"body-ls-xs":Cn("body-ls-xs"),"form-label-size":Cn("form-label-size"),"form-description-size":Cn("form-description-size"),"form-label-lh":Cn("form-label-lh"),"form-description-lh":Cn("form-description-lh"),"form-label-ls":Cn("form-label-ls"),"form-description-ls":Cn("form-description-ls")},Sn=(e,t,r,n,o)=>{const{disableLigatures:i}=o||{};return F`
        font-family: ${Cn("font-family")};
        font-size: ${Cn(e)};
        font-weight: ${Cn(t)};
        line-height: ${Cn(r)};
        letter-spacing: ${Cn(n)};

        font-variant: ${i?"no-common-ligatures":"normal"};
    `},kn=(e={})=>({"heading-xxl-light":Sn("heading-size-xxl","weight-light","heading-lh-xxl","heading-ls-xxl",e),"heading-xxl-regular":Sn("heading-size-xxl","weight-regular","heading-lh-xxl","heading-ls-xxl",e),"heading-xxl-semibold":Sn("heading-size-xxl","weight-semibold","heading-lh-xxl","heading-ls-xxl",e),"heading-xxl-bold":Sn("heading-size-xxl","weight-bold","heading-lh-xxl","heading-ls-xxl",e),"heading-xl-light":Sn("heading-size-xl","weight-light","heading-lh-xl","heading-ls-xl",e),"heading-xl-regular":Sn("heading-size-xl","weight-regular","heading-lh-xl","heading-ls-xl",e),"heading-xl-semibold":Sn("heading-size-xl","weight-semibold","heading-lh-xl","heading-ls-xl",e),"heading-xl-bold":Sn("heading-size-xl","weight-bold","heading-lh-xl","heading-ls-xl",e),"heading-lg-light":Sn("heading-size-lg","weight-light","heading-lh-lg","heading-ls-lg",e),"heading-lg-regular":Sn("heading-size-lg","weight-regular","heading-lh-lg","heading-ls-lg",e),"heading-lg-semibold":Sn("heading-size-lg","weight-semibold","heading-lh-lg","heading-ls-lg",e),"heading-lg-bold":Sn("heading-size-lg","weight-bold","heading-lh-lg","heading-ls-lg",e),"heading-md-light":Sn("heading-size-md","weight-light","heading-lh-md","heading-ls-md",e),"heading-md-regular":Sn("heading-size-md","weight-regular","heading-lh-md","heading-ls-md",e),"heading-md-semibold":Sn("heading-size-md","weight-semibold","heading-lh-md","heading-ls-md",e),"heading-md-bold":Sn("heading-size-md","weight-bold","heading-lh-md","heading-ls-md",e),"heading-sm-light":Sn("heading-size-sm","weight-light","heading-lh-sm","heading-ls-sm",e),"heading-sm-regular":Sn("heading-size-sm","weight-regular","heading-lh-sm","heading-ls-sm",e),"heading-sm-semibold":Sn("heading-size-sm","weight-semibold","heading-lh-sm","heading-ls-sm",e),"heading-sm-bold":Sn("heading-size-sm","weight-bold","heading-lh-sm","heading-ls-sm",e),"heading-xs-light":Sn("heading-size-xs","weight-light","heading-lh-xs","heading-ls-xs",e),"heading-xs-regular":Sn("heading-size-xs","weight-regular","heading-lh-xs","heading-ls-xs",e),"heading-xs-semibold":Sn("heading-size-xs","weight-semibold","heading-lh-xs","heading-ls-xs",e),"heading-xs-bold":Sn("heading-size-xs","weight-bold","heading-lh-xs","heading-ls-xs",e),"body-baseline-light":Sn("body-size-baseline","weight-light","body-lh-baseline","body-ls-baseline",e),"body-baseline-regular":Sn("body-size-baseline","weight-regular","body-lh-baseline","body-ls-baseline",e),"body-baseline-semibold":Sn("body-size-baseline","weight-semibold","body-lh-baseline","body-ls-baseline",e),"body-baseline-bold":Sn("body-size-baseline","weight-bold","body-lh-baseline","body-ls-baseline",e),"body-md-light":Sn("body-size-md","weight-light","body-lh-md","body-ls-md",e),"body-md-regular":Sn("body-size-md","weight-regular","body-lh-md","body-ls-md",e),"body-md-semibold":Sn("body-size-md","weight-semibold","body-lh-md","body-ls-md",e),"body-md-bold":Sn("body-size-md","weight-bold","body-lh-md","body-ls-md",e),"body-sm-light":Sn("body-size-sm","weight-light","body-lh-sm","body-ls-sm",e),"body-sm-regular":Sn("body-size-sm","weight-regular","body-lh-sm","body-ls-sm",e),"body-sm-semibold":Sn("body-size-sm","weight-semibold","body-lh-sm","body-ls-sm",e),"body-sm-bold":Sn("body-size-sm","weight-bold","body-lh-sm","body-ls-sm",e),"body-xs-light":Sn("body-size-xs","weight-light","body-lh-xs","body-ls-xs",e),"body-xs-regular":Sn("body-size-xs","weight-regular","body-lh-xs","body-ls-xs",e),"body-xs-semibold":Sn("body-size-xs","weight-semibold","body-lh-xs","body-ls-xs",e),"body-xs-bold":Sn("body-size-xs","weight-bold","body-lh-xs","body-ls-xs",e),"form-label":Sn("form-label-size","weight-semibold","form-label-lh","form-label-ls",e),"form-description":Sn("form-description-size","weight-regular","form-description-lh","form-description-ls",e)}),Dn=kn({disableLigatures:!0}),In={collections:{default:kn(),bookingsg:Dn,pa:kn({disableLigatures:!0}),a11yplayground:kn({disableLigatures:!0}),supportgowhere:kn({disableLigatures:!0})},defaultValue:"default"},Tn=e=>t=>{var r;const n=t.theme,o=Lr(In,null==n?void 0:n.fontScheme),i=(null===(r=null==n?void 0:n.overrides)||void 0===r?void 0:r.font)?jr(o,e,n.overrides.font):o[e];return"function"==typeof i?i(t):i},Bn={"heading-xxl-light":Tn("heading-xxl-light"),"heading-xxl-regular":Tn("heading-xxl-regular"),"heading-xxl-semibold":Tn("heading-xxl-semibold"),"heading-xxl-bold":Tn("heading-xxl-bold"),"heading-xl-light":Tn("heading-xl-light"),"heading-xl-regular":Tn("heading-xl-regular"),"heading-xl-semibold":Tn("heading-xl-semibold"),"heading-xl-bold":Tn("heading-xl-bold"),"heading-lg-light":Tn("heading-lg-light"),"heading-lg-regular":Tn("heading-lg-regular"),"heading-lg-semibold":Tn("heading-lg-semibold"),"heading-lg-bold":Tn("heading-lg-bold"),"heading-md-light":Tn("heading-md-light"),"heading-md-regular":Tn("heading-md-regular"),"heading-md-semibold":Tn("heading-md-semibold"),"heading-md-bold":Tn("heading-md-bold"),"heading-sm-light":Tn("heading-sm-light"),"heading-sm-regular":Tn("heading-sm-regular"),"heading-sm-semibold":Tn("heading-sm-semibold"),"heading-sm-bold":Tn("heading-sm-bold"),"heading-xs-light":Tn("heading-xs-light"),"heading-xs-regular":Tn("heading-xs-regular"),"heading-xs-semibold":Tn("heading-xs-semibold"),"heading-xs-bold":Tn("heading-xs-bold"),"body-baseline-light":Tn("body-baseline-light"),"body-baseline-regular":Tn("body-baseline-regular"),"body-baseline-semibold":Tn("body-baseline-semibold"),"body-baseline-bold":Tn("body-baseline-bold"),"body-md-light":Tn("body-md-light"),"body-md-regular":Tn("body-md-regular"),"body-md-semibold":Tn("body-md-semibold"),"body-md-bold":Tn("body-md-bold"),"body-sm-light":Tn("body-sm-light"),"body-sm-regular":Tn("body-sm-regular"),"body-sm-semibold":Tn("body-sm-semibold"),"body-sm-bold":Tn("body-sm-bold"),"body-xs-light":Tn("body-xs-light"),"body-xs-regular":Tn("body-xs-regular"),"body-xs-semibold":Tn("body-xs-semibold"),"body-xs-bold":Tn("body-xs-bold"),"form-label":Tn("form-label"),"form-description":Tn("form-description")},An={collections:{default:{"duration-150":"150ms","duration-250":"250ms","duration-350":"350ms","duration-500":"500ms","duration-800":"800ms","duration-1000":"1000ms","ease-default":"cubic-bezier(0.45, 0.05, 0.55, 0.95)","ease-standard":"cubic-bezier(0.86, 0, 0.07, 1)","ease-entrance":"cubic-bezier(0.18, 0.13, 0, 1)","ease-exit":"cubic-bezier(1, 0, 0.8, 0.85)"}},defaultValue:"default"},zn=e=>t=>{var r;const n=t.theme,o=Lr(An,null==n?void 0:n.motionScheme);return(null===(r=null==n?void 0:n.overrides)||void 0===r?void 0:r.motion)?jr(o,e,n.overrides.motion):o[e]},On={"duration-150":zn("duration-150"),"duration-250":zn("duration-250"),"duration-350":zn("duration-350"),"duration-500":zn("duration-500"),"duration-800":zn("duration-800"),"duration-1000":zn("duration-1000"),"ease-default":zn("ease-default"),"ease-standard":zn("ease-standard"),"ease-entrance":zn("ease-entrance"),"ease-exit":zn("ease-exit")},Mn={collections:{default:{none:0,xs:2,sm:4,md:8,lg:12,full:9999}},defaultValue:"default"},_n=e=>t=>{var r;const n=t.theme,o=Lr(Mn,null==n?void 0:n.radiusScheme);return(null===(r=null==n?void 0:n.overrides)||void 0===r?void 0:r.radius)?`${jr(o,e,n.overrides.radius)}px`:`${o[e]}px`},Rn={none:_n("none"),xs:_n("xs"),sm:_n("sm"),md:_n("md"),lg:_n("lg"),full:_n("full")},Hn={collections:{default:{"spacing-0":0,"spacing-4":4,"spacing-8":8,"spacing-12":12,"spacing-16":16,"spacing-20":20,"spacing-24":24,"spacing-32":32,"spacing-40":40,"spacing-48":48,"spacing-64":64,"spacing-72":72,"layout-xs":8,"layout-sm":16,"layout-md":24,"layout-lg":32,"layout-xl":48,"layout-xxl":64,"layout-xxxl":128}},defaultValue:"default"},jn=e=>t=>{var r;const n=t.theme,o=Lr(Hn,null==n?void 0:n.spacingScheme);return(null===(r=null==n?void 0:n.overrides)||void 0===r?void 0:r.spacing)?`${jr(o,e,n.overrides.spacing)}px`:`${o[e]}px`},Ln={"spacing-0":jn("spacing-0"),"spacing-4":jn("spacing-4"),"spacing-8":jn("spacing-8"),"spacing-12":jn("spacing-12"),"spacing-16":jn("spacing-16"),"spacing-20":jn("spacing-20"),"spacing-24":jn("spacing-24"),"spacing-32":jn("spacing-32"),"spacing-40":jn("spacing-40"),"spacing-48":jn("spacing-48"),"spacing-64":jn("spacing-64"),"spacing-72":jn("spacing-72"),"layout-xs":jn("layout-xs"),"layout-sm":jn("layout-sm"),"layout-md":jn("layout-md"),"layout-lg":jn("layout-lg"),"layout-xl":jn("layout-xl"),"layout-xxl":jn("layout-xxl"),"layout-xxxl":jn("layout-xxxl")},Pn=(e,t)=>Object.assign(Object.assign({},e),{colourMode:t}),Wn=Object.assign(Object.assign({},gn),{Primitive:nn}),Nn=Object.assign(Object.assign({},Bn),{Spec:En}),Vn=On,Yn=Object.assign(Object.assign({},Nr),{Util:bn}),Un=Ln,qn=Rn,Gn=xn,Zn=$n,Qn={colourScheme:"lifesg",fontScheme:"default",motionScheme:"default",borderScheme:"default",spacingScheme:"default",radiusScheme:"default",shadowScheme:"default",breakpointScheme:"default",resourceScheme:"lifesg",_v2:{colorScheme:"base",textStyleScheme:"base",designTokenScheme:"base",resourceScheme:"base"}},Xn={colourScheme:"bookingsg",fontScheme:"bookingsg",motionScheme:"default",borderScheme:"default",spacingScheme:"default",radiusScheme:"default",shadowScheme:"default",breakpointScheme:"default",resourceScheme:"bookingsg",_v2:{colorScheme:"bookingsg",textStyleScheme:"base",designTokenScheme:"base",resourceScheme:"bookingsg"}},Kn={colourScheme:"ccube",fontScheme:"default",motionScheme:"default",borderScheme:"default",spacingScheme:"default",radiusScheme:"default",shadowScheme:"default",breakpointScheme:"default",resourceScheme:"ccube",_v2:{colorScheme:"ccube",textStyleScheme:"base",designTokenScheme:"base",resourceScheme:"ccube"}},Jn={colourScheme:"mylegacy",fontScheme:"default",motionScheme:"default",borderScheme:"default",spacingScheme:"default",radiusScheme:"default",shadowScheme:"default",breakpointScheme:"default",resourceScheme:"mylegacy",_v2:{colorScheme:"mylegacy",textStyleScheme:"base",designTokenScheme:"base",resourceScheme:"mylegacy"}},eo={colourScheme:"rbs",fontScheme:"default",motionScheme:"default",borderScheme:"default",spacingScheme:"default",radiusScheme:"default",shadowScheme:"default",breakpointScheme:"default",resourceScheme:"rbs",_v2:{colorScheme:"rbs",textStyleScheme:"base",designTokenScheme:"rbs",resourceScheme:"rbs"}},to={colourScheme:"oneservice",fontScheme:"default",motionScheme:"default",borderScheme:"default",spacingScheme:"default",radiusScheme:"default",shadowScheme:"default",breakpointScheme:"default",resourceScheme:"oneservice"},ro={colourScheme:"pa",fontScheme:"pa",motionScheme:"default",borderScheme:"default",spacingScheme:"default",radiusScheme:"default",shadowScheme:"default",breakpointScheme:"default",resourceScheme:"pa",componentScheme:"pa"},no={colourScheme:"a11yplayground",fontScheme:"a11yplayground",motionScheme:"default",borderScheme:"default",spacingScheme:"default",radiusScheme:"default",shadowScheme:"default",breakpointScheme:"default",resourceScheme:"a11yplayground",componentScheme:"a11yplayground"},oo={colourScheme:"supportgowhere",fontScheme:"supportgowhere",motionScheme:"default",borderScheme:"default",spacingScheme:"default",radiusScheme:"default",shadowScheme:"default",breakpointScheme:"default",resourceScheme:"supportgowhere",componentScheme:"default"};Object.assign(Object.assign({},Qn),{light:Pn(Qn,"light"),dark:Pn(Qn,"dark")}),Object.assign(Object.assign({},Xn),{light:Pn(Xn,"light"),dark:Pn(Xn,"dark")}),Object.assign(Object.assign({},Kn),{light:Pn(Kn,"light"),dark:Pn(Kn,"dark")}),Object.assign(Object.assign({},Jn),{light:Pn(Jn,"light"),dark:Pn(Jn,"dark")}),Object.assign(Object.assign({},eo),{light:Pn(eo,"light"),dark:Pn(eo,"dark")}),Object.assign(Object.assign({},to),{light:Pn(to,"light"),dark:Pn(to,"dark")}),Object.assign(Object.assign({},ro),{light:Pn(ro,"light"),dark:Pn(ro,"dark")}),Object.assign(Object.assign({},no),{light:Pn(no,"light"),dark:Pn(no,"dark")}),Object.assign(Object.assign({},oo),{light:Pn(oo,"light"),dark:Pn(oo,"dark")});const io=$.div`
    position: relative;
    height: 100%;
    display: flex;
    flex: 1;

    ${e=>{if(e.$wrap)return F`
                /* Parent container need to provide space */
                flex-wrap: wrap;

                [data-id="range-container-elem1-container"],
                [data-id="range-container-elem2-container"] {
                    // 100% - Icon size - 2padding
                    max-width: calc(
                        100% - ${Nn.Spec["body-size-baseline"]} -
                            ${Un["spacing-16"]}
                    );
                    flex: unset;
                }

                [data-id="range-container-elem2-container"] {
                    margin-top: ${Un["spacing-8"]};
                }
            `}}
`,so=$.div`
    width: 100%; // Force next flex item to break to next line
`,ao=$.div`
    display: flex;
    flex: 1;
    align-items: center;
`,lo=$(x)`
    color: ${Wn.icon};
    width: ${Nn.Spec["body-size-baseline"]};
    height: ${Nn.Spec["body-size-baseline"]};
    flex-shrink: 0;
    margin: 0 ${Un["spacing-8"]};
    align-self: center;
`,co=$.div`
    position: absolute;
    background: ${e=>e.$error?Wn["border-error-focus-strong"]:Wn["border-focus-strong"]};
    height: 2px;
    // half - half padding - half icon width
    width: calc(
        50% - ${Un["spacing-8"]} - (${Nn.Spec["body-size-baseline"]} / 2)
    );
    transition: left ${Vn["duration-350"]} ${Vn["ease-standard"]},
        opacity ${Vn["duration-350"]} ${Vn["ease-standard"]};
    left: 0;
    bottom: 0;

    ${e=>{switch(e.$position){case"start":return F`
                    opacity: 1;
                `;case"end":return F`
                    left: calc(50% + ${Un["spacing-16"]});
                    opacity: 1;
                `;case"none":return F`
                    opacity: 0;
                `}}}

    ${e=>{if(e.$wrap)return F`
                display: none;
            `}}
`,uo=({children:r,currentActive:n,error:o,className:i,wrap:s})=>{const[a,l]=r;return e(io,{className:i,$wrap:s,children:[t(ao,{"data-id":"range-container-elem1-container",children:a}),t(lo,{}),s&&t(so,{}),t(ao,{"data-id":"range-container-elem2-container",children:l}),t(co,{"data-id":"range-container-indicator",$position:n,$error:o,$wrap:s})]})},ho=F`
    outline-offset: -1px;
    outline: ${Yn["width-020"]} ${Yn.solid} ${Wn["border-focus"]};
`,go=F`
    outline-color: ${Wn["border-focus"]};
`,mo=F`
    outline-color: ${Wn["border-disabled"]};
`,po=F`
    outline-color: ${Wn["border-error-focus"]};
`,fo=$.div`
    border: ${Yn["width-010"]} ${Yn.solid} ${Wn.border};
    border-radius: ${qn.sm};
    background: ${Wn.bg};

    &:focus-within {
        ${ho}
    }
    ${e=>e.$focused&&ho}

    ${e=>e.$readOnly?F`
                border-color: transparent;
                padding: 0;
                background: transparent !important;

                &:focus-within {
                    ${go}
                }
                ${e.$focused&&go}
            `:e.$disabled?F`
                background: ${Wn["bg-disabled"]};
                cursor: not-allowed;

                &:focus-within {
                    ${mo}
                }
                ${e.$focused&&mo}
            `:e.$error?F`
                border-color: ${Wn["border-error"]};

                &:focus-within {
                    ${po}
                }
                ${e.$focused&&po}
            `:void 0}
`,bo=$(fo)`
    display: flex;
    align-items: center;
    position: relative;
    height: max-content;
    width: 100%;
    padding: 0 ${Un["spacing-16"]};
    flex-direction: ${e=>"right"===e.$position?"row-reverse":"row"};
`,yo=$.input`
    ${e=>"small"===e.$variant?Nn["body-md-regular"]:Nn["body-baseline-regular"]}
    color: ${Wn.text};
    display: block;
    background: transparent;
    border: none;
    outline: none;
    box-shadow: none;
    padding: 0;
    margin: 0;

    &:disabled {
        color: ${Wn["text-subtler"]};

        &:hover {
            cursor: not-allowed;
        }
    }

    &::placeholder,
    &::-webkit-input-placeholder {
        color: ${Wn["text-subtler"]};
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
`,vo=$.button`
    background: transparent;
    border: none;
    outline: none;

    &:focus,
    &:active {
        outline: none;
    }

    &:focus-visible {
        outline: ${Yn["width-010"]} ${Yn.solid}
            ${Wn["border-focus"]};
        border-radius: ${qn.sm};
    }
`,xo=$.div`
    position: relative;
`,wo=$(bo)`
    height: 3rem;
    gap: ${Un["spacing-8"]};
`,$o=$(yo)`
    display: block;
    width: 100%;
    flex: 1;
`;var Fo={exports:{}};Fo.exports=function(){var e=1e3,t=6e4,r=36e5,n="millisecond",o="second",i="minute",s="hour",a="day",l="week",d="month",c="quarter",u="year",h="date",g="Invalid Date",m=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,p=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,f={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(e){var t=["th","st","nd","rd"],r=e%100;return"["+e+(t[(r-20)%10]||t[r]||t[0])+"]"}},b=function(e,t,r){var n=String(e);return!n||n.length>=t?e:""+Array(t+1-n.length).join(r)+e},y={s:b,z:function(e){var t=-e.utcOffset(),r=Math.abs(t),n=Math.floor(r/60),o=r%60;return(t<=0?"+":"-")+b(n,2,"0")+":"+b(o,2,"0")},m:function e(t,r){if(t.date()<r.date())return-e(r,t);var n=12*(r.year()-t.year())+(r.month()-t.month()),o=t.clone().add(n,d),i=r-o<0,s=t.clone().add(n+(i?-1:1),d);return+(-(n+(r-o)/(i?o-s:s-o))||0)},a:function(e){return e<0?Math.ceil(e)||0:Math.floor(e)},p:function(e){return{M:d,y:u,w:l,d:a,D:h,h:s,m:i,s:o,ms:n,Q:c}[e]||String(e||"").toLowerCase().replace(/s$/,"")},u:function(e){return void 0===e}},v="en",x={};x[v]=f;var w="$isDayjsObject",$=function(e){return e instanceof S||!(!e||!e[w])},F=function e(t,r,n){var o;if(!t)return v;if("string"==typeof t){var i=t.toLowerCase();x[i]&&(o=i),r&&(x[i]=r,o=i);var s=t.split("-");if(!o&&s.length>1)return e(s[0])}else{var a=t.name;x[a]=t,o=a}return!n&&o&&(v=o),o||!n&&v},C=function(e,t){if($(e))return e.clone();var r="object"==typeof t?t:{};return r.date=e,r.args=arguments,new S(r)},E=y;E.l=F,E.i=$,E.w=function(e,t){return C(e,{locale:t.$L,utc:t.$u,x:t.$x,$offset:t.$offset})};var S=function(){function f(e){this.$L=F(e.locale,null,!0),this.parse(e),this.$x=this.$x||e.x||{},this[w]=!0}var b=f.prototype;return b.parse=function(e){this.$d=function(e){var t=e.date,r=e.utc;if(null===t)return new Date(NaN);if(E.u(t))return new Date;if(t instanceof Date)return new Date(t);if("string"==typeof t&&!/Z$/i.test(t)){var n=t.match(m);if(n){var o=n[2]-1||0,i=(n[7]||"0").substring(0,3);return r?new Date(Date.UTC(n[1],o,n[3]||1,n[4]||0,n[5]||0,n[6]||0,i)):new Date(n[1],o,n[3]||1,n[4]||0,n[5]||0,n[6]||0,i)}}return new Date(t)}(e),this.init()},b.init=function(){var e=this.$d;this.$y=e.getFullYear(),this.$M=e.getMonth(),this.$D=e.getDate(),this.$W=e.getDay(),this.$H=e.getHours(),this.$m=e.getMinutes(),this.$s=e.getSeconds(),this.$ms=e.getMilliseconds()},b.$utils=function(){return E},b.isValid=function(){return!(this.$d.toString()===g)},b.isSame=function(e,t){var r=C(e);return this.startOf(t)<=r&&r<=this.endOf(t)},b.isAfter=function(e,t){return C(e)<this.startOf(t)},b.isBefore=function(e,t){return this.endOf(t)<C(e)},b.$g=function(e,t,r){return E.u(e)?this[t]:this.set(r,e)},b.unix=function(){return Math.floor(this.valueOf()/1e3)},b.valueOf=function(){return this.$d.getTime()},b.startOf=function(e,t){var r=this,n=!!E.u(t)||t,c=E.p(e),g=function(e,t){var o=E.w(r.$u?Date.UTC(r.$y,t,e):new Date(r.$y,t,e),r);return n?o:o.endOf(a)},m=function(e,t){return E.w(r.toDate()[e].apply(r.toDate("s"),(n?[0,0,0,0]:[23,59,59,999]).slice(t)),r)},p=this.$W,f=this.$M,b=this.$D,y="set"+(this.$u?"UTC":"");switch(c){case u:return n?g(1,0):g(31,11);case d:return n?g(1,f):g(0,f+1);case l:var v=this.$locale().weekStart||0,x=(p<v?p+7:p)-v;return g(n?b-x:b+(6-x),f);case a:case h:return m(y+"Hours",0);case s:return m(y+"Minutes",1);case i:return m(y+"Seconds",2);case o:return m(y+"Milliseconds",3);default:return this.clone()}},b.endOf=function(e){return this.startOf(e,!1)},b.$set=function(e,t){var r,l=E.p(e),c="set"+(this.$u?"UTC":""),g=(r={},r[a]=c+"Date",r[h]=c+"Date",r[d]=c+"Month",r[u]=c+"FullYear",r[s]=c+"Hours",r[i]=c+"Minutes",r[o]=c+"Seconds",r[n]=c+"Milliseconds",r)[l],m=l===a?this.$D+(t-this.$W):t;if(l===d||l===u){var p=this.clone().set(h,1);p.$d[g](m),p.init(),this.$d=p.set(h,Math.min(this.$D,p.daysInMonth())).$d}else g&&this.$d[g](m);return this.init(),this},b.set=function(e,t){return this.clone().$set(e,t)},b.get=function(e){return this[E.p(e)]()},b.add=function(n,c){var h,g=this;n=Number(n);var m=E.p(c),p=function(e){var t=C(g);return E.w(t.date(t.date()+Math.round(e*n)),g)};if(m===d)return this.set(d,this.$M+n);if(m===u)return this.set(u,this.$y+n);if(m===a)return p(1);if(m===l)return p(7);var f=(h={},h[i]=t,h[s]=r,h[o]=e,h)[m]||1,b=this.$d.getTime()+n*f;return E.w(b,this)},b.subtract=function(e,t){return this.add(-1*e,t)},b.format=function(e){var t=this,r=this.$locale();if(!this.isValid())return r.invalidDate||g;var n=e||"YYYY-MM-DDTHH:mm:ssZ",o=E.z(this),i=this.$H,s=this.$m,a=this.$M,l=r.weekdays,d=r.months,c=r.meridiem,u=function(e,r,o,i){return e&&(e[r]||e(t,n))||o[r].slice(0,i)},h=function(e){return E.s(i%12||12,e,"0")},m=c||function(e,t,r){var n=e<12?"AM":"PM";return r?n.toLowerCase():n};return n.replace(p,(function(e,n){return n||function(e){switch(e){case"YY":return String(t.$y).slice(-2);case"YYYY":return E.s(t.$y,4,"0");case"M":return a+1;case"MM":return E.s(a+1,2,"0");case"MMM":return u(r.monthsShort,a,d,3);case"MMMM":return u(d,a);case"D":return t.$D;case"DD":return E.s(t.$D,2,"0");case"d":return String(t.$W);case"dd":return u(r.weekdaysMin,t.$W,l,2);case"ddd":return u(r.weekdaysShort,t.$W,l,3);case"dddd":return l[t.$W];case"H":return String(i);case"HH":return E.s(i,2,"0");case"h":return h(1);case"hh":return h(2);case"a":return m(i,s,!0);case"A":return m(i,s,!1);case"m":return String(s);case"mm":return E.s(s,2,"0");case"s":return String(t.$s);case"ss":return E.s(t.$s,2,"0");case"SSS":return E.s(t.$ms,3,"0");case"Z":return o}return null}(e)||o.replace(":","")}))},b.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},b.diff=function(n,h,g){var m,p=this,f=E.p(h),b=C(n),y=(b.utcOffset()-this.utcOffset())*t,v=this-b,x=function(){return E.m(p,b)};switch(f){case u:m=x()/12;break;case d:m=x();break;case c:m=x()/3;break;case l:m=(v-y)/6048e5;break;case a:m=(v-y)/864e5;break;case s:m=v/r;break;case i:m=v/t;break;case o:m=v/e;break;default:m=v}return g?m:E.a(m)},b.daysInMonth=function(){return this.endOf(d).$D},b.$locale=function(){return x[this.$L]},b.locale=function(e,t){if(!e)return this.$L;var r=this.clone(),n=F(e,t,!0);return n&&(r.$L=n),r},b.clone=function(){return E.w(this.$d,this)},b.toDate=function(){return new Date(this.valueOf())},b.toJSON=function(){return this.isValid()?this.toISOString():null},b.toISOString=function(){return this.$d.toISOString()},b.toString=function(){return this.$d.toUTCString()},f}(),k=S.prototype;return C.prototype=k,[["$ms",n],["$s",o],["$m",i],["$H",s],["$W",a],["$M",d],["$y",u],["$D",h]].forEach((function(e){k[e[1]]=function(t){return this.$g(t,e[0],e[1])}})),C.extend=function(e,t){return e.$i||(e(t,S,C),e.$i=!0),C},C.locale=F,C.isDayjs=$,C.unix=function(e){return C(1e3*e)},C.en=x[v],C.Ls=x,C.p={},C}();var Co,Eo,So,ko=de(Fo.exports);!function(e){e.transformWithSpaces=(e,t)=>{const r="(.{"+t+"})";return e.replace(/[^\dA-Z]/gi,"").replace(new RegExp(r,"g"),"$1 ").trim()},e.padValue=(e,t)=>{if("0"===e)return t?e:e.padStart(2,"0");if(""===e)return e;return parseInt(e).toString().padStart(2,"0")},e.shouldTruncateToTwoLines=(e,t)=>{const r=Math.floor(t/9);return e.length>=2*r||1===e.split(" ").length&&e.length>r},e.truncateOneLine=(e,t,r,n,o=8)=>{let i=0;t>r&&(i=Math.floor((t-r)/o));const s=n+i;if(s<e.length){const t=Math.floor(s/2);return e.substring(0,t)+" ... "+e.substring(e.length-t,e.length)}return e},e.truncateTwoLines=(e,t,r,n=1.2)=>{const o=Math.floor(2*t/(.6*r))*(2/n);if(e.length<=o)return e;const i=Math.floor(.6*o),s=Math.floor(.2*o);return`${e.substring(0,i)}...${e.substring(e.length-s)}`},e.getTextWidth=(t,r)=>{if("undefined"==typeof document)return 0;const n=(e.getTextWidth.canvas||(e.getTextWidth.canvas=document.createElement("canvas"))).getContext("2d");n.font=r;return n.measureText(t).width},e.maskValue=(e,r)=>{if(!e)return e;const{maskRange:n,unmaskRange:o,maskChar:i="•",maskRegex:s,maskTransformer:a}=r;if(a)return a(e);if(s)return e.replace(s,i);if(n){const{startIndex:r,endIndex:o}=t(n[0],n[1]);return e.substring(0,r)+i.repeat(e.substring(r,o+1).length)+e.substring(o+1)}if(o){const{startIndex:r,endIndex:n}=t(o[0],o[1]);return i.repeat(e.substring(0,r).length)+e.substring(r,n+1)+i.repeat(e.substring(n+1).length)}return e};const t=(e,t)=>e<t?{startIndex:e,endIndex:t}:{startIndex:t,endIndex:e},r=new Intl.PluralRules("en",{type:"ordinal"}),n=new Map([["one","st"],["two","nd"],["few","rd"],["other","th"]]);e.formatOrdinal=e=>{const t=r.select(e);return`${e}${n.get(t)}`}}(Co||(Co={})),function(e){e.AM="AM",e.PM="PM"}(Eo||(Eo={})),function(e){e.roundToNearestInterval=(e,t,r)=>{const[n,o]=e.split(":"),i=parseInt(n,10),s=parseInt(o,10);if(isNaN(i)||isNaN(s)||s<0||s>=60)throw new Error("Invalid time format");const a=60*i+s,l=a%t,d=0===l?a:r?a+(t-l):a-l,c=d%60;return`${Math.floor(d/60).toString().padStart(2,"0")}:${c.toString().padStart(2,"0")}`},e.generateHourlyIntervals=(e,t,r="ha")=>{const n="HH:mm";let o=ko(e,n),i=ko(t,n);o.isSame(i)&&(i=i.add(1,"day"));const s=[];for(;o.isBefore(i);)s.push(o.format(r)),o=o.add(1,"hour");return s},e.getTimeValues=(e,t)=>{const r={hour:"",minute:"",period:Eo.AM};if(!t)return r;try{if("24hr"===e){const n=To(t,e);r.minute=Co.padValue(n.minute);const o=parseInt(n.hour);0===Math.floor(o/12)?(r.period=Eo.AM,r.hour=0===o?"12":Co.padValue(o.toString())):(r.period=Eo.PM,r.hour=12===o?o.toString():Co.padValue((o-12).toString()))}else{const{hour:n,minute:o,period:i=""}=To(t,e);r.hour=Co.padValue(n),r.minute=Co.padValue(o),r.period="am"===i.toLowerCase()?Eo.AM:Eo.PM}return r}catch(e){return r}},e.updateMinutes=(e,t)=>{const r=parseInt(e);if(isNaN(r))return"add"===t?Co.padValue("0"):"55";const n=Math.floor(r/5),o=(("add"===t?n+1:r%5==0?n-1:n)%12+12)%12;return Co.padValue((5*o).toString())},e.updateHours=(e,t)=>{const r=parseInt(e);if(isNaN(r))return"add"===t?Co.padValue("1"):"12";const n="add"===t?r+1:r-1;return n<=12&&n>0?Co.padValue(n.toString()):13===n?Co.padValue("1"):"12"},e.convertTo24HourFormat=e=>{const t=parseInt(e.hour);let r;return r=e.period===Eo.PM?12===t?t.toString():(t+12).toString():12===t?"00":e.hour,`${r}:${e.minute}`},e.convertHourTo12HourFormat=e=>{const t=parseInt(e),r=t%12==0?12..toString():(t%12).toString();return Co.padValue(r)},e.formatDisplayValue=(e,t)=>{try{const{hour:r,minute:n,period:o=""}=To(e,t),i=Co.padValue(r);let s=`${i}:${Co.padValue(n)}`;return"12hr"===t?(s+=o.toLowerCase(),s):s}catch(e){return""}},e.toMinutesSeconds=e=>({minutes:Math.floor(e/60),seconds:e%60}),e.to24Hour=e=>{if((null==e?void 0:e.includes("am"))||(null==e?void 0:e.includes("pm"))){const[t,r]=e.split(/(am|pm)/i),[n,o]=t.split(":").map(Number);let i=n;return"pm"===r&&i<12&&(i+=12),"am"===r&&12===i&&(i=0),Bo(i,o)}return e},e.generateTimings=(t,r="12hr",n,o)=>{const i=[];let s=0,a=1440-t;for(n&&(s=e.timeToMinutes(n)),o&&(a=e.timeToMinutes(o));s<=a;){let e=Math.floor(s/60);const n=s%60;if("12hr"===r){const t=e>=12?"pm":"am";e%=12,e=e||12;const r=Bo(e,n,t);i.push(r)}else{const t=Bo(e,n);i.push(t)}s+=t}return i},e.parseInput=(e,t="12hr")=>{if(""===e||void 0===e)return e;const r=e.trim().toLowerCase(),n=/^(?:(\d{1,2})([:.])?(\d{2})?)?(a|p|am|pm)?$/.exec(r);if(!n)return;let o=parseInt(n[1]||"0",10);const i=parseInt(n[3]||"0",10);let s=n[4];if(void 0===n[1]||o>24||i>59)return;if("a"===s?s="am":"p"===s&&(s="pm"),"24hr"===t)return"pm"===s&&o<12?o+=12:("am"===s&&12===o||24===o)&&(o=0),Bo(o,i);s?0===o||24===o?(s="am",o=12):o>12&&(s="pm",o-=12):(s=0===o||24===o||o>6&&o<12?"am":"pm",o=o%12||12);return Bo(o,i,s)},e.findClosestFlooredTime=(t,r)=>{if(!t)return t;const n=e.timeToMinutes(t);let o="",i=1/0;for(const t of r){const r=e.timeToMinutes(t)-n;if(r<=0&&Math.abs(r)<i)i=Math.abs(r),o=t;else if(r>0)break}return o},e.timeToMinutes=e=>{const[t,r]=e.toLowerCase().split(/(am|pm)/),[n,o]=t.split(":").map(Number);let i=n;return"pm"===r&&12!==i&&(i+=12),"am"===r&&12===i&&(i=0),60*i+o}}(So||(So={}));const Do=(e,t)=>{const r=parseInt(e);return"24hr"===t?r>=0&&r<=23:r>=1&&r<=12},Io=e=>{const t=parseInt(e);return t>=0&&t<=59},To=(e,t)=>{const r=e?e.split(":"):[],n=new Error("Invalid format");if("12hr"===t){if(2!==r.length||4!==r[1].length)throw n;const e=r[1].substring(0,2),i=r[1].substring(2);if(!Do(r[0],t)||!Io(e)||"am"!==(o=i).toLowerCase()&&"pm"!==o.toLowerCase())throw n;return{hour:r[0],minute:e,period:r[1].substring(2)}}if(2!==r.length)throw n;if(!Do(r[0],t)||!Io(r[1]))throw n;return{hour:r[0],minute:r[1]};var o},Bo=(e,t,r)=>r?`${e}:${t.toString().padStart(2,"0")}${r}`:`${e.toString().padStart(2,"0")}:${t.toString().padStart(2,"0")}`;var Ao=function(e,t){return Ao=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])},Ao(e,t)};var zo=function(){return zo=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var o in t=arguments[r])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e},zo.apply(this,arguments)};var Oo="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};var Mo=function(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)},_o="object"==typeof Oo&&Oo&&Oo.Object===Object&&Oo,Ro="object"==typeof self&&self&&self.Object===Object&&self,Ho=_o||Ro||Function("return this")(),jo=Ho,Lo=function(){return jo.Date.now()},Po=/\s/;var Wo=function(e){for(var t=e.length;t--&&Po.test(e.charAt(t)););return t},No=/^\s+/;var Vo=function(e){return e?e.slice(0,Wo(e)+1).replace(No,""):e},Yo=Ho.Symbol,Uo=Yo,qo=Object.prototype,Go=qo.hasOwnProperty,Zo=qo.toString,Qo=Uo?Uo.toStringTag:void 0;var Xo=function(e){var t=Go.call(e,Qo),r=e[Qo];try{e[Qo]=void 0;var n=!0}catch(e){}var o=Zo.call(e);return n&&(t?e[Qo]=r:delete e[Qo]),o},Ko=Object.prototype.toString;var Jo=Xo,ei=function(e){return Ko.call(e)},ti=Yo?Yo.toStringTag:void 0;var ri=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":ti&&ti in Object(e)?Jo(e):ei(e)},ni=function(e){return null!=e&&"object"==typeof e};var oi=Vo,ii=Mo,si=function(e){return"symbol"==typeof e||ni(e)&&"[object Symbol]"==ri(e)},ai=/^[-+]0x[0-9a-f]+$/i,li=/^0b[01]+$/i,di=/^0o[0-7]+$/i,ci=parseInt;var ui=Mo,hi=Lo,gi=function(e){if("number"==typeof e)return e;if(si(e))return NaN;if(ii(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=ii(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=oi(e);var r=li.test(e);return r||di.test(e)?ci(e.slice(2),r?2:8):ai.test(e)?NaN:+e},mi=Math.max,pi=Math.min;var fi=function(e,t,r){var n,o,i,s,a,l,d=0,c=!1,u=!1,h=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function g(t){var r=n,i=o;return n=o=void 0,d=t,s=e.apply(i,r)}function m(e){var r=e-l;return void 0===l||r>=t||r<0||u&&e-d>=i}function p(){var e=hi();if(m(e))return f(e);a=setTimeout(p,function(e){var r=t-(e-l);return u?pi(r,i-(e-d)):r}(e))}function f(e){return a=void 0,h&&n?g(e):(n=o=void 0,s)}function b(){var e=hi(),r=m(e);if(n=arguments,o=this,l=e,r){if(void 0===a)return function(e){return d=e,a=setTimeout(p,t),c?g(e):s}(l);if(u)return clearTimeout(a),a=setTimeout(p,t),g(l)}return void 0===a&&(a=setTimeout(p,t)),s}return t=gi(t)||0,ui(r)&&(c=!!r.leading,i=(u="maxWait"in r)?mi(gi(r.maxWait)||0,t):i,h="trailing"in r?!!r.trailing:h),b.cancel=function(){void 0!==a&&clearTimeout(a),d=0,n=l=o=a=void 0},b.flush=function(){return void 0===a?s:f(hi())},b},bi=fi,yi=Mo;var vi=function(e,t,r){var n=!0,o=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return yi(r)&&(n="leading"in r?!!r.leading:n,o="trailing"in r?!!r.trailing:o),bi(e,t,{leading:n,maxWait:t,trailing:o})},xi=function(e,t,r,n){switch(t){case"debounce":return fi(e,r,n);case"throttle":return vi(e,r,n);default:return e}},wi=function(e){return"function"==typeof e},$i=function(){return"undefined"==typeof window},Fi=function(e){return e instanceof Element||e instanceof HTMLDocument},Ci=function(e,t,r,n){return function(o){var i=o.width,s=o.height;t((function(t){return t.width===i&&t.height===s||t.width===i&&!n||t.height===s&&!r?t:(e&&wi(e)&&e(i,s),{width:i,height:s})}))}};!function(e){function t(t){var r=e.call(this,t)||this;r.cancelHandler=function(){r.resizeHandler&&r.resizeHandler.cancel&&(r.resizeHandler.cancel(),r.resizeHandler=null)},r.attachObserver=function(){var e=r.props,t=e.targetRef,n=e.observerOptions;if(!$i()){t&&t.current&&(r.targetRef.current=t.current);var o=r.getElement();o&&(r.observableElement&&r.observableElement===o||(r.observableElement=o,r.resizeObserver.observe(o,n)))}},r.getElement=function(){var e=r.props,t=e.querySelector,n=e.targetDomEl;if($i())return null;if(t)return document.querySelector(t);if(n&&Fi(n))return n;if(r.targetRef&&Fi(r.targetRef.current))return r.targetRef.current;var o=I(r);if(!o)return null;switch(r.getRenderType()){case"renderProp":case"childFunction":case"child":case"childArray":return o;default:return o.parentElement}},r.createResizeHandler=function(e){var t=r.props,n=t.handleWidth,o=void 0===n||n,i=t.handleHeight,s=void 0===i||i,a=t.onResize;if(o||s){var l=Ci(a,r.setState.bind(r),o,s);e.forEach((function(e){var t=e&&e.contentRect||{},n=t.width,o=t.height;!r.skipOnMount&&!$i()&&l({width:n,height:o}),r.skipOnMount=!1}))}},r.getRenderType=function(){var e=r.props,t=e.render,n=e.children;return wi(t)?"renderProp":wi(n)?"childFunction":l(n)?"child":Array.isArray(n)?"childArray":"parent"};var n=t.skipOnMount,o=t.refreshMode,i=t.refreshRate,s=void 0===i?1e3:i,a=t.refreshOptions;return r.state={width:void 0,height:void 0},r.skipOnMount=n,r.targetRef=d(),r.observableElement=null,$i()||(r.resizeHandler=xi(r.createResizeHandler,o,s,a),r.resizeObserver=new window.ResizeObserver(r.resizeHandler)),r}(function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");function r(){this.constructor=e}Ao(e,t),e.prototype=null===t?Object.create(t):(r.prototype=t.prototype,new r)})(t,e),t.prototype.componentDidMount=function(){this.attachObserver()},t.prototype.componentDidUpdate=function(){this.attachObserver()},t.prototype.componentWillUnmount=function(){$i()||(this.observableElement=null,this.resizeObserver.disconnect(),this.cancelHandler())},t.prototype.render=function(){var e,t=this.props,r=t.render,o=t.children,i=t.nodeType,s=void 0===i?"div":i,a=this.state,l={width:a.width,height:a.height,targetRef:this.targetRef};switch(this.getRenderType()){case"renderProp":return r&&r(l);case"childFunction":return(e=o)(l);case"child":if((e=o).type&&"string"==typeof e.type){var d=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(n=Object.getOwnPropertySymbols(e);o<n.length;o++)t.indexOf(n[o])<0&&Object.prototype.propertyIsEnumerable.call(e,n[o])&&(r[n[o]]=e[n[o]])}return r}(l,["targetRef"]);return c(e,d)}return c(e,l);case"childArray":return(e=o).map((function(e){return!!e&&c(e,l)}));default:return n.createElement(s,null)}}}(u);var Ei=$i()?s:h;function Si(e){void 0===e&&(e={});var t=e.skipOnMount,r=void 0!==t&&t,n=e.refreshMode,o=e.refreshRate,s=void 0===o?1e3:o,l=e.refreshOptions,d=e.handleWidth,c=void 0===d||d,u=e.handleHeight,h=void 0===u||u,g=e.targetRef,m=e.observerOptions,p=e.onResize,f=i(r),b=i(null),y=null!=g?g:b,v=i(),x=a({width:void 0,height:void 0}),w=x[0],$=x[1];return Ei((function(){if(!$i()){var e=Ci(p,$,c,h);v.current=xi((function(t){(c||h)&&t.forEach((function(t){var r=t&&t.contentRect||{},n=r.width,o=r.height;!f.current&&!$i()&&e({width:n,height:o}),f.current=!1}))}),n,s,l);var t=new window.ResizeObserver(v.current);return y.current&&t.observe(y.current,m),function(){t.disconnect();var e=v.current;e&&e.cancel&&e.cancel()}}}),[n,s,l,c,h,p,m,y.current]),zo({ref:y},w)}var ki=Ni(),Di=e=>ji(e,ki),Ii=Ni();Di.write=e=>ji(e,Ii);var Ti=Ni();Di.onStart=e=>ji(e,Ti);var Bi=Ni();Di.onFrame=e=>ji(e,Bi);var Ai=Ni();Di.onFinish=e=>ji(e,Ai);var zi=[];Di.setTimeout=(e,t)=>{const r=Di.now()+t,n=()=>{const e=zi.findIndex((e=>e.cancel==n));~e&&zi.splice(e,1),Ri-=~e?1:0},o={time:r,handler:e,cancel:n};return zi.splice(Oi(r),0,o),Ri+=1,Li(),o};var Oi=e=>~(~zi.findIndex((t=>t.time>e))||~zi.length);Di.cancel=e=>{Ti.delete(e),Bi.delete(e),Ai.delete(e),ki.delete(e),Ii.delete(e)},Di.sync=e=>{Hi=!0,Di.batchedUpdates(e),Hi=!1},Di.throttle=e=>{let t;function r(){try{e(...t)}finally{t=null}}function n(...e){t=e,Di.onStart(r)}return n.handler=e,n.cancel=()=>{Ti.delete(r),t=null},n};var Mi="undefined"!=typeof window?window.requestAnimationFrame:()=>{};Di.use=e=>Mi=e,Di.now="undefined"!=typeof performance?()=>performance.now():Date.now,Di.batchedUpdates=e=>e(),Di.catch=console.error,Di.frameLoop="always",Di.advance=()=>{"demand"!==Di.frameLoop?console.warn("Cannot call the manual advancement of rafz whilst frameLoop is not set as demand"):Wi()};var _i=-1,Ri=0,Hi=!1;function ji(e,t){Hi?(t.delete(e),e(0)):(t.add(e),Li())}function Li(){_i<0&&(_i=0,"demand"!==Di.frameLoop&&Mi(Pi))}function Pi(){~_i&&(Mi(Pi),Di.batchedUpdates(Wi))}function Wi(){const e=_i;_i=Di.now();const t=Oi(_i);t&&(Vi(zi.splice(0,t),(e=>e.handler())),Ri-=t),Ri?(Ti.flush(),ki.flush(e?Math.min(64,_i-e):16.667),Bi.flush(),Ii.flush(),Ai.flush()):_i=-1}function Ni(){let e=new Set,t=e;return{add(r){Ri+=t!=e||e.has(r)?0:1,e.add(r)},delete:r=>(Ri-=t==e&&e.has(r)?1:0,e.delete(r)),flush(r){t.size&&(e=new Set,Ri-=t.size,Vi(t,(t=>t(r)&&e.add(t))),Ri+=e.size,t=e)}}}function Vi(e,t){e.forEach((e=>{try{t(e)}catch(e){Di.catch(e)}}))}var Yi=Object.defineProperty,Ui={};function qi(){}((e,t)=>{for(var r in t)Yi(e,r,{get:t[r],enumerable:!0})})(Ui,{assign:()=>as,colors:()=>os,createStringInterpolator:()=>es,skipAnimation:()=>is,to:()=>ts,willAdvance:()=>ss});var Gi={arr:Array.isArray,obj:e=>!!e&&"Object"===e.constructor.name,fun:e=>"function"==typeof e,str:e=>"string"==typeof e,num:e=>"number"==typeof e,und:e=>void 0===e};function Zi(e,t){if(Gi.arr(e)){if(!Gi.arr(t)||e.length!==t.length)return!1;for(let r=0;r<e.length;r++)if(e[r]!==t[r])return!1;return!0}return e===t}var Qi=(e,t)=>e.forEach(t);function Xi(e,t,r){if(Gi.arr(e))for(let n=0;n<e.length;n++)t.call(r,e[n],`${n}`);else for(const n in e)e.hasOwnProperty(n)&&t.call(r,e[n],n)}var Ki=e=>Gi.und(e)?[]:Gi.arr(e)?e:[e];function Ji(e,t){if(e.size){const r=Array.from(e);e.clear(),Qi(r,t)}}var es,ts,rs=(e,...t)=>Ji(e,(e=>e(...t))),ns=()=>"undefined"==typeof window||!window.navigator||/ServerSideRendering|^Deno\//.test(window.navigator.userAgent),os=null,is=!1,ss=qi,as=e=>{e.to&&(ts=e.to),e.now&&(Di.now=e.now),void 0!==e.colors&&(os=e.colors),null!=e.skipAnimation&&(is=e.skipAnimation),e.createStringInterpolator&&(es=e.createStringInterpolator),e.requestAnimationFrame&&Di.use(e.requestAnimationFrame),e.batchedUpdates&&(Di.batchedUpdates=e.batchedUpdates),e.willAdvance&&(ss=e.willAdvance),e.frameLoop&&(Di.frameLoop=e.frameLoop)},ls=new Set,ds=[],cs=[],us=0,hs={get idle(){return!ls.size&&!ds.length},start(e){us>e.priority?(ls.add(e),Di.onStart(gs)):(ms(e),Di(fs))},advance:fs,sort(e){if(us)Di.onFrame((()=>hs.sort(e)));else{const t=ds.indexOf(e);~t&&(ds.splice(t,1),ps(e))}},clear(){ds=[],ls.clear()}};function gs(){ls.forEach(ms),ls.clear(),Di(fs)}function ms(e){ds.includes(e)||ps(e)}function ps(e){ds.splice(function(e,t){const r=e.findIndex(t);return r<0?e.length:r}(ds,(t=>t.priority>e.priority)),0,e)}function fs(e){const t=cs;for(let r=0;r<ds.length;r++){const n=ds[r];us=n.priority,n.idle||(ss(n),n.advance(e),n.idle||t.push(n))}return us=0,(cs=ds).length=0,(ds=t).length>0}var bs="[-+]?\\d*\\.?\\d+",ys=bs+"%";function vs(...e){return"\\(\\s*("+e.join(")\\s*,\\s*(")+")\\s*\\)"}var xs=new RegExp("rgb"+vs(bs,bs,bs)),ws=new RegExp("rgba"+vs(bs,bs,bs,bs)),$s=new RegExp("hsl"+vs(bs,ys,ys)),Fs=new RegExp("hsla"+vs(bs,ys,ys,bs)),Cs=/^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,Es=/^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,Ss=/^#([0-9a-fA-F]{6})$/,ks=/^#([0-9a-fA-F]{8})$/;function Ds(e,t,r){return r<0&&(r+=1),r>1&&(r-=1),r<1/6?e+6*(t-e)*r:r<.5?t:r<2/3?e+(t-e)*(2/3-r)*6:e}function Is(e,t,r){const n=r<.5?r*(1+t):r+t-r*t,o=2*r-n,i=Ds(o,n,e+1/3),s=Ds(o,n,e),a=Ds(o,n,e-1/3);return Math.round(255*i)<<24|Math.round(255*s)<<16|Math.round(255*a)<<8}function Ts(e){const t=parseInt(e,10);return t<0?0:t>255?255:t}function Bs(e){return(parseFloat(e)%360+360)%360/360}function As(e){const t=parseFloat(e);return t<0?0:t>1?255:Math.round(255*t)}function zs(e){const t=parseFloat(e);return t<0?0:t>100?1:t/100}function Os(e){let t=function(e){let t;return"number"==typeof e?e>>>0===e&&e>=0&&e<=4294967295?e:null:(t=Ss.exec(e))?parseInt(t[1]+"ff",16)>>>0:os&&void 0!==os[e]?os[e]:(t=xs.exec(e))?(Ts(t[1])<<24|Ts(t[2])<<16|Ts(t[3])<<8|255)>>>0:(t=ws.exec(e))?(Ts(t[1])<<24|Ts(t[2])<<16|Ts(t[3])<<8|As(t[4]))>>>0:(t=Cs.exec(e))?parseInt(t[1]+t[1]+t[2]+t[2]+t[3]+t[3]+"ff",16)>>>0:(t=ks.exec(e))?parseInt(t[1],16)>>>0:(t=Es.exec(e))?parseInt(t[1]+t[1]+t[2]+t[2]+t[3]+t[3]+t[4]+t[4],16)>>>0:(t=$s.exec(e))?(255|Is(Bs(t[1]),zs(t[2]),zs(t[3])))>>>0:(t=Fs.exec(e))?(Is(Bs(t[1]),zs(t[2]),zs(t[3]))|As(t[4]))>>>0:null}(e);if(null===t)return e;t=t||0;return`rgba(${(4278190080&t)>>>24}, ${(16711680&t)>>>16}, ${(65280&t)>>>8}, ${(255&t)/255})`}var Ms=(e,t,r)=>{if(Gi.fun(e))return e;if(Gi.arr(e))return Ms({range:e,output:t,extrapolate:r});if(Gi.str(e.output[0]))return es(e);const n=e,o=n.output,i=n.range||[0,1],s=n.extrapolateLeft||n.extrapolate||"extend",a=n.extrapolateRight||n.extrapolate||"extend",l=n.easing||(e=>e);return e=>{const t=function(e,t){for(var r=1;r<t.length-1&&!(t[r]>=e);++r);return r-1}(e,i);return function(e,t,r,n,o,i,s,a,l){let d=l?l(e):e;if(d<t){if("identity"===s)return d;"clamp"===s&&(d=t)}if(d>r){if("identity"===a)return d;"clamp"===a&&(d=r)}if(n===o)return n;if(t===r)return e<=t?n:o;t===-1/0?d=-d:r===1/0?d-=t:d=(d-t)/(r-t);d=i(d),n===-1/0?d=-d:o===1/0?d+=n:d=d*(o-n)+n;return d}(e,i[t],i[t+1],o[t],o[t+1],l,s,a,n.map)}};var _s=1.70158,Rs=1.525*_s,Hs=_s+1,js=2*Math.PI/3,Ls=2*Math.PI/4.5,Ps=e=>{const t=7.5625,r=2.75;return e<1/r?t*e*e:e<2/r?t*(e-=1.5/r)*e+.75:e<2.5/r?t*(e-=2.25/r)*e+.9375:t*(e-=2.625/r)*e+.984375},Ws={linear:e=>e,easeInQuad:e=>e*e,easeOutQuad:e=>1-(1-e)*(1-e),easeInOutQuad:e=>e<.5?2*e*e:1-Math.pow(-2*e+2,2)/2,easeInCubic:e=>e*e*e,easeOutCubic:e=>1-Math.pow(1-e,3),easeInOutCubic:e=>e<.5?4*e*e*e:1-Math.pow(-2*e+2,3)/2,easeInQuart:e=>e*e*e*e,easeOutQuart:e=>1-Math.pow(1-e,4),easeInOutQuart:e=>e<.5?8*e*e*e*e:1-Math.pow(-2*e+2,4)/2,easeInQuint:e=>e*e*e*e*e,easeOutQuint:e=>1-Math.pow(1-e,5),easeInOutQuint:e=>e<.5?16*e*e*e*e*e:1-Math.pow(-2*e+2,5)/2,easeInSine:e=>1-Math.cos(e*Math.PI/2),easeOutSine:e=>Math.sin(e*Math.PI/2),easeInOutSine:e=>-(Math.cos(Math.PI*e)-1)/2,easeInExpo:e=>0===e?0:Math.pow(2,10*e-10),easeOutExpo:e=>1===e?1:1-Math.pow(2,-10*e),easeInOutExpo:e=>0===e?0:1===e?1:e<.5?Math.pow(2,20*e-10)/2:(2-Math.pow(2,-20*e+10))/2,easeInCirc:e=>1-Math.sqrt(1-Math.pow(e,2)),easeOutCirc:e=>Math.sqrt(1-Math.pow(e-1,2)),easeInOutCirc:e=>e<.5?(1-Math.sqrt(1-Math.pow(2*e,2)))/2:(Math.sqrt(1-Math.pow(-2*e+2,2))+1)/2,easeInBack:e=>Hs*e*e*e-_s*e*e,easeOutBack:e=>1+Hs*Math.pow(e-1,3)+_s*Math.pow(e-1,2),easeInOutBack:e=>e<.5?Math.pow(2*e,2)*(7.189819*e-Rs)/2:(Math.pow(2*e-2,2)*((Rs+1)*(2*e-2)+Rs)+2)/2,easeInElastic:e=>0===e?0:1===e?1:-Math.pow(2,10*e-10)*Math.sin((10*e-10.75)*js),easeOutElastic:e=>0===e?0:1===e?1:Math.pow(2,-10*e)*Math.sin((10*e-.75)*js)+1,easeInOutElastic:e=>0===e?0:1===e?1:e<.5?-Math.pow(2,20*e-10)*Math.sin((20*e-11.125)*Ls)/2:Math.pow(2,-20*e+10)*Math.sin((20*e-11.125)*Ls)/2+1,easeInBounce:e=>1-Ps(1-e),easeOutBounce:Ps,easeInOutBounce:e=>e<.5?(1-Ps(1-2*e))/2:(1+Ps(2*e-1))/2,steps:(e,t="end")=>r=>{const n=(r="end"===t?Math.min(r,.999):Math.max(r,.001))*e,o="end"===t?Math.floor(n):Math.ceil(n);return i=0,s=1,a=o/e,Math.min(Math.max(a,i),s);var i,s,a}},Ns=Symbol.for("FluidValue.get"),Vs=Symbol.for("FluidValue.observers"),Ys=e=>Boolean(e&&e[Ns]),Us=e=>e&&e[Ns]?e[Ns]():e,qs=e=>e[Vs]||null;function Gs(e,t){const r=e[Vs];r&&r.forEach((e=>{!function(e,t){e.eventObserved?e.eventObserved(t):e(t)}(e,t)}))}var Zs=class{constructor(e){if(!e&&!(e=this.get))throw Error("Unknown getter");Qs(this,e)}},Qs=(e,t)=>ea(e,Ns,t);function Xs(e,t){if(e[Ns]){let r=e[Vs];r||ea(e,Vs,r=new Set),r.has(t)||(r.add(t),e.observerAdded&&e.observerAdded(r.size,t))}return t}function Ks(e,t){const r=e[Vs];if(r&&r.has(t)){const n=r.size-1;n?r.delete(t):e[Vs]=null,e.observerRemoved&&e.observerRemoved(n,t)}}var Js,ea=(e,t,r)=>Object.defineProperty(e,t,{value:r,writable:!0,configurable:!0}),ta=/[+\-]?(?:0|[1-9]\d*)(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,ra=/(#(?:[0-9a-f]{2}){2,4}|(#[0-9a-f]{3})|(rgb|hsl)a?\((-?\d+%?[,\s]+){2,3}\s*[\d\.]+%?\))/gi,na=new RegExp(`(${ta.source})(%|[a-z]+)`,"i"),oa=/rgba\(([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+)\)/gi,ia=/var\((--[a-zA-Z0-9-_]+),? ?([a-zA-Z0-9 ()%#.,-]+)?\)/,sa=e=>{const[t,r]=aa(e);if(!t||ns())return e;const n=window.getComputedStyle(document.documentElement).getPropertyValue(t);if(n)return n.trim();if(r&&r.startsWith("--")){const t=window.getComputedStyle(document.documentElement).getPropertyValue(r);return t||e}return r&&ia.test(r)?sa(r):r||e},aa=e=>{const t=ia.exec(e);if(!t)return[,];const[,r,n]=t;return[r,n]},la=(e,t,r,n,o)=>`rgba(${Math.round(t)}, ${Math.round(r)}, ${Math.round(n)}, ${o})`,da=e=>{Js||(Js=os?new RegExp(`(${Object.keys(os).join("|")})(?!\\w)`,"g"):/^\b$/);const t=e.output.map((e=>Us(e).replace(ia,sa).replace(ra,Os).replace(Js,Os))),r=t.map((e=>e.match(ta).map(Number))),n=r[0].map(((e,t)=>r.map((e=>{if(!(t in e))throw Error('The arity of each "output" value must be equal');return e[t]})))).map((t=>Ms({...e,output:t})));return e=>{const r=!na.test(t[0])&&t.find((e=>na.test(e)))?.replace(ta,"");let o=0;return t[0].replace(ta,(()=>`${n[o++](e)}${r||""}`)).replace(oa,la)}},ca="react-spring: ",ua=e=>{const t=e;let r=!1;if("function"!=typeof t)throw new TypeError(`${ca}once requires a function parameter`);return(...e)=>{r||(t(...e),r=!0)}},ha=ua(console.warn);var ga=ua(console.warn);function ma(e){return Gi.str(e)&&("#"==e[0]||/\d/.test(e)||!ns()&&ia.test(e)||e in(os||{}))}var pa=ns()?s:h;function fa(){const e=a()[1],t=(()=>{const e=i(!1);return pa((()=>(e.current=!0,()=>{e.current=!1})),[]),e})();return()=>{t.current&&e(Math.random())}}var ba=e=>s(e,ya),ya=[];function va(e){const t=i(void 0);return s((()=>{t.current=e})),t.current}var xa=Symbol.for("Animated:node"),wa=e=>e&&e[xa],$a=(e,t)=>((e,t,r)=>Object.defineProperty(e,t,{value:r,writable:!0,configurable:!0}))(e,xa,t),Fa=e=>e&&e[xa]&&e[xa].getPayload(),Ca=class{constructor(){$a(this,this)}getPayload(){return this.payload||[]}},Ea=class e extends Ca{constructor(e){super(),this._value=e,this.done=!0,this.durationProgress=0,Gi.num(this._value)&&(this.lastPosition=this._value)}static create(t){return new e(t)}getPayload(){return[this]}getValue(){return this._value}setValue(e,t){return Gi.num(e)&&(this.lastPosition=e,t&&(e=Math.round(e/t)*t,this.done&&(this.lastPosition=e))),this._value!==e&&(this._value=e,!0)}reset(){const{done:e}=this;this.done=!1,Gi.num(this._value)&&(this.elapsedTime=0,this.durationProgress=0,this.lastPosition=this._value,e&&(this.lastVelocity=null),this.v0=null)}},Sa=class e extends Ea{constructor(e){super(0),this._string=null,this._toString=Ms({output:[e,e]})}static create(t){return new e(t)}getValue(){const e=this._string;return null==e?this._string=this._toString(this._value):e}setValue(e){if(Gi.str(e)){if(e==this._string)return!1;this._string=e,this._value=1}else{if(!super.setValue(e))return!1;this._string=null}return!0}reset(e){e&&(this._toString=Ms({output:[this.getValue(),e]})),this._value=0,super.reset()}},ka={dependencies:null},Da=class extends Ca{constructor(e){super(),this.source=e,this.setValue(e)}getValue(e){const t={};return Xi(this.source,((r,n)=>{var o;(o=r)&&o[xa]===o?t[n]=r.getValue(e):Ys(r)?t[n]=Us(r):e||(t[n]=r)})),t}setValue(e){this.source=e,this.payload=this._makePayload(e)}reset(){this.payload&&Qi(this.payload,(e=>e.reset()))}_makePayload(e){if(e){const t=new Set;return Xi(e,this._addToPayload,t),Array.from(t)}}_addToPayload(e){ka.dependencies&&Ys(e)&&ka.dependencies.add(e);const t=Fa(e);t&&Qi(t,(e=>this.add(e)))}},Ia=class e extends Da{constructor(e){super(e)}static create(t){return new e(t)}getValue(){return this.source.map((e=>e.getValue()))}setValue(e){const t=this.getPayload();return e.length==t.length?t.map(((t,r)=>t.setValue(e[r]))).some(Boolean):(super.setValue(e.map(Ta)),!0)}};function Ta(e){return(ma(e)?Sa:Ea).create(e)}function Ba(e){const t=wa(e);return t?t.constructor:Gi.arr(e)?Ia:ma(e)?Sa:Ea}var Aa=(e,t)=>{const r=!Gi.fun(e)||e.prototype&&e.prototype.isReactComponent;return g(((o,a)=>{const l=i(null),d=r&&m((e=>{l.current=function(e,t){e&&(Gi.fun(e)?e(t):e.current=t);return t}(a,e)}),[a]),[c,u]=function(e,t){const r=new Set;ka.dependencies=r,e.style&&(e={...e,style:t.createAnimatedStyle(e.style)});return e=new Da(e),ka.dependencies=null,[e,r]}(o,t),h=fa(),g=()=>{const e=l.current;if(r&&!e)return;!1===(!!e&&t.applyAnimatedValues(e,c.getValue(!0)))&&h()},p=new za(g,u),f=i(void 0);pa((()=>(f.current=p,Qi(u,(e=>Xs(e,p))),()=>{f.current&&(Qi(f.current.deps,(e=>Ks(e,f.current))),Di.cancel(f.current.update))}))),s(g,[]),ba((()=>()=>{const e=f.current;Qi(e.deps,(t=>Ks(t,e)))}));const b=t.getComponentProps(c.getValue());return n.createElement(e,{...b,ref:d})}))},za=class{constructor(e,t){this.update=e,this.deps=t}eventObserved(e){"change"==e.type&&Di.write(this.update)}};var Oa=Symbol.for("AnimatedComponent"),Ma=e=>Gi.str(e)?e:e&&Gi.str(e.displayName)?e.displayName:Gi.fun(e)&&e.name||null;function _a(e,...t){return Gi.fun(e)?e(...t):e}var Ra=(e,t)=>!0===e||!!(t&&e&&(Gi.fun(e)?e(t):Ki(e).includes(t))),Ha=(e,t)=>Gi.obj(e)?t&&e[t]:e,ja=(e,t)=>!0===e.default?e[t]:e.default?e.default[t]:void 0,La=e=>e,Pa=(e,t=La)=>{let r=Wa;e.default&&!0!==e.default&&(e=e.default,r=Object.keys(e));const n={};for(const o of r){const r=t(e[o],o);Gi.und(r)||(n[o]=r)}return n},Wa=["config","onProps","onStart","onChange","onPause","onResume","onRest"],Na={config:1,from:1,to:1,ref:1,loop:1,reset:1,pause:1,cancel:1,reverse:1,immediate:1,default:1,delay:1,onProps:1,onStart:1,onChange:1,onPause:1,onResume:1,onRest:1,onResolve:1,items:1,trail:1,sort:1,expires:1,initial:1,enter:1,update:1,leave:1,children:1,onDestroyed:1,keys:1,callId:1,parentId:1};function Va(e){const t=function(e){const t={};let r=0;if(Xi(e,((e,n)=>{Na[n]||(t[n]=e,r++)})),r)return t}(e);if(t){const r={to:t};return Xi(e,((e,n)=>n in t||(r[n]=e))),r}return{...e}}function Ya(e){return e=Us(e),Gi.arr(e)?e.map(Ya):ma(e)?Ui.createStringInterpolator({range:[0,1],output:[e,e]})(1):e}function Ua(e){return Gi.fun(e)||Gi.arr(e)&&Gi.obj(e[0])}var qa={tension:170,friction:26,mass:1,damping:1,easing:Ws.linear,clamp:!1},Ga=class{constructor(){this.velocity=0,Object.assign(this,qa)}};function Za(e,t){if(Gi.und(t.decay)){const r=!Gi.und(t.tension)||!Gi.und(t.friction);!r&&Gi.und(t.frequency)&&Gi.und(t.damping)&&Gi.und(t.mass)||(e.duration=void 0,e.decay=void 0),r&&(e.frequency=void 0)}else e.duration=void 0}var Qa=[],Xa=class{constructor(){this.changed=!1,this.values=Qa,this.toValues=null,this.fromValues=Qa,this.config=new Ga,this.immediate=!1}};function Ka(e,{key:t,props:r,defaultProps:n,state:o,actions:i}){return new Promise(((s,a)=>{let l,d,c=Ra(r.cancel??n?.cancel,t);if(c)g();else{Gi.und(r.pause)||(o.paused=Ra(r.pause,t));let e=n?.pause;!0!==e&&(e=o.paused||Ra(e,t)),l=_a(r.delay||0,t),e?(o.resumeQueue.add(h),i.pause()):(i.resume(),h())}function u(){o.resumeQueue.add(h),o.timeouts.delete(d),d.cancel(),l=d.time-Di.now()}function h(){l>0&&!Ui.skipAnimation?(o.delayed=!0,d=Di.setTimeout(g,l),o.pauseQueue.add(u),o.timeouts.add(d)):g()}function g(){o.delayed&&(o.delayed=!1),o.pauseQueue.delete(u),o.timeouts.delete(d),e<=(o.cancelId||0)&&(c=!0);try{i.start({...r,callId:e,cancel:c},s)}catch(e){a(e)}}}))}var Ja=(e,t)=>1==t.length?t[0]:t.some((e=>e.cancelled))?rl(e.get()):t.every((e=>e.noop))?el(e.get()):tl(e.get(),t.every((e=>e.finished))),el=e=>({value:e,noop:!0,finished:!0,cancelled:!1}),tl=(e,t,r=!1)=>({value:e,finished:t,cancelled:r}),rl=e=>({value:e,cancelled:!0,finished:!1});function nl(e,t,r,n){const{callId:o,parentId:i,onRest:s}=t,{asyncTo:a,promise:l}=r;return i||e!==a||t.reset?r.promise=(async()=>{r.asyncId=o,r.asyncTo=e;const d=Pa(t,((e,t)=>"onRest"===t?void 0:e));let c,u;const h=new Promise(((e,t)=>(c=e,u=t))),g=e=>{const t=o<=(r.cancelId||0)&&rl(n)||o!==r.asyncId&&tl(n,!1);if(t)throw e.result=t,u(e),e},m=(e,t)=>{const i=new il,s=new sl;return(async()=>{if(Ui.skipAnimation)throw ol(r),s.result=tl(n,!1),u(s),s;g(i);const a=Gi.obj(e)?{...e}:{...t,to:e};a.parentId=o,Xi(d,((e,t)=>{Gi.und(a[t])&&(a[t]=e)}));const l=await n.start(a);return g(i),r.paused&&await new Promise((e=>{r.resumeQueue.add(e)})),l})()};let p;if(Ui.skipAnimation)return ol(r),tl(n,!1);try{let t;t=Gi.arr(e)?(async e=>{for(const t of e)await m(t)})(e):Promise.resolve(e(m,n.stop.bind(n))),await Promise.all([t.then(c),h]),p=tl(n.get(),!0,!1)}catch(e){if(e instanceof il)p=e.result;else{if(!(e instanceof sl))throw e;p=e.result}}finally{o==r.asyncId&&(r.asyncId=i,r.asyncTo=i?a:void 0,r.promise=i?l:void 0)}return Gi.fun(s)&&Di.batchedUpdates((()=>{s(p,n,n.item)})),p})():l}function ol(e,t){Ji(e.timeouts,(e=>e.cancel())),e.pauseQueue.clear(),e.resumeQueue.clear(),e.asyncId=e.asyncTo=e.promise=void 0,t&&(e.cancelId=t)}var il=class extends Error{constructor(){super("An async animation has been interrupted. You see this error because you forgot to use `await` or `.catch(...)` on its returned promise.")}},sl=class extends Error{constructor(){super("SkipAnimationSignal")}},al=e=>e instanceof dl,ll=1,dl=class extends Zs{constructor(){super(...arguments),this.id=ll++,this._priority=0}get priority(){return this._priority}set priority(e){this._priority!=e&&(this._priority=e,this._onPriorityChange(e))}get(){const e=wa(this);return e&&e.getValue()}to(...e){return Ui.to(this,e)}interpolate(...e){return ha(`${ca}The "interpolate" function is deprecated in v9 (use "to" instead)`),Ui.to(this,e)}toJSON(){return this.get()}observerAdded(e){1==e&&this._attach()}observerRemoved(e){0==e&&this._detach()}_attach(){}_detach(){}_onChange(e,t=!1){Gs(this,{type:"change",parent:this,value:e,idle:t})}_onPriorityChange(e){this.idle||hs.sort(this),Gs(this,{type:"priority",parent:this,priority:e})}},cl=Symbol.for("SpringPhase"),ul=e=>(1&e[cl])>0,hl=e=>(2&e[cl])>0,gl=e=>(4&e[cl])>0,ml=(e,t)=>t?e[cl]|=3:e[cl]&=-3,pl=(e,t)=>t?e[cl]|=4:e[cl]&=-5,fl=class extends dl{constructor(e,t){if(super(),this.animation=new Xa,this.defaultProps={},this._state={paused:!1,delayed:!1,pauseQueue:new Set,resumeQueue:new Set,timeouts:new Set},this._pendingCalls=new Set,this._lastCallId=0,this._lastToId=0,this._memoizedDuration=0,!Gi.und(e)||!Gi.und(t)){const r=Gi.obj(e)?{...e}:{...t,from:e};Gi.und(r.default)&&(r.default=!0),this.start(r)}}get idle(){return!(hl(this)||this._state.asyncTo)||gl(this)}get goal(){return Us(this.animation.to)}get velocity(){const e=wa(this);return e instanceof Ea?e.lastVelocity||0:e.getPayload().map((e=>e.lastVelocity||0))}get hasAnimated(){return ul(this)}get isAnimating(){return hl(this)}get isPaused(){return gl(this)}get isDelayed(){return this._state.delayed}advance(e){let t=!0,r=!1;const n=this.animation;let{toValues:o}=n;const{config:i}=n,s=Fa(n.to);!s&&Ys(n.to)&&(o=Ki(Us(n.to))),n.values.forEach(((a,l)=>{if(a.done)return;const d=a.constructor==Sa?1:s?s[l].lastPosition:o[l];let c=n.immediate,u=d;if(!c){if(u=a.lastPosition,i.tension<=0)return void(a.done=!0);let t=a.elapsedTime+=e;const r=n.fromValues[l],o=null!=a.v0?a.v0:a.v0=Gi.arr(i.velocity)?i.velocity[l]:i.velocity;let s;const h=i.precision||(r==d?.005:Math.min(1,.001*Math.abs(d-r)));if(Gi.und(i.duration))if(i.decay){const e=!0===i.decay?.998:i.decay,n=Math.exp(-(1-e)*t);u=r+o/(1-e)*(1-n),c=Math.abs(a.lastPosition-u)<=h,s=o*n}else{s=null==a.lastVelocity?o:a.lastVelocity;const t=i.restVelocity||h/10,n=i.clamp?0:i.bounce,l=!Gi.und(n),g=r==d?a.v0>0:r<d;let m,p=!1;const f=1,b=Math.ceil(e/f);for(let e=0;e<b&&(m=Math.abs(s)>t,m||(c=Math.abs(d-u)<=h,!c));++e){l&&(p=u==d||u>d==g,p&&(s=-s*n,u=d));s+=(1e-6*-i.tension*(u-d)+.001*-i.friction*s)/i.mass*f,u+=s*f}}else{let n=1;i.duration>0&&(this._memoizedDuration!==i.duration&&(this._memoizedDuration=i.duration,a.durationProgress>0&&(a.elapsedTime=i.duration*a.durationProgress,t=a.elapsedTime+=e)),n=(i.progress||0)+t/this._memoizedDuration,n=n>1?1:n<0?0:n,a.durationProgress=n),u=r+i.easing(n)*(d-r),s=(u-a.lastPosition)/e,c=1==n}a.lastVelocity=s,Number.isNaN(u)&&(console.warn("Got NaN while animating:",this),c=!0)}s&&!s[l].done&&(c=!1),c?a.done=!0:t=!1,a.setValue(u,i.round)&&(r=!0)}));const a=wa(this),l=a.getValue();if(t){const e=Us(n.to);l===e&&!r||i.decay?r&&i.decay&&this._onChange(l):(a.setValue(e),this._onChange(e)),this._stop()}else r&&this._onChange(l)}set(e){return Di.batchedUpdates((()=>{this._stop(),this._focus(e),this._set(e)})),this}pause(){this._update({pause:!0})}resume(){this._update({pause:!1})}finish(){if(hl(this)){const{to:e,config:t}=this.animation;Di.batchedUpdates((()=>{this._onStart(),t.decay||this._set(e,!1),this._stop()}))}return this}update(e){return(this.queue||(this.queue=[])).push(e),this}start(e,t){let r;return Gi.und(e)?(r=this.queue||[],this.queue=[]):r=[Gi.obj(e)?e:{...t,to:e}],Promise.all(r.map((e=>this._update(e)))).then((e=>Ja(this,e)))}stop(e){const{to:t}=this.animation;return this._focus(this.get()),ol(this._state,e&&this._lastCallId),Di.batchedUpdates((()=>this._stop(t,e))),this}reset(){this._update({reset:!0})}eventObserved(e){"change"==e.type?this._start():"priority"==e.type&&(this.priority=e.priority+1)}_prepareNode(e){const t=this.key||"";let{to:r,from:n}=e;r=Gi.obj(r)?r[t]:r,(null==r||Ua(r))&&(r=void 0),n=Gi.obj(n)?n[t]:n,null==n&&(n=void 0);const o={to:r,from:n};return ul(this)||(e.reverse&&([r,n]=[n,r]),n=Us(n),Gi.und(n)?wa(this)||this._set(r):this._set(n)),o}_update({...e},t){const{key:r,defaultProps:n}=this;e.default&&Object.assign(n,Pa(e,((e,t)=>/^on/.test(t)?Ha(e,r):e))),Fl(this,e,"onProps"),Cl(this,"onProps",e,this);const o=this._prepareNode(e);if(Object.isFrozen(this))throw Error("Cannot animate a `SpringValue` object that is frozen. Did you forget to pass your component to `animated(...)` before animating its props?");const i=this._state;return Ka(++this._lastCallId,{key:r,props:e,defaultProps:n,state:i,actions:{pause:()=>{gl(this)||(pl(this,!0),rs(i.pauseQueue),Cl(this,"onPause",tl(this,bl(this,this.animation.to)),this))},resume:()=>{gl(this)&&(pl(this,!1),hl(this)&&this._resume(),rs(i.resumeQueue),Cl(this,"onResume",tl(this,bl(this,this.animation.to)),this))},start:this._merge.bind(this,o)}}).then((r=>{if(e.loop&&r.finished&&(!t||!r.noop)){const t=yl(e);if(t)return this._update(t,!0)}return r}))}_merge(e,t,r){if(t.cancel)return this.stop(!0),r(rl(this));const n=!Gi.und(e.to),o=!Gi.und(e.from);if(n||o){if(!(t.callId>this._lastToId))return r(rl(this));this._lastToId=t.callId}const{key:i,defaultProps:s,animation:a}=this,{to:l,from:d}=a;let{to:c=l,from:u=d}=e;!o||n||t.default&&!Gi.und(c)||(c=u),t.reverse&&([c,u]=[u,c]);const h=!Zi(u,d);h&&(a.from=u),u=Us(u);const g=!Zi(c,l);g&&this._focus(c);const m=Ua(t.to),{config:p}=a,{decay:f,velocity:b}=p;(n||o)&&(p.velocity=0),t.config&&!m&&function(e,t,r){r&&(Za(r={...r},t),t={...r,...t}),Za(e,t),Object.assign(e,t);for(const t in qa)null==e[t]&&(e[t]=qa[t]);let{frequency:n,damping:o}=e;const{mass:i}=e;Gi.und(n)||(n<.01&&(n=.01),o<0&&(o=0),e.tension=Math.pow(2*Math.PI/n,2)*i,e.friction=4*Math.PI*o*i/n)}(p,_a(t.config,i),t.config!==s.config?_a(s.config,i):void 0);let y=wa(this);if(!y||Gi.und(c))return r(tl(this,!0));const v=Gi.und(t.reset)?o&&!t.default:!Gi.und(u)&&Ra(t.reset,i),x=v?u:this.get(),w=Ya(c),$=Gi.num(w)||Gi.arr(w)||ma(w),F=!m&&(!$||Ra(s.immediate||t.immediate,i));if(g){const e=Ba(c);if(e!==y.constructor){if(!F)throw Error(`Cannot animate between ${y.constructor.name} and ${e.name}, as the "to" prop suggests`);y=this._set(w)}}const C=y.constructor;let E=Ys(c),S=!1;if(!E){const e=v||!ul(this)&&h;(g||e)&&(S=Zi(Ya(x),w),E=!S),(Zi(a.immediate,F)||F)&&Zi(p.decay,f)&&Zi(p.velocity,b)||(E=!0)}if(S&&hl(this)&&(a.changed&&!v?E=!0:E||this._stop(l)),!m&&((E||Ys(l))&&(a.values=y.getPayload(),a.toValues=Ys(c)?null:C==Sa?[1]:Ki(w)),a.immediate!=F&&(a.immediate=F,F||v||this._set(l)),E)){const{onRest:e}=a;Qi($l,(e=>Fl(this,t,e)));const n=tl(this,bl(this,l));rs(this._pendingCalls,n),this._pendingCalls.add(r),a.changed&&Di.batchedUpdates((()=>{a.changed=!v,e?.(n,this),v?_a(s.onRest,n):a.onStart?.(n,this)}))}v&&this._set(x),m?r(nl(t.to,t,this._state,this)):E?this._start():hl(this)&&!g?this._pendingCalls.add(r):r(el(x))}_focus(e){const t=this.animation;e!==t.to&&(qs(this)&&this._detach(),t.to=e,qs(this)&&this._attach())}_attach(){let e=0;const{to:t}=this.animation;Ys(t)&&(Xs(t,this),al(t)&&(e=t.priority+1)),this.priority=e}_detach(){const{to:e}=this.animation;Ys(e)&&Ks(e,this)}_set(e,t=!0){const r=Us(e);if(!Gi.und(r)){const e=wa(this);if(!e||!Zi(r,e.getValue())){const n=Ba(r);e&&e.constructor==n?e.setValue(r):$a(this,n.create(r)),e&&Di.batchedUpdates((()=>{this._onChange(r,t)}))}}return wa(this)}_onStart(){const e=this.animation;e.changed||(e.changed=!0,Cl(this,"onStart",tl(this,bl(this,e.to)),this))}_onChange(e,t){t||(this._onStart(),_a(this.animation.onChange,e,this)),_a(this.defaultProps.onChange,e,this),super._onChange(e,t)}_start(){const e=this.animation;wa(this).reset(Us(e.to)),e.immediate||(e.fromValues=e.values.map((e=>e.lastPosition))),hl(this)||(ml(this,!0),gl(this)||this._resume())}_resume(){Ui.skipAnimation?this.finish():hs.start(this)}_stop(e,t){if(hl(this)){ml(this,!1);const r=this.animation;Qi(r.values,(e=>{e.done=!0})),r.toValues&&(r.onChange=r.onPause=r.onResume=void 0),Gs(this,{type:"idle",parent:this});const n=t?rl(this.get()):tl(this.get(),bl(this,e??r.to));rs(this._pendingCalls,n),r.changed&&(r.changed=!1,Cl(this,"onRest",n,this))}}};function bl(e,t){const r=Ya(t);return Zi(Ya(e.get()),r)}function yl(e,t=e.loop,r=e.to){const n=_a(t);if(n){const o=!0!==n&&Va(n),i=(o||e).reverse,s=!o||o.reset;return vl({...e,loop:t,default:!1,pause:void 0,to:!i||Ua(r)?r:void 0,from:s?e.from:void 0,reset:s,...o})}}function vl(e){const{to:t,from:r}=e=Va(e),n=new Set;return Gi.obj(t)&&wl(t,n),Gi.obj(r)&&wl(r,n),e.keys=n.size?Array.from(n):null,e}function xl(e){const t=vl(e);return Gi.und(t.default)&&(t.default=Pa(t)),t}function wl(e,t){Xi(e,((e,r)=>null!=e&&t.add(r)))}var $l=["onStart","onRest","onChange","onPause","onResume"];function Fl(e,t,r){e.animation[r]=t[r]!==ja(t,r)?Ha(t[r],e.key):void 0}function Cl(e,t,...r){e.animation[t]?.(...r),e.defaultProps[t]?.(...r)}var El=["onStart","onChange","onRest"],Sl=1,kl=class{constructor(e,t){this.id=Sl++,this.springs={},this.queue=[],this._lastAsyncId=0,this._active=new Set,this._changed=new Set,this._started=!1,this._state={paused:!1,pauseQueue:new Set,resumeQueue:new Set,timeouts:new Set},this._events={onStart:new Map,onChange:new Map,onRest:new Map},this._onFrame=this._onFrame.bind(this),t&&(this._flush=t),e&&this.start({default:!0,...e})}get idle(){return!this._state.asyncTo&&Object.values(this.springs).every((e=>e.idle&&!e.isDelayed&&!e.isPaused))}get item(){return this._item}set item(e){this._item=e}get(){const e={};return this.each(((t,r)=>e[r]=t.get())),e}set(e){for(const t in e){const r=e[t];Gi.und(r)||this.springs[t].set(r)}}update(e){return e&&this.queue.push(vl(e)),this}start(e){let{queue:t}=this;return e?t=Ki(e).map(vl):this.queue=[],this._flush?this._flush(this,t):(Ol(this,t),Dl(this,t))}stop(e,t){if(e!==!!e&&(t=e),t){const r=this.springs;Qi(Ki(t),(t=>r[t].stop(!!e)))}else ol(this._state,this._lastAsyncId),this.each((t=>t.stop(!!e)));return this}pause(e){if(Gi.und(e))this.start({pause:!0});else{const t=this.springs;Qi(Ki(e),(e=>t[e].pause()))}return this}resume(e){if(Gi.und(e))this.start({pause:!1});else{const t=this.springs;Qi(Ki(e),(e=>t[e].resume()))}return this}each(e){Xi(this.springs,e)}_onFrame(){const{onStart:e,onChange:t,onRest:r}=this._events,n=this._active.size>0,o=this._changed.size>0;(n&&!this._started||o&&!this._started)&&(this._started=!0,Ji(e,(([e,t])=>{t.value=this.get(),e(t,this,this._item)})));const i=!n&&this._started,s=o||i&&r.size?this.get():null;o&&t.size&&Ji(t,(([e,t])=>{t.value=s,e(t,this,this._item)})),i&&(this._started=!1,Ji(r,(([e,t])=>{t.value=s,e(t,this,this._item)})))}eventObserved(e){if("change"==e.type)this._changed.add(e.parent),e.idle||this._active.add(e.parent);else{if("idle"!=e.type)return;this._active.delete(e.parent)}Di.onFrame(this._onFrame)}};function Dl(e,t){return Promise.all(t.map((t=>Il(e,t)))).then((t=>Ja(e,t)))}async function Il(e,t,r){const{keys:n,to:o,from:i,loop:s,onRest:a,onResolve:l}=t,d=Gi.obj(t.default)&&t.default;s&&(t.loop=!1),!1===o&&(t.to=null),!1===i&&(t.from=null);const c=Gi.arr(o)||Gi.fun(o)?o:void 0;c?(t.to=void 0,t.onRest=void 0,d&&(d.onRest=void 0)):Qi(El,(r=>{const n=t[r];if(Gi.fun(n)){const o=e._events[r];t[r]=({finished:e,cancelled:t})=>{const r=o.get(n);r?(e||(r.finished=!1),t&&(r.cancelled=!0)):o.set(n,{value:null,finished:e||!1,cancelled:t||!1})},d&&(d[r]=t[r])}}));const u=e._state;t.pause===!u.paused?(u.paused=t.pause,rs(t.pause?u.pauseQueue:u.resumeQueue)):u.paused&&(t.pause=!0);const h=(n||Object.keys(e.springs)).map((r=>e.springs[r].start(t))),g=!0===t.cancel||!0===ja(t,"cancel");(c||g&&u.asyncId)&&h.push(Ka(++e._lastAsyncId,{props:t,state:u,actions:{pause:qi,resume:qi,start(t,r){g?(ol(u,e._lastAsyncId),r(rl(e))):(t.onRest=a,r(nl(c,t,u,e)))}}})),u.paused&&await new Promise((e=>{u.resumeQueue.add(e)}));const m=Ja(e,await Promise.all(h));if(s&&m.finished&&(!r||!m.noop)){const r=yl(t,s,o);if(r)return Ol(e,[r]),Il(e,r,!0)}return l&&Di.batchedUpdates((()=>l(m,e,e.item))),m}function Tl(e,t){const r={...e.springs};return t&&Qi(Ki(t),(e=>{Gi.und(e.keys)&&(e=vl(e)),Gi.obj(e.to)||(e={...e,to:void 0}),zl(r,e,(e=>Al(e)))})),Bl(e,r),r}function Bl(e,t){Xi(t,((t,r)=>{e.springs[r]||(e.springs[r]=t,Xs(t,e))}))}function Al(e,t){const r=new fl;return r.key=e,t&&Xs(r,t),r}function zl(e,t,r){t.keys&&Qi(t.keys,(n=>{(e[n]||(e[n]=r(n)))._prepareNode(t)}))}function Ol(e,t){Qi(t,(t=>{zl(e.springs,t,(t=>Al(t,e)))}))}var Ml=n.createContext({pause:!1,immediate:!1}),_l=()=>{const e=[],t=function(t){ga(`${ca}Directly calling start instead of using the api object is deprecated in v9 (use ".start" instead), this will be removed in later 0.X.0 versions`);const n=[];return Qi(e,((e,o)=>{if(Gi.und(t))n.push(e.start());else{const i=r(t,e,o);i&&n.push(e.start(i))}})),n};t.current=e,t.add=function(t){e.includes(t)||e.push(t)},t.delete=function(t){const r=e.indexOf(t);~r&&e.splice(r,1)},t.pause=function(){return Qi(e,(e=>e.pause(...arguments))),this},t.resume=function(){return Qi(e,(e=>e.resume(...arguments))),this},t.set=function(t){Qi(e,((e,r)=>{const n=Gi.fun(t)?t(r,e):t;n&&e.set(n)}))},t.start=function(t){const r=[];return Qi(e,((e,n)=>{if(Gi.und(t))r.push(e.start());else{const o=this._getProps(t,e,n);o&&r.push(e.start(o))}})),r},t.stop=function(){return Qi(e,(e=>e.stop(...arguments))),this},t.update=function(t){return Qi(e,((e,r)=>e.update(this._getProps(t,e,r)))),this};const r=function(e,t,r){return Gi.fun(e)?e(r,t):e};return t._getProps=r,t};function Rl(e,t){const r=Gi.fun(e),[[n],o]=function(e,t,r){const n=Gi.fun(t)&&t;n&&!r&&(r=[]);const o=p((()=>n||3==arguments.length?_l():void 0),[]),s=i(0),a=fa(),l=p((()=>({ctrls:[],queue:[],flush(e,t){const r=Tl(e,t),n=s.current>0&&!l.queue.length&&!Object.keys(r).some((t=>!e.springs[t]));return n?Dl(e,t):new Promise((n=>{Bl(e,r),l.queue.push((()=>{n(Dl(e,t))})),a()}))}})),[]),d=i([...l.ctrls]),c=i([]),u=va(e)||0;function h(e,r){for(let o=e;o<r;o++){const e=d.current[o]||(d.current[o]=new kl(null,l.flush)),r=n?n(o,e):t[o];r&&(c.current[o]=xl(r))}}p((()=>{Qi(d.current.slice(e,u),(e=>{!function(e,t){e.ref?.delete(e),t?.delete(e)}(e,o),e.stop(!0)})),d.current.length=e,h(u,e)}),[e]),p((()=>{h(0,Math.min(u,e))}),r);const g=d.current.map(((e,t)=>Tl(e,c.current[t]))),m=f(Ml),b=va(m),y=m!==b&&function(e){for(const t in e)return!0;return!1}(m);pa((()=>{s.current++,l.ctrls=d.current;const{queue:e}=l;e.length&&(l.queue=[],Qi(e,(e=>e()))),Qi(d.current,((e,t)=>{o?.add(e),y&&e.start({default:m});const r=c.current[t];r&&(function(e,t){t&&e.ref!==t&&(e.ref?.delete(e),t.add(e),e.ref=t)}(e,r.ref),e.ref?e.queue.push(r):e.start(r))}))})),ba((()=>()=>{Qi(l.ctrls,(e=>e.stop(!0)))}));const v=g.map((e=>({...e})));return o?[v,o]:v}(1,r?e:[e],r?t||[]:t);return r||2==arguments.length?[n,o]:n}var Hl=class extends dl{constructor(e,t){super(),this.source=e,this.idle=!0,this._active=new Set,this.calc=Ms(...t);const r=this._get(),n=Ba(r);$a(this,n.create(r))}advance(e){const t=this._get();Zi(t,this.get())||(wa(this).setValue(t),this._onChange(t,this.idle)),!this.idle&&Ll(this._active)&&Pl(this)}_get(){const e=Gi.arr(this.source)?this.source.map(Us):Ki(Us(this.source));return this.calc(...e)}_start(){this.idle&&!Ll(this._active)&&(this.idle=!1,Qi(Fa(this),(e=>{e.done=!1})),Ui.skipAnimation?(Di.batchedUpdates((()=>this.advance())),Pl(this)):hs.start(this))}_attach(){let e=1;Qi(Ki(this.source),(t=>{Ys(t)&&Xs(t,this),al(t)&&(t.idle||this._active.add(t),e=Math.max(e,t.priority+1))})),this.priority=e,this._start()}_detach(){Qi(Ki(this.source),(e=>{Ys(e)&&Ks(e,this)})),this._active.clear(),Pl(this)}eventObserved(e){"change"==e.type?e.idle?this.advance():(this._active.add(e.parent),this._start()):"idle"==e.type?this._active.delete(e.parent):"priority"==e.type&&(this.priority=Ki(this.source).reduce(((e,t)=>Math.max(e,(al(t)?t.priority:0)+1)),0))}};function jl(e){return!1!==e.idle}function Ll(e){return!e.size||Array.from(e).every(jl)}function Pl(e){e.idle||(e.idle=!0,Qi(Fa(e),(e=>{e.done=!0})),Gs(e,{type:"idle",parent:e}))}Ui.assign({createStringInterpolator:da,to:(e,t)=>new Hl(e,t)});var Wl=/^--/;function Nl(e,t){return null==t||"boolean"==typeof t||""===t?"":"number"!=typeof t||0===t||Wl.test(e)||Yl.hasOwnProperty(e)&&Yl[e]?(""+t).trim():t+"px"}var Vl={};var Yl={animationIterationCount:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Ul=["Webkit","Ms","Moz","O"];Yl=Object.keys(Yl).reduce(((e,t)=>(Ul.forEach((r=>e[((e,t)=>e+t.charAt(0).toUpperCase()+t.substring(1))(r,t)]=e[t])),e)),Yl);var ql=/^(matrix|translate|scale|rotate|skew)/,Gl=/^(translate)/,Zl=/^(rotate|skew)/,Ql=(e,t)=>Gi.num(e)&&0!==e?e+t:e,Xl=(e,t)=>Gi.arr(e)?e.every((e=>Xl(e,t))):Gi.num(e)?e===t:parseFloat(e)===t,Kl=class extends Da{constructor({x:e,y:t,z:r,...n}){const o=[],i=[];(e||t||r)&&(o.push([e||0,t||0,r||0]),i.push((e=>[`translate3d(${e.map((e=>Ql(e,"px"))).join(",")})`,Xl(e,0)]))),Xi(n,((e,t)=>{if("transform"===t)o.push([e||""]),i.push((e=>[e,""===e]));else if(ql.test(t)){if(delete n[t],Gi.und(e))return;const r=Gl.test(t)?"px":Zl.test(t)?"deg":"";o.push(Ki(e)),i.push("rotate3d"===t?([e,t,n,o])=>[`rotate3d(${e},${t},${n},${Ql(o,r)})`,Xl(o,0)]:e=>[`${t}(${e.map((e=>Ql(e,r))).join(",")})`,Xl(e,t.startsWith("scale")?1:0)])}})),o.length&&(n.transform=new Jl(o,i)),super(n)}},Jl=class extends Zs{constructor(e,t){super(),this.inputs=e,this.transforms=t,this._value=null}get(){return this._value||(this._value=this._get())}_get(){let e="",t=!0;return Qi(this.inputs,((r,n)=>{const o=Us(r[0]),[i,s]=this.transforms[n](Gi.arr(o)?o:r.map(Us));e+=" "+i,t=t&&s})),t?"none":e}observerAdded(e){1==e&&Qi(this.inputs,(e=>Qi(e,(e=>Ys(e)&&Xs(e,this)))))}observerRemoved(e){0==e&&Qi(this.inputs,(e=>Qi(e,(e=>Ys(e)&&Ks(e,this)))))}eventObserved(e){"change"==e.type&&(this._value=null),Gs(this,e)}};Ui.assign({batchedUpdates:T,createStringInterpolator:da,colors:{transparent:0,aliceblue:4042850303,antiquewhite:4209760255,aqua:16777215,aquamarine:2147472639,azure:4043309055,beige:4126530815,bisque:4293182719,black:255,blanchedalmond:4293643775,blue:65535,blueviolet:2318131967,brown:2771004159,burlywood:3736635391,burntsienna:3934150143,cadetblue:1604231423,chartreuse:2147418367,chocolate:3530104575,coral:4286533887,cornflowerblue:1687547391,cornsilk:4294499583,crimson:3692313855,cyan:16777215,darkblue:35839,darkcyan:9145343,darkgoldenrod:3095792639,darkgray:2846468607,darkgreen:6553855,darkgrey:2846468607,darkkhaki:3182914559,darkmagenta:2332068863,darkolivegreen:1433087999,darkorange:4287365375,darkorchid:2570243327,darkred:2332033279,darksalmon:3918953215,darkseagreen:2411499519,darkslateblue:1211993087,darkslategray:793726975,darkslategrey:793726975,darkturquoise:13554175,darkviolet:2483082239,deeppink:4279538687,deepskyblue:12582911,dimgray:1768516095,dimgrey:1768516095,dodgerblue:512819199,firebrick:2988581631,floralwhite:4294635775,forestgreen:579543807,fuchsia:4278255615,gainsboro:3705462015,ghostwhite:4177068031,gold:4292280575,goldenrod:3668254975,gray:2155905279,green:8388863,greenyellow:2919182335,grey:2155905279,honeydew:4043305215,hotpink:4285117695,indianred:3445382399,indigo:1258324735,ivory:4294963455,khaki:4041641215,lavender:3873897215,lavenderblush:4293981695,lawngreen:2096890111,lemonchiffon:4294626815,lightblue:2916673279,lightcoral:4034953471,lightcyan:3774873599,lightgoldenrodyellow:4210742015,lightgray:3553874943,lightgreen:2431553791,lightgrey:3553874943,lightpink:4290167295,lightsalmon:4288707327,lightseagreen:548580095,lightskyblue:2278488831,lightslategray:2005441023,lightslategrey:2005441023,lightsteelblue:2965692159,lightyellow:4294959359,lime:16711935,limegreen:852308735,linen:4210091775,magenta:4278255615,maroon:2147483903,mediumaquamarine:1724754687,mediumblue:52735,mediumorchid:3126187007,mediumpurple:2473647103,mediumseagreen:1018393087,mediumslateblue:2070474495,mediumspringgreen:16423679,mediumturquoise:1221709055,mediumvioletred:3340076543,midnightblue:421097727,mintcream:4127193855,mistyrose:4293190143,moccasin:4293178879,navajowhite:4292783615,navy:33023,oldlace:4260751103,olive:2155872511,olivedrab:1804477439,orange:4289003775,orangered:4282712319,orchid:3664828159,palegoldenrod:4008225535,palegreen:2566625535,paleturquoise:2951671551,palevioletred:3681588223,papayawhip:4293907967,peachpuff:4292524543,peru:3448061951,pink:4290825215,plum:3718307327,powderblue:2967529215,purple:2147516671,rebeccapurple:1714657791,red:4278190335,rosybrown:3163525119,royalblue:1097458175,saddlebrown:2336560127,salmon:4202722047,sandybrown:4104413439,seagreen:780883967,seashell:4294307583,sienna:2689740287,silver:3233857791,skyblue:2278484991,slateblue:1784335871,slategray:1887473919,slategrey:1887473919,snow:4294638335,springgreen:16744447,steelblue:1182971135,tan:3535047935,teal:8421631,thistle:3636451583,tomato:4284696575,turquoise:1088475391,violet:4001558271,wheat:4125012991,white:4294967295,whitesmoke:4126537215,yellow:4294902015,yellowgreen:2597139199}});var ed=((e,{applyAnimatedValues:t=()=>!1,createAnimatedStyle:r=e=>new Da(e),getComponentProps:n=e=>e}={})=>{const o={applyAnimatedValues:t,createAnimatedStyle:r,getComponentProps:n},i=e=>{const t=Ma(e)||"Anonymous";return(e=Gi.str(e)?i[e]||(i[e]=Aa(e,o)):e[Oa]||(e[Oa]=Aa(e,o))).displayName=`Animated(${t})`,e};return Xi(e,((t,r)=>{Gi.arr(e)&&(r=Ma(t)),i[r]=i(t)})),{animated:i}})(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"],{applyAnimatedValues:function(e,t){if(!e.nodeType||!e.setAttribute)return!1;const r="filter"===e.nodeName||e.parentNode&&"filter"===e.parentNode.nodeName,{className:n,style:o,children:i,scrollTop:s,scrollLeft:a,viewBox:l,...d}=t,c=Object.values(d),u=Object.keys(d).map((t=>r||e.hasAttribute(t)?t:Vl[t]||(Vl[t]=t.replace(/([A-Z])/g,(e=>"-"+e.toLowerCase())))));void 0!==i&&(e.textContent=i);for(const t in o)if(o.hasOwnProperty(t)){const r=Nl(t,o[t]);Wl.test(t)?e.style.setProperty(t,r):e.style[t]=r}u.forEach(((t,r)=>{e.setAttribute(t,c[r])})),void 0!==n&&(e.className=n),void 0!==s&&(e.scrollTop=s),void 0!==a&&(e.scrollLeft=a),void 0!==l&&e.setAttribute("viewBox",l)},createAnimatedStyle:e=>new Kl(e),getComponentProps:({scrollTop:e,scrollLeft:t,...r})=>r}),td=ed.animated;const rd=$.div`
    display: inline-block;
    position: relative;
    width: ${({$size:e})=>e?`${e}px`:"1em"};
    height: ${({$size:e})=>e?`${e}px`:"1em"};
    color: ${e=>e.$color||"currentColor"};
`,nd=C`
	0% {
	  transform: rotate(0deg);
	}
	100% {
	  transform: rotate(360deg);
	}
`,od=$.div`
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
    animation: ${nd} 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
`,id=$(od)`
    animation-delay: -0.45s;
`,sd=$(od)`
    animation-delay: -0.3s;
`,ad=$(od)`
    animation-delay: -0.15s;
`,ld=({color:r,className:n,size:o})=>e(rd,{className:n,$size:o,$color:r,"data-testid":"component-loading-spinner",children:[t(od,{id:"inner1"}),t(id,{id:"inner2"}),t(sd,{id:"inner3"}),t(ad,{id:"inner4"})]}),dd={Button:{"button-radius":Rn.md,"button-default-colour-bg":gn["bg-primary"],"button-default-colour-bg-hover":gn["bg-primary-hover"],"button-default-colour-text":gn["text-inverse"],"button-secondary-colour-border":gn["border-primary"],"button-secondary-colour-text":gn["text-primary"],"button-light-colour-text":gn["text-primary"],"button-link-colour-text":gn["text-primary"]}},cd={collections:{default:{Button:{"button-radius":Rn.sm,"button-default-colour-bg":gn["bg-primary"],"button-default-colour-bg-hover":gn["bg-primary-hover"],"button-default-colour-text":gn["text-inverse"],"button-secondary-colour-border":gn["border-primary"],"button-secondary-colour-text":gn["text-primary"],"button-light-colour-text":gn["text-primary"],"button-link-colour-text":gn["text-primary"]}},pa:{Button:{"button-radius":Rn.full,"button-default-colour-bg":gn["bg-primary"],"button-default-colour-bg-hover":gn["bg-primary-hover"],"button-default-colour-text":gn["text-inverse"],"button-secondary-colour-border":gn["border-primary"],"button-secondary-colour-text":gn["text-primary"],"button-light-colour-text":gn["text-primary"],"button-link-colour-text":gn["text-primary"]}},a11yplayground:dd},defaultValue:"default"},ud=(e,t)=>r=>{var n,o;const i=r.theme,s=Lr(cd,null==i?void 0:i.componentScheme);return hd((null===(o=null===(n=null==i?void 0:i.componentOverrides)||void 0===n?void 0:n[e])||void 0===o?void 0:o[t])||s[e][t],r)},hd=(e,t)=>{switch(typeof e){case"function":return e(t);case"number":return e+"px";case"string":return e}},gd=ud("Button","button-radius"),md=ud("Button","button-default-colour-bg"),pd=ud("Button","button-default-colour-bg-hover"),fd=ud("Button","button-default-colour-text"),bd=ud("Button","button-secondary-colour-border"),yd=ud("Button","button-secondary-colour-text"),vd=ud("Button","button-light-colour-text"),xd=ud("Button","button-link-colour-text"),wd=$.button`
    padding: ${Un["spacing-8"]} ${Un["spacing-16"]};
    min-width: 4rem;
    border: ${Yn["width-010"]} ${Yn.solid} transparent;
    transition: all ${Vn["duration-250"]} ${Vn["ease-default"]};
    border-radius: ${gd};
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;

    // -----------------------------------------------------------------------------
    // BUTTON STYLE + TEXT COLOR
    // -----------------------------------------------------------------------------
    ${e=>{switch(e.$buttonStyle){case"secondary":return F`
                    background-color: ${Wn.bg};
                    border-color: ${e.$buttonIsDanger?Wn["border-error-strong"]:bd};

                    color: ${e.$buttonIsDanger?Wn["text-error"]:yd};

                    &:hover,
                    &:active {
                        background-color: ${Wn["bg-hover-neutral"]};
                    }
                `;case"light":return F`
                    background-color: ${Wn.bg};
                    border-color: ${Wn.border};

                    color: ${e.$buttonIsDanger?Wn["text-error"]:vd};

                    &:hover,
                    &:active {
                        background-color: ${Wn["bg-hover-neutral"]};
                    }
                `;case"link":return F`
                    background-color: transparent;

                    color: ${e.$buttonIsDanger?Wn["text-error"]:xd};
                    &:hover,
                    &:active {
                        background-color: ${Wn["bg-hover-neutral"]};
                    }
                `;case"disabled":return F`
                    background-color: ${Wn["bg-disabled"]};

                    cursor: not-allowed;

                    &:hover {
                        box-shadow: none;
                    }

                    color: ${Wn["text-disabled"]};
                `;default:return F`
                    background-color: ${e.$buttonIsDanger?Wn["bg-error-strong"]:md};

                    ${Zn.MaxWidth.sm} {
                        width: 100%;
                    }

                    color: ${fd};

                    &:hover,
                    &:active {
                        background-color: ${e.$buttonIsDanger?Wn["bg-error-strong-hover"]:pd};
                    }
                `}}}

    // -----------------------------------------------------------------------------
	// BUTTON SIZE + TEXT SIZE
	// -----------------------------------------------------------------------------
	${e=>{switch(e.$buttonSizeStyle){case"small":return F`
                    height: 2.5rem;
                    ${Nn["body-md-semibold"]}

                    ${Zn.MaxWidth.xxs} {
                        height: auto;
                    }
                `;case"large":return F`
                    height: 4rem;
                    ${Nn["heading-md-semibold"]}

                    ${Zn.MaxWidth.xxs} {
                        height: auto;
                    }
                `;default:return F`
                    height: 3rem;
                    ${Nn["heading-xs-semibold"]}

                    ${Zn.MaxWidth.xxs} {
                        height: auto;
                    }
                `}}}
`,$d=$(ld)`
    margin-right: 0.5rem;
`,Fd=(r,n)=>{const{children:o,disabled:i=!1,loading:s=!1,styleType:a="default",danger:l=!1,focusableWhenDisabled:d=!1,onClick:c}=r,u=se(r,["children","disabled","loading","styleType","danger","focusableWhenDisabled","onClick"]),h={$buttonStyle:i?"disabled":a,$buttonSizeStyle:"default",$buttonIsDanger:l};return e(wd,Object.assign({ref:n,"data-testid":u["data-testid"]||"button",disabled:i&&!d,"aria-disabled":i,"aria-busy":s,onClick:i?void 0:c},h,u,{children:[s&&t($d,{}),t("span",{children:o})]}))};Fd.displayName="Button.Default";const Cd=(r,n)=>{const{children:o,disabled:i=!1,loading:s=!1,styleType:a="default",danger:l=!1,focusableWhenDisabled:d=!1,onClick:c}=r,u=se(r,["children","disabled","loading","styleType","danger","focusableWhenDisabled","onClick"]),h={$buttonStyle:i?"disabled":a,$buttonSizeStyle:"small",$buttonIsDanger:l};return e(wd,Object.assign({ref:n,"data-testid":u["data-testid"]||"button",disabled:i&&!d,"aria-disabled":i,"aria-busy":s,onClick:i?void 0:c},h,u,{children:[s&&t($d,{}),t("span",{children:o})]}))};Cd.displayName="Button.Small";const Ed=(r,n)=>{const{children:o,disabled:i=!1,loading:s=!1,styleType:a="default",danger:l=!1,focusableWhenDisabled:d=!1,onClick:c}=r,u=se(r,["children","disabled","loading","styleType","danger","focusableWhenDisabled","onClick"]),h={$buttonStyle:i?"disabled":a,$buttonSizeStyle:"large",$buttonIsDanger:l};return e(wd,Object.assign({ref:n,"data-testid":u["data-testid"]||"button",disabled:i&&!d,"aria-disabled":i,"aria-busy":s,onClick:i?void 0:c},h,u,{children:[s&&t($d,{}),t("span",{children:o})]}))};Ed.displayName="Button.Large";const Sd={Default:o.forwardRef(Fd),Small:o.forwardRef(Cd),Large:o.forwardRef(Ed)};var kd={exports:{}};kd.exports=function(){var e={LTS:"h:mm:ss A",LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D, YYYY",LLL:"MMMM D, YYYY h:mm A",LLLL:"dddd, MMMM D, YYYY h:mm A"},t=/(\[[^[]*\])|([-_:/.,()\s]+)|(A|a|YYYY|YY?|MM?M?M?|Do|DD?|hh?|HH?|mm?|ss?|S{1,3}|z|ZZ?)/g,r=/\d\d/,n=/\d\d?/,o=/\d*[^-_:/,()\s\d]+/,i={},s=function(e){return(e=+e)+(e>68?1900:2e3)},a=function(e){return function(t){this[e]=+t}},l=[/[+-]\d\d:?(\d\d)?|Z/,function(e){(this.zone||(this.zone={})).offset=function(e){if(!e)return 0;if("Z"===e)return 0;var t=e.match(/([+-]|\d\d)/g),r=60*t[1]+(+t[2]||0);return 0===r?0:"+"===t[0]?-r:r}(e)}],d=function(e){var t=i[e];return t&&(t.indexOf?t:t.s.concat(t.f))},c=function(e,t){var r,n=i.meridiem;if(n){for(var o=1;o<=24;o+=1)if(e.indexOf(n(o,0,t))>-1){r=o>12;break}}else r=e===(t?"pm":"PM");return r},u={A:[o,function(e){this.afternoon=c(e,!1)}],a:[o,function(e){this.afternoon=c(e,!0)}],S:[/\d/,function(e){this.milliseconds=100*+e}],SS:[r,function(e){this.milliseconds=10*+e}],SSS:[/\d{3}/,function(e){this.milliseconds=+e}],s:[n,a("seconds")],ss:[n,a("seconds")],m:[n,a("minutes")],mm:[n,a("minutes")],H:[n,a("hours")],h:[n,a("hours")],HH:[n,a("hours")],hh:[n,a("hours")],D:[n,a("day")],DD:[r,a("day")],Do:[o,function(e){var t=i.ordinal,r=e.match(/\d+/);if(this.day=r[0],t)for(var n=1;n<=31;n+=1)t(n).replace(/\[|\]/g,"")===e&&(this.day=n)}],M:[n,a("month")],MM:[r,a("month")],MMM:[o,function(e){var t=d("months"),r=(d("monthsShort")||t.map((function(e){return e.slice(0,3)}))).indexOf(e)+1;if(r<1)throw new Error;this.month=r%12||r}],MMMM:[o,function(e){var t=d("months").indexOf(e)+1;if(t<1)throw new Error;this.month=t%12||t}],Y:[/[+-]?\d+/,a("year")],YY:[r,function(e){this.year=s(e)}],YYYY:[/\d{4}/,a("year")],Z:l,ZZ:l};function h(r){var n,o;n=r,o=i&&i.formats;for(var s=(r=n.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g,(function(t,r,n){var i=n&&n.toUpperCase();return r||o[n]||e[n]||o[i].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g,(function(e,t,r){return t||r.slice(1)}))}))).match(t),a=s.length,l=0;l<a;l+=1){var d=s[l],c=u[d],h=c&&c[0],g=c&&c[1];s[l]=g?{regex:h,parser:g}:d.replace(/^\[|\]$/g,"")}return function(e){for(var t={},r=0,n=0;r<a;r+=1){var o=s[r];if("string"==typeof o)n+=o.length;else{var i=o.regex,l=o.parser,d=e.slice(n),c=i.exec(d)[0];l.call(t,c),e=e.replace(c,"")}}return function(e){var t=e.afternoon;if(void 0!==t){var r=e.hours;t?r<12&&(e.hours+=12):12===r&&(e.hours=0),delete e.afternoon}}(t),t}}return function(e,t,r){r.p.customParseFormat=!0,e&&e.parseTwoDigitYear&&(s=e.parseTwoDigitYear);var n=t.prototype,o=n.parse;n.parse=function(e){var t=e.date,n=e.utc,s=e.args;this.$u=n;var a=s[1];if("string"==typeof a){var l=!0===s[2],d=!0===s[3],c=l||d,u=s[2];d&&(u=s[2]),i=this.$locale(),!l&&u&&(i=r.Ls[u]),this.$d=function(e,t,r){try{if(["x","X"].indexOf(t)>-1)return new Date(("X"===t?1e3:1)*e);var n=h(t)(e),o=n.year,i=n.month,s=n.day,a=n.hours,l=n.minutes,d=n.seconds,c=n.milliseconds,u=n.zone,g=new Date,m=s||(o||i?1:g.getDate()),p=o||g.getFullYear(),f=0;o&&!i||(f=i>0?i-1:g.getMonth());var b=a||0,y=l||0,v=d||0,x=c||0;return u?new Date(Date.UTC(p,f,m,b,y,v,x+60*u.offset*1e3)):r?new Date(Date.UTC(p,f,m,b,y,v,x)):new Date(p,f,m,b,y,v,x)}catch(e){return new Date("")}}(t,a,n),this.init(),u&&!0!==u&&(this.$L=this.locale(u).$L),c&&t!=this.format(a)&&(this.$d=new Date("")),i={}}else if(a instanceof Array)for(var g=a.length,m=1;m<=g;m+=1){s[1]=a[m-1];var p=r.apply(this,s);if(p.isValid()){this.$d=p.$d,this.$L=p.$L,this.init();break}m===g&&(this.$d=new Date(""))}else o.call(this,e)}}}();var Dd=de(kd.exports),Id={exports:{}};Id.exports=function(e,t,r){t.prototype.isBetween=function(e,t,n,o){var i=r(e),s=r(t),a="("===(o=o||"()")[0],l=")"===o[1];return(a?this.isAfter(i,n):!this.isBefore(i,n))&&(l?this.isBefore(s,n):!this.isAfter(s,n))||(a?this.isBefore(i,n):!this.isAfter(i,n))&&(l?this.isAfter(s,n):!this.isBefore(s,n))}};var Td=de(Id.exports),Bd={exports:{}};Bd.exports=function(e,t){t.prototype.isSameOrAfter=function(e,t){return this.isSame(e,t)||this.isAfter(e,t)}};var Ad=de(Bd.exports),zd={exports:{}};zd.exports=function(e,t){t.prototype.isSameOrBefore=function(e,t){return this.isSame(e,t)||this.isBefore(e,t)}};var Od,Md,_d,Rd=de(zd.exports),Hd={exports:{}},jd=de(Hd.exports=(Od={year:0,month:1,day:2,hour:3,minute:4,second:5},Md={},function(e,t,r){var n,o=function(e,t,r){void 0===r&&(r={});var n=new Date(e),o=function(e,t){void 0===t&&(t={});var r=t.timeZoneName||"short",n=e+"|"+r,o=Md[n];return o||(o=new Intl.DateTimeFormat("en-US",{hour12:!1,timeZone:e,year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit",timeZoneName:r}),Md[n]=o),o}(t,r);return o.formatToParts(n)},i=function(e,t){for(var n=o(e,t),i=[],s=0;s<n.length;s+=1){var a=n[s],l=a.type,d=a.value,c=Od[l];c>=0&&(i[c]=parseInt(d,10))}var u=i[3],h=24===u?0:u,g=i[0]+"-"+i[1]+"-"+i[2]+" "+h+":"+i[4]+":"+i[5]+":000",m=+e;return(r.utc(g).valueOf()-(m-=m%1e3))/6e4},s=t.prototype;s.tz=function(e,t){void 0===e&&(e=n);var o=this.utcOffset(),i=this.toDate(),s=i.toLocaleString("en-US",{timeZone:e}),a=Math.round((i-new Date(s))/1e3/60),l=r(s,{locale:this.$L}).$set("millisecond",this.$ms).utcOffset(15*-Math.round(i.getTimezoneOffset()/15)-a,!0);if(t){var d=l.utcOffset();l=l.add(o-d,"minute")}return l.$x.$timezone=e,l},s.offsetName=function(e){var t=this.$x.$timezone||r.tz.guess(),n=o(this.valueOf(),t,{timeZoneName:e}).find((function(e){return"timezonename"===e.type.toLowerCase()}));return n&&n.value};var a=s.startOf;s.startOf=function(e,t){if(!this.$x||!this.$x.$timezone)return a.call(this,e,t);var n=r(this.format("YYYY-MM-DD HH:mm:ss:SSS"),{locale:this.$L});return a.call(n,e,t).tz(this.$x.$timezone,!0)},r.tz=function(e,t,o){var s=o&&t,a=o||t||n,l=i(+r(),a);if("string"!=typeof e)return r(e).tz(a);var d=function(e,t,r){var n=e-60*t*1e3,o=i(n,r);if(t===o)return[n,t];var s=i(n-=60*(o-t)*1e3,r);return o===s?[n,o]:[e-60*Math.min(o,s)*1e3,Math.max(o,s)]}(r.utc(e,s).valueOf(),l,a),c=d[0],u=d[1],h=r(c).utcOffset(u);return h.$x.$timezone=a,h},r.tz.guess=function(){return Intl.DateTimeFormat().resolvedOptions().timeZone},r.tz.setDefault=function(e){n=e}}));ko.extend(Td),ko.extend(Rd),ko.extend(Ad),ko.extend(Dd),ko.extend(jd),function(e){e.generateDays=e=>{const t=e.startOf("month"),r=ko(t).startOf("week");return Ld(r).map((e=>Pd(e)))},e.generateDaysForCurrentWeek=e=>{const t=e.startOf("week");return Pd(t)},e.generateMonths=e=>{const t=[];for(let r=0;r<12;r++){const n=e.month(r);t.push(ko(n))}return t},e.generateDecadeOfYears=e=>{const t=e.year(),r=10*Math.floor(t/10),n=e.year(r),o=[n.subtract(1,"year"),n];for(let e=1;e<11;e++)o.push(n.add(e,"year"));return o},e.getStartEndDecade=e=>{const t=10*Math.floor(+e.format("YYYY")/10);return{beginDecade:t,endDecade:+ko(`${t+9}-01-01`).format("YYYY")}},e.convertTo12HourFormat=e=>{const t=ko(e,"HH:mm");return t.isValid()?t.format("h:mm a"):""},e.isWithinRange=(e,t,r,n="day")=>!t&&!r||(t&&r?e.isBetween(t,r,n,"[]"):t?e.isSameOrAfter(t,n):e.isSameOrBefore(r,n)),e.isPreviousMonthWithinRange=(t,r)=>e.isWithinRange(t.subtract(1,"month"),r,void 0,"month"),e.isPreviousYearWithinRange=(t,r)=>e.isWithinRange(t.subtract(1,"year"),r,void 0,"year"),e.isPreviousDecadeWithinRange=(t,r)=>{const{beginDecade:n}=e.getStartEndDecade(t);return e.isWithinRange(t.year(n).subtract(1,"year"),r,void 0,"year")},e.isNextMonthWithinRange=(t,r)=>e.isWithinRange(t.add(1,"month"),void 0,r,"month"),e.isNextYearWithinRange=(t,r)=>e.isWithinRange(t.add(1,"year"),void 0,r,"year"),e.isNextDecadeWithinRange=(t,r)=>{const{endDecade:n}=e.getStartEndDecade(t);return e.isWithinRange(t.year(n).add(1,"year"),void 0,r,"year")},e.getWeekStartEnd=e=>({start:e.startOf("week").format("YYYY-MM-DD"),end:e.endOf("week").format("YYYY-MM-DD")}),e.getFixedRangeStartEnd=(e,t)=>({start:e.format("YYYY-MM-DD"),end:e.add(t-1,"day").format("YYYY-MM-DD")}),e.isDisabledDay=(t,r,n,o)=>{const i=e.isWithinRange(t,n?ko(n):void 0,o?ko(o):void 0),s=r&&r.includes(t.format("YYYY-MM-DD"));return!i||!!s}}(_d||(_d={}));const Ld=e=>{const t=[e];for(let r=1;r<6;r++){const n=e.add(r,"week");t.push(n)}return t},Pd=e=>{const t=[];for(let r=0;r<7;r++){const n=e.add(r,"day");t.push(n)}return t},Wd=[1,3,5,7,8,10,12],Nd=[4,6,9,11];var Vd,Yd;!function(e){e.clampDay=(t,r,n)=>{const o=parseInt(t),i=parseInt(r),s=parseInt(n);return 0==o?"1":Wd.includes(i)?Math.min(o,31).toString():Nd.includes(i)?Math.min(o,30).toString():2===i?e.isLeapYear(s)?Math.min(o,29).toString():Math.min(o,28).toString():t},e.clampMonth=e=>{const t=parseInt(e);return 0==t?"1":t>12?"12":e},e.isLeapYear=e=>e%4==0&&e%100!=0||e%400==0,e.getTimeDiffInMinutes=(e,t,r="HH:mm")=>{const n=ko(e,r);return ko(t,r).diff(n,"minute")},e.toDayjs=e=>e?ko(e):ko(),e.addMinutesToTime=(e,t,r="HH:mm")=>ko(e,r).add(t,"minutes").format(r),e.isSame=(e,t,r="day")=>ko(e).isSame(ko(t),r)}(Vd||(Vd={})),function(e){e.isDateDisabled=(e,t)=>{const{disabledDates:r,minDate:n,maxDate:o}=t;return!!(e&&r&&r.length&&r.includes(e))||(!(!n||!ko(e).isBefore(n,"day"))||!(!o||!ko(e).isAfter(o,"day")))},e.sanitizeInput=e=>{if(e){if(ko(e).isValid())return e}return""}}(Yd||(Yd={}));const Ud=(...e)=>t=>{const r=[];for(const n of e)if("function"==typeof n){const e=n(t),o="function"==typeof e;r.push(o?e:()=>n(null))}else n.current=t,r.push((()=>{n.current=null}));return()=>{for(const e of r)e()}};var qd;function Gd(e){const t=i(null);return h((()=>{t.current=e}),[e]),m(((...e)=>{var r;return null===(r=t.current)||void 0===r?void 0:r.call(t,...e)}),[])}!function(e){e.generate=()=>Math.random().toString(36).substring(2,9)}(qd||(qd={}));const Zd=e=>{const t=(e=>{const t=i(e),r=i();return s((()=>{r.current=t.current,t.current=e}),[e]),r.current})(e);return t!==e},Qd=e=>{const{textSize:t}=e||{};return F`
        // Text styling
        ${t&&Nn[`${t}-regular`]}

        strong {
            font-weight: ${Nn.Spec["weight-semibold"]};
            ${t&&Nn[`${t}-semibold`]};
        }

        p {
            margin: 0;
        }

        // Link styling
        a {
            font-weight: ${Nn.Spec["weight-semibold"]};
            ${t&&Nn[`${t}-semibold`]}
            color: ${Wn.hyperlink};
            text-decoration: none;

            svg {
                color: ${Wn["icon-primary"]};
                height: 1lh;
                width: 1em;
                margin-left: 0.4rem;
                vertical-align: middle;
            }

            &:hover,
            &:active,
            &:visited,
            &:focus {
                color: ${Wn["hyperlink-hover"]};

                svg {
                    color: ${Wn["icon-hover"]};
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
    `},Xd=e=>F`
    display: -webkit-box;
    -webkit-line-clamp: ${e};
    -webkit-box-orient: vertical;
    overflow: hidden;
`,Kd=(e,t,r=!1)=>F`
        ${Nn[`${e}-${t}`]}
        ${r?"margin-bottom: 1.05em;":"margin-bottom: 0;"}
    `,Jd=e=>{if(e)return F`
            ${Xd(e)}
        `},ec=(e,t,r,n,o)=>F`
    ${Kd(e,t||"regular",n)}
    ${((e=!1,t=!1,r)=>t?F`
            display: block;
            ${Jd(r)}
        `:e?F`
            display: inline;
        `:F`
            display: block;
            ${Jd(r)}
        `)(r,n,o)}
    color: ${Wn.text};
`,tc=$.div`
    ${e=>ec(e.$textStyle,e.$weight,e.$inline,e.$paragraph,e.$maxLines)}
`,rc=$.a`
    ${e=>F`
        ${Kd(e.$textStyle,e.$weight||"regular")}
        color: ${Wn.hyperlink};
        text-decoration: none;

        &:hover,
        &:active,
        &:focus {
            color: ${Wn["text-hover"]};
        }
    `}
`,nc=$(_)`
    height: 1lh;
    width: 1em;
    margin-left: 0.4em;
    vertical-align: middle;
`;var oc;!function(r){const n=(e,r,n)=>{const i=(n,o)=>{var{weight:i,inline:s,paragraph:a,maxLines:l}=n,d=se(n,["weight","inline","paragraph","maxLines"]);return t(tc,Object.assign({ref:o,as:s?"span":e,$textStyle:r,$weight:i,$inline:s,$paragraph:a,$maxLines:l},d))};return i.displayName=`Typography.${n}`,o.forwardRef(i)};r.HeadingXXL=n("h1","heading-xxl","HeadingXXL"),r.HeadingXL=n("h2","heading-xl","HeadingXL"),r.HeadingLG=n("h3","heading-lg","HeadingLG"),r.HeadingMD=n("h4","heading-md","HeadingMD"),r.HeadingSM=n("h5","heading-sm","HeadingSM"),r.HeadingXS=n("h6","heading-xs","HeadingXS");const i=(e,r)=>{const n=(r,n)=>{var{weight:o,inline:i,paragraph:s,maxLines:a}=r,l=se(r,["weight","inline","paragraph","maxLines"]);return t(tc,Object.assign({ref:n,as:i?"span":"p",$textStyle:e,$weight:o,$inline:i,$paragraph:s,$maxLines:a},l))};return n.displayName=`Typography.${r}`,o.forwardRef(n)};r.BodyBL=i("body-baseline","BodyBL"),r.BodyMD=i("body-md","BodyMD"),r.BodySM=i("body-sm","BodySM"),r.BodyXS=i("body-xs","BodyXS");const s=(r,n)=>{const i=(n,o)=>{var{weight:i,children:s,external:a}=n,l=se(n,["weight","children","external"]);return e(rc,Object.assign({ref:o,$textStyle:r,$weight:i},l,{children:[s,a&&t(nc,{})]}))};return i.displayName=`Typography.${n}`,o.forwardRef(i)};r.LinkBL=s("body-baseline","LinkBL"),r.LinkMD=s("body-md","LinkMD"),r.LinkSM=s("body-sm","LinkSM"),r.LinkXS=s("body-xs","LinkXS")}(oc||(oc={}));const ic=$.div`
    padding: ${Un["spacing-8"]} ${Un["spacing-16"]};
    display: flex;

    ${e=>{let t,r;switch(e.$type){case"error":t=Wn["bg-error"](e),r=Wn["border-error"](e);break;case"success":t=Wn["bg-success"](e),r=Wn["border-success"](e);break;case"warning":default:t=Wn["bg-warning"](e),r=Wn["border-warning"](e);break;case"info":t=Wn["bg-info"](e),r=Wn["border-info"](e);break;case"description":t=Wn["bg-strong"](e),r=Wn["border-strong"](e)}return F`
            background: ${t};
            border-left: ${Yn["width-020"]} ${Yn.solid}
                ${r};
        `}}

    color: ${Wn.text};
    ${e=>"small"===e.$sizeType?Qd({textSize:"body-sm"}):Qd({textSize:"body-md"})}
`,sc=$.div`
    display: flex;
    align-items: center;
    height: 1lh;
    margin-right: ${Un["spacing-8"]};

    ${e=>{let t;const r="small"===e.$sizeType?"1.25rem":"1.5rem";switch(e.$type){case"error":t=Wn["icon-error"](e);break;case"success":t=Wn["icon-success"](e);break;case"warning":default:t=Wn["icon-warning"](e);break;case"info":t=Wn["icon-info"](e);break;case"description":t=Wn["icon-subtle"](e)}return F`
            svg {
                color: ${t};
                width: ${r};
                height: ${r};
            }
        `}}
`,ac=$(oc.LinkSM)`
    ${e=>"small"===e.$sizeType?F`
                ${Nn["body-sm-semibold"]}
                margin-top: ${Un["spacing-4"]};
            `:F`
                ${Nn["body-md-semibold"]}
                margin-top: ${Un["spacing-8"]};
            `}
    display: flex;
    align-items: center;
    align-self: flex-start;

    svg {
        height: 1rem;
        width: 1rem;
        margin-left: ${Un["spacing-4"]};
    }
`,lc=$.div`
    display: flex;
    flex-direction: column;
    flex: 1;
    overflow-wrap: anywhere;
`,dc=$.div`
    display: flex;
    flex-direction: column;
    flex: 1;
    ${e=>{if(e.$showMore&&e.$hasActionLink)return F`
                margin-bottom: ${Un["spacing-8"]};
            `}}
    ${e=>{const t="linear-gradient(to bottom, black 50%, transparent 100%)";if(!e.$showMore&&e.$maxCollapsedHeight)return`\n                max-height: ${e.$maxCollapsedHeight}px;\n\t\t\t\toverflow: hidden;\n                -webkit-mask-image: ${t};\n                mask-image: ${t};\n\t\t\t`}}
`,cc=$.button`
    ${e=>"small"===e.$sizeType?F`
                ${Nn["body-sm-semibold"]}
            `:F`
                ${Nn["body-md-semibold"]}
            `}

    display: flex;
    align-items: center;
    align-self: flex-start;
    gap: ${Un["spacing-4"]};
    margin-top: ${Un["spacing-8"]};

    cursor: pointer;
    user-select: none;
    border: none;
    background: transparent;

    color: ${Wn["text-primary"]};
`,uc=$(w)`
    transform: rotate(${e=>e.$expanded?180:0}deg);
    transition: transform ${Vn["duration-350"]} ${Vn["ease-standard"]};
`,hc=$.div`
    height: 1.625rem;
    width: 1.625rem;
    margin-right: 0.5rem;
    flex-shrink: 0;

    svg {
        height: 100%;
        width: 100%;
    }

    ${e=>e.$disabled?e.$active?F`
                    color: ${Wn["icon-selected-disabled"]};
                `:F`
                    color: ${Wn["icon-disabled-subtle"]};
                `:e.$active?F`
                color: ${Wn["icon-selected"]};
            `:F`
            color: ${Wn["icon-subtle"]};
        `};
`,gc=F`
    margin-bottom: ${e=>e.$bottomMargin||0}rem;

    // Counter matters
    counter-reset: list;

    li {
        font-weight: ${Nn.Spec["weight-regular"]};
        ${e=>e.$size&&Nn[`${e.$size}-regular`]}
        color: ${Wn.text};
    }

    // nested lists styling
    ol,
    ul {
        margin-top: 0.5rem;
        margin-bottom: 0.5rem;
    }
`,mc=$.ol`
    ${gc}

    margin-left: 3rem;

    ${Zn.MaxWidth.lg} {
        margin-left: 2.5rem;
    }

    li {
        position: relative;
    }

    ${e=>{const{reversed:t}=e,r=e.$counterType||"decimal",n=e.$counterSeparator||")";return F`
            li:before {
                content: counter(list, ${r}) "${n}";
                counter-increment: ${t?"list -1":"list"};
                position: absolute;
                left: -2rem;
            }
        `}}

    ${e=>{const{reversed:t,start:r}=e;if(r){return F`
                counter-reset: list ${t?r+1:r-1};
            `}}}

    list-style-position: outside;
    list-style-type: none;

    ul > li:before {
        content: "";
    }
`,pc=$.ul`
    ${gc}

    margin-left: 2.5rem;
    list-style-type: ${e=>e.$bulletType||"disc"};
`,fc=e=>{var{size:r,bulletType:n,bottomMargin:o,children:i}=e,s=se(e,["size","bulletType","bottomMargin","children"]);return t(pc,Object.assign({$size:r,$bulletType:n,$bottomMargin:o},s,{children:i}))};fc.displayName="TextList.Ul";const bc=e=>{var{size:r,counterType:n,counterSeparator:o,bottomMargin:i,children:s}=e,a=se(e,["size","counterType","counterSeparator","bottomMargin","children"]);return t(mc,Object.assign({$size:r,$counterType:n,$counterSeparator:o,$bottomMargin:i},a,{children:s}))};bc.displayName="TextList.Ol";const yc=fc,vc=$.div`
    position: relative;
    display: inline-flex;
    min-width: 10.375rem;
    border-radius: ${qn.sm};
    border-width: 1px;
    border-style: solid;
    overflow: hidden;
    flex-direction: column;
    height: fit-content;
    background: ${Wn.bg};

    &:has(input:focus-visible) {
        outline: 2px solid ${Wn["focus-ring"]};
        outline-offset: 0;
    }

    ${e=>{if(!e.$indicator)return F`
                justify-content: center;
            `}}

    // Container min width to fit content
    ${e=>{if(e.$useContentWidth)return F`
                min-width: unset;
            `}}

    // apply container border and header background color
    ${e=>"no-border"===e.$styleType?e.$error?e.$disabled?F`
                            border-color: ${Wn["border-error"]};
                        `:F`
                            border-color: ${Wn["border-error"]};

                            &:has(${Ec}:hover) {
                                background: ${Wn["bg-hover-subtle"]};
                            }
                        `:e.$disabled?e.$selected?F`
                            border: none;
                            background: ${Wn["bg-selected-disabled"]};
                        `:F`
                            border: none;
                        `:e.$selected?F`
                        border: none;
                        background: ${Wn["bg-selected"]};

                        &:has(${Ec}:hover) {
                            background: ${Wn["bg-selected-hover"]};

                            & ${$c} {
                                color: ${Wn["text-selected-hover"]};
                            }

                            & ${Oc} {
                                color: ${Wn["icon-selected-hover"]};
                            }
                        }
                    `:F`
                    border: none;

                    &:has(${Ec}:hover) {
                        background: ${Wn["bg-hover-subtle"]};
                    }
                `:e.$error?e.$disabled?F`
                            border-color: ${Wn["border-error"]};
                        `:F`
                            border-color: ${Wn["border-error"]};

                            &:has(${Ec}:hover) {
                                background: ${Wn["bg-hover-subtle"]};
                            }
                        `:e.$disabled?e.$selected?F`
                            border-color: ${Wn["border-selected-disabled"]};
                            background: ${Wn["bg-selected-disabled"]};
                        `:F`
                            border-color: ${Wn["border-disabled"]};
                            background: ${Wn["bg-disabled"]};
                        `:e.$selected?F`
                        border-color: ${Wn["border-selected"]};
                        background: ${Wn["bg-selected"]};

                        &:has(${Ec}:hover) {
                            background: ${Wn["bg-selected-hover"]};

                            & ${$c} {
                                color: ${Wn["text-selected-hover"]};
                            }

                            & ${Oc} {
                                color: ${Wn["icon-selected-hover"]};
                            }
                        }
                    `:F`
                    border-color: ${Wn.border};

                    &:has(${Ec}:hover) {
                        background: ${Wn["bg-hover-subtle"]};
                    }
                `}
`,xc=$.input`
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
`,wc=$.div`
    display: flex;
`,$c=$.div`
    display: flex;
    flex-direction: column;
    overflow-wrap: anywhere;
    width: 100%;
    overflow: hidden;

    // apply header container text color
    ${e=>e.$disabled?e.$selected?F`
                    color: ${Wn["text-selected-disabled"]};
                `:F`
                    color: ${Wn["text-disabled"]};
                `:e.$selected?F`
                color: ${Wn["text-selected"]};
            `:F`
            color: ${Wn.text};
        `}
`,Fc=$.label`
    ${Nn["body-baseline-regular"]}
    overflow: hidden;
    display: -webkit-box;
    text-overflow: ellipsis;
    -webkit-box-orient: vertical;
    overflow-wrap: break-word;
    -webkit-line-clamp: ${e=>{var t,r;return null!==(r=null===(t=e.$maxLines)||void 0===t?void 0:t.desktop)&&void 0!==r?r:"none"}};
    ${Zn.MaxWidth.lg} {
        -webkit-line-clamp: ${e=>{var t,r;return null!==(r=null===(t=e.$maxLines)||void 0===t?void 0:t.tablet)&&void 0!==r?r:"none"}};
    }
    ${Zn.MaxWidth.sm} {
        -webkit-line-clamp: ${e=>{var t,r;return null!==(r=null===(t=e.$maxLines)||void 0===t?void 0:t.mobile)&&void 0!==r?r:"none"}};
    }
`,Cc=$.div`
    ${Nn["body-md-regular"]}
    margin-top: 0.5rem;

    z-index: 1; // forces sublabel to render above the input
    pointer-events: none; // to allow click events to be passed to the input

    strong,
    b {
        ${Nn["body-md-semibold"]}
    }
`,Ec=$.div`
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
`,Sc=$.div`
    display: flex;
    height: 100%;
    width: 100%;
    position: relative;
    padding: ${e=>e.$addPadding?"0.6875rem 0rem 0.6875rem 1rem":"0.6875rem 1rem"};
`,kc=$.button`
    color: ${e=>e.$disabled?Wn["text-disabled"]:Wn["text-error"]};
    white-space: nowrap;
    ${Nn["body-md-semibold"]}
    height: fit-content;
    padding: 0.6875rem 1rem 0.6875rem 0.5rem;
    border: none;
    background: none;

    cursor: ${e=>e.$disabled?"not-allowed":"pointer"};
`,Dc=$.button`
    color: ${e=>e.disabled?Wn["text-disabled"]:Wn["text-primary"]};
    ${Nn["body-baseline-semibold"]}
    display: flex;
    align-items: center;
    justify-content: flex-end;
    border: none;
    background-color: ${Wn.bg};
    cursor: ${e=>e.disabled?"not-allowed":"pointer"};
    padding: 0 1rem 0.6875rem 1rem;
    padding-top: ${e=>e.$paddingTopRequired?"0.6875rem":"0rem"};
    width: 100%;

    svg {
        width: 1em;
        height: 1em;
        margin-left: 0.5rem;
    }
`,Ic=$.div`
    width: 100%;
    color: ${e=>e.$disabled?Wn["text-disabled"]:Wn["text-error"]};
    border: none;
    background: ${Wn.bg};
    cursor: ${e=>e.$disabled?"not-allowed":"pointer"};
    padding: 0.6875rem 1rem 0.5rem 1rem;
`,Tc=$((r=>{var{type:n,className:o,children:i,actionLink:l,actionLinkIcon:d,sizeType:c="default",showIcon:u=!1,customIcon:h,maxCollapsedHeight:g}=r,m=se(r,["type","className","children","actionLink","actionLinkIcon","sizeType","showIcon","customIcon","maxCollapsedHeight"]);const[p,f]=a(!1),[b,y]=a(!1),{height:v,ref:x}=Si();s((()=>{w()}),[g,v]);const w=()=>{f(!g),y($())},$=()=>!(!v||!g)&&v>g;return e(ic,{className:o,$type:n,$sizeType:c,"data-testid":m["data-testid"],children:[u&&t(sc,{$sizeType:c,$type:n,children:(()=>{if(n&&h)return h;switch(n){case"success":return t(M,{});case"warning":return t(z,{});case"error":return t(A,{});case"info":case"description":return t(O,{});default:return null}})()}),e(lc,{children:[e(dc,{$maxCollapsedHeight:$()?g:void 0,$showMore:p,$hasActionLink:!!l,children:[t("div",{ref:x,children:i}),l?e(ac,Object.assign({"data-testid":"action-link",$type:n,$sizeType:c},l,{children:[l.children,d||t(B,{})]})):null]}),b&&e(cc,{$sizeType:c,$type:n,type:"button",onClick:()=>f(!p),children:["Show ",p?"less":"more",t(uc,{$expanded:p})]})]})]})}))`
    width: 100%;
    user-select: none;
`,Bc=$.div`
    padding: 0 1rem;
    padding-top: 0.6875rem;
    padding-bottom: ${e=>e.$isFinalItem?"0.6875rem":"0.5rem"};
    background-color: ${Wn.bg};
    ${Qd({textSize:"body-md"})}

    ${e=>e.$disabled?F`
                color: ${Wn["text-disabled"]};
            `:e.$selected?F`
                color: ${Wn["text-selected"]};
            `:F`
                color: ${Wn.text};
            `}
`,Ac=$(oc.BodyMD)`
    color: ${e=>e.$disabled?Wn["text-disabled"]:Wn["text-error"]};
`,zc=$(yc)`
    color: ${e=>e.$disabled?Wn["text-disabled"]:Wn["text-error"]};
`,Oc=$((({type:e,active:r=!1,disabled:n,className:o})=>{let i;switch(e){case"checkbox":i=t(r?P:L,{});break;case"radio":i=t(r?H:R,{});break;case"tick":i=t(W,{});break;case"cross":i=t(j,{});break;default:i=null}return t(hc,{className:o,$active:r,$disabled:n,"aria-hidden":!0,children:i})}))`
    ${e=>e.$disabled?e.$selected?F`
                    color: ${Wn["icon-selected-disabled"]};
                `:F`
                    color: ${Wn["icon-disabled-subtle"]};
                `:e.$selected?F`
                color: ${Wn["icon-selected"]};
            `:F`
            color: ${Wn["icon-subtle"]};
        `};
`,Mc=$.button`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: ${Un["spacing-24"]};
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

        ${({$highlight:e})=>e&&F`
                background-color: ${Wn["bg-hover-neutral"]};
            `}
    }
`,_c=o.forwardRef(((e,r)=>{var{children:n,focusHighlight:o=!0,focusOutline:i="none",type:s="button"}=e,a=se(e,["children","focusHighlight","focusOutline","type"]);return t(Mc,Object.assign({ref:r,$outline:i,$highlight:o,type:s},a,{children:n}))})),Rc=td($.div`
    position: absolute;
    top: calc(3rem + ${Un["spacing-8"]});
    left: 0;
    overflow: hidden;
    z-index: 1;

    ${Zn.MaxWidth.xxs} {
        max-width: 100%;
    }
`),Hc=$.div`
    position: relative;
    width: 100%;
    padding: ${Un["spacing-8"]} ${Un["spacing-20"]}
        ${Un["spacing-24"]} ${Un["spacing-20"]};
    display: flex;
    flex-direction: column;
    background: ${Wn.bg};
    border: ${Yn["width-010"]} ${Yn.solid} ${Wn.border};
    border-radius: ${qn.sm};
`,jc=$.div`
    display: flex;
    align-items: center;
    justify-content: space-between;

    ${Zn.MaxWidth.xxs} {
        flex-direction: column;
        width: 100%;
    }
`,Lc=$.div`
    display: flex;
    justify-content: flex-end;
    margin-top: ${Un["spacing-16"]};
    gap: ${Un["spacing-8"]} ${Un["spacing-16"]};

    ${Zn.MaxWidth.xxs} {
        flex-direction: column-reverse; // FIXME: this breaks tab focus
        margin-top: ${Un["spacing-32"]};
    }
`,Pc=$.div`
    display: flex;
    align-items: center;
    margin-right: ${Un["spacing-32"]};

    ${Zn.MaxWidth.xxs} {
        margin-right: 0;
        width: 100%;
    }
`,Wc=$.div`
    display: flex;
    gap: ${Un["spacing-8"]};

    ${Zn.MaxWidth.lg} {
        flex-direction: column;
    }

    ${Zn.MaxWidth.xxs} {
        flex-direction: row;
        width: 100%;
    }
`,Nc=$.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    ${Zn.MaxWidth.xxs} {
        width: 6rem;
    }
`,Vc=$(_c)`
    width: 5rem;
    padding: ${Un["spacing-16"]} 0;
    color: ${Wn.icon};

    svg {
        height: 1rem;
        width: 1rem;
    }

    &:hover {
        color: ${Wn["icon-hover"]};
    }
`,Yc=$(oc.BodyBL)`
    flex-shrink: 0;
    width: 1.5rem;
    text-align: center;
`,Uc=$(fo)`
    height: calc(3rem - 2px);
    width: 5rem;
    display: flex;
    align-items: center;
    justify-content: center;

    ${Zn.MaxWidth.xxs} {
        width: 100%;
    }
`,qc=$(yo)`
    text-align: center;
    width: 100%;

    &:focus::placeholder {
        color: transparent;
    }
`,Gc=$((n=>{var{type:o="checkbox",indicator:l,checked:d,styleType:c="default",children:u,childrenMaxLines:h,subLabel:g,disabled:m,error:f,name:b,id:y,className:v,compositeSection:x,removable:w,onRemove:$,"data-testid":F,onChange:C,useContentWidth:E,"aria-describedby":D}=n,I=se(n,["type","indicator","checked","styleType","children","childrenMaxLines","subLabel","disabled","error","name","id","className","compositeSection","removable","onRemove","data-testid","onChange","useContentWidth","aria-describedby"]);const{collapsible:T=!0,errors:B,children:A,initialExpanded:z}=x||{},[O,M]=a(d),[_,R]=a(!!z),H=p((()=>{const e=Array.isArray(B)&&(null==B?void 0:B.length)>0,t=!Array.isArray(B)&&!!B;return e||t}),[B]),[j]=a(qd.generate()),L=y?`${y}`:`tg-${j}`,P=i(null);s((()=>{M(d)}),[d]),s((()=>{O&&R(null==z||z)}),[O]);const W=e=>{if(!m){if(C)return void C(e);switch(o){case"checkbox":M((e=>!e));break;case"radio":case"yes":case"no":O||M(!0)}}},N=()=>{m||R(!_)},V=()=>{m||!$||$()},Y=()=>{var e;null===(e=null==P?void 0:P.current)||void 0===e||e.click()},U=e=>{e.stopPropagation()},q=()=>{let e;switch(o){case"yes":e="tick";break;case"no":e="cross";break;case"checkbox":case"radio":e=o}return t(Oc,{type:e,active:O,disabled:m,$selected:O,$disabled:m})},G=()=>{if(!g)return null;let e;return e="function"==typeof g?g():g,t(Cc,{"data-id":"toggle-sublabel",id:`${L}-sublabel`,"aria-hidden":!0,children:e})},Z=n=>e(r,{children:[t(Ac,{weight:"semibold",$disabled:m,children:"Error"}),t(zc,{$disabled:m,children:null==n?void 0:n.map(((e,r)=>t("li",{id:`${L}-error-list-item-${r}`,children:t(Ac,{weight:"semibold",$disabled:m,children:e})},r)))})]});return e(vc,{$selected:O,$disabled:m,className:v,$styleType:c,$error:f,$indicator:l,$useContentWidth:E,id:y,"data-testid":F,children:[(()=>{const r=["string"==typeof g?`${L}-sublabel`:null,D].filter(Boolean).join(" ")||void 0;return e(Ec,{id:`${L}-header-container`,$disabled:m,$error:f,$selected:O,$indicator:l,$styleType:c,children:[t(Sc,{$addPadding:w,children:e(wc,{id:`${L}-input-container`,onClick:Y,children:[t(xc,Object.assign({ref:P,name:b,id:`${L}-input`,type:"checkbox"===o?"checkbox":"radio","data-testid":"toggle-input",disabled:m,onChange:W,onClick:U,checked:O,"aria-describedby":r},I)),l&&q(),e($c,{$selected:O,$disabled:m,children:[t(Fc,{htmlFor:`${L}-input`,"data-testid":"toggle-label",id:`${L}-label`,$maxLines:h,children:u}),g&&G()]})]})}),w&&t(kc,{type:"button",$disabled:m,onClick:V,id:`${L}-remove-button`,children:"Remove"})]})})(),A&&e("div",{children:[(!T||_)&&t(Bc,{"data-id":"toggle-composite-children",$isFinalItem:!T,$disabled:m,children:A}),T&&!_&&H&&t(Ic,{$disabled:m,onClick:N,id:`${L}-error-alert`,children:t(Tc,{type:m?"description":"error",className:v,showIcon:!0,children:Array.isArray(B)?Z(B):B})}),T&&e(Dc,{$paddingTopRequired:!_&&!H,disabled:m,onClick:N,"data-testid":_?"collapse-button":"expand-button",children:[_?"Show less":"Show more",t(_?k:S,{"aria-hidden":!0})]})]})]})}))`
    min-width: 5rem;
    flex: 1;
`,Zc=$(Sd.Small)`
    width: 7rem;

    ${Zn.MaxWidth.sm} {
        flex: 1;
    }

    ${Zn.MaxWidth.xxs} {
        width: 100%;
    }
`;$.div`
    clip-path: inset(50%);
    height: 1px;
    width: 1px;
    overflow: hidden;
    position: absolute;
    white-space: nowrap;
`;const Qc=e=>{const t=b.split(".");return parseInt(t[0],10)>=19?e:e?"true":void 0};var Xc,Kc,Jc;!function(e){e.HOUR_UP="hour-up",e.HOUR_DOWN="hour-down",e.MINUTE_UP="minute-up",e.MINUTE_DOWN="minute-down"}(Xc||(Xc={})),function(e){e.HOUR="hour",e.MINUTE="minute"}(Kc||(Kc={})),function(e){e.AM="am",e.PM="pm"}(Jc||(Jc={}));const eu=({id:r,value:n,show:o,format:l,onChange:d,onCancel:c})=>{var u;const h=So.getTimeValues(l,n),[g,p]=a(h.hour),[f,b]=a(h.minute),[y,v]=a(h.period),x=i(null),w=i(null),$=Si();s((()=>{if(o&&x.current&&x.current.focus(),o){const{hour:e,minute:t,period:r}=So.getTimeValues(l,n);p(e),b(t),v(r)}}),[o,n,l]),s((()=>{const e=x.current,t=w.current;return e&&e.addEventListener("keydown",F),t&&t.addEventListener("keydown",F),()=>{e&&e.removeEventListener("keydown",F),t&&t.removeEventListener("keydown",F)}}),[]);const F=e=>{["Digit0","Digit1","Digit2","Digit3","Digit4","Digit5","Digit6","Digit7","Digit8","Digit9","Tab","Backspace","Delete","ArrowLeft","ArrowRight","ArrowUp","ArrowDown"].includes(e.code)||["Backspace","0","1","2","3","4","5","6","7","8","9"].includes(e.key)||e.preventDefault()},C=m((e=>{switch(e.currentTarget.name){case Xc.MINUTE_UP:b(So.updateMinutes(f,"add"));break;case Xc.MINUTE_DOWN:b(So.updateMinutes(f,"minus"));break;case Xc.HOUR_UP:p(So.updateHours(g,"add"));break;case Xc.HOUR_DOWN:p(So.updateHours(g,"minus"))}}),[g,f]),E=e=>{e.target.select()},D=e=>{const t=e.target.value;switch(e.target.name){case Kc.HOUR:t.length<=2&&p(t);break;case Kc.MINUTE:t.length<=2&&b(t)}},I=e=>{const t=parseInt(e.target.value);if(!isNaN(t))switch(e.target.name){case Kc.HOUR:{const r=t>23||t<0?h.hour:So.convertHourTo12HourFormat(e.target.value);p(r);break}case Kc.MINUTE:{const r=t>59||t<0?h.minute:e.target.value;b(Co.padValue(r));break}}},T=e=>{switch(e.target.name){case Jc.AM:v(Eo.AM);break;case Jc.PM:v(Eo.PM)}},B=e=>r?`${r}-${e}`:e,A=Rl({opacity:o?1:0,height:o?(null!==(u=$.height)&&void 0!==u?u:0)+32+2:0});return t(Rc,{"data-testid":"animated-dropdown-wrapper",style:A,children:e(Hc,{ref:$.ref,"data-testid":B("timepicker-dropdown"),inert:Qc(!o),children:[e(jc,{children:[e(Pc,{children:[e(Nc,{children:[t(Vc,{"aria-label":"increase hour",name:Xc.HOUR_UP,tabIndex:-1,onClick:C,"data-testid":B("hour-increment-button"),children:t(k,{})}),t(Uc,{children:t(qc,{"aria-label":"hour",type:"number",name:Kc.HOUR,id:"hour",maxLength:2,pattern:"[0-9]{2}",ref:x,value:g,onFocus:E,onChange:D,onBlur:I,min:1,max:12,placeholder:"HH","data-testid":B("hour-input")})}),t(Vc,{"aria-label":"decrease hour",name:Xc.HOUR_DOWN,tabIndex:-1,onClick:C,"data-testid":B("hour-decrement-button"),children:t(S,{})})]}),t(Yc,{children:":"}),e(Nc,{children:[t(Vc,{"aria-label":"increase minute",name:Xc.MINUTE_UP,tabIndex:-1,onClick:C,"data-testid":B("minute-increment-button"),children:t(k,{})}),t(Uc,{children:t(qc,{"aria-label":"minute",type:"number",name:Kc.MINUTE,id:"minute",maxLength:2,pattern:"[0-9]{2}",ref:w,value:f,onChange:D,onBlur:I,onFocus:E,min:0,max:59,placeholder:"MM","data-testid":B("minute-input")})}),t(Vc,{"aria-label":"decrease minute",name:Xc.MINUTE_DOWN,tabIndex:-1,onClick:C,"data-testid":B("minute-decrement-button"),children:t(S,{})})]})]}),e(Wc,{children:[t(Gc,{checked:y===Eo.AM,name:Jc.AM,type:"radio",onChange:T,"data-testid":B("am-toggle"),"aria-label":"AM",children:"AM"}),t(Gc,{checked:y===Eo.PM,name:Jc.PM,type:"radio",onChange:T,"data-testid":B("pm-toggle"),"aria-label":"PM",children:"PM"})]})]}),e(Lc,{children:[t(Zc,{"aria-label":"close selector",type:"button",styleType:"secondary",onClick:c,"data-testid":B("cancel-button"),children:"Cancel"}),t(Zc,{"aria-label":"confirm selection",type:"button",onClick:()=>{let e;e="24hr"===l?So.convertTo24HourFormat({hour:g,minute:f,period:y}):`${g}:${f}${y}`,d(e)},disabled:""===g||""===f,"data-testid":B("confirm-button"),children:"Done"})]})]})})},tu=r=>{var{id:n,disabled:o=!1,error:l,value:d,format:c="24hr",readOnly:u,onChange:h,onFocus:g,onBlur:m}=r,p=se(r,["id","disabled","error","value","format","readOnly","onChange","onFocus","onBlur"]);const[f,b]=a(!1),[y,v]=a(!1),[x,w]=a(""),[$,F]=a(""),C=i(null);s((()=>{d&&(w(d.start),F(d.end))}),[d]),ae("mousedown",(function(e){o||D(e)}),"document"),ae("keyup",(function(e){if("Tab"===e.code)D(e)}),"document");const E=()=>{k()},S=()=>{f||y||g&&g()},k=()=>{b(!1),v(!1),m&&m()},D=e=>{C.current&&!C.current.contains(e.target)&&(y||f)&&k()};return t(xo,Object.assign({ref:C,id:n},p,{children:e(wo,{$disabled:o,$error:l,$readOnly:u,children:[e(uo,{error:l,currentActive:f?"start":y?"end":"none",children:[t($o,{onFocus:()=>{o||u||f||(v(!1),b(!0),S())},readOnly:!0,placeholder:"From",value:So.formatDisplayValue(x,c),disabled:o,"data-testid":p["data-testid"]?`${p["data-testid"]}-timepicker-selector`:"timepicker-selector"}),t($o,{onFocus:()=>{o||u||y||(b(!1),v(!0),S())},readOnly:!0,placeholder:"To",value:So.formatDisplayValue($,c),disabled:o,"data-testid":p["data-testid"]?`${p["data-testid"]}-timepicker-selector`:"timepicker-selector"})]}),t(eu,{id:n,show:f,value:x,format:c,onCancel:E,onChange:e=>{b(!1),v(!0),w(e);h&&h({start:e,end:$})}}),t(eu,{id:n,show:y,value:$,format:c,onCancel:E,onChange:e=>{v(!1),F(e);h&&h({start:x,end:e}),""==x?b(!0):m&&m()}})]})}))};$.div`
    margin-bottom: ${Un["spacing-8"]};
`,$.label`
    color: ${Wn["text-subtle"]};
    display: inline-block;

    ${Nn["form-label"]}
    ${Qd()}
    font-weight: ${Nn.Spec["weight-semibold"]};
`;const ru=$.p`
    ${Nn["body-sm-semibold"]}
    color: ${Wn["text-error"]};
    margin-top: ${Un["spacing-8"]};
    margin-bottom: 0;
    outline: none;
`;$.span`
    ${Nn["form-description"]}
    color: ${Wn["text-subtler"]};
    display: block;
`,$(yo)`
    width: 100%;
    height: calc(3rem - 2px); // exclude top and bottom borders

    ${e=>"no-border"!==e.$styleType&&F`
            padding-left: ${Un["spacing-16"]};
            padding-right: ${e.$showClear?0:Un["spacing-16"]};
        `}
`;const nu=$(vo)`
    height: auto;
    padding: ${Un["spacing-12"]} ${Un["spacing-16"]};

    cursor: pointer;
    color: ${Wn.icon};

    ${e=>"no-border"===e.$styleType&&F`
            margin-right: -${Un["spacing-12"]};
        `}
`,ou=$(j)`
    height: 1.25rem;
    width: 1.25rem;
    vertical-align: middle;
`;$.div`
    display: flex;
    width: 100%;
`,$(fo)`
    display: flex;
    align-items: center;
    width: 100%;
`;const iu=e=>"small"===e?2.5:3;$.div`
    position: relative;
    width: 100%;
    ${e=>{const t=iu(e.$variant);return F`
            min-height: ${t}rem;
            height: ${t}rem; // Need this to persist the height when expanding or collapsing list
        `}}
`;const su=F`
    display: flex;
    position: relative;
    align-items: center;
    justify-content: space-between;
    padding: 0 ${Un["spacing-16"]};
    // exclude top and bottom borders
    height: calc(${e=>iu(e.$variant)}rem - 2px);
    width: 100%;
    border-radius: ${qn.sm};
    border: none;
    background: transparent;

    &:focus,
    &:active {
        outline: none;
    }

    &:focus-visible {
        outline: 2px solid ${Wn["border-focus"]};
    }
`,au=$.button`
    ${su}
    cursor: pointer;
`;$.div`
    ${su}
`;const lu=C`
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
`;$.div`
    position: relative;
    border: ${Yn["width-010"]} ${Yn.solid} ${Wn.border};
    border-radius: ${qn.sm};
    background: ${Wn.bg};
    overflow: hidden;

    &:focus-within {
        border-color: ${Wn["border-focus"]};
        box-shadow: 0px 0px 4px 0px
            rgb(from ${Wn["border-focus"]} r g b / 50%) inset; // TODO: confirm shadow
    }

    ${e=>e.$expanded?F`
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                z-index: 2;
            `:F`
                animation: ${lu} 0.5s ease-in-out;
            `}

    ${e=>e.$disabled?F`
                background: ${Wn["bg-disabled"]};

                ${au} {
                    cursor: not-allowed;
                }

                &:focus-within {
                    border-color: ${Wn.border};
                    box-shadow: none;
                }
            `:e.$readOnly?F`
                border: none;
                background: transparent !important;

                ${au} {
                    padding: 0;
                }

                &:focus-within {
                    border: none;
                    box-shadow: none;
                }
            `:e.$error?F`
                border-color: ${Wn["border-error"]};

                &:focus-within {
                    border-color: ${Wn["border-error"]};
                    box-shadow: 0px 0px 4px 0px
                        rgb(from ${Wn["border-error"]} r g b / 50%) inset; // TODO: confirm shadow
                }
            `:void 0}
`,$.div`
    transform: rotate(${e=>e.$expanded?180:0}deg);
    transition: transform ${Vn["duration-250"]} ${Vn["ease-default"]};
    margin-left: ${Un["spacing-16"]};
`,$(S)`
    color: ${Wn.icon};
`,$.div`
    height: 1px;
    background: ${Wn.border};
    margin: 0 ${Un["spacing-8"]};
`,$.div`
    display: flex;
    flex: 1;
    word-break: break-all;
    ${e=>{if(e.$disabled)return F`
                color: ${Wn["text-disabled"]};
            `}}
`;$($.div`
    ${e=>"small"===e.$variant?Nn["body-md-regular"]:Nn["body-baseline-regular"]}
    text-align: left;
    ${e=>{if("middle"!==e.$truncateType)return F`
                    ${Xd(1)}
                `}}
    overflow: hidden;
`)`
    color: ${Wn["text-subtler"]};
`,$.div`
    display: flex;
    position: relative;
    align-items: center;
    justify-content: space-between;
`;const du=$(nu)`
    position: absolute;
    right: 0;
    padding-left: ${Un["spacing-8"]};
    margin-right: 0;
`;$(au)`
    // space for clear icon
    padding-right: calc(1.25rem + ${Un["spacing-16"]});
`;const cu=$.div`
    font-weight: ${e=>e.$bold?Nn.Spec["weight-semibold"]:Nn.Spec["weight-regular"]};

    ${e=>e.$disabled?F`
                color: ${Wn["text-disabled"]};
            `:e.$selected?F`
                color: ${Wn["text-selected"]};
            `:F`
                color: ${Wn.text};
            `}
    width: 100%;

    ${e=>"end"===e.$truncateType&&Xd(e.$maxLines||2)}
    overflow-wrap: break-word;
`,uu=$.div`
    color: ${Wn["text-subtlest"]};
    width: 100%;

    ${e=>"end"===e.$truncateType&&Xd(e.$maxLines||2)}
    overflow-wrap: break-word;

    ${e=>"next-line"===e.$labelDisplayType?F`
                    ${Nn["body-md-semibold"]}
                `:F`
                    ${Nn["body-baseline-regular"]}
                `}
`,hu=$.span`
    font-weight: ${Nn.Spec["weight-semibold"]};
`,gu=$.div`
    text-align: left;
    width: 100%;
    overflow: hidden;
    overflow-wrap: break-word;

    ${e=>"small"===e.$variant?Nn["body-md-regular"]:Nn["body-baseline-regular"]}

    ${e=>{switch(e.$labelDisplayType){case"next-line":return F`
                    display: flex;
                    flex-direction: column;
                `;case"inline":return F`
                    ${cu} {
                        display: inline;
                    }

                    ${uu} {
                        display: inline;
                        margin-left: 0.5rem;
                    }
                `}}}
`,mu=$.div`
    display: inline-block;
    width: ${e=>1===e.$maxLines?50:100}%;
    height: 1lh;
    word-break: break-all;
    overflow: hidden;
`,pu=$.div`
    display: inline-block;
    width: ${e=>1===e.$maxLines?50:100}%;
    height: 1lh;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    direction: rtl;
    text-align: right;
`,fu=({bold:n,displayType:o="inline",label:i,searchTerm:s,maxLines:a=2,selected:l,disabled:d,sublabel:c,truncationType:u="middle",variant:h="default"})=>{const g=f(E),b="small"===h?Nn.Spec["body-size-md"]({theme:g}):Nn.Spec["body-size-baseline"]({theme:g}),y=Nn.Spec["font-family"]({theme:g}),{ref:v,width:x}=Si(),w=m((e=>{if("inline"!==o||!x)return!1;return Co.getTextWidth(e,`${b} '${y}'`)>x*a-50}),[x,o,b,y,a]),$=p((()=>w(i)),[w,i]),F=p((()=>c&&w(c)),[w,c]),C=n=>{if(!s)return n;const o=s.toLowerCase().trim(),a=n.toLowerCase().indexOf(o),l=a+s.length;return-1===a?n:e(r,{children:[i.slice(0,a),t(hu,{$variant:h,children:i.slice(a,l)}),i.slice(l)]})},S=n=>e(r,{children:[t(mu,{$maxLines:a,"aria-hidden":!0,children:C(n)}),t(pu,{$maxLines:a,"aria-hidden":!0,children:C(n)})]});return e(gu,{ref:v,$labelDisplayType:$||F?"next-line":o,$variant:h,children:[t(cu,{"aria-label":i,$bold:n,$maxLines:a,$selected:l,$disabled:d,$truncateType:u,children:"middle"===u&&$?S(i):C(i)}),c&&t(uu,{"aria-label":c,$maxLines:a,$truncateType:u,$labelDisplayType:o,children:"middle"===u&&F?S(c):c})]})};var bu=Vt;var yu=function(e){var t=this.__data__,r=t.delete(e);return this.size=t.size,r};var vu=function(e){return this.__data__.get(e)};var xu=function(e){return this.__data__.has(e)},wu=Vt,$u=Yt,Fu=ur;var Cu=function(e,t){var r=this.__data__;if(r instanceof wu){var n=r.__data__;if(!$u||n.length<199)return n.push([e,t]),this.size=++r.size,this;r=this.__data__=new Fu(n)}return r.set(e,t),this.size=r.size,this},Eu=Vt,Su=function(){this.__data__=new bu,this.size=0},ku=yu,Du=vu,Iu=xu,Tu=Cu;function Bu(e){var t=this.__data__=new Eu(e);this.size=t.size}Bu.prototype.clear=Su,Bu.prototype.delete=ku,Bu.prototype.get=Du,Bu.prototype.has=Iu,Bu.prototype.set=Tu;var Au=Bu;var zu=ur,Ou=function(e){return this.__data__.set(e,"__lodash_hash_undefined__"),this},Mu=function(e){return this.__data__.has(e)};function _u(e){var t=-1,r=null==e?0:e.length;for(this.__data__=new zu;++t<r;)this.add(e[t])}_u.prototype.add=_u.prototype.push=Ou,_u.prototype.has=Mu;var Ru=function(e,t){return e.has(t)},Hu=_u,ju=function(e,t){for(var r=-1,n=null==e?0:e.length;++r<n;)if(t(e[r],r,e))return!0;return!1},Lu=Ru;var Pu=function(e,t,r,n,o,i){var s=1&r,a=e.length,l=t.length;if(a!=l&&!(s&&l>a))return!1;var d=i.get(e),c=i.get(t);if(d&&c)return d==t&&c==e;var u=-1,h=!0,g=2&r?new Hu:void 0;for(i.set(e,t),i.set(t,e);++u<a;){var m=e[u],p=t[u];if(n)var f=s?n(p,m,u,t,e,i):n(m,p,u,e,t,i);if(void 0!==f){if(f)continue;h=!1;break}if(g){if(!ju(t,(function(e,t){if(!Lu(g,t)&&(m===e||o(m,e,r,n,i)))return g.push(t)}))){h=!1;break}}else if(m!==p&&!o(m,p,r,n,i)){h=!1;break}}return i.delete(e),i.delete(t),h};var Wu=function(e){var t=-1,r=Array(e.size);return e.forEach((function(e,n){r[++t]=[n,e]})),r};var Nu=me.Uint8Array,Vu=St,Yu=Pu,Uu=Wu,qu=function(e){var t=-1,r=Array(e.size);return e.forEach((function(e){r[++t]=e})),r},Gu=pe?pe.prototype:void 0,Zu=Gu?Gu.valueOf:void 0;var Qu=function(e,t,r,n,o,i,s){switch(r){case"[object DataView]":if(e.byteLength!=t.byteLength||e.byteOffset!=t.byteOffset)return!1;e=e.buffer,t=t.buffer;case"[object ArrayBuffer]":return!(e.byteLength!=t.byteLength||!i(new Nu(e),new Nu(t)));case"[object Boolean]":case"[object Date]":case"[object Number]":return Vu(+e,+t);case"[object Error]":return e.name==t.name&&e.message==t.message;case"[object RegExp]":case"[object String]":return e==t+"";case"[object Map]":var a=Uu;case"[object Set]":var l=1&n;if(a||(a=qu),e.size!=t.size&&!l)return!1;var d=s.get(e);if(d)return d==t;n|=2,s.set(e,t);var c=Yu(a(e),a(t),n,o,i,s);return s.delete(e),c;case"[object Symbol]":if(Zu)return Zu.call(e)==Zu.call(t)}return!1};var Xu=function(e,t){for(var r=-1,n=t.length,o=e.length;++r<n;)e[o+r]=t[r];return e},Ku=Xu,Ju=ce;var eh=function(e,t,r){var n=t(e);return Ju(e)?n:Ku(n,r(e))};var th=function(e,t){for(var r=-1,n=null==e?0:e.length,o=0,i=[];++r<n;){var s=e[r];t(s,r,e)&&(i[o++]=s)}return i},rh=function(){return[]},nh=Object.prototype.propertyIsEnumerable,oh=Object.getOwnPropertySymbols,ih=oh?function(e){return null==e?[]:(e=Object(e),th(oh(e),(function(t){return nh.call(e,t)})))}:rh;var sh=function(e,t){for(var r=-1,n=Array(e);++r<e;)n[r]=t(r);return n},ah=Se,lh=ke;var dh=function(e){return lh(e)&&"[object Arguments]"==ah(e)},ch=ke,uh=Object.prototype,hh=uh.hasOwnProperty,gh=uh.propertyIsEnumerable,mh=dh(function(){return arguments}())?dh:function(e){return ch(e)&&hh.call(e,"callee")&&!gh.call(e,"callee")},ph={exports:{}};var fh=function(){return!1};!function(e,t){var r=me,n=fh,o=t&&!t.nodeType&&t,i=o&&e&&!e.nodeType&&e,s=i&&i.exports===o?r.Buffer:void 0,a=(s?s.isBuffer:void 0)||n;e.exports=a}(ph,ph.exports);var bh=ph.exports,yh=/^(?:0|[1-9]\d*)$/;var vh=function(e,t){var r=typeof e;return!!(t=null==t?9007199254740991:t)&&("number"==r||"symbol"!=r&&yh.test(e))&&e>-1&&e%1==0&&e<t};var xh=function(e){return"number"==typeof e&&e>-1&&e%1==0&&e<=9007199254740991},wh=Se,$h=xh,Fh=ke,Ch={};Ch["[object Float32Array]"]=Ch["[object Float64Array]"]=Ch["[object Int8Array]"]=Ch["[object Int16Array]"]=Ch["[object Int32Array]"]=Ch["[object Uint8Array]"]=Ch["[object Uint8ClampedArray]"]=Ch["[object Uint16Array]"]=Ch["[object Uint32Array]"]=!0,Ch["[object Arguments]"]=Ch["[object Array]"]=Ch["[object ArrayBuffer]"]=Ch["[object Boolean]"]=Ch["[object DataView]"]=Ch["[object Date]"]=Ch["[object Error]"]=Ch["[object Function]"]=Ch["[object Map]"]=Ch["[object Number]"]=Ch["[object Object]"]=Ch["[object RegExp]"]=Ch["[object Set]"]=Ch["[object String]"]=Ch["[object WeakMap]"]=!1;var Eh=function(e){return Fh(e)&&$h(e.length)&&!!Ch[wh(e)]};var Sh=function(e){return function(t){return e(t)}},kh={exports:{}};!function(e,t){var r=ue,n=t&&!t.nodeType&&t,o=n&&e&&!e.nodeType&&e,i=o&&o.exports===n&&r.process,s=function(){try{var e=o&&o.require&&o.require("util").types;return e||i&&i.binding&&i.binding("util")}catch(e){}}();e.exports=s}(kh,kh.exports);var Dh=kh.exports,Ih=Eh,Th=Sh,Bh=Dh&&Dh.isTypedArray,Ah=Bh?Th(Bh):Ih,zh=sh,Oh=mh,Mh=ce,_h=bh,Rh=vh,Hh=Ah,jh=Object.prototype.hasOwnProperty;var Lh=function(e,t){var r=Mh(e),n=!r&&Oh(e),o=!r&&!n&&_h(e),i=!r&&!n&&!o&&Hh(e),s=r||n||o||i,a=s?zh(e.length,String):[],l=a.length;for(var d in e)!t&&!jh.call(e,d)||s&&("length"==d||o&&("offset"==d||"parent"==d)||i&&("buffer"==d||"byteLength"==d||"byteOffset"==d)||Rh(d,l))||a.push(d);return a},Ph=Object.prototype;var Wh=function(e){var t=e&&e.constructor;return e===("function"==typeof t&&t.prototype||Ph)};var Nh=function(e,t){return function(r){return e(t(r))}}(Object.keys,Object),Vh=Wh,Yh=Nh,Uh=Object.prototype.hasOwnProperty;var qh=function(e){if(!Vh(e))return Yh(e);var t=[];for(var r in Object(e))Uh.call(e,r)&&"constructor"!=r&&t.push(r);return t},Gh=Le,Zh=xh;var Qh=function(e){return null!=e&&Zh(e.length)&&!Gh(e)},Xh=Lh,Kh=qh,Jh=Qh;var eg=function(e){return Jh(e)?Xh(e):Kh(e)},tg=eh,rg=ih,ng=eg;var og=function(e){return tg(e,ng,rg)},ig=Object.prototype.hasOwnProperty;var sg=function(e,t,r,n,o,i){var s=1&r,a=og(e),l=a.length;if(l!=og(t).length&&!s)return!1;for(var d=l;d--;){var c=a[d];if(!(s?c in t:ig.call(t,c)))return!1}var u=i.get(e),h=i.get(t);if(u&&h)return u==t&&h==e;var g=!0;i.set(e,t),i.set(t,e);for(var m=s;++d<l;){var p=e[c=a[d]],f=t[c];if(n)var b=s?n(f,p,c,t,e,i):n(p,f,c,e,t,i);if(!(void 0===b?p===f||o(p,f,r,n,i):b)){g=!1;break}m||(m="constructor"==c)}if(g&&!m){var y=e.constructor,v=t.constructor;y==v||!("constructor"in e)||!("constructor"in t)||"function"==typeof y&&y instanceof y&&"function"==typeof v&&v instanceof v||(g=!1)}return i.delete(e),i.delete(t),g},ag=it(me,"DataView"),lg=Yt,dg=it(me,"Promise"),cg=it(me,"Set"),ug=it(me,"WeakMap"),hg=Se,gg=Ye,mg="[object Map]",pg="[object Promise]",fg="[object Set]",bg="[object WeakMap]",yg="[object DataView]",vg=gg(ag),xg=gg(lg),wg=gg(dg),$g=gg(cg),Fg=gg(ug),Cg=hg;(ag&&Cg(new ag(new ArrayBuffer(1)))!=yg||lg&&Cg(new lg)!=mg||dg&&Cg(dg.resolve())!=pg||cg&&Cg(new cg)!=fg||ug&&Cg(new ug)!=bg)&&(Cg=function(e){var t=hg(e),r="[object Object]"==t?e.constructor:void 0,n=r?gg(r):"";if(n)switch(n){case vg:return yg;case xg:return mg;case wg:return pg;case $g:return fg;case Fg:return bg}return t});var Eg=Au,Sg=Pu,kg=Qu,Dg=sg,Ig=Cg,Tg=ce,Bg=bh,Ag=Ah,zg="[object Arguments]",Og="[object Array]",Mg="[object Object]",_g=Object.prototype.hasOwnProperty;var Rg=function(e,t,r,n,o,i){var s=Tg(e),a=Tg(t),l=s?Og:Ig(e),d=a?Og:Ig(t),c=(l=l==zg?Mg:l)==Mg,u=(d=d==zg?Mg:d)==Mg,h=l==d;if(h&&Bg(e)){if(!Bg(t))return!1;s=!0,c=!1}if(h&&!c)return i||(i=new Eg),s||Ag(e)?Sg(e,t,r,n,o,i):kg(e,t,l,r,n,o,i);if(!(1&r)){var g=c&&_g.call(e,"__wrapped__"),m=u&&_g.call(t,"__wrapped__");if(g||m){var p=g?e.value():e,f=m?t.value():t;return i||(i=new Eg),o(p,f,r,n,i)}}return!!h&&(i||(i=new Eg),Dg(e,t,r,n,o,i))},Hg=ke;var jg=function e(t,r,n,o,i){return t===r||(null==t||null==r||!Hg(t)&&!Hg(r)?t!=t&&r!=r:Rg(t,r,n,o,e,i))},Lg=Au,Pg=jg;var Wg=function(e,t,r,n){var o=r.length,i=o,s=!n;if(null==e)return!i;for(e=Object(e);o--;){var a=r[o];if(s&&a[2]?a[1]!==e[a[0]]:!(a[0]in e))return!1}for(;++o<i;){var l=(a=r[o])[0],d=e[l],c=a[1];if(s&&a[2]){if(void 0===d&&!(l in e))return!1}else{var u=new Lg;if(n)var h=n(d,c,l,e,t,u);if(!(void 0===h?Pg(c,d,3,n,u):h))return!1}}return!0},Ng=_e;var Vg=function(e){return e==e&&!Ng(e)},Yg=Vg,Ug=eg;var qg=function(e){for(var t=Ug(e),r=t.length;r--;){var n=t[r],o=e[n];t[r]=[n,o,Yg(o)]}return t};var Gg=function(e,t){return function(r){return null!=r&&(r[e]===t&&(void 0!==t||e in Object(r)))}},Zg=Wg,Qg=qg,Xg=Gg;var Kg=function(e,t){return null!=e&&t in Object(e)},Jg=Tr,em=mh,tm=ce,rm=vh,nm=xh,om=Ar;var im=function(e,t,r){for(var n=-1,o=(t=Jg(t,e)).length,i=!1;++n<o;){var s=om(t[n]);if(!(i=null!=e&&r(e,s)))break;e=e[s]}return i||++n!=o?i:!!(o=null==e?0:e.length)&&nm(o)&&rm(s,o)&&(tm(e)||em(e))},sm=Kg,am=im;var lm=jg,dm=Rr,cm=function(e,t){return null!=e&&am(e,t,sm)},um=Me,hm=Vg,gm=Gg,mm=Ar;var pm=function(e){return function(t){return null==t?void 0:t[e]}},fm=Mr;var bm=pm,ym=function(e){return function(t){return fm(t,e)}},vm=Me,xm=Ar;var wm=function(e){var t=Qg(e);return 1==t.length&&t[0][2]?Xg(t[0][0],t[0][1]):function(r){return r===e||Zg(r,e,t)}},$m=function(e,t){return um(e)&&hm(t)?gm(mm(e),t):function(r){var n=dm(r,e);return void 0===n&&n===t?cm(r,e):lm(t,n,3)}},Fm=function(e){return e},Cm=ce,Em=function(e){return vm(e)?bm(xm(e)):ym(e)};var Sm=function(e){return"function"==typeof e?e:null==e?Fm:"object"==typeof e?Cm(e)?$m(e[0],e[1]):wm(e):Em(e)},km=Sm,Dm=Qh,Im=eg;var Tm=function(e){return function(t,r,n){var o=Object(t);if(!Dm(t)){var i=km(r);t=Im(t),r=function(e){return i(o[e],e,o)}}var s=e(t,r,n);return s>-1?o[i?t[s]:s]:void 0}};var Bm=/\s/;var Am=function(e){for(var t=e.length;t--&&Bm.test(e.charAt(t)););return t},zm=/^\s+/;var Om=function(e){return e?e.slice(0,Am(e)+1).replace(zm,""):e},Mm=_e,_m=Te,Rm=/^[-+]0x[0-9a-f]+$/i,Hm=/^0b[01]+$/i,jm=/^0o[0-7]+$/i,Lm=parseInt;var Pm=function(e){if("number"==typeof e)return e;if(_m(e))return NaN;if(Mm(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=Mm(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=Om(e);var r=Hm.test(e);return r||jm.test(e)?Lm(e.slice(2),r?2:8):Rm.test(e)?NaN:+e},Wm=1/0;var Nm=function(e){return e?(e=Pm(e))===Wm||e===-1/0?17976931348623157e292*(e<0?-1:1):e==e?e:0:0===e?e:0};var Vm=function(e,t,r,n){for(var o=e.length,i=r+(n?1:-1);n?i--:++i<o;)if(t(e[i],i,e))return i;return-1},Ym=Sm,Um=function(e){var t=Nm(e),r=t%1;return t==t?r?t-r:t:0},qm=Math.max;var Gm=de(Tm((function(e,t,r){var n=null==e?0:e.length;if(!n)return-1;var o=null==r?0:Um(r);return o<0&&(o=qm(n+o,0)),Vm(e,Ym(t),o)}))),Zm=jg;var Qm=de((function(e,t){return Zm(e,t)}));function Xm(e){return()=>e}function Km(e){e()}function Jm(e,t){return r=>e(t(r))}function ep(e,t){return()=>e(t)}function tp(e,t){return r=>e(t,r)}function rp(e){return void 0!==e}function np(){}function op(e,t){return t(e),e}function ip(e,t){return t(e)}function sp(...e){return e}function ap(e,t){return e(1,t)}function lp(e,t){e(0,t)}function dp(e){e(2)}function cp(e){return e(4)}function up(e,t){return ap(e,tp(t,0))}function hp(e,t){const r=e(1,(e=>{r(),t(e)}));return r}function gp(e){let t,r;return n=>o=>{t=o,r&&clearTimeout(r),r=setTimeout((()=>{n(t)}),e)}}function mp(e,t){return e===t}function pp(e=mp){let t;return r=>n=>{e(t,n)||(t=n,r(n))}}function fp(e){return t=>r=>{e(r)&&t(r)}}function bp(e){return t=>Jm(t,e)}function yp(e){return t=>()=>{t(e)}}function vp(e,...t){const r=function(...e){return t=>e.reduceRight(ip,t)}(...t);return(t,n)=>{switch(t){case 2:return void dp(e);case 1:return ap(e,r(n))}}}function xp(e,t){return r=>n=>{r(t=e(t,n))}}function wp(e){return t=>r=>{e>0?e--:t(r)}}function $p(e){let t,r=null;return n=>o=>{r=o,!t&&(t=setTimeout((()=>{t=void 0,n(r)}),e))}}function Fp(...e){const t=new Array(e.length);let r=0,n=null;const o=Math.pow(2,e.length)-1;return e.forEach(((e,i)=>{const s=Math.pow(2,i);ap(e,(e=>{const a=r;r|=s,t[i]=e,a!==o&&r===o&&n&&(n(),n=null)}))})),e=>i=>{const s=()=>{e([i].concat(t))};r===o?s():n=s}}function Cp(e){let t=e;const r=Sp();return(e,n)=>{switch(e){case 0:t=n;break;case 1:n(t);break;case 4:return t}return r(e,n)}}function Ep(e,t){return op(Cp(t),(t=>up(e,t)))}function Sp(){const e=[];return(t,r)=>{switch(t){case 0:return void e.slice().forEach((e=>{e(r)}));case 2:return void e.splice(0,e.length);case 1:return e.push(r),()=>{const t=e.indexOf(r);t>-1&&e.splice(t,1)}}}}function kp(e){return op(Sp(),(t=>up(e,t)))}function Dp(e,t=[],{singleton:r}={singleton:!0}){return{constructor:e,dependencies:t,id:Ip(),singleton:r}}const Ip=()=>Symbol();function Tp(...e){const t=Sp(),r=new Array(e.length);let n=0;const o=Math.pow(2,e.length)-1;return e.forEach(((e,i)=>{const s=Math.pow(2,i);ap(e,(e=>{r[i]=e,n|=s,n===o&&lp(t,r)}))})),function(e,i){switch(e){case 2:return void dp(t);case 1:return n===o&&i(r),ap(t,i)}}}function Bp(e,t=mp){return vp(e,pp(t))}function Ap(...e){return function(t,r){switch(t){case 2:return;case 1:return function(...e){return()=>{e.map(Km)}}(...e.map((e=>ap(e,r))))}}}var zp=(e=>(e[e.DEBUG=0]="DEBUG",e[e.INFO=1]="INFO",e[e.WARN=2]="WARN",e[e.ERROR=3]="ERROR",e))(zp||{});const Op={0:"debug",3:"error",1:"log",2:"warn"},Mp=Dp((()=>{const e=Cp(3);return{log:Cp(((t,r,n=1)=>{var o;n>=(null!=(o=(typeof globalThis>"u"?window:globalThis).VIRTUOSO_LOG_LEVEL)?o:cp(e))&&console[Op[n]]("%creact-virtuoso: %c%s %o","color: #0253b3; font-weight: bold","color: initial",t,r)})),logLevel:e}}),[],{singleton:!0});function _p(e,t,r){return Rp(e,t,r).callbackRef}function Rp(e,t,r){const n=o.useRef(null);let i=e=>{};if(typeof ResizeObserver<"u"){const s=o.useMemo((()=>new ResizeObserver((t=>{const n=()=>{const r=t[0].target;null!==r.offsetParent&&e(r)};r?n():requestAnimationFrame(n)}))),[e]);i=e=>{e&&t?(s.observe(e),n.current=e):(n.current&&s.unobserve(n.current),n.current=null)}}return{callbackRef:i,ref:n}}function Hp(e,t,r,n,i,s,a,l,d){const c=o.useCallback((r=>{const o=function(e,t,r,n){const o=e.length;if(0===o)return null;const i=[];for(let s=0;s<o;s++){const o=e.item(s);if(void 0===o.dataset.index)continue;const a=parseInt(o.dataset.index),l=parseFloat(o.dataset.knownSize),d=t(o,r);if(0===d&&n("Zero-sized element, this should not happen",{child:o},zp.ERROR),d===l)continue;const c=i[i.length-1];0===i.length||c.size!==d||c.endIndex!==a-1?i.push({endIndex:a,size:d,startIndex:a}):i[i.length-1].endIndex++}return i}(r.children,t,l?"offsetWidth":"offsetHeight",i);let d=r.parentElement;for(;!d.dataset.virtuosoScroller;)d=d.parentElement;const c="window"===d.lastElementChild.dataset.viewportType,u=a?l?a.scrollLeft:a.scrollTop:c?l?window.pageXOffset||document.documentElement.scrollLeft:window.pageYOffset||document.documentElement.scrollTop:l?d.scrollLeft:d.scrollTop,h=a?l?a.scrollWidth:a.scrollHeight:c?l?document.documentElement.scrollWidth:document.documentElement.scrollHeight:l?d.scrollWidth:d.scrollHeight,g=a?l?a.offsetWidth:a.offsetHeight:c?l?window.innerWidth:window.innerHeight:l?d.offsetWidth:d.offsetHeight;n({scrollHeight:h,scrollTop:Math.max(u,0),viewportHeight:g}),null==s||s(l?jp("column-gap",getComputedStyle(r).columnGap,i):jp("row-gap",getComputedStyle(r).rowGap,i)),null!==o&&e(o)}),[e,t,i,s,a,n]);return Rp(c,r,d)}function jp(e,t,r){return"normal"!==t&&!(null!=t&&t.endsWith("px"))&&r(`${e} was not resolved to pixel value correctly`,t,zp.WARN),"normal"===t?0:parseInt(null!=t?t:"0",10)}function Lp(e,t,r){const n=o.useRef(null),i=o.useCallback((r=>{if(null==r||!r.offsetParent)return;const o=r.getBoundingClientRect(),i=o.width;let s,a;if(t){const e=t.getBoundingClientRect(),r=o.top-e.top;a=e.height-Math.max(0,r),s=r+t.scrollTop}else a=window.innerHeight-Math.max(0,o.top),s=o.top+window.pageYOffset;n.current={offsetTop:s,visibleHeight:a,visibleWidth:i},e(n.current)}),[e,t]),{callbackRef:s,ref:a}=Rp(i,!0,r),l=o.useCallback((()=>{i(a.current)}),[i,a]);return o.useEffect((()=>{if(t){t.addEventListener("scroll",l);const e=new ResizeObserver((()=>{requestAnimationFrame(l)}));return e.observe(t),()=>{t.removeEventListener("scroll",l),e.unobserve(t)}}return window.addEventListener("scroll",l),window.addEventListener("resize",l),()=>{window.removeEventListener("scroll",l),window.removeEventListener("resize",l)}}),[l,t]),s}const Pp=Dp((()=>{const e=Sp(),t=Sp(),r=Cp(0),n=Sp(),o=Cp(0),i=Sp(),s=Sp(),a=Cp(0),l=Cp(0),d=Cp(0),c=Cp(0),u=Sp(),h=Sp(),g=Cp(!1),m=Cp(!1),p=Cp(!1);return up(vp(e,bp((({scrollTop:e})=>e))),t),up(vp(e,bp((({scrollHeight:e})=>e))),s),up(t,o),{deviation:r,fixedFooterHeight:d,fixedHeaderHeight:l,footerHeight:c,headerHeight:a,horizontalDirection:m,scrollBy:h,scrollContainerState:e,scrollHeight:s,scrollingInProgress:g,scrollTo:u,scrollTop:t,skipAnimationFrameInResizeObserver:p,smoothScrollTargetReached:n,statefulScrollTop:o,viewportHeight:i}}),[],{singleton:!0}),Wp={lvl:0};function Np(e,t){const r=e.length;if(0===r)return[];let{index:n,value:o}=t(e[0]);const i=[];for(let s=1;s<r;s++){const{index:r,value:a}=t(e[s]);i.push({end:r-1,start:n,value:o}),n=r,o=a}return i.push({end:1/0,start:n,value:o}),i}function Vp(e){return e===Wp}function Yp(e,t){if(!Vp(e))return t===e.k?e.v:t<e.k?Yp(e.l,t):Yp(e.r,t)}function Up(e,t,r="k"){if(Vp(e))return[-1/0,void 0];if(Number(e[r])===t)return[e.k,e.v];if(Number(e[r])<t){const n=Up(e.r,t,r);return n[0]===-1/0?[e.k,e.v]:n}return Up(e.l,t,r)}function qp(e,t,r){return Vp(e)?of(t,r,1):t===e.k?ef(e,{k:t,v:r}):t<e.k?sf(ef(e,{l:qp(e.l,t,r)})):sf(ef(e,{r:qp(e.r,t,r)}))}function Gp(){return Wp}function Zp(e,t,r){if(Vp(e))return[];return function(e){return Np(e,(({k:e,v:t})=>({index:e,value:t})))}(Kp(e,Up(e,t)[0],r))}function Qp(e,t){if(Vp(e))return Wp;const{k:r,l:n,r:o}=e;if(t===r){if(Vp(n))return o;if(Vp(o))return n;{const[t,r]=nf(n);return Jp(ef(e,{k:t,l:tf(n),v:r}))}}return Jp(ef(e,t<r?{l:Qp(n,t)}:{r:Qp(o,t)}))}function Xp(e){return Vp(e)?[]:[...Xp(e.l),{k:e.k,v:e.v},...Xp(e.r)]}function Kp(e,t,r){if(Vp(e))return[];const{k:n,l:o,r:i,v:s}=e;let a=[];return n>t&&(a=a.concat(Kp(o,t,r))),n>=t&&n<=r&&a.push({k:n,v:s}),n<=r&&(a=a.concat(Kp(i,t,r))),a}function Jp(e){const{l:t,lvl:r,r:n}=e;if(n.lvl>=r-1&&t.lvl>=r-1)return e;if(r>n.lvl+1){if(rf(t))return af(ef(e,{lvl:r-1}));if(!Vp(t)&&!Vp(t.r))return ef(t.r,{l:ef(t,{r:t.r.l}),lvl:r,r:ef(e,{l:t.r.r,lvl:r-1})});throw new Error("Unexpected empty nodes")}if(rf(e))return lf(ef(e,{lvl:r-1}));if(Vp(n)||Vp(n.l))throw new Error("Unexpected empty nodes");{const t=n.l,o=rf(t)?n.lvl-1:n.lvl;return ef(t,{l:ef(e,{lvl:r-1,r:t.l}),lvl:t.lvl+1,r:lf(ef(n,{l:t.r,lvl:o}))})}}function ef(e,t){return of(void 0!==t.k?t.k:e.k,void 0!==t.v?t.v:e.v,void 0!==t.lvl?t.lvl:e.lvl,void 0!==t.l?t.l:e.l,void 0!==t.r?t.r:e.r)}function tf(e){return Vp(e.r)?e.l:Jp(ef(e,{r:tf(e.r)}))}function rf(e){return Vp(e)||e.lvl>e.r.lvl}function nf(e){return Vp(e.r)?[e.k,e.v]:nf(e.r)}function of(e,t,r,n=Wp,o=Wp){return{k:e,l:n,lvl:r,r:o,v:t}}function sf(e){return lf(af(e))}function af(e){const{l:t}=e;return Vp(t)||t.lvl!==e.lvl?e:ef(t,{r:ef(e,{l:t.r})})}function lf(e){const{lvl:t,r:r}=e;return Vp(r)||Vp(r.r)||r.lvl!==t||r.r.lvl!==t?e:ef(r,{l:ef(e,{r:r.l}),lvl:t+1})}function df(e,t){return!(!e||e.startIndex!==t.startIndex||e.endIndex!==t.endIndex)}function cf(e,t){return!(!e||e[0]!==t[0]||e[1]!==t[1])}const uf=Dp((()=>({recalcInProgress:Cp(!1)})),[],{singleton:!0});function hf(e,t,r){return e[gf(e,t,r)]}function gf(e,t,r,n=0){let o=e.length-1;for(;n<=o;){const i=Math.floor((n+o)/2),s=r(e[i],t);if(0===s)return i;if(-1===s){if(o-n<2)return i-1;o=i-1}else{if(o===n)return i;n=i+1}}throw new Error(`Failed binary finding record in array - ${e.join(",")}, searched for ${t}`)}function mf(e,t){return Math.round(e.getBoundingClientRect()[t])}function pf(e){return!Vp(e.groupOffsetTree)}function ff({index:e},t){return t===e?0:t<e?-1:1}function bf({offset:e},t){return t===e?0:t<e?-1:1}function yf(e,t,r){if(0===t.length)return 0;const{index:n,offset:o,size:i}=hf(t,e,ff),s=e-n,a=i*s+(s-1)*r+o;return a>0?a+r:a}function vf(e,t){if(!pf(t))return e;let r=0;for(;t.groupIndices[r]<=e+r;)r++;return e+r}function xf(e,t,r){if(function(e){return typeof e.groupIndex<"u"}(e))return t.groupIndices[e.groupIndex]+1;{let n=vf("LAST"===e.index?r:e.index,t);return n=Math.max(0,n,Math.min(r,n)),n}}function wf(e,t,r,n=0){return n>0&&(t=Math.max(t,hf(e,n,ff).offset)),Np(function(e,t,r,n){const o=gf(e,t,n),i=gf(e,r,n,o);return e.slice(o,i+1)}(e,t,r,bf),Ef)}function $f(e,[t,r,n,o]){t.length>0&&n("received item sizes",t,zp.DEBUG);const i=e.sizeTree;let s=i,a=0;if(r.length>0&&Vp(i)&&2===t.length){const e=t[0].size,n=t[1].size;s=r.reduce(((t,r)=>qp(qp(t,r,e),r+1,n)),s)}else[s,a]=function(e,t){let r=Vp(e)?0:1/0;for(const n of t){const{endIndex:t,size:o,startIndex:i}=n;if(r=Math.min(r,i),Vp(e)){e=qp(e,0,o);continue}const s=Zp(e,i-1,t+1);if(s.some(Sf(n)))continue;let a=!1,l=!1;for(const{end:r,start:n,value:i}of s)a?(t>=n||o===i)&&(e=Qp(e,n)):(l=i!==o,a=!0),r>t&&t>=n&&i!==o&&(e=qp(e,t+1,i));l&&(e=qp(e,i,o))}return[e,r]}(s,t);if(s===i)return e;const{lastIndex:l,lastOffset:d,lastSize:c,offsetTree:u}=Cf(e.offsetTree,a,s,o);return{groupIndices:r,groupOffsetTree:r.reduce(((e,t)=>qp(e,t,yf(t,u,o))),Gp()),lastIndex:l,lastOffset:d,lastSize:c,offsetTree:u,sizeTree:s}}function Ff(e,t){let r=0,n=0;for(;r<e;)r+=t[n+1]-t[n]-1,n++;return n-(r===e?0:1)}function Cf(e,t,r,n){let o=e,i=0,s=0,a=0,l=0;if(0!==t){l=gf(o,t-1,ff),a=o[l].offset;const e=Up(r,t-1);i=e[0],s=e[1],o.length&&o[l].size===Up(r,t)[1]&&(l-=1),o=o.slice(0,l+1)}else o=[];for(const{start:e,value:l}of Zp(r,t,1/0)){const t=e-i,r=t*s+a+t*n;o.push({index:e,offset:r,size:l}),i=e,a=r,s=l}return{lastIndex:i,lastOffset:a,lastSize:s,offsetTree:o}}function Ef(e){return{index:e.index,value:e}}function Sf(e){const{endIndex:t,size:r,startIndex:n}=e;return e=>e.start===n&&(e.end===t||e.end===1/0)&&e.value===r}const kf={offsetHeight:"height",offsetWidth:"width"},Df=Dp((([{log:e},{recalcInProgress:t}])=>{const r=Sp(),n=Sp(),o=Ep(n,0),i=Sp(),s=Sp(),a=Cp(0),l=Cp([]),d=Cp(void 0),c=Cp(void 0),u=Cp(((e,t)=>mf(e,kf[t]))),h=Cp(void 0),g=Cp(0),m={groupIndices:[],groupOffsetTree:Gp(),lastIndex:0,lastOffset:0,lastSize:0,offsetTree:[],sizeTree:Gp()},p=Ep(vp(r,Fp(l,e,g),xp($f,m),pp()),m),f=Ep(vp(l,pp(),xp(((e,t)=>({current:t,prev:e.current})),{current:[],prev:[]}),bp((({prev:e})=>e))),[]);up(vp(l,fp((e=>e.length>0)),Fp(p,g),bp((([e,t,r])=>{const n=e.reduce(((e,n,o)=>qp(e,n,yf(n,t.offsetTree,r)||o)),Gp());return{...t,groupIndices:e,groupOffsetTree:n}}))),p),up(vp(n,Fp(p),fp((([e,{lastIndex:t}])=>e<t)),bp((([e,{lastIndex:t,lastSize:r}])=>[{endIndex:t,size:r,startIndex:e}]))),r),up(d,c);const b=Ep(vp(d,bp((e=>void 0===e))),!0);up(vp(c,fp((e=>void 0!==e&&Vp(cp(p).sizeTree))),bp((e=>[{endIndex:0,size:e,startIndex:0}]))),r);const y=kp(vp(r,Fp(p),xp((({sizes:e},[t,r])=>({changed:r!==e,sizes:r})),{changed:!1,sizes:m}),bp((e=>e.changed))));ap(vp(a,xp(((e,t)=>({diff:e.prev-t,prev:t})),{diff:0,prev:0}),bp((e=>e.diff))),(e=>{const{groupIndices:r}=cp(p);if(e>0)lp(t,!0),lp(i,e+Ff(e,r));else if(e<0){const t=cp(f);t.length>0&&(e-=Ff(-e,t)),lp(s,e)}})),ap(vp(a,Fp(e)),(([e,t])=>{e<0&&t("`firstItemIndex` prop should not be set to less than zero. If you don't know the total count, just use a very high value",{firstItemIndex:a},zp.ERROR)}));const v=kp(i);up(vp(i,Fp(p),bp((([e,t])=>{const r=t.groupIndices.length>0,n=[],o=t.lastSize;if(r){const r=Yp(t.sizeTree,0);let i=0,s=0;for(;i<e;){const e=t.groupIndices[s],a=t.groupIndices.length===s+1?1/0:t.groupIndices[s+1]-e-1;n.push({endIndex:e,size:r,startIndex:e}),n.push({endIndex:e+1+a-1,size:o,startIndex:e+1}),s++,i+=a+1}const a=Xp(t.sizeTree);return i!==e&&a.shift(),a.reduce(((t,{k:r,v:n})=>{let o=t.ranges;return 0!==t.prevSize&&(o=[...t.ranges,{endIndex:r+e-1,size:t.prevSize,startIndex:t.prevIndex}]),{prevIndex:r+e,prevSize:n,ranges:o}}),{prevIndex:e,prevSize:0,ranges:n}).ranges}return Xp(t.sizeTree).reduce(((t,{k:r,v:n})=>({prevIndex:r+e,prevSize:n,ranges:[...t.ranges,{endIndex:r+e-1,size:t.prevSize,startIndex:t.prevIndex}]})),{prevIndex:0,prevSize:o,ranges:[]}).ranges}))),r);const x=kp(vp(s,Fp(p,g),bp((([e,{offsetTree:t},r])=>yf(-e,t,r)))));return up(vp(s,Fp(p,g),bp((([e,t,r])=>{if(t.groupIndices.length>0){if(Vp(t.sizeTree))return t;let n=Gp();const o=cp(f);let i=0,s=0,a=0;for(;i<-e;){a=o[s];const e=o[s+1]-a-1;s++,i+=e+1}if(n=Xp(t.sizeTree).reduce(((t,{k:r,v:n})=>qp(t,Math.max(0,r+e),n)),n),i!==-e){n=qp(n,0,Yp(t.sizeTree,a));n=qp(n,1,Up(t.sizeTree,1-e)[1])}return{...t,sizeTree:n,...Cf(t.offsetTree,0,n,r)}}{const n=Xp(t.sizeTree).reduce(((t,{k:r,v:n})=>qp(t,Math.max(0,r+e),n)),Gp());return{...t,sizeTree:n,...Cf(t.offsetTree,0,n,r)}}}))),p),{beforeUnshiftWith:v,data:h,defaultItemSize:c,firstItemIndex:a,fixedItemSize:d,gap:g,groupIndices:l,itemSize:u,listRefresh:y,shiftWith:s,shiftWithOffset:x,sizeRanges:r,sizes:p,statefulTotalCount:o,totalCount:n,trackItemSizes:b,unshiftWith:i}}),sp(Mp,uf),{singleton:!0});function If(e){return e.reduce(((e,t)=>(e.groupIndices.push(e.totalCount),e.totalCount+=t+1,e)),{groupIndices:[],totalCount:0})}const Tf=Dp((([{groupIndices:e,sizes:t,totalCount:r},{headerHeight:n,scrollTop:o}])=>{const i=Sp(),s=Sp(),a=kp(vp(i,bp(If)));return up(vp(a,bp((e=>e.totalCount))),r),up(vp(a,bp((e=>e.groupIndices))),e),up(vp(Tp(o,t,n),fp((([e,t])=>pf(t))),bp((([e,t,r])=>Up(t.groupOffsetTree,Math.max(e-r,0),"v")[0])),pp(),bp((e=>[e]))),s),{groupCounts:i,topItemsIndexes:s}}),sp(Df,Pp)),Bf=Dp((([{log:e}])=>{const t=Cp(!1),r=kp(vp(t,fp((e=>e)),pp()));return ap(t,(t=>{t&&cp(e)("props updated",{},zp.DEBUG)})),{didMount:r,propsReady:t}}),sp(Mp),{singleton:!0}),Af=typeof document<"u"&&"scrollBehavior"in document.documentElement.style;function zf(e){const t="number"==typeof e?{index:e}:e;return t.align||(t.align="start"),(!t.behavior||!Af)&&(t.behavior="auto"),t.offset||(t.offset=0),t}const Of=Dp((([{gap:e,listRefresh:t,sizes:r,totalCount:n},{fixedFooterHeight:o,fixedHeaderHeight:i,footerHeight:s,headerHeight:a,scrollingInProgress:l,scrollTo:d,smoothScrollTargetReached:c,viewportHeight:u},{log:h}])=>{const g=Sp(),m=Sp(),p=Cp(0);let f=null,b=null,y=null;function v(){f&&(f(),f=null),y&&(y(),y=null),b&&(clearTimeout(b),b=null),lp(l,!1)}return up(vp(g,Fp(r,u,n,p,a,s,h),Fp(e,i,o),bp((([[e,r,n,o,i,s,a,d],u,h,p])=>{const x=zf(e),{align:w,behavior:$,offset:F}=x,C=o-1,E=xf(x,r,C);let S=yf(E,r.offsetTree,u)+s;"end"===w?(S+=h+Up(r.sizeTree,E)[1]-n+p,E===C&&(S+=a)):"center"===w?S+=(h+Up(r.sizeTree,E)[1]-n+p)/2:S-=i,F&&(S+=F);const k=t=>{v(),t?(d("retrying to scroll to",{location:e},zp.DEBUG),lp(g,e)):(lp(m,!0),d("list did not change, scroll successful",{},zp.DEBUG))};if(v(),"smooth"===$){let e=!1;y=ap(t,(t=>{e=e||t})),f=hp(c,(()=>{k(e)}))}else f=hp(vp(t,function(e){return t=>{const r=setTimeout((()=>{t(!1)}),e);return e=>{e&&(t(!0),clearTimeout(r))}}}(150)),k);return b=setTimeout((()=>{v()}),1200),lp(l,!0),d("scrolling from index to",{behavior:$,index:E,top:S},zp.DEBUG),{behavior:$,top:S}}))),d),{scrollTargetReached:m,scrollToIndex:g,topListHeight:p}}),sp(Df,Pp,Mp),{singleton:!0});function Mf(e,t){0==e?t():requestAnimationFrame((()=>{Mf(e-1,t)}))}function _f(e,t){const r=t-1;return"number"==typeof e?e:"LAST"===e.index?r:e.index}const Rf=Dp((([{defaultItemSize:e,listRefresh:t,sizes:r},{scrollTop:n},{scrollTargetReached:o,scrollToIndex:i},{didMount:s}])=>{const a=Cp(!0),l=Cp(0),d=Cp(!0);return up(vp(s,Fp(l),fp((([e,t])=>!!t)),yp(!1)),a),up(vp(s,Fp(l),fp((([e,t])=>!!t)),yp(!1)),d),ap(vp(Tp(t,s),Fp(a,r,e,d),fp((([[,e],t,{sizeTree:r},n,o])=>e&&(!Vp(r)||rp(n))&&!t&&!o)),Fp(l)),(([,e])=>{hp(o,(()=>{lp(d,!0)})),Mf(4,(()=>{hp(n,(()=>{lp(a,!0)})),lp(i,e)}))})),{initialItemFinalLocationReached:d,initialTopMostItemIndex:l,scrolledToInitialItem:a}}),sp(Df,Pp,Of,Bf),{singleton:!0});function Hf(e,t){return Math.abs(e-t)<1.01}const jf="up",Lf="down",Pf={atBottom:!1,notAtBottomBecause:"NOT_SHOWING_LAST_ITEM",state:{offsetBottom:0,scrollHeight:0,scrollTop:0,viewportHeight:0}},Wf=Dp((([{footerHeight:e,headerHeight:t,scrollBy:r,scrollContainerState:n,scrollTop:o,viewportHeight:i}])=>{const s=Cp(!1),a=Cp(!0),l=Sp(),d=Sp(),c=Cp(4),u=Cp(0),h=Ep(vp(Ap(vp(Bp(o),wp(1),yp(!0)),vp(Bp(o),wp(1),yp(!1),gp(100))),pp()),!1),g=Ep(vp(Ap(vp(r,yp(!0)),vp(r,yp(!1),gp(200))),pp()),!1);up(vp(Tp(Bp(o),Bp(u)),bp((([e,t])=>e<=t)),pp()),a),up(vp(a,$p(50)),d);const m=kp(vp(Tp(n,Bp(i),Bp(t),Bp(e),Bp(c)),xp(((e,[{scrollHeight:t,scrollTop:r},n,o,i,s])=>{const a={scrollHeight:t,scrollTop:r,viewportHeight:n};if(r+n-t>-s){let t,n;return r>e.state.scrollTop?(t="SCROLLED_DOWN",n=e.state.scrollTop-r):(t="SIZE_DECREASED",n=e.state.scrollTop-r||e.scrollTopDelta),{atBottom:!0,atBottomBecause:t,scrollTopDelta:n,state:a}}let l;return l=a.scrollHeight>e.state.scrollHeight?"SIZE_INCREASED":n<e.state.viewportHeight?"VIEWPORT_HEIGHT_DECREASING":r<e.state.scrollTop?"SCROLLING_UPWARDS":"NOT_FULLY_SCROLLED_TO_LAST_ITEM_BOTTOM",{atBottom:!1,notAtBottomBecause:l,state:a}}),Pf),pp(((e,t)=>e&&e.atBottom===t.atBottom)))),p=Ep(vp(n,xp(((e,{scrollHeight:t,scrollTop:r,viewportHeight:n})=>{if(Hf(e.scrollHeight,t))return{changed:!1,jump:0,scrollHeight:t,scrollTop:r};{const o=t-(r+n)<1;return e.scrollTop!==r&&o?{changed:!0,jump:e.scrollTop-r,scrollHeight:t,scrollTop:r}:{changed:!0,jump:0,scrollHeight:t,scrollTop:r}}}),{changed:!1,jump:0,scrollHeight:0,scrollTop:0}),fp((e=>e.changed)),bp((e=>e.jump))),0);up(vp(m,bp((e=>e.atBottom))),s),up(vp(s,$p(50)),l);const f=Cp(Lf);up(vp(n,bp((({scrollTop:e})=>e)),pp(),xp(((e,t)=>cp(g)?{direction:e.direction,prevScrollTop:t}:{direction:t<e.prevScrollTop?jf:Lf,prevScrollTop:t}),{direction:Lf,prevScrollTop:0}),bp((e=>e.direction))),f),up(vp(n,$p(50),yp("none")),f);const b=Cp(0);return up(vp(h,fp((e=>!e)),yp(0)),b),up(vp(o,$p(100),Fp(h),fp((([e,t])=>!!t)),xp((([e,t],[r])=>[t,r]),[0,0]),bp((([e,t])=>t-e))),b),{atBottomState:m,atBottomStateChange:l,atBottomThreshold:c,atTopStateChange:d,atTopThreshold:u,isAtBottom:s,isAtTop:a,isScrolling:h,lastJumpDueToItemResize:p,scrollDirection:f,scrollVelocity:b}}),sp(Pp)),Nf="top",Vf="bottom",Yf="none";function Uf(e,t,r){return"number"==typeof e?r===jf&&t===Nf||r===Lf&&t===Vf?e:0:r===jf?t===Nf?e.main:e.reverse:t===Vf?e.main:e.reverse}function qf(e,t){var r;return"number"==typeof e?e:null!=(r=e[t])?r:0}const Gf=Dp((([{deviation:e,fixedHeaderHeight:t,headerHeight:r,scrollTop:n,viewportHeight:o}])=>{const i=Sp(),s=Cp(0),a=Cp(0),l=Cp(0);return{increaseViewportBy:a,listBoundary:i,overscan:l,topListHeight:s,visibleRange:Ep(vp(Tp(Bp(n),Bp(o),Bp(r),Bp(i,cf),Bp(l),Bp(s),Bp(t),Bp(e),Bp(a)),bp((([e,t,r,[n,o],i,s,a,l,d])=>{const c=e-l,u=s+a,h=Math.max(r-c,0);let g=Yf;const m=qf(d,Nf),p=qf(d,Vf);return n-=l,o+=r+a,(n+=r+a)>e+u-m&&(g=jf),(o-=l)<e-h+t+p&&(g=Lf),g!==Yf?[Math.max(c-r-Uf(i,Nf,g)-m,0),c-h-a+t+Uf(i,Vf,g)+p]:null})),fp((e=>null!=e)),pp(cf)),[0,0])}}),sp(Pp),{singleton:!0});const Zf={bottom:0,firstItemIndex:0,items:[],offsetBottom:0,offsetTop:0,top:0,topItems:[],topListHeight:0,totalCount:0};function Qf(e,t,r,n,o,i){const{lastIndex:s,lastOffset:a,lastSize:l}=o;let d=0,c=0;if(e.length>0){d=e[0].offset;const t=e[e.length-1];c=t.offset+t.size}const u=r-s,h=d,g=a+u*l+(u-1)*n-c;return{bottom:c,firstItemIndex:i,items:Kf(e,o,i),offsetBottom:g,offsetTop:d,top:h,topItems:Kf(t,o,i),topListHeight:t.reduce(((e,t)=>t.size+e),0),totalCount:r}}function Xf(e,t,r,n,o,i){let s=0;if(r.groupIndices.length>0)for(const t of r.groupIndices){if(t-s>=e)break;s++}const a=e+s,l=_f(t,a);return Qf(Array.from({length:a}).map(((e,t)=>({data:i[t+l],index:t+l,offset:0,size:0}))),[],a,o,r,n)}function Kf(e,t,r){if(0===e.length)return[];if(!pf(t))return e.map((e=>({...e,index:e.index+r,originalIndex:e.index})));const n=e[0].index,o=e[e.length-1].index,i=[],s=Zp(t.groupOffsetTree,n,o);let a,l=0;for(const n of e){let e;(!a||a.end<n.index)&&(a=s.shift(),l=t.groupIndices.indexOf(a.start)),e=n.index===a.start?{index:l,type:"group"}:{groupIndex:l,index:n.index-(l+1)+r},i.push({...e,data:n.data,offset:n.offset,originalIndex:n.index,size:n.size})}return i}const Jf=Dp((([{data:e,firstItemIndex:t,gap:r,sizes:n,totalCount:o},i,{listBoundary:s,topListHeight:a,visibleRange:l},{initialTopMostItemIndex:d,scrolledToInitialItem:c},{topListHeight:u},h,{didMount:g},{recalcInProgress:m}])=>{const p=Cp([]),f=Cp(0),b=Sp();up(i.topItemsIndexes,p);const y=Ep(vp(Tp(g,m,Bp(l,cf),Bp(o),Bp(n),Bp(d),c,Bp(p),Bp(t),Bp(r),e),fp((([e,t,,r,,,,,,,n])=>{const o=n&&n.length!==r;return e&&!t&&!o})),bp((([,,[e,t],r,n,o,i,s,a,l,d])=>{const c=n,{offsetTree:u,sizeTree:h}=c,g=cp(f);if(0===r)return{...Zf,totalCount:r};if(0===e&&0===t)return 0===g?{...Zf,totalCount:r}:Xf(g,o,n,a,l,d||[]);if(Vp(h))return g>0?null:Qf(function(e,t,r){if(pf(t)){const n=vf(e,t);return[{index:Up(t.groupOffsetTree,n)[0],offset:0,size:0},{data:null==r?void 0:r[0],index:n,offset:0,size:0}]}return[{data:null==r?void 0:r[0],index:e,offset:0,size:0}]}(_f(o,r),c,d),[],r,l,c,a);const m=[];if(s.length>0){const e=s[0],t=s[s.length-1];let r=0;for(const n of Zp(h,e,t)){const o=n.value,i=Math.max(n.start,e),s=Math.min(n.end,t);for(let e=i;e<=s;e++)m.push({data:null==d?void 0:d[e],index:e,offset:r,size:o}),r+=o}}if(!i)return Qf([],m,r,l,c,a);const p=s.length>0?s[s.length-1]+1:0,b=wf(u,e,t,p);if(0===b.length)return null;const y=r-1;return Qf(op([],(r=>{for(const n of b){const o=n.value;let i=o.offset,s=n.start;const a=o.size;if(o.offset<e){s+=Math.floor((e-o.offset+l)/(a+l));const t=s-n.start;i+=t*a+t*l}s<p&&(i+=(p-s)*a,s=p);const c=Math.min(n.end,y);for(let e=s;e<=c&&!(i>=t);e++)r.push({data:null==d?void 0:d[e],index:e,offset:i,size:a}),i+=a+l}})),m,r,l,c,a)})),fp((e=>null!==e)),pp()),Zf);up(vp(e,fp(rp),bp((e=>null==e?void 0:e.length))),o),up(vp(y,bp((e=>e.topListHeight))),u),up(u,a),up(vp(y,bp((e=>[e.top,e.bottom]))),s),up(vp(y,bp((e=>e.items))),b);const v=kp(vp(y,fp((({items:e})=>e.length>0)),Fp(o,e),fp((([{items:e},t])=>e[e.length-1].originalIndex===t-1)),bp((([,e,t])=>[e-1,t])),pp(cf),bp((([e])=>e)))),x=kp(vp(y,$p(200),fp((({items:e,topItems:t})=>e.length>0&&e[0].originalIndex===t.length)),bp((({items:e})=>e[0].index)),pp())),w=kp(vp(y,fp((({items:e})=>e.length>0)),bp((({items:e})=>{let t=0,r=e.length-1;for(;"group"===e[t].type&&t<r;)t++;for(;"group"===e[r].type&&r>t;)r--;return{endIndex:e[r].index,startIndex:e[t].index}})),pp(df)));return{endReached:v,initialItemCount:f,itemsRendered:b,listState:y,rangeChanged:w,startReached:x,topItemsIndexes:p,...h}}),sp(Df,Tf,Gf,Rf,Of,Wf,Bf,uf),{singleton:!0}),eb=Dp((([{fixedFooterHeight:e,fixedHeaderHeight:t,footerHeight:r,headerHeight:n},{listState:o}])=>{const i=Sp(),s=Ep(vp(Tp(r,e,n,t,o),bp((([e,t,r,n,o])=>e+t+r+n+o.offsetBottom+o.bottom))),0);return up(Bp(s),i),{totalListHeight:s,totalListHeightChanged:i}}),sp(Pp,Jf),{singleton:!0}),tb=Dp((([{viewportHeight:e},{totalListHeight:t}])=>{const r=Cp(!1);return{alignToBottom:r,paddingTopAddition:Ep(vp(Tp(r,e,t),fp((([e])=>e)),bp((([,e,t])=>Math.max(0,e-t))),$p(0),pp()),0)}}),sp(Pp,eb),{singleton:!0});function rb(e){return!!e&&("smooth"===e?"smooth":"auto")}const nb=Dp((([{listRefresh:e,totalCount:t},{atBottomState:r,isAtBottom:n},{scrollToIndex:o},{scrolledToInitialItem:i},{didMount:s,propsReady:a},{log:l},{scrollingInProgress:d}])=>{const c=Cp(!1),u=Sp();let h=null;function g(e){lp(o,{align:"end",behavior:e,index:"LAST"})}function m(e){const t=hp(r,(t=>{e&&!t.atBottom&&"SIZE_INCREASED"===t.notAtBottomBecause&&!h&&(cp(l)("scrolling to bottom due to increased size",{},zp.DEBUG),g("auto"))}));setTimeout(t,100)}return ap(vp(Tp(vp(Bp(t),wp(1)),s),Fp(Bp(c),n,i,d),bp((([[e,t],r,n,o,i])=>{let s=t&&o,a="auto";return s&&(a=((e,t)=>"function"==typeof e?rb(e(t)):t&&rb(e))(r,n||i),s=s&&!!a),{followOutputBehavior:a,shouldFollow:s,totalCount:e}})),fp((({shouldFollow:e})=>e))),(({followOutputBehavior:t,totalCount:r})=>{h&&(h(),h=null),h=hp(e,(()=>{cp(l)("following output to ",{totalCount:r},zp.DEBUG),g(t),h=null}))})),ap(vp(Tp(Bp(c),t,a),fp((([e,,t])=>e&&t)),xp((({value:e},[,t])=>({refreshed:e===t,value:t})),{refreshed:!1,value:0}),fp((({refreshed:e})=>e)),Fp(c,t)),(([,e])=>{cp(i)&&m(!1!==e)})),ap(u,(()=>{m(!1!==cp(c))})),ap(Tp(Bp(c),r),(([e,t])=>{e&&!t.atBottom&&"VIEWPORT_HEIGHT_DECREASING"===t.notAtBottomBecause&&g("auto")})),{autoscrollToBottom:u,followOutput:c}}),sp(Df,Wf,Of,Rf,Bf,Mp,Pp)),ob=Dp((([{data:e,firstItemIndex:t,gap:r,sizes:n},{initialTopMostItemIndex:o},{initialItemCount:i,listState:s},{didMount:a}])=>(up(vp(a,Fp(i),fp((([,e])=>0!==e)),Fp(o,n,t,r,e),bp((([[,e],t,r,n,o,i=[]])=>Xf(e,t,r,n,o,i)))),s),{})),sp(Df,Rf,Jf,Bf),{singleton:!0}),ib=Dp((([{didMount:e},{scrollTo:t},{listState:r}])=>{const n=Cp(0);return ap(vp(e,Fp(n),fp((([,e])=>0!==e)),bp((([,e])=>({top:e})))),(e=>{hp(vp(r,wp(1),fp((e=>e.items.length>1))),(()=>{requestAnimationFrame((()=>{lp(t,e)}))}))})),{initialScrollTop:n}}),sp(Bf,Pp,Jf),{singleton:!0}),sb=({itemBottom:e,itemTop:t,locationParams:{align:r,behavior:n,...o},viewportBottom:i,viewportTop:s})=>t<s?{...o,align:null!=r?r:"start",behavior:n}:e>i?{...o,align:null!=r?r:"end",behavior:n}:null,ab=Dp((([{gap:e,sizes:t,totalCount:r},{fixedFooterHeight:n,fixedHeaderHeight:o,headerHeight:i,scrollingInProgress:s,scrollTop:a,viewportHeight:l},{scrollToIndex:d}])=>{const c=Sp();return up(vp(c,Fp(t,l,r,i,o,n,a),Fp(e),bp((([[e,t,r,n,o,i,a,l],d])=>{const{align:c,behavior:u,calculateViewLocation:h=sb,done:g,...m}=e,p=xf(e,t,n-1),f=yf(p,t.offsetTree,d)+o+i,b=h({itemBottom:f+Up(t.sizeTree,p)[1],itemTop:f,locationParams:{align:c,behavior:u,...m},viewportBottom:l+r-a,viewportTop:l+i});return b?g&&hp(vp(s,fp((e=>!e)),wp(cp(s)?1:2)),g):g&&g(),b})),fp((e=>null!==e))),d),{scrollIntoView:c}}),sp(Df,Pp,Of,Jf,Mp),{singleton:!0}),lb=Dp((([{scrollVelocity:e}])=>{const t=Cp(!1),r=Sp(),n=Cp(!1);return up(vp(e,Fp(n,t,r),fp((([e,t])=>!!t)),bp((([e,t,r,n])=>{const{enter:o,exit:i}=t;if(r){if(i(e,n))return!1}else if(o(e,n))return!0;return r})),pp()),t),ap(vp(Tp(t,e,r),Fp(n)),(([[e,t,r],n])=>{e&&n&&n.change&&n.change(t,r)})),{isSeeking:t,scrollSeekConfiguration:n,scrollSeekRangeChanged:r,scrollVelocity:e}}),sp(Wf),{singleton:!0}),db=Dp((([{scrollContainerState:e,scrollTo:t}])=>{const r=Sp(),n=Sp(),o=Sp(),i=Cp(!1),s=Cp(void 0);return up(vp(Tp(r,n),bp((([{scrollHeight:e,scrollTop:t,viewportHeight:r},{offsetTop:n}])=>({scrollHeight:e,scrollTop:Math.max(0,t-n),viewportHeight:r})))),e),up(vp(t,Fp(n),bp((([e,{offsetTop:t}])=>({...e,top:e.top+t})))),o),{customScrollParent:s,useWindowScroll:i,windowScrollContainerState:r,windowScrollTo:o,windowViewportRect:n}}),sp(Pp)),cb=Dp((([{sizeRanges:e,sizes:t},{headerHeight:r,scrollTop:n},{initialTopMostItemIndex:o},{didMount:i},{useWindowScroll:s,windowScrollContainerState:a,windowViewportRect:l}])=>{const d=Sp(),c=Cp(void 0),u=Cp(null),h=Cp(null);return up(a,u),up(l,h),ap(vp(d,Fp(t,n,s,u,h,r)),(([e,t,r,n,o,i,s])=>{const a=function(e){return Xp(e).map((({k:e,v:t},r,n)=>{const o=n[r+1];return{endIndex:o?o.k-1:1/0,size:t,startIndex:e}}))}(t.sizeTree);n&&null!==o&&null!==i&&(r=o.scrollTop-i.offsetTop),e({ranges:a,scrollTop:r-=s})})),up(vp(c,fp(rp),bp(ub)),o),up(vp(i,Fp(c),fp((([,e])=>void 0!==e)),pp(),bp((([,e])=>e.ranges))),e),{getState:d,restoreStateFrom:c}}),sp(Df,Pp,Rf,Bf,db));function ub(e){return{align:"start",index:0,offset:e.scrollTop}}const hb=Dp((([{topItemsIndexes:e}])=>{const t=Cp(0);return up(vp(t,fp((e=>e>=0)),bp((e=>Array.from({length:e}).map(((e,t)=>t))))),e),{topItemCount:t}}),sp(Jf));function gb(e){let t,r=!1;return()=>(r||(r=!0,t=e()),t)}const mb=gb((()=>/iP(ad|od|hone)/i.test(navigator.userAgent)&&/WebKit/i.test(navigator.userAgent))),pb=Dp((([{deviation:e,scrollBy:t,scrollingInProgress:r,scrollTop:n},{isAtBottom:o,isScrolling:i,lastJumpDueToItemResize:s,scrollDirection:a},{listState:l},{beforeUnshiftWith:d,gap:c,shiftWithOffset:u,sizes:h},{log:g},{recalcInProgress:m}])=>{const p=kp(vp(l,Fp(s),xp((([,e,t,r],[{bottom:n,items:o,offsetBottom:i,totalCount:s},a])=>{const l=n+i;let d=0;return t===s&&e.length>0&&o.length>0&&(0===o[0].originalIndex&&0===e[0].originalIndex||(d=l-r,0!==d&&(d+=a))),[d,o,s,l]}),[0,[],0,0]),fp((([e])=>0!==e)),Fp(n,a,r,o,g,m),fp((([,e,t,r,,,n])=>!n&&!r&&0!==e&&t===jf)),bp((([[e],,,,,t])=>(t("Upward scrolling compensation",{amount:e},zp.DEBUG),e)))));function f(r){r>0?(lp(t,{behavior:"auto",top:-r}),lp(e,0)):(lp(e,0),lp(t,{behavior:"auto",top:-r}))}return ap(vp(p,Fp(e,i)),(([t,r,n])=>{n&&mb()?lp(e,r-t):f(-t)})),ap(vp(Tp(Ep(i,!1),e,m),fp((([e,t,r])=>!e&&!r&&0!==t)),bp((([e,t])=>t)),$p(1)),f),up(vp(u,bp((e=>({top:-e})))),t),ap(vp(d,Fp(h,c),bp((([e,{groupIndices:t,lastSize:r,sizeTree:n},o])=>{function i(e){return e*(r+o)}if(0===t.length)return i(e);{let r=0;const o=Yp(n,0);let s=0,a=0;for(;s<e;){s++,r+=o;let n=t.length===a+1?1/0:t[a+1]-t[a]-1;s+n>e&&(r-=o,n=e-s+1),s+=n,r+=i(n),a++}return r}}))),(r=>{lp(e,r),requestAnimationFrame((()=>{lp(t,{top:r}),requestAnimationFrame((()=>{lp(e,0),lp(m,!1)}))}))})),{deviation:e}}),sp(Pp,Wf,Jf,Df,Mp,uf)),fb=Dp((([e,t,r,n,o,i,s,a,l,d])=>({...e,...t,...r,...n,...o,...i,...s,...a,...l,...d})),sp(Gf,ob,Bf,lb,eb,ib,tb,db,ab,Mp)),bb=Dp((([{data:e,defaultItemSize:t,firstItemIndex:r,fixedItemSize:n,gap:o,groupIndices:i,itemSize:s,sizeRanges:a,sizes:l,statefulTotalCount:d,totalCount:c,trackItemSizes:u},{initialItemFinalLocationReached:h,initialTopMostItemIndex:g,scrolledToInitialItem:m},p,f,b,{listState:y,topItemsIndexes:v,...x},{scrollToIndex:w},$,{topItemCount:F},{groupCounts:C},E])=>(up(x.rangeChanged,E.scrollSeekRangeChanged),up(vp(E.windowViewportRect,bp((e=>e.visibleHeight))),p.viewportHeight),{data:e,defaultItemHeight:t,firstItemIndex:r,fixedItemHeight:n,gap:o,groupCounts:C,initialItemFinalLocationReached:h,initialTopMostItemIndex:g,scrolledToInitialItem:m,sizeRanges:a,topItemCount:F,topItemsIndexes:v,totalCount:c,...b,groupIndices:i,itemSize:s,listState:y,scrollToIndex:w,statefulTotalCount:d,trackItemSizes:u,...x,...E,...p,sizes:l,...f})),sp(Df,Rf,Pp,cb,nb,Jf,Of,pb,hb,Tf,fb));function yb(e,t){const r={},n={};let o=0;const i=e.length;for(;o<i;)n[e[o]]=1,o+=1;for(const e in t)Object.hasOwn(n,e)||(r[e]=t[e]);return r}const vb=typeof document<"u"?o.useLayoutEffect:o.useEffect;function xb(e,r,n){const i=Object.keys(r.required||{}),s=Object.keys(r.optional||{}),a=Object.keys(r.methods||{}),l=Object.keys(r.events||{}),d=o.createContext({});function c(e,t){e.propsReady&&lp(e.propsReady,!1);for(const n of i){lp(e[r.required[n]],t[n])}for(const n of s)if(n in t){lp(e[r.optional[n]],t[n])}e.propsReady&&lp(e.propsReady,!0)}function u(e){return l.reduce(((t,n)=>(t[n]=function(e){let t,r;const n=()=>null==t?void 0:t();return function(o,i){switch(o){case 1:return i?r===i?void 0:(n(),r=i,t=ap(e,i),t):(n(),np);case 2:return n(),void(r=null)}}}(e[r.events[n]]),t)),{})}const h=o.forwardRef(((h,g)=>{const{children:m,...p}=h,[f]=o.useState((()=>op(function(e){const t=new Map,r=({constructor:e,dependencies:n,id:o,singleton:i})=>{if(i&&t.has(o))return t.get(o);const s=e(n.map((e=>r(e))));return i&&t.set(o,s),s};return r(e)}(e),(e=>{c(e,p)})))),[b]=o.useState(ep(u,f));vb((()=>{for(const e of l)e in p&&ap(b[e],p[e]);return()=>{Object.values(b).map(dp)}}),[p,b,f]),vb((()=>{c(f,p)})),o.useImperativeHandle(g,Xm(function(e){return a.reduce(((t,n)=>(t[n]=t=>{lp(e[r.methods[n]],t)},t)),{})}(f)));const y=n;return t(d.Provider,{value:f,children:n?t(y,{...yb([...i,...s,...l],p),children:m}):m})}));return{Component:h,useEmitter:(e,t)=>{const r=o.useContext(d)[e];vb((()=>ap(r,t)),[t,r])},useEmitterValue:o.version.startsWith("18")?e=>{const t=o.useContext(d)[e],r=o.useCallback((e=>ap(t,e)),[t]);return o.useSyncExternalStore(r,(()=>cp(t)),(()=>cp(t)))}:e=>{const t=o.useContext(d)[e],[r,n]=o.useState(ep(cp,t));return vb((()=>ap(t,(e=>{e!==r&&n(Xm(e))}))),[t,r]),r},usePublisher:e=>o.useCallback(tp(lp,o.useContext(d)[e]),[e])}}const wb=o.createContext(void 0),$b=o.createContext(void 0),Fb=typeof document<"u"?o.useLayoutEffect:o.useEffect;function Cb(e,t,r,n=np,i,s){const a=o.useRef(null),l=o.useRef(null),d=o.useRef(null),c=o.useCallback((r=>{const n=r.target,o=n===window||n===document,i=s?o?window.pageXOffset||document.documentElement.scrollLeft:n.scrollLeft:o?window.pageYOffset||document.documentElement.scrollTop:n.scrollTop,a=s?o?document.documentElement.scrollWidth:n.scrollWidth:o?document.documentElement.scrollHeight:n.scrollHeight,c=s?o?window.innerWidth:n.offsetWidth:o?window.innerHeight:n.offsetHeight,u=()=>{e({scrollHeight:a,scrollTop:Math.max(i,0),viewportHeight:c})};r.suppressFlushSync?u():D.flushSync(u),null!==l.current&&(i===l.current||i<=0||i===a-c)&&(l.current=null,t(!0),d.current&&(clearTimeout(d.current),d.current=null))}),[e,t]);return o.useEffect((()=>{const e=i||a.current;return n(i||a.current),c({suppressFlushSync:!0,target:e}),e.addEventListener("scroll",c,{passive:!0}),()=>{n(null),e.removeEventListener("scroll",c)}}),[a,c,r,n,i]),{scrollByCallback:function(e){s&&(e={behavior:e.behavior,left:e.top}),a.current.scrollBy(e)},scrollerRef:a,scrollToCallback:function(r){const n=a.current;if(!n||(s?"offsetWidth"in n&&0===n.offsetWidth:"offsetHeight"in n&&0===n.offsetHeight))return;const o="smooth"===r.behavior;let i,c,u;n===window?(c=Math.max(mf(document.documentElement,s?"width":"height"),s?document.documentElement.scrollWidth:document.documentElement.scrollHeight),i=s?window.innerWidth:window.innerHeight,u=s?document.documentElement.scrollLeft:document.documentElement.scrollTop):(c=n[s?"scrollWidth":"scrollHeight"],i=mf(n,s?"width":"height"),u=n[s?"scrollLeft":"scrollTop"]);const h=c-i;if(r.top=Math.ceil(Math.max(Math.min(h,r.top),0)),Hf(i,c)||r.top===u)return e({scrollHeight:c,scrollTop:u,viewportHeight:i}),void(o&&t(!0));o?(l.current=r.top,d.current&&clearTimeout(d.current),d.current=setTimeout((()=>{d.current=null,l.current=null,t(!0)}),1e3)):l.current=null,s&&(r={behavior:r.behavior,left:r.top}),n.scrollTo(r)}}}const Eb="-webkit-sticky",Sb="sticky",kb=gb((()=>{if(typeof document>"u")return Sb;const e=document.createElement("div");return e.style.position=Eb,e.style.position===Eb?Eb:Sb}));function Db(e){return e}const Ib=Dp((()=>{const e=Cp((e=>`Item ${e}`)),t=Cp(null),r=Cp((e=>`Group ${e}`)),n=Cp({}),o=Cp(Db),i=Cp("div"),s=Cp(np),a=(e,t=null)=>Ep(vp(n,bp((t=>t[e])),pp()),t);return{components:n,computeItemKey:o,context:t,EmptyPlaceholder:a("EmptyPlaceholder"),FooterComponent:a("Footer"),GroupComponent:a("Group","div"),groupContent:r,HeaderComponent:a("Header"),HeaderFooterTag:i,ItemComponent:a("Item","div"),itemContent:e,ListComponent:a("List","div"),ScrollerComponent:a("Scroller","div"),scrollerRef:s,ScrollSeekPlaceholder:a("ScrollSeekPlaceholder"),TopItemListComponent:a("TopItemList")}})),Tb=Dp((([e,t])=>({...e,...t})),sp(bb,Ib)),Bb=({height:e})=>t("div",{style:{height:e}}),Ab={overflowAnchor:"none",position:kb(),zIndex:1},zb={overflowAnchor:"none"},Ob={...zb,display:"inline-block",height:"100%"},Mb=o.memo((function({showTopList:e=!1}){const r=Kb("listState"),n=Jb("sizeRanges"),i=Kb("useWindowScroll"),s=Kb("customScrollParent"),a=Jb("windowScrollContainerState"),l=Jb("scrollContainerState"),d=s||i?a:l,c=Kb("itemContent"),u=Kb("context"),h=Kb("groupContent"),g=Kb("trackItemSizes"),m=Kb("itemSize"),p=Kb("log"),f=Jb("gap"),b=Kb("horizontalDirection"),{callbackRef:v}=Hp(n,m,g,e?np:d,p,f,s,b,Kb("skipAnimationFrameInResizeObserver")),[x,w]=o.useState(0);Xb("deviation",(e=>{x!==e&&w(e)}));const $=Kb("EmptyPlaceholder"),F=Kb("ScrollSeekPlaceholder")||Bb,C=Kb("ListComponent"),E=Kb("ItemComponent"),S=Kb("GroupComponent"),k=Kb("computeItemKey"),D=Kb("isSeeking"),I=Kb("groupIndices").length>0,T=Kb("alignToBottom"),B=Kb("initialItemFinalLocationReached"),A=e?{}:{boxSizing:"border-box",...b?{display:"inline-block",height:"100%",marginLeft:0!==x?x:T?"auto":0,paddingLeft:r.offsetTop,paddingRight:r.offsetBottom,whiteSpace:"nowrap"}:{marginTop:0!==x?x:T?"auto":0,paddingBottom:r.offsetBottom,paddingTop:r.offsetTop},...B?{}:{visibility:"hidden"}};return!e&&0===r.totalCount&&$?t($,{...Lb($,u)}):t(C,{...Lb(C,u),"data-testid":e?"virtuoso-top-item-list":"virtuoso-item-list",ref:v,style:A,children:(e?r.topItems:r.items).map((e=>{const t=e.originalIndex,n=k(t+r.firstItemIndex,e.data,u);return D?y(F,{...Lb(F,u),height:e.size,index:e.index,key:n,type:e.type||"item",..."group"===e.type?{}:{groupIndex:e.groupIndex}}):"group"===e.type?y(S,{...Lb(S,u),"data-index":t,"data-item-index":e.index,"data-known-size":e.size,key:n,style:Ab},h(e.index,u)):y(E,{...Lb(E,u),...Pb(E,e.data),"data-index":t,"data-item-group-index":e.groupIndex,"data-item-index":e.index,"data-known-size":e.size,key:n,style:b?Ob:zb},I?c(e.index,e.groupIndex,e.data,u):c(e.index,e.data,u))}))})})),_b={height:"100%",outline:"none",overflowY:"auto",position:"relative",WebkitOverflowScrolling:"touch"},Rb={outline:"none",overflowX:"auto",position:"relative"},Hb=e=>({height:"100%",position:"absolute",top:0,width:"100%",...e?{display:"flex",flexDirection:"column"}:{}}),jb={position:kb(),top:0,width:"100%",zIndex:1};function Lb(e,t){if("string"!=typeof e)return{context:t}}function Pb(e,t){return{item:"string"==typeof e?void 0:t}}const Wb=o.memo((function(){const e=Kb("HeaderComponent"),r=Jb("headerHeight"),n=Kb("HeaderFooterTag"),i=_p(o.useMemo((()=>e=>{r(mf(e,"height"))}),[r]),!0,Kb("skipAnimationFrameInResizeObserver")),s=Kb("context");return e?t(n,{ref:i,children:t(e,{...Lb(e,s)})}):null})),Nb=o.memo((function(){const e=Kb("FooterComponent"),r=Jb("footerHeight"),n=Kb("HeaderFooterTag"),i=_p(o.useMemo((()=>e=>{r(mf(e,"height"))}),[r]),!0,Kb("skipAnimationFrameInResizeObserver")),s=Kb("context");return e?t(n,{ref:i,children:t(e,{...Lb(e,s)})}):null}));function Vb({useEmitter:e,useEmitterValue:r,usePublisher:n}){return o.memo((function({children:o,style:i,...s}){const a=n("scrollContainerState"),l=r("ScrollerComponent"),d=n("smoothScrollTargetReached"),c=r("scrollerRef"),u=r("context"),h=r("horizontalDirection")||!1,{scrollByCallback:g,scrollerRef:m,scrollToCallback:p}=Cb(a,d,l,c,void 0,h);return e("scrollTo",p),e("scrollBy",g),t(l,{"data-testid":"virtuoso-scroller","data-virtuoso-scroller":!0,ref:m,style:{...h?Rb:_b,...i},tabIndex:0,...s,...Lb(l,u),children:o})}))}function Yb({useEmitter:e,useEmitterValue:r,usePublisher:n}){return o.memo((function({children:o,style:i,...s}){const a=n("windowScrollContainerState"),l=r("ScrollerComponent"),d=n("smoothScrollTargetReached"),c=r("totalListHeight"),u=r("deviation"),h=r("customScrollParent"),g=r("context"),{scrollByCallback:m,scrollerRef:p,scrollToCallback:f}=Cb(a,d,l,np,h);return Fb((()=>(p.current=h||window,()=>{p.current=null})),[p,h]),e("windowScrollTo",f),e("scrollBy",m),t(l,{"data-virtuoso-scroller":!0,style:{position:"relative",...i,...0!==c?{height:c+u}:{}},...s,...Lb(l,g),children:o})}))}const Ub=({children:e})=>{const r=o.useContext(wb),n=Jb("viewportHeight"),i=Jb("fixedItemHeight"),s=Kb("alignToBottom"),a=Kb("horizontalDirection"),l=_p(o.useMemo((()=>Jm(n,(e=>mf(e,a?"width":"height")))),[n,a]),!0,Kb("skipAnimationFrameInResizeObserver"));return o.useEffect((()=>{r&&(n(r.viewportHeight),i(r.itemHeight))}),[r,n,i]),t("div",{"data-viewport-type":"element",ref:l,style:Hb(s),children:e})},qb=({children:e})=>{const r=o.useContext(wb),n=Jb("windowViewportRect"),i=Jb("fixedItemHeight"),s=Kb("customScrollParent"),a=Lp(n,s,Kb("skipAnimationFrameInResizeObserver")),l=Kb("alignToBottom");return o.useEffect((()=>{r&&(i(r.itemHeight),n({offsetTop:0,visibleHeight:r.viewportHeight,visibleWidth:100}))}),[r,n,i]),t("div",{"data-viewport-type":"window",ref:a,style:Hb(l),children:e})},Gb=({children:e})=>{const r=Kb("TopItemListComponent")||"div",n=Kb("headerHeight"),o={...jb,marginTop:`${n}px`},i=Kb("context");return t(r,{style:o,...Lb(r,i),children:e})},Zb=o.memo((function(r){const n=Kb("useWindowScroll"),o=Kb("topItemsIndexes").length>0,i=Kb("customScrollParent"),s=Kb("context"),a=i||n?ty:ey,l=i||n?qb:Ub;return e(a,{...r,...Lb(a,s),children:[o&&t(Gb,{children:t(Mb,{showTopList:!0})}),e(l,{children:[t(Wb,{}),t(Mb,{}),t(Nb,{})]})]})})),{Component:Qb,useEmitter:Xb,useEmitterValue:Kb,usePublisher:Jb}=xb(Tb,{events:{atBottomStateChange:"atBottomStateChange",atTopStateChange:"atTopStateChange",endReached:"endReached",groupIndices:"groupIndices",isScrolling:"isScrolling",itemsRendered:"itemsRendered",rangeChanged:"rangeChanged",startReached:"startReached",totalListHeightChanged:"totalListHeightChanged"},methods:{autoscrollToBottom:"autoscrollToBottom",getState:"getState",scrollBy:"scrollBy",scrollIntoView:"scrollIntoView",scrollTo:"scrollTo",scrollToIndex:"scrollToIndex"},optional:{alignToBottom:"alignToBottom",atBottomThreshold:"atBottomThreshold",atTopThreshold:"atTopThreshold",components:"components",computeItemKey:"computeItemKey",context:"context",customScrollParent:"customScrollParent",data:"data",defaultItemHeight:"defaultItemHeight",firstItemIndex:"firstItemIndex",fixedItemHeight:"fixedItemHeight",followOutput:"followOutput",groupContent:"groupContent",groupCounts:"groupCounts",headerFooterTag:"HeaderFooterTag",horizontalDirection:"horizontalDirection",increaseViewportBy:"increaseViewportBy",initialItemCount:"initialItemCount",initialScrollTop:"initialScrollTop",initialTopMostItemIndex:"initialTopMostItemIndex",itemContent:"itemContent",itemSize:"itemSize",logLevel:"logLevel",overscan:"overscan",restoreStateFrom:"restoreStateFrom",scrollerRef:"scrollerRef",scrollSeekConfiguration:"scrollSeekConfiguration",skipAnimationFrameInResizeObserver:"skipAnimationFrameInResizeObserver",topItemCount:"topItemCount",totalCount:"totalCount",useWindowScroll:"useWindowScroll"},required:{}},Zb),ey=Vb({useEmitter:Xb,useEmitterValue:Kb,usePublisher:Jb}),ty=Yb({useEmitter:Xb,useEmitterValue:Kb,usePublisher:Jb}),ry=Qb,ny={bottom:0,itemHeight:0,items:[],itemWidth:0,offsetBottom:0,offsetTop:0,top:0},oy={bottom:0,itemHeight:0,items:[{index:0}],itemWidth:0,offsetBottom:0,offsetTop:0,top:0},{ceil:iy,floor:sy,max:ay,min:ly,round:dy}=Math;function cy(e,t,r){return Array.from({length:t-e+1}).map(((t,n)=>({data:null===r?null:r[n+e],index:n+e})))}function uy(e,t){return e&&e.width===t.width&&e.height===t.height}function hy(e,t){return e&&e.column===t.column&&e.row===t.row}const gy=Dp((([{increaseViewportBy:e,listBoundary:t,overscan:r,visibleRange:n},{footerHeight:o,headerHeight:i,scrollBy:s,scrollContainerState:a,scrollTo:l,scrollTop:d,smoothScrollTargetReached:c,viewportHeight:u},h,g,{didMount:m,propsReady:p},{customScrollParent:f,useWindowScroll:b,windowScrollContainerState:y,windowScrollTo:v,windowViewportRect:x},w])=>{const $=Cp(0),F=Cp(0),C=Cp(ny),E=Cp({height:0,width:0}),S=Cp({height:0,width:0}),k=Sp(),D=Sp(),I=Cp(0),T=Cp(null),B=Cp({column:0,row:0}),A=Sp(),z=Sp(),O=Cp(!1),M=Cp(0),_=Cp(!0),R=Cp(!1),H=Cp(!1);ap(vp(m,Fp(M),fp((([e,t])=>!!t))),(()=>{lp(_,!1)})),ap(vp(Tp(m,_,S,E,M,R),fp((([e,t,r,n,,o])=>e&&!t&&0!==r.height&&0!==n.height&&!o))),(([,,,,e])=>{lp(R,!0),Mf(1,(()=>{lp(k,e)})),hp(vp(d),(()=>{lp(t,[0,0]),lp(_,!0)}))})),up(vp(z,fp((e=>null!=e&&e.scrollTop>0)),yp(0)),F),ap(vp(m,Fp(z),fp((([,e])=>null!=e))),(([,e])=>{e&&(lp(E,e.viewport),lp(S,e.item),lp(B,e.gap),e.scrollTop>0&&(lp(O,!0),hp(vp(d,wp(1)),(e=>{lp(O,!1)})),lp(l,{top:e.scrollTop})))})),up(vp(E,bp((({height:e})=>e))),u),up(vp(Tp(Bp(E,uy),Bp(S,uy),Bp(B,((e,t)=>e&&e.column===t.column&&e.row===t.row)),Bp(d)),bp((([e,t,r,n])=>({gap:r,item:t,scrollTop:n,viewport:e})))),A),up(vp(Tp(Bp($),n,Bp(B,hy),Bp(S,uy),Bp(E,uy),Bp(T),Bp(F),Bp(O),Bp(_),Bp(M)),fp((([,,,,,,,e])=>!e)),bp((([e,[t,r],n,o,i,s,a,,l,d])=>{const{column:c,row:u}=n,{height:h,width:g}=o,{width:m}=i;if(0===a&&(0===e||0===m))return ny;if(0===g){const t=_f(d,e);return function(e){return{...oy,items:e}}(cy(t,t+Math.max(a-1,0),s))}const p=my(m,g,c);let f,b;l?0===t&&0===r&&a>0?(f=0,b=a-1):(f=p*sy((t+u)/(h+u)),b=p*iy((r+u)/(h+u))-1,b=ly(e-1,ay(b,p-1)),f=ly(b,ay(0,f))):(f=0,b=-1);const y=cy(f,b,s),{bottom:v,top:x}=py(i,n,o,y),w=iy(e/p);return{bottom:v,itemHeight:h,items:y,itemWidth:g,offsetBottom:w*h+(w-1)*u-v,offsetTop:x,top:x}}))),C),up(vp(T,fp((e=>null!==e)),bp((e=>e.length))),$),up(vp(Tp(E,S,C,B),fp((([e,t,{items:r}])=>r.length>0&&0!==t.height&&0!==e.height)),bp((([e,t,{items:r},n])=>{const{bottom:o,top:i}=py(e,n,t,r);return[i,o]})),pp(cf)),t);const j=Cp(!1);up(vp(d,Fp(j),bp((([e,t])=>t||0!==e))),j);const L=kp(vp(Tp(C,$),fp((([{items:e}])=>e.length>0)),Fp(j),fp((([[e,t],r])=>{const n=e.items[e.items.length-1].index===t-1;return(r||e.bottom>0&&e.itemHeight>0&&0===e.offsetBottom&&e.items.length===t)&&n})),bp((([[,e]])=>e-1)),pp())),P=kp(vp(Bp(C),fp((({items:e})=>e.length>0&&0===e[0].index)),yp(0),pp())),W=kp(vp(Bp(C),Fp(O),fp((([{items:e},t])=>e.length>0&&!t)),bp((([{items:e}])=>({endIndex:e[e.length-1].index,startIndex:e[0].index}))),pp(df),$p(0)));up(W,g.scrollSeekRangeChanged),up(vp(k,Fp(E,S,$,B),bp((([e,t,r,n,o])=>{const i=zf(e),{align:s,behavior:a,offset:l}=i;let d=i.index;"LAST"===d&&(d=n-1),d=ay(0,d,ly(n-1,d));let c=fy(t,o,r,d);return"end"===s?c=dy(c-t.height+r.height):"center"===s&&(c=dy(c-t.height/2+r.height/2)),l&&(c+=l),{behavior:a,top:c}}))),l);const N=Ep(vp(C,bp((e=>e.offsetBottom+e.bottom))),0);return up(vp(x,bp((e=>({height:e.visibleHeight,width:e.visibleWidth})))),E),{customScrollParent:f,data:T,deviation:I,footerHeight:o,gap:B,headerHeight:i,increaseViewportBy:e,initialItemCount:F,itemDimensions:S,overscan:r,restoreStateFrom:z,scrollBy:s,scrollContainerState:a,scrollHeight:D,scrollTo:l,scrollToIndex:k,scrollTop:d,smoothScrollTargetReached:c,totalCount:$,useWindowScroll:b,viewportDimensions:E,windowScrollContainerState:y,windowScrollTo:v,windowViewportRect:x,...g,gridState:C,horizontalDirection:H,initialTopMostItemIndex:M,totalListHeight:N,...h,endReached:L,propsReady:p,rangeChanged:W,startReached:P,stateChanged:A,stateRestoreInProgress:O,...w}}),sp(Gf,Pp,Wf,lb,Bf,db,Mp));function my(e,t,r){return ay(1,sy((e+r)/(sy(t)+r)))}function py(e,t,r,n){const{height:o}=r;if(void 0===o||0===n.length)return{bottom:0,top:0};const i=fy(e,t,r,n[0].index);return{bottom:fy(e,t,r,n[n.length-1].index)+o,top:i}}function fy(e,t,r,n){const o=my(e.width,r.width,t.column),i=sy(n/o),s=i*r.height+ay(0,i-1)*t.row;return s>0?s+t.row:s}const by=Dp((()=>{const e=Cp((e=>`Item ${e}`)),t=Cp({}),r=Cp(null),n=Cp("virtuoso-grid-item"),o=Cp("virtuoso-grid-list"),i=Cp(Db),s=Cp("div"),a=Cp(np),l=(e,r=null)=>Ep(vp(t,bp((t=>t[e])),pp()),r),d=Cp(!1),c=Cp(!1);return up(Bp(c),d),{components:t,computeItemKey:i,context:r,FooterComponent:l("Footer"),HeaderComponent:l("Header"),headerFooterTag:s,itemClassName:n,ItemComponent:l("Item","div"),itemContent:e,listClassName:o,ListComponent:l("List","div"),readyStateChanged:d,reportReadyState:c,ScrollerComponent:l("Scroller","div"),scrollerRef:a,ScrollSeekPlaceholder:l("ScrollSeekPlaceholder","div")}})),yy=Dp((([e,t])=>({...e,...t})),sp(gy,by)),vy=o.memo((function(){const e=ky("gridState"),r=ky("listClassName"),n=ky("itemClassName"),i=ky("itemContent"),s=ky("computeItemKey"),a=ky("isSeeking"),l=Dy("scrollHeight"),d=ky("ItemComponent"),c=ky("ListComponent"),u=ky("ScrollSeekPlaceholder"),h=ky("context"),g=Dy("itemDimensions"),m=Dy("gap"),p=ky("log"),f=ky("stateRestoreInProgress"),b=Dy("reportReadyState"),v=_p(o.useMemo((()=>e=>{const t=e.parentElement.parentElement.scrollHeight;l(t);const r=e.firstChild;if(r){const{height:e,width:t}=r.getBoundingClientRect();g({height:e,width:t})}m({column:By("column-gap",getComputedStyle(e).columnGap,p),row:By("row-gap",getComputedStyle(e).rowGap,p)})}),[l,g,m,p]),!0,!1);return Fb((()=>{e.itemHeight>0&&e.itemWidth>0&&b(!0)}),[e]),f?null:t(c,{className:r,ref:v,...Lb(c,h),"data-testid":"virtuoso-item-list",style:{paddingBottom:e.offsetBottom,paddingTop:e.offsetTop},children:e.items.map((r=>{const o=s(r.index,r.data,h);return a?t(u,{...Lb(u,h),height:e.itemHeight,index:r.index,width:e.itemWidth},o):y(d,{...Lb(d,h),className:n,"data-index":r.index,key:o},i(r.index,r.data,h))}))})})),xy=o.memo((function(){const e=ky("HeaderComponent"),r=Dy("headerHeight"),n=ky("headerFooterTag"),i=_p(o.useMemo((()=>e=>{r(mf(e,"height"))}),[r]),!0,!1),s=ky("context");return e?t(n,{ref:i,children:t(e,{...Lb(e,s)})}):null})),wy=o.memo((function(){const e=ky("FooterComponent"),r=Dy("footerHeight"),n=ky("headerFooterTag"),i=_p(o.useMemo((()=>e=>{r(mf(e,"height"))}),[r]),!0,!1),s=ky("context");return e?t(n,{ref:i,children:t(e,{...Lb(e,s)})}):null})),$y=({children:e})=>{const r=o.useContext($b),n=Dy("itemDimensions"),i=Dy("viewportDimensions"),s=_p(o.useMemo((()=>e=>{i(e.getBoundingClientRect())}),[i]),!0,!1);return o.useEffect((()=>{r&&(i({height:r.viewportHeight,width:r.viewportWidth}),n({height:r.itemHeight,width:r.itemWidth}))}),[r,i,n]),t("div",{ref:s,style:Hb(!1),children:e})},Fy=({children:e})=>{const r=o.useContext($b),n=Dy("windowViewportRect"),i=Dy("itemDimensions"),s=ky("customScrollParent"),a=Lp(n,s,!1);return o.useEffect((()=>{r&&(i({height:r.itemHeight,width:r.itemWidth}),n({offsetTop:0,visibleHeight:r.viewportHeight,visibleWidth:r.viewportWidth}))}),[r,n,i]),t("div",{ref:a,style:Hb(!1),children:e})},Cy=o.memo((function({...r}){const n=ky("useWindowScroll"),o=ky("customScrollParent"),i=o||n?Ty:Iy,s=o||n?Fy:$y,a=ky("context");return t(i,{...r,...Lb(i,a),children:e(s,{children:[t(xy,{}),t(vy,{}),t(wy,{})]})})})),{Component:Ey,useEmitter:Sy,useEmitterValue:ky,usePublisher:Dy}=xb(yy,{events:{atBottomStateChange:"atBottomStateChange",atTopStateChange:"atTopStateChange",endReached:"endReached",isScrolling:"isScrolling",rangeChanged:"rangeChanged",readyStateChanged:"readyStateChanged",startReached:"startReached",stateChanged:"stateChanged"},methods:{scrollBy:"scrollBy",scrollTo:"scrollTo",scrollToIndex:"scrollToIndex"},optional:{components:"components",computeItemKey:"computeItemKey",context:"context",customScrollParent:"customScrollParent",data:"data",headerFooterTag:"headerFooterTag",increaseViewportBy:"increaseViewportBy",initialItemCount:"initialItemCount",initialTopMostItemIndex:"initialTopMostItemIndex",itemClassName:"itemClassName",itemContent:"itemContent",listClassName:"listClassName",logLevel:"logLevel",overscan:"overscan",restoreStateFrom:"restoreStateFrom",scrollerRef:"scrollerRef",scrollSeekConfiguration:"scrollSeekConfiguration",totalCount:"totalCount",useWindowScroll:"useWindowScroll"}},Cy),Iy=Vb({useEmitter:Sy,useEmitterValue:ky,usePublisher:Dy}),Ty=Yb({useEmitter:Sy,useEmitterValue:ky,usePublisher:Dy});function By(e,t,r){return"normal"!==t&&!(null!=t&&t.endsWith("px"))&&r(`${e} was not resolved to pixel value correctly`,t,zp.WARN),"normal"===t?0:parseInt(null!=t?t:"0",10)}var Ay;!function(e){e.Ready="overlay-context-ready",e.Change="overlay-context-change"}(Ay||(Ay={}));const zy=e=>"right"===e?"bottom-end":"bottom-start",Oy=v({elementWidth:0,styles:{},setFloatingRef:()=>{},getFloatingProps:()=>({})}),My=({enabled:n,isOpen:o,onOpen:l,onClose:d,onDismiss:c,renderElement:u,renderDropdown:h,customZIndex:g,clickToToggle:m=!1,offset:p=0,alignment:b="left",fitAvailableHeight:y,rootNode:v})=>{var x;const w=f(E),$=Gn["sm-max"]({theme:w}),F=i(null),{width:C=0}=Si({targetRef:F,handleHeight:!1}),S={name:"center",fn:({x:e,rects:t})=>{const r=0===e||e+t.floating.width===window.innerWidth,n=window.innerWidth<$;return{x:r&&n?(window.innerWidth-t.floating.width)/2:e}}},{refs:k,floatingStyles:D,context:I}=V({open:o,onOpenChange:(e,t,r)=>{"escape-key"===r?null==c||c():e&&!o?null==l||l():!e&&o&&(null==d||d(r))},whileElementsMounted:Y,placement:zy(b),middleware:[U(p),q(),G({limiter:Z()}),Q({apply({availableHeight:e,elements:t}){!y||e>=t.floating.scrollHeight?t.floating.style.setProperty("--available-height",""):t.floating.style.setProperty("--available-height",`${Math.max(0,e)}px`)}}),S]}),T=(()=>{const[e,t]=a(void 0),r=N();return s((()=>{if(!r)return void t(void 0);const e=e=>{t(e.zIndex)};return r.events.on(Ay.Change,e),r.events.emit(Ay.Ready),()=>r.events.off(Ay.Change,e)}),[r]),e})(),{isMounted:B,styles:A}=X(I,{initial:{opacity:0},open:{opacity:1},duration:300}),z=K(I,{enabled:n,toggle:m}),O=J(I,{enabled:n}),{getReferenceProps:M,getFloatingProps:_}=ee([z,O]),R={elementWidth:C,styles:Object.assign(Object.assign(Object.assign({},A),D),{zIndex:null!==(x=null!=g?g:T)&&void 0!==x?x:50}),setFloatingRef:k.setFloating,getFloatingProps:_};return e(r,{children:[t("div",Object.assign({ref:e=>{F.current=e,k.setReference(e)}},M(),{children:u()})),B&&t(te,{root:v,children:t(re,{context:I,modal:!1,initialFocus:-1,returnFocus:!1,children:t(Oy.Provider,{value:R,children:h(R)})})})]})},_y=o.createContext({focusedIndex:-1,setFocusedIndex:()=>{}}),Ry=({children:e})=>{const[r,n]=a(-1);return t(_y.Provider,{value:{focusedIndex:r,setFocusedIndex:n},children:e})},Hy=$.div`
    border: ${Yn["width-010"]} ${Yn.solid} ${Wn.border};
    border-radius: ${qn.sm};
    background: ${Wn.bg};

    min-width: 23rem;
    ${e=>e.$width&&`width: ${e.$width}px;`}
    max-height: min(27rem, var(--available-height, infinity * 1px));
    overflow: hidden;
    overflow-y: auto;

    ${e=>"small"===e.$variant?Nn["body-md-regular"]:Nn["body-baseline-regular"]}

    ${Zn.MaxWidth.sm} {
        min-width: unset;
        width: calc(100vw - ${Gn["sm-margin"]} * 2);
        max-height: 15rem;
    }

    ${Zn.MaxWidth.xs} {
        width: calc(100vw - ${Gn["xs-margin"]} * 2);
    }

    ${Zn.MaxWidth.xxs} {
        width: calc(100vw - ${Gn["xxs-margin"]} * 2);
    }

    ::-webkit-scrollbar {
        width: 14px;
    }

    ::-webkit-scrollbar-track {
        background: transparent;
    }

    ::-webkit-scrollbar-thumb {
        background: ${Wn["bg-inverse-subtlest"]};
        border: 5px solid transparent;
        border-radius: ${qn.full};
        background-clip: padding-box;
    }
`,jy=$.div`
    background: transparent;
    padding: ${Un["spacing-8"]};
`,Ly=$.ul`
    list-style-type: none;
`,Py=$.li`
    display: flex;
    align-items: flex-start;
    gap: ${Un["spacing-8"]};
    padding: ${Un["spacing-12"]} ${Un["spacing-8"]};
    cursor: pointer;
    border: none;
    border-radius: ${qn.none};
    outline: none;

    ${e=>e.$disabled?F`
                cursor: not-allowed;
            `:e.$active&&e.$selected?F`
                background: ${Wn["bg-hover"]};
            `:e.$active?F`
                background: ${Wn["bg-hover-subtle"]};
            `:void 0}
`,Wy=$(W)`
    flex-shrink: 0;
    height: 1lh;
    width: 1rem;
    color: ${Wn["icon-selected"]};
`,Ny=$.div`
    flex-shrink: 0;
    height: 1lh;
    width: 1rem;
`,Vy=$(P)`
    flex-shrink: 0;
    height: 1lh;
    width: 1lh;
    color: ${Wn["icon-selected"]};
`,Yy=$(L)`
    flex-shrink: 0;
    height: 1lh;
    width: 1lh;
    color: ${Wn["icon-primary-subtlest"]};
`,Uy=$(ne)`
    flex-shrink: 0;
    height: 1lh;
    width: 1lh;
    color: ${Wn["icon-disabled-subtle"]};
`,qy=$.div`
    width: 100%;
    display: flex;
    justify-content: flex-end;
`,Gy=$(vo)`
    cursor: pointer;
    overflow: hidden;
    color: ${Wn["text-primary"]};
    font-size: inherit;
`,Zy=$(Gy)`
    ${Nn["body-baseline-semibold"]}
`,Qy=$(Gy)`
    ${Nn["body-md-semibold"]}
    padding: ${Un["spacing-8"]} ${Un["spacing-8"]};
`,Xy=$.div`
    width: 100%;
    display: flex;
    padding: ${Un["spacing-12"]} ${Un["spacing-16"]};
    align-items: center;
`,Ky=$(A)`
    margin-right: ${Un["spacing-4"]};
    color: ${Wn["icon-error"]};
    height: 1em;
    width: 1em;
`,Jy=$(ld)`
    margin-right: ${Un["spacing-8"]};
    color: ${Wn.icon};
`,ev=$.div`
    ${Qd()}
    color: ${Wn["text-subtle"]};
    padding: 0 ${Un["spacing-16"]} ${Un["spacing-12"]}
        ${Un["spacing-16"]};
`,tv=$.div`
    background: ${Wn["bg-strong"]};
    border-radius: ${qn.sm};
    display: flex;
    align-items: center;

    ${e=>"small"===e.$variant?Nn["body-md-regular"]:Nn["body-baseline-regular"]}
`,rv=$.label`
    flex: 1;
    display: flex;
    align-items: center;
    gap: ${Un["spacing-8"]};
    padding: ${e=>"small"===e.$variant?F`
                  ${Un["spacing-8"]} ${Un["spacing-16"]}
              `:F`10px ${Un["spacing-16"]}`};
`,nv=$(yo)`
    flex: 1;
`,ov=$(oe)`
    color: ${Wn.icon};
    flex-shrink: 0;
    height: 1em;
    width: 1em;
`,iv=$(_c)`
    flex-shrink: 0;
    align-self: stretch;
    box-sizing: content-box;
    padding: ${Un["spacing-8"]};
    margin-left: -${Un["spacing-8"]};
    color: ${Wn.icon};
    cursor: pointer;
    font-size: inherit;

    svg {
        flex-shrink: 0;
        height: 1em;
        width: 1em;
    }
`,sv=g(((r,n)=>{var{value:o,variant:i,onClear:s}=r,a=se(r,["value","variant","onClear"]);return e(tv,{$variant:i,children:[e(rv,{$variant:i,children:[t(ov,{"aria-hidden":!0}),t(nv,Object.assign({ref:n,value:o,$variant:i},a))]}),o&&t(iv,{"aria-label":"Clear search",focusOutline:"browser",onClick:s,children:t(j,{"aria-hidden":!0})})]})})),av=({listItems:n,multiSelect:o,maxSelectable:l,selectedItems:d,disableItemFocus:c,itemsLoadState:u="success",itemTruncationType:h="end",itemMaxLines:g=2,labelDisplayType:p="inline",variant:b="default",listboxId:y,matchElementWidth:v=!1,topScrollItem:x,onSelectItem:w,onSelectAll:$,onDismiss:F,onRetry:C,valueExtractor:E,listExtractor:S,renderListItem:k,renderCustomCallToAction:D,enableSearch:I,hideNoResultsDisplay:T,noResultsDescription:B,customLabels:A,searchPlaceholder:z,searchFunction:O,onSearch:M})=>{const{noResultsLabel:_="No results found.",selectAllButtonLabel:R="Select all",clearAllButtonLabel:H="Clear all"}=A||{},j=(null==A?void 0:A.searchPlaceholder)||z||"Search",L=(null==A?void 0:A.noResultsDescription)||B,{focusedIndex:P,setFocusedIndex:W}=f(_y),{elementWidth:N,setFloatingRef:V,getFloatingProps:Y,styles:U}=f(Oy),[q,G]=a(""),[Z,Q]=a(null!=n?n:[]),X=Zd(u),K=(()=>{const[e,t]=a(!1);return s((()=>{t(!0)}),[]),e})(),J=i(null),ee=i(null),te=i([]),re=i(null),ne=i(null),oe=!!l&&!!d&&(null==d?void 0:d.length)===l,ie=e=>{const t=S?S(e):null==e?void 0:e.toString();return"object"==typeof t?{title:t.title,secondaryLabel:t.secondaryLabel}:{title:null!=t?t:""}},se=m((e=>!!Gm(d,(t=>Qm(t,e)))),[d]),le=Gd((()=>null==O?void 0:O(q))),de=Gd((()=>null==n?void 0:n.filter((e=>{const{title:t,secondaryLabel:r}=ie(e),n=q.trim().toLowerCase();return t.toLowerCase().includes(n)||r&&r.toLowerCase().includes(n)})))),ce=(e,t)=>{oe&&!se(e)||(W(t),null==w||w(e,(e=>E?E(e):e)(e)))},ue=e=>{const t=e.target.value;G(t),null==M||M()},he=()=>{var e;G(""),null===(e=re.current)||void 0===e||e.focus(),null==M||M()},ge=()=>{null==C||C()};ae("keydown",(e=>{var t,r;switch(e.code){case"ArrowDown":if(e.preventDefault(),P<Z.length-1){const e=P+1;null===(t=te.current[e])||void 0===t||t.focus(),W(e)}break;case"ArrowUp":if(e.preventDefault(),P>0){const e=P-1;null===(r=te.current[e])||void 0===r||r.focus(),W(e)}else 0===P&&re.current&&(re.current.focus(),W(-1));break;case"Space":case"Enter":document.activeElement===te.current[P]&&(e.preventDefault(),Z[P]&&ce(Z[P],P))}})),s((()=>{var e;if(!x)return void(null===(e=ne.current)||void 0===e||e.scrollTo({top:0}));const t=setTimeout((()=>{if(!n)return;const e=n.indexOf(x);ne.current&&-1!==e&&(ne.current.scrollToIndex({index:e}),W(e))}),0);return()=>clearTimeout(t)}),[te,n,W,x]),s((()=>{var e,t,r;if(K)return;if(c||!n)return;const o=n.findIndex((e=>se(e)));re.current?(W(-1),setTimeout((()=>{var e;return null===(e=re.current)||void 0===e?void 0:e.focus()}),200)):P>0?(null===(e=ne.current)||void 0===e||e.scrollToIndex({index:P,align:"center"}),setTimeout((()=>{var e;return null===(e=te.current[P])||void 0===e?void 0:e.focus()}),200)):-1!==o?(null===(t=ne.current)||void 0===t||t.scrollToIndex({index:o,align:"center"}),W(o),setTimeout((()=>{var e;return null===(e=te.current[o])||void 0===e?void 0:e.focus()}),200)):(null===(r=ne.current)||void 0===r||r.scrollToIndex({index:0}),W(0),setTimeout((()=>{var e;return null===(e=te.current[0])||void 0===e?void 0:e.focus()}),200))}),[se,c,P,n,K,W]),s((()=>{K&&X&&(c||"success"===u&&re.current&&(W(-1),re.current.focus()))}),[K,X,u,W,c]),s((()=>{var e;Q(null!==(e=""===q?n:O?le():de())&&void 0!==e?e:[])}),[le,de,n,O,q]);const me=e=>o?t(oe&&!e?Uy:e?Vy:Yy,{"aria-hidden":!0}):e?t(Wy,{"aria-hidden":!0}):t(Ny,{}),pe=(e,r)=>{const{title:n,secondaryLabel:o}=ie(e);return t(fu,{displayType:p,label:n,maxLines:g,selected:r,disabled:!r&&oe,sublabel:o,truncationType:h,variant:b})},fe=(n,i)=>{if(!C||"success"===u){const s=se(n),a=i===P;return t(Py,{"aria-selected":s,"aria-multiselectable":o,"aria-disabled":!s&&oe,"data-testid":"list-item",onClick:()=>ce(n,i),onMouseEnter:()=>(e=>{W(e)})(i),ref:e=>{te.current[i]=e},role:"option",tabIndex:a?0:-1,$active:a,$selected:s,$disabled:!s&&oe,children:k?k(n,{selected:s}):e(r,{children:[me(s),pe(n,s)]})},((e,t)=>`item_${t}__${E?E(e):e}`)(n,i))}},be=()=>{if((I||O)&&"success"===u)return t(sv,{ref:re,onChange:ue,value:q,placeholder:j,"data-testid":"search-input","aria-label":"Enter text to search",onClear:he,variant:b})},ye=()=>{if(d&&o&&Z.length>0&&!q&&"success"===u)return t(qy,{children:t(Qy,{onClick:$,type:"button",$variant:b,children:l||0!==d.length?H:R})})},ve=()=>{if(!T&&(q||!I)&&0===Z.length&&"success"===u)return e(r,{children:[e(Xy,{"data-testid":"list-no-results",children:[t(Ky,{"data-testid":"no-result-icon"}),_]}),L&&t(ev,{"data-testid":"no-result-desc",children:L})]})},xe=()=>{if(C&&"loading"===u)return e(Xy,{"data-testid":"list-loading",children:[t(Jy,{}),"Loading..."]})},we=()=>{if(C&&"fail"===u)return e(Xy,{"data-testid":"list-fail",children:[t(Ky,{"data-testid":"load-error-icon"}),"Failed to load. ",t(Zy,{onClick:ge,type:"button",$variant:b,children:"Try again."})]})},$e=()=>{var e;const r="test"===process.env.NODE_ENV;return t(Ly,{role:"listbox",id:y,children:t(ry,Object.assign({ref:ne,style:{height:"100%"},data:Z,customScrollParent:null!==(e=J.current)&&void 0!==e?e:void 0,itemContent:(e,t)=>fe(t,e)},r?{initialItemCount:Z.length}:{}),r?Z.length:void 0)})};return e(Hy,Object.assign({"data-testid":"dropdown-container",ref:Ud(J,V),style:U},Y(),{$width:v?N:void 0,$variant:b,children:[e(jy,{ref:ee,"data-testid":"dropdown-list",children:[be(),ye(),ve(),xe(),we(),$e()]}),(()=>{if(D)return t("div",{"data-testid":"custom-cta",children:D(F,Z)})})()]}))},lv=$(vo)`
    display: flex;
    align-items: center;
    gap: ${Un["spacing-8"]};
    width: 100%;
    height: calc(3rem - 2px); // exclude top and bottom borders
    padding: ${Un["spacing-16"]};

    ${e=>"small"===e.$variant?Nn["body-md-regular"]:Nn["body-baseline-regular"]}

    &:disabled {
        cursor: not-allowed;
    }
`,dv=$.div`
    display: flex;
    align-items: center;
    transform: rotate(${e=>e.$expanded?180:0}deg);
    transition: transform ${Vn["duration-250"]} ${Vn["ease-default"]};

    svg {
        color: ${Wn.icon};
        height: 1em;
        width: 1em;
    }
`;g((({children:r,disabled:n,expanded:o,listboxId:i,popupRole:s,readOnly:a,variant:l},d)=>e(lv,{ref:d,type:"button","aria-expanded":o,"aria-haspopup":s,"data-testid":"selector",disabled:n,"aria-controls":i,$variant:l,children:[r,!a&&t(dv,{$expanded:o,$variant:l,children:t(S,{"aria-hidden":!0})})]}))),$.li`
    display: ${e=>e.$visible?"flex":"none"};
`,$.div`
    flex: 1;
    display: flex;
    align-items: flex-start;
    gap: ${Un["spacing-8"]};
    padding: ${Un["spacing-12"]} ${Un["spacing-8"]};
    cursor: ${e=>e.$toggleable?"default":"pointer"};
    overflow: hidden; // required for label to truncate properly
    border-radius: ${qn.none};
    outline: none;

    ${e=>e.$active&&F`
            background: ${Wn["bg-hover"]};
        `}
`,$.div`
    height: 1px;
    width: calc((1lh + ${Un["spacing-8"]}) * ${e=>e.$level});
`,$.div`
    width: 1lh;
    height: 1lh;
    color: ${Wn["icon-primary"]};
    cursor: pointer;

    svg {
        width: 1lh;
        height: 1lh;
        transition: transform ${Vn["duration-350"]}
            ${Vn["ease-standard"]};

        ${e=>{if(e.$expanded)return F`
                    transform: rotate(90deg);
                `}}
    }
`,$.div`
    width: 1lh;
    height: 1lh;
    margin-right: ${Un["spacing-8"]};
`,$.div`
    flex-shrink: 0;
    height: 1lh;
    width: ${e=>e.$hasNestedSiblings?"1lh":Un["spacing-16"]};

    display: flex;
    justify-content: center;
`,$(ie)`
    flex-shrink: 0;
    height: 1lh;
    width: 1lh;
    color: ${Wn["icon-selected"]};
`;const cv=$(bo)`
    height: 3rem;
    gap: ${Un["spacing-8"]};
    // space for clear icon
    padding-right: calc(1.25rem + ${Un["spacing-20"]});
`,uv=r=>{var{id:n,disabled:o=!1,error:l,value:d,format:c="12hr",readOnly:u,onChange:h,onFocus:g,onBlur:f,alignment:b="left",dropdownZIndex:y,startLimit:v,endLimit:x,interval:w=15}=r,$=se(r,["id","disabled","error","value","format","readOnly","onChange","onFocus","onBlur","alignment","dropdownZIndex","startLimit","endLimit","interval"]);const[F]=a((()=>qd.generate())),[C,E]=a(null),[S,k]=a(!1),[D,I]=a(""),[T,B]=a(""),[A,z]=a(""),[O,M]=a(""),[_,R]=a(""),H=i(null),j=i(null),L=i(null),P=p((()=>So.generateTimings(w,c,v,x)),[w,c,v,x]),W=p((()=>{if(""===O)return P;const e=So.findClosestFlooredTime(O,P);return e?P.slice(P.indexOf(e)):[]}),[P,O]),N=m((e=>So.parseInput(e,c)),[c]);s((()=>{var e,t;if(d){const r=null!==(e=N(d.start))&&void 0!==e?e:"",n=null!==(t=N(d.end))&&void 0!==t?t:"";B(r),z(n),M(r),R(n)}}),[d,N]),s((()=>{if(l)return void k(!1);const e=N(T),t=N(A);if(void 0===e)I("Invalid start time");else if(void 0===t)I("Invalid end time");else{if(!(""!==e&&""!==t&&So.to24Hour(t)<So.to24Hour(e)))return I(""),void(document.activeElement!==j.current&&document.activeElement!==L.current||k(!0));I("End time must be after start time")}k(!1)}),[T,A,N,l]);const V=e=>{o||u||(C||S||null==g||g(),E(e),k(!0))},Y=e=>{var t;o||u||(E(e),k(!0),null===(t=("start"===e?j:L).current)||void 0===t||t.select())};function U(e){var t;switch(e.code){case"Enter":"start"===C?q(T):"end"===C&&(S&&G(A),null===(t=L.current)||void 0===t||t.blur());break;case"Tab":Z(T,A,{})}}const q=e=>{Z(e,A,{goToNextInput:!0})},G=e=>{Z(T,e,{triggerOnBlur:!0})},Z=(e,t,{goToNextInput:r,triggerOnBlur:n})=>{var o,i,s;const a=null!==(o=N(e))&&void 0!==o?o:O,l=null!==(i=N(t))&&void 0!==i?i:_;B(a),z(l);a===O&&l===_||null==h||h({start:a,end:l}),r&&void 0!==N(e)&&(E("end"),null===(s=L.current)||void 0===s||s.select()),n&&(E(null),k(!1),null==f||f()),M(a),R(l)},Q=e=>{e.stopPropagation(),B(""),z(""),M(""),R("");null==h||h({start:"",end:""}),E(null),k(!1)},X=e=>{var t,r;const n=e.relatedTarget,o=(null===(t=null==n?void 0:n.matches)||void 0===t?void 0:t.call(n,"[data-floating-ui-focusable]"))||(null===(r=null==n?void 0:n.matches)||void 0===r?void 0:r.call(n,"[data-floating-ui-focus-guard]")),i=H.current&&H.current.contains(n);C&&!S&&!i&&!o&&Z(T,A,{triggerOnBlur:!0})},K=()=>{if(!u&&!o&&((null==T?void 0:T.length)>0||(null==A?void 0:A.length)>0))return t(du,{onClick:Q,type:"button","aria-label":"Clear",children:t(ou,{"aria-hidden":!0})})};return e(xo,Object.assign({id:n},$,{children:[t(Ry,{children:t(My,{enabled:!u&&!o,isOpen:S,renderElement:()=>e(cv,{ref:H,$disabled:o,$error:l||!!D,$readOnly:u,onBlur:X,children:[e(uo,{error:l||!!D,currentActive:null===C?"none":C,children:[t($o,{ref:j,onFocus:()=>V("start"),placeholder:"start"===C?"hh:mm":"From",onChange:e=>B(e.target.value),value:T,disabled:o,readOnly:u,"data-testid":$["data-testid"]?`${$["data-testid"]}-timepicker-selector`:"timepicker-selector",onClick:()=>Y("start"),onKeyDown:U,autoComplete:"off","aria-label":"Start time input",type:"text",role:"combobox","aria-expanded":S,"aria-controls":F,"aria-autocomplete":"list"}),t($o,{ref:L,onFocus:()=>V("end"),placeholder:"end"===C?"hh:mm":"To",onChange:e=>z(e.target.value),value:A,disabled:o,readOnly:u,"data-testid":$["data-testid"]?`${$["data-testid"]}-timepicker-selector`:"timepicker-selector",onClick:()=>Y("end"),onKeyDown:U,autoComplete:"off","aria-label":"End time input",type:"text",role:"combobox","aria-expanded":S,"aria-controls":F,"aria-autocomplete":"list"})]}),K()]}),renderDropdown:()=>t(av,"start"===C?{listItems:P,onSelectItem:q,selectedItems:[T],disableItemFocus:!0,topScrollItem:So.findClosestFlooredTime(N(T),P),listboxId:F}:{listItems:W,onSelectItem:G,selectedItems:[A],disableItemFocus:!0,topScrollItem:So.findClosestFlooredTime(N(A),W),listboxId:F}),onClose:e=>{"outside-press"===e?(E(null),k(!1),null==f||f()):Z(T,A,{triggerOnBlur:!0})},onDismiss:()=>{var e;null===(e=("start"===C?j:L).current)||void 0===e||e.focus(),k(!1)},offset:8,alignment:b,fitAvailableHeight:!0,customZIndex:y})}),!l&&D&&t(ru,{id:n?`${n}-error-message`:"error-message",tabIndex:0,"data-testid":n?`${n}-error-message`:"error-message",children:D})]}))},hv=e=>{var{variant:r="dial"}=e,n=se(e,["variant"]);return t("combobox"===r?uv:tu,Object.assign({},n))};export{hv as TimeRangePicker};
//# sourceMappingURL=index.js.map
