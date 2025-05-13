import{jsxs as e,jsx as r,Fragment as t}from"react/jsx-runtime";import*as n from"react";import i,{useState as o,useEffect as s,useMemo as a,useRef as l,isValidElement as d,createRef as c,cloneElement as u,PureComponent as h,useLayoutEffect as g,forwardRef as b}from"react";import{ExternalIcon as m}from"@lifesg/react-icons/external";import p,{css as f,keyframes as y,useTheme as v}from"styled-components";import{ExclamationCircleFillIcon as x}from"@lifesg/react-icons/exclamation-circle-fill";import{SquareIcon as w}from"@lifesg/react-icons/square";import{SquareTickFillIcon as F}from"@lifesg/react-icons/square-tick-fill";import{TickIcon as $}from"@lifesg/react-icons/tick";import{CrossIcon as E}from"@lifesg/react-icons/cross";import{MagnifierIcon as D}from"@lifesg/react-icons/magnifier";import{ChevronDownIcon as C}from"@lifesg/react-icons/chevron-down";import"@lifesg/react-icons/caret-right";import{MinusSquareFillIcon as B}from"@lifesg/react-icons/minus-square-fill";import{useFloatingTree as A,useFloating as M,autoUpdate as k,offset as z,flip as O,shift as S,limitShift as _,size as T,useTransitionStyles as L,useClick as j,useDismiss as Y,useInteractions as P,FloatingPortal as R,FloatingFocusManager as I}from"@floating-ui/react";import{findDOMNode as H}from"react-dom";function W(e,r){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(n=Object.getOwnPropertySymbols(e);i<n.length;i++)r.indexOf(n[i])<0&&Object.prototype.propertyIsEnumerable.call(e,n[i])&&(t[n[i]]=e[n[i]])}return t}"function"==typeof SuppressedError&&SuppressedError;var V="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};function N(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var K=Array.isArray,U="object"==typeof V&&V&&V.Object===Object&&V,Z=U,X="object"==typeof self&&self&&self.Object===Object&&self,q=Z||X||Function("return this")(),J=q.Symbol,G=J,Q=Object.prototype,ee=Q.hasOwnProperty,re=Q.toString,te=G?G.toStringTag:void 0;var ne=function(e){var r=ee.call(e,te),t=e[te];try{e[te]=void 0;var n=!0}catch(e){}var i=re.call(e);return n&&(r?e[te]=t:delete e[te]),i},ie=Object.prototype.toString;var oe=ne,se=function(e){return ie.call(e)},ae=J?J.toStringTag:void 0;var le=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":ae&&ae in Object(e)?oe(e):se(e)};var de=function(e){return null!=e&&"object"==typeof e},ce=le,ue=de;var he=function(e){return"symbol"==typeof e||ue(e)&&"[object Symbol]"==ce(e)},ge=K,be=he,me=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,pe=/^\w*$/;var fe=function(e,r){if(ge(e))return!1;var t=typeof e;return!("number"!=t&&"symbol"!=t&&"boolean"!=t&&null!=e&&!be(e))||(pe.test(e)||!me.test(e)||null!=r&&e in Object(r))};var ye=function(e){var r=typeof e;return null!=e&&("object"==r||"function"==r)},ve=le,xe=ye;var we,Fe=function(e){if(!xe(e))return!1;var r=ve(e);return"[object Function]"==r||"[object GeneratorFunction]"==r||"[object AsyncFunction]"==r||"[object Proxy]"==r},$e=q["__core-js_shared__"],Ee=(we=/[^.]+$/.exec($e&&$e.keys&&$e.keys.IE_PROTO||""))?"Symbol(src)_1."+we:"";var De=function(e){return!!Ee&&Ee in e},Ce=Function.prototype.toString;var Be=function(e){if(null!=e){try{return Ce.call(e)}catch(e){}try{return e+""}catch(e){}}return""},Ae=Fe,Me=De,ke=ye,ze=Be,Oe=/^\[object .+?Constructor\]$/,Se=Function.prototype,_e=Object.prototype,Te=Se.toString,Le=_e.hasOwnProperty,je=RegExp("^"+Te.call(Le).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");var Ye=function(e,r){return null==e?void 0:e[r]},Pe=function(e){return!(!ke(e)||Me(e))&&(Ae(e)?je:Oe).test(ze(e))},Re=Ye;var Ie=function(e,r){var t=Re(e,r);return Pe(t)?t:void 0},He=Ie(Object,"create"),We=He;var Ve=function(){this.__data__=We?We(null):{},this.size=0};var Ne=function(e){var r=this.has(e)&&delete this.__data__[e];return this.size-=r?1:0,r},Ke=He,Ue=Object.prototype.hasOwnProperty;var Ze=function(e){var r=this.__data__;if(Ke){var t=r[e];return"__lodash_hash_undefined__"===t?void 0:t}return Ue.call(r,e)?r[e]:void 0},Xe=He,qe=Object.prototype.hasOwnProperty;var Je=function(e){var r=this.__data__;return Xe?void 0!==r[e]:qe.call(r,e)},Ge=He;var Qe=function(e,r){var t=this.__data__;return this.size+=this.has(e)?0:1,t[e]=Ge&&void 0===r?"__lodash_hash_undefined__":r,this},er=Ve,rr=Ne,tr=Ze,nr=Je,ir=Qe;function or(e){var r=-1,t=null==e?0:e.length;for(this.clear();++r<t;){var n=e[r];this.set(n[0],n[1])}}or.prototype.clear=er,or.prototype.delete=rr,or.prototype.get=tr,or.prototype.has=nr,or.prototype.set=ir;var sr=or;var ar=function(){this.__data__=[],this.size=0};var lr=function(e,r){return e===r||e!=e&&r!=r};var dr=function(e,r){for(var t=e.length;t--;)if(lr(e[t][0],r))return t;return-1},cr=dr,ur=Array.prototype.splice;var hr=function(e){var r=this.__data__,t=cr(r,e);return!(t<0)&&(t==r.length-1?r.pop():ur.call(r,t,1),--this.size,!0)},gr=dr;var br=function(e){var r=this.__data__,t=gr(r,e);return t<0?void 0:r[t][1]},mr=dr;var pr=function(e){return mr(this.__data__,e)>-1},fr=dr;var yr=function(e,r){var t=this.__data__,n=fr(t,e);return n<0?(++this.size,t.push([e,r])):t[n][1]=r,this},vr=ar,xr=hr,wr=br,Fr=pr,$r=yr;function Er(e){var r=-1,t=null==e?0:e.length;for(this.clear();++r<t;){var n=e[r];this.set(n[0],n[1])}}Er.prototype.clear=vr,Er.prototype.delete=xr,Er.prototype.get=wr,Er.prototype.has=Fr,Er.prototype.set=$r;var Dr=Er,Cr=Ie(q,"Map"),Br=sr,Ar=Dr,Mr=Cr;var kr=function(e){var r=typeof e;return"string"==r||"number"==r||"symbol"==r||"boolean"==r?"__proto__"!==e:null===e};var zr=function(e,r){var t=e.__data__;return kr(r)?t["string"==typeof r?"string":"hash"]:t.map},Or=zr;var Sr=function(e){var r=Or(this,e).delete(e);return this.size-=r?1:0,r},_r=zr;var Tr=function(e){return _r(this,e).get(e)},Lr=zr;var jr=function(e){return Lr(this,e).has(e)},Yr=zr;var Pr=function(e,r){var t=Yr(this,e),n=t.size;return t.set(e,r),this.size+=t.size==n?0:1,this},Rr=function(){this.size=0,this.__data__={hash:new Br,map:new(Mr||Ar),string:new Br}},Ir=Sr,Hr=Tr,Wr=jr,Vr=Pr;function Nr(e){var r=-1,t=null==e?0:e.length;for(this.clear();++r<t;){var n=e[r];this.set(n[0],n[1])}}Nr.prototype.clear=Rr,Nr.prototype.delete=Ir,Nr.prototype.get=Hr,Nr.prototype.has=Wr,Nr.prototype.set=Vr;var Kr=Nr,Ur=Kr;function Zr(e,r){if("function"!=typeof e||null!=r&&"function"!=typeof r)throw new TypeError("Expected a function");var t=function(){var n=arguments,i=r?r.apply(this,n):n[0],o=t.cache;if(o.has(i))return o.get(i);var s=e.apply(this,n);return t.cache=o.set(i,s)||o,s};return t.cache=new(Zr.Cache||Ur),t}Zr.Cache=Ur;var Xr=Zr;var qr=function(e){var r=Xr(e,(function(e){return 500===t.size&&t.clear(),e})),t=r.cache;return r},Jr=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,Gr=/\\(\\)?/g,Qr=qr((function(e){var r=[];return 46===e.charCodeAt(0)&&r.push(""),e.replace(Jr,(function(e,t,n,i){r.push(n?i.replace(Gr,"$1"):t||e)})),r}));var et=function(e,r){for(var t=-1,n=null==e?0:e.length,i=Array(n);++t<n;)i[t]=r(e[t],t,e);return i},rt=K,tt=he,nt=J?J.prototype:void 0,it=nt?nt.toString:void 0;var ot=function e(r){if("string"==typeof r)return r;if(rt(r))return et(r,e)+"";if(tt(r))return it?it.call(r):"";var t=r+"";return"0"==t&&1/r==-1/0?"-0":t},st=ot;var at=K,lt=fe,dt=Qr,ct=function(e){return null==e?"":st(e)};var ut=he;var ht=function(e,r){return at(e)?e:lt(e,r)?[e]:dt(ct(e))},gt=function(e){if("string"==typeof e||ut(e))return e;var r=e+"";return"0"==r&&1/e==-1/0?"-0":r};var bt=function(e,r){for(var t=0,n=(r=ht(r,e)).length;null!=e&&t<n;)e=e[gt(r[t++])];return t&&t==n?e:void 0};var mt=N((function(e,r,t){var n=null==e?void 0:bt(e,r);return void 0===n?t:n}));const pt=(e,r,t)=>mt(t,r)||mt(e,r),ft=(e,r)=>{const t=r||e.defaultValue;return mt(e.collections,t)},yt={collections:{default:{"width-005":.5,"width-010":1,"width-020":2,"width-040":4,solid:"solid"}},defaultValue:"default"},vt=e=>r=>{var t;const n=r.theme,i=ft(yt,null==n?void 0:n.borderScheme);return(null===(t=null==n?void 0:n.overrides)||void 0===t?void 0:t.border)?`${pt(i,e,n.overrides.border)}px`:`${i[e]}px`},xt={"width-005":vt("width-005"),"width-010":vt("width-010"),"width-020":vt("width-020"),"width-040":vt("width-040"),solid:(wt="solid",e=>{var r;const t=e.theme,n=ft(yt,null==t?void 0:t.borderScheme),i=(null===(r=null==t?void 0:t.overrides)||void 0===r?void 0:r.border)?pt(n,wt,t.overrides.border):n[wt];return"function"==typeof i?i(e):i})};var wt;const Ft={collections:{lifesg:{"brand-10":"#2C0C0B","brand-20":"#4C1513","brand-30":"#6C1D1B","brand-40":"#922825","brand-50":"#BF3431","brand-60":"#F15D5A","brand-70":"#F69491","brand-80":"#FABAB7","brand-90":"#FCD7D2","brand-95":"#FFEBE7","brand-100":"#FFF6F4","primary-10":"#001731","primary-20":"#002752","primary-30":"#003874","primary-40":"#004D9F","primary-50":"#1768BE","primary-60":"#3C91EC","primary-70":"#6CB4FF","primary-80":"#A5CDFF","primary-90":"#CFE1FE","primary-95":"#E8F0FE","primary-100":"#F7F9FF","secondary-10":"#131529","secondary-20":"#222547","secondary-30":"#2F3565","secondary-40":"#42498B","secondary-50":"#5B62A7","secondary-60":"#858CBD","secondary-70":"#A8ADCF","secondary-80":"#C6C9E0","secondary-90":"#DDDFEC","secondary-95":"#EDEEF5","secondary-100":"#F8F8FB","neutral-10":"#161616","neutral-20":"#282828","neutral-30":"#393939","neutral-40":"#4E4E4E","neutral-50":"#686868","neutral-60":"#8E8E8E","neutral-70":"#AFAFB0","neutral-80":"#C7CACA","neutral-90":"#DDE1E2","neutral-95":"#EDEFEF","neutral-100":"#F9F9F9","success-10":"#081A0F","success-20":"#0E2D1B","success-30":"#154126","success-40":"#1C5A34","success-50":"#257645","success-60":"#44A068","success-70":"#64C189","success-80":"#80DCA5","success-90":"#B4ECCB","success-95":"#D5F6E2","success-100":"#EFFCF4","warning-10":"#221302","warning-20":"#3B2204","warning-30":"#543106","warning-40":"#744408","warning-50":"#98590C","warning-60":"#D07A13","warning-70":"#E4A244","warning-80":"#F5C26C","warning-90":"#FADBA6","warning-95":"#FCECD4","warning-100":"#FDF7F0","error-10":"#330505","error-20":"#550808","error-30":"#750C0C","error-40":"#9E130F","error-50":"#CB2213","error-60":"#DE6C6C","error-70":"#E89B9B","error-80":"#EFBEBE","error-90":"#F5D9D9","error-95":"#F9ECEC","error-100":"#FCF7F7","info-10":"#021824","info-20":"#032B3F","info-30":"#053D59","info-40":"#065478","info-50":"#176E9B","info-60":"#5296BE","info-70":"#82B5DA","info-80":"#ACCFE7","info-90":"#CCE3F1","info-95":"#E3F1F8","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000","primary-inverse":"#FEAB10"},bookingsg:{"brand-10":"#2C0C0B","brand-20":"#4C1513","brand-30":"#6C1D1B","brand-40":"#922825","brand-50":"#BF3431","brand-60":"#F15D5A","brand-70":"#F69491","brand-80":"#FABAB7","brand-90":"#FCD7D2","brand-95":"#FFEBE7","brand-100":"#FFF6F4","primary-10":"#1A122C","primary-20":"#2F1F4D","primary-30":"#422D6E","primary-40":"#5B3D97","primary-50":"#7654BC","primary-60":"#9A82CD","primary-70":"#B7A7D8","primary-80":"#CFC5E5","primary-90":"#E3DDF0","primary-95":"#F0EDF7","primary-100":"#F9F8FC","secondary-10":"#0E1723","secondary-20":"#18293D","secondary-30":"#233A57","secondary-40":"#305078","secondary-50":"#4B6A8F","secondary-60":"#7B91A9","secondary-70":"#A1B1C3","secondary-80":"#C1CBD7","secondary-90":"#DBE1E8","secondary-95":"#EBEFF2","secondary-100":"#F7F8FA","neutral-10":"#161616","neutral-20":"#282828","neutral-30":"#393939","neutral-40":"#4E4E4E","neutral-50":"#686868","neutral-60":"#8E8E8E","neutral-70":"#AFAFB0","neutral-80":"#C7CACA","neutral-90":"#DDE1E2","neutral-95":"#EDEFEF","neutral-100":"#F9F9F9","success-10":"#081A0F","success-20":"#0E2D1B","success-30":"#154126","success-40":"#1C5A34","success-50":"#257645","success-60":"#44A068","success-70":"#64C189","success-80":"#80DCA5","success-90":"#B4ECCB","success-95":"#D5F6E2","success-100":"#EFFCF4","warning-10":"#221302","warning-20":"#3B2204","warning-30":"#543106","warning-40":"#744408","warning-50":"#98590C","warning-60":"#D07A13","warning-70":"#E4A244","warning-80":"#F5C26C","warning-90":"#FADBA6","warning-95":"#FCECD4","warning-100":"#FDF7F0","error-10":"#330505","error-20":"#550808","error-30":"#750C0C","error-40":"#9E130F","error-50":"#CB2213","error-60":"#DE6C6C","error-70":"#E89B9B","error-80":"#EFBEBE","error-90":"#F5D9D9","error-95":"#F9ECEC","error-100":"#FCF7F7","info-10":"#021824","info-20":"#032B3F","info-30":"#053D59","info-40":"#065478","info-50":"#176E9B","info-60":"#5296BE","info-70":"#82B5DA","info-80":"#ACCFE7","info-90":"#CCE3F1","info-95":"#E3F1F8","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000","primary-inverse":"#FEAB10"},rbs:{"brand-10":"#0E123A","brand-20":"#191E65","brand-30":"#232B90","brand-40":"#303BC5","brand-50":"#494CFF","brand-60":"#AD6EFF","brand-70":"#AEA4FF","brand-80":"#C5C4FF","brand-90":"#DDDCFF","brand-95":"#EDECFF","brand-100":"#F8F8FF","primary-10":"#10152B","primary-20":"#1C254B","primary-30":"#28356C","primary-40":"#38489A","primary-50":"#4D5AD7","primary-60":"#7487F2","primary-70":"#9AAAFC","primary-80":"#BDC7FD","primary-90":"#DADFFB","primary-95":"#ECEEFE","primary-100":"#F7F8FF","secondary-10":"#19151D","secondary-20":"#2B2533","secondary-30":"#3E3649","secondary-40":"#564A64","secondary-50":"#6F637D","secondary-60":"#948B9F","secondary-70":"#B3ACBB","secondary-80":"#CCC8D2","secondary-90":"#E1DEE4","secondary-95":"#EFEEF1","secondary-100":"#F9F8F9","neutral-10":"#161616","neutral-20":"#282828","neutral-30":"#393939","neutral-40":"#4E4E4E","neutral-50":"#686868","neutral-60":"#8E8E8E","neutral-70":"#AFAFB0","neutral-80":"#C7CACA","neutral-90":"#DDE1E2","neutral-95":"#EDEFEF","neutral-100":"#F9F9F9","success-10":"#081A0F","success-20":"#0E2D1B","success-30":"#154126","success-40":"#1C5A34","success-50":"#257645","success-60":"#44A068","success-70":"#64C189","success-80":"#80DCA5","success-90":"#B4ECCB","success-95":"#D5F6E2","success-100":"#EFFCF4","warning-10":"#221302","warning-20":"#3B2204","warning-30":"#543106","warning-40":"#744408","warning-50":"#98590C","warning-60":"#D07A13","warning-70":"#E4A244","warning-80":"#F5C26C","warning-90":"#FADBA6","warning-95":"#FCECD4","warning-100":"#FDF7F0","error-10":"#330505","error-20":"#550808","error-30":"#750C0C","error-40":"#9E130F","error-50":"#CB2213","error-60":"#DE6C6C","error-70":"#E89B9B","error-80":"#EFBEBE","error-90":"#F5D9D9","error-95":"#F9ECEC","error-100":"#FCF7F7","info-10":"#021824","info-20":"#032B3F","info-30":"#053D59","info-40":"#065478","info-50":"#176E9B","info-60":"#5296BE","info-70":"#82B5DA","info-80":"#ACCFE7","info-90":"#CCE3F1","info-95":"#E3F1F8","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000","primary-inverse":"#FEAB10"},mylegacy:{"brand-10":"#2C0C0B","brand-20":"#4C1513","brand-30":"#6C1D1B","brand-40":"#922825","brand-50":"#BF3431","brand-60":"#F15D5A","brand-70":"#F69491","brand-80":"#FABAB7","brand-90":"#FCD7D2","brand-95":"#FFEBE7","brand-100":"#FFF6F4","primary-10":"#0011924","primary-20":"#032B40","primary-30":"#043D5A","primary-40":"#05547B","primary-50":"#096EA1","primary-60":"#2098D3","primary-70":"#5CB9E8","primary-80":"#8BD3F6","primary-90":"#BEE6FA","primary-95":"#E2F2FA","primary-100":"#F4FAFC","secondary-10":"#131529","secondary-20":"#222547","secondary-30":"#2F3565","secondary-40":"#42498B","secondary-50":"#5B62A7","secondary-60":"#858CBD","secondary-70":"#A8ADCF","secondary-80":"#C6C9E0","secondary-90":"#DDDFEC","secondary-95":"#EDEEF5","secondary-100":"#F8F8FB","neutral-10":"#161616","neutral-20":"#282828","neutral-30":"#393939","neutral-40":"#4E4E4E","neutral-50":"#686868","neutral-60":"#8E8E8E","neutral-70":"#AFAFB0","neutral-80":"#C7CACA","neutral-90":"#DDE1E2","neutral-95":"#EDEFEF","neutral-100":"#F9F9F9","success-10":"#081A0F","success-20":"#0E2D1B","success-30":"#154126","success-40":"#1C5A34","success-50":"#257645","success-60":"#44A068","success-70":"#64C189","success-80":"#80DCA5","success-90":"#B4ECCB","success-95":"#D5F6E2","success-100":"#EFFCF4","warning-10":"#221302","warning-20":"#3B2204","warning-30":"#543106","warning-40":"#744408","warning-50":"#98590C","warning-60":"#D07A13","warning-70":"#E4A244","warning-80":"#F5C26C","warning-90":"#FADBA6","warning-95":"#FCECD4","warning-100":"#FDF7F0","error-10":"#330505","error-20":"#550808","error-30":"#750C0C","error-40":"#9E130F","error-50":"#CB2213","error-60":"#DE6C6C","error-70":"#E89B9B","error-80":"#EFBEBE","error-90":"#F5D9D9","error-95":"#F9ECEC","error-100":"#FCF7F7","info-10":"#021824","info-20":"#032B3F","info-30":"#053D59","info-40":"#065478","info-50":"#176E9B","info-60":"#5296BE","info-70":"#82B5DA","info-80":"#ACCFE7","info-90":"#CCE3F1","info-95":"#E3F1F8","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000","primary-inverse":"#FEAB10"},ccube:{"brand-10":"#1F1221","brand-20":"#371F3B","brand-30":"#4E2C53","brand-40":"#6B3E73","brand-50":"#8D5197","brand-60":"#FF3399","brand-70":"#FF88C4","brand-80":"#FFB3D9","brand-90":"#FFD4E9","brand-95":"#FFE8F3","brand-100":"#FFD6EB","primary-10":"#1F1221","primary-20":"#371F3B","primary-30":"#4E2C53","primary-40":"#6B3E73","primary-50":"#8D5197","primary-60":"#B07DB7","primary-70":"#C7A3CC","primary-80":"#D9C2DD","primary-90":"#E9DBEB","primary-95":"#F3ECF4","primary-100":"#FAF7FA","secondary-10":"#2D091B","secondary-20":"#4D0F2E","secondary-30":"#6B1540","secondary-40":"#931D58","secondary-50":"#C02673","secondary-60":"#FF409F","secondary-70":"#FF88C4","secondary-80":"#FFB3D9","secondary-90":"#FFD4E9","secondary-95":"#FFE8F3","secondary-100":"#FFF8FC","neutral-10":"#161616","neutral-20":"#282828","neutral-30":"#393939","neutral-40":"#4E4E4E","neutral-50":"#686868","neutral-60":"#8E8E8E","neutral-70":"#AFAFB0","neutral-80":"#C7CACA","neutral-90":"#DDE1E2","neutral-95":"#EDEFEF","neutral-100":"#F9F9F9","success-10":"#081A0F","success-20":"#0E2D1B","success-30":"#154126","success-40":"#1C5A34","success-50":"#257645","success-60":"#44A068","success-70":"#64C189","success-80":"#80DCA5","success-90":"#B4ECCB","success-95":"#D5F6E2","success-100":"#EFFCF4","warning-10":"#221302","warning-20":"#3B2204","warning-30":"#543106","warning-40":"#744408","warning-50":"#98590C","warning-60":"#D07A13","warning-70":"#E4A244","warning-80":"#F5C26C","warning-90":"#FADBA6","warning-95":"#FCECD4","warning-100":"#FDF7F0","error-10":"#330505","error-20":"#550808","error-30":"#750C0C","error-40":"#9E130F","error-50":"#CB2213","error-60":"#DE6C6C","error-70":"#E89B9B","error-80":"#EFBEBE","error-90":"#F5D9D9","error-95":"#F9ECEC","error-100":"#FCF7F7","info-10":"#021824","info-20":"#032B3F","info-30":"#053D59","info-40":"#065478","info-50":"#176E9B","info-60":"#5296BE","info-70":"#82B5DA","info-80":"#ACCFE7","info-90":"#CCE3F1","info-95":"#E3F1F8","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000","primary-inverse":"#FEAB10"},oneservice:{"brand-10":"#001A19","brand-20":"#002D2B","brand-30":"#00413D","brand-40":"#005954","brand-50":"#00756F","brand-60":"#03A098","brand-70":"#55BFBA","brand-80":"#92D6D2","brand-90":"#BFE7E5","brand-95":"#DDF2F1","brand-100":"#F4FBFA","primary-10":"#09191D","primary-20":"#102B34","primary-30":"#173D49","primary-40":"#205666","primary-50":"#2A7086","primary-60":"#2A7086","primary-70":"#8CB6C2","primary-80":"#B2CED6","primary-90":"#D1E2E7","primary-95":"#E8F0F3","primary-100":"#F9F8FC","secondary-10":"#001731","secondary-20":"#002752","secondary-30":"#003874","secondary-40":"#004D9F","secondary-50":"#5B62A7","secondary-60":"#858CBD","secondary-70":"#A8ADCF","secondary-80":"#C6C9E0","secondary-90":"#DDDFEC","secondary-95":"#EDEEF5","secondary-100":"#F8F8FB","neutral-10":"#161616","neutral-20":"#282828","neutral-30":"#393939","neutral-40":"#4E4E4E","neutral-50":"#686868","neutral-60":"#8E8E8E","neutral-70":"#AFAFB0","neutral-80":"#C7CACA","neutral-90":"#DDE1E2","neutral-95":"#EDEFEF","neutral-100":"#F9F9F9","success-10":"#081A0F","success-20":"#0E2D1B","success-30":"#154126","success-40":"#1C5A34","success-50":"#257645","success-60":"#44A068","success-70":"#64C189","success-80":"#80DCA5","success-90":"#B4ECCB","success-95":"#D5F6E2","success-100":"#EFFCF4","warning-10":"#221302","warning-20":"#3B2204","warning-30":"#543106","warning-40":"#744408","warning-50":"#98590C","warning-60":"#D07A13","warning-70":"#E4A244","warning-80":"#F5C26C","warning-90":"#FADBA6","warning-95":"#FCECD4","warning-100":"#FDF7F0","error-10":"#330505","error-20":"#550808","error-30":"#750C0C","error-40":"#9E130F","error-50":"#CB2213","error-60":"#DE6C6C","error-70":"#E89B9B","error-80":"#EFBEBE","error-90":"#F5D9D9","error-95":"#F9ECEC","error-100":"#FCF7F7","info-10":"#021824","info-20":"#032B3F","info-30":"#053D59","info-40":"#065478","info-50":"#176E9B","info-60":"#5296BE","info-70":"#82B5DA","info-80":"#ACCFE7","info-90":"#CCE3F1","info-95":"#E3F1F8","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000","primary-inverse":"#FEAB10"},pa:{"brand-10":"#881317","brand-20":"#B5191E","brand-30":"#B5040A","brand-40":"#D0333F","brand-50":"#DC666F","brand-60":"#E28087","brand-70":"#E7999F","brand-80":"#EDB3B7","brand-90":"#F3CCCF","brand-95":"#F9E6E7","brand-100":"#FCF2F3","primary-10":"#000000","primary-20":"#191919","primary-30":"#333333","primary-40":"#4D4D4D","primary-50":"#666666","primary-60":"#808080","primary-70":"#999999","primary-80":"#B3B3B3","primary-90":"#E6E6E6","primary-95":"#F7F7F7","primary-100":"#FFFFFF","secondary-10":"#19151D","secondary-20":"#2B2533","secondary-30":"#3E3649","secondary-40":"#564A64","secondary-50":"#6F637D","secondary-60":"#948B9F","secondary-70":"#B3ACBB","secondary-80":"#CCC8D2","secondary-90":"#E1DEE4","secondary-95":"#EFEEF1","secondary-100":"#F9F8F9","neutral-10":"#000000","neutral-20":"#191919","neutral-30":"#333333","neutral-40":"#4D4D4D","neutral-50":"#666666","neutral-60":"#808080","neutral-70":"#999999","neutral-80":"#B3B3B3","neutral-90":"#E6E6E6","neutral-95":"#F7F7F7","neutral-100":"#FFFFFF","success-10":"#081A0F","success-20":"#0E2D1B","success-30":"#154126","success-40":"#1C5A34","success-50":"#257645","success-60":"#44A068","success-70":"#64C189","success-80":"#80DCA5","success-90":"#B4ECCB","success-95":"#D5F6E2","success-100":"#EFFCF4","warning-10":"#221302","warning-20":"#3B2204","warning-30":"#543106","warning-40":"#744408","warning-50":"#98590C","warning-60":"#D07A13","warning-70":"#E4A244","warning-80":"#F5C26C","warning-90":"#FADBA6","warning-95":"#FCECD4","warning-100":"#FDF7F0","error-10":"#330505","error-20":"#550808","error-30":"#750C0C","error-40":"#9E130F","error-50":"#CB2213","error-60":"#DE6C6C","error-70":"#E89B9B","error-80":"#EFBEBE","error-90":"#F5D9D9","error-95":"#F9ECEC","error-100":"#FCF7F7","info-10":"#021824","info-20":"#032B3F","info-30":"#053D59","info-40":"#065478","info-50":"#176E9B","info-60":"#5296BE","info-70":"#82B5DA","info-80":"#ACCFE7","info-90":"#CCE3F1","info-95":"#E3F1F8","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000","primary-inverse":"#FEAB10"}},defaultValue:"lifesg"},$t=e=>r=>{var t;const n=r.theme,i=ft(Ft,null==n?void 0:n.colourScheme);return(null===(t=null==n?void 0:n.overrides)||void 0===t?void 0:t.primitiveColour)?pt(i,e,n.overrides.primitiveColour):i[e]},Et={"brand-10":$t("brand-10"),"brand-20":$t("brand-20"),"brand-30":$t("brand-30"),"brand-40":$t("brand-40"),"brand-50":$t("brand-50"),"brand-60":$t("brand-60"),"brand-70":$t("brand-70"),"brand-80":$t("brand-80"),"brand-90":$t("brand-90"),"brand-95":$t("brand-95"),"brand-100":$t("brand-100"),"primary-10":$t("primary-10"),"primary-20":$t("primary-20"),"primary-30":$t("primary-30"),"primary-40":$t("primary-40"),"primary-50":$t("primary-50"),"primary-60":$t("primary-60"),"primary-70":$t("primary-70"),"primary-80":$t("primary-80"),"primary-90":$t("primary-90"),"primary-95":$t("primary-95"),"primary-100":$t("primary-100"),"secondary-10":$t("secondary-10"),"secondary-20":$t("secondary-20"),"secondary-30":$t("secondary-30"),"secondary-40":$t("secondary-40"),"secondary-50":$t("secondary-50"),"secondary-60":$t("secondary-60"),"secondary-70":$t("secondary-70"),"secondary-80":$t("secondary-80"),"secondary-90":$t("secondary-90"),"secondary-95":$t("secondary-95"),"secondary-100":$t("secondary-100"),"neutral-10":$t("neutral-10"),"neutral-20":$t("neutral-20"),"neutral-30":$t("neutral-30"),"neutral-40":$t("neutral-40"),"neutral-50":$t("neutral-50"),"neutral-60":$t("neutral-60"),"neutral-70":$t("neutral-70"),"neutral-80":$t("neutral-80"),"neutral-90":$t("neutral-90"),"neutral-95":$t("neutral-95"),"neutral-100":$t("neutral-100"),"success-10":$t("success-10"),"success-20":$t("success-20"),"success-30":$t("success-30"),"success-40":$t("success-40"),"success-50":$t("success-50"),"success-60":$t("success-60"),"success-70":$t("success-70"),"success-80":$t("success-80"),"success-90":$t("success-90"),"success-95":$t("success-95"),"success-100":$t("success-100"),"warning-10":$t("warning-10"),"warning-20":$t("warning-20"),"warning-30":$t("warning-30"),"warning-40":$t("warning-40"),"warning-50":$t("warning-50"),"warning-60":$t("warning-60"),"warning-70":$t("warning-70"),"warning-80":$t("warning-80"),"warning-90":$t("warning-90"),"warning-95":$t("warning-95"),"warning-100":$t("warning-100"),"error-10":$t("error-10"),"error-20":$t("error-20"),"error-30":$t("error-30"),"error-40":$t("error-40"),"error-50":$t("error-50"),"error-60":$t("error-60"),"error-70":$t("error-70"),"error-80":$t("error-80"),"error-90":$t("error-90"),"error-95":$t("error-95"),"error-100":$t("error-100"),"info-10":$t("info-10"),"info-20":$t("info-20"),"info-30":$t("info-30"),"info-40":$t("info-40"),"info-50":$t("info-50"),"info-60":$t("info-60"),"info-70":$t("info-70"),"info-80":$t("info-80"),"info-90":$t("info-90"),"info-95":$t("info-95"),"info-100":$t("info-100"),white:$t("white"),black:$t("black"),"primary-inverse":$t("primary-inverse")},Dt={text:$t("neutral-20"),"text-subtle":$t("neutral-30"),"text-subtler":$t("neutral-50"),"text-subtlest":$t("neutral-60"),"text-primary":$t("primary-50"),"text-hover":$t("primary-40"),"text-selected":$t("primary-50"),"text-selected-hover":$t("primary-40"),"text-disabled":$t("neutral-50"),"text-disabled-subtle":$t("neutral-60"),"text-disabled-subtlest":$t("neutral-80"),"text-selected-disabled":$t("neutral-20"),"text-success":$t("success-40"),"text-warning":$t("warning-40"),"text-error":$t("error-40"),"text-info":$t("info-40"),"text-inverse":$t("white"),icon:$t("neutral-50"),"icon-subtle":$t("neutral-60"),"icon-strongest":$t("neutral-20"),"icon-primary":$t("primary-50"),"icon-primary-subtle":$t("primary-60"),"icon-primary-subtlest":$t("primary-70"),"icon-hover":$t("primary-40"),"icon-selected":$t("primary-50"),"icon-selected-hover":$t("primary-40"),"icon-disabled":$t("neutral-50"),"icon-disabled-subtle":$t("neutral-60"),"icon-selected-disabled":$t("neutral-60"),"icon-success":$t("success-50"),"icon-warning":$t("warning-60"),"icon-error":$t("error-50"),"icon-error-strong":$t("error-40"),"icon-info":$t("info-50"),"icon-inverse":$t("white"),"icon-primary-inverse":$t("primary-inverse"),border:$t("neutral-90"),"border-strong":$t("neutral-70"),"border-stronger":$t("neutral-50"),"border-primary":$t("primary-50"),"border-primary-subtle":$t("primary-60"),"border-hover":$t("primary-90"),"border-hover-strong":$t("primary-60"),"border-selected":$t("primary-50"),"border-selected-subtle":$t("primary-70"),"border-selected-subtlest":$t("primary-90"),"border-selected-hover":$t("primary-40"),"border-focus":$t("primary-60"),"border-focus-strong":$t("primary-50"),"border-disabled":$t("neutral-90"),"border-selected-disabled":$t("neutral-70"),"border-success":$t("success-60"),"border-warning":$t("warning-60"),"border-error":$t("error-60"),"border-error-focus":$t("error-60"),"border-error-focus-strong":$t("error-40"),"border-error-strong":$t("error-40"),"border-info":$t("info-60"),bg:$t("white"),"bg-strong":$t("neutral-100"),"bg-stronger":$t("neutral-95"),"bg-strongest":$t("neutral-90"),"bg-hover":$t("primary-95"),"bg-hover-strong":$t("primary-90"),"bg-hover-subtle":$t("primary-100"),"bg-hover-neutral":$t("neutral-100"),"bg-hover-neutral-strong":$t("neutral-90"),"bg-selected":$t("primary-95"),"bg-selected-hover":$t("primary-90"),"bg-selected-strong":$t("primary-90"),"bg-selected-stronger":$t("primary-70"),"bg-selected-strongest":$t("primary-50"),"bg-selected-strongest-hover":$t("primary-40"),"bg-disabled":$t("neutral-95"),"bg-selected-disabled":$t("neutral-95"),"bg-selected-stronger-disabled":$t("neutral-70"),"bg-success":$t("success-100"),"bg-success-hover":$t("success-95"),"bg-success-strong":$t("success-50"),"bg-success-strong-hover":$t("success-40"),"bg-warning":$t("warning-100"),"bg-warning-hover":$t("warning-95"),"bg-warning-strong":$t("warning-50"),"bg-warning-strong-hover":$t("warning-40"),"bg-info":$t("info-100"),"bg-info-hover":$t("info-95"),"bg-info-strong":$t("info-50"),"bg-info-strong-hover":$t("info-40"),"bg-error":$t("error-100"),"bg-error-hover":$t("error-95"),"bg-error-strong":$t("error-50"),"bg-error-strong-hover":$t("error-40"),"bg-inverse":$t("neutral-20"),"bg-inverse-subtle":$t("neutral-30"),"bg-inverse-subtler":$t("neutral-50"),"bg-inverse-subtlest":$t("neutral-60"),"bg-inverse-hover":$t("neutral-40"),"bg-primary":$t("primary-50"),"bg-primary-subtle":$t("primary-60"),"bg-primary-subtler":$t("primary-95"),"bg-primary-subtlest":$t("primary-100"),"bg-available":"#6DD0A1","bg-primary-hover":$t("primary-40"),"bg-primary-subtlest-hover":$t("primary-90"),"bg-primary-subtlest-selected":$t("primary-90"),"overlay-strong":"rgba(40, 40, 40, 0.85)","overlay-subtle":"rgba(40, 40, 40, 0.20)",hyperlink:$t("primary-50"),"hyperlink-hover":$t("primary-40"),"hyperlink-visited":$t("primary-40"),"hyperlink-inverse":$t("primary-inverse"),"focus-ring":$t("black"),"focus-ring-inverse":$t("white")},Ct={collections:{lifesg:Dt,bookingsg:Dt,rbs:Dt,mylegacy:Dt,ccube:Dt,oneservice:Dt,pa:{text:$t("neutral-30"),"text-subtle":$t("neutral-40"),"text-subtler":$t("neutral-50"),"text-subtlest":$t("neutral-70"),"text-primary":$t("neutral-10"),"text-hover":$t("neutral-70"),"text-selected":$t("neutral-20"),"text-selected-hover":$t("neutral-10"),"text-disabled":$t("neutral-50"),"text-disabled-subtle":$t("neutral-60"),"text-disabled-subtlest":$t("neutral-80"),"text-selected-disabled":$t("neutral-40"),"text-success":$t("success-40"),"text-warning":$t("warning-40"),"text-error":$t("brand-30"),"text-info":$t("neutral-40"),"text-inverse":$t("neutral-100"),icon:$t("neutral-40"),"icon-subtle":$t("neutral-50"),"icon-strongest":$t("neutral-10"),"icon-primary":$t("neutral-10"),"icon-primary-subtle":$t("neutral-30"),"icon-primary-subtlest":$t("neutral-60"),"icon-hover":$t("neutral-70"),"icon-selected":$t("brand-20"),"icon-selected-hover":$t("brand-10"),"icon-disabled":$t("neutral-50"),"icon-disabled-subtle":$t("neutral-60"),"icon-selected-disabled":$t("neutral-40"),"icon-success":$t("success-40"),"icon-warning":$t("warning-60"),"icon-error":$t("brand-30"),"icon-error-strong":$t("brand-10"),"icon-info":$t("neutral-40"),"icon-inverse":$t("neutral-100"),"icon-primary-inverse":"#F9B371",border:$t("neutral-90"),"border-strong":$t("neutral-30"),"border-stronger":$t("neutral-20"),"border-primary":$t("neutral-40"),"border-primary-subtle":$t("neutral-60"),"border-hover":$t("neutral-80"),"border-hover-strong":$t("neutral-10"),"border-selected":$t("brand-20"),"border-selected-subtle":$t("neutral-40"),"border-selected-subtlest":$t("neutral-70"),"border-selected-hover":$t("neutral-10"),"border-focus":$t("neutral-20"),"border-focus-strong":$t("neutral-10"),"border-disabled":$t("neutral-90"),"border-selected-disabled":$t("neutral-80"),"border-success":$t("success-40"),"border-warning":$t("warning-60"),"border-error":$t("brand-30"),"border-error-focus":$t("brand-20"),"border-error-focus-strong":$t("brand-10"),"border-error-strong":$t("brand-20"),"border-info":$t("neutral-40"),bg:$t("neutral-100"),"bg-strong":$t("neutral-95"),"bg-stronger":$t("neutral-90"),"bg-strongest":$t("neutral-80"),"bg-hover":$t("brand-90"),"bg-hover-strong":$t("brand-80"),"bg-hover-subtle":$t("neutral-90"),"bg-hover-neutral":$t("neutral-90"),"bg-hover-neutral-strong":$t("neutral-90"),"bg-selected":$t("brand-100"),"bg-selected-hover":$t("brand-30"),"bg-selected-strong":$t("brand-50"),"bg-selected-stronger":$t("brand-40"),"bg-selected-strongest":$t("brand-20"),"bg-selected-strongest-hover":$t("brand-10"),"bg-disabled":$t("neutral-90"),"bg-selected-disabled":$t("neutral-90"),"bg-selected-stronger-disabled":$t("neutral-80"),"bg-success":$t("success-100"),"bg-success-hover":$t("success-95"),"bg-success-strong":$t("success-50"),"bg-success-strong-hover":$t("success-40"),"bg-warning":$t("warning-100"),"bg-warning-hover":$t("warning-95"),"bg-warning-strong":$t("warning-50"),"bg-warning-strong-hover":$t("warning-40"),"bg-info":$t("neutral-95"),"bg-info-hover":$t("info-95"),"bg-info-strong":$t("info-50"),"bg-info-strong-hover":$t("info-40"),"bg-error":$t("brand-100"),"bg-error-hover":$t("error-95"),"bg-error-strong":$t("error-50"),"bg-error-strong-hover":$t("error-40"),"bg-inverse":$t("neutral-40"),"bg-inverse-subtle":$t("neutral-60"),"bg-inverse-subtler":$t("neutral-70"),"bg-inverse-subtlest":$t("neutral-80"),"bg-inverse-hover":$t("neutral-30"),"bg-primary":$t("brand-20"),"bg-primary-subtle":$t("brand-60"),"bg-primary-subtler":$t("brand-80"),"bg-primary-subtlest":$t("brand-100"),"bg-available":$t("success-60"),"bg-primary-hover":$t("brand-10"),"bg-primary-subtlest-hover":$t("brand-80"),"bg-primary-subtlest-selected":$t("brand-40"),"overlay-strong":"rgba(25, 25, 25, 0.95)","overlay-subtle":"rgba(25, 25, 25, 0.20)",hyperlink:$t("neutral-10"),"hyperlink-hover":$t("neutral-40"),"hyperlink-visited":$t("neutral-50"),"hyperlink-inverse":"#F8AE68","focus-ring":$t("black"),"focus-ring-inverse":$t("white")}},defaultValue:"lifesg"},Bt=e=>r=>{var t;const n=r.theme,i=ft(Ct,null==n?void 0:n.colourScheme),o=(null===(t=null==n?void 0:n.overrides)||void 0===t?void 0:t.semanticColour)?pt(i,e,n.overrides.semanticColour):i[e];return"function"==typeof o?o(r):o},At={text:Bt("text"),"text-subtle":Bt("text-subtle"),"text-subtler":Bt("text-subtler"),"text-subtlest":Bt("text-subtlest"),"text-primary":Bt("text-primary"),"text-hover":Bt("text-hover"),"text-selected":Bt("text-selected"),"text-selected-hover":Bt("text-selected-hover"),"text-disabled":Bt("text-disabled"),"text-disabled-subtle":Bt("text-disabled-subtle"),"text-disabled-subtlest":Bt("text-disabled-subtlest"),"text-selected-disabled":Bt("text-selected-disabled"),"text-success":Bt("text-success"),"text-warning":Bt("text-warning"),"text-error":Bt("text-error"),"text-info":Bt("text-info"),"text-inverse":Bt("text-inverse"),icon:Bt("icon"),"icon-subtle":Bt("icon-subtle"),"icon-strongest":Bt("icon-strongest"),"icon-primary":Bt("icon-primary"),"icon-primary-subtle":Bt("icon-primary-subtle"),"icon-primary-subtlest":Bt("icon-primary-subtlest"),"icon-hover":Bt("icon-hover"),"icon-selected":Bt("icon-selected"),"icon-selected-hover":Bt("icon-selected-hover"),"icon-disabled":Bt("icon-disabled"),"icon-disabled-subtle":Bt("icon-disabled-subtle"),"icon-selected-disabled":Bt("icon-selected-disabled"),"icon-success":Bt("icon-success"),"icon-warning":Bt("icon-warning"),"icon-error":Bt("icon-error"),"icon-error-strong":Bt("icon-error-strong"),"icon-info":Bt("icon-info"),"icon-inverse":Bt("icon-inverse"),"icon-primary-inverse":Bt("icon-primary-inverse"),border:Bt("border"),"border-strong":Bt("border-strong"),"border-stronger":Bt("border-stronger"),"border-primary":Bt("border-primary"),"border-primary-subtle":Bt("border-primary-subtle"),"border-hover":Bt("border-hover"),"border-hover-strong":Bt("border-hover-strong"),"border-selected":Bt("border-selected"),"border-selected-subtle":Bt("border-selected-subtle"),"border-selected-subtlest":Bt("border-selected-subtlest"),"border-selected-hover":Bt("border-selected-hover"),"border-focus":Bt("border-focus"),"border-focus-strong":Bt("border-focus-strong"),"border-disabled":Bt("border-disabled"),"border-selected-disabled":Bt("border-selected-disabled"),"border-success":Bt("border-success"),"border-warning":Bt("border-warning"),"border-error":Bt("border-error"),"border-error-focus":Bt("border-error-focus"),"border-error-focus-strong":Bt("border-error-focus-strong"),"border-error-strong":Bt("border-error-strong"),"border-info":Bt("border-info"),bg:Bt("bg"),"bg-strong":Bt("bg-strong"),"bg-stronger":Bt("bg-stronger"),"bg-strongest":Bt("bg-strongest"),"bg-hover":Bt("bg-hover"),"bg-hover-strong":Bt("bg-hover-strong"),"bg-hover-subtle":Bt("bg-hover-subtle"),"bg-hover-neutral":Bt("bg-hover-neutral"),"bg-hover-neutral-strong":Bt("bg-hover-neutral-strong"),"bg-selected":Bt("bg-selected"),"bg-selected-hover":Bt("bg-selected-hover"),"bg-selected-strong":Bt("bg-selected-strong"),"bg-selected-stronger":Bt("bg-selected-stronger"),"bg-selected-strongest":Bt("bg-selected-strongest"),"bg-selected-strongest-hover":Bt("bg-selected-strongest-hover"),"bg-disabled":Bt("bg-disabled"),"bg-selected-disabled":Bt("bg-selected-disabled"),"bg-selected-stronger-disabled":Bt("bg-selected-stronger-disabled"),"bg-success":Bt("bg-success"),"bg-success-hover":Bt("bg-success-hover"),"bg-success-strong":Bt("bg-success-strong"),"bg-success-strong-hover":Bt("bg-success-strong-hover"),"bg-warning":Bt("bg-warning"),"bg-warning-hover":Bt("bg-warning-hover"),"bg-warning-strong":Bt("bg-warning-strong"),"bg-warning-strong-hover":Bt("bg-warning-strong-hover"),"bg-info":Bt("bg-info"),"bg-info-hover":Bt("bg-info-hover"),"bg-info-strong":Bt("bg-info-strong"),"bg-info-strong-hover":Bt("bg-info-strong-hover"),"bg-error":Bt("bg-error"),"bg-error-hover":Bt("bg-error-hover"),"bg-error-strong":Bt("bg-error-strong"),"bg-error-strong-hover":Bt("bg-error-strong-hover"),"bg-inverse":Bt("bg-inverse"),"bg-inverse-subtle":Bt("bg-inverse-subtle"),"bg-inverse-subtler":Bt("bg-inverse-subtler"),"bg-inverse-subtlest":Bt("bg-inverse-subtlest"),"bg-inverse-hover":Bt("bg-inverse-hover"),"bg-primary":Bt("bg-primary"),"bg-primary-subtle":Bt("bg-primary-subtle"),"bg-primary-subtler":Bt("bg-primary-subtler"),"bg-primary-subtlest":Bt("bg-primary-subtlest"),"bg-available":Bt("bg-available"),"bg-primary-hover":Bt("bg-primary-hover"),"bg-primary-subtlest-hover":Bt("bg-primary-subtlest-hover"),"bg-primary-subtlest-selected":Bt("bg-primary-subtlest-selected"),"overlay-strong":Bt("overlay-strong"),"overlay-subtle":Bt("overlay-subtle"),hyperlink:Bt("hyperlink"),"hyperlink-hover":Bt("hyperlink-hover"),"hyperlink-visited":Bt("hyperlink-visited"),"hyperlink-inverse":Bt("hyperlink-inverse"),"focus-ring":Bt("focus-ring"),"focus-ring-inverse":Bt("focus-ring-inverse")},Mt={collections:{default:{solid:e=>r=>{var t,n,i;const{thickness:o,radius:s,colour:a}=e||{},l=null!==(t="function"==typeof o?o(r):o)&&void 0!==t?t:xt["width-010"](r),d=null!==(n="function"==typeof s?s(r):s)&&void 0!==n?n:0,c=null!==(i="function"==typeof a?a(r):a)&&void 0!==i?i:At.border(r),u=xt.solid;return f`
            border: ${l} ${u} ${c};
            border-radius: ${d};
        `},"dashed-default":e=>r=>{var t,n,i;const{thickness:o,radius:s,colour:a}=e||{},l=null!==(t="function"==typeof o?o(r):o)&&void 0!==t?t:xt["width-010"](r),d=null!==(n="function"==typeof s?s(r):s)&&void 0!==n?n:0,c=null!==(i="function"==typeof a?a(r):a)&&void 0!==i?i:At.border(r),u=encodeURIComponent(`<svg width='100%' height='100%' xmlns='http://www.w3.org/2000/svg'><rect width='100%' height='100%' fill='none' rx='${d}' ry='${d}' stroke='${c}' stroke-width='${l}' stroke-dasharray='4, 8' stroke-dashoffset='0' stroke-linecap='square'/></svg>`);return f`
            background-image: url("data:image/svg+xml,${u}");
            border-radius: ${d};
        `}}},defaultValue:"default"},kt=e=>1===e.length&&"theme"in e[0],zt=e=>(...r)=>t=>{const n=kt(r)?[]:r,i=kt(r)?r[0]:t,o=i.theme;return(0,ft(Mt,null==o?void 0:o.borderScheme)[e])(...n)(i)},Ot={solid:zt("solid"),"dashed-default":zt("dashed-default")},St={collections:{default:{"xxs-min":0,"xxs-max":320,"xs-min":321,"xs-max":375,"sm-min":376,"sm-max":420,"md-min":421,"md-max":767,"lg-min":768,"lg-max":1023,"xl-min":1024,"xl-max":1440,"xxl-min":1441,"xxs-column":8,"xs-column":8,"sm-column":8,"md-column":8,"lg-column":12,"xl-column":12,"xxl-column":12,"xxs-gutter":16,"xs-gutter":16,"sm-gutter":16,"md-gutter":16,"lg-gutter":32,"xl-gutter":32,"xxl-gutter":32,"xxs-margin":24,"xs-margin":24,"sm-margin":24,"md-margin":24,"lg-margin":48,"xl-margin":48,"xxl-margin":48}},defaultValue:"default"},_t=e=>r=>{var t;const n=r.theme,i=ft(St,null==n?void 0:n.breakpointScheme);let o;return o=(null===(t=null==n?void 0:n.overrides)||void 0===t?void 0:t.breakpoint)?pt(i,e,n.overrides.breakpoint):i[e],o},Tt={"xxs-min":_t("xxs-min"),"xxs-max":_t("xxs-max"),"xs-min":_t("xs-min"),"xs-max":_t("xs-max"),"sm-min":_t("sm-min"),"sm-max":_t("sm-max"),"md-min":_t("md-min"),"md-max":_t("md-max"),"lg-min":_t("lg-min"),"lg-max":_t("lg-max"),"xl-min":_t("xl-min"),"xl-max":_t("xl-max"),"xxl-min":_t("xxl-min"),"xxs-column":_t("xxs-column"),"xs-column":_t("xs-column"),"sm-column":_t("sm-column"),"md-column":_t("md-column"),"lg-column":_t("lg-column"),"xl-column":_t("xl-column"),"xxl-column":_t("xxl-column"),"xxs-gutter":_t("xxs-gutter"),"xs-gutter":_t("xs-gutter"),"sm-gutter":_t("sm-gutter"),"md-gutter":_t("md-gutter"),"lg-gutter":_t("lg-gutter"),"xl-gutter":_t("xl-gutter"),"xxl-gutter":_t("xxl-gutter"),"xxs-margin":_t("xxs-margin"),"xs-margin":_t("xs-margin"),"sm-margin":_t("sm-margin"),"md-margin":_t("md-margin"),"lg-margin":_t("lg-margin"),"xl-margin":_t("xl-margin"),"xxl-margin":_t("xxl-margin")},Lt=e=>("max-width"===e?["xxs","xs","sm","md","lg","xl"]:["xxs","xs","sm","md","lg","xl","xxl"]).reduce(((r,t)=>(r[t]=((e,r)=>{const t=Tt["max-width"===e?`${r}-max`:`${r}-min`];return r=>{const n=t(r);return`@media screen and (${e}: ${n}px)`}})(e,t),r)),{}),jt={MaxWidth:Lt("max-width"),MinWidth:Lt("min-width")},Yt={collections:{default:{"heading-size-xxl":"3rem","heading-size-xl":"2.5rem","heading-size-lg":"2rem","heading-size-md":"1.625rem","heading-size-sm":"1.375rem","heading-size-xs":"1.125rem","heading-lh-xxl":"3.5rem","heading-lh-xl":"3rem","heading-lh-lg":"2.5rem","heading-lh-md":"2.25rem","heading-lh-sm":"1.75rem","heading-lh-xs":"1.625rem","heading-ls-xxl":"-0.056rem","heading-ls-xl":"-0.032rem","heading-ls-lg":"-0.032rem","heading-ls-md":"0rem","heading-ls-sm":"0rem","heading-ls-xs":"0rem","weight-light":"300","weight-regular":"400","weight-semibold":"600","weight-bold":"700","font-family":"Open Sans","body-size-baseline":"1.125rem","body-size-md":"1rem","body-size-sm":"0.875rem","body-size-xs":"0.75rem","body-lh-baseline":"1.625rem","body-lh-md":"1.5rem","body-lh-sm":"1.625rem","body-lh-xs":"1.25rem","body-ls-baseline":"0rem","body-ls-md":"0.014rem","body-ls-sm":"0.012rem","body-ls-xs":"0.012rem","form-label-size":"1rem","form-description-size":"0.875rem","form-label-lh":"1.5rem","form-description-lh":"1.6rem","form-label-ls":"0.014rem","form-description-ls":"0.012rem"},bookingsg:{"heading-size-xxl":"3rem","heading-size-xl":"2.5rem","heading-size-lg":"2rem","heading-size-md":"1.625rem","heading-size-sm":"1.375rem","heading-size-xs":"1.125rem","heading-lh-xxl":"3.5rem","heading-lh-xl":"3rem","heading-lh-lg":"2.5rem","heading-lh-md":"2.25rem","heading-lh-sm":"1.75rem","heading-lh-xs":"1.75rem","heading-ls-xxl":"-0.056rem","heading-ls-xl":"-0.032rem","heading-ls-lg":"-0.032rem","heading-ls-md":"0rem","heading-ls-sm":"0rem","heading-ls-xs":"0rem","weight-light":"300","weight-regular":"400","weight-semibold":"600","weight-bold":"700","font-family":"Plus Jakarta Sans","body-size-baseline":"1.125rem","body-size-md":"1rem","body-size-sm":"0.875rem","body-size-xs":"0.75rem","body-lh-baseline":"1.75rem","body-lh-md":"1.5rem","body-lh-sm":"1.6rem","body-lh-xs":"1.2rem","body-ls-baseline":"0rem","body-ls-md":"0.014rem","body-ls-sm":"0.012rem","body-ls-xs":"0.012rem","form-label-size":"1rem","form-description-size":"0.875rem","form-label-lh":"1.5rem","form-description-lh":"1.6rem","form-label-ls":"0.014rem","form-description-ls":"0.012rem"},pa:{"heading-size-xxl":"2.5rem","heading-size-xl":"2rem","heading-size-lg":"1.75rem","heading-size-md":"1.5rem","heading-size-sm":"1.25rem","heading-size-xs":"1rem","heading-lh-xxl":"3rem","heading-lh-xl":"2.5rem","heading-lh-lg":"2.25rem","heading-lh-md":"2rem","heading-lh-sm":"2rem","heading-lh-xs":"1.75rem","heading-ls-xxl":"-0.032rem","heading-ls-xl":"0rem","heading-ls-lg":"0rem","heading-ls-md":"0rem","heading-ls-sm":"0rem","heading-ls-xs":"0rem","weight-light":"300","weight-regular":"400","weight-semibold":"600","weight-bold":"700","font-family":"Lato","body-size-baseline":"1rem","body-size-md":"0.875rem","body-size-sm":"0.75rem","body-size-xs":"0.625rem","body-lh-baseline":"1.75rem","body-lh-md":"1.5rem","body-lh-sm":"1.25rem","body-lh-xs":"1.25rem","body-ls-baseline":"0rem","body-ls-md":"0.012rem","body-ls-sm":"0.012rem","body-ls-xs":"0.012rem","form-label-size":"1rem","form-description-size":"0.875rem","form-label-lh":"1.5rem","form-description-lh":"1.6rem","form-label-ls":"0.014rem","form-description-ls":"0.012rem"}},defaultValue:"default"},Pt=e=>r=>{var t;const n=r.theme,i=ft(Yt,null==n?void 0:n.fontScheme);return(null===(t=null==n?void 0:n.overrides)||void 0===t?void 0:t.fontSpec)?pt(i,e,n.overrides.fontSpec):i[e]},Rt={"heading-size-xxl":Pt("heading-size-xxl"),"heading-size-xl":Pt("heading-size-xl"),"heading-size-lg":Pt("heading-size-lg"),"heading-size-md":Pt("heading-size-md"),"heading-size-sm":Pt("heading-size-sm"),"heading-size-xs":Pt("heading-size-xs"),"heading-lh-xxl":Pt("heading-lh-xxl"),"heading-lh-xl":Pt("heading-lh-xl"),"heading-lh-lg":Pt("heading-lh-lg"),"heading-lh-md":Pt("heading-lh-md"),"heading-lh-sm":Pt("heading-lh-sm"),"heading-lh-xs":Pt("heading-lh-xs"),"heading-ls-xxl":Pt("heading-ls-xxl"),"heading-ls-xl":Pt("heading-ls-xl"),"heading-ls-lg":Pt("heading-ls-lg"),"heading-ls-md":Pt("heading-ls-md"),"heading-ls-sm":Pt("heading-ls-sm"),"heading-ls-xs":Pt("heading-ls-xs"),"weight-light":Pt("weight-light"),"weight-regular":Pt("weight-regular"),"weight-semibold":Pt("weight-semibold"),"weight-bold":Pt("weight-bold"),"font-family":Pt("font-family"),"body-size-baseline":Pt("body-size-baseline"),"body-size-md":Pt("body-size-md"),"body-size-sm":Pt("body-size-sm"),"body-size-xs":Pt("body-size-xs"),"body-lh-baseline":Pt("body-lh-baseline"),"body-lh-md":Pt("body-lh-md"),"body-lh-sm":Pt("body-lh-sm"),"body-lh-xs":Pt("body-lh-xs"),"body-ls-baseline":Pt("body-ls-baseline"),"body-ls-md":Pt("body-ls-md"),"body-ls-sm":Pt("body-ls-sm"),"body-ls-xs":Pt("body-ls-xs"),"form-label-size":Pt("form-label-size"),"form-description-size":Pt("form-description-size"),"form-label-lh":Pt("form-label-lh"),"form-description-lh":Pt("form-description-lh"),"form-label-ls":Pt("form-label-ls"),"form-description-ls":Pt("form-description-ls")},It=(e,r,t,n,i)=>{const{disableLigatures:o}=i||{};return f`
        font-family: ${Pt("font-family")};
        font-size: ${Pt(e)};
        font-weight: ${Pt(r)};
        line-height: ${Pt(t)};
        letter-spacing: ${Pt(n)};

        font-variant: ${o?"no-common-ligatures":"normal"};
    `},Ht=(e={})=>({"heading-xxl-light":It("heading-size-xxl","weight-light","heading-lh-xxl","heading-ls-xxl",e),"heading-xxl-regular":It("heading-size-xxl","weight-regular","heading-lh-xxl","heading-ls-xxl",e),"heading-xxl-semibold":It("heading-size-xxl","weight-semibold","heading-lh-xxl","heading-ls-xxl",e),"heading-xxl-bold":It("heading-size-xxl","weight-bold","heading-lh-xxl","heading-ls-xxl",e),"heading-xl-light":It("heading-size-xl","weight-light","heading-lh-xl","heading-ls-xl",e),"heading-xl-regular":It("heading-size-xl","weight-regular","heading-lh-xl","heading-ls-xl",e),"heading-xl-semibold":It("heading-size-xl","weight-semibold","heading-lh-xl","heading-ls-xl",e),"heading-xl-bold":It("heading-size-xl","weight-bold","heading-lh-xl","heading-ls-xl",e),"heading-lg-light":It("heading-size-lg","weight-light","heading-lh-lg","heading-ls-lg",e),"heading-lg-regular":It("heading-size-lg","weight-regular","heading-lh-lg","heading-ls-lg",e),"heading-lg-semibold":It("heading-size-lg","weight-semibold","heading-lh-lg","heading-ls-lg",e),"heading-lg-bold":It("heading-size-lg","weight-bold","heading-lh-lg","heading-ls-lg",e),"heading-md-light":It("heading-size-md","weight-light","heading-lh-md","heading-ls-md",e),"heading-md-regular":It("heading-size-md","weight-regular","heading-lh-md","heading-ls-md",e),"heading-md-semibold":It("heading-size-md","weight-semibold","heading-lh-md","heading-ls-md",e),"heading-md-bold":It("heading-size-md","weight-bold","heading-lh-md","heading-ls-md",e),"heading-sm-light":It("heading-size-sm","weight-light","heading-lh-sm","heading-ls-sm",e),"heading-sm-regular":It("heading-size-sm","weight-regular","heading-lh-sm","heading-ls-sm",e),"heading-sm-semibold":It("heading-size-sm","weight-semibold","heading-lh-sm","heading-ls-sm",e),"heading-sm-bold":It("heading-size-sm","weight-bold","heading-lh-sm","heading-ls-sm",e),"heading-xs-light":It("heading-size-xs","weight-light","heading-lh-xs","heading-ls-xs",e),"heading-xs-regular":It("heading-size-xs","weight-regular","heading-lh-xs","heading-ls-xs",e),"heading-xs-semibold":It("heading-size-xs","weight-semibold","heading-lh-xs","heading-ls-xs",e),"heading-xs-bold":It("heading-size-xs","weight-bold","heading-lh-xs","heading-ls-xs",e),"body-baseline-light":It("body-size-baseline","weight-light","body-lh-baseline","body-ls-baseline",e),"body-baseline-regular":It("body-size-baseline","weight-regular","body-lh-baseline","body-ls-baseline",e),"body-baseline-semibold":It("body-size-baseline","weight-semibold","body-lh-baseline","body-ls-baseline",e),"body-baseline-bold":It("body-size-baseline","weight-bold","body-lh-baseline","body-ls-baseline",e),"body-md-light":It("body-size-md","weight-light","body-lh-md","body-ls-md",e),"body-md-regular":It("body-size-md","weight-regular","body-lh-md","body-ls-md",e),"body-md-semibold":It("body-size-md","weight-semibold","body-lh-md","body-ls-md",e),"body-md-bold":It("body-size-md","weight-bold","body-lh-md","body-ls-md",e),"body-sm-light":It("body-size-sm","weight-light","body-lh-sm","body-ls-sm",e),"body-sm-regular":It("body-size-sm","weight-regular","body-lh-sm","body-ls-sm",e),"body-sm-semibold":It("body-size-sm","weight-semibold","body-lh-sm","body-ls-sm",e),"body-sm-bold":It("body-size-sm","weight-bold","body-lh-sm","body-ls-sm",e),"body-xs-light":It("body-size-xs","weight-light","body-lh-xs","body-ls-xs",e),"body-xs-regular":It("body-size-xs","weight-regular","body-lh-xs","body-ls-xs",e),"body-xs-semibold":It("body-size-xs","weight-semibold","body-lh-xs","body-ls-xs",e),"body-xs-bold":It("body-size-xs","weight-bold","body-lh-xs","body-ls-xs",e),"form-label":It("form-label-size","weight-semibold","form-label-lh","form-label-ls",e),"form-description":It("form-description-size","weight-regular","form-description-lh","form-description-ls",e)}),Wt=Ht({disableLigatures:!0}),Vt={collections:{default:Ht(),bookingsg:Wt,pa:Ht({disableLigatures:!0})},defaultValue:"default"},Nt=e=>r=>{var t;const n=r.theme,i=ft(Vt,null==n?void 0:n.fontScheme),o=(null===(t=null==n?void 0:n.overrides)||void 0===t?void 0:t.font)?pt(i,e,n.overrides.font):i[e];return"function"==typeof o?o(r):o},Kt={"heading-xxl-light":Nt("heading-xxl-light"),"heading-xxl-regular":Nt("heading-xxl-regular"),"heading-xxl-semibold":Nt("heading-xxl-semibold"),"heading-xxl-bold":Nt("heading-xxl-bold"),"heading-xl-light":Nt("heading-xl-light"),"heading-xl-regular":Nt("heading-xl-regular"),"heading-xl-semibold":Nt("heading-xl-semibold"),"heading-xl-bold":Nt("heading-xl-bold"),"heading-lg-light":Nt("heading-lg-light"),"heading-lg-regular":Nt("heading-lg-regular"),"heading-lg-semibold":Nt("heading-lg-semibold"),"heading-lg-bold":Nt("heading-lg-bold"),"heading-md-light":Nt("heading-md-light"),"heading-md-regular":Nt("heading-md-regular"),"heading-md-semibold":Nt("heading-md-semibold"),"heading-md-bold":Nt("heading-md-bold"),"heading-sm-light":Nt("heading-sm-light"),"heading-sm-regular":Nt("heading-sm-regular"),"heading-sm-semibold":Nt("heading-sm-semibold"),"heading-sm-bold":Nt("heading-sm-bold"),"heading-xs-light":Nt("heading-xs-light"),"heading-xs-regular":Nt("heading-xs-regular"),"heading-xs-semibold":Nt("heading-xs-semibold"),"heading-xs-bold":Nt("heading-xs-bold"),"body-baseline-light":Nt("body-baseline-light"),"body-baseline-regular":Nt("body-baseline-regular"),"body-baseline-semibold":Nt("body-baseline-semibold"),"body-baseline-bold":Nt("body-baseline-bold"),"body-md-light":Nt("body-md-light"),"body-md-regular":Nt("body-md-regular"),"body-md-semibold":Nt("body-md-semibold"),"body-md-bold":Nt("body-md-bold"),"body-sm-light":Nt("body-sm-light"),"body-sm-regular":Nt("body-sm-regular"),"body-sm-semibold":Nt("body-sm-semibold"),"body-sm-bold":Nt("body-sm-bold"),"body-xs-light":Nt("body-xs-light"),"body-xs-regular":Nt("body-xs-regular"),"body-xs-semibold":Nt("body-xs-semibold"),"body-xs-bold":Nt("body-xs-bold"),"form-label":Nt("form-label"),"form-description":Nt("form-description")},Ut={collections:{default:{"duration-150":"150ms","duration-250":"250ms","duration-350":"350ms","duration-500":"500ms","duration-800":"800ms","duration-1000":"1000ms","ease-default":"cubic-bezier(0.45, 0.05, 0.55, 0.95)","ease-standard":"cubic-bezier(0.86, 0, 0.07, 1)","ease-entrance":"cubic-bezier(0.18, 0.13, 0, 1)","ease-exit":"cubic-bezier(1, 0, 0.8, 0.85)"}},defaultValue:"default"},Zt=e=>r=>{var t;const n=r.theme,i=ft(Ut,null==n?void 0:n.motionScheme);return(null===(t=null==n?void 0:n.overrides)||void 0===t?void 0:t.motion)?pt(i,e,n.overrides.motion):i[e]},Xt={"duration-150":Zt("duration-150"),"duration-250":Zt("duration-250"),"duration-350":Zt("duration-350"),"duration-500":Zt("duration-500"),"duration-800":Zt("duration-800"),"duration-1000":Zt("duration-1000"),"ease-default":Zt("ease-default"),"ease-standard":Zt("ease-standard"),"ease-entrance":Zt("ease-entrance"),"ease-exit":Zt("ease-exit")},qt={collections:{default:{none:0,xs:2,sm:4,md:8,lg:12,full:9999}},defaultValue:"default"},Jt=e=>r=>{var t;const n=r.theme,i=ft(qt,null==n?void 0:n.radiusScheme);return(null===(t=null==n?void 0:n.overrides)||void 0===t?void 0:t.radius)?`${pt(i,e,n.overrides.radius)}px`:`${i[e]}px`},Gt={none:Jt("none"),xs:Jt("xs"),sm:Jt("sm"),md:Jt("md"),lg:Jt("lg"),full:Jt("full")},Qt={collections:{default:{"spacing-0":0,"spacing-4":4,"spacing-8":8,"spacing-12":12,"spacing-16":16,"spacing-20":20,"spacing-24":24,"spacing-32":32,"spacing-40":40,"spacing-48":48,"spacing-64":64,"spacing-72":72,"layout-xs":8,"layout-sm":16,"layout-md":24,"layout-lg":32,"layout-xl":48,"layout-xxl":64,"layout-xxxl":128}},defaultValue:"default"},en=e=>r=>{var t;const n=r.theme,i=ft(Qt,null==n?void 0:n.spacingScheme);return(null===(t=null==n?void 0:n.overrides)||void 0===t?void 0:t.spacing)?`${pt(i,e,n.overrides.spacing)}px`:`${i[e]}px`},rn={"spacing-0":en("spacing-0"),"spacing-4":en("spacing-4"),"spacing-8":en("spacing-8"),"spacing-12":en("spacing-12"),"spacing-16":en("spacing-16"),"spacing-20":en("spacing-20"),"spacing-24":en("spacing-24"),"spacing-32":en("spacing-32"),"spacing-40":en("spacing-40"),"spacing-48":en("spacing-48"),"spacing-64":en("spacing-64"),"spacing-72":en("spacing-72"),"layout-xs":en("layout-xs"),"layout-sm":en("layout-sm"),"layout-md":en("layout-md"),"layout-lg":en("layout-lg"),"layout-xl":en("layout-xl"),"layout-xxl":en("layout-xxl"),"layout-xxxl":en("layout-xxxl")},tn=Object.assign(Object.assign({},At),{Primitive:Et}),nn=Object.assign(Object.assign({},Kt),{Spec:Rt}),on=Xt,sn=Object.assign(Object.assign({},xt),{Util:Ot}),an=rn,ln=Gt,dn=Tt,cn=jt,un=e=>f`
    display: -webkit-box;
    -webkit-line-clamp: ${e};
    -webkit-box-orient: vertical;
    overflow: hidden;
`,hn=(e,r,t=!1)=>f`
        ${nn[`${e}-${r}`]}
        ${t?"margin-bottom: 1.05em;":"margin-bottom: 0;"}
    `,gn=e=>{if(e)return f`
            ${un(e)}
        `},bn=(e,r)=>f`
    ${hn(e,r.weight||"regular",r.paragraph)}
    ${((e=!1,r=!1,t)=>r?f`
            display: block;
            ${gn(t)}
        `:e?f`
            display: inline;
        `:f`
            display: block;
            ${gn(t)}
        `)(r.inline,r.paragraph,r.maxLines)}
    color: ${tn.text};
`;var mn;!function(t){const n=(e,r,t)=>{const n=p(e).attrs((({inline:e})=>({as:e?"span":void 0})))`
            ${e=>bn(r,e)}
        `;return n.displayName=`Typography.${t}`,n};t.HeadingXXL=n("h1","heading-xxl","HeadingXXL"),t.HeadingXL=n("h2","heading-xl","HeadingXL"),t.HeadingLG=n("h3","heading-lg","HeadingLG"),t.HeadingMD=n("h4","heading-md","HeadingMD"),t.HeadingSM=n("h5","heading-sm","HeadingSM"),t.HeadingXS=n("h6","heading-xs","HeadingXS");const i=(e,r)=>{const t=p.p.attrs((({inline:e})=>({as:e?"span":void 0})))`
            ${r=>bn(e,r)}
        `;return t.displayName=`Typography.${r}`,t};t.BodyBL=i("body-baseline","BodyBL"),t.BodyMD=i("body-md","BodyMD"),t.BodySM=i("body-sm","BodySM"),t.BodyXS=i("body-xs","BodyXS");const o=(t,n)=>{const i=p.a`
            ${e=>f`
                ${hn(t,e.weight||"regular")}
                color: ${tn.hyperlink};
                text-decoration: none;

                :hover,
                :active,
                :focus {
                    color: ${tn["text-hover"]};
                }
            `}
        `,o=t=>{var{external:n=!1,children:o}=t,s=W(t,["external","children"]);return e(i,Object.assign({},s,{children:[o,n&&r(pn,{})]}))};return o.displayName=`Typography.${n}`,o};t.LinkBL=o("body-baseline","LinkBL"),t.LinkMD=o("body-md","LinkMD"),t.LinkSM=o("body-sm","LinkSM"),t.LinkXS=o("body-xs","LinkXS")}(mn||(mn={}));const pn=p(m)`
    height: 1lh;
    width: 1em;
    margin-left: 0.4em;
    vertical-align: middle;
`;function fn(e,r){return fn=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,r){return e.__proto__=r,e},fn(e,r)}function yn(e){return e&&e.stopPropagation&&e.stopPropagation(),e&&e.preventDefault&&e.preventDefault(),!1}function vn(e){return null==e?[]:Array.isArray(e)?e.slice():[e]}function xn(e){return null!==e&&1===e.length?e[0]:e.slice()}function wn(e){Object.keys(e).forEach((r=>{"undefined"!=typeof document&&document.addEventListener(r,e[r],!1)}))}function Fn(e,r){return $n(function(e,r){let t=e;return t<=r.min&&(t=r.min),t>=r.max&&(t=r.max),t}(e,r),r)}function $n(e,r){const t=(e-r.min)%r.step;let n=e-t;return 2*Math.abs(t)>=r.step&&(n+=t>0?r.step:-r.step),parseFloat(n.toFixed(5))}let En=function(e){function r(r){var t;(t=e.call(this,r)||this).onKeyUp=()=>{t.onEnd()},t.onMouseUp=()=>{t.onEnd(t.getMouseEventMap())},t.onTouchEnd=e=>{e.preventDefault(),t.onEnd(t.getTouchEventMap())},t.onBlur=()=>{t.setState({index:-1},t.onEnd(t.getKeyDownEventMap()))},t.onMouseMove=e=>{t.setState({pending:!0});const r=t.getMousePosition(e),n=t.getDiffPosition(r[0]),i=t.getValueFromPosition(n);t.move(i)},t.onTouchMove=e=>{if(e.touches.length>1)return;t.setState({pending:!0});const r=t.getTouchPosition(e);if(void 0===t.isScrolling){const e=r[0]-t.startPosition[0],n=r[1]-t.startPosition[1];t.isScrolling=Math.abs(n)>Math.abs(e)}if(t.isScrolling)return void t.setState({index:-1});const n=t.getDiffPosition(r[0]),i=t.getValueFromPosition(n);t.move(i)},t.onKeyDown=e=>{if(!(e.ctrlKey||e.shiftKey||e.altKey||e.metaKey))switch(t.setState({pending:!0}),e.key){case"ArrowLeft":case"ArrowDown":case"Left":case"Down":e.preventDefault(),t.moveDownByStep();break;case"ArrowRight":case"ArrowUp":case"Right":case"Up":e.preventDefault(),t.moveUpByStep();break;case"Home":e.preventDefault(),t.move(t.props.min);break;case"End":e.preventDefault(),t.move(t.props.max);break;case"PageDown":e.preventDefault(),t.moveDownByStep(t.props.pageFn(t.props.step));break;case"PageUp":e.preventDefault(),t.moveUpByStep(t.props.pageFn(t.props.step))}},t.onSliderMouseDown=e=>{if(!t.props.disabled&&2!==e.button){if(t.setState({pending:!0}),!t.props.snapDragDisabled){const r=t.getMousePosition(e);t.forceValueFromPosition(r[0],(e=>{t.start(e,r[0]),wn(t.getMouseEventMap())}))}yn(e)}},t.onSliderClick=e=>{if(!t.props.disabled&&t.props.onSliderClick&&!t.hasMoved){const r=t.getMousePosition(e),n=Fn(t.calcValue(t.calcOffsetFromPosition(r[0])),t.props);t.props.onSliderClick(n)}},t.createOnKeyDown=e=>r=>{t.props.disabled||(t.start(e),wn(t.getKeyDownEventMap()),yn(r))},t.createOnMouseDown=e=>r=>{if(t.props.disabled||2===r.button)return;t.setState({pending:!0});const n=t.getMousePosition(r);t.start(e,n[0]),wn(t.getMouseEventMap()),yn(r)},t.createOnTouchStart=e=>r=>{if(t.props.disabled||r.touches.length>1)return;t.setState({pending:!0});const n=t.getTouchPosition(r);t.startPosition=n,t.isScrolling=void 0,t.start(e,n[0]),wn(t.getTouchEventMap()),function(e){e.stopPropagation&&e.stopPropagation()}(r)},t.handleResize=()=>{const e=window.setTimeout((()=>{t.pendingResizeTimeouts.shift(),t.resize()}),0);t.pendingResizeTimeouts.push(e)},t.renderThumb=(e,r)=>{const n=t.props.thumbClassName+" "+t.props.thumbClassName+"-"+r+" "+(t.state.index===r?t.props.thumbActiveClassName:""),i={ref:e=>{t["thumb"+r]=e},key:t.props.thumbClassName+"-"+r,className:n,style:e,onMouseDown:t.createOnMouseDown(r),onTouchStart:t.createOnTouchStart(r),onFocus:t.createOnKeyDown(r),tabIndex:0,role:"slider","aria-orientation":t.props.orientation,"aria-valuenow":t.state.value[r],"aria-valuemin":t.props.min,"aria-valuemax":t.props.max,"aria-label":Array.isArray(t.props.ariaLabel)?t.props.ariaLabel[r]:t.props.ariaLabel,"aria-labelledby":Array.isArray(t.props.ariaLabelledby)?t.props.ariaLabelledby[r]:t.props.ariaLabelledby,"aria-disabled":t.props.disabled},o={index:r,value:xn(t.state.value),valueNow:t.state.value[r]};return t.props.ariaValuetext&&(i["aria-valuetext"]="string"==typeof t.props.ariaValuetext?t.props.ariaValuetext:t.props.ariaValuetext(o)),t.props.renderThumb(i,o)},t.renderTrack=(e,r,n)=>{const i={key:t.props.trackClassName+"-"+e,className:t.props.trackClassName+" "+t.props.trackClassName+"-"+e,style:t.buildTrackStyle(r,t.state.upperBound-n)},o={index:e,value:xn(t.state.value)};return t.props.renderTrack(i,o)};let n=vn(r.value);n.length||(n=vn(r.defaultValue)),t.pendingResizeTimeouts=[];const o=[];for(let e=0;e<n.length;e+=1)n[e]=Fn(n[e],r),o.push(e);return t.resizeObserver=null,t.resizeElementRef=i.createRef(),t.state={index:-1,upperBound:0,sliderLength:0,value:n,zIndices:o},t}!function(e,r){e.prototype=Object.create(r.prototype),e.prototype.constructor=e,fn(e,r)}(r,e);var t=r.prototype;return t.componentDidMount=function(){"undefined"!=typeof window&&(this.resizeObserver=new ResizeObserver(this.handleResize),this.resizeObserver.observe(this.resizeElementRef.current),this.resize())},r.getDerivedStateFromProps=function(e,r){const t=vn(e.value);return t.length?r.pending?null:{value:t.map((r=>Fn(r,e)))}:null},t.componentDidUpdate=function(){0===this.state.upperBound&&this.resize()},t.componentWillUnmount=function(){this.clearPendingResizeTimeouts(),this.resizeObserver&&this.resizeObserver.disconnect()},t.onEnd=function(e){e&&function(e){Object.keys(e).forEach((r=>{"undefined"!=typeof document&&document.removeEventListener(r,e[r],!1)}))}(e),this.hasMoved&&this.fireChangeEvent("onAfterChange"),this.setState({pending:!1}),this.hasMoved=!1},t.getValue=function(){return xn(this.state.value)},t.getClosestIndex=function(e){let r=Number.MAX_VALUE,t=-1;const{value:n}=this.state,i=n.length;for(let o=0;o<i;o+=1){const i=this.calcOffset(n[o]),s=Math.abs(e-i);s<r&&(r=s,t=o)}return t},t.getMousePosition=function(e){return[e["page"+this.axisKey()],e["page"+this.orthogonalAxisKey()]]},t.getTouchPosition=function(e){const r=e.touches[0];return[r["page"+this.axisKey()],r["page"+this.orthogonalAxisKey()]]},t.getKeyDownEventMap=function(){return{keydown:this.onKeyDown,keyup:this.onKeyUp,focusout:this.onBlur}},t.getMouseEventMap=function(){return{mousemove:this.onMouseMove,mouseup:this.onMouseUp}},t.getTouchEventMap=function(){return{touchmove:this.onTouchMove,touchend:this.onTouchEnd}},t.getValueFromPosition=function(e){const r=e/(this.state.sliderLength-this.state.thumbSize)*(this.props.max-this.props.min);return Fn(this.state.startValue+r,this.props)},t.getDiffPosition=function(e){let r=e-this.state.startPosition;return this.props.invert&&(r*=-1),r},t.resize=function(){const{slider:e,thumb0:r}=this;if(!e||!r)return;const t=this.sizeKey(),n=e.getBoundingClientRect(),i=e[t],o=n[this.posMaxKey()],s=n[this.posMinKey()],a=r.getBoundingClientRect()[t.replace("client","").toLowerCase()],l=i-a,d=Math.abs(o-s);this.state.upperBound===l&&this.state.sliderLength===d&&this.state.thumbSize===a||this.setState({upperBound:l,sliderLength:d,thumbSize:a})},t.calcOffset=function(e){const r=this.props.max-this.props.min;return 0===r?0:(e-this.props.min)/r*this.state.upperBound},t.calcValue=function(e){return e/this.state.upperBound*(this.props.max-this.props.min)+this.props.min},t.calcOffsetFromPosition=function(e){const{slider:r}=this,t=r.getBoundingClientRect(),n=t[this.posMaxKey()],i=t[this.posMinKey()];let o=e-(window["page"+this.axisKey()+"Offset"]+(this.props.invert?n:i));return this.props.invert&&(o=this.state.sliderLength-o),o-=this.state.thumbSize/2,o},t.forceValueFromPosition=function(e,r){const t=this.calcOffsetFromPosition(e),n=this.getClosestIndex(t),i=Fn(this.calcValue(t),this.props),o=this.state.value.slice();o[n]=i;for(let e=0;e<o.length-1;e+=1)if(o[e+1]-o[e]<this.props.minDistance)return;this.fireChangeEvent("onBeforeChange"),this.hasMoved=!0,this.setState({value:o},(()=>{r(n),this.fireChangeEvent("onChange")}))},t.clearPendingResizeTimeouts=function(){do{const e=this.pendingResizeTimeouts.shift();clearTimeout(e)}while(this.pendingResizeTimeouts.length)},t.start=function(e,r){const t=this["thumb"+e];t&&t.focus();const{zIndices:n}=this.state;n.splice(n.indexOf(e),1),n.push(e),this.setState((t=>({startValue:t.value[e],startPosition:void 0!==r?r:t.startPosition,index:e,zIndices:n})))},t.moveUpByStep=function(e){void 0===e&&(e=this.props.step);const r=this.state.value[this.state.index],t=Fn(this.props.invert&&"horizontal"===this.props.orientation?r-e:r+e,this.props);this.move(Math.min(t,this.props.max))},t.moveDownByStep=function(e){void 0===e&&(e=this.props.step);const r=this.state.value[this.state.index],t=Fn(this.props.invert&&"horizontal"===this.props.orientation?r+e:r-e,this.props);this.move(Math.max(t,this.props.min))},t.move=function(e){const r=this.state.value.slice(),{index:t}=this.state,{length:n}=r,i=r[t];if(e===i)return;this.hasMoved||this.fireChangeEvent("onBeforeChange"),this.hasMoved=!0;const{pearling:o,max:s,min:a,minDistance:l}=this.props;if(!o){if(t>0){const n=r[t-1];e<n+l&&(e=n+l)}if(t<n-1){const n=r[t+1];e>n-l&&(e=n-l)}}r[t]=e,o&&n>1&&(e>i?(this.pushSucceeding(r,l,t),function(e,r,t,n){for(let i=0;i<e;i+=1){const o=n-i*t;r[e-1-i]>o&&(r[e-1-i]=o)}}(n,r,l,s)):e<i&&(this.pushPreceding(r,l,t),function(e,r,t,n){for(let i=0;i<e;i+=1){const e=n+i*t;r[i]<e&&(r[i]=e)}}(n,r,l,a))),this.setState({value:r},this.fireChangeEvent.bind(this,"onChange"))},t.pushSucceeding=function(e,r,t){let n,i;for(n=t,i=e[n]+r;null!==e[n+1]&&i>e[n+1];n+=1,i=e[n]+r)e[n+1]=$n(i,this.props)},t.pushPreceding=function(e,r,t){for(let n=t,i=e[n]-r;null!==e[n-1]&&i<e[n-1];n-=1,i=e[n]-r)e[n-1]=$n(i,this.props)},t.axisKey=function(){return"vertical"===this.props.orientation?"Y":"X"},t.orthogonalAxisKey=function(){return"vertical"===this.props.orientation?"X":"Y"},t.posMinKey=function(){return"vertical"===this.props.orientation?this.props.invert?"bottom":"top":this.props.invert?"right":"left"},t.posMaxKey=function(){return"vertical"===this.props.orientation?this.props.invert?"top":"bottom":this.props.invert?"left":"right"},t.sizeKey=function(){return"vertical"===this.props.orientation?"clientHeight":"clientWidth"},t.fireChangeEvent=function(e){this.props[e]&&this.props[e](xn(this.state.value),this.state.index)},t.buildThumbStyle=function(e,r){const t={position:"absolute",touchAction:"none",willChange:this.state.index>=0?this.posMinKey():void 0,zIndex:this.state.zIndices.indexOf(r)+1};return t[this.posMinKey()]=e+"px",t},t.buildTrackStyle=function(e,r){const t={position:"absolute",willChange:this.state.index>=0?this.posMinKey()+","+this.posMaxKey():void 0};return t[this.posMinKey()]=e,t[this.posMaxKey()]=r,t},t.buildMarkStyle=function(e){var r;return(r={position:"absolute"})[this.posMinKey()]=e,r},t.renderThumbs=function(e){const{length:r}=e,t=[];for(let n=0;n<r;n+=1)t[n]=this.buildThumbStyle(e[n],n);const n=[];for(let e=0;e<r;e+=1)n[e]=this.renderThumb(t[e],e);return n},t.renderTracks=function(e){const r=[],t=e.length-1;r.push(this.renderTrack(0,0,e[0]));for(let n=0;n<t;n+=1)r.push(this.renderTrack(n+1,e[n],e[n+1]));return r.push(this.renderTrack(t+1,e[t],this.state.upperBound)),r},t.renderMarks=function(){let{marks:e}=this.props;const r=this.props.max-this.props.min+1;return"boolean"==typeof e?e=Array.from({length:r}).map(((e,r)=>r)):"number"==typeof e&&(e=Array.from({length:r}).map(((e,r)=>r)).filter((r=>r%e==0))),e.map(parseFloat).sort(((e,r)=>e-r)).map((e=>{const r=this.calcOffset(e),t={key:e,className:this.props.markClassName,style:this.buildMarkStyle(r)};return this.props.renderMark(t)}))},t.render=function(){const e=[],{value:r}=this.state,t=r.length;for(let n=0;n<t;n+=1)e[n]=this.calcOffset(r[n],n);const n=this.props.withTracks?this.renderTracks(e):null,o=this.renderThumbs(e),s=this.props.marks?this.renderMarks():null;return i.createElement("div",{ref:e=>{this.slider=e,this.resizeElementRef.current=e},style:{position:"relative"},className:this.props.className+(this.props.disabled?" disabled":""),onMouseDown:this.onSliderMouseDown,onClick:this.onSliderClick},n,o,s)},r}(i.Component);En.displayName="ReactSlider",En.defaultProps={min:0,max:100,step:1,pageFn:e=>10*e,minDistance:0,defaultValue:0,orientation:"horizontal",className:"slider",thumbClassName:"thumb",thumbActiveClassName:"active",trackClassName:"track",markClassName:"mark",withTracks:!0,pearling:!1,disabled:!1,snapDragDisabled:!1,invert:!1,marks:[],renderThumb:e=>i.createElement("div",e),renderTrack:e=>i.createElement("div",e),renderMark:e=>i.createElement("span",e)};var Dn=En;const Cn=p.div`
    isolation: isolate;
`,Bn=p.div`
    margin-top: ${an["spacing-8"]};
    display: flex;
    justify-content: space-between;
    gap: ${an["spacing-8"]};
`,An=p.div`
    margin-bottom: ${an["spacing-8"]};
`,Mn=p(mn.BodyBL)`
    overflow-wrap: anywhere;
`,kn=p(Dn)`
    height: 0.875rem;
`,zn=p.div`
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

        background-color: ${tn.bg};
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.16);
        border: ${sn["width-010"]} ${sn.solid}
            ${e=>e.$disabled?tn["border-selected-disabled"]:tn["border-strong"]};
        border-radius: 50%;
    }
