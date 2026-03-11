import{jsxs as e,jsx as r,Fragment as t}from"react/jsx-runtime";import*as n from"react";import o,{version as i,useRef as a,useState as s,isValidElement as l,createRef as d,cloneElement as c,PureComponent as u,useEffect as g,useLayoutEffect as h,useCallback as m,useMemo as b,createContext as f,useContext as p,createElement as y,forwardRef as v,useImperativeHandle as x}from"react";import{ArrowRightIcon as w,ChevronDownIcon as $}from"@lifesg/react-icons";import F,{css as C,keyframes as E,ThemeContext as S}from"styled-components";import{ChevronDownIcon as D}from"@lifesg/react-icons/chevron-down";import{ChevronUpIcon as k}from"@lifesg/react-icons/chevron-up";import{ArrowRightIcon as B}from"@lifesg/react-icons/arrow-right";import{ExclamationCircleFillIcon as T}from"@lifesg/react-icons/exclamation-circle-fill";import{ExclamationTriangleFillIcon as z}from"@lifesg/react-icons/exclamation-triangle-fill";import{ICircleFillIcon as I}from"@lifesg/react-icons/i-circle-fill";import{TickCircleFillIcon as A}from"@lifesg/react-icons/tick-circle-fill";import O,{findDOMNode as M}from"react-dom";import{ExternalIcon as H}from"@lifesg/react-icons/external";import{CircleIcon as R}from"@lifesg/react-icons/circle";import{CircleDotIcon as L}from"@lifesg/react-icons/circle-dot";import{CrossIcon as j}from"@lifesg/react-icons/cross";import{SquareIcon as _}from"@lifesg/react-icons/square";import{SquareTickFillIcon as W}from"@lifesg/react-icons/square-tick-fill";import{TickIcon as N}from"@lifesg/react-icons/tick";import{useFloatingTree as P,useFloating as Y,autoUpdate as V,offset as U,flip as Z,shift as G,limitShift as q,size as X,useTransitionStyles as K,useClick as J,useDismiss as Q,useInteractions as ee,FloatingPortal as re,FloatingFocusManager as te}from"@floating-ui/react";import{SquareFillIcon as ne}from"@lifesg/react-icons/square-fill";import{MagnifierIcon as oe}from"@lifesg/react-icons/magnifier";import"@lifesg/react-icons/caret-right";import{MinusSquareFillIcon as ie}from"@lifesg/react-icons/minus-square-fill";function ae(e,r){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(n=Object.getOwnPropertySymbols(e);o<n.length;o++)r.indexOf(n[o])<0&&Object.prototype.propertyIsEnumerable.call(e,n[o])&&(t[n[o]]=e[n[o]])}return t}"function"==typeof SuppressedError&&SuppressedError;var se="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};function le(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var de=Array.isArray,ce="object"==typeof se&&se&&se.Object===Object&&se,ue=ce,ge="object"==typeof self&&self&&self.Object===Object&&self,he=ue||ge||Function("return this")(),me=he.Symbol,be=me,fe=Object.prototype,pe=fe.hasOwnProperty,ye=fe.toString,ve=be?be.toStringTag:void 0;var xe=function(e){var r=pe.call(e,ve),t=e[ve];try{e[ve]=void 0;var n=!0}catch(e){}var o=ye.call(e);return n&&(r?e[ve]=t:delete e[ve]),o},we=Object.prototype.toString;var $e=xe,Fe=function(e){return we.call(e)},Ce=me?me.toStringTag:void 0;var Ee=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":Ce&&Ce in Object(e)?$e(e):Fe(e)};var Se=function(e){return null!=e&&"object"==typeof e},De=Ee,ke=Se;var Be=function(e){return"symbol"==typeof e||ke(e)&&"[object Symbol]"==De(e)},Te=de,ze=Be,Ie=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,Ae=/^\w*$/;var Oe=function(e,r){if(Te(e))return!1;var t=typeof e;return!("number"!=t&&"symbol"!=t&&"boolean"!=t&&null!=e&&!ze(e))||(Ae.test(e)||!Ie.test(e)||null!=r&&e in Object(r))};var Me=function(e){var r=typeof e;return null!=e&&("object"==r||"function"==r)},He=Ee,Re=Me;var Le,je=function(e){if(!Re(e))return!1;var r=He(e);return"[object Function]"==r||"[object GeneratorFunction]"==r||"[object AsyncFunction]"==r||"[object Proxy]"==r},_e=he["__core-js_shared__"],We=(Le=/[^.]+$/.exec(_e&&_e.keys&&_e.keys.IE_PROTO||""))?"Symbol(src)_1."+Le:"";var Ne=function(e){return!!We&&We in e},Pe=Function.prototype.toString;var Ye=function(e){if(null!=e){try{return Pe.call(e)}catch(e){}try{return e+""}catch(e){}}return""},Ve=je,Ue=Ne,Ze=Me,Ge=Ye,qe=/^\[object .+?Constructor\]$/,Xe=Function.prototype,Ke=Object.prototype,Je=Xe.toString,Qe=Ke.hasOwnProperty,er=RegExp("^"+Je.call(Qe).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");var rr=function(e,r){return null==e?void 0:e[r]},tr=function(e){return!(!Ze(e)||Ue(e))&&(Ve(e)?er:qe).test(Ge(e))},nr=rr;var or=function(e,r){var t=nr(e,r);return tr(t)?t:void 0},ir=or(Object,"create"),ar=ir;var sr=function(){this.__data__=ar?ar(null):{},this.size=0};var lr=function(e){var r=this.has(e)&&delete this.__data__[e];return this.size-=r?1:0,r},dr=ir,cr=Object.prototype.hasOwnProperty;var ur=function(e){var r=this.__data__;if(dr){var t=r[e];return"__lodash_hash_undefined__"===t?void 0:t}return cr.call(r,e)?r[e]:void 0},gr=ir,hr=Object.prototype.hasOwnProperty;var mr=function(e){var r=this.__data__;return gr?void 0!==r[e]:hr.call(r,e)},br=ir;var fr=function(e,r){var t=this.__data__;return this.size+=this.has(e)?0:1,t[e]=br&&void 0===r?"__lodash_hash_undefined__":r,this},pr=sr,yr=lr,vr=ur,xr=mr,wr=fr;function $r(e){var r=-1,t=null==e?0:e.length;for(this.clear();++r<t;){var n=e[r];this.set(n[0],n[1])}}$r.prototype.clear=pr,$r.prototype.delete=yr,$r.prototype.get=vr,$r.prototype.has=xr,$r.prototype.set=wr;var Fr=$r;var Cr=function(){this.__data__=[],this.size=0};var Er=function(e,r){return e===r||e!=e&&r!=r},Sr=Er;var Dr=function(e,r){for(var t=e.length;t--;)if(Sr(e[t][0],r))return t;return-1},kr=Dr,Br=Array.prototype.splice;var Tr=function(e){var r=this.__data__,t=kr(r,e);return!(t<0)&&(t==r.length-1?r.pop():Br.call(r,t,1),--this.size,!0)},zr=Dr;var Ir=function(e){var r=this.__data__,t=zr(r,e);return t<0?void 0:r[t][1]},Ar=Dr;var Or=function(e){return Ar(this.__data__,e)>-1},Mr=Dr;var Hr=function(e,r){var t=this.__data__,n=Mr(t,e);return n<0?(++this.size,t.push([e,r])):t[n][1]=r,this},Rr=Cr,Lr=Tr,jr=Ir,_r=Or,Wr=Hr;function Nr(e){var r=-1,t=null==e?0:e.length;for(this.clear();++r<t;){var n=e[r];this.set(n[0],n[1])}}Nr.prototype.clear=Rr,Nr.prototype.delete=Lr,Nr.prototype.get=jr,Nr.prototype.has=_r,Nr.prototype.set=Wr;var Pr=Nr,Yr=or(he,"Map"),Vr=Fr,Ur=Pr,Zr=Yr;var Gr=function(e){var r=typeof e;return"string"==r||"number"==r||"symbol"==r||"boolean"==r?"__proto__"!==e:null===e};var qr=function(e,r){var t=e.__data__;return Gr(r)?t["string"==typeof r?"string":"hash"]:t.map},Xr=qr;var Kr=function(e){var r=Xr(this,e).delete(e);return this.size-=r?1:0,r},Jr=qr;var Qr=function(e){return Jr(this,e).get(e)},et=qr;var rt=function(e){return et(this,e).has(e)},tt=qr;var nt=function(e,r){var t=tt(this,e),n=t.size;return t.set(e,r),this.size+=t.size==n?0:1,this},ot=function(){this.size=0,this.__data__={hash:new Vr,map:new(Zr||Ur),string:new Vr}},it=Kr,at=Qr,st=rt,lt=nt;function dt(e){var r=-1,t=null==e?0:e.length;for(this.clear();++r<t;){var n=e[r];this.set(n[0],n[1])}}dt.prototype.clear=ot,dt.prototype.delete=it,dt.prototype.get=at,dt.prototype.has=st,dt.prototype.set=lt;var ct=dt,ut=ct;function gt(e,r){if("function"!=typeof e||null!=r&&"function"!=typeof r)throw new TypeError("Expected a function");var t=function(){var n=arguments,o=r?r.apply(this,n):n[0],i=t.cache;if(i.has(o))return i.get(o);var a=e.apply(this,n);return t.cache=i.set(o,a)||i,a};return t.cache=new(gt.Cache||ut),t}gt.Cache=ut;var ht=gt;var mt=function(e){var r=ht(e,(function(e){return 500===t.size&&t.clear(),e})),t=r.cache;return r},bt=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,ft=/\\(\\)?/g,pt=mt((function(e){var r=[];return 46===e.charCodeAt(0)&&r.push(""),e.replace(bt,(function(e,t,n,o){r.push(n?o.replace(ft,"$1"):t||e)})),r}));var yt=function(e,r){for(var t=-1,n=null==e?0:e.length,o=Array(n);++t<n;)o[t]=r(e[t],t,e);return o},vt=de,xt=Be,wt=me?me.prototype:void 0,$t=wt?wt.toString:void 0;var Ft=function e(r){if("string"==typeof r)return r;if(vt(r))return yt(r,e)+"";if(xt(r))return $t?$t.call(r):"";var t=r+"";return"0"==t&&1/r==-1/0?"-0":t},Ct=Ft;var Et=de,St=Oe,Dt=pt,kt=function(e){return null==e?"":Ct(e)};var Bt=function(e,r){return Et(e)?e:St(e,r)?[e]:Dt(kt(e))},Tt=Be;var zt=function(e){if("string"==typeof e||Tt(e))return e;var r=e+"";return"0"==r&&1/e==-1/0?"-0":r},It=Bt,At=zt;var Ot=function(e,r){for(var t=0,n=(r=It(r,e)).length;null!=e&&t<n;)e=e[At(r[t++])];return t&&t==n?e:void 0},Mt=Ot;var Ht=function(e,r,t){var n=null==e?void 0:Mt(e,r);return void 0===n?t:n},Rt=le(Ht);const Lt=(e,r,t)=>Rt(t,r)||Rt(e,r),jt=(e,r)=>{const t=r||e.defaultValue;return Rt(e.collections,t)},_t={collections:{default:{"width-005":.5,"width-010":1,"width-020":2,"width-040":4,solid:"solid"}},defaultValue:"default"},Wt=e=>r=>{var t;const n=r.theme,o=jt(_t,null==n?void 0:n.borderScheme);return(null===(t=null==n?void 0:n.overrides)||void 0===t?void 0:t.border)?`${Lt(o,e,n.overrides.border)}px`:`${o[e]}px`},Nt={"width-005":Wt("width-005"),"width-010":Wt("width-010"),"width-020":Wt("width-020"),"width-040":Wt("width-040"),solid:(Pt="solid",e=>{var r;const t=e.theme,n=jt(_t,null==t?void 0:t.borderScheme),o=(null===(r=null==t?void 0:t.overrides)||void 0===r?void 0:r.border)?Lt(n,Pt,t.overrides.border):n[Pt];return"function"==typeof o?o(e):o})};var Pt;const Yt={"brand-10":"#2C0C0B","brand-20":"#4C1513","brand-30":"#6C1D1B","brand-40":"#922825","brand-50":"#BF3431","brand-60":"#F15D5A","brand-70":"#F69491","brand-80":"#FABAB7","brand-90":"#FCD7D2","brand-95":"#FFEBE7","brand-100":"#FFF6F4","primary-10":"#1A122C","primary-20":"#2F1F4D","primary-30":"#422D6E","primary-40":"#5B3D97","primary-50":"#7654BC","primary-60":"#9A82CD","primary-70":"#B7A7D8","primary-80":"#CFC5E5","primary-90":"#E3DDF0","primary-95":"#F0EDF7","primary-100":"#F9F8FC","secondary-10":"#0E1723","secondary-20":"#18293D","secondary-30":"#233A57","secondary-40":"#305078","secondary-50":"#4B6A8F","secondary-60":"#7B91A9","secondary-70":"#A1B1C3","secondary-80":"#C1CBD7","secondary-90":"#DBE1E8","secondary-95":"#EBEFF2","secondary-100":"#F7F8FA","neutral-10":"#161616","neutral-20":"#282828","neutral-30":"#393939","neutral-40":"#4E4E4E","neutral-50":"#686868","neutral-60":"#8E8E8E","neutral-70":"#AFAFB0","neutral-80":"#C7CACA","neutral-90":"#DDE1E2","neutral-95":"#EDEFEF","neutral-100":"#F9F9F9","success-10":"#081A0F","success-20":"#0E2D1B","success-30":"#154126","success-40":"#1C5A34","success-50":"#257645","success-60":"#44A068","success-70":"#64C189","success-80":"#80DCA5","success-90":"#B4ECCB","success-95":"#D5F6E2","success-100":"#EFFCF4","warning-10":"#221302","warning-20":"#3B2204","warning-30":"#543106","warning-40":"#744408","warning-50":"#98590C","warning-60":"#D07A13","warning-70":"#E4A244","warning-80":"#F5C26C","warning-90":"#FADBA6","warning-95":"#FCECD4","warning-100":"#FDF7F0","error-10":"#330505","error-20":"#550808","error-30":"#750C0C","error-40":"#9E130F","error-50":"#CB2213","error-60":"#DE6C6C","error-70":"#E89B9B","error-80":"#EFBEBE","error-90":"#F5D9D9","error-95":"#F9ECEC","error-100":"#FCF7F7","info-10":"#021824","info-20":"#032B3F","info-30":"#053D59","info-40":"#06547B","info-50":"#176E9B","info-60":"#5296BE","info-70":"#82B5DA","info-80":"#ACCFE7","info-90":"#CCE3F1","info-95":"#E3F1F8","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000","primary-inverse":"#FEAB10"},Vt={"brand-10":"#1F1221","brand-20":"#371F3B","brand-30":"#4E2C53","brand-40":"#6B3E73","brand-50":"#8D5197","brand-60":"#FF3399","brand-70":"#FF88C4","brand-80":"#FFB3D9","brand-90":"#FFD4E9","brand-95":"#FFE8F3","brand-100":"#FFF8FC","primary-10":"#1F1221","primary-20":"#371F3B","primary-30":"#4E2C53","primary-40":"#6B3E73","primary-50":"#8D5197","primary-60":"#B07DB7","primary-70":"#C7A3CC","primary-80":"#D9C2DD","primary-90":"#E9DBEB","primary-95":"#F3ECF4","primary-100":"#FAF7FA","secondary-10":"#2D091B","secondary-20":"#4D0F2E","secondary-30":"#6B1540","secondary-40":"#931D58","secondary-50":"#C02673","secondary-60":"#FF409F","secondary-70":"#FF88C4","secondary-80":"#FFB3D9","secondary-90":"#FFD4E9","secondary-95":"#FFE8F3","secondary-100":"#FFF8FC","neutral-10":"#161616","neutral-20":"#282828","neutral-30":"#393939","neutral-40":"#4E4E4E","neutral-50":"#686868","neutral-60":"#8E8E8E","neutral-70":"#AFAFB0","neutral-80":"#C7CACA","neutral-90":"#DDE1E2","neutral-95":"#EDEFEF","neutral-100":"#F9F9F9","success-10":"#081A0F","success-20":"#0E2D1B","success-30":"#154126","success-40":"#1C5A34","success-50":"#257645","success-60":"#44A068","success-70":"#64C189","success-80":"#80DCA5","success-90":"#B4ECCB","success-95":"#D5F6E2","success-100":"#EFFCF4","warning-10":"#221302","warning-20":"#3B2204","warning-30":"#543106","warning-40":"#744408","warning-50":"#98590C","warning-60":"#D07A13","warning-70":"#E4A244","warning-80":"#F5C26C","warning-90":"#FADBA6","warning-95":"#FCECD4","warning-100":"#FDF7F0","error-10":"#330505","error-20":"#550808","error-30":"#750C0C","error-40":"#9E130F","error-50":"#CB2213","error-60":"#DE6C6C","error-70":"#E89B9B","error-80":"#EFBEBE","error-90":"#F5D9D9","error-95":"#F9ECEC","error-100":"#FCF7F7","info-10":"#021824","info-20":"#032B3F","info-30":"#053D59","info-40":"#06547B","info-50":"#176E9B","info-60":"#5296BE","info-70":"#82B5DA","info-80":"#ACCFE7","info-90":"#CCE3F1","info-95":"#E3F1F8","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000","primary-inverse":"#FEAB10"},Ut={"brand-10":"#2C0C0B","brand-20":"#4C1513","brand-30":"#6C1D1B","brand-40":"#922825","brand-50":"#BF3431","brand-60":"#F15D5A","brand-70":"#F69491","brand-80":"#FABAB7","brand-90":"#FCD7D2","brand-95":"#FFEBE7","brand-100":"#FFF6F4","primary-10":"#001731","primary-20":"#002752","primary-30":"#003874","primary-40":"#004D9F","primary-50":"#1768BE","primary-60":"#3C91EC","primary-70":"#6CB4FF","primary-80":"#A5CDFF","primary-90":"#CFE1FE","primary-95":"#E8F0FE","primary-100":"#F7F9FF","secondary-10":"#131529","secondary-20":"#222547","secondary-30":"#2F3565","secondary-40":"#42498B","secondary-50":"#5B62A7","secondary-60":"#858CBD","secondary-70":"#A8ADCF","secondary-80":"#C6C9E0","secondary-90":"#DDDFEC","secondary-95":"#EDEEF5","secondary-100":"#F8F8FB","neutral-10":"#161616","neutral-20":"#282828","neutral-30":"#393939","neutral-40":"#4E4E4E","neutral-50":"#686868","neutral-60":"#8E8E8E","neutral-70":"#AFAFB0","neutral-80":"#C7CACA","neutral-90":"#DDE1E2","neutral-95":"#EDEFEF","neutral-100":"#F9F9F9","success-10":"#081A0F","success-20":"#0E2D1B","success-30":"#154126","success-40":"#1C5A34","success-50":"#257645","success-60":"#44A068","success-70":"#64C189","success-80":"#80DCA5","success-90":"#B4ECCB","success-95":"#D5F6E2","success-100":"#EFFCF4","warning-10":"#221302","warning-20":"#3B2204","warning-30":"#543106","warning-40":"#744408","warning-50":"#98590C","warning-60":"#D07A13","warning-70":"#E4A244","warning-80":"#F5C26C","warning-90":"#FADBA6","warning-95":"#FCECD4","warning-100":"#FDF7F0","error-10":"#330505","error-20":"#550808","error-30":"#750C0C","error-40":"#9E130F","error-50":"#CB2213","error-60":"#DE6C6C","error-70":"#E89B9B","error-80":"#EFBEBE","error-90":"#F5D9D9","error-95":"#F9ECEC","error-100":"#FCF7F7","info-10":"#021824","info-20":"#032B3F","info-30":"#053D59","info-40":"#06547B","info-50":"#176E9B","info-60":"#5296BE","info-70":"#82B5DA","info-80":"#ACCFE7","info-90":"#CCE3F1","info-95":"#E3F1F8","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000","primary-inverse":"#FEAB10"},Zt={"brand-10":"#2C0C0B","brand-20":"#4C1513","brand-30":"#6C1D1B","brand-40":"#922825","brand-50":"#BF3431","brand-60":"#F15D5A","brand-70":"#F69491","brand-80":"#FABAB7","brand-90":"#FCD7D2","brand-95":"#FFEBE7","brand-100":"#FFF6F4","primary-10":"#0011924","primary-20":"#032B40","primary-30":"#043D5A","primary-40":"#05547B","primary-50":"#096EA1","primary-60":"#2098D3","primary-70":"#5CB9E8","primary-80":"#8BD3F6","primary-90":"#BEE6FA","primary-95":"#E2F2FA","primary-100":"#F4FAFC","secondary-10":"#131529","secondary-20":"#222547","secondary-30":"#2F3565","secondary-40":"#42498B","secondary-50":"#5B62A7","secondary-60":"#858CBD","secondary-70":"#A8ADCF","secondary-80":"#C6C9E0","secondary-90":"#DDDFEC","secondary-95":"#EDEEF5","secondary-100":"#F8F8FB","neutral-10":"#161616","neutral-20":"#282828","neutral-30":"#393939","neutral-40":"#4E4E4E","neutral-50":"#686868","neutral-60":"#8E8E8E","neutral-70":"#AFAFB0","neutral-80":"#C7CACA","neutral-90":"#DDE1E2","neutral-95":"#EDEFEF","neutral-100":"#F9F9F9","success-10":"#081A0F","success-20":"#0E2D1B","success-30":"#154126","success-40":"#1C5A34","success-50":"#257645","success-60":"#44A068","success-70":"#64C189","success-80":"#80DCA5","success-90":"#B4ECCB","success-95":"#D5F6E2","success-100":"#EFFCF4","warning-10":"#221302","warning-20":"#3B2204","warning-30":"#543106","warning-40":"#744408","warning-50":"#98590C","warning-60":"#D07A13","warning-70":"#E4A244","warning-80":"#F5C26C","warning-90":"#FADBA6","warning-95":"#FCECD4","warning-100":"#FDF7F0","error-10":"#330505","error-20":"#550808","error-30":"#750C0C","error-40":"#9E130F","error-50":"#CB2213","error-60":"#DE6C6C","error-70":"#E89B9B","error-80":"#EFBEBE","error-90":"#F5D9D9","error-95":"#F9ECEC","error-100":"#FCF7F7","info-10":"#021824","info-20":"#032B3F","info-30":"#053D59","info-40":"#06547B","info-50":"#176E9B","info-60":"#5296BE","info-70":"#82B5DA","info-80":"#ACCFE7","info-90":"#CCE3F1","info-95":"#E3F1F8","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000","primary-inverse":"#FEAB10"},Gt={"brand-10":"#001A19","brand-20":"#002D2B","brand-30":"#00413D","brand-40":"#005954","brand-50":"#00756F","brand-60":"#03A098","brand-70":"#55BFBA","brand-80":"#92D6D2","brand-90":"#BFE7E5","brand-95":"#DDF2F1","brand-100":"#F4FBFA","primary-10":"#09191D","primary-20":"#102B34","primary-30":"#173D49","primary-40":"#205666","primary-50":"#2A7086","primary-60":"#5D97A9","primary-70":"#8CB6C2","primary-80":"#B2CED6","primary-90":"#D1E2E7","primary-95":"#E8F0F3","primary-100":"#F7FAFB","secondary-10":"#001731","secondary-20":"#002752","secondary-30":"#003874","secondary-40":"#004D9F","secondary-50":"#5B62A7","secondary-60":"#858CBD","secondary-70":"#A8ADCF","secondary-80":"#C6C9E0","secondary-90":"#DDDFEC","secondary-95":"#EDEEF5","secondary-100":"#F8F8FB","neutral-10":"#161616","neutral-20":"#282828","neutral-30":"#393939","neutral-40":"#4E4E4E","neutral-50":"#686868","neutral-60":"#8E8E8E","neutral-70":"#AFAFB0","neutral-80":"#C7CACA","neutral-90":"#DDE1E2","neutral-95":"#EDEFEF","neutral-100":"#F9F9F9","success-10":"#081A0F","success-20":"#0E2D1B","success-30":"#154126","success-40":"#1C5A34","success-50":"#257645","success-60":"#44A068","success-70":"#64C189","success-80":"#80DCA5","success-90":"#B4ECCB","success-95":"#D5F6E2","success-100":"#EFFCF4","warning-10":"#221302","warning-20":"#3B2204","warning-30":"#543106","warning-40":"#744408","warning-50":"#98590C","warning-60":"#D07A13","warning-70":"#E4A244","warning-80":"#F5C26C","warning-90":"#FADBA6","warning-95":"#FCECD4","warning-100":"#FDF7F0","error-10":"#330505","error-20":"#550808","error-30":"#750C0C","error-40":"#9E130F","error-50":"#CB2213","error-60":"#DE6C6C","error-70":"#E89B9B","error-80":"#EFBEBE","error-90":"#F5D9D9","error-95":"#F9ECEC","error-100":"#FCF7F7","info-10":"#021824","info-20":"#032B3F","info-30":"#053D59","info-40":"#06547B","info-50":"#176E9B","info-60":"#5296BE","info-70":"#82B5DA","info-80":"#ACCFE7","info-90":"#CCE3F1","info-95":"#E3F1F8","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000","primary-inverse":"#FEAB10"},qt={"brand-10":"#881317","brand-20":"#B5191E","brand-30":"#B5040A","brand-40":"#D0333F","brand-50":"#DC666F","brand-60":"#E28087","brand-70":"#E7999F","brand-80":"#EDB3B7","brand-90":"#F3CCCF","brand-95":"#F9E6E7","brand-100":"#FCF2F3","primary-10":"#000000","primary-20":"#191919","primary-30":"#333333","primary-40":"#4D4D4D","primary-50":"#666666","primary-60":"#808080","primary-70":"#999999","primary-80":"#B3B3B3","primary-90":"#E6E6E6","primary-95":"#F7F7F7","primary-100":"#FFFFFF","secondary-10":"#19151D","secondary-20":"#2B2533","secondary-30":"#3E3649","secondary-40":"#564A64","secondary-50":"#6F637D","secondary-60":"#948B9F","secondary-70":"#B3ACBB","secondary-80":"#CCC8D2","secondary-90":"#E1DEE4","secondary-95":"#EFEEF1","secondary-100":"#F9F8F9","neutral-10":"#000000","neutral-20":"#191919","neutral-30":"#333333","neutral-40":"#4D4D4D","neutral-50":"#666666","neutral-60":"#808080","neutral-70":"#999999","neutral-80":"#B3B3B3","neutral-90":"#E6E6E6","neutral-95":"#F7F7F7","neutral-100":"#FFFFFF","success-10":"#081A0F","success-20":"#0E2D1B","success-30":"#154126","success-40":"#1C5A34","success-50":"#257645","success-60":"#44A068","success-70":"#64C189","success-80":"#80DCA5","success-90":"#B4ECCB","success-95":"#D5F6E2","success-100":"#EFFCF4","warning-10":"#221302","warning-20":"#3B2204","warning-30":"#543106","warning-40":"#744408","warning-50":"#98590C","warning-60":"#D07A13","warning-70":"#E4A244","warning-80":"#F5C26C","warning-90":"#FADBA6","warning-95":"#FCECD4","warning-100":"#FDF7F0","error-10":"#330505","error-20":"#550808","error-30":"#750C0C","error-40":"#9E130F","error-50":"#CB2213","error-60":"#DE6C6C","error-70":"#E89B9B","error-80":"#EFBEBE","error-90":"#F5D9D9","error-95":"#F9ECEC","error-100":"#FCF7F7","info-10":"#021824","info-20":"#032B3F","info-30":"#053D59","info-40":"#06547B","info-50":"#176E9B","info-60":"#5296BE","info-70":"#82B5DA","info-80":"#ACCFE7","info-90":"#CCE3F1","info-95":"#E3F1F8","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000","primary-inverse":"#FEAB10"},Xt={"brand-10":"#0E123A","brand-20":"#191E65","brand-30":"#232B90","brand-40":"#303BC5","brand-50":"#494CFF","brand-60":"#AD6EFF","brand-70":"#AEA4FF","brand-80":"#C5C4FF","brand-90":"#DDDCFF","brand-95":"#EDECFF","brand-100":"#F8F8FF","primary-10":"#10152B","primary-20":"#1C254B","primary-30":"#28356C","primary-40":"#38489A","primary-50":"#4D5AD7","primary-60":"#7487F2","primary-70":"#9AAAFC","primary-80":"#BDC7FD","primary-90":"#DADFFB","primary-95":"#ECEEFE","primary-100":"#F7F8FF","secondary-10":"#19151D","secondary-20":"#2B2533","secondary-30":"#3E3649","secondary-40":"#564A64","secondary-50":"#6F637D","secondary-60":"#948B9F","secondary-70":"#B3ACBB","secondary-80":"#CCC8D2","secondary-90":"#E1DEE4","secondary-95":"#EFEEF1","secondary-100":"#F9F8F9","neutral-10":"#161616","neutral-20":"#282828","neutral-30":"#393939","neutral-40":"#4E4E4E","neutral-50":"#686868","neutral-60":"#8E8E8E","neutral-70":"#AFAFB0","neutral-80":"#C7CACA","neutral-90":"#DDE1E2","neutral-95":"#EDEFEF","neutral-100":"#F9F9F9","success-10":"#081A0F","success-20":"#0E2D1B","success-30":"#154126","success-40":"#1C5A34","success-50":"#257645","success-60":"#44A068","success-70":"#64C189","success-80":"#80DCA5","success-90":"#B4ECCB","success-95":"#D5F6E2","success-100":"#EFFCF4","warning-10":"#221302","warning-20":"#3B2204","warning-30":"#543106","warning-40":"#744408","warning-50":"#98590C","warning-60":"#D07A13","warning-70":"#E4A244","warning-80":"#F5C26C","warning-90":"#FADBA6","warning-95":"#FCECD4","warning-100":"#FDF7F0","error-10":"#330505","error-20":"#550808","error-30":"#750C0C","error-40":"#9E130F","error-50":"#CB2213","error-60":"#DE6C6C","error-70":"#E89B9B","error-80":"#EFBEBE","error-90":"#F5D9D9","error-95":"#F9ECEC","error-100":"#FCF7F7","info-10":"#021824","info-20":"#032B3F","info-30":"#053D59","info-40":"#06547B","info-50":"#176E9B","info-60":"#5296BE","info-70":"#82B5DA","info-80":"#ACCFE7","info-90":"#CCE3F1","info-95":"#E3F1F8","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000","primary-inverse":"#FEAB10"},Kt={"brand-10":"#170F39","brand-20":"#281C62","brand-30":"#38268B","brand-40":"#4D34BF","brand-50":"#5735DF","brand-60":"#9986F9","brand-70":"#B2A5F8","brand-80":"#CDC2FA","brand-90":"#E2DCFC","brand-95":"#EFEDFE","brand-100":"#FAF8FD","primary-10":"#170F39","primary-20":"#281C62","primary-30":"#38268B","primary-40":"#4D34BF","primary-50":"#5735DF","primary-60":"#9986F9","primary-70":"#B2A5F8","primary-80":"#CDC2FA","primary-90":"#E2DCFC","primary-95":"#EFEDFE","primary-100":"#FAF8FD","secondary-10":"#251204","secondary-20":"#401F08","secondary-30":"#5B2C0B","secondary-40":"#7E3D0F","secondary-50":"#B04900","secondary-60":"#E26E1C","secondary-70":"#FF9445","secondary-80":"#FFBB8E","secondary-90":"#FFD9BF","secondary-95":"#FFECDF","secondary-100":"#FFF8F3","neutral-10":"#161616","neutral-20":"#282828","neutral-30":"#393939","neutral-40":"#4E4E4E","neutral-50":"#686868","neutral-60":"#8E8E8E","neutral-70":"#AFAFB0","neutral-80":"#C7CACA","neutral-90":"#DDE1E2","neutral-95":"#EDEFEF","neutral-100":"#F9F9F9","success-10":"#031B15","success-20":"#082D24","success-30":"#094134","success-40":"#0D5947","success-50":"#10755E","success-60":"#16A181","success-70":"#1EC59D","success-80":"#6FDDC2","success-90":"#AFECDE","success-95":"#D5F5ED","success-100":"#F1FCF9","warning-10":"#1F1500","warning-20":"#362500","warning-30":"#4D3501","warning-40":"#6A4801","warning-50":"#8B6001","warning-60":"#BF8301","warning-70":"#EAA102","warning-80":"#FFBF34","warning-90":"#FFDC8F","warning-95":"#FFEDC7","warning-100":"#FFF8EA","error-10":"#270F10","error-20":"#441B1B","error-30":"#612627","error-40":"#853535","error-50":"#AF4546","error-60":"#EC6162","error-70":"#F29696","error-80":"#F7BBBC","error-90":"#FAD8D8","error-95":"#FCEAEA","error-100":"#FEF7F7","info-10":"#0F1627","info-20":"#1B2745","info-30":"#273763","info-40":"#354D88","info-50":"#4665B3","info-60":"#618AF6","info-70":"#8DADFF","info-80":"#B4C9FF","info-90":"#D3DFFF","info-95":"#E9EFFF","info-100":"#F5F8FF",white:"#FFFFFF",black:"#000000","primary-inverse":"#FEAB10"},Jt={"brand-10":"#0E113C","brand-20":"#191E67","brand-30":"#232A92","brand-40":"#233FC2","brand-50":"#135CEA","brand-60":"#378FFB","brand-70":"#71B3FD","brand-80":"#9DCFFE","brand-90":"#C1E5FF","brand-95":"#DCF1FF","brand-100":"#F3FAFF","primary-10":"#0E113C","primary-20":"#191E67","primary-30":"#232A92","primary-40":"#233FC2","primary-50":"#135CEA","primary-60":"#378FFB","primary-70":"#71B3FD","primary-80":"#9DCFFE","primary-90":"#C1E5FF","primary-95":"#DCF1FF","primary-100":"#F3FAFF","secondary-10":"#34001F","secondary-20":"#540033","secondary-30":"#730045","secondary-40":"#9D0054","secondary-50":"#C61C64","secondary-60":"#DE6792","secondary-70":"#EB96B6","secondary-80":"#F5BAD2","secondary-90":"#FCD5E3","secondary-95":"#FDEBF1","secondary-100":"#FDF6F9","neutral-10":"#161616","neutral-20":"#282828","neutral-30":"#393939","neutral-40":"#4E4E4E","neutral-50":"#686868","neutral-60":"#8E8E8E","neutral-70":"#AFAFB0","neutral-80":"#C7CACA","neutral-90":"#DDE1E2","neutral-95":"#EDEFEF","neutral-100":"#F9F9F9","success-10":"#081A0F","success-20":"#0E2D1B","success-30":"#154126","success-40":"#1C5A34","success-50":"#257645","success-60":"#44A068","success-70":"#64C189","success-80":"#80DCA5","success-90":"#B4ECCB","success-95":"#D5F6E2","success-100":"#EFFCF4","warning-10":"#221302","warning-20":"#3B2204","warning-30":"#543106","warning-40":"#744408","warning-50":"#98590C","warning-60":"#D07A13","warning-70":"#E4A244","warning-80":"#F5C26C","warning-90":"#FADBA6","warning-95":"#FCECD4","warning-100":"#FDF7F0","error-10":"#330505","error-20":"#550808","error-30":"#750C0C","error-40":"#9E130F","error-50":"#CB2213","error-60":"#DE6C6C","error-70":"#E89B9B","error-80":"#EFBEBE","error-90":"#F5D9D9","error-95":"#F9ECEC","error-100":"#FCF7F7","info-10":"#021824","info-20":"#032B3F","info-30":"#053D59","info-40":"#06547B","info-50":"#176E9B","info-60":"#5296BE","info-70":"#82B5DA","info-80":"#ACCFE7","info-90":"#CCE3F1","info-95":"#E3F1F8","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000","primary-inverse":"#FEAB10"},Qt={"brand-10":"#370009","brand-20":"#4E000D","brand-30":"#640011","brand-40":"#850017","brand-50":"#9B001A","brand-60":"#EF2D4E","brand-70":"#F692A3","brand-80":"#FAB9C4","brand-90":"#FCD7DD","brand-95":"#FDEAED","brand-100":"#FEF8F9","primary-10":"#1F102A","primary-20":"#2F193F","primary-30":"#3E2053","primary-40":"#562D71","primary-50":"#663587","primary-60":"#9370AA","primary-70":"#BCA7CB","primary-80":"#D3C5DC","primary-90":"#E5DDEB","primary-95":"#F2EEF5","primary-100":"#FAF9FB","secondary-10":"#201316","secondary-20":"#311D22","secondary-30":"#3F272C","secondary-40":"#58363D","secondary-50":"#684049","secondary-60":"#AF6A7A","secondary-70":"#F393A8","secondary-80":"#FFB6C6","secondary-90":"#FFD6DF","secondary-95":"#FFE9EE","secondary-100":"#FFF7F9","neutral-10":"#161616","neutral-20":"#222222","neutral-30":"#2D2D2D","neutral-40":"#3F3F3F","neutral-50":"#4B4B4B","neutral-60":"#7E7E7E","neutral-70":"#AFAFB0","neutral-80":"#C7CACA","neutral-90":"#DDE1E2","neutral-95":"#EDEFEF","neutral-100":"#F9F9F9","success-10":"#081917","success-20":"#0D2724","success-30":"#11332E","success-40":"#174740","success-50":"#1B554C","success-60":"#2D8C7E","success-70":"#46C2AF","success-80":"#89D8CC","success-90":"#BCE9E2","success-95":"#DAF3EF","success-100":"#F0FAF9","warning-10":"#241200","warning-20":"#371C00","warning-30":"#482500","warning-40":"#633300","warning-50":"#763C00","warning-60":"#C36400","warning-70":"#FF9524","warning-80":"#FFBD77","warning-90":"#FFD9B2","warning-95":"#FFEBD6","warning-100":"#FFF7F0","error-10":"#330505","error-20":"#4B0707","error-30":"#600909","error-40":"#810D0D","error-50":"#98110F","error-60":"#D7504C","error-70":"#E89B9B","error-80":"#EFBEBE","error-90":"#F5D9D9","error-95":"#F9ECEC","error-100":"#FCF7F7","info-10":"#021824","info-20":"#032537","info-30":"#043148","info-40":"#054462","info-50":"#065175","info-60":"#3985AF","info-70":"#82B5DA","info-80":"#ACCFE7","info-90":"#CCE3F1","info-95":"#E3F1F8","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000","primary-inverse":"#FEAB10"},en={"brand-10":"#00143A","brand-20":"#00205B","brand-30":"#153368","brand-40":"#18417C","brand-50":"#00558C","brand-60":"#009CDE","brand-70":"#5AB9E7","brand-80":"#9ED0ED","brand-90":"#CAE3F4","brand-95":"#E2F0F9","brand-100":"#F4FAFD","primary-10":"#00143A","primary-20":"#00205B","primary-30":"#153368","primary-40":"#18417C","primary-50":"#00558C","primary-60":"#009CDE","primary-70":"#5AB9E7","primary-80":"#9ED0ED","primary-90":"#CAE3F4","primary-95":"#E2F0F9","primary-100":"#F4FAFD","secondary-10":"#10171F","secondary-20":"#1E252C","secondary-30":"#2F353B","secondary-40":"#3D4247","secondary-50":"#4E5255","secondary-60":"#8F9396","secondary-70":"#A9B0B3","secondary-80":"#C7CBCC","secondary-90":"#DDDFE0","secondary-95":"#ECEDEE","secondary-100":"#F8F8F9","neutral-10":"#10171F","neutral-20":"#1E252C","neutral-30":"#2F353B","neutral-40":"#3D4247","neutral-50":"#4E5255","neutral-60":"#8F9396","neutral-70":"#A9B0B3","neutral-80":"#C7CBCC","neutral-90":"#DDDFE0","neutral-95":"#ECEDEE","neutral-100":"#F8F8F9","success-10":"#001B0E","success-20":"#012A16","success-30":"#013D20","success-40":"#014D28","success-50":"#005F30","success-60":"#48A377","success-70":"#77BD9B","success-80":"#A3D5BD","success-90":"#C4E7D6","success-95":"#DBF4E7","success-100":"#ECFDF5","warning-10":"#1F1500","warning-20":"#312100","warning-30":"#473000","warning-40":"#593C00","warning-50":"#6E4B00","warning-60":"#B78C31","warning-70":"#DDA633","warning-80":"#E0C792","warning-90":"#E9DEC5","warning-95":"#F4EEE0","warning-100":"#FAF8F3","error-10":"#360109","error-20":"#50010E","error-30":"#6F0213","error-40":"#88051A","error-50":"#A60A24","error-60":"#E07083","error-70":"#EA98A6","error-80":"#F3BBC4","error-90":"#FAD5DC","error-95":"#FEE9ED","error-100":"#FFF6F8","info-10":"#00143A","info-20":"#00205B","info-30":"#153368","info-40":"#18417C","info-50":"#00558C","info-60":"#009CDE","info-70":"#5AB9E7","info-80":"#9ED0ED","info-90":"#CAE3F4","info-95":"#E2F0F9","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000","primary-inverse":"#FFCB6A"},rn={collections:{lifesg:Ut,bookingsg:Yt,rbs:Xt,mylegacy:Zt,ccube:Vt,oneservice:Gt,pa:qt,a11yplayground:Kt,supportgowhere:Jt,imda:Qt,spf:en},defaultValue:"lifesg"},tn={collections:{lifesg:Ut,bookingsg:Yt,rbs:Xt,mylegacy:Zt,ccube:Vt,oneservice:Gt,pa:qt,a11yplayground:Kt,supportgowhere:Jt,imda:Qt,spf:en},defaultValue:"lifesg"},nn=e=>r=>{var t;const n=r.theme,o="dark"===(null==n?void 0:n.colourMode),i=jt(o?tn:rn,null==n?void 0:n.colourScheme),a=o?"primitiveColourDark":"primitiveColour",s=null===(t=null==n?void 0:n.overrides)||void 0===t?void 0:t[a];return s?Lt(i,e,s):i[e]},on={"brand-10":nn("brand-10"),"brand-20":nn("brand-20"),"brand-30":nn("brand-30"),"brand-40":nn("brand-40"),"brand-50":nn("brand-50"),"brand-60":nn("brand-60"),"brand-70":nn("brand-70"),"brand-80":nn("brand-80"),"brand-90":nn("brand-90"),"brand-95":nn("brand-95"),"brand-100":nn("brand-100"),"primary-10":nn("primary-10"),"primary-20":nn("primary-20"),"primary-30":nn("primary-30"),"primary-40":nn("primary-40"),"primary-50":nn("primary-50"),"primary-60":nn("primary-60"),"primary-70":nn("primary-70"),"primary-80":nn("primary-80"),"primary-90":nn("primary-90"),"primary-95":nn("primary-95"),"primary-100":nn("primary-100"),"secondary-10":nn("secondary-10"),"secondary-20":nn("secondary-20"),"secondary-30":nn("secondary-30"),"secondary-40":nn("secondary-40"),"secondary-50":nn("secondary-50"),"secondary-60":nn("secondary-60"),"secondary-70":nn("secondary-70"),"secondary-80":nn("secondary-80"),"secondary-90":nn("secondary-90"),"secondary-95":nn("secondary-95"),"secondary-100":nn("secondary-100"),"neutral-10":nn("neutral-10"),"neutral-20":nn("neutral-20"),"neutral-30":nn("neutral-30"),"neutral-40":nn("neutral-40"),"neutral-50":nn("neutral-50"),"neutral-60":nn("neutral-60"),"neutral-70":nn("neutral-70"),"neutral-80":nn("neutral-80"),"neutral-90":nn("neutral-90"),"neutral-95":nn("neutral-95"),"neutral-100":nn("neutral-100"),"success-10":nn("success-10"),"success-20":nn("success-20"),"success-30":nn("success-30"),"success-40":nn("success-40"),"success-50":nn("success-50"),"success-60":nn("success-60"),"success-70":nn("success-70"),"success-80":nn("success-80"),"success-90":nn("success-90"),"success-95":nn("success-95"),"success-100":nn("success-100"),"warning-10":nn("warning-10"),"warning-20":nn("warning-20"),"warning-30":nn("warning-30"),"warning-40":nn("warning-40"),"warning-50":nn("warning-50"),"warning-60":nn("warning-60"),"warning-70":nn("warning-70"),"warning-80":nn("warning-80"),"warning-90":nn("warning-90"),"warning-95":nn("warning-95"),"warning-100":nn("warning-100"),"error-10":nn("error-10"),"error-20":nn("error-20"),"error-30":nn("error-30"),"error-40":nn("error-40"),"error-50":nn("error-50"),"error-60":nn("error-60"),"error-70":nn("error-70"),"error-80":nn("error-80"),"error-90":nn("error-90"),"error-95":nn("error-95"),"error-100":nn("error-100"),"info-10":nn("info-10"),"info-20":nn("info-20"),"info-30":nn("info-30"),"info-40":nn("info-40"),"info-50":nn("info-50"),"info-60":nn("info-60"),"info-70":nn("info-70"),"info-80":nn("info-80"),"info-90":nn("info-90"),"info-95":nn("info-95"),"info-100":nn("info-100"),white:nn("white"),black:nn("black"),"primary-inverse":nn("primary-inverse")},an={text:nn("neutral-20"),"text-subtle":nn("neutral-30"),"text-subtler":nn("neutral-50"),"text-subtlest":nn("neutral-60"),"text-primary":nn("primary-50"),"text-primary-strongest":nn("primary-20"),"text-hover":nn("primary-40"),"text-selected":nn("primary-50"),"text-selected-hover":nn("primary-40"),"text-disabled":nn("neutral-50"),"text-disabled-subtle":nn("neutral-60"),"text-disabled-subtlest":nn("neutral-80"),"text-selected-disabled":nn("neutral-20"),"text-success":nn("success-40"),"text-warning":nn("warning-40"),"text-error":nn("error-40"),"text-info":nn("info-40"),"text-inverse":nn("white"),icon:nn("neutral-50"),"icon-subtle":nn("neutral-60"),"icon-strongest":nn("neutral-20"),"icon-primary":nn("primary-50"),"icon-primary-subtle":nn("primary-60"),"icon-primary-subtlest":nn("primary-70"),"icon-hover":nn("primary-40"),"icon-selected":nn("primary-50"),"icon-selected-hover":nn("primary-40"),"icon-disabled":nn("neutral-50"),"icon-disabled-subtle":nn("neutral-60"),"icon-selected-disabled":nn("neutral-60"),"icon-success":nn("success-50"),"icon-warning":nn("warning-60"),"icon-error":nn("error-50"),"icon-error-strong":nn("error-40"),"icon-info":nn("info-50"),"icon-inverse":nn("white"),"icon-primary-inverse":nn("primary-inverse"),border:nn("neutral-90"),"border-strong":nn("neutral-70"),"border-stronger":nn("neutral-50"),"border-primary":nn("primary-50"),"border-primary-subtle":nn("primary-60"),"border-hover":nn("primary-90"),"border-hover-strong":nn("primary-60"),"border-selected":nn("primary-50"),"border-selected-subtle":nn("primary-70"),"border-selected-subtlest":nn("primary-90"),"border-selected-hover":nn("primary-40"),"border-focus":nn("primary-60"),"border-focus-strong":nn("primary-50"),"border-disabled":nn("neutral-90"),"border-selected-disabled":nn("neutral-70"),"border-success":nn("success-60"),"border-warning":nn("warning-60"),"border-error":nn("error-60"),"border-error-focus":nn("error-60"),"border-error-focus-strong":nn("error-40"),"border-error-strong":nn("error-40"),"border-info":nn("info-60"),bg:nn("white"),"bg-strong":nn("neutral-100"),"bg-stronger":nn("neutral-95"),"bg-strongest":nn("neutral-90"),"bg-hover":nn("primary-95"),"bg-hover-strong":nn("primary-90"),"bg-hover-subtle":nn("primary-100"),"bg-hover-neutral":nn("neutral-100"),"bg-hover-neutral-strong":nn("neutral-90"),"bg-selected":nn("primary-95"),"bg-selected-hover":nn("primary-90"),"bg-selected-strong":nn("primary-90"),"bg-selected-stronger":nn("primary-70"),"bg-selected-strongest":nn("primary-50"),"bg-selected-strongest-hover":nn("primary-40"),"bg-disabled":nn("neutral-95"),"bg-selected-disabled":nn("neutral-95"),"bg-selected-stronger-disabled":nn("neutral-70"),"bg-success":nn("success-100"),"bg-success-hover":nn("success-95"),"bg-success-strong":nn("success-50"),"bg-success-strong-hover":nn("success-40"),"bg-warning":nn("warning-100"),"bg-warning-hover":nn("warning-95"),"bg-warning-strong":nn("warning-50"),"bg-warning-strong-hover":nn("warning-40"),"bg-info":nn("info-100"),"bg-info-hover":nn("info-95"),"bg-info-strong":nn("info-50"),"bg-info-strong-hover":nn("info-40"),"bg-error":nn("error-100"),"bg-error-hover":nn("error-95"),"bg-error-strong":nn("error-50"),"bg-error-strong-hover":nn("error-40"),"bg-inverse":nn("neutral-20"),"bg-inverse-subtle":nn("neutral-30"),"bg-inverse-subtler":nn("neutral-50"),"bg-inverse-subtlest":nn("neutral-60"),"bg-inverse-hover":nn("neutral-40"),"bg-primary":nn("primary-50"),"bg-primary-subtle":nn("primary-60"),"bg-primary-subtler":nn("primary-95"),"bg-primary-subtlest":nn("primary-100"),"bg-available":"#6DD0A1","bg-primary-hover":nn("primary-40"),"bg-primary-subtlest-hover":nn("primary-90"),"bg-primary-subtlest-selected":nn("primary-90"),"overlay-strong":"rgba(40, 40, 40, 0.85)","overlay-subtle":"rgba(40, 40, 40, 0.20)",hyperlink:nn("primary-50"),"hyperlink-hover":nn("primary-40"),"hyperlink-visited":nn("primary-40"),"hyperlink-inverse":nn("primary-inverse"),"focus-ring":nn("primary-50"),"focus-ring-inverse":nn("white")},sn={text:nn("neutral-100"),"text-subtle":nn("neutral-80"),"text-subtler":nn("neutral-60"),"text-subtlest":nn("neutral-50"),"text-primary":nn("primary-60"),"text-primary-strongest":nn("primary-90"),"text-hover":nn("primary-70"),"text-selected":nn("primary-60"),"text-selected-hover":nn("primary-70"),"text-disabled":nn("neutral-60"),"text-disabled-subtle":nn("neutral-50"),"text-disabled-subtlest":nn("neutral-30"),"text-selected-disabled":nn("neutral-90"),"text-success":nn("success-70"),"text-warning":nn("warning-70"),"text-error":nn("error-70"),"text-info":nn("info-70"),"text-inverse":nn("black"),icon:nn("neutral-60"),"icon-subtle":nn("neutral-50"),"icon-strongest":nn("neutral-90"),"icon-primary":nn("primary-60"),"icon-primary-subtle":nn("primary-50"),"icon-primary-subtlest":nn("primary-40"),"icon-hover":nn("primary-70"),"icon-selected":nn("primary-60"),"icon-selected-hover":nn("primary-70"),"icon-disabled":nn("neutral-60"),"icon-disabled-subtle":nn("neutral-50"),"icon-selected-disabled":nn("neutral-50"),"icon-success":nn("success-60"),"icon-warning":nn("warning-50"),"icon-error":nn("error-60"),"icon-error-strong":nn("error-70"),"icon-info":nn("info-60"),"icon-inverse":nn("black"),"icon-primary-inverse":nn("primary-inverse"),border:nn("neutral-20"),"border-strong":nn("neutral-40"),"border-stronger":nn("neutral-60"),"border-primary":nn("primary-60"),"border-primary-subtle":nn("primary-50"),"border-hover":nn("primary-20"),"border-hover-strong":nn("primary-50"),"border-selected":nn("primary-60"),"border-selected-subtle":nn("primary-40"),"border-selected-subtlest":nn("primary-20"),"border-selected-hover":nn("primary-70"),"border-focus":nn("primary-50"),"border-focus-strong":nn("primary-60"),"border-disabled":nn("neutral-20"),"border-selected-disabled":nn("neutral-40"),"border-success":nn("success-50"),"border-warning":nn("warning-50"),"border-error":nn("error-50"),"border-error-focus":nn("error-50"),"border-error-focus-strong":nn("error-70"),"border-error-strong":nn("error-70"),"border-info":nn("info-50"),bg:nn("black"),"bg-strong":nn("neutral-10"),"bg-stronger":nn("neutral-20"),"bg-strongest":nn("neutral-20"),"bg-hover":nn("primary-20"),"bg-hover-strong":nn("primary-20"),"bg-hover-subtle":nn("primary-10"),"bg-hover-neutral":nn("neutral-10"),"bg-hover-neutral-strong":nn("neutral-20"),"bg-selected":nn("primary-20"),"bg-selected-hover":nn("primary-20"),"bg-selected-strong":nn("primary-20"),"bg-selected-stronger":nn("primary-40"),"bg-selected-strongest":nn("primary-60"),"bg-selected-strongest-hover":nn("primary-70"),"bg-disabled":nn("neutral-20"),"bg-selected-disabled":nn("neutral-20"),"bg-selected-stronger-disabled":nn("neutral-40"),"bg-success":nn("success-10"),"bg-success-hover":nn("success-20"),"bg-success-strong":nn("success-60"),"bg-success-strong-hover":nn("success-70"),"bg-warning":nn("warning-10"),"bg-warning-hover":nn("warning-20"),"bg-warning-strong":nn("warning-60"),"bg-warning-strong-hover":nn("warning-70"),"bg-info":nn("info-10"),"bg-info-hover":nn("info-20"),"bg-info-strong":nn("info-60"),"bg-info-strong-hover":nn("info-70"),"bg-error":nn("error-10"),"bg-error-hover":nn("error-20"),"bg-error-strong":nn("error-60"),"bg-error-strong-hover":nn("error-70"),"bg-inverse":nn("neutral-90"),"bg-inverse-subtle":nn("neutral-80"),"bg-inverse-subtler":nn("neutral-60"),"bg-inverse-subtlest":nn("neutral-50"),"bg-inverse-hover":nn("neutral-70"),"bg-primary":nn("primary-60"),"bg-primary-subtle":nn("primary-50"),"bg-primary-subtler":nn("primary-20"),"bg-primary-subtlest":nn("primary-10"),"bg-available":"#185339","bg-primary-hover":nn("primary-70"),"bg-primary-subtlest-hover":nn("primary-20"),"bg-primary-subtlest-selected":nn("primary-20"),"overlay-strong":"rgba(78, 78, 78, 0.80)","overlay-subtle":"rgba(78, 78, 78, 0.50)",hyperlink:nn("primary-60"),"hyperlink-hover":nn("primary-70"),"hyperlink-visited":nn("primary-70"),"hyperlink-inverse":nn("primary-inverse"),"focus-ring":nn("primary-60"),"focus-ring-inverse":nn("black")},ln={text:nn("neutral-30"),"text-subtle":nn("neutral-40"),"text-subtler":nn("neutral-50"),"text-subtlest":nn("neutral-70"),"text-primary":nn("neutral-10"),"text-primary-strongest":nn("neutral-10"),"text-hover":nn("neutral-70"),"text-selected":nn("neutral-20"),"text-selected-hover":nn("neutral-10"),"text-disabled":nn("neutral-50"),"text-disabled-subtle":nn("neutral-70"),"text-disabled-subtlest":nn("neutral-80"),"text-selected-disabled":nn("neutral-40"),"text-success":nn("success-40"),"text-warning":nn("warning-40"),"text-error":nn("brand-30"),"text-info":nn("neutral-40"),"text-inverse":nn("neutral-100"),icon:nn("neutral-40"),"icon-subtle":nn("neutral-50"),"icon-strongest":nn("neutral-10"),"icon-primary":nn("neutral-10"),"icon-primary-subtle":nn("neutral-30"),"icon-primary-subtlest":nn("neutral-60"),"icon-hover":nn("neutral-70"),"icon-selected":nn("brand-20"),"icon-selected-hover":nn("brand-10"),"icon-disabled":nn("neutral-50"),"icon-disabled-subtle":nn("neutral-70"),"icon-selected-disabled":nn("neutral-40"),"icon-success":nn("success-40"),"icon-warning":nn("warning-60"),"icon-error":nn("brand-30"),"icon-error-strong":nn("brand-10"),"icon-info":nn("neutral-40"),"icon-inverse":nn("neutral-100"),"icon-primary-inverse":"#F9B371",border:nn("neutral-90"),"border-strong":nn("neutral-30"),"border-stronger":nn("neutral-20"),"border-primary":nn("neutral-40"),"border-primary-subtle":nn("neutral-60"),"border-hover":nn("neutral-80"),"border-hover-strong":nn("neutral-10"),"border-selected":nn("brand-20"),"border-selected-subtle":nn("neutral-40"),"border-selected-subtlest":nn("neutral-70"),"border-selected-hover":nn("neutral-10"),"border-focus":nn("neutral-20"),"border-focus-strong":nn("neutral-10"),"border-disabled":nn("neutral-90"),"border-selected-disabled":nn("neutral-80"),"border-success":nn("success-40"),"border-warning":nn("warning-60"),"border-error":nn("brand-30"),"border-error-focus":nn("brand-20"),"border-error-focus-strong":nn("brand-10"),"border-error-strong":nn("brand-20"),"border-info":nn("neutral-40"),bg:nn("neutral-100"),"bg-strong":nn("neutral-95"),"bg-stronger":nn("neutral-90"),"bg-strongest":nn("neutral-80"),"bg-hover":nn("brand-90"),"bg-hover-strong":nn("brand-80"),"bg-hover-subtle":nn("neutral-90"),"bg-hover-neutral":nn("neutral-90"),"bg-hover-neutral-strong":nn("neutral-90"),"bg-selected":nn("brand-100"),"bg-selected-hover":nn("brand-30"),"bg-selected-strong":nn("brand-50"),"bg-selected-stronger":nn("brand-40"),"bg-selected-strongest":nn("brand-20"),"bg-selected-strongest-hover":nn("brand-10"),"bg-disabled":nn("neutral-90"),"bg-selected-disabled":nn("neutral-90"),"bg-selected-stronger-disabled":nn("neutral-80"),"bg-success":nn("success-100"),"bg-success-hover":nn("success-95"),"bg-success-strong":nn("success-50"),"bg-success-strong-hover":nn("success-40"),"bg-warning":nn("warning-100"),"bg-warning-hover":nn("warning-95"),"bg-warning-strong":nn("warning-50"),"bg-warning-strong-hover":nn("warning-40"),"bg-info":nn("neutral-95"),"bg-info-hover":nn("info-95"),"bg-info-strong":nn("info-50"),"bg-info-strong-hover":nn("info-40"),"bg-error":nn("brand-100"),"bg-error-hover":nn("error-95"),"bg-error-strong":nn("error-50"),"bg-error-strong-hover":nn("error-40"),"bg-inverse":nn("neutral-40"),"bg-inverse-subtle":nn("neutral-60"),"bg-inverse-subtler":nn("neutral-70"),"bg-inverse-subtlest":nn("neutral-80"),"bg-inverse-hover":nn("neutral-30"),"bg-primary":nn("brand-20"),"bg-primary-subtle":nn("brand-60"),"bg-primary-subtler":nn("brand-80"),"bg-primary-subtlest":nn("brand-100"),"bg-available":nn("success-60"),"bg-primary-hover":nn("brand-10"),"bg-primary-subtlest-hover":nn("brand-80"),"bg-primary-subtlest-selected":nn("brand-40"),"overlay-strong":"rgba(25, 25, 25, 0.95)","overlay-subtle":"rgba(25, 25, 25, 0.20)",hyperlink:nn("neutral-10"),"hyperlink-hover":nn("neutral-40"),"hyperlink-visited":nn("neutral-50"),"hyperlink-inverse":"#F8AE68","focus-ring":nn("primary-50"),"focus-ring-inverse":nn("white")},dn={text:nn("neutral-20"),"text-subtle":nn("neutral-30"),"text-subtler":nn("neutral-50"),"text-subtlest":nn("neutral-60"),"text-primary":nn("primary-50"),"text-primary-strongest":nn("primary-20"),"text-hover":nn("primary-40"),"text-selected":nn("primary-50"),"text-selected-hover":nn("primary-40"),"text-disabled":nn("neutral-50"),"text-disabled-subtle":nn("neutral-60"),"text-disabled-subtlest":nn("neutral-80"),"text-selected-disabled":nn("neutral-20"),"text-success":nn("success-40"),"text-warning":nn("warning-40"),"text-error":nn("error-40"),"text-info":nn("info-40"),"text-inverse":nn("white"),icon:nn("neutral-50"),"icon-subtle":nn("neutral-60"),"icon-strongest":nn("neutral-20"),"icon-primary":nn("primary-50"),"icon-primary-subtle":nn("primary-60"),"icon-primary-subtlest":nn("primary-70"),"icon-hover":nn("primary-40"),"icon-selected":nn("primary-50"),"icon-selected-hover":nn("primary-40"),"icon-disabled":nn("neutral-50"),"icon-disabled-subtle":nn("neutral-60"),"icon-selected-disabled":nn("neutral-60"),"icon-success":nn("success-50"),"icon-warning":nn("warning-60"),"icon-error":nn("error-50"),"icon-error-strong":nn("error-40"),"icon-info":nn("info-50"),"icon-inverse":nn("white"),"icon-primary-inverse":nn("primary-inverse"),border:nn("neutral-90"),"border-strong":nn("neutral-70"),"border-stronger":nn("neutral-50"),"border-primary":nn("primary-50"),"border-primary-subtle":nn("primary-60"),"border-hover":nn("primary-90"),"border-hover-strong":nn("primary-60"),"border-selected":nn("primary-50"),"border-selected-subtle":nn("primary-70"),"border-selected-subtlest":nn("primary-90"),"border-selected-hover":nn("primary-40"),"border-focus":nn("primary-60"),"border-focus-strong":nn("primary-50"),"border-disabled":nn("neutral-90"),"border-selected-disabled":nn("neutral-70"),"border-success":nn("success-60"),"border-warning":nn("warning-60"),"border-error":nn("error-60"),"border-error-focus":nn("error-60"),"border-error-focus-strong":nn("error-40"),"border-error-strong":nn("error-40"),"border-info":nn("info-60"),bg:nn("white"),"bg-strong":nn("neutral-100"),"bg-stronger":nn("neutral-95"),"bg-strongest":nn("neutral-90"),"bg-hover":nn("primary-95"),"bg-hover-strong":nn("primary-90"),"bg-hover-subtle":nn("primary-100"),"bg-hover-neutral":nn("neutral-100"),"bg-hover-neutral-strong":nn("neutral-90"),"bg-selected":nn("primary-95"),"bg-selected-hover":nn("primary-90"),"bg-selected-strong":nn("primary-90"),"bg-selected-stronger":nn("primary-70"),"bg-selected-strongest":nn("primary-50"),"bg-selected-strongest-hover":nn("primary-40"),"bg-disabled":nn("neutral-95"),"bg-selected-disabled":nn("neutral-95"),"bg-selected-stronger-disabled":nn("neutral-70"),"bg-success":nn("success-100"),"bg-success-hover":nn("success-95"),"bg-success-strong":nn("success-50"),"bg-success-strong-hover":nn("success-40"),"bg-warning":nn("warning-100"),"bg-warning-hover":nn("warning-95"),"bg-warning-strong":nn("warning-50"),"bg-warning-strong-hover":nn("warning-40"),"bg-info":nn("info-100"),"bg-info-hover":nn("info-95"),"bg-info-strong":nn("info-50"),"bg-info-strong-hover":nn("info-40"),"bg-error":nn("error-100"),"bg-error-hover":nn("error-95"),"bg-error-strong":nn("error-50"),"bg-error-strong-hover":nn("error-40"),"bg-inverse":nn("neutral-20"),"bg-inverse-subtle":nn("neutral-30"),"bg-inverse-subtler":nn("neutral-50"),"bg-inverse-subtlest":nn("neutral-60"),"bg-inverse-hover":nn("neutral-40"),"bg-primary":nn("primary-50"),"bg-primary-subtle":nn("primary-60"),"bg-primary-subtler":nn("primary-95"),"bg-primary-subtlest":nn("primary-100"),"bg-available":"#6DD0A1","bg-primary-hover":nn("primary-40"),"bg-primary-subtlest-hover":nn("primary-90"),"bg-primary-subtlest-selected":nn("primary-90"),"overlay-strong":"rgba(40, 40, 40, 0.85)","overlay-subtle":"rgba(40, 40, 40, 0.20)",hyperlink:nn("primary-50"),"hyperlink-hover":nn("primary-40"),"hyperlink-visited":nn("primary-40"),"hyperlink-inverse":nn("primary-inverse"),"focus-ring":nn("primary-50"),"focus-ring-inverse":nn("white")},cn={text:nn("neutral-100"),"text-subtle":nn("neutral-80"),"text-subtler":nn("neutral-60"),"text-subtlest":nn("neutral-50"),"text-primary":nn("primary-60"),"text-primary-strongest":nn("primary-90"),"text-hover":nn("primary-70"),"text-selected":nn("primary-60"),"text-selected-hover":nn("primary-70"),"text-disabled":nn("neutral-60"),"text-disabled-subtle":nn("neutral-50"),"text-disabled-subtlest":nn("neutral-30"),"text-selected-disabled":nn("neutral-90"),"text-success":nn("success-70"),"text-warning":nn("warning-70"),"text-error":nn("error-70"),"text-info":nn("info-70"),"text-inverse":nn("black"),icon:nn("neutral-60"),"icon-subtle":nn("neutral-50"),"icon-strongest":nn("neutral-90"),"icon-primary":nn("primary-60"),"icon-primary-subtle":nn("primary-50"),"icon-primary-subtlest":nn("primary-40"),"icon-hover":nn("primary-70"),"icon-selected":nn("primary-60"),"icon-selected-hover":nn("primary-70"),"icon-disabled":nn("neutral-60"),"icon-disabled-subtle":nn("neutral-50"),"icon-selected-disabled":nn("neutral-50"),"icon-success":nn("success-60"),"icon-warning":nn("warning-50"),"icon-error":nn("error-60"),"icon-error-strong":nn("error-70"),"icon-info":nn("info-60"),"icon-inverse":nn("black"),"icon-primary-inverse":nn("primary-inverse"),border:nn("neutral-20"),"border-strong":nn("neutral-40"),"border-stronger":nn("neutral-60"),"border-primary":nn("primary-60"),"border-primary-subtle":nn("primary-50"),"border-hover":nn("primary-20"),"border-hover-strong":nn("primary-50"),"border-selected":nn("primary-60"),"border-selected-subtle":nn("primary-40"),"border-selected-subtlest":nn("primary-20"),"border-selected-hover":nn("primary-70"),"border-focus":nn("primary-50"),"border-focus-strong":nn("primary-60"),"border-disabled":nn("neutral-20"),"border-selected-disabled":nn("neutral-40"),"border-success":nn("success-50"),"border-warning":nn("warning-50"),"border-error":nn("error-50"),"border-error-focus":nn("error-50"),"border-error-focus-strong":nn("error-70"),"border-error-strong":nn("error-70"),"border-info":nn("info-50"),bg:nn("black"),"bg-strong":nn("neutral-10"),"bg-stronger":nn("neutral-20"),"bg-strongest":nn("neutral-20"),"bg-hover":nn("primary-20"),"bg-hover-strong":nn("primary-20"),"bg-hover-subtle":nn("primary-10"),"bg-hover-neutral":nn("neutral-10"),"bg-hover-neutral-strong":nn("neutral-20"),"bg-selected":nn("primary-20"),"bg-selected-hover":nn("primary-20"),"bg-selected-strong":nn("primary-20"),"bg-selected-stronger":nn("primary-40"),"bg-selected-strongest":nn("primary-60"),"bg-selected-strongest-hover":nn("primary-70"),"bg-disabled":nn("neutral-20"),"bg-selected-disabled":nn("neutral-20"),"bg-selected-stronger-disabled":nn("neutral-40"),"bg-success":nn("success-10"),"bg-success-hover":nn("success-20"),"bg-success-strong":nn("success-60"),"bg-success-strong-hover":nn("success-70"),"bg-warning":nn("warning-10"),"bg-warning-hover":nn("warning-20"),"bg-warning-strong":nn("warning-60"),"bg-warning-strong-hover":nn("warning-70"),"bg-info":nn("info-10"),"bg-info-hover":nn("info-20"),"bg-info-strong":nn("info-60"),"bg-info-strong-hover":nn("info-70"),"bg-error":nn("error-10"),"bg-error-hover":nn("error-20"),"bg-error-strong":nn("error-60"),"bg-error-strong-hover":nn("error-70"),"bg-inverse":nn("neutral-90"),"bg-inverse-subtle":nn("neutral-80"),"bg-inverse-subtler":nn("neutral-60"),"bg-inverse-subtlest":nn("neutral-50"),"bg-inverse-hover":nn("neutral-70"),"bg-primary":nn("primary-60"),"bg-primary-subtle":nn("primary-50"),"bg-primary-subtler":nn("primary-20"),"bg-primary-subtlest":nn("primary-10"),"bg-available":"#185339","bg-primary-hover":nn("primary-70"),"bg-primary-subtlest-hover":nn("primary-20"),"bg-primary-subtlest-selected":nn("primary-20"),"overlay-strong":"rgba(78, 78, 78, 0.80)","overlay-subtle":"rgba(78, 78, 78, 0.50)",hyperlink:nn("primary-60"),"hyperlink-hover":nn("primary-70"),"hyperlink-visited":nn("primary-70"),"hyperlink-inverse":nn("primary-inverse"),"focus-ring":nn("primary-60"),"focus-ring-inverse":nn("black")},un={collections:{lifesg:an,bookingsg:an,rbs:an,mylegacy:an,ccube:an,oneservice:an,pa:ln,a11yplayground:dn,supportgowhere:an,imda:an,spf:an},defaultValue:"lifesg"},gn={collections:{lifesg:sn,bookingsg:sn,rbs:sn,mylegacy:sn,ccube:sn,oneservice:sn,pa:sn,a11yplayground:cn,supportgowhere:sn,imda:sn,spf:sn},defaultValue:"lifesg"},hn=e=>r=>{var t;const n=r.theme,o="dark"===(null==n?void 0:n.colourMode),i=jt(o?gn:un,null==n?void 0:n.colourScheme),a=o?"semanticColourDark":"semanticColour",s=null===(t=null==n?void 0:n.overrides)||void 0===t?void 0:t[a],l=s?Lt(i,e,s):i[e];return"function"==typeof l?l(r):l},mn={text:hn("text"),"text-subtle":hn("text-subtle"),"text-subtler":hn("text-subtler"),"text-subtlest":hn("text-subtlest"),"text-primary":hn("text-primary"),"text-primary-strongest":hn("text-primary-strongest"),"text-hover":hn("text-hover"),"text-selected":hn("text-selected"),"text-selected-hover":hn("text-selected-hover"),"text-disabled":hn("text-disabled"),"text-disabled-subtle":hn("text-disabled-subtle"),"text-disabled-subtlest":hn("text-disabled-subtlest"),"text-selected-disabled":hn("text-selected-disabled"),"text-success":hn("text-success"),"text-warning":hn("text-warning"),"text-error":hn("text-error"),"text-info":hn("text-info"),"text-inverse":hn("text-inverse"),icon:hn("icon"),"icon-subtle":hn("icon-subtle"),"icon-strongest":hn("icon-strongest"),"icon-primary":hn("icon-primary"),"icon-primary-subtle":hn("icon-primary-subtle"),"icon-primary-subtlest":hn("icon-primary-subtlest"),"icon-hover":hn("icon-hover"),"icon-selected":hn("icon-selected"),"icon-selected-hover":hn("icon-selected-hover"),"icon-disabled":hn("icon-disabled"),"icon-disabled-subtle":hn("icon-disabled-subtle"),"icon-selected-disabled":hn("icon-selected-disabled"),"icon-success":hn("icon-success"),"icon-warning":hn("icon-warning"),"icon-error":hn("icon-error"),"icon-error-strong":hn("icon-error-strong"),"icon-info":hn("icon-info"),"icon-inverse":hn("icon-inverse"),"icon-primary-inverse":hn("icon-primary-inverse"),border:hn("border"),"border-strong":hn("border-strong"),"border-stronger":hn("border-stronger"),"border-primary":hn("border-primary"),"border-primary-subtle":hn("border-primary-subtle"),"border-hover":hn("border-hover"),"border-hover-strong":hn("border-hover-strong"),"border-selected":hn("border-selected"),"border-selected-subtle":hn("border-selected-subtle"),"border-selected-subtlest":hn("border-selected-subtlest"),"border-selected-hover":hn("border-selected-hover"),"border-focus":hn("border-focus"),"border-focus-strong":hn("border-focus-strong"),"border-disabled":hn("border-disabled"),"border-selected-disabled":hn("border-selected-disabled"),"border-success":hn("border-success"),"border-warning":hn("border-warning"),"border-error":hn("border-error"),"border-error-focus":hn("border-error-focus"),"border-error-focus-strong":hn("border-error-focus-strong"),"border-error-strong":hn("border-error-strong"),"border-info":hn("border-info"),bg:hn("bg"),"bg-strong":hn("bg-strong"),"bg-stronger":hn("bg-stronger"),"bg-strongest":hn("bg-strongest"),"bg-hover":hn("bg-hover"),"bg-hover-strong":hn("bg-hover-strong"),"bg-hover-subtle":hn("bg-hover-subtle"),"bg-hover-neutral":hn("bg-hover-neutral"),"bg-hover-neutral-strong":hn("bg-hover-neutral-strong"),"bg-selected":hn("bg-selected"),"bg-selected-hover":hn("bg-selected-hover"),"bg-selected-strong":hn("bg-selected-strong"),"bg-selected-stronger":hn("bg-selected-stronger"),"bg-selected-strongest":hn("bg-selected-strongest"),"bg-selected-strongest-hover":hn("bg-selected-strongest-hover"),"bg-disabled":hn("bg-disabled"),"bg-selected-disabled":hn("bg-selected-disabled"),"bg-selected-stronger-disabled":hn("bg-selected-stronger-disabled"),"bg-success":hn("bg-success"),"bg-success-hover":hn("bg-success-hover"),"bg-success-strong":hn("bg-success-strong"),"bg-success-strong-hover":hn("bg-success-strong-hover"),"bg-warning":hn("bg-warning"),"bg-warning-hover":hn("bg-warning-hover"),"bg-warning-strong":hn("bg-warning-strong"),"bg-warning-strong-hover":hn("bg-warning-strong-hover"),"bg-info":hn("bg-info"),"bg-info-hover":hn("bg-info-hover"),"bg-info-strong":hn("bg-info-strong"),"bg-info-strong-hover":hn("bg-info-strong-hover"),"bg-error":hn("bg-error"),"bg-error-hover":hn("bg-error-hover"),"bg-error-strong":hn("bg-error-strong"),"bg-error-strong-hover":hn("bg-error-strong-hover"),"bg-inverse":hn("bg-inverse"),"bg-inverse-subtle":hn("bg-inverse-subtle"),"bg-inverse-subtler":hn("bg-inverse-subtler"),"bg-inverse-subtlest":hn("bg-inverse-subtlest"),"bg-inverse-hover":hn("bg-inverse-hover"),"bg-primary":hn("bg-primary"),"bg-primary-subtle":hn("bg-primary-subtle"),"bg-primary-subtler":hn("bg-primary-subtler"),"bg-primary-subtlest":hn("bg-primary-subtlest"),"bg-available":hn("bg-available"),"bg-primary-hover":hn("bg-primary-hover"),"bg-primary-subtlest-hover":hn("bg-primary-subtlest-hover"),"bg-primary-subtlest-selected":hn("bg-primary-subtlest-selected"),"overlay-strong":hn("overlay-strong"),"overlay-subtle":hn("overlay-subtle"),hyperlink:hn("hyperlink"),"hyperlink-hover":hn("hyperlink-hover"),"hyperlink-visited":hn("hyperlink-visited"),"hyperlink-inverse":hn("hyperlink-inverse"),"focus-ring":hn("focus-ring"),"focus-ring-inverse":hn("focus-ring-inverse")},bn={collections:{default:{solid:e=>r=>{var t,n,o;const{thickness:i,radius:a,colour:s}=e||{},l=null!==(t="function"==typeof i?i(r):i+"px")&&void 0!==t?t:Nt["width-010"](r),d=null!==(n="function"==typeof a?a(r):a+"px")&&void 0!==n?n:0,c=null!==(o="function"==typeof s?s(r):s)&&void 0!==o?o:mn.border(r),u=Nt.solid;return C`
            border: ${l} ${u} ${c};
            border-radius: ${d};
        `},"dashed-default":e=>r=>{var t,n,o;const{thickness:i,radius:a,colour:s}=e||{},l=null!==(t="function"==typeof i?i(r):i)&&void 0!==t?t:Nt["width-010"](r),d=null!==(n="function"==typeof a?a(r):a)&&void 0!==n?n:0,c=null!==(o="function"==typeof s?s(r):s)&&void 0!==o?o:mn.border(r),u=encodeURIComponent(`<svg width='100%' height='100%' xmlns='http://www.w3.org/2000/svg'><rect width='100%' height='100%' fill='none' rx='${d}' ry='${d}' stroke='${c}' stroke-width='${l}' stroke-dasharray='4, 8' stroke-dashoffset='0' stroke-linecap='square'/></svg>`);return C`
            background-image: url("data:image/svg+xml,${u}");
            border-radius: ${d};
        `}}},defaultValue:"default"},fn=e=>1===e.length&&"theme"in e[0],pn=e=>(...r)=>t=>{const n=fn(r)?[]:r,o=fn(r)?r[0]:t,i=o.theme;return(0,jt(bn,null==i?void 0:i.borderScheme)[e])(...n)(o)},yn={solid:pn("solid"),"dashed-default":pn("dashed-default")},vn={collections:{default:{"xxs-min":0,"xxs-max":320,"xs-min":321,"xs-max":375,"sm-min":376,"sm-max":480,"md-min":481,"md-max":768,"lg-min":769,"lg-max":1200,"xl-min":1201,"xl-max":1440,"xxl-min":1441,"xxs-column":8,"xs-column":8,"sm-column":8,"md-column":8,"lg-column":12,"xl-column":12,"xxl-column":12,"xxs-gutter":16,"xs-gutter":16,"sm-gutter":16,"md-gutter":16,"lg-gutter":32,"xl-gutter":32,"xxl-gutter":32,"xxs-margin":24,"xs-margin":24,"sm-margin":24,"md-margin":24,"lg-margin":48,"xl-margin":48,"xxl-margin":48}},defaultValue:"default"},xn=e=>r=>{var t;const n=r.theme,o=jt(vn,null==n?void 0:n.breakpointScheme);let i;return i=(null===(t=null==n?void 0:n.overrides)||void 0===t?void 0:t.breakpoint)?Lt(o,e,n.overrides.breakpoint):o[e],i},wn={"xxs-min":xn("xxs-min"),"xxs-max":xn("xxs-max"),"xs-min":xn("xs-min"),"xs-max":xn("xs-max"),"sm-min":xn("sm-min"),"sm-max":xn("sm-max"),"md-min":xn("md-min"),"md-max":xn("md-max"),"lg-min":xn("lg-min"),"lg-max":xn("lg-max"),"xl-min":xn("xl-min"),"xl-max":xn("xl-max"),"xxl-min":xn("xxl-min"),"xxs-column":xn("xxs-column"),"xs-column":xn("xs-column"),"sm-column":xn("sm-column"),"md-column":xn("md-column"),"lg-column":xn("lg-column"),"xl-column":xn("xl-column"),"xxl-column":xn("xxl-column"),"xxs-gutter":xn("xxs-gutter"),"xs-gutter":xn("xs-gutter"),"sm-gutter":xn("sm-gutter"),"md-gutter":xn("md-gutter"),"lg-gutter":xn("lg-gutter"),"xl-gutter":xn("xl-gutter"),"xxl-gutter":xn("xxl-gutter"),"xxs-margin":xn("xxs-margin"),"xs-margin":xn("xs-margin"),"sm-margin":xn("sm-margin"),"md-margin":xn("md-margin"),"lg-margin":xn("lg-margin"),"xl-margin":xn("xl-margin"),"xxl-margin":xn("xxl-margin")},$n=e=>("max-width"===e?["xxs","xs","sm","md","lg","xl"]:["xxs","xs","sm","md","lg","xl","xxl"]).reduce(((r,t)=>(r[t]=((e,r)=>{const t=wn["max-width"===e?`${r}-max`:`${r}-min`];return r=>{const n=t(r);return`@media screen and (${e}: ${n}px)`}})(e,t),r)),{}),Fn={MaxWidth:$n("max-width"),MinWidth:$n("min-width")},Cn={collections:{default:{"heading-size-xxl":"3rem","heading-size-xl":"2.5rem","heading-size-lg":"2rem","heading-size-md":"1.625rem","heading-size-sm":"1.375rem","heading-size-xs":"1.125rem","heading-lh-xxl":"3.5rem","heading-lh-xl":"3rem","heading-lh-lg":"2.5rem","heading-lh-md":"2.25rem","heading-lh-sm":"1.75rem","heading-lh-xs":"1.625rem","heading-ls-xxl":"-0.035rem","heading-ls-xl":"-0.02rem","heading-ls-lg":"-0.02rem","heading-ls-md":"0rem","heading-ls-sm":"0rem","heading-ls-xs":"0rem","weight-light":"300","weight-regular":"400","weight-semibold":"600","weight-bold":"700","font-family":"Open Sans","body-size-baseline":"1.125rem","body-size-md":"1rem","body-size-sm":"0.875rem","body-size-xs":"0.75rem","body-lh-baseline":"1.625rem","body-lh-md":"1.5rem","body-lh-sm":"1.625rem","body-lh-xs":"1.25rem","body-ls-baseline":"0rem","body-ls-md":"0.009rem","body-ls-sm":"0.008rem","body-ls-xs":"0.008rem","form-label-size":"1rem","form-description-size":"0.875rem","form-label-lh":"1.5rem","form-description-lh":"1.625rem","form-label-ls":"0.009rem","form-description-ls":"0.008rem"},bookingsg:{"heading-size-xxl":"3rem","heading-size-xl":"2.5rem","heading-size-lg":"2rem","heading-size-md":"1.625rem","heading-size-sm":"1.375rem","heading-size-xs":"1.125rem","heading-lh-xxl":"3.5rem","heading-lh-xl":"3rem","heading-lh-lg":"2.5rem","heading-lh-md":"2.25rem","heading-lh-sm":"1.75rem","heading-lh-xs":"1.75rem","heading-ls-xxl":"-0.035rem","heading-ls-xl":"-0.02rem","heading-ls-lg":"-0.02rem","heading-ls-md":"0rem","heading-ls-sm":"0rem","heading-ls-xs":"0rem","weight-light":"300","weight-regular":"400","weight-semibold":"600","weight-bold":"700","font-family":"Plus Jakarta Sans","body-size-baseline":"1.125rem","body-size-md":"1rem","body-size-sm":"0.875rem","body-size-xs":"0.75rem","body-lh-baseline":"1.75rem","body-lh-md":"1.5rem","body-lh-sm":"1.6rem","body-lh-xs":"1.2rem","body-ls-baseline":"0rem","body-ls-md":"0.009rem","body-ls-sm":"0.008rem","body-ls-xs":"0.008rem","form-label-size":"1rem","form-description-size":"0.875rem","form-label-lh":"1.5rem","form-description-lh":"1.625rem","form-label-ls":"0.009rem","form-description-ls":"0.008rem"},mylegacy:{"heading-size-xxl":"3rem","heading-size-xl":"2.5rem","heading-size-lg":"2rem","heading-size-md":"1.625rem","heading-size-sm":"1.375rem","heading-size-xs":"1.125rem","heading-lh-xxl":"3.5rem","heading-lh-xl":"3rem","heading-lh-lg":"2.5rem","heading-lh-md":"2.25rem","heading-lh-sm":"1.75rem","heading-lh-xs":"1.625rem","heading-ls-xxl":"-0.035rem","heading-ls-xl":"-0.02rem","heading-ls-lg":"-0.02rem","heading-ls-md":"0rem","heading-ls-sm":"0rem","heading-ls-xs":"0rem","weight-light":"300","weight-regular":"400","weight-semibold":"600","weight-bold":"700","font-family":"Open Sans","body-size-baseline":"1.125rem","body-size-md":"1rem","body-size-sm":"0.875rem","body-size-xs":"0.75rem","body-lh-baseline":"1.625rem","body-lh-md":"1.5rem","body-lh-sm":"1.625rem","body-lh-xs":"1.25rem","body-ls-baseline":"0rem","body-ls-md":"0.009rem","body-ls-sm":"0.008rem","body-ls-xs":"0.008rem","form-label-size":"1.125rem","form-description-size":"1rem","form-label-lh":"1.5rem","form-description-lh":"1.625rem","form-label-ls":"0rem","form-description-ls":"0.009rem"},pa:{"heading-size-xxl":"2.5rem","heading-size-xl":"2rem","heading-size-lg":"1.75rem","heading-size-md":"1.5rem","heading-size-sm":"1.25rem","heading-size-xs":"1rem","heading-lh-xxl":"3rem","heading-lh-xl":"2.5rem","heading-lh-lg":"2.25rem","heading-lh-md":"2rem","heading-lh-sm":"2rem","heading-lh-xs":"1.75rem","heading-ls-xxl":"-0.032rem","heading-ls-xl":"-0.032rem","heading-ls-lg":"0rem","heading-ls-md":"0rem","heading-ls-sm":"0rem","heading-ls-xs":"0rem","weight-light":"300","weight-regular":"400","weight-semibold":"600","weight-bold":"700","font-family":"Lato","body-size-baseline":"1rem","body-size-md":"0.875rem","body-size-sm":"0.75rem","body-size-xs":"0.625rem","body-lh-baseline":"1.75rem","body-lh-md":"1.5rem","body-lh-sm":"1.25rem","body-lh-xs":"1.25rem","body-ls-baseline":"0rem","body-ls-md":"0.014rem","body-ls-sm":"0.012rem","body-ls-xs":"0.012rem","form-label-size":"1rem","form-description-size":"0.875rem","form-label-lh":"1.5rem","form-description-lh":"1.6rem","form-label-ls":"0.014rem","form-description-ls":"0.012rem"},a11yplayground:{"heading-size-xxl":"3rem","heading-size-xl":"2.5rem","heading-size-lg":"2rem","heading-size-md":"1.625rem","heading-size-sm":"1.375rem","heading-size-xs":"1.125rem","heading-lh-xxl":"3.5rem","heading-lh-xl":"3rem","heading-lh-lg":"2.5rem","heading-lh-md":"2.25rem","heading-lh-sm":"1.75rem","heading-lh-xs":"1.625rem","heading-ls-xxl":"-0.035rem","heading-ls-xl":"-0.02rem","heading-ls-lg":"-0.02rem","heading-ls-md":"0rem","heading-ls-sm":"0rem","heading-ls-xs":"0rem","weight-light":"300","weight-regular":"400","weight-semibold":"600","weight-bold":"700","font-family":"Atkinson Hyperlegible Next","body-size-baseline":"1.125rem","body-size-md":"1rem","body-size-sm":"0.875rem","body-size-xs":"0.75rem","body-lh-baseline":"1.625rem","body-lh-md":"1.5rem","body-lh-sm":"1.625rem","body-lh-xs":"1.25rem","body-ls-baseline":"0rem","body-ls-md":"0.009rem","body-ls-sm":"0.008rem","body-ls-xs":"0.008rem","form-label-size":"1.125rem","form-description-size":"1rem","form-label-lh":"1.5rem","form-description-lh":"1.625rem","form-label-ls":"0rem","form-description-ls":"0.009rem"},supportgowhere:{"heading-size-xxl":"3rem","heading-size-xl":"2.5rem","heading-size-lg":"2rem","heading-size-md":"1.625rem","heading-size-sm":"1.375rem","heading-size-xs":"1.125rem","heading-lh-xxl":"3.5rem","heading-lh-xl":"3rem","heading-lh-lg":"2.5rem","heading-lh-md":"2.25rem","heading-lh-sm":"1.75rem","heading-lh-xs":"1.625rem","heading-ls-xxl":"-0.035rem","heading-ls-xl":"-0.02rem","heading-ls-lg":"-0.02rem","heading-ls-md":"0rem","heading-ls-sm":"0rem","heading-ls-xs":"0rem","weight-light":"300","weight-regular":"400","weight-semibold":"600","weight-bold":"700","font-family":"Libre Franklin","body-size-baseline":"1.125rem","body-size-md":"1rem","body-size-sm":"0.875rem","body-size-xs":"0.75rem","body-lh-baseline":"1.625rem","body-lh-md":"1.5rem","body-lh-sm":"1.625rem","body-lh-xs":"1.25rem","body-ls-baseline":"0rem","body-ls-md":"0.009rem","body-ls-sm":"0.008rem","body-ls-xs":"0.008rem","form-label-size":"1rem","form-description-size":"0.875rem","form-label-lh":"1.5rem","form-description-lh":"1.625rem","form-label-ls":"0.009rem","form-description-ls":"0.008rem"},sgwdigitallobby:{"heading-size-xxl":"3.75rem","heading-size-xl":"3rem","heading-size-lg":"2.5rem","heading-size-md":"2rem","heading-size-sm":"1.625rem","heading-size-xs":"1.375rem","heading-lh-xxl":"4.5rem","heading-lh-xl":"3.5rem","heading-lh-lg":"3rem","heading-lh-md":"2.5rem","heading-lh-sm":"2.25rem","heading-lh-xs":"1.75rem","heading-ls-xxl":"-0.035rem","heading-ls-xl":"-0.035em","heading-ls-lg":"-0.02rem","heading-ls-md":"-0.02rem","heading-ls-sm":"0rem","heading-ls-xs":"0rem","weight-light":"300","weight-regular":"400","weight-semibold":"600","weight-bold":"700","font-family":"Libre Franklin","body-size-baseline":"1.375rem","body-size-md":"1.2rem","body-size-sm":"1.125rem","body-size-xs":"1rem","body-lh-baseline":"1.75rem","body-lh-md":"1.625rem","body-lh-sm":"1.625rem","body-lh-xs":"1.5rem","body-ls-baseline":"0rem","body-ls-md":"0rem","body-ls-sm":"0rem","body-ls-xs":"0.009rem","form-label-size":"1.25rem","form-description-size":"1.125rem","form-label-lh":"1.625rem","form-description-lh":"1.625rem","form-label-ls":"0rem","form-description-ls":"0rem"},imda:{"heading-size-xxl":"3rem","heading-size-xl":"2.5rem","heading-size-lg":"2rem","heading-size-md":"1.625rem","heading-size-sm":"1.375rem","heading-size-xs":"1.125rem","heading-lh-xxl":"3.5rem","heading-lh-xl":"3rem","heading-lh-lg":"2.5rem","heading-lh-md":"2.25rem","heading-lh-sm":"1.75rem","heading-lh-xs":"1.625rem","heading-ls-xxl":"-0.035rem","heading-ls-xl":"-0.02rem","heading-ls-lg":"-0.02rem","heading-ls-md":"0rem","heading-ls-sm":"0rem","heading-ls-xs":"0rem","weight-light":"300","weight-regular":"400","weight-semibold":"600","weight-bold":"700","font-family":"Montserrat","body-size-baseline":"1.125rem","body-size-md":"1rem","body-size-sm":"0.875rem","body-size-xs":"0.75rem","body-lh-baseline":"1.625rem","body-lh-md":"1.5rem","body-lh-sm":"1.625rem","body-lh-xs":"1.25rem","body-ls-baseline":"0rem","body-ls-md":"0.009rem","body-ls-sm":"0.008rem","body-ls-xs":"0.008rem","form-label-size":"1rem","form-description-size":"0.875rem","form-label-lh":"1.5rem","form-description-lh":"1.625rem","form-label-ls":"0.009rem","form-description-ls":"0.008rem"},spf:{"heading-size-xxl":"3.75rem","heading-size-xl":"3rem","heading-size-lg":"2.5rem","heading-size-md":"2rem","heading-size-sm":"1.75rem","heading-size-xs":"1.5rem","heading-lh-xxl":"4.5rem","heading-lh-xl":"3.5rem","heading-lh-lg":"3rem","heading-lh-md":"2.25rem","heading-lh-sm":"2rem","heading-lh-xs":"1.75rem","heading-ls-xxl":"-0.035rem","heading-ls-xl":"-0.02rem","heading-ls-lg":"-0.02rem","heading-ls-md":"0rem","heading-ls-sm":"0rem","heading-ls-xs":"0rem","weight-light":"300","weight-regular":"400","weight-semibold":"600","weight-bold":"700","font-family":"Public Sans","body-size-baseline":"1.2rem","body-size-md":"1.125rem","body-size-sm":"1rem","body-size-xs":"0.875rem","body-lh-baseline":"1.5rem","body-lh-md":"1.5rem","body-lh-sm":"1.5rem","body-lh-xs":"1.125rem","body-ls-baseline":"0rem","body-ls-md":"0.009rem","body-ls-sm":"0.008rem","body-ls-xs":"0.008rem","form-label-size":"1.125rem","form-description-size":"1rem","form-label-lh":"1.5rem","form-description-lh":"1.625rem","form-label-ls":"0.009rem","form-description-ls":"0.008rem"},oneservice:{"heading-size-xxl":"2.5rem","heading-size-xl":"2rem","heading-size-lg":"1.75rem","heading-size-md":"1.375rem","heading-size-sm":"1.125rem","heading-size-xs":"1rem","heading-lh-xxl":"3.5rem","heading-lh-xl":"3rem","heading-lh-lg":"2.625rem","heading-lh-md":"2rem","heading-lh-sm":"1.625rem","heading-lh-xs":"1.5rem","heading-ls-xxl":"0rem","heading-ls-xl":"0rem","heading-ls-lg":"0rem","heading-ls-md":"0rem","heading-ls-sm":"0rem","heading-ls-xs":"0rem","weight-light":"300","weight-regular":"400","weight-semibold":"600","weight-bold":"700","font-family":"Open Sans","body-size-baseline":"1rem","body-size-md":"0.875rem","body-size-sm":"0.75rem","body-size-xs":"0.75rem","body-lh-baseline":"1.5rem","body-lh-md":"1.313rem","body-lh-sm":"1.125rem","body-lh-xs":"1.125rem","body-ls-baseline":"0rem","body-ls-md":"0rem","body-ls-sm":"0rem","body-ls-xs":"0rem","form-label-size":"0.875rem","form-description-size":"0.875rem","form-label-lh":"1.313rem","form-description-lh":"1.313rem","form-label-ls":"0rem","form-description-ls":"0rem"}},defaultValue:"default"},En=e=>r=>{var t;const n=r.theme,o=jt(Cn,null==n?void 0:n.fontScheme);return(null===(t=null==n?void 0:n.overrides)||void 0===t?void 0:t.fontSpec)?Lt(o,e,n.overrides.fontSpec):o[e]},Sn={"heading-size-xxl":En("heading-size-xxl"),"heading-size-xl":En("heading-size-xl"),"heading-size-lg":En("heading-size-lg"),"heading-size-md":En("heading-size-md"),"heading-size-sm":En("heading-size-sm"),"heading-size-xs":En("heading-size-xs"),"heading-lh-xxl":En("heading-lh-xxl"),"heading-lh-xl":En("heading-lh-xl"),"heading-lh-lg":En("heading-lh-lg"),"heading-lh-md":En("heading-lh-md"),"heading-lh-sm":En("heading-lh-sm"),"heading-lh-xs":En("heading-lh-xs"),"heading-ls-xxl":En("heading-ls-xxl"),"heading-ls-xl":En("heading-ls-xl"),"heading-ls-lg":En("heading-ls-lg"),"heading-ls-md":En("heading-ls-md"),"heading-ls-sm":En("heading-ls-sm"),"heading-ls-xs":En("heading-ls-xs"),"weight-light":En("weight-light"),"weight-regular":En("weight-regular"),"weight-semibold":En("weight-semibold"),"weight-bold":En("weight-bold"),"font-family":En("font-family"),"body-size-baseline":En("body-size-baseline"),"body-size-md":En("body-size-md"),"body-size-sm":En("body-size-sm"),"body-size-xs":En("body-size-xs"),"body-lh-baseline":En("body-lh-baseline"),"body-lh-md":En("body-lh-md"),"body-lh-sm":En("body-lh-sm"),"body-lh-xs":En("body-lh-xs"),"body-ls-baseline":En("body-ls-baseline"),"body-ls-md":En("body-ls-md"),"body-ls-sm":En("body-ls-sm"),"body-ls-xs":En("body-ls-xs"),"form-label-size":En("form-label-size"),"form-description-size":En("form-description-size"),"form-label-lh":En("form-label-lh"),"form-description-lh":En("form-description-lh"),"form-label-ls":En("form-label-ls"),"form-description-ls":En("form-description-ls")},Dn=(e,r,t,n,o)=>{const{disableLigatures:i}=o||{};return C`
        font-family: ${En("font-family")};
        font-size: ${En(e)};
        font-weight: ${En(r)};
        line-height: ${En(t)};
        letter-spacing: ${En(n)};

        font-variant: ${i?"no-common-ligatures":"normal"};
    `},kn=(e={})=>({"heading-xxl-light":Dn("heading-size-xxl","weight-light","heading-lh-xxl","heading-ls-xxl",e),"heading-xxl-regular":Dn("heading-size-xxl","weight-regular","heading-lh-xxl","heading-ls-xxl",e),"heading-xxl-semibold":Dn("heading-size-xxl","weight-semibold","heading-lh-xxl","heading-ls-xxl",e),"heading-xxl-bold":Dn("heading-size-xxl","weight-bold","heading-lh-xxl","heading-ls-xxl",e),"heading-xl-light":Dn("heading-size-xl","weight-light","heading-lh-xl","heading-ls-xl",e),"heading-xl-regular":Dn("heading-size-xl","weight-regular","heading-lh-xl","heading-ls-xl",e),"heading-xl-semibold":Dn("heading-size-xl","weight-semibold","heading-lh-xl","heading-ls-xl",e),"heading-xl-bold":Dn("heading-size-xl","weight-bold","heading-lh-xl","heading-ls-xl",e),"heading-lg-light":Dn("heading-size-lg","weight-light","heading-lh-lg","heading-ls-lg",e),"heading-lg-regular":Dn("heading-size-lg","weight-regular","heading-lh-lg","heading-ls-lg",e),"heading-lg-semibold":Dn("heading-size-lg","weight-semibold","heading-lh-lg","heading-ls-lg",e),"heading-lg-bold":Dn("heading-size-lg","weight-bold","heading-lh-lg","heading-ls-lg",e),"heading-md-light":Dn("heading-size-md","weight-light","heading-lh-md","heading-ls-md",e),"heading-md-regular":Dn("heading-size-md","weight-regular","heading-lh-md","heading-ls-md",e),"heading-md-semibold":Dn("heading-size-md","weight-semibold","heading-lh-md","heading-ls-md",e),"heading-md-bold":Dn("heading-size-md","weight-bold","heading-lh-md","heading-ls-md",e),"heading-sm-light":Dn("heading-size-sm","weight-light","heading-lh-sm","heading-ls-sm",e),"heading-sm-regular":Dn("heading-size-sm","weight-regular","heading-lh-sm","heading-ls-sm",e),"heading-sm-semibold":Dn("heading-size-sm","weight-semibold","heading-lh-sm","heading-ls-sm",e),"heading-sm-bold":Dn("heading-size-sm","weight-bold","heading-lh-sm","heading-ls-sm",e),"heading-xs-light":Dn("heading-size-xs","weight-light","heading-lh-xs","heading-ls-xs",e),"heading-xs-regular":Dn("heading-size-xs","weight-regular","heading-lh-xs","heading-ls-xs",e),"heading-xs-semibold":Dn("heading-size-xs","weight-semibold","heading-lh-xs","heading-ls-xs",e),"heading-xs-bold":Dn("heading-size-xs","weight-bold","heading-lh-xs","heading-ls-xs",e),"body-baseline-light":Dn("body-size-baseline","weight-light","body-lh-baseline","body-ls-baseline",e),"body-baseline-regular":Dn("body-size-baseline","weight-regular","body-lh-baseline","body-ls-baseline",e),"body-baseline-semibold":Dn("body-size-baseline","weight-semibold","body-lh-baseline","body-ls-baseline",e),"body-baseline-bold":Dn("body-size-baseline","weight-bold","body-lh-baseline","body-ls-baseline",e),"body-md-light":Dn("body-size-md","weight-light","body-lh-md","body-ls-md",e),"body-md-regular":Dn("body-size-md","weight-regular","body-lh-md","body-ls-md",e),"body-md-semibold":Dn("body-size-md","weight-semibold","body-lh-md","body-ls-md",e),"body-md-bold":Dn("body-size-md","weight-bold","body-lh-md","body-ls-md",e),"body-sm-light":Dn("body-size-sm","weight-light","body-lh-sm","body-ls-sm",e),"body-sm-regular":Dn("body-size-sm","weight-regular","body-lh-sm","body-ls-sm",e),"body-sm-semibold":Dn("body-size-sm","weight-semibold","body-lh-sm","body-ls-sm",e),"body-sm-bold":Dn("body-size-sm","weight-bold","body-lh-sm","body-ls-sm",e),"body-xs-light":Dn("body-size-xs","weight-light","body-lh-xs","body-ls-xs",e),"body-xs-regular":Dn("body-size-xs","weight-regular","body-lh-xs","body-ls-xs",e),"body-xs-semibold":Dn("body-size-xs","weight-semibold","body-lh-xs","body-ls-xs",e),"body-xs-bold":Dn("body-size-xs","weight-bold","body-lh-xs","body-ls-xs",e),"form-label":Dn("form-label-size","weight-semibold","form-label-lh","form-label-ls",e),"form-description":Dn("form-description-size","weight-regular","form-description-lh","form-description-ls",e)}),Bn=kn({disableLigatures:!0}),Tn=kn(),zn=kn({disableLigatures:!0}),In=kn({disableLigatures:!0}),An=kn({disableLigatures:!0}),On={collections:{default:Tn,bookingsg:Bn,mylegacy:Tn,pa:zn,a11yplayground:In,supportgowhere:An,sgwdigitallobby:An,imda:kn({disableLigatures:!0}),spf:kn({disableLigatures:!0}),oneservice:kn()},defaultValue:"default"},Mn=e=>r=>{var t;const n=r.theme,o=jt(On,null==n?void 0:n.fontScheme),i=(null===(t=null==n?void 0:n.overrides)||void 0===t?void 0:t.font)?Lt(o,e,n.overrides.font):o[e];return"function"==typeof i?i(r):i},Hn={"heading-xxl-light":Mn("heading-xxl-light"),"heading-xxl-regular":Mn("heading-xxl-regular"),"heading-xxl-semibold":Mn("heading-xxl-semibold"),"heading-xxl-bold":Mn("heading-xxl-bold"),"heading-xl-light":Mn("heading-xl-light"),"heading-xl-regular":Mn("heading-xl-regular"),"heading-xl-semibold":Mn("heading-xl-semibold"),"heading-xl-bold":Mn("heading-xl-bold"),"heading-lg-light":Mn("heading-lg-light"),"heading-lg-regular":Mn("heading-lg-regular"),"heading-lg-semibold":Mn("heading-lg-semibold"),"heading-lg-bold":Mn("heading-lg-bold"),"heading-md-light":Mn("heading-md-light"),"heading-md-regular":Mn("heading-md-regular"),"heading-md-semibold":Mn("heading-md-semibold"),"heading-md-bold":Mn("heading-md-bold"),"heading-sm-light":Mn("heading-sm-light"),"heading-sm-regular":Mn("heading-sm-regular"),"heading-sm-semibold":Mn("heading-sm-semibold"),"heading-sm-bold":Mn("heading-sm-bold"),"heading-xs-light":Mn("heading-xs-light"),"heading-xs-regular":Mn("heading-xs-regular"),"heading-xs-semibold":Mn("heading-xs-semibold"),"heading-xs-bold":Mn("heading-xs-bold"),"body-baseline-light":Mn("body-baseline-light"),"body-baseline-regular":Mn("body-baseline-regular"),"body-baseline-semibold":Mn("body-baseline-semibold"),"body-baseline-bold":Mn("body-baseline-bold"),"body-md-light":Mn("body-md-light"),"body-md-regular":Mn("body-md-regular"),"body-md-semibold":Mn("body-md-semibold"),"body-md-bold":Mn("body-md-bold"),"body-sm-light":Mn("body-sm-light"),"body-sm-regular":Mn("body-sm-regular"),"body-sm-semibold":Mn("body-sm-semibold"),"body-sm-bold":Mn("body-sm-bold"),"body-xs-light":Mn("body-xs-light"),"body-xs-regular":Mn("body-xs-regular"),"body-xs-semibold":Mn("body-xs-semibold"),"body-xs-bold":Mn("body-xs-bold"),"form-label":Mn("form-label"),"form-description":Mn("form-description")},Rn={collections:{default:{"duration-150":"150ms","duration-250":"250ms","duration-350":"350ms","duration-500":"500ms","duration-800":"800ms","duration-1000":"1000ms","ease-default":"cubic-bezier(0.45, 0.05, 0.55, 0.95)","ease-standard":"cubic-bezier(0.86, 0, 0.07, 1)","ease-entrance":"cubic-bezier(0.18, 0.13, 0, 1)","ease-exit":"cubic-bezier(1, 0, 0.8, 0.85)"}},defaultValue:"default"},Ln=e=>r=>{var t;const n=r.theme,o=jt(Rn,null==n?void 0:n.motionScheme);return(null===(t=null==n?void 0:n.overrides)||void 0===t?void 0:t.motion)?Lt(o,e,n.overrides.motion):o[e]},jn={"duration-150":Ln("duration-150"),"duration-250":Ln("duration-250"),"duration-350":Ln("duration-350"),"duration-500":Ln("duration-500"),"duration-800":Ln("duration-800"),"duration-1000":Ln("duration-1000"),"ease-default":Ln("ease-default"),"ease-standard":Ln("ease-standard"),"ease-entrance":Ln("ease-entrance"),"ease-exit":Ln("ease-exit")},_n={collections:{default:{none:0,xs:2,sm:4,md:8,lg:12,full:9999},spf:{none:0,xs:2,sm:8,md:8,lg:12,full:9999}},defaultValue:"default"},Wn=e=>r=>{var t;const n=r.theme,o=jt(_n,null==n?void 0:n.radiusScheme);return(null===(t=null==n?void 0:n.overrides)||void 0===t?void 0:t.radius)?`${Lt(o,e,n.overrides.radius)}px`:`${o[e]}px`},Nn={none:Wn("none"),xs:Wn("xs"),sm:Wn("sm"),md:Wn("md"),lg:Wn("lg"),full:Wn("full")},Pn={collections:{default:{"spacing-0":0,"spacing-4":4,"spacing-8":8,"spacing-12":12,"spacing-16":16,"spacing-20":20,"spacing-24":24,"spacing-32":32,"spacing-40":40,"spacing-48":48,"spacing-64":64,"spacing-72":72,"layout-xs":8,"layout-sm":16,"layout-md":24,"layout-lg":32,"layout-xl":48,"layout-xxl":64,"layout-xxxl":128}},defaultValue:"default"},Yn=e=>r=>{var t;const n=r.theme,o=jt(Pn,null==n?void 0:n.spacingScheme);return(null===(t=null==n?void 0:n.overrides)||void 0===t?void 0:t.spacing)?`${Lt(o,e,n.overrides.spacing)}px`:`${o[e]}px`},Vn={"spacing-0":Yn("spacing-0"),"spacing-4":Yn("spacing-4"),"spacing-8":Yn("spacing-8"),"spacing-12":Yn("spacing-12"),"spacing-16":Yn("spacing-16"),"spacing-20":Yn("spacing-20"),"spacing-24":Yn("spacing-24"),"spacing-32":Yn("spacing-32"),"spacing-40":Yn("spacing-40"),"spacing-48":Yn("spacing-48"),"spacing-64":Yn("spacing-64"),"spacing-72":Yn("spacing-72"),"layout-xs":Yn("layout-xs"),"layout-sm":Yn("layout-sm"),"layout-md":Yn("layout-md"),"layout-lg":Yn("layout-lg"),"layout-xl":Yn("layout-xl"),"layout-xxl":Yn("layout-xxl"),"layout-xxxl":Yn("layout-xxxl")},Un=(e,r)=>Object.assign(Object.assign({},e),{colourMode:r}),Zn=Object.assign(Object.assign({},mn),{Primitive:on}),Gn=Object.assign(Object.assign({},Hn),{Spec:Sn}),qn=jn,Xn=Object.assign(Object.assign({},Nt),{Util:yn}),Kn=Vn,Jn=Nn,Qn=wn,eo=Fn,ro={colourScheme:"lifesg",fontScheme:"default",motionScheme:"default",borderScheme:"default",spacingScheme:"default",radiusScheme:"default",shadowScheme:"default",breakpointScheme:"default",resourceScheme:"lifesg",componentScheme:"lifesg",_v2:{colorScheme:"base",textStyleScheme:"base",designTokenScheme:"base",resourceScheme:"base"}},to={colourScheme:"bookingsg",fontScheme:"bookingsg",motionScheme:"default",borderScheme:"default",spacingScheme:"default",radiusScheme:"default",shadowScheme:"default",breakpointScheme:"default",resourceScheme:"bookingsg",_v2:{colorScheme:"bookingsg",textStyleScheme:"base",designTokenScheme:"base",resourceScheme:"bookingsg"}},no={colourScheme:"ccube",fontScheme:"default",motionScheme:"default",borderScheme:"default",spacingScheme:"default",radiusScheme:"default",shadowScheme:"default",breakpointScheme:"default",resourceScheme:"ccube",_v2:{colorScheme:"ccube",textStyleScheme:"base",designTokenScheme:"base",resourceScheme:"ccube"}},oo={colourScheme:"mylegacy",fontScheme:"mylegacy",motionScheme:"default",borderScheme:"default",spacingScheme:"default",radiusScheme:"default",shadowScheme:"default",breakpointScheme:"default",resourceScheme:"mylegacy",_v2:{colorScheme:"mylegacy",textStyleScheme:"base",designTokenScheme:"base",resourceScheme:"mylegacy"}},io={colourScheme:"rbs",fontScheme:"default",motionScheme:"default",borderScheme:"default",spacingScheme:"default",radiusScheme:"default",shadowScheme:"default",breakpointScheme:"default",resourceScheme:"rbs",_v2:{colorScheme:"rbs",textStyleScheme:"base",designTokenScheme:"rbs",resourceScheme:"rbs"}},ao={colourScheme:"oneservice",fontScheme:"oneservice",motionScheme:"default",borderScheme:"default",spacingScheme:"default",radiusScheme:"default",shadowScheme:"default",breakpointScheme:"default",resourceScheme:"oneservice"},so={colourScheme:"pa",fontScheme:"pa",motionScheme:"default",borderScheme:"default",spacingScheme:"default",radiusScheme:"default",shadowScheme:"default",breakpointScheme:"default",resourceScheme:"pa",componentScheme:"pa"},lo={colourScheme:"a11yplayground",fontScheme:"a11yplayground",motionScheme:"default",borderScheme:"default",spacingScheme:"default",radiusScheme:"default",shadowScheme:"default",breakpointScheme:"default",resourceScheme:"a11yplayground",componentScheme:"a11yplayground"},co={colourScheme:"supportgowhere",fontScheme:"supportgowhere",motionScheme:"default",borderScheme:"default",spacingScheme:"default",radiusScheme:"default",shadowScheme:"default",breakpointScheme:"default",resourceScheme:"supportgowhere",componentScheme:"default"},uo={colourScheme:"supportgowhere",fontScheme:"sgwdigitallobby",motionScheme:"default",borderScheme:"default",spacingScheme:"default",radiusScheme:"default",shadowScheme:"default",breakpointScheme:"default",resourceScheme:"supportgowhere",componentScheme:"default"},go={colourScheme:"imda",fontScheme:"imda",motionScheme:"default",borderScheme:"default",spacingScheme:"default",radiusScheme:"default",shadowScheme:"default",breakpointScheme:"default",resourceScheme:"imda",componentScheme:"default"},ho={colourScheme:"spf",fontScheme:"spf",motionScheme:"default",borderScheme:"default",spacingScheme:"default",radiusScheme:"spf",shadowScheme:"default",breakpointScheme:"default",resourceScheme:"spf",componentScheme:"spf"};Object.assign(Object.assign({},ro),{light:Un(ro,"light"),dark:Un(ro,"dark")}),Object.assign(Object.assign({},to),{light:Un(to,"light"),dark:Un(to,"dark")}),Object.assign(Object.assign({},no),{light:Un(no,"light"),dark:Un(no,"dark")}),Object.assign(Object.assign({},oo),{light:Un(oo,"light"),dark:Un(oo,"dark")}),Object.assign(Object.assign({},io),{light:Un(io,"light"),dark:Un(io,"dark")}),Object.assign(Object.assign({},ao),{light:Un(ao,"light"),dark:Un(ao,"dark")}),Object.assign(Object.assign({},so),{light:Un(so,"light"),dark:Un(so,"dark")}),Object.assign(Object.assign({},lo),{light:Un(lo,"light"),dark:Un(lo,"dark")}),Object.assign(Object.assign({},co),{light:Un(co,"light"),dark:Un(co,"dark")}),Object.assign(Object.assign({},uo),{light:Un(uo,"light"),dark:Un(uo,"dark")}),Object.assign(Object.assign({},go),{light:Un(go,"light"),dark:Un(go,"dark")}),Object.assign(Object.assign({},ho),{light:Un(ho,"light"),dark:Un(ho,"dark")});const mo=F.div`
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
                        100% - ${Gn.Spec["body-size-baseline"]} -
                            ${Kn["spacing-16"]}
                    );
                    flex: unset;
                }

                [data-id="range-container-elem2-container"] {
                    margin-top: ${Kn["spacing-8"]};
                }
            `}}
`,bo=F.div`
    width: 100%; // Force next flex item to break to next line
`,fo=F.div`
    display: flex;
    flex: 1;
    align-items: center;
`,po=F(w)`
    color: ${Zn.icon};
    width: ${Gn.Spec["body-size-baseline"]};
    height: ${Gn.Spec["body-size-baseline"]};
    flex-shrink: 0;
    margin: 0 ${Kn["spacing-8"]};
    align-self: center;
`,yo=F.div`
    position: absolute;
    background: ${e=>e.$error?Zn["border-error-focus-strong"]:Zn["border-focus-strong"]};
    height: 2px;
    // half - half padding - half icon width
    width: calc(
        50% - ${Kn["spacing-8"]} - (${Gn.Spec["body-size-baseline"]} / 2)
    );
    transition: left ${qn["duration-350"]} ${qn["ease-standard"]},
        opacity ${qn["duration-350"]} ${qn["ease-standard"]};
    left: 0;
    bottom: 0;

    ${e=>{switch(e.$position){case"start":return C`
                    opacity: 1;
                `;case"end":return C`
                    left: calc(50% + ${Kn["spacing-16"]});
                    opacity: 1;
                `;case"none":return C`
                    opacity: 0;
                `}}}

    ${e=>{if(e.$wrap)return C`
                display: none;
            `}}
`,vo=({children:t,currentActive:n,error:o,className:i,wrap:a})=>{const[s,l]=t;return e(mo,{className:i,$wrap:a,children:[r(fo,{"data-id":"range-container-elem1-container",children:s}),r(po,{}),a&&r(bo,{}),r(fo,{"data-id":"range-container-elem2-container",children:l}),r(yo,{"data-id":"range-container-indicator",$position:n,$error:o,$wrap:a})]})},xo=C`
    outline-offset: -1px;
    outline: ${Xn["width-020"]} ${Xn.solid} ${Zn["border-focus"]};
`,wo=C`
    outline-color: ${Zn["border-focus"]};
`,$o=C`
    outline-color: ${Zn["border-disabled"]};
`,Fo=C`
    outline-color: ${Zn["border-error-focus"]};
`,Co=C`
    outline: none;
`,Eo=F.div`
    border: ${Xn["width-010"]} ${Xn.solid} ${Zn.border};
    border-radius: ${Jn.sm};
    background: ${Zn.bg};

    &:focus-within {
        ${xo}
    }
    ${e=>e.$focused&&!e.$noBorder&&xo}

    ${e=>e.$readOnly?C`
                border-color: transparent;
                padding: 0;
                background: transparent !important;

                &:focus-within {
                    ${wo}
                }
                ${e.$focused&&wo}
            `:e.$disabled?C`
                background: ${Zn["bg-disabled"]};
                cursor: not-allowed;

                &:focus-within {
                    ${$o}
                }
                ${e.$focused&&$o}
            `:e.$error?C`
                border-color: ${Zn["border-error"]};

                &:focus-within {
                    ${Fo}
                }
                ${e.$focused&&Fo}
            `:void 0}
    ${e=>{if(e.$noBorder)return C`
                border-color: transparent;
                background: transparent;
                &:focus-within {
                    ${Co}
                }
            `}}
`,So=F(Eo)`
    display: flex;
    align-items: center;
    position: relative;
    height: max-content;
    width: 100%;
    padding: 0 ${Kn["spacing-16"]} 0
        ${e=>e.$readOnly?"0":Kn["spacing-16"]};
    flex-direction: ${e=>"right"===e.$position?"row-reverse":"row"};
`,Do=F.input`
    ${e=>"small"===e.$variant?Gn["body-md-regular"]:Gn["body-baseline-regular"]}
    color: ${Zn.text};
    display: block;
    background: transparent;
    border: none;
    outline: none;
    box-shadow: none;
    padding: 0;
    margin: 0;

    &:disabled {
        color: ${Zn["text-subtler"]};

        &:hover {
            cursor: not-allowed;
        }
    }

    &::placeholder,
    &::-webkit-input-placeholder {
        color: ${Zn["text-subtler"]};
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
`,ko=F.button`
    background: transparent;
    border: none;
    outline: none;

    &:focus,
    &:active {
        outline: none;
    }

    &:focus-visible {
        outline: ${Xn["width-010"]} ${Xn.solid}
            ${Zn["border-focus"]};
        border-radius: ${Jn.sm};
    }
`,Bo=F.div`
    position: relative;
`,To=F(So)`
    height: 3rem;
    gap: ${Kn["spacing-8"]};
`,zo=F(Do)`
    display: block;
    width: 100%;
    flex: 1;
`;var Io={exports:{}};Io.exports=function(){var e=1e3,r=6e4,t=36e5,n="millisecond",o="second",i="minute",a="hour",s="day",l="week",d="month",c="quarter",u="year",g="date",h="Invalid Date",m=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,b=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,f={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(e){var r=["th","st","nd","rd"],t=e%100;return"["+e+(r[(t-20)%10]||r[t]||r[0])+"]"}},p=function(e,r,t){var n=String(e);return!n||n.length>=r?e:""+Array(r+1-n.length).join(t)+e},y={s:p,z:function(e){var r=-e.utcOffset(),t=Math.abs(r),n=Math.floor(t/60),o=t%60;return(r<=0?"+":"-")+p(n,2,"0")+":"+p(o,2,"0")},m:function e(r,t){if(r.date()<t.date())return-e(t,r);var n=12*(t.year()-r.year())+(t.month()-r.month()),o=r.clone().add(n,d),i=t-o<0,a=r.clone().add(n+(i?-1:1),d);return+(-(n+(t-o)/(i?o-a:a-o))||0)},a:function(e){return e<0?Math.ceil(e)||0:Math.floor(e)},p:function(e){return{M:d,y:u,w:l,d:s,D:g,h:a,m:i,s:o,ms:n,Q:c}[e]||String(e||"").toLowerCase().replace(/s$/,"")},u:function(e){return void 0===e}},v="en",x={};x[v]=f;var w="$isDayjsObject",$=function(e){return e instanceof S||!(!e||!e[w])},F=function e(r,t,n){var o;if(!r)return v;if("string"==typeof r){var i=r.toLowerCase();x[i]&&(o=i),t&&(x[i]=t,o=i);var a=r.split("-");if(!o&&a.length>1)return e(a[0])}else{var s=r.name;x[s]=r,o=s}return!n&&o&&(v=o),o||!n&&v},C=function(e,r){if($(e))return e.clone();var t="object"==typeof r?r:{};return t.date=e,t.args=arguments,new S(t)},E=y;E.l=F,E.i=$,E.w=function(e,r){return C(e,{locale:r.$L,utc:r.$u,x:r.$x,$offset:r.$offset})};var S=function(){function f(e){this.$L=F(e.locale,null,!0),this.parse(e),this.$x=this.$x||e.x||{},this[w]=!0}var p=f.prototype;return p.parse=function(e){this.$d=function(e){var r=e.date,t=e.utc;if(null===r)return new Date(NaN);if(E.u(r))return new Date;if(r instanceof Date)return new Date(r);if("string"==typeof r&&!/Z$/i.test(r)){var n=r.match(m);if(n){var o=n[2]-1||0,i=(n[7]||"0").substring(0,3);return t?new Date(Date.UTC(n[1],o,n[3]||1,n[4]||0,n[5]||0,n[6]||0,i)):new Date(n[1],o,n[3]||1,n[4]||0,n[5]||0,n[6]||0,i)}}return new Date(r)}(e),this.init()},p.init=function(){var e=this.$d;this.$y=e.getFullYear(),this.$M=e.getMonth(),this.$D=e.getDate(),this.$W=e.getDay(),this.$H=e.getHours(),this.$m=e.getMinutes(),this.$s=e.getSeconds(),this.$ms=e.getMilliseconds()},p.$utils=function(){return E},p.isValid=function(){return!(this.$d.toString()===h)},p.isSame=function(e,r){var t=C(e);return this.startOf(r)<=t&&t<=this.endOf(r)},p.isAfter=function(e,r){return C(e)<this.startOf(r)},p.isBefore=function(e,r){return this.endOf(r)<C(e)},p.$g=function(e,r,t){return E.u(e)?this[r]:this.set(t,e)},p.unix=function(){return Math.floor(this.valueOf()/1e3)},p.valueOf=function(){return this.$d.getTime()},p.startOf=function(e,r){var t=this,n=!!E.u(r)||r,c=E.p(e),h=function(e,r){var o=E.w(t.$u?Date.UTC(t.$y,r,e):new Date(t.$y,r,e),t);return n?o:o.endOf(s)},m=function(e,r){return E.w(t.toDate()[e].apply(t.toDate("s"),(n?[0,0,0,0]:[23,59,59,999]).slice(r)),t)},b=this.$W,f=this.$M,p=this.$D,y="set"+(this.$u?"UTC":"");switch(c){case u:return n?h(1,0):h(31,11);case d:return n?h(1,f):h(0,f+1);case l:var v=this.$locale().weekStart||0,x=(b<v?b+7:b)-v;return h(n?p-x:p+(6-x),f);case s:case g:return m(y+"Hours",0);case a:return m(y+"Minutes",1);case i:return m(y+"Seconds",2);case o:return m(y+"Milliseconds",3);default:return this.clone()}},p.endOf=function(e){return this.startOf(e,!1)},p.$set=function(e,r){var t,l=E.p(e),c="set"+(this.$u?"UTC":""),h=(t={},t[s]=c+"Date",t[g]=c+"Date",t[d]=c+"Month",t[u]=c+"FullYear",t[a]=c+"Hours",t[i]=c+"Minutes",t[o]=c+"Seconds",t[n]=c+"Milliseconds",t)[l],m=l===s?this.$D+(r-this.$W):r;if(l===d||l===u){var b=this.clone().set(g,1);b.$d[h](m),b.init(),this.$d=b.set(g,Math.min(this.$D,b.daysInMonth())).$d}else h&&this.$d[h](m);return this.init(),this},p.set=function(e,r){return this.clone().$set(e,r)},p.get=function(e){return this[E.p(e)]()},p.add=function(n,c){var g,h=this;n=Number(n);var m=E.p(c),b=function(e){var r=C(h);return E.w(r.date(r.date()+Math.round(e*n)),h)};if(m===d)return this.set(d,this.$M+n);if(m===u)return this.set(u,this.$y+n);if(m===s)return b(1);if(m===l)return b(7);var f=(g={},g[i]=r,g[a]=t,g[o]=e,g)[m]||1,p=this.$d.getTime()+n*f;return E.w(p,this)},p.subtract=function(e,r){return this.add(-1*e,r)},p.format=function(e){var r=this,t=this.$locale();if(!this.isValid())return t.invalidDate||h;var n=e||"YYYY-MM-DDTHH:mm:ssZ",o=E.z(this),i=this.$H,a=this.$m,s=this.$M,l=t.weekdays,d=t.months,c=t.meridiem,u=function(e,t,o,i){return e&&(e[t]||e(r,n))||o[t].slice(0,i)},g=function(e){return E.s(i%12||12,e,"0")},m=c||function(e,r,t){var n=e<12?"AM":"PM";return t?n.toLowerCase():n};return n.replace(b,(function(e,n){return n||function(e){switch(e){case"YY":return String(r.$y).slice(-2);case"YYYY":return E.s(r.$y,4,"0");case"M":return s+1;case"MM":return E.s(s+1,2,"0");case"MMM":return u(t.monthsShort,s,d,3);case"MMMM":return u(d,s);case"D":return r.$D;case"DD":return E.s(r.$D,2,"0");case"d":return String(r.$W);case"dd":return u(t.weekdaysMin,r.$W,l,2);case"ddd":return u(t.weekdaysShort,r.$W,l,3);case"dddd":return l[r.$W];case"H":return String(i);case"HH":return E.s(i,2,"0");case"h":return g(1);case"hh":return g(2);case"a":return m(i,a,!0);case"A":return m(i,a,!1);case"m":return String(a);case"mm":return E.s(a,2,"0");case"s":return String(r.$s);case"ss":return E.s(r.$s,2,"0");case"SSS":return E.s(r.$ms,3,"0");case"Z":return o}return null}(e)||o.replace(":","")}))},p.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},p.diff=function(n,g,h){var m,b=this,f=E.p(g),p=C(n),y=(p.utcOffset()-this.utcOffset())*r,v=this-p,x=function(){return E.m(b,p)};switch(f){case u:m=x()/12;break;case d:m=x();break;case c:m=x()/3;break;case l:m=(v-y)/6048e5;break;case s:m=(v-y)/864e5;break;case a:m=v/t;break;case i:m=v/r;break;case o:m=v/e;break;default:m=v}return h?m:E.a(m)},p.daysInMonth=function(){return this.endOf(d).$D},p.$locale=function(){return x[this.$L]},p.locale=function(e,r){if(!e)return this.$L;var t=this.clone(),n=F(e,r,!0);return n&&(t.$L=n),t},p.clone=function(){return E.w(this.$d,this)},p.toDate=function(){return new Date(this.valueOf())},p.toJSON=function(){return this.isValid()?this.toISOString():null},p.toISOString=function(){return this.$d.toISOString()},p.toString=function(){return this.$d.toUTCString()},f}(),D=S.prototype;return C.prototype=D,[["$ms",n],["$s",o],["$m",i],["$H",a],["$W",s],["$M",d],["$y",u],["$D",g]].forEach((function(e){D[e[1]]=function(r){return this.$g(r,e[0],e[1])}})),C.extend=function(e,r){return e.$i||(e(r,S,C),e.$i=!0),C},C.locale=F,C.isDayjs=$,C.unix=function(e){return C(1e3*e)},C.en=x[v],C.Ls=x,C.p={},C}();var Ao,Oo,Mo,Ho=le(Io.exports);!function(e){e.transformWithSpaces=(e,r)=>{const t="(.{"+r+"})";return e.replace(/[^\dA-Z]/gi,"").replace(new RegExp(t,"g"),"$1 ").trim()},e.padValue=(e,r)=>{if("0"===e)return r?e:e.padStart(2,"0");if(""===e)return e;return parseInt(e).toString().padStart(2,"0")},e.shouldTruncateToTwoLines=(e,r)=>{const t=Math.floor(r/9);return e.length>=2*t||1===e.split(" ").length&&e.length>t},e.truncateOneLine=(e,r,t,n,o=8)=>{let i=0;r>t&&(i=Math.floor((r-t)/o));const a=n+i;if(a<e.length){const r=Math.floor(a/2);return e.substring(0,r)+" ... "+e.substring(e.length-r,e.length)}return e},e.truncateTwoLines=(e,r,t,n=1.2)=>{const o=Math.floor(2*r/(.6*t))*(2/n);if(e.length<=o)return e;const i=Math.floor(.6*o),a=Math.floor(.2*o);return`${e.substring(0,i)}...${e.substring(e.length-a)}`},e.getTextWidth=(r,t)=>{if("undefined"==typeof document)return 0;const n=(e.getTextWidth.canvas||(e.getTextWidth.canvas=document.createElement("canvas"))).getContext("2d");n.font=t;return n.measureText(r).width},e.maskValue=(e,t)=>{if(!e)return e;const{maskRange:n,unmaskRange:o,maskChar:i="•",maskRegex:a,maskTransformer:s}=t;if(s)return s(e);if(a)return e.replace(a,i);if(n){const{startIndex:t,endIndex:o}=r(n[0],n[1]);return e.substring(0,t)+i.repeat(e.substring(t,o+1).length)+e.substring(o+1)}if(o){const{startIndex:t,endIndex:n}=r(o[0],o[1]);return i.repeat(e.substring(0,t).length)+e.substring(t,n+1)+i.repeat(e.substring(n+1).length)}return e};const r=(e,r)=>e<r?{startIndex:e,endIndex:r}:{startIndex:r,endIndex:e},t=new Intl.PluralRules("en",{type:"ordinal"}),n=new Map([["one","st"],["two","nd"],["few","rd"],["other","th"]]);e.formatOrdinal=e=>{const r=t.select(e);return`${e}${n.get(r)}`},e.getMaskedDescription=(e,r,t)=>{if(!e||"masked"!==r||!t)return"";const[n,o]=t,i=n>0,a=o<e.length-1,s=i?e.substring(0,n):"",l=a?e.substring(o+1):"";return i&&a?`Starting with ${s} and ending with ${l}`:i?`Starting with ${s}`:a?`Ending with ${l}`:""}}(Ao||(Ao={})),function(e){e.AM="AM",e.PM="PM"}(Oo||(Oo={})),function(e){e.roundToNearestInterval=(e,r,t)=>{const[n,o]=e.split(":"),i=parseInt(n,10),a=parseInt(o,10);if(isNaN(i)||isNaN(a)||a<0||a>=60)throw new Error("Invalid time format");const s=60*i+a,l=s%r,d=0===l?s:t?s+(r-l):s-l,c=d%60;return`${Math.floor(d/60).toString().padStart(2,"0")}:${c.toString().padStart(2,"0")}`},e.generateHourlyIntervals=(e,r,t="ha")=>{const n="HH:mm";let o=Ho(e,n),i=Ho(r,n);o.isSame(i)&&(i=i.add(1,"day"));const a=[];for(;o.isBefore(i);)a.push(o.format(t)),o=o.add(1,"hour");return a},e.getTimeValues=(e,r)=>{const t={hour:"",minute:"",period:Oo.AM};if(!r)return t;try{if("24hr"===e){const n=_o(r,e);t.minute=Ao.padValue(n.minute);const o=parseInt(n.hour);0===Math.floor(o/12)?(t.period=Oo.AM,t.hour=0===o?"12":Ao.padValue(o.toString())):(t.period=Oo.PM,t.hour=12===o?o.toString():Ao.padValue((o-12).toString()))}else{const{hour:n,minute:o,period:i=""}=_o(r,e);t.hour=Ao.padValue(n),t.minute=Ao.padValue(o),t.period="am"===i.toLowerCase()?Oo.AM:Oo.PM}return t}catch(e){return t}},e.updateMinutes=(e,r)=>{const t=parseInt(e);if(isNaN(t))return"add"===r?Ao.padValue("0"):"55";const n=Math.floor(t/5),o=(("add"===r?n+1:t%5==0?n-1:n)%12+12)%12;return Ao.padValue((5*o).toString())},e.updateHours=(e,r)=>{const t=parseInt(e);if(isNaN(t))return"add"===r?Ao.padValue("1"):"12";const n="add"===r?t+1:t-1;return n<=12&&n>0?Ao.padValue(n.toString()):13===n?Ao.padValue("1"):"12"},e.convertTo24HourFormat=e=>{const r=parseInt(e.hour);let t;return t=e.period===Oo.PM?12===r?r.toString():(r+12).toString():12===r?"00":e.hour,`${t}:${e.minute}`},e.convertHourTo12HourFormat=e=>{const r=parseInt(e),t=r%12==0?12..toString():(r%12).toString();return Ao.padValue(t)},e.formatDisplayValue=(e,r)=>{try{const{hour:t,minute:n,period:o=""}=_o(e,r),i=Ao.padValue(t);let a=`${i}:${Ao.padValue(n)}`;return"12hr"===r?(a+=o.toLowerCase(),a):a}catch(e){return""}},e.toMinutesSeconds=e=>({minutes:Math.floor(e/60),seconds:e%60}),e.to24Hour=e=>{if((null==e?void 0:e.includes("am"))||(null==e?void 0:e.includes("pm"))){const[r,t]=e.split(/(am|pm)/i),[n,o]=r.split(":").map(Number);let i=n;return"pm"===t&&i<12&&(i+=12),"am"===t&&12===i&&(i=0),Wo(i,o)}return e},e.generateTimings=(r,t="12hr",n,o)=>{const i=[];let a=0,s=1440-r;for(n&&(a=e.timeToMinutes(n)),o&&(s=e.timeToMinutes(o));a<=s;){let e=Math.floor(a/60);const n=a%60;if("12hr"===t){const r=e>=12?"pm":"am";e%=12,e=e||12;const t=Wo(e,n,r);i.push(t)}else{const r=Wo(e,n);i.push(r)}a+=r}return i},e.parseInput=(e,r="12hr")=>{if(""===e||void 0===e)return e;const t=e.trim().toLowerCase(),n=/^(?:(\d{1,2})([:.])?(\d{2})?)?(a|p|am|pm)?$/.exec(t);if(!n)return;let o=parseInt(n[1]||"0",10);const i=parseInt(n[3]||"0",10);let a=n[4];if(void 0===n[1]||o>24||i>59)return;if("a"===a?a="am":"p"===a&&(a="pm"),"24hr"===r)return"pm"===a&&o<12?o+=12:("am"===a&&12===o||24===o)&&(o=0),Wo(o,i);a?0===o||24===o?(a="am",o=12):o>12&&(a="pm",o-=12):(a=0===o||24===o||o>6&&o<12?"am":"pm",o=o%12||12);return Wo(o,i,a)},e.findClosestFlooredTime=(r,t)=>{if(!r)return r;const n=e.timeToMinutes(r);let o="",i=1/0;for(const r of t){const t=e.timeToMinutes(r)-n;if(t<=0&&Math.abs(t)<i)i=Math.abs(t),o=r;else if(t>0)break}return o},e.timeToMinutes=e=>{const[r,t]=e.toLowerCase().split(/(am|pm)/),[n,o]=r.split(":").map(Number);let i=n;return"pm"===t&&12!==i&&(i+=12),"am"===t&&12===i&&(i=0),60*i+o},e.calculateDuration=(r,t)=>{const n=e.timeToMinutes(r);return e.timeToMinutes(t)-n},e.calculateScrollPosition=r=>{const{scrollTime:t,minTime:n,maxTime:o,interval:i,intervalWidth:a,options:s}=r;try{if(!/^([0-1]?[0-9]|2[0-3]):[0-5][0-9]$/.test(t))return console.warn(`Invalid scrollTime format: "${t}". Expected format: HH:mm.`),null;const r=(null==s?void 0:s.roundToInterval)?e.roundToNearestInterval(t,i):t,[l,d]=Ro(r);if(isNaN(l)||isNaN(d))return console.warn(`Invalid scrollTime: "${t}".`),null;const c=60*l+d,[u,g]=Ro(n),h=60*u+g,[m,b]=Ro(o);(c<h||c>60*m+b)&&console.warn(`scrollTime "${t}" is outside the range (${n} - ${o}).`);return(c-h)/i*a}catch(e){return console.warn(`Error processing scrollTime: "${t}".`,e),null}}}(Mo||(Mo={}));const Ro=e=>e.split(":").map(Number),Lo=(e,r)=>{const t=parseInt(e);return"24hr"===r?t>=0&&t<=23:t>=1&&t<=12},jo=e=>{const r=parseInt(e);return r>=0&&r<=59},_o=(e,r)=>{const t=e?e.split(":"):[],n=new Error("Invalid format");if("12hr"===r){if(2!==t.length||4!==t[1].length)throw n;const e=t[1].substring(0,2),i=t[1].substring(2);if(!Lo(t[0],r)||!jo(e)||"am"!==(o=i).toLowerCase()&&"pm"!==o.toLowerCase())throw n;return{hour:t[0],minute:e,period:t[1].substring(2)}}if(2!==t.length)throw n;if(!Lo(t[0],r)||!jo(t[1]))throw n;return{hour:t[0],minute:t[1]};var o},Wo=(e,r,t)=>t?`${e}:${r.toString().padStart(2,"0")}${t}`:`${e.toString().padStart(2,"0")}:${r.toString().padStart(2,"0")}`;var No={exports:{}};No.exports=function(){var e={LTS:"h:mm:ss A",LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D, YYYY",LLL:"MMMM D, YYYY h:mm A",LLLL:"dddd, MMMM D, YYYY h:mm A"},r=/(\[[^[]*\])|([-_:/.,()\s]+)|(A|a|YYYY|YY?|MM?M?M?|Do|DD?|hh?|HH?|mm?|ss?|S{1,3}|z|ZZ?)/g,t=/\d\d/,n=/\d\d?/,o=/\d*[^-_:/,()\s\d]+/,i={},a=function(e){return(e=+e)+(e>68?1900:2e3)},s=function(e){return function(r){this[e]=+r}},l=[/[+-]\d\d:?(\d\d)?|Z/,function(e){(this.zone||(this.zone={})).offset=function(e){if(!e)return 0;if("Z"===e)return 0;var r=e.match(/([+-]|\d\d)/g),t=60*r[1]+(+r[2]||0);return 0===t?0:"+"===r[0]?-t:t}(e)}],d=function(e){var r=i[e];return r&&(r.indexOf?r:r.s.concat(r.f))},c=function(e,r){var t,n=i.meridiem;if(n){for(var o=1;o<=24;o+=1)if(e.indexOf(n(o,0,r))>-1){t=o>12;break}}else t=e===(r?"pm":"PM");return t},u={A:[o,function(e){this.afternoon=c(e,!1)}],a:[o,function(e){this.afternoon=c(e,!0)}],S:[/\d/,function(e){this.milliseconds=100*+e}],SS:[t,function(e){this.milliseconds=10*+e}],SSS:[/\d{3}/,function(e){this.milliseconds=+e}],s:[n,s("seconds")],ss:[n,s("seconds")],m:[n,s("minutes")],mm:[n,s("minutes")],H:[n,s("hours")],h:[n,s("hours")],HH:[n,s("hours")],hh:[n,s("hours")],D:[n,s("day")],DD:[t,s("day")],Do:[o,function(e){var r=i.ordinal,t=e.match(/\d+/);if(this.day=t[0],r)for(var n=1;n<=31;n+=1)r(n).replace(/\[|\]/g,"")===e&&(this.day=n)}],M:[n,s("month")],MM:[t,s("month")],MMM:[o,function(e){var r=d("months"),t=(d("monthsShort")||r.map((function(e){return e.slice(0,3)}))).indexOf(e)+1;if(t<1)throw new Error;this.month=t%12||t}],MMMM:[o,function(e){var r=d("months").indexOf(e)+1;if(r<1)throw new Error;this.month=r%12||r}],Y:[/[+-]?\d+/,s("year")],YY:[t,function(e){this.year=a(e)}],YYYY:[/\d{4}/,s("year")],Z:l,ZZ:l};function g(t){var n,o;n=t,o=i&&i.formats;for(var a=(t=n.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g,(function(r,t,n){var i=n&&n.toUpperCase();return t||o[n]||e[n]||o[i].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g,(function(e,r,t){return r||t.slice(1)}))}))).match(r),s=a.length,l=0;l<s;l+=1){var d=a[l],c=u[d],g=c&&c[0],h=c&&c[1];a[l]=h?{regex:g,parser:h}:d.replace(/^\[|\]$/g,"")}return function(e){for(var r={},t=0,n=0;t<s;t+=1){var o=a[t];if("string"==typeof o)n+=o.length;else{var i=o.regex,l=o.parser,d=e.slice(n),c=i.exec(d)[0];l.call(r,c),e=e.replace(c,"")}}return function(e){var r=e.afternoon;if(void 0!==r){var t=e.hours;r?t<12&&(e.hours+=12):12===t&&(e.hours=0),delete e.afternoon}}(r),r}}return function(e,r,t){t.p.customParseFormat=!0,e&&e.parseTwoDigitYear&&(a=e.parseTwoDigitYear);var n=r.prototype,o=n.parse;n.parse=function(e){var r=e.date,n=e.utc,a=e.args;this.$u=n;var s=a[1];if("string"==typeof s){var l=!0===a[2],d=!0===a[3],c=l||d,u=a[2];d&&(u=a[2]),i=this.$locale(),!l&&u&&(i=t.Ls[u]),this.$d=function(e,r,t){try{if(["x","X"].indexOf(r)>-1)return new Date(("X"===r?1e3:1)*e);var n=g(r)(e),o=n.year,i=n.month,a=n.day,s=n.hours,l=n.minutes,d=n.seconds,c=n.milliseconds,u=n.zone,h=new Date,m=a||(o||i?1:h.getDate()),b=o||h.getFullYear(),f=0;o&&!i||(f=i>0?i-1:h.getMonth());var p=s||0,y=l||0,v=d||0,x=c||0;return u?new Date(Date.UTC(b,f,m,p,y,v,x+60*u.offset*1e3)):t?new Date(Date.UTC(b,f,m,p,y,v,x)):new Date(b,f,m,p,y,v,x)}catch(e){return new Date("")}}(r,s,n),this.init(),u&&!0!==u&&(this.$L=this.locale(u).$L),c&&r!=this.format(s)&&(this.$d=new Date("")),i={}}else if(s instanceof Array)for(var h=s.length,m=1;m<=h;m+=1){a[1]=s[m-1];var b=t.apply(this,a);if(b.isValid()){this.$d=b.$d,this.$L=b.$L,this.init();break}m===h&&(this.$d=new Date(""))}else o.call(this,e)}}}();var Po=le(No.exports),Yo={exports:{}};Yo.exports=function(e,r,t){r.prototype.isBetween=function(e,r,n,o){var i=t(e),a=t(r),s="("===(o=o||"()")[0],l=")"===o[1];return(s?this.isAfter(i,n):!this.isBefore(i,n))&&(l?this.isBefore(a,n):!this.isAfter(a,n))||(s?this.isBefore(i,n):!this.isAfter(i,n))&&(l?this.isAfter(a,n):!this.isBefore(a,n))}};var Vo=le(Yo.exports),Uo={exports:{}};Uo.exports=function(e,r){r.prototype.isSameOrAfter=function(e,r){return this.isSame(e,r)||this.isAfter(e,r)}};var Zo=le(Uo.exports),Go={exports:{}};Go.exports=function(e,r){r.prototype.isSameOrBefore=function(e,r){return this.isSame(e,r)||this.isBefore(e,r)}};var qo,Xo,Ko,Jo=le(Go.exports),Qo={exports:{}},ei=le(Qo.exports=(qo={year:0,month:1,day:2,hour:3,minute:4,second:5},Xo={},function(e,r,t){var n,o=function(e,r,t){void 0===t&&(t={});var n=new Date(e),o=function(e,r){void 0===r&&(r={});var t=r.timeZoneName||"short",n=e+"|"+t,o=Xo[n];return o||(o=new Intl.DateTimeFormat("en-US",{hour12:!1,timeZone:e,year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit",timeZoneName:t}),Xo[n]=o),o}(r,t);return o.formatToParts(n)},i=function(e,r){for(var n=o(e,r),i=[],a=0;a<n.length;a+=1){var s=n[a],l=s.type,d=s.value,c=qo[l];c>=0&&(i[c]=parseInt(d,10))}var u=i[3],g=24===u?0:u,h=i[0]+"-"+i[1]+"-"+i[2]+" "+g+":"+i[4]+":"+i[5]+":000",m=+e;return(t.utc(h).valueOf()-(m-=m%1e3))/6e4},a=r.prototype;a.tz=function(e,r){void 0===e&&(e=n);var o=this.utcOffset(),i=this.toDate(),a=i.toLocaleString("en-US",{timeZone:e}),s=Math.round((i-new Date(a))/1e3/60),l=t(a,{locale:this.$L}).$set("millisecond",this.$ms).utcOffset(15*-Math.round(i.getTimezoneOffset()/15)-s,!0);if(r){var d=l.utcOffset();l=l.add(o-d,"minute")}return l.$x.$timezone=e,l},a.offsetName=function(e){var r=this.$x.$timezone||t.tz.guess(),n=o(this.valueOf(),r,{timeZoneName:e}).find((function(e){return"timezonename"===e.type.toLowerCase()}));return n&&n.value};var s=a.startOf;a.startOf=function(e,r){if(!this.$x||!this.$x.$timezone)return s.call(this,e,r);var n=t(this.format("YYYY-MM-DD HH:mm:ss:SSS"),{locale:this.$L});return s.call(n,e,r).tz(this.$x.$timezone,!0)},t.tz=function(e,r,o){var a=o&&r,s=o||r||n,l=i(+t(),s);if("string"!=typeof e)return t(e).tz(s);var d=function(e,r,t){var n=e-60*r*1e3,o=i(n,t);if(r===o)return[n,r];var a=i(n-=60*(o-r)*1e3,t);return o===a?[n,o]:[e-60*Math.min(o,a)*1e3,Math.max(o,a)]}(t.utc(e,a).valueOf(),l,s),c=d[0],u=d[1],g=t(c).utcOffset(u);return g.$x.$timezone=s,g},t.tz.guess=function(){return Intl.DateTimeFormat().resolvedOptions().timeZone},t.tz.setDefault=function(e){n=e}}));Ho.extend(Vo),Ho.extend(Jo),Ho.extend(Zo),Ho.extend(Po),Ho.extend(ei),function(e){e.generateDays=e=>{const r=e.startOf("month"),t=Ho(r).startOf("week");return ri(t).map((e=>ti(e)))},e.generateDaysForCurrentWeek=e=>{const r=e.startOf("week");return ti(r)},e.generateMonths=e=>{const r=[];for(let t=0;t<12;t++){const n=e.month(t);r.push(Ho(n))}return r},e.generateDecadeOfYears=e=>{const r=e.year(),t=10*Math.floor(r/10),n=e.year(t),o=[n.subtract(1,"year"),n];for(let e=1;e<11;e++)o.push(n.add(e,"year"));return o},e.getStartEndDecade=e=>{const r=10*Math.floor(+e.format("YYYY")/10);return{beginDecade:r,endDecade:+Ho(`${r+9}-01-01`).format("YYYY")}},e.convertTo12HourFormat=e=>{const r=Ho(e,"HH:mm");return r.isValid()?r.format("h:mm a"):""},e.isWithinRange=(e,r,t,n="day")=>!r&&!t||(r&&t?e.isBetween(r,t,n,"[]"):r?e.isSameOrAfter(r,n):e.isSameOrBefore(t,n)),e.isPreviousMonthWithinRange=(r,t)=>e.isWithinRange(r.subtract(1,"month"),t,void 0,"month"),e.isPreviousYearWithinRange=(r,t)=>e.isWithinRange(r.subtract(1,"year"),t,void 0,"year"),e.isPreviousDecadeWithinRange=(r,t)=>{const{beginDecade:n}=e.getStartEndDecade(r);return e.isWithinRange(r.year(n).subtract(1,"year"),t,void 0,"year")},e.isNextMonthWithinRange=(r,t)=>e.isWithinRange(r.add(1,"month"),void 0,t,"month"),e.isNextYearWithinRange=(r,t)=>e.isWithinRange(r.add(1,"year"),void 0,t,"year"),e.isNextDecadeWithinRange=(r,t)=>{const{endDecade:n}=e.getStartEndDecade(r);return e.isWithinRange(r.year(n).add(1,"year"),void 0,t,"year")},e.getWeekStartEnd=e=>({start:e.startOf("week").format("YYYY-MM-DD"),end:e.endOf("week").format("YYYY-MM-DD")}),e.getFixedRangeStartEnd=(e,r)=>({start:e.format("YYYY-MM-DD"),end:e.add(r-1,"day").format("YYYY-MM-DD")}),e.isDisabledDay=(r,t,n,o)=>{const i=e.isWithinRange(r,n?Ho(n):void 0,o?Ho(o):void 0),a=t&&t.includes(r.format("YYYY-MM-DD"));return!i||!!a}}(Ko||(Ko={}));const ri=e=>{const r=[e];for(let t=1;t<6;t++){const n=e.add(t,"week");r.push(n)}return r},ti=e=>{const r=[];for(let t=0;t<7;t++){const n=e.add(t,"day");r.push(n)}return r},ni=[1,3,5,7,8,10,12],oi=[4,6,9,11];var ii,ai;!function(e){e.clampDay=(r,t,n)=>{const o=parseInt(r),i=parseInt(t),a=parseInt(n);return 0==o?"1":ni.includes(i)?Math.min(o,31).toString():oi.includes(i)?Math.min(o,30).toString():2===i?e.isLeapYear(a)?Math.min(o,29).toString():Math.min(o,28).toString():r},e.clampMonth=e=>{const r=parseInt(e);return 0==r?"1":r>12?"12":e},e.isLeapYear=e=>e%4==0&&e%100!=0||e%400==0,e.getTimeDiffInMinutes=(e,r,t="HH:mm")=>{const n=Ho(e,t);return Ho(r,t).diff(n,"minute")},e.toDayjs=e=>e?Ho(e):Ho(),e.addMinutesToTime=(e,r,t="HH:mm")=>Ho(e,t).add(r,"minutes").format(t),e.isSame=(e,r,t="day")=>Ho(e).isSame(Ho(r),t)}(ii||(ii={})),function(e){e.isDateDisabled=(e,r)=>{const{disabledDates:t,minDate:n,maxDate:o}=r;return!!(e&&t&&t.length&&t.includes(e))||(!(!n||!Ho(e).isBefore(n,"day"))||!(!o||!Ho(e).isAfter(o,"day")))},e.sanitizeInput=e=>{if(e){const t=r(e);if(Ho(t,"YYYY-MM-DD",!0).isValid())return t}return""};const r=e=>{const r=e.match(/^(\d{1,4})-(\d{1,2})-(\d{1,2})$/);if(!r)return"";const[,t,n,o]=r;if(t.length<=2||parseInt(t,10)<100)return"";return`${t.padStart(4,"0")}-${n.padStart(2,"0")}-${o.padStart(2,"0")}`}}(ai||(ai={}));const si=()=>{const e=i.split(".");return parseInt(e[0],10)>=19},li=(...e)=>r=>{const t=[];for(const n of e)if("function"==typeof n){const e=n(r),o="function"==typeof e;t.push(o?e:()=>n(null))}else n.current=r,t.push((()=>{n.current=null}));if(si())return()=>{for(const e of t)e()}};var di;!function(e){e.generate=()=>Math.random().toString(36).substring(2,9)}(di||(di={}));var ci=function(e,r){return ci=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,r){e.__proto__=r}||function(e,r){for(var t in r)Object.prototype.hasOwnProperty.call(r,t)&&(e[t]=r[t])},ci(e,r)};var ui=function(){return ui=Object.assign||function(e){for(var r,t=1,n=arguments.length;t<n;t++)for(var o in r=arguments[t])Object.prototype.hasOwnProperty.call(r,o)&&(e[o]=r[o]);return e},ui.apply(this,arguments)};var gi="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};var hi=function(e){var r=typeof e;return null!=e&&("object"==r||"function"==r)},mi="object"==typeof gi&&gi&&gi.Object===Object&&gi,bi="object"==typeof self&&self&&self.Object===Object&&self,fi=mi||bi||Function("return this")(),pi=fi,yi=function(){return pi.Date.now()},vi=/\s/;var xi=function(e){for(var r=e.length;r--&&vi.test(e.charAt(r)););return r},wi=/^\s+/;var $i=function(e){return e?e.slice(0,xi(e)+1).replace(wi,""):e},Fi=fi.Symbol,Ci=Fi,Ei=Object.prototype,Si=Ei.hasOwnProperty,Di=Ei.toString,ki=Ci?Ci.toStringTag:void 0;var Bi=function(e){var r=Si.call(e,ki),t=e[ki];try{e[ki]=void 0;var n=!0}catch(e){}var o=Di.call(e);return n&&(r?e[ki]=t:delete e[ki]),o},Ti=Object.prototype.toString;var zi=Bi,Ii=function(e){return Ti.call(e)},Ai=Fi?Fi.toStringTag:void 0;var Oi=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":Ai&&Ai in Object(e)?zi(e):Ii(e)},Mi=function(e){return null!=e&&"object"==typeof e};var Hi=$i,Ri=hi,Li=function(e){return"symbol"==typeof e||Mi(e)&&"[object Symbol]"==Oi(e)},ji=/^[-+]0x[0-9a-f]+$/i,_i=/^0b[01]+$/i,Wi=/^0o[0-7]+$/i,Ni=parseInt;var Pi=hi,Yi=yi,Vi=function(e){if("number"==typeof e)return e;if(Li(e))return NaN;if(Ri(e)){var r="function"==typeof e.valueOf?e.valueOf():e;e=Ri(r)?r+"":r}if("string"!=typeof e)return 0===e?e:+e;e=Hi(e);var t=_i.test(e);return t||Wi.test(e)?Ni(e.slice(2),t?2:8):ji.test(e)?NaN:+e},Ui=Math.max,Zi=Math.min;var Gi=function(e,r,t){var n,o,i,a,s,l,d=0,c=!1,u=!1,g=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function h(r){var t=n,i=o;return n=o=void 0,d=r,a=e.apply(i,t)}function m(e){var t=e-l;return void 0===l||t>=r||t<0||u&&e-d>=i}function b(){var e=Yi();if(m(e))return f(e);s=setTimeout(b,function(e){var t=r-(e-l);return u?Zi(t,i-(e-d)):t}(e))}function f(e){return s=void 0,g&&n?h(e):(n=o=void 0,a)}function p(){var e=Yi(),t=m(e);if(n=arguments,o=this,l=e,t){if(void 0===s)return function(e){return d=e,s=setTimeout(b,r),c?h(e):a}(l);if(u)return clearTimeout(s),s=setTimeout(b,r),h(l)}return void 0===s&&(s=setTimeout(b,r)),a}return r=Vi(r)||0,Pi(t)&&(c=!!t.leading,i=(u="maxWait"in t)?Ui(Vi(t.maxWait)||0,r):i,g="trailing"in t?!!t.trailing:g),p.cancel=function(){void 0!==s&&clearTimeout(s),d=0,n=l=o=s=void 0},p.flush=function(){return void 0===s?a:f(Yi())},p},qi=Gi,Xi=hi;var Ki=function(e,r,t){var n=!0,o=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return Xi(t)&&(n="leading"in t?!!t.leading:n,o="trailing"in t?!!t.trailing:o),qi(e,r,{leading:n,maxWait:r,trailing:o})},Ji=function(e,r,t,n){switch(r){case"debounce":return Gi(e,t,n);case"throttle":return Ki(e,t,n);default:return e}},Qi=function(e){return"function"==typeof e},ea=function(){return"undefined"==typeof window},ra=function(e){return e instanceof Element||e instanceof HTMLDocument},ta=function(e,r,t,n){return function(o){var i=o.width,a=o.height;r((function(r){return r.width===i&&r.height===a||r.width===i&&!n||r.height===a&&!t?r:(e&&Qi(e)&&e(i,a),{width:i,height:a})}))}};!function(e){function r(r){var t=e.call(this,r)||this;t.cancelHandler=function(){t.resizeHandler&&t.resizeHandler.cancel&&(t.resizeHandler.cancel(),t.resizeHandler=null)},t.attachObserver=function(){var e=t.props,r=e.targetRef,n=e.observerOptions;if(!ea()){r&&r.current&&(t.targetRef.current=r.current);var o=t.getElement();o&&(t.observableElement&&t.observableElement===o||(t.observableElement=o,t.resizeObserver.observe(o,n)))}},t.getElement=function(){var e=t.props,r=e.querySelector,n=e.targetDomEl;if(ea())return null;if(r)return document.querySelector(r);if(n&&ra(n))return n;if(t.targetRef&&ra(t.targetRef.current))return t.targetRef.current;var o=M(t);if(!o)return null;switch(t.getRenderType()){case"renderProp":case"childFunction":case"child":case"childArray":return o;default:return o.parentElement}},t.createResizeHandler=function(e){var r=t.props,n=r.handleWidth,o=void 0===n||n,i=r.handleHeight,a=void 0===i||i,s=r.onResize;if(o||a){var l=ta(s,t.setState.bind(t),o,a);e.forEach((function(e){var r=e&&e.contentRect||{},n=r.width,o=r.height;!t.skipOnMount&&!ea()&&l({width:n,height:o}),t.skipOnMount=!1}))}},t.getRenderType=function(){var e=t.props,r=e.render,n=e.children;return Qi(r)?"renderProp":Qi(n)?"childFunction":l(n)?"child":Array.isArray(n)?"childArray":"parent"};var n=r.skipOnMount,o=r.refreshMode,i=r.refreshRate,a=void 0===i?1e3:i,s=r.refreshOptions;return t.state={width:void 0,height:void 0},t.skipOnMount=n,t.targetRef=d(),t.observableElement=null,ea()||(t.resizeHandler=Ji(t.createResizeHandler,o,a,s),t.resizeObserver=new window.ResizeObserver(t.resizeHandler)),t}(function(e,r){if("function"!=typeof r&&null!==r)throw new TypeError("Class extends value "+String(r)+" is not a constructor or null");function t(){this.constructor=e}ci(e,r),e.prototype=null===r?Object.create(r):(t.prototype=r.prototype,new t)})(r,e),r.prototype.componentDidMount=function(){this.attachObserver()},r.prototype.componentDidUpdate=function(){this.attachObserver()},r.prototype.componentWillUnmount=function(){ea()||(this.observableElement=null,this.resizeObserver.disconnect(),this.cancelHandler())},r.prototype.render=function(){var e,r=this.props,t=r.render,o=r.children,i=r.nodeType,a=void 0===i?"div":i,s=this.state,l={width:s.width,height:s.height,targetRef:this.targetRef};switch(this.getRenderType()){case"renderProp":return t&&t(l);case"childFunction":return(e=o)(l);case"child":if((e=o).type&&"string"==typeof e.type){var d=function(e,r){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(n=Object.getOwnPropertySymbols(e);o<n.length;o++)r.indexOf(n[o])<0&&Object.prototype.propertyIsEnumerable.call(e,n[o])&&(t[n[o]]=e[n[o]])}return t}(l,["targetRef"]);return c(e,d)}return c(e,l);case"childArray":return(e=o).map((function(e){return!!e&&c(e,l)}));default:return n.createElement(a,null)}}}(u);var na=ea()?g:h;function oa(e){void 0===e&&(e={});var r=e.skipOnMount,t=void 0!==r&&r,n=e.refreshMode,o=e.refreshRate,i=void 0===o?1e3:o,l=e.refreshOptions,d=e.handleWidth,c=void 0===d||d,u=e.handleHeight,g=void 0===u||u,h=e.targetRef,m=e.observerOptions,b=e.onResize,f=a(t),p=a(null),y=null!=h?h:p,v=a(),x=s({width:void 0,height:void 0}),w=x[0],$=x[1];return na((function(){if(!ea()){var e=ta(b,$,c,g);v.current=Ji((function(r){(c||g)&&r.forEach((function(r){var t=r&&r.contentRect||{},n=t.width,o=t.height;!f.current&&!ea()&&e({width:n,height:o}),f.current=!1}))}),n,i,l);var r=new window.ResizeObserver(v.current);return y.current&&r.observe(y.current,m),function(){r.disconnect();var e=v.current;e&&e.cancel&&e.cancel()}}}),[n,i,l,c,g,b,m,y.current]),ui({ref:y},w)}function ia(e){const r=a(null);h((()=>{r.current=e}),[e]);return m(((...e)=>{var t;return null===(t=r.current)||void 0===t?void 0:t.call(r,...e)}),[])}const aa=e=>{const r=(e=>{const r=a(e),t=a();return g((()=>{t.current=r.current,r.current=e}),[e]),t.current})(e);return r!==e};F.span`
    clip-path: inset(50%);
    height: 1px;
    width: 1px;
    overflow: hidden;
    position: absolute;
    white-space: nowrap;
`;const sa=e=>si()?e:e?"true":void 0,la=F.div`
    display: inline-block;
    position: relative;
    width: ${({$size:e})=>e?`${e}px`:"1em"};
    height: ${({$size:e})=>e?`${e}px`:"1em"};
    color: ${e=>e.$color||"currentColor"};
`,da=E`
	0% {
	  transform: rotate(0deg);
	}
	100% {
	  transform: rotate(360deg);
	}
`,ca=F.div`
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
    animation: ${da} 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
`,ua=F(ca)`
    animation-delay: -0.45s;
`,ga=F(ca)`
    animation-delay: -0.3s;
`,ha=F(ca)`
    animation-delay: -0.15s;
`,ma=({color:t,className:n,size:o})=>e(la,{className:n,$size:o,$color:t,"data-testid":"component-loading-spinner",children:[r(ca,{id:"inner1"}),r(ua,{id:"inner2"}),r(ga,{id:"inner3"}),r(ha,{id:"inner4"})]}),ba={Button:{"button-radius":Nn.md,"button-default-colour-bg":mn["bg-primary"],"button-default-colour-bg-hover":mn["bg-primary-hover"],"button-default-colour-text":mn["text-inverse"],"button-secondary-colour-border":mn["border-primary"],"button-secondary-colour-text":mn["text-primary"],"button-light-colour-text":mn["text-primary"],"button-link-colour-text":mn["text-primary"]},Animation:{"loading-dots-spinner-colour":mn["icon-primary"]},Navbar:{"navbar-full-height":"6rem","navbar-full-logo-height":"2rem","navbar-compressed-height":"4rem","navbar-compressed-logo-height":"1.5rem","navbar-mobile-height":"3.5rem","navbar-mobile-logo-height":"1.5rem","navbar-colour-bg":mn.bg,"navbar-colour-icon":mn.icon,"navbar-link-colour-text":mn.text,"navbar-link-colour-text-hover":mn["text-hover"],"navbar-link-colour-text-selected-hover":mn["text-selected-hover"]},Footer:{"footer-colour-bg":mn["bg-strong"],"footer-colour-text":mn.text,"footer-link-colour-text":mn.text,"footer-link-colour-text-hover":mn["text-hover"],"footer-disclaimer-link-colour-text":mn.text,"footer-disclaimer-link-colour-text-hover":mn["text-subtler"]}},fa={Button:{"button-radius":Nn.sm,"button-default-colour-bg":mn["bg-primary"],"button-default-colour-bg-hover":mn["bg-primary-hover"],"button-default-colour-text":mn["text-inverse"],"button-secondary-colour-border":mn["border-primary"],"button-secondary-colour-text":mn["text-primary"],"button-light-colour-text":mn["text-primary"],"button-link-colour-text":mn["text-primary"]},Animation:{"loading-dots-spinner-colour":mn["icon-primary"]},Navbar:{"navbar-full-height":"6rem","navbar-full-logo-height":"2rem","navbar-compressed-height":"4rem","navbar-compressed-logo-height":"1.5rem","navbar-mobile-height":"3.5rem","navbar-mobile-logo-height":"1.5rem","navbar-colour-bg":mn.bg,"navbar-colour-icon":mn.icon,"navbar-link-colour-text":mn.text,"navbar-link-colour-text-hover":mn["text-hover"],"navbar-link-colour-text-selected-hover":mn["text-selected-hover"]},Footer:{"footer-colour-bg":mn["bg-strong"],"footer-colour-text":mn.text,"footer-link-colour-text":mn.text,"footer-link-colour-text-hover":mn["text-hover"],"footer-disclaimer-link-colour-text":mn.text,"footer-disclaimer-link-colour-text-hover":mn["text-subtler"]}},pa={Button:{"button-radius":Nn.sm,"button-default-colour-bg":mn["bg-primary"],"button-default-colour-bg-hover":mn["bg-primary-hover"],"button-default-colour-text":mn["text-inverse"],"button-secondary-colour-border":mn["border-primary"],"button-secondary-colour-text":mn["text-primary"],"button-light-colour-text":mn["text-primary"],"button-link-colour-text":mn["text-primary"]},Animation:{"loading-dots-spinner-colour":Zn.Primitive["brand-50"]},Navbar:{"navbar-full-height":"6rem","navbar-full-logo-height":"2rem","navbar-compressed-height":"4rem","navbar-compressed-logo-height":"1.5rem","navbar-mobile-height":"3.5rem","navbar-mobile-logo-height":"1.5rem","navbar-colour-bg":mn.bg,"navbar-colour-icon":mn.icon,"navbar-link-colour-text":mn.text,"navbar-link-colour-text-hover":mn["text-hover"],"navbar-link-colour-text-selected-hover":mn["text-selected-hover"]},Footer:{"footer-colour-bg":mn["bg-strong"],"footer-colour-text":mn.text,"footer-link-colour-text":mn.text,"footer-link-colour-text-hover":mn["text-hover"],"footer-disclaimer-link-colour-text":mn.text,"footer-disclaimer-link-colour-text-hover":mn["text-subtler"]}},ya={collections:{default:fa,pa:{Button:{"button-radius":Nn.full,"button-default-colour-bg":mn["bg-primary"],"button-default-colour-bg-hover":mn["bg-primary-hover"],"button-default-colour-text":mn["text-inverse"],"button-secondary-colour-border":mn["border-primary"],"button-secondary-colour-text":mn["text-primary"],"button-light-colour-text":mn["text-primary"],"button-link-colour-text":mn["text-primary"]},Animation:{"loading-dots-spinner-colour":mn["icon-primary"]},Navbar:{"navbar-full-height":"6rem","navbar-full-logo-height":"2rem","navbar-compressed-height":"4rem","navbar-compressed-logo-height":"1.5rem","navbar-mobile-height":"3.5rem","navbar-mobile-logo-height":"1.5rem","navbar-colour-bg":mn.bg,"navbar-colour-icon":mn.icon,"navbar-link-colour-text":mn.text,"navbar-link-colour-text-hover":mn["text-hover"],"navbar-link-colour-text-selected-hover":mn["text-selected-hover"]},Footer:{"footer-colour-bg":mn["bg-strong"],"footer-colour-text":mn.text,"footer-link-colour-text":mn.text,"footer-link-colour-text-hover":mn["text-hover"],"footer-disclaimer-link-colour-text":mn.text,"footer-disclaimer-link-colour-text-hover":mn["text-subtler"]}},a11yplayground:ba,lifesg:pa,spf:{Button:{"button-radius":Nn.md,"button-default-colour-bg":mn["bg-primary"],"button-default-colour-bg-hover":mn["bg-primary-hover"],"button-default-colour-text":mn["text-inverse"],"button-secondary-colour-border":mn["border-primary"],"button-secondary-colour-text":mn["text-primary"],"button-light-colour-text":mn["text-primary"],"button-link-colour-text":mn["text-primary"]},Animation:{"loading-dots-spinner-colour":mn["icon-primary"]},Navbar:{"navbar-full-height":"6rem","navbar-full-logo-height":"3rem","navbar-compressed-height":"5rem","navbar-compressed-logo-height":"2rem","navbar-mobile-height":"4rem","navbar-mobile-logo-height":"2rem","navbar-colour-bg":mn.bg,"navbar-colour-icon":mn.icon,"navbar-link-colour-text":mn["text-primary-strongest"],"navbar-link-colour-text-hover":mn["text-subtler"],"navbar-link-colour-text-selected-hover":mn["text-subtler"]},Footer:{"footer-colour-bg":mn["bg-inverse"],"footer-colour-text":mn["text-inverse"],"footer-link-colour-text":mn["text-inverse"],"footer-link-colour-text-hover":mn["text-inverse"],"footer-disclaimer-link-colour-text":mn["text-inverse"],"footer-disclaimer-link-colour-text-hover":mn["text-inverse"]}}},defaultValue:"default"},va=(e,r)=>t=>{var n,o;const i=t.theme,a=jt(ya,null==i?void 0:i.componentScheme);return xa((null===(o=null===(n=null==i?void 0:i.componentOverrides)||void 0===n?void 0:n[e])||void 0===o?void 0:o[r])||a[e][r],t)},xa=(e,r)=>{switch(typeof e){case"function":return e(r);case"number":return e+"px";case"string":return e}},wa=va("Button","button-radius"),$a=va("Button","button-default-colour-bg"),Fa=va("Button","button-default-colour-bg-hover"),Ca=va("Button","button-default-colour-text"),Ea=va("Button","button-secondary-colour-border"),Sa=va("Button","button-secondary-colour-text"),Da=va("Button","button-light-colour-text"),ka=va("Button","button-link-colour-text"),Ba=F.button`
    padding: ${Kn["spacing-8"]} ${Kn["spacing-16"]};
    min-width: 4rem;
    border: ${Xn["width-010"]} ${Xn.solid} transparent;
    transition: all ${qn["duration-250"]} ${qn["ease-default"]};
    border-radius: ${wa};
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;

    // -----------------------------------------------------------------------------
    // BUTTON STYLE + TEXT COLOR
    // -----------------------------------------------------------------------------
    ${e=>{switch(e.$buttonStyle){case"secondary":return C`
                    background-color: ${Zn.bg};
                    border-color: ${e.$buttonIsDanger?Zn["border-error-strong"]:Ea};

                    color: ${e.$buttonIsDanger?Zn["text-error"]:Sa};

                    &:hover,
                    &:active {
                        @media (pointer: fine) {
                            background-color: ${Zn["bg-hover-neutral"]};
                        }
                    }
                `;case"light":return C`
                    background-color: ${Zn.bg};
                    border-color: ${Zn.border};

                    color: ${e.$buttonIsDanger?Zn["text-error"]:Da};

                    &:hover,
                    &:active {
                        @media (pointer: fine) {
                            background-color: ${Zn["bg-hover-neutral"]};
                        }
                    }
                `;case"link":return C`
                    background-color: transparent;

                    color: ${e.$buttonIsDanger?Zn["text-error"]:ka};
                    &:hover,
                    &:active {
                        @media (pointer: fine) {
                            background-color: ${Zn["bg-hover-neutral"]};
                        }
                    }
                `;case"disabled":return C`
                    background-color: ${Zn["bg-disabled"]};

                    cursor: not-allowed;

                    &:hover {
                        box-shadow: none;
                    }

                    color: ${Zn["text-disabled"]};
                `;default:return C`
                    background-color: ${e.$buttonIsDanger?Zn["bg-error-strong"]:$a};

                    ${eo.MaxWidth.sm} {
                        width: 100%;
                    }

                    color: ${Ca};

                    &:hover,
                    &:active {
                        @media (pointer: fine) {
                            background-color: ${e.$buttonIsDanger?Zn["bg-error-strong-hover"]:Fa};
                        }
                    }
                `}}}

    // -----------------------------------------------------------------------------
	// BUTTON SIZE + TEXT SIZE
	// -----------------------------------------------------------------------------
	${e=>{switch(e.$buttonSizeStyle){case"small":return C`
                    height: 2.5rem;
                    ${Gn["body-md-semibold"]}

                    ${eo.MaxWidth.xxs} {
                        height: auto;
                    }
                `;case"large":return C`
                    height: 4rem;
                    ${Gn["heading-md-semibold"]}

                    ${eo.MaxWidth.xxs} {
                        height: auto;
                    }
                `;default:return C`
                    height: 3rem;
                    ${Gn["heading-xs-semibold"]}

                    ${eo.MaxWidth.xxs} {
                        height: auto;
                    }
                `}}}
`,Ta=F(ma)`
    margin-right: ${e=>e.$hasChildren?"0.5rem":"0"};
`,za=e=>o.Children.toArray(e).some((e=>"string"==typeof e?""!==e.trim():null!=e)),Ia=(t,n)=>{const{children:o,disabled:i=!1,loading:a=!1,styleType:s="default",danger:l=!1,focusableWhenDisabled:d=!1,onClick:c}=t,u=ae(t,["children","disabled","loading","styleType","danger","focusableWhenDisabled","onClick"]),g={$buttonStyle:i?"disabled":s,$buttonSizeStyle:"default",$buttonIsDanger:l};return e(Ba,Object.assign({ref:n,"data-testid":u["data-testid"]||"button",disabled:i&&!d,"aria-disabled":i,"aria-busy":a,onClick:i?void 0:c},g,u,{children:[a&&r(Ta,{$hasChildren:za(o)}),r("span",{children:o})]}))};Ia.displayName="Button.Default";const Aa=(t,n)=>{const{children:o,disabled:i=!1,loading:a=!1,styleType:s="default",danger:l=!1,focusableWhenDisabled:d=!1,onClick:c}=t,u=ae(t,["children","disabled","loading","styleType","danger","focusableWhenDisabled","onClick"]),g={$buttonStyle:i?"disabled":s,$buttonSizeStyle:"small",$buttonIsDanger:l};return e(Ba,Object.assign({ref:n,"data-testid":u["data-testid"]||"button",disabled:i&&!d,"aria-disabled":i,"aria-busy":a,onClick:i?void 0:c},g,u,{children:[a&&r(Ta,{$hasChildren:za(o)}),r("span",{children:o})]}))};Aa.displayName="Button.Small";const Oa=(t,n)=>{const{children:o,disabled:i=!1,loading:a=!1,styleType:s="default",danger:l=!1,focusableWhenDisabled:d=!1,onClick:c}=t,u=ae(t,["children","disabled","loading","styleType","danger","focusableWhenDisabled","onClick"]),g={$buttonStyle:i?"disabled":s,$buttonSizeStyle:"large",$buttonIsDanger:l};return e(Ba,Object.assign({ref:n,"data-testid":u["data-testid"]||"button",disabled:i&&!d,"aria-disabled":i,"aria-busy":a,onClick:i?void 0:c},g,u,{children:[a&&r(Ta,{$hasChildren:za(o)}),r("span",{children:o})]}))};Oa.displayName="Button.Large";const Ma={Default:o.forwardRef(Ia),Small:o.forwardRef(Aa),Large:o.forwardRef(Oa)},Ha=e=>{const{textSize:r}=e||{};return C`
        // Text styling
        ${r&&Gn[`${r}-regular`]}

        strong {
            font-weight: ${Gn.Spec["weight-semibold"]};
            ${r&&Gn[`${r}-semibold`]};
        }

        p {
            margin: 0;
        }

        // Link styling
        a {
            font-weight: ${Gn.Spec["weight-semibold"]};
            ${r&&Gn[`${r}-semibold`]}
            color: ${Zn.hyperlink};
            text-decoration: underline;

            svg {
                color: ${Zn["icon-primary"]};
                height: 1lh;
                width: 1em;
                margin-left: 0.4rem;
                vertical-align: middle;
            }

            &:hover,
            &:active,
            &:visited,
            &:focus {
                color: ${Zn["hyperlink-hover"]};

                svg {
                    color: ${Zn["icon-hover"]};
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
    `},Ra=e=>C`
    display: -webkit-box;
    -webkit-line-clamp: ${e};
    -webkit-box-orient: vertical;
    overflow: hidden;
`,La=(e,r,t=!1)=>C`
        ${Gn[`${e}-${r}`]}
        ${t?"margin-bottom: 1.05em;":"margin-bottom: 0;"}
    `,ja=e=>{if(e)return C`
            ${Ra(e)}
        `},_a=(e,r,t,n,o)=>C`
    ${La(e,r||"regular",n)}
    ${((e=!1,r=!1,t)=>r?C`
            display: block;
            ${ja(t)}
        `:e?C`
            display: inline;
        `:C`
            display: block;
            ${ja(t)}
        `)(t,n,o)}
    color: ${Zn.text};
`,Wa=F.div`
    ${e=>_a(e.$textStyle,e.$weight,e.$inline,e.$paragraph,e.$maxLines)}
`,Na=F.a`
    ${e=>{var r;return C`
        ${La(e.$textStyle,e.$weight||"regular")}
        color: ${Zn.hyperlink};
        text-decoration: ${null!==(r=e.$underlineStyle)&&void 0!==r?r:"underline"};

        &:hover,
        &:active,
        &:focus {
            color: ${Zn["text-hover"]};
        }
    `}}
`,Pa=F(H)`
    height: 1lh;
    width: 1em;
    margin-left: 0.4em;
    vertical-align: middle;
`;var Ya;!function(t){const n=(e,t,n)=>{const i=(n,o)=>{var{weight:i,inline:a,paragraph:s,maxLines:l}=n,d=ae(n,["weight","inline","paragraph","maxLines"]);return r(Wa,Object.assign({ref:o,as:a?"span":e,$textStyle:t,$weight:i,$inline:a,$paragraph:s,$maxLines:l},d))};return i.displayName=`Typography.${n}`,o.forwardRef(i)};t.HeadingXXL=n("h1","heading-xxl","HeadingXXL"),t.HeadingXL=n("h2","heading-xl","HeadingXL"),t.HeadingLG=n("h3","heading-lg","HeadingLG"),t.HeadingMD=n("h4","heading-md","HeadingMD"),t.HeadingSM=n("h5","heading-sm","HeadingSM"),t.HeadingXS=n("h6","heading-xs","HeadingXS");const i=(e,t)=>{const n=(t,n)=>{var{weight:o,inline:i,paragraph:a,maxLines:s}=t,l=ae(t,["weight","inline","paragraph","maxLines"]);return r(Wa,Object.assign({ref:n,as:i?"span":"p",$textStyle:e,$weight:o,$inline:i,$paragraph:a,$maxLines:s},l))};return n.displayName=`Typography.${t}`,o.forwardRef(n)};t.BodyBL=i("body-baseline","BodyBL"),t.BodyMD=i("body-md","BodyMD"),t.BodySM=i("body-sm","BodySM"),t.BodyXS=i("body-xs","BodyXS");const a=(t,n)=>{const i=(n,o)=>{var{weight:i,children:a,external:s,underlineStyle:l="underline"}=n,d=ae(n,["weight","children","external","underlineStyle"]);return e(Na,Object.assign({ref:o,$textStyle:t,$weight:i,$underlineStyle:l},d,{children:[a,s&&r(Pa,{})]}))};return i.displayName=`Typography.${n}`,o.forwardRef(i)};t.LinkBL=a("body-baseline","LinkBL"),t.LinkMD=a("body-md","LinkMD"),t.LinkSM=a("body-sm","LinkSM"),t.LinkXS=a("body-xs","LinkXS")}(Ya||(Ya={}));const Va=F.div`
    padding: ${Kn["spacing-8"]} ${Kn["spacing-16"]};
    display: flex;

    ${e=>{let r,t;switch(e.$type){case"error":r=Zn["bg-error"](e),t=Zn["border-error"](e);break;case"success":r=Zn["bg-success"](e),t=Zn["border-success"](e);break;case"warning":default:r=Zn["bg-warning"](e),t=Zn["border-warning"](e);break;case"info":r=Zn["bg-info"](e),t=Zn["border-info"](e);break;case"description":r=Zn["bg-strong"](e),t=Zn["border-strong"](e)}return C`
            background: ${r};
            border-left: ${Xn["width-020"]} ${Xn.solid}
                ${t};
        `}}
`,Ua=F.div`
    display: flex;
    align-items: center;
    height: 1lh;
    margin-right: ${Kn["spacing-8"]};

    ${e=>{let r;const t="small"===e.$sizeType?"1.25rem":"1.5rem";switch(e.$type){case"error":r=Zn["icon-error"](e);break;case"success":r=Zn["icon-success"](e);break;case"warning":default:r=Zn["icon-warning"](e);break;case"info":r=Zn["icon-info"](e);break;case"description":r=Zn["icon-subtle"](e)}return C`
            svg {
                color: ${r};
                width: ${t};
                height: ${t};
            }
        `}}
`,Za=F(Ya.LinkSM)`
    ${e=>"small"===e.$sizeType?C`
                ${Gn["body-sm-semibold"]}
                margin-top: ${Kn["spacing-4"]};
            `:C`
                ${Gn["body-md-semibold"]}
                margin-top: ${Kn["spacing-8"]};
            `}
    display: flex;
    align-items: center;
    align-self: flex-start;

    svg {
        height: 1rem;
        width: 1rem;
        margin-left: ${Kn["spacing-4"]};
    }
`,Ga=F.div`
    display: flex;
    flex-direction: column;
    flex: 1;
    overflow-wrap: anywhere;
`,qa=F.div`
    display: flex;
    flex-direction: column;
    flex: 1;
    order: 1;
    ${e=>{if(e.$showMore&&e.$hasActionLink)return C`
                margin-bottom: ${Kn["spacing-8"]};
            `}}
    ${e=>{const r="linear-gradient(to bottom, black 50%, transparent 100%)";if(!e.$showMore&&e.$maxCollapsedHeight)return`\n                max-height: ${e.$maxCollapsedHeight}px;\n\t\t\t\toverflow: hidden;\n                -webkit-mask-image: ${r};\n                mask-image: ${r};\n\t\t\t`}}
`,Xa=F.div`
    color: ${Zn.text};

    ${e=>"small"===e.$sizeType?Ha({textSize:"body-sm"}):Ha({textSize:"body-md"})}
`,Ka=F.button`
    ${e=>"small"===e.$sizeType?C`
                ${Gn["body-sm-semibold"]}
            `:C`
                ${Gn["body-md-semibold"]}
            `}

    display: flex;
    align-items: center;
    align-self: flex-start;
    gap: ${Kn["spacing-4"]};
    margin-top: ${Kn["spacing-8"]};
    order: 2;

    cursor: pointer;
    user-select: none;
    border: none;
    background: transparent;

    color: ${Zn["text-primary"]};
`,Ja=F($)`
    transform: rotate(${e=>e.$expanded?180:0}deg);
    transition: transform ${qn["duration-350"]} ${qn["ease-standard"]};
`,Qa=F.div`
    height: 1.625rem;
    width: 1.625rem;
    margin-right: 0.5rem;
    flex-shrink: 0;

    svg {
        height: 100%;
        width: 100%;
    }

    ${e=>e.$disabled?e.$active?C`
                    color: ${Zn["icon-selected-disabled"]};
                `:C`
                    color: ${Zn["icon-disabled-subtle"]};
                `:e.$active?C`
                color: ${Zn["icon-selected"]};
            `:C`
            color: ${Zn["icon-subtle"]};
        `};
`,es=C`
    margin-bottom: ${e=>e.$bottomMargin||0}rem;

    // Counter matters
    counter-reset: list;

    ${e=>e.$size&&Gn[`${e.$size}-regular`]}
    font-weight: ${Gn.Spec["weight-regular"]};
    color: ${Zn.text};

    // nested lists styling
    ol,
    ul {
        margin-top: 0.5rem;
        margin-bottom: 0.5rem;
    }
`,rs=F.ol`
    ${es}

    margin-left: 3em;

    ${eo.MaxWidth.lg} {
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
`,ts=F.ul`
    ${es}

    margin-left: ${e=>e.$hasCustomIcon?0:"2.5em"};
    list-style-type: ${e=>e.$hasCustomIcon?"none":e.$bulletType||"disc"};

    ${e=>e.$hasCustomIcon&&C`
            & > li {
                display: flex;
                align-items: flex-start;
                gap: 0.5em;
            }
        `}
`,ns=n=>{var{size:i,bulletType:a,bottomMargin:s,children:l}=n,d=ae(n,["size","bulletType","bottomMargin","children"]);const c=void 0!==a&&"string"!=typeof a;return r(ts,Object.assign({$size:i,$bulletType:c?void 0:a,$bottomMargin:s,$hasCustomIcon:c},d,{children:c?o.Children.map(l,(n=>o.isValidElement(n)?o.cloneElement(n,{children:e(t,{children:[r("div",{"aria-hidden":!0,children:a}),r("div",{children:n.props.children})]})}):n)):l}))};ns.displayName="TextList.Ul";const os=e=>{var{size:t,counterType:n,counterSeparator:o,bottomMargin:i,children:a}=e,s=ae(e,["size","counterType","counterSeparator","bottomMargin","children"]);return r(rs,Object.assign({$size:t,$counterType:n,$counterSeparator:o,$bottomMargin:i},s,{children:a}))};os.displayName="TextList.Ol";const is=ns,as=F.div`
    position: relative;
    display: inline-flex;
    min-width: 10.375rem;
    border-radius: ${Jn.sm};
    border-width: 1px;
    border-style: solid;
    overflow: hidden;
    flex-direction: column;
    height: fit-content;
    background: ${Zn.bg};

    &:has(input:focus-visible) {
        outline: 2px solid ${Zn["focus-ring"]};
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
                            border-color: ${Zn["border-error"]};
                        `:C`
                            border-color: ${Zn["border-error"]};

                            &:has(${gs}:hover) {
                                @media (pointer: fine) {
                                    background: ${Zn["bg-hover-subtle"]};
                                }
                            }
                        `:e.$disabled?e.$selected?C`
                            border: none;
                            background: ${Zn["bg-selected-disabled"]};
                        `:C`
                            border: none;
                        `:e.$selected?C`
                        border: none;
                        background: ${Zn["bg-selected"]};

                        &:has(${gs}:hover) {
                            @media (pointer: fine) {
                                background: ${Zn["bg-selected-hover"]};

                                & ${ds} {
                                    color: ${Zn["text-selected-hover"]};
                                }

                                & ${ws} {
                                    color: ${Zn["icon-selected-hover"]};
                                }
                            }
                        }
                    `:C`
                    border: none;

                    &:has(${gs}:hover) {
                        @media (pointer: fine) {
                            background: ${Zn["bg-hover-subtle"]};
                        }
                    }
                `:e.$error?e.$disabled?C`
                            border-color: ${Zn["border-error"]};
                        `:C`
                            border-color: ${Zn["border-error"]};

                            &:has(${gs}:hover) {
                                @media (pointer: fine) {
                                    background: ${Zn["bg-hover-subtle"]};
                                }
                            }
                        `:e.$disabled?e.$selected?C`
                            border-color: ${Zn["border-selected-disabled"]};
                            background: ${Zn["bg-selected-disabled"]};
                        `:C`
                            border-color: ${Zn["border-disabled"]};
                            background: ${Zn["bg-disabled"]};
                        `:e.$selected?C`
                        border-color: ${Zn["border-selected"]};
                        background: ${Zn["bg-selected"]};

                        &:has(${gs}:hover) {
                            @media (pointer: fine) {
                                background: ${Zn["bg-selected-hover"]};

                                & ${ds} {
                                    color: ${Zn["text-selected-hover"]};
                                }

                                & ${ws} {
                                    color: ${Zn["icon-selected-hover"]};
                                }
                            }
                        }
                    `:C`
                    border-color: ${Zn.border};

                    &:has(${gs}:hover) {
                        @media (pointer: fine) {
                            background: ${Zn["bg-hover-subtle"]};
                        }
                    }
                `}
`,ss=F.input`
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
`,ls=F.div`
    display: flex;
`,ds=F.div`
    display: flex;
    flex-direction: column;
    overflow-wrap: anywhere;
    width: 100%;
    overflow: hidden;

    // apply header container text color
    ${e=>e.$disabled?e.$selected?C`
                    color: ${Zn["text-selected-disabled"]};
                `:C`
                    color: ${Zn["text-disabled"]};
                `:e.$selected?C`
                color: ${Zn["text-selected"]};
            `:C`
            color: ${Zn.text};
        `}
`,cs=F.label`
    ${e=>e.$selected?Gn["body-baseline-semibold"]:Gn["body-baseline-regular"]};
    overflow: hidden;
    display: -webkit-box;
    text-overflow: ellipsis;
    -webkit-box-orient: vertical;
    overflow-wrap: break-word;
    -webkit-line-clamp: ${e=>{var r,t;return null!==(t=null===(r=e.$maxLines)||void 0===r?void 0:r.desktop)&&void 0!==t?t:"none"}};
    ${eo.MaxWidth.lg} {
        -webkit-line-clamp: ${e=>{var r,t;return null!==(t=null===(r=e.$maxLines)||void 0===r?void 0:r.tablet)&&void 0!==t?t:"none"}};
    }
    ${eo.MaxWidth.sm} {
        -webkit-line-clamp: ${e=>{var r,t;return null!==(t=null===(r=e.$maxLines)||void 0===r?void 0:r.mobile)&&void 0!==t?t:"none"}};
    }
`,us=F.div`
    ${Gn["body-md-regular"]}
    margin-top: 0.5rem;

    z-index: 1; // forces sublabel to render above the input
    pointer-events: none; // to allow click events to be passed to the input

    strong,
    b {
        ${Gn["body-md-semibold"]}
    }
`,gs=F.div`
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
`,hs=F.div`
    display: flex;
    height: 100%;
    width: 100%;
    position: relative;
    padding: ${e=>e.$addPadding?"0.6875rem 0rem 0.6875rem 1rem":"0.6875rem 1rem"};
`,ms=F.button`
    color: ${e=>e.$disabled?Zn["text-disabled"]:Zn["text-error"]};
    white-space: nowrap;
    ${Gn["body-md-semibold"]}
    height: fit-content;
    padding: 0.6875rem 1rem 0.6875rem 0.5rem;
    border: none;
    background: none;

    cursor: ${e=>e.$disabled?"not-allowed":"pointer"};
`,bs=F.button`
    color: ${e=>e.disabled?Zn["text-disabled"]:Zn["text-primary"]};
    ${Gn["body-baseline-semibold"]}
    display: flex;
    align-items: center;
    justify-content: flex-end;
    border: none;
    background-color: ${Zn.bg};
    cursor: ${e=>e.disabled?"not-allowed":"pointer"};
    padding: 0 1rem 0.6875rem 1rem;
    padding-top: ${e=>e.$paddingTopRequired?"0.6875rem":"0rem"};
    width: 100%;

    svg {
        width: 1em;
        height: 1em;
        margin-left: 0.5rem;
    }
`,fs=F.div`
    width: 100%;
    color: ${e=>e.$disabled?Zn["text-disabled"]:Zn["text-error"]};
    border: none;
    background: ${Zn.bg};
    cursor: ${e=>e.$disabled?"not-allowed":"pointer"};
    padding: 0.6875rem 1rem 0.5rem 1rem;
`,ps=F((t=>{var{type:n,className:o,children:i,actionLink:a,actionLinkIcon:l,sizeType:d="default",showIcon:c=!1,customIcon:u,maxCollapsedHeight:h,role:b}=t,f=ae(t,["type","className","children","actionLink","actionLinkIcon","sizeType","showIcon","customIcon","maxCollapsedHeight","role"]);const[p,y]=s(!1),[v,x]=s(!1),{height:w,ref:$}=oa(),[F]=s((()=>di.generate())),C=m((()=>{y(!h),x(E())}),[h,w]),E=()=>!(!w||!h)&&w>h;g((()=>{C()}),[h,w,C]);return e(Va,{className:o,$type:n,$sizeType:d,"aria-label":`${(()=>{switch(n){case"success":return"Success";case"warning":return"Warning";case"error":return"Error";case"info":return"Information";case"description":return"Description";default:return"Alert"}})()}`,"data-testid":f["data-testid"],role:b,children:[c&&r(Ua,{$sizeType:d,$type:n,children:(()=>{if(n&&u)return u;switch(n){case"success":return r(A,{"aria-hidden":!0});case"warning":return r(z,{"aria-hidden":!0});case"error":return r(T,{"aria-hidden":!0});case"info":case"description":return r(I,{"aria-hidden":!0});default:return null}})()}),e(Ga,{children:[v&&e(Ka,{$sizeType:d,$type:n,type:"button","aria-expanded":p,"aria-controls":F,onClick:()=>y(!p),children:["Show ",p?"less":"more",r(Ja,{$expanded:p})]}),e(qa,{id:F,$maxCollapsedHeight:E()?h:void 0,$showMore:p,$hasActionLink:!!a,inert:sa(!!h&&!p),children:[r(Xa,{ref:$,$type:n,$sizeType:d,children:i}),a?e(Za,Object.assign({"data-testid":"action-link",$type:n,$sizeType:d,underlineStyle:"none"},a,{children:[a.children,l||r(B,{})]})):null]})]})]})}))`
    width: 100%;
    user-select: none;
`,ys=F.div`
    padding: 0 1rem;
    padding-top: 0.6875rem;
    padding-bottom: ${e=>e.$isFinalItem?"0.6875rem":"0.5rem"};
    background-color: ${Zn.bg};
    ${Ha({textSize:"body-md"})}

    ${e=>e.$disabled?C`
                color: ${Zn["text-disabled"]};
            `:e.$selected?C`
                color: ${Zn["text-selected"]};
            `:C`
                color: ${Zn.text};
            `}
`,vs=F(Ya.BodyMD)`
    color: ${e=>e.$disabled?Zn["text-disabled"]:Zn["text-error"]};
`,xs=F(is)`
    color: ${e=>e.$disabled?Zn["text-disabled"]:Zn["text-error"]};
`,ws=F((({type:e,active:t=!1,disabled:n,className:o})=>{let i;switch(e){case"checkbox":i=r(t?W:_,{});break;case"radio":i=r(t?L:R,{});break;case"tick":i=r(N,{});break;case"cross":i=r(j,{});break;default:i=null}return r(Qa,{className:o,$active:t,$disabled:n,"aria-hidden":!0,children:i})}))`
    ${e=>e.$disabled?e.$selected?C`
                    color: ${Zn["icon-selected-disabled"]};
                `:C`
                    color: ${Zn["icon-disabled-subtle"]};
                `:e.$selected?C`
                color: ${Zn["icon-selected"]};
            `:C`
            color: ${Zn["icon-subtle"]};
        `};
`,$s=F.button`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: ${Kn["spacing-24"]};
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
                background-color: ${Zn["bg-hover-neutral"]};
            `}
    }
`,Fs=o.forwardRef(((e,t)=>{var{children:n,focusHighlight:o=!0,focusOutline:i="none",type:a="button"}=e,s=ae(e,["children","focusHighlight","focusOutline","type"]);return r($s,Object.assign({ref:t,$outline:i,$highlight:o,type:a},s,{children:n}))})),Cs=F.div`
    overflow: hidden;

    ${eo.MaxWidth.xxs} {
        max-width: 100%;
    }
`,Es=F.div`
    position: relative;
    width: 100%;
    padding: ${Kn["spacing-8"]} ${Kn["spacing-20"]}
        ${Kn["spacing-24"]} ${Kn["spacing-20"]};
    display: flex;
    flex-direction: column;
    background: ${Zn.bg};
    border: ${Xn["width-010"]} ${Xn.solid} ${Zn.border};
    border-radius: ${Jn.sm};
`,Ss=F.div`
    display: flex;
    align-items: center;
    justify-content: space-between;

    ${eo.MaxWidth.xxs} {
        flex-direction: column;
        width: 100%;
    }
`,Ds=F.div`
    display: flex;
    justify-content: flex-end;
    margin-top: ${Kn["spacing-16"]};
    gap: ${Kn["spacing-8"]};

    ${eo.MaxWidth.xxs} {
        flex-direction: column-reverse; // FIXME: this breaks tab focus
        margin-top: ${Kn["spacing-32"]};
    }
`,ks=F.div`
    display: flex;
    align-items: center;
    margin-right: ${Kn["spacing-32"]};

    ${eo.MaxWidth.xxs} {
        margin-right: 0;
        width: 100%;
    }
`,Bs=F.div`
    display: flex;
    gap: ${Kn["spacing-8"]};

    ${eo.MaxWidth.lg} {
        flex-direction: column;
    }

    ${eo.MaxWidth.xxs} {
        flex-direction: row;
        width: 100%;
    }
`,Ts=F.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    ${eo.MaxWidth.xxs} {
        width: 6rem;
    }
`,zs=F(Fs)`
    width: 5rem;
    padding: ${Kn["spacing-16"]} 0;
    color: ${Zn.icon};

    svg {
        height: 1rem;
        width: 1rem;
    }

    &:hover {
        color: ${Zn["icon-hover"]};
    }
`,Is=F(Ya.BodyBL)`
    flex-shrink: 0;
    width: 1.5rem;
    text-align: center;
`,As=F(Eo)`
    height: calc(3rem - 2px);
    width: 5rem;
    display: flex;
    align-items: center;
    justify-content: center;

    ${eo.MaxWidth.xxs} {
        width: 100%;
    }
`,Os=F(Do)`
    text-align: center;
    width: 100%;

    &:focus::placeholder {
        color: transparent;
    }
`,Ms=F((n=>{var{type:o="checkbox",indicator:i,checked:l,styleType:d="default",children:c,childrenMaxLines:u,subLabel:h,disabled:m,error:f,name:p,id:y,className:v,compositeSection:x,removable:w,onRemove:$,"data-testid":F,onChange:C,useContentWidth:E,"aria-describedby":S}=n,B=ae(n,["type","indicator","checked","styleType","children","childrenMaxLines","subLabel","disabled","error","name","id","className","compositeSection","removable","onRemove","data-testid","onChange","useContentWidth","aria-describedby"]);const{collapsible:T=!0,errors:z,children:I,initialExpanded:A}=x||{},[O,M]=s(l),[H,R]=s(!!A),L=b((()=>{const e=Array.isArray(z)&&(null==z?void 0:z.length)>0,r=!Array.isArray(z)&&!!z;return e||r}),[z]),[j]=s(di.generate()),_=y?`${y}`:`tg-${j}`,W=a(null);g((()=>{M(l)}),[l]),g((()=>{O&&R(null==A||A)}),[O]);const N=e=>{if(!m){if(C)return void C(e);switch(o){case"checkbox":M((e=>!e));break;case"radio":case"yes":case"no":O||M(!0)}}},P=()=>{m||R(!H)},Y=()=>{m||!$||$()},V=()=>{var e;null===(e=null==W?void 0:W.current)||void 0===e||e.click()},U=e=>{e.stopPropagation()},Z=()=>{let e;switch(o){case"yes":e="tick";break;case"no":e="cross";break;case"checkbox":case"radio":e=o}return r(ws,{type:e,active:O,disabled:m,$selected:O,$disabled:m})},G=()=>{if(!h)return null;let e;return e="function"==typeof h?h():h,r(us,{"data-id":"toggle-sublabel",id:`${_}-sublabel`,"aria-hidden":!0,children:e})},q=n=>e(t,{children:[r(vs,{weight:"semibold",$disabled:m,children:"Error"}),r(xs,{$disabled:m,children:null==n?void 0:n.map(((e,t)=>r("li",{id:`${_}-error-list-item-${t}`,children:r(vs,{weight:"semibold",$disabled:m,children:e})},t)))})]});return e(as,{$selected:O,$disabled:m,className:v,$styleType:d,$error:f,$indicator:i,$useContentWidth:E,id:y,"data-testid":F,children:[(()=>{const t=["string"==typeof h?`${_}-sublabel`:null,S].filter(Boolean).join(" ")||void 0;return e(gs,{id:`${_}-header-container`,$disabled:m,$error:f,$selected:O,$indicator:i,$styleType:d,children:[r(hs,{$addPadding:w,children:e(ls,{id:`${_}-input-container`,onClick:V,children:[r(ss,Object.assign({ref:W,name:p,id:`${_}-input`,type:"checkbox"===o?"checkbox":"radio","data-testid":"toggle-input",disabled:m,onChange:N,onClick:U,checked:O,"aria-describedby":t},B)),i&&Z(),e(ds,{$selected:O,$disabled:m,children:[r(cs,{htmlFor:`${_}-input`,"data-testid":"toggle-label",id:`${_}-label`,$maxLines:u,$selected:O,children:c}),h&&G()]})]})}),w&&r(ms,{type:"button",$disabled:m,onClick:Y,id:`${_}-remove-button`,children:"Remove"})]})})(),I&&e("div",{children:[(!T||H)&&r(ys,{"data-id":"toggle-composite-children",$isFinalItem:!T,$disabled:m,children:I}),T&&!H&&L&&r(fs,{$disabled:m,onClick:P,id:`${_}-error-alert`,children:r(ps,{type:m?"description":"error",className:v,showIcon:!0,children:Array.isArray(z)?q(z):z})}),T&&e(bs,{$paddingTopRequired:!H&&!L,disabled:m,onClick:P,"data-testid":H?"collapse-button":"expand-button",children:[H?"Show less":"Show more",r(H?k:D,{"aria-hidden":!0})]})]})]})}))`
    min-width: 5rem;
    flex: 1;
`,Hs=F(Ma.Small)`
    width: 7rem;

    ${eo.MaxWidth.sm} {
        flex: 1;
    }

    ${eo.MaxWidth.xxs} {
        width: 100%;
    }
`;var Rs,Ls,js;!function(e){e.HOUR_UP="hour-up",e.HOUR_DOWN="hour-down",e.MINUTE_UP="minute-up",e.MINUTE_DOWN="minute-down"}(Rs||(Rs={})),function(e){e.HOUR="hour",e.MINUTE="minute"}(Ls||(Ls={})),function(e){e.AM="am",e.PM="pm"}(js||(js={}));const _s=({id:t,value:n,show:o,format:i,onChange:l,onCancel:d})=>{const c=Mo.getTimeValues(i,n),[u,h]=s(c.hour),[b,f]=s(c.minute),[p,y]=s(c.period),v=a(null),x=a(null);g((()=>{if(o&&v.current&&v.current.focus({preventScroll:!0}),o){const{hour:e,minute:r,period:t}=Mo.getTimeValues(i,n);h(e),f(r),y(t)}}),[o,n,i]),g((()=>{const e=v.current,r=x.current;return e&&e.addEventListener("keydown",w),r&&r.addEventListener("keydown",w),()=>{e&&e.removeEventListener("keydown",w),r&&r.removeEventListener("keydown",w)}}),[]);const w=e=>{["Digit0","Digit1","Digit2","Digit3","Digit4","Digit5","Digit6","Digit7","Digit8","Digit9","Tab","Backspace","Delete","ArrowLeft","ArrowRight","ArrowUp","ArrowDown"].includes(e.code)||["Backspace","0","1","2","3","4","5","6","7","8","9"].includes(e.key)||e.preventDefault()},$=m((e=>{switch(e.currentTarget.name){case Rs.MINUTE_UP:f(Mo.updateMinutes(b,"add"));break;case Rs.MINUTE_DOWN:f(Mo.updateMinutes(b,"minus"));break;case Rs.HOUR_UP:h(Mo.updateHours(u,"add"));break;case Rs.HOUR_DOWN:h(Mo.updateHours(u,"minus"))}}),[u,b]),F=e=>{e.target.select()},C=e=>{const r=e.target.value;switch(e.target.name){case Ls.HOUR:r.length<=2&&h(r);break;case Ls.MINUTE:r.length<=2&&f(r)}},E=e=>{const r=parseInt(e.target.value);if(!isNaN(r))switch(e.target.name){case Ls.HOUR:{const t=r>23||r<0?c.hour:Mo.convertHourTo12HourFormat(e.target.value);h(t);break}case Ls.MINUTE:{const t=r>59||r<0?c.minute:e.target.value;f(Ao.padValue(t));break}}},S=e=>{switch(e.target.name){case js.AM:y(Oo.AM);break;case js.PM:y(Oo.PM)}},B=e=>t?`${t}-${e}`:e;return r(Cs,{children:e(Es,{"data-testid":B("timepicker-dropdown"),inert:sa(!o),children:[e(Ss,{children:[e(ks,{children:[e(Ts,{children:[r(zs,{"aria-label":"increase hour",name:Rs.HOUR_UP,tabIndex:-1,onClick:$,"data-testid":B("hour-increment-button"),children:r(k,{})}),r(As,{children:r(Os,{"aria-label":"hour",type:"number",name:Ls.HOUR,id:"hour",maxLength:2,pattern:"[0-9]{2}",ref:v,value:u,onFocus:F,onChange:C,onBlur:E,min:1,max:12,placeholder:"HH","data-testid":B("hour-input")})}),r(zs,{"aria-label":"decrease hour",name:Rs.HOUR_DOWN,tabIndex:-1,onClick:$,"data-testid":B("hour-decrement-button"),children:r(D,{})})]}),r(Is,{children:":"}),e(Ts,{children:[r(zs,{"aria-label":"increase minute",name:Rs.MINUTE_UP,tabIndex:-1,onClick:$,"data-testid":B("minute-increment-button"),children:r(k,{})}),r(As,{children:r(Os,{"aria-label":"minute",type:"number",name:Ls.MINUTE,id:"minute",maxLength:2,pattern:"[0-9]{2}",ref:x,value:b,onChange:C,onBlur:E,onFocus:F,min:0,max:59,placeholder:"MM","data-testid":B("minute-input")})}),r(zs,{"aria-label":"decrease minute",name:Rs.MINUTE_DOWN,tabIndex:-1,onClick:$,"data-testid":B("minute-decrement-button"),children:r(D,{})})]})]}),e(Bs,{children:[r(Ms,{checked:p===Oo.AM,name:js.AM,type:"radio",onChange:S,"data-testid":B("am-toggle"),"aria-label":"AM",children:"AM"}),r(Ms,{checked:p===Oo.PM,name:js.PM,type:"radio",onChange:S,"data-testid":B("pm-toggle"),"aria-label":"PM",children:"PM"})]})]}),e(Ds,{children:[r(Hs,{"aria-label":"close selector",type:"button",styleType:"secondary",onClick:d,"data-testid":B("cancel-button"),children:"Cancel"}),r(Hs,{"aria-label":"confirm selection",type:"button",onClick:()=>{let e;e="24hr"===i?Mo.convertTo24HourFormat({hour:u,minute:b,period:p}):`${u}:${b}${p}`,l(e)},disabled:""===u||""===b,"data-testid":B("confirm-button"),children:"Done"})]})]})})},Ws=e=>"small"===e?2.5:3;F.div`
    position: relative;
    width: 100%;
    ${e=>{const r=Ws(e.$variant);return C`
            min-height: ${r}rem;
            height: ${r}rem; // Need this to persist the height when expanding or collapsing list
        `}}
`;const Ns=C`
    display: flex;
    position: relative;
    align-items: center;
    justify-content: space-between;
    padding: 0 ${Kn["spacing-16"]};
    // exclude top and bottom borders
    height: calc(${e=>Ws(e.$variant)}rem - 2px);
    width: 100%;
    border-radius: ${Jn.sm};
    border: none;
    background: transparent;

    &:focus,
    &:active {
        outline: none;
    }

    &:focus-visible {
        outline: 2px solid ${Zn["border-focus"]};
    }
`,Ps=F.button`
    ${Ns}
    cursor: pointer;
`;F.div`
    ${Ns}
`;const Ys=E`
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
    border: ${Xn["width-010"]} ${Xn.solid} ${Zn.border};
    border-radius: ${Jn.sm};
    background: ${Zn.bg};
    overflow: hidden;

    &:focus-within {
        border-color: ${Zn["border-focus"]};
        box-shadow: 0px 0px 4px 0px
            rgb(from ${Zn["border-focus"]} r g b / 50%) inset; // TODO: confirm shadow
    }

    ${e=>e.$expanded?C`
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                z-index: 2;
            `:C`
                animation: ${Ys} 0.5s ease-in-out;
            `}

    ${e=>e.$disabled?C`
                background: ${Zn["bg-disabled"]};

                ${Ps} {
                    cursor: not-allowed;
                }

                &:focus-within {
                    border-color: ${Zn.border};
                    box-shadow: none;
                }
            `:e.$readOnly?C`
                border: none;
                background: transparent !important;

                ${Ps} {
                    padding: 0;
                }

                &:focus-within {
                    border: none;
                    box-shadow: none;
                }
            `:e.$error?C`
                border-color: ${Zn["border-error"]};

                &:focus-within {
                    border-color: ${Zn["border-error"]};
                    box-shadow: 0px 0px 4px 0px
                        rgb(from ${Zn["border-error"]} r g b / 50%) inset; // TODO: confirm shadow
                }
            `:void 0}
`,F.div`
    transform: rotate(${e=>e.$expanded?180:0}deg);
    transition: transform ${qn["duration-250"]} ${qn["ease-default"]};
    margin-left: ${Kn["spacing-16"]};
`,F(D)`
    color: ${Zn.icon};
`,F.div`
    height: 1px;
    background: ${Zn.border};
    margin: 0 ${Kn["spacing-8"]};
`,F.div`
    display: flex;
    flex: 1;
    word-break: break-all;
    ${e=>{if(e.$disabled)return C`
                color: ${Zn["text-disabled"]};
            `}}
`;var Vs;F(F.div`
    ${e=>"small"===e.$variant?Gn["body-md-regular"]:Gn["body-baseline-regular"]}
    text-align: left;
    ${e=>{if("middle"!==e.$truncateType)return C`
                    ${Ra(1)}
                `}}
    overflow: hidden;
`)`
    color: ${Zn["text-subtler"]};
`,function(e){e.Ready="overlay-context-ready",e.Change="overlay-context-change"}(Vs||(Vs={}));const Us=e=>"right"===e?"bottom-end":"bottom-start",Zs=f({elementWidth:0,styles:{},setFloatingRef:()=>{},getFloatingProps:()=>({})}),Gs=({enabled:n,isOpen:o,onOpen:i,onClose:l,onDismiss:d,renderElement:c,renderDropdown:u,customZIndex:h,clickToToggle:m=!1,offset:b=0,alignment:f="left",fitAvailableHeight:y,rootNode:v,positionRef:x})=>{var w;const $=p(S),F=Qn["sm-max"]({theme:$}),C=a(null),{width:E=0}=oa({targetRef:null!=x?x:C,handleHeight:!1}),D={name:"center",fn:({x:e,rects:r})=>{const t=0===e||e+r.floating.width===window.innerWidth,n=window.innerWidth<F;return{x:t&&n?(window.innerWidth-r.floating.width)/2:e}}},{refs:k,floatingStyles:B,context:T}=Y({open:o,onOpenChange:(e,r,t)=>{"escape-key"===t?null==d||d():e&&!o?null==i||i():!e&&o&&(null==l||l(t))},whileElementsMounted:V,placement:Us(f),middleware:[U(b),Z(),G({limiter:q()}),X({apply({availableHeight:e,elements:r}){!y||e>=r.floating.scrollHeight?r.floating.style.setProperty("--available-height",""):r.floating.style.setProperty("--available-height",`${Math.max(0,e)}px`)}}),D]}),z=(()=>{const[e,r]=s(void 0),t=P();return g((()=>{if(!t)return void r(void 0);const e=e=>{r(e.zIndex)};return t.events.on(Vs.Change,e),t.events.emit(Vs.Ready),()=>t.events.off(Vs.Change,e)}),[t]),e})(),{isMounted:I,styles:A}=K(T,{initial:{opacity:0},open:{opacity:1},duration:300}),O=J(T,{enabled:n,toggle:m,keyboardHandlers:m}),M=Q(T,{enabled:n}),{getReferenceProps:H,getFloatingProps:R}=ee([O,M]),L={elementWidth:E,styles:Object.assign(Object.assign(Object.assign({},A),B),{zIndex:null!==(w=null!=h?h:z)&&void 0!==w?w:50}),setFloatingRef:k.setFloating,getFloatingProps:R};return e(t,{children:[r("div",Object.assign({ref:e=>{C.current=e,k.setReference(e)}},H(),{children:c()})),I&&r(re,{root:v,children:r(te,{context:T,modal:!1,initialFocus:-1,returnFocus:!1,children:r(Zs.Provider,{value:L,children:u(L)})})})]})},qs=t=>{var{id:n,disabled:o=!1,error:i,value:l,format:d="24hr",readOnly:c,onChange:u,onFocus:h,onBlur:m,alignment:b="left",dropdownZIndex:f,dropdownRootNode:p}=t,y=ae(t,["id","disabled","error","value","format","readOnly","onChange","onFocus","onBlur","alignment","dropdownZIndex","dropdownRootNode"]);const[v,x]=s(!1),[w,$]=s("none"),[F,C]=s(""),[E,S]=s(""),[D,k]=s(!1),B=!c&&!o,T=a(null);g((()=>{l&&(C(l.start),S(l.end))}),[l]);const z=e=>{B&&(D||v||null==h||h(),k(!0),$(e),x(!0))},I=e=>{var r,t;const n=!!(null==e?void 0:e.keepFocus),o=null!==(r=null==e?void 0:e.triggerBlur)&&void 0!==r?r:!n;x(!1),$("none"),k(n),o&&(null==m||m()),n&&(null===(t=T.current)||void 0===t||t.focus())},A=e=>{var r,t,n;if(!D||v)return;const o=e.relatedTarget,i=(null===(r=null==o?void 0:o.matches)||void 0===r?void 0:r.call(o,"[data-floating-ui-focusable]"))||(null===(t=null==o?void 0:o.matches)||void 0===t?void 0:t.call(o,"[data-floating-ui-focus-guard]"));!(!o||!(null===(n=T.current)||void 0===n?void 0:n.contains(o)))||i||(k(!1),null==m||m())},O=e=>{C(e),null==u||u({start:e,end:E}),$("end"),x(!0),k(!0)},M=e=>{S(e),null==u||u({start:F,end:e}),""===F?($("start"),x(!0),k(!0)):I({keepFocus:!0})};return r(Bo,Object.assign({id:n},y,{children:r(Gs,{enabled:B,isOpen:v,renderElement:()=>r(Bo,Object.assign({ref:T,id:n,tabIndex:-1,onBlur:A,"data-testid":"timepicker-container"},y,{children:r(To,{$disabled:o,$error:i,$readOnly:c,$focused:D,children:e(vo,{error:i,currentActive:w,children:[r(zo,{onFocus:()=>z("start"),onClick:()=>z("start"),readOnly:!0,placeholder:"From",value:Mo.formatDisplayValue(F,d),disabled:o,"data-testid":y["data-testid"]?`${y["data-testid"]}-timepicker-selector-from`:"timepicker-selector-from"}),r(zo,{onClick:()=>z("end"),readOnly:!0,placeholder:"To",value:Mo.formatDisplayValue(E,d),disabled:o,"data-testid":y["data-testid"]?`${y["data-testid"]}-timepicker-selector-to`:"timepicker-selector-to"})]})})})),renderDropdown:({styles:t,setFloatingRef:o,getFloatingProps:i})=>v?e("div",Object.assign({ref:o,style:t},i(),{children:["start"===w&&r(_s,{id:n,show:!0,value:F,format:d,onCancel:()=>I({keepFocus:!0}),onChange:O}),"end"===w&&r(_s,{id:n,show:!0,value:E,format:d,onCancel:()=>I({keepFocus:!1}),onChange:M})]})):null,onClose:()=>I({keepFocus:!1}),onDismiss:()=>I({keepFocus:!0}),clickToToggle:!1,offset:8,alignment:b,customZIndex:f,rootNode:p})}))};F.div`
    margin-bottom: ${Kn["spacing-8"]};
`,F.label`
    color: ${Zn["text-subtle"]};
    display: inline-block;

    ${Gn["form-label"]}
    ${Ha()}
    font-weight: ${Gn.Spec["weight-semibold"]};
`;const Xs=F(T)`
    height: 1lh;
    width: 1em;
    flex-shrink: 0;
    color: ${Zn["icon-error-strong"]};
`,Ks=F.div`
    ${Gn["body-sm-semibold"]}
    display: flex;
    gap: ${Kn["spacing-4"]};
    margin-top: ${Kn["spacing-8"]};
`,Js=F.p`
    color: ${Zn["text-error"]};
    margin-bottom: 0;
    outline: none;
`;F.span`
    ${Gn["form-description"]}
    color: ${Zn["text-subtler"]};
    display: block;
`,F(Do)`
    width: 100%;
    height: calc(3rem - 2px); // exclude top and bottom borders

    ${e=>"no-border"!==e.$styleType&&C`
            padding-left: ${e.$visuallyReadOnly?0:Kn["spacing-16"]};
            padding-right: ${e.$visuallyReadOnly||e.$showClear?0:Kn["spacing-16"]};
        `}
`;const Qs=F(ko)`
    height: auto;
    padding: ${Kn["spacing-12"]} ${Kn["spacing-16"]};

    cursor: pointer;
    color: ${Zn.icon};

    ${e=>"no-border"===e.$styleType&&C`
            margin-right: -${Kn["spacing-12"]};
        `}
`,el=F(j)`
    height: 1.25rem;
    width: 1.25rem;
    vertical-align: middle;
`;F.div`
    display: flex;
    width: 100%;
`,F(Eo)`
    display: flex;
    align-items: center;
    width: 100%;
`;const rl=F(Qs)`
    position: absolute;
    right: 0;
    padding-left: ${Kn["spacing-8"]};
    margin-right: 0;
`;F(So)`
    height: 3rem;
`;const tl=F.div`
    font-weight: ${e=>e.$bold?Gn.Spec["weight-semibold"]:Gn.Spec["weight-regular"]};

    ${e=>e.$disabled?C`
                color: ${Zn["text-disabled"]};
            `:e.$selected?C`
                color: ${Zn["text-selected"]};
            `:C`
                color: ${Zn.text};
            `}
    width: 100%;

    ${e=>"end"===e.$truncateType&&Ra(e.$maxLines||2)}
    overflow-wrap: break-word;
`,nl=F.div`
    color: ${Zn["text-subtlest"]};
    width: 100%;

    ${e=>"end"===e.$truncateType&&Ra(e.$maxLines||2)}
    overflow-wrap: break-word;

    ${e=>"next-line"===e.$labelDisplayType?C`
                    ${Gn["body-md-semibold"]}
                `:C`
                    ${Gn["body-baseline-regular"]}
                `}
`,ol=F.span`
    font-weight: ${Gn.Spec["weight-semibold"]};
`,il=F.div`
    text-align: left;
    width: 100%;
    overflow: hidden;
    overflow-wrap: break-word;

    ${e=>"small"===e.$variant?Gn["body-md-regular"]:Gn["body-baseline-regular"]}

    ${e=>{switch(e.$labelDisplayType){case"next-line":return C`
                    display: flex;
                    flex-direction: column;
                `;case"inline":return C`
                    ${tl} {
                        display: inline;
                    }

                    ${nl} {
                        display: inline;
                        margin-left: 0.5rem;
                    }
                `}}}
`,al=F.div`
    display: inline-block;
    width: ${e=>1===e.$maxLines?50:100}%;
    height: 1lh;
    word-break: break-all;
    overflow: hidden;
`,sl=F.div`
    display: inline-block;
    width: ${e=>1===e.$maxLines?50:100}%;
    height: 1lh;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    direction: rtl;
    text-align: right;
`,ll=({bold:n,displayType:o="inline",label:i,searchTerm:a,maxLines:s=2,selected:l,disabled:d,sublabel:c,truncationType:u="middle",variant:g="default"})=>{const h=p(S),f="small"===g?Gn.Spec["body-size-md"]({theme:h}):Gn.Spec["body-size-baseline"]({theme:h}),y=Gn.Spec["font-family"]({theme:h}),{ref:v,width:x}=oa(),w=m((e=>{if("inline"!==o||!x)return!1;return Ao.getTextWidth(e,`${f} '${y}'`)>x*s-50}),[x,o,f,y,s]),$=b((()=>w(i)),[w,i]),F=b((()=>c&&w(c)),[w,c]),C=n=>{if(!a)return n;const o=a.toLowerCase().trim(),s=n.toLowerCase().indexOf(o),l=s+a.length;return-1===s?n:e(t,{children:[i.slice(0,s),r(ol,{$variant:g,children:i.slice(s,l)}),i.slice(l)]})},E=n=>e(t,{children:[r(al,{$maxLines:s,"aria-hidden":!0,children:C(n)}),r(sl,{$maxLines:s,"aria-hidden":!0,children:C(n)})]});return e(il,{ref:v,$labelDisplayType:$||F?"next-line":o,$variant:g,children:[r(tl,{"aria-label":i,$bold:n,$maxLines:s,$selected:l,$disabled:d,$truncateType:u,children:"middle"===u&&$?E(i):C(i)}),c&&r(nl,{"aria-label":c,$maxLines:s,$truncateType:u,$labelDisplayType:o,children:"middle"===u&&F?E(c):c})]})};var dl=Pr;var cl=function(e){var r=this.__data__,t=r.delete(e);return this.size=r.size,t};var ul=function(e){return this.__data__.get(e)};var gl=function(e){return this.__data__.has(e)},hl=Pr,ml=Yr,bl=ct;var fl=function(e,r){var t=this.__data__;if(t instanceof hl){var n=t.__data__;if(!ml||n.length<199)return n.push([e,r]),this.size=++t.size,this;t=this.__data__=new bl(n)}return t.set(e,r),this.size=t.size,this},pl=Pr,yl=function(){this.__data__=new dl,this.size=0},vl=cl,xl=ul,wl=gl,$l=fl;function Fl(e){var r=this.__data__=new pl(e);this.size=r.size}Fl.prototype.clear=yl,Fl.prototype.delete=vl,Fl.prototype.get=xl,Fl.prototype.has=wl,Fl.prototype.set=$l;var Cl=Fl;var El=ct,Sl=function(e){return this.__data__.set(e,"__lodash_hash_undefined__"),this},Dl=function(e){return this.__data__.has(e)};function kl(e){var r=-1,t=null==e?0:e.length;for(this.__data__=new El;++r<t;)this.add(e[r])}kl.prototype.add=kl.prototype.push=Sl,kl.prototype.has=Dl;var Bl=function(e,r){return e.has(r)},Tl=kl,zl=function(e,r){for(var t=-1,n=null==e?0:e.length;++t<n;)if(r(e[t],t,e))return!0;return!1},Il=Bl;var Al=function(e,r,t,n,o,i){var a=1&t,s=e.length,l=r.length;if(s!=l&&!(a&&l>s))return!1;var d=i.get(e),c=i.get(r);if(d&&c)return d==r&&c==e;var u=-1,g=!0,h=2&t?new Tl:void 0;for(i.set(e,r),i.set(r,e);++u<s;){var m=e[u],b=r[u];if(n)var f=a?n(b,m,u,r,e,i):n(m,b,u,e,r,i);if(void 0!==f){if(f)continue;g=!1;break}if(h){if(!zl(r,(function(e,r){if(!Il(h,r)&&(m===e||o(m,e,t,n,i)))return h.push(r)}))){g=!1;break}}else if(m!==b&&!o(m,b,t,n,i)){g=!1;break}}return i.delete(e),i.delete(r),g};var Ol=function(e){var r=-1,t=Array(e.size);return e.forEach((function(e,n){t[++r]=[n,e]})),t};var Ml=he.Uint8Array,Hl=Er,Rl=Al,Ll=Ol,jl=function(e){var r=-1,t=Array(e.size);return e.forEach((function(e){t[++r]=e})),t},_l=me?me.prototype:void 0,Wl=_l?_l.valueOf:void 0;var Nl=function(e,r,t,n,o,i,a){switch(t){case"[object DataView]":if(e.byteLength!=r.byteLength||e.byteOffset!=r.byteOffset)return!1;e=e.buffer,r=r.buffer;case"[object ArrayBuffer]":return!(e.byteLength!=r.byteLength||!i(new Ml(e),new Ml(r)));case"[object Boolean]":case"[object Date]":case"[object Number]":return Hl(+e,+r);case"[object Error]":return e.name==r.name&&e.message==r.message;case"[object RegExp]":case"[object String]":return e==r+"";case"[object Map]":var s=Ll;case"[object Set]":var l=1&n;if(s||(s=jl),e.size!=r.size&&!l)return!1;var d=a.get(e);if(d)return d==r;n|=2,a.set(e,r);var c=Rl(s(e),s(r),n,o,i,a);return a.delete(e),c;case"[object Symbol]":if(Wl)return Wl.call(e)==Wl.call(r)}return!1};var Pl=function(e,r){for(var t=-1,n=r.length,o=e.length;++t<n;)e[o+t]=r[t];return e},Yl=Pl,Vl=de;var Ul=function(e,r,t){var n=r(e);return Vl(e)?n:Yl(n,t(e))};var Zl=function(e,r){for(var t=-1,n=null==e?0:e.length,o=0,i=[];++t<n;){var a=e[t];r(a,t,e)&&(i[o++]=a)}return i},Gl=function(){return[]},ql=Object.prototype.propertyIsEnumerable,Xl=Object.getOwnPropertySymbols,Kl=Xl?function(e){return null==e?[]:(e=Object(e),Zl(Xl(e),(function(r){return ql.call(e,r)})))}:Gl;var Jl=function(e,r){for(var t=-1,n=Array(e);++t<e;)n[t]=r(t);return n},Ql=Ee,ed=Se;var rd=function(e){return ed(e)&&"[object Arguments]"==Ql(e)},td=Se,nd=Object.prototype,od=nd.hasOwnProperty,id=nd.propertyIsEnumerable,ad=rd(function(){return arguments}())?rd:function(e){return td(e)&&od.call(e,"callee")&&!id.call(e,"callee")},sd={exports:{}};var ld=function(){return!1};!function(e,r){var t=he,n=ld,o=r&&!r.nodeType&&r,i=o&&e&&!e.nodeType&&e,a=i&&i.exports===o?t.Buffer:void 0,s=(a?a.isBuffer:void 0)||n;e.exports=s}(sd,sd.exports);var dd=sd.exports,cd=/^(?:0|[1-9]\d*)$/;var ud=function(e,r){var t=typeof e;return!!(r=null==r?9007199254740991:r)&&("number"==t||"symbol"!=t&&cd.test(e))&&e>-1&&e%1==0&&e<r};var gd=function(e){return"number"==typeof e&&e>-1&&e%1==0&&e<=9007199254740991},hd=Ee,md=gd,bd=Se,fd={};fd["[object Float32Array]"]=fd["[object Float64Array]"]=fd["[object Int8Array]"]=fd["[object Int16Array]"]=fd["[object Int32Array]"]=fd["[object Uint8Array]"]=fd["[object Uint8ClampedArray]"]=fd["[object Uint16Array]"]=fd["[object Uint32Array]"]=!0,fd["[object Arguments]"]=fd["[object Array]"]=fd["[object ArrayBuffer]"]=fd["[object Boolean]"]=fd["[object DataView]"]=fd["[object Date]"]=fd["[object Error]"]=fd["[object Function]"]=fd["[object Map]"]=fd["[object Number]"]=fd["[object Object]"]=fd["[object RegExp]"]=fd["[object Set]"]=fd["[object String]"]=fd["[object WeakMap]"]=!1;var pd=function(e){return bd(e)&&md(e.length)&&!!fd[hd(e)]};var yd=function(e){return function(r){return e(r)}},vd={exports:{}};!function(e,r){var t=ce,n=r&&!r.nodeType&&r,o=n&&e&&!e.nodeType&&e,i=o&&o.exports===n&&t.process,a=function(){try{var e=o&&o.require&&o.require("util").types;return e||i&&i.binding&&i.binding("util")}catch(e){}}();e.exports=a}(vd,vd.exports);var xd=vd.exports,wd=pd,$d=yd,Fd=xd&&xd.isTypedArray,Cd=Fd?$d(Fd):wd,Ed=Jl,Sd=ad,Dd=de,kd=dd,Bd=ud,Td=Cd,zd=Object.prototype.hasOwnProperty;var Id=function(e,r){var t=Dd(e),n=!t&&Sd(e),o=!t&&!n&&kd(e),i=!t&&!n&&!o&&Td(e),a=t||n||o||i,s=a?Ed(e.length,String):[],l=s.length;for(var d in e)!r&&!zd.call(e,d)||a&&("length"==d||o&&("offset"==d||"parent"==d)||i&&("buffer"==d||"byteLength"==d||"byteOffset"==d)||Bd(d,l))||s.push(d);return s},Ad=Object.prototype;var Od=function(e){var r=e&&e.constructor;return e===("function"==typeof r&&r.prototype||Ad)};var Md=function(e,r){return function(t){return e(r(t))}}(Object.keys,Object),Hd=Od,Rd=Md,Ld=Object.prototype.hasOwnProperty;var jd=function(e){if(!Hd(e))return Rd(e);var r=[];for(var t in Object(e))Ld.call(e,t)&&"constructor"!=t&&r.push(t);return r},_d=je,Wd=gd;var Nd=function(e){return null!=e&&Wd(e.length)&&!_d(e)},Pd=Id,Yd=jd,Vd=Nd;var Ud=function(e){return Vd(e)?Pd(e):Yd(e)},Zd=Ul,Gd=Kl,qd=Ud;var Xd=function(e){return Zd(e,qd,Gd)},Kd=Object.prototype.hasOwnProperty;var Jd=function(e,r,t,n,o,i){var a=1&t,s=Xd(e),l=s.length;if(l!=Xd(r).length&&!a)return!1;for(var d=l;d--;){var c=s[d];if(!(a?c in r:Kd.call(r,c)))return!1}var u=i.get(e),g=i.get(r);if(u&&g)return u==r&&g==e;var h=!0;i.set(e,r),i.set(r,e);for(var m=a;++d<l;){var b=e[c=s[d]],f=r[c];if(n)var p=a?n(f,b,c,r,e,i):n(b,f,c,e,r,i);if(!(void 0===p?b===f||o(b,f,t,n,i):p)){h=!1;break}m||(m="constructor"==c)}if(h&&!m){var y=e.constructor,v=r.constructor;y==v||!("constructor"in e)||!("constructor"in r)||"function"==typeof y&&y instanceof y&&"function"==typeof v&&v instanceof v||(h=!1)}return i.delete(e),i.delete(r),h},Qd=or(he,"DataView"),ec=Yr,rc=or(he,"Promise"),tc=or(he,"Set"),nc=or(he,"WeakMap"),oc=Ee,ic=Ye,ac="[object Map]",sc="[object Promise]",lc="[object Set]",dc="[object WeakMap]",cc="[object DataView]",uc=ic(Qd),gc=ic(ec),hc=ic(rc),mc=ic(tc),bc=ic(nc),fc=oc;(Qd&&fc(new Qd(new ArrayBuffer(1)))!=cc||ec&&fc(new ec)!=ac||rc&&fc(rc.resolve())!=sc||tc&&fc(new tc)!=lc||nc&&fc(new nc)!=dc)&&(fc=function(e){var r=oc(e),t="[object Object]"==r?e.constructor:void 0,n=t?ic(t):"";if(n)switch(n){case uc:return cc;case gc:return ac;case hc:return sc;case mc:return lc;case bc:return dc}return r});var pc=Cl,yc=Al,vc=Nl,xc=Jd,wc=fc,$c=de,Fc=dd,Cc=Cd,Ec="[object Arguments]",Sc="[object Array]",Dc="[object Object]",kc=Object.prototype.hasOwnProperty;var Bc=function(e,r,t,n,o,i){var a=$c(e),s=$c(r),l=a?Sc:wc(e),d=s?Sc:wc(r),c=(l=l==Ec?Dc:l)==Dc,u=(d=d==Ec?Dc:d)==Dc,g=l==d;if(g&&Fc(e)){if(!Fc(r))return!1;a=!0,c=!1}if(g&&!c)return i||(i=new pc),a||Cc(e)?yc(e,r,t,n,o,i):vc(e,r,l,t,n,o,i);if(!(1&t)){var h=c&&kc.call(e,"__wrapped__"),m=u&&kc.call(r,"__wrapped__");if(h||m){var b=h?e.value():e,f=m?r.value():r;return i||(i=new pc),o(b,f,t,n,i)}}return!!g&&(i||(i=new pc),xc(e,r,t,n,o,i))},Tc=Se;var zc=function e(r,t,n,o,i){return r===t||(null==r||null==t||!Tc(r)&&!Tc(t)?r!=r&&t!=t:Bc(r,t,n,o,e,i))},Ic=Cl,Ac=zc;var Oc=function(e,r,t,n){var o=t.length,i=o,a=!n;if(null==e)return!i;for(e=Object(e);o--;){var s=t[o];if(a&&s[2]?s[1]!==e[s[0]]:!(s[0]in e))return!1}for(;++o<i;){var l=(s=t[o])[0],d=e[l],c=s[1];if(a&&s[2]){if(void 0===d&&!(l in e))return!1}else{var u=new Ic;if(n)var g=n(d,c,l,e,r,u);if(!(void 0===g?Ac(c,d,3,n,u):g))return!1}}return!0},Mc=Me;var Hc=function(e){return e==e&&!Mc(e)},Rc=Hc,Lc=Ud;var jc=function(e){for(var r=Lc(e),t=r.length;t--;){var n=r[t],o=e[n];r[t]=[n,o,Rc(o)]}return r};var _c=function(e,r){return function(t){return null!=t&&(t[e]===r&&(void 0!==r||e in Object(t)))}},Wc=Oc,Nc=jc,Pc=_c;var Yc=function(e,r){return null!=e&&r in Object(e)},Vc=Bt,Uc=ad,Zc=de,Gc=ud,qc=gd,Xc=zt;var Kc=function(e,r,t){for(var n=-1,o=(r=Vc(r,e)).length,i=!1;++n<o;){var a=Xc(r[n]);if(!(i=null!=e&&t(e,a)))break;e=e[a]}return i||++n!=o?i:!!(o=null==e?0:e.length)&&qc(o)&&Gc(a,o)&&(Zc(e)||Uc(e))},Jc=Yc,Qc=Kc;var eu=zc,ru=Ht,tu=function(e,r){return null!=e&&Qc(e,r,Jc)},nu=Oe,ou=Hc,iu=_c,au=zt;var su=function(e){return function(r){return null==r?void 0:r[e]}},lu=Ot;var du=su,cu=function(e){return function(r){return lu(r,e)}},uu=Oe,gu=zt;var hu=function(e){var r=Nc(e);return 1==r.length&&r[0][2]?Pc(r[0][0],r[0][1]):function(t){return t===e||Wc(t,e,r)}},mu=function(e,r){return nu(e)&&ou(r)?iu(au(e),r):function(t){var n=ru(t,e);return void 0===n&&n===r?tu(t,e):eu(r,n,3)}},bu=function(e){return e},fu=de,pu=function(e){return uu(e)?du(gu(e)):cu(e)};var yu=function(e){return"function"==typeof e?e:null==e?bu:"object"==typeof e?fu(e)?mu(e[0],e[1]):hu(e):pu(e)},vu=yu,xu=Nd,wu=Ud;var $u=function(e){return function(r,t,n){var o=Object(r);if(!xu(r)){var i=vu(t);r=wu(r),t=function(e){return i(o[e],e,o)}}var a=e(r,t,n);return a>-1?o[i?r[a]:a]:void 0}};var Fu=/\s/;var Cu=function(e){for(var r=e.length;r--&&Fu.test(e.charAt(r)););return r},Eu=/^\s+/;var Su=function(e){return e?e.slice(0,Cu(e)+1).replace(Eu,""):e},Du=Me,ku=Be,Bu=/^[-+]0x[0-9a-f]+$/i,Tu=/^0b[01]+$/i,zu=/^0o[0-7]+$/i,Iu=parseInt;var Au=function(e){if("number"==typeof e)return e;if(ku(e))return NaN;if(Du(e)){var r="function"==typeof e.valueOf?e.valueOf():e;e=Du(r)?r+"":r}if("string"!=typeof e)return 0===e?e:+e;e=Su(e);var t=Tu.test(e);return t||zu.test(e)?Iu(e.slice(2),t?2:8):Bu.test(e)?NaN:+e},Ou=1/0;var Mu=function(e){return e?(e=Au(e))===Ou||e===-1/0?17976931348623157e292*(e<0?-1:1):e==e?e:0:0===e?e:0};var Hu=function(e,r,t,n){for(var o=e.length,i=t+(n?1:-1);n?i--:++i<o;)if(r(e[i],i,e))return i;return-1},Ru=yu,Lu=function(e){var r=Mu(e),t=r%1;return r==r?t?r-t:r:0},ju=Math.max;var _u=le($u((function(e,r,t){var n=null==e?0:e.length;if(!n)return-1;var o=null==t?0:Lu(t);return o<0&&(o=ju(n+o,0)),Hu(e,Ru(r),o)}))),Wu=zc;var Nu=le((function(e,r){return Wu(e,r)}));function Pu(e){return()=>e}function Yu(e){e()}function Vu(e,r){return t=>e(r(t))}function Uu(e,r){return()=>e(r)}function Zu(e,r){return t=>e(r,t)}function Gu(e){return void 0!==e}function qu(){}function Xu(e,r){return r(e),e}function Ku(e,r){return r(e)}function Ju(...e){return e}function Qu(e,r){return e(1,r)}function eg(e,r){e(0,r)}function rg(e){e(2)}function tg(e){return e(4)}function ng(e,r){return Qu(e,Zu(r,0))}function og(e,r){const t=e(1,(e=>{t(),r(e)}));return t}function ig(e){let r,t;return n=>o=>{r=o,t&&clearTimeout(t),t=setTimeout((()=>{n(r)}),e)}}function ag(e,r){return e===r}function sg(e=ag){let r;return t=>n=>{e(r,n)||(r=n,t(n))}}function lg(e){return r=>t=>{e(t)&&r(t)}}function dg(e){return r=>Vu(r,e)}function cg(e){return r=>()=>{r(e)}}function ug(e,...r){const t=function(...e){return r=>e.reduceRight(Ku,r)}(...r);return(r,n)=>{switch(r){case 2:return void rg(e);case 1:return Qu(e,t(n))}}}function gg(e,r){return t=>n=>{t(r=e(r,n))}}function hg(e){return r=>t=>{e>0?e--:r(t)}}function mg(e){let r,t=null;return n=>o=>{t=o,!r&&(r=setTimeout((()=>{r=void 0,n(t)}),e))}}function bg(...e){const r=new Array(e.length);let t=0,n=null;const o=Math.pow(2,e.length)-1;return e.forEach(((e,i)=>{const a=Math.pow(2,i);Qu(e,(e=>{const s=t;t|=a,r[i]=e,s!==o&&t===o&&n&&(n(),n=null)}))})),e=>i=>{const a=()=>{e([i].concat(r))};t===o?a():n=a}}function fg(e){let r=e;const t=yg();return(e,n)=>{switch(e){case 0:r=n;break;case 1:n(r);break;case 4:return r}return t(e,n)}}function pg(e,r){return Xu(fg(r),(r=>ng(e,r)))}function yg(){const e=[];return(r,t)=>{switch(r){case 0:return void e.slice().forEach((e=>{e(t)}));case 2:return void e.splice(0,e.length);case 1:return e.push(t),()=>{const r=e.indexOf(t);r>-1&&e.splice(r,1)}}}}function vg(e){return Xu(yg(),(r=>ng(e,r)))}function xg(e,r=[],{singleton:t}={singleton:!0}){return{constructor:e,dependencies:r,id:wg(),singleton:t}}const wg=()=>Symbol();function $g(...e){const r=yg(),t=new Array(e.length);let n=0;const o=Math.pow(2,e.length)-1;return e.forEach(((e,i)=>{const a=Math.pow(2,i);Qu(e,(e=>{t[i]=e,n|=a,n===o&&eg(r,t)}))})),function(e,i){switch(e){case 2:return void rg(r);case 1:return n===o&&i(t),Qu(r,i)}}}function Fg(e,r=ag){return ug(e,sg(r))}function Cg(...e){return function(r,t){switch(r){case 2:return;case 1:return function(...e){return()=>{e.map(Yu)}}(...e.map((e=>Qu(e,t))))}}}var Eg=(e=>(e[e.DEBUG=0]="DEBUG",e[e.INFO=1]="INFO",e[e.WARN=2]="WARN",e[e.ERROR=3]="ERROR",e))(Eg||{});const Sg={0:"debug",3:"error",1:"log",2:"warn"},Dg=xg((()=>{const e=fg(3);return{log:fg(((r,t,n=1)=>{var o;n>=(null!=(o=(typeof globalThis>"u"?window:globalThis).VIRTUOSO_LOG_LEVEL)?o:tg(e))&&console[Sg[n]]("%creact-virtuoso: %c%s %o","color: #0253b3; font-weight: bold","color: initial",r,t)})),logLevel:e}}),[],{singleton:!0});function kg(e,r,t){return Bg(e,r,t).callbackRef}function Bg(e,r,t){const n=o.useRef(null);let i=e=>{};if(typeof ResizeObserver<"u"){const a=o.useMemo((()=>new ResizeObserver((r=>{const n=()=>{const t=r[0].target;null!==t.offsetParent&&e(t)};t?n():requestAnimationFrame(n)}))),[e]);i=e=>{e&&r?(a.observe(e),n.current=e):(n.current&&a.unobserve(n.current),n.current=null)}}return{callbackRef:i,ref:n}}function Tg(e,r,t,n,i,a,s,l,d){const c=o.useCallback((t=>{const o=function(e,r,t,n){const o=e.length;if(0===o)return null;const i=[];for(let a=0;a<o;a++){const o=e.item(a);if(void 0===o.dataset.index)continue;const s=parseInt(o.dataset.index),l=parseFloat(o.dataset.knownSize),d=r(o,t);if(0===d&&n("Zero-sized element, this should not happen",{child:o},Eg.ERROR),d===l)continue;const c=i[i.length-1];0===i.length||c.size!==d||c.endIndex!==s-1?i.push({endIndex:s,size:d,startIndex:s}):i[i.length-1].endIndex++}return i}(t.children,r,l?"offsetWidth":"offsetHeight",i);let d=t.parentElement;for(;!d.dataset.virtuosoScroller;)d=d.parentElement;const c="window"===d.lastElementChild.dataset.viewportType,u=s?l?s.scrollLeft:s.scrollTop:c?l?window.pageXOffset||document.documentElement.scrollLeft:window.pageYOffset||document.documentElement.scrollTop:l?d.scrollLeft:d.scrollTop,g=s?l?s.scrollWidth:s.scrollHeight:c?l?document.documentElement.scrollWidth:document.documentElement.scrollHeight:l?d.scrollWidth:d.scrollHeight,h=s?l?s.offsetWidth:s.offsetHeight:c?l?window.innerWidth:window.innerHeight:l?d.offsetWidth:d.offsetHeight;n({scrollHeight:g,scrollTop:Math.max(u,0),viewportHeight:h}),null==a||a(l?zg("column-gap",getComputedStyle(t).columnGap,i):zg("row-gap",getComputedStyle(t).rowGap,i)),null!==o&&e(o)}),[e,r,i,a,s,n]);return Bg(c,t,d)}function zg(e,r,t){return"normal"!==r&&!(null!=r&&r.endsWith("px"))&&t(`${e} was not resolved to pixel value correctly`,r,Eg.WARN),"normal"===r?0:parseInt(null!=r?r:"0",10)}function Ig(e,r,t){const n=o.useRef(null),i=o.useCallback((t=>{if(null==t||!t.offsetParent)return;const o=t.getBoundingClientRect(),i=o.width;let a,s;if(r){const e=r.getBoundingClientRect(),t=o.top-e.top;s=e.height-Math.max(0,t),a=t+r.scrollTop}else s=window.innerHeight-Math.max(0,o.top),a=o.top+window.pageYOffset;n.current={offsetTop:a,visibleHeight:s,visibleWidth:i},e(n.current)}),[e,r]),{callbackRef:a,ref:s}=Bg(i,!0,t),l=o.useCallback((()=>{i(s.current)}),[i,s]);return o.useEffect((()=>{if(r){r.addEventListener("scroll",l);const e=new ResizeObserver((()=>{requestAnimationFrame(l)}));return e.observe(r),()=>{r.removeEventListener("scroll",l),e.unobserve(r)}}return window.addEventListener("scroll",l),window.addEventListener("resize",l),()=>{window.removeEventListener("scroll",l),window.removeEventListener("resize",l)}}),[l,r]),a}const Ag=xg((()=>{const e=yg(),r=yg(),t=fg(0),n=yg(),o=fg(0),i=yg(),a=yg(),s=fg(0),l=fg(0),d=fg(0),c=fg(0),u=yg(),g=yg(),h=fg(!1),m=fg(!1),b=fg(!1);return ng(ug(e,dg((({scrollTop:e})=>e))),r),ng(ug(e,dg((({scrollHeight:e})=>e))),a),ng(r,o),{deviation:t,fixedFooterHeight:d,fixedHeaderHeight:l,footerHeight:c,headerHeight:s,horizontalDirection:m,scrollBy:g,scrollContainerState:e,scrollHeight:a,scrollingInProgress:h,scrollTo:u,scrollTop:r,skipAnimationFrameInResizeObserver:b,smoothScrollTargetReached:n,statefulScrollTop:o,viewportHeight:i}}),[],{singleton:!0}),Og={lvl:0};function Mg(e,r){const t=e.length;if(0===t)return[];let{index:n,value:o}=r(e[0]);const i=[];for(let a=1;a<t;a++){const{index:t,value:s}=r(e[a]);i.push({end:t-1,start:n,value:o}),n=t,o=s}return i.push({end:1/0,start:n,value:o}),i}function Hg(e){return e===Og}function Rg(e,r){if(!Hg(e))return r===e.k?e.v:r<e.k?Rg(e.l,r):Rg(e.r,r)}function Lg(e,r,t="k"){if(Hg(e))return[-1/0,void 0];if(Number(e[t])===r)return[e.k,e.v];if(Number(e[t])<r){const n=Lg(e.r,r,t);return n[0]===-1/0?[e.k,e.v]:n}return Lg(e.l,r,t)}function jg(e,r,t){return Hg(e)?Xg(r,t,1):r===e.k?Ug(e,{k:r,v:t}):r<e.k?Kg(Ug(e,{l:jg(e.l,r,t)})):Kg(Ug(e,{r:jg(e.r,r,t)}))}function _g(){return Og}function Wg(e,r,t){if(Hg(e))return[];return function(e){return Mg(e,(({k:e,v:r})=>({index:e,value:r})))}(Yg(e,Lg(e,r)[0],t))}function Ng(e,r){if(Hg(e))return Og;const{k:t,l:n,r:o}=e;if(r===t){if(Hg(n))return o;if(Hg(o))return n;{const[r,t]=qg(n);return Vg(Ug(e,{k:r,l:Zg(n),v:t}))}}return Vg(Ug(e,r<t?{l:Ng(n,r)}:{r:Ng(o,r)}))}function Pg(e){return Hg(e)?[]:[...Pg(e.l),{k:e.k,v:e.v},...Pg(e.r)]}function Yg(e,r,t){if(Hg(e))return[];const{k:n,l:o,r:i,v:a}=e;let s=[];return n>r&&(s=s.concat(Yg(o,r,t))),n>=r&&n<=t&&s.push({k:n,v:a}),n<=t&&(s=s.concat(Yg(i,r,t))),s}function Vg(e){const{l:r,lvl:t,r:n}=e;if(n.lvl>=t-1&&r.lvl>=t-1)return e;if(t>n.lvl+1){if(Gg(r))return Jg(Ug(e,{lvl:t-1}));if(!Hg(r)&&!Hg(r.r))return Ug(r.r,{l:Ug(r,{r:r.r.l}),lvl:t,r:Ug(e,{l:r.r.r,lvl:t-1})});throw new Error("Unexpected empty nodes")}if(Gg(e))return Qg(Ug(e,{lvl:t-1}));if(Hg(n)||Hg(n.l))throw new Error("Unexpected empty nodes");{const r=n.l,o=Gg(r)?n.lvl-1:n.lvl;return Ug(r,{l:Ug(e,{lvl:t-1,r:r.l}),lvl:r.lvl+1,r:Qg(Ug(n,{l:r.r,lvl:o}))})}}function Ug(e,r){return Xg(void 0!==r.k?r.k:e.k,void 0!==r.v?r.v:e.v,void 0!==r.lvl?r.lvl:e.lvl,void 0!==r.l?r.l:e.l,void 0!==r.r?r.r:e.r)}function Zg(e){return Hg(e.r)?e.l:Vg(Ug(e,{r:Zg(e.r)}))}function Gg(e){return Hg(e)||e.lvl>e.r.lvl}function qg(e){return Hg(e.r)?[e.k,e.v]:qg(e.r)}function Xg(e,r,t,n=Og,o=Og){return{k:e,l:n,lvl:t,r:o,v:r}}function Kg(e){return Qg(Jg(e))}function Jg(e){const{l:r}=e;return Hg(r)||r.lvl!==e.lvl?e:Ug(r,{r:Ug(e,{l:r.r})})}function Qg(e){const{lvl:r,r:t}=e;return Hg(t)||Hg(t.r)||t.lvl!==r||t.r.lvl!==r?e:Ug(t,{l:Ug(e,{r:t.l}),lvl:r+1})}function eh(e,r){return!(!e||e.startIndex!==r.startIndex||e.endIndex!==r.endIndex)}function rh(e,r){return!(!e||e[0]!==r[0]||e[1]!==r[1])}const th=xg((()=>({recalcInProgress:fg(!1)})),[],{singleton:!0});function nh(e,r,t){return e[oh(e,r,t)]}function oh(e,r,t,n=0){let o=e.length-1;for(;n<=o;){const i=Math.floor((n+o)/2),a=t(e[i],r);if(0===a)return i;if(-1===a){if(o-n<2)return i-1;o=i-1}else{if(o===n)return i;n=i+1}}throw new Error(`Failed binary finding record in array - ${e.join(",")}, searched for ${r}`)}function ih(e,r){return Math.round(e.getBoundingClientRect()[r])}function ah(e){return!Hg(e.groupOffsetTree)}function sh({index:e},r){return r===e?0:r<e?-1:1}function lh({offset:e},r){return r===e?0:r<e?-1:1}function dh(e,r,t){if(0===r.length)return 0;const{index:n,offset:o,size:i}=nh(r,e,sh),a=e-n,s=i*a+(a-1)*t+o;return s>0?s+t:s}function ch(e,r){if(!ah(r))return e;let t=0;for(;r.groupIndices[t]<=e+t;)t++;return e+t}function uh(e,r,t){if(function(e){return typeof e.groupIndex<"u"}(e))return r.groupIndices[e.groupIndex]+1;{let n=ch("LAST"===e.index?t:e.index,r);return n=Math.max(0,n,Math.min(t,n)),n}}function gh(e,r,t,n=0){return n>0&&(r=Math.max(r,nh(e,n,sh).offset)),Mg(function(e,r,t,n){const o=oh(e,r,n),i=oh(e,t,n,o);return e.slice(o,i+1)}(e,r,t,lh),fh)}function hh(e,[r,t,n,o]){r.length>0&&n("received item sizes",r,Eg.DEBUG);const i=e.sizeTree;let a=i,s=0;if(t.length>0&&Hg(i)&&2===r.length){const e=r[0].size,n=r[1].size;a=t.reduce(((r,t)=>jg(jg(r,t,e),t+1,n)),a)}else[a,s]=function(e,r){let t=Hg(e)?0:1/0;for(const n of r){const{endIndex:r,size:o,startIndex:i}=n;if(t=Math.min(t,i),Hg(e)){e=jg(e,0,o);continue}const a=Wg(e,i-1,r+1);if(a.some(ph(n)))continue;let s=!1,l=!1;for(const{end:t,start:n,value:i}of a)s?(r>=n||o===i)&&(e=Ng(e,n)):(l=i!==o,s=!0),t>r&&r>=n&&i!==o&&(e=jg(e,r+1,i));l&&(e=jg(e,i,o))}return[e,t]}(a,r);if(a===i)return e;const{lastIndex:l,lastOffset:d,lastSize:c,offsetTree:u}=bh(e.offsetTree,s,a,o);return{groupIndices:t,groupOffsetTree:t.reduce(((e,r)=>jg(e,r,dh(r,u,o))),_g()),lastIndex:l,lastOffset:d,lastSize:c,offsetTree:u,sizeTree:a}}function mh(e,r){let t=0,n=0;for(;t<e;)t+=r[n+1]-r[n]-1,n++;return n-(t===e?0:1)}function bh(e,r,t,n){let o=e,i=0,a=0,s=0,l=0;if(0!==r){l=oh(o,r-1,sh),s=o[l].offset;const e=Lg(t,r-1);i=e[0],a=e[1],o.length&&o[l].size===Lg(t,r)[1]&&(l-=1),o=o.slice(0,l+1)}else o=[];for(const{start:e,value:l}of Wg(t,r,1/0)){const r=e-i,t=r*a+s+r*n;o.push({index:e,offset:t,size:l}),i=e,s=t,a=l}return{lastIndex:i,lastOffset:s,lastSize:a,offsetTree:o}}function fh(e){return{index:e.index,value:e}}function ph(e){const{endIndex:r,size:t,startIndex:n}=e;return e=>e.start===n&&(e.end===r||e.end===1/0)&&e.value===t}const yh={offsetHeight:"height",offsetWidth:"width"},vh=xg((([{log:e},{recalcInProgress:r}])=>{const t=yg(),n=yg(),o=pg(n,0),i=yg(),a=yg(),s=fg(0),l=fg([]),d=fg(void 0),c=fg(void 0),u=fg(((e,r)=>ih(e,yh[r]))),g=fg(void 0),h=fg(0),m={groupIndices:[],groupOffsetTree:_g(),lastIndex:0,lastOffset:0,lastSize:0,offsetTree:[],sizeTree:_g()},b=pg(ug(t,bg(l,e,h),gg(hh,m),sg()),m),f=pg(ug(l,sg(),gg(((e,r)=>({current:r,prev:e.current})),{current:[],prev:[]}),dg((({prev:e})=>e))),[]);ng(ug(l,lg((e=>e.length>0)),bg(b,h),dg((([e,r,t])=>{const n=e.reduce(((e,n,o)=>jg(e,n,dh(n,r.offsetTree,t)||o)),_g());return{...r,groupIndices:e,groupOffsetTree:n}}))),b),ng(ug(n,bg(b),lg((([e,{lastIndex:r}])=>e<r)),dg((([e,{lastIndex:r,lastSize:t}])=>[{endIndex:r,size:t,startIndex:e}]))),t),ng(d,c);const p=pg(ug(d,dg((e=>void 0===e))),!0);ng(ug(c,lg((e=>void 0!==e&&Hg(tg(b).sizeTree))),dg((e=>[{endIndex:0,size:e,startIndex:0}]))),t);const y=vg(ug(t,bg(b),gg((({sizes:e},[r,t])=>({changed:t!==e,sizes:t})),{changed:!1,sizes:m}),dg((e=>e.changed))));Qu(ug(s,gg(((e,r)=>({diff:e.prev-r,prev:r})),{diff:0,prev:0}),dg((e=>e.diff))),(e=>{const{groupIndices:t}=tg(b);if(e>0)eg(r,!0),eg(i,e+mh(e,t));else if(e<0){const r=tg(f);r.length>0&&(e-=mh(-e,r)),eg(a,e)}})),Qu(ug(s,bg(e)),(([e,r])=>{e<0&&r("`firstItemIndex` prop should not be set to less than zero. If you don't know the total count, just use a very high value",{firstItemIndex:s},Eg.ERROR)}));const v=vg(i);ng(ug(i,bg(b),dg((([e,r])=>{const t=r.groupIndices.length>0,n=[],o=r.lastSize;if(t){const t=Rg(r.sizeTree,0);let i=0,a=0;for(;i<e;){const e=r.groupIndices[a],s=r.groupIndices.length===a+1?1/0:r.groupIndices[a+1]-e-1;n.push({endIndex:e,size:t,startIndex:e}),n.push({endIndex:e+1+s-1,size:o,startIndex:e+1}),a++,i+=s+1}const s=Pg(r.sizeTree);return i!==e&&s.shift(),s.reduce(((r,{k:t,v:n})=>{let o=r.ranges;return 0!==r.prevSize&&(o=[...r.ranges,{endIndex:t+e-1,size:r.prevSize,startIndex:r.prevIndex}]),{prevIndex:t+e,prevSize:n,ranges:o}}),{prevIndex:e,prevSize:0,ranges:n}).ranges}return Pg(r.sizeTree).reduce(((r,{k:t,v:n})=>({prevIndex:t+e,prevSize:n,ranges:[...r.ranges,{endIndex:t+e-1,size:r.prevSize,startIndex:r.prevIndex}]})),{prevIndex:0,prevSize:o,ranges:[]}).ranges}))),t);const x=vg(ug(a,bg(b,h),dg((([e,{offsetTree:r},t])=>dh(-e,r,t)))));return ng(ug(a,bg(b,h),dg((([e,r,t])=>{if(r.groupIndices.length>0){if(Hg(r.sizeTree))return r;let n=_g();const o=tg(f);let i=0,a=0,s=0;for(;i<-e;){s=o[a];const e=o[a+1]-s-1;a++,i+=e+1}if(n=Pg(r.sizeTree).reduce(((r,{k:t,v:n})=>jg(r,Math.max(0,t+e),n)),n),i!==-e){n=jg(n,0,Rg(r.sizeTree,s));n=jg(n,1,Lg(r.sizeTree,1-e)[1])}return{...r,sizeTree:n,...bh(r.offsetTree,0,n,t)}}{const n=Pg(r.sizeTree).reduce(((r,{k:t,v:n})=>jg(r,Math.max(0,t+e),n)),_g());return{...r,sizeTree:n,...bh(r.offsetTree,0,n,t)}}}))),b),{beforeUnshiftWith:v,data:g,defaultItemSize:c,firstItemIndex:s,fixedItemSize:d,gap:h,groupIndices:l,itemSize:u,listRefresh:y,shiftWith:a,shiftWithOffset:x,sizeRanges:t,sizes:b,statefulTotalCount:o,totalCount:n,trackItemSizes:p,unshiftWith:i}}),Ju(Dg,th),{singleton:!0});function xh(e){return e.reduce(((e,r)=>(e.groupIndices.push(e.totalCount),e.totalCount+=r+1,e)),{groupIndices:[],totalCount:0})}const wh=xg((([{groupIndices:e,sizes:r,totalCount:t},{headerHeight:n,scrollTop:o}])=>{const i=yg(),a=yg(),s=vg(ug(i,dg(xh)));return ng(ug(s,dg((e=>e.totalCount))),t),ng(ug(s,dg((e=>e.groupIndices))),e),ng(ug($g(o,r,n),lg((([e,r])=>ah(r))),dg((([e,r,t])=>Lg(r.groupOffsetTree,Math.max(e-t,0),"v")[0])),sg(),dg((e=>[e]))),a),{groupCounts:i,topItemsIndexes:a}}),Ju(vh,Ag)),$h=xg((([{log:e}])=>{const r=fg(!1),t=vg(ug(r,lg((e=>e)),sg()));return Qu(r,(r=>{r&&tg(e)("props updated",{},Eg.DEBUG)})),{didMount:t,propsReady:r}}),Ju(Dg),{singleton:!0}),Fh=typeof document<"u"&&"scrollBehavior"in document.documentElement.style;function Ch(e){const r="number"==typeof e?{index:e}:e;return r.align||(r.align="start"),(!r.behavior||!Fh)&&(r.behavior="auto"),r.offset||(r.offset=0),r}const Eh=xg((([{gap:e,listRefresh:r,sizes:t,totalCount:n},{fixedFooterHeight:o,fixedHeaderHeight:i,footerHeight:a,headerHeight:s,scrollingInProgress:l,scrollTo:d,smoothScrollTargetReached:c,viewportHeight:u},{log:g}])=>{const h=yg(),m=yg(),b=fg(0);let f=null,p=null,y=null;function v(){f&&(f(),f=null),y&&(y(),y=null),p&&(clearTimeout(p),p=null),eg(l,!1)}return ng(ug(h,bg(t,u,n,b,s,a,g),bg(e,i,o),dg((([[e,t,n,o,i,a,s,d],u,g,b])=>{const x=Ch(e),{align:w,behavior:$,offset:F}=x,C=o-1,E=uh(x,t,C);let S=dh(E,t.offsetTree,u)+a;"end"===w?(S+=g+Lg(t.sizeTree,E)[1]-n+b,E===C&&(S+=s)):"center"===w?S+=(g+Lg(t.sizeTree,E)[1]-n+b)/2:S-=i,F&&(S+=F);const D=r=>{v(),r?(d("retrying to scroll to",{location:e},Eg.DEBUG),eg(h,e)):(eg(m,!0),d("list did not change, scroll successful",{},Eg.DEBUG))};if(v(),"smooth"===$){let e=!1;y=Qu(r,(r=>{e=e||r})),f=og(c,(()=>{D(e)}))}else f=og(ug(r,function(e){return r=>{const t=setTimeout((()=>{r(!1)}),e);return e=>{e&&(r(!0),clearTimeout(t))}}}(150)),D);return p=setTimeout((()=>{v()}),1200),eg(l,!0),d("scrolling from index to",{behavior:$,index:E,top:S},Eg.DEBUG),{behavior:$,top:S}}))),d),{scrollTargetReached:m,scrollToIndex:h,topListHeight:b}}),Ju(vh,Ag,Dg),{singleton:!0});function Sh(e,r){0==e?r():requestAnimationFrame((()=>{Sh(e-1,r)}))}function Dh(e,r){const t=r-1;return"number"==typeof e?e:"LAST"===e.index?t:e.index}const kh=xg((([{defaultItemSize:e,listRefresh:r,sizes:t},{scrollTop:n},{scrollTargetReached:o,scrollToIndex:i},{didMount:a}])=>{const s=fg(!0),l=fg(0),d=fg(!0);return ng(ug(a,bg(l),lg((([e,r])=>!!r)),cg(!1)),s),ng(ug(a,bg(l),lg((([e,r])=>!!r)),cg(!1)),d),Qu(ug($g(r,a),bg(s,t,e,d),lg((([[,e],r,{sizeTree:t},n,o])=>e&&(!Hg(t)||Gu(n))&&!r&&!o)),bg(l)),(([,e])=>{og(o,(()=>{eg(d,!0)})),Sh(4,(()=>{og(n,(()=>{eg(s,!0)})),eg(i,e)}))})),{initialItemFinalLocationReached:d,initialTopMostItemIndex:l,scrolledToInitialItem:s}}),Ju(vh,Ag,Eh,$h),{singleton:!0});function Bh(e,r){return Math.abs(e-r)<1.01}const Th="up",zh="down",Ih={atBottom:!1,notAtBottomBecause:"NOT_SHOWING_LAST_ITEM",state:{offsetBottom:0,scrollHeight:0,scrollTop:0,viewportHeight:0}},Ah=xg((([{footerHeight:e,headerHeight:r,scrollBy:t,scrollContainerState:n,scrollTop:o,viewportHeight:i}])=>{const a=fg(!1),s=fg(!0),l=yg(),d=yg(),c=fg(4),u=fg(0),g=pg(ug(Cg(ug(Fg(o),hg(1),cg(!0)),ug(Fg(o),hg(1),cg(!1),ig(100))),sg()),!1),h=pg(ug(Cg(ug(t,cg(!0)),ug(t,cg(!1),ig(200))),sg()),!1);ng(ug($g(Fg(o),Fg(u)),dg((([e,r])=>e<=r)),sg()),s),ng(ug(s,mg(50)),d);const m=vg(ug($g(n,Fg(i),Fg(r),Fg(e),Fg(c)),gg(((e,[{scrollHeight:r,scrollTop:t},n,o,i,a])=>{const s={scrollHeight:r,scrollTop:t,viewportHeight:n};if(t+n-r>-a){let r,n;return t>e.state.scrollTop?(r="SCROLLED_DOWN",n=e.state.scrollTop-t):(r="SIZE_DECREASED",n=e.state.scrollTop-t||e.scrollTopDelta),{atBottom:!0,atBottomBecause:r,scrollTopDelta:n,state:s}}let l;return l=s.scrollHeight>e.state.scrollHeight?"SIZE_INCREASED":n<e.state.viewportHeight?"VIEWPORT_HEIGHT_DECREASING":t<e.state.scrollTop?"SCROLLING_UPWARDS":"NOT_FULLY_SCROLLED_TO_LAST_ITEM_BOTTOM",{atBottom:!1,notAtBottomBecause:l,state:s}}),Ih),sg(((e,r)=>e&&e.atBottom===r.atBottom)))),b=pg(ug(n,gg(((e,{scrollHeight:r,scrollTop:t,viewportHeight:n})=>{if(Bh(e.scrollHeight,r))return{changed:!1,jump:0,scrollHeight:r,scrollTop:t};{const o=r-(t+n)<1;return e.scrollTop!==t&&o?{changed:!0,jump:e.scrollTop-t,scrollHeight:r,scrollTop:t}:{changed:!0,jump:0,scrollHeight:r,scrollTop:t}}}),{changed:!1,jump:0,scrollHeight:0,scrollTop:0}),lg((e=>e.changed)),dg((e=>e.jump))),0);ng(ug(m,dg((e=>e.atBottom))),a),ng(ug(a,mg(50)),l);const f=fg(zh);ng(ug(n,dg((({scrollTop:e})=>e)),sg(),gg(((e,r)=>tg(h)?{direction:e.direction,prevScrollTop:r}:{direction:r<e.prevScrollTop?Th:zh,prevScrollTop:r}),{direction:zh,prevScrollTop:0}),dg((e=>e.direction))),f),ng(ug(n,mg(50),cg("none")),f);const p=fg(0);return ng(ug(g,lg((e=>!e)),cg(0)),p),ng(ug(o,mg(100),bg(g),lg((([e,r])=>!!r)),gg((([e,r],[t])=>[r,t]),[0,0]),dg((([e,r])=>r-e))),p),{atBottomState:m,atBottomStateChange:l,atBottomThreshold:c,atTopStateChange:d,atTopThreshold:u,isAtBottom:a,isAtTop:s,isScrolling:g,lastJumpDueToItemResize:b,scrollDirection:f,scrollVelocity:p}}),Ju(Ag)),Oh="top",Mh="bottom",Hh="none";function Rh(e,r,t){return"number"==typeof e?t===Th&&r===Oh||t===zh&&r===Mh?e:0:t===Th?r===Oh?e.main:e.reverse:r===Mh?e.main:e.reverse}function Lh(e,r){var t;return"number"==typeof e?e:null!=(t=e[r])?t:0}const jh=xg((([{deviation:e,fixedHeaderHeight:r,headerHeight:t,scrollTop:n,viewportHeight:o}])=>{const i=yg(),a=fg(0),s=fg(0),l=fg(0);return{increaseViewportBy:s,listBoundary:i,overscan:l,topListHeight:a,visibleRange:pg(ug($g(Fg(n),Fg(o),Fg(t),Fg(i,rh),Fg(l),Fg(a),Fg(r),Fg(e),Fg(s)),dg((([e,r,t,[n,o],i,a,s,l,d])=>{const c=e-l,u=a+s,g=Math.max(t-c,0);let h=Hh;const m=Lh(d,Oh),b=Lh(d,Mh);return n-=l,o+=t+s,(n+=t+s)>e+u-m&&(h=Th),(o-=l)<e-g+r+b&&(h=zh),h!==Hh?[Math.max(c-t-Rh(i,Oh,h)-m,0),c-g-s+r+Rh(i,Mh,h)+b]:null})),lg((e=>null!=e)),sg(rh)),[0,0])}}),Ju(Ag),{singleton:!0});const _h={bottom:0,firstItemIndex:0,items:[],offsetBottom:0,offsetTop:0,top:0,topItems:[],topListHeight:0,totalCount:0};function Wh(e,r,t,n,o,i){const{lastIndex:a,lastOffset:s,lastSize:l}=o;let d=0,c=0;if(e.length>0){d=e[0].offset;const r=e[e.length-1];c=r.offset+r.size}const u=t-a,g=d,h=s+u*l+(u-1)*n-c;return{bottom:c,firstItemIndex:i,items:Ph(e,o,i),offsetBottom:h,offsetTop:d,top:g,topItems:Ph(r,o,i),topListHeight:r.reduce(((e,r)=>r.size+e),0),totalCount:t}}function Nh(e,r,t,n,o,i){let a=0;if(t.groupIndices.length>0)for(const r of t.groupIndices){if(r-a>=e)break;a++}const s=e+a,l=Dh(r,s);return Wh(Array.from({length:s}).map(((e,r)=>({data:i[r+l],index:r+l,offset:0,size:0}))),[],s,o,t,n)}function Ph(e,r,t){if(0===e.length)return[];if(!ah(r))return e.map((e=>({...e,index:e.index+t,originalIndex:e.index})));const n=e[0].index,o=e[e.length-1].index,i=[],a=Wg(r.groupOffsetTree,n,o);let s,l=0;for(const n of e){let e;(!s||s.end<n.index)&&(s=a.shift(),l=r.groupIndices.indexOf(s.start)),e=n.index===s.start?{index:l,type:"group"}:{groupIndex:l,index:n.index-(l+1)+t},i.push({...e,data:n.data,offset:n.offset,originalIndex:n.index,size:n.size})}return i}const Yh=xg((([{data:e,firstItemIndex:r,gap:t,sizes:n,totalCount:o},i,{listBoundary:a,topListHeight:s,visibleRange:l},{initialTopMostItemIndex:d,scrolledToInitialItem:c},{topListHeight:u},g,{didMount:h},{recalcInProgress:m}])=>{const b=fg([]),f=fg(0),p=yg();ng(i.topItemsIndexes,b);const y=pg(ug($g(h,m,Fg(l,rh),Fg(o),Fg(n),Fg(d),c,Fg(b),Fg(r),Fg(t),e),lg((([e,r,,t,,,,,,,n])=>{const o=n&&n.length!==t;return e&&!r&&!o})),dg((([,,[e,r],t,n,o,i,a,s,l,d])=>{const c=n,{offsetTree:u,sizeTree:g}=c,h=tg(f);if(0===t)return{..._h,totalCount:t};if(0===e&&0===r)return 0===h?{..._h,totalCount:t}:Nh(h,o,n,s,l,d||[]);if(Hg(g))return h>0?null:Wh(function(e,r,t){if(ah(r)){const n=ch(e,r);return[{index:Lg(r.groupOffsetTree,n)[0],offset:0,size:0},{data:null==t?void 0:t[0],index:n,offset:0,size:0}]}return[{data:null==t?void 0:t[0],index:e,offset:0,size:0}]}(Dh(o,t),c,d),[],t,l,c,s);const m=[];if(a.length>0){const e=a[0],r=a[a.length-1];let t=0;for(const n of Wg(g,e,r)){const o=n.value,i=Math.max(n.start,e),a=Math.min(n.end,r);for(let e=i;e<=a;e++)m.push({data:null==d?void 0:d[e],index:e,offset:t,size:o}),t+=o}}if(!i)return Wh([],m,t,l,c,s);const b=a.length>0?a[a.length-1]+1:0,p=gh(u,e,r,b);if(0===p.length)return null;const y=t-1;return Wh(Xu([],(t=>{for(const n of p){const o=n.value;let i=o.offset,a=n.start;const s=o.size;if(o.offset<e){a+=Math.floor((e-o.offset+l)/(s+l));const r=a-n.start;i+=r*s+r*l}a<b&&(i+=(b-a)*s,a=b);const c=Math.min(n.end,y);for(let e=a;e<=c&&!(i>=r);e++)t.push({data:null==d?void 0:d[e],index:e,offset:i,size:s}),i+=s+l}})),m,t,l,c,s)})),lg((e=>null!==e)),sg()),_h);ng(ug(e,lg(Gu),dg((e=>null==e?void 0:e.length))),o),ng(ug(y,dg((e=>e.topListHeight))),u),ng(u,s),ng(ug(y,dg((e=>[e.top,e.bottom]))),a),ng(ug(y,dg((e=>e.items))),p);const v=vg(ug(y,lg((({items:e})=>e.length>0)),bg(o,e),lg((([{items:e},r])=>e[e.length-1].originalIndex===r-1)),dg((([,e,r])=>[e-1,r])),sg(rh),dg((([e])=>e)))),x=vg(ug(y,mg(200),lg((({items:e,topItems:r})=>e.length>0&&e[0].originalIndex===r.length)),dg((({items:e})=>e[0].index)),sg())),w=vg(ug(y,lg((({items:e})=>e.length>0)),dg((({items:e})=>{let r=0,t=e.length-1;for(;"group"===e[r].type&&r<t;)r++;for(;"group"===e[t].type&&t>r;)t--;return{endIndex:e[t].index,startIndex:e[r].index}})),sg(eh)));return{endReached:v,initialItemCount:f,itemsRendered:p,listState:y,rangeChanged:w,startReached:x,topItemsIndexes:b,...g}}),Ju(vh,wh,jh,kh,Eh,Ah,$h,th),{singleton:!0}),Vh=xg((([{fixedFooterHeight:e,fixedHeaderHeight:r,footerHeight:t,headerHeight:n},{listState:o}])=>{const i=yg(),a=pg(ug($g(t,e,n,r,o),dg((([e,r,t,n,o])=>e+r+t+n+o.offsetBottom+o.bottom))),0);return ng(Fg(a),i),{totalListHeight:a,totalListHeightChanged:i}}),Ju(Ag,Yh),{singleton:!0}),Uh=xg((([{viewportHeight:e},{totalListHeight:r}])=>{const t=fg(!1);return{alignToBottom:t,paddingTopAddition:pg(ug($g(t,e,r),lg((([e])=>e)),dg((([,e,r])=>Math.max(0,e-r))),mg(0),sg()),0)}}),Ju(Ag,Vh),{singleton:!0});function Zh(e){return!!e&&("smooth"===e?"smooth":"auto")}const Gh=xg((([{listRefresh:e,totalCount:r},{atBottomState:t,isAtBottom:n},{scrollToIndex:o},{scrolledToInitialItem:i},{didMount:a,propsReady:s},{log:l},{scrollingInProgress:d}])=>{const c=fg(!1),u=yg();let g=null;function h(e){eg(o,{align:"end",behavior:e,index:"LAST"})}function m(e){const r=og(t,(r=>{e&&!r.atBottom&&"SIZE_INCREASED"===r.notAtBottomBecause&&!g&&(tg(l)("scrolling to bottom due to increased size",{},Eg.DEBUG),h("auto"))}));setTimeout(r,100)}return Qu(ug($g(ug(Fg(r),hg(1)),a),bg(Fg(c),n,i,d),dg((([[e,r],t,n,o,i])=>{let a=r&&o,s="auto";return a&&(s=((e,r)=>"function"==typeof e?Zh(e(r)):r&&Zh(e))(t,n||i),a=a&&!!s),{followOutputBehavior:s,shouldFollow:a,totalCount:e}})),lg((({shouldFollow:e})=>e))),(({followOutputBehavior:r,totalCount:t})=>{g&&(g(),g=null),g=og(e,(()=>{tg(l)("following output to ",{totalCount:t},Eg.DEBUG),h(r),g=null}))})),Qu(ug($g(Fg(c),r,s),lg((([e,,r])=>e&&r)),gg((({value:e},[,r])=>({refreshed:e===r,value:r})),{refreshed:!1,value:0}),lg((({refreshed:e})=>e)),bg(c,r)),(([,e])=>{tg(i)&&m(!1!==e)})),Qu(u,(()=>{m(!1!==tg(c))})),Qu($g(Fg(c),t),(([e,r])=>{e&&!r.atBottom&&"VIEWPORT_HEIGHT_DECREASING"===r.notAtBottomBecause&&h("auto")})),{autoscrollToBottom:u,followOutput:c}}),Ju(vh,Ah,Eh,kh,$h,Dg,Ag)),qh=xg((([{data:e,firstItemIndex:r,gap:t,sizes:n},{initialTopMostItemIndex:o},{initialItemCount:i,listState:a},{didMount:s}])=>(ng(ug(s,bg(i),lg((([,e])=>0!==e)),bg(o,n,r,t,e),dg((([[,e],r,t,n,o,i=[]])=>Nh(e,r,t,n,o,i)))),a),{})),Ju(vh,kh,Yh,$h),{singleton:!0}),Xh=xg((([{didMount:e},{scrollTo:r},{listState:t}])=>{const n=fg(0);return Qu(ug(e,bg(n),lg((([,e])=>0!==e)),dg((([,e])=>({top:e})))),(e=>{og(ug(t,hg(1),lg((e=>e.items.length>1))),(()=>{requestAnimationFrame((()=>{eg(r,e)}))}))})),{initialScrollTop:n}}),Ju($h,Ag,Yh),{singleton:!0}),Kh=({itemBottom:e,itemTop:r,locationParams:{align:t,behavior:n,...o},viewportBottom:i,viewportTop:a})=>r<a?{...o,align:null!=t?t:"start",behavior:n}:e>i?{...o,align:null!=t?t:"end",behavior:n}:null,Jh=xg((([{gap:e,sizes:r,totalCount:t},{fixedFooterHeight:n,fixedHeaderHeight:o,headerHeight:i,scrollingInProgress:a,scrollTop:s,viewportHeight:l},{scrollToIndex:d}])=>{const c=yg();return ng(ug(c,bg(r,l,t,i,o,n,s),bg(e),dg((([[e,r,t,n,o,i,s,l],d])=>{const{align:c,behavior:u,calculateViewLocation:g=Kh,done:h,...m}=e,b=uh(e,r,n-1),f=dh(b,r.offsetTree,d)+o+i,p=g({itemBottom:f+Lg(r.sizeTree,b)[1],itemTop:f,locationParams:{align:c,behavior:u,...m},viewportBottom:l+t-s,viewportTop:l+i});return p?h&&og(ug(a,lg((e=>!e)),hg(tg(a)?1:2)),h):h&&h(),p})),lg((e=>null!==e))),d),{scrollIntoView:c}}),Ju(vh,Ag,Eh,Yh,Dg),{singleton:!0}),Qh=xg((([{scrollVelocity:e}])=>{const r=fg(!1),t=yg(),n=fg(!1);return ng(ug(e,bg(n,r,t),lg((([e,r])=>!!r)),dg((([e,r,t,n])=>{const{enter:o,exit:i}=r;if(t){if(i(e,n))return!1}else if(o(e,n))return!0;return t})),sg()),r),Qu(ug($g(r,e,t),bg(n)),(([[e,r,t],n])=>{e&&n&&n.change&&n.change(r,t)})),{isSeeking:r,scrollSeekConfiguration:n,scrollSeekRangeChanged:t,scrollVelocity:e}}),Ju(Ah),{singleton:!0}),em=xg((([{scrollContainerState:e,scrollTo:r}])=>{const t=yg(),n=yg(),o=yg(),i=fg(!1),a=fg(void 0);return ng(ug($g(t,n),dg((([{scrollHeight:e,scrollTop:r,viewportHeight:t},{offsetTop:n}])=>({scrollHeight:e,scrollTop:Math.max(0,r-n),viewportHeight:t})))),e),ng(ug(r,bg(n),dg((([e,{offsetTop:r}])=>({...e,top:e.top+r})))),o),{customScrollParent:a,useWindowScroll:i,windowScrollContainerState:t,windowScrollTo:o,windowViewportRect:n}}),Ju(Ag)),rm=xg((([{sizeRanges:e,sizes:r},{headerHeight:t,scrollTop:n},{initialTopMostItemIndex:o},{didMount:i},{useWindowScroll:a,windowScrollContainerState:s,windowViewportRect:l}])=>{const d=yg(),c=fg(void 0),u=fg(null),g=fg(null);return ng(s,u),ng(l,g),Qu(ug(d,bg(r,n,a,u,g,t)),(([e,r,t,n,o,i,a])=>{const s=function(e){return Pg(e).map((({k:e,v:r},t,n)=>{const o=n[t+1];return{endIndex:o?o.k-1:1/0,size:r,startIndex:e}}))}(r.sizeTree);n&&null!==o&&null!==i&&(t=o.scrollTop-i.offsetTop),e({ranges:s,scrollTop:t-=a})})),ng(ug(c,lg(Gu),dg(tm)),o),ng(ug(i,bg(c),lg((([,e])=>void 0!==e)),sg(),dg((([,e])=>e.ranges))),e),{getState:d,restoreStateFrom:c}}),Ju(vh,Ag,kh,$h,em));function tm(e){return{align:"start",index:0,offset:e.scrollTop}}const nm=xg((([{topItemsIndexes:e}])=>{const r=fg(0);return ng(ug(r,lg((e=>e>=0)),dg((e=>Array.from({length:e}).map(((e,r)=>r))))),e),{topItemCount:r}}),Ju(Yh));function om(e){let r,t=!1;return()=>(t||(t=!0,r=e()),r)}const im=om((()=>/iP(ad|od|hone)/i.test(navigator.userAgent)&&/WebKit/i.test(navigator.userAgent))),am=xg((([{deviation:e,scrollBy:r,scrollingInProgress:t,scrollTop:n},{isAtBottom:o,isScrolling:i,lastJumpDueToItemResize:a,scrollDirection:s},{listState:l},{beforeUnshiftWith:d,gap:c,shiftWithOffset:u,sizes:g},{log:h},{recalcInProgress:m}])=>{const b=vg(ug(l,bg(a),gg((([,e,r,t],[{bottom:n,items:o,offsetBottom:i,totalCount:a},s])=>{const l=n+i;let d=0;return r===a&&e.length>0&&o.length>0&&(0===o[0].originalIndex&&0===e[0].originalIndex||(d=l-t,0!==d&&(d+=s))),[d,o,a,l]}),[0,[],0,0]),lg((([e])=>0!==e)),bg(n,s,t,o,h,m),lg((([,e,r,t,,,n])=>!n&&!t&&0!==e&&r===Th)),dg((([[e],,,,,r])=>(r("Upward scrolling compensation",{amount:e},Eg.DEBUG),e)))));function f(t){t>0?(eg(r,{behavior:"auto",top:-t}),eg(e,0)):(eg(e,0),eg(r,{behavior:"auto",top:-t}))}return Qu(ug(b,bg(e,i)),(([r,t,n])=>{n&&im()?eg(e,t-r):f(-r)})),Qu(ug($g(pg(i,!1),e,m),lg((([e,r,t])=>!e&&!t&&0!==r)),dg((([e,r])=>r)),mg(1)),f),ng(ug(u,dg((e=>({top:-e})))),r),Qu(ug(d,bg(g,c),dg((([e,{groupIndices:r,lastSize:t,sizeTree:n},o])=>{function i(e){return e*(t+o)}if(0===r.length)return i(e);{let t=0;const o=Rg(n,0);let a=0,s=0;for(;a<e;){a++,t+=o;let n=r.length===s+1?1/0:r[s+1]-r[s]-1;a+n>e&&(t-=o,n=e-a+1),a+=n,t+=i(n),s++}return t}}))),(t=>{eg(e,t),requestAnimationFrame((()=>{eg(r,{top:t}),requestAnimationFrame((()=>{eg(e,0),eg(m,!1)}))}))})),{deviation:e}}),Ju(Ag,Ah,Yh,vh,Dg,th)),sm=xg((([e,r,t,n,o,i,a,s,l,d])=>({...e,...r,...t,...n,...o,...i,...a,...s,...l,...d})),Ju(jh,qh,$h,Qh,Vh,Xh,Uh,em,Jh,Dg)),lm=xg((([{data:e,defaultItemSize:r,firstItemIndex:t,fixedItemSize:n,gap:o,groupIndices:i,itemSize:a,sizeRanges:s,sizes:l,statefulTotalCount:d,totalCount:c,trackItemSizes:u},{initialItemFinalLocationReached:g,initialTopMostItemIndex:h,scrolledToInitialItem:m},b,f,p,{listState:y,topItemsIndexes:v,...x},{scrollToIndex:w},$,{topItemCount:F},{groupCounts:C},E])=>(ng(x.rangeChanged,E.scrollSeekRangeChanged),ng(ug(E.windowViewportRect,dg((e=>e.visibleHeight))),b.viewportHeight),{data:e,defaultItemHeight:r,firstItemIndex:t,fixedItemHeight:n,gap:o,groupCounts:C,initialItemFinalLocationReached:g,initialTopMostItemIndex:h,scrolledToInitialItem:m,sizeRanges:s,topItemCount:F,topItemsIndexes:v,totalCount:c,...p,groupIndices:i,itemSize:a,listState:y,scrollToIndex:w,statefulTotalCount:d,trackItemSizes:u,...x,...E,...b,sizes:l,...f})),Ju(vh,kh,Ag,rm,Gh,Yh,Eh,am,nm,wh,sm));function dm(e,r){const t={},n={};let o=0;const i=e.length;for(;o<i;)n[e[o]]=1,o+=1;for(const e in r)Object.hasOwn(n,e)||(t[e]=r[e]);return t}const cm=typeof document<"u"?o.useLayoutEffect:o.useEffect;function um(e,t,n){const i=Object.keys(t.required||{}),a=Object.keys(t.optional||{}),s=Object.keys(t.methods||{}),l=Object.keys(t.events||{}),d=o.createContext({});function c(e,r){e.propsReady&&eg(e.propsReady,!1);for(const n of i){eg(e[t.required[n]],r[n])}for(const n of a)if(n in r){eg(e[t.optional[n]],r[n])}e.propsReady&&eg(e.propsReady,!0)}function u(e){return l.reduce(((r,n)=>(r[n]=function(e){let r,t;const n=()=>null==r?void 0:r();return function(o,i){switch(o){case 1:return i?t===i?void 0:(n(),t=i,r=Qu(e,i),r):(n(),qu);case 2:return n(),void(t=null)}}}(e[t.events[n]]),r)),{})}const g=o.forwardRef(((g,h)=>{const{children:m,...b}=g,[f]=o.useState((()=>Xu(function(e){const r=new Map,t=({constructor:e,dependencies:n,id:o,singleton:i})=>{if(i&&r.has(o))return r.get(o);const a=e(n.map((e=>t(e))));return i&&r.set(o,a),a};return t(e)}(e),(e=>{c(e,b)})))),[p]=o.useState(Uu(u,f));cm((()=>{for(const e of l)e in b&&Qu(p[e],b[e]);return()=>{Object.values(p).map(rg)}}),[b,p,f]),cm((()=>{c(f,b)})),o.useImperativeHandle(h,Pu(function(e){return s.reduce(((r,n)=>(r[n]=r=>{eg(e[t.methods[n]],r)},r)),{})}(f)));const y=n;return r(d.Provider,{value:f,children:n?r(y,{...dm([...i,...a,...l],b),children:m}):m})}));return{Component:g,useEmitter:(e,r)=>{const t=o.useContext(d)[e];cm((()=>Qu(t,r)),[r,t])},useEmitterValue:o.version.startsWith("18")?e=>{const r=o.useContext(d)[e],t=o.useCallback((e=>Qu(r,e)),[r]);return o.useSyncExternalStore(t,(()=>tg(r)),(()=>tg(r)))}:e=>{const r=o.useContext(d)[e],[t,n]=o.useState(Uu(tg,r));return cm((()=>Qu(r,(e=>{e!==t&&n(Pu(e))}))),[r,t]),t},usePublisher:e=>o.useCallback(Zu(eg,o.useContext(d)[e]),[e])}}const gm=o.createContext(void 0),hm=o.createContext(void 0),mm=typeof document<"u"?o.useLayoutEffect:o.useEffect;function bm(e,r,t,n=qu,i,a){const s=o.useRef(null),l=o.useRef(null),d=o.useRef(null),c=o.useCallback((t=>{const n=t.target,o=n===window||n===document,i=a?o?window.pageXOffset||document.documentElement.scrollLeft:n.scrollLeft:o?window.pageYOffset||document.documentElement.scrollTop:n.scrollTop,s=a?o?document.documentElement.scrollWidth:n.scrollWidth:o?document.documentElement.scrollHeight:n.scrollHeight,c=a?o?window.innerWidth:n.offsetWidth:o?window.innerHeight:n.offsetHeight,u=()=>{e({scrollHeight:s,scrollTop:Math.max(i,0),viewportHeight:c})};t.suppressFlushSync?u():O.flushSync(u),null!==l.current&&(i===l.current||i<=0||i===s-c)&&(l.current=null,r(!0),d.current&&(clearTimeout(d.current),d.current=null))}),[e,r]);return o.useEffect((()=>{const e=i||s.current;return n(i||s.current),c({suppressFlushSync:!0,target:e}),e.addEventListener("scroll",c,{passive:!0}),()=>{n(null),e.removeEventListener("scroll",c)}}),[s,c,t,n,i]),{scrollByCallback:function(e){a&&(e={behavior:e.behavior,left:e.top}),s.current.scrollBy(e)},scrollerRef:s,scrollToCallback:function(t){const n=s.current;if(!n||(a?"offsetWidth"in n&&0===n.offsetWidth:"offsetHeight"in n&&0===n.offsetHeight))return;const o="smooth"===t.behavior;let i,c,u;n===window?(c=Math.max(ih(document.documentElement,a?"width":"height"),a?document.documentElement.scrollWidth:document.documentElement.scrollHeight),i=a?window.innerWidth:window.innerHeight,u=a?document.documentElement.scrollLeft:document.documentElement.scrollTop):(c=n[a?"scrollWidth":"scrollHeight"],i=ih(n,a?"width":"height"),u=n[a?"scrollLeft":"scrollTop"]);const g=c-i;if(t.top=Math.ceil(Math.max(Math.min(g,t.top),0)),Bh(i,c)||t.top===u)return e({scrollHeight:c,scrollTop:u,viewportHeight:i}),void(o&&r(!0));o?(l.current=t.top,d.current&&clearTimeout(d.current),d.current=setTimeout((()=>{d.current=null,l.current=null,r(!0)}),1e3)):l.current=null,a&&(t={behavior:t.behavior,left:t.top}),n.scrollTo(t)}}}const fm="-webkit-sticky",pm="sticky",ym=om((()=>{if(typeof document>"u")return pm;const e=document.createElement("div");return e.style.position=fm,e.style.position===fm?fm:pm}));function vm(e){return e}const xm=xg((()=>{const e=fg((e=>`Item ${e}`)),r=fg(null),t=fg((e=>`Group ${e}`)),n=fg({}),o=fg(vm),i=fg("div"),a=fg(qu),s=(e,r=null)=>pg(ug(n,dg((r=>r[e])),sg()),r);return{components:n,computeItemKey:o,context:r,EmptyPlaceholder:s("EmptyPlaceholder"),FooterComponent:s("Footer"),GroupComponent:s("Group","div"),groupContent:t,HeaderComponent:s("Header"),HeaderFooterTag:i,ItemComponent:s("Item","div"),itemContent:e,ListComponent:s("List","div"),ScrollerComponent:s("Scroller","div"),scrollerRef:a,ScrollSeekPlaceholder:s("ScrollSeekPlaceholder"),TopItemListComponent:s("TopItemList")}})),wm=xg((([e,r])=>({...e,...r})),Ju(lm,xm)),$m=({height:e})=>r("div",{style:{height:e}}),Fm={overflowAnchor:"none",position:ym(),zIndex:1},Cm={overflowAnchor:"none"},Em={...Cm,display:"inline-block",height:"100%"},Sm=o.memo((function({showTopList:e=!1}){const t=Pm("listState"),n=Ym("sizeRanges"),i=Pm("useWindowScroll"),a=Pm("customScrollParent"),s=Ym("windowScrollContainerState"),l=Ym("scrollContainerState"),d=a||i?s:l,c=Pm("itemContent"),u=Pm("context"),g=Pm("groupContent"),h=Pm("trackItemSizes"),m=Pm("itemSize"),b=Pm("log"),f=Ym("gap"),p=Pm("horizontalDirection"),{callbackRef:v}=Tg(n,m,h,e?qu:d,b,f,a,p,Pm("skipAnimationFrameInResizeObserver")),[x,w]=o.useState(0);Nm("deviation",(e=>{x!==e&&w(e)}));const $=Pm("EmptyPlaceholder"),F=Pm("ScrollSeekPlaceholder")||$m,C=Pm("ListComponent"),E=Pm("ItemComponent"),S=Pm("GroupComponent"),D=Pm("computeItemKey"),k=Pm("isSeeking"),B=Pm("groupIndices").length>0,T=Pm("alignToBottom"),z=Pm("initialItemFinalLocationReached"),I=e?{}:{boxSizing:"border-box",...p?{display:"inline-block",height:"100%",marginLeft:0!==x?x:T?"auto":0,paddingLeft:t.offsetTop,paddingRight:t.offsetBottom,whiteSpace:"nowrap"}:{marginTop:0!==x?x:T?"auto":0,paddingBottom:t.offsetBottom,paddingTop:t.offsetTop},...z?{}:{visibility:"hidden"}};return!e&&0===t.totalCount&&$?r($,{...zm($,u)}):r(C,{...zm(C,u),"data-testid":e?"virtuoso-top-item-list":"virtuoso-item-list",ref:v,style:I,children:(e?t.topItems:t.items).map((e=>{const r=e.originalIndex,n=D(r+t.firstItemIndex,e.data,u);return k?y(F,{...zm(F,u),height:e.size,index:e.index,key:n,type:e.type||"item",..."group"===e.type?{}:{groupIndex:e.groupIndex}}):"group"===e.type?y(S,{...zm(S,u),"data-index":r,"data-item-index":e.index,"data-known-size":e.size,key:n,style:Fm},g(e.index,u)):y(E,{...zm(E,u),...Im(E,e.data),"data-index":r,"data-item-group-index":e.groupIndex,"data-item-index":e.index,"data-known-size":e.size,key:n,style:p?Em:Cm},B?c(e.index,e.groupIndex,e.data,u):c(e.index,e.data,u))}))})})),Dm={height:"100%",outline:"none",overflowY:"auto",position:"relative",WebkitOverflowScrolling:"touch"},km={outline:"none",overflowX:"auto",position:"relative"},Bm=e=>({height:"100%",position:"absolute",top:0,width:"100%",...e?{display:"flex",flexDirection:"column"}:{}}),Tm={position:ym(),top:0,width:"100%",zIndex:1};function zm(e,r){if("string"!=typeof e)return{context:r}}function Im(e,r){return{item:"string"==typeof e?void 0:r}}const Am=o.memo((function(){const e=Pm("HeaderComponent"),t=Ym("headerHeight"),n=Pm("HeaderFooterTag"),i=kg(o.useMemo((()=>e=>{t(ih(e,"height"))}),[t]),!0,Pm("skipAnimationFrameInResizeObserver")),a=Pm("context");return e?r(n,{ref:i,children:r(e,{...zm(e,a)})}):null})),Om=o.memo((function(){const e=Pm("FooterComponent"),t=Ym("footerHeight"),n=Pm("HeaderFooterTag"),i=kg(o.useMemo((()=>e=>{t(ih(e,"height"))}),[t]),!0,Pm("skipAnimationFrameInResizeObserver")),a=Pm("context");return e?r(n,{ref:i,children:r(e,{...zm(e,a)})}):null}));function Mm({useEmitter:e,useEmitterValue:t,usePublisher:n}){return o.memo((function({children:o,style:i,...a}){const s=n("scrollContainerState"),l=t("ScrollerComponent"),d=n("smoothScrollTargetReached"),c=t("scrollerRef"),u=t("context"),g=t("horizontalDirection")||!1,{scrollByCallback:h,scrollerRef:m,scrollToCallback:b}=bm(s,d,l,c,void 0,g);return e("scrollTo",b),e("scrollBy",h),r(l,{"data-testid":"virtuoso-scroller","data-virtuoso-scroller":!0,ref:m,style:{...g?km:Dm,...i},tabIndex:0,...a,...zm(l,u),children:o})}))}function Hm({useEmitter:e,useEmitterValue:t,usePublisher:n}){return o.memo((function({children:o,style:i,...a}){const s=n("windowScrollContainerState"),l=t("ScrollerComponent"),d=n("smoothScrollTargetReached"),c=t("totalListHeight"),u=t("deviation"),g=t("customScrollParent"),h=t("context"),{scrollByCallback:m,scrollerRef:b,scrollToCallback:f}=bm(s,d,l,qu,g);return mm((()=>(b.current=g||window,()=>{b.current=null})),[b,g]),e("windowScrollTo",f),e("scrollBy",m),r(l,{"data-virtuoso-scroller":!0,style:{position:"relative",...i,...0!==c?{height:c+u}:{}},...a,...zm(l,h),children:o})}))}const Rm=({children:e})=>{const t=o.useContext(gm),n=Ym("viewportHeight"),i=Ym("fixedItemHeight"),a=Pm("alignToBottom"),s=Pm("horizontalDirection"),l=kg(o.useMemo((()=>Vu(n,(e=>ih(e,s?"width":"height")))),[n,s]),!0,Pm("skipAnimationFrameInResizeObserver"));return o.useEffect((()=>{t&&(n(t.viewportHeight),i(t.itemHeight))}),[t,n,i]),r("div",{"data-viewport-type":"element",ref:l,style:Bm(a),children:e})},Lm=({children:e})=>{const t=o.useContext(gm),n=Ym("windowViewportRect"),i=Ym("fixedItemHeight"),a=Pm("customScrollParent"),s=Ig(n,a,Pm("skipAnimationFrameInResizeObserver")),l=Pm("alignToBottom");return o.useEffect((()=>{t&&(i(t.itemHeight),n({offsetTop:0,visibleHeight:t.viewportHeight,visibleWidth:100}))}),[t,n,i]),r("div",{"data-viewport-type":"window",ref:s,style:Bm(l),children:e})},jm=({children:e})=>{const t=Pm("TopItemListComponent")||"div",n=Pm("headerHeight"),o={...Tm,marginTop:`${n}px`},i=Pm("context");return r(t,{style:o,...zm(t,i),children:e})},_m=o.memo((function(t){const n=Pm("useWindowScroll"),o=Pm("topItemsIndexes").length>0,i=Pm("customScrollParent"),a=Pm("context"),s=i||n?Um:Vm,l=i||n?Lm:Rm;return e(s,{...t,...zm(s,a),children:[o&&r(jm,{children:r(Sm,{showTopList:!0})}),e(l,{children:[r(Am,{}),r(Sm,{}),r(Om,{})]})]})})),{Component:Wm,useEmitter:Nm,useEmitterValue:Pm,usePublisher:Ym}=um(wm,{events:{atBottomStateChange:"atBottomStateChange",atTopStateChange:"atTopStateChange",endReached:"endReached",groupIndices:"groupIndices",isScrolling:"isScrolling",itemsRendered:"itemsRendered",rangeChanged:"rangeChanged",startReached:"startReached",totalListHeightChanged:"totalListHeightChanged"},methods:{autoscrollToBottom:"autoscrollToBottom",getState:"getState",scrollBy:"scrollBy",scrollIntoView:"scrollIntoView",scrollTo:"scrollTo",scrollToIndex:"scrollToIndex"},optional:{alignToBottom:"alignToBottom",atBottomThreshold:"atBottomThreshold",atTopThreshold:"atTopThreshold",components:"components",computeItemKey:"computeItemKey",context:"context",customScrollParent:"customScrollParent",data:"data",defaultItemHeight:"defaultItemHeight",firstItemIndex:"firstItemIndex",fixedItemHeight:"fixedItemHeight",followOutput:"followOutput",groupContent:"groupContent",groupCounts:"groupCounts",headerFooterTag:"HeaderFooterTag",horizontalDirection:"horizontalDirection",increaseViewportBy:"increaseViewportBy",initialItemCount:"initialItemCount",initialScrollTop:"initialScrollTop",initialTopMostItemIndex:"initialTopMostItemIndex",itemContent:"itemContent",itemSize:"itemSize",logLevel:"logLevel",overscan:"overscan",restoreStateFrom:"restoreStateFrom",scrollerRef:"scrollerRef",scrollSeekConfiguration:"scrollSeekConfiguration",skipAnimationFrameInResizeObserver:"skipAnimationFrameInResizeObserver",topItemCount:"topItemCount",totalCount:"totalCount",useWindowScroll:"useWindowScroll"},required:{}},_m),Vm=Mm({useEmitter:Nm,useEmitterValue:Pm,usePublisher:Ym}),Um=Hm({useEmitter:Nm,useEmitterValue:Pm,usePublisher:Ym}),Zm=Wm,Gm={bottom:0,itemHeight:0,items:[],itemWidth:0,offsetBottom:0,offsetTop:0,top:0},qm={bottom:0,itemHeight:0,items:[{index:0}],itemWidth:0,offsetBottom:0,offsetTop:0,top:0},{ceil:Xm,floor:Km,max:Jm,min:Qm,round:eb}=Math;function rb(e,r,t){return Array.from({length:r-e+1}).map(((r,n)=>({data:null===t?null:t[n+e],index:n+e})))}function tb(e,r){return e&&e.width===r.width&&e.height===r.height}function nb(e,r){return e&&e.column===r.column&&e.row===r.row}const ob=xg((([{increaseViewportBy:e,listBoundary:r,overscan:t,visibleRange:n},{footerHeight:o,headerHeight:i,scrollBy:a,scrollContainerState:s,scrollTo:l,scrollTop:d,smoothScrollTargetReached:c,viewportHeight:u},g,h,{didMount:m,propsReady:b},{customScrollParent:f,useWindowScroll:p,windowScrollContainerState:y,windowScrollTo:v,windowViewportRect:x},w])=>{const $=fg(0),F=fg(0),C=fg(Gm),E=fg({height:0,width:0}),S=fg({height:0,width:0}),D=yg(),k=yg(),B=fg(0),T=fg(null),z=fg({column:0,row:0}),I=yg(),A=yg(),O=fg(!1),M=fg(0),H=fg(!0),R=fg(!1),L=fg(!1);Qu(ug(m,bg(M),lg((([e,r])=>!!r))),(()=>{eg(H,!1)})),Qu(ug($g(m,H,S,E,M,R),lg((([e,r,t,n,,o])=>e&&!r&&0!==t.height&&0!==n.height&&!o))),(([,,,,e])=>{eg(R,!0),Sh(1,(()=>{eg(D,e)})),og(ug(d),(()=>{eg(r,[0,0]),eg(H,!0)}))})),ng(ug(A,lg((e=>null!=e&&e.scrollTop>0)),cg(0)),F),Qu(ug(m,bg(A),lg((([,e])=>null!=e))),(([,e])=>{e&&(eg(E,e.viewport),eg(S,e.item),eg(z,e.gap),e.scrollTop>0&&(eg(O,!0),og(ug(d,hg(1)),(e=>{eg(O,!1)})),eg(l,{top:e.scrollTop})))})),ng(ug(E,dg((({height:e})=>e))),u),ng(ug($g(Fg(E,tb),Fg(S,tb),Fg(z,((e,r)=>e&&e.column===r.column&&e.row===r.row)),Fg(d)),dg((([e,r,t,n])=>({gap:t,item:r,scrollTop:n,viewport:e})))),I),ng(ug($g(Fg($),n,Fg(z,nb),Fg(S,tb),Fg(E,tb),Fg(T),Fg(F),Fg(O),Fg(H),Fg(M)),lg((([,,,,,,,e])=>!e)),dg((([e,[r,t],n,o,i,a,s,,l,d])=>{const{column:c,row:u}=n,{height:g,width:h}=o,{width:m}=i;if(0===s&&(0===e||0===m))return Gm;if(0===h){const r=Dh(d,e);return function(e){return{...qm,items:e}}(rb(r,r+Math.max(s-1,0),a))}const b=ib(m,h,c);let f,p;l?0===r&&0===t&&s>0?(f=0,p=s-1):(f=b*Km((r+u)/(g+u)),p=b*Xm((t+u)/(g+u))-1,p=Qm(e-1,Jm(p,b-1)),f=Qm(p,Jm(0,f))):(f=0,p=-1);const y=rb(f,p,a),{bottom:v,top:x}=ab(i,n,o,y),w=Xm(e/b);return{bottom:v,itemHeight:g,items:y,itemWidth:h,offsetBottom:w*g+(w-1)*u-v,offsetTop:x,top:x}}))),C),ng(ug(T,lg((e=>null!==e)),dg((e=>e.length))),$),ng(ug($g(E,S,C,z),lg((([e,r,{items:t}])=>t.length>0&&0!==r.height&&0!==e.height)),dg((([e,r,{items:t},n])=>{const{bottom:o,top:i}=ab(e,n,r,t);return[i,o]})),sg(rh)),r);const j=fg(!1);ng(ug(d,bg(j),dg((([e,r])=>r||0!==e))),j);const _=vg(ug($g(C,$),lg((([{items:e}])=>e.length>0)),bg(j),lg((([[e,r],t])=>{const n=e.items[e.items.length-1].index===r-1;return(t||e.bottom>0&&e.itemHeight>0&&0===e.offsetBottom&&e.items.length===r)&&n})),dg((([[,e]])=>e-1)),sg())),W=vg(ug(Fg(C),lg((({items:e})=>e.length>0&&0===e[0].index)),cg(0),sg())),N=vg(ug(Fg(C),bg(O),lg((([{items:e},r])=>e.length>0&&!r)),dg((([{items:e}])=>({endIndex:e[e.length-1].index,startIndex:e[0].index}))),sg(eh),mg(0)));ng(N,h.scrollSeekRangeChanged),ng(ug(D,bg(E,S,$,z),dg((([e,r,t,n,o])=>{const i=Ch(e),{align:a,behavior:s,offset:l}=i;let d=i.index;"LAST"===d&&(d=n-1),d=Jm(0,d,Qm(n-1,d));let c=sb(r,o,t,d);return"end"===a?c=eb(c-r.height+t.height):"center"===a&&(c=eb(c-r.height/2+t.height/2)),l&&(c+=l),{behavior:s,top:c}}))),l);const P=pg(ug(C,dg((e=>e.offsetBottom+e.bottom))),0);return ng(ug(x,dg((e=>({height:e.visibleHeight,width:e.visibleWidth})))),E),{customScrollParent:f,data:T,deviation:B,footerHeight:o,gap:z,headerHeight:i,increaseViewportBy:e,initialItemCount:F,itemDimensions:S,overscan:t,restoreStateFrom:A,scrollBy:a,scrollContainerState:s,scrollHeight:k,scrollTo:l,scrollToIndex:D,scrollTop:d,smoothScrollTargetReached:c,totalCount:$,useWindowScroll:p,viewportDimensions:E,windowScrollContainerState:y,windowScrollTo:v,windowViewportRect:x,...h,gridState:C,horizontalDirection:L,initialTopMostItemIndex:M,totalListHeight:P,...g,endReached:_,propsReady:b,rangeChanged:N,startReached:W,stateChanged:I,stateRestoreInProgress:O,...w}}),Ju(jh,Ag,Ah,Qh,$h,em,Dg));function ib(e,r,t){return Jm(1,Km((e+t)/(Km(r)+t)))}function ab(e,r,t,n){const{height:o}=t;if(void 0===o||0===n.length)return{bottom:0,top:0};const i=sb(e,r,t,n[0].index);return{bottom:sb(e,r,t,n[n.length-1].index)+o,top:i}}function sb(e,r,t,n){const o=ib(e.width,t.width,r.column),i=Km(n/o),a=i*t.height+Jm(0,i-1)*r.row;return a>0?a+r.row:a}const lb=xg((()=>{const e=fg((e=>`Item ${e}`)),r=fg({}),t=fg(null),n=fg("virtuoso-grid-item"),o=fg("virtuoso-grid-list"),i=fg(vm),a=fg("div"),s=fg(qu),l=(e,t=null)=>pg(ug(r,dg((r=>r[e])),sg()),t),d=fg(!1),c=fg(!1);return ng(Fg(c),d),{components:r,computeItemKey:i,context:t,FooterComponent:l("Footer"),HeaderComponent:l("Header"),headerFooterTag:a,itemClassName:n,ItemComponent:l("Item","div"),itemContent:e,listClassName:o,ListComponent:l("List","div"),readyStateChanged:d,reportReadyState:c,ScrollerComponent:l("Scroller","div"),scrollerRef:s,ScrollSeekPlaceholder:l("ScrollSeekPlaceholder","div")}})),db=xg((([e,r])=>({...e,...r})),Ju(ob,lb)),cb=o.memo((function(){const e=yb("gridState"),t=yb("listClassName"),n=yb("itemClassName"),i=yb("itemContent"),a=yb("computeItemKey"),s=yb("isSeeking"),l=vb("scrollHeight"),d=yb("ItemComponent"),c=yb("ListComponent"),u=yb("ScrollSeekPlaceholder"),g=yb("context"),h=vb("itemDimensions"),m=vb("gap"),b=yb("log"),f=yb("stateRestoreInProgress"),p=vb("reportReadyState"),v=kg(o.useMemo((()=>e=>{const r=e.parentElement.parentElement.scrollHeight;l(r);const t=e.firstChild;if(t){const{height:e,width:r}=t.getBoundingClientRect();h({height:e,width:r})}m({column:$b("column-gap",getComputedStyle(e).columnGap,b),row:$b("row-gap",getComputedStyle(e).rowGap,b)})}),[l,h,m,b]),!0,!1);return mm((()=>{e.itemHeight>0&&e.itemWidth>0&&p(!0)}),[e]),f?null:r(c,{className:t,ref:v,...zm(c,g),"data-testid":"virtuoso-item-list",style:{paddingBottom:e.offsetBottom,paddingTop:e.offsetTop},children:e.items.map((t=>{const o=a(t.index,t.data,g);return s?r(u,{...zm(u,g),height:e.itemHeight,index:t.index,width:e.itemWidth},o):y(d,{...zm(d,g),className:n,"data-index":t.index,key:o},i(t.index,t.data,g))}))})})),ub=o.memo((function(){const e=yb("HeaderComponent"),t=vb("headerHeight"),n=yb("headerFooterTag"),i=kg(o.useMemo((()=>e=>{t(ih(e,"height"))}),[t]),!0,!1),a=yb("context");return e?r(n,{ref:i,children:r(e,{...zm(e,a)})}):null})),gb=o.memo((function(){const e=yb("FooterComponent"),t=vb("footerHeight"),n=yb("headerFooterTag"),i=kg(o.useMemo((()=>e=>{t(ih(e,"height"))}),[t]),!0,!1),a=yb("context");return e?r(n,{ref:i,children:r(e,{...zm(e,a)})}):null})),hb=({children:e})=>{const t=o.useContext(hm),n=vb("itemDimensions"),i=vb("viewportDimensions"),a=kg(o.useMemo((()=>e=>{i(e.getBoundingClientRect())}),[i]),!0,!1);return o.useEffect((()=>{t&&(i({height:t.viewportHeight,width:t.viewportWidth}),n({height:t.itemHeight,width:t.itemWidth}))}),[t,i,n]),r("div",{ref:a,style:Bm(!1),children:e})},mb=({children:e})=>{const t=o.useContext(hm),n=vb("windowViewportRect"),i=vb("itemDimensions"),a=yb("customScrollParent"),s=Ig(n,a,!1);return o.useEffect((()=>{t&&(i({height:t.itemHeight,width:t.itemWidth}),n({offsetTop:0,visibleHeight:t.viewportHeight,visibleWidth:t.viewportWidth}))}),[t,n,i]),r("div",{ref:s,style:Bm(!1),children:e})},bb=o.memo((function({...t}){const n=yb("useWindowScroll"),o=yb("customScrollParent"),i=o||n?wb:xb,a=o||n?mb:hb,s=yb("context");return r(i,{...t,...zm(i,s),children:e(a,{children:[r(ub,{}),r(cb,{}),r(gb,{})]})})})),{Component:fb,useEmitter:pb,useEmitterValue:yb,usePublisher:vb}=um(db,{events:{atBottomStateChange:"atBottomStateChange",atTopStateChange:"atTopStateChange",endReached:"endReached",isScrolling:"isScrolling",rangeChanged:"rangeChanged",readyStateChanged:"readyStateChanged",startReached:"startReached",stateChanged:"stateChanged"},methods:{scrollBy:"scrollBy",scrollTo:"scrollTo",scrollToIndex:"scrollToIndex"},optional:{components:"components",computeItemKey:"computeItemKey",context:"context",customScrollParent:"customScrollParent",data:"data",headerFooterTag:"headerFooterTag",increaseViewportBy:"increaseViewportBy",initialItemCount:"initialItemCount",initialTopMostItemIndex:"initialTopMostItemIndex",itemClassName:"itemClassName",itemContent:"itemContent",listClassName:"listClassName",logLevel:"logLevel",overscan:"overscan",restoreStateFrom:"restoreStateFrom",scrollerRef:"scrollerRef",scrollSeekConfiguration:"scrollSeekConfiguration",totalCount:"totalCount",useWindowScroll:"useWindowScroll"}},bb),xb=Mm({useEmitter:pb,useEmitterValue:yb,usePublisher:vb}),wb=Hm({useEmitter:pb,useEmitterValue:yb,usePublisher:vb});function $b(e,r,t){return"normal"!==r&&!(null!=r&&r.endsWith("px"))&&t(`${e} was not resolved to pixel value correctly`,r,Eg.WARN),"normal"===r?0:parseInt(null!=r?r:"0",10)}const Fb=o.createContext({focusedIndex:-1,setFocusedIndex:()=>{}}),Cb=({children:e})=>{const[t,n]=s(-1);return r(Fb.Provider,{value:{focusedIndex:t,setFocusedIndex:n},children:e})},Eb=F.div`
    border: ${Xn["width-010"]} ${Xn.solid} ${Zn.border};
    border-radius: ${Jn.sm};
    background: ${Zn.bg};

    --x-spacing: 0px;
    --available-width: calc(100vw - var(--x-spacing) * 2);

    ${eo.MaxWidth.sm} {
        --x-spacing: ${Qn["sm-margin"]}px;
        max-height: 15rem;
    }

    ${eo.MaxWidth.xs} {
        --x-spacing: ${Qn["xs-margin"]}px;
    }

    ${eo.MaxWidth.xxs} {
        --x-spacing: ${Qn["xxs-margin"]}px;
    }

    max-width: var(--available-width);

    ${e=>e.$customWidth?`width: ${e.$customWidth};`:e.$width?`width: ${e.$width}px; min-width: min(23rem, var(--available-width));`:"min-width: min(23rem, var(--available-width));"}

    max-height: min(27rem, var(--available-height, infinity * 1px));
    overflow: hidden;
    overflow-y: auto;
    ${e=>"small"===e.$variant?Gn["body-md-regular"]:Gn["body-baseline-regular"]}

    &::-webkit-scrollbar {
        width: 14px;
    }

    &::-webkit-scrollbar-track {
        background: transparent;
    }

    &::-webkit-scrollbar-thumb {
        background: ${Zn["bg-inverse-subtlest"]};
        border: 5px solid transparent;
        border-radius: ${Jn.full};
        background-clip: padding-box;
    }
`,Sb=F.div`
    background: transparent;
    padding: ${Kn["spacing-8"]};
`,Db=F.ul`
    list-style-type: none;
`,kb=F.li`
    display: flex;
    align-items: flex-start;
    gap: ${Kn["spacing-8"]};
    padding: ${Kn["spacing-12"]} ${Kn["spacing-8"]};
    cursor: pointer;
    border: none;
    border-radius: ${Jn.none};
    outline: none;

    ${e=>e.$disabled?C`
                cursor: not-allowed;
            `:e.$active&&e.$selected?C`
                background: ${Zn["bg-hover"]};
            `:e.$active?C`
                background: ${Zn["bg-hover-subtle"]};
            `:void 0}
`,Bb=F(N)`
    flex-shrink: 0;
    height: 1lh;
    width: 1rem;
    color: ${Zn["icon-selected"]};
`,Tb=F.div`
    flex-shrink: 0;
    height: 1lh;
    width: 1rem;
`,zb=F(W)`
    flex-shrink: 0;
    height: 1lh;
    width: 1lh;
    color: ${Zn["icon-selected"]};
`,Ib=F(_)`
    flex-shrink: 0;
    height: 1lh;
    width: 1lh;
    color: ${Zn["icon-primary-subtlest"]};
`,Ab=F(ne)`
    flex-shrink: 0;
    height: 1lh;
    width: 1lh;
    color: ${Zn["icon-disabled-subtle"]};
`,Ob=F.div`
    width: 100%;
    display: flex;
    justify-content: flex-end;
`,Mb=F(ko)`
    cursor: pointer;
    overflow: hidden;
    color: ${Zn["text-primary"]};
    font-size: inherit;
`,Hb=F(Mb)`
    ${Gn["body-baseline-semibold"]}
`,Rb=F(Mb)`
    ${Gn["body-md-semibold"]}
    padding: ${Kn["spacing-8"]} ${Kn["spacing-8"]};
`,Lb=F.div`
    width: 100%;
    display: flex;
    padding: ${Kn["spacing-12"]} ${Kn["spacing-16"]};
    align-items: center;
`,jb=F(T)`
    margin-right: ${Kn["spacing-4"]};
    color: ${Zn["icon-error"]};
    height: 1em;
    width: 1em;
`,_b=F(ma)`
    margin-right: ${Kn["spacing-8"]};
    color: ${Zn.icon};
`,Wb=F.div`
    ${Ha()}
    color: ${Zn["text-subtle"]};
    padding: 0 ${Kn["spacing-16"]} ${Kn["spacing-12"]}
        ${Kn["spacing-16"]};
`,Nb=F.div`
    background: ${Zn["bg-strong"]};
    border-radius: ${Jn.sm};
    display: flex;
    align-items: center;

    ${e=>"small"===e.$variant?Gn["body-md-regular"]:Gn["body-baseline-regular"]}
`,Pb=F.label`
    flex: 1;
    display: flex;
    align-items: center;
    gap: ${Kn["spacing-8"]};
    padding: ${e=>"small"===e.$variant?C`
                  ${Kn["spacing-8"]} ${Kn["spacing-16"]}
              `:C`10px ${Kn["spacing-8"]}`};
`,Yb=F(Do)`
    flex: 1;
`,Vb=F(oe)`
    color: ${Zn.icon};
    flex-shrink: 0;
    height: 1em;
    width: 1em;
`,Ub=F(Fs)`
    flex-shrink: 0;
    align-self: stretch;
    box-sizing: content-box;
    padding: ${Kn["spacing-8"]};
    margin-left: -${Kn["spacing-8"]};
    color: ${Zn.icon};
    cursor: pointer;
    font-size: inherit;

    svg {
        flex-shrink: 0;
        height: 1em;
        width: 1em;
    }
`,Zb=v(((t,n)=>{var{value:o,variant:i,onClear:a}=t,s=ae(t,["value","variant","onClear"]);return e(Nb,{$variant:i,children:[e(Pb,{$variant:i,children:[r(Vb,{"aria-hidden":!0}),r(Yb,Object.assign({ref:n,value:o,$variant:i},s))]}),o&&r(Ub,{"aria-label":"Clear search",focusOutline:"browser",onClick:a,children:r(j,{"aria-hidden":!0})})]})})),Gb=v((({listItems:n,multiSelect:o,maxSelectable:i,selectedItems:l,disableItemFocus:d,itemsLoadState:c="success",itemTruncationType:u="end",itemMaxLines:h=2,labelDisplayType:b="inline",variant:f="default",listboxId:y,matchElementWidth:v=!1,width:w,topScrollItem:$,onSelectItem:F,onSelectAll:C,onDismiss:E,onRetry:S,valueExtractor:D,listExtractor:k,renderListItem:B,renderCustomCallToAction:T,enableSearch:z,hideNoResultsDisplay:I,noResultsDescription:A,customLabels:O,searchPlaceholder:M,searchFunction:H,onSearch:R},L)=>{const{noResultsLabel:j="No results found.",selectAllButtonLabel:_="Select all",clearAllButtonLabel:W="Clear all"}=O||{},N=(null==O?void 0:O.searchPlaceholder)||M||"Search",P=(null==O?void 0:O.noResultsDescription)||A,{focusedIndex:Y,setFocusedIndex:V}=p(Fb),{elementWidth:U,setFloatingRef:Z,getFloatingProps:G,styles:q}=p(Zs),[X,K]=s(""),[J,Q]=s(null!=n?n:[]),ee=aa(c),re=(()=>{const[e,r]=s(!1);return g((()=>{r(!0)}),[]),e})(),te=a(null),ne=a(null),oe=a([]),ie=a(null),ae=a(null),se=!!i&&!!l&&(null==l?void 0:l.length)===i,le=e=>{const r=k?k(e):null==e?void 0:e.toString();return"object"==typeof r?{title:r.title,secondaryLabel:r.secondaryLabel}:{title:null!=r?r:""}},de=m((e=>!!_u(l,(r=>Nu(r,e)))),[l]),ce=ia((()=>null==H?void 0:H(X))),ue=ia((()=>null==n?void 0:n.filter((e=>{const{title:r,secondaryLabel:t}=le(e),n=X.trim().toLowerCase();return r.toLowerCase().includes(n)||t&&t.toLowerCase().includes(n)})))),ge=m((e=>{var r,t;if(d)return;if(ie.current)return V(-1),void setTimeout((()=>{var e;return null===(e=ie.current)||void 0===e?void 0:e.focus()}),0);const n=null!=J?J:[];if(0===n.length)return;if(void 0!==(null==e?void 0:e.index)){const t=Math.max(0,Math.min(e.index,n.length-1));return null===(r=ae.current)||void 0===r||r.scrollToIndex({index:t,align:"center"}),V(t),void setTimeout((()=>{var e;return null===(e=oe.current[t])||void 0===e?void 0:e.focus()}),0)}const o=(null==e?void 0:e.preferSelected)?n.findIndex((e=>de(e))):-1,i=-1!==o?o:Y>=0&&Y<n.length?Y:0;null===(t=ae.current)||void 0===t||t.scrollToIndex({index:i,align:"center"}),V(i),setTimeout((()=>{var e;return null===(e=oe.current[i])||void 0===e?void 0:e.focus()}),0)}),[de,d,J,Y,V]),he=(e,r)=>{se&&!de(e)||(V(r),null==F||F(e,(e=>D?D(e):e)(e)))},me=e=>{const r=e.target.value;K(r),null==R||R()},be=()=>{var e;K(""),null===(e=ie.current)||void 0===e||e.focus(),null==R||R()},fe=()=>null==S?void 0:S();((e,r,t="window",n)=>{const o=a();g((()=>{o.current=r}),[r]),g((()=>{let r;switch(t){case"window":r=window;break;case"document":r=document;break;default:r=t}if(!r||!r.addEventListener)return;const i=e=>{var r;return null===(r=o.current)||void 0===r?void 0:r.call(o,e)};return r.addEventListener(e,i,n),()=>{null==r||r.removeEventListener(e,i,n)}}),[e,t])})("keydown",(e=>{var r,t;switch(e.code){case"ArrowDown":if(e.preventDefault(),Y<J.length-1){const e=Y+1;null===(r=oe.current[e])||void 0===r||r.focus(),V(e)}break;case"ArrowUp":if(e.preventDefault(),Y>0){const e=Y-1;null===(t=oe.current[e])||void 0===t||t.focus(),V(e)}else 0===Y&&ie.current&&(ie.current.focus(),V(-1));break;case"Space":case"Enter":document.activeElement===oe.current[Y]&&(e.preventDefault(),J[Y]&&he(J[Y],Y))}})),x(L,(()=>({refocus:ge})),[ge]),g((()=>{var e;if(!$)return void(null===(e=ae.current)||void 0===e||e.scrollTo({top:0}));const r=setTimeout((()=>{if(!n)return;const e=n.indexOf($);ae.current&&-1!==e&&(ae.current.scrollToIndex({index:e}),V(e))}),0);return()=>clearTimeout(r)}),[oe,n,V,$]),g((()=>{d||re&&ee&&"success"===c&&ie.current&&(V(-1),ie.current.focus())}),[re,ee,c,V,d]),g((()=>{var e;Q(null!==(e=""===X?n:H?ce():ue())&&void 0!==e?e:[])}),[ce,ue,n,H,X]),g((()=>{var e,r,t;if(re)return;if(d||!n)return;const o=n.findIndex((e=>de(e)));ie.current?(V(-1),setTimeout((()=>{var e;return null===(e=ie.current)||void 0===e?void 0:e.focus()}),200)):Y>0?(null===(e=ae.current)||void 0===e||e.scrollToIndex({index:Y,align:"center"}),setTimeout((()=>{var e;return null===(e=oe.current[Y])||void 0===e?void 0:e.focus()}),200)):-1!==o?(null===(r=ae.current)||void 0===r||r.scrollToIndex({index:o,align:"center"}),V(o),setTimeout((()=>{var e;return null===(e=oe.current[o])||void 0===e?void 0:e.focus()}),200)):(null===(t=ae.current)||void 0===t||t.scrollToIndex({index:0}),V(0),setTimeout((()=>{var e;return null===(e=oe.current[0])||void 0===e?void 0:e.focus()}),200))}),[de,d,Y,n,re,V]);const pe=e=>o?r(se&&!e?Ab:e?zb:Ib,{"aria-hidden":!0}):e?r(Bb,{"aria-hidden":!0}):r(Tb,{}),ye=(e,t)=>{const{title:n,secondaryLabel:o}=le(e);return r(ll,{displayType:b,label:n,maxLines:h,selected:t,disabled:!t&&se,sublabel:o,truncationType:u,variant:f})},ve=(n,i)=>{if(!S||"success"===c){const a=de(n),s=i===Y;return r(kb,{"aria-selected":a,"aria-multiselectable":o,"aria-disabled":!a&&se,"aria-posinset":i+1,"aria-setsize":null==J?void 0:J.length,"data-testid":"list-item",onClick:()=>he(n,i),onMouseEnter:()=>(e=>V(e))(i),ref:e=>{oe.current[i]=e},role:"option",tabIndex:s?0:-1,$active:s,$selected:a,$disabled:!a&&se,children:B?B(n,{selected:a}):e(t,{children:[pe(a),ye(n,a)]})},((e,r)=>`item_${r}__${D?D(e):e}`)(n,i))}},xe=()=>{if((z||H)&&"success"===c)return r(Zb,{ref:ie,onChange:me,value:X,placeholder:N,"data-testid":"search-input","aria-label":"Enter text to search",onClear:be,variant:f})},we=()=>{if(l&&o&&J.length>0&&!X&&"success"===c)return r(Ob,{children:r(Rb,{onClick:C,type:"button",$variant:f,children:i||0!==l.length?W:_})})},$e=()=>{if(!I&&(X||!z)&&0===J.length&&"success"===c)return e(t,{children:[e(Lb,{"data-testid":"list-no-results",children:[r(jb,{"data-testid":"no-result-icon"}),j]}),P&&r(Wb,{"data-testid":"no-result-desc",children:P})]})},Fe=()=>{if(S&&"loading"===c)return e(Lb,{"data-testid":"list-loading",children:[r(_b,{}),"Loading..."]})},Ce=()=>{if(S&&"fail"===c)return e(Lb,{"data-testid":"list-fail",children:[r(jb,{"data-testid":"load-error-icon"}),"Failed to load. ",r(Hb,{onClick:fe,type:"button",$variant:f,children:"Try again."})]})},Ee=()=>{var e;const t="test"===process.env.NODE_ENV;return r(Db,{role:"listbox",id:y,children:r(Zm,Object.assign({ref:ae,style:{height:"100%"},data:J,customScrollParent:null!==(e=te.current)&&void 0!==e?e:void 0,itemContent:(e,r)=>ve(r,e)},t?{initialItemCount:J.length}:{}),t?J.length:void 0)})};return e(Eb,Object.assign({"data-testid":"dropdown-container",ref:li(te,Z),style:q},G(),{$width:v?U:void 0,$customWidth:w,$variant:f,children:[e(Sb,{ref:ne,"data-testid":"dropdown-list",children:[xe(),we(),$e(),Fe(),Ce(),Ee()]}),(()=>{if(T)return r("div",{"data-testid":"custom-cta",children:T(E,J)})})()]}))})),qb=F(ko)`
    display: flex;
    align-items: center;
    gap: ${Kn["spacing-8"]};
    width: 100%;
    padding: ${e=>e.$readOnly?`0 ${Kn["spacing-16"]}`:Kn["spacing-16"]};

    ${e=>"small"===e.$variant?C`
                  ${Gn["body-md-regular"]}
                  height: calc(2.5rem - 2px); // exclude top and bottom borders
              `:C`
                  ${Gn["body-baseline-regular"]}
                  height: calc(3rem - 2px);
              `}

    &:disabled {
        cursor: not-allowed;
    }

    &:focus-visible {
        outline: 2px solid ${Zn["focus-ring"]};
        outline-offset: -2px;
    }
`,Xb=F.div`
    display: flex;
    align-items: center;
    transform: rotate(${e=>e.$expanded?180:0}deg);
    transition: transform ${qn["duration-250"]} ${qn["ease-default"]};

    svg {
        color: ${Zn.icon};
        height: 1em;
        width: 1em;
    }
`;v(((t,n)=>{var{children:o,disabled:i,expanded:a,listboxId:s,popupRole:l,readOnly:d,variant:c}=t,u=ae(t,["children","disabled","expanded","listboxId","popupRole","readOnly","variant"]);return e(qb,Object.assign({ref:n,type:"button",role:"combobox","aria-expanded":a,"aria-haspopup":l,"aria-controls":a?s:void 0,"data-testid":"selector","aria-disabled":i,"aria-readonly":d,$variant:c,$readOnly:d},u,{children:[o,!d&&r(Xb,{$expanded:a,$variant:c,children:r(D,{"aria-hidden":!0})})]}))})),F.li`
    display: ${e=>e.$visible?"flex":"none"};
`,F.div`
    flex: 1;
    display: flex;
    align-items: flex-start;
    gap: ${Kn["spacing-8"]};
    padding: ${Kn["spacing-12"]} ${Kn["spacing-8"]};
    cursor: ${e=>e.$toggleable?"default":"pointer"};
    overflow: hidden; // required for label to truncate properly
    border-radius: ${Jn.none};
    outline: none;

    ${e=>e.$active&&C`
            background: ${Zn["bg-hover"]};
        `}
`,F.div`
    height: 1px;
    width: calc((1lh + ${Kn["spacing-8"]}) * ${e=>e.$level});
`,F.div`
    width: 1lh;
    height: 1lh;
    color: ${Zn["icon-primary"]};
    cursor: pointer;

    svg {
        width: 1lh;
        height: 1lh;
        transition: transform ${qn["duration-350"]}
            ${qn["ease-standard"]};

        ${e=>{if(e.$expanded)return C`
                    transform: rotate(90deg);
                `}}
    }
`,F.div`
    width: 1lh;
    height: 1lh;
    margin-right: ${Kn["spacing-8"]};
`,F.div`
    flex-shrink: 0;
    height: 1lh;
    width: ${e=>e.$hasNestedSiblings?"1lh":Kn["spacing-16"]};

    display: flex;
    justify-content: center;
`,F(ie)`
    flex-shrink: 0;
    height: 1lh;
    width: 1lh;
    color: ${Zn["icon-selected"]};
`;const Kb=F(So)`
    height: 3rem;
    gap: ${Kn["spacing-8"]};
    // space for clear icon
    padding-right: calc(1.25rem + ${Kn["spacing-20"]});
`,Jb=t=>{var{id:n,disabled:o=!1,error:i,value:l,format:d="12hr",readOnly:c,onChange:u,onFocus:h,onBlur:f,alignment:p="left",dropdownZIndex:y,startLimit:v,endLimit:x,interval:w=15,dropdownRootNode:$}=t,F=ae(t,["id","disabled","error","value","format","readOnly","onChange","onFocus","onBlur","alignment","dropdownZIndex","startLimit","endLimit","interval","dropdownRootNode"]);const[C]=s((()=>di.generate())),[E,S]=s(null),[D,k]=s(!1),[B,T]=s(""),[z,I]=s(""),[A,O]=s(""),[M,H]=s(""),[R,L]=s(""),j=a(null),_=a(null),W=a(null),N=b((()=>Mo.generateTimings(w,d,v,x)),[w,d,v,x]),P=b((()=>{if(""===M)return N;const e=Mo.findClosestFlooredTime(M,N);return e?N.slice(N.indexOf(e)):[]}),[N,M]),Y=m((e=>Mo.parseInput(e,d)),[d]);g((()=>{var e,r;if(l){const t=null!==(e=Y(l.start))&&void 0!==e?e:"",n=null!==(r=Y(l.end))&&void 0!==r?r:"";I(t),O(n),H(t),L(n)}}),[l,Y]),g((()=>{if(i)return void k(!1);const e=Y(z),r=Y(A);if(void 0===e)T("Invalid start time");else if(void 0===r)T("Invalid end time");else{if(!(""!==e&&""!==r&&Mo.to24Hour(r)<Mo.to24Hour(e)))return T(""),void(document.activeElement!==_.current&&document.activeElement!==W.current||k(!0));T("End time must be after start time")}k(!1)}),[z,A,Y,i]);const V=e=>{o||c||(E||D||null==h||h(),S(e),k(!0))},U=e=>{var r;o||c||(S(e),k(!0),null===(r=("start"===e?_:W).current)||void 0===r||r.select())};function Z(e){var r;switch(e.code){case"Enter":"start"===E?G(z):"end"===E&&(D&&q(A),null===(r=W.current)||void 0===r||r.blur());break;case"Tab":X(z,A,{})}}const G=e=>{X(e,A,{goToNextInput:!0})},q=e=>{X(z,e,{triggerOnBlur:!0})},X=(e,r,{goToNextInput:t,triggerOnBlur:n})=>{var o,i,a;const s=null!==(o=Y(e))&&void 0!==o?o:M,l=null!==(i=Y(r))&&void 0!==i?i:R;I(s),O(l);s===M&&l===R||null==u||u({start:s,end:l}),t&&void 0!==Y(e)&&(S("end"),null===(a=W.current)||void 0===a||a.select()),n&&(S(null),k(!1),null==f||f()),H(s),L(l)},K=e=>{e.stopPropagation(),I(""),O(""),H(""),L("");null==u||u({start:"",end:""}),S(null),k(!1)},J=e=>{var r,t;const n=e.relatedTarget,o=(null===(r=null==n?void 0:n.matches)||void 0===r?void 0:r.call(n,"[data-floating-ui-focusable]"))||(null===(t=null==n?void 0:n.matches)||void 0===t?void 0:t.call(n,"[data-floating-ui-focus-guard]")),i=j.current&&j.current.contains(n);E&&!D&&!i&&!o&&X(z,A,{triggerOnBlur:!0})},Q=()=>{if(!c&&!o&&((null==z?void 0:z.length)>0||(null==A?void 0:A.length)>0))return r(rl,{onClick:K,type:"button","aria-label":"Clear",children:r(el,{"aria-hidden":!0})})};return e(Bo,Object.assign({id:n},F,{children:[r(Cb,{children:r(Gs,{enabled:!c&&!o,isOpen:D,renderElement:()=>e(Kb,{ref:j,$disabled:o,$error:i||!!B,$readOnly:c,onBlur:J,children:[e(vo,{error:i||!!B,currentActive:null===E?"none":E,children:[r(zo,{ref:_,onFocus:()=>V("start"),placeholder:"start"===E?"hh:mm":"From",onChange:e=>I(e.target.value),value:z,disabled:o,readOnly:c,"data-testid":F["data-testid"]?`${F["data-testid"]}-timepicker-selector`:"timepicker-selector",onClick:()=>U("start"),onKeyDown:Z,autoComplete:"off","aria-label":"Start time input",type:"text",role:"combobox","aria-expanded":D,"aria-controls":C,"aria-autocomplete":"list"}),r(zo,{ref:W,onFocus:()=>V("end"),placeholder:"end"===E?"hh:mm":"To",onChange:e=>O(e.target.value),value:A,disabled:o,readOnly:c,"data-testid":F["data-testid"]?`${F["data-testid"]}-timepicker-selector`:"timepicker-selector",onClick:()=>U("end"),onKeyDown:Z,autoComplete:"off","aria-label":"End time input",type:"text",role:"combobox","aria-expanded":D,"aria-controls":C,"aria-autocomplete":"list"})]}),Q()]}),renderDropdown:()=>r(Gb,"start"===E?{listItems:N,onSelectItem:G,selectedItems:[z],topScrollItem:Mo.findClosestFlooredTime(Y(z),N),listboxId:C,disableItemFocus:!0,matchElementWidth:!0}:{listItems:P,onSelectItem:q,selectedItems:[A],topScrollItem:Mo.findClosestFlooredTime(Y(A),P),listboxId:C,disableItemFocus:!0,matchElementWidth:!0}),onClose:e=>{"outside-press"===e?(S(null),k(!1),null==f||f()):X(z,A,{triggerOnBlur:!0})},onDismiss:()=>{var e;null===(e=("start"===E?_:W).current)||void 0===e||e.focus(),k(!1)},offset:8,alignment:p,fitAvailableHeight:!0,customZIndex:y,rootNode:$})}),!i&&B&&e(Ks,{children:[r(Xs,{"aria-hidden":!0}),r(Js,{id:n?`${n}-error-message`:"error-message",tabIndex:0,"data-testid":n?`${n}-error-message`:"error-message",children:B})]})]}))},Qb=e=>{var{variant:t="dial"}=e,n=ae(e,["variant"]);return r("combobox"===t?Jb:qs,Object.assign({},n))};export{Qb as TimeRangePicker};
//# sourceMappingURL=index.js.map
