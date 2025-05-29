import{jsxs as e,jsx as r,Fragment as t}from"react/jsx-runtime";import*as n from"react";import i,{useState as o,useEffect as s,useMemo as a,useRef as l,isValidElement as d,createRef as c,cloneElement as u,PureComponent as h,useLayoutEffect as g,forwardRef as b}from"react";import{ExternalIcon as m}from"@lifesg/react-icons/external";import p,{css as f,keyframes as y,useTheme as v}from"styled-components";import{ExclamationCircleFillIcon as x}from"@lifesg/react-icons/exclamation-circle-fill";import{SquareIcon as w}from"@lifesg/react-icons/square";import{SquareFillIcon as F}from"@lifesg/react-icons/square-fill";import{SquareTickFillIcon as $}from"@lifesg/react-icons/square-tick-fill";import{TickIcon as E}from"@lifesg/react-icons/tick";import{CrossIcon as D}from"@lifesg/react-icons/cross";import{MagnifierIcon as C}from"@lifesg/react-icons/magnifier";import{ChevronDownIcon as B}from"@lifesg/react-icons/chevron-down";import"@lifesg/react-icons/caret-right";import{MinusSquareFillIcon as A}from"@lifesg/react-icons/minus-square-fill";import{useFloatingTree as M,useFloating as k,autoUpdate as z,offset as O,flip as S,shift as _,limitShift as T,size as L,useTransitionStyles as j,useClick as Y,useDismiss as P,useInteractions as R,FloatingPortal as I,FloatingFocusManager as H}from"@floating-ui/react";import{findDOMNode as W}from"react-dom";function V(e,r){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(n=Object.getOwnPropertySymbols(e);i<n.length;i++)r.indexOf(n[i])<0&&Object.prototype.propertyIsEnumerable.call(e,n[i])&&(t[n[i]]=e[n[i]])}return t}"function"==typeof SuppressedError&&SuppressedError;var N="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};function K(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var U=Array.isArray,Z="object"==typeof N&&N&&N.Object===Object&&N,X=Z,q="object"==typeof self&&self&&self.Object===Object&&self,J=X||q||Function("return this")(),G=J.Symbol,Q=G,ee=Object.prototype,re=ee.hasOwnProperty,te=ee.toString,ne=Q?Q.toStringTag:void 0;var ie=function(e){var r=re.call(e,ne),t=e[ne];try{e[ne]=void 0;var n=!0}catch(e){}var i=te.call(e);return n&&(r?e[ne]=t:delete e[ne]),i},oe=Object.prototype.toString;var se=ie,ae=function(e){return oe.call(e)},le=G?G.toStringTag:void 0;var de=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":le&&le in Object(e)?se(e):ae(e)};var ce=function(e){return null!=e&&"object"==typeof e},ue=de,he=ce;var ge=function(e){return"symbol"==typeof e||he(e)&&"[object Symbol]"==ue(e)},be=U,me=ge,pe=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,fe=/^\w*$/;var ye=function(e,r){if(be(e))return!1;var t=typeof e;return!("number"!=t&&"symbol"!=t&&"boolean"!=t&&null!=e&&!me(e))||(fe.test(e)||!pe.test(e)||null!=r&&e in Object(r))};var ve=function(e){var r=typeof e;return null!=e&&("object"==r||"function"==r)},xe=de,we=ve;var Fe,$e=function(e){if(!we(e))return!1;var r=xe(e);return"[object Function]"==r||"[object GeneratorFunction]"==r||"[object AsyncFunction]"==r||"[object Proxy]"==r},Ee=J["__core-js_shared__"],De=(Fe=/[^.]+$/.exec(Ee&&Ee.keys&&Ee.keys.IE_PROTO||""))?"Symbol(src)_1."+Fe:"";var Ce=function(e){return!!De&&De in e},Be=Function.prototype.toString;var Ae=function(e){if(null!=e){try{return Be.call(e)}catch(e){}try{return e+""}catch(e){}}return""},Me=$e,ke=Ce,ze=ve,Oe=Ae,Se=/^\[object .+?Constructor\]$/,_e=Function.prototype,Te=Object.prototype,Le=_e.toString,je=Te.hasOwnProperty,Ye=RegExp("^"+Le.call(je).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");var Pe=function(e,r){return null==e?void 0:e[r]},Re=function(e){return!(!ze(e)||ke(e))&&(Me(e)?Ye:Se).test(Oe(e))},Ie=Pe;var He=function(e,r){var t=Ie(e,r);return Re(t)?t:void 0},We=He(Object,"create"),Ve=We;var Ne=function(){this.__data__=Ve?Ve(null):{},this.size=0};var Ke=function(e){var r=this.has(e)&&delete this.__data__[e];return this.size-=r?1:0,r},Ue=We,Ze=Object.prototype.hasOwnProperty;var Xe=function(e){var r=this.__data__;if(Ue){var t=r[e];return"__lodash_hash_undefined__"===t?void 0:t}return Ze.call(r,e)?r[e]:void 0},qe=We,Je=Object.prototype.hasOwnProperty;var Ge=function(e){var r=this.__data__;return qe?void 0!==r[e]:Je.call(r,e)},Qe=We;var er=function(e,r){var t=this.__data__;return this.size+=this.has(e)?0:1,t[e]=Qe&&void 0===r?"__lodash_hash_undefined__":r,this},rr=Ne,tr=Ke,nr=Xe,ir=Ge,or=er;function sr(e){var r=-1,t=null==e?0:e.length;for(this.clear();++r<t;){var n=e[r];this.set(n[0],n[1])}}sr.prototype.clear=rr,sr.prototype.delete=tr,sr.prototype.get=nr,sr.prototype.has=ir,sr.prototype.set=or;var ar=sr;var lr=function(){this.__data__=[],this.size=0};var dr=function(e,r){return e===r||e!=e&&r!=r};var cr=function(e,r){for(var t=e.length;t--;)if(dr(e[t][0],r))return t;return-1},ur=cr,hr=Array.prototype.splice;var gr=function(e){var r=this.__data__,t=ur(r,e);return!(t<0)&&(t==r.length-1?r.pop():hr.call(r,t,1),--this.size,!0)},br=cr;var mr=function(e){var r=this.__data__,t=br(r,e);return t<0?void 0:r[t][1]},pr=cr;var fr=function(e){return pr(this.__data__,e)>-1},yr=cr;var vr=function(e,r){var t=this.__data__,n=yr(t,e);return n<0?(++this.size,t.push([e,r])):t[n][1]=r,this},xr=lr,wr=gr,Fr=mr,$r=fr,Er=vr;function Dr(e){var r=-1,t=null==e?0:e.length;for(this.clear();++r<t;){var n=e[r];this.set(n[0],n[1])}}Dr.prototype.clear=xr,Dr.prototype.delete=wr,Dr.prototype.get=Fr,Dr.prototype.has=$r,Dr.prototype.set=Er;var Cr=Dr,Br=He(J,"Map"),Ar=ar,Mr=Cr,kr=Br;var zr=function(e){var r=typeof e;return"string"==r||"number"==r||"symbol"==r||"boolean"==r?"__proto__"!==e:null===e};var Or=function(e,r){var t=e.__data__;return zr(r)?t["string"==typeof r?"string":"hash"]:t.map},Sr=Or;var _r=function(e){var r=Sr(this,e).delete(e);return this.size-=r?1:0,r},Tr=Or;var Lr=function(e){return Tr(this,e).get(e)},jr=Or;var Yr=function(e){return jr(this,e).has(e)},Pr=Or;var Rr=function(e,r){var t=Pr(this,e),n=t.size;return t.set(e,r),this.size+=t.size==n?0:1,this},Ir=function(){this.size=0,this.__data__={hash:new Ar,map:new(kr||Mr),string:new Ar}},Hr=_r,Wr=Lr,Vr=Yr,Nr=Rr;function Kr(e){var r=-1,t=null==e?0:e.length;for(this.clear();++r<t;){var n=e[r];this.set(n[0],n[1])}}Kr.prototype.clear=Ir,Kr.prototype.delete=Hr,Kr.prototype.get=Wr,Kr.prototype.has=Vr,Kr.prototype.set=Nr;var Ur=Kr,Zr=Ur;function Xr(e,r){if("function"!=typeof e||null!=r&&"function"!=typeof r)throw new TypeError("Expected a function");var t=function(){var n=arguments,i=r?r.apply(this,n):n[0],o=t.cache;if(o.has(i))return o.get(i);var s=e.apply(this,n);return t.cache=o.set(i,s)||o,s};return t.cache=new(Xr.Cache||Zr),t}Xr.Cache=Zr;var qr=Xr;var Jr=function(e){var r=qr(e,(function(e){return 500===t.size&&t.clear(),e})),t=r.cache;return r},Gr=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,Qr=/\\(\\)?/g,et=Jr((function(e){var r=[];return 46===e.charCodeAt(0)&&r.push(""),e.replace(Gr,(function(e,t,n,i){r.push(n?i.replace(Qr,"$1"):t||e)})),r}));var rt=function(e,r){for(var t=-1,n=null==e?0:e.length,i=Array(n);++t<n;)i[t]=r(e[t],t,e);return i},tt=U,nt=ge,it=G?G.prototype:void 0,ot=it?it.toString:void 0;var st=function e(r){if("string"==typeof r)return r;if(tt(r))return rt(r,e)+"";if(nt(r))return ot?ot.call(r):"";var t=r+"";return"0"==t&&1/r==-1/0?"-0":t},at=st;var lt=U,dt=ye,ct=et,ut=function(e){return null==e?"":at(e)};var ht=ge;var gt=function(e,r){return lt(e)?e:dt(e,r)?[e]:ct(ut(e))},bt=function(e){if("string"==typeof e||ht(e))return e;var r=e+"";return"0"==r&&1/e==-1/0?"-0":r};var mt=function(e,r){for(var t=0,n=(r=gt(r,e)).length;null!=e&&t<n;)e=e[bt(r[t++])];return t&&t==n?e:void 0};var pt=K((function(e,r,t){var n=null==e?void 0:mt(e,r);return void 0===n?t:n}));const ft=(e,r,t)=>pt(t,r)||pt(e,r),yt=(e,r)=>{const t=r||e.defaultValue;return pt(e.collections,t)},vt={collections:{default:{"width-005":.5,"width-010":1,"width-020":2,"width-040":4,solid:"solid"}},defaultValue:"default"},xt=e=>r=>{var t;const n=r.theme,i=yt(vt,null==n?void 0:n.borderScheme);return(null===(t=null==n?void 0:n.overrides)||void 0===t?void 0:t.border)?`${ft(i,e,n.overrides.border)}px`:`${i[e]}px`},wt={"width-005":xt("width-005"),"width-010":xt("width-010"),"width-020":xt("width-020"),"width-040":xt("width-040"),solid:(Ft="solid",e=>{var r;const t=e.theme,n=yt(vt,null==t?void 0:t.borderScheme),i=(null===(r=null==t?void 0:t.overrides)||void 0===r?void 0:r.border)?ft(n,Ft,t.overrides.border):n[Ft];return"function"==typeof i?i(e):i})};var Ft;const $t={collections:{lifesg:{"brand-10":"#2C0C0B","brand-20":"#4C1513","brand-30":"#6C1D1B","brand-40":"#922825","brand-50":"#BF3431","brand-60":"#F15D5A","brand-70":"#F69491","brand-80":"#FABAB7","brand-90":"#FCD7D2","brand-95":"#FFEBE7","brand-100":"#FFF6F4","primary-10":"#001731","primary-20":"#002752","primary-30":"#003874","primary-40":"#004D9F","primary-50":"#1768BE","primary-60":"#3C91EC","primary-70":"#6CB4FF","primary-80":"#A5CDFF","primary-90":"#CFE1FE","primary-95":"#E8F0FE","primary-100":"#F7F9FF","secondary-10":"#131529","secondary-20":"#222547","secondary-30":"#2F3565","secondary-40":"#42498B","secondary-50":"#5B62A7","secondary-60":"#858CBD","secondary-70":"#A8ADCF","secondary-80":"#C6C9E0","secondary-90":"#DDDFEC","secondary-95":"#EDEEF5","secondary-100":"#F8F8FB","neutral-10":"#161616","neutral-20":"#282828","neutral-30":"#393939","neutral-40":"#4E4E4E","neutral-50":"#686868","neutral-60":"#8E8E8E","neutral-70":"#AFAFB0","neutral-80":"#C7CACA","neutral-90":"#DDE1E2","neutral-95":"#EDEFEF","neutral-100":"#F9F9F9","success-10":"#081A0F","success-20":"#0E2D1B","success-30":"#154126","success-40":"#1C5A34","success-50":"#257645","success-60":"#44A068","success-70":"#64C189","success-80":"#80DCA5","success-90":"#B4ECCB","success-95":"#D5F6E2","success-100":"#EFFCF4","warning-10":"#221302","warning-20":"#3B2204","warning-30":"#543106","warning-40":"#744408","warning-50":"#98590C","warning-60":"#D07A13","warning-70":"#E4A244","warning-80":"#F5C26C","warning-90":"#FADBA6","warning-95":"#FCECD4","warning-100":"#FDF7F0","error-10":"#330505","error-20":"#550808","error-30":"#750C0C","error-40":"#9E130F","error-50":"#CB2213","error-60":"#DE6C6C","error-70":"#E89B9B","error-80":"#EFBEBE","error-90":"#F5D9D9","error-95":"#F9ECEC","error-100":"#FCF7F7","info-10":"#021824","info-20":"#032B3F","info-30":"#053D59","info-40":"#065478","info-50":"#176E9B","info-60":"#5296BE","info-70":"#82B5DA","info-80":"#ACCFE7","info-90":"#CCE3F1","info-95":"#E3F1F8","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000","primary-inverse":"#FEAB10"},bookingsg:{"brand-10":"#2C0C0B","brand-20":"#4C1513","brand-30":"#6C1D1B","brand-40":"#922825","brand-50":"#BF3431","brand-60":"#F15D5A","brand-70":"#F69491","brand-80":"#FABAB7","brand-90":"#FCD7D2","brand-95":"#FFEBE7","brand-100":"#FFF6F4","primary-10":"#1A122C","primary-20":"#2F1F4D","primary-30":"#422D6E","primary-40":"#5B3D97","primary-50":"#7654BC","primary-60":"#9A82CD","primary-70":"#B7A7D8","primary-80":"#CFC5E5","primary-90":"#E3DDF0","primary-95":"#F0EDF7","primary-100":"#F9F8FC","secondary-10":"#0E1723","secondary-20":"#18293D","secondary-30":"#233A57","secondary-40":"#305078","secondary-50":"#4B6A8F","secondary-60":"#7B91A9","secondary-70":"#A1B1C3","secondary-80":"#C1CBD7","secondary-90":"#DBE1E8","secondary-95":"#EBEFF2","secondary-100":"#F7F8FA","neutral-10":"#161616","neutral-20":"#282828","neutral-30":"#393939","neutral-40":"#4E4E4E","neutral-50":"#686868","neutral-60":"#8E8E8E","neutral-70":"#AFAFB0","neutral-80":"#C7CACA","neutral-90":"#DDE1E2","neutral-95":"#EDEFEF","neutral-100":"#F9F9F9","success-10":"#081A0F","success-20":"#0E2D1B","success-30":"#154126","success-40":"#1C5A34","success-50":"#257645","success-60":"#44A068","success-70":"#64C189","success-80":"#80DCA5","success-90":"#B4ECCB","success-95":"#D5F6E2","success-100":"#EFFCF4","warning-10":"#221302","warning-20":"#3B2204","warning-30":"#543106","warning-40":"#744408","warning-50":"#98590C","warning-60":"#D07A13","warning-70":"#E4A244","warning-80":"#F5C26C","warning-90":"#FADBA6","warning-95":"#FCECD4","warning-100":"#FDF7F0","error-10":"#330505","error-20":"#550808","error-30":"#750C0C","error-40":"#9E130F","error-50":"#CB2213","error-60":"#DE6C6C","error-70":"#E89B9B","error-80":"#EFBEBE","error-90":"#F5D9D9","error-95":"#F9ECEC","error-100":"#FCF7F7","info-10":"#021824","info-20":"#032B3F","info-30":"#053D59","info-40":"#065478","info-50":"#176E9B","info-60":"#5296BE","info-70":"#82B5DA","info-80":"#ACCFE7","info-90":"#CCE3F1","info-95":"#E3F1F8","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000","primary-inverse":"#FEAB10"},rbs:{"brand-10":"#0E123A","brand-20":"#191E65","brand-30":"#232B90","brand-40":"#303BC5","brand-50":"#494CFF","brand-60":"#AD6EFF","brand-70":"#AEA4FF","brand-80":"#C5C4FF","brand-90":"#DDDCFF","brand-95":"#EDECFF","brand-100":"#F8F8FF","primary-10":"#10152B","primary-20":"#1C254B","primary-30":"#28356C","primary-40":"#38489A","primary-50":"#4D5AD7","primary-60":"#7487F2","primary-70":"#9AAAFC","primary-80":"#BDC7FD","primary-90":"#DADFFB","primary-95":"#ECEEFE","primary-100":"#F7F8FF","secondary-10":"#19151D","secondary-20":"#2B2533","secondary-30":"#3E3649","secondary-40":"#564A64","secondary-50":"#6F637D","secondary-60":"#948B9F","secondary-70":"#B3ACBB","secondary-80":"#CCC8D2","secondary-90":"#E1DEE4","secondary-95":"#EFEEF1","secondary-100":"#F9F8F9","neutral-10":"#161616","neutral-20":"#282828","neutral-30":"#393939","neutral-40":"#4E4E4E","neutral-50":"#686868","neutral-60":"#8E8E8E","neutral-70":"#AFAFB0","neutral-80":"#C7CACA","neutral-90":"#DDE1E2","neutral-95":"#EDEFEF","neutral-100":"#F9F9F9","success-10":"#081A0F","success-20":"#0E2D1B","success-30":"#154126","success-40":"#1C5A34","success-50":"#257645","success-60":"#44A068","success-70":"#64C189","success-80":"#80DCA5","success-90":"#B4ECCB","success-95":"#D5F6E2","success-100":"#EFFCF4","warning-10":"#221302","warning-20":"#3B2204","warning-30":"#543106","warning-40":"#744408","warning-50":"#98590C","warning-60":"#D07A13","warning-70":"#E4A244","warning-80":"#F5C26C","warning-90":"#FADBA6","warning-95":"#FCECD4","warning-100":"#FDF7F0","error-10":"#330505","error-20":"#550808","error-30":"#750C0C","error-40":"#9E130F","error-50":"#CB2213","error-60":"#DE6C6C","error-70":"#E89B9B","error-80":"#EFBEBE","error-90":"#F5D9D9","error-95":"#F9ECEC","error-100":"#FCF7F7","info-10":"#021824","info-20":"#032B3F","info-30":"#053D59","info-40":"#065478","info-50":"#176E9B","info-60":"#5296BE","info-70":"#82B5DA","info-80":"#ACCFE7","info-90":"#CCE3F1","info-95":"#E3F1F8","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000","primary-inverse":"#FEAB10"},mylegacy:{"brand-10":"#2C0C0B","brand-20":"#4C1513","brand-30":"#6C1D1B","brand-40":"#922825","brand-50":"#BF3431","brand-60":"#F15D5A","brand-70":"#F69491","brand-80":"#FABAB7","brand-90":"#FCD7D2","brand-95":"#FFEBE7","brand-100":"#FFF6F4","primary-10":"#0011924","primary-20":"#032B40","primary-30":"#043D5A","primary-40":"#05547B","primary-50":"#096EA1","primary-60":"#2098D3","primary-70":"#5CB9E8","primary-80":"#8BD3F6","primary-90":"#BEE6FA","primary-95":"#E2F2FA","primary-100":"#F4FAFC","secondary-10":"#131529","secondary-20":"#222547","secondary-30":"#2F3565","secondary-40":"#42498B","secondary-50":"#5B62A7","secondary-60":"#858CBD","secondary-70":"#A8ADCF","secondary-80":"#C6C9E0","secondary-90":"#DDDFEC","secondary-95":"#EDEEF5","secondary-100":"#F8F8FB","neutral-10":"#161616","neutral-20":"#282828","neutral-30":"#393939","neutral-40":"#4E4E4E","neutral-50":"#686868","neutral-60":"#8E8E8E","neutral-70":"#AFAFB0","neutral-80":"#C7CACA","neutral-90":"#DDE1E2","neutral-95":"#EDEFEF","neutral-100":"#F9F9F9","success-10":"#081A0F","success-20":"#0E2D1B","success-30":"#154126","success-40":"#1C5A34","success-50":"#257645","success-60":"#44A068","success-70":"#64C189","success-80":"#80DCA5","success-90":"#B4ECCB","success-95":"#D5F6E2","success-100":"#EFFCF4","warning-10":"#221302","warning-20":"#3B2204","warning-30":"#543106","warning-40":"#744408","warning-50":"#98590C","warning-60":"#D07A13","warning-70":"#E4A244","warning-80":"#F5C26C","warning-90":"#FADBA6","warning-95":"#FCECD4","warning-100":"#FDF7F0","error-10":"#330505","error-20":"#550808","error-30":"#750C0C","error-40":"#9E130F","error-50":"#CB2213","error-60":"#DE6C6C","error-70":"#E89B9B","error-80":"#EFBEBE","error-90":"#F5D9D9","error-95":"#F9ECEC","error-100":"#FCF7F7","info-10":"#021824","info-20":"#032B3F","info-30":"#053D59","info-40":"#065478","info-50":"#176E9B","info-60":"#5296BE","info-70":"#82B5DA","info-80":"#ACCFE7","info-90":"#CCE3F1","info-95":"#E3F1F8","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000","primary-inverse":"#FEAB10"},ccube:{"brand-10":"#1F1221","brand-20":"#371F3B","brand-30":"#4E2C53","brand-40":"#6B3E73","brand-50":"#8D5197","brand-60":"#FF3399","brand-70":"#FF88C4","brand-80":"#FFB3D9","brand-90":"#FFD4E9","brand-95":"#FFE8F3","brand-100":"#FFD6EB","primary-10":"#1F1221","primary-20":"#371F3B","primary-30":"#4E2C53","primary-40":"#6B3E73","primary-50":"#8D5197","primary-60":"#B07DB7","primary-70":"#C7A3CC","primary-80":"#D9C2DD","primary-90":"#E9DBEB","primary-95":"#F3ECF4","primary-100":"#FAF7FA","secondary-10":"#2D091B","secondary-20":"#4D0F2E","secondary-30":"#6B1540","secondary-40":"#931D58","secondary-50":"#C02673","secondary-60":"#FF409F","secondary-70":"#FF88C4","secondary-80":"#FFB3D9","secondary-90":"#FFD4E9","secondary-95":"#FFE8F3","secondary-100":"#FFF8FC","neutral-10":"#161616","neutral-20":"#282828","neutral-30":"#393939","neutral-40":"#4E4E4E","neutral-50":"#686868","neutral-60":"#8E8E8E","neutral-70":"#AFAFB0","neutral-80":"#C7CACA","neutral-90":"#DDE1E2","neutral-95":"#EDEFEF","neutral-100":"#F9F9F9","success-10":"#081A0F","success-20":"#0E2D1B","success-30":"#154126","success-40":"#1C5A34","success-50":"#257645","success-60":"#44A068","success-70":"#64C189","success-80":"#80DCA5","success-90":"#B4ECCB","success-95":"#D5F6E2","success-100":"#EFFCF4","warning-10":"#221302","warning-20":"#3B2204","warning-30":"#543106","warning-40":"#744408","warning-50":"#98590C","warning-60":"#D07A13","warning-70":"#E4A244","warning-80":"#F5C26C","warning-90":"#FADBA6","warning-95":"#FCECD4","warning-100":"#FDF7F0","error-10":"#330505","error-20":"#550808","error-30":"#750C0C","error-40":"#9E130F","error-50":"#CB2213","error-60":"#DE6C6C","error-70":"#E89B9B","error-80":"#EFBEBE","error-90":"#F5D9D9","error-95":"#F9ECEC","error-100":"#FCF7F7","info-10":"#021824","info-20":"#032B3F","info-30":"#053D59","info-40":"#065478","info-50":"#176E9B","info-60":"#5296BE","info-70":"#82B5DA","info-80":"#ACCFE7","info-90":"#CCE3F1","info-95":"#E3F1F8","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000","primary-inverse":"#FEAB10"},oneservice:{"brand-10":"#001A19","brand-20":"#002D2B","brand-30":"#00413D","brand-40":"#005954","brand-50":"#00756F","brand-60":"#03A098","brand-70":"#55BFBA","brand-80":"#92D6D2","brand-90":"#BFE7E5","brand-95":"#DDF2F1","brand-100":"#F4FBFA","primary-10":"#09191D","primary-20":"#102B34","primary-30":"#173D49","primary-40":"#205666","primary-50":"#2A7086","primary-60":"#2A7086","primary-70":"#8CB6C2","primary-80":"#B2CED6","primary-90":"#D1E2E7","primary-95":"#E8F0F3","primary-100":"#F9F8FC","secondary-10":"#001731","secondary-20":"#002752","secondary-30":"#003874","secondary-40":"#004D9F","secondary-50":"#5B62A7","secondary-60":"#858CBD","secondary-70":"#A8ADCF","secondary-80":"#C6C9E0","secondary-90":"#DDDFEC","secondary-95":"#EDEEF5","secondary-100":"#F8F8FB","neutral-10":"#161616","neutral-20":"#282828","neutral-30":"#393939","neutral-40":"#4E4E4E","neutral-50":"#686868","neutral-60":"#8E8E8E","neutral-70":"#AFAFB0","neutral-80":"#C7CACA","neutral-90":"#DDE1E2","neutral-95":"#EDEFEF","neutral-100":"#F9F9F9","success-10":"#081A0F","success-20":"#0E2D1B","success-30":"#154126","success-40":"#1C5A34","success-50":"#257645","success-60":"#44A068","success-70":"#64C189","success-80":"#80DCA5","success-90":"#B4ECCB","success-95":"#D5F6E2","success-100":"#EFFCF4","warning-10":"#221302","warning-20":"#3B2204","warning-30":"#543106","warning-40":"#744408","warning-50":"#98590C","warning-60":"#D07A13","warning-70":"#E4A244","warning-80":"#F5C26C","warning-90":"#FADBA6","warning-95":"#FCECD4","warning-100":"#FDF7F0","error-10":"#330505","error-20":"#550808","error-30":"#750C0C","error-40":"#9E130F","error-50":"#CB2213","error-60":"#DE6C6C","error-70":"#E89B9B","error-80":"#EFBEBE","error-90":"#F5D9D9","error-95":"#F9ECEC","error-100":"#FCF7F7","info-10":"#021824","info-20":"#032B3F","info-30":"#053D59","info-40":"#065478","info-50":"#176E9B","info-60":"#5296BE","info-70":"#82B5DA","info-80":"#ACCFE7","info-90":"#CCE3F1","info-95":"#E3F1F8","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000","primary-inverse":"#FEAB10"},pa:{"brand-10":"#881317","brand-20":"#B5191E","brand-30":"#B5040A","brand-40":"#D0333F","brand-50":"#DC666F","brand-60":"#E28087","brand-70":"#E7999F","brand-80":"#EDB3B7","brand-90":"#F3CCCF","brand-95":"#F9E6E7","brand-100":"#FCF2F3","primary-10":"#000000","primary-20":"#191919","primary-30":"#333333","primary-40":"#4D4D4D","primary-50":"#666666","primary-60":"#808080","primary-70":"#999999","primary-80":"#B3B3B3","primary-90":"#E6E6E6","primary-95":"#F7F7F7","primary-100":"#FFFFFF","secondary-10":"#19151D","secondary-20":"#2B2533","secondary-30":"#3E3649","secondary-40":"#564A64","secondary-50":"#6F637D","secondary-60":"#948B9F","secondary-70":"#B3ACBB","secondary-80":"#CCC8D2","secondary-90":"#E1DEE4","secondary-95":"#EFEEF1","secondary-100":"#F9F8F9","neutral-10":"#000000","neutral-20":"#191919","neutral-30":"#333333","neutral-40":"#4D4D4D","neutral-50":"#666666","neutral-60":"#808080","neutral-70":"#999999","neutral-80":"#B3B3B3","neutral-90":"#E6E6E6","neutral-95":"#F7F7F7","neutral-100":"#FFFFFF","success-10":"#081A0F","success-20":"#0E2D1B","success-30":"#154126","success-40":"#1C5A34","success-50":"#257645","success-60":"#44A068","success-70":"#64C189","success-80":"#80DCA5","success-90":"#B4ECCB","success-95":"#D5F6E2","success-100":"#EFFCF4","warning-10":"#221302","warning-20":"#3B2204","warning-30":"#543106","warning-40":"#744408","warning-50":"#98590C","warning-60":"#D07A13","warning-70":"#E4A244","warning-80":"#F5C26C","warning-90":"#FADBA6","warning-95":"#FCECD4","warning-100":"#FDF7F0","error-10":"#330505","error-20":"#550808","error-30":"#750C0C","error-40":"#9E130F","error-50":"#CB2213","error-60":"#DE6C6C","error-70":"#E89B9B","error-80":"#EFBEBE","error-90":"#F5D9D9","error-95":"#F9ECEC","error-100":"#FCF7F7","info-10":"#021824","info-20":"#032B3F","info-30":"#053D59","info-40":"#065478","info-50":"#176E9B","info-60":"#5296BE","info-70":"#82B5DA","info-80":"#ACCFE7","info-90":"#CCE3F1","info-95":"#E3F1F8","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000","primary-inverse":"#FEAB10"}},defaultValue:"lifesg"},Et=e=>r=>{var t;const n=r.theme,i=yt($t,null==n?void 0:n.colourScheme);return(null===(t=null==n?void 0:n.overrides)||void 0===t?void 0:t.primitiveColour)?ft(i,e,n.overrides.primitiveColour):i[e]},Dt={"brand-10":Et("brand-10"),"brand-20":Et("brand-20"),"brand-30":Et("brand-30"),"brand-40":Et("brand-40"),"brand-50":Et("brand-50"),"brand-60":Et("brand-60"),"brand-70":Et("brand-70"),"brand-80":Et("brand-80"),"brand-90":Et("brand-90"),"brand-95":Et("brand-95"),"brand-100":Et("brand-100"),"primary-10":Et("primary-10"),"primary-20":Et("primary-20"),"primary-30":Et("primary-30"),"primary-40":Et("primary-40"),"primary-50":Et("primary-50"),"primary-60":Et("primary-60"),"primary-70":Et("primary-70"),"primary-80":Et("primary-80"),"primary-90":Et("primary-90"),"primary-95":Et("primary-95"),"primary-100":Et("primary-100"),"secondary-10":Et("secondary-10"),"secondary-20":Et("secondary-20"),"secondary-30":Et("secondary-30"),"secondary-40":Et("secondary-40"),"secondary-50":Et("secondary-50"),"secondary-60":Et("secondary-60"),"secondary-70":Et("secondary-70"),"secondary-80":Et("secondary-80"),"secondary-90":Et("secondary-90"),"secondary-95":Et("secondary-95"),"secondary-100":Et("secondary-100"),"neutral-10":Et("neutral-10"),"neutral-20":Et("neutral-20"),"neutral-30":Et("neutral-30"),"neutral-40":Et("neutral-40"),"neutral-50":Et("neutral-50"),"neutral-60":Et("neutral-60"),"neutral-70":Et("neutral-70"),"neutral-80":Et("neutral-80"),"neutral-90":Et("neutral-90"),"neutral-95":Et("neutral-95"),"neutral-100":Et("neutral-100"),"success-10":Et("success-10"),"success-20":Et("success-20"),"success-30":Et("success-30"),"success-40":Et("success-40"),"success-50":Et("success-50"),"success-60":Et("success-60"),"success-70":Et("success-70"),"success-80":Et("success-80"),"success-90":Et("success-90"),"success-95":Et("success-95"),"success-100":Et("success-100"),"warning-10":Et("warning-10"),"warning-20":Et("warning-20"),"warning-30":Et("warning-30"),"warning-40":Et("warning-40"),"warning-50":Et("warning-50"),"warning-60":Et("warning-60"),"warning-70":Et("warning-70"),"warning-80":Et("warning-80"),"warning-90":Et("warning-90"),"warning-95":Et("warning-95"),"warning-100":Et("warning-100"),"error-10":Et("error-10"),"error-20":Et("error-20"),"error-30":Et("error-30"),"error-40":Et("error-40"),"error-50":Et("error-50"),"error-60":Et("error-60"),"error-70":Et("error-70"),"error-80":Et("error-80"),"error-90":Et("error-90"),"error-95":Et("error-95"),"error-100":Et("error-100"),"info-10":Et("info-10"),"info-20":Et("info-20"),"info-30":Et("info-30"),"info-40":Et("info-40"),"info-50":Et("info-50"),"info-60":Et("info-60"),"info-70":Et("info-70"),"info-80":Et("info-80"),"info-90":Et("info-90"),"info-95":Et("info-95"),"info-100":Et("info-100"),white:Et("white"),black:Et("black"),"primary-inverse":Et("primary-inverse")},Ct={text:Et("neutral-20"),"text-subtle":Et("neutral-30"),"text-subtler":Et("neutral-50"),"text-subtlest":Et("neutral-60"),"text-primary":Et("primary-50"),"text-hover":Et("primary-40"),"text-selected":Et("primary-50"),"text-selected-hover":Et("primary-40"),"text-disabled":Et("neutral-50"),"text-disabled-subtle":Et("neutral-60"),"text-disabled-subtlest":Et("neutral-80"),"text-selected-disabled":Et("neutral-20"),"text-success":Et("success-40"),"text-warning":Et("warning-40"),"text-error":Et("error-40"),"text-info":Et("info-40"),"text-inverse":Et("white"),icon:Et("neutral-50"),"icon-subtle":Et("neutral-60"),"icon-strongest":Et("neutral-20"),"icon-primary":Et("primary-50"),"icon-primary-subtle":Et("primary-60"),"icon-primary-subtlest":Et("primary-70"),"icon-hover":Et("primary-40"),"icon-selected":Et("primary-50"),"icon-selected-hover":Et("primary-40"),"icon-disabled":Et("neutral-50"),"icon-disabled-subtle":Et("neutral-60"),"icon-selected-disabled":Et("neutral-60"),"icon-success":Et("success-50"),"icon-warning":Et("warning-60"),"icon-error":Et("error-50"),"icon-error-strong":Et("error-40"),"icon-info":Et("info-50"),"icon-inverse":Et("white"),"icon-primary-inverse":Et("primary-inverse"),border:Et("neutral-90"),"border-strong":Et("neutral-70"),"border-stronger":Et("neutral-50"),"border-primary":Et("primary-50"),"border-primary-subtle":Et("primary-60"),"border-hover":Et("primary-90"),"border-hover-strong":Et("primary-60"),"border-selected":Et("primary-50"),"border-selected-subtle":Et("primary-70"),"border-selected-subtlest":Et("primary-90"),"border-selected-hover":Et("primary-40"),"border-focus":Et("primary-60"),"border-focus-strong":Et("primary-50"),"border-disabled":Et("neutral-90"),"border-selected-disabled":Et("neutral-70"),"border-success":Et("success-60"),"border-warning":Et("warning-60"),"border-error":Et("error-60"),"border-error-focus":Et("error-60"),"border-error-focus-strong":Et("error-40"),"border-error-strong":Et("error-40"),"border-info":Et("info-60"),bg:Et("white"),"bg-strong":Et("neutral-100"),"bg-stronger":Et("neutral-95"),"bg-strongest":Et("neutral-90"),"bg-hover":Et("primary-95"),"bg-hover-strong":Et("primary-90"),"bg-hover-subtle":Et("primary-100"),"bg-hover-neutral":Et("neutral-100"),"bg-hover-neutral-strong":Et("neutral-90"),"bg-selected":Et("primary-95"),"bg-selected-hover":Et("primary-90"),"bg-selected-strong":Et("primary-90"),"bg-selected-stronger":Et("primary-70"),"bg-selected-strongest":Et("primary-50"),"bg-selected-strongest-hover":Et("primary-40"),"bg-disabled":Et("neutral-95"),"bg-selected-disabled":Et("neutral-95"),"bg-selected-stronger-disabled":Et("neutral-70"),"bg-success":Et("success-100"),"bg-success-hover":Et("success-95"),"bg-success-strong":Et("success-50"),"bg-success-strong-hover":Et("success-40"),"bg-warning":Et("warning-100"),"bg-warning-hover":Et("warning-95"),"bg-warning-strong":Et("warning-50"),"bg-warning-strong-hover":Et("warning-40"),"bg-info":Et("info-100"),"bg-info-hover":Et("info-95"),"bg-info-strong":Et("info-50"),"bg-info-strong-hover":Et("info-40"),"bg-error":Et("error-100"),"bg-error-hover":Et("error-95"),"bg-error-strong":Et("error-50"),"bg-error-strong-hover":Et("error-40"),"bg-inverse":Et("neutral-20"),"bg-inverse-subtle":Et("neutral-30"),"bg-inverse-subtler":Et("neutral-50"),"bg-inverse-subtlest":Et("neutral-60"),"bg-inverse-hover":Et("neutral-40"),"bg-primary":Et("primary-50"),"bg-primary-subtle":Et("primary-60"),"bg-primary-subtler":Et("primary-95"),"bg-primary-subtlest":Et("primary-100"),"bg-available":"#6DD0A1","bg-primary-hover":Et("primary-40"),"bg-primary-subtlest-hover":Et("primary-90"),"bg-primary-subtlest-selected":Et("primary-90"),"overlay-strong":"rgba(40, 40, 40, 0.85)","overlay-subtle":"rgba(40, 40, 40, 0.20)",hyperlink:Et("primary-50"),"hyperlink-hover":Et("primary-40"),"hyperlink-visited":Et("primary-40"),"hyperlink-inverse":Et("primary-inverse"),"focus-ring":Et("black"),"focus-ring-inverse":Et("white")},Bt={collections:{lifesg:Ct,bookingsg:Ct,rbs:Ct,mylegacy:Ct,ccube:Ct,oneservice:Ct,pa:{text:Et("neutral-30"),"text-subtle":Et("neutral-40"),"text-subtler":Et("neutral-50"),"text-subtlest":Et("neutral-70"),"text-primary":Et("neutral-10"),"text-hover":Et("neutral-70"),"text-selected":Et("neutral-20"),"text-selected-hover":Et("neutral-10"),"text-disabled":Et("neutral-50"),"text-disabled-subtle":Et("neutral-60"),"text-disabled-subtlest":Et("neutral-80"),"text-selected-disabled":Et("neutral-40"),"text-success":Et("success-40"),"text-warning":Et("warning-40"),"text-error":Et("brand-30"),"text-info":Et("neutral-40"),"text-inverse":Et("neutral-100"),icon:Et("neutral-40"),"icon-subtle":Et("neutral-50"),"icon-strongest":Et("neutral-10"),"icon-primary":Et("neutral-10"),"icon-primary-subtle":Et("neutral-30"),"icon-primary-subtlest":Et("neutral-60"),"icon-hover":Et("neutral-70"),"icon-selected":Et("brand-20"),"icon-selected-hover":Et("brand-10"),"icon-disabled":Et("neutral-50"),"icon-disabled-subtle":Et("neutral-60"),"icon-selected-disabled":Et("neutral-40"),"icon-success":Et("success-40"),"icon-warning":Et("warning-60"),"icon-error":Et("brand-30"),"icon-error-strong":Et("brand-10"),"icon-info":Et("neutral-40"),"icon-inverse":Et("neutral-100"),"icon-primary-inverse":"#F9B371",border:Et("neutral-90"),"border-strong":Et("neutral-30"),"border-stronger":Et("neutral-20"),"border-primary":Et("neutral-40"),"border-primary-subtle":Et("neutral-60"),"border-hover":Et("neutral-80"),"border-hover-strong":Et("neutral-10"),"border-selected":Et("brand-20"),"border-selected-subtle":Et("neutral-40"),"border-selected-subtlest":Et("neutral-70"),"border-selected-hover":Et("neutral-10"),"border-focus":Et("neutral-20"),"border-focus-strong":Et("neutral-10"),"border-disabled":Et("neutral-90"),"border-selected-disabled":Et("neutral-80"),"border-success":Et("success-40"),"border-warning":Et("warning-60"),"border-error":Et("brand-30"),"border-error-focus":Et("brand-20"),"border-error-focus-strong":Et("brand-10"),"border-error-strong":Et("brand-20"),"border-info":Et("neutral-40"),bg:Et("neutral-100"),"bg-strong":Et("neutral-95"),"bg-stronger":Et("neutral-90"),"bg-strongest":Et("neutral-80"),"bg-hover":Et("brand-90"),"bg-hover-strong":Et("brand-80"),"bg-hover-subtle":Et("neutral-90"),"bg-hover-neutral":Et("neutral-90"),"bg-hover-neutral-strong":Et("neutral-90"),"bg-selected":Et("brand-100"),"bg-selected-hover":Et("brand-30"),"bg-selected-strong":Et("brand-50"),"bg-selected-stronger":Et("brand-40"),"bg-selected-strongest":Et("brand-20"),"bg-selected-strongest-hover":Et("brand-10"),"bg-disabled":Et("neutral-90"),"bg-selected-disabled":Et("neutral-90"),"bg-selected-stronger-disabled":Et("neutral-80"),"bg-success":Et("success-100"),"bg-success-hover":Et("success-95"),"bg-success-strong":Et("success-50"),"bg-success-strong-hover":Et("success-40"),"bg-warning":Et("warning-100"),"bg-warning-hover":Et("warning-95"),"bg-warning-strong":Et("warning-50"),"bg-warning-strong-hover":Et("warning-40"),"bg-info":Et("neutral-95"),"bg-info-hover":Et("info-95"),"bg-info-strong":Et("info-50"),"bg-info-strong-hover":Et("info-40"),"bg-error":Et("brand-100"),"bg-error-hover":Et("error-95"),"bg-error-strong":Et("error-50"),"bg-error-strong-hover":Et("error-40"),"bg-inverse":Et("neutral-40"),"bg-inverse-subtle":Et("neutral-60"),"bg-inverse-subtler":Et("neutral-70"),"bg-inverse-subtlest":Et("neutral-80"),"bg-inverse-hover":Et("neutral-30"),"bg-primary":Et("brand-20"),"bg-primary-subtle":Et("brand-60"),"bg-primary-subtler":Et("brand-80"),"bg-primary-subtlest":Et("brand-100"),"bg-available":Et("success-60"),"bg-primary-hover":Et("brand-10"),"bg-primary-subtlest-hover":Et("brand-80"),"bg-primary-subtlest-selected":Et("brand-40"),"overlay-strong":"rgba(25, 25, 25, 0.95)","overlay-subtle":"rgba(25, 25, 25, 0.20)",hyperlink:Et("neutral-10"),"hyperlink-hover":Et("neutral-40"),"hyperlink-visited":Et("neutral-50"),"hyperlink-inverse":"#F8AE68","focus-ring":Et("black"),"focus-ring-inverse":Et("white")}},defaultValue:"lifesg"},At=e=>r=>{var t;const n=r.theme,i=yt(Bt,null==n?void 0:n.colourScheme),o=(null===(t=null==n?void 0:n.overrides)||void 0===t?void 0:t.semanticColour)?ft(i,e,n.overrides.semanticColour):i[e];return"function"==typeof o?o(r):o},Mt={text:At("text"),"text-subtle":At("text-subtle"),"text-subtler":At("text-subtler"),"text-subtlest":At("text-subtlest"),"text-primary":At("text-primary"),"text-hover":At("text-hover"),"text-selected":At("text-selected"),"text-selected-hover":At("text-selected-hover"),"text-disabled":At("text-disabled"),"text-disabled-subtle":At("text-disabled-subtle"),"text-disabled-subtlest":At("text-disabled-subtlest"),"text-selected-disabled":At("text-selected-disabled"),"text-success":At("text-success"),"text-warning":At("text-warning"),"text-error":At("text-error"),"text-info":At("text-info"),"text-inverse":At("text-inverse"),icon:At("icon"),"icon-subtle":At("icon-subtle"),"icon-strongest":At("icon-strongest"),"icon-primary":At("icon-primary"),"icon-primary-subtle":At("icon-primary-subtle"),"icon-primary-subtlest":At("icon-primary-subtlest"),"icon-hover":At("icon-hover"),"icon-selected":At("icon-selected"),"icon-selected-hover":At("icon-selected-hover"),"icon-disabled":At("icon-disabled"),"icon-disabled-subtle":At("icon-disabled-subtle"),"icon-selected-disabled":At("icon-selected-disabled"),"icon-success":At("icon-success"),"icon-warning":At("icon-warning"),"icon-error":At("icon-error"),"icon-error-strong":At("icon-error-strong"),"icon-info":At("icon-info"),"icon-inverse":At("icon-inverse"),"icon-primary-inverse":At("icon-primary-inverse"),border:At("border"),"border-strong":At("border-strong"),"border-stronger":At("border-stronger"),"border-primary":At("border-primary"),"border-primary-subtle":At("border-primary-subtle"),"border-hover":At("border-hover"),"border-hover-strong":At("border-hover-strong"),"border-selected":At("border-selected"),"border-selected-subtle":At("border-selected-subtle"),"border-selected-subtlest":At("border-selected-subtlest"),"border-selected-hover":At("border-selected-hover"),"border-focus":At("border-focus"),"border-focus-strong":At("border-focus-strong"),"border-disabled":At("border-disabled"),"border-selected-disabled":At("border-selected-disabled"),"border-success":At("border-success"),"border-warning":At("border-warning"),"border-error":At("border-error"),"border-error-focus":At("border-error-focus"),"border-error-focus-strong":At("border-error-focus-strong"),"border-error-strong":At("border-error-strong"),"border-info":At("border-info"),bg:At("bg"),"bg-strong":At("bg-strong"),"bg-stronger":At("bg-stronger"),"bg-strongest":At("bg-strongest"),"bg-hover":At("bg-hover"),"bg-hover-strong":At("bg-hover-strong"),"bg-hover-subtle":At("bg-hover-subtle"),"bg-hover-neutral":At("bg-hover-neutral"),"bg-hover-neutral-strong":At("bg-hover-neutral-strong"),"bg-selected":At("bg-selected"),"bg-selected-hover":At("bg-selected-hover"),"bg-selected-strong":At("bg-selected-strong"),"bg-selected-stronger":At("bg-selected-stronger"),"bg-selected-strongest":At("bg-selected-strongest"),"bg-selected-strongest-hover":At("bg-selected-strongest-hover"),"bg-disabled":At("bg-disabled"),"bg-selected-disabled":At("bg-selected-disabled"),"bg-selected-stronger-disabled":At("bg-selected-stronger-disabled"),"bg-success":At("bg-success"),"bg-success-hover":At("bg-success-hover"),"bg-success-strong":At("bg-success-strong"),"bg-success-strong-hover":At("bg-success-strong-hover"),"bg-warning":At("bg-warning"),"bg-warning-hover":At("bg-warning-hover"),"bg-warning-strong":At("bg-warning-strong"),"bg-warning-strong-hover":At("bg-warning-strong-hover"),"bg-info":At("bg-info"),"bg-info-hover":At("bg-info-hover"),"bg-info-strong":At("bg-info-strong"),"bg-info-strong-hover":At("bg-info-strong-hover"),"bg-error":At("bg-error"),"bg-error-hover":At("bg-error-hover"),"bg-error-strong":At("bg-error-strong"),"bg-error-strong-hover":At("bg-error-strong-hover"),"bg-inverse":At("bg-inverse"),"bg-inverse-subtle":At("bg-inverse-subtle"),"bg-inverse-subtler":At("bg-inverse-subtler"),"bg-inverse-subtlest":At("bg-inverse-subtlest"),"bg-inverse-hover":At("bg-inverse-hover"),"bg-primary":At("bg-primary"),"bg-primary-subtle":At("bg-primary-subtle"),"bg-primary-subtler":At("bg-primary-subtler"),"bg-primary-subtlest":At("bg-primary-subtlest"),"bg-available":At("bg-available"),"bg-primary-hover":At("bg-primary-hover"),"bg-primary-subtlest-hover":At("bg-primary-subtlest-hover"),"bg-primary-subtlest-selected":At("bg-primary-subtlest-selected"),"overlay-strong":At("overlay-strong"),"overlay-subtle":At("overlay-subtle"),hyperlink:At("hyperlink"),"hyperlink-hover":At("hyperlink-hover"),"hyperlink-visited":At("hyperlink-visited"),"hyperlink-inverse":At("hyperlink-inverse"),"focus-ring":At("focus-ring"),"focus-ring-inverse":At("focus-ring-inverse")},kt={collections:{default:{solid:e=>r=>{var t,n,i;const{thickness:o,radius:s,colour:a}=e||{},l=null!==(t="function"==typeof o?o(r):o)&&void 0!==t?t:wt["width-010"](r),d=null!==(n="function"==typeof s?s(r):s)&&void 0!==n?n:0,c=null!==(i="function"==typeof a?a(r):a)&&void 0!==i?i:Mt.border(r),u=wt.solid;return f`
            border: ${l} ${u} ${c};
            border-radius: ${d};
        `},"dashed-default":e=>r=>{var t,n,i;const{thickness:o,radius:s,colour:a}=e||{},l=null!==(t="function"==typeof o?o(r):o)&&void 0!==t?t:wt["width-010"](r),d=null!==(n="function"==typeof s?s(r):s)&&void 0!==n?n:0,c=null!==(i="function"==typeof a?a(r):a)&&void 0!==i?i:Mt.border(r),u=encodeURIComponent(`<svg width='100%' height='100%' xmlns='http://www.w3.org/2000/svg'><rect width='100%' height='100%' fill='none' rx='${d}' ry='${d}' stroke='${c}' stroke-width='${l}' stroke-dasharray='4, 8' stroke-dashoffset='0' stroke-linecap='square'/></svg>`);return f`
            background-image: url("data:image/svg+xml,${u}");
            border-radius: ${d};
        `}}},defaultValue:"default"},zt=e=>1===e.length&&"theme"in e[0],Ot=e=>(...r)=>t=>{const n=zt(r)?[]:r,i=zt(r)?r[0]:t,o=i.theme;return(0,yt(kt,null==o?void 0:o.borderScheme)[e])(...n)(i)},St={solid:Ot("solid"),"dashed-default":Ot("dashed-default")},_t={collections:{default:{"xxs-min":0,"xxs-max":320,"xs-min":321,"xs-max":375,"sm-min":376,"sm-max":420,"md-min":421,"md-max":767,"lg-min":768,"lg-max":1023,"xl-min":1024,"xl-max":1440,"xxl-min":1441,"xxs-column":8,"xs-column":8,"sm-column":8,"md-column":8,"lg-column":12,"xl-column":12,"xxl-column":12,"xxs-gutter":16,"xs-gutter":16,"sm-gutter":16,"md-gutter":16,"lg-gutter":32,"xl-gutter":32,"xxl-gutter":32,"xxs-margin":24,"xs-margin":24,"sm-margin":24,"md-margin":24,"lg-margin":48,"xl-margin":48,"xxl-margin":48}},defaultValue:"default"},Tt=e=>r=>{var t;const n=r.theme,i=yt(_t,null==n?void 0:n.breakpointScheme);let o;return o=(null===(t=null==n?void 0:n.overrides)||void 0===t?void 0:t.breakpoint)?ft(i,e,n.overrides.breakpoint):i[e],o},Lt={"xxs-min":Tt("xxs-min"),"xxs-max":Tt("xxs-max"),"xs-min":Tt("xs-min"),"xs-max":Tt("xs-max"),"sm-min":Tt("sm-min"),"sm-max":Tt("sm-max"),"md-min":Tt("md-min"),"md-max":Tt("md-max"),"lg-min":Tt("lg-min"),"lg-max":Tt("lg-max"),"xl-min":Tt("xl-min"),"xl-max":Tt("xl-max"),"xxl-min":Tt("xxl-min"),"xxs-column":Tt("xxs-column"),"xs-column":Tt("xs-column"),"sm-column":Tt("sm-column"),"md-column":Tt("md-column"),"lg-column":Tt("lg-column"),"xl-column":Tt("xl-column"),"xxl-column":Tt("xxl-column"),"xxs-gutter":Tt("xxs-gutter"),"xs-gutter":Tt("xs-gutter"),"sm-gutter":Tt("sm-gutter"),"md-gutter":Tt("md-gutter"),"lg-gutter":Tt("lg-gutter"),"xl-gutter":Tt("xl-gutter"),"xxl-gutter":Tt("xxl-gutter"),"xxs-margin":Tt("xxs-margin"),"xs-margin":Tt("xs-margin"),"sm-margin":Tt("sm-margin"),"md-margin":Tt("md-margin"),"lg-margin":Tt("lg-margin"),"xl-margin":Tt("xl-margin"),"xxl-margin":Tt("xxl-margin")},jt=e=>("max-width"===e?["xxs","xs","sm","md","lg","xl"]:["xxs","xs","sm","md","lg","xl","xxl"]).reduce(((r,t)=>(r[t]=((e,r)=>{const t=Lt["max-width"===e?`${r}-max`:`${r}-min`];return r=>{const n=t(r);return`@media screen and (${e}: ${n}px)`}})(e,t),r)),{}),Yt={MaxWidth:jt("max-width"),MinWidth:jt("min-width")},Pt={collections:{default:{"heading-size-xxl":"3rem","heading-size-xl":"2.5rem","heading-size-lg":"2rem","heading-size-md":"1.625rem","heading-size-sm":"1.375rem","heading-size-xs":"1.125rem","heading-lh-xxl":"3.5rem","heading-lh-xl":"3rem","heading-lh-lg":"2.5rem","heading-lh-md":"2.25rem","heading-lh-sm":"1.75rem","heading-lh-xs":"1.625rem","heading-ls-xxl":"-0.056rem","heading-ls-xl":"-0.032rem","heading-ls-lg":"-0.032rem","heading-ls-md":"0rem","heading-ls-sm":"0rem","heading-ls-xs":"0rem","weight-light":"300","weight-regular":"400","weight-semibold":"600","weight-bold":"700","font-family":"Open Sans","body-size-baseline":"1.125rem","body-size-md":"1rem","body-size-sm":"0.875rem","body-size-xs":"0.75rem","body-lh-baseline":"1.625rem","body-lh-md":"1.5rem","body-lh-sm":"1.625rem","body-lh-xs":"1.25rem","body-ls-baseline":"0rem","body-ls-md":"0.014rem","body-ls-sm":"0.012rem","body-ls-xs":"0.012rem","form-label-size":"1rem","form-description-size":"0.875rem","form-label-lh":"1.5rem","form-description-lh":"1.6rem","form-label-ls":"0.014rem","form-description-ls":"0.012rem"},bookingsg:{"heading-size-xxl":"3rem","heading-size-xl":"2.5rem","heading-size-lg":"2rem","heading-size-md":"1.625rem","heading-size-sm":"1.375rem","heading-size-xs":"1.125rem","heading-lh-xxl":"3.5rem","heading-lh-xl":"3rem","heading-lh-lg":"2.5rem","heading-lh-md":"2.25rem","heading-lh-sm":"1.75rem","heading-lh-xs":"1.75rem","heading-ls-xxl":"-0.056rem","heading-ls-xl":"-0.032rem","heading-ls-lg":"-0.032rem","heading-ls-md":"0rem","heading-ls-sm":"0rem","heading-ls-xs":"0rem","weight-light":"300","weight-regular":"400","weight-semibold":"600","weight-bold":"700","font-family":"Plus Jakarta Sans","body-size-baseline":"1.125rem","body-size-md":"1rem","body-size-sm":"0.875rem","body-size-xs":"0.75rem","body-lh-baseline":"1.75rem","body-lh-md":"1.5rem","body-lh-sm":"1.6rem","body-lh-xs":"1.2rem","body-ls-baseline":"0rem","body-ls-md":"0.014rem","body-ls-sm":"0.012rem","body-ls-xs":"0.012rem","form-label-size":"1rem","form-description-size":"0.875rem","form-label-lh":"1.5rem","form-description-lh":"1.6rem","form-label-ls":"0.014rem","form-description-ls":"0.012rem"},pa:{"heading-size-xxl":"2.5rem","heading-size-xl":"2rem","heading-size-lg":"1.75rem","heading-size-md":"1.5rem","heading-size-sm":"1.25rem","heading-size-xs":"1rem","heading-lh-xxl":"3rem","heading-lh-xl":"2.5rem","heading-lh-lg":"2.25rem","heading-lh-md":"2rem","heading-lh-sm":"2rem","heading-lh-xs":"1.75rem","heading-ls-xxl":"-0.032rem","heading-ls-xl":"-0.032rem","heading-ls-lg":"0rem","heading-ls-md":"0rem","heading-ls-sm":"0rem","heading-ls-xs":"0rem","weight-light":"300","weight-regular":"400","weight-semibold":"600","weight-bold":"700","font-family":"Lato","body-size-baseline":"1rem","body-size-md":"0.875rem","body-size-sm":"0.75rem","body-size-xs":"0.625rem","body-lh-baseline":"1.75rem","body-lh-md":"1.5rem","body-lh-sm":"1.25rem","body-lh-xs":"1.25rem","body-ls-baseline":"0rem","body-ls-md":"0.014rem","body-ls-sm":"0.012rem","body-ls-xs":"0.012rem","form-label-size":"1rem","form-description-size":"0.875rem","form-label-lh":"1.5rem","form-description-lh":"1.6rem","form-label-ls":"0.014rem","form-description-ls":"0.012rem"}},defaultValue:"default"},Rt=e=>r=>{var t;const n=r.theme,i=yt(Pt,null==n?void 0:n.fontScheme);return(null===(t=null==n?void 0:n.overrides)||void 0===t?void 0:t.fontSpec)?ft(i,e,n.overrides.fontSpec):i[e]},It={"heading-size-xxl":Rt("heading-size-xxl"),"heading-size-xl":Rt("heading-size-xl"),"heading-size-lg":Rt("heading-size-lg"),"heading-size-md":Rt("heading-size-md"),"heading-size-sm":Rt("heading-size-sm"),"heading-size-xs":Rt("heading-size-xs"),"heading-lh-xxl":Rt("heading-lh-xxl"),"heading-lh-xl":Rt("heading-lh-xl"),"heading-lh-lg":Rt("heading-lh-lg"),"heading-lh-md":Rt("heading-lh-md"),"heading-lh-sm":Rt("heading-lh-sm"),"heading-lh-xs":Rt("heading-lh-xs"),"heading-ls-xxl":Rt("heading-ls-xxl"),"heading-ls-xl":Rt("heading-ls-xl"),"heading-ls-lg":Rt("heading-ls-lg"),"heading-ls-md":Rt("heading-ls-md"),"heading-ls-sm":Rt("heading-ls-sm"),"heading-ls-xs":Rt("heading-ls-xs"),"weight-light":Rt("weight-light"),"weight-regular":Rt("weight-regular"),"weight-semibold":Rt("weight-semibold"),"weight-bold":Rt("weight-bold"),"font-family":Rt("font-family"),"body-size-baseline":Rt("body-size-baseline"),"body-size-md":Rt("body-size-md"),"body-size-sm":Rt("body-size-sm"),"body-size-xs":Rt("body-size-xs"),"body-lh-baseline":Rt("body-lh-baseline"),"body-lh-md":Rt("body-lh-md"),"body-lh-sm":Rt("body-lh-sm"),"body-lh-xs":Rt("body-lh-xs"),"body-ls-baseline":Rt("body-ls-baseline"),"body-ls-md":Rt("body-ls-md"),"body-ls-sm":Rt("body-ls-sm"),"body-ls-xs":Rt("body-ls-xs"),"form-label-size":Rt("form-label-size"),"form-description-size":Rt("form-description-size"),"form-label-lh":Rt("form-label-lh"),"form-description-lh":Rt("form-description-lh"),"form-label-ls":Rt("form-label-ls"),"form-description-ls":Rt("form-description-ls")},Ht=(e,r,t,n,i)=>{const{disableLigatures:o}=i||{};return f`
        font-family: ${Rt("font-family")};
        font-size: ${Rt(e)};
        font-weight: ${Rt(r)};
        line-height: ${Rt(t)};
        letter-spacing: ${Rt(n)};

        font-variant: ${o?"no-common-ligatures":"normal"};
    `},Wt=(e={})=>({"heading-xxl-light":Ht("heading-size-xxl","weight-light","heading-lh-xxl","heading-ls-xxl",e),"heading-xxl-regular":Ht("heading-size-xxl","weight-regular","heading-lh-xxl","heading-ls-xxl",e),"heading-xxl-semibold":Ht("heading-size-xxl","weight-semibold","heading-lh-xxl","heading-ls-xxl",e),"heading-xxl-bold":Ht("heading-size-xxl","weight-bold","heading-lh-xxl","heading-ls-xxl",e),"heading-xl-light":Ht("heading-size-xl","weight-light","heading-lh-xl","heading-ls-xl",e),"heading-xl-regular":Ht("heading-size-xl","weight-regular","heading-lh-xl","heading-ls-xl",e),"heading-xl-semibold":Ht("heading-size-xl","weight-semibold","heading-lh-xl","heading-ls-xl",e),"heading-xl-bold":Ht("heading-size-xl","weight-bold","heading-lh-xl","heading-ls-xl",e),"heading-lg-light":Ht("heading-size-lg","weight-light","heading-lh-lg","heading-ls-lg",e),"heading-lg-regular":Ht("heading-size-lg","weight-regular","heading-lh-lg","heading-ls-lg",e),"heading-lg-semibold":Ht("heading-size-lg","weight-semibold","heading-lh-lg","heading-ls-lg",e),"heading-lg-bold":Ht("heading-size-lg","weight-bold","heading-lh-lg","heading-ls-lg",e),"heading-md-light":Ht("heading-size-md","weight-light","heading-lh-md","heading-ls-md",e),"heading-md-regular":Ht("heading-size-md","weight-regular","heading-lh-md","heading-ls-md",e),"heading-md-semibold":Ht("heading-size-md","weight-semibold","heading-lh-md","heading-ls-md",e),"heading-md-bold":Ht("heading-size-md","weight-bold","heading-lh-md","heading-ls-md",e),"heading-sm-light":Ht("heading-size-sm","weight-light","heading-lh-sm","heading-ls-sm",e),"heading-sm-regular":Ht("heading-size-sm","weight-regular","heading-lh-sm","heading-ls-sm",e),"heading-sm-semibold":Ht("heading-size-sm","weight-semibold","heading-lh-sm","heading-ls-sm",e),"heading-sm-bold":Ht("heading-size-sm","weight-bold","heading-lh-sm","heading-ls-sm",e),"heading-xs-light":Ht("heading-size-xs","weight-light","heading-lh-xs","heading-ls-xs",e),"heading-xs-regular":Ht("heading-size-xs","weight-regular","heading-lh-xs","heading-ls-xs",e),"heading-xs-semibold":Ht("heading-size-xs","weight-semibold","heading-lh-xs","heading-ls-xs",e),"heading-xs-bold":Ht("heading-size-xs","weight-bold","heading-lh-xs","heading-ls-xs",e),"body-baseline-light":Ht("body-size-baseline","weight-light","body-lh-baseline","body-ls-baseline",e),"body-baseline-regular":Ht("body-size-baseline","weight-regular","body-lh-baseline","body-ls-baseline",e),"body-baseline-semibold":Ht("body-size-baseline","weight-semibold","body-lh-baseline","body-ls-baseline",e),"body-baseline-bold":Ht("body-size-baseline","weight-bold","body-lh-baseline","body-ls-baseline",e),"body-md-light":Ht("body-size-md","weight-light","body-lh-md","body-ls-md",e),"body-md-regular":Ht("body-size-md","weight-regular","body-lh-md","body-ls-md",e),"body-md-semibold":Ht("body-size-md","weight-semibold","body-lh-md","body-ls-md",e),"body-md-bold":Ht("body-size-md","weight-bold","body-lh-md","body-ls-md",e),"body-sm-light":Ht("body-size-sm","weight-light","body-lh-sm","body-ls-sm",e),"body-sm-regular":Ht("body-size-sm","weight-regular","body-lh-sm","body-ls-sm",e),"body-sm-semibold":Ht("body-size-sm","weight-semibold","body-lh-sm","body-ls-sm",e),"body-sm-bold":Ht("body-size-sm","weight-bold","body-lh-sm","body-ls-sm",e),"body-xs-light":Ht("body-size-xs","weight-light","body-lh-xs","body-ls-xs",e),"body-xs-regular":Ht("body-size-xs","weight-regular","body-lh-xs","body-ls-xs",e),"body-xs-semibold":Ht("body-size-xs","weight-semibold","body-lh-xs","body-ls-xs",e),"body-xs-bold":Ht("body-size-xs","weight-bold","body-lh-xs","body-ls-xs",e),"form-label":Ht("form-label-size","weight-semibold","form-label-lh","form-label-ls",e),"form-description":Ht("form-description-size","weight-regular","form-description-lh","form-description-ls",e)}),Vt=Wt({disableLigatures:!0}),Nt={collections:{default:Wt(),bookingsg:Vt,pa:Wt({disableLigatures:!0})},defaultValue:"default"},Kt=e=>r=>{var t;const n=r.theme,i=yt(Nt,null==n?void 0:n.fontScheme),o=(null===(t=null==n?void 0:n.overrides)||void 0===t?void 0:t.font)?ft(i,e,n.overrides.font):i[e];return"function"==typeof o?o(r):o},Ut={"heading-xxl-light":Kt("heading-xxl-light"),"heading-xxl-regular":Kt("heading-xxl-regular"),"heading-xxl-semibold":Kt("heading-xxl-semibold"),"heading-xxl-bold":Kt("heading-xxl-bold"),"heading-xl-light":Kt("heading-xl-light"),"heading-xl-regular":Kt("heading-xl-regular"),"heading-xl-semibold":Kt("heading-xl-semibold"),"heading-xl-bold":Kt("heading-xl-bold"),"heading-lg-light":Kt("heading-lg-light"),"heading-lg-regular":Kt("heading-lg-regular"),"heading-lg-semibold":Kt("heading-lg-semibold"),"heading-lg-bold":Kt("heading-lg-bold"),"heading-md-light":Kt("heading-md-light"),"heading-md-regular":Kt("heading-md-regular"),"heading-md-semibold":Kt("heading-md-semibold"),"heading-md-bold":Kt("heading-md-bold"),"heading-sm-light":Kt("heading-sm-light"),"heading-sm-regular":Kt("heading-sm-regular"),"heading-sm-semibold":Kt("heading-sm-semibold"),"heading-sm-bold":Kt("heading-sm-bold"),"heading-xs-light":Kt("heading-xs-light"),"heading-xs-regular":Kt("heading-xs-regular"),"heading-xs-semibold":Kt("heading-xs-semibold"),"heading-xs-bold":Kt("heading-xs-bold"),"body-baseline-light":Kt("body-baseline-light"),"body-baseline-regular":Kt("body-baseline-regular"),"body-baseline-semibold":Kt("body-baseline-semibold"),"body-baseline-bold":Kt("body-baseline-bold"),"body-md-light":Kt("body-md-light"),"body-md-regular":Kt("body-md-regular"),"body-md-semibold":Kt("body-md-semibold"),"body-md-bold":Kt("body-md-bold"),"body-sm-light":Kt("body-sm-light"),"body-sm-regular":Kt("body-sm-regular"),"body-sm-semibold":Kt("body-sm-semibold"),"body-sm-bold":Kt("body-sm-bold"),"body-xs-light":Kt("body-xs-light"),"body-xs-regular":Kt("body-xs-regular"),"body-xs-semibold":Kt("body-xs-semibold"),"body-xs-bold":Kt("body-xs-bold"),"form-label":Kt("form-label"),"form-description":Kt("form-description")},Zt={collections:{default:{"duration-150":"150ms","duration-250":"250ms","duration-350":"350ms","duration-500":"500ms","duration-800":"800ms","duration-1000":"1000ms","ease-default":"cubic-bezier(0.45, 0.05, 0.55, 0.95)","ease-standard":"cubic-bezier(0.86, 0, 0.07, 1)","ease-entrance":"cubic-bezier(0.18, 0.13, 0, 1)","ease-exit":"cubic-bezier(1, 0, 0.8, 0.85)"}},defaultValue:"default"},Xt=e=>r=>{var t;const n=r.theme,i=yt(Zt,null==n?void 0:n.motionScheme);return(null===(t=null==n?void 0:n.overrides)||void 0===t?void 0:t.motion)?ft(i,e,n.overrides.motion):i[e]},qt={"duration-150":Xt("duration-150"),"duration-250":Xt("duration-250"),"duration-350":Xt("duration-350"),"duration-500":Xt("duration-500"),"duration-800":Xt("duration-800"),"duration-1000":Xt("duration-1000"),"ease-default":Xt("ease-default"),"ease-standard":Xt("ease-standard"),"ease-entrance":Xt("ease-entrance"),"ease-exit":Xt("ease-exit")},Jt={collections:{default:{none:0,xs:2,sm:4,md:8,lg:12,full:9999}},defaultValue:"default"},Gt=e=>r=>{var t;const n=r.theme,i=yt(Jt,null==n?void 0:n.radiusScheme);return(null===(t=null==n?void 0:n.overrides)||void 0===t?void 0:t.radius)?`${ft(i,e,n.overrides.radius)}px`:`${i[e]}px`},Qt={none:Gt("none"),xs:Gt("xs"),sm:Gt("sm"),md:Gt("md"),lg:Gt("lg"),full:Gt("full")},en={collections:{default:{"spacing-0":0,"spacing-4":4,"spacing-8":8,"spacing-12":12,"spacing-16":16,"spacing-20":20,"spacing-24":24,"spacing-32":32,"spacing-40":40,"spacing-48":48,"spacing-64":64,"spacing-72":72,"layout-xs":8,"layout-sm":16,"layout-md":24,"layout-lg":32,"layout-xl":48,"layout-xxl":64,"layout-xxxl":128}},defaultValue:"default"},rn=e=>r=>{var t;const n=r.theme,i=yt(en,null==n?void 0:n.spacingScheme);return(null===(t=null==n?void 0:n.overrides)||void 0===t?void 0:t.spacing)?`${ft(i,e,n.overrides.spacing)}px`:`${i[e]}px`},tn={"spacing-0":rn("spacing-0"),"spacing-4":rn("spacing-4"),"spacing-8":rn("spacing-8"),"spacing-12":rn("spacing-12"),"spacing-16":rn("spacing-16"),"spacing-20":rn("spacing-20"),"spacing-24":rn("spacing-24"),"spacing-32":rn("spacing-32"),"spacing-40":rn("spacing-40"),"spacing-48":rn("spacing-48"),"spacing-64":rn("spacing-64"),"spacing-72":rn("spacing-72"),"layout-xs":rn("layout-xs"),"layout-sm":rn("layout-sm"),"layout-md":rn("layout-md"),"layout-lg":rn("layout-lg"),"layout-xl":rn("layout-xl"),"layout-xxl":rn("layout-xxl"),"layout-xxxl":rn("layout-xxxl")},nn=Object.assign(Object.assign({},Mt),{Primitive:Dt}),on=Object.assign(Object.assign({},Ut),{Spec:It}),sn=qt,an=Object.assign(Object.assign({},wt),{Util:St}),ln=tn,dn=Qt,cn=Lt,un=Yt,hn=e=>f`
    display: -webkit-box;
    -webkit-line-clamp: ${e};
    -webkit-box-orient: vertical;
    overflow: hidden;
`,gn=(e,r,t=!1)=>f`
        ${on[`${e}-${r}`]}
        ${t?"margin-bottom: 1.05em;":"margin-bottom: 0;"}
    `,bn=e=>{if(e)return f`
            ${hn(e)}
        `},mn=(e,r)=>f`
    ${gn(e,r.weight||"regular",r.paragraph)}
    ${((e=!1,r=!1,t)=>r?f`
            display: block;
            ${bn(t)}
        `:e?f`
            display: inline;
        `:f`
            display: block;
            ${bn(t)}
        `)(r.inline,r.paragraph,r.maxLines)}
    color: ${nn.text};
`;var pn;!function(t){const n=(e,r,t)=>{const n=p(e).attrs((({inline:e})=>({as:e?"span":void 0})))`
            ${e=>mn(r,e)}
        `;return n.displayName=`Typography.${t}`,n};t.HeadingXXL=n("h1","heading-xxl","HeadingXXL"),t.HeadingXL=n("h2","heading-xl","HeadingXL"),t.HeadingLG=n("h3","heading-lg","HeadingLG"),t.HeadingMD=n("h4","heading-md","HeadingMD"),t.HeadingSM=n("h5","heading-sm","HeadingSM"),t.HeadingXS=n("h6","heading-xs","HeadingXS");const i=(e,r)=>{const t=p.p.attrs((({inline:e})=>({as:e?"span":void 0})))`
            ${r=>mn(e,r)}
        `;return t.displayName=`Typography.${r}`,t};t.BodyBL=i("body-baseline","BodyBL"),t.BodyMD=i("body-md","BodyMD"),t.BodySM=i("body-sm","BodySM"),t.BodyXS=i("body-xs","BodyXS");const o=(t,n)=>{const i=p.a`
            ${e=>f`
                ${gn(t,e.weight||"regular")}
                color: ${nn.hyperlink};
                text-decoration: none;

                :hover,
                :active,
                :focus {
                    color: ${nn["text-hover"]};
                }
            `}
        `,o=t=>{var{external:n=!1,children:o}=t,s=V(t,["external","children"]);return e(i,Object.assign({},s,{children:[o,n&&r(fn,{})]}))};return o.displayName=`Typography.${n}`,o};t.LinkBL=o("body-baseline","LinkBL"),t.LinkMD=o("body-md","LinkMD"),t.LinkSM=o("body-sm","LinkSM"),t.LinkXS=o("body-xs","LinkXS")}(pn||(pn={}));const fn=p(m)`
    height: 1lh;
    width: 1em;
    margin-left: 0.4em;
    vertical-align: middle;
`;function yn(e,r){return yn=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,r){return e.__proto__=r,e},yn(e,r)}function vn(e){return e&&e.stopPropagation&&e.stopPropagation(),e&&e.preventDefault&&e.preventDefault(),!1}function xn(e){return null==e?[]:Array.isArray(e)?e.slice():[e]}function wn(e){return null!==e&&1===e.length?e[0]:e.slice()}function Fn(e){Object.keys(e).forEach((r=>{"undefined"!=typeof document&&document.addEventListener(r,e[r],!1)}))}function $n(e,r){return En(function(e,r){let t=e;return t<=r.min&&(t=r.min),t>=r.max&&(t=r.max),t}(e,r),r)}function En(e,r){const t=(e-r.min)%r.step;let n=e-t;return 2*Math.abs(t)>=r.step&&(n+=t>0?r.step:-r.step),parseFloat(n.toFixed(5))}let Dn=function(e){function r(r){var t;(t=e.call(this,r)||this).onKeyUp=()=>{t.onEnd()},t.onMouseUp=()=>{t.onEnd(t.getMouseEventMap())},t.onTouchEnd=e=>{e.preventDefault(),t.onEnd(t.getTouchEventMap())},t.onBlur=()=>{t.setState({index:-1},t.onEnd(t.getKeyDownEventMap()))},t.onMouseMove=e=>{t.setState({pending:!0});const r=t.getMousePosition(e),n=t.getDiffPosition(r[0]),i=t.getValueFromPosition(n);t.move(i)},t.onTouchMove=e=>{if(e.touches.length>1)return;t.setState({pending:!0});const r=t.getTouchPosition(e);if(void 0===t.isScrolling){const e=r[0]-t.startPosition[0],n=r[1]-t.startPosition[1];t.isScrolling=Math.abs(n)>Math.abs(e)}if(t.isScrolling)return void t.setState({index:-1});const n=t.getDiffPosition(r[0]),i=t.getValueFromPosition(n);t.move(i)},t.onKeyDown=e=>{if(!(e.ctrlKey||e.shiftKey||e.altKey||e.metaKey))switch(t.setState({pending:!0}),e.key){case"ArrowLeft":case"ArrowDown":case"Left":case"Down":e.preventDefault(),t.moveDownByStep();break;case"ArrowRight":case"ArrowUp":case"Right":case"Up":e.preventDefault(),t.moveUpByStep();break;case"Home":e.preventDefault(),t.move(t.props.min);break;case"End":e.preventDefault(),t.move(t.props.max);break;case"PageDown":e.preventDefault(),t.moveDownByStep(t.props.pageFn(t.props.step));break;case"PageUp":e.preventDefault(),t.moveUpByStep(t.props.pageFn(t.props.step))}},t.onSliderMouseDown=e=>{if(!t.props.disabled&&2!==e.button){if(t.setState({pending:!0}),!t.props.snapDragDisabled){const r=t.getMousePosition(e);t.forceValueFromPosition(r[0],(e=>{t.start(e,r[0]),Fn(t.getMouseEventMap())}))}vn(e)}},t.onSliderClick=e=>{if(!t.props.disabled&&t.props.onSliderClick&&!t.hasMoved){const r=t.getMousePosition(e),n=$n(t.calcValue(t.calcOffsetFromPosition(r[0])),t.props);t.props.onSliderClick(n)}},t.createOnKeyDown=e=>r=>{t.props.disabled||(t.start(e),Fn(t.getKeyDownEventMap()),vn(r))},t.createOnMouseDown=e=>r=>{if(t.props.disabled||2===r.button)return;t.setState({pending:!0});const n=t.getMousePosition(r);t.start(e,n[0]),Fn(t.getMouseEventMap()),vn(r)},t.createOnTouchStart=e=>r=>{if(t.props.disabled||r.touches.length>1)return;t.setState({pending:!0});const n=t.getTouchPosition(r);t.startPosition=n,t.isScrolling=void 0,t.start(e,n[0]),Fn(t.getTouchEventMap()),function(e){e.stopPropagation&&e.stopPropagation()}(r)},t.handleResize=()=>{const e=window.setTimeout((()=>{t.pendingResizeTimeouts.shift(),t.resize()}),0);t.pendingResizeTimeouts.push(e)},t.renderThumb=(e,r)=>{const n=t.props.thumbClassName+" "+t.props.thumbClassName+"-"+r+" "+(t.state.index===r?t.props.thumbActiveClassName:""),i={ref:e=>{t["thumb"+r]=e},key:t.props.thumbClassName+"-"+r,className:n,style:e,onMouseDown:t.createOnMouseDown(r),onTouchStart:t.createOnTouchStart(r),onFocus:t.createOnKeyDown(r),tabIndex:0,role:"slider","aria-orientation":t.props.orientation,"aria-valuenow":t.state.value[r],"aria-valuemin":t.props.min,"aria-valuemax":t.props.max,"aria-label":Array.isArray(t.props.ariaLabel)?t.props.ariaLabel[r]:t.props.ariaLabel,"aria-labelledby":Array.isArray(t.props.ariaLabelledby)?t.props.ariaLabelledby[r]:t.props.ariaLabelledby,"aria-disabled":t.props.disabled},o={index:r,value:wn(t.state.value),valueNow:t.state.value[r]};return t.props.ariaValuetext&&(i["aria-valuetext"]="string"==typeof t.props.ariaValuetext?t.props.ariaValuetext:t.props.ariaValuetext(o)),t.props.renderThumb(i,o)},t.renderTrack=(e,r,n)=>{const i={key:t.props.trackClassName+"-"+e,className:t.props.trackClassName+" "+t.props.trackClassName+"-"+e,style:t.buildTrackStyle(r,t.state.upperBound-n)},o={index:e,value:wn(t.state.value)};return t.props.renderTrack(i,o)};let n=xn(r.value);n.length||(n=xn(r.defaultValue)),t.pendingResizeTimeouts=[];const o=[];for(let e=0;e<n.length;e+=1)n[e]=$n(n[e],r),o.push(e);return t.resizeObserver=null,t.resizeElementRef=i.createRef(),t.state={index:-1,upperBound:0,sliderLength:0,value:n,zIndices:o},t}!function(e,r){e.prototype=Object.create(r.prototype),e.prototype.constructor=e,yn(e,r)}(r,e);var t=r.prototype;return t.componentDidMount=function(){"undefined"!=typeof window&&(this.resizeObserver=new ResizeObserver(this.handleResize),this.resizeObserver.observe(this.resizeElementRef.current),this.resize())},r.getDerivedStateFromProps=function(e,r){const t=xn(e.value);return t.length?r.pending?null:{value:t.map((r=>$n(r,e)))}:null},t.componentDidUpdate=function(){0===this.state.upperBound&&this.resize()},t.componentWillUnmount=function(){this.clearPendingResizeTimeouts(),this.resizeObserver&&this.resizeObserver.disconnect()},t.onEnd=function(e){e&&function(e){Object.keys(e).forEach((r=>{"undefined"!=typeof document&&document.removeEventListener(r,e[r],!1)}))}(e),this.hasMoved&&this.fireChangeEvent("onAfterChange"),this.setState({pending:!1}),this.hasMoved=!1},t.getValue=function(){return wn(this.state.value)},t.getClosestIndex=function(e){let r=Number.MAX_VALUE,t=-1;const{value:n}=this.state,i=n.length;for(let o=0;o<i;o+=1){const i=this.calcOffset(n[o]),s=Math.abs(e-i);s<r&&(r=s,t=o)}return t},t.getMousePosition=function(e){return[e["page"+this.axisKey()],e["page"+this.orthogonalAxisKey()]]},t.getTouchPosition=function(e){const r=e.touches[0];return[r["page"+this.axisKey()],r["page"+this.orthogonalAxisKey()]]},t.getKeyDownEventMap=function(){return{keydown:this.onKeyDown,keyup:this.onKeyUp,focusout:this.onBlur}},t.getMouseEventMap=function(){return{mousemove:this.onMouseMove,mouseup:this.onMouseUp}},t.getTouchEventMap=function(){return{touchmove:this.onTouchMove,touchend:this.onTouchEnd}},t.getValueFromPosition=function(e){const r=e/(this.state.sliderLength-this.state.thumbSize)*(this.props.max-this.props.min);return $n(this.state.startValue+r,this.props)},t.getDiffPosition=function(e){let r=e-this.state.startPosition;return this.props.invert&&(r*=-1),r},t.resize=function(){const{slider:e,thumb0:r}=this;if(!e||!r)return;const t=this.sizeKey(),n=e.getBoundingClientRect(),i=e[t],o=n[this.posMaxKey()],s=n[this.posMinKey()],a=r.getBoundingClientRect()[t.replace("client","").toLowerCase()],l=i-a,d=Math.abs(o-s);this.state.upperBound===l&&this.state.sliderLength===d&&this.state.thumbSize===a||this.setState({upperBound:l,sliderLength:d,thumbSize:a})},t.calcOffset=function(e){const r=this.props.max-this.props.min;return 0===r?0:(e-this.props.min)/r*this.state.upperBound},t.calcValue=function(e){return e/this.state.upperBound*(this.props.max-this.props.min)+this.props.min},t.calcOffsetFromPosition=function(e){const{slider:r}=this,t=r.getBoundingClientRect(),n=t[this.posMaxKey()],i=t[this.posMinKey()];let o=e-(window["page"+this.axisKey()+"Offset"]+(this.props.invert?n:i));return this.props.invert&&(o=this.state.sliderLength-o),o-=this.state.thumbSize/2,o},t.forceValueFromPosition=function(e,r){const t=this.calcOffsetFromPosition(e),n=this.getClosestIndex(t),i=$n(this.calcValue(t),this.props),o=this.state.value.slice();o[n]=i;for(let e=0;e<o.length-1;e+=1)if(o[e+1]-o[e]<this.props.minDistance)return;this.fireChangeEvent("onBeforeChange"),this.hasMoved=!0,this.setState({value:o},(()=>{r(n),this.fireChangeEvent("onChange")}))},t.clearPendingResizeTimeouts=function(){do{const e=this.pendingResizeTimeouts.shift();clearTimeout(e)}while(this.pendingResizeTimeouts.length)},t.start=function(e,r){const t=this["thumb"+e];t&&t.focus();const{zIndices:n}=this.state;n.splice(n.indexOf(e),1),n.push(e),this.setState((t=>({startValue:t.value[e],startPosition:void 0!==r?r:t.startPosition,index:e,zIndices:n})))},t.moveUpByStep=function(e){void 0===e&&(e=this.props.step);const r=this.state.value[this.state.index],t=$n(this.props.invert&&"horizontal"===this.props.orientation?r-e:r+e,this.props);this.move(Math.min(t,this.props.max))},t.moveDownByStep=function(e){void 0===e&&(e=this.props.step);const r=this.state.value[this.state.index],t=$n(this.props.invert&&"horizontal"===this.props.orientation?r+e:r-e,this.props);this.move(Math.max(t,this.props.min))},t.move=function(e){const r=this.state.value.slice(),{index:t}=this.state,{length:n}=r,i=r[t];if(e===i)return;this.hasMoved||this.fireChangeEvent("onBeforeChange"),this.hasMoved=!0;const{pearling:o,max:s,min:a,minDistance:l}=this.props;if(!o){if(t>0){const n=r[t-1];e<n+l&&(e=n+l)}if(t<n-1){const n=r[t+1];e>n-l&&(e=n-l)}}r[t]=e,o&&n>1&&(e>i?(this.pushSucceeding(r,l,t),function(e,r,t,n){for(let i=0;i<e;i+=1){const o=n-i*t;r[e-1-i]>o&&(r[e-1-i]=o)}}(n,r,l,s)):e<i&&(this.pushPreceding(r,l,t),function(e,r,t,n){for(let i=0;i<e;i+=1){const e=n+i*t;r[i]<e&&(r[i]=e)}}(n,r,l,a))),this.setState({value:r},this.fireChangeEvent.bind(this,"onChange"))},t.pushSucceeding=function(e,r,t){let n,i;for(n=t,i=e[n]+r;null!==e[n+1]&&i>e[n+1];n+=1,i=e[n]+r)e[n+1]=En(i,this.props)},t.pushPreceding=function(e,r,t){for(let n=t,i=e[n]-r;null!==e[n-1]&&i<e[n-1];n-=1,i=e[n]-r)e[n-1]=En(i,this.props)},t.axisKey=function(){return"vertical"===this.props.orientation?"Y":"X"},t.orthogonalAxisKey=function(){return"vertical"===this.props.orientation?"X":"Y"},t.posMinKey=function(){return"vertical"===this.props.orientation?this.props.invert?"bottom":"top":this.props.invert?"right":"left"},t.posMaxKey=function(){return"vertical"===this.props.orientation?this.props.invert?"top":"bottom":this.props.invert?"left":"right"},t.sizeKey=function(){return"vertical"===this.props.orientation?"clientHeight":"clientWidth"},t.fireChangeEvent=function(e){this.props[e]&&this.props[e](wn(this.state.value),this.state.index)},t.buildThumbStyle=function(e,r){const t={position:"absolute",touchAction:"none",willChange:this.state.index>=0?this.posMinKey():void 0,zIndex:this.state.zIndices.indexOf(r)+1};return t[this.posMinKey()]=e+"px",t},t.buildTrackStyle=function(e,r){const t={position:"absolute",willChange:this.state.index>=0?this.posMinKey()+","+this.posMaxKey():void 0};return t[this.posMinKey()]=e,t[this.posMaxKey()]=r,t},t.buildMarkStyle=function(e){var r;return(r={position:"absolute"})[this.posMinKey()]=e,r},t.renderThumbs=function(e){const{length:r}=e,t=[];for(let n=0;n<r;n+=1)t[n]=this.buildThumbStyle(e[n],n);const n=[];for(let e=0;e<r;e+=1)n[e]=this.renderThumb(t[e],e);return n},t.renderTracks=function(e){const r=[],t=e.length-1;r.push(this.renderTrack(0,0,e[0]));for(let n=0;n<t;n+=1)r.push(this.renderTrack(n+1,e[n],e[n+1]));return r.push(this.renderTrack(t+1,e[t],this.state.upperBound)),r},t.renderMarks=function(){let{marks:e}=this.props;const r=this.props.max-this.props.min+1;return"boolean"==typeof e?e=Array.from({length:r}).map(((e,r)=>r)):"number"==typeof e&&(e=Array.from({length:r}).map(((e,r)=>r)).filter((r=>r%e==0))),e.map(parseFloat).sort(((e,r)=>e-r)).map((e=>{const r=this.calcOffset(e),t={key:e,className:this.props.markClassName,style:this.buildMarkStyle(r)};return this.props.renderMark(t)}))},t.render=function(){const e=[],{value:r}=this.state,t=r.length;for(let n=0;n<t;n+=1)e[n]=this.calcOffset(r[n],n);const n=this.props.withTracks?this.renderTracks(e):null,o=this.renderThumbs(e),s=this.props.marks?this.renderMarks():null;return i.createElement("div",{ref:e=>{this.slider=e,this.resizeElementRef.current=e},style:{position:"relative"},className:this.props.className+(this.props.disabled?" disabled":""),onMouseDown:this.onSliderMouseDown,onClick:this.onSliderClick},n,o,s)},r}(i.Component);Dn.displayName="ReactSlider",Dn.defaultProps={min:0,max:100,step:1,pageFn:e=>10*e,minDistance:0,defaultValue:0,orientation:"horizontal",className:"slider",thumbClassName:"thumb",thumbActiveClassName:"active",trackClassName:"track",markClassName:"mark",withTracks:!0,pearling:!1,disabled:!1,snapDragDisabled:!1,invert:!1,marks:[],renderThumb:e=>i.createElement("div",e),renderTrack:e=>i.createElement("div",e),renderMark:e=>i.createElement("span",e)};var Cn=Dn;const Bn=p.div`
    isolation: isolate;
`,An=p.div`
    margin-top: ${ln["spacing-8"]};
    display: flex;
    justify-content: space-between;
    gap: ${ln["spacing-8"]};
`,Mn=p.div`
    margin-bottom: ${ln["spacing-8"]};
`,kn=p(pn.BodyBL)`
    overflow-wrap: anywhere;
`,zn=p(Cn)`
    height: 0.875rem;
`,On=p.div`
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

        background-color: ${nn.bg};
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.16);
        border: ${an["width-010"]} ${an.solid}
            ${e=>e.$disabled?nn["border-selected-disabled"]:nn["border-strong"]};
        border-radius: 50%;
    }