`,On=p.div`
    height: 0.875rem;
    width: 0.875rem;
    position: relative;
    outline: none;

    :focus ${zn}:after {
        outline-offset: -1px;
        outline: ${sn["width-040"]} ${sn.solid}
            ${tn["border-selected"]};
    }
`,Sn=p.div`
    height: 0.25rem;
    top: 50%;
    transform: translateY(-50%);
    border-radius: ${ln.full};

    background: ${e=>e.$color&&"function"==typeof e.$color?e.$color(e):e.$color||tn["border-strong"](e)};
`,_n=p.div`
    display: flex;
    margin-bottom: ${an["spacing-16"]};
    align-items: baseline;
`,Tn=p.div`
    margin: 0 0.5rem;
`,Ln=p.div`
    width: 100%;
    height: 4rem;
    display: flex;
    align-items: flex-end;
    padding: 0 0.4375rem;
`,jn=p.div`
    flex: 1;
    border-radius: ${ln.sm} ${ln.sm} 0 0;
    border: 0.5px solid transparent; // space between bars
    background-clip: content-box;

    ${e=>{let r=tn["bg-strongest"];return e.$disabled&&e.$selected?r=tn["bg-selected-stronger-disabled"]:e.$disabled?r=tn["bg-disabled"]:e.$selected&&(r=tn["bg-selected-stronger"]),f`
            background-color: ${r};
        `}}
