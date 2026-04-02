import{jsxs as e,jsx as r,Fragment as t}from"react/jsx-runtime";import*as n from"react";import o,{version as i,useRef as a,useState as s,isValidElement as l,createRef as d,cloneElement as c,PureComponent as u,useEffect as g,useLayoutEffect as h,useCallback as m,useMemo as b,createContext as f,useContext as p,createElement as y,forwardRef as v,useImperativeHandle as x}from"react";import{ArrowRightIcon as w,ChevronDownIcon as $}from"@lifesg/react-icons";import F,{css as C,keyframes as E,ThemeContext as S}from"styled-components";import{ChevronDownIcon as D}from"@lifesg/react-icons/chevron-down";import{ChevronUpIcon as k}from"@lifesg/react-icons/chevron-up";import{ArrowRightIcon as B}from"@lifesg/react-icons/arrow-right";import{ExclamationCircleFillIcon as T}from"@lifesg/react-icons/exclamation-circle-fill";import{ExclamationTriangleFillIcon as z}from"@lifesg/react-icons/exclamation-triangle-fill";import{ICircleFillIcon as I}from"@lifesg/react-icons/i-circle-fill";import{TickCircleFillIcon as A}from"@lifesg/react-icons/tick-circle-fill";import O,{findDOMNode as M}from"react-dom";import{ExternalIcon as H}from"@lifesg/react-icons/external";import{CircleIcon as R}from"@lifesg/react-icons/circle";import{CircleDotIcon as L}from"@lifesg/react-icons/circle-dot";import{CrossIcon as j}from"@lifesg/react-icons/cross";import{SquareIcon as _}from"@lifesg/react-icons/square";import{SquareTickFillIcon as W}from"@lifesg/react-icons/square-tick-fill";import{TickIcon as N}from"@lifesg/react-icons/tick";import{useFloatingTree as P,useFloating as Y,autoUpdate as V,offset as U,flip as Z,shift as G,limitShift as q,size as X,useTransitionStyles as K,useClick as J,useDismiss as Q,useInteractions as ee,FloatingPortal as re,FloatingFocusManager as te}from"@floating-ui/react";import{SquareFillIcon as ne}from"@lifesg/react-icons/square-fill";import{MagnifierIcon as oe}from"@lifesg/react-icons/magnifier";import"@lifesg/react-icons/caret-right";import{MinusSquareFillIcon as ie}from"@lifesg/react-icons/minus-square-fill";function ae(e,r){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(n=Object.getOwnPropertySymbols(e);o<n.length;o++)r.indexOf(n[o])<0&&Object.prototype.propertyIsEnumerable.call(e,n[o])&&(t[n[o]]=e[n[o]])}return t}"function"==typeof SuppressedError&&SuppressedError;var se="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};function le(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var de=Array.isArray,ce="object"==typeof se&&se&&se.Object===Object&&se,ue=ce,ge="object"==typeof self&&self&&self.Object===Object&&self,he=ue||ge||Function("return this")(),me=he.Symbol,be=me,fe=Object.prototype,pe=fe.hasOwnProperty,ye=fe.toString,ve=be?be.toStringTag:void 0;var xe=function(e){var r=pe.call(e,ve),t=e[ve];try{e[ve]=void 0;var n=!0}catch(e){}var o=ye.call(e);return n&&(r?e[ve]=t:delete e[ve]),o},we=Object.prototype.toString;var $e=xe,Fe=function(e){return we.call(e)},Ce=me?me.toStringTag:void 0;var Ee=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":Ce&&Ce in Object(e)?$e(e):Fe(e)};var Se=function(e){return null!=e&&"object"==typeof e},De=Ee,ke=Se;var Be=function(e){return"symbol"==typeof e||ke(e)&&"[object Symbol]"==De(e)},Te=de,ze=Be,Ie=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,Ae=/^\w*$/;var Oe=function(e,r){if(Te(e))return!1;var t=typeof e;return!("number"!=t&&"symbol"!=t&&"boolean"!=t&&null!=e&&!ze(e))||(Ae.test(e)||!Ie.test(e)||null!=r&&e in Object(r))};var Me=function(e){var r=typeof e;return null!=e&&("object"==r||"function"==r)},He=Ee,Re=Me;var Le,je=function(e){if(!Re(e))return!1;var r=He(e);return"[object Function]"==r||"[object GeneratorFunction]"==r||"[object AsyncFunction]"==r||"[object Proxy]"==r},_e=he["__core-js_shared__"],We=(Le=/[^.]+$/.exec(_e&&_e.keys&&_e.keys.IE_PROTO||""))?"Symbol(src)_1."+Le:"";var Ne=function(e){return!!We&&We in e},Pe=Function.prototype.toString;var Ye=function(e){if(null!=e){try{return Pe.call(e)}catch(e){}try{return e+""}catch(e){}}return""},Ve=je,Ue=Ne,Ze=Me,Ge=Ye,qe=/^\[object .+?Constructor\]$/,Xe=Function.prototype,Ke=Object.prototype,Je=Xe.toString,Qe=Ke.hasOwnProperty,er=RegExp("^"+Je.call(Qe).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");var rr=function(e,r){return null==e?void 0:e[r]},tr=function(e){return!(!Ze(e)||Ue(e))&&(Ve(e)?er:qe).test(Ge(e))},nr=rr;var or=function(e,r){var t=nr(e,r);return tr(t)?t:void 0},ir=or(Object,"create"),ar=ir;var sr=function(){this.__data__=ar?ar(null):{},this.size=0};var lr=function(e){var r=this.has(e)&&delete this.__data__[e];return this.size-=r?1:0,r},dr=ir,cr=Object.prototype.hasOwnProperty;var ur=function(e){var r=this.__data__;if(dr){var t=r[e];return"__lodash_hash_undefined__"===t?void 0:t}return cr.call(r,e)?r[e]:void 0},gr=ir,hr=Object.prototype.hasOwnProperty;var mr=function(e){var r=this.__data__;return gr?void 0!==r[e]:hr.call(r,e)},br=ir;var fr=function(e,r){var t=this.__data__;return this.size+=this.has(e)?0:1,t[e]=br&&void 0===r?"__lodash_hash_undefined__":r,this},pr=sr,yr=lr,vr=ur,xr=mr,wr=fr;function $r(e){var r=-1,t=null==e?0:e.length;for(this.clear();++r<t;){var n=e[r];this.set(n[0],n[1])}}$r.prototype.clear=pr,$r.prototype.delete=yr,$r.prototype.get=vr,$r.prototype.has=xr,$r.prototype.set=wr;var Fr=$r;var Cr=function(){this.__data__=[],this.size=0};var Er=function(e,r){return e===r||e!=e&&r!=r},Sr=Er;var Dr=function(e,r){for(var t=e.length;t--;)if(Sr(e[t][0],r))return t;return-1},kr=Dr,Br=Array.prototype.splice;var Tr=function(e){var r=this.__data__,t=kr(r,e);return!(t<0)&&(t==r.length-1?r.pop():Br.call(r,t,1),--this.size,!0)},zr=Dr;var Ir=function(e){var r=this.__data__,t=zr(r,e);return t<0?void 0:r[t][1]},Ar=Dr;var Or=function(e){return Ar(this.__data__,e)>-1},Mr=Dr;var Hr=function(e,r){var t=this.__data__,n=Mr(t,e);return n<0?(++this.size,t.push([e,r])):t[n][1]=r,this},Rr=Cr,Lr=Tr,jr=Ir,_r=Or,Wr=Hr;function Nr(e){var r=-1,t=null==e?0:e.length;for(this.clear();++r<t;){var n=e[r];this.set(n[0],n[1])}}Nr.prototype.clear=Rr,Nr.prototype.delete=Lr,Nr.prototype.get=jr,Nr.prototype.has=_r,Nr.prototype.set=Wr;var Pr=Nr,Yr=or(he,"Map"),Vr=Fr,Ur=Pr,Zr=Yr;var Gr=function(e){var r=typeof e;return"string"==r||"number"==r||"symbol"==r||"boolean"==r?"__proto__"!==e:null===e};var qr=function(e,r){var t=e.__data__;return Gr(r)?t["string"==typeof r?"string":"hash"]:t.map},Xr=qr;var Kr=function(e){var r=Xr(this,e).delete(e);return this.size-=r?1:0,r},Jr=qr;var Qr=function(e){return Jr(this,e).get(e)},et=qr;var rt=function(e){return et(this,e).has(e)},tt=qr;var nt=function(e,r){var t=tt(this,e),n=t.size;return t.set(e,r),this.size+=t.size==n?0:1,this},ot=function(){this.size=0,this.__data__={hash:new Vr,map:new(Zr||Ur),string:new Vr}},it=Kr,at=Qr,st=rt,lt=nt;function dt(e){var r=-1,t=null==e?0:e.length;for(this.clear();++r<t;){var n=e[r];this.set(n[0],n[1])}}dt.prototype.clear=ot,dt.prototype.delete=it,dt.prototype.get=at,dt.prototype.has=st,dt.prototype.set=lt;var ct=dt,ut=ct;function gt(e,r){if("function"!=typeof e||null!=r&&"function"!=typeof r)throw new TypeError("Expected a function");var t=function(){var n=arguments,o=r?r.apply(this,n):n[0],i=t.cache;if(i.has(o))return i.get(o);var a=e.apply(this,n);return t.cache=i.set(o,a)||i,a};return t.cache=new(gt.Cache||ut),t}gt.Cache=ut;var ht=gt;var mt=function(e){var r=ht(e,(function(e){return 500===t.size&&t.clear(),e})),t=r.cache;return r},bt=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,ft=/\\(\\)?/g,pt=mt((function(e){var r=[];return 46===e.charCodeAt(0)&&r.push(""),e.replace(bt,(function(e,t,n,o){r.push(n?o.replace(ft,"$1"):t||e)})),r}));var yt=function(e,r){for(var t=-1,n=null==e?0:e.length,o=Array(n);++t<n;)o[t]=r(e[t],t,e);return o},vt=de,xt=Be,wt=me?me.prototype:void 0,$t=wt?wt.toString:void 0;var Ft=function e(r){if("string"==typeof r)return r;if(vt(r))return yt(r,e)+"";if(xt(r))return $t?$t.call(r):"";var t=r+"";return"0"==t&&1/r==-1/0?"-0":t},Ct=Ft;var Et=de,St=Oe,Dt=pt,kt=function(e){return null==e?"":Ct(e)};var Bt=function(e,r){return Et(e)?e:St(e,r)?[e]:Dt(kt(e))},Tt=Be;var zt=function(e){if("string"==typeof e||Tt(e))return e;var r=e+"";return"0"==r&&1/e==-1/0?"-0":r},It=Bt,At=zt;var Ot=function(e,r){for(var t=0,n=(r=It(r,e)).length;null!=e&&t<n;)e=e[At(r[t++])];return t&&t==n?e:void 0},Mt=Ot;var Ht=function(e,r,t){var n=null==e?void 0:Mt(e,r);return void 0===n?t:n},Rt=le(Ht);const Lt=(e,r,t)=>Rt(t,r)||Rt(e,r),jt=(e,r)=>{const t=r||e.defaultValue;return Rt(e.collections,t)},_t={collections:{default:{"width-005":.5,"width-010":1,"width-020":2,"width-040":4,solid:"solid"}},defaultValue:"default"},Wt=e=>r=>{var t;const n=r.theme,o=jt(_t,null==n?void 0:n.borderScheme);return(null===(t=null==n?void 0:n.overrides)||void 0===t?void 0:t.border)?`${Lt(o,e,n.overrides.border)}px`:`${o[e]}px`},Nt={"width-005":Wt("width-005"),"width-010":Wt("width-010"),"width-020":Wt("width-020"),"width-040":Wt("width-040"),solid:(Pt="solid",e=>{var r;const t=e.theme,n=jt(_t,null==t?void 0:t.borderScheme),o=(null===(r=null==t?void 0:t.overrides)||void 0===r?void 0:r.border)?Lt(n,Pt,t.overrides.border):n[Pt];return"function"==typeof o?o(e):o})};var Pt;const Yt={"brand-10":"#2C0C0B","brand-20":"#4C1513","brand-30":"#6C1D1B","brand-40":"#922825","brand-50":"#BF3431","brand-60":"#F15D5A","brand-70":"#F69491","brand-80":"#FABAB7","brand-90":"#FCD7D2","brand-95":"#FFEBE7","brand-100":"#FFF6F4","primary-10":"#1A122C","primary-20":"#2F1F4D","primary-30":"#422D6E","primary-40":"#5B3D97","primary-50":"#7654BC","primary-60":"#9A82CD","primary-70":"#B7A7D8","primary-80":"#CFC5E5","primary-90":"#E3DDF0","primary-95":"#F0EDF7","primary-100":"#F9F8FC","secondary-10":"#0E1723","secondary-20":"#18293D","secondary-30":"#233A57","secondary-40":"#305078","secondary-50":"#4B6A8F","secondary-60":"#7B91A9","secondary-70":"#A1B1C3","secondary-80":"#C1CBD7","secondary-90":"#DBE1E8","secondary-95":"#EBEFF2","secondary-100":"#F7F8FA","neutral-10":"#161616","neutral-20":"#282828","neutral-30":"#393939","neutral-40":"#4E4E4E","neutral-50":"#686868","neutral-60":"#8E8E8E","neutral-70":"#AFAFB0","neutral-80":"#C7CACA","neutral-90":"#DDE1E2","neutral-95":"#EDEFEF","neutral-100":"#F9F9F9","success-10":"#081A0F","success-20":"#0E2D1B","success-30":"#154126","success-40":"#1C5A34","success-50":"#257645","success-60":"#44A068","success-70":"#64C189","success-80":"#80DCA5","success-90":"#B4ECCB","success-95":"#D5F6E2","success-100":"#EFFCF4","warning-10":"#221302","warning-20":"#3B2204","warning-30":"#543106","warning-40":"#744408","warning-50":"#98590C","warning-60":"#D07A13","warning-70":"#E4A244","warning-80":"#F5C26C","warning-90":"#FADBA6","warning-95":"#FCECD4","warning-100":"#FDF7F0","error-10":"#330505","error-20":"#550808","error-30":"#750C0C","error-40":"#9E130F","error-50":"#CB2213","error-60":"#DE6C6C","error-70":"#E89B9B","error-80":"#EFBEBE","error-90":"#F5D9D9","error-95":"#F9ECEC","error-100":"#FCF7F7","info-10":"#021824","info-20":"#032B3F","info-30":"#053D59","info-40":"#06547B","info-50":"#176E9B","info-60":"#5296BE","info-70":"#82B5DA","info-80":"#ACCFE7","info-90":"#CCE3F1","info-95":"#E3F1F8","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000","primary-inverse":"#FEAB10"},Vt={"brand-10":"#1F1221","brand-20":"#371F3B","brand-30":"#4E2C53","brand-40":"#6B3E73","brand-50":"#8D5197","brand-60":"#FF3399","brand-70":"#FF88C4","brand-80":"#FFB3D9","brand-90":"#FFD4E9","brand-95":"#FFE8F3","brand-100":"#FFF8FC","primary-10":"#1F1221","primary-20":"#371F3B","primary-30":"#4E2C53","primary-40":"#6B3E73","primary-50":"#8D5197","primary-60":"#B07DB7","primary-70":"#C7A3CC","primary-80":"#D9C2DD","primary-90":"#E9DBEB","primary-95":"#F3ECF4","primary-100":"#FAF7FA","secondary-10":"#2D091B","secondary-20":"#4D0F2E","secondary-30":"#6B1540","secondary-40":"#931D58","secondary-50":"#C02673","secondary-60":"#FF409F","secondary-70":"#FF88C4","secondary-80":"#FFB3D9","secondary-90":"#FFD4E9","secondary-95":"#FFE8F3","secondary-100":"#FFF8FC","neutral-10":"#161616","neutral-20":"#282828","neutral-30":"#393939","neutral-40":"#4E4E4E","neutral-50":"#686868","neutral-60":"#8E8E8E","neutral-70":"#AFAFB0","neutral-80":"#C7CACA","neutral-90":"#DDE1E2","neutral-95":"#EDEFEF","neutral-100":"#F9F9F9","success-10":"#081A0F","success-20":"#0E2D1B","success-30":"#154126","success-40":"#1C5A34","success-50":"#257645","success-60":"#44A068","success-70":"#64C189","success-80":"#80DCA5","success-90":"#B4ECCB","success-95":"#D5F6E2","success-100":"#EFFCF4","warning-10":"#221302","warning-20":"#3B2204","warning-30":"#543106","warning-40":"#744408","warning-50":"#98590C","warning-60":"#D07A13","warning-70":"#E4A244","warning-80":"#F5C26C","warning-90":"#FADBA6","warning-95":"#FCECD4","warning-100":"#FDF7F0","error-10":"#330505","error-20":"#550808","error-30":"#750C0C","error-40":"#9E130F","error-50":"#CB2213","error-60":"#DE6C6C","error-70":"#E89B9B","error-80":"#EFBEBE","error-90":"#F5D9D9","error-95":"#F9ECEC","error-100":"#FCF7F7","info-10":"#021824","info-20":"#032B3F","info-30":"#053D59","info-40":"#06547B","info-50":"#176E9B","info-60":"#5296BE","info-70":"#82B5DA","info-80":"#ACCFE7","info-90":"#CCE3F1","info-95":"#E3F1F8","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000","primary-inverse":"#FEAB10"},Ut={"brand-10":"#2C0C0B","brand-20":"#4C1513","brand-30":"#6C1D1B","brand-40":"#922825","brand-50":"#BF3431","brand-60":"#F15D5A","brand-70":"#F69491","brand-80":"#FABAB7","brand-90":"#FCD7D2","brand-95":"#FFEBE7","brand-100":"#FFF6F4","primary-10":"#001731","primary-20":"#002752","primary-30":"#003874","primary-40":"#004D9F","primary-50":"#1768BE","primary-60":"#3C91EC","primary-70":"#6CB4FF","primary-80":"#A5CDFF","primary-90":"#CFE1FE","primary-95":"#E8F0FE","primary-100":"#F7F9FF","secondary-10":"#131529","secondary-20":"#222547","secondary-30":"#2F3565","secondary-40":"#42498B","secondary-50":"#5B62A7","secondary-60":"#858CBD","secondary-70":"#A8ADCF","secondary-80":"#C6C9E0","secondary-90":"#DDDFEC","secondary-95":"#EDEEF5","secondary-100":"#F8F8FB","neutral-10":"#161616","neutral-20":"#282828","neutral-30":"#393939","neutral-40":"#4E4E4E","neutral-50":"#686868","neutral-60":"#8E8E8E","neutral-70":"#AFAFB0","neutral-80":"#C7CACA","neutral-90":"#DDE1E2","neutral-95":"#EDEFEF","neutral-100":"#F9F9F9","success-10":"#081A0F","success-20":"#0E2D1B","success-30":"#154126","success-40":"#1C5A34","success-50":"#257645","success-60":"#44A068","success-70":"#64C189","success-80":"#80DCA5","success-90":"#B4ECCB","success-95":"#D5F6E2","success-100":"#EFFCF4","warning-10":"#221302","warning-20":"#3B2204","warning-30":"#543106","warning-40":"#744408","warning-50":"#98590C","warning-60":"#D07A13","warning-70":"#E4A244","warning-80":"#F5C26C","warning-90":"#FADBA6","warning-95":"#FCECD4","warning-100":"#FDF7F0","error-10":"#330505","error-20":"#550808","error-30":"#750C0C","error-40":"#9E130F","error-50":"#CB2213","error-60":"#DE6C6C","error-70":"#E89B9B","error-80":"#EFBEBE","error-90":"#F5D9D9","error-95":"#F9ECEC","error-100":"#FCF7F7","info-10":"#021824","info-20":"#032B3F","info-30":"#053D59","info-40":"#06547B","info-50":"#176E9B","info-60":"#5296BE","info-70":"#82B5DA","info-80":"#ACCFE7","info-90":"#CCE3F1","info-95":"#E3F1F8","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000","primary-inverse":"#FEAB10"},Zt={"brand-10":"#2C0C0B","brand-20":"#4C1513","brand-30":"#6C1D1B","brand-40":"#922825","brand-50":"#BF3431","brand-60":"#F15D5A","brand-70":"#F69491","brand-80":"#FABAB7","brand-90":"#FCD7D2","brand-95":"#FFEBE7","brand-100":"#FFF6F4","primary-10":"#0011924","primary-20":"#032B40","primary-30":"#043D5A","primary-40":"#05547B","primary-50":"#096EA1","primary-60":"#2098D3","primary-70":"#5CB9E8","primary-80":"#8BD3F6","primary-90":"#BEE6FA","primary-95":"#E2F2FA","primary-100":"#F4FAFC","secondary-10":"#131529","secondary-20":"#222547","secondary-30":"#2F3565","secondary-40":"#42498B","secondary-50":"#5B62A7","secondary-60":"#858CBD","secondary-70":"#A8ADCF","secondary-80":"#C6C9E0","secondary-90":"#DDDFEC","secondary-95":"#EDEEF5","secondary-100":"#F8F8FB","neutral-10":"#161616","neutral-20":"#282828","neutral-30":"#393939","neutral-40":"#4E4E4E","neutral-50":"#686868","neutral-60":"#8E8E8E","neutral-70":"#AFAFB0","neutral-80":"#C7CACA","neutral-90":"#DDE1E2","neutral-95":"#EDEFEF","neutral-100":"#F9F9F9","success-10":"#081A0F","success-20":"#0E2D1B","success-30":"#154126","success-40":"#1C5A34","success-50":"#257645","success-60":"#44A068","success-70":"#64C189","success-80":"#80DCA5","success-90":"#B4ECCB","success-95":"#D5F6E2","success-100":"#EFFCF4","warning-10":"#221302","warning-20":"#3B2204","warning-30":"#543106","warning-40":"#744408","warning-50":"#98590C","warning-60":"#D07A13","warning-70":"#E4A244","warning-80":"#F5C26C","warning-90":"#FADBA6","warning-95":"#FCECD4","warning-100":"#FDF7F0","error-10":"#330505","error-20":"#550808","error-30":"#750C0C","error-40":"#9E130F","error-50":"#CB2213","error-60":"#DE6C6C","error-70":"#E89B9B","error-80":"#EFBEBE","error-90":"#F5D9D9","error-95":"#F9ECEC","error-100":"#FCF7F7","info-10":"#021824","info-20":"#032B3F","info-30":"#053D59","info-40":"#06547B","info-50":"#176E9B","info-60":"#5296BE","info-70":"#82B5DA","info-80":"#ACCFE7","info-90":"#CCE3F1","info-95":"#E3F1F8","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000","primary-inverse":"#FEAB10"},Gt={"brand-10":"#001A19","brand-20":"#002D2B","brand-30":"#00413D","brand-40":"#005954","brand-50":"#00756F","brand-60":"#03A098","brand-70":"#55BFBA","brand-80":"#92D6D2","brand-90":"#BFE7E5","brand-95":"#DDF2F1","brand-100":"#F4FBFA","primary-10":"#09191D","primary-20":"#102B34","primary-30":"#173D49","primary-40":"#205666","primary-50":"#2A7086","primary-60":"#5D97A9","primary-70":"#8CB6C2","primary-80":"#B2CED6","primary-90":"#D1E2E7","primary-95":"#E8F0F3","primary-100":"#F7FAFB","secondary-10":"#001731","secondary-20":"#002752","secondary-30":"#003874","secondary-40":"#004D9F","secondary-50":"#5B62A7","secondary-60":"#858CBD","secondary-70":"#A8ADCF","secondary-80":"#C6C9E0","secondary-90":"#DDDFEC","secondary-95":"#EDEEF5","secondary-100":"#F8F8FB","neutral-10":"#161616","neutral-20":"#282828","neutral-30":"#393939","neutral-40":"#4E4E4E","neutral-50":"#686868","neutral-60":"#8E8E8E","neutral-70":"#AFAFB0","neutral-80":"#C7CACA","neutral-90":"#DDE1E2","neutral-95":"#EDEFEF","neutral-100":"#F9F9F9","success-10":"#081A0F","success-20":"#0E2D1B","success-30":"#154126","success-40":"#1C5A34","success-50":"#257645","success-60":"#44A068","success-70":"#64C189","success-80":"#80DCA5","success-90":"#B4ECCB","success-95":"#D5F6E2","success-100":"#EFFCF4","warning-10":"#221302","warning-20":"#3B2204","warning-30":"#543106","warning-40":"#744408","warning-50":"#98590C","warning-60":"#D07A13","warning-70":"#E4A244","warning-80":"#F5C26C","warning-90":"#FADBA6","warning-95":"#FCECD4","warning-100":"#FDF7F0","error-10":"#330505","error-20":"#550808","error-30":"#750C0C","error-40":"#9E130F","error-50":"#CB2213","error-60":"#DE6C6C","error-70":"#E89B9B","error-80":"#EFBEBE","error-90":"#F5D9D9","error-95":"#F9ECEC","error-100":"#FCF7F7","info-10":"#021824","info-20":"#032B3F","info-30":"#053D59","info-40":"#06547B","info-50":"#176E9B","info-60":"#5296BE","info-70":"#82B5DA","info-80":"#ACCFE7","info-90":"#CCE3F1","info-95":"#E3F1F8","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000","primary-inverse":"#FEAB10"},qt={"brand-10":"#881317","brand-20":"#B5191E","brand-30":"#B5040A","brand-40":"#D0333F","brand-50":"#DC666F","brand-60":"#E28087","brand-70":"#E7999F","brand-80":"#EDB3B7","brand-90":"#F3CCCF","brand-95":"#F9E6E7","brand-100":"#FCF2F3","primary-10":"#000000","primary-20":"#191919","primary-30":"#333333","primary-40":"#4D4D4D","primary-50":"#666666","primary-60":"#808080","primary-70":"#999999","primary-80":"#B3B3B3","primary-90":"#E6E6E6","primary-95":"#F7F7F7","primary-100":"#FFFFFF","secondary-10":"#19151D","secondary-20":"#2B2533","secondary-30":"#3E3649","secondary-40":"#564A64","secondary-50":"#6F637D","secondary-60":"#948B9F","secondary-70":"#B3ACBB","secondary-80":"#CCC8D2","secondary-90":"#E1DEE4","secondary-95":"#EFEEF1","secondary-100":"#F9F8F9","neutral-10":"#000000","neutral-20":"#191919","neutral-30":"#333333","neutral-40":"#4D4D4D","neutral-50":"#666666","neutral-60":"#808080","neutral-70":"#999999","neutral-80":"#B3B3B3","neutral-90":"#E6E6E6","neutral-95":"#F7F7F7","neutral-100":"#FFFFFF","success-10":"#081A0F","success-20":"#0E2D1B","success-30":"#154126","success-40":"#1C5A34","success-50":"#257645","success-60":"#44A068","success-70":"#64C189","success-80":"#80DCA5","success-90":"#B4ECCB","success-95":"#D5F6E2","success-100":"#EFFCF4","warning-10":"#221302","warning-20":"#3B2204","warning-30":"#543106","warning-40":"#744408","warning-50":"#98590C","warning-60":"#D07A13","warning-70":"#E4A244","warning-80":"#F5C26C","warning-90":"#FADBA6","warning-95":"#FCECD4","warning-100":"#FDF7F0","error-10":"#330505","error-20":"#550808","error-30":"#750C0C","error-40":"#9E130F","error-50":"#CB2213","error-60":"#DE6C6C","error-70":"#E89B9B","error-80":"#EFBEBE","error-90":"#F5D9D9","error-95":"#F9ECEC","error-100":"#FCF7F7","info-10":"#021824","info-20":"#032B3F","info-30":"#053D59","info-40":"#06547B","info-50":"#176E9B","info-60":"#5296BE","info-70":"#82B5DA","info-80":"#ACCFE7","info-90":"#CCE3F1","info-95":"#E3F1F8","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000","primary-inverse":"#FEAB10"},Xt={"brand-10":"#0E123A","brand-20":"#191E65","brand-30":"#232B90","brand-40":"#303BC5","brand-50":"#494CFF","brand-60":"#AD6EFF","brand-70":"#AEA4FF","brand-80":"#C5C4FF","brand-90":"#DDDCFF","brand-95":"#EDECFF","brand-100":"#F8F8FF","primary-10":"#10152B","primary-20":"#1C254B","primary-30":"#28356C","primary-40":"#38489A","primary-50":"#4D5AD7","primary-60":"#7487F2","primary-70":"#9AAAFC","primary-80":"#BDC7FD","primary-90":"#DADFFB","primary-95":"#ECEEFE","primary-100":"#F7F8FF","secondary-10":"#19151D","secondary-20":"#2B2533","secondary-30":"#3E3649","secondary-40":"#564A64","secondary-50":"#6F637D","secondary-60":"#948B9F","secondary-70":"#B3ACBB","secondary-80":"#CCC8D2","secondary-90":"#E1DEE4","secondary-95":"#EFEEF1","secondary-100":"#F9F8F9","neutral-10":"#161616","neutral-20":"#282828","neutral-30":"#393939","neutral-40":"#4E4E4E","neutral-50":"#686868","neutral-60":"#8E8E8E","neutral-70":"#AFAFB0","neutral-80":"#C7CACA","neutral-90":"#DDE1E2","neutral-95":"#EDEFEF","neutral-100":"#F9F9F9","success-10":"#081A0F","success-20":"#0E2D1B","success-30":"#154126","success-40":"#1C5A34","success-50":"#257645","success-60":"#44A068","success-70":"#64C189","success-80":"#80DCA5","success-90":"#B4ECCB","success-95":"#D5F6E2","success-100":"#EFFCF4","warning-10":"#221302","warning-20":"#3B2204","warning-30":"#543106","warning-40":"#744408","warning-50":"#98590C","warning-60":"#D07A13","warning-70":"#E4A244","warning-80":"#F5C26C","warning-90":"#FADBA6","warning-95":"#FCECD4","warning-100":"#FDF7F0","error-10":"#330505","error-20":"#550808","error-30":"#750C0C","error-40":"#9E130F","error-50":"#CB2213","error-60":"#DE6C6C","error-70":"#E89B9B","error-80":"#EFBEBE","error-90":"#F5D9D9","error-95":"#F9ECEC","error-100":"#FCF7F7","info-10":"#021824","info-20":"#032B3F","info-30":"#053D59","info-40":"#06547B","info-50":"#176E9B","info-60":"#5296BE","info-70":"#82B5DA","info-80":"#ACCFE7","info-90":"#CCE3F1","info-95":"#E3F1F8","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000","primary-inverse":"#FEAB10"},Kt={"brand-10":"#170F39","brand-20":"#281C62","brand-30":"#38268B","brand-40":"#4D34BF","brand-50":"#5735DF","brand-60":"#9986F9","brand-70":"#B2A5F8","brand-80":"#CDC2FA","brand-90":"#E2DCFC","brand-95":"#EFEDFE","brand-100":"#FAF8FD","primary-10":"#170F39","primary-20":"#281C62","primary-30":"#38268B","primary-40":"#4D34BF","primary-50":"#5735DF","primary-60":"#9986F9","primary-70":"#B2A5F8","primary-80":"#CDC2FA","primary-90":"#E2DCFC","primary-95":"#EFEDFE","primary-100":"#FAF8FD","secondary-10":"#251204","secondary-20":"#401F08","secondary-30":"#5B2C0B","secondary-40":"#7E3D0F","secondary-50":"#B04900","secondary-60":"#E26E1C","secondary-70":"#FF9445","secondary-80":"#FFBB8E","secondary-90":"#FFD9BF","secondary-95":"#FFECDF","secondary-100":"#FFF8F3","neutral-10":"#161616","neutral-20":"#282828","neutral-30":"#393939","neutral-40":"#4E4E4E","neutral-50":"#686868","neutral-60":"#8E8E8E","neutral-70":"#AFAFB0","neutral-80":"#C7CACA","neutral-90":"#DDE1E2","neutral-95":"#EDEFEF","neutral-100":"#F9F9F9","success-10":"#031B15","success-20":"#082D24","success-30":"#094134","success-40":"#0D5947","success-50":"#10755E","success-60":"#16A181","success-70":"#1EC59D","success-80":"#6FDDC2","success-90":"#AFECDE","success-95":"#D5F5ED","success-100":"#F1FCF9","warning-10":"#1F1500","warning-20":"#362500","warning-30":"#4D3501","warning-40":"#6A4801","warning-50":"#8B6001","warning-60":"#BF8301","warning-70":"#EAA102","warning-80":"#FFBF34","warning-90":"#FFDC8F","warning-95":"#FFEDC7","warning-100":"#FFF8EA","error-10":"#270F10","error-20":"#441B1B","error-30":"#612627","error-40":"#853535","error-50":"#AF4546","error-60":"#EC6162","error-70":"#F29696","error-80":"#F7BBBC","error-90":"#FAD8D8","error-95":"#FCEAEA","error-100":"#FEF7F7","info-10":"#0F1627","info-20":"#1B2745","info-30":"#273763","info-40":"#354D88","info-50":"#4665B3","info-60":"#618AF6","info-70":"#8DADFF","info-80":"#B4C9FF","info-90":"#D3DFFF","info-95":"#E9EFFF","info-100":"#F5F8FF",white:"#FFFFFF",black:"#000000","primary-inverse":"#FEAB10"},Jt={"brand-10":"#0E113C","brand-20":"#191E67","brand-30":"#232A92","brand-40":"#233FC2","brand-50":"#135CEA","brand-60":"#378FFB","brand-70":"#71B3FD","brand-80":"#9DCFFE","brand-90":"#C1E5FF","brand-95":"#DCF1FF","brand-100":"#F3FAFF","primary-10":"#0E113C","primary-20":"#191E67","primary-30":"#232A92","primary-40":"#233FC2","primary-50":"#135CEA","primary-60":"#378FFB","primary-70":"#71B3FD","primary-80":"#9DCFFE","primary-90":"#C1E5FF","primary-95":"#DCF1FF","primary-100":"#F3FAFF","secondary-10":"#34001F","secondary-20":"#540033","secondary-30":"#730045","secondary-40":"#9D0054","secondary-50":"#C61C64","secondary-60":"#DE6792","secondary-70":"#EB96B6","secondary-80":"#F5BAD2","secondary-90":"#FCD5E3","secondary-95":"#FDEBF1","secondary-100":"#FDF6F9","neutral-10":"#161616","neutral-20":"#282828","neutral-30":"#393939","neutral-40":"#4E4E4E","neutral-50":"#686868","neutral-60":"#8E8E8E","neutral-70":"#AFAFB0","neutral-80":"#C7CACA","neutral-90":"#DDE1E2","neutral-95":"#EDEFEF","neutral-100":"#F9F9F9","success-10":"#081A0F","success-20":"#0E2D1B","success-30":"#154126","success-40":"#1C5A34","success-50":"#257645","success-60":"#44A068","success-70":"#64C189","success-80":"#80DCA5","success-90":"#B4ECCB","success-95":"#D5F6E2","success-100":"#EFFCF4","warning-10":"#221302","warning-20":"#3B2204","warning-30":"#543106","warning-40":"#744408","warning-50":"#98590C","warning-60":"#D07A13","warning-70":"#E4A244","warning-80":"#F5C26C","warning-90":"#FADBA6","warning-95":"#FCECD4","warning-100":"#FDF7F0","error-10":"#330505","error-20":"#550808","error-30":"#750C0C","error-40":"#9E130F","error-50":"#CB2213","error-60":"#DE6C6C","error-70":"#E89B9B","error-80":"#EFBEBE","error-90":"#F5D9D9","error-95":"#F9ECEC","error-100":"#FCF7F7","info-10":"#021824","info-20":"#032B3F","info-30":"#053D59","info-40":"#06547B","info-50":"#176E9B","info-60":"#5296BE","info-70":"#82B5DA","info-80":"#ACCFE7","info-90":"#CCE3F1","info-95":"#E3F1F8","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000","primary-inverse":"#FEAB10"},Qt={"brand-10":"#370009","brand-20":"#4E000D","brand-30":"#640011","brand-40":"#850017","brand-50":"#9B001A","brand-60":"#EF2D4E","brand-70":"#F692A3","brand-80":"#FAB9C4","brand-90":"#FCD7DD","brand-95":"#FDEAED","brand-100":"#FEF8F9","primary-10":"#1F102A","primary-20":"#2F193F","primary-30":"#3E2053","primary-40":"#562D71","primary-50":"#663587","primary-60":"#9370AA","primary-70":"#BCA7CB","primary-80":"#D3C5DC","primary-90":"#E5DDEB","primary-95":"#F2EEF5","primary-100":"#FAF9FB","secondary-10":"#201316","secondary-20":"#311D22","secondary-30":"#3F272C","secondary-40":"#58363D","secondary-50":"#684049","secondary-60":"#AF6A7A","secondary-70":"#F393A8","secondary-80":"#FFB6C6","secondary-90":"#FFD6DF","secondary-95":"#FFE9EE","secondary-100":"#FFF7F9","neutral-10":"#161616","neutral-20":"#222222","neutral-30":"#2D2D2D","neutral-40":"#3F3F3F","neutral-50":"#4B4B4B","neutral-60":"#7E7E7E","neutral-70":"#AFAFB0","neutral-80":"#C7CACA","neutral-90":"#DDE1E2","neutral-95":"#EDEFEF","neutral-100":"#F9F9F9","success-10":"#081917","success-20":"#0D2724","success-30":"#11332E","success-40":"#174740","success-50":"#1B554C","success-60":"#2D8C7E","success-70":"#46C2AF","success-80":"#89D8CC","success-90":"#BCE9E2","success-95":"#DAF3EF","success-100":"#F0FAF9","warning-10":"#241200","warning-20":"#371C00","warning-30":"#482500","warning-40":"#633300","warning-50":"#763C00","warning-60":"#C36400","warning-70":"#FF9524","warning-80":"#FFBD77","warning-90":"#FFD9B2","warning-95":"#FFEBD6","warning-100":"#FFF7F0","error-10":"#330505","error-20":"#4B0707","error-30":"#600909","error-40":"#810D0D","error-50":"#98110F","error-60":"#D7504C","error-70":"#E89B9B","error-80":"#EFBEBE","error-90":"#F5D9D9","error-95":"#F9ECEC","error-100":"#FCF7F7","info-10":"#021824","info-20":"#032537","info-30":"#043148","info-40":"#054462","info-50":"#065175","info-60":"#3985AF","info-70":"#82B5DA","info-80":"#ACCFE7","info-90":"#CCE3F1","info-95":"#E3F1F8","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000","primary-inverse":"#FEAB10"},en={"brand-10":"#00143A","brand-20":"#00205B","brand-30":"#153368","brand-40":"#18417C","brand-50":"#00558C","brand-60":"#009CDE","brand-70":"#5AB9E7","brand-80":"#9ED0ED","brand-90":"#CAE3F4","brand-95":"#E2F0F9","brand-100":"#F4FAFD","primary-10":"#00143A","primary-20":"#00205B","primary-30":"#153368","primary-40":"#18417C","primary-50":"#00558C","primary-60":"#009CDE","primary-70":"#5AB9E7","primary-80":"#9ED0ED","primary-90":"#CAE3F4","primary-95":"#E2F0F9","primary-100":"#F4FAFD","secondary-10":"#10171F","secondary-20":"#1E252C","secondary-30":"#2F353B","secondary-40":"#3D4247","secondary-50":"#4E5255","secondary-60":"#8F9396","secondary-70":"#A9B0B3","secondary-80":"#C7CBCC","secondary-90":"#DDDFE0","secondary-95":"#ECEDEE","secondary-100":"#F8F8F9","neutral-10":"#10171F","neutral-20":"#1E252C","neutral-30":"#2F353B","neutral-40":"#3D4247","neutral-50":"#4E5255","neutral-60":"#8F9396","neutral-70":"#A9B0B3","neutral-80":"#C7CBCC","neutral-90":"#DDDFE0","neutral-95":"#ECEDEE","neutral-100":"#F8F8F9","success-10":"#001B0E","success-20":"#012A16","success-30":"#013D20","success-40":"#014D28","success-50":"#005F30","success-60":"#48A377","success-70":"#77BD9B","success-80":"#A3D5BD","success-90":"#C4E7D6","success-95":"#DBF4E7","success-100":"#ECFDF5","warning-10":"#1F1500","warning-20":"#312100","warning-30":"#473000","warning-40":"#593C00","warning-50":"#6E4B00","warning-60":"#B78C31","warning-70":"#DDA633","warning-80":"#E0C792","warning-90":"#E9DEC5","warning-95":"#F4EEE0","warning-100":"#FAF8F3","error-10":"#360109","error-20":"#50010E","error-30":"#6F0213","error-40":"#88051A","error-50":"#A60A24","error-60":"#E07083","error-70":"#EA98A6","error-80":"#F3BBC4","error-90":"#FAD5DC","error-95":"#FEE9ED","error-100":"#FFF6F8","info-10":"#00143A","info-20":"#00205B","info-30":"#153368","info-40":"#18417C","info-50":"#00558C","info-60":"#009CDE","info-70":"#5AB9E7","info-80":"#9ED0ED","info-90":"#CAE3F4","info-95":"#E2F0F9","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000","primary-inverse":"#FFCB6A"},rn={collections:{lifesg:Ut,bookingsg:Yt,rbs:Xt,mylegacy:Zt,ccube:Vt,oneservice:Gt,pa:qt,a11yplayground:Kt,supportgowhere:Jt,imda:Qt,spf:en},defaultValue:"lifesg"},tn={collections:{lifesg:Ut,bookingsg:Yt,rbs:Xt,mylegacy:Zt,ccube:Vt,oneservice:Gt,pa:qt,a11yplayground:Kt,supportgowhere:Jt,imda:Qt,spf:en},defaultValue:"lifesg"},nn=e=>r=>{var t;const n=r.theme,o="dark"===(null==n?void 0:n.colourMode),i=jt(o?tn:rn,null==n?void 0:n.colourScheme),a=o?"primitiveColourDark":"primitiveColour",s=null===(t=null==n?void 0:n.overrides)||void 0===t?void 0:t[a];return s?Lt(i,e,s):i[e]},on={"brand-10":nn("brand-10"),"brand-20":nn("brand-20"),"brand-30":nn("brand-30"),"brand-40":nn("brand-40"),"brand-50":nn("brand-50"),"brand-60":nn("brand-60"),"brand-70":nn("brand-70"),"brand-80":nn("brand-80"),"brand-90":nn("brand-90"),"brand-95":nn("brand-95"),"brand-100":nn("brand-100"),"primary-10":nn("primary-10"),"primary-20":nn("primary-20"),"primary-30":nn("primary-30"),"primary-40":nn("primary-40"),"primary-50":nn("primary-50"),"primary-60":nn("primary-60"),"primary-70":nn("primary-70"),"primary-80":nn("primary-80"),"primary-90":nn("primary-90"),"primary-95":nn("primary-95"),"primary-100":nn("primary-100"),"secondary-10":nn("secondary-10"),"secondary-20":nn("secondary-20"),"secondary-30":nn("secondary-30"),"secondary-40":nn("secondary-40"),"secondary-50":nn("secondary-50"),"secondary-60":nn("secondary-60"),"secondary-70":nn("secondary-70"),"secondary-80":nn("secondary-80"),"secondary-90":nn("secondary-90"),"secondary-95":nn("secondary-95"),"secondary-100":nn("secondary-100"),"neutral-10":nn("neutral-10"),"neutral-20":nn("neutral-20"),"neutral-30":nn("neutral-30"),"neutral-40":nn("neutral-40"),"neutral-50":nn("neutral-50"),"neutral-60":nn("neutral-60"),"neutral-70":nn("neutral-70"),"neutral-80":nn("neutral-80"),"neutral-90":nn("neutral-90"),"neutral-95":nn("neutral-95"),"neutral-100":nn("neutral-100"),"success-10":nn("success-10"),"success-20":nn("success-20"),"success-30":nn("success-30"),"success-40":nn("success-40"),"success-50":nn("success-50"),"success-60":nn("success-60"),"success-70":nn("success-70"),"success-80":nn("success-80"),"success-90":nn("success-90"),"success-95":nn("success-95"),"success-100":nn("success-100"),"warning-10":nn("warning-10"),"warning-20":nn("warning-20"),"warning-30":nn("warning-30"),"warning-40":nn("warning-40"),"warning-50":nn("warning-50"),"warning-60":nn("warning-60"),"warning-70":nn("warning-70"),"warning-80":nn("warning-80"),"warning-90":nn("warning-90"),"warning-95":nn("warning-95"),"warning-100":nn("warning-100"),"error-10":nn("error-10"),"error-20":nn("error-20"),"error-30":nn("error-30"),"error-40":nn("error-40"),"error-50":nn("error-50"),"error-60":nn("error-60"),"error-70":nn("error-70"),"error-80":nn("error-80"),"error-90":nn("error-90"),"error-95":nn("error-95"),"error-100":nn("error-100"),"info-10":nn("info-10"),"info-20":nn("info-20"),"info-30":nn("info-30"),"info-40":nn("info-40"),"info-50":nn("info-50"),"info-60":nn("info-60"),"info-70":nn("info-70"),"info-80":nn("info-80"),"info-90":nn("info-90"),"info-95":nn("info-95"),"info-100":nn("info-100"),white:nn("white"),black:nn("black"),"primary-inverse":nn("primary-inverse")},an={text:nn("neutral-20"),"text-subtle":nn("neutral-30"),"text-subtler":nn("neutral-50"),"text-subtlest":nn("neutral-60"),"text-primary":nn("primary-50"),"text-primary-strongest":nn("primary-20"),"text-hover":nn("primary-40"),"text-selected":nn("primary-50"),"text-selected-hover":nn("primary-40"),"text-disabled":nn("neutral-50"),"text-disabled-subtle":nn("neutral-60"),"text-disabled-subtlest":nn("neutral-80"),"text-selected-disabled":nn("neutral-20"),"text-success":nn("success-40"),"text-warning":nn("warning-40"),"text-error":nn("error-40"),"text-info":nn("info-40"),"text-inverse":nn("white"),icon:nn("neutral-50"),"icon-subtle":nn("neutral-60"),"icon-strongest":nn("neutral-20"),"icon-primary":nn("primary-50"),"icon-primary-subtle":nn("primary-60"),"icon-primary-subtlest":nn("primary-70"),"icon-hover":nn("primary-40"),"icon-selected":nn("primary-50"),"icon-selected-hover":nn("primary-40"),"icon-disabled":nn("neutral-50"),"icon-disabled-subtle":nn("neutral-60"),"icon-selected-disabled":nn("neutral-60"),"icon-success":nn("success-50"),"icon-warning":nn("warning-60"),"icon-error":nn("error-50"),"icon-error-strong":nn("error-40"),"icon-info":nn("info-50"),"icon-inverse":nn("white"),"icon-primary-inverse":nn("primary-inverse"),border:nn("neutral-90"),"border-strong":nn("neutral-70"),"border-stronger":nn("neutral-50"),"border-primary":nn("primary-50"),"border-primary-subtle":nn("primary-60"),"border-hover":nn("primary-90"),"border-hover-strong":nn("primary-60"),"border-selected":nn("primary-50"),"border-selected-subtle":nn("primary-70"),"border-selected-subtlest":nn("primary-90"),"border-selected-hover":nn("primary-40"),"border-focus":nn("primary-60"),"border-focus-strong":nn("primary-50"),"border-disabled":nn("neutral-90"),"border-selected-disabled":nn("neutral-70"),"border-success":nn("success-60"),"border-warning":nn("warning-60"),"border-error":nn("error-60"),"border-error-focus":nn("error-60"),"border-error-focus-strong":nn("error-40"),"border-error-strong":nn("error-40"),"border-info":nn("info-60"),bg:nn("white"),"bg-strong":nn("neutral-100"),"bg-stronger":nn("neutral-95"),"bg-strongest":nn("neutral-90"),"bg-hover":nn("primary-95"),"bg-hover-strong":nn("primary-90"),"bg-hover-subtle":nn("primary-100"),"bg-hover-neutral":nn("neutral-100"),"bg-hover-neutral-strong":nn("neutral-90"),"bg-selected":nn("primary-95"),"bg-selected-hover":nn("primary-90"),"bg-selected-strong":nn("primary-90"),"bg-selected-stronger":nn("primary-70"),"bg-selected-strongest":nn("primary-50"),"bg-selected-strongest-hover":nn("primary-40"),"bg-disabled":nn("neutral-95"),"bg-selected-disabled":nn("neutral-95"),"bg-selected-stronger-disabled":nn("neutral-70"),"bg-success":nn("success-100"),"bg-success-hover":nn("success-95"),"bg-success-strong":nn("success-50"),"bg-success-strong-hover":nn("success-40"),"bg-warning":nn("warning-100"),"bg-warning-hover":nn("warning-95"),"bg-warning-strong":nn("warning-50"),"bg-warning-strong-hover":nn("warning-40"),"bg-info":nn("info-100"),"bg-info-hover":nn("info-95"),"bg-info-strong":nn("info-50"),"bg-info-strong-hover":nn("info-40"),"bg-error":nn("error-100"),"bg-error-hover":nn("error-95"),"bg-error-strong":nn("error-50"),"bg-error-strong-hover":nn("error-40"),"bg-inverse":nn("neutral-20"),"bg-inverse-subtle":nn("neutral-30"),"bg-inverse-subtler":nn("neutral-50"),"bg-inverse-subtlest":nn("neutral-60"),"bg-inverse-hover":nn("neutral-40"),"bg-primary":nn("primary-50"),"bg-primary-subtle":nn("primary-60"),"bg-primary-subtler":nn("primary-95"),"bg-primary-subtlest":nn("primary-100"),"bg-available":"#6DD0A1","bg-primary-hover":nn("primary-40"),"bg-primary-subtlest-hover":nn("primary-90"),"bg-primary-subtlest-selected":nn("primary-90"),"overlay-strong":"rgba(40, 40, 40, 0.85)","overlay-subtle":"rgba(40, 40, 40, 0.20)",hyperlink:nn("primary-50"),"hyperlink-hover":nn("primary-40"),"hyperlink-visited":nn("primary-40"),"hyperlink-inverse":nn("primary-inverse"),"focus-ring":nn("primary-50"),"focus-ring-inverse":nn("white")},sn={text:nn("neutral-100"),"text-subtle":nn("neutral-80"),"text-subtler":nn("neutral-60"),"text-subtlest":nn("neutral-50"),"text-primary":nn("primary-60"),"text-primary-strongest":nn("primary-90"),"text-hover":nn("primary-70"),"text-selected":nn("primary-60"),"text-selected-hover":nn("primary-70"),"text-disabled":nn("neutral-60"),"text-disabled-subtle":nn("neutral-50"),"text-disabled-subtlest":nn("neutral-30"),"text-selected-disabled":nn("neutral-90"),"text-success":nn("success-70"),"text-warning":nn("warning-70"),"text-error":nn("error-70"),"text-info":nn("info-70"),"text-inverse":nn("black"),icon:nn("neutral-60"),"icon-subtle":nn("neutral-50"),"icon-strongest":nn("neutral-90"),"icon-primary":nn("primary-60"),"icon-primary-subtle":nn("primary-50"),"icon-primary-subtlest":nn("primary-40"),"icon-hover":nn("primary-70"),"icon-selected":nn("primary-60"),"icon-selected-hover":nn("primary-70"),"icon-disabled":nn("neutral-60"),"icon-disabled-subtle":nn("neutral-50"),"icon-selected-disabled":nn("neutral-50"),"icon-success":nn("success-60"),"icon-warning":nn("warning-50"),"icon-error":nn("error-60"),"icon-error-strong":nn("error-70"),"icon-info":nn("info-60"),"icon-inverse":nn("black"),"icon-primary-inverse":nn("primary-inverse"),border:nn("neutral-20"),"border-strong":nn("neutral-40"),"border-stronger":nn("neutral-60"),"border-primary":nn("primary-60"),"border-primary-subtle":nn("primary-50"),"border-hover":nn("primary-20"),"border-hover-strong":nn("primary-50"),"border-selected":nn("primary-60"),"border-selected-subtle":nn("primary-40"),"border-selected-subtlest":nn("primary-20"),"border-selected-hover":nn("primary-70"),"border-focus":nn("primary-50"),"border-focus-strong":nn("primary-60"),"border-disabled":nn("neutral-20"),"border-selected-disabled":nn("neutral-40"),"border-success":nn("success-50"),"border-warning":nn("warning-50"),"border-error":nn("error-50"),"border-error-focus":nn("error-50"),"border-error-focus-strong":nn("error-70"),"border-error-strong":nn("error-70"),"border-info":nn("info-50"),bg:nn("black"),"bg-strong":nn("neutral-10"),"bg-stronger":nn("neutral-20"),"bg-strongest":nn("neutral-20"),"bg-hover":nn("primary-20"),"bg-hover-strong":nn("primary-20"),"bg-hover-subtle":nn("primary-10"),"bg-hover-neutral":nn("neutral-10"),"bg-hover-neutral-strong":nn("neutral-20"),"bg-selected":nn("primary-20"),"bg-selected-hover":nn("primary-20"),"bg-selected-strong":nn("primary-20"),"bg-selected-stronger":nn("primary-40"),"bg-selected-strongest":nn("primary-60"),"bg-selected-strongest-hover":nn("primary-70"),"bg-disabled":nn("neutral-20"),"bg-selected-disabled":nn("neutral-20"),"bg-selected-stronger-disabled":nn("neutral-40"),"bg-success":nn("success-10"),"bg-success-hover":nn("success-20"),"bg-success-strong":nn("success-60"),"bg-success-strong-hover":nn("success-70"),"bg-warning":nn("warning-10"),"bg-warning-hover":nn("warning-20"),"bg-warning-strong":nn("warning-60"),"bg-warning-strong-hover":nn("warning-70"),"bg-info":nn("info-10"),"bg-info-hover":nn("info-20"),"bg-info-strong":nn("info-60"),"bg-info-strong-hover":nn("info-70"),"bg-error":nn("error-10"),"bg-error-hover":nn("error-20"),"bg-error-strong":nn("error-60"),"bg-error-strong-hover":nn("error-70"),"bg-inverse":nn("neutral-90"),"bg-inverse-subtle":nn("neutral-80"),"bg-inverse-subtler":nn("neutral-60"),"bg-inverse-subtlest":nn("neutral-50"),"bg-inverse-hover":nn("neutral-70"),"bg-primary":nn("primary-60"),"bg-primary-subtle":nn("primary-50"),"bg-primary-subtler":nn("primary-20"),"bg-primary-subtlest":nn("primary-10"),"bg-available":"#185339","bg-primary-hover":nn("primary-70"),"bg-primary-subtlest-hover":nn("primary-20"),"bg-primary-subtlest-selected":nn("primary-20"),"overlay-strong":"rgba(78, 78, 78, 0.80)","overlay-subtle":"rgba(78, 78, 78, 0.50)",hyperlink:nn("primary-60"),"hyperlink-hover":nn("primary-70"),"hyperlink-visited":nn("primary-70"),"hyperlink-inverse":nn("primary-inverse"),"focus-ring":nn("primary-60"),"focus-ring-inverse":nn("black")},ln={text:nn("neutral-30"),"text-subtle":nn("neutral-40"),"text-subtler":nn("neutral-50"),"text-subtlest":nn("neutral-70"),"text-primary":nn("neutral-10"),"text-primary-strongest":nn("neutral-10"),"text-hover":nn("neutral-70"),"text-selected":nn("neutral-20"),"text-selected-hover":nn("neutral-10"),"text-disabled":nn("neutral-50"),"text-disabled-subtle":nn("neutral-70"),"text-disabled-subtlest":nn("neutral-80"),"text-selected-disabled":nn("neutral-40"),"text-success":nn("success-40"),"text-warning":nn("warning-40"),"text-error":nn("brand-30"),"text-info":nn("neutral-40"),"text-inverse":nn("neutral-100"),icon:nn("neutral-40"),"icon-subtle":nn("neutral-50"),"icon-strongest":nn("neutral-10"),"icon-primary":nn("neutral-10"),"icon-primary-subtle":nn("neutral-30"),"icon-primary-subtlest":nn("neutral-60"),"icon-hover":nn("neutral-70"),"icon-selected":nn("brand-20"),"icon-selected-hover":nn("brand-10"),"icon-disabled":nn("neutral-50"),"icon-disabled-subtle":nn("neutral-70"),"icon-selected-disabled":nn("neutral-40"),"icon-success":nn("success-40"),"icon-warning":nn("warning-60"),"icon-error":nn("brand-30"),"icon-error-strong":nn("brand-10"),"icon-info":nn("neutral-40"),"icon-inverse":nn("neutral-100"),"icon-primary-inverse":"#F9B371",border:nn("neutral-90"),"border-strong":nn("neutral-30"),"border-stronger":nn("neutral-20"),"border-primary":nn("neutral-40"),"border-primary-subtle":nn("neutral-60"),"border-hover":nn("neutral-80"),"border-hover-strong":nn("neutral-10"),"border-selected":nn("brand-20"),"border-selected-subtle":nn("neutral-40"),"border-selected-subtlest":nn("neutral-70"),"border-selected-hover":nn("neutral-10"),"border-focus":nn("neutral-20"),"border-focus-strong":nn("neutral-10"),"border-disabled":nn("neutral-90"),"border-selected-disabled":nn("neutral-80"),"border-success":nn("success-40"),"border-warning":nn("warning-60"),"border-error":nn("brand-30"),"border-error-focus":nn("brand-20"),"border-error-focus-strong":nn("brand-10"),"border-error-strong":nn("brand-20"),"border-info":nn("neutral-40"),bg:nn("neutral-100"),"bg-strong":nn("neutral-95"),"bg-stronger":nn("neutral-90"),"bg-strongest":nn("neutral-80"),"bg-hover":nn("brand-90"),"bg-hover-strong":nn("brand-80"),"bg-hover-subtle":nn("neutral-90"),"bg-hover-neutral":nn("neutral-90"),"bg-hover-neutral-strong":nn("neutral-90"),"bg-selected":nn("brand-100"),"bg-selected-hover":nn("brand-30"),"bg-selected-strong":nn("brand-50"),"bg-selected-stronger":nn("brand-40"),"bg-selected-strongest":nn("brand-20"),"bg-selected-strongest-hover":nn("brand-10"),"bg-disabled":nn("neutral-90"),"bg-selected-disabled":nn("neutral-90"),"bg-selected-stronger-disabled":nn("neutral-80"),"bg-success":nn("success-100"),"bg-success-hover":nn("success-95"),"bg-success-strong":nn("success-50"),"bg-success-strong-hover":nn("success-40"),"bg-warning":nn("warning-100"),"bg-warning-hover":nn("warning-95"),"bg-warning-strong":nn("warning-50"),"bg-warning-strong-hover":nn("warning-40"),"bg-info":nn("neutral-95"),"bg-info-hover":nn("info-95"),"bg-info-strong":nn("info-50"),"bg-info-strong-hover":nn("info-40"),"bg-error":nn("brand-100"),"bg-error-hover":nn("error-95"),"bg-error-strong":nn("error-50"),"bg-error-strong-hover":nn("error-40"),"bg-inverse":nn("neutral-40"),"bg-inverse-subtle":nn("neutral-60"),"bg-inverse-subtler":nn("neutral-70"),"bg-inverse-subtlest":nn("neutral-80"),"bg-inverse-hover":nn("neutral-30"),"bg-primary":nn("brand-20"),"bg-primary-subtle":nn("brand-60"),"bg-primary-subtler":nn("brand-80"),"bg-primary-subtlest":nn("brand-100"),"bg-available":nn("success-60"),"bg-primary-hover":nn("brand-10"),"bg-primary-subtlest-hover":nn("brand-80"),"bg-primary-subtlest-selected":nn("brand-40"),"overlay-strong":"rgba(25, 25, 25, 0.95)","overlay-subtle":"rgba(25, 25, 25, 0.20)",hyperlink:nn("neutral-10"),"hyperlink-hover":nn("neutral-40"),"hyperlink-visited":nn("neutral-50"),"hyperlink-inverse":"#F8AE68","focus-ring":nn("primary-50"),"focus-ring-inverse":nn("white")},dn={text:nn("neutral-20"),"text-subtle":nn("neutral-30"),"text-subtler":nn("neutral-50"),"text-subtlest":nn("neutral-60"),"text-primary":nn("primary-50"),"text-primary-strongest":nn("primary-20"),"text-hover":nn("primary-40"),"text-selected":nn("primary-50"),"text-selected-hover":nn("primary-40"),"text-disabled":nn("neutral-50"),"text-disabled-subtle":nn("neutral-60"),"text-disabled-subtlest":nn("neutral-80"),"text-selected-disabled":nn("neutral-20"),"text-success":nn("success-40"),"text-warning":nn("warning-40"),"text-error":nn("error-40"),"text-info":nn("info-40"),"text-inverse":nn("white"),icon:nn("neutral-50"),"icon-subtle":nn("neutral-60"),"icon-strongest":nn("neutral-20"),"icon-primary":nn("primary-50"),"icon-primary-subtle":nn("primary-60"),"icon-primary-subtlest":nn("primary-70"),"icon-hover":nn("primary-40"),"icon-selected":nn("primary-50"),"icon-selected-hover":nn("primary-40"),"icon-disabled":nn("neutral-50"),"icon-disabled-subtle":nn("neutral-60"),"icon-selected-disabled":nn("neutral-60"),"icon-success":nn("success-50"),"icon-warning":nn("warning-60"),"icon-error":nn("error-50"),"icon-error-strong":nn("error-40"),"icon-info":nn("info-50"),"icon-inverse":nn("white"),"icon-primary-inverse":nn("primary-inverse"),border:nn("neutral-90"),"border-strong":nn("neutral-70"),"border-stronger":nn("neutral-50"),"border-primary":nn("primary-50"),"border-primary-subtle":nn("primary-60"),"border-hover":nn("primary-90"),"border-hover-strong":nn("primary-60"),"border-selected":nn("primary-50"),"border-selected-subtle":nn("primary-70"),"border-selected-subtlest":nn("primary-90"),"border-selected-hover":nn("primary-40"),"border-focus":nn("primary-60"),"border-focus-strong":nn("primary-50"),"border-disabled":nn("neutral-90"),"border-selected-disabled":nn("neutral-70"),"border-success":nn("success-60"),"border-warning":nn("warning-60"),"border-error":nn("error-60"),"border-error-focus":nn("error-60"),"border-error-focus-strong":nn("error-40"),"border-error-strong":nn("error-40"),"border-info":nn("info-60"),bg:nn("white"),"bg-strong":nn("neutral-100"),"bg-stronger":nn("neutral-95"),"bg-strongest":nn("neutral-90"),"bg-hover":nn("primary-95"),"bg-hover-strong":nn("primary-90"),"bg-hover-subtle":nn("primary-100"),"bg-hover-neutral":nn("neutral-100"),"bg-hover-neutral-strong":nn("neutral-90"),"bg-selected":nn("primary-95"),"bg-selected-hover":nn("primary-90"),"bg-selected-strong":nn("primary-90"),"bg-selected-stronger":nn("primary-70"),"bg-selected-strongest":nn("primary-50"),"bg-selected-strongest-hover":nn("primary-40"),"bg-disabled":nn("neutral-95"),"bg-selected-disabled":nn("neutral-95"),"bg-selected-stronger-disabled":nn("neutral-70"),"bg-success":nn("success-100"),"bg-success-hover":nn("success-95"),"bg-success-strong":nn("success-50"),"bg-success-strong-hover":nn("success-40"),"bg-warning":nn("warning-100"),"bg-warning-hover":nn("warning-95"),"bg-warning-strong":nn("warning-50"),"bg-warning-strong-hover":nn("warning-40"),"bg-info":nn("info-100"),"bg-info-hover":nn("info-95"),"bg-info-strong":nn("info-50"),"bg-info-strong-hover":nn("info-40"),"bg-error":nn("error-100"),"bg-error-hover":nn("error-95"),"bg-error-strong":nn("error-50"),"bg-error-strong-hover":nn("error-40"),"bg-inverse":nn("neutral-20"),"bg-inverse-subtle":nn("neutral-30"),"bg-inverse-subtler":nn("neutral-50"),"bg-inverse-subtlest":nn("neutral-60"),"bg-inverse-hover":nn("neutral-40"),"bg-primary":nn("primary-50"),"bg-primary-subtle":nn("primary-60"),"bg-primary-subtler":nn("primary-95"),"bg-primary-subtlest":nn("primary-100"),"bg-available":"#6DD0A1","bg-primary-hover":nn("primary-40"),"bg-primary-subtlest-hover":nn("primary-90"),"bg-primary-subtlest-selected":nn("primary-90"),"overlay-strong":"rgba(40, 40, 40, 0.85)","overlay-subtle":"rgba(40, 40, 40, 0.20)",hyperlink:nn("primary-50"),"hyperlink-hover":nn("primary-40"),"hyperlink-visited":nn("primary-40"),"hyperlink-inverse":nn("primary-inverse"),"focus-ring":nn("primary-50"),"focus-ring-inverse":nn("white")},cn={text:nn("neutral-100"),"text-subtle":nn("neutral-80"),"text-subtler":nn("neutral-60"),"text-subtlest":nn("neutral-50"),"text-primary":nn("primary-60"),"text-primary-strongest":nn("primary-90"),"text-hover":nn("primary-70"),"text-selected":nn("primary-60"),"text-selected-hover":nn("primary-70"),"text-disabled":nn("neutral-60"),"text-disabled-subtle":nn("neutral-50"),"text-disabled-subtlest":nn("neutral-30"),"text-selected-disabled":nn("neutral-90"),"text-success":nn("success-70"),"text-warning":nn("warning-70"),"text-error":nn("error-70"),"text-info":nn("info-70"),"text-inverse":nn("black"),icon:nn("neutral-60"),"icon-subtle":nn("neutral-50"),"icon-strongest":nn("neutral-90"),"icon-primary":nn("primary-60"),"icon-primary-subtle":nn("primary-50"),"icon-primary-subtlest":nn("primary-40"),"icon-hover":nn("primary-70"),"icon-selected":nn("primary-60"),"icon-selected-hover":nn("primary-70"),"icon-disabled":nn("neutral-60"),"icon-disabled-subtle":nn("neutral-50"),"icon-selected-disabled":nn("neutral-50"),"icon-success":nn("success-60"),"icon-warning":nn("warning-50"),"icon-error":nn("error-60"),"icon-error-strong":nn("error-70"),"icon-info":nn("info-60"),"icon-inverse":nn("black"),"icon-primary-inverse":nn("primary-inverse"),border:nn("neutral-20"),"border-strong":nn("neutral-40"),"border-stronger":nn("neutral-60"),"border-primary":nn("primary-60"),"border-primary-subtle":nn("primary-50"),"border-hover":nn("primary-20"),"border-hover-strong":nn("primary-50"),"border-selected":nn("primary-60"),"border-selected-subtle":nn("primary-40"),"border-selected-subtlest":nn("primary-20"),"border-selected-hover":nn("primary-70"),"border-focus":nn("primary-50"),"border-focus-strong":nn("primary-60"),"border-disabled":nn("neutral-20"),"border-selected-disabled":nn("neutral-40"),"border-success":nn("success-50"),"border-warning":nn("warning-50"),"border-error":nn("error-50"),"border-error-focus":nn("error-50"),"border-error-focus-strong":nn("error-70"),"border-error-strong":nn("error-70"),"border-info":nn("info-50"),bg:nn("black"),"bg-strong":nn("neutral-10"),"bg-stronger":nn("neutral-20"),"bg-strongest":nn("neutral-20"),"bg-hover":nn("primary-20"),"bg-hover-strong":nn("primary-20"),"bg-hover-subtle":nn("primary-10"),"bg-hover-neutral":nn("neutral-10"),"bg-hover-neutral-strong":nn("neutral-20"),"bg-selected":nn("primary-20"),"bg-selected-hover":nn("primary-20"),"bg-selected-strong":nn("primary-20"),"bg-selected-stronger":nn("primary-40"),"bg-selected-strongest":nn("primary-60"),"bg-selected-strongest-hover":nn("primary-70"),"bg-disabled":nn("neutral-20"),"bg-selected-disabled":nn("neutral-20"),"bg-selected-stronger-disabled":nn("neutral-40"),"bg-success":nn("success-10"),"bg-success-hover":nn("success-20"),"bg-success-strong":nn("success-60"),"bg-success-strong-hover":nn("success-70"),"bg-warning":nn("warning-10"),"bg-warning-hover":nn("warning-20"),"bg-warning-strong":nn("warning-60"),"bg-warning-strong-hover":nn("warning-70"),"bg-info":nn("info-10"),"bg-info-hover":nn("info-20"),"bg-info-strong":nn("info-60"),"bg-info-strong-hover":nn("info-70"),"bg-error":nn("error-10"),"bg-error-hover":nn("error-20"),"bg-error-strong":nn("error-60"),"bg-error-strong-hover":nn("error-70"),"bg-inverse":nn("neutral-90"),"bg-inverse-subtle":nn("neutral-80"),"bg-inverse-subtler":nn("neutral-60"),"bg-inverse-subtlest":nn("neutral-50"),"bg-inverse-hover":nn("neutral-70"),"bg-primary":nn("primary-60"),"bg-primary-subtle":nn("primary-50"),"bg-primary-subtler":nn("primary-20"),"bg-primary-subtlest":nn("primary-10"),"bg-available":"#185339","bg-primary-hover":nn("primary-70"),"bg-primary-subtlest-hover":nn("primary-20"),"bg-primary-subtlest-selected":nn("primary-20"),"overlay-strong":"rgba(78, 78, 78, 0.80)","overlay-subtle":"rgba(78, 78, 78, 0.50)",hyperlink:nn("primary-60"),"hyperlink-hover":nn("primary-70"),"hyperlink-visited":nn("primary-70"),"hyperlink-inverse":nn("primary-inverse"),"focus-ring":nn("primary-60"),"focus-ring-inverse":nn("black")},un={collections:{lifesg:an,bookingsg:an,rbs:an,mylegacy:an,ccube:an,oneservice:an,pa:ln,a11yplayground:dn,supportgowhere:an,imda:an,spf:an},defaultValue:"lifesg"},gn={collections:{lifesg:sn,bookingsg:sn,rbs:sn,mylegacy:sn,ccube:sn,oneservice:sn,pa:sn,a11yplayground:cn,supportgowhere:sn,imda:sn,spf:sn},defaultValue:"lifesg"},hn=e=>r=>{var t;const n=r.theme,o="dark"===(null==n?void 0:n.colourMode),i=jt(o?gn:un,null==n?void 0:n.colourScheme),a=o?"semanticColourDark":"semanticColour",s=null===(t=null==n?void 0:n.overrides)||void 0===t?void 0:t[a],l=s?Lt(i,e,s):i[e];return"function"==typeof l?l(r):l},mn={text:hn("text"),"text-subtle":hn("text-subtle"),"text-subtler":hn("text-subtler"),"text-subtlest":hn("text-subtlest"),"text-primary":hn("text-primary"),"text-primary-strongest":hn("text-primary-strongest"),"text-hover":hn("text-hover"),"text-selected":hn("text-selected"),"text-selected-hover":hn("text-selected-hover"),"text-disabled":hn("text-disabled"),"text-disabled-subtle":hn("text-disabled-subtle"),"text-disabled-subtlest":hn("text-disabled-subtlest"),"text-selected-disabled":hn("text-selected-disabled"),"text-success":hn("text-success"),"text-warning":hn("text-warning"),"text-error":hn("text-error"),"text-info":hn("text-info"),"text-inverse":hn("text-inverse"),icon:hn("icon"),"icon-subtle":hn("icon-subtle"),"icon-strongest":hn("icon-strongest"),"icon-primary":hn("icon-primary"),"icon-primary-subtle":hn("icon-primary-subtle"),"icon-primary-subtlest":hn("icon-primary-subtlest"),"icon-hover":hn("icon-hover"),"icon-selected":hn("icon-selected"),"icon-selected-hover":hn("icon-selected-hover"),"icon-disabled":hn("icon-disabled"),"icon-disabled-subtle":hn("icon-disabled-subtle"),"icon-selected-disabled":hn("icon-selected-disabled"),"icon-success":hn("icon-success"),"icon-warning":hn("icon-warning"),"icon-error":hn("icon-error"),"icon-error-strong":hn("icon-error-strong"),"icon-info":hn("icon-info"),"icon-inverse":hn("icon-inverse"),"icon-primary-inverse":hn("icon-primary-inverse"),border:hn("border"),"border-strong":hn("border-strong"),"border-stronger":hn("border-stronger"),"border-primary":hn("border-primary"),"border-primary-subtle":hn("border-primary-subtle"),"border-hover":hn("border-hover"),"border-hover-strong":hn("border-hover-strong"),"border-selected":hn("border-selected"),"border-selected-subtle":hn("border-selected-subtle"),"border-selected-subtlest":hn("border-selected-subtlest"),"border-selected-hover":hn("border-selected-hover"),"border-focus":hn("border-focus"),"border-focus-strong":hn("border-focus-strong"),"border-disabled":hn("border-disabled"),"border-selected-disabled":hn("border-selected-disabled"),"border-success":hn("border-success"),"border-warning":hn("border-warning"),"border-error":hn("border-error"),"border-error-focus":hn("border-error-focus"),"border-error-focus-strong":hn("border-error-focus-strong"),"border-error-strong":hn("border-error-strong"),"border-info":hn("border-info"),bg:hn("bg"),"bg-strong":hn("bg-strong"),"bg-stronger":hn("bg-stronger"),"bg-strongest":hn("bg-strongest"),"bg-hover":hn("bg-hover"),"bg-hover-strong":hn("bg-hover-strong"),"bg-hover-subtle":hn("bg-hover-subtle"),"bg-hover-neutral":hn("bg-hover-neutral"),"bg-hover-neutral-strong":hn("bg-hover-neutral-strong"),"bg-selected":hn("bg-selected"),"bg-selected-hover":hn("bg-selected-hover"),"bg-selected-strong":hn("bg-selected-strong"),"bg-selected-stronger":hn("bg-selected-stronger"),"bg-selected-strongest":hn("bg-selected-strongest"),"bg-selected-strongest-hover":hn("bg-selected-strongest-hover"),"bg-disabled":hn("bg-disabled"),"bg-selected-disabled":hn("bg-selected-disabled"),"bg-selected-stronger-disabled":hn("bg-selected-stronger-disabled"),"bg-success":hn("bg-success"),"bg-success-hover":hn("bg-success-hover"),"bg-success-strong":hn("bg-success-strong"),"bg-success-strong-hover":hn("bg-success-strong-hover"),"bg-warning":hn("bg-warning"),"bg-warning-hover":hn("bg-warning-hover"),"bg-warning-strong":hn("bg-warning-strong"),"bg-warning-strong-hover":hn("bg-warning-strong-hover"),"bg-info":hn("bg-info"),"bg-info-hover":hn("bg-info-hover"),"bg-info-strong":hn("bg-info-strong"),"bg-info-strong-hover":hn("bg-info-strong-hover"),"bg-error":hn("bg-error"),"bg-error-hover":hn("bg-error-hover"),"bg-error-strong":hn("bg-error-strong"),"bg-error-strong-hover":hn("bg-error-strong-hover"),"bg-inverse":hn("bg-inverse"),"bg-inverse-subtle":hn("bg-inverse-subtle"),"bg-inverse-subtler":hn("bg-inverse-subtler"),"bg-inverse-subtlest":hn("bg-inverse-subtlest"),"bg-inverse-hover":hn("bg-inverse-hover"),"bg-primary":hn("bg-primary"),"bg-primary-subtle":hn("bg-primary-subtle"),"bg-primary-subtler":hn("bg-primary-subtler"),"bg-primary-subtlest":hn("bg-primary-subtlest"),"bg-available":hn("bg-available"),"bg-primary-hover":hn("bg-primary-hover"),"bg-primary-subtlest-hover":hn("bg-primary-subtlest-hover"),"bg-primary-subtlest-selected":hn("bg-primary-subtlest-selected"),"overlay-strong":hn("overlay-strong"),"overlay-subtle":hn("overlay-subtle"),hyperlink:hn("hyperlink"),"hyperlink-hover":hn("hyperlink-hover"),"hyperlink-visited":hn("hyperlink-visited"),"hyperlink-inverse":hn("hyperlink-inverse"),"focus-ring":hn("focus-ring"),"focus-ring-inverse":hn("focus-ring-inverse")},bn={collections:{default:{solid:e=>r=>{var t,n,o;const{thickness:i,radius:a,colour:s}=e||{},l=null!==(t="function"==typeof i?i(r):i+"px")&&void 0!==t?t:Nt["width-010"](r),d=null!==(n="function"==typeof a?a(r):a+"px")&&void 0!==n?n:0,c=null!==(o="function"==typeof s?s(r):s)&&void 0!==o?o:mn.border(r),u=Nt.solid;return C`
            border: ${l} ${u} ${c};
            border-radius: ${d};
        `},"dashed-default":e=>r=>{var t,n,o;const{thickness:i,radius:a,colour:s}=e||{},l=null!==(t="function"==typeof i?i(r):i)&&void 0!==t?t:Nt["width-010"](r),d=null!==(n="function"==typeof a?a(r):a)&&void 0!==n?n:0,c=null!==(o="function"==typeof s?s(r):s)&&void 0!==o?o:mn.border(r),u=encodeURIComponent(`<svg width='100%' height='100%' xmlns='http://www.w3.org/2000/svg'><rect width='100%' height='100%' fill='none' rx='${d}' ry='${d}' stroke='${c}' stroke-width='${l}' stroke-dasharray='4, 8' stroke-dashoffset='0' stroke-linecap='square'/></svg>`);return C`
            background-image: url("data:image/svg+xml,${u}");
            border-radius: ${d};
        `}}},defaultValue:"default"},fn=e=>1===e.length&&"theme"in e[0],pn=e=>(...r)=>t=>{const n=fn(r)?[]:r,o=fn(r)?r[0]:t,i=o.theme;return(0,jt(bn,null==i?void 0:i.borderScheme)[e])(...n)(o)},yn={solid:pn("solid"),"dashed-default":pn("dashed-default")},vn={collections:{default:{"xxs-min":0,"xxs-max":320,"xs-min":321,"xs-max":375,"sm-min":376,"sm-max":480,"md-min":481,"md-max":768,"lg-min":769,"lg-max":1200,"xl-min":1201,"xl-max":1440,"xxl-min":1441,"xxs-column":8,"xs-column":8,"sm-column":8,"md-column":8,"lg-column":12,"xl-column":12,"xxl-column":12,"xxs-gutter":16,"xs-gutter":16,"sm-gutter":16,"md-gutter":16,"lg-gutter":32,"xl-gutter":32,"xxl-gutter":32,"xxs-margin":24,"xs-margin":24,"sm-margin":24,"md-margin":24,"lg-margin":48,"xl-margin":48,"xxl-margin":48}},defaultValue:"default"},xn=e=>r=>{var t;const n=r.theme,o=jt(vn,null==n?void 0:n.breakpointScheme);let i;return i=(null===(t=null==n?void 0:n.overrides)||void 0===t?void 0:t.breakpoint)?Lt(o,e,n.overrides.breakpoint):o[e],i},wn={"xxs-min":xn("xxs-min"),"xxs-max":xn("xxs-max"),"xs-min":xn("xs-min"),"xs-max":xn("xs-max"),"sm-min":xn("sm-min"),"sm-max":xn("sm-max"),"md-min":xn("md-min"),"md-max":xn("md-max"),"lg-min":xn("lg-min"),"lg-max":xn("lg-max"),"xl-min":xn("xl-min"),"xl-max":xn("xl-max"),"xxl-min":xn("xxl-min"),"xxs-column":xn("xxs-column"),"xs-column":xn("xs-column"),"sm-column":xn("sm-column"),"md-column":xn("md-column"),"lg-column":xn("lg-column"),"xl-column":xn("xl-column"),"xxl-column":xn("xxl-column"),"xxs-gutter":xn("xxs-gutter"),"xs-gutter":xn("xs-gutter"),"sm-gutter":xn("sm-gutter"),"md-gutter":xn("md-gutter"),"lg-gutter":xn("lg-gutter"),"xl-gutter":xn("xl-gutter"),"xxl-gutter":xn("xxl-gutter"),"xxs-margin":xn("xxs-margin"),"xs-margin":xn("xs-margin"),"sm-margin":xn("sm-margin"),"md-margin":xn("md-margin"),"lg-margin":xn("lg-margin"),"xl-margin":xn("xl-margin"),"xxl-margin":xn("xxl-margin")},$n=e=>("max-width"===e?["xxs","xs","sm","md","lg","xl"]:["xxs","xs","sm","md","lg","xl","xxl"]).reduce(((r,t)=>(r[t]=((e,r)=>{const t=wn["max-width"===e?`${r}-max`:`${r}-min`];return r=>{const n=t(r);return`@media screen and (${e}: ${n}px)`}})(e,t),r)),{}),Fn={MaxWidth:$n("max-width"),MinWidth:$n("min-width")},Cn={collections:{default:{none:0,xs:2,sm:4,md:8,lg:12,full:9999},spf:{none:0,xs:2,sm:8,md:8,lg:12,full:9999}},defaultValue:"default"},En=e=>r=>{var t;const n=r.theme,o=jt(Cn,null==n?void 0:n.radiusScheme);return(null===(t=null==n?void 0:n.overrides)||void 0===t?void 0:t.radius)?`${Lt(o,e,n.overrides.radius)}px`:`${o[e]}px`},Sn={none:En("none"),xs:En("xs"),sm:En("sm"),md:En("md"),lg:En("lg"),full:En("full")},Dn={Button:{"button-radius":Sn.md,"button-default-colour-bg":mn["bg-primary"],"button-default-colour-bg-hover":mn["bg-primary-hover"],"button-default-colour-text":mn["text-inverse"],"button-secondary-colour-border":mn["border-primary"],"button-secondary-colour-text":mn["text-primary"],"button-light-colour-text":mn["text-primary"],"button-link-colour-text":mn["text-primary"]},Animation:{"loading-dots-spinner-colour":mn["icon-primary"]},Navbar:{"navbar-full-height":"6rem","navbar-full-logo-height":"2rem","navbar-compressed-height":"4rem","navbar-compressed-logo-height":"1.5rem","navbar-mobile-height":"3.5rem","navbar-mobile-logo-height":"1.5rem","navbar-colour-bg":mn.bg,"navbar-colour-icon":mn.icon,"navbar-link-colour-text":mn.text,"navbar-link-colour-text-hover":mn["text-hover"],"navbar-link-colour-text-selected-hover":mn["text-selected-hover"]},Footer:{"footer-colour-bg":mn["bg-strong"],"footer-colour-text":mn.text,"footer-link-colour-text":mn.text,"footer-link-colour-text-hover":mn["text-hover"],"footer-disclaimer-link-colour-text":mn.text,"footer-disclaimer-link-colour-text-hover":mn["text-subtler"]}},kn={Button:{"button-radius":Sn.sm,"button-default-colour-bg":mn["bg-primary"],"button-default-colour-bg-hover":mn["bg-primary-hover"],"button-default-colour-text":mn["text-inverse"],"button-secondary-colour-border":mn["border-primary"],"button-secondary-colour-text":mn["text-primary"],"button-light-colour-text":mn["text-primary"],"button-link-colour-text":mn["text-primary"]},Animation:{"loading-dots-spinner-colour":mn["icon-primary"]},Navbar:{"navbar-full-height":"6rem","navbar-full-logo-height":"2rem","navbar-compressed-height":"4rem","navbar-compressed-logo-height":"1.5rem","navbar-mobile-height":"3.5rem","navbar-mobile-logo-height":"1.5rem","navbar-colour-bg":mn.bg,"navbar-colour-icon":mn.icon,"navbar-link-colour-text":mn.text,"navbar-link-colour-text-hover":mn["text-hover"],"navbar-link-colour-text-selected-hover":mn["text-selected-hover"]},Footer:{"footer-colour-bg":mn["bg-strong"],"footer-colour-text":mn.text,"footer-link-colour-text":mn.text,"footer-link-colour-text-hover":mn["text-hover"],"footer-disclaimer-link-colour-text":mn.text,"footer-disclaimer-link-colour-text-hover":mn["text-subtler"]}},Bn={Button:{"button-radius":Sn.sm,"button-default-colour-bg":mn["bg-primary"],"button-default-colour-bg-hover":mn["bg-primary-hover"],"button-default-colour-text":mn["text-inverse"],"button-secondary-colour-border":mn["border-primary"],"button-secondary-colour-text":mn["text-primary"],"button-light-colour-text":mn["text-primary"],"button-link-colour-text":mn["text-primary"]},Animation:{"loading-dots-spinner-colour":on["brand-50"]},Navbar:{"navbar-full-height":"6rem","navbar-full-logo-height":"2rem","navbar-compressed-height":"4rem","navbar-compressed-logo-height":"1.5rem","navbar-mobile-height":"3.5rem","navbar-mobile-logo-height":"1.5rem","navbar-colour-bg":mn.bg,"navbar-colour-icon":mn.icon,"navbar-link-colour-text":mn.text,"navbar-link-colour-text-hover":mn["text-hover"],"navbar-link-colour-text-selected-hover":mn["text-selected-hover"]},Footer:{"footer-colour-bg":mn["bg-strong"],"footer-colour-text":mn.text,"footer-link-colour-text":mn.text,"footer-link-colour-text-hover":mn["text-hover"],"footer-disclaimer-link-colour-text":mn.text,"footer-disclaimer-link-colour-text-hover":mn["text-subtler"]}},Tn={collections:{default:kn,pa:{Button:{"button-radius":Sn.full,"button-default-colour-bg":mn["bg-primary"],"button-default-colour-bg-hover":mn["bg-primary-hover"],"button-default-colour-text":mn["text-inverse"],"button-secondary-colour-border":mn["border-primary"],"button-secondary-colour-text":mn["text-primary"],"button-light-colour-text":mn["text-primary"],"button-link-colour-text":mn["text-primary"]},Animation:{"loading-dots-spinner-colour":mn["icon-primary"]},Navbar:{"navbar-full-height":"6rem","navbar-full-logo-height":"2rem","navbar-compressed-height":"4rem","navbar-compressed-logo-height":"1.5rem","navbar-mobile-height":"3.5rem","navbar-mobile-logo-height":"1.5rem","navbar-colour-bg":mn.bg,"navbar-colour-icon":mn.icon,"navbar-link-colour-text":mn.text,"navbar-link-colour-text-hover":mn["text-hover"],"navbar-link-colour-text-selected-hover":mn["text-selected-hover"]},Footer:{"footer-colour-bg":mn["bg-strong"],"footer-colour-text":mn.text,"footer-link-colour-text":mn.text,"footer-link-colour-text-hover":mn["text-hover"],"footer-disclaimer-link-colour-text":mn.text,"footer-disclaimer-link-colour-text-hover":mn["text-subtler"]}},a11yplayground:Dn,lifesg:Bn,spf:{Button:{"button-radius":Sn.md,"button-default-colour-bg":mn["bg-primary"],"button-default-colour-bg-hover":mn["bg-primary-hover"],"button-default-colour-text":mn["text-inverse"],"button-secondary-colour-border":mn["border-primary"],"button-secondary-colour-text":mn["text-primary"],"button-light-colour-text":mn["text-primary"],"button-link-colour-text":mn["text-primary"]},Animation:{"loading-dots-spinner-colour":mn["icon-primary"]},Navbar:{"navbar-full-height":"6rem","navbar-full-logo-height":"3rem","navbar-compressed-height":"5rem","navbar-compressed-logo-height":"2rem","navbar-mobile-height":"4rem","navbar-mobile-logo-height":"2rem","navbar-colour-bg":mn.bg,"navbar-colour-icon":mn.icon,"navbar-link-colour-text":mn["text-primary-strongest"],"navbar-link-colour-text-hover":mn["text-subtler"],"navbar-link-colour-text-selected-hover":mn["text-subtler"]},Footer:{"footer-colour-bg":mn["bg-inverse"],"footer-colour-text":mn["text-inverse"],"footer-link-colour-text":mn["text-inverse"],"footer-link-colour-text-hover":mn["text-inverse"],"footer-disclaimer-link-colour-text":mn["text-inverse"],"footer-disclaimer-link-colour-text-hover":mn["text-inverse"]}}},defaultValue:"default"},zn=(e,r)=>t=>{var n,o;const i=t.theme,a=jt(Tn,null==i?void 0:i.componentScheme);return In((null===(o=null===(n=null==i?void 0:i.componentOverrides)||void 0===n?void 0:n[e])||void 0===o?void 0:o[r])||a[e][r],t)},In=(e,r)=>{switch(typeof e){case"function":return e(r);case"number":return e+"px";case"string":return e}},An=zn("Button","button-radius"),On=zn("Button","button-default-colour-bg"),Mn=zn("Button","button-default-colour-bg-hover"),Hn=zn("Button","button-default-colour-text"),Rn=zn("Button","button-secondary-colour-border"),Ln=zn("Button","button-secondary-colour-text"),jn=zn("Button","button-light-colour-text"),_n=zn("Button","button-link-colour-text"),Wn={collections:{default:{"heading-size-xxl":"3rem","heading-size-xl":"2.5rem","heading-size-lg":"2rem","heading-size-md":"1.625rem","heading-size-sm":"1.375rem","heading-size-xs":"1.125rem","heading-lh-xxl":"3.5rem","heading-lh-xl":"3rem","heading-lh-lg":"2.5rem","heading-lh-md":"2.25rem","heading-lh-sm":"1.75rem","heading-lh-xs":"1.625rem","heading-ls-xxl":"-0.035rem","heading-ls-xl":"-0.02rem","heading-ls-lg":"-0.02rem","heading-ls-md":"0rem","heading-ls-sm":"0rem","heading-ls-xs":"0rem","weight-light":"300","weight-regular":"400","weight-semibold":"600","weight-bold":"700","font-family":"Open Sans","body-size-baseline":"1.125rem","body-size-md":"1rem","body-size-sm":"0.875rem","body-size-xs":"0.75rem","body-lh-baseline":"1.625rem","body-lh-md":"1.5rem","body-lh-sm":"1.625rem","body-lh-xs":"1.25rem","body-ls-baseline":"0rem","body-ls-md":"0.009rem","body-ls-sm":"0.008rem","body-ls-xs":"0.008rem","form-label-size":"1rem","form-description-size":"0.875rem","form-label-lh":"1.5rem","form-description-lh":"1.625rem","form-label-ls":"0.009rem","form-description-ls":"0.008rem"},bookingsg:{"heading-size-xxl":"3rem","heading-size-xl":"2.5rem","heading-size-lg":"2rem","heading-size-md":"1.625rem","heading-size-sm":"1.375rem","heading-size-xs":"1.125rem","heading-lh-xxl":"3.5rem","heading-lh-xl":"3rem","heading-lh-lg":"2.5rem","heading-lh-md":"2.25rem","heading-lh-sm":"1.75rem","heading-lh-xs":"1.75rem","heading-ls-xxl":"-0.035rem","heading-ls-xl":"-0.02rem","heading-ls-lg":"-0.02rem","heading-ls-md":"0rem","heading-ls-sm":"0rem","heading-ls-xs":"0rem","weight-light":"300","weight-regular":"400","weight-semibold":"600","weight-bold":"700","font-family":"Plus Jakarta Sans","body-size-baseline":"1.125rem","body-size-md":"1rem","body-size-sm":"0.875rem","body-size-xs":"0.75rem","body-lh-baseline":"1.75rem","body-lh-md":"1.5rem","body-lh-sm":"1.6rem","body-lh-xs":"1.2rem","body-ls-baseline":"0rem","body-ls-md":"0.009rem","body-ls-sm":"0.008rem","body-ls-xs":"0.008rem","form-label-size":"1rem","form-description-size":"0.875rem","form-label-lh":"1.5rem","form-description-lh":"1.625rem","form-label-ls":"0.009rem","form-description-ls":"0.008rem"},mylegacy:{"heading-size-xxl":"3rem","heading-size-xl":"2.5rem","heading-size-lg":"2rem","heading-size-md":"1.625rem","heading-size-sm":"1.375rem","heading-size-xs":"1.125rem","heading-lh-xxl":"3.5rem","heading-lh-xl":"3rem","heading-lh-lg":"2.5rem","heading-lh-md":"2.25rem","heading-lh-sm":"1.75rem","heading-lh-xs":"1.625rem","heading-ls-xxl":"-0.035rem","heading-ls-xl":"-0.02rem","heading-ls-lg":"-0.02rem","heading-ls-md":"0rem","heading-ls-sm":"0rem","heading-ls-xs":"0rem","weight-light":"300","weight-regular":"400","weight-semibold":"600","weight-bold":"700","font-family":"Open Sans","body-size-baseline":"1.125rem","body-size-md":"1rem","body-size-sm":"0.875rem","body-size-xs":"0.75rem","body-lh-baseline":"1.625rem","body-lh-md":"1.5rem","body-lh-sm":"1.625rem","body-lh-xs":"1.25rem","body-ls-baseline":"0rem","body-ls-md":"0.009rem","body-ls-sm":"0.008rem","body-ls-xs":"0.008rem","form-label-size":"1.125rem","form-description-size":"1rem","form-label-lh":"1.5rem","form-description-lh":"1.625rem","form-label-ls":"0rem","form-description-ls":"0.009rem"},pa:{"heading-size-xxl":"2.5rem","heading-size-xl":"2rem","heading-size-lg":"1.75rem","heading-size-md":"1.5rem","heading-size-sm":"1.25rem","heading-size-xs":"1rem","heading-lh-xxl":"3rem","heading-lh-xl":"2.5rem","heading-lh-lg":"2.25rem","heading-lh-md":"2rem","heading-lh-sm":"2rem","heading-lh-xs":"1.75rem","heading-ls-xxl":"-0.032rem","heading-ls-xl":"-0.032rem","heading-ls-lg":"0rem","heading-ls-md":"0rem","heading-ls-sm":"0rem","heading-ls-xs":"0rem","weight-light":"300","weight-regular":"400","weight-semibold":"600","weight-bold":"700","font-family":"Lato","body-size-baseline":"1rem","body-size-md":"0.875rem","body-size-sm":"0.75rem","body-size-xs":"0.625rem","body-lh-baseline":"1.75rem","body-lh-md":"1.5rem","body-lh-sm":"1.25rem","body-lh-xs":"1.25rem","body-ls-baseline":"0rem","body-ls-md":"0.014rem","body-ls-sm":"0.012rem","body-ls-xs":"0.012rem","form-label-size":"1rem","form-description-size":"0.875rem","form-label-lh":"1.5rem","form-description-lh":"1.6rem","form-label-ls":"0.014rem","form-description-ls":"0.012rem"},a11yplayground:{"heading-size-xxl":"3rem","heading-size-xl":"2.5rem","heading-size-lg":"2rem","heading-size-md":"1.625rem","heading-size-sm":"1.375rem","heading-size-xs":"1.125rem","heading-lh-xxl":"3.5rem","heading-lh-xl":"3rem","heading-lh-lg":"2.5rem","heading-lh-md":"2.25rem","heading-lh-sm":"1.75rem","heading-lh-xs":"1.625rem","heading-ls-xxl":"-0.035rem","heading-ls-xl":"-0.02rem","heading-ls-lg":"-0.02rem","heading-ls-md":"0rem","heading-ls-sm":"0rem","heading-ls-xs":"0rem","weight-light":"300","weight-regular":"400","weight-semibold":"600","weight-bold":"700","font-family":"Atkinson Hyperlegible Next","body-size-baseline":"1.125rem","body-size-md":"1rem","body-size-sm":"0.875rem","body-size-xs":"0.75rem","body-lh-baseline":"1.625rem","body-lh-md":"1.5rem","body-lh-sm":"1.625rem","body-lh-xs":"1.25rem","body-ls-baseline":"0rem","body-ls-md":"0.009rem","body-ls-sm":"0.008rem","body-ls-xs":"0.008rem","form-label-size":"1.125rem","form-description-size":"1rem","form-label-lh":"1.5rem","form-description-lh":"1.625rem","form-label-ls":"0rem","form-description-ls":"0.009rem"},supportgowhere:{"heading-size-xxl":"3rem","heading-size-xl":"2.5rem","heading-size-lg":"2rem","heading-size-md":"1.625rem","heading-size-sm":"1.375rem","heading-size-xs":"1.125rem","heading-lh-xxl":"3.5rem","heading-lh-xl":"3rem","heading-lh-lg":"2.5rem","heading-lh-md":"2.25rem","heading-lh-sm":"1.75rem","heading-lh-xs":"1.625rem","heading-ls-xxl":"-0.035rem","heading-ls-xl":"-0.02rem","heading-ls-lg":"-0.02rem","heading-ls-md":"0rem","heading-ls-sm":"0rem","heading-ls-xs":"0rem","weight-light":"300","weight-regular":"400","weight-semibold":"600","weight-bold":"700","font-family":"Libre Franklin","body-size-baseline":"1.125rem","body-size-md":"1rem","body-size-sm":"0.875rem","body-size-xs":"0.75rem","body-lh-baseline":"1.625rem","body-lh-md":"1.5rem","body-lh-sm":"1.625rem","body-lh-xs":"1.25rem","body-ls-baseline":"0rem","body-ls-md":"0.009rem","body-ls-sm":"0.008rem","body-ls-xs":"0.008rem","form-label-size":"1rem","form-description-size":"0.875rem","form-label-lh":"1.5rem","form-description-lh":"1.625rem","form-label-ls":"0.009rem","form-description-ls":"0.008rem"},sgwdigitallobby:{"heading-size-xxl":"3.75rem","heading-size-xl":"3rem","heading-size-lg":"2.5rem","heading-size-md":"2rem","heading-size-sm":"1.625rem","heading-size-xs":"1.375rem","heading-lh-xxl":"4.5rem","heading-lh-xl":"3.5rem","heading-lh-lg":"3rem","heading-lh-md":"2.5rem","heading-lh-sm":"2.25rem","heading-lh-xs":"1.75rem","heading-ls-xxl":"-0.035rem","heading-ls-xl":"-0.035em","heading-ls-lg":"-0.02rem","heading-ls-md":"-0.02rem","heading-ls-sm":"0rem","heading-ls-xs":"0rem","weight-light":"300","weight-regular":"400","weight-semibold":"600","weight-bold":"700","font-family":"Libre Franklin","body-size-baseline":"1.375rem","body-size-md":"1.2rem","body-size-sm":"1.125rem","body-size-xs":"1rem","body-lh-baseline":"1.75rem","body-lh-md":"1.625rem","body-lh-sm":"1.625rem","body-lh-xs":"1.5rem","body-ls-baseline":"0rem","body-ls-md":"0rem","body-ls-sm":"0rem","body-ls-xs":"0.009rem","form-label-size":"1.25rem","form-description-size":"1.125rem","form-label-lh":"1.625rem","form-description-lh":"1.625rem","form-label-ls":"0rem","form-description-ls":"0rem"},imda:{"heading-size-xxl":"3rem","heading-size-xl":"2.5rem","heading-size-lg":"2rem","heading-size-md":"1.625rem","heading-size-sm":"1.375rem","heading-size-xs":"1.125rem","heading-lh-xxl":"3.5rem","heading-lh-xl":"3rem","heading-lh-lg":"2.5rem","heading-lh-md":"2.25rem","heading-lh-sm":"1.75rem","heading-lh-xs":"1.625rem","heading-ls-xxl":"-0.035rem","heading-ls-xl":"-0.02rem","heading-ls-lg":"-0.02rem","heading-ls-md":"0rem","heading-ls-sm":"0rem","heading-ls-xs":"0rem","weight-light":"300","weight-regular":"400","weight-semibold":"600","weight-bold":"700","font-family":"Montserrat","body-size-baseline":"1.125rem","body-size-md":"1rem","body-size-sm":"0.875rem","body-size-xs":"0.75rem","body-lh-baseline":"1.625rem","body-lh-md":"1.5rem","body-lh-sm":"1.625rem","body-lh-xs":"1.25rem","body-ls-baseline":"0rem","body-ls-md":"0.009rem","body-ls-sm":"0.008rem","body-ls-xs":"0.008rem","form-label-size":"1rem","form-description-size":"0.875rem","form-label-lh":"1.5rem","form-description-lh":"1.625rem","form-label-ls":"0.009rem","form-description-ls":"0.008rem"},spf:{"heading-size-xxl":"3.75rem","heading-size-xl":"3rem","heading-size-lg":"2.5rem","heading-size-md":"2rem","heading-size-sm":"1.75rem","heading-size-xs":"1.5rem","heading-lh-xxl":"4.5rem","heading-lh-xl":"3.5rem","heading-lh-lg":"3rem","heading-lh-md":"2.25rem","heading-lh-sm":"2rem","heading-lh-xs":"1.75rem","heading-ls-xxl":"-0.035rem","heading-ls-xl":"-0.02rem","heading-ls-lg":"-0.02rem","heading-ls-md":"0rem","heading-ls-sm":"0rem","heading-ls-xs":"0rem","weight-light":"300","weight-regular":"400","weight-semibold":"600","weight-bold":"700","font-family":"Public Sans","body-size-baseline":"1.2rem","body-size-md":"1.125rem","body-size-sm":"1rem","body-size-xs":"0.875rem","body-lh-baseline":"1.5rem","body-lh-md":"1.5rem","body-lh-sm":"1.5rem","body-lh-xs":"1.125rem","body-ls-baseline":"0rem","body-ls-md":"0.009rem","body-ls-sm":"0.008rem","body-ls-xs":"0.008rem","form-label-size":"1.125rem","form-description-size":"1rem","form-label-lh":"1.5rem","form-description-lh":"1.625rem","form-label-ls":"0.009rem","form-description-ls":"0.008rem"},oneservice:{"heading-size-xxl":"2.5rem","heading-size-xl":"2rem","heading-size-lg":"1.75rem","heading-size-md":"1.375rem","heading-size-sm":"1.125rem","heading-size-xs":"1rem","heading-lh-xxl":"3.5rem","heading-lh-xl":"3rem","heading-lh-lg":"2.625rem","heading-lh-md":"2rem","heading-lh-sm":"1.625rem","heading-lh-xs":"1.5rem","heading-ls-xxl":"0rem","heading-ls-xl":"0rem","heading-ls-lg":"0rem","heading-ls-md":"0rem","heading-ls-sm":"0rem","heading-ls-xs":"0rem","weight-light":"300","weight-regular":"400","weight-semibold":"600","weight-bold":"700","font-family":"Open Sans","body-size-baseline":"1rem","body-size-md":"0.875rem","body-size-sm":"0.75rem","body-size-xs":"0.75rem","body-lh-baseline":"1.5rem","body-lh-md":"1.313rem","body-lh-sm":"1.125rem","body-lh-xs":"1.125rem","body-ls-baseline":"0rem","body-ls-md":"0rem","body-ls-sm":"0rem","body-ls-xs":"0rem","form-label-size":"0.875rem","form-description-size":"0.875rem","form-label-lh":"1.313rem","form-description-lh":"1.313rem","form-label-ls":"0rem","form-description-ls":"0rem"}},defaultValue:"default"},Nn=e=>r=>{var t;const n=r.theme,o=jt(Wn,null==n?void 0:n.fontScheme);return(null===(t=null==n?void 0:n.overrides)||void 0===t?void 0:t.fontSpec)?Lt(o,e,n.overrides.fontSpec):o[e]},Pn={"heading-size-xxl":Nn("heading-size-xxl"),"heading-size-xl":Nn("heading-size-xl"),"heading-size-lg":Nn("heading-size-lg"),"heading-size-md":Nn("heading-size-md"),"heading-size-sm":Nn("heading-size-sm"),"heading-size-xs":Nn("heading-size-xs"),"heading-lh-xxl":Nn("heading-lh-xxl"),"heading-lh-xl":Nn("heading-lh-xl"),"heading-lh-lg":Nn("heading-lh-lg"),"heading-lh-md":Nn("heading-lh-md"),"heading-lh-sm":Nn("heading-lh-sm"),"heading-lh-xs":Nn("heading-lh-xs"),"heading-ls-xxl":Nn("heading-ls-xxl"),"heading-ls-xl":Nn("heading-ls-xl"),"heading-ls-lg":Nn("heading-ls-lg"),"heading-ls-md":Nn("heading-ls-md"),"heading-ls-sm":Nn("heading-ls-sm"),"heading-ls-xs":Nn("heading-ls-xs"),"weight-light":Nn("weight-light"),"weight-regular":Nn("weight-regular"),"weight-semibold":Nn("weight-semibold"),"weight-bold":Nn("weight-bold"),"font-family":Nn("font-family"),"body-size-baseline":Nn("body-size-baseline"),"body-size-md":Nn("body-size-md"),"body-size-sm":Nn("body-size-sm"),"body-size-xs":Nn("body-size-xs"),"body-lh-baseline":Nn("body-lh-baseline"),"body-lh-md":Nn("body-lh-md"),"body-lh-sm":Nn("body-lh-sm"),"body-lh-xs":Nn("body-lh-xs"),"body-ls-baseline":Nn("body-ls-baseline"),"body-ls-md":Nn("body-ls-md"),"body-ls-sm":Nn("body-ls-sm"),"body-ls-xs":Nn("body-ls-xs"),"form-label-size":Nn("form-label-size"),"form-description-size":Nn("form-description-size"),"form-label-lh":Nn("form-label-lh"),"form-description-lh":Nn("form-description-lh"),"form-label-ls":Nn("form-label-ls"),"form-description-ls":Nn("form-description-ls")},Yn=(e,r,t,n,o)=>{const{disableLigatures:i}=o||{};return C`
        font-family: ${Nn("font-family")};
        font-size: ${Nn(e)};
        font-weight: ${Nn(r)};
        line-height: ${Nn(t)};
        letter-spacing: ${Nn(n)};

        font-variant: ${i?"no-common-ligatures":"normal"};
    `},Vn=(e={})=>({"heading-xxl-light":Yn("heading-size-xxl","weight-light","heading-lh-xxl","heading-ls-xxl",e),"heading-xxl-regular":Yn("heading-size-xxl","weight-regular","heading-lh-xxl","heading-ls-xxl",e),"heading-xxl-semibold":Yn("heading-size-xxl","weight-semibold","heading-lh-xxl","heading-ls-xxl",e),"heading-xxl-bold":Yn("heading-size-xxl","weight-bold","heading-lh-xxl","heading-ls-xxl",e),"heading-xl-light":Yn("heading-size-xl","weight-light","heading-lh-xl","heading-ls-xl",e),"heading-xl-regular":Yn("heading-size-xl","weight-regular","heading-lh-xl","heading-ls-xl",e),"heading-xl-semibold":Yn("heading-size-xl","weight-semibold","heading-lh-xl","heading-ls-xl",e),"heading-xl-bold":Yn("heading-size-xl","weight-bold","heading-lh-xl","heading-ls-xl",e),"heading-lg-light":Yn("heading-size-lg","weight-light","heading-lh-lg","heading-ls-lg",e),"heading-lg-regular":Yn("heading-size-lg","weight-regular","heading-lh-lg","heading-ls-lg",e),"heading-lg-semibold":Yn("heading-size-lg","weight-semibold","heading-lh-lg","heading-ls-lg",e),"heading-lg-bold":Yn("heading-size-lg","weight-bold","heading-lh-lg","heading-ls-lg",e),"heading-md-light":Yn("heading-size-md","weight-light","heading-lh-md","heading-ls-md",e),"heading-md-regular":Yn("heading-size-md","weight-regular","heading-lh-md","heading-ls-md",e),"heading-md-semibold":Yn("heading-size-md","weight-semibold","heading-lh-md","heading-ls-md",e),"heading-md-bold":Yn("heading-size-md","weight-bold","heading-lh-md","heading-ls-md",e),"heading-sm-light":Yn("heading-size-sm","weight-light","heading-lh-sm","heading-ls-sm",e),"heading-sm-regular":Yn("heading-size-sm","weight-regular","heading-lh-sm","heading-ls-sm",e),"heading-sm-semibold":Yn("heading-size-sm","weight-semibold","heading-lh-sm","heading-ls-sm",e),"heading-sm-bold":Yn("heading-size-sm","weight-bold","heading-lh-sm","heading-ls-sm",e),"heading-xs-light":Yn("heading-size-xs","weight-light","heading-lh-xs","heading-ls-xs",e),"heading-xs-regular":Yn("heading-size-xs","weight-regular","heading-lh-xs","heading-ls-xs",e),"heading-xs-semibold":Yn("heading-size-xs","weight-semibold","heading-lh-xs","heading-ls-xs",e),"heading-xs-bold":Yn("heading-size-xs","weight-bold","heading-lh-xs","heading-ls-xs",e),"body-baseline-light":Yn("body-size-baseline","weight-light","body-lh-baseline","body-ls-baseline",e),"body-baseline-regular":Yn("body-size-baseline","weight-regular","body-lh-baseline","body-ls-baseline",e),"body-baseline-semibold":Yn("body-size-baseline","weight-semibold","body-lh-baseline","body-ls-baseline",e),"body-baseline-bold":Yn("body-size-baseline","weight-bold","body-lh-baseline","body-ls-baseline",e),"body-md-light":Yn("body-size-md","weight-light","body-lh-md","body-ls-md",e),"body-md-regular":Yn("body-size-md","weight-regular","body-lh-md","body-ls-md",e),"body-md-semibold":Yn("body-size-md","weight-semibold","body-lh-md","body-ls-md",e),"body-md-bold":Yn("body-size-md","weight-bold","body-lh-md","body-ls-md",e),"body-sm-light":Yn("body-size-sm","weight-light","body-lh-sm","body-ls-sm",e),"body-sm-regular":Yn("body-size-sm","weight-regular","body-lh-sm","body-ls-sm",e),"body-sm-semibold":Yn("body-size-sm","weight-semibold","body-lh-sm","body-ls-sm",e),"body-sm-bold":Yn("body-size-sm","weight-bold","body-lh-sm","body-ls-sm",e),"body-xs-light":Yn("body-size-xs","weight-light","body-lh-xs","body-ls-xs",e),"body-xs-regular":Yn("body-size-xs","weight-regular","body-lh-xs","body-ls-xs",e),"body-xs-semibold":Yn("body-size-xs","weight-semibold","body-lh-xs","body-ls-xs",e),"body-xs-bold":Yn("body-size-xs","weight-bold","body-lh-xs","body-ls-xs",e),"form-label":Yn("form-label-size","weight-semibold","form-label-lh","form-label-ls",e),"form-description":Yn("form-description-size","weight-regular","form-description-lh","form-description-ls",e)}),Un=Vn({disableLigatures:!0}),Zn=Vn(),Gn=Vn({disableLigatures:!0}),qn=Vn({disableLigatures:!0}),Xn=Vn({disableLigatures:!0}),Kn={collections:{default:Zn,bookingsg:Un,mylegacy:Zn,pa:Gn,a11yplayground:qn,supportgowhere:Xn,sgwdigitallobby:Xn,imda:Vn({disableLigatures:!0}),spf:Vn({disableLigatures:!0}),oneservice:Vn()},defaultValue:"default"},Jn=e=>r=>{var t;const n=r.theme,o=jt(Kn,null==n?void 0:n.fontScheme),i=(null===(t=null==n?void 0:n.overrides)||void 0===t?void 0:t.font)?Lt(o,e,n.overrides.font):o[e];return"function"==typeof i?i(r):i},Qn={"heading-xxl-light":Jn("heading-xxl-light"),"heading-xxl-regular":Jn("heading-xxl-regular"),"heading-xxl-semibold":Jn("heading-xxl-semibold"),"heading-xxl-bold":Jn("heading-xxl-bold"),"heading-xl-light":Jn("heading-xl-light"),"heading-xl-regular":Jn("heading-xl-regular"),"heading-xl-semibold":Jn("heading-xl-semibold"),"heading-xl-bold":Jn("heading-xl-bold"),"heading-lg-light":Jn("heading-lg-light"),"heading-lg-regular":Jn("heading-lg-regular"),"heading-lg-semibold":Jn("heading-lg-semibold"),"heading-lg-bold":Jn("heading-lg-bold"),"heading-md-light":Jn("heading-md-light"),"heading-md-regular":Jn("heading-md-regular"),"heading-md-semibold":Jn("heading-md-semibold"),"heading-md-bold":Jn("heading-md-bold"),"heading-sm-light":Jn("heading-sm-light"),"heading-sm-regular":Jn("heading-sm-regular"),"heading-sm-semibold":Jn("heading-sm-semibold"),"heading-sm-bold":Jn("heading-sm-bold"),"heading-xs-light":Jn("heading-xs-light"),"heading-xs-regular":Jn("heading-xs-regular"),"heading-xs-semibold":Jn("heading-xs-semibold"),"heading-xs-bold":Jn("heading-xs-bold"),"body-baseline-light":Jn("body-baseline-light"),"body-baseline-regular":Jn("body-baseline-regular"),"body-baseline-semibold":Jn("body-baseline-semibold"),"body-baseline-bold":Jn("body-baseline-bold"),"body-md-light":Jn("body-md-light"),"body-md-regular":Jn("body-md-regular"),"body-md-semibold":Jn("body-md-semibold"),"body-md-bold":Jn("body-md-bold"),"body-sm-light":Jn("body-sm-light"),"body-sm-regular":Jn("body-sm-regular"),"body-sm-semibold":Jn("body-sm-semibold"),"body-sm-bold":Jn("body-sm-bold"),"body-xs-light":Jn("body-xs-light"),"body-xs-regular":Jn("body-xs-regular"),"body-xs-semibold":Jn("body-xs-semibold"),"body-xs-bold":Jn("body-xs-bold"),"form-label":Jn("form-label"),"form-description":Jn("form-description")},eo={collections:{default:{"duration-150":"150ms","duration-250":"250ms","duration-350":"350ms","duration-500":"500ms","duration-800":"800ms","duration-1000":"1000ms","ease-default":"cubic-bezier(0.45, 0.05, 0.55, 0.95)","ease-standard":"cubic-bezier(0.86, 0, 0.07, 1)","ease-entrance":"cubic-bezier(0.18, 0.13, 0, 1)","ease-exit":"cubic-bezier(1, 0, 0.8, 0.85)"}},defaultValue:"default"},ro=e=>r=>{var t;const n=r.theme,o=jt(eo,null==n?void 0:n.motionScheme);return(null===(t=null==n?void 0:n.overrides)||void 0===t?void 0:t.motion)?Lt(o,e,n.overrides.motion):o[e]},to={"duration-150":ro("duration-150"),"duration-250":ro("duration-250"),"duration-350":ro("duration-350"),"duration-500":ro("duration-500"),"duration-800":ro("duration-800"),"duration-1000":ro("duration-1000"),"ease-default":ro("ease-default"),"ease-standard":ro("ease-standard"),"ease-entrance":ro("ease-entrance"),"ease-exit":ro("ease-exit")},no={collections:{default:{"spacing-0":0,"spacing-4":4,"spacing-8":8,"spacing-12":12,"spacing-16":16,"spacing-20":20,"spacing-24":24,"spacing-32":32,"spacing-40":40,"spacing-48":48,"spacing-64":64,"spacing-72":72,"layout-xs":8,"layout-sm":16,"layout-md":24,"layout-lg":32,"layout-xl":48,"layout-xxl":64,"layout-xxxl":128}},defaultValue:"default"},oo=e=>r=>{var t;const n=r.theme,o=jt(no,null==n?void 0:n.spacingScheme);return(null===(t=null==n?void 0:n.overrides)||void 0===t?void 0:t.spacing)?`${Lt(o,e,n.overrides.spacing)}px`:`${o[e]}px`},io={"spacing-0":oo("spacing-0"),"spacing-4":oo("spacing-4"),"spacing-8":oo("spacing-8"),"spacing-12":oo("spacing-12"),"spacing-16":oo("spacing-16"),"spacing-20":oo("spacing-20"),"spacing-24":oo("spacing-24"),"spacing-32":oo("spacing-32"),"spacing-40":oo("spacing-40"),"spacing-48":oo("spacing-48"),"spacing-64":oo("spacing-64"),"spacing-72":oo("spacing-72"),"layout-xs":oo("layout-xs"),"layout-sm":oo("layout-sm"),"layout-md":oo("layout-md"),"layout-lg":oo("layout-lg"),"layout-xl":oo("layout-xl"),"layout-xxl":oo("layout-xxl"),"layout-xxxl":oo("layout-xxxl")},ao=(e,r)=>Object.assign(Object.assign({},e),{colourMode:r}),so=Object.assign(Object.assign({},mn),{Primitive:on}),lo=Object.assign(Object.assign({},Qn),{Spec:Pn}),co=to,uo=Object.assign(Object.assign({},Nt),{Util:yn}),go=io,ho=Sn,mo=wn,bo=Fn,fo={colourScheme:"lifesg",fontScheme:"default",motionScheme:"default",borderScheme:"default",spacingScheme:"default",radiusScheme:"default",shadowScheme:"default",breakpointScheme:"default",resourceScheme:"lifesg",componentScheme:"lifesg",_v2:{colorScheme:"base",textStyleScheme:"base",designTokenScheme:"base",resourceScheme:"base"}},po={colourScheme:"bookingsg",fontScheme:"bookingsg",motionScheme:"default",borderScheme:"default",spacingScheme:"default",radiusScheme:"default",shadowScheme:"default",breakpointScheme:"default",resourceScheme:"bookingsg",_v2:{colorScheme:"bookingsg",textStyleScheme:"base",designTokenScheme:"base",resourceScheme:"bookingsg"}},yo={colourScheme:"ccube",fontScheme:"default",motionScheme:"default",borderScheme:"default",spacingScheme:"default",radiusScheme:"default",shadowScheme:"default",breakpointScheme:"default",resourceScheme:"ccube",_v2:{colorScheme:"ccube",textStyleScheme:"base",designTokenScheme:"base",resourceScheme:"ccube"}},vo={colourScheme:"mylegacy",fontScheme:"mylegacy",motionScheme:"default",borderScheme:"default",spacingScheme:"default",radiusScheme:"default",shadowScheme:"default",breakpointScheme:"default",resourceScheme:"mylegacy",_v2:{colorScheme:"mylegacy",textStyleScheme:"base",designTokenScheme:"base",resourceScheme:"mylegacy"}},xo={colourScheme:"rbs",fontScheme:"default",motionScheme:"default",borderScheme:"default",spacingScheme:"default",radiusScheme:"default",shadowScheme:"default",breakpointScheme:"default",resourceScheme:"rbs",_v2:{colorScheme:"rbs",textStyleScheme:"base",designTokenScheme:"rbs",resourceScheme:"rbs"}},wo={colourScheme:"oneservice",fontScheme:"oneservice",motionScheme:"default",borderScheme:"default",spacingScheme:"default",radiusScheme:"default",shadowScheme:"default",breakpointScheme:"default",resourceScheme:"oneservice"},$o={colourScheme:"pa",fontScheme:"pa",motionScheme:"default",borderScheme:"default",spacingScheme:"default",radiusScheme:"default",shadowScheme:"default",breakpointScheme:"default",resourceScheme:"pa",componentScheme:"pa"},Fo={colourScheme:"a11yplayground",fontScheme:"a11yplayground",motionScheme:"default",borderScheme:"default",spacingScheme:"default",radiusScheme:"default",shadowScheme:"default",breakpointScheme:"default",resourceScheme:"a11yplayground",componentScheme:"a11yplayground"},Co={colourScheme:"supportgowhere",fontScheme:"supportgowhere",motionScheme:"default",borderScheme:"default",spacingScheme:"default",radiusScheme:"default",shadowScheme:"default",breakpointScheme:"default",resourceScheme:"supportgowhere",componentScheme:"default"},Eo={colourScheme:"supportgowhere",fontScheme:"sgwdigitallobby",motionScheme:"default",borderScheme:"default",spacingScheme:"default",radiusScheme:"default",shadowScheme:"default",breakpointScheme:"default",resourceScheme:"supportgowhere",componentScheme:"default"},So={colourScheme:"imda",fontScheme:"imda",motionScheme:"default",borderScheme:"default",spacingScheme:"default",radiusScheme:"default",shadowScheme:"default",breakpointScheme:"default",resourceScheme:"imda",componentScheme:"default"},Do={colourScheme:"spf",fontScheme:"spf",motionScheme:"default",borderScheme:"default",spacingScheme:"default",radiusScheme:"spf",shadowScheme:"default",breakpointScheme:"default",resourceScheme:"spf",componentScheme:"spf"};Object.assign(Object.assign({},fo),{light:ao(fo,"light"),dark:ao(fo,"dark")}),Object.assign(Object.assign({},po),{light:ao(po,"light"),dark:ao(po,"dark")}),Object.assign(Object.assign({},yo),{light:ao(yo,"light"),dark:ao(yo,"dark")}),Object.assign(Object.assign({},vo),{light:ao(vo,"light"),dark:ao(vo,"dark")}),Object.assign(Object.assign({},xo),{light:ao(xo,"light"),dark:ao(xo,"dark")}),Object.assign(Object.assign({},wo),{light:ao(wo,"light"),dark:ao(wo,"dark")}),Object.assign(Object.assign({},$o),{light:ao($o,"light"),dark:ao($o,"dark")}),Object.assign(Object.assign({},Fo),{light:ao(Fo,"light"),dark:ao(Fo,"dark")}),Object.assign(Object.assign({},Co),{light:ao(Co,"light"),dark:ao(Co,"dark")}),Object.assign(Object.assign({},Eo),{light:ao(Eo,"light"),dark:ao(Eo,"dark")}),Object.assign(Object.assign({},So),{light:ao(So,"light"),dark:ao(So,"dark")}),Object.assign(Object.assign({},Do),{light:ao(Do,"light"),dark:ao(Do,"dark")});const ko=F.div`
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
                        100% - ${lo.Spec["body-size-baseline"]} -
                            ${go["spacing-16"]}
                    );
                    flex: unset;
                }

                [data-id="range-container-elem2-container"] {
                    margin-top: ${go["spacing-8"]};
                }
            `}}
`,Bo=F.div`
    width: 100%; // Force next flex item to break to next line
`,To=F.div`
    display: flex;
    flex: 1;
    align-items: center;
`,zo=F(w)`
    color: ${so.icon};
    width: ${lo.Spec["body-size-baseline"]};
    height: ${lo.Spec["body-size-baseline"]};
    flex-shrink: 0;
    margin: 0 ${go["spacing-8"]};
    align-self: center;
`,Io=F.div`
    position: absolute;
    background: ${e=>e.$error?so["border-error-focus-strong"]:so["border-focus-strong"]};
    height: 2px;
    // half - half padding - half icon width
    width: calc(
        50% - ${go["spacing-8"]} - (${lo.Spec["body-size-baseline"]} / 2)
    );
    transition: left ${co["duration-350"]} ${co["ease-standard"]},
        opacity ${co["duration-350"]} ${co["ease-standard"]};
    left: 0;
    bottom: 0;

    ${e=>{switch(e.$position){case"start":return C`
                    opacity: 1;
                `;case"end":return C`
                    left: calc(50% + ${go["spacing-16"]});
                    opacity: 1;
                `;case"none":return C`
                    opacity: 0;
                `}}}

    ${e=>{if(e.$wrap)return C`
                display: none;
            `}}
`,Ao=({children:t,currentActive:n,error:o,className:i,wrap:a})=>{const[s,l]=t;return e(ko,{className:i,$wrap:a,children:[r(To,{"data-id":"range-container-elem1-container",children:s}),r(zo,{"aria-hidden":"true"}),a&&r(Bo,{}),r(To,{"data-id":"range-container-elem2-container",children:l}),r(Io,{"data-id":"range-container-indicator",$position:n,$error:o,$wrap:a})]})},Oo=C`
    outline-offset: -1px;
    outline: ${uo["width-020"]} ${uo.solid} ${so["border-focus"]};
`,Mo=C`
    outline-color: ${so["border-focus"]};
`,Ho=C`
    outline-color: ${so["border-disabled"]};
`,Ro=C`
    outline-color: ${so["border-error-focus"]};
`,Lo=C`
    outline: none;
`,jo=F.div`
    border: ${uo["width-010"]} ${uo.solid} ${so.border};
    border-radius: ${ho.sm};
    background: ${so.bg};

    &:focus-within {
        ${Oo}
    }
    ${e=>e.$focused&&!e.$noBorder&&Oo}

    ${e=>e.$readOnly?C`
                border-color: transparent;
                padding: 0;
                background: transparent !important;

                &:focus-within {
                    ${Mo}
                }
                ${e.$focused&&Mo}
            `:e.$disabled?C`
                background: ${so["bg-disabled"]};
                cursor: not-allowed;

                &:focus-within {
                    ${Ho}
                }
                ${e.$focused&&Ho}
            `:e.$error?C`
                border-color: ${so["border-error"]};

                &:focus-within {
                    ${Ro}
                }
                ${e.$focused&&Ro}
            `:void 0}
    ${e=>{if(e.$noBorder)return C`
                border-color: transparent;
                background: transparent;
                &:focus-within {
                    ${Lo}
                }
            `}}
`,_o=F(jo)`
    display: flex;
    align-items: center;
    position: relative;
    height: max-content;
    width: 100%;
    padding: 0 ${go["spacing-16"]} 0
        ${e=>e.$readOnly?"0":go["spacing-16"]};
    flex-direction: ${e=>"right"===e.$position?"row-reverse":"row"};
`,Wo=F.input`
    ${e=>"small"===e.$variant?lo["body-md-regular"]:lo["body-baseline-regular"]}
    color: ${so.text};
    display: block;
    background: transparent;
    border: none;
    outline: none;
    box-shadow: none;
    padding: 0;
    margin: 0;

    &:disabled {
        color: ${so["text-subtler"]};

        &:hover {
            cursor: not-allowed;
        }
    }

    &::placeholder,
    &::-webkit-input-placeholder {
        color: ${so["text-subtler"]};
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
`,No=F.button`
    background: transparent;
    border: none;
    outline: none;

    &:focus,
    &:active {
        outline: none;
    }

    &:focus-visible {
        outline: ${uo["width-010"]} ${uo.solid}
            ${so["border-focus"]};
        border-radius: ${ho.sm};
    }
`,Po=F.div`
    position: relative;
`,Yo=F(_o)`
    height: 3rem;
    gap: ${go["spacing-8"]};
`,Vo=F(Wo)`
    display: block;
    width: 100%;
    flex: 1;
`;var Uo={exports:{}};Uo.exports=function(){var e=1e3,r=6e4,t=36e5,n="millisecond",o="second",i="minute",a="hour",s="day",l="week",d="month",c="quarter",u="year",g="date",h="Invalid Date",m=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,b=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,f={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(e){var r=["th","st","nd","rd"],t=e%100;return"["+e+(r[(t-20)%10]||r[t]||r[0])+"]"}},p=function(e,r,t){var n=String(e);return!n||n.length>=r?e:""+Array(r+1-n.length).join(t)+e},y={s:p,z:function(e){var r=-e.utcOffset(),t=Math.abs(r),n=Math.floor(t/60),o=t%60;return(r<=0?"+":"-")+p(n,2,"0")+":"+p(o,2,"0")},m:function e(r,t){if(r.date()<t.date())return-e(t,r);var n=12*(t.year()-r.year())+(t.month()-r.month()),o=r.clone().add(n,d),i=t-o<0,a=r.clone().add(n+(i?-1:1),d);return+(-(n+(t-o)/(i?o-a:a-o))||0)},a:function(e){return e<0?Math.ceil(e)||0:Math.floor(e)},p:function(e){return{M:d,y:u,w:l,d:s,D:g,h:a,m:i,s:o,ms:n,Q:c}[e]||String(e||"").toLowerCase().replace(/s$/,"")},u:function(e){return void 0===e}},v="en",x={};x[v]=f;var w="$isDayjsObject",$=function(e){return e instanceof S||!(!e||!e[w])},F=function e(r,t,n){var o;if(!r)return v;if("string"==typeof r){var i=r.toLowerCase();x[i]&&(o=i),t&&(x[i]=t,o=i);var a=r.split("-");if(!o&&a.length>1)return e(a[0])}else{var s=r.name;x[s]=r,o=s}return!n&&o&&(v=o),o||!n&&v},C=function(e,r){if($(e))return e.clone();var t="object"==typeof r?r:{};return t.date=e,t.args=arguments,new S(t)},E=y;E.l=F,E.i=$,E.w=function(e,r){return C(e,{locale:r.$L,utc:r.$u,x:r.$x,$offset:r.$offset})};var S=function(){function f(e){this.$L=F(e.locale,null,!0),this.parse(e),this.$x=this.$x||e.x||{},this[w]=!0}var p=f.prototype;return p.parse=function(e){this.$d=function(e){var r=e.date,t=e.utc;if(null===r)return new Date(NaN);if(E.u(r))return new Date;if(r instanceof Date)return new Date(r);if("string"==typeof r&&!/Z$/i.test(r)){var n=r.match(m);if(n){var o=n[2]-1||0,i=(n[7]||"0").substring(0,3);return t?new Date(Date.UTC(n[1],o,n[3]||1,n[4]||0,n[5]||0,n[6]||0,i)):new Date(n[1],o,n[3]||1,n[4]||0,n[5]||0,n[6]||0,i)}}return new Date(r)}(e),this.init()},p.init=function(){var e=this.$d;this.$y=e.getFullYear(),this.$M=e.getMonth(),this.$D=e.getDate(),this.$W=e.getDay(),this.$H=e.getHours(),this.$m=e.getMinutes(),this.$s=e.getSeconds(),this.$ms=e.getMilliseconds()},p.$utils=function(){return E},p.isValid=function(){return!(this.$d.toString()===h)},p.isSame=function(e,r){var t=C(e);return this.startOf(r)<=t&&t<=this.endOf(r)},p.isAfter=function(e,r){return C(e)<this.startOf(r)},p.isBefore=function(e,r){return this.endOf(r)<C(e)},p.$g=function(e,r,t){return E.u(e)?this[r]:this.set(t,e)},p.unix=function(){return Math.floor(this.valueOf()/1e3)},p.valueOf=function(){return this.$d.getTime()},p.startOf=function(e,r){var t=this,n=!!E.u(r)||r,c=E.p(e),h=function(e,r){var o=E.w(t.$u?Date.UTC(t.$y,r,e):new Date(t.$y,r,e),t);return n?o:o.endOf(s)},m=function(e,r){return E.w(t.toDate()[e].apply(t.toDate("s"),(n?[0,0,0,0]:[23,59,59,999]).slice(r)),t)},b=this.$W,f=this.$M,p=this.$D,y="set"+(this.$u?"UTC":"");switch(c){case u:return n?h(1,0):h(31,11);case d:return n?h(1,f):h(0,f+1);case l:var v=this.$locale().weekStart||0,x=(b<v?b+7:b)-v;return h(n?p-x:p+(6-x),f);case s:case g:return m(y+"Hours",0);case a:return m(y+"Minutes",1);case i:return m(y+"Seconds",2);case o:return m(y+"Milliseconds",3);default:return this.clone()}},p.endOf=function(e){return this.startOf(e,!1)},p.$set=function(e,r){var t,l=E.p(e),c="set"+(this.$u?"UTC":""),h=(t={},t[s]=c+"Date",t[g]=c+"Date",t[d]=c+"Month",t[u]=c+"FullYear",t[a]=c+"Hours",t[i]=c+"Minutes",t[o]=c+"Seconds",t[n]=c+"Milliseconds",t)[l],m=l===s?this.$D+(r-this.$W):r;if(l===d||l===u){var b=this.clone().set(g,1);b.$d[h](m),b.init(),this.$d=b.set(g,Math.min(this.$D,b.daysInMonth())).$d}else h&&this.$d[h](m);return this.init(),this},p.set=function(e,r){return this.clone().$set(e,r)},p.get=function(e){return this[E.p(e)]()},p.add=function(n,c){var g,h=this;n=Number(n);var m=E.p(c),b=function(e){var r=C(h);return E.w(r.date(r.date()+Math.round(e*n)),h)};if(m===d)return this.set(d,this.$M+n);if(m===u)return this.set(u,this.$y+n);if(m===s)return b(1);if(m===l)return b(7);var f=(g={},g[i]=r,g[a]=t,g[o]=e,g)[m]||1,p=this.$d.getTime()+n*f;return E.w(p,this)},p.subtract=function(e,r){return this.add(-1*e,r)},p.format=function(e){var r=this,t=this.$locale();if(!this.isValid())return t.invalidDate||h;var n=e||"YYYY-MM-DDTHH:mm:ssZ",o=E.z(this),i=this.$H,a=this.$m,s=this.$M,l=t.weekdays,d=t.months,c=t.meridiem,u=function(e,t,o,i){return e&&(e[t]||e(r,n))||o[t].slice(0,i)},g=function(e){return E.s(i%12||12,e,"0")},m=c||function(e,r,t){var n=e<12?"AM":"PM";return t?n.toLowerCase():n};return n.replace(b,(function(e,n){return n||function(e){switch(e){case"YY":return String(r.$y).slice(-2);case"YYYY":return E.s(r.$y,4,"0");case"M":return s+1;case"MM":return E.s(s+1,2,"0");case"MMM":return u(t.monthsShort,s,d,3);case"MMMM":return u(d,s);case"D":return r.$D;case"DD":return E.s(r.$D,2,"0");case"d":return String(r.$W);case"dd":return u(t.weekdaysMin,r.$W,l,2);case"ddd":return u(t.weekdaysShort,r.$W,l,3);case"dddd":return l[r.$W];case"H":return String(i);case"HH":return E.s(i,2,"0");case"h":return g(1);case"hh":return g(2);case"a":return m(i,a,!0);case"A":return m(i,a,!1);case"m":return String(a);case"mm":return E.s(a,2,"0");case"s":return String(r.$s);case"ss":return E.s(r.$s,2,"0");case"SSS":return E.s(r.$ms,3,"0");case"Z":return o}return null}(e)||o.replace(":","")}))},p.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},p.diff=function(n,g,h){var m,b=this,f=E.p(g),p=C(n),y=(p.utcOffset()-this.utcOffset())*r,v=this-p,x=function(){return E.m(b,p)};switch(f){case u:m=x()/12;break;case d:m=x();break;case c:m=x()/3;break;case l:m=(v-y)/6048e5;break;case s:m=(v-y)/864e5;break;case a:m=v/t;break;case i:m=v/r;break;case o:m=v/e;break;default:m=v}return h?m:E.a(m)},p.daysInMonth=function(){return this.endOf(d).$D},p.$locale=function(){return x[this.$L]},p.locale=function(e,r){if(!e)return this.$L;var t=this.clone(),n=F(e,r,!0);return n&&(t.$L=n),t},p.clone=function(){return E.w(this.$d,this)},p.toDate=function(){return new Date(this.valueOf())},p.toJSON=function(){return this.isValid()?this.toISOString():null},p.toISOString=function(){return this.$d.toISOString()},p.toString=function(){return this.$d.toUTCString()},f}(),D=S.prototype;return C.prototype=D,[["$ms",n],["$s",o],["$m",i],["$H",a],["$W",s],["$M",d],["$y",u],["$D",g]].forEach((function(e){D[e[1]]=function(r){return this.$g(r,e[0],e[1])}})),C.extend=function(e,r){return e.$i||(e(r,S,C),e.$i=!0),C},C.locale=F,C.isDayjs=$,C.unix=function(e){return C(1e3*e)},C.en=x[v],C.Ls=x,C.p={},C}();var Zo,Go,qo,Xo=le(Uo.exports);!function(e){e.transformWithSpaces=(e,r)=>{const t="(.{"+r+"})";return e.replace(/[^\dA-Z]/gi,"").replace(new RegExp(t,"g"),"$1 ").trim()},e.padValue=(e,r)=>{if("0"===e)return r?e:e.padStart(2,"0");if(""===e)return e;return parseInt(e).toString().padStart(2,"0")},e.shouldTruncateToTwoLines=(e,r)=>{const t=Math.floor(r/9);return e.length>=2*t||1===e.split(" ").length&&e.length>t},e.truncateOneLine=(e,r,t,n,o=8)=>{let i=0;r>t&&(i=Math.floor((r-t)/o));const a=n+i;if(a<e.length){const r=Math.floor(a/2);return e.substring(0,r)+" ... "+e.substring(e.length-r,e.length)}return e},e.truncateTwoLines=(e,r,t,n=1.2)=>{const o=Math.floor(2*r/(.6*t))*(2/n);if(e.length<=o)return e;const i=Math.floor(.6*o),a=Math.floor(.2*o);return`${e.substring(0,i)}...${e.substring(e.length-a)}`},e.getTextWidth=(r,t)=>{if("undefined"==typeof document)return 0;const n=(e.getTextWidth.canvas||(e.getTextWidth.canvas=document.createElement("canvas"))).getContext("2d");n.font=t;return n.measureText(r).width},e.maskValue=(e,t)=>{if(!e)return e;const{maskRange:n,unmaskRange:o,maskChar:i="•",maskRegex:a,maskTransformer:s}=t;if(s)return s(e);if(a)return e.replace(a,i);if(n){const{startIndex:t,endIndex:o}=r(n[0],n[1]);return e.substring(0,t)+i.repeat(e.substring(t,o+1).length)+e.substring(o+1)}if(o){const{startIndex:t,endIndex:n}=r(o[0],o[1]);return i.repeat(e.substring(0,t).length)+e.substring(t,n+1)+i.repeat(e.substring(n+1).length)}return e};const r=(e,r)=>e<r?{startIndex:e,endIndex:r}:{startIndex:r,endIndex:e},t=new Intl.PluralRules("en",{type:"ordinal"}),n=new Map([["one","st"],["two","nd"],["few","rd"],["other","th"]]);e.formatOrdinal=e=>{const r=t.select(e);return`${e}${n.get(r)}`},e.getMaskedDescription=(e,r,t)=>{if(!e||"masked"!==r||!t)return"";const[n,o]=t,i=n>0,a=o<e.length-1,s=i?e.substring(0,n):"",l=a?e.substring(o+1):"";return i&&a?`Starting with ${s} and ending with ${l}`:i?`Starting with ${s}`:a?`Ending with ${l}`:""}}(Zo||(Zo={})),function(e){e.AM="AM",e.PM="PM"}(Go||(Go={})),function(e){e.roundToNearestInterval=(e,r,t)=>{const[n,o]=e.split(":"),i=parseInt(n,10),a=parseInt(o,10);if(isNaN(i)||isNaN(a)||a<0||a>=60)throw new Error("Invalid time format");const s=60*i+a,l=s%r,d=0===l?s:t?s+(r-l):s-l,c=d%60;return`${Math.floor(d/60).toString().padStart(2,"0")}:${c.toString().padStart(2,"0")}`},e.generateHourlyIntervals=(e,r,t="ha")=>{const n="HH:mm";let o=Xo(e,n),i=Xo(r,n);o.isSame(i)&&(i=i.add(1,"day"));const a=[];for(;o.isBefore(i);)a.push(o.format(t)),o=o.add(1,"hour");return a},e.getTimeValues=(e,r)=>{const t={hour:"",minute:"",period:Go.AM};if(!r)return t;try{if("24hr"===e){const n=ei(r,e);t.minute=Zo.padValue(n.minute);const o=parseInt(n.hour);0===Math.floor(o/12)?(t.period=Go.AM,t.hour=0===o?"12":Zo.padValue(o.toString())):(t.period=Go.PM,t.hour=12===o?o.toString():Zo.padValue((o-12).toString()))}else{const{hour:n,minute:o,period:i=""}=ei(r,e);t.hour=Zo.padValue(n),t.minute=Zo.padValue(o),t.period="am"===i.toLowerCase()?Go.AM:Go.PM}return t}catch(e){return t}},e.updateMinutes=(e,r)=>{const t=parseInt(e);if(isNaN(t))return"add"===r?Zo.padValue("0"):"55";const n=Math.floor(t/5),o=(("add"===r?n+1:t%5==0?n-1:n)%12+12)%12;return Zo.padValue((5*o).toString())},e.updateHours=(e,r)=>{const t=parseInt(e);if(isNaN(t))return"add"===r?Zo.padValue("1"):"12";const n="add"===r?t+1:t-1;return n<=12&&n>0?Zo.padValue(n.toString()):13===n?Zo.padValue("1"):"12"},e.convertTo24HourFormat=e=>{const r=parseInt(e.hour);let t;return t=e.period===Go.PM?12===r?r.toString():(r+12).toString():12===r?"00":e.hour,`${t}:${e.minute}`},e.convertHourTo12HourFormat=e=>{const r=parseInt(e),t=r%12==0?12..toString():(r%12).toString();return Zo.padValue(t)},e.formatDisplayValue=(e,r)=>{try{const{hour:t,minute:n,period:o=""}=ei(e,r),i=Zo.padValue(t);let a=`${i}:${Zo.padValue(n)}`;return"12hr"===r?(a+=o.toLowerCase(),a):a}catch(e){return""}},e.toMinutesSeconds=e=>({minutes:Math.floor(e/60),seconds:e%60}),e.to24Hour=e=>{if((null==e?void 0:e.includes("am"))||(null==e?void 0:e.includes("pm"))){const[r,t]=e.split(/(am|pm)/i),[n,o]=r.split(":").map(Number);let i=n;return"pm"===t&&i<12&&(i+=12),"am"===t&&12===i&&(i=0),ri(i,o)}return e},e.generateTimings=(r,t="12hr",n,o)=>{const i=[];let a=0,s=1440-r;for(n&&(a=e.timeToMinutes(n)),o&&(s=e.timeToMinutes(o));a<=s;){let e=Math.floor(a/60);const n=a%60;if("12hr"===t){const r=e>=12?"pm":"am";e%=12,e=e||12;const t=ri(e,n,r);i.push(t)}else{const r=ri(e,n);i.push(r)}a+=r}return i},e.parseInput=(e,r="12hr")=>{if(""===e||void 0===e)return e;const t=e.trim().toLowerCase(),n=/^(?:(\d{1,2})([:.])?(\d{2})?)?(a|p|am|pm)?$/.exec(t);if(!n)return;let o=parseInt(n[1]||"0",10);const i=parseInt(n[3]||"0",10);let a=n[4];if(void 0===n[1]||o>24||i>59)return;if("a"===a?a="am":"p"===a&&(a="pm"),"24hr"===r)return"pm"===a&&o<12?o+=12:("am"===a&&12===o||24===o)&&(o=0),ri(o,i);a?0===o||24===o?(a="am",o=12):o>12&&(a="pm",o-=12):(a=0===o||24===o||o>6&&o<12?"am":"pm",o=o%12||12);return ri(o,i,a)},e.findClosestFlooredTime=(r,t)=>{if(!r)return r;const n=e.timeToMinutes(r);let o="",i=1/0;for(const r of t){const t=e.timeToMinutes(r)-n;if(t<=0&&Math.abs(t)<i)i=Math.abs(t),o=r;else if(t>0)break}return o},e.timeToMinutes=e=>{const[r,t]=e.toLowerCase().split(/(am|pm)/),[n,o]=r.split(":").map(Number);let i=n;return"pm"===t&&12!==i&&(i+=12),"am"===t&&12===i&&(i=0),60*i+o},e.calculateDuration=(r,t)=>{const n=e.timeToMinutes(r);return e.timeToMinutes(t)-n},e.calculateScrollPosition=r=>{const{scrollTime:t,minTime:n,maxTime:o,interval:i,intervalWidth:a,options:s}=r;try{if(!/^([0-1]?[0-9]|2[0-3]):[0-5][0-9]$/.test(t))return console.warn(`Invalid scrollTime format: "${t}". Expected format: HH:mm.`),null;const r=(null==s?void 0:s.roundToInterval)?e.roundToNearestInterval(t,i):t,[l,d]=Ko(r);if(isNaN(l)||isNaN(d))return console.warn(`Invalid scrollTime: "${t}".`),null;const c=60*l+d,[u,g]=Ko(n),h=60*u+g,[m,b]=Ko(o);(c<h||c>60*m+b)&&console.warn(`scrollTime "${t}" is outside the range (${n} - ${o}).`);return(c-h)/i*a}catch(e){return console.warn(`Error processing scrollTime: "${t}".`,e),null}}}(qo||(qo={}));const Ko=e=>e.split(":").map(Number),Jo=(e,r)=>{const t=parseInt(e);return"24hr"===r?t>=0&&t<=23:t>=1&&t<=12},Qo=e=>{const r=parseInt(e);return r>=0&&r<=59},ei=(e,r)=>{const t=e?e.split(":"):[],n=new Error("Invalid format");if("12hr"===r){if(2!==t.length||4!==t[1].length)throw n;const e=t[1].substring(0,2),i=t[1].substring(2);if(!Jo(t[0],r)||!Qo(e)||"am"!==(o=i).toLowerCase()&&"pm"!==o.toLowerCase())throw n;return{hour:t[0],minute:e,period:t[1].substring(2)}}if(2!==t.length)throw n;if(!Jo(t[0],r)||!Qo(t[1]))throw n;return{hour:t[0],minute:t[1]};var o},ri=(e,r,t)=>t?`${e}:${r.toString().padStart(2,"0")}${t}`:`${e.toString().padStart(2,"0")}:${r.toString().padStart(2,"0")}`;var ti={exports:{}};ti.exports=function(){var e={LTS:"h:mm:ss A",LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D, YYYY",LLL:"MMMM D, YYYY h:mm A",LLLL:"dddd, MMMM D, YYYY h:mm A"},r=/(\[[^[]*\])|([-_:/.,()\s]+)|(A|a|YYYY|YY?|MM?M?M?|Do|DD?|hh?|HH?|mm?|ss?|S{1,3}|z|ZZ?)/g,t=/\d\d/,n=/\d\d?/,o=/\d*[^-_:/,()\s\d]+/,i={},a=function(e){return(e=+e)+(e>68?1900:2e3)},s=function(e){return function(r){this[e]=+r}},l=[/[+-]\d\d:?(\d\d)?|Z/,function(e){(this.zone||(this.zone={})).offset=function(e){if(!e)return 0;if("Z"===e)return 0;var r=e.match(/([+-]|\d\d)/g),t=60*r[1]+(+r[2]||0);return 0===t?0:"+"===r[0]?-t:t}(e)}],d=function(e){var r=i[e];return r&&(r.indexOf?r:r.s.concat(r.f))},c=function(e,r){var t,n=i.meridiem;if(n){for(var o=1;o<=24;o+=1)if(e.indexOf(n(o,0,r))>-1){t=o>12;break}}else t=e===(r?"pm":"PM");return t},u={A:[o,function(e){this.afternoon=c(e,!1)}],a:[o,function(e){this.afternoon=c(e,!0)}],S:[/\d/,function(e){this.milliseconds=100*+e}],SS:[t,function(e){this.milliseconds=10*+e}],SSS:[/\d{3}/,function(e){this.milliseconds=+e}],s:[n,s("seconds")],ss:[n,s("seconds")],m:[n,s("minutes")],mm:[n,s("minutes")],H:[n,s("hours")],h:[n,s("hours")],HH:[n,s("hours")],hh:[n,s("hours")],D:[n,s("day")],DD:[t,s("day")],Do:[o,function(e){var r=i.ordinal,t=e.match(/\d+/);if(this.day=t[0],r)for(var n=1;n<=31;n+=1)r(n).replace(/\[|\]/g,"")===e&&(this.day=n)}],M:[n,s("month")],MM:[t,s("month")],MMM:[o,function(e){var r=d("months"),t=(d("monthsShort")||r.map((function(e){return e.slice(0,3)}))).indexOf(e)+1;if(t<1)throw new Error;this.month=t%12||t}],MMMM:[o,function(e){var r=d("months").indexOf(e)+1;if(r<1)throw new Error;this.month=r%12||r}],Y:[/[+-]?\d+/,s("year")],YY:[t,function(e){this.year=a(e)}],YYYY:[/\d{4}/,s("year")],Z:l,ZZ:l};function g(t){var n,o;n=t,o=i&&i.formats;for(var a=(t=n.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g,(function(r,t,n){var i=n&&n.toUpperCase();return t||o[n]||e[n]||o[i].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g,(function(e,r,t){return r||t.slice(1)}))}))).match(r),s=a.length,l=0;l<s;l+=1){var d=a[l],c=u[d],g=c&&c[0],h=c&&c[1];a[l]=h?{regex:g,parser:h}:d.replace(/^\[|\]$/g,"")}return function(e){for(var r={},t=0,n=0;t<s;t+=1){var o=a[t];if("string"==typeof o)n+=o.length;else{var i=o.regex,l=o.parser,d=e.slice(n),c=i.exec(d)[0];l.call(r,c),e=e.replace(c,"")}}return function(e){var r=e.afternoon;if(void 0!==r){var t=e.hours;r?t<12&&(e.hours+=12):12===t&&(e.hours=0),delete e.afternoon}}(r),r}}return function(e,r,t){t.p.customParseFormat=!0,e&&e.parseTwoDigitYear&&(a=e.parseTwoDigitYear);var n=r.prototype,o=n.parse;n.parse=function(e){var r=e.date,n=e.utc,a=e.args;this.$u=n;var s=a[1];if("string"==typeof s){var l=!0===a[2],d=!0===a[3],c=l||d,u=a[2];d&&(u=a[2]),i=this.$locale(),!l&&u&&(i=t.Ls[u]),this.$d=function(e,r,t){try{if(["x","X"].indexOf(r)>-1)return new Date(("X"===r?1e3:1)*e);var n=g(r)(e),o=n.year,i=n.month,a=n.day,s=n.hours,l=n.minutes,d=n.seconds,c=n.milliseconds,u=n.zone,h=new Date,m=a||(o||i?1:h.getDate()),b=o||h.getFullYear(),f=0;o&&!i||(f=i>0?i-1:h.getMonth());var p=s||0,y=l||0,v=d||0,x=c||0;return u?new Date(Date.UTC(b,f,m,p,y,v,x+60*u.offset*1e3)):t?new Date(Date.UTC(b,f,m,p,y,v,x)):new Date(b,f,m,p,y,v,x)}catch(e){return new Date("")}}(r,s,n),this.init(),u&&!0!==u&&(this.$L=this.locale(u).$L),c&&r!=this.format(s)&&(this.$d=new Date("")),i={}}else if(s instanceof Array)for(var h=s.length,m=1;m<=h;m+=1){a[1]=s[m-1];var b=t.apply(this,a);if(b.isValid()){this.$d=b.$d,this.$L=b.$L,this.init();break}m===h&&(this.$d=new Date(""))}else o.call(this,e)}}}();var ni=le(ti.exports),oi={exports:{}};oi.exports=function(e,r,t){r.prototype.isBetween=function(e,r,n,o){var i=t(e),a=t(r),s="("===(o=o||"()")[0],l=")"===o[1];return(s?this.isAfter(i,n):!this.isBefore(i,n))&&(l?this.isBefore(a,n):!this.isAfter(a,n))||(s?this.isBefore(i,n):!this.isAfter(i,n))&&(l?this.isAfter(a,n):!this.isBefore(a,n))}};var ii=le(oi.exports),ai={exports:{}};ai.exports=function(e,r){r.prototype.isSameOrAfter=function(e,r){return this.isSame(e,r)||this.isAfter(e,r)}};var si=le(ai.exports),li={exports:{}};li.exports=function(e,r){r.prototype.isSameOrBefore=function(e,r){return this.isSame(e,r)||this.isBefore(e,r)}};var di,ci,ui,gi=le(li.exports),hi={exports:{}},mi=le(hi.exports=(di={year:0,month:1,day:2,hour:3,minute:4,second:5},ci={},function(e,r,t){var n,o=function(e,r,t){void 0===t&&(t={});var n=new Date(e),o=function(e,r){void 0===r&&(r={});var t=r.timeZoneName||"short",n=e+"|"+t,o=ci[n];return o||(o=new Intl.DateTimeFormat("en-US",{hour12:!1,timeZone:e,year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit",timeZoneName:t}),ci[n]=o),o}(r,t);return o.formatToParts(n)},i=function(e,r){for(var n=o(e,r),i=[],a=0;a<n.length;a+=1){var s=n[a],l=s.type,d=s.value,c=di[l];c>=0&&(i[c]=parseInt(d,10))}var u=i[3],g=24===u?0:u,h=i[0]+"-"+i[1]+"-"+i[2]+" "+g+":"+i[4]+":"+i[5]+":000",m=+e;return(t.utc(h).valueOf()-(m-=m%1e3))/6e4},a=r.prototype;a.tz=function(e,r){void 0===e&&(e=n);var o=this.utcOffset(),i=this.toDate(),a=i.toLocaleString("en-US",{timeZone:e}),s=Math.round((i-new Date(a))/1e3/60),l=t(a,{locale:this.$L}).$set("millisecond",this.$ms).utcOffset(15*-Math.round(i.getTimezoneOffset()/15)-s,!0);if(r){var d=l.utcOffset();l=l.add(o-d,"minute")}return l.$x.$timezone=e,l},a.offsetName=function(e){var r=this.$x.$timezone||t.tz.guess(),n=o(this.valueOf(),r,{timeZoneName:e}).find((function(e){return"timezonename"===e.type.toLowerCase()}));return n&&n.value};var s=a.startOf;a.startOf=function(e,r){if(!this.$x||!this.$x.$timezone)return s.call(this,e,r);var n=t(this.format("YYYY-MM-DD HH:mm:ss:SSS"),{locale:this.$L});return s.call(n,e,r).tz(this.$x.$timezone,!0)},t.tz=function(e,r,o){var a=o&&r,s=o||r||n,l=i(+t(),s);if("string"!=typeof e)return t(e).tz(s);var d=function(e,r,t){var n=e-60*r*1e3,o=i(n,t);if(r===o)return[n,r];var a=i(n-=60*(o-r)*1e3,t);return o===a?[n,o]:[e-60*Math.min(o,a)*1e3,Math.max(o,a)]}(t.utc(e,a).valueOf(),l,s),c=d[0],u=d[1],g=t(c).utcOffset(u);return g.$x.$timezone=s,g},t.tz.guess=function(){return Intl.DateTimeFormat().resolvedOptions().timeZone},t.tz.setDefault=function(e){n=e}}));Xo.extend(ii),Xo.extend(gi),Xo.extend(si),Xo.extend(ni),Xo.extend(mi),function(e){e.generateDays=e=>{const r=e.startOf("month"),t=Xo(r).startOf("week");return bi(t).map((e=>fi(e)))},e.generateDaysForCurrentWeek=e=>{const r=e.startOf("week");return fi(r)},e.generateMonths=e=>{const r=[];for(let t=0;t<12;t++){const n=e.month(t);r.push(Xo(n))}return r},e.generateDecadeOfYears=e=>{const r=e.year(),t=10*Math.floor(r/10),n=e.year(t),o=[n.subtract(1,"year"),n];for(let e=1;e<11;e++)o.push(n.add(e,"year"));return o},e.getStartEndDecade=e=>{const r=10*Math.floor(+e.format("YYYY")/10);return{beginDecade:r,endDecade:+Xo(`${r+9}-01-01`).format("YYYY")}},e.convertTo12HourFormat=e=>{const r=Xo(e,"HH:mm");return r.isValid()?r.format("h:mm a"):""},e.isWithinRange=(e,r,t,n="day")=>!r&&!t||(r&&t?e.isBetween(r,t,n,"[]"):r?e.isSameOrAfter(r,n):e.isSameOrBefore(t,n)),e.isPreviousMonthWithinRange=(r,t)=>e.isWithinRange(r.subtract(1,"month"),t,void 0,"month"),e.isPreviousYearWithinRange=(r,t)=>e.isWithinRange(r.subtract(1,"year"),t,void 0,"year"),e.isPreviousDecadeWithinRange=(r,t)=>{const{beginDecade:n}=e.getStartEndDecade(r);return e.isWithinRange(r.year(n).subtract(1,"year"),t,void 0,"year")},e.isNextMonthWithinRange=(r,t)=>e.isWithinRange(r.add(1,"month"),void 0,t,"month"),e.isNextYearWithinRange=(r,t)=>e.isWithinRange(r.add(1,"year"),void 0,t,"year"),e.isNextDecadeWithinRange=(r,t)=>{const{endDecade:n}=e.getStartEndDecade(r);return e.isWithinRange(r.year(n).add(1,"year"),void 0,t,"year")},e.getWeekStartEnd=e=>({start:e.startOf("week").format("YYYY-MM-DD"),end:e.endOf("week").format("YYYY-MM-DD")}),e.getFixedRangeStartEnd=(e,r)=>({start:e.format("YYYY-MM-DD"),end:e.add(r-1,"day").format("YYYY-MM-DD")}),e.isDisabledDay=(r,t,n,o)=>{const i=e.isWithinRange(r,n?Xo(n):void 0,o?Xo(o):void 0),a=t&&t.includes(r.format("YYYY-MM-DD"));return!i||!!a}}(ui||(ui={}));const bi=e=>{const r=[e];for(let t=1;t<6;t++){const n=e.add(t,"week");r.push(n)}return r},fi=e=>{const r=[];for(let t=0;t<7;t++){const n=e.add(t,"day");r.push(n)}return r},pi=[1,3,5,7,8,10,12],yi=[4,6,9,11];var vi,xi;!function(e){e.clampDay=(r,t,n)=>{const o=parseInt(r),i=parseInt(t),a=parseInt(n);return 0==o?"1":pi.includes(i)?Math.min(o,31).toString():yi.includes(i)?Math.min(o,30).toString():2===i?e.isLeapYear(a)?Math.min(o,29).toString():Math.min(o,28).toString():r},e.clampMonth=e=>{const r=parseInt(e);return 0==r?"1":r>12?"12":e},e.isLeapYear=e=>e%4==0&&e%100!=0||e%400==0,e.getTimeDiffInMinutes=(e,r,t="HH:mm")=>{const n=Xo(e,t);return Xo(r,t).diff(n,"minute")},e.toDayjs=e=>e?Xo(e):Xo(),e.addMinutesToTime=(e,r,t="HH:mm")=>Xo(e,t).add(r,"minutes").format(t),e.isSame=(e,r,t="day")=>Xo(e).isSame(Xo(r),t)}(vi||(vi={})),function(e){e.isDateDisabled=(e,r)=>{const{disabledDates:t,minDate:n,maxDate:o}=r;return!!(e&&t&&t.length&&t.includes(e))||(!(!n||!Xo(e).isBefore(n,"day"))||!(!o||!Xo(e).isAfter(o,"day")))},e.sanitizeInput=e=>{if(e){const t=r(e);if(Xo(t,"YYYY-MM-DD",!0).isValid())return t}return""};const r=e=>{const r=e.match(/^(\d{1,4})-(\d{1,2})-(\d{1,2})$/);if(!r)return"";const[,t,n,o]=r;if(t.length<=2||parseInt(t,10)<100)return"";return`${t.padStart(4,"0")}-${n.padStart(2,"0")}-${o.padStart(2,"0")}`}}(xi||(xi={}));const wi=()=>{const e=i.split(".");return parseInt(e[0],10)>=19},$i=(...e)=>r=>{const t=[];for(const n of e)if("function"==typeof n){const e=n(r),o="function"==typeof e;t.push(o?e:()=>n(null))}else n.current=r,t.push((()=>{n.current=null}));if(wi())return()=>{for(const e of t)e()}};var Fi;!function(e){e.generate=()=>Math.random().toString(36).substring(2,9)}(Fi||(Fi={}));var Ci=function(e,r){return Ci=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,r){e.__proto__=r}||function(e,r){for(var t in r)Object.prototype.hasOwnProperty.call(r,t)&&(e[t]=r[t])},Ci(e,r)};var Ei=function(){return Ei=Object.assign||function(e){for(var r,t=1,n=arguments.length;t<n;t++)for(var o in r=arguments[t])Object.prototype.hasOwnProperty.call(r,o)&&(e[o]=r[o]);return e},Ei.apply(this,arguments)};var Si="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};var Di=function(e){var r=typeof e;return null!=e&&("object"==r||"function"==r)},ki="object"==typeof Si&&Si&&Si.Object===Object&&Si,Bi="object"==typeof self&&self&&self.Object===Object&&self,Ti=ki||Bi||Function("return this")(),zi=Ti,Ii=function(){return zi.Date.now()},Ai=/\s/;var Oi=function(e){for(var r=e.length;r--&&Ai.test(e.charAt(r)););return r},Mi=/^\s+/;var Hi=function(e){return e?e.slice(0,Oi(e)+1).replace(Mi,""):e},Ri=Ti.Symbol,Li=Ri,ji=Object.prototype,_i=ji.hasOwnProperty,Wi=ji.toString,Ni=Li?Li.toStringTag:void 0;var Pi=function(e){var r=_i.call(e,Ni),t=e[Ni];try{e[Ni]=void 0;var n=!0}catch(e){}var o=Wi.call(e);return n&&(r?e[Ni]=t:delete e[Ni]),o},Yi=Object.prototype.toString;var Vi=Pi,Ui=function(e){return Yi.call(e)},Zi=Ri?Ri.toStringTag:void 0;var Gi=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":Zi&&Zi in Object(e)?Vi(e):Ui(e)},qi=function(e){return null!=e&&"object"==typeof e};var Xi=Hi,Ki=Di,Ji=function(e){return"symbol"==typeof e||qi(e)&&"[object Symbol]"==Gi(e)},Qi=/^[-+]0x[0-9a-f]+$/i,ea=/^0b[01]+$/i,ra=/^0o[0-7]+$/i,ta=parseInt;var na=Di,oa=Ii,ia=function(e){if("number"==typeof e)return e;if(Ji(e))return NaN;if(Ki(e)){var r="function"==typeof e.valueOf?e.valueOf():e;e=Ki(r)?r+"":r}if("string"!=typeof e)return 0===e?e:+e;e=Xi(e);var t=ea.test(e);return t||ra.test(e)?ta(e.slice(2),t?2:8):Qi.test(e)?NaN:+e},aa=Math.max,sa=Math.min;var la=function(e,r,t){var n,o,i,a,s,l,d=0,c=!1,u=!1,g=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function h(r){var t=n,i=o;return n=o=void 0,d=r,a=e.apply(i,t)}function m(e){var t=e-l;return void 0===l||t>=r||t<0||u&&e-d>=i}function b(){var e=oa();if(m(e))return f(e);s=setTimeout(b,function(e){var t=r-(e-l);return u?sa(t,i-(e-d)):t}(e))}function f(e){return s=void 0,g&&n?h(e):(n=o=void 0,a)}function p(){var e=oa(),t=m(e);if(n=arguments,o=this,l=e,t){if(void 0===s)return function(e){return d=e,s=setTimeout(b,r),c?h(e):a}(l);if(u)return clearTimeout(s),s=setTimeout(b,r),h(l)}return void 0===s&&(s=setTimeout(b,r)),a}return r=ia(r)||0,na(t)&&(c=!!t.leading,i=(u="maxWait"in t)?aa(ia(t.maxWait)||0,r):i,g="trailing"in t?!!t.trailing:g),p.cancel=function(){void 0!==s&&clearTimeout(s),d=0,n=l=o=s=void 0},p.flush=function(){return void 0===s?a:f(oa())},p},da=la,ca=Di;var ua=function(e,r,t){var n=!0,o=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return ca(t)&&(n="leading"in t?!!t.leading:n,o="trailing"in t?!!t.trailing:o),da(e,r,{leading:n,maxWait:r,trailing:o})},ga=function(e,r,t,n){switch(r){case"debounce":return la(e,t,n);case"throttle":return ua(e,t,n);default:return e}},ha=function(e){return"function"==typeof e},ma=function(){return"undefined"==typeof window},ba=function(e){return e instanceof Element||e instanceof HTMLDocument},fa=function(e,r,t,n){return function(o){var i=o.width,a=o.height;r((function(r){return r.width===i&&r.height===a||r.width===i&&!n||r.height===a&&!t?r:(e&&ha(e)&&e(i,a),{width:i,height:a})}))}};!function(e){function r(r){var t=e.call(this,r)||this;t.cancelHandler=function(){t.resizeHandler&&t.resizeHandler.cancel&&(t.resizeHandler.cancel(),t.resizeHandler=null)},t.attachObserver=function(){var e=t.props,r=e.targetRef,n=e.observerOptions;if(!ma()){r&&r.current&&(t.targetRef.current=r.current);var o=t.getElement();o&&(t.observableElement&&t.observableElement===o||(t.observableElement=o,t.resizeObserver.observe(o,n)))}},t.getElement=function(){var e=t.props,r=e.querySelector,n=e.targetDomEl;if(ma())return null;if(r)return document.querySelector(r);if(n&&ba(n))return n;if(t.targetRef&&ba(t.targetRef.current))return t.targetRef.current;var o=M(t);if(!o)return null;switch(t.getRenderType()){case"renderProp":case"childFunction":case"child":case"childArray":return o;default:return o.parentElement}},t.createResizeHandler=function(e){var r=t.props,n=r.handleWidth,o=void 0===n||n,i=r.handleHeight,a=void 0===i||i,s=r.onResize;if(o||a){var l=fa(s,t.setState.bind(t),o,a);e.forEach((function(e){var r=e&&e.contentRect||{},n=r.width,o=r.height;!t.skipOnMount&&!ma()&&l({width:n,height:o}),t.skipOnMount=!1}))}},t.getRenderType=function(){var e=t.props,r=e.render,n=e.children;return ha(r)?"renderProp":ha(n)?"childFunction":l(n)?"child":Array.isArray(n)?"childArray":"parent"};var n=r.skipOnMount,o=r.refreshMode,i=r.refreshRate,a=void 0===i?1e3:i,s=r.refreshOptions;return t.state={width:void 0,height:void 0},t.skipOnMount=n,t.targetRef=d(),t.observableElement=null,ma()||(t.resizeHandler=ga(t.createResizeHandler,o,a,s),t.resizeObserver=new window.ResizeObserver(t.resizeHandler)),t}(function(e,r){if("function"!=typeof r&&null!==r)throw new TypeError("Class extends value "+String(r)+" is not a constructor or null");function t(){this.constructor=e}Ci(e,r),e.prototype=null===r?Object.create(r):(t.prototype=r.prototype,new t)})(r,e),r.prototype.componentDidMount=function(){this.attachObserver()},r.prototype.componentDidUpdate=function(){this.attachObserver()},r.prototype.componentWillUnmount=function(){ma()||(this.observableElement=null,this.resizeObserver.disconnect(),this.cancelHandler())},r.prototype.render=function(){var e,r=this.props,t=r.render,o=r.children,i=r.nodeType,a=void 0===i?"div":i,s=this.state,l={width:s.width,height:s.height,targetRef:this.targetRef};switch(this.getRenderType()){case"renderProp":return t&&t(l);case"childFunction":return(e=o)(l);case"child":if((e=o).type&&"string"==typeof e.type){var d=function(e,r){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(n=Object.getOwnPropertySymbols(e);o<n.length;o++)r.indexOf(n[o])<0&&Object.prototype.propertyIsEnumerable.call(e,n[o])&&(t[n[o]]=e[n[o]])}return t}(l,["targetRef"]);return c(e,d)}return c(e,l);case"childArray":return(e=o).map((function(e){return!!e&&c(e,l)}));default:return n.createElement(a,null)}}}(u);var pa=ma()?g:h;function ya(e){void 0===e&&(e={});var r=e.skipOnMount,t=void 0!==r&&r,n=e.refreshMode,o=e.refreshRate,i=void 0===o?1e3:o,l=e.refreshOptions,d=e.handleWidth,c=void 0===d||d,u=e.handleHeight,g=void 0===u||u,h=e.targetRef,m=e.observerOptions,b=e.onResize,f=a(t),p=a(null),y=null!=h?h:p,v=a(),x=s({width:void 0,height:void 0}),w=x[0],$=x[1];return pa((function(){if(!ma()){var e=fa(b,$,c,g);v.current=ga((function(r){(c||g)&&r.forEach((function(r){var t=r&&r.contentRect||{},n=t.width,o=t.height;!f.current&&!ma()&&e({width:n,height:o}),f.current=!1}))}),n,i,l);var r=new window.ResizeObserver(v.current);return y.current&&r.observe(y.current,m),function(){r.disconnect();var e=v.current;e&&e.cancel&&e.cancel()}}}),[n,i,l,c,g,b,m,y.current]),Ei({ref:y},w)}function va(e){const r=a(null);h((()=>{r.current=e}),[e]);return m(((...e)=>{var t;return null===(t=r.current)||void 0===t?void 0:t.call(r,...e)}),[])}const xa=e=>{const r=(e=>{const r=a(e),t=a();return g((()=>{t.current=r.current,r.current=e}),[e]),t.current})(e);return r!==e},wa=F.span`
    clip-path: inset(50%);
    height: 1px;
    width: 1px;
    overflow: hidden;
    position: absolute;
    white-space: nowrap;
`,$a=e=>wi()?e:e?"true":void 0,Fa=(...e)=>e.filter((e=>!!e)).join(" "),Ca=F.div`
    display: inline-block;
    position: relative;
    width: ${({$size:e})=>e?`${e}px`:"1em"};
    height: ${({$size:e})=>e?`${e}px`:"1em"};
    color: ${e=>e.$color||"currentColor"};
`,Ea=E`
	0% {
	  transform: rotate(0deg);
	}
	100% {
	  transform: rotate(360deg);
	}
`,Sa=F.div`
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
    animation: ${Ea} 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
`,Da=F(Sa)`
    animation-delay: -0.45s;
`,ka=F(Sa)`
    animation-delay: -0.3s;
`,Ba=F(Sa)`
    animation-delay: -0.15s;
`,Ta=({color:t,className:n,size:o})=>e(Ca,{className:n,$size:o,$color:t,"data-testid":"component-loading-spinner",children:[r(Sa,{id:"inner1"}),r(Da,{id:"inner2"}),r(ka,{id:"inner3"}),r(Ba,{id:"inner4"})]}),za=F.button`
    padding: ${go["spacing-8"]} ${go["spacing-16"]};
    min-width: 4rem;
    border: ${uo["width-010"]} ${uo.solid} transparent;
    transition: all ${co["duration-250"]} ${co["ease-default"]};
    border-radius: ${An};
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;

    // -----------------------------------------------------------------------------
    // BUTTON STYLE + TEXT COLOR
    // -----------------------------------------------------------------------------
    ${e=>{switch(e.$buttonStyle){case"secondary":return C`
                    background-color: ${so.bg};
                    border-color: ${e.$buttonIsDanger?so["border-error-strong"]:Rn};

                    color: ${e.$buttonIsDanger?so["text-error"]:Ln};

                    &:hover,
                    &:active {
                        @media (pointer: fine) {
                            background-color: ${so["bg-hover-neutral"]};
                        }
                    }
                `;case"light":return C`
                    background-color: ${so.bg};
                    border-color: ${so.border};

                    color: ${e.$buttonIsDanger?so["text-error"]:jn};

                    &:hover,
                    &:active {
                        @media (pointer: fine) {
                            background-color: ${so["bg-hover-neutral"]};
                        }
                    }
                `;case"link":return C`
                    background-color: transparent;

                    color: ${e.$buttonIsDanger?so["text-error"]:_n};
                    &:hover,
                    &:active {
                        @media (pointer: fine) {
                            background-color: ${so["bg-hover-neutral"]};
                        }
                    }
                `;case"disabled":return C`
                    background-color: ${so["bg-disabled"]};

                    cursor: not-allowed;

                    &:hover {
                        box-shadow: none;
                    }

                    color: ${so["text-disabled"]};
                `;default:return C`
                    background-color: ${e.$buttonIsDanger?so["bg-error-strong"]:On};

                    ${bo.MaxWidth.sm} {
                        width: 100%;
                    }

                    color: ${Hn};

                    &:hover,
                    &:active {
                        @media (pointer: fine) {
                            background-color: ${e.$buttonIsDanger?so["bg-error-strong-hover"]:Mn};
                        }
                    }
                `}}}

    // -----------------------------------------------------------------------------
	// BUTTON SIZE + TEXT SIZE
	// -----------------------------------------------------------------------------
	${e=>{switch(e.$buttonSizeStyle){case"small":return C`
                    height: 2.5rem;
                    ${lo["body-md-semibold"]}

                    ${bo.MaxWidth.xxs} {
                        height: auto;
                    }
                `;case"large":return C`
                    height: 4rem;
                    ${lo["heading-md-semibold"]}

                    ${bo.MaxWidth.xxs} {
                        height: auto;
                    }
                `;default:return C`
                    height: 3rem;
                    ${lo["heading-xs-semibold"]}

                    ${bo.MaxWidth.xxs} {
                        height: auto;
                    }
                `}}}
`,Ia=F(Ta)`
    margin-right: ${e=>e.$hasChildren?"0.5rem":"0"};
`,Aa=e=>o.Children.toArray(e).some((e=>"string"==typeof e?""!==e.trim():null!=e)),Oa=(t,n)=>{const{children:o,disabled:i=!1,loading:a=!1,styleType:s="default",danger:l=!1,focusableWhenDisabled:d=!1,onClick:c}=t,u=ae(t,["children","disabled","loading","styleType","danger","focusableWhenDisabled","onClick"]),g={$buttonStyle:i?"disabled":s,$buttonSizeStyle:"default",$buttonIsDanger:l};return e(za,Object.assign({ref:n,"data-testid":u["data-testid"]||"button",disabled:i&&!d,"aria-disabled":i,"aria-busy":a,onClick:i?void 0:c},g,u,{children:[a&&r(Ia,{$hasChildren:Aa(o)}),r("span",{children:o})]}))};Oa.displayName="Button.Default";const Ma=(t,n)=>{const{children:o,disabled:i=!1,loading:a=!1,styleType:s="default",danger:l=!1,focusableWhenDisabled:d=!1,onClick:c}=t,u=ae(t,["children","disabled","loading","styleType","danger","focusableWhenDisabled","onClick"]),g={$buttonStyle:i?"disabled":s,$buttonSizeStyle:"small",$buttonIsDanger:l};return e(za,Object.assign({ref:n,"data-testid":u["data-testid"]||"button",disabled:i&&!d,"aria-disabled":i,"aria-busy":a,onClick:i?void 0:c},g,u,{children:[a&&r(Ia,{$hasChildren:Aa(o)}),r("span",{children:o})]}))};Ma.displayName="Button.Small";const Ha=(t,n)=>{const{children:o,disabled:i=!1,loading:a=!1,styleType:s="default",danger:l=!1,focusableWhenDisabled:d=!1,onClick:c}=t,u=ae(t,["children","disabled","loading","styleType","danger","focusableWhenDisabled","onClick"]),g={$buttonStyle:i?"disabled":s,$buttonSizeStyle:"large",$buttonIsDanger:l};return e(za,Object.assign({ref:n,"data-testid":u["data-testid"]||"button",disabled:i&&!d,"aria-disabled":i,"aria-busy":a,onClick:i?void 0:c},g,u,{children:[a&&r(Ia,{$hasChildren:Aa(o)}),r("span",{children:o})]}))};Ha.displayName="Button.Large";const Ra={Default:o.forwardRef(Oa),Small:o.forwardRef(Ma),Large:o.forwardRef(Ha)},La=e=>{const{textSize:r}=e||{};return C`
        // Text styling
        ${r&&lo[`${r}-regular`]}

        strong {
            font-weight: ${lo.Spec["weight-semibold"]};
            ${r&&lo[`${r}-semibold`]};
        }

        p {
            margin: 0;
        }

        // Link styling
        a {
            font-weight: ${lo.Spec["weight-semibold"]};
            ${r&&lo[`${r}-semibold`]}
            color: ${so.hyperlink};
            text-decoration: underline;

            svg {
                color: ${so["icon-primary"]};
                height: 1lh;
                width: 1em;
                margin-left: 0.4rem;
                vertical-align: middle;
            }

            &:hover,
            &:active,
            &:visited,
            &:focus {
                color: ${so["hyperlink-hover"]};

                svg {
                    color: ${so["icon-hover"]};
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
    `},ja=e=>C`
    display: -webkit-box;
    -webkit-line-clamp: ${e};
    -webkit-box-orient: vertical;
    overflow: hidden;
`,_a=(e,r,t=!1)=>C`
        ${lo[`${e}-${r}`]}
        ${t?"margin-bottom: 1.05em;":"margin-bottom: 0;"}
    `,Wa=e=>{if(e)return C`
            ${ja(e)}
        `},Na=(e,r,t,n,o)=>C`
    ${_a(e,r||"regular",n)}
    ${((e=!1,r=!1,t)=>r?C`
            display: block;
            ${Wa(t)}
        `:e?C`
            display: inline;
        `:C`
            display: block;
            ${Wa(t)}
        `)(t,n,o)}
    color: ${so.text};
`,Pa=F.div`
    ${e=>Na(e.$textStyle,e.$weight,e.$inline,e.$paragraph,e.$maxLines)}
`,Ya=F.a`
    ${e=>{var r;return C`
        ${_a(e.$textStyle,e.$weight||"regular")}
        color: ${so.hyperlink};
        text-decoration: ${null!==(r=e.$underlineStyle)&&void 0!==r?r:"underline"};

        &:hover,
        &:active,
        &:focus {
            color: ${so["text-hover"]};
        }
    `}}
`,Va=F(H)`
    height: 1lh;
    width: 1em;
    margin-left: 0.4em;
    vertical-align: middle;
`;var Ua;!function(t){const n=(e,t,n)=>{const i=(n,o)=>{var{weight:i,inline:a,paragraph:s,maxLines:l}=n,d=ae(n,["weight","inline","paragraph","maxLines"]);return r(Pa,Object.assign({ref:o,as:a?"span":e,$textStyle:t,$weight:i,$inline:a,$paragraph:s,$maxLines:l},d))};return i.displayName=`Typography.${n}`,o.forwardRef(i)};t.HeadingXXL=n("h1","heading-xxl","HeadingXXL"),t.HeadingXL=n("h2","heading-xl","HeadingXL"),t.HeadingLG=n("h3","heading-lg","HeadingLG"),t.HeadingMD=n("h4","heading-md","HeadingMD"),t.HeadingSM=n("h5","heading-sm","HeadingSM"),t.HeadingXS=n("h6","heading-xs","HeadingXS");const i=(e,t)=>{const n=(t,n)=>{var{weight:o,inline:i,paragraph:a,maxLines:s}=t,l=ae(t,["weight","inline","paragraph","maxLines"]);return r(Pa,Object.assign({ref:n,as:i?"span":"p",$textStyle:e,$weight:o,$inline:i,$paragraph:a,$maxLines:s},l))};return n.displayName=`Typography.${t}`,o.forwardRef(n)};t.BodyBL=i("body-baseline","BodyBL"),t.BodyMD=i("body-md","BodyMD"),t.BodySM=i("body-sm","BodySM"),t.BodyXS=i("body-xs","BodyXS");const a=(t,n)=>{const i=(n,o)=>{var{weight:i,children:a,external:s,underlineStyle:l="underline"}=n,d=ae(n,["weight","children","external","underlineStyle"]);return e(Ya,Object.assign({ref:o,$textStyle:t,$weight:i,$underlineStyle:l},d,{children:[a,s&&r(Va,{})]}))};return i.displayName=`Typography.${n}`,o.forwardRef(i)};t.LinkBL=a("body-baseline","LinkBL"),t.LinkMD=a("body-md","LinkMD"),t.LinkSM=a("body-sm","LinkSM"),t.LinkXS=a("body-xs","LinkXS")}(Ua||(Ua={}));const Za=F.div`
    padding: ${go["spacing-8"]} ${go["spacing-16"]};
    display: flex;

    ${e=>{let r,t;switch(e.$type){case"error":r=so["bg-error"](e),t=so["border-error"](e);break;case"success":r=so["bg-success"](e),t=so["border-success"](e);break;case"warning":default:r=so["bg-warning"](e),t=so["border-warning"](e);break;case"info":r=so["bg-info"](e),t=so["border-info"](e);break;case"description":r=so["bg-strong"](e),t=so["border-strong"](e)}return C`
            background: ${r};
            border-left: ${uo["width-020"]} ${uo.solid}
                ${t};
        `}}
`,Ga=F.div`
    display: flex;
    align-items: center;
    height: 1lh;
    margin-right: ${go["spacing-8"]};

    ${e=>{let r;const t="small"===e.$sizeType?"1.25rem":"1.5rem";switch(e.$type){case"error":r=so["icon-error"](e);break;case"success":r=so["icon-success"](e);break;case"warning":default:r=so["icon-warning"](e);break;case"info":r=so["icon-info"](e);break;case"description":r=so["icon-subtle"](e)}return C`
            svg {
                color: ${r};
                width: ${t};
                height: ${t};
            }
        `}}
`,qa=F(Ua.LinkSM)`
    ${e=>"small"===e.$sizeType?C`
                ${lo["body-sm-semibold"]}
                margin-top: ${go["spacing-4"]};
            `:C`
                ${lo["body-md-semibold"]}
                margin-top: ${go["spacing-8"]};
            `}
    display: flex;
    align-items: center;
    align-self: flex-start;

    svg {
        height: 1rem;
        width: 1rem;
        margin-left: ${go["spacing-4"]};
    }
`,Xa=F.div`
    display: flex;
    flex-direction: column;
    flex: 1;
    overflow-wrap: anywhere;
`,Ka=F.div`
    display: flex;
    flex-direction: column;
    flex: 1;
    order: 1;
    ${e=>{if(e.$showMore&&e.$hasActionLink)return C`
                margin-bottom: ${go["spacing-8"]};
            `}}
    ${e=>{const r="linear-gradient(to bottom, black 50%, transparent 100%)";if(!e.$showMore&&e.$maxCollapsedHeight)return`\n                max-height: ${e.$maxCollapsedHeight}px;\n\t\t\t\toverflow: hidden;\n                -webkit-mask-image: ${r};\n                mask-image: ${r};\n\t\t\t`}}
`,Ja=F.div`
    color: ${so.text};

    ${e=>"small"===e.$sizeType?La({textSize:"body-sm"}):La({textSize:"body-md"})}
`,Qa=F.button`
    ${e=>"small"===e.$sizeType?C`
                ${lo["body-sm-semibold"]}
            `:C`
                ${lo["body-md-semibold"]}
            `}

    display: flex;
    align-items: center;
    align-self: flex-start;
    gap: ${go["spacing-4"]};
    margin-top: ${go["spacing-8"]};
    order: 2;

    cursor: pointer;
    user-select: none;
    border: none;
    background: transparent;

    color: ${so["text-primary"]};
`,es=F($)`
    transform: rotate(${e=>e.$expanded?180:0}deg);
    transition: transform ${co["duration-350"]} ${co["ease-standard"]};
`,rs=F.div`
    height: 1.625rem;
    width: 1.625rem;
    margin-right: 0.5rem;
    flex-shrink: 0;

    svg {
        height: 100%;
        width: 100%;
    }

    ${e=>e.$disabled?e.$active?C`
                    color: ${so["icon-selected-disabled"]};
                `:C`
                    color: ${so["icon-disabled-subtle"]};
                `:e.$active?C`
                color: ${so["icon-selected"]};
            `:C`
            color: ${so["icon-subtle"]};
        `};
`,ts=C`
    margin-bottom: ${e=>e.$bottomMargin||0}rem;

    // Counter matters
    counter-reset: list;

    ${e=>e.$size&&lo[`${e.$size}-regular`]}
    font-weight: ${lo.Spec["weight-regular"]};
    color: ${so.text};

    // nested lists styling
    ol,
    ul {
        margin-top: 0.5rem;
        margin-bottom: 0.5rem;
    }
`,ns=F.ol`
    ${ts}

    margin-left: 3em;

    ${bo.MaxWidth.lg} {
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
`,os=F.ul`
    ${ts}

    margin-left: ${e=>e.$hasCustomIcon?0:"2.5em"};
    list-style-type: ${e=>e.$hasCustomIcon?"none":e.$bulletType||"disc"};

    ${e=>e.$hasCustomIcon&&C`
            & > li {
                display: flex;
                align-items: flex-start;
                gap: 0.5em;
            }
        `}
`,is=n=>{var{size:i,bulletType:a,bottomMargin:s,children:l}=n,d=ae(n,["size","bulletType","bottomMargin","children"]);const c=void 0!==a&&"string"!=typeof a;return r(os,Object.assign({$size:i,$bulletType:c?void 0:a,$bottomMargin:s,$hasCustomIcon:c},d,{children:c?o.Children.map(l,(n=>o.isValidElement(n)?o.cloneElement(n,{children:e(t,{children:[r("div",{"aria-hidden":!0,children:a}),r("div",{children:n.props.children})]})}):n)):l}))};is.displayName="TextList.Ul";const as=e=>{var{size:t,counterType:n,counterSeparator:o,bottomMargin:i,children:a}=e,s=ae(e,["size","counterType","counterSeparator","bottomMargin","children"]);return r(ns,Object.assign({$size:t,$counterType:n,$counterSeparator:o,$bottomMargin:i},s,{children:a}))};as.displayName="TextList.Ol";const ss=is,ls=F.div`
    position: relative;
    display: inline-flex;
    min-width: 10.375rem;
    border-radius: ${ho.sm};
    border-width: 1px;
    border-style: solid;
    overflow: hidden;
    flex-direction: column;
    height: fit-content;
    background: ${so.bg};

    &:has(input:focus-visible) {
        outline: 2px solid ${so["focus-ring"]};
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
                            border-color: ${so["border-error"]};
                        `:C`
                            border-color: ${so["border-error"]};

                            &:has(${ms}:hover) {
                                @media (pointer: fine) {
                                    background: ${so["bg-hover-subtle"]};
                                }
                            }
                        `:e.$disabled?e.$selected?C`
                            border: none;
                            background: ${so["bg-selected-disabled"]};
                        `:C`
                            border: none;
                        `:e.$selected?C`
                        border: none;
                        background: ${so["bg-selected"]};

                        &:has(${ms}:hover) {
                            @media (pointer: fine) {
                                background: ${so["bg-selected-hover"]};

                                & ${us} {
                                    color: ${so["text-selected-hover"]};
                                }

                                & ${Fs} {
                                    color: ${so["icon-selected-hover"]};
                                }
                            }
                        }
                    `:C`
                    border: none;

                    &:has(${ms}:hover) {
                        @media (pointer: fine) {
                            background: ${so["bg-hover-subtle"]};
                        }
                    }
                `:e.$error?e.$disabled?C`
                            border-color: ${so["border-error"]};
                        `:C`
                            border-color: ${so["border-error"]};

                            &:has(${ms}:hover) {
                                @media (pointer: fine) {
                                    background: ${so["bg-hover-subtle"]};
                                }
                            }
                        `:e.$disabled?e.$selected?C`
                            border-color: ${so["border-selected-disabled"]};
                            background: ${so["bg-selected-disabled"]};
                        `:C`
                            border-color: ${so["border-disabled"]};
                            background: ${so["bg-disabled"]};
                        `:e.$selected?C`
                        border-color: ${so["border-selected"]};
                        background: ${so["bg-selected"]};

                        &:has(${ms}:hover) {
                            @media (pointer: fine) {
                                background: ${so["bg-selected-hover"]};

                                & ${us} {
                                    color: ${so["text-selected-hover"]};
                                }

                                & ${Fs} {
                                    color: ${so["icon-selected-hover"]};
                                }
                            }
                        }
                    `:C`
                    border-color: ${so.border};

                    &:has(${ms}:hover) {
                        @media (pointer: fine) {
                            background: ${so["bg-hover-subtle"]};
                        }
                    }
                `}
`,ds=F.input`
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
`,cs=F.div`
    display: flex;
`,us=F.div`
    display: flex;
    flex-direction: column;
    overflow-wrap: anywhere;
    width: 100%;
    overflow: hidden;

    // apply header container text color
    ${e=>e.$disabled?e.$selected?C`
                    color: ${so["text-selected-disabled"]};
                `:C`
                    color: ${so["text-disabled"]};
                `:e.$selected?C`
                color: ${so["text-selected"]};
            `:C`
            color: ${so.text};
        `}
`,gs=F.label`
    ${e=>e.$selected?lo["body-baseline-semibold"]:lo["body-baseline-regular"]};
    overflow: hidden;
    display: -webkit-box;
    text-overflow: ellipsis;
    -webkit-box-orient: vertical;
    overflow-wrap: break-word;
    -webkit-line-clamp: ${e=>{var r,t;return null!==(t=null===(r=e.$maxLines)||void 0===r?void 0:r.desktop)&&void 0!==t?t:"none"}};
    ${bo.MaxWidth.lg} {
        -webkit-line-clamp: ${e=>{var r,t;return null!==(t=null===(r=e.$maxLines)||void 0===r?void 0:r.tablet)&&void 0!==t?t:"none"}};
    }
    ${bo.MaxWidth.sm} {
        -webkit-line-clamp: ${e=>{var r,t;return null!==(t=null===(r=e.$maxLines)||void 0===r?void 0:r.mobile)&&void 0!==t?t:"none"}};
    }
`,hs=F.div`
    ${lo["body-md-regular"]}
    margin-top: 0.5rem;

    z-index: 1; // forces sublabel to render above the input
    pointer-events: none; // to allow click events to be passed to the input

    strong,
    b {
        ${lo["body-md-semibold"]}
    }
`,ms=F.div`
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
`,bs=F.div`
    display: flex;
    height: 100%;
    width: 100%;
    position: relative;
    padding: ${e=>e.$addPadding?"0.6875rem 0rem 0.6875rem 1rem":"0.6875rem 1rem"};
`,fs=F.button`
    color: ${e=>e.$disabled?so["text-disabled"]:so["text-error"]};
    white-space: nowrap;
    ${lo["body-md-semibold"]}
    height: fit-content;
    padding: 0.6875rem 1rem 0.6875rem 0.5rem;
    border: none;
    background: none;

    cursor: ${e=>e.$disabled?"not-allowed":"pointer"};
`,ps=F.button`
    color: ${e=>e.disabled?so["text-disabled"]:so["text-primary"]};
    ${lo["body-baseline-semibold"]}
    display: flex;
    align-items: center;
    justify-content: flex-end;
    border: none;
    background-color: ${so.bg};
    cursor: ${e=>e.disabled?"not-allowed":"pointer"};
    padding: 0 1rem 0.6875rem 1rem;
    padding-top: ${e=>e.$paddingTopRequired?"0.6875rem":"0rem"};
    width: 100%;

    svg {
        width: 1em;
        height: 1em;
        margin-left: 0.5rem;
    }
`,ys=F.div`
    width: 100%;
    color: ${e=>e.$disabled?so["text-disabled"]:so["text-error"]};
    border: none;
    background: ${so.bg};
    cursor: ${e=>e.$disabled?"not-allowed":"pointer"};
    padding: 0.6875rem 1rem 0.5rem 1rem;
`,vs=F((t=>{var{type:n,className:o,children:i,actionLink:a,actionLinkIcon:l,sizeType:d="default",showIcon:c=!1,customIcon:u,maxCollapsedHeight:h,role:b}=t,f=ae(t,["type","className","children","actionLink","actionLinkIcon","sizeType","showIcon","customIcon","maxCollapsedHeight","role"]);const[p,y]=s(!1),[v,x]=s(!1),{height:w,ref:$}=ya(),[F]=s((()=>Fi.generate())),C=m((()=>{y(!h),x(E())}),[h,w]),E=()=>!(!w||!h)&&w>h;g((()=>{C()}),[h,w,C]);return e(Za,{className:o,$type:n,$sizeType:d,"aria-label":`${(()=>{switch(n){case"success":return"Success";case"warning":return"Warning";case"error":return"Error";case"info":return"Information";case"description":return"Description";default:return"Alert"}})()}`,"data-testid":f["data-testid"],role:b,children:[c&&r(Ga,{$sizeType:d,$type:n,children:(()=>{if(n&&u)return u;switch(n){case"success":return r(A,{"aria-hidden":!0});case"warning":return r(z,{"aria-hidden":!0});case"error":return r(T,{"aria-hidden":!0});case"info":case"description":return r(I,{"aria-hidden":!0});default:return null}})()}),e(Xa,{children:[v&&e(Qa,{$sizeType:d,$type:n,type:"button","aria-expanded":p,"aria-controls":F,onClick:()=>y(!p),children:["Show ",p?"less":"more",r(es,{$expanded:p})]}),e(Ka,{id:F,$maxCollapsedHeight:E()?h:void 0,$showMore:p,$hasActionLink:!!a,inert:$a(!!h&&!p),children:[r(Ja,{ref:$,$type:n,$sizeType:d,children:i}),a?e(qa,Object.assign({"data-testid":"action-link",$type:n,$sizeType:d,underlineStyle:"none"},a,{children:[a.children,l||r(B,{})]})):null]})]})]})}))`
    width: 100%;
    user-select: none;
`,xs=F.div`
    padding: 0 1rem;
    padding-top: 0.6875rem;
    padding-bottom: ${e=>e.$isFinalItem?"0.6875rem":"0.5rem"};
    background-color: ${so.bg};
    ${La({textSize:"body-md"})}

    ${e=>e.$disabled?C`
                color: ${so["text-disabled"]};
            `:e.$selected?C`
                color: ${so["text-selected"]};
            `:C`
                color: ${so.text};
            `}
`,ws=F(Ua.BodyMD)`
    color: ${e=>e.$disabled?so["text-disabled"]:so["text-error"]};
`,$s=F(ss)`
    color: ${e=>e.$disabled?so["text-disabled"]:so["text-error"]};
`,Fs=F((({type:e,active:t=!1,disabled:n,className:o})=>{let i;switch(e){case"checkbox":i=r(t?W:_,{});break;case"radio":i=r(t?L:R,{});break;case"tick":i=r(N,{});break;case"cross":i=r(j,{});break;default:i=null}return r(rs,{className:o,$active:t,$disabled:n,"aria-hidden":!0,children:i})}))`
    ${e=>e.$disabled?e.$selected?C`
                    color: ${so["icon-selected-disabled"]};
                `:C`
                    color: ${so["icon-disabled-subtle"]};
                `:e.$selected?C`
                color: ${so["icon-selected"]};
            `:C`
            color: ${so["icon-subtle"]};
        `};
`,Cs=F.button`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: ${go["spacing-24"]};
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
                background-color: ${so["bg-hover-neutral"]};
            `}
    }
`,Es=o.forwardRef(((e,t)=>{var{children:n,focusHighlight:o=!0,focusOutline:i="none",type:a="button"}=e,s=ae(e,["children","focusHighlight","focusOutline","type"]);return r(Cs,Object.assign({ref:t,$outline:i,$highlight:o,type:a},s,{children:n}))})),Ss=F.div`
    overflow: hidden;

    ${bo.MaxWidth.xxs} {
        max-width: 100%;
    }
`,Ds=F.div`
    position: relative;
    width: 100%;
    padding: ${go["spacing-8"]} ${go["spacing-20"]}
        ${go["spacing-24"]} ${go["spacing-20"]};
    display: flex;
    flex-direction: column;
    background: ${so.bg};
    border: ${uo["width-010"]} ${uo.solid} ${so.border};
    border-radius: ${ho.sm};
`,ks=F.div`
    display: flex;
    align-items: center;
    justify-content: space-between;

    ${bo.MaxWidth.xxs} {
        flex-direction: column;
        width: 100%;
    }
`,Bs=F.div`
    display: flex;
    justify-content: flex-end;
    margin-top: ${go["spacing-16"]};
    gap: ${go["spacing-8"]};

    ${bo.MaxWidth.xxs} {
        flex-direction: column-reverse; // FIXME: this breaks tab focus
        margin-top: ${go["spacing-32"]};
    }
`,Ts=F.div`
    display: flex;
    align-items: center;
    margin-right: ${go["spacing-32"]};

    ${bo.MaxWidth.xxs} {
        margin-right: 0;
        width: 100%;
    }
`,zs=F.div`
    display: flex;
    gap: ${go["spacing-8"]};

    ${bo.MaxWidth.lg} {
        flex-direction: column;
    }

    ${bo.MaxWidth.xxs} {
        flex-direction: row;
        width: 100%;
    }
`,Is=F.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    ${bo.MaxWidth.xxs} {
        width: 6rem;
    }
`,As=F(Es)`
    width: 5rem;
    padding: ${go["spacing-16"]} 0;
    color: ${so.icon};

    svg {
        height: 1rem;
        width: 1rem;
    }

    &:hover {
        color: ${so["icon-hover"]};
    }
`,Os=F(Ua.BodyBL)`
    flex-shrink: 0;
    width: 1.5rem;
    text-align: center;
`,Ms=F(jo)`
    height: calc(3rem - 2px);
    width: 5rem;
    display: flex;
    align-items: center;
    justify-content: center;

    ${bo.MaxWidth.xxs} {
        width: 100%;
    }
`,Hs=F(Wo)`
    text-align: center;
    width: 100%;

    &:focus::placeholder {
        color: transparent;
    }
`,Rs=F((n=>{var{type:o="checkbox",indicator:i,checked:l,styleType:d="default",children:c,childrenMaxLines:u,subLabel:h,disabled:m,error:f,name:p,id:y,className:v,compositeSection:x,removable:w,focusableWhenDisabled:$,useContentWidth:F,onRemove:C,onChange:E,"data-testid":S,"aria-describedby":B}=n,T=ae(n,["type","indicator","checked","styleType","children","childrenMaxLines","subLabel","disabled","error","name","id","className","compositeSection","removable","focusableWhenDisabled","useContentWidth","onRemove","onChange","data-testid","aria-describedby"]);const{collapsible:z=!0,errors:I,children:A,initialExpanded:O}=x||{},[M,H]=s(l),[R,L]=s(!!O),j=b((()=>{const e=Array.isArray(I)&&(null==I?void 0:I.length)>0,r=!Array.isArray(I)&&!!I;return e||r}),[I]),[_]=s(Fi.generate()),W=y?`${y}`:`tg-${_}`,N=a(null),P=!!m&&!!$,Y=!!m&&!$,V=!!m;g((()=>{H(l)}),[l]),g((()=>{M&&L(null==O||O)}),[M]);const U=e=>{if(V)e.preventDefault();else if(E)E(e);else switch(o){case"checkbox":H((e=>!e));break;case"radio":case"yes":case"no":M||H(!0)}},Z=()=>{m||L(!R)},G=()=>{m||!C||C()},q=()=>{var e;null===(e=null==N?void 0:N.current)||void 0===e||e.click()},X=e=>{e.stopPropagation()},K=()=>{let e;switch(o){case"yes":e="tick";break;case"no":e="cross";break;case"checkbox":case"radio":e=o}return r(Fs,{type:e,active:M,disabled:m,$selected:M,$disabled:m})},J=()=>{if(!h)return null;let e;return e="function"==typeof h?h():h,r(hs,{"data-id":"toggle-sublabel",id:`${W}-sublabel`,"aria-hidden":!0,children:e})},Q=n=>e(t,{children:[r(ws,{weight:"semibold",$disabled:m,children:"Error"}),r($s,{$disabled:m,children:null==n?void 0:n.map(((e,t)=>r("li",{id:`${W}-error-list-item-${t}`,children:r(ws,{weight:"semibold",$disabled:m,children:e})},t)))})]});return e(ls,{$selected:M,$disabled:m,className:v,$styleType:d,$error:f,$indicator:i,$useContentWidth:F,id:y,"data-testid":S,children:[(()=>{const t=["string"==typeof h?`${W}-sublabel`:null,B].filter(Boolean).join(" ")||void 0;return e(ms,{id:`${W}-header-container`,$disabled:m,$error:f,$selected:M,$indicator:i,$styleType:d,children:[r(bs,{$addPadding:w,children:e(cs,{id:`${W}-input-container`,onClick:q,children:[r(ds,Object.assign({ref:N,name:p,id:`${W}-input`,type:"checkbox"===o?"checkbox":"radio","data-testid":"toggle-input",disabled:Y,"aria-disabled":P,$disabledVisual:m,onChange:U,onClick:X,checked:M,tabIndex:P?0:void 0,"aria-describedby":t},T)),i&&K(),e(us,{$selected:M,$disabled:m,children:[r(gs,{htmlFor:`${W}-input`,"data-testid":"toggle-label",id:`${W}-label`,$maxLines:u,$selected:M,children:c}),h&&J()]})]})}),w&&r(fs,{type:"button",$disabled:m,onClick:G,id:`${W}-remove-button`,children:"Remove"})]})})(),A&&e("div",{children:[(!z||R)&&r(xs,{"data-id":"toggle-composite-children",$isFinalItem:!z,$disabled:m,children:A}),z&&!R&&j&&r(ys,{$disabled:m,onClick:Z,id:`${W}-error-alert`,children:r(vs,{type:m?"description":"error",className:v,showIcon:!0,children:Array.isArray(I)?Q(I):I})}),z&&e(ps,{$paddingTopRequired:!R&&!j,disabled:m,onClick:Z,"data-testid":R?"collapse-button":"expand-button",children:[R?"Show less":"Show more",r(R?k:D,{"aria-hidden":!0})]})]})]})}))`
    min-width: 5rem;
    flex: 1;
`,Ls=F(Ra.Small)`
    width: 7rem;

    ${bo.MaxWidth.sm} {
        flex: 1;
    }

    ${bo.MaxWidth.xxs} {
        width: 100%;
    }
`;var js,_s,Ws;!function(e){e.HOUR_UP="hour-up",e.HOUR_DOWN="hour-down",e.MINUTE_UP="minute-up",e.MINUTE_DOWN="minute-down"}(js||(js={})),function(e){e.HOUR="hour",e.MINUTE="minute"}(_s||(_s={})),function(e){e.AM="am",e.PM="pm"}(Ws||(Ws={}));const Ns=({id:t,value:n,show:o,format:i,onChange:l,onCancel:d})=>{const c=qo.getTimeValues(i,n),[u,h]=s(c.hour),[b,f]=s(c.minute),[p,y]=s(c.period),v=a(null),x=a(null);g((()=>{if(o&&v.current&&v.current.focus({preventScroll:!0}),o){const{hour:e,minute:r,period:t}=qo.getTimeValues(i,n);h(e),f(r),y(t)}}),[o,n,i]),g((()=>{const e=v.current,r=x.current;return e&&e.addEventListener("keydown",w),r&&r.addEventListener("keydown",w),()=>{e&&e.removeEventListener("keydown",w),r&&r.removeEventListener("keydown",w)}}),[]);const w=e=>{["Digit0","Digit1","Digit2","Digit3","Digit4","Digit5","Digit6","Digit7","Digit8","Digit9","Tab","Backspace","Delete","ArrowLeft","ArrowRight","ArrowUp","ArrowDown"].includes(e.code)||["Backspace","0","1","2","3","4","5","6","7","8","9"].includes(e.key)||e.preventDefault()},$=m((e=>{switch(e.currentTarget.name){case js.MINUTE_UP:f(qo.updateMinutes(b,"add"));break;case js.MINUTE_DOWN:f(qo.updateMinutes(b,"minus"));break;case js.HOUR_UP:h(qo.updateHours(u,"add"));break;case js.HOUR_DOWN:h(qo.updateHours(u,"minus"))}}),[u,b]),F=e=>{e.target.select()},C=e=>{const r=e.target.value;switch(e.target.name){case _s.HOUR:r.length<=2&&h(r);break;case _s.MINUTE:r.length<=2&&f(r)}},E=e=>{const r=parseInt(e.target.value);if(!isNaN(r))switch(e.target.name){case _s.HOUR:{const t=r>23||r<0?c.hour:qo.convertHourTo12HourFormat(e.target.value);h(t);break}case _s.MINUTE:{const t=r>59||r<0?c.minute:e.target.value;f(Zo.padValue(t));break}}},S=e=>{switch(e.target.name){case Ws.AM:y(Go.AM);break;case Ws.PM:y(Go.PM)}},B=e=>t?`${t}-${e}`:e;return r(Ss,{children:e(Ds,{"data-testid":B("timepicker-dropdown"),inert:$a(!o),children:[e(ks,{children:[e(Ts,{children:[e(Is,{children:[r(As,{"aria-label":"increase hour",name:js.HOUR_UP,tabIndex:-1,onClick:$,"data-testid":B("hour-increment-button"),children:r(k,{})}),r(Ms,{children:r(Hs,{"aria-label":"hour",type:"number",name:_s.HOUR,id:"hour",maxLength:2,pattern:"[0-9]{2}",ref:v,value:u,onFocus:F,onChange:C,onBlur:E,min:1,max:12,placeholder:"HH","data-testid":B("hour-input")})}),r(As,{"aria-label":"decrease hour",name:js.HOUR_DOWN,tabIndex:-1,onClick:$,"data-testid":B("hour-decrement-button"),children:r(D,{})})]}),r(Os,{children:":"}),e(Is,{children:[r(As,{"aria-label":"increase minute",name:js.MINUTE_UP,tabIndex:-1,onClick:$,"data-testid":B("minute-increment-button"),children:r(k,{})}),r(Ms,{children:r(Hs,{"aria-label":"minute",type:"number",name:_s.MINUTE,id:"minute",maxLength:2,pattern:"[0-9]{2}",ref:x,value:b,onChange:C,onBlur:E,onFocus:F,min:0,max:59,placeholder:"MM","data-testid":B("minute-input")})}),r(As,{"aria-label":"decrease minute",name:js.MINUTE_DOWN,tabIndex:-1,onClick:$,"data-testid":B("minute-decrement-button"),children:r(D,{})})]})]}),e(zs,{children:[r(Rs,{checked:p===Go.AM,name:Ws.AM,type:"radio",onChange:S,"data-testid":B("am-toggle"),"aria-label":"AM",children:"AM"}),r(Rs,{checked:p===Go.PM,name:Ws.PM,type:"radio",onChange:S,"data-testid":B("pm-toggle"),"aria-label":"PM",children:"PM"})]})]}),e(Bs,{children:[r(Ls,{type:"button",styleType:"secondary",onClick:d,"data-testid":B("cancel-button"),children:"Cancel"}),r(Ls,{type:"button",onClick:()=>{let e;e="24hr"===i?qo.convertTo24HourFormat({hour:u,minute:b,period:p}):`${u}:${b}${p}`,l(e)},disabled:""===u||""===b,"data-testid":B("confirm-button"),children:"Done"})]})]})})},Ps=e=>"small"===e?2.5:3;F.div`
    position: relative;
    width: 100%;
    ${e=>{const r=Ps(e.$variant);return C`
            min-height: ${r}rem;
            height: ${r}rem; // Need this to persist the height when expanding or collapsing list
        `}}
`;const Ys=C`
    display: flex;
    position: relative;
    align-items: center;
    justify-content: space-between;
    padding: 0 ${go["spacing-16"]};
    // exclude top and bottom borders
    height: calc(${e=>Ps(e.$variant)}rem - 2px);
    width: 100%;
    border-radius: ${ho.sm};
    border: none;
    background: transparent;

    &:focus,
    &:active {
        outline: none;
    }

    &:focus-visible {
        outline: 2px solid ${so["border-focus"]};
    }
`,Vs=F.button`
    ${Ys}
    cursor: pointer;
`;F.div`
    ${Ys}
`;const Us=E`
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
    border: ${uo["width-010"]} ${uo.solid} ${so.border};
    border-radius: ${ho.sm};
    background: ${so.bg};
    overflow: hidden;

    &:focus-within {
        border-color: ${so["border-focus"]};
        box-shadow: 0px 0px 4px 0px
            rgb(from ${so["border-focus"]} r g b / 50%) inset; // TODO: confirm shadow
    }

    ${e=>e.$expanded?C`
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                z-index: 2;
            `:C`
                animation: ${Us} 0.5s ease-in-out;
            `}

    ${e=>e.$disabled?C`
                background: ${so["bg-disabled"]};

                ${Vs} {
                    cursor: not-allowed;
                }

                &:focus-within {
                    border-color: ${so.border};
                    box-shadow: none;
                }
            `:e.$readOnly?C`
                border: none;
                background: transparent !important;

                ${Vs} {
                    padding: 0;
                }

                &:focus-within {
                    border: none;
                    box-shadow: none;
                }
            `:e.$error?C`
                border-color: ${so["border-error"]};

                &:focus-within {
                    border-color: ${so["border-error"]};
                    box-shadow: 0px 0px 4px 0px
                        rgb(from ${so["border-error"]} r g b / 50%) inset; // TODO: confirm shadow
                }
            `:void 0}
`,F.div`
    transform: rotate(${e=>e.$expanded?180:0}deg);
    transition: transform ${co["duration-250"]} ${co["ease-default"]};
    margin-left: ${go["spacing-16"]};
`,F(D)`
    color: ${so.icon};
`,F.div`
    height: 1px;
    background: ${so.border};
    margin: 0 ${go["spacing-8"]};
`,F.div`
    display: flex;
    flex: 1;
    word-break: break-all;
    ${e=>{if(e.$disabled)return C`
                color: ${so["text-disabled"]};
            `}}
`;var Zs;F(F.div`
    ${e=>"small"===e.$variant?lo["body-md-regular"]:lo["body-baseline-regular"]}
    text-align: left;
    ${e=>{if("middle"!==e.$truncateType)return C`
                    ${ja(1)}
                `}}
    overflow: hidden;
`)`
    color: ${so["text-subtler"]};
`,function(e){e.Ready="overlay-context-ready",e.Change="overlay-context-change"}(Zs||(Zs={}));const Gs=e=>"right"===e?"bottom-end":"bottom-start",qs=f({elementWidth:0,styles:{},setFloatingRef:()=>{},getFloatingProps:()=>({})}),Xs=({enabled:n,isOpen:o,onOpen:i,onClose:l,onDismiss:d,renderElement:c,renderDropdown:u,customZIndex:h,clickToToggle:m=!1,offset:b=0,alignment:f="left",fitAvailableHeight:y,rootNode:v,positionRef:x})=>{var w;const $=p(S),F=mo["sm-max"]({theme:$}),C=a(null),{width:E=0}=ya({targetRef:null!=x?x:C,handleHeight:!1}),D={name:"center",fn:({x:e,rects:r})=>{const t=0===e||e+r.floating.width===window.innerWidth,n=window.innerWidth<F;return{x:t&&n?(window.innerWidth-r.floating.width)/2:e}}},{refs:k,floatingStyles:B,context:T}=Y({open:o,onOpenChange:(e,r,t)=>{"escape-key"===t?null==d||d():e&&!o?null==i||i():!e&&o&&(null==l||l(t))},whileElementsMounted:V,placement:Gs(f),middleware:[U(b),Z(),G({limiter:q()}),X({apply({availableHeight:e,elements:r}){!y||e>=r.floating.scrollHeight?r.floating.style.setProperty("--available-height",""):r.floating.style.setProperty("--available-height",`${Math.max(0,e)}px`)}}),D]}),z=(()=>{const[e,r]=s(void 0),t=P();return g((()=>{if(!t)return void r(void 0);const e=e=>{r(e.zIndex)};return t.events.on(Zs.Change,e),t.events.emit(Zs.Ready),()=>t.events.off(Zs.Change,e)}),[t]),e})(),{isMounted:I,styles:A}=K(T,{initial:{opacity:0},open:{opacity:1},duration:300}),O=J(T,{enabled:n,toggle:m,keyboardHandlers:m}),M=Q(T,{enabled:n}),{getReferenceProps:H,getFloatingProps:R}=ee([O,M]),L={elementWidth:E,styles:Object.assign(Object.assign(Object.assign({},A),B),{zIndex:null!==(w=null!=h?h:z)&&void 0!==w?w:50}),setFloatingRef:k.setFloating,getFloatingProps:R};return e(t,{children:[r("div",Object.assign({ref:e=>{C.current=e,k.setReference(e)}},H(),{children:c()})),I&&r(re,{root:v,children:r(te,{context:T,modal:!1,initialFocus:-1,returnFocus:!1,children:r(qs.Provider,{value:L,children:u(L)})})})]})},Ks=t=>{var{id:n,disabled:o=!1,error:i,value:l,format:d="24hr",readOnly:c,onChange:u,onFocus:h,onBlur:m,alignment:b="left",dropdownZIndex:f,dropdownRootNode:p,"aria-labelledby":y,"aria-describedby":v,"aria-invalid":x}=t,w=ae(t,["id","disabled","error","value","format","readOnly","onChange","onFocus","onBlur","alignment","dropdownZIndex","dropdownRootNode","aria-labelledby","aria-describedby","aria-invalid"]);const[$,F]=s(!1),[C,E]=s("none"),[S,D]=s(""),[k,B]=s(""),[T,z]=s(!1),I=!c&&!o,A=a(null),[O]=s((()=>Fi.generate())),M=`${O}-start-label`,H=`${O}-end-label`,R=e=>Fa(y,"start"===e?M:H),L=()=>Fa(v);g((()=>{l&&(D(l.start),B(l.end))}),[l]);const j=e=>{I&&(T||$||null==h||h(),z(!0),E(e),F(!0))},_=e=>{var r,t;const n=!!(null==e?void 0:e.keepFocus),o=null!==(r=null==e?void 0:e.triggerBlur)&&void 0!==r?r:!n;F(!1),E("none"),z(n),o&&(null==m||m()),n&&(null===(t=A.current)||void 0===t||t.focus())},W=e=>{var r,t,n;if(!T||$)return;const o=e.relatedTarget,i=(null===(r=null==o?void 0:o.matches)||void 0===r?void 0:r.call(o,"[data-floating-ui-focusable]"))||(null===(t=null==o?void 0:o.matches)||void 0===t?void 0:t.call(o,"[data-floating-ui-focus-guard]"));!(!o||!(null===(n=A.current)||void 0===n?void 0:n.contains(o)))||i||(z(!1),null==m||m())},N=e=>{D(e),null==u||u({start:e,end:k}),E("end"),F(!0),z(!0)},P=e=>{B(e),null==u||u({start:S,end:e}),""===S?(E("start"),F(!0),z(!0)):_({keepFocus:!0})};return r(Po,Object.assign({id:n},w,{children:r(Xs,{enabled:I,isOpen:$,renderElement:()=>r(Yo,{ref:A,tabIndex:-1,onBlur:W,"data-testid":"timepicker-container",role:"group",$disabled:o,$error:i,$readOnly:c,$focused:T,children:e(Ao,{error:i,currentActive:C,children:[r(Vo,{onFocus:()=>j("start"),onClick:()=>j("start"),readOnly:!0,placeholder:"From",value:qo.formatDisplayValue(S,d),"data-testid":w["data-testid"]?`${w["data-testid"]}-timepicker-selector-from`:"timepicker-selector-from",role:"combobox","aria-expanded":!o&&!c&&$,"aria-invalid":i||x,"aria-disabled":o,"aria-readonly":c,"aria-labelledby":R("start"),"aria-describedby":L()}),r(Vo,{onClick:()=>j("end"),readOnly:!0,placeholder:"To",value:qo.formatDisplayValue(k,d),"data-testid":w["data-testid"]?`${w["data-testid"]}-timepicker-selector-to`:"timepicker-selector-to",role:"combobox","aria-expanded":!o&&!c&&$,"aria-invalid":i||x||void 0,"aria-disabled":o||void 0,"aria-readonly":c||void 0,"aria-labelledby":R("end"),"aria-describedby":L()})]})}),renderDropdown:({styles:t,setFloatingRef:o,getFloatingProps:i})=>$?e("div",Object.assign({ref:o,style:t,role:"dialog","aria-label":"start"===C?"Selecting for: Start time":"end"===C?"Selecting for: End time":void 0},i(),{children:["start"===C&&r(Ns,{id:n?`${n}-start`:void 0,show:!0,value:S,format:d,onCancel:()=>_({keepFocus:!0}),onChange:N}),"end"===C&&r(Ns,{id:n?`${n}-end`:void 0,show:!0,value:k,format:d,onCancel:()=>_({keepFocus:!1}),onChange:P})]}),C):null,onClose:()=>_({keepFocus:!1}),onDismiss:()=>_({keepFocus:!0}),clickToToggle:!1,offset:8,alignment:b,customZIndex:f,rootNode:p})}))};F.div`
    margin-bottom: ${go["spacing-8"]};
`,F.label`
    color: ${so["text-subtle"]};
    display: inline-block;

    ${lo["form-label"]}
    ${La()}
    font-weight: ${lo.Spec["weight-semibold"]};
`;const Js=F(T)`
    height: 1lh;
    width: 1em;
    flex-shrink: 0;
    color: ${so["icon-error-strong"]};
`,Qs=F.div`
    ${lo["body-sm-semibold"]}
    display: flex;
    gap: ${go["spacing-4"]};
    margin-top: ${go["spacing-8"]};
`,el=F.p`
    color: ${so["text-error"]};
    margin-bottom: 0;
    outline: none;
`;F.span`
    ${lo["form-description"]}
    color: ${so["text-subtler"]};
    display: block;
`,F(Wo)`
    width: 100%;
    height: calc(3rem - 2px); // exclude top and bottom borders

    ${e=>"no-border"!==e.$styleType&&C`
            padding-left: ${e.$visuallyReadOnly?0:go["spacing-16"]};
            padding-right: ${e.$visuallyReadOnly||e.$showClear?0:go["spacing-16"]};
        `}
`;const rl=F(No)`
    height: auto;
    padding: ${go["spacing-12"]} ${go["spacing-16"]};

    cursor: pointer;
    color: ${so.icon};

    ${e=>"no-border"===e.$styleType&&C`
            margin-right: -${go["spacing-12"]};
        `}
`,tl=F(j)`
    height: 1.25rem;
    width: 1.25rem;
    vertical-align: middle;
`;F.div`
    display: flex;
    width: 100%;
`,F(jo)`
    display: flex;
    align-items: center;
    width: 100%;
`;const nl=F(rl)`
    position: absolute;
    right: 0;
    padding-left: ${go["spacing-8"]};
    margin-right: 0;
`;F(_o)`
    height: 3rem;
`,F.button`
    appearance: none;
    border: 0;
    background: transparent;
    display: flex;
    flex: 1;
    color: ${so.text};

    &:focus,
    &:active {
        outline: none;
    }

    &:focus-visible {
        outline: 2px solid ${so["border-focus"]};
        border-radius: 4px;
    }

    &:disabled {
        cursor: not-allowed;
    }
`;const ol=F.div`
    font-weight: ${e=>e.$bold?lo.Spec["weight-semibold"]:lo.Spec["weight-regular"]};

    ${e=>e.$disabled?C`
                color: ${so["text-disabled"]};
            `:e.$selected?C`
                color: ${so["text-selected"]};
            `:C`
                color: ${so.text};
            `}
    width: 100%;

    ${e=>"end"===e.$truncateType&&ja(e.$maxLines||2)}
    overflow-wrap: break-word;
`,il=F.div`
    color: ${so["text-subtlest"]};
    width: 100%;

    ${e=>"end"===e.$truncateType&&ja(e.$maxLines||2)}
    overflow-wrap: break-word;

    ${e=>"next-line"===e.$labelDisplayType?C`
                    ${lo["body-md-semibold"]}
                `:C`
                    ${lo["body-baseline-regular"]}
                `}
`,al=F.span`
    font-weight: ${lo.Spec["weight-semibold"]};
`,sl=F.div`
    text-align: left;
    width: 100%;
    overflow: hidden;
    overflow-wrap: break-word;

    ${e=>"small"===e.$variant?lo["body-md-regular"]:lo["body-baseline-regular"]}

    ${e=>{switch(e.$labelDisplayType){case"next-line":return C`
                    display: flex;
                    flex-direction: column;
                `;case"inline":return C`
                    ${ol} {
                        display: inline;
                    }

                    ${il} {
                        display: inline;
                        margin-left: 0.5rem;
                    }
                `}}}
`,ll=F.div`
    display: inline-block;
    width: ${e=>1===e.$maxLines?50:100}%;
    height: 1lh;
    word-break: break-all;
    overflow: hidden;
`,dl=F.div`
    display: inline-block;
    width: ${e=>1===e.$maxLines?50:100}%;
    height: 1lh;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    direction: rtl;
    text-align: right;
`,cl=({bold:n,displayType:o="inline",label:i,searchTerm:a,maxLines:s=2,selected:l,disabled:d,sublabel:c,truncationType:u="middle",variant:g="default"})=>{const h=p(S),f="small"===g?lo.Spec["body-size-md"]({theme:h}):lo.Spec["body-size-baseline"]({theme:h}),y=lo.Spec["font-family"]({theme:h}),{ref:v,width:x}=ya(),w=m((e=>{if("inline"!==o||!x)return!1;return Zo.getTextWidth(e,`${f} '${y}'`)>x*s-50}),[x,o,f,y,s]),$=b((()=>w(i)),[w,i]),F=b((()=>c&&w(c)),[w,c]),C=n=>{if(!a)return n;const o=a.toLowerCase().trim(),s=n.toLowerCase().indexOf(o),l=s+a.length;return-1===s?n:e(t,{children:[i.slice(0,s),r(al,{$variant:g,children:i.slice(s,l)}),i.slice(l)]})},E=n=>e(t,{children:[r(ll,{$maxLines:s,"aria-hidden":!0,children:C(n)}),r(dl,{$maxLines:s,"aria-hidden":!0,children:C(n)})]});return e(sl,{ref:v,$labelDisplayType:$||F?"next-line":o,$variant:g,children:[r(ol,{"aria-label":i,$bold:n,$maxLines:s,$selected:l,$disabled:d,$truncateType:u,children:"middle"===u&&$?E(i):C(i)}),c&&r(il,{"aria-label":c,$maxLines:s,$truncateType:u,$labelDisplayType:o,children:"middle"===u&&F?E(c):c})]})};var ul=Pr;var gl=function(e){var r=this.__data__,t=r.delete(e);return this.size=r.size,t};var hl=function(e){return this.__data__.get(e)};var ml=function(e){return this.__data__.has(e)},bl=Pr,fl=Yr,pl=ct;var yl=function(e,r){var t=this.__data__;if(t instanceof bl){var n=t.__data__;if(!fl||n.length<199)return n.push([e,r]),this.size=++t.size,this;t=this.__data__=new pl(n)}return t.set(e,r),this.size=t.size,this},vl=Pr,xl=function(){this.__data__=new ul,this.size=0},wl=gl,$l=hl,Fl=ml,Cl=yl;function El(e){var r=this.__data__=new vl(e);this.size=r.size}El.prototype.clear=xl,El.prototype.delete=wl,El.prototype.get=$l,El.prototype.has=Fl,El.prototype.set=Cl;var Sl=El;var Dl=ct,kl=function(e){return this.__data__.set(e,"__lodash_hash_undefined__"),this},Bl=function(e){return this.__data__.has(e)};function Tl(e){var r=-1,t=null==e?0:e.length;for(this.__data__=new Dl;++r<t;)this.add(e[r])}Tl.prototype.add=Tl.prototype.push=kl,Tl.prototype.has=Bl;var zl=function(e,r){return e.has(r)},Il=Tl,Al=function(e,r){for(var t=-1,n=null==e?0:e.length;++t<n;)if(r(e[t],t,e))return!0;return!1},Ol=zl;var Ml=function(e,r,t,n,o,i){var a=1&t,s=e.length,l=r.length;if(s!=l&&!(a&&l>s))return!1;var d=i.get(e),c=i.get(r);if(d&&c)return d==r&&c==e;var u=-1,g=!0,h=2&t?new Il:void 0;for(i.set(e,r),i.set(r,e);++u<s;){var m=e[u],b=r[u];if(n)var f=a?n(b,m,u,r,e,i):n(m,b,u,e,r,i);if(void 0!==f){if(f)continue;g=!1;break}if(h){if(!Al(r,(function(e,r){if(!Ol(h,r)&&(m===e||o(m,e,t,n,i)))return h.push(r)}))){g=!1;break}}else if(m!==b&&!o(m,b,t,n,i)){g=!1;break}}return i.delete(e),i.delete(r),g};var Hl=function(e){var r=-1,t=Array(e.size);return e.forEach((function(e,n){t[++r]=[n,e]})),t};var Rl=he.Uint8Array,Ll=Er,jl=Ml,_l=Hl,Wl=function(e){var r=-1,t=Array(e.size);return e.forEach((function(e){t[++r]=e})),t},Nl=me?me.prototype:void 0,Pl=Nl?Nl.valueOf:void 0;var Yl=function(e,r,t,n,o,i,a){switch(t){case"[object DataView]":if(e.byteLength!=r.byteLength||e.byteOffset!=r.byteOffset)return!1;e=e.buffer,r=r.buffer;case"[object ArrayBuffer]":return!(e.byteLength!=r.byteLength||!i(new Rl(e),new Rl(r)));case"[object Boolean]":case"[object Date]":case"[object Number]":return Ll(+e,+r);case"[object Error]":return e.name==r.name&&e.message==r.message;case"[object RegExp]":case"[object String]":return e==r+"";case"[object Map]":var s=_l;case"[object Set]":var l=1&n;if(s||(s=Wl),e.size!=r.size&&!l)return!1;var d=a.get(e);if(d)return d==r;n|=2,a.set(e,r);var c=jl(s(e),s(r),n,o,i,a);return a.delete(e),c;case"[object Symbol]":if(Pl)return Pl.call(e)==Pl.call(r)}return!1};var Vl=function(e,r){for(var t=-1,n=r.length,o=e.length;++t<n;)e[o+t]=r[t];return e},Ul=Vl,Zl=de;var Gl=function(e,r,t){var n=r(e);return Zl(e)?n:Ul(n,t(e))};var ql=function(e,r){for(var t=-1,n=null==e?0:e.length,o=0,i=[];++t<n;){var a=e[t];r(a,t,e)&&(i[o++]=a)}return i},Xl=function(){return[]},Kl=Object.prototype.propertyIsEnumerable,Jl=Object.getOwnPropertySymbols,Ql=Jl?function(e){return null==e?[]:(e=Object(e),ql(Jl(e),(function(r){return Kl.call(e,r)})))}:Xl;var ed=function(e,r){for(var t=-1,n=Array(e);++t<e;)n[t]=r(t);return n},rd=Ee,td=Se;var nd=function(e){return td(e)&&"[object Arguments]"==rd(e)},od=Se,id=Object.prototype,ad=id.hasOwnProperty,sd=id.propertyIsEnumerable,ld=nd(function(){return arguments}())?nd:function(e){return od(e)&&ad.call(e,"callee")&&!sd.call(e,"callee")},dd={exports:{}};var cd=function(){return!1};!function(e,r){var t=he,n=cd,o=r&&!r.nodeType&&r,i=o&&e&&!e.nodeType&&e,a=i&&i.exports===o?t.Buffer:void 0,s=(a?a.isBuffer:void 0)||n;e.exports=s}(dd,dd.exports);var ud=dd.exports,gd=/^(?:0|[1-9]\d*)$/;var hd=function(e,r){var t=typeof e;return!!(r=null==r?9007199254740991:r)&&("number"==t||"symbol"!=t&&gd.test(e))&&e>-1&&e%1==0&&e<r};var md=function(e){return"number"==typeof e&&e>-1&&e%1==0&&e<=9007199254740991},bd=Ee,fd=md,pd=Se,yd={};yd["[object Float32Array]"]=yd["[object Float64Array]"]=yd["[object Int8Array]"]=yd["[object Int16Array]"]=yd["[object Int32Array]"]=yd["[object Uint8Array]"]=yd["[object Uint8ClampedArray]"]=yd["[object Uint16Array]"]=yd["[object Uint32Array]"]=!0,yd["[object Arguments]"]=yd["[object Array]"]=yd["[object ArrayBuffer]"]=yd["[object Boolean]"]=yd["[object DataView]"]=yd["[object Date]"]=yd["[object Error]"]=yd["[object Function]"]=yd["[object Map]"]=yd["[object Number]"]=yd["[object Object]"]=yd["[object RegExp]"]=yd["[object Set]"]=yd["[object String]"]=yd["[object WeakMap]"]=!1;var vd=function(e){return pd(e)&&fd(e.length)&&!!yd[bd(e)]};var xd=function(e){return function(r){return e(r)}},wd={exports:{}};!function(e,r){var t=ce,n=r&&!r.nodeType&&r,o=n&&e&&!e.nodeType&&e,i=o&&o.exports===n&&t.process,a=function(){try{var e=o&&o.require&&o.require("util").types;return e||i&&i.binding&&i.binding("util")}catch(e){}}();e.exports=a}(wd,wd.exports);var $d=wd.exports,Fd=vd,Cd=xd,Ed=$d&&$d.isTypedArray,Sd=Ed?Cd(Ed):Fd,Dd=ed,kd=ld,Bd=de,Td=ud,zd=hd,Id=Sd,Ad=Object.prototype.hasOwnProperty;var Od=function(e,r){var t=Bd(e),n=!t&&kd(e),o=!t&&!n&&Td(e),i=!t&&!n&&!o&&Id(e),a=t||n||o||i,s=a?Dd(e.length,String):[],l=s.length;for(var d in e)!r&&!Ad.call(e,d)||a&&("length"==d||o&&("offset"==d||"parent"==d)||i&&("buffer"==d||"byteLength"==d||"byteOffset"==d)||zd(d,l))||s.push(d);return s},Md=Object.prototype;var Hd=function(e){var r=e&&e.constructor;return e===("function"==typeof r&&r.prototype||Md)};var Rd=function(e,r){return function(t){return e(r(t))}}(Object.keys,Object),Ld=Hd,jd=Rd,_d=Object.prototype.hasOwnProperty;var Wd=function(e){if(!Ld(e))return jd(e);var r=[];for(var t in Object(e))_d.call(e,t)&&"constructor"!=t&&r.push(t);return r},Nd=je,Pd=md;var Yd=function(e){return null!=e&&Pd(e.length)&&!Nd(e)},Vd=Od,Ud=Wd,Zd=Yd;var Gd=function(e){return Zd(e)?Vd(e):Ud(e)},qd=Gl,Xd=Ql,Kd=Gd;var Jd=function(e){return qd(e,Kd,Xd)},Qd=Object.prototype.hasOwnProperty;var ec=function(e,r,t,n,o,i){var a=1&t,s=Jd(e),l=s.length;if(l!=Jd(r).length&&!a)return!1;for(var d=l;d--;){var c=s[d];if(!(a?c in r:Qd.call(r,c)))return!1}var u=i.get(e),g=i.get(r);if(u&&g)return u==r&&g==e;var h=!0;i.set(e,r),i.set(r,e);for(var m=a;++d<l;){var b=e[c=s[d]],f=r[c];if(n)var p=a?n(f,b,c,r,e,i):n(b,f,c,e,r,i);if(!(void 0===p?b===f||o(b,f,t,n,i):p)){h=!1;break}m||(m="constructor"==c)}if(h&&!m){var y=e.constructor,v=r.constructor;y==v||!("constructor"in e)||!("constructor"in r)||"function"==typeof y&&y instanceof y&&"function"==typeof v&&v instanceof v||(h=!1)}return i.delete(e),i.delete(r),h},rc=or(he,"DataView"),tc=Yr,nc=or(he,"Promise"),oc=or(he,"Set"),ic=or(he,"WeakMap"),ac=Ee,sc=Ye,lc="[object Map]",dc="[object Promise]",cc="[object Set]",uc="[object WeakMap]",gc="[object DataView]",hc=sc(rc),mc=sc(tc),bc=sc(nc),fc=sc(oc),pc=sc(ic),yc=ac;(rc&&yc(new rc(new ArrayBuffer(1)))!=gc||tc&&yc(new tc)!=lc||nc&&yc(nc.resolve())!=dc||oc&&yc(new oc)!=cc||ic&&yc(new ic)!=uc)&&(yc=function(e){var r=ac(e),t="[object Object]"==r?e.constructor:void 0,n=t?sc(t):"";if(n)switch(n){case hc:return gc;case mc:return lc;case bc:return dc;case fc:return cc;case pc:return uc}return r});var vc=Sl,xc=Ml,wc=Yl,$c=ec,Fc=yc,Cc=de,Ec=ud,Sc=Sd,Dc="[object Arguments]",kc="[object Array]",Bc="[object Object]",Tc=Object.prototype.hasOwnProperty;var zc=function(e,r,t,n,o,i){var a=Cc(e),s=Cc(r),l=a?kc:Fc(e),d=s?kc:Fc(r),c=(l=l==Dc?Bc:l)==Bc,u=(d=d==Dc?Bc:d)==Bc,g=l==d;if(g&&Ec(e)){if(!Ec(r))return!1;a=!0,c=!1}if(g&&!c)return i||(i=new vc),a||Sc(e)?xc(e,r,t,n,o,i):wc(e,r,l,t,n,o,i);if(!(1&t)){var h=c&&Tc.call(e,"__wrapped__"),m=u&&Tc.call(r,"__wrapped__");if(h||m){var b=h?e.value():e,f=m?r.value():r;return i||(i=new vc),o(b,f,t,n,i)}}return!!g&&(i||(i=new vc),$c(e,r,t,n,o,i))},Ic=Se;var Ac=function e(r,t,n,o,i){return r===t||(null==r||null==t||!Ic(r)&&!Ic(t)?r!=r&&t!=t:zc(r,t,n,o,e,i))},Oc=Sl,Mc=Ac;var Hc=function(e,r,t,n){var o=t.length,i=o,a=!n;if(null==e)return!i;for(e=Object(e);o--;){var s=t[o];if(a&&s[2]?s[1]!==e[s[0]]:!(s[0]in e))return!1}for(;++o<i;){var l=(s=t[o])[0],d=e[l],c=s[1];if(a&&s[2]){if(void 0===d&&!(l in e))return!1}else{var u=new Oc;if(n)var g=n(d,c,l,e,r,u);if(!(void 0===g?Mc(c,d,3,n,u):g))return!1}}return!0},Rc=Me;var Lc=function(e){return e==e&&!Rc(e)},jc=Lc,_c=Gd;var Wc=function(e){for(var r=_c(e),t=r.length;t--;){var n=r[t],o=e[n];r[t]=[n,o,jc(o)]}return r};var Nc=function(e,r){return function(t){return null!=t&&(t[e]===r&&(void 0!==r||e in Object(t)))}},Pc=Hc,Yc=Wc,Vc=Nc;var Uc=function(e,r){return null!=e&&r in Object(e)},Zc=Bt,Gc=ld,qc=de,Xc=hd,Kc=md,Jc=zt;var Qc=function(e,r,t){for(var n=-1,o=(r=Zc(r,e)).length,i=!1;++n<o;){var a=Jc(r[n]);if(!(i=null!=e&&t(e,a)))break;e=e[a]}return i||++n!=o?i:!!(o=null==e?0:e.length)&&Kc(o)&&Xc(a,o)&&(qc(e)||Gc(e))},eu=Uc,ru=Qc;var tu=Ac,nu=Ht,ou=function(e,r){return null!=e&&ru(e,r,eu)},iu=Oe,au=Lc,su=Nc,lu=zt;var du=function(e){return function(r){return null==r?void 0:r[e]}},cu=Ot;var uu=du,gu=function(e){return function(r){return cu(r,e)}},hu=Oe,mu=zt;var bu=function(e){var r=Yc(e);return 1==r.length&&r[0][2]?Vc(r[0][0],r[0][1]):function(t){return t===e||Pc(t,e,r)}},fu=function(e,r){return iu(e)&&au(r)?su(lu(e),r):function(t){var n=nu(t,e);return void 0===n&&n===r?ou(t,e):tu(r,n,3)}},pu=function(e){return e},yu=de,vu=function(e){return hu(e)?uu(mu(e)):gu(e)};var xu=function(e){return"function"==typeof e?e:null==e?pu:"object"==typeof e?yu(e)?fu(e[0],e[1]):bu(e):vu(e)},wu=xu,$u=Yd,Fu=Gd;var Cu=function(e){return function(r,t,n){var o=Object(r);if(!$u(r)){var i=wu(t);r=Fu(r),t=function(e){return i(o[e],e,o)}}var a=e(r,t,n);return a>-1?o[i?r[a]:a]:void 0}};var Eu=/\s/;var Su=function(e){for(var r=e.length;r--&&Eu.test(e.charAt(r)););return r},Du=/^\s+/;var ku=function(e){return e?e.slice(0,Su(e)+1).replace(Du,""):e},Bu=Me,Tu=Be,zu=/^[-+]0x[0-9a-f]+$/i,Iu=/^0b[01]+$/i,Au=/^0o[0-7]+$/i,Ou=parseInt;var Mu=function(e){if("number"==typeof e)return e;if(Tu(e))return NaN;if(Bu(e)){var r="function"==typeof e.valueOf?e.valueOf():e;e=Bu(r)?r+"":r}if("string"!=typeof e)return 0===e?e:+e;e=ku(e);var t=Iu.test(e);return t||Au.test(e)?Ou(e.slice(2),t?2:8):zu.test(e)?NaN:+e},Hu=1/0;var Ru=function(e){return e?(e=Mu(e))===Hu||e===-1/0?17976931348623157e292*(e<0?-1:1):e==e?e:0:0===e?e:0};var Lu=function(e,r,t,n){for(var o=e.length,i=t+(n?1:-1);n?i--:++i<o;)if(r(e[i],i,e))return i;return-1},ju=xu,_u=function(e){var r=Ru(e),t=r%1;return r==r?t?r-t:r:0},Wu=Math.max;var Nu=le(Cu((function(e,r,t){var n=null==e?0:e.length;if(!n)return-1;var o=null==t?0:_u(t);return o<0&&(o=Wu(n+o,0)),Lu(e,ju(r),o)}))),Pu=Ac;var Yu=le((function(e,r){return Pu(e,r)}));function Vu(e){return()=>e}function Uu(e){e()}function Zu(e,r){return t=>e(r(t))}function Gu(e,r){return()=>e(r)}function qu(e,r){return t=>e(r,t)}function Xu(e){return void 0!==e}function Ku(){}function Ju(e,r){return r(e),e}function Qu(e,r){return r(e)}function eg(...e){return e}function rg(e,r){return e(1,r)}function tg(e,r){e(0,r)}function ng(e){e(2)}function og(e){return e(4)}function ig(e,r){return rg(e,qu(r,0))}function ag(e,r){const t=e(1,(e=>{t(),r(e)}));return t}function sg(e){let r,t;return n=>o=>{r=o,t&&clearTimeout(t),t=setTimeout((()=>{n(r)}),e)}}function lg(e,r){return e===r}function dg(e=lg){let r;return t=>n=>{e(r,n)||(r=n,t(n))}}function cg(e){return r=>t=>{e(t)&&r(t)}}function ug(e){return r=>Zu(r,e)}function gg(e){return r=>()=>{r(e)}}function hg(e,...r){const t=function(...e){return r=>e.reduceRight(Qu,r)}(...r);return(r,n)=>{switch(r){case 2:return void ng(e);case 1:return rg(e,t(n))}}}function mg(e,r){return t=>n=>{t(r=e(r,n))}}function bg(e){return r=>t=>{e>0?e--:r(t)}}function fg(e){let r,t=null;return n=>o=>{t=o,!r&&(r=setTimeout((()=>{r=void 0,n(t)}),e))}}function pg(...e){const r=new Array(e.length);let t=0,n=null;const o=Math.pow(2,e.length)-1;return e.forEach(((e,i)=>{const a=Math.pow(2,i);rg(e,(e=>{const s=t;t|=a,r[i]=e,s!==o&&t===o&&n&&(n(),n=null)}))})),e=>i=>{const a=()=>{e([i].concat(r))};t===o?a():n=a}}function yg(e){let r=e;const t=xg();return(e,n)=>{switch(e){case 0:r=n;break;case 1:n(r);break;case 4:return r}return t(e,n)}}function vg(e,r){return Ju(yg(r),(r=>ig(e,r)))}function xg(){const e=[];return(r,t)=>{switch(r){case 0:return void e.slice().forEach((e=>{e(t)}));case 2:return void e.splice(0,e.length);case 1:return e.push(t),()=>{const r=e.indexOf(t);r>-1&&e.splice(r,1)}}}}function wg(e){return Ju(xg(),(r=>ig(e,r)))}function $g(e,r=[],{singleton:t}={singleton:!0}){return{constructor:e,dependencies:r,id:Fg(),singleton:t}}const Fg=()=>Symbol();function Cg(...e){const r=xg(),t=new Array(e.length);let n=0;const o=Math.pow(2,e.length)-1;return e.forEach(((e,i)=>{const a=Math.pow(2,i);rg(e,(e=>{t[i]=e,n|=a,n===o&&tg(r,t)}))})),function(e,i){switch(e){case 2:return void ng(r);case 1:return n===o&&i(t),rg(r,i)}}}function Eg(e,r=lg){return hg(e,dg(r))}function Sg(...e){return function(r,t){switch(r){case 2:return;case 1:return function(...e){return()=>{e.map(Uu)}}(...e.map((e=>rg(e,t))))}}}var Dg=(e=>(e[e.DEBUG=0]="DEBUG",e[e.INFO=1]="INFO",e[e.WARN=2]="WARN",e[e.ERROR=3]="ERROR",e))(Dg||{});const kg={0:"debug",3:"error",1:"log",2:"warn"},Bg=$g((()=>{const e=yg(3);return{log:yg(((r,t,n=1)=>{var o;n>=(null!=(o=(typeof globalThis>"u"?window:globalThis).VIRTUOSO_LOG_LEVEL)?o:og(e))&&console[kg[n]]("%creact-virtuoso: %c%s %o","color: #0253b3; font-weight: bold","color: initial",r,t)})),logLevel:e}}),[],{singleton:!0});function Tg(e,r,t){return zg(e,r,t).callbackRef}function zg(e,r,t){const n=o.useRef(null);let i=e=>{};if(typeof ResizeObserver<"u"){const a=o.useMemo((()=>new ResizeObserver((r=>{const n=()=>{const t=r[0].target;null!==t.offsetParent&&e(t)};t?n():requestAnimationFrame(n)}))),[e]);i=e=>{e&&r?(a.observe(e),n.current=e):(n.current&&a.unobserve(n.current),n.current=null)}}return{callbackRef:i,ref:n}}function Ig(e,r,t,n,i,a,s,l,d){const c=o.useCallback((t=>{const o=function(e,r,t,n){const o=e.length;if(0===o)return null;const i=[];for(let a=0;a<o;a++){const o=e.item(a);if(void 0===o.dataset.index)continue;const s=parseInt(o.dataset.index),l=parseFloat(o.dataset.knownSize),d=r(o,t);if(0===d&&n("Zero-sized element, this should not happen",{child:o},Dg.ERROR),d===l)continue;const c=i[i.length-1];0===i.length||c.size!==d||c.endIndex!==s-1?i.push({endIndex:s,size:d,startIndex:s}):i[i.length-1].endIndex++}return i}(t.children,r,l?"offsetWidth":"offsetHeight",i);let d=t.parentElement;for(;!d.dataset.virtuosoScroller;)d=d.parentElement;const c="window"===d.lastElementChild.dataset.viewportType,u=s?l?s.scrollLeft:s.scrollTop:c?l?window.pageXOffset||document.documentElement.scrollLeft:window.pageYOffset||document.documentElement.scrollTop:l?d.scrollLeft:d.scrollTop,g=s?l?s.scrollWidth:s.scrollHeight:c?l?document.documentElement.scrollWidth:document.documentElement.scrollHeight:l?d.scrollWidth:d.scrollHeight,h=s?l?s.offsetWidth:s.offsetHeight:c?l?window.innerWidth:window.innerHeight:l?d.offsetWidth:d.offsetHeight;n({scrollHeight:g,scrollTop:Math.max(u,0),viewportHeight:h}),null==a||a(l?Ag("column-gap",getComputedStyle(t).columnGap,i):Ag("row-gap",getComputedStyle(t).rowGap,i)),null!==o&&e(o)}),[e,r,i,a,s,n]);return zg(c,t,d)}function Ag(e,r,t){return"normal"!==r&&!(null!=r&&r.endsWith("px"))&&t(`${e} was not resolved to pixel value correctly`,r,Dg.WARN),"normal"===r?0:parseInt(null!=r?r:"0",10)}function Og(e,r,t){const n=o.useRef(null),i=o.useCallback((t=>{if(null==t||!t.offsetParent)return;const o=t.getBoundingClientRect(),i=o.width;let a,s;if(r){const e=r.getBoundingClientRect(),t=o.top-e.top;s=e.height-Math.max(0,t),a=t+r.scrollTop}else s=window.innerHeight-Math.max(0,o.top),a=o.top+window.pageYOffset;n.current={offsetTop:a,visibleHeight:s,visibleWidth:i},e(n.current)}),[e,r]),{callbackRef:a,ref:s}=zg(i,!0,t),l=o.useCallback((()=>{i(s.current)}),[i,s]);return o.useEffect((()=>{if(r){r.addEventListener("scroll",l);const e=new ResizeObserver((()=>{requestAnimationFrame(l)}));return e.observe(r),()=>{r.removeEventListener("scroll",l),e.unobserve(r)}}return window.addEventListener("scroll",l),window.addEventListener("resize",l),()=>{window.removeEventListener("scroll",l),window.removeEventListener("resize",l)}}),[l,r]),a}const Mg=$g((()=>{const e=xg(),r=xg(),t=yg(0),n=xg(),o=yg(0),i=xg(),a=xg(),s=yg(0),l=yg(0),d=yg(0),c=yg(0),u=xg(),g=xg(),h=yg(!1),m=yg(!1),b=yg(!1);return ig(hg(e,ug((({scrollTop:e})=>e))),r),ig(hg(e,ug((({scrollHeight:e})=>e))),a),ig(r,o),{deviation:t,fixedFooterHeight:d,fixedHeaderHeight:l,footerHeight:c,headerHeight:s,horizontalDirection:m,scrollBy:g,scrollContainerState:e,scrollHeight:a,scrollingInProgress:h,scrollTo:u,scrollTop:r,skipAnimationFrameInResizeObserver:b,smoothScrollTargetReached:n,statefulScrollTop:o,viewportHeight:i}}),[],{singleton:!0}),Hg={lvl:0};function Rg(e,r){const t=e.length;if(0===t)return[];let{index:n,value:o}=r(e[0]);const i=[];for(let a=1;a<t;a++){const{index:t,value:s}=r(e[a]);i.push({end:t-1,start:n,value:o}),n=t,o=s}return i.push({end:1/0,start:n,value:o}),i}function Lg(e){return e===Hg}function jg(e,r){if(!Lg(e))return r===e.k?e.v:r<e.k?jg(e.l,r):jg(e.r,r)}function _g(e,r,t="k"){if(Lg(e))return[-1/0,void 0];if(Number(e[t])===r)return[e.k,e.v];if(Number(e[t])<r){const n=_g(e.r,r,t);return n[0]===-1/0?[e.k,e.v]:n}return _g(e.l,r,t)}function Wg(e,r,t){return Lg(e)?Jg(r,t,1):r===e.k?Gg(e,{k:r,v:t}):r<e.k?Qg(Gg(e,{l:Wg(e.l,r,t)})):Qg(Gg(e,{r:Wg(e.r,r,t)}))}function Ng(){return Hg}function Pg(e,r,t){if(Lg(e))return[];return function(e){return Rg(e,(({k:e,v:r})=>({index:e,value:r})))}(Ug(e,_g(e,r)[0],t))}function Yg(e,r){if(Lg(e))return Hg;const{k:t,l:n,r:o}=e;if(r===t){if(Lg(n))return o;if(Lg(o))return n;{const[r,t]=Kg(n);return Zg(Gg(e,{k:r,l:qg(n),v:t}))}}return Zg(Gg(e,r<t?{l:Yg(n,r)}:{r:Yg(o,r)}))}function Vg(e){return Lg(e)?[]:[...Vg(e.l),{k:e.k,v:e.v},...Vg(e.r)]}function Ug(e,r,t){if(Lg(e))return[];const{k:n,l:o,r:i,v:a}=e;let s=[];return n>r&&(s=s.concat(Ug(o,r,t))),n>=r&&n<=t&&s.push({k:n,v:a}),n<=t&&(s=s.concat(Ug(i,r,t))),s}function Zg(e){const{l:r,lvl:t,r:n}=e;if(n.lvl>=t-1&&r.lvl>=t-1)return e;if(t>n.lvl+1){if(Xg(r))return eh(Gg(e,{lvl:t-1}));if(!Lg(r)&&!Lg(r.r))return Gg(r.r,{l:Gg(r,{r:r.r.l}),lvl:t,r:Gg(e,{l:r.r.r,lvl:t-1})});throw new Error("Unexpected empty nodes")}if(Xg(e))return rh(Gg(e,{lvl:t-1}));if(Lg(n)||Lg(n.l))throw new Error("Unexpected empty nodes");{const r=n.l,o=Xg(r)?n.lvl-1:n.lvl;return Gg(r,{l:Gg(e,{lvl:t-1,r:r.l}),lvl:r.lvl+1,r:rh(Gg(n,{l:r.r,lvl:o}))})}}function Gg(e,r){return Jg(void 0!==r.k?r.k:e.k,void 0!==r.v?r.v:e.v,void 0!==r.lvl?r.lvl:e.lvl,void 0!==r.l?r.l:e.l,void 0!==r.r?r.r:e.r)}function qg(e){return Lg(e.r)?e.l:Zg(Gg(e,{r:qg(e.r)}))}function Xg(e){return Lg(e)||e.lvl>e.r.lvl}function Kg(e){return Lg(e.r)?[e.k,e.v]:Kg(e.r)}function Jg(e,r,t,n=Hg,o=Hg){return{k:e,l:n,lvl:t,r:o,v:r}}function Qg(e){return rh(eh(e))}function eh(e){const{l:r}=e;return Lg(r)||r.lvl!==e.lvl?e:Gg(r,{r:Gg(e,{l:r.r})})}function rh(e){const{lvl:r,r:t}=e;return Lg(t)||Lg(t.r)||t.lvl!==r||t.r.lvl!==r?e:Gg(t,{l:Gg(e,{r:t.l}),lvl:r+1})}function th(e,r){return!(!e||e.startIndex!==r.startIndex||e.endIndex!==r.endIndex)}function nh(e,r){return!(!e||e[0]!==r[0]||e[1]!==r[1])}const oh=$g((()=>({recalcInProgress:yg(!1)})),[],{singleton:!0});function ih(e,r,t){return e[ah(e,r,t)]}function ah(e,r,t,n=0){let o=e.length-1;for(;n<=o;){const i=Math.floor((n+o)/2),a=t(e[i],r);if(0===a)return i;if(-1===a){if(o-n<2)return i-1;o=i-1}else{if(o===n)return i;n=i+1}}throw new Error(`Failed binary finding record in array - ${e.join(",")}, searched for ${r}`)}function sh(e,r){return Math.round(e.getBoundingClientRect()[r])}function lh(e){return!Lg(e.groupOffsetTree)}function dh({index:e},r){return r===e?0:r<e?-1:1}function ch({offset:e},r){return r===e?0:r<e?-1:1}function uh(e,r,t){if(0===r.length)return 0;const{index:n,offset:o,size:i}=ih(r,e,dh),a=e-n,s=i*a+(a-1)*t+o;return s>0?s+t:s}function gh(e,r){if(!lh(r))return e;let t=0;for(;r.groupIndices[t]<=e+t;)t++;return e+t}function hh(e,r,t){if(function(e){return typeof e.groupIndex<"u"}(e))return r.groupIndices[e.groupIndex]+1;{let n=gh("LAST"===e.index?t:e.index,r);return n=Math.max(0,n,Math.min(t,n)),n}}function mh(e,r,t,n=0){return n>0&&(r=Math.max(r,ih(e,n,dh).offset)),Rg(function(e,r,t,n){const o=ah(e,r,n),i=ah(e,t,n,o);return e.slice(o,i+1)}(e,r,t,ch),yh)}function bh(e,[r,t,n,o]){r.length>0&&n("received item sizes",r,Dg.DEBUG);const i=e.sizeTree;let a=i,s=0;if(t.length>0&&Lg(i)&&2===r.length){const e=r[0].size,n=r[1].size;a=t.reduce(((r,t)=>Wg(Wg(r,t,e),t+1,n)),a)}else[a,s]=function(e,r){let t=Lg(e)?0:1/0;for(const n of r){const{endIndex:r,size:o,startIndex:i}=n;if(t=Math.min(t,i),Lg(e)){e=Wg(e,0,o);continue}const a=Pg(e,i-1,r+1);if(a.some(vh(n)))continue;let s=!1,l=!1;for(const{end:t,start:n,value:i}of a)s?(r>=n||o===i)&&(e=Yg(e,n)):(l=i!==o,s=!0),t>r&&r>=n&&i!==o&&(e=Wg(e,r+1,i));l&&(e=Wg(e,i,o))}return[e,t]}(a,r);if(a===i)return e;const{lastIndex:l,lastOffset:d,lastSize:c,offsetTree:u}=ph(e.offsetTree,s,a,o);return{groupIndices:t,groupOffsetTree:t.reduce(((e,r)=>Wg(e,r,uh(r,u,o))),Ng()),lastIndex:l,lastOffset:d,lastSize:c,offsetTree:u,sizeTree:a}}function fh(e,r){let t=0,n=0;for(;t<e;)t+=r[n+1]-r[n]-1,n++;return n-(t===e?0:1)}function ph(e,r,t,n){let o=e,i=0,a=0,s=0,l=0;if(0!==r){l=ah(o,r-1,dh),s=o[l].offset;const e=_g(t,r-1);i=e[0],a=e[1],o.length&&o[l].size===_g(t,r)[1]&&(l-=1),o=o.slice(0,l+1)}else o=[];for(const{start:e,value:l}of Pg(t,r,1/0)){const r=e-i,t=r*a+s+r*n;o.push({index:e,offset:t,size:l}),i=e,s=t,a=l}return{lastIndex:i,lastOffset:s,lastSize:a,offsetTree:o}}function yh(e){return{index:e.index,value:e}}function vh(e){const{endIndex:r,size:t,startIndex:n}=e;return e=>e.start===n&&(e.end===r||e.end===1/0)&&e.value===t}const xh={offsetHeight:"height",offsetWidth:"width"},wh=$g((([{log:e},{recalcInProgress:r}])=>{const t=xg(),n=xg(),o=vg(n,0),i=xg(),a=xg(),s=yg(0),l=yg([]),d=yg(void 0),c=yg(void 0),u=yg(((e,r)=>sh(e,xh[r]))),g=yg(void 0),h=yg(0),m={groupIndices:[],groupOffsetTree:Ng(),lastIndex:0,lastOffset:0,lastSize:0,offsetTree:[],sizeTree:Ng()},b=vg(hg(t,pg(l,e,h),mg(bh,m),dg()),m),f=vg(hg(l,dg(),mg(((e,r)=>({current:r,prev:e.current})),{current:[],prev:[]}),ug((({prev:e})=>e))),[]);ig(hg(l,cg((e=>e.length>0)),pg(b,h),ug((([e,r,t])=>{const n=e.reduce(((e,n,o)=>Wg(e,n,uh(n,r.offsetTree,t)||o)),Ng());return{...r,groupIndices:e,groupOffsetTree:n}}))),b),ig(hg(n,pg(b),cg((([e,{lastIndex:r}])=>e<r)),ug((([e,{lastIndex:r,lastSize:t}])=>[{endIndex:r,size:t,startIndex:e}]))),t),ig(d,c);const p=vg(hg(d,ug((e=>void 0===e))),!0);ig(hg(c,cg((e=>void 0!==e&&Lg(og(b).sizeTree))),ug((e=>[{endIndex:0,size:e,startIndex:0}]))),t);const y=wg(hg(t,pg(b),mg((({sizes:e},[r,t])=>({changed:t!==e,sizes:t})),{changed:!1,sizes:m}),ug((e=>e.changed))));rg(hg(s,mg(((e,r)=>({diff:e.prev-r,prev:r})),{diff:0,prev:0}),ug((e=>e.diff))),(e=>{const{groupIndices:t}=og(b);if(e>0)tg(r,!0),tg(i,e+fh(e,t));else if(e<0){const r=og(f);r.length>0&&(e-=fh(-e,r)),tg(a,e)}})),rg(hg(s,pg(e)),(([e,r])=>{e<0&&r("`firstItemIndex` prop should not be set to less than zero. If you don't know the total count, just use a very high value",{firstItemIndex:s},Dg.ERROR)}));const v=wg(i);ig(hg(i,pg(b),ug((([e,r])=>{const t=r.groupIndices.length>0,n=[],o=r.lastSize;if(t){const t=jg(r.sizeTree,0);let i=0,a=0;for(;i<e;){const e=r.groupIndices[a],s=r.groupIndices.length===a+1?1/0:r.groupIndices[a+1]-e-1;n.push({endIndex:e,size:t,startIndex:e}),n.push({endIndex:e+1+s-1,size:o,startIndex:e+1}),a++,i+=s+1}const s=Vg(r.sizeTree);return i!==e&&s.shift(),s.reduce(((r,{k:t,v:n})=>{let o=r.ranges;return 0!==r.prevSize&&(o=[...r.ranges,{endIndex:t+e-1,size:r.prevSize,startIndex:r.prevIndex}]),{prevIndex:t+e,prevSize:n,ranges:o}}),{prevIndex:e,prevSize:0,ranges:n}).ranges}return Vg(r.sizeTree).reduce(((r,{k:t,v:n})=>({prevIndex:t+e,prevSize:n,ranges:[...r.ranges,{endIndex:t+e-1,size:r.prevSize,startIndex:r.prevIndex}]})),{prevIndex:0,prevSize:o,ranges:[]}).ranges}))),t);const x=wg(hg(a,pg(b,h),ug((([e,{offsetTree:r},t])=>uh(-e,r,t)))));return ig(hg(a,pg(b,h),ug((([e,r,t])=>{if(r.groupIndices.length>0){if(Lg(r.sizeTree))return r;let n=Ng();const o=og(f);let i=0,a=0,s=0;for(;i<-e;){s=o[a];const e=o[a+1]-s-1;a++,i+=e+1}if(n=Vg(r.sizeTree).reduce(((r,{k:t,v:n})=>Wg(r,Math.max(0,t+e),n)),n),i!==-e){n=Wg(n,0,jg(r.sizeTree,s));n=Wg(n,1,_g(r.sizeTree,1-e)[1])}return{...r,sizeTree:n,...ph(r.offsetTree,0,n,t)}}{const n=Vg(r.sizeTree).reduce(((r,{k:t,v:n})=>Wg(r,Math.max(0,t+e),n)),Ng());return{...r,sizeTree:n,...ph(r.offsetTree,0,n,t)}}}))),b),{beforeUnshiftWith:v,data:g,defaultItemSize:c,firstItemIndex:s,fixedItemSize:d,gap:h,groupIndices:l,itemSize:u,listRefresh:y,shiftWith:a,shiftWithOffset:x,sizeRanges:t,sizes:b,statefulTotalCount:o,totalCount:n,trackItemSizes:p,unshiftWith:i}}),eg(Bg,oh),{singleton:!0});function $h(e){return e.reduce(((e,r)=>(e.groupIndices.push(e.totalCount),e.totalCount+=r+1,e)),{groupIndices:[],totalCount:0})}const Fh=$g((([{groupIndices:e,sizes:r,totalCount:t},{headerHeight:n,scrollTop:o}])=>{const i=xg(),a=xg(),s=wg(hg(i,ug($h)));return ig(hg(s,ug((e=>e.totalCount))),t),ig(hg(s,ug((e=>e.groupIndices))),e),ig(hg(Cg(o,r,n),cg((([e,r])=>lh(r))),ug((([e,r,t])=>_g(r.groupOffsetTree,Math.max(e-t,0),"v")[0])),dg(),ug((e=>[e]))),a),{groupCounts:i,topItemsIndexes:a}}),eg(wh,Mg)),Ch=$g((([{log:e}])=>{const r=yg(!1),t=wg(hg(r,cg((e=>e)),dg()));return rg(r,(r=>{r&&og(e)("props updated",{},Dg.DEBUG)})),{didMount:t,propsReady:r}}),eg(Bg),{singleton:!0}),Eh=typeof document<"u"&&"scrollBehavior"in document.documentElement.style;function Sh(e){const r="number"==typeof e?{index:e}:e;return r.align||(r.align="start"),(!r.behavior||!Eh)&&(r.behavior="auto"),r.offset||(r.offset=0),r}const Dh=$g((([{gap:e,listRefresh:r,sizes:t,totalCount:n},{fixedFooterHeight:o,fixedHeaderHeight:i,footerHeight:a,headerHeight:s,scrollingInProgress:l,scrollTo:d,smoothScrollTargetReached:c,viewportHeight:u},{log:g}])=>{const h=xg(),m=xg(),b=yg(0);let f=null,p=null,y=null;function v(){f&&(f(),f=null),y&&(y(),y=null),p&&(clearTimeout(p),p=null),tg(l,!1)}return ig(hg(h,pg(t,u,n,b,s,a,g),pg(e,i,o),ug((([[e,t,n,o,i,a,s,d],u,g,b])=>{const x=Sh(e),{align:w,behavior:$,offset:F}=x,C=o-1,E=hh(x,t,C);let S=uh(E,t.offsetTree,u)+a;"end"===w?(S+=g+_g(t.sizeTree,E)[1]-n+b,E===C&&(S+=s)):"center"===w?S+=(g+_g(t.sizeTree,E)[1]-n+b)/2:S-=i,F&&(S+=F);const D=r=>{v(),r?(d("retrying to scroll to",{location:e},Dg.DEBUG),tg(h,e)):(tg(m,!0),d("list did not change, scroll successful",{},Dg.DEBUG))};if(v(),"smooth"===$){let e=!1;y=rg(r,(r=>{e=e||r})),f=ag(c,(()=>{D(e)}))}else f=ag(hg(r,function(e){return r=>{const t=setTimeout((()=>{r(!1)}),e);return e=>{e&&(r(!0),clearTimeout(t))}}}(150)),D);return p=setTimeout((()=>{v()}),1200),tg(l,!0),d("scrolling from index to",{behavior:$,index:E,top:S},Dg.DEBUG),{behavior:$,top:S}}))),d),{scrollTargetReached:m,scrollToIndex:h,topListHeight:b}}),eg(wh,Mg,Bg),{singleton:!0});function kh(e,r){0==e?r():requestAnimationFrame((()=>{kh(e-1,r)}))}function Bh(e,r){const t=r-1;return"number"==typeof e?e:"LAST"===e.index?t:e.index}const Th=$g((([{defaultItemSize:e,listRefresh:r,sizes:t},{scrollTop:n},{scrollTargetReached:o,scrollToIndex:i},{didMount:a}])=>{const s=yg(!0),l=yg(0),d=yg(!0);return ig(hg(a,pg(l),cg((([e,r])=>!!r)),gg(!1)),s),ig(hg(a,pg(l),cg((([e,r])=>!!r)),gg(!1)),d),rg(hg(Cg(r,a),pg(s,t,e,d),cg((([[,e],r,{sizeTree:t},n,o])=>e&&(!Lg(t)||Xu(n))&&!r&&!o)),pg(l)),(([,e])=>{ag(o,(()=>{tg(d,!0)})),kh(4,(()=>{ag(n,(()=>{tg(s,!0)})),tg(i,e)}))})),{initialItemFinalLocationReached:d,initialTopMostItemIndex:l,scrolledToInitialItem:s}}),eg(wh,Mg,Dh,Ch),{singleton:!0});function zh(e,r){return Math.abs(e-r)<1.01}const Ih="up",Ah="down",Oh={atBottom:!1,notAtBottomBecause:"NOT_SHOWING_LAST_ITEM",state:{offsetBottom:0,scrollHeight:0,scrollTop:0,viewportHeight:0}},Mh=$g((([{footerHeight:e,headerHeight:r,scrollBy:t,scrollContainerState:n,scrollTop:o,viewportHeight:i}])=>{const a=yg(!1),s=yg(!0),l=xg(),d=xg(),c=yg(4),u=yg(0),g=vg(hg(Sg(hg(Eg(o),bg(1),gg(!0)),hg(Eg(o),bg(1),gg(!1),sg(100))),dg()),!1),h=vg(hg(Sg(hg(t,gg(!0)),hg(t,gg(!1),sg(200))),dg()),!1);ig(hg(Cg(Eg(o),Eg(u)),ug((([e,r])=>e<=r)),dg()),s),ig(hg(s,fg(50)),d);const m=wg(hg(Cg(n,Eg(i),Eg(r),Eg(e),Eg(c)),mg(((e,[{scrollHeight:r,scrollTop:t},n,o,i,a])=>{const s={scrollHeight:r,scrollTop:t,viewportHeight:n};if(t+n-r>-a){let r,n;return t>e.state.scrollTop?(r="SCROLLED_DOWN",n=e.state.scrollTop-t):(r="SIZE_DECREASED",n=e.state.scrollTop-t||e.scrollTopDelta),{atBottom:!0,atBottomBecause:r,scrollTopDelta:n,state:s}}let l;return l=s.scrollHeight>e.state.scrollHeight?"SIZE_INCREASED":n<e.state.viewportHeight?"VIEWPORT_HEIGHT_DECREASING":t<e.state.scrollTop?"SCROLLING_UPWARDS":"NOT_FULLY_SCROLLED_TO_LAST_ITEM_BOTTOM",{atBottom:!1,notAtBottomBecause:l,state:s}}),Oh),dg(((e,r)=>e&&e.atBottom===r.atBottom)))),b=vg(hg(n,mg(((e,{scrollHeight:r,scrollTop:t,viewportHeight:n})=>{if(zh(e.scrollHeight,r))return{changed:!1,jump:0,scrollHeight:r,scrollTop:t};{const o=r-(t+n)<1;return e.scrollTop!==t&&o?{changed:!0,jump:e.scrollTop-t,scrollHeight:r,scrollTop:t}:{changed:!0,jump:0,scrollHeight:r,scrollTop:t}}}),{changed:!1,jump:0,scrollHeight:0,scrollTop:0}),cg((e=>e.changed)),ug((e=>e.jump))),0);ig(hg(m,ug((e=>e.atBottom))),a),ig(hg(a,fg(50)),l);const f=yg(Ah);ig(hg(n,ug((({scrollTop:e})=>e)),dg(),mg(((e,r)=>og(h)?{direction:e.direction,prevScrollTop:r}:{direction:r<e.prevScrollTop?Ih:Ah,prevScrollTop:r}),{direction:Ah,prevScrollTop:0}),ug((e=>e.direction))),f),ig(hg(n,fg(50),gg("none")),f);const p=yg(0);return ig(hg(g,cg((e=>!e)),gg(0)),p),ig(hg(o,fg(100),pg(g),cg((([e,r])=>!!r)),mg((([e,r],[t])=>[r,t]),[0,0]),ug((([e,r])=>r-e))),p),{atBottomState:m,atBottomStateChange:l,atBottomThreshold:c,atTopStateChange:d,atTopThreshold:u,isAtBottom:a,isAtTop:s,isScrolling:g,lastJumpDueToItemResize:b,scrollDirection:f,scrollVelocity:p}}),eg(Mg)),Hh="top",Rh="bottom",Lh="none";function jh(e,r,t){return"number"==typeof e?t===Ih&&r===Hh||t===Ah&&r===Rh?e:0:t===Ih?r===Hh?e.main:e.reverse:r===Rh?e.main:e.reverse}function _h(e,r){var t;return"number"==typeof e?e:null!=(t=e[r])?t:0}const Wh=$g((([{deviation:e,fixedHeaderHeight:r,headerHeight:t,scrollTop:n,viewportHeight:o}])=>{const i=xg(),a=yg(0),s=yg(0),l=yg(0);return{increaseViewportBy:s,listBoundary:i,overscan:l,topListHeight:a,visibleRange:vg(hg(Cg(Eg(n),Eg(o),Eg(t),Eg(i,nh),Eg(l),Eg(a),Eg(r),Eg(e),Eg(s)),ug((([e,r,t,[n,o],i,a,s,l,d])=>{const c=e-l,u=a+s,g=Math.max(t-c,0);let h=Lh;const m=_h(d,Hh),b=_h(d,Rh);return n-=l,o+=t+s,(n+=t+s)>e+u-m&&(h=Ih),(o-=l)<e-g+r+b&&(h=Ah),h!==Lh?[Math.max(c-t-jh(i,Hh,h)-m,0),c-g-s+r+jh(i,Rh,h)+b]:null})),cg((e=>null!=e)),dg(nh)),[0,0])}}),eg(Mg),{singleton:!0});const Nh={bottom:0,firstItemIndex:0,items:[],offsetBottom:0,offsetTop:0,top:0,topItems:[],topListHeight:0,totalCount:0};function Ph(e,r,t,n,o,i){const{lastIndex:a,lastOffset:s,lastSize:l}=o;let d=0,c=0;if(e.length>0){d=e[0].offset;const r=e[e.length-1];c=r.offset+r.size}const u=t-a,g=d,h=s+u*l+(u-1)*n-c;return{bottom:c,firstItemIndex:i,items:Vh(e,o,i),offsetBottom:h,offsetTop:d,top:g,topItems:Vh(r,o,i),topListHeight:r.reduce(((e,r)=>r.size+e),0),totalCount:t}}function Yh(e,r,t,n,o,i){let a=0;if(t.groupIndices.length>0)for(const r of t.groupIndices){if(r-a>=e)break;a++}const s=e+a,l=Bh(r,s);return Ph(Array.from({length:s}).map(((e,r)=>({data:i[r+l],index:r+l,offset:0,size:0}))),[],s,o,t,n)}function Vh(e,r,t){if(0===e.length)return[];if(!lh(r))return e.map((e=>({...e,index:e.index+t,originalIndex:e.index})));const n=e[0].index,o=e[e.length-1].index,i=[],a=Pg(r.groupOffsetTree,n,o);let s,l=0;for(const n of e){let e;(!s||s.end<n.index)&&(s=a.shift(),l=r.groupIndices.indexOf(s.start)),e=n.index===s.start?{index:l,type:"group"}:{groupIndex:l,index:n.index-(l+1)+t},i.push({...e,data:n.data,offset:n.offset,originalIndex:n.index,size:n.size})}return i}const Uh=$g((([{data:e,firstItemIndex:r,gap:t,sizes:n,totalCount:o},i,{listBoundary:a,topListHeight:s,visibleRange:l},{initialTopMostItemIndex:d,scrolledToInitialItem:c},{topListHeight:u},g,{didMount:h},{recalcInProgress:m}])=>{const b=yg([]),f=yg(0),p=xg();ig(i.topItemsIndexes,b);const y=vg(hg(Cg(h,m,Eg(l,nh),Eg(o),Eg(n),Eg(d),c,Eg(b),Eg(r),Eg(t),e),cg((([e,r,,t,,,,,,,n])=>{const o=n&&n.length!==t;return e&&!r&&!o})),ug((([,,[e,r],t,n,o,i,a,s,l,d])=>{const c=n,{offsetTree:u,sizeTree:g}=c,h=og(f);if(0===t)return{...Nh,totalCount:t};if(0===e&&0===r)return 0===h?{...Nh,totalCount:t}:Yh(h,o,n,s,l,d||[]);if(Lg(g))return h>0?null:Ph(function(e,r,t){if(lh(r)){const n=gh(e,r);return[{index:_g(r.groupOffsetTree,n)[0],offset:0,size:0},{data:null==t?void 0:t[0],index:n,offset:0,size:0}]}return[{data:null==t?void 0:t[0],index:e,offset:0,size:0}]}(Bh(o,t),c,d),[],t,l,c,s);const m=[];if(a.length>0){const e=a[0],r=a[a.length-1];let t=0;for(const n of Pg(g,e,r)){const o=n.value,i=Math.max(n.start,e),a=Math.min(n.end,r);for(let e=i;e<=a;e++)m.push({data:null==d?void 0:d[e],index:e,offset:t,size:o}),t+=o}}if(!i)return Ph([],m,t,l,c,s);const b=a.length>0?a[a.length-1]+1:0,p=mh(u,e,r,b);if(0===p.length)return null;const y=t-1;return Ph(Ju([],(t=>{for(const n of p){const o=n.value;let i=o.offset,a=n.start;const s=o.size;if(o.offset<e){a+=Math.floor((e-o.offset+l)/(s+l));const r=a-n.start;i+=r*s+r*l}a<b&&(i+=(b-a)*s,a=b);const c=Math.min(n.end,y);for(let e=a;e<=c&&!(i>=r);e++)t.push({data:null==d?void 0:d[e],index:e,offset:i,size:s}),i+=s+l}})),m,t,l,c,s)})),cg((e=>null!==e)),dg()),Nh);ig(hg(e,cg(Xu),ug((e=>null==e?void 0:e.length))),o),ig(hg(y,ug((e=>e.topListHeight))),u),ig(u,s),ig(hg(y,ug((e=>[e.top,e.bottom]))),a),ig(hg(y,ug((e=>e.items))),p);const v=wg(hg(y,cg((({items:e})=>e.length>0)),pg(o,e),cg((([{items:e},r])=>e[e.length-1].originalIndex===r-1)),ug((([,e,r])=>[e-1,r])),dg(nh),ug((([e])=>e)))),x=wg(hg(y,fg(200),cg((({items:e,topItems:r})=>e.length>0&&e[0].originalIndex===r.length)),ug((({items:e})=>e[0].index)),dg())),w=wg(hg(y,cg((({items:e})=>e.length>0)),ug((({items:e})=>{let r=0,t=e.length-1;for(;"group"===e[r].type&&r<t;)r++;for(;"group"===e[t].type&&t>r;)t--;return{endIndex:e[t].index,startIndex:e[r].index}})),dg(th)));return{endReached:v,initialItemCount:f,itemsRendered:p,listState:y,rangeChanged:w,startReached:x,topItemsIndexes:b,...g}}),eg(wh,Fh,Wh,Th,Dh,Mh,Ch,oh),{singleton:!0}),Zh=$g((([{fixedFooterHeight:e,fixedHeaderHeight:r,footerHeight:t,headerHeight:n},{listState:o}])=>{const i=xg(),a=vg(hg(Cg(t,e,n,r,o),ug((([e,r,t,n,o])=>e+r+t+n+o.offsetBottom+o.bottom))),0);return ig(Eg(a),i),{totalListHeight:a,totalListHeightChanged:i}}),eg(Mg,Uh),{singleton:!0}),Gh=$g((([{viewportHeight:e},{totalListHeight:r}])=>{const t=yg(!1);return{alignToBottom:t,paddingTopAddition:vg(hg(Cg(t,e,r),cg((([e])=>e)),ug((([,e,r])=>Math.max(0,e-r))),fg(0),dg()),0)}}),eg(Mg,Zh),{singleton:!0});function qh(e){return!!e&&("smooth"===e?"smooth":"auto")}const Xh=$g((([{listRefresh:e,totalCount:r},{atBottomState:t,isAtBottom:n},{scrollToIndex:o},{scrolledToInitialItem:i},{didMount:a,propsReady:s},{log:l},{scrollingInProgress:d}])=>{const c=yg(!1),u=xg();let g=null;function h(e){tg(o,{align:"end",behavior:e,index:"LAST"})}function m(e){const r=ag(t,(r=>{e&&!r.atBottom&&"SIZE_INCREASED"===r.notAtBottomBecause&&!g&&(og(l)("scrolling to bottom due to increased size",{},Dg.DEBUG),h("auto"))}));setTimeout(r,100)}return rg(hg(Cg(hg(Eg(r),bg(1)),a),pg(Eg(c),n,i,d),ug((([[e,r],t,n,o,i])=>{let a=r&&o,s="auto";return a&&(s=((e,r)=>"function"==typeof e?qh(e(r)):r&&qh(e))(t,n||i),a=a&&!!s),{followOutputBehavior:s,shouldFollow:a,totalCount:e}})),cg((({shouldFollow:e})=>e))),(({followOutputBehavior:r,totalCount:t})=>{g&&(g(),g=null),g=ag(e,(()=>{og(l)("following output to ",{totalCount:t},Dg.DEBUG),h(r),g=null}))})),rg(hg(Cg(Eg(c),r,s),cg((([e,,r])=>e&&r)),mg((({value:e},[,r])=>({refreshed:e===r,value:r})),{refreshed:!1,value:0}),cg((({refreshed:e})=>e)),pg(c,r)),(([,e])=>{og(i)&&m(!1!==e)})),rg(u,(()=>{m(!1!==og(c))})),rg(Cg(Eg(c),t),(([e,r])=>{e&&!r.atBottom&&"VIEWPORT_HEIGHT_DECREASING"===r.notAtBottomBecause&&h("auto")})),{autoscrollToBottom:u,followOutput:c}}),eg(wh,Mh,Dh,Th,Ch,Bg,Mg)),Kh=$g((([{data:e,firstItemIndex:r,gap:t,sizes:n},{initialTopMostItemIndex:o},{initialItemCount:i,listState:a},{didMount:s}])=>(ig(hg(s,pg(i),cg((([,e])=>0!==e)),pg(o,n,r,t,e),ug((([[,e],r,t,n,o,i=[]])=>Yh(e,r,t,n,o,i)))),a),{})),eg(wh,Th,Uh,Ch),{singleton:!0}),Jh=$g((([{didMount:e},{scrollTo:r},{listState:t}])=>{const n=yg(0);return rg(hg(e,pg(n),cg((([,e])=>0!==e)),ug((([,e])=>({top:e})))),(e=>{ag(hg(t,bg(1),cg((e=>e.items.length>1))),(()=>{requestAnimationFrame((()=>{tg(r,e)}))}))})),{initialScrollTop:n}}),eg(Ch,Mg,Uh),{singleton:!0}),Qh=({itemBottom:e,itemTop:r,locationParams:{align:t,behavior:n,...o},viewportBottom:i,viewportTop:a})=>r<a?{...o,align:null!=t?t:"start",behavior:n}:e>i?{...o,align:null!=t?t:"end",behavior:n}:null,em=$g((([{gap:e,sizes:r,totalCount:t},{fixedFooterHeight:n,fixedHeaderHeight:o,headerHeight:i,scrollingInProgress:a,scrollTop:s,viewportHeight:l},{scrollToIndex:d}])=>{const c=xg();return ig(hg(c,pg(r,l,t,i,o,n,s),pg(e),ug((([[e,r,t,n,o,i,s,l],d])=>{const{align:c,behavior:u,calculateViewLocation:g=Qh,done:h,...m}=e,b=hh(e,r,n-1),f=uh(b,r.offsetTree,d)+o+i,p=g({itemBottom:f+_g(r.sizeTree,b)[1],itemTop:f,locationParams:{align:c,behavior:u,...m},viewportBottom:l+t-s,viewportTop:l+i});return p?h&&ag(hg(a,cg((e=>!e)),bg(og(a)?1:2)),h):h&&h(),p})),cg((e=>null!==e))),d),{scrollIntoView:c}}),eg(wh,Mg,Dh,Uh,Bg),{singleton:!0}),rm=$g((([{scrollVelocity:e}])=>{const r=yg(!1),t=xg(),n=yg(!1);return ig(hg(e,pg(n,r,t),cg((([e,r])=>!!r)),ug((([e,r,t,n])=>{const{enter:o,exit:i}=r;if(t){if(i(e,n))return!1}else if(o(e,n))return!0;return t})),dg()),r),rg(hg(Cg(r,e,t),pg(n)),(([[e,r,t],n])=>{e&&n&&n.change&&n.change(r,t)})),{isSeeking:r,scrollSeekConfiguration:n,scrollSeekRangeChanged:t,scrollVelocity:e}}),eg(Mh),{singleton:!0}),tm=$g((([{scrollContainerState:e,scrollTo:r}])=>{const t=xg(),n=xg(),o=xg(),i=yg(!1),a=yg(void 0);return ig(hg(Cg(t,n),ug((([{scrollHeight:e,scrollTop:r,viewportHeight:t},{offsetTop:n}])=>({scrollHeight:e,scrollTop:Math.max(0,r-n),viewportHeight:t})))),e),ig(hg(r,pg(n),ug((([e,{offsetTop:r}])=>({...e,top:e.top+r})))),o),{customScrollParent:a,useWindowScroll:i,windowScrollContainerState:t,windowScrollTo:o,windowViewportRect:n}}),eg(Mg)),nm=$g((([{sizeRanges:e,sizes:r},{headerHeight:t,scrollTop:n},{initialTopMostItemIndex:o},{didMount:i},{useWindowScroll:a,windowScrollContainerState:s,windowViewportRect:l}])=>{const d=xg(),c=yg(void 0),u=yg(null),g=yg(null);return ig(s,u),ig(l,g),rg(hg(d,pg(r,n,a,u,g,t)),(([e,r,t,n,o,i,a])=>{const s=function(e){return Vg(e).map((({k:e,v:r},t,n)=>{const o=n[t+1];return{endIndex:o?o.k-1:1/0,size:r,startIndex:e}}))}(r.sizeTree);n&&null!==o&&null!==i&&(t=o.scrollTop-i.offsetTop),e({ranges:s,scrollTop:t-=a})})),ig(hg(c,cg(Xu),ug(om)),o),ig(hg(i,pg(c),cg((([,e])=>void 0!==e)),dg(),ug((([,e])=>e.ranges))),e),{getState:d,restoreStateFrom:c}}),eg(wh,Mg,Th,Ch,tm));function om(e){return{align:"start",index:0,offset:e.scrollTop}}const im=$g((([{topItemsIndexes:e}])=>{const r=yg(0);return ig(hg(r,cg((e=>e>=0)),ug((e=>Array.from({length:e}).map(((e,r)=>r))))),e),{topItemCount:r}}),eg(Uh));function am(e){let r,t=!1;return()=>(t||(t=!0,r=e()),r)}const sm=am((()=>/iP(ad|od|hone)/i.test(navigator.userAgent)&&/WebKit/i.test(navigator.userAgent))),lm=$g((([{deviation:e,scrollBy:r,scrollingInProgress:t,scrollTop:n},{isAtBottom:o,isScrolling:i,lastJumpDueToItemResize:a,scrollDirection:s},{listState:l},{beforeUnshiftWith:d,gap:c,shiftWithOffset:u,sizes:g},{log:h},{recalcInProgress:m}])=>{const b=wg(hg(l,pg(a),mg((([,e,r,t],[{bottom:n,items:o,offsetBottom:i,totalCount:a},s])=>{const l=n+i;let d=0;return r===a&&e.length>0&&o.length>0&&(0===o[0].originalIndex&&0===e[0].originalIndex||(d=l-t,0!==d&&(d+=s))),[d,o,a,l]}),[0,[],0,0]),cg((([e])=>0!==e)),pg(n,s,t,o,h,m),cg((([,e,r,t,,,n])=>!n&&!t&&0!==e&&r===Ih)),ug((([[e],,,,,r])=>(r("Upward scrolling compensation",{amount:e},Dg.DEBUG),e)))));function f(t){t>0?(tg(r,{behavior:"auto",top:-t}),tg(e,0)):(tg(e,0),tg(r,{behavior:"auto",top:-t}))}return rg(hg(b,pg(e,i)),(([r,t,n])=>{n&&sm()?tg(e,t-r):f(-r)})),rg(hg(Cg(vg(i,!1),e,m),cg((([e,r,t])=>!e&&!t&&0!==r)),ug((([e,r])=>r)),fg(1)),f),ig(hg(u,ug((e=>({top:-e})))),r),rg(hg(d,pg(g,c),ug((([e,{groupIndices:r,lastSize:t,sizeTree:n},o])=>{function i(e){return e*(t+o)}if(0===r.length)return i(e);{let t=0;const o=jg(n,0);let a=0,s=0;for(;a<e;){a++,t+=o;let n=r.length===s+1?1/0:r[s+1]-r[s]-1;a+n>e&&(t-=o,n=e-a+1),a+=n,t+=i(n),s++}return t}}))),(t=>{tg(e,t),requestAnimationFrame((()=>{tg(r,{top:t}),requestAnimationFrame((()=>{tg(e,0),tg(m,!1)}))}))})),{deviation:e}}),eg(Mg,Mh,Uh,wh,Bg,oh)),dm=$g((([e,r,t,n,o,i,a,s,l,d])=>({...e,...r,...t,...n,...o,...i,...a,...s,...l,...d})),eg(Wh,Kh,Ch,rm,Zh,Jh,Gh,tm,em,Bg)),cm=$g((([{data:e,defaultItemSize:r,firstItemIndex:t,fixedItemSize:n,gap:o,groupIndices:i,itemSize:a,sizeRanges:s,sizes:l,statefulTotalCount:d,totalCount:c,trackItemSizes:u},{initialItemFinalLocationReached:g,initialTopMostItemIndex:h,scrolledToInitialItem:m},b,f,p,{listState:y,topItemsIndexes:v,...x},{scrollToIndex:w},$,{topItemCount:F},{groupCounts:C},E])=>(ig(x.rangeChanged,E.scrollSeekRangeChanged),ig(hg(E.windowViewportRect,ug((e=>e.visibleHeight))),b.viewportHeight),{data:e,defaultItemHeight:r,firstItemIndex:t,fixedItemHeight:n,gap:o,groupCounts:C,initialItemFinalLocationReached:g,initialTopMostItemIndex:h,scrolledToInitialItem:m,sizeRanges:s,topItemCount:F,topItemsIndexes:v,totalCount:c,...p,groupIndices:i,itemSize:a,listState:y,scrollToIndex:w,statefulTotalCount:d,trackItemSizes:u,...x,...E,...b,sizes:l,...f})),eg(wh,Th,Mg,nm,Xh,Uh,Dh,lm,im,Fh,dm));function um(e,r){const t={},n={};let o=0;const i=e.length;for(;o<i;)n[e[o]]=1,o+=1;for(const e in r)Object.hasOwn(n,e)||(t[e]=r[e]);return t}const gm=typeof document<"u"?o.useLayoutEffect:o.useEffect;function hm(e,t,n){const i=Object.keys(t.required||{}),a=Object.keys(t.optional||{}),s=Object.keys(t.methods||{}),l=Object.keys(t.events||{}),d=o.createContext({});function c(e,r){e.propsReady&&tg(e.propsReady,!1);for(const n of i){tg(e[t.required[n]],r[n])}for(const n of a)if(n in r){tg(e[t.optional[n]],r[n])}e.propsReady&&tg(e.propsReady,!0)}function u(e){return l.reduce(((r,n)=>(r[n]=function(e){let r,t;const n=()=>null==r?void 0:r();return function(o,i){switch(o){case 1:return i?t===i?void 0:(n(),t=i,r=rg(e,i),r):(n(),Ku);case 2:return n(),void(t=null)}}}(e[t.events[n]]),r)),{})}const g=o.forwardRef(((g,h)=>{const{children:m,...b}=g,[f]=o.useState((()=>Ju(function(e){const r=new Map,t=({constructor:e,dependencies:n,id:o,singleton:i})=>{if(i&&r.has(o))return r.get(o);const a=e(n.map((e=>t(e))));return i&&r.set(o,a),a};return t(e)}(e),(e=>{c(e,b)})))),[p]=o.useState(Gu(u,f));gm((()=>{for(const e of l)e in b&&rg(p[e],b[e]);return()=>{Object.values(p).map(ng)}}),[b,p,f]),gm((()=>{c(f,b)})),o.useImperativeHandle(h,Vu(function(e){return s.reduce(((r,n)=>(r[n]=r=>{tg(e[t.methods[n]],r)},r)),{})}(f)));const y=n;return r(d.Provider,{value:f,children:n?r(y,{...um([...i,...a,...l],b),children:m}):m})}));return{Component:g,useEmitter:(e,r)=>{const t=o.useContext(d)[e];gm((()=>rg(t,r)),[r,t])},useEmitterValue:o.version.startsWith("18")?e=>{const r=o.useContext(d)[e],t=o.useCallback((e=>rg(r,e)),[r]);return o.useSyncExternalStore(t,(()=>og(r)),(()=>og(r)))}:e=>{const r=o.useContext(d)[e],[t,n]=o.useState(Gu(og,r));return gm((()=>rg(r,(e=>{e!==t&&n(Vu(e))}))),[r,t]),t},usePublisher:e=>o.useCallback(qu(tg,o.useContext(d)[e]),[e])}}const mm=o.createContext(void 0),bm=o.createContext(void 0),fm=typeof document<"u"?o.useLayoutEffect:o.useEffect;function pm(e,r,t,n=Ku,i,a){const s=o.useRef(null),l=o.useRef(null),d=o.useRef(null),c=o.useCallback((t=>{const n=t.target,o=n===window||n===document,i=a?o?window.pageXOffset||document.documentElement.scrollLeft:n.scrollLeft:o?window.pageYOffset||document.documentElement.scrollTop:n.scrollTop,s=a?o?document.documentElement.scrollWidth:n.scrollWidth:o?document.documentElement.scrollHeight:n.scrollHeight,c=a?o?window.innerWidth:n.offsetWidth:o?window.innerHeight:n.offsetHeight,u=()=>{e({scrollHeight:s,scrollTop:Math.max(i,0),viewportHeight:c})};t.suppressFlushSync?u():O.flushSync(u),null!==l.current&&(i===l.current||i<=0||i===s-c)&&(l.current=null,r(!0),d.current&&(clearTimeout(d.current),d.current=null))}),[e,r]);return o.useEffect((()=>{const e=i||s.current;return n(i||s.current),c({suppressFlushSync:!0,target:e}),e.addEventListener("scroll",c,{passive:!0}),()=>{n(null),e.removeEventListener("scroll",c)}}),[s,c,t,n,i]),{scrollByCallback:function(e){a&&(e={behavior:e.behavior,left:e.top}),s.current.scrollBy(e)},scrollerRef:s,scrollToCallback:function(t){const n=s.current;if(!n||(a?"offsetWidth"in n&&0===n.offsetWidth:"offsetHeight"in n&&0===n.offsetHeight))return;const o="smooth"===t.behavior;let i,c,u;n===window?(c=Math.max(sh(document.documentElement,a?"width":"height"),a?document.documentElement.scrollWidth:document.documentElement.scrollHeight),i=a?window.innerWidth:window.innerHeight,u=a?document.documentElement.scrollLeft:document.documentElement.scrollTop):(c=n[a?"scrollWidth":"scrollHeight"],i=sh(n,a?"width":"height"),u=n[a?"scrollLeft":"scrollTop"]);const g=c-i;if(t.top=Math.ceil(Math.max(Math.min(g,t.top),0)),zh(i,c)||t.top===u)return e({scrollHeight:c,scrollTop:u,viewportHeight:i}),void(o&&r(!0));o?(l.current=t.top,d.current&&clearTimeout(d.current),d.current=setTimeout((()=>{d.current=null,l.current=null,r(!0)}),1e3)):l.current=null,a&&(t={behavior:t.behavior,left:t.top}),n.scrollTo(t)}}}const ym="-webkit-sticky",vm="sticky",xm=am((()=>{if(typeof document>"u")return vm;const e=document.createElement("div");return e.style.position=ym,e.style.position===ym?ym:vm}));function wm(e){return e}const $m=$g((()=>{const e=yg((e=>`Item ${e}`)),r=yg(null),t=yg((e=>`Group ${e}`)),n=yg({}),o=yg(wm),i=yg("div"),a=yg(Ku),s=(e,r=null)=>vg(hg(n,ug((r=>r[e])),dg()),r);return{components:n,computeItemKey:o,context:r,EmptyPlaceholder:s("EmptyPlaceholder"),FooterComponent:s("Footer"),GroupComponent:s("Group","div"),groupContent:t,HeaderComponent:s("Header"),HeaderFooterTag:i,ItemComponent:s("Item","div"),itemContent:e,ListComponent:s("List","div"),ScrollerComponent:s("Scroller","div"),scrollerRef:a,ScrollSeekPlaceholder:s("ScrollSeekPlaceholder"),TopItemListComponent:s("TopItemList")}})),Fm=$g((([e,r])=>({...e,...r})),eg(cm,$m)),Cm=({height:e})=>r("div",{style:{height:e}}),Em={overflowAnchor:"none",position:xm(),zIndex:1},Sm={overflowAnchor:"none"},Dm={...Sm,display:"inline-block",height:"100%"},km=o.memo((function({showTopList:e=!1}){const t=Vm("listState"),n=Um("sizeRanges"),i=Vm("useWindowScroll"),a=Vm("customScrollParent"),s=Um("windowScrollContainerState"),l=Um("scrollContainerState"),d=a||i?s:l,c=Vm("itemContent"),u=Vm("context"),g=Vm("groupContent"),h=Vm("trackItemSizes"),m=Vm("itemSize"),b=Vm("log"),f=Um("gap"),p=Vm("horizontalDirection"),{callbackRef:v}=Ig(n,m,h,e?Ku:d,b,f,a,p,Vm("skipAnimationFrameInResizeObserver")),[x,w]=o.useState(0);Ym("deviation",(e=>{x!==e&&w(e)}));const $=Vm("EmptyPlaceholder"),F=Vm("ScrollSeekPlaceholder")||Cm,C=Vm("ListComponent"),E=Vm("ItemComponent"),S=Vm("GroupComponent"),D=Vm("computeItemKey"),k=Vm("isSeeking"),B=Vm("groupIndices").length>0,T=Vm("alignToBottom"),z=Vm("initialItemFinalLocationReached"),I=e?{}:{boxSizing:"border-box",...p?{display:"inline-block",height:"100%",marginLeft:0!==x?x:T?"auto":0,paddingLeft:t.offsetTop,paddingRight:t.offsetBottom,whiteSpace:"nowrap"}:{marginTop:0!==x?x:T?"auto":0,paddingBottom:t.offsetBottom,paddingTop:t.offsetTop},...z?{}:{visibility:"hidden"}};return!e&&0===t.totalCount&&$?r($,{...Am($,u)}):r(C,{...Am(C,u),"data-testid":e?"virtuoso-top-item-list":"virtuoso-item-list",ref:v,style:I,children:(e?t.topItems:t.items).map((e=>{const r=e.originalIndex,n=D(r+t.firstItemIndex,e.data,u);return k?y(F,{...Am(F,u),height:e.size,index:e.index,key:n,type:e.type||"item",..."group"===e.type?{}:{groupIndex:e.groupIndex}}):"group"===e.type?y(S,{...Am(S,u),"data-index":r,"data-item-index":e.index,"data-known-size":e.size,key:n,style:Em},g(e.index,u)):y(E,{...Am(E,u),...Om(E,e.data),"data-index":r,"data-item-group-index":e.groupIndex,"data-item-index":e.index,"data-known-size":e.size,key:n,style:p?Dm:Sm},B?c(e.index,e.groupIndex,e.data,u):c(e.index,e.data,u))}))})})),Bm={height:"100%",outline:"none",overflowY:"auto",position:"relative",WebkitOverflowScrolling:"touch"},Tm={outline:"none",overflowX:"auto",position:"relative"},zm=e=>({height:"100%",position:"absolute",top:0,width:"100%",...e?{display:"flex",flexDirection:"column"}:{}}),Im={position:xm(),top:0,width:"100%",zIndex:1};function Am(e,r){if("string"!=typeof e)return{context:r}}function Om(e,r){return{item:"string"==typeof e?void 0:r}}const Mm=o.memo((function(){const e=Vm("HeaderComponent"),t=Um("headerHeight"),n=Vm("HeaderFooterTag"),i=Tg(o.useMemo((()=>e=>{t(sh(e,"height"))}),[t]),!0,Vm("skipAnimationFrameInResizeObserver")),a=Vm("context");return e?r(n,{ref:i,children:r(e,{...Am(e,a)})}):null})),Hm=o.memo((function(){const e=Vm("FooterComponent"),t=Um("footerHeight"),n=Vm("HeaderFooterTag"),i=Tg(o.useMemo((()=>e=>{t(sh(e,"height"))}),[t]),!0,Vm("skipAnimationFrameInResizeObserver")),a=Vm("context");return e?r(n,{ref:i,children:r(e,{...Am(e,a)})}):null}));function Rm({useEmitter:e,useEmitterValue:t,usePublisher:n}){return o.memo((function({children:o,style:i,...a}){const s=n("scrollContainerState"),l=t("ScrollerComponent"),d=n("smoothScrollTargetReached"),c=t("scrollerRef"),u=t("context"),g=t("horizontalDirection")||!1,{scrollByCallback:h,scrollerRef:m,scrollToCallback:b}=pm(s,d,l,c,void 0,g);return e("scrollTo",b),e("scrollBy",h),r(l,{"data-testid":"virtuoso-scroller","data-virtuoso-scroller":!0,ref:m,style:{...g?Tm:Bm,...i},tabIndex:0,...a,...Am(l,u),children:o})}))}function Lm({useEmitter:e,useEmitterValue:t,usePublisher:n}){return o.memo((function({children:o,style:i,...a}){const s=n("windowScrollContainerState"),l=t("ScrollerComponent"),d=n("smoothScrollTargetReached"),c=t("totalListHeight"),u=t("deviation"),g=t("customScrollParent"),h=t("context"),{scrollByCallback:m,scrollerRef:b,scrollToCallback:f}=pm(s,d,l,Ku,g);return fm((()=>(b.current=g||window,()=>{b.current=null})),[b,g]),e("windowScrollTo",f),e("scrollBy",m),r(l,{"data-virtuoso-scroller":!0,style:{position:"relative",...i,...0!==c?{height:c+u}:{}},...a,...Am(l,h),children:o})}))}const jm=({children:e})=>{const t=o.useContext(mm),n=Um("viewportHeight"),i=Um("fixedItemHeight"),a=Vm("alignToBottom"),s=Vm("horizontalDirection"),l=Tg(o.useMemo((()=>Zu(n,(e=>sh(e,s?"width":"height")))),[n,s]),!0,Vm("skipAnimationFrameInResizeObserver"));return o.useEffect((()=>{t&&(n(t.viewportHeight),i(t.itemHeight))}),[t,n,i]),r("div",{"data-viewport-type":"element",ref:l,style:zm(a),children:e})},_m=({children:e})=>{const t=o.useContext(mm),n=Um("windowViewportRect"),i=Um("fixedItemHeight"),a=Vm("customScrollParent"),s=Og(n,a,Vm("skipAnimationFrameInResizeObserver")),l=Vm("alignToBottom");return o.useEffect((()=>{t&&(i(t.itemHeight),n({offsetTop:0,visibleHeight:t.viewportHeight,visibleWidth:100}))}),[t,n,i]),r("div",{"data-viewport-type":"window",ref:s,style:zm(l),children:e})},Wm=({children:e})=>{const t=Vm("TopItemListComponent")||"div",n=Vm("headerHeight"),o={...Im,marginTop:`${n}px`},i=Vm("context");return r(t,{style:o,...Am(t,i),children:e})},Nm=o.memo((function(t){const n=Vm("useWindowScroll"),o=Vm("topItemsIndexes").length>0,i=Vm("customScrollParent"),a=Vm("context"),s=i||n?Gm:Zm,l=i||n?_m:jm;return e(s,{...t,...Am(s,a),children:[o&&r(Wm,{children:r(km,{showTopList:!0})}),e(l,{children:[r(Mm,{}),r(km,{}),r(Hm,{})]})]})})),{Component:Pm,useEmitter:Ym,useEmitterValue:Vm,usePublisher:Um}=hm(Fm,{events:{atBottomStateChange:"atBottomStateChange",atTopStateChange:"atTopStateChange",endReached:"endReached",groupIndices:"groupIndices",isScrolling:"isScrolling",itemsRendered:"itemsRendered",rangeChanged:"rangeChanged",startReached:"startReached",totalListHeightChanged:"totalListHeightChanged"},methods:{autoscrollToBottom:"autoscrollToBottom",getState:"getState",scrollBy:"scrollBy",scrollIntoView:"scrollIntoView",scrollTo:"scrollTo",scrollToIndex:"scrollToIndex"},optional:{alignToBottom:"alignToBottom",atBottomThreshold:"atBottomThreshold",atTopThreshold:"atTopThreshold",components:"components",computeItemKey:"computeItemKey",context:"context",customScrollParent:"customScrollParent",data:"data",defaultItemHeight:"defaultItemHeight",firstItemIndex:"firstItemIndex",fixedItemHeight:"fixedItemHeight",followOutput:"followOutput",groupContent:"groupContent",groupCounts:"groupCounts",headerFooterTag:"HeaderFooterTag",horizontalDirection:"horizontalDirection",increaseViewportBy:"increaseViewportBy",initialItemCount:"initialItemCount",initialScrollTop:"initialScrollTop",initialTopMostItemIndex:"initialTopMostItemIndex",itemContent:"itemContent",itemSize:"itemSize",logLevel:"logLevel",overscan:"overscan",restoreStateFrom:"restoreStateFrom",scrollerRef:"scrollerRef",scrollSeekConfiguration:"scrollSeekConfiguration",skipAnimationFrameInResizeObserver:"skipAnimationFrameInResizeObserver",topItemCount:"topItemCount",totalCount:"totalCount",useWindowScroll:"useWindowScroll"},required:{}},Nm),Zm=Rm({useEmitter:Ym,useEmitterValue:Vm,usePublisher:Um}),Gm=Lm({useEmitter:Ym,useEmitterValue:Vm,usePublisher:Um}),qm=Pm,Xm={bottom:0,itemHeight:0,items:[],itemWidth:0,offsetBottom:0,offsetTop:0,top:0},Km={bottom:0,itemHeight:0,items:[{index:0}],itemWidth:0,offsetBottom:0,offsetTop:0,top:0},{ceil:Jm,floor:Qm,max:eb,min:rb,round:tb}=Math;function nb(e,r,t){return Array.from({length:r-e+1}).map(((r,n)=>({data:null===t?null:t[n+e],index:n+e})))}function ob(e,r){return e&&e.width===r.width&&e.height===r.height}function ib(e,r){return e&&e.column===r.column&&e.row===r.row}const ab=$g((([{increaseViewportBy:e,listBoundary:r,overscan:t,visibleRange:n},{footerHeight:o,headerHeight:i,scrollBy:a,scrollContainerState:s,scrollTo:l,scrollTop:d,smoothScrollTargetReached:c,viewportHeight:u},g,h,{didMount:m,propsReady:b},{customScrollParent:f,useWindowScroll:p,windowScrollContainerState:y,windowScrollTo:v,windowViewportRect:x},w])=>{const $=yg(0),F=yg(0),C=yg(Xm),E=yg({height:0,width:0}),S=yg({height:0,width:0}),D=xg(),k=xg(),B=yg(0),T=yg(null),z=yg({column:0,row:0}),I=xg(),A=xg(),O=yg(!1),M=yg(0),H=yg(!0),R=yg(!1),L=yg(!1);rg(hg(m,pg(M),cg((([e,r])=>!!r))),(()=>{tg(H,!1)})),rg(hg(Cg(m,H,S,E,M,R),cg((([e,r,t,n,,o])=>e&&!r&&0!==t.height&&0!==n.height&&!o))),(([,,,,e])=>{tg(R,!0),kh(1,(()=>{tg(D,e)})),ag(hg(d),(()=>{tg(r,[0,0]),tg(H,!0)}))})),ig(hg(A,cg((e=>null!=e&&e.scrollTop>0)),gg(0)),F),rg(hg(m,pg(A),cg((([,e])=>null!=e))),(([,e])=>{e&&(tg(E,e.viewport),tg(S,e.item),tg(z,e.gap),e.scrollTop>0&&(tg(O,!0),ag(hg(d,bg(1)),(e=>{tg(O,!1)})),tg(l,{top:e.scrollTop})))})),ig(hg(E,ug((({height:e})=>e))),u),ig(hg(Cg(Eg(E,ob),Eg(S,ob),Eg(z,((e,r)=>e&&e.column===r.column&&e.row===r.row)),Eg(d)),ug((([e,r,t,n])=>({gap:t,item:r,scrollTop:n,viewport:e})))),I),ig(hg(Cg(Eg($),n,Eg(z,ib),Eg(S,ob),Eg(E,ob),Eg(T),Eg(F),Eg(O),Eg(H),Eg(M)),cg((([,,,,,,,e])=>!e)),ug((([e,[r,t],n,o,i,a,s,,l,d])=>{const{column:c,row:u}=n,{height:g,width:h}=o,{width:m}=i;if(0===s&&(0===e||0===m))return Xm;if(0===h){const r=Bh(d,e);return function(e){return{...Km,items:e}}(nb(r,r+Math.max(s-1,0),a))}const b=sb(m,h,c);let f,p;l?0===r&&0===t&&s>0?(f=0,p=s-1):(f=b*Qm((r+u)/(g+u)),p=b*Jm((t+u)/(g+u))-1,p=rb(e-1,eb(p,b-1)),f=rb(p,eb(0,f))):(f=0,p=-1);const y=nb(f,p,a),{bottom:v,top:x}=lb(i,n,o,y),w=Jm(e/b);return{bottom:v,itemHeight:g,items:y,itemWidth:h,offsetBottom:w*g+(w-1)*u-v,offsetTop:x,top:x}}))),C),ig(hg(T,cg((e=>null!==e)),ug((e=>e.length))),$),ig(hg(Cg(E,S,C,z),cg((([e,r,{items:t}])=>t.length>0&&0!==r.height&&0!==e.height)),ug((([e,r,{items:t},n])=>{const{bottom:o,top:i}=lb(e,n,r,t);return[i,o]})),dg(nh)),r);const j=yg(!1);ig(hg(d,pg(j),ug((([e,r])=>r||0!==e))),j);const _=wg(hg(Cg(C,$),cg((([{items:e}])=>e.length>0)),pg(j),cg((([[e,r],t])=>{const n=e.items[e.items.length-1].index===r-1;return(t||e.bottom>0&&e.itemHeight>0&&0===e.offsetBottom&&e.items.length===r)&&n})),ug((([[,e]])=>e-1)),dg())),W=wg(hg(Eg(C),cg((({items:e})=>e.length>0&&0===e[0].index)),gg(0),dg())),N=wg(hg(Eg(C),pg(O),cg((([{items:e},r])=>e.length>0&&!r)),ug((([{items:e}])=>({endIndex:e[e.length-1].index,startIndex:e[0].index}))),dg(th),fg(0)));ig(N,h.scrollSeekRangeChanged),ig(hg(D,pg(E,S,$,z),ug((([e,r,t,n,o])=>{const i=Sh(e),{align:a,behavior:s,offset:l}=i;let d=i.index;"LAST"===d&&(d=n-1),d=eb(0,d,rb(n-1,d));let c=db(r,o,t,d);return"end"===a?c=tb(c-r.height+t.height):"center"===a&&(c=tb(c-r.height/2+t.height/2)),l&&(c+=l),{behavior:s,top:c}}))),l);const P=vg(hg(C,ug((e=>e.offsetBottom+e.bottom))),0);return ig(hg(x,ug((e=>({height:e.visibleHeight,width:e.visibleWidth})))),E),{customScrollParent:f,data:T,deviation:B,footerHeight:o,gap:z,headerHeight:i,increaseViewportBy:e,initialItemCount:F,itemDimensions:S,overscan:t,restoreStateFrom:A,scrollBy:a,scrollContainerState:s,scrollHeight:k,scrollTo:l,scrollToIndex:D,scrollTop:d,smoothScrollTargetReached:c,totalCount:$,useWindowScroll:p,viewportDimensions:E,windowScrollContainerState:y,windowScrollTo:v,windowViewportRect:x,...h,gridState:C,horizontalDirection:L,initialTopMostItemIndex:M,totalListHeight:P,...g,endReached:_,propsReady:b,rangeChanged:N,startReached:W,stateChanged:I,stateRestoreInProgress:O,...w}}),eg(Wh,Mg,Mh,rm,Ch,tm,Bg));function sb(e,r,t){return eb(1,Qm((e+t)/(Qm(r)+t)))}function lb(e,r,t,n){const{height:o}=t;if(void 0===o||0===n.length)return{bottom:0,top:0};const i=db(e,r,t,n[0].index);return{bottom:db(e,r,t,n[n.length-1].index)+o,top:i}}function db(e,r,t,n){const o=sb(e.width,t.width,r.column),i=Qm(n/o),a=i*t.height+eb(0,i-1)*r.row;return a>0?a+r.row:a}const cb=$g((()=>{const e=yg((e=>`Item ${e}`)),r=yg({}),t=yg(null),n=yg("virtuoso-grid-item"),o=yg("virtuoso-grid-list"),i=yg(wm),a=yg("div"),s=yg(Ku),l=(e,t=null)=>vg(hg(r,ug((r=>r[e])),dg()),t),d=yg(!1),c=yg(!1);return ig(Eg(c),d),{components:r,computeItemKey:i,context:t,FooterComponent:l("Footer"),HeaderComponent:l("Header"),headerFooterTag:a,itemClassName:n,ItemComponent:l("Item","div"),itemContent:e,listClassName:o,ListComponent:l("List","div"),readyStateChanged:d,reportReadyState:c,ScrollerComponent:l("Scroller","div"),scrollerRef:s,ScrollSeekPlaceholder:l("ScrollSeekPlaceholder","div")}})),ub=$g((([e,r])=>({...e,...r})),eg(ab,cb)),gb=o.memo((function(){const e=xb("gridState"),t=xb("listClassName"),n=xb("itemClassName"),i=xb("itemContent"),a=xb("computeItemKey"),s=xb("isSeeking"),l=wb("scrollHeight"),d=xb("ItemComponent"),c=xb("ListComponent"),u=xb("ScrollSeekPlaceholder"),g=xb("context"),h=wb("itemDimensions"),m=wb("gap"),b=xb("log"),f=xb("stateRestoreInProgress"),p=wb("reportReadyState"),v=Tg(o.useMemo((()=>e=>{const r=e.parentElement.parentElement.scrollHeight;l(r);const t=e.firstChild;if(t){const{height:e,width:r}=t.getBoundingClientRect();h({height:e,width:r})}m({column:Cb("column-gap",getComputedStyle(e).columnGap,b),row:Cb("row-gap",getComputedStyle(e).rowGap,b)})}),[l,h,m,b]),!0,!1);return fm((()=>{e.itemHeight>0&&e.itemWidth>0&&p(!0)}),[e]),f?null:r(c,{className:t,ref:v,...Am(c,g),"data-testid":"virtuoso-item-list",style:{paddingBottom:e.offsetBottom,paddingTop:e.offsetTop},children:e.items.map((t=>{const o=a(t.index,t.data,g);return s?r(u,{...Am(u,g),height:e.itemHeight,index:t.index,width:e.itemWidth},o):y(d,{...Am(d,g),className:n,"data-index":t.index,key:o},i(t.index,t.data,g))}))})})),hb=o.memo((function(){const e=xb("HeaderComponent"),t=wb("headerHeight"),n=xb("headerFooterTag"),i=Tg(o.useMemo((()=>e=>{t(sh(e,"height"))}),[t]),!0,!1),a=xb("context");return e?r(n,{ref:i,children:r(e,{...Am(e,a)})}):null})),mb=o.memo((function(){const e=xb("FooterComponent"),t=wb("footerHeight"),n=xb("headerFooterTag"),i=Tg(o.useMemo((()=>e=>{t(sh(e,"height"))}),[t]),!0,!1),a=xb("context");return e?r(n,{ref:i,children:r(e,{...Am(e,a)})}):null})),bb=({children:e})=>{const t=o.useContext(bm),n=wb("itemDimensions"),i=wb("viewportDimensions"),a=Tg(o.useMemo((()=>e=>{i(e.getBoundingClientRect())}),[i]),!0,!1);return o.useEffect((()=>{t&&(i({height:t.viewportHeight,width:t.viewportWidth}),n({height:t.itemHeight,width:t.itemWidth}))}),[t,i,n]),r("div",{ref:a,style:zm(!1),children:e})},fb=({children:e})=>{const t=o.useContext(bm),n=wb("windowViewportRect"),i=wb("itemDimensions"),a=xb("customScrollParent"),s=Og(n,a,!1);return o.useEffect((()=>{t&&(i({height:t.itemHeight,width:t.itemWidth}),n({offsetTop:0,visibleHeight:t.viewportHeight,visibleWidth:t.viewportWidth}))}),[t,n,i]),r("div",{ref:s,style:zm(!1),children:e})},pb=o.memo((function({...t}){const n=xb("useWindowScroll"),o=xb("customScrollParent"),i=o||n?Fb:$b,a=o||n?fb:bb,s=xb("context");return r(i,{...t,...Am(i,s),children:e(a,{children:[r(hb,{}),r(gb,{}),r(mb,{})]})})})),{Component:yb,useEmitter:vb,useEmitterValue:xb,usePublisher:wb}=hm(ub,{events:{atBottomStateChange:"atBottomStateChange",atTopStateChange:"atTopStateChange",endReached:"endReached",isScrolling:"isScrolling",rangeChanged:"rangeChanged",readyStateChanged:"readyStateChanged",startReached:"startReached",stateChanged:"stateChanged"},methods:{scrollBy:"scrollBy",scrollTo:"scrollTo",scrollToIndex:"scrollToIndex"},optional:{components:"components",computeItemKey:"computeItemKey",context:"context",customScrollParent:"customScrollParent",data:"data",headerFooterTag:"headerFooterTag",increaseViewportBy:"increaseViewportBy",initialItemCount:"initialItemCount",initialTopMostItemIndex:"initialTopMostItemIndex",itemClassName:"itemClassName",itemContent:"itemContent",listClassName:"listClassName",logLevel:"logLevel",overscan:"overscan",restoreStateFrom:"restoreStateFrom",scrollerRef:"scrollerRef",scrollSeekConfiguration:"scrollSeekConfiguration",totalCount:"totalCount",useWindowScroll:"useWindowScroll"}},pb),$b=Rm({useEmitter:vb,useEmitterValue:xb,usePublisher:wb}),Fb=Lm({useEmitter:vb,useEmitterValue:xb,usePublisher:wb});function Cb(e,r,t){return"normal"!==r&&!(null!=r&&r.endsWith("px"))&&t(`${e} was not resolved to pixel value correctly`,r,Dg.WARN),"normal"===r?0:parseInt(null!=r?r:"0",10)}const Eb=o.createContext({focusedIndex:-1,setFocusedIndex:()=>{}}),Sb=({children:e})=>{const[t,n]=s(-1);return r(Eb.Provider,{value:{focusedIndex:t,setFocusedIndex:n},children:e})},Db=F.div`
    border: ${uo["width-010"]} ${uo.solid} ${so.border};
    border-radius: ${ho.sm};
    background: ${so.bg};

    --x-spacing: 0px;
    --available-width: calc(100vw - var(--x-spacing) * 2);

    ${bo.MaxWidth.sm} {
        --x-spacing: ${mo["sm-margin"]}px;
        max-height: 15rem;
    }

    ${bo.MaxWidth.xs} {
        --x-spacing: ${mo["xs-margin"]}px;
    }

    ${bo.MaxWidth.xxs} {
        --x-spacing: ${mo["xxs-margin"]}px;
    }

    max-width: var(--available-width);

    ${e=>e.$customWidth?`width: ${e.$customWidth};`:e.$width?`width: ${e.$width}px; min-width: min(23rem, var(--available-width));`:"min-width: min(23rem, var(--available-width));"}

    max-height: min(27rem, var(--available-height, infinity * 1px));
    overflow: hidden;
    overflow-y: auto;
    ${e=>"small"===e.$variant?lo["body-md-regular"]:lo["body-baseline-regular"]}

    &::-webkit-scrollbar {
        width: 14px;
    }

    &::-webkit-scrollbar-track {
        background: transparent;
    }

    &::-webkit-scrollbar-thumb {
        background: ${so["bg-inverse-subtlest"]};
        border: 5px solid transparent;
        border-radius: ${ho.full};
        background-clip: padding-box;
    }
`,kb=F.div`
    background: transparent;
    padding: ${go["spacing-8"]};
`,Bb=F.ul`
    list-style-type: none;
`,Tb=F.li`
    display: flex;
    align-items: flex-start;
    gap: ${go["spacing-8"]};
    padding: ${go["spacing-12"]} ${go["spacing-8"]};
    cursor: pointer;
    border: none;
    border-radius: ${ho.none};
    outline: none;

    ${e=>e.$disabled?C`
                cursor: not-allowed;
            `:e.$active&&e.$selected?C`
                background: ${so["bg-hover"]};
            `:e.$active?C`
                background: ${so["bg-hover-subtle"]};
            `:void 0}
`,zb=F(N)`
    flex-shrink: 0;
    height: 1lh;
    width: 1rem;
    color: ${so["icon-selected"]};
`,Ib=F.div`
    flex-shrink: 0;
    height: 1lh;
    width: 1rem;
`,Ab=F(W)`
    flex-shrink: 0;
    height: 1lh;
    width: 1lh;
    color: ${so["icon-selected"]};
`,Ob=F(_)`
    flex-shrink: 0;
    height: 1lh;
    width: 1lh;
    color: ${so["icon-primary-subtlest"]};
`,Mb=F(ne)`
    flex-shrink: 0;
    height: 1lh;
    width: 1lh;
    color: ${so["icon-disabled-subtle"]};
`,Hb=F.div`
    width: 100%;
    display: flex;
    justify-content: flex-end;
`,Rb=F(No)`
    cursor: pointer;
    overflow: hidden;
    color: ${so["text-primary"]};
    font-size: inherit;
`,Lb=F(Rb)`
    ${lo["body-baseline-semibold"]}
`,jb=F(Rb)`
    ${lo["body-md-semibold"]}
    padding: ${go["spacing-8"]} ${go["spacing-8"]};
`,_b=F.div`
    width: 100%;
    display: flex;
    padding: ${go["spacing-12"]} ${go["spacing-16"]};
    align-items: center;
`,Wb=F(T)`
    margin-right: ${go["spacing-4"]};
    color: ${so["icon-error"]};
    height: 1em;
    width: 1em;
`,Nb=F(Ta)`
    margin-right: ${go["spacing-8"]};
    color: ${so.icon};
`,Pb=F.div`
    ${La()}
    color: ${so["text-subtle"]};
    padding: 0 ${go["spacing-16"]} ${go["spacing-12"]}
        ${go["spacing-16"]};
`,Yb=F.div`
    background: ${so["bg-strong"]};
    border-radius: ${ho.sm};
    display: flex;
    align-items: center;

    ${e=>"small"===e.$variant?lo["body-md-regular"]:lo["body-baseline-regular"]}
`,Vb=F.label`
    flex: 1;
    display: flex;
    align-items: center;
    gap: ${go["spacing-8"]};
    padding: ${e=>"small"===e.$variant?C`
                  ${go["spacing-8"]} ${go["spacing-16"]}
              `:C`10px ${go["spacing-8"]}`};
`,Ub=F(Wo)`
    flex: 1;
`,Zb=F(oe)`
    color: ${so.icon};
    flex-shrink: 0;
    height: 1em;
    width: 1em;
`,Gb=F(Es)`
    flex-shrink: 0;
    align-self: stretch;
    box-sizing: content-box;
    padding: ${go["spacing-8"]};
    margin-left: -${go["spacing-8"]};
    color: ${so.icon};
    cursor: pointer;
    font-size: inherit;

    svg {
        flex-shrink: 0;
        height: 1em;
        width: 1em;
    }
`,qb=v(((t,n)=>{var{value:o,variant:i,onClear:a}=t,s=ae(t,["value","variant","onClear"]);return e(Yb,{$variant:i,children:[e(Vb,{$variant:i,children:[r(Zb,{"aria-hidden":!0}),r(Ub,Object.assign({ref:n,value:o,$variant:i},s))]}),o&&r(Gb,{"aria-label":"Clear search",focusOutline:"browser",onClick:a,children:r(j,{"aria-hidden":!0})})]})})),Xb=v((({listItems:n,multiSelect:o,maxSelectable:i,selectedItems:l,disableItemFocus:d,itemsLoadState:c="success",itemTruncationType:u="end",itemMaxLines:h=2,labelDisplayType:b="inline",variant:f="default",listboxId:y,ariaLabel:v,matchElementWidth:w=!1,width:$,topScrollItem:F,onSelectItem:C,onSelectAll:E,onDismiss:S,onRetry:D,valueExtractor:k,listExtractor:B,renderListItem:T,renderCustomCallToAction:z,enableSearch:I,hideNoResultsDisplay:A,noResultsDescription:O,customLabels:M,searchPlaceholder:H,searchFunction:R,onSearch:L},j)=>{const{noResultsLabel:_="No results found.",selectAllButtonLabel:W="Select all",clearAllButtonLabel:N="Clear all"}=M||{},P=(null==M?void 0:M.searchPlaceholder)||H||"Search",Y=(null==M?void 0:M.noResultsDescription)||O,{focusedIndex:V,setFocusedIndex:U}=p(Eb),{elementWidth:Z,setFloatingRef:G,getFloatingProps:q,styles:X}=p(qs),[K,J]=s(""),[Q,ee]=s(null!=n?n:[]),re=xa(c),te=(()=>{const[e,r]=s(!1);return g((()=>{r(!0)}),[]),e})(),ne=a(null),oe=a(null),ie=a([]),ae=a(null),se=a(null),le=!!i&&!!l&&(null==l?void 0:l.length)===i,de=e=>{const r=B?B(e):null==e?void 0:e.toString();return"object"==typeof r?{title:r.title,secondaryLabel:r.secondaryLabel}:{title:null!=r?r:""}},ce=m((e=>!!Nu(l,(r=>Yu(r,e)))),[l]),ue=va((()=>null==R?void 0:R(K))),ge=va((()=>null==n?void 0:n.filter((e=>{const{title:r,secondaryLabel:t}=de(e),n=K.trim().toLowerCase();return r.toLowerCase().includes(n)||t&&t.toLowerCase().includes(n)})))),he=m((e=>{var r,t;if(d)return;if(ae.current)return U(-1),void setTimeout((()=>{var e;return null===(e=ae.current)||void 0===e?void 0:e.focus()}),0);const n=null!=Q?Q:[];if(0===n.length)return;if(void 0!==(null==e?void 0:e.index)){const t=Math.max(0,Math.min(e.index,n.length-1));return null===(r=se.current)||void 0===r||r.scrollToIndex({index:t,align:"center"}),U(t),void setTimeout((()=>{var e;return null===(e=ie.current[t])||void 0===e?void 0:e.focus()}),0)}const o=(null==e?void 0:e.preferSelected)?n.findIndex((e=>ce(e))):-1,i=-1!==o?o:V>=0&&V<n.length?V:0;null===(t=se.current)||void 0===t||t.scrollToIndex({index:i,align:"center"}),U(i),setTimeout((()=>{var e;return null===(e=ie.current[i])||void 0===e?void 0:e.focus()}),0)}),[ce,d,Q,V,U]),me=(e,r)=>{le&&!ce(e)||(U(r),null==C||C(e,(e=>k?k(e):e)(e)))},be=e=>{const r=e.target.value;J(r),null==L||L()},fe=()=>{var e;J(""),null===(e=ae.current)||void 0===e||e.focus(),null==L||L()},pe=()=>null==D?void 0:D();((e,r,t="window",n)=>{const o=a();g((()=>{o.current=r}),[r]),g((()=>{let r;switch(t){case"window":r=window;break;case"document":r=document;break;default:r=t}if(!r||!r.addEventListener)return;const i=e=>{var r;return null===(r=o.current)||void 0===r?void 0:r.call(o,e)};return r.addEventListener(e,i,n),()=>{null==r||r.removeEventListener(e,i,n)}}),[e,t])})("keydown",(e=>{var r,t;switch(e.code){case"ArrowDown":if(e.preventDefault(),V<Q.length-1){const e=V+1;null===(r=ie.current[e])||void 0===r||r.focus(),U(e)}break;case"ArrowUp":if(e.preventDefault(),V>0){const e=V-1;null===(t=ie.current[e])||void 0===t||t.focus(),U(e)}else 0===V&&ae.current&&(ae.current.focus(),U(-1));break;case"Space":case"Enter":document.activeElement===ie.current[V]&&(e.preventDefault(),Q[V]&&me(Q[V],V))}})),x(j,(()=>({refocus:he})),[he]),g((()=>{var e;if(!F)return void(null===(e=se.current)||void 0===e||e.scrollTo({top:0}));const r=setTimeout((()=>{if(!n)return;const e=n.indexOf(F);se.current&&-1!==e&&(se.current.scrollToIndex({index:e}),U(e))}),0);return()=>clearTimeout(r)}),[ie,n,U,F]),g((()=>{d||te&&re&&"success"===c&&ae.current&&(U(-1),ae.current.focus())}),[te,re,c,U,d]),g((()=>{var e;ee(null!==(e=""===K?n:R?ue():ge())&&void 0!==e?e:[])}),[ue,ge,n,R,K]),g((()=>{var e,r,t;if(te)return;if(d||!n)return;const o=n.findIndex((e=>ce(e)));ae.current?(U(-1),setTimeout((()=>{var e;return null===(e=ae.current)||void 0===e?void 0:e.focus()}),200)):V>0?(null===(e=se.current)||void 0===e||e.scrollToIndex({index:V,align:"center"}),setTimeout((()=>{var e;return null===(e=ie.current[V])||void 0===e?void 0:e.focus()}),200)):-1!==o?(null===(r=se.current)||void 0===r||r.scrollToIndex({index:o,align:"center"}),U(o),setTimeout((()=>{var e;return null===(e=ie.current[o])||void 0===e?void 0:e.focus()}),200)):(null===(t=se.current)||void 0===t||t.scrollToIndex({index:0}),U(0),setTimeout((()=>{var e;return null===(e=ie.current[0])||void 0===e?void 0:e.focus()}),200))}),[ce,d,V,n,te,U]);const ye=e=>o?r(le&&!e?Mb:e?Ab:Ob,{"aria-hidden":!0}):e?r(zb,{"aria-hidden":!0}):r(Ib,{}),ve=(e,t)=>{const{title:n,secondaryLabel:o}=de(e);return r(cl,{displayType:b,label:n,maxLines:h,selected:t,disabled:!t&&le,sublabel:o,truncationType:u,variant:f})},xe=(n,i)=>{if(!D||"success"===c){const a=ce(n),s=i===V;return r(Tb,{"aria-selected":a,"aria-multiselectable":o,"aria-disabled":!a&&le,"aria-posinset":i+1,"aria-setsize":null==Q?void 0:Q.length,"data-testid":"list-item",onClick:()=>me(n,i),onMouseEnter:()=>(e=>U(e))(i),ref:e=>{ie.current[i]=e},role:"option",tabIndex:s?0:-1,$active:s,$selected:a,$disabled:!a&&le,children:T?T(n,{selected:a}):e(t,{children:[ye(a),ve(n,a)]})},((e,r)=>`item_${r}__${k?k(e):e}`)(n,i))}},we=()=>{if((I||R)&&"success"===c)return r(qb,{ref:ae,onChange:be,value:K,placeholder:P,"data-testid":"search-input","aria-label":"Enter text to search",onClear:fe,variant:f})},$e=()=>{if(l&&o&&Q.length>0&&!K&&"success"===c)return r(Hb,{children:r(jb,{onClick:E,type:"button",$variant:f,children:i||0!==l.length?N:W})})},Fe=()=>{if(!A&&(K||!I)&&0===Q.length&&"success"===c)return e(t,{children:[e(_b,{"data-testid":"list-no-results",children:[r(Wb,{"data-testid":"no-result-icon"}),_]}),Y&&r(Pb,{"data-testid":"no-result-desc",children:Y})]})},Ce=()=>{if(D&&"loading"===c)return e(_b,{"data-testid":"list-loading",children:[r(Nb,{}),"Loading..."]})},Ee=()=>{if(D&&"fail"===c)return e(_b,{"data-testid":"list-fail",children:[r(Wb,{"data-testid":"load-error-icon"}),"Failed to load. ",r(Lb,{onClick:pe,type:"button",$variant:f,children:"Try again."})]})},Se=()=>{var e;const t="test"===process.env.NODE_ENV;return r(Bb,{role:"listbox",id:y,children:r(qm,Object.assign({ref:se,style:{height:"100%"},data:Q,customScrollParent:null!==(e=ne.current)&&void 0!==e?e:void 0,itemContent:(e,r)=>xe(r,e)},t?{initialItemCount:Q.length}:{}),t?Q.length:void 0)})};return e(Db,Object.assign({"data-testid":"dropdown-container",ref:$i(ne,G),style:X},q(),{$width:w?Z:void 0,$customWidth:$,$variant:f,children:[r(wa,{role:"status",children:v}),e(kb,{ref:oe,"data-testid":"dropdown-list",role:"group","aria-label":v,children:[we(),$e(),Fe(),Ce(),Ee(),Se()]}),(()=>{if(z)return r("div",{"data-testid":"custom-cta",children:z(S,Q)})})()]}))})),Kb=F(No)`
    display: flex;
    align-items: center;
    gap: ${go["spacing-8"]};
    width: 100%;
    padding: ${e=>e.$readOnly?`0 ${go["spacing-16"]}`:go["spacing-16"]};

    ${e=>"small"===e.$variant?C`
                  ${lo["body-md-regular"]}
                  height: calc(2.5rem - 2px); // exclude top and bottom borders
              `:C`
                  ${lo["body-baseline-regular"]}
                  height: calc(3rem - 2px);
              `}

    &:disabled {
        cursor: not-allowed;
    }

    &:focus-visible {
        outline: 2px solid ${so["focus-ring"]};
        outline-offset: -2px;
    }
`,Jb=F.div`
    display: flex;
    align-items: center;
    transform: rotate(${e=>e.$expanded?180:0}deg);
    transition: transform ${co["duration-250"]} ${co["ease-default"]};

    svg {
        color: ${so.icon};
        height: 1em;
        width: 1em;
    }
`;v(((t,n)=>{var{children:o,disabled:i,expanded:a,listboxId:s,popupRole:l,readOnly:d,variant:c}=t,u=ae(t,["children","disabled","expanded","listboxId","popupRole","readOnly","variant"]);return e(Kb,Object.assign({ref:n,type:"button",role:"combobox","aria-expanded":a,"aria-haspopup":l,"aria-controls":a?s:void 0,"data-testid":"selector","aria-disabled":i,"aria-readonly":d,$variant:c,$readOnly:d},u,{children:[o,!d&&r(Jb,{$expanded:a,$variant:c,children:r(D,{"aria-hidden":!0})})]}))})),F.li`
    display: ${e=>e.$visible?"flex":"none"};
`,F.div`
    flex: 1;
    display: flex;
    align-items: flex-start;
    gap: ${go["spacing-8"]};
    padding: ${go["spacing-12"]} ${go["spacing-8"]};
    cursor: ${e=>e.$toggleable?"default":"pointer"};
    overflow: hidden; // required for label to truncate properly
    border-radius: ${ho.none};
    outline: none;

    ${e=>e.$active&&C`
            background: ${so["bg-hover"]};
        `}
`,F.div`
    height: 1px;
    width: calc((1lh + ${go["spacing-8"]}) * ${e=>e.$level});
`,F.div`
    width: 1lh;
    height: 1lh;
    color: ${so["icon-primary"]};
    cursor: pointer;

    svg {
        width: 1lh;
        height: 1lh;
        transition: transform ${co["duration-350"]}
            ${co["ease-standard"]};

        ${e=>{if(e.$expanded)return C`
                    transform: rotate(90deg);
                `}}
    }
`,F.div`
    width: 1lh;
    height: 1lh;
    margin-right: ${go["spacing-8"]};
`,F.div`
    flex-shrink: 0;
    height: 1lh;
    width: ${e=>e.$hasNestedSiblings?"1lh":go["spacing-16"]};

    display: flex;
    justify-content: center;
`,F(ie)`
    flex-shrink: 0;
    height: 1lh;
    width: 1lh;
    color: ${so["icon-selected"]};
`;const Qb=F(_o)`
    height: 3rem;
    gap: ${go["spacing-8"]};
    // space for clear icon
    padding-right: calc(1.25rem + ${go["spacing-20"]});
`,ef=t=>{var{id:n,disabled:o=!1,error:i,value:l,format:d="12hr",readOnly:c,onChange:u,onFocus:h,onBlur:f,alignment:p="left",dropdownZIndex:y,startLimit:v,endLimit:x,interval:w=15,dropdownRootNode:$,"aria-labelledby":F,"aria-describedby":C,"aria-invalid":E}=t,S=ae(t,["id","disabled","error","value","format","readOnly","onChange","onFocus","onBlur","alignment","dropdownZIndex","startLimit","endLimit","interval","dropdownRootNode","aria-labelledby","aria-describedby","aria-invalid"]);const[D]=s((()=>Fi.generate())),[k,B]=s(null),[T,z]=s(!1),[I,A]=s(""),[O,M]=s(""),[H,R]=s(""),[L,j]=s(""),[_,W]=s(""),N=a(null),P=a(null),Y=a(null),V=`${D}-listbox`,U=`${D}-start-label`,Z=`${D}-end-label`,G=`${D}-error-message`,q=b((()=>qo.generateTimings(w,d,v,x)),[w,d,v,x]),X=b((()=>{if(""===L)return q;const e=qo.findClosestFlooredTime(L,q);return e?q.slice(q.indexOf(e)):[]}),[q,L]),K=m((e=>qo.parseInput(e,d)),[d]);g((()=>{var e,r;if(l){const t=null!==(e=K(l.start))&&void 0!==e?e:"",n=null!==(r=K(l.end))&&void 0!==r?r:"";M(t),R(n),j(t),W(n)}}),[l,K]),g((()=>{if(i)return void z(!1);const e=K(O),r=K(H);if(void 0===e)A("Invalid start time");else if(void 0===r)A("Invalid end time");else{if(!(""!==e&&""!==r&&qo.to24Hour(r)<qo.to24Hour(e)))return A(""),void(document.activeElement!==P.current&&document.activeElement!==Y.current||z(!0));A("End time must be after start time")}z(!1)}),[O,H,K,i]);const J=()=>"start"===k?"Selecting for: Start time":"end"===k?"Selecting for: End time":void 0,Q=e=>Fa(F,"start"===e?U:Z),ee=()=>Fa(C,!i&&I?G:void 0),re=e=>{o||c||(k||T||null==h||h(),B(e),z(!0))},te=e=>{var r;o||c||(B(e),z(!0),null===(r=("start"===e?P:Y).current)||void 0===r||r.select())};function ne(e){var r;switch(e.code){case"Enter":"start"===k?oe(O):"end"===k&&(T&&ie(H),null===(r=Y.current)||void 0===r||r.blur());break;case"Tab":se(O,H,{})}}const oe=e=>{se(e,H,{goToNextInput:!0})},ie=e=>{se(O,e,{triggerOnBlur:!0})},se=(e,r,{goToNextInput:t,triggerOnBlur:n})=>{var o,i,a;const s=null!==(o=K(e))&&void 0!==o?o:L,l=null!==(i=K(r))&&void 0!==i?i:_;M(s),R(l);s===L&&l===_||null==u||u({start:s,end:l}),t&&void 0!==K(e)&&(B("end"),null===(a=Y.current)||void 0===a||a.select()),n&&(B(null),z(!1),null==f||f()),j(s),W(l)},le=e=>{e.stopPropagation(),M(""),R(""),j(""),W("");null==u||u({start:"",end:""}),B(null),z(!1)},de=e=>{var r,t;const n=e.relatedTarget,o=(null===(r=null==n?void 0:n.matches)||void 0===r?void 0:r.call(n,"[data-floating-ui-focusable]"))||(null===(t=null==n?void 0:n.matches)||void 0===t?void 0:t.call(n,"[data-floating-ui-focus-guard]")),i=N.current&&N.current.contains(n);k&&!T&&!i&&!o&&se(O,H,{triggerOnBlur:!0})},ce=()=>{if(!c&&!o&&((null==O?void 0:O.length)>0||(null==H?void 0:H.length)>0))return r(nl,{onClick:le,type:"button","aria-label":"Clear",children:r(tl,{"aria-hidden":!0})})};return e(Po,Object.assign({id:n},S,{children:[r(Sb,{children:r(Xs,{enabled:!c&&!o,isOpen:T,renderElement:()=>e(Qb,{ref:N,$disabled:o,$error:i||!!I,$readOnly:c,onBlur:de,role:"group",children:[r(wa,{id:U,children:"Start time"}),r(wa,{id:Z,children:"End time"}),e(Ao,{error:i||!!I,currentActive:null===k?"none":k,children:[r(Vo,{ref:P,onFocus:()=>re("start"),placeholder:"start"===k?"hh:mm":"From",onChange:e=>M(e.target.value),value:O,readOnly:c,"data-testid":S["data-testid"]?`${S["data-testid"]}-timepicker-selector-start`:"timepicker-selector-start",onClick:()=>te("start"),onKeyDown:ne,autoComplete:"off",type:"text",role:"combobox","aria-labelledby":Q("start"),"aria-describedby":ee(),"aria-expanded":T&&"start"===k,"aria-controls":V,"aria-autocomplete":"list","aria-invalid":i||E||!!I,"aria-disabled":o,"aria-readonly":c}),r(Vo,{ref:Y,onFocus:()=>re("end"),placeholder:"end"===k?"hh:mm":"To",onChange:e=>R(e.target.value),value:H,readOnly:c,"data-testid":S["data-testid"]?`${S["data-testid"]}-timepicker-selector-end`:"timepicker-selector-end",onClick:()=>te("end"),onKeyDown:ne,autoComplete:"off",type:"text",role:"combobox","aria-labelledby":Q("end"),"aria-describedby":ee(),"aria-expanded":T&&"end"===k,"aria-controls":V,"aria-autocomplete":"list","aria-invalid":i||E||!!I||void 0,"aria-disabled":o||void 0,"aria-readonly":c||void 0})]}),ce()]}),renderDropdown:()=>r(Xb,"start"===k?{listItems:q,onSelectItem:oe,selectedItems:[O],topScrollItem:qo.findClosestFlooredTime(K(O),q),listboxId:V,ariaLabel:J(),disableItemFocus:!0,matchElementWidth:!0}:{listItems:X,onSelectItem:ie,selectedItems:[H],topScrollItem:qo.findClosestFlooredTime(K(H),X),listboxId:V,ariaLabel:J(),disableItemFocus:!0,matchElementWidth:!0}),onClose:e=>{"outside-press"===e?(B(null),z(!1),null==f||f()):se(O,H,{triggerOnBlur:!0})},onDismiss:()=>{var e;null===(e=("start"===k?P:Y).current)||void 0===e||e.focus(),z(!1)},offset:8,alignment:p,fitAvailableHeight:!0,customZIndex:y,rootNode:$})}),!i&&I&&e(Qs,{children:[r(Js,{"aria-hidden":!0}),r(el,{id:G,tabIndex:0,"data-testid":n?`${n}-error-message`:"error-message",children:I})]})]}))},rf=e=>{var{variant:t="dial"}=e,n=ae(e,["variant"]);return r("combobox"===t?ef:Ks,Object.assign({},n))};export{rf as TimeRangePicker};
//# sourceMappingURL=index.js.map
