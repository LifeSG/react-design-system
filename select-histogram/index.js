import{jsxs as e,jsx as r,Fragment as t}from"react/jsx-runtime";import*as n from"react";import i,{useState as o,useEffect as s,useMemo as a,useRef as l,isValidElement as d,createRef as c,cloneElement as u,PureComponent as g,useLayoutEffect as h,forwardRef as b}from"react";import{ExternalIcon as m}from"@lifesg/react-icons/external";import p,{css as f,keyframes as y,useTheme as v}from"styled-components";import{ExclamationCircleFillIcon as x}from"@lifesg/react-icons/exclamation-circle-fill";import{SquareIcon as w}from"@lifesg/react-icons/square";import{SquareFillIcon as F}from"@lifesg/react-icons/square-fill";import{SquareTickFillIcon as $}from"@lifesg/react-icons/square-tick-fill";import{TickIcon as E}from"@lifesg/react-icons/tick";import{CrossIcon as D}from"@lifesg/react-icons/cross";import{MagnifierIcon as C}from"@lifesg/react-icons/magnifier";import{ChevronDownIcon as B}from"@lifesg/react-icons/chevron-down";import"@lifesg/react-icons/caret-right";import{MinusSquareFillIcon as S}from"@lifesg/react-icons/minus-square-fill";import{useFloatingTree as k,useFloating as A,autoUpdate as M,offset as O,flip as z,shift as _,limitShift as T,size as L,useTransitionStyles as j,useClick as R,useDismiss as Y,useInteractions as P,FloatingPortal as I,FloatingFocusManager as H}from"@floating-ui/react";import{findDOMNode as N}from"react-dom";function W(e,r){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(n=Object.getOwnPropertySymbols(e);i<n.length;i++)r.indexOf(n[i])<0&&Object.prototype.propertyIsEnumerable.call(e,n[i])&&(t[n[i]]=e[n[i]])}return t}"function"==typeof SuppressedError&&SuppressedError;var V="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};function K(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var U=Array.isArray,Z="object"==typeof V&&V&&V.Object===Object&&V,X=Z,q="object"==typeof self&&self&&self.Object===Object&&self,J=X||q||Function("return this")(),G=J.Symbol,Q=G,ee=Object.prototype,re=ee.hasOwnProperty,te=ee.toString,ne=Q?Q.toStringTag:void 0;var ie=function(e){var r=re.call(e,ne),t=e[ne];try{e[ne]=void 0;var n=!0}catch(e){}var i=te.call(e);return n&&(r?e[ne]=t:delete e[ne]),i},oe=Object.prototype.toString;var se=ie,ae=function(e){return oe.call(e)},le=G?G.toStringTag:void 0;var de=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":le&&le in Object(e)?se(e):ae(e)};var ce=function(e){return null!=e&&"object"==typeof e},ue=de,ge=ce;var he=function(e){return"symbol"==typeof e||ge(e)&&"[object Symbol]"==ue(e)},be=U,me=he,pe=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,fe=/^\w*$/;var ye=function(e,r){if(be(e))return!1;var t=typeof e;return!("number"!=t&&"symbol"!=t&&"boolean"!=t&&null!=e&&!me(e))||(fe.test(e)||!pe.test(e)||null!=r&&e in Object(r))};var ve=function(e){var r=typeof e;return null!=e&&("object"==r||"function"==r)},xe=de,we=ve;var Fe,$e=function(e){if(!we(e))return!1;var r=xe(e);return"[object Function]"==r||"[object GeneratorFunction]"==r||"[object AsyncFunction]"==r||"[object Proxy]"==r},Ee=J["__core-js_shared__"],De=(Fe=/[^.]+$/.exec(Ee&&Ee.keys&&Ee.keys.IE_PROTO||""))?"Symbol(src)_1."+Fe:"";var Ce=function(e){return!!De&&De in e},Be=Function.prototype.toString;var Se=function(e){if(null!=e){try{return Be.call(e)}catch(e){}try{return e+""}catch(e){}}return""},ke=$e,Ae=Ce,Me=ve,Oe=Se,ze=/^\[object .+?Constructor\]$/,_e=Function.prototype,Te=Object.prototype,Le=_e.toString,je=Te.hasOwnProperty,Re=RegExp("^"+Le.call(je).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");var Ye=function(e,r){return null==e?void 0:e[r]},Pe=function(e){return!(!Me(e)||Ae(e))&&(ke(e)?Re:ze).test(Oe(e))},Ie=Ye;var He=function(e,r){var t=Ie(e,r);return Pe(t)?t:void 0},Ne=He(Object,"create"),We=Ne;var Ve=function(){this.__data__=We?We(null):{},this.size=0};var Ke=function(e){var r=this.has(e)&&delete this.__data__[e];return this.size-=r?1:0,r},Ue=Ne,Ze=Object.prototype.hasOwnProperty;var Xe=function(e){var r=this.__data__;if(Ue){var t=r[e];return"__lodash_hash_undefined__"===t?void 0:t}return Ze.call(r,e)?r[e]:void 0},qe=Ne,Je=Object.prototype.hasOwnProperty;var Ge=function(e){var r=this.__data__;return qe?void 0!==r[e]:Je.call(r,e)},Qe=Ne;var er=function(e,r){var t=this.__data__;return this.size+=this.has(e)?0:1,t[e]=Qe&&void 0===r?"__lodash_hash_undefined__":r,this},rr=Ve,tr=Ke,nr=Xe,ir=Ge,or=er;function sr(e){var r=-1,t=null==e?0:e.length;for(this.clear();++r<t;){var n=e[r];this.set(n[0],n[1])}}sr.prototype.clear=rr,sr.prototype.delete=tr,sr.prototype.get=nr,sr.prototype.has=ir,sr.prototype.set=or;var ar=sr;var lr=function(){this.__data__=[],this.size=0};var dr=function(e,r){return e===r||e!=e&&r!=r};var cr=function(e,r){for(var t=e.length;t--;)if(dr(e[t][0],r))return t;return-1},ur=cr,gr=Array.prototype.splice;var hr=function(e){var r=this.__data__,t=ur(r,e);return!(t<0)&&(t==r.length-1?r.pop():gr.call(r,t,1),--this.size,!0)},br=cr;var mr=function(e){var r=this.__data__,t=br(r,e);return t<0?void 0:r[t][1]},pr=cr;var fr=function(e){return pr(this.__data__,e)>-1},yr=cr;var vr=function(e,r){var t=this.__data__,n=yr(t,e);return n<0?(++this.size,t.push([e,r])):t[n][1]=r,this},xr=lr,wr=hr,Fr=mr,$r=fr,Er=vr;function Dr(e){var r=-1,t=null==e?0:e.length;for(this.clear();++r<t;){var n=e[r];this.set(n[0],n[1])}}Dr.prototype.clear=xr,Dr.prototype.delete=wr,Dr.prototype.get=Fr,Dr.prototype.has=$r,Dr.prototype.set=Er;var Cr=Dr,Br=He(J,"Map"),Sr=ar,kr=Cr,Ar=Br;var Mr=function(e){var r=typeof e;return"string"==r||"number"==r||"symbol"==r||"boolean"==r?"__proto__"!==e:null===e};var Or=function(e,r){var t=e.__data__;return Mr(r)?t["string"==typeof r?"string":"hash"]:t.map},zr=Or;var _r=function(e){var r=zr(this,e).delete(e);return this.size-=r?1:0,r},Tr=Or;var Lr=function(e){return Tr(this,e).get(e)},jr=Or;var Rr=function(e){return jr(this,e).has(e)},Yr=Or;var Pr=function(e,r){var t=Yr(this,e),n=t.size;return t.set(e,r),this.size+=t.size==n?0:1,this},Ir=function(){this.size=0,this.__data__={hash:new Sr,map:new(Ar||kr),string:new Sr}},Hr=_r,Nr=Lr,Wr=Rr,Vr=Pr;function Kr(e){var r=-1,t=null==e?0:e.length;for(this.clear();++r<t;){var n=e[r];this.set(n[0],n[1])}}Kr.prototype.clear=Ir,Kr.prototype.delete=Hr,Kr.prototype.get=Nr,Kr.prototype.has=Wr,Kr.prototype.set=Vr;var Ur=Kr,Zr=Ur;function Xr(e,r){if("function"!=typeof e||null!=r&&"function"!=typeof r)throw new TypeError("Expected a function");var t=function(){var n=arguments,i=r?r.apply(this,n):n[0],o=t.cache;if(o.has(i))return o.get(i);var s=e.apply(this,n);return t.cache=o.set(i,s)||o,s};return t.cache=new(Xr.Cache||Zr),t}Xr.Cache=Zr;var qr=Xr;var Jr=function(e){var r=qr(e,(function(e){return 500===t.size&&t.clear(),e})),t=r.cache;return r},Gr=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,Qr=/\\(\\)?/g,et=Jr((function(e){var r=[];return 46===e.charCodeAt(0)&&r.push(""),e.replace(Gr,(function(e,t,n,i){r.push(n?i.replace(Qr,"$1"):t||e)})),r}));var rt=function(e,r){for(var t=-1,n=null==e?0:e.length,i=Array(n);++t<n;)i[t]=r(e[t],t,e);return i},tt=U,nt=he,it=G?G.prototype:void 0,ot=it?it.toString:void 0;var st=function e(r){if("string"==typeof r)return r;if(tt(r))return rt(r,e)+"";if(nt(r))return ot?ot.call(r):"";var t=r+"";return"0"==t&&1/r==-1/0?"-0":t},at=st;var lt=U,dt=ye,ct=et,ut=function(e){return null==e?"":at(e)};var gt=he;var ht=function(e,r){return lt(e)?e:dt(e,r)?[e]:ct(ut(e))},bt=function(e){if("string"==typeof e||gt(e))return e;var r=e+"";return"0"==r&&1/e==-1/0?"-0":r};var mt=function(e,r){for(var t=0,n=(r=ht(r,e)).length;null!=e&&t<n;)e=e[bt(r[t++])];return t&&t==n?e:void 0};var pt=K((function(e,r,t){var n=null==e?void 0:mt(e,r);return void 0===n?t:n}));const ft=(e,r,t)=>pt(t,r)||pt(e,r),yt=(e,r)=>{const t=r||e.defaultValue;return pt(e.collections,t)},vt={collections:{default:{"width-005":.5,"width-010":1,"width-020":2,"width-040":4,solid:"solid"}},defaultValue:"default"},xt=e=>r=>{var t;const n=r.theme,i=yt(vt,null==n?void 0:n.borderScheme);return(null===(t=null==n?void 0:n.overrides)||void 0===t?void 0:t.border)?`${ft(i,e,n.overrides.border)}px`:`${i[e]}px`},wt={"width-005":xt("width-005"),"width-010":xt("width-010"),"width-020":xt("width-020"),"width-040":xt("width-040"),solid:(Ft="solid",e=>{var r;const t=e.theme,n=yt(vt,null==t?void 0:t.borderScheme),i=(null===(r=null==t?void 0:t.overrides)||void 0===r?void 0:r.border)?ft(n,Ft,t.overrides.border):n[Ft];return"function"==typeof i?i(e):i})};var Ft;const $t={"brand-10":"#2C0C0B","brand-20":"#4C1513","brand-30":"#6C1D1B","brand-40":"#922825","brand-50":"#BF3431","brand-60":"#F15D5A","brand-70":"#F69491","brand-80":"#FABAB7","brand-90":"#FCD7D2","brand-95":"#FFEBE7","brand-100":"#FFF6F4","primary-10":"#1A122C","primary-20":"#2F1F4D","primary-30":"#422D6E","primary-40":"#5B3D97","primary-50":"#7654BC","primary-60":"#9A82CD","primary-70":"#B7A7D8","primary-80":"#CFC5E5","primary-90":"#E3DDF0","primary-95":"#F0EDF7","primary-100":"#F9F8FC","secondary-10":"#0E1723","secondary-20":"#18293D","secondary-30":"#233A57","secondary-40":"#305078","secondary-50":"#4B6A8F","secondary-60":"#7B91A9","secondary-70":"#A1B1C3","secondary-80":"#C1CBD7","secondary-90":"#DBE1E8","secondary-95":"#EBEFF2","secondary-100":"#F7F8FA","neutral-10":"#161616","neutral-20":"#282828","neutral-30":"#393939","neutral-40":"#4E4E4E","neutral-50":"#686868","neutral-60":"#8E8E8E","neutral-70":"#AFAFB0","neutral-80":"#C7CACA","neutral-90":"#DDE1E2","neutral-95":"#EDEFEF","neutral-100":"#F9F9F9","success-10":"#081A0F","success-20":"#0E2D1B","success-30":"#154126","success-40":"#1C5A34","success-50":"#257645","success-60":"#44A068","success-70":"#64C189","success-80":"#80DCA5","success-90":"#B4ECCB","success-95":"#D5F6E2","success-100":"#EFFCF4","warning-10":"#221302","warning-20":"#3B2204","warning-30":"#543106","warning-40":"#744408","warning-50":"#98590C","warning-60":"#D07A13","warning-70":"#E4A244","warning-80":"#F5C26C","warning-90":"#FADBA6","warning-95":"#FCECD4","warning-100":"#FDF7F0","error-10":"#330505","error-20":"#550808","error-30":"#750C0C","error-40":"#9E130F","error-50":"#CB2213","error-60":"#DE6C6C","error-70":"#E89B9B","error-80":"#EFBEBE","error-90":"#F5D9D9","error-95":"#F9ECEC","error-100":"#FCF7F7","info-10":"#021824","info-20":"#032B3F","info-30":"#053D59","info-40":"#065478","info-50":"#176E9B","info-60":"#5296BE","info-70":"#82B5DA","info-80":"#ACCFE7","info-90":"#CCE3F1","info-95":"#E3F1F8","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000","primary-inverse":"#FEAB10"},Et={"brand-10":"#1F1221","brand-20":"#371F3B","brand-30":"#4E2C53","brand-40":"#6B3E73","brand-50":"#8D5197","brand-60":"#FF3399","brand-70":"#FF88C4","brand-80":"#FFB3D9","brand-90":"#FFD4E9","brand-95":"#FFE8F3","brand-100":"#FFD6EB","primary-10":"#1F1221","primary-20":"#371F3B","primary-30":"#4E2C53","primary-40":"#6B3E73","primary-50":"#8D5197","primary-60":"#B07DB7","primary-70":"#C7A3CC","primary-80":"#D9C2DD","primary-90":"#E9DBEB","primary-95":"#F3ECF4","primary-100":"#FAF7FA","secondary-10":"#2D091B","secondary-20":"#4D0F2E","secondary-30":"#6B1540","secondary-40":"#931D58","secondary-50":"#C02673","secondary-60":"#FF409F","secondary-70":"#FF88C4","secondary-80":"#FFB3D9","secondary-90":"#FFD4E9","secondary-95":"#FFE8F3","secondary-100":"#FFF8FC","neutral-10":"#161616","neutral-20":"#282828","neutral-30":"#393939","neutral-40":"#4E4E4E","neutral-50":"#686868","neutral-60":"#8E8E8E","neutral-70":"#AFAFB0","neutral-80":"#C7CACA","neutral-90":"#DDE1E2","neutral-95":"#EDEFEF","neutral-100":"#F9F9F9","success-10":"#081A0F","success-20":"#0E2D1B","success-30":"#154126","success-40":"#1C5A34","success-50":"#257645","success-60":"#44A068","success-70":"#64C189","success-80":"#80DCA5","success-90":"#B4ECCB","success-95":"#D5F6E2","success-100":"#EFFCF4","warning-10":"#221302","warning-20":"#3B2204","warning-30":"#543106","warning-40":"#744408","warning-50":"#98590C","warning-60":"#D07A13","warning-70":"#E4A244","warning-80":"#F5C26C","warning-90":"#FADBA6","warning-95":"#FCECD4","warning-100":"#FDF7F0","error-10":"#330505","error-20":"#550808","error-30":"#750C0C","error-40":"#9E130F","error-50":"#CB2213","error-60":"#DE6C6C","error-70":"#E89B9B","error-80":"#EFBEBE","error-90":"#F5D9D9","error-95":"#F9ECEC","error-100":"#FCF7F7","info-10":"#021824","info-20":"#032B3F","info-30":"#053D59","info-40":"#065478","info-50":"#176E9B","info-60":"#5296BE","info-70":"#82B5DA","info-80":"#ACCFE7","info-90":"#CCE3F1","info-95":"#E3F1F8","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000","primary-inverse":"#FEAB10"},Dt={"brand-10":"#2C0C0B","brand-20":"#4C1513","brand-30":"#6C1D1B","brand-40":"#922825","brand-50":"#BF3431","brand-60":"#F15D5A","brand-70":"#F69491","brand-80":"#FABAB7","brand-90":"#FCD7D2","brand-95":"#FFEBE7","brand-100":"#FFF6F4","primary-10":"#001731","primary-20":"#002752","primary-30":"#003874","primary-40":"#004D9F","primary-50":"#1768BE","primary-60":"#3C91EC","primary-70":"#6CB4FF","primary-80":"#A5CDFF","primary-90":"#CFE1FE","primary-95":"#E8F0FE","primary-100":"#F7F9FF","secondary-10":"#131529","secondary-20":"#222547","secondary-30":"#2F3565","secondary-40":"#42498B","secondary-50":"#5B62A7","secondary-60":"#858CBD","secondary-70":"#A8ADCF","secondary-80":"#C6C9E0","secondary-90":"#DDDFEC","secondary-95":"#EDEEF5","secondary-100":"#F8F8FB","neutral-10":"#161616","neutral-20":"#282828","neutral-30":"#393939","neutral-40":"#4E4E4E","neutral-50":"#686868","neutral-60":"#8E8E8E","neutral-70":"#AFAFB0","neutral-80":"#C7CACA","neutral-90":"#DDE1E2","neutral-95":"#EDEFEF","neutral-100":"#F9F9F9","success-10":"#081A0F","success-20":"#0E2D1B","success-30":"#154126","success-40":"#1C5A34","success-50":"#257645","success-60":"#44A068","success-70":"#64C189","success-80":"#80DCA5","success-90":"#B4ECCB","success-95":"#D5F6E2","success-100":"#EFFCF4","warning-10":"#221302","warning-20":"#3B2204","warning-30":"#543106","warning-40":"#744408","warning-50":"#98590C","warning-60":"#D07A13","warning-70":"#E4A244","warning-80":"#F5C26C","warning-90":"#FADBA6","warning-95":"#FCECD4","warning-100":"#FDF7F0","error-10":"#330505","error-20":"#550808","error-30":"#750C0C","error-40":"#9E130F","error-50":"#CB2213","error-60":"#DE6C6C","error-70":"#E89B9B","error-80":"#EFBEBE","error-90":"#F5D9D9","error-95":"#F9ECEC","error-100":"#FCF7F7","info-10":"#021824","info-20":"#032B3F","info-30":"#053D59","info-40":"#065478","info-50":"#176E9B","info-60":"#5296BE","info-70":"#82B5DA","info-80":"#ACCFE7","info-90":"#CCE3F1","info-95":"#E3F1F8","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000","primary-inverse":"#FEAB10"},Ct={"brand-10":"#2C0C0B","brand-20":"#4C1513","brand-30":"#6C1D1B","brand-40":"#922825","brand-50":"#BF3431","brand-60":"#F15D5A","brand-70":"#F69491","brand-80":"#FABAB7","brand-90":"#FCD7D2","brand-95":"#FFEBE7","brand-100":"#FFF6F4","primary-10":"#0011924","primary-20":"#032B40","primary-30":"#043D5A","primary-40":"#05547B","primary-50":"#096EA1","primary-60":"#2098D3","primary-70":"#5CB9E8","primary-80":"#8BD3F6","primary-90":"#BEE6FA","primary-95":"#E2F2FA","primary-100":"#F4FAFC","secondary-10":"#131529","secondary-20":"#222547","secondary-30":"#2F3565","secondary-40":"#42498B","secondary-50":"#5B62A7","secondary-60":"#858CBD","secondary-70":"#A8ADCF","secondary-80":"#C6C9E0","secondary-90":"#DDDFEC","secondary-95":"#EDEEF5","secondary-100":"#F8F8FB","neutral-10":"#161616","neutral-20":"#282828","neutral-30":"#393939","neutral-40":"#4E4E4E","neutral-50":"#686868","neutral-60":"#8E8E8E","neutral-70":"#AFAFB0","neutral-80":"#C7CACA","neutral-90":"#DDE1E2","neutral-95":"#EDEFEF","neutral-100":"#F9F9F9","success-10":"#081A0F","success-20":"#0E2D1B","success-30":"#154126","success-40":"#1C5A34","success-50":"#257645","success-60":"#44A068","success-70":"#64C189","success-80":"#80DCA5","success-90":"#B4ECCB","success-95":"#D5F6E2","success-100":"#EFFCF4","warning-10":"#221302","warning-20":"#3B2204","warning-30":"#543106","warning-40":"#744408","warning-50":"#98590C","warning-60":"#D07A13","warning-70":"#E4A244","warning-80":"#F5C26C","warning-90":"#FADBA6","warning-95":"#FCECD4","warning-100":"#FDF7F0","error-10":"#330505","error-20":"#550808","error-30":"#750C0C","error-40":"#9E130F","error-50":"#CB2213","error-60":"#DE6C6C","error-70":"#E89B9B","error-80":"#EFBEBE","error-90":"#F5D9D9","error-95":"#F9ECEC","error-100":"#FCF7F7","info-10":"#021824","info-20":"#032B3F","info-30":"#053D59","info-40":"#065478","info-50":"#176E9B","info-60":"#5296BE","info-70":"#82B5DA","info-80":"#ACCFE7","info-90":"#CCE3F1","info-95":"#E3F1F8","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000","primary-inverse":"#FEAB10"},Bt={"brand-10":"#001A19","brand-20":"#002D2B","brand-30":"#00413D","brand-40":"#005954","brand-50":"#00756F","brand-60":"#03A098","brand-70":"#55BFBA","brand-80":"#92D6D2","brand-90":"#BFE7E5","brand-95":"#DDF2F1","brand-100":"#F4FBFA","primary-10":"#09191D","primary-20":"#102B34","primary-30":"#173D49","primary-40":"#205666","primary-50":"#2A7086","primary-60":"#2A7086","primary-70":"#8CB6C2","primary-80":"#B2CED6","primary-90":"#D1E2E7","primary-95":"#E8F0F3","primary-100":"#F9F8FC","secondary-10":"#001731","secondary-20":"#002752","secondary-30":"#003874","secondary-40":"#004D9F","secondary-50":"#5B62A7","secondary-60":"#858CBD","secondary-70":"#A8ADCF","secondary-80":"#C6C9E0","secondary-90":"#DDDFEC","secondary-95":"#EDEEF5","secondary-100":"#F8F8FB","neutral-10":"#161616","neutral-20":"#282828","neutral-30":"#393939","neutral-40":"#4E4E4E","neutral-50":"#686868","neutral-60":"#8E8E8E","neutral-70":"#AFAFB0","neutral-80":"#C7CACA","neutral-90":"#DDE1E2","neutral-95":"#EDEFEF","neutral-100":"#F9F9F9","success-10":"#081A0F","success-20":"#0E2D1B","success-30":"#154126","success-40":"#1C5A34","success-50":"#257645","success-60":"#44A068","success-70":"#64C189","success-80":"#80DCA5","success-90":"#B4ECCB","success-95":"#D5F6E2","success-100":"#EFFCF4","warning-10":"#221302","warning-20":"#3B2204","warning-30":"#543106","warning-40":"#744408","warning-50":"#98590C","warning-60":"#D07A13","warning-70":"#E4A244","warning-80":"#F5C26C","warning-90":"#FADBA6","warning-95":"#FCECD4","warning-100":"#FDF7F0","error-10":"#330505","error-20":"#550808","error-30":"#750C0C","error-40":"#9E130F","error-50":"#CB2213","error-60":"#DE6C6C","error-70":"#E89B9B","error-80":"#EFBEBE","error-90":"#F5D9D9","error-95":"#F9ECEC","error-100":"#FCF7F7","info-10":"#021824","info-20":"#032B3F","info-30":"#053D59","info-40":"#065478","info-50":"#176E9B","info-60":"#5296BE","info-70":"#82B5DA","info-80":"#ACCFE7","info-90":"#CCE3F1","info-95":"#E3F1F8","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000","primary-inverse":"#FEAB10"},St={"brand-10":"#881317","brand-20":"#B5191E","brand-30":"#B5040A","brand-40":"#D0333F","brand-50":"#DC666F","brand-60":"#E28087","brand-70":"#E7999F","brand-80":"#EDB3B7","brand-90":"#F3CCCF","brand-95":"#F9E6E7","brand-100":"#FCF2F3","primary-10":"#000000","primary-20":"#191919","primary-30":"#333333","primary-40":"#4D4D4D","primary-50":"#666666","primary-60":"#808080","primary-70":"#999999","primary-80":"#B3B3B3","primary-90":"#E6E6E6","primary-95":"#F7F7F7","primary-100":"#FFFFFF","secondary-10":"#19151D","secondary-20":"#2B2533","secondary-30":"#3E3649","secondary-40":"#564A64","secondary-50":"#6F637D","secondary-60":"#948B9F","secondary-70":"#B3ACBB","secondary-80":"#CCC8D2","secondary-90":"#E1DEE4","secondary-95":"#EFEEF1","secondary-100":"#F9F8F9","neutral-10":"#000000","neutral-20":"#191919","neutral-30":"#333333","neutral-40":"#4D4D4D","neutral-50":"#666666","neutral-60":"#808080","neutral-70":"#999999","neutral-80":"#B3B3B3","neutral-90":"#E6E6E6","neutral-95":"#F7F7F7","neutral-100":"#FFFFFF","success-10":"#081A0F","success-20":"#0E2D1B","success-30":"#154126","success-40":"#1C5A34","success-50":"#257645","success-60":"#44A068","success-70":"#64C189","success-80":"#80DCA5","success-90":"#B4ECCB","success-95":"#D5F6E2","success-100":"#EFFCF4","warning-10":"#221302","warning-20":"#3B2204","warning-30":"#543106","warning-40":"#744408","warning-50":"#98590C","warning-60":"#D07A13","warning-70":"#E4A244","warning-80":"#F5C26C","warning-90":"#FADBA6","warning-95":"#FCECD4","warning-100":"#FDF7F0","error-10":"#330505","error-20":"#550808","error-30":"#750C0C","error-40":"#9E130F","error-50":"#CB2213","error-60":"#DE6C6C","error-70":"#E89B9B","error-80":"#EFBEBE","error-90":"#F5D9D9","error-95":"#F9ECEC","error-100":"#FCF7F7","info-10":"#021824","info-20":"#032B3F","info-30":"#053D59","info-40":"#065478","info-50":"#176E9B","info-60":"#5296BE","info-70":"#82B5DA","info-80":"#ACCFE7","info-90":"#CCE3F1","info-95":"#E3F1F8","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000","primary-inverse":"#FEAB10"},kt={"brand-10":"#0E123A","brand-20":"#191E65","brand-30":"#232B90","brand-40":"#303BC5","brand-50":"#494CFF","brand-60":"#AD6EFF","brand-70":"#AEA4FF","brand-80":"#C5C4FF","brand-90":"#DDDCFF","brand-95":"#EDECFF","brand-100":"#F8F8FF","primary-10":"#10152B","primary-20":"#1C254B","primary-30":"#28356C","primary-40":"#38489A","primary-50":"#4D5AD7","primary-60":"#7487F2","primary-70":"#9AAAFC","primary-80":"#BDC7FD","primary-90":"#DADFFB","primary-95":"#ECEEFE","primary-100":"#F7F8FF","secondary-10":"#19151D","secondary-20":"#2B2533","secondary-30":"#3E3649","secondary-40":"#564A64","secondary-50":"#6F637D","secondary-60":"#948B9F","secondary-70":"#B3ACBB","secondary-80":"#CCC8D2","secondary-90":"#E1DEE4","secondary-95":"#EFEEF1","secondary-100":"#F9F8F9","neutral-10":"#161616","neutral-20":"#282828","neutral-30":"#393939","neutral-40":"#4E4E4E","neutral-50":"#686868","neutral-60":"#8E8E8E","neutral-70":"#AFAFB0","neutral-80":"#C7CACA","neutral-90":"#DDE1E2","neutral-95":"#EDEFEF","neutral-100":"#F9F9F9","success-10":"#081A0F","success-20":"#0E2D1B","success-30":"#154126","success-40":"#1C5A34","success-50":"#257645","success-60":"#44A068","success-70":"#64C189","success-80":"#80DCA5","success-90":"#B4ECCB","success-95":"#D5F6E2","success-100":"#EFFCF4","warning-10":"#221302","warning-20":"#3B2204","warning-30":"#543106","warning-40":"#744408","warning-50":"#98590C","warning-60":"#D07A13","warning-70":"#E4A244","warning-80":"#F5C26C","warning-90":"#FADBA6","warning-95":"#FCECD4","warning-100":"#FDF7F0","error-10":"#330505","error-20":"#550808","error-30":"#750C0C","error-40":"#9E130F","error-50":"#CB2213","error-60":"#DE6C6C","error-70":"#E89B9B","error-80":"#EFBEBE","error-90":"#F5D9D9","error-95":"#F9ECEC","error-100":"#FCF7F7","info-10":"#021824","info-20":"#032B3F","info-30":"#053D59","info-40":"#065478","info-50":"#176E9B","info-60":"#5296BE","info-70":"#82B5DA","info-80":"#ACCFE7","info-90":"#CCE3F1","info-95":"#E3F1F8","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000","primary-inverse":"#FEAB10"},At={"brand-10":"#170F39","brand-20":"#281C62","brand-30":"#38268B","brand-40":"#4D34BF","brand-50":"#5735DF","brand-60":"#9986F9","brand-70":"#B2A5F8","brand-80":"#CDC2FA","brand-90":"#E2DCFC","brand-95":"#EFEDFE","brand-100":"#FAF8FD","primary-10":"#170F39","primary-20":"#281C62","primary-30":"#38268B","primary-40":"#4D34BF","primary-50":"#5735DF","primary-60":"#9986F9","primary-70":"#B2A5F8","primary-80":"#CDC2FA","primary-90":"#E2DCFC","primary-95":"#EFEDFE","primary-100":"#FAF8FD","secondary-10":"#251204","secondary-20":"#401F08","secondary-30":"#5B2C0B","secondary-40":"#7E3D0F","secondary-50":"#B04900","secondary-60":"#E26E1C","secondary-70":"#FF9445","secondary-80":"#FFBB8E","secondary-90":"#FFD9BF","secondary-95":"#FFECDF","secondary-100":"#FFF8F3","neutral-10":"#161616","neutral-20":"#282828","neutral-30":"#393939","neutral-40":"#4E4E4E","neutral-50":"#686868","neutral-60":"#8E8E8E","neutral-70":"#AFAFB0","neutral-80":"#C7CACA","neutral-90":"#DDE1E2","neutral-95":"#EDEFEF","neutral-100":"#F9F9F9","success-10":"#031B15","success-20":"#082D24","success-30":"#094134","success-40":"#0D5947","success-50":"#10755E","success-60":"#16A181","success-70":"#1EC59D","success-80":"#6FDDC2","success-90":"#AFECDE","success-95":"#D5F5ED","success-100":"#F1FCF9","warning-10":"#1F1500","warning-20":"#362500","warning-30":"#4D3501","warning-40":"#6A4801","warning-50":"#8B6001","warning-60":"#BF8301","warning-70":"#EAA102","warning-80":"#FFBF34","warning-90":"#FFDC8F","warning-95":"#FFEDC7","warning-100":"#FFF8EA","error-10":"#270F10","error-20":"#441B1B","error-30":"#612627","error-40":"#853535","error-50":"#AF4546","error-60":"#EC6162","error-70":"#F29696","error-80":"#F7BBBC","error-90":"#FAD8D8","error-95":"#FCEAEA","error-100":"#FEF7F7","info-10":"#0F1627","info-20":"#1B2745","info-30":"#273763","info-40":"#354D88","info-50":"#4665B3","info-60":"#618AF6","info-70":"#8DADFF","info-80":"#B4C9FF","info-90":"#D3DFFF","info-95":"#E9EFFF","info-100":"#F5F8FF",white:"#FFFFFF",black:"#000000","primary-inverse":"#FEAB10"},Mt={collections:{lifesg:Dt,bookingsg:$t,rbs:kt,mylegacy:Ct,ccube:Et,oneservice:Bt,pa:St,a11yplayground:At},defaultValue:"lifesg"},Ot={collections:{lifesg:Dt,bookingsg:$t,rbs:kt,mylegacy:Ct,ccube:Et,oneservice:Bt,pa:St,a11yplayground:At},defaultValue:"lifesg"},zt=e=>r=>{var t;const n=r.theme,i="dark"===(null==n?void 0:n.colourMode),o=yt(i?Ot:Mt,null==n?void 0:n.colourScheme),s=i?"primitiveColourDark":"primitiveColour",a=null===(t=null==n?void 0:n.overrides)||void 0===t?void 0:t[s];return a?ft(o,e,a):o[e]},_t={"brand-10":zt("brand-10"),"brand-20":zt("brand-20"),"brand-30":zt("brand-30"),"brand-40":zt("brand-40"),"brand-50":zt("brand-50"),"brand-60":zt("brand-60"),"brand-70":zt("brand-70"),"brand-80":zt("brand-80"),"brand-90":zt("brand-90"),"brand-95":zt("brand-95"),"brand-100":zt("brand-100"),"primary-10":zt("primary-10"),"primary-20":zt("primary-20"),"primary-30":zt("primary-30"),"primary-40":zt("primary-40"),"primary-50":zt("primary-50"),"primary-60":zt("primary-60"),"primary-70":zt("primary-70"),"primary-80":zt("primary-80"),"primary-90":zt("primary-90"),"primary-95":zt("primary-95"),"primary-100":zt("primary-100"),"secondary-10":zt("secondary-10"),"secondary-20":zt("secondary-20"),"secondary-30":zt("secondary-30"),"secondary-40":zt("secondary-40"),"secondary-50":zt("secondary-50"),"secondary-60":zt("secondary-60"),"secondary-70":zt("secondary-70"),"secondary-80":zt("secondary-80"),"secondary-90":zt("secondary-90"),"secondary-95":zt("secondary-95"),"secondary-100":zt("secondary-100"),"neutral-10":zt("neutral-10"),"neutral-20":zt("neutral-20"),"neutral-30":zt("neutral-30"),"neutral-40":zt("neutral-40"),"neutral-50":zt("neutral-50"),"neutral-60":zt("neutral-60"),"neutral-70":zt("neutral-70"),"neutral-80":zt("neutral-80"),"neutral-90":zt("neutral-90"),"neutral-95":zt("neutral-95"),"neutral-100":zt("neutral-100"),"success-10":zt("success-10"),"success-20":zt("success-20"),"success-30":zt("success-30"),"success-40":zt("success-40"),"success-50":zt("success-50"),"success-60":zt("success-60"),"success-70":zt("success-70"),"success-80":zt("success-80"),"success-90":zt("success-90"),"success-95":zt("success-95"),"success-100":zt("success-100"),"warning-10":zt("warning-10"),"warning-20":zt("warning-20"),"warning-30":zt("warning-30"),"warning-40":zt("warning-40"),"warning-50":zt("warning-50"),"warning-60":zt("warning-60"),"warning-70":zt("warning-70"),"warning-80":zt("warning-80"),"warning-90":zt("warning-90"),"warning-95":zt("warning-95"),"warning-100":zt("warning-100"),"error-10":zt("error-10"),"error-20":zt("error-20"),"error-30":zt("error-30"),"error-40":zt("error-40"),"error-50":zt("error-50"),"error-60":zt("error-60"),"error-70":zt("error-70"),"error-80":zt("error-80"),"error-90":zt("error-90"),"error-95":zt("error-95"),"error-100":zt("error-100"),"info-10":zt("info-10"),"info-20":zt("info-20"),"info-30":zt("info-30"),"info-40":zt("info-40"),"info-50":zt("info-50"),"info-60":zt("info-60"),"info-70":zt("info-70"),"info-80":zt("info-80"),"info-90":zt("info-90"),"info-95":zt("info-95"),"info-100":zt("info-100"),white:zt("white"),black:zt("black"),"primary-inverse":zt("primary-inverse")},Tt={text:zt("neutral-20"),"text-subtle":zt("neutral-30"),"text-subtler":zt("neutral-50"),"text-subtlest":zt("neutral-60"),"text-primary":zt("primary-50"),"text-hover":zt("primary-40"),"text-selected":zt("primary-50"),"text-selected-hover":zt("primary-40"),"text-disabled":zt("neutral-50"),"text-disabled-subtle":zt("neutral-60"),"text-disabled-subtlest":zt("neutral-80"),"text-selected-disabled":zt("neutral-20"),"text-success":zt("success-40"),"text-warning":zt("warning-40"),"text-error":zt("error-40"),"text-info":zt("info-40"),"text-inverse":zt("white"),icon:zt("neutral-50"),"icon-subtle":zt("neutral-60"),"icon-strongest":zt("neutral-20"),"icon-primary":zt("primary-50"),"icon-primary-subtle":zt("primary-60"),"icon-primary-subtlest":zt("primary-70"),"icon-hover":zt("primary-40"),"icon-selected":zt("primary-50"),"icon-selected-hover":zt("primary-40"),"icon-disabled":zt("neutral-50"),"icon-disabled-subtle":zt("neutral-60"),"icon-selected-disabled":zt("neutral-60"),"icon-success":zt("success-50"),"icon-warning":zt("warning-60"),"icon-error":zt("error-50"),"icon-error-strong":zt("error-40"),"icon-info":zt("info-50"),"icon-inverse":zt("white"),"icon-primary-inverse":zt("primary-inverse"),border:zt("neutral-90"),"border-strong":zt("neutral-70"),"border-stronger":zt("neutral-50"),"border-primary":zt("primary-50"),"border-primary-subtle":zt("primary-60"),"border-hover":zt("primary-90"),"border-hover-strong":zt("primary-60"),"border-selected":zt("primary-50"),"border-selected-subtle":zt("primary-70"),"border-selected-subtlest":zt("primary-90"),"border-selected-hover":zt("primary-40"),"border-focus":zt("primary-60"),"border-focus-strong":zt("primary-50"),"border-disabled":zt("neutral-90"),"border-selected-disabled":zt("neutral-70"),"border-success":zt("success-60"),"border-warning":zt("warning-60"),"border-error":zt("error-60"),"border-error-focus":zt("error-60"),"border-error-focus-strong":zt("error-40"),"border-error-strong":zt("error-40"),"border-info":zt("info-60"),bg:zt("white"),"bg-strong":zt("neutral-100"),"bg-stronger":zt("neutral-95"),"bg-strongest":zt("neutral-90"),"bg-hover":zt("primary-95"),"bg-hover-strong":zt("primary-90"),"bg-hover-subtle":zt("primary-100"),"bg-hover-neutral":zt("neutral-100"),"bg-hover-neutral-strong":zt("neutral-90"),"bg-selected":zt("primary-95"),"bg-selected-hover":zt("primary-90"),"bg-selected-strong":zt("primary-90"),"bg-selected-stronger":zt("primary-70"),"bg-selected-strongest":zt("primary-50"),"bg-selected-strongest-hover":zt("primary-40"),"bg-disabled":zt("neutral-95"),"bg-selected-disabled":zt("neutral-95"),"bg-selected-stronger-disabled":zt("neutral-70"),"bg-success":zt("success-100"),"bg-success-hover":zt("success-95"),"bg-success-strong":zt("success-50"),"bg-success-strong-hover":zt("success-40"),"bg-warning":zt("warning-100"),"bg-warning-hover":zt("warning-95"),"bg-warning-strong":zt("warning-50"),"bg-warning-strong-hover":zt("warning-40"),"bg-info":zt("info-100"),"bg-info-hover":zt("info-95"),"bg-info-strong":zt("info-50"),"bg-info-strong-hover":zt("info-40"),"bg-error":zt("error-100"),"bg-error-hover":zt("error-95"),"bg-error-strong":zt("error-50"),"bg-error-strong-hover":zt("error-40"),"bg-inverse":zt("neutral-20"),"bg-inverse-subtle":zt("neutral-30"),"bg-inverse-subtler":zt("neutral-50"),"bg-inverse-subtlest":zt("neutral-60"),"bg-inverse-hover":zt("neutral-40"),"bg-primary":zt("primary-50"),"bg-primary-subtle":zt("primary-60"),"bg-primary-subtler":zt("primary-95"),"bg-primary-subtlest":zt("primary-100"),"bg-available":"#6DD0A1","bg-primary-hover":zt("primary-40"),"bg-primary-subtlest-hover":zt("primary-90"),"bg-primary-subtlest-selected":zt("primary-90"),"overlay-strong":"rgba(40, 40, 40, 0.85)","overlay-subtle":"rgba(40, 40, 40, 0.20)",hyperlink:zt("primary-50"),"hyperlink-hover":zt("primary-40"),"hyperlink-visited":zt("primary-40"),"hyperlink-inverse":zt("primary-inverse"),"focus-ring":zt("black"),"focus-ring-inverse":zt("white")},Lt={text:zt("neutral-100"),"text-subtle":zt("neutral-80"),"text-subtler":zt("neutral-60"),"text-subtlest":zt("neutral-50"),"text-primary":zt("primary-60"),"text-hover":zt("primary-70"),"text-selected":zt("primary-60"),"text-selected-hover":zt("primary-70"),"text-disabled":zt("neutral-60"),"text-disabled-subtle":zt("neutral-50"),"text-disabled-subtlest":zt("neutral-30"),"text-selected-disabled":zt("neutral-90"),"text-success":zt("success-70"),"text-warning":zt("warning-70"),"text-error":zt("error-70"),"text-info":zt("info-70"),"text-inverse":zt("black"),icon:zt("neutral-60"),"icon-subtle":zt("neutral-50"),"icon-strongest":zt("neutral-90"),"icon-primary":zt("primary-60"),"icon-primary-subtle":zt("primary-50"),"icon-primary-subtlest":zt("primary-40"),"icon-hover":zt("primary-70"),"icon-selected":zt("primary-60"),"icon-selected-hover":zt("primary-70"),"icon-disabled":zt("neutral-60"),"icon-disabled-subtle":zt("neutral-50"),"icon-selected-disabled":zt("neutral-50"),"icon-success":zt("success-60"),"icon-warning":zt("warning-50"),"icon-error":zt("error-60"),"icon-error-strong":zt("error-70"),"icon-info":zt("info-60"),"icon-inverse":zt("black"),"icon-primary-inverse":zt("primary-inverse"),border:zt("neutral-20"),"border-strong":zt("neutral-40"),"border-stronger":zt("neutral-60"),"border-primary":zt("primary-60"),"border-primary-subtle":zt("primary-50"),"border-hover":zt("primary-20"),"border-hover-strong":zt("primary-50"),"border-selected":zt("primary-60"),"border-selected-subtle":zt("primary-40"),"border-selected-subtlest":zt("primary-20"),"border-selected-hover":zt("primary-70"),"border-focus":zt("primary-50"),"border-focus-strong":zt("primary-60"),"border-disabled":zt("neutral-20"),"border-selected-disabled":zt("neutral-40"),"border-success":zt("success-50"),"border-warning":zt("warning-50"),"border-error":zt("error-50"),"border-error-focus":zt("error-50"),"border-error-focus-strong":zt("error-70"),"border-error-strong":zt("error-70"),"border-info":zt("info-50"),bg:zt("black"),"bg-strong":zt("neutral-10"),"bg-stronger":zt("neutral-20"),"bg-strongest":zt("neutral-20"),"bg-hover":zt("primary-20"),"bg-hover-strong":zt("primary-20"),"bg-hover-subtle":zt("primary-10"),"bg-hover-neutral":zt("neutral-10"),"bg-hover-neutral-strong":zt("neutral-20"),"bg-selected":zt("primary-20"),"bg-selected-hover":zt("primary-20"),"bg-selected-strong":zt("primary-20"),"bg-selected-stronger":zt("primary-40"),"bg-selected-strongest":zt("primary-60"),"bg-selected-strongest-hover":zt("primary-70"),"bg-disabled":zt("neutral-20"),"bg-selected-disabled":zt("neutral-20"),"bg-selected-stronger-disabled":zt("neutral-40"),"bg-success":zt("success-10"),"bg-success-hover":zt("success-20"),"bg-success-strong":zt("success-60"),"bg-success-strong-hover":zt("success-70"),"bg-warning":zt("warning-10"),"bg-warning-hover":zt("warning-20"),"bg-warning-strong":zt("warning-60"),"bg-warning-strong-hover":zt("warning-70"),"bg-info":zt("info-10"),"bg-info-hover":zt("info-20"),"bg-info-strong":zt("info-60"),"bg-info-strong-hover":zt("info-70"),"bg-error":zt("error-10"),"bg-error-hover":zt("error-20"),"bg-error-strong":zt("error-60"),"bg-error-strong-hover":zt("error-70"),"bg-inverse":zt("neutral-90"),"bg-inverse-subtle":zt("neutral-80"),"bg-inverse-subtler":zt("neutral-60"),"bg-inverse-subtlest":zt("neutral-50"),"bg-inverse-hover":zt("neutral-70"),"bg-primary":zt("primary-60"),"bg-primary-subtle":zt("primary-50"),"bg-primary-subtler":zt("primary-20"),"bg-primary-subtlest":zt("primary-10"),"bg-available":"#185339","bg-primary-hover":zt("primary-70"),"bg-primary-subtlest-hover":zt("primary-20"),"bg-primary-subtlest-selected":zt("primary-20"),"overlay-strong":"rgba(78, 78, 78, 0.80)","overlay-subtle":"rgba(78, 78, 78, 0.50)",hyperlink:zt("primary-60"),"hyperlink-hover":zt("primary-70"),"hyperlink-visited":zt("primary-70"),"hyperlink-inverse":zt("primary-inverse"),"focus-ring":zt("primary-60"),"focus-ring-inverse":zt("black")},jt={text:zt("neutral-30"),"text-subtle":zt("neutral-40"),"text-subtler":zt("neutral-50"),"text-subtlest":zt("neutral-70"),"text-primary":zt("neutral-10"),"text-hover":zt("neutral-70"),"text-selected":zt("neutral-20"),"text-selected-hover":zt("neutral-10"),"text-disabled":zt("neutral-50"),"text-disabled-subtle":zt("neutral-60"),"text-disabled-subtlest":zt("neutral-80"),"text-selected-disabled":zt("neutral-40"),"text-success":zt("success-40"),"text-warning":zt("warning-40"),"text-error":zt("brand-30"),"text-info":zt("neutral-40"),"text-inverse":zt("neutral-100"),icon:zt("neutral-40"),"icon-subtle":zt("neutral-50"),"icon-strongest":zt("neutral-10"),"icon-primary":zt("neutral-10"),"icon-primary-subtle":zt("neutral-30"),"icon-primary-subtlest":zt("neutral-60"),"icon-hover":zt("neutral-70"),"icon-selected":zt("brand-20"),"icon-selected-hover":zt("brand-10"),"icon-disabled":zt("neutral-50"),"icon-disabled-subtle":zt("neutral-60"),"icon-selected-disabled":zt("neutral-40"),"icon-success":zt("success-40"),"icon-warning":zt("warning-60"),"icon-error":zt("brand-30"),"icon-error-strong":zt("brand-10"),"icon-info":zt("neutral-40"),"icon-inverse":zt("neutral-100"),"icon-primary-inverse":"#F9B371",border:zt("neutral-90"),"border-strong":zt("neutral-30"),"border-stronger":zt("neutral-20"),"border-primary":zt("neutral-40"),"border-primary-subtle":zt("neutral-60"),"border-hover":zt("neutral-80"),"border-hover-strong":zt("neutral-10"),"border-selected":zt("brand-20"),"border-selected-subtle":zt("neutral-40"),"border-selected-subtlest":zt("neutral-70"),"border-selected-hover":zt("neutral-10"),"border-focus":zt("neutral-20"),"border-focus-strong":zt("neutral-10"),"border-disabled":zt("neutral-90"),"border-selected-disabled":zt("neutral-80"),"border-success":zt("success-40"),"border-warning":zt("warning-60"),"border-error":zt("brand-30"),"border-error-focus":zt("brand-20"),"border-error-focus-strong":zt("brand-10"),"border-error-strong":zt("brand-20"),"border-info":zt("neutral-40"),bg:zt("neutral-100"),"bg-strong":zt("neutral-95"),"bg-stronger":zt("neutral-90"),"bg-strongest":zt("neutral-80"),"bg-hover":zt("brand-90"),"bg-hover-strong":zt("brand-80"),"bg-hover-subtle":zt("neutral-90"),"bg-hover-neutral":zt("neutral-90"),"bg-hover-neutral-strong":zt("neutral-90"),"bg-selected":zt("brand-100"),"bg-selected-hover":zt("brand-30"),"bg-selected-strong":zt("brand-50"),"bg-selected-stronger":zt("brand-40"),"bg-selected-strongest":zt("brand-20"),"bg-selected-strongest-hover":zt("brand-10"),"bg-disabled":zt("neutral-90"),"bg-selected-disabled":zt("neutral-90"),"bg-selected-stronger-disabled":zt("neutral-80"),"bg-success":zt("success-100"),"bg-success-hover":zt("success-95"),"bg-success-strong":zt("success-50"),"bg-success-strong-hover":zt("success-40"),"bg-warning":zt("warning-100"),"bg-warning-hover":zt("warning-95"),"bg-warning-strong":zt("warning-50"),"bg-warning-strong-hover":zt("warning-40"),"bg-info":zt("neutral-95"),"bg-info-hover":zt("info-95"),"bg-info-strong":zt("info-50"),"bg-info-strong-hover":zt("info-40"),"bg-error":zt("brand-100"),"bg-error-hover":zt("error-95"),"bg-error-strong":zt("error-50"),"bg-error-strong-hover":zt("error-40"),"bg-inverse":zt("neutral-40"),"bg-inverse-subtle":zt("neutral-60"),"bg-inverse-subtler":zt("neutral-70"),"bg-inverse-subtlest":zt("neutral-80"),"bg-inverse-hover":zt("neutral-30"),"bg-primary":zt("brand-20"),"bg-primary-subtle":zt("brand-60"),"bg-primary-subtler":zt("brand-80"),"bg-primary-subtlest":zt("brand-100"),"bg-available":zt("success-60"),"bg-primary-hover":zt("brand-10"),"bg-primary-subtlest-hover":zt("brand-80"),"bg-primary-subtlest-selected":zt("brand-40"),"overlay-strong":"rgba(25, 25, 25, 0.95)","overlay-subtle":"rgba(25, 25, 25, 0.20)",hyperlink:zt("neutral-10"),"hyperlink-hover":zt("neutral-40"),"hyperlink-visited":zt("neutral-50"),"hyperlink-inverse":"#F8AE68","focus-ring":zt("black"),"focus-ring-inverse":zt("white")},Rt={text:zt("neutral-20"),"text-subtle":zt("neutral-30"),"text-subtler":zt("neutral-50"),"text-subtlest":zt("neutral-60"),"text-primary":zt("primary-50"),"text-hover":zt("primary-40"),"text-selected":zt("primary-50"),"text-selected-hover":zt("primary-40"),"text-disabled":zt("neutral-50"),"text-disabled-subtle":zt("neutral-60"),"text-disabled-subtlest":zt("neutral-80"),"text-selected-disabled":zt("neutral-20"),"text-success":zt("success-40"),"text-warning":zt("warning-40"),"text-error":zt("error-40"),"text-info":zt("info-40"),"text-inverse":zt("white"),icon:zt("neutral-50"),"icon-subtle":zt("neutral-60"),"icon-strongest":zt("neutral-20"),"icon-primary":zt("primary-50"),"icon-primary-subtle":zt("primary-60"),"icon-primary-subtlest":zt("primary-70"),"icon-hover":zt("primary-40"),"icon-selected":zt("primary-50"),"icon-selected-hover":zt("primary-40"),"icon-disabled":zt("neutral-50"),"icon-disabled-subtle":zt("neutral-60"),"icon-selected-disabled":zt("neutral-60"),"icon-success":zt("success-50"),"icon-warning":zt("warning-60"),"icon-error":zt("error-50"),"icon-error-strong":zt("error-40"),"icon-info":zt("info-50"),"icon-inverse":zt("white"),"icon-primary-inverse":zt("primary-inverse"),border:zt("neutral-90"),"border-strong":zt("neutral-70"),"border-stronger":zt("neutral-50"),"border-primary":zt("primary-50"),"border-primary-subtle":zt("primary-60"),"border-hover":zt("primary-90"),"border-hover-strong":zt("primary-60"),"border-selected":zt("primary-50"),"border-selected-subtle":zt("primary-70"),"border-selected-subtlest":zt("primary-90"),"border-selected-hover":zt("primary-40"),"border-focus":zt("primary-60"),"border-focus-strong":zt("primary-50"),"border-disabled":zt("neutral-90"),"border-selected-disabled":zt("neutral-70"),"border-success":zt("success-60"),"border-warning":zt("warning-60"),"border-error":zt("error-60"),"border-error-focus":zt("error-60"),"border-error-focus-strong":zt("error-40"),"border-error-strong":zt("error-40"),"border-info":zt("info-60"),bg:zt("white"),"bg-strong":zt("neutral-100"),"bg-stronger":zt("neutral-95"),"bg-strongest":zt("neutral-90"),"bg-hover":zt("primary-95"),"bg-hover-strong":zt("primary-90"),"bg-hover-subtle":zt("primary-100"),"bg-hover-neutral":zt("neutral-100"),"bg-hover-neutral-strong":zt("neutral-90"),"bg-selected":zt("primary-95"),"bg-selected-hover":zt("primary-90"),"bg-selected-strong":zt("primary-90"),"bg-selected-stronger":zt("primary-70"),"bg-selected-strongest":zt("primary-50"),"bg-selected-strongest-hover":zt("primary-40"),"bg-disabled":zt("neutral-95"),"bg-selected-disabled":zt("neutral-95"),"bg-selected-stronger-disabled":zt("neutral-70"),"bg-success":zt("success-100"),"bg-success-hover":zt("success-95"),"bg-success-strong":zt("success-50"),"bg-success-strong-hover":zt("success-40"),"bg-warning":zt("warning-100"),"bg-warning-hover":zt("warning-95"),"bg-warning-strong":zt("warning-50"),"bg-warning-strong-hover":zt("warning-40"),"bg-info":zt("info-100"),"bg-info-hover":zt("info-95"),"bg-info-strong":zt("info-50"),"bg-info-strong-hover":zt("info-40"),"bg-error":zt("error-100"),"bg-error-hover":zt("error-95"),"bg-error-strong":zt("error-50"),"bg-error-strong-hover":zt("error-40"),"bg-inverse":zt("neutral-20"),"bg-inverse-subtle":zt("neutral-30"),"bg-inverse-subtler":zt("neutral-50"),"bg-inverse-subtlest":zt("neutral-60"),"bg-inverse-hover":zt("neutral-40"),"bg-primary":zt("primary-50"),"bg-primary-subtle":zt("primary-60"),"bg-primary-subtler":zt("primary-95"),"bg-primary-subtlest":zt("primary-100"),"bg-available":"#6DD0A1","bg-primary-hover":zt("primary-40"),"bg-primary-subtlest-hover":zt("primary-90"),"bg-primary-subtlest-selected":zt("primary-90"),"overlay-strong":"rgba(40, 40, 40, 0.85)","overlay-subtle":"rgba(40, 40, 40, 0.20)",hyperlink:zt("primary-50"),"hyperlink-hover":zt("primary-40"),"hyperlink-visited":zt("primary-40"),"hyperlink-inverse":zt("primary-inverse"),"focus-ring":zt("black"),"focus-ring-inverse":zt("white")},Yt={text:zt("neutral-100"),"text-subtle":zt("neutral-80"),"text-subtler":zt("neutral-60"),"text-subtlest":zt("neutral-50"),"text-primary":zt("primary-60"),"text-hover":zt("primary-70"),"text-selected":zt("primary-60"),"text-selected-hover":zt("primary-70"),"text-disabled":zt("neutral-60"),"text-disabled-subtle":zt("neutral-50"),"text-disabled-subtlest":zt("neutral-30"),"text-selected-disabled":zt("neutral-90"),"text-success":zt("success-70"),"text-warning":zt("warning-70"),"text-error":zt("error-70"),"text-info":zt("info-70"),"text-inverse":zt("black"),icon:zt("neutral-60"),"icon-subtle":zt("neutral-50"),"icon-strongest":zt("neutral-90"),"icon-primary":zt("primary-60"),"icon-primary-subtle":zt("primary-50"),"icon-primary-subtlest":zt("primary-40"),"icon-hover":zt("primary-70"),"icon-selected":zt("primary-60"),"icon-selected-hover":zt("primary-70"),"icon-disabled":zt("neutral-60"),"icon-disabled-subtle":zt("neutral-50"),"icon-selected-disabled":zt("neutral-50"),"icon-success":zt("success-60"),"icon-warning":zt("warning-50"),"icon-error":zt("error-60"),"icon-error-strong":zt("error-70"),"icon-info":zt("info-60"),"icon-inverse":zt("black"),"icon-primary-inverse":zt("primary-inverse"),border:zt("neutral-20"),"border-strong":zt("neutral-40"),"border-stronger":zt("neutral-60"),"border-primary":zt("primary-60"),"border-primary-subtle":zt("primary-50"),"border-hover":zt("primary-20"),"border-hover-strong":zt("primary-50"),"border-selected":zt("primary-60"),"border-selected-subtle":zt("primary-40"),"border-selected-subtlest":zt("primary-20"),"border-selected-hover":zt("primary-70"),"border-focus":zt("primary-50"),"border-focus-strong":zt("primary-60"),"border-disabled":zt("neutral-20"),"border-selected-disabled":zt("neutral-40"),"border-success":zt("success-50"),"border-warning":zt("warning-50"),"border-error":zt("error-50"),"border-error-focus":zt("error-50"),"border-error-focus-strong":zt("error-70"),"border-error-strong":zt("error-70"),"border-info":zt("info-50"),bg:zt("black"),"bg-strong":zt("neutral-10"),"bg-stronger":zt("neutral-20"),"bg-strongest":zt("neutral-20"),"bg-hover":zt("primary-20"),"bg-hover-strong":zt("primary-20"),"bg-hover-subtle":zt("primary-10"),"bg-hover-neutral":zt("neutral-10"),"bg-hover-neutral-strong":zt("neutral-20"),"bg-selected":zt("primary-20"),"bg-selected-hover":zt("primary-20"),"bg-selected-strong":zt("primary-20"),"bg-selected-stronger":zt("primary-40"),"bg-selected-strongest":zt("primary-60"),"bg-selected-strongest-hover":zt("primary-70"),"bg-disabled":zt("neutral-20"),"bg-selected-disabled":zt("neutral-20"),"bg-selected-stronger-disabled":zt("neutral-40"),"bg-success":zt("success-10"),"bg-success-hover":zt("success-20"),"bg-success-strong":zt("success-60"),"bg-success-strong-hover":zt("success-70"),"bg-warning":zt("warning-10"),"bg-warning-hover":zt("warning-20"),"bg-warning-strong":zt("warning-60"),"bg-warning-strong-hover":zt("warning-70"),"bg-info":zt("info-10"),"bg-info-hover":zt("info-20"),"bg-info-strong":zt("info-60"),"bg-info-strong-hover":zt("info-70"),"bg-error":zt("error-10"),"bg-error-hover":zt("error-20"),"bg-error-strong":zt("error-60"),"bg-error-strong-hover":zt("error-70"),"bg-inverse":zt("neutral-90"),"bg-inverse-subtle":zt("neutral-80"),"bg-inverse-subtler":zt("neutral-60"),"bg-inverse-subtlest":zt("neutral-50"),"bg-inverse-hover":zt("neutral-70"),"bg-primary":zt("primary-60"),"bg-primary-subtle":zt("primary-50"),"bg-primary-subtler":zt("primary-20"),"bg-primary-subtlest":zt("primary-10"),"bg-available":"#185339","bg-primary-hover":zt("primary-70"),"bg-primary-subtlest-hover":zt("primary-20"),"bg-primary-subtlest-selected":zt("primary-20"),"overlay-strong":"rgba(78, 78, 78, 0.80)","overlay-subtle":"rgba(78, 78, 78, 0.50)",hyperlink:zt("primary-60"),"hyperlink-hover":zt("primary-70"),"hyperlink-visited":zt("primary-70"),"hyperlink-inverse":zt("primary-inverse"),"focus-ring":zt("primary-60"),"focus-ring-inverse":zt("black")},Pt={collections:{lifesg:Tt,bookingsg:Tt,rbs:Tt,mylegacy:Tt,ccube:Tt,oneservice:Tt,pa:jt,a11yplayground:Rt},defaultValue:"lifesg"},It={collections:{lifesg:Lt,bookingsg:Lt,rbs:Lt,mylegacy:Lt,ccube:Lt,oneservice:Lt,pa:Lt,a11yplayground:Yt},defaultValue:"lifesg"},Ht=e=>r=>{var t;const n=r.theme,i="dark"===(null==n?void 0:n.colourMode),o=yt(i?It:Pt,null==n?void 0:n.colourScheme),s=i?"semanticColourDark":"semanticColour",a=null===(t=null==n?void 0:n.overrides)||void 0===t?void 0:t[s],l=a?ft(o,e,a):o[e];return"function"==typeof l?l(r):l},Nt={text:Ht("text"),"text-subtle":Ht("text-subtle"),"text-subtler":Ht("text-subtler"),"text-subtlest":Ht("text-subtlest"),"text-primary":Ht("text-primary"),"text-hover":Ht("text-hover"),"text-selected":Ht("text-selected"),"text-selected-hover":Ht("text-selected-hover"),"text-disabled":Ht("text-disabled"),"text-disabled-subtle":Ht("text-disabled-subtle"),"text-disabled-subtlest":Ht("text-disabled-subtlest"),"text-selected-disabled":Ht("text-selected-disabled"),"text-success":Ht("text-success"),"text-warning":Ht("text-warning"),"text-error":Ht("text-error"),"text-info":Ht("text-info"),"text-inverse":Ht("text-inverse"),icon:Ht("icon"),"icon-subtle":Ht("icon-subtle"),"icon-strongest":Ht("icon-strongest"),"icon-primary":Ht("icon-primary"),"icon-primary-subtle":Ht("icon-primary-subtle"),"icon-primary-subtlest":Ht("icon-primary-subtlest"),"icon-hover":Ht("icon-hover"),"icon-selected":Ht("icon-selected"),"icon-selected-hover":Ht("icon-selected-hover"),"icon-disabled":Ht("icon-disabled"),"icon-disabled-subtle":Ht("icon-disabled-subtle"),"icon-selected-disabled":Ht("icon-selected-disabled"),"icon-success":Ht("icon-success"),"icon-warning":Ht("icon-warning"),"icon-error":Ht("icon-error"),"icon-error-strong":Ht("icon-error-strong"),"icon-info":Ht("icon-info"),"icon-inverse":Ht("icon-inverse"),"icon-primary-inverse":Ht("icon-primary-inverse"),border:Ht("border"),"border-strong":Ht("border-strong"),"border-stronger":Ht("border-stronger"),"border-primary":Ht("border-primary"),"border-primary-subtle":Ht("border-primary-subtle"),"border-hover":Ht("border-hover"),"border-hover-strong":Ht("border-hover-strong"),"border-selected":Ht("border-selected"),"border-selected-subtle":Ht("border-selected-subtle"),"border-selected-subtlest":Ht("border-selected-subtlest"),"border-selected-hover":Ht("border-selected-hover"),"border-focus":Ht("border-focus"),"border-focus-strong":Ht("border-focus-strong"),"border-disabled":Ht("border-disabled"),"border-selected-disabled":Ht("border-selected-disabled"),"border-success":Ht("border-success"),"border-warning":Ht("border-warning"),"border-error":Ht("border-error"),"border-error-focus":Ht("border-error-focus"),"border-error-focus-strong":Ht("border-error-focus-strong"),"border-error-strong":Ht("border-error-strong"),"border-info":Ht("border-info"),bg:Ht("bg"),"bg-strong":Ht("bg-strong"),"bg-stronger":Ht("bg-stronger"),"bg-strongest":Ht("bg-strongest"),"bg-hover":Ht("bg-hover"),"bg-hover-strong":Ht("bg-hover-strong"),"bg-hover-subtle":Ht("bg-hover-subtle"),"bg-hover-neutral":Ht("bg-hover-neutral"),"bg-hover-neutral-strong":Ht("bg-hover-neutral-strong"),"bg-selected":Ht("bg-selected"),"bg-selected-hover":Ht("bg-selected-hover"),"bg-selected-strong":Ht("bg-selected-strong"),"bg-selected-stronger":Ht("bg-selected-stronger"),"bg-selected-strongest":Ht("bg-selected-strongest"),"bg-selected-strongest-hover":Ht("bg-selected-strongest-hover"),"bg-disabled":Ht("bg-disabled"),"bg-selected-disabled":Ht("bg-selected-disabled"),"bg-selected-stronger-disabled":Ht("bg-selected-stronger-disabled"),"bg-success":Ht("bg-success"),"bg-success-hover":Ht("bg-success-hover"),"bg-success-strong":Ht("bg-success-strong"),"bg-success-strong-hover":Ht("bg-success-strong-hover"),"bg-warning":Ht("bg-warning"),"bg-warning-hover":Ht("bg-warning-hover"),"bg-warning-strong":Ht("bg-warning-strong"),"bg-warning-strong-hover":Ht("bg-warning-strong-hover"),"bg-info":Ht("bg-info"),"bg-info-hover":Ht("bg-info-hover"),"bg-info-strong":Ht("bg-info-strong"),"bg-info-strong-hover":Ht("bg-info-strong-hover"),"bg-error":Ht("bg-error"),"bg-error-hover":Ht("bg-error-hover"),"bg-error-strong":Ht("bg-error-strong"),"bg-error-strong-hover":Ht("bg-error-strong-hover"),"bg-inverse":Ht("bg-inverse"),"bg-inverse-subtle":Ht("bg-inverse-subtle"),"bg-inverse-subtler":Ht("bg-inverse-subtler"),"bg-inverse-subtlest":Ht("bg-inverse-subtlest"),"bg-inverse-hover":Ht("bg-inverse-hover"),"bg-primary":Ht("bg-primary"),"bg-primary-subtle":Ht("bg-primary-subtle"),"bg-primary-subtler":Ht("bg-primary-subtler"),"bg-primary-subtlest":Ht("bg-primary-subtlest"),"bg-available":Ht("bg-available"),"bg-primary-hover":Ht("bg-primary-hover"),"bg-primary-subtlest-hover":Ht("bg-primary-subtlest-hover"),"bg-primary-subtlest-selected":Ht("bg-primary-subtlest-selected"),"overlay-strong":Ht("overlay-strong"),"overlay-subtle":Ht("overlay-subtle"),hyperlink:Ht("hyperlink"),"hyperlink-hover":Ht("hyperlink-hover"),"hyperlink-visited":Ht("hyperlink-visited"),"hyperlink-inverse":Ht("hyperlink-inverse"),"focus-ring":Ht("focus-ring"),"focus-ring-inverse":Ht("focus-ring-inverse")},Wt={collections:{default:{solid:e=>r=>{var t,n,i;const{thickness:o,radius:s,colour:a}=e||{},l=null!==(t="function"==typeof o?o(r):o)&&void 0!==t?t:wt["width-010"](r),d=null!==(n="function"==typeof s?s(r):s)&&void 0!==n?n:0,c=null!==(i="function"==typeof a?a(r):a)&&void 0!==i?i:Nt.border(r),u=wt.solid;return f`
            border: ${l} ${u} ${c};
            border-radius: ${d};
        `},"dashed-default":e=>r=>{var t,n,i;const{thickness:o,radius:s,colour:a}=e||{},l=null!==(t="function"==typeof o?o(r):o)&&void 0!==t?t:wt["width-010"](r),d=null!==(n="function"==typeof s?s(r):s)&&void 0!==n?n:0,c=null!==(i="function"==typeof a?a(r):a)&&void 0!==i?i:Nt.border(r),u=encodeURIComponent(`<svg width='100%' height='100%' xmlns='http://www.w3.org/2000/svg'><rect width='100%' height='100%' fill='none' rx='${d}' ry='${d}' stroke='${c}' stroke-width='${l}' stroke-dasharray='4, 8' stroke-dashoffset='0' stroke-linecap='square'/></svg>`);return f`
            background-image: url("data:image/svg+xml,${u}");
            border-radius: ${d};
        `}}},defaultValue:"default"},Vt=e=>1===e.length&&"theme"in e[0],Kt=e=>(...r)=>t=>{const n=Vt(r)?[]:r,i=Vt(r)?r[0]:t,o=i.theme;return(0,yt(Wt,null==o?void 0:o.borderScheme)[e])(...n)(i)},Ut={solid:Kt("solid"),"dashed-default":Kt("dashed-default")},Zt={collections:{default:{"xxs-min":0,"xxs-max":320,"xs-min":321,"xs-max":375,"sm-min":376,"sm-max":420,"md-min":421,"md-max":767,"lg-min":768,"lg-max":1023,"xl-min":1024,"xl-max":1440,"xxl-min":1441,"xxs-column":8,"xs-column":8,"sm-column":8,"md-column":8,"lg-column":12,"xl-column":12,"xxl-column":12,"xxs-gutter":16,"xs-gutter":16,"sm-gutter":16,"md-gutter":16,"lg-gutter":32,"xl-gutter":32,"xxl-gutter":32,"xxs-margin":24,"xs-margin":24,"sm-margin":24,"md-margin":24,"lg-margin":48,"xl-margin":48,"xxl-margin":48}},defaultValue:"default"},Xt=e=>r=>{var t;const n=r.theme,i=yt(Zt,null==n?void 0:n.breakpointScheme);let o;return o=(null===(t=null==n?void 0:n.overrides)||void 0===t?void 0:t.breakpoint)?ft(i,e,n.overrides.breakpoint):i[e],o},qt={"xxs-min":Xt("xxs-min"),"xxs-max":Xt("xxs-max"),"xs-min":Xt("xs-min"),"xs-max":Xt("xs-max"),"sm-min":Xt("sm-min"),"sm-max":Xt("sm-max"),"md-min":Xt("md-min"),"md-max":Xt("md-max"),"lg-min":Xt("lg-min"),"lg-max":Xt("lg-max"),"xl-min":Xt("xl-min"),"xl-max":Xt("xl-max"),"xxl-min":Xt("xxl-min"),"xxs-column":Xt("xxs-column"),"xs-column":Xt("xs-column"),"sm-column":Xt("sm-column"),"md-column":Xt("md-column"),"lg-column":Xt("lg-column"),"xl-column":Xt("xl-column"),"xxl-column":Xt("xxl-column"),"xxs-gutter":Xt("xxs-gutter"),"xs-gutter":Xt("xs-gutter"),"sm-gutter":Xt("sm-gutter"),"md-gutter":Xt("md-gutter"),"lg-gutter":Xt("lg-gutter"),"xl-gutter":Xt("xl-gutter"),"xxl-gutter":Xt("xxl-gutter"),"xxs-margin":Xt("xxs-margin"),"xs-margin":Xt("xs-margin"),"sm-margin":Xt("sm-margin"),"md-margin":Xt("md-margin"),"lg-margin":Xt("lg-margin"),"xl-margin":Xt("xl-margin"),"xxl-margin":Xt("xxl-margin")},Jt=e=>("max-width"===e?["xxs","xs","sm","md","lg","xl"]:["xxs","xs","sm","md","lg","xl","xxl"]).reduce(((r,t)=>(r[t]=((e,r)=>{const t=qt["max-width"===e?`${r}-max`:`${r}-min`];return r=>{const n=t(r);return`@media screen and (${e}: ${n}px)`}})(e,t),r)),{}),Gt={MaxWidth:Jt("max-width"),MinWidth:Jt("min-width")},Qt={collections:{default:{"heading-size-xxl":"3rem","heading-size-xl":"2.5rem","heading-size-lg":"2rem","heading-size-md":"1.625rem","heading-size-sm":"1.375rem","heading-size-xs":"1.125rem","heading-lh-xxl":"3.5rem","heading-lh-xl":"3rem","heading-lh-lg":"2.5rem","heading-lh-md":"2.25rem","heading-lh-sm":"1.75rem","heading-lh-xs":"1.625rem","heading-ls-xxl":"-0.056rem","heading-ls-xl":"-0.032rem","heading-ls-lg":"-0.032rem","heading-ls-md":"0rem","heading-ls-sm":"0rem","heading-ls-xs":"0rem","weight-light":"300","weight-regular":"400","weight-semibold":"600","weight-bold":"700","font-family":"Open Sans","body-size-baseline":"1.125rem","body-size-md":"1rem","body-size-sm":"0.875rem","body-size-xs":"0.75rem","body-lh-baseline":"1.625rem","body-lh-md":"1.5rem","body-lh-sm":"1.625rem","body-lh-xs":"1.25rem","body-ls-baseline":"0rem","body-ls-md":"0.014rem","body-ls-sm":"0.012rem","body-ls-xs":"0.012rem","form-label-size":"1rem","form-description-size":"0.875rem","form-label-lh":"1.5rem","form-description-lh":"1.6rem","form-label-ls":"0.014rem","form-description-ls":"0.012rem"},bookingsg:{"heading-size-xxl":"3rem","heading-size-xl":"2.5rem","heading-size-lg":"2rem","heading-size-md":"1.625rem","heading-size-sm":"1.375rem","heading-size-xs":"1.125rem","heading-lh-xxl":"3.5rem","heading-lh-xl":"3rem","heading-lh-lg":"2.5rem","heading-lh-md":"2.25rem","heading-lh-sm":"1.75rem","heading-lh-xs":"1.75rem","heading-ls-xxl":"-0.056rem","heading-ls-xl":"-0.032rem","heading-ls-lg":"-0.032rem","heading-ls-md":"0rem","heading-ls-sm":"0rem","heading-ls-xs":"0rem","weight-light":"300","weight-regular":"400","weight-semibold":"600","weight-bold":"700","font-family":"Plus Jakarta Sans","body-size-baseline":"1.125rem","body-size-md":"1rem","body-size-sm":"0.875rem","body-size-xs":"0.75rem","body-lh-baseline":"1.75rem","body-lh-md":"1.5rem","body-lh-sm":"1.6rem","body-lh-xs":"1.2rem","body-ls-baseline":"0rem","body-ls-md":"0.014rem","body-ls-sm":"0.012rem","body-ls-xs":"0.012rem","form-label-size":"1rem","form-description-size":"0.875rem","form-label-lh":"1.5rem","form-description-lh":"1.6rem","form-label-ls":"0.014rem","form-description-ls":"0.012rem"},pa:{"heading-size-xxl":"2.5rem","heading-size-xl":"2rem","heading-size-lg":"1.75rem","heading-size-md":"1.5rem","heading-size-sm":"1.25rem","heading-size-xs":"1rem","heading-lh-xxl":"3rem","heading-lh-xl":"2.5rem","heading-lh-lg":"2.25rem","heading-lh-md":"2rem","heading-lh-sm":"2rem","heading-lh-xs":"1.75rem","heading-ls-xxl":"-0.032rem","heading-ls-xl":"-0.032rem","heading-ls-lg":"0rem","heading-ls-md":"0rem","heading-ls-sm":"0rem","heading-ls-xs":"0rem","weight-light":"300","weight-regular":"400","weight-semibold":"600","weight-bold":"700","font-family":"Lato","body-size-baseline":"1rem","body-size-md":"0.875rem","body-size-sm":"0.75rem","body-size-xs":"0.625rem","body-lh-baseline":"1.75rem","body-lh-md":"1.5rem","body-lh-sm":"1.25rem","body-lh-xs":"1.25rem","body-ls-baseline":"0rem","body-ls-md":"0.014rem","body-ls-sm":"0.012rem","body-ls-xs":"0.012rem","form-label-size":"1rem","form-description-size":"0.875rem","form-label-lh":"1.5rem","form-description-lh":"1.6rem","form-label-ls":"0.014rem","form-description-ls":"0.012rem"},a11yplayground:{"heading-size-xxl":"3rem","heading-size-xl":"2.5rem","heading-size-lg":"2rem","heading-size-md":"1.625rem","heading-size-sm":"1.375rem","heading-size-xs":"1.125rem","heading-lh-xxl":"3.5rem","heading-lh-xl":"3rem","heading-lh-lg":"2.5rem","heading-lh-md":"2.25rem","heading-lh-sm":"1.75rem","heading-lh-xs":"1.625rem","heading-ls-xxl":"-0.056rem","heading-ls-xl":"-0.032rem","heading-ls-lg":"-0.032rem","heading-ls-md":"0rem","heading-ls-sm":"0rem","heading-ls-xs":"0rem","weight-light":"300","weight-regular":"400","weight-semibold":"600","weight-bold":"700","font-family":"Atkinson Hyperlegible Next","body-size-baseline":"1.125rem","body-size-md":"1rem","body-size-sm":"0.875rem","body-size-xs":"0.75rem","body-lh-baseline":"1.625rem","body-lh-md":"1.5rem","body-lh-sm":"1.625rem","body-lh-xs":"1.25rem","body-ls-baseline":"0rem","body-ls-md":"0.014rem","body-ls-sm":"0.012rem","body-ls-xs":"0.012rem","form-label-size":"1.125rem","form-description-size":"1rem","form-label-lh":"1.5rem","form-description-lh":"1.625rem","form-label-ls":"0rem","form-description-ls":"0.00875rem"}},defaultValue:"default"},en=e=>r=>{var t;const n=r.theme,i=yt(Qt,null==n?void 0:n.fontScheme);return(null===(t=null==n?void 0:n.overrides)||void 0===t?void 0:t.fontSpec)?ft(i,e,n.overrides.fontSpec):i[e]},rn={"heading-size-xxl":en("heading-size-xxl"),"heading-size-xl":en("heading-size-xl"),"heading-size-lg":en("heading-size-lg"),"heading-size-md":en("heading-size-md"),"heading-size-sm":en("heading-size-sm"),"heading-size-xs":en("heading-size-xs"),"heading-lh-xxl":en("heading-lh-xxl"),"heading-lh-xl":en("heading-lh-xl"),"heading-lh-lg":en("heading-lh-lg"),"heading-lh-md":en("heading-lh-md"),"heading-lh-sm":en("heading-lh-sm"),"heading-lh-xs":en("heading-lh-xs"),"heading-ls-xxl":en("heading-ls-xxl"),"heading-ls-xl":en("heading-ls-xl"),"heading-ls-lg":en("heading-ls-lg"),"heading-ls-md":en("heading-ls-md"),"heading-ls-sm":en("heading-ls-sm"),"heading-ls-xs":en("heading-ls-xs"),"weight-light":en("weight-light"),"weight-regular":en("weight-regular"),"weight-semibold":en("weight-semibold"),"weight-bold":en("weight-bold"),"font-family":en("font-family"),"body-size-baseline":en("body-size-baseline"),"body-size-md":en("body-size-md"),"body-size-sm":en("body-size-sm"),"body-size-xs":en("body-size-xs"),"body-lh-baseline":en("body-lh-baseline"),"body-lh-md":en("body-lh-md"),"body-lh-sm":en("body-lh-sm"),"body-lh-xs":en("body-lh-xs"),"body-ls-baseline":en("body-ls-baseline"),"body-ls-md":en("body-ls-md"),"body-ls-sm":en("body-ls-sm"),"body-ls-xs":en("body-ls-xs"),"form-label-size":en("form-label-size"),"form-description-size":en("form-description-size"),"form-label-lh":en("form-label-lh"),"form-description-lh":en("form-description-lh"),"form-label-ls":en("form-label-ls"),"form-description-ls":en("form-description-ls")},tn=(e,r,t,n,i)=>{const{disableLigatures:o}=i||{};return f`
        font-family: ${en("font-family")};
        font-size: ${en(e)};
        font-weight: ${en(r)};
        line-height: ${en(t)};
        letter-spacing: ${en(n)};

        font-variant: ${o?"no-common-ligatures":"normal"};
    `},nn=(e={})=>({"heading-xxl-light":tn("heading-size-xxl","weight-light","heading-lh-xxl","heading-ls-xxl",e),"heading-xxl-regular":tn("heading-size-xxl","weight-regular","heading-lh-xxl","heading-ls-xxl",e),"heading-xxl-semibold":tn("heading-size-xxl","weight-semibold","heading-lh-xxl","heading-ls-xxl",e),"heading-xxl-bold":tn("heading-size-xxl","weight-bold","heading-lh-xxl","heading-ls-xxl",e),"heading-xl-light":tn("heading-size-xl","weight-light","heading-lh-xl","heading-ls-xl",e),"heading-xl-regular":tn("heading-size-xl","weight-regular","heading-lh-xl","heading-ls-xl",e),"heading-xl-semibold":tn("heading-size-xl","weight-semibold","heading-lh-xl","heading-ls-xl",e),"heading-xl-bold":tn("heading-size-xl","weight-bold","heading-lh-xl","heading-ls-xl",e),"heading-lg-light":tn("heading-size-lg","weight-light","heading-lh-lg","heading-ls-lg",e),"heading-lg-regular":tn("heading-size-lg","weight-regular","heading-lh-lg","heading-ls-lg",e),"heading-lg-semibold":tn("heading-size-lg","weight-semibold","heading-lh-lg","heading-ls-lg",e),"heading-lg-bold":tn("heading-size-lg","weight-bold","heading-lh-lg","heading-ls-lg",e),"heading-md-light":tn("heading-size-md","weight-light","heading-lh-md","heading-ls-md",e),"heading-md-regular":tn("heading-size-md","weight-regular","heading-lh-md","heading-ls-md",e),"heading-md-semibold":tn("heading-size-md","weight-semibold","heading-lh-md","heading-ls-md",e),"heading-md-bold":tn("heading-size-md","weight-bold","heading-lh-md","heading-ls-md",e),"heading-sm-light":tn("heading-size-sm","weight-light","heading-lh-sm","heading-ls-sm",e),"heading-sm-regular":tn("heading-size-sm","weight-regular","heading-lh-sm","heading-ls-sm",e),"heading-sm-semibold":tn("heading-size-sm","weight-semibold","heading-lh-sm","heading-ls-sm",e),"heading-sm-bold":tn("heading-size-sm","weight-bold","heading-lh-sm","heading-ls-sm",e),"heading-xs-light":tn("heading-size-xs","weight-light","heading-lh-xs","heading-ls-xs",e),"heading-xs-regular":tn("heading-size-xs","weight-regular","heading-lh-xs","heading-ls-xs",e),"heading-xs-semibold":tn("heading-size-xs","weight-semibold","heading-lh-xs","heading-ls-xs",e),"heading-xs-bold":tn("heading-size-xs","weight-bold","heading-lh-xs","heading-ls-xs",e),"body-baseline-light":tn("body-size-baseline","weight-light","body-lh-baseline","body-ls-baseline",e),"body-baseline-regular":tn("body-size-baseline","weight-regular","body-lh-baseline","body-ls-baseline",e),"body-baseline-semibold":tn("body-size-baseline","weight-semibold","body-lh-baseline","body-ls-baseline",e),"body-baseline-bold":tn("body-size-baseline","weight-bold","body-lh-baseline","body-ls-baseline",e),"body-md-light":tn("body-size-md","weight-light","body-lh-md","body-ls-md",e),"body-md-regular":tn("body-size-md","weight-regular","body-lh-md","body-ls-md",e),"body-md-semibold":tn("body-size-md","weight-semibold","body-lh-md","body-ls-md",e),"body-md-bold":tn("body-size-md","weight-bold","body-lh-md","body-ls-md",e),"body-sm-light":tn("body-size-sm","weight-light","body-lh-sm","body-ls-sm",e),"body-sm-regular":tn("body-size-sm","weight-regular","body-lh-sm","body-ls-sm",e),"body-sm-semibold":tn("body-size-sm","weight-semibold","body-lh-sm","body-ls-sm",e),"body-sm-bold":tn("body-size-sm","weight-bold","body-lh-sm","body-ls-sm",e),"body-xs-light":tn("body-size-xs","weight-light","body-lh-xs","body-ls-xs",e),"body-xs-regular":tn("body-size-xs","weight-regular","body-lh-xs","body-ls-xs",e),"body-xs-semibold":tn("body-size-xs","weight-semibold","body-lh-xs","body-ls-xs",e),"body-xs-bold":tn("body-size-xs","weight-bold","body-lh-xs","body-ls-xs",e),"form-label":tn("form-label-size","weight-semibold","form-label-lh","form-label-ls",e),"form-description":tn("form-description-size","weight-regular","form-description-lh","form-description-ls",e)}),on=nn({disableLigatures:!0}),sn={collections:{default:nn(),bookingsg:on,pa:nn({disableLigatures:!0}),a11yplayground:nn({disableLigatures:!0})},defaultValue:"default"},an=e=>r=>{var t;const n=r.theme,i=yt(sn,null==n?void 0:n.fontScheme),o=(null===(t=null==n?void 0:n.overrides)||void 0===t?void 0:t.font)?ft(i,e,n.overrides.font):i[e];return"function"==typeof o?o(r):o},ln={"heading-xxl-light":an("heading-xxl-light"),"heading-xxl-regular":an("heading-xxl-regular"),"heading-xxl-semibold":an("heading-xxl-semibold"),"heading-xxl-bold":an("heading-xxl-bold"),"heading-xl-light":an("heading-xl-light"),"heading-xl-regular":an("heading-xl-regular"),"heading-xl-semibold":an("heading-xl-semibold"),"heading-xl-bold":an("heading-xl-bold"),"heading-lg-light":an("heading-lg-light"),"heading-lg-regular":an("heading-lg-regular"),"heading-lg-semibold":an("heading-lg-semibold"),"heading-lg-bold":an("heading-lg-bold"),"heading-md-light":an("heading-md-light"),"heading-md-regular":an("heading-md-regular"),"heading-md-semibold":an("heading-md-semibold"),"heading-md-bold":an("heading-md-bold"),"heading-sm-light":an("heading-sm-light"),"heading-sm-regular":an("heading-sm-regular"),"heading-sm-semibold":an("heading-sm-semibold"),"heading-sm-bold":an("heading-sm-bold"),"heading-xs-light":an("heading-xs-light"),"heading-xs-regular":an("heading-xs-regular"),"heading-xs-semibold":an("heading-xs-semibold"),"heading-xs-bold":an("heading-xs-bold"),"body-baseline-light":an("body-baseline-light"),"body-baseline-regular":an("body-baseline-regular"),"body-baseline-semibold":an("body-baseline-semibold"),"body-baseline-bold":an("body-baseline-bold"),"body-md-light":an("body-md-light"),"body-md-regular":an("body-md-regular"),"body-md-semibold":an("body-md-semibold"),"body-md-bold":an("body-md-bold"),"body-sm-light":an("body-sm-light"),"body-sm-regular":an("body-sm-regular"),"body-sm-semibold":an("body-sm-semibold"),"body-sm-bold":an("body-sm-bold"),"body-xs-light":an("body-xs-light"),"body-xs-regular":an("body-xs-regular"),"body-xs-semibold":an("body-xs-semibold"),"body-xs-bold":an("body-xs-bold"),"form-label":an("form-label"),"form-description":an("form-description")},dn={collections:{default:{"duration-150":"150ms","duration-250":"250ms","duration-350":"350ms","duration-500":"500ms","duration-800":"800ms","duration-1000":"1000ms","ease-default":"cubic-bezier(0.45, 0.05, 0.55, 0.95)","ease-standard":"cubic-bezier(0.86, 0, 0.07, 1)","ease-entrance":"cubic-bezier(0.18, 0.13, 0, 1)","ease-exit":"cubic-bezier(1, 0, 0.8, 0.85)"}},defaultValue:"default"},cn=e=>r=>{var t;const n=r.theme,i=yt(dn,null==n?void 0:n.motionScheme);return(null===(t=null==n?void 0:n.overrides)||void 0===t?void 0:t.motion)?ft(i,e,n.overrides.motion):i[e]},un={"duration-150":cn("duration-150"),"duration-250":cn("duration-250"),"duration-350":cn("duration-350"),"duration-500":cn("duration-500"),"duration-800":cn("duration-800"),"duration-1000":cn("duration-1000"),"ease-default":cn("ease-default"),"ease-standard":cn("ease-standard"),"ease-entrance":cn("ease-entrance"),"ease-exit":cn("ease-exit")},gn={collections:{default:{none:0,xs:2,sm:4,md:8,lg:12,full:9999}},defaultValue:"default"},hn=e=>r=>{var t;const n=r.theme,i=yt(gn,null==n?void 0:n.radiusScheme);return(null===(t=null==n?void 0:n.overrides)||void 0===t?void 0:t.radius)?`${ft(i,e,n.overrides.radius)}px`:`${i[e]}px`},bn={none:hn("none"),xs:hn("xs"),sm:hn("sm"),md:hn("md"),lg:hn("lg"),full:hn("full")},mn={collections:{default:{"spacing-0":0,"spacing-4":4,"spacing-8":8,"spacing-12":12,"spacing-16":16,"spacing-20":20,"spacing-24":24,"spacing-32":32,"spacing-40":40,"spacing-48":48,"spacing-64":64,"spacing-72":72,"layout-xs":8,"layout-sm":16,"layout-md":24,"layout-lg":32,"layout-xl":48,"layout-xxl":64,"layout-xxxl":128}},defaultValue:"default"},pn=e=>r=>{var t;const n=r.theme,i=yt(mn,null==n?void 0:n.spacingScheme);return(null===(t=null==n?void 0:n.overrides)||void 0===t?void 0:t.spacing)?`${ft(i,e,n.overrides.spacing)}px`:`${i[e]}px`},fn={"spacing-0":pn("spacing-0"),"spacing-4":pn("spacing-4"),"spacing-8":pn("spacing-8"),"spacing-12":pn("spacing-12"),"spacing-16":pn("spacing-16"),"spacing-20":pn("spacing-20"),"spacing-24":pn("spacing-24"),"spacing-32":pn("spacing-32"),"spacing-40":pn("spacing-40"),"spacing-48":pn("spacing-48"),"spacing-64":pn("spacing-64"),"spacing-72":pn("spacing-72"),"layout-xs":pn("layout-xs"),"layout-sm":pn("layout-sm"),"layout-md":pn("layout-md"),"layout-lg":pn("layout-lg"),"layout-xl":pn("layout-xl"),"layout-xxl":pn("layout-xxl"),"layout-xxxl":pn("layout-xxxl")},yn=(e,r)=>Object.assign(Object.assign({},e),{colourMode:r}),vn=Object.assign(Object.assign({},Nt),{Primitive:_t}),xn=Object.assign(Object.assign({},ln),{Spec:rn}),wn=un,Fn=Object.assign(Object.assign({},wt),{Util:Ut}),$n=fn,En=bn,Dn=qt,Cn=Gt,Bn={colourScheme:"lifesg",fontScheme:"default",motionScheme:"default",borderScheme:"default",spacingScheme:"default",radiusScheme:"default",breakpointScheme:"default",resourceScheme:"lifesg",_v2:{colorScheme:"base",textStyleScheme:"base",designTokenScheme:"base",resourceScheme:"base"}},Sn={colourScheme:"bookingsg",fontScheme:"bookingsg",motionScheme:"default",borderScheme:"default",spacingScheme:"default",radiusScheme:"default",breakpointScheme:"default",resourceScheme:"bookingsg",_v2:{colorScheme:"bookingsg",textStyleScheme:"base",designTokenScheme:"base",resourceScheme:"bookingsg"}},kn={colourScheme:"ccube",fontScheme:"default",motionScheme:"default",borderScheme:"default",spacingScheme:"default",radiusScheme:"default",breakpointScheme:"default",resourceScheme:"ccube",_v2:{colorScheme:"ccube",textStyleScheme:"base",designTokenScheme:"base",resourceScheme:"ccube"}},An={colourScheme:"mylegacy",fontScheme:"default",motionScheme:"default",borderScheme:"default",spacingScheme:"default",radiusScheme:"default",breakpointScheme:"default",resourceScheme:"mylegacy",_v2:{colorScheme:"mylegacy",textStyleScheme:"base",designTokenScheme:"base",resourceScheme:"mylegacy"}},Mn={colourScheme:"rbs",fontScheme:"default",motionScheme:"default",borderScheme:"default",spacingScheme:"default",radiusScheme:"default",breakpointScheme:"default",resourceScheme:"rbs",_v2:{colorScheme:"rbs",textStyleScheme:"base",designTokenScheme:"rbs",resourceScheme:"rbs"}},On={colourScheme:"oneservice",fontScheme:"default",motionScheme:"default",borderScheme:"default",spacingScheme:"default",radiusScheme:"default",breakpointScheme:"default",resourceScheme:"oneservice"},zn={colourScheme:"pa",fontScheme:"pa",motionScheme:"default",borderScheme:"default",spacingScheme:"default",radiusScheme:"default",breakpointScheme:"default",resourceScheme:"pa",componentScheme:"pa"},_n={colourScheme:"a11yplayground",fontScheme:"a11yplayground",motionScheme:"default",borderScheme:"default",spacingScheme:"default",radiusScheme:"default",breakpointScheme:"default",resourceScheme:"a11yplayground",componentScheme:"default"};Object.assign(Object.assign({},Bn),{light:yn(Bn,"light"),dark:yn(Bn,"dark")}),Object.assign(Object.assign({},Sn),{light:yn(Sn,"light"),dark:yn(Sn,"dark")}),Object.assign(Object.assign({},kn),{light:yn(kn,"light"),dark:yn(kn,"dark")}),Object.assign(Object.assign({},An),{light:yn(An,"light"),dark:yn(An,"dark")}),Object.assign(Object.assign({},Mn),{light:yn(Mn,"light"),dark:yn(Mn,"dark")}),Object.assign(Object.assign({},On),{light:yn(On,"light"),dark:yn(On,"dark")}),Object.assign(Object.assign({},zn),{light:yn(zn,"light"),dark:yn(zn,"dark")}),Object.assign(Object.assign({},_n),{light:yn(_n,"light"),dark:yn(_n,"dark")});const Tn=e=>f`
    display: -webkit-box;
    -webkit-line-clamp: ${e};
    -webkit-box-orient: vertical;
    overflow: hidden;
`,Ln=(e,r,t=!1)=>f`
        ${xn[`${e}-${r}`]}
        ${t?"margin-bottom: 1.05em;":"margin-bottom: 0;"}
    `,jn=e=>{if(e)return f`
            ${Tn(e)}
        `},Rn=(e,r)=>f`
    ${Ln(e,r.weight||"regular",r.paragraph)}
    ${((e=!1,r=!1,t)=>r?f`
            display: block;
            ${jn(t)}
        `:e?f`
            display: inline;
        `:f`
            display: block;
            ${jn(t)}
        `)(r.inline,r.paragraph,r.maxLines)}
    color: ${vn.text};
`;var Yn;!function(t){const n=(e,r,t)=>{const n=p(e).attrs((({inline:e})=>({as:e?"span":void 0})))`
            ${e=>Rn(r,e)}
        `;return n.displayName=`Typography.${t}`,n};t.HeadingXXL=n("h1","heading-xxl","HeadingXXL"),t.HeadingXL=n("h2","heading-xl","HeadingXL"),t.HeadingLG=n("h3","heading-lg","HeadingLG"),t.HeadingMD=n("h4","heading-md","HeadingMD"),t.HeadingSM=n("h5","heading-sm","HeadingSM"),t.HeadingXS=n("h6","heading-xs","HeadingXS");const i=(e,r)=>{const t=p.p.attrs((({inline:e})=>({as:e?"span":void 0})))`
            ${r=>Rn(e,r)}
        `;return t.displayName=`Typography.${r}`,t};t.BodyBL=i("body-baseline","BodyBL"),t.BodyMD=i("body-md","BodyMD"),t.BodySM=i("body-sm","BodySM"),t.BodyXS=i("body-xs","BodyXS");const o=(t,n)=>{const i=p.a`
            ${e=>f`
                ${Ln(t,e.weight||"regular")}
                color: ${vn.hyperlink};
                text-decoration: none;

                :hover,
                :active,
                :focus {
                    color: ${vn["text-hover"]};
                }
            `}
        `,o=t=>{var{external:n=!1,children:o}=t,s=W(t,["external","children"]);return e(i,Object.assign({},s,{children:[o,n&&r(Pn,{})]}))};return o.displayName=`Typography.${n}`,o};t.LinkBL=o("body-baseline","LinkBL"),t.LinkMD=o("body-md","LinkMD"),t.LinkSM=o("body-sm","LinkSM"),t.LinkXS=o("body-xs","LinkXS")}(Yn||(Yn={}));const Pn=p(m)`
    height: 1lh;
    width: 1em;
    margin-left: 0.4em;
    vertical-align: middle;
`;function In(e,r){return In=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,r){return e.__proto__=r,e},In(e,r)}function Hn(e){return e&&e.stopPropagation&&e.stopPropagation(),e&&e.preventDefault&&e.preventDefault(),!1}function Nn(e){return null==e?[]:Array.isArray(e)?e.slice():[e]}function Wn(e){return null!==e&&1===e.length?e[0]:e.slice()}function Vn(e){Object.keys(e).forEach((r=>{"undefined"!=typeof document&&document.addEventListener(r,e[r],!1)}))}function Kn(e,r){return Un(function(e,r){let t=e;return t<=r.min&&(t=r.min),t>=r.max&&(t=r.max),t}(e,r),r)}function Un(e,r){const t=(e-r.min)%r.step;let n=e-t;return 2*Math.abs(t)>=r.step&&(n+=t>0?r.step:-r.step),parseFloat(n.toFixed(5))}let Zn=function(e){function r(r){var t;(t=e.call(this,r)||this).onKeyUp=()=>{t.onEnd()},t.onMouseUp=()=>{t.onEnd(t.getMouseEventMap())},t.onTouchEnd=e=>{e.preventDefault(),t.onEnd(t.getTouchEventMap())},t.onBlur=()=>{t.setState({index:-1},t.onEnd(t.getKeyDownEventMap()))},t.onMouseMove=e=>{t.setState({pending:!0});const r=t.getMousePosition(e),n=t.getDiffPosition(r[0]),i=t.getValueFromPosition(n);t.move(i)},t.onTouchMove=e=>{if(e.touches.length>1)return;t.setState({pending:!0});const r=t.getTouchPosition(e);if(void 0===t.isScrolling){const e=r[0]-t.startPosition[0],n=r[1]-t.startPosition[1];t.isScrolling=Math.abs(n)>Math.abs(e)}if(t.isScrolling)return void t.setState({index:-1});const n=t.getDiffPosition(r[0]),i=t.getValueFromPosition(n);t.move(i)},t.onKeyDown=e=>{if(!(e.ctrlKey||e.shiftKey||e.altKey||e.metaKey))switch(t.setState({pending:!0}),e.key){case"ArrowLeft":case"ArrowDown":case"Left":case"Down":e.preventDefault(),t.moveDownByStep();break;case"ArrowRight":case"ArrowUp":case"Right":case"Up":e.preventDefault(),t.moveUpByStep();break;case"Home":e.preventDefault(),t.move(t.props.min);break;case"End":e.preventDefault(),t.move(t.props.max);break;case"PageDown":e.preventDefault(),t.moveDownByStep(t.props.pageFn(t.props.step));break;case"PageUp":e.preventDefault(),t.moveUpByStep(t.props.pageFn(t.props.step))}},t.onSliderMouseDown=e=>{if(!t.props.disabled&&2!==e.button){if(t.setState({pending:!0}),!t.props.snapDragDisabled){const r=t.getMousePosition(e);t.forceValueFromPosition(r[0],(e=>{t.start(e,r[0]),Vn(t.getMouseEventMap())}))}Hn(e)}},t.onSliderClick=e=>{if(!t.props.disabled&&t.props.onSliderClick&&!t.hasMoved){const r=t.getMousePosition(e),n=Kn(t.calcValue(t.calcOffsetFromPosition(r[0])),t.props);t.props.onSliderClick(n)}},t.createOnKeyDown=e=>r=>{t.props.disabled||(t.start(e),Vn(t.getKeyDownEventMap()),Hn(r))},t.createOnMouseDown=e=>r=>{if(t.props.disabled||2===r.button)return;t.setState({pending:!0});const n=t.getMousePosition(r);t.start(e,n[0]),Vn(t.getMouseEventMap()),Hn(r)},t.createOnTouchStart=e=>r=>{if(t.props.disabled||r.touches.length>1)return;t.setState({pending:!0});const n=t.getTouchPosition(r);t.startPosition=n,t.isScrolling=void 0,t.start(e,n[0]),Vn(t.getTouchEventMap()),function(e){e.stopPropagation&&e.stopPropagation()}(r)},t.handleResize=()=>{const e=window.setTimeout((()=>{t.pendingResizeTimeouts.shift(),t.resize()}),0);t.pendingResizeTimeouts.push(e)},t.renderThumb=(e,r)=>{const n=t.props.thumbClassName+" "+t.props.thumbClassName+"-"+r+" "+(t.state.index===r?t.props.thumbActiveClassName:""),i={ref:e=>{t["thumb"+r]=e},key:t.props.thumbClassName+"-"+r,className:n,style:e,onMouseDown:t.createOnMouseDown(r),onTouchStart:t.createOnTouchStart(r),onFocus:t.createOnKeyDown(r),tabIndex:0,role:"slider","aria-orientation":t.props.orientation,"aria-valuenow":t.state.value[r],"aria-valuemin":t.props.min,"aria-valuemax":t.props.max,"aria-label":Array.isArray(t.props.ariaLabel)?t.props.ariaLabel[r]:t.props.ariaLabel,"aria-labelledby":Array.isArray(t.props.ariaLabelledby)?t.props.ariaLabelledby[r]:t.props.ariaLabelledby,"aria-disabled":t.props.disabled},o={index:r,value:Wn(t.state.value),valueNow:t.state.value[r]};return t.props.ariaValuetext&&(i["aria-valuetext"]="string"==typeof t.props.ariaValuetext?t.props.ariaValuetext:t.props.ariaValuetext(o)),t.props.renderThumb(i,o)},t.renderTrack=(e,r,n)=>{const i={key:t.props.trackClassName+"-"+e,className:t.props.trackClassName+" "+t.props.trackClassName+"-"+e,style:t.buildTrackStyle(r,t.state.upperBound-n)},o={index:e,value:Wn(t.state.value)};return t.props.renderTrack(i,o)};let n=Nn(r.value);n.length||(n=Nn(r.defaultValue)),t.pendingResizeTimeouts=[];const o=[];for(let e=0;e<n.length;e+=1)n[e]=Kn(n[e],r),o.push(e);return t.resizeObserver=null,t.resizeElementRef=i.createRef(),t.state={index:-1,upperBound:0,sliderLength:0,value:n,zIndices:o},t}!function(e,r){e.prototype=Object.create(r.prototype),e.prototype.constructor=e,In(e,r)}(r,e);var t=r.prototype;return t.componentDidMount=function(){"undefined"!=typeof window&&(this.resizeObserver=new ResizeObserver(this.handleResize),this.resizeObserver.observe(this.resizeElementRef.current),this.resize())},r.getDerivedStateFromProps=function(e,r){const t=Nn(e.value);return t.length?r.pending?null:{value:t.map((r=>Kn(r,e)))}:null},t.componentDidUpdate=function(){0===this.state.upperBound&&this.resize()},t.componentWillUnmount=function(){this.clearPendingResizeTimeouts(),this.resizeObserver&&this.resizeObserver.disconnect()},t.onEnd=function(e){e&&function(e){Object.keys(e).forEach((r=>{"undefined"!=typeof document&&document.removeEventListener(r,e[r],!1)}))}(e),this.hasMoved&&this.fireChangeEvent("onAfterChange"),this.setState({pending:!1}),this.hasMoved=!1},t.getValue=function(){return Wn(this.state.value)},t.getClosestIndex=function(e){let r=Number.MAX_VALUE,t=-1;const{value:n}=this.state,i=n.length;for(let o=0;o<i;o+=1){const i=this.calcOffset(n[o]),s=Math.abs(e-i);s<r&&(r=s,t=o)}return t},t.getMousePosition=function(e){return[e["page"+this.axisKey()],e["page"+this.orthogonalAxisKey()]]},t.getTouchPosition=function(e){const r=e.touches[0];return[r["page"+this.axisKey()],r["page"+this.orthogonalAxisKey()]]},t.getKeyDownEventMap=function(){return{keydown:this.onKeyDown,keyup:this.onKeyUp,focusout:this.onBlur}},t.getMouseEventMap=function(){return{mousemove:this.onMouseMove,mouseup:this.onMouseUp}},t.getTouchEventMap=function(){return{touchmove:this.onTouchMove,touchend:this.onTouchEnd}},t.getValueFromPosition=function(e){const r=e/(this.state.sliderLength-this.state.thumbSize)*(this.props.max-this.props.min);return Kn(this.state.startValue+r,this.props)},t.getDiffPosition=function(e){let r=e-this.state.startPosition;return this.props.invert&&(r*=-1),r},t.resize=function(){const{slider:e,thumb0:r}=this;if(!e||!r)return;const t=this.sizeKey(),n=e.getBoundingClientRect(),i=e[t],o=n[this.posMaxKey()],s=n[this.posMinKey()],a=r.getBoundingClientRect()[t.replace("client","").toLowerCase()],l=i-a,d=Math.abs(o-s);this.state.upperBound===l&&this.state.sliderLength===d&&this.state.thumbSize===a||this.setState({upperBound:l,sliderLength:d,thumbSize:a})},t.calcOffset=function(e){const r=this.props.max-this.props.min;return 0===r?0:(e-this.props.min)/r*this.state.upperBound},t.calcValue=function(e){return e/this.state.upperBound*(this.props.max-this.props.min)+this.props.min},t.calcOffsetFromPosition=function(e){const{slider:r}=this,t=r.getBoundingClientRect(),n=t[this.posMaxKey()],i=t[this.posMinKey()];let o=e-(window["page"+this.axisKey()+"Offset"]+(this.props.invert?n:i));return this.props.invert&&(o=this.state.sliderLength-o),o-=this.state.thumbSize/2,o},t.forceValueFromPosition=function(e,r){const t=this.calcOffsetFromPosition(e),n=this.getClosestIndex(t),i=Kn(this.calcValue(t),this.props),o=this.state.value.slice();o[n]=i;for(let e=0;e<o.length-1;e+=1)if(o[e+1]-o[e]<this.props.minDistance)return;this.fireChangeEvent("onBeforeChange"),this.hasMoved=!0,this.setState({value:o},(()=>{r(n),this.fireChangeEvent("onChange")}))},t.clearPendingResizeTimeouts=function(){do{const e=this.pendingResizeTimeouts.shift();clearTimeout(e)}while(this.pendingResizeTimeouts.length)},t.start=function(e,r){const t=this["thumb"+e];t&&t.focus();const{zIndices:n}=this.state;n.splice(n.indexOf(e),1),n.push(e),this.setState((t=>({startValue:t.value[e],startPosition:void 0!==r?r:t.startPosition,index:e,zIndices:n})))},t.moveUpByStep=function(e){void 0===e&&(e=this.props.step);const r=this.state.value[this.state.index],t=Kn(this.props.invert&&"horizontal"===this.props.orientation?r-e:r+e,this.props);this.move(Math.min(t,this.props.max))},t.moveDownByStep=function(e){void 0===e&&(e=this.props.step);const r=this.state.value[this.state.index],t=Kn(this.props.invert&&"horizontal"===this.props.orientation?r+e:r-e,this.props);this.move(Math.max(t,this.props.min))},t.move=function(e){const r=this.state.value.slice(),{index:t}=this.state,{length:n}=r,i=r[t];if(e===i)return;this.hasMoved||this.fireChangeEvent("onBeforeChange"),this.hasMoved=!0;const{pearling:o,max:s,min:a,minDistance:l}=this.props;if(!o){if(t>0){const n=r[t-1];e<n+l&&(e=n+l)}if(t<n-1){const n=r[t+1];e>n-l&&(e=n-l)}}r[t]=e,o&&n>1&&(e>i?(this.pushSucceeding(r,l,t),function(e,r,t,n){for(let i=0;i<e;i+=1){const o=n-i*t;r[e-1-i]>o&&(r[e-1-i]=o)}}(n,r,l,s)):e<i&&(this.pushPreceding(r,l,t),function(e,r,t,n){for(let i=0;i<e;i+=1){const e=n+i*t;r[i]<e&&(r[i]=e)}}(n,r,l,a))),this.setState({value:r},this.fireChangeEvent.bind(this,"onChange"))},t.pushSucceeding=function(e,r,t){let n,i;for(n=t,i=e[n]+r;null!==e[n+1]&&i>e[n+1];n+=1,i=e[n]+r)e[n+1]=Un(i,this.props)},t.pushPreceding=function(e,r,t){for(let n=t,i=e[n]-r;null!==e[n-1]&&i<e[n-1];n-=1,i=e[n]-r)e[n-1]=Un(i,this.props)},t.axisKey=function(){return"vertical"===this.props.orientation?"Y":"X"},t.orthogonalAxisKey=function(){return"vertical"===this.props.orientation?"X":"Y"},t.posMinKey=function(){return"vertical"===this.props.orientation?this.props.invert?"bottom":"top":this.props.invert?"right":"left"},t.posMaxKey=function(){return"vertical"===this.props.orientation?this.props.invert?"top":"bottom":this.props.invert?"left":"right"},t.sizeKey=function(){return"vertical"===this.props.orientation?"clientHeight":"clientWidth"},t.fireChangeEvent=function(e){this.props[e]&&this.props[e](Wn(this.state.value),this.state.index)},t.buildThumbStyle=function(e,r){const t={position:"absolute",touchAction:"none",willChange:this.state.index>=0?this.posMinKey():void 0,zIndex:this.state.zIndices.indexOf(r)+1};return t[this.posMinKey()]=e+"px",t},t.buildTrackStyle=function(e,r){const t={position:"absolute",willChange:this.state.index>=0?this.posMinKey()+","+this.posMaxKey():void 0};return t[this.posMinKey()]=e,t[this.posMaxKey()]=r,t},t.buildMarkStyle=function(e){var r;return(r={position:"absolute"})[this.posMinKey()]=e,r},t.renderThumbs=function(e){const{length:r}=e,t=[];for(let n=0;n<r;n+=1)t[n]=this.buildThumbStyle(e[n],n);const n=[];for(let e=0;e<r;e+=1)n[e]=this.renderThumb(t[e],e);return n},t.renderTracks=function(e){const r=[],t=e.length-1;r.push(this.renderTrack(0,0,e[0]));for(let n=0;n<t;n+=1)r.push(this.renderTrack(n+1,e[n],e[n+1]));return r.push(this.renderTrack(t+1,e[t],this.state.upperBound)),r},t.renderMarks=function(){let{marks:e}=this.props;const r=this.props.max-this.props.min+1;return"boolean"==typeof e?e=Array.from({length:r}).map(((e,r)=>r)):"number"==typeof e&&(e=Array.from({length:r}).map(((e,r)=>r)).filter((r=>r%e==0))),e.map(parseFloat).sort(((e,r)=>e-r)).map((e=>{const r=this.calcOffset(e),t={key:e,className:this.props.markClassName,style:this.buildMarkStyle(r)};return this.props.renderMark(t)}))},t.render=function(){const e=[],{value:r}=this.state,t=r.length;for(let n=0;n<t;n+=1)e[n]=this.calcOffset(r[n],n);const n=this.props.withTracks?this.renderTracks(e):null,o=this.renderThumbs(e),s=this.props.marks?this.renderMarks():null;return i.createElement("div",{ref:e=>{this.slider=e,this.resizeElementRef.current=e},style:{position:"relative"},className:this.props.className+(this.props.disabled?" disabled":""),onMouseDown:this.onSliderMouseDown,onClick:this.onSliderClick},n,o,s)},r}(i.Component);Zn.displayName="ReactSlider",Zn.defaultProps={min:0,max:100,step:1,pageFn:e=>10*e,minDistance:0,defaultValue:0,orientation:"horizontal",className:"slider",thumbClassName:"thumb",thumbActiveClassName:"active",trackClassName:"track",markClassName:"mark",withTracks:!0,pearling:!1,disabled:!1,snapDragDisabled:!1,invert:!1,marks:[],renderThumb:e=>i.createElement("div",e),renderTrack:e=>i.createElement("div",e),renderMark:e=>i.createElement("span",e)};var Xn=Zn;const qn=p.div`
    isolation: isolate;
`,Jn=p.div`
    margin-top: ${$n["spacing-8"]};
    display: flex;
    justify-content: space-between;
    gap: ${$n["spacing-8"]};
`,Gn=p.div`
    margin-bottom: ${$n["spacing-8"]};
`,Qn=p(Yn.BodyBL)`
    overflow-wrap: anywhere;
`,ei=p(Xn)`
    height: 0.875rem;
`,ri=p.div`
    height: 2.5rem;
    width: 2.5rem;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    ${e=>e.$disabled?f`
                cursor: not-allowed;
            `:e.$readOnly?void 0:f`
                cursor: grab;
                :active {
                    cursor: grabbing;
                }
            `}

    :after {
        content: "";
        display: block;
        height: 0.875rem;
        width: 0.875rem;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);

        background-color: ${vn.bg};
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.16);
        border: ${Fn["width-010"]} ${Fn.solid}
            ${e=>e.$disabled?vn["border-selected-disabled"]:vn["border-strong"]};
        border-radius: 50%;
    }