`,Yn=p((t=>{var{value:n,min:i=0,max:a=100,step:l=1,minRange:d,numOfThumbs:c=2,colors:u,disabled:h,readOnly:g,ariaLabels:b,showSliderLabels:m,sliderLabelPrefix:p,sliderLabelSuffix:f,showIndicatorLabel:y,indicatorLabelPrefix:v,indicatorLabelSuffix:x,renderSliderLabel:w,onChange:F,onChangeEnd:$}=t,E=W(t,["value","min","max","step","minRange","numOfThumbs","colors","disabled","readOnly","ariaLabels","showSliderLabels","sliderLabelPrefix","sliderLabelSuffix","showIndicatorLabel","indicatorLabelPrefix","indicatorLabelSuffix","renderSliderLabel","onChange","onChangeEnd"]);const[D,C]=o(A()),B=function(){const e=function(){const e=h||g?tn["border-disabled"]:tn["border-strong"],r=h||g?tn["border-selected-disabled"]:tn["border-selected"];if(1===c)return[r,e];const t=[];t.push(e);for(let e=0;e<c-1;e++)t.push(r);return t.push(e),t}();return new Array(c+1).fill(0).map(((r,t)=>(null==u?void 0:u[t])||e[t]))}();s((()=>{n!==D&&C(A())}),[n]);function A(){if(n&&n.length===c)return n;const e=[];for(let r=0;r<c;r++)e.push(i+l*r);return e}const M=r=>w?w(r):e(Mn,{children:[p,r,f]});return e(Cn,Object.assign({},E,{children:[y&&r(An,{children:(()=>{let r="";if(1===D.length)r=`${D[0]}`;else if(2===D.length)r=`${D[0]} - ${D[1]}`;else if(D.length>2){r=`${Math.min(...D)} - ${Math.max(...D)}`}return e(Mn,{children:[v,r,x]})})()}),r(kn,{step:l,min:i,max:a,value:D,disabled:h||g,onChange:(e,r)=>{if("number"==typeof e){const r=[e];C(r),null==F||F(r)}else{if(r>-1&&D[r]===e[r])return;const t=[...e];C(t),null==F||F(t)}},onAfterChange:e=>{if("number"==typeof e){const r=[e];C(r),null==$||$(r)}else{const r=[...e];C(r),null==$||$(r)}},minDistance:d,ariaLabel:b,renderThumb:(e,t)=>r(On,Object.assign({"data-testid":`slider-thumb-${t.index}`},e,{tabIndex:h?void 0:e.tabIndex,children:r(zn,{$disabled:h,$readOnly:g})})),renderTrack:(e,t)=>r(Sn,Object.assign({"data-testid":`slider-track-${t.index}`},e,{$color:B[t.index]}))}),m&&e(Bn,{children:[r("div",{children:M(i)}),r("div",{children:M(a)})]})]}))}))`
    margin-top: -0.3125rem;