`,Sn=p.div`
    height: 0.875rem;
    width: 0.875rem;
    position: relative;
    outline: none;

    :focus ${On}:after {
        outline-offset: -1px;
        outline: ${an["width-040"]} ${an.solid}
            ${nn["border-selected"]};
    }
`,_n=p.div`
    height: 0.25rem;
    top: 50%;
    transform: translateY(-50%);
    border-radius: ${dn.full};

    background: ${e=>e.$color&&"function"==typeof e.$color?e.$color(e):e.$color||nn["border-strong"](e)};
`,Tn=p.div`
    display: flex;
    margin-bottom: ${ln["spacing-16"]};
    align-items: baseline;
`,Ln=p.div`
    margin: 0 0.5rem;
`,jn=p.div`
    width: 100%;
    height: 4rem;
    display: flex;
    align-items: flex-end;
    padding: 0 0.4375rem;
`,Yn=p.div`
    flex: 1;
    border-radius: ${dn.sm} ${dn.sm} 0 0;
    border: 0.5px solid transparent; // space between bars
    background-clip: content-box;

    ${e=>{let r=nn["bg-strongest"];return e.$disabled&&e.$selected?r=nn["bg-selected-stronger-disabled"]:e.$disabled?r=nn["bg-disabled"]:e.$selected&&(r=nn["bg-selected-stronger"]),f`
            background-color: ${r};
        `}}
