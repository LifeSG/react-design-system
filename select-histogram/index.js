import{jsxs as e,jsx as r,Fragment as t}from"react/jsx-runtime";import*as n from"react";import i,{useState as o,useEffect as s,useMemo as a,useRef as l,isValidElement as d,createRef as c,cloneElement as u,PureComponent as h,useLayoutEffect as g,forwardRef as b}from"react";import{ExternalIcon as m}from"@lifesg/react-icons/external";import p,{css as f,keyframes as y,useTheme as v}from"styled-components";import{ExclamationCircleFillIcon as x}from"@lifesg/react-icons/exclamation-circle-fill";import{SquareIcon as w}from"@lifesg/react-icons/square";import{SquareTickFillIcon as $}from"@lifesg/react-icons/square-tick-fill";import{TickIcon as F}from"@lifesg/react-icons/tick";import{CrossIcon as D}from"@lifesg/react-icons/cross";import{MagnifierIcon as E}from"@lifesg/react-icons/magnifier";import{ChevronDownIcon as C}from"@lifesg/react-icons/chevron-down";import"@lifesg/react-icons/caret-right";import{MinusSquareFillIcon as M}from"@lifesg/react-icons/minus-square-fill";import{useFloatingTree as O,useFloating as k,autoUpdate as z,offset as B,flip as S,shift as A,limitShift as _,size as T,useTransitionStyles as L,useClick as j,useDismiss as Y,useInteractions as P,FloatingPortal as R,FloatingFocusManager as I}from"@floating-ui/react";import{findDOMNode as H}from"react-dom";function W(e,r){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(n=Object.getOwnPropertySymbols(e);i<n.length;i++)r.indexOf(n[i])<0&&Object.prototype.propertyIsEnumerable.call(e,n[i])&&(t[n[i]]=e[n[i]])}return t}"function"==typeof SuppressedError&&SuppressedError;var N="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};function V(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var K=Array.isArray,U="object"==typeof N&&N&&N.Object===Object&&N,Z=U,X="object"==typeof self&&self&&self.Object===Object&&self,q=Z||X||Function("return this")(),J=q.Symbol,G=J,Q=Object.prototype,ee=Q.hasOwnProperty,re=Q.toString,te=G?G.toStringTag:void 0;var ne=function(e){var r=ee.call(e,te),t=e[te];try{e[te]=void 0;var n=!0}catch(e){}var i=re.call(e);return n&&(r?e[te]=t:delete e[te]),i},ie=Object.prototype.toString;var oe=ne,se=function(e){return ie.call(e)},ae=J?J.toStringTag:void 0;var le=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":ae&&ae in Object(e)?oe(e):se(e)};var de=function(e){return null!=e&&"object"==typeof e},ce=le,ue=de;var he=function(e){return"symbol"==typeof e||ue(e)&&"[object Symbol]"==ce(e)},ge=K,be=he,me=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,pe=/^\w*$/;var fe=function(e,r){if(ge(e))return!1;var t=typeof e;return!("number"!=t&&"symbol"!=t&&"boolean"!=t&&null!=e&&!be(e))||(pe.test(e)||!me.test(e)||null!=r&&e in Object(r))};var ye=function(e){var r=typeof e;return null!=e&&("object"==r||"function"==r)},ve=le,xe=ye;var we,$e=function(e){if(!xe(e))return!1;var r=ve(e);return"[object Function]"==r||"[object GeneratorFunction]"==r||"[object AsyncFunction]"==r||"[object Proxy]"==r},Fe=q["__core-js_shared__"],De=(we=/[^.]+$/.exec(Fe&&Fe.keys&&Fe.keys.IE_PROTO||""))?"Symbol(src)_1."+we:"";var Ee=function(e){return!!De&&De in e},Ce=Function.prototype.toString;var Me=function(e){if(null!=e){try{return Ce.call(e)}catch(e){}try{return e+""}catch(e){}}return""},Oe=$e,ke=Ee,ze=ye,Be=Me,Se=/^\[object .+?Constructor\]$/,Ae=Function.prototype,_e=Object.prototype,Te=Ae.toString,Le=_e.hasOwnProperty,je=RegExp("^"+Te.call(Le).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");var Ye=function(e,r){return null==e?void 0:e[r]},Pe=function(e){return!(!ze(e)||ke(e))&&(Oe(e)?je:Se).test(Be(e))},Re=Ye;var Ie=function(e,r){var t=Re(e,r);return Pe(t)?t:void 0},He=Ie(Object,"create"),We=He;var Ne=function(){this.__data__=We?We(null):{},this.size=0};var Ve=function(e){var r=this.has(e)&&delete this.__data__[e];return this.size-=r?1:0,r},Ke=He,Ue=Object.prototype.hasOwnProperty;var Ze=function(e){var r=this.__data__;if(Ke){var t=r[e];return"__lodash_hash_undefined__"===t?void 0:t}return Ue.call(r,e)?r[e]:void 0},Xe=He,qe=Object.prototype.hasOwnProperty;var Je=function(e){var r=this.__data__;return Xe?void 0!==r[e]:qe.call(r,e)},Ge=He;var Qe=function(e,r){var t=this.__data__;return this.size+=this.has(e)?0:1,t[e]=Ge&&void 0===r?"__lodash_hash_undefined__":r,this},er=Ne,rr=Ve,tr=Ze,nr=Je,ir=Qe;function or(e){var r=-1,t=null==e?0:e.length;for(this.clear();++r<t;){var n=e[r];this.set(n[0],n[1])}}or.prototype.clear=er,or.prototype.delete=rr,or.prototype.get=tr,or.prototype.has=nr,or.prototype.set=ir;var sr=or;var ar=function(){this.__data__=[],this.size=0};var lr=function(e,r){return e===r||e!=e&&r!=r};var dr=function(e,r){for(var t=e.length;t--;)if(lr(e[t][0],r))return t;return-1},cr=dr,ur=Array.prototype.splice;var hr=function(e){var r=this.__data__,t=cr(r,e);return!(t<0)&&(t==r.length-1?r.pop():ur.call(r,t,1),--this.size,!0)},gr=dr;var br=function(e){var r=this.__data__,t=gr(r,e);return t<0?void 0:r[t][1]},mr=dr;var pr=function(e){return mr(this.__data__,e)>-1},fr=dr;var yr=function(e,r){var t=this.__data__,n=fr(t,e);return n<0?(++this.size,t.push([e,r])):t[n][1]=r,this},vr=ar,xr=hr,wr=br,$r=pr,Fr=yr;function Dr(e){var r=-1,t=null==e?0:e.length;for(this.clear();++r<t;){var n=e[r];this.set(n[0],n[1])}}Dr.prototype.clear=vr,Dr.prototype.delete=xr,Dr.prototype.get=wr,Dr.prototype.has=$r,Dr.prototype.set=Fr;var Er=Dr,Cr=Ie(q,"Map"),Mr=sr,Or=Er,kr=Cr;var zr=function(e){var r=typeof e;return"string"==r||"number"==r||"symbol"==r||"boolean"==r?"__proto__"!==e:null===e};var Br=function(e,r){var t=e.__data__;return zr(r)?t["string"==typeof r?"string":"hash"]:t.map},Sr=Br;var Ar=function(e){var r=Sr(this,e).delete(e);return this.size-=r?1:0,r},_r=Br;var Tr=function(e){return _r(this,e).get(e)},Lr=Br;var jr=function(e){return Lr(this,e).has(e)},Yr=Br;var Pr=function(e,r){var t=Yr(this,e),n=t.size;return t.set(e,r),this.size+=t.size==n?0:1,this},Rr=function(){this.size=0,this.__data__={hash:new Mr,map:new(kr||Or),string:new Mr}},Ir=Ar,Hr=Tr,Wr=jr,Nr=Pr;function Vr(e){var r=-1,t=null==e?0:e.length;for(this.clear();++r<t;){var n=e[r];this.set(n[0],n[1])}}Vr.prototype.clear=Rr,Vr.prototype.delete=Ir,Vr.prototype.get=Hr,Vr.prototype.has=Wr,Vr.prototype.set=Nr;var Kr=Vr,Ur=Kr;function Zr(e,r){if("function"!=typeof e||null!=r&&"function"!=typeof r)throw new TypeError("Expected a function");var t=function(){var n=arguments,i=r?r.apply(this,n):n[0],o=t.cache;if(o.has(i))return o.get(i);var s=e.apply(this,n);return t.cache=o.set(i,s)||o,s};return t.cache=new(Zr.Cache||Ur),t}Zr.Cache=Ur;var Xr=Zr;var qr=function(e){var r=Xr(e,(function(e){return 500===t.size&&t.clear(),e})),t=r.cache;return r},Jr=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,Gr=/\\(\\)?/g,Qr=qr((function(e){var r=[];return 46===e.charCodeAt(0)&&r.push(""),e.replace(Jr,(function(e,t,n,i){r.push(n?i.replace(Gr,"$1"):t||e)})),r}));var et=function(e,r){for(var t=-1,n=null==e?0:e.length,i=Array(n);++t<n;)i[t]=r(e[t],t,e);return i},rt=K,tt=he,nt=J?J.prototype:void 0,it=nt?nt.toString:void 0;var ot=function e(r){if("string"==typeof r)return r;if(rt(r))return et(r,e)+"";if(tt(r))return it?it.call(r):"";var t=r+"";return"0"==t&&1/r==-1/0?"-0":t},st=ot;var at=K,lt=fe,dt=Qr,ct=function(e){return null==e?"":st(e)};var ut=he;var ht=function(e,r){return at(e)?e:lt(e,r)?[e]:dt(ct(e))},gt=function(e){if("string"==typeof e||ut(e))return e;var r=e+"";return"0"==r&&1/e==-1/0?"-0":r};var bt=function(e,r){for(var t=0,n=(r=ht(r,e)).length;null!=e&&t<n;)e=e[gt(r[t++])];return t&&t==n?e:void 0};var mt=V((function(e,r,t){var n=null==e?void 0:bt(e,r);return void 0===n?t:n}));const pt=(e,r,t)=>mt(t,r)||mt(e,r),ft=(e,r)=>{const t=r||e.defaultValue;return mt(e.collections,t)},yt={collections:{lifesg:{"duration-150":"150ms","duration-250":"250ms","duration-350":"350ms","duration-500":"500ms","duration-800":"800ms","duration-1000":"1000ms","ease-default":"cubic-bezier(0.45, 0.05, 0.55, 0.95)","ease-standard":"cubic-bezier(0.86, 0, 0.07, 1)","ease-entrance":"cubic-bezier(0.18, 0.13, 0, 1)","ease-exit":"cubic-bezier(1, 0, 0.8, 0.85)"}},defaultValue:"lifesg"},vt=e=>r=>{var t;const n=r.theme,i=ft(yt,null==n?void 0:n.motionScheme);return(null===(t=null==n?void 0:n.overrides)||void 0===t?void 0:t.motion)?pt(i,e,n.overrides.motion):i[e]},xt={"duration-150":vt("duration-150"),"duration-250":vt("duration-250"),"duration-350":vt("duration-350"),"duration-500":vt("duration-500"),"duration-800":vt("duration-800"),"duration-1000":vt("duration-1000"),"ease-default":vt("ease-default"),"ease-standard":vt("ease-standard"),"ease-entrance":vt("ease-entrance"),"ease-exit":vt("ease-exit")},wt={collections:{lifesg:{"brand-10":"#2C0C0B","brand-20":"#4C1513","brand-30":"#6C1D1B","brand-40":"#922825","brand-50":"#BF3431","brand-60":"#F15D5A","brand-70":"#F69491","brand-80":"#FABAB7","brand-90":"#FCD7D2","brand-95":"#FFEBE7","brand-100":"#FFF6F4","primary-10":"#001731","primary-20":"#002752","primary-30":"#003874","primary-40":"#004D9F","primary-50":"#1768BE","primary-60":"#3C91EC","primary-70":"#6CB4FF","primary-80":"#A5CDFF","primary-90":"#CFE1FE","primary-95":"#E8F0FE","primary-100":"#F7F9FF","secondary-10":"#131529","secondary-20":"#222547","secondary-30":"#2F3565","secondary-40":"#42498B","secondary-50":"#5B62A7","secondary-60":"#858CBD","secondary-70":"#A8ADCF","secondary-80":"#C6C9E0","secondary-90":"#DDDFEC","secondary-95":"#EDEEF5","secondary-100":"#F8F8FB","neutral-10":"#161616","neutral-20":"#282828","neutral-30":"#393939","neutral-40":"#4E4E4E","neutral-50":"#686868","neutral-60":"#8E8E8E","neutral-70":"#AFAFB0","neutral-80":"#C7CACA","neutral-90":"#DDE1E2","neutral-95":"#EDEFEF","neutral-100":"#F9F9F9","success-10":"#081A0F","success-20":"#0E2D1B","success-30":"#154126","success-40":"#1C5A34","success-50":"#257645","success-60":"#44A068","success-70":"#64C189","success-80":"#80DCA5","success-90":"#B4ECCB","success-95":"#D5F6E2","success-100":"#EFFCF4","warning-10":"#221302","warning-20":"#3B2204","warning-30":"#543106","warning-40":"#744408","warning-50":"#98590C","warning-60":"#D07A13","warning-70":"#E4A244","warning-80":"#F5C26C","warning-90":"#FADBA6","warning-95":"#FCECD4","warning-100":"#FDF7F0","error-10":"#330505","error-20":"#550808","error-30":"#750C0C","error-40":"#9E130F","error-50":"#CB2213","error-60":"#DE6C6C","error-70":"#E89B9B","error-80":"#EFBEBE","error-90":"#F5D9D9","error-95":"#F9ECEC","error-100":"#FCF7F7","info-10":"#021824","info-20":"#032B3F","info-30":"#053D59","info-40":"#065478","info-50":"#176E9B","info-60":"#5296BE","info-70":"#82B5DA","info-80":"#ACCFE7","info-90":"#CCE3F1","info-95":"#E3F1F8","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000","primary-inverse":"#FEAB10"},bookingsg:{"brand-10":"#2C0C0B","brand-20":"#4C1513","brand-30":"#6C1D1B","brand-40":"#922825","brand-50":"#BF3431","brand-60":"#F15D5A","brand-70":"#F69491","brand-80":"#FABAB7","brand-90":"#FCD7D2","brand-95":"#FFEBE7","brand-100":"#FFF6F4","primary-10":"#1A122C","primary-20":"#2F1F4D","primary-30":"#422D6E","primary-40":"#5B3D97","primary-50":"#7654BC","primary-60":"#9A82CD","primary-70":"#B7A7D8","primary-80":"#CFC5E5","primary-90":"#E3DDF0","primary-95":"#F0EDF7","primary-100":"#F9F8FC","secondary-10":"#0E1723","secondary-20":"#18293D","secondary-30":"#233A57","secondary-40":"#305078","secondary-50":"#4B6A8F","secondary-60":"#7B91A9","secondary-70":"#A1B1C3","secondary-80":"#C1CBD7","secondary-90":"#DBE1E8","secondary-95":"#EBEFF2","secondary-100":"#F7F8FA","neutral-10":"#161616","neutral-20":"#282828","neutral-30":"#393939","neutral-40":"#4E4E4E","neutral-50":"#686868","neutral-60":"#8E8E8E","neutral-70":"#AFAFB0","neutral-80":"#C7CACA","neutral-90":"#DDE1E2","neutral-95":"#EDEFEF","neutral-100":"#F9F9F9","success-10":"#081A0F","success-20":"#0E2D1B","success-30":"#154126","success-40":"#1C5A34","success-50":"#257645","success-60":"#44A068","success-70":"#64C189","success-80":"#80DCA5","success-90":"#B4ECCB","success-95":"#D5F6E2","success-100":"#EFFCF4","warning-10":"#221302","warning-20":"#3B2204","warning-30":"#543106","warning-40":"#744408","warning-50":"#98590C","warning-60":"#D07A13","warning-70":"#E4A244","warning-80":"#F5C26C","warning-90":"#FADBA6","warning-95":"#FCECD4","warning-100":"#FDF7F0","error-10":"#330505","error-20":"#550808","error-30":"#750C0C","error-40":"#9E130F","error-50":"#CB2213","error-60":"#DE6C6C","error-70":"#E89B9B","error-80":"#EFBEBE","error-90":"#F5D9D9","error-95":"#F9ECEC","error-100":"#FCF7F7","info-10":"#021824","info-20":"#032B3F","info-30":"#053D59","info-40":"#065478","info-50":"#176E9B","info-60":"#5296BE","info-70":"#82B5DA","info-80":"#ACCFE7","info-90":"#CCE3F1","info-95":"#E3F1F8","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000","primary-inverse":"#FEAB10"},rbs:{"brand-10":"#0E123A","brand-20":"#191E65","brand-30":"#232B90","brand-40":"#303BC5","brand-50":"#494CFF","brand-60":"#AD6EFF","brand-70":"#AEA4FF","brand-80":"#C5C4FF","brand-90":"#DDDCFF","brand-95":"#EDECFF","brand-100":"#F8F8FF","primary-10":"#10152B","primary-20":"#1C254B","primary-30":"#28356C","primary-40":"#38489A","primary-50":"#4D5AD7","primary-60":"#7487F2","primary-70":"#9AAAFC","primary-80":"#BDC7FD","primary-90":"#DADFFB","primary-95":"#ECEEFE","primary-100":"#F7F8FF","secondary-10":"#19151D","secondary-20":"#2B2533","secondary-30":"#3E3649","secondary-40":"#564A64","secondary-50":"#6F637D","secondary-60":"#948B9F","secondary-70":"#B3ACBB","secondary-80":"#CCC8D2","secondary-90":"#E1DEE4","secondary-95":"#EFEEF1","secondary-100":"#F9F8F9","neutral-10":"#161616","neutral-20":"#282828","neutral-30":"#393939","neutral-40":"#4E4E4E","neutral-50":"#686868","neutral-60":"#8E8E8E","neutral-70":"#AFAFB0","neutral-80":"#C7CACA","neutral-90":"#DDE1E2","neutral-95":"#EDEFEF","neutral-100":"#F9F9F9","success-10":"#081A0F","success-20":"#0E2D1B","success-30":"#154126","success-40":"#1C5A34","success-50":"#257645","success-60":"#44A068","success-70":"#64C189","success-80":"#80DCA5","success-90":"#B4ECCB","success-95":"#D5F6E2","success-100":"#EFFCF4","warning-10":"#221302","warning-20":"#3B2204","warning-30":"#543106","warning-40":"#744408","warning-50":"#98590C","warning-60":"#D07A13","warning-70":"#E4A244","warning-80":"#F5C26C","warning-90":"#FADBA6","warning-95":"#FCECD4","warning-100":"#FDF7F0","error-10":"#330505","error-20":"#550808","error-30":"#750C0C","error-40":"#9E130F","error-50":"#CB2213","error-60":"#DE6C6C","error-70":"#E89B9B","error-80":"#EFBEBE","error-90":"#F5D9D9","error-95":"#F9ECEC","error-100":"#FCF7F7","info-10":"#021824","info-20":"#032B3F","info-30":"#053D59","info-40":"#065478","info-50":"#176E9B","info-60":"#5296BE","info-70":"#82B5DA","info-80":"#ACCFE7","info-90":"#CCE3F1","info-95":"#E3F1F8","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000","primary-inverse":"#FEAB10"},mylegacy:{"brand-10":"#2C0C0B","brand-20":"#4C1513","brand-30":"#6C1D1B","brand-40":"#922825","brand-50":"#BF3431","brand-60":"#F15D5A","brand-70":"#F69491","brand-80":"#FABAB7","brand-90":"#FCD7D2","brand-95":"#FFEBE7","brand-100":"#FFF6F4","primary-10":"#0011924","primary-20":"#032B40","primary-30":"#043D5A","primary-40":"#05547B","primary-50":"#096EA1","primary-60":"#2098D3","primary-70":"#5CB9E8","primary-80":"#8BD3F6","primary-90":"#BEE6FA","primary-95":"#E2F2FA","primary-100":"#F4FAFC","secondary-10":"#131529","secondary-20":"#222547","secondary-30":"#2F3565","secondary-40":"#42498B","secondary-50":"#5B62A7","secondary-60":"#858CBD","secondary-70":"#A8ADCF","secondary-80":"#C6C9E0","secondary-90":"#DDDFEC","secondary-95":"#EDEEF5","secondary-100":"#F8F8FB","neutral-10":"#161616","neutral-20":"#282828","neutral-30":"#393939","neutral-40":"#4E4E4E","neutral-50":"#686868","neutral-60":"#8E8E8E","neutral-70":"#AFAFB0","neutral-80":"#C7CACA","neutral-90":"#DDE1E2","neutral-95":"#EDEFEF","neutral-100":"#F9F9F9","success-10":"#081A0F","success-20":"#0E2D1B","success-30":"#154126","success-40":"#1C5A34","success-50":"#257645","success-60":"#44A068","success-70":"#64C189","success-80":"#80DCA5","success-90":"#B4ECCB","success-95":"#D5F6E2","success-100":"#EFFCF4","warning-10":"#221302","warning-20":"#3B2204","warning-30":"#543106","warning-40":"#744408","warning-50":"#98590C","warning-60":"#D07A13","warning-70":"#E4A244","warning-80":"#F5C26C","warning-90":"#FADBA6","warning-95":"#FCECD4","warning-100":"#FDF7F0","error-10":"#330505","error-20":"#550808","error-30":"#750C0C","error-40":"#9E130F","error-50":"#CB2213","error-60":"#DE6C6C","error-70":"#E89B9B","error-80":"#EFBEBE","error-90":"#F5D9D9","error-95":"#F9ECEC","error-100":"#FCF7F7","info-10":"#021824","info-20":"#032B3F","info-30":"#053D59","info-40":"#065478","info-50":"#176E9B","info-60":"#5296BE","info-70":"#82B5DA","info-80":"#ACCFE7","info-90":"#CCE3F1","info-95":"#E3F1F8","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000","primary-inverse":"#FEAB10"},ccube:{"brand-10":"#1F1221","brand-20":"#371F3B","brand-30":"#4E2C53","brand-40":"#6B3E73","brand-50":"#8D5197","brand-60":"#FF3399","brand-70":"#FF88C4","brand-80":"#FFB3D9","brand-90":"#FFD4E9","brand-95":"#FFE8F3","brand-100":"#FFD6EB","primary-10":"#1F1221","primary-20":"#371F3B","primary-30":"#4E2C53","primary-40":"#6B3E73","primary-50":"#8D5197","primary-60":"#B07DB7","primary-70":"#C7A3CC","primary-80":"#D9C2DD","primary-90":"#E9DBEB","primary-95":"#F3ECF4","primary-100":"#FAF7FA","secondary-10":"#2D091B","secondary-20":"#4D0F2E","secondary-30":"#6B1540","secondary-40":"#931D58","secondary-50":"#C02673","secondary-60":"#FF409F","secondary-70":"#FF88C4","secondary-80":"#FFB3D9","secondary-90":"#FFD4E9","secondary-95":"#FFE8F3","secondary-100":"#FFF8FC","neutral-10":"#161616","neutral-20":"#282828","neutral-30":"#393939","neutral-40":"#4E4E4E","neutral-50":"#686868","neutral-60":"#8E8E8E","neutral-70":"#AFAFB0","neutral-80":"#C7CACA","neutral-90":"#DDE1E2","neutral-95":"#EDEFEF","neutral-100":"#F9F9F9","success-10":"#081A0F","success-20":"#0E2D1B","success-30":"#154126","success-40":"#1C5A34","success-50":"#257645","success-60":"#44A068","success-70":"#64C189","success-80":"#80DCA5","success-90":"#B4ECCB","success-95":"#D5F6E2","success-100":"#EFFCF4","warning-10":"#221302","warning-20":"#3B2204","warning-30":"#543106","warning-40":"#744408","warning-50":"#98590C","warning-60":"#D07A13","warning-70":"#E4A244","warning-80":"#F5C26C","warning-90":"#FADBA6","warning-95":"#FCECD4","warning-100":"#FDF7F0","error-10":"#330505","error-20":"#550808","error-30":"#750C0C","error-40":"#9E130F","error-50":"#CB2213","error-60":"#DE6C6C","error-70":"#E89B9B","error-80":"#EFBEBE","error-90":"#F5D9D9","error-95":"#F9ECEC","error-100":"#FCF7F7","info-10":"#021824","info-20":"#032B3F","info-30":"#053D59","info-40":"#065478","info-50":"#176E9B","info-60":"#5296BE","info-70":"#82B5DA","info-80":"#ACCFE7","info-90":"#CCE3F1","info-95":"#E3F1F8","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000","primary-inverse":"#FEAB10"}},defaultValue:"lifesg"},$t=e=>r=>{var t;const n=r.theme,i=ft(wt,null==n?void 0:n.colourScheme);return(null===(t=null==n?void 0:n.overrides)||void 0===t?void 0:t.primitiveColour)?pt(i,e,n.overrides.primitiveColour):i[e]},Ft={"brand-10":$t("brand-10"),"brand-20":$t("brand-20"),"brand-30":$t("brand-30"),"brand-40":$t("brand-40"),"brand-50":$t("brand-50"),"brand-60":$t("brand-60"),"brand-70":$t("brand-70"),"brand-80":$t("brand-80"),"brand-90":$t("brand-90"),"brand-95":$t("brand-95"),"brand-100":$t("brand-100"),"primary-10":$t("primary-10"),"primary-20":$t("primary-20"),"primary-30":$t("primary-30"),"primary-40":$t("primary-40"),"primary-50":$t("primary-50"),"primary-60":$t("primary-60"),"primary-70":$t("primary-70"),"primary-80":$t("primary-80"),"primary-90":$t("primary-90"),"primary-95":$t("primary-95"),"primary-100":$t("primary-100"),"secondary-10":$t("secondary-10"),"secondary-20":$t("secondary-20"),"secondary-30":$t("secondary-30"),"secondary-40":$t("secondary-40"),"secondary-50":$t("secondary-50"),"secondary-60":$t("secondary-60"),"secondary-70":$t("secondary-70"),"secondary-80":$t("secondary-80"),"secondary-90":$t("secondary-90"),"secondary-95":$t("secondary-95"),"secondary-100":$t("secondary-100"),"neutral-10":$t("neutral-10"),"neutral-20":$t("neutral-20"),"neutral-30":$t("neutral-30"),"neutral-40":$t("neutral-40"),"neutral-50":$t("neutral-50"),"neutral-60":$t("neutral-60"),"neutral-70":$t("neutral-70"),"neutral-80":$t("neutral-80"),"neutral-90":$t("neutral-90"),"neutral-95":$t("neutral-95"),"neutral-100":$t("neutral-100"),"success-10":$t("success-10"),"success-20":$t("success-20"),"success-30":$t("success-30"),"success-40":$t("success-40"),"success-50":$t("success-50"),"success-60":$t("success-60"),"success-70":$t("success-70"),"success-80":$t("success-80"),"success-90":$t("success-90"),"success-95":$t("success-95"),"success-100":$t("success-100"),"warning-10":$t("warning-10"),"warning-20":$t("warning-20"),"warning-30":$t("warning-30"),"warning-40":$t("warning-40"),"warning-50":$t("warning-50"),"warning-60":$t("warning-60"),"warning-70":$t("warning-70"),"warning-80":$t("warning-80"),"warning-90":$t("warning-90"),"warning-95":$t("warning-95"),"warning-100":$t("warning-100"),"error-10":$t("error-10"),"error-20":$t("error-20"),"error-30":$t("error-30"),"error-40":$t("error-40"),"error-50":$t("error-50"),"error-60":$t("error-60"),"error-70":$t("error-70"),"error-80":$t("error-80"),"error-90":$t("error-90"),"error-95":$t("error-95"),"error-100":$t("error-100"),"info-10":$t("info-10"),"info-20":$t("info-20"),"info-30":$t("info-30"),"info-40":$t("info-40"),"info-50":$t("info-50"),"info-60":$t("info-60"),"info-70":$t("info-70"),"info-80":$t("info-80"),"info-90":$t("info-90"),"info-95":$t("info-95"),"info-100":$t("info-100"),white:$t("white"),black:$t("black"),"primary-inverse":$t("primary-inverse")},Dt={text:$t("neutral-20"),"text-subtle":$t("neutral-30"),"text-subtler":$t("neutral-50"),"text-subtlest":$t("neutral-60"),"text-primary":$t("primary-50"),"text-hover":$t("primary-40"),"text-selected":$t("primary-50"),"text-selected-hover":$t("primary-40"),"text-disabled":$t("neutral-50"),"text-disabled-subtle":$t("neutral-60"),"text-disabled-subtlest":$t("neutral-80"),"text-selected-disabled":$t("neutral-20"),"text-success":$t("success-40"),"text-warning":$t("warning-40"),"text-error":$t("error-40"),"text-info":$t("info-40"),"text-inverse":$t("white"),icon:$t("neutral-50"),"icon-subtle":$t("neutral-60"),"icon-strongest":$t("neutral-20"),"icon-primary":$t("primary-50"),"icon-primary-subtle":$t("primary-60"),"icon-primary-subtlest":$t("primary-70"),"icon-hover":$t("primary-40"),"icon-selected":$t("primary-50"),"icon-selected-hover":$t("primary-40"),"icon-disabled":$t("neutral-50"),"icon-disabled-subtle":$t("neutral-60"),"icon-selected-disabled":$t("neutral-60"),"icon-success":$t("success-50"),"icon-warning":$t("warning-60"),"icon-error":$t("error-50"),"icon-error-strong":$t("error-40"),"icon-info":$t("info-50"),"icon-inverse":$t("white"),"icon-primary-inverse":$t("primary-inverse"),border:$t("neutral-90"),"border-strong":$t("neutral-70"),"border-stronger":$t("neutral-50"),"border-primary":$t("primary-50"),"border-primary-subtle":$t("primary-60"),"border-hover":$t("primary-90"),"border-hover-strong":$t("primary-60"),"border-selected":$t("primary-50"),"border-selected-subtle":$t("primary-70"),"border-selected-subtlest":$t("primary-90"),"border-selected-hover":$t("primary-40"),"border-focus":$t("primary-60"),"border-focus-strong":$t("primary-50"),"border-disabled":$t("neutral-90"),"border-selected-disabled":$t("neutral-70"),"border-success":$t("success-60"),"border-warning":$t("warning-60"),"border-error":$t("error-60"),"border-error-focus":$t("error-60"),"border-error-focus-strong":$t("error-40"),"border-error-strong":$t("error-40"),"border-info":$t("info-60"),bg:$t("white"),"bg-strong":$t("neutral-100"),"bg-stronger":$t("neutral-95"),"bg-strongest":$t("neutral-90"),"bg-hover":$t("primary-95"),"bg-hover-strong":$t("primary-90"),"bg-hover-subtle":$t("primary-100"),"bg-hover-neutral":$t("neutral-100"),"bg-hover-neutral-strong":$t("neutral-90"),"bg-selected":$t("primary-95"),"bg-selected-hover":$t("primary-90"),"bg-selected-strong":$t("primary-90"),"bg-selected-stronger":$t("primary-70"),"bg-selected-strongest":$t("primary-50"),"bg-selected-strongest-hover":$t("primary-40"),"bg-disabled":$t("neutral-95"),"bg-selected-disabled":$t("neutral-95"),"bg-selected-stronger-disabled":$t("neutral-70"),"bg-success":$t("success-100"),"bg-success-hover":$t("success-95"),"bg-success-strong":$t("success-50"),"bg-success-strong-hover":$t("success-40"),"bg-warning":$t("warning-100"),"bg-warning-hover":$t("warning-95"),"bg-warning-strong":$t("warning-50"),"bg-warning-strong-hover":$t("warning-40"),"bg-info":$t("info-100"),"bg-info-hover":$t("info-95"),"bg-info-strong":$t("info-50"),"bg-info-strong-hover":$t("info-40"),"bg-error":$t("error-100"),"bg-error-hover":$t("error-95"),"bg-error-strong":$t("error-50"),"bg-error-strong-hover":$t("error-40"),"bg-inverse":$t("neutral-20"),"bg-inverse-subtle":$t("neutral-30"),"bg-inverse-subtler":$t("neutral-50"),"bg-inverse-subtlest":$t("neutral-60"),"bg-inverse-hover":$t("neutral-40"),"bg-primary":$t("primary-50"),"bg-primary-subtle":$t("primary-60"),"bg-primary-subtler":$t("primary-95"),"bg-primary-subtlest":$t("primary-100"),"bg-available":"#6DD0A1","bg-primary-hover":$t("primary-40"),"bg-primary-subtlest-hover":$t("primary-90"),"bg-primary-subtlest-selected":$t("primary-90"),"overlay-strong":"rgba(40, 40, 40, 0.85)","overlay-subtle":"rgba(40, 40, 40, 0.20)",hyperlink:$t("primary-50"),"hyperlink-hover":$t("primary-40"),"hyperlink-visited":$t("primary-40"),"hyperlink-inverse":$t("primary-inverse"),"focus-ring":$t("black"),"focus-ring-inverse":$t("white")},Et={collections:{lifesg:Dt,bookingsg:Dt,rbs:Dt,mylegacy:Dt,ccube:Dt},defaultValue:"lifesg"},Ct=e=>r=>{var t;const n=r.theme,i=ft(Et,null==n?void 0:n.colourScheme),o=(null===(t=null==n?void 0:n.overrides)||void 0===t?void 0:t.semanticColour)?pt(i,e,n.overrides.semanticColour):i[e];return"function"==typeof o?o(r):o},Mt={text:Ct("text"),"text-subtle":Ct("text-subtle"),"text-subtler":Ct("text-subtler"),"text-subtlest":Ct("text-subtlest"),"text-primary":Ct("text-primary"),"text-hover":Ct("text-hover"),"text-selected":Ct("text-selected"),"text-selected-hover":Ct("text-selected-hover"),"text-disabled":Ct("text-disabled"),"text-disabled-subtle":Ct("text-disabled-subtle"),"text-disabled-subtlest":Ct("text-disabled-subtlest"),"text-selected-disabled":Ct("text-selected-disabled"),"text-success":Ct("text-success"),"text-warning":Ct("text-warning"),"text-error":Ct("text-error"),"text-info":Ct("text-info"),"text-inverse":Ct("text-inverse"),icon:Ct("icon"),"icon-subtle":Ct("icon-subtle"),"icon-strongest":Ct("icon-strongest"),"icon-primary":Ct("icon-primary"),"icon-primary-subtle":Ct("icon-primary-subtle"),"icon-primary-subtlest":Ct("icon-primary-subtlest"),"icon-hover":Ct("icon-hover"),"icon-selected":Ct("icon-selected"),"icon-selected-hover":Ct("icon-selected-hover"),"icon-disabled":Ct("icon-disabled"),"icon-disabled-subtle":Ct("icon-disabled-subtle"),"icon-selected-disabled":Ct("icon-selected-disabled"),"icon-success":Ct("icon-success"),"icon-warning":Ct("icon-warning"),"icon-error":Ct("icon-error"),"icon-error-strong":Ct("icon-error-strong"),"icon-info":Ct("icon-info"),"icon-inverse":Ct("icon-inverse"),"icon-primary-inverse":Ct("icon-primary-inverse"),border:Ct("border"),"border-strong":Ct("border-strong"),"border-stronger":Ct("border-stronger"),"border-primary":Ct("border-primary"),"border-primary-subtle":Ct("border-primary-subtle"),"border-hover":Ct("border-hover"),"border-hover-strong":Ct("border-hover-strong"),"border-selected":Ct("border-selected"),"border-selected-subtle":Ct("border-selected-subtle"),"border-selected-subtlest":Ct("border-selected-subtlest"),"border-selected-hover":Ct("border-selected-hover"),"border-focus":Ct("border-focus"),"border-focus-strong":Ct("border-focus-strong"),"border-disabled":Ct("border-disabled"),"border-selected-disabled":Ct("border-selected-disabled"),"border-success":Ct("border-success"),"border-warning":Ct("border-warning"),"border-error":Ct("border-error"),"border-error-focus":Ct("border-error-focus"),"border-error-focus-strong":Ct("border-error-focus-strong"),"border-error-strong":Ct("border-error-strong"),"border-info":Ct("border-info"),bg:Ct("bg"),"bg-strong":Ct("bg-strong"),"bg-stronger":Ct("bg-stronger"),"bg-strongest":Ct("bg-strongest"),"bg-hover":Ct("bg-hover"),"bg-hover-strong":Ct("bg-hover-strong"),"bg-hover-subtle":Ct("bg-hover-subtle"),"bg-hover-neutral":Ct("bg-hover-neutral"),"bg-hover-neutral-strong":Ct("bg-hover-neutral-strong"),"bg-selected":Ct("bg-selected"),"bg-selected-hover":Ct("bg-selected-hover"),"bg-selected-strong":Ct("bg-selected-strong"),"bg-selected-stronger":Ct("bg-selected-stronger"),"bg-selected-strongest":Ct("bg-selected-strongest"),"bg-selected-strongest-hover":Ct("bg-selected-strongest-hover"),"bg-disabled":Ct("bg-disabled"),"bg-selected-disabled":Ct("bg-selected-disabled"),"bg-selected-stronger-disabled":Ct("bg-selected-stronger-disabled"),"bg-success":Ct("bg-success"),"bg-success-hover":Ct("bg-success-hover"),"bg-success-strong":Ct("bg-success-strong"),"bg-success-strong-hover":Ct("bg-success-strong-hover"),"bg-warning":Ct("bg-warning"),"bg-warning-hover":Ct("bg-warning-hover"),"bg-warning-strong":Ct("bg-warning-strong"),"bg-warning-strong-hover":Ct("bg-warning-strong-hover"),"bg-info":Ct("bg-info"),"bg-info-hover":Ct("bg-info-hover"),"bg-info-strong":Ct("bg-info-strong"),"bg-info-strong-hover":Ct("bg-info-strong-hover"),"bg-error":Ct("bg-error"),"bg-error-hover":Ct("bg-error-hover"),"bg-error-strong":Ct("bg-error-strong"),"bg-error-strong-hover":Ct("bg-error-strong-hover"),"bg-inverse":Ct("bg-inverse"),"bg-inverse-subtle":Ct("bg-inverse-subtle"),"bg-inverse-subtler":Ct("bg-inverse-subtler"),"bg-inverse-subtlest":Ct("bg-inverse-subtlest"),"bg-inverse-hover":Ct("bg-inverse-hover"),"bg-primary":Ct("bg-primary"),"bg-primary-subtle":Ct("bg-primary-subtle"),"bg-primary-subtler":Ct("bg-primary-subtler"),"bg-primary-subtlest":Ct("bg-primary-subtlest"),"bg-available":Ct("bg-available"),"bg-primary-hover":Ct("bg-primary-hover"),"bg-primary-subtlest-hover":Ct("bg-primary-subtlest-hover"),"bg-primary-subtlest-selected":Ct("bg-primary-subtlest-selected"),"overlay-strong":Ct("overlay-strong"),"overlay-subtle":Ct("overlay-subtle"),hyperlink:Ct("hyperlink"),"hyperlink-hover":Ct("hyperlink-hover"),"hyperlink-visited":Ct("hyperlink-visited"),"hyperlink-inverse":Ct("hyperlink-inverse"),"focus-ring":Ct("focus-ring"),"focus-ring-inverse":Ct("focus-ring-inverse")},Ot={collections:{lifesg:{"width-010":1,"width-020":2,"width-040":4,solid:"solid","dashed-default":e=>r=>{var t,n,i;const{thickness:o,radius:s,colour:a}=e||{},l=null!==(t="function"==typeof o?o(r):o)&&void 0!==t?t:Bt["width-010"](r),d=null!==(n="function"==typeof s?s(r):s)&&void 0!==n?n:0,c=null!==(i="function"==typeof a?a(r):a)&&void 0!==i?i:Mt.border(r),u=encodeURIComponent(`<svg width='100%' height='100%' xmlns='http://www.w3.org/2000/svg'><rect width='100%' height='100%' fill='none' rx='${d}' ry='${d}' stroke='${c}' stroke-width='${l}' stroke-dasharray='4, 8' stroke-dashoffset='0' stroke-linecap='square'/></svg>`);return f`
            background-image: url("data:image/svg+xml,${u}");
            border-radius: ${d};
        `}}},defaultValue:"lifesg"},kt=e=>r=>{var t;const n=r.theme,i=ft(Ot,null==n?void 0:n.borderScheme);return(null===(t=null==n?void 0:n.overrides)||void 0===t?void 0:t.border)?`${pt(i,e,n.overrides.border)}px`:`${i[e]}px`},zt=e=>1===e.length&&"theme"in e[0],Bt={"width-010":kt("width-010"),"width-020":kt("width-020"),"width-040":kt("width-040"),solid:(St="solid",e=>{var r;const t=e.theme,n=ft(Ot,null==t?void 0:t.borderScheme),i=(null===(r=null==t?void 0:t.overrides)||void 0===r?void 0:r.border)?pt(n,St,t.overrides.border):n[St];return"function"==typeof i?i(e):i}),"dashed-default":(e=>(...r)=>t=>{var n;const i=zt(r)?[]:r,o=zt(r)?r[0]:t,s=o.theme,a=ft(Ot,null==s?void 0:s.borderScheme);return((null===(n=null==s?void 0:s.overrides)||void 0===n?void 0:n.border)?pt(a,e,s.overrides.border):a[e])(...i)(o)})("dashed-default")};var St;const At={collections:{lifesg:{"xxs-min":0,"xxs-max":320,"xs-min":321,"xs-max":375,"sm-min":376,"sm-max":420,"md-min":421,"md-max":767,"lg-min":768,"lg-max":1023,"xl-min":1024,"xl-max":1440,"xxl-min":1441,"xxs-column":8,"xs-column":8,"sm-column":8,"md-column":8,"lg-column":12,"xl-column":12,"xxl-column":12,"xxs-gutter":16,"xs-gutter":16,"sm-gutter":16,"md-gutter":16,"lg-gutter":32,"xl-gutter":32,"xxl-gutter":32,"xxs-margin":24,"xs-margin":24,"sm-margin":24,"md-margin":24,"lg-margin":48,"xl-margin":48,"xxl-margin":48}},defaultValue:"lifesg"},_t=e=>r=>{var t;const n=r.theme,i=ft(At,null==n?void 0:n.breakpointScheme);let o;return o=(null===(t=null==n?void 0:n.overrides)||void 0===t?void 0:t.breakpoint)?pt(i,e,n.overrides.breakpoint):i[e],o},Tt={"xxs-min":_t("xxs-min"),"xxs-max":_t("xxs-max"),"xs-min":_t("xs-min"),"xs-max":_t("xs-max"),"sm-min":_t("sm-min"),"sm-max":_t("sm-max"),"md-min":_t("md-min"),"md-max":_t("md-max"),"lg-min":_t("lg-min"),"lg-max":_t("lg-max"),"xl-min":_t("xl-min"),"xl-max":_t("xl-max"),"xxl-min":_t("xxl-min"),"xxs-column":_t("xxs-column"),"xs-column":_t("xs-column"),"sm-column":_t("sm-column"),"md-column":_t("md-column"),"lg-column":_t("lg-column"),"xl-column":_t("xl-column"),"xxl-column":_t("xxl-column"),"xxs-gutter":_t("xxs-gutter"),"xs-gutter":_t("xs-gutter"),"sm-gutter":_t("sm-gutter"),"md-gutter":_t("md-gutter"),"lg-gutter":_t("lg-gutter"),"xl-gutter":_t("xl-gutter"),"xxl-gutter":_t("xxl-gutter"),"xxs-margin":_t("xxs-margin"),"xs-margin":_t("xs-margin"),"sm-margin":_t("sm-margin"),"md-margin":_t("md-margin"),"lg-margin":_t("lg-margin"),"xl-margin":_t("xl-margin"),"xxl-margin":_t("xxl-margin")},Lt=e=>("max-width"===e?["xxs","xs","sm","md","lg","xl"]:["xxs","xs","sm","md","lg","xl","xxl"]).reduce(((r,t)=>(r[t]=((e,r)=>{const t=Tt["max-width"===e?`${r}-max`:`${r}-min`];return r=>{const n=t(r);return`@media screen and (${e}: ${n}px)`}})(e,t),r)),{}),jt={MaxWidth:Lt("max-width"),MinWidth:Lt("min-width")},Yt={"header-size-xxl":"3rem","header-size-xl":"2.5rem","header-size-lg":"2rem","header-size-md":"1.625rem","header-size-sm":"1.375rem","header-size-xs":"1.125rem","header-lh-xxl":"3.5rem","header-lh-xl":"3rem","header-lh-lg":"2.5rem","header-lh-md":"2.25rem","header-lh-sm":"1.75rem","header-lh-xs":"1.625rem","header-ls-xxl":"-0.056rem","header-ls-xl":"-0.032rem","header-ls-lg":"-0.032rem","header-ls-md":"0rem","header-ls-sm":"0rem","header-ls-xs":"0rem","weight-light":"300","weight-regular":"400","weight-semibold":"600","weight-bold":"700","font-family":"Open Sans","body-size-baseline":"1.125rem","body-size-md":"1rem","body-size-sm":"0.875rem","body-size-xs":"0.75rem","body-lh-baseline":"1.625rem","body-lh-md":"1.5rem","body-lh-sm":"1.625rem","body-lh-xs":"1.25rem","body-ls-baseline":"0rem","body-ls-md":"0.014rem","body-ls-sm":"0.012rem","body-ls-xs":"0.012rem","formlabel-size-baseline":"1rem","formlabel-size-lg":"1.125rem","formlabel-lh-baseline":"1.5rem","formlabel-lh-lg":"1.625rem","formlabel-ls-baseline":"0.014rem","formlabel-ls-lg":"0rem"},Pt={collections:{lifesg:Yt,bookingsg:{"header-size-xxl":"3rem","header-size-xl":"2.5rem","header-size-lg":"2rem","header-size-md":"1.625rem","header-size-sm":"1.375rem","header-size-xs":"1.125rem","header-lh-xxl":"3.5rem","header-lh-xl":"3rem","header-lh-lg":"2.5rem","header-lh-md":"2.25rem","header-lh-sm":"1.75rem","header-lh-xs":"1.75rem","header-ls-xxl":"-0.056rem","header-ls-xl":"-0.032rem","header-ls-lg":"-0.032rem","header-ls-md":"0rem","header-ls-sm":"0rem","header-ls-xs":"0rem","weight-light":"300","weight-regular":"400","weight-semibold":"600","weight-bold":"700","font-family":"Plus Jakarta Sans","body-size-baseline":"1.125rem","body-size-md":"1rem","body-size-sm":"0.875rem","body-size-xs":"0.75rem","body-lh-baseline":"1.75rem","body-lh-md":"1.5rem","body-lh-sm":"1.6rem","body-lh-xs":"1.2rem","body-ls-baseline":"0rem","body-ls-md":"0.014rem","body-ls-sm":"0.012rem","body-ls-xs":"0.012rem","formlabel-size-baseline":"1rem","formlabel-size-lg":"1.125rem","formlabel-lh-baseline":"1.5rem","formlabel-lh-lg":"1.75rem","formlabel-ls-baseline":"0.014rem","formlabel-ls-lg":"0rem"},rbs:Yt,mylegacy:Yt,ccube:Yt},defaultValue:"lifesg"},Rt=e=>r=>{var t;const n=r.theme,i=ft(Pt,null==n?void 0:n.fontScheme);return(null===(t=null==n?void 0:n.overrides)||void 0===t?void 0:t.fontSpec)?pt(i,e,n.overrides.fontSpec):i[e]},It={"header-size-xxl":Rt("header-size-xxl"),"header-size-xl":Rt("header-size-xl"),"header-size-lg":Rt("header-size-lg"),"header-size-md":Rt("header-size-md"),"header-size-sm":Rt("header-size-sm"),"header-size-xs":Rt("header-size-xs"),"header-lh-xxl":Rt("header-lh-xxl"),"header-lh-xl":Rt("header-lh-xl"),"header-lh-lg":Rt("header-lh-lg"),"header-lh-md":Rt("header-lh-md"),"header-lh-sm":Rt("header-lh-sm"),"header-lh-xs":Rt("header-lh-xs"),"header-ls-xxl":Rt("header-ls-xxl"),"header-ls-xl":Rt("header-ls-xl"),"header-ls-lg":Rt("header-ls-lg"),"header-ls-md":Rt("header-ls-md"),"header-ls-sm":Rt("header-ls-sm"),"header-ls-xs":Rt("header-ls-xs"),"weight-light":Rt("weight-light"),"weight-regular":Rt("weight-regular"),"weight-semibold":Rt("weight-semibold"),"weight-bold":Rt("weight-bold"),"font-family":Rt("font-family"),"body-size-baseline":Rt("body-size-baseline"),"body-size-md":Rt("body-size-md"),"body-size-sm":Rt("body-size-sm"),"body-size-xs":Rt("body-size-xs"),"body-lh-baseline":Rt("body-lh-baseline"),"body-lh-md":Rt("body-lh-md"),"body-lh-sm":Rt("body-lh-sm"),"body-lh-xs":Rt("body-lh-xs"),"body-ls-baseline":Rt("body-ls-baseline"),"body-ls-md":Rt("body-ls-md"),"body-ls-sm":Rt("body-ls-sm"),"body-ls-xs":Rt("body-ls-xs"),"formlabel-size-baseline":Rt("formlabel-size-baseline"),"formlabel-size-lg":Rt("formlabel-size-lg"),"formlabel-lh-baseline":Rt("formlabel-lh-baseline"),"formlabel-lh-lg":Rt("formlabel-lh-lg"),"formlabel-ls-baseline":Rt("formlabel-ls-baseline"),"formlabel-ls-lg":Rt("formlabel-ls-lg")},Ht={collections:{lifesg:{none:0,xs:2,sm:4,md:8,lg:12,full:9999}},defaultValue:"lifesg"},Wt=e=>r=>{var t;const n=r.theme,i=ft(Ht,null==n?void 0:n.radiusScheme);return(null===(t=null==n?void 0:n.overrides)||void 0===t?void 0:t.radius)?`${pt(i,e,n.overrides.radius)}px`:`${i[e]}px`},Nt={none:Wt("none"),xs:Wt("xs"),sm:Wt("sm"),md:Wt("md"),lg:Wt("lg"),full:Wt("full")},Vt={collections:{lifesg:{"spacing-0":0,"spacing-4":4,"spacing-8":8,"spacing-12":12,"spacing-16":16,"spacing-20":20,"spacing-24":24,"spacing-32":32,"spacing-40":40,"spacing-48":48,"spacing-64":64,"spacing-72":72,"layout-xs":8,"layout-sm":16,"layout-md":24,"layout-lg":32,"layout-xl":48,"layout-xxl":64,"layout-xxxl":128}},defaultValue:"lifesg"},Kt=e=>r=>{var t;const n=r.theme,i=ft(Vt,null==n?void 0:n.spacingScheme);return(null===(t=null==n?void 0:n.overrides)||void 0===t?void 0:t.spacing)?`${pt(i,e,n.overrides.spacing)}px`:`${i[e]}px`},Ut={"spacing-0":Kt("spacing-0"),"spacing-4":Kt("spacing-4"),"spacing-8":Kt("spacing-8"),"spacing-12":Kt("spacing-12"),"spacing-16":Kt("spacing-16"),"spacing-20":Kt("spacing-20"),"spacing-24":Kt("spacing-24"),"spacing-32":Kt("spacing-32"),"spacing-40":Kt("spacing-40"),"spacing-48":Kt("spacing-48"),"spacing-64":Kt("spacing-64"),"spacing-72":Kt("spacing-72"),"layout-xs":Kt("layout-xs"),"layout-sm":Kt("layout-sm"),"layout-md":Kt("layout-md"),"layout-lg":Kt("layout-lg"),"layout-xl":Kt("layout-xl"),"layout-xxl":Kt("layout-xxl"),"layout-xxxl":Kt("layout-xxxl")},Zt=(e,r,t,n)=>f`
    font-family: ${Rt("font-family")};
    font-size: ${Rt(e)};
    font-weight: ${Rt(r)};
    line-height: ${Rt(t)};
    letter-spacing: ${Rt(n)};
`,Xt={"header-xxl-light":Zt("header-size-xxl","weight-light","header-lh-xxl","header-ls-xxl"),"header-xxl-regular":Zt("header-size-xxl","weight-regular","header-lh-xxl","header-ls-xxl"),"header-xxl-semibold":Zt("header-size-xxl","weight-semibold","header-lh-xxl","header-ls-xxl"),"header-xxl-bold":Zt("header-size-xxl","weight-bold","header-lh-xxl","header-ls-xxl"),"header-xl-light":Zt("header-size-xl","weight-light","header-lh-xl","header-ls-xl"),"header-xl-regular":Zt("header-size-xl","weight-regular","header-lh-xl","header-ls-xl"),"header-xl-semibold":Zt("header-size-xl","weight-semibold","header-lh-xl","header-ls-xl"),"header-xl-bold":Zt("header-size-xl","weight-bold","header-lh-xl","header-ls-xl"),"header-lg-light":Zt("header-size-lg","weight-light","header-lh-lg","header-ls-lg"),"header-lg-regular":Zt("header-size-lg","weight-regular","header-lh-lg","header-ls-lg"),"header-lg-semibold":Zt("header-size-lg","weight-semibold","header-lh-lg","header-ls-lg"),"header-lg-bold":Zt("header-size-lg","weight-bold","header-lh-lg","header-ls-lg"),"header-md-light":Zt("header-size-md","weight-light","header-lh-md","header-ls-md"),"header-md-regular":Zt("header-size-md","weight-regular","header-lh-md","header-ls-md"),"header-md-semibold":Zt("header-size-md","weight-semibold","header-lh-md","header-ls-md"),"header-md-bold":Zt("header-size-md","weight-bold","header-lh-md","header-ls-md"),"header-sm-light":Zt("header-size-sm","weight-light","header-lh-sm","header-ls-sm"),"header-sm-regular":Zt("header-size-sm","weight-regular","header-lh-sm","header-ls-sm"),"header-sm-semibold":Zt("header-size-sm","weight-semibold","header-lh-sm","header-ls-sm"),"header-sm-bold":Zt("header-size-sm","weight-bold","header-lh-sm","header-ls-sm"),"header-xs-light":Zt("header-size-xs","weight-light","header-lh-xs","header-ls-xs"),"header-xs-regular":Zt("header-size-xs","weight-regular","header-lh-xs","header-ls-xs"),"header-xs-semibold":Zt("header-size-xs","weight-semibold","header-lh-xs","header-ls-xs"),"header-xs-bold":Zt("header-size-xs","weight-bold","header-lh-xs","header-ls-xs"),"body-baseline-light":Zt("body-size-baseline","weight-light","body-lh-baseline","body-ls-baseline"),"body-baseline-regular":Zt("body-size-baseline","weight-regular","body-lh-baseline","body-ls-baseline"),"body-baseline-semibold":Zt("body-size-baseline","weight-semibold","body-lh-baseline","body-ls-baseline"),"body-baseline-bold":Zt("body-size-baseline","weight-bold","body-lh-baseline","body-ls-baseline"),"body-md-light":Zt("body-size-md","weight-light","body-lh-md","body-ls-md"),"body-md-regular":Zt("body-size-md","weight-regular","body-lh-md","body-ls-md"),"body-md-semibold":Zt("body-size-md","weight-semibold","body-lh-md","body-ls-md"),"body-md-bold":Zt("body-size-md","weight-bold","body-lh-md","body-ls-md"),"body-sm-light":Zt("body-size-sm","weight-light","body-lh-sm","body-ls-sm"),"body-sm-regular":Zt("body-size-sm","weight-regular","body-lh-sm","body-ls-sm"),"body-sm-semibold":Zt("body-size-sm","weight-semibold","body-lh-sm","body-ls-sm"),"body-sm-bold":Zt("body-size-sm","weight-bold","body-lh-sm","body-ls-sm"),"body-xs-light":Zt("body-size-xs","weight-light","body-lh-xs","body-ls-xs"),"body-xs-regular":Zt("body-size-xs","weight-regular","body-lh-xs","body-ls-xs"),"body-xs-semibold":Zt("body-size-xs","weight-semibold","body-lh-xs","body-ls-xs"),"body-xs-bold":Zt("body-size-xs","weight-bold","body-lh-xs","body-ls-xs"),"formlabel-baseline-semibold":Zt("formlabel-size-baseline","weight-semibold","formlabel-lh-baseline","formlabel-ls-baseline"),"formlabel-lg-semibold":Zt("formlabel-size-lg","weight-semibold","formlabel-lh-lg","formlabel-ls-lg")},qt={collections:{lifesg:Xt,bookingsg:Xt,rbs:Xt,mylegacy:Xt,ccube:Xt},defaultValue:"lifesg"},Jt=e=>r=>{var t;const n=r.theme,i=ft(qt,null==n?void 0:n.fontScheme),o=(null===(t=null==n?void 0:n.overrides)||void 0===t?void 0:t.font)?pt(i,e,n.overrides.font):i[e];return"function"==typeof o?o(r):o},Gt={"header-xxl-light":Jt("header-xxl-light"),"header-xxl-regular":Jt("header-xxl-regular"),"header-xxl-semibold":Jt("header-xxl-semibold"),"header-xxl-bold":Jt("header-xxl-bold"),"header-xl-light":Jt("header-xl-light"),"header-xl-regular":Jt("header-xl-regular"),"header-xl-semibold":Jt("header-xl-semibold"),"header-xl-bold":Jt("header-xl-bold"),"header-lg-light":Jt("header-lg-light"),"header-lg-regular":Jt("header-lg-regular"),"header-lg-semibold":Jt("header-lg-semibold"),"header-lg-bold":Jt("header-lg-bold"),"header-md-light":Jt("header-md-light"),"header-md-regular":Jt("header-md-regular"),"header-md-semibold":Jt("header-md-semibold"),"header-md-bold":Jt("header-md-bold"),"header-sm-light":Jt("header-sm-light"),"header-sm-regular":Jt("header-sm-regular"),"header-sm-semibold":Jt("header-sm-semibold"),"header-sm-bold":Jt("header-sm-bold"),"header-xs-light":Jt("header-xs-light"),"header-xs-regular":Jt("header-xs-regular"),"header-xs-semibold":Jt("header-xs-semibold"),"header-xs-bold":Jt("header-xs-bold"),"body-baseline-light":Jt("body-baseline-light"),"body-baseline-regular":Jt("body-baseline-regular"),"body-baseline-semibold":Jt("body-baseline-semibold"),"body-baseline-bold":Jt("body-baseline-bold"),"body-md-light":Jt("body-md-light"),"body-md-regular":Jt("body-md-regular"),"body-md-semibold":Jt("body-md-semibold"),"body-md-bold":Jt("body-md-bold"),"body-sm-light":Jt("body-sm-light"),"body-sm-regular":Jt("body-sm-regular"),"body-sm-semibold":Jt("body-sm-semibold"),"body-sm-bold":Jt("body-sm-bold"),"body-xs-light":Jt("body-xs-light"),"body-xs-regular":Jt("body-xs-regular"),"body-xs-semibold":Jt("body-xs-semibold"),"body-xs-bold":Jt("body-xs-bold"),"formlabel-baseline-semibold":Jt("formlabel-baseline-semibold"),"formlabel-lg-semibold":Jt("formlabel-lg-semibold")},Qt=Object.assign(Object.assign({},Mt),{Primitive:Ft}),en=Object.assign(Object.assign({},Gt),{Spec:It}),rn=xt,tn=Bt,nn=Ut,on=Nt,sn=Tt,an=jt,ln=(e,r,t=!1)=>{const n=`${e}-${r.toLowerCase()}`;return f`
        ${en[n]}
        ${t?"margin-bottom: 1.05em;":"margin-bottom: 0;"}
    `},dn=(e,r)=>f`
    ${ln(e,r.weight||"regular",r.paragraph)}
    ${((e=!1,r=!1)=>r?f`
            display: block;
        `:e?f`
            display: inline;
        `:f`
            display: block;
        `)(r.inline,r.paragraph)}
    color: ${Qt.text};
`;var cn;!function(t){const n=(e,r,t)=>{const n=p(e).attrs((({inline:e})=>({as:e?"span":void 0})))`
            ${e=>dn(r,e)}
        `;return n.displayName=`Typography.${t}`,n};t.HeaderXXL=n("h1","header-xxl","HeaderXXL"),t.HeaderXL=n("h2","header-xl","HeaderXL"),t.HeaderLG=n("h3","header-lg","HeaderLG"),t.HeaderMD=n("h4","header-md","HeaderMD"),t.HeaderSM=n("h5","header-sm","HeaderSM"),t.HeaderXS=n("h6","header-xs","HeaderXS");const i=(e,r)=>{const t=p.p.attrs((({inline:e})=>({as:e?"span":void 0})))`
            ${r=>dn(e,r)}
        `;return t.displayName=`Typography.${r}`,t};t.BodyBL=i("body-baseline","BodyBL"),t.BodyMD=i("body-md","BodyMD"),t.BodySM=i("body-sm","BodySM"),t.BodyXS=i("body-xs","BodyXS");const o=(t,n)=>{const i=p.a`
            ${e=>f`
                ${ln(t,e.weight||"regular")}
                color: ${Qt.hyperlink};
                text-decoration: none;

                :hover,
                :active,
                :focus {
                    color: ${Qt["text-hover"]};
                }
            `}
        `,o=t=>{var{external:n=!1,children:o}=t,s=W(t,["external","children"]);return e(i,Object.assign({},s,{children:[o,n&&r(un,{})]}))};return o.displayName=`Typography.${n}`,o};t.LinkBL=o("body-baseline","LinkBL"),t.LinkMD=o("body-md","LinkMD"),t.LinkSM=o("body-sm","LinkSM"),t.LinkXS=o("body-xs","LinkXS")}(cn||(cn={}));const un=p(m)`
    height: 1lh;
    width: 1em;
    margin-left: 0.4em;
    vertical-align: middle;
`;function hn(e,r){return hn=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,r){return e.__proto__=r,e},hn(e,r)}function gn(e){return e&&e.stopPropagation&&e.stopPropagation(),e&&e.preventDefault&&e.preventDefault(),!1}function bn(e){return null==e?[]:Array.isArray(e)?e.slice():[e]}function mn(e){return null!==e&&1===e.length?e[0]:e.slice()}function pn(e){Object.keys(e).forEach((r=>{"undefined"!=typeof document&&document.addEventListener(r,e[r],!1)}))}function fn(e,r){return yn(function(e,r){let t=e;return t<=r.min&&(t=r.min),t>=r.max&&(t=r.max),t}(e,r),r)}function yn(e,r){const t=(e-r.min)%r.step;let n=e-t;return 2*Math.abs(t)>=r.step&&(n+=t>0?r.step:-r.step),parseFloat(n.toFixed(5))}let vn=function(e){function r(r){var t;(t=e.call(this,r)||this).onKeyUp=()=>{t.onEnd()},t.onMouseUp=()=>{t.onEnd(t.getMouseEventMap())},t.onTouchEnd=e=>{e.preventDefault(),t.onEnd(t.getTouchEventMap())},t.onBlur=()=>{t.setState({index:-1},t.onEnd(t.getKeyDownEventMap()))},t.onMouseMove=e=>{t.setState({pending:!0});const r=t.getMousePosition(e),n=t.getDiffPosition(r[0]),i=t.getValueFromPosition(n);t.move(i)},t.onTouchMove=e=>{if(e.touches.length>1)return;t.setState({pending:!0});const r=t.getTouchPosition(e);if(void 0===t.isScrolling){const e=r[0]-t.startPosition[0],n=r[1]-t.startPosition[1];t.isScrolling=Math.abs(n)>Math.abs(e)}if(t.isScrolling)return void t.setState({index:-1});const n=t.getDiffPosition(r[0]),i=t.getValueFromPosition(n);t.move(i)},t.onKeyDown=e=>{if(!(e.ctrlKey||e.shiftKey||e.altKey||e.metaKey))switch(t.setState({pending:!0}),e.key){case"ArrowLeft":case"ArrowDown":case"Left":case"Down":e.preventDefault(),t.moveDownByStep();break;case"ArrowRight":case"ArrowUp":case"Right":case"Up":e.preventDefault(),t.moveUpByStep();break;case"Home":e.preventDefault(),t.move(t.props.min);break;case"End":e.preventDefault(),t.move(t.props.max);break;case"PageDown":e.preventDefault(),t.moveDownByStep(t.props.pageFn(t.props.step));break;case"PageUp":e.preventDefault(),t.moveUpByStep(t.props.pageFn(t.props.step))}},t.onSliderMouseDown=e=>{if(!t.props.disabled&&2!==e.button){if(t.setState({pending:!0}),!t.props.snapDragDisabled){const r=t.getMousePosition(e);t.forceValueFromPosition(r[0],(e=>{t.start(e,r[0]),pn(t.getMouseEventMap())}))}gn(e)}},t.onSliderClick=e=>{if(!t.props.disabled&&t.props.onSliderClick&&!t.hasMoved){const r=t.getMousePosition(e),n=fn(t.calcValue(t.calcOffsetFromPosition(r[0])),t.props);t.props.onSliderClick(n)}},t.createOnKeyDown=e=>r=>{t.props.disabled||(t.start(e),pn(t.getKeyDownEventMap()),gn(r))},t.createOnMouseDown=e=>r=>{if(t.props.disabled||2===r.button)return;t.setState({pending:!0});const n=t.getMousePosition(r);t.start(e,n[0]),pn(t.getMouseEventMap()),gn(r)},t.createOnTouchStart=e=>r=>{if(t.props.disabled||r.touches.length>1)return;t.setState({pending:!0});const n=t.getTouchPosition(r);t.startPosition=n,t.isScrolling=void 0,t.start(e,n[0]),pn(t.getTouchEventMap()),function(e){e.stopPropagation&&e.stopPropagation()}(r)},t.handleResize=()=>{const e=window.setTimeout((()=>{t.pendingResizeTimeouts.shift(),t.resize()}),0);t.pendingResizeTimeouts.push(e)},t.renderThumb=(e,r)=>{const n=t.props.thumbClassName+" "+t.props.thumbClassName+"-"+r+" "+(t.state.index===r?t.props.thumbActiveClassName:""),i={ref:e=>{t["thumb"+r]=e},key:t.props.thumbClassName+"-"+r,className:n,style:e,onMouseDown:t.createOnMouseDown(r),onTouchStart:t.createOnTouchStart(r),onFocus:t.createOnKeyDown(r),tabIndex:0,role:"slider","aria-orientation":t.props.orientation,"aria-valuenow":t.state.value[r],"aria-valuemin":t.props.min,"aria-valuemax":t.props.max,"aria-label":Array.isArray(t.props.ariaLabel)?t.props.ariaLabel[r]:t.props.ariaLabel,"aria-labelledby":Array.isArray(t.props.ariaLabelledby)?t.props.ariaLabelledby[r]:t.props.ariaLabelledby,"aria-disabled":t.props.disabled},o={index:r,value:mn(t.state.value),valueNow:t.state.value[r]};return t.props.ariaValuetext&&(i["aria-valuetext"]="string"==typeof t.props.ariaValuetext?t.props.ariaValuetext:t.props.ariaValuetext(o)),t.props.renderThumb(i,o)},t.renderTrack=(e,r,n)=>{const i={key:t.props.trackClassName+"-"+e,className:t.props.trackClassName+" "+t.props.trackClassName+"-"+e,style:t.buildTrackStyle(r,t.state.upperBound-n)},o={index:e,value:mn(t.state.value)};return t.props.renderTrack(i,o)};let n=bn(r.value);n.length||(n=bn(r.defaultValue)),t.pendingResizeTimeouts=[];const o=[];for(let e=0;e<n.length;e+=1)n[e]=fn(n[e],r),o.push(e);return t.resizeObserver=null,t.resizeElementRef=i.createRef(),t.state={index:-1,upperBound:0,sliderLength:0,value:n,zIndices:o},t}!function(e,r){e.prototype=Object.create(r.prototype),e.prototype.constructor=e,hn(e,r)}(r,e);var t=r.prototype;return t.componentDidMount=function(){"undefined"!=typeof window&&(this.resizeObserver=new ResizeObserver(this.handleResize),this.resizeObserver.observe(this.resizeElementRef.current),this.resize())},r.getDerivedStateFromProps=function(e,r){const t=bn(e.value);return t.length?r.pending?null:{value:t.map((r=>fn(r,e)))}:null},t.componentDidUpdate=function(){0===this.state.upperBound&&this.resize()},t.componentWillUnmount=function(){this.clearPendingResizeTimeouts(),this.resizeObserver&&this.resizeObserver.disconnect()},t.onEnd=function(e){e&&function(e){Object.keys(e).forEach((r=>{"undefined"!=typeof document&&document.removeEventListener(r,e[r],!1)}))}(e),this.hasMoved&&this.fireChangeEvent("onAfterChange"),this.setState({pending:!1}),this.hasMoved=!1},t.getValue=function(){return mn(this.state.value)},t.getClosestIndex=function(e){let r=Number.MAX_VALUE,t=-1;const{value:n}=this.state,i=n.length;for(let o=0;o<i;o+=1){const i=this.calcOffset(n[o]),s=Math.abs(e-i);s<r&&(r=s,t=o)}return t},t.getMousePosition=function(e){return[e["page"+this.axisKey()],e["page"+this.orthogonalAxisKey()]]},t.getTouchPosition=function(e){const r=e.touches[0];return[r["page"+this.axisKey()],r["page"+this.orthogonalAxisKey()]]},t.getKeyDownEventMap=function(){return{keydown:this.onKeyDown,keyup:this.onKeyUp,focusout:this.onBlur}},t.getMouseEventMap=function(){return{mousemove:this.onMouseMove,mouseup:this.onMouseUp}},t.getTouchEventMap=function(){return{touchmove:this.onTouchMove,touchend:this.onTouchEnd}},t.getValueFromPosition=function(e){const r=e/(this.state.sliderLength-this.state.thumbSize)*(this.props.max-this.props.min);return fn(this.state.startValue+r,this.props)},t.getDiffPosition=function(e){let r=e-this.state.startPosition;return this.props.invert&&(r*=-1),r},t.resize=function(){const{slider:e,thumb0:r}=this;if(!e||!r)return;const t=this.sizeKey(),n=e.getBoundingClientRect(),i=e[t],o=n[this.posMaxKey()],s=n[this.posMinKey()],a=r.getBoundingClientRect()[t.replace("client","").toLowerCase()],l=i-a,d=Math.abs(o-s);this.state.upperBound===l&&this.state.sliderLength===d&&this.state.thumbSize===a||this.setState({upperBound:l,sliderLength:d,thumbSize:a})},t.calcOffset=function(e){const r=this.props.max-this.props.min;return 0===r?0:(e-this.props.min)/r*this.state.upperBound},t.calcValue=function(e){return e/this.state.upperBound*(this.props.max-this.props.min)+this.props.min},t.calcOffsetFromPosition=function(e){const{slider:r}=this,t=r.getBoundingClientRect(),n=t[this.posMaxKey()],i=t[this.posMinKey()];let o=e-(window["page"+this.axisKey()+"Offset"]+(this.props.invert?n:i));return this.props.invert&&(o=this.state.sliderLength-o),o-=this.state.thumbSize/2,o},t.forceValueFromPosition=function(e,r){const t=this.calcOffsetFromPosition(e),n=this.getClosestIndex(t),i=fn(this.calcValue(t),this.props),o=this.state.value.slice();o[n]=i;for(let e=0;e<o.length-1;e+=1)if(o[e+1]-o[e]<this.props.minDistance)return;this.fireChangeEvent("onBeforeChange"),this.hasMoved=!0,this.setState({value:o},(()=>{r(n),this.fireChangeEvent("onChange")}))},t.clearPendingResizeTimeouts=function(){do{const e=this.pendingResizeTimeouts.shift();clearTimeout(e)}while(this.pendingResizeTimeouts.length)},t.start=function(e,r){const t=this["thumb"+e];t&&t.focus();const{zIndices:n}=this.state;n.splice(n.indexOf(e),1),n.push(e),this.setState((t=>({startValue:t.value[e],startPosition:void 0!==r?r:t.startPosition,index:e,zIndices:n})))},t.moveUpByStep=function(e){void 0===e&&(e=this.props.step);const r=this.state.value[this.state.index],t=fn(this.props.invert&&"horizontal"===this.props.orientation?r-e:r+e,this.props);this.move(Math.min(t,this.props.max))},t.moveDownByStep=function(e){void 0===e&&(e=this.props.step);const r=this.state.value[this.state.index],t=fn(this.props.invert&&"horizontal"===this.props.orientation?r+e:r-e,this.props);this.move(Math.max(t,this.props.min))},t.move=function(e){const r=this.state.value.slice(),{index:t}=this.state,{length:n}=r,i=r[t];if(e===i)return;this.hasMoved||this.fireChangeEvent("onBeforeChange"),this.hasMoved=!0;const{pearling:o,max:s,min:a,minDistance:l}=this.props;if(!o){if(t>0){const n=r[t-1];e<n+l&&(e=n+l)}if(t<n-1){const n=r[t+1];e>n-l&&(e=n-l)}}r[t]=e,o&&n>1&&(e>i?(this.pushSucceeding(r,l,t),function(e,r,t,n){for(let i=0;i<e;i+=1){const o=n-i*t;r[e-1-i]>o&&(r[e-1-i]=o)}}(n,r,l,s)):e<i&&(this.pushPreceding(r,l,t),function(e,r,t,n){for(let i=0;i<e;i+=1){const e=n+i*t;r[i]<e&&(r[i]=e)}}(n,r,l,a))),this.setState({value:r},this.fireChangeEvent.bind(this,"onChange"))},t.pushSucceeding=function(e,r,t){let n,i;for(n=t,i=e[n]+r;null!==e[n+1]&&i>e[n+1];n+=1,i=e[n]+r)e[n+1]=yn(i,this.props)},t.pushPreceding=function(e,r,t){for(let n=t,i=e[n]-r;null!==e[n-1]&&i<e[n-1];n-=1,i=e[n]-r)e[n-1]=yn(i,this.props)},t.axisKey=function(){return"vertical"===this.props.orientation?"Y":"X"},t.orthogonalAxisKey=function(){return"vertical"===this.props.orientation?"X":"Y"},t.posMinKey=function(){return"vertical"===this.props.orientation?this.props.invert?"bottom":"top":this.props.invert?"right":"left"},t.posMaxKey=function(){return"vertical"===this.props.orientation?this.props.invert?"top":"bottom":this.props.invert?"left":"right"},t.sizeKey=function(){return"vertical"===this.props.orientation?"clientHeight":"clientWidth"},t.fireChangeEvent=function(e){this.props[e]&&this.props[e](mn(this.state.value),this.state.index)},t.buildThumbStyle=function(e,r){const t={position:"absolute",touchAction:"none",willChange:this.state.index>=0?this.posMinKey():void 0,zIndex:this.state.zIndices.indexOf(r)+1};return t[this.posMinKey()]=e+"px",t},t.buildTrackStyle=function(e,r){const t={position:"absolute",willChange:this.state.index>=0?this.posMinKey()+","+this.posMaxKey():void 0};return t[this.posMinKey()]=e,t[this.posMaxKey()]=r,t},t.buildMarkStyle=function(e){var r;return(r={position:"absolute"})[this.posMinKey()]=e,r},t.renderThumbs=function(e){const{length:r}=e,t=[];for(let n=0;n<r;n+=1)t[n]=this.buildThumbStyle(e[n],n);const n=[];for(let e=0;e<r;e+=1)n[e]=this.renderThumb(t[e],e);return n},t.renderTracks=function(e){const r=[],t=e.length-1;r.push(this.renderTrack(0,0,e[0]));for(let n=0;n<t;n+=1)r.push(this.renderTrack(n+1,e[n],e[n+1]));return r.push(this.renderTrack(t+1,e[t],this.state.upperBound)),r},t.renderMarks=function(){let{marks:e}=this.props;const r=this.props.max-this.props.min+1;return"boolean"==typeof e?e=Array.from({length:r}).map(((e,r)=>r)):"number"==typeof e&&(e=Array.from({length:r}).map(((e,r)=>r)).filter((r=>r%e==0))),e.map(parseFloat).sort(((e,r)=>e-r)).map((e=>{const r=this.calcOffset(e),t={key:e,className:this.props.markClassName,style:this.buildMarkStyle(r)};return this.props.renderMark(t)}))},t.render=function(){const e=[],{value:r}=this.state,t=r.length;for(let n=0;n<t;n+=1)e[n]=this.calcOffset(r[n],n);const n=this.props.withTracks?this.renderTracks(e):null,o=this.renderThumbs(e),s=this.props.marks?this.renderMarks():null;return i.createElement("div",{ref:e=>{this.slider=e,this.resizeElementRef.current=e},style:{position:"relative"},className:this.props.className+(this.props.disabled?" disabled":""),onMouseDown:this.onSliderMouseDown,onClick:this.onSliderClick},n,o,s)},r}(i.Component);vn.displayName="ReactSlider",vn.defaultProps={min:0,max:100,step:1,pageFn:e=>10*e,minDistance:0,defaultValue:0,orientation:"horizontal",className:"slider",thumbClassName:"thumb",thumbActiveClassName:"active",trackClassName:"track",markClassName:"mark",withTracks:!0,pearling:!1,disabled:!1,snapDragDisabled:!1,invert:!1,marks:[],renderThumb:e=>i.createElement("div",e),renderTrack:e=>i.createElement("div",e),renderMark:e=>i.createElement("span",e)};var xn=vn;const wn=p.div`
    isolation: isolate;
`,$n=p.div`
    margin-top: ${nn["spacing-8"]};
    display: flex;
    justify-content: space-between;
    gap: ${nn["spacing-8"]};
`,Fn=p.div`
    margin-bottom: ${nn["spacing-8"]};
`,Dn=p(cn.BodyBL)`
    overflow-wrap: anywhere;
`,En=p(xn)`
    height: 0.875rem;
`,Cn=p.div`
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

        background-color: ${Qt.bg};
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.16);
        border: ${tn["width-010"]} ${tn.solid}
            ${e=>e.$disabled?Qt["border-selected-disabled"]:Qt["border-strong"]};
        border-radius: 50%;
    }