`,ti=p.div`
    height: 0.875rem;
    width: 0.875rem;
    position: relative;
    outline: none;

    :focus ${ri}:after {
        outline-offset: -1px;
        outline: ${Fn["width-040"]} ${Fn.solid}
            ${vn["border-selected"]};
    }
`,ni=p.div`
    height: 0.25rem;
    top: 50%;
    transform: translateY(-50%);
    border-radius: ${En.full};

    background: ${e=>e.$color&&"function"==typeof e.$color?e.$color(e):e.$color||vn["border-strong"](e)};
`,ii=p.div`
    display: flex;
    margin-bottom: ${$n["spacing-16"]};
    align-items: baseline;
`,oi=p.div`
    margin: 0 0.5rem;
`,si=p.div`
    width: 100%;
    height: 4rem;
    display: flex;
    align-items: flex-end;
    padding: 0 0.4375rem;
`,ai=p.div`
    flex: 1;
    border-radius: ${En.sm} ${En.sm} 0 0;
    border: 0.5px solid transparent; // space between bars
    background-clip: content-box;

    ${e=>{let r=vn["bg-strongest"];return e.$disabled&&e.$selected?r=vn["bg-selected-stronger-disabled"]:e.$disabled?r=vn["bg-disabled"]:e.$selected&&(r=vn["bg-selected-stronger"]),f`
            background-color: ${r};
        `}}