`,Pn=n=>{var{bins:i=[],interval:l,disabled:d,readOnly:c,value:u,showRangeLabels:h,rangeLabelPrefix:g,rangeLabelSuffix:b,ariaLabels:m,onChange:p,onChangeEnd:f,renderEmptyView:y,renderRangeLabel:v}=n,x=W(n,["bins","interval","disabled","readOnly","value","showRangeLabels","rangeLabelPrefix","rangeLabelSuffix","ariaLabels","onChange","onChangeEnd","renderEmptyView","renderRangeLabel"]);const w=i.map((e=>e.count)),F=Math.max(...w),$=i.map((e=>e.minValue)),E=Math.max(...$),D=Math.min(...$),[C,B]=o(z()),A=a((()=>{const e=[...i].sort(((e,r)=>e.minValue-r.minValue)),r=(E-D)/l+1,t=[];for(let n=0;n<r;n++){const r=e.find((e=>e.minValue===D+l*n));r?t.push(r):t.push({count:0,minValue:D+l*n})}return t}),[i,l]);s((()=>{u!==C&&B(z())}),[u]);const M=e=>{const[r,t]=e,n=[r,t];B(n),null==p||p(n)},k=e=>{const[r,t]=e,n=[r,t];B(n),null==f||f(n)};function z(){return null!=u?u:[D,D+l]}const O=r=>v?v(r):e(mn.BodyBL,{children:[g,r,b]});return e("div",Object.assign({},x,{children:[h&&e(_n,{children:[O(C[0]),r(Tn,{children:"-"}),O(C[1])]}),A.every((e=>0===e.count))&&y?y():e(t,{children:[r(Ln,{children:A.map(((e,t)=>{const n=e.count/F;return r(jn,{style:{height:n?`calc(calc(100% - 0.25rem) * ${n} + 0.25rem)`:0},$selected:e.minValue>=C[0]&&e.minValue<C[1],$disabled:d||c},t)}))}),r(Yn,{min:D,max:E+l,step:l,minRange:l,numOfThumbs:2,value:C,disabled:d,readOnly:c,ariaLabels:m,onChange:M,onChangeEnd:k})]})]}))};var Rn=function(e,r){return Rn=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,r){e.__proto__=r}||function(e,r){for(var t in r)Object.prototype.hasOwnProperty.call(r,t)&&(e[t]=r[t])},Rn(e,r)};var In=function(){return In=Object.assign||function(e){for(var r,t=1,n=arguments.length;t<n;t++)for(var i in r=arguments[t])Object.prototype.hasOwnProperty.call(r,i)&&(e[i]=r[i]);return e},In.apply(this,arguments)};var Hn="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};var Wn=function(e){var r=typeof e;return null!=e&&("object"==r||"function"==r)},Vn="object"==typeof Hn&&Hn&&Hn.Object===Object&&Hn,Nn="object"==typeof self&&self&&self.Object===Object&&self,Kn=Vn||Nn||Function("return this")(),Un=Kn,Zn=function(){return Un.Date.now()},Xn=/\s/;var qn=function(e){for(var r=e.length;r--&&Xn.test(e.charAt(r)););return r},Jn=/^\s+/;var Gn=function(e){return e?e.slice(0,qn(e)+1).replace(Jn,""):e},Qn=Kn.Symbol,ei=Qn,ri=Object.prototype,ti=ri.hasOwnProperty,ni=ri.toString,ii=ei?ei.toStringTag:void 0;var oi=function(e){var r=ti.call(e,ii),t=e[ii];try{e[ii]=void 0;var n=!0}catch(e){}var i=ni.call(e);return n&&(r?e[ii]=t:delete e[ii]),i},si=Object.prototype.toString;var ai=oi,li=function(e){return si.call(e)},di=Qn?Qn.toStringTag:void 0;var ci=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":di&&di in Object(e)?ai(e):li(e)},ui=function(e){return null!=e&&"object"==typeof e};var hi=Gn,gi=Wn,bi=function(e){return"symbol"==typeof e||ui(e)&&"[object Symbol]"==ci(e)},mi=/^[-+]0x[0-9a-f]+$/i,pi=/^0b[01]+$/i,fi=/^0o[0-7]+$/i,yi=parseInt;var vi=Wn,xi=Zn,wi=function(e){if("number"==typeof e)return e;if(bi(e))return NaN;if(gi(e)){var r="function"==typeof e.valueOf?e.valueOf():e;e=gi(r)?r+"":r}if("string"!=typeof e)return 0===e?e:+e;e=hi(e);var t=pi.test(e);return t||fi.test(e)?yi(e.slice(2),t?2:8):mi.test(e)?NaN:+e},Fi=Math.max,$i=Math.min;var Ei=function(e,r,t){var n,i,o,s,a,l,d=0,c=!1,u=!1,h=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function g(r){var t=n,o=i;return n=i=void 0,d=r,s=e.apply(o,t)}function b(e){var t=e-l;return void 0===l||t>=r||t<0||u&&e-d>=o}function m(){var e=xi();if(b(e))return p(e);a=setTimeout(m,function(e){var t=r-(e-l);return u?$i(t,o-(e-d)):t}(e))}function p(e){return a=void 0,h&&n?g(e):(n=i=void 0,s)}function f(){var e=xi(),t=b(e);if(n=arguments,i=this,l=e,t){if(void 0===a)return function(e){return d=e,a=setTimeout(m,r),c?g(e):s}(l);if(u)return clearTimeout(a),a=setTimeout(m,r),g(l)}return void 0===a&&(a=setTimeout(m,r)),s}return r=wi(r)||0,vi(t)&&(c=!!t.leading,o=(u="maxWait"in t)?Fi(wi(t.maxWait)||0,r):o,h="trailing"in t?!!t.trailing:h),f.cancel=function(){void 0!==a&&clearTimeout(a),d=0,n=l=i=a=void 0},f.flush=function(){return void 0===a?s:p(xi())},f},Di=Ei,Ci=Wn;var Bi=function(e,r,t){var n=!0,i=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return Ci(t)&&(n="leading"in t?!!t.leading:n,i="trailing"in t?!!t.trailing:i),Di(e,r,{leading:n,maxWait:r,trailing:i})},Ai=function(e,r,t,n){switch(r){case"debounce":return Ei(e,t,n);case"throttle":return Bi(e,t,n);default:return e}},Mi=function(e){return"function"==typeof e},ki=function(){return"undefined"==typeof window},zi=function(e){return e instanceof Element||e instanceof HTMLDocument},Oi=function(e,r,t,n){return function(i){var o=i.width,s=i.height;r((function(r){return r.width===o&&r.height===s||r.width===o&&!n||r.height===s&&!t?r:(e&&Mi(e)&&e(o,s),{width:o,height:s})}))}};!function(e){function r(r){var t=e.call(this,r)||this;t.cancelHandler=function(){t.resizeHandler&&t.resizeHandler.cancel&&(t.resizeHandler.cancel(),t.resizeHandler=null)},t.attachObserver=function(){var e=t.props,r=e.targetRef,n=e.observerOptions;if(!ki()){r&&r.current&&(t.targetRef.current=r.current);var i=t.getElement();i&&(t.observableElement&&t.observableElement===i||(t.observableElement=i,t.resizeObserver.observe(i,n)))}},t.getElement=function(){var e=t.props,r=e.querySelector,n=e.targetDomEl;if(ki())return null;if(r)return document.querySelector(r);if(n&&zi(n))return n;if(t.targetRef&&zi(t.targetRef.current))return t.targetRef.current;var i=H(t);if(!i)return null;switch(t.getRenderType()){case"renderProp":case"childFunction":case"child":case"childArray":return i;default:return i.parentElement}},t.createResizeHandler=function(e){var r=t.props,n=r.handleWidth,i=void 0===n||n,o=r.handleHeight,s=void 0===o||o,a=r.onResize;if(i||s){var l=Oi(a,t.setState.bind(t),i,s);e.forEach((function(e){var r=e&&e.contentRect||{},n=r.width,i=r.height;!t.skipOnMount&&!ki()&&l({width:n,height:i}),t.skipOnMount=!1}))}},t.getRenderType=function(){var e=t.props,r=e.render,n=e.children;return Mi(r)?"renderProp":Mi(n)?"childFunction":d(n)?"child":Array.isArray(n)?"childArray":"parent"};var n=r.skipOnMount,i=r.refreshMode,o=r.refreshRate,s=void 0===o?1e3:o,a=r.refreshOptions;return t.state={width:void 0,height:void 0},t.skipOnMount=n,t.targetRef=c(),t.observableElement=null,ki()||(t.resizeHandler=Ai(t.createResizeHandler,i,s,a),t.resizeObserver=new window.ResizeObserver(t.resizeHandler)),t}(function(e,r){if("function"!=typeof r&&null!==r)throw new TypeError("Class extends value "+String(r)+" is not a constructor or null");function t(){this.constructor=e}Rn(e,r),e.prototype=null===r?Object.create(r):(t.prototype=r.prototype,new t)})(r,e),r.prototype.componentDidMount=function(){this.attachObserver()},r.prototype.componentDidUpdate=function(){this.attachObserver()},r.prototype.componentWillUnmount=function(){ki()||(this.observableElement=null,this.resizeObserver.disconnect(),this.cancelHandler())},r.prototype.render=function(){var e,r=this.props,t=r.render,i=r.children,o=r.nodeType,s=void 0===o?"div":o,a=this.state,l={width:a.width,height:a.height,targetRef:this.targetRef};switch(this.getRenderType()){case"renderProp":return t&&t(l);case"childFunction":return(e=i)(l);case"child":if((e=i).type&&"string"==typeof e.type){var d=function(e,r){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(n=Object.getOwnPropertySymbols(e);i<n.length;i++)r.indexOf(n[i])<0&&Object.prototype.propertyIsEnumerable.call(e,n[i])&&(t[n[i]]=e[n[i]])}return t}(l,["targetRef"]);return u(e,d)}return u(e,l);case"childArray":return(e=i).map((function(e){return!!e&&u(e,l)}));default:return n.createElement(s,null)}}}(h);var Si,_i=ki()?s:g;!function(e){e.transformWithSpaces=(e,r)=>{const t="(.{"+r+"})";return e.replace(/[^\dA-Z]/gi,"").replace(new RegExp(t,"g"),"$1 ").trim()},e.padValue=(e,r)=>{if("0"===e)return r?e:e.padStart(2,"0");if(""===e)return e;return parseInt(e).toString().padStart(2,"0")},e.shouldTruncateToTwoLines=(e,r)=>{const t=Math.floor(r/9);return e.length>=2*t||1===e.split(" ").length&&e.length>t},e.truncateOneLine=(e,r,t,n,i=8)=>{let o=0;r>t&&(o=Math.floor((r-t)/i));const s=n+o;if(s<e.length){const r=Math.floor(s/2);return e.substring(0,r)+" ... "+e.substring(e.length-r,e.length)}return e},e.truncateTwoLines=(e,r,t,n=1.2)=>{const i=Math.floor(2*r/(.6*t))*(2/n);if(e.length<=i)return e;const o=Math.floor(.6*i),s=Math.floor(.2*i);return`${e.substring(0,o)}...${e.substring(e.length-s)}`},e.getTextWidth=(r,t)=>{if("undefined"==typeof document)return 0;const n=(e.getTextWidth.canvas||(e.getTextWidth.canvas=document.createElement("canvas"))).getContext("2d");n.font=t;return n.measureText(r).width},e.maskValue=(e,t)=>{if(!e)return e;const{maskRange:n,unmaskRange:i,maskChar:o="•",maskRegex:s,maskTransformer:a}=t;if(a)return a(e);if(s)return e.replace(s,o);if(n){const{startIndex:t,endIndex:i}=r(n[0],n[1]);return e.substring(0,t)+o.repeat(e.substring(t,i+1).length)+e.substring(i+1)}if(i){const{startIndex:t,endIndex:n}=r(i[0],i[1]);return o.repeat(e.substring(0,t).length)+e.substring(t,n+1)+o.repeat(e.substring(n+1).length)}return e};const r=(e,r)=>e<r?{startIndex:e,endIndex:r}:{startIndex:r,endIndex:e}}(Si||(Si={}));const Ti=p.div`
    font-weight: ${e=>e.$bold?nn.Spec["weight-semibold"]:nn.Spec["weight-regular"]};
    color: ${e=>e.$selected?tn["text-selected"]:tn.text};
    width: 100%;

    ${e=>"end"===e.$truncateType&&un(e.$maxLines||2)}
    overflow-wrap: break-word;
