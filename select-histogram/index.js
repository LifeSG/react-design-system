import{jsxs as e,jsx as r,Fragment as n}from"react/jsx-runtime";import*as t from"react";import i,{useState as o,useEffect as s,useMemo as a,useRef as l,isValidElement as d,createRef as c,cloneElement as u,PureComponent as g,useLayoutEffect as h,forwardRef as b,version as m}from"react";import{ExternalIcon as p}from"@lifesg/react-icons/external";import f,{css as y,keyframes as v,useTheme as x}from"styled-components";import{ExclamationCircleFillIcon as F}from"@lifesg/react-icons/exclamation-circle-fill";import{SquareIcon as w}from"@lifesg/react-icons/square";import{SquareFillIcon as $}from"@lifesg/react-icons/square-fill";import{SquareTickFillIcon as E}from"@lifesg/react-icons/square-tick-fill";import{TickIcon as D}from"@lifesg/react-icons/tick";import{CrossIcon as C}from"@lifesg/react-icons/cross";import{MagnifierIcon as B}from"@lifesg/react-icons/magnifier";import{ChevronDownIcon as S}from"@lifesg/react-icons/chevron-down";import"@lifesg/react-icons/caret-right";import{MinusSquareFillIcon as k}from"@lifesg/react-icons/minus-square-fill";import{useFloatingTree as A,useFloating as z,autoUpdate as M,offset as O,flip as _,shift as T,limitShift as L,size as j,useTransitionStyles as R,useClick as Y,useDismiss as P,useInteractions as I,FloatingPortal as H,FloatingFocusManager as N}from"@floating-ui/react";import{findDOMNode as W}from"react-dom";function V(e,r){var n={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&r.indexOf(t)<0&&(n[t]=e[t]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(t=Object.getOwnPropertySymbols(e);i<t.length;i++)r.indexOf(t[i])<0&&Object.prototype.propertyIsEnumerable.call(e,t[i])&&(n[t[i]]=e[t[i]])}return n}"function"==typeof SuppressedError&&SuppressedError;var K="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};function U(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Z=Array.isArray,X="object"==typeof K&&K&&K.Object===Object&&K,q=X,J="object"==typeof self&&self&&self.Object===Object&&self,G=q||J||Function("return this")(),Q=G.Symbol,ee=Q,re=Object.prototype,ne=re.hasOwnProperty,te=re.toString,ie=ee?ee.toStringTag:void 0;var oe=function(e){var r=ne.call(e,ie),n=e[ie];try{e[ie]=void 0;var t=!0}catch(e){}var i=te.call(e);return t&&(r?e[ie]=n:delete e[ie]),i},se=Object.prototype.toString;var ae=oe,le=function(e){return se.call(e)},de=Q?Q.toStringTag:void 0;var ce=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":de&&de in Object(e)?ae(e):le(e)};var ue=function(e){return null!=e&&"object"==typeof e},ge=ce,he=ue;var be=function(e){return"symbol"==typeof e||he(e)&&"[object Symbol]"==ge(e)},me=Z,pe=be,fe=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,ye=/^\w*$/;var ve=function(e,r){if(me(e))return!1;var n=typeof e;return!("number"!=n&&"symbol"!=n&&"boolean"!=n&&null!=e&&!pe(e))||(ye.test(e)||!fe.test(e)||null!=r&&e in Object(r))};var xe=function(e){var r=typeof e;return null!=e&&("object"==r||"function"==r)},Fe=ce,we=xe;var $e,Ee=function(e){if(!we(e))return!1;var r=Fe(e);return"[object Function]"==r||"[object GeneratorFunction]"==r||"[object AsyncFunction]"==r||"[object Proxy]"==r},De=G["__core-js_shared__"],Ce=($e=/[^.]+$/.exec(De&&De.keys&&De.keys.IE_PROTO||""))?"Symbol(src)_1."+$e:"";var Be=function(e){return!!Ce&&Ce in e},Se=Function.prototype.toString;var ke=function(e){if(null!=e){try{return Se.call(e)}catch(e){}try{return e+""}catch(e){}}return""},Ae=Ee,ze=Be,Me=xe,Oe=ke,_e=/^\[object .+?Constructor\]$/,Te=Function.prototype,Le=Object.prototype,je=Te.toString,Re=Le.hasOwnProperty,Ye=RegExp("^"+je.call(Re).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");var Pe=function(e,r){return null==e?void 0:e[r]},Ie=function(e){return!(!Me(e)||ze(e))&&(Ae(e)?Ye:_e).test(Oe(e))},He=Pe;var Ne=function(e,r){var n=He(e,r);return Ie(n)?n:void 0},We=Ne(Object,"create"),Ve=We;var Ke=function(){this.__data__=Ve?Ve(null):{},this.size=0};var Ue=function(e){var r=this.has(e)&&delete this.__data__[e];return this.size-=r?1:0,r},Ze=We,Xe=Object.prototype.hasOwnProperty;var qe=function(e){var r=this.__data__;if(Ze){var n=r[e];return"__lodash_hash_undefined__"===n?void 0:n}return Xe.call(r,e)?r[e]:void 0},Je=We,Ge=Object.prototype.hasOwnProperty;var Qe=function(e){var r=this.__data__;return Je?void 0!==r[e]:Ge.call(r,e)},er=We;var rr=function(e,r){var n=this.__data__;return this.size+=this.has(e)?0:1,n[e]=er&&void 0===r?"__lodash_hash_undefined__":r,this},nr=Ke,tr=Ue,ir=qe,or=Qe,sr=rr;function ar(e){var r=-1,n=null==e?0:e.length;for(this.clear();++r<n;){var t=e[r];this.set(t[0],t[1])}}ar.prototype.clear=nr,ar.prototype.delete=tr,ar.prototype.get=ir,ar.prototype.has=or,ar.prototype.set=sr;var lr=ar;var dr=function(){this.__data__=[],this.size=0};var cr=function(e,r){return e===r||e!=e&&r!=r};var ur=function(e,r){for(var n=e.length;n--;)if(cr(e[n][0],r))return n;return-1},gr=ur,hr=Array.prototype.splice;var br=function(e){var r=this.__data__,n=gr(r,e);return!(n<0)&&(n==r.length-1?r.pop():hr.call(r,n,1),--this.size,!0)},mr=ur;var pr=function(e){var r=this.__data__,n=mr(r,e);return n<0?void 0:r[n][1]},fr=ur;var yr=function(e){return fr(this.__data__,e)>-1},vr=ur;var xr=function(e,r){var n=this.__data__,t=vr(n,e);return t<0?(++this.size,n.push([e,r])):n[t][1]=r,this},Fr=dr,wr=br,$r=pr,Er=yr,Dr=xr;function Cr(e){var r=-1,n=null==e?0:e.length;for(this.clear();++r<n;){var t=e[r];this.set(t[0],t[1])}}Cr.prototype.clear=Fr,Cr.prototype.delete=wr,Cr.prototype.get=$r,Cr.prototype.has=Er,Cr.prototype.set=Dr;var Br=Cr,Sr=Ne(G,"Map"),kr=lr,Ar=Br,zr=Sr;var Mr=function(e){var r=typeof e;return"string"==r||"number"==r||"symbol"==r||"boolean"==r?"__proto__"!==e:null===e};var Or=function(e,r){var n=e.__data__;return Mr(r)?n["string"==typeof r?"string":"hash"]:n.map},_r=Or;var Tr=function(e){var r=_r(this,e).delete(e);return this.size-=r?1:0,r},Lr=Or;var jr=function(e){return Lr(this,e).get(e)},Rr=Or;var Yr=function(e){return Rr(this,e).has(e)},Pr=Or;var Ir=function(e,r){var n=Pr(this,e),t=n.size;return n.set(e,r),this.size+=n.size==t?0:1,this},Hr=function(){this.size=0,this.__data__={hash:new kr,map:new(zr||Ar),string:new kr}},Nr=Tr,Wr=jr,Vr=Yr,Kr=Ir;function Ur(e){var r=-1,n=null==e?0:e.length;for(this.clear();++r<n;){var t=e[r];this.set(t[0],t[1])}}Ur.prototype.clear=Hr,Ur.prototype.delete=Nr,Ur.prototype.get=Wr,Ur.prototype.has=Vr,Ur.prototype.set=Kr;var Zr=Ur,Xr=Zr;function qr(e,r){if("function"!=typeof e||null!=r&&"function"!=typeof r)throw new TypeError("Expected a function");var n=function(){var t=arguments,i=r?r.apply(this,t):t[0],o=n.cache;if(o.has(i))return o.get(i);var s=e.apply(this,t);return n.cache=o.set(i,s)||o,s};return n.cache=new(qr.Cache||Xr),n}qr.Cache=Xr;var Jr=qr;var Gr=function(e){var r=Jr(e,(function(e){return 500===n.size&&n.clear(),e})),n=r.cache;return r},Qr=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,en=/\\(\\)?/g,rn=Gr((function(e){var r=[];return 46===e.charCodeAt(0)&&r.push(""),e.replace(Qr,(function(e,n,t,i){r.push(t?i.replace(en,"$1"):n||e)})),r}));var nn=function(e,r){for(var n=-1,t=null==e?0:e.length,i=Array(t);++n<t;)i[n]=r(e[n],n,e);return i},tn=Z,on=be,sn=Q?Q.prototype:void 0,an=sn?sn.toString:void 0;var ln=function e(r){if("string"==typeof r)return r;if(tn(r))return nn(r,e)+"";if(on(r))return an?an.call(r):"";var n=r+"";return"0"==n&&1/r==-1/0?"-0":n},dn=ln;var cn=Z,un=ve,gn=rn,hn=function(e){return null==e?"":dn(e)};var bn=be;var mn=function(e,r){return cn(e)?e:un(e,r)?[e]:gn(hn(e))},pn=function(e){if("string"==typeof e||bn(e))return e;var r=e+"";return"0"==r&&1/e==-1/0?"-0":r};var fn=function(e,r){for(var n=0,t=(r=mn(r,e)).length;null!=e&&n<t;)e=e[pn(r[n++])];return n&&n==t?e:void 0};var yn=U((function(e,r,n){var t=null==e?void 0:fn(e,r);return void 0===t?n:t}));const vn=(e,r,n)=>yn(n,r)||yn(e,r),xn=(e,r)=>{const n=r||e.defaultValue;return yn(e.collections,n)},Fn={collections:{default:{"width-005":.5,"width-010":1,"width-020":2,"width-040":4,solid:"solid"}},defaultValue:"default"},wn=e=>r=>{var n;const t=r.theme,i=xn(Fn,null==t?void 0:t.borderScheme);return(null===(n=null==t?void 0:t.overrides)||void 0===n?void 0:n.border)?`${vn(i,e,t.overrides.border)}px`:`${i[e]}px`},$n={"width-005":wn("width-005"),"width-010":wn("width-010"),"width-020":wn("width-020"),"width-040":wn("width-040"),solid:(En="solid",e=>{var r;const n=e.theme,t=xn(Fn,null==n?void 0:n.borderScheme),i=(null===(r=null==n?void 0:n.overrides)||void 0===r?void 0:r.border)?vn(t,En,n.overrides.border):t[En];return"function"==typeof i?i(e):i})};var En;const Dn={"brand-10":"#2C0C0B","brand-20":"#4C1513","brand-30":"#6C1D1B","brand-40":"#922825","brand-50":"#BF3431","brand-60":"#F15D5A","brand-70":"#F69491","brand-80":"#FABAB7","brand-90":"#FCD7D2","brand-95":"#FFEBE7","brand-100":"#FFF6F4","primary-10":"#1A122C","primary-20":"#2F1F4D","primary-30":"#422D6E","primary-40":"#5B3D97","primary-50":"#7654BC","primary-60":"#9A82CD","primary-70":"#B7A7D8","primary-80":"#CFC5E5","primary-90":"#E3DDF0","primary-95":"#F0EDF7","primary-100":"#F9F8FC","secondary-10":"#0E1723","secondary-20":"#18293D","secondary-30":"#233A57","secondary-40":"#305078","secondary-50":"#4B6A8F","secondary-60":"#7B91A9","secondary-70":"#A1B1C3","secondary-80":"#C1CBD7","secondary-90":"#DBE1E8","secondary-95":"#EBEFF2","secondary-100":"#F7F8FA","neutral-10":"#161616","neutral-20":"#282828","neutral-30":"#393939","neutral-40":"#4E4E4E","neutral-50":"#686868","neutral-60":"#8E8E8E","neutral-70":"#AFAFB0","neutral-80":"#C7CACA","neutral-90":"#DDE1E2","neutral-95":"#EDEFEF","neutral-100":"#F9F9F9","success-10":"#081A0F","success-20":"#0E2D1B","success-30":"#154126","success-40":"#1C5A34","success-50":"#257645","success-60":"#44A068","success-70":"#64C189","success-80":"#80DCA5","success-90":"#B4ECCB","success-95":"#D5F6E2","success-100":"#EFFCF4","warning-10":"#221302","warning-20":"#3B2204","warning-30":"#543106","warning-40":"#744408","warning-50":"#98590C","warning-60":"#D07A13","warning-70":"#E4A244","warning-80":"#F5C26C","warning-90":"#FADBA6","warning-95":"#FCECD4","warning-100":"#FDF7F0","error-10":"#330505","error-20":"#550808","error-30":"#750C0C","error-40":"#9E130F","error-50":"#CB2213","error-60":"#DE6C6C","error-70":"#E89B9B","error-80":"#EFBEBE","error-90":"#F5D9D9","error-95":"#F9ECEC","error-100":"#FCF7F7","info-10":"#021824","info-20":"#032B3F","info-30":"#053D59","info-40":"#065478","info-50":"#176E9B","info-60":"#5296BE","info-70":"#82B5DA","info-80":"#ACCFE7","info-90":"#CCE3F1","info-95":"#E3F1F8","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000","primary-inverse":"#FEAB10"},Cn={"brand-10":"#1F1221","brand-20":"#371F3B","brand-30":"#4E2C53","brand-40":"#6B3E73","brand-50":"#8D5197","brand-60":"#FF3399","brand-70":"#FF88C4","brand-80":"#FFB3D9","brand-90":"#FFD4E9","brand-95":"#FFE8F3","brand-100":"#FFD6EB","primary-10":"#1F1221","primary-20":"#371F3B","primary-30":"#4E2C53","primary-40":"#6B3E73","primary-50":"#8D5197","primary-60":"#B07DB7","primary-70":"#C7A3CC","primary-80":"#D9C2DD","primary-90":"#E9DBEB","primary-95":"#F3ECF4","primary-100":"#FAF7FA","secondary-10":"#2D091B","secondary-20":"#4D0F2E","secondary-30":"#6B1540","secondary-40":"#931D58","secondary-50":"#C02673","secondary-60":"#FF409F","secondary-70":"#FF88C4","secondary-80":"#FFB3D9","secondary-90":"#FFD4E9","secondary-95":"#FFE8F3","secondary-100":"#FFF8FC","neutral-10":"#161616","neutral-20":"#282828","neutral-30":"#393939","neutral-40":"#4E4E4E","neutral-50":"#686868","neutral-60":"#8E8E8E","neutral-70":"#AFAFB0","neutral-80":"#C7CACA","neutral-90":"#DDE1E2","neutral-95":"#EDEFEF","neutral-100":"#F9F9F9","success-10":"#081A0F","success-20":"#0E2D1B","success-30":"#154126","success-40":"#1C5A34","success-50":"#257645","success-60":"#44A068","success-70":"#64C189","success-80":"#80DCA5","success-90":"#B4ECCB","success-95":"#D5F6E2","success-100":"#EFFCF4","warning-10":"#221302","warning-20":"#3B2204","warning-30":"#543106","warning-40":"#744408","warning-50":"#98590C","warning-60":"#D07A13","warning-70":"#E4A244","warning-80":"#F5C26C","warning-90":"#FADBA6","warning-95":"#FCECD4","warning-100":"#FDF7F0","error-10":"#330505","error-20":"#550808","error-30":"#750C0C","error-40":"#9E130F","error-50":"#CB2213","error-60":"#DE6C6C","error-70":"#E89B9B","error-80":"#EFBEBE","error-90":"#F5D9D9","error-95":"#F9ECEC","error-100":"#FCF7F7","info-10":"#021824","info-20":"#032B3F","info-30":"#053D59","info-40":"#065478","info-50":"#176E9B","info-60":"#5296BE","info-70":"#82B5DA","info-80":"#ACCFE7","info-90":"#CCE3F1","info-95":"#E3F1F8","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000","primary-inverse":"#FEAB10"},Bn={"brand-10":"#2C0C0B","brand-20":"#4C1513","brand-30":"#6C1D1B","brand-40":"#922825","brand-50":"#BF3431","brand-60":"#F15D5A","brand-70":"#F69491","brand-80":"#FABAB7","brand-90":"#FCD7D2","brand-95":"#FFEBE7","brand-100":"#FFF6F4","primary-10":"#001731","primary-20":"#002752","primary-30":"#003874","primary-40":"#004D9F","primary-50":"#1768BE","primary-60":"#3C91EC","primary-70":"#6CB4FF","primary-80":"#A5CDFF","primary-90":"#CFE1FE","primary-95":"#E8F0FE","primary-100":"#F7F9FF","secondary-10":"#131529","secondary-20":"#222547","secondary-30":"#2F3565","secondary-40":"#42498B","secondary-50":"#5B62A7","secondary-60":"#858CBD","secondary-70":"#A8ADCF","secondary-80":"#C6C9E0","secondary-90":"#DDDFEC","secondary-95":"#EDEEF5","secondary-100":"#F8F8FB","neutral-10":"#161616","neutral-20":"#282828","neutral-30":"#393939","neutral-40":"#4E4E4E","neutral-50":"#686868","neutral-60":"#8E8E8E","neutral-70":"#AFAFB0","neutral-80":"#C7CACA","neutral-90":"#DDE1E2","neutral-95":"#EDEFEF","neutral-100":"#F9F9F9","success-10":"#081A0F","success-20":"#0E2D1B","success-30":"#154126","success-40":"#1C5A34","success-50":"#257645","success-60":"#44A068","success-70":"#64C189","success-80":"#80DCA5","success-90":"#B4ECCB","success-95":"#D5F6E2","success-100":"#EFFCF4","warning-10":"#221302","warning-20":"#3B2204","warning-30":"#543106","warning-40":"#744408","warning-50":"#98590C","warning-60":"#D07A13","warning-70":"#E4A244","warning-80":"#F5C26C","warning-90":"#FADBA6","warning-95":"#FCECD4","warning-100":"#FDF7F0","error-10":"#330505","error-20":"#550808","error-30":"#750C0C","error-40":"#9E130F","error-50":"#CB2213","error-60":"#DE6C6C","error-70":"#E89B9B","error-80":"#EFBEBE","error-90":"#F5D9D9","error-95":"#F9ECEC","error-100":"#FCF7F7","info-10":"#021824","info-20":"#032B3F","info-30":"#053D59","info-40":"#065478","info-50":"#176E9B","info-60":"#5296BE","info-70":"#82B5DA","info-80":"#ACCFE7","info-90":"#CCE3F1","info-95":"#E3F1F8","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000","primary-inverse":"#FEAB10"},Sn={"brand-10":"#2C0C0B","brand-20":"#4C1513","brand-30":"#6C1D1B","brand-40":"#922825","brand-50":"#BF3431","brand-60":"#F15D5A","brand-70":"#F69491","brand-80":"#FABAB7","brand-90":"#FCD7D2","brand-95":"#FFEBE7","brand-100":"#FFF6F4","primary-10":"#0011924","primary-20":"#032B40","primary-30":"#043D5A","primary-40":"#05547B","primary-50":"#096EA1","primary-60":"#2098D3","primary-70":"#5CB9E8","primary-80":"#8BD3F6","primary-90":"#BEE6FA","primary-95":"#E2F2FA","primary-100":"#F4FAFC","secondary-10":"#131529","secondary-20":"#222547","secondary-30":"#2F3565","secondary-40":"#42498B","secondary-50":"#5B62A7","secondary-60":"#858CBD","secondary-70":"#A8ADCF","secondary-80":"#C6C9E0","secondary-90":"#DDDFEC","secondary-95":"#EDEEF5","secondary-100":"#F8F8FB","neutral-10":"#161616","neutral-20":"#282828","neutral-30":"#393939","neutral-40":"#4E4E4E","neutral-50":"#686868","neutral-60":"#8E8E8E","neutral-70":"#AFAFB0","neutral-80":"#C7CACA","neutral-90":"#DDE1E2","neutral-95":"#EDEFEF","neutral-100":"#F9F9F9","success-10":"#081A0F","success-20":"#0E2D1B","success-30":"#154126","success-40":"#1C5A34","success-50":"#257645","success-60":"#44A068","success-70":"#64C189","success-80":"#80DCA5","success-90":"#B4ECCB","success-95":"#D5F6E2","success-100":"#EFFCF4","warning-10":"#221302","warning-20":"#3B2204","warning-30":"#543106","warning-40":"#744408","warning-50":"#98590C","warning-60":"#D07A13","warning-70":"#E4A244","warning-80":"#F5C26C","warning-90":"#FADBA6","warning-95":"#FCECD4","warning-100":"#FDF7F0","error-10":"#330505","error-20":"#550808","error-30":"#750C0C","error-40":"#9E130F","error-50":"#CB2213","error-60":"#DE6C6C","error-70":"#E89B9B","error-80":"#EFBEBE","error-90":"#F5D9D9","error-95":"#F9ECEC","error-100":"#FCF7F7","info-10":"#021824","info-20":"#032B3F","info-30":"#053D59","info-40":"#065478","info-50":"#176E9B","info-60":"#5296BE","info-70":"#82B5DA","info-80":"#ACCFE7","info-90":"#CCE3F1","info-95":"#E3F1F8","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000","primary-inverse":"#FEAB10"},kn={"brand-10":"#001A19","brand-20":"#002D2B","brand-30":"#00413D","brand-40":"#005954","brand-50":"#00756F","brand-60":"#03A098","brand-70":"#55BFBA","brand-80":"#92D6D2","brand-90":"#BFE7E5","brand-95":"#DDF2F1","brand-100":"#F4FBFA","primary-10":"#09191D","primary-20":"#102B34","primary-30":"#173D49","primary-40":"#205666","primary-50":"#2A7086","primary-60":"#2A7086","primary-70":"#8CB6C2","primary-80":"#B2CED6","primary-90":"#D1E2E7","primary-95":"#E8F0F3","primary-100":"#F9F8FC","secondary-10":"#001731","secondary-20":"#002752","secondary-30":"#003874","secondary-40":"#004D9F","secondary-50":"#5B62A7","secondary-60":"#858CBD","secondary-70":"#A8ADCF","secondary-80":"#C6C9E0","secondary-90":"#DDDFEC","secondary-95":"#EDEEF5","secondary-100":"#F8F8FB","neutral-10":"#161616","neutral-20":"#282828","neutral-30":"#393939","neutral-40":"#4E4E4E","neutral-50":"#686868","neutral-60":"#8E8E8E","neutral-70":"#AFAFB0","neutral-80":"#C7CACA","neutral-90":"#DDE1E2","neutral-95":"#EDEFEF","neutral-100":"#F9F9F9","success-10":"#081A0F","success-20":"#0E2D1B","success-30":"#154126","success-40":"#1C5A34","success-50":"#257645","success-60":"#44A068","success-70":"#64C189","success-80":"#80DCA5","success-90":"#B4ECCB","success-95":"#D5F6E2","success-100":"#EFFCF4","warning-10":"#221302","warning-20":"#3B2204","warning-30":"#543106","warning-40":"#744408","warning-50":"#98590C","warning-60":"#D07A13","warning-70":"#E4A244","warning-80":"#F5C26C","warning-90":"#FADBA6","warning-95":"#FCECD4","warning-100":"#FDF7F0","error-10":"#330505","error-20":"#550808","error-30":"#750C0C","error-40":"#9E130F","error-50":"#CB2213","error-60":"#DE6C6C","error-70":"#E89B9B","error-80":"#EFBEBE","error-90":"#F5D9D9","error-95":"#F9ECEC","error-100":"#FCF7F7","info-10":"#021824","info-20":"#032B3F","info-30":"#053D59","info-40":"#065478","info-50":"#176E9B","info-60":"#5296BE","info-70":"#82B5DA","info-80":"#ACCFE7","info-90":"#CCE3F1","info-95":"#E3F1F8","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000","primary-inverse":"#FEAB10"},An={"brand-10":"#881317","brand-20":"#B5191E","brand-30":"#B5040A","brand-40":"#D0333F","brand-50":"#DC666F","brand-60":"#E28087","brand-70":"#E7999F","brand-80":"#EDB3B7","brand-90":"#F3CCCF","brand-95":"#F9E6E7","brand-100":"#FCF2F3","primary-10":"#000000","primary-20":"#191919","primary-30":"#333333","primary-40":"#4D4D4D","primary-50":"#666666","primary-60":"#808080","primary-70":"#999999","primary-80":"#B3B3B3","primary-90":"#E6E6E6","primary-95":"#F7F7F7","primary-100":"#FFFFFF","secondary-10":"#19151D","secondary-20":"#2B2533","secondary-30":"#3E3649","secondary-40":"#564A64","secondary-50":"#6F637D","secondary-60":"#948B9F","secondary-70":"#B3ACBB","secondary-80":"#CCC8D2","secondary-90":"#E1DEE4","secondary-95":"#EFEEF1","secondary-100":"#F9F8F9","neutral-10":"#000000","neutral-20":"#191919","neutral-30":"#333333","neutral-40":"#4D4D4D","neutral-50":"#666666","neutral-60":"#808080","neutral-70":"#999999","neutral-80":"#B3B3B3","neutral-90":"#E6E6E6","neutral-95":"#F7F7F7","neutral-100":"#FFFFFF","success-10":"#081A0F","success-20":"#0E2D1B","success-30":"#154126","success-40":"#1C5A34","success-50":"#257645","success-60":"#44A068","success-70":"#64C189","success-80":"#80DCA5","success-90":"#B4ECCB","success-95":"#D5F6E2","success-100":"#EFFCF4","warning-10":"#221302","warning-20":"#3B2204","warning-30":"#543106","warning-40":"#744408","warning-50":"#98590C","warning-60":"#D07A13","warning-70":"#E4A244","warning-80":"#F5C26C","warning-90":"#FADBA6","warning-95":"#FCECD4","warning-100":"#FDF7F0","error-10":"#330505","error-20":"#550808","error-30":"#750C0C","error-40":"#9E130F","error-50":"#CB2213","error-60":"#DE6C6C","error-70":"#E89B9B","error-80":"#EFBEBE","error-90":"#F5D9D9","error-95":"#F9ECEC","error-100":"#FCF7F7","info-10":"#021824","info-20":"#032B3F","info-30":"#053D59","info-40":"#065478","info-50":"#176E9B","info-60":"#5296BE","info-70":"#82B5DA","info-80":"#ACCFE7","info-90":"#CCE3F1","info-95":"#E3F1F8","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000","primary-inverse":"#FEAB10"},zn={"brand-10":"#0E123A","brand-20":"#191E65","brand-30":"#232B90","brand-40":"#303BC5","brand-50":"#494CFF","brand-60":"#AD6EFF","brand-70":"#AEA4FF","brand-80":"#C5C4FF","brand-90":"#DDDCFF","brand-95":"#EDECFF","brand-100":"#F8F8FF","primary-10":"#10152B","primary-20":"#1C254B","primary-30":"#28356C","primary-40":"#38489A","primary-50":"#4D5AD7","primary-60":"#7487F2","primary-70":"#9AAAFC","primary-80":"#BDC7FD","primary-90":"#DADFFB","primary-95":"#ECEEFE","primary-100":"#F7F8FF","secondary-10":"#19151D","secondary-20":"#2B2533","secondary-30":"#3E3649","secondary-40":"#564A64","secondary-50":"#6F637D","secondary-60":"#948B9F","secondary-70":"#B3ACBB","secondary-80":"#CCC8D2","secondary-90":"#E1DEE4","secondary-95":"#EFEEF1","secondary-100":"#F9F8F9","neutral-10":"#161616","neutral-20":"#282828","neutral-30":"#393939","neutral-40":"#4E4E4E","neutral-50":"#686868","neutral-60":"#8E8E8E","neutral-70":"#AFAFB0","neutral-80":"#C7CACA","neutral-90":"#DDE1E2","neutral-95":"#EDEFEF","neutral-100":"#F9F9F9","success-10":"#081A0F","success-20":"#0E2D1B","success-30":"#154126","success-40":"#1C5A34","success-50":"#257645","success-60":"#44A068","success-70":"#64C189","success-80":"#80DCA5","success-90":"#B4ECCB","success-95":"#D5F6E2","success-100":"#EFFCF4","warning-10":"#221302","warning-20":"#3B2204","warning-30":"#543106","warning-40":"#744408","warning-50":"#98590C","warning-60":"#D07A13","warning-70":"#E4A244","warning-80":"#F5C26C","warning-90":"#FADBA6","warning-95":"#FCECD4","warning-100":"#FDF7F0","error-10":"#330505","error-20":"#550808","error-30":"#750C0C","error-40":"#9E130F","error-50":"#CB2213","error-60":"#DE6C6C","error-70":"#E89B9B","error-80":"#EFBEBE","error-90":"#F5D9D9","error-95":"#F9ECEC","error-100":"#FCF7F7","info-10":"#021824","info-20":"#032B3F","info-30":"#053D59","info-40":"#065478","info-50":"#176E9B","info-60":"#5296BE","info-70":"#82B5DA","info-80":"#ACCFE7","info-90":"#CCE3F1","info-95":"#E3F1F8","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000","primary-inverse":"#FEAB10"},Mn={"brand-10":"#170F39","brand-20":"#281C62","brand-30":"#38268B","brand-40":"#4D34BF","brand-50":"#5735DF","brand-60":"#9986F9","brand-70":"#B2A5F8","brand-80":"#CDC2FA","brand-90":"#E2DCFC","brand-95":"#EFEDFE","brand-100":"#FAF8FD","primary-10":"#170F39","primary-20":"#281C62","primary-30":"#38268B","primary-40":"#4D34BF","primary-50":"#5735DF","primary-60":"#9986F9","primary-70":"#B2A5F8","primary-80":"#CDC2FA","primary-90":"#E2DCFC","primary-95":"#EFEDFE","primary-100":"#FAF8FD","secondary-10":"#251204","secondary-20":"#401F08","secondary-30":"#5B2C0B","secondary-40":"#7E3D0F","secondary-50":"#B04900","secondary-60":"#E26E1C","secondary-70":"#FF9445","secondary-80":"#FFBB8E","secondary-90":"#FFD9BF","secondary-95":"#FFECDF","secondary-100":"#FFF8F3","neutral-10":"#161616","neutral-20":"#282828","neutral-30":"#393939","neutral-40":"#4E4E4E","neutral-50":"#686868","neutral-60":"#8E8E8E","neutral-70":"#AFAFB0","neutral-80":"#C7CACA","neutral-90":"#DDE1E2","neutral-95":"#EDEFEF","neutral-100":"#F9F9F9","success-10":"#031B15","success-20":"#082D24","success-30":"#094134","success-40":"#0D5947","success-50":"#10755E","success-60":"#16A181","success-70":"#1EC59D","success-80":"#6FDDC2","success-90":"#AFECDE","success-95":"#D5F5ED","success-100":"#F1FCF9","warning-10":"#1F1500","warning-20":"#362500","warning-30":"#4D3501","warning-40":"#6A4801","warning-50":"#8B6001","warning-60":"#BF8301","warning-70":"#EAA102","warning-80":"#FFBF34","warning-90":"#FFDC8F","warning-95":"#FFEDC7","warning-100":"#FFF8EA","error-10":"#270F10","error-20":"#441B1B","error-30":"#612627","error-40":"#853535","error-50":"#AF4546","error-60":"#EC6162","error-70":"#F29696","error-80":"#F7BBBC","error-90":"#FAD8D8","error-95":"#FCEAEA","error-100":"#FEF7F7","info-10":"#0F1627","info-20":"#1B2745","info-30":"#273763","info-40":"#354D88","info-50":"#4665B3","info-60":"#618AF6","info-70":"#8DADFF","info-80":"#B4C9FF","info-90":"#D3DFFF","info-95":"#E9EFFF","info-100":"#F5F8FF",white:"#FFFFFF",black:"#000000","primary-inverse":"#FEAB10"},On={"brand-10":"#0E113C","brand-20":"#191E67","brand-30":"#232A92","brand-40":"#233FC2","brand-50":"#135CEA","brand-60":"#378FFB","brand-70":"#71B3FD","brand-80":"#9DCFFE","brand-90":"#C1E5FF","brand-95":"#DCF1FF","brand-100":"#F3FAFF","primary-10":"#0E113C","primary-20":"#191E67","primary-30":"#232A92","primary-40":"#233FC2","primary-50":"#135CEA","primary-60":"#378FFB","primary-70":"#71B3FD","primary-80":"#9DCFFE","primary-90":"#C1E5FF","primary-95":"#DCF1FF","primary-100":"#F3FAFF","secondary-10":"#34001F","secondary-20":"#540033","secondary-30":"#730045","secondary-40":"#9D0054","secondary-50":"#C61C64","secondary-60":"#DE6792","secondary-70":"#EB96B6","secondary-80":"#F5BAD2","secondary-90":"#FCD5E3","secondary-95":"#FDEBF1","secondary-100":"#FDF6F9","neutral-10":"#161616","neutral-20":"#282828","neutral-30":"#393939","neutral-40":"#4E4E4E","neutral-50":"#686868","neutral-60":"#8E8E8E","neutral-70":"#AFAFB0","neutral-80":"#C7CACA","neutral-90":"#DDE1E2","neutral-95":"#EDEFEF","neutral-100":"#F9F9F9","success-10":"#081A0F","success-20":"#0E2D1B","success-30":"#154126","success-40":"#1C5A34","success-50":"#257645","success-60":"#44A068","success-70":"#64C189","success-80":"#80DCA5","success-90":"#B4ECCB","success-95":"#D5F6E2","success-100":"#EFFCF4","warning-10":"#221302","warning-20":"#3B2204","warning-30":"#543106","warning-40":"#744408","warning-50":"#98590C","warning-60":"#D07A13","warning-70":"#E4A244","warning-80":"#F5C26C","warning-90":"#FADBA6","warning-95":"#FCECD4","warning-100":"#FDF7F0","error-10":"#330505","error-20":"#550808","error-30":"#750C0C","error-40":"#9E130F","error-50":"#CB2213","error-60":"#DE6C6C","error-70":"#E89B9B","error-80":"#EFBEBE","error-90":"#F5D9D9","error-95":"#F9ECEC","error-100":"#FCF7F7","info-10":"#021824","info-20":"#032B3F","info-30":"#053D59","info-40":"#065478","info-50":"#176E9B","info-60":"#5296BE","info-70":"#82B5DA","info-80":"#ACCFE7","info-90":"#CCE3F1","info-95":"#E3F1F8","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000","primary-inverse":"#FEAB10"},_n={collections:{lifesg:Bn,bookingsg:Dn,rbs:zn,mylegacy:Sn,ccube:Cn,oneservice:kn,pa:An,a11yplayground:Mn,supportgowhere:On},defaultValue:"lifesg"},Tn={collections:{lifesg:Bn,bookingsg:Dn,rbs:zn,mylegacy:Sn,ccube:Cn,oneservice:kn,pa:An,a11yplayground:Mn,supportgowhere:On},defaultValue:"lifesg"},Ln=e=>r=>{var n;const t=r.theme,i="dark"===(null==t?void 0:t.colourMode),o=xn(i?Tn:_n,null==t?void 0:t.colourScheme),s=i?"primitiveColourDark":"primitiveColour",a=null===(n=null==t?void 0:t.overrides)||void 0===n?void 0:n[s];return a?vn(o,e,a):o[e]},jn={"brand-10":Ln("brand-10"),"brand-20":Ln("brand-20"),"brand-30":Ln("brand-30"),"brand-40":Ln("brand-40"),"brand-50":Ln("brand-50"),"brand-60":Ln("brand-60"),"brand-70":Ln("brand-70"),"brand-80":Ln("brand-80"),"brand-90":Ln("brand-90"),"brand-95":Ln("brand-95"),"brand-100":Ln("brand-100"),"primary-10":Ln("primary-10"),"primary-20":Ln("primary-20"),"primary-30":Ln("primary-30"),"primary-40":Ln("primary-40"),"primary-50":Ln("primary-50"),"primary-60":Ln("primary-60"),"primary-70":Ln("primary-70"),"primary-80":Ln("primary-80"),"primary-90":Ln("primary-90"),"primary-95":Ln("primary-95"),"primary-100":Ln("primary-100"),"secondary-10":Ln("secondary-10"),"secondary-20":Ln("secondary-20"),"secondary-30":Ln("secondary-30"),"secondary-40":Ln("secondary-40"),"secondary-50":Ln("secondary-50"),"secondary-60":Ln("secondary-60"),"secondary-70":Ln("secondary-70"),"secondary-80":Ln("secondary-80"),"secondary-90":Ln("secondary-90"),"secondary-95":Ln("secondary-95"),"secondary-100":Ln("secondary-100"),"neutral-10":Ln("neutral-10"),"neutral-20":Ln("neutral-20"),"neutral-30":Ln("neutral-30"),"neutral-40":Ln("neutral-40"),"neutral-50":Ln("neutral-50"),"neutral-60":Ln("neutral-60"),"neutral-70":Ln("neutral-70"),"neutral-80":Ln("neutral-80"),"neutral-90":Ln("neutral-90"),"neutral-95":Ln("neutral-95"),"neutral-100":Ln("neutral-100"),"success-10":Ln("success-10"),"success-20":Ln("success-20"),"success-30":Ln("success-30"),"success-40":Ln("success-40"),"success-50":Ln("success-50"),"success-60":Ln("success-60"),"success-70":Ln("success-70"),"success-80":Ln("success-80"),"success-90":Ln("success-90"),"success-95":Ln("success-95"),"success-100":Ln("success-100"),"warning-10":Ln("warning-10"),"warning-20":Ln("warning-20"),"warning-30":Ln("warning-30"),"warning-40":Ln("warning-40"),"warning-50":Ln("warning-50"),"warning-60":Ln("warning-60"),"warning-70":Ln("warning-70"),"warning-80":Ln("warning-80"),"warning-90":Ln("warning-90"),"warning-95":Ln("warning-95"),"warning-100":Ln("warning-100"),"error-10":Ln("error-10"),"error-20":Ln("error-20"),"error-30":Ln("error-30"),"error-40":Ln("error-40"),"error-50":Ln("error-50"),"error-60":Ln("error-60"),"error-70":Ln("error-70"),"error-80":Ln("error-80"),"error-90":Ln("error-90"),"error-95":Ln("error-95"),"error-100":Ln("error-100"),"info-10":Ln("info-10"),"info-20":Ln("info-20"),"info-30":Ln("info-30"),"info-40":Ln("info-40"),"info-50":Ln("info-50"),"info-60":Ln("info-60"),"info-70":Ln("info-70"),"info-80":Ln("info-80"),"info-90":Ln("info-90"),"info-95":Ln("info-95"),"info-100":Ln("info-100"),white:Ln("white"),black:Ln("black"),"primary-inverse":Ln("primary-inverse")},Rn={text:Ln("neutral-20"),"text-subtle":Ln("neutral-30"),"text-subtler":Ln("neutral-50"),"text-subtlest":Ln("neutral-60"),"text-primary":Ln("primary-50"),"text-hover":Ln("primary-40"),"text-selected":Ln("primary-50"),"text-selected-hover":Ln("primary-40"),"text-disabled":Ln("neutral-50"),"text-disabled-subtle":Ln("neutral-60"),"text-disabled-subtlest":Ln("neutral-80"),"text-selected-disabled":Ln("neutral-20"),"text-success":Ln("success-40"),"text-warning":Ln("warning-40"),"text-error":Ln("error-40"),"text-info":Ln("info-40"),"text-inverse":Ln("white"),icon:Ln("neutral-50"),"icon-subtle":Ln("neutral-60"),"icon-strongest":Ln("neutral-20"),"icon-primary":Ln("primary-50"),"icon-primary-subtle":Ln("primary-60"),"icon-primary-subtlest":Ln("primary-70"),"icon-hover":Ln("primary-40"),"icon-selected":Ln("primary-50"),"icon-selected-hover":Ln("primary-40"),"icon-disabled":Ln("neutral-50"),"icon-disabled-subtle":Ln("neutral-60"),"icon-selected-disabled":Ln("neutral-60"),"icon-success":Ln("success-50"),"icon-warning":Ln("warning-60"),"icon-error":Ln("error-50"),"icon-error-strong":Ln("error-40"),"icon-info":Ln("info-50"),"icon-inverse":Ln("white"),"icon-primary-inverse":Ln("primary-inverse"),border:Ln("neutral-90"),"border-strong":Ln("neutral-70"),"border-stronger":Ln("neutral-50"),"border-primary":Ln("primary-50"),"border-primary-subtle":Ln("primary-60"),"border-hover":Ln("primary-90"),"border-hover-strong":Ln("primary-60"),"border-selected":Ln("primary-50"),"border-selected-subtle":Ln("primary-70"),"border-selected-subtlest":Ln("primary-90"),"border-selected-hover":Ln("primary-40"),"border-focus":Ln("primary-60"),"border-focus-strong":Ln("primary-50"),"border-disabled":Ln("neutral-90"),"border-selected-disabled":Ln("neutral-70"),"border-success":Ln("success-60"),"border-warning":Ln("warning-60"),"border-error":Ln("error-60"),"border-error-focus":Ln("error-60"),"border-error-focus-strong":Ln("error-40"),"border-error-strong":Ln("error-40"),"border-info":Ln("info-60"),bg:Ln("white"),"bg-strong":Ln("neutral-100"),"bg-stronger":Ln("neutral-95"),"bg-strongest":Ln("neutral-90"),"bg-hover":Ln("primary-95"),"bg-hover-strong":Ln("primary-90"),"bg-hover-subtle":Ln("primary-100"),"bg-hover-neutral":Ln("neutral-100"),"bg-hover-neutral-strong":Ln("neutral-90"),"bg-selected":Ln("primary-95"),"bg-selected-hover":Ln("primary-90"),"bg-selected-strong":Ln("primary-90"),"bg-selected-stronger":Ln("primary-70"),"bg-selected-strongest":Ln("primary-50"),"bg-selected-strongest-hover":Ln("primary-40"),"bg-disabled":Ln("neutral-95"),"bg-selected-disabled":Ln("neutral-95"),"bg-selected-stronger-disabled":Ln("neutral-70"),"bg-success":Ln("success-100"),"bg-success-hover":Ln("success-95"),"bg-success-strong":Ln("success-50"),"bg-success-strong-hover":Ln("success-40"),"bg-warning":Ln("warning-100"),"bg-warning-hover":Ln("warning-95"),"bg-warning-strong":Ln("warning-50"),"bg-warning-strong-hover":Ln("warning-40"),"bg-info":Ln("info-100"),"bg-info-hover":Ln("info-95"),"bg-info-strong":Ln("info-50"),"bg-info-strong-hover":Ln("info-40"),"bg-error":Ln("error-100"),"bg-error-hover":Ln("error-95"),"bg-error-strong":Ln("error-50"),"bg-error-strong-hover":Ln("error-40"),"bg-inverse":Ln("neutral-20"),"bg-inverse-subtle":Ln("neutral-30"),"bg-inverse-subtler":Ln("neutral-50"),"bg-inverse-subtlest":Ln("neutral-60"),"bg-inverse-hover":Ln("neutral-40"),"bg-primary":Ln("primary-50"),"bg-primary-subtle":Ln("primary-60"),"bg-primary-subtler":Ln("primary-95"),"bg-primary-subtlest":Ln("primary-100"),"bg-available":"#6DD0A1","bg-primary-hover":Ln("primary-40"),"bg-primary-subtlest-hover":Ln("primary-90"),"bg-primary-subtlest-selected":Ln("primary-90"),"overlay-strong":"rgba(40, 40, 40, 0.85)","overlay-subtle":"rgba(40, 40, 40, 0.20)",hyperlink:Ln("primary-50"),"hyperlink-hover":Ln("primary-40"),"hyperlink-visited":Ln("primary-40"),"hyperlink-inverse":Ln("primary-inverse"),"focus-ring":Ln("primary-50"),"focus-ring-inverse":Ln("white")},Yn={text:Ln("neutral-100"),"text-subtle":Ln("neutral-80"),"text-subtler":Ln("neutral-60"),"text-subtlest":Ln("neutral-50"),"text-primary":Ln("primary-60"),"text-hover":Ln("primary-70"),"text-selected":Ln("primary-60"),"text-selected-hover":Ln("primary-70"),"text-disabled":Ln("neutral-60"),"text-disabled-subtle":Ln("neutral-50"),"text-disabled-subtlest":Ln("neutral-30"),"text-selected-disabled":Ln("neutral-90"),"text-success":Ln("success-70"),"text-warning":Ln("warning-70"),"text-error":Ln("error-70"),"text-info":Ln("info-70"),"text-inverse":Ln("black"),icon:Ln("neutral-60"),"icon-subtle":Ln("neutral-50"),"icon-strongest":Ln("neutral-90"),"icon-primary":Ln("primary-60"),"icon-primary-subtle":Ln("primary-50"),"icon-primary-subtlest":Ln("primary-40"),"icon-hover":Ln("primary-70"),"icon-selected":Ln("primary-60"),"icon-selected-hover":Ln("primary-70"),"icon-disabled":Ln("neutral-60"),"icon-disabled-subtle":Ln("neutral-50"),"icon-selected-disabled":Ln("neutral-50"),"icon-success":Ln("success-60"),"icon-warning":Ln("warning-50"),"icon-error":Ln("error-60"),"icon-error-strong":Ln("error-70"),"icon-info":Ln("info-60"),"icon-inverse":Ln("black"),"icon-primary-inverse":Ln("primary-inverse"),border:Ln("neutral-20"),"border-strong":Ln("neutral-40"),"border-stronger":Ln("neutral-60"),"border-primary":Ln("primary-60"),"border-primary-subtle":Ln("primary-50"),"border-hover":Ln("primary-20"),"border-hover-strong":Ln("primary-50"),"border-selected":Ln("primary-60"),"border-selected-subtle":Ln("primary-40"),"border-selected-subtlest":Ln("primary-20"),"border-selected-hover":Ln("primary-70"),"border-focus":Ln("primary-50"),"border-focus-strong":Ln("primary-60"),"border-disabled":Ln("neutral-20"),"border-selected-disabled":Ln("neutral-40"),"border-success":Ln("success-50"),"border-warning":Ln("warning-50"),"border-error":Ln("error-50"),"border-error-focus":Ln("error-50"),"border-error-focus-strong":Ln("error-70"),"border-error-strong":Ln("error-70"),"border-info":Ln("info-50"),bg:Ln("black"),"bg-strong":Ln("neutral-10"),"bg-stronger":Ln("neutral-20"),"bg-strongest":Ln("neutral-20"),"bg-hover":Ln("primary-20"),"bg-hover-strong":Ln("primary-20"),"bg-hover-subtle":Ln("primary-10"),"bg-hover-neutral":Ln("neutral-10"),"bg-hover-neutral-strong":Ln("neutral-20"),"bg-selected":Ln("primary-20"),"bg-selected-hover":Ln("primary-20"),"bg-selected-strong":Ln("primary-20"),"bg-selected-stronger":Ln("primary-40"),"bg-selected-strongest":Ln("primary-60"),"bg-selected-strongest-hover":Ln("primary-70"),"bg-disabled":Ln("neutral-20"),"bg-selected-disabled":Ln("neutral-20"),"bg-selected-stronger-disabled":Ln("neutral-40"),"bg-success":Ln("success-10"),"bg-success-hover":Ln("success-20"),"bg-success-strong":Ln("success-60"),"bg-success-strong-hover":Ln("success-70"),"bg-warning":Ln("warning-10"),"bg-warning-hover":Ln("warning-20"),"bg-warning-strong":Ln("warning-60"),"bg-warning-strong-hover":Ln("warning-70"),"bg-info":Ln("info-10"),"bg-info-hover":Ln("info-20"),"bg-info-strong":Ln("info-60"),"bg-info-strong-hover":Ln("info-70"),"bg-error":Ln("error-10"),"bg-error-hover":Ln("error-20"),"bg-error-strong":Ln("error-60"),"bg-error-strong-hover":Ln("error-70"),"bg-inverse":Ln("neutral-90"),"bg-inverse-subtle":Ln("neutral-80"),"bg-inverse-subtler":Ln("neutral-60"),"bg-inverse-subtlest":Ln("neutral-50"),"bg-inverse-hover":Ln("neutral-70"),"bg-primary":Ln("primary-60"),"bg-primary-subtle":Ln("primary-50"),"bg-primary-subtler":Ln("primary-20"),"bg-primary-subtlest":Ln("primary-10"),"bg-available":"#185339","bg-primary-hover":Ln("primary-70"),"bg-primary-subtlest-hover":Ln("primary-20"),"bg-primary-subtlest-selected":Ln("primary-20"),"overlay-strong":"rgba(78, 78, 78, 0.80)","overlay-subtle":"rgba(78, 78, 78, 0.50)",hyperlink:Ln("primary-60"),"hyperlink-hover":Ln("primary-70"),"hyperlink-visited":Ln("primary-70"),"hyperlink-inverse":Ln("primary-inverse"),"focus-ring":Ln("primary-60"),"focus-ring-inverse":Ln("black")},Pn={text:Ln("neutral-30"),"text-subtle":Ln("neutral-40"),"text-subtler":Ln("neutral-50"),"text-subtlest":Ln("neutral-70"),"text-primary":Ln("neutral-10"),"text-hover":Ln("neutral-70"),"text-selected":Ln("neutral-20"),"text-selected-hover":Ln("neutral-10"),"text-disabled":Ln("neutral-50"),"text-disabled-subtle":Ln("neutral-60"),"text-disabled-subtlest":Ln("neutral-80"),"text-selected-disabled":Ln("neutral-40"),"text-success":Ln("success-40"),"text-warning":Ln("warning-40"),"text-error":Ln("brand-30"),"text-info":Ln("neutral-40"),"text-inverse":Ln("neutral-100"),icon:Ln("neutral-40"),"icon-subtle":Ln("neutral-50"),"icon-strongest":Ln("neutral-10"),"icon-primary":Ln("neutral-10"),"icon-primary-subtle":Ln("neutral-30"),"icon-primary-subtlest":Ln("neutral-60"),"icon-hover":Ln("neutral-70"),"icon-selected":Ln("brand-20"),"icon-selected-hover":Ln("brand-10"),"icon-disabled":Ln("neutral-50"),"icon-disabled-subtle":Ln("neutral-60"),"icon-selected-disabled":Ln("neutral-40"),"icon-success":Ln("success-40"),"icon-warning":Ln("warning-60"),"icon-error":Ln("brand-30"),"icon-error-strong":Ln("brand-10"),"icon-info":Ln("neutral-40"),"icon-inverse":Ln("neutral-100"),"icon-primary-inverse":"#F9B371",border:Ln("neutral-90"),"border-strong":Ln("neutral-30"),"border-stronger":Ln("neutral-20"),"border-primary":Ln("neutral-40"),"border-primary-subtle":Ln("neutral-60"),"border-hover":Ln("neutral-80"),"border-hover-strong":Ln("neutral-10"),"border-selected":Ln("brand-20"),"border-selected-subtle":Ln("neutral-40"),"border-selected-subtlest":Ln("neutral-70"),"border-selected-hover":Ln("neutral-10"),"border-focus":Ln("neutral-20"),"border-focus-strong":Ln("neutral-10"),"border-disabled":Ln("neutral-90"),"border-selected-disabled":Ln("neutral-80"),"border-success":Ln("success-40"),"border-warning":Ln("warning-60"),"border-error":Ln("brand-30"),"border-error-focus":Ln("brand-20"),"border-error-focus-strong":Ln("brand-10"),"border-error-strong":Ln("brand-20"),"border-info":Ln("neutral-40"),bg:Ln("neutral-100"),"bg-strong":Ln("neutral-95"),"bg-stronger":Ln("neutral-90"),"bg-strongest":Ln("neutral-80"),"bg-hover":Ln("brand-90"),"bg-hover-strong":Ln("brand-80"),"bg-hover-subtle":Ln("neutral-90"),"bg-hover-neutral":Ln("neutral-90"),"bg-hover-neutral-strong":Ln("neutral-90"),"bg-selected":Ln("brand-100"),"bg-selected-hover":Ln("brand-30"),"bg-selected-strong":Ln("brand-50"),"bg-selected-stronger":Ln("brand-40"),"bg-selected-strongest":Ln("brand-20"),"bg-selected-strongest-hover":Ln("brand-10"),"bg-disabled":Ln("neutral-90"),"bg-selected-disabled":Ln("neutral-90"),"bg-selected-stronger-disabled":Ln("neutral-80"),"bg-success":Ln("success-100"),"bg-success-hover":Ln("success-95"),"bg-success-strong":Ln("success-50"),"bg-success-strong-hover":Ln("success-40"),"bg-warning":Ln("warning-100"),"bg-warning-hover":Ln("warning-95"),"bg-warning-strong":Ln("warning-50"),"bg-warning-strong-hover":Ln("warning-40"),"bg-info":Ln("neutral-95"),"bg-info-hover":Ln("info-95"),"bg-info-strong":Ln("info-50"),"bg-info-strong-hover":Ln("info-40"),"bg-error":Ln("brand-100"),"bg-error-hover":Ln("error-95"),"bg-error-strong":Ln("error-50"),"bg-error-strong-hover":Ln("error-40"),"bg-inverse":Ln("neutral-40"),"bg-inverse-subtle":Ln("neutral-60"),"bg-inverse-subtler":Ln("neutral-70"),"bg-inverse-subtlest":Ln("neutral-80"),"bg-inverse-hover":Ln("neutral-30"),"bg-primary":Ln("brand-20"),"bg-primary-subtle":Ln("brand-60"),"bg-primary-subtler":Ln("brand-80"),"bg-primary-subtlest":Ln("brand-100"),"bg-available":Ln("success-60"),"bg-primary-hover":Ln("brand-10"),"bg-primary-subtlest-hover":Ln("brand-80"),"bg-primary-subtlest-selected":Ln("brand-40"),"overlay-strong":"rgba(25, 25, 25, 0.95)","overlay-subtle":"rgba(25, 25, 25, 0.20)",hyperlink:Ln("neutral-10"),"hyperlink-hover":Ln("neutral-40"),"hyperlink-visited":Ln("neutral-50"),"hyperlink-inverse":"#F8AE68","focus-ring":Ln("primary-50"),"focus-ring-inverse":Ln("white")},In={text:Ln("neutral-20"),"text-subtle":Ln("neutral-30"),"text-subtler":Ln("neutral-50"),"text-subtlest":Ln("neutral-60"),"text-primary":Ln("primary-50"),"text-hover":Ln("primary-40"),"text-selected":Ln("primary-50"),"text-selected-hover":Ln("primary-40"),"text-disabled":Ln("neutral-50"),"text-disabled-subtle":Ln("neutral-60"),"text-disabled-subtlest":Ln("neutral-80"),"text-selected-disabled":Ln("neutral-20"),"text-success":Ln("success-40"),"text-warning":Ln("warning-40"),"text-error":Ln("error-40"),"text-info":Ln("info-40"),"text-inverse":Ln("white"),icon:Ln("neutral-50"),"icon-subtle":Ln("neutral-60"),"icon-strongest":Ln("neutral-20"),"icon-primary":Ln("primary-50"),"icon-primary-subtle":Ln("primary-60"),"icon-primary-subtlest":Ln("primary-70"),"icon-hover":Ln("primary-40"),"icon-selected":Ln("primary-50"),"icon-selected-hover":Ln("primary-40"),"icon-disabled":Ln("neutral-50"),"icon-disabled-subtle":Ln("neutral-60"),"icon-selected-disabled":Ln("neutral-60"),"icon-success":Ln("success-50"),"icon-warning":Ln("warning-60"),"icon-error":Ln("error-50"),"icon-error-strong":Ln("error-40"),"icon-info":Ln("info-50"),"icon-inverse":Ln("white"),"icon-primary-inverse":Ln("primary-inverse"),border:Ln("neutral-90"),"border-strong":Ln("neutral-70"),"border-stronger":Ln("neutral-50"),"border-primary":Ln("primary-50"),"border-primary-subtle":Ln("primary-60"),"border-hover":Ln("primary-90"),"border-hover-strong":Ln("primary-60"),"border-selected":Ln("primary-50"),"border-selected-subtle":Ln("primary-70"),"border-selected-subtlest":Ln("primary-90"),"border-selected-hover":Ln("primary-40"),"border-focus":Ln("primary-60"),"border-focus-strong":Ln("primary-50"),"border-disabled":Ln("neutral-90"),"border-selected-disabled":Ln("neutral-70"),"border-success":Ln("success-60"),"border-warning":Ln("warning-60"),"border-error":Ln("error-60"),"border-error-focus":Ln("error-60"),"border-error-focus-strong":Ln("error-40"),"border-error-strong":Ln("error-40"),"border-info":Ln("info-60"),bg:Ln("white"),"bg-strong":Ln("neutral-100"),"bg-stronger":Ln("neutral-95"),"bg-strongest":Ln("neutral-90"),"bg-hover":Ln("primary-95"),"bg-hover-strong":Ln("primary-90"),"bg-hover-subtle":Ln("primary-100"),"bg-hover-neutral":Ln("neutral-100"),"bg-hover-neutral-strong":Ln("neutral-90"),"bg-selected":Ln("primary-95"),"bg-selected-hover":Ln("primary-90"),"bg-selected-strong":Ln("primary-90"),"bg-selected-stronger":Ln("primary-70"),"bg-selected-strongest":Ln("primary-50"),"bg-selected-strongest-hover":Ln("primary-40"),"bg-disabled":Ln("neutral-95"),"bg-selected-disabled":Ln("neutral-95"),"bg-selected-stronger-disabled":Ln("neutral-70"),"bg-success":Ln("success-100"),"bg-success-hover":Ln("success-95"),"bg-success-strong":Ln("success-50"),"bg-success-strong-hover":Ln("success-40"),"bg-warning":Ln("warning-100"),"bg-warning-hover":Ln("warning-95"),"bg-warning-strong":Ln("warning-50"),"bg-warning-strong-hover":Ln("warning-40"),"bg-info":Ln("info-100"),"bg-info-hover":Ln("info-95"),"bg-info-strong":Ln("info-50"),"bg-info-strong-hover":Ln("info-40"),"bg-error":Ln("error-100"),"bg-error-hover":Ln("error-95"),"bg-error-strong":Ln("error-50"),"bg-error-strong-hover":Ln("error-40"),"bg-inverse":Ln("neutral-20"),"bg-inverse-subtle":Ln("neutral-30"),"bg-inverse-subtler":Ln("neutral-50"),"bg-inverse-subtlest":Ln("neutral-60"),"bg-inverse-hover":Ln("neutral-40"),"bg-primary":Ln("primary-50"),"bg-primary-subtle":Ln("primary-60"),"bg-primary-subtler":Ln("primary-95"),"bg-primary-subtlest":Ln("primary-100"),"bg-available":"#6DD0A1","bg-primary-hover":Ln("primary-40"),"bg-primary-subtlest-hover":Ln("primary-90"),"bg-primary-subtlest-selected":Ln("primary-90"),"overlay-strong":"rgba(40, 40, 40, 0.85)","overlay-subtle":"rgba(40, 40, 40, 0.20)",hyperlink:Ln("primary-50"),"hyperlink-hover":Ln("primary-40"),"hyperlink-visited":Ln("primary-40"),"hyperlink-inverse":Ln("primary-inverse"),"focus-ring":Ln("primary-50"),"focus-ring-inverse":Ln("white")},Hn={text:Ln("neutral-100"),"text-subtle":Ln("neutral-80"),"text-subtler":Ln("neutral-60"),"text-subtlest":Ln("neutral-50"),"text-primary":Ln("primary-60"),"text-hover":Ln("primary-70"),"text-selected":Ln("primary-60"),"text-selected-hover":Ln("primary-70"),"text-disabled":Ln("neutral-60"),"text-disabled-subtle":Ln("neutral-50"),"text-disabled-subtlest":Ln("neutral-30"),"text-selected-disabled":Ln("neutral-90"),"text-success":Ln("success-70"),"text-warning":Ln("warning-70"),"text-error":Ln("error-70"),"text-info":Ln("info-70"),"text-inverse":Ln("black"),icon:Ln("neutral-60"),"icon-subtle":Ln("neutral-50"),"icon-strongest":Ln("neutral-90"),"icon-primary":Ln("primary-60"),"icon-primary-subtle":Ln("primary-50"),"icon-primary-subtlest":Ln("primary-40"),"icon-hover":Ln("primary-70"),"icon-selected":Ln("primary-60"),"icon-selected-hover":Ln("primary-70"),"icon-disabled":Ln("neutral-60"),"icon-disabled-subtle":Ln("neutral-50"),"icon-selected-disabled":Ln("neutral-50"),"icon-success":Ln("success-60"),"icon-warning":Ln("warning-50"),"icon-error":Ln("error-60"),"icon-error-strong":Ln("error-70"),"icon-info":Ln("info-60"),"icon-inverse":Ln("black"),"icon-primary-inverse":Ln("primary-inverse"),border:Ln("neutral-20"),"border-strong":Ln("neutral-40"),"border-stronger":Ln("neutral-60"),"border-primary":Ln("primary-60"),"border-primary-subtle":Ln("primary-50"),"border-hover":Ln("primary-20"),"border-hover-strong":Ln("primary-50"),"border-selected":Ln("primary-60"),"border-selected-subtle":Ln("primary-40"),"border-selected-subtlest":Ln("primary-20"),"border-selected-hover":Ln("primary-70"),"border-focus":Ln("primary-50"),"border-focus-strong":Ln("primary-60"),"border-disabled":Ln("neutral-20"),"border-selected-disabled":Ln("neutral-40"),"border-success":Ln("success-50"),"border-warning":Ln("warning-50"),"border-error":Ln("error-50"),"border-error-focus":Ln("error-50"),"border-error-focus-strong":Ln("error-70"),"border-error-strong":Ln("error-70"),"border-info":Ln("info-50"),bg:Ln("black"),"bg-strong":Ln("neutral-10"),"bg-stronger":Ln("neutral-20"),"bg-strongest":Ln("neutral-20"),"bg-hover":Ln("primary-20"),"bg-hover-strong":Ln("primary-20"),"bg-hover-subtle":Ln("primary-10"),"bg-hover-neutral":Ln("neutral-10"),"bg-hover-neutral-strong":Ln("neutral-20"),"bg-selected":Ln("primary-20"),"bg-selected-hover":Ln("primary-20"),"bg-selected-strong":Ln("primary-20"),"bg-selected-stronger":Ln("primary-40"),"bg-selected-strongest":Ln("primary-60"),"bg-selected-strongest-hover":Ln("primary-70"),"bg-disabled":Ln("neutral-20"),"bg-selected-disabled":Ln("neutral-20"),"bg-selected-stronger-disabled":Ln("neutral-40"),"bg-success":Ln("success-10"),"bg-success-hover":Ln("success-20"),"bg-success-strong":Ln("success-60"),"bg-success-strong-hover":Ln("success-70"),"bg-warning":Ln("warning-10"),"bg-warning-hover":Ln("warning-20"),"bg-warning-strong":Ln("warning-60"),"bg-warning-strong-hover":Ln("warning-70"),"bg-info":Ln("info-10"),"bg-info-hover":Ln("info-20"),"bg-info-strong":Ln("info-60"),"bg-info-strong-hover":Ln("info-70"),"bg-error":Ln("error-10"),"bg-error-hover":Ln("error-20"),"bg-error-strong":Ln("error-60"),"bg-error-strong-hover":Ln("error-70"),"bg-inverse":Ln("neutral-90"),"bg-inverse-subtle":Ln("neutral-80"),"bg-inverse-subtler":Ln("neutral-60"),"bg-inverse-subtlest":Ln("neutral-50"),"bg-inverse-hover":Ln("neutral-70"),"bg-primary":Ln("primary-60"),"bg-primary-subtle":Ln("primary-50"),"bg-primary-subtler":Ln("primary-20"),"bg-primary-subtlest":Ln("primary-10"),"bg-available":"#185339","bg-primary-hover":Ln("primary-70"),"bg-primary-subtlest-hover":Ln("primary-20"),"bg-primary-subtlest-selected":Ln("primary-20"),"overlay-strong":"rgba(78, 78, 78, 0.80)","overlay-subtle":"rgba(78, 78, 78, 0.50)",hyperlink:Ln("primary-60"),"hyperlink-hover":Ln("primary-70"),"hyperlink-visited":Ln("primary-70"),"hyperlink-inverse":Ln("primary-inverse"),"focus-ring":Ln("primary-60"),"focus-ring-inverse":Ln("black")},Nn={collections:{lifesg:Rn,bookingsg:Rn,rbs:Rn,mylegacy:Rn,ccube:Rn,oneservice:Rn,pa:Pn,a11yplayground:In,supportgowhere:Rn},defaultValue:"lifesg"},Wn={collections:{lifesg:Yn,bookingsg:Yn,rbs:Yn,mylegacy:Yn,ccube:Yn,oneservice:Yn,pa:Yn,a11yplayground:Hn,supportgowhere:Yn},defaultValue:"lifesg"},Vn=e=>r=>{var n;const t=r.theme,i="dark"===(null==t?void 0:t.colourMode),o=xn(i?Wn:Nn,null==t?void 0:t.colourScheme),s=i?"semanticColourDark":"semanticColour",a=null===(n=null==t?void 0:t.overrides)||void 0===n?void 0:n[s],l=a?vn(o,e,a):o[e];return"function"==typeof l?l(r):l},Kn={text:Vn("text"),"text-subtle":Vn("text-subtle"),"text-subtler":Vn("text-subtler"),"text-subtlest":Vn("text-subtlest"),"text-primary":Vn("text-primary"),"text-hover":Vn("text-hover"),"text-selected":Vn("text-selected"),"text-selected-hover":Vn("text-selected-hover"),"text-disabled":Vn("text-disabled"),"text-disabled-subtle":Vn("text-disabled-subtle"),"text-disabled-subtlest":Vn("text-disabled-subtlest"),"text-selected-disabled":Vn("text-selected-disabled"),"text-success":Vn("text-success"),"text-warning":Vn("text-warning"),"text-error":Vn("text-error"),"text-info":Vn("text-info"),"text-inverse":Vn("text-inverse"),icon:Vn("icon"),"icon-subtle":Vn("icon-subtle"),"icon-strongest":Vn("icon-strongest"),"icon-primary":Vn("icon-primary"),"icon-primary-subtle":Vn("icon-primary-subtle"),"icon-primary-subtlest":Vn("icon-primary-subtlest"),"icon-hover":Vn("icon-hover"),"icon-selected":Vn("icon-selected"),"icon-selected-hover":Vn("icon-selected-hover"),"icon-disabled":Vn("icon-disabled"),"icon-disabled-subtle":Vn("icon-disabled-subtle"),"icon-selected-disabled":Vn("icon-selected-disabled"),"icon-success":Vn("icon-success"),"icon-warning":Vn("icon-warning"),"icon-error":Vn("icon-error"),"icon-error-strong":Vn("icon-error-strong"),"icon-info":Vn("icon-info"),"icon-inverse":Vn("icon-inverse"),"icon-primary-inverse":Vn("icon-primary-inverse"),border:Vn("border"),"border-strong":Vn("border-strong"),"border-stronger":Vn("border-stronger"),"border-primary":Vn("border-primary"),"border-primary-subtle":Vn("border-primary-subtle"),"border-hover":Vn("border-hover"),"border-hover-strong":Vn("border-hover-strong"),"border-selected":Vn("border-selected"),"border-selected-subtle":Vn("border-selected-subtle"),"border-selected-subtlest":Vn("border-selected-subtlest"),"border-selected-hover":Vn("border-selected-hover"),"border-focus":Vn("border-focus"),"border-focus-strong":Vn("border-focus-strong"),"border-disabled":Vn("border-disabled"),"border-selected-disabled":Vn("border-selected-disabled"),"border-success":Vn("border-success"),"border-warning":Vn("border-warning"),"border-error":Vn("border-error"),"border-error-focus":Vn("border-error-focus"),"border-error-focus-strong":Vn("border-error-focus-strong"),"border-error-strong":Vn("border-error-strong"),"border-info":Vn("border-info"),bg:Vn("bg"),"bg-strong":Vn("bg-strong"),"bg-stronger":Vn("bg-stronger"),"bg-strongest":Vn("bg-strongest"),"bg-hover":Vn("bg-hover"),"bg-hover-strong":Vn("bg-hover-strong"),"bg-hover-subtle":Vn("bg-hover-subtle"),"bg-hover-neutral":Vn("bg-hover-neutral"),"bg-hover-neutral-strong":Vn("bg-hover-neutral-strong"),"bg-selected":Vn("bg-selected"),"bg-selected-hover":Vn("bg-selected-hover"),"bg-selected-strong":Vn("bg-selected-strong"),"bg-selected-stronger":Vn("bg-selected-stronger"),"bg-selected-strongest":Vn("bg-selected-strongest"),"bg-selected-strongest-hover":Vn("bg-selected-strongest-hover"),"bg-disabled":Vn("bg-disabled"),"bg-selected-disabled":Vn("bg-selected-disabled"),"bg-selected-stronger-disabled":Vn("bg-selected-stronger-disabled"),"bg-success":Vn("bg-success"),"bg-success-hover":Vn("bg-success-hover"),"bg-success-strong":Vn("bg-success-strong"),"bg-success-strong-hover":Vn("bg-success-strong-hover"),"bg-warning":Vn("bg-warning"),"bg-warning-hover":Vn("bg-warning-hover"),"bg-warning-strong":Vn("bg-warning-strong"),"bg-warning-strong-hover":Vn("bg-warning-strong-hover"),"bg-info":Vn("bg-info"),"bg-info-hover":Vn("bg-info-hover"),"bg-info-strong":Vn("bg-info-strong"),"bg-info-strong-hover":Vn("bg-info-strong-hover"),"bg-error":Vn("bg-error"),"bg-error-hover":Vn("bg-error-hover"),"bg-error-strong":Vn("bg-error-strong"),"bg-error-strong-hover":Vn("bg-error-strong-hover"),"bg-inverse":Vn("bg-inverse"),"bg-inverse-subtle":Vn("bg-inverse-subtle"),"bg-inverse-subtler":Vn("bg-inverse-subtler"),"bg-inverse-subtlest":Vn("bg-inverse-subtlest"),"bg-inverse-hover":Vn("bg-inverse-hover"),"bg-primary":Vn("bg-primary"),"bg-primary-subtle":Vn("bg-primary-subtle"),"bg-primary-subtler":Vn("bg-primary-subtler"),"bg-primary-subtlest":Vn("bg-primary-subtlest"),"bg-available":Vn("bg-available"),"bg-primary-hover":Vn("bg-primary-hover"),"bg-primary-subtlest-hover":Vn("bg-primary-subtlest-hover"),"bg-primary-subtlest-selected":Vn("bg-primary-subtlest-selected"),"overlay-strong":Vn("overlay-strong"),"overlay-subtle":Vn("overlay-subtle"),hyperlink:Vn("hyperlink"),"hyperlink-hover":Vn("hyperlink-hover"),"hyperlink-visited":Vn("hyperlink-visited"),"hyperlink-inverse":Vn("hyperlink-inverse"),"focus-ring":Vn("focus-ring"),"focus-ring-inverse":Vn("focus-ring-inverse")},Un={collections:{default:{solid:e=>r=>{var n,t,i;const{thickness:o,radius:s,colour:a}=e||{},l=null!==(n="function"==typeof o?o(r):o)&&void 0!==n?n:$n["width-010"](r),d=null!==(t="function"==typeof s?s(r):s)&&void 0!==t?t:0,c=null!==(i="function"==typeof a?a(r):a)&&void 0!==i?i:Kn.border(r),u=$n.solid;return y`
            border: ${l} ${u} ${c};
            border-radius: ${d};
        `},"dashed-default":e=>r=>{var n,t,i;const{thickness:o,radius:s,colour:a}=e||{},l=null!==(n="function"==typeof o?o(r):o)&&void 0!==n?n:$n["width-010"](r),d=null!==(t="function"==typeof s?s(r):s)&&void 0!==t?t:0,c=null!==(i="function"==typeof a?a(r):a)&&void 0!==i?i:Kn.border(r),u=encodeURIComponent(`<svg width='100%' height='100%' xmlns='http://www.w3.org/2000/svg'><rect width='100%' height='100%' fill='none' rx='${d}' ry='${d}' stroke='${c}' stroke-width='${l}' stroke-dasharray='4, 8' stroke-dashoffset='0' stroke-linecap='square'/></svg>`);return y`
            background-image: url("data:image/svg+xml,${u}");
            border-radius: ${d};
        `}}},defaultValue:"default"},Zn=e=>1===e.length&&"theme"in e[0],Xn=e=>(...r)=>n=>{const t=Zn(r)?[]:r,i=Zn(r)?r[0]:n,o=i.theme;return(0,xn(Un,null==o?void 0:o.borderScheme)[e])(...t)(i)},qn={solid:Xn("solid"),"dashed-default":Xn("dashed-default")},Jn={collections:{default:{"xxs-min":0,"xxs-max":320,"xs-min":321,"xs-max":375,"sm-min":376,"sm-max":420,"md-min":421,"md-max":767,"lg-min":768,"lg-max":1023,"xl-min":1024,"xl-max":1440,"xxl-min":1441,"xxs-column":8,"xs-column":8,"sm-column":8,"md-column":8,"lg-column":12,"xl-column":12,"xxl-column":12,"xxs-gutter":16,"xs-gutter":16,"sm-gutter":16,"md-gutter":16,"lg-gutter":32,"xl-gutter":32,"xxl-gutter":32,"xxs-margin":24,"xs-margin":24,"sm-margin":24,"md-margin":24,"lg-margin":48,"xl-margin":48,"xxl-margin":48}},defaultValue:"default"},Gn=e=>r=>{var n;const t=r.theme,i=xn(Jn,null==t?void 0:t.breakpointScheme);let o;return o=(null===(n=null==t?void 0:t.overrides)||void 0===n?void 0:n.breakpoint)?vn(i,e,t.overrides.breakpoint):i[e],o},Qn={"xxs-min":Gn("xxs-min"),"xxs-max":Gn("xxs-max"),"xs-min":Gn("xs-min"),"xs-max":Gn("xs-max"),"sm-min":Gn("sm-min"),"sm-max":Gn("sm-max"),"md-min":Gn("md-min"),"md-max":Gn("md-max"),"lg-min":Gn("lg-min"),"lg-max":Gn("lg-max"),"xl-min":Gn("xl-min"),"xl-max":Gn("xl-max"),"xxl-min":Gn("xxl-min"),"xxs-column":Gn("xxs-column"),"xs-column":Gn("xs-column"),"sm-column":Gn("sm-column"),"md-column":Gn("md-column"),"lg-column":Gn("lg-column"),"xl-column":Gn("xl-column"),"xxl-column":Gn("xxl-column"),"xxs-gutter":Gn("xxs-gutter"),"xs-gutter":Gn("xs-gutter"),"sm-gutter":Gn("sm-gutter"),"md-gutter":Gn("md-gutter"),"lg-gutter":Gn("lg-gutter"),"xl-gutter":Gn("xl-gutter"),"xxl-gutter":Gn("xxl-gutter"),"xxs-margin":Gn("xxs-margin"),"xs-margin":Gn("xs-margin"),"sm-margin":Gn("sm-margin"),"md-margin":Gn("md-margin"),"lg-margin":Gn("lg-margin"),"xl-margin":Gn("xl-margin"),"xxl-margin":Gn("xxl-margin")},et=e=>("max-width"===e?["xxs","xs","sm","md","lg","xl"]:["xxs","xs","sm","md","lg","xl","xxl"]).reduce(((r,n)=>(r[n]=((e,r)=>{const n=Qn["max-width"===e?`${r}-max`:`${r}-min`];return r=>{const t=n(r);return`@media screen and (${e}: ${t}px)`}})(e,n),r)),{}),rt={MaxWidth:et("max-width"),MinWidth:et("min-width")},nt={collections:{default:{"heading-size-xxl":"3rem","heading-size-xl":"2.5rem","heading-size-lg":"2rem","heading-size-md":"1.625rem","heading-size-sm":"1.375rem","heading-size-xs":"1.125rem","heading-lh-xxl":"3.5rem","heading-lh-xl":"3rem","heading-lh-lg":"2.5rem","heading-lh-md":"2.25rem","heading-lh-sm":"1.75rem","heading-lh-xs":"1.625rem","heading-ls-xxl":"-0.056rem","heading-ls-xl":"-0.032rem","heading-ls-lg":"-0.032rem","heading-ls-md":"0rem","heading-ls-sm":"0rem","heading-ls-xs":"0rem","weight-light":"300","weight-regular":"400","weight-semibold":"600","weight-bold":"700","font-family":"Open Sans","body-size-baseline":"1.125rem","body-size-md":"1rem","body-size-sm":"0.875rem","body-size-xs":"0.75rem","body-lh-baseline":"1.625rem","body-lh-md":"1.5rem","body-lh-sm":"1.625rem","body-lh-xs":"1.25rem","body-ls-baseline":"0rem","body-ls-md":"0.014rem","body-ls-sm":"0.012rem","body-ls-xs":"0.012rem","form-label-size":"1rem","form-description-size":"0.875rem","form-label-lh":"1.5rem","form-description-lh":"1.6rem","form-label-ls":"0.014rem","form-description-ls":"0.012rem"},bookingsg:{"heading-size-xxl":"3rem","heading-size-xl":"2.5rem","heading-size-lg":"2rem","heading-size-md":"1.625rem","heading-size-sm":"1.375rem","heading-size-xs":"1.125rem","heading-lh-xxl":"3.5rem","heading-lh-xl":"3rem","heading-lh-lg":"2.5rem","heading-lh-md":"2.25rem","heading-lh-sm":"1.75rem","heading-lh-xs":"1.75rem","heading-ls-xxl":"-0.056rem","heading-ls-xl":"-0.032rem","heading-ls-lg":"-0.032rem","heading-ls-md":"0rem","heading-ls-sm":"0rem","heading-ls-xs":"0rem","weight-light":"300","weight-regular":"400","weight-semibold":"600","weight-bold":"700","font-family":"Plus Jakarta Sans","body-size-baseline":"1.125rem","body-size-md":"1rem","body-size-sm":"0.875rem","body-size-xs":"0.75rem","body-lh-baseline":"1.75rem","body-lh-md":"1.5rem","body-lh-sm":"1.6rem","body-lh-xs":"1.2rem","body-ls-baseline":"0rem","body-ls-md":"0.014rem","body-ls-sm":"0.012rem","body-ls-xs":"0.012rem","form-label-size":"1rem","form-description-size":"0.875rem","form-label-lh":"1.5rem","form-description-lh":"1.6rem","form-label-ls":"0.014rem","form-description-ls":"0.012rem"},pa:{"heading-size-xxl":"2.5rem","heading-size-xl":"2rem","heading-size-lg":"1.75rem","heading-size-md":"1.5rem","heading-size-sm":"1.25rem","heading-size-xs":"1rem","heading-lh-xxl":"3rem","heading-lh-xl":"2.5rem","heading-lh-lg":"2.25rem","heading-lh-md":"2rem","heading-lh-sm":"2rem","heading-lh-xs":"1.75rem","heading-ls-xxl":"-0.032rem","heading-ls-xl":"-0.032rem","heading-ls-lg":"0rem","heading-ls-md":"0rem","heading-ls-sm":"0rem","heading-ls-xs":"0rem","weight-light":"300","weight-regular":"400","weight-semibold":"600","weight-bold":"700","font-family":"Lato","body-size-baseline":"1rem","body-size-md":"0.875rem","body-size-sm":"0.75rem","body-size-xs":"0.625rem","body-lh-baseline":"1.75rem","body-lh-md":"1.5rem","body-lh-sm":"1.25rem","body-lh-xs":"1.25rem","body-ls-baseline":"0rem","body-ls-md":"0.014rem","body-ls-sm":"0.012rem","body-ls-xs":"0.012rem","form-label-size":"1rem","form-description-size":"0.875rem","form-label-lh":"1.5rem","form-description-lh":"1.6rem","form-label-ls":"0.014rem","form-description-ls":"0.012rem"},a11yplayground:{"heading-size-xxl":"3rem","heading-size-xl":"2.5rem","heading-size-lg":"2rem","heading-size-md":"1.625rem","heading-size-sm":"1.375rem","heading-size-xs":"1.125rem","heading-lh-xxl":"3.5rem","heading-lh-xl":"3rem","heading-lh-lg":"2.5rem","heading-lh-md":"2.25rem","heading-lh-sm":"1.75rem","heading-lh-xs":"1.625rem","heading-ls-xxl":"-0.056rem","heading-ls-xl":"-0.032rem","heading-ls-lg":"-0.032rem","heading-ls-md":"0rem","heading-ls-sm":"0rem","heading-ls-xs":"0rem","weight-light":"300","weight-regular":"400","weight-semibold":"600","weight-bold":"700","font-family":"Atkinson Hyperlegible Next","body-size-baseline":"1.125rem","body-size-md":"1rem","body-size-sm":"0.875rem","body-size-xs":"0.75rem","body-lh-baseline":"1.625rem","body-lh-md":"1.5rem","body-lh-sm":"1.625rem","body-lh-xs":"1.25rem","body-ls-baseline":"0rem","body-ls-md":"0.014rem","body-ls-sm":"0.012rem","body-ls-xs":"0.012rem","form-label-size":"1.125rem","form-description-size":"1rem","form-label-lh":"1.5rem","form-description-lh":"1.625rem","form-label-ls":"0rem","form-description-ls":"0.00875rem"},supportgowhere:{"heading-size-xxl":"3rem","heading-size-xl":"2.5rem","heading-size-lg":"2rem","heading-size-md":"1.625rem","heading-size-sm":"1.375rem","heading-size-xs":"1.125rem","heading-lh-xxl":"3.5rem","heading-lh-xl":"3rem","heading-lh-lg":"2.5rem","heading-lh-md":"2.25rem","heading-lh-sm":"1.75rem","heading-lh-xs":"1.625rem","heading-ls-xxl":"-0.056rem","heading-ls-xl":"-0.032rem","heading-ls-lg":"-0.032rem","heading-ls-md":"0rem","heading-ls-sm":"0rem","heading-ls-xs":"0rem","weight-light":"300","weight-regular":"400","weight-semibold":"600","weight-bold":"700","font-family":"Libre Franklin","body-size-baseline":"1.125rem","body-size-md":"1rem","body-size-sm":"0.875rem","body-size-xs":"0.75rem","body-lh-baseline":"1.625rem","body-lh-md":"1.5rem","body-lh-sm":"1.625rem","body-lh-xs":"1.25rem","body-ls-baseline":"0rem","body-ls-md":"0.014rem","body-ls-sm":"0.012rem","body-ls-xs":"0.012rem","form-label-size":"1rem","form-description-size":"0.875rem","form-label-lh":"1.5rem","form-description-lh":"1.6rem","form-label-ls":"0.014rem","form-description-ls":"0.012rem"}},defaultValue:"default"},tt=e=>r=>{var n;const t=r.theme,i=xn(nt,null==t?void 0:t.fontScheme);return(null===(n=null==t?void 0:t.overrides)||void 0===n?void 0:n.fontSpec)?vn(i,e,t.overrides.fontSpec):i[e]},it={"heading-size-xxl":tt("heading-size-xxl"),"heading-size-xl":tt("heading-size-xl"),"heading-size-lg":tt("heading-size-lg"),"heading-size-md":tt("heading-size-md"),"heading-size-sm":tt("heading-size-sm"),"heading-size-xs":tt("heading-size-xs"),"heading-lh-xxl":tt("heading-lh-xxl"),"heading-lh-xl":tt("heading-lh-xl"),"heading-lh-lg":tt("heading-lh-lg"),"heading-lh-md":tt("heading-lh-md"),"heading-lh-sm":tt("heading-lh-sm"),"heading-lh-xs":tt("heading-lh-xs"),"heading-ls-xxl":tt("heading-ls-xxl"),"heading-ls-xl":tt("heading-ls-xl"),"heading-ls-lg":tt("heading-ls-lg"),"heading-ls-md":tt("heading-ls-md"),"heading-ls-sm":tt("heading-ls-sm"),"heading-ls-xs":tt("heading-ls-xs"),"weight-light":tt("weight-light"),"weight-regular":tt("weight-regular"),"weight-semibold":tt("weight-semibold"),"weight-bold":tt("weight-bold"),"font-family":tt("font-family"),"body-size-baseline":tt("body-size-baseline"),"body-size-md":tt("body-size-md"),"body-size-sm":tt("body-size-sm"),"body-size-xs":tt("body-size-xs"),"body-lh-baseline":tt("body-lh-baseline"),"body-lh-md":tt("body-lh-md"),"body-lh-sm":tt("body-lh-sm"),"body-lh-xs":tt("body-lh-xs"),"body-ls-baseline":tt("body-ls-baseline"),"body-ls-md":tt("body-ls-md"),"body-ls-sm":tt("body-ls-sm"),"body-ls-xs":tt("body-ls-xs"),"form-label-size":tt("form-label-size"),"form-description-size":tt("form-description-size"),"form-label-lh":tt("form-label-lh"),"form-description-lh":tt("form-description-lh"),"form-label-ls":tt("form-label-ls"),"form-description-ls":tt("form-description-ls")},ot=(e,r,n,t,i)=>{const{disableLigatures:o}=i||{};return y`
        font-family: ${tt("font-family")};
        font-size: ${tt(e)};
        font-weight: ${tt(r)};
        line-height: ${tt(n)};
        letter-spacing: ${tt(t)};

        font-variant: ${o?"no-common-ligatures":"normal"};
    `},st=(e={})=>({"heading-xxl-light":ot("heading-size-xxl","weight-light","heading-lh-xxl","heading-ls-xxl",e),"heading-xxl-regular":ot("heading-size-xxl","weight-regular","heading-lh-xxl","heading-ls-xxl",e),"heading-xxl-semibold":ot("heading-size-xxl","weight-semibold","heading-lh-xxl","heading-ls-xxl",e),"heading-xxl-bold":ot("heading-size-xxl","weight-bold","heading-lh-xxl","heading-ls-xxl",e),"heading-xl-light":ot("heading-size-xl","weight-light","heading-lh-xl","heading-ls-xl",e),"heading-xl-regular":ot("heading-size-xl","weight-regular","heading-lh-xl","heading-ls-xl",e),"heading-xl-semibold":ot("heading-size-xl","weight-semibold","heading-lh-xl","heading-ls-xl",e),"heading-xl-bold":ot("heading-size-xl","weight-bold","heading-lh-xl","heading-ls-xl",e),"heading-lg-light":ot("heading-size-lg","weight-light","heading-lh-lg","heading-ls-lg",e),"heading-lg-regular":ot("heading-size-lg","weight-regular","heading-lh-lg","heading-ls-lg",e),"heading-lg-semibold":ot("heading-size-lg","weight-semibold","heading-lh-lg","heading-ls-lg",e),"heading-lg-bold":ot("heading-size-lg","weight-bold","heading-lh-lg","heading-ls-lg",e),"heading-md-light":ot("heading-size-md","weight-light","heading-lh-md","heading-ls-md",e),"heading-md-regular":ot("heading-size-md","weight-regular","heading-lh-md","heading-ls-md",e),"heading-md-semibold":ot("heading-size-md","weight-semibold","heading-lh-md","heading-ls-md",e),"heading-md-bold":ot("heading-size-md","weight-bold","heading-lh-md","heading-ls-md",e),"heading-sm-light":ot("heading-size-sm","weight-light","heading-lh-sm","heading-ls-sm",e),"heading-sm-regular":ot("heading-size-sm","weight-regular","heading-lh-sm","heading-ls-sm",e),"heading-sm-semibold":ot("heading-size-sm","weight-semibold","heading-lh-sm","heading-ls-sm",e),"heading-sm-bold":ot("heading-size-sm","weight-bold","heading-lh-sm","heading-ls-sm",e),"heading-xs-light":ot("heading-size-xs","weight-light","heading-lh-xs","heading-ls-xs",e),"heading-xs-regular":ot("heading-size-xs","weight-regular","heading-lh-xs","heading-ls-xs",e),"heading-xs-semibold":ot("heading-size-xs","weight-semibold","heading-lh-xs","heading-ls-xs",e),"heading-xs-bold":ot("heading-size-xs","weight-bold","heading-lh-xs","heading-ls-xs",e),"body-baseline-light":ot("body-size-baseline","weight-light","body-lh-baseline","body-ls-baseline",e),"body-baseline-regular":ot("body-size-baseline","weight-regular","body-lh-baseline","body-ls-baseline",e),"body-baseline-semibold":ot("body-size-baseline","weight-semibold","body-lh-baseline","body-ls-baseline",e),"body-baseline-bold":ot("body-size-baseline","weight-bold","body-lh-baseline","body-ls-baseline",e),"body-md-light":ot("body-size-md","weight-light","body-lh-md","body-ls-md",e),"body-md-regular":ot("body-size-md","weight-regular","body-lh-md","body-ls-md",e),"body-md-semibold":ot("body-size-md","weight-semibold","body-lh-md","body-ls-md",e),"body-md-bold":ot("body-size-md","weight-bold","body-lh-md","body-ls-md",e),"body-sm-light":ot("body-size-sm","weight-light","body-lh-sm","body-ls-sm",e),"body-sm-regular":ot("body-size-sm","weight-regular","body-lh-sm","body-ls-sm",e),"body-sm-semibold":ot("body-size-sm","weight-semibold","body-lh-sm","body-ls-sm",e),"body-sm-bold":ot("body-size-sm","weight-bold","body-lh-sm","body-ls-sm",e),"body-xs-light":ot("body-size-xs","weight-light","body-lh-xs","body-ls-xs",e),"body-xs-regular":ot("body-size-xs","weight-regular","body-lh-xs","body-ls-xs",e),"body-xs-semibold":ot("body-size-xs","weight-semibold","body-lh-xs","body-ls-xs",e),"body-xs-bold":ot("body-size-xs","weight-bold","body-lh-xs","body-ls-xs",e),"form-label":ot("form-label-size","weight-semibold","form-label-lh","form-label-ls",e),"form-description":ot("form-description-size","weight-regular","form-description-lh","form-description-ls",e)}),at=st({disableLigatures:!0}),lt={collections:{default:st(),bookingsg:at,pa:st({disableLigatures:!0}),a11yplayground:st({disableLigatures:!0}),supportgowhere:st({disableLigatures:!0})},defaultValue:"default"},dt=e=>r=>{var n;const t=r.theme,i=xn(lt,null==t?void 0:t.fontScheme),o=(null===(n=null==t?void 0:t.overrides)||void 0===n?void 0:n.font)?vn(i,e,t.overrides.font):i[e];return"function"==typeof o?o(r):o},ct={"heading-xxl-light":dt("heading-xxl-light"),"heading-xxl-regular":dt("heading-xxl-regular"),"heading-xxl-semibold":dt("heading-xxl-semibold"),"heading-xxl-bold":dt("heading-xxl-bold"),"heading-xl-light":dt("heading-xl-light"),"heading-xl-regular":dt("heading-xl-regular"),"heading-xl-semibold":dt("heading-xl-semibold"),"heading-xl-bold":dt("heading-xl-bold"),"heading-lg-light":dt("heading-lg-light"),"heading-lg-regular":dt("heading-lg-regular"),"heading-lg-semibold":dt("heading-lg-semibold"),"heading-lg-bold":dt("heading-lg-bold"),"heading-md-light":dt("heading-md-light"),"heading-md-regular":dt("heading-md-regular"),"heading-md-semibold":dt("heading-md-semibold"),"heading-md-bold":dt("heading-md-bold"),"heading-sm-light":dt("heading-sm-light"),"heading-sm-regular":dt("heading-sm-regular"),"heading-sm-semibold":dt("heading-sm-semibold"),"heading-sm-bold":dt("heading-sm-bold"),"heading-xs-light":dt("heading-xs-light"),"heading-xs-regular":dt("heading-xs-regular"),"heading-xs-semibold":dt("heading-xs-semibold"),"heading-xs-bold":dt("heading-xs-bold"),"body-baseline-light":dt("body-baseline-light"),"body-baseline-regular":dt("body-baseline-regular"),"body-baseline-semibold":dt("body-baseline-semibold"),"body-baseline-bold":dt("body-baseline-bold"),"body-md-light":dt("body-md-light"),"body-md-regular":dt("body-md-regular"),"body-md-semibold":dt("body-md-semibold"),"body-md-bold":dt("body-md-bold"),"body-sm-light":dt("body-sm-light"),"body-sm-regular":dt("body-sm-regular"),"body-sm-semibold":dt("body-sm-semibold"),"body-sm-bold":dt("body-sm-bold"),"body-xs-light":dt("body-xs-light"),"body-xs-regular":dt("body-xs-regular"),"body-xs-semibold":dt("body-xs-semibold"),"body-xs-bold":dt("body-xs-bold"),"form-label":dt("form-label"),"form-description":dt("form-description")},ut={collections:{default:{"duration-150":"150ms","duration-250":"250ms","duration-350":"350ms","duration-500":"500ms","duration-800":"800ms","duration-1000":"1000ms","ease-default":"cubic-bezier(0.45, 0.05, 0.55, 0.95)","ease-standard":"cubic-bezier(0.86, 0, 0.07, 1)","ease-entrance":"cubic-bezier(0.18, 0.13, 0, 1)","ease-exit":"cubic-bezier(1, 0, 0.8, 0.85)"}},defaultValue:"default"},gt=e=>r=>{var n;const t=r.theme,i=xn(ut,null==t?void 0:t.motionScheme);return(null===(n=null==t?void 0:t.overrides)||void 0===n?void 0:n.motion)?vn(i,e,t.overrides.motion):i[e]},ht={"duration-150":gt("duration-150"),"duration-250":gt("duration-250"),"duration-350":gt("duration-350"),"duration-500":gt("duration-500"),"duration-800":gt("duration-800"),"duration-1000":gt("duration-1000"),"ease-default":gt("ease-default"),"ease-standard":gt("ease-standard"),"ease-entrance":gt("ease-entrance"),"ease-exit":gt("ease-exit")},bt={collections:{default:{none:0,xs:2,sm:4,md:8,lg:12,full:9999}},defaultValue:"default"},mt=e=>r=>{var n;const t=r.theme,i=xn(bt,null==t?void 0:t.radiusScheme);return(null===(n=null==t?void 0:t.overrides)||void 0===n?void 0:n.radius)?`${vn(i,e,t.overrides.radius)}px`:`${i[e]}px`},pt={none:mt("none"),xs:mt("xs"),sm:mt("sm"),md:mt("md"),lg:mt("lg"),full:mt("full")},ft={collections:{default:{"spacing-0":0,"spacing-4":4,"spacing-8":8,"spacing-12":12,"spacing-16":16,"spacing-20":20,"spacing-24":24,"spacing-32":32,"spacing-40":40,"spacing-48":48,"spacing-64":64,"spacing-72":72,"layout-xs":8,"layout-sm":16,"layout-md":24,"layout-lg":32,"layout-xl":48,"layout-xxl":64,"layout-xxxl":128}},defaultValue:"default"},yt=e=>r=>{var n;const t=r.theme,i=xn(ft,null==t?void 0:t.spacingScheme);return(null===(n=null==t?void 0:t.overrides)||void 0===n?void 0:n.spacing)?`${vn(i,e,t.overrides.spacing)}px`:`${i[e]}px`},vt={"spacing-0":yt("spacing-0"),"spacing-4":yt("spacing-4"),"spacing-8":yt("spacing-8"),"spacing-12":yt("spacing-12"),"spacing-16":yt("spacing-16"),"spacing-20":yt("spacing-20"),"spacing-24":yt("spacing-24"),"spacing-32":yt("spacing-32"),"spacing-40":yt("spacing-40"),"spacing-48":yt("spacing-48"),"spacing-64":yt("spacing-64"),"spacing-72":yt("spacing-72"),"layout-xs":yt("layout-xs"),"layout-sm":yt("layout-sm"),"layout-md":yt("layout-md"),"layout-lg":yt("layout-lg"),"layout-xl":yt("layout-xl"),"layout-xxl":yt("layout-xxl"),"layout-xxxl":yt("layout-xxxl")},xt=(e,r)=>Object.assign(Object.assign({},e),{colourMode:r}),Ft=Object.assign(Object.assign({},Kn),{Primitive:jn}),wt=Object.assign(Object.assign({},ct),{Spec:it}),$t=ht,Et=Object.assign(Object.assign({},$n),{Util:qn}),Dt=vt,Ct=pt,Bt=Qn,St=rt,kt={colourScheme:"lifesg",fontScheme:"default",motionScheme:"default",borderScheme:"default",spacingScheme:"default",radiusScheme:"default",breakpointScheme:"default",resourceScheme:"lifesg",_v2:{colorScheme:"base",textStyleScheme:"base",designTokenScheme:"base",resourceScheme:"base"}},At={colourScheme:"bookingsg",fontScheme:"bookingsg",motionScheme:"default",borderScheme:"default",spacingScheme:"default",radiusScheme:"default",breakpointScheme:"default",resourceScheme:"bookingsg",_v2:{colorScheme:"bookingsg",textStyleScheme:"base",designTokenScheme:"base",resourceScheme:"bookingsg"}},zt={colourScheme:"ccube",fontScheme:"default",motionScheme:"default",borderScheme:"default",spacingScheme:"default",radiusScheme:"default",breakpointScheme:"default",resourceScheme:"ccube",_v2:{colorScheme:"ccube",textStyleScheme:"base",designTokenScheme:"base",resourceScheme:"ccube"}},Mt={colourScheme:"mylegacy",fontScheme:"default",motionScheme:"default",borderScheme:"default",spacingScheme:"default",radiusScheme:"default",breakpointScheme:"default",resourceScheme:"mylegacy",_v2:{colorScheme:"mylegacy",textStyleScheme:"base",designTokenScheme:"base",resourceScheme:"mylegacy"}},Ot={colourScheme:"rbs",fontScheme:"default",motionScheme:"default",borderScheme:"default",spacingScheme:"default",radiusScheme:"default",breakpointScheme:"default",resourceScheme:"rbs",_v2:{colorScheme:"rbs",textStyleScheme:"base",designTokenScheme:"rbs",resourceScheme:"rbs"}},_t={colourScheme:"oneservice",fontScheme:"default",motionScheme:"default",borderScheme:"default",spacingScheme:"default",radiusScheme:"default",breakpointScheme:"default",resourceScheme:"oneservice"},Tt={colourScheme:"pa",fontScheme:"pa",motionScheme:"default",borderScheme:"default",spacingScheme:"default",radiusScheme:"default",breakpointScheme:"default",resourceScheme:"pa",componentScheme:"pa"},Lt={colourScheme:"a11yplayground",fontScheme:"a11yplayground",motionScheme:"default",borderScheme:"default",spacingScheme:"default",radiusScheme:"default",breakpointScheme:"default",resourceScheme:"a11yplayground",componentScheme:"a11yplayground"},jt={colourScheme:"supportgowhere",fontScheme:"supportgowhere",motionScheme:"default",borderScheme:"default",spacingScheme:"default",radiusScheme:"default",breakpointScheme:"default",resourceScheme:"supportgowhere",componentScheme:"default"};Object.assign(Object.assign({},kt),{light:xt(kt,"light"),dark:xt(kt,"dark")}),Object.assign(Object.assign({},At),{light:xt(At,"light"),dark:xt(At,"dark")}),Object.assign(Object.assign({},zt),{light:xt(zt,"light"),dark:xt(zt,"dark")}),Object.assign(Object.assign({},Mt),{light:xt(Mt,"light"),dark:xt(Mt,"dark")}),Object.assign(Object.assign({},Ot),{light:xt(Ot,"light"),dark:xt(Ot,"dark")}),Object.assign(Object.assign({},_t),{light:xt(_t,"light"),dark:xt(_t,"dark")}),Object.assign(Object.assign({},Tt),{light:xt(Tt,"light"),dark:xt(Tt,"dark")}),Object.assign(Object.assign({},Lt),{light:xt(Lt,"light"),dark:xt(Lt,"dark")}),Object.assign(Object.assign({},jt),{light:xt(jt,"light"),dark:xt(jt,"dark")});const Rt=e=>y`
    display: -webkit-box;
    -webkit-line-clamp: ${e};
    -webkit-box-orient: vertical;
    overflow: hidden;
`,Yt=(e,r,n=!1)=>y`
        ${wt[`${e}-${r}`]}
        ${n?"margin-bottom: 1.05em;":"margin-bottom: 0;"}
    `,Pt=e=>{if(e)return y`
            ${Rt(e)}
        `},It=(e,r)=>y`
    ${Yt(e,r.weight||"regular",r.paragraph)}
    ${((e=!1,r=!1,n)=>r?y`
            display: block;
            ${Pt(n)}
        `:e?y`
            display: inline;
        `:y`
            display: block;
            ${Pt(n)}
        `)(r.inline,r.paragraph,r.maxLines)}
    color: ${Ft.text};
`;var Ht;!function(n){const t=(e,r,n)=>{const t=f(e).attrs((({inline:e})=>({as:e?"span":void 0})))`
            ${e=>It(r,e)}
        `;return t.displayName=`Typography.${n}`,t};n.HeadingXXL=t("h1","heading-xxl","HeadingXXL"),n.HeadingXL=t("h2","heading-xl","HeadingXL"),n.HeadingLG=t("h3","heading-lg","HeadingLG"),n.HeadingMD=t("h4","heading-md","HeadingMD"),n.HeadingSM=t("h5","heading-sm","HeadingSM"),n.HeadingXS=t("h6","heading-xs","HeadingXS");const i=(e,r)=>{const n=f.p.attrs((({inline:e})=>({as:e?"span":void 0})))`
            ${r=>It(e,r)}
        `;return n.displayName=`Typography.${r}`,n};n.BodyBL=i("body-baseline","BodyBL"),n.BodyMD=i("body-md","BodyMD"),n.BodySM=i("body-sm","BodySM"),n.BodyXS=i("body-xs","BodyXS");const o=(n,t)=>{const i=f.a`
            ${e=>y`
                ${Yt(n,e.weight||"regular")}
                color: ${Ft.hyperlink};
                text-decoration: none;

                :hover,
                :active,
                :focus {
                    color: ${Ft["text-hover"]};
                }
            `}
        `,o=n=>{var{external:t=!1,children:o}=n,s=V(n,["external","children"]);return e(i,Object.assign({},s,{children:[o,t&&r(Nt,{})]}))};return o.displayName=`Typography.${t}`,o};n.LinkBL=o("body-baseline","LinkBL"),n.LinkMD=o("body-md","LinkMD"),n.LinkSM=o("body-sm","LinkSM"),n.LinkXS=o("body-xs","LinkXS")}(Ht||(Ht={}));const Nt=f(p)`
    height: 1lh;
    width: 1em;
    margin-left: 0.4em;
    vertical-align: middle;
`;function Wt(e,r){return Wt=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,r){return e.__proto__=r,e},Wt(e,r)}function Vt(e){return e&&e.stopPropagation&&e.stopPropagation(),e&&e.preventDefault&&e.preventDefault(),!1}function Kt(e){return null==e?[]:Array.isArray(e)?e.slice():[e]}function Ut(e){return null!==e&&1===e.length?e[0]:e.slice()}function Zt(e){Object.keys(e).forEach((r=>{"undefined"!=typeof document&&document.addEventListener(r,e[r],!1)}))}function Xt(e,r){return qt(function(e,r){let n=e;return n<=r.min&&(n=r.min),n>=r.max&&(n=r.max),n}(e,r),r)}function qt(e,r){const n=(e-r.min)%r.step;let t=e-n;return 2*Math.abs(n)>=r.step&&(t+=n>0?r.step:-r.step),parseFloat(t.toFixed(5))}let Jt=function(e){function r(r){var n;(n=e.call(this,r)||this).onKeyUp=()=>{n.onEnd()},n.onMouseUp=()=>{n.onEnd(n.getMouseEventMap())},n.onTouchEnd=e=>{e.preventDefault(),n.onEnd(n.getTouchEventMap())},n.onBlur=()=>{n.setState({index:-1},n.onEnd(n.getKeyDownEventMap()))},n.onMouseMove=e=>{n.setState({pending:!0});const r=n.getMousePosition(e),t=n.getDiffPosition(r[0]),i=n.getValueFromPosition(t);n.move(i)},n.onTouchMove=e=>{if(e.touches.length>1)return;n.setState({pending:!0});const r=n.getTouchPosition(e);if(void 0===n.isScrolling){const e=r[0]-n.startPosition[0],t=r[1]-n.startPosition[1];n.isScrolling=Math.abs(t)>Math.abs(e)}if(n.isScrolling)return void n.setState({index:-1});const t=n.getDiffPosition(r[0]),i=n.getValueFromPosition(t);n.move(i)},n.onKeyDown=e=>{if(!(e.ctrlKey||e.shiftKey||e.altKey||e.metaKey))switch(n.setState({pending:!0}),e.key){case"ArrowLeft":case"ArrowDown":case"Left":case"Down":e.preventDefault(),n.moveDownByStep();break;case"ArrowRight":case"ArrowUp":case"Right":case"Up":e.preventDefault(),n.moveUpByStep();break;case"Home":e.preventDefault(),n.move(n.props.min);break;case"End":e.preventDefault(),n.move(n.props.max);break;case"PageDown":e.preventDefault(),n.moveDownByStep(n.props.pageFn(n.props.step));break;case"PageUp":e.preventDefault(),n.moveUpByStep(n.props.pageFn(n.props.step))}},n.onSliderMouseDown=e=>{if(!n.props.disabled&&2!==e.button){if(n.setState({pending:!0}),!n.props.snapDragDisabled){const r=n.getMousePosition(e);n.forceValueFromPosition(r[0],(e=>{n.start(e,r[0]),Zt(n.getMouseEventMap())}))}Vt(e)}},n.onSliderClick=e=>{if(!n.props.disabled&&n.props.onSliderClick&&!n.hasMoved){const r=n.getMousePosition(e),t=Xt(n.calcValue(n.calcOffsetFromPosition(r[0])),n.props);n.props.onSliderClick(t)}},n.createOnKeyDown=e=>r=>{n.props.disabled||(n.start(e),Zt(n.getKeyDownEventMap()),Vt(r))},n.createOnMouseDown=e=>r=>{if(n.props.disabled||2===r.button)return;n.setState({pending:!0});const t=n.getMousePosition(r);n.start(e,t[0]),Zt(n.getMouseEventMap()),Vt(r)},n.createOnTouchStart=e=>r=>{if(n.props.disabled||r.touches.length>1)return;n.setState({pending:!0});const t=n.getTouchPosition(r);n.startPosition=t,n.isScrolling=void 0,n.start(e,t[0]),Zt(n.getTouchEventMap()),function(e){e.stopPropagation&&e.stopPropagation()}(r)},n.handleResize=()=>{const e=window.setTimeout((()=>{n.pendingResizeTimeouts.shift(),n.resize()}),0);n.pendingResizeTimeouts.push(e)},n.renderThumb=(e,r)=>{const t=n.props.thumbClassName+" "+n.props.thumbClassName+"-"+r+" "+(n.state.index===r?n.props.thumbActiveClassName:""),i={ref:e=>{n["thumb"+r]=e},key:n.props.thumbClassName+"-"+r,className:t,style:e,onMouseDown:n.createOnMouseDown(r),onTouchStart:n.createOnTouchStart(r),onFocus:n.createOnKeyDown(r),tabIndex:0,role:"slider","aria-orientation":n.props.orientation,"aria-valuenow":n.state.value[r],"aria-valuemin":n.props.min,"aria-valuemax":n.props.max,"aria-label":Array.isArray(n.props.ariaLabel)?n.props.ariaLabel[r]:n.props.ariaLabel,"aria-labelledby":Array.isArray(n.props.ariaLabelledby)?n.props.ariaLabelledby[r]:n.props.ariaLabelledby,"aria-disabled":n.props.disabled},o={index:r,value:Ut(n.state.value),valueNow:n.state.value[r]};return n.props.ariaValuetext&&(i["aria-valuetext"]="string"==typeof n.props.ariaValuetext?n.props.ariaValuetext:n.props.ariaValuetext(o)),n.props.renderThumb(i,o)},n.renderTrack=(e,r,t)=>{const i={key:n.props.trackClassName+"-"+e,className:n.props.trackClassName+" "+n.props.trackClassName+"-"+e,style:n.buildTrackStyle(r,n.state.upperBound-t)},o={index:e,value:Ut(n.state.value)};return n.props.renderTrack(i,o)};let t=Kt(r.value);t.length||(t=Kt(r.defaultValue)),n.pendingResizeTimeouts=[];const o=[];for(let e=0;e<t.length;e+=1)t[e]=Xt(t[e],r),o.push(e);return n.resizeObserver=null,n.resizeElementRef=i.createRef(),n.state={index:-1,upperBound:0,sliderLength:0,value:t,zIndices:o},n}!function(e,r){e.prototype=Object.create(r.prototype),e.prototype.constructor=e,Wt(e,r)}(r,e);var n=r.prototype;return n.componentDidMount=function(){"undefined"!=typeof window&&(this.resizeObserver=new ResizeObserver(this.handleResize),this.resizeObserver.observe(this.resizeElementRef.current),this.resize())},r.getDerivedStateFromProps=function(e,r){const n=Kt(e.value);return n.length?r.pending?null:{value:n.map((r=>Xt(r,e)))}:null},n.componentDidUpdate=function(){0===this.state.upperBound&&this.resize()},n.componentWillUnmount=function(){this.clearPendingResizeTimeouts(),this.resizeObserver&&this.resizeObserver.disconnect()},n.onEnd=function(e){e&&function(e){Object.keys(e).forEach((r=>{"undefined"!=typeof document&&document.removeEventListener(r,e[r],!1)}))}(e),this.hasMoved&&this.fireChangeEvent("onAfterChange"),this.setState({pending:!1}),this.hasMoved=!1},n.getValue=function(){return Ut(this.state.value)},n.getClosestIndex=function(e){let r=Number.MAX_VALUE,n=-1;const{value:t}=this.state,i=t.length;for(let o=0;o<i;o+=1){const i=this.calcOffset(t[o]),s=Math.abs(e-i);s<r&&(r=s,n=o)}return n},n.getMousePosition=function(e){return[e["page"+this.axisKey()],e["page"+this.orthogonalAxisKey()]]},n.getTouchPosition=function(e){const r=e.touches[0];return[r["page"+this.axisKey()],r["page"+this.orthogonalAxisKey()]]},n.getKeyDownEventMap=function(){return{keydown:this.onKeyDown,keyup:this.onKeyUp,focusout:this.onBlur}},n.getMouseEventMap=function(){return{mousemove:this.onMouseMove,mouseup:this.onMouseUp}},n.getTouchEventMap=function(){return{touchmove:this.onTouchMove,touchend:this.onTouchEnd}},n.getValueFromPosition=function(e){const r=e/(this.state.sliderLength-this.state.thumbSize)*(this.props.max-this.props.min);return Xt(this.state.startValue+r,this.props)},n.getDiffPosition=function(e){let r=e-this.state.startPosition;return this.props.invert&&(r*=-1),r},n.resize=function(){const{slider:e,thumb0:r}=this;if(!e||!r)return;const n=this.sizeKey(),t=e.getBoundingClientRect(),i=e[n],o=t[this.posMaxKey()],s=t[this.posMinKey()],a=r.getBoundingClientRect()[n.replace("client","").toLowerCase()],l=i-a,d=Math.abs(o-s);this.state.upperBound===l&&this.state.sliderLength===d&&this.state.thumbSize===a||this.setState({upperBound:l,sliderLength:d,thumbSize:a})},n.calcOffset=function(e){const r=this.props.max-this.props.min;return 0===r?0:(e-this.props.min)/r*this.state.upperBound},n.calcValue=function(e){return e/this.state.upperBound*(this.props.max-this.props.min)+this.props.min},n.calcOffsetFromPosition=function(e){const{slider:r}=this,n=r.getBoundingClientRect(),t=n[this.posMaxKey()],i=n[this.posMinKey()];let o=e-(window["page"+this.axisKey()+"Offset"]+(this.props.invert?t:i));return this.props.invert&&(o=this.state.sliderLength-o),o-=this.state.thumbSize/2,o},n.forceValueFromPosition=function(e,r){const n=this.calcOffsetFromPosition(e),t=this.getClosestIndex(n),i=Xt(this.calcValue(n),this.props),o=this.state.value.slice();o[t]=i;for(let e=0;e<o.length-1;e+=1)if(o[e+1]-o[e]<this.props.minDistance)return;this.fireChangeEvent("onBeforeChange"),this.hasMoved=!0,this.setState({value:o},(()=>{r(t),this.fireChangeEvent("onChange")}))},n.clearPendingResizeTimeouts=function(){do{const e=this.pendingResizeTimeouts.shift();clearTimeout(e)}while(this.pendingResizeTimeouts.length)},n.start=function(e,r){const n=this["thumb"+e];n&&n.focus();const{zIndices:t}=this.state;t.splice(t.indexOf(e),1),t.push(e),this.setState((n=>({startValue:n.value[e],startPosition:void 0!==r?r:n.startPosition,index:e,zIndices:t})))},n.moveUpByStep=function(e){void 0===e&&(e=this.props.step);const r=this.state.value[this.state.index],n=Xt(this.props.invert&&"horizontal"===this.props.orientation?r-e:r+e,this.props);this.move(Math.min(n,this.props.max))},n.moveDownByStep=function(e){void 0===e&&(e=this.props.step);const r=this.state.value[this.state.index],n=Xt(this.props.invert&&"horizontal"===this.props.orientation?r+e:r-e,this.props);this.move(Math.max(n,this.props.min))},n.move=function(e){const r=this.state.value.slice(),{index:n}=this.state,{length:t}=r,i=r[n];if(e===i)return;this.hasMoved||this.fireChangeEvent("onBeforeChange"),this.hasMoved=!0;const{pearling:o,max:s,min:a,minDistance:l}=this.props;if(!o){if(n>0){const t=r[n-1];e<t+l&&(e=t+l)}if(n<t-1){const t=r[n+1];e>t-l&&(e=t-l)}}r[n]=e,o&&t>1&&(e>i?(this.pushSucceeding(r,l,n),function(e,r,n,t){for(let i=0;i<e;i+=1){const o=t-i*n;r[e-1-i]>o&&(r[e-1-i]=o)}}(t,r,l,s)):e<i&&(this.pushPreceding(r,l,n),function(e,r,n,t){for(let i=0;i<e;i+=1){const e=t+i*n;r[i]<e&&(r[i]=e)}}(t,r,l,a))),this.setState({value:r},this.fireChangeEvent.bind(this,"onChange"))},n.pushSucceeding=function(e,r,n){let t,i;for(t=n,i=e[t]+r;null!==e[t+1]&&i>e[t+1];t+=1,i=e[t]+r)e[t+1]=qt(i,this.props)},n.pushPreceding=function(e,r,n){for(let t=n,i=e[t]-r;null!==e[t-1]&&i<e[t-1];t-=1,i=e[t]-r)e[t-1]=qt(i,this.props)},n.axisKey=function(){return"vertical"===this.props.orientation?"Y":"X"},n.orthogonalAxisKey=function(){return"vertical"===this.props.orientation?"X":"Y"},n.posMinKey=function(){return"vertical"===this.props.orientation?this.props.invert?"bottom":"top":this.props.invert?"right":"left"},n.posMaxKey=function(){return"vertical"===this.props.orientation?this.props.invert?"top":"bottom":this.props.invert?"left":"right"},n.sizeKey=function(){return"vertical"===this.props.orientation?"clientHeight":"clientWidth"},n.fireChangeEvent=function(e){this.props[e]&&this.props[e](Ut(this.state.value),this.state.index)},n.buildThumbStyle=function(e,r){const n={position:"absolute",touchAction:"none",willChange:this.state.index>=0?this.posMinKey():void 0,zIndex:this.state.zIndices.indexOf(r)+1};return n[this.posMinKey()]=e+"px",n},n.buildTrackStyle=function(e,r){const n={position:"absolute",willChange:this.state.index>=0?this.posMinKey()+","+this.posMaxKey():void 0};return n[this.posMinKey()]=e,n[this.posMaxKey()]=r,n},n.buildMarkStyle=function(e){var r;return(r={position:"absolute"})[this.posMinKey()]=e,r},n.renderThumbs=function(e){const{length:r}=e,n=[];for(let t=0;t<r;t+=1)n[t]=this.buildThumbStyle(e[t],t);const t=[];for(let e=0;e<r;e+=1)t[e]=this.renderThumb(n[e],e);return t},n.renderTracks=function(e){const r=[],n=e.length-1;r.push(this.renderTrack(0,0,e[0]));for(let t=0;t<n;t+=1)r.push(this.renderTrack(t+1,e[t],e[t+1]));return r.push(this.renderTrack(n+1,e[n],this.state.upperBound)),r},n.renderMarks=function(){let{marks:e}=this.props;const r=this.props.max-this.props.min+1;return"boolean"==typeof e?e=Array.from({length:r}).map(((e,r)=>r)):"number"==typeof e&&(e=Array.from({length:r}).map(((e,r)=>r)).filter((r=>r%e==0))),e.map(parseFloat).sort(((e,r)=>e-r)).map((e=>{const r=this.calcOffset(e),n={key:e,className:this.props.markClassName,style:this.buildMarkStyle(r)};return this.props.renderMark(n)}))},n.render=function(){const e=[],{value:r}=this.state,n=r.length;for(let t=0;t<n;t+=1)e[t]=this.calcOffset(r[t],t);const t=this.props.withTracks?this.renderTracks(e):null,o=this.renderThumbs(e),s=this.props.marks?this.renderMarks():null;return i.createElement("div",{ref:e=>{this.slider=e,this.resizeElementRef.current=e},style:{position:"relative"},className:this.props.className+(this.props.disabled?" disabled":""),onMouseDown:this.onSliderMouseDown,onClick:this.onSliderClick},t,o,s)},r}(i.Component);Jt.displayName="ReactSlider",Jt.defaultProps={min:0,max:100,step:1,pageFn:e=>10*e,minDistance:0,defaultValue:0,orientation:"horizontal",className:"slider",thumbClassName:"thumb",thumbActiveClassName:"active",trackClassName:"track",markClassName:"mark",withTracks:!0,pearling:!1,disabled:!1,snapDragDisabled:!1,invert:!1,marks:[],renderThumb:e=>i.createElement("div",e),renderTrack:e=>i.createElement("div",e),renderMark:e=>i.createElement("span",e)};var Gt=Jt;const Qt=f.div`
    isolation: isolate;
`,ei=f.div`
    margin-top: ${Dt["spacing-8"]};
    display: flex;
    justify-content: space-between;
    gap: ${Dt["spacing-8"]};
`,ri=f.div`
    margin-bottom: ${Dt["spacing-8"]};
`,ni=f(Ht.BodyBL)`
    overflow-wrap: anywhere;
`,ti=f(Gt)`
    height: 0.875rem;
`,ii=f.div`
    height: 2.5rem;
    width: 2.5rem;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    ${e=>e.$disabled?y`
                cursor: not-allowed;
            `:e.$readOnly?void 0:y`
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

        background-color: ${Ft.bg};
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.16);
        border: ${Et["width-010"]} ${Et.solid}
            ${e=>e.$disabled?Ft["border-selected-disabled"]:Ft["border-strong"]};
        border-radius: ${Ct.full};
    }
`,oi=f.div`
    height: 0.875rem;
    width: 0.875rem;
    position: relative;
    outline: none;

    :focus ${ii}:after {
        outline-offset: -1px;
        outline: ${Et["width-040"]} ${Et.solid}
            ${Ft["border-selected"]};
    }
`,si=f.div`
    height: 0.25rem;
    top: 50%;
    transform: translateY(-50%);
    border-radius: ${Ct.full};

    background: ${e=>e.$color&&"function"==typeof e.$color?e.$color(e):e.$color||Ft["border-strong"](e)};
`,ai=f.div`
    display: flex;
    margin-bottom: ${Dt["spacing-16"]};
    align-items: baseline;
`,li=f.div`
    margin: 0 0.5rem;
`,di=f.div`
    width: 100%;
    height: 4rem;
    display: flex;
    align-items: flex-end;
    padding: 0 0.4375rem;
`,ci=f.div`
    flex: 1;
    border-radius: ${Ct.sm} ${Ct.sm} 0 0;
    border: 0.5px solid transparent; // space between bars
    background-clip: content-box;

    ${e=>{let r=Ft["bg-strongest"];return e.$disabled&&e.$selected?r=Ft["bg-selected-stronger-disabled"]:e.$disabled?r=Ft["bg-disabled"]:e.$selected&&(r=Ft["bg-selected-stronger"]),y`
            background-color: ${r};
        `}}
`,ui=f((n=>{var{value:t,min:i=0,max:a=100,step:l=1,minRange:d,numOfThumbs:c=2,colors:u,disabled:g,readOnly:h,ariaLabels:b,showSliderLabels:m,sliderLabelPrefix:p,sliderLabelSuffix:f,showIndicatorLabel:y,indicatorLabelPrefix:v,indicatorLabelSuffix:x,renderSliderLabel:F,onChange:w,onChangeEnd:$}=n,E=V(n,["value","min","max","step","minRange","numOfThumbs","colors","disabled","readOnly","ariaLabels","showSliderLabels","sliderLabelPrefix","sliderLabelSuffix","showIndicatorLabel","indicatorLabelPrefix","indicatorLabelSuffix","renderSliderLabel","onChange","onChangeEnd"]);const[D,C]=o(S()),B=function(){const e=function(){const e=g||h?Ft["border-disabled"]:Ft["border-strong"],r=g||h?Ft["border-selected-disabled"]:Ft["border-selected"];if(1===c)return[r,e];const n=[];n.push(e);for(let e=0;e<c-1;e++)n.push(r);return n.push(e),n}();return new Array(c+1).fill(0).map(((r,n)=>(null==u?void 0:u[n])||e[n]))}();s((()=>{t!==D&&C(S())}),[t]);function S(){if(t&&t.length===c)return t;const e=[];for(let r=0;r<c;r++)e.push(i+l*r);return e}const k=r=>F?F(r):e(ni,{children:[p,r,f]});return e(Qt,Object.assign({},E,{children:[y&&r(ri,{children:(()=>{let r="";if(1===D.length)r=`${D[0]}`;else if(2===D.length)r=`${D[0]} - ${D[1]}`;else if(D.length>2){r=`${Math.min(...D)} - ${Math.max(...D)}`}return e(ni,{children:[v,r,x]})})()}),r(ti,{step:l,min:i,max:a,value:D,disabled:g||h,onChange:(e,r)=>{if("number"==typeof e){const r=[e];C(r),null==w||w(r)}else{if(r>-1&&D[r]===e[r])return;const n=[...e];C(n),null==w||w(n)}},onAfterChange:e=>{if("number"==typeof e){const r=[e];C(r),null==$||$(r)}else{const r=[...e];C(r),null==$||$(r)}},minDistance:d,ariaLabel:b,renderThumb:(e,n)=>r(oi,Object.assign({"data-testid":`slider-thumb-${n.index}`},e,{tabIndex:g?void 0:e.tabIndex,children:r(ii,{$disabled:g,$readOnly:h})})),renderTrack:(e,n)=>r(si,Object.assign({"data-testid":`slider-track-${n.index}`},e,{$color:B[n.index]}))}),m&&e(ei,{children:[r("div",{children:k(i)}),r("div",{children:k(a)})]})]}))}))`
    margin-top: -0.3125rem;
`,gi=t=>{var{bins:i=[],interval:l,disabled:d,readOnly:c,value:u,showRangeLabels:g,rangeLabelPrefix:h,rangeLabelSuffix:b,ariaLabels:m,onChange:p,onChangeEnd:f,renderEmptyView:y,renderRangeLabel:v}=t,x=V(t,["bins","interval","disabled","readOnly","value","showRangeLabels","rangeLabelPrefix","rangeLabelSuffix","ariaLabels","onChange","onChangeEnd","renderEmptyView","renderRangeLabel"]);const F=i.map((e=>e.count)),w=Math.max(...F),$=i.map((e=>e.minValue)),E=Math.max(...$),D=Math.min(...$),[C,B]=o(z()),S=a((()=>{const e=[...i].sort(((e,r)=>e.minValue-r.minValue)),r=(E-D)/l+1,n=[];for(let t=0;t<r;t++){const r=e.find((e=>e.minValue===D+l*t));r?n.push(r):n.push({count:0,minValue:D+l*t})}return n}),[i,l]);s((()=>{u!==C&&B(z())}),[u]);const k=e=>{const[r,n]=e,t=[r,n];B(t),null==p||p(t)},A=e=>{const[r,n]=e,t=[r,n];B(t),null==f||f(t)};function z(){return null!=u?u:[D,D+l]}const M=r=>v?v(r):e(Ht.BodyBL,{children:[h,r,b]});return e("div",Object.assign({},x,{children:[g&&e(ai,{children:[M(C[0]),r(li,{children:"-"}),M(C[1])]}),S.every((e=>0===e.count))&&y?y():e(n,{children:[r(di,{children:S.map(((e,n)=>{const t=e.count/w;return r(ci,{style:{height:t?`calc(calc(100% - 0.25rem) * ${t} + 0.25rem)`:0},$selected:e.minValue>=C[0]&&e.minValue<C[1],$disabled:d||c},n)}))}),r(ui,{min:D,max:E+l,step:l,minRange:l,numOfThumbs:2,value:C,disabled:d,readOnly:c,ariaLabels:m,onChange:k,onChangeEnd:A})]})]}))};var hi=function(e,r){return hi=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,r){e.__proto__=r}||function(e,r){for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])},hi(e,r)};var bi=function(){return bi=Object.assign||function(e){for(var r,n=1,t=arguments.length;n<t;n++)for(var i in r=arguments[n])Object.prototype.hasOwnProperty.call(r,i)&&(e[i]=r[i]);return e},bi.apply(this,arguments)};var mi="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};var pi=function(e){var r=typeof e;return null!=e&&("object"==r||"function"==r)},fi="object"==typeof mi&&mi&&mi.Object===Object&&mi,yi="object"==typeof self&&self&&self.Object===Object&&self,vi=fi||yi||Function("return this")(),xi=vi,Fi=function(){return xi.Date.now()},wi=/\s/;var $i=function(e){for(var r=e.length;r--&&wi.test(e.charAt(r)););return r},Ei=/^\s+/;var Di=function(e){return e?e.slice(0,$i(e)+1).replace(Ei,""):e},Ci=vi.Symbol,Bi=Ci,Si=Object.prototype,ki=Si.hasOwnProperty,Ai=Si.toString,zi=Bi?Bi.toStringTag:void 0;var Mi=function(e){var r=ki.call(e,zi),n=e[zi];try{e[zi]=void 0;var t=!0}catch(e){}var i=Ai.call(e);return t&&(r?e[zi]=n:delete e[zi]),i},Oi=Object.prototype.toString;var _i=Mi,Ti=function(e){return Oi.call(e)},Li=Ci?Ci.toStringTag:void 0;var ji=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":Li&&Li in Object(e)?_i(e):Ti(e)},Ri=function(e){return null!=e&&"object"==typeof e};var Yi=Di,Pi=pi,Ii=function(e){return"symbol"==typeof e||Ri(e)&&"[object Symbol]"==ji(e)},Hi=/^[-+]0x[0-9a-f]+$/i,Ni=/^0b[01]+$/i,Wi=/^0o[0-7]+$/i,Vi=parseInt;var Ki=pi,Ui=Fi,Zi=function(e){if("number"==typeof e)return e;if(Ii(e))return NaN;if(Pi(e)){var r="function"==typeof e.valueOf?e.valueOf():e;e=Pi(r)?r+"":r}if("string"!=typeof e)return 0===e?e:+e;e=Yi(e);var n=Ni.test(e);return n||Wi.test(e)?Vi(e.slice(2),n?2:8):Hi.test(e)?NaN:+e},Xi=Math.max,qi=Math.min;var Ji=function(e,r,n){var t,i,o,s,a,l,d=0,c=!1,u=!1,g=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function h(r){var n=t,o=i;return t=i=void 0,d=r,s=e.apply(o,n)}function b(e){var n=e-l;return void 0===l||n>=r||n<0||u&&e-d>=o}function m(){var e=Ui();if(b(e))return p(e);a=setTimeout(m,function(e){var n=r-(e-l);return u?qi(n,o-(e-d)):n}(e))}function p(e){return a=void 0,g&&t?h(e):(t=i=void 0,s)}function f(){var e=Ui(),n=b(e);if(t=arguments,i=this,l=e,n){if(void 0===a)return function(e){return d=e,a=setTimeout(m,r),c?h(e):s}(l);if(u)return clearTimeout(a),a=setTimeout(m,r),h(l)}return void 0===a&&(a=setTimeout(m,r)),s}return r=Zi(r)||0,Ki(n)&&(c=!!n.leading,o=(u="maxWait"in n)?Xi(Zi(n.maxWait)||0,r):o,g="trailing"in n?!!n.trailing:g),f.cancel=function(){void 0!==a&&clearTimeout(a),d=0,t=l=i=a=void 0},f.flush=function(){return void 0===a?s:p(Ui())},f},Gi=Ji,Qi=pi;var eo=function(e,r,n){var t=!0,i=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return Qi(n)&&(t="leading"in n?!!n.leading:t,i="trailing"in n?!!n.trailing:i),Gi(e,r,{leading:t,maxWait:r,trailing:i})},ro=function(e,r,n,t){switch(r){case"debounce":return Ji(e,n,t);case"throttle":return eo(e,n,t);default:return e}},no=function(e){return"function"==typeof e},to=function(){return"undefined"==typeof window},io=function(e){return e instanceof Element||e instanceof HTMLDocument},oo=function(e,r,n,t){return function(i){var o=i.width,s=i.height;r((function(r){return r.width===o&&r.height===s||r.width===o&&!t||r.height===s&&!n?r:(e&&no(e)&&e(o,s),{width:o,height:s})}))}};!function(e){function r(r){var n=e.call(this,r)||this;n.cancelHandler=function(){n.resizeHandler&&n.resizeHandler.cancel&&(n.resizeHandler.cancel(),n.resizeHandler=null)},n.attachObserver=function(){var e=n.props,r=e.targetRef,t=e.observerOptions;if(!to()){r&&r.current&&(n.targetRef.current=r.current);var i=n.getElement();i&&(n.observableElement&&n.observableElement===i||(n.observableElement=i,n.resizeObserver.observe(i,t)))}},n.getElement=function(){var e=n.props,r=e.querySelector,t=e.targetDomEl;if(to())return null;if(r)return document.querySelector(r);if(t&&io(t))return t;if(n.targetRef&&io(n.targetRef.current))return n.targetRef.current;var i=W(n);if(!i)return null;switch(n.getRenderType()){case"renderProp":case"childFunction":case"child":case"childArray":return i;default:return i.parentElement}},n.createResizeHandler=function(e){var r=n.props,t=r.handleWidth,i=void 0===t||t,o=r.handleHeight,s=void 0===o||o,a=r.onResize;if(i||s){var l=oo(a,n.setState.bind(n),i,s);e.forEach((function(e){var r=e&&e.contentRect||{},t=r.width,i=r.height;!n.skipOnMount&&!to()&&l({width:t,height:i}),n.skipOnMount=!1}))}},n.getRenderType=function(){var e=n.props,r=e.render,t=e.children;return no(r)?"renderProp":no(t)?"childFunction":d(t)?"child":Array.isArray(t)?"childArray":"parent"};var t=r.skipOnMount,i=r.refreshMode,o=r.refreshRate,s=void 0===o?1e3:o,a=r.refreshOptions;return n.state={width:void 0,height:void 0},n.skipOnMount=t,n.targetRef=c(),n.observableElement=null,to()||(n.resizeHandler=ro(n.createResizeHandler,i,s,a),n.resizeObserver=new window.ResizeObserver(n.resizeHandler)),n}(function(e,r){if("function"!=typeof r&&null!==r)throw new TypeError("Class extends value "+String(r)+" is not a constructor or null");function n(){this.constructor=e}hi(e,r),e.prototype=null===r?Object.create(r):(n.prototype=r.prototype,new n)})(r,e),r.prototype.componentDidMount=function(){this.attachObserver()},r.prototype.componentDidUpdate=function(){this.attachObserver()},r.prototype.componentWillUnmount=function(){to()||(this.observableElement=null,this.resizeObserver.disconnect(),this.cancelHandler())},r.prototype.render=function(){var e,r=this.props,n=r.render,i=r.children,o=r.nodeType,s=void 0===o?"div":o,a=this.state,l={width:a.width,height:a.height,targetRef:this.targetRef};switch(this.getRenderType()){case"renderProp":return n&&n(l);case"childFunction":return(e=i)(l);case"child":if((e=i).type&&"string"==typeof e.type){var d=function(e,r){var n={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&r.indexOf(t)<0&&(n[t]=e[t]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(t=Object.getOwnPropertySymbols(e);i<t.length;i++)r.indexOf(t[i])<0&&Object.prototype.propertyIsEnumerable.call(e,t[i])&&(n[t[i]]=e[t[i]])}return n}(l,["targetRef"]);return u(e,d)}return u(e,l);case"childArray":return(e=i).map((function(e){return!!e&&u(e,l)}));default:return t.createElement(s,null)}}}(g);var so,ao=to()?s:h;!function(e){e.transformWithSpaces=(e,r)=>{const n="(.{"+r+"})";return e.replace(/[^\dA-Z]/gi,"").replace(new RegExp(n,"g"),"$1 ").trim()},e.padValue=(e,r)=>{if("0"===e)return r?e:e.padStart(2,"0");if(""===e)return e;return parseInt(e).toString().padStart(2,"0")},e.shouldTruncateToTwoLines=(e,r)=>{const n=Math.floor(r/9);return e.length>=2*n||1===e.split(" ").length&&e.length>n},e.truncateOneLine=(e,r,n,t,i=8)=>{let o=0;r>n&&(o=Math.floor((r-n)/i));const s=t+o;if(s<e.length){const r=Math.floor(s/2);return e.substring(0,r)+" ... "+e.substring(e.length-r,e.length)}return e},e.truncateTwoLines=(e,r,n,t=1.2)=>{const i=Math.floor(2*r/(.6*n))*(2/t);if(e.length<=i)return e;const o=Math.floor(.6*i),s=Math.floor(.2*i);return`${e.substring(0,o)}...${e.substring(e.length-s)}`},e.getTextWidth=(r,n)=>{if("undefined"==typeof document)return 0;const t=(e.getTextWidth.canvas||(e.getTextWidth.canvas=document.createElement("canvas"))).getContext("2d");t.font=n;return t.measureText(r).width},e.maskValue=(e,n)=>{if(!e)return e;const{maskRange:t,unmaskRange:i,maskChar:o="•",maskRegex:s,maskTransformer:a}=n;if(a)return a(e);if(s)return e.replace(s,o);if(t){const{startIndex:n,endIndex:i}=r(t[0],t[1]);return e.substring(0,n)+o.repeat(e.substring(n,i+1).length)+e.substring(i+1)}if(i){const{startIndex:n,endIndex:t}=r(i[0],i[1]);return o.repeat(e.substring(0,n).length)+e.substring(n,t+1)+o.repeat(e.substring(t+1).length)}return e};const r=(e,r)=>e<r?{startIndex:e,endIndex:r}:{startIndex:r,endIndex:e},n=new Intl.PluralRules("en",{type:"ordinal"}),t=new Map([["one","st"],["two","nd"],["few","rd"],["other","th"]]);e.formatOrdinal=e=>{const r=n.select(e);return`${e}${t.get(r)}`}}(so||(so={}));const lo=f.div`
    font-weight: ${e=>e.$bold?wt.Spec["weight-semibold"]:wt.Spec["weight-regular"]};

    ${e=>e.$disabled?y`
                color: ${Ft["text-disabled"]};
            `:e.$selected?y`
                color: ${Ft["text-selected"]};
            `:y`
                color: ${Ft.text};
            `}
    width: 100%;

    ${e=>"end"===e.$truncateType&&Rt(e.$maxLines||2)}
    overflow-wrap: break-word;
`,co=f.div`
    color: ${Ft["text-subtlest"]};
    width: 100%;

    ${e=>"end"===e.$truncateType&&Rt(e.$maxLines||2)}
    overflow-wrap: break-word;

    ${e=>"next-line"===e.$labelDisplayType?y`
                    ${wt["body-md-semibold"]}
                `:y`
                    ${wt["body-baseline-regular"]}
                `}
`;f.span`
    font-weight: ${wt.Spec["weight-semibold"]};
`,f.div`
    text-align: left;
    width: 100%;
    overflow: hidden;
    overflow-wrap: break-word;

    ${e=>"small"===e.$variant?wt["body-md-regular"]:wt["body-baseline-regular"]}

    ${e=>{switch(e.$labelDisplayType){case"next-line":return y`
                    display: flex;
                    flex-direction: column;
                `;case"inline":return y`
                    ${lo} {
                        display: inline;
                    }

                    ${co} {
                        display: inline;
                        margin-left: 0.5rem;
                    }
                `}}}
`,f.div`
    display: inline-block;
    width: ${e=>1===e.$maxLines?50:100}%;
    height: 1lh;
    word-break: break-all;
    overflow: hidden;
`,f.div`
    display: inline-block;
    width: ${e=>1===e.$maxLines?50:100}%;
    height: 1lh;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    direction: rtl;
    text-align: right;
`;var uo=Br;var go=function(e){var r=this.__data__,n=r.delete(e);return this.size=r.size,n};var ho=function(e){return this.__data__.get(e)};var bo=function(e){return this.__data__.has(e)},mo=Br,po=Sr,fo=Zr;var yo=function(e,r){var n=this.__data__;if(n instanceof mo){var t=n.__data__;if(!po||t.length<199)return t.push([e,r]),this.size=++n.size,this;n=this.__data__=new fo(t)}return n.set(e,r),this.size=n.size,this},vo=Br,xo=function(){this.__data__=new uo,this.size=0},Fo=go,wo=ho,$o=bo,Eo=yo;function Do(e){var r=this.__data__=new vo(e);this.size=r.size}Do.prototype.clear=xo,Do.prototype.delete=Fo,Do.prototype.get=wo,Do.prototype.has=$o,Do.prototype.set=Eo;var Co=Zr,Bo=function(e){return this.__data__.set(e,"__lodash_hash_undefined__"),this},So=function(e){return this.__data__.has(e)};function ko(e){var r=-1,n=null==e?0:e.length;for(this.__data__=new Co;++r<n;)this.add(e[r])}ko.prototype.add=ko.prototype.push=Bo,ko.prototype.has=So,G.Uint8Array;var Ao=Q?Q.prototype:void 0;Ao&&Ao.valueOf;var zo=ce,Mo=ue;var Oo=function(e){return Mo(e)&&"[object Arguments]"==zo(e)},_o=Object.prototype;_o.hasOwnProperty,_o.propertyIsEnumerable;Oo(function(){return arguments}());var To={exports:{}};var Lo=function(){return!1};!function(e,r){var n=G,t=Lo,i=r&&!r.nodeType&&r,o=i&&e&&!e.nodeType&&e,s=o&&o.exports===i?n.Buffer:void 0,a=(s?s.isBuffer:void 0)||t;e.exports=a}(To,To.exports);var jo={exports:{}};!function(e,r){var n=X,t=r&&!r.nodeType&&r,i=t&&e&&!e.nodeType&&e,o=i&&i.exports===t&&n.process,s=function(){try{var e=i&&i.require&&i.require("util").types;return e||o&&o.binding&&o.binding("util")}catch(e){}}();e.exports=s}(jo,jo.exports);var Ro=jo.exports;Ro&&Ro.isTypedArray;var Yo=Ne(G,"DataView"),Po=Sr,Io=Ne(G,"Promise"),Ho=Ne(G,"Set"),No=Ne(G,"WeakMap"),Wo=ce,Vo=ke,Ko="[object Map]",Uo="[object Promise]",Zo="[object Set]",Xo="[object WeakMap]",qo="[object DataView]",Jo=Vo(Yo),Go=Vo(Po),Qo=Vo(Io),es=Vo(Ho),rs=Vo(No),ns=Wo;(Yo&&ns(new Yo(new ArrayBuffer(1)))!=qo||Po&&ns(new Po)!=Ko||Io&&ns(Io.resolve())!=Uo||Ho&&ns(new Ho)!=Zo||No&&ns(new No)!=Xo)&&(ns=function(e){var r=Wo(e),n="[object Object]"==r?e.constructor:void 0,t=n?Vo(n):"";if(t)switch(t){case Jo:return qo;case Go:return Ko;case Qo:return Uo;case es:return Zo;case rs:return Xo}return r});var ts={exports:{}};ts.exports=function(){var e=1e3,r=6e4,n=36e5,t="millisecond",i="second",o="minute",s="hour",a="day",l="week",d="month",c="quarter",u="year",g="date",h="Invalid Date",b=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,m=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,p={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(e){var r=["th","st","nd","rd"],n=e%100;return"["+e+(r[(n-20)%10]||r[n]||r[0])+"]"}},f=function(e,r,n){var t=String(e);return!t||t.length>=r?e:""+Array(r+1-t.length).join(n)+e},y={s:f,z:function(e){var r=-e.utcOffset(),n=Math.abs(r),t=Math.floor(n/60),i=n%60;return(r<=0?"+":"-")+f(t,2,"0")+":"+f(i,2,"0")},m:function e(r,n){if(r.date()<n.date())return-e(n,r);var t=12*(n.year()-r.year())+(n.month()-r.month()),i=r.clone().add(t,d),o=n-i<0,s=r.clone().add(t+(o?-1:1),d);return+(-(t+(n-i)/(o?i-s:s-i))||0)},a:function(e){return e<0?Math.ceil(e)||0:Math.floor(e)},p:function(e){return{M:d,y:u,w:l,d:a,D:g,h:s,m:o,s:i,ms:t,Q:c}[e]||String(e||"").toLowerCase().replace(/s$/,"")},u:function(e){return void 0===e}},v="en",x={};x[v]=p;var F="$isDayjsObject",w=function(e){return e instanceof C||!(!e||!e[F])},$=function e(r,n,t){var i;if(!r)return v;if("string"==typeof r){var o=r.toLowerCase();x[o]&&(i=o),n&&(x[o]=n,i=o);var s=r.split("-");if(!i&&s.length>1)return e(s[0])}else{var a=r.name;x[a]=r,i=a}return!t&&i&&(v=i),i||!t&&v},E=function(e,r){if(w(e))return e.clone();var n="object"==typeof r?r:{};return n.date=e,n.args=arguments,new C(n)},D=y;D.l=$,D.i=w,D.w=function(e,r){return E(e,{locale:r.$L,utc:r.$u,x:r.$x,$offset:r.$offset})};var C=function(){function p(e){this.$L=$(e.locale,null,!0),this.parse(e),this.$x=this.$x||e.x||{},this[F]=!0}var f=p.prototype;return f.parse=function(e){this.$d=function(e){var r=e.date,n=e.utc;if(null===r)return new Date(NaN);if(D.u(r))return new Date;if(r instanceof Date)return new Date(r);if("string"==typeof r&&!/Z$/i.test(r)){var t=r.match(b);if(t){var i=t[2]-1||0,o=(t[7]||"0").substring(0,3);return n?new Date(Date.UTC(t[1],i,t[3]||1,t[4]||0,t[5]||0,t[6]||0,o)):new Date(t[1],i,t[3]||1,t[4]||0,t[5]||0,t[6]||0,o)}}return new Date(r)}(e),this.init()},f.init=function(){var e=this.$d;this.$y=e.getFullYear(),this.$M=e.getMonth(),this.$D=e.getDate(),this.$W=e.getDay(),this.$H=e.getHours(),this.$m=e.getMinutes(),this.$s=e.getSeconds(),this.$ms=e.getMilliseconds()},f.$utils=function(){return D},f.isValid=function(){return!(this.$d.toString()===h)},f.isSame=function(e,r){var n=E(e);return this.startOf(r)<=n&&n<=this.endOf(r)},f.isAfter=function(e,r){return E(e)<this.startOf(r)},f.isBefore=function(e,r){return this.endOf(r)<E(e)},f.$g=function(e,r,n){return D.u(e)?this[r]:this.set(n,e)},f.unix=function(){return Math.floor(this.valueOf()/1e3)},f.valueOf=function(){return this.$d.getTime()},f.startOf=function(e,r){var n=this,t=!!D.u(r)||r,c=D.p(e),h=function(e,r){var i=D.w(n.$u?Date.UTC(n.$y,r,e):new Date(n.$y,r,e),n);return t?i:i.endOf(a)},b=function(e,r){return D.w(n.toDate()[e].apply(n.toDate("s"),(t?[0,0,0,0]:[23,59,59,999]).slice(r)),n)},m=this.$W,p=this.$M,f=this.$D,y="set"+(this.$u?"UTC":"");switch(c){case u:return t?h(1,0):h(31,11);case d:return t?h(1,p):h(0,p+1);case l:var v=this.$locale().weekStart||0,x=(m<v?m+7:m)-v;return h(t?f-x:f+(6-x),p);case a:case g:return b(y+"Hours",0);case s:return b(y+"Minutes",1);case o:return b(y+"Seconds",2);case i:return b(y+"Milliseconds",3);default:return this.clone()}},f.endOf=function(e){return this.startOf(e,!1)},f.$set=function(e,r){var n,l=D.p(e),c="set"+(this.$u?"UTC":""),h=(n={},n[a]=c+"Date",n[g]=c+"Date",n[d]=c+"Month",n[u]=c+"FullYear",n[s]=c+"Hours",n[o]=c+"Minutes",n[i]=c+"Seconds",n[t]=c+"Milliseconds",n)[l],b=l===a?this.$D+(r-this.$W):r;if(l===d||l===u){var m=this.clone().set(g,1);m.$d[h](b),m.init(),this.$d=m.set(g,Math.min(this.$D,m.daysInMonth())).$d}else h&&this.$d[h](b);return this.init(),this},f.set=function(e,r){return this.clone().$set(e,r)},f.get=function(e){return this[D.p(e)]()},f.add=function(t,c){var g,h=this;t=Number(t);var b=D.p(c),m=function(e){var r=E(h);return D.w(r.date(r.date()+Math.round(e*t)),h)};if(b===d)return this.set(d,this.$M+t);if(b===u)return this.set(u,this.$y+t);if(b===a)return m(1);if(b===l)return m(7);var p=(g={},g[o]=r,g[s]=n,g[i]=e,g)[b]||1,f=this.$d.getTime()+t*p;return D.w(f,this)},f.subtract=function(e,r){return this.add(-1*e,r)},f.format=function(e){var r=this,n=this.$locale();if(!this.isValid())return n.invalidDate||h;var t=e||"YYYY-MM-DDTHH:mm:ssZ",i=D.z(this),o=this.$H,s=this.$m,a=this.$M,l=n.weekdays,d=n.months,c=n.meridiem,u=function(e,n,i,o){return e&&(e[n]||e(r,t))||i[n].slice(0,o)},g=function(e){return D.s(o%12||12,e,"0")},b=c||function(e,r,n){var t=e<12?"AM":"PM";return n?t.toLowerCase():t};return t.replace(m,(function(e,t){return t||function(e){switch(e){case"YY":return String(r.$y).slice(-2);case"YYYY":return D.s(r.$y,4,"0");case"M":return a+1;case"MM":return D.s(a+1,2,"0");case"MMM":return u(n.monthsShort,a,d,3);case"MMMM":return u(d,a);case"D":return r.$D;case"DD":return D.s(r.$D,2,"0");case"d":return String(r.$W);case"dd":return u(n.weekdaysMin,r.$W,l,2);case"ddd":return u(n.weekdaysShort,r.$W,l,3);case"dddd":return l[r.$W];case"H":return String(o);case"HH":return D.s(o,2,"0");case"h":return g(1);case"hh":return g(2);case"a":return b(o,s,!0);case"A":return b(o,s,!1);case"m":return String(s);case"mm":return D.s(s,2,"0");case"s":return String(r.$s);case"ss":return D.s(r.$s,2,"0");case"SSS":return D.s(r.$ms,3,"0");case"Z":return i}return null}(e)||i.replace(":","")}))},f.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},f.diff=function(t,g,h){var b,m=this,p=D.p(g),f=E(t),y=(f.utcOffset()-this.utcOffset())*r,v=this-f,x=function(){return D.m(m,f)};switch(p){case u:b=x()/12;break;case d:b=x();break;case c:b=x()/3;break;case l:b=(v-y)/6048e5;break;case a:b=(v-y)/864e5;break;case s:b=v/n;break;case o:b=v/r;break;case i:b=v/e;break;default:b=v}return h?b:D.a(b)},f.daysInMonth=function(){return this.endOf(d).$D},f.$locale=function(){return x[this.$L]},f.locale=function(e,r){if(!e)return this.$L;var n=this.clone(),t=$(e,r,!0);return t&&(n.$L=t),n},f.clone=function(){return D.w(this.$d,this)},f.toDate=function(){return new Date(this.valueOf())},f.toJSON=function(){return this.isValid()?this.toISOString():null},f.toISOString=function(){return this.$d.toISOString()},f.toString=function(){return this.$d.toUTCString()},p}(),B=C.prototype;return E.prototype=B,[["$ms",t],["$s",i],["$m",o],["$H",s],["$W",a],["$M",d],["$y",u],["$D",g]].forEach((function(e){B[e[1]]=function(r){return this.$g(r,e[0],e[1])}})),E.extend=function(e,r){return e.$i||(e(r,C,E),e.$i=!0),E},E.locale=$,E.isDayjs=w,E.unix=function(e){return E(1e3*e)},E.en=x[v],E.Ls=x,E.p={},E}();var is=U(ts.exports),os={exports:{}};os.exports=function(){var e={LTS:"h:mm:ss A",LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D, YYYY",LLL:"MMMM D, YYYY h:mm A",LLLL:"dddd, MMMM D, YYYY h:mm A"},r=/(\[[^[]*\])|([-_:/.,()\s]+)|(A|a|YYYY|YY?|MM?M?M?|Do|DD?|hh?|HH?|mm?|ss?|S{1,3}|z|ZZ?)/g,n=/\d\d/,t=/\d\d?/,i=/\d*[^-_:/,()\s\d]+/,o={},s=function(e){return(e=+e)+(e>68?1900:2e3)},a=function(e){return function(r){this[e]=+r}},l=[/[+-]\d\d:?(\d\d)?|Z/,function(e){(this.zone||(this.zone={})).offset=function(e){if(!e)return 0;if("Z"===e)return 0;var r=e.match(/([+-]|\d\d)/g),n=60*r[1]+(+r[2]||0);return 0===n?0:"+"===r[0]?-n:n}(e)}],d=function(e){var r=o[e];return r&&(r.indexOf?r:r.s.concat(r.f))},c=function(e,r){var n,t=o.meridiem;if(t){for(var i=1;i<=24;i+=1)if(e.indexOf(t(i,0,r))>-1){n=i>12;break}}else n=e===(r?"pm":"PM");return n},u={A:[i,function(e){this.afternoon=c(e,!1)}],a:[i,function(e){this.afternoon=c(e,!0)}],S:[/\d/,function(e){this.milliseconds=100*+e}],SS:[n,function(e){this.milliseconds=10*+e}],SSS:[/\d{3}/,function(e){this.milliseconds=+e}],s:[t,a("seconds")],ss:[t,a("seconds")],m:[t,a("minutes")],mm:[t,a("minutes")],H:[t,a("hours")],h:[t,a("hours")],HH:[t,a("hours")],hh:[t,a("hours")],D:[t,a("day")],DD:[n,a("day")],Do:[i,function(e){var r=o.ordinal,n=e.match(/\d+/);if(this.day=n[0],r)for(var t=1;t<=31;t+=1)r(t).replace(/\[|\]/g,"")===e&&(this.day=t)}],M:[t,a("month")],MM:[n,a("month")],MMM:[i,function(e){var r=d("months"),n=(d("monthsShort")||r.map((function(e){return e.slice(0,3)}))).indexOf(e)+1;if(n<1)throw new Error;this.month=n%12||n}],MMMM:[i,function(e){var r=d("months").indexOf(e)+1;if(r<1)throw new Error;this.month=r%12||r}],Y:[/[+-]?\d+/,a("year")],YY:[n,function(e){this.year=s(e)}],YYYY:[/\d{4}/,a("year")],Z:l,ZZ:l};function g(n){var t,i;t=n,i=o&&o.formats;for(var s=(n=t.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g,(function(r,n,t){var o=t&&t.toUpperCase();return n||i[t]||e[t]||i[o].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g,(function(e,r,n){return r||n.slice(1)}))}))).match(r),a=s.length,l=0;l<a;l+=1){var d=s[l],c=u[d],g=c&&c[0],h=c&&c[1];s[l]=h?{regex:g,parser:h}:d.replace(/^\[|\]$/g,"")}return function(e){for(var r={},n=0,t=0;n<a;n+=1){var i=s[n];if("string"==typeof i)t+=i.length;else{var o=i.regex,l=i.parser,d=e.slice(t),c=o.exec(d)[0];l.call(r,c),e=e.replace(c,"")}}return function(e){var r=e.afternoon;if(void 0!==r){var n=e.hours;r?n<12&&(e.hours+=12):12===n&&(e.hours=0),delete e.afternoon}}(r),r}}return function(e,r,n){n.p.customParseFormat=!0,e&&e.parseTwoDigitYear&&(s=e.parseTwoDigitYear);var t=r.prototype,i=t.parse;t.parse=function(e){var r=e.date,t=e.utc,s=e.args;this.$u=t;var a=s[1];if("string"==typeof a){var l=!0===s[2],d=!0===s[3],c=l||d,u=s[2];d&&(u=s[2]),o=this.$locale(),!l&&u&&(o=n.Ls[u]),this.$d=function(e,r,n){try{if(["x","X"].indexOf(r)>-1)return new Date(("X"===r?1e3:1)*e);var t=g(r)(e),i=t.year,o=t.month,s=t.day,a=t.hours,l=t.minutes,d=t.seconds,c=t.milliseconds,u=t.zone,h=new Date,b=s||(i||o?1:h.getDate()),m=i||h.getFullYear(),p=0;i&&!o||(p=o>0?o-1:h.getMonth());var f=a||0,y=l||0,v=d||0,x=c||0;return u?new Date(Date.UTC(m,p,b,f,y,v,x+60*u.offset*1e3)):n?new Date(Date.UTC(m,p,b,f,y,v,x)):new Date(m,p,b,f,y,v,x)}catch(e){return new Date("")}}(r,a,t),this.init(),u&&!0!==u&&(this.$L=this.locale(u).$L),c&&r!=this.format(a)&&(this.$d=new Date("")),o={}}else if(a instanceof Array)for(var h=a.length,b=1;b<=h;b+=1){s[1]=a[b-1];var m=n.apply(this,s);if(m.isValid()){this.$d=m.$d,this.$L=m.$L,this.init();break}b===h&&(this.$d=new Date(""))}else i.call(this,e)}}}();var ss=U(os.exports),as={exports:{}};as.exports=function(e,r,n){r.prototype.isBetween=function(e,r,t,i){var o=n(e),s=n(r),a="("===(i=i||"()")[0],l=")"===i[1];return(a?this.isAfter(o,t):!this.isBefore(o,t))&&(l?this.isBefore(s,t):!this.isAfter(s,t))||(a?this.isBefore(o,t):!this.isAfter(o,t))&&(l?this.isAfter(s,t):!this.isBefore(s,t))}};var ls=U(as.exports),ds={exports:{}};ds.exports=function(e,r){r.prototype.isSameOrAfter=function(e,r){return this.isSame(e,r)||this.isAfter(e,r)}};var cs=U(ds.exports),us={exports:{}};us.exports=function(e,r){r.prototype.isSameOrBefore=function(e,r){return this.isSame(e,r)||this.isBefore(e,r)}};var gs,hs,bs=U(us.exports),ms={exports:{}};ms.exports=(gs={year:0,month:1,day:2,hour:3,minute:4,second:5},hs={},function(e,r,n){var t,i=function(e,r,n){void 0===n&&(n={});var t=new Date(e),i=function(e,r){void 0===r&&(r={});var n=r.timeZoneName||"short",t=e+"|"+n,i=hs[t];return i||(i=new Intl.DateTimeFormat("en-US",{hour12:!1,timeZone:e,year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit",timeZoneName:n}),hs[t]=i),i}(r,n);return i.formatToParts(t)},o=function(e,r){for(var t=i(e,r),o=[],s=0;s<t.length;s+=1){var a=t[s],l=a.type,d=a.value,c=gs[l];c>=0&&(o[c]=parseInt(d,10))}var u=o[3],g=24===u?0:u,h=o[0]+"-"+o[1]+"-"+o[2]+" "+g+":"+o[4]+":"+o[5]+":000",b=+e;return(n.utc(h).valueOf()-(b-=b%1e3))/6e4},s=r.prototype;s.tz=function(e,r){void 0===e&&(e=t);var i=this.utcOffset(),o=this.toDate(),s=o.toLocaleString("en-US",{timeZone:e}),a=Math.round((o-new Date(s))/1e3/60),l=n(s,{locale:this.$L}).$set("millisecond",this.$ms).utcOffset(15*-Math.round(o.getTimezoneOffset()/15)-a,!0);if(r){var d=l.utcOffset();l=l.add(i-d,"minute")}return l.$x.$timezone=e,l},s.offsetName=function(e){var r=this.$x.$timezone||n.tz.guess(),t=i(this.valueOf(),r,{timeZoneName:e}).find((function(e){return"timezonename"===e.type.toLowerCase()}));return t&&t.value};var a=s.startOf;s.startOf=function(e,r){if(!this.$x||!this.$x.$timezone)return a.call(this,e,r);var t=n(this.format("YYYY-MM-DD HH:mm:ss:SSS"),{locale:this.$L});return a.call(t,e,r).tz(this.$x.$timezone,!0)},n.tz=function(e,r,i){var s=i&&r,a=i||r||t,l=o(+n(),a);if("string"!=typeof e)return n(e).tz(a);var d=function(e,r,n){var t=e-60*r*1e3,i=o(t,n);if(r===i)return[t,r];var s=o(t-=60*(i-r)*1e3,n);return i===s?[t,i]:[e-60*Math.min(i,s)*1e3,Math.max(i,s)]}(n.utc(e,s).valueOf(),l,a),c=d[0],u=d[1],g=n(c).utcOffset(u);return g.$x.$timezone=a,g},n.tz.guess=function(){return Intl.DateTimeFormat().resolvedOptions().timeZone},n.tz.setDefault=function(e){t=e}});var ps,fs=U(ms.exports);is.extend(ls),is.extend(bs),is.extend(cs),is.extend(ss),is.extend(fs),function(e){e.generateDays=e=>{const r=e.startOf("month"),n=is(r).startOf("week");return ys(n).map((e=>vs(e)))},e.generateDaysForCurrentWeek=e=>{const r=e.startOf("week");return vs(r)},e.generateMonths=e=>{const r=[];for(let n=0;n<12;n++){const t=e.month(n);r.push(is(t))}return r},e.generateDecadeOfYears=e=>{const r=e.year(),n=10*Math.floor(r/10),t=e.year(n),i=[t.subtract(1,"year"),t];for(let e=1;e<11;e++)i.push(t.add(e,"year"));return i},e.getStartEndDecade=e=>{const r=10*Math.floor(+e.format("YYYY")/10);return{beginDecade:r,endDecade:+is(`${r+9}-01-01`).format("YYYY")}},e.convertTo12HourFormat=e=>{const r=is(e,"HH:mm");return r.isValid()?r.format("h:mm a"):""},e.isWithinRange=(e,r,n,t="day")=>!r&&!n||(r&&n?e.isBetween(r,n,t,"[]"):r?e.isSameOrAfter(r,t):e.isSameOrBefore(n,t)),e.isPreviousMonthWithinRange=(r,n)=>e.isWithinRange(r.subtract(1,"month"),n,void 0,"month"),e.isPreviousYearWithinRange=(r,n)=>e.isWithinRange(r.subtract(1,"year"),n,void 0,"year"),e.isPreviousDecadeWithinRange=(r,n)=>{const{beginDecade:t}=e.getStartEndDecade(r);return e.isWithinRange(r.year(t).subtract(1,"year"),n,void 0,"year")},e.isNextMonthWithinRange=(r,n)=>e.isWithinRange(r.add(1,"month"),void 0,n,"month"),e.isNextYearWithinRange=(r,n)=>e.isWithinRange(r.add(1,"year"),void 0,n,"year"),e.isNextDecadeWithinRange=(r,n)=>{const{endDecade:t}=e.getStartEndDecade(r);return e.isWithinRange(r.year(t).add(1,"year"),void 0,n,"year")},e.getWeekStartEnd=e=>({start:e.startOf("week").format("YYYY-MM-DD"),end:e.endOf("week").format("YYYY-MM-DD")}),e.getFixedRangeStartEnd=(e,r)=>({start:e.format("YYYY-MM-DD"),end:e.add(r-1,"day").format("YYYY-MM-DD")}),e.isDisabledDay=(r,n,t,i)=>{const o=e.isWithinRange(r,t?is(t):void 0,i?is(i):void 0),s=n&&n.includes(r.format("YYYY-MM-DD"));return!o||!!s}}(ps||(ps={}));const ys=e=>{const r=[e];for(let n=1;n<6;n++){const t=e.add(n,"week");r.push(t)}return r},vs=e=>{const r=[];for(let n=0;n<7;n++){const t=e.add(n,"day");r.push(t)}return r},xs=[1,3,5,7,8,10,12],Fs=[4,6,9,11];var ws,$s,Es;!function(e){e.clampDay=(r,n,t)=>{const i=parseInt(r),o=parseInt(n),s=parseInt(t);return 0==i?"1":xs.includes(o)?Math.min(i,31).toString():Fs.includes(o)?Math.min(i,30).toString():2===o?e.isLeapYear(s)?Math.min(i,29).toString():Math.min(i,28).toString():r},e.clampMonth=e=>{const r=parseInt(e);return 0==r?"1":r>12?"12":e},e.isLeapYear=e=>e%4==0&&e%100!=0||e%400==0,e.getTimeDiffInMinutes=(e,r,n="HH:mm")=>{const t=is(e,n);return is(r,n).diff(t,"minute")},e.toDayjs=e=>e?is(e):is(),e.addMinutesToTime=(e,r,n="HH:mm")=>is(e,n).add(r,"minutes").format(n),e.isSame=(e,r,n="day")=>is(e).isSame(is(r),n)}(ws||(ws={})),function(e){e.isDateDisabled=(e,r)=>{const{disabledDates:n,minDate:t,maxDate:i}=r;return!!(e&&n&&n.length&&n.includes(e))||(!(!t||!is(e).isBefore(t,"day"))||!(!i||!is(e).isAfter(i,"day")))},e.sanitizeInput=e=>{if(e){if(is(e).isValid())return e}return""}}($s||($s={})),function(e){e.generate=()=>Math.random().toString(36).substring(2,9)}(Es||(Es={}));const Ds=i.createContext({focusedIndex:-1,setFocusedIndex:()=>{}}),Cs=({children:e})=>{const[n,t]=o(-1);return r(Ds.Provider,{value:{focusedIndex:n,setFocusedIndex:t},children:e})},Bs=f.div`
    display: inline-block;
    position: relative;
    width: ${({$size:e})=>e?`${e}px`:"1em"};
    height: ${({$size:e})=>e?`${e}px`:"1em"};
    color: ${e=>e.$color||"currentColor"};
`,Ss=v`
	0% {
	  transform: rotate(0deg);
	}
	100% {
	  transform: rotate(360deg);
	}
`,ks=f.div`
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
    animation: ${Ss} 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
`,As=f(ks)`
    animation-delay: -0.45s;
`,zs=f(ks)`
    animation-delay: -0.3s;
`,Ms=f(ks)`
    animation-delay: -0.15s;
`,Os=({color:n,className:t,size:i})=>e(Bs,{className:t,$size:i,$color:n,"data-testid":"component-loading-spinner",children:[r(ks,{id:"inner1"}),r(As,{id:"inner2"}),r(zs,{id:"inner3"}),r(Ms,{id:"inner4"})]}),_s=y`
    outline-offset: -1px;
    outline: ${Et["width-020"]} ${Et.solid} ${Ft["border-focus"]};
`,Ts=y`
    outline-color: ${Ft["border-focus"]};
`,Ls=y`
    outline-color: ${Ft["border-disabled"]};
`,js=y`
    outline-color: ${Ft["border-error-focus"]};
`,Rs=f.div`
    border: ${Et["width-010"]} ${Et.solid} ${Ft.border};
    border-radius: ${Ct.sm};
    background: ${Ft.bg};

    :focus-within {
        ${_s}
    }
    ${e=>e.$focused&&_s}

    ${e=>e.$readOnly?y`
                border-color: transparent;
                padding: 0;
                background: transparent !important;

                :focus-within {
                    ${Ts}
                }
                ${e.$focused&&Ts}
            `:e.$disabled?y`
                background: ${Ft["bg-disabled"]};
                cursor: not-allowed;

                :focus-within {
                    ${Ls}
                }
                ${e.$focused&&Ls}
            `:e.$error?y`
                border-color: ${Ft["border-error"]};

                :focus-within {
                    ${js}
                }
                ${e.$focused&&js}
            `:void 0}
`;f(Rs)`
    display: flex;
    align-items: center;
    position: relative;
    height: max-content;
    width: 100%;
    padding: 0 ${Dt["spacing-16"]};
    flex-direction: ${e=>"right"===e.$position?"row-reverse":"row"};
`;const Ys=f.input`
    ${e=>"small"===e.$variant?wt["body-md-regular"]:wt["body-baseline-regular"]}
    color: ${Ft.text};
    display: block;
    background: transparent;
    border: none;
    outline: none;
    box-shadow: none;
    padding: 0;
    margin: 0;

    :disabled {
        color: ${Ft["text-subtler"]};

        :hover {
            cursor: not-allowed;
        }
    }

    ::placeholder,
    ::-webkit-input-placeholder {
        color: ${Ft["text-subtler"]};
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
`,Ps=f.button`
    background: transparent;
    border: none;
    outline: none;

    :focus,
    :active {
        outline: none;
    }

    :focus-visible {
        outline: ${Et["width-010"]} ${Et.solid}
            ${Ft["border-focus"]};
        border-radius: ${Ct.sm};
    }
`;f.div`
    overflow: hidden;
    border: ${Et["width-010"]} ${Et.solid} ${Ft.border};
    border-radius: ${Ct.sm};
    background: ${Ft.bg};

    min-width: 23rem;
    ${e=>e.$width&&`width: ${e.$width}px;`}
    max-height: 27rem;
    overflow-y: auto;

    ${e=>"small"===e.$variant?wt["body-md-regular"]:wt["body-baseline-regular"]}

    ${St.MaxWidth.sm} {
        min-width: unset;
        width: calc(100vw - ${Bt["sm-margin"]} * 2);
        max-height: 15rem;
    }

    ${St.MaxWidth.xs} {
        width: calc(100vw - ${Bt["xs-margin"]} * 2);
    }

    ${St.MaxWidth.xxs} {
        width: calc(100vw - ${Bt["xxs-margin"]} * 2);
    }

    ::-webkit-scrollbar {
        width: 14px;
    }

    ::-webkit-scrollbar-track {
        background: transparent;
    }

    ::-webkit-scrollbar-thumb {
        background: ${Ft["bg-inverse-subtlest"]};
        border: 5px solid transparent;
        border-radius: ${Ct.full};
        background-clip: padding-box;
    }
`,f.div`
    background: transparent;
    padding: ${Dt["spacing-8"]};
`,f.ul`
    list-style-type: none;
`,f.li`
    display: flex;
    align-items: flex-start;
    gap: ${Dt["spacing-8"]};
    padding: ${Dt["spacing-12"]} ${Dt["spacing-8"]};
    cursor: pointer;
    border: none;
    border-radius: ${Ct.none};
    outline: none;

    ${e=>e.$disabled?y`
                cursor: not-allowed;
            `:e.$active&&e.$selected?y`
                background: ${Ft["bg-hover"]};
            `:e.$active?y`
                background: ${Ft["bg-hover-subtle"]};
            `:void 0}
`,f(D)`
    flex-shrink: 0;
    height: 1lh;
    width: 1rem;
    color: ${Ft["icon-selected"]};
`,f.div`
    flex-shrink: 0;
    height: 1lh;
    width: 1rem;
`,f(E)`
    flex-shrink: 0;
    height: 1lh;
    width: 1lh;
    color: ${Ft["icon-selected"]};
`,f(w)`
    flex-shrink: 0;
    height: 1lh;
    width: 1lh;
    color: ${Ft["icon-primary-subtlest"]};
`,f($)`
    flex-shrink: 0;
    height: 1lh;
    width: 1lh;
    color: ${Ft["icon-disabled-subtle"]};
`,f.div`
    width: 100%;
    display: flex;
    justify-content: flex-end;
`;const Is=f(Ps)`
    cursor: pointer;
    overflow: hidden;
    color: ${Ft["text-primary"]};
    font-size: inherit;
`;f(Is)`
    ${wt["body-baseline-semibold"]}
`,f(Is)`
    ${wt["body-md-semibold"]}
    padding: ${Dt["spacing-8"]} ${Dt["spacing-8"]};
`,f.div`
    width: 100%;
    display: flex;
    padding: ${Dt["spacing-12"]} ${Dt["spacing-16"]};
    align-items: center;
`,f(F)`
    margin-right: ${Dt["spacing-4"]};
    color: ${Ft["icon-error"]};
    height: 1em;
    width: 1em;
`,f(Os)`
    margin-right: ${Dt["spacing-8"]};
    color: ${Ft.icon};
`,f.div`
    ${(e=>{const{textSize:r}=e||{};return y`
        // Text styling
        ${r&&wt[`${r}-regular`]}

        strong {
            font-weight: ${wt.Spec["weight-semibold"]};
            ${r&&wt[`${r}-semibold`]};
        }

        p {
            margin: 0;
        }

        // Link styling
        a {
            font-weight: ${wt.Spec["weight-semibold"]};
            ${r&&wt[`${r}-semibold`]}
            color: ${Ft.hyperlink};
            text-decoration: none;

            svg {
                color: ${Ft["icon-primary"]};
                height: 1lh;
                width: 1em;
                margin-left: 0.4rem;
                vertical-align: middle;
            }

            :hover,
            :active,
            :visited,
            :focus {
                color: ${Ft["hyperlink-hover"]};

                svg {
                    color: ${Ft["icon-hover"]};
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
    color: ${Ft["text-subtle"]};
    padding: 0 ${Dt["spacing-16"]} ${Dt["spacing-12"]}
        ${Dt["spacing-16"]};
`;const Hs=f.button`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: ${Dt["spacing-24"]};
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

        ${({$highlight:e})=>e&&y`
                background-color: ${Ft["bg-hover-neutral"]};
            `}
    }
`,Ns=i.forwardRef(((e,n)=>{var{children:t,focusHighlight:i=!0,focusOutline:o="none",type:s="button"}=e,a=V(e,["children","focusHighlight","focusOutline","type"]);return r(Hs,Object.assign({ref:n,$outline:o,$highlight:i,type:s},a,{children:t}))})),Ws=f.div`
    background: ${Ft["bg-strong"]};
    border-radius: ${Ct.sm};
    display: flex;
    align-items: center;

    ${e=>"small"===e.$variant?wt["body-md-regular"]:wt["body-baseline-regular"]}
`,Vs=f.label`
    flex: 1;
    display: flex;
    align-items: center;
    gap: ${Dt["spacing-8"]};
    padding: ${e=>"small"===e.$variant?y`
                  ${Dt["spacing-8"]} ${Dt["spacing-16"]}
              `:y`10px ${Dt["spacing-16"]}`};
`,Ks=f(Ys)`
    flex: 1;
`,Us=f(B)`
    color: ${Ft.icon};
    flex-shrink: 0;
    height: 1em;
    width: 1em;
`,Zs=f(Ns)`
    flex-shrink: 0;
    align-self: stretch;
    box-sizing: content-box;
    padding: ${Dt["spacing-8"]};
    margin-left: -${Dt["spacing-8"]};
    color: ${Ft.icon};
    cursor: pointer;
    font-size: inherit;

    svg {
        flex-shrink: 0;
        height: 1em;
        width: 1em;
    }
`;b(((n,t)=>{var{value:i,variant:o,onClear:s}=n,a=V(n,["value","variant","onClear"]);return e(Ws,{$variant:o,children:[e(Vs,{$variant:o,children:[r(Us,{"aria-hidden":!0}),r(Ks,Object.assign({ref:t,value:i,$variant:o},a))]}),i&&r(Zs,{"aria-label":"Clear search",focusOutline:"browser",onClick:s,children:r(C,{"aria-hidden":!0})})]})}));const Xs=f(Ps)`
    display: flex;
    align-items: center;
    gap: ${Dt["spacing-8"]};
    width: 100%;
    height: calc(3rem - 2px); // exclude top and bottom borders
    padding: ${Dt["spacing-16"]};

    ${e=>"small"===e.$variant?wt["body-md-regular"]:wt["body-baseline-regular"]}

    :disabled {
        cursor: not-allowed;
    }
`,qs=f.div`
    display: flex;
    align-items: center;
    transform: rotate(${e=>e.$expanded?180:0}deg);
    transition: transform ${$t["duration-250"]} ${$t["ease-default"]};

    svg {
        color: ${Ft.icon};
        height: 1em;
        width: 1em;
    }
`,Js=b((({children:n,disabled:t,expanded:i,listboxId:o,popupRole:s,readOnly:a,variant:l},d)=>e(Xs,{ref:d,type:"button","aria-expanded":i,"aria-haspopup":s,"data-testid":"selector",disabled:t,"aria-controls":o,$variant:l,children:[n,!a&&r(qs,{$expanded:i,$variant:l,children:r(S,{"aria-hidden":!0})})]}))),Gs={Button:{"button-radius":pt.md,"button-default-colour-bg":Kn["bg-primary"],"button-default-colour-bg-hover":Kn["bg-primary-hover"],"button-default-colour-text":Kn["text-inverse"],"button-secondary-colour-border":Kn["border-primary"],"button-secondary-colour-text":Kn["text-primary"],"button-light-colour-text":Kn["text-primary"],"button-link-colour-text":Kn["text-primary"]}},Qs={collections:{default:{Button:{"button-radius":pt.sm,"button-default-colour-bg":Kn["bg-primary"],"button-default-colour-bg-hover":Kn["bg-primary-hover"],"button-default-colour-text":Kn["text-inverse"],"button-secondary-colour-border":Kn["border-primary"],"button-secondary-colour-text":Kn["text-primary"],"button-light-colour-text":Kn["text-primary"],"button-link-colour-text":Kn["text-primary"]}},pa:{Button:{"button-radius":pt.full,"button-default-colour-bg":Kn["bg-primary"],"button-default-colour-bg-hover":Kn["bg-primary-hover"],"button-default-colour-text":Kn["text-inverse"],"button-secondary-colour-border":Kn["border-primary"],"button-secondary-colour-text":Kn["text-primary"],"button-light-colour-text":Kn["text-primary"],"button-link-colour-text":Kn["text-primary"]}},a11yplayground:Gs},defaultValue:"default"},ea=(e,r)=>n=>{var t,i;const o=n.theme,s=xn(Qs,null==o?void 0:o.componentScheme);return ra((null===(i=null===(t=null==o?void 0:o.componentOverrides)||void 0===t?void 0:t[e])||void 0===i?void 0:i[r])||s[e][r],n)},ra=(e,r)=>{switch(typeof e){case"function":return e(r);case"number":return e+"px";case"string":return e}},na=ea("Button","button-radius"),ta=ea("Button","button-default-colour-bg"),ia=ea("Button","button-default-colour-bg-hover"),oa=ea("Button","button-default-colour-text"),sa=ea("Button","button-secondary-colour-border"),aa=ea("Button","button-secondary-colour-text"),la=ea("Button","button-light-colour-text"),da=ea("Button","button-link-colour-text");f.button`
    padding: ${Dt["spacing-8"]} ${Dt["spacing-16"]};
    min-width: 4rem;
    border: ${Et["width-010"]} ${Et.solid} transparent;
    transition: all ${$t["duration-250"]} ${$t["ease-default"]};
    border-radius: ${na};
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;

    // -----------------------------------------------------------------------------
    // BUTTON STYLE + TEXT COLOR
    // -----------------------------------------------------------------------------
    ${e=>{switch(e.$buttonStyle){case"secondary":return y`
                    background-color: ${Ft.bg};
                    border-color: ${e.$buttonIsDanger?Ft["border-error-strong"]:sa};

                    color: ${e.$buttonIsDanger?Ft["text-error"]:aa};

                    &:hover,
                    &:active {
                        background-color: ${Ft["bg-hover-neutral"]};
                    }
                `;case"light":return y`
                    background-color: ${Ft.bg};
                    border-color: ${Ft.border};

                    color: ${e.$buttonIsDanger?Ft["text-error"]:la};

                    &:hover,
                    &:active {
                        background-color: ${Ft["bg-hover-neutral"]};
                    }
                `;case"link":return y`
                    background-color: transparent;

                    color: ${e.$buttonIsDanger?Ft["text-error"]:da};
                    &:hover,
                    &:active {
                        background-color: ${Ft["bg-hover-neutral"]};
                    }
                `;case"disabled":return y`
                    background-color: ${Ft["bg-disabled"]};

                    cursor: not-allowed;

                    &:hover {
                        box-shadow: none;
                    }

                    color: ${Ft["text-disabled"]};
                `;default:return y`
                    background-color: ${e.$buttonIsDanger?Ft["bg-error-strong"]:ta};};

                    ${St.MaxWidth.sm} {
                        width: 100%;
                    }

                    color: ${oa}};

                    &:hover,
                    &:active {
                        background-color: ${e.$buttonIsDanger?Ft["bg-error-strong-hover"]:ia}
                        };
                    }
                `}}}

    // -----------------------------------------------------------------------------
	// BUTTON SIZE + TEXT SIZE
	// -----------------------------------------------------------------------------
	${e=>{switch(e.$buttonSizeStyle){case"small":return y`
                    height: 2.5rem;
                    ${wt["body-md-semibold"]}

                    ${St.MaxWidth.xxs} {
                        height: auto;
                    }
                `;case"large":return y`
                    height: 4rem;
                    ${wt["heading-md-semibold"]}

                    ${St.MaxWidth.xxs} {
                        height: auto;
                    }
                `;default:return y`
                    height: 3rem;
                    ${wt["heading-xs-semibold"]}

                    ${St.MaxWidth.xxs} {
                        height: auto;
                    }
                `}}}
`,f(Os)`
    margin-right: 0.5rem;
`,f.li`
    display: ${e=>e.$visible?"flex":"none"};
`,f.div`
    flex: 1;
    display: flex;
    align-items: flex-start;
    gap: ${Dt["spacing-8"]};
    padding: ${Dt["spacing-12"]} ${Dt["spacing-8"]};
    cursor: ${e=>e.$toggleable?"default":"pointer"};
    overflow: hidden; // required for label to truncate properly
    border-radius: ${Ct.none};
    outline: none;

    ${e=>e.$active&&y`
            background: ${Ft["bg-hover"]};
        `}
`,f.div`
    height: 1px;
    width: calc((1lh + ${Dt["spacing-8"]}) * ${e=>e.$level});
`,f.div`
    width: 1lh;
    height: 1lh;
    color: ${Ft["icon-primary"]};
    cursor: pointer;

    svg {
        width: 1lh;
        height: 1lh;
        transition: transform ${$t["duration-350"]}
            ${$t["ease-standard"]};

        ${e=>{if(e.$expanded)return y`
                    transform: rotate(90deg);
                `}}
    }
`,f.div`
    width: 1lh;
    height: 1lh;
    margin-right: ${Dt["spacing-8"]};
`,f.div`
    flex-shrink: 0;
    height: 1lh;
    width: ${e=>e.$hasNestedSiblings?"1lh":Dt["spacing-16"]};

    display: flex;
    justify-content: center;
`,f(k)`
    flex-shrink: 0;
    height: 1lh;
    width: 1lh;
    color: ${Ft["icon-selected"]};
`;const ca=e=>"small"===e?2.5:3;f.div`
    position: relative;
    width: 100%;
    ${e=>{const r=ca(e.$variant);return y`
            min-height: ${r}rem;
            height: ${r}rem; // Need this to persist the height when expanding or collapsing list
        `}}
`;const ua=y`
    display: flex;
    position: relative;
    align-items: center;
    justify-content: space-between;
    padding: 0 ${Dt["spacing-16"]};
    // exclude top and bottom borders
    height: calc(${e=>ca(e.$variant)}rem - 2px);
    width: 100%;
    border-radius: ${Ct.sm};
    border: none;
    background: transparent;

    :focus,
    :active {
        outline: none;
    }

    :focus-visible {
        outline: 2px solid ${Ft["border-focus"]};
    }
`,ga=f.button`
    ${ua}
    cursor: pointer;
`;f.div`
    ${ua}
`;const ha=v`
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
`;f.div`
    position: relative;
    border: ${Et["width-010"]} ${Et.solid} ${Ft.border};
    border-radius: ${Ct.sm};
    background: ${Ft.bg};
    overflow: hidden;

    :focus-within {
        border-color: ${Ft["border-focus"]};
        box-shadow: 0px 0px 4px 0px
            rgb(from ${Ft["border-focus"]} r g b / 50%) inset; // TODO: confirm shadow
    }

    ${e=>e.expanded?y`
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                z-index: 2;
            `:y`
                animation: ${ha} 0.5s ease-in-out;
            `}

    ${e=>e.disabled?y`
                background: ${Ft["bg-disabled"]};

                ${ga} {
                    cursor: not-allowed;
                }

                :focus-within {
                    border-color: ${Ft.border};
                    box-shadow: none;
                }
            `:e.$readOnly?y`
                border: none;
                background: transparent !important;

                ${ga} {
                    padding: 0;
                }

                :focus-within {
                    border: none;
                    box-shadow: none;
                }
            `:e.error?y`
                border-color: ${Ft["border-error"]};

                :focus-within {
                    border-color: ${Ft["border-error"]};
                    box-shadow: 0px 0px 4px 0px
                        rgb(from ${Ft["border-error"]} r g b / 50%) inset; // TODO: confirm shadow
                }
            `:void 0}
`,f.div`
    transform: rotate(${e=>e.expanded?180:0}deg);
    transition: transform ${$t["duration-250"]} ${$t["ease-default"]};
    margin-left: ${Dt["spacing-16"]};
`,f(S)`
    color: ${Ft.icon};
`,f.div`
    height: 1px;
    background: ${Ft.border};
    margin: 0 ${Dt["spacing-8"]};
`;const ba=f.div`
    display: flex;
    flex: 1;
    word-break: break-all;
    ${e=>{if(e.$disabled)return y`
                color: ${Ft["text-disabled"]};
            `}}
`,ma=f.div`
    ${e=>"small"===e.$variant?wt["body-md-regular"]:wt["body-baseline-regular"]}
    text-align: left;
    ${e=>{if("middle"!==e.truncateType)return y`
                    ${Rt(1)}
                `}}
    overflow: hidden;
`;var pa;f(ma)`
    color: ${Ft["text-subtler"]};
`,function(e){e.Ready="overlay-context-ready",e.Change="overlay-context-change"}(pa||(pa={}));f.div`
    clip-path: inset(50%);
    height: 1px;
    width: 1px;
    overflow: hidden;
    position: absolute;
    white-space: nowrap;
`;const fa=e=>{const r=m.split(".");return parseInt(r[0],10)>=19?e:e?"true":void 0},ya=f.div`
    display: flex;
    flex-direction: column;
`,va=e=>"right"===e?"bottom-end":"bottom-start",xa=({enabled:t,isOpen:i,onOpen:a,onClose:d,onDismiss:c,renderElement:u,renderDropdown:g,customZIndex:h,clickToToggle:b=!1,offset:m=0,alignment:p="left",fitAvailableHeight:f,rootNode:y})=>{var v;const F=x(),w=Bt["sm-max"]({theme:F}),$=l(null),E=l(null),{width:D=0}=function(e){void 0===e&&(e={});var r=e.skipOnMount,n=void 0!==r&&r,t=e.refreshMode,i=e.refreshRate,s=void 0===i?1e3:i,a=e.refreshOptions,d=e.handleWidth,c=void 0===d||d,u=e.handleHeight,g=void 0===u||u,h=e.targetRef,b=e.observerOptions,m=e.onResize,p=l(n),f=l(null),y=null!=h?h:f,v=l(),x=o({width:void 0,height:void 0}),F=x[0],w=x[1];return ao((function(){if(!to()){var e=oo(m,w,c,g);v.current=ro((function(r){(c||g)&&r.forEach((function(r){var n=r&&r.contentRect||{},t=n.width,i=n.height;!p.current&&!to()&&e({width:t,height:i}),p.current=!1}))}),t,s,a);var r=new window.ResizeObserver(v.current);return y.current&&r.observe(y.current,b),function(){r.disconnect();var e=v.current;e&&e.cancel&&e.cancel()}}}),[t,s,a,c,g,m,b,y.current]),bi({ref:y},F)}({targetRef:$,handleHeight:!1}),C={name:"center",fn:({x:e,rects:r})=>{const n=0===e||e+r.floating.width===window.innerWidth,t=window.innerWidth<w;return{x:n&&t?(window.innerWidth-r.floating.width)/2:e}}},{refs:B,floatingStyles:S,context:k}=z({open:i,onOpenChange:(e,r,n)=>{"escape-key"===n?null==c||c():e&&!i?null==a||a():!e&&i&&(null==d||d(n))},whileElementsMounted:M,placement:va(p),middleware:[O(m),_(),T({limiter:L()}),j({apply({availableHeight:e}){E.current&&Object.assign(E.current.style,{maxHeight:f?`${e}px`:void 0,overflowY:f?"hidden":void 0})}}),C]}),W=(()=>{const[e,r]=o(void 0),n=A();return s((()=>{if(!n)return void r(void 0);const e=e=>{r(e.zIndex)};return n.events.on(pa.Change,e),n.events.emit(pa.Ready),()=>n.events.off(pa.Change,e)}),[n]),e})(),{isMounted:V,styles:K}=R(k,{initial:{opacity:0},open:{opacity:1},duration:300}),U=Y(k,{enabled:t,toggle:b}),Z=P(k,{enabled:t}),{getReferenceProps:X,getFloatingProps:q}=I([U,Z]);return e(n,{children:[r("div",Object.assign({ref:e=>{$.current=e,B.setReference(e)}},X(),{children:u()})),V&&r(H,{root:y,children:r(N,{context:k,modal:!1,initialFocus:E,returnFocus:!1,children:r("div",Object.assign({ref:B.setFloating,style:Object.assign(Object.assign({},S),{zIndex:null!==(v=null!=h?h:W)&&void 0!==v?v:50})},q(),{children:r(ya,{ref:E,style:Object.assign({},K),inert:fa(K.opacity<1),children:g({elementWidth:D})})}))})})]})},Fa=f.div`
    overflow: hidden;
    border: ${Et["width-010"]} ${Et.solid} ${Ft.border};
    border-radius: ${Ct.sm};
    background: ${Ft.bg};
    padding: ${Dt["spacing-16"]};
    min-width: 23rem;

    ${St.MaxWidth.sm} {
        min-width: unset;
        width: calc(100vw - ${Bt["sm-margin"]} * 2);
        max-height: 15rem;
    }

    ${St.MaxWidth.xs} {
        width: calc(100vw - ${Bt["xs-margin"]} * 2);
    }

    ${St.MaxWidth.xxs} {
        width: calc(100vw - ${Bt["xxs-margin"]} * 2);
    }
`,wa=f.div`
    display: flex;
    align-items: baseline;
`,$a=f.div`
    margin: 0 0.5rem;
    color: ${Ft.text};
`,Ea=f.div`
    ${e=>"small"===e.$variant?wt["body-md-regular"]:wt["body-baseline-regular"]}
    text-align: left;
    ${e=>{if("middle"!==e.truncateType)return y`
                    ${Rt(1)}
                `}}
    overflow: hidden;
`,Da=f(Ea)`
    color: ${Ft["text-subtler"]};
`,Ca=n=>{var{alignment:t="left",className:i,disabled:a,dropdownZIndex:d,error:c,histogramSlider:u,id:g,onBlur:h,onChange:b,onChangeEnd:m,optionTruncationType:p="end",placeholder:f="Select",rangeLabelPrefix:y,rangeLabelSuffix:v,readOnly:x,renderRangeLabel:F,value:w,dropdownRootNode:$}=n,E=V(n,["alignment","className","disabled","dropdownZIndex","error","histogramSlider","id","onBlur","onChange","onChangeEnd","optionTruncationType","placeholder","rangeLabelPrefix","rangeLabelSuffix","readOnly","renderRangeLabel","value","dropdownRootNode"]);const{interval:D,bins:C=[],renderEmptyView:B,ariaLabels:S}=u,k=C.map((e=>e.minValue)),A=Math.min(...k),[z,M]=o(U()),[O,_]=o(!1),[T,L]=o(!1),[j]=o((()=>Es.generate())),R=l(null),Y=l(null),P=l(null),I=E["data-testid"]||"select-histogram";s((()=>{w!==z&&M(U())}),[w]);const H=e=>{M(e),null==b||b(e)},N=e=>{M(e),null==m||m(e)},W=()=>{T||O||L(!0)},K=e=>{T&&!O&&R.current&&!R.current.contains(e.relatedTarget)&&(L(!1),null==h||h())};function U(){return null!=w?w:[A,A+D]}const Z=r=>F?F(r):e(Ht.BodyBL,{children:[y,r,v]});return r(Cs,{children:r(xa,{enabled:!x&&!a,isOpen:O,renderElement:()=>r(Rs,{className:i,"data-testid":I,id:g,ref:R,tabIndex:-1,onFocus:W,onBlur:K,$focused:T,$disabled:a,$readOnly:x,$error:c,children:r(Js,{ref:Y,disabled:a,expanded:O,listboxId:j,popupRole:"dialog",readOnly:x,variant:"default",children:r(ba,{ref:P,$disabled:a,children:k&&0!==k.length?e(wa,{children:[Z(z[0]),r($a,{children:"-"}),Z(z[1])]}):r(Da,{truncateType:p,$variant:"default",children:f})})})}),renderDropdown:({elementWidth:e})=>r(Fa,{style:{width:e},children:r(gi,{interval:D,value:z,bins:C,onChange:H,onChangeEnd:N,showRangeLabels:!1,renderEmptyView:B,ariaLabels:S})}),onOpen:()=>{_(!0)},onClose:()=>{_(!1)},onDismiss:()=>{var e;null===(e=Y.current)||void 0===e||e.focus(),_(!1)},clickToToggle:!0,offset:8,alignment:t,fitAvailableHeight:!0,customZIndex:d,rootNode:$})})};export{Ca as SelectHistogram};
//# sourceMappingURL=index.js.map