`,Mn=p.div`
    height: 0.875rem;
    width: 0.875rem;
    position: relative;
    outline: none;

    :focus ${Cn}:after {
        outline-offset: -1px;
        outline: ${tn["width-040"]} ${tn.solid}
            ${Qt["border-selected"]};
    }
`,On=p.div`
    height: 0.25rem;
    top: 50%;
    transform: translateY(-50%);
    border-radius: ${on.full};

    background: ${e=>e.$color&&"function"==typeof e.$color?e.$color(e):e.$color||Qt["border-strong"](e)};
`,kn=p.div`
    display: flex;
    margin-bottom: ${nn["spacing-16"]};
    align-items: baseline;
`,zn=p.div`
    margin: 0 0.5rem;
`,Bn=p.div`
    width: 100%;
    height: 4rem;
    display: flex;
    align-items: flex-end;
    padding: 0 0.4375rem;
`,Sn=p.div`
    flex: 1;
    border-radius: ${on.sm} ${on.sm} 0 0;
    border: 0.5px solid transparent; // space between bars
    background-clip: content-box;

    ${e=>{let r=Qt["bg-strongest"];return e.$disabled&&e.$selected?r=Qt["bg-selected-stronger-disabled"]:e.$disabled?r=Qt["bg-disabled"]:e.$selected&&(r=Qt["bg-selected-stronger"]),f`
            background-color: ${r};
        `}}