`,Li=p.div`
    color: ${tn["text-subtlest"]};
    width: 100%;

    ${e=>"end"===e.$truncateType&&un(e.$maxLines||2)}
    overflow-wrap: break-word;

    ${e=>"next-line"===e.$labelDisplayType?f`
                    ${nn["body-md-semibold"]}
                `:f`
                    ${nn["body-baseline-regular"]}
                `}
`;p.span`
    font-weight: ${nn.Spec["weight-semibold"]};
`,p.div`
    text-align: left;
    width: 100%;
    overflow: hidden;
    overflow-wrap: break-word;

    ${e=>"small"===e.$variant?nn["body-md-regular"]:nn["body-baseline-regular"]}

    ${e=>{switch(e.$labelDisplayType){case"next-line":return f`
                    display: flex;
                    flex-direction: column;
                `;case"inline":return f`
                    ${Ti} {
                        display: inline;
                    }

                    ${Li} {
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
`;var ji=Dr;var Yi=function(e){var r=this.__data__,t=r.delete(e);return this.size=r.size,t};var Pi=function(e){return this.__data__.get(e)};var Ri=function(e){return this.__data__.has(e)},Ii=Dr,Hi=Cr,Wi=Kr;var Vi=function(e,r){var t=this.__data__;if(t instanceof Ii){var n=t.__data__;if(!Hi||n.length<199)return n.push([e,r]),this.size=++t.size,this;t=this.__data__=new Wi(n)}return t.set(e,r),this.size=t.size,this},Ni=Dr,Ki=function(){this.__data__=new ji,this.size=0},Ui=Yi,Zi=Pi,Xi=Ri,qi=Vi;function Ji(e){var r=this.__data__=new Ni(e);this.size=r.size}Ji.prototype.clear=Ki,Ji.prototype.delete=Ui,Ji.prototype.get=Zi,Ji.prototype.has=Xi,Ji.prototype.set=qi;var Gi=Kr,Qi=function(e){return this.__data__.set(e,"__lodash_hash_undefined__"),this},eo=function(e){return this.__data__.has(e)};function ro(e){var r=-1,t=null==e?0:e.length;for(this.__data__=new Gi;++r<t;)this.add(e[r])}ro.prototype.add=ro.prototype.push=Qi,ro.prototype.has=eo,q.Uint8Array;var to=J?J.prototype:void 0;to&&to.valueOf;var no=le,io=de;var oo=function(e){return io(e)&&"[object Arguments]"==no(e)},so=Object.prototype;so.hasOwnProperty,so.propertyIsEnumerable;oo(function(){return arguments}());var ao={exports:{}};var lo=function(){return!1};!function(e,r){var t=q,n=lo,i=r&&!r.nodeType&&r,o=i&&e&&!e.nodeType&&e,s=o&&o.exports===i?t.Buffer:void 0,a=(s?s.isBuffer:void 0)||n;e.exports=a}(ao,ao.exports);var co={exports:{}};!function(e,r){var t=U,n=r&&!r.nodeType&&r,i=n&&e&&!e.nodeType&&e,o=i&&i.exports===n&&t.process,s=function(){try{var e=i&&i.require&&i.require("util").types;return e||o&&o.binding&&o.binding("util")}catch(e){}}();e.exports=s}(co,co.exports);var uo=co.exports;uo&&uo.isTypedArray;var ho=Ie(q,"DataView"),go=Cr,bo=Ie(q,"Promise"),mo=Ie(q,"Set"),po=Ie(q,"WeakMap"),fo=le,yo=Be,vo="[object Map]",xo="[object Promise]",wo="[object Set]",Fo="[object WeakMap]",$o="[object DataView]",Eo=yo(ho),Do=yo(go),Co=yo(bo),Bo=yo(mo),Ao=yo(po),Mo=fo;(ho&&Mo(new ho(new ArrayBuffer(1)))!=$o||go&&Mo(new go)!=vo||bo&&Mo(bo.resolve())!=xo||mo&&Mo(new mo)!=wo||po&&Mo(new po)!=Fo)&&(Mo=function(e){var r=fo(e),t="[object Object]"==r?e.constructor:void 0,n=t?yo(t):"";if(n)switch(n){case Eo:return $o;case Do:return vo;case Co:return xo;case Bo:return wo;case Ao:return Fo}return r});var ko={exports:{}};ko.exports=function(){var e=1e3,r=6e4,t=36e5,n="millisecond",i="second",o="minute",s="hour",a="day",l="week",d="month",c="quarter",u="year",h="date",g="Invalid Date",b=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,m=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,p={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(e){var r=["th","st","nd","rd"],t=e%100;return"["+e+(r[(t-20)%10]||r[t]||r[0])+"]"}},f=function(e,r,t){var n=String(e);return!n||n.length>=r?e:""+Array(r+1-n.length).join(t)+e},y={s:f,z:function(e){var r=-e.utcOffset(),t=Math.abs(r),n=Math.floor(t/60),i=t%60;return(r<=0?"+":"-")+f(n,2,"0")+":"+f(i,2,"0")},m:function e(r,t){if(r.date()<t.date())return-e(t,r);var n=12*(t.year()-r.year())+(t.month()-r.month()),i=r.clone().add(n,d),o=t-i<0,s=r.clone().add(n+(o?-1:1),d);return+(-(n+(t-i)/(o?i-s:s-i))||0)},a:function(e){return e<0?Math.ceil(e)||0:Math.floor(e)},p:function(e){return{M:d,y:u,w:l,d:a,D:h,h:s,m:o,s:i,ms:n,Q:c}[e]||String(e||"").toLowerCase().replace(/s$/,"")},u:function(e){return void 0===e}},v="en",x={};x[v]=p;var w="$isDayjsObject",F=function(e){return e instanceof C||!(!e||!e[w])},$=function e(r,t,n){var i;if(!r)return v;if("string"==typeof r){var o=r.toLowerCase();x[o]&&(i=o),t&&(x[o]=t,i=o);var s=r.split("-");if(!i&&s.length>1)return e(s[0])}else{var a=r.name;x[a]=r,i=a}return!n&&i&&(v=i),i||!n&&v},E=function(e,r){if(F(e))return e.clone();var t="object"==typeof r?r:{};return t.date=e,t.args=arguments,new C(t)},D=y;D.l=$,D.i=F,D.w=function(e,r){return E(e,{locale:r.$L,utc:r.$u,x:r.$x,$offset:r.$offset})};var C=function(){function p(e){this.$L=$(e.locale,null,!0),this.parse(e),this.$x=this.$x||e.x||{},this[w]=!0}var f=p.prototype;return f.parse=function(e){this.$d=function(e){var r=e.date,t=e.utc;if(null===r)return new Date(NaN);if(D.u(r))return new Date;if(r instanceof Date)return new Date(r);if("string"==typeof r&&!/Z$/i.test(r)){var n=r.match(b);if(n){var i=n[2]-1||0,o=(n[7]||"0").substring(0,3);return t?new Date(Date.UTC(n[1],i,n[3]||1,n[4]||0,n[5]||0,n[6]||0,o)):new Date(n[1],i,n[3]||1,n[4]||0,n[5]||0,n[6]||0,o)}}return new Date(r)}(e),this.init()},f.init=function(){var e=this.$d;this.$y=e.getFullYear(),this.$M=e.getMonth(),this.$D=e.getDate(),this.$W=e.getDay(),this.$H=e.getHours(),this.$m=e.getMinutes(),this.$s=e.getSeconds(),this.$ms=e.getMilliseconds()},f.$utils=function(){return D},f.isValid=function(){return!(this.$d.toString()===g)},f.isSame=function(e,r){var t=E(e);return this.startOf(r)<=t&&t<=this.endOf(r)},f.isAfter=function(e,r){return E(e)<this.startOf(r)},f.isBefore=function(e,r){return this.endOf(r)<E(e)},f.$g=function(e,r,t){return D.u(e)?this[r]:this.set(t,e)},f.unix=function(){return Math.floor(this.valueOf()/1e3)},f.valueOf=function(){return this.$d.getTime()},f.startOf=function(e,r){var t=this,n=!!D.u(r)||r,c=D.p(e),g=function(e,r){var i=D.w(t.$u?Date.UTC(t.$y,r,e):new Date(t.$y,r,e),t);return n?i:i.endOf(a)},b=function(e,r){return D.w(t.toDate()[e].apply(t.toDate("s"),(n?[0,0,0,0]:[23,59,59,999]).slice(r)),t)},m=this.$W,p=this.$M,f=this.$D,y="set"+(this.$u?"UTC":"");switch(c){case u:return n?g(1,0):g(31,11);case d:return n?g(1,p):g(0,p+1);case l:var v=this.$locale().weekStart||0,x=(m<v?m+7:m)-v;return g(n?f-x:f+(6-x),p);case a:case h:return b(y+"Hours",0);case s:return b(y+"Minutes",1);case o:return b(y+"Seconds",2);case i:return b(y+"Milliseconds",3);default:return this.clone()}},f.endOf=function(e){return this.startOf(e,!1)},f.$set=function(e,r){var t,l=D.p(e),c="set"+(this.$u?"UTC":""),g=(t={},t[a]=c+"Date",t[h]=c+"Date",t[d]=c+"Month",t[u]=c+"FullYear",t[s]=c+"Hours",t[o]=c+"Minutes",t[i]=c+"Seconds",t[n]=c+"Milliseconds",t)[l],b=l===a?this.$D+(r-this.$W):r;if(l===d||l===u){var m=this.clone().set(h,1);m.$d[g](b),m.init(),this.$d=m.set(h,Math.min(this.$D,m.daysInMonth())).$d}else g&&this.$d[g](b);return this.init(),this},f.set=function(e,r){return this.clone().$set(e,r)},f.get=function(e){return this[D.p(e)]()},f.add=function(n,c){var h,g=this;n=Number(n);var b=D.p(c),m=function(e){var r=E(g);return D.w(r.date(r.date()+Math.round(e*n)),g)};if(b===d)return this.set(d,this.$M+n);if(b===u)return this.set(u,this.$y+n);if(b===a)return m(1);if(b===l)return m(7);var p=(h={},h[o]=r,h[s]=t,h[i]=e,h)[b]||1,f=this.$d.getTime()+n*p;return D.w(f,this)},f.subtract=function(e,r){return this.add(-1*e,r)},f.format=function(e){var r=this,t=this.$locale();if(!this.isValid())return t.invalidDate||g;var n=e||"YYYY-MM-DDTHH:mm:ssZ",i=D.z(this),o=this.$H,s=this.$m,a=this.$M,l=t.weekdays,d=t.months,c=t.meridiem,u=function(e,t,i,o){return e&&(e[t]||e(r,n))||i[t].slice(0,o)},h=function(e){return D.s(o%12||12,e,"0")},b=c||function(e,r,t){var n=e<12?"AM":"PM";return t?n.toLowerCase():n};return n.replace(m,(function(e,n){return n||function(e){switch(e){case"YY":return String(r.$y).slice(-2);case"YYYY":return D.s(r.$y,4,"0");case"M":return a+1;case"MM":return D.s(a+1,2,"0");case"MMM":return u(t.monthsShort,a,d,3);case"MMMM":return u(d,a);case"D":return r.$D;case"DD":return D.s(r.$D,2,"0");case"d":return String(r.$W);case"dd":return u(t.weekdaysMin,r.$W,l,2);case"ddd":return u(t.weekdaysShort,r.$W,l,3);case"dddd":return l[r.$W];case"H":return String(o);case"HH":return D.s(o,2,"0");case"h":return h(1);case"hh":return h(2);case"a":return b(o,s,!0);case"A":return b(o,s,!1);case"m":return String(s);case"mm":return D.s(s,2,"0");case"s":return String(r.$s);case"ss":return D.s(r.$s,2,"0");case"SSS":return D.s(r.$ms,3,"0");case"Z":return i}return null}(e)||i.replace(":","")}))},f.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},f.diff=function(n,h,g){var b,m=this,p=D.p(h),f=E(n),y=(f.utcOffset()-this.utcOffset())*r,v=this-f,x=function(){return D.m(m,f)};switch(p){case u:b=x()/12;break;case d:b=x();break;case c:b=x()/3;break;case l:b=(v-y)/6048e5;break;case a:b=(v-y)/864e5;break;case s:b=v/t;break;case o:b=v/r;break;case i:b=v/e;break;default:b=v}return g?b:D.a(b)},f.daysInMonth=function(){return this.endOf(d).$D},f.$locale=function(){return x[this.$L]},f.locale=function(e,r){if(!e)return this.$L;var t=this.clone(),n=$(e,r,!0);return n&&(t.$L=n),t},f.clone=function(){return D.w(this.$d,this)},f.toDate=function(){return new Date(this.valueOf())},f.toJSON=function(){return this.isValid()?this.toISOString():null},f.toISOString=function(){return this.$d.toISOString()},f.toString=function(){return this.$d.toUTCString()},p}(),B=C.prototype;return E.prototype=B,[["$ms",n],["$s",i],["$m",o],["$H",s],["$W",a],["$M",d],["$y",u],["$D",h]].forEach((function(e){B[e[1]]=function(r){return this.$g(r,e[0],e[1])}})),E.extend=function(e,r){return e.$i||(e(r,C,E),e.$i=!0),E},E.locale=$,E.isDayjs=F,E.unix=function(e){return E(1e3*e)},E.en=x[v],E.Ls=x,E.p={},E}();var zo=N(ko.exports),Oo={exports:{}};Oo.exports=function(){var e={LTS:"h:mm:ss A",LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D, YYYY",LLL:"MMMM D, YYYY h:mm A",LLLL:"dddd, MMMM D, YYYY h:mm A"},r=/(\[[^[]*\])|([-_:/.,()\s]+)|(A|a|YYYY|YY?|MM?M?M?|Do|DD?|hh?|HH?|mm?|ss?|S{1,3}|z|ZZ?)/g,t=/\d\d/,n=/\d\d?/,i=/\d*[^-_:/,()\s\d]+/,o={},s=function(e){return(e=+e)+(e>68?1900:2e3)},a=function(e){return function(r){this[e]=+r}},l=[/[+-]\d\d:?(\d\d)?|Z/,function(e){(this.zone||(this.zone={})).offset=function(e){if(!e)return 0;if("Z"===e)return 0;var r=e.match(/([+-]|\d\d)/g),t=60*r[1]+(+r[2]||0);return 0===t?0:"+"===r[0]?-t:t}(e)}],d=function(e){var r=o[e];return r&&(r.indexOf?r:r.s.concat(r.f))},c=function(e,r){var t,n=o.meridiem;if(n){for(var i=1;i<=24;i+=1)if(e.indexOf(n(i,0,r))>-1){t=i>12;break}}else t=e===(r?"pm":"PM");return t},u={A:[i,function(e){this.afternoon=c(e,!1)}],a:[i,function(e){this.afternoon=c(e,!0)}],S:[/\d/,function(e){this.milliseconds=100*+e}],SS:[t,function(e){this.milliseconds=10*+e}],SSS:[/\d{3}/,function(e){this.milliseconds=+e}],s:[n,a("seconds")],ss:[n,a("seconds")],m:[n,a("minutes")],mm:[n,a("minutes")],H:[n,a("hours")],h:[n,a("hours")],HH:[n,a("hours")],hh:[n,a("hours")],D:[n,a("day")],DD:[t,a("day")],Do:[i,function(e){var r=o.ordinal,t=e.match(/\d+/);if(this.day=t[0],r)for(var n=1;n<=31;n+=1)r(n).replace(/\[|\]/g,"")===e&&(this.day=n)}],M:[n,a("month")],MM:[t,a("month")],MMM:[i,function(e){var r=d("months"),t=(d("monthsShort")||r.map((function(e){return e.slice(0,3)}))).indexOf(e)+1;if(t<1)throw new Error;this.month=t%12||t}],MMMM:[i,function(e){var r=d("months").indexOf(e)+1;if(r<1)throw new Error;this.month=r%12||r}],Y:[/[+-]?\d+/,a("year")],YY:[t,function(e){this.year=s(e)}],YYYY:[/\d{4}/,a("year")],Z:l,ZZ:l};function h(t){var n,i;n=t,i=o&&o.formats;for(var s=(t=n.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g,(function(r,t,n){var o=n&&n.toUpperCase();return t||i[n]||e[n]||i[o].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g,(function(e,r,t){return r||t.slice(1)}))}))).match(r),a=s.length,l=0;l<a;l+=1){var d=s[l],c=u[d],h=c&&c[0],g=c&&c[1];s[l]=g?{regex:h,parser:g}:d.replace(/^\[|\]$/g,"")}return function(e){for(var r={},t=0,n=0;t<a;t+=1){var i=s[t];if("string"==typeof i)n+=i.length;else{var o=i.regex,l=i.parser,d=e.slice(n),c=o.exec(d)[0];l.call(r,c),e=e.replace(c,"")}}return function(e){var r=e.afternoon;if(void 0!==r){var t=e.hours;r?t<12&&(e.hours+=12):12===t&&(e.hours=0),delete e.afternoon}}(r),r}}return function(e,r,t){t.p.customParseFormat=!0,e&&e.parseTwoDigitYear&&(s=e.parseTwoDigitYear);var n=r.prototype,i=n.parse;n.parse=function(e){var r=e.date,n=e.utc,s=e.args;this.$u=n;var a=s[1];if("string"==typeof a){var l=!0===s[2],d=!0===s[3],c=l||d,u=s[2];d&&(u=s[2]),o=this.$locale(),!l&&u&&(o=t.Ls[u]),this.$d=function(e,r,t){try{if(["x","X"].indexOf(r)>-1)return new Date(("X"===r?1e3:1)*e);var n=h(r)(e),i=n.year,o=n.month,s=n.day,a=n.hours,l=n.minutes,d=n.seconds,c=n.milliseconds,u=n.zone,g=new Date,b=s||(i||o?1:g.getDate()),m=i||g.getFullYear(),p=0;i&&!o||(p=o>0?o-1:g.getMonth());var f=a||0,y=l||0,v=d||0,x=c||0;return u?new Date(Date.UTC(m,p,b,f,y,v,x+60*u.offset*1e3)):t?new Date(Date.UTC(m,p,b,f,y,v,x)):new Date(m,p,b,f,y,v,x)}catch(e){return new Date("")}}(r,a,n),this.init(),u&&!0!==u&&(this.$L=this.locale(u).$L),c&&r!=this.format(a)&&(this.$d=new Date("")),o={}}else if(a instanceof Array)for(var g=a.length,b=1;b<=g;b+=1){s[1]=a[b-1];var m=t.apply(this,s);if(m.isValid()){this.$d=m.$d,this.$L=m.$L,this.init();break}b===g&&(this.$d=new Date(""))}else i.call(this,e)}}}();var So=N(Oo.exports),_o={exports:{}};_o.exports=function(e,r,t){r.prototype.isBetween=function(e,r,n,i){var o=t(e),s=t(r),a="("===(i=i||"()")[0],l=")"===i[1];return(a?this.isAfter(o,n):!this.isBefore(o,n))&&(l?this.isBefore(s,n):!this.isAfter(s,n))||(a?this.isBefore(o,n):!this.isAfter(o,n))&&(l?this.isAfter(s,n):!this.isBefore(s,n))}};var To=N(_o.exports),Lo={exports:{}};Lo.exports=function(e,r){r.prototype.isSameOrAfter=function(e,r){return this.isSame(e,r)||this.isAfter(e,r)}};var jo=N(Lo.exports),Yo={exports:{}};Yo.exports=function(e,r){r.prototype.isSameOrBefore=function(e,r){return this.isSame(e,r)||this.isBefore(e,r)}};var Po,Ro,Io=N(Yo.exports),Ho={exports:{}};Ho.exports=(Po={year:0,month:1,day:2,hour:3,minute:4,second:5},Ro={},function(e,r,t){var n,i=function(e,r,t){void 0===t&&(t={});var n=new Date(e),i=function(e,r){void 0===r&&(r={});var t=r.timeZoneName||"short",n=e+"|"+t,i=Ro[n];return i||(i=new Intl.DateTimeFormat("en-US",{hour12:!1,timeZone:e,year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit",timeZoneName:t}),Ro[n]=i),i}(r,t);return i.formatToParts(n)},o=function(e,r){for(var n=i(e,r),o=[],s=0;s<n.length;s+=1){var a=n[s],l=a.type,d=a.value,c=Po[l];c>=0&&(o[c]=parseInt(d,10))}var u=o[3],h=24===u?0:u,g=o[0]+"-"+o[1]+"-"+o[2]+" "+h+":"+o[4]+":"+o[5]+":000",b=+e;return(t.utc(g).valueOf()-(b-=b%1e3))/6e4},s=r.prototype;s.tz=function(e,r){void 0===e&&(e=n);var i=this.utcOffset(),o=this.toDate(),s=o.toLocaleString("en-US",{timeZone:e}),a=Math.round((o-new Date(s))/1e3/60),l=t(s,{locale:this.$L}).$set("millisecond",this.$ms).utcOffset(15*-Math.round(o.getTimezoneOffset()/15)-a,!0);if(r){var d=l.utcOffset();l=l.add(i-d,"minute")}return l.$x.$timezone=e,l},s.offsetName=function(e){var r=this.$x.$timezone||t.tz.guess(),n=i(this.valueOf(),r,{timeZoneName:e}).find((function(e){return"timezonename"===e.type.toLowerCase()}));return n&&n.value};var a=s.startOf;s.startOf=function(e,r){if(!this.$x||!this.$x.$timezone)return a.call(this,e,r);var n=t(this.format("YYYY-MM-DD HH:mm:ss:SSS"),{locale:this.$L});return a.call(n,e,r).tz(this.$x.$timezone,!0)},t.tz=function(e,r,i){var s=i&&r,a=i||r||n,l=o(+t(),a);if("string"!=typeof e)return t(e).tz(a);var d=function(e,r,t){var n=e-60*r*1e3,i=o(n,t);if(r===i)return[n,r];var s=o(n-=60*(i-r)*1e3,t);return i===s?[n,i]:[e-60*Math.min(i,s)*1e3,Math.max(i,s)]}(t.utc(e,s).valueOf(),l,a),c=d[0],u=d[1],h=t(c).utcOffset(u);return h.$x.$timezone=a,h},t.tz.guess=function(){return Intl.DateTimeFormat().resolvedOptions().timeZone},t.tz.setDefault=function(e){n=e}});var Wo,Vo=N(Ho.exports);zo.extend(To),zo.extend(Io),zo.extend(jo),zo.extend(So),zo.extend(Vo),function(e){e.generateDays=e=>{const r=e.startOf("month"),t=zo(r).startOf("week");return No(t).map((e=>Ko(e)))},e.generateDaysForCurrentWeek=e=>{const r=e.startOf("week");return Ko(r)},e.generateMonths=e=>{const r=[];for(let t=0;t<12;t++){const n=e.month(t);r.push(zo(n))}return r},e.generateDecadeOfYears=e=>{const r=e.year(),t=10*Math.floor(r/10),n=e.year(t),i=[n.subtract(1,"year"),n];for(let e=1;e<11;e++)i.push(n.add(e,"year"));return i},e.getStartEndDecade=e=>{const r=10*Math.floor(+e.format("YYYY")/10);return{beginDecade:r,endDecade:+zo(`${r+9}-01-01`).format("YYYY")}},e.convertTo12HourFormat=e=>{const r=zo(e,"HH:mm");return r.isValid()?r.format("h:mm a"):""},e.isWithinRange=(e,r,t,n="day")=>!r&&!t||(r&&t?e.isBetween(r,t,n,"[]"):r?e.isSameOrAfter(r,n):e.isSameOrBefore(t,n)),e.isPreviousMonthWithinRange=(r,t)=>e.isWithinRange(r.subtract(1,"month"),t,void 0,"month"),e.isPreviousYearWithinRange=(r,t)=>e.isWithinRange(r.subtract(1,"year"),t,void 0,"year"),e.isPreviousDecadeWithinRange=(r,t)=>{const{beginDecade:n}=e.getStartEndDecade(r);return e.isWithinRange(r.year(n).subtract(1,"year"),t,void 0,"year")},e.isNextMonthWithinRange=(r,t)=>e.isWithinRange(r.add(1,"month"),void 0,t,"month"),e.isNextYearWithinRange=(r,t)=>e.isWithinRange(r.add(1,"year"),void 0,t,"year"),e.isNextDecadeWithinRange=(r,t)=>{const{endDecade:n}=e.getStartEndDecade(r);return e.isWithinRange(r.year(n).add(1,"year"),void 0,t,"year")},e.getWeekStartEnd=e=>({start:e.startOf("week").format("YYYY-MM-DD"),end:e.endOf("week").format("YYYY-MM-DD")}),e.getFixedRangeStartEnd=(e,r)=>({start:e.format("YYYY-MM-DD"),end:e.add(r-1,"day").format("YYYY-MM-DD")}),e.isDisabledDay=(r,t,n,i)=>{const o=e.isWithinRange(r,n?zo(n):void 0,i?zo(i):void 0),s=t&&t.includes(r.format("YYYY-MM-DD"));return!o||!!s}}(Wo||(Wo={}));const No=e=>{const r=[e];for(let t=1;t<6;t++){const n=e.add(t,"week");r.push(n)}return r},Ko=e=>{const r=[];for(let t=0;t<7;t++){const n=e.add(t,"day");r.push(n)}return r},Uo=[1,3,5,7,8,10,12],Zo=[4,6,9,11];var Xo,qo,Jo;!function(e){e.clampDay=(r,t,n)=>{const i=parseInt(r),o=parseInt(t),s=parseInt(n);return 0==i?"1":Uo.includes(o)?Math.min(i,31).toString():Zo.includes(o)?Math.min(i,30).toString():2===o?e.isLeapYear(s)?Math.min(i,29).toString():Math.min(i,28).toString():r},e.clampMonth=e=>{const r=parseInt(e);return 0==r?"1":r>12?"12":e},e.isLeapYear=e=>e%4==0&&e%100!=0||e%400==0,e.getTimeDiffInMinutes=(e,r,t="HH:mm")=>{const n=zo(e,t);return zo(r,t).diff(n,"minute")},e.toDayjs=e=>e?zo(e):zo(),e.addMinutesToTime=(e,r,t="HH:mm")=>zo(e,t).add(r,"minutes").format(t),e.isSame=(e,r,t="day")=>zo(e).isSame(zo(r),t)}(Xo||(Xo={})),function(e){e.isDateDisabled=(e,r)=>{const{disabledDates:t,minDate:n,maxDate:i}=r;return!!(e&&t&&t.length&&t.includes(e))||(!(!n||!zo(e).isBefore(n,"day"))||!(!i||!zo(e).isAfter(i,"day")))},e.sanitizeInput=e=>{if(e){if(zo(e).isValid())return e}return""}}(qo||(qo={})),function(e){e.generate=()=>Math.random().toString(36).substring(2,9)}(Jo||(Jo={}));const Go=i.createContext({focusedIndex:-1,setFocusedIndex:()=>{}}),Qo=({children:e})=>{const[t,n]=o(-1);return r(Go.Provider,{value:{focusedIndex:t,setFocusedIndex:n},children:e})},es=p.div`
    display: inline-block;
    position: relative;
    width: ${({$size:e})=>e?`${e}px`:"1em"};
    height: ${({$size:e})=>e?`${e}px`:"1em"};
    color: ${e=>e.$color||"currentColor"};
`,rs=y`
	0% {
	  transform: rotate(0deg);
	}
	100% {
	  transform: rotate(360deg);
	}
`,ts=p.div`
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
    animation: ${rs} 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
`,ns=p(ts)`
    animation-delay: -0.45s;
`,is=p(ts)`
    animation-delay: -0.3s;
`,os=p(ts)`
    animation-delay: -0.15s;
`,ss=({color:t,className:n,size:i})=>e(es,{className:n,$size:i,$color:t,"data-testid":"component-loading-spinner",children:[r(ts,{id:"inner1"}),r(ns,{id:"inner2"}),r(is,{id:"inner3"}),r(os,{id:"inner4"})]}),as=f`
    outline-offset: -1px;
    outline: ${sn["width-020"]} ${sn.solid} ${tn["border-focus"]};
`,ls=f`
    outline-color: ${tn["border-focus"]};
`,ds=f`
    outline-color: ${tn["border-disabled"]};
`,cs=f`
    outline-color: ${tn["border-error-focus"]};
`,us=p.div`
    border: ${sn["width-010"]} ${sn.solid} ${tn.border};
    border-radius: ${ln.sm};
    background: ${tn.bg};

    :focus-within {
        ${as}
    }
    ${e=>e.$focused&&as}

    ${e=>e.$readOnly?f`
                border-color: transparent;
                padding: 0;
                background: transparent !important;

                :focus-within {
                    ${ls}
                }
                ${e.$focused&&ls}
            `:e.$disabled?f`
                background: ${tn["bg-disabled"]};
                cursor: not-allowed;

                :focus-within {
                    ${ds}
                }
                ${e.$focused&&ds}
            `:e.$error?f`
                border-color: ${tn["border-error"]};

                :focus-within {
                    ${cs}
                }
                ${e.$focused&&cs}
            `:void 0}
`;p(us)`
    display: flex;
    align-items: center;
    position: relative;
    height: max-content;
    width: 100%;
    padding: 0 ${an["spacing-16"]};
    flex-direction: ${e=>"right"===e.$position?"row-reverse":"row"};
`;const hs=p.input`
    ${e=>"small"===e.$variant?nn["body-md-regular"]:nn["body-baseline-regular"]}
    color: ${tn.text};
    display: block;
    background: transparent;
    border: none;
    outline: none;
    box-shadow: none;
    padding: 0;
    margin: 0;

    :disabled {
        color: ${tn["text-subtler"]};

        :hover {
            cursor: not-allowed;
        }
    }

    ::placeholder,
    ::-webkit-input-placeholder {
        color: ${tn["text-subtler"]};
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
`,gs=p.button`
    background: transparent;
    border: none;
    outline: none;

    :focus,
    :active {
        outline: none;
    }

    :focus-visible {
        outline: ${sn["width-010"]} ${sn.solid}
            ${tn["border-focus"]};
        border-radius: ${ln.sm};
    }
`;p.div`
    overflow: hidden;
    border: ${sn["width-010"]} ${sn.solid} ${tn.border};
    border-radius: ${ln.sm};
    background: ${tn.bg};

    min-width: 23rem;
    ${e=>e.$width&&`width: ${e.$width}px;`}
    max-height: 27rem;
    overflow-y: auto;

    ${e=>"small"===e.$variant?nn["body-md-regular"]:nn["body-baseline-regular"]}

    ${cn.MaxWidth.sm} {
        min-width: unset;
        width: calc(100vw - ${dn["sm-margin"]} * 2);
        max-height: 15rem;
    }

    ${cn.MaxWidth.xs} {
        width: calc(100vw - ${dn["xs-margin"]} * 2);
    }

    ${cn.MaxWidth.xxs} {
        width: calc(100vw - ${dn["xxs-margin"]} * 2);
    }

    ::-webkit-scrollbar {
        width: 14px;
    }

    ::-webkit-scrollbar-track {
        background: transparent;
    }

    ::-webkit-scrollbar-thumb {
        background: ${tn["bg-inverse-subtlest"]};
        border: 5px solid transparent;
        border-radius: 9999px;
        background-clip: padding-box;
    }
`,p.div`
    background: transparent;
    padding: ${an["spacing-8"]};
`,p.ul`
    list-style-type: none;
`,p.li`
    display: flex;
    align-items: flex-start;
    gap: ${an["spacing-8"]};
    padding: ${an["spacing-12"]} ${an["spacing-8"]};
    cursor: pointer;

    outline: none;

    ${e=>e.$active&&e.$selected?f`
                background: ${tn["bg-hover"]};
            `:e.$active?f`
                background: ${tn["bg-hover-subtle"]};
            `:void 0}
`,p($)`
    flex-shrink: 0;
    height: 1lh;
    width: 1rem;
    color: ${tn["icon-selected"]};
`,p.div`
    flex-shrink: 0;
    height: 1lh;
    width: 1rem;
`,p(F)`
    flex-shrink: 0;
    height: 1lh;
    width: 1lh;
    color: ${tn["icon-selected"]};
`,p(w)`
    flex-shrink: 0;
    height: 1lh;
    width: 1lh;
    color: ${tn["icon-primary-subtlest"]};
`,p.div`
    width: 100%;
    display: flex;
    justify-content: flex-end;
`;const bs=p(gs)`
    cursor: pointer;
    overflow: hidden;
    color: ${tn["text-primary"]};
    font-size: inherit;
`;p(bs)`
    ${nn["body-baseline-semibold"]}
`,p(bs)`
    ${nn["body-md-semibold"]}
    padding: ${an["spacing-8"]} ${an["spacing-8"]};
`,p.div`
    width: 100%;
    display: flex;
    padding: ${an["spacing-12"]} ${an["spacing-16"]};
    align-items: center;
`,p(x)`
    margin-right: ${an["spacing-4"]};
    color: ${tn["icon-error"]};
    height: 1em;
    width: 1em;
`,p(ss)`
    margin-right: ${an["spacing-8"]};
    color: ${tn.icon};
`;const ms=p.button`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: ${an["spacing-24"]};
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
                background-color: ${tn["bg-hover-neutral"]};
            `}
    }