`,Pn=p((t=>{var{value:n,min:i=0,max:a=100,step:l=1,minRange:d,numOfThumbs:c=2,colors:u,disabled:h,readOnly:g,ariaLabels:b,showSliderLabels:m,sliderLabelPrefix:p,sliderLabelSuffix:f,showIndicatorLabel:y,indicatorLabelPrefix:v,indicatorLabelSuffix:x,renderSliderLabel:w,onChange:F,onChangeEnd:$}=t,E=V(t,["value","min","max","step","minRange","numOfThumbs","colors","disabled","readOnly","ariaLabels","showSliderLabels","sliderLabelPrefix","sliderLabelSuffix","showIndicatorLabel","indicatorLabelPrefix","indicatorLabelSuffix","renderSliderLabel","onChange","onChangeEnd"]);const[D,C]=o(A()),B=function(){const e=function(){const e=h||g?nn["border-disabled"]:nn["border-strong"],r=h||g?nn["border-selected-disabled"]:nn["border-selected"];if(1===c)return[r,e];const t=[];t.push(e);for(let e=0;e<c-1;e++)t.push(r);return t.push(e),t}();return new Array(c+1).fill(0).map(((r,t)=>(null==u?void 0:u[t])||e[t]))}();s((()=>{n!==D&&C(A())}),[n]);function A(){if(n&&n.length===c)return n;const e=[];for(let r=0;r<c;r++)e.push(i+l*r);return e}const M=r=>w?w(r):e(kn,{children:[p,r,f]});return e(Bn,Object.assign({},E,{children:[y&&r(Mn,{children:(()=>{let r="";if(1===D.length)r=`${D[0]}`;else if(2===D.length)r=`${D[0]} - ${D[1]}`;else if(D.length>2){r=`${Math.min(...D)} - ${Math.max(...D)}`}return e(kn,{children:[v,r,x]})})()}),r(zn,{step:l,min:i,max:a,value:D,disabled:h||g,onChange:(e,r)=>{if("number"==typeof e){const r=[e];C(r),null==F||F(r)}else{if(r>-1&&D[r]===e[r])return;const t=[...e];C(t),null==F||F(t)}},onAfterChange:e=>{if("number"==typeof e){const r=[e];C(r),null==$||$(r)}else{const r=[...e];C(r),null==$||$(r)}},minDistance:d,ariaLabel:b,renderThumb:(e,t)=>r(Sn,Object.assign({"data-testid":`slider-thumb-${t.index}`},e,{tabIndex:h?void 0:e.tabIndex,children:r(On,{$disabled:h,$readOnly:g})})),renderTrack:(e,t)=>r(_n,Object.assign({"data-testid":`slider-track-${t.index}`},e,{$color:B[t.index]}))}),m&&e(An,{children:[r("div",{children:M(i)}),r("div",{children:M(a)})]})]}))}))`
    margin-top: -0.3125rem;