`,An=p((t=>{var{value:n,min:i=0,max:a=100,step:l=1,minRange:d,numOfThumbs:c=2,colors:u,disabled:h,readOnly:g,ariaLabels:b,showSliderLabels:m,sliderLabelPrefix:p,sliderLabelSuffix:f,showIndicatorLabel:y,indicatorLabelPrefix:v,indicatorLabelSuffix:x,renderSliderLabel:w,onChange:$,onChangeEnd:F}=t,D=W(t,["value","min","max","step","minRange","numOfThumbs","colors","disabled","readOnly","ariaLabels","showSliderLabels","sliderLabelPrefix","sliderLabelSuffix","showIndicatorLabel","indicatorLabelPrefix","indicatorLabelSuffix","renderSliderLabel","onChange","onChangeEnd"]);const[E,C]=o(O()),M=function(){const e=function(){const e=h||g?Qt["border-disabled"]:Qt["border-strong"],r=h||g?Qt["border-selected-disabled"]:Qt["border-selected"];if(1===c)return[r,e];const t=[];t.push(e);for(let e=0;e<c-1;e++)t.push(r);return t.push(e),t}();return new Array(c+1).fill(0).map(((r,t)=>(null==u?void 0:u[t])||e[t]))}();s((()=>{n!==E&&C(O())}),[n]);function O(){if(n&&n.length===c)return n;const e=[];for(let r=0;r<c;r++)e.push(i+l*r);return e}const k=r=>w?w(r):e(Dn,{children:[p,r,f]});return e(wn,Object.assign({},D,{children:[y&&r(Fn,{children:(()=>{let r="";if(1===E.length)r=`${E[0]}`;else if(2===E.length)r=`${E[0]} - ${E[1]}`;else if(E.length>2){r=`${Math.min(...E)} - ${Math.max(...E)}`}return e(Dn,{children:[v,r,x]})})()}),r(En,{step:l,min:i,max:a,value:E,disabled:h||g,onChange:(e,r)=>{if("number"==typeof e){const r=[e];C(r),null==$||$(r)}else{if(r>-1&&E[r]===e[r])return;C(e),null==$||$(e)}},onAfterChange:e=>{if("number"==typeof e){const r=[e];C(r),null==F||F(r)}else C(e),null==F||F(e)},minDistance:d,ariaLabel:b,renderThumb:(e,t)=>r(Mn,Object.assign({"data-testid":`slider-thumb-${t.index}`},e,{tabIndex:h?void 0:e.tabIndex},{children:r(Cn,{$disabled:h,$readOnly:g})})),renderTrack:(e,t)=>r(On,Object.assign({"data-testid":`slider-track-${t.index}`},e,{$color:M[t.index]}))}),m&&e($n,{children:[r("div",{children:k(i)}),r("div",{children:k(a)})]})]}))}))`
    margin-top: -0.3125rem;