`,ps=i.forwardRef(((e,t)=>{var{children:n,focusHighlight:i=!0,focusOutline:o="none",type:s="button"}=e,a=W(e,["children","focusHighlight","focusOutline","type"]);return r(ms,Object.assign({ref:t,$outline:o,$highlight:i,type:s},a,{children:n}))})),fs=p.div`
    background: ${tn["bg-strong"]};
    border-radius: ${ln.sm};
    display: flex;
    align-items: center;

    ${e=>"small"===e.$variant?nn["body-md-regular"]:nn["body-baseline-regular"]}
`,ys=p.label`
    flex: 1;
    display: flex;
    align-items: center;
    gap: ${an["spacing-8"]};
    padding: ${e=>"small"===e.$variant?f`
                  ${an["spacing-8"]} ${an["spacing-16"]}
              `:f`10px ${an["spacing-16"]}`};
`,vs=p(hs)`
    flex: 1;
`,xs=p(D)`
    color: ${tn.icon};
    flex-shrink: 0;
    height: 1em;
    width: 1em;
`,ws=p(ps)`
    flex-shrink: 0;
    align-self: stretch;
    box-sizing: content-box;
    padding: ${an["spacing-8"]};
    margin-left: -${an["spacing-8"]};
    color: ${tn.icon};
    cursor: pointer;
    font-size: inherit;

    svg {
        flex-shrink: 0;
        height: 1em;
        width: 1em;
    }