`,li=p((t=>{var{value:n,min:i=0,max:a=100,step:l=1,minRange:d,numOfThumbs:c=2,colors:u,disabled:g,readOnly:h,ariaLabels:b,showSliderLabels:m,sliderLabelPrefix:p,sliderLabelSuffix:f,showIndicatorLabel:y,indicatorLabelPrefix:v,indicatorLabelSuffix:x,renderSliderLabel:w,onChange:F,onChangeEnd:$}=t,E=W(t,["value","min","max","step","minRange","numOfThumbs","colors","disabled","readOnly","ariaLabels","showSliderLabels","sliderLabelPrefix","sliderLabelSuffix","showIndicatorLabel","indicatorLabelPrefix","indicatorLabelSuffix","renderSliderLabel","onChange","onChangeEnd"]);const[D,C]=o(S()),B=function(){const e=function(){const e=g||h?vn["border-disabled"]:vn["border-strong"],r=g||h?vn["border-selected-disabled"]:vn["border-selected"];if(1===c)return[r,e];const t=[];t.push(e);for(let e=0;e<c-1;e++)t.push(r);return t.push(e),t}();return new Array(c+1).fill(0).map(((r,t)=>(null==u?void 0:u[t])||e[t]))}();s((()=>{n!==D&&C(S())}),[n]);function S(){if(n&&n.length===c)return n;const e=[];for(let r=0;r<c;r++)e.push(i+l*r);return e}const k=r=>w?w(r):e(Qn,{children:[p,r,f]});return e(qn,Object.assign({},E,{children:[y&&r(Gn,{children:(()=>{let r="";if(1===D.length)r=`${D[0]}`;else if(2===D.length)r=`${D[0]} - ${D[1]}`;else if(D.length>2){r=`${Math.min(...D)} - ${Math.max(...D)}`}return e(Qn,{children:[v,r,x]})})()}),r(ei,{step:l,min:i,max:a,value:D,disabled:g||h,onChange:(e,r)=>{if("number"==typeof e){const r=[e];C(r),null==F||F(r)}else{if(r>-1&&D[r]===e[r])return;const t=[...e];C(t),null==F||F(t)}},onAfterChange:e=>{if("number"==typeof e){const r=[e];C(r),null==$||$(r)}else{const r=[...e];C(r),null==$||$(r)}},minDistance:d,ariaLabel:b,renderThumb:(e,t)=>r(ti,Object.assign({"data-testid":`slider-thumb-${t.index}`},e,{tabIndex:g?void 0:e.tabIndex,children:r(ri,{$disabled:g,$readOnly:h})})),renderTrack:(e,t)=>r(ni,Object.assign({"data-testid":`slider-track-${t.index}`},e,{$color:B[t.index]}))}),m&&e(Jn,{children:[r("div",{children:k(i)}),r("div",{children:k(a)})]})]}))}))`
    margin-top: -0.3125rem;