`,Rn=n=>{var{bins:i=[],interval:l,disabled:d,readOnly:c,value:u,showRangeLabels:h,rangeLabelPrefix:g,rangeLabelSuffix:b,ariaLabels:m,onChange:p,onChangeEnd:f,renderEmptyView:y,renderRangeLabel:v}=n,x=V(n,["bins","interval","disabled","readOnly","value","showRangeLabels","rangeLabelPrefix","rangeLabelSuffix","ariaLabels","onChange","onChangeEnd","renderEmptyView","renderRangeLabel"]);const w=i.map((e=>e.count)),F=Math.max(...w),$=i.map((e=>e.minValue)),E=Math.max(...$),D=Math.min(...$),[C,B]=o(z()),A=a((()=>{const e=[...i].sort(((e,r)=>e.minValue-r.minValue)),r=(E-D)/l+1,t=[];for(let n=0;n<r;n++){const r=e.find((e=>e.minValue===D+l*n));r?t.push(r):t.push({count:0,minValue:D+l*n})}return t}),[i,l]);s((()=>{u!==C&&B(z())}),[u]);const M=e=>{const[r,t]=e,n=[r,t];B(n),null==p||p(n)},k=e=>{const[r,t]=e,n=[r,t];B(n),null==f||f(n)};function z(){return null!=u?u:[D,D+l]}const O=r=>v?v(r):e(pn.BodyBL,{children:[g,r,b]});return e("div",Object.assign({},x,{children:[h&&e(Tn,{children:[O(C[0]),r(Ln,{children:"-"}),O(C[1])]}),A.every((e=>0===e.count))&&y?y():e(t,{children:[r(jn,{children:A.map(((e,t)=>{const n=e.count/F;return r(Yn,{style:{height:n?`calc(calc(100% - 0.25rem) * ${n} + 0.25rem)`:0},$selected:e.minValue>=C[0]&&e.minValue<C[1],$disabled:d||c},t)}))}),r(Pn,{min:D,max:E+l,step:l,minRange:l,numOfThumbs:2,value:C,disabled:d,readOnly:c,ariaLabels:m,onChange:M,onChangeEnd:k})]})]}))};var In=function(e,r){return In=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,r){e.__proto__=r}||function(e,r){for(var t in r)Object.prototype.hasOwnProperty.call(r,t)&&(e[t]=r[t])},In(e,r)};var Hn=function(){return Hn=Object.assign||function(e){for(var r,t=1,n=arguments.length;t<n;t++)for(var i in r=arguments[t])Object.prototype.hasOwnProperty.call(r,i)&&(e[i]=r[i]);return e},Hn.apply(this,arguments)};var Wn="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};var Vn=function(e){var r=typeof e;return null!=e&&("object"==r||"function"==r)},Nn="object"==typeof Wn&&Wn&&Wn.Object===Object&&Wn,Kn="object"==typeof self&&self&&self.Object===Object&&self,Un=Nn||Kn||Function("return this")(),Zn=Un,Xn=function(){return Zn.Date.now()},qn=/\s/;var Jn=function(e){for(var r=e.length;r--&&qn.test(e.charAt(r)););return r},Gn=/^\s+/;var Qn=function(e){return e?e.slice(0,Jn(e)+1).replace(Gn,""):e},ei=Un.Symbol,ri=ei,ti=Object.prototype,ni=ti.hasOwnProperty,ii=ti.toString,oi=ri?ri.toStringTag:void 0;var si=function(e){var r=ni.call(e,oi),t=e[oi];try{e[oi]=void 0;var n=!0}catch(e){}var i=ii.call(e);return n&&(r?e[oi]=t:delete e[oi]),i},ai=Object.prototype.toString;var li=si,di=function(e){return ai.call(e)},ci=ei?ei.toStringTag:void 0;var ui=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":ci&&ci in Object(e)?li(e):di(e)},hi=function(e){return null!=e&&"object"==typeof e};var gi=Qn,bi=Vn,mi=function(e){return"symbol"==typeof e||hi(e)&&"[object Symbol]"==ui(e)},pi=/^[-+]0x[0-9a-f]+$/i,fi=/^0b[01]+$/i,yi=/^0o[0-7]+$/i,vi=parseInt;var xi=Vn,wi=Xn,Fi=function(e){if("number"==typeof e)return e;if(mi(e))return NaN;if(bi(e)){var r="function"==typeof e.valueOf?e.valueOf():e;e=bi(r)?r+"":r}if("string"!=typeof e)return 0===e?e:+e;e=gi(e);var t=fi.test(e);return t||yi.test(e)?vi(e.slice(2),t?2:8):pi.test(e)?NaN:+e},$i=Math.max,Ei=Math.min;var Di=function(e,r,t){var n,i,o,s,a,l,d=0,c=!1,u=!1,h=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function g(r){var t=n,o=i;return n=i=void 0,d=r,s=e.apply(o,t)}function b(e){var t=e-l;return void 0===l||t>=r||t<0||u&&e-d>=o}function m(){var e=wi();if(b(e))return p(e);a=setTimeout(m,function(e){var t=r-(e-l);return u?Ei(t,o-(e-d)):t}(e))}function p(e){return a=void 0,h&&n?g(e):(n=i=void 0,s)}function f(){var e=wi(),t=b(e);if(n=arguments,i=this,l=e,t){if(void 0===a)return function(e){return d=e,a=setTimeout(m,r),c?g(e):s}(l);if(u)return clearTimeout(a),a=setTimeout(m,r),g(l)}return void 0===a&&(a=setTimeout(m,r)),s}return r=Fi(r)||0,xi(t)&&(c=!!t.leading,o=(u="maxWait"in t)?$i(Fi(t.maxWait)||0,r):o,h="trailing"in t?!!t.trailing:h),f.cancel=function(){void 0!==a&&clearTimeout(a),d=0,n=l=i=a=void 0},f.flush=function(){return void 0===a?s:p(wi())},f},Ci=Di,Bi=Vn;var Ai=function(e,r,t){var n=!0,i=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return Bi(t)&&(n="leading"in t?!!t.leading:n,i="trailing"in t?!!t.trailing:i),Ci(e,r,{leading:n,maxWait:r,trailing:i})},Mi=function(e,r,t,n){switch(r){case"debounce":return Di(e,t,n);case"throttle":return Ai(e,t,n);default:return e}},ki=function(e){return"function"==typeof e},zi=function(){return"undefined"==typeof window},Oi=function(e){return e instanceof Element||e instanceof HTMLDocument},Si=function(e,r,t,n){return function(i){var o=i.width,s=i.height;r((function(r){return r.width===o&&r.height===s||r.width===o&&!n||r.height===s&&!t?r:(e&&ki(e)&&e(o,s),{width:o,height:s})}))}};!function(e){function r(r){var t=e.call(this,r)||this;t.cancelHandler=function(){t.resizeHandler&&t.resizeHandler.cancel&&(t.resizeHandler.cancel(),t.resizeHandler=null)},t.attachObserver=function(){var e=t.props,r=e.targetRef,n=e.observerOptions;if(!zi()){r&&r.current&&(t.targetRef.current=r.current);var i=t.getElement();i&&(t.observableElement&&t.observableElement===i||(t.observableElement=i,t.resizeObserver.observe(i,n)))}},t.getElement=function(){var e=t.props,r=e.querySelector,n=e.targetDomEl;if(zi())return null;if(r)return document.querySelector(r);if(n&&Oi(n))return n;if(t.targetRef&&Oi(t.targetRef.current))return t.targetRef.current;var i=W(t);if(!i)return null;switch(t.getRenderType()){case"renderProp":case"childFunction":case"child":case"childArray":return i;default:return i.parentElement}},t.createResizeHandler=function(e){var r=t.props,n=r.handleWidth,i=void 0===n||n,o=r.handleHeight,s=void 0===o||o,a=r.onResize;if(i||s){var l=Si(a,t.setState.bind(t),i,s);e.forEach((function(e){var r=e&&e.contentRect||{},n=r.width,i=r.height;!t.skipOnMount&&!zi()&&l({width:n,height:i}),t.skipOnMount=!1}))}},t.getRenderType=function(){var e=t.props,r=e.render,n=e.children;return ki(r)?"renderProp":ki(n)?"childFunction":d(n)?"child":Array.isArray(n)?"childArray":"parent"};var n=r.skipOnMount,i=r.refreshMode,o=r.refreshRate,s=void 0===o?1e3:o,a=r.refreshOptions;return t.state={width:void 0,height:void 0},t.skipOnMount=n,t.targetRef=c(),t.observableElement=null,zi()||(t.resizeHandler=Mi(t.createResizeHandler,i,s,a),t.resizeObserver=new window.ResizeObserver(t.resizeHandler)),t}(function(e,r){if("function"!=typeof r&&null!==r)throw new TypeError("Class extends value "+String(r)+" is not a constructor or null");function t(){this.constructor=e}In(e,r),e.prototype=null===r?Object.create(r):(t.prototype=r.prototype,new t)})(r,e),r.prototype.componentDidMount=function(){this.attachObserver()},r.prototype.componentDidUpdate=function(){this.attachObserver()},r.prototype.componentWillUnmount=function(){zi()||(this.observableElement=null,this.resizeObserver.disconnect(),this.cancelHandler())},r.prototype.render=function(){var e,r=this.props,t=r.render,i=r.children,o=r.nodeType,s=void 0===o?"div":o,a=this.state,l={width:a.width,height:a.height,targetRef:this.targetRef};switch(this.getRenderType()){case"renderProp":return t&&t(l);case"childFunction":return(e=i)(l);case"child":if((e=i).type&&"string"==typeof e.type){var d=function(e,r){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(n=Object.getOwnPropertySymbols(e);i<n.length;i++)r.indexOf(n[i])<0&&Object.prototype.propertyIsEnumerable.call(e,n[i])&&(t[n[i]]=e[n[i]])}return t}(l,["targetRef"]);return u(e,d)}return u(e,l);case"childArray":return(e=i).map((function(e){return!!e&&u(e,l)}));default:return n.createElement(s,null)}}}(h);var _i,Ti=zi()?s:g;!function(e){e.transformWithSpaces=(e,r)=>{const t="(.{"+r+"})";return e.replace(/[^\dA-Z]/gi,"").replace(new RegExp(t,"g"),"$1 ").trim()},e.padValue=(e,r)=>{if("0"===e)return r?e:e.padStart(2,"0");if(""===e)return e;return parseInt(e).toString().padStart(2,"0")},e.shouldTruncateToTwoLines=(e,r)=>{const t=Math.floor(r/9);return e.length>=2*t||1===e.split(" ").length&&e.length>t},e.truncateOneLine=(e,r,t,n,i=8)=>{let o=0;r>t&&(o=Math.floor((r-t)/i));const s=n+o;if(s<e.length){const r=Math.floor(s/2);return e.substring(0,r)+" ... "+e.substring(e.length-r,e.length)}return e},e.truncateTwoLines=(e,r,t,n=1.2)=>{const i=Math.floor(2*r/(.6*t))*(2/n);if(e.length<=i)return e;const o=Math.floor(.6*i),s=Math.floor(.2*i);return`${e.substring(0,o)}...${e.substring(e.length-s)}`},e.getTextWidth=(r,t)=>{if("undefined"==typeof document)return 0;const n=(e.getTextWidth.canvas||(e.getTextWidth.canvas=document.createElement("canvas"))).getContext("2d");n.font=t;return n.measureText(r).width},e.maskValue=(e,t)=>{if(!e)return e;const{maskRange:n,unmaskRange:i,maskChar:o="•",maskRegex:s,maskTransformer:a}=t;if(a)return a(e);if(s)return e.replace(s,o);if(n){const{startIndex:t,endIndex:i}=r(n[0],n[1]);return e.substring(0,t)+o.repeat(e.substring(t,i+1).length)+e.substring(i+1)}if(i){const{startIndex:t,endIndex:n}=r(i[0],i[1]);return o.repeat(e.substring(0,t).length)+e.substring(t,n+1)+o.repeat(e.substring(n+1).length)}return e};const r=(e,r)=>e<r?{startIndex:e,endIndex:r}:{startIndex:r,endIndex:e}}(_i||(_i={}));const Li=p.div`
    font-weight: ${e=>e.$bold?on.Spec["weight-semibold"]:on.Spec["weight-regular"]};

    ${e=>e.$disabled?f`
                color: ${nn["text-disabled"]};
            `:e.$selected?f`
                color: ${nn["text-selected"]};
            `:f`
                color: ${nn.text};
            `}
    width: 100%;

    ${e=>"end"===e.$truncateType&&hn(e.$maxLines||2)}
    overflow-wrap: break-word;