`;b(((t,n)=>{var{value:i,variant:o,onClear:s}=t,a=W(t,["value","variant","onClear"]);return e(fs,{$variant:o,children:[e(ys,{$variant:o,children:[r(xs,{"aria-hidden":!0}),r(vs,Object.assign({ref:n,value:i,$variant:o},a))]}),i&&r(ws,{"aria-label":"Clear search",focusOutline:"browser",onClick:s,children:r(E,{"aria-hidden":!0})})]})}));const Fs=p(gs)`
    display: flex;
    align-items: center;
    gap: ${an["spacing-8"]};
    width: 100%;
    height: calc(3rem - 2px); // exclude top and bottom borders
    padding: ${an["spacing-16"]};

    ${e=>"small"===e.$variant?nn["body-md-regular"]:nn["body-baseline-regular"]}

    :disabled {
        cursor: not-allowed;
    }
`,$s=p.div`
    display: flex;
    align-items: center;
    transform: rotate(${e=>e.$expanded?180:0}deg);
    transition: transform ${on["duration-250"]} ${on["ease-default"]};

    svg {
        color: ${tn.icon};
        height: 1em;
        width: 1em;
    }
`,Es=b((({children:t,disabled:n,expanded:i,listboxId:o,popupRole:s,readOnly:a,variant:l},d)=>e(Fs,{ref:d,type:"button","aria-expanded":i,"aria-haspopup":s,"data-testid":"selector",disabled:n,"aria-controls":o,$variant:l,children:[t,!a&&r($s,{$expanded:i,$variant:l,children:r(C,{"aria-hidden":!0})})]}))),Ds={collections:{default:{Button:{"button-radius":Gt.sm,"button-default-colour-bg":At["bg-primary"],"button-default-colour-bg-hover":At["bg-primary-hover"],"button-default-colour-text":At["text-inverse"],"button-secondary-colour-border":At["border-primary"],"button-secondary-colour-text":At["text-primary"],"button-light-colour-text":At["text-primary"],"button-link-colour-text":At["text-primary"]}},pa:{Button:{"button-radius":Gt.full,"button-default-colour-bg":At["bg-primary"],"button-default-colour-bg-hover":At["bg-primary-hover"],"button-default-colour-text":At["text-inverse"],"button-secondary-colour-border":At["border-primary"],"button-secondary-colour-text":At["text-primary"],"button-light-colour-text":At["text-primary"],"button-link-colour-text":At["text-primary"]}}},defaultValue:"default"},Cs=(e,r)=>t=>{var n,i;const o=t.theme,s=ft(Ds,null==o?void 0:o.componentScheme);return Bs((null===(i=null===(n=null==o?void 0:o.componentOverrides)||void 0===n?void 0:n[e])||void 0===i?void 0:i[r])||s[e][r],t)},Bs=(e,r)=>{switch(typeof e){case"function":return e(r);case"number":return e+"px";case"string":return e}},As=Cs("Button","button-radius"),Ms=Cs("Button","button-default-colour-bg"),ks=Cs("Button","button-default-colour-bg-hover"),zs=Cs("Button","button-default-colour-text"),Os=Cs("Button","button-secondary-colour-border"),Ss=Cs("Button","button-secondary-colour-text"),_s=Cs("Button","button-light-colour-text"),Ts=Cs("Button","button-link-colour-text");p.button`
    padding: ${an["spacing-8"]} ${an["spacing-16"]};
    min-width: 4rem;
    border: ${sn["width-010"]} ${sn.solid} transparent;
    transition: all ${on["duration-250"]} ${on["ease-default"]};
    border-radius: ${As};
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;

    // -----------------------------------------------------------------------------
    // BUTTON STYLE + TEXT COLOR
    // -----------------------------------------------------------------------------
    ${e=>{switch(e.$buttonStyle){case"secondary":return f`
                    background-color: ${tn.Primitive.white};
                    border-color: ${e.$buttonIsDanger?tn["border-error-strong"]:Os};

                    color: ${e.$buttonIsDanger?tn["text-error"]:Ss};

                    &:hover,
                    &:active {
                        background-color: ${tn["bg-hover-neutral"]};
                    }
                `;case"light":return f`
                    background-color: ${tn.bg};
                    border-color: ${tn.border};

                    color: ${e.$buttonIsDanger?tn["text-error"]:_s};

                    &:hover,
                    &:active {
                        background-color: ${tn["bg-hover-neutral"]};
                    }
                `;case"link":return f`
                    background-color: transparent;

                    color: ${e.$buttonIsDanger?tn["text-error"]:Ts};
                    &:hover,
                    &:active {
                        background-color: ${tn["bg-hover-neutral"]};
                    }
                `;case"disabled":return f`
                    background-color: ${tn["bg-disabled"]};

                    cursor: not-allowed;

                    &:hover {
                        box-shadow: none;
                    }

                    color: ${tn["text-disabled"]};
                `;default:return f`
                    background-color: ${e.$buttonIsDanger?tn["bg-error-strong"]:Ms};};

                    ${cn.MaxWidth.sm} {
                        width: 100%;
                    }

                    color: ${zs}};

                    &:hover,
                    &:active {
                        background-color: ${e.$buttonIsDanger?tn["bg-error-strong-hover"]:ks}
                        };
                    }
                `}}}

    // -----------------------------------------------------------------------------
	// BUTTON SIZE + TEXT SIZE
	// -----------------------------------------------------------------------------
	${e=>{switch(e.$buttonSizeStyle){case"small":return f`
                    height: 2.5rem;
                    ${nn["body-md-semibold"]}

                    ${cn.MaxWidth.xxs} {
                        height: auto;
                    }
                `;case"large":return f`
                    height: 4rem;
                    ${nn["heading-md-semibold"]}

                    ${cn.MaxWidth.xxs} {
                        height: auto;
                    }
                `;default:return f`
                    height: 3rem;
                    ${nn["heading-xs-semibold"]}

                    ${cn.MaxWidth.xxs} {
                        height: auto;
                    }
                `}}}