`,di=n=>{var{bins:i=[],interval:l,disabled:d,readOnly:c,value:u,showRangeLabels:g,rangeLabelPrefix:h,rangeLabelSuffix:b,ariaLabels:m,onChange:p,onChangeEnd:f,renderEmptyView:y,renderRangeLabel:v}=n,x=W(n,["bins","interval","disabled","readOnly","value","showRangeLabels","rangeLabelPrefix","rangeLabelSuffix","ariaLabels","onChange","onChangeEnd","renderEmptyView","renderRangeLabel"]);const w=i.map((e=>e.count)),F=Math.max(...w),$=i.map((e=>e.minValue)),E=Math.max(...$),D=Math.min(...$),[C,B]=o(M()),S=a((()=>{const e=[...i].sort(((e,r)=>e.minValue-r.minValue)),r=(E-D)/l+1,t=[];for(let n=0;n<r;n++){const r=e.find((e=>e.minValue===D+l*n));r?t.push(r):t.push({count:0,minValue:D+l*n})}return t}),[i,l]);s((()=>{u!==C&&B(M())}),[u]);const k=e=>{const[r,t]=e,n=[r,t];B(n),null==p||p(n)},A=e=>{const[r,t]=e,n=[r,t];B(n),null==f||f(n)};function M(){return null!=u?u:[D,D+l]}const O=r=>v?v(r):e(Yn.BodyBL,{children:[h,r,b]});return e("div",Object.assign({},x,{children:[g&&e(ii,{children:[O(C[0]),r(oi,{children:"-"}),O(C[1])]}),S.every((e=>0===e.count))&&y?y():e(t,{children:[r(si,{children:S.map(((e,t)=>{const n=e.count/F;return r(ai,{style:{height:n?`calc(calc(100% - 0.25rem) * ${n} + 0.25rem)`:0},$selected:e.minValue>=C[0]&&e.minValue<C[1],$disabled:d||c},t)}))}),r(li,{min:D,max:E+l,step:l,minRange:l,numOfThumbs:2,value:C,disabled:d,readOnly:c,ariaLabels:m,onChange:k,onChangeEnd:A})]})]}))};var ci=function(e,r){return ci=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,r){e.__proto__=r}||function(e,r){for(var t in r)Object.prototype.hasOwnProperty.call(r,t)&&(e[t]=r[t])},ci(e,r)};var ui=function(){return ui=Object.assign||function(e){for(var r,t=1,n=arguments.length;t<n;t++)for(var i in r=arguments[t])Object.prototype.hasOwnProperty.call(r,i)&&(e[i]=r[i]);return e},ui.apply(this,arguments)};var gi="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};var hi=function(e){var r=typeof e;return null!=e&&("object"==r||"function"==r)},bi="object"==typeof gi&&gi&&gi.Object===Object&&gi,mi="object"==typeof self&&self&&self.Object===Object&&self,pi=bi||mi||Function("return this")(),fi=pi,yi=function(){return fi.Date.now()},vi=/\s/;var xi=function(e){for(var r=e.length;r--&&vi.test(e.charAt(r)););return r},wi=/^\s+/;var Fi=function(e){return e?e.slice(0,xi(e)+1).replace(wi,""):e},$i=pi.Symbol,Ei=$i,Di=Object.prototype,Ci=Di.hasOwnProperty,Bi=Di.toString,Si=Ei?Ei.toStringTag:void 0;var ki=function(e){var r=Ci.call(e,Si),t=e[Si];try{e[Si]=void 0;var n=!0}catch(e){}var i=Bi.call(e);return n&&(r?e[Si]=t:delete e[Si]),i},Ai=Object.prototype.toString;var Mi=ki,Oi=function(e){return Ai.call(e)},zi=$i?$i.toStringTag:void 0;var _i=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":zi&&zi in Object(e)?Mi(e):Oi(e)},Ti=function(e){return null!=e&&"object"==typeof e};var Li=Fi,ji=hi,Ri=function(e){return"symbol"==typeof e||Ti(e)&&"[object Symbol]"==_i(e)},Yi=/^[-+]0x[0-9a-f]+$/i,Pi=/^0b[01]+$/i,Ii=/^0o[0-7]+$/i,Hi=parseInt;var Ni=hi,Wi=yi,Vi=function(e){if("number"==typeof e)return e;if(Ri(e))return NaN;if(ji(e)){var r="function"==typeof e.valueOf?e.valueOf():e;e=ji(r)?r+"":r}if("string"!=typeof e)return 0===e?e:+e;e=Li(e);var t=Pi.test(e);return t||Ii.test(e)?Hi(e.slice(2),t?2:8):Yi.test(e)?NaN:+e},Ki=Math.max,Ui=Math.min;var Zi=function(e,r,t){var n,i,o,s,a,l,d=0,c=!1,u=!1,g=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function h(r){var t=n,o=i;return n=i=void 0,d=r,s=e.apply(o,t)}function b(e){var t=e-l;return void 0===l||t>=r||t<0||u&&e-d>=o}function m(){var e=Wi();if(b(e))return p(e);a=setTimeout(m,function(e){var t=r-(e-l);return u?Ui(t,o-(e-d)):t}(e))}function p(e){return a=void 0,g&&n?h(e):(n=i=void 0,s)}function f(){var e=Wi(),t=b(e);if(n=arguments,i=this,l=e,t){if(void 0===a)return function(e){return d=e,a=setTimeout(m,r),c?h(e):s}(l);if(u)return clearTimeout(a),a=setTimeout(m,r),h(l)}return void 0===a&&(a=setTimeout(m,r)),s}return r=Vi(r)||0,Ni(t)&&(c=!!t.leading,o=(u="maxWait"in t)?Ki(Vi(t.maxWait)||0,r):o,g="trailing"in t?!!t.trailing:g),f.cancel=function(){void 0!==a&&clearTimeout(a),d=0,n=l=i=a=void 0},f.flush=function(){return void 0===a?s:p(Wi())},f},Xi=Zi,qi=hi;var Ji=function(e,r,t){var n=!0,i=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return qi(t)&&(n="leading"in t?!!t.leading:n,i="trailing"in t?!!t.trailing:i),Xi(e,r,{leading:n,maxWait:r,trailing:i})},Gi=function(e,r,t,n){switch(r){case"debounce":return Zi(e,t,n);case"throttle":return Ji(e,t,n);default:return e}},Qi=function(e){return"function"==typeof e},eo=function(){return"undefined"==typeof window},ro=function(e){return e instanceof Element||e instanceof HTMLDocument},to=function(e,r,t,n){return function(i){var o=i.width,s=i.height;r((function(r){return r.width===o&&r.height===s||r.width===o&&!n||r.height===s&&!t?r:(e&&Qi(e)&&e(o,s),{width:o,height:s})}))}};!function(e){function r(r){var t=e.call(this,r)||this;t.cancelHandler=function(){t.resizeHandler&&t.resizeHandler.cancel&&(t.resizeHandler.cancel(),t.resizeHandler=null)},t.attachObserver=function(){var e=t.props,r=e.targetRef,n=e.observerOptions;if(!eo()){r&&r.current&&(t.targetRef.current=r.current);var i=t.getElement();i&&(t.observableElement&&t.observableElement===i||(t.observableElement=i,t.resizeObserver.observe(i,n)))}},t.getElement=function(){var e=t.props,r=e.querySelector,n=e.targetDomEl;if(eo())return null;if(r)return document.querySelector(r);if(n&&ro(n))return n;if(t.targetRef&&ro(t.targetRef.current))return t.targetRef.current;var i=N(t);if(!i)return null;switch(t.getRenderType()){case"renderProp":case"childFunction":case"child":case"childArray":return i;default:return i.parentElement}},t.createResizeHandler=function(e){var r=t.props,n=r.handleWidth,i=void 0===n||n,o=r.handleHeight,s=void 0===o||o,a=r.onResize;if(i||s){var l=to(a,t.setState.bind(t),i,s);e.forEach((function(e){var r=e&&e.contentRect||{},n=r.width,i=r.height;!t.skipOnMount&&!eo()&&l({width:n,height:i}),t.skipOnMount=!1}))}},t.getRenderType=function(){var e=t.props,r=e.render,n=e.children;return Qi(r)?"renderProp":Qi(n)?"childFunction":d(n)?"child":Array.isArray(n)?"childArray":"parent"};var n=r.skipOnMount,i=r.refreshMode,o=r.refreshRate,s=void 0===o?1e3:o,a=r.refreshOptions;return t.state={width:void 0,height:void 0},t.skipOnMount=n,t.targetRef=c(),t.observableElement=null,eo()||(t.resizeHandler=Gi(t.createResizeHandler,i,s,a),t.resizeObserver=new window.ResizeObserver(t.resizeHandler)),t}(function(e,r){if("function"!=typeof r&&null!==r)throw new TypeError("Class extends value "+String(r)+" is not a constructor or null");function t(){this.constructor=e}ci(e,r),e.prototype=null===r?Object.create(r):(t.prototype=r.prototype,new t)})(r,e),r.prototype.componentDidMount=function(){this.attachObserver()},r.prototype.componentDidUpdate=function(){this.attachObserver()},r.prototype.componentWillUnmount=function(){eo()||(this.observableElement=null,this.resizeObserver.disconnect(),this.cancelHandler())},r.prototype.render=function(){var e,r=this.props,t=r.render,i=r.children,o=r.nodeType,s=void 0===o?"div":o,a=this.state,l={width:a.width,height:a.height,targetRef:this.targetRef};switch(this.getRenderType()){case"renderProp":return t&&t(l);case"childFunction":return(e=i)(l);case"child":if((e=i).type&&"string"==typeof e.type){var d=function(e,r){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(n=Object.getOwnPropertySymbols(e);i<n.length;i++)r.indexOf(n[i])<0&&Object.prototype.propertyIsEnumerable.call(e,n[i])&&(t[n[i]]=e[n[i]])}return t}(l,["targetRef"]);return u(e,d)}return u(e,l);case"childArray":return(e=i).map((function(e){return!!e&&u(e,l)}));default:return n.createElement(s,null)}}}(g);var no,io=eo()?s:h;!function(e){e.transformWithSpaces=(e,r)=>{const t="(.{"+r+"})";return e.replace(/[^\dA-Z]/gi,"").replace(new RegExp(t,"g"),"$1 ").trim()},e.padValue=(e,r)=>{if("0"===e)return r?e:e.padStart(2,"0");if(""===e)return e;return parseInt(e).toString().padStart(2,"0")},e.shouldTruncateToTwoLines=(e,r)=>{const t=Math.floor(r/9);return e.length>=2*t||1===e.split(" ").length&&e.length>t},e.truncateOneLine=(e,r,t,n,i=8)=>{let o=0;r>t&&(o=Math.floor((r-t)/i));const s=n+o;if(s<e.length){const r=Math.floor(s/2);return e.substring(0,r)+" ... "+e.substring(e.length-r,e.length)}return e},e.truncateTwoLines=(e,r,t,n=1.2)=>{const i=Math.floor(2*r/(.6*t))*(2/n);if(e.length<=i)return e;const o=Math.floor(.6*i),s=Math.floor(.2*i);return`${e.substring(0,o)}...${e.substring(e.length-s)}`},e.getTextWidth=(r,t)=>{if("undefined"==typeof document)return 0;const n=(e.getTextWidth.canvas||(e.getTextWidth.canvas=document.createElement("canvas"))).getContext("2d");n.font=t;return n.measureText(r).width},e.maskValue=(e,t)=>{if(!e)return e;const{maskRange:n,unmaskRange:i,maskChar:o="•",maskRegex:s,maskTransformer:a}=t;if(a)return a(e);if(s)return e.replace(s,o);if(n){const{startIndex:t,endIndex:i}=r(n[0],n[1]);return e.substring(0,t)+o.repeat(e.substring(t,i+1).length)+e.substring(i+1)}if(i){const{startIndex:t,endIndex:n}=r(i[0],i[1]);return o.repeat(e.substring(0,t).length)+e.substring(t,n+1)+o.repeat(e.substring(n+1).length)}return e};const r=(e,r)=>e<r?{startIndex:e,endIndex:r}:{startIndex:r,endIndex:e},t=new Intl.PluralRules("en",{type:"ordinal"}),n=new Map([["one","st"],["two","nd"],["few","rd"],["other","th"]]);e.formatOrdinal=e=>{const r=t.select(e);return`${e}${n.get(r)}`}}(no||(no={}));const oo=p.div`
    font-weight: ${e=>e.$bold?xn.Spec["weight-semibold"]:xn.Spec["weight-regular"]};

    ${e=>e.$disabled?f`
                color: ${vn["text-disabled"]};
            `:e.$selected?f`
                color: ${vn["text-selected"]};
            `:f`
                color: ${vn.text};
            `}
    width: 100%;

    ${e=>"end"===e.$truncateType&&Tn(e.$maxLines||2)}
    overflow-wrap: break-word;