`,_n=n=>{var{bins:i=[],interval:l,disabled:d,readOnly:c,value:u,showRangeLabels:h,rangeLabelPrefix:g,rangeLabelSuffix:b,ariaLabels:m,onChange:p,onChangeEnd:f,renderEmptyView:y,renderRangeLabel:v}=n,x=W(n,["bins","interval","disabled","readOnly","value","showRangeLabels","rangeLabelPrefix","rangeLabelSuffix","ariaLabels","onChange","onChangeEnd","renderEmptyView","renderRangeLabel"]);const w=i.map((e=>e.count)),$=Math.max(...w),F=i.map((e=>e.minValue)),D=Math.max(...F),E=Math.min(...F),[C,M]=o(B()),O=a((()=>{const e=[...i].sort(((e,r)=>e.minValue-r.minValue)),r=(D-E)/l+1,t=[];for(let n=0;n<r;n++){const r=e.find((e=>e.minValue===E+l*n));r?t.push(r):t.push({count:0,minValue:E+l*n})}return t}),[i,l]);s((()=>{u!==C&&M(B())}),[u]);const k=e=>{M(e),null==p||p(e)},z=e=>{M(e),null==f||f(e)};function B(){return null!=u?u:[E,E+l]}const S=r=>v?v(r):e(cn.BodyBL,{children:[g,r,b]});return e("div",Object.assign({},x,{children:[h&&e(kn,{children:[S(C[0]),r(zn,{children:"-"}),S(C[1])]}),O.every((e=>0===e.count))&&y?y():e(t,{children:[r(Bn,{children:O.map(((e,t)=>{const n=e.count/$;return r(Sn,{style:{height:n?`calc(calc(100% - 0.25rem) * ${n} + 0.25rem)`:0},$selected:e.minValue>=C[0]&&e.minValue<C[1],$disabled:d||c},t)}))}),r(An,{min:E,max:D+l,step:l,minRange:l,numOfThumbs:2,value:C,disabled:d,readOnly:c,ariaLabels:m,onChange:k,onChangeEnd:z})]})]}))};var Tn=function(e,r){return Tn=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,r){e.__proto__=r}||function(e,r){for(var t in r)Object.prototype.hasOwnProperty.call(r,t)&&(e[t]=r[t])},Tn(e,r)};var Ln=function(){return Ln=Object.assign||function(e){for(var r,t=1,n=arguments.length;t<n;t++)for(var i in r=arguments[t])Object.prototype.hasOwnProperty.call(r,i)&&(e[i]=r[i]);return e},Ln.apply(this,arguments)};var jn="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};var Yn=function(e){var r=typeof e;return null!=e&&("object"==r||"function"==r)},Pn="object"==typeof jn&&jn&&jn.Object===Object&&jn,Rn="object"==typeof self&&self&&self.Object===Object&&self,In=Pn||Rn||Function("return this")(),Hn=In,Wn=function(){return Hn.Date.now()},Nn=/\s/;var Vn=function(e){for(var r=e.length;r--&&Nn.test(e.charAt(r)););return r},Kn=/^\s+/;var Un=function(e){return e?e.slice(0,Vn(e)+1).replace(Kn,""):e},Zn=In.Symbol,Xn=Zn,qn=Object.prototype,Jn=qn.hasOwnProperty,Gn=qn.toString,Qn=Xn?Xn.toStringTag:void 0;var ei=function(e){var r=Jn.call(e,Qn),t=e[Qn];try{e[Qn]=void 0;var n=!0}catch(e){}var i=Gn.call(e);return n&&(r?e[Qn]=t:delete e[Qn]),i},ri=Object.prototype.toString;var ti=ei,ni=function(e){return ri.call(e)},ii=Zn?Zn.toStringTag:void 0;var oi=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":ii&&ii in Object(e)?ti(e):ni(e)},si=function(e){return null!=e&&"object"==typeof e};var ai=Un,li=Yn,di=function(e){return"symbol"==typeof e||si(e)&&"[object Symbol]"==oi(e)},ci=/^[-+]0x[0-9a-f]+$/i,ui=/^0b[01]+$/i,hi=/^0o[0-7]+$/i,gi=parseInt;var bi=Yn,mi=Wn,pi=function(e){if("number"==typeof e)return e;if(di(e))return NaN;if(li(e)){var r="function"==typeof e.valueOf?e.valueOf():e;e=li(r)?r+"":r}if("string"!=typeof e)return 0===e?e:+e;e=ai(e);var t=ui.test(e);return t||hi.test(e)?gi(e.slice(2),t?2:8):ci.test(e)?NaN:+e},fi=Math.max,yi=Math.min;var vi=function(e,r,t){var n,i,o,s,a,l,d=0,c=!1,u=!1,h=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function g(r){var t=n,o=i;return n=i=void 0,d=r,s=e.apply(o,t)}function b(e){var t=e-l;return void 0===l||t>=r||t<0||u&&e-d>=o}function m(){var e=mi();if(b(e))return p(e);a=setTimeout(m,function(e){var t=r-(e-l);return u?yi(t,o-(e-d)):t}(e))}function p(e){return a=void 0,h&&n?g(e):(n=i=void 0,s)}function f(){var e=mi(),t=b(e);if(n=arguments,i=this,l=e,t){if(void 0===a)return function(e){return d=e,a=setTimeout(m,r),c?g(e):s}(l);if(u)return clearTimeout(a),a=setTimeout(m,r),g(l)}return void 0===a&&(a=setTimeout(m,r)),s}return r=pi(r)||0,bi(t)&&(c=!!t.leading,o=(u="maxWait"in t)?fi(pi(t.maxWait)||0,r):o,h="trailing"in t?!!t.trailing:h),f.cancel=function(){void 0!==a&&clearTimeout(a),d=0,n=l=i=a=void 0},f.flush=function(){return void 0===a?s:p(mi())},f},xi=vi,wi=Yn;var $i=function(e,r,t){var n=!0,i=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return wi(t)&&(n="leading"in t?!!t.leading:n,i="trailing"in t?!!t.trailing:i),xi(e,r,{leading:n,maxWait:r,trailing:i})},Fi=function(e,r,t,n){switch(r){case"debounce":return vi(e,t,n);case"throttle":return $i(e,t,n);default:return e}},Di=function(e){return"function"==typeof e},Ei=function(){return"undefined"==typeof window},Ci=function(e){return e instanceof Element||e instanceof HTMLDocument},Mi=function(e,r,t,n){return function(i){var o=i.width,s=i.height;r((function(r){return r.width===o&&r.height===s||r.width===o&&!n||r.height===s&&!t?r:(e&&Di(e)&&e(o,s),{width:o,height:s})}))}};!function(e){function r(r){var t=e.call(this,r)||this;t.cancelHandler=function(){t.resizeHandler&&t.resizeHandler.cancel&&(t.resizeHandler.cancel(),t.resizeHandler=null)},t.attachObserver=function(){var e=t.props,r=e.targetRef,n=e.observerOptions;if(!Ei()){r&&r.current&&(t.targetRef.current=r.current);var i=t.getElement();i&&(t.observableElement&&t.observableElement===i||(t.observableElement=i,t.resizeObserver.observe(i,n)))}},t.getElement=function(){var e=t.props,r=e.querySelector,n=e.targetDomEl;if(Ei())return null;if(r)return document.querySelector(r);if(n&&Ci(n))return n;if(t.targetRef&&Ci(t.targetRef.current))return t.targetRef.current;var i=H(t);if(!i)return null;switch(t.getRenderType()){case"renderProp":case"childFunction":case"child":case"childArray":return i;default:return i.parentElement}},t.createResizeHandler=function(e){var r=t.props,n=r.handleWidth,i=void 0===n||n,o=r.handleHeight,s=void 0===o||o,a=r.onResize;if(i||s){var l=Mi(a,t.setState.bind(t),i,s);e.forEach((function(e){var r=e&&e.contentRect||{},n=r.width,i=r.height;!t.skipOnMount&&!Ei()&&l({width:n,height:i}),t.skipOnMount=!1}))}},t.getRenderType=function(){var e=t.props,r=e.render,n=e.children;return Di(r)?"renderProp":Di(n)?"childFunction":d(n)?"child":Array.isArray(n)?"childArray":"parent"};var n=r.skipOnMount,i=r.refreshMode,o=r.refreshRate,s=void 0===o?1e3:o,a=r.refreshOptions;return t.state={width:void 0,height:void 0},t.skipOnMount=n,t.targetRef=c(),t.observableElement=null,Ei()||(t.resizeHandler=Fi(t.createResizeHandler,i,s,a),t.resizeObserver=new window.ResizeObserver(t.resizeHandler)),t}(function(e,r){if("function"!=typeof r&&null!==r)throw new TypeError("Class extends value "+String(r)+" is not a constructor or null");function t(){this.constructor=e}Tn(e,r),e.prototype=null===r?Object.create(r):(t.prototype=r.prototype,new t)})(r,e),r.prototype.componentDidMount=function(){this.attachObserver()},r.prototype.componentDidUpdate=function(){this.attachObserver()},r.prototype.componentWillUnmount=function(){Ei()||(this.observableElement=null,this.resizeObserver.disconnect(),this.cancelHandler())},r.prototype.render=function(){var e,r=this.props,t=r.render,i=r.children,o=r.nodeType,s=void 0===o?"div":o,a=this.state,l={width:a.width,height:a.height,targetRef:this.targetRef};switch(this.getRenderType()){case"renderProp":return t&&t(l);case"childFunction":return(e=i)(l);case"child":if((e=i).type&&"string"==typeof e.type){var d=function(e,r){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(n=Object.getOwnPropertySymbols(e);i<n.length;i++)r.indexOf(n[i])<0&&Object.prototype.propertyIsEnumerable.call(e,n[i])&&(t[n[i]]=e[n[i]])}return t}(l,["targetRef"]);return u(e,d)}return u(e,l);case"childArray":return(e=i).map((function(e){return!!e&&u(e,l)}));default:return n.createElement(s,null)}}}(h);var Oi,ki=Ei()?s:g;!function(e){e.transformWithSpaces=(e,r)=>{const t="(.{"+r+"})";return e.replace(/[^\dA-Z]/gi,"").replace(new RegExp(t,"g"),"$1 ").trim()},e.padValue=(e,r)=>{if("0"===e)return r?e:e.padStart(2,"0");if(""===e)return e;return parseInt(e).toString().padStart(2,"0")},e.shouldTruncateToTwoLines=(e,r)=>{const t=Math.floor(r/9);return e.length>=2*t||1===e.split(" ").length&&e.length>t},e.truncateOneLine=(e,r,t,n,i=8)=>{let o=0;r>t&&(o=Math.floor((r-t)/i));const s=n+o;if(s<e.length){const r=Math.floor(s/2);return e.substring(0,r)+" ... "+e.substring(e.length-r,e.length)}return e},e.truncateTwoLines=(e,r,t,n=1.2)=>{const i=Math.floor(2*r/(.6*t))*(2/n);if(e.length<=i)return e;const o=Math.floor(.6*i),s=Math.floor(.2*i);return`${e.substring(0,o)}...${e.substring(e.length-s)}`},e.getTextWidth=(r,t)=>{if("undefined"==typeof document)return 0;const n=(e.getTextWidth.canvas||(e.getTextWidth.canvas=document.createElement("canvas"))).getContext("2d");n.font=t;return n.measureText(r).width},e.maskValue=(e,t)=>{if(!e)return e;const{maskRange:n,unmaskRange:i,maskChar:o="•",maskRegex:s,maskTransformer:a}=t;if(a)return a(e);if(s)return e.replace(s,o);if(n){const{startIndex:t,endIndex:i}=r(n[0],n[1]);return e.substring(0,t)+o.repeat(e.substring(t,i+1).length)+e.substring(i+1)}if(i){const{startIndex:t,endIndex:n}=r(i[0],i[1]);return o.repeat(e.substring(0,t).length)+e.substring(t,n+1)+o.repeat(e.substring(n+1).length)}return e};const r=(e,r)=>e<r?{startIndex:e,endIndex:r}:{startIndex:r,endIndex:e}}(Oi||(Oi={}));const zi=e=>f`
    display: -webkit-box;
    -webkit-line-clamp: ${e};
    -webkit-box-orient: vertical;
    overflow: hidden;
