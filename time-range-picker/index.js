import{jsxs as e,jsx as r,Fragment as t}from"react/jsx-runtime";import*as n from"react";import o,{version as i,useRef as a,useState as s,isValidElement as l,createRef as d,cloneElement as c,PureComponent as u,useEffect as g,useLayoutEffect as m,useCallback as h,useMemo as b,createContext as f,useContext as p,createElement as y,forwardRef as v,useImperativeHandle as x}from"react";import{ArrowRightIcon as w,ChevronDownIcon as F}from"@lifesg/react-icons";import $,{css as C,keyframes as E,ThemeContext as S}from"styled-components";import{ChevronDownIcon as D}from"@lifesg/react-icons/chevron-down";import{ChevronUpIcon as k}from"@lifesg/react-icons/chevron-up";import{ArrowRightIcon as B}from"@lifesg/react-icons/arrow-right";import{ExclamationCircleFillIcon as T}from"@lifesg/react-icons/exclamation-circle-fill";import{ExclamationTriangleFillIcon as A}from"@lifesg/react-icons/exclamation-triangle-fill";import{ICircleFillIcon as z}from"@lifesg/react-icons/i-circle-fill";import{TickCircleFillIcon as I}from"@lifesg/react-icons/tick-circle-fill";import O,{findDOMNode as M}from"react-dom";import{ExternalIcon as H}from"@lifesg/react-icons/external";import{CircleIcon as L}from"@lifesg/react-icons/circle";import{CircleDotIcon as R}from"@lifesg/react-icons/circle-dot";import{CrossIcon as j}from"@lifesg/react-icons/cross";import{SquareIcon as _}from"@lifesg/react-icons/square";import{SquareTickFillIcon as W}from"@lifesg/react-icons/square-tick-fill";import{TickIcon as N}from"@lifesg/react-icons/tick";import{useFloatingTree as P,useFloating as Y,autoUpdate as V,offset as U,flip as Z,shift as G,limitShift as q,size as X,useTransitionStyles as K,useClick as J,useDismiss as Q,useInteractions as ee,FloatingPortal as re,FloatingFocusManager as te}from"@floating-ui/react";import{SquareFillIcon as ne}from"@lifesg/react-icons/square-fill";import{MagnifierIcon as oe}from"@lifesg/react-icons/magnifier";import"@lifesg/react-icons/caret-right";import{MinusSquareFillIcon as ie}from"@lifesg/react-icons/minus-square-fill";function ae(e,r){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(n=Object.getOwnPropertySymbols(e);o<n.length;o++)r.indexOf(n[o])<0&&Object.prototype.propertyIsEnumerable.call(e,n[o])&&(t[n[o]]=e[n[o]])}return t}"function"==typeof SuppressedError&&SuppressedError;var se="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};function le(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var de=Array.isArray,ce="object"==typeof se&&se&&se.Object===Object&&se,ue=ce,ge="object"==typeof self&&self&&self.Object===Object&&self,me=ue||ge||Function("return this")(),he=me.Symbol,be=he,fe=Object.prototype,pe=fe.hasOwnProperty,ye=fe.toString,ve=be?be.toStringTag:void 0;var xe=function(e){var r=pe.call(e,ve),t=e[ve];try{e[ve]=void 0;var n=!0}catch(e){}var o=ye.call(e);return n&&(r?e[ve]=t:delete e[ve]),o},we=Object.prototype.toString;var Fe=xe,$e=function(e){return we.call(e)},Ce=he?he.toStringTag:void 0;var Ee=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":Ce&&Ce in Object(e)?Fe(e):$e(e)};var Se=function(e){return null!=e&&"object"==typeof e},De=Ee,ke=Se;var Be=function(e){return"symbol"==typeof e||ke(e)&&"[object Symbol]"==De(e)},Te=de,Ae=Be,ze=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,Ie=/^\w*$/;var Oe=function(e,r){if(Te(e))return!1;var t=typeof e;return!("number"!=t&&"symbol"!=t&&"boolean"!=t&&null!=e&&!Ae(e))||(Ie.test(e)||!ze.test(e)||null!=r&&e in Object(r))};var Me=function(e){var r=typeof e;return null!=e&&("object"==r||"function"==r)},He=Ee,Le=Me;var Re,je=function(e){if(!Le(e))return!1;var r=He(e);return"[object Function]"==r||"[object GeneratorFunction]"==r||"[object AsyncFunction]"==r||"[object Proxy]"==r},_e=me["__core-js_shared__"],We=(Re=/[^.]+$/.exec(_e&&_e.keys&&_e.keys.IE_PROTO||""))?"Symbol(src)_1."+Re:"";var Ne=function(e){return!!We&&We in e},Pe=Function.prototype.toString;var Ye=function(e){if(null!=e){try{return Pe.call(e)}catch(e){}try{return e+""}catch(e){}}return""},Ve=je,Ue=Ne,Ze=Me,Ge=Ye,qe=/^\[object .+?Constructor\]$/,Xe=Function.prototype,Ke=Object.prototype,Je=Xe.toString,Qe=Ke.hasOwnProperty,er=RegExp("^"+Je.call(Qe).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");var rr=function(e,r){return null==e?void 0:e[r]},tr=function(e){return!(!Ze(e)||Ue(e))&&(Ve(e)?er:qe).test(Ge(e))},nr=rr;var or=function(e,r){var t=nr(e,r);return tr(t)?t:void 0},ir=or(Object,"create"),ar=ir;var sr=function(){this.__data__=ar?ar(null):{},this.size=0};var lr=function(e){var r=this.has(e)&&delete this.__data__[e];return this.size-=r?1:0,r},dr=ir,cr=Object.prototype.hasOwnProperty;var ur=function(e){var r=this.__data__;if(dr){var t=r[e];return"__lodash_hash_undefined__"===t?void 0:t}return cr.call(r,e)?r[e]:void 0},gr=ir,mr=Object.prototype.hasOwnProperty;var hr=function(e){var r=this.__data__;return gr?void 0!==r[e]:mr.call(r,e)},br=ir;var fr=function(e,r){var t=this.__data__;return this.size+=this.has(e)?0:1,t[e]=br&&void 0===r?"__lodash_hash_undefined__":r,this},pr=sr,yr=lr,vr=ur,xr=hr,wr=fr;function Fr(e){var r=-1,t=null==e?0:e.length;for(this.clear();++r<t;){var n=e[r];this.set(n[0],n[1])}}Fr.prototype.clear=pr,Fr.prototype.delete=yr,Fr.prototype.get=vr,Fr.prototype.has=xr,Fr.prototype.set=wr;var $r=Fr;var Cr=function(){this.__data__=[],this.size=0};var Er=function(e,r){return e===r||e!=e&&r!=r},Sr=Er;var Dr=function(e,r){for(var t=e.length;t--;)if(Sr(e[t][0],r))return t;return-1},kr=Dr,Br=Array.prototype.splice;var Tr=function(e){var r=this.__data__,t=kr(r,e);return!(t<0)&&(t==r.length-1?r.pop():Br.call(r,t,1),--this.size,!0)},Ar=Dr;var zr=function(e){var r=this.__data__,t=Ar(r,e);return t<0?void 0:r[t][1]},Ir=Dr;var Or=function(e){return Ir(this.__data__,e)>-1},Mr=Dr;var Hr=function(e,r){var t=this.__data__,n=Mr(t,e);return n<0?(++this.size,t.push([e,r])):t[n][1]=r,this},Lr=Cr,Rr=Tr,jr=zr,_r=Or,Wr=Hr;function Nr(e){var r=-1,t=null==e?0:e.length;for(this.clear();++r<t;){var n=e[r];this.set(n[0],n[1])}}Nr.prototype.clear=Lr,Nr.prototype.delete=Rr,Nr.prototype.get=jr,Nr.prototype.has=_r,Nr.prototype.set=Wr;var Pr=Nr,Yr=or(me,"Map"),Vr=$r,Ur=Pr,Zr=Yr;var Gr=function(e){var r=typeof e;return"string"==r||"number"==r||"symbol"==r||"boolean"==r?"__proto__"!==e:null===e};var qr=function(e,r){var t=e.__data__;return Gr(r)?t["string"==typeof r?"string":"hash"]:t.map},Xr=qr;var Kr=function(e){var r=Xr(this,e).delete(e);return this.size-=r?1:0,r},Jr=qr;var Qr=function(e){return Jr(this,e).get(e)},et=qr;var rt=function(e){return et(this,e).has(e)},tt=qr;var nt=function(e,r){var t=tt(this,e),n=t.size;return t.set(e,r),this.size+=t.size==n?0:1,this},ot=function(){this.size=0,this.__data__={hash:new Vr,map:new(Zr||Ur),string:new Vr}},it=Kr,at=Qr,st=rt,lt=nt;function dt(e){var r=-1,t=null==e?0:e.length;for(this.clear();++r<t;){var n=e[r];this.set(n[0],n[1])}}dt.prototype.clear=ot,dt.prototype.delete=it,dt.prototype.get=at,dt.prototype.has=st,dt.prototype.set=lt;var ct=dt,ut=ct;function gt(e,r){if("function"!=typeof e||null!=r&&"function"!=typeof r)throw new TypeError("Expected a function");var t=function(){var n=arguments,o=r?r.apply(this,n):n[0],i=t.cache;if(i.has(o))return i.get(o);var a=e.apply(this,n);return t.cache=i.set(o,a)||i,a};return t.cache=new(gt.Cache||ut),t}gt.Cache=ut;var mt=gt;var ht=function(e){var r=mt(e,(function(e){return 500===t.size&&t.clear(),e})),t=r.cache;return r},bt=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,ft=/\\(\\)?/g,pt=ht((function(e){var r=[];return 46===e.charCodeAt(0)&&r.push(""),e.replace(bt,(function(e,t,n,o){r.push(n?o.replace(ft,"$1"):t||e)})),r}));var yt=function(e,r){for(var t=-1,n=null==e?0:e.length,o=Array(n);++t<n;)o[t]=r(e[t],t,e);return o},vt=de,xt=Be,wt=he?he.prototype:void 0,Ft=wt?wt.toString:void 0;var $t=function e(r){if("string"==typeof r)return r;if(vt(r))return yt(r,e)+"";if(xt(r))return Ft?Ft.call(r):"";var t=r+"";return"0"==t&&1/r==-1/0?"-0":t},Ct=$t;var Et=de,St=Oe,Dt=pt,kt=function(e){return null==e?"":Ct(e)};var Bt=function(e,r){return Et(e)?e:St(e,r)?[e]:Dt(kt(e))},Tt=Be;var At=function(e){if("string"==typeof e||Tt(e))return e;var r=e+"";return"0"==r&&1/e==-1/0?"-0":r},zt=Bt,It=At;var Ot=function(e,r){for(var t=0,n=(r=zt(r,e)).length;null!=e&&t<n;)e=e[It(r[t++])];return t&&t==n?e:void 0},Mt=Ot;var Ht=function(e,r,t){var n=null==e?void 0:Mt(e,r);return void 0===n?t:n},Lt=le(Ht);const Rt=(e,r,t)=>Lt(t,r)||Lt(e,r),jt=(e,r)=>{const t=r||e.defaultValue;return Lt(e.collections,t)},_t={collections:{default:{"width-005":.5,"width-010":1,"width-020":2,"width-040":4,solid:"solid"}},defaultValue:"default"},Wt=e=>r=>{var t;const n=r.theme,o=jt(_t,null==n?void 0:n.borderScheme);return(null===(t=null==n?void 0:n.overrides)||void 0===t?void 0:t.border)?`${Rt(o,e,n.overrides.border)}px`:`${o[e]}px`},Nt={"width-005":Wt("width-005"),"width-010":Wt("width-010"),"width-020":Wt("width-020"),"width-040":Wt("width-040"),solid:(Pt="solid",e=>{var r;const t=e.theme,n=jt(_t,null==t?void 0:t.borderScheme),o=(null===(r=null==t?void 0:t.overrides)||void 0===r?void 0:r.border)?Rt(n,Pt,t.overrides.border):n[Pt];return"function"==typeof o?o(e):o})};var Pt;const Yt={"brand-10":"#2C0C0B","brand-20":"#4C1513","brand-30":"#6C1D1B","brand-40":"#922825","brand-50":"#BF3431","brand-60":"#F15D5A","brand-70":"#F69491","brand-80":"#FABAB7","brand-90":"#FCD7D2","brand-95":"#FFEBE7","brand-100":"#FFF6F4","primary-10":"#1A122C","primary-20":"#2F1F4D","primary-30":"#422D6E","primary-40":"#5B3D97","primary-50":"#7654BC","primary-60":"#9A82CD","primary-70":"#B7A7D8","primary-80":"#CFC5E5","primary-90":"#E3DDF0","primary-95":"#F0EDF7","primary-100":"#F9F8FC","secondary-10":"#0E1723","secondary-20":"#18293D","secondary-30":"#233A57","secondary-40":"#305078","secondary-50":"#4B6A8F","secondary-60":"#7B91A9","secondary-70":"#A1B1C3","secondary-80":"#C1CBD7","secondary-90":"#DBE1E8","secondary-95":"#EBEFF2","secondary-100":"#F7F8FA","neutral-10":"#161616","neutral-20":"#282828","neutral-30":"#393939","neutral-40":"#4E4E4E","neutral-50":"#686868","neutral-60":"#8E8E8E","neutral-70":"#AFAFB0","neutral-80":"#C7CACA","neutral-90":"#DDE1E2","neutral-95":"#EDEFEF","neutral-100":"#F9F9F9","success-10":"#081A0F","success-20":"#0E2D1B","success-30":"#154126","success-40":"#1C5A34","success-50":"#257645","success-60":"#44A068","success-70":"#64C189","success-80":"#80DCA5","success-90":"#B4ECCB","success-95":"#D5F6E2","success-100":"#EFFCF4","warning-10":"#221302","warning-20":"#3B2204","warning-30":"#543106","warning-40":"#744408","warning-50":"#98590C","warning-60":"#D07A13","warning-70":"#E4A244","warning-80":"#F5C26C","warning-90":"#FADBA6","warning-95":"#FCECD4","warning-100":"#FDF7F0","error-10":"#330505","error-20":"#550808","error-30":"#750C0C","error-40":"#9E130F","error-50":"#CB2213","error-60":"#DE6C6C","error-70":"#E89B9B","error-80":"#EFBEBE","error-90":"#F5D9D9","error-95":"#F9ECEC","error-100":"#FCF7F7","info-10":"#021824","info-20":"#032B3F","info-30":"#053D59","info-40":"#06547B","info-50":"#176E9B","info-60":"#5296BE","info-70":"#82B5DA","info-80":"#ACCFE7","info-90":"#CCE3F1","info-95":"#E3F1F8","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000","primary-inverse":"#FEAB10"},Vt={"brand-10":"#1F1221","brand-20":"#371F3B","brand-30":"#4E2C53","brand-40":"#6B3E73","brand-50":"#8D5197","brand-60":"#FF3399","brand-70":"#FF88C4","brand-80":"#FFB3D9","brand-90":"#FFD4E9","brand-95":"#FFE8F3","brand-100":"#FFF8FC","primary-10":"#1F1221","primary-20":"#371F3B","primary-30":"#4E2C53","primary-40":"#6B3E73","primary-50":"#8D5197","primary-60":"#B07DB7","primary-70":"#C7A3CC","primary-80":"#D9C2DD","primary-90":"#E9DBEB","primary-95":"#F3ECF4","primary-100":"#FAF7FA","secondary-10":"#2D091B","secondary-20":"#4D0F2E","secondary-30":"#6B1540","secondary-40":"#931D58","secondary-50":"#C02673","secondary-60":"#FF409F","secondary-70":"#FF88C4","secondary-80":"#FFB3D9","secondary-90":"#FFD4E9","secondary-95":"#FFE8F3","secondary-100":"#FFF8FC","neutral-10":"#161616","neutral-20":"#282828","neutral-30":"#393939","neutral-40":"#4E4E4E","neutral-50":"#686868","neutral-60":"#8E8E8E","neutral-70":"#AFAFB0","neutral-80":"#C7CACA","neutral-90":"#DDE1E2","neutral-95":"#EDEFEF","neutral-100":"#F9F9F9","success-10":"#081A0F","success-20":"#0E2D1B","success-30":"#154126","success-40":"#1C5A34","success-50":"#257645","success-60":"#44A068","success-70":"#64C189","success-80":"#80DCA5","success-90":"#B4ECCB","success-95":"#D5F6E2","success-100":"#EFFCF4","warning-10":"#221302","warning-20":"#3B2204","warning-30":"#543106","warning-40":"#744408","warning-50":"#98590C","warning-60":"#D07A13","warning-70":"#E4A244","warning-80":"#F5C26C","warning-90":"#FADBA6","warning-95":"#FCECD4","warning-100":"#FDF7F0","error-10":"#330505","error-20":"#550808","error-30":"#750C0C","error-40":"#9E130F","error-50":"#CB2213","error-60":"#DE6C6C","error-70":"#E89B9B","error-80":"#EFBEBE","error-90":"#F5D9D9","error-95":"#F9ECEC","error-100":"#FCF7F7","info-10":"#021824","info-20":"#032B3F","info-30":"#053D59","info-40":"#06547B","info-50":"#176E9B","info-60":"#5296BE","info-70":"#82B5DA","info-80":"#ACCFE7","info-90":"#CCE3F1","info-95":"#E3F1F8","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000","primary-inverse":"#FEAB10"},Ut={"brand-10":"#2C0C0B","brand-20":"#4C1513","brand-30":"#6C1D1B","brand-40":"#922825","brand-50":"#BF3431","brand-60":"#F15D5A","brand-70":"#F69491","brand-80":"#FABAB7","brand-90":"#FCD7D2","brand-95":"#FFEBE7","brand-100":"#FFF6F4","primary-10":"#001731","primary-20":"#002752","primary-30":"#003874","primary-40":"#004D9F","primary-50":"#1768BE","primary-60":"#3C91EC","primary-70":"#6CB4FF","primary-80":"#A5CDFF","primary-90":"#CFE1FE","primary-95":"#E8F0FE","primary-100":"#F7F9FF","secondary-10":"#131529","secondary-20":"#222547","secondary-30":"#2F3565","secondary-40":"#42498B","secondary-50":"#5B62A7","secondary-60":"#858CBD","secondary-70":"#A8ADCF","secondary-80":"#C6C9E0","secondary-90":"#DDDFEC","secondary-95":"#EDEEF5","secondary-100":"#F8F8FB","neutral-10":"#161616","neutral-20":"#282828","neutral-30":"#393939","neutral-40":"#4E4E4E","neutral-50":"#686868","neutral-60":"#8E8E8E","neutral-70":"#AFAFB0","neutral-80":"#C7CACA","neutral-90":"#DDE1E2","neutral-95":"#EDEFEF","neutral-100":"#F9F9F9","success-10":"#081A0F","success-20":"#0E2D1B","success-30":"#154126","success-40":"#1C5A34","success-50":"#257645","success-60":"#44A068","success-70":"#64C189","success-80":"#80DCA5","success-90":"#B4ECCB","success-95":"#D5F6E2","success-100":"#EFFCF4","warning-10":"#221302","warning-20":"#3B2204","warning-30":"#543106","warning-40":"#744408","warning-50":"#98590C","warning-60":"#D07A13","warning-70":"#E4A244","warning-80":"#F5C26C","warning-90":"#FADBA6","warning-95":"#FCECD4","warning-100":"#FDF7F0","error-10":"#330505","error-20":"#550808","error-30":"#750C0C","error-40":"#9E130F","error-50":"#CB2213","error-60":"#DE6C6C","error-70":"#E89B9B","error-80":"#EFBEBE","error-90":"#F5D9D9","error-95":"#F9ECEC","error-100":"#FCF7F7","info-10":"#021824","info-20":"#032B3F","info-30":"#053D59","info-40":"#06547B","info-50":"#176E9B","info-60":"#5296BE","info-70":"#82B5DA","info-80":"#ACCFE7","info-90":"#CCE3F1","info-95":"#E3F1F8","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000","primary-inverse":"#FEAB10"},Zt={"brand-10":"#2C0C0B","brand-20":"#4C1513","brand-30":"#6C1D1B","brand-40":"#922825","brand-50":"#BF3431","brand-60":"#F15D5A","brand-70":"#F69491","brand-80":"#FABAB7","brand-90":"#FCD7D2","brand-95":"#FFEBE7","brand-100":"#FFF6F4","primary-10":"#0011924","primary-20":"#032B40","primary-30":"#043D5A","primary-40":"#05547B","primary-50":"#096EA1","primary-60":"#2098D3","primary-70":"#5CB9E8","primary-80":"#8BD3F6","primary-90":"#BEE6FA","primary-95":"#E2F2FA","primary-100":"#F4FAFC","secondary-10":"#131529","secondary-20":"#222547","secondary-30":"#2F3565","secondary-40":"#42498B","secondary-50":"#5B62A7","secondary-60":"#858CBD","secondary-70":"#A8ADCF","secondary-80":"#C6C9E0","secondary-90":"#DDDFEC","secondary-95":"#EDEEF5","secondary-100":"#F8F8FB","neutral-10":"#161616","neutral-20":"#282828","neutral-30":"#393939","neutral-40":"#4E4E4E","neutral-50":"#686868","neutral-60":"#8E8E8E","neutral-70":"#AFAFB0","neutral-80":"#C7CACA","neutral-90":"#DDE1E2","neutral-95":"#EDEFEF","neutral-100":"#F9F9F9","success-10":"#081A0F","success-20":"#0E2D1B","success-30":"#154126","success-40":"#1C5A34","success-50":"#257645","success-60":"#44A068","success-70":"#64C189","success-80":"#80DCA5","success-90":"#B4ECCB","success-95":"#D5F6E2","success-100":"#EFFCF4","warning-10":"#221302","warning-20":"#3B2204","warning-30":"#543106","warning-40":"#744408","warning-50":"#98590C","warning-60":"#D07A13","warning-70":"#E4A244","warning-80":"#F5C26C","warning-90":"#FADBA6","warning-95":"#FCECD4","warning-100":"#FDF7F0","error-10":"#330505","error-20":"#550808","error-30":"#750C0C","error-40":"#9E130F","error-50":"#CB2213","error-60":"#DE6C6C","error-70":"#E89B9B","error-80":"#EFBEBE","error-90":"#F5D9D9","error-95":"#F9ECEC","error-100":"#FCF7F7","info-10":"#021824","info-20":"#032B3F","info-30":"#053D59","info-40":"#06547B","info-50":"#176E9B","info-60":"#5296BE","info-70":"#82B5DA","info-80":"#ACCFE7","info-90":"#CCE3F1","info-95":"#E3F1F8","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000","primary-inverse":"#FEAB10"},Gt={"brand-10":"#001A19","brand-20":"#002D2B","brand-30":"#00413D","brand-40":"#005954","brand-50":"#00756F","brand-60":"#03A098","brand-70":"#55BFBA","brand-80":"#92D6D2","brand-90":"#BFE7E5","brand-95":"#DDF2F1","brand-100":"#F4FBFA","primary-10":"#09191D","primary-20":"#102B34","primary-30":"#173D49","primary-40":"#205666","primary-50":"#2A7086","primary-60":"#5D97A9","primary-70":"#8CB6C2","primary-80":"#B2CED6","primary-90":"#D1E2E7","primary-95":"#E8F0F3","primary-100":"#F7FAFB","secondary-10":"#001731","secondary-20":"#002752","secondary-30":"#003874","secondary-40":"#004D9F","secondary-50":"#5B62A7","secondary-60":"#858CBD","secondary-70":"#A8ADCF","secondary-80":"#C6C9E0","secondary-90":"#DDDFEC","secondary-95":"#EDEEF5","secondary-100":"#F8F8FB","neutral-10":"#161616","neutral-20":"#282828","neutral-30":"#393939","neutral-40":"#4E4E4E","neutral-50":"#686868","neutral-60":"#8E8E8E","neutral-70":"#AFAFB0","neutral-80":"#C7CACA","neutral-90":"#DDE1E2","neutral-95":"#EDEFEF","neutral-100":"#F9F9F9","success-10":"#081A0F","success-20":"#0E2D1B","success-30":"#154126","success-40":"#1C5A34","success-50":"#257645","success-60":"#44A068","success-70":"#64C189","success-80":"#80DCA5","success-90":"#B4ECCB","success-95":"#D5F6E2","success-100":"#EFFCF4","warning-10":"#221302","warning-20":"#3B2204","warning-30":"#543106","warning-40":"#744408","warning-50":"#98590C","warning-60":"#D07A13","warning-70":"#E4A244","warning-80":"#F5C26C","warning-90":"#FADBA6","warning-95":"#FCECD4","warning-100":"#FDF7F0","error-10":"#330505","error-20":"#550808","error-30":"#750C0C","error-40":"#9E130F","error-50":"#CB2213","error-60":"#DE6C6C","error-70":"#E89B9B","error-80":"#EFBEBE","error-90":"#F5D9D9","error-95":"#F9ECEC","error-100":"#FCF7F7","info-10":"#021824","info-20":"#032B3F","info-30":"#053D59","info-40":"#06547B","info-50":"#176E9B","info-60":"#5296BE","info-70":"#82B5DA","info-80":"#ACCFE7","info-90":"#CCE3F1","info-95":"#E3F1F8","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000","primary-inverse":"#FEAB10"},qt={"brand-10":"#881317","brand-20":"#B5191E","brand-30":"#B5040A","brand-40":"#D0333F","brand-50":"#DC666F","brand-60":"#E28087","brand-70":"#E7999F","brand-80":"#EDB3B7","brand-90":"#F3CCCF","brand-95":"#F9E6E7","brand-100":"#FCF2F3","primary-10":"#000000","primary-20":"#191919","primary-30":"#333333","primary-40":"#4D4D4D","primary-50":"#666666","primary-60":"#808080","primary-70":"#999999","primary-80":"#B3B3B3","primary-90":"#E6E6E6","primary-95":"#F7F7F7","primary-100":"#FFFFFF","secondary-10":"#19151D","secondary-20":"#2B2533","secondary-30":"#3E3649","secondary-40":"#564A64","secondary-50":"#6F637D","secondary-60":"#948B9F","secondary-70":"#B3ACBB","secondary-80":"#CCC8D2","secondary-90":"#E1DEE4","secondary-95":"#EFEEF1","secondary-100":"#F9F8F9","neutral-10":"#000000","neutral-20":"#191919","neutral-30":"#333333","neutral-40":"#4D4D4D","neutral-50":"#666666","neutral-60":"#808080","neutral-70":"#999999","neutral-80":"#B3B3B3","neutral-90":"#E6E6E6","neutral-95":"#F7F7F7","neutral-100":"#FFFFFF","success-10":"#081A0F","success-20":"#0E2D1B","success-30":"#154126","success-40":"#1C5A34","success-50":"#257645","success-60":"#44A068","success-70":"#64C189","success-80":"#80DCA5","success-90":"#B4ECCB","success-95":"#D5F6E2","success-100":"#EFFCF4","warning-10":"#221302","warning-20":"#3B2204","warning-30":"#543106","warning-40":"#744408","warning-50":"#98590C","warning-60":"#D07A13","warning-70":"#E4A244","warning-80":"#F5C26C","warning-90":"#FADBA6","warning-95":"#FCECD4","warning-100":"#FDF7F0","error-10":"#330505","error-20":"#550808","error-30":"#750C0C","error-40":"#9E130F","error-50":"#CB2213","error-60":"#DE6C6C","error-70":"#E89B9B","error-80":"#EFBEBE","error-90":"#F5D9D9","error-95":"#F9ECEC","error-100":"#FCF7F7","info-10":"#021824","info-20":"#032B3F","info-30":"#053D59","info-40":"#06547B","info-50":"#176E9B","info-60":"#5296BE","info-70":"#82B5DA","info-80":"#ACCFE7","info-90":"#CCE3F1","info-95":"#E3F1F8","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000","primary-inverse":"#FEAB10"},Xt={"brand-10":"#0E123A","brand-20":"#191E65","brand-30":"#232B90","brand-40":"#303BC5","brand-50":"#494CFF","brand-60":"#AD6EFF","brand-70":"#AEA4FF","brand-80":"#C5C4FF","brand-90":"#DDDCFF","brand-95":"#EDECFF","brand-100":"#F8F8FF","primary-10":"#10152B","primary-20":"#1C254B","primary-30":"#28356C","primary-40":"#38489A","primary-50":"#4D5AD7","primary-60":"#7487F2","primary-70":"#9AAAFC","primary-80":"#BDC7FD","primary-90":"#DADFFB","primary-95":"#ECEEFE","primary-100":"#F7F8FF","secondary-10":"#19151D","secondary-20":"#2B2533","secondary-30":"#3E3649","secondary-40":"#564A64","secondary-50":"#6F637D","secondary-60":"#948B9F","secondary-70":"#B3ACBB","secondary-80":"#CCC8D2","secondary-90":"#E1DEE4","secondary-95":"#EFEEF1","secondary-100":"#F9F8F9","neutral-10":"#161616","neutral-20":"#282828","neutral-30":"#393939","neutral-40":"#4E4E4E","neutral-50":"#686868","neutral-60":"#8E8E8E","neutral-70":"#AFAFB0","neutral-80":"#C7CACA","neutral-90":"#DDE1E2","neutral-95":"#EDEFEF","neutral-100":"#F9F9F9","success-10":"#081A0F","success-20":"#0E2D1B","success-30":"#154126","success-40":"#1C5A34","success-50":"#257645","success-60":"#44A068","success-70":"#64C189","success-80":"#80DCA5","success-90":"#B4ECCB","success-95":"#D5F6E2","success-100":"#EFFCF4","warning-10":"#221302","warning-20":"#3B2204","warning-30":"#543106","warning-40":"#744408","warning-50":"#98590C","warning-60":"#D07A13","warning-70":"#E4A244","warning-80":"#F5C26C","warning-90":"#FADBA6","warning-95":"#FCECD4","warning-100":"#FDF7F0","error-10":"#330505","error-20":"#550808","error-30":"#750C0C","error-40":"#9E130F","error-50":"#CB2213","error-60":"#DE6C6C","error-70":"#E89B9B","error-80":"#EFBEBE","error-90":"#F5D9D9","error-95":"#F9ECEC","error-100":"#FCF7F7","info-10":"#021824","info-20":"#032B3F","info-30":"#053D59","info-40":"#06547B","info-50":"#176E9B","info-60":"#5296BE","info-70":"#82B5DA","info-80":"#ACCFE7","info-90":"#CCE3F1","info-95":"#E3F1F8","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000","primary-inverse":"#FEAB10"},Kt={"brand-10":"#170F39","brand-20":"#281C62","brand-30":"#38268B","brand-40":"#4D34BF","brand-50":"#5735DF","brand-60":"#9986F9","brand-70":"#B2A5F8","brand-80":"#CDC2FA","brand-90":"#E2DCFC","brand-95":"#EFEDFE","brand-100":"#FAF8FD","primary-10":"#170F39","primary-20":"#281C62","primary-30":"#38268B","primary-40":"#4D34BF","primary-50":"#5735DF","primary-60":"#9986F9","primary-70":"#B2A5F8","primary-80":"#CDC2FA","primary-90":"#E2DCFC","primary-95":"#EFEDFE","primary-100":"#FAF8FD","secondary-10":"#251204","secondary-20":"#401F08","secondary-30":"#5B2C0B","secondary-40":"#7E3D0F","secondary-50":"#B04900","secondary-60":"#E26E1C","secondary-70":"#FF9445","secondary-80":"#FFBB8E","secondary-90":"#FFD9BF","secondary-95":"#FFECDF","secondary-100":"#FFF8F3","neutral-10":"#161616","neutral-20":"#282828","neutral-30":"#393939","neutral-40":"#4E4E4E","neutral-50":"#686868","neutral-60":"#8E8E8E","neutral-70":"#AFAFB0","neutral-80":"#C7CACA","neutral-90":"#DDE1E2","neutral-95":"#EDEFEF","neutral-100":"#F9F9F9","success-10":"#031B15","success-20":"#082D24","success-30":"#094134","success-40":"#0D5947","success-50":"#10755E","success-60":"#16A181","success-70":"#1EC59D","success-80":"#6FDDC2","success-90":"#AFECDE","success-95":"#D5F5ED","success-100":"#F1FCF9","warning-10":"#1F1500","warning-20":"#362500","warning-30":"#4D3501","warning-40":"#6A4801","warning-50":"#8B6001","warning-60":"#BF8301","warning-70":"#EAA102","warning-80":"#FFBF34","warning-90":"#FFDC8F","warning-95":"#FFEDC7","warning-100":"#FFF8EA","error-10":"#270F10","error-20":"#441B1B","error-30":"#612627","error-40":"#853535","error-50":"#AF4546","error-60":"#EC6162","error-70":"#F29696","error-80":"#F7BBBC","error-90":"#FAD8D8","error-95":"#FCEAEA","error-100":"#FEF7F7","info-10":"#0F1627","info-20":"#1B2745","info-30":"#273763","info-40":"#354D88","info-50":"#4665B3","info-60":"#618AF6","info-70":"#8DADFF","info-80":"#B4C9FF","info-90":"#D3DFFF","info-95":"#E9EFFF","info-100":"#F5F8FF",white:"#FFFFFF",black:"#000000","primary-inverse":"#FEAB10"},Jt={"brand-10":"#0E113C","brand-20":"#191E67","brand-30":"#232A92","brand-40":"#233FC2","brand-50":"#135CEA","brand-60":"#378FFB","brand-70":"#71B3FD","brand-80":"#9DCFFE","brand-90":"#C1E5FF","brand-95":"#DCF1FF","brand-100":"#F3FAFF","primary-10":"#0E113C","primary-20":"#191E67","primary-30":"#232A92","primary-40":"#233FC2","primary-50":"#135CEA","primary-60":"#378FFB","primary-70":"#71B3FD","primary-80":"#9DCFFE","primary-90":"#C1E5FF","primary-95":"#DCF1FF","primary-100":"#F3FAFF","secondary-10":"#34001F","secondary-20":"#540033","secondary-30":"#730045","secondary-40":"#9D0054","secondary-50":"#C61C64","secondary-60":"#DE6792","secondary-70":"#EB96B6","secondary-80":"#F5BAD2","secondary-90":"#FCD5E3","secondary-95":"#FDEBF1","secondary-100":"#FDF6F9","neutral-10":"#161616","neutral-20":"#282828","neutral-30":"#393939","neutral-40":"#4E4E4E","neutral-50":"#686868","neutral-60":"#8E8E8E","neutral-70":"#AFAFB0","neutral-80":"#C7CACA","neutral-90":"#DDE1E2","neutral-95":"#EDEFEF","neutral-100":"#F9F9F9","success-10":"#081A0F","success-20":"#0E2D1B","success-30":"#154126","success-40":"#1C5A34","success-50":"#257645","success-60":"#44A068","success-70":"#64C189","success-80":"#80DCA5","success-90":"#B4ECCB","success-95":"#D5F6E2","success-100":"#EFFCF4","warning-10":"#221302","warning-20":"#3B2204","warning-30":"#543106","warning-40":"#744408","warning-50":"#98590C","warning-60":"#D07A13","warning-70":"#E4A244","warning-80":"#F5C26C","warning-90":"#FADBA6","warning-95":"#FCECD4","warning-100":"#FDF7F0","error-10":"#330505","error-20":"#550808","error-30":"#750C0C","error-40":"#9E130F","error-50":"#CB2213","error-60":"#DE6C6C","error-70":"#E89B9B","error-80":"#EFBEBE","error-90":"#F5D9D9","error-95":"#F9ECEC","error-100":"#FCF7F7","info-10":"#021824","info-20":"#032B3F","info-30":"#053D59","info-40":"#06547B","info-50":"#176E9B","info-60":"#5296BE","info-70":"#82B5DA","info-80":"#ACCFE7","info-90":"#CCE3F1","info-95":"#E3F1F8","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000","primary-inverse":"#FEAB10"},Qt={"brand-10":"#370009","brand-20":"#4E000D","brand-30":"#640011","brand-40":"#850017","brand-50":"#9B001A","brand-60":"#EF2D4E","brand-70":"#F692A3","brand-80":"#FAB9C4","brand-90":"#FCD7DD","brand-95":"#FDEAED","brand-100":"#FEF8F9","primary-10":"#1F102A","primary-20":"#2F193F","primary-30":"#3E2053","primary-40":"#562D71","primary-50":"#663587","primary-60":"#9370AA","primary-70":"#BCA7CB","primary-80":"#D3C5DC","primary-90":"#E5DDEB","primary-95":"#F2EEF5","primary-100":"#FAF9FB","secondary-10":"#201316","secondary-20":"#311D22","secondary-30":"#3F272C","secondary-40":"#58363D","secondary-50":"#684049","secondary-60":"#AF6A7A","secondary-70":"#F393A8","secondary-80":"#FFB6C6","secondary-90":"#FFD6DF","secondary-95":"#FFE9EE","secondary-100":"#FFF7F9","neutral-10":"#161616","neutral-20":"#222222","neutral-30":"#2D2D2D","neutral-40":"#3F3F3F","neutral-50":"#4B4B4B","neutral-60":"#7E7E7E","neutral-70":"#AFAFB0","neutral-80":"#C7CACA","neutral-90":"#DDE1E2","neutral-95":"#EDEFEF","neutral-100":"#F9F9F9","success-10":"#081917","success-20":"#0D2724","success-30":"#11332E","success-40":"#174740","success-50":"#1B554C","success-60":"#2D8C7E","success-70":"#46C2AF","success-80":"#89D8CC","success-90":"#BCE9E2","success-95":"#DAF3EF","success-100":"#F0FAF9","warning-10":"#241200","warning-20":"#371C00","warning-30":"#482500","warning-40":"#633300","warning-50":"#763C00","warning-60":"#C36400","warning-70":"#FF9524","warning-80":"#FFBD77","warning-90":"#FFD9B2","warning-95":"#FFEBD6","warning-100":"#FFF7F0","error-10":"#330505","error-20":"#4B0707","error-30":"#600909","error-40":"#810D0D","error-50":"#98110F","error-60":"#D7504C","error-70":"#E89B9B","error-80":"#EFBEBE","error-90":"#F5D9D9","error-95":"#F9ECEC","error-100":"#FCF7F7","info-10":"#021824","info-20":"#032537","info-30":"#043148","info-40":"#054462","info-50":"#065175","info-60":"#3985AF","info-70":"#82B5DA","info-80":"#ACCFE7","info-90":"#CCE3F1","info-95":"#E3F1F8","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000","primary-inverse":"#FEAB10"},en={"brand-10":"#00143A","brand-20":"#00205B","brand-30":"#153368","brand-40":"#18417C","brand-50":"#00558C","brand-60":"#009CDE","brand-70":"#5AB9E7","brand-80":"#9ED0ED","brand-90":"#CAE3F4","brand-95":"#E2F0F9","brand-100":"#F4FAFD","primary-10":"#00143A","primary-20":"#00205B","primary-30":"#153368","primary-40":"#18417C","primary-50":"#00558C","primary-60":"#009CDE","primary-70":"#5AB9E7","primary-80":"#9ED0ED","primary-90":"#CAE3F4","primary-95":"#E2F0F9","primary-100":"#F4FAFD","secondary-10":"#10171F","secondary-20":"#1E252C","secondary-30":"#2F353B","secondary-40":"#3D4247","secondary-50":"#4E5255","secondary-60":"#8F9396","secondary-70":"#A9B0B3","secondary-80":"#C7CBCC","secondary-90":"#DDDFE0","secondary-95":"#ECEDEE","secondary-100":"#F8F8F9","neutral-10":"#10171F","neutral-20":"#1E252C","neutral-30":"#2F353B","neutral-40":"#3D4247","neutral-50":"#4E5255","neutral-60":"#8F9396","neutral-70":"#A9B0B3","neutral-80":"#C7CBCC","neutral-90":"#DDDFE0","neutral-95":"#ECEDEE","neutral-100":"#F8F8F9","success-10":"#001B0E","success-20":"#012A16","success-30":"#013D20","success-40":"#014D28","success-50":"#005F30","success-60":"#48A377","success-70":"#77BD9B","success-80":"#A3D5BD","success-90":"#C4E7D6","success-95":"#DBF4E7","success-100":"#ECFDF5","warning-10":"#1F1500","warning-20":"#312100","warning-30":"#473000","warning-40":"#593C00","warning-50":"#6E4B00","warning-60":"#B78C31","warning-70":"#DDA633","warning-80":"#E0C792","warning-90":"#E9DEC5","warning-95":"#F4EEE0","warning-100":"#FAF8F3","error-10":"#360109","error-20":"#50010E","error-30":"#6F0213","error-40":"#88051A","error-50":"#A60A24","error-60":"#E07083","error-70":"#EA98A6","error-80":"#F3BBC4","error-90":"#FAD5DC","error-95":"#FEE9ED","error-100":"#FFF6F8","info-10":"#00143A","info-20":"#00205B","info-30":"#153368","info-40":"#18417C","info-50":"#00558C","info-60":"#009CDE","info-70":"#5AB9E7","info-80":"#9ED0ED","info-90":"#CAE3F4","info-95":"#E2F0F9","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000","primary-inverse":"#FFCB6A"},rn={"brand-10":"#0B181F","brand-20":"#132B35","brand-30":"#1B3D4C","brand-40":"#25546A","brand-50":"#306F8B","brand-60":"#459EC6","brand-70":"#70B5D3","brand-80":"#93C7DE","brand-90":"#CBE4EF","brand-95":"#EBF4F9","brand-100":"#F3F9FB","primary-10":"#0B181F","primary-20":"#132B35","primary-30":"#1B3D4C","primary-40":"#25546A","primary-50":"#306F8B","primary-60":"#459EC6","primary-70":"#70B5D3","primary-80":"#93C7DE","primary-90":"#CBE4EF","primary-95":"#EBF4F9","primary-100":"#F3F9FB","secondary-10":"#1E1500","secondary-20":"#352500","secondary-30":"#4B3500","secondary-40":"#674A00","secondary-50":"#896100","secondary-60":"#C28A00","secondary-70":"#E1A100","secondary-80":"#FAB200","secondary-90":"#FDDD8E","secondary-95":"#FEF2D5","secondary-100":"#FFF9EA","neutral-10":"#161616","neutral-20":"#282828","neutral-30":"#393939","neutral-40":"#4E4E4E","neutral-50":"#686868","neutral-60":"#969492","neutral-70":"#AFACA7","neutral-80":"#C2BFBB","neutral-90":"#E4DFD9","neutral-95":"#F4F1EF","neutral-100":"#F9F8F7","success-10":"#071913","success-20":"#0D2D22","success-30":"#134031","success-40":"#1A5944","success-50":"#237559","success-60":"#31A77E","success-70":"#39C293","success-80":"#67D2AD","success-90":"#B8EAD9","success-95":"#E3F7F0","success-100":"#F1FBF8","warning-10":"#211403","warning-20":"#3B2205","warning-30":"#543108","warning-40":"#73440B","warning-50":"#98590E","warning-60":"#D38221","warning-70":"#DEA057","warning-80":"#E5B77F","warning-90":"#F3DDC3","warning-95":"#FAF2E8","warning-100":"#FDF9F4","error-10":"#2E0A0C","error-20":"#4F1114","error-30":"#70171C","error-40":"#972026","error-50":"#C62932","error-60":"#F7636B","error-70":"#F98D93","error-80":"#FAAAAE","error-90":"#FDD7D9","error-95":"#FEF0F1","error-100":"#FFF6F6","info-10":"#0F1627","info-20":"#1B2745","info-30":"#273763","info-40":"#354D88","info-50":"#4665B3","info-60":"#6A90F6","info-70":"#8DAAF8","info-80":"#A7BEFA","info-90":"#D4DFFD","info-95":"#EEF3FE","info-100":"#F5F8FE",white:"#FFFFFF",black:"#000000","primary-inverse":"#FAB200"},tn={collections:{lifesg:Ut,bookingsg:Yt,rbs:Xt,mylegacy:Zt,ccube:Vt,oneservice:Gt,pa:qt,a11yplayground:Kt,supportgowhere:Jt,sgwdigitallobby:Jt,imda:Qt,spf:en,smgs:rn},defaultValue:"lifesg"},nn={collections:{lifesg:Ut,bookingsg:Yt,rbs:Xt,mylegacy:Zt,ccube:Vt,oneservice:Gt,pa:qt,a11yplayground:Kt,supportgowhere:Jt,sgwdigitallobby:Jt,imda:Qt,spf:en,smgs:rn},defaultValue:"lifesg"},on=e=>r=>{var t;const n=r.theme,o="dark"===(null==n?void 0:n.colourMode),i=jt(o?nn:tn,null==n?void 0:n.colourScheme),a=o?"primitiveColourDark":"primitiveColour",s=null===(t=null==n?void 0:n.overrides)||void 0===t?void 0:t[a];return s?Rt(i,e,s):i[e]},an={"brand-10":on("brand-10"),"brand-20":on("brand-20"),"brand-30":on("brand-30"),"brand-40":on("brand-40"),"brand-50":on("brand-50"),"brand-60":on("brand-60"),"brand-70":on("brand-70"),"brand-80":on("brand-80"),"brand-90":on("brand-90"),"brand-95":on("brand-95"),"brand-100":on("brand-100"),"primary-10":on("primary-10"),"primary-20":on("primary-20"),"primary-30":on("primary-30"),"primary-40":on("primary-40"),"primary-50":on("primary-50"),"primary-60":on("primary-60"),"primary-70":on("primary-70"),"primary-80":on("primary-80"),"primary-90":on("primary-90"),"primary-95":on("primary-95"),"primary-100":on("primary-100"),"secondary-10":on("secondary-10"),"secondary-20":on("secondary-20"),"secondary-30":on("secondary-30"),"secondary-40":on("secondary-40"),"secondary-50":on("secondary-50"),"secondary-60":on("secondary-60"),"secondary-70":on("secondary-70"),"secondary-80":on("secondary-80"),"secondary-90":on("secondary-90"),"secondary-95":on("secondary-95"),"secondary-100":on("secondary-100"),"neutral-10":on("neutral-10"),"neutral-20":on("neutral-20"),"neutral-30":on("neutral-30"),"neutral-40":on("neutral-40"),"neutral-50":on("neutral-50"),"neutral-60":on("neutral-60"),"neutral-70":on("neutral-70"),"neutral-80":on("neutral-80"),"neutral-90":on("neutral-90"),"neutral-95":on("neutral-95"),"neutral-100":on("neutral-100"),"success-10":on("success-10"),"success-20":on("success-20"),"success-30":on("success-30"),"success-40":on("success-40"),"success-50":on("success-50"),"success-60":on("success-60"),"success-70":on("success-70"),"success-80":on("success-80"),"success-90":on("success-90"),"success-95":on("success-95"),"success-100":on("success-100"),"warning-10":on("warning-10"),"warning-20":on("warning-20"),"warning-30":on("warning-30"),"warning-40":on("warning-40"),"warning-50":on("warning-50"),"warning-60":on("warning-60"),"warning-70":on("warning-70"),"warning-80":on("warning-80"),"warning-90":on("warning-90"),"warning-95":on("warning-95"),"warning-100":on("warning-100"),"error-10":on("error-10"),"error-20":on("error-20"),"error-30":on("error-30"),"error-40":on("error-40"),"error-50":on("error-50"),"error-60":on("error-60"),"error-70":on("error-70"),"error-80":on("error-80"),"error-90":on("error-90"),"error-95":on("error-95"),"error-100":on("error-100"),"info-10":on("info-10"),"info-20":on("info-20"),"info-30":on("info-30"),"info-40":on("info-40"),"info-50":on("info-50"),"info-60":on("info-60"),"info-70":on("info-70"),"info-80":on("info-80"),"info-90":on("info-90"),"info-95":on("info-95"),"info-100":on("info-100"),white:on("white"),black:on("black"),"primary-inverse":on("primary-inverse")},sn={text:on("neutral-20"),"text-subtle":on("neutral-30"),"text-subtler":on("neutral-50"),"text-subtlest":on("neutral-60"),"text-primary":on("primary-50"),"text-primary-strongest":on("primary-20"),"text-hover":on("primary-40"),"text-selected":on("primary-50"),"text-selected-hover":on("primary-40"),"text-disabled":on("neutral-50"),"text-disabled-subtle":on("neutral-60"),"text-disabled-subtlest":on("neutral-80"),"text-selected-disabled":on("neutral-20"),"text-success":on("success-40"),"text-warning":on("warning-40"),"text-error":on("error-40"),"text-info":on("info-40"),"text-inverse":on("white"),icon:on("neutral-50"),"icon-subtle":on("neutral-60"),"icon-strongest":on("neutral-20"),"icon-primary":on("primary-50"),"icon-primary-subtle":on("primary-60"),"icon-primary-subtlest":on("primary-70"),"icon-hover":on("primary-40"),"icon-selected":on("primary-50"),"icon-selected-hover":on("primary-40"),"icon-disabled":on("neutral-50"),"icon-disabled-subtle":on("neutral-60"),"icon-selected-disabled":on("neutral-60"),"icon-success":on("success-50"),"icon-warning":on("warning-60"),"icon-error":on("error-50"),"icon-error-strong":on("error-40"),"icon-info":on("info-50"),"icon-inverse":on("white"),"icon-primary-inverse":on("primary-inverse"),border:on("neutral-90"),"border-strong":on("neutral-70"),"border-stronger":on("neutral-50"),"border-primary":on("primary-50"),"border-primary-subtle":on("primary-60"),"border-hover":on("primary-90"),"border-hover-strong":on("primary-60"),"border-selected":on("primary-50"),"border-selected-subtle":on("primary-70"),"border-selected-subtlest":on("primary-90"),"border-selected-hover":on("primary-40"),"border-focus":on("primary-60"),"border-focus-strong":on("primary-50"),"border-disabled":on("neutral-90"),"border-selected-disabled":on("neutral-70"),"border-success":on("success-60"),"border-warning":on("warning-60"),"border-error":on("error-60"),"border-error-focus":on("error-60"),"border-error-focus-strong":on("error-40"),"border-error-strong":on("error-40"),"border-info":on("info-60"),bg:on("white"),"bg-strong":on("neutral-100"),"bg-stronger":on("neutral-95"),"bg-strongest":on("neutral-90"),"bg-hover":on("primary-95"),"bg-hover-strong":on("primary-90"),"bg-hover-subtle":on("primary-100"),"bg-hover-neutral":on("neutral-100"),"bg-hover-neutral-strong":on("neutral-90"),"bg-selected":on("primary-95"),"bg-selected-hover":on("primary-90"),"bg-selected-strong":on("primary-90"),"bg-selected-stronger":on("primary-70"),"bg-selected-strongest":on("primary-50"),"bg-selected-strongest-hover":on("primary-40"),"bg-disabled":on("neutral-95"),"bg-selected-disabled":on("neutral-95"),"bg-selected-stronger-disabled":on("neutral-70"),"bg-success":on("success-100"),"bg-success-hover":on("success-95"),"bg-success-strong":on("success-50"),"bg-success-strong-hover":on("success-40"),"bg-warning":on("warning-100"),"bg-warning-hover":on("warning-95"),"bg-warning-strong":on("warning-50"),"bg-warning-strong-hover":on("warning-40"),"bg-info":on("info-100"),"bg-info-hover":on("info-95"),"bg-info-strong":on("info-50"),"bg-info-strong-hover":on("info-40"),"bg-error":on("error-100"),"bg-error-hover":on("error-95"),"bg-error-strong":on("error-50"),"bg-error-strong-hover":on("error-40"),"bg-inverse":on("neutral-20"),"bg-inverse-subtle":on("neutral-30"),"bg-inverse-subtler":on("neutral-50"),"bg-inverse-subtlest":on("neutral-60"),"bg-inverse-hover":on("neutral-40"),"bg-primary":on("primary-50"),"bg-primary-subtle":on("primary-60"),"bg-primary-subtler":on("primary-95"),"bg-primary-subtlest":on("primary-100"),"bg-available":"#6DD0A1","bg-primary-hover":on("primary-40"),"bg-primary-subtlest-hover":on("primary-90"),"bg-primary-subtlest-selected":on("primary-90"),"overlay-strong":"rgba(40, 40, 40, 0.85)","overlay-subtle":"rgba(40, 40, 40, 0.20)",hyperlink:on("primary-50"),"hyperlink-hover":on("primary-40"),"hyperlink-visited":on("primary-40"),"hyperlink-inverse":on("primary-inverse"),"focus-ring":on("primary-50"),"focus-ring-inverse":on("white")},ln={text:on("neutral-100"),"text-subtle":on("neutral-80"),"text-subtler":on("neutral-60"),"text-subtlest":on("neutral-50"),"text-primary":on("primary-60"),"text-primary-strongest":on("primary-90"),"text-hover":on("primary-70"),"text-selected":on("primary-60"),"text-selected-hover":on("primary-70"),"text-disabled":on("neutral-60"),"text-disabled-subtle":on("neutral-50"),"text-disabled-subtlest":on("neutral-30"),"text-selected-disabled":on("neutral-90"),"text-success":on("success-70"),"text-warning":on("warning-70"),"text-error":on("error-70"),"text-info":on("info-70"),"text-inverse":on("black"),icon:on("neutral-60"),"icon-subtle":on("neutral-50"),"icon-strongest":on("neutral-90"),"icon-primary":on("primary-60"),"icon-primary-subtle":on("primary-50"),"icon-primary-subtlest":on("primary-40"),"icon-hover":on("primary-70"),"icon-selected":on("primary-60"),"icon-selected-hover":on("primary-70"),"icon-disabled":on("neutral-60"),"icon-disabled-subtle":on("neutral-50"),"icon-selected-disabled":on("neutral-50"),"icon-success":on("success-60"),"icon-warning":on("warning-50"),"icon-error":on("error-60"),"icon-error-strong":on("error-70"),"icon-info":on("info-60"),"icon-inverse":on("black"),"icon-primary-inverse":on("primary-inverse"),border:on("neutral-20"),"border-strong":on("neutral-40"),"border-stronger":on("neutral-60"),"border-primary":on("primary-60"),"border-primary-subtle":on("primary-50"),"border-hover":on("primary-20"),"border-hover-strong":on("primary-50"),"border-selected":on("primary-60"),"border-selected-subtle":on("primary-40"),"border-selected-subtlest":on("primary-20"),"border-selected-hover":on("primary-70"),"border-focus":on("primary-50"),"border-focus-strong":on("primary-60"),"border-disabled":on("neutral-20"),"border-selected-disabled":on("neutral-40"),"border-success":on("success-50"),"border-warning":on("warning-50"),"border-error":on("error-50"),"border-error-focus":on("error-50"),"border-error-focus-strong":on("error-70"),"border-error-strong":on("error-70"),"border-info":on("info-50"),bg:on("black"),"bg-strong":on("neutral-10"),"bg-stronger":on("neutral-20"),"bg-strongest":on("neutral-20"),"bg-hover":on("primary-20"),"bg-hover-strong":on("primary-20"),"bg-hover-subtle":on("primary-10"),"bg-hover-neutral":on("neutral-10"),"bg-hover-neutral-strong":on("neutral-20"),"bg-selected":on("primary-20"),"bg-selected-hover":on("primary-20"),"bg-selected-strong":on("primary-20"),"bg-selected-stronger":on("primary-40"),"bg-selected-strongest":on("primary-60"),"bg-selected-strongest-hover":on("primary-70"),"bg-disabled":on("neutral-20"),"bg-selected-disabled":on("neutral-20"),"bg-selected-stronger-disabled":on("neutral-40"),"bg-success":on("success-10"),"bg-success-hover":on("success-20"),"bg-success-strong":on("success-60"),"bg-success-strong-hover":on("success-70"),"bg-warning":on("warning-10"),"bg-warning-hover":on("warning-20"),"bg-warning-strong":on("warning-60"),"bg-warning-strong-hover":on("warning-70"),"bg-info":on("info-10"),"bg-info-hover":on("info-20"),"bg-info-strong":on("info-60"),"bg-info-strong-hover":on("info-70"),"bg-error":on("error-10"),"bg-error-hover":on("error-20"),"bg-error-strong":on("error-60"),"bg-error-strong-hover":on("error-70"),"bg-inverse":on("neutral-90"),"bg-inverse-subtle":on("neutral-80"),"bg-inverse-subtler":on("neutral-60"),"bg-inverse-subtlest":on("neutral-50"),"bg-inverse-hover":on("neutral-70"),"bg-primary":on("primary-60"),"bg-primary-subtle":on("primary-50"),"bg-primary-subtler":on("primary-20"),"bg-primary-subtlest":on("primary-10"),"bg-available":"#185339","bg-primary-hover":on("primary-70"),"bg-primary-subtlest-hover":on("primary-20"),"bg-primary-subtlest-selected":on("primary-20"),"overlay-strong":"rgba(78, 78, 78, 0.80)","overlay-subtle":"rgba(78, 78, 78, 0.50)",hyperlink:on("primary-60"),"hyperlink-hover":on("primary-70"),"hyperlink-visited":on("primary-70"),"hyperlink-inverse":on("primary-inverse"),"focus-ring":on("primary-60"),"focus-ring-inverse":on("black")},dn={text:on("neutral-30"),"text-subtle":on("neutral-40"),"text-subtler":on("neutral-50"),"text-subtlest":on("neutral-70"),"text-primary":on("neutral-10"),"text-primary-strongest":on("neutral-10"),"text-hover":on("neutral-70"),"text-selected":on("neutral-20"),"text-selected-hover":on("neutral-10"),"text-disabled":on("neutral-50"),"text-disabled-subtle":on("neutral-70"),"text-disabled-subtlest":on("neutral-80"),"text-selected-disabled":on("neutral-40"),"text-success":on("success-40"),"text-warning":on("warning-40"),"text-error":on("brand-30"),"text-info":on("neutral-40"),"text-inverse":on("neutral-100"),icon:on("neutral-40"),"icon-subtle":on("neutral-50"),"icon-strongest":on("neutral-10"),"icon-primary":on("neutral-10"),"icon-primary-subtle":on("neutral-30"),"icon-primary-subtlest":on("neutral-60"),"icon-hover":on("neutral-70"),"icon-selected":on("brand-20"),"icon-selected-hover":on("brand-10"),"icon-disabled":on("neutral-50"),"icon-disabled-subtle":on("neutral-70"),"icon-selected-disabled":on("neutral-40"),"icon-success":on("success-40"),"icon-warning":on("warning-60"),"icon-error":on("brand-30"),"icon-error-strong":on("brand-10"),"icon-info":on("neutral-40"),"icon-inverse":on("neutral-100"),"icon-primary-inverse":"#F9B371",border:on("neutral-90"),"border-strong":on("neutral-30"),"border-stronger":on("neutral-20"),"border-primary":on("neutral-40"),"border-primary-subtle":on("neutral-60"),"border-hover":on("neutral-80"),"border-hover-strong":on("neutral-10"),"border-selected":on("brand-20"),"border-selected-subtle":on("neutral-40"),"border-selected-subtlest":on("neutral-70"),"border-selected-hover":on("neutral-10"),"border-focus":on("neutral-20"),"border-focus-strong":on("neutral-10"),"border-disabled":on("neutral-90"),"border-selected-disabled":on("neutral-80"),"border-success":on("success-40"),"border-warning":on("warning-60"),"border-error":on("brand-30"),"border-error-focus":on("brand-20"),"border-error-focus-strong":on("brand-10"),"border-error-strong":on("brand-20"),"border-info":on("neutral-40"),bg:on("neutral-100"),"bg-strong":on("neutral-95"),"bg-stronger":on("neutral-90"),"bg-strongest":on("neutral-80"),"bg-hover":on("brand-90"),"bg-hover-strong":on("brand-80"),"bg-hover-subtle":on("neutral-90"),"bg-hover-neutral":on("neutral-90"),"bg-hover-neutral-strong":on("neutral-90"),"bg-selected":on("brand-100"),"bg-selected-hover":on("brand-30"),"bg-selected-strong":on("brand-50"),"bg-selected-stronger":on("brand-40"),"bg-selected-strongest":on("brand-20"),"bg-selected-strongest-hover":on("brand-10"),"bg-disabled":on("neutral-90"),"bg-selected-disabled":on("neutral-90"),"bg-selected-stronger-disabled":on("neutral-80"),"bg-success":on("success-100"),"bg-success-hover":on("success-95"),"bg-success-strong":on("success-50"),"bg-success-strong-hover":on("success-40"),"bg-warning":on("warning-100"),"bg-warning-hover":on("warning-95"),"bg-warning-strong":on("warning-50"),"bg-warning-strong-hover":on("warning-40"),"bg-info":on("neutral-95"),"bg-info-hover":on("info-95"),"bg-info-strong":on("info-50"),"bg-info-strong-hover":on("info-40"),"bg-error":on("brand-100"),"bg-error-hover":on("error-95"),"bg-error-strong":on("error-50"),"bg-error-strong-hover":on("error-40"),"bg-inverse":on("neutral-40"),"bg-inverse-subtle":on("neutral-60"),"bg-inverse-subtler":on("neutral-70"),"bg-inverse-subtlest":on("neutral-80"),"bg-inverse-hover":on("neutral-30"),"bg-primary":on("brand-20"),"bg-primary-subtle":on("brand-60"),"bg-primary-subtler":on("brand-80"),"bg-primary-subtlest":on("brand-100"),"bg-available":on("success-60"),"bg-primary-hover":on("brand-10"),"bg-primary-subtlest-hover":on("brand-80"),"bg-primary-subtlest-selected":on("brand-40"),"overlay-strong":"rgba(25, 25, 25, 0.95)","overlay-subtle":"rgba(25, 25, 25, 0.20)",hyperlink:on("neutral-10"),"hyperlink-hover":on("neutral-40"),"hyperlink-visited":on("neutral-50"),"hyperlink-inverse":"#F8AE68","focus-ring":on("primary-50"),"focus-ring-inverse":on("white")},cn={text:on("neutral-20"),"text-subtle":on("neutral-30"),"text-subtler":on("neutral-50"),"text-subtlest":on("neutral-60"),"text-primary":on("primary-50"),"text-primary-strongest":on("primary-20"),"text-hover":on("primary-40"),"text-selected":on("primary-50"),"text-selected-hover":on("primary-40"),"text-disabled":on("neutral-50"),"text-disabled-subtle":on("neutral-60"),"text-disabled-subtlest":on("neutral-80"),"text-selected-disabled":on("neutral-20"),"text-success":on("success-40"),"text-warning":on("warning-40"),"text-error":on("error-40"),"text-info":on("info-40"),"text-inverse":on("white"),icon:on("neutral-50"),"icon-subtle":on("neutral-60"),"icon-strongest":on("neutral-20"),"icon-primary":on("primary-50"),"icon-primary-subtle":on("primary-60"),"icon-primary-subtlest":on("primary-70"),"icon-hover":on("primary-40"),"icon-selected":on("primary-50"),"icon-selected-hover":on("primary-40"),"icon-disabled":on("neutral-50"),"icon-disabled-subtle":on("neutral-60"),"icon-selected-disabled":on("neutral-60"),"icon-success":on("success-50"),"icon-warning":on("warning-60"),"icon-error":on("error-50"),"icon-error-strong":on("error-40"),"icon-info":on("info-50"),"icon-inverse":on("white"),"icon-primary-inverse":on("primary-inverse"),border:on("neutral-90"),"border-strong":on("neutral-70"),"border-stronger":on("neutral-50"),"border-primary":on("primary-50"),"border-primary-subtle":on("primary-60"),"border-hover":on("primary-90"),"border-hover-strong":on("primary-60"),"border-selected":on("primary-50"),"border-selected-subtle":on("primary-70"),"border-selected-subtlest":on("primary-90"),"border-selected-hover":on("primary-40"),"border-focus":on("primary-60"),"border-focus-strong":on("primary-50"),"border-disabled":on("neutral-90"),"border-selected-disabled":on("neutral-70"),"border-success":on("success-60"),"border-warning":on("warning-60"),"border-error":on("error-60"),"border-error-focus":on("error-60"),"border-error-focus-strong":on("error-40"),"border-error-strong":on("error-40"),"border-info":on("info-60"),bg:on("white"),"bg-strong":on("neutral-100"),"bg-stronger":on("neutral-95"),"bg-strongest":on("neutral-90"),"bg-hover":on("primary-95"),"bg-hover-strong":on("primary-90"),"bg-hover-subtle":on("primary-100"),"bg-hover-neutral":on("neutral-100"),"bg-hover-neutral-strong":on("neutral-90"),"bg-selected":on("primary-95"),"bg-selected-hover":on("primary-90"),"bg-selected-strong":on("primary-90"),"bg-selected-stronger":on("primary-70"),"bg-selected-strongest":on("primary-50"),"bg-selected-strongest-hover":on("primary-40"),"bg-disabled":on("neutral-95"),"bg-selected-disabled":on("neutral-95"),"bg-selected-stronger-disabled":on("neutral-70"),"bg-success":on("success-100"),"bg-success-hover":on("success-95"),"bg-success-strong":on("success-50"),"bg-success-strong-hover":on("success-40"),"bg-warning":on("warning-100"),"bg-warning-hover":on("warning-95"),"bg-warning-strong":on("warning-50"),"bg-warning-strong-hover":on("warning-40"),"bg-info":on("info-100"),"bg-info-hover":on("info-95"),"bg-info-strong":on("info-50"),"bg-info-strong-hover":on("info-40"),"bg-error":on("error-100"),"bg-error-hover":on("error-95"),"bg-error-strong":on("error-50"),"bg-error-strong-hover":on("error-40"),"bg-inverse":on("neutral-20"),"bg-inverse-subtle":on("neutral-30"),"bg-inverse-subtler":on("neutral-50"),"bg-inverse-subtlest":on("neutral-60"),"bg-inverse-hover":on("neutral-40"),"bg-primary":on("primary-50"),"bg-primary-subtle":on("primary-60"),"bg-primary-subtler":on("primary-95"),"bg-primary-subtlest":on("primary-100"),"bg-available":"#6DD0A1","bg-primary-hover":on("primary-40"),"bg-primary-subtlest-hover":on("primary-90"),"bg-primary-subtlest-selected":on("primary-90"),"overlay-strong":"rgba(40, 40, 40, 0.85)","overlay-subtle":"rgba(40, 40, 40, 0.20)",hyperlink:on("primary-50"),"hyperlink-hover":on("primary-40"),"hyperlink-visited":on("primary-40"),"hyperlink-inverse":on("primary-inverse"),"focus-ring":on("primary-50"),"focus-ring-inverse":on("white")},un={text:on("neutral-100"),"text-subtle":on("neutral-80"),"text-subtler":on("neutral-60"),"text-subtlest":on("neutral-50"),"text-primary":on("primary-60"),"text-primary-strongest":on("primary-90"),"text-hover":on("primary-70"),"text-selected":on("primary-60"),"text-selected-hover":on("primary-70"),"text-disabled":on("neutral-60"),"text-disabled-subtle":on("neutral-50"),"text-disabled-subtlest":on("neutral-30"),"text-selected-disabled":on("neutral-90"),"text-success":on("success-70"),"text-warning":on("warning-70"),"text-error":on("error-70"),"text-info":on("info-70"),"text-inverse":on("black"),icon:on("neutral-60"),"icon-subtle":on("neutral-50"),"icon-strongest":on("neutral-90"),"icon-primary":on("primary-60"),"icon-primary-subtle":on("primary-50"),"icon-primary-subtlest":on("primary-40"),"icon-hover":on("primary-70"),"icon-selected":on("primary-60"),"icon-selected-hover":on("primary-70"),"icon-disabled":on("neutral-60"),"icon-disabled-subtle":on("neutral-50"),"icon-selected-disabled":on("neutral-50"),"icon-success":on("success-60"),"icon-warning":on("warning-50"),"icon-error":on("error-60"),"icon-error-strong":on("error-70"),"icon-info":on("info-60"),"icon-inverse":on("black"),"icon-primary-inverse":on("primary-inverse"),border:on("neutral-20"),"border-strong":on("neutral-40"),"border-stronger":on("neutral-60"),"border-primary":on("primary-60"),"border-primary-subtle":on("primary-50"),"border-hover":on("primary-20"),"border-hover-strong":on("primary-50"),"border-selected":on("primary-60"),"border-selected-subtle":on("primary-40"),"border-selected-subtlest":on("primary-20"),"border-selected-hover":on("primary-70"),"border-focus":on("primary-50"),"border-focus-strong":on("primary-60"),"border-disabled":on("neutral-20"),"border-selected-disabled":on("neutral-40"),"border-success":on("success-50"),"border-warning":on("warning-50"),"border-error":on("error-50"),"border-error-focus":on("error-50"),"border-error-focus-strong":on("error-70"),"border-error-strong":on("error-70"),"border-info":on("info-50"),bg:on("black"),"bg-strong":on("neutral-10"),"bg-stronger":on("neutral-20"),"bg-strongest":on("neutral-20"),"bg-hover":on("primary-20"),"bg-hover-strong":on("primary-20"),"bg-hover-subtle":on("primary-10"),"bg-hover-neutral":on("neutral-10"),"bg-hover-neutral-strong":on("neutral-20"),"bg-selected":on("primary-20"),"bg-selected-hover":on("primary-20"),"bg-selected-strong":on("primary-20"),"bg-selected-stronger":on("primary-40"),"bg-selected-strongest":on("primary-60"),"bg-selected-strongest-hover":on("primary-70"),"bg-disabled":on("neutral-20"),"bg-selected-disabled":on("neutral-20"),"bg-selected-stronger-disabled":on("neutral-40"),"bg-success":on("success-10"),"bg-success-hover":on("success-20"),"bg-success-strong":on("success-60"),"bg-success-strong-hover":on("success-70"),"bg-warning":on("warning-10"),"bg-warning-hover":on("warning-20"),"bg-warning-strong":on("warning-60"),"bg-warning-strong-hover":on("warning-70"),"bg-info":on("info-10"),"bg-info-hover":on("info-20"),"bg-info-strong":on("info-60"),"bg-info-strong-hover":on("info-70"),"bg-error":on("error-10"),"bg-error-hover":on("error-20"),"bg-error-strong":on("error-60"),"bg-error-strong-hover":on("error-70"),"bg-inverse":on("neutral-90"),"bg-inverse-subtle":on("neutral-80"),"bg-inverse-subtler":on("neutral-60"),"bg-inverse-subtlest":on("neutral-50"),"bg-inverse-hover":on("neutral-70"),"bg-primary":on("primary-60"),"bg-primary-subtle":on("primary-50"),"bg-primary-subtler":on("primary-20"),"bg-primary-subtlest":on("primary-10"),"bg-available":"#185339","bg-primary-hover":on("primary-70"),"bg-primary-subtlest-hover":on("primary-20"),"bg-primary-subtlest-selected":on("primary-20"),"overlay-strong":"rgba(78, 78, 78, 0.80)","overlay-subtle":"rgba(78, 78, 78, 0.50)",hyperlink:on("primary-60"),"hyperlink-hover":on("primary-70"),"hyperlink-visited":on("primary-70"),"hyperlink-inverse":on("primary-inverse"),"focus-ring":on("primary-60"),"focus-ring-inverse":on("black")},gn={text:on("neutral-20"),"text-subtle":on("neutral-30"),"text-subtler":on("neutral-50"),"text-subtlest":on("neutral-60"),"text-primary":on("primary-50"),"text-primary-strongest":on("primary-20"),"text-hover":on("primary-40"),"text-selected":on("primary-50"),"text-selected-hover":on("primary-40"),"text-disabled":on("neutral-50"),"text-disabled-subtle":on("neutral-60"),"text-disabled-subtlest":on("neutral-80"),"text-selected-disabled":on("neutral-20"),"text-success":on("success-40"),"text-warning":on("warning-40"),"text-error":on("error-40"),"text-info":on("info-40"),"text-inverse":on("white"),icon:on("neutral-50"),"icon-subtle":on("neutral-60"),"icon-strongest":on("neutral-20"),"icon-primary":on("primary-50"),"icon-primary-subtle":on("primary-60"),"icon-primary-subtlest":on("primary-70"),"icon-hover":on("primary-40"),"icon-selected":on("primary-50"),"icon-selected-hover":on("primary-40"),"icon-disabled":on("neutral-50"),"icon-disabled-subtle":on("neutral-60"),"icon-selected-disabled":on("neutral-60"),"icon-success":on("success-50"),"icon-warning":on("warning-60"),"icon-error":on("error-50"),"icon-error-strong":on("error-40"),"icon-info":on("info-50"),"icon-inverse":on("white"),"icon-primary-inverse":on("primary-inverse"),border:on("neutral-50"),"border-strong":on("neutral-70"),"border-stronger":on("neutral-50"),"border-primary":on("primary-50"),"border-primary-subtle":on("primary-60"),"border-hover":on("primary-90"),"border-hover-strong":on("primary-60"),"border-selected":on("primary-50"),"border-selected-subtle":on("primary-70"),"border-selected-subtlest":on("primary-90"),"border-selected-hover":on("primary-40"),"border-focus":on("primary-60"),"border-focus-strong":on("primary-50"),"border-disabled":on("neutral-90"),"border-selected-disabled":on("neutral-70"),"border-success":on("success-60"),"border-warning":on("warning-60"),"border-error":on("error-60"),"border-error-focus":on("error-60"),"border-error-focus-strong":on("error-40"),"border-error-strong":on("error-40"),"border-info":on("info-60"),bg:on("white"),"bg-strong":on("neutral-100"),"bg-stronger":on("neutral-95"),"bg-strongest":on("neutral-90"),"bg-hover":on("primary-95"),"bg-hover-strong":on("primary-90"),"bg-hover-subtle":on("primary-100"),"bg-hover-neutral":on("neutral-100"),"bg-hover-neutral-strong":on("neutral-90"),"bg-selected":on("primary-95"),"bg-selected-hover":on("primary-90"),"bg-selected-strong":on("primary-90"),"bg-selected-stronger":on("primary-70"),"bg-selected-strongest":on("primary-50"),"bg-selected-strongest-hover":on("primary-40"),"bg-disabled":on("neutral-95"),"bg-selected-disabled":on("neutral-95"),"bg-selected-stronger-disabled":on("neutral-70"),"bg-success":on("success-100"),"bg-success-hover":on("success-95"),"bg-success-strong":on("success-50"),"bg-success-strong-hover":on("success-40"),"bg-warning":on("warning-100"),"bg-warning-hover":on("warning-95"),"bg-warning-strong":on("warning-50"),"bg-warning-strong-hover":on("warning-40"),"bg-info":on("info-100"),"bg-info-hover":on("info-95"),"bg-info-strong":on("info-50"),"bg-info-strong-hover":on("info-40"),"bg-error":on("error-100"),"bg-error-hover":on("error-95"),"bg-error-strong":on("error-50"),"bg-error-strong-hover":on("error-40"),"bg-inverse":on("neutral-20"),"bg-inverse-subtle":on("neutral-30"),"bg-inverse-subtler":on("neutral-50"),"bg-inverse-subtlest":on("neutral-60"),"bg-inverse-hover":on("neutral-40"),"bg-primary":on("primary-50"),"bg-primary-subtle":on("primary-60"),"bg-primary-subtler":on("primary-95"),"bg-primary-subtlest":on("primary-100"),"bg-available":"#6DD0A1","bg-primary-hover":on("primary-40"),"bg-primary-subtlest-hover":on("primary-90"),"bg-primary-subtlest-selected":on("primary-90"),"overlay-strong":"rgba(40, 40, 40, 0.85)","overlay-subtle":"rgba(40, 40, 40, 0.20)",hyperlink:on("primary-50"),"hyperlink-hover":on("primary-40"),"hyperlink-visited":on("primary-40"),"hyperlink-inverse":on("primary-inverse"),"focus-ring":on("primary-50"),"focus-ring-inverse":on("white")},mn={text:on("neutral-100"),"text-subtle":on("neutral-80"),"text-subtler":on("neutral-60"),"text-subtlest":on("neutral-50"),"text-primary":on("primary-60"),"text-primary-strongest":on("primary-90"),"text-hover":on("primary-70"),"text-selected":on("primary-60"),"text-selected-hover":on("primary-70"),"text-disabled":on("neutral-60"),"text-disabled-subtle":on("neutral-50"),"text-disabled-subtlest":on("neutral-30"),"text-selected-disabled":on("neutral-90"),"text-success":on("success-70"),"text-warning":on("warning-70"),"text-error":on("error-70"),"text-info":on("info-70"),"text-inverse":on("black"),icon:on("neutral-60"),"icon-subtle":on("neutral-50"),"icon-strongest":on("neutral-90"),"icon-primary":on("primary-60"),"icon-primary-subtle":on("primary-50"),"icon-primary-subtlest":on("primary-40"),"icon-hover":on("primary-70"),"icon-selected":on("primary-60"),"icon-selected-hover":on("primary-70"),"icon-disabled":on("neutral-60"),"icon-disabled-subtle":on("neutral-50"),"icon-selected-disabled":on("neutral-50"),"icon-success":on("success-60"),"icon-warning":on("warning-50"),"icon-error":on("error-60"),"icon-error-strong":on("error-70"),"icon-info":on("info-60"),"icon-inverse":on("black"),"icon-primary-inverse":on("primary-inverse"),border:on("neutral-50"),"border-strong":on("neutral-40"),"border-stronger":on("neutral-60"),"border-primary":on("primary-60"),"border-primary-subtle":on("primary-50"),"border-hover":on("primary-20"),"border-hover-strong":on("primary-50"),"border-selected":on("primary-60"),"border-selected-subtle":on("primary-40"),"border-selected-subtlest":on("primary-20"),"border-selected-hover":on("primary-70"),"border-focus":on("primary-50"),"border-focus-strong":on("primary-60"),"border-disabled":on("neutral-20"),"border-selected-disabled":on("neutral-40"),"border-success":on("success-50"),"border-warning":on("warning-50"),"border-error":on("error-50"),"border-error-focus":on("error-50"),"border-error-focus-strong":on("error-70"),"border-error-strong":on("error-70"),"border-info":on("info-50"),bg:on("black"),"bg-strong":on("neutral-10"),"bg-stronger":on("neutral-20"),"bg-strongest":on("neutral-20"),"bg-hover":on("primary-20"),"bg-hover-strong":on("primary-20"),"bg-hover-subtle":on("primary-10"),"bg-hover-neutral":on("neutral-10"),"bg-hover-neutral-strong":on("neutral-20"),"bg-selected":on("primary-20"),"bg-selected-hover":on("primary-20"),"bg-selected-strong":on("primary-20"),"bg-selected-stronger":on("primary-40"),"bg-selected-strongest":on("primary-60"),"bg-selected-strongest-hover":on("primary-70"),"bg-disabled":on("neutral-20"),"bg-selected-disabled":on("neutral-20"),"bg-selected-stronger-disabled":on("neutral-40"),"bg-success":on("success-10"),"bg-success-hover":on("success-20"),"bg-success-strong":on("success-60"),"bg-success-strong-hover":on("success-70"),"bg-warning":on("warning-10"),"bg-warning-hover":on("warning-20"),"bg-warning-strong":on("warning-60"),"bg-warning-strong-hover":on("warning-70"),"bg-info":on("info-10"),"bg-info-hover":on("info-20"),"bg-info-strong":on("info-60"),"bg-info-strong-hover":on("info-70"),"bg-error":on("error-10"),"bg-error-hover":on("error-20"),"bg-error-strong":on("error-60"),"bg-error-strong-hover":on("error-70"),"bg-inverse":on("neutral-90"),"bg-inverse-subtle":on("neutral-80"),"bg-inverse-subtler":on("neutral-60"),"bg-inverse-subtlest":on("neutral-50"),"bg-inverse-hover":on("neutral-70"),"bg-primary":on("primary-60"),"bg-primary-subtle":on("primary-50"),"bg-primary-subtler":on("primary-20"),"bg-primary-subtlest":on("primary-10"),"bg-available":"#185339","bg-primary-hover":on("primary-70"),"bg-primary-subtlest-hover":on("primary-20"),"bg-primary-subtlest-selected":on("primary-20"),"overlay-strong":"rgba(78, 78, 78, 0.80)","overlay-subtle":"rgba(78, 78, 78, 0.50)",hyperlink:on("primary-60"),"hyperlink-hover":on("primary-70"),"hyperlink-visited":on("primary-70"),"hyperlink-inverse":on("primary-inverse"),"focus-ring":on("primary-60"),"focus-ring-inverse":on("black")},hn={collections:{lifesg:sn,bookingsg:sn,rbs:sn,mylegacy:sn,ccube:sn,oneservice:sn,pa:dn,a11yplayground:cn,supportgowhere:sn,sgwdigitallobby:gn,imda:sn,spf:sn,smgs:sn},defaultValue:"lifesg"},bn={collections:{lifesg:ln,bookingsg:ln,rbs:ln,mylegacy:ln,ccube:ln,oneservice:ln,pa:ln,a11yplayground:un,supportgowhere:ln,sgwdigitallobby:mn,imda:ln,spf:ln,smgs:ln},defaultValue:"lifesg"},fn=e=>r=>{var t;const n=r.theme,o="dark"===(null==n?void 0:n.colourMode),i=jt(o?bn:hn,null==n?void 0:n.colourScheme),a=o?"semanticColourDark":"semanticColour",s=null===(t=null==n?void 0:n.overrides)||void 0===t?void 0:t[a],l=s?Rt(i,e,s):i[e];return"function"==typeof l?l(r):l},pn={text:fn("text"),"text-subtle":fn("text-subtle"),"text-subtler":fn("text-subtler"),"text-subtlest":fn("text-subtlest"),"text-primary":fn("text-primary"),"text-primary-strongest":fn("text-primary-strongest"),"text-hover":fn("text-hover"),"text-selected":fn("text-selected"),"text-selected-hover":fn("text-selected-hover"),"text-disabled":fn("text-disabled"),"text-disabled-subtle":fn("text-disabled-subtle"),"text-disabled-subtlest":fn("text-disabled-subtlest"),"text-selected-disabled":fn("text-selected-disabled"),"text-success":fn("text-success"),"text-warning":fn("text-warning"),"text-error":fn("text-error"),"text-info":fn("text-info"),"text-inverse":fn("text-inverse"),icon:fn("icon"),"icon-subtle":fn("icon-subtle"),"icon-strongest":fn("icon-strongest"),"icon-primary":fn("icon-primary"),"icon-primary-subtle":fn("icon-primary-subtle"),"icon-primary-subtlest":fn("icon-primary-subtlest"),"icon-hover":fn("icon-hover"),"icon-selected":fn("icon-selected"),"icon-selected-hover":fn("icon-selected-hover"),"icon-disabled":fn("icon-disabled"),"icon-disabled-subtle":fn("icon-disabled-subtle"),"icon-selected-disabled":fn("icon-selected-disabled"),"icon-success":fn("icon-success"),"icon-warning":fn("icon-warning"),"icon-error":fn("icon-error"),"icon-error-strong":fn("icon-error-strong"),"icon-info":fn("icon-info"),"icon-inverse":fn("icon-inverse"),"icon-primary-inverse":fn("icon-primary-inverse"),border:fn("border"),"border-strong":fn("border-strong"),"border-stronger":fn("border-stronger"),"border-primary":fn("border-primary"),"border-primary-subtle":fn("border-primary-subtle"),"border-hover":fn("border-hover"),"border-hover-strong":fn("border-hover-strong"),"border-selected":fn("border-selected"),"border-selected-subtle":fn("border-selected-subtle"),"border-selected-subtlest":fn("border-selected-subtlest"),"border-selected-hover":fn("border-selected-hover"),"border-focus":fn("border-focus"),"border-focus-strong":fn("border-focus-strong"),"border-disabled":fn("border-disabled"),"border-selected-disabled":fn("border-selected-disabled"),"border-success":fn("border-success"),"border-warning":fn("border-warning"),"border-error":fn("border-error"),"border-error-focus":fn("border-error-focus"),"border-error-focus-strong":fn("border-error-focus-strong"),"border-error-strong":fn("border-error-strong"),"border-info":fn("border-info"),bg:fn("bg"),"bg-strong":fn("bg-strong"),"bg-stronger":fn("bg-stronger"),"bg-strongest":fn("bg-strongest"),"bg-hover":fn("bg-hover"),"bg-hover-strong":fn("bg-hover-strong"),"bg-hover-subtle":fn("bg-hover-subtle"),"bg-hover-neutral":fn("bg-hover-neutral"),"bg-hover-neutral-strong":fn("bg-hover-neutral-strong"),"bg-selected":fn("bg-selected"),"bg-selected-hover":fn("bg-selected-hover"),"bg-selected-strong":fn("bg-selected-strong"),"bg-selected-stronger":fn("bg-selected-stronger"),"bg-selected-strongest":fn("bg-selected-strongest"),"bg-selected-strongest-hover":fn("bg-selected-strongest-hover"),"bg-disabled":fn("bg-disabled"),"bg-selected-disabled":fn("bg-selected-disabled"),"bg-selected-stronger-disabled":fn("bg-selected-stronger-disabled"),"bg-success":fn("bg-success"),"bg-success-hover":fn("bg-success-hover"),"bg-success-strong":fn("bg-success-strong"),"bg-success-strong-hover":fn("bg-success-strong-hover"),"bg-warning":fn("bg-warning"),"bg-warning-hover":fn("bg-warning-hover"),"bg-warning-strong":fn("bg-warning-strong"),"bg-warning-strong-hover":fn("bg-warning-strong-hover"),"bg-info":fn("bg-info"),"bg-info-hover":fn("bg-info-hover"),"bg-info-strong":fn("bg-info-strong"),"bg-info-strong-hover":fn("bg-info-strong-hover"),"bg-error":fn("bg-error"),"bg-error-hover":fn("bg-error-hover"),"bg-error-strong":fn("bg-error-strong"),"bg-error-strong-hover":fn("bg-error-strong-hover"),"bg-inverse":fn("bg-inverse"),"bg-inverse-subtle":fn("bg-inverse-subtle"),"bg-inverse-subtler":fn("bg-inverse-subtler"),"bg-inverse-subtlest":fn("bg-inverse-subtlest"),"bg-inverse-hover":fn("bg-inverse-hover"),"bg-primary":fn("bg-primary"),"bg-primary-subtle":fn("bg-primary-subtle"),"bg-primary-subtler":fn("bg-primary-subtler"),"bg-primary-subtlest":fn("bg-primary-subtlest"),"bg-available":fn("bg-available"),"bg-primary-hover":fn("bg-primary-hover"),"bg-primary-subtlest-hover":fn("bg-primary-subtlest-hover"),"bg-primary-subtlest-selected":fn("bg-primary-subtlest-selected"),"overlay-strong":fn("overlay-strong"),"overlay-subtle":fn("overlay-subtle"),hyperlink:fn("hyperlink"),"hyperlink-hover":fn("hyperlink-hover"),"hyperlink-visited":fn("hyperlink-visited"),"hyperlink-inverse":fn("hyperlink-inverse"),"focus-ring":fn("focus-ring"),"focus-ring-inverse":fn("focus-ring-inverse")},yn={collections:{default:{solid:e=>r=>{var t,n,o;const{thickness:i,radius:a,colour:s}=e||{},l=null!==(t="function"==typeof i?i(r):i+"px")&&void 0!==t?t:Nt["width-010"](r),d=null!==(n="function"==typeof a?a(r):a+"px")&&void 0!==n?n:0,c=null!==(o="function"==typeof s?s(r):s)&&void 0!==o?o:pn.border(r),u=Nt.solid;return C`
            border: ${l} ${u} ${c};
            border-radius: ${d};
        `},"dashed-default":e=>r=>{var t,n,o;const{thickness:i,radius:a,colour:s}=e||{},l=null!==(t="function"==typeof i?i(r):i)&&void 0!==t?t:Nt["width-010"](r),d=null!==(n="function"==typeof a?a(r):a)&&void 0!==n?n:0,c=null!==(o="function"==typeof s?s(r):s)&&void 0!==o?o:pn.border(r),u=encodeURIComponent(`<svg width='100%' height='100%' xmlns='http://www.w3.org/2000/svg'><rect width='100%' height='100%' fill='none' rx='${d}' ry='${d}' stroke='${c}' stroke-width='${l}' stroke-dasharray='4, 8' stroke-dashoffset='0' stroke-linecap='square'/></svg>`);return C`
            background-image: url("data:image/svg+xml,${u}");
            border-radius: ${d};
        `}}},defaultValue:"default"},vn=e=>1===e.length&&"theme"in e[0],xn=e=>(...r)=>t=>{const n=vn(r)?[]:r,o=vn(r)?r[0]:t,i=o.theme;return(0,jt(yn,null==i?void 0:i.borderScheme)[e])(...n)(o)},wn={solid:xn("solid"),"dashed-default":xn("dashed-default")},Fn={collections:{default:{"xxs-min":0,"xxs-max":320,"xs-min":321,"xs-max":375,"sm-min":376,"sm-max":480,"md-min":481,"md-max":768,"lg-min":769,"lg-max":1200,"xl-min":1201,"xl-max":1440,"xxl-min":1441,"xxs-column":8,"xs-column":8,"sm-column":8,"md-column":8,"lg-column":12,"xl-column":12,"xxl-column":12,"xxs-gutter":16,"xs-gutter":16,"sm-gutter":16,"md-gutter":16,"lg-gutter":32,"xl-gutter":32,"xxl-gutter":32,"xxs-margin":24,"xs-margin":24,"sm-margin":24,"md-margin":24,"lg-margin":48,"xl-margin":48,"xxl-margin":48}},defaultValue:"default"},$n=e=>r=>{var t;const n=r.theme,o=jt(Fn,null==n?void 0:n.breakpointScheme);let i;return i=(null===(t=null==n?void 0:n.overrides)||void 0===t?void 0:t.breakpoint)?Rt(o,e,n.overrides.breakpoint):o[e],i},Cn={"xxs-min":$n("xxs-min"),"xxs-max":$n("xxs-max"),"xs-min":$n("xs-min"),"xs-max":$n("xs-max"),"sm-min":$n("sm-min"),"sm-max":$n("sm-max"),"md-min":$n("md-min"),"md-max":$n("md-max"),"lg-min":$n("lg-min"),"lg-max":$n("lg-max"),"xl-min":$n("xl-min"),"xl-max":$n("xl-max"),"xxl-min":$n("xxl-min"),"xxs-column":$n("xxs-column"),"xs-column":$n("xs-column"),"sm-column":$n("sm-column"),"md-column":$n("md-column"),"lg-column":$n("lg-column"),"xl-column":$n("xl-column"),"xxl-column":$n("xxl-column"),"xxs-gutter":$n("xxs-gutter"),"xs-gutter":$n("xs-gutter"),"sm-gutter":$n("sm-gutter"),"md-gutter":$n("md-gutter"),"lg-gutter":$n("lg-gutter"),"xl-gutter":$n("xl-gutter"),"xxl-gutter":$n("xxl-gutter"),"xxs-margin":$n("xxs-margin"),"xs-margin":$n("xs-margin"),"sm-margin":$n("sm-margin"),"md-margin":$n("md-margin"),"lg-margin":$n("lg-margin"),"xl-margin":$n("xl-margin"),"xxl-margin":$n("xxl-margin")},En=e=>("max-width"===e?["xxs","xs","sm","md","lg","xl"]:["xxs","xs","sm","md","lg","xl","xxl"]).reduce(((r,t)=>(r[t]=((e,r)=>{const t=Cn["max-width"===e?`${r}-max`:`${r}-min`];return r=>{const n=t(r);return`@media screen and (${e}: ${n}px)`}})(e,t),r)),{}),Sn={MaxWidth:En("max-width"),MinWidth:En("min-width")},Dn={collections:{default:{none:0,xs:2,sm:4,md:8,lg:12,full:9999},spf:{none:0,xs:2,sm:8,md:8,lg:12,full:9999}},defaultValue:"default"},kn=e=>r=>{var t;const n=r.theme,o=jt(Dn,null==n?void 0:n.radiusScheme);return(null===(t=null==n?void 0:n.overrides)||void 0===t?void 0:t.radius)?`${Rt(o,e,n.overrides.radius)}px`:`${o[e]}px`},Bn={none:kn("none"),xs:kn("xs"),sm:kn("sm"),md:kn("md"),lg:kn("lg"),full:kn("full")},Tn={Button:{"button-radius":Bn.md,"button-default-colour-bg":pn["bg-primary"],"button-default-colour-bg-hover":pn["bg-primary-hover"],"button-default-colour-text":pn["text-inverse"],"button-secondary-colour-border":pn["border-primary"],"button-secondary-colour-text":pn["text-primary"],"button-light-colour-text":pn["text-primary"],"button-link-colour-text":pn["text-primary"]},Animation:{"loading-dots-spinner-colour":pn["icon-primary"]},Navbar:{"navbar-full-height":"6rem","navbar-full-logo-height":"2rem","navbar-compressed-height":"4rem","navbar-compressed-logo-height":"1.5rem","navbar-mobile-height":"3.5rem","navbar-mobile-logo-height":"1.5rem","navbar-colour-bg":pn.bg,"navbar-colour-icon":pn.icon,"navbar-link-colour-text":pn.text,"navbar-link-colour-text-hover":pn["text-hover"],"navbar-link-colour-text-selected-hover":pn["text-selected-hover"]},Footer:{"footer-colour-bg":pn["bg-strong"],"footer-colour-text":pn.text,"footer-link-colour-text":pn.text,"footer-link-colour-text-hover":pn["text-hover"],"footer-disclaimer-link-colour-text":pn.text,"footer-disclaimer-link-colour-text-hover":pn["text-subtler"]}},An={Button:{"button-radius":Bn.sm,"button-default-colour-bg":pn["bg-primary"],"button-default-colour-bg-hover":pn["bg-primary-hover"],"button-default-colour-text":pn["text-inverse"],"button-secondary-colour-border":pn["border-primary"],"button-secondary-colour-text":pn["text-primary"],"button-light-colour-text":pn["text-primary"],"button-link-colour-text":pn["text-primary"]},Animation:{"loading-dots-spinner-colour":pn["icon-primary"]},Navbar:{"navbar-full-height":"6rem","navbar-full-logo-height":"2rem","navbar-compressed-height":"4rem","navbar-compressed-logo-height":"1.5rem","navbar-mobile-height":"3.5rem","navbar-mobile-logo-height":"1.5rem","navbar-colour-bg":pn.bg,"navbar-colour-icon":pn.icon,"navbar-link-colour-text":pn.text,"navbar-link-colour-text-hover":pn["text-hover"],"navbar-link-colour-text-selected-hover":pn["text-selected-hover"]},Footer:{"footer-colour-bg":pn["bg-strong"],"footer-colour-text":pn.text,"footer-link-colour-text":pn.text,"footer-link-colour-text-hover":pn["text-hover"],"footer-disclaimer-link-colour-text":pn.text,"footer-disclaimer-link-colour-text-hover":pn["text-subtler"]}},zn={Button:{"button-radius":Bn.sm,"button-default-colour-bg":pn["bg-primary"],"button-default-colour-bg-hover":pn["bg-primary-hover"],"button-default-colour-text":pn["text-inverse"],"button-secondary-colour-border":pn["border-primary"],"button-secondary-colour-text":pn["text-primary"],"button-light-colour-text":pn["text-primary"],"button-link-colour-text":pn["text-primary"]},Animation:{"loading-dots-spinner-colour":an["brand-50"]},Navbar:{"navbar-full-height":"6rem","navbar-full-logo-height":"2rem","navbar-compressed-height":"4rem","navbar-compressed-logo-height":"1.5rem","navbar-mobile-height":"3.5rem","navbar-mobile-logo-height":"1.5rem","navbar-colour-bg":pn.bg,"navbar-colour-icon":pn.icon,"navbar-link-colour-text":pn.text,"navbar-link-colour-text-hover":pn["text-hover"],"navbar-link-colour-text-selected-hover":pn["text-selected-hover"]},Footer:{"footer-colour-bg":pn["bg-strong"],"footer-colour-text":pn.text,"footer-link-colour-text":pn.text,"footer-link-colour-text-hover":pn["text-hover"],"footer-disclaimer-link-colour-text":pn.text,"footer-disclaimer-link-colour-text-hover":pn["text-subtler"]}},In={collections:{default:An,pa:{Button:{"button-radius":Bn.full,"button-default-colour-bg":pn["bg-primary"],"button-default-colour-bg-hover":pn["bg-primary-hover"],"button-default-colour-text":pn["text-inverse"],"button-secondary-colour-border":pn["border-primary"],"button-secondary-colour-text":pn["text-primary"],"button-light-colour-text":pn["text-primary"],"button-link-colour-text":pn["text-primary"]},Animation:{"loading-dots-spinner-colour":pn["icon-primary"]},Navbar:{"navbar-full-height":"6rem","navbar-full-logo-height":"2rem","navbar-compressed-height":"4rem","navbar-compressed-logo-height":"1.5rem","navbar-mobile-height":"3.5rem","navbar-mobile-logo-height":"1.5rem","navbar-colour-bg":pn.bg,"navbar-colour-icon":pn.icon,"navbar-link-colour-text":pn.text,"navbar-link-colour-text-hover":pn["text-hover"],"navbar-link-colour-text-selected-hover":pn["text-selected-hover"]},Footer:{"footer-colour-bg":pn["bg-strong"],"footer-colour-text":pn.text,"footer-link-colour-text":pn.text,"footer-link-colour-text-hover":pn["text-hover"],"footer-disclaimer-link-colour-text":pn.text,"footer-disclaimer-link-colour-text-hover":pn["text-subtler"]}},a11yplayground:Tn,lifesg:zn,spf:{Button:{"button-radius":Bn.md,"button-default-colour-bg":pn["bg-primary"],"button-default-colour-bg-hover":pn["bg-primary-hover"],"button-default-colour-text":pn["text-inverse"],"button-secondary-colour-border":pn["border-primary"],"button-secondary-colour-text":pn["text-primary"],"button-light-colour-text":pn["text-primary"],"button-link-colour-text":pn["text-primary"]},Animation:{"loading-dots-spinner-colour":pn["icon-primary"]},Navbar:{"navbar-full-height":"6rem","navbar-full-logo-height":"3rem","navbar-compressed-height":"5rem","navbar-compressed-logo-height":"2rem","navbar-mobile-height":"4rem","navbar-mobile-logo-height":"2rem","navbar-colour-bg":pn.bg,"navbar-colour-icon":pn.icon,"navbar-link-colour-text":pn["text-primary-strongest"],"navbar-link-colour-text-hover":pn["text-subtler"],"navbar-link-colour-text-selected-hover":pn["text-subtler"]},Footer:{"footer-colour-bg":pn["bg-inverse"],"footer-colour-text":pn["text-inverse"],"footer-link-colour-text":pn["text-inverse"],"footer-link-colour-text-hover":pn["text-inverse"],"footer-disclaimer-link-colour-text":pn["text-inverse"],"footer-disclaimer-link-colour-text-hover":pn["text-inverse"]}},smgs:{Button:{"button-radius":Bn.md,"button-default-colour-bg":pn["bg-primary"],"button-default-colour-bg-hover":pn["bg-primary-hover"],"button-default-colour-text":pn["text-inverse"],"button-secondary-colour-border":pn["border-primary"],"button-secondary-colour-text":pn["text-primary"],"button-light-colour-text":pn["text-primary"],"button-link-colour-text":pn["text-primary"]},Animation:{"loading-dots-spinner-colour":pn["icon-primary"]},Navbar:{"navbar-full-height":"6rem","navbar-full-logo-height":"2rem","navbar-compressed-height":"4rem","navbar-compressed-logo-height":"1.5rem","navbar-mobile-height":"3.5rem","navbar-mobile-logo-height":"1.5rem","navbar-colour-bg":pn.bg,"navbar-colour-icon":pn.icon,"navbar-link-colour-text":pn.text,"navbar-link-colour-text-hover":pn["text-hover"],"navbar-link-colour-text-selected-hover":pn["text-selected-hover"]},Footer:{"footer-colour-bg":pn["bg-strong"],"footer-colour-text":pn.text,"footer-link-colour-text":pn.text,"footer-link-colour-text-hover":pn["text-hover"],"footer-disclaimer-link-colour-text":pn.text,"footer-disclaimer-link-colour-text-hover":pn["text-subtler"]}}},defaultValue:"default"},On=(e,r)=>t=>{var n,o;const i=t.theme,a=jt(In,null==i?void 0:i.componentScheme);return Mn((null===(o=null===(n=null==i?void 0:i.componentOverrides)||void 0===n?void 0:n[e])||void 0===o?void 0:o[r])||a[e][r],t)},Mn=(e,r)=>{switch(typeof e){case"function":return e(r);case"number":return e+"px";case"string":return e}},Hn=On("Button","button-radius"),Ln=On("Button","button-default-colour-bg"),Rn=On("Button","button-default-colour-bg-hover"),jn=On("Button","button-default-colour-text"),_n=On("Button","button-secondary-colour-border"),Wn=On("Button","button-secondary-colour-text"),Nn=On("Button","button-light-colour-text"),Pn=On("Button","button-link-colour-text"),Yn={collections:{default:{"heading-size-xxl":"3rem","heading-size-xl":"2.5rem","heading-size-lg":"2rem","heading-size-md":"1.625rem","heading-size-sm":"1.375rem","heading-size-xs":"1.125rem","heading-lh-xxl":"3.5rem","heading-lh-xl":"3rem","heading-lh-lg":"2.5rem","heading-lh-md":"2.25rem","heading-lh-sm":"1.75rem","heading-lh-xs":"1.625rem","heading-ls-xxl":"-0.035rem","heading-ls-xl":"-0.02rem","heading-ls-lg":"-0.02rem","heading-ls-md":"0rem","heading-ls-sm":"0rem","heading-ls-xs":"0rem","weight-light":"300","weight-regular":"400","weight-semibold":"600","weight-bold":"700","font-family":"Open Sans","heading-font-family":"Open Sans","body-font-family":"Open Sans","body-size-baseline":"1.125rem","body-size-md":"1rem","body-size-sm":"0.875rem","body-size-xs":"0.75rem","body-lh-baseline":"1.625rem","body-lh-md":"1.5rem","body-lh-sm":"1.625rem","body-lh-xs":"1.25rem","body-ls-baseline":"0rem","body-ls-md":"0.009rem","body-ls-sm":"0.008rem","body-ls-xs":"0.008rem","form-label-size":"1rem","form-description-size":"0.875rem","form-label-lh":"1.5rem","form-description-lh":"1.625rem","form-label-ls":"0.009rem","form-description-ls":"0.008rem"},bookingsg:{"heading-size-xxl":"3rem","heading-size-xl":"2.5rem","heading-size-lg":"2rem","heading-size-md":"1.625rem","heading-size-sm":"1.375rem","heading-size-xs":"1.125rem","heading-lh-xxl":"3.5rem","heading-lh-xl":"3rem","heading-lh-lg":"2.5rem","heading-lh-md":"2.25rem","heading-lh-sm":"1.75rem","heading-lh-xs":"1.75rem","heading-ls-xxl":"-0.035rem","heading-ls-xl":"-0.02rem","heading-ls-lg":"-0.02rem","heading-ls-md":"0rem","heading-ls-sm":"0rem","heading-ls-xs":"0rem","weight-light":"300","weight-regular":"400","weight-semibold":"600","weight-bold":"700","font-family":"Plus Jakarta Sans","heading-font-family":"Plus Jakarta Sans","body-font-family":"Plus Jakarta Sans","body-size-baseline":"1.125rem","body-size-md":"1rem","body-size-sm":"0.875rem","body-size-xs":"0.75rem","body-lh-baseline":"1.75rem","body-lh-md":"1.5rem","body-lh-sm":"1.6rem","body-lh-xs":"1.2rem","body-ls-baseline":"0rem","body-ls-md":"0.009rem","body-ls-sm":"0.008rem","body-ls-xs":"0.008rem","form-label-size":"1rem","form-description-size":"0.875rem","form-label-lh":"1.5rem","form-description-lh":"1.625rem","form-label-ls":"0.009rem","form-description-ls":"0.008rem"},mylegacy:{"heading-size-xxl":"3rem","heading-size-xl":"2.5rem","heading-size-lg":"2rem","heading-size-md":"1.625rem","heading-size-sm":"1.375rem","heading-size-xs":"1.125rem","heading-lh-xxl":"3.5rem","heading-lh-xl":"3rem","heading-lh-lg":"2.5rem","heading-lh-md":"2.25rem","heading-lh-sm":"1.75rem","heading-lh-xs":"1.625rem","heading-ls-xxl":"-0.035rem","heading-ls-xl":"-0.02rem","heading-ls-lg":"-0.02rem","heading-ls-md":"0rem","heading-ls-sm":"0rem","heading-ls-xs":"0rem","weight-light":"300","weight-regular":"400","weight-semibold":"600","weight-bold":"700","font-family":"Open Sans","heading-font-family":"Open Sans","body-font-family":"Open Sans","body-size-baseline":"1.125rem","body-size-md":"1rem","body-size-sm":"0.875rem","body-size-xs":"0.75rem","body-lh-baseline":"1.625rem","body-lh-md":"1.5rem","body-lh-sm":"1.625rem","body-lh-xs":"1.25rem","body-ls-baseline":"0rem","body-ls-md":"0.009rem","body-ls-sm":"0.008rem","body-ls-xs":"0.008rem","form-label-size":"1.125rem","form-description-size":"1rem","form-label-lh":"1.5rem","form-description-lh":"1.625rem","form-label-ls":"0rem","form-description-ls":"0.009rem"},pa:{"heading-size-xxl":"2.5rem","heading-size-xl":"2rem","heading-size-lg":"1.75rem","heading-size-md":"1.5rem","heading-size-sm":"1.25rem","heading-size-xs":"1rem","heading-lh-xxl":"3rem","heading-lh-xl":"2.5rem","heading-lh-lg":"2.25rem","heading-lh-md":"2rem","heading-lh-sm":"2rem","heading-lh-xs":"1.75rem","heading-ls-xxl":"-0.032rem","heading-ls-xl":"-0.032rem","heading-ls-lg":"0rem","heading-ls-md":"0rem","heading-ls-sm":"0rem","heading-ls-xs":"0rem","weight-light":"300","weight-regular":"400","weight-semibold":"600","weight-bold":"700","font-family":"Lato","heading-font-family":"Lato","body-font-family":"Lato","body-size-baseline":"1rem","body-size-md":"0.875rem","body-size-sm":"0.75rem","body-size-xs":"0.625rem","body-lh-baseline":"1.75rem","body-lh-md":"1.5rem","body-lh-sm":"1.25rem","body-lh-xs":"1.25rem","body-ls-baseline":"0rem","body-ls-md":"0.014rem","body-ls-sm":"0.012rem","body-ls-xs":"0.012rem","form-label-size":"1rem","form-description-size":"0.875rem","form-label-lh":"1.5rem","form-description-lh":"1.6rem","form-label-ls":"0.014rem","form-description-ls":"0.012rem"},a11yplayground:{"heading-size-xxl":"3rem","heading-size-xl":"2.5rem","heading-size-lg":"2rem","heading-size-md":"1.625rem","heading-size-sm":"1.375rem","heading-size-xs":"1.125rem","heading-lh-xxl":"3.5rem","heading-lh-xl":"3rem","heading-lh-lg":"2.5rem","heading-lh-md":"2.25rem","heading-lh-sm":"1.75rem","heading-lh-xs":"1.625rem","heading-ls-xxl":"-0.035rem","heading-ls-xl":"-0.02rem","heading-ls-lg":"-0.02rem","heading-ls-md":"0rem","heading-ls-sm":"0rem","heading-ls-xs":"0rem","weight-light":"300","weight-regular":"400","weight-semibold":"600","weight-bold":"700","font-family":"Atkinson Hyperlegible Next","heading-font-family":"Atkinson Hyperlegible Next","body-font-family":"Atkinson Hyperlegible Next","body-size-baseline":"1.125rem","body-size-md":"1rem","body-size-sm":"0.875rem","body-size-xs":"0.75rem","body-lh-baseline":"1.625rem","body-lh-md":"1.5rem","body-lh-sm":"1.625rem","body-lh-xs":"1.25rem","body-ls-baseline":"0rem","body-ls-md":"0.009rem","body-ls-sm":"0.008rem","body-ls-xs":"0.008rem","form-label-size":"1.125rem","form-description-size":"1rem","form-label-lh":"1.5rem","form-description-lh":"1.625rem","form-label-ls":"0rem","form-description-ls":"0.009rem"},supportgowhere:{"heading-size-xxl":"3rem","heading-size-xl":"2.5rem","heading-size-lg":"2rem","heading-size-md":"1.625rem","heading-size-sm":"1.375rem","heading-size-xs":"1.125rem","heading-lh-xxl":"3.5rem","heading-lh-xl":"3rem","heading-lh-lg":"2.5rem","heading-lh-md":"2.25rem","heading-lh-sm":"1.75rem","heading-lh-xs":"1.625rem","heading-ls-xxl":"-0.035rem","heading-ls-xl":"-0.02rem","heading-ls-lg":"-0.02rem","heading-ls-md":"0rem","heading-ls-sm":"0rem","heading-ls-xs":"0rem","weight-light":"300","weight-regular":"400","weight-semibold":"600","weight-bold":"700","font-family":"Libre Franklin","heading-font-family":"Libre Franklin","body-font-family":"Libre Franklin","body-size-baseline":"1.125rem","body-size-md":"1rem","body-size-sm":"0.875rem","body-size-xs":"0.75rem","body-lh-baseline":"1.625rem","body-lh-md":"1.5rem","body-lh-sm":"1.625rem","body-lh-xs":"1.25rem","body-ls-baseline":"0rem","body-ls-md":"0.009rem","body-ls-sm":"0.008rem","body-ls-xs":"0.008rem","form-label-size":"1rem","form-description-size":"0.875rem","form-label-lh":"1.5rem","form-description-lh":"1.625rem","form-label-ls":"0.009rem","form-description-ls":"0.008rem"},sgwdigitallobby:{"heading-size-xxl":"3.75rem","heading-size-xl":"3rem","heading-size-lg":"2.5rem","heading-size-md":"2rem","heading-size-sm":"1.625rem","heading-size-xs":"1.375rem","heading-lh-xxl":"4.5rem","heading-lh-xl":"3.5rem","heading-lh-lg":"3rem","heading-lh-md":"2.5rem","heading-lh-sm":"2.25rem","heading-lh-xs":"1.75rem","heading-ls-xxl":"-0.035rem","heading-ls-xl":"-0.035em","heading-ls-lg":"-0.02rem","heading-ls-md":"-0.02rem","heading-ls-sm":"0rem","heading-ls-xs":"0rem","weight-light":"300","weight-regular":"400","weight-semibold":"600","weight-bold":"700","font-family":"Libre Franklin","heading-font-family":"Libre Franklin","body-font-family":"Libre Franklin","body-size-baseline":"1.375rem","body-size-md":"1.2rem","body-size-sm":"1.125rem","body-size-xs":"1rem","body-lh-baseline":"1.75rem","body-lh-md":"1.625rem","body-lh-sm":"1.625rem","body-lh-xs":"1.5rem","body-ls-baseline":"0rem","body-ls-md":"0rem","body-ls-sm":"0rem","body-ls-xs":"0.009rem","form-label-size":"1.25rem","form-description-size":"1.125rem","form-label-lh":"1.625rem","form-description-lh":"1.625rem","form-label-ls":"0rem","form-description-ls":"0rem"},imda:{"heading-size-xxl":"3rem","heading-size-xl":"2.5rem","heading-size-lg":"2rem","heading-size-md":"1.625rem","heading-size-sm":"1.375rem","heading-size-xs":"1.125rem","heading-lh-xxl":"3.5rem","heading-lh-xl":"3rem","heading-lh-lg":"2.5rem","heading-lh-md":"2.25rem","heading-lh-sm":"1.75rem","heading-lh-xs":"1.625rem","heading-ls-xxl":"-0.035rem","heading-ls-xl":"-0.02rem","heading-ls-lg":"-0.02rem","heading-ls-md":"0rem","heading-ls-sm":"0rem","heading-ls-xs":"0rem","weight-light":"300","weight-regular":"400","weight-semibold":"600","weight-bold":"700","font-family":"Montserrat","heading-font-family":"Montserrat","body-font-family":"Montserrat","body-size-baseline":"1.125rem","body-size-md":"1rem","body-size-sm":"0.875rem","body-size-xs":"0.75rem","body-lh-baseline":"1.625rem","body-lh-md":"1.5rem","body-lh-sm":"1.625rem","body-lh-xs":"1.25rem","body-ls-baseline":"0rem","body-ls-md":"0.009rem","body-ls-sm":"0.008rem","body-ls-xs":"0.008rem","form-label-size":"1rem","form-description-size":"0.875rem","form-label-lh":"1.5rem","form-description-lh":"1.625rem","form-label-ls":"0.009rem","form-description-ls":"0.008rem"},spf:{"heading-size-xxl":"3.75rem","heading-size-xl":"3rem","heading-size-lg":"2.5rem","heading-size-md":"2rem","heading-size-sm":"1.75rem","heading-size-xs":"1.5rem","heading-lh-xxl":"4.5rem","heading-lh-xl":"3.5rem","heading-lh-lg":"3rem","heading-lh-md":"2.25rem","heading-lh-sm":"2rem","heading-lh-xs":"1.75rem","heading-ls-xxl":"-0.035rem","heading-ls-xl":"-0.02rem","heading-ls-lg":"-0.02rem","heading-ls-md":"0rem","heading-ls-sm":"0rem","heading-ls-xs":"0rem","weight-light":"300","weight-regular":"400","weight-semibold":"600","weight-bold":"700","font-family":"Public Sans","heading-font-family":"Public Sans","body-font-family":"Public Sans","body-size-baseline":"1.2rem","body-size-md":"1.125rem","body-size-sm":"1rem","body-size-xs":"0.875rem","body-lh-baseline":"1.5rem","body-lh-md":"1.5rem","body-lh-sm":"1.5rem","body-lh-xs":"1.125rem","body-ls-baseline":"0rem","body-ls-md":"0.009rem","body-ls-sm":"0.008rem","body-ls-xs":"0.008rem","form-label-size":"1.125rem","form-description-size":"1rem","form-label-lh":"1.5rem","form-description-lh":"1.625rem","form-label-ls":"0.009rem","form-description-ls":"0.008rem"},oneservice:{"heading-size-xxl":"2.5rem","heading-size-xl":"2rem","heading-size-lg":"1.75rem","heading-size-md":"1.375rem","heading-size-sm":"1.125rem","heading-size-xs":"1rem","heading-lh-xxl":"3.5rem","heading-lh-xl":"3rem","heading-lh-lg":"2.625rem","heading-lh-md":"2rem","heading-lh-sm":"1.625rem","heading-lh-xs":"1.5rem","heading-ls-xxl":"0rem","heading-ls-xl":"0rem","heading-ls-lg":"0rem","heading-ls-md":"0rem","heading-ls-sm":"0rem","heading-ls-xs":"0rem","weight-light":"300","weight-regular":"400","weight-semibold":"600","weight-bold":"700","font-family":"Open Sans","heading-font-family":"Open Sans","body-font-family":"Open Sans","body-size-baseline":"1rem","body-size-md":"0.875rem","body-size-sm":"0.75rem","body-size-xs":"0.75rem","body-lh-baseline":"1.5rem","body-lh-md":"1.313rem","body-lh-sm":"1.125rem","body-lh-xs":"1.125rem","body-ls-baseline":"0rem","body-ls-md":"0rem","body-ls-sm":"0rem","body-ls-xs":"0rem","form-label-size":"0.875rem","form-description-size":"0.875rem","form-label-lh":"1.313rem","form-description-lh":"1.313rem","form-label-ls":"0rem","form-description-ls":"0rem"},smgs:{"heading-size-xxl":"3rem","heading-size-xl":"2.5rem","heading-size-lg":"2rem","heading-size-md":"1.625rem","heading-size-sm":"1.375rem","heading-size-xs":"1.125rem","heading-lh-xxl":"3.5rem","heading-lh-xl":"3rem","heading-lh-lg":"2.5rem","heading-lh-md":"2.25rem","heading-lh-sm":"1.75rem","heading-lh-xs":"1.625rem","heading-ls-xxl":"-0.035rem","heading-ls-xl":"-0.02rem","heading-ls-lg":"-0.02rem","heading-ls-md":"0rem","heading-ls-sm":"0rem","heading-ls-xs":"0rem","weight-light":"300","weight-regular":"400","weight-semibold":"600","weight-bold":"700","font-family":"Poppins, Inter","heading-font-family":"Poppins","body-font-family":"Inter","body-size-baseline":"1.125rem","body-size-md":"1rem","body-size-sm":"0.875rem","body-size-xs":"0.75rem","body-lh-baseline":"1.625rem","body-lh-md":"1.5rem","body-lh-sm":"1.625rem","body-lh-xs":"1.25rem","body-ls-baseline":"0rem","body-ls-md":"0.009rem","body-ls-sm":"0.008rem","body-ls-xs":"0.008rem","form-label-size":"1rem","form-description-size":"0.875rem","form-label-lh":"1.5rem","form-description-lh":"1.625rem","form-label-ls":"0rem","form-description-ls":"0.009rem"}},defaultValue:"default"},Vn=e=>r=>{var t;const n=r.theme,o=jt(Yn,null==n?void 0:n.fontScheme);return(null===(t=null==n?void 0:n.overrides)||void 0===t?void 0:t.fontSpec)?Rt(o,e,n.overrides.fontSpec):o[e]},Un={"heading-size-xxl":Vn("heading-size-xxl"),"heading-size-xl":Vn("heading-size-xl"),"heading-size-lg":Vn("heading-size-lg"),"heading-size-md":Vn("heading-size-md"),"heading-size-sm":Vn("heading-size-sm"),"heading-size-xs":Vn("heading-size-xs"),"heading-lh-xxl":Vn("heading-lh-xxl"),"heading-lh-xl":Vn("heading-lh-xl"),"heading-lh-lg":Vn("heading-lh-lg"),"heading-lh-md":Vn("heading-lh-md"),"heading-lh-sm":Vn("heading-lh-sm"),"heading-lh-xs":Vn("heading-lh-xs"),"heading-ls-xxl":Vn("heading-ls-xxl"),"heading-ls-xl":Vn("heading-ls-xl"),"heading-ls-lg":Vn("heading-ls-lg"),"heading-ls-md":Vn("heading-ls-md"),"heading-ls-sm":Vn("heading-ls-sm"),"heading-ls-xs":Vn("heading-ls-xs"),"weight-light":Vn("weight-light"),"weight-regular":Vn("weight-regular"),"weight-semibold":Vn("weight-semibold"),"weight-bold":Vn("weight-bold"),"font-family":Vn("font-family"),"heading-font-family":Vn("heading-font-family"),"body-font-family":Vn("body-font-family"),"body-size-baseline":Vn("body-size-baseline"),"body-size-md":Vn("body-size-md"),"body-size-sm":Vn("body-size-sm"),"body-size-xs":Vn("body-size-xs"),"body-lh-baseline":Vn("body-lh-baseline"),"body-lh-md":Vn("body-lh-md"),"body-lh-sm":Vn("body-lh-sm"),"body-lh-xs":Vn("body-lh-xs"),"body-ls-baseline":Vn("body-ls-baseline"),"body-ls-md":Vn("body-ls-md"),"body-ls-sm":Vn("body-ls-sm"),"body-ls-xs":Vn("body-ls-xs"),"form-label-size":Vn("form-label-size"),"form-description-size":Vn("form-description-size"),"form-label-lh":Vn("form-label-lh"),"form-description-lh":Vn("form-description-lh"),"form-label-ls":Vn("form-label-ls"),"form-description-ls":Vn("form-description-ls")},Zn=(e,r,t,n,o,i)=>{const{disableLigatures:a}=i||{};return C`
        font-family: ${Vn(e)};
        font-size: ${Vn(r)};
        font-weight: ${Vn(t)};
        line-height: ${Vn(n)};
        letter-spacing: ${Vn(o)};

        font-variant: ${a?"no-common-ligatures":"normal"};
    `},Gn=(e={})=>({"heading-xxl-light":Zn("heading-font-family","heading-size-xxl","weight-light","heading-lh-xxl","heading-ls-xxl",e),"heading-xxl-regular":Zn("heading-font-family","heading-size-xxl","weight-regular","heading-lh-xxl","heading-ls-xxl",e),"heading-xxl-semibold":Zn("heading-font-family","heading-size-xxl","weight-semibold","heading-lh-xxl","heading-ls-xxl",e),"heading-xxl-bold":Zn("heading-font-family","heading-size-xxl","weight-bold","heading-lh-xxl","heading-ls-xxl",e),"heading-xl-light":Zn("heading-font-family","heading-size-xl","weight-light","heading-lh-xl","heading-ls-xl",e),"heading-xl-regular":Zn("heading-font-family","heading-size-xl","weight-regular","heading-lh-xl","heading-ls-xl",e),"heading-xl-semibold":Zn("heading-font-family","heading-size-xl","weight-semibold","heading-lh-xl","heading-ls-xl",e),"heading-xl-bold":Zn("heading-font-family","heading-size-xl","weight-bold","heading-lh-xl","heading-ls-xl",e),"heading-lg-light":Zn("heading-font-family","heading-size-lg","weight-light","heading-lh-lg","heading-ls-lg",e),"heading-lg-regular":Zn("heading-font-family","heading-size-lg","weight-regular","heading-lh-lg","heading-ls-lg",e),"heading-lg-semibold":Zn("heading-font-family","heading-size-lg","weight-semibold","heading-lh-lg","heading-ls-lg",e),"heading-lg-bold":Zn("heading-font-family","heading-size-lg","weight-bold","heading-lh-lg","heading-ls-lg",e),"heading-md-light":Zn("heading-font-family","heading-size-md","weight-light","heading-lh-md","heading-ls-md",e),"heading-md-regular":Zn("heading-font-family","heading-size-md","weight-regular","heading-lh-md","heading-ls-md",e),"heading-md-semibold":Zn("heading-font-family","heading-size-md","weight-semibold","heading-lh-md","heading-ls-md",e),"heading-md-bold":Zn("heading-font-family","heading-size-md","weight-bold","heading-lh-md","heading-ls-md",e),"heading-sm-light":Zn("heading-font-family","heading-size-sm","weight-light","heading-lh-sm","heading-ls-sm",e),"heading-sm-regular":Zn("heading-font-family","heading-size-sm","weight-regular","heading-lh-sm","heading-ls-sm",e),"heading-sm-semibold":Zn("heading-font-family","heading-size-sm","weight-semibold","heading-lh-sm","heading-ls-sm",e),"heading-sm-bold":Zn("heading-font-family","heading-size-sm","weight-bold","heading-lh-sm","heading-ls-sm",e),"heading-xs-light":Zn("heading-font-family","heading-size-xs","weight-light","heading-lh-xs","heading-ls-xs",e),"heading-xs-regular":Zn("heading-font-family","heading-size-xs","weight-regular","heading-lh-xs","heading-ls-xs",e),"heading-xs-semibold":Zn("heading-font-family","heading-size-xs","weight-semibold","heading-lh-xs","heading-ls-xs",e),"heading-xs-bold":Zn("heading-font-family","heading-size-xs","weight-bold","heading-lh-xs","heading-ls-xs",e),"body-baseline-light":Zn("body-font-family","body-size-baseline","weight-light","body-lh-baseline","body-ls-baseline",e),"body-baseline-regular":Zn("body-font-family","body-size-baseline","weight-regular","body-lh-baseline","body-ls-baseline",e),"body-baseline-semibold":Zn("body-font-family","body-size-baseline","weight-semibold","body-lh-baseline","body-ls-baseline",e),"body-baseline-bold":Zn("body-font-family","body-size-baseline","weight-bold","body-lh-baseline","body-ls-baseline",e),"body-md-light":Zn("body-font-family","body-size-md","weight-light","body-lh-md","body-ls-md",e),"body-md-regular":Zn("body-font-family","body-size-md","weight-regular","body-lh-md","body-ls-md",e),"body-md-semibold":Zn("body-font-family","body-size-md","weight-semibold","body-lh-md","body-ls-md",e),"body-md-bold":Zn("body-font-family","body-size-md","weight-bold","body-lh-md","body-ls-md",e),"body-sm-light":Zn("body-font-family","body-size-sm","weight-light","body-lh-sm","body-ls-sm",e),"body-sm-regular":Zn("body-font-family","body-size-sm","weight-regular","body-lh-sm","body-ls-sm",e),"body-sm-semibold":Zn("body-font-family","body-size-sm","weight-semibold","body-lh-sm","body-ls-sm",e),"body-sm-bold":Zn("body-font-family","body-size-sm","weight-bold","body-lh-sm","body-ls-sm",e),"body-xs-light":Zn("body-font-family","body-size-xs","weight-light","body-lh-xs","body-ls-xs",e),"body-xs-regular":Zn("body-font-family","body-size-xs","weight-regular","body-lh-xs","body-ls-xs",e),"body-xs-semibold":Zn("body-font-family","body-size-xs","weight-semibold","body-lh-xs","body-ls-xs",e),"body-xs-bold":Zn("body-font-family","body-size-xs","weight-bold","body-lh-xs","body-ls-xs",e),"form-label":Zn("body-font-family","form-label-size","weight-semibold","form-label-lh","form-label-ls",e),"form-description":Zn("body-font-family","form-description-size","weight-regular","form-description-lh","form-description-ls",e)}),qn=Gn({disableLigatures:!0}),Xn=Gn(),Kn=Gn({disableLigatures:!0}),Jn=Gn({disableLigatures:!0}),Qn=Gn({disableLigatures:!0}),eo={collections:{default:Xn,bookingsg:qn,mylegacy:Xn,pa:Kn,a11yplayground:Jn,supportgowhere:Qn,sgwdigitallobby:Qn,imda:Gn({disableLigatures:!0}),spf:Gn({disableLigatures:!0}),oneservice:Gn(),smgs:Gn({disableLigatures:!0})},defaultValue:"default"},ro=e=>r=>{var t;const n=r.theme,o=jt(eo,null==n?void 0:n.fontScheme),i=(null===(t=null==n?void 0:n.overrides)||void 0===t?void 0:t.font)?Rt(o,e,n.overrides.font):o[e];return"function"==typeof i?i(r):i},to={"heading-xxl-light":ro("heading-xxl-light"),"heading-xxl-regular":ro("heading-xxl-regular"),"heading-xxl-semibold":ro("heading-xxl-semibold"),"heading-xxl-bold":ro("heading-xxl-bold"),"heading-xl-light":ro("heading-xl-light"),"heading-xl-regular":ro("heading-xl-regular"),"heading-xl-semibold":ro("heading-xl-semibold"),"heading-xl-bold":ro("heading-xl-bold"),"heading-lg-light":ro("heading-lg-light"),"heading-lg-regular":ro("heading-lg-regular"),"heading-lg-semibold":ro("heading-lg-semibold"),"heading-lg-bold":ro("heading-lg-bold"),"heading-md-light":ro("heading-md-light"),"heading-md-regular":ro("heading-md-regular"),"heading-md-semibold":ro("heading-md-semibold"),"heading-md-bold":ro("heading-md-bold"),"heading-sm-light":ro("heading-sm-light"),"heading-sm-regular":ro("heading-sm-regular"),"heading-sm-semibold":ro("heading-sm-semibold"),"heading-sm-bold":ro("heading-sm-bold"),"heading-xs-light":ro("heading-xs-light"),"heading-xs-regular":ro("heading-xs-regular"),"heading-xs-semibold":ro("heading-xs-semibold"),"heading-xs-bold":ro("heading-xs-bold"),"body-baseline-light":ro("body-baseline-light"),"body-baseline-regular":ro("body-baseline-regular"),"body-baseline-semibold":ro("body-baseline-semibold"),"body-baseline-bold":ro("body-baseline-bold"),"body-md-light":ro("body-md-light"),"body-md-regular":ro("body-md-regular"),"body-md-semibold":ro("body-md-semibold"),"body-md-bold":ro("body-md-bold"),"body-sm-light":ro("body-sm-light"),"body-sm-regular":ro("body-sm-regular"),"body-sm-semibold":ro("body-sm-semibold"),"body-sm-bold":ro("body-sm-bold"),"body-xs-light":ro("body-xs-light"),"body-xs-regular":ro("body-xs-regular"),"body-xs-semibold":ro("body-xs-semibold"),"body-xs-bold":ro("body-xs-bold"),"form-label":ro("form-label"),"form-description":ro("form-description")},no={collections:{default:{"duration-150":"150ms","duration-250":"250ms","duration-350":"350ms","duration-500":"500ms","duration-800":"800ms","duration-1000":"1000ms","ease-default":"cubic-bezier(0.45, 0.05, 0.55, 0.95)","ease-standard":"cubic-bezier(0.86, 0, 0.07, 1)","ease-entrance":"cubic-bezier(0.18, 0.13, 0, 1)","ease-exit":"cubic-bezier(1, 0, 0.8, 0.85)"}},defaultValue:"default"},oo=e=>r=>{var t;const n=r.theme,o=jt(no,null==n?void 0:n.motionScheme);return(null===(t=null==n?void 0:n.overrides)||void 0===t?void 0:t.motion)?Rt(o,e,n.overrides.motion):o[e]},io={"duration-150":oo("duration-150"),"duration-250":oo("duration-250"),"duration-350":oo("duration-350"),"duration-500":oo("duration-500"),"duration-800":oo("duration-800"),"duration-1000":oo("duration-1000"),"ease-default":oo("ease-default"),"ease-standard":oo("ease-standard"),"ease-entrance":oo("ease-entrance"),"ease-exit":oo("ease-exit")},ao={collections:{default:{"spacing-0":0,"spacing-4":4,"spacing-8":8,"spacing-12":12,"spacing-16":16,"spacing-20":20,"spacing-24":24,"spacing-32":32,"spacing-40":40,"spacing-48":48,"spacing-64":64,"spacing-72":72,"layout-xs":8,"layout-sm":16,"layout-md":24,"layout-lg":32,"layout-xl":48,"layout-xxl":64,"layout-xxxl":128}},defaultValue:"default"},so=e=>r=>{var t;const n=r.theme,o=jt(ao,null==n?void 0:n.spacingScheme);return(null===(t=null==n?void 0:n.overrides)||void 0===t?void 0:t.spacing)?`${Rt(o,e,n.overrides.spacing)}px`:`${o[e]}px`},lo={"spacing-0":so("spacing-0"),"spacing-4":so("spacing-4"),"spacing-8":so("spacing-8"),"spacing-12":so("spacing-12"),"spacing-16":so("spacing-16"),"spacing-20":so("spacing-20"),"spacing-24":so("spacing-24"),"spacing-32":so("spacing-32"),"spacing-40":so("spacing-40"),"spacing-48":so("spacing-48"),"spacing-64":so("spacing-64"),"spacing-72":so("spacing-72"),"layout-xs":so("layout-xs"),"layout-sm":so("layout-sm"),"layout-md":so("layout-md"),"layout-lg":so("layout-lg"),"layout-xl":so("layout-xl"),"layout-xxl":so("layout-xxl"),"layout-xxxl":so("layout-xxxl")},co=(e,r)=>Object.assign(Object.assign({},e),{colourMode:r}),uo=Object.assign(Object.assign({},pn),{Primitive:an}),go=Object.assign(Object.assign({},to),{Spec:Un}),mo=io,ho=Object.assign(Object.assign({},Nt),{Util:wn}),bo=lo,fo=Bn,po=Cn,yo=Sn,vo={colourScheme:"lifesg",fontScheme:"default",motionScheme:"default",borderScheme:"default",spacingScheme:"default",radiusScheme:"default",shadowScheme:"default",breakpointScheme:"default",resourceScheme:"lifesg",componentScheme:"lifesg",_v2:{colorScheme:"base",textStyleScheme:"base",designTokenScheme:"base",resourceScheme:"base"}},xo={colourScheme:"bookingsg",fontScheme:"bookingsg",motionScheme:"default",borderScheme:"default",spacingScheme:"default",radiusScheme:"default",shadowScheme:"default",breakpointScheme:"default",resourceScheme:"bookingsg",_v2:{colorScheme:"bookingsg",textStyleScheme:"base",designTokenScheme:"base",resourceScheme:"bookingsg"}},wo={colourScheme:"ccube",fontScheme:"default",motionScheme:"default",borderScheme:"default",spacingScheme:"default",radiusScheme:"default",shadowScheme:"default",breakpointScheme:"default",resourceScheme:"ccube",_v2:{colorScheme:"ccube",textStyleScheme:"base",designTokenScheme:"base",resourceScheme:"ccube"}},Fo={colourScheme:"mylegacy",fontScheme:"mylegacy",motionScheme:"default",borderScheme:"default",spacingScheme:"default",radiusScheme:"default",shadowScheme:"default",breakpointScheme:"default",resourceScheme:"mylegacy",_v2:{colorScheme:"mylegacy",textStyleScheme:"base",designTokenScheme:"base",resourceScheme:"mylegacy"}},$o={colourScheme:"rbs",fontScheme:"default",motionScheme:"default",borderScheme:"default",spacingScheme:"default",radiusScheme:"default",shadowScheme:"default",breakpointScheme:"default",resourceScheme:"rbs",_v2:{colorScheme:"rbs",textStyleScheme:"base",designTokenScheme:"rbs",resourceScheme:"rbs"}},Co={colourScheme:"oneservice",fontScheme:"oneservice",motionScheme:"default",borderScheme:"default",spacingScheme:"default",radiusScheme:"default",shadowScheme:"default",breakpointScheme:"default",resourceScheme:"oneservice"},Eo={colourScheme:"pa",fontScheme:"pa",motionScheme:"default",borderScheme:"default",spacingScheme:"default",radiusScheme:"default",shadowScheme:"default",breakpointScheme:"default",resourceScheme:"pa",componentScheme:"pa"},So={colourScheme:"a11yplayground",fontScheme:"a11yplayground",motionScheme:"default",borderScheme:"default",spacingScheme:"default",radiusScheme:"default",shadowScheme:"default",breakpointScheme:"default",resourceScheme:"a11yplayground",componentScheme:"a11yplayground"},Do={colourScheme:"supportgowhere",fontScheme:"supportgowhere",motionScheme:"default",borderScheme:"default",spacingScheme:"default",radiusScheme:"default",shadowScheme:"default",breakpointScheme:"default",resourceScheme:"supportgowhere",componentScheme:"default"},ko={colourScheme:"sgwdigitallobby",fontScheme:"sgwdigitallobby",motionScheme:"default",borderScheme:"default",spacingScheme:"default",radiusScheme:"default",shadowScheme:"default",breakpointScheme:"default",resourceScheme:"supportgowhere",componentScheme:"default"},Bo={colourScheme:"imda",fontScheme:"imda",motionScheme:"default",borderScheme:"default",spacingScheme:"default",radiusScheme:"default",shadowScheme:"default",breakpointScheme:"default",resourceScheme:"imda",componentScheme:"default"},To={colourScheme:"spf",fontScheme:"spf",motionScheme:"default",borderScheme:"default",spacingScheme:"default",radiusScheme:"spf",shadowScheme:"default",breakpointScheme:"default",resourceScheme:"spf",componentScheme:"spf"},Ao={colourScheme:"smgs",fontScheme:"smgs",motionScheme:"default",borderScheme:"default",spacingScheme:"default",radiusScheme:"default",shadowScheme:"default",breakpointScheme:"default",resourceScheme:"smgs",componentScheme:"smgs"};Object.assign(Object.assign({},vo),{light:co(vo,"light"),dark:co(vo,"dark")}),Object.assign(Object.assign({},xo),{light:co(xo,"light"),dark:co(xo,"dark")}),Object.assign(Object.assign({},wo),{light:co(wo,"light"),dark:co(wo,"dark")}),Object.assign(Object.assign({},Fo),{light:co(Fo,"light"),dark:co(Fo,"dark")}),Object.assign(Object.assign({},$o),{light:co($o,"light"),dark:co($o,"dark")}),Object.assign(Object.assign({},Co),{light:co(Co,"light"),dark:co(Co,"dark")}),Object.assign(Object.assign({},Eo),{light:co(Eo,"light"),dark:co(Eo,"dark")}),Object.assign(Object.assign({},So),{light:co(So,"light"),dark:co(So,"dark")}),Object.assign(Object.assign({},Do),{light:co(Do,"light"),dark:co(Do,"dark")}),Object.assign(Object.assign({},ko),{light:co(ko,"light"),dark:co(ko,"dark")}),Object.assign(Object.assign({},Bo),{light:co(Bo,"light"),dark:co(Bo,"dark")}),Object.assign(Object.assign({},To),{light:co(To,"light"),dark:co(To,"dark")}),Object.assign(Object.assign({},Ao),{light:co(Ao,"light"),dark:co(Ao,"dark")});const zo=$.div`
    position: relative;
    height: 100%;
    display: flex;
    flex: 1;

    ${e=>{if(e.$wrap)return C`
                /* Parent container need to provide space */
                flex-wrap: wrap;

                [data-id="range-container-elem1-container"],
                [data-id="range-container-elem2-container"] {
                    // 100% - Icon size - 2padding
                    max-width: calc(
                        100% - ${go.Spec["body-size-baseline"]} -
                            ${bo["spacing-16"]}
                    );
                    flex: unset;
                }

                [data-id="range-container-elem2-container"] {
                    margin-top: ${bo["spacing-8"]};
                }
            `}}
`,Io=$.div`
    width: 100%; // Force next flex item to break to next line
`,Oo=$.div`
    display: flex;
    flex: 1;
    align-items: center;
`,Mo=$(w)`
    color: ${uo.icon};
    width: ${go.Spec["body-size-baseline"]};
    height: ${go.Spec["body-size-baseline"]};
    flex-shrink: 0;
    margin: 0 ${bo["spacing-8"]};
    align-self: center;
`,Ho=$.div`
    position: absolute;
    background: ${e=>e.$error?uo["border-error-focus-strong"]:uo["border-focus-strong"]};
    height: 2px;
    // half - half padding - half icon width
    width: calc(
        50% - ${bo["spacing-8"]} - (${go.Spec["body-size-baseline"]} / 2)
    );
    transition: left ${mo["duration-350"]} ${mo["ease-standard"]},
        opacity ${mo["duration-350"]} ${mo["ease-standard"]};
    left: 0;
    bottom: 0;

    ${e=>{switch(e.$position){case"start":return C`
                    opacity: 1;
                `;case"end":return C`
                    left: calc(50% + ${bo["spacing-16"]});
                    opacity: 1;
                `;case"none":return C`
                    opacity: 0;
                `}}}

    ${e=>{if(e.$wrap)return C`
                display: none;
            `}}
`,Lo=({children:t,currentActive:n,error:o,className:i,wrap:a})=>{const[s,l]=t;return e(zo,{className:i,$wrap:a,children:[r(Oo,{"data-id":"range-container-elem1-container",children:s}),r(Mo,{"aria-hidden":"true"}),a&&r(Io,{}),r(Oo,{"data-id":"range-container-elem2-container",children:l}),r(Ho,{"data-id":"range-container-indicator",$position:n,$error:o,$wrap:a})]})},Ro=C`
    outline-offset: -1px;
    outline: ${ho["width-020"]} ${ho.solid} ${uo["border-focus"]};
`,jo=C`
    outline-color: ${uo["border-focus"]};
`,_o=C`
    outline-color: ${uo["border-disabled"]};
`,Wo=C`
    outline-color: ${uo["border-error-focus"]};
`,No=C`
    outline: none;
`,Po=$.div`
    border: ${ho["width-010"]} ${ho.solid} ${uo.border};
    border-radius: ${fo.sm};
    background: ${uo.bg};

    &:focus-within {
        ${Ro}
    }
    ${e=>e.$focused&&!e.$noBorder&&Ro}

    ${e=>e.$readOnly?C`
                border-color: transparent;
                padding: 0;
                background: transparent !important;

                &:focus-within {
                    ${jo}
                }
                ${e.$focused&&jo}
            `:e.$disabled?C`
                background: ${uo["bg-disabled"]};
                cursor: not-allowed;

                &:focus-within {
                    ${_o}
                }
                ${e.$focused&&_o}
            `:e.$error?C`
                border-color: ${uo["border-error"]};

                &:focus-within {
                    ${Wo}
                }
                ${e.$focused&&Wo}
            `:void 0}
    ${e=>{if(e.$noBorder)return C`
                border-color: transparent;
                background: transparent;
                &:focus-within {
                    ${No}
                }
            `}}
`,Yo=$(Po)`
    display: flex;
    align-items: center;
    position: relative;
    height: max-content;
    width: 100%;
    padding: 0 ${bo["spacing-16"]} 0
        ${e=>e.$readOnly?"0":bo["spacing-16"]};
    flex-direction: ${e=>"right"===e.$position?"row-reverse":"row"};
`,Vo=$.input`
    ${e=>"small"===e.$variant?go["body-md-regular"]:go["body-baseline-regular"]}
    color: ${uo.text};
    display: block;
    background: transparent;
    border: none;
    outline: none;
    box-shadow: none;
    padding: 0;
    margin: 0;

    &:disabled {
        color: ${uo["text-subtler"]};

        &:hover {
            cursor: not-allowed;
        }
    }

    &::placeholder,
    &::-webkit-input-placeholder {
        color: ${uo["text-subtler"]};
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
`,Uo=$.button`
    background: transparent;
    border: none;
    outline: none;

    &:focus,
    &:active {
        outline: none;
    }

    &:focus-visible {
        outline: ${ho["width-010"]} ${ho.solid}
            ${uo["border-focus"]};
        border-radius: ${fo.sm};
    }
`,Zo=$.div`
    position: relative;
`,Go=$(Yo)`
    height: 3rem;
    gap: ${bo["spacing-8"]};
`,qo=$(Vo)`
    display: block;
    width: 100%;
    flex: 1;
`;var Xo={exports:{}};Xo.exports=function(){var e=1e3,r=6e4,t=36e5,n="millisecond",o="second",i="minute",a="hour",s="day",l="week",d="month",c="quarter",u="year",g="date",m="Invalid Date",h=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,b=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,f={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(e){var r=["th","st","nd","rd"],t=e%100;return"["+e+(r[(t-20)%10]||r[t]||r[0])+"]"}},p=function(e,r,t){var n=String(e);return!n||n.length>=r?e:""+Array(r+1-n.length).join(t)+e},y={s:p,z:function(e){var r=-e.utcOffset(),t=Math.abs(r),n=Math.floor(t/60),o=t%60;return(r<=0?"+":"-")+p(n,2,"0")+":"+p(o,2,"0")},m:function e(r,t){if(r.date()<t.date())return-e(t,r);var n=12*(t.year()-r.year())+(t.month()-r.month()),o=r.clone().add(n,d),i=t-o<0,a=r.clone().add(n+(i?-1:1),d);return+(-(n+(t-o)/(i?o-a:a-o))||0)},a:function(e){return e<0?Math.ceil(e)||0:Math.floor(e)},p:function(e){return{M:d,y:u,w:l,d:s,D:g,h:a,m:i,s:o,ms:n,Q:c}[e]||String(e||"").toLowerCase().replace(/s$/,"")},u:function(e){return void 0===e}},v="en",x={};x[v]=f;var w="$isDayjsObject",F=function(e){return e instanceof S||!(!e||!e[w])},$=function e(r,t,n){var o;if(!r)return v;if("string"==typeof r){var i=r.toLowerCase();x[i]&&(o=i),t&&(x[i]=t,o=i);var a=r.split("-");if(!o&&a.length>1)return e(a[0])}else{var s=r.name;x[s]=r,o=s}return!n&&o&&(v=o),o||!n&&v},C=function(e,r){if(F(e))return e.clone();var t="object"==typeof r?r:{};return t.date=e,t.args=arguments,new S(t)},E=y;E.l=$,E.i=F,E.w=function(e,r){return C(e,{locale:r.$L,utc:r.$u,x:r.$x,$offset:r.$offset})};var S=function(){function f(e){this.$L=$(e.locale,null,!0),this.parse(e),this.$x=this.$x||e.x||{},this[w]=!0}var p=f.prototype;return p.parse=function(e){this.$d=function(e){var r=e.date,t=e.utc;if(null===r)return new Date(NaN);if(E.u(r))return new Date;if(r instanceof Date)return new Date(r);if("string"==typeof r&&!/Z$/i.test(r)){var n=r.match(h);if(n){var o=n[2]-1||0,i=(n[7]||"0").substring(0,3);return t?new Date(Date.UTC(n[1],o,n[3]||1,n[4]||0,n[5]||0,n[6]||0,i)):new Date(n[1],o,n[3]||1,n[4]||0,n[5]||0,n[6]||0,i)}}return new Date(r)}(e),this.init()},p.init=function(){var e=this.$d;this.$y=e.getFullYear(),this.$M=e.getMonth(),this.$D=e.getDate(),this.$W=e.getDay(),this.$H=e.getHours(),this.$m=e.getMinutes(),this.$s=e.getSeconds(),this.$ms=e.getMilliseconds()},p.$utils=function(){return E},p.isValid=function(){return!(this.$d.toString()===m)},p.isSame=function(e,r){var t=C(e);return this.startOf(r)<=t&&t<=this.endOf(r)},p.isAfter=function(e,r){return C(e)<this.startOf(r)},p.isBefore=function(e,r){return this.endOf(r)<C(e)},p.$g=function(e,r,t){return E.u(e)?this[r]:this.set(t,e)},p.unix=function(){return Math.floor(this.valueOf()/1e3)},p.valueOf=function(){return this.$d.getTime()},p.startOf=function(e,r){var t=this,n=!!E.u(r)||r,c=E.p(e),m=function(e,r){var o=E.w(t.$u?Date.UTC(t.$y,r,e):new Date(t.$y,r,e),t);return n?o:o.endOf(s)},h=function(e,r){return E.w(t.toDate()[e].apply(t.toDate("s"),(n?[0,0,0,0]:[23,59,59,999]).slice(r)),t)},b=this.$W,f=this.$M,p=this.$D,y="set"+(this.$u?"UTC":"");switch(c){case u:return n?m(1,0):m(31,11);case d:return n?m(1,f):m(0,f+1);case l:var v=this.$locale().weekStart||0,x=(b<v?b+7:b)-v;return m(n?p-x:p+(6-x),f);case s:case g:return h(y+"Hours",0);case a:return h(y+"Minutes",1);case i:return h(y+"Seconds",2);case o:return h(y+"Milliseconds",3);default:return this.clone()}},p.endOf=function(e){return this.startOf(e,!1)},p.$set=function(e,r){var t,l=E.p(e),c="set"+(this.$u?"UTC":""),m=(t={},t[s]=c+"Date",t[g]=c+"Date",t[d]=c+"Month",t[u]=c+"FullYear",t[a]=c+"Hours",t[i]=c+"Minutes",t[o]=c+"Seconds",t[n]=c+"Milliseconds",t)[l],h=l===s?this.$D+(r-this.$W):r;if(l===d||l===u){var b=this.clone().set(g,1);b.$d[m](h),b.init(),this.$d=b.set(g,Math.min(this.$D,b.daysInMonth())).$d}else m&&this.$d[m](h);return this.init(),this},p.set=function(e,r){return this.clone().$set(e,r)},p.get=function(e){return this[E.p(e)]()},p.add=function(n,c){var g,m=this;n=Number(n);var h=E.p(c),b=function(e){var r=C(m);return E.w(r.date(r.date()+Math.round(e*n)),m)};if(h===d)return this.set(d,this.$M+n);if(h===u)return this.set(u,this.$y+n);if(h===s)return b(1);if(h===l)return b(7);var f=(g={},g[i]=r,g[a]=t,g[o]=e,g)[h]||1,p=this.$d.getTime()+n*f;return E.w(p,this)},p.subtract=function(e,r){return this.add(-1*e,r)},p.format=function(e){var r=this,t=this.$locale();if(!this.isValid())return t.invalidDate||m;var n=e||"YYYY-MM-DDTHH:mm:ssZ",o=E.z(this),i=this.$H,a=this.$m,s=this.$M,l=t.weekdays,d=t.months,c=t.meridiem,u=function(e,t,o,i){return e&&(e[t]||e(r,n))||o[t].slice(0,i)},g=function(e){return E.s(i%12||12,e,"0")},h=c||function(e,r,t){var n=e<12?"AM":"PM";return t?n.toLowerCase():n};return n.replace(b,(function(e,n){return n||function(e){switch(e){case"YY":return String(r.$y).slice(-2);case"YYYY":return E.s(r.$y,4,"0");case"M":return s+1;case"MM":return E.s(s+1,2,"0");case"MMM":return u(t.monthsShort,s,d,3);case"MMMM":return u(d,s);case"D":return r.$D;case"DD":return E.s(r.$D,2,"0");case"d":return String(r.$W);case"dd":return u(t.weekdaysMin,r.$W,l,2);case"ddd":return u(t.weekdaysShort,r.$W,l,3);case"dddd":return l[r.$W];case"H":return String(i);case"HH":return E.s(i,2,"0");case"h":return g(1);case"hh":return g(2);case"a":return h(i,a,!0);case"A":return h(i,a,!1);case"m":return String(a);case"mm":return E.s(a,2,"0");case"s":return String(r.$s);case"ss":return E.s(r.$s,2,"0");case"SSS":return E.s(r.$ms,3,"0");case"Z":return o}return null}(e)||o.replace(":","")}))},p.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},p.diff=function(n,g,m){var h,b=this,f=E.p(g),p=C(n),y=(p.utcOffset()-this.utcOffset())*r,v=this-p,x=function(){return E.m(b,p)};switch(f){case u:h=x()/12;break;case d:h=x();break;case c:h=x()/3;break;case l:h=(v-y)/6048e5;break;case s:h=(v-y)/864e5;break;case a:h=v/t;break;case i:h=v/r;break;case o:h=v/e;break;default:h=v}return m?h:E.a(h)},p.daysInMonth=function(){return this.endOf(d).$D},p.$locale=function(){return x[this.$L]},p.locale=function(e,r){if(!e)return this.$L;var t=this.clone(),n=$(e,r,!0);return n&&(t.$L=n),t},p.clone=function(){return E.w(this.$d,this)},p.toDate=function(){return new Date(this.valueOf())},p.toJSON=function(){return this.isValid()?this.toISOString():null},p.toISOString=function(){return this.$d.toISOString()},p.toString=function(){return this.$d.toUTCString()},f}(),D=S.prototype;return C.prototype=D,[["$ms",n],["$s",o],["$m",i],["$H",a],["$W",s],["$M",d],["$y",u],["$D",g]].forEach((function(e){D[e[1]]=function(r){return this.$g(r,e[0],e[1])}})),C.extend=function(e,r){return e.$i||(e(r,S,C),e.$i=!0),C},C.locale=$,C.isDayjs=F,C.unix=function(e){return C(1e3*e)},C.en=x[v],C.Ls=x,C.p={},C}();var Ko,Jo,Qo,ei=le(Xo.exports);!function(e){e.transformWithSpaces=(e,r)=>{const t="(.{"+r+"})";return e.replace(/[^\dA-Z]/gi,"").replace(new RegExp(t,"g"),"$1 ").trim()},e.padValue=(e,r)=>{if("0"===e)return r?e:e.padStart(2,"0");if(""===e)return e;return parseInt(e).toString().padStart(2,"0")},e.shouldTruncateToTwoLines=(e,r)=>{const t=Math.floor(r/9);return e.length>=2*t||1===e.split(" ").length&&e.length>t},e.truncateOneLine=(e,r,t,n,o=8)=>{let i=0;r>t&&(i=Math.floor((r-t)/o));const a=n+i;if(a<e.length){const r=Math.floor(a/2);return e.substring(0,r)+" ... "+e.substring(e.length-r,e.length)}return e},e.truncateTwoLines=(e,r,t,n=1.2)=>{const o=Math.floor(2*r/(.6*t))*(2/n);if(e.length<=o)return e;const i=Math.floor(.6*o),a=Math.floor(.2*o);return`${e.substring(0,i)}...${e.substring(e.length-a)}`},e.getTextWidth=(r,t)=>{if("undefined"==typeof document)return 0;const n=(e.getTextWidth.canvas||(e.getTextWidth.canvas=document.createElement("canvas"))).getContext("2d");n.font=t;return n.measureText(r).width},e.maskValue=(e,t)=>{if(!e)return e;const{maskRange:n,unmaskRange:o,maskChar:i="•",maskRegex:a,maskTransformer:s}=t;if(s)return s(e);if(a)return e.replace(a,i);if(n){const{startIndex:t,endIndex:o}=r(n[0],n[1]);return e.substring(0,t)+i.repeat(e.substring(t,o+1).length)+e.substring(o+1)}if(o){const{startIndex:t,endIndex:n}=r(o[0],o[1]);return i.repeat(e.substring(0,t).length)+e.substring(t,n+1)+i.repeat(e.substring(n+1).length)}return e};const r=(e,r)=>e<r?{startIndex:e,endIndex:r}:{startIndex:r,endIndex:e},t=new Intl.PluralRules("en",{type:"ordinal"}),n=new Map([["one","st"],["two","nd"],["few","rd"],["other","th"]]);e.formatOrdinal=e=>{const r=t.select(e);return`${e}${n.get(r)}`},e.getMaskedDescription=(e,r,t)=>{if(!e||"masked"!==r||!t)return"";const[n,o]=t,i=n>0,a=o<e.length-1,s=i?e.substring(0,n):"",l=a?e.substring(o+1):"";return i&&a?`Starting with ${s} and ending with ${l}`:i?`Starting with ${s}`:a?`Ending with ${l}`:""},e.joinNonEmptyStrings=(e,r=", ")=>e.filter(Boolean).join(r)}(Ko||(Ko={})),function(e){e.AM="AM",e.PM="PM"}(Jo||(Jo={})),function(e){e.roundToNearestInterval=(e,r,t)=>{const[n,o]=e.split(":"),i=parseInt(n,10),a=parseInt(o,10);if(isNaN(i)||isNaN(a)||a<0||a>=60)throw new Error("Invalid time format");const s=60*i+a,l=s%r,d=0===l?s:t?s+(r-l):s-l,c=d%60;return`${Math.floor(d/60).toString().padStart(2,"0")}:${c.toString().padStart(2,"0")}`},e.generateHourlyIntervals=(e,r,t="ha")=>{const n="HH:mm";let o=ei(e,n),i=ei(r,n);o.isSame(i)&&(i=i.add(1,"day"));const a=[];for(;o.isBefore(i);)a.push(o.format(t)),o=o.add(1,"hour");return a},e.getTimeValues=(e,r)=>{const t={hour:"",minute:"",period:Jo.AM};if(!r)return t;try{if("24hr"===e){const n=oi(r,e);t.minute=Ko.padValue(n.minute);const o=parseInt(n.hour);0===Math.floor(o/12)?(t.period=Jo.AM,t.hour=0===o?"12":Ko.padValue(o.toString())):(t.period=Jo.PM,t.hour=12===o?o.toString():Ko.padValue((o-12).toString()))}else{const{hour:n,minute:o,period:i=""}=oi(r,e);t.hour=Ko.padValue(n),t.minute=Ko.padValue(o),t.period="am"===i.toLowerCase()?Jo.AM:Jo.PM}return t}catch(e){return t}},e.updateMinutes=(e,r)=>{const t=parseInt(e);if(isNaN(t))return"add"===r?Ko.padValue("0"):"55";const n=Math.floor(t/5),o=(("add"===r?n+1:t%5==0?n-1:n)%12+12)%12;return Ko.padValue((5*o).toString())},e.updateHours=(e,r)=>{const t=parseInt(e);if(isNaN(t))return"add"===r?Ko.padValue("1"):"12";const n="add"===r?t+1:t-1;return n<=12&&n>0?Ko.padValue(n.toString()):13===n?Ko.padValue("1"):"12"},e.convertTo24HourFormat=e=>{const r=parseInt(e.hour);let t;return t=e.period===Jo.PM?12===r?r.toString():(r+12).toString():12===r?"00":e.hour,`${t}:${e.minute}`},e.convertHourTo12HourFormat=e=>{const r=parseInt(e),t=r%12==0?12..toString():(r%12).toString();return Ko.padValue(t)},e.formatTimeRange=(e,r)=>`${ei(e,"HH:mm").format("h:mmA")} to ${ei(r,"HH:mm").format("h:mmA")}`,e.isSameTime=(e,r)=>ei(e,"H:mm").isSame(ei(r,"H:mm"),"minute"),e.formatDisplayValue=(e,r)=>{try{const{hour:t,minute:n,period:o=""}=oi(e,r),i=Ko.padValue(t);let a=`${i}:${Ko.padValue(n)}`;return"12hr"===r?(a+=o.toLowerCase(),a):a}catch(e){return""}},e.toMinutesSeconds=e=>({minutes:Math.floor(e/60),seconds:e%60}),e.to24Hour=e=>{if((null==e?void 0:e.includes("am"))||(null==e?void 0:e.includes("pm"))){const[r,t]=e.split(/(am|pm)/i),[n,o]=r.split(":").map(Number);let i=n;return"pm"===t&&i<12&&(i+=12),"am"===t&&12===i&&(i=0),ii(i,o)}return e},e.generateTimings=(r,t="12hr",n,o)=>{const i=[];let a=0,s=1440-r;for(n&&(a=e.timeToMinutes(n)),o&&(s=e.timeToMinutes(o));a<=s;){let e=Math.floor(a/60);const n=a%60;if("12hr"===t){const r=e>=12?"pm":"am";e%=12,e=e||12;const t=ii(e,n,r);i.push(t)}else{const r=ii(e,n);i.push(r)}a+=r}return i},e.parseInput=(e,r="12hr")=>{if(""===e||void 0===e)return e;const t=e.trim().toLowerCase(),n=/^(?:(\d{1,2})([:.])?(\d{2})?)?(a|p|am|pm)?$/.exec(t);if(!n)return;let o=parseInt(n[1]||"0",10);const i=parseInt(n[3]||"0",10);let a=n[4];if(void 0===n[1]||o>24||i>59)return;if("a"===a?a="am":"p"===a&&(a="pm"),"24hr"===r)return"pm"===a&&o<12?o+=12:("am"===a&&12===o||24===o)&&(o=0),ii(o,i);a?0===o||24===o?(a="am",o=12):o>12&&(a="pm",o-=12):(a=0===o||24===o||o>6&&o<12?"am":"pm",o=o%12||12);return ii(o,i,a)},e.findClosestFlooredTime=(r,t)=>{if(!r)return r;const n=e.timeToMinutes(r);let o="",i=1/0;for(const r of t){const t=e.timeToMinutes(r)-n;if(t<=0&&Math.abs(t)<i)i=Math.abs(t),o=r;else if(t>0)break}return o},e.timeToMinutes=e=>{const[r,t]=e.toLowerCase().split(/(am|pm)/),[n,o]=r.split(":").map(Number);let i=n;return"pm"===t&&12!==i&&(i+=12),"am"===t&&12===i&&(i=0),60*i+o},e.calculateDuration=(r,t)=>{const n=e.timeToMinutes(r);return e.timeToMinutes(t)-n},e.calculateScrollPosition=r=>{const{scrollTime:t,minTime:n,maxTime:o,interval:i,intervalWidth:a,options:s}=r;try{if(!/^([0-1]?[0-9]|2[0-3]):[0-5][0-9]$/.test(t))return console.warn(`Invalid scrollTime format: "${t}". Expected format: HH:mm.`),null;const r=(null==s?void 0:s.roundToInterval)?e.roundToNearestInterval(t,i):t,[l,d]=ri(r);if(isNaN(l)||isNaN(d))return console.warn(`Invalid scrollTime: "${t}".`),null;const c=60*l+d,[u,g]=ri(n),m=60*u+g,[h,b]=ri(o);(c<m||c>60*h+b)&&console.warn(`scrollTime "${t}" is outside the range (${n} - ${o}).`);return(c-m)/i*a}catch(e){return console.warn(`Error processing scrollTime: "${t}".`,e),null}}}(Qo||(Qo={}));const ri=e=>e.split(":").map(Number),ti=(e,r)=>{const t=parseInt(e);return"24hr"===r?t>=0&&t<=23:t>=1&&t<=12},ni=e=>{const r=parseInt(e);return r>=0&&r<=59},oi=(e,r)=>{const t=e?e.split(":"):[],n=new Error("Invalid format");if("12hr"===r){if(2!==t.length||4!==t[1].length)throw n;const e=t[1].substring(0,2),i=t[1].substring(2);if(!ti(t[0],r)||!ni(e)||"am"!==(o=i).toLowerCase()&&"pm"!==o.toLowerCase())throw n;return{hour:t[0],minute:e,period:t[1].substring(2)}}if(2!==t.length)throw n;if(!ti(t[0],r)||!ni(t[1]))throw n;return{hour:t[0],minute:t[1]};var o},ii=(e,r,t)=>t?`${e}:${r.toString().padStart(2,"0")}${t}`:`${e.toString().padStart(2,"0")}:${r.toString().padStart(2,"0")}`;var ai={exports:{}};ai.exports=function(){var e={LTS:"h:mm:ss A",LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D, YYYY",LLL:"MMMM D, YYYY h:mm A",LLLL:"dddd, MMMM D, YYYY h:mm A"},r=/(\[[^[]*\])|([-_:/.,()\s]+)|(A|a|YYYY|YY?|MM?M?M?|Do|DD?|hh?|HH?|mm?|ss?|S{1,3}|z|ZZ?)/g,t=/\d\d/,n=/\d\d?/,o=/\d*[^-_:/,()\s\d]+/,i={},a=function(e){return(e=+e)+(e>68?1900:2e3)},s=function(e){return function(r){this[e]=+r}},l=[/[+-]\d\d:?(\d\d)?|Z/,function(e){(this.zone||(this.zone={})).offset=function(e){if(!e)return 0;if("Z"===e)return 0;var r=e.match(/([+-]|\d\d)/g),t=60*r[1]+(+r[2]||0);return 0===t?0:"+"===r[0]?-t:t}(e)}],d=function(e){var r=i[e];return r&&(r.indexOf?r:r.s.concat(r.f))},c=function(e,r){var t,n=i.meridiem;if(n){for(var o=1;o<=24;o+=1)if(e.indexOf(n(o,0,r))>-1){t=o>12;break}}else t=e===(r?"pm":"PM");return t},u={A:[o,function(e){this.afternoon=c(e,!1)}],a:[o,function(e){this.afternoon=c(e,!0)}],S:[/\d/,function(e){this.milliseconds=100*+e}],SS:[t,function(e){this.milliseconds=10*+e}],SSS:[/\d{3}/,function(e){this.milliseconds=+e}],s:[n,s("seconds")],ss:[n,s("seconds")],m:[n,s("minutes")],mm:[n,s("minutes")],H:[n,s("hours")],h:[n,s("hours")],HH:[n,s("hours")],hh:[n,s("hours")],D:[n,s("day")],DD:[t,s("day")],Do:[o,function(e){var r=i.ordinal,t=e.match(/\d+/);if(this.day=t[0],r)for(var n=1;n<=31;n+=1)r(n).replace(/\[|\]/g,"")===e&&(this.day=n)}],M:[n,s("month")],MM:[t,s("month")],MMM:[o,function(e){var r=d("months"),t=(d("monthsShort")||r.map((function(e){return e.slice(0,3)}))).indexOf(e)+1;if(t<1)throw new Error;this.month=t%12||t}],MMMM:[o,function(e){var r=d("months").indexOf(e)+1;if(r<1)throw new Error;this.month=r%12||r}],Y:[/[+-]?\d+/,s("year")],YY:[t,function(e){this.year=a(e)}],YYYY:[/\d{4}/,s("year")],Z:l,ZZ:l};function g(t){var n,o;n=t,o=i&&i.formats;for(var a=(t=n.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g,(function(r,t,n){var i=n&&n.toUpperCase();return t||o[n]||e[n]||o[i].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g,(function(e,r,t){return r||t.slice(1)}))}))).match(r),s=a.length,l=0;l<s;l+=1){var d=a[l],c=u[d],g=c&&c[0],m=c&&c[1];a[l]=m?{regex:g,parser:m}:d.replace(/^\[|\]$/g,"")}return function(e){for(var r={},t=0,n=0;t<s;t+=1){var o=a[t];if("string"==typeof o)n+=o.length;else{var i=o.regex,l=o.parser,d=e.slice(n),c=i.exec(d)[0];l.call(r,c),e=e.replace(c,"")}}return function(e){var r=e.afternoon;if(void 0!==r){var t=e.hours;r?t<12&&(e.hours+=12):12===t&&(e.hours=0),delete e.afternoon}}(r),r}}return function(e,r,t){t.p.customParseFormat=!0,e&&e.parseTwoDigitYear&&(a=e.parseTwoDigitYear);var n=r.prototype,o=n.parse;n.parse=function(e){var r=e.date,n=e.utc,a=e.args;this.$u=n;var s=a[1];if("string"==typeof s){var l=!0===a[2],d=!0===a[3],c=l||d,u=a[2];d&&(u=a[2]),i=this.$locale(),!l&&u&&(i=t.Ls[u]),this.$d=function(e,r,t){try{if(["x","X"].indexOf(r)>-1)return new Date(("X"===r?1e3:1)*e);var n=g(r)(e),o=n.year,i=n.month,a=n.day,s=n.hours,l=n.minutes,d=n.seconds,c=n.milliseconds,u=n.zone,m=new Date,h=a||(o||i?1:m.getDate()),b=o||m.getFullYear(),f=0;o&&!i||(f=i>0?i-1:m.getMonth());var p=s||0,y=l||0,v=d||0,x=c||0;return u?new Date(Date.UTC(b,f,h,p,y,v,x+60*u.offset*1e3)):t?new Date(Date.UTC(b,f,h,p,y,v,x)):new Date(b,f,h,p,y,v,x)}catch(e){return new Date("")}}(r,s,n),this.init(),u&&!0!==u&&(this.$L=this.locale(u).$L),c&&r!=this.format(s)&&(this.$d=new Date("")),i={}}else if(s instanceof Array)for(var m=s.length,h=1;h<=m;h+=1){a[1]=s[h-1];var b=t.apply(this,a);if(b.isValid()){this.$d=b.$d,this.$L=b.$L,this.init();break}h===m&&(this.$d=new Date(""))}else o.call(this,e)}}}();var si=le(ai.exports),li={exports:{}};li.exports=function(e,r,t){r.prototype.isBetween=function(e,r,n,o){var i=t(e),a=t(r),s="("===(o=o||"()")[0],l=")"===o[1];return(s?this.isAfter(i,n):!this.isBefore(i,n))&&(l?this.isBefore(a,n):!this.isAfter(a,n))||(s?this.isBefore(i,n):!this.isAfter(i,n))&&(l?this.isAfter(a,n):!this.isBefore(a,n))}};var di=le(li.exports),ci={exports:{}};ci.exports=function(e,r){r.prototype.isSameOrAfter=function(e,r){return this.isSame(e,r)||this.isAfter(e,r)}};var ui=le(ci.exports),gi={exports:{}};gi.exports=function(e,r){r.prototype.isSameOrBefore=function(e,r){return this.isSame(e,r)||this.isBefore(e,r)}};var mi,hi,bi,fi=le(gi.exports),pi={exports:{}},yi=le(pi.exports=(mi={year:0,month:1,day:2,hour:3,minute:4,second:5},hi={},function(e,r,t){var n,o=function(e,r,t){void 0===t&&(t={});var n=new Date(e),o=function(e,r){void 0===r&&(r={});var t=r.timeZoneName||"short",n=e+"|"+t,o=hi[n];return o||(o=new Intl.DateTimeFormat("en-US",{hour12:!1,timeZone:e,year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit",timeZoneName:t}),hi[n]=o),o}(r,t);return o.formatToParts(n)},i=function(e,r){for(var n=o(e,r),i=[],a=0;a<n.length;a+=1){var s=n[a],l=s.type,d=s.value,c=mi[l];c>=0&&(i[c]=parseInt(d,10))}var u=i[3],g=24===u?0:u,m=i[0]+"-"+i[1]+"-"+i[2]+" "+g+":"+i[4]+":"+i[5]+":000",h=+e;return(t.utc(m).valueOf()-(h-=h%1e3))/6e4},a=r.prototype;a.tz=function(e,r){void 0===e&&(e=n);var o=this.utcOffset(),i=this.toDate(),a=i.toLocaleString("en-US",{timeZone:e}),s=Math.round((i-new Date(a))/1e3/60),l=t(a,{locale:this.$L}).$set("millisecond",this.$ms).utcOffset(15*-Math.round(i.getTimezoneOffset()/15)-s,!0);if(r){var d=l.utcOffset();l=l.add(o-d,"minute")}return l.$x.$timezone=e,l},a.offsetName=function(e){var r=this.$x.$timezone||t.tz.guess(),n=o(this.valueOf(),r,{timeZoneName:e}).find((function(e){return"timezonename"===e.type.toLowerCase()}));return n&&n.value};var s=a.startOf;a.startOf=function(e,r){if(!this.$x||!this.$x.$timezone)return s.call(this,e,r);var n=t(this.format("YYYY-MM-DD HH:mm:ss:SSS"),{locale:this.$L});return s.call(n,e,r).tz(this.$x.$timezone,!0)},t.tz=function(e,r,o){var a=o&&r,s=o||r||n,l=i(+t(),s);if("string"!=typeof e)return t(e).tz(s);var d=function(e,r,t){var n=e-60*r*1e3,o=i(n,t);if(r===o)return[n,r];var a=i(n-=60*(o-r)*1e3,t);return o===a?[n,o]:[e-60*Math.min(o,a)*1e3,Math.max(o,a)]}(t.utc(e,a).valueOf(),l,s),c=d[0],u=d[1],g=t(c).utcOffset(u);return g.$x.$timezone=s,g},t.tz.guess=function(){return Intl.DateTimeFormat().resolvedOptions().timeZone},t.tz.setDefault=function(e){n=e}}));ei.extend(di),ei.extend(fi),ei.extend(ui),ei.extend(si),ei.extend(yi),function(e){e.generateDays=e=>{const r=e.startOf("month"),t=ei(r).startOf("week");return vi(t).map((e=>xi(e)))},e.generateDaysForCurrentWeek=e=>{const r=e.startOf("week");return xi(r)},e.generateMonths=e=>{const r=[];for(let t=0;t<12;t++){const n=e.month(t);r.push(ei(n))}return r},e.generateDecadeOfYears=e=>{const r=e.year(),t=10*Math.floor(r/10),n=e.year(t),o=[n.subtract(1,"year"),n];for(let e=1;e<11;e++)o.push(n.add(e,"year"));return o},e.getStartEndDecade=e=>{const r=10*Math.floor(+e.format("YYYY")/10);return{beginDecade:r,endDecade:+ei(`${r+9}-01-01`).format("YYYY")}},e.convertTo12HourFormat=e=>{const r=ei(e,"HH:mm");return r.isValid()?r.format("h:mm a"):""},e.isWithinRange=(e,r,t,n="day")=>!r&&!t||(r&&t?e.isBetween(r,t,n,"[]"):r?e.isSameOrAfter(r,n):e.isSameOrBefore(t,n)),e.isPreviousMonthWithinRange=(r,t)=>e.isWithinRange(r.subtract(1,"month"),t,void 0,"month"),e.isPreviousYearWithinRange=(r,t)=>e.isWithinRange(r.subtract(1,"year"),t,void 0,"year"),e.isPreviousDecadeWithinRange=(r,t)=>{const{beginDecade:n}=e.getStartEndDecade(r);return e.isWithinRange(r.year(n).subtract(1,"year"),t,void 0,"year")},e.isNextMonthWithinRange=(r,t)=>e.isWithinRange(r.add(1,"month"),void 0,t,"month"),e.isNextYearWithinRange=(r,t)=>e.isWithinRange(r.add(1,"year"),void 0,t,"year"),e.isNextDecadeWithinRange=(r,t)=>{const{endDecade:n}=e.getStartEndDecade(r);return e.isWithinRange(r.year(n).add(1,"year"),void 0,t,"year")},e.getWeekStartEnd=e=>({start:e.startOf("week").format("YYYY-MM-DD"),end:e.endOf("week").format("YYYY-MM-DD")}),e.getFixedRangeStartEnd=(e,r)=>({start:e.format("YYYY-MM-DD"),end:e.add(r-1,"day").format("YYYY-MM-DD")}),e.isDisabledDay=(r,t,n,o)=>{const i=e.isWithinRange(r,n?ei(n):void 0,o?ei(o):void 0),a=t&&t.includes(r.format("YYYY-MM-DD"));return!i||!!a}}(bi||(bi={}));const vi=e=>{const r=[e];for(let t=1;t<6;t++){const n=e.add(t,"week");r.push(n)}return r},xi=e=>{const r=[];for(let t=0;t<7;t++){const n=e.add(t,"day");r.push(n)}return r},wi=[1,3,5,7,8,10,12],Fi=[4,6,9,11];var $i,Ci;!function(e){e.clampDay=(r,t,n)=>{const o=parseInt(r),i=parseInt(t),a=parseInt(n);return 0==o?"1":wi.includes(i)?Math.min(o,31).toString():Fi.includes(i)?Math.min(o,30).toString():2===i?e.isLeapYear(a)?Math.min(o,29).toString():Math.min(o,28).toString():r},e.clampMonth=e=>{const r=parseInt(e);return 0==r?"1":r>12?"12":e},e.isLeapYear=e=>e%4==0&&e%100!=0||e%400==0,e.getTimeDiffInMinutes=(e,r,t="HH:mm")=>{const n=ei(e,t);return ei(r,t).diff(n,"minute")},e.toDayjs=e=>e?ei(e):ei(),e.addMinutesToTime=(e,r,t="HH:mm")=>ei(e,t).add(r,"minutes").format(t),e.isSame=(e,r,t="day")=>ei(e).isSame(ei(r),t)}($i||($i={})),function(e){e.isDateDisabled=(e,r)=>{const{disabledDates:t,minDate:n,maxDate:o}=r;return!!(e&&t&&t.length&&t.includes(e))||(!(!n||!ei(e).isBefore(n,"day"))||!(!o||!ei(e).isAfter(o,"day")))},e.sanitizeInput=e=>{if(e){const t=r(e);if(ei(t,"YYYY-MM-DD",!0).isValid())return t}return""};const r=e=>{const r=e.match(/^(\d{1,4})-(\d{1,2})-(\d{1,2})$/);if(!r)return"";const[,t,n,o]=r;if(t.length<=2||parseInt(t,10)<100)return"";return`${t.padStart(4,"0")}-${n.padStart(2,"0")}-${o.padStart(2,"0")}`}}(Ci||(Ci={}));const Ei=()=>{const e=i.split(".");return parseInt(e[0],10)>=19},Si=(...e)=>r=>{const t=[];for(const n of e)if("function"==typeof n){const e=n(r),o="function"==typeof e;t.push(o?e:()=>n(null))}else n.current=r,t.push((()=>{n.current=null}));if(Ei())return()=>{for(const e of t)e()}};var Di;!function(e){e.generate=()=>Math.random().toString(36).substring(2,9)}(Di||(Di={}));var ki=function(e,r){return ki=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,r){e.__proto__=r}||function(e,r){for(var t in r)Object.prototype.hasOwnProperty.call(r,t)&&(e[t]=r[t])},ki(e,r)};var Bi=function(){return Bi=Object.assign||function(e){for(var r,t=1,n=arguments.length;t<n;t++)for(var o in r=arguments[t])Object.prototype.hasOwnProperty.call(r,o)&&(e[o]=r[o]);return e},Bi.apply(this,arguments)};var Ti="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};var Ai=function(e){var r=typeof e;return null!=e&&("object"==r||"function"==r)},zi="object"==typeof Ti&&Ti&&Ti.Object===Object&&Ti,Ii="object"==typeof self&&self&&self.Object===Object&&self,Oi=zi||Ii||Function("return this")(),Mi=Oi,Hi=function(){return Mi.Date.now()},Li=/\s/;var Ri=function(e){for(var r=e.length;r--&&Li.test(e.charAt(r)););return r},ji=/^\s+/;var _i=function(e){return e?e.slice(0,Ri(e)+1).replace(ji,""):e},Wi=Oi.Symbol,Ni=Wi,Pi=Object.prototype,Yi=Pi.hasOwnProperty,Vi=Pi.toString,Ui=Ni?Ni.toStringTag:void 0;var Zi=function(e){var r=Yi.call(e,Ui),t=e[Ui];try{e[Ui]=void 0;var n=!0}catch(e){}var o=Vi.call(e);return n&&(r?e[Ui]=t:delete e[Ui]),o},Gi=Object.prototype.toString;var qi=Zi,Xi=function(e){return Gi.call(e)},Ki=Wi?Wi.toStringTag:void 0;var Ji=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":Ki&&Ki in Object(e)?qi(e):Xi(e)},Qi=function(e){return null!=e&&"object"==typeof e};var ea=_i,ra=Ai,ta=function(e){return"symbol"==typeof e||Qi(e)&&"[object Symbol]"==Ji(e)},na=/^[-+]0x[0-9a-f]+$/i,oa=/^0b[01]+$/i,ia=/^0o[0-7]+$/i,aa=parseInt;var sa=Ai,la=Hi,da=function(e){if("number"==typeof e)return e;if(ta(e))return NaN;if(ra(e)){var r="function"==typeof e.valueOf?e.valueOf():e;e=ra(r)?r+"":r}if("string"!=typeof e)return 0===e?e:+e;e=ea(e);var t=oa.test(e);return t||ia.test(e)?aa(e.slice(2),t?2:8):na.test(e)?NaN:+e},ca=Math.max,ua=Math.min;var ga=function(e,r,t){var n,o,i,a,s,l,d=0,c=!1,u=!1,g=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function m(r){var t=n,i=o;return n=o=void 0,d=r,a=e.apply(i,t)}function h(e){var t=e-l;return void 0===l||t>=r||t<0||u&&e-d>=i}function b(){var e=la();if(h(e))return f(e);s=setTimeout(b,function(e){var t=r-(e-l);return u?ua(t,i-(e-d)):t}(e))}function f(e){return s=void 0,g&&n?m(e):(n=o=void 0,a)}function p(){var e=la(),t=h(e);if(n=arguments,o=this,l=e,t){if(void 0===s)return function(e){return d=e,s=setTimeout(b,r),c?m(e):a}(l);if(u)return clearTimeout(s),s=setTimeout(b,r),m(l)}return void 0===s&&(s=setTimeout(b,r)),a}return r=da(r)||0,sa(t)&&(c=!!t.leading,i=(u="maxWait"in t)?ca(da(t.maxWait)||0,r):i,g="trailing"in t?!!t.trailing:g),p.cancel=function(){void 0!==s&&clearTimeout(s),d=0,n=l=o=s=void 0},p.flush=function(){return void 0===s?a:f(la())},p},ma=ga,ha=Ai;var ba=function(e,r,t){var n=!0,o=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return ha(t)&&(n="leading"in t?!!t.leading:n,o="trailing"in t?!!t.trailing:o),ma(e,r,{leading:n,maxWait:r,trailing:o})},fa=function(e,r,t,n){switch(r){case"debounce":return ga(e,t,n);case"throttle":return ba(e,t,n);default:return e}},pa=function(e){return"function"==typeof e},ya=function(){return"undefined"==typeof window},va=function(e){return e instanceof Element||e instanceof HTMLDocument},xa=function(e,r,t,n){return function(o){var i=o.width,a=o.height;r((function(r){return r.width===i&&r.height===a||r.width===i&&!n||r.height===a&&!t?r:(e&&pa(e)&&e(i,a),{width:i,height:a})}))}};!function(e){function r(r){var t=e.call(this,r)||this;t.cancelHandler=function(){t.resizeHandler&&t.resizeHandler.cancel&&(t.resizeHandler.cancel(),t.resizeHandler=null)},t.attachObserver=function(){var e=t.props,r=e.targetRef,n=e.observerOptions;if(!ya()){r&&r.current&&(t.targetRef.current=r.current);var o=t.getElement();o&&(t.observableElement&&t.observableElement===o||(t.observableElement=o,t.resizeObserver.observe(o,n)))}},t.getElement=function(){var e=t.props,r=e.querySelector,n=e.targetDomEl;if(ya())return null;if(r)return document.querySelector(r);if(n&&va(n))return n;if(t.targetRef&&va(t.targetRef.current))return t.targetRef.current;var o=M(t);if(!o)return null;switch(t.getRenderType()){case"renderProp":case"childFunction":case"child":case"childArray":return o;default:return o.parentElement}},t.createResizeHandler=function(e){var r=t.props,n=r.handleWidth,o=void 0===n||n,i=r.handleHeight,a=void 0===i||i,s=r.onResize;if(o||a){var l=xa(s,t.setState.bind(t),o,a);e.forEach((function(e){var r=e&&e.contentRect||{},n=r.width,o=r.height;!t.skipOnMount&&!ya()&&l({width:n,height:o}),t.skipOnMount=!1}))}},t.getRenderType=function(){var e=t.props,r=e.render,n=e.children;return pa(r)?"renderProp":pa(n)?"childFunction":l(n)?"child":Array.isArray(n)?"childArray":"parent"};var n=r.skipOnMount,o=r.refreshMode,i=r.refreshRate,a=void 0===i?1e3:i,s=r.refreshOptions;return t.state={width:void 0,height:void 0},t.skipOnMount=n,t.targetRef=d(),t.observableElement=null,ya()||(t.resizeHandler=fa(t.createResizeHandler,o,a,s),t.resizeObserver=new window.ResizeObserver(t.resizeHandler)),t}(function(e,r){if("function"!=typeof r&&null!==r)throw new TypeError("Class extends value "+String(r)+" is not a constructor or null");function t(){this.constructor=e}ki(e,r),e.prototype=null===r?Object.create(r):(t.prototype=r.prototype,new t)})(r,e),r.prototype.componentDidMount=function(){this.attachObserver()},r.prototype.componentDidUpdate=function(){this.attachObserver()},r.prototype.componentWillUnmount=function(){ya()||(this.observableElement=null,this.resizeObserver.disconnect(),this.cancelHandler())},r.prototype.render=function(){var e,r=this.props,t=r.render,o=r.children,i=r.nodeType,a=void 0===i?"div":i,s=this.state,l={width:s.width,height:s.height,targetRef:this.targetRef};switch(this.getRenderType()){case"renderProp":return t&&t(l);case"childFunction":return(e=o)(l);case"child":if((e=o).type&&"string"==typeof e.type){var d=function(e,r){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(n=Object.getOwnPropertySymbols(e);o<n.length;o++)r.indexOf(n[o])<0&&Object.prototype.propertyIsEnumerable.call(e,n[o])&&(t[n[o]]=e[n[o]])}return t}(l,["targetRef"]);return c(e,d)}return c(e,l);case"childArray":return(e=o).map((function(e){return!!e&&c(e,l)}));default:return n.createElement(a,null)}}}(u);var wa=ya()?g:m;function Fa(e){void 0===e&&(e={});var r=e.skipOnMount,t=void 0!==r&&r,n=e.refreshMode,o=e.refreshRate,i=void 0===o?1e3:o,l=e.refreshOptions,d=e.handleWidth,c=void 0===d||d,u=e.handleHeight,g=void 0===u||u,m=e.targetRef,h=e.observerOptions,b=e.onResize,f=a(t),p=a(null),y=null!=m?m:p,v=a(),x=s({width:void 0,height:void 0}),w=x[0],F=x[1];return wa((function(){if(!ya()){var e=xa(b,F,c,g);v.current=fa((function(r){(c||g)&&r.forEach((function(r){var t=r&&r.contentRect||{},n=t.width,o=t.height;!f.current&&!ya()&&e({width:n,height:o}),f.current=!1}))}),n,i,l);var r=new window.ResizeObserver(v.current);return y.current&&r.observe(y.current,h),function(){r.disconnect();var e=v.current;e&&e.cancel&&e.cancel()}}}),[n,i,l,c,g,b,h,y.current]),Bi({ref:y},w)}function $a(e){const r=a(null);m((()=>{r.current=e}),[e]);return h(((...e)=>{var t;return null===(t=r.current)||void 0===t?void 0:t.call(r,...e)}),[])}const Ca=e=>{const r=(e=>{const r=a(e),t=a();return g((()=>{t.current=r.current,r.current=e}),[e]),t.current})(e);return r!==e},Ea=$.span`
    clip-path: inset(50%);
    height: 1px;
    width: 1px;
    overflow: hidden;
    position: absolute;
    white-space: nowrap;
`,Sa=e=>Ei()?e:e?"true":void 0,Da=(...e)=>e.filter((e=>!!e)).join(" "),ka=$.div`
    display: inline-block;
    position: relative;
    width: ${({$size:e})=>e?`${e}px`:"1em"};
    height: ${({$size:e})=>e?`${e}px`:"1em"};
    color: ${e=>e.$color||"currentColor"};
`,Ba=E`
	0% {
	  transform: rotate(0deg);
	}
	100% {
	  transform: rotate(360deg);
	}
`,Ta=$.div`
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
    animation: ${Ba} 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
`,Aa=$(Ta)`
    animation-delay: -0.45s;
`,za=$(Ta)`
    animation-delay: -0.3s;
`,Ia=$(Ta)`
    animation-delay: -0.15s;
`,Oa=({color:t,className:n,size:o})=>e(ka,{className:n,$size:o,$color:t,"data-testid":"component-loading-spinner",children:[r(Ta,{id:"inner1"}),r(Aa,{id:"inner2"}),r(za,{id:"inner3"}),r(Ia,{id:"inner4"})]}),Ma=$.button`
    padding: ${bo["spacing-8"]} ${bo["spacing-16"]};
    min-width: 4rem;
    border: ${ho["width-010"]} ${ho.solid} transparent;
    transition: all ${mo["duration-250"]} ${mo["ease-default"]};
    border-radius: ${Hn};
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;

    // -----------------------------------------------------------------------------
    // BUTTON STYLE + TEXT COLOR
    // -----------------------------------------------------------------------------
    ${e=>{switch(e.$buttonStyle){case"secondary":return C`
                    background-color: ${uo.bg};
                    border-color: ${e.$buttonIsDanger?uo["border-error-strong"]:_n};

                    color: ${e.$buttonIsDanger?uo["text-error"]:Wn};

                    &:hover,
                    &:active {
                        @media (pointer: fine) {
                            background-color: ${uo["bg-hover-neutral"]};
                        }
                    }
                `;case"light":return C`
                    background-color: ${uo.bg};
                    border-color: ${uo.border};

                    color: ${e.$buttonIsDanger?uo["text-error"]:Nn};

                    &:hover,
                    &:active {
                        @media (pointer: fine) {
                            background-color: ${uo["bg-hover-neutral"]};
                        }
                    }
                `;case"link":return C`
                    background-color: transparent;

                    color: ${e.$buttonIsDanger?uo["text-error"]:Pn};
                    &:hover,
                    &:active {
                        @media (pointer: fine) {
                            background-color: ${uo["bg-hover-neutral"]};
                        }
                    }
                `;case"disabled":return C`
                    background-color: ${uo["bg-disabled"]};

                    cursor: not-allowed;

                    &:hover {
                        box-shadow: none;
                    }

                    color: ${uo["text-disabled"]};
                `;default:return C`
                    background-color: ${e.$buttonIsDanger?uo["bg-error-strong"]:Ln};

                    ${yo.MaxWidth.sm} {
                        width: 100%;
                    }

                    color: ${jn};

                    &:hover,
                    &:active {
                        @media (pointer: fine) {
                            background-color: ${e.$buttonIsDanger?uo["bg-error-strong-hover"]:Rn};
                        }
                    }
                `}}}

    // -----------------------------------------------------------------------------
	// BUTTON SIZE + TEXT SIZE
	// -----------------------------------------------------------------------------
	${e=>{switch(e.$buttonSizeStyle){case"small":return C`
                    height: 2.5rem;
                    ${go["body-md-semibold"]}

                    ${yo.MaxWidth.xxs} {
                        height: auto;
                    }
                `;case"large":return C`
                    height: 4rem;
                    ${go["heading-md-semibold"]}

                    ${yo.MaxWidth.xxs} {
                        height: auto;
                    }
                `;default:return C`
                    height: 3rem;
                    ${go["heading-xs-semibold"]}

                    ${yo.MaxWidth.xxs} {
                        height: auto;
                    }
                `}}}
`,Ha=$(Oa)`
    margin-right: ${e=>e.$hasChildren?"0.5rem":"0"};
`,La=e=>o.Children.toArray(e).some((e=>"string"==typeof e?""!==e.trim():null!=e)),Ra=(t,n)=>{const{children:o,disabled:i=!1,loading:a=!1,styleType:s="default",danger:l=!1,focusableWhenDisabled:d=!1,onClick:c}=t,u=ae(t,["children","disabled","loading","styleType","danger","focusableWhenDisabled","onClick"]),g={$buttonStyle:i?"disabled":s,$buttonSizeStyle:"default",$buttonIsDanger:l};return e(Ma,Object.assign({ref:n,"data-testid":u["data-testid"]||"button",disabled:i&&!d,"aria-disabled":i,"aria-busy":a,onClick:i?void 0:c},g,u,{children:[a&&r(Ha,{$hasChildren:La(o)}),r("span",{children:o})]}))};Ra.displayName="Button.Default";const ja=(t,n)=>{const{children:o,disabled:i=!1,loading:a=!1,styleType:s="default",danger:l=!1,focusableWhenDisabled:d=!1,onClick:c}=t,u=ae(t,["children","disabled","loading","styleType","danger","focusableWhenDisabled","onClick"]),g={$buttonStyle:i?"disabled":s,$buttonSizeStyle:"small",$buttonIsDanger:l};return e(Ma,Object.assign({ref:n,"data-testid":u["data-testid"]||"button",disabled:i&&!d,"aria-disabled":i,"aria-busy":a,onClick:i?void 0:c},g,u,{children:[a&&r(Ha,{$hasChildren:La(o)}),r("span",{children:o})]}))};ja.displayName="Button.Small";const _a=(t,n)=>{const{children:o,disabled:i=!1,loading:a=!1,styleType:s="default",danger:l=!1,focusableWhenDisabled:d=!1,onClick:c}=t,u=ae(t,["children","disabled","loading","styleType","danger","focusableWhenDisabled","onClick"]),g={$buttonStyle:i?"disabled":s,$buttonSizeStyle:"large",$buttonIsDanger:l};return e(Ma,Object.assign({ref:n,"data-testid":u["data-testid"]||"button",disabled:i&&!d,"aria-disabled":i,"aria-busy":a,onClick:i?void 0:c},g,u,{children:[a&&r(Ha,{$hasChildren:La(o)}),r("span",{children:o})]}))};_a.displayName="Button.Large";const Wa={Default:o.forwardRef(Ra),Small:o.forwardRef(ja),Large:o.forwardRef(_a)},Na=e=>{const{textSize:r}=e||{};return C`
        // Text styling
        ${r&&go[`${r}-regular`]}

        strong {
            font-weight: ${go.Spec["weight-semibold"]};
            ${r&&go[`${r}-semibold`]};
        }

        p {
            margin: 0;
        }

        // Link styling
        a {
            font-weight: ${go.Spec["weight-semibold"]};
            ${r&&go[`${r}-semibold`]}
            color: ${uo.hyperlink};
            text-decoration: underline;

            svg {
                color: ${uo["icon-primary"]};
                height: 1lh;
                width: 1em;
                margin-left: 0.4rem;
                vertical-align: middle;
            }

            &:hover,
            &:active,
            &:visited,
            &:focus {
                color: ${uo["hyperlink-hover"]};

                svg {
                    color: ${uo["icon-hover"]};
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
    `},Pa=e=>C`
    display: -webkit-box;
    -webkit-line-clamp: ${e};
    -webkit-box-orient: vertical;
    overflow: hidden;
`,Ya=(e,r,t=!1)=>C`
        ${go[`${e}-${r}`]}
        ${t?"margin-bottom: 1.05em;":"margin-bottom: 0;"}
    `,Va=e=>{if(e)return C`
            ${Pa(e)}
        `},Ua=(e,r,t,n,o)=>C`
    ${Ya(e,r||"regular",n)}
    ${((e=!1,r=!1,t)=>r?C`
            display: block;
            ${Va(t)}
        `:e?C`
            display: inline;
        `:C`
            display: block;
            ${Va(t)}
        `)(t,n,o)}
    color: ${uo.text};
`,Za=$.div`
    ${e=>Ua(e.$textStyle,e.$weight,e.$inline,e.$paragraph,e.$maxLines)}
`,Ga=$.a`
    ${e=>{var r;return C`
        ${Ya(e.$textStyle,e.$weight||"regular")}
        color: ${uo.hyperlink};
        text-decoration: ${null!==(r=e.$underlineStyle)&&void 0!==r?r:"underline"};

        &:hover,
        &:active,
        &:focus {
            color: ${uo["text-hover"]};
        }
    `}}
`,qa=$(H)`
    height: 1lh;
    width: 1em;
    margin-left: 0.4em;
    vertical-align: middle;
`;var Xa;!function(t){const n=(e,t,n)=>{const i=(n,o)=>{var{weight:i,inline:a,paragraph:s,maxLines:l}=n,d=ae(n,["weight","inline","paragraph","maxLines"]);return r(Za,Object.assign({ref:o,as:a?"span":e,$textStyle:t,$weight:i,$inline:a,$paragraph:s,$maxLines:l},d))};return i.displayName=`Typography.${n}`,o.forwardRef(i)};t.HeadingXXL=n("h1","heading-xxl","HeadingXXL"),t.HeadingXL=n("h2","heading-xl","HeadingXL"),t.HeadingLG=n("h3","heading-lg","HeadingLG"),t.HeadingMD=n("h4","heading-md","HeadingMD"),t.HeadingSM=n("h5","heading-sm","HeadingSM"),t.HeadingXS=n("h6","heading-xs","HeadingXS");const i=(e,t)=>{const n=(t,n)=>{var{weight:o,inline:i,paragraph:a,maxLines:s}=t,l=ae(t,["weight","inline","paragraph","maxLines"]);return r(Za,Object.assign({ref:n,as:i?"span":"p",$textStyle:e,$weight:o,$inline:i,$paragraph:a,$maxLines:s},l))};return n.displayName=`Typography.${t}`,o.forwardRef(n)};t.BodyBL=i("body-baseline","BodyBL"),t.BodyMD=i("body-md","BodyMD"),t.BodySM=i("body-sm","BodySM"),t.BodyXS=i("body-xs","BodyXS");const a=(t,n)=>{const i=(n,o)=>{var{weight:i,children:a,external:s,underlineStyle:l="underline"}=n,d=ae(n,["weight","children","external","underlineStyle"]);return e(Ga,Object.assign({ref:o,$textStyle:t,$weight:i,$underlineStyle:l},d,{children:[a,s&&r(qa,{})]}))};return i.displayName=`Typography.${n}`,o.forwardRef(i)};t.LinkBL=a("body-baseline","LinkBL"),t.LinkMD=a("body-md","LinkMD"),t.LinkSM=a("body-sm","LinkSM"),t.LinkXS=a("body-xs","LinkXS")}(Xa||(Xa={}));const Ka=$.div`
    padding: ${bo["spacing-8"]} ${bo["spacing-16"]};
    display: flex;

    ${e=>{let r,t;switch(e.$type){case"error":r=uo["bg-error"](e),t=uo["border-error"](e);break;case"success":r=uo["bg-success"](e),t=uo["border-success"](e);break;case"warning":default:r=uo["bg-warning"](e),t=uo["border-warning"](e);break;case"info":r=uo["bg-info"](e),t=uo["border-info"](e);break;case"description":r=uo["bg-strong"](e),t=uo["border-strong"](e)}return C`
            background: ${r};
            border-left: ${ho["width-020"]} ${ho.solid}
                ${t};
        `}}
`,Ja=$.div`
    display: flex;
    align-items: center;
    height: 1lh;
    margin-right: ${bo["spacing-8"]};

    ${e=>{let r;const t="small"===e.$sizeType?"1.25rem":"1.5rem";switch(e.$type){case"error":r=uo["icon-error"](e);break;case"success":r=uo["icon-success"](e);break;case"warning":default:r=uo["icon-warning"](e);break;case"info":r=uo["icon-info"](e);break;case"description":r=uo["icon-subtle"](e)}return C`
            svg {
                color: ${r};
                width: ${t};
                height: ${t};
            }
        `}}
`,Qa=$(Xa.LinkSM)`
    ${e=>"small"===e.$sizeType?C`
                ${go["body-sm-semibold"]}
                margin-top: ${bo["spacing-4"]};
            `:C`
                ${go["body-md-semibold"]}
                margin-top: ${bo["spacing-8"]};
            `}
    display: flex;
    align-items: center;
    align-self: flex-start;

    svg {
        height: 1rem;
        width: 1rem;
        margin-left: ${bo["spacing-4"]};
    }
`,es=$.div`
    display: flex;
    flex-direction: column;
    flex: 1;
    overflow-wrap: anywhere;
`,rs=$.div`
    display: flex;
    flex-direction: column;
    flex: 1;
    order: 1;
    ${e=>{if(e.$showMore&&e.$hasActionLink)return C`
                margin-bottom: ${bo["spacing-8"]};
            `}}
    ${e=>{const r="linear-gradient(to bottom, black 50%, transparent 100%)";if(!e.$showMore&&e.$maxCollapsedHeight)return`\n                max-height: ${e.$maxCollapsedHeight}px;\n\t\t\t\toverflow: hidden;\n                -webkit-mask-image: ${r};\n                mask-image: ${r};\n\t\t\t`}}
`,ts=$.div`
    color: ${uo.text};

    ${e=>"small"===e.$sizeType?Na({textSize:"body-sm"}):Na({textSize:"body-md"})}
`,ns=$.button`
    ${e=>"small"===e.$sizeType?C`
                ${go["body-sm-semibold"]}
            `:C`
                ${go["body-md-semibold"]}
            `}

    display: flex;
    align-items: center;
    align-self: flex-start;
    gap: ${bo["spacing-4"]};
    margin-top: ${bo["spacing-8"]};
    order: 2;

    cursor: pointer;
    user-select: none;
    border: none;
    background: transparent;

    color: ${uo["text-primary"]};
`,os=$(F)`
    transform: rotate(${e=>e.$expanded?180:0}deg);
    transition: transform ${mo["duration-350"]} ${mo["ease-standard"]};
`,is=$.div`
    height: 1.625rem;
    width: 1.625rem;
    margin-right: 0.5rem;
    flex-shrink: 0;

    svg {
        height: 100%;
        width: 100%;
    }

    ${e=>e.$disabled?e.$active?C`
                    color: ${uo["icon-selected-disabled"]};
                `:C`
                    color: ${uo["icon-disabled-subtle"]};
                `:e.$active?C`
                color: ${uo["icon-selected"]};
            `:C`
            color: ${uo["icon-subtle"]};
        `};
`,as=C`
    margin-bottom: ${e=>e.$bottomMargin||0}rem;

    // Counter matters
    counter-reset: list;

    ${e=>e.$size&&go[`${e.$size}-regular`]}
    font-weight: ${go.Spec["weight-regular"]};
    color: ${uo.text};

    // nested lists styling
    ol,
    ul {
        margin-top: 0.5rem;
        margin-bottom: 0.5rem;
    }
`,ss=$.ol`
    ${as}

    margin-left: 3em;

    ${yo.MaxWidth.lg} {
        margin-left: 2.5em;
    }

    li {
        position: relative;
    }

    ${e=>{const{reversed:r}=e,t=e.$counterType||"decimal",n=e.$counterSeparator||")";return C`
            li:before {
                content: counter(list, ${t}) "${n}";
                counter-increment: ${r?"list -1":"list"};
                position: absolute;
                left: -2em;
            }
        `}}

    ${e=>{const{reversed:r,start:t}=e;if(t){return C`
                counter-reset: list ${r?t+1:t-1};
            `}}}

    list-style-position: outside;
    list-style-type: none;

    ul > li:before {
        content: "";
    }
`,ls=$.ul`
    ${as}

    margin-left: ${e=>e.$hasCustomIcon?0:"2.5em"};
    list-style-type: ${e=>e.$hasCustomIcon?"none":e.$bulletType||"disc"};

    ${e=>e.$hasCustomIcon&&C`
            & > li {
                display: flex;
                align-items: flex-start;
                gap: 0.5em;
            }
        `}
`,ds=n=>{var{size:i,bulletType:a,bottomMargin:s,children:l}=n,d=ae(n,["size","bulletType","bottomMargin","children"]);const c=void 0!==a&&"string"!=typeof a;return r(ls,Object.assign({$size:i,$bulletType:c?void 0:a,$bottomMargin:s,$hasCustomIcon:c},d,{children:c?o.Children.map(l,(n=>o.isValidElement(n)?o.cloneElement(n,{children:e(t,{children:[r("div",{"aria-hidden":!0,children:a}),r("div",{children:n.props.children})]})}):n)):l}))};ds.displayName="TextList.Ul";const cs=e=>{var{size:t,counterType:n,counterSeparator:o,bottomMargin:i,children:a}=e,s=ae(e,["size","counterType","counterSeparator","bottomMargin","children"]);return r(ss,Object.assign({$size:t,$counterType:n,$counterSeparator:o,$bottomMargin:i},s,{children:a}))};cs.displayName="TextList.Ol";const us=ds,gs=$.div`
    position: relative;
    display: inline-flex;
    min-width: 10.375rem;
    border-radius: ${fo.sm};
    border-width: 1px;
    border-style: solid;
    overflow: hidden;
    flex-direction: column;
    height: fit-content;
    background: ${uo.bg};

    &:has(input:focus-visible) {
        outline: 2px solid ${uo["focus-ring"]};
        outline-offset: 0;
    }

    ${e=>{if(!e.$indicator)return C`
                justify-content: center;
            `}}

    // Container min width to fit content
    ${e=>{if(e.$useContentWidth)return C`
                min-width: unset;
            `}}

    // apply container border and header background color
    ${e=>"no-border"===e.$styleType?e.$error?e.$disabled?C`
                            border-color: ${uo["border-error"]};
                        `:C`
                            border-color: ${uo["border-error"]};

                            &:has(${ys}:hover) {
                                @media (pointer: fine) {
                                    background: ${uo["bg-hover-subtle"]};
                                }
                            }
                        `:e.$disabled?e.$selected?C`
                            border: none;
                            background: ${uo["bg-selected-disabled"]};
                        `:C`
                            border: none;
                        `:e.$selected?C`
                        border: none;
                        background: ${uo["bg-selected"]};

                        &:has(${ys}:hover) {
                            @media (pointer: fine) {
                                background: ${uo["bg-selected-hover"]};

                                & ${bs} {
                                    color: ${uo["text-selected-hover"]};
                                }

                                & ${Ds} {
                                    color: ${uo["icon-selected-hover"]};
                                }
                            }
                        }
                    `:C`
                    border: none;

                    &:has(${ys}:hover) {
                        @media (pointer: fine) {
                            background: ${uo["bg-hover-subtle"]};
                        }
                    }
                `:e.$error?e.$disabled?C`
                            border-color: ${uo["border-error"]};
                        `:C`
                            border-color: ${uo["border-error"]};

                            &:has(${ys}:hover) {
                                @media (pointer: fine) {
                                    background: ${uo["bg-hover-subtle"]};
                                }
                            }
                        `:e.$disabled?e.$selected?C`
                            border-color: ${uo["border-selected-disabled"]};
                            background: ${uo["bg-selected-disabled"]};
                        `:C`
                            border-color: ${uo["border-disabled"]};
                            background: ${uo["bg-disabled"]};
                        `:e.$selected?C`
                        border-color: ${uo["border-selected"]};
                        background: ${uo["bg-selected"]};

                        &:has(${ys}:hover) {
                            @media (pointer: fine) {
                                background: ${uo["bg-selected-hover"]};

                                & ${bs} {
                                    color: ${uo["text-selected-hover"]};
                                }

                                & ${Ds} {
                                    color: ${uo["icon-selected-hover"]};
                                }
                            }
                        }
                    `:C`
                    border-color: ${uo.border};

                    &:has(${ys}:hover) {
                        @media (pointer: fine) {
                            background: ${uo["bg-hover-subtle"]};
                        }
                    }
                `}
`,ms=$.input`
    position: absolute;
    height: 100%;
    width: 100%;
    cursor: ${e=>e.$disabledVisual?"not-allowed":"pointer"};
    top: 0;
    left: 0;
    opacity: 0;

    /* Hide appearance but keep it focusable using keyboard interactions */
    appearance: none;
    background: transparent;
    border: none;
`,hs=$.div`
    display: flex;
`,bs=$.div`
    display: flex;
    flex-direction: column;
    overflow-wrap: anywhere;
    width: 100%;
    overflow: hidden;

    // apply header container text color
    ${e=>e.$disabled?e.$selected?C`
                    color: ${uo["text-selected-disabled"]};
                `:C`
                    color: ${uo["text-disabled"]};
                `:e.$selected?C`
                color: ${uo["text-selected"]};
            `:C`
            color: ${uo.text};
        `}
`,fs=$.label`
    ${e=>e.$selected?go["body-baseline-semibold"]:go["body-baseline-regular"]};
    overflow: hidden;
    display: -webkit-box;
    text-overflow: ellipsis;
    -webkit-box-orient: vertical;
    overflow-wrap: break-word;
    -webkit-line-clamp: ${e=>{var r,t;return null!==(t=null===(r=e.$maxLines)||void 0===r?void 0:r.desktop)&&void 0!==t?t:"none"}};
    ${yo.MaxWidth.lg} {
        -webkit-line-clamp: ${e=>{var r,t;return null!==(t=null===(r=e.$maxLines)||void 0===r?void 0:r.tablet)&&void 0!==t?t:"none"}};
    }
    ${yo.MaxWidth.sm} {
        -webkit-line-clamp: ${e=>{var r,t;return null!==(t=null===(r=e.$maxLines)||void 0===r?void 0:r.mobile)&&void 0!==t?t:"none"}};
    }
`,ps=$.div`
    ${go["body-md-regular"]}
    margin-top: 0.5rem;

    z-index: 1; // forces sublabel to render above the input
    pointer-events: none; // to allow click events to be passed to the input

    strong,
    b {
        ${go["body-md-semibold"]}
    }
`,ys=$.div`
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
`,vs=$.div`
    display: flex;
    height: 100%;
    width: 100%;
    position: relative;
    padding: ${e=>e.$addPadding?"0.6875rem 0rem 0.6875rem 1rem":"0.6875rem 1rem"};
`,xs=$.button`
    color: ${e=>e.$disabled?uo["text-disabled"]:uo["text-error"]};
    white-space: nowrap;
    ${go["body-md-semibold"]}
    height: fit-content;
    padding: 0.6875rem 1rem 0.6875rem 0.5rem;
    border: none;
    background: none;

    cursor: ${e=>e.$disabled?"not-allowed":"pointer"};
`,ws=$.button`
    color: ${e=>e.disabled?uo["text-disabled"]:uo["text-primary"]};
    ${go["body-baseline-semibold"]}
    display: flex;
    align-items: center;
    justify-content: flex-end;
    border: none;
    background-color: ${uo.bg};
    cursor: ${e=>e.disabled?"not-allowed":"pointer"};
    padding: 0 1rem 0.6875rem 1rem;
    padding-top: ${e=>e.$paddingTopRequired?"0.6875rem":"0rem"};
    width: 100%;

    svg {
        width: 1em;
        height: 1em;
        margin-left: 0.5rem;
    }
`,Fs=$.div`
    width: 100%;
    color: ${e=>e.$disabled?uo["text-disabled"]:uo["text-error"]};
    border: none;
    background: ${uo.bg};
    cursor: ${e=>e.$disabled?"not-allowed":"pointer"};
    padding: 0.6875rem 1rem 0.5rem 1rem;
`,$s=$((t=>{var{type:n,className:o,children:i,actionLink:a,actionLinkIcon:l,sizeType:d="default",showIcon:c=!1,customIcon:u,maxCollapsedHeight:m,role:b}=t,f=ae(t,["type","className","children","actionLink","actionLinkIcon","sizeType","showIcon","customIcon","maxCollapsedHeight","role"]);const[p,y]=s(!1),[v,x]=s(!1),{height:w,ref:F}=Fa(),[$]=s((()=>Di.generate())),C=h((()=>{y(!m),x(E())}),[m,w]),E=()=>!(!w||!m)&&w>m;g((()=>{C()}),[m,w,C]);return e(Ka,{className:o,$type:n,$sizeType:d,"aria-label":`${(()=>{switch(n){case"success":return"Success";case"warning":return"Warning";case"error":return"Error";case"info":return"Information";case"description":return"Description";default:return"Alert"}})()}`,"data-testid":f["data-testid"],role:b,children:[c&&r(Ja,{$sizeType:d,$type:n,children:(()=>{if(n&&u)return u;switch(n){case"success":return r(I,{"aria-hidden":!0});case"warning":return r(A,{"aria-hidden":!0});case"error":return r(T,{"aria-hidden":!0});case"info":case"description":return r(z,{"aria-hidden":!0});default:return null}})()}),e(es,{children:[v&&e(ns,{$sizeType:d,$type:n,type:"button","aria-expanded":p,"aria-controls":$,onClick:()=>y(!p),children:["Show ",p?"less":"more",r(os,{$expanded:p})]}),e(rs,{id:$,$maxCollapsedHeight:E()?m:void 0,$showMore:p,$hasActionLink:!!a,inert:Sa(!!m&&!p),children:[r(ts,{ref:F,$type:n,$sizeType:d,children:i}),a?e(Qa,Object.assign({"data-testid":"action-link",$type:n,$sizeType:d,underlineStyle:"none"},a,{children:[a.children,l||r(B,{})]})):null]})]})]})}))`
    width: 100%;
    user-select: none;
`,Cs=$.div`
    padding: 0 1rem;
    padding-top: 0.6875rem;
    padding-bottom: ${e=>e.$isFinalItem?"0.6875rem":"0.5rem"};
    background-color: ${uo.bg};
    ${Na({textSize:"body-md"})}

    ${e=>e.$disabled?C`
                color: ${uo["text-disabled"]};
            `:e.$selected?C`
                color: ${uo["text-selected"]};
            `:C`
                color: ${uo.text};
            `}
`,Es=$(Xa.BodyMD)`
    color: ${e=>e.$disabled?uo["text-disabled"]:uo["text-error"]};
`,Ss=$(us)`
    color: ${e=>e.$disabled?uo["text-disabled"]:uo["text-error"]};
`,Ds=$((({type:e,active:t=!1,disabled:n,className:o})=>{let i;switch(e){case"checkbox":i=r(t?W:_,{});break;case"radio":i=r(t?R:L,{});break;case"tick":i=r(N,{});break;case"cross":i=r(j,{});break;default:i=null}return r(is,{className:o,$active:t,$disabled:n,"aria-hidden":!0,children:i})}))`
    ${e=>e.$disabled?e.$selected?C`
                    color: ${uo["icon-selected-disabled"]};
                `:C`
                    color: ${uo["icon-disabled-subtle"]};
                `:e.$selected?C`
                color: ${uo["icon-selected"]};
            `:C`
            color: ${uo["icon-subtle"]};
        `};
`,ks=$.button`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: ${bo["spacing-24"]};
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

        ${({$highlight:e})=>e&&C`
                background-color: ${uo["bg-hover-neutral"]};
            `}
    }
`,Bs=o.forwardRef(((e,t)=>{var{children:n,focusHighlight:o=!0,focusOutline:i="none",type:a="button"}=e,s=ae(e,["children","focusHighlight","focusOutline","type"]);return r(ks,Object.assign({ref:t,$outline:i,$highlight:o,type:a},s,{children:n}))})),Ts=$.div`
    overflow: hidden;

    ${yo.MaxWidth.xxs} {
        max-width: 100%;
    }
`,As=$.div`
    position: relative;
    width: 100%;
    padding: ${bo["spacing-8"]} ${bo["spacing-20"]}
        ${bo["spacing-24"]} ${bo["spacing-20"]};
    display: flex;
    flex-direction: column;
    background: ${uo.bg};
    border: ${ho["width-010"]} ${ho.solid} ${uo.border};
    border-radius: ${fo.sm};
`,zs=$.div`
    display: flex;
    align-items: center;
    justify-content: space-between;

    ${yo.MaxWidth.xxs} {
        flex-direction: column;
        width: 100%;
    }
`,Is=$.div`
    display: flex;
    justify-content: flex-end;
    margin-top: ${bo["spacing-16"]};
    gap: ${bo["spacing-8"]};

    ${yo.MaxWidth.xxs} {
        flex-direction: column-reverse; // FIXME: this breaks tab focus
        margin-top: ${bo["spacing-32"]};
    }
`,Os=$.div`
    display: flex;
    align-items: center;
    margin-right: ${bo["spacing-32"]};

    ${yo.MaxWidth.xxs} {
        margin-right: 0;
        width: 100%;
    }
`,Ms=$.div`
    display: flex;
    gap: ${bo["spacing-8"]};

    ${yo.MaxWidth.lg} {
        flex-direction: column;
    }

    ${yo.MaxWidth.xxs} {
        flex-direction: row;
        width: 100%;
    }
`,Hs=$.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    ${yo.MaxWidth.xxs} {
        width: 6rem;
    }
`,Ls=$(Bs)`
    width: 5rem;
    padding: ${bo["spacing-16"]} 0;
    color: ${uo.icon};

    svg {
        height: 1rem;
        width: 1rem;
    }

    &:hover {
        color: ${uo["icon-hover"]};
    }
`,Rs=$(Xa.BodyBL)`
    flex-shrink: 0;
    width: 1.5rem;
    text-align: center;
`,js=$(Po)`
    height: calc(3rem - 2px);
    width: 5rem;
    display: flex;
    align-items: center;
    justify-content: center;

    ${yo.MaxWidth.xxs} {
        width: 100%;
    }
`,_s=$(Vo)`
    text-align: center;
    width: 100%;

    &:focus::placeholder {
        color: transparent;
    }
`,Ws=$((n=>{var{type:o="checkbox",indicator:i,checked:l,styleType:d="default",children:c,childrenMaxLines:u,subLabel:m,disabled:h,error:f,name:p,id:y,className:v,compositeSection:x,removable:w,focusableWhenDisabled:F,useContentWidth:$,onRemove:C,onChange:E,"data-testid":S,"aria-describedby":B}=n,T=ae(n,["type","indicator","checked","styleType","children","childrenMaxLines","subLabel","disabled","error","name","id","className","compositeSection","removable","focusableWhenDisabled","useContentWidth","onRemove","onChange","data-testid","aria-describedby"]);const{collapsible:A=!0,errors:z,children:I,initialExpanded:O}=x||{},[M,H]=s(l),[L,R]=s(!!O),j=b((()=>{const e=Array.isArray(z)&&(null==z?void 0:z.length)>0,r=!Array.isArray(z)&&!!z;return e||r}),[z]),[_]=s(Di.generate()),W=y?`${y}`:`tg-${_}`,N=a(null),P=!!h&&!!F,Y=!!h&&!F,V=!!h;g((()=>{H(l)}),[l]),g((()=>{M&&R(null==O||O)}),[M]);const U=e=>{if(V)e.preventDefault();else if(E)E(e);else switch(o){case"checkbox":H((e=>!e));break;case"radio":case"yes":case"no":M||H(!0)}},Z=()=>{h||R(!L)},G=()=>{h||!C||C()},q=()=>{var e;null===(e=null==N?void 0:N.current)||void 0===e||e.click()},X=e=>{e.stopPropagation()},K=()=>{let e;switch(o){case"yes":e="tick";break;case"no":e="cross";break;case"checkbox":case"radio":e=o}return r(Ds,{type:e,active:M,disabled:h,$selected:M,$disabled:h})},J=()=>{if(!m)return null;let e;return e="function"==typeof m?m():m,r(ps,{"data-id":"toggle-sublabel",id:`${W}-sublabel`,"aria-hidden":!0,children:e})},Q=n=>e(t,{children:[r(Es,{weight:"semibold",$disabled:h,children:"Error"}),r(Ss,{$disabled:h,children:null==n?void 0:n.map(((e,t)=>r("li",{id:`${W}-error-list-item-${t}`,children:r(Es,{weight:"semibold",$disabled:h,children:e})},t)))})]});return e(gs,{$selected:M,$disabled:h,className:v,$styleType:d,$error:f,$indicator:i,$useContentWidth:$,id:y,"data-testid":S,children:[(()=>{const t=["string"==typeof m?`${W}-sublabel`:null,B].filter(Boolean).join(" ")||void 0;return e(ys,{id:`${W}-header-container`,$disabled:h,$error:f,$selected:M,$indicator:i,$styleType:d,children:[r(vs,{$addPadding:w,children:e(hs,{id:`${W}-input-container`,onClick:q,children:[r(ms,Object.assign({ref:N,name:p,id:`${W}-input`,type:"checkbox"===o?"checkbox":"radio","data-testid":"toggle-input",disabled:Y,"aria-disabled":P,$disabledVisual:h,onChange:U,onClick:X,checked:M,tabIndex:P?0:void 0,"aria-describedby":t},T)),i&&K(),e(bs,{$selected:M,$disabled:h,children:[r(fs,{htmlFor:`${W}-input`,"data-testid":"toggle-label",id:`${W}-label`,$maxLines:u,$selected:M,children:c}),m&&J()]})]})}),w&&r(xs,{type:"button",$disabled:h,onClick:G,id:`${W}-remove-button`,children:"Remove"})]})})(),I&&e("div",{children:[(!A||L)&&r(Cs,{"data-id":"toggle-composite-children",$isFinalItem:!A,$disabled:h,children:I}),A&&!L&&j&&r(Fs,{$disabled:h,onClick:Z,id:`${W}-error-alert`,children:r($s,{type:h?"description":"error",className:v,showIcon:!0,children:Array.isArray(z)?Q(z):z})}),A&&e(ws,{$paddingTopRequired:!L&&!j,disabled:h,onClick:Z,"data-testid":L?"collapse-button":"expand-button",children:[L?"Show less":"Show more",r(L?k:D,{"aria-hidden":!0})]})]})]})}))`
    min-width: 5rem;
    flex: 1;
`,Ns=$(Wa.Small)`
    width: 7rem;

    ${yo.MaxWidth.sm} {
        flex: 1;
    }

    ${yo.MaxWidth.xxs} {
        width: 100%;
    }
`;var Ps,Ys,Vs;!function(e){e.HOUR_UP="hour-up",e.HOUR_DOWN="hour-down",e.MINUTE_UP="minute-up",e.MINUTE_DOWN="minute-down"}(Ps||(Ps={})),function(e){e.HOUR="hour",e.MINUTE="minute"}(Ys||(Ys={})),function(e){e.AM="am",e.PM="pm"}(Vs||(Vs={}));const Us=({id:t,value:n,show:o,format:i,onChange:l,onCancel:d})=>{const c=Qo.getTimeValues(i,n),[u,m]=s(c.hour),[b,f]=s(c.minute),[p,y]=s(c.period),v=a(null),x=a(null);g((()=>{if(o&&v.current&&v.current.focus({preventScroll:!0}),o){const{hour:e,minute:r,period:t}=Qo.getTimeValues(i,n);m(e),f(r),y(t)}}),[o,n,i]),g((()=>{const e=v.current,r=x.current;return e&&e.addEventListener("keydown",w),r&&r.addEventListener("keydown",w),()=>{e&&e.removeEventListener("keydown",w),r&&r.removeEventListener("keydown",w)}}),[]);const w=e=>{["Digit0","Digit1","Digit2","Digit3","Digit4","Digit5","Digit6","Digit7","Digit8","Digit9","Tab","Backspace","Delete","ArrowLeft","ArrowRight","ArrowUp","ArrowDown"].includes(e.code)||["Backspace","0","1","2","3","4","5","6","7","8","9"].includes(e.key)||e.preventDefault()},F=h((e=>{switch(e.currentTarget.name){case Ps.MINUTE_UP:f(Qo.updateMinutes(b,"add"));break;case Ps.MINUTE_DOWN:f(Qo.updateMinutes(b,"minus"));break;case Ps.HOUR_UP:m(Qo.updateHours(u,"add"));break;case Ps.HOUR_DOWN:m(Qo.updateHours(u,"minus"))}}),[u,b]),$=e=>{e.target.select()},C=e=>{const r=e.target.value;switch(e.target.name){case Ys.HOUR:r.length<=2&&m(r);break;case Ys.MINUTE:r.length<=2&&f(r)}},E=e=>{const r=parseInt(e.target.value);if(!isNaN(r))switch(e.target.name){case Ys.HOUR:{const t=r>23||r<0?c.hour:Qo.convertHourTo12HourFormat(e.target.value);m(t);break}case Ys.MINUTE:{const t=r>59||r<0?c.minute:e.target.value;f(Ko.padValue(t));break}}},S=e=>{switch(e.target.name){case Vs.AM:y(Jo.AM);break;case Vs.PM:y(Jo.PM)}},B=e=>t?`${t}-${e}`:e;return r(Ts,{children:e(As,{"data-testid":B("timepicker-dropdown"),inert:Sa(!o),children:[e(zs,{children:[e(Os,{children:[e(Hs,{children:[r(Ls,{"aria-label":"increase hour",name:Ps.HOUR_UP,tabIndex:-1,onClick:F,"data-testid":B("hour-increment-button"),children:r(k,{})}),r(js,{children:r(_s,{"aria-label":"hour",type:"number",name:Ys.HOUR,id:"hour",maxLength:2,pattern:"[0-9]{2}",ref:v,value:u,onFocus:$,onChange:C,onBlur:E,min:1,max:12,placeholder:"HH","data-testid":B("hour-input")})}),r(Ls,{"aria-label":"decrease hour",name:Ps.HOUR_DOWN,tabIndex:-1,onClick:F,"data-testid":B("hour-decrement-button"),children:r(D,{})})]}),r(Rs,{children:":"}),e(Hs,{children:[r(Ls,{"aria-label":"increase minute",name:Ps.MINUTE_UP,tabIndex:-1,onClick:F,"data-testid":B("minute-increment-button"),children:r(k,{})}),r(js,{children:r(_s,{"aria-label":"minute",type:"number",name:Ys.MINUTE,id:"minute",maxLength:2,pattern:"[0-9]{2}",ref:x,value:b,onChange:C,onBlur:E,onFocus:$,min:0,max:59,placeholder:"MM","data-testid":B("minute-input")})}),r(Ls,{"aria-label":"decrease minute",name:Ps.MINUTE_DOWN,tabIndex:-1,onClick:F,"data-testid":B("minute-decrement-button"),children:r(D,{})})]})]}),e(Ms,{children:[r(Ws,{checked:p===Jo.AM,name:Vs.AM,type:"radio",onChange:S,"data-testid":B("am-toggle"),"aria-label":"AM",children:"AM"}),r(Ws,{checked:p===Jo.PM,name:Vs.PM,type:"radio",onChange:S,"data-testid":B("pm-toggle"),"aria-label":"PM",children:"PM"})]})]}),e(Is,{children:[r(Ns,{type:"button",styleType:"secondary",onClick:d,"data-testid":B("cancel-button"),children:"Cancel"}),r(Ns,{type:"button",onClick:()=>{let e;e="24hr"===i?Qo.convertTo24HourFormat({hour:u,minute:b,period:p}):`${u}:${b}${p}`,l(e)},disabled:""===u||""===b,"data-testid":B("confirm-button"),children:"Done"})]})]})})},Zs=e=>"small"===e?2.5:3;$.div`
    position: relative;
    width: 100%;
    ${e=>{const r=Zs(e.$variant);return C`
            min-height: ${r}rem;
            height: ${r}rem; // Need this to persist the height when expanding or collapsing list
        `}}
`;const Gs=C`
    display: flex;
    position: relative;
    align-items: center;
    justify-content: space-between;
    padding: 0 ${bo["spacing-16"]};
    // exclude top and bottom borders
    height: calc(${e=>Zs(e.$variant)}rem - 2px);
    width: 100%;
    border-radius: ${fo.sm};
    border: none;
    background: transparent;

    &:focus,
    &:active {
        outline: none;
    }

    &:focus-visible {
        outline: 2px solid ${uo["border-focus"]};
    }
`,qs=$.button`
    ${Gs}
    cursor: pointer;
`;$.div`
    ${Gs}
`;const Xs=E`
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
    border: ${ho["width-010"]} ${ho.solid} ${uo.border};
    border-radius: ${fo.sm};
    background: ${uo.bg};
    overflow: hidden;

    &:focus-within {
        border-color: ${uo["border-focus"]};
        box-shadow: 0px 0px 4px 0px
            rgb(from ${uo["border-focus"]} r g b / 50%) inset; // TODO: confirm shadow
    }

    ${e=>e.$expanded?C`
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                z-index: 2;
            `:C`
                animation: ${Xs} 0.5s ease-in-out;
            `}

    ${e=>e.$disabled?C`
                background: ${uo["bg-disabled"]};

                ${qs} {
                    cursor: not-allowed;
                }

                &:focus-within {
                    border-color: ${uo.border};
                    box-shadow: none;
                }
            `:e.$readOnly?C`
                border: none;
                background: transparent !important;

                ${qs} {
                    padding: 0;
                }

                &:focus-within {
                    border: none;
                    box-shadow: none;
                }
            `:e.$error?C`
                border-color: ${uo["border-error"]};

                &:focus-within {
                    border-color: ${uo["border-error"]};
                    box-shadow: 0px 0px 4px 0px
                        rgb(from ${uo["border-error"]} r g b / 50%) inset; // TODO: confirm shadow
                }
            `:void 0}
`,$.div`
    transform: rotate(${e=>e.$expanded?180:0}deg);
    transition: transform ${mo["duration-250"]} ${mo["ease-default"]};
    margin-left: ${bo["spacing-16"]};
`,$(D)`
    color: ${uo.icon};
`,$.div`
    height: 1px;
    background: ${uo.border};
    margin: 0 ${bo["spacing-8"]};
`,$.div`
    display: flex;
    flex: 1;
    word-break: break-all;
    ${e=>{if(e.$disabled)return C`
                color: ${uo["text-disabled"]};
            `}}
`;var Ks;$($.div`
    ${e=>"small"===e.$variant?go["body-md-regular"]:go["body-baseline-regular"]}
    text-align: left;
    ${e=>{if("middle"!==e.$truncateType)return C`
                    ${Pa(1)}
                `}}
    overflow: hidden;
`)`
    color: ${uo["text-subtler"]};
`,function(e){e.Ready="overlay-context-ready",e.Change="overlay-context-change"}(Ks||(Ks={}));const Js=e=>"right"===e?"bottom-end":"bottom-start",Qs=f({elementWidth:0,styles:{},setFloatingRef:()=>{},getFloatingProps:()=>({})}),el=({enabled:n,isOpen:o,onOpen:i,onClose:l,onDismiss:d,renderElement:c,renderDropdown:u,customZIndex:m,clickToToggle:h=!1,offset:b=0,alignment:f="left",fitAvailableHeight:y,rootNode:v,positionRef:x})=>{var w;const F=p(S),$=po["sm-max"]({theme:F}),C=a(null),{width:E=0}=Fa({targetRef:null!=x?x:C,handleHeight:!1}),D={name:"center",fn:({x:e,rects:r})=>{const t=0===e||e+r.floating.width===window.innerWidth,n=window.innerWidth<$;return{x:t&&n?(window.innerWidth-r.floating.width)/2:e}}},{refs:k,floatingStyles:B,context:T}=Y({open:o,onOpenChange:(e,r,t)=>{"escape-key"===t?null==d||d():e&&!o?null==i||i():!e&&o&&(null==l||l(t))},whileElementsMounted:V,placement:Js(f),middleware:[U(b),Z(),G({limiter:q()}),X({apply({availableHeight:e,elements:r}){!y||e>=r.floating.scrollHeight?r.floating.style.setProperty("--available-height",""):r.floating.style.setProperty("--available-height",`${Math.max(0,e)}px`)}}),D]}),A=(()=>{const[e,r]=s(void 0),t=P();return g((()=>{if(!t)return void r(void 0);const e=e=>{r(e.zIndex)};return t.events.on(Ks.Change,e),t.events.emit(Ks.Ready),()=>t.events.off(Ks.Change,e)}),[t]),e})(),{isMounted:z,styles:I}=K(T,{initial:{opacity:0},open:{opacity:1},duration:300}),O=J(T,{enabled:n,toggle:h,keyboardHandlers:h}),M=Q(T,{enabled:n}),{getReferenceProps:H,getFloatingProps:L}=ee([O,M]),R={elementWidth:E,styles:Object.assign(Object.assign(Object.assign({},I),B),{zIndex:null!==(w=null!=m?m:A)&&void 0!==w?w:50}),setFloatingRef:k.setFloating,getFloatingProps:L};return e(t,{children:[r("div",Object.assign({ref:e=>{C.current=e,k.setReference(e)}},H(),{children:c()})),z&&r(re,{root:v,children:r(te,{context:T,modal:!1,initialFocus:-1,returnFocus:!1,children:r(Qs.Provider,{value:R,children:u(R)})})})]})},rl=t=>{var{id:n,disabled:o=!1,error:i,value:l,format:d="24hr",readOnly:c,onChange:u,onFocus:m,onBlur:h,alignment:b="left",dropdownZIndex:f,dropdownRootNode:p,"aria-labelledby":y,"aria-describedby":v,"aria-invalid":x}=t,w=ae(t,["id","disabled","error","value","format","readOnly","onChange","onFocus","onBlur","alignment","dropdownZIndex","dropdownRootNode","aria-labelledby","aria-describedby","aria-invalid"]);const[F,$]=s(!1),[C,E]=s("none"),[S,D]=s(""),[k,B]=s(""),[T,A]=s(!1),z=!c&&!o,I=a(null),[O]=s((()=>Di.generate())),M=`${O}-start-label`,H=`${O}-end-label`,L=e=>Da(y,"start"===e?M:H),R=()=>Da(v);g((()=>{l&&(D(l.start),B(l.end))}),[l]);const j=e=>{z&&(T||F||null==m||m(),A(!0),E(e),$(!0))},_=e=>{var r,t;const n=!!(null==e?void 0:e.keepFocus),o=null!==(r=null==e?void 0:e.triggerBlur)&&void 0!==r?r:!n;$(!1),E("none"),A(n),o&&(null==h||h()),n&&(null===(t=I.current)||void 0===t||t.focus())},W=e=>{var r,t,n;if(!T||F)return;const o=e.relatedTarget,i=(null===(r=null==o?void 0:o.matches)||void 0===r?void 0:r.call(o,"[data-floating-ui-focusable]"))||(null===(t=null==o?void 0:o.matches)||void 0===t?void 0:t.call(o,"[data-floating-ui-focus-guard]"));!(!o||!(null===(n=I.current)||void 0===n?void 0:n.contains(o)))||i||(A(!1),null==h||h())},N=e=>{D(e),null==u||u({start:e,end:k}),E("end"),$(!0),A(!0)},P=e=>{B(e),null==u||u({start:S,end:e}),""===S?(E("start"),$(!0),A(!0)):_({keepFocus:!0})};return r(Zo,Object.assign({id:n},w,{children:r(el,{enabled:z,isOpen:F,renderElement:()=>r(Go,{ref:I,tabIndex:-1,onBlur:W,"data-testid":"timepicker-container",role:"group",$disabled:o,$error:i,$readOnly:c,$focused:T,children:e(Lo,{error:i,currentActive:C,children:[r(qo,{onFocus:()=>j("start"),onClick:()=>j("start"),readOnly:!0,placeholder:"From",value:Qo.formatDisplayValue(S,d),"data-testid":w["data-testid"]?`${w["data-testid"]}-timepicker-selector-from`:"timepicker-selector-from",role:"combobox","aria-expanded":!o&&!c&&F,"aria-invalid":i||x,"aria-disabled":o,"aria-readonly":c,"aria-labelledby":L("start"),"aria-describedby":R()}),r(qo,{onClick:()=>j("end"),readOnly:!0,placeholder:"To",value:Qo.formatDisplayValue(k,d),"data-testid":w["data-testid"]?`${w["data-testid"]}-timepicker-selector-to`:"timepicker-selector-to",role:"combobox","aria-expanded":!o&&!c&&F,"aria-invalid":i||x||void 0,"aria-disabled":o||void 0,"aria-readonly":c||void 0,"aria-labelledby":L("end"),"aria-describedby":R()})]})}),renderDropdown:({styles:t,setFloatingRef:o,getFloatingProps:i})=>F?e("div",Object.assign({ref:o,style:t,role:"dialog","aria-label":"start"===C?"Selecting for: Start time":"end"===C?"Selecting for: End time":void 0},i(),{children:["start"===C&&r(Us,{id:n?`${n}-start`:void 0,show:!0,value:S,format:d,onCancel:()=>_({keepFocus:!0}),onChange:N}),"end"===C&&r(Us,{id:n?`${n}-end`:void 0,show:!0,value:k,format:d,onCancel:()=>_({keepFocus:!1}),onChange:P})]}),C):null,onClose:()=>_({keepFocus:!1}),onDismiss:()=>_({keepFocus:!0}),clickToToggle:!1,offset:8,alignment:b,customZIndex:f,rootNode:p})}))};$.div`
    margin-bottom: ${bo["spacing-8"]};
`,$.label`
    color: ${uo["text-subtle"]};
    display: inline-block;

    ${go["form-label"]}
    ${Na()}
    font-weight: ${go.Spec["weight-semibold"]};
`;const tl=$(T)`
    height: 1lh;
    width: 1em;
    flex-shrink: 0;
    color: ${uo["icon-error-strong"]};
`,nl=$.div`
    ${go["body-sm-semibold"]}
    display: flex;
    gap: ${bo["spacing-4"]};
    margin-top: ${bo["spacing-8"]};
`,ol=$.p`
    color: ${uo["text-error"]};
    margin-bottom: 0;
    outline: none;
`;$.span`
    ${go["form-description"]}
    color: ${uo["text-subtler"]};
    display: block;
`,$(Vo)`
    width: 100%;
    height: calc(3rem - 2px); // exclude top and bottom borders

    ${e=>"no-border"!==e.$styleType&&C`
            padding-left: ${e.$visuallyReadOnly?0:bo["spacing-16"]};
            padding-right: ${e.$visuallyReadOnly||e.$showClear?0:bo["spacing-16"]};
        `}
`;const il=$(Uo)`
    height: auto;
    padding: ${bo["spacing-12"]} ${bo["spacing-16"]};

    cursor: pointer;
    color: ${uo.icon};

    ${e=>"no-border"===e.$styleType&&C`
            margin-right: -${bo["spacing-12"]};
        `}
`,al=$(j)`
    height: 1.25rem;
    width: 1.25rem;
    vertical-align: middle;
`;$.div`
    display: flex;
    width: 100%;
`,$(Po)`
    display: flex;
    align-items: center;
    width: 100%;
`;const sl=$(il)`
    position: absolute;
    right: 0;
    padding-left: ${bo["spacing-8"]};
    margin-right: 0;
`;$(Yo)`
    height: 3rem;
`,$.button`
    appearance: none;
    border: 0;
    background: transparent;
    display: flex;
    flex: 1;
    color: ${uo.text};

    &:focus,
    &:active {
        outline: none;
    }

    &:focus-visible {
        outline: 2px solid ${uo["border-focus"]};
        border-radius: 4px;
    }

    &:disabled {
        cursor: not-allowed;
    }
`;const ll=$.div`
    font-weight: ${e=>e.$bold?go.Spec["weight-semibold"]:go.Spec["weight-regular"]};

    ${e=>e.$disabled?C`
                color: ${uo["text-disabled"]};
            `:e.$selected?C`
                color: ${uo["text-selected"]};
            `:C`
                color: ${uo.text};
            `}
    width: 100%;

    ${e=>"end"===e.$truncateType&&Pa(e.$maxLines||2)}
    overflow-wrap: break-word;
`,dl=$.div`
    color: ${uo["text-subtlest"]};
    width: 100%;

    ${e=>"end"===e.$truncateType&&Pa(e.$maxLines||2)}
    overflow-wrap: break-word;

    ${e=>"next-line"===e.$labelDisplayType?C`
                    ${go["body-md-semibold"]}
                `:C`
                    ${go["body-baseline-regular"]}
                `}
`,cl=$.span`
    font-weight: ${go.Spec["weight-semibold"]};
`,ul=$.div`
    text-align: left;
    width: 100%;
    overflow: hidden;
    overflow-wrap: break-word;

    ${e=>"small"===e.$variant?go["body-md-regular"]:go["body-baseline-regular"]}

    ${e=>{switch(e.$labelDisplayType){case"next-line":return C`
                    display: flex;
                    flex-direction: column;
                `;case"inline":return C`
                    ${ll} {
                        display: inline;
                    }

                    ${dl} {
                        display: inline;
                        margin-left: 0.5rem;
                    }
                `}}}
`,gl=$.div`
    display: inline-block;
    width: ${e=>1===e.$maxLines?50:100}%;
    height: 1lh;
    word-break: break-all;
    overflow: hidden;
`,ml=$.div`
    display: inline-block;
    width: ${e=>1===e.$maxLines?50:100}%;
    height: 1lh;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    direction: rtl;
    text-align: right;
`,hl=({bold:n,displayType:o="inline",label:i,searchTerm:a,maxLines:s=2,selected:l,disabled:d,sublabel:c,truncationType:u="middle",variant:g="default"})=>{const m=p(S),f="small"===g?go.Spec["body-size-md"]({theme:m}):go.Spec["body-size-baseline"]({theme:m}),y=go.Spec["font-family"]({theme:m}),{ref:v,width:x}=Fa(),w=h((e=>{if("inline"!==o||!x)return!1;return Ko.getTextWidth(e,`${f} '${y}'`)>x*s-50}),[x,o,f,y,s]),F=b((()=>w(i)),[w,i]),$=b((()=>c&&w(c)),[w,c]),C=n=>{if(!a)return n;const o=a.toLowerCase().trim(),s=n.toLowerCase().indexOf(o),l=s+a.length;return-1===s?n:e(t,{children:[i.slice(0,s),r(cl,{$variant:g,children:i.slice(s,l)}),i.slice(l)]})},E=n=>e(t,{children:[r(gl,{$maxLines:s,"aria-hidden":!0,children:C(n)}),r(ml,{$maxLines:s,"aria-hidden":!0,children:C(n)})]});return e(ul,{ref:v,$labelDisplayType:F||$?"next-line":o,$variant:g,children:[r(ll,{"aria-label":i,$bold:n,$maxLines:s,$selected:l,$disabled:d,$truncateType:u,children:"middle"===u&&F?E(i):C(i)}),c&&r(dl,{"aria-label":c,$maxLines:s,$truncateType:u,$labelDisplayType:o,children:"middle"===u&&$?E(c):c})]})};var bl=Pr;var fl=function(e){var r=this.__data__,t=r.delete(e);return this.size=r.size,t};var pl=function(e){return this.__data__.get(e)};var yl=function(e){return this.__data__.has(e)},vl=Pr,xl=Yr,wl=ct;var Fl=function(e,r){var t=this.__data__;if(t instanceof vl){var n=t.__data__;if(!xl||n.length<199)return n.push([e,r]),this.size=++t.size,this;t=this.__data__=new wl(n)}return t.set(e,r),this.size=t.size,this},$l=Pr,Cl=function(){this.__data__=new bl,this.size=0},El=fl,Sl=pl,Dl=yl,kl=Fl;function Bl(e){var r=this.__data__=new $l(e);this.size=r.size}Bl.prototype.clear=Cl,Bl.prototype.delete=El,Bl.prototype.get=Sl,Bl.prototype.has=Dl,Bl.prototype.set=kl;var Tl=Bl;var Al=ct,zl=function(e){return this.__data__.set(e,"__lodash_hash_undefined__"),this},Il=function(e){return this.__data__.has(e)};function Ol(e){var r=-1,t=null==e?0:e.length;for(this.__data__=new Al;++r<t;)this.add(e[r])}Ol.prototype.add=Ol.prototype.push=zl,Ol.prototype.has=Il;var Ml=function(e,r){return e.has(r)},Hl=Ol,Ll=function(e,r){for(var t=-1,n=null==e?0:e.length;++t<n;)if(r(e[t],t,e))return!0;return!1},Rl=Ml;var jl=function(e,r,t,n,o,i){var a=1&t,s=e.length,l=r.length;if(s!=l&&!(a&&l>s))return!1;var d=i.get(e),c=i.get(r);if(d&&c)return d==r&&c==e;var u=-1,g=!0,m=2&t?new Hl:void 0;for(i.set(e,r),i.set(r,e);++u<s;){var h=e[u],b=r[u];if(n)var f=a?n(b,h,u,r,e,i):n(h,b,u,e,r,i);if(void 0!==f){if(f)continue;g=!1;break}if(m){if(!Ll(r,(function(e,r){if(!Rl(m,r)&&(h===e||o(h,e,t,n,i)))return m.push(r)}))){g=!1;break}}else if(h!==b&&!o(h,b,t,n,i)){g=!1;break}}return i.delete(e),i.delete(r),g};var _l=function(e){var r=-1,t=Array(e.size);return e.forEach((function(e,n){t[++r]=[n,e]})),t};var Wl=me.Uint8Array,Nl=Er,Pl=jl,Yl=_l,Vl=function(e){var r=-1,t=Array(e.size);return e.forEach((function(e){t[++r]=e})),t},Ul=he?he.prototype:void 0,Zl=Ul?Ul.valueOf:void 0;var Gl=function(e,r,t,n,o,i,a){switch(t){case"[object DataView]":if(e.byteLength!=r.byteLength||e.byteOffset!=r.byteOffset)return!1;e=e.buffer,r=r.buffer;case"[object ArrayBuffer]":return!(e.byteLength!=r.byteLength||!i(new Wl(e),new Wl(r)));case"[object Boolean]":case"[object Date]":case"[object Number]":return Nl(+e,+r);case"[object Error]":return e.name==r.name&&e.message==r.message;case"[object RegExp]":case"[object String]":return e==r+"";case"[object Map]":var s=Yl;case"[object Set]":var l=1&n;if(s||(s=Vl),e.size!=r.size&&!l)return!1;var d=a.get(e);if(d)return d==r;n|=2,a.set(e,r);var c=Pl(s(e),s(r),n,o,i,a);return a.delete(e),c;case"[object Symbol]":if(Zl)return Zl.call(e)==Zl.call(r)}return!1};var ql=function(e,r){for(var t=-1,n=r.length,o=e.length;++t<n;)e[o+t]=r[t];return e},Xl=ql,Kl=de;var Jl=function(e,r,t){var n=r(e);return Kl(e)?n:Xl(n,t(e))};var Ql=function(e,r){for(var t=-1,n=null==e?0:e.length,o=0,i=[];++t<n;){var a=e[t];r(a,t,e)&&(i[o++]=a)}return i},ed=function(){return[]},rd=Object.prototype.propertyIsEnumerable,td=Object.getOwnPropertySymbols,nd=td?function(e){return null==e?[]:(e=Object(e),Ql(td(e),(function(r){return rd.call(e,r)})))}:ed;var od=function(e,r){for(var t=-1,n=Array(e);++t<e;)n[t]=r(t);return n},id=Ee,ad=Se;var sd=function(e){return ad(e)&&"[object Arguments]"==id(e)},ld=Se,dd=Object.prototype,cd=dd.hasOwnProperty,ud=dd.propertyIsEnumerable,gd=sd(function(){return arguments}())?sd:function(e){return ld(e)&&cd.call(e,"callee")&&!ud.call(e,"callee")},md={exports:{}};var hd=function(){return!1};!function(e,r){var t=me,n=hd,o=r&&!r.nodeType&&r,i=o&&e&&!e.nodeType&&e,a=i&&i.exports===o?t.Buffer:void 0,s=(a?a.isBuffer:void 0)||n;e.exports=s}(md,md.exports);var bd=md.exports,fd=/^(?:0|[1-9]\d*)$/;var pd=function(e,r){var t=typeof e;return!!(r=null==r?9007199254740991:r)&&("number"==t||"symbol"!=t&&fd.test(e))&&e>-1&&e%1==0&&e<r};var yd=function(e){return"number"==typeof e&&e>-1&&e%1==0&&e<=9007199254740991},vd=Ee,xd=yd,wd=Se,Fd={};Fd["[object Float32Array]"]=Fd["[object Float64Array]"]=Fd["[object Int8Array]"]=Fd["[object Int16Array]"]=Fd["[object Int32Array]"]=Fd["[object Uint8Array]"]=Fd["[object Uint8ClampedArray]"]=Fd["[object Uint16Array]"]=Fd["[object Uint32Array]"]=!0,Fd["[object Arguments]"]=Fd["[object Array]"]=Fd["[object ArrayBuffer]"]=Fd["[object Boolean]"]=Fd["[object DataView]"]=Fd["[object Date]"]=Fd["[object Error]"]=Fd["[object Function]"]=Fd["[object Map]"]=Fd["[object Number]"]=Fd["[object Object]"]=Fd["[object RegExp]"]=Fd["[object Set]"]=Fd["[object String]"]=Fd["[object WeakMap]"]=!1;var $d=function(e){return wd(e)&&xd(e.length)&&!!Fd[vd(e)]};var Cd=function(e){return function(r){return e(r)}},Ed={exports:{}};!function(e,r){var t=ce,n=r&&!r.nodeType&&r,o=n&&e&&!e.nodeType&&e,i=o&&o.exports===n&&t.process,a=function(){try{var e=o&&o.require&&o.require("util").types;return e||i&&i.binding&&i.binding("util")}catch(e){}}();e.exports=a}(Ed,Ed.exports);var Sd=Ed.exports,Dd=$d,kd=Cd,Bd=Sd&&Sd.isTypedArray,Td=Bd?kd(Bd):Dd,Ad=od,zd=gd,Id=de,Od=bd,Md=pd,Hd=Td,Ld=Object.prototype.hasOwnProperty;var Rd=function(e,r){var t=Id(e),n=!t&&zd(e),o=!t&&!n&&Od(e),i=!t&&!n&&!o&&Hd(e),a=t||n||o||i,s=a?Ad(e.length,String):[],l=s.length;for(var d in e)!r&&!Ld.call(e,d)||a&&("length"==d||o&&("offset"==d||"parent"==d)||i&&("buffer"==d||"byteLength"==d||"byteOffset"==d)||Md(d,l))||s.push(d);return s},jd=Object.prototype;var _d=function(e){var r=e&&e.constructor;return e===("function"==typeof r&&r.prototype||jd)};var Wd=function(e,r){return function(t){return e(r(t))}}(Object.keys,Object),Nd=_d,Pd=Wd,Yd=Object.prototype.hasOwnProperty;var Vd=function(e){if(!Nd(e))return Pd(e);var r=[];for(var t in Object(e))Yd.call(e,t)&&"constructor"!=t&&r.push(t);return r},Ud=je,Zd=yd;var Gd=function(e){return null!=e&&Zd(e.length)&&!Ud(e)},qd=Rd,Xd=Vd,Kd=Gd;var Jd=function(e){return Kd(e)?qd(e):Xd(e)},Qd=Jl,ec=nd,rc=Jd;var tc=function(e){return Qd(e,rc,ec)},nc=Object.prototype.hasOwnProperty;var oc=function(e,r,t,n,o,i){var a=1&t,s=tc(e),l=s.length;if(l!=tc(r).length&&!a)return!1;for(var d=l;d--;){var c=s[d];if(!(a?c in r:nc.call(r,c)))return!1}var u=i.get(e),g=i.get(r);if(u&&g)return u==r&&g==e;var m=!0;i.set(e,r),i.set(r,e);for(var h=a;++d<l;){var b=e[c=s[d]],f=r[c];if(n)var p=a?n(f,b,c,r,e,i):n(b,f,c,e,r,i);if(!(void 0===p?b===f||o(b,f,t,n,i):p)){m=!1;break}h||(h="constructor"==c)}if(m&&!h){var y=e.constructor,v=r.constructor;y==v||!("constructor"in e)||!("constructor"in r)||"function"==typeof y&&y instanceof y&&"function"==typeof v&&v instanceof v||(m=!1)}return i.delete(e),i.delete(r),m},ic=or(me,"DataView"),ac=Yr,sc=or(me,"Promise"),lc=or(me,"Set"),dc=or(me,"WeakMap"),cc=Ee,uc=Ye,gc="[object Map]",mc="[object Promise]",hc="[object Set]",bc="[object WeakMap]",fc="[object DataView]",pc=uc(ic),yc=uc(ac),vc=uc(sc),xc=uc(lc),wc=uc(dc),Fc=cc;(ic&&Fc(new ic(new ArrayBuffer(1)))!=fc||ac&&Fc(new ac)!=gc||sc&&Fc(sc.resolve())!=mc||lc&&Fc(new lc)!=hc||dc&&Fc(new dc)!=bc)&&(Fc=function(e){var r=cc(e),t="[object Object]"==r?e.constructor:void 0,n=t?uc(t):"";if(n)switch(n){case pc:return fc;case yc:return gc;case vc:return mc;case xc:return hc;case wc:return bc}return r});var $c=Tl,Cc=jl,Ec=Gl,Sc=oc,Dc=Fc,kc=de,Bc=bd,Tc=Td,Ac="[object Arguments]",zc="[object Array]",Ic="[object Object]",Oc=Object.prototype.hasOwnProperty;var Mc=function(e,r,t,n,o,i){var a=kc(e),s=kc(r),l=a?zc:Dc(e),d=s?zc:Dc(r),c=(l=l==Ac?Ic:l)==Ic,u=(d=d==Ac?Ic:d)==Ic,g=l==d;if(g&&Bc(e)){if(!Bc(r))return!1;a=!0,c=!1}if(g&&!c)return i||(i=new $c),a||Tc(e)?Cc(e,r,t,n,o,i):Ec(e,r,l,t,n,o,i);if(!(1&t)){var m=c&&Oc.call(e,"__wrapped__"),h=u&&Oc.call(r,"__wrapped__");if(m||h){var b=m?e.value():e,f=h?r.value():r;return i||(i=new $c),o(b,f,t,n,i)}}return!!g&&(i||(i=new $c),Sc(e,r,t,n,o,i))},Hc=Se;var Lc=function e(r,t,n,o,i){return r===t||(null==r||null==t||!Hc(r)&&!Hc(t)?r!=r&&t!=t:Mc(r,t,n,o,e,i))},Rc=Tl,jc=Lc;var _c=function(e,r,t,n){var o=t.length,i=o,a=!n;if(null==e)return!i;for(e=Object(e);o--;){var s=t[o];if(a&&s[2]?s[1]!==e[s[0]]:!(s[0]in e))return!1}for(;++o<i;){var l=(s=t[o])[0],d=e[l],c=s[1];if(a&&s[2]){if(void 0===d&&!(l in e))return!1}else{var u=new Rc;if(n)var g=n(d,c,l,e,r,u);if(!(void 0===g?jc(c,d,3,n,u):g))return!1}}return!0},Wc=Me;var Nc=function(e){return e==e&&!Wc(e)},Pc=Nc,Yc=Jd;var Vc=function(e){for(var r=Yc(e),t=r.length;t--;){var n=r[t],o=e[n];r[t]=[n,o,Pc(o)]}return r};var Uc=function(e,r){return function(t){return null!=t&&(t[e]===r&&(void 0!==r||e in Object(t)))}},Zc=_c,Gc=Vc,qc=Uc;var Xc=function(e,r){return null!=e&&r in Object(e)},Kc=Bt,Jc=gd,Qc=de,eu=pd,ru=yd,tu=At;var nu=function(e,r,t){for(var n=-1,o=(r=Kc(r,e)).length,i=!1;++n<o;){var a=tu(r[n]);if(!(i=null!=e&&t(e,a)))break;e=e[a]}return i||++n!=o?i:!!(o=null==e?0:e.length)&&ru(o)&&eu(a,o)&&(Qc(e)||Jc(e))},ou=Xc,iu=nu;var au=Lc,su=Ht,lu=function(e,r){return null!=e&&iu(e,r,ou)},du=Oe,cu=Nc,uu=Uc,gu=At;var mu=function(e){return function(r){return null==r?void 0:r[e]}},hu=Ot;var bu=mu,fu=function(e){return function(r){return hu(r,e)}},pu=Oe,yu=At;var vu=function(e){var r=Gc(e);return 1==r.length&&r[0][2]?qc(r[0][0],r[0][1]):function(t){return t===e||Zc(t,e,r)}},xu=function(e,r){return du(e)&&cu(r)?uu(gu(e),r):function(t){var n=su(t,e);return void 0===n&&n===r?lu(t,e):au(r,n,3)}},wu=function(e){return e},Fu=de,$u=function(e){return pu(e)?bu(yu(e)):fu(e)};var Cu=function(e){return"function"==typeof e?e:null==e?wu:"object"==typeof e?Fu(e)?xu(e[0],e[1]):vu(e):$u(e)},Eu=Cu,Su=Gd,Du=Jd;var ku=function(e){return function(r,t,n){var o=Object(r);if(!Su(r)){var i=Eu(t);r=Du(r),t=function(e){return i(o[e],e,o)}}var a=e(r,t,n);return a>-1?o[i?r[a]:a]:void 0}};var Bu=/\s/;var Tu=function(e){for(var r=e.length;r--&&Bu.test(e.charAt(r)););return r},Au=/^\s+/;var zu=function(e){return e?e.slice(0,Tu(e)+1).replace(Au,""):e},Iu=Me,Ou=Be,Mu=/^[-+]0x[0-9a-f]+$/i,Hu=/^0b[01]+$/i,Lu=/^0o[0-7]+$/i,Ru=parseInt;var ju=function(e){if("number"==typeof e)return e;if(Ou(e))return NaN;if(Iu(e)){var r="function"==typeof e.valueOf?e.valueOf():e;e=Iu(r)?r+"":r}if("string"!=typeof e)return 0===e?e:+e;e=zu(e);var t=Hu.test(e);return t||Lu.test(e)?Ru(e.slice(2),t?2:8):Mu.test(e)?NaN:+e},_u=1/0;var Wu=function(e){return e?(e=ju(e))===_u||e===-1/0?17976931348623157e292*(e<0?-1:1):e==e?e:0:0===e?e:0};var Nu=function(e,r,t,n){for(var o=e.length,i=t+(n?1:-1);n?i--:++i<o;)if(r(e[i],i,e))return i;return-1},Pu=Cu,Yu=function(e){var r=Wu(e),t=r%1;return r==r?t?r-t:r:0},Vu=Math.max;var Uu=le(ku((function(e,r,t){var n=null==e?0:e.length;if(!n)return-1;var o=null==t?0:Yu(t);return o<0&&(o=Vu(n+o,0)),Nu(e,Pu(r),o)}))),Zu=Lc;var Gu=le((function(e,r){return Zu(e,r)}));function qu(e){return()=>e}function Xu(e){e()}function Ku(e,r){return t=>e(r(t))}function Ju(e,r){return()=>e(r)}function Qu(e,r){return t=>e(r,t)}function eg(e){return void 0!==e}function rg(){}function tg(e,r){return r(e),e}function ng(e,r){return r(e)}function og(...e){return e}function ig(e,r){return e(1,r)}function ag(e,r){e(0,r)}function sg(e){e(2)}function lg(e){return e(4)}function dg(e,r){return ig(e,Qu(r,0))}function cg(e,r){const t=e(1,(e=>{t(),r(e)}));return t}function ug(e){let r,t;return n=>o=>{r=o,t&&clearTimeout(t),t=setTimeout((()=>{n(r)}),e)}}function gg(e,r){return e===r}function mg(e=gg){let r;return t=>n=>{e(r,n)||(r=n,t(n))}}function hg(e){return r=>t=>{e(t)&&r(t)}}function bg(e){return r=>Ku(r,e)}function fg(e){return r=>()=>{r(e)}}function pg(e,...r){const t=function(...e){return r=>e.reduceRight(ng,r)}(...r);return(r,n)=>{switch(r){case 2:return void sg(e);case 1:return ig(e,t(n))}}}function yg(e,r){return t=>n=>{t(r=e(r,n))}}function vg(e){return r=>t=>{e>0?e--:r(t)}}function xg(e){let r,t=null;return n=>o=>{t=o,!r&&(r=setTimeout((()=>{r=void 0,n(t)}),e))}}function wg(...e){const r=new Array(e.length);let t=0,n=null;const o=Math.pow(2,e.length)-1;return e.forEach(((e,i)=>{const a=Math.pow(2,i);ig(e,(e=>{const s=t;t|=a,r[i]=e,s!==o&&t===o&&n&&(n(),n=null)}))})),e=>i=>{const a=()=>{e([i].concat(r))};t===o?a():n=a}}function Fg(e){let r=e;const t=Cg();return(e,n)=>{switch(e){case 0:r=n;break;case 1:n(r);break;case 4:return r}return t(e,n)}}function $g(e,r){return tg(Fg(r),(r=>dg(e,r)))}function Cg(){const e=[];return(r,t)=>{switch(r){case 0:return void e.slice().forEach((e=>{e(t)}));case 2:return void e.splice(0,e.length);case 1:return e.push(t),()=>{const r=e.indexOf(t);r>-1&&e.splice(r,1)}}}}function Eg(e){return tg(Cg(),(r=>dg(e,r)))}function Sg(e,r=[],{singleton:t}={singleton:!0}){return{constructor:e,dependencies:r,id:Dg(),singleton:t}}const Dg=()=>Symbol();function kg(...e){const r=Cg(),t=new Array(e.length);let n=0;const o=Math.pow(2,e.length)-1;return e.forEach(((e,i)=>{const a=Math.pow(2,i);ig(e,(e=>{t[i]=e,n|=a,n===o&&ag(r,t)}))})),function(e,i){switch(e){case 2:return void sg(r);case 1:return n===o&&i(t),ig(r,i)}}}function Bg(e,r=gg){return pg(e,mg(r))}function Tg(...e){return function(r,t){switch(r){case 2:return;case 1:return function(...e){return()=>{e.map(Xu)}}(...e.map((e=>ig(e,t))))}}}var Ag=(e=>(e[e.DEBUG=0]="DEBUG",e[e.INFO=1]="INFO",e[e.WARN=2]="WARN",e[e.ERROR=3]="ERROR",e))(Ag||{});const zg={0:"debug",3:"error",1:"log",2:"warn"},Ig=Sg((()=>{const e=Fg(3);return{log:Fg(((r,t,n=1)=>{var o;n>=(null!=(o=(typeof globalThis>"u"?window:globalThis).VIRTUOSO_LOG_LEVEL)?o:lg(e))&&console[zg[n]]("%creact-virtuoso: %c%s %o","color: #0253b3; font-weight: bold","color: initial",r,t)})),logLevel:e}}),[],{singleton:!0});function Og(e,r,t){return Mg(e,r,t).callbackRef}function Mg(e,r,t){const n=o.useRef(null);let i=e=>{};if(typeof ResizeObserver<"u"){const a=o.useMemo((()=>new ResizeObserver((r=>{const n=()=>{const t=r[0].target;null!==t.offsetParent&&e(t)};t?n():requestAnimationFrame(n)}))),[e]);i=e=>{e&&r?(a.observe(e),n.current=e):(n.current&&a.unobserve(n.current),n.current=null)}}return{callbackRef:i,ref:n}}function Hg(e,r,t,n,i,a,s,l,d){const c=o.useCallback((t=>{const o=function(e,r,t,n){const o=e.length;if(0===o)return null;const i=[];for(let a=0;a<o;a++){const o=e.item(a);if(void 0===o.dataset.index)continue;const s=parseInt(o.dataset.index),l=parseFloat(o.dataset.knownSize),d=r(o,t);if(0===d&&n("Zero-sized element, this should not happen",{child:o},Ag.ERROR),d===l)continue;const c=i[i.length-1];0===i.length||c.size!==d||c.endIndex!==s-1?i.push({endIndex:s,size:d,startIndex:s}):i[i.length-1].endIndex++}return i}(t.children,r,l?"offsetWidth":"offsetHeight",i);let d=t.parentElement;for(;!d.dataset.virtuosoScroller;)d=d.parentElement;const c="window"===d.lastElementChild.dataset.viewportType,u=s?l?s.scrollLeft:s.scrollTop:c?l?window.pageXOffset||document.documentElement.scrollLeft:window.pageYOffset||document.documentElement.scrollTop:l?d.scrollLeft:d.scrollTop,g=s?l?s.scrollWidth:s.scrollHeight:c?l?document.documentElement.scrollWidth:document.documentElement.scrollHeight:l?d.scrollWidth:d.scrollHeight,m=s?l?s.offsetWidth:s.offsetHeight:c?l?window.innerWidth:window.innerHeight:l?d.offsetWidth:d.offsetHeight;n({scrollHeight:g,scrollTop:Math.max(u,0),viewportHeight:m}),null==a||a(l?Lg("column-gap",getComputedStyle(t).columnGap,i):Lg("row-gap",getComputedStyle(t).rowGap,i)),null!==o&&e(o)}),[e,r,i,a,s,n]);return Mg(c,t,d)}function Lg(e,r,t){return"normal"!==r&&!(null!=r&&r.endsWith("px"))&&t(`${e} was not resolved to pixel value correctly`,r,Ag.WARN),"normal"===r?0:parseInt(null!=r?r:"0",10)}function Rg(e,r,t){const n=o.useRef(null),i=o.useCallback((t=>{if(null==t||!t.offsetParent)return;const o=t.getBoundingClientRect(),i=o.width;let a,s;if(r){const e=r.getBoundingClientRect(),t=o.top-e.top;s=e.height-Math.max(0,t),a=t+r.scrollTop}else s=window.innerHeight-Math.max(0,o.top),a=o.top+window.pageYOffset;n.current={offsetTop:a,visibleHeight:s,visibleWidth:i},e(n.current)}),[e,r]),{callbackRef:a,ref:s}=Mg(i,!0,t),l=o.useCallback((()=>{i(s.current)}),[i,s]);return o.useEffect((()=>{if(r){r.addEventListener("scroll",l);const e=new ResizeObserver((()=>{requestAnimationFrame(l)}));return e.observe(r),()=>{r.removeEventListener("scroll",l),e.unobserve(r)}}return window.addEventListener("scroll",l),window.addEventListener("resize",l),()=>{window.removeEventListener("scroll",l),window.removeEventListener("resize",l)}}),[l,r]),a}const jg=Sg((()=>{const e=Cg(),r=Cg(),t=Fg(0),n=Cg(),o=Fg(0),i=Cg(),a=Cg(),s=Fg(0),l=Fg(0),d=Fg(0),c=Fg(0),u=Cg(),g=Cg(),m=Fg(!1),h=Fg(!1),b=Fg(!1);return dg(pg(e,bg((({scrollTop:e})=>e))),r),dg(pg(e,bg((({scrollHeight:e})=>e))),a),dg(r,o),{deviation:t,fixedFooterHeight:d,fixedHeaderHeight:l,footerHeight:c,headerHeight:s,horizontalDirection:h,scrollBy:g,scrollContainerState:e,scrollHeight:a,scrollingInProgress:m,scrollTo:u,scrollTop:r,skipAnimationFrameInResizeObserver:b,smoothScrollTargetReached:n,statefulScrollTop:o,viewportHeight:i}}),[],{singleton:!0}),_g={lvl:0};function Wg(e,r){const t=e.length;if(0===t)return[];let{index:n,value:o}=r(e[0]);const i=[];for(let a=1;a<t;a++){const{index:t,value:s}=r(e[a]);i.push({end:t-1,start:n,value:o}),n=t,o=s}return i.push({end:1/0,start:n,value:o}),i}function Ng(e){return e===_g}function Pg(e,r){if(!Ng(e))return r===e.k?e.v:r<e.k?Pg(e.l,r):Pg(e.r,r)}function Yg(e,r,t="k"){if(Ng(e))return[-1/0,void 0];if(Number(e[t])===r)return[e.k,e.v];if(Number(e[t])<r){const n=Yg(e.r,r,t);return n[0]===-1/0?[e.k,e.v]:n}return Yg(e.l,r,t)}function Vg(e,r,t){return Ng(e)?tm(r,t,1):r===e.k?Jg(e,{k:r,v:t}):r<e.k?nm(Jg(e,{l:Vg(e.l,r,t)})):nm(Jg(e,{r:Vg(e.r,r,t)}))}function Ug(){return _g}function Zg(e,r,t){if(Ng(e))return[];return function(e){return Wg(e,(({k:e,v:r})=>({index:e,value:r})))}(Xg(e,Yg(e,r)[0],t))}function Gg(e,r){if(Ng(e))return _g;const{k:t,l:n,r:o}=e;if(r===t){if(Ng(n))return o;if(Ng(o))return n;{const[r,t]=rm(n);return Kg(Jg(e,{k:r,l:Qg(n),v:t}))}}return Kg(Jg(e,r<t?{l:Gg(n,r)}:{r:Gg(o,r)}))}function qg(e){return Ng(e)?[]:[...qg(e.l),{k:e.k,v:e.v},...qg(e.r)]}function Xg(e,r,t){if(Ng(e))return[];const{k:n,l:o,r:i,v:a}=e;let s=[];return n>r&&(s=s.concat(Xg(o,r,t))),n>=r&&n<=t&&s.push({k:n,v:a}),n<=t&&(s=s.concat(Xg(i,r,t))),s}function Kg(e){const{l:r,lvl:t,r:n}=e;if(n.lvl>=t-1&&r.lvl>=t-1)return e;if(t>n.lvl+1){if(em(r))return om(Jg(e,{lvl:t-1}));if(!Ng(r)&&!Ng(r.r))return Jg(r.r,{l:Jg(r,{r:r.r.l}),lvl:t,r:Jg(e,{l:r.r.r,lvl:t-1})});throw new Error("Unexpected empty nodes")}if(em(e))return im(Jg(e,{lvl:t-1}));if(Ng(n)||Ng(n.l))throw new Error("Unexpected empty nodes");{const r=n.l,o=em(r)?n.lvl-1:n.lvl;return Jg(r,{l:Jg(e,{lvl:t-1,r:r.l}),lvl:r.lvl+1,r:im(Jg(n,{l:r.r,lvl:o}))})}}function Jg(e,r){return tm(void 0!==r.k?r.k:e.k,void 0!==r.v?r.v:e.v,void 0!==r.lvl?r.lvl:e.lvl,void 0!==r.l?r.l:e.l,void 0!==r.r?r.r:e.r)}function Qg(e){return Ng(e.r)?e.l:Kg(Jg(e,{r:Qg(e.r)}))}function em(e){return Ng(e)||e.lvl>e.r.lvl}function rm(e){return Ng(e.r)?[e.k,e.v]:rm(e.r)}function tm(e,r,t,n=_g,o=_g){return{k:e,l:n,lvl:t,r:o,v:r}}function nm(e){return im(om(e))}function om(e){const{l:r}=e;return Ng(r)||r.lvl!==e.lvl?e:Jg(r,{r:Jg(e,{l:r.r})})}function im(e){const{lvl:r,r:t}=e;return Ng(t)||Ng(t.r)||t.lvl!==r||t.r.lvl!==r?e:Jg(t,{l:Jg(e,{r:t.l}),lvl:r+1})}function am(e,r){return!(!e||e.startIndex!==r.startIndex||e.endIndex!==r.endIndex)}function sm(e,r){return!(!e||e[0]!==r[0]||e[1]!==r[1])}const lm=Sg((()=>({recalcInProgress:Fg(!1)})),[],{singleton:!0});function dm(e,r,t){return e[cm(e,r,t)]}function cm(e,r,t,n=0){let o=e.length-1;for(;n<=o;){const i=Math.floor((n+o)/2),a=t(e[i],r);if(0===a)return i;if(-1===a){if(o-n<2)return i-1;o=i-1}else{if(o===n)return i;n=i+1}}throw new Error(`Failed binary finding record in array - ${e.join(",")}, searched for ${r}`)}function um(e,r){return Math.round(e.getBoundingClientRect()[r])}function gm(e){return!Ng(e.groupOffsetTree)}function mm({index:e},r){return r===e?0:r<e?-1:1}function hm({offset:e},r){return r===e?0:r<e?-1:1}function bm(e,r,t){if(0===r.length)return 0;const{index:n,offset:o,size:i}=dm(r,e,mm),a=e-n,s=i*a+(a-1)*t+o;return s>0?s+t:s}function fm(e,r){if(!gm(r))return e;let t=0;for(;r.groupIndices[t]<=e+t;)t++;return e+t}function pm(e,r,t){if(function(e){return typeof e.groupIndex<"u"}(e))return r.groupIndices[e.groupIndex]+1;{let n=fm("LAST"===e.index?t:e.index,r);return n=Math.max(0,n,Math.min(t,n)),n}}function ym(e,r,t,n=0){return n>0&&(r=Math.max(r,dm(e,n,mm).offset)),Wg(function(e,r,t,n){const o=cm(e,r,n),i=cm(e,t,n,o);return e.slice(o,i+1)}(e,r,t,hm),Fm)}function vm(e,[r,t,n,o]){r.length>0&&n("received item sizes",r,Ag.DEBUG);const i=e.sizeTree;let a=i,s=0;if(t.length>0&&Ng(i)&&2===r.length){const e=r[0].size,n=r[1].size;a=t.reduce(((r,t)=>Vg(Vg(r,t,e),t+1,n)),a)}else[a,s]=function(e,r){let t=Ng(e)?0:1/0;for(const n of r){const{endIndex:r,size:o,startIndex:i}=n;if(t=Math.min(t,i),Ng(e)){e=Vg(e,0,o);continue}const a=Zg(e,i-1,r+1);if(a.some($m(n)))continue;let s=!1,l=!1;for(const{end:t,start:n,value:i}of a)s?(r>=n||o===i)&&(e=Gg(e,n)):(l=i!==o,s=!0),t>r&&r>=n&&i!==o&&(e=Vg(e,r+1,i));l&&(e=Vg(e,i,o))}return[e,t]}(a,r);if(a===i)return e;const{lastIndex:l,lastOffset:d,lastSize:c,offsetTree:u}=wm(e.offsetTree,s,a,o);return{groupIndices:t,groupOffsetTree:t.reduce(((e,r)=>Vg(e,r,bm(r,u,o))),Ug()),lastIndex:l,lastOffset:d,lastSize:c,offsetTree:u,sizeTree:a}}function xm(e,r){let t=0,n=0;for(;t<e;)t+=r[n+1]-r[n]-1,n++;return n-(t===e?0:1)}function wm(e,r,t,n){let o=e,i=0,a=0,s=0,l=0;if(0!==r){l=cm(o,r-1,mm),s=o[l].offset;const e=Yg(t,r-1);i=e[0],a=e[1],o.length&&o[l].size===Yg(t,r)[1]&&(l-=1),o=o.slice(0,l+1)}else o=[];for(const{start:e,value:l}of Zg(t,r,1/0)){const r=e-i,t=r*a+s+r*n;o.push({index:e,offset:t,size:l}),i=e,s=t,a=l}return{lastIndex:i,lastOffset:s,lastSize:a,offsetTree:o}}function Fm(e){return{index:e.index,value:e}}function $m(e){const{endIndex:r,size:t,startIndex:n}=e;return e=>e.start===n&&(e.end===r||e.end===1/0)&&e.value===t}const Cm={offsetHeight:"height",offsetWidth:"width"},Em=Sg((([{log:e},{recalcInProgress:r}])=>{const t=Cg(),n=Cg(),o=$g(n,0),i=Cg(),a=Cg(),s=Fg(0),l=Fg([]),d=Fg(void 0),c=Fg(void 0),u=Fg(((e,r)=>um(e,Cm[r]))),g=Fg(void 0),m=Fg(0),h={groupIndices:[],groupOffsetTree:Ug(),lastIndex:0,lastOffset:0,lastSize:0,offsetTree:[],sizeTree:Ug()},b=$g(pg(t,wg(l,e,m),yg(vm,h),mg()),h),f=$g(pg(l,mg(),yg(((e,r)=>({current:r,prev:e.current})),{current:[],prev:[]}),bg((({prev:e})=>e))),[]);dg(pg(l,hg((e=>e.length>0)),wg(b,m),bg((([e,r,t])=>{const n=e.reduce(((e,n,o)=>Vg(e,n,bm(n,r.offsetTree,t)||o)),Ug());return{...r,groupIndices:e,groupOffsetTree:n}}))),b),dg(pg(n,wg(b),hg((([e,{lastIndex:r}])=>e<r)),bg((([e,{lastIndex:r,lastSize:t}])=>[{endIndex:r,size:t,startIndex:e}]))),t),dg(d,c);const p=$g(pg(d,bg((e=>void 0===e))),!0);dg(pg(c,hg((e=>void 0!==e&&Ng(lg(b).sizeTree))),bg((e=>[{endIndex:0,size:e,startIndex:0}]))),t);const y=Eg(pg(t,wg(b),yg((({sizes:e},[r,t])=>({changed:t!==e,sizes:t})),{changed:!1,sizes:h}),bg((e=>e.changed))));ig(pg(s,yg(((e,r)=>({diff:e.prev-r,prev:r})),{diff:0,prev:0}),bg((e=>e.diff))),(e=>{const{groupIndices:t}=lg(b);if(e>0)ag(r,!0),ag(i,e+xm(e,t));else if(e<0){const r=lg(f);r.length>0&&(e-=xm(-e,r)),ag(a,e)}})),ig(pg(s,wg(e)),(([e,r])=>{e<0&&r("`firstItemIndex` prop should not be set to less than zero. If you don't know the total count, just use a very high value",{firstItemIndex:s},Ag.ERROR)}));const v=Eg(i);dg(pg(i,wg(b),bg((([e,r])=>{const t=r.groupIndices.length>0,n=[],o=r.lastSize;if(t){const t=Pg(r.sizeTree,0);let i=0,a=0;for(;i<e;){const e=r.groupIndices[a],s=r.groupIndices.length===a+1?1/0:r.groupIndices[a+1]-e-1;n.push({endIndex:e,size:t,startIndex:e}),n.push({endIndex:e+1+s-1,size:o,startIndex:e+1}),a++,i+=s+1}const s=qg(r.sizeTree);return i!==e&&s.shift(),s.reduce(((r,{k:t,v:n})=>{let o=r.ranges;return 0!==r.prevSize&&(o=[...r.ranges,{endIndex:t+e-1,size:r.prevSize,startIndex:r.prevIndex}]),{prevIndex:t+e,prevSize:n,ranges:o}}),{prevIndex:e,prevSize:0,ranges:n}).ranges}return qg(r.sizeTree).reduce(((r,{k:t,v:n})=>({prevIndex:t+e,prevSize:n,ranges:[...r.ranges,{endIndex:t+e-1,size:r.prevSize,startIndex:r.prevIndex}]})),{prevIndex:0,prevSize:o,ranges:[]}).ranges}))),t);const x=Eg(pg(a,wg(b,m),bg((([e,{offsetTree:r},t])=>bm(-e,r,t)))));return dg(pg(a,wg(b,m),bg((([e,r,t])=>{if(r.groupIndices.length>0){if(Ng(r.sizeTree))return r;let n=Ug();const o=lg(f);let i=0,a=0,s=0;for(;i<-e;){s=o[a];const e=o[a+1]-s-1;a++,i+=e+1}if(n=qg(r.sizeTree).reduce(((r,{k:t,v:n})=>Vg(r,Math.max(0,t+e),n)),n),i!==-e){n=Vg(n,0,Pg(r.sizeTree,s));n=Vg(n,1,Yg(r.sizeTree,1-e)[1])}return{...r,sizeTree:n,...wm(r.offsetTree,0,n,t)}}{const n=qg(r.sizeTree).reduce(((r,{k:t,v:n})=>Vg(r,Math.max(0,t+e),n)),Ug());return{...r,sizeTree:n,...wm(r.offsetTree,0,n,t)}}}))),b),{beforeUnshiftWith:v,data:g,defaultItemSize:c,firstItemIndex:s,fixedItemSize:d,gap:m,groupIndices:l,itemSize:u,listRefresh:y,shiftWith:a,shiftWithOffset:x,sizeRanges:t,sizes:b,statefulTotalCount:o,totalCount:n,trackItemSizes:p,unshiftWith:i}}),og(Ig,lm),{singleton:!0});function Sm(e){return e.reduce(((e,r)=>(e.groupIndices.push(e.totalCount),e.totalCount+=r+1,e)),{groupIndices:[],totalCount:0})}const Dm=Sg((([{groupIndices:e,sizes:r,totalCount:t},{headerHeight:n,scrollTop:o}])=>{const i=Cg(),a=Cg(),s=Eg(pg(i,bg(Sm)));return dg(pg(s,bg((e=>e.totalCount))),t),dg(pg(s,bg((e=>e.groupIndices))),e),dg(pg(kg(o,r,n),hg((([e,r])=>gm(r))),bg((([e,r,t])=>Yg(r.groupOffsetTree,Math.max(e-t,0),"v")[0])),mg(),bg((e=>[e]))),a),{groupCounts:i,topItemsIndexes:a}}),og(Em,jg)),km=Sg((([{log:e}])=>{const r=Fg(!1),t=Eg(pg(r,hg((e=>e)),mg()));return ig(r,(r=>{r&&lg(e)("props updated",{},Ag.DEBUG)})),{didMount:t,propsReady:r}}),og(Ig),{singleton:!0}),Bm=typeof document<"u"&&"scrollBehavior"in document.documentElement.style;function Tm(e){const r="number"==typeof e?{index:e}:e;return r.align||(r.align="start"),(!r.behavior||!Bm)&&(r.behavior="auto"),r.offset||(r.offset=0),r}const Am=Sg((([{gap:e,listRefresh:r,sizes:t,totalCount:n},{fixedFooterHeight:o,fixedHeaderHeight:i,footerHeight:a,headerHeight:s,scrollingInProgress:l,scrollTo:d,smoothScrollTargetReached:c,viewportHeight:u},{log:g}])=>{const m=Cg(),h=Cg(),b=Fg(0);let f=null,p=null,y=null;function v(){f&&(f(),f=null),y&&(y(),y=null),p&&(clearTimeout(p),p=null),ag(l,!1)}return dg(pg(m,wg(t,u,n,b,s,a,g),wg(e,i,o),bg((([[e,t,n,o,i,a,s,d],u,g,b])=>{const x=Tm(e),{align:w,behavior:F,offset:$}=x,C=o-1,E=pm(x,t,C);let S=bm(E,t.offsetTree,u)+a;"end"===w?(S+=g+Yg(t.sizeTree,E)[1]-n+b,E===C&&(S+=s)):"center"===w?S+=(g+Yg(t.sizeTree,E)[1]-n+b)/2:S-=i,$&&(S+=$);const D=r=>{v(),r?(d("retrying to scroll to",{location:e},Ag.DEBUG),ag(m,e)):(ag(h,!0),d("list did not change, scroll successful",{},Ag.DEBUG))};if(v(),"smooth"===F){let e=!1;y=ig(r,(r=>{e=e||r})),f=cg(c,(()=>{D(e)}))}else f=cg(pg(r,function(e){return r=>{const t=setTimeout((()=>{r(!1)}),e);return e=>{e&&(r(!0),clearTimeout(t))}}}(150)),D);return p=setTimeout((()=>{v()}),1200),ag(l,!0),d("scrolling from index to",{behavior:F,index:E,top:S},Ag.DEBUG),{behavior:F,top:S}}))),d),{scrollTargetReached:h,scrollToIndex:m,topListHeight:b}}),og(Em,jg,Ig),{singleton:!0});function zm(e,r){0==e?r():requestAnimationFrame((()=>{zm(e-1,r)}))}function Im(e,r){const t=r-1;return"number"==typeof e?e:"LAST"===e.index?t:e.index}const Om=Sg((([{defaultItemSize:e,listRefresh:r,sizes:t},{scrollTop:n},{scrollTargetReached:o,scrollToIndex:i},{didMount:a}])=>{const s=Fg(!0),l=Fg(0),d=Fg(!0);return dg(pg(a,wg(l),hg((([e,r])=>!!r)),fg(!1)),s),dg(pg(a,wg(l),hg((([e,r])=>!!r)),fg(!1)),d),ig(pg(kg(r,a),wg(s,t,e,d),hg((([[,e],r,{sizeTree:t},n,o])=>e&&(!Ng(t)||eg(n))&&!r&&!o)),wg(l)),(([,e])=>{cg(o,(()=>{ag(d,!0)})),zm(4,(()=>{cg(n,(()=>{ag(s,!0)})),ag(i,e)}))})),{initialItemFinalLocationReached:d,initialTopMostItemIndex:l,scrolledToInitialItem:s}}),og(Em,jg,Am,km),{singleton:!0});function Mm(e,r){return Math.abs(e-r)<1.01}const Hm="up",Lm="down",Rm={atBottom:!1,notAtBottomBecause:"NOT_SHOWING_LAST_ITEM",state:{offsetBottom:0,scrollHeight:0,scrollTop:0,viewportHeight:0}},jm=Sg((([{footerHeight:e,headerHeight:r,scrollBy:t,scrollContainerState:n,scrollTop:o,viewportHeight:i}])=>{const a=Fg(!1),s=Fg(!0),l=Cg(),d=Cg(),c=Fg(4),u=Fg(0),g=$g(pg(Tg(pg(Bg(o),vg(1),fg(!0)),pg(Bg(o),vg(1),fg(!1),ug(100))),mg()),!1),m=$g(pg(Tg(pg(t,fg(!0)),pg(t,fg(!1),ug(200))),mg()),!1);dg(pg(kg(Bg(o),Bg(u)),bg((([e,r])=>e<=r)),mg()),s),dg(pg(s,xg(50)),d);const h=Eg(pg(kg(n,Bg(i),Bg(r),Bg(e),Bg(c)),yg(((e,[{scrollHeight:r,scrollTop:t},n,o,i,a])=>{const s={scrollHeight:r,scrollTop:t,viewportHeight:n};if(t+n-r>-a){let r,n;return t>e.state.scrollTop?(r="SCROLLED_DOWN",n=e.state.scrollTop-t):(r="SIZE_DECREASED",n=e.state.scrollTop-t||e.scrollTopDelta),{atBottom:!0,atBottomBecause:r,scrollTopDelta:n,state:s}}let l;return l=s.scrollHeight>e.state.scrollHeight?"SIZE_INCREASED":n<e.state.viewportHeight?"VIEWPORT_HEIGHT_DECREASING":t<e.state.scrollTop?"SCROLLING_UPWARDS":"NOT_FULLY_SCROLLED_TO_LAST_ITEM_BOTTOM",{atBottom:!1,notAtBottomBecause:l,state:s}}),Rm),mg(((e,r)=>e&&e.atBottom===r.atBottom)))),b=$g(pg(n,yg(((e,{scrollHeight:r,scrollTop:t,viewportHeight:n})=>{if(Mm(e.scrollHeight,r))return{changed:!1,jump:0,scrollHeight:r,scrollTop:t};{const o=r-(t+n)<1;return e.scrollTop!==t&&o?{changed:!0,jump:e.scrollTop-t,scrollHeight:r,scrollTop:t}:{changed:!0,jump:0,scrollHeight:r,scrollTop:t}}}),{changed:!1,jump:0,scrollHeight:0,scrollTop:0}),hg((e=>e.changed)),bg((e=>e.jump))),0);dg(pg(h,bg((e=>e.atBottom))),a),dg(pg(a,xg(50)),l);const f=Fg(Lm);dg(pg(n,bg((({scrollTop:e})=>e)),mg(),yg(((e,r)=>lg(m)?{direction:e.direction,prevScrollTop:r}:{direction:r<e.prevScrollTop?Hm:Lm,prevScrollTop:r}),{direction:Lm,prevScrollTop:0}),bg((e=>e.direction))),f),dg(pg(n,xg(50),fg("none")),f);const p=Fg(0);return dg(pg(g,hg((e=>!e)),fg(0)),p),dg(pg(o,xg(100),wg(g),hg((([e,r])=>!!r)),yg((([e,r],[t])=>[r,t]),[0,0]),bg((([e,r])=>r-e))),p),{atBottomState:h,atBottomStateChange:l,atBottomThreshold:c,atTopStateChange:d,atTopThreshold:u,isAtBottom:a,isAtTop:s,isScrolling:g,lastJumpDueToItemResize:b,scrollDirection:f,scrollVelocity:p}}),og(jg)),_m="top",Wm="bottom",Nm="none";function Pm(e,r,t){return"number"==typeof e?t===Hm&&r===_m||t===Lm&&r===Wm?e:0:t===Hm?r===_m?e.main:e.reverse:r===Wm?e.main:e.reverse}function Ym(e,r){var t;return"number"==typeof e?e:null!=(t=e[r])?t:0}const Vm=Sg((([{deviation:e,fixedHeaderHeight:r,headerHeight:t,scrollTop:n,viewportHeight:o}])=>{const i=Cg(),a=Fg(0),s=Fg(0),l=Fg(0);return{increaseViewportBy:s,listBoundary:i,overscan:l,topListHeight:a,visibleRange:$g(pg(kg(Bg(n),Bg(o),Bg(t),Bg(i,sm),Bg(l),Bg(a),Bg(r),Bg(e),Bg(s)),bg((([e,r,t,[n,o],i,a,s,l,d])=>{const c=e-l,u=a+s,g=Math.max(t-c,0);let m=Nm;const h=Ym(d,_m),b=Ym(d,Wm);return n-=l,o+=t+s,(n+=t+s)>e+u-h&&(m=Hm),(o-=l)<e-g+r+b&&(m=Lm),m!==Nm?[Math.max(c-t-Pm(i,_m,m)-h,0),c-g-s+r+Pm(i,Wm,m)+b]:null})),hg((e=>null!=e)),mg(sm)),[0,0])}}),og(jg),{singleton:!0});const Um={bottom:0,firstItemIndex:0,items:[],offsetBottom:0,offsetTop:0,top:0,topItems:[],topListHeight:0,totalCount:0};function Zm(e,r,t,n,o,i){const{lastIndex:a,lastOffset:s,lastSize:l}=o;let d=0,c=0;if(e.length>0){d=e[0].offset;const r=e[e.length-1];c=r.offset+r.size}const u=t-a,g=d,m=s+u*l+(u-1)*n-c;return{bottom:c,firstItemIndex:i,items:qm(e,o,i),offsetBottom:m,offsetTop:d,top:g,topItems:qm(r,o,i),topListHeight:r.reduce(((e,r)=>r.size+e),0),totalCount:t}}function Gm(e,r,t,n,o,i){let a=0;if(t.groupIndices.length>0)for(const r of t.groupIndices){if(r-a>=e)break;a++}const s=e+a,l=Im(r,s);return Zm(Array.from({length:s}).map(((e,r)=>({data:i[r+l],index:r+l,offset:0,size:0}))),[],s,o,t,n)}function qm(e,r,t){if(0===e.length)return[];if(!gm(r))return e.map((e=>({...e,index:e.index+t,originalIndex:e.index})));const n=e[0].index,o=e[e.length-1].index,i=[],a=Zg(r.groupOffsetTree,n,o);let s,l=0;for(const n of e){let e;(!s||s.end<n.index)&&(s=a.shift(),l=r.groupIndices.indexOf(s.start)),e=n.index===s.start?{index:l,type:"group"}:{groupIndex:l,index:n.index-(l+1)+t},i.push({...e,data:n.data,offset:n.offset,originalIndex:n.index,size:n.size})}return i}const Xm=Sg((([{data:e,firstItemIndex:r,gap:t,sizes:n,totalCount:o},i,{listBoundary:a,topListHeight:s,visibleRange:l},{initialTopMostItemIndex:d,scrolledToInitialItem:c},{topListHeight:u},g,{didMount:m},{recalcInProgress:h}])=>{const b=Fg([]),f=Fg(0),p=Cg();dg(i.topItemsIndexes,b);const y=$g(pg(kg(m,h,Bg(l,sm),Bg(o),Bg(n),Bg(d),c,Bg(b),Bg(r),Bg(t),e),hg((([e,r,,t,,,,,,,n])=>{const o=n&&n.length!==t;return e&&!r&&!o})),bg((([,,[e,r],t,n,o,i,a,s,l,d])=>{const c=n,{offsetTree:u,sizeTree:g}=c,m=lg(f);if(0===t)return{...Um,totalCount:t};if(0===e&&0===r)return 0===m?{...Um,totalCount:t}:Gm(m,o,n,s,l,d||[]);if(Ng(g))return m>0?null:Zm(function(e,r,t){if(gm(r)){const n=fm(e,r);return[{index:Yg(r.groupOffsetTree,n)[0],offset:0,size:0},{data:null==t?void 0:t[0],index:n,offset:0,size:0}]}return[{data:null==t?void 0:t[0],index:e,offset:0,size:0}]}(Im(o,t),c,d),[],t,l,c,s);const h=[];if(a.length>0){const e=a[0],r=a[a.length-1];let t=0;for(const n of Zg(g,e,r)){const o=n.value,i=Math.max(n.start,e),a=Math.min(n.end,r);for(let e=i;e<=a;e++)h.push({data:null==d?void 0:d[e],index:e,offset:t,size:o}),t+=o}}if(!i)return Zm([],h,t,l,c,s);const b=a.length>0?a[a.length-1]+1:0,p=ym(u,e,r,b);if(0===p.length)return null;const y=t-1;return Zm(tg([],(t=>{for(const n of p){const o=n.value;let i=o.offset,a=n.start;const s=o.size;if(o.offset<e){a+=Math.floor((e-o.offset+l)/(s+l));const r=a-n.start;i+=r*s+r*l}a<b&&(i+=(b-a)*s,a=b);const c=Math.min(n.end,y);for(let e=a;e<=c&&!(i>=r);e++)t.push({data:null==d?void 0:d[e],index:e,offset:i,size:s}),i+=s+l}})),h,t,l,c,s)})),hg((e=>null!==e)),mg()),Um);dg(pg(e,hg(eg),bg((e=>null==e?void 0:e.length))),o),dg(pg(y,bg((e=>e.topListHeight))),u),dg(u,s),dg(pg(y,bg((e=>[e.top,e.bottom]))),a),dg(pg(y,bg((e=>e.items))),p);const v=Eg(pg(y,hg((({items:e})=>e.length>0)),wg(o,e),hg((([{items:e},r])=>e[e.length-1].originalIndex===r-1)),bg((([,e,r])=>[e-1,r])),mg(sm),bg((([e])=>e)))),x=Eg(pg(y,xg(200),hg((({items:e,topItems:r})=>e.length>0&&e[0].originalIndex===r.length)),bg((({items:e})=>e[0].index)),mg())),w=Eg(pg(y,hg((({items:e})=>e.length>0)),bg((({items:e})=>{let r=0,t=e.length-1;for(;"group"===e[r].type&&r<t;)r++;for(;"group"===e[t].type&&t>r;)t--;return{endIndex:e[t].index,startIndex:e[r].index}})),mg(am)));return{endReached:v,initialItemCount:f,itemsRendered:p,listState:y,rangeChanged:w,startReached:x,topItemsIndexes:b,...g}}),og(Em,Dm,Vm,Om,Am,jm,km,lm),{singleton:!0}),Km=Sg((([{fixedFooterHeight:e,fixedHeaderHeight:r,footerHeight:t,headerHeight:n},{listState:o}])=>{const i=Cg(),a=$g(pg(kg(t,e,n,r,o),bg((([e,r,t,n,o])=>e+r+t+n+o.offsetBottom+o.bottom))),0);return dg(Bg(a),i),{totalListHeight:a,totalListHeightChanged:i}}),og(jg,Xm),{singleton:!0}),Jm=Sg((([{viewportHeight:e},{totalListHeight:r}])=>{const t=Fg(!1);return{alignToBottom:t,paddingTopAddition:$g(pg(kg(t,e,r),hg((([e])=>e)),bg((([,e,r])=>Math.max(0,e-r))),xg(0),mg()),0)}}),og(jg,Km),{singleton:!0});function Qm(e){return!!e&&("smooth"===e?"smooth":"auto")}const eh=Sg((([{listRefresh:e,totalCount:r},{atBottomState:t,isAtBottom:n},{scrollToIndex:o},{scrolledToInitialItem:i},{didMount:a,propsReady:s},{log:l},{scrollingInProgress:d}])=>{const c=Fg(!1),u=Cg();let g=null;function m(e){ag(o,{align:"end",behavior:e,index:"LAST"})}function h(e){const r=cg(t,(r=>{e&&!r.atBottom&&"SIZE_INCREASED"===r.notAtBottomBecause&&!g&&(lg(l)("scrolling to bottom due to increased size",{},Ag.DEBUG),m("auto"))}));setTimeout(r,100)}return ig(pg(kg(pg(Bg(r),vg(1)),a),wg(Bg(c),n,i,d),bg((([[e,r],t,n,o,i])=>{let a=r&&o,s="auto";return a&&(s=((e,r)=>"function"==typeof e?Qm(e(r)):r&&Qm(e))(t,n||i),a=a&&!!s),{followOutputBehavior:s,shouldFollow:a,totalCount:e}})),hg((({shouldFollow:e})=>e))),(({followOutputBehavior:r,totalCount:t})=>{g&&(g(),g=null),g=cg(e,(()=>{lg(l)("following output to ",{totalCount:t},Ag.DEBUG),m(r),g=null}))})),ig(pg(kg(Bg(c),r,s),hg((([e,,r])=>e&&r)),yg((({value:e},[,r])=>({refreshed:e===r,value:r})),{refreshed:!1,value:0}),hg((({refreshed:e})=>e)),wg(c,r)),(([,e])=>{lg(i)&&h(!1!==e)})),ig(u,(()=>{h(!1!==lg(c))})),ig(kg(Bg(c),t),(([e,r])=>{e&&!r.atBottom&&"VIEWPORT_HEIGHT_DECREASING"===r.notAtBottomBecause&&m("auto")})),{autoscrollToBottom:u,followOutput:c}}),og(Em,jm,Am,Om,km,Ig,jg)),rh=Sg((([{data:e,firstItemIndex:r,gap:t,sizes:n},{initialTopMostItemIndex:o},{initialItemCount:i,listState:a},{didMount:s}])=>(dg(pg(s,wg(i),hg((([,e])=>0!==e)),wg(o,n,r,t,e),bg((([[,e],r,t,n,o,i=[]])=>Gm(e,r,t,n,o,i)))),a),{})),og(Em,Om,Xm,km),{singleton:!0}),th=Sg((([{didMount:e},{scrollTo:r},{listState:t}])=>{const n=Fg(0);return ig(pg(e,wg(n),hg((([,e])=>0!==e)),bg((([,e])=>({top:e})))),(e=>{cg(pg(t,vg(1),hg((e=>e.items.length>1))),(()=>{requestAnimationFrame((()=>{ag(r,e)}))}))})),{initialScrollTop:n}}),og(km,jg,Xm),{singleton:!0}),nh=({itemBottom:e,itemTop:r,locationParams:{align:t,behavior:n,...o},viewportBottom:i,viewportTop:a})=>r<a?{...o,align:null!=t?t:"start",behavior:n}:e>i?{...o,align:null!=t?t:"end",behavior:n}:null,oh=Sg((([{gap:e,sizes:r,totalCount:t},{fixedFooterHeight:n,fixedHeaderHeight:o,headerHeight:i,scrollingInProgress:a,scrollTop:s,viewportHeight:l},{scrollToIndex:d}])=>{const c=Cg();return dg(pg(c,wg(r,l,t,i,o,n,s),wg(e),bg((([[e,r,t,n,o,i,s,l],d])=>{const{align:c,behavior:u,calculateViewLocation:g=nh,done:m,...h}=e,b=pm(e,r,n-1),f=bm(b,r.offsetTree,d)+o+i,p=g({itemBottom:f+Yg(r.sizeTree,b)[1],itemTop:f,locationParams:{align:c,behavior:u,...h},viewportBottom:l+t-s,viewportTop:l+i});return p?m&&cg(pg(a,hg((e=>!e)),vg(lg(a)?1:2)),m):m&&m(),p})),hg((e=>null!==e))),d),{scrollIntoView:c}}),og(Em,jg,Am,Xm,Ig),{singleton:!0}),ih=Sg((([{scrollVelocity:e}])=>{const r=Fg(!1),t=Cg(),n=Fg(!1);return dg(pg(e,wg(n,r,t),hg((([e,r])=>!!r)),bg((([e,r,t,n])=>{const{enter:o,exit:i}=r;if(t){if(i(e,n))return!1}else if(o(e,n))return!0;return t})),mg()),r),ig(pg(kg(r,e,t),wg(n)),(([[e,r,t],n])=>{e&&n&&n.change&&n.change(r,t)})),{isSeeking:r,scrollSeekConfiguration:n,scrollSeekRangeChanged:t,scrollVelocity:e}}),og(jm),{singleton:!0}),ah=Sg((([{scrollContainerState:e,scrollTo:r}])=>{const t=Cg(),n=Cg(),o=Cg(),i=Fg(!1),a=Fg(void 0);return dg(pg(kg(t,n),bg((([{scrollHeight:e,scrollTop:r,viewportHeight:t},{offsetTop:n}])=>({scrollHeight:e,scrollTop:Math.max(0,r-n),viewportHeight:t})))),e),dg(pg(r,wg(n),bg((([e,{offsetTop:r}])=>({...e,top:e.top+r})))),o),{customScrollParent:a,useWindowScroll:i,windowScrollContainerState:t,windowScrollTo:o,windowViewportRect:n}}),og(jg)),sh=Sg((([{sizeRanges:e,sizes:r},{headerHeight:t,scrollTop:n},{initialTopMostItemIndex:o},{didMount:i},{useWindowScroll:a,windowScrollContainerState:s,windowViewportRect:l}])=>{const d=Cg(),c=Fg(void 0),u=Fg(null),g=Fg(null);return dg(s,u),dg(l,g),ig(pg(d,wg(r,n,a,u,g,t)),(([e,r,t,n,o,i,a])=>{const s=function(e){return qg(e).map((({k:e,v:r},t,n)=>{const o=n[t+1];return{endIndex:o?o.k-1:1/0,size:r,startIndex:e}}))}(r.sizeTree);n&&null!==o&&null!==i&&(t=o.scrollTop-i.offsetTop),e({ranges:s,scrollTop:t-=a})})),dg(pg(c,hg(eg),bg(lh)),o),dg(pg(i,wg(c),hg((([,e])=>void 0!==e)),mg(),bg((([,e])=>e.ranges))),e),{getState:d,restoreStateFrom:c}}),og(Em,jg,Om,km,ah));function lh(e){return{align:"start",index:0,offset:e.scrollTop}}const dh=Sg((([{topItemsIndexes:e}])=>{const r=Fg(0);return dg(pg(r,hg((e=>e>=0)),bg((e=>Array.from({length:e}).map(((e,r)=>r))))),e),{topItemCount:r}}),og(Xm));function ch(e){let r,t=!1;return()=>(t||(t=!0,r=e()),r)}const uh=ch((()=>/iP(ad|od|hone)/i.test(navigator.userAgent)&&/WebKit/i.test(navigator.userAgent))),gh=Sg((([{deviation:e,scrollBy:r,scrollingInProgress:t,scrollTop:n},{isAtBottom:o,isScrolling:i,lastJumpDueToItemResize:a,scrollDirection:s},{listState:l},{beforeUnshiftWith:d,gap:c,shiftWithOffset:u,sizes:g},{log:m},{recalcInProgress:h}])=>{const b=Eg(pg(l,wg(a),yg((([,e,r,t],[{bottom:n,items:o,offsetBottom:i,totalCount:a},s])=>{const l=n+i;let d=0;return r===a&&e.length>0&&o.length>0&&(0===o[0].originalIndex&&0===e[0].originalIndex||(d=l-t,0!==d&&(d+=s))),[d,o,a,l]}),[0,[],0,0]),hg((([e])=>0!==e)),wg(n,s,t,o,m,h),hg((([,e,r,t,,,n])=>!n&&!t&&0!==e&&r===Hm)),bg((([[e],,,,,r])=>(r("Upward scrolling compensation",{amount:e},Ag.DEBUG),e)))));function f(t){t>0?(ag(r,{behavior:"auto",top:-t}),ag(e,0)):(ag(e,0),ag(r,{behavior:"auto",top:-t}))}return ig(pg(b,wg(e,i)),(([r,t,n])=>{n&&uh()?ag(e,t-r):f(-r)})),ig(pg(kg($g(i,!1),e,h),hg((([e,r,t])=>!e&&!t&&0!==r)),bg((([e,r])=>r)),xg(1)),f),dg(pg(u,bg((e=>({top:-e})))),r),ig(pg(d,wg(g,c),bg((([e,{groupIndices:r,lastSize:t,sizeTree:n},o])=>{function i(e){return e*(t+o)}if(0===r.length)return i(e);{let t=0;const o=Pg(n,0);let a=0,s=0;for(;a<e;){a++,t+=o;let n=r.length===s+1?1/0:r[s+1]-r[s]-1;a+n>e&&(t-=o,n=e-a+1),a+=n,t+=i(n),s++}return t}}))),(t=>{ag(e,t),requestAnimationFrame((()=>{ag(r,{top:t}),requestAnimationFrame((()=>{ag(e,0),ag(h,!1)}))}))})),{deviation:e}}),og(jg,jm,Xm,Em,Ig,lm)),mh=Sg((([e,r,t,n,o,i,a,s,l,d])=>({...e,...r,...t,...n,...o,...i,...a,...s,...l,...d})),og(Vm,rh,km,ih,Km,th,Jm,ah,oh,Ig)),hh=Sg((([{data:e,defaultItemSize:r,firstItemIndex:t,fixedItemSize:n,gap:o,groupIndices:i,itemSize:a,sizeRanges:s,sizes:l,statefulTotalCount:d,totalCount:c,trackItemSizes:u},{initialItemFinalLocationReached:g,initialTopMostItemIndex:m,scrolledToInitialItem:h},b,f,p,{listState:y,topItemsIndexes:v,...x},{scrollToIndex:w},F,{topItemCount:$},{groupCounts:C},E])=>(dg(x.rangeChanged,E.scrollSeekRangeChanged),dg(pg(E.windowViewportRect,bg((e=>e.visibleHeight))),b.viewportHeight),{data:e,defaultItemHeight:r,firstItemIndex:t,fixedItemHeight:n,gap:o,groupCounts:C,initialItemFinalLocationReached:g,initialTopMostItemIndex:m,scrolledToInitialItem:h,sizeRanges:s,topItemCount:$,topItemsIndexes:v,totalCount:c,...p,groupIndices:i,itemSize:a,listState:y,scrollToIndex:w,statefulTotalCount:d,trackItemSizes:u,...x,...E,...b,sizes:l,...f})),og(Em,Om,jg,sh,eh,Xm,Am,gh,dh,Dm,mh));function bh(e,r){const t={},n={};let o=0;const i=e.length;for(;o<i;)n[e[o]]=1,o+=1;for(const e in r)Object.hasOwn(n,e)||(t[e]=r[e]);return t}const fh=typeof document<"u"?o.useLayoutEffect:o.useEffect;function ph(e,t,n){const i=Object.keys(t.required||{}),a=Object.keys(t.optional||{}),s=Object.keys(t.methods||{}),l=Object.keys(t.events||{}),d=o.createContext({});function c(e,r){e.propsReady&&ag(e.propsReady,!1);for(const n of i){ag(e[t.required[n]],r[n])}for(const n of a)if(n in r){ag(e[t.optional[n]],r[n])}e.propsReady&&ag(e.propsReady,!0)}function u(e){return l.reduce(((r,n)=>(r[n]=function(e){let r,t;const n=()=>null==r?void 0:r();return function(o,i){switch(o){case 1:return i?t===i?void 0:(n(),t=i,r=ig(e,i),r):(n(),rg);case 2:return n(),void(t=null)}}}(e[t.events[n]]),r)),{})}const g=o.forwardRef(((g,m)=>{const{children:h,...b}=g,[f]=o.useState((()=>tg(function(e){const r=new Map,t=({constructor:e,dependencies:n,id:o,singleton:i})=>{if(i&&r.has(o))return r.get(o);const a=e(n.map((e=>t(e))));return i&&r.set(o,a),a};return t(e)}(e),(e=>{c(e,b)})))),[p]=o.useState(Ju(u,f));fh((()=>{for(const e of l)e in b&&ig(p[e],b[e]);return()=>{Object.values(p).map(sg)}}),[b,p,f]),fh((()=>{c(f,b)})),o.useImperativeHandle(m,qu(function(e){return s.reduce(((r,n)=>(r[n]=r=>{ag(e[t.methods[n]],r)},r)),{})}(f)));const y=n;return r(d.Provider,{value:f,children:n?r(y,{...bh([...i,...a,...l],b),children:h}):h})}));return{Component:g,useEmitter:(e,r)=>{const t=o.useContext(d)[e];fh((()=>ig(t,r)),[r,t])},useEmitterValue:o.version.startsWith("18")?e=>{const r=o.useContext(d)[e],t=o.useCallback((e=>ig(r,e)),[r]);return o.useSyncExternalStore(t,(()=>lg(r)),(()=>lg(r)))}:e=>{const r=o.useContext(d)[e],[t,n]=o.useState(Ju(lg,r));return fh((()=>ig(r,(e=>{e!==t&&n(qu(e))}))),[r,t]),t},usePublisher:e=>o.useCallback(Qu(ag,o.useContext(d)[e]),[e])}}const yh=o.createContext(void 0),vh=o.createContext(void 0),xh=typeof document<"u"?o.useLayoutEffect:o.useEffect;function wh(e,r,t,n=rg,i,a){const s=o.useRef(null),l=o.useRef(null),d=o.useRef(null),c=o.useCallback((t=>{const n=t.target,o=n===window||n===document,i=a?o?window.pageXOffset||document.documentElement.scrollLeft:n.scrollLeft:o?window.pageYOffset||document.documentElement.scrollTop:n.scrollTop,s=a?o?document.documentElement.scrollWidth:n.scrollWidth:o?document.documentElement.scrollHeight:n.scrollHeight,c=a?o?window.innerWidth:n.offsetWidth:o?window.innerHeight:n.offsetHeight,u=()=>{e({scrollHeight:s,scrollTop:Math.max(i,0),viewportHeight:c})};t.suppressFlushSync?u():O.flushSync(u),null!==l.current&&(i===l.current||i<=0||i===s-c)&&(l.current=null,r(!0),d.current&&(clearTimeout(d.current),d.current=null))}),[e,r]);return o.useEffect((()=>{const e=i||s.current;return n(i||s.current),c({suppressFlushSync:!0,target:e}),e.addEventListener("scroll",c,{passive:!0}),()=>{n(null),e.removeEventListener("scroll",c)}}),[s,c,t,n,i]),{scrollByCallback:function(e){a&&(e={behavior:e.behavior,left:e.top}),s.current.scrollBy(e)},scrollerRef:s,scrollToCallback:function(t){const n=s.current;if(!n||(a?"offsetWidth"in n&&0===n.offsetWidth:"offsetHeight"in n&&0===n.offsetHeight))return;const o="smooth"===t.behavior;let i,c,u;n===window?(c=Math.max(um(document.documentElement,a?"width":"height"),a?document.documentElement.scrollWidth:document.documentElement.scrollHeight),i=a?window.innerWidth:window.innerHeight,u=a?document.documentElement.scrollLeft:document.documentElement.scrollTop):(c=n[a?"scrollWidth":"scrollHeight"],i=um(n,a?"width":"height"),u=n[a?"scrollLeft":"scrollTop"]);const g=c-i;if(t.top=Math.ceil(Math.max(Math.min(g,t.top),0)),Mm(i,c)||t.top===u)return e({scrollHeight:c,scrollTop:u,viewportHeight:i}),void(o&&r(!0));o?(l.current=t.top,d.current&&clearTimeout(d.current),d.current=setTimeout((()=>{d.current=null,l.current=null,r(!0)}),1e3)):l.current=null,a&&(t={behavior:t.behavior,left:t.top}),n.scrollTo(t)}}}const Fh="-webkit-sticky",$h="sticky",Ch=ch((()=>{if(typeof document>"u")return $h;const e=document.createElement("div");return e.style.position=Fh,e.style.position===Fh?Fh:$h}));function Eh(e){return e}const Sh=Sg((()=>{const e=Fg((e=>`Item ${e}`)),r=Fg(null),t=Fg((e=>`Group ${e}`)),n=Fg({}),o=Fg(Eh),i=Fg("div"),a=Fg(rg),s=(e,r=null)=>$g(pg(n,bg((r=>r[e])),mg()),r);return{components:n,computeItemKey:o,context:r,EmptyPlaceholder:s("EmptyPlaceholder"),FooterComponent:s("Footer"),GroupComponent:s("Group","div"),groupContent:t,HeaderComponent:s("Header"),HeaderFooterTag:i,ItemComponent:s("Item","div"),itemContent:e,ListComponent:s("List","div"),ScrollerComponent:s("Scroller","div"),scrollerRef:a,ScrollSeekPlaceholder:s("ScrollSeekPlaceholder"),TopItemListComponent:s("TopItemList")}})),Dh=Sg((([e,r])=>({...e,...r})),og(hh,Sh)),kh=({height:e})=>r("div",{style:{height:e}}),Bh={overflowAnchor:"none",position:Ch(),zIndex:1},Th={overflowAnchor:"none"},Ah={...Th,display:"inline-block",height:"100%"},zh=o.memo((function({showTopList:e=!1}){const t=qh("listState"),n=Xh("sizeRanges"),i=qh("useWindowScroll"),a=qh("customScrollParent"),s=Xh("windowScrollContainerState"),l=Xh("scrollContainerState"),d=a||i?s:l,c=qh("itemContent"),u=qh("context"),g=qh("groupContent"),m=qh("trackItemSizes"),h=qh("itemSize"),b=qh("log"),f=Xh("gap"),p=qh("horizontalDirection"),{callbackRef:v}=Hg(n,h,m,e?rg:d,b,f,a,p,qh("skipAnimationFrameInResizeObserver")),[x,w]=o.useState(0);Gh("deviation",(e=>{x!==e&&w(e)}));const F=qh("EmptyPlaceholder"),$=qh("ScrollSeekPlaceholder")||kh,C=qh("ListComponent"),E=qh("ItemComponent"),S=qh("GroupComponent"),D=qh("computeItemKey"),k=qh("isSeeking"),B=qh("groupIndices").length>0,T=qh("alignToBottom"),A=qh("initialItemFinalLocationReached"),z=e?{}:{boxSizing:"border-box",...p?{display:"inline-block",height:"100%",marginLeft:0!==x?x:T?"auto":0,paddingLeft:t.offsetTop,paddingRight:t.offsetBottom,whiteSpace:"nowrap"}:{marginTop:0!==x?x:T?"auto":0,paddingBottom:t.offsetBottom,paddingTop:t.offsetTop},...A?{}:{visibility:"hidden"}};return!e&&0===t.totalCount&&F?r(F,{...Lh(F,u)}):r(C,{...Lh(C,u),"data-testid":e?"virtuoso-top-item-list":"virtuoso-item-list",ref:v,style:z,children:(e?t.topItems:t.items).map((e=>{const r=e.originalIndex,n=D(r+t.firstItemIndex,e.data,u);return k?y($,{...Lh($,u),height:e.size,index:e.index,key:n,type:e.type||"item",..."group"===e.type?{}:{groupIndex:e.groupIndex}}):"group"===e.type?y(S,{...Lh(S,u),"data-index":r,"data-item-index":e.index,"data-known-size":e.size,key:n,style:Bh},g(e.index,u)):y(E,{...Lh(E,u),...Rh(E,e.data),"data-index":r,"data-item-group-index":e.groupIndex,"data-item-index":e.index,"data-known-size":e.size,key:n,style:p?Ah:Th},B?c(e.index,e.groupIndex,e.data,u):c(e.index,e.data,u))}))})})),Ih={height:"100%",outline:"none",overflowY:"auto",position:"relative",WebkitOverflowScrolling:"touch"},Oh={outline:"none",overflowX:"auto",position:"relative"},Mh=e=>({height:"100%",position:"absolute",top:0,width:"100%",...e?{display:"flex",flexDirection:"column"}:{}}),Hh={position:Ch(),top:0,width:"100%",zIndex:1};function Lh(e,r){if("string"!=typeof e)return{context:r}}function Rh(e,r){return{item:"string"==typeof e?void 0:r}}const jh=o.memo((function(){const e=qh("HeaderComponent"),t=Xh("headerHeight"),n=qh("HeaderFooterTag"),i=Og(o.useMemo((()=>e=>{t(um(e,"height"))}),[t]),!0,qh("skipAnimationFrameInResizeObserver")),a=qh("context");return e?r(n,{ref:i,children:r(e,{...Lh(e,a)})}):null})),_h=o.memo((function(){const e=qh("FooterComponent"),t=Xh("footerHeight"),n=qh("HeaderFooterTag"),i=Og(o.useMemo((()=>e=>{t(um(e,"height"))}),[t]),!0,qh("skipAnimationFrameInResizeObserver")),a=qh("context");return e?r(n,{ref:i,children:r(e,{...Lh(e,a)})}):null}));function Wh({useEmitter:e,useEmitterValue:t,usePublisher:n}){return o.memo((function({children:o,style:i,...a}){const s=n("scrollContainerState"),l=t("ScrollerComponent"),d=n("smoothScrollTargetReached"),c=t("scrollerRef"),u=t("context"),g=t("horizontalDirection")||!1,{scrollByCallback:m,scrollerRef:h,scrollToCallback:b}=wh(s,d,l,c,void 0,g);return e("scrollTo",b),e("scrollBy",m),r(l,{"data-testid":"virtuoso-scroller","data-virtuoso-scroller":!0,ref:h,style:{...g?Oh:Ih,...i},tabIndex:0,...a,...Lh(l,u),children:o})}))}function Nh({useEmitter:e,useEmitterValue:t,usePublisher:n}){return o.memo((function({children:o,style:i,...a}){const s=n("windowScrollContainerState"),l=t("ScrollerComponent"),d=n("smoothScrollTargetReached"),c=t("totalListHeight"),u=t("deviation"),g=t("customScrollParent"),m=t("context"),{scrollByCallback:h,scrollerRef:b,scrollToCallback:f}=wh(s,d,l,rg,g);return xh((()=>(b.current=g||window,()=>{b.current=null})),[b,g]),e("windowScrollTo",f),e("scrollBy",h),r(l,{"data-virtuoso-scroller":!0,style:{position:"relative",...i,...0!==c?{height:c+u}:{}},...a,...Lh(l,m),children:o})}))}const Ph=({children:e})=>{const t=o.useContext(yh),n=Xh("viewportHeight"),i=Xh("fixedItemHeight"),a=qh("alignToBottom"),s=qh("horizontalDirection"),l=Og(o.useMemo((()=>Ku(n,(e=>um(e,s?"width":"height")))),[n,s]),!0,qh("skipAnimationFrameInResizeObserver"));return o.useEffect((()=>{t&&(n(t.viewportHeight),i(t.itemHeight))}),[t,n,i]),r("div",{"data-viewport-type":"element",ref:l,style:Mh(a),children:e})},Yh=({children:e})=>{const t=o.useContext(yh),n=Xh("windowViewportRect"),i=Xh("fixedItemHeight"),a=qh("customScrollParent"),s=Rg(n,a,qh("skipAnimationFrameInResizeObserver")),l=qh("alignToBottom");return o.useEffect((()=>{t&&(i(t.itemHeight),n({offsetTop:0,visibleHeight:t.viewportHeight,visibleWidth:100}))}),[t,n,i]),r("div",{"data-viewport-type":"window",ref:s,style:Mh(l),children:e})},Vh=({children:e})=>{const t=qh("TopItemListComponent")||"div",n=qh("headerHeight"),o={...Hh,marginTop:`${n}px`},i=qh("context");return r(t,{style:o,...Lh(t,i),children:e})},Uh=o.memo((function(t){const n=qh("useWindowScroll"),o=qh("topItemsIndexes").length>0,i=qh("customScrollParent"),a=qh("context"),s=i||n?Jh:Kh,l=i||n?Yh:Ph;return e(s,{...t,...Lh(s,a),children:[o&&r(Vh,{children:r(zh,{showTopList:!0})}),e(l,{children:[r(jh,{}),r(zh,{}),r(_h,{})]})]})})),{Component:Zh,useEmitter:Gh,useEmitterValue:qh,usePublisher:Xh}=ph(Dh,{events:{atBottomStateChange:"atBottomStateChange",atTopStateChange:"atTopStateChange",endReached:"endReached",groupIndices:"groupIndices",isScrolling:"isScrolling",itemsRendered:"itemsRendered",rangeChanged:"rangeChanged",startReached:"startReached",totalListHeightChanged:"totalListHeightChanged"},methods:{autoscrollToBottom:"autoscrollToBottom",getState:"getState",scrollBy:"scrollBy",scrollIntoView:"scrollIntoView",scrollTo:"scrollTo",scrollToIndex:"scrollToIndex"},optional:{alignToBottom:"alignToBottom",atBottomThreshold:"atBottomThreshold",atTopThreshold:"atTopThreshold",components:"components",computeItemKey:"computeItemKey",context:"context",customScrollParent:"customScrollParent",data:"data",defaultItemHeight:"defaultItemHeight",firstItemIndex:"firstItemIndex",fixedItemHeight:"fixedItemHeight",followOutput:"followOutput",groupContent:"groupContent",groupCounts:"groupCounts",headerFooterTag:"HeaderFooterTag",horizontalDirection:"horizontalDirection",increaseViewportBy:"increaseViewportBy",initialItemCount:"initialItemCount",initialScrollTop:"initialScrollTop",initialTopMostItemIndex:"initialTopMostItemIndex",itemContent:"itemContent",itemSize:"itemSize",logLevel:"logLevel",overscan:"overscan",restoreStateFrom:"restoreStateFrom",scrollerRef:"scrollerRef",scrollSeekConfiguration:"scrollSeekConfiguration",skipAnimationFrameInResizeObserver:"skipAnimationFrameInResizeObserver",topItemCount:"topItemCount",totalCount:"totalCount",useWindowScroll:"useWindowScroll"},required:{}},Uh),Kh=Wh({useEmitter:Gh,useEmitterValue:qh,usePublisher:Xh}),Jh=Nh({useEmitter:Gh,useEmitterValue:qh,usePublisher:Xh}),Qh=Zh,eb={bottom:0,itemHeight:0,items:[],itemWidth:0,offsetBottom:0,offsetTop:0,top:0},rb={bottom:0,itemHeight:0,items:[{index:0}],itemWidth:0,offsetBottom:0,offsetTop:0,top:0},{ceil:tb,floor:nb,max:ob,min:ib,round:ab}=Math;function sb(e,r,t){return Array.from({length:r-e+1}).map(((r,n)=>({data:null===t?null:t[n+e],index:n+e})))}function lb(e,r){return e&&e.width===r.width&&e.height===r.height}function db(e,r){return e&&e.column===r.column&&e.row===r.row}const cb=Sg((([{increaseViewportBy:e,listBoundary:r,overscan:t,visibleRange:n},{footerHeight:o,headerHeight:i,scrollBy:a,scrollContainerState:s,scrollTo:l,scrollTop:d,smoothScrollTargetReached:c,viewportHeight:u},g,m,{didMount:h,propsReady:b},{customScrollParent:f,useWindowScroll:p,windowScrollContainerState:y,windowScrollTo:v,windowViewportRect:x},w])=>{const F=Fg(0),$=Fg(0),C=Fg(eb),E=Fg({height:0,width:0}),S=Fg({height:0,width:0}),D=Cg(),k=Cg(),B=Fg(0),T=Fg(null),A=Fg({column:0,row:0}),z=Cg(),I=Cg(),O=Fg(!1),M=Fg(0),H=Fg(!0),L=Fg(!1),R=Fg(!1);ig(pg(h,wg(M),hg((([e,r])=>!!r))),(()=>{ag(H,!1)})),ig(pg(kg(h,H,S,E,M,L),hg((([e,r,t,n,,o])=>e&&!r&&0!==t.height&&0!==n.height&&!o))),(([,,,,e])=>{ag(L,!0),zm(1,(()=>{ag(D,e)})),cg(pg(d),(()=>{ag(r,[0,0]),ag(H,!0)}))})),dg(pg(I,hg((e=>null!=e&&e.scrollTop>0)),fg(0)),$),ig(pg(h,wg(I),hg((([,e])=>null!=e))),(([,e])=>{e&&(ag(E,e.viewport),ag(S,e.item),ag(A,e.gap),e.scrollTop>0&&(ag(O,!0),cg(pg(d,vg(1)),(e=>{ag(O,!1)})),ag(l,{top:e.scrollTop})))})),dg(pg(E,bg((({height:e})=>e))),u),dg(pg(kg(Bg(E,lb),Bg(S,lb),Bg(A,((e,r)=>e&&e.column===r.column&&e.row===r.row)),Bg(d)),bg((([e,r,t,n])=>({gap:t,item:r,scrollTop:n,viewport:e})))),z),dg(pg(kg(Bg(F),n,Bg(A,db),Bg(S,lb),Bg(E,lb),Bg(T),Bg($),Bg(O),Bg(H),Bg(M)),hg((([,,,,,,,e])=>!e)),bg((([e,[r,t],n,o,i,a,s,,l,d])=>{const{column:c,row:u}=n,{height:g,width:m}=o,{width:h}=i;if(0===s&&(0===e||0===h))return eb;if(0===m){const r=Im(d,e);return function(e){return{...rb,items:e}}(sb(r,r+Math.max(s-1,0),a))}const b=ub(h,m,c);let f,p;l?0===r&&0===t&&s>0?(f=0,p=s-1):(f=b*nb((r+u)/(g+u)),p=b*tb((t+u)/(g+u))-1,p=ib(e-1,ob(p,b-1)),f=ib(p,ob(0,f))):(f=0,p=-1);const y=sb(f,p,a),{bottom:v,top:x}=gb(i,n,o,y),w=tb(e/b);return{bottom:v,itemHeight:g,items:y,itemWidth:m,offsetBottom:w*g+(w-1)*u-v,offsetTop:x,top:x}}))),C),dg(pg(T,hg((e=>null!==e)),bg((e=>e.length))),F),dg(pg(kg(E,S,C,A),hg((([e,r,{items:t}])=>t.length>0&&0!==r.height&&0!==e.height)),bg((([e,r,{items:t},n])=>{const{bottom:o,top:i}=gb(e,n,r,t);return[i,o]})),mg(sm)),r);const j=Fg(!1);dg(pg(d,wg(j),bg((([e,r])=>r||0!==e))),j);const _=Eg(pg(kg(C,F),hg((([{items:e}])=>e.length>0)),wg(j),hg((([[e,r],t])=>{const n=e.items[e.items.length-1].index===r-1;return(t||e.bottom>0&&e.itemHeight>0&&0===e.offsetBottom&&e.items.length===r)&&n})),bg((([[,e]])=>e-1)),mg())),W=Eg(pg(Bg(C),hg((({items:e})=>e.length>0&&0===e[0].index)),fg(0),mg())),N=Eg(pg(Bg(C),wg(O),hg((([{items:e},r])=>e.length>0&&!r)),bg((([{items:e}])=>({endIndex:e[e.length-1].index,startIndex:e[0].index}))),mg(am),xg(0)));dg(N,m.scrollSeekRangeChanged),dg(pg(D,wg(E,S,F,A),bg((([e,r,t,n,o])=>{const i=Tm(e),{align:a,behavior:s,offset:l}=i;let d=i.index;"LAST"===d&&(d=n-1),d=ob(0,d,ib(n-1,d));let c=mb(r,o,t,d);return"end"===a?c=ab(c-r.height+t.height):"center"===a&&(c=ab(c-r.height/2+t.height/2)),l&&(c+=l),{behavior:s,top:c}}))),l);const P=$g(pg(C,bg((e=>e.offsetBottom+e.bottom))),0);return dg(pg(x,bg((e=>({height:e.visibleHeight,width:e.visibleWidth})))),E),{customScrollParent:f,data:T,deviation:B,footerHeight:o,gap:A,headerHeight:i,increaseViewportBy:e,initialItemCount:$,itemDimensions:S,overscan:t,restoreStateFrom:I,scrollBy:a,scrollContainerState:s,scrollHeight:k,scrollTo:l,scrollToIndex:D,scrollTop:d,smoothScrollTargetReached:c,totalCount:F,useWindowScroll:p,viewportDimensions:E,windowScrollContainerState:y,windowScrollTo:v,windowViewportRect:x,...m,gridState:C,horizontalDirection:R,initialTopMostItemIndex:M,totalListHeight:P,...g,endReached:_,propsReady:b,rangeChanged:N,startReached:W,stateChanged:z,stateRestoreInProgress:O,...w}}),og(Vm,jg,jm,ih,km,ah,Ig));function ub(e,r,t){return ob(1,nb((e+t)/(nb(r)+t)))}function gb(e,r,t,n){const{height:o}=t;if(void 0===o||0===n.length)return{bottom:0,top:0};const i=mb(e,r,t,n[0].index);return{bottom:mb(e,r,t,n[n.length-1].index)+o,top:i}}function mb(e,r,t,n){const o=ub(e.width,t.width,r.column),i=nb(n/o),a=i*t.height+ob(0,i-1)*r.row;return a>0?a+r.row:a}const hb=Sg((()=>{const e=Fg((e=>`Item ${e}`)),r=Fg({}),t=Fg(null),n=Fg("virtuoso-grid-item"),o=Fg("virtuoso-grid-list"),i=Fg(Eh),a=Fg("div"),s=Fg(rg),l=(e,t=null)=>$g(pg(r,bg((r=>r[e])),mg()),t),d=Fg(!1),c=Fg(!1);return dg(Bg(c),d),{components:r,computeItemKey:i,context:t,FooterComponent:l("Footer"),HeaderComponent:l("Header"),headerFooterTag:a,itemClassName:n,ItemComponent:l("Item","div"),itemContent:e,listClassName:o,ListComponent:l("List","div"),readyStateChanged:d,reportReadyState:c,ScrollerComponent:l("Scroller","div"),scrollerRef:s,ScrollSeekPlaceholder:l("ScrollSeekPlaceholder","div")}})),bb=Sg((([e,r])=>({...e,...r})),og(cb,hb)),fb=o.memo((function(){const e=Cb("gridState"),t=Cb("listClassName"),n=Cb("itemClassName"),i=Cb("itemContent"),a=Cb("computeItemKey"),s=Cb("isSeeking"),l=Eb("scrollHeight"),d=Cb("ItemComponent"),c=Cb("ListComponent"),u=Cb("ScrollSeekPlaceholder"),g=Cb("context"),m=Eb("itemDimensions"),h=Eb("gap"),b=Cb("log"),f=Cb("stateRestoreInProgress"),p=Eb("reportReadyState"),v=Og(o.useMemo((()=>e=>{const r=e.parentElement.parentElement.scrollHeight;l(r);const t=e.firstChild;if(t){const{height:e,width:r}=t.getBoundingClientRect();m({height:e,width:r})}h({column:kb("column-gap",getComputedStyle(e).columnGap,b),row:kb("row-gap",getComputedStyle(e).rowGap,b)})}),[l,m,h,b]),!0,!1);return xh((()=>{e.itemHeight>0&&e.itemWidth>0&&p(!0)}),[e]),f?null:r(c,{className:t,ref:v,...Lh(c,g),"data-testid":"virtuoso-item-list",style:{paddingBottom:e.offsetBottom,paddingTop:e.offsetTop},children:e.items.map((t=>{const o=a(t.index,t.data,g);return s?r(u,{...Lh(u,g),height:e.itemHeight,index:t.index,width:e.itemWidth},o):y(d,{...Lh(d,g),className:n,"data-index":t.index,key:o},i(t.index,t.data,g))}))})})),pb=o.memo((function(){const e=Cb("HeaderComponent"),t=Eb("headerHeight"),n=Cb("headerFooterTag"),i=Og(o.useMemo((()=>e=>{t(um(e,"height"))}),[t]),!0,!1),a=Cb("context");return e?r(n,{ref:i,children:r(e,{...Lh(e,a)})}):null})),yb=o.memo((function(){const e=Cb("FooterComponent"),t=Eb("footerHeight"),n=Cb("headerFooterTag"),i=Og(o.useMemo((()=>e=>{t(um(e,"height"))}),[t]),!0,!1),a=Cb("context");return e?r(n,{ref:i,children:r(e,{...Lh(e,a)})}):null})),vb=({children:e})=>{const t=o.useContext(vh),n=Eb("itemDimensions"),i=Eb("viewportDimensions"),a=Og(o.useMemo((()=>e=>{i(e.getBoundingClientRect())}),[i]),!0,!1);return o.useEffect((()=>{t&&(i({height:t.viewportHeight,width:t.viewportWidth}),n({height:t.itemHeight,width:t.itemWidth}))}),[t,i,n]),r("div",{ref:a,style:Mh(!1),children:e})},xb=({children:e})=>{const t=o.useContext(vh),n=Eb("windowViewportRect"),i=Eb("itemDimensions"),a=Cb("customScrollParent"),s=Rg(n,a,!1);return o.useEffect((()=>{t&&(i({height:t.itemHeight,width:t.itemWidth}),n({offsetTop:0,visibleHeight:t.viewportHeight,visibleWidth:t.viewportWidth}))}),[t,n,i]),r("div",{ref:s,style:Mh(!1),children:e})},wb=o.memo((function({...t}){const n=Cb("useWindowScroll"),o=Cb("customScrollParent"),i=o||n?Db:Sb,a=o||n?xb:vb,s=Cb("context");return r(i,{...t,...Lh(i,s),children:e(a,{children:[r(pb,{}),r(fb,{}),r(yb,{})]})})})),{Component:Fb,useEmitter:$b,useEmitterValue:Cb,usePublisher:Eb}=ph(bb,{events:{atBottomStateChange:"atBottomStateChange",atTopStateChange:"atTopStateChange",endReached:"endReached",isScrolling:"isScrolling",rangeChanged:"rangeChanged",readyStateChanged:"readyStateChanged",startReached:"startReached",stateChanged:"stateChanged"},methods:{scrollBy:"scrollBy",scrollTo:"scrollTo",scrollToIndex:"scrollToIndex"},optional:{components:"components",computeItemKey:"computeItemKey",context:"context",customScrollParent:"customScrollParent",data:"data",headerFooterTag:"headerFooterTag",increaseViewportBy:"increaseViewportBy",initialItemCount:"initialItemCount",initialTopMostItemIndex:"initialTopMostItemIndex",itemClassName:"itemClassName",itemContent:"itemContent",listClassName:"listClassName",logLevel:"logLevel",overscan:"overscan",restoreStateFrom:"restoreStateFrom",scrollerRef:"scrollerRef",scrollSeekConfiguration:"scrollSeekConfiguration",totalCount:"totalCount",useWindowScroll:"useWindowScroll"}},wb),Sb=Wh({useEmitter:$b,useEmitterValue:Cb,usePublisher:Eb}),Db=Nh({useEmitter:$b,useEmitterValue:Cb,usePublisher:Eb});function kb(e,r,t){return"normal"!==r&&!(null!=r&&r.endsWith("px"))&&t(`${e} was not resolved to pixel value correctly`,r,Ag.WARN),"normal"===r?0:parseInt(null!=r?r:"0",10)}const Bb=o.createContext({focusedIndex:-1,setFocusedIndex:()=>{}}),Tb=({children:e})=>{const[t,n]=s(-1);return r(Bb.Provider,{value:{focusedIndex:t,setFocusedIndex:n},children:e})},Ab=$.div`
    border: ${ho["width-010"]} ${ho.solid} ${uo.border};
    border-radius: ${fo.sm};
    background: ${uo.bg};

    --x-spacing: 0px;
    --available-width: calc(100vw - var(--x-spacing) * 2);

    ${yo.MaxWidth.sm} {
        --x-spacing: ${po["sm-margin"]}px;
        max-height: 15rem;
    }

    ${yo.MaxWidth.xs} {
        --x-spacing: ${po["xs-margin"]}px;
    }

    ${yo.MaxWidth.xxs} {
        --x-spacing: ${po["xxs-margin"]}px;
    }

    max-width: var(--available-width);

    ${e=>e.$customWidth?`width: ${e.$customWidth};`:e.$width?`width: ${e.$width}px; min-width: min(23rem, var(--available-width));`:"min-width: min(23rem, var(--available-width));"}

    max-height: min(27rem, var(--available-height, infinity * 1px));
    overflow: hidden;
    overflow-y: auto;
    ${e=>"small"===e.$variant?go["body-md-regular"]:go["body-baseline-regular"]}

    &::-webkit-scrollbar {
        width: 14px;
    }

    &::-webkit-scrollbar-track {
        background: transparent;
    }

    &::-webkit-scrollbar-thumb {
        background: ${uo["bg-inverse-subtlest"]};
        border: 5px solid transparent;
        border-radius: ${fo.full};
        background-clip: padding-box;
    }
`,zb=$.div`
    background: transparent;
    padding: ${bo["spacing-8"]};
`,Ib=$.ul`
    list-style-type: none;
`,Ob=$.li`
    display: flex;
    align-items: flex-start;
    gap: ${bo["spacing-8"]};
    padding: ${bo["spacing-12"]} ${bo["spacing-8"]};
    cursor: pointer;
    border: none;
    border-radius: ${fo.none};
    outline: none;

    ${e=>e.$disabled?C`
                cursor: not-allowed;
            `:e.$active&&e.$selected?C`
                background: ${uo["bg-hover"]};
            `:e.$active?C`
                background: ${uo["bg-hover-subtle"]};
            `:void 0}
`,Mb=$(N)`
    flex-shrink: 0;
    height: 1lh;
    width: 1rem;
    color: ${uo["icon-selected"]};
`,Hb=$.div`
    flex-shrink: 0;
    height: 1lh;
    width: 1rem;
`,Lb=$(W)`
    flex-shrink: 0;
    height: 1lh;
    width: 1lh;
    color: ${uo["icon-selected"]};
`,Rb=$(_)`
    flex-shrink: 0;
    height: 1lh;
    width: 1lh;
    color: ${uo["icon-primary-subtlest"]};
`,jb=$(ne)`
    flex-shrink: 0;
    height: 1lh;
    width: 1lh;
    color: ${uo["icon-disabled-subtle"]};
`,_b=$.div`
    width: 100%;
    display: flex;
    justify-content: flex-end;
`,Wb=$(Uo)`
    cursor: pointer;
    overflow: hidden;
    color: ${uo["text-primary"]};
    font-size: inherit;
`,Nb=$(Wb)`
    ${go["body-baseline-semibold"]}
`,Pb=$(Wb)`
    ${go["body-md-semibold"]}
    padding: ${bo["spacing-8"]} ${bo["spacing-8"]};
`,Yb=$.div`
    width: 100%;
    display: flex;
    padding: ${bo["spacing-12"]} ${bo["spacing-16"]};
    align-items: center;
`,Vb=$(T)`
    margin-right: ${bo["spacing-4"]};
    color: ${uo["icon-error"]};
    height: 1em;
    width: 1em;
`,Ub=$(Oa)`
    margin-right: ${bo["spacing-8"]};
    color: ${uo.icon};
`,Zb=$.div`
    ${Na()}
    color: ${uo["text-subtle"]};
    padding: 0 ${bo["spacing-16"]} ${bo["spacing-12"]}
        ${bo["spacing-16"]};
`,Gb=$.div`
    background: ${uo["bg-strong"]};
    border-radius: ${fo.sm};
    display: flex;
    align-items: center;

    ${e=>"small"===e.$variant?go["body-md-regular"]:go["body-baseline-regular"]}
`,qb=$.label`
    flex: 1;
    display: flex;
    align-items: center;
    gap: ${bo["spacing-8"]};
    padding: ${e=>"small"===e.$variant?C`
                  ${bo["spacing-8"]} ${bo["spacing-16"]}
              `:C`10px ${bo["spacing-8"]}`};
`,Xb=$(Vo)`
    flex: 1;
`,Kb=$(oe)`
    color: ${uo.icon};
    flex-shrink: 0;
    height: 1em;
    width: 1em;
`,Jb=$(Bs)`
    flex-shrink: 0;
    align-self: stretch;
    box-sizing: content-box;
    padding: ${bo["spacing-8"]};
    margin-left: -${bo["spacing-8"]};
    color: ${uo.icon};
    cursor: pointer;
    font-size: inherit;

    svg {
        flex-shrink: 0;
        height: 1em;
        width: 1em;
    }
`,Qb=v(((t,n)=>{var{value:o,variant:i,onClear:a}=t,s=ae(t,["value","variant","onClear"]);return e(Gb,{$variant:i,children:[e(qb,{$variant:i,children:[r(Kb,{"aria-hidden":!0}),r(Xb,Object.assign({ref:n,value:o,$variant:i},s))]}),o&&r(Jb,{"aria-label":"Clear search",focusOutline:"browser",onClick:a,children:r(j,{"aria-hidden":!0})})]})})),ef=v((({listItems:n,multiSelect:o,maxSelectable:i,selectedItems:l,disableItemFocus:d,itemsLoadState:c="success",itemTruncationType:u="end",itemMaxLines:m=2,labelDisplayType:b="inline",variant:f="default",listboxId:y,ariaLabel:v,matchElementWidth:w=!1,width:F,topScrollItem:$,onSelectItem:C,onSelectAll:E,onDismiss:S,onRetry:D,valueExtractor:k,listExtractor:B,renderListItem:T,renderCustomCallToAction:A,enableSearch:z,hideNoResultsDisplay:I,noResultsDescription:O,customLabels:M,searchPlaceholder:H,searchFunction:L,onSearch:R},j)=>{const{noResultsLabel:_="No results found.",selectAllButtonLabel:W="Select all",clearAllButtonLabel:N="Clear all"}=M||{},P=(null==M?void 0:M.searchPlaceholder)||H||"Search",Y=(null==M?void 0:M.noResultsDescription)||O,{focusedIndex:V,setFocusedIndex:U}=p(Bb),{elementWidth:Z,setFloatingRef:G,getFloatingProps:q,styles:X}=p(Qs),[K,J]=s(""),[Q,ee]=s(null!=n?n:[]),re=Ca(c),te=(()=>{const[e,r]=s(!1);return g((()=>{r(!0)}),[]),e})(),ne=a(null),oe=a(null),ie=a([]),ae=a(null),se=a(null),le=!!i&&!!l&&(null==l?void 0:l.length)===i,de=e=>{const r=B?B(e):null==e?void 0:e.toString();return"object"==typeof r?{title:r.title,secondaryLabel:r.secondaryLabel}:{title:null!=r?r:""}},ce=h((e=>!!Uu(l,(r=>Gu(r,e)))),[l]),ue=$a((()=>null==L?void 0:L(K))),ge=$a((()=>null==n?void 0:n.filter((e=>{const{title:r,secondaryLabel:t}=de(e),n=K.trim().toLowerCase();return r.toLowerCase().includes(n)||t&&t.toLowerCase().includes(n)})))),me=h((e=>{var r,t;if(d)return;if(ae.current)return U(-1),void setTimeout((()=>{var e;return null===(e=ae.current)||void 0===e?void 0:e.focus()}),0);const n=null!=Q?Q:[];if(0===n.length)return;if(void 0!==(null==e?void 0:e.index)){const t=Math.max(0,Math.min(e.index,n.length-1));return null===(r=se.current)||void 0===r||r.scrollToIndex({index:t,align:"center"}),U(t),void setTimeout((()=>{var e;return null===(e=ie.current[t])||void 0===e?void 0:e.focus()}),0)}const o=(null==e?void 0:e.preferSelected)?n.findIndex((e=>ce(e))):-1,i=-1!==o?o:V>=0&&V<n.length?V:0;null===(t=se.current)||void 0===t||t.scrollToIndex({index:i,align:"center"}),U(i),setTimeout((()=>{var e;return null===(e=ie.current[i])||void 0===e?void 0:e.focus()}),0)}),[ce,d,Q,V,U]),he=(e,r)=>{le&&!ce(e)||(U(r),null==C||C(e,(e=>k?k(e):e)(e)))},be=e=>{const r=e.target.value;J(r),null==R||R()},fe=()=>{var e;J(""),null===(e=ae.current)||void 0===e||e.focus(),null==R||R()},pe=()=>null==D?void 0:D();((e,r,t="window",n)=>{const o=a();g((()=>{o.current=r}),[r]),g((()=>{let r;switch(t){case"window":r=window;break;case"document":r=document;break;default:r=t}if(!r||!r.addEventListener)return;const i=e=>{var r;return null===(r=o.current)||void 0===r?void 0:r.call(o,e)};return r.addEventListener(e,i,n),()=>{null==r||r.removeEventListener(e,i,n)}}),[e,t])})("keydown",(e=>{var r,t;switch(e.code){case"ArrowDown":if(e.preventDefault(),V<Q.length-1){const e=V+1;null===(r=ie.current[e])||void 0===r||r.focus(),U(e)}break;case"ArrowUp":if(e.preventDefault(),V>0){const e=V-1;null===(t=ie.current[e])||void 0===t||t.focus(),U(e)}else 0===V&&ae.current&&(ae.current.focus(),U(-1));break;case"Space":case"Enter":document.activeElement===ie.current[V]&&(e.preventDefault(),Q[V]&&he(Q[V],V))}})),x(j,(()=>({refocus:me})),[me]),g((()=>{var e;if(!$)return void(null===(e=se.current)||void 0===e||e.scrollTo({top:0}));const r=setTimeout((()=>{if(!n)return;const e=n.indexOf($);se.current&&-1!==e&&(se.current.scrollToIndex({index:e}),U(e))}),0);return()=>clearTimeout(r)}),[ie,n,U,$]),g((()=>{d||te&&re&&"success"===c&&ae.current&&(U(-1),ae.current.focus())}),[te,re,c,U,d]),g((()=>{var e;ee(null!==(e=""===K?n:L?ue():ge())&&void 0!==e?e:[])}),[ue,ge,n,L,K]),g((()=>{var e,r,t;if(te)return;if(d||!n)return;const o=n.findIndex((e=>ce(e)));ae.current?(U(-1),setTimeout((()=>{var e;return null===(e=ae.current)||void 0===e?void 0:e.focus()}),200)):V>0?(null===(e=se.current)||void 0===e||e.scrollToIndex({index:V,align:"center"}),setTimeout((()=>{var e;return null===(e=ie.current[V])||void 0===e?void 0:e.focus()}),200)):-1!==o?(null===(r=se.current)||void 0===r||r.scrollToIndex({index:o,align:"center"}),U(o),setTimeout((()=>{var e;return null===(e=ie.current[o])||void 0===e?void 0:e.focus()}),200)):(null===(t=se.current)||void 0===t||t.scrollToIndex({index:0}),U(0),setTimeout((()=>{var e;return null===(e=ie.current[0])||void 0===e?void 0:e.focus()}),200))}),[ce,d,V,n,te,U]);const ye=e=>o?r(le&&!e?jb:e?Lb:Rb,{"aria-hidden":!0}):e?r(Mb,{"aria-hidden":!0}):r(Hb,{}),ve=(e,t)=>{const{title:n,secondaryLabel:o}=de(e);return r(hl,{displayType:b,label:n,maxLines:m,selected:t,disabled:!t&&le,sublabel:o,truncationType:u,variant:f})},xe=(n,i)=>{if(!D||"success"===c){const a=ce(n),s=i===V;return r(Ob,{"aria-selected":a,"aria-multiselectable":o,"aria-disabled":!a&&le,"aria-posinset":i+1,"aria-setsize":null==Q?void 0:Q.length,"data-testid":"list-item",onClick:()=>he(n,i),onMouseEnter:()=>(e=>U(e))(i),ref:e=>{ie.current[i]=e},role:"option",tabIndex:s?0:-1,$active:s,$selected:a,$disabled:!a&&le,children:T?T(n,{selected:a}):e(t,{children:[ye(a),ve(n,a)]})},((e,r)=>`item_${r}__${k?k(e):e}`)(n,i))}},we=()=>{if((z||L)&&"success"===c)return r(Qb,{ref:ae,onChange:be,value:K,placeholder:P,"data-testid":"search-input","aria-label":"Enter text to search",onClear:fe,variant:f})},Fe=()=>{if(l&&o&&Q.length>0&&!K&&"success"===c)return r(_b,{children:r(Pb,{onClick:E,type:"button",$variant:f,children:i||0!==l.length?N:W})})},$e=()=>{if(!I&&(K||!z)&&0===Q.length&&"success"===c)return e(t,{children:[e(Yb,{"data-testid":"list-no-results",children:[r(Vb,{"data-testid":"no-result-icon"}),_]}),Y&&r(Zb,{"data-testid":"no-result-desc",children:Y})]})},Ce=()=>{if(D&&"loading"===c)return e(Yb,{"data-testid":"list-loading",children:[r(Ub,{}),"Loading..."]})},Ee=()=>{if(D&&"fail"===c)return e(Yb,{"data-testid":"list-fail",children:[r(Vb,{"data-testid":"load-error-icon"}),"Failed to load. ",r(Nb,{onClick:pe,type:"button",$variant:f,children:"Try again."})]})},Se=()=>{var e;const t="test"===process.env.NODE_ENV;return r(Ib,{role:"listbox",id:y,children:r(Qh,Object.assign({ref:se,style:{height:"100%"},data:Q,customScrollParent:null!==(e=ne.current)&&void 0!==e?e:void 0,itemContent:(e,r)=>xe(r,e)},t?{initialItemCount:Q.length}:{}),t?Q.length:void 0)})};return e(Ab,Object.assign({"data-testid":"dropdown-container",ref:Si(ne,G),style:X},q(),{$width:w?Z:void 0,$customWidth:F,$variant:f,children:[r(Ea,{role:"status",children:v}),e(zb,{ref:oe,"data-testid":"dropdown-list",role:"group","aria-label":v,children:[we(),Fe(),$e(),Ce(),Ee(),Se()]}),(()=>{if(A)return r("div",{"data-testid":"custom-cta",children:A(S,Q)})})()]}))})),rf=$(Uo)`
    display: flex;
    align-items: center;
    gap: ${bo["spacing-8"]};
    width: 100%;
    padding: ${e=>e.$readOnly?`0 ${bo["spacing-16"]}`:bo["spacing-16"]};

    ${e=>"small"===e.$variant?C`
                  ${go["body-md-regular"]}
                  height: calc(2.5rem - 2px); // exclude top and bottom borders
              `:C`
                  ${go["body-baseline-regular"]}
                  height: calc(3rem - 2px);
              `}

    &:disabled {
        cursor: not-allowed;
    }

    &:focus-visible {
        outline: 2px solid ${uo["focus-ring"]};
        outline-offset: -2px;
    }
`,tf=$.div`
    display: flex;
    align-items: center;
    transform: rotate(${e=>e.$expanded?180:0}deg);
    transition: transform ${mo["duration-250"]} ${mo["ease-default"]};

    svg {
        color: ${uo.icon};
        height: 1em;
        width: 1em;
    }
`;v(((t,n)=>{var{children:o,disabled:i,expanded:a,listboxId:s,popupRole:l,readOnly:d,variant:c}=t,u=ae(t,["children","disabled","expanded","listboxId","popupRole","readOnly","variant"]);return e(rf,Object.assign({ref:n,type:"button",role:"combobox","aria-expanded":a,"aria-haspopup":l,"aria-controls":a?s:void 0,"data-testid":"selector","aria-disabled":i,"aria-readonly":d,$variant:c,$readOnly:d},u,{children:[o,!d&&r(tf,{$expanded:a,$variant:c,children:r(D,{"aria-hidden":!0})})]}))})),$.li`
    display: ${e=>e.$visible?"flex":"none"};
`,$.div`
    flex: 1;
    display: flex;
    align-items: flex-start;
    gap: ${bo["spacing-8"]};
    padding: ${bo["spacing-12"]} ${bo["spacing-8"]};
    cursor: ${e=>e.$toggleable?"default":"pointer"};
    overflow: hidden; // required for label to truncate properly
    border-radius: ${fo.none};
    outline: none;

    ${e=>e.$active&&C`
            background: ${uo["bg-hover"]};
        `}
`,$.div`
    height: 1px;
    width: calc((1lh + ${bo["spacing-8"]}) * ${e=>e.$level});
`,$.div`
    width: 1lh;
    height: 1lh;
    color: ${uo["icon-primary"]};
    cursor: pointer;

    svg {
        width: 1lh;
        height: 1lh;
        transition: transform ${mo["duration-350"]}
            ${mo["ease-standard"]};

        ${e=>{if(e.$expanded)return C`
                    transform: rotate(90deg);
                `}}
    }
`,$.div`
    width: 1lh;
    height: 1lh;
    margin-right: ${bo["spacing-8"]};
`,$.div`
    flex-shrink: 0;
    height: 1lh;
    width: ${e=>e.$hasNestedSiblings?"1lh":bo["spacing-16"]};

    display: flex;
    justify-content: center;
`,$(ie)`
    flex-shrink: 0;
    height: 1lh;
    width: 1lh;
    color: ${uo["icon-selected"]};
`;const nf=$(Yo)`
    height: 3rem;
    gap: ${bo["spacing-8"]};
    // space for clear icon
    padding-right: calc(1.25rem + ${bo["spacing-20"]});
`,of=t=>{var{id:n,disabled:o=!1,error:i,value:l,format:d="12hr",readOnly:c,onChange:u,onFocus:m,onBlur:f,alignment:p="left",dropdownZIndex:y,startLimit:v,endLimit:x,initialScrollStartTime:w,initialScrollEndTime:F,interval:$=15,dropdownRootNode:C,"aria-labelledby":E,"aria-describedby":S,"aria-invalid":D}=t,k=ae(t,["id","disabled","error","value","format","readOnly","onChange","onFocus","onBlur","alignment","dropdownZIndex","startLimit","endLimit","initialScrollStartTime","initialScrollEndTime","interval","dropdownRootNode","aria-labelledby","aria-describedby","aria-invalid"]);const[B]=s((()=>Di.generate())),[T,A]=s(null),[z,I]=s(!1),[O,M]=s(""),[H,L]=s(""),[R,j]=s(""),[_,W]=s(""),[N,P]=s(""),Y=a(null),V=a(null),U=a(null),Z=`${B}-listbox`,G=`${B}-start-label`,q=`${B}-end-label`,X=`${B}-error-message`,K=b((()=>Qo.generateTimings($,d,v,x)),[$,d,v,x]),J=b((()=>{if(""===_)return K;const e=Qo.findClosestFlooredTime(_,K);return e?K.slice(K.indexOf(e)):[]}),[K,_]),Q=h((e=>Qo.parseInput(e,d)),[d]),ee=b((()=>{var e;return null!==(e=Q(w))&&void 0!==e?e:""}),[w,Q]),re=b((()=>{var e;return null!==(e=Q(F))&&void 0!==e?e:""}),[F,Q]);g((()=>{var e,r;if(l){const t=null!==(e=Q(l.start))&&void 0!==e?e:"",n=null!==(r=Q(l.end))&&void 0!==r?r:"";L(t),j(n),W(t),P(n)}}),[l,Q]),g((()=>{if(i)return void I(!1);const e=Q(H),r=Q(R);if(void 0===e)M("Invalid start time");else if(void 0===r)M("Invalid end time");else{if(!(""!==e&&""!==r&&Qo.to24Hour(r)<Qo.to24Hour(e)))return M(""),void(document.activeElement!==V.current&&document.activeElement!==U.current||I(!0));M("End time must be after start time")}I(!1)}),[H,R,Q,i]);const te=()=>"start"===T?"Selecting for: Start time":"end"===T?"Selecting for: End time":void 0,ne=e=>Da(E,"start"===e?G:q),oe=()=>Da(S,!i&&O?X:void 0),ie=e=>{o||c||(T||z||null==m||m(),A(e),I(!0))},se=e=>{var r;o||c||(A(e),I(!0),null===(r=("start"===e?V:U).current)||void 0===r||r.select())};function le(e){var r;switch(e.code){case"Enter":"start"===T?de(H):"end"===T&&(z&&ce(R),null===(r=U.current)||void 0===r||r.blur());break;case"Tab":ue(H,R,{})}}const de=e=>{ue(e,R,{goToNextInput:!0})},ce=e=>{ue(H,e,{triggerOnBlur:!0})},ue=(e,r,{goToNextInput:t,triggerOnBlur:n})=>{var o,i,a;const s=null!==(o=Q(e))&&void 0!==o?o:_,l=null!==(i=Q(r))&&void 0!==i?i:N;L(s),j(l);s===_&&l===N||null==u||u({start:s,end:l}),t&&void 0!==Q(e)&&(A("end"),null===(a=U.current)||void 0===a||a.select()),n&&(A(null),I(!1),null==f||f()),W(s),P(l)},ge=e=>{e.stopPropagation(),L(""),j(""),W(""),P("");null==u||u({start:"",end:""}),A(null),I(!1)},me=e=>{var r,t;const n=e.relatedTarget,o=(null===(r=null==n?void 0:n.matches)||void 0===r?void 0:r.call(n,"[data-floating-ui-focusable]"))||(null===(t=null==n?void 0:n.matches)||void 0===t?void 0:t.call(n,"[data-floating-ui-focus-guard]")),i=Y.current&&Y.current.contains(n);T&&!z&&!i&&!o&&ue(H,R,{triggerOnBlur:!0})},he=()=>{if(!c&&!o&&((null==H?void 0:H.length)>0||(null==R?void 0:R.length)>0))return r(sl,{onClick:ge,type:"button","aria-label":"Clear",children:r(al,{"aria-hidden":!0})})};return e(Zo,Object.assign({id:n},k,{children:[r(Tb,{children:r(el,{enabled:!c&&!o,isOpen:z,renderElement:()=>e(nf,{ref:Y,$disabled:o,$error:i||!!O,$readOnly:c,onBlur:me,role:"group",children:[r(Ea,{id:G,children:"Start time"}),r(Ea,{id:q,children:"End time"}),e(Lo,{error:i||!!O,currentActive:null===T?"none":T,children:[r(qo,{ref:V,onFocus:()=>ie("start"),placeholder:"start"===T?"hh:mm":"From",onChange:e=>L(e.target.value),value:H,readOnly:c,"data-testid":k["data-testid"]?`${k["data-testid"]}-timepicker-selector-start`:"timepicker-selector-start",onClick:()=>se("start"),onKeyDown:le,autoComplete:"off",type:"text",role:"combobox","aria-labelledby":ne("start"),"aria-describedby":oe(),"aria-expanded":z&&"start"===T,"aria-controls":Z,"aria-autocomplete":"list","aria-invalid":i||D||!!O,"aria-disabled":o,"aria-readonly":c}),r(qo,{ref:U,onFocus:()=>ie("end"),placeholder:"end"===T?"hh:mm":"To",onChange:e=>j(e.target.value),value:R,readOnly:c,"data-testid":k["data-testid"]?`${k["data-testid"]}-timepicker-selector-end`:"timepicker-selector-end",onClick:()=>se("end"),onKeyDown:le,autoComplete:"off",type:"text",role:"combobox","aria-labelledby":ne("end"),"aria-describedby":oe(),"aria-expanded":z&&"end"===T,"aria-controls":Z,"aria-autocomplete":"list","aria-invalid":i||D||!!O||void 0,"aria-disabled":o||void 0,"aria-readonly":c||void 0})]}),he()]}),renderDropdown:()=>{if("start"===T){const e=Q(H)||ee;return r(ef,{listItems:K,onSelectItem:de,selectedItems:[H],topScrollItem:Qo.findClosestFlooredTime(e,K),listboxId:Z,ariaLabel:te(),disableItemFocus:!0,matchElementWidth:!0})}{const e=Q(R)||re;return r(ef,{listItems:J,onSelectItem:ce,selectedItems:[R],topScrollItem:Qo.findClosestFlooredTime(e,J),listboxId:Z,ariaLabel:te(),disableItemFocus:!0,matchElementWidth:!0})}},onClose:e=>{"outside-press"===e?(A(null),I(!1),null==f||f()):ue(H,R,{triggerOnBlur:!0})},onDismiss:()=>{var e;null===(e=("start"===T?V:U).current)||void 0===e||e.focus(),I(!1)},offset:8,alignment:p,fitAvailableHeight:!0,customZIndex:y,rootNode:C})}),!i&&O&&e(nl,{children:[r(tl,{"aria-hidden":!0}),r(ol,{id:X,tabIndex:0,"data-testid":n?`${n}-error-message`:"error-message",children:O})]})]}))},af=e=>{var{variant:t="dial"}=e,n=ae(e,["variant"]);return r("combobox"===t?of:rl,Object.assign({},n))};export{af as TimeRangePicker};
//# sourceMappingURL=index.js.map