`,so=p.div`
    color: ${vn["text-subtlest"]};
    width: 100%;

    ${e=>"end"===e.$truncateType&&Tn(e.$maxLines||2)}
    overflow-wrap: break-word;

    ${e=>"next-line"===e.$labelDisplayType?f`
                    ${xn["body-md-semibold"]}
                `:f`
                    ${xn["body-baseline-regular"]}
                `}
`;p.span`
    font-weight: ${xn.Spec["weight-semibold"]};
`,p.div`
    text-align: left;
    width: 100%;
    overflow: hidden;
    overflow-wrap: break-word;

    ${e=>"small"===e.$variant?xn["body-md-regular"]:xn["body-baseline-regular"]}

    ${e=>{switch(e.$labelDisplayType){case"next-line":return f`
                    display: flex;
                    flex-direction: column;
                `;case"inline":return f`
                    ${oo} {
                        display: inline;
                    }

                    ${so} {
                        display: inline;
                        margin-left: 0.5rem;
                    }
                `}}}
`,p.div`
    display: inline-block;
    width: ${e=>1===e.$maxLines?50:100}%;
    height: 1lh;
    word-break: break-all;
    overflow: hidden;
`,p.div`
    display: inline-block;
    width: ${e=>1===e.$maxLines?50:100}%;
    height: 1lh;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    direction: rtl;
    text-align: right;