`,Bi=p.div`
    font-weight: ${e=>e.$bold?en.Spec["weight-semibold"]:en.Spec["weight-regular"]};
    color: ${e=>e.$selected?Qt["text-selected"]:Qt.text};
    width: 100%;

    ${e=>"end"===e.$truncateType&&zi(e.$maxLines||2)}
    overflow-wrap: break-word;
`,Si=p.div`
    color: ${Qt["text-subtlest"]};
    width: 100%;

    ${e=>"end"===e.$truncateType&&zi(e.$maxLines||2)}
    overflow-wrap: break-word;

    ${e=>"next-line"===e.$labelDisplayType?f`
                    ${en["body-md-semibold"]}
                `:f`
                    ${en["body-baseline-regular"]}
                `}
`;p.span`
    font-weight: ${en.Spec["weight-semibold"]};
`,p.div`
    text-align: left;
    width: 100%;
    overflow: hidden;
    overflow-wrap: break-word;

    ${e=>"small"===e.$variant?en["body-md-regular"]:en["body-baseline-regular"]}

    ${e=>{switch(e.$labelDisplayType){case"next-line":return f`
                    display: flex;
                    flex-direction: column;
                `;case"inline":return f`
                    ${Bi} {
                        display: inline;
                    }

                    ${Si} {
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
`;var Ai=Er;var _i=function(e){var r=this.__data__,t=r.delete(e);return this.size=r.size,t};var Ti=function(e){return this.__data__.get(e)};var Li=function(e){return this.__data__.has(e)},ji=Er,Yi=Cr,Pi=Kr;var Ri=function(e,r){var t=this.__data__;if(t instanceof ji){var n=t.__data__;if(!Yi||n.length<199)return n.push([e,r]),this.size=++t.size,this;t=this.__data__=new Pi(n)}return t.set(e,r),this.size=t.size,this},Ii=Er,Hi=function(){this.__data__=new Ai,this.size=0},Wi=_i,Ni=Ti,Vi=Li,Ki=Ri;function Ui(e){var r=this.__data__=new Ii(e);this.size=r.size}Ui.prototype.clear=Hi,Ui.prototype.delete=Wi,Ui.prototype.get=Ni,Ui.prototype.has=Vi,Ui.prototype.set=Ki;var Zi=Kr,Xi=function(e){return this.__data__.set(e,"__lodash_hash_undefined__"),this},qi=function(e){return this.__data__.has(e)};function Ji(e){var r=-1,t=null==e?0:e.length;for(this.__data__=new Zi;++r<t;)this.add(e[r])}Ji.prototype.add=Ji.prototype.push=Xi,Ji.prototype.has=qi,q.Uint8Array;var Gi=J?J.prototype:void 0;Gi&&Gi.valueOf;var Qi=le,eo=de;var ro=function(e){return eo(e)&&"[object Arguments]"==Qi(e)},to=Object.prototype;to.hasOwnProperty,to.propertyIsEnumerable;ro(function(){return arguments}());var no={exports:{}};var io=function(){return!1};!function(e,r){var t=q,n=io,i=r&&!r.nodeType&&r,o=i&&e&&!e.nodeType&&e,s=o&&o.exports===i?t.Buffer:void 0,a=(s?s.isBuffer:void 0)||n;e.exports=a}(no,no.exports);var oo={exports:{}};!function(e,r){var t=U,n=r&&!r.nodeType&&r,i=n&&e&&!e.nodeType&&e,o=i&&i.exports===n&&t.process,s=function(){try{var e=i&&i.require&&i.require("util").types;return e||o&&o.binding&&o.binding("util")}catch(e){}}();e.exports=s}(oo,oo.exports);var so=oo.exports;so&&so.isTypedArray;var ao=Ie(q,"DataView"),lo=Cr,co=Ie(q,"Promise"),uo=Ie(q,"Set"),ho=Ie(q,"WeakMap"),go=le,bo=Me,mo="[object Map]",po="[object Promise]",fo="[object Set]",yo="[object WeakMap]",vo="[object DataView]",xo=bo(ao),wo=bo(lo),$o=bo(co),Fo=bo(uo),Do=bo(ho),Eo=go;(ao&&Eo(new ao(new ArrayBuffer(1)))!=vo||lo&&Eo(new lo)!=mo||co&&Eo(co.resolve())!=po||uo&&Eo(new uo)!=fo||ho&&Eo(new ho)!=yo)&&(Eo=function(e){var r=go(e),t="[object Object]"==r?e.constructor:void 0,n=t?bo(t):"";if(n)switch(n){case xo:return vo;case wo:return mo;case $o:return po;case Fo:return fo;case Do:return yo}return r});var Co={exports:{}};Co.exports=function(){var e=1e3,r=6e4,t=36e5,n="millisecond",i="second",o="minute",s="hour",a="day",l="week",d="month",c="quarter",u="year",h="date",g="Invalid Date",b=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,m=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,p={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(e){var r=["th","st","nd","rd"],t=e%100;return"["+e+(r[(t-20)%10]||r[t]||r[0])+"]"}},f=function(e,r,t){var n=String(e);return!n||n.length>=r?e:""+Array(r+1-n.length).join(t)+e},y={s:f,z:function(e){var r=-e.utcOffset(),t=Math.abs(r),n=Math.floor(t/60),i=t%60;return(r<=0?"+":"-")+f(n,2,"0")+":"+f(i,2,"0")},m:function e(r,t){if(r.date()<t.date())return-e(t,r);var n=12*(t.year()-r.year())+(t.month()-r.month()),i=r.clone().add(n,d),o=t-i<0,s=r.clone().add(n+(o?-1:1),d);return+(-(n+(t-i)/(o?i-s:s-i))||0)},a:function(e){return e<0?Math.ceil(e)||0:Math.floor(e)},p:function(e){return{M:d,y:u,w:l,d:a,D:h,h:s,m:o,s:i,ms:n,Q:c}[e]||String(e||"").toLowerCase().replace(/s$/,"")},u:function(e){return void 0===e}},v="en",x={};x[v]=p;var w="$isDayjsObject",$=function(e){return e instanceof C||!(!e||!e[w])},F=function e(r,t,n){var i;if(!r)return v;if("string"==typeof r){var o=r.toLowerCase();x[o]&&(i=o),t&&(x[o]=t,i=o);var s=r.split("-");if(!i&&s.length>1)return e(s[0])}else{var a=r.name;x[a]=r,i=a}return!n&&i&&(v=i),i||!n&&v},D=function(e,r){if($(e))return e.clone();var t="object"==typeof r?r:{};return t.date=e,t.args=arguments,new C(t)},E=y;E.l=F,E.i=$,E.w=function(e,r){return D(e,{locale:r.$L,utc:r.$u,x:r.$x,$offset:r.$offset})};var C=function(){function p(e){this.$L=F(e.locale,null,!0),this.parse(e),this.$x=this.$x||e.x||{},this[w]=!0}var f=p.prototype;return f.parse=function(e){this.$d=function(e){var r=e.date,t=e.utc;if(null===r)return new Date(NaN);if(E.u(r))return new Date;if(r instanceof Date)return new Date(r);if("string"==typeof r&&!/Z$/i.test(r)){var n=r.match(b);if(n){var i=n[2]-1||0,o=(n[7]||"0").substring(0,3);return t?new Date(Date.UTC(n[1],i,n[3]||1,n[4]||0,n[5]||0,n[6]||0,o)):new Date(n[1],i,n[3]||1,n[4]||0,n[5]||0,n[6]||0,o)}}return new Date(r)}(e),this.init()},f.init=function(){var e=this.$d;this.$y=e.getFullYear(),this.$M=e.getMonth(),this.$D=e.getDate(),this.$W=e.getDay(),this.$H=e.getHours(),this.$m=e.getMinutes(),this.$s=e.getSeconds(),this.$ms=e.getMilliseconds()},f.$utils=function(){return E},f.isValid=function(){return!(this.$d.toString()===g)},f.isSame=function(e,r){var t=D(e);return this.startOf(r)<=t&&t<=this.endOf(r)},f.isAfter=function(e,r){return D(e)<this.startOf(r)},f.isBefore=function(e,r){return this.endOf(r)<D(e)},f.$g=function(e,r,t){return E.u(e)?this[r]:this.set(t,e)},f.unix=function(){return Math.floor(this.valueOf()/1e3)},f.valueOf=function(){return this.$d.getTime()},f.startOf=function(e,r){var t=this,n=!!E.u(r)||r,c=E.p(e),g=function(e,r){var i=E.w(t.$u?Date.UTC(t.$y,r,e):new Date(t.$y,r,e),t);return n?i:i.endOf(a)},b=function(e,r){return E.w(t.toDate()[e].apply(t.toDate("s"),(n?[0,0,0,0]:[23,59,59,999]).slice(r)),t)},m=this.$W,p=this.$M,f=this.$D,y="set"+(this.$u?"UTC":"");switch(c){case u:return n?g(1,0):g(31,11);case d:return n?g(1,p):g(0,p+1);case l:var v=this.$locale().weekStart||0,x=(m<v?m+7:m)-v;return g(n?f-x:f+(6-x),p);case a:case h:return b(y+"Hours",0);case s:return b(y+"Minutes",1);case o:return b(y+"Seconds",2);case i:return b(y+"Milliseconds",3);default:return this.clone()}},f.endOf=function(e){return this.startOf(e,!1)},f.$set=function(e,r){var t,l=E.p(e),c="set"+(this.$u?"UTC":""),g=(t={},t[a]=c+"Date",t[h]=c+"Date",t[d]=c+"Month",t[u]=c+"FullYear",t[s]=c+"Hours",t[o]=c+"Minutes",t[i]=c+"Seconds",t[n]=c+"Milliseconds",t)[l],b=l===a?this.$D+(r-this.$W):r;if(l===d||l===u){var m=this.clone().set(h,1);m.$d[g](b),m.init(),this.$d=m.set(h,Math.min(this.$D,m.daysInMonth())).$d}else g&&this.$d[g](b);return this.init(),this},f.set=function(e,r){return this.clone().$set(e,r)},f.get=function(e){return this[E.p(e)]()},f.add=function(n,c){var h,g=this;n=Number(n);var b=E.p(c),m=function(e){var r=D(g);return E.w(r.date(r.date()+Math.round(e*n)),g)};if(b===d)return this.set(d,this.$M+n);if(b===u)return this.set(u,this.$y+n);if(b===a)return m(1);if(b===l)return m(7);var p=(h={},h[o]=r,h[s]=t,h[i]=e,h)[b]||1,f=this.$d.getTime()+n*p;return E.w(f,this)},f.subtract=function(e,r){return this.add(-1*e,r)},f.format=function(e){var r=this,t=this.$locale();if(!this.isValid())return t.invalidDate||g;var n=e||"YYYY-MM-DDTHH:mm:ssZ",i=E.z(this),o=this.$H,s=this.$m,a=this.$M,l=t.weekdays,d=t.months,c=t.meridiem,u=function(e,t,i,o){return e&&(e[t]||e(r,n))||i[t].slice(0,o)},h=function(e){return E.s(o%12||12,e,"0")},b=c||function(e,r,t){var n=e<12?"AM":"PM";return t?n.toLowerCase():n};return n.replace(m,(function(e,n){return n||function(e){switch(e){case"YY":return String(r.$y).slice(-2);case"YYYY":return E.s(r.$y,4,"0");case"M":return a+1;case"MM":return E.s(a+1,2,"0");case"MMM":return u(t.monthsShort,a,d,3);case"MMMM":return u(d,a);case"D":return r.$D;case"DD":return E.s(r.$D,2,"0");case"d":return String(r.$W);case"dd":return u(t.weekdaysMin,r.$W,l,2);case"ddd":return u(t.weekdaysShort,r.$W,l,3);case"dddd":return l[r.$W];case"H":return String(o);case"HH":return E.s(o,2,"0");case"h":return h(1);case"hh":return h(2);case"a":return b(o,s,!0);case"A":return b(o,s,!1);case"m":return String(s);case"mm":return E.s(s,2,"0");case"s":return String(r.$s);case"ss":return E.s(r.$s,2,"0");case"SSS":return E.s(r.$ms,3,"0");case"Z":return i}return null}(e)||i.replace(":","")}))},f.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},f.diff=function(n,h,g){var b,m=this,p=E.p(h),f=D(n),y=(f.utcOffset()-this.utcOffset())*r,v=this-f,x=function(){return E.m(m,f)};switch(p){case u:b=x()/12;break;case d:b=x();break;case c:b=x()/3;break;case l:b=(v-y)/6048e5;break;case a:b=(v-y)/864e5;break;case s:b=v/t;break;case o:b=v/r;break;case i:b=v/e;break;default:b=v}return g?b:E.a(b)},f.daysInMonth=function(){return this.endOf(d).$D},f.$locale=function(){return x[this.$L]},f.locale=function(e,r){if(!e)return this.$L;var t=this.clone(),n=F(e,r,!0);return n&&(t.$L=n),t},f.clone=function(){return E.w(this.$d,this)},f.toDate=function(){return new Date(this.valueOf())},f.toJSON=function(){return this.isValid()?this.toISOString():null},f.toISOString=function(){return this.$d.toISOString()},f.toString=function(){return this.$d.toUTCString()},p}(),M=C.prototype;return D.prototype=M,[["$ms",n],["$s",i],["$m",o],["$H",s],["$W",a],["$M",d],["$y",u],["$D",h]].forEach((function(e){M[e[1]]=function(r){return this.$g(r,e[0],e[1])}})),D.extend=function(e,r){return e.$i||(e(r,C,D),e.$i=!0),D},D.locale=F,D.isDayjs=$,D.unix=function(e){return D(1e3*e)},D.en=x[v],D.Ls=x,D.p={},D}();var Mo=V(Co.exports),Oo={exports:{}};Oo.exports=function(){var e={LTS:"h:mm:ss A",LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D, YYYY",LLL:"MMMM D, YYYY h:mm A",LLLL:"dddd, MMMM D, YYYY h:mm A"},r=/(\[[^[]*\])|([-_:/.,()\s]+)|(A|a|YYYY|YY?|MM?M?M?|Do|DD?|hh?|HH?|mm?|ss?|S{1,3}|z|ZZ?)/g,t=/\d\d/,n=/\d\d?/,i=/\d*[^-_:/,()\s\d]+/,o={},s=function(e){return(e=+e)+(e>68?1900:2e3)},a=function(e){return function(r){this[e]=+r}},l=[/[+-]\d\d:?(\d\d)?|Z/,function(e){(this.zone||(this.zone={})).offset=function(e){if(!e)return 0;if("Z"===e)return 0;var r=e.match(/([+-]|\d\d)/g),t=60*r[1]+(+r[2]||0);return 0===t?0:"+"===r[0]?-t:t}(e)}],d=function(e){var r=o[e];return r&&(r.indexOf?r:r.s.concat(r.f))},c=function(e,r){var t,n=o.meridiem;if(n){for(var i=1;i<=24;i+=1)if(e.indexOf(n(i,0,r))>-1){t=i>12;break}}else t=e===(r?"pm":"PM");return t},u={A:[i,function(e){this.afternoon=c(e,!1)}],a:[i,function(e){this.afternoon=c(e,!0)}],S:[/\d/,function(e){this.milliseconds=100*+e}],SS:[t,function(e){this.milliseconds=10*+e}],SSS:[/\d{3}/,function(e){this.milliseconds=+e}],s:[n,a("seconds")],ss:[n,a("seconds")],m:[n,a("minutes")],mm:[n,a("minutes")],H:[n,a("hours")],h:[n,a("hours")],HH:[n,a("hours")],hh:[n,a("hours")],D:[n,a("day")],DD:[t,a("day")],Do:[i,function(e){var r=o.ordinal,t=e.match(/\d+/);if(this.day=t[0],r)for(var n=1;n<=31;n+=1)r(n).replace(/\[|\]/g,"")===e&&(this.day=n)}],M:[n,a("month")],MM:[t,a("month")],MMM:[i,function(e){var r=d("months"),t=(d("monthsShort")||r.map((function(e){return e.slice(0,3)}))).indexOf(e)+1;if(t<1)throw new Error;this.month=t%12||t}],MMMM:[i,function(e){var r=d("months").indexOf(e)+1;if(r<1)throw new Error;this.month=r%12||r}],Y:[/[+-]?\d+/,a("year")],YY:[t,function(e){this.year=s(e)}],YYYY:[/\d{4}/,a("year")],Z:l,ZZ:l};function h(t){var n,i;n=t,i=o&&o.formats;for(var s=(t=n.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g,(function(r,t,n){var o=n&&n.toUpperCase();return t||i[n]||e[n]||i[o].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g,(function(e,r,t){return r||t.slice(1)}))}))).match(r),a=s.length,l=0;l<a;l+=1){var d=s[l],c=u[d],h=c&&c[0],g=c&&c[1];s[l]=g?{regex:h,parser:g}:d.replace(/^\[|\]$/g,"")}return function(e){for(var r={},t=0,n=0;t<a;t+=1){var i=s[t];if("string"==typeof i)n+=i.length;else{var o=i.regex,l=i.parser,d=e.slice(n),c=o.exec(d)[0];l.call(r,c),e=e.replace(c,"")}}return function(e){var r=e.afternoon;if(void 0!==r){var t=e.hours;r?t<12&&(e.hours+=12):12===t&&(e.hours=0),delete e.afternoon}}(r),r}}return function(e,r,t){t.p.customParseFormat=!0,e&&e.parseTwoDigitYear&&(s=e.parseTwoDigitYear);var n=r.prototype,i=n.parse;n.parse=function(e){var r=e.date,n=e.utc,s=e.args;this.$u=n;var a=s[1];if("string"==typeof a){var l=!0===s[2],d=!0===s[3],c=l||d,u=s[2];d&&(u=s[2]),o=this.$locale(),!l&&u&&(o=t.Ls[u]),this.$d=function(e,r,t){try{if(["x","X"].indexOf(r)>-1)return new Date(("X"===r?1e3:1)*e);var n=h(r)(e),i=n.year,o=n.month,s=n.day,a=n.hours,l=n.minutes,d=n.seconds,c=n.milliseconds,u=n.zone,g=new Date,b=s||(i||o?1:g.getDate()),m=i||g.getFullYear(),p=0;i&&!o||(p=o>0?o-1:g.getMonth());var f=a||0,y=l||0,v=d||0,x=c||0;return u?new Date(Date.UTC(m,p,b,f,y,v,x+60*u.offset*1e3)):t?new Date(Date.UTC(m,p,b,f,y,v,x)):new Date(m,p,b,f,y,v,x)}catch(e){return new Date("")}}(r,a,n),this.init(),u&&!0!==u&&(this.$L=this.locale(u).$L),c&&r!=this.format(a)&&(this.$d=new Date("")),o={}}else if(a instanceof Array)for(var g=a.length,b=1;b<=g;b+=1){s[1]=a[b-1];var m=t.apply(this,s);if(m.isValid()){this.$d=m.$d,this.$L=m.$L,this.init();break}b===g&&(this.$d=new Date(""))}else i.call(this,e)}}}();var ko=V(Oo.exports),zo={exports:{}};zo.exports=function(e,r,t){r.prototype.isBetween=function(e,r,n,i){var o=t(e),s=t(r),a="("===(i=i||"()")[0],l=")"===i[1];return(a?this.isAfter(o,n):!this.isBefore(o,n))&&(l?this.isBefore(s,n):!this.isAfter(s,n))||(a?this.isBefore(o,n):!this.isAfter(o,n))&&(l?this.isAfter(s,n):!this.isBefore(s,n))}};var Bo=V(zo.exports),So={exports:{}};So.exports=function(e,r){r.prototype.isSameOrAfter=function(e,r){return this.isSame(e,r)||this.isAfter(e,r)}};var Ao=V(So.exports),_o={exports:{}};_o.exports=function(e,r){r.prototype.isSameOrBefore=function(e,r){return this.isSame(e,r)||this.isBefore(e,r)}};var To=V(_o.exports),Lo={exports:{}};Lo.exports=function(){var e={year:0,month:1,day:2,hour:3,minute:4,second:5},r={};return function(t,n,i){var o,s=function(e,t,n){void 0===n&&(n={});var i=new Date(e),o=function(e,t){void 0===t&&(t={});var n=t.timeZoneName||"short",i=e+"|"+n,o=r[i];return o||(o=new Intl.DateTimeFormat("en-US",{hour12:!1,timeZone:e,year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit",timeZoneName:n}),r[i]=o),o}(t,n);return o.formatToParts(i)},a=function(r,t){for(var n=s(r,t),o=[],a=0;a<n.length;a+=1){var l=n[a],d=l.type,c=l.value,u=e[d];u>=0&&(o[u]=parseInt(c,10))}var h=o[3],g=24===h?0:h,b=o[0]+"-"+o[1]+"-"+o[2]+" "+g+":"+o[4]+":"+o[5]+":000",m=+r;return(i.utc(b).valueOf()-(m-=m%1e3))/6e4},l=n.prototype;l.tz=function(e,r){void 0===e&&(e=o);var t=this.utcOffset(),n=this.toDate(),s=n.toLocaleString("en-US",{timeZone:e}),a=Math.round((n-new Date(s))/1e3/60),l=i(s,{locale:this.$L}).$set("millisecond",this.$ms).utcOffset(15*-Math.round(n.getTimezoneOffset()/15)-a,!0);if(r){var d=l.utcOffset();l=l.add(t-d,"minute")}return l.$x.$timezone=e,l},l.offsetName=function(e){var r=this.$x.$timezone||i.tz.guess(),t=s(this.valueOf(),r,{timeZoneName:e}).find((function(e){return"timezonename"===e.type.toLowerCase()}));return t&&t.value};var d=l.startOf;l.startOf=function(e,r){if(!this.$x||!this.$x.$timezone)return d.call(this,e,r);var t=i(this.format("YYYY-MM-DD HH:mm:ss:SSS"),{locale:this.$L});return d.call(t,e,r).tz(this.$x.$timezone,!0)},i.tz=function(e,r,t){var n=t&&r,s=t||r||o,l=a(+i(),s);if("string"!=typeof e)return i(e).tz(s);var d=function(e,r,t){var n=e-60*r*1e3,i=a(n,t);if(r===i)return[n,r];var o=a(n-=60*(i-r)*1e3,t);return i===o?[n,i]:[e-60*Math.min(i,o)*1e3,Math.max(i,o)]}(i.utc(e,n).valueOf(),l,s),c=d[0],u=d[1],h=i(c).utcOffset(u);return h.$x.$timezone=s,h},i.tz.guess=function(){return Intl.DateTimeFormat().resolvedOptions().timeZone},i.tz.setDefault=function(e){o=e}}}();var jo,Yo=V(Lo.exports);Mo.extend(Bo),Mo.extend(To),Mo.extend(Ao),Mo.extend(ko),Mo.extend(Yo),function(e){e.generateDays=e=>{const r=e.startOf("month"),t=Mo(r).startOf("week");return Po(t).map((e=>Ro(e)))},e.generateDaysForCurrentWeek=e=>{const r=e.startOf("week");return Ro(r)},e.generateMonths=e=>{const r=[];for(let t=0;t<12;t++){const n=e.month(t);r.push(Mo(n))}return r},e.generateDecadeOfYears=e=>{const r=e.year(),t=10*Math.floor(r/10),n=e.year(t),i=[n.subtract(1,"year"),n];for(let e=1;e<11;e++)i.push(n.add(e,"year"));return i},e.getStartEndDecade=e=>{const r=10*Math.floor(+e.format("YYYY")/10);return{beginDecade:r,endDecade:+Mo(`${r+9}-01-01`).format("YYYY")}},e.convertTo12HourFormat=e=>{const r=Mo(e,"HH:mm");return r.isValid()?r.format("h:mm a"):""},e.isWithinRange=(e,r,t,n="day")=>!r&&!t||(r&&t?e.isBetween(r,t,n,"[]"):r?e.isSameOrAfter(r,n):e.isSameOrBefore(t,n)),e.isPreviousMonthWithinRange=(r,t)=>e.isWithinRange(r.subtract(1,"month"),t,void 0,"month"),e.isPreviousYearWithinRange=(r,t)=>e.isWithinRange(r.subtract(1,"year"),t,void 0,"year"),e.isPreviousDecadeWithinRange=(r,t)=>{const{beginDecade:n}=e.getStartEndDecade(r);return e.isWithinRange(r.year(n).subtract(1,"year"),t,void 0,"year")},e.isNextMonthWithinRange=(r,t)=>e.isWithinRange(r.add(1,"month"),void 0,t,"month"),e.isNextYearWithinRange=(r,t)=>e.isWithinRange(r.add(1,"year"),void 0,t,"year"),e.isNextDecadeWithinRange=(r,t)=>{const{endDecade:n}=e.getStartEndDecade(r);return e.isWithinRange(r.year(n).add(1,"year"),void 0,t,"year")},e.getWeekStartEnd=e=>({start:e.startOf("week").format("YYYY-MM-DD"),end:e.endOf("week").format("YYYY-MM-DD")}),e.getFixedRangeStartEnd=(e,r)=>({start:e.format("YYYY-MM-DD"),end:e.add(r-1,"day").format("YYYY-MM-DD")}),e.isDisabledDay=(r,t,n,i)=>{const o=e.isWithinRange(r,n?Mo(n):void 0,i?Mo(i):void 0),s=t&&t.includes(r.format("YYYY-MM-DD"));return!o||!!s}}(jo||(jo={}));const Po=e=>{const r=[e];for(let t=1;t<6;t++){const n=e.add(t,"week");r.push(n)}return r},Ro=e=>{const r=[];for(let t=0;t<7;t++){const n=e.add(t,"day");r.push(n)}return r},Io=[1,3,5,7,8,10,12],Ho=[4,6,9,11];var Wo,No,Vo;!function(e){e.clampDay=(r,t,n)=>{const i=parseInt(r),o=parseInt(t),s=parseInt(n);return 0==i?"1":Io.includes(o)?Math.min(i,31).toString():Ho.includes(o)?Math.min(i,30).toString():2===o?e.isLeapYear(s)?Math.min(i,29).toString():Math.min(i,28).toString():r},e.clampMonth=e=>{const r=parseInt(e);return 0==r?"1":r>12?"12":e},e.isLeapYear=e=>e%4==0&&e%100!=0||e%400==0,e.getTimeDiffInMinutes=(e,r,t="HH:mm")=>{const n=Mo(e,t);return Mo(r,t).diff(n,"minute")},e.toDayjs=e=>e?Mo(e):Mo(),e.addMinutesToTime=(e,r,t="HH:mm")=>Mo(e,t).add(r,"minutes").format(t),e.isSame=(e,r,t="day")=>Mo(e).isSame(Mo(r),t)}(Wo||(Wo={})),function(e){e.isDateDisabled=(e,r)=>{const{disabledDates:t,minDate:n,maxDate:i}=r;return!!(t&&t.length&&t.includes(e))||(!(!n||!Mo(e).isBefore(n,"day"))||!(!i||!Mo(e).isAfter(i,"day")))},e.sanitizeInput=e=>{if(e){if(Mo(e).isValid())return e}return""}}(No||(No={})),function(e){e.generate=()=>Math.random().toString(36).substring(2,9)}(Vo||(Vo={}));const Ko=i.createContext({focusedIndex:-1,setFocusedIndex:()=>{}}),Uo=({children:e})=>{const[t,n]=o(-1);return r(Ko.Provider,Object.assign({value:{focusedIndex:t,setFocusedIndex:n}},{children:e}))},Zo=p.div`
    display: inline-block;
    position: relative;
    width: ${({$size:e})=>e?`${e}px`:"1em"};
    height: ${({$size:e})=>e?`${e}px`:"1em"};
    color: ${e=>e.$color||"currentColor"};
`,Xo=y`
	0% {
	  transform: rotate(0deg);
	}
	100% {
	  transform: rotate(360deg);
	}
`,qo=p.div`
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
    animation: ${Xo} 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
`,Jo=p(qo)`
    animation-delay: -0.45s;
`,Go=p(qo)`
    animation-delay: -0.3s;
`,Qo=p(qo)`
    animation-delay: -0.15s;
`,es=({color:t,className:n,size:i})=>e(Zo,Object.assign({className:n,$size:i,$color:t},{children:[r(qo,{id:"inner1"}),r(Jo,{id:"inner2"}),r(Go,{id:"inner3"}),r(Qo,{id:"inner4"})]})),rs=f`
    outline-offset: -1px;
    outline: ${tn["width-020"]} ${tn.solid} ${Qt["border-focus"]};
`,ts=f`
    outline-color: ${Qt["border-focus"]};
`,ns=f`
    outline-color: ${Qt["border-disabled"]};
`,is=f`
    outline-color: ${Qt["border-error-focus"]};
`,os=p.div`
    border: ${tn["width-010"]} ${tn.solid} ${Qt.border};
    border-radius: ${on.sm};
    background: ${Qt.bg};

    :focus-within {
        ${rs}
    }
    ${e=>e.$focused&&rs}

    ${e=>e.$readOnly?f`
                border-color: transparent;
                padding: 0;
                background: transparent !important;

                :focus-within {
                    ${ts}
                }
                ${e.$focused&&ts}
            `:e.$disabled?f`
                background: ${Qt["bg-disabled"]};
                cursor: not-allowed;

                :focus-within {
                    ${ns}
                }
                ${e.$focused&&ns}
            `:e.$error?f`
                border-color: ${Qt["border-error"]};

                :focus-within {
                    ${is}
                }
                ${e.$focused&&is}
            `:void 0}
`;p(os)`
    display: flex;
    align-items: center;
    position: relative;
    height: max-content;
    width: 100%;
    padding: 0 ${nn["spacing-16"]};
    flex-direction: ${e=>"right"===e.$position?"row-reverse":"row"};
`;const ss=p.input`
    ${e=>"small"===e.$variant?en["body-md-regular"]:en["body-baseline-regular"]}
    color: ${Qt.text};
    display: block;
    background: transparent;
    border: none;
    outline: none;
    box-shadow: none;
    padding: 0;
    margin: 0;

    :disabled {
        color: ${Qt["text-subtler"]};

        :hover {
            cursor: not-allowed;
        }
    }

    ::placeholder,
    ::-webkit-input-placeholder {
        color: ${Qt["text-subtler"]};
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
`,as=p.button`
    background: transparent;
    border: none;
    outline: none;

    :focus,
    :active {
        outline: none;
    }

    :focus-visible {
        outline: ${tn["width-010"]} ${tn.solid}
            ${Qt["border-focus"]};
        border-radius: ${on.sm};
    }
`;p.div`
    overflow: hidden;
    border: ${tn["width-010"]} ${tn.solid} ${Qt.border};
    border-radius: ${on.sm};
    background: ${Qt.bg};

    min-width: 23rem;
    ${e=>e.$width&&`width: ${e.$width}px;`}
    max-height: 27rem;
    overflow-y: auto;

    ${e=>"small"===e.$variant?en["body-md-regular"]:en["body-baseline-regular"]}

    ${an.MaxWidth.sm} {
        min-width: unset;
        width: calc(100vw - ${sn["sm-margin"]} * 2);
        max-height: 15rem;
    }

    ${an.MaxWidth.xs} {
        width: calc(100vw - ${sn["xs-margin"]} * 2);
    }

    ${an.MaxWidth.xxs} {
        width: calc(100vw - ${sn["xxs-margin"]} * 2);
    }

    ::-webkit-scrollbar {
        width: 14px;
    }

    ::-webkit-scrollbar-track {
        background: transparent;
    }

    ::-webkit-scrollbar-thumb {
        background: ${Qt["bg-inverse-subtlest"]};
        border: 5px solid transparent;
        border-radius: 9999px;
        background-clip: padding-box;
    }
`,p.div`
    background: transparent;
    padding: ${nn["spacing-8"]};
`,p.ul`
    list-style-type: none;
`,p.li`
    display: flex;
    align-items: flex-start;
    gap: ${nn["spacing-8"]};
    padding: ${nn["spacing-12"]} ${nn["spacing-8"]};
    cursor: pointer;

    outline: none;

    ${e=>e.$active&&e.$selected?f`
                background: ${Qt["bg-hover"]};
            `:e.$active?f`
                background: ${Qt["bg-hover-subtle"]};
            `:void 0}
`,p(F)`
    flex-shrink: 0;
    height: 1lh;
    width: 1rem;
    color: ${Qt["icon-selected"]};
`,p.div`
    flex-shrink: 0;
    height: 1lh;
    width: 1rem;
`,p($)`
    flex-shrink: 0;
    height: 1lh;
    width: 1lh;
    color: ${Qt["icon-selected"]};
`,p(w)`
    flex-shrink: 0;
    height: 1lh;
    width: 1lh;
    color: ${Qt["icon-primary-subtlest"]};
`,p.div`
    width: 100%;
    display: flex;
    justify-content: flex-end;
`;const ls=p(as)`
    cursor: pointer;
    overflow: hidden;
    color: ${Qt["text-primary"]};
    font-size: inherit;
`;p(ls)`
    ${en["body-baseline-semibold"]}
`,p(ls)`
    ${en["body-md-semibold"]}
    padding: ${nn["spacing-8"]} ${nn["spacing-8"]};
`,p.div`
    width: 100%;
    display: flex;
    padding: ${nn["spacing-12"]} ${nn[16]};
    align-items: center;
`,p(x)`
    margin-right: ${nn["spacing-4"]};
    color: ${Qt["icon-error"]};
    height: 1em;
    width: 1em;
`,p(es)`
    margin-right: ${nn["spacing-8"]};
    color: ${Qt.icon};
`;const ds=p.button`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: ${nn["spacing-32"]};
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
                background-color: ${Qt["bg-hover-neutral"]};
            `}
    }
