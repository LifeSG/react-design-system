import{jsxs as e,jsx as t,Fragment as r}from"react/jsx-runtime";import*as n from"react";import o,{useRef as i,useEffect as s,useState as a,isValidElement as l,createRef as d,cloneElement as c,PureComponent as u,useLayoutEffect as h,forwardRef as g,useCallback as m,useMemo as p,useContext as f,version as b,createElement as y,createContext as v}from"react";import{ArrowRightIcon as x,ChevronDownIcon as w}from"@lifesg/react-icons";import $,{css as F,keyframes as C,ThemeContext as E}from"styled-components";import{ChevronDownIcon as S}from"@lifesg/react-icons/chevron-down";import{ChevronUpIcon as k}from"@lifesg/react-icons/chevron-up";import D,{findDOMNode as I,unstable_batchedUpdates as T}from"react-dom";import{ArrowRightIcon as B}from"@lifesg/react-icons/arrow-right";import{ExclamationCircleFillIcon as A}from"@lifesg/react-icons/exclamation-circle-fill";import{ExclamationTriangleFillIcon as z}from"@lifesg/react-icons/exclamation-triangle-fill";import{ICircleFillIcon as O}from"@lifesg/react-icons/i-circle-fill";import{TickCircleFillIcon as M}from"@lifesg/react-icons/tick-circle-fill";import{ExternalIcon as _}from"@lifesg/react-icons/external";import{CircleIcon as R}from"@lifesg/react-icons/circle";import{CircleDotIcon as H}from"@lifesg/react-icons/circle-dot";import{CrossIcon as j}from"@lifesg/react-icons/cross";import{SquareIcon as L}from"@lifesg/react-icons/square";import{SquareTickFillIcon as P}from"@lifesg/react-icons/square-tick-fill";import{TickIcon as W}from"@lifesg/react-icons/tick";import{useFloatingTree as N,useFloating as V,autoUpdate as Y,offset as U,flip as q,shift as G,limitShift as Z,size as Q,useTransitionStyles as X,useClick as K,useDismiss as J,useInteractions as ee,FloatingPortal as te,FloatingFocusManager as re}from"@floating-ui/react";import{SquareFillIcon as ne}from"@lifesg/react-icons/square-fill";import{MagnifierIcon as oe}from"@lifesg/react-icons/magnifier";import"@lifesg/react-icons/caret-right";import{MinusSquareFillIcon as ie}from"@lifesg/react-icons/minus-square-fill";function se(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(n=Object.getOwnPropertySymbols(e);o<n.length;o++)t.indexOf(n[o])<0&&Object.prototype.propertyIsEnumerable.call(e,n[o])&&(r[n[o]]=e[n[o]])}return r}"function"==typeof SuppressedError&&SuppressedError;const ae=(e,t,r="window",n)=>{const o=i();s((()=>{o.current=t}),[t]),s((()=>{let t;switch(r){case"window":t=window;break;case"document":t=document;break;default:t=r}if(!t||!t.addEventListener)return;const i=e=>{var t;return null===(t=o.current)||void 0===t?void 0:t.call(o,e)};return t.addEventListener(e,i,n),()=>{null==t||t.removeEventListener(e,i,n)}}),[e,r])};var le="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};function de(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var ce=Array.isArray,ue="object"==typeof le&&le&&le.Object===Object&&le,he=ue,ge="object"==typeof self&&self&&self.Object===Object&&self,me=he||ge||Function("return this")(),pe=me.Symbol,fe=pe,be=Object.prototype,ye=be.hasOwnProperty,ve=be.toString,xe=fe?fe.toStringTag:void 0;var we=function(e){var t=ye.call(e,xe),r=e[xe];try{e[xe]=void 0;var n=!0}catch(e){}var o=ve.call(e);return n&&(t?e[xe]=r:delete e[xe]),o},$e=Object.prototype.toString;var Fe=we,Ce=function(e){return $e.call(e)},Ee=pe?pe.toStringTag:void 0;var Se=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":Ee&&Ee in Object(e)?Fe(e):Ce(e)};var ke=function(e){return null!=e&&"object"==typeof e},De=Se,Ie=ke;var Te=function(e){return"symbol"==typeof e||Ie(e)&&"[object Symbol]"==De(e)},Be=ce,Ae=Te,ze=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,Oe=/^\w*$/;var Me=function(e,t){if(Be(e))return!1;var r=typeof e;return!("number"!=r&&"symbol"!=r&&"boolean"!=r&&null!=e&&!Ae(e))||(Oe.test(e)||!ze.test(e)||null!=t&&e in Object(t))};var _e=function(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)},Re=Se,He=_e;var je,Le=function(e){if(!He(e))return!1;var t=Re(e);return"[object Function]"==t||"[object GeneratorFunction]"==t||"[object AsyncFunction]"==t||"[object Proxy]"==t},Pe=me["__core-js_shared__"],We=(je=/[^.]+$/.exec(Pe&&Pe.keys&&Pe.keys.IE_PROTO||""))?"Symbol(src)_1."+je:"";var Ne=function(e){return!!We&&We in e},Ve=Function.prototype.toString;var Ye=function(e){if(null!=e){try{return Ve.call(e)}catch(e){}try{return e+""}catch(e){}}return""},Ue=Le,qe=Ne,Ge=_e,Ze=Ye,Qe=/^\[object .+?Constructor\]$/,Xe=Function.prototype,Ke=Object.prototype,Je=Xe.toString,et=Ke.hasOwnProperty,tt=RegExp("^"+Je.call(et).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");var rt=function(e,t){return null==e?void 0:e[t]},nt=function(e){return!(!Ge(e)||qe(e))&&(Ue(e)?tt:Qe).test(Ze(e))},ot=rt;var it=function(e,t){var r=ot(e,t);return nt(r)?r:void 0},st=it(Object,"create"),at=st;var lt=function(){this.__data__=at?at(null):{},this.size=0};var dt=function(e){var t=this.has(e)&&delete this.__data__[e];return this.size-=t?1:0,t},ct=st,ut=Object.prototype.hasOwnProperty;var ht=function(e){var t=this.__data__;if(ct){var r=t[e];return"__lodash_hash_undefined__"===r?void 0:r}return ut.call(t,e)?t[e]:void 0},gt=st,mt=Object.prototype.hasOwnProperty;var pt=function(e){var t=this.__data__;return gt?void 0!==t[e]:mt.call(t,e)},ft=st;var bt=function(e,t){var r=this.__data__;return this.size+=this.has(e)?0:1,r[e]=ft&&void 0===t?"__lodash_hash_undefined__":t,this},yt=lt,vt=dt,xt=ht,wt=pt,$t=bt;function Ft(e){var t=-1,r=null==e?0:e.length;for(this.clear();++t<r;){var n=e[t];this.set(n[0],n[1])}}Ft.prototype.clear=yt,Ft.prototype.delete=vt,Ft.prototype.get=xt,Ft.prototype.has=wt,Ft.prototype.set=$t;var Ct=Ft;var Et=function(){this.__data__=[],this.size=0};var St=function(e,t){return e===t||e!=e&&t!=t},kt=St;var Dt=function(e,t){for(var r=e.length;r--;)if(kt(e[r][0],t))return r;return-1},It=Dt,Tt=Array.prototype.splice;var Bt=function(e){var t=this.__data__,r=It(t,e);return!(r<0)&&(r==t.length-1?t.pop():Tt.call(t,r,1),--this.size,!0)},At=Dt;var zt=function(e){var t=this.__data__,r=At(t,e);return r<0?void 0:t[r][1]},Ot=Dt;var Mt=function(e){return Ot(this.__data__,e)>-1},_t=Dt;var Rt=function(e,t){var r=this.__data__,n=_t(r,e);return n<0?(++this.size,r.push([e,t])):r[n][1]=t,this},Ht=Et,jt=Bt,Lt=zt,Pt=Mt,Wt=Rt;function Nt(e){var t=-1,r=null==e?0:e.length;for(this.clear();++t<r;){var n=e[t];this.set(n[0],n[1])}}Nt.prototype.clear=Ht,Nt.prototype.delete=jt,Nt.prototype.get=Lt,Nt.prototype.has=Pt,Nt.prototype.set=Wt;var Vt=Nt,Yt=it(me,"Map"),Ut=Ct,qt=Vt,Gt=Yt;var Zt=function(e){var t=typeof e;return"string"==t||"number"==t||"symbol"==t||"boolean"==t?"__proto__"!==e:null===e};var Qt=function(e,t){var r=e.__data__;return Zt(t)?r["string"==typeof t?"string":"hash"]:r.map},Xt=Qt;var Kt=function(e){var t=Xt(this,e).delete(e);return this.size-=t?1:0,t},Jt=Qt;var er=function(e){return Jt(this,e).get(e)},tr=Qt;var rr=function(e){return tr(this,e).has(e)},nr=Qt;var or=function(e,t){var r=nr(this,e),n=r.size;return r.set(e,t),this.size+=r.size==n?0:1,this},ir=function(){this.size=0,this.__data__={hash:new Ut,map:new(Gt||qt),string:new Ut}},sr=Kt,ar=er,lr=rr,dr=or;function cr(e){var t=-1,r=null==e?0:e.length;for(this.clear();++t<r;){var n=e[t];this.set(n[0],n[1])}}cr.prototype.clear=ir,cr.prototype.delete=sr,cr.prototype.get=ar,cr.prototype.has=lr,cr.prototype.set=dr;var ur=cr,hr=ur;function gr(e,t){if("function"!=typeof e||null!=t&&"function"!=typeof t)throw new TypeError("Expected a function");var r=function(){var n=arguments,o=t?t.apply(this,n):n[0],i=r.cache;if(i.has(o))return i.get(o);var s=e.apply(this,n);return r.cache=i.set(o,s)||i,s};return r.cache=new(gr.Cache||hr),r}gr.Cache=hr;var mr=gr;var pr=function(e){var t=mr(e,(function(e){return 500===r.size&&r.clear(),e})),r=t.cache;return t},fr=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,br=/\\(\\)?/g,yr=pr((function(e){var t=[];return 46===e.charCodeAt(0)&&t.push(""),e.replace(fr,(function(e,r,n,o){t.push(n?o.replace(br,"$1"):r||e)})),t}));var vr=function(e,t){for(var r=-1,n=null==e?0:e.length,o=Array(n);++r<n;)o[r]=t(e[r],r,e);return o},xr=ce,wr=Te,$r=pe?pe.prototype:void 0,Fr=$r?$r.toString:void 0;var Cr=function e(t){if("string"==typeof t)return t;if(xr(t))return vr(t,e)+"";if(wr(t))return Fr?Fr.call(t):"";var r=t+"";return"0"==r&&1/t==-1/0?"-0":r},Er=Cr;var Sr=ce,kr=Me,Dr=yr,Ir=function(e){return null==e?"":Er(e)};var Tr=function(e,t){return Sr(e)?e:kr(e,t)?[e]:Dr(Ir(e))},Br=Te;var Ar=function(e){if("string"==typeof e||Br(e))return e;var t=e+"";return"0"==t&&1/e==-1/0?"-0":t},zr=Tr,Or=Ar;var Mr=function(e,t){for(var r=0,n=(t=zr(t,e)).length;null!=e&&r<n;)e=e[Or(t[r++])];return r&&r==n?e:void 0},_r=Mr;var Rr=function(e,t,r){var n=null==e?void 0:_r(e,t);return void 0===n?r:n},Hr=de(Rr);const jr=(e,t,r)=>Hr(r,t)||Hr(e,t),Lr=(e,t)=>{const r=t||e.defaultValue;return Hr(e.collections,r)},Pr={collections:{default:{"width-005":.5,"width-010":1,"width-020":2,"width-040":4,solid:"solid"}},defaultValue:"default"},Wr=e=>t=>{var r;const n=t.theme,o=Lr(Pr,null==n?void 0:n.borderScheme);return(null===(r=null==n?void 0:n.overrides)||void 0===r?void 0:r.border)?`${jr(o,e,n.overrides.border)}px`:`${o[e]}px`},Nr={"width-005":Wr("width-005"),"width-010":Wr("width-010"),"width-020":Wr("width-020"),"width-040":Wr("width-040"),solid:(Vr="solid",e=>{var t;const r=e.theme,n=Lr(Pr,null==r?void 0:r.borderScheme),o=(null===(t=null==r?void 0:r.overrides)||void 0===t?void 0:t.border)?jr(n,Vr,r.overrides.border):n[Vr];return"function"==typeof o?o(e):o})};var Vr;const Yr={"brand-10":"#2C0C0B","brand-20":"#4C1513","brand-30":"#6C1D1B","brand-40":"#922825","brand-50":"#BF3431","brand-60":"#F15D5A","brand-70":"#F69491","brand-80":"#FABAB7","brand-90":"#FCD7D2","brand-95":"#FFEBE7","brand-100":"#FFF6F4","primary-10":"#1A122C","primary-20":"#2F1F4D","primary-30":"#422D6E","primary-40":"#5B3D97","primary-50":"#7654BC","primary-60":"#9A82CD","primary-70":"#B7A7D8","primary-80":"#CFC5E5","primary-90":"#E3DDF0","primary-95":"#F0EDF7","primary-100":"#F9F8FC","secondary-10":"#0E1723","secondary-20":"#18293D","secondary-30":"#233A57","secondary-40":"#305078","secondary-50":"#4B6A8F","secondary-60":"#7B91A9","secondary-70":"#A1B1C3","secondary-80":"#C1CBD7","secondary-90":"#DBE1E8","secondary-95":"#EBEFF2","secondary-100":"#F7F8FA","neutral-10":"#161616","neutral-20":"#282828","neutral-30":"#393939","neutral-40":"#4E4E4E","neutral-50":"#686868","neutral-60":"#8E8E8E","neutral-70":"#AFAFB0","neutral-80":"#C7CACA","neutral-90":"#DDE1E2","neutral-95":"#EDEFEF","neutral-100":"#F9F9F9","success-10":"#081A0F","success-20":"#0E2D1B","success-30":"#154126","success-40":"#1C5A34","success-50":"#257645","success-60":"#44A068","success-70":"#64C189","success-80":"#80DCA5","success-90":"#B4ECCB","success-95":"#D5F6E2","success-100":"#EFFCF4","warning-10":"#221302","warning-20":"#3B2204","warning-30":"#543106","warning-40":"#744408","warning-50":"#98590C","warning-60":"#D07A13","warning-70":"#E4A244","warning-80":"#F5C26C","warning-90":"#FADBA6","warning-95":"#FCECD4","warning-100":"#FDF7F0","error-10":"#330505","error-20":"#550808","error-30":"#750C0C","error-40":"#9E130F","error-50":"#CB2213","error-60":"#DE6C6C","error-70":"#E89B9B","error-80":"#EFBEBE","error-90":"#F5D9D9","error-95":"#F9ECEC","error-100":"#FCF7F7","info-10":"#021824","info-20":"#032B3F","info-30":"#053D59","info-40":"#06547B","info-50":"#176E9B","info-60":"#5296BE","info-70":"#82B5DA","info-80":"#ACCFE7","info-90":"#CCE3F1","info-95":"#E3F1F8","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000","primary-inverse":"#FEAB10"},Ur={"brand-10":"#1F1221","brand-20":"#371F3B","brand-30":"#4E2C53","brand-40":"#6B3E73","brand-50":"#8D5197","brand-60":"#FF3399","brand-70":"#FF88C4","brand-80":"#FFB3D9","brand-90":"#FFD4E9","brand-95":"#FFE8F3","brand-100":"#FFF8FC","primary-10":"#1F1221","primary-20":"#371F3B","primary-30":"#4E2C53","primary-40":"#6B3E73","primary-50":"#8D5197","primary-60":"#B07DB7","primary-70":"#C7A3CC","primary-80":"#D9C2DD","primary-90":"#E9DBEB","primary-95":"#F3ECF4","primary-100":"#FAF7FA","secondary-10":"#2D091B","secondary-20":"#4D0F2E","secondary-30":"#6B1540","secondary-40":"#931D58","secondary-50":"#C02673","secondary-60":"#FF409F","secondary-70":"#FF88C4","secondary-80":"#FFB3D9","secondary-90":"#FFD4E9","secondary-95":"#FFE8F3","secondary-100":"#FFF8FC","neutral-10":"#161616","neutral-20":"#282828","neutral-30":"#393939","neutral-40":"#4E4E4E","neutral-50":"#686868","neutral-60":"#8E8E8E","neutral-70":"#AFAFB0","neutral-80":"#C7CACA","neutral-90":"#DDE1E2","neutral-95":"#EDEFEF","neutral-100":"#F9F9F9","success-10":"#081A0F","success-20":"#0E2D1B","success-30":"#154126","success-40":"#1C5A34","success-50":"#257645","success-60":"#44A068","success-70":"#64C189","success-80":"#80DCA5","success-90":"#B4ECCB","success-95":"#D5F6E2","success-100":"#EFFCF4","warning-10":"#221302","warning-20":"#3B2204","warning-30":"#543106","warning-40":"#744408","warning-50":"#98590C","warning-60":"#D07A13","warning-70":"#E4A244","warning-80":"#F5C26C","warning-90":"#FADBA6","warning-95":"#FCECD4","warning-100":"#FDF7F0","error-10":"#330505","error-20":"#550808","error-30":"#750C0C","error-40":"#9E130F","error-50":"#CB2213","error-60":"#DE6C6C","error-70":"#E89B9B","error-80":"#EFBEBE","error-90":"#F5D9D9","error-95":"#F9ECEC","error-100":"#FCF7F7","info-10":"#021824","info-20":"#032B3F","info-30":"#053D59","info-40":"#06547B","info-50":"#176E9B","info-60":"#5296BE","info-70":"#82B5DA","info-80":"#ACCFE7","info-90":"#CCE3F1","info-95":"#E3F1F8","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000","primary-inverse":"#FEAB10"},qr={"brand-10":"#2C0C0B","brand-20":"#4C1513","brand-30":"#6C1D1B","brand-40":"#922825","brand-50":"#BF3431","brand-60":"#F15D5A","brand-70":"#F69491","brand-80":"#FABAB7","brand-90":"#FCD7D2","brand-95":"#FFEBE7","brand-100":"#FFF6F4","primary-10":"#001731","primary-20":"#002752","primary-30":"#003874","primary-40":"#004D9F","primary-50":"#1768BE","primary-60":"#3C91EC","primary-70":"#6CB4FF","primary-80":"#A5CDFF","primary-90":"#CFE1FE","primary-95":"#E8F0FE","primary-100":"#F7F9FF","secondary-10":"#131529","secondary-20":"#222547","secondary-30":"#2F3565","secondary-40":"#42498B","secondary-50":"#5B62A7","secondary-60":"#858CBD","secondary-70":"#A8ADCF","secondary-80":"#C6C9E0","secondary-90":"#DDDFEC","secondary-95":"#EDEEF5","secondary-100":"#F8F8FB","neutral-10":"#161616","neutral-20":"#282828","neutral-30":"#393939","neutral-40":"#4E4E4E","neutral-50":"#686868","neutral-60":"#8E8E8E","neutral-70":"#AFAFB0","neutral-80":"#C7CACA","neutral-90":"#DDE1E2","neutral-95":"#EDEFEF","neutral-100":"#F9F9F9","success-10":"#081A0F","success-20":"#0E2D1B","success-30":"#154126","success-40":"#1C5A34","success-50":"#257645","success-60":"#44A068","success-70":"#64C189","success-80":"#80DCA5","success-90":"#B4ECCB","success-95":"#D5F6E2","success-100":"#EFFCF4","warning-10":"#221302","warning-20":"#3B2204","warning-30":"#543106","warning-40":"#744408","warning-50":"#98590C","warning-60":"#D07A13","warning-70":"#E4A244","warning-80":"#F5C26C","warning-90":"#FADBA6","warning-95":"#FCECD4","warning-100":"#FDF7F0","error-10":"#330505","error-20":"#550808","error-30":"#750C0C","error-40":"#9E130F","error-50":"#CB2213","error-60":"#DE6C6C","error-70":"#E89B9B","error-80":"#EFBEBE","error-90":"#F5D9D9","error-95":"#F9ECEC","error-100":"#FCF7F7","info-10":"#021824","info-20":"#032B3F","info-30":"#053D59","info-40":"#06547B","info-50":"#176E9B","info-60":"#5296BE","info-70":"#82B5DA","info-80":"#ACCFE7","info-90":"#CCE3F1","info-95":"#E3F1F8","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000","primary-inverse":"#FEAB10"},Gr={"brand-10":"#2C0C0B","brand-20":"#4C1513","brand-30":"#6C1D1B","brand-40":"#922825","brand-50":"#BF3431","brand-60":"#F15D5A","brand-70":"#F69491","brand-80":"#FABAB7","brand-90":"#FCD7D2","brand-95":"#FFEBE7","brand-100":"#FFF6F4","primary-10":"#0011924","primary-20":"#032B40","primary-30":"#043D5A","primary-40":"#05547B","primary-50":"#096EA1","primary-60":"#2098D3","primary-70":"#5CB9E8","primary-80":"#8BD3F6","primary-90":"#BEE6FA","primary-95":"#E2F2FA","primary-100":"#F4FAFC","secondary-10":"#131529","secondary-20":"#222547","secondary-30":"#2F3565","secondary-40":"#42498B","secondary-50":"#5B62A7","secondary-60":"#858CBD","secondary-70":"#A8ADCF","secondary-80":"#C6C9E0","secondary-90":"#DDDFEC","secondary-95":"#EDEEF5","secondary-100":"#F8F8FB","neutral-10":"#161616","neutral-20":"#282828","neutral-30":"#393939","neutral-40":"#4E4E4E","neutral-50":"#686868","neutral-60":"#8E8E8E","neutral-70":"#AFAFB0","neutral-80":"#C7CACA","neutral-90":"#DDE1E2","neutral-95":"#EDEFEF","neutral-100":"#F9F9F9","success-10":"#081A0F","success-20":"#0E2D1B","success-30":"#154126","success-40":"#1C5A34","success-50":"#257645","success-60":"#44A068","success-70":"#64C189","success-80":"#80DCA5","success-90":"#B4ECCB","success-95":"#D5F6E2","success-100":"#EFFCF4","warning-10":"#221302","warning-20":"#3B2204","warning-30":"#543106","warning-40":"#744408","warning-50":"#98590C","warning-60":"#D07A13","warning-70":"#E4A244","warning-80":"#F5C26C","warning-90":"#FADBA6","warning-95":"#FCECD4","warning-100":"#FDF7F0","error-10":"#330505","error-20":"#550808","error-30":"#750C0C","error-40":"#9E130F","error-50":"#CB2213","error-60":"#DE6C6C","error-70":"#E89B9B","error-80":"#EFBEBE","error-90":"#F5D9D9","error-95":"#F9ECEC","error-100":"#FCF7F7","info-10":"#021824","info-20":"#032B3F","info-30":"#053D59","info-40":"#06547B","info-50":"#176E9B","info-60":"#5296BE","info-70":"#82B5DA","info-80":"#ACCFE7","info-90":"#CCE3F1","info-95":"#E3F1F8","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000","primary-inverse":"#FEAB10"},Zr={"brand-10":"#001A19","brand-20":"#002D2B","brand-30":"#00413D","brand-40":"#005954","brand-50":"#00756F","brand-60":"#03A098","brand-70":"#55BFBA","brand-80":"#92D6D2","brand-90":"#BFE7E5","brand-95":"#DDF2F1","brand-100":"#F4FBFA","primary-10":"#09191D","primary-20":"#102B34","primary-30":"#173D49","primary-40":"#205666","primary-50":"#2A7086","primary-60":"#5D97A9","primary-70":"#8CB6C2","primary-80":"#B2CED6","primary-90":"#D1E2E7","primary-95":"#E8F0F3","primary-100":"#F7FAFB","secondary-10":"#001731","secondary-20":"#002752","secondary-30":"#003874","secondary-40":"#004D9F","secondary-50":"#5B62A7","secondary-60":"#858CBD","secondary-70":"#A8ADCF","secondary-80":"#C6C9E0","secondary-90":"#DDDFEC","secondary-95":"#EDEEF5","secondary-100":"#F8F8FB","neutral-10":"#161616","neutral-20":"#282828","neutral-30":"#393939","neutral-40":"#4E4E4E","neutral-50":"#686868","neutral-60":"#8E8E8E","neutral-70":"#AFAFB0","neutral-80":"#C7CACA","neutral-90":"#DDE1E2","neutral-95":"#EDEFEF","neutral-100":"#F9F9F9","success-10":"#081A0F","success-20":"#0E2D1B","success-30":"#154126","success-40":"#1C5A34","success-50":"#257645","success-60":"#44A068","success-70":"#64C189","success-80":"#80DCA5","success-90":"#B4ECCB","success-95":"#D5F6E2","success-100":"#EFFCF4","warning-10":"#221302","warning-20":"#3B2204","warning-30":"#543106","warning-40":"#744408","warning-50":"#98590C","warning-60":"#D07A13","warning-70":"#E4A244","warning-80":"#F5C26C","warning-90":"#FADBA6","warning-95":"#FCECD4","warning-100":"#FDF7F0","error-10":"#330505","error-20":"#550808","error-30":"#750C0C","error-40":"#9E130F","error-50":"#CB2213","error-60":"#DE6C6C","error-70":"#E89B9B","error-80":"#EFBEBE","error-90":"#F5D9D9","error-95":"#F9ECEC","error-100":"#FCF7F7","info-10":"#021824","info-20":"#032B3F","info-30":"#053D59","info-40":"#06547B","info-50":"#176E9B","info-60":"#5296BE","info-70":"#82B5DA","info-80":"#ACCFE7","info-90":"#CCE3F1","info-95":"#E3F1F8","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000","primary-inverse":"#FEAB10"},Qr={"brand-10":"#881317","brand-20":"#B5191E","brand-30":"#B5040A","brand-40":"#D0333F","brand-50":"#DC666F","brand-60":"#E28087","brand-70":"#E7999F","brand-80":"#EDB3B7","brand-90":"#F3CCCF","brand-95":"#F9E6E7","brand-100":"#FCF2F3","primary-10":"#000000","primary-20":"#191919","primary-30":"#333333","primary-40":"#4D4D4D","primary-50":"#666666","primary-60":"#808080","primary-70":"#999999","primary-80":"#B3B3B3","primary-90":"#E6E6E6","primary-95":"#F7F7F7","primary-100":"#FFFFFF","secondary-10":"#19151D","secondary-20":"#2B2533","secondary-30":"#3E3649","secondary-40":"#564A64","secondary-50":"#6F637D","secondary-60":"#948B9F","secondary-70":"#B3ACBB","secondary-80":"#CCC8D2","secondary-90":"#E1DEE4","secondary-95":"#EFEEF1","secondary-100":"#F9F8F9","neutral-10":"#000000","neutral-20":"#191919","neutral-30":"#333333","neutral-40":"#4D4D4D","neutral-50":"#666666","neutral-60":"#808080","neutral-70":"#999999","neutral-80":"#B3B3B3","neutral-90":"#E6E6E6","neutral-95":"#F7F7F7","neutral-100":"#FFFFFF","success-10":"#081A0F","success-20":"#0E2D1B","success-30":"#154126","success-40":"#1C5A34","success-50":"#257645","success-60":"#44A068","success-70":"#64C189","success-80":"#80DCA5","success-90":"#B4ECCB","success-95":"#D5F6E2","success-100":"#EFFCF4","warning-10":"#221302","warning-20":"#3B2204","warning-30":"#543106","warning-40":"#744408","warning-50":"#98590C","warning-60":"#D07A13","warning-70":"#E4A244","warning-80":"#F5C26C","warning-90":"#FADBA6","warning-95":"#FCECD4","warning-100":"#FDF7F0","error-10":"#330505","error-20":"#550808","error-30":"#750C0C","error-40":"#9E130F","error-50":"#CB2213","error-60":"#DE6C6C","error-70":"#E89B9B","error-80":"#EFBEBE","error-90":"#F5D9D9","error-95":"#F9ECEC","error-100":"#FCF7F7","info-10":"#021824","info-20":"#032B3F","info-30":"#053D59","info-40":"#06547B","info-50":"#176E9B","info-60":"#5296BE","info-70":"#82B5DA","info-80":"#ACCFE7","info-90":"#CCE3F1","info-95":"#E3F1F8","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000","primary-inverse":"#FEAB10"},Xr={"brand-10":"#0E123A","brand-20":"#191E65","brand-30":"#232B90","brand-40":"#303BC5","brand-50":"#494CFF","brand-60":"#AD6EFF","brand-70":"#AEA4FF","brand-80":"#C5C4FF","brand-90":"#DDDCFF","brand-95":"#EDECFF","brand-100":"#F8F8FF","primary-10":"#10152B","primary-20":"#1C254B","primary-30":"#28356C","primary-40":"#38489A","primary-50":"#4D5AD7","primary-60":"#7487F2","primary-70":"#9AAAFC","primary-80":"#BDC7FD","primary-90":"#DADFFB","primary-95":"#ECEEFE","primary-100":"#F7F8FF","secondary-10":"#19151D","secondary-20":"#2B2533","secondary-30":"#3E3649","secondary-40":"#564A64","secondary-50":"#6F637D","secondary-60":"#948B9F","secondary-70":"#B3ACBB","secondary-80":"#CCC8D2","secondary-90":"#E1DEE4","secondary-95":"#EFEEF1","secondary-100":"#F9F8F9","neutral-10":"#161616","neutral-20":"#282828","neutral-30":"#393939","neutral-40":"#4E4E4E","neutral-50":"#686868","neutral-60":"#8E8E8E","neutral-70":"#AFAFB0","neutral-80":"#C7CACA","neutral-90":"#DDE1E2","neutral-95":"#EDEFEF","neutral-100":"#F9F9F9","success-10":"#081A0F","success-20":"#0E2D1B","success-30":"#154126","success-40":"#1C5A34","success-50":"#257645","success-60":"#44A068","success-70":"#64C189","success-80":"#80DCA5","success-90":"#B4ECCB","success-95":"#D5F6E2","success-100":"#EFFCF4","warning-10":"#221302","warning-20":"#3B2204","warning-30":"#543106","warning-40":"#744408","warning-50":"#98590C","warning-60":"#D07A13","warning-70":"#E4A244","warning-80":"#F5C26C","warning-90":"#FADBA6","warning-95":"#FCECD4","warning-100":"#FDF7F0","error-10":"#330505","error-20":"#550808","error-30":"#750C0C","error-40":"#9E130F","error-50":"#CB2213","error-60":"#DE6C6C","error-70":"#E89B9B","error-80":"#EFBEBE","error-90":"#F5D9D9","error-95":"#F9ECEC","error-100":"#FCF7F7","info-10":"#021824","info-20":"#032B3F","info-30":"#053D59","info-40":"#06547B","info-50":"#176E9B","info-60":"#5296BE","info-70":"#82B5DA","info-80":"#ACCFE7","info-90":"#CCE3F1","info-95":"#E3F1F8","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000","primary-inverse":"#FEAB10"},Kr={"brand-10":"#170F39","brand-20":"#281C62","brand-30":"#38268B","brand-40":"#4D34BF","brand-50":"#5735DF","brand-60":"#9986F9","brand-70":"#B2A5F8","brand-80":"#CDC2FA","brand-90":"#E2DCFC","brand-95":"#EFEDFE","brand-100":"#FAF8FD","primary-10":"#170F39","primary-20":"#281C62","primary-30":"#38268B","primary-40":"#4D34BF","primary-50":"#5735DF","primary-60":"#9986F9","primary-70":"#B2A5F8","primary-80":"#CDC2FA","primary-90":"#E2DCFC","primary-95":"#EFEDFE","primary-100":"#FAF8FD","secondary-10":"#251204","secondary-20":"#401F08","secondary-30":"#5B2C0B","secondary-40":"#7E3D0F","secondary-50":"#B04900","secondary-60":"#E26E1C","secondary-70":"#FF9445","secondary-80":"#FFBB8E","secondary-90":"#FFD9BF","secondary-95":"#FFECDF","secondary-100":"#FFF8F3","neutral-10":"#161616","neutral-20":"#282828","neutral-30":"#393939","neutral-40":"#4E4E4E","neutral-50":"#686868","neutral-60":"#8E8E8E","neutral-70":"#AFAFB0","neutral-80":"#C7CACA","neutral-90":"#DDE1E2","neutral-95":"#EDEFEF","neutral-100":"#F9F9F9","success-10":"#031B15","success-20":"#082D24","success-30":"#094134","success-40":"#0D5947","success-50":"#10755E","success-60":"#16A181","success-70":"#1EC59D","success-80":"#6FDDC2","success-90":"#AFECDE","success-95":"#D5F5ED","success-100":"#F1FCF9","warning-10":"#1F1500","warning-20":"#362500","warning-30":"#4D3501","warning-40":"#6A4801","warning-50":"#8B6001","warning-60":"#BF8301","warning-70":"#EAA102","warning-80":"#FFBF34","warning-90":"#FFDC8F","warning-95":"#FFEDC7","warning-100":"#FFF8EA","error-10":"#270F10","error-20":"#441B1B","error-30":"#612627","error-40":"#853535","error-50":"#AF4546","error-60":"#EC6162","error-70":"#F29696","error-80":"#F7BBBC","error-90":"#FAD8D8","error-95":"#FCEAEA","error-100":"#FEF7F7","info-10":"#0F1627","info-20":"#1B2745","info-30":"#273763","info-40":"#354D88","info-50":"#4665B3","info-60":"#618AF6","info-70":"#8DADFF","info-80":"#B4C9FF","info-90":"#D3DFFF","info-95":"#E9EFFF","info-100":"#F5F8FF",white:"#FFFFFF",black:"#000000","primary-inverse":"#FEAB10"},Jr={"brand-10":"#0E113C","brand-20":"#191E67","brand-30":"#232A92","brand-40":"#233FC2","brand-50":"#135CEA","brand-60":"#378FFB","brand-70":"#71B3FD","brand-80":"#9DCFFE","brand-90":"#C1E5FF","brand-95":"#DCF1FF","brand-100":"#F3FAFF","primary-10":"#0E113C","primary-20":"#191E67","primary-30":"#232A92","primary-40":"#233FC2","primary-50":"#135CEA","primary-60":"#378FFB","primary-70":"#71B3FD","primary-80":"#9DCFFE","primary-90":"#C1E5FF","primary-95":"#DCF1FF","primary-100":"#F3FAFF","secondary-10":"#34001F","secondary-20":"#540033","secondary-30":"#730045","secondary-40":"#9D0054","secondary-50":"#C61C64","secondary-60":"#DE6792","secondary-70":"#EB96B6","secondary-80":"#F5BAD2","secondary-90":"#FCD5E3","secondary-95":"#FDEBF1","secondary-100":"#FDF6F9","neutral-10":"#161616","neutral-20":"#282828","neutral-30":"#393939","neutral-40":"#4E4E4E","neutral-50":"#686868","neutral-60":"#8E8E8E","neutral-70":"#AFAFB0","neutral-80":"#C7CACA","neutral-90":"#DDE1E2","neutral-95":"#EDEFEF","neutral-100":"#F9F9F9","success-10":"#081A0F","success-20":"#0E2D1B","success-30":"#154126","success-40":"#1C5A34","success-50":"#257645","success-60":"#44A068","success-70":"#64C189","success-80":"#80DCA5","success-90":"#B4ECCB","success-95":"#D5F6E2","success-100":"#EFFCF4","warning-10":"#221302","warning-20":"#3B2204","warning-30":"#543106","warning-40":"#744408","warning-50":"#98590C","warning-60":"#D07A13","warning-70":"#E4A244","warning-80":"#F5C26C","warning-90":"#FADBA6","warning-95":"#FCECD4","warning-100":"#FDF7F0","error-10":"#330505","error-20":"#550808","error-30":"#750C0C","error-40":"#9E130F","error-50":"#CB2213","error-60":"#DE6C6C","error-70":"#E89B9B","error-80":"#EFBEBE","error-90":"#F5D9D9","error-95":"#F9ECEC","error-100":"#FCF7F7","info-10":"#021824","info-20":"#032B3F","info-30":"#053D59","info-40":"#06547B","info-50":"#176E9B","info-60":"#5296BE","info-70":"#82B5DA","info-80":"#ACCFE7","info-90":"#CCE3F1","info-95":"#E3F1F8","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000","primary-inverse":"#FEAB10"},en={"brand-10":"#370009","brand-20":"#4E000D","brand-30":"#640011","brand-40":"#850017","brand-50":"#9B001A","brand-60":"#EF2D4E","brand-70":"#F692A3","brand-80":"#FAB9C4","brand-90":"#FCD7DD","brand-95":"#FDEAED","brand-100":"#FEF8F9","primary-10":"#1F102A","primary-20":"#2F193F","primary-30":"#3E2053","primary-40":"#562D71","primary-50":"#663587","primary-60":"#9370AA","primary-70":"#BCA7CB","primary-80":"#D3C5DC","primary-90":"#E5DDEB","primary-95":"#F2EEF5","primary-100":"#FAF9FB","secondary-10":"#201316","secondary-20":"#311D22","secondary-30":"#3F272C","secondary-40":"#58363D","secondary-50":"#684049","secondary-60":"#AF6A7A","secondary-70":"#F393A8","secondary-80":"#FFB6C6","secondary-90":"#FFD6DF","secondary-95":"#FFE9EE","secondary-100":"#FFF7F9","neutral-10":"#161616","neutral-20":"#222222","neutral-30":"#2D2D2D","neutral-40":"#3F3F3F","neutral-50":"#4B4B4B","neutral-60":"#7E7E7E","neutral-70":"#AFAFB0","neutral-80":"#C7CACA","neutral-90":"#DDE1E2","neutral-95":"#EDEFEF","neutral-100":"#F9F9F9","success-10":"#081917","success-20":"#0D2724","success-30":"#11332E","success-40":"#174740","success-50":"#1B554C","success-60":"#2D8C7E","success-70":"#46C2AF","success-80":"#89D8CC","success-90":"#BCE9E2","success-95":"#DAF3EF","success-100":"#F0FAF9","warning-10":"#241200","warning-20":"#371C00","warning-30":"#482500","warning-40":"#633300","warning-50":"#763C00","warning-60":"#C36400","warning-70":"#FF9524","warning-80":"#FFBD77","warning-90":"#FFD9B2","warning-95":"#FFEBD6","warning-100":"#FFF7F0","error-10":"#330505","error-20":"#4B0707","error-30":"#600909","error-40":"#810D0D","error-50":"#98110F","error-60":"#D7504C","error-70":"#E89B9B","error-80":"#EFBEBE","error-90":"#F5D9D9","error-95":"#F9ECEC","error-100":"#FCF7F7","info-10":"#021824","info-20":"#032537","info-30":"#043148","info-40":"#054462","info-50":"#065175","info-60":"#3985AF","info-70":"#82B5DA","info-80":"#ACCFE7","info-90":"#CCE3F1","info-95":"#E3F1F8","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000","primary-inverse":"#FEAB10"},tn={collections:{lifesg:qr,bookingsg:Yr,rbs:Xr,mylegacy:Gr,ccube:Ur,oneservice:Zr,pa:Qr,a11yplayground:Kr,supportgowhere:Jr,imda:en},defaultValue:"lifesg"},rn={collections:{lifesg:qr,bookingsg:Yr,rbs:Xr,mylegacy:Gr,ccube:Ur,oneservice:Zr,pa:Qr,a11yplayground:Kr,supportgowhere:Jr,imda:en},defaultValue:"lifesg"},nn=e=>t=>{var r;const n=t.theme,o="dark"===(null==n?void 0:n.colourMode),i=Lr(o?rn:tn,null==n?void 0:n.colourScheme),s=o?"primitiveColourDark":"primitiveColour",a=null===(r=null==n?void 0:n.overrides)||void 0===r?void 0:r[s];return a?jr(i,e,a):i[e]},on={"brand-10":nn("brand-10"),"brand-20":nn("brand-20"),"brand-30":nn("brand-30"),"brand-40":nn("brand-40"),"brand-50":nn("brand-50"),"brand-60":nn("brand-60"),"brand-70":nn("brand-70"),"brand-80":nn("brand-80"),"brand-90":nn("brand-90"),"brand-95":nn("brand-95"),"brand-100":nn("brand-100"),"primary-10":nn("primary-10"),"primary-20":nn("primary-20"),"primary-30":nn("primary-30"),"primary-40":nn("primary-40"),"primary-50":nn("primary-50"),"primary-60":nn("primary-60"),"primary-70":nn("primary-70"),"primary-80":nn("primary-80"),"primary-90":nn("primary-90"),"primary-95":nn("primary-95"),"primary-100":nn("primary-100"),"secondary-10":nn("secondary-10"),"secondary-20":nn("secondary-20"),"secondary-30":nn("secondary-30"),"secondary-40":nn("secondary-40"),"secondary-50":nn("secondary-50"),"secondary-60":nn("secondary-60"),"secondary-70":nn("secondary-70"),"secondary-80":nn("secondary-80"),"secondary-90":nn("secondary-90"),"secondary-95":nn("secondary-95"),"secondary-100":nn("secondary-100"),"neutral-10":nn("neutral-10"),"neutral-20":nn("neutral-20"),"neutral-30":nn("neutral-30"),"neutral-40":nn("neutral-40"),"neutral-50":nn("neutral-50"),"neutral-60":nn("neutral-60"),"neutral-70":nn("neutral-70"),"neutral-80":nn("neutral-80"),"neutral-90":nn("neutral-90"),"neutral-95":nn("neutral-95"),"neutral-100":nn("neutral-100"),"success-10":nn("success-10"),"success-20":nn("success-20"),"success-30":nn("success-30"),"success-40":nn("success-40"),"success-50":nn("success-50"),"success-60":nn("success-60"),"success-70":nn("success-70"),"success-80":nn("success-80"),"success-90":nn("success-90"),"success-95":nn("success-95"),"success-100":nn("success-100"),"warning-10":nn("warning-10"),"warning-20":nn("warning-20"),"warning-30":nn("warning-30"),"warning-40":nn("warning-40"),"warning-50":nn("warning-50"),"warning-60":nn("warning-60"),"warning-70":nn("warning-70"),"warning-80":nn("warning-80"),"warning-90":nn("warning-90"),"warning-95":nn("warning-95"),"warning-100":nn("warning-100"),"error-10":nn("error-10"),"error-20":nn("error-20"),"error-30":nn("error-30"),"error-40":nn("error-40"),"error-50":nn("error-50"),"error-60":nn("error-60"),"error-70":nn("error-70"),"error-80":nn("error-80"),"error-90":nn("error-90"),"error-95":nn("error-95"),"error-100":nn("error-100"),"info-10":nn("info-10"),"info-20":nn("info-20"),"info-30":nn("info-30"),"info-40":nn("info-40"),"info-50":nn("info-50"),"info-60":nn("info-60"),"info-70":nn("info-70"),"info-80":nn("info-80"),"info-90":nn("info-90"),"info-95":nn("info-95"),"info-100":nn("info-100"),white:nn("white"),black:nn("black"),"primary-inverse":nn("primary-inverse")},sn={text:nn("neutral-20"),"text-subtle":nn("neutral-30"),"text-subtler":nn("neutral-50"),"text-subtlest":nn("neutral-60"),"text-primary":nn("primary-50"),"text-hover":nn("primary-40"),"text-selected":nn("primary-50"),"text-selected-hover":nn("primary-40"),"text-disabled":nn("neutral-50"),"text-disabled-subtle":nn("neutral-60"),"text-disabled-subtlest":nn("neutral-80"),"text-selected-disabled":nn("neutral-20"),"text-success":nn("success-40"),"text-warning":nn("warning-40"),"text-error":nn("error-40"),"text-info":nn("info-40"),"text-inverse":nn("white"),icon:nn("neutral-50"),"icon-subtle":nn("neutral-60"),"icon-strongest":nn("neutral-20"),"icon-primary":nn("primary-50"),"icon-primary-subtle":nn("primary-60"),"icon-primary-subtlest":nn("primary-70"),"icon-hover":nn("primary-40"),"icon-selected":nn("primary-50"),"icon-selected-hover":nn("primary-40"),"icon-disabled":nn("neutral-50"),"icon-disabled-subtle":nn("neutral-60"),"icon-selected-disabled":nn("neutral-60"),"icon-success":nn("success-50"),"icon-warning":nn("warning-60"),"icon-error":nn("error-50"),"icon-error-strong":nn("error-40"),"icon-info":nn("info-50"),"icon-inverse":nn("white"),"icon-primary-inverse":nn("primary-inverse"),border:nn("neutral-90"),"border-strong":nn("neutral-70"),"border-stronger":nn("neutral-50"),"border-primary":nn("primary-50"),"border-primary-subtle":nn("primary-60"),"border-hover":nn("primary-90"),"border-hover-strong":nn("primary-60"),"border-selected":nn("primary-50"),"border-selected-subtle":nn("primary-70"),"border-selected-subtlest":nn("primary-90"),"border-selected-hover":nn("primary-40"),"border-focus":nn("primary-60"),"border-focus-strong":nn("primary-50"),"border-disabled":nn("neutral-90"),"border-selected-disabled":nn("neutral-70"),"border-success":nn("success-60"),"border-warning":nn("warning-60"),"border-error":nn("error-60"),"border-error-focus":nn("error-60"),"border-error-focus-strong":nn("error-40"),"border-error-strong":nn("error-40"),"border-info":nn("info-60"),bg:nn("white"),"bg-strong":nn("neutral-100"),"bg-stronger":nn("neutral-95"),"bg-strongest":nn("neutral-90"),"bg-hover":nn("primary-95"),"bg-hover-strong":nn("primary-90"),"bg-hover-subtle":nn("primary-100"),"bg-hover-neutral":nn("neutral-100"),"bg-hover-neutral-strong":nn("neutral-90"),"bg-selected":nn("primary-95"),"bg-selected-hover":nn("primary-90"),"bg-selected-strong":nn("primary-90"),"bg-selected-stronger":nn("primary-70"),"bg-selected-strongest":nn("primary-50"),"bg-selected-strongest-hover":nn("primary-40"),"bg-disabled":nn("neutral-95"),"bg-selected-disabled":nn("neutral-95"),"bg-selected-stronger-disabled":nn("neutral-70"),"bg-success":nn("success-100"),"bg-success-hover":nn("success-95"),"bg-success-strong":nn("success-50"),"bg-success-strong-hover":nn("success-40"),"bg-warning":nn("warning-100"),"bg-warning-hover":nn("warning-95"),"bg-warning-strong":nn("warning-50"),"bg-warning-strong-hover":nn("warning-40"),"bg-info":nn("info-100"),"bg-info-hover":nn("info-95"),"bg-info-strong":nn("info-50"),"bg-info-strong-hover":nn("info-40"),"bg-error":nn("error-100"),"bg-error-hover":nn("error-95"),"bg-error-strong":nn("error-50"),"bg-error-strong-hover":nn("error-40"),"bg-inverse":nn("neutral-20"),"bg-inverse-subtle":nn("neutral-30"),"bg-inverse-subtler":nn("neutral-50"),"bg-inverse-subtlest":nn("neutral-60"),"bg-inverse-hover":nn("neutral-40"),"bg-primary":nn("primary-50"),"bg-primary-subtle":nn("primary-60"),"bg-primary-subtler":nn("primary-95"),"bg-primary-subtlest":nn("primary-100"),"bg-available":"#6DD0A1","bg-primary-hover":nn("primary-40"),"bg-primary-subtlest-hover":nn("primary-90"),"bg-primary-subtlest-selected":nn("primary-90"),"overlay-strong":"rgba(40, 40, 40, 0.85)","overlay-subtle":"rgba(40, 40, 40, 0.20)",hyperlink:nn("primary-50"),"hyperlink-hover":nn("primary-40"),"hyperlink-visited":nn("primary-40"),"hyperlink-inverse":nn("primary-inverse"),"focus-ring":nn("primary-50"),"focus-ring-inverse":nn("white")},an={text:nn("neutral-100"),"text-subtle":nn("neutral-80"),"text-subtler":nn("neutral-60"),"text-subtlest":nn("neutral-50"),"text-primary":nn("primary-60"),"text-hover":nn("primary-70"),"text-selected":nn("primary-60"),"text-selected-hover":nn("primary-70"),"text-disabled":nn("neutral-60"),"text-disabled-subtle":nn("neutral-50"),"text-disabled-subtlest":nn("neutral-30"),"text-selected-disabled":nn("neutral-90"),"text-success":nn("success-70"),"text-warning":nn("warning-70"),"text-error":nn("error-70"),"text-info":nn("info-70"),"text-inverse":nn("black"),icon:nn("neutral-60"),"icon-subtle":nn("neutral-50"),"icon-strongest":nn("neutral-90"),"icon-primary":nn("primary-60"),"icon-primary-subtle":nn("primary-50"),"icon-primary-subtlest":nn("primary-40"),"icon-hover":nn("primary-70"),"icon-selected":nn("primary-60"),"icon-selected-hover":nn("primary-70"),"icon-disabled":nn("neutral-60"),"icon-disabled-subtle":nn("neutral-50"),"icon-selected-disabled":nn("neutral-50"),"icon-success":nn("success-60"),"icon-warning":nn("warning-50"),"icon-error":nn("error-60"),"icon-error-strong":nn("error-70"),"icon-info":nn("info-60"),"icon-inverse":nn("black"),"icon-primary-inverse":nn("primary-inverse"),border:nn("neutral-20"),"border-strong":nn("neutral-40"),"border-stronger":nn("neutral-60"),"border-primary":nn("primary-60"),"border-primary-subtle":nn("primary-50"),"border-hover":nn("primary-20"),"border-hover-strong":nn("primary-50"),"border-selected":nn("primary-60"),"border-selected-subtle":nn("primary-40"),"border-selected-subtlest":nn("primary-20"),"border-selected-hover":nn("primary-70"),"border-focus":nn("primary-50"),"border-focus-strong":nn("primary-60"),"border-disabled":nn("neutral-20"),"border-selected-disabled":nn("neutral-40"),"border-success":nn("success-50"),"border-warning":nn("warning-50"),"border-error":nn("error-50"),"border-error-focus":nn("error-50"),"border-error-focus-strong":nn("error-70"),"border-error-strong":nn("error-70"),"border-info":nn("info-50"),bg:nn("black"),"bg-strong":nn("neutral-10"),"bg-stronger":nn("neutral-20"),"bg-strongest":nn("neutral-20"),"bg-hover":nn("primary-20"),"bg-hover-strong":nn("primary-20"),"bg-hover-subtle":nn("primary-10"),"bg-hover-neutral":nn("neutral-10"),"bg-hover-neutral-strong":nn("neutral-20"),"bg-selected":nn("primary-20"),"bg-selected-hover":nn("primary-20"),"bg-selected-strong":nn("primary-20"),"bg-selected-stronger":nn("primary-40"),"bg-selected-strongest":nn("primary-60"),"bg-selected-strongest-hover":nn("primary-70"),"bg-disabled":nn("neutral-20"),"bg-selected-disabled":nn("neutral-20"),"bg-selected-stronger-disabled":nn("neutral-40"),"bg-success":nn("success-10"),"bg-success-hover":nn("success-20"),"bg-success-strong":nn("success-60"),"bg-success-strong-hover":nn("success-70"),"bg-warning":nn("warning-10"),"bg-warning-hover":nn("warning-20"),"bg-warning-strong":nn("warning-60"),"bg-warning-strong-hover":nn("warning-70"),"bg-info":nn("info-10"),"bg-info-hover":nn("info-20"),"bg-info-strong":nn("info-60"),"bg-info-strong-hover":nn("info-70"),"bg-error":nn("error-10"),"bg-error-hover":nn("error-20"),"bg-error-strong":nn("error-60"),"bg-error-strong-hover":nn("error-70"),"bg-inverse":nn("neutral-90"),"bg-inverse-subtle":nn("neutral-80"),"bg-inverse-subtler":nn("neutral-60"),"bg-inverse-subtlest":nn("neutral-50"),"bg-inverse-hover":nn("neutral-70"),"bg-primary":nn("primary-60"),"bg-primary-subtle":nn("primary-50"),"bg-primary-subtler":nn("primary-20"),"bg-primary-subtlest":nn("primary-10"),"bg-available":"#185339","bg-primary-hover":nn("primary-70"),"bg-primary-subtlest-hover":nn("primary-20"),"bg-primary-subtlest-selected":nn("primary-20"),"overlay-strong":"rgba(78, 78, 78, 0.80)","overlay-subtle":"rgba(78, 78, 78, 0.50)",hyperlink:nn("primary-60"),"hyperlink-hover":nn("primary-70"),"hyperlink-visited":nn("primary-70"),"hyperlink-inverse":nn("primary-inverse"),"focus-ring":nn("primary-60"),"focus-ring-inverse":nn("black")},ln={text:nn("neutral-30"),"text-subtle":nn("neutral-40"),"text-subtler":nn("neutral-50"),"text-subtlest":nn("neutral-70"),"text-primary":nn("neutral-10"),"text-hover":nn("neutral-70"),"text-selected":nn("neutral-20"),"text-selected-hover":nn("neutral-10"),"text-disabled":nn("neutral-50"),"text-disabled-subtle":nn("neutral-60"),"text-disabled-subtlest":nn("neutral-80"),"text-selected-disabled":nn("neutral-40"),"text-success":nn("success-40"),"text-warning":nn("warning-40"),"text-error":nn("brand-30"),"text-info":nn("neutral-40"),"text-inverse":nn("neutral-100"),icon:nn("neutral-40"),"icon-subtle":nn("neutral-50"),"icon-strongest":nn("neutral-10"),"icon-primary":nn("neutral-10"),"icon-primary-subtle":nn("neutral-30"),"icon-primary-subtlest":nn("neutral-60"),"icon-hover":nn("neutral-70"),"icon-selected":nn("brand-20"),"icon-selected-hover":nn("brand-10"),"icon-disabled":nn("neutral-50"),"icon-disabled-subtle":nn("neutral-60"),"icon-selected-disabled":nn("neutral-40"),"icon-success":nn("success-40"),"icon-warning":nn("warning-60"),"icon-error":nn("brand-30"),"icon-error-strong":nn("brand-10"),"icon-info":nn("neutral-40"),"icon-inverse":nn("neutral-100"),"icon-primary-inverse":"#F9B371",border:nn("neutral-90"),"border-strong":nn("neutral-30"),"border-stronger":nn("neutral-20"),"border-primary":nn("neutral-40"),"border-primary-subtle":nn("neutral-60"),"border-hover":nn("neutral-80"),"border-hover-strong":nn("neutral-10"),"border-selected":nn("brand-20"),"border-selected-subtle":nn("neutral-40"),"border-selected-subtlest":nn("neutral-70"),"border-selected-hover":nn("neutral-10"),"border-focus":nn("neutral-20"),"border-focus-strong":nn("neutral-10"),"border-disabled":nn("neutral-90"),"border-selected-disabled":nn("neutral-80"),"border-success":nn("success-40"),"border-warning":nn("warning-60"),"border-error":nn("brand-30"),"border-error-focus":nn("brand-20"),"border-error-focus-strong":nn("brand-10"),"border-error-strong":nn("brand-20"),"border-info":nn("neutral-40"),bg:nn("neutral-100"),"bg-strong":nn("neutral-95"),"bg-stronger":nn("neutral-90"),"bg-strongest":nn("neutral-80"),"bg-hover":nn("brand-90"),"bg-hover-strong":nn("brand-80"),"bg-hover-subtle":nn("neutral-90"),"bg-hover-neutral":nn("neutral-90"),"bg-hover-neutral-strong":nn("neutral-90"),"bg-selected":nn("brand-100"),"bg-selected-hover":nn("brand-30"),"bg-selected-strong":nn("brand-50"),"bg-selected-stronger":nn("brand-40"),"bg-selected-strongest":nn("brand-20"),"bg-selected-strongest-hover":nn("brand-10"),"bg-disabled":nn("neutral-90"),"bg-selected-disabled":nn("neutral-90"),"bg-selected-stronger-disabled":nn("neutral-80"),"bg-success":nn("success-100"),"bg-success-hover":nn("success-95"),"bg-success-strong":nn("success-50"),"bg-success-strong-hover":nn("success-40"),"bg-warning":nn("warning-100"),"bg-warning-hover":nn("warning-95"),"bg-warning-strong":nn("warning-50"),"bg-warning-strong-hover":nn("warning-40"),"bg-info":nn("neutral-95"),"bg-info-hover":nn("info-95"),"bg-info-strong":nn("info-50"),"bg-info-strong-hover":nn("info-40"),"bg-error":nn("brand-100"),"bg-error-hover":nn("error-95"),"bg-error-strong":nn("error-50"),"bg-error-strong-hover":nn("error-40"),"bg-inverse":nn("neutral-40"),"bg-inverse-subtle":nn("neutral-60"),"bg-inverse-subtler":nn("neutral-70"),"bg-inverse-subtlest":nn("neutral-80"),"bg-inverse-hover":nn("neutral-30"),"bg-primary":nn("brand-20"),"bg-primary-subtle":nn("brand-60"),"bg-primary-subtler":nn("brand-80"),"bg-primary-subtlest":nn("brand-100"),"bg-available":nn("success-60"),"bg-primary-hover":nn("brand-10"),"bg-primary-subtlest-hover":nn("brand-80"),"bg-primary-subtlest-selected":nn("brand-40"),"overlay-strong":"rgba(25, 25, 25, 0.95)","overlay-subtle":"rgba(25, 25, 25, 0.20)",hyperlink:nn("neutral-10"),"hyperlink-hover":nn("neutral-40"),"hyperlink-visited":nn("neutral-50"),"hyperlink-inverse":"#F8AE68","focus-ring":nn("primary-50"),"focus-ring-inverse":nn("white")},dn={text:nn("neutral-20"),"text-subtle":nn("neutral-30"),"text-subtler":nn("neutral-50"),"text-subtlest":nn("neutral-60"),"text-primary":nn("primary-50"),"text-hover":nn("primary-40"),"text-selected":nn("primary-50"),"text-selected-hover":nn("primary-40"),"text-disabled":nn("neutral-50"),"text-disabled-subtle":nn("neutral-60"),"text-disabled-subtlest":nn("neutral-80"),"text-selected-disabled":nn("neutral-20"),"text-success":nn("success-40"),"text-warning":nn("warning-40"),"text-error":nn("error-40"),"text-info":nn("info-40"),"text-inverse":nn("white"),icon:nn("neutral-50"),"icon-subtle":nn("neutral-60"),"icon-strongest":nn("neutral-20"),"icon-primary":nn("primary-50"),"icon-primary-subtle":nn("primary-60"),"icon-primary-subtlest":nn("primary-70"),"icon-hover":nn("primary-40"),"icon-selected":nn("primary-50"),"icon-selected-hover":nn("primary-40"),"icon-disabled":nn("neutral-50"),"icon-disabled-subtle":nn("neutral-60"),"icon-selected-disabled":nn("neutral-60"),"icon-success":nn("success-50"),"icon-warning":nn("warning-60"),"icon-error":nn("error-50"),"icon-error-strong":nn("error-40"),"icon-info":nn("info-50"),"icon-inverse":nn("white"),"icon-primary-inverse":nn("primary-inverse"),border:nn("neutral-90"),"border-strong":nn("neutral-70"),"border-stronger":nn("neutral-50"),"border-primary":nn("primary-50"),"border-primary-subtle":nn("primary-60"),"border-hover":nn("primary-90"),"border-hover-strong":nn("primary-60"),"border-selected":nn("primary-50"),"border-selected-subtle":nn("primary-70"),"border-selected-subtlest":nn("primary-90"),"border-selected-hover":nn("primary-40"),"border-focus":nn("primary-60"),"border-focus-strong":nn("primary-50"),"border-disabled":nn("neutral-90"),"border-selected-disabled":nn("neutral-70"),"border-success":nn("success-60"),"border-warning":nn("warning-60"),"border-error":nn("error-60"),"border-error-focus":nn("error-60"),"border-error-focus-strong":nn("error-40"),"border-error-strong":nn("error-40"),"border-info":nn("info-60"),bg:nn("white"),"bg-strong":nn("neutral-100"),"bg-stronger":nn("neutral-95"),"bg-strongest":nn("neutral-90"),"bg-hover":nn("primary-95"),"bg-hover-strong":nn("primary-90"),"bg-hover-subtle":nn("primary-100"),"bg-hover-neutral":nn("neutral-100"),"bg-hover-neutral-strong":nn("neutral-90"),"bg-selected":nn("primary-95"),"bg-selected-hover":nn("primary-90"),"bg-selected-strong":nn("primary-90"),"bg-selected-stronger":nn("primary-70"),"bg-selected-strongest":nn("primary-50"),"bg-selected-strongest-hover":nn("primary-40"),"bg-disabled":nn("neutral-95"),"bg-selected-disabled":nn("neutral-95"),"bg-selected-stronger-disabled":nn("neutral-70"),"bg-success":nn("success-100"),"bg-success-hover":nn("success-95"),"bg-success-strong":nn("success-50"),"bg-success-strong-hover":nn("success-40"),"bg-warning":nn("warning-100"),"bg-warning-hover":nn("warning-95"),"bg-warning-strong":nn("warning-50"),"bg-warning-strong-hover":nn("warning-40"),"bg-info":nn("info-100"),"bg-info-hover":nn("info-95"),"bg-info-strong":nn("info-50"),"bg-info-strong-hover":nn("info-40"),"bg-error":nn("error-100"),"bg-error-hover":nn("error-95"),"bg-error-strong":nn("error-50"),"bg-error-strong-hover":nn("error-40"),"bg-inverse":nn("neutral-20"),"bg-inverse-subtle":nn("neutral-30"),"bg-inverse-subtler":nn("neutral-50"),"bg-inverse-subtlest":nn("neutral-60"),"bg-inverse-hover":nn("neutral-40"),"bg-primary":nn("primary-50"),"bg-primary-subtle":nn("primary-60"),"bg-primary-subtler":nn("primary-95"),"bg-primary-subtlest":nn("primary-100"),"bg-available":"#6DD0A1","bg-primary-hover":nn("primary-40"),"bg-primary-subtlest-hover":nn("primary-90"),"bg-primary-subtlest-selected":nn("primary-90"),"overlay-strong":"rgba(40, 40, 40, 0.85)","overlay-subtle":"rgba(40, 40, 40, 0.20)",hyperlink:nn("primary-50"),"hyperlink-hover":nn("primary-40"),"hyperlink-visited":nn("primary-40"),"hyperlink-inverse":nn("primary-inverse"),"focus-ring":nn("primary-50"),"focus-ring-inverse":nn("white")},cn={text:nn("neutral-100"),"text-subtle":nn("neutral-80"),"text-subtler":nn("neutral-60"),"text-subtlest":nn("neutral-50"),"text-primary":nn("primary-60"),"text-hover":nn("primary-70"),"text-selected":nn("primary-60"),"text-selected-hover":nn("primary-70"),"text-disabled":nn("neutral-60"),"text-disabled-subtle":nn("neutral-50"),"text-disabled-subtlest":nn("neutral-30"),"text-selected-disabled":nn("neutral-90"),"text-success":nn("success-70"),"text-warning":nn("warning-70"),"text-error":nn("error-70"),"text-info":nn("info-70"),"text-inverse":nn("black"),icon:nn("neutral-60"),"icon-subtle":nn("neutral-50"),"icon-strongest":nn("neutral-90"),"icon-primary":nn("primary-60"),"icon-primary-subtle":nn("primary-50"),"icon-primary-subtlest":nn("primary-40"),"icon-hover":nn("primary-70"),"icon-selected":nn("primary-60"),"icon-selected-hover":nn("primary-70"),"icon-disabled":nn("neutral-60"),"icon-disabled-subtle":nn("neutral-50"),"icon-selected-disabled":nn("neutral-50"),"icon-success":nn("success-60"),"icon-warning":nn("warning-50"),"icon-error":nn("error-60"),"icon-error-strong":nn("error-70"),"icon-info":nn("info-60"),"icon-inverse":nn("black"),"icon-primary-inverse":nn("primary-inverse"),border:nn("neutral-20"),"border-strong":nn("neutral-40"),"border-stronger":nn("neutral-60"),"border-primary":nn("primary-60"),"border-primary-subtle":nn("primary-50"),"border-hover":nn("primary-20"),"border-hover-strong":nn("primary-50"),"border-selected":nn("primary-60"),"border-selected-subtle":nn("primary-40"),"border-selected-subtlest":nn("primary-20"),"border-selected-hover":nn("primary-70"),"border-focus":nn("primary-50"),"border-focus-strong":nn("primary-60"),"border-disabled":nn("neutral-20"),"border-selected-disabled":nn("neutral-40"),"border-success":nn("success-50"),"border-warning":nn("warning-50"),"border-error":nn("error-50"),"border-error-focus":nn("error-50"),"border-error-focus-strong":nn("error-70"),"border-error-strong":nn("error-70"),"border-info":nn("info-50"),bg:nn("black"),"bg-strong":nn("neutral-10"),"bg-stronger":nn("neutral-20"),"bg-strongest":nn("neutral-20"),"bg-hover":nn("primary-20"),"bg-hover-strong":nn("primary-20"),"bg-hover-subtle":nn("primary-10"),"bg-hover-neutral":nn("neutral-10"),"bg-hover-neutral-strong":nn("neutral-20"),"bg-selected":nn("primary-20"),"bg-selected-hover":nn("primary-20"),"bg-selected-strong":nn("primary-20"),"bg-selected-stronger":nn("primary-40"),"bg-selected-strongest":nn("primary-60"),"bg-selected-strongest-hover":nn("primary-70"),"bg-disabled":nn("neutral-20"),"bg-selected-disabled":nn("neutral-20"),"bg-selected-stronger-disabled":nn("neutral-40"),"bg-success":nn("success-10"),"bg-success-hover":nn("success-20"),"bg-success-strong":nn("success-60"),"bg-success-strong-hover":nn("success-70"),"bg-warning":nn("warning-10"),"bg-warning-hover":nn("warning-20"),"bg-warning-strong":nn("warning-60"),"bg-warning-strong-hover":nn("warning-70"),"bg-info":nn("info-10"),"bg-info-hover":nn("info-20"),"bg-info-strong":nn("info-60"),"bg-info-strong-hover":nn("info-70"),"bg-error":nn("error-10"),"bg-error-hover":nn("error-20"),"bg-error-strong":nn("error-60"),"bg-error-strong-hover":nn("error-70"),"bg-inverse":nn("neutral-90"),"bg-inverse-subtle":nn("neutral-80"),"bg-inverse-subtler":nn("neutral-60"),"bg-inverse-subtlest":nn("neutral-50"),"bg-inverse-hover":nn("neutral-70"),"bg-primary":nn("primary-60"),"bg-primary-subtle":nn("primary-50"),"bg-primary-subtler":nn("primary-20"),"bg-primary-subtlest":nn("primary-10"),"bg-available":"#185339","bg-primary-hover":nn("primary-70"),"bg-primary-subtlest-hover":nn("primary-20"),"bg-primary-subtlest-selected":nn("primary-20"),"overlay-strong":"rgba(78, 78, 78, 0.80)","overlay-subtle":"rgba(78, 78, 78, 0.50)",hyperlink:nn("primary-60"),"hyperlink-hover":nn("primary-70"),"hyperlink-visited":nn("primary-70"),"hyperlink-inverse":nn("primary-inverse"),"focus-ring":nn("primary-60"),"focus-ring-inverse":nn("black")},un={collections:{lifesg:sn,bookingsg:sn,rbs:sn,mylegacy:sn,ccube:sn,oneservice:sn,pa:ln,a11yplayground:dn,supportgowhere:sn,imda:sn},defaultValue:"lifesg"},hn={collections:{lifesg:an,bookingsg:an,rbs:an,mylegacy:an,ccube:an,oneservice:an,pa:an,a11yplayground:cn,supportgowhere:an,imda:an},defaultValue:"lifesg"},gn=e=>t=>{var r;const n=t.theme,o="dark"===(null==n?void 0:n.colourMode),i=Lr(o?hn:un,null==n?void 0:n.colourScheme),s=o?"semanticColourDark":"semanticColour",a=null===(r=null==n?void 0:n.overrides)||void 0===r?void 0:r[s],l=a?jr(i,e,a):i[e];return"function"==typeof l?l(t):l},mn={text:gn("text"),"text-subtle":gn("text-subtle"),"text-subtler":gn("text-subtler"),"text-subtlest":gn("text-subtlest"),"text-primary":gn("text-primary"),"text-hover":gn("text-hover"),"text-selected":gn("text-selected"),"text-selected-hover":gn("text-selected-hover"),"text-disabled":gn("text-disabled"),"text-disabled-subtle":gn("text-disabled-subtle"),"text-disabled-subtlest":gn("text-disabled-subtlest"),"text-selected-disabled":gn("text-selected-disabled"),"text-success":gn("text-success"),"text-warning":gn("text-warning"),"text-error":gn("text-error"),"text-info":gn("text-info"),"text-inverse":gn("text-inverse"),icon:gn("icon"),"icon-subtle":gn("icon-subtle"),"icon-strongest":gn("icon-strongest"),"icon-primary":gn("icon-primary"),"icon-primary-subtle":gn("icon-primary-subtle"),"icon-primary-subtlest":gn("icon-primary-subtlest"),"icon-hover":gn("icon-hover"),"icon-selected":gn("icon-selected"),"icon-selected-hover":gn("icon-selected-hover"),"icon-disabled":gn("icon-disabled"),"icon-disabled-subtle":gn("icon-disabled-subtle"),"icon-selected-disabled":gn("icon-selected-disabled"),"icon-success":gn("icon-success"),"icon-warning":gn("icon-warning"),"icon-error":gn("icon-error"),"icon-error-strong":gn("icon-error-strong"),"icon-info":gn("icon-info"),"icon-inverse":gn("icon-inverse"),"icon-primary-inverse":gn("icon-primary-inverse"),border:gn("border"),"border-strong":gn("border-strong"),"border-stronger":gn("border-stronger"),"border-primary":gn("border-primary"),"border-primary-subtle":gn("border-primary-subtle"),"border-hover":gn("border-hover"),"border-hover-strong":gn("border-hover-strong"),"border-selected":gn("border-selected"),"border-selected-subtle":gn("border-selected-subtle"),"border-selected-subtlest":gn("border-selected-subtlest"),"border-selected-hover":gn("border-selected-hover"),"border-focus":gn("border-focus"),"border-focus-strong":gn("border-focus-strong"),"border-disabled":gn("border-disabled"),"border-selected-disabled":gn("border-selected-disabled"),"border-success":gn("border-success"),"border-warning":gn("border-warning"),"border-error":gn("border-error"),"border-error-focus":gn("border-error-focus"),"border-error-focus-strong":gn("border-error-focus-strong"),"border-error-strong":gn("border-error-strong"),"border-info":gn("border-info"),bg:gn("bg"),"bg-strong":gn("bg-strong"),"bg-stronger":gn("bg-stronger"),"bg-strongest":gn("bg-strongest"),"bg-hover":gn("bg-hover"),"bg-hover-strong":gn("bg-hover-strong"),"bg-hover-subtle":gn("bg-hover-subtle"),"bg-hover-neutral":gn("bg-hover-neutral"),"bg-hover-neutral-strong":gn("bg-hover-neutral-strong"),"bg-selected":gn("bg-selected"),"bg-selected-hover":gn("bg-selected-hover"),"bg-selected-strong":gn("bg-selected-strong"),"bg-selected-stronger":gn("bg-selected-stronger"),"bg-selected-strongest":gn("bg-selected-strongest"),"bg-selected-strongest-hover":gn("bg-selected-strongest-hover"),"bg-disabled":gn("bg-disabled"),"bg-selected-disabled":gn("bg-selected-disabled"),"bg-selected-stronger-disabled":gn("bg-selected-stronger-disabled"),"bg-success":gn("bg-success"),"bg-success-hover":gn("bg-success-hover"),"bg-success-strong":gn("bg-success-strong"),"bg-success-strong-hover":gn("bg-success-strong-hover"),"bg-warning":gn("bg-warning"),"bg-warning-hover":gn("bg-warning-hover"),"bg-warning-strong":gn("bg-warning-strong"),"bg-warning-strong-hover":gn("bg-warning-strong-hover"),"bg-info":gn("bg-info"),"bg-info-hover":gn("bg-info-hover"),"bg-info-strong":gn("bg-info-strong"),"bg-info-strong-hover":gn("bg-info-strong-hover"),"bg-error":gn("bg-error"),"bg-error-hover":gn("bg-error-hover"),"bg-error-strong":gn("bg-error-strong"),"bg-error-strong-hover":gn("bg-error-strong-hover"),"bg-inverse":gn("bg-inverse"),"bg-inverse-subtle":gn("bg-inverse-subtle"),"bg-inverse-subtler":gn("bg-inverse-subtler"),"bg-inverse-subtlest":gn("bg-inverse-subtlest"),"bg-inverse-hover":gn("bg-inverse-hover"),"bg-primary":gn("bg-primary"),"bg-primary-subtle":gn("bg-primary-subtle"),"bg-primary-subtler":gn("bg-primary-subtler"),"bg-primary-subtlest":gn("bg-primary-subtlest"),"bg-available":gn("bg-available"),"bg-primary-hover":gn("bg-primary-hover"),"bg-primary-subtlest-hover":gn("bg-primary-subtlest-hover"),"bg-primary-subtlest-selected":gn("bg-primary-subtlest-selected"),"overlay-strong":gn("overlay-strong"),"overlay-subtle":gn("overlay-subtle"),hyperlink:gn("hyperlink"),"hyperlink-hover":gn("hyperlink-hover"),"hyperlink-visited":gn("hyperlink-visited"),"hyperlink-inverse":gn("hyperlink-inverse"),"focus-ring":gn("focus-ring"),"focus-ring-inverse":gn("focus-ring-inverse")},pn={collections:{default:{solid:e=>t=>{var r,n,o;const{thickness:i,radius:s,colour:a}=e||{},l=null!==(r="function"==typeof i?i(t):i)&&void 0!==r?r:Nr["width-010"](t),d=null!==(n="function"==typeof s?s(t):s)&&void 0!==n?n:0,c=null!==(o="function"==typeof a?a(t):a)&&void 0!==o?o:mn.border(t),u=Nr.solid;return F`
            border: ${l} ${u} ${c};
            border-radius: ${d};
        `},"dashed-default":e=>t=>{var r,n,o;const{thickness:i,radius:s,colour:a}=e||{},l=null!==(r="function"==typeof i?i(t):i)&&void 0!==r?r:Nr["width-010"](t),d=null!==(n="function"==typeof s?s(t):s)&&void 0!==n?n:0,c=null!==(o="function"==typeof a?a(t):a)&&void 0!==o?o:mn.border(t),u=encodeURIComponent(`<svg width='100%' height='100%' xmlns='http://www.w3.org/2000/svg'><rect width='100%' height='100%' fill='none' rx='${d}' ry='${d}' stroke='${c}' stroke-width='${l}' stroke-dasharray='4, 8' stroke-dashoffset='0' stroke-linecap='square'/></svg>`);return F`
            background-image: url("data:image/svg+xml,${u}");
            border-radius: ${d};
        `}}},defaultValue:"default"},fn=e=>1===e.length&&"theme"in e[0],bn=e=>(...t)=>r=>{const n=fn(t)?[]:t,o=fn(t)?t[0]:r,i=o.theme;return(0,Lr(pn,null==i?void 0:i.borderScheme)[e])(...n)(o)},yn={solid:bn("solid"),"dashed-default":bn("dashed-default")},vn={collections:{default:{"xxs-min":0,"xxs-max":320,"xs-min":321,"xs-max":375,"sm-min":376,"sm-max":480,"md-min":481,"md-max":768,"lg-min":769,"lg-max":1200,"xl-min":1201,"xl-max":1440,"xxl-min":1441,"xxs-column":8,"xs-column":8,"sm-column":8,"md-column":8,"lg-column":12,"xl-column":12,"xxl-column":12,"xxs-gutter":16,"xs-gutter":16,"sm-gutter":16,"md-gutter":16,"lg-gutter":32,"xl-gutter":32,"xxl-gutter":32,"xxs-margin":24,"xs-margin":24,"sm-margin":24,"md-margin":24,"lg-margin":48,"xl-margin":48,"xxl-margin":48}},defaultValue:"default"},xn=e=>t=>{var r;const n=t.theme,o=Lr(vn,null==n?void 0:n.breakpointScheme);let i;return i=(null===(r=null==n?void 0:n.overrides)||void 0===r?void 0:r.breakpoint)?jr(o,e,n.overrides.breakpoint):o[e],i},wn={"xxs-min":xn("xxs-min"),"xxs-max":xn("xxs-max"),"xs-min":xn("xs-min"),"xs-max":xn("xs-max"),"sm-min":xn("sm-min"),"sm-max":xn("sm-max"),"md-min":xn("md-min"),"md-max":xn("md-max"),"lg-min":xn("lg-min"),"lg-max":xn("lg-max"),"xl-min":xn("xl-min"),"xl-max":xn("xl-max"),"xxl-min":xn("xxl-min"),"xxs-column":xn("xxs-column"),"xs-column":xn("xs-column"),"sm-column":xn("sm-column"),"md-column":xn("md-column"),"lg-column":xn("lg-column"),"xl-column":xn("xl-column"),"xxl-column":xn("xxl-column"),"xxs-gutter":xn("xxs-gutter"),"xs-gutter":xn("xs-gutter"),"sm-gutter":xn("sm-gutter"),"md-gutter":xn("md-gutter"),"lg-gutter":xn("lg-gutter"),"xl-gutter":xn("xl-gutter"),"xxl-gutter":xn("xxl-gutter"),"xxs-margin":xn("xxs-margin"),"xs-margin":xn("xs-margin"),"sm-margin":xn("sm-margin"),"md-margin":xn("md-margin"),"lg-margin":xn("lg-margin"),"xl-margin":xn("xl-margin"),"xxl-margin":xn("xxl-margin")},$n=e=>("max-width"===e?["xxs","xs","sm","md","lg","xl"]:["xxs","xs","sm","md","lg","xl","xxl"]).reduce(((t,r)=>(t[r]=((e,t)=>{const r=wn["max-width"===e?`${t}-max`:`${t}-min`];return t=>{const n=r(t);return`@media screen and (${e}: ${n}px)`}})(e,r),t)),{}),Fn={MaxWidth:$n("max-width"),MinWidth:$n("min-width")},Cn={collections:{default:{"heading-size-xxl":"3rem","heading-size-xl":"2.5rem","heading-size-lg":"2rem","heading-size-md":"1.625rem","heading-size-sm":"1.375rem","heading-size-xs":"1.125rem","heading-lh-xxl":"3.5rem","heading-lh-xl":"3rem","heading-lh-lg":"2.5rem","heading-lh-md":"2.25rem","heading-lh-sm":"1.75rem","heading-lh-xs":"1.625rem","heading-ls-xxl":"-0.056rem","heading-ls-xl":"-0.032rem","heading-ls-lg":"-0.032rem","heading-ls-md":"0rem","heading-ls-sm":"0rem","heading-ls-xs":"0rem","weight-light":"300","weight-regular":"400","weight-semibold":"600","weight-bold":"700","font-family":"Open Sans","body-size-baseline":"1.125rem","body-size-md":"1rem","body-size-sm":"0.875rem","body-size-xs":"0.75rem","body-lh-baseline":"1.625rem","body-lh-md":"1.5rem","body-lh-sm":"1.625rem","body-lh-xs":"1.25rem","body-ls-baseline":"0rem","body-ls-md":"0.014rem","body-ls-sm":"0.012rem","body-ls-xs":"0.012rem","form-label-size":"1rem","form-description-size":"0.875rem","form-label-lh":"1.5rem","form-description-lh":"1.6rem","form-label-ls":"0.014rem","form-description-ls":"0.012rem"},bookingsg:{"heading-size-xxl":"3rem","heading-size-xl":"2.5rem","heading-size-lg":"2rem","heading-size-md":"1.625rem","heading-size-sm":"1.375rem","heading-size-xs":"1.125rem","heading-lh-xxl":"3.5rem","heading-lh-xl":"3rem","heading-lh-lg":"2.5rem","heading-lh-md":"2.25rem","heading-lh-sm":"1.75rem","heading-lh-xs":"1.75rem","heading-ls-xxl":"-0.056rem","heading-ls-xl":"-0.032rem","heading-ls-lg":"-0.032rem","heading-ls-md":"0rem","heading-ls-sm":"0rem","heading-ls-xs":"0rem","weight-light":"300","weight-regular":"400","weight-semibold":"600","weight-bold":"700","font-family":"Plus Jakarta Sans","body-size-baseline":"1.125rem","body-size-md":"1rem","body-size-sm":"0.875rem","body-size-xs":"0.75rem","body-lh-baseline":"1.75rem","body-lh-md":"1.5rem","body-lh-sm":"1.6rem","body-lh-xs":"1.2rem","body-ls-baseline":"0rem","body-ls-md":"0.014rem","body-ls-sm":"0.012rem","body-ls-xs":"0.012rem","form-label-size":"1rem","form-description-size":"0.875rem","form-label-lh":"1.5rem","form-description-lh":"1.6rem","form-label-ls":"0.014rem","form-description-ls":"0.012rem"},pa:{"heading-size-xxl":"2.5rem","heading-size-xl":"2rem","heading-size-lg":"1.75rem","heading-size-md":"1.5rem","heading-size-sm":"1.25rem","heading-size-xs":"1rem","heading-lh-xxl":"3rem","heading-lh-xl":"2.5rem","heading-lh-lg":"2.25rem","heading-lh-md":"2rem","heading-lh-sm":"2rem","heading-lh-xs":"1.75rem","heading-ls-xxl":"-0.032rem","heading-ls-xl":"-0.032rem","heading-ls-lg":"0rem","heading-ls-md":"0rem","heading-ls-sm":"0rem","heading-ls-xs":"0rem","weight-light":"300","weight-regular":"400","weight-semibold":"600","weight-bold":"700","font-family":"Lato","body-size-baseline":"1rem","body-size-md":"0.875rem","body-size-sm":"0.75rem","body-size-xs":"0.625rem","body-lh-baseline":"1.75rem","body-lh-md":"1.5rem","body-lh-sm":"1.25rem","body-lh-xs":"1.25rem","body-ls-baseline":"0rem","body-ls-md":"0.014rem","body-ls-sm":"0.012rem","body-ls-xs":"0.012rem","form-label-size":"1rem","form-description-size":"0.875rem","form-label-lh":"1.5rem","form-description-lh":"1.6rem","form-label-ls":"0.014rem","form-description-ls":"0.012rem"},a11yplayground:{"heading-size-xxl":"3rem","heading-size-xl":"2.5rem","heading-size-lg":"2rem","heading-size-md":"1.625rem","heading-size-sm":"1.375rem","heading-size-xs":"1.125rem","heading-lh-xxl":"3.5rem","heading-lh-xl":"3rem","heading-lh-lg":"2.5rem","heading-lh-md":"2.25rem","heading-lh-sm":"1.75rem","heading-lh-xs":"1.625rem","heading-ls-xxl":"-0.056rem","heading-ls-xl":"-0.032rem","heading-ls-lg":"-0.032rem","heading-ls-md":"0rem","heading-ls-sm":"0rem","heading-ls-xs":"0rem","weight-light":"300","weight-regular":"400","weight-semibold":"600","weight-bold":"700","font-family":"Atkinson Hyperlegible Next","body-size-baseline":"1.125rem","body-size-md":"1rem","body-size-sm":"0.875rem","body-size-xs":"0.75rem","body-lh-baseline":"1.625rem","body-lh-md":"1.5rem","body-lh-sm":"1.625rem","body-lh-xs":"1.25rem","body-ls-baseline":"0rem","body-ls-md":"0.014rem","body-ls-sm":"0.012rem","body-ls-xs":"0.012rem","form-label-size":"1.125rem","form-description-size":"1rem","form-label-lh":"1.5rem","form-description-lh":"1.625rem","form-label-ls":"0rem","form-description-ls":"0.00875rem"},supportgowhere:{"heading-size-xxl":"3rem","heading-size-xl":"2.5rem","heading-size-lg":"2rem","heading-size-md":"1.625rem","heading-size-sm":"1.375rem","heading-size-xs":"1.125rem","heading-lh-xxl":"3.5rem","heading-lh-xl":"3rem","heading-lh-lg":"2.5rem","heading-lh-md":"2.25rem","heading-lh-sm":"1.75rem","heading-lh-xs":"1.625rem","heading-ls-xxl":"-0.056rem","heading-ls-xl":"-0.032rem","heading-ls-lg":"-0.032rem","heading-ls-md":"0rem","heading-ls-sm":"0rem","heading-ls-xs":"0rem","weight-light":"300","weight-regular":"400","weight-semibold":"600","weight-bold":"700","font-family":"Libre Franklin","body-size-baseline":"1.125rem","body-size-md":"1rem","body-size-sm":"0.875rem","body-size-xs":"0.75rem","body-lh-baseline":"1.625rem","body-lh-md":"1.5rem","body-lh-sm":"1.625rem","body-lh-xs":"1.25rem","body-ls-baseline":"0rem","body-ls-md":"0.014rem","body-ls-sm":"0.012rem","body-ls-xs":"0.012rem","form-label-size":"1rem","form-description-size":"0.875rem","form-label-lh":"1.5rem","form-description-lh":"1.6rem","form-label-ls":"0.014rem","form-description-ls":"0.012rem"},imda:{"heading-size-xxl":"3rem","heading-size-xl":"2.5rem","heading-size-lg":"2rem","heading-size-md":"1.625rem","heading-size-sm":"1.375rem","heading-size-xs":"1.125rem","heading-lh-xxl":"3.5rem","heading-lh-xl":"3rem","heading-lh-lg":"2.5rem","heading-lh-md":"2.25rem","heading-lh-sm":"1.75rem","heading-lh-xs":"1.625rem","heading-ls-xxl":"-0.056rem","heading-ls-xl":"-0.032rem","heading-ls-lg":"-0.032rem","heading-ls-md":"0rem","heading-ls-sm":"0rem","heading-ls-xs":"0rem","weight-light":"300","weight-regular":"400","weight-semibold":"600","weight-bold":"700","font-family":"Montserrat","body-size-baseline":"1.125rem","body-size-md":"1rem","body-size-sm":"0.875rem","body-size-xs":"0.75rem","body-lh-baseline":"1.625rem","body-lh-md":"1.5rem","body-lh-sm":"1.625rem","body-lh-xs":"1.25rem","body-ls-baseline":"0rem","body-ls-md":"0.014rem","body-ls-sm":"0.012rem","body-ls-xs":"0.012rem","form-label-size":"1rem","form-description-size":"0.875rem","form-label-lh":"1.5rem","form-description-lh":"1.625rem","form-label-ls":"0.014rem","form-description-ls":"0.012rem"}},defaultValue:"default"},En=e=>t=>{var r;const n=t.theme,o=Lr(Cn,null==n?void 0:n.fontScheme);return(null===(r=null==n?void 0:n.overrides)||void 0===r?void 0:r.fontSpec)?jr(o,e,n.overrides.fontSpec):o[e]},Sn={"heading-size-xxl":En("heading-size-xxl"),"heading-size-xl":En("heading-size-xl"),"heading-size-lg":En("heading-size-lg"),"heading-size-md":En("heading-size-md"),"heading-size-sm":En("heading-size-sm"),"heading-size-xs":En("heading-size-xs"),"heading-lh-xxl":En("heading-lh-xxl"),"heading-lh-xl":En("heading-lh-xl"),"heading-lh-lg":En("heading-lh-lg"),"heading-lh-md":En("heading-lh-md"),"heading-lh-sm":En("heading-lh-sm"),"heading-lh-xs":En("heading-lh-xs"),"heading-ls-xxl":En("heading-ls-xxl"),"heading-ls-xl":En("heading-ls-xl"),"heading-ls-lg":En("heading-ls-lg"),"heading-ls-md":En("heading-ls-md"),"heading-ls-sm":En("heading-ls-sm"),"heading-ls-xs":En("heading-ls-xs"),"weight-light":En("weight-light"),"weight-regular":En("weight-regular"),"weight-semibold":En("weight-semibold"),"weight-bold":En("weight-bold"),"font-family":En("font-family"),"body-size-baseline":En("body-size-baseline"),"body-size-md":En("body-size-md"),"body-size-sm":En("body-size-sm"),"body-size-xs":En("body-size-xs"),"body-lh-baseline":En("body-lh-baseline"),"body-lh-md":En("body-lh-md"),"body-lh-sm":En("body-lh-sm"),"body-lh-xs":En("body-lh-xs"),"body-ls-baseline":En("body-ls-baseline"),"body-ls-md":En("body-ls-md"),"body-ls-sm":En("body-ls-sm"),"body-ls-xs":En("body-ls-xs"),"form-label-size":En("form-label-size"),"form-description-size":En("form-description-size"),"form-label-lh":En("form-label-lh"),"form-description-lh":En("form-description-lh"),"form-label-ls":En("form-label-ls"),"form-description-ls":En("form-description-ls")},kn=(e,t,r,n,o)=>{const{disableLigatures:i}=o||{};return F`
        font-family: ${En("font-family")};
        font-size: ${En(e)};
        font-weight: ${En(t)};
        line-height: ${En(r)};
        letter-spacing: ${En(n)};

        font-variant: ${i?"no-common-ligatures":"normal"};
    `},Dn=(e={})=>({"heading-xxl-light":kn("heading-size-xxl","weight-light","heading-lh-xxl","heading-ls-xxl",e),"heading-xxl-regular":kn("heading-size-xxl","weight-regular","heading-lh-xxl","heading-ls-xxl",e),"heading-xxl-semibold":kn("heading-size-xxl","weight-semibold","heading-lh-xxl","heading-ls-xxl",e),"heading-xxl-bold":kn("heading-size-xxl","weight-bold","heading-lh-xxl","heading-ls-xxl",e),"heading-xl-light":kn("heading-size-xl","weight-light","heading-lh-xl","heading-ls-xl",e),"heading-xl-regular":kn("heading-size-xl","weight-regular","heading-lh-xl","heading-ls-xl",e),"heading-xl-semibold":kn("heading-size-xl","weight-semibold","heading-lh-xl","heading-ls-xl",e),"heading-xl-bold":kn("heading-size-xl","weight-bold","heading-lh-xl","heading-ls-xl",e),"heading-lg-light":kn("heading-size-lg","weight-light","heading-lh-lg","heading-ls-lg",e),"heading-lg-regular":kn("heading-size-lg","weight-regular","heading-lh-lg","heading-ls-lg",e),"heading-lg-semibold":kn("heading-size-lg","weight-semibold","heading-lh-lg","heading-ls-lg",e),"heading-lg-bold":kn("heading-size-lg","weight-bold","heading-lh-lg","heading-ls-lg",e),"heading-md-light":kn("heading-size-md","weight-light","heading-lh-md","heading-ls-md",e),"heading-md-regular":kn("heading-size-md","weight-regular","heading-lh-md","heading-ls-md",e),"heading-md-semibold":kn("heading-size-md","weight-semibold","heading-lh-md","heading-ls-md",e),"heading-md-bold":kn("heading-size-md","weight-bold","heading-lh-md","heading-ls-md",e),"heading-sm-light":kn("heading-size-sm","weight-light","heading-lh-sm","heading-ls-sm",e),"heading-sm-regular":kn("heading-size-sm","weight-regular","heading-lh-sm","heading-ls-sm",e),"heading-sm-semibold":kn("heading-size-sm","weight-semibold","heading-lh-sm","heading-ls-sm",e),"heading-sm-bold":kn("heading-size-sm","weight-bold","heading-lh-sm","heading-ls-sm",e),"heading-xs-light":kn("heading-size-xs","weight-light","heading-lh-xs","heading-ls-xs",e),"heading-xs-regular":kn("heading-size-xs","weight-regular","heading-lh-xs","heading-ls-xs",e),"heading-xs-semibold":kn("heading-size-xs","weight-semibold","heading-lh-xs","heading-ls-xs",e),"heading-xs-bold":kn("heading-size-xs","weight-bold","heading-lh-xs","heading-ls-xs",e),"body-baseline-light":kn("body-size-baseline","weight-light","body-lh-baseline","body-ls-baseline",e),"body-baseline-regular":kn("body-size-baseline","weight-regular","body-lh-baseline","body-ls-baseline",e),"body-baseline-semibold":kn("body-size-baseline","weight-semibold","body-lh-baseline","body-ls-baseline",e),"body-baseline-bold":kn("body-size-baseline","weight-bold","body-lh-baseline","body-ls-baseline",e),"body-md-light":kn("body-size-md","weight-light","body-lh-md","body-ls-md",e),"body-md-regular":kn("body-size-md","weight-regular","body-lh-md","body-ls-md",e),"body-md-semibold":kn("body-size-md","weight-semibold","body-lh-md","body-ls-md",e),"body-md-bold":kn("body-size-md","weight-bold","body-lh-md","body-ls-md",e),"body-sm-light":kn("body-size-sm","weight-light","body-lh-sm","body-ls-sm",e),"body-sm-regular":kn("body-size-sm","weight-regular","body-lh-sm","body-ls-sm",e),"body-sm-semibold":kn("body-size-sm","weight-semibold","body-lh-sm","body-ls-sm",e),"body-sm-bold":kn("body-size-sm","weight-bold","body-lh-sm","body-ls-sm",e),"body-xs-light":kn("body-size-xs","weight-light","body-lh-xs","body-ls-xs",e),"body-xs-regular":kn("body-size-xs","weight-regular","body-lh-xs","body-ls-xs",e),"body-xs-semibold":kn("body-size-xs","weight-semibold","body-lh-xs","body-ls-xs",e),"body-xs-bold":kn("body-size-xs","weight-bold","body-lh-xs","body-ls-xs",e),"form-label":kn("form-label-size","weight-semibold","form-label-lh","form-label-ls",e),"form-description":kn("form-description-size","weight-regular","form-description-lh","form-description-ls",e)}),In=Dn({disableLigatures:!0}),Tn={collections:{default:Dn(),bookingsg:In,pa:Dn({disableLigatures:!0}),a11yplayground:Dn({disableLigatures:!0}),supportgowhere:Dn({disableLigatures:!0}),imda:Dn({disableLigatures:!0})},defaultValue:"default"},Bn=e=>t=>{var r;const n=t.theme,o=Lr(Tn,null==n?void 0:n.fontScheme),i=(null===(r=null==n?void 0:n.overrides)||void 0===r?void 0:r.font)?jr(o,e,n.overrides.font):o[e];return"function"==typeof i?i(t):i},An={"heading-xxl-light":Bn("heading-xxl-light"),"heading-xxl-regular":Bn("heading-xxl-regular"),"heading-xxl-semibold":Bn("heading-xxl-semibold"),"heading-xxl-bold":Bn("heading-xxl-bold"),"heading-xl-light":Bn("heading-xl-light"),"heading-xl-regular":Bn("heading-xl-regular"),"heading-xl-semibold":Bn("heading-xl-semibold"),"heading-xl-bold":Bn("heading-xl-bold"),"heading-lg-light":Bn("heading-lg-light"),"heading-lg-regular":Bn("heading-lg-regular"),"heading-lg-semibold":Bn("heading-lg-semibold"),"heading-lg-bold":Bn("heading-lg-bold"),"heading-md-light":Bn("heading-md-light"),"heading-md-regular":Bn("heading-md-regular"),"heading-md-semibold":Bn("heading-md-semibold"),"heading-md-bold":Bn("heading-md-bold"),"heading-sm-light":Bn("heading-sm-light"),"heading-sm-regular":Bn("heading-sm-regular"),"heading-sm-semibold":Bn("heading-sm-semibold"),"heading-sm-bold":Bn("heading-sm-bold"),"heading-xs-light":Bn("heading-xs-light"),"heading-xs-regular":Bn("heading-xs-regular"),"heading-xs-semibold":Bn("heading-xs-semibold"),"heading-xs-bold":Bn("heading-xs-bold"),"body-baseline-light":Bn("body-baseline-light"),"body-baseline-regular":Bn("body-baseline-regular"),"body-baseline-semibold":Bn("body-baseline-semibold"),"body-baseline-bold":Bn("body-baseline-bold"),"body-md-light":Bn("body-md-light"),"body-md-regular":Bn("body-md-regular"),"body-md-semibold":Bn("body-md-semibold"),"body-md-bold":Bn("body-md-bold"),"body-sm-light":Bn("body-sm-light"),"body-sm-regular":Bn("body-sm-regular"),"body-sm-semibold":Bn("body-sm-semibold"),"body-sm-bold":Bn("body-sm-bold"),"body-xs-light":Bn("body-xs-light"),"body-xs-regular":Bn("body-xs-regular"),"body-xs-semibold":Bn("body-xs-semibold"),"body-xs-bold":Bn("body-xs-bold"),"form-label":Bn("form-label"),"form-description":Bn("form-description")},zn={collections:{default:{"duration-150":"150ms","duration-250":"250ms","duration-350":"350ms","duration-500":"500ms","duration-800":"800ms","duration-1000":"1000ms","ease-default":"cubic-bezier(0.45, 0.05, 0.55, 0.95)","ease-standard":"cubic-bezier(0.86, 0, 0.07, 1)","ease-entrance":"cubic-bezier(0.18, 0.13, 0, 1)","ease-exit":"cubic-bezier(1, 0, 0.8, 0.85)"}},defaultValue:"default"},On=e=>t=>{var r;const n=t.theme,o=Lr(zn,null==n?void 0:n.motionScheme);return(null===(r=null==n?void 0:n.overrides)||void 0===r?void 0:r.motion)?jr(o,e,n.overrides.motion):o[e]},Mn={"duration-150":On("duration-150"),"duration-250":On("duration-250"),"duration-350":On("duration-350"),"duration-500":On("duration-500"),"duration-800":On("duration-800"),"duration-1000":On("duration-1000"),"ease-default":On("ease-default"),"ease-standard":On("ease-standard"),"ease-entrance":On("ease-entrance"),"ease-exit":On("ease-exit")},_n={collections:{default:{none:0,xs:2,sm:4,md:8,lg:12,full:9999}},defaultValue:"default"},Rn=e=>t=>{var r;const n=t.theme,o=Lr(_n,null==n?void 0:n.radiusScheme);return(null===(r=null==n?void 0:n.overrides)||void 0===r?void 0:r.radius)?`${jr(o,e,n.overrides.radius)}px`:`${o[e]}px`},Hn={none:Rn("none"),xs:Rn("xs"),sm:Rn("sm"),md:Rn("md"),lg:Rn("lg"),full:Rn("full")},jn={collections:{default:{"spacing-0":0,"spacing-4":4,"spacing-8":8,"spacing-12":12,"spacing-16":16,"spacing-20":20,"spacing-24":24,"spacing-32":32,"spacing-40":40,"spacing-48":48,"spacing-64":64,"spacing-72":72,"layout-xs":8,"layout-sm":16,"layout-md":24,"layout-lg":32,"layout-xl":48,"layout-xxl":64,"layout-xxxl":128}},defaultValue:"default"},Ln=e=>t=>{var r;const n=t.theme,o=Lr(jn,null==n?void 0:n.spacingScheme);return(null===(r=null==n?void 0:n.overrides)||void 0===r?void 0:r.spacing)?`${jr(o,e,n.overrides.spacing)}px`:`${o[e]}px`},Pn={"spacing-0":Ln("spacing-0"),"spacing-4":Ln("spacing-4"),"spacing-8":Ln("spacing-8"),"spacing-12":Ln("spacing-12"),"spacing-16":Ln("spacing-16"),"spacing-20":Ln("spacing-20"),"spacing-24":Ln("spacing-24"),"spacing-32":Ln("spacing-32"),"spacing-40":Ln("spacing-40"),"spacing-48":Ln("spacing-48"),"spacing-64":Ln("spacing-64"),"spacing-72":Ln("spacing-72"),"layout-xs":Ln("layout-xs"),"layout-sm":Ln("layout-sm"),"layout-md":Ln("layout-md"),"layout-lg":Ln("layout-lg"),"layout-xl":Ln("layout-xl"),"layout-xxl":Ln("layout-xxl"),"layout-xxxl":Ln("layout-xxxl")},Wn=(e,t)=>Object.assign(Object.assign({},e),{colourMode:t}),Nn=Object.assign(Object.assign({},mn),{Primitive:on}),Vn=Object.assign(Object.assign({},An),{Spec:Sn}),Yn=Mn,Un=Object.assign(Object.assign({},Nr),{Util:yn}),qn=Pn,Gn=Hn,Zn=wn,Qn=Fn,Xn={colourScheme:"lifesg",fontScheme:"default",motionScheme:"default",borderScheme:"default",spacingScheme:"default",radiusScheme:"default",shadowScheme:"default",breakpointScheme:"default",resourceScheme:"lifesg",_v2:{colorScheme:"base",textStyleScheme:"base",designTokenScheme:"base",resourceScheme:"base"}},Kn={colourScheme:"bookingsg",fontScheme:"bookingsg",motionScheme:"default",borderScheme:"default",spacingScheme:"default",radiusScheme:"default",shadowScheme:"default",breakpointScheme:"default",resourceScheme:"bookingsg",_v2:{colorScheme:"bookingsg",textStyleScheme:"base",designTokenScheme:"base",resourceScheme:"bookingsg"}},Jn={colourScheme:"ccube",fontScheme:"default",motionScheme:"default",borderScheme:"default",spacingScheme:"default",radiusScheme:"default",shadowScheme:"default",breakpointScheme:"default",resourceScheme:"ccube",_v2:{colorScheme:"ccube",textStyleScheme:"base",designTokenScheme:"base",resourceScheme:"ccube"}},eo={colourScheme:"mylegacy",fontScheme:"default",motionScheme:"default",borderScheme:"default",spacingScheme:"default",radiusScheme:"default",shadowScheme:"default",breakpointScheme:"default",resourceScheme:"mylegacy",_v2:{colorScheme:"mylegacy",textStyleScheme:"base",designTokenScheme:"base",resourceScheme:"mylegacy"}},to={colourScheme:"rbs",fontScheme:"default",motionScheme:"default",borderScheme:"default",spacingScheme:"default",radiusScheme:"default",shadowScheme:"default",breakpointScheme:"default",resourceScheme:"rbs",_v2:{colorScheme:"rbs",textStyleScheme:"base",designTokenScheme:"rbs",resourceScheme:"rbs"}},ro={colourScheme:"oneservice",fontScheme:"default",motionScheme:"default",borderScheme:"default",spacingScheme:"default",radiusScheme:"default",shadowScheme:"default",breakpointScheme:"default",resourceScheme:"oneservice"},no={colourScheme:"pa",fontScheme:"pa",motionScheme:"default",borderScheme:"default",spacingScheme:"default",radiusScheme:"default",shadowScheme:"default",breakpointScheme:"default",resourceScheme:"pa",componentScheme:"pa"},oo={colourScheme:"a11yplayground",fontScheme:"a11yplayground",motionScheme:"default",borderScheme:"default",spacingScheme:"default",radiusScheme:"default",shadowScheme:"default",breakpointScheme:"default",resourceScheme:"a11yplayground",componentScheme:"a11yplayground"},io={colourScheme:"supportgowhere",fontScheme:"supportgowhere",motionScheme:"default",borderScheme:"default",spacingScheme:"default",radiusScheme:"default",shadowScheme:"default",breakpointScheme:"default",resourceScheme:"supportgowhere",componentScheme:"default"},so={colourScheme:"imda",fontScheme:"imda",motionScheme:"default",borderScheme:"default",spacingScheme:"default",radiusScheme:"default",shadowScheme:"default",breakpointScheme:"default",resourceScheme:"imda",componentScheme:"default"};Object.assign(Object.assign({},Xn),{light:Wn(Xn,"light"),dark:Wn(Xn,"dark")}),Object.assign(Object.assign({},Kn),{light:Wn(Kn,"light"),dark:Wn(Kn,"dark")}),Object.assign(Object.assign({},Jn),{light:Wn(Jn,"light"),dark:Wn(Jn,"dark")}),Object.assign(Object.assign({},eo),{light:Wn(eo,"light"),dark:Wn(eo,"dark")}),Object.assign(Object.assign({},to),{light:Wn(to,"light"),dark:Wn(to,"dark")}),Object.assign(Object.assign({},ro),{light:Wn(ro,"light"),dark:Wn(ro,"dark")}),Object.assign(Object.assign({},no),{light:Wn(no,"light"),dark:Wn(no,"dark")}),Object.assign(Object.assign({},oo),{light:Wn(oo,"light"),dark:Wn(oo,"dark")}),Object.assign(Object.assign({},io),{light:Wn(io,"light"),dark:Wn(io,"dark")}),Object.assign(Object.assign({},so),{light:Wn(so,"light"),dark:Wn(so,"dark")});const ao=$.div`
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
                        100% - ${Vn.Spec["body-size-baseline"]} -
                            ${qn["spacing-16"]}
                    );
                    flex: unset;
                }

                [data-id="range-container-elem2-container"] {
                    margin-top: ${qn["spacing-8"]};
                }
            `}}
`,lo=$.div`
    width: 100%; // Force next flex item to break to next line
`,co=$.div`
    display: flex;
    flex: 1;
    align-items: center;
`,uo=$(x)`
    color: ${Nn.icon};
    width: ${Vn.Spec["body-size-baseline"]};
    height: ${Vn.Spec["body-size-baseline"]};
    flex-shrink: 0;
    margin: 0 ${qn["spacing-8"]};
    align-self: center;
`,ho=$.div`
    position: absolute;
    background: ${e=>e.$error?Nn["border-error-focus-strong"]:Nn["border-focus-strong"]};
    height: 2px;
    // half - half padding - half icon width
    width: calc(
        50% - ${qn["spacing-8"]} - (${Vn.Spec["body-size-baseline"]} / 2)
    );
    transition: left ${Yn["duration-350"]} ${Yn["ease-standard"]},
        opacity ${Yn["duration-350"]} ${Yn["ease-standard"]};
    left: 0;
    bottom: 0;

    ${e=>{switch(e.$position){case"start":return F`
                    opacity: 1;
                `;case"end":return F`
                    left: calc(50% + ${qn["spacing-16"]});
                    opacity: 1;
                `;case"none":return F`
                    opacity: 0;
                `}}}

    ${e=>{if(e.$wrap)return F`
                display: none;
            `}}
`,go=({children:r,currentActive:n,error:o,className:i,wrap:s})=>{const[a,l]=r;return e(ao,{className:i,$wrap:s,children:[t(co,{"data-id":"range-container-elem1-container",children:a}),t(uo,{}),s&&t(lo,{}),t(co,{"data-id":"range-container-elem2-container",children:l}),t(ho,{"data-id":"range-container-indicator",$position:n,$error:o,$wrap:s})]})},mo=F`
    outline-offset: -1px;
    outline: ${Un["width-020"]} ${Un.solid} ${Nn["border-focus"]};
`,po=F`
    outline-color: ${Nn["border-focus"]};
`,fo=F`
    outline-color: ${Nn["border-disabled"]};
`,bo=F`
    outline-color: ${Nn["border-error-focus"]};
`,yo=$.div`
    border: ${Un["width-010"]} ${Un.solid} ${Nn.border};
    border-radius: ${Gn.sm};
    background: ${Nn.bg};

    &:focus-within {
        ${mo}
    }
    ${e=>e.$focused&&mo}

    ${e=>e.$readOnly?F`
                border-color: transparent;
                padding: 0;
                background: transparent !important;

                &:focus-within {
                    ${po}
                }
                ${e.$focused&&po}
            `:e.$disabled?F`
                background: ${Nn["bg-disabled"]};
                cursor: not-allowed;

                &:focus-within {
                    ${fo}
                }
                ${e.$focused&&fo}
            `:e.$error?F`
                border-color: ${Nn["border-error"]};

                &:focus-within {
                    ${bo}
                }
                ${e.$focused&&bo}
            `:void 0}
`,vo=$(yo)`
    display: flex;
    align-items: center;
    position: relative;
    height: max-content;
    width: 100%;
    padding: 0 ${qn["spacing-16"]} 0
        ${e=>e.$readOnly?"0":qn["spacing-16"]};
    flex-direction: ${e=>"right"===e.$position?"row-reverse":"row"};
`,xo=$.input`
    ${e=>"small"===e.$variant?Vn["body-md-regular"]:Vn["body-baseline-regular"]}
    color: ${Nn.text};
    display: block;
    background: transparent;
    border: none;
    outline: none;
    box-shadow: none;
    padding: 0;
    margin: 0;

    &:disabled {
        color: ${Nn["text-subtler"]};

        &:hover {
            cursor: not-allowed;
        }
    }

    &::placeholder,
    &::-webkit-input-placeholder {
        color: ${Nn["text-subtler"]};
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
`,wo=$.button`
    background: transparent;
    border: none;
    outline: none;

    &:focus,
    &:active {
        outline: none;
    }

    &:focus-visible {
        outline: ${Un["width-010"]} ${Un.solid}
            ${Nn["border-focus"]};
        border-radius: ${Gn.sm};
    }
`,$o=$.div`
    position: relative;
`,Fo=$(vo)`
    height: 3rem;
    gap: ${qn["spacing-8"]};
`,Co=$(xo)`
    display: block;
    width: 100%;
    flex: 1;
`;var Eo={exports:{}};Eo.exports=function(){var e=1e3,t=6e4,r=36e5,n="millisecond",o="second",i="minute",s="hour",a="day",l="week",d="month",c="quarter",u="year",h="date",g="Invalid Date",m=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,p=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,f={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(e){var t=["th","st","nd","rd"],r=e%100;return"["+e+(t[(r-20)%10]||t[r]||t[0])+"]"}},b=function(e,t,r){var n=String(e);return!n||n.length>=t?e:""+Array(t+1-n.length).join(r)+e},y={s:b,z:function(e){var t=-e.utcOffset(),r=Math.abs(t),n=Math.floor(r/60),o=r%60;return(t<=0?"+":"-")+b(n,2,"0")+":"+b(o,2,"0")},m:function e(t,r){if(t.date()<r.date())return-e(r,t);var n=12*(r.year()-t.year())+(r.month()-t.month()),o=t.clone().add(n,d),i=r-o<0,s=t.clone().add(n+(i?-1:1),d);return+(-(n+(r-o)/(i?o-s:s-o))||0)},a:function(e){return e<0?Math.ceil(e)||0:Math.floor(e)},p:function(e){return{M:d,y:u,w:l,d:a,D:h,h:s,m:i,s:o,ms:n,Q:c}[e]||String(e||"").toLowerCase().replace(/s$/,"")},u:function(e){return void 0===e}},v="en",x={};x[v]=f;var w="$isDayjsObject",$=function(e){return e instanceof S||!(!e||!e[w])},F=function e(t,r,n){var o;if(!t)return v;if("string"==typeof t){var i=t.toLowerCase();x[i]&&(o=i),r&&(x[i]=r,o=i);var s=t.split("-");if(!o&&s.length>1)return e(s[0])}else{var a=t.name;x[a]=t,o=a}return!n&&o&&(v=o),o||!n&&v},C=function(e,t){if($(e))return e.clone();var r="object"==typeof t?t:{};return r.date=e,r.args=arguments,new S(r)},E=y;E.l=F,E.i=$,E.w=function(e,t){return C(e,{locale:t.$L,utc:t.$u,x:t.$x,$offset:t.$offset})};var S=function(){function f(e){this.$L=F(e.locale,null,!0),this.parse(e),this.$x=this.$x||e.x||{},this[w]=!0}var b=f.prototype;return b.parse=function(e){this.$d=function(e){var t=e.date,r=e.utc;if(null===t)return new Date(NaN);if(E.u(t))return new Date;if(t instanceof Date)return new Date(t);if("string"==typeof t&&!/Z$/i.test(t)){var n=t.match(m);if(n){var o=n[2]-1||0,i=(n[7]||"0").substring(0,3);return r?new Date(Date.UTC(n[1],o,n[3]||1,n[4]||0,n[5]||0,n[6]||0,i)):new Date(n[1],o,n[3]||1,n[4]||0,n[5]||0,n[6]||0,i)}}return new Date(t)}(e),this.init()},b.init=function(){var e=this.$d;this.$y=e.getFullYear(),this.$M=e.getMonth(),this.$D=e.getDate(),this.$W=e.getDay(),this.$H=e.getHours(),this.$m=e.getMinutes(),this.$s=e.getSeconds(),this.$ms=e.getMilliseconds()},b.$utils=function(){return E},b.isValid=function(){return!(this.$d.toString()===g)},b.isSame=function(e,t){var r=C(e);return this.startOf(t)<=r&&r<=this.endOf(t)},b.isAfter=function(e,t){return C(e)<this.startOf(t)},b.isBefore=function(e,t){return this.endOf(t)<C(e)},b.$g=function(e,t,r){return E.u(e)?this[t]:this.set(r,e)},b.unix=function(){return Math.floor(this.valueOf()/1e3)},b.valueOf=function(){return this.$d.getTime()},b.startOf=function(e,t){var r=this,n=!!E.u(t)||t,c=E.p(e),g=function(e,t){var o=E.w(r.$u?Date.UTC(r.$y,t,e):new Date(r.$y,t,e),r);return n?o:o.endOf(a)},m=function(e,t){return E.w(r.toDate()[e].apply(r.toDate("s"),(n?[0,0,0,0]:[23,59,59,999]).slice(t)),r)},p=this.$W,f=this.$M,b=this.$D,y="set"+(this.$u?"UTC":"");switch(c){case u:return n?g(1,0):g(31,11);case d:return n?g(1,f):g(0,f+1);case l:var v=this.$locale().weekStart||0,x=(p<v?p+7:p)-v;return g(n?b-x:b+(6-x),f);case a:case h:return m(y+"Hours",0);case s:return m(y+"Minutes",1);case i:return m(y+"Seconds",2);case o:return m(y+"Milliseconds",3);default:return this.clone()}},b.endOf=function(e){return this.startOf(e,!1)},b.$set=function(e,t){var r,l=E.p(e),c="set"+(this.$u?"UTC":""),g=(r={},r[a]=c+"Date",r[h]=c+"Date",r[d]=c+"Month",r[u]=c+"FullYear",r[s]=c+"Hours",r[i]=c+"Minutes",r[o]=c+"Seconds",r[n]=c+"Milliseconds",r)[l],m=l===a?this.$D+(t-this.$W):t;if(l===d||l===u){var p=this.clone().set(h,1);p.$d[g](m),p.init(),this.$d=p.set(h,Math.min(this.$D,p.daysInMonth())).$d}else g&&this.$d[g](m);return this.init(),this},b.set=function(e,t){return this.clone().$set(e,t)},b.get=function(e){return this[E.p(e)]()},b.add=function(n,c){var h,g=this;n=Number(n);var m=E.p(c),p=function(e){var t=C(g);return E.w(t.date(t.date()+Math.round(e*n)),g)};if(m===d)return this.set(d,this.$M+n);if(m===u)return this.set(u,this.$y+n);if(m===a)return p(1);if(m===l)return p(7);var f=(h={},h[i]=t,h[s]=r,h[o]=e,h)[m]||1,b=this.$d.getTime()+n*f;return E.w(b,this)},b.subtract=function(e,t){return this.add(-1*e,t)},b.format=function(e){var t=this,r=this.$locale();if(!this.isValid())return r.invalidDate||g;var n=e||"YYYY-MM-DDTHH:mm:ssZ",o=E.z(this),i=this.$H,s=this.$m,a=this.$M,l=r.weekdays,d=r.months,c=r.meridiem,u=function(e,r,o,i){return e&&(e[r]||e(t,n))||o[r].slice(0,i)},h=function(e){return E.s(i%12||12,e,"0")},m=c||function(e,t,r){var n=e<12?"AM":"PM";return r?n.toLowerCase():n};return n.replace(p,(function(e,n){return n||function(e){switch(e){case"YY":return String(t.$y).slice(-2);case"YYYY":return E.s(t.$y,4,"0");case"M":return a+1;case"MM":return E.s(a+1,2,"0");case"MMM":return u(r.monthsShort,a,d,3);case"MMMM":return u(d,a);case"D":return t.$D;case"DD":return E.s(t.$D,2,"0");case"d":return String(t.$W);case"dd":return u(r.weekdaysMin,t.$W,l,2);case"ddd":return u(r.weekdaysShort,t.$W,l,3);case"dddd":return l[t.$W];case"H":return String(i);case"HH":return E.s(i,2,"0");case"h":return h(1);case"hh":return h(2);case"a":return m(i,s,!0);case"A":return m(i,s,!1);case"m":return String(s);case"mm":return E.s(s,2,"0");case"s":return String(t.$s);case"ss":return E.s(t.$s,2,"0");case"SSS":return E.s(t.$ms,3,"0");case"Z":return o}return null}(e)||o.replace(":","")}))},b.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},b.diff=function(n,h,g){var m,p=this,f=E.p(h),b=C(n),y=(b.utcOffset()-this.utcOffset())*t,v=this-b,x=function(){return E.m(p,b)};switch(f){case u:m=x()/12;break;case d:m=x();break;case c:m=x()/3;break;case l:m=(v-y)/6048e5;break;case a:m=(v-y)/864e5;break;case s:m=v/r;break;case i:m=v/t;break;case o:m=v/e;break;default:m=v}return g?m:E.a(m)},b.daysInMonth=function(){return this.endOf(d).$D},b.$locale=function(){return x[this.$L]},b.locale=function(e,t){if(!e)return this.$L;var r=this.clone(),n=F(e,t,!0);return n&&(r.$L=n),r},b.clone=function(){return E.w(this.$d,this)},b.toDate=function(){return new Date(this.valueOf())},b.toJSON=function(){return this.isValid()?this.toISOString():null},b.toISOString=function(){return this.$d.toISOString()},b.toString=function(){return this.$d.toUTCString()},f}(),k=S.prototype;return C.prototype=k,[["$ms",n],["$s",o],["$m",i],["$H",s],["$W",a],["$M",d],["$y",u],["$D",h]].forEach((function(e){k[e[1]]=function(t){return this.$g(t,e[0],e[1])}})),C.extend=function(e,t){return e.$i||(e(t,S,C),e.$i=!0),C},C.locale=F,C.isDayjs=$,C.unix=function(e){return C(1e3*e)},C.en=x[v],C.Ls=x,C.p={},C}();var So,ko,Do,Io=de(Eo.exports);!function(e){e.transformWithSpaces=(e,t)=>{const r="(.{"+t+"})";return e.replace(/[^\dA-Z]/gi,"").replace(new RegExp(r,"g"),"$1 ").trim()},e.padValue=(e,t)=>{if("0"===e)return t?e:e.padStart(2,"0");if(""===e)return e;return parseInt(e).toString().padStart(2,"0")},e.shouldTruncateToTwoLines=(e,t)=>{const r=Math.floor(t/9);return e.length>=2*r||1===e.split(" ").length&&e.length>r},e.truncateOneLine=(e,t,r,n,o=8)=>{let i=0;t>r&&(i=Math.floor((t-r)/o));const s=n+i;if(s<e.length){const t=Math.floor(s/2);return e.substring(0,t)+" ... "+e.substring(e.length-t,e.length)}return e},e.truncateTwoLines=(e,t,r,n=1.2)=>{const o=Math.floor(2*t/(.6*r))*(2/n);if(e.length<=o)return e;const i=Math.floor(.6*o),s=Math.floor(.2*o);return`${e.substring(0,i)}...${e.substring(e.length-s)}`},e.getTextWidth=(t,r)=>{if("undefined"==typeof document)return 0;const n=(e.getTextWidth.canvas||(e.getTextWidth.canvas=document.createElement("canvas"))).getContext("2d");n.font=r;return n.measureText(t).width},e.maskValue=(e,r)=>{if(!e)return e;const{maskRange:n,unmaskRange:o,maskChar:i="•",maskRegex:s,maskTransformer:a}=r;if(a)return a(e);if(s)return e.replace(s,i);if(n){const{startIndex:r,endIndex:o}=t(n[0],n[1]);return e.substring(0,r)+i.repeat(e.substring(r,o+1).length)+e.substring(o+1)}if(o){const{startIndex:r,endIndex:n}=t(o[0],o[1]);return i.repeat(e.substring(0,r).length)+e.substring(r,n+1)+i.repeat(e.substring(n+1).length)}return e};const t=(e,t)=>e<t?{startIndex:e,endIndex:t}:{startIndex:t,endIndex:e},r=new Intl.PluralRules("en",{type:"ordinal"}),n=new Map([["one","st"],["two","nd"],["few","rd"],["other","th"]]);e.formatOrdinal=e=>{const t=r.select(e);return`${e}${n.get(t)}`}}(So||(So={})),function(e){e.AM="AM",e.PM="PM"}(ko||(ko={})),function(e){e.roundToNearestInterval=(e,t,r)=>{const[n,o]=e.split(":"),i=parseInt(n,10),s=parseInt(o,10);if(isNaN(i)||isNaN(s)||s<0||s>=60)throw new Error("Invalid time format");const a=60*i+s,l=a%t,d=0===l?a:r?a+(t-l):a-l,c=d%60;return`${Math.floor(d/60).toString().padStart(2,"0")}:${c.toString().padStart(2,"0")}`},e.generateHourlyIntervals=(e,t,r="ha")=>{const n="HH:mm";let o=Io(e,n),i=Io(t,n);o.isSame(i)&&(i=i.add(1,"day"));const s=[];for(;o.isBefore(i);)s.push(o.format(r)),o=o.add(1,"hour");return s},e.getTimeValues=(e,t)=>{const r={hour:"",minute:"",period:ko.AM};if(!t)return r;try{if("24hr"===e){const n=Ao(t,e);r.minute=So.padValue(n.minute);const o=parseInt(n.hour);0===Math.floor(o/12)?(r.period=ko.AM,r.hour=0===o?"12":So.padValue(o.toString())):(r.period=ko.PM,r.hour=12===o?o.toString():So.padValue((o-12).toString()))}else{const{hour:n,minute:o,period:i=""}=Ao(t,e);r.hour=So.padValue(n),r.minute=So.padValue(o),r.period="am"===i.toLowerCase()?ko.AM:ko.PM}return r}catch(e){return r}},e.updateMinutes=(e,t)=>{const r=parseInt(e);if(isNaN(r))return"add"===t?So.padValue("0"):"55";const n=Math.floor(r/5),o=(("add"===t?n+1:r%5==0?n-1:n)%12+12)%12;return So.padValue((5*o).toString())},e.updateHours=(e,t)=>{const r=parseInt(e);if(isNaN(r))return"add"===t?So.padValue("1"):"12";const n="add"===t?r+1:r-1;return n<=12&&n>0?So.padValue(n.toString()):13===n?So.padValue("1"):"12"},e.convertTo24HourFormat=e=>{const t=parseInt(e.hour);let r;return r=e.period===ko.PM?12===t?t.toString():(t+12).toString():12===t?"00":e.hour,`${r}:${e.minute}`},e.convertHourTo12HourFormat=e=>{const t=parseInt(e),r=t%12==0?12..toString():(t%12).toString();return So.padValue(r)},e.formatDisplayValue=(e,t)=>{try{const{hour:r,minute:n,period:o=""}=Ao(e,t),i=So.padValue(r);let s=`${i}:${So.padValue(n)}`;return"12hr"===t?(s+=o.toLowerCase(),s):s}catch(e){return""}},e.toMinutesSeconds=e=>({minutes:Math.floor(e/60),seconds:e%60}),e.to24Hour=e=>{if((null==e?void 0:e.includes("am"))||(null==e?void 0:e.includes("pm"))){const[t,r]=e.split(/(am|pm)/i),[n,o]=t.split(":").map(Number);let i=n;return"pm"===r&&i<12&&(i+=12),"am"===r&&12===i&&(i=0),zo(i,o)}return e},e.generateTimings=(t,r="12hr",n,o)=>{const i=[];let s=0,a=1440-t;for(n&&(s=e.timeToMinutes(n)),o&&(a=e.timeToMinutes(o));s<=a;){let e=Math.floor(s/60);const n=s%60;if("12hr"===r){const t=e>=12?"pm":"am";e%=12,e=e||12;const r=zo(e,n,t);i.push(r)}else{const t=zo(e,n);i.push(t)}s+=t}return i},e.parseInput=(e,t="12hr")=>{if(""===e||void 0===e)return e;const r=e.trim().toLowerCase(),n=/^(?:(\d{1,2})([:.])?(\d{2})?)?(a|p|am|pm)?$/.exec(r);if(!n)return;let o=parseInt(n[1]||"0",10);const i=parseInt(n[3]||"0",10);let s=n[4];if(void 0===n[1]||o>24||i>59)return;if("a"===s?s="am":"p"===s&&(s="pm"),"24hr"===t)return"pm"===s&&o<12?o+=12:("am"===s&&12===o||24===o)&&(o=0),zo(o,i);s?0===o||24===o?(s="am",o=12):o>12&&(s="pm",o-=12):(s=0===o||24===o||o>6&&o<12?"am":"pm",o=o%12||12);return zo(o,i,s)},e.findClosestFlooredTime=(t,r)=>{if(!t)return t;const n=e.timeToMinutes(t);let o="",i=1/0;for(const t of r){const r=e.timeToMinutes(t)-n;if(r<=0&&Math.abs(r)<i)i=Math.abs(r),o=t;else if(r>0)break}return o},e.timeToMinutes=e=>{const[t,r]=e.toLowerCase().split(/(am|pm)/),[n,o]=t.split(":").map(Number);let i=n;return"pm"===r&&12!==i&&(i+=12),"am"===r&&12===i&&(i=0),60*i+o},e.calculateDuration=(t,r)=>{const n=e.timeToMinutes(t);return e.timeToMinutes(r)-n}}(Do||(Do={}));const To=(e,t)=>{const r=parseInt(e);return"24hr"===t?r>=0&&r<=23:r>=1&&r<=12},Bo=e=>{const t=parseInt(e);return t>=0&&t<=59},Ao=(e,t)=>{const r=e?e.split(":"):[],n=new Error("Invalid format");if("12hr"===t){if(2!==r.length||4!==r[1].length)throw n;const e=r[1].substring(0,2),i=r[1].substring(2);if(!To(r[0],t)||!Bo(e)||"am"!==(o=i).toLowerCase()&&"pm"!==o.toLowerCase())throw n;return{hour:r[0],minute:e,period:r[1].substring(2)}}if(2!==r.length)throw n;if(!To(r[0],t)||!Bo(r[1]))throw n;return{hour:r[0],minute:r[1]};var o},zo=(e,t,r)=>r?`${e}:${t.toString().padStart(2,"0")}${r}`:`${e.toString().padStart(2,"0")}:${t.toString().padStart(2,"0")}`;var Oo=function(e,t){return Oo=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])},Oo(e,t)};var Mo=function(){return Mo=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var o in t=arguments[r])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e},Mo.apply(this,arguments)};var _o="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};var Ro=function(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)},Ho="object"==typeof _o&&_o&&_o.Object===Object&&_o,jo="object"==typeof self&&self&&self.Object===Object&&self,Lo=Ho||jo||Function("return this")(),Po=Lo,Wo=function(){return Po.Date.now()},No=/\s/;var Vo=function(e){for(var t=e.length;t--&&No.test(e.charAt(t)););return t},Yo=/^\s+/;var Uo=function(e){return e?e.slice(0,Vo(e)+1).replace(Yo,""):e},qo=Lo.Symbol,Go=qo,Zo=Object.prototype,Qo=Zo.hasOwnProperty,Xo=Zo.toString,Ko=Go?Go.toStringTag:void 0;var Jo=function(e){var t=Qo.call(e,Ko),r=e[Ko];try{e[Ko]=void 0;var n=!0}catch(e){}var o=Xo.call(e);return n&&(t?e[Ko]=r:delete e[Ko]),o},ei=Object.prototype.toString;var ti=Jo,ri=function(e){return ei.call(e)},ni=qo?qo.toStringTag:void 0;var oi=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":ni&&ni in Object(e)?ti(e):ri(e)},ii=function(e){return null!=e&&"object"==typeof e};var si=Uo,ai=Ro,li=function(e){return"symbol"==typeof e||ii(e)&&"[object Symbol]"==oi(e)},di=/^[-+]0x[0-9a-f]+$/i,ci=/^0b[01]+$/i,ui=/^0o[0-7]+$/i,hi=parseInt;var gi=Ro,mi=Wo,pi=function(e){if("number"==typeof e)return e;if(li(e))return NaN;if(ai(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=ai(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=si(e);var r=ci.test(e);return r||ui.test(e)?hi(e.slice(2),r?2:8):di.test(e)?NaN:+e},fi=Math.max,bi=Math.min;var yi=function(e,t,r){var n,o,i,s,a,l,d=0,c=!1,u=!1,h=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function g(t){var r=n,i=o;return n=o=void 0,d=t,s=e.apply(i,r)}function m(e){var r=e-l;return void 0===l||r>=t||r<0||u&&e-d>=i}function p(){var e=mi();if(m(e))return f(e);a=setTimeout(p,function(e){var r=t-(e-l);return u?bi(r,i-(e-d)):r}(e))}function f(e){return a=void 0,h&&n?g(e):(n=o=void 0,s)}function b(){var e=mi(),r=m(e);if(n=arguments,o=this,l=e,r){if(void 0===a)return function(e){return d=e,a=setTimeout(p,t),c?g(e):s}(l);if(u)return clearTimeout(a),a=setTimeout(p,t),g(l)}return void 0===a&&(a=setTimeout(p,t)),s}return t=pi(t)||0,gi(r)&&(c=!!r.leading,i=(u="maxWait"in r)?fi(pi(r.maxWait)||0,t):i,h="trailing"in r?!!r.trailing:h),b.cancel=function(){void 0!==a&&clearTimeout(a),d=0,n=l=o=a=void 0},b.flush=function(){return void 0===a?s:f(mi())},b},vi=yi,xi=Ro;var wi=function(e,t,r){var n=!0,o=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return xi(r)&&(n="leading"in r?!!r.leading:n,o="trailing"in r?!!r.trailing:o),vi(e,t,{leading:n,maxWait:t,trailing:o})},$i=function(e,t,r,n){switch(t){case"debounce":return yi(e,r,n);case"throttle":return wi(e,r,n);default:return e}},Fi=function(e){return"function"==typeof e},Ci=function(){return"undefined"==typeof window},Ei=function(e){return e instanceof Element||e instanceof HTMLDocument},Si=function(e,t,r,n){return function(o){var i=o.width,s=o.height;t((function(t){return t.width===i&&t.height===s||t.width===i&&!n||t.height===s&&!r?t:(e&&Fi(e)&&e(i,s),{width:i,height:s})}))}};!function(e){function t(t){var r=e.call(this,t)||this;r.cancelHandler=function(){r.resizeHandler&&r.resizeHandler.cancel&&(r.resizeHandler.cancel(),r.resizeHandler=null)},r.attachObserver=function(){var e=r.props,t=e.targetRef,n=e.observerOptions;if(!Ci()){t&&t.current&&(r.targetRef.current=t.current);var o=r.getElement();o&&(r.observableElement&&r.observableElement===o||(r.observableElement=o,r.resizeObserver.observe(o,n)))}},r.getElement=function(){var e=r.props,t=e.querySelector,n=e.targetDomEl;if(Ci())return null;if(t)return document.querySelector(t);if(n&&Ei(n))return n;if(r.targetRef&&Ei(r.targetRef.current))return r.targetRef.current;var o=I(r);if(!o)return null;switch(r.getRenderType()){case"renderProp":case"childFunction":case"child":case"childArray":return o;default:return o.parentElement}},r.createResizeHandler=function(e){var t=r.props,n=t.handleWidth,o=void 0===n||n,i=t.handleHeight,s=void 0===i||i,a=t.onResize;if(o||s){var l=Si(a,r.setState.bind(r),o,s);e.forEach((function(e){var t=e&&e.contentRect||{},n=t.width,o=t.height;!r.skipOnMount&&!Ci()&&l({width:n,height:o}),r.skipOnMount=!1}))}},r.getRenderType=function(){var e=r.props,t=e.render,n=e.children;return Fi(t)?"renderProp":Fi(n)?"childFunction":l(n)?"child":Array.isArray(n)?"childArray":"parent"};var n=t.skipOnMount,o=t.refreshMode,i=t.refreshRate,s=void 0===i?1e3:i,a=t.refreshOptions;return r.state={width:void 0,height:void 0},r.skipOnMount=n,r.targetRef=d(),r.observableElement=null,Ci()||(r.resizeHandler=$i(r.createResizeHandler,o,s,a),r.resizeObserver=new window.ResizeObserver(r.resizeHandler)),r}(function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");function r(){this.constructor=e}Oo(e,t),e.prototype=null===t?Object.create(t):(r.prototype=t.prototype,new r)})(t,e),t.prototype.componentDidMount=function(){this.attachObserver()},t.prototype.componentDidUpdate=function(){this.attachObserver()},t.prototype.componentWillUnmount=function(){Ci()||(this.observableElement=null,this.resizeObserver.disconnect(),this.cancelHandler())},t.prototype.render=function(){var e,t=this.props,r=t.render,o=t.children,i=t.nodeType,s=void 0===i?"div":i,a=this.state,l={width:a.width,height:a.height,targetRef:this.targetRef};switch(this.getRenderType()){case"renderProp":return r&&r(l);case"childFunction":return(e=o)(l);case"child":if((e=o).type&&"string"==typeof e.type){var d=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(n=Object.getOwnPropertySymbols(e);o<n.length;o++)t.indexOf(n[o])<0&&Object.prototype.propertyIsEnumerable.call(e,n[o])&&(r[n[o]]=e[n[o]])}return r}(l,["targetRef"]);return c(e,d)}return c(e,l);case"childArray":return(e=o).map((function(e){return!!e&&c(e,l)}));default:return n.createElement(s,null)}}}(u);var ki=Ci()?s:h;function Di(e){void 0===e&&(e={});var t=e.skipOnMount,r=void 0!==t&&t,n=e.refreshMode,o=e.refreshRate,s=void 0===o?1e3:o,l=e.refreshOptions,d=e.handleWidth,c=void 0===d||d,u=e.handleHeight,h=void 0===u||u,g=e.targetRef,m=e.observerOptions,p=e.onResize,f=i(r),b=i(null),y=null!=g?g:b,v=i(),x=a({width:void 0,height:void 0}),w=x[0],$=x[1];return ki((function(){if(!Ci()){var e=Si(p,$,c,h);v.current=$i((function(t){(c||h)&&t.forEach((function(t){var r=t&&t.contentRect||{},n=r.width,o=r.height;!f.current&&!Ci()&&e({width:n,height:o}),f.current=!1}))}),n,s,l);var t=new window.ResizeObserver(v.current);return y.current&&t.observe(y.current,m),function(){t.disconnect();var e=v.current;e&&e.cancel&&e.cancel()}}}),[n,s,l,c,h,p,m,y.current]),Mo({ref:y},w)}var Ii=Yi(),Ti=e=>Pi(e,Ii),Bi=Yi();Ti.write=e=>Pi(e,Bi);var Ai=Yi();Ti.onStart=e=>Pi(e,Ai);var zi=Yi();Ti.onFrame=e=>Pi(e,zi);var Oi=Yi();Ti.onFinish=e=>Pi(e,Oi);var Mi=[];Ti.setTimeout=(e,t)=>{const r=Ti.now()+t,n=()=>{const e=Mi.findIndex((e=>e.cancel==n));~e&&Mi.splice(e,1),ji-=~e?1:0},o={time:r,handler:e,cancel:n};return Mi.splice(_i(r),0,o),ji+=1,Wi(),o};var _i=e=>~(~Mi.findIndex((t=>t.time>e))||~Mi.length);Ti.cancel=e=>{Ai.delete(e),zi.delete(e),Oi.delete(e),Ii.delete(e),Bi.delete(e)},Ti.sync=e=>{Li=!0,Ti.batchedUpdates(e),Li=!1},Ti.throttle=e=>{let t;function r(){try{e(...t)}finally{t=null}}function n(...e){t=e,Ti.onStart(r)}return n.handler=e,n.cancel=()=>{Ai.delete(r),t=null},n};var Ri="undefined"!=typeof window?window.requestAnimationFrame:()=>{};Ti.use=e=>Ri=e,Ti.now="undefined"!=typeof performance?()=>performance.now():Date.now,Ti.batchedUpdates=e=>e(),Ti.catch=console.error,Ti.frameLoop="always",Ti.advance=()=>{"demand"!==Ti.frameLoop?console.warn("Cannot call the manual advancement of rafz whilst frameLoop is not set as demand"):Vi()};var Hi=-1,ji=0,Li=!1;function Pi(e,t){Li?(t.delete(e),e(0)):(t.add(e),Wi())}function Wi(){Hi<0&&(Hi=0,"demand"!==Ti.frameLoop&&Ri(Ni))}function Ni(){~Hi&&(Ri(Ni),Ti.batchedUpdates(Vi))}function Vi(){const e=Hi;Hi=Ti.now();const t=_i(Hi);t&&(Ui(Mi.splice(0,t),(e=>e.handler())),ji-=t),ji?(Ai.flush(),Ii.flush(e?Math.min(64,Hi-e):16.667),zi.flush(),Bi.flush(),Oi.flush()):Hi=-1}function Yi(){let e=new Set,t=e;return{add(r){ji+=t!=e||e.has(r)?0:1,e.add(r)},delete:r=>(ji-=t==e&&e.has(r)?1:0,e.delete(r)),flush(r){t.size&&(e=new Set,ji-=t.size,Ui(t,(t=>t(r)&&e.add(t))),ji+=e.size,t=e)}}}function Ui(e,t){e.forEach((e=>{try{t(e)}catch(e){Ti.catch(e)}}))}var qi=Object.defineProperty,Gi={};function Zi(){}((e,t)=>{for(var r in t)qi(e,r,{get:t[r],enumerable:!0})})(Gi,{assign:()=>ds,colors:()=>ss,createStringInterpolator:()=>rs,skipAnimation:()=>as,to:()=>ns,willAdvance:()=>ls});var Qi={arr:Array.isArray,obj:e=>!!e&&"Object"===e.constructor.name,fun:e=>"function"==typeof e,str:e=>"string"==typeof e,num:e=>"number"==typeof e,und:e=>void 0===e};function Xi(e,t){if(Qi.arr(e)){if(!Qi.arr(t)||e.length!==t.length)return!1;for(let r=0;r<e.length;r++)if(e[r]!==t[r])return!1;return!0}return e===t}var Ki=(e,t)=>e.forEach(t);function Ji(e,t,r){if(Qi.arr(e))for(let n=0;n<e.length;n++)t.call(r,e[n],`${n}`);else for(const n in e)e.hasOwnProperty(n)&&t.call(r,e[n],n)}var es=e=>Qi.und(e)?[]:Qi.arr(e)?e:[e];function ts(e,t){if(e.size){const r=Array.from(e);e.clear(),Ki(r,t)}}var rs,ns,os=(e,...t)=>ts(e,(e=>e(...t))),is=()=>"undefined"==typeof window||!window.navigator||/ServerSideRendering|^Deno\//.test(window.navigator.userAgent),ss=null,as=!1,ls=Zi,ds=e=>{e.to&&(ns=e.to),e.now&&(Ti.now=e.now),void 0!==e.colors&&(ss=e.colors),null!=e.skipAnimation&&(as=e.skipAnimation),e.createStringInterpolator&&(rs=e.createStringInterpolator),e.requestAnimationFrame&&Ti.use(e.requestAnimationFrame),e.batchedUpdates&&(Ti.batchedUpdates=e.batchedUpdates),e.willAdvance&&(ls=e.willAdvance),e.frameLoop&&(Ti.frameLoop=e.frameLoop)},cs=new Set,us=[],hs=[],gs=0,ms={get idle(){return!cs.size&&!us.length},start(e){gs>e.priority?(cs.add(e),Ti.onStart(ps)):(fs(e),Ti(ys))},advance:ys,sort(e){if(gs)Ti.onFrame((()=>ms.sort(e)));else{const t=us.indexOf(e);~t&&(us.splice(t,1),bs(e))}},clear(){us=[],cs.clear()}};function ps(){cs.forEach(fs),cs.clear(),Ti(ys)}function fs(e){us.includes(e)||bs(e)}function bs(e){us.splice(function(e,t){const r=e.findIndex(t);return r<0?e.length:r}(us,(t=>t.priority>e.priority)),0,e)}function ys(e){const t=hs;for(let r=0;r<us.length;r++){const n=us[r];gs=n.priority,n.idle||(ls(n),n.advance(e),n.idle||t.push(n))}return gs=0,(hs=us).length=0,(us=t).length>0}var vs="[-+]?\\d*\\.?\\d+",xs=vs+"%";function ws(...e){return"\\(\\s*("+e.join(")\\s*,\\s*(")+")\\s*\\)"}var $s=new RegExp("rgb"+ws(vs,vs,vs)),Fs=new RegExp("rgba"+ws(vs,vs,vs,vs)),Cs=new RegExp("hsl"+ws(vs,xs,xs)),Es=new RegExp("hsla"+ws(vs,xs,xs,vs)),Ss=/^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,ks=/^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,Ds=/^#([0-9a-fA-F]{6})$/,Is=/^#([0-9a-fA-F]{8})$/;function Ts(e,t,r){return r<0&&(r+=1),r>1&&(r-=1),r<1/6?e+6*(t-e)*r:r<.5?t:r<2/3?e+(t-e)*(2/3-r)*6:e}function Bs(e,t,r){const n=r<.5?r*(1+t):r+t-r*t,o=2*r-n,i=Ts(o,n,e+1/3),s=Ts(o,n,e),a=Ts(o,n,e-1/3);return Math.round(255*i)<<24|Math.round(255*s)<<16|Math.round(255*a)<<8}function As(e){const t=parseInt(e,10);return t<0?0:t>255?255:t}function zs(e){return(parseFloat(e)%360+360)%360/360}function Os(e){const t=parseFloat(e);return t<0?0:t>1?255:Math.round(255*t)}function Ms(e){const t=parseFloat(e);return t<0?0:t>100?1:t/100}function _s(e){let t=function(e){let t;return"number"==typeof e?e>>>0===e&&e>=0&&e<=4294967295?e:null:(t=Ds.exec(e))?parseInt(t[1]+"ff",16)>>>0:ss&&void 0!==ss[e]?ss[e]:(t=$s.exec(e))?(As(t[1])<<24|As(t[2])<<16|As(t[3])<<8|255)>>>0:(t=Fs.exec(e))?(As(t[1])<<24|As(t[2])<<16|As(t[3])<<8|Os(t[4]))>>>0:(t=Ss.exec(e))?parseInt(t[1]+t[1]+t[2]+t[2]+t[3]+t[3]+"ff",16)>>>0:(t=Is.exec(e))?parseInt(t[1],16)>>>0:(t=ks.exec(e))?parseInt(t[1]+t[1]+t[2]+t[2]+t[3]+t[3]+t[4]+t[4],16)>>>0:(t=Cs.exec(e))?(255|Bs(zs(t[1]),Ms(t[2]),Ms(t[3])))>>>0:(t=Es.exec(e))?(Bs(zs(t[1]),Ms(t[2]),Ms(t[3]))|Os(t[4]))>>>0:null}(e);if(null===t)return e;t=t||0;return`rgba(${(4278190080&t)>>>24}, ${(16711680&t)>>>16}, ${(65280&t)>>>8}, ${(255&t)/255})`}var Rs=(e,t,r)=>{if(Qi.fun(e))return e;if(Qi.arr(e))return Rs({range:e,output:t,extrapolate:r});if(Qi.str(e.output[0]))return rs(e);const n=e,o=n.output,i=n.range||[0,1],s=n.extrapolateLeft||n.extrapolate||"extend",a=n.extrapolateRight||n.extrapolate||"extend",l=n.easing||(e=>e);return e=>{const t=function(e,t){for(var r=1;r<t.length-1&&!(t[r]>=e);++r);return r-1}(e,i);return function(e,t,r,n,o,i,s,a,l){let d=l?l(e):e;if(d<t){if("identity"===s)return d;"clamp"===s&&(d=t)}if(d>r){if("identity"===a)return d;"clamp"===a&&(d=r)}if(n===o)return n;if(t===r)return e<=t?n:o;t===-1/0?d=-d:r===1/0?d-=t:d=(d-t)/(r-t);d=i(d),n===-1/0?d=-d:o===1/0?d+=n:d=d*(o-n)+n;return d}(e,i[t],i[t+1],o[t],o[t+1],l,s,a,n.map)}};var Hs=1.70158,js=1.525*Hs,Ls=Hs+1,Ps=2*Math.PI/3,Ws=2*Math.PI/4.5,Ns=e=>{const t=7.5625,r=2.75;return e<1/r?t*e*e:e<2/r?t*(e-=1.5/r)*e+.75:e<2.5/r?t*(e-=2.25/r)*e+.9375:t*(e-=2.625/r)*e+.984375},Vs={linear:e=>e,easeInQuad:e=>e*e,easeOutQuad:e=>1-(1-e)*(1-e),easeInOutQuad:e=>e<.5?2*e*e:1-Math.pow(-2*e+2,2)/2,easeInCubic:e=>e*e*e,easeOutCubic:e=>1-Math.pow(1-e,3),easeInOutCubic:e=>e<.5?4*e*e*e:1-Math.pow(-2*e+2,3)/2,easeInQuart:e=>e*e*e*e,easeOutQuart:e=>1-Math.pow(1-e,4),easeInOutQuart:e=>e<.5?8*e*e*e*e:1-Math.pow(-2*e+2,4)/2,easeInQuint:e=>e*e*e*e*e,easeOutQuint:e=>1-Math.pow(1-e,5),easeInOutQuint:e=>e<.5?16*e*e*e*e*e:1-Math.pow(-2*e+2,5)/2,easeInSine:e=>1-Math.cos(e*Math.PI/2),easeOutSine:e=>Math.sin(e*Math.PI/2),easeInOutSine:e=>-(Math.cos(Math.PI*e)-1)/2,easeInExpo:e=>0===e?0:Math.pow(2,10*e-10),easeOutExpo:e=>1===e?1:1-Math.pow(2,-10*e),easeInOutExpo:e=>0===e?0:1===e?1:e<.5?Math.pow(2,20*e-10)/2:(2-Math.pow(2,-20*e+10))/2,easeInCirc:e=>1-Math.sqrt(1-Math.pow(e,2)),easeOutCirc:e=>Math.sqrt(1-Math.pow(e-1,2)),easeInOutCirc:e=>e<.5?(1-Math.sqrt(1-Math.pow(2*e,2)))/2:(Math.sqrt(1-Math.pow(-2*e+2,2))+1)/2,easeInBack:e=>Ls*e*e*e-Hs*e*e,easeOutBack:e=>1+Ls*Math.pow(e-1,3)+Hs*Math.pow(e-1,2),easeInOutBack:e=>e<.5?Math.pow(2*e,2)*(7.189819*e-js)/2:(Math.pow(2*e-2,2)*((js+1)*(2*e-2)+js)+2)/2,easeInElastic:e=>0===e?0:1===e?1:-Math.pow(2,10*e-10)*Math.sin((10*e-10.75)*Ps),easeOutElastic:e=>0===e?0:1===e?1:Math.pow(2,-10*e)*Math.sin((10*e-.75)*Ps)+1,easeInOutElastic:e=>0===e?0:1===e?1:e<.5?-Math.pow(2,20*e-10)*Math.sin((20*e-11.125)*Ws)/2:Math.pow(2,-20*e+10)*Math.sin((20*e-11.125)*Ws)/2+1,easeInBounce:e=>1-Ns(1-e),easeOutBounce:Ns,easeInOutBounce:e=>e<.5?(1-Ns(1-2*e))/2:(1+Ns(2*e-1))/2,steps:(e,t="end")=>r=>{const n=(r="end"===t?Math.min(r,.999):Math.max(r,.001))*e,o="end"===t?Math.floor(n):Math.ceil(n);return i=0,s=1,a=o/e,Math.min(Math.max(a,i),s);var i,s,a}},Ys=Symbol.for("FluidValue.get"),Us=Symbol.for("FluidValue.observers"),qs=e=>Boolean(e&&e[Ys]),Gs=e=>e&&e[Ys]?e[Ys]():e,Zs=e=>e[Us]||null;function Qs(e,t){const r=e[Us];r&&r.forEach((e=>{!function(e,t){e.eventObserved?e.eventObserved(t):e(t)}(e,t)}))}var Xs=class{constructor(e){if(!e&&!(e=this.get))throw Error("Unknown getter");Ks(this,e)}},Ks=(e,t)=>ra(e,Ys,t);function Js(e,t){if(e[Ys]){let r=e[Us];r||ra(e,Us,r=new Set),r.has(t)||(r.add(t),e.observerAdded&&e.observerAdded(r.size,t))}return t}function ea(e,t){const r=e[Us];if(r&&r.has(t)){const n=r.size-1;n?r.delete(t):e[Us]=null,e.observerRemoved&&e.observerRemoved(n,t)}}var ta,ra=(e,t,r)=>Object.defineProperty(e,t,{value:r,writable:!0,configurable:!0}),na=/[+\-]?(?:0|[1-9]\d*)(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,oa=/(#(?:[0-9a-f]{2}){2,4}|(#[0-9a-f]{3})|(rgb|hsl)a?\((-?\d+%?[,\s]+){2,3}\s*[\d\.]+%?\))/gi,ia=new RegExp(`(${na.source})(%|[a-z]+)`,"i"),sa=/rgba\(([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+)\)/gi,aa=/var\((--[a-zA-Z0-9-_]+),? ?([a-zA-Z0-9 ()%#.,-]+)?\)/,la=e=>{const[t,r]=da(e);if(!t||is())return e;const n=window.getComputedStyle(document.documentElement).getPropertyValue(t);if(n)return n.trim();if(r&&r.startsWith("--")){const t=window.getComputedStyle(document.documentElement).getPropertyValue(r);return t||e}return r&&aa.test(r)?la(r):r||e},da=e=>{const t=aa.exec(e);if(!t)return[,];const[,r,n]=t;return[r,n]},ca=(e,t,r,n,o)=>`rgba(${Math.round(t)}, ${Math.round(r)}, ${Math.round(n)}, ${o})`,ua=e=>{ta||(ta=ss?new RegExp(`(${Object.keys(ss).join("|")})(?!\\w)`,"g"):/^\b$/);const t=e.output.map((e=>Gs(e).replace(aa,la).replace(oa,_s).replace(ta,_s))),r=t.map((e=>e.match(na).map(Number))),n=r[0].map(((e,t)=>r.map((e=>{if(!(t in e))throw Error('The arity of each "output" value must be equal');return e[t]})))).map((t=>Rs({...e,output:t})));return e=>{const r=!ia.test(t[0])&&t.find((e=>ia.test(e)))?.replace(na,"");let o=0;return t[0].replace(na,(()=>`${n[o++](e)}${r||""}`)).replace(sa,ca)}},ha="react-spring: ",ga=e=>{const t=e;let r=!1;if("function"!=typeof t)throw new TypeError(`${ha}once requires a function parameter`);return(...e)=>{r||(t(...e),r=!0)}},ma=ga(console.warn);var pa=ga(console.warn);function fa(e){return Qi.str(e)&&("#"==e[0]||/\d/.test(e)||!is()&&aa.test(e)||e in(ss||{}))}var ba=is()?s:h;function ya(){const e=a()[1],t=(()=>{const e=i(!1);return ba((()=>(e.current=!0,()=>{e.current=!1})),[]),e})();return()=>{t.current&&e(Math.random())}}var va=e=>s(e,xa),xa=[];function wa(e){const t=i(void 0);return s((()=>{t.current=e})),t.current}var $a=Symbol.for("Animated:node"),Fa=e=>e&&e[$a],Ca=(e,t)=>((e,t,r)=>Object.defineProperty(e,t,{value:r,writable:!0,configurable:!0}))(e,$a,t),Ea=e=>e&&e[$a]&&e[$a].getPayload(),Sa=class{constructor(){Ca(this,this)}getPayload(){return this.payload||[]}},ka=class e extends Sa{constructor(e){super(),this._value=e,this.done=!0,this.durationProgress=0,Qi.num(this._value)&&(this.lastPosition=this._value)}static create(t){return new e(t)}getPayload(){return[this]}getValue(){return this._value}setValue(e,t){return Qi.num(e)&&(this.lastPosition=e,t&&(e=Math.round(e/t)*t,this.done&&(this.lastPosition=e))),this._value!==e&&(this._value=e,!0)}reset(){const{done:e}=this;this.done=!1,Qi.num(this._value)&&(this.elapsedTime=0,this.durationProgress=0,this.lastPosition=this._value,e&&(this.lastVelocity=null),this.v0=null)}},Da=class e extends ka{constructor(e){super(0),this._string=null,this._toString=Rs({output:[e,e]})}static create(t){return new e(t)}getValue(){const e=this._string;return null==e?this._string=this._toString(this._value):e}setValue(e){if(Qi.str(e)){if(e==this._string)return!1;this._string=e,this._value=1}else{if(!super.setValue(e))return!1;this._string=null}return!0}reset(e){e&&(this._toString=Rs({output:[this.getValue(),e]})),this._value=0,super.reset()}},Ia={dependencies:null},Ta=class extends Sa{constructor(e){super(),this.source=e,this.setValue(e)}getValue(e){const t={};return Ji(this.source,((r,n)=>{var o;(o=r)&&o[$a]===o?t[n]=r.getValue(e):qs(r)?t[n]=Gs(r):e||(t[n]=r)})),t}setValue(e){this.source=e,this.payload=this._makePayload(e)}reset(){this.payload&&Ki(this.payload,(e=>e.reset()))}_makePayload(e){if(e){const t=new Set;return Ji(e,this._addToPayload,t),Array.from(t)}}_addToPayload(e){Ia.dependencies&&qs(e)&&Ia.dependencies.add(e);const t=Ea(e);t&&Ki(t,(e=>this.add(e)))}},Ba=class e extends Ta{constructor(e){super(e)}static create(t){return new e(t)}getValue(){return this.source.map((e=>e.getValue()))}setValue(e){const t=this.getPayload();return e.length==t.length?t.map(((t,r)=>t.setValue(e[r]))).some(Boolean):(super.setValue(e.map(Aa)),!0)}};function Aa(e){return(fa(e)?Da:ka).create(e)}function za(e){const t=Fa(e);return t?t.constructor:Qi.arr(e)?Ba:fa(e)?Da:ka}var Oa=(e,t)=>{const r=!Qi.fun(e)||e.prototype&&e.prototype.isReactComponent;return g(((o,a)=>{const l=i(null),d=r&&m((e=>{l.current=function(e,t){e&&(Qi.fun(e)?e(t):e.current=t);return t}(a,e)}),[a]),[c,u]=function(e,t){const r=new Set;Ia.dependencies=r,e.style&&(e={...e,style:t.createAnimatedStyle(e.style)});return e=new Ta(e),Ia.dependencies=null,[e,r]}(o,t),h=ya(),g=()=>{const e=l.current;if(r&&!e)return;!1===(!!e&&t.applyAnimatedValues(e,c.getValue(!0)))&&h()},p=new Ma(g,u),f=i(void 0);ba((()=>(f.current=p,Ki(u,(e=>Js(e,p))),()=>{f.current&&(Ki(f.current.deps,(e=>ea(e,f.current))),Ti.cancel(f.current.update))}))),s(g,[]),va((()=>()=>{const e=f.current;Ki(e.deps,(t=>ea(t,e)))}));const b=t.getComponentProps(c.getValue());return n.createElement(e,{...b,ref:d})}))},Ma=class{constructor(e,t){this.update=e,this.deps=t}eventObserved(e){"change"==e.type&&Ti.write(this.update)}};var _a=Symbol.for("AnimatedComponent"),Ra=e=>Qi.str(e)?e:e&&Qi.str(e.displayName)?e.displayName:Qi.fun(e)&&e.name||null;function Ha(e,...t){return Qi.fun(e)?e(...t):e}var ja=(e,t)=>!0===e||!!(t&&e&&(Qi.fun(e)?e(t):es(e).includes(t))),La=(e,t)=>Qi.obj(e)?t&&e[t]:e,Pa=(e,t)=>!0===e.default?e[t]:e.default?e.default[t]:void 0,Wa=e=>e,Na=(e,t=Wa)=>{let r=Va;e.default&&!0!==e.default&&(e=e.default,r=Object.keys(e));const n={};for(const o of r){const r=t(e[o],o);Qi.und(r)||(n[o]=r)}return n},Va=["config","onProps","onStart","onChange","onPause","onResume","onRest"],Ya={config:1,from:1,to:1,ref:1,loop:1,reset:1,pause:1,cancel:1,reverse:1,immediate:1,default:1,delay:1,onProps:1,onStart:1,onChange:1,onPause:1,onResume:1,onRest:1,onResolve:1,items:1,trail:1,sort:1,expires:1,initial:1,enter:1,update:1,leave:1,children:1,onDestroyed:1,keys:1,callId:1,parentId:1};function Ua(e){const t=function(e){const t={};let r=0;if(Ji(e,((e,n)=>{Ya[n]||(t[n]=e,r++)})),r)return t}(e);if(t){const r={to:t};return Ji(e,((e,n)=>n in t||(r[n]=e))),r}return{...e}}function qa(e){return e=Gs(e),Qi.arr(e)?e.map(qa):fa(e)?Gi.createStringInterpolator({range:[0,1],output:[e,e]})(1):e}function Ga(e){return Qi.fun(e)||Qi.arr(e)&&Qi.obj(e[0])}var Za={tension:170,friction:26,mass:1,damping:1,easing:Vs.linear,clamp:!1},Qa=class{constructor(){this.velocity=0,Object.assign(this,Za)}};function Xa(e,t){if(Qi.und(t.decay)){const r=!Qi.und(t.tension)||!Qi.und(t.friction);!r&&Qi.und(t.frequency)&&Qi.und(t.damping)&&Qi.und(t.mass)||(e.duration=void 0,e.decay=void 0),r&&(e.frequency=void 0)}else e.duration=void 0}var Ka=[],Ja=class{constructor(){this.changed=!1,this.values=Ka,this.toValues=null,this.fromValues=Ka,this.config=new Qa,this.immediate=!1}};function el(e,{key:t,props:r,defaultProps:n,state:o,actions:i}){return new Promise(((s,a)=>{let l,d,c=ja(r.cancel??n?.cancel,t);if(c)g();else{Qi.und(r.pause)||(o.paused=ja(r.pause,t));let e=n?.pause;!0!==e&&(e=o.paused||ja(e,t)),l=Ha(r.delay||0,t),e?(o.resumeQueue.add(h),i.pause()):(i.resume(),h())}function u(){o.resumeQueue.add(h),o.timeouts.delete(d),d.cancel(),l=d.time-Ti.now()}function h(){l>0&&!Gi.skipAnimation?(o.delayed=!0,d=Ti.setTimeout(g,l),o.pauseQueue.add(u),o.timeouts.add(d)):g()}function g(){o.delayed&&(o.delayed=!1),o.pauseQueue.delete(u),o.timeouts.delete(d),e<=(o.cancelId||0)&&(c=!0);try{i.start({...r,callId:e,cancel:c},s)}catch(e){a(e)}}}))}var tl=(e,t)=>1==t.length?t[0]:t.some((e=>e.cancelled))?ol(e.get()):t.every((e=>e.noop))?rl(e.get()):nl(e.get(),t.every((e=>e.finished))),rl=e=>({value:e,noop:!0,finished:!0,cancelled:!1}),nl=(e,t,r=!1)=>({value:e,finished:t,cancelled:r}),ol=e=>({value:e,cancelled:!0,finished:!1});function il(e,t,r,n){const{callId:o,parentId:i,onRest:s}=t,{asyncTo:a,promise:l}=r;return i||e!==a||t.reset?r.promise=(async()=>{r.asyncId=o,r.asyncTo=e;const d=Na(t,((e,t)=>"onRest"===t?void 0:e));let c,u;const h=new Promise(((e,t)=>(c=e,u=t))),g=e=>{const t=o<=(r.cancelId||0)&&ol(n)||o!==r.asyncId&&nl(n,!1);if(t)throw e.result=t,u(e),e},m=(e,t)=>{const i=new al,s=new ll;return(async()=>{if(Gi.skipAnimation)throw sl(r),s.result=nl(n,!1),u(s),s;g(i);const a=Qi.obj(e)?{...e}:{...t,to:e};a.parentId=o,Ji(d,((e,t)=>{Qi.und(a[t])&&(a[t]=e)}));const l=await n.start(a);return g(i),r.paused&&await new Promise((e=>{r.resumeQueue.add(e)})),l})()};let p;if(Gi.skipAnimation)return sl(r),nl(n,!1);try{let t;t=Qi.arr(e)?(async e=>{for(const t of e)await m(t)})(e):Promise.resolve(e(m,n.stop.bind(n))),await Promise.all([t.then(c),h]),p=nl(n.get(),!0,!1)}catch(e){if(e instanceof al)p=e.result;else{if(!(e instanceof ll))throw e;p=e.result}}finally{o==r.asyncId&&(r.asyncId=i,r.asyncTo=i?a:void 0,r.promise=i?l:void 0)}return Qi.fun(s)&&Ti.batchedUpdates((()=>{s(p,n,n.item)})),p})():l}function sl(e,t){ts(e.timeouts,(e=>e.cancel())),e.pauseQueue.clear(),e.resumeQueue.clear(),e.asyncId=e.asyncTo=e.promise=void 0,t&&(e.cancelId=t)}var al=class extends Error{constructor(){super("An async animation has been interrupted. You see this error because you forgot to use `await` or `.catch(...)` on its returned promise.")}},ll=class extends Error{constructor(){super("SkipAnimationSignal")}},dl=e=>e instanceof ul,cl=1,ul=class extends Xs{constructor(){super(...arguments),this.id=cl++,this._priority=0}get priority(){return this._priority}set priority(e){this._priority!=e&&(this._priority=e,this._onPriorityChange(e))}get(){const e=Fa(this);return e&&e.getValue()}to(...e){return Gi.to(this,e)}interpolate(...e){return ma(`${ha}The "interpolate" function is deprecated in v9 (use "to" instead)`),Gi.to(this,e)}toJSON(){return this.get()}observerAdded(e){1==e&&this._attach()}observerRemoved(e){0==e&&this._detach()}_attach(){}_detach(){}_onChange(e,t=!1){Qs(this,{type:"change",parent:this,value:e,idle:t})}_onPriorityChange(e){this.idle||ms.sort(this),Qs(this,{type:"priority",parent:this,priority:e})}},hl=Symbol.for("SpringPhase"),gl=e=>(1&e[hl])>0,ml=e=>(2&e[hl])>0,pl=e=>(4&e[hl])>0,fl=(e,t)=>t?e[hl]|=3:e[hl]&=-3,bl=(e,t)=>t?e[hl]|=4:e[hl]&=-5,yl=class extends ul{constructor(e,t){if(super(),this.animation=new Ja,this.defaultProps={},this._state={paused:!1,delayed:!1,pauseQueue:new Set,resumeQueue:new Set,timeouts:new Set},this._pendingCalls=new Set,this._lastCallId=0,this._lastToId=0,this._memoizedDuration=0,!Qi.und(e)||!Qi.und(t)){const r=Qi.obj(e)?{...e}:{...t,from:e};Qi.und(r.default)&&(r.default=!0),this.start(r)}}get idle(){return!(ml(this)||this._state.asyncTo)||pl(this)}get goal(){return Gs(this.animation.to)}get velocity(){const e=Fa(this);return e instanceof ka?e.lastVelocity||0:e.getPayload().map((e=>e.lastVelocity||0))}get hasAnimated(){return gl(this)}get isAnimating(){return ml(this)}get isPaused(){return pl(this)}get isDelayed(){return this._state.delayed}advance(e){let t=!0,r=!1;const n=this.animation;let{toValues:o}=n;const{config:i}=n,s=Ea(n.to);!s&&qs(n.to)&&(o=es(Gs(n.to))),n.values.forEach(((a,l)=>{if(a.done)return;const d=a.constructor==Da?1:s?s[l].lastPosition:o[l];let c=n.immediate,u=d;if(!c){if(u=a.lastPosition,i.tension<=0)return void(a.done=!0);let t=a.elapsedTime+=e;const r=n.fromValues[l],o=null!=a.v0?a.v0:a.v0=Qi.arr(i.velocity)?i.velocity[l]:i.velocity;let s;const h=i.precision||(r==d?.005:Math.min(1,.001*Math.abs(d-r)));if(Qi.und(i.duration))if(i.decay){const e=!0===i.decay?.998:i.decay,n=Math.exp(-(1-e)*t);u=r+o/(1-e)*(1-n),c=Math.abs(a.lastPosition-u)<=h,s=o*n}else{s=null==a.lastVelocity?o:a.lastVelocity;const t=i.restVelocity||h/10,n=i.clamp?0:i.bounce,l=!Qi.und(n),g=r==d?a.v0>0:r<d;let m,p=!1;const f=1,b=Math.ceil(e/f);for(let e=0;e<b&&(m=Math.abs(s)>t,m||(c=Math.abs(d-u)<=h,!c));++e){l&&(p=u==d||u>d==g,p&&(s=-s*n,u=d));s+=(1e-6*-i.tension*(u-d)+.001*-i.friction*s)/i.mass*f,u+=s*f}}else{let n=1;i.duration>0&&(this._memoizedDuration!==i.duration&&(this._memoizedDuration=i.duration,a.durationProgress>0&&(a.elapsedTime=i.duration*a.durationProgress,t=a.elapsedTime+=e)),n=(i.progress||0)+t/this._memoizedDuration,n=n>1?1:n<0?0:n,a.durationProgress=n),u=r+i.easing(n)*(d-r),s=(u-a.lastPosition)/e,c=1==n}a.lastVelocity=s,Number.isNaN(u)&&(console.warn("Got NaN while animating:",this),c=!0)}s&&!s[l].done&&(c=!1),c?a.done=!0:t=!1,a.setValue(u,i.round)&&(r=!0)}));const a=Fa(this),l=a.getValue();if(t){const e=Gs(n.to);l===e&&!r||i.decay?r&&i.decay&&this._onChange(l):(a.setValue(e),this._onChange(e)),this._stop()}else r&&this._onChange(l)}set(e){return Ti.batchedUpdates((()=>{this._stop(),this._focus(e),this._set(e)})),this}pause(){this._update({pause:!0})}resume(){this._update({pause:!1})}finish(){if(ml(this)){const{to:e,config:t}=this.animation;Ti.batchedUpdates((()=>{this._onStart(),t.decay||this._set(e,!1),this._stop()}))}return this}update(e){return(this.queue||(this.queue=[])).push(e),this}start(e,t){let r;return Qi.und(e)?(r=this.queue||[],this.queue=[]):r=[Qi.obj(e)?e:{...t,to:e}],Promise.all(r.map((e=>this._update(e)))).then((e=>tl(this,e)))}stop(e){const{to:t}=this.animation;return this._focus(this.get()),sl(this._state,e&&this._lastCallId),Ti.batchedUpdates((()=>this._stop(t,e))),this}reset(){this._update({reset:!0})}eventObserved(e){"change"==e.type?this._start():"priority"==e.type&&(this.priority=e.priority+1)}_prepareNode(e){const t=this.key||"";let{to:r,from:n}=e;r=Qi.obj(r)?r[t]:r,(null==r||Ga(r))&&(r=void 0),n=Qi.obj(n)?n[t]:n,null==n&&(n=void 0);const o={to:r,from:n};return gl(this)||(e.reverse&&([r,n]=[n,r]),n=Gs(n),Qi.und(n)?Fa(this)||this._set(r):this._set(n)),o}_update({...e},t){const{key:r,defaultProps:n}=this;e.default&&Object.assign(n,Na(e,((e,t)=>/^on/.test(t)?La(e,r):e))),El(this,e,"onProps"),Sl(this,"onProps",e,this);const o=this._prepareNode(e);if(Object.isFrozen(this))throw Error("Cannot animate a `SpringValue` object that is frozen. Did you forget to pass your component to `animated(...)` before animating its props?");const i=this._state;return el(++this._lastCallId,{key:r,props:e,defaultProps:n,state:i,actions:{pause:()=>{pl(this)||(bl(this,!0),os(i.pauseQueue),Sl(this,"onPause",nl(this,vl(this,this.animation.to)),this))},resume:()=>{pl(this)&&(bl(this,!1),ml(this)&&this._resume(),os(i.resumeQueue),Sl(this,"onResume",nl(this,vl(this,this.animation.to)),this))},start:this._merge.bind(this,o)}}).then((r=>{if(e.loop&&r.finished&&(!t||!r.noop)){const t=xl(e);if(t)return this._update(t,!0)}return r}))}_merge(e,t,r){if(t.cancel)return this.stop(!0),r(ol(this));const n=!Qi.und(e.to),o=!Qi.und(e.from);if(n||o){if(!(t.callId>this._lastToId))return r(ol(this));this._lastToId=t.callId}const{key:i,defaultProps:s,animation:a}=this,{to:l,from:d}=a;let{to:c=l,from:u=d}=e;!o||n||t.default&&!Qi.und(c)||(c=u),t.reverse&&([c,u]=[u,c]);const h=!Xi(u,d);h&&(a.from=u),u=Gs(u);const g=!Xi(c,l);g&&this._focus(c);const m=Ga(t.to),{config:p}=a,{decay:f,velocity:b}=p;(n||o)&&(p.velocity=0),t.config&&!m&&function(e,t,r){r&&(Xa(r={...r},t),t={...r,...t}),Xa(e,t),Object.assign(e,t);for(const t in Za)null==e[t]&&(e[t]=Za[t]);let{frequency:n,damping:o}=e;const{mass:i}=e;Qi.und(n)||(n<.01&&(n=.01),o<0&&(o=0),e.tension=Math.pow(2*Math.PI/n,2)*i,e.friction=4*Math.PI*o*i/n)}(p,Ha(t.config,i),t.config!==s.config?Ha(s.config,i):void 0);let y=Fa(this);if(!y||Qi.und(c))return r(nl(this,!0));const v=Qi.und(t.reset)?o&&!t.default:!Qi.und(u)&&ja(t.reset,i),x=v?u:this.get(),w=qa(c),$=Qi.num(w)||Qi.arr(w)||fa(w),F=!m&&(!$||ja(s.immediate||t.immediate,i));if(g){const e=za(c);if(e!==y.constructor){if(!F)throw Error(`Cannot animate between ${y.constructor.name} and ${e.name}, as the "to" prop suggests`);y=this._set(w)}}const C=y.constructor;let E=qs(c),S=!1;if(!E){const e=v||!gl(this)&&h;(g||e)&&(S=Xi(qa(x),w),E=!S),(Xi(a.immediate,F)||F)&&Xi(p.decay,f)&&Xi(p.velocity,b)||(E=!0)}if(S&&ml(this)&&(a.changed&&!v?E=!0:E||this._stop(l)),!m&&((E||qs(l))&&(a.values=y.getPayload(),a.toValues=qs(c)?null:C==Da?[1]:es(w)),a.immediate!=F&&(a.immediate=F,F||v||this._set(l)),E)){const{onRest:e}=a;Ki(Cl,(e=>El(this,t,e)));const n=nl(this,vl(this,l));os(this._pendingCalls,n),this._pendingCalls.add(r),a.changed&&Ti.batchedUpdates((()=>{a.changed=!v,e?.(n,this),v?Ha(s.onRest,n):a.onStart?.(n,this)}))}v&&this._set(x),m?r(il(t.to,t,this._state,this)):E?this._start():ml(this)&&!g?this._pendingCalls.add(r):r(rl(x))}_focus(e){const t=this.animation;e!==t.to&&(Zs(this)&&this._detach(),t.to=e,Zs(this)&&this._attach())}_attach(){let e=0;const{to:t}=this.animation;qs(t)&&(Js(t,this),dl(t)&&(e=t.priority+1)),this.priority=e}_detach(){const{to:e}=this.animation;qs(e)&&ea(e,this)}_set(e,t=!0){const r=Gs(e);if(!Qi.und(r)){const e=Fa(this);if(!e||!Xi(r,e.getValue())){const n=za(r);e&&e.constructor==n?e.setValue(r):Ca(this,n.create(r)),e&&Ti.batchedUpdates((()=>{this._onChange(r,t)}))}}return Fa(this)}_onStart(){const e=this.animation;e.changed||(e.changed=!0,Sl(this,"onStart",nl(this,vl(this,e.to)),this))}_onChange(e,t){t||(this._onStart(),Ha(this.animation.onChange,e,this)),Ha(this.defaultProps.onChange,e,this),super._onChange(e,t)}_start(){const e=this.animation;Fa(this).reset(Gs(e.to)),e.immediate||(e.fromValues=e.values.map((e=>e.lastPosition))),ml(this)||(fl(this,!0),pl(this)||this._resume())}_resume(){Gi.skipAnimation?this.finish():ms.start(this)}_stop(e,t){if(ml(this)){fl(this,!1);const r=this.animation;Ki(r.values,(e=>{e.done=!0})),r.toValues&&(r.onChange=r.onPause=r.onResume=void 0),Qs(this,{type:"idle",parent:this});const n=t?ol(this.get()):nl(this.get(),vl(this,e??r.to));os(this._pendingCalls,n),r.changed&&(r.changed=!1,Sl(this,"onRest",n,this))}}};function vl(e,t){const r=qa(t);return Xi(qa(e.get()),r)}function xl(e,t=e.loop,r=e.to){const n=Ha(t);if(n){const o=!0!==n&&Ua(n),i=(o||e).reverse,s=!o||o.reset;return wl({...e,loop:t,default:!1,pause:void 0,to:!i||Ga(r)?r:void 0,from:s?e.from:void 0,reset:s,...o})}}function wl(e){const{to:t,from:r}=e=Ua(e),n=new Set;return Qi.obj(t)&&Fl(t,n),Qi.obj(r)&&Fl(r,n),e.keys=n.size?Array.from(n):null,e}function $l(e){const t=wl(e);return Qi.und(t.default)&&(t.default=Na(t)),t}function Fl(e,t){Ji(e,((e,r)=>null!=e&&t.add(r)))}var Cl=["onStart","onRest","onChange","onPause","onResume"];function El(e,t,r){e.animation[r]=t[r]!==Pa(t,r)?La(t[r],e.key):void 0}function Sl(e,t,...r){e.animation[t]?.(...r),e.defaultProps[t]?.(...r)}var kl=["onStart","onChange","onRest"],Dl=1,Il=class{constructor(e,t){this.id=Dl++,this.springs={},this.queue=[],this._lastAsyncId=0,this._active=new Set,this._changed=new Set,this._started=!1,this._state={paused:!1,pauseQueue:new Set,resumeQueue:new Set,timeouts:new Set},this._events={onStart:new Map,onChange:new Map,onRest:new Map},this._onFrame=this._onFrame.bind(this),t&&(this._flush=t),e&&this.start({default:!0,...e})}get idle(){return!this._state.asyncTo&&Object.values(this.springs).every((e=>e.idle&&!e.isDelayed&&!e.isPaused))}get item(){return this._item}set item(e){this._item=e}get(){const e={};return this.each(((t,r)=>e[r]=t.get())),e}set(e){for(const t in e){const r=e[t];Qi.und(r)||this.springs[t].set(r)}}update(e){return e&&this.queue.push(wl(e)),this}start(e){let{queue:t}=this;return e?t=es(e).map(wl):this.queue=[],this._flush?this._flush(this,t):(_l(this,t),Tl(this,t))}stop(e,t){if(e!==!!e&&(t=e),t){const r=this.springs;Ki(es(t),(t=>r[t].stop(!!e)))}else sl(this._state,this._lastAsyncId),this.each((t=>t.stop(!!e)));return this}pause(e){if(Qi.und(e))this.start({pause:!0});else{const t=this.springs;Ki(es(e),(e=>t[e].pause()))}return this}resume(e){if(Qi.und(e))this.start({pause:!1});else{const t=this.springs;Ki(es(e),(e=>t[e].resume()))}return this}each(e){Ji(this.springs,e)}_onFrame(){const{onStart:e,onChange:t,onRest:r}=this._events,n=this._active.size>0,o=this._changed.size>0;(n&&!this._started||o&&!this._started)&&(this._started=!0,ts(e,(([e,t])=>{t.value=this.get(),e(t,this,this._item)})));const i=!n&&this._started,s=o||i&&r.size?this.get():null;o&&t.size&&ts(t,(([e,t])=>{t.value=s,e(t,this,this._item)})),i&&(this._started=!1,ts(r,(([e,t])=>{t.value=s,e(t,this,this._item)})))}eventObserved(e){if("change"==e.type)this._changed.add(e.parent),e.idle||this._active.add(e.parent);else{if("idle"!=e.type)return;this._active.delete(e.parent)}Ti.onFrame(this._onFrame)}};function Tl(e,t){return Promise.all(t.map((t=>Bl(e,t)))).then((t=>tl(e,t)))}async function Bl(e,t,r){const{keys:n,to:o,from:i,loop:s,onRest:a,onResolve:l}=t,d=Qi.obj(t.default)&&t.default;s&&(t.loop=!1),!1===o&&(t.to=null),!1===i&&(t.from=null);const c=Qi.arr(o)||Qi.fun(o)?o:void 0;c?(t.to=void 0,t.onRest=void 0,d&&(d.onRest=void 0)):Ki(kl,(r=>{const n=t[r];if(Qi.fun(n)){const o=e._events[r];t[r]=({finished:e,cancelled:t})=>{const r=o.get(n);r?(e||(r.finished=!1),t&&(r.cancelled=!0)):o.set(n,{value:null,finished:e||!1,cancelled:t||!1})},d&&(d[r]=t[r])}}));const u=e._state;t.pause===!u.paused?(u.paused=t.pause,os(t.pause?u.pauseQueue:u.resumeQueue)):u.paused&&(t.pause=!0);const h=(n||Object.keys(e.springs)).map((r=>e.springs[r].start(t))),g=!0===t.cancel||!0===Pa(t,"cancel");(c||g&&u.asyncId)&&h.push(el(++e._lastAsyncId,{props:t,state:u,actions:{pause:Zi,resume:Zi,start(t,r){g?(sl(u,e._lastAsyncId),r(ol(e))):(t.onRest=a,r(il(c,t,u,e)))}}})),u.paused&&await new Promise((e=>{u.resumeQueue.add(e)}));const m=tl(e,await Promise.all(h));if(s&&m.finished&&(!r||!m.noop)){const r=xl(t,s,o);if(r)return _l(e,[r]),Bl(e,r,!0)}return l&&Ti.batchedUpdates((()=>l(m,e,e.item))),m}function Al(e,t){const r={...e.springs};return t&&Ki(es(t),(e=>{Qi.und(e.keys)&&(e=wl(e)),Qi.obj(e.to)||(e={...e,to:void 0}),Ml(r,e,(e=>Ol(e)))})),zl(e,r),r}function zl(e,t){Ji(t,((t,r)=>{e.springs[r]||(e.springs[r]=t,Js(t,e))}))}function Ol(e,t){const r=new yl;return r.key=e,t&&Js(r,t),r}function Ml(e,t,r){t.keys&&Ki(t.keys,(n=>{(e[n]||(e[n]=r(n)))._prepareNode(t)}))}function _l(e,t){Ki(t,(t=>{Ml(e.springs,t,(t=>Ol(t,e)))}))}var Rl=n.createContext({pause:!1,immediate:!1}),Hl=()=>{const e=[],t=function(t){pa(`${ha}Directly calling start instead of using the api object is deprecated in v9 (use ".start" instead), this will be removed in later 0.X.0 versions`);const n=[];return Ki(e,((e,o)=>{if(Qi.und(t))n.push(e.start());else{const i=r(t,e,o);i&&n.push(e.start(i))}})),n};t.current=e,t.add=function(t){e.includes(t)||e.push(t)},t.delete=function(t){const r=e.indexOf(t);~r&&e.splice(r,1)},t.pause=function(){return Ki(e,(e=>e.pause(...arguments))),this},t.resume=function(){return Ki(e,(e=>e.resume(...arguments))),this},t.set=function(t){Ki(e,((e,r)=>{const n=Qi.fun(t)?t(r,e):t;n&&e.set(n)}))},t.start=function(t){const r=[];return Ki(e,((e,n)=>{if(Qi.und(t))r.push(e.start());else{const o=this._getProps(t,e,n);o&&r.push(e.start(o))}})),r},t.stop=function(){return Ki(e,(e=>e.stop(...arguments))),this},t.update=function(t){return Ki(e,((e,r)=>e.update(this._getProps(t,e,r)))),this};const r=function(e,t,r){return Qi.fun(e)?e(r,t):e};return t._getProps=r,t};function jl(e,t){const r=Qi.fun(e),[[n],o]=function(e,t,r){const n=Qi.fun(t)&&t;n&&!r&&(r=[]);const o=p((()=>n||3==arguments.length?Hl():void 0),[]),s=i(0),a=ya(),l=p((()=>({ctrls:[],queue:[],flush(e,t){const r=Al(e,t),n=s.current>0&&!l.queue.length&&!Object.keys(r).some((t=>!e.springs[t]));return n?Tl(e,t):new Promise((n=>{zl(e,r),l.queue.push((()=>{n(Tl(e,t))})),a()}))}})),[]),d=i([...l.ctrls]),c=i([]),u=wa(e)||0;function h(e,r){for(let o=e;o<r;o++){const e=d.current[o]||(d.current[o]=new Il(null,l.flush)),r=n?n(o,e):t[o];r&&(c.current[o]=$l(r))}}p((()=>{Ki(d.current.slice(e,u),(e=>{!function(e,t){e.ref?.delete(e),t?.delete(e)}(e,o),e.stop(!0)})),d.current.length=e,h(u,e)}),[e]),p((()=>{h(0,Math.min(u,e))}),r);const g=d.current.map(((e,t)=>Al(e,c.current[t]))),m=f(Rl),b=wa(m),y=m!==b&&function(e){for(const t in e)return!0;return!1}(m);ba((()=>{s.current++,l.ctrls=d.current;const{queue:e}=l;e.length&&(l.queue=[],Ki(e,(e=>e()))),Ki(d.current,((e,t)=>{o?.add(e),y&&e.start({default:m});const r=c.current[t];r&&(function(e,t){t&&e.ref!==t&&(e.ref?.delete(e),t.add(e),e.ref=t)}(e,r.ref),e.ref?e.queue.push(r):e.start(r))}))})),va((()=>()=>{Ki(l.ctrls,(e=>e.stop(!0)))}));const v=g.map((e=>({...e})));return o?[v,o]:v}(1,r?e:[e],r?t||[]:t);return r||2==arguments.length?[n,o]:n}var Ll=class extends ul{constructor(e,t){super(),this.source=e,this.idle=!0,this._active=new Set,this.calc=Rs(...t);const r=this._get(),n=za(r);Ca(this,n.create(r))}advance(e){const t=this._get();Xi(t,this.get())||(Fa(this).setValue(t),this._onChange(t,this.idle)),!this.idle&&Wl(this._active)&&Nl(this)}_get(){const e=Qi.arr(this.source)?this.source.map(Gs):es(Gs(this.source));return this.calc(...e)}_start(){this.idle&&!Wl(this._active)&&(this.idle=!1,Ki(Ea(this),(e=>{e.done=!1})),Gi.skipAnimation?(Ti.batchedUpdates((()=>this.advance())),Nl(this)):ms.start(this))}_attach(){let e=1;Ki(es(this.source),(t=>{qs(t)&&Js(t,this),dl(t)&&(t.idle||this._active.add(t),e=Math.max(e,t.priority+1))})),this.priority=e,this._start()}_detach(){Ki(es(this.source),(e=>{qs(e)&&ea(e,this)})),this._active.clear(),Nl(this)}eventObserved(e){"change"==e.type?e.idle?this.advance():(this._active.add(e.parent),this._start()):"idle"==e.type?this._active.delete(e.parent):"priority"==e.type&&(this.priority=es(this.source).reduce(((e,t)=>Math.max(e,(dl(t)?t.priority:0)+1)),0))}};function Pl(e){return!1!==e.idle}function Wl(e){return!e.size||Array.from(e).every(Pl)}function Nl(e){e.idle||(e.idle=!0,Ki(Ea(e),(e=>{e.done=!0})),Qs(e,{type:"idle",parent:e}))}Gi.assign({createStringInterpolator:ua,to:(e,t)=>new Ll(e,t)});var Vl=/^--/;function Yl(e,t){return null==t||"boolean"==typeof t||""===t?"":"number"!=typeof t||0===t||Vl.test(e)||ql.hasOwnProperty(e)&&ql[e]?(""+t).trim():t+"px"}var Ul={};var ql={animationIterationCount:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Gl=["Webkit","Ms","Moz","O"];ql=Object.keys(ql).reduce(((e,t)=>(Gl.forEach((r=>e[((e,t)=>e+t.charAt(0).toUpperCase()+t.substring(1))(r,t)]=e[t])),e)),ql);var Zl=/^(matrix|translate|scale|rotate|skew)/,Ql=/^(translate)/,Xl=/^(rotate|skew)/,Kl=(e,t)=>Qi.num(e)&&0!==e?e+t:e,Jl=(e,t)=>Qi.arr(e)?e.every((e=>Jl(e,t))):Qi.num(e)?e===t:parseFloat(e)===t,ed=class extends Ta{constructor({x:e,y:t,z:r,...n}){const o=[],i=[];(e||t||r)&&(o.push([e||0,t||0,r||0]),i.push((e=>[`translate3d(${e.map((e=>Kl(e,"px"))).join(",")})`,Jl(e,0)]))),Ji(n,((e,t)=>{if("transform"===t)o.push([e||""]),i.push((e=>[e,""===e]));else if(Zl.test(t)){if(delete n[t],Qi.und(e))return;const r=Ql.test(t)?"px":Xl.test(t)?"deg":"";o.push(es(e)),i.push("rotate3d"===t?([e,t,n,o])=>[`rotate3d(${e},${t},${n},${Kl(o,r)})`,Jl(o,0)]:e=>[`${t}(${e.map((e=>Kl(e,r))).join(",")})`,Jl(e,t.startsWith("scale")?1:0)])}})),o.length&&(n.transform=new td(o,i)),super(n)}},td=class extends Xs{constructor(e,t){super(),this.inputs=e,this.transforms=t,this._value=null}get(){return this._value||(this._value=this._get())}_get(){let e="",t=!0;return Ki(this.inputs,((r,n)=>{const o=Gs(r[0]),[i,s]=this.transforms[n](Qi.arr(o)?o:r.map(Gs));e+=" "+i,t=t&&s})),t?"none":e}observerAdded(e){1==e&&Ki(this.inputs,(e=>Ki(e,(e=>qs(e)&&Js(e,this)))))}observerRemoved(e){0==e&&Ki(this.inputs,(e=>Ki(e,(e=>qs(e)&&ea(e,this)))))}eventObserved(e){"change"==e.type&&(this._value=null),Qs(this,e)}};Gi.assign({batchedUpdates:T,createStringInterpolator:ua,colors:{transparent:0,aliceblue:4042850303,antiquewhite:4209760255,aqua:16777215,aquamarine:2147472639,azure:4043309055,beige:4126530815,bisque:4293182719,black:255,blanchedalmond:4293643775,blue:65535,blueviolet:2318131967,brown:2771004159,burlywood:3736635391,burntsienna:3934150143,cadetblue:1604231423,chartreuse:2147418367,chocolate:3530104575,coral:4286533887,cornflowerblue:1687547391,cornsilk:4294499583,crimson:3692313855,cyan:16777215,darkblue:35839,darkcyan:9145343,darkgoldenrod:3095792639,darkgray:2846468607,darkgreen:6553855,darkgrey:2846468607,darkkhaki:3182914559,darkmagenta:2332068863,darkolivegreen:1433087999,darkorange:4287365375,darkorchid:2570243327,darkred:2332033279,darksalmon:3918953215,darkseagreen:2411499519,darkslateblue:1211993087,darkslategray:793726975,darkslategrey:793726975,darkturquoise:13554175,darkviolet:2483082239,deeppink:4279538687,deepskyblue:12582911,dimgray:1768516095,dimgrey:1768516095,dodgerblue:512819199,firebrick:2988581631,floralwhite:4294635775,forestgreen:579543807,fuchsia:4278255615,gainsboro:3705462015,ghostwhite:4177068031,gold:4292280575,goldenrod:3668254975,gray:2155905279,green:8388863,greenyellow:2919182335,grey:2155905279,honeydew:4043305215,hotpink:4285117695,indianred:3445382399,indigo:1258324735,ivory:4294963455,khaki:4041641215,lavender:3873897215,lavenderblush:4293981695,lawngreen:2096890111,lemonchiffon:4294626815,lightblue:2916673279,lightcoral:4034953471,lightcyan:3774873599,lightgoldenrodyellow:4210742015,lightgray:3553874943,lightgreen:2431553791,lightgrey:3553874943,lightpink:4290167295,lightsalmon:4288707327,lightseagreen:548580095,lightskyblue:2278488831,lightslategray:2005441023,lightslategrey:2005441023,lightsteelblue:2965692159,lightyellow:4294959359,lime:16711935,limegreen:852308735,linen:4210091775,magenta:4278255615,maroon:2147483903,mediumaquamarine:1724754687,mediumblue:52735,mediumorchid:3126187007,mediumpurple:2473647103,mediumseagreen:1018393087,mediumslateblue:2070474495,mediumspringgreen:16423679,mediumturquoise:1221709055,mediumvioletred:3340076543,midnightblue:421097727,mintcream:4127193855,mistyrose:4293190143,moccasin:4293178879,navajowhite:4292783615,navy:33023,oldlace:4260751103,olive:2155872511,olivedrab:1804477439,orange:4289003775,orangered:4282712319,orchid:3664828159,palegoldenrod:4008225535,palegreen:2566625535,paleturquoise:2951671551,palevioletred:3681588223,papayawhip:4293907967,peachpuff:4292524543,peru:3448061951,pink:4290825215,plum:3718307327,powderblue:2967529215,purple:2147516671,rebeccapurple:1714657791,red:4278190335,rosybrown:3163525119,royalblue:1097458175,saddlebrown:2336560127,salmon:4202722047,sandybrown:4104413439,seagreen:780883967,seashell:4294307583,sienna:2689740287,silver:3233857791,skyblue:2278484991,slateblue:1784335871,slategray:1887473919,slategrey:1887473919,snow:4294638335,springgreen:16744447,steelblue:1182971135,tan:3535047935,teal:8421631,thistle:3636451583,tomato:4284696575,turquoise:1088475391,violet:4001558271,wheat:4125012991,white:4294967295,whitesmoke:4126537215,yellow:4294902015,yellowgreen:2597139199}});var rd=((e,{applyAnimatedValues:t=()=>!1,createAnimatedStyle:r=e=>new Ta(e),getComponentProps:n=e=>e}={})=>{const o={applyAnimatedValues:t,createAnimatedStyle:r,getComponentProps:n},i=e=>{const t=Ra(e)||"Anonymous";return(e=Qi.str(e)?i[e]||(i[e]=Oa(e,o)):e[_a]||(e[_a]=Oa(e,o))).displayName=`Animated(${t})`,e};return Ji(e,((t,r)=>{Qi.arr(e)&&(r=Ra(t)),i[r]=i(t)})),{animated:i}})(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"],{applyAnimatedValues:function(e,t){if(!e.nodeType||!e.setAttribute)return!1;const r="filter"===e.nodeName||e.parentNode&&"filter"===e.parentNode.nodeName,{className:n,style:o,children:i,scrollTop:s,scrollLeft:a,viewBox:l,...d}=t,c=Object.values(d),u=Object.keys(d).map((t=>r||e.hasAttribute(t)?t:Ul[t]||(Ul[t]=t.replace(/([A-Z])/g,(e=>"-"+e.toLowerCase())))));void 0!==i&&(e.textContent=i);for(const t in o)if(o.hasOwnProperty(t)){const r=Yl(t,o[t]);Vl.test(t)?e.style.setProperty(t,r):e.style[t]=r}u.forEach(((t,r)=>{e.setAttribute(t,c[r])})),void 0!==n&&(e.className=n),void 0!==s&&(e.scrollTop=s),void 0!==a&&(e.scrollLeft=a),void 0!==l&&e.setAttribute("viewBox",l)},createAnimatedStyle:e=>new ed(e),getComponentProps:({scrollTop:e,scrollLeft:t,...r})=>r}),nd=rd.animated;const od=$.div`
    display: inline-block;
    position: relative;
    width: ${({$size:e})=>e?`${e}px`:"1em"};
    height: ${({$size:e})=>e?`${e}px`:"1em"};
    color: ${e=>e.$color||"currentColor"};
`,id=C`
	0% {
	  transform: rotate(0deg);
	}
	100% {
	  transform: rotate(360deg);
	}
`,sd=$.div`
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
`,ad=$(sd)`
    animation-delay: -0.45s;
`,ld=$(sd)`
    animation-delay: -0.3s;
`,dd=$(sd)`
    animation-delay: -0.15s;
`,cd=({color:r,className:n,size:o})=>e(od,{className:n,$size:o,$color:r,"data-testid":"component-loading-spinner",children:[t(sd,{id:"inner1"}),t(ad,{id:"inner2"}),t(ld,{id:"inner3"}),t(dd,{id:"inner4"})]}),ud={Button:{"button-radius":Hn.md,"button-default-colour-bg":mn["bg-primary"],"button-default-colour-bg-hover":mn["bg-primary-hover"],"button-default-colour-text":mn["text-inverse"],"button-secondary-colour-border":mn["border-primary"],"button-secondary-colour-text":mn["text-primary"],"button-light-colour-text":mn["text-primary"],"button-link-colour-text":mn["text-primary"]}},hd={collections:{default:{Button:{"button-radius":Hn.sm,"button-default-colour-bg":mn["bg-primary"],"button-default-colour-bg-hover":mn["bg-primary-hover"],"button-default-colour-text":mn["text-inverse"],"button-secondary-colour-border":mn["border-primary"],"button-secondary-colour-text":mn["text-primary"],"button-light-colour-text":mn["text-primary"],"button-link-colour-text":mn["text-primary"]}},pa:{Button:{"button-radius":Hn.full,"button-default-colour-bg":mn["bg-primary"],"button-default-colour-bg-hover":mn["bg-primary-hover"],"button-default-colour-text":mn["text-inverse"],"button-secondary-colour-border":mn["border-primary"],"button-secondary-colour-text":mn["text-primary"],"button-light-colour-text":mn["text-primary"],"button-link-colour-text":mn["text-primary"]}},a11yplayground:ud},defaultValue:"default"},gd=(e,t)=>r=>{var n,o;const i=r.theme,s=Lr(hd,null==i?void 0:i.componentScheme);return md((null===(o=null===(n=null==i?void 0:i.componentOverrides)||void 0===n?void 0:n[e])||void 0===o?void 0:o[t])||s[e][t],r)},md=(e,t)=>{switch(typeof e){case"function":return e(t);case"number":return e+"px";case"string":return e}},pd=gd("Button","button-radius"),fd=gd("Button","button-default-colour-bg"),bd=gd("Button","button-default-colour-bg-hover"),yd=gd("Button","button-default-colour-text"),vd=gd("Button","button-secondary-colour-border"),xd=gd("Button","button-secondary-colour-text"),wd=gd("Button","button-light-colour-text"),$d=gd("Button","button-link-colour-text"),Fd=$.button`
    padding: ${qn["spacing-8"]} ${qn["spacing-16"]};
    min-width: 4rem;
    border: ${Un["width-010"]} ${Un.solid} transparent;
    transition: all ${Yn["duration-250"]} ${Yn["ease-default"]};
    border-radius: ${pd};
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;

    // -----------------------------------------------------------------------------
    // BUTTON STYLE + TEXT COLOR
    // -----------------------------------------------------------------------------
    ${e=>{switch(e.$buttonStyle){case"secondary":return F`
                    background-color: ${Nn.bg};
                    border-color: ${e.$buttonIsDanger?Nn["border-error-strong"]:vd};

                    color: ${e.$buttonIsDanger?Nn["text-error"]:xd};

                    &:hover,
                    &:active {
                        @media (pointer: fine) {
                            background-color: ${Nn["bg-hover-neutral"]};
                        }
                    }
                `;case"light":return F`
                    background-color: ${Nn.bg};
                    border-color: ${Nn.border};

                    color: ${e.$buttonIsDanger?Nn["text-error"]:wd};

                    &:hover,
                    &:active {
                        @media (pointer: fine) {
                            background-color: ${Nn["bg-hover-neutral"]};
                        }
                    }
                `;case"link":return F`
                    background-color: transparent;

                    color: ${e.$buttonIsDanger?Nn["text-error"]:$d};
                    &:hover,
                    &:active {
                        @media (pointer: fine) {
                            background-color: ${Nn["bg-hover-neutral"]};
                        }
                    }
                `;case"disabled":return F`
                    background-color: ${Nn["bg-disabled"]};

                    cursor: not-allowed;

                    &:hover {
                        box-shadow: none;
                    }

                    color: ${Nn["text-disabled"]};
                `;default:return F`
                    background-color: ${e.$buttonIsDanger?Nn["bg-error-strong"]:fd};

                    ${Qn.MaxWidth.sm} {
                        width: 100%;
                    }

                    color: ${yd};

                    &:hover,
                    &:active {
                        @media (pointer: fine) {
                            background-color: ${e.$buttonIsDanger?Nn["bg-error-strong-hover"]:bd};
                        }
                    }
                `}}}

    // -----------------------------------------------------------------------------
	// BUTTON SIZE + TEXT SIZE
	// -----------------------------------------------------------------------------
	${e=>{switch(e.$buttonSizeStyle){case"small":return F`
                    height: 2.5rem;
                    ${Vn["body-md-semibold"]}

                    ${Qn.MaxWidth.xxs} {
                        height: auto;
                    }
                `;case"large":return F`
                    height: 4rem;
                    ${Vn["heading-md-semibold"]}

                    ${Qn.MaxWidth.xxs} {
                        height: auto;
                    }
                `;default:return F`
                    height: 3rem;
                    ${Vn["heading-xs-semibold"]}

                    ${Qn.MaxWidth.xxs} {
                        height: auto;
                    }
                `}}}
`,Cd=$(cd)`
    margin-right: 0.5rem;
`,Ed=(r,n)=>{const{children:o,disabled:i=!1,loading:s=!1,styleType:a="default",danger:l=!1,focusableWhenDisabled:d=!1,onClick:c}=r,u=se(r,["children","disabled","loading","styleType","danger","focusableWhenDisabled","onClick"]),h={$buttonStyle:i?"disabled":a,$buttonSizeStyle:"default",$buttonIsDanger:l};return e(Fd,Object.assign({ref:n,"data-testid":u["data-testid"]||"button",disabled:i&&!d,"aria-disabled":i,"aria-busy":s,onClick:i?void 0:c},h,u,{children:[s&&t(Cd,{}),t("span",{children:o})]}))};Ed.displayName="Button.Default";const Sd=(r,n)=>{const{children:o,disabled:i=!1,loading:s=!1,styleType:a="default",danger:l=!1,focusableWhenDisabled:d=!1,onClick:c}=r,u=se(r,["children","disabled","loading","styleType","danger","focusableWhenDisabled","onClick"]),h={$buttonStyle:i?"disabled":a,$buttonSizeStyle:"small",$buttonIsDanger:l};return e(Fd,Object.assign({ref:n,"data-testid":u["data-testid"]||"button",disabled:i&&!d,"aria-disabled":i,"aria-busy":s,onClick:i?void 0:c},h,u,{children:[s&&t(Cd,{}),t("span",{children:o})]}))};Sd.displayName="Button.Small";const kd=(r,n)=>{const{children:o,disabled:i=!1,loading:s=!1,styleType:a="default",danger:l=!1,focusableWhenDisabled:d=!1,onClick:c}=r,u=se(r,["children","disabled","loading","styleType","danger","focusableWhenDisabled","onClick"]),h={$buttonStyle:i?"disabled":a,$buttonSizeStyle:"large",$buttonIsDanger:l};return e(Fd,Object.assign({ref:n,"data-testid":u["data-testid"]||"button",disabled:i&&!d,"aria-disabled":i,"aria-busy":s,onClick:i?void 0:c},h,u,{children:[s&&t(Cd,{}),t("span",{children:o})]}))};kd.displayName="Button.Large";const Dd={Default:o.forwardRef(Ed),Small:o.forwardRef(Sd),Large:o.forwardRef(kd)};var Id={exports:{}};Id.exports=function(){var e={LTS:"h:mm:ss A",LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D, YYYY",LLL:"MMMM D, YYYY h:mm A",LLLL:"dddd, MMMM D, YYYY h:mm A"},t=/(\[[^[]*\])|([-_:/.,()\s]+)|(A|a|YYYY|YY?|MM?M?M?|Do|DD?|hh?|HH?|mm?|ss?|S{1,3}|z|ZZ?)/g,r=/\d\d/,n=/\d\d?/,o=/\d*[^-_:/,()\s\d]+/,i={},s=function(e){return(e=+e)+(e>68?1900:2e3)},a=function(e){return function(t){this[e]=+t}},l=[/[+-]\d\d:?(\d\d)?|Z/,function(e){(this.zone||(this.zone={})).offset=function(e){if(!e)return 0;if("Z"===e)return 0;var t=e.match(/([+-]|\d\d)/g),r=60*t[1]+(+t[2]||0);return 0===r?0:"+"===t[0]?-r:r}(e)}],d=function(e){var t=i[e];return t&&(t.indexOf?t:t.s.concat(t.f))},c=function(e,t){var r,n=i.meridiem;if(n){for(var o=1;o<=24;o+=1)if(e.indexOf(n(o,0,t))>-1){r=o>12;break}}else r=e===(t?"pm":"PM");return r},u={A:[o,function(e){this.afternoon=c(e,!1)}],a:[o,function(e){this.afternoon=c(e,!0)}],S:[/\d/,function(e){this.milliseconds=100*+e}],SS:[r,function(e){this.milliseconds=10*+e}],SSS:[/\d{3}/,function(e){this.milliseconds=+e}],s:[n,a("seconds")],ss:[n,a("seconds")],m:[n,a("minutes")],mm:[n,a("minutes")],H:[n,a("hours")],h:[n,a("hours")],HH:[n,a("hours")],hh:[n,a("hours")],D:[n,a("day")],DD:[r,a("day")],Do:[o,function(e){var t=i.ordinal,r=e.match(/\d+/);if(this.day=r[0],t)for(var n=1;n<=31;n+=1)t(n).replace(/\[|\]/g,"")===e&&(this.day=n)}],M:[n,a("month")],MM:[r,a("month")],MMM:[o,function(e){var t=d("months"),r=(d("monthsShort")||t.map((function(e){return e.slice(0,3)}))).indexOf(e)+1;if(r<1)throw new Error;this.month=r%12||r}],MMMM:[o,function(e){var t=d("months").indexOf(e)+1;if(t<1)throw new Error;this.month=t%12||t}],Y:[/[+-]?\d+/,a("year")],YY:[r,function(e){this.year=s(e)}],YYYY:[/\d{4}/,a("year")],Z:l,ZZ:l};function h(r){var n,o;n=r,o=i&&i.formats;for(var s=(r=n.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g,(function(t,r,n){var i=n&&n.toUpperCase();return r||o[n]||e[n]||o[i].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g,(function(e,t,r){return t||r.slice(1)}))}))).match(t),a=s.length,l=0;l<a;l+=1){var d=s[l],c=u[d],h=c&&c[0],g=c&&c[1];s[l]=g?{regex:h,parser:g}:d.replace(/^\[|\]$/g,"")}return function(e){for(var t={},r=0,n=0;r<a;r+=1){var o=s[r];if("string"==typeof o)n+=o.length;else{var i=o.regex,l=o.parser,d=e.slice(n),c=i.exec(d)[0];l.call(t,c),e=e.replace(c,"")}}return function(e){var t=e.afternoon;if(void 0!==t){var r=e.hours;t?r<12&&(e.hours+=12):12===r&&(e.hours=0),delete e.afternoon}}(t),t}}return function(e,t,r){r.p.customParseFormat=!0,e&&e.parseTwoDigitYear&&(s=e.parseTwoDigitYear);var n=t.prototype,o=n.parse;n.parse=function(e){var t=e.date,n=e.utc,s=e.args;this.$u=n;var a=s[1];if("string"==typeof a){var l=!0===s[2],d=!0===s[3],c=l||d,u=s[2];d&&(u=s[2]),i=this.$locale(),!l&&u&&(i=r.Ls[u]),this.$d=function(e,t,r){try{if(["x","X"].indexOf(t)>-1)return new Date(("X"===t?1e3:1)*e);var n=h(t)(e),o=n.year,i=n.month,s=n.day,a=n.hours,l=n.minutes,d=n.seconds,c=n.milliseconds,u=n.zone,g=new Date,m=s||(o||i?1:g.getDate()),p=o||g.getFullYear(),f=0;o&&!i||(f=i>0?i-1:g.getMonth());var b=a||0,y=l||0,v=d||0,x=c||0;return u?new Date(Date.UTC(p,f,m,b,y,v,x+60*u.offset*1e3)):r?new Date(Date.UTC(p,f,m,b,y,v,x)):new Date(p,f,m,b,y,v,x)}catch(e){return new Date("")}}(t,a,n),this.init(),u&&!0!==u&&(this.$L=this.locale(u).$L),c&&t!=this.format(a)&&(this.$d=new Date("")),i={}}else if(a instanceof Array)for(var g=a.length,m=1;m<=g;m+=1){s[1]=a[m-1];var p=r.apply(this,s);if(p.isValid()){this.$d=p.$d,this.$L=p.$L,this.init();break}m===g&&(this.$d=new Date(""))}else o.call(this,e)}}}();var Td=de(Id.exports),Bd={exports:{}};Bd.exports=function(e,t,r){t.prototype.isBetween=function(e,t,n,o){var i=r(e),s=r(t),a="("===(o=o||"()")[0],l=")"===o[1];return(a?this.isAfter(i,n):!this.isBefore(i,n))&&(l?this.isBefore(s,n):!this.isAfter(s,n))||(a?this.isBefore(i,n):!this.isAfter(i,n))&&(l?this.isAfter(s,n):!this.isBefore(s,n))}};var Ad=de(Bd.exports),zd={exports:{}};zd.exports=function(e,t){t.prototype.isSameOrAfter=function(e,t){return this.isSame(e,t)||this.isAfter(e,t)}};var Od=de(zd.exports),Md={exports:{}};Md.exports=function(e,t){t.prototype.isSameOrBefore=function(e,t){return this.isSame(e,t)||this.isBefore(e,t)}};var _d,Rd,Hd,jd=de(Md.exports),Ld={exports:{}},Pd=de(Ld.exports=(_d={year:0,month:1,day:2,hour:3,minute:4,second:5},Rd={},function(e,t,r){var n,o=function(e,t,r){void 0===r&&(r={});var n=new Date(e),o=function(e,t){void 0===t&&(t={});var r=t.timeZoneName||"short",n=e+"|"+r,o=Rd[n];return o||(o=new Intl.DateTimeFormat("en-US",{hour12:!1,timeZone:e,year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit",timeZoneName:r}),Rd[n]=o),o}(t,r);return o.formatToParts(n)},i=function(e,t){for(var n=o(e,t),i=[],s=0;s<n.length;s+=1){var a=n[s],l=a.type,d=a.value,c=_d[l];c>=0&&(i[c]=parseInt(d,10))}var u=i[3],h=24===u?0:u,g=i[0]+"-"+i[1]+"-"+i[2]+" "+h+":"+i[4]+":"+i[5]+":000",m=+e;return(r.utc(g).valueOf()-(m-=m%1e3))/6e4},s=t.prototype;s.tz=function(e,t){void 0===e&&(e=n);var o=this.utcOffset(),i=this.toDate(),s=i.toLocaleString("en-US",{timeZone:e}),a=Math.round((i-new Date(s))/1e3/60),l=r(s,{locale:this.$L}).$set("millisecond",this.$ms).utcOffset(15*-Math.round(i.getTimezoneOffset()/15)-a,!0);if(t){var d=l.utcOffset();l=l.add(o-d,"minute")}return l.$x.$timezone=e,l},s.offsetName=function(e){var t=this.$x.$timezone||r.tz.guess(),n=o(this.valueOf(),t,{timeZoneName:e}).find((function(e){return"timezonename"===e.type.toLowerCase()}));return n&&n.value};var a=s.startOf;s.startOf=function(e,t){if(!this.$x||!this.$x.$timezone)return a.call(this,e,t);var n=r(this.format("YYYY-MM-DD HH:mm:ss:SSS"),{locale:this.$L});return a.call(n,e,t).tz(this.$x.$timezone,!0)},r.tz=function(e,t,o){var s=o&&t,a=o||t||n,l=i(+r(),a);if("string"!=typeof e)return r(e).tz(a);var d=function(e,t,r){var n=e-60*t*1e3,o=i(n,r);if(t===o)return[n,t];var s=i(n-=60*(o-t)*1e3,r);return o===s?[n,o]:[e-60*Math.min(o,s)*1e3,Math.max(o,s)]}(r.utc(e,s).valueOf(),l,a),c=d[0],u=d[1],h=r(c).utcOffset(u);return h.$x.$timezone=a,h},r.tz.guess=function(){return Intl.DateTimeFormat().resolvedOptions().timeZone},r.tz.setDefault=function(e){n=e}}));Io.extend(Ad),Io.extend(jd),Io.extend(Od),Io.extend(Td),Io.extend(Pd),function(e){e.generateDays=e=>{const t=e.startOf("month"),r=Io(t).startOf("week");return Wd(r).map((e=>Nd(e)))},e.generateDaysForCurrentWeek=e=>{const t=e.startOf("week");return Nd(t)},e.generateMonths=e=>{const t=[];for(let r=0;r<12;r++){const n=e.month(r);t.push(Io(n))}return t},e.generateDecadeOfYears=e=>{const t=e.year(),r=10*Math.floor(t/10),n=e.year(r),o=[n.subtract(1,"year"),n];for(let e=1;e<11;e++)o.push(n.add(e,"year"));return o},e.getStartEndDecade=e=>{const t=10*Math.floor(+e.format("YYYY")/10);return{beginDecade:t,endDecade:+Io(`${t+9}-01-01`).format("YYYY")}},e.convertTo12HourFormat=e=>{const t=Io(e,"HH:mm");return t.isValid()?t.format("h:mm a"):""},e.isWithinRange=(e,t,r,n="day")=>!t&&!r||(t&&r?e.isBetween(t,r,n,"[]"):t?e.isSameOrAfter(t,n):e.isSameOrBefore(r,n)),e.isPreviousMonthWithinRange=(t,r)=>e.isWithinRange(t.subtract(1,"month"),r,void 0,"month"),e.isPreviousYearWithinRange=(t,r)=>e.isWithinRange(t.subtract(1,"year"),r,void 0,"year"),e.isPreviousDecadeWithinRange=(t,r)=>{const{beginDecade:n}=e.getStartEndDecade(t);return e.isWithinRange(t.year(n).subtract(1,"year"),r,void 0,"year")},e.isNextMonthWithinRange=(t,r)=>e.isWithinRange(t.add(1,"month"),void 0,r,"month"),e.isNextYearWithinRange=(t,r)=>e.isWithinRange(t.add(1,"year"),void 0,r,"year"),e.isNextDecadeWithinRange=(t,r)=>{const{endDecade:n}=e.getStartEndDecade(t);return e.isWithinRange(t.year(n).add(1,"year"),void 0,r,"year")},e.getWeekStartEnd=e=>({start:e.startOf("week").format("YYYY-MM-DD"),end:e.endOf("week").format("YYYY-MM-DD")}),e.getFixedRangeStartEnd=(e,t)=>({start:e.format("YYYY-MM-DD"),end:e.add(t-1,"day").format("YYYY-MM-DD")}),e.isDisabledDay=(t,r,n,o)=>{const i=e.isWithinRange(t,n?Io(n):void 0,o?Io(o):void 0),s=r&&r.includes(t.format("YYYY-MM-DD"));return!i||!!s}}(Hd||(Hd={}));const Wd=e=>{const t=[e];for(let r=1;r<6;r++){const n=e.add(r,"week");t.push(n)}return t},Nd=e=>{const t=[];for(let r=0;r<7;r++){const n=e.add(r,"day");t.push(n)}return t},Vd=[1,3,5,7,8,10,12],Yd=[4,6,9,11];var Ud,qd;!function(e){e.clampDay=(t,r,n)=>{const o=parseInt(t),i=parseInt(r),s=parseInt(n);return 0==o?"1":Vd.includes(i)?Math.min(o,31).toString():Yd.includes(i)?Math.min(o,30).toString():2===i?e.isLeapYear(s)?Math.min(o,29).toString():Math.min(o,28).toString():t},e.clampMonth=e=>{const t=parseInt(e);return 0==t?"1":t>12?"12":e},e.isLeapYear=e=>e%4==0&&e%100!=0||e%400==0,e.getTimeDiffInMinutes=(e,t,r="HH:mm")=>{const n=Io(e,r);return Io(t,r).diff(n,"minute")},e.toDayjs=e=>e?Io(e):Io(),e.addMinutesToTime=(e,t,r="HH:mm")=>Io(e,r).add(t,"minutes").format(r),e.isSame=(e,t,r="day")=>Io(e).isSame(Io(t),r)}(Ud||(Ud={})),function(e){e.isDateDisabled=(e,t)=>{const{disabledDates:r,minDate:n,maxDate:o}=t;return!!(e&&r&&r.length&&r.includes(e))||(!(!n||!Io(e).isBefore(n,"day"))||!(!o||!Io(e).isAfter(o,"day")))},e.sanitizeInput=e=>{if(e){if(Io(e).isValid())return e}return""}}(qd||(qd={}));const Gd=()=>{const e=b.split(".");return parseInt(e[0],10)>=19},Zd=(...e)=>t=>{const r=[];for(const n of e)if("function"==typeof n){const e=n(t),o="function"==typeof e;r.push(o?e:()=>n(null))}else n.current=t,r.push((()=>{n.current=null}));if(Gd())return()=>{for(const e of r)e()}};var Qd;function Xd(e){const t=i(null);return h((()=>{t.current=e}),[e]),m(((...e)=>{var r;return null===(r=t.current)||void 0===r?void 0:r.call(t,...e)}),[])}!function(e){e.generate=()=>Math.random().toString(36).substring(2,9)}(Qd||(Qd={}));const Kd=e=>{const t=(e=>{const t=i(e),r=i();return s((()=>{r.current=t.current,t.current=e}),[e]),r.current})(e);return t!==e};$.div`
    clip-path: inset(50%);
    height: 1px;
    width: 1px;
    overflow: hidden;
    position: absolute;
    white-space: nowrap;
`;const Jd=e=>Gd()?e:e?"true":void 0,ec=e=>{const{textSize:t}=e||{};return F`
        // Text styling
        ${t&&Vn[`${t}-regular`]}

        strong {
            font-weight: ${Vn.Spec["weight-semibold"]};
            ${t&&Vn[`${t}-semibold`]};
        }

        p {
            margin: 0;
        }

        // Link styling
        a {
            font-weight: ${Vn.Spec["weight-semibold"]};
            ${t&&Vn[`${t}-semibold`]}
            color: ${Nn.hyperlink};
            text-decoration: none;

            svg {
                color: ${Nn["icon-primary"]};
                height: 1lh;
                width: 1em;
                margin-left: 0.4rem;
                vertical-align: middle;
            }

            &:hover,
            &:active,
            &:visited,
            &:focus {
                color: ${Nn["hyperlink-hover"]};

                svg {
                    color: ${Nn["icon-hover"]};
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
    `},tc=e=>F`
    display: -webkit-box;
    -webkit-line-clamp: ${e};
    -webkit-box-orient: vertical;
    overflow: hidden;
`,rc=(e,t,r=!1)=>F`
        ${Vn[`${e}-${t}`]}
        ${r?"margin-bottom: 1.05em;":"margin-bottom: 0;"}
    `,nc=e=>{if(e)return F`
            ${tc(e)}
        `},oc=(e,t,r,n,o)=>F`
    ${rc(e,t||"regular",n)}
    ${((e=!1,t=!1,r)=>t?F`
            display: block;
            ${nc(r)}
        `:e?F`
            display: inline;
        `:F`
            display: block;
            ${nc(r)}
        `)(r,n,o)}
    color: ${Nn.text};
`,ic=$.div`
    ${e=>oc(e.$textStyle,e.$weight,e.$inline,e.$paragraph,e.$maxLines)}
`,sc=$.a`
    ${e=>F`
        ${rc(e.$textStyle,e.$weight||"regular")}
        color: ${Nn.hyperlink};
        text-decoration: none;

        &:hover,
        &:active,
        &:focus {
            color: ${Nn["text-hover"]};
        }
    `}
`,ac=$(_)`
    height: 1lh;
    width: 1em;
    margin-left: 0.4em;
    vertical-align: middle;
`;var lc;!function(r){const n=(e,r,n)=>{const i=(n,o)=>{var{weight:i,inline:s,paragraph:a,maxLines:l}=n,d=se(n,["weight","inline","paragraph","maxLines"]);return t(ic,Object.assign({ref:o,as:s?"span":e,$textStyle:r,$weight:i,$inline:s,$paragraph:a,$maxLines:l},d))};return i.displayName=`Typography.${n}`,o.forwardRef(i)};r.HeadingXXL=n("h1","heading-xxl","HeadingXXL"),r.HeadingXL=n("h2","heading-xl","HeadingXL"),r.HeadingLG=n("h3","heading-lg","HeadingLG"),r.HeadingMD=n("h4","heading-md","HeadingMD"),r.HeadingSM=n("h5","heading-sm","HeadingSM"),r.HeadingXS=n("h6","heading-xs","HeadingXS");const i=(e,r)=>{const n=(r,n)=>{var{weight:o,inline:i,paragraph:s,maxLines:a}=r,l=se(r,["weight","inline","paragraph","maxLines"]);return t(ic,Object.assign({ref:n,as:i?"span":"p",$textStyle:e,$weight:o,$inline:i,$paragraph:s,$maxLines:a},l))};return n.displayName=`Typography.${r}`,o.forwardRef(n)};r.BodyBL=i("body-baseline","BodyBL"),r.BodyMD=i("body-md","BodyMD"),r.BodySM=i("body-sm","BodySM"),r.BodyXS=i("body-xs","BodyXS");const s=(r,n)=>{const i=(n,o)=>{var{weight:i,children:s,external:a}=n,l=se(n,["weight","children","external"]);return e(sc,Object.assign({ref:o,$textStyle:r,$weight:i},l,{children:[s,a&&t(ac,{})]}))};return i.displayName=`Typography.${n}`,o.forwardRef(i)};r.LinkBL=s("body-baseline","LinkBL"),r.LinkMD=s("body-md","LinkMD"),r.LinkSM=s("body-sm","LinkSM"),r.LinkXS=s("body-xs","LinkXS")}(lc||(lc={}));const dc=$.div`
    padding: ${qn["spacing-8"]} ${qn["spacing-16"]};
    display: flex;

    ${e=>{let t,r;switch(e.$type){case"error":t=Nn["bg-error"](e),r=Nn["border-error"](e);break;case"success":t=Nn["bg-success"](e),r=Nn["border-success"](e);break;case"warning":default:t=Nn["bg-warning"](e),r=Nn["border-warning"](e);break;case"info":t=Nn["bg-info"](e),r=Nn["border-info"](e);break;case"description":t=Nn["bg-strong"](e),r=Nn["border-strong"](e)}return F`
            background: ${t};
            border-left: ${Un["width-020"]} ${Un.solid}
                ${r};
        `}}

    color: ${Nn.text};
    ${e=>"small"===e.$sizeType?ec({textSize:"body-sm"}):ec({textSize:"body-md"})}
`,cc=$.div`
    display: flex;
    align-items: center;
    height: 1lh;
    margin-right: ${qn["spacing-8"]};

    ${e=>{let t;const r="small"===e.$sizeType?"1.25rem":"1.5rem";switch(e.$type){case"error":t=Nn["icon-error"](e);break;case"success":t=Nn["icon-success"](e);break;case"warning":default:t=Nn["icon-warning"](e);break;case"info":t=Nn["icon-info"](e);break;case"description":t=Nn["icon-subtle"](e)}return F`
            svg {
                color: ${t};
                width: ${r};
                height: ${r};
            }
        `}}
`,uc=$(lc.LinkSM)`
    ${e=>"small"===e.$sizeType?F`
                ${Vn["body-sm-semibold"]}
                margin-top: ${qn["spacing-4"]};
            `:F`
                ${Vn["body-md-semibold"]}
                margin-top: ${qn["spacing-8"]};
            `}
    display: flex;
    align-items: center;
    align-self: flex-start;

    svg {
        height: 1rem;
        width: 1rem;
        margin-left: ${qn["spacing-4"]};
    }
`,hc=$.div`
    display: flex;
    flex-direction: column;
    flex: 1;
    overflow-wrap: anywhere;
`,gc=$.div`
    display: flex;
    flex-direction: column;
    flex: 1;
    order: 1;
    ${e=>{if(e.$showMore&&e.$hasActionLink)return F`
                margin-bottom: ${qn["spacing-8"]};
            `}}
    ${e=>{const t="linear-gradient(to bottom, black 50%, transparent 100%)";if(!e.$showMore&&e.$maxCollapsedHeight)return`\n                max-height: ${e.$maxCollapsedHeight}px;\n\t\t\t\toverflow: hidden;\n                -webkit-mask-image: ${t};\n                mask-image: ${t};\n\t\t\t`}}
`,mc=$.button`
    ${e=>"small"===e.$sizeType?F`
                ${Vn["body-sm-semibold"]}
            `:F`
                ${Vn["body-md-semibold"]}
            `}

    display: flex;
    align-items: center;
    align-self: flex-start;
    gap: ${qn["spacing-4"]};
    margin-top: ${qn["spacing-8"]};
    order: 2;

    cursor: pointer;
    user-select: none;
    border: none;
    background: transparent;

    color: ${Nn["text-primary"]};
`,pc=$(w)`
    transform: rotate(${e=>e.$expanded?180:0}deg);
    transition: transform ${Yn["duration-350"]} ${Yn["ease-standard"]};
`,fc=$.div`
    height: 1.625rem;
    width: 1.625rem;
    margin-right: 0.5rem;
    flex-shrink: 0;

    svg {
        height: 100%;
        width: 100%;
    }

    ${e=>e.$disabled?e.$active?F`
                    color: ${Nn["icon-selected-disabled"]};
                `:F`
                    color: ${Nn["icon-disabled-subtle"]};
                `:e.$active?F`
                color: ${Nn["icon-selected"]};
            `:F`
            color: ${Nn["icon-subtle"]};
        `};
`,bc=F`
    margin-bottom: ${e=>e.$bottomMargin||0}rem;

    // Counter matters
    counter-reset: list;

    li {
        font-weight: ${Vn.Spec["weight-regular"]};
        ${e=>e.$size&&Vn[`${e.$size}-regular`]}
        color: ${Nn.text};
    }

    // nested lists styling
    ol,
    ul {
        margin-top: 0.5rem;
        margin-bottom: 0.5rem;
    }
`,yc=$.ol`
    ${bc}

    margin-left: 3rem;

    ${Qn.MaxWidth.lg} {
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
`,vc=$.ul`
    ${bc}

    margin-left: 2.5rem;
    list-style-type: ${e=>e.$bulletType||"disc"};
`,xc=e=>{var{size:r,bulletType:n,bottomMargin:o,children:i}=e,s=se(e,["size","bulletType","bottomMargin","children"]);return t(vc,Object.assign({$size:r,$bulletType:n,$bottomMargin:o},s,{children:i}))};xc.displayName="TextList.Ul";const wc=e=>{var{size:r,counterType:n,counterSeparator:o,bottomMargin:i,children:s}=e,a=se(e,["size","counterType","counterSeparator","bottomMargin","children"]);return t(yc,Object.assign({$size:r,$counterType:n,$counterSeparator:o,$bottomMargin:i},a,{children:s}))};wc.displayName="TextList.Ol";const $c=xc,Fc=$.div`
    position: relative;
    display: inline-flex;
    min-width: 10.375rem;
    border-radius: ${Gn.sm};
    border-width: 1px;
    border-style: solid;
    overflow: hidden;
    flex-direction: column;
    height: fit-content;
    background: ${Nn.bg};

    &:has(input:focus-visible) {
        outline: 2px solid ${Nn["focus-ring"]};
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
                            border-color: ${Nn["border-error"]};
                        `:F`
                            border-color: ${Nn["border-error"]};

                            &:has(${Ic}:hover) {
                                @media (pointer: fine) {
                                    background: ${Nn["bg-hover-subtle"]};
                                }
                            }
                        `:e.$disabled?e.$selected?F`
                            border: none;
                            background: ${Nn["bg-selected-disabled"]};
                        `:F`
                            border: none;
                        `:e.$selected?F`
                        border: none;
                        background: ${Nn["bg-selected"]};

                        &:has(${Ic}:hover) {
                            @media (pointer: fine) {
                                background: ${Nn["bg-selected-hover"]};

                                & ${Sc} {
                                    color: ${Nn["text-selected-hover"]};
                                }

                                & ${Hc} {
                                    color: ${Nn["icon-selected-hover"]};
                                }
                            }
                        }
                    `:F`
                    border: none;

                    &:has(${Ic}:hover) {
                        @media (pointer: fine) {
                            background: ${Nn["bg-hover-subtle"]};
                        }
                    }
                `:e.$error?e.$disabled?F`
                            border-color: ${Nn["border-error"]};
                        `:F`
                            border-color: ${Nn["border-error"]};

                            &:has(${Ic}:hover) {
                                @media (pointer: fine) {
                                    background: ${Nn["bg-hover-subtle"]};
                                }
                            }
                        `:e.$disabled?e.$selected?F`
                            border-color: ${Nn["border-selected-disabled"]};
                            background: ${Nn["bg-selected-disabled"]};
                        `:F`
                            border-color: ${Nn["border-disabled"]};
                            background: ${Nn["bg-disabled"]};
                        `:e.$selected?F`
                        border-color: ${Nn["border-selected"]};
                        background: ${Nn["bg-selected"]};

                        &:has(${Ic}:hover) {
                            @media (pointer: fine) {
                                background: ${Nn["bg-selected-hover"]};

                                & ${Sc} {
                                    color: ${Nn["text-selected-hover"]};
                                }

                                & ${Hc} {
                                    color: ${Nn["icon-selected-hover"]};
                                }
                            }
                        }
                    `:F`
                    border-color: ${Nn.border};

                    &:has(${Ic}:hover) {
                        @media (pointer: fine) {
                            background: ${Nn["bg-hover-subtle"]};
                        }
                    }
                `}
`,Cc=$.input`
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
`,Ec=$.div`
    display: flex;
`,Sc=$.div`
    display: flex;
    flex-direction: column;
    overflow-wrap: anywhere;
    width: 100%;
    overflow: hidden;

    // apply header container text color
    ${e=>e.$disabled?e.$selected?F`
                    color: ${Nn["text-selected-disabled"]};
                `:F`
                    color: ${Nn["text-disabled"]};
                `:e.$selected?F`
                color: ${Nn["text-selected"]};
            `:F`
            color: ${Nn.text};
        `}
`,kc=$.label`
    ${Vn["body-baseline-regular"]}
    overflow: hidden;
    display: -webkit-box;
    text-overflow: ellipsis;
    -webkit-box-orient: vertical;
    overflow-wrap: break-word;
    -webkit-line-clamp: ${e=>{var t,r;return null!==(r=null===(t=e.$maxLines)||void 0===t?void 0:t.desktop)&&void 0!==r?r:"none"}};
    ${Qn.MaxWidth.lg} {
        -webkit-line-clamp: ${e=>{var t,r;return null!==(r=null===(t=e.$maxLines)||void 0===t?void 0:t.tablet)&&void 0!==r?r:"none"}};
    }
    ${Qn.MaxWidth.sm} {
        -webkit-line-clamp: ${e=>{var t,r;return null!==(r=null===(t=e.$maxLines)||void 0===t?void 0:t.mobile)&&void 0!==r?r:"none"}};
    }
`,Dc=$.div`
    ${Vn["body-md-regular"]}
    margin-top: 0.5rem;

    z-index: 1; // forces sublabel to render above the input
    pointer-events: none; // to allow click events to be passed to the input

    strong,
    b {
        ${Vn["body-md-semibold"]}
    }
`,Ic=$.div`
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
`,Tc=$.div`
    display: flex;
    height: 100%;
    width: 100%;
    position: relative;
    padding: ${e=>e.$addPadding?"0.6875rem 0rem 0.6875rem 1rem":"0.6875rem 1rem"};
`,Bc=$.button`
    color: ${e=>e.$disabled?Nn["text-disabled"]:Nn["text-error"]};
    white-space: nowrap;
    ${Vn["body-md-semibold"]}
    height: fit-content;
    padding: 0.6875rem 1rem 0.6875rem 0.5rem;
    border: none;
    background: none;

    cursor: ${e=>e.$disabled?"not-allowed":"pointer"};
`,Ac=$.button`
    color: ${e=>e.disabled?Nn["text-disabled"]:Nn["text-primary"]};
    ${Vn["body-baseline-semibold"]}
    display: flex;
    align-items: center;
    justify-content: flex-end;
    border: none;
    background-color: ${Nn.bg};
    cursor: ${e=>e.disabled?"not-allowed":"pointer"};
    padding: 0 1rem 0.6875rem 1rem;
    padding-top: ${e=>e.$paddingTopRequired?"0.6875rem":"0rem"};
    width: 100%;

    svg {
        width: 1em;
        height: 1em;
        margin-left: 0.5rem;
    }
`,zc=$.div`
    width: 100%;
    color: ${e=>e.$disabled?Nn["text-disabled"]:Nn["text-error"]};
    border: none;
    background: ${Nn.bg};
    cursor: ${e=>e.$disabled?"not-allowed":"pointer"};
    padding: 0.6875rem 1rem 0.5rem 1rem;
`,Oc=$((r=>{var{type:n,className:o,children:i,actionLink:l,actionLinkIcon:d,sizeType:c="default",showIcon:u=!1,customIcon:h,maxCollapsedHeight:g,role:p}=r,f=se(r,["type","className","children","actionLink","actionLinkIcon","sizeType","showIcon","customIcon","maxCollapsedHeight","role"]);const[b,y]=a(!1),[v,x]=a(!1),{height:w,ref:$}=Di(),[F]=a((()=>Qd.generate())),C=m((()=>{y(!g),x(E())}),[g,w]),E=()=>!(!w||!g)&&w>g;s((()=>{C()}),[g,w,C]);return e(dc,{className:o,$type:n,$sizeType:c,"aria-label":`${(()=>{switch(n){case"success":return"Success";case"warning":return"Warning";case"error":return"Error";case"info":return"Information";case"description":return"Description";default:return"Alert"}})()}`,"data-testid":f["data-testid"],role:p,children:[u&&t(cc,{$sizeType:c,$type:n,children:(()=>{if(n&&h)return h;switch(n){case"success":return t(M,{"aria-hidden":!0});case"warning":return t(z,{"aria-hidden":!0});case"error":return t(A,{"aria-hidden":!0});case"info":case"description":return t(O,{"aria-hidden":!0});default:return null}})()}),e(hc,{children:[v&&e(mc,{$sizeType:c,$type:n,type:"button","aria-expanded":b,"aria-controls":F,onClick:()=>y(!b),children:["Show ",b?"less":"more",t(pc,{$expanded:b})]}),e(gc,{id:F,$maxCollapsedHeight:E()?g:void 0,$showMore:b,$hasActionLink:!!l,inert:Jd(!!g&&!b),children:[t("div",{ref:$,children:i}),l?e(uc,Object.assign({"data-testid":"action-link",$type:n,$sizeType:c},l,{children:[l.children,d||t(B,{})]})):null]})]})]})}))`
    width: 100%;
    user-select: none;
`,Mc=$.div`
    padding: 0 1rem;
    padding-top: 0.6875rem;
    padding-bottom: ${e=>e.$isFinalItem?"0.6875rem":"0.5rem"};
    background-color: ${Nn.bg};
    ${ec({textSize:"body-md"})}

    ${e=>e.$disabled?F`
                color: ${Nn["text-disabled"]};
            `:e.$selected?F`
                color: ${Nn["text-selected"]};
            `:F`
                color: ${Nn.text};
            `}
`,_c=$(lc.BodyMD)`
    color: ${e=>e.$disabled?Nn["text-disabled"]:Nn["text-error"]};
`,Rc=$($c)`
    color: ${e=>e.$disabled?Nn["text-disabled"]:Nn["text-error"]};
`,Hc=$((({type:e,active:r=!1,disabled:n,className:o})=>{let i;switch(e){case"checkbox":i=t(r?P:L,{});break;case"radio":i=t(r?H:R,{});break;case"tick":i=t(W,{});break;case"cross":i=t(j,{});break;default:i=null}return t(fc,{className:o,$active:r,$disabled:n,"aria-hidden":!0,children:i})}))`
    ${e=>e.$disabled?e.$selected?F`
                    color: ${Nn["icon-selected-disabled"]};
                `:F`
                    color: ${Nn["icon-disabled-subtle"]};
                `:e.$selected?F`
                color: ${Nn["icon-selected"]};
            `:F`
            color: ${Nn["icon-subtle"]};
        `};
`,jc=$.button`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: ${qn["spacing-24"]};
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
                background-color: ${Nn["bg-hover-neutral"]};
            `}
    }
`,Lc=o.forwardRef(((e,r)=>{var{children:n,focusHighlight:o=!0,focusOutline:i="none",type:s="button"}=e,a=se(e,["children","focusHighlight","focusOutline","type"]);return t(jc,Object.assign({ref:r,$outline:i,$highlight:o,type:s},a,{children:n}))})),Pc=nd($.div`
    position: absolute;
    top: calc(3rem + ${qn["spacing-8"]});
    left: 0;
    overflow: hidden;
    z-index: 1;

    ${Qn.MaxWidth.xxs} {
        max-width: 100%;
    }
`),Wc=$.div`
    position: relative;
    width: 100%;
    padding: ${qn["spacing-8"]} ${qn["spacing-20"]}
        ${qn["spacing-24"]} ${qn["spacing-20"]};
    display: flex;
    flex-direction: column;
    background: ${Nn.bg};
    border: ${Un["width-010"]} ${Un.solid} ${Nn.border};
    border-radius: ${Gn.sm};
`,Nc=$.div`
    display: flex;
    align-items: center;
    justify-content: space-between;

    ${Qn.MaxWidth.xxs} {
        flex-direction: column;
        width: 100%;
    }
`,Vc=$.div`
    display: flex;
    justify-content: flex-end;
    margin-top: ${qn["spacing-16"]};
    gap: ${qn["spacing-8"]} ${qn["spacing-16"]};

    ${Qn.MaxWidth.xxs} {
        flex-direction: column-reverse; // FIXME: this breaks tab focus
        margin-top: ${qn["spacing-32"]};
    }
`,Yc=$.div`
    display: flex;
    align-items: center;
    margin-right: ${qn["spacing-32"]};

    ${Qn.MaxWidth.xxs} {
        margin-right: 0;
        width: 100%;
    }
`,Uc=$.div`
    display: flex;
    gap: ${qn["spacing-8"]};

    ${Qn.MaxWidth.lg} {
        flex-direction: column;
    }

    ${Qn.MaxWidth.xxs} {
        flex-direction: row;
        width: 100%;
    }
`,qc=$.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    ${Qn.MaxWidth.xxs} {
        width: 6rem;
    }
`,Gc=$(Lc)`
    width: 5rem;
    padding: ${qn["spacing-16"]} 0;
    color: ${Nn.icon};

    svg {
        height: 1rem;
        width: 1rem;
    }

    &:hover {
        color: ${Nn["icon-hover"]};
    }
`,Zc=$(lc.BodyBL)`
    flex-shrink: 0;
    width: 1.5rem;
    text-align: center;
`,Qc=$(yo)`
    height: calc(3rem - 2px);
    width: 5rem;
    display: flex;
    align-items: center;
    justify-content: center;

    ${Qn.MaxWidth.xxs} {
        width: 100%;
    }
`,Xc=$(xo)`
    text-align: center;
    width: 100%;

    &:focus::placeholder {
        color: transparent;
    }
`,Kc=$((n=>{var{type:o="checkbox",indicator:l,checked:d,styleType:c="default",children:u,childrenMaxLines:h,subLabel:g,disabled:m,error:f,name:b,id:y,className:v,compositeSection:x,removable:w,onRemove:$,"data-testid":F,onChange:C,useContentWidth:E,"aria-describedby":D}=n,I=se(n,["type","indicator","checked","styleType","children","childrenMaxLines","subLabel","disabled","error","name","id","className","compositeSection","removable","onRemove","data-testid","onChange","useContentWidth","aria-describedby"]);const{collapsible:T=!0,errors:B,children:A,initialExpanded:z}=x||{},[O,M]=a(d),[_,R]=a(!!z),H=p((()=>{const e=Array.isArray(B)&&(null==B?void 0:B.length)>0,t=!Array.isArray(B)&&!!B;return e||t}),[B]),[j]=a(Qd.generate()),L=y?`${y}`:`tg-${j}`,P=i(null);s((()=>{M(d)}),[d]),s((()=>{O&&R(null==z||z)}),[O]);const W=e=>{if(!m){if(C)return void C(e);switch(o){case"checkbox":M((e=>!e));break;case"radio":case"yes":case"no":O||M(!0)}}},N=()=>{m||R(!_)},V=()=>{m||!$||$()},Y=()=>{var e;null===(e=null==P?void 0:P.current)||void 0===e||e.click()},U=e=>{e.stopPropagation()},q=()=>{let e;switch(o){case"yes":e="tick";break;case"no":e="cross";break;case"checkbox":case"radio":e=o}return t(Hc,{type:e,active:O,disabled:m,$selected:O,$disabled:m})},G=()=>{if(!g)return null;let e;return e="function"==typeof g?g():g,t(Dc,{"data-id":"toggle-sublabel",id:`${L}-sublabel`,"aria-hidden":!0,children:e})},Z=n=>e(r,{children:[t(_c,{weight:"semibold",$disabled:m,children:"Error"}),t(Rc,{$disabled:m,children:null==n?void 0:n.map(((e,r)=>t("li",{id:`${L}-error-list-item-${r}`,children:t(_c,{weight:"semibold",$disabled:m,children:e})},r)))})]});return e(Fc,{$selected:O,$disabled:m,className:v,$styleType:c,$error:f,$indicator:l,$useContentWidth:E,id:y,"data-testid":F,children:[(()=>{const r=["string"==typeof g?`${L}-sublabel`:null,D].filter(Boolean).join(" ")||void 0;return e(Ic,{id:`${L}-header-container`,$disabled:m,$error:f,$selected:O,$indicator:l,$styleType:c,children:[t(Tc,{$addPadding:w,children:e(Ec,{id:`${L}-input-container`,onClick:Y,children:[t(Cc,Object.assign({ref:P,name:b,id:`${L}-input`,type:"checkbox"===o?"checkbox":"radio","data-testid":"toggle-input",disabled:m,onChange:W,onClick:U,checked:O,"aria-describedby":r},I)),l&&q(),e(Sc,{$selected:O,$disabled:m,children:[t(kc,{htmlFor:`${L}-input`,"data-testid":"toggle-label",id:`${L}-label`,$maxLines:h,children:u}),g&&G()]})]})}),w&&t(Bc,{type:"button",$disabled:m,onClick:V,id:`${L}-remove-button`,children:"Remove"})]})})(),A&&e("div",{children:[(!T||_)&&t(Mc,{"data-id":"toggle-composite-children",$isFinalItem:!T,$disabled:m,children:A}),T&&!_&&H&&t(zc,{$disabled:m,onClick:N,id:`${L}-error-alert`,children:t(Oc,{type:m?"description":"error",className:v,showIcon:!0,children:Array.isArray(B)?Z(B):B})}),T&&e(Ac,{$paddingTopRequired:!_&&!H,disabled:m,onClick:N,"data-testid":_?"collapse-button":"expand-button",children:[_?"Show less":"Show more",t(_?k:S,{"aria-hidden":!0})]})]})]})}))`
    min-width: 5rem;
    flex: 1;
`,Jc=$(Dd.Small)`
    width: 7rem;

    ${Qn.MaxWidth.sm} {
        flex: 1;
    }

    ${Qn.MaxWidth.xxs} {
        width: 100%;
    }
`;var eu,tu,ru;!function(e){e.HOUR_UP="hour-up",e.HOUR_DOWN="hour-down",e.MINUTE_UP="minute-up",e.MINUTE_DOWN="minute-down"}(eu||(eu={})),function(e){e.HOUR="hour",e.MINUTE="minute"}(tu||(tu={})),function(e){e.AM="am",e.PM="pm"}(ru||(ru={}));const nu=({id:r,value:n,show:o,format:l,onChange:d,onCancel:c})=>{var u;const h=Do.getTimeValues(l,n),[g,p]=a(h.hour),[f,b]=a(h.minute),[y,v]=a(h.period),x=i(null),w=i(null),$=Di();s((()=>{if(o&&x.current&&x.current.focus(),o){const{hour:e,minute:t,period:r}=Do.getTimeValues(l,n);p(e),b(t),v(r)}}),[o,n,l]),s((()=>{const e=x.current,t=w.current;return e&&e.addEventListener("keydown",F),t&&t.addEventListener("keydown",F),()=>{e&&e.removeEventListener("keydown",F),t&&t.removeEventListener("keydown",F)}}),[]);const F=e=>{["Digit0","Digit1","Digit2","Digit3","Digit4","Digit5","Digit6","Digit7","Digit8","Digit9","Tab","Backspace","Delete","ArrowLeft","ArrowRight","ArrowUp","ArrowDown"].includes(e.code)||["Backspace","0","1","2","3","4","5","6","7","8","9"].includes(e.key)||e.preventDefault()},C=m((e=>{switch(e.currentTarget.name){case eu.MINUTE_UP:b(Do.updateMinutes(f,"add"));break;case eu.MINUTE_DOWN:b(Do.updateMinutes(f,"minus"));break;case eu.HOUR_UP:p(Do.updateHours(g,"add"));break;case eu.HOUR_DOWN:p(Do.updateHours(g,"minus"))}}),[g,f]),E=e=>{e.target.select()},D=e=>{const t=e.target.value;switch(e.target.name){case tu.HOUR:t.length<=2&&p(t);break;case tu.MINUTE:t.length<=2&&b(t)}},I=e=>{const t=parseInt(e.target.value);if(!isNaN(t))switch(e.target.name){case tu.HOUR:{const r=t>23||t<0?h.hour:Do.convertHourTo12HourFormat(e.target.value);p(r);break}case tu.MINUTE:{const r=t>59||t<0?h.minute:e.target.value;b(So.padValue(r));break}}},T=e=>{switch(e.target.name){case ru.AM:v(ko.AM);break;case ru.PM:v(ko.PM)}},B=e=>r?`${r}-${e}`:e,A=jl({opacity:o?1:0,height:o?(null!==(u=$.height)&&void 0!==u?u:0)+32+2:0});return t(Pc,{"data-testid":"animated-dropdown-wrapper",style:A,children:e(Wc,{ref:$.ref,"data-testid":B("timepicker-dropdown"),inert:Jd(!o),children:[e(Nc,{children:[e(Yc,{children:[e(qc,{children:[t(Gc,{"aria-label":"increase hour",name:eu.HOUR_UP,tabIndex:-1,onClick:C,"data-testid":B("hour-increment-button"),children:t(k,{})}),t(Qc,{children:t(Xc,{"aria-label":"hour",type:"number",name:tu.HOUR,id:"hour",maxLength:2,pattern:"[0-9]{2}",ref:x,value:g,onFocus:E,onChange:D,onBlur:I,min:1,max:12,placeholder:"HH","data-testid":B("hour-input")})}),t(Gc,{"aria-label":"decrease hour",name:eu.HOUR_DOWN,tabIndex:-1,onClick:C,"data-testid":B("hour-decrement-button"),children:t(S,{})})]}),t(Zc,{children:":"}),e(qc,{children:[t(Gc,{"aria-label":"increase minute",name:eu.MINUTE_UP,tabIndex:-1,onClick:C,"data-testid":B("minute-increment-button"),children:t(k,{})}),t(Qc,{children:t(Xc,{"aria-label":"minute",type:"number",name:tu.MINUTE,id:"minute",maxLength:2,pattern:"[0-9]{2}",ref:w,value:f,onChange:D,onBlur:I,onFocus:E,min:0,max:59,placeholder:"MM","data-testid":B("minute-input")})}),t(Gc,{"aria-label":"decrease minute",name:eu.MINUTE_DOWN,tabIndex:-1,onClick:C,"data-testid":B("minute-decrement-button"),children:t(S,{})})]})]}),e(Uc,{children:[t(Kc,{checked:y===ko.AM,name:ru.AM,type:"radio",onChange:T,"data-testid":B("am-toggle"),"aria-label":"AM",children:"AM"}),t(Kc,{checked:y===ko.PM,name:ru.PM,type:"radio",onChange:T,"data-testid":B("pm-toggle"),"aria-label":"PM",children:"PM"})]})]}),e(Vc,{children:[t(Jc,{"aria-label":"close selector",type:"button",styleType:"secondary",onClick:c,"data-testid":B("cancel-button"),children:"Cancel"}),t(Jc,{"aria-label":"confirm selection",type:"button",onClick:()=>{let e;e="24hr"===l?Do.convertTo24HourFormat({hour:g,minute:f,period:y}):`${g}:${f}${y}`,d(e)},disabled:""===g||""===f,"data-testid":B("confirm-button"),children:"Done"})]})]})})},ou=r=>{var{id:n,disabled:o=!1,error:l,value:d,format:c="24hr",readOnly:u,onChange:h,onFocus:g,onBlur:m}=r,p=se(r,["id","disabled","error","value","format","readOnly","onChange","onFocus","onBlur"]);const[f,b]=a(!1),[y,v]=a(!1),[x,w]=a(""),[$,F]=a(""),C=i(null);s((()=>{d&&(w(d.start),F(d.end))}),[d]),ae("mousedown",(function(e){o||D(e)}),"document"),ae("keyup",(function(e){if("Tab"===e.code)D(e)}),"document");const E=()=>{k()},S=()=>{f||y||g&&g()},k=()=>{b(!1),v(!1),m&&m()},D=e=>{C.current&&!C.current.contains(e.target)&&(y||f)&&k()};return t($o,Object.assign({ref:C,id:n},p,{children:e(Fo,{$disabled:o,$error:l,$readOnly:u,children:[e(go,{error:l,currentActive:f?"start":y?"end":"none",children:[t(Co,{onFocus:()=>{o||u||f||(v(!1),b(!0),S())},readOnly:!0,placeholder:"From",value:Do.formatDisplayValue(x,c),disabled:o,"data-testid":p["data-testid"]?`${p["data-testid"]}-timepicker-selector`:"timepicker-selector"}),t(Co,{onFocus:()=>{o||u||y||(b(!1),v(!0),S())},readOnly:!0,placeholder:"To",value:Do.formatDisplayValue($,c),disabled:o,"data-testid":p["data-testid"]?`${p["data-testid"]}-timepicker-selector`:"timepicker-selector"})]}),t(nu,{id:n,show:f,value:x,format:c,onCancel:E,onChange:e=>{b(!1),v(!0),w(e);h&&h({start:e,end:$})}}),t(nu,{id:n,show:y,value:$,format:c,onCancel:E,onChange:e=>{v(!1),F(e);h&&h({start:x,end:e}),""==x?b(!0):m&&m()}})]})}))};$.div`
    margin-bottom: ${qn["spacing-8"]};
`,$.label`
    color: ${Nn["text-subtle"]};
    display: inline-block;

    ${Vn["form-label"]}
    ${ec()}
    font-weight: ${Vn.Spec["weight-semibold"]};
`;const iu=$.p`
    ${Vn["body-sm-semibold"]}
    color: ${Nn["text-error"]};
    margin-top: ${qn["spacing-8"]};
    margin-bottom: 0;
    outline: none;
`;$.span`
    ${Vn["form-description"]}
    color: ${Nn["text-subtler"]};
    display: block;
`,$(xo)`
    width: 100%;
    height: calc(3rem - 2px); // exclude top and bottom borders

    ${e=>"no-border"!==e.$styleType&&F`
            padding-left: ${e.$visuallyReadOnly?0:qn["spacing-16"]};
            padding-right: ${e.$visuallyReadOnly||e.$showClear?0:qn["spacing-16"]};
        `}
`;const su=$(wo)`
    height: auto;
    padding: ${qn["spacing-12"]} ${qn["spacing-16"]};

    cursor: pointer;
    color: ${Nn.icon};

    ${e=>"no-border"===e.$styleType&&F`
            margin-right: -${qn["spacing-12"]};
        `}
`,au=$(j)`
    height: 1.25rem;
    width: 1.25rem;
    vertical-align: middle;
`;$.div`
    display: flex;
    width: 100%;
`,$(yo)`
    display: flex;
    align-items: center;
    width: 100%;
`;const lu=e=>"small"===e?2.5:3;$.div`
    position: relative;
    width: 100%;
    ${e=>{const t=lu(e.$variant);return F`
            min-height: ${t}rem;
            height: ${t}rem; // Need this to persist the height when expanding or collapsing list
        `}}
`;const du=F`
    display: flex;
    position: relative;
    align-items: center;
    justify-content: space-between;
    padding: 0 ${qn["spacing-16"]};
    // exclude top and bottom borders
    height: calc(${e=>lu(e.$variant)}rem - 2px);
    width: 100%;
    border-radius: ${Gn.sm};
    border: none;
    background: transparent;

    &:focus,
    &:active {
        outline: none;
    }

    &:focus-visible {
        outline: 2px solid ${Nn["border-focus"]};
    }
`,cu=$.button`
    ${du}
    cursor: pointer;
`;$.div`
    ${du}
`;const uu=C`
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
    border: ${Un["width-010"]} ${Un.solid} ${Nn.border};
    border-radius: ${Gn.sm};
    background: ${Nn.bg};
    overflow: hidden;

    &:focus-within {
        border-color: ${Nn["border-focus"]};
        box-shadow: 0px 0px 4px 0px
            rgb(from ${Nn["border-focus"]} r g b / 50%) inset; // TODO: confirm shadow
    }

    ${e=>e.$expanded?F`
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                z-index: 2;
            `:F`
                animation: ${uu} 0.5s ease-in-out;
            `}

    ${e=>e.$disabled?F`
                background: ${Nn["bg-disabled"]};

                ${cu} {
                    cursor: not-allowed;
                }

                &:focus-within {
                    border-color: ${Nn.border};
                    box-shadow: none;
                }
            `:e.$readOnly?F`
                border: none;
                background: transparent !important;

                ${cu} {
                    padding: 0;
                }

                &:focus-within {
                    border: none;
                    box-shadow: none;
                }
            `:e.$error?F`
                border-color: ${Nn["border-error"]};

                &:focus-within {
                    border-color: ${Nn["border-error"]};
                    box-shadow: 0px 0px 4px 0px
                        rgb(from ${Nn["border-error"]} r g b / 50%) inset; // TODO: confirm shadow
                }
            `:void 0}
`,$.div`
    transform: rotate(${e=>e.$expanded?180:0}deg);
    transition: transform ${Yn["duration-250"]} ${Yn["ease-default"]};
    margin-left: ${qn["spacing-16"]};
`,$(S)`
    color: ${Nn.icon};
`,$.div`
    height: 1px;
    background: ${Nn.border};
    margin: 0 ${qn["spacing-8"]};
`,$.div`
    display: flex;
    flex: 1;
    word-break: break-all;
    ${e=>{if(e.$disabled)return F`
                color: ${Nn["text-disabled"]};
            `}}
`;$($.div`
    ${e=>"small"===e.$variant?Vn["body-md-regular"]:Vn["body-baseline-regular"]}
    text-align: left;
    ${e=>{if("middle"!==e.$truncateType)return F`
                    ${tc(1)}
                `}}
    overflow: hidden;
`)`
    color: ${Nn["text-subtler"]};
`,$.div`
    display: flex;
    position: relative;
    align-items: center;
    justify-content: space-between;
`;const hu=$(su)`
    position: absolute;
    right: 0;
    padding-left: ${qn["spacing-8"]};
    margin-right: 0;
`;$(cu)`
    // space for clear icon
    padding-right: calc(1.25rem + ${qn["spacing-16"]});
`;const gu=$.div`
    font-weight: ${e=>e.$bold?Vn.Spec["weight-semibold"]:Vn.Spec["weight-regular"]};

    ${e=>e.$disabled?F`
                color: ${Nn["text-disabled"]};
            `:e.$selected?F`
                color: ${Nn["text-selected"]};
            `:F`
                color: ${Nn.text};
            `}
    width: 100%;

    ${e=>"end"===e.$truncateType&&tc(e.$maxLines||2)}
    overflow-wrap: break-word;
`,mu=$.div`
    color: ${Nn["text-subtlest"]};
    width: 100%;

    ${e=>"end"===e.$truncateType&&tc(e.$maxLines||2)}
    overflow-wrap: break-word;

    ${e=>"next-line"===e.$labelDisplayType?F`
                    ${Vn["body-md-semibold"]}
                `:F`
                    ${Vn["body-baseline-regular"]}
                `}
`,pu=$.span`
    font-weight: ${Vn.Spec["weight-semibold"]};
`,fu=$.div`
    text-align: left;
    width: 100%;
    overflow: hidden;
    overflow-wrap: break-word;

    ${e=>"small"===e.$variant?Vn["body-md-regular"]:Vn["body-baseline-regular"]}

    ${e=>{switch(e.$labelDisplayType){case"next-line":return F`
                    display: flex;
                    flex-direction: column;
                `;case"inline":return F`
                    ${gu} {
                        display: inline;
                    }

                    ${mu} {
                        display: inline;
                        margin-left: 0.5rem;
                    }
                `}}}
`,bu=$.div`
    display: inline-block;
    width: ${e=>1===e.$maxLines?50:100}%;
    height: 1lh;
    word-break: break-all;
    overflow: hidden;
`,yu=$.div`
    display: inline-block;
    width: ${e=>1===e.$maxLines?50:100}%;
    height: 1lh;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    direction: rtl;
    text-align: right;
`,vu=({bold:n,displayType:o="inline",label:i,searchTerm:s,maxLines:a=2,selected:l,disabled:d,sublabel:c,truncationType:u="middle",variant:h="default"})=>{const g=f(E),b="small"===h?Vn.Spec["body-size-md"]({theme:g}):Vn.Spec["body-size-baseline"]({theme:g}),y=Vn.Spec["font-family"]({theme:g}),{ref:v,width:x}=Di(),w=m((e=>{if("inline"!==o||!x)return!1;return So.getTextWidth(e,`${b} '${y}'`)>x*a-50}),[x,o,b,y,a]),$=p((()=>w(i)),[w,i]),F=p((()=>c&&w(c)),[w,c]),C=n=>{if(!s)return n;const o=s.toLowerCase().trim(),a=n.toLowerCase().indexOf(o),l=a+s.length;return-1===a?n:e(r,{children:[i.slice(0,a),t(pu,{$variant:h,children:i.slice(a,l)}),i.slice(l)]})},S=n=>e(r,{children:[t(bu,{$maxLines:a,"aria-hidden":!0,children:C(n)}),t(yu,{$maxLines:a,"aria-hidden":!0,children:C(n)})]});return e(fu,{ref:v,$labelDisplayType:$||F?"next-line":o,$variant:h,children:[t(gu,{"aria-label":i,$bold:n,$maxLines:a,$selected:l,$disabled:d,$truncateType:u,children:"middle"===u&&$?S(i):C(i)}),c&&t(mu,{"aria-label":c,$maxLines:a,$truncateType:u,$labelDisplayType:o,children:"middle"===u&&F?S(c):c})]})};var xu=Vt;var wu=function(e){var t=this.__data__,r=t.delete(e);return this.size=t.size,r};var $u=function(e){return this.__data__.get(e)};var Fu=function(e){return this.__data__.has(e)},Cu=Vt,Eu=Yt,Su=ur;var ku=function(e,t){var r=this.__data__;if(r instanceof Cu){var n=r.__data__;if(!Eu||n.length<199)return n.push([e,t]),this.size=++r.size,this;r=this.__data__=new Su(n)}return r.set(e,t),this.size=r.size,this},Du=Vt,Iu=function(){this.__data__=new xu,this.size=0},Tu=wu,Bu=$u,Au=Fu,zu=ku;function Ou(e){var t=this.__data__=new Du(e);this.size=t.size}Ou.prototype.clear=Iu,Ou.prototype.delete=Tu,Ou.prototype.get=Bu,Ou.prototype.has=Au,Ou.prototype.set=zu;var Mu=Ou;var _u=ur,Ru=function(e){return this.__data__.set(e,"__lodash_hash_undefined__"),this},Hu=function(e){return this.__data__.has(e)};function ju(e){var t=-1,r=null==e?0:e.length;for(this.__data__=new _u;++t<r;)this.add(e[t])}ju.prototype.add=ju.prototype.push=Ru,ju.prototype.has=Hu;var Lu=function(e,t){return e.has(t)},Pu=ju,Wu=function(e,t){for(var r=-1,n=null==e?0:e.length;++r<n;)if(t(e[r],r,e))return!0;return!1},Nu=Lu;var Vu=function(e,t,r,n,o,i){var s=1&r,a=e.length,l=t.length;if(a!=l&&!(s&&l>a))return!1;var d=i.get(e),c=i.get(t);if(d&&c)return d==t&&c==e;var u=-1,h=!0,g=2&r?new Pu:void 0;for(i.set(e,t),i.set(t,e);++u<a;){var m=e[u],p=t[u];if(n)var f=s?n(p,m,u,t,e,i):n(m,p,u,e,t,i);if(void 0!==f){if(f)continue;h=!1;break}if(g){if(!Wu(t,(function(e,t){if(!Nu(g,t)&&(m===e||o(m,e,r,n,i)))return g.push(t)}))){h=!1;break}}else if(m!==p&&!o(m,p,r,n,i)){h=!1;break}}return i.delete(e),i.delete(t),h};var Yu=function(e){var t=-1,r=Array(e.size);return e.forEach((function(e,n){r[++t]=[n,e]})),r};var Uu=me.Uint8Array,qu=St,Gu=Vu,Zu=Yu,Qu=function(e){var t=-1,r=Array(e.size);return e.forEach((function(e){r[++t]=e})),r},Xu=pe?pe.prototype:void 0,Ku=Xu?Xu.valueOf:void 0;var Ju=function(e,t,r,n,o,i,s){switch(r){case"[object DataView]":if(e.byteLength!=t.byteLength||e.byteOffset!=t.byteOffset)return!1;e=e.buffer,t=t.buffer;case"[object ArrayBuffer]":return!(e.byteLength!=t.byteLength||!i(new Uu(e),new Uu(t)));case"[object Boolean]":case"[object Date]":case"[object Number]":return qu(+e,+t);case"[object Error]":return e.name==t.name&&e.message==t.message;case"[object RegExp]":case"[object String]":return e==t+"";case"[object Map]":var a=Zu;case"[object Set]":var l=1&n;if(a||(a=Qu),e.size!=t.size&&!l)return!1;var d=s.get(e);if(d)return d==t;n|=2,s.set(e,t);var c=Gu(a(e),a(t),n,o,i,s);return s.delete(e),c;case"[object Symbol]":if(Ku)return Ku.call(e)==Ku.call(t)}return!1};var eh=function(e,t){for(var r=-1,n=t.length,o=e.length;++r<n;)e[o+r]=t[r];return e},th=eh,rh=ce;var nh=function(e,t,r){var n=t(e);return rh(e)?n:th(n,r(e))};var oh=function(e,t){for(var r=-1,n=null==e?0:e.length,o=0,i=[];++r<n;){var s=e[r];t(s,r,e)&&(i[o++]=s)}return i},ih=function(){return[]},sh=Object.prototype.propertyIsEnumerable,ah=Object.getOwnPropertySymbols,lh=ah?function(e){return null==e?[]:(e=Object(e),oh(ah(e),(function(t){return sh.call(e,t)})))}:ih;var dh=function(e,t){for(var r=-1,n=Array(e);++r<e;)n[r]=t(r);return n},ch=Se,uh=ke;var hh=function(e){return uh(e)&&"[object Arguments]"==ch(e)},gh=ke,mh=Object.prototype,ph=mh.hasOwnProperty,fh=mh.propertyIsEnumerable,bh=hh(function(){return arguments}())?hh:function(e){return gh(e)&&ph.call(e,"callee")&&!fh.call(e,"callee")},yh={exports:{}};var vh=function(){return!1};!function(e,t){var r=me,n=vh,o=t&&!t.nodeType&&t,i=o&&e&&!e.nodeType&&e,s=i&&i.exports===o?r.Buffer:void 0,a=(s?s.isBuffer:void 0)||n;e.exports=a}(yh,yh.exports);var xh=yh.exports,wh=/^(?:0|[1-9]\d*)$/;var $h=function(e,t){var r=typeof e;return!!(t=null==t?9007199254740991:t)&&("number"==r||"symbol"!=r&&wh.test(e))&&e>-1&&e%1==0&&e<t};var Fh=function(e){return"number"==typeof e&&e>-1&&e%1==0&&e<=9007199254740991},Ch=Se,Eh=Fh,Sh=ke,kh={};kh["[object Float32Array]"]=kh["[object Float64Array]"]=kh["[object Int8Array]"]=kh["[object Int16Array]"]=kh["[object Int32Array]"]=kh["[object Uint8Array]"]=kh["[object Uint8ClampedArray]"]=kh["[object Uint16Array]"]=kh["[object Uint32Array]"]=!0,kh["[object Arguments]"]=kh["[object Array]"]=kh["[object ArrayBuffer]"]=kh["[object Boolean]"]=kh["[object DataView]"]=kh["[object Date]"]=kh["[object Error]"]=kh["[object Function]"]=kh["[object Map]"]=kh["[object Number]"]=kh["[object Object]"]=kh["[object RegExp]"]=kh["[object Set]"]=kh["[object String]"]=kh["[object WeakMap]"]=!1;var Dh=function(e){return Sh(e)&&Eh(e.length)&&!!kh[Ch(e)]};var Ih=function(e){return function(t){return e(t)}},Th={exports:{}};!function(e,t){var r=ue,n=t&&!t.nodeType&&t,o=n&&e&&!e.nodeType&&e,i=o&&o.exports===n&&r.process,s=function(){try{var e=o&&o.require&&o.require("util").types;return e||i&&i.binding&&i.binding("util")}catch(e){}}();e.exports=s}(Th,Th.exports);var Bh=Th.exports,Ah=Dh,zh=Ih,Oh=Bh&&Bh.isTypedArray,Mh=Oh?zh(Oh):Ah,_h=dh,Rh=bh,Hh=ce,jh=xh,Lh=$h,Ph=Mh,Wh=Object.prototype.hasOwnProperty;var Nh=function(e,t){var r=Hh(e),n=!r&&Rh(e),o=!r&&!n&&jh(e),i=!r&&!n&&!o&&Ph(e),s=r||n||o||i,a=s?_h(e.length,String):[],l=a.length;for(var d in e)!t&&!Wh.call(e,d)||s&&("length"==d||o&&("offset"==d||"parent"==d)||i&&("buffer"==d||"byteLength"==d||"byteOffset"==d)||Lh(d,l))||a.push(d);return a},Vh=Object.prototype;var Yh=function(e){var t=e&&e.constructor;return e===("function"==typeof t&&t.prototype||Vh)};var Uh=function(e,t){return function(r){return e(t(r))}}(Object.keys,Object),qh=Yh,Gh=Uh,Zh=Object.prototype.hasOwnProperty;var Qh=function(e){if(!qh(e))return Gh(e);var t=[];for(var r in Object(e))Zh.call(e,r)&&"constructor"!=r&&t.push(r);return t},Xh=Le,Kh=Fh;var Jh=function(e){return null!=e&&Kh(e.length)&&!Xh(e)},eg=Nh,tg=Qh,rg=Jh;var ng=function(e){return rg(e)?eg(e):tg(e)},og=nh,ig=lh,sg=ng;var ag=function(e){return og(e,sg,ig)},lg=Object.prototype.hasOwnProperty;var dg=function(e,t,r,n,o,i){var s=1&r,a=ag(e),l=a.length;if(l!=ag(t).length&&!s)return!1;for(var d=l;d--;){var c=a[d];if(!(s?c in t:lg.call(t,c)))return!1}var u=i.get(e),h=i.get(t);if(u&&h)return u==t&&h==e;var g=!0;i.set(e,t),i.set(t,e);for(var m=s;++d<l;){var p=e[c=a[d]],f=t[c];if(n)var b=s?n(f,p,c,t,e,i):n(p,f,c,e,t,i);if(!(void 0===b?p===f||o(p,f,r,n,i):b)){g=!1;break}m||(m="constructor"==c)}if(g&&!m){var y=e.constructor,v=t.constructor;y==v||!("constructor"in e)||!("constructor"in t)||"function"==typeof y&&y instanceof y&&"function"==typeof v&&v instanceof v||(g=!1)}return i.delete(e),i.delete(t),g},cg=it(me,"DataView"),ug=Yt,hg=it(me,"Promise"),gg=it(me,"Set"),mg=it(me,"WeakMap"),pg=Se,fg=Ye,bg="[object Map]",yg="[object Promise]",vg="[object Set]",xg="[object WeakMap]",wg="[object DataView]",$g=fg(cg),Fg=fg(ug),Cg=fg(hg),Eg=fg(gg),Sg=fg(mg),kg=pg;(cg&&kg(new cg(new ArrayBuffer(1)))!=wg||ug&&kg(new ug)!=bg||hg&&kg(hg.resolve())!=yg||gg&&kg(new gg)!=vg||mg&&kg(new mg)!=xg)&&(kg=function(e){var t=pg(e),r="[object Object]"==t?e.constructor:void 0,n=r?fg(r):"";if(n)switch(n){case $g:return wg;case Fg:return bg;case Cg:return yg;case Eg:return vg;case Sg:return xg}return t});var Dg=Mu,Ig=Vu,Tg=Ju,Bg=dg,Ag=kg,zg=ce,Og=xh,Mg=Mh,_g="[object Arguments]",Rg="[object Array]",Hg="[object Object]",jg=Object.prototype.hasOwnProperty;var Lg=function(e,t,r,n,o,i){var s=zg(e),a=zg(t),l=s?Rg:Ag(e),d=a?Rg:Ag(t),c=(l=l==_g?Hg:l)==Hg,u=(d=d==_g?Hg:d)==Hg,h=l==d;if(h&&Og(e)){if(!Og(t))return!1;s=!0,c=!1}if(h&&!c)return i||(i=new Dg),s||Mg(e)?Ig(e,t,r,n,o,i):Tg(e,t,l,r,n,o,i);if(!(1&r)){var g=c&&jg.call(e,"__wrapped__"),m=u&&jg.call(t,"__wrapped__");if(g||m){var p=g?e.value():e,f=m?t.value():t;return i||(i=new Dg),o(p,f,r,n,i)}}return!!h&&(i||(i=new Dg),Bg(e,t,r,n,o,i))},Pg=ke;var Wg=function e(t,r,n,o,i){return t===r||(null==t||null==r||!Pg(t)&&!Pg(r)?t!=t&&r!=r:Lg(t,r,n,o,e,i))},Ng=Mu,Vg=Wg;var Yg=function(e,t,r,n){var o=r.length,i=o,s=!n;if(null==e)return!i;for(e=Object(e);o--;){var a=r[o];if(s&&a[2]?a[1]!==e[a[0]]:!(a[0]in e))return!1}for(;++o<i;){var l=(a=r[o])[0],d=e[l],c=a[1];if(s&&a[2]){if(void 0===d&&!(l in e))return!1}else{var u=new Ng;if(n)var h=n(d,c,l,e,t,u);if(!(void 0===h?Vg(c,d,3,n,u):h))return!1}}return!0},Ug=_e;var qg=function(e){return e==e&&!Ug(e)},Gg=qg,Zg=ng;var Qg=function(e){for(var t=Zg(e),r=t.length;r--;){var n=t[r],o=e[n];t[r]=[n,o,Gg(o)]}return t};var Xg=function(e,t){return function(r){return null!=r&&(r[e]===t&&(void 0!==t||e in Object(r)))}},Kg=Yg,Jg=Qg,em=Xg;var tm=function(e,t){return null!=e&&t in Object(e)},rm=Tr,nm=bh,om=ce,im=$h,sm=Fh,am=Ar;var lm=function(e,t,r){for(var n=-1,o=(t=rm(t,e)).length,i=!1;++n<o;){var s=am(t[n]);if(!(i=null!=e&&r(e,s)))break;e=e[s]}return i||++n!=o?i:!!(o=null==e?0:e.length)&&sm(o)&&im(s,o)&&(om(e)||nm(e))},dm=tm,cm=lm;var um=Wg,hm=Rr,gm=function(e,t){return null!=e&&cm(e,t,dm)},mm=Me,pm=qg,fm=Xg,bm=Ar;var ym=function(e){return function(t){return null==t?void 0:t[e]}},vm=Mr;var xm=ym,wm=function(e){return function(t){return vm(t,e)}},$m=Me,Fm=Ar;var Cm=function(e){var t=Jg(e);return 1==t.length&&t[0][2]?em(t[0][0],t[0][1]):function(r){return r===e||Kg(r,e,t)}},Em=function(e,t){return mm(e)&&pm(t)?fm(bm(e),t):function(r){var n=hm(r,e);return void 0===n&&n===t?gm(r,e):um(t,n,3)}},Sm=function(e){return e},km=ce,Dm=function(e){return $m(e)?xm(Fm(e)):wm(e)};var Im=function(e){return"function"==typeof e?e:null==e?Sm:"object"==typeof e?km(e)?Em(e[0],e[1]):Cm(e):Dm(e)},Tm=Im,Bm=Jh,Am=ng;var zm=function(e){return function(t,r,n){var o=Object(t);if(!Bm(t)){var i=Tm(r);t=Am(t),r=function(e){return i(o[e],e,o)}}var s=e(t,r,n);return s>-1?o[i?t[s]:s]:void 0}};var Om=/\s/;var Mm=function(e){for(var t=e.length;t--&&Om.test(e.charAt(t)););return t},_m=/^\s+/;var Rm=function(e){return e?e.slice(0,Mm(e)+1).replace(_m,""):e},Hm=_e,jm=Te,Lm=/^[-+]0x[0-9a-f]+$/i,Pm=/^0b[01]+$/i,Wm=/^0o[0-7]+$/i,Nm=parseInt;var Vm=function(e){if("number"==typeof e)return e;if(jm(e))return NaN;if(Hm(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=Hm(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=Rm(e);var r=Pm.test(e);return r||Wm.test(e)?Nm(e.slice(2),r?2:8):Lm.test(e)?NaN:+e},Ym=1/0;var Um=function(e){return e?(e=Vm(e))===Ym||e===-1/0?17976931348623157e292*(e<0?-1:1):e==e?e:0:0===e?e:0};var qm=function(e,t,r,n){for(var o=e.length,i=r+(n?1:-1);n?i--:++i<o;)if(t(e[i],i,e))return i;return-1},Gm=Im,Zm=function(e){var t=Um(e),r=t%1;return t==t?r?t-r:t:0},Qm=Math.max;var Xm=de(zm((function(e,t,r){var n=null==e?0:e.length;if(!n)return-1;var o=null==r?0:Zm(r);return o<0&&(o=Qm(n+o,0)),qm(e,Gm(t),o)}))),Km=Wg;var Jm=de((function(e,t){return Km(e,t)}));function ep(e){return()=>e}function tp(e){e()}function rp(e,t){return r=>e(t(r))}function np(e,t){return()=>e(t)}function op(e,t){return r=>e(t,r)}function ip(e){return void 0!==e}function sp(){}function ap(e,t){return t(e),e}function lp(e,t){return t(e)}function dp(...e){return e}function cp(e,t){return e(1,t)}function up(e,t){e(0,t)}function hp(e){e(2)}function gp(e){return e(4)}function mp(e,t){return cp(e,op(t,0))}function pp(e,t){const r=e(1,(e=>{r(),t(e)}));return r}function fp(e){let t,r;return n=>o=>{t=o,r&&clearTimeout(r),r=setTimeout((()=>{n(t)}),e)}}function bp(e,t){return e===t}function yp(e=bp){let t;return r=>n=>{e(t,n)||(t=n,r(n))}}function vp(e){return t=>r=>{e(r)&&t(r)}}function xp(e){return t=>rp(t,e)}function wp(e){return t=>()=>{t(e)}}function $p(e,...t){const r=function(...e){return t=>e.reduceRight(lp,t)}(...t);return(t,n)=>{switch(t){case 2:return void hp(e);case 1:return cp(e,r(n))}}}function Fp(e,t){return r=>n=>{r(t=e(t,n))}}function Cp(e){return t=>r=>{e>0?e--:t(r)}}function Ep(e){let t,r=null;return n=>o=>{r=o,!t&&(t=setTimeout((()=>{t=void 0,n(r)}),e))}}function Sp(...e){const t=new Array(e.length);let r=0,n=null;const o=Math.pow(2,e.length)-1;return e.forEach(((e,i)=>{const s=Math.pow(2,i);cp(e,(e=>{const a=r;r|=s,t[i]=e,a!==o&&r===o&&n&&(n(),n=null)}))})),e=>i=>{const s=()=>{e([i].concat(t))};r===o?s():n=s}}function kp(e){let t=e;const r=Ip();return(e,n)=>{switch(e){case 0:t=n;break;case 1:n(t);break;case 4:return t}return r(e,n)}}function Dp(e,t){return ap(kp(t),(t=>mp(e,t)))}function Ip(){const e=[];return(t,r)=>{switch(t){case 0:return void e.slice().forEach((e=>{e(r)}));case 2:return void e.splice(0,e.length);case 1:return e.push(r),()=>{const t=e.indexOf(r);t>-1&&e.splice(t,1)}}}}function Tp(e){return ap(Ip(),(t=>mp(e,t)))}function Bp(e,t=[],{singleton:r}={singleton:!0}){return{constructor:e,dependencies:t,id:Ap(),singleton:r}}const Ap=()=>Symbol();function zp(...e){const t=Ip(),r=new Array(e.length);let n=0;const o=Math.pow(2,e.length)-1;return e.forEach(((e,i)=>{const s=Math.pow(2,i);cp(e,(e=>{r[i]=e,n|=s,n===o&&up(t,r)}))})),function(e,i){switch(e){case 2:return void hp(t);case 1:return n===o&&i(r),cp(t,i)}}}function Op(e,t=bp){return $p(e,yp(t))}function Mp(...e){return function(t,r){switch(t){case 2:return;case 1:return function(...e){return()=>{e.map(tp)}}(...e.map((e=>cp(e,r))))}}}var _p=(e=>(e[e.DEBUG=0]="DEBUG",e[e.INFO=1]="INFO",e[e.WARN=2]="WARN",e[e.ERROR=3]="ERROR",e))(_p||{});const Rp={0:"debug",3:"error",1:"log",2:"warn"},Hp=Bp((()=>{const e=kp(3);return{log:kp(((t,r,n=1)=>{var o;n>=(null!=(o=(typeof globalThis>"u"?window:globalThis).VIRTUOSO_LOG_LEVEL)?o:gp(e))&&console[Rp[n]]("%creact-virtuoso: %c%s %o","color: #0253b3; font-weight: bold","color: initial",t,r)})),logLevel:e}}),[],{singleton:!0});function jp(e,t,r){return Lp(e,t,r).callbackRef}function Lp(e,t,r){const n=o.useRef(null);let i=e=>{};if(typeof ResizeObserver<"u"){const s=o.useMemo((()=>new ResizeObserver((t=>{const n=()=>{const r=t[0].target;null!==r.offsetParent&&e(r)};r?n():requestAnimationFrame(n)}))),[e]);i=e=>{e&&t?(s.observe(e),n.current=e):(n.current&&s.unobserve(n.current),n.current=null)}}return{callbackRef:i,ref:n}}function Pp(e,t,r,n,i,s,a,l,d){const c=o.useCallback((r=>{const o=function(e,t,r,n){const o=e.length;if(0===o)return null;const i=[];for(let s=0;s<o;s++){const o=e.item(s);if(void 0===o.dataset.index)continue;const a=parseInt(o.dataset.index),l=parseFloat(o.dataset.knownSize),d=t(o,r);if(0===d&&n("Zero-sized element, this should not happen",{child:o},_p.ERROR),d===l)continue;const c=i[i.length-1];0===i.length||c.size!==d||c.endIndex!==a-1?i.push({endIndex:a,size:d,startIndex:a}):i[i.length-1].endIndex++}return i}(r.children,t,l?"offsetWidth":"offsetHeight",i);let d=r.parentElement;for(;!d.dataset.virtuosoScroller;)d=d.parentElement;const c="window"===d.lastElementChild.dataset.viewportType,u=a?l?a.scrollLeft:a.scrollTop:c?l?window.pageXOffset||document.documentElement.scrollLeft:window.pageYOffset||document.documentElement.scrollTop:l?d.scrollLeft:d.scrollTop,h=a?l?a.scrollWidth:a.scrollHeight:c?l?document.documentElement.scrollWidth:document.documentElement.scrollHeight:l?d.scrollWidth:d.scrollHeight,g=a?l?a.offsetWidth:a.offsetHeight:c?l?window.innerWidth:window.innerHeight:l?d.offsetWidth:d.offsetHeight;n({scrollHeight:h,scrollTop:Math.max(u,0),viewportHeight:g}),null==s||s(l?Wp("column-gap",getComputedStyle(r).columnGap,i):Wp("row-gap",getComputedStyle(r).rowGap,i)),null!==o&&e(o)}),[e,t,i,s,a,n]);return Lp(c,r,d)}function Wp(e,t,r){return"normal"!==t&&!(null!=t&&t.endsWith("px"))&&r(`${e} was not resolved to pixel value correctly`,t,_p.WARN),"normal"===t?0:parseInt(null!=t?t:"0",10)}function Np(e,t,r){const n=o.useRef(null),i=o.useCallback((r=>{if(null==r||!r.offsetParent)return;const o=r.getBoundingClientRect(),i=o.width;let s,a;if(t){const e=t.getBoundingClientRect(),r=o.top-e.top;a=e.height-Math.max(0,r),s=r+t.scrollTop}else a=window.innerHeight-Math.max(0,o.top),s=o.top+window.pageYOffset;n.current={offsetTop:s,visibleHeight:a,visibleWidth:i},e(n.current)}),[e,t]),{callbackRef:s,ref:a}=Lp(i,!0,r),l=o.useCallback((()=>{i(a.current)}),[i,a]);return o.useEffect((()=>{if(t){t.addEventListener("scroll",l);const e=new ResizeObserver((()=>{requestAnimationFrame(l)}));return e.observe(t),()=>{t.removeEventListener("scroll",l),e.unobserve(t)}}return window.addEventListener("scroll",l),window.addEventListener("resize",l),()=>{window.removeEventListener("scroll",l),window.removeEventListener("resize",l)}}),[l,t]),s}const Vp=Bp((()=>{const e=Ip(),t=Ip(),r=kp(0),n=Ip(),o=kp(0),i=Ip(),s=Ip(),a=kp(0),l=kp(0),d=kp(0),c=kp(0),u=Ip(),h=Ip(),g=kp(!1),m=kp(!1),p=kp(!1);return mp($p(e,xp((({scrollTop:e})=>e))),t),mp($p(e,xp((({scrollHeight:e})=>e))),s),mp(t,o),{deviation:r,fixedFooterHeight:d,fixedHeaderHeight:l,footerHeight:c,headerHeight:a,horizontalDirection:m,scrollBy:h,scrollContainerState:e,scrollHeight:s,scrollingInProgress:g,scrollTo:u,scrollTop:t,skipAnimationFrameInResizeObserver:p,smoothScrollTargetReached:n,statefulScrollTop:o,viewportHeight:i}}),[],{singleton:!0}),Yp={lvl:0};function Up(e,t){const r=e.length;if(0===r)return[];let{index:n,value:o}=t(e[0]);const i=[];for(let s=1;s<r;s++){const{index:r,value:a}=t(e[s]);i.push({end:r-1,start:n,value:o}),n=r,o=a}return i.push({end:1/0,start:n,value:o}),i}function qp(e){return e===Yp}function Gp(e,t){if(!qp(e))return t===e.k?e.v:t<e.k?Gp(e.l,t):Gp(e.r,t)}function Zp(e,t,r="k"){if(qp(e))return[-1/0,void 0];if(Number(e[r])===t)return[e.k,e.v];if(Number(e[r])<t){const n=Zp(e.r,t,r);return n[0]===-1/0?[e.k,e.v]:n}return Zp(e.l,t,r)}function Qp(e,t,r){return qp(e)?lf(t,r,1):t===e.k?nf(e,{k:t,v:r}):t<e.k?df(nf(e,{l:Qp(e.l,t,r)})):df(nf(e,{r:Qp(e.r,t,r)}))}function Xp(){return Yp}function Kp(e,t,r){if(qp(e))return[];return function(e){return Up(e,(({k:e,v:t})=>({index:e,value:t})))}(tf(e,Zp(e,t)[0],r))}function Jp(e,t){if(qp(e))return Yp;const{k:r,l:n,r:o}=e;if(t===r){if(qp(n))return o;if(qp(o))return n;{const[t,r]=af(n);return rf(nf(e,{k:t,l:of(n),v:r}))}}return rf(nf(e,t<r?{l:Jp(n,t)}:{r:Jp(o,t)}))}function ef(e){return qp(e)?[]:[...ef(e.l),{k:e.k,v:e.v},...ef(e.r)]}function tf(e,t,r){if(qp(e))return[];const{k:n,l:o,r:i,v:s}=e;let a=[];return n>t&&(a=a.concat(tf(o,t,r))),n>=t&&n<=r&&a.push({k:n,v:s}),n<=r&&(a=a.concat(tf(i,t,r))),a}function rf(e){const{l:t,lvl:r,r:n}=e;if(n.lvl>=r-1&&t.lvl>=r-1)return e;if(r>n.lvl+1){if(sf(t))return cf(nf(e,{lvl:r-1}));if(!qp(t)&&!qp(t.r))return nf(t.r,{l:nf(t,{r:t.r.l}),lvl:r,r:nf(e,{l:t.r.r,lvl:r-1})});throw new Error("Unexpected empty nodes")}if(sf(e))return uf(nf(e,{lvl:r-1}));if(qp(n)||qp(n.l))throw new Error("Unexpected empty nodes");{const t=n.l,o=sf(t)?n.lvl-1:n.lvl;return nf(t,{l:nf(e,{lvl:r-1,r:t.l}),lvl:t.lvl+1,r:uf(nf(n,{l:t.r,lvl:o}))})}}function nf(e,t){return lf(void 0!==t.k?t.k:e.k,void 0!==t.v?t.v:e.v,void 0!==t.lvl?t.lvl:e.lvl,void 0!==t.l?t.l:e.l,void 0!==t.r?t.r:e.r)}function of(e){return qp(e.r)?e.l:rf(nf(e,{r:of(e.r)}))}function sf(e){return qp(e)||e.lvl>e.r.lvl}function af(e){return qp(e.r)?[e.k,e.v]:af(e.r)}function lf(e,t,r,n=Yp,o=Yp){return{k:e,l:n,lvl:r,r:o,v:t}}function df(e){return uf(cf(e))}function cf(e){const{l:t}=e;return qp(t)||t.lvl!==e.lvl?e:nf(t,{r:nf(e,{l:t.r})})}function uf(e){const{lvl:t,r:r}=e;return qp(r)||qp(r.r)||r.lvl!==t||r.r.lvl!==t?e:nf(r,{l:nf(e,{r:r.l}),lvl:t+1})}function hf(e,t){return!(!e||e.startIndex!==t.startIndex||e.endIndex!==t.endIndex)}function gf(e,t){return!(!e||e[0]!==t[0]||e[1]!==t[1])}const mf=Bp((()=>({recalcInProgress:kp(!1)})),[],{singleton:!0});function pf(e,t,r){return e[ff(e,t,r)]}function ff(e,t,r,n=0){let o=e.length-1;for(;n<=o;){const i=Math.floor((n+o)/2),s=r(e[i],t);if(0===s)return i;if(-1===s){if(o-n<2)return i-1;o=i-1}else{if(o===n)return i;n=i+1}}throw new Error(`Failed binary finding record in array - ${e.join(",")}, searched for ${t}`)}function bf(e,t){return Math.round(e.getBoundingClientRect()[t])}function yf(e){return!qp(e.groupOffsetTree)}function vf({index:e},t){return t===e?0:t<e?-1:1}function xf({offset:e},t){return t===e?0:t<e?-1:1}function wf(e,t,r){if(0===t.length)return 0;const{index:n,offset:o,size:i}=pf(t,e,vf),s=e-n,a=i*s+(s-1)*r+o;return a>0?a+r:a}function $f(e,t){if(!yf(t))return e;let r=0;for(;t.groupIndices[r]<=e+r;)r++;return e+r}function Ff(e,t,r){if(function(e){return typeof e.groupIndex<"u"}(e))return t.groupIndices[e.groupIndex]+1;{let n=$f("LAST"===e.index?r:e.index,t);return n=Math.max(0,n,Math.min(r,n)),n}}function Cf(e,t,r,n=0){return n>0&&(t=Math.max(t,pf(e,n,vf).offset)),Up(function(e,t,r,n){const o=ff(e,t,n),i=ff(e,r,n,o);return e.slice(o,i+1)}(e,t,r,xf),Df)}function Ef(e,[t,r,n,o]){t.length>0&&n("received item sizes",t,_p.DEBUG);const i=e.sizeTree;let s=i,a=0;if(r.length>0&&qp(i)&&2===t.length){const e=t[0].size,n=t[1].size;s=r.reduce(((t,r)=>Qp(Qp(t,r,e),r+1,n)),s)}else[s,a]=function(e,t){let r=qp(e)?0:1/0;for(const n of t){const{endIndex:t,size:o,startIndex:i}=n;if(r=Math.min(r,i),qp(e)){e=Qp(e,0,o);continue}const s=Kp(e,i-1,t+1);if(s.some(If(n)))continue;let a=!1,l=!1;for(const{end:r,start:n,value:i}of s)a?(t>=n||o===i)&&(e=Jp(e,n)):(l=i!==o,a=!0),r>t&&t>=n&&i!==o&&(e=Qp(e,t+1,i));l&&(e=Qp(e,i,o))}return[e,r]}(s,t);if(s===i)return e;const{lastIndex:l,lastOffset:d,lastSize:c,offsetTree:u}=kf(e.offsetTree,a,s,o);return{groupIndices:r,groupOffsetTree:r.reduce(((e,t)=>Qp(e,t,wf(t,u,o))),Xp()),lastIndex:l,lastOffset:d,lastSize:c,offsetTree:u,sizeTree:s}}function Sf(e,t){let r=0,n=0;for(;r<e;)r+=t[n+1]-t[n]-1,n++;return n-(r===e?0:1)}function kf(e,t,r,n){let o=e,i=0,s=0,a=0,l=0;if(0!==t){l=ff(o,t-1,vf),a=o[l].offset;const e=Zp(r,t-1);i=e[0],s=e[1],o.length&&o[l].size===Zp(r,t)[1]&&(l-=1),o=o.slice(0,l+1)}else o=[];for(const{start:e,value:l}of Kp(r,t,1/0)){const t=e-i,r=t*s+a+t*n;o.push({index:e,offset:r,size:l}),i=e,a=r,s=l}return{lastIndex:i,lastOffset:a,lastSize:s,offsetTree:o}}function Df(e){return{index:e.index,value:e}}function If(e){const{endIndex:t,size:r,startIndex:n}=e;return e=>e.start===n&&(e.end===t||e.end===1/0)&&e.value===r}const Tf={offsetHeight:"height",offsetWidth:"width"},Bf=Bp((([{log:e},{recalcInProgress:t}])=>{const r=Ip(),n=Ip(),o=Dp(n,0),i=Ip(),s=Ip(),a=kp(0),l=kp([]),d=kp(void 0),c=kp(void 0),u=kp(((e,t)=>bf(e,Tf[t]))),h=kp(void 0),g=kp(0),m={groupIndices:[],groupOffsetTree:Xp(),lastIndex:0,lastOffset:0,lastSize:0,offsetTree:[],sizeTree:Xp()},p=Dp($p(r,Sp(l,e,g),Fp(Ef,m),yp()),m),f=Dp($p(l,yp(),Fp(((e,t)=>({current:t,prev:e.current})),{current:[],prev:[]}),xp((({prev:e})=>e))),[]);mp($p(l,vp((e=>e.length>0)),Sp(p,g),xp((([e,t,r])=>{const n=e.reduce(((e,n,o)=>Qp(e,n,wf(n,t.offsetTree,r)||o)),Xp());return{...t,groupIndices:e,groupOffsetTree:n}}))),p),mp($p(n,Sp(p),vp((([e,{lastIndex:t}])=>e<t)),xp((([e,{lastIndex:t,lastSize:r}])=>[{endIndex:t,size:r,startIndex:e}]))),r),mp(d,c);const b=Dp($p(d,xp((e=>void 0===e))),!0);mp($p(c,vp((e=>void 0!==e&&qp(gp(p).sizeTree))),xp((e=>[{endIndex:0,size:e,startIndex:0}]))),r);const y=Tp($p(r,Sp(p),Fp((({sizes:e},[t,r])=>({changed:r!==e,sizes:r})),{changed:!1,sizes:m}),xp((e=>e.changed))));cp($p(a,Fp(((e,t)=>({diff:e.prev-t,prev:t})),{diff:0,prev:0}),xp((e=>e.diff))),(e=>{const{groupIndices:r}=gp(p);if(e>0)up(t,!0),up(i,e+Sf(e,r));else if(e<0){const t=gp(f);t.length>0&&(e-=Sf(-e,t)),up(s,e)}})),cp($p(a,Sp(e)),(([e,t])=>{e<0&&t("`firstItemIndex` prop should not be set to less than zero. If you don't know the total count, just use a very high value",{firstItemIndex:a},_p.ERROR)}));const v=Tp(i);mp($p(i,Sp(p),xp((([e,t])=>{const r=t.groupIndices.length>0,n=[],o=t.lastSize;if(r){const r=Gp(t.sizeTree,0);let i=0,s=0;for(;i<e;){const e=t.groupIndices[s],a=t.groupIndices.length===s+1?1/0:t.groupIndices[s+1]-e-1;n.push({endIndex:e,size:r,startIndex:e}),n.push({endIndex:e+1+a-1,size:o,startIndex:e+1}),s++,i+=a+1}const a=ef(t.sizeTree);return i!==e&&a.shift(),a.reduce(((t,{k:r,v:n})=>{let o=t.ranges;return 0!==t.prevSize&&(o=[...t.ranges,{endIndex:r+e-1,size:t.prevSize,startIndex:t.prevIndex}]),{prevIndex:r+e,prevSize:n,ranges:o}}),{prevIndex:e,prevSize:0,ranges:n}).ranges}return ef(t.sizeTree).reduce(((t,{k:r,v:n})=>({prevIndex:r+e,prevSize:n,ranges:[...t.ranges,{endIndex:r+e-1,size:t.prevSize,startIndex:t.prevIndex}]})),{prevIndex:0,prevSize:o,ranges:[]}).ranges}))),r);const x=Tp($p(s,Sp(p,g),xp((([e,{offsetTree:t},r])=>wf(-e,t,r)))));return mp($p(s,Sp(p,g),xp((([e,t,r])=>{if(t.groupIndices.length>0){if(qp(t.sizeTree))return t;let n=Xp();const o=gp(f);let i=0,s=0,a=0;for(;i<-e;){a=o[s];const e=o[s+1]-a-1;s++,i+=e+1}if(n=ef(t.sizeTree).reduce(((t,{k:r,v:n})=>Qp(t,Math.max(0,r+e),n)),n),i!==-e){n=Qp(n,0,Gp(t.sizeTree,a));n=Qp(n,1,Zp(t.sizeTree,1-e)[1])}return{...t,sizeTree:n,...kf(t.offsetTree,0,n,r)}}{const n=ef(t.sizeTree).reduce(((t,{k:r,v:n})=>Qp(t,Math.max(0,r+e),n)),Xp());return{...t,sizeTree:n,...kf(t.offsetTree,0,n,r)}}}))),p),{beforeUnshiftWith:v,data:h,defaultItemSize:c,firstItemIndex:a,fixedItemSize:d,gap:g,groupIndices:l,itemSize:u,listRefresh:y,shiftWith:s,shiftWithOffset:x,sizeRanges:r,sizes:p,statefulTotalCount:o,totalCount:n,trackItemSizes:b,unshiftWith:i}}),dp(Hp,mf),{singleton:!0});function Af(e){return e.reduce(((e,t)=>(e.groupIndices.push(e.totalCount),e.totalCount+=t+1,e)),{groupIndices:[],totalCount:0})}const zf=Bp((([{groupIndices:e,sizes:t,totalCount:r},{headerHeight:n,scrollTop:o}])=>{const i=Ip(),s=Ip(),a=Tp($p(i,xp(Af)));return mp($p(a,xp((e=>e.totalCount))),r),mp($p(a,xp((e=>e.groupIndices))),e),mp($p(zp(o,t,n),vp((([e,t])=>yf(t))),xp((([e,t,r])=>Zp(t.groupOffsetTree,Math.max(e-r,0),"v")[0])),yp(),xp((e=>[e]))),s),{groupCounts:i,topItemsIndexes:s}}),dp(Bf,Vp)),Of=Bp((([{log:e}])=>{const t=kp(!1),r=Tp($p(t,vp((e=>e)),yp()));return cp(t,(t=>{t&&gp(e)("props updated",{},_p.DEBUG)})),{didMount:r,propsReady:t}}),dp(Hp),{singleton:!0}),Mf=typeof document<"u"&&"scrollBehavior"in document.documentElement.style;function _f(e){const t="number"==typeof e?{index:e}:e;return t.align||(t.align="start"),(!t.behavior||!Mf)&&(t.behavior="auto"),t.offset||(t.offset=0),t}const Rf=Bp((([{gap:e,listRefresh:t,sizes:r,totalCount:n},{fixedFooterHeight:o,fixedHeaderHeight:i,footerHeight:s,headerHeight:a,scrollingInProgress:l,scrollTo:d,smoothScrollTargetReached:c,viewportHeight:u},{log:h}])=>{const g=Ip(),m=Ip(),p=kp(0);let f=null,b=null,y=null;function v(){f&&(f(),f=null),y&&(y(),y=null),b&&(clearTimeout(b),b=null),up(l,!1)}return mp($p(g,Sp(r,u,n,p,a,s,h),Sp(e,i,o),xp((([[e,r,n,o,i,s,a,d],u,h,p])=>{const x=_f(e),{align:w,behavior:$,offset:F}=x,C=o-1,E=Ff(x,r,C);let S=wf(E,r.offsetTree,u)+s;"end"===w?(S+=h+Zp(r.sizeTree,E)[1]-n+p,E===C&&(S+=a)):"center"===w?S+=(h+Zp(r.sizeTree,E)[1]-n+p)/2:S-=i,F&&(S+=F);const k=t=>{v(),t?(d("retrying to scroll to",{location:e},_p.DEBUG),up(g,e)):(up(m,!0),d("list did not change, scroll successful",{},_p.DEBUG))};if(v(),"smooth"===$){let e=!1;y=cp(t,(t=>{e=e||t})),f=pp(c,(()=>{k(e)}))}else f=pp($p(t,function(e){return t=>{const r=setTimeout((()=>{t(!1)}),e);return e=>{e&&(t(!0),clearTimeout(r))}}}(150)),k);return b=setTimeout((()=>{v()}),1200),up(l,!0),d("scrolling from index to",{behavior:$,index:E,top:S},_p.DEBUG),{behavior:$,top:S}}))),d),{scrollTargetReached:m,scrollToIndex:g,topListHeight:p}}),dp(Bf,Vp,Hp),{singleton:!0});function Hf(e,t){0==e?t():requestAnimationFrame((()=>{Hf(e-1,t)}))}function jf(e,t){const r=t-1;return"number"==typeof e?e:"LAST"===e.index?r:e.index}const Lf=Bp((([{defaultItemSize:e,listRefresh:t,sizes:r},{scrollTop:n},{scrollTargetReached:o,scrollToIndex:i},{didMount:s}])=>{const a=kp(!0),l=kp(0),d=kp(!0);return mp($p(s,Sp(l),vp((([e,t])=>!!t)),wp(!1)),a),mp($p(s,Sp(l),vp((([e,t])=>!!t)),wp(!1)),d),cp($p(zp(t,s),Sp(a,r,e,d),vp((([[,e],t,{sizeTree:r},n,o])=>e&&(!qp(r)||ip(n))&&!t&&!o)),Sp(l)),(([,e])=>{pp(o,(()=>{up(d,!0)})),Hf(4,(()=>{pp(n,(()=>{up(a,!0)})),up(i,e)}))})),{initialItemFinalLocationReached:d,initialTopMostItemIndex:l,scrolledToInitialItem:a}}),dp(Bf,Vp,Rf,Of),{singleton:!0});function Pf(e,t){return Math.abs(e-t)<1.01}const Wf="up",Nf="down",Vf={atBottom:!1,notAtBottomBecause:"NOT_SHOWING_LAST_ITEM",state:{offsetBottom:0,scrollHeight:0,scrollTop:0,viewportHeight:0}},Yf=Bp((([{footerHeight:e,headerHeight:t,scrollBy:r,scrollContainerState:n,scrollTop:o,viewportHeight:i}])=>{const s=kp(!1),a=kp(!0),l=Ip(),d=Ip(),c=kp(4),u=kp(0),h=Dp($p(Mp($p(Op(o),Cp(1),wp(!0)),$p(Op(o),Cp(1),wp(!1),fp(100))),yp()),!1),g=Dp($p(Mp($p(r,wp(!0)),$p(r,wp(!1),fp(200))),yp()),!1);mp($p(zp(Op(o),Op(u)),xp((([e,t])=>e<=t)),yp()),a),mp($p(a,Ep(50)),d);const m=Tp($p(zp(n,Op(i),Op(t),Op(e),Op(c)),Fp(((e,[{scrollHeight:t,scrollTop:r},n,o,i,s])=>{const a={scrollHeight:t,scrollTop:r,viewportHeight:n};if(r+n-t>-s){let t,n;return r>e.state.scrollTop?(t="SCROLLED_DOWN",n=e.state.scrollTop-r):(t="SIZE_DECREASED",n=e.state.scrollTop-r||e.scrollTopDelta),{atBottom:!0,atBottomBecause:t,scrollTopDelta:n,state:a}}let l;return l=a.scrollHeight>e.state.scrollHeight?"SIZE_INCREASED":n<e.state.viewportHeight?"VIEWPORT_HEIGHT_DECREASING":r<e.state.scrollTop?"SCROLLING_UPWARDS":"NOT_FULLY_SCROLLED_TO_LAST_ITEM_BOTTOM",{atBottom:!1,notAtBottomBecause:l,state:a}}),Vf),yp(((e,t)=>e&&e.atBottom===t.atBottom)))),p=Dp($p(n,Fp(((e,{scrollHeight:t,scrollTop:r,viewportHeight:n})=>{if(Pf(e.scrollHeight,t))return{changed:!1,jump:0,scrollHeight:t,scrollTop:r};{const o=t-(r+n)<1;return e.scrollTop!==r&&o?{changed:!0,jump:e.scrollTop-r,scrollHeight:t,scrollTop:r}:{changed:!0,jump:0,scrollHeight:t,scrollTop:r}}}),{changed:!1,jump:0,scrollHeight:0,scrollTop:0}),vp((e=>e.changed)),xp((e=>e.jump))),0);mp($p(m,xp((e=>e.atBottom))),s),mp($p(s,Ep(50)),l);const f=kp(Nf);mp($p(n,xp((({scrollTop:e})=>e)),yp(),Fp(((e,t)=>gp(g)?{direction:e.direction,prevScrollTop:t}:{direction:t<e.prevScrollTop?Wf:Nf,prevScrollTop:t}),{direction:Nf,prevScrollTop:0}),xp((e=>e.direction))),f),mp($p(n,Ep(50),wp("none")),f);const b=kp(0);return mp($p(h,vp((e=>!e)),wp(0)),b),mp($p(o,Ep(100),Sp(h),vp((([e,t])=>!!t)),Fp((([e,t],[r])=>[t,r]),[0,0]),xp((([e,t])=>t-e))),b),{atBottomState:m,atBottomStateChange:l,atBottomThreshold:c,atTopStateChange:d,atTopThreshold:u,isAtBottom:s,isAtTop:a,isScrolling:h,lastJumpDueToItemResize:p,scrollDirection:f,scrollVelocity:b}}),dp(Vp)),Uf="top",qf="bottom",Gf="none";function Zf(e,t,r){return"number"==typeof e?r===Wf&&t===Uf||r===Nf&&t===qf?e:0:r===Wf?t===Uf?e.main:e.reverse:t===qf?e.main:e.reverse}function Qf(e,t){var r;return"number"==typeof e?e:null!=(r=e[t])?r:0}const Xf=Bp((([{deviation:e,fixedHeaderHeight:t,headerHeight:r,scrollTop:n,viewportHeight:o}])=>{const i=Ip(),s=kp(0),a=kp(0),l=kp(0);return{increaseViewportBy:a,listBoundary:i,overscan:l,topListHeight:s,visibleRange:Dp($p(zp(Op(n),Op(o),Op(r),Op(i,gf),Op(l),Op(s),Op(t),Op(e),Op(a)),xp((([e,t,r,[n,o],i,s,a,l,d])=>{const c=e-l,u=s+a,h=Math.max(r-c,0);let g=Gf;const m=Qf(d,Uf),p=Qf(d,qf);return n-=l,o+=r+a,(n+=r+a)>e+u-m&&(g=Wf),(o-=l)<e-h+t+p&&(g=Nf),g!==Gf?[Math.max(c-r-Zf(i,Uf,g)-m,0),c-h-a+t+Zf(i,qf,g)+p]:null})),vp((e=>null!=e)),yp(gf)),[0,0])}}),dp(Vp),{singleton:!0});const Kf={bottom:0,firstItemIndex:0,items:[],offsetBottom:0,offsetTop:0,top:0,topItems:[],topListHeight:0,totalCount:0};function Jf(e,t,r,n,o,i){const{lastIndex:s,lastOffset:a,lastSize:l}=o;let d=0,c=0;if(e.length>0){d=e[0].offset;const t=e[e.length-1];c=t.offset+t.size}const u=r-s,h=d,g=a+u*l+(u-1)*n-c;return{bottom:c,firstItemIndex:i,items:tb(e,o,i),offsetBottom:g,offsetTop:d,top:h,topItems:tb(t,o,i),topListHeight:t.reduce(((e,t)=>t.size+e),0),totalCount:r}}function eb(e,t,r,n,o,i){let s=0;if(r.groupIndices.length>0)for(const t of r.groupIndices){if(t-s>=e)break;s++}const a=e+s,l=jf(t,a);return Jf(Array.from({length:a}).map(((e,t)=>({data:i[t+l],index:t+l,offset:0,size:0}))),[],a,o,r,n)}function tb(e,t,r){if(0===e.length)return[];if(!yf(t))return e.map((e=>({...e,index:e.index+r,originalIndex:e.index})));const n=e[0].index,o=e[e.length-1].index,i=[],s=Kp(t.groupOffsetTree,n,o);let a,l=0;for(const n of e){let e;(!a||a.end<n.index)&&(a=s.shift(),l=t.groupIndices.indexOf(a.start)),e=n.index===a.start?{index:l,type:"group"}:{groupIndex:l,index:n.index-(l+1)+r},i.push({...e,data:n.data,offset:n.offset,originalIndex:n.index,size:n.size})}return i}const rb=Bp((([{data:e,firstItemIndex:t,gap:r,sizes:n,totalCount:o},i,{listBoundary:s,topListHeight:a,visibleRange:l},{initialTopMostItemIndex:d,scrolledToInitialItem:c},{topListHeight:u},h,{didMount:g},{recalcInProgress:m}])=>{const p=kp([]),f=kp(0),b=Ip();mp(i.topItemsIndexes,p);const y=Dp($p(zp(g,m,Op(l,gf),Op(o),Op(n),Op(d),c,Op(p),Op(t),Op(r),e),vp((([e,t,,r,,,,,,,n])=>{const o=n&&n.length!==r;return e&&!t&&!o})),xp((([,,[e,t],r,n,o,i,s,a,l,d])=>{const c=n,{offsetTree:u,sizeTree:h}=c,g=gp(f);if(0===r)return{...Kf,totalCount:r};if(0===e&&0===t)return 0===g?{...Kf,totalCount:r}:eb(g,o,n,a,l,d||[]);if(qp(h))return g>0?null:Jf(function(e,t,r){if(yf(t)){const n=$f(e,t);return[{index:Zp(t.groupOffsetTree,n)[0],offset:0,size:0},{data:null==r?void 0:r[0],index:n,offset:0,size:0}]}return[{data:null==r?void 0:r[0],index:e,offset:0,size:0}]}(jf(o,r),c,d),[],r,l,c,a);const m=[];if(s.length>0){const e=s[0],t=s[s.length-1];let r=0;for(const n of Kp(h,e,t)){const o=n.value,i=Math.max(n.start,e),s=Math.min(n.end,t);for(let e=i;e<=s;e++)m.push({data:null==d?void 0:d[e],index:e,offset:r,size:o}),r+=o}}if(!i)return Jf([],m,r,l,c,a);const p=s.length>0?s[s.length-1]+1:0,b=Cf(u,e,t,p);if(0===b.length)return null;const y=r-1;return Jf(ap([],(r=>{for(const n of b){const o=n.value;let i=o.offset,s=n.start;const a=o.size;if(o.offset<e){s+=Math.floor((e-o.offset+l)/(a+l));const t=s-n.start;i+=t*a+t*l}s<p&&(i+=(p-s)*a,s=p);const c=Math.min(n.end,y);for(let e=s;e<=c&&!(i>=t);e++)r.push({data:null==d?void 0:d[e],index:e,offset:i,size:a}),i+=a+l}})),m,r,l,c,a)})),vp((e=>null!==e)),yp()),Kf);mp($p(e,vp(ip),xp((e=>null==e?void 0:e.length))),o),mp($p(y,xp((e=>e.topListHeight))),u),mp(u,a),mp($p(y,xp((e=>[e.top,e.bottom]))),s),mp($p(y,xp((e=>e.items))),b);const v=Tp($p(y,vp((({items:e})=>e.length>0)),Sp(o,e),vp((([{items:e},t])=>e[e.length-1].originalIndex===t-1)),xp((([,e,t])=>[e-1,t])),yp(gf),xp((([e])=>e)))),x=Tp($p(y,Ep(200),vp((({items:e,topItems:t})=>e.length>0&&e[0].originalIndex===t.length)),xp((({items:e})=>e[0].index)),yp())),w=Tp($p(y,vp((({items:e})=>e.length>0)),xp((({items:e})=>{let t=0,r=e.length-1;for(;"group"===e[t].type&&t<r;)t++;for(;"group"===e[r].type&&r>t;)r--;return{endIndex:e[r].index,startIndex:e[t].index}})),yp(hf)));return{endReached:v,initialItemCount:f,itemsRendered:b,listState:y,rangeChanged:w,startReached:x,topItemsIndexes:p,...h}}),dp(Bf,zf,Xf,Lf,Rf,Yf,Of,mf),{singleton:!0}),nb=Bp((([{fixedFooterHeight:e,fixedHeaderHeight:t,footerHeight:r,headerHeight:n},{listState:o}])=>{const i=Ip(),s=Dp($p(zp(r,e,n,t,o),xp((([e,t,r,n,o])=>e+t+r+n+o.offsetBottom+o.bottom))),0);return mp(Op(s),i),{totalListHeight:s,totalListHeightChanged:i}}),dp(Vp,rb),{singleton:!0}),ob=Bp((([{viewportHeight:e},{totalListHeight:t}])=>{const r=kp(!1);return{alignToBottom:r,paddingTopAddition:Dp($p(zp(r,e,t),vp((([e])=>e)),xp((([,e,t])=>Math.max(0,e-t))),Ep(0),yp()),0)}}),dp(Vp,nb),{singleton:!0});function ib(e){return!!e&&("smooth"===e?"smooth":"auto")}const sb=Bp((([{listRefresh:e,totalCount:t},{atBottomState:r,isAtBottom:n},{scrollToIndex:o},{scrolledToInitialItem:i},{didMount:s,propsReady:a},{log:l},{scrollingInProgress:d}])=>{const c=kp(!1),u=Ip();let h=null;function g(e){up(o,{align:"end",behavior:e,index:"LAST"})}function m(e){const t=pp(r,(t=>{e&&!t.atBottom&&"SIZE_INCREASED"===t.notAtBottomBecause&&!h&&(gp(l)("scrolling to bottom due to increased size",{},_p.DEBUG),g("auto"))}));setTimeout(t,100)}return cp($p(zp($p(Op(t),Cp(1)),s),Sp(Op(c),n,i,d),xp((([[e,t],r,n,o,i])=>{let s=t&&o,a="auto";return s&&(a=((e,t)=>"function"==typeof e?ib(e(t)):t&&ib(e))(r,n||i),s=s&&!!a),{followOutputBehavior:a,shouldFollow:s,totalCount:e}})),vp((({shouldFollow:e})=>e))),(({followOutputBehavior:t,totalCount:r})=>{h&&(h(),h=null),h=pp(e,(()=>{gp(l)("following output to ",{totalCount:r},_p.DEBUG),g(t),h=null}))})),cp($p(zp(Op(c),t,a),vp((([e,,t])=>e&&t)),Fp((({value:e},[,t])=>({refreshed:e===t,value:t})),{refreshed:!1,value:0}),vp((({refreshed:e})=>e)),Sp(c,t)),(([,e])=>{gp(i)&&m(!1!==e)})),cp(u,(()=>{m(!1!==gp(c))})),cp(zp(Op(c),r),(([e,t])=>{e&&!t.atBottom&&"VIEWPORT_HEIGHT_DECREASING"===t.notAtBottomBecause&&g("auto")})),{autoscrollToBottom:u,followOutput:c}}),dp(Bf,Yf,Rf,Lf,Of,Hp,Vp)),ab=Bp((([{data:e,firstItemIndex:t,gap:r,sizes:n},{initialTopMostItemIndex:o},{initialItemCount:i,listState:s},{didMount:a}])=>(mp($p(a,Sp(i),vp((([,e])=>0!==e)),Sp(o,n,t,r,e),xp((([[,e],t,r,n,o,i=[]])=>eb(e,t,r,n,o,i)))),s),{})),dp(Bf,Lf,rb,Of),{singleton:!0}),lb=Bp((([{didMount:e},{scrollTo:t},{listState:r}])=>{const n=kp(0);return cp($p(e,Sp(n),vp((([,e])=>0!==e)),xp((([,e])=>({top:e})))),(e=>{pp($p(r,Cp(1),vp((e=>e.items.length>1))),(()=>{requestAnimationFrame((()=>{up(t,e)}))}))})),{initialScrollTop:n}}),dp(Of,Vp,rb),{singleton:!0}),db=({itemBottom:e,itemTop:t,locationParams:{align:r,behavior:n,...o},viewportBottom:i,viewportTop:s})=>t<s?{...o,align:null!=r?r:"start",behavior:n}:e>i?{...o,align:null!=r?r:"end",behavior:n}:null,cb=Bp((([{gap:e,sizes:t,totalCount:r},{fixedFooterHeight:n,fixedHeaderHeight:o,headerHeight:i,scrollingInProgress:s,scrollTop:a,viewportHeight:l},{scrollToIndex:d}])=>{const c=Ip();return mp($p(c,Sp(t,l,r,i,o,n,a),Sp(e),xp((([[e,t,r,n,o,i,a,l],d])=>{const{align:c,behavior:u,calculateViewLocation:h=db,done:g,...m}=e,p=Ff(e,t,n-1),f=wf(p,t.offsetTree,d)+o+i,b=h({itemBottom:f+Zp(t.sizeTree,p)[1],itemTop:f,locationParams:{align:c,behavior:u,...m},viewportBottom:l+r-a,viewportTop:l+i});return b?g&&pp($p(s,vp((e=>!e)),Cp(gp(s)?1:2)),g):g&&g(),b})),vp((e=>null!==e))),d),{scrollIntoView:c}}),dp(Bf,Vp,Rf,rb,Hp),{singleton:!0}),ub=Bp((([{scrollVelocity:e}])=>{const t=kp(!1),r=Ip(),n=kp(!1);return mp($p(e,Sp(n,t,r),vp((([e,t])=>!!t)),xp((([e,t,r,n])=>{const{enter:o,exit:i}=t;if(r){if(i(e,n))return!1}else if(o(e,n))return!0;return r})),yp()),t),cp($p(zp(t,e,r),Sp(n)),(([[e,t,r],n])=>{e&&n&&n.change&&n.change(t,r)})),{isSeeking:t,scrollSeekConfiguration:n,scrollSeekRangeChanged:r,scrollVelocity:e}}),dp(Yf),{singleton:!0}),hb=Bp((([{scrollContainerState:e,scrollTo:t}])=>{const r=Ip(),n=Ip(),o=Ip(),i=kp(!1),s=kp(void 0);return mp($p(zp(r,n),xp((([{scrollHeight:e,scrollTop:t,viewportHeight:r},{offsetTop:n}])=>({scrollHeight:e,scrollTop:Math.max(0,t-n),viewportHeight:r})))),e),mp($p(t,Sp(n),xp((([e,{offsetTop:t}])=>({...e,top:e.top+t})))),o),{customScrollParent:s,useWindowScroll:i,windowScrollContainerState:r,windowScrollTo:o,windowViewportRect:n}}),dp(Vp)),gb=Bp((([{sizeRanges:e,sizes:t},{headerHeight:r,scrollTop:n},{initialTopMostItemIndex:o},{didMount:i},{useWindowScroll:s,windowScrollContainerState:a,windowViewportRect:l}])=>{const d=Ip(),c=kp(void 0),u=kp(null),h=kp(null);return mp(a,u),mp(l,h),cp($p(d,Sp(t,n,s,u,h,r)),(([e,t,r,n,o,i,s])=>{const a=function(e){return ef(e).map((({k:e,v:t},r,n)=>{const o=n[r+1];return{endIndex:o?o.k-1:1/0,size:t,startIndex:e}}))}(t.sizeTree);n&&null!==o&&null!==i&&(r=o.scrollTop-i.offsetTop),e({ranges:a,scrollTop:r-=s})})),mp($p(c,vp(ip),xp(mb)),o),mp($p(i,Sp(c),vp((([,e])=>void 0!==e)),yp(),xp((([,e])=>e.ranges))),e),{getState:d,restoreStateFrom:c}}),dp(Bf,Vp,Lf,Of,hb));function mb(e){return{align:"start",index:0,offset:e.scrollTop}}const pb=Bp((([{topItemsIndexes:e}])=>{const t=kp(0);return mp($p(t,vp((e=>e>=0)),xp((e=>Array.from({length:e}).map(((e,t)=>t))))),e),{topItemCount:t}}),dp(rb));function fb(e){let t,r=!1;return()=>(r||(r=!0,t=e()),t)}const bb=fb((()=>/iP(ad|od|hone)/i.test(navigator.userAgent)&&/WebKit/i.test(navigator.userAgent))),yb=Bp((([{deviation:e,scrollBy:t,scrollingInProgress:r,scrollTop:n},{isAtBottom:o,isScrolling:i,lastJumpDueToItemResize:s,scrollDirection:a},{listState:l},{beforeUnshiftWith:d,gap:c,shiftWithOffset:u,sizes:h},{log:g},{recalcInProgress:m}])=>{const p=Tp($p(l,Sp(s),Fp((([,e,t,r],[{bottom:n,items:o,offsetBottom:i,totalCount:s},a])=>{const l=n+i;let d=0;return t===s&&e.length>0&&o.length>0&&(0===o[0].originalIndex&&0===e[0].originalIndex||(d=l-r,0!==d&&(d+=a))),[d,o,s,l]}),[0,[],0,0]),vp((([e])=>0!==e)),Sp(n,a,r,o,g,m),vp((([,e,t,r,,,n])=>!n&&!r&&0!==e&&t===Wf)),xp((([[e],,,,,t])=>(t("Upward scrolling compensation",{amount:e},_p.DEBUG),e)))));function f(r){r>0?(up(t,{behavior:"auto",top:-r}),up(e,0)):(up(e,0),up(t,{behavior:"auto",top:-r}))}return cp($p(p,Sp(e,i)),(([t,r,n])=>{n&&bb()?up(e,r-t):f(-t)})),cp($p(zp(Dp(i,!1),e,m),vp((([e,t,r])=>!e&&!r&&0!==t)),xp((([e,t])=>t)),Ep(1)),f),mp($p(u,xp((e=>({top:-e})))),t),cp($p(d,Sp(h,c),xp((([e,{groupIndices:t,lastSize:r,sizeTree:n},o])=>{function i(e){return e*(r+o)}if(0===t.length)return i(e);{let r=0;const o=Gp(n,0);let s=0,a=0;for(;s<e;){s++,r+=o;let n=t.length===a+1?1/0:t[a+1]-t[a]-1;s+n>e&&(r-=o,n=e-s+1),s+=n,r+=i(n),a++}return r}}))),(r=>{up(e,r),requestAnimationFrame((()=>{up(t,{top:r}),requestAnimationFrame((()=>{up(e,0),up(m,!1)}))}))})),{deviation:e}}),dp(Vp,Yf,rb,Bf,Hp,mf)),vb=Bp((([e,t,r,n,o,i,s,a,l,d])=>({...e,...t,...r,...n,...o,...i,...s,...a,...l,...d})),dp(Xf,ab,Of,ub,nb,lb,ob,hb,cb,Hp)),xb=Bp((([{data:e,defaultItemSize:t,firstItemIndex:r,fixedItemSize:n,gap:o,groupIndices:i,itemSize:s,sizeRanges:a,sizes:l,statefulTotalCount:d,totalCount:c,trackItemSizes:u},{initialItemFinalLocationReached:h,initialTopMostItemIndex:g,scrolledToInitialItem:m},p,f,b,{listState:y,topItemsIndexes:v,...x},{scrollToIndex:w},$,{topItemCount:F},{groupCounts:C},E])=>(mp(x.rangeChanged,E.scrollSeekRangeChanged),mp($p(E.windowViewportRect,xp((e=>e.visibleHeight))),p.viewportHeight),{data:e,defaultItemHeight:t,firstItemIndex:r,fixedItemHeight:n,gap:o,groupCounts:C,initialItemFinalLocationReached:h,initialTopMostItemIndex:g,scrolledToInitialItem:m,sizeRanges:a,topItemCount:F,topItemsIndexes:v,totalCount:c,...b,groupIndices:i,itemSize:s,listState:y,scrollToIndex:w,statefulTotalCount:d,trackItemSizes:u,...x,...E,...p,sizes:l,...f})),dp(Bf,Lf,Vp,gb,sb,rb,Rf,yb,pb,zf,vb));function wb(e,t){const r={},n={};let o=0;const i=e.length;for(;o<i;)n[e[o]]=1,o+=1;for(const e in t)Object.hasOwn(n,e)||(r[e]=t[e]);return r}const $b=typeof document<"u"?o.useLayoutEffect:o.useEffect;function Fb(e,r,n){const i=Object.keys(r.required||{}),s=Object.keys(r.optional||{}),a=Object.keys(r.methods||{}),l=Object.keys(r.events||{}),d=o.createContext({});function c(e,t){e.propsReady&&up(e.propsReady,!1);for(const n of i){up(e[r.required[n]],t[n])}for(const n of s)if(n in t){up(e[r.optional[n]],t[n])}e.propsReady&&up(e.propsReady,!0)}function u(e){return l.reduce(((t,n)=>(t[n]=function(e){let t,r;const n=()=>null==t?void 0:t();return function(o,i){switch(o){case 1:return i?r===i?void 0:(n(),r=i,t=cp(e,i),t):(n(),sp);case 2:return n(),void(r=null)}}}(e[r.events[n]]),t)),{})}const h=o.forwardRef(((h,g)=>{const{children:m,...p}=h,[f]=o.useState((()=>ap(function(e){const t=new Map,r=({constructor:e,dependencies:n,id:o,singleton:i})=>{if(i&&t.has(o))return t.get(o);const s=e(n.map((e=>r(e))));return i&&t.set(o,s),s};return r(e)}(e),(e=>{c(e,p)})))),[b]=o.useState(np(u,f));$b((()=>{for(const e of l)e in p&&cp(b[e],p[e]);return()=>{Object.values(b).map(hp)}}),[p,b,f]),$b((()=>{c(f,p)})),o.useImperativeHandle(g,ep(function(e){return a.reduce(((t,n)=>(t[n]=t=>{up(e[r.methods[n]],t)},t)),{})}(f)));const y=n;return t(d.Provider,{value:f,children:n?t(y,{...wb([...i,...s,...l],p),children:m}):m})}));return{Component:h,useEmitter:(e,t)=>{const r=o.useContext(d)[e];$b((()=>cp(r,t)),[t,r])},useEmitterValue:o.version.startsWith("18")?e=>{const t=o.useContext(d)[e],r=o.useCallback((e=>cp(t,e)),[t]);return o.useSyncExternalStore(r,(()=>gp(t)),(()=>gp(t)))}:e=>{const t=o.useContext(d)[e],[r,n]=o.useState(np(gp,t));return $b((()=>cp(t,(e=>{e!==r&&n(ep(e))}))),[t,r]),r},usePublisher:e=>o.useCallback(op(up,o.useContext(d)[e]),[e])}}const Cb=o.createContext(void 0),Eb=o.createContext(void 0),Sb=typeof document<"u"?o.useLayoutEffect:o.useEffect;function kb(e,t,r,n=sp,i,s){const a=o.useRef(null),l=o.useRef(null),d=o.useRef(null),c=o.useCallback((r=>{const n=r.target,o=n===window||n===document,i=s?o?window.pageXOffset||document.documentElement.scrollLeft:n.scrollLeft:o?window.pageYOffset||document.documentElement.scrollTop:n.scrollTop,a=s?o?document.documentElement.scrollWidth:n.scrollWidth:o?document.documentElement.scrollHeight:n.scrollHeight,c=s?o?window.innerWidth:n.offsetWidth:o?window.innerHeight:n.offsetHeight,u=()=>{e({scrollHeight:a,scrollTop:Math.max(i,0),viewportHeight:c})};r.suppressFlushSync?u():D.flushSync(u),null!==l.current&&(i===l.current||i<=0||i===a-c)&&(l.current=null,t(!0),d.current&&(clearTimeout(d.current),d.current=null))}),[e,t]);return o.useEffect((()=>{const e=i||a.current;return n(i||a.current),c({suppressFlushSync:!0,target:e}),e.addEventListener("scroll",c,{passive:!0}),()=>{n(null),e.removeEventListener("scroll",c)}}),[a,c,r,n,i]),{scrollByCallback:function(e){s&&(e={behavior:e.behavior,left:e.top}),a.current.scrollBy(e)},scrollerRef:a,scrollToCallback:function(r){const n=a.current;if(!n||(s?"offsetWidth"in n&&0===n.offsetWidth:"offsetHeight"in n&&0===n.offsetHeight))return;const o="smooth"===r.behavior;let i,c,u;n===window?(c=Math.max(bf(document.documentElement,s?"width":"height"),s?document.documentElement.scrollWidth:document.documentElement.scrollHeight),i=s?window.innerWidth:window.innerHeight,u=s?document.documentElement.scrollLeft:document.documentElement.scrollTop):(c=n[s?"scrollWidth":"scrollHeight"],i=bf(n,s?"width":"height"),u=n[s?"scrollLeft":"scrollTop"]);const h=c-i;if(r.top=Math.ceil(Math.max(Math.min(h,r.top),0)),Pf(i,c)||r.top===u)return e({scrollHeight:c,scrollTop:u,viewportHeight:i}),void(o&&t(!0));o?(l.current=r.top,d.current&&clearTimeout(d.current),d.current=setTimeout((()=>{d.current=null,l.current=null,t(!0)}),1e3)):l.current=null,s&&(r={behavior:r.behavior,left:r.top}),n.scrollTo(r)}}}const Db="-webkit-sticky",Ib="sticky",Tb=fb((()=>{if(typeof document>"u")return Ib;const e=document.createElement("div");return e.style.position=Db,e.style.position===Db?Db:Ib}));function Bb(e){return e}const Ab=Bp((()=>{const e=kp((e=>`Item ${e}`)),t=kp(null),r=kp((e=>`Group ${e}`)),n=kp({}),o=kp(Bb),i=kp("div"),s=kp(sp),a=(e,t=null)=>Dp($p(n,xp((t=>t[e])),yp()),t);return{components:n,computeItemKey:o,context:t,EmptyPlaceholder:a("EmptyPlaceholder"),FooterComponent:a("Footer"),GroupComponent:a("Group","div"),groupContent:r,HeaderComponent:a("Header"),HeaderFooterTag:i,ItemComponent:a("Item","div"),itemContent:e,ListComponent:a("List","div"),ScrollerComponent:a("Scroller","div"),scrollerRef:s,ScrollSeekPlaceholder:a("ScrollSeekPlaceholder"),TopItemListComponent:a("TopItemList")}})),zb=Bp((([e,t])=>({...e,...t})),dp(xb,Ab)),Ob=({height:e})=>t("div",{style:{height:e}}),Mb={overflowAnchor:"none",position:Tb(),zIndex:1},_b={overflowAnchor:"none"},Rb={..._b,display:"inline-block",height:"100%"},Hb=o.memo((function({showTopList:e=!1}){const r=ty("listState"),n=ry("sizeRanges"),i=ty("useWindowScroll"),s=ty("customScrollParent"),a=ry("windowScrollContainerState"),l=ry("scrollContainerState"),d=s||i?a:l,c=ty("itemContent"),u=ty("context"),h=ty("groupContent"),g=ty("trackItemSizes"),m=ty("itemSize"),p=ty("log"),f=ry("gap"),b=ty("horizontalDirection"),{callbackRef:v}=Pp(n,m,g,e?sp:d,p,f,s,b,ty("skipAnimationFrameInResizeObserver")),[x,w]=o.useState(0);ey("deviation",(e=>{x!==e&&w(e)}));const $=ty("EmptyPlaceholder"),F=ty("ScrollSeekPlaceholder")||Ob,C=ty("ListComponent"),E=ty("ItemComponent"),S=ty("GroupComponent"),k=ty("computeItemKey"),D=ty("isSeeking"),I=ty("groupIndices").length>0,T=ty("alignToBottom"),B=ty("initialItemFinalLocationReached"),A=e?{}:{boxSizing:"border-box",...b?{display:"inline-block",height:"100%",marginLeft:0!==x?x:T?"auto":0,paddingLeft:r.offsetTop,paddingRight:r.offsetBottom,whiteSpace:"nowrap"}:{marginTop:0!==x?x:T?"auto":0,paddingBottom:r.offsetBottom,paddingTop:r.offsetTop},...B?{}:{visibility:"hidden"}};return!e&&0===r.totalCount&&$?t($,{...Nb($,u)}):t(C,{...Nb(C,u),"data-testid":e?"virtuoso-top-item-list":"virtuoso-item-list",ref:v,style:A,children:(e?r.topItems:r.items).map((e=>{const t=e.originalIndex,n=k(t+r.firstItemIndex,e.data,u);return D?y(F,{...Nb(F,u),height:e.size,index:e.index,key:n,type:e.type||"item",..."group"===e.type?{}:{groupIndex:e.groupIndex}}):"group"===e.type?y(S,{...Nb(S,u),"data-index":t,"data-item-index":e.index,"data-known-size":e.size,key:n,style:Mb},h(e.index,u)):y(E,{...Nb(E,u),...Vb(E,e.data),"data-index":t,"data-item-group-index":e.groupIndex,"data-item-index":e.index,"data-known-size":e.size,key:n,style:b?Rb:_b},I?c(e.index,e.groupIndex,e.data,u):c(e.index,e.data,u))}))})})),jb={height:"100%",outline:"none",overflowY:"auto",position:"relative",WebkitOverflowScrolling:"touch"},Lb={outline:"none",overflowX:"auto",position:"relative"},Pb=e=>({height:"100%",position:"absolute",top:0,width:"100%",...e?{display:"flex",flexDirection:"column"}:{}}),Wb={position:Tb(),top:0,width:"100%",zIndex:1};function Nb(e,t){if("string"!=typeof e)return{context:t}}function Vb(e,t){return{item:"string"==typeof e?void 0:t}}const Yb=o.memo((function(){const e=ty("HeaderComponent"),r=ry("headerHeight"),n=ty("HeaderFooterTag"),i=jp(o.useMemo((()=>e=>{r(bf(e,"height"))}),[r]),!0,ty("skipAnimationFrameInResizeObserver")),s=ty("context");return e?t(n,{ref:i,children:t(e,{...Nb(e,s)})}):null})),Ub=o.memo((function(){const e=ty("FooterComponent"),r=ry("footerHeight"),n=ty("HeaderFooterTag"),i=jp(o.useMemo((()=>e=>{r(bf(e,"height"))}),[r]),!0,ty("skipAnimationFrameInResizeObserver")),s=ty("context");return e?t(n,{ref:i,children:t(e,{...Nb(e,s)})}):null}));function qb({useEmitter:e,useEmitterValue:r,usePublisher:n}){return o.memo((function({children:o,style:i,...s}){const a=n("scrollContainerState"),l=r("ScrollerComponent"),d=n("smoothScrollTargetReached"),c=r("scrollerRef"),u=r("context"),h=r("horizontalDirection")||!1,{scrollByCallback:g,scrollerRef:m,scrollToCallback:p}=kb(a,d,l,c,void 0,h);return e("scrollTo",p),e("scrollBy",g),t(l,{"data-testid":"virtuoso-scroller","data-virtuoso-scroller":!0,ref:m,style:{...h?Lb:jb,...i},tabIndex:0,...s,...Nb(l,u),children:o})}))}function Gb({useEmitter:e,useEmitterValue:r,usePublisher:n}){return o.memo((function({children:o,style:i,...s}){const a=n("windowScrollContainerState"),l=r("ScrollerComponent"),d=n("smoothScrollTargetReached"),c=r("totalListHeight"),u=r("deviation"),h=r("customScrollParent"),g=r("context"),{scrollByCallback:m,scrollerRef:p,scrollToCallback:f}=kb(a,d,l,sp,h);return Sb((()=>(p.current=h||window,()=>{p.current=null})),[p,h]),e("windowScrollTo",f),e("scrollBy",m),t(l,{"data-virtuoso-scroller":!0,style:{position:"relative",...i,...0!==c?{height:c+u}:{}},...s,...Nb(l,g),children:o})}))}const Zb=({children:e})=>{const r=o.useContext(Cb),n=ry("viewportHeight"),i=ry("fixedItemHeight"),s=ty("alignToBottom"),a=ty("horizontalDirection"),l=jp(o.useMemo((()=>rp(n,(e=>bf(e,a?"width":"height")))),[n,a]),!0,ty("skipAnimationFrameInResizeObserver"));return o.useEffect((()=>{r&&(n(r.viewportHeight),i(r.itemHeight))}),[r,n,i]),t("div",{"data-viewport-type":"element",ref:l,style:Pb(s),children:e})},Qb=({children:e})=>{const r=o.useContext(Cb),n=ry("windowViewportRect"),i=ry("fixedItemHeight"),s=ty("customScrollParent"),a=Np(n,s,ty("skipAnimationFrameInResizeObserver")),l=ty("alignToBottom");return o.useEffect((()=>{r&&(i(r.itemHeight),n({offsetTop:0,visibleHeight:r.viewportHeight,visibleWidth:100}))}),[r,n,i]),t("div",{"data-viewport-type":"window",ref:a,style:Pb(l),children:e})},Xb=({children:e})=>{const r=ty("TopItemListComponent")||"div",n=ty("headerHeight"),o={...Wb,marginTop:`${n}px`},i=ty("context");return t(r,{style:o,...Nb(r,i),children:e})},Kb=o.memo((function(r){const n=ty("useWindowScroll"),o=ty("topItemsIndexes").length>0,i=ty("customScrollParent"),s=ty("context"),a=i||n?oy:ny,l=i||n?Qb:Zb;return e(a,{...r,...Nb(a,s),children:[o&&t(Xb,{children:t(Hb,{showTopList:!0})}),e(l,{children:[t(Yb,{}),t(Hb,{}),t(Ub,{})]})]})})),{Component:Jb,useEmitter:ey,useEmitterValue:ty,usePublisher:ry}=Fb(zb,{events:{atBottomStateChange:"atBottomStateChange",atTopStateChange:"atTopStateChange",endReached:"endReached",groupIndices:"groupIndices",isScrolling:"isScrolling",itemsRendered:"itemsRendered",rangeChanged:"rangeChanged",startReached:"startReached",totalListHeightChanged:"totalListHeightChanged"},methods:{autoscrollToBottom:"autoscrollToBottom",getState:"getState",scrollBy:"scrollBy",scrollIntoView:"scrollIntoView",scrollTo:"scrollTo",scrollToIndex:"scrollToIndex"},optional:{alignToBottom:"alignToBottom",atBottomThreshold:"atBottomThreshold",atTopThreshold:"atTopThreshold",components:"components",computeItemKey:"computeItemKey",context:"context",customScrollParent:"customScrollParent",data:"data",defaultItemHeight:"defaultItemHeight",firstItemIndex:"firstItemIndex",fixedItemHeight:"fixedItemHeight",followOutput:"followOutput",groupContent:"groupContent",groupCounts:"groupCounts",headerFooterTag:"HeaderFooterTag",horizontalDirection:"horizontalDirection",increaseViewportBy:"increaseViewportBy",initialItemCount:"initialItemCount",initialScrollTop:"initialScrollTop",initialTopMostItemIndex:"initialTopMostItemIndex",itemContent:"itemContent",itemSize:"itemSize",logLevel:"logLevel",overscan:"overscan",restoreStateFrom:"restoreStateFrom",scrollerRef:"scrollerRef",scrollSeekConfiguration:"scrollSeekConfiguration",skipAnimationFrameInResizeObserver:"skipAnimationFrameInResizeObserver",topItemCount:"topItemCount",totalCount:"totalCount",useWindowScroll:"useWindowScroll"},required:{}},Kb),ny=qb({useEmitter:ey,useEmitterValue:ty,usePublisher:ry}),oy=Gb({useEmitter:ey,useEmitterValue:ty,usePublisher:ry}),iy=Jb,sy={bottom:0,itemHeight:0,items:[],itemWidth:0,offsetBottom:0,offsetTop:0,top:0},ay={bottom:0,itemHeight:0,items:[{index:0}],itemWidth:0,offsetBottom:0,offsetTop:0,top:0},{ceil:ly,floor:dy,max:cy,min:uy,round:hy}=Math;function gy(e,t,r){return Array.from({length:t-e+1}).map(((t,n)=>({data:null===r?null:r[n+e],index:n+e})))}function my(e,t){return e&&e.width===t.width&&e.height===t.height}function py(e,t){return e&&e.column===t.column&&e.row===t.row}const fy=Bp((([{increaseViewportBy:e,listBoundary:t,overscan:r,visibleRange:n},{footerHeight:o,headerHeight:i,scrollBy:s,scrollContainerState:a,scrollTo:l,scrollTop:d,smoothScrollTargetReached:c,viewportHeight:u},h,g,{didMount:m,propsReady:p},{customScrollParent:f,useWindowScroll:b,windowScrollContainerState:y,windowScrollTo:v,windowViewportRect:x},w])=>{const $=kp(0),F=kp(0),C=kp(sy),E=kp({height:0,width:0}),S=kp({height:0,width:0}),k=Ip(),D=Ip(),I=kp(0),T=kp(null),B=kp({column:0,row:0}),A=Ip(),z=Ip(),O=kp(!1),M=kp(0),_=kp(!0),R=kp(!1),H=kp(!1);cp($p(m,Sp(M),vp((([e,t])=>!!t))),(()=>{up(_,!1)})),cp($p(zp(m,_,S,E,M,R),vp((([e,t,r,n,,o])=>e&&!t&&0!==r.height&&0!==n.height&&!o))),(([,,,,e])=>{up(R,!0),Hf(1,(()=>{up(k,e)})),pp($p(d),(()=>{up(t,[0,0]),up(_,!0)}))})),mp($p(z,vp((e=>null!=e&&e.scrollTop>0)),wp(0)),F),cp($p(m,Sp(z),vp((([,e])=>null!=e))),(([,e])=>{e&&(up(E,e.viewport),up(S,e.item),up(B,e.gap),e.scrollTop>0&&(up(O,!0),pp($p(d,Cp(1)),(e=>{up(O,!1)})),up(l,{top:e.scrollTop})))})),mp($p(E,xp((({height:e})=>e))),u),mp($p(zp(Op(E,my),Op(S,my),Op(B,((e,t)=>e&&e.column===t.column&&e.row===t.row)),Op(d)),xp((([e,t,r,n])=>({gap:r,item:t,scrollTop:n,viewport:e})))),A),mp($p(zp(Op($),n,Op(B,py),Op(S,my),Op(E,my),Op(T),Op(F),Op(O),Op(_),Op(M)),vp((([,,,,,,,e])=>!e)),xp((([e,[t,r],n,o,i,s,a,,l,d])=>{const{column:c,row:u}=n,{height:h,width:g}=o,{width:m}=i;if(0===a&&(0===e||0===m))return sy;if(0===g){const t=jf(d,e);return function(e){return{...ay,items:e}}(gy(t,t+Math.max(a-1,0),s))}const p=by(m,g,c);let f,b;l?0===t&&0===r&&a>0?(f=0,b=a-1):(f=p*dy((t+u)/(h+u)),b=p*ly((r+u)/(h+u))-1,b=uy(e-1,cy(b,p-1)),f=uy(b,cy(0,f))):(f=0,b=-1);const y=gy(f,b,s),{bottom:v,top:x}=yy(i,n,o,y),w=ly(e/p);return{bottom:v,itemHeight:h,items:y,itemWidth:g,offsetBottom:w*h+(w-1)*u-v,offsetTop:x,top:x}}))),C),mp($p(T,vp((e=>null!==e)),xp((e=>e.length))),$),mp($p(zp(E,S,C,B),vp((([e,t,{items:r}])=>r.length>0&&0!==t.height&&0!==e.height)),xp((([e,t,{items:r},n])=>{const{bottom:o,top:i}=yy(e,n,t,r);return[i,o]})),yp(gf)),t);const j=kp(!1);mp($p(d,Sp(j),xp((([e,t])=>t||0!==e))),j);const L=Tp($p(zp(C,$),vp((([{items:e}])=>e.length>0)),Sp(j),vp((([[e,t],r])=>{const n=e.items[e.items.length-1].index===t-1;return(r||e.bottom>0&&e.itemHeight>0&&0===e.offsetBottom&&e.items.length===t)&&n})),xp((([[,e]])=>e-1)),yp())),P=Tp($p(Op(C),vp((({items:e})=>e.length>0&&0===e[0].index)),wp(0),yp())),W=Tp($p(Op(C),Sp(O),vp((([{items:e},t])=>e.length>0&&!t)),xp((([{items:e}])=>({endIndex:e[e.length-1].index,startIndex:e[0].index}))),yp(hf),Ep(0)));mp(W,g.scrollSeekRangeChanged),mp($p(k,Sp(E,S,$,B),xp((([e,t,r,n,o])=>{const i=_f(e),{align:s,behavior:a,offset:l}=i;let d=i.index;"LAST"===d&&(d=n-1),d=cy(0,d,uy(n-1,d));let c=vy(t,o,r,d);return"end"===s?c=hy(c-t.height+r.height):"center"===s&&(c=hy(c-t.height/2+r.height/2)),l&&(c+=l),{behavior:a,top:c}}))),l);const N=Dp($p(C,xp((e=>e.offsetBottom+e.bottom))),0);return mp($p(x,xp((e=>({height:e.visibleHeight,width:e.visibleWidth})))),E),{customScrollParent:f,data:T,deviation:I,footerHeight:o,gap:B,headerHeight:i,increaseViewportBy:e,initialItemCount:F,itemDimensions:S,overscan:r,restoreStateFrom:z,scrollBy:s,scrollContainerState:a,scrollHeight:D,scrollTo:l,scrollToIndex:k,scrollTop:d,smoothScrollTargetReached:c,totalCount:$,useWindowScroll:b,viewportDimensions:E,windowScrollContainerState:y,windowScrollTo:v,windowViewportRect:x,...g,gridState:C,horizontalDirection:H,initialTopMostItemIndex:M,totalListHeight:N,...h,endReached:L,propsReady:p,rangeChanged:W,startReached:P,stateChanged:A,stateRestoreInProgress:O,...w}}),dp(Xf,Vp,Yf,ub,Of,hb,Hp));function by(e,t,r){return cy(1,dy((e+r)/(dy(t)+r)))}function yy(e,t,r,n){const{height:o}=r;if(void 0===o||0===n.length)return{bottom:0,top:0};const i=vy(e,t,r,n[0].index);return{bottom:vy(e,t,r,n[n.length-1].index)+o,top:i}}function vy(e,t,r,n){const o=by(e.width,r.width,t.column),i=dy(n/o),s=i*r.height+cy(0,i-1)*t.row;return s>0?s+t.row:s}const xy=Bp((()=>{const e=kp((e=>`Item ${e}`)),t=kp({}),r=kp(null),n=kp("virtuoso-grid-item"),o=kp("virtuoso-grid-list"),i=kp(Bb),s=kp("div"),a=kp(sp),l=(e,r=null)=>Dp($p(t,xp((t=>t[e])),yp()),r),d=kp(!1),c=kp(!1);return mp(Op(c),d),{components:t,computeItemKey:i,context:r,FooterComponent:l("Footer"),HeaderComponent:l("Header"),headerFooterTag:s,itemClassName:n,ItemComponent:l("Item","div"),itemContent:e,listClassName:o,ListComponent:l("List","div"),readyStateChanged:d,reportReadyState:c,ScrollerComponent:l("Scroller","div"),scrollerRef:a,ScrollSeekPlaceholder:l("ScrollSeekPlaceholder","div")}})),wy=Bp((([e,t])=>({...e,...t})),dp(fy,xy)),$y=o.memo((function(){const e=Ty("gridState"),r=Ty("listClassName"),n=Ty("itemClassName"),i=Ty("itemContent"),s=Ty("computeItemKey"),a=Ty("isSeeking"),l=By("scrollHeight"),d=Ty("ItemComponent"),c=Ty("ListComponent"),u=Ty("ScrollSeekPlaceholder"),h=Ty("context"),g=By("itemDimensions"),m=By("gap"),p=Ty("log"),f=Ty("stateRestoreInProgress"),b=By("reportReadyState"),v=jp(o.useMemo((()=>e=>{const t=e.parentElement.parentElement.scrollHeight;l(t);const r=e.firstChild;if(r){const{height:e,width:t}=r.getBoundingClientRect();g({height:e,width:t})}m({column:Oy("column-gap",getComputedStyle(e).columnGap,p),row:Oy("row-gap",getComputedStyle(e).rowGap,p)})}),[l,g,m,p]),!0,!1);return Sb((()=>{e.itemHeight>0&&e.itemWidth>0&&b(!0)}),[e]),f?null:t(c,{className:r,ref:v,...Nb(c,h),"data-testid":"virtuoso-item-list",style:{paddingBottom:e.offsetBottom,paddingTop:e.offsetTop},children:e.items.map((r=>{const o=s(r.index,r.data,h);return a?t(u,{...Nb(u,h),height:e.itemHeight,index:r.index,width:e.itemWidth},o):y(d,{...Nb(d,h),className:n,"data-index":r.index,key:o},i(r.index,r.data,h))}))})})),Fy=o.memo((function(){const e=Ty("HeaderComponent"),r=By("headerHeight"),n=Ty("headerFooterTag"),i=jp(o.useMemo((()=>e=>{r(bf(e,"height"))}),[r]),!0,!1),s=Ty("context");return e?t(n,{ref:i,children:t(e,{...Nb(e,s)})}):null})),Cy=o.memo((function(){const e=Ty("FooterComponent"),r=By("footerHeight"),n=Ty("headerFooterTag"),i=jp(o.useMemo((()=>e=>{r(bf(e,"height"))}),[r]),!0,!1),s=Ty("context");return e?t(n,{ref:i,children:t(e,{...Nb(e,s)})}):null})),Ey=({children:e})=>{const r=o.useContext(Eb),n=By("itemDimensions"),i=By("viewportDimensions"),s=jp(o.useMemo((()=>e=>{i(e.getBoundingClientRect())}),[i]),!0,!1);return o.useEffect((()=>{r&&(i({height:r.viewportHeight,width:r.viewportWidth}),n({height:r.itemHeight,width:r.itemWidth}))}),[r,i,n]),t("div",{ref:s,style:Pb(!1),children:e})},Sy=({children:e})=>{const r=o.useContext(Eb),n=By("windowViewportRect"),i=By("itemDimensions"),s=Ty("customScrollParent"),a=Np(n,s,!1);return o.useEffect((()=>{r&&(i({height:r.itemHeight,width:r.itemWidth}),n({offsetTop:0,visibleHeight:r.viewportHeight,visibleWidth:r.viewportWidth}))}),[r,n,i]),t("div",{ref:a,style:Pb(!1),children:e})},ky=o.memo((function({...r}){const n=Ty("useWindowScroll"),o=Ty("customScrollParent"),i=o||n?zy:Ay,s=o||n?Sy:Ey,a=Ty("context");return t(i,{...r,...Nb(i,a),children:e(s,{children:[t(Fy,{}),t($y,{}),t(Cy,{})]})})})),{Component:Dy,useEmitter:Iy,useEmitterValue:Ty,usePublisher:By}=Fb(wy,{events:{atBottomStateChange:"atBottomStateChange",atTopStateChange:"atTopStateChange",endReached:"endReached",isScrolling:"isScrolling",rangeChanged:"rangeChanged",readyStateChanged:"readyStateChanged",startReached:"startReached",stateChanged:"stateChanged"},methods:{scrollBy:"scrollBy",scrollTo:"scrollTo",scrollToIndex:"scrollToIndex"},optional:{components:"components",computeItemKey:"computeItemKey",context:"context",customScrollParent:"customScrollParent",data:"data",headerFooterTag:"headerFooterTag",increaseViewportBy:"increaseViewportBy",initialItemCount:"initialItemCount",initialTopMostItemIndex:"initialTopMostItemIndex",itemClassName:"itemClassName",itemContent:"itemContent",listClassName:"listClassName",logLevel:"logLevel",overscan:"overscan",restoreStateFrom:"restoreStateFrom",scrollerRef:"scrollerRef",scrollSeekConfiguration:"scrollSeekConfiguration",totalCount:"totalCount",useWindowScroll:"useWindowScroll"}},ky),Ay=qb({useEmitter:Iy,useEmitterValue:Ty,usePublisher:By}),zy=Gb({useEmitter:Iy,useEmitterValue:Ty,usePublisher:By});function Oy(e,t,r){return"normal"!==t&&!(null!=t&&t.endsWith("px"))&&r(`${e} was not resolved to pixel value correctly`,t,_p.WARN),"normal"===t?0:parseInt(null!=t?t:"0",10)}var My;!function(e){e.Ready="overlay-context-ready",e.Change="overlay-context-change"}(My||(My={}));const _y=e=>"right"===e?"bottom-end":"bottom-start",Ry=v({elementWidth:0,styles:{},setFloatingRef:()=>{},getFloatingProps:()=>({})}),Hy=({enabled:n,isOpen:o,onOpen:l,onClose:d,onDismiss:c,renderElement:u,renderDropdown:h,customZIndex:g,clickToToggle:m=!1,offset:p=0,alignment:b="left",fitAvailableHeight:y,rootNode:v,positionRef:x})=>{var w;const $=f(E),F=Zn["sm-max"]({theme:$}),C=i(null),{width:S=0}=Di({targetRef:null!=x?x:C,handleHeight:!1}),k={name:"center",fn:({x:e,rects:t})=>{const r=0===e||e+t.floating.width===window.innerWidth,n=window.innerWidth<F;return{x:r&&n?(window.innerWidth-t.floating.width)/2:e}}},{refs:D,floatingStyles:I,context:T}=V({open:o,onOpenChange:(e,t,r)=>{"escape-key"===r?null==c||c():e&&!o?null==l||l():!e&&o&&(null==d||d(r))},whileElementsMounted:Y,placement:_y(b),middleware:[U(p),q(),G({limiter:Z()}),Q({apply({availableHeight:e,elements:t}){!y||e>=t.floating.scrollHeight?t.floating.style.setProperty("--available-height",""):t.floating.style.setProperty("--available-height",`${Math.max(0,e)}px`)}}),k]}),B=(()=>{const[e,t]=a(void 0),r=N();return s((()=>{if(!r)return void t(void 0);const e=e=>{t(e.zIndex)};return r.events.on(My.Change,e),r.events.emit(My.Ready),()=>r.events.off(My.Change,e)}),[r]),e})(),{isMounted:A,styles:z}=X(T,{initial:{opacity:0},open:{opacity:1},duration:300}),O=K(T,{enabled:n,toggle:m}),M=J(T,{enabled:n}),{getReferenceProps:_,getFloatingProps:R}=ee([O,M]),H={elementWidth:S,styles:Object.assign(Object.assign(Object.assign({},z),I),{zIndex:null!==(w=null!=g?g:B)&&void 0!==w?w:50}),setFloatingRef:D.setFloating,getFloatingProps:R};return e(r,{children:[t("div",Object.assign({ref:e=>{C.current=e,D.setReference(e)}},_(),{children:u()})),A&&t(te,{root:v,children:t(re,{context:T,modal:!1,initialFocus:-1,returnFocus:!1,children:t(Ry.Provider,{value:H,children:h(H)})})})]})},jy=o.createContext({focusedIndex:-1,setFocusedIndex:()=>{}}),Ly=({children:e})=>{const[r,n]=a(-1);return t(jy.Provider,{value:{focusedIndex:r,setFocusedIndex:n},children:e})},Py=$.div`
    border: ${Un["width-010"]} ${Un.solid} ${Nn.border};
    border-radius: ${Gn.sm};
    background: ${Nn.bg};

    ${e=>e.$customWidth?`width: ${e.$customWidth};`:e.$width?`width: ${e.$width}px; min-width: 23rem;`:"min-width: 23rem;"}
    max-height: min(27rem, var(--available-height, infinity * 1px));
    overflow: hidden;
    overflow-y: auto;
    ${e=>"small"===e.$variant?Vn["body-md-regular"]:Vn["body-baseline-regular"]}

    ${Qn.MaxWidth.sm} {
        min-width: unset;
        width: calc(100vw - ${Zn["sm-margin"]} * 2);
        max-height: 15rem;
    }

    ${Qn.MaxWidth.xs} {
        width: calc(100vw - ${Zn["xs-margin"]} * 2);
    }

    ${Qn.MaxWidth.xxs} {
        width: calc(100vw - ${Zn["xxs-margin"]} * 2);
    }

    &::-webkit-scrollbar {
        width: 14px;
    }

    &::-webkit-scrollbar-track {
        background: transparent;
    }

    &::-webkit-scrollbar-thumb {
        background: ${Nn["bg-inverse-subtlest"]};
        border: 5px solid transparent;
        border-radius: ${Gn.full};
        background-clip: padding-box;
    }
`,Wy=$.div`
    background: transparent;
    padding: ${qn["spacing-8"]};
`,Ny=$.ul`
    list-style-type: none;
`,Vy=$.li`
    display: flex;
    align-items: flex-start;
    gap: ${qn["spacing-8"]};
    padding: ${qn["spacing-12"]} ${qn["spacing-8"]};
    cursor: pointer;
    border: none;
    border-radius: ${Gn.none};
    outline: none;

    ${e=>e.$disabled?F`
                cursor: not-allowed;
            `:e.$active&&e.$selected?F`
                background: ${Nn["bg-hover"]};
            `:e.$active?F`
                background: ${Nn["bg-hover-subtle"]};
            `:void 0}
`,Yy=$(W)`
    flex-shrink: 0;
    height: 1lh;
    width: 1rem;
    color: ${Nn["icon-selected"]};
`,Uy=$.div`
    flex-shrink: 0;
    height: 1lh;
    width: 1rem;
`,qy=$(P)`
    flex-shrink: 0;
    height: 1lh;
    width: 1lh;
    color: ${Nn["icon-selected"]};
`,Gy=$(L)`
    flex-shrink: 0;
    height: 1lh;
    width: 1lh;
    color: ${Nn["icon-primary-subtlest"]};
`,Zy=$(ne)`
    flex-shrink: 0;
    height: 1lh;
    width: 1lh;
    color: ${Nn["icon-disabled-subtle"]};
`,Qy=$.div`
    width: 100%;
    display: flex;
    justify-content: flex-end;
`,Xy=$(wo)`
    cursor: pointer;
    overflow: hidden;
    color: ${Nn["text-primary"]};
    font-size: inherit;
`,Ky=$(Xy)`
    ${Vn["body-baseline-semibold"]}
`,Jy=$(Xy)`
    ${Vn["body-md-semibold"]}
    padding: ${qn["spacing-8"]} ${qn["spacing-8"]};
`,ev=$.div`
    width: 100%;
    display: flex;
    padding: ${qn["spacing-12"]} ${qn["spacing-16"]};
    align-items: center;
`,tv=$(A)`
    margin-right: ${qn["spacing-4"]};
    color: ${Nn["icon-error"]};
    height: 1em;
    width: 1em;
`,rv=$(cd)`
    margin-right: ${qn["spacing-8"]};
    color: ${Nn.icon};
`,nv=$.div`
    ${ec()}
    color: ${Nn["text-subtle"]};
    padding: 0 ${qn["spacing-16"]} ${qn["spacing-12"]}
        ${qn["spacing-16"]};
`,ov=$.div`
    background: ${Nn["bg-strong"]};
    border-radius: ${Gn.sm};
    display: flex;
    align-items: center;

    ${e=>"small"===e.$variant?Vn["body-md-regular"]:Vn["body-baseline-regular"]}
`,iv=$.label`
    flex: 1;
    display: flex;
    align-items: center;
    gap: ${qn["spacing-8"]};
    padding: ${e=>"small"===e.$variant?F`
                  ${qn["spacing-8"]} ${qn["spacing-16"]}
              `:F`10px ${qn["spacing-16"]}`};
`,sv=$(xo)`
    flex: 1;
`,av=$(oe)`
    color: ${Nn.icon};
    flex-shrink: 0;
    height: 1em;
    width: 1em;
`,lv=$(Lc)`
    flex-shrink: 0;
    align-self: stretch;
    box-sizing: content-box;
    padding: ${qn["spacing-8"]};
    margin-left: -${qn["spacing-8"]};
    color: ${Nn.icon};
    cursor: pointer;
    font-size: inherit;

    svg {
        flex-shrink: 0;
        height: 1em;
        width: 1em;
    }
`,dv=g(((r,n)=>{var{value:o,variant:i,onClear:s}=r,a=se(r,["value","variant","onClear"]);return e(ov,{$variant:i,children:[e(iv,{$variant:i,children:[t(av,{"aria-hidden":!0}),t(sv,Object.assign({ref:n,value:o,$variant:i},a))]}),o&&t(lv,{"aria-label":"Clear search",focusOutline:"browser",onClick:s,children:t(j,{"aria-hidden":!0})})]})})),cv=({listItems:n,multiSelect:o,maxSelectable:l,selectedItems:d,disableItemFocus:c,itemsLoadState:u="success",itemTruncationType:h="end",itemMaxLines:g=2,labelDisplayType:p="inline",variant:b="default",listboxId:y,matchElementWidth:v=!1,width:x,topScrollItem:w,onSelectItem:$,onSelectAll:F,onDismiss:C,onRetry:E,valueExtractor:S,listExtractor:k,renderListItem:D,renderCustomCallToAction:I,enableSearch:T,hideNoResultsDisplay:B,noResultsDescription:A,customLabels:z,searchPlaceholder:O,searchFunction:M,onSearch:_})=>{const{noResultsLabel:R="No results found.",selectAllButtonLabel:H="Select all",clearAllButtonLabel:j="Clear all"}=z||{},L=(null==z?void 0:z.searchPlaceholder)||O||"Search",P=(null==z?void 0:z.noResultsDescription)||A,{focusedIndex:W,setFocusedIndex:N}=f(jy),{elementWidth:V,setFloatingRef:Y,getFloatingProps:U,styles:q}=f(Ry),[G,Z]=a(""),[Q,X]=a(null!=n?n:[]),K=Kd(u),J=(()=>{const[e,t]=a(!1);return s((()=>{t(!0)}),[]),e})(),ee=i(null),te=i(null),re=i([]),ne=i(null),oe=i(null),ie=!!l&&!!d&&(null==d?void 0:d.length)===l,se=e=>{const t=k?k(e):null==e?void 0:e.toString();return"object"==typeof t?{title:t.title,secondaryLabel:t.secondaryLabel}:{title:null!=t?t:""}},le=m((e=>!!Xm(d,(t=>Jm(t,e)))),[d]),de=Xd((()=>null==M?void 0:M(G))),ce=Xd((()=>null==n?void 0:n.filter((e=>{const{title:t,secondaryLabel:r}=se(e),n=G.trim().toLowerCase();return t.toLowerCase().includes(n)||r&&r.toLowerCase().includes(n)})))),ue=(e,t)=>{ie&&!le(e)||(N(t),null==$||$(e,(e=>S?S(e):e)(e)))},he=e=>{const t=e.target.value;Z(t),null==_||_()},ge=()=>{var e;Z(""),null===(e=ne.current)||void 0===e||e.focus(),null==_||_()},me=()=>{null==E||E()};ae("keydown",(e=>{var t,r;switch(e.code){case"ArrowDown":if(e.preventDefault(),W<Q.length-1){const e=W+1;null===(t=re.current[e])||void 0===t||t.focus(),N(e)}break;case"ArrowUp":if(e.preventDefault(),W>0){const e=W-1;null===(r=re.current[e])||void 0===r||r.focus(),N(e)}else 0===W&&ne.current&&(ne.current.focus(),N(-1));break;case"Space":case"Enter":document.activeElement===re.current[W]&&(e.preventDefault(),Q[W]&&ue(Q[W],W))}})),s((()=>{var e;if(!w)return void(null===(e=oe.current)||void 0===e||e.scrollTo({top:0}));const t=setTimeout((()=>{if(!n)return;const e=n.indexOf(w);oe.current&&-1!==e&&(oe.current.scrollToIndex({index:e}),N(e))}),0);return()=>clearTimeout(t)}),[re,n,N,w]),s((()=>{var e,t,r;if(J)return;if(c||!n)return;const o=n.findIndex((e=>le(e)));ne.current?(N(-1),setTimeout((()=>{var e;return null===(e=ne.current)||void 0===e?void 0:e.focus()}),200)):W>0?(null===(e=oe.current)||void 0===e||e.scrollToIndex({index:W,align:"center"}),setTimeout((()=>{var e;return null===(e=re.current[W])||void 0===e?void 0:e.focus()}),200)):-1!==o?(null===(t=oe.current)||void 0===t||t.scrollToIndex({index:o,align:"center"}),N(o),setTimeout((()=>{var e;return null===(e=re.current[o])||void 0===e?void 0:e.focus()}),200)):(null===(r=oe.current)||void 0===r||r.scrollToIndex({index:0}),N(0),setTimeout((()=>{var e;return null===(e=re.current[0])||void 0===e?void 0:e.focus()}),200))}),[le,c,W,n,J,N]),s((()=>{J&&K&&(c||"success"===u&&ne.current&&(N(-1),ne.current.focus()))}),[J,K,u,N,c]),s((()=>{var e;X(null!==(e=""===G?n:M?de():ce())&&void 0!==e?e:[])}),[de,ce,n,M,G]);const pe=e=>o?t(ie&&!e?Zy:e?qy:Gy,{"aria-hidden":!0}):e?t(Yy,{"aria-hidden":!0}):t(Uy,{}),fe=(e,r)=>{const{title:n,secondaryLabel:o}=se(e);return t(vu,{displayType:p,label:n,maxLines:g,selected:r,disabled:!r&&ie,sublabel:o,truncationType:h,variant:b})},be=(n,i)=>{if(!E||"success"===u){const s=le(n),a=i===W;return t(Vy,{"aria-selected":s,"aria-multiselectable":o,"aria-disabled":!s&&ie,"data-testid":"list-item",onClick:()=>ue(n,i),onMouseEnter:()=>(e=>{N(e)})(i),ref:e=>{re.current[i]=e},role:"option",tabIndex:a?0:-1,$active:a,$selected:s,$disabled:!s&&ie,children:D?D(n,{selected:s}):e(r,{children:[pe(s),fe(n,s)]})},((e,t)=>`item_${t}__${S?S(e):e}`)(n,i))}},ye=()=>{if((T||M)&&"success"===u)return t(dv,{ref:ne,onChange:he,value:G,placeholder:L,"data-testid":"search-input","aria-label":"Enter text to search",onClear:ge,variant:b})},ve=()=>{if(d&&o&&Q.length>0&&!G&&"success"===u)return t(Qy,{children:t(Jy,{onClick:F,type:"button",$variant:b,children:l||0!==d.length?j:H})})},xe=()=>{if(!B&&(G||!T)&&0===Q.length&&"success"===u)return e(r,{children:[e(ev,{"data-testid":"list-no-results",children:[t(tv,{"data-testid":"no-result-icon"}),R]}),P&&t(nv,{"data-testid":"no-result-desc",children:P})]})},we=()=>{if(E&&"loading"===u)return e(ev,{"data-testid":"list-loading",children:[t(rv,{}),"Loading..."]})},$e=()=>{if(E&&"fail"===u)return e(ev,{"data-testid":"list-fail",children:[t(tv,{"data-testid":"load-error-icon"}),"Failed to load. ",t(Ky,{onClick:me,type:"button",$variant:b,children:"Try again."})]})},Fe=()=>{var e;const r="test"===process.env.NODE_ENV;return t(Ny,{role:"listbox",id:y,children:t(iy,Object.assign({ref:oe,style:{height:"100%"},data:Q,customScrollParent:null!==(e=ee.current)&&void 0!==e?e:void 0,itemContent:(e,t)=>be(t,e)},r?{initialItemCount:Q.length}:{}),r?Q.length:void 0)})};return e(Py,Object.assign({"data-testid":"dropdown-container",ref:Zd(ee,Y),style:q},U(),{$width:v?V:void 0,$customWidth:x,$variant:b,children:[e(Wy,{ref:te,"data-testid":"dropdown-list",children:[ye(),ve(),xe(),we(),$e(),Fe()]}),(()=>{if(I)return t("div",{"data-testid":"custom-cta",children:I(C,Q)})})()]}))},uv=$(wo)`
    display: flex;
    align-items: center;
    gap: ${qn["spacing-8"]};
    width: 100%;
    padding: ${e=>e.$readOnly?`0 ${qn["spacing-16"]}`:qn["spacing-16"]};

    ${e=>"small"===e.$variant?F`
                  ${Vn["body-md-regular"]}
                  height: calc(2.5rem - 2px); // exclude top and bottom borders
              `:F`
                  ${Vn["body-baseline-regular"]}
                  height: calc(3rem - 2px);
              `}

    &:disabled {
        cursor: not-allowed;
    }

    &:focus-visible {
        outline: 2px solid ${Nn["focus-ring"]};
        outline-offset: -2px;
    }
`,hv=$.div`
    display: flex;
    align-items: center;
    transform: rotate(${e=>e.$expanded?180:0}deg);
    transition: transform ${Yn["duration-250"]} ${Yn["ease-default"]};

    svg {
        color: ${Nn.icon};
        height: 1em;
        width: 1em;
    }
`;g((({children:r,disabled:n,expanded:o,listboxId:i,popupRole:s,readOnly:a,variant:l},d)=>e(uv,{ref:d,type:"button","aria-expanded":o,"aria-haspopup":s,"data-testid":"selector",disabled:n,"aria-controls":i,$variant:l,$readOnly:a,children:[r,!a&&t(hv,{$expanded:o,$variant:l,children:t(S,{"aria-hidden":!0})})]}))),$.li`
    display: ${e=>e.$visible?"flex":"none"};
`,$.div`
    flex: 1;
    display: flex;
    align-items: flex-start;
    gap: ${qn["spacing-8"]};
    padding: ${qn["spacing-12"]} ${qn["spacing-8"]};
    cursor: ${e=>e.$toggleable?"default":"pointer"};
    overflow: hidden; // required for label to truncate properly
    border-radius: ${Gn.none};
    outline: none;

    ${e=>e.$active&&F`
            background: ${Nn["bg-hover"]};
        `}
`,$.div`
    height: 1px;
    width: calc((1lh + ${qn["spacing-8"]}) * ${e=>e.$level});
`,$.div`
    width: 1lh;
    height: 1lh;
    color: ${Nn["icon-primary"]};
    cursor: pointer;

    svg {
        width: 1lh;
        height: 1lh;
        transition: transform ${Yn["duration-350"]}
            ${Yn["ease-standard"]};

        ${e=>{if(e.$expanded)return F`
                    transform: rotate(90deg);
                `}}
    }
`,$.div`
    width: 1lh;
    height: 1lh;
    margin-right: ${qn["spacing-8"]};
`,$.div`
    flex-shrink: 0;
    height: 1lh;
    width: ${e=>e.$hasNestedSiblings?"1lh":qn["spacing-16"]};

    display: flex;
    justify-content: center;
`,$(ie)`
    flex-shrink: 0;
    height: 1lh;
    width: 1lh;
    color: ${Nn["icon-selected"]};
`;const gv=$(vo)`
    height: 3rem;
    gap: ${qn["spacing-8"]};
    // space for clear icon
    padding-right: calc(1.25rem + ${qn["spacing-20"]});
`,mv=r=>{var{id:n,disabled:o=!1,error:l,value:d,format:c="12hr",readOnly:u,onChange:h,onFocus:g,onBlur:f,alignment:b="left",dropdownZIndex:y,startLimit:v,endLimit:x,interval:w=15}=r,$=se(r,["id","disabled","error","value","format","readOnly","onChange","onFocus","onBlur","alignment","dropdownZIndex","startLimit","endLimit","interval"]);const[F]=a((()=>Qd.generate())),[C,E]=a(null),[S,k]=a(!1),[D,I]=a(""),[T,B]=a(""),[A,z]=a(""),[O,M]=a(""),[_,R]=a(""),H=i(null),j=i(null),L=i(null),P=p((()=>Do.generateTimings(w,c,v,x)),[w,c,v,x]),W=p((()=>{if(""===O)return P;const e=Do.findClosestFlooredTime(O,P);return e?P.slice(P.indexOf(e)):[]}),[P,O]),N=m((e=>Do.parseInput(e,c)),[c]);s((()=>{var e,t;if(d){const r=null!==(e=N(d.start))&&void 0!==e?e:"",n=null!==(t=N(d.end))&&void 0!==t?t:"";B(r),z(n),M(r),R(n)}}),[d,N]),s((()=>{if(l)return void k(!1);const e=N(T),t=N(A);if(void 0===e)I("Invalid start time");else if(void 0===t)I("Invalid end time");else{if(!(""!==e&&""!==t&&Do.to24Hour(t)<Do.to24Hour(e)))return I(""),void(document.activeElement!==j.current&&document.activeElement!==L.current||k(!0));I("End time must be after start time")}k(!1)}),[T,A,N,l]);const V=e=>{o||u||(C||S||null==g||g(),E(e),k(!0))},Y=e=>{var t;o||u||(E(e),k(!0),null===(t=("start"===e?j:L).current)||void 0===t||t.select())};function U(e){var t;switch(e.code){case"Enter":"start"===C?q(T):"end"===C&&(S&&G(A),null===(t=L.current)||void 0===t||t.blur());break;case"Tab":Z(T,A,{})}}const q=e=>{Z(e,A,{goToNextInput:!0})},G=e=>{Z(T,e,{triggerOnBlur:!0})},Z=(e,t,{goToNextInput:r,triggerOnBlur:n})=>{var o,i,s;const a=null!==(o=N(e))&&void 0!==o?o:O,l=null!==(i=N(t))&&void 0!==i?i:_;B(a),z(l);a===O&&l===_||null==h||h({start:a,end:l}),r&&void 0!==N(e)&&(E("end"),null===(s=L.current)||void 0===s||s.select()),n&&(E(null),k(!1),null==f||f()),M(a),R(l)},Q=e=>{e.stopPropagation(),B(""),z(""),M(""),R("");null==h||h({start:"",end:""}),E(null),k(!1)},X=e=>{var t,r;const n=e.relatedTarget,o=(null===(t=null==n?void 0:n.matches)||void 0===t?void 0:t.call(n,"[data-floating-ui-focusable]"))||(null===(r=null==n?void 0:n.matches)||void 0===r?void 0:r.call(n,"[data-floating-ui-focus-guard]")),i=H.current&&H.current.contains(n);C&&!S&&!i&&!o&&Z(T,A,{triggerOnBlur:!0})},K=()=>{if(!u&&!o&&((null==T?void 0:T.length)>0||(null==A?void 0:A.length)>0))return t(hu,{onClick:Q,type:"button","aria-label":"Clear",children:t(au,{"aria-hidden":!0})})};return e($o,Object.assign({id:n},$,{children:[t(Ly,{children:t(Hy,{enabled:!u&&!o,isOpen:S,renderElement:()=>e(gv,{ref:H,$disabled:o,$error:l||!!D,$readOnly:u,onBlur:X,children:[e(go,{error:l||!!D,currentActive:null===C?"none":C,children:[t(Co,{ref:j,onFocus:()=>V("start"),placeholder:"start"===C?"hh:mm":"From",onChange:e=>B(e.target.value),value:T,disabled:o,readOnly:u,"data-testid":$["data-testid"]?`${$["data-testid"]}-timepicker-selector`:"timepicker-selector",onClick:()=>Y("start"),onKeyDown:U,autoComplete:"off","aria-label":"Start time input",type:"text",role:"combobox","aria-expanded":S,"aria-controls":F,"aria-autocomplete":"list"}),t(Co,{ref:L,onFocus:()=>V("end"),placeholder:"end"===C?"hh:mm":"To",onChange:e=>z(e.target.value),value:A,disabled:o,readOnly:u,"data-testid":$["data-testid"]?`${$["data-testid"]}-timepicker-selector`:"timepicker-selector",onClick:()=>Y("end"),onKeyDown:U,autoComplete:"off","aria-label":"End time input",type:"text",role:"combobox","aria-expanded":S,"aria-controls":F,"aria-autocomplete":"list"})]}),K()]}),renderDropdown:()=>t(cv,"start"===C?{listItems:P,onSelectItem:q,selectedItems:[T],disableItemFocus:!0,topScrollItem:Do.findClosestFlooredTime(N(T),P),listboxId:F}:{listItems:W,onSelectItem:G,selectedItems:[A],disableItemFocus:!0,topScrollItem:Do.findClosestFlooredTime(N(A),W),listboxId:F}),onClose:e=>{"outside-press"===e?(E(null),k(!1),null==f||f()):Z(T,A,{triggerOnBlur:!0})},onDismiss:()=>{var e;null===(e=("start"===C?j:L).current)||void 0===e||e.focus(),k(!1)},offset:8,alignment:b,fitAvailableHeight:!0,customZIndex:y})}),!l&&D&&t(iu,{id:n?`${n}-error-message`:"error-message",tabIndex:0,"data-testid":n?`${n}-error-message`:"error-message",children:D})]}))},pv=e=>{var{variant:r="dial"}=e,n=se(e,["variant"]);return t("combobox"===r?mv:ou,Object.assign({},n))};export{pv as TimeRangePicker};
//# sourceMappingURL=index.js.map