`,p(ss)`
    margin-right: 0.5rem;
`,p.li`
    display: ${e=>e.$visible?"flex":"none"};
`,p.div`
    flex: 1;
    display: flex;
    align-items: flex-start;
    gap: ${an["spacing-8"]};
    padding: ${an["spacing-12"]} ${an["spacing-8"]};
    cursor: ${e=>e.$toggleable?"default":"pointer"};
    overflow: hidden; // required for label to truncate properly

    outline: none;

    ${e=>e.$active&&f`
            background: ${tn["bg-hover"]};
        `}
`,p.div`
    height: 1px;
    width: calc((1lh + ${an["spacing-8"]}) * ${e=>e.$level});
`,p.div`
    width: 1lh;
    height: 1lh;
    color: ${tn["icon-primary"]};
    cursor: pointer;

    svg {
        width: 1lh;
        height: 1lh;
        transition: transform ${on["duration-350"]}
            ${on["ease-standard"]};

        ${e=>{if(e.$expanded)return f`
                    transform: rotate(90deg);
                `}}
    }
`,p.div`
    width: 1lh;
    height: 1lh;
    margin-right: ${an["spacing-8"]};
`,p.div`
    flex-shrink: 0;
    height: 1lh;
    width: ${e=>e.$hasNestedSiblings?"1lh":an["spacing-16"]};

    display: flex;
    justify-content: center;
`,p(B)`
    flex-shrink: 0;
    height: 1lh;
    width: 1lh;
    color: ${tn["icon-selected"]};
`;const Ls=e=>"small"===e?2.5:3;p.div`
    position: relative;
    width: 100%;
    ${e=>{const r=Ls(e.$variant);return f`
            min-height: ${r}rem;
            height: ${r}rem; // Need this to persist the height when expanding or collapsing list
        `}}
`;const js=f`
    display: flex;
    position: relative;
    align-items: center;
    justify-content: space-between;
    padding: 0 ${an["spacing-16"]};
    // exclude top and bottom borders
    height: calc(${e=>Ls(e.$variant)}rem - 2px);
    width: 100%;
    border-radius: ${ln.sm};
    border: none;
    background: transparent;

    :focus,
    :active {
        outline: none;
    }

    :focus-visible {
        outline: 2px solid ${tn["border-focus"]};
    }
`,Ys=p.button`
    ${js}
    cursor: pointer;
`;p.div`
    ${js}
`;const Ps=y`
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
    border: ${sn["width-010"]} ${sn.solid} ${tn.border};
    border-radius: ${ln.sm};
    background: ${tn.bg};
    overflow: hidden;

    :focus-within {
        border-color: ${tn["border-focus"]};
        box-shadow: 0px 0px 4px 0px
            rgb(from ${tn["border-focus"]} r g b / 50%) inset; // TODO: confirm shadow
    }

    ${e=>e.expanded?f`
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                z-index: 2;
            `:f`
                animation: ${Ps} 0.5s ease-in-out;
            `}

    ${e=>e.disabled?f`
                background: ${tn["bg-disabled"]};

                ${Ys} {
                    cursor: not-allowed;
                }

                :focus-within {
                    border-color: ${tn.border};
                    box-shadow: none;
                }
            `:e.$readOnly?f`
                border: none;
                background: transparent !important;

                ${Ys} {
                    padding: 0;
                }

                :focus-within {
                    border: none;
                    box-shadow: none;
                }
            `:e.error?f`
                border-color: ${tn["border-error"]};

                :focus-within {
                    border-color: ${tn["border-error"]};
                    box-shadow: 0px 0px 4px 0px
                        rgb(from ${tn["border-error"]} r g b / 50%) inset; // TODO: confirm shadow
                }
            `:void 0}
`,p.div`
    transform: rotate(${e=>e.expanded?180:0}deg);
    transition: transform ${on["duration-250"]} ${on["ease-default"]};
    margin-left: ${an["spacing-16"]};
`,p(C)`
    color: ${tn.icon};
`,p.div`
    height: 1px;
    background: ${tn.border};
    margin: 0 ${an["spacing-8"]};
`;const Rs=p.div`
    display: flex;
    flex: 1;
    word-break: break-all;
    ${e=>{if(e.$disabled)return f`
                color: ${tn["text-disabled"]};
            `}}
`,Is=p.div`
    ${e=>"small"===e.$variant?nn["body-md-regular"]:nn["body-baseline-regular"]}
    text-align: left;
    ${e=>{if("middle"!==e.truncateType)return f`
                    ${un(1)}
                `}}
    overflow: hidden;
`;var Hs;p(Is)`
    color: ${tn["text-subtler"]};
`,function(e){e.Ready="overlay-context-ready",e.Change="overlay-context-change"}(Hs||(Hs={}));const Ws=p.div`
    display: flex;
    flex-direction: column;
`,Vs=e=>"right"===e?"bottom-end":"bottom-start",Ns=({enabled:n,isOpen:i,onOpen:a,onClose:d,onDismiss:c,renderElement:u,renderDropdown:h,customZIndex:g,clickToToggle:b=!1,offset:m=0,alignment:p="left",fitAvailableHeight:f})=>{var y;const x=v(),w=dn["sm-max"]({theme:x}),F=l(null),$=l(null),{width:E=0}=function(e){void 0===e&&(e={});var r=e.skipOnMount,t=void 0!==r&&r,n=e.refreshMode,i=e.refreshRate,s=void 0===i?1e3:i,a=e.refreshOptions,d=e.handleWidth,c=void 0===d||d,u=e.handleHeight,h=void 0===u||u,g=e.targetRef,b=e.observerOptions,m=e.onResize,p=l(t),f=l(null),y=null!=g?g:f,v=l(),x=o({width:void 0,height:void 0}),w=x[0],F=x[1];return _i((function(){if(!ki()){var e=Oi(m,F,c,h);v.current=Ai((function(r){(c||h)&&r.forEach((function(r){var t=r&&r.contentRect||{},n=t.width,i=t.height;!p.current&&!ki()&&e({width:n,height:i}),p.current=!1}))}),n,s,a);var r=new window.ResizeObserver(v.current);return y.current&&r.observe(y.current,b),function(){r.disconnect();var e=v.current;e&&e.cancel&&e.cancel()}}}),[n,s,a,c,h,m,b,y.current]),In({ref:y},w)}({targetRef:F,handleHeight:!1}),D={name:"center",fn:({x:e,rects:r})=>{const t=0===e||e+r.floating.width===window.innerWidth,n=window.innerWidth<w;return{x:t&&n?(window.innerWidth-r.floating.width)/2:e}}},{refs:C,floatingStyles:B,context:H}=M({open:i,onOpenChange:(e,r,t)=>{"escape-key"===t?null==c||c():e&&!i?null==a||a():!e&&i&&(null==d||d(t))},whileElementsMounted:k,placement:Vs(p),middleware:[z(m),O(),S({limiter:_()}),T({apply({availableHeight:e}){$.current&&Object.assign($.current.style,{maxHeight:f?`${e}px`:void 0,overflowY:f?"hidden":void 0})}}),D]}),W=(()=>{const[e,r]=o(void 0),t=A();return s((()=>{if(!t)return void r(void 0);const e=e=>{r(e.zIndex)};return t.events.on(Hs.Change,e),t.events.emit(Hs.Ready),()=>t.events.off(Hs.Change,e)}),[t]),e})(),{isMounted:V,styles:N}=L(H,{initial:{opacity:0},open:{opacity:1},duration:300}),K=j(H,{enabled:n,toggle:b}),U=Y(H,{enabled:n}),{getReferenceProps:Z,getFloatingProps:X}=P([K,U]);return e(t,{children:[r("div",Object.assign({ref:e=>{F.current=e,C.setReference(e)}},Z(),{children:u()})),V&&r(R,{children:r(I,{context:H,modal:!1,initialFocus:$,returnFocus:!1,children:r("div",Object.assign({ref:C.setFloating,style:Object.assign(Object.assign({},B),{zIndex:null!==(y=null!=g?g:W)&&void 0!==y?y:50})},X(),{children:r(Ws,{ref:$,style:Object.assign({},N),inert:N.opacity<1?"":void 0,children:h({elementWidth:E})})}))})})]})},Ks=p.div`
    overflow: hidden;
    border: ${sn["width-010"]} ${sn.solid} ${tn.border};
    border-radius: ${ln.sm};
    background: ${tn.bg};
    padding: ${an["spacing-16"]};
    min-width: 23rem;

    ${cn.MaxWidth.sm} {
        min-width: unset;
        width: calc(100vw - ${dn["sm-margin"]} * 2);
        max-height: 15rem;
    }

    ${cn.MaxWidth.xs} {
        width: calc(100vw - ${dn["xs-margin"]} * 2);
    }

    ${cn.MaxWidth.xxs} {
        width: calc(100vw - ${dn["xxs-margin"]} * 2);
    }
`,Us=p.div`
    display: flex;
    align-items: baseline;
`,Zs=p.div`
    margin: 0 0.5rem;
`,Xs=p.div`
    ${e=>"small"===e.$variant?nn["body-md-regular"]:nn["body-baseline-regular"]}
    text-align: left;
    ${e=>{if("middle"!==e.truncateType)return f`
                    ${un(1)}
                `}}
    overflow: hidden;
`,qs=p(Xs)`
    color: ${tn["text-subtler"]};
`,Js=t=>{var{alignment:n="left",className:i,disabled:a,dropdownZIndex:d,error:c,histogramSlider:u,id:h,onBlur:g,onChange:b,onChangeEnd:m,optionTruncationType:p="end",placeholder:f="Select",rangeLabelPrefix:y,rangeLabelSuffix:v,readOnly:x,renderRangeLabel:w,value:F}=t,$=W(t,["alignment","className","disabled","dropdownZIndex","error","histogramSlider","id","onBlur","onChange","onChangeEnd","optionTruncationType","placeholder","rangeLabelPrefix","rangeLabelSuffix","readOnly","renderRangeLabel","value"]);const{interval:E,bins:D=[],renderEmptyView:C,ariaLabels:B}=u,[A,M]=o(K()),[k,z]=o(!1),[O,S]=o(!1),[_]=o((()=>Jo.generate())),T=D.map((e=>e.minValue)),L=Math.min(...T),j=l(null),Y=l(null),P=l(null),R=$["data-testid"]||"select-histogram";s((()=>{F!==A&&M(K())}),[F]);const I=e=>{M(e),null==b||b(e)},H=e=>{M(e),null==m||m(e)},V=()=>{O||k||S(!0)},N=e=>{O&&!k&&j.current&&!j.current.contains(e.relatedTarget)&&(S(!1),null==g||g())};function K(){return null!=F?F:[L,L+E]}const U=r=>w?w(r):e(mn.BodyBL,{children:[y,r,v]});return r(Qo,{children:r(Ns,{enabled:!x&&!a,isOpen:k,renderElement:()=>r(us,{className:i,"data-testid":R,id:h,ref:j,tabIndex:-1,onFocus:V,onBlur:N,$focused:O,$disabled:a,$readOnly:x,$error:c,children:r(Es,{ref:Y,disabled:a,expanded:k,listboxId:_,popupRole:"dialog",readOnly:x,variant:"default",children:r(Rs,{ref:P,$disabled:a,children:T&&0!==T.length?e(Us,{children:[U(A[0]),r(Zs,{children:"-"}),U(A[1])]}):r(qs,{truncateType:p,$variant:"default",children:f})})})}),renderDropdown:({elementWidth:e})=>r(Ks,{style:{width:e},children:r(Pn,{interval:E,value:A,bins:D,onChange:I,onChangeEnd:H,showRangeLabels:!1,renderEmptyView:C,ariaLabels:B})}),onOpen:()=>{z(!0)},onClose:()=>{z(!1)},onDismiss:()=>{var e;null===(e=Y.current)||void 0===e||e.focus(),z(!1)},clickToToggle:!0,offset:8,alignment:n,fitAvailableHeight:!0,customZIndex:d})})};export{Js as SelectHistogram};
//# sourceMappingURL=index.js.map