`,cs=i.forwardRef(((e,t)=>{var{children:n,focusHighlight:i=!0,focusOutline:o="none",type:s="button"}=e,a=W(e,["children","focusHighlight","focusOutline","type"]);return r(ds,Object.assign({ref:t,$outline:o,$highlight:i,type:s},a,{children:n}))})),us=p.div`
    background: ${Qt["bg-strong"]};
    border-radius: ${on.sm};
    display: flex;
    align-items: center;

    ${e=>"small"===e.$variant?en["body-md-regular"]:en["body-baseline-regular"]}
`,hs=p.label`
    flex: 1;
    display: flex;
    align-items: center;
    gap: ${nn["spacing-8"]};
    padding: ${e=>"small"===e.$variant?f`
                  ${nn["spacing-8"]} ${nn["spacing-16"]}
              `:f`10px ${nn["spacing-16"]}`};
`,gs=p(ss)`
    flex: 1;
`,bs=p(E)`
    color: ${Qt.icon};
    flex-shrink: 0;
    height: 1em;
    width: 1em;
`,ms=p(cs)`
    flex-shrink: 0;
    align-self: stretch;
    box-sizing: content-box;
    padding: ${nn["spacing-8"]};
    margin-left: -${nn["spacing-8"]};
    color: ${Qt.icon};
    cursor: pointer;
    font-size: inherit;

    svg {
        flex-shrink: 0;
        height: 1em;
        width: 1em;
    }