`;var ao=Cr;var lo=function(e){var r=this.__data__,t=r.delete(e);return this.size=r.size,t};var co=function(e){return this.__data__.get(e)};var uo=function(e){return this.__data__.has(e)},go=Cr,ho=Br,bo=Ur;var mo=function(e,r){var t=this.__data__;if(t instanceof go){var n=t.__data__;if(!ho||n.length<199)return n.push([e,r]),this.size=++t.size,this;t=this.__data__=new bo(n)}return t.set(e,r),this.size=t.size,this},po=Cr,fo=function(){this.__data__=new ao,this.size=0},yo=lo,vo=co,xo=uo,wo=mo;function Fo(e){var r=this.__data__=new po(e);this.size=r.size}Fo.prototype.clear=fo,Fo.prototype.delete=yo,Fo.prototype.get=vo,Fo.prototype.has=xo,Fo.prototype.set=wo;var $o=Ur,Eo=function(e){return this.__data__.set(e,"__lodash_hash_undefined__"),this},Do=function(e){return this.__data__.has(e)};function Co(e){var r=-1,t=null==e?0:e.length;for(this.__data__=new $o;++r<t;)this.add(e[r])}Co.prototype.add=Co.prototype.push=Eo,Co.prototype.has=Do,J.Uint8Array;var Bo=G?G.prototype:void 0;Bo&&Bo.valueOf;var So=de,ko=ce;var Ao=function(e){return ko(e)&&"[object Arguments]"==So(e)},Mo=Object.prototype;Mo.hasOwnProperty,Mo.propertyIsEnumerable;Ao(function(){return arguments}());var Oo={exports:{}};var zo=function(){return!1};!function(e,r){var t=J,n=zo,i=r&&!r.nodeType&&r,o=i&&e&&!e.nodeType&&e,s=o&&o.exports===i?t.Buffer:void 0,a=(s?s.isBuffer:void 0)||n;e.exports=a}(Oo,Oo.exports);var _o={exports:{}};!function(e,r){var t=Z,n=r&&!r.nodeType&&r,i=n&&e&&!e.nodeType&&e,o=i&&i.exports===n&&t.process,s=function(){try{var e=i&&i.require&&i.require("util").types;return e||o&&o.binding&&o.binding("util")}catch(e){}}();e.exports=s}(_o,_o.exports);var To=_o.exports;To&&To.isTypedArray;var Lo=He(J,"DataView"),jo=Br,Ro=He(J,"Promise"),Yo=He(J,"Set"),Po=He(J,"WeakMap"),Io=de,Ho=Se,No="[object Map]",Wo="[object Promise]",Vo="[object Set]",Ko="[object WeakMap]",Uo="[object DataView]",Zo=Ho(Lo),Xo=Ho(jo),qo=Ho(Ro),Jo=Ho(Yo),Go=Ho(Po),Qo=Io;(Lo&&Qo(new Lo(new ArrayBuffer(1)))!=Uo||jo&&Qo(new jo)!=No||Ro&&Qo(Ro.resolve())!=Wo||Yo&&Qo(new Yo)!=Vo||Po&&Qo(new Po)!=Ko)&&(Qo=function(e){var r=Io(e),t="[object Object]"==r?e.constructor:void 0,n=t?Ho(t):"";if(n)switch(n){case Zo:return Uo;case Xo:return No;case qo:return Wo;case Jo:return Vo;case Go:return Ko}return r});var es={exports:{}};es.exports=function(){var e=1e3,r=6e4,t=36e5,n="millisecond",i="second",o="minute",s="hour",a="day",l="week",d="month",c="quarter",u="year",g="date",h="Invalid Date",b=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,m=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,p={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(e){var r=["th","st","nd","rd"],t=e%100;return"["+e+(r[(t-20)%10]||r[t]||r[0])+"]"}},f=function(e,r,t){var n=String(e);return!n||n.length>=r?e:""+Array(r+1-n.length).join(t)+e},y={s:f,z:function(e){var r=-e.utcOffset(),t=Math.abs(r),n=Math.floor(t/60),i=t%60;return(r<=0?"+":"-")+f(n,2,"0")+":"+f(i,2,"0")},m:function e(r,t){if(r.date()<t.date())return-e(t,r);var n=12*(t.year()-r.year())+(t.month()-r.month()),i=r.clone().add(n,d),o=t-i<0,s=r.clone().add(n+(o?-1:1),d);return+(-(n+(t-i)/(o?i-s:s-i))||0)},a:function(e){return e<0?Math.ceil(e)||0:Math.floor(e)},p:function(e){return{M:d,y:u,w:l,d:a,D:g,h:s,m:o,s:i,ms:n,Q:c}[e]||String(e||"").toLowerCase().replace(/s$/,"")},u:function(e){return void 0===e}},v="en",x={};x[v]=p;var w="$isDayjsObject",F=function(e){return e instanceof C||!(!e||!e[w])},$=function e(r,t,n){var i;if(!r)return v;if("string"==typeof r){var o=r.toLowerCase();x[o]&&(i=o),t&&(x[o]=t,i=o);var s=r.split("-");if(!i&&s.length>1)return e(s[0])}else{var a=r.name;x[a]=r,i=a}return!n&&i&&(v=i),i||!n&&v},E=function(e,r){if(F(e))return e.clone();var t="object"==typeof r?r:{};return t.date=e,t.args=arguments,new C(t)},D=y;D.l=$,D.i=F,D.w=function(e,r){return E(e,{locale:r.$L,utc:r.$u,x:r.$x,$offset:r.$offset})};var C=function(){function p(e){this.$L=$(e.locale,null,!0),this.parse(e),this.$x=this.$x||e.x||{},this[w]=!0}var f=p.prototype;return f.parse=function(e){this.$d=function(e){var r=e.date,t=e.utc;if(null===r)return new Date(NaN);if(D.u(r))return new Date;if(r instanceof Date)return new Date(r);if("string"==typeof r&&!/Z$/i.test(r)){var n=r.match(b);if(n){var i=n[2]-1||0,o=(n[7]||"0").substring(0,3);return t?new Date(Date.UTC(n[1],i,n[3]||1,n[4]||0,n[5]||0,n[6]||0,o)):new Date(n[1],i,n[3]||1,n[4]||0,n[5]||0,n[6]||0,o)}}return new Date(r)}(e),this.init()},f.init=function(){var e=this.$d;this.$y=e.getFullYear(),this.$M=e.getMonth(),this.$D=e.getDate(),this.$W=e.getDay(),this.$H=e.getHours(),this.$m=e.getMinutes(),this.$s=e.getSeconds(),this.$ms=e.getMilliseconds()},f.$utils=function(){return D},f.isValid=function(){return!(this.$d.toString()===h)},f.isSame=function(e,r){var t=E(e);return this.startOf(r)<=t&&t<=this.endOf(r)},f.isAfter=function(e,r){return E(e)<this.startOf(r)},f.isBefore=function(e,r){return this.endOf(r)<E(e)},f.$g=function(e,r,t){return D.u(e)?this[r]:this.set(t,e)},f.unix=function(){return Math.floor(this.valueOf()/1e3)},f.valueOf=function(){return this.$d.getTime()},f.startOf=function(e,r){var t=this,n=!!D.u(r)||r,c=D.p(e),h=function(e,r){var i=D.w(t.$u?Date.UTC(t.$y,r,e):new Date(t.$y,r,e),t);return n?i:i.endOf(a)},b=function(e,r){return D.w(t.toDate()[e].apply(t.toDate("s"),(n?[0,0,0,0]:[23,59,59,999]).slice(r)),t)},m=this.$W,p=this.$M,f=this.$D,y="set"+(this.$u?"UTC":"");switch(c){case u:return n?h(1,0):h(31,11);case d:return n?h(1,p):h(0,p+1);case l:var v=this.$locale().weekStart||0,x=(m<v?m+7:m)-v;return h(n?f-x:f+(6-x),p);case a:case g:return b(y+"Hours",0);case s:return b(y+"Minutes",1);case o:return b(y+"Seconds",2);case i:return b(y+"Milliseconds",3);default:return this.clone()}},f.endOf=function(e){return this.startOf(e,!1)},f.$set=function(e,r){var t,l=D.p(e),c="set"+(this.$u?"UTC":""),h=(t={},t[a]=c+"Date",t[g]=c+"Date",t[d]=c+"Month",t[u]=c+"FullYear",t[s]=c+"Hours",t[o]=c+"Minutes",t[i]=c+"Seconds",t[n]=c+"Milliseconds",t)[l],b=l===a?this.$D+(r-this.$W):r;if(l===d||l===u){var m=this.clone().set(g,1);m.$d[h](b),m.init(),this.$d=m.set(g,Math.min(this.$D,m.daysInMonth())).$d}else h&&this.$d[h](b);return this.init(),this},f.set=function(e,r){return this.clone().$set(e,r)},f.get=function(e){return this[D.p(e)]()},f.add=function(n,c){var g,h=this;n=Number(n);var b=D.p(c),m=function(e){var r=E(h);return D.w(r.date(r.date()+Math.round(e*n)),h)};if(b===d)return this.set(d,this.$M+n);if(b===u)return this.set(u,this.$y+n);if(b===a)return m(1);if(b===l)return m(7);var p=(g={},g[o]=r,g[s]=t,g[i]=e,g)[b]||1,f=this.$d.getTime()+n*p;return D.w(f,this)},f.subtract=function(e,r){return this.add(-1*e,r)},f.format=function(e){var r=this,t=this.$locale();if(!this.isValid())return t.invalidDate||h;var n=e||"YYYY-MM-DDTHH:mm:ssZ",i=D.z(this),o=this.$H,s=this.$m,a=this.$M,l=t.weekdays,d=t.months,c=t.meridiem,u=function(e,t,i,o){return e&&(e[t]||e(r,n))||i[t].slice(0,o)},g=function(e){return D.s(o%12||12,e,"0")},b=c||function(e,r,t){var n=e<12?"AM":"PM";return t?n.toLowerCase():n};return n.replace(m,(function(e,n){return n||function(e){switch(e){case"YY":return String(r.$y).slice(-2);case"YYYY":return D.s(r.$y,4,"0");case"M":return a+1;case"MM":return D.s(a+1,2,"0");case"MMM":return u(t.monthsShort,a,d,3);case"MMMM":return u(d,a);case"D":return r.$D;case"DD":return D.s(r.$D,2,"0");case"d":return String(r.$W);case"dd":return u(t.weekdaysMin,r.$W,l,2);case"ddd":return u(t.weekdaysShort,r.$W,l,3);case"dddd":return l[r.$W];case"H":return String(o);case"HH":return D.s(o,2,"0");case"h":return g(1);case"hh":return g(2);case"a":return b(o,s,!0);case"A":return b(o,s,!1);case"m":return String(s);case"mm":return D.s(s,2,"0");case"s":return String(r.$s);case"ss":return D.s(r.$s,2,"0");case"SSS":return D.s(r.$ms,3,"0");case"Z":return i}return null}(e)||i.replace(":","")}))},f.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},f.diff=function(n,g,h){var b,m=this,p=D.p(g),f=E(n),y=(f.utcOffset()-this.utcOffset())*r,v=this-f,x=function(){return D.m(m,f)};switch(p){case u:b=x()/12;break;case d:b=x();break;case c:b=x()/3;break;case l:b=(v-y)/6048e5;break;case a:b=(v-y)/864e5;break;case s:b=v/t;break;case o:b=v/r;break;case i:b=v/e;break;default:b=v}return h?b:D.a(b)},f.daysInMonth=function(){return this.endOf(d).$D},f.$locale=function(){return x[this.$L]},f.locale=function(e,r){if(!e)return this.$L;var t=this.clone(),n=$(e,r,!0);return n&&(t.$L=n),t},f.clone=function(){return D.w(this.$d,this)},f.toDate=function(){return new Date(this.valueOf())},f.toJSON=function(){return this.isValid()?this.toISOString():null},f.toISOString=function(){return this.$d.toISOString()},f.toString=function(){return this.$d.toUTCString()},p}(),B=C.prototype;return E.prototype=B,[["$ms",n],["$s",i],["$m",o],["$H",s],["$W",a],["$M",d],["$y",u],["$D",g]].forEach((function(e){B[e[1]]=function(r){return this.$g(r,e[0],e[1])}})),E.extend=function(e,r){return e.$i||(e(r,C,E),e.$i=!0),E},E.locale=$,E.isDayjs=F,E.unix=function(e){return E(1e3*e)},E.en=x[v],E.Ls=x,E.p={},E}();var rs=K(es.exports),ts={exports:{}};ts.exports=function(){var e={LTS:"h:mm:ss A",LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D, YYYY",LLL:"MMMM D, YYYY h:mm A",LLLL:"dddd, MMMM D, YYYY h:mm A"},r=/(\[[^[]*\])|([-_:/.,()\s]+)|(A|a|YYYY|YY?|MM?M?M?|Do|DD?|hh?|HH?|mm?|ss?|S{1,3}|z|ZZ?)/g,t=/\d\d/,n=/\d\d?/,i=/\d*[^-_:/,()\s\d]+/,o={},s=function(e){return(e=+e)+(e>68?1900:2e3)},a=function(e){return function(r){this[e]=+r}},l=[/[+-]\d\d:?(\d\d)?|Z/,function(e){(this.zone||(this.zone={})).offset=function(e){if(!e)return 0;if("Z"===e)return 0;var r=e.match(/([+-]|\d\d)/g),t=60*r[1]+(+r[2]||0);return 0===t?0:"+"===r[0]?-t:t}(e)}],d=function(e){var r=o[e];return r&&(r.indexOf?r:r.s.concat(r.f))},c=function(e,r){var t,n=o.meridiem;if(n){for(var i=1;i<=24;i+=1)if(e.indexOf(n(i,0,r))>-1){t=i>12;break}}else t=e===(r?"pm":"PM");return t},u={A:[i,function(e){this.afternoon=c(e,!1)}],a:[i,function(e){this.afternoon=c(e,!0)}],S:[/\d/,function(e){this.milliseconds=100*+e}],SS:[t,function(e){this.milliseconds=10*+e}],SSS:[/\d{3}/,function(e){this.milliseconds=+e}],s:[n,a("seconds")],ss:[n,a("seconds")],m:[n,a("minutes")],mm:[n,a("minutes")],H:[n,a("hours")],h:[n,a("hours")],HH:[n,a("hours")],hh:[n,a("hours")],D:[n,a("day")],DD:[t,a("day")],Do:[i,function(e){var r=o.ordinal,t=e.match(/\d+/);if(this.day=t[0],r)for(var n=1;n<=31;n+=1)r(n).replace(/\[|\]/g,"")===e&&(this.day=n)}],M:[n,a("month")],MM:[t,a("month")],MMM:[i,function(e){var r=d("months"),t=(d("monthsShort")||r.map((function(e){return e.slice(0,3)}))).indexOf(e)+1;if(t<1)throw new Error;this.month=t%12||t}],MMMM:[i,function(e){var r=d("months").indexOf(e)+1;if(r<1)throw new Error;this.month=r%12||r}],Y:[/[+-]?\d+/,a("year")],YY:[t,function(e){this.year=s(e)}],YYYY:[/\d{4}/,a("year")],Z:l,ZZ:l};function g(t){var n,i;n=t,i=o&&o.formats;for(var s=(t=n.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g,(function(r,t,n){var o=n&&n.toUpperCase();return t||i[n]||e[n]||i[o].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g,(function(e,r,t){return r||t.slice(1)}))}))).match(r),a=s.length,l=0;l<a;l+=1){var d=s[l],c=u[d],g=c&&c[0],h=c&&c[1];s[l]=h?{regex:g,parser:h}:d.replace(/^\[|\]$/g,"")}return function(e){for(var r={},t=0,n=0;t<a;t+=1){var i=s[t];if("string"==typeof i)n+=i.length;else{var o=i.regex,l=i.parser,d=e.slice(n),c=o.exec(d)[0];l.call(r,c),e=e.replace(c,"")}}return function(e){var r=e.afternoon;if(void 0!==r){var t=e.hours;r?t<12&&(e.hours+=12):12===t&&(e.hours=0),delete e.afternoon}}(r),r}}return function(e,r,t){t.p.customParseFormat=!0,e&&e.parseTwoDigitYear&&(s=e.parseTwoDigitYear);var n=r.prototype,i=n.parse;n.parse=function(e){var r=e.date,n=e.utc,s=e.args;this.$u=n;var a=s[1];if("string"==typeof a){var l=!0===s[2],d=!0===s[3],c=l||d,u=s[2];d&&(u=s[2]),o=this.$locale(),!l&&u&&(o=t.Ls[u]),this.$d=function(e,r,t){try{if(["x","X"].indexOf(r)>-1)return new Date(("X"===r?1e3:1)*e);var n=g(r)(e),i=n.year,o=n.month,s=n.day,a=n.hours,l=n.minutes,d=n.seconds,c=n.milliseconds,u=n.zone,h=new Date,b=s||(i||o?1:h.getDate()),m=i||h.getFullYear(),p=0;i&&!o||(p=o>0?o-1:h.getMonth());var f=a||0,y=l||0,v=d||0,x=c||0;return u?new Date(Date.UTC(m,p,b,f,y,v,x+60*u.offset*1e3)):t?new Date(Date.UTC(m,p,b,f,y,v,x)):new Date(m,p,b,f,y,v,x)}catch(e){return new Date("")}}(r,a,n),this.init(),u&&!0!==u&&(this.$L=this.locale(u).$L),c&&r!=this.format(a)&&(this.$d=new Date("")),o={}}else if(a instanceof Array)for(var h=a.length,b=1;b<=h;b+=1){s[1]=a[b-1];var m=t.apply(this,s);if(m.isValid()){this.$d=m.$d,this.$L=m.$L,this.init();break}b===h&&(this.$d=new Date(""))}else i.call(this,e)}}}();var ns=K(ts.exports),is={exports:{}};is.exports=function(e,r,t){r.prototype.isBetween=function(e,r,n,i){var o=t(e),s=t(r),a="("===(i=i||"()")[0],l=")"===i[1];return(a?this.isAfter(o,n):!this.isBefore(o,n))&&(l?this.isBefore(s,n):!this.isAfter(s,n))||(a?this.isBefore(o,n):!this.isAfter(o,n))&&(l?this.isAfter(s,n):!this.isBefore(s,n))}};var os=K(is.exports),ss={exports:{}};ss.exports=function(e,r){r.prototype.isSameOrAfter=function(e,r){return this.isSame(e,r)||this.isAfter(e,r)}};var as=K(ss.exports),ls={exports:{}};ls.exports=function(e,r){r.prototype.isSameOrBefore=function(e,r){return this.isSame(e,r)||this.isBefore(e,r)}};var ds,cs,us=K(ls.exports),gs={exports:{}};gs.exports=(ds={year:0,month:1,day:2,hour:3,minute:4,second:5},cs={},function(e,r,t){var n,i=function(e,r,t){void 0===t&&(t={});var n=new Date(e),i=function(e,r){void 0===r&&(r={});var t=r.timeZoneName||"short",n=e+"|"+t,i=cs[n];return i||(i=new Intl.DateTimeFormat("en-US",{hour12:!1,timeZone:e,year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit",timeZoneName:t}),cs[n]=i),i}(r,t);return i.formatToParts(n)},o=function(e,r){for(var n=i(e,r),o=[],s=0;s<n.length;s+=1){var a=n[s],l=a.type,d=a.value,c=ds[l];c>=0&&(o[c]=parseInt(d,10))}var u=o[3],g=24===u?0:u,h=o[0]+"-"+o[1]+"-"+o[2]+" "+g+":"+o[4]+":"+o[5]+":000",b=+e;return(t.utc(h).valueOf()-(b-=b%1e3))/6e4},s=r.prototype;s.tz=function(e,r){void 0===e&&(e=n);var i=this.utcOffset(),o=this.toDate(),s=o.toLocaleString("en-US",{timeZone:e}),a=Math.round((o-new Date(s))/1e3/60),l=t(s,{locale:this.$L}).$set("millisecond",this.$ms).utcOffset(15*-Math.round(o.getTimezoneOffset()/15)-a,!0);if(r){var d=l.utcOffset();l=l.add(i-d,"minute")}return l.$x.$timezone=e,l},s.offsetName=function(e){var r=this.$x.$timezone||t.tz.guess(),n=i(this.valueOf(),r,{timeZoneName:e}).find((function(e){return"timezonename"===e.type.toLowerCase()}));return n&&n.value};var a=s.startOf;s.startOf=function(e,r){if(!this.$x||!this.$x.$timezone)return a.call(this,e,r);var n=t(this.format("YYYY-MM-DD HH:mm:ss:SSS"),{locale:this.$L});return a.call(n,e,r).tz(this.$x.$timezone,!0)},t.tz=function(e,r,i){var s=i&&r,a=i||r||n,l=o(+t(),a);if("string"!=typeof e)return t(e).tz(a);var d=function(e,r,t){var n=e-60*r*1e3,i=o(n,t);if(r===i)return[n,r];var s=o(n-=60*(i-r)*1e3,t);return i===s?[n,i]:[e-60*Math.min(i,s)*1e3,Math.max(i,s)]}(t.utc(e,s).valueOf(),l,a),c=d[0],u=d[1],g=t(c).utcOffset(u);return g.$x.$timezone=a,g},t.tz.guess=function(){return Intl.DateTimeFormat().resolvedOptions().timeZone},t.tz.setDefault=function(e){n=e}});var hs,bs=K(gs.exports);rs.extend(os),rs.extend(us),rs.extend(as),rs.extend(ns),rs.extend(bs),function(e){e.generateDays=e=>{const r=e.startOf("month"),t=rs(r).startOf("week");return ms(t).map((e=>ps(e)))},e.generateDaysForCurrentWeek=e=>{const r=e.startOf("week");return ps(r)},e.generateMonths=e=>{const r=[];for(let t=0;t<12;t++){const n=e.month(t);r.push(rs(n))}return r},e.generateDecadeOfYears=e=>{const r=e.year(),t=10*Math.floor(r/10),n=e.year(t),i=[n.subtract(1,"year"),n];for(let e=1;e<11;e++)i.push(n.add(e,"year"));return i},e.getStartEndDecade=e=>{const r=10*Math.floor(+e.format("YYYY")/10);return{beginDecade:r,endDecade:+rs(`${r+9}-01-01`).format("YYYY")}},e.convertTo12HourFormat=e=>{const r=rs(e,"HH:mm");return r.isValid()?r.format("h:mm a"):""},e.isWithinRange=(e,r,t,n="day")=>!r&&!t||(r&&t?e.isBetween(r,t,n,"[]"):r?e.isSameOrAfter(r,n):e.isSameOrBefore(t,n)),e.isPreviousMonthWithinRange=(r,t)=>e.isWithinRange(r.subtract(1,"month"),t,void 0,"month"),e.isPreviousYearWithinRange=(r,t)=>e.isWithinRange(r.subtract(1,"year"),t,void 0,"year"),e.isPreviousDecadeWithinRange=(r,t)=>{const{beginDecade:n}=e.getStartEndDecade(r);return e.isWithinRange(r.year(n).subtract(1,"year"),t,void 0,"year")},e.isNextMonthWithinRange=(r,t)=>e.isWithinRange(r.add(1,"month"),void 0,t,"month"),e.isNextYearWithinRange=(r,t)=>e.isWithinRange(r.add(1,"year"),void 0,t,"year"),e.isNextDecadeWithinRange=(r,t)=>{const{endDecade:n}=e.getStartEndDecade(r);return e.isWithinRange(r.year(n).add(1,"year"),void 0,t,"year")},e.getWeekStartEnd=e=>({start:e.startOf("week").format("YYYY-MM-DD"),end:e.endOf("week").format("YYYY-MM-DD")}),e.getFixedRangeStartEnd=(e,r)=>({start:e.format("YYYY-MM-DD"),end:e.add(r-1,"day").format("YYYY-MM-DD")}),e.isDisabledDay=(r,t,n,i)=>{const o=e.isWithinRange(r,n?rs(n):void 0,i?rs(i):void 0),s=t&&t.includes(r.format("YYYY-MM-DD"));return!o||!!s}}(hs||(hs={}));const ms=e=>{const r=[e];for(let t=1;t<6;t++){const n=e.add(t,"week");r.push(n)}return r},ps=e=>{const r=[];for(let t=0;t<7;t++){const n=e.add(t,"day");r.push(n)}return r},fs=[1,3,5,7,8,10,12],ys=[4,6,9,11];var vs,xs,ws;!function(e){e.clampDay=(r,t,n)=>{const i=parseInt(r),o=parseInt(t),s=parseInt(n);return 0==i?"1":fs.includes(o)?Math.min(i,31).toString():ys.includes(o)?Math.min(i,30).toString():2===o?e.isLeapYear(s)?Math.min(i,29).toString():Math.min(i,28).toString():r},e.clampMonth=e=>{const r=parseInt(e);return 0==r?"1":r>12?"12":e},e.isLeapYear=e=>e%4==0&&e%100!=0||e%400==0,e.getTimeDiffInMinutes=(e,r,t="HH:mm")=>{const n=rs(e,t);return rs(r,t).diff(n,"minute")},e.toDayjs=e=>e?rs(e):rs(),e.addMinutesToTime=(e,r,t="HH:mm")=>rs(e,t).add(r,"minutes").format(t),e.isSame=(e,r,t="day")=>rs(e).isSame(rs(r),t)}(vs||(vs={})),function(e){e.isDateDisabled=(e,r)=>{const{disabledDates:t,minDate:n,maxDate:i}=r;return!!(e&&t&&t.length&&t.includes(e))||(!(!n||!rs(e).isBefore(n,"day"))||!(!i||!rs(e).isAfter(i,"day")))},e.sanitizeInput=e=>{if(e){if(rs(e).isValid())return e}return""}}(xs||(xs={})),function(e){e.generate=()=>Math.random().toString(36).substring(2,9)}(ws||(ws={}));const Fs=i.createContext({focusedIndex:-1,setFocusedIndex:()=>{}}),$s=({children:e})=>{const[t,n]=o(-1);return r(Fs.Provider,{value:{focusedIndex:t,setFocusedIndex:n},children:e})},Es=p.div`
    display: inline-block;
    position: relative;
    width: ${({$size:e})=>e?`${e}px`:"1em"};
    height: ${({$size:e})=>e?`${e}px`:"1em"};
    color: ${e=>e.$color||"currentColor"};