`,ji=p.div`
    color: ${nn["text-subtlest"]};
    width: 100%;

    ${e=>"end"===e.$truncateType&&hn(e.$maxLines||2)}
    overflow-wrap: break-word;

    ${e=>"next-line"===e.$labelDisplayType?f`
                    ${on["body-md-semibold"]}
                `:f`
                    ${on["body-baseline-regular"]}
                `}
`;p.span`
    font-weight: ${on.Spec["weight-semibold"]};
`,p.div`
    text-align: left;
    width: 100%;
    overflow: hidden;
    overflow-wrap: break-word;

    ${e=>"small"===e.$variant?on["body-md-regular"]:on["body-baseline-regular"]}

    ${e=>{switch(e.$labelDisplayType){case"next-line":return f`
                    display: flex;
                    flex-direction: column;
                `;case"inline":return f`
                    ${Li} {
                        display: inline;
                    }

                    ${ji} {
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
`;var Yi=Cr;var Pi=function(e){var r=this.__data__,t=r.delete(e);return this.size=r.size,t};var Ri=function(e){return this.__data__.get(e)};var Ii=function(e){return this.__data__.has(e)},Hi=Cr,Wi=Br,Vi=Ur;var Ni=function(e,r){var t=this.__data__;if(t instanceof Hi){var n=t.__data__;if(!Wi||n.length<199)return n.push([e,r]),this.size=++t.size,this;t=this.__data__=new Vi(n)}return t.set(e,r),this.size=t.size,this},Ki=Cr,Ui=function(){this.__data__=new Yi,this.size=0},Zi=Pi,Xi=Ri,qi=Ii,Ji=Ni;function Gi(e){var r=this.__data__=new Ki(e);this.size=r.size}Gi.prototype.clear=Ui,Gi.prototype.delete=Zi,Gi.prototype.get=Xi,Gi.prototype.has=qi,Gi.prototype.set=Ji;var Qi=Ur,eo=function(e){return this.__data__.set(e,"__lodash_hash_undefined__"),this},ro=function(e){return this.__data__.has(e)};function to(e){var r=-1,t=null==e?0:e.length;for(this.__data__=new Qi;++r<t;)this.add(e[r])}to.prototype.add=to.prototype.push=eo,to.prototype.has=ro,J.Uint8Array;var no=G?G.prototype:void 0;no&&no.valueOf;var io=de,oo=ce;var so=function(e){return oo(e)&&"[object Arguments]"==io(e)},ao=Object.prototype;ao.hasOwnProperty,ao.propertyIsEnumerable;so(function(){return arguments}());var lo={exports:{}};var co=function(){return!1};!function(e,r){var t=J,n=co,i=r&&!r.nodeType&&r,o=i&&e&&!e.nodeType&&e,s=o&&o.exports===i?t.Buffer:void 0,a=(s?s.isBuffer:void 0)||n;e.exports=a}(lo,lo.exports);var uo={exports:{}};!function(e,r){var t=Z,n=r&&!r.nodeType&&r,i=n&&e&&!e.nodeType&&e,o=i&&i.exports===n&&t.process,s=function(){try{var e=i&&i.require&&i.require("util").types;return e||o&&o.binding&&o.binding("util")}catch(e){}}();e.exports=s}(uo,uo.exports);var ho=uo.exports;ho&&ho.isTypedArray;var go=He(J,"DataView"),bo=Br,mo=He(J,"Promise"),po=He(J,"Set"),fo=He(J,"WeakMap"),yo=de,vo=Ae,xo="[object Map]",wo="[object Promise]",Fo="[object Set]",$o="[object WeakMap]",Eo="[object DataView]",Do=vo(go),Co=vo(bo),Bo=vo(mo),Ao=vo(po),Mo=vo(fo),ko=yo;(go&&ko(new go(new ArrayBuffer(1)))!=Eo||bo&&ko(new bo)!=xo||mo&&ko(mo.resolve())!=wo||po&&ko(new po)!=Fo||fo&&ko(new fo)!=$o)&&(ko=function(e){var r=yo(e),t="[object Object]"==r?e.constructor:void 0,n=t?vo(t):"";if(n)switch(n){case Do:return Eo;case Co:return xo;case Bo:return wo;case Ao:return Fo;case Mo:return $o}return r});var zo={exports:{}};zo.exports=function(){var e=1e3,r=6e4,t=36e5,n="millisecond",i="second",o="minute",s="hour",a="day",l="week",d="month",c="quarter",u="year",h="date",g="Invalid Date",b=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,m=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,p={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(e){var r=["th","st","nd","rd"],t=e%100;return"["+e+(r[(t-20)%10]||r[t]||r[0])+"]"}},f=function(e,r,t){var n=String(e);return!n||n.length>=r?e:""+Array(r+1-n.length).join(t)+e},y={s:f,z:function(e){var r=-e.utcOffset(),t=Math.abs(r),n=Math.floor(t/60),i=t%60;return(r<=0?"+":"-")+f(n,2,"0")+":"+f(i,2,"0")},m:function e(r,t){if(r.date()<t.date())return-e(t,r);var n=12*(t.year()-r.year())+(t.month()-r.month()),i=r.clone().add(n,d),o=t-i<0,s=r.clone().add(n+(o?-1:1),d);return+(-(n+(t-i)/(o?i-s:s-i))||0)},a:function(e){return e<0?Math.ceil(e)||0:Math.floor(e)},p:function(e){return{M:d,y:u,w:l,d:a,D:h,h:s,m:o,s:i,ms:n,Q:c}[e]||String(e||"").toLowerCase().replace(/s$/,"")},u:function(e){return void 0===e}},v="en",x={};x[v]=p;var w="$isDayjsObject",F=function(e){return e instanceof C||!(!e||!e[w])},$=function e(r,t,n){var i;if(!r)return v;if("string"==typeof r){var o=r.toLowerCase();x[o]&&(i=o),t&&(x[o]=t,i=o);var s=r.split("-");if(!i&&s.length>1)return e(s[0])}else{var a=r.name;x[a]=r,i=a}return!n&&i&&(v=i),i||!n&&v},E=function(e,r){if(F(e))return e.clone();var t="object"==typeof r?r:{};return t.date=e,t.args=arguments,new C(t)},D=y;D.l=$,D.i=F,D.w=function(e,r){return E(e,{locale:r.$L,utc:r.$u,x:r.$x,$offset:r.$offset})};var C=function(){function p(e){this.$L=$(e.locale,null,!0),this.parse(e),this.$x=this.$x||e.x||{},this[w]=!0}var f=p.prototype;return f.parse=function(e){this.$d=function(e){var r=e.date,t=e.utc;if(null===r)return new Date(NaN);if(D.u(r))return new Date;if(r instanceof Date)return new Date(r);if("string"==typeof r&&!/Z$/i.test(r)){var n=r.match(b);if(n){var i=n[2]-1||0,o=(n[7]||"0").substring(0,3);return t?new Date(Date.UTC(n[1],i,n[3]||1,n[4]||0,n[5]||0,n[6]||0,o)):new Date(n[1],i,n[3]||1,n[4]||0,n[5]||0,n[6]||0,o)}}return new Date(r)}(e),this.init()},f.init=function(){var e=this.$d;this.$y=e.getFullYear(),this.$M=e.getMonth(),this.$D=e.getDate(),this.$W=e.getDay(),this.$H=e.getHours(),this.$m=e.getMinutes(),this.$s=e.getSeconds(),this.$ms=e.getMilliseconds()},f.$utils=function(){return D},f.isValid=function(){return!(this.$d.toString()===g)},f.isSame=function(e,r){var t=E(e);return this.startOf(r)<=t&&t<=this.endOf(r)},f.isAfter=function(e,r){return E(e)<this.startOf(r)},f.isBefore=function(e,r){return this.endOf(r)<E(e)},f.$g=function(e,r,t){return D.u(e)?this[r]:this.set(t,e)},f.unix=function(){return Math.floor(this.valueOf()/1e3)},f.valueOf=function(){return this.$d.getTime()},f.startOf=function(e,r){var t=this,n=!!D.u(r)||r,c=D.p(e),g=function(e,r){var i=D.w(t.$u?Date.UTC(t.$y,r,e):new Date(t.$y,r,e),t);return n?i:i.endOf(a)},b=function(e,r){return D.w(t.toDate()[e].apply(t.toDate("s"),(n?[0,0,0,0]:[23,59,59,999]).slice(r)),t)},m=this.$W,p=this.$M,f=this.$D,y="set"+(this.$u?"UTC":"");switch(c){case u:return n?g(1,0):g(31,11);case d:return n?g(1,p):g(0,p+1);case l:var v=this.$locale().weekStart||0,x=(m<v?m+7:m)-v;return g(n?f-x:f+(6-x),p);case a:case h:return b(y+"Hours",0);case s:return b(y+"Minutes",1);case o:return b(y+"Seconds",2);case i:return b(y+"Milliseconds",3);default:return this.clone()}},f.endOf=function(e){return this.startOf(e,!1)},f.$set=function(e,r){var t,l=D.p(e),c="set"+(this.$u?"UTC":""),g=(t={},t[a]=c+"Date",t[h]=c+"Date",t[d]=c+"Month",t[u]=c+"FullYear",t[s]=c+"Hours",t[o]=c+"Minutes",t[i]=c+"Seconds",t[n]=c+"Milliseconds",t)[l],b=l===a?this.$D+(r-this.$W):r;if(l===d||l===u){var m=this.clone().set(h,1);m.$d[g](b),m.init(),this.$d=m.set(h,Math.min(this.$D,m.daysInMonth())).$d}else g&&this.$d[g](b);return this.init(),this},f.set=function(e,r){return this.clone().$set(e,r)},f.get=function(e){return this[D.p(e)]()},f.add=function(n,c){var h,g=this;n=Number(n);var b=D.p(c),m=function(e){var r=E(g);return D.w(r.date(r.date()+Math.round(e*n)),g)};if(b===d)return this.set(d,this.$M+n);if(b===u)return this.set(u,this.$y+n);if(b===a)return m(1);if(b===l)return m(7);var p=(h={},h[o]=r,h[s]=t,h[i]=e,h)[b]||1,f=this.$d.getTime()+n*p;return D.w(f,this)},f.subtract=function(e,r){return this.add(-1*e,r)},f.format=function(e){var r=this,t=this.$locale();if(!this.isValid())return t.invalidDate||g;var n=e||"YYYY-MM-DDTHH:mm:ssZ",i=D.z(this),o=this.$H,s=this.$m,a=this.$M,l=t.weekdays,d=t.months,c=t.meridiem,u=function(e,t,i,o){return e&&(e[t]||e(r,n))||i[t].slice(0,o)},h=function(e){return D.s(o%12||12,e,"0")},b=c||function(e,r,t){var n=e<12?"AM":"PM";return t?n.toLowerCase():n};return n.replace(m,(function(e,n){return n||function(e){switch(e){case"YY":return String(r.$y).slice(-2);case"YYYY":return D.s(r.$y,4,"0");case"M":return a+1;case"MM":return D.s(a+1,2,"0");case"MMM":return u(t.monthsShort,a,d,3);case"MMMM":return u(d,a);case"D":return r.$D;case"DD":return D.s(r.$D,2,"0");case"d":return String(r.$W);case"dd":return u(t.weekdaysMin,r.$W,l,2);case"ddd":return u(t.weekdaysShort,r.$W,l,3);case"dddd":return l[r.$W];case"H":return String(o);case"HH":return D.s(o,2,"0");case"h":return h(1);case"hh":return h(2);case"a":return b(o,s,!0);case"A":return b(o,s,!1);case"m":return String(s);case"mm":return D.s(s,2,"0");case"s":return String(r.$s);case"ss":return D.s(r.$s,2,"0");case"SSS":return D.s(r.$ms,3,"0");case"Z":return i}return null}(e)||i.replace(":","")}))},f.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},f.diff=function(n,h,g){var b,m=this,p=D.p(h),f=E(n),y=(f.utcOffset()-this.utcOffset())*r,v=this-f,x=function(){return D.m(m,f)};switch(p){case u:b=x()/12;break;case d:b=x();break;case c:b=x()/3;break;case l:b=(v-y)/6048e5;break;case a:b=(v-y)/864e5;break;case s:b=v/t;break;case o:b=v/r;break;case i:b=v/e;break;default:b=v}return g?b:D.a(b)},f.daysInMonth=function(){return this.endOf(d).$D},f.$locale=function(){return x[this.$L]},f.locale=function(e,r){if(!e)return this.$L;var t=this.clone(),n=$(e,r,!0);return n&&(t.$L=n),t},f.clone=function(){return D.w(this.$d,this)},f.toDate=function(){return new Date(this.valueOf())},f.toJSON=function(){return this.isValid()?this.toISOString():null},f.toISOString=function(){return this.$d.toISOString()},f.toString=function(){return this.$d.toUTCString()},p}(),B=C.prototype;return E.prototype=B,[["$ms",n],["$s",i],["$m",o],["$H",s],["$W",a],["$M",d],["$y",u],["$D",h]].forEach((function(e){B[e[1]]=function(r){return this.$g(r,e[0],e[1])}})),E.extend=function(e,r){return e.$i||(e(r,C,E),e.$i=!0),E},E.locale=$,E.isDayjs=F,E.unix=function(e){return E(1e3*e)},E.en=x[v],E.Ls=x,E.p={},E}();var Oo=K(zo.exports),So={exports:{}};So.exports=function(){var e={LTS:"h:mm:ss A",LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D, YYYY",LLL:"MMMM D, YYYY h:mm A",LLLL:"dddd, MMMM D, YYYY h:mm A"},r=/(\[[^[]*\])|([-_:/.,()\s]+)|(A|a|YYYY|YY?|MM?M?M?|Do|DD?|hh?|HH?|mm?|ss?|S{1,3}|z|ZZ?)/g,t=/\d\d/,n=/\d\d?/,i=/\d*[^-_:/,()\s\d]+/,o={},s=function(e){return(e=+e)+(e>68?1900:2e3)},a=function(e){return function(r){this[e]=+r}},l=[/[+-]\d\d:?(\d\d)?|Z/,function(e){(this.zone||(this.zone={})).offset=function(e){if(!e)return 0;if("Z"===e)return 0;var r=e.match(/([+-]|\d\d)/g),t=60*r[1]+(+r[2]||0);return 0===t?0:"+"===r[0]?-t:t}(e)}],d=function(e){var r=o[e];return r&&(r.indexOf?r:r.s.concat(r.f))},c=function(e,r){var t,n=o.meridiem;if(n){for(var i=1;i<=24;i+=1)if(e.indexOf(n(i,0,r))>-1){t=i>12;break}}else t=e===(r?"pm":"PM");return t},u={A:[i,function(e){this.afternoon=c(e,!1)}],a:[i,function(e){this.afternoon=c(e,!0)}],S:[/\d/,function(e){this.milliseconds=100*+e}],SS:[t,function(e){this.milliseconds=10*+e}],SSS:[/\d{3}/,function(e){this.milliseconds=+e}],s:[n,a("seconds")],ss:[n,a("seconds")],m:[n,a("minutes")],mm:[n,a("minutes")],H:[n,a("hours")],h:[n,a("hours")],HH:[n,a("hours")],hh:[n,a("hours")],D:[n,a("day")],DD:[t,a("day")],Do:[i,function(e){var r=o.ordinal,t=e.match(/\d+/);if(this.day=t[0],r)for(var n=1;n<=31;n+=1)r(n).replace(/\[|\]/g,"")===e&&(this.day=n)}],M:[n,a("month")],MM:[t,a("month")],MMM:[i,function(e){var r=d("months"),t=(d("monthsShort")||r.map((function(e){return e.slice(0,3)}))).indexOf(e)+1;if(t<1)throw new Error;this.month=t%12||t}],MMMM:[i,function(e){var r=d("months").indexOf(e)+1;if(r<1)throw new Error;this.month=r%12||r}],Y:[/[+-]?\d+/,a("year")],YY:[t,function(e){this.year=s(e)}],YYYY:[/\d{4}/,a("year")],Z:l,ZZ:l};function h(t){var n,i;n=t,i=o&&o.formats;for(var s=(t=n.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g,(function(r,t,n){var o=n&&n.toUpperCase();return t||i[n]||e[n]||i[o].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g,(function(e,r,t){return r||t.slice(1)}))}))).match(r),a=s.length,l=0;l<a;l+=1){var d=s[l],c=u[d],h=c&&c[0],g=c&&c[1];s[l]=g?{regex:h,parser:g}:d.replace(/^\[|\]$/g,"")}return function(e){for(var r={},t=0,n=0;t<a;t+=1){var i=s[t];if("string"==typeof i)n+=i.length;else{var o=i.regex,l=i.parser,d=e.slice(n),c=o.exec(d)[0];l.call(r,c),e=e.replace(c,"")}}return function(e){var r=e.afternoon;if(void 0!==r){var t=e.hours;r?t<12&&(e.hours+=12):12===t&&(e.hours=0),delete e.afternoon}}(r),r}}return function(e,r,t){t.p.customParseFormat=!0,e&&e.parseTwoDigitYear&&(s=e.parseTwoDigitYear);var n=r.prototype,i=n.parse;n.parse=function(e){var r=e.date,n=e.utc,s=e.args;this.$u=n;var a=s[1];if("string"==typeof a){var l=!0===s[2],d=!0===s[3],c=l||d,u=s[2];d&&(u=s[2]),o=this.$locale(),!l&&u&&(o=t.Ls[u]),this.$d=function(e,r,t){try{if(["x","X"].indexOf(r)>-1)return new Date(("X"===r?1e3:1)*e);var n=h(r)(e),i=n.year,o=n.month,s=n.day,a=n.hours,l=n.minutes,d=n.seconds,c=n.milliseconds,u=n.zone,g=new Date,b=s||(i||o?1:g.getDate()),m=i||g.getFullYear(),p=0;i&&!o||(p=o>0?o-1:g.getMonth());var f=a||0,y=l||0,v=d||0,x=c||0;return u?new Date(Date.UTC(m,p,b,f,y,v,x+60*u.offset*1e3)):t?new Date(Date.UTC(m,p,b,f,y,v,x)):new Date(m,p,b,f,y,v,x)}catch(e){return new Date("")}}(r,a,n),this.init(),u&&!0!==u&&(this.$L=this.locale(u).$L),c&&r!=this.format(a)&&(this.$d=new Date("")),o={}}else if(a instanceof Array)for(var g=a.length,b=1;b<=g;b+=1){s[1]=a[b-1];var m=t.apply(this,s);if(m.isValid()){this.$d=m.$d,this.$L=m.$L,this.init();break}b===g&&(this.$d=new Date(""))}else i.call(this,e)}}}();var _o=K(So.exports),To={exports:{}};To.exports=function(e,r,t){r.prototype.isBetween=function(e,r,n,i){var o=t(e),s=t(r),a="("===(i=i||"()")[0],l=")"===i[1];return(a?this.isAfter(o,n):!this.isBefore(o,n))&&(l?this.isBefore(s,n):!this.isAfter(s,n))||(a?this.isBefore(o,n):!this.isAfter(o,n))&&(l?this.isAfter(s,n):!this.isBefore(s,n))}};var Lo=K(To.exports),jo={exports:{}};jo.exports=function(e,r){r.prototype.isSameOrAfter=function(e,r){return this.isSame(e,r)||this.isAfter(e,r)}};var Yo=K(jo.exports),Po={exports:{}};Po.exports=function(e,r){r.prototype.isSameOrBefore=function(e,r){return this.isSame(e,r)||this.isBefore(e,r)}};var Ro,Io,Ho=K(Po.exports),Wo={exports:{}};Wo.exports=(Ro={year:0,month:1,day:2,hour:3,minute:4,second:5},Io={},function(e,r,t){var n,i=function(e,r,t){void 0===t&&(t={});var n=new Date(e),i=function(e,r){void 0===r&&(r={});var t=r.timeZoneName||"short",n=e+"|"+t,i=Io[n];return i||(i=new Intl.DateTimeFormat("en-US",{hour12:!1,timeZone:e,year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit",timeZoneName:t}),Io[n]=i),i}(r,t);return i.formatToParts(n)},o=function(e,r){for(var n=i(e,r),o=[],s=0;s<n.length;s+=1){var a=n[s],l=a.type,d=a.value,c=Ro[l];c>=0&&(o[c]=parseInt(d,10))}var u=o[3],h=24===u?0:u,g=o[0]+"-"+o[1]+"-"+o[2]+" "+h+":"+o[4]+":"+o[5]+":000",b=+e;return(t.utc(g).valueOf()-(b-=b%1e3))/6e4},s=r.prototype;s.tz=function(e,r){void 0===e&&(e=n);var i=this.utcOffset(),o=this.toDate(),s=o.toLocaleString("en-US",{timeZone:e}),a=Math.round((o-new Date(s))/1e3/60),l=t(s,{locale:this.$L}).$set("millisecond",this.$ms).utcOffset(15*-Math.round(o.getTimezoneOffset()/15)-a,!0);if(r){var d=l.utcOffset();l=l.add(i-d,"minute")}return l.$x.$timezone=e,l},s.offsetName=function(e){var r=this.$x.$timezone||t.tz.guess(),n=i(this.valueOf(),r,{timeZoneName:e}).find((function(e){return"timezonename"===e.type.toLowerCase()}));return n&&n.value};var a=s.startOf;s.startOf=function(e,r){if(!this.$x||!this.$x.$timezone)return a.call(this,e,r);var n=t(this.format("YYYY-MM-DD HH:mm:ss:SSS"),{locale:this.$L});return a.call(n,e,r).tz(this.$x.$timezone,!0)},t.tz=function(e,r,i){var s=i&&r,a=i||r||n,l=o(+t(),a);if("string"!=typeof e)return t(e).tz(a);var d=function(e,r,t){var n=e-60*r*1e3,i=o(n,t);if(r===i)return[n,r];var s=o(n-=60*(i-r)*1e3,t);return i===s?[n,i]:[e-60*Math.min(i,s)*1e3,Math.max(i,s)]}(t.utc(e,s).valueOf(),l,a),c=d[0],u=d[1],h=t(c).utcOffset(u);return h.$x.$timezone=a,h},t.tz.guess=function(){return Intl.DateTimeFormat().resolvedOptions().timeZone},t.tz.setDefault=function(e){n=e}});var Vo,No=K(Wo.exports);Oo.extend(Lo),Oo.extend(Ho),Oo.extend(Yo),Oo.extend(_o),Oo.extend(No),function(e){e.generateDays=e=>{const r=e.startOf("month"),t=Oo(r).startOf("week");return Ko(t).map((e=>Uo(e)))},e.generateDaysForCurrentWeek=e=>{const r=e.startOf("week");return Uo(r)},e.generateMonths=e=>{const r=[];for(let t=0;t<12;t++){const n=e.month(t);r.push(Oo(n))}return r},e.generateDecadeOfYears=e=>{const r=e.year(),t=10*Math.floor(r/10),n=e.year(t),i=[n.subtract(1,"year"),n];for(let e=1;e<11;e++)i.push(n.add(e,"year"));return i},e.getStartEndDecade=e=>{const r=10*Math.floor(+e.format("YYYY")/10);return{beginDecade:r,endDecade:+Oo(`${r+9}-01-01`).format("YYYY")}},e.convertTo12HourFormat=e=>{const r=Oo(e,"HH:mm");return r.isValid()?r.format("h:mm a"):""},e.isWithinRange=(e,r,t,n="day")=>!r&&!t||(r&&t?e.isBetween(r,t,n,"[]"):r?e.isSameOrAfter(r,n):e.isSameOrBefore(t,n)),e.isPreviousMonthWithinRange=(r,t)=>e.isWithinRange(r.subtract(1,"month"),t,void 0,"month"),e.isPreviousYearWithinRange=(r,t)=>e.isWithinRange(r.subtract(1,"year"),t,void 0,"year"),e.isPreviousDecadeWithinRange=(r,t)=>{const{beginDecade:n}=e.getStartEndDecade(r);return e.isWithinRange(r.year(n).subtract(1,"year"),t,void 0,"year")},e.isNextMonthWithinRange=(r,t)=>e.isWithinRange(r.add(1,"month"),void 0,t,"month"),e.isNextYearWithinRange=(r,t)=>e.isWithinRange(r.add(1,"year"),void 0,t,"year"),e.isNextDecadeWithinRange=(r,t)=>{const{endDecade:n}=e.getStartEndDecade(r);return e.isWithinRange(r.year(n).add(1,"year"),void 0,t,"year")},e.getWeekStartEnd=e=>({start:e.startOf("week").format("YYYY-MM-DD"),end:e.endOf("week").format("YYYY-MM-DD")}),e.getFixedRangeStartEnd=(e,r)=>({start:e.format("YYYY-MM-DD"),end:e.add(r-1,"day").format("YYYY-MM-DD")}),e.isDisabledDay=(r,t,n,i)=>{const o=e.isWithinRange(r,n?Oo(n):void 0,i?Oo(i):void 0),s=t&&t.includes(r.format("YYYY-MM-DD"));return!o||!!s}}(Vo||(Vo={}));const Ko=e=>{const r=[e];for(let t=1;t<6;t++){const n=e.add(t,"week");r.push(n)}return r},Uo=e=>{const r=[];for(let t=0;t<7;t++){const n=e.add(t,"day");r.push(n)}return r},Zo=[1,3,5,7,8,10,12],Xo=[4,6,9,11];var qo,Jo,Go;!function(e){e.clampDay=(r,t,n)=>{const i=parseInt(r),o=parseInt(t),s=parseInt(n);return 0==i?"1":Zo.includes(o)?Math.min(i,31).toString():Xo.includes(o)?Math.min(i,30).toString():2===o?e.isLeapYear(s)?Math.min(i,29).toString():Math.min(i,28).toString():r},e.clampMonth=e=>{const r=parseInt(e);return 0==r?"1":r>12?"12":e},e.isLeapYear=e=>e%4==0&&e%100!=0||e%400==0,e.getTimeDiffInMinutes=(e,r,t="HH:mm")=>{const n=Oo(e,t);return Oo(r,t).diff(n,"minute")},e.toDayjs=e=>e?Oo(e):Oo(),e.addMinutesToTime=(e,r,t="HH:mm")=>Oo(e,t).add(r,"minutes").format(t),e.isSame=(e,r,t="day")=>Oo(e).isSame(Oo(r),t)}(qo||(qo={})),function(e){e.isDateDisabled=(e,r)=>{const{disabledDates:t,minDate:n,maxDate:i}=r;return!!(e&&t&&t.length&&t.includes(e))||(!(!n||!Oo(e).isBefore(n,"day"))||!(!i||!Oo(e).isAfter(i,"day")))},e.sanitizeInput=e=>{if(e){if(Oo(e).isValid())return e}return""}}(Jo||(Jo={})),function(e){e.generate=()=>Math.random().toString(36).substring(2,9)}(Go||(Go={}));const Qo=i.createContext({focusedIndex:-1,setFocusedIndex:()=>{}}),es=({children:e})=>{const[t,n]=o(-1);return r(Qo.Provider,{value:{focusedIndex:t,setFocusedIndex:n},children:e})},rs=p.div`
    display: inline-block;
    position: relative;
    width: ${({$size:e})=>e?`${e}px`:"1em"};
    height: ${({$size:e})=>e?`${e}px`:"1em"};
    color: ${e=>e.$color||"currentColor"};
`,ts=y`
	0% {
	  transform: rotate(0deg);
	}
	100% {
	  transform: rotate(360deg);
	}
`,ns=p.div`
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
    animation: ${ts} 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
`,is=p(ns)`
    animation-delay: -0.45s;
`,os=p(ns)`
    animation-delay: -0.3s;
`,ss=p(ns)`
    animation-delay: -0.15s;
`,as=({color:t,className:n,size:i})=>e(rs,{className:n,$size:i,$color:t,"data-testid":"component-loading-spinner",children:[r(ns,{id:"inner1"}),r(is,{id:"inner2"}),r(os,{id:"inner3"}),r(ss,{id:"inner4"})]}),ls=f`
    outline-offset: -1px;
    outline: ${an["width-020"]} ${an.solid} ${nn["border-focus"]};
`,ds=f`
    outline-color: ${nn["border-focus"]};
`,cs=f`
    outline-color: ${nn["border-disabled"]};
`,us=f`
    outline-color: ${nn["border-error-focus"]};
`,hs=p.div`
    border: ${an["width-010"]} ${an.solid} ${nn.border};
    border-radius: ${dn.sm};
    background: ${nn.bg};

    :focus-within {
        ${ls}
    }
    ${e=>e.$focused&&ls}

    ${e=>e.$readOnly?f`
                border-color: transparent;
                padding: 0;
                background: transparent !important;

                :focus-within {
                    ${ds}
                }
                ${e.$focused&&ds}
            `:e.$disabled?f`
                background: ${nn["bg-disabled"]};
                cursor: not-allowed;

                :focus-within {
                    ${cs}
                }
                ${e.$focused&&cs}
            `:e.$error?f`
                border-color: ${nn["border-error"]};

                :focus-within {
                    ${us}
                }
                ${e.$focused&&us}
            `:void 0}
`;p(hs)`
    display: flex;
    align-items: center;
    position: relative;
    height: max-content;
    width: 100%;
    padding: 0 ${ln["spacing-16"]};
    flex-direction: ${e=>"right"===e.$position?"row-reverse":"row"};
`;const gs=p.input`
    ${e=>"small"===e.$variant?on["body-md-regular"]:on["body-baseline-regular"]}
    color: ${nn.text};
    display: block;
    background: transparent;
    border: none;
    outline: none;
    box-shadow: none;
    padding: 0;
    margin: 0;

    :disabled {
        color: ${nn["text-subtler"]};

        :hover {
            cursor: not-allowed;
        }
    }

    ::placeholder,
    ::-webkit-input-placeholder {
        color: ${nn["text-subtler"]};
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
`,bs=p.button`
    background: transparent;
    border: none;
    outline: none;

    :focus,
    :active {
        outline: none;
    }

    :focus-visible {
        outline: ${an["width-010"]} ${an.solid}
            ${nn["border-focus"]};
        border-radius: ${dn.sm};
    }
`;p.div`
    overflow: hidden;
    border: ${an["width-010"]} ${an.solid} ${nn.border};
    border-radius: ${dn.sm};
    background: ${nn.bg};

    min-width: 23rem;
    ${e=>e.$width&&`width: ${e.$width}px;`}
    max-height: 27rem;
    overflow-y: auto;

    ${e=>"small"===e.$variant?on["body-md-regular"]:on["body-baseline-regular"]}

    ${un.MaxWidth.sm} {
        min-width: unset;
        width: calc(100vw - ${cn["sm-margin"]} * 2);
        max-height: 15rem;
    }

    ${un.MaxWidth.xs} {
        width: calc(100vw - ${cn["xs-margin"]} * 2);
    }

    ${un.MaxWidth.xxs} {
        width: calc(100vw - ${cn["xxs-margin"]} * 2);
    }

    ::-webkit-scrollbar {
        width: 14px;
    }

    ::-webkit-scrollbar-track {
        background: transparent;
    }

    ::-webkit-scrollbar-thumb {
        background: ${nn["bg-inverse-subtlest"]};
        border: 5px solid transparent;
        border-radius: 9999px;
        background-clip: padding-box;
    }
`,p.div`
    background: transparent;
    padding: ${ln["spacing-8"]};
`,p.ul`
    list-style-type: none;
`,p.li`
    display: flex;
    align-items: flex-start;
    gap: ${ln["spacing-8"]};
    padding: ${ln["spacing-12"]} ${ln["spacing-8"]};
    cursor: pointer;

    outline: none;

    ${e=>e.$disabled?f`
                cursor: not-allowed;
            `:e.$active&&e.$selected?f`
                background: ${nn["bg-hover"]};
            `:e.$active?f`
                background: ${nn["bg-hover-subtle"]};
            `:void 0}
`,p(E)`
    flex-shrink: 0;
    height: 1lh;
    width: 1rem;
    color: ${nn["icon-selected"]};
`,p.div`
    flex-shrink: 0;
    height: 1lh;
    width: 1rem;
`,p($)`
    flex-shrink: 0;
    height: 1lh;
    width: 1lh;
    color: ${nn["icon-selected"]};
`,p(w)`
    flex-shrink: 0;
    height: 1lh;
    width: 1lh;
    color: ${nn["icon-primary-subtlest"]};
`,p(F)`
    flex-shrink: 0;
    height: 1lh;
    width: 1lh;
    color: ${nn["icon-disabled-subtle"]};
`,p.div`
    width: 100%;
    display: flex;
    justify-content: flex-end;
`;const ms=p(bs)`
    cursor: pointer;
    overflow: hidden;
    color: ${nn["text-primary"]};
    font-size: inherit;
`;p(ms)`
    ${on["body-baseline-semibold"]}
`,p(ms)`
    ${on["body-md-semibold"]}
    padding: ${ln["spacing-8"]} ${ln["spacing-8"]};
`,p.div`
    width: 100%;
    display: flex;
    padding: ${ln["spacing-12"]} ${ln["spacing-16"]};
    align-items: center;
`,p(x)`
    margin-right: ${ln["spacing-4"]};
    color: ${nn["icon-error"]};
    height: 1em;
    width: 1em;
`,p(as)`
    margin-right: ${ln["spacing-8"]};
    color: ${nn.icon};
`,p.div`
    ${(e=>{const{textSize:r}=e||{};return f`
        // Text styling
        ${r&&on[`${r}-regular`]}

        strong {
            font-weight: ${on.Spec["weight-semibold"]};
            ${r&&on[`${r}-semibold`]};
        }

        p {
            margin: 0;
        }

        // Link styling
        a {
            font-weight: ${on.Spec["weight-semibold"]};
            ${r&&on[`${r}-semibold`]}
            color: ${nn.hyperlink};
            text-decoration: none;

            svg {
                color: ${nn["icon-primary"]};
                height: 1lh;
                width: 1em;
                margin-left: 0.4rem;
                vertical-align: middle;
            }

            :hover,
            :active,
            :visited,
            :focus {
                color: ${nn["hyperlink-hover"]};

                svg {
                    color: ${nn["icon-hover"]};
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
    color: ${nn["text-subtle"]};
    padding: 0 ${ln["spacing-16"]} ${ln["spacing-12"]}
        ${ln["spacing-16"]};
`;const ps=p.button`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: ${ln["spacing-24"]};
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
                background-color: ${nn["bg-hover-neutral"]};
            `}
    }
`,fs=i.forwardRef(((e,t)=>{var{children:n,focusHighlight:i=!0,focusOutline:o="none",type:s="button"}=e,a=V(e,["children","focusHighlight","focusOutline","type"]);return r(ps,Object.assign({ref:t,$outline:o,$highlight:i,type:s},a,{children:n}))})),ys=p.div`
    background: ${nn["bg-strong"]};
    border-radius: ${dn.sm};
    display: flex;
    align-items: center;

    ${e=>"small"===e.$variant?on["body-md-regular"]:on["body-baseline-regular"]}
`,vs=p.label`
    flex: 1;
    display: flex;
    align-items: center;
    gap: ${ln["spacing-8"]};
    padding: ${e=>"small"===e.$variant?f`
                  ${ln["spacing-8"]} ${ln["spacing-16"]}
              `:f`10px ${ln["spacing-16"]}`};
`,xs=p(gs)`
    flex: 1;
`,ws=p(C)`
    color: ${nn.icon};
    flex-shrink: 0;
    height: 1em;
    width: 1em;
`,Fs=p(fs)`
    flex-shrink: 0;
    align-self: stretch;
    box-sizing: content-box;
    padding: ${ln["spacing-8"]};
    margin-left: -${ln["spacing-8"]};
    color: ${nn.icon};
    cursor: pointer;
    font-size: inherit;

    svg {
        flex-shrink: 0;
        height: 1em;
        width: 1em;
    }
`;b(((t,n)=>{var{value:i,variant:o,onClear:s}=t,a=V(t,["value","variant","onClear"]);return e(ys,{$variant:o,children:[e(vs,{$variant:o,children:[r(ws,{"aria-hidden":!0}),r(xs,Object.assign({ref:n,value:i,$variant:o},a))]}),i&&r(Fs,{"aria-label":"Clear search",focusOutline:"browser",onClick:s,children:r(D,{"aria-hidden":!0})})]})}));const $s=p(bs)`
    display: flex;
    align-items: center;
    gap: ${ln["spacing-8"]};
    width: 100%;
    height: calc(3rem - 2px); // exclude top and bottom borders
    padding: ${ln["spacing-16"]};

    ${e=>"small"===e.$variant?on["body-md-regular"]:on["body-baseline-regular"]}

    :disabled {
        cursor: not-allowed;
    }
`,Es=p.div`
    display: flex;
    align-items: center;
    transform: rotate(${e=>e.$expanded?180:0}deg);
    transition: transform ${sn["duration-250"]} ${sn["ease-default"]};

    svg {
        color: ${nn.icon};
        height: 1em;
        width: 1em;
    }
`,Ds=b((({children:t,disabled:n,expanded:i,listboxId:o,popupRole:s,readOnly:a,variant:l},d)=>e($s,{ref:d,type:"button","aria-expanded":i,"aria-haspopup":s,"data-testid":"selector",disabled:n,"aria-controls":o,$variant:l,children:[t,!a&&r(Es,{$expanded:i,$variant:l,children:r(B,{"aria-hidden":!0})})]}))),Cs={collections:{default:{Button:{"button-radius":Qt.sm,"button-default-colour-bg":Mt["bg-primary"],"button-default-colour-bg-hover":Mt["bg-primary-hover"],"button-default-colour-text":Mt["text-inverse"],"button-secondary-colour-border":Mt["border-primary"],"button-secondary-colour-text":Mt["text-primary"],"button-light-colour-text":Mt["text-primary"],"button-link-colour-text":Mt["text-primary"]}},pa:{Button:{"button-radius":Qt.full,"button-default-colour-bg":Mt["bg-primary"],"button-default-colour-bg-hover":Mt["bg-primary-hover"],"button-default-colour-text":Mt["text-inverse"],"button-secondary-colour-border":Mt["border-primary"],"button-secondary-colour-text":Mt["text-primary"],"button-light-colour-text":Mt["text-primary"],"button-link-colour-text":Mt["text-primary"]}}},defaultValue:"default"},Bs=(e,r)=>t=>{var n,i;const o=t.theme,s=yt(Cs,null==o?void 0:o.componentScheme);return As((null===(i=null===(n=null==o?void 0:o.componentOverrides)||void 0===n?void 0:n[e])||void 0===i?void 0:i[r])||s[e][r],t)},As=(e,r)=>{switch(typeof e){case"function":return e(r);case"number":return e+"px";case"string":return e}},Ms=Bs("Button","button-radius"),ks=Bs("Button","button-default-colour-bg"),zs=Bs("Button","button-default-colour-bg-hover"),Os=Bs("Button","button-default-colour-text"),Ss=Bs("Button","button-secondary-colour-border"),_s=Bs("Button","button-secondary-colour-text"),Ts=Bs("Button","button-light-colour-text"),Ls=Bs("Button","button-link-colour-text");p.button`
    padding: ${ln["spacing-8"]} ${ln["spacing-16"]};
    min-width: 4rem;
    border: ${an["width-010"]} ${an.solid} transparent;
    transition: all ${sn["duration-250"]} ${sn["ease-default"]};
    border-radius: ${Ms};
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;

    // -----------------------------------------------------------------------------
    // BUTTON STYLE + TEXT COLOR
    // -----------------------------------------------------------------------------
    ${e=>{switch(e.$buttonStyle){case"secondary":return f`
                    background-color: ${nn.Primitive.white};
                    border-color: ${e.$buttonIsDanger?nn["border-error-strong"]:Ss};

                    color: ${e.$buttonIsDanger?nn["text-error"]:_s};

                    &:hover,
                    &:active {
                        background-color: ${nn["bg-hover-neutral"]};
                    }
                `;case"light":return f`
                    background-color: ${nn.bg};
                    border-color: ${nn.border};

                    color: ${e.$buttonIsDanger?nn["text-error"]:Ts};

                    &:hover,
                    &:active {
                        background-color: ${nn["bg-hover-neutral"]};
                    }
                `;case"link":return f`
                    background-color: transparent;

                    color: ${e.$buttonIsDanger?nn["text-error"]:Ls};
                    &:hover,
                    &:active {
                        background-color: ${nn["bg-hover-neutral"]};
                    }
                `;case"disabled":return f`
                    background-color: ${nn["bg-disabled"]};

                    cursor: not-allowed;

                    &:hover {
                        box-shadow: none;
                    }

                    color: ${nn["text-disabled"]};
                `;default:return f`
                    background-color: ${e.$buttonIsDanger?nn["bg-error-strong"]:ks};};

                    ${un.MaxWidth.sm} {
                        width: 100%;
                    }

                    color: ${Os}};

                    &:hover,
                    &:active {
                        background-color: ${e.$buttonIsDanger?nn["bg-error-strong-hover"]:zs}
                        };
                    }
                `}}}

    // -----------------------------------------------------------------------------
	// BUTTON SIZE + TEXT SIZE
	// -----------------------------------------------------------------------------
	${e=>{switch(e.$buttonSizeStyle){case"small":return f`
                    height: 2.5rem;
                    ${on["body-md-semibold"]}

                    ${un.MaxWidth.xxs} {
                        height: auto;
                    }
                `;case"large":return f`
                    height: 4rem;
                    ${on["heading-md-semibold"]}

                    ${un.MaxWidth.xxs} {
                        height: auto;
                    }
                `;default:return f`
                    height: 3rem;
                    ${on["heading-xs-semibold"]}

                    ${un.MaxWidth.xxs} {
                        height: auto;
                    }
                `}}}
`,p(as)`
    margin-right: 0.5rem;
`,p.li`
    display: ${e=>e.$visible?"flex":"none"};
`,p.div`
    flex: 1;
    display: flex;
    align-items: flex-start;
    gap: ${ln["spacing-8"]};
    padding: ${ln["spacing-12"]} ${ln["spacing-8"]};
    cursor: ${e=>e.$toggleable?"default":"pointer"};
    overflow: hidden; // required for label to truncate properly

    outline: none;

    ${e=>e.$active&&f`
            background: ${nn["bg-hover"]};
        `}
`,p.div`
    height: 1px;
    width: calc((1lh + ${ln["spacing-8"]}) * ${e=>e.$level});
`,p.div`
    width: 1lh;
    height: 1lh;
    color: ${nn["icon-primary"]};
    cursor: pointer;

    svg {
        width: 1lh;
        height: 1lh;
        transition: transform ${sn["duration-350"]}
            ${sn["ease-standard"]};

        ${e=>{if(e.$expanded)return f`
                    transform: rotate(90deg);
                `}}
    }
`,p.div`
    width: 1lh;
    height: 1lh;
    margin-right: ${ln["spacing-8"]};
`,p.div`
    flex-shrink: 0;
    height: 1lh;
    width: ${e=>e.$hasNestedSiblings?"1lh":ln["spacing-16"]};

    display: flex;
    justify-content: center;
`,p(A)`
    flex-shrink: 0;
    height: 1lh;
    width: 1lh;
    color: ${nn["icon-selected"]};
`;const js=e=>"small"===e?2.5:3;p.div`
    position: relative;
    width: 100%;
    ${e=>{const r=js(e.$variant);return f`
            min-height: ${r}rem;
            height: ${r}rem; // Need this to persist the height when expanding or collapsing list
        `}}
`;const Ys=f`
    display: flex;
    position: relative;
    align-items: center;
    justify-content: space-between;
    padding: 0 ${ln["spacing-16"]};
    // exclude top and bottom borders
    height: calc(${e=>js(e.$variant)}rem - 2px);
    width: 100%;
    border-radius: ${dn.sm};
    border: none;
    background: transparent;

    :focus,
    :active {
        outline: none;
    }

    :focus-visible {
        outline: 2px solid ${nn["border-focus"]};
    }
`,Ps=p.button`
    ${Ys}
    cursor: pointer;
`;p.div`
    ${Ys}
`;const Rs=y`
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
    border: ${an["width-010"]} ${an.solid} ${nn.border};
    border-radius: ${dn.sm};
    background: ${nn.bg};
    overflow: hidden;

    :focus-within {
        border-color: ${nn["border-focus"]};
        box-shadow: 0px 0px 4px 0px
            rgb(from ${nn["border-focus"]} r g b / 50%) inset; // TODO: confirm shadow
    }

    ${e=>e.expanded?f`
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                z-index: 2;
            `:f`
                animation: ${Rs} 0.5s ease-in-out;
            `}

    ${e=>e.disabled?f`
                background: ${nn["bg-disabled"]};

                ${Ps} {
                    cursor: not-allowed;
                }

                :focus-within {
                    border-color: ${nn.border};
                    box-shadow: none;
                }
            `:e.$readOnly?f`
                border: none;
                background: transparent !important;

                ${Ps} {
                    padding: 0;
                }

                :focus-within {
                    border: none;
                    box-shadow: none;
                }
            `:e.error?f`
                border-color: ${nn["border-error"]};

                :focus-within {
                    border-color: ${nn["border-error"]};
                    box-shadow: 0px 0px 4px 0px
                        rgb(from ${nn["border-error"]} r g b / 50%) inset; // TODO: confirm shadow
                }
            `:void 0}
`,p.div`
    transform: rotate(${e=>e.expanded?180:0}deg);
    transition: transform ${sn["duration-250"]} ${sn["ease-default"]};
    margin-left: ${ln["spacing-16"]};
`,p(B)`
    color: ${nn.icon};
`,p.div`
    height: 1px;
    background: ${nn.border};
    margin: 0 ${ln["spacing-8"]};
`;const Is=p.div`
    display: flex;
    flex: 1;
    word-break: break-all;
    ${e=>{if(e.$disabled)return f`
                color: ${nn["text-disabled"]};
            `}}
`,Hs=p.div`
    ${e=>"small"===e.$variant?on["body-md-regular"]:on["body-baseline-regular"]}
    text-align: left;
    ${e=>{if("middle"!==e.truncateType)return f`
                    ${hn(1)}
                `}}
    overflow: hidden;
`;var Ws;p(Hs)`
    color: ${nn["text-subtler"]};
`,function(e){e.Ready="overlay-context-ready",e.Change="overlay-context-change"}(Ws||(Ws={}));const Vs=p.div`
    display: flex;
    flex-direction: column;
`,Ns=e=>"right"===e?"bottom-end":"bottom-start",Ks=({enabled:n,isOpen:i,onOpen:a,onClose:d,onDismiss:c,renderElement:u,renderDropdown:h,customZIndex:g,clickToToggle:b=!1,offset:m=0,alignment:p="left",fitAvailableHeight:f})=>{var y;const x=v(),w=cn["sm-max"]({theme:x}),F=l(null),$=l(null),{width:E=0}=function(e){void 0===e&&(e={});var r=e.skipOnMount,t=void 0!==r&&r,n=e.refreshMode,i=e.refreshRate,s=void 0===i?1e3:i,a=e.refreshOptions,d=e.handleWidth,c=void 0===d||d,u=e.handleHeight,h=void 0===u||u,g=e.targetRef,b=e.observerOptions,m=e.onResize,p=l(t),f=l(null),y=null!=g?g:f,v=l(),x=o({width:void 0,height:void 0}),w=x[0],F=x[1];return Ti((function(){if(!zi()){var e=Si(m,F,c,h);v.current=Mi((function(r){(c||h)&&r.forEach((function(r){var t=r&&r.contentRect||{},n=t.width,i=t.height;!p.current&&!zi()&&e({width:n,height:i}),p.current=!1}))}),n,s,a);var r=new window.ResizeObserver(v.current);return y.current&&r.observe(y.current,b),function(){r.disconnect();var e=v.current;e&&e.cancel&&e.cancel()}}}),[n,s,a,c,h,m,b,y.current]),Hn({ref:y},w)}({targetRef:F,handleHeight:!1}),D={name:"center",fn:({x:e,rects:r})=>{const t=0===e||e+r.floating.width===window.innerWidth,n=window.innerWidth<w;return{x:t&&n?(window.innerWidth-r.floating.width)/2:e}}},{refs:C,floatingStyles:B,context:A}=k({open:i,onOpenChange:(e,r,t)=>{"escape-key"===t?null==c||c():e&&!i?null==a||a():!e&&i&&(null==d||d(t))},whileElementsMounted:z,placement:Ns(p),middleware:[O(m),S(),_({limiter:T()}),L({apply({availableHeight:e}){$.current&&Object.assign($.current.style,{maxHeight:f?`${e}px`:void 0,overflowY:f?"hidden":void 0})}}),D]}),W=(()=>{const[e,r]=o(void 0),t=M();return s((()=>{if(!t)return void r(void 0);const e=e=>{r(e.zIndex)};return t.events.on(Ws.Change,e),t.events.emit(Ws.Ready),()=>t.events.off(Ws.Change,e)}),[t]),e})(),{isMounted:V,styles:N}=j(A,{initial:{opacity:0},open:{opacity:1},duration:300}),K=Y(A,{enabled:n,toggle:b}),U=P(A,{enabled:n}),{getReferenceProps:Z,getFloatingProps:X}=R([K,U]);return e(t,{children:[r("div",Object.assign({ref:e=>{F.current=e,C.setReference(e)}},Z(),{children:u()})),V&&r(I,{children:r(H,{context:A,modal:!1,initialFocus:$,returnFocus:!1,children:r("div",Object.assign({ref:C.setFloating,style:Object.assign(Object.assign({},B),{zIndex:null!==(y=null!=g?g:W)&&void 0!==y?y:50})},X(),{children:r(Vs,{ref:$,style:Object.assign({},N),inert:N.opacity<1?"":void 0,children:h({elementWidth:E})})}))})})]})},Us=p.div`
    overflow: hidden;
    border: ${an["width-010"]} ${an.solid} ${nn.border};
    border-radius: ${dn.sm};
    background: ${nn.bg};
    padding: ${ln["spacing-16"]};
    min-width: 23rem;

    ${un.MaxWidth.sm} {
        min-width: unset;
        width: calc(100vw - ${cn["sm-margin"]} * 2);
        max-height: 15rem;
    }

    ${un.MaxWidth.xs} {
        width: calc(100vw - ${cn["xs-margin"]} * 2);
    }

    ${un.MaxWidth.xxs} {
        width: calc(100vw - ${cn["xxs-margin"]} * 2);
    }
`,Zs=p.div`
    display: flex;
    align-items: baseline;
`,Xs=p.div`
    margin: 0 0.5rem;
`,qs=p.div`
    ${e=>"small"===e.$variant?on["body-md-regular"]:on["body-baseline-regular"]}
    text-align: left;
    ${e=>{if("middle"!==e.truncateType)return f`
                    ${hn(1)}
                `}}
    overflow: hidden;
`,Js=p(qs)`
    color: ${nn["text-subtler"]};
`,Gs=t=>{var{alignment:n="left",className:i,disabled:a,dropdownZIndex:d,error:c,histogramSlider:u,id:h,onBlur:g,onChange:b,onChangeEnd:m,optionTruncationType:p="end",placeholder:f="Select",rangeLabelPrefix:y,rangeLabelSuffix:v,readOnly:x,renderRangeLabel:w,value:F}=t,$=V(t,["alignment","className","disabled","dropdownZIndex","error","histogramSlider","id","onBlur","onChange","onChangeEnd","optionTruncationType","placeholder","rangeLabelPrefix","rangeLabelSuffix","readOnly","renderRangeLabel","value"]);const{interval:E,bins:D=[],renderEmptyView:C,ariaLabels:B}=u,[A,M]=o(K()),[k,z]=o(!1),[O,S]=o(!1),[_]=o((()=>Go.generate())),T=D.map((e=>e.minValue)),L=Math.min(...T),j=l(null),Y=l(null),P=l(null),R=$["data-testid"]||"select-histogram";s((()=>{F!==A&&M(K())}),[F]);const I=e=>{M(e),null==b||b(e)},H=e=>{M(e),null==m||m(e)},W=()=>{O||k||S(!0)},N=e=>{O&&!k&&j.current&&!j.current.contains(e.relatedTarget)&&(S(!1),null==g||g())};function K(){return null!=F?F:[L,L+E]}const U=r=>w?w(r):e(pn.BodyBL,{children:[y,r,v]});return r(es,{children:r(Ks,{enabled:!x&&!a,isOpen:k,renderElement:()=>r(hs,{className:i,"data-testid":R,id:h,ref:j,tabIndex:-1,onFocus:W,onBlur:N,$focused:O,$disabled:a,$readOnly:x,$error:c,children:r(Ds,{ref:Y,disabled:a,expanded:k,listboxId:_,popupRole:"dialog",readOnly:x,variant:"default",children:r(Is,{ref:P,$disabled:a,children:T&&0!==T.length?e(Zs,{children:[U(A[0]),r(Xs,{children:"-"}),U(A[1])]}):r(Js,{truncateType:p,$variant:"default",children:f})})})}),renderDropdown:({elementWidth:e})=>r(Us,{style:{width:e},children:r(Rn,{interval:E,value:A,bins:D,onChange:I,onChangeEnd:H,showRangeLabels:!1,renderEmptyView:C,ariaLabels:B})}),onOpen:()=>{z(!0)},onClose:()=>{z(!1)},onDismiss:()=>{var e;null===(e=Y.current)||void 0===e||e.focus(),z(!1)},clickToToggle:!0,offset:8,alignment:n,fitAvailableHeight:!0,customZIndex:d})})};export{Gs as SelectHistogram};
//# sourceMappingURL=index.js.map