`;b(((t,n)=>{var{value:i,variant:o,onClear:s}=t,a=W(t,["value","variant","onClear"]);return e(us,Object.assign({$variant:o},{children:[e(hs,Object.assign({$variant:o},{children:[r(bs,{"aria-hidden":!0}),r(gs,Object.assign({ref:n,value:i,$variant:o},a))]})),i&&r(ms,Object.assign({"aria-label":"Clear search",focusOutline:"browser",onClick:s},{children:r(D,{"aria-hidden":!0})}))]}))}));const ps=p(as)`
    display: flex;
    align-items: center;
    gap: ${nn["spacing-8"]};
    width: 100%;
    height: calc(3rem - 2px); // exclude top and bottom borders
    padding: ${nn["spacing-16"]};

    ${e=>"small"===e.$variant?en["body-md-regular"]:en["body-baseline-regular"]}

    :disabled {
        cursor: not-allowed;
    }
`,fs=p.div`
    display: flex;
    align-items: center;
    transform: rotate(${e=>e.$expanded?180:0}deg);
    transition: transform ${rn["duration-250"]} ${rn["ease-default"]};

    svg {
        color: ${Qt.icon};
        height: 1em;
        width: 1em;
    }
`,ys=b((({children:t,disabled:n,expanded:i,listboxId:o,popupRole:s,readOnly:a,variant:l},d)=>e(ps,Object.assign({ref:d,type:"button","aria-expanded":i,"aria-haspopup":s,"data-testid":"selector",disabled:n,"aria-controls":o,$variant:l},{children:[t,!a&&r(fs,Object.assign({$expanded:i,$variant:l},{children:r(C,{"aria-hidden":!0})}))]}))));p.button`
    padding: ${nn["spacing-8"]} ${nn["spacing-16"]};
    min-width: 4rem;
    border: ${tn["width-010"]} ${tn.solid} transparent;
    border-radius: ${on.sm};
    transition: all ${rn["duration-250"]} ${rn["ease-default"]};
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;

    // -----------------------------------------------------------------------------
    // BUTTON STYLE + TEXT COLOR
    // -----------------------------------------------------------------------------
    ${e=>{switch(e.$buttonStyle){case"secondary":return f`
                    background-color: ${Qt.Primitive.white};
                    border-color: ${e.$buttonIsDanger?Qt["border-error-strong"]:Qt["border-primary"]};

                    color: ${e.$buttonIsDanger?Qt["text-error"]:Qt["text-primary"]};

                    &:hover,
                    &:active {
                        background-color: ${Qt["bg-hover-neutral"]};
                    }
                `;case"light":return f`
                    background-color: ${Qt.bg};
                    border-color: ${Qt.border};

                    color: ${e.$buttonIsDanger?Qt["text-error"]:Qt["text-primary"]};

                    &:hover,
                    &:active {
                        background-color: ${Qt["bg-hover-neutral"]};
                    }
                `;case"link":return f`
                    background-color: transparent;

                    color: ${e.$buttonIsDanger?Qt["text-error"]:Qt["text-primary"]};
                    &:hover,
                    &:active {
                        background-color: ${Qt["bg-hover-neutral"]};
                    }
                `;case"disabled":return f`
                    background-color: ${Qt["bg-disabled"]};

                    cursor: not-allowed;

                    &:hover {
                        box-shadow: none;
                    }

                    color: ${Qt["text-disabled"]};
                `;default:return f`
                    background-color: ${e.$buttonIsDanger?Qt["bg-error-strong"]:Qt["bg-primary"]};

                    ${an.MaxWidth.md} {
                        width: 100%;
                    }

                    color: ${Qt["text-inverse"]};

                    &:hover,
                    &:active {
                        background-color: ${e.$buttonIsDanger?Qt["bg-error-strong-hover"]:Qt["bg-primary-hover"]};
                    }
                `}}}

    // -----------------------------------------------------------------------------
	// BUTTON SIZE + TEXT SIZE
	// -----------------------------------------------------------------------------
	${e=>{switch(e.$buttonSizeStyle){case"small":return f`
                    height: 2.5rem;
                    ${en["body-md-semibold"]}

                    ${an.MaxWidth.xxs} {
                        height: auto;
                    }
                `;case"large":return f`
                    height: 4rem;
                    ${en["header-md-semibold"]}

                    ${an.MaxWidth.xxs} {
                        height: auto;
                    }
                `;default:return f`
                    height: 3rem;
                    ${en["header-xs-semibold"]}

                    ${an.MaxWidth.xxs} {
                        height: auto;
                    }
                `}}}