`,Ds=y`
	0% {
	  transform: rotate(0deg);
	}
	100% {
	  transform: rotate(360deg);
	}
`,Cs=p.div`
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
    animation: ${Ds} 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
`,Bs=p(Cs)`
    animation-delay: -0.45s;
`,Ss=p(Cs)`
    animation-delay: -0.3s;
`,ks=p(Cs)`
    animation-delay: -0.15s;
`,As=({color:t,className:n,size:i})=>e(Es,{className:n,$size:i,$color:t,"data-testid":"component-loading-spinner",children:[r(Cs,{id:"inner1"}),r(Bs,{id:"inner2"}),r(Ss,{id:"inner3"}),r(ks,{id:"inner4"})]}),Ms=f`
    outline-offset: -1px;
    outline: ${Fn["width-020"]} ${Fn.solid} ${vn["border-focus"]};
`,Os=f`
    outline-color: ${vn["border-focus"]};
`,zs=f`
    outline-color: ${vn["border-disabled"]};
`,_s=f`
    outline-color: ${vn["border-error-focus"]};
`,Ts=p.div`
    border: ${Fn["width-010"]} ${Fn.solid} ${vn.border};
    border-radius: ${En.sm};
    background: ${vn.bg};

    :focus-within {
        ${Ms}
    }
    ${e=>e.$focused&&Ms}

    ${e=>e.$readOnly?f`
                border-color: transparent;
                padding: 0;
                background: transparent !important;

                :focus-within {
                    ${Os}
                }
                ${e.$focused&&Os}
            `:e.$disabled?f`
                background: ${vn["bg-disabled"]};
                cursor: not-allowed;

                :focus-within {
                    ${zs}
                }
                ${e.$focused&&zs}
            `:e.$error?f`
                border-color: ${vn["border-error"]};

                :focus-within {
                    ${_s}
                }
                ${e.$focused&&_s}
            `:void 0}
`;p(Ts)`
    display: flex;
    align-items: center;
    position: relative;
    height: max-content;
    width: 100%;
    padding: 0 ${$n["spacing-16"]};
    flex-direction: ${e=>"right"===e.$position?"row-reverse":"row"};