`,p(es)`
    margin-right: 0.5rem;
`,p.li`
    display: ${e=>e.$visible?"flex":"none"};
`,p.div`
    flex: 1;
    display: flex;
    align-items: flex-start;
    gap: ${nn["spacing-8"]};
    padding: ${nn["spacing-12"]} ${nn["spacing-8"]};
    cursor: ${e=>e.$toggleable?"default":"pointer"};
    overflow: hidden; // required for label to truncate properly

    outline: none;

    ${e=>e.$active&&f`
            background: ${Qt["bg-hover"]};
        `}
`,p.div`
    height: 1px;
    width: calc((1lh + ${nn["spacing-8"]}) * ${e=>e.$level});
`,p.div`
    width: 1lh;
    height: 1lh;
    color: ${Qt["icon-primary"]};
    cursor: pointer;

    svg {
        width: 1lh;
        height: 1lh;
        transition: transform ${rn["duration-350"]}
            ${rn["ease-standard"]};

        ${e=>{if(e.$expanded)return f`
                    transform: rotate(90deg);
                `}}
    }
`,p.div`
    width: 1lh;
    height: 1lh;
    margin-right: ${nn["spacing-8"]};
`,p.div`
    flex-shrink: 0;
    height: 1lh;
    width: ${e=>e.$hasNestedSiblings?"1lh":nn["spacing-16"]};

    display: flex;
    justify-content: center;
`,p(M)`
    flex-shrink: 0;
    height: 1lh;
    width: 1lh;
    color: ${Qt["icon-selected"]};
`;const vs=e=>"small"===e?2.5:3;p.div`
    position: relative;
    width: 100%;
    ${e=>{const r=vs(e.$variant);return f`
            min-height: ${r}rem;
            height: ${r}rem; // Need this to persist the height when expanding or collapsing list
        `}}
`;const xs=f`
    display: flex;
    position: relative;
    align-items: center;
    justify-content: space-between;
    padding: 0 ${nn["spacing-16"]};
    // exclude top and bottom borders
    height: calc(${e=>vs(e.$variant)}rem - 2px);
    width: 100%;
    border-radius: ${on.sm};
    border: none;
    background: transparent;

    :focus,
    :active {
        outline: none;
    }

    :focus-visible {
        outline: 2px solid ${Qt["border-focus"]};
    }
`,ws=p.button`
    ${xs}
    cursor: pointer;
`;p.div`
    ${xs}
`;const $s=y`
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
    border: ${tn["width-010"]} ${tn.solid} ${Qt.border};
    border-radius: ${on.sm};
    background: ${Qt.bg};
    overflow: hidden;

    :focus-within {
        border-color: ${Qt["border-focus"]};
        box-shadow: 0px 0px 4px 0px
            rgb(from ${Qt["border-focus"]} r g b / 50%) inset; // TODO: confirm shadow
    }

    ${e=>e.expanded?f`
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                z-index: 2;
            `:f`
                animation: ${$s} 0.5s ease-in-out;
            `}

    ${e=>e.disabled?f`
                background: ${Qt["bg-disabled"]};

                ${ws} {
                    cursor: not-allowed;
                }

                :focus-within {
                    border-color: ${Qt.border};
                    box-shadow: none;
                }
            `:e.$readOnly?f`
                border: none;
                background: transparent !important;

                ${ws} {
                    padding: 0;
                }

                :focus-within {
                    border: none;
                    box-shadow: none;
                }
            `:e.error?f`
                border-color: ${Qt["border-error"]};

                :focus-within {
                    border-color: ${Qt["border-error"]};
                    box-shadow: 0px 0px 4px 0px
                        rgb(from ${Qt["border-error"]} r g b / 50%) inset; // TODO: confirm shadow
                }
            `:void 0}
`,p.div`
    transform: rotate(${e=>e.expanded?180:0}deg);
    transition: transform ${rn["duration-250"]} ${rn["ease-default"]};
    margin-left: ${nn["spacing-16"]};
`,p(C)`
    color: ${Qt.icon};
`,p.div`
    height: 1px;
    background: ${Qt.border};
    margin: 0 ${nn["spacing-8"]};
`;const Fs=p.div`
    display: flex;
    flex: 1;
    word-break: break-all;
    ${e=>{if(e.$disabled)return f`
                color: ${Qt["text-disabled"]};
            `}}
`,Ds=p.div`
    ${e=>"small"===e.$variant?en["body-md-regular"]:en["body-baseline-regular"]}
    text-align: left;
    ${e=>{if("middle"!==e.truncateType)return f`
                    ${zi(1)}
                `}}
    overflow: hidden;
`;var Es;p(Ds)`
    color: ${Qt["text-subtler"]};
`,function(e){e.Ready="overlay-context-ready",e.Change="overlay-context-change"}(Es||(Es={}));const Cs=p.div`
    display: flex;
    flex-direction: column;
`,Ms=e=>"right"===e?"bottom-end":"bottom-start",Os=({enabled:n,isOpen:i,onOpen:a,onClose:d,onDismiss:c,renderElement:u,renderDropdown:h,customZIndex:g,clickToToggle:b=!1,offset:m=0,alignment:p="left",fitAvailableHeight:f})=>{var y;const x=v(),w=sn["sm-max"]({theme:x}),$=l(null),F=l(null),{width:D}=function(e){void 0===e&&(e={});var r=e.skipOnMount,t=void 0!==r&&r,n=e.refreshMode,i=e.refreshRate,s=void 0===i?1e3:i,a=e.refreshOptions,d=e.handleWidth,c=void 0===d||d,u=e.handleHeight,h=void 0===u||u,g=e.targetRef,b=e.observerOptions,m=e.onResize,p=l(t),f=l(null),y=null!=g?g:f,v=l(),x=o({width:void 0,height:void 0}),w=x[0],$=x[1];return ki((function(){if(!Ei()){var e=Mi(m,$,c,h);v.current=Fi((function(r){(c||h)&&r.forEach((function(r){var t=r&&r.contentRect||{},n=t.width,i=t.height;!p.current&&!Ei()&&e({width:n,height:i}),p.current=!1}))}),n,s,a);var r=new window.ResizeObserver(v.current);return y.current&&r.observe(y.current,b),function(){r.disconnect();var e=v.current;e&&e.cancel&&e.cancel()}}}),[n,s,a,c,h,m,b,y.current]),Ln({ref:y},w)}({targetRef:$,handleHeight:!1}),E={name:"center",fn:({x:e,rects:r})=>{const t=0===e||e+r.floating.width===window.innerWidth,n=window.innerWidth<w;return{x:t&&n?(window.innerWidth-r.floating.width)/2:e}}},{refs:C,floatingStyles:M,context:H}=k({open:i,onOpenChange:(e,r,t)=>{"escape-key"===t?null==c||c():e&&!i?null==a||a():!e&&i&&(null==d||d(t))},whileElementsMounted:z,placement:Ms(p),middleware:[B(m),S(),A({limiter:_()}),T({apply({availableHeight:e}){F.current&&Object.assign(F.current.style,{maxHeight:f?`${e}px`:void 0,overflowY:f?"hidden":void 0})}}),E]}),W=(()=>{const[e,r]=o(void 0),t=O();return s((()=>{if(!t)return void r(void 0);const e=e=>{r(e.zIndex)};return t.events.on(Es.Change,e),t.events.emit(Es.Ready),()=>t.events.off(Es.Change,e)}),[t]),e})(),{isMounted:N,styles:V}=L(H,{initial:{opacity:0},open:{opacity:1},duration:300}),K=j(H,{enabled:n,toggle:b}),U=Y(H,{enabled:n}),{getReferenceProps:Z,getFloatingProps:X}=P([K,U]);return e(t,{children:[r("div",Object.assign({ref:e=>{$.current=e,C.setReference(e)}},Z(),{children:u()})),N&&r(R,{children:r(I,Object.assign({context:H,modal:!1,initialFocus:F,returnFocus:!1},{children:r("div",Object.assign({ref:C.setFloating,style:Object.assign(Object.assign({},M),{zIndex:null!==(y=null!=g?g:W)&&void 0!==y?y:50})},X(),{children:r(Cs,Object.assign({ref:F,style:Object.assign({},V),inert:V.opacity<1?"":void 0},{children:h({elementWidth:D})}))}))}))})]})},ks=p.div`
    overflow: hidden;
    border: ${tn["width-010"]} ${tn.solid} ${Qt.border};
    border-radius: ${on.sm};
    background: ${Qt.bg};
    padding: ${nn["spacing-16"]};
    min-width: 23rem;

    ${an.MaxWidth.sm} {
        min-width: unset;
        width: calc(100vw - ${sn["sm-margin"]} * 2);
        max-height: 15rem;
    }

    ${an.MaxWidth.xs} {
        width: calc(100vw - ${sn["xs-margin"]} * 2);
    }

    ${an.MaxWidth.xxs} {
        width: calc(100vw - ${sn["xxs-margin"]} * 2);
    }
`,zs=p.div`
    display: flex;
    align-items: baseline;
`,Bs=p.div`
    margin: 0 0.5rem;
`,Ss=p.div`
    ${e=>"small"===e.$variant?en["body-md-regular"]:en["body-baseline-regular"]}
    text-align: left;
    ${e=>{if("middle"!==e.truncateType)return f`
                    ${zi(1)}
                `}}
    overflow: hidden;
`,As=p(Ss)`
    color: ${Qt["text-subtler"]};
`,_s=t=>{var{alignment:n="left",className:i,disabled:a,dropdownZIndex:d,error:c,histogramSlider:u,id:h,onBlur:g,onChange:b,onChangeEnd:m,optionTruncationType:p="end",placeholder:f="Select",rangeLabelPrefix:y,rangeLabelSuffix:v,readOnly:x,renderRangeLabel:w,value:$}=t,F=W(t,["alignment","className","disabled","dropdownZIndex","error","histogramSlider","id","onBlur","onChange","onChangeEnd","optionTruncationType","placeholder","rangeLabelPrefix","rangeLabelSuffix","readOnly","renderRangeLabel","value"]);const{interval:D,bins:E=[],renderEmptyView:C,ariaLabels:M}=u,[O,k]=o(K()),[z,B]=o(!1),[S,A]=o(!1),[_]=o((()=>Vo.generate())),T=E.map((e=>e.minValue)),L=Math.min(...T),j=l(),Y=l(),P=l(),R=F["data-testid"]||"select-histogram";s((()=>{$!==O&&k(K())}),[$]);const I=e=>{k(e),null==b||b(e)},H=e=>{k(e),null==m||m(e)},N=()=>{S||z||A(!0)},V=e=>{!S||z||j.current.contains(e.relatedTarget)||(A(!1),null==g||g())};function K(){return null!=$?$:[L,L+D]}const U=r=>w?w(r):e(cn.BodyBL,{children:[y,r,v]});return r(Uo,{children:r(Os,{enabled:!x&&!a,isOpen:z,renderElement:()=>r(os,Object.assign({className:i,"data-testid":R,id:h,ref:j,tabIndex:-1,onFocus:N,onBlur:V,$focused:S,$disabled:a,$readOnly:x,$error:c},{children:r(ys,Object.assign({ref:Y,disabled:a,expanded:z,listboxId:_,popupRole:"dialog",readOnly:x,variant:"default"},{children:r(Fs,Object.assign({ref:P,$disabled:a},{children:T&&0!==T.length?e(zs,{children:[U(O[0]),r(Bs,{children:"-"}),U(O[1])]}):r(As,Object.assign({truncateType:p,$variant:"default"},{children:f}))}))}))})),renderDropdown:({elementWidth:e})=>r(ks,Object.assign({style:{width:e}},{children:r(_n,{interval:D,value:O,bins:E,onChange:I,onChangeEnd:H,showRangeLabels:!1,renderEmptyView:C,ariaLabels:M})})),onOpen:()=>{B(!0)},onClose:()=>{B(!1)},onDismiss:()=>{Y.current.focus(),B(!1)},clickToToggle:!0,offset:8,alignment:n,fitAvailableHeight:!0,customZIndex:d})})};export{_s as SelectHistogram};
//# sourceMappingURL=index.js.map