`;const Ls=p.input`
    ${e=>"small"===e.$variant?xn["body-md-regular"]:xn["body-baseline-regular"]}
    color: ${vn.text};
    display: block;
    background: transparent;
    border: none;
    outline: none;
    box-shadow: none;
    padding: 0;
    margin: 0;

    :disabled {
        color: ${vn["text-subtler"]};

        :hover {
            cursor: not-allowed;
        }
    }

    ::placeholder,
    ::-webkit-input-placeholder {
        color: ${vn["text-subtler"]};
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
`,js=p.button`
    background: transparent;
    border: none;
    outline: none;

    :focus,
    :active {
        outline: none;
    }

    :focus-visible {
        outline: ${Fn["width-010"]} ${Fn.solid}
            ${vn["border-focus"]};
        border-radius: ${En.sm};
    }
`;p.div`
    overflow: hidden;
    border: ${Fn["width-010"]} ${Fn.solid} ${vn.border};
    border-radius: ${En.sm};
    background: ${vn.bg};

    min-width: 23rem;
    ${e=>e.$width&&`width: ${e.$width}px;`}
    max-height: 27rem;
    overflow-y: auto;

    ${e=>"small"===e.$variant?xn["body-md-regular"]:xn["body-baseline-regular"]}

    ${Cn.MaxWidth.sm} {
        min-width: unset;
        width: calc(100vw - ${Dn["sm-margin"]} * 2);
        max-height: 15rem;
    }

    ${Cn.MaxWidth.xs} {
        width: calc(100vw - ${Dn["xs-margin"]} * 2);
    }

    ${Cn.MaxWidth.xxs} {
        width: calc(100vw - ${Dn["xxs-margin"]} * 2);
    }

    ::-webkit-scrollbar {
        width: 14px;
    }

    ::-webkit-scrollbar-track {
        background: transparent;
    }

    ::-webkit-scrollbar-thumb {
        background: ${vn["bg-inverse-subtlest"]};
        border: 5px solid transparent;
        border-radius: 9999px;
        background-clip: padding-box;
    }
`,p.div`
    background: transparent;
    padding: ${$n["spacing-8"]};
`,p.ul`
    list-style-type: none;
`,p.li`
    display: flex;
    align-items: flex-start;
    gap: ${$n["spacing-8"]};
    padding: ${$n["spacing-12"]} ${$n["spacing-8"]};
    cursor: pointer;

    outline: none;

    ${e=>e.$disabled?f`
                cursor: not-allowed;
            `:e.$active&&e.$selected?f`
                background: ${vn["bg-hover"]};
            `:e.$active?f`
                background: ${vn["bg-hover-subtle"]};
            `:void 0}
`,p(E)`
    flex-shrink: 0;
    height: 1lh;
    width: 1rem;
    color: ${vn["icon-selected"]};
`,p.div`
    flex-shrink: 0;
    height: 1lh;
    width: 1rem;
`,p($)`
    flex-shrink: 0;
    height: 1lh;
    width: 1lh;
    color: ${vn["icon-selected"]};
`,p(w)`
    flex-shrink: 0;
    height: 1lh;
    width: 1lh;
    color: ${vn["icon-primary-subtlest"]};
`,p(F)`
    flex-shrink: 0;
    height: 1lh;
    width: 1lh;
    color: ${vn["icon-disabled-subtle"]};
`,p.div`
    width: 100%;
    display: flex;
    justify-content: flex-end;
`;const Rs=p(js)`
    cursor: pointer;
    overflow: hidden;
    color: ${vn["text-primary"]};
    font-size: inherit;
`;p(Rs)`
    ${xn["body-baseline-semibold"]}
`,p(Rs)`
    ${xn["body-md-semibold"]}
    padding: ${$n["spacing-8"]} ${$n["spacing-8"]};
`,p.div`
    width: 100%;
    display: flex;
    padding: ${$n["spacing-12"]} ${$n["spacing-16"]};
    align-items: center;
`,p(x)`
    margin-right: ${$n["spacing-4"]};
    color: ${vn["icon-error"]};
    height: 1em;
    width: 1em;
`,p(As)`
    margin-right: ${$n["spacing-8"]};
    color: ${vn.icon};
`,p.div`
    ${(e=>{const{textSize:r}=e||{};return f`
        // Text styling
        ${r&&xn[`${r}-regular`]}

        strong {
            font-weight: ${xn.Spec["weight-semibold"]};
            ${r&&xn[`${r}-semibold`]};
        }

        p {
            margin: 0;
        }

        // Link styling
        a {
            font-weight: ${xn.Spec["weight-semibold"]};
            ${r&&xn[`${r}-semibold`]}
            color: ${vn.hyperlink};
            text-decoration: none;

            svg {
                color: ${vn["icon-primary"]};
                height: 1lh;
                width: 1em;
                margin-left: 0.4rem;
                vertical-align: middle;
            }

            :hover,
            :active,
            :visited,
            :focus {
                color: ${vn["hyperlink-hover"]};

                svg {
                    color: ${vn["icon-hover"]};
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
    `})()}
    color: ${vn["text-subtle"]};
    padding: 0 ${$n["spacing-16"]} ${$n["spacing-12"]}
        ${$n["spacing-16"]};
`;const Ys=p.button`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: ${$n["spacing-24"]};
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

        ${({$highlight:e})=>e&&f`
                background-color: ${vn["bg-hover-neutral"]};
            `}
    }
`,Ps=i.forwardRef(((e,t)=>{var{children:n,focusHighlight:i=!0,focusOutline:o="none",type:s="button"}=e,a=W(e,["children","focusHighlight","focusOutline","type"]);return r(Ys,Object.assign({ref:t,$outline:o,$highlight:i,type:s},a,{children:n}))})),Is=p.div`
    background: ${vn["bg-strong"]};
    border-radius: ${En.sm};
    display: flex;
    align-items: center;

    ${e=>"small"===e.$variant?xn["body-md-regular"]:xn["body-baseline-regular"]}
`,Hs=p.label`
    flex: 1;
    display: flex;
    align-items: center;
    gap: ${$n["spacing-8"]};
    padding: ${e=>"small"===e.$variant?f`
                  ${$n["spacing-8"]} ${$n["spacing-16"]}
              `:f`10px ${$n["spacing-16"]}`};
`,Ns=p(Ls)`
    flex: 1;
`,Ws=p(C)`
    color: ${vn.icon};
    flex-shrink: 0;
    height: 1em;
    width: 1em;
`,Vs=p(Ps)`
    flex-shrink: 0;
    align-self: stretch;
    box-sizing: content-box;
    padding: ${$n["spacing-8"]};
    margin-left: -${$n["spacing-8"]};
    color: ${vn.icon};
    cursor: pointer;
    font-size: inherit;

    svg {
        flex-shrink: 0;
        height: 1em;
        width: 1em;
    }
`;b(((t,n)=>{var{value:i,variant:o,onClear:s}=t,a=W(t,["value","variant","onClear"]);return e(Is,{$variant:o,children:[e(Hs,{$variant:o,children:[r(Ws,{"aria-hidden":!0}),r(Ns,Object.assign({ref:n,value:i,$variant:o},a))]}),i&&r(Vs,{"aria-label":"Clear search",focusOutline:"browser",onClick:s,children:r(D,{"aria-hidden":!0})})]})}));const Ks=p(js)`
    display: flex;
    align-items: center;
    gap: ${$n["spacing-8"]};
    width: 100%;
    height: calc(3rem - 2px); // exclude top and bottom borders
    padding: ${$n["spacing-16"]};

    ${e=>"small"===e.$variant?xn["body-md-regular"]:xn["body-baseline-regular"]}

    :disabled {
        cursor: not-allowed;
    }
`,Us=p.div`
    display: flex;
    align-items: center;
    transform: rotate(${e=>e.$expanded?180:0}deg);
    transition: transform ${wn["duration-250"]} ${wn["ease-default"]};

    svg {
        color: ${vn.icon};
        height: 1em;
        width: 1em;
    }
`,Zs=b((({children:t,disabled:n,expanded:i,listboxId:o,popupRole:s,readOnly:a,variant:l},d)=>e(Ks,{ref:d,type:"button","aria-expanded":i,"aria-haspopup":s,"data-testid":"selector",disabled:n,"aria-controls":o,$variant:l,children:[t,!a&&r(Us,{$expanded:i,$variant:l,children:r(B,{"aria-hidden":!0})})]}))),Xs={collections:{default:{Button:{"button-radius":bn.sm,"button-default-colour-bg":Nt["bg-primary"],"button-default-colour-bg-hover":Nt["bg-primary-hover"],"button-default-colour-text":Nt["text-inverse"],"button-secondary-colour-border":Nt["border-primary"],"button-secondary-colour-text":Nt["text-primary"],"button-light-colour-text":Nt["text-primary"],"button-link-colour-text":Nt["text-primary"]}},pa:{Button:{"button-radius":bn.full,"button-default-colour-bg":Nt["bg-primary"],"button-default-colour-bg-hover":Nt["bg-primary-hover"],"button-default-colour-text":Nt["text-inverse"],"button-secondary-colour-border":Nt["border-primary"],"button-secondary-colour-text":Nt["text-primary"],"button-light-colour-text":Nt["text-primary"],"button-link-colour-text":Nt["text-primary"]}}},defaultValue:"default"},qs=(e,r)=>t=>{var n,i;const o=t.theme,s=yt(Xs,null==o?void 0:o.componentScheme);return Js((null===(i=null===(n=null==o?void 0:o.componentOverrides)||void 0===n?void 0:n[e])||void 0===i?void 0:i[r])||s[e][r],t)},Js=(e,r)=>{switch(typeof e){case"function":return e(r);case"number":return e+"px";case"string":return e}},Gs=qs("Button","button-radius"),Qs=qs("Button","button-default-colour-bg"),ea=qs("Button","button-default-colour-bg-hover"),ra=qs("Button","button-default-colour-text"),ta=qs("Button","button-secondary-colour-border"),na=qs("Button","button-secondary-colour-text"),ia=qs("Button","button-light-colour-text"),oa=qs("Button","button-link-colour-text");p.button`
    padding: ${$n["spacing-8"]} ${$n["spacing-16"]};
    min-width: 4rem;
    border: ${Fn["width-010"]} ${Fn.solid} transparent;
    transition: all ${wn["duration-250"]} ${wn["ease-default"]};
    border-radius: ${Gs};
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;

    // -----------------------------------------------------------------------------
    // BUTTON STYLE + TEXT COLOR
    // -----------------------------------------------------------------------------
    ${e=>{switch(e.$buttonStyle){case"secondary":return f`
                    background-color: ${vn.Primitive.white};
                    border-color: ${e.$buttonIsDanger?vn["border-error-strong"]:ta};

                    color: ${e.$buttonIsDanger?vn["text-error"]:na};

                    &:hover,
                    &:active {
                        background-color: ${vn["bg-hover-neutral"]};
                    }
                `;case"light":return f`
                    background-color: ${vn.bg};
                    border-color: ${vn.border};

                    color: ${e.$buttonIsDanger?vn["text-error"]:ia};

                    &:hover,
                    &:active {
                        background-color: ${vn["bg-hover-neutral"]};
                    }
                `;case"link":return f`
                    background-color: transparent;

                    color: ${e.$buttonIsDanger?vn["text-error"]:oa};
                    &:hover,
                    &:active {
                        background-color: ${vn["bg-hover-neutral"]};
                    }
                `;case"disabled":return f`
                    background-color: ${vn["bg-disabled"]};

                    cursor: not-allowed;

                    &:hover {
                        box-shadow: none;
                    }

                    color: ${vn["text-disabled"]};
                `;default:return f`
                    background-color: ${e.$buttonIsDanger?vn["bg-error-strong"]:Qs};};

                    ${Cn.MaxWidth.sm} {
                        width: 100%;
                    }

                    color: ${ra}};

                    &:hover,
                    &:active {
                        background-color: ${e.$buttonIsDanger?vn["bg-error-strong-hover"]:ea}
                        };
                    }
                `}}}

    // -----------------------------------------------------------------------------
	// BUTTON SIZE + TEXT SIZE
	// -----------------------------------------------------------------------------
	${e=>{switch(e.$buttonSizeStyle){case"small":return f`
                    height: 2.5rem;
                    ${xn["body-md-semibold"]}

                    ${Cn.MaxWidth.xxs} {
                        height: auto;
                    }
                `;case"large":return f`
                    height: 4rem;
                    ${xn["heading-md-semibold"]}

                    ${Cn.MaxWidth.xxs} {
                        height: auto;
                    }
                `;default:return f`
                    height: 3rem;
                    ${xn["heading-xs-semibold"]}

                    ${Cn.MaxWidth.xxs} {
                        height: auto;
                    }
                `}}}
`,p(As)`
    margin-right: 0.5rem;
`,p.li`
    display: ${e=>e.$visible?"flex":"none"};
`,p.div`
    flex: 1;
    display: flex;
    align-items: flex-start;
    gap: ${$n["spacing-8"]};
    padding: ${$n["spacing-12"]} ${$n["spacing-8"]};
    cursor: ${e=>e.$toggleable?"default":"pointer"};
    overflow: hidden; // required for label to truncate properly

    outline: none;

    ${e=>e.$active&&f`
            background: ${vn["bg-hover"]};
        `}
`,p.div`
    height: 1px;
    width: calc((1lh + ${$n["spacing-8"]}) * ${e=>e.$level});
`,p.div`
    width: 1lh;
    height: 1lh;
    color: ${vn["icon-primary"]};
    cursor: pointer;

    svg {
        width: 1lh;
        height: 1lh;
        transition: transform ${wn["duration-350"]}
            ${wn["ease-standard"]};

        ${e=>{if(e.$expanded)return f`
                    transform: rotate(90deg);
                `}}
    }
`,p.div`
    width: 1lh;
    height: 1lh;
    margin-right: ${$n["spacing-8"]};
`,p.div`
    flex-shrink: 0;
    height: 1lh;
    width: ${e=>e.$hasNestedSiblings?"1lh":$n["spacing-16"]};

    display: flex;
    justify-content: center;
`,p(S)`
    flex-shrink: 0;
    height: 1lh;
    width: 1lh;
    color: ${vn["icon-selected"]};
`;const sa=e=>"small"===e?2.5:3;p.div`
    position: relative;
    width: 100%;
    ${e=>{const r=sa(e.$variant);return f`
            min-height: ${r}rem;
            height: ${r}rem; // Need this to persist the height when expanding or collapsing list
        `}}
`;const aa=f`
    display: flex;
    position: relative;
    align-items: center;
    justify-content: space-between;
    padding: 0 ${$n["spacing-16"]};
    // exclude top and bottom borders
    height: calc(${e=>sa(e.$variant)}rem - 2px);
    width: 100%;
    border-radius: ${En.sm};
    border: none;
    background: transparent;

    :focus,
    :active {
        outline: none;
    }

    :focus-visible {
        outline: 2px solid ${vn["border-focus"]};
    }
`,la=p.button`
    ${aa}
    cursor: pointer;
`;p.div`
    ${aa}
`;const da=y`
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
`;p.div`
    position: relative;
    border: ${Fn["width-010"]} ${Fn.solid} ${vn.border};
    border-radius: ${En.sm};
    background: ${vn.bg};
    overflow: hidden;

    :focus-within {
        border-color: ${vn["border-focus"]};
        box-shadow: 0px 0px 4px 0px
            rgb(from ${vn["border-focus"]} r g b / 50%) inset; // TODO: confirm shadow
    }

    ${e=>e.expanded?f`
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                z-index: 2;
            `:f`
                animation: ${da} 0.5s ease-in-out;
            `}

    ${e=>e.disabled?f`
                background: ${vn["bg-disabled"]};

                ${la} {
                    cursor: not-allowed;
                }

                :focus-within {
                    border-color: ${vn.border};
                    box-shadow: none;
                }
            `:e.$readOnly?f`
                border: none;
                background: transparent !important;

                ${la} {
                    padding: 0;
                }

                :focus-within {
                    border: none;
                    box-shadow: none;
                }
            `:e.error?f`
                border-color: ${vn["border-error"]};

                :focus-within {
                    border-color: ${vn["border-error"]};
                    box-shadow: 0px 0px 4px 0px
                        rgb(from ${vn["border-error"]} r g b / 50%) inset; // TODO: confirm shadow
                }
            `:void 0}
`,p.div`
    transform: rotate(${e=>e.expanded?180:0}deg);
    transition: transform ${wn["duration-250"]} ${wn["ease-default"]};
    margin-left: ${$n["spacing-16"]};
`,p(B)`
    color: ${vn.icon};
`,p.div`
    height: 1px;
    background: ${vn.border};
    margin: 0 ${$n["spacing-8"]};
`;const ca=p.div`
    display: flex;
    flex: 1;
    word-break: break-all;
    ${e=>{if(e.$disabled)return f`
                color: ${vn["text-disabled"]};
            `}}
`,ua=p.div`
    ${e=>"small"===e.$variant?xn["body-md-regular"]:xn["body-baseline-regular"]}
    text-align: left;
    ${e=>{if("middle"!==e.truncateType)return f`
                    ${Tn(1)}
                `}}
    overflow: hidden;
`;var ga;p(ua)`
    color: ${vn["text-subtler"]};
`,function(e){e.Ready="overlay-context-ready",e.Change="overlay-context-change"}(ga||(ga={}));const ha=p.div`
    display: flex;
    flex-direction: column;
`,ba=e=>"right"===e?"bottom-end":"bottom-start",ma=({enabled:n,isOpen:i,onOpen:a,onClose:d,onDismiss:c,renderElement:u,renderDropdown:g,customZIndex:h,clickToToggle:b=!1,offset:m=0,alignment:p="left",fitAvailableHeight:f,rootNode:y})=>{var x;const w=v(),F=Dn["sm-max"]({theme:w}),$=l(null),E=l(null),{width:D=0}=function(e){void 0===e&&(e={});var r=e.skipOnMount,t=void 0!==r&&r,n=e.refreshMode,i=e.refreshRate,s=void 0===i?1e3:i,a=e.refreshOptions,d=e.handleWidth,c=void 0===d||d,u=e.handleHeight,g=void 0===u||u,h=e.targetRef,b=e.observerOptions,m=e.onResize,p=l(t),f=l(null),y=null!=h?h:f,v=l(),x=o({width:void 0,height:void 0}),w=x[0],F=x[1];return io((function(){if(!eo()){var e=to(m,F,c,g);v.current=Gi((function(r){(c||g)&&r.forEach((function(r){var t=r&&r.contentRect||{},n=t.width,i=t.height;!p.current&&!eo()&&e({width:n,height:i}),p.current=!1}))}),n,s,a);var r=new window.ResizeObserver(v.current);return y.current&&r.observe(y.current,b),function(){r.disconnect();var e=v.current;e&&e.cancel&&e.cancel()}}}),[n,s,a,c,g,m,b,y.current]),ui({ref:y},w)}({targetRef:$,handleHeight:!1}),C={name:"center",fn:({x:e,rects:r})=>{const t=0===e||e+r.floating.width===window.innerWidth,n=window.innerWidth<F;return{x:t&&n?(window.innerWidth-r.floating.width)/2:e}}},{refs:B,floatingStyles:S,context:N}=A({open:i,onOpenChange:(e,r,t)=>{"escape-key"===t?null==c||c():e&&!i?null==a||a():!e&&i&&(null==d||d(t))},whileElementsMounted:M,placement:ba(p),middleware:[O(m),z(),_({limiter:T()}),L({apply({availableHeight:e}){E.current&&Object.assign(E.current.style,{maxHeight:f?`${e}px`:void 0,overflowY:f?"hidden":void 0})}}),C]}),W=(()=>{const[e,r]=o(void 0),t=k();return s((()=>{if(!t)return void r(void 0);const e=e=>{r(e.zIndex)};return t.events.on(ga.Change,e),t.events.emit(ga.Ready),()=>t.events.off(ga.Change,e)}),[t]),e})(),{isMounted:V,styles:K}=j(N,{initial:{opacity:0},open:{opacity:1},duration:300}),U=R(N,{enabled:n,toggle:b}),Z=Y(N,{enabled:n}),{getReferenceProps:X,getFloatingProps:q}=P([U,Z]);return e(t,{children:[r("div",Object.assign({ref:e=>{$.current=e,B.setReference(e)}},X(),{children:u()})),V&&r(I,{root:y,children:r(H,{context:N,modal:!1,initialFocus:E,returnFocus:!1,children:r("div",Object.assign({ref:B.setFloating,style:Object.assign(Object.assign({},S),{zIndex:null!==(x=null!=h?h:W)&&void 0!==x?x:50})},q(),{children:r(ha,{ref:E,style:Object.assign({},K),inert:K.opacity<1?"":void 0,children:g({elementWidth:D})})}))})})]})},pa=p.div`
    overflow: hidden;
    border: ${Fn["width-010"]} ${Fn.solid} ${vn.border};
    border-radius: ${En.sm};
    background: ${vn.bg};
    padding: ${$n["spacing-16"]};
    min-width: 23rem;

    ${Cn.MaxWidth.sm} {
        min-width: unset;
        width: calc(100vw - ${Dn["sm-margin"]} * 2);
        max-height: 15rem;
    }

    ${Cn.MaxWidth.xs} {
        width: calc(100vw - ${Dn["xs-margin"]} * 2);
    }

    ${Cn.MaxWidth.xxs} {
        width: calc(100vw - ${Dn["xxs-margin"]} * 2);
    }
`,fa=p.div`
    display: flex;
    align-items: baseline;
`,ya=p.div`
    margin: 0 0.5rem;
    color: ${vn.text};
`,va=p.div`
    ${e=>"small"===e.$variant?xn["body-md-regular"]:xn["body-baseline-regular"]}
    text-align: left;
    ${e=>{if("middle"!==e.truncateType)return f`
                    ${Tn(1)}
                `}}
    overflow: hidden;
`,xa=p(va)`
    color: ${vn["text-subtler"]};
`,wa=t=>{var{alignment:n="left",className:i,disabled:a,dropdownZIndex:d,error:c,histogramSlider:u,id:g,onBlur:h,onChange:b,onChangeEnd:m,optionTruncationType:p="end",placeholder:f="Select",rangeLabelPrefix:y,rangeLabelSuffix:v,readOnly:x,renderRangeLabel:w,value:F,dropdownRootNode:$}=t,E=W(t,["alignment","className","disabled","dropdownZIndex","error","histogramSlider","id","onBlur","onChange","onChangeEnd","optionTruncationType","placeholder","rangeLabelPrefix","rangeLabelSuffix","readOnly","renderRangeLabel","value","dropdownRootNode"]);const{interval:D,bins:C=[],renderEmptyView:B,ariaLabels:S}=u,k=C.map((e=>e.minValue)),A=Math.min(...k),[M,O]=o(U()),[z,_]=o(!1),[T,L]=o(!1),[j]=o((()=>ws.generate())),R=l(null),Y=l(null),P=l(null),I=E["data-testid"]||"select-histogram";s((()=>{F!==M&&O(U())}),[F]);const H=e=>{O(e),null==b||b(e)},N=e=>{O(e),null==m||m(e)},V=()=>{T||z||L(!0)},K=e=>{T&&!z&&R.current&&!R.current.contains(e.relatedTarget)&&(L(!1),null==h||h())};function U(){return null!=F?F:[A,A+D]}const Z=r=>w?w(r):e(Yn.BodyBL,{children:[y,r,v]});return r($s,{children:r(ma,{enabled:!x&&!a,isOpen:z,renderElement:()=>r(Ts,{className:i,"data-testid":I,id:g,ref:R,tabIndex:-1,onFocus:V,onBlur:K,$focused:T,$disabled:a,$readOnly:x,$error:c,children:r(Zs,{ref:Y,disabled:a,expanded:z,listboxId:j,popupRole:"dialog",readOnly:x,variant:"default",children:r(ca,{ref:P,$disabled:a,children:k&&0!==k.length?e(fa,{children:[Z(M[0]),r(ya,{children:"-"}),Z(M[1])]}):r(xa,{truncateType:p,$variant:"default",children:f})})})}),renderDropdown:({elementWidth:e})=>r(pa,{style:{width:e},children:r(di,{interval:D,value:M,bins:C,onChange:H,onChangeEnd:N,showRangeLabels:!1,renderEmptyView:B,ariaLabels:S})}),onOpen:()=>{_(!0)},onClose:()=>{_(!1)},onDismiss:()=>{var e;null===(e=Y.current)||void 0===e||e.focus(),_(!1)},clickToToggle:!0,offset:8,alignment:n,fitAvailableHeight:!0,customZIndex:d,rootNode:$})})};export{wa as SelectHistogram};
//# sourceMappingURL=index.js.map
