import{MenuIcon as e}from"@lifesg/react-icons/menu";import r,{css as t,useTheme as n,keyframes as i}from"styled-components";import{jsx as a,jsxs as s,Fragment as o}from"react/jsx-runtime";import l,{useEffect as d,useState as c,useRef as u,forwardRef as g,useImperativeHandle as m}from"react";import{useFloatingTree as b,FloatingTree as h,useFloatingNodeId as p,FloatingNode as y}from"@floating-ui/react";import f from"react-dom";import{CrossIcon as x}from"@lifesg/react-icons/cross";import{ExternalIcon as v}from"@lifesg/react-icons/external";import{ChevronUpIcon as F}from"@lifesg/react-icons/chevron-up";function w(e,r){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(n=Object.getOwnPropertySymbols(e);i<n.length;i++)r.indexOf(n[i])<0&&Object.prototype.propertyIsEnumerable.call(e,n[i])&&(t[n[i]]=e[n[i]])}return t}"function"==typeof SuppressedError&&SuppressedError;var $="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};function E(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var C=Array.isArray,D="object"==typeof $&&$&&$.Object===Object&&$,B=D,A="object"==typeof self&&self&&self.Object===Object&&self,S=B||A||Function("return this")(),k=S.Symbol,M=k,z=Object.prototype,_=z.hasOwnProperty,O=z.toString,j=M?M.toStringTag:void 0;var W=function(e){var r=_.call(e,j),t=e[j];try{e[j]=void 0;var n=!0}catch(e){}var i=O.call(e);return n&&(r?e[j]=t:delete e[j]),i},Y=Object.prototype.toString;var L=W,T=function(e){return Y.call(e)},I=k?k.toStringTag:void 0;var N=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":I&&I in Object(e)?L(e):T(e)};var H=function(e){return null!=e&&"object"==typeof e},R=N,P=H;var V=function(e){return"symbol"==typeof e||P(e)&&"[object Symbol]"==R(e)},U=C,X=V,J=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,Q=/^\w*$/;var Z=function(e,r){if(U(e))return!1;var t=typeof e;return!("number"!=t&&"symbol"!=t&&"boolean"!=t&&null!=e&&!X(e))||(Q.test(e)||!J.test(e)||null!=r&&e in Object(r))};var G=function(e){var r=typeof e;return null!=e&&("object"==r||"function"==r)},K=N,q=G;var ee,re=function(e){if(!q(e))return!1;var r=K(e);return"[object Function]"==r||"[object GeneratorFunction]"==r||"[object AsyncFunction]"==r||"[object Proxy]"==r},te=S["__core-js_shared__"],ne=(ee=/[^.]+$/.exec(te&&te.keys&&te.keys.IE_PROTO||""))?"Symbol(src)_1."+ee:"";var ie=function(e){return!!ne&&ne in e},ae=Function.prototype.toString;var se=function(e){if(null!=e){try{return ae.call(e)}catch(e){}try{return e+""}catch(e){}}return""},oe=re,le=ie,de=G,ce=se,ue=/^\[object .+?Constructor\]$/,ge=Function.prototype,me=Object.prototype,be=ge.toString,he=me.hasOwnProperty,pe=RegExp("^"+be.call(he).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");var ye=function(e,r){return null==e?void 0:e[r]},fe=function(e){return!(!de(e)||le(e))&&(oe(e)?pe:ue).test(ce(e))},xe=ye;var ve=function(e,r){var t=xe(e,r);return fe(t)?t:void 0},Fe=ve(Object,"create"),we=Fe;var $e=function(){this.__data__=we?we(null):{},this.size=0};var Ee=function(e){var r=this.has(e)&&delete this.__data__[e];return this.size-=r?1:0,r},Ce=Fe,De=Object.prototype.hasOwnProperty;var Be=function(e){var r=this.__data__;if(Ce){var t=r[e];return"__lodash_hash_undefined__"===t?void 0:t}return De.call(r,e)?r[e]:void 0},Ae=Fe,Se=Object.prototype.hasOwnProperty;var ke=function(e){var r=this.__data__;return Ae?void 0!==r[e]:Se.call(r,e)},Me=Fe;var ze=function(e,r){var t=this.__data__;return this.size+=this.has(e)?0:1,t[e]=Me&&void 0===r?"__lodash_hash_undefined__":r,this},_e=$e,Oe=Ee,je=Be,We=ke,Ye=ze;function Le(e){var r=-1,t=null==e?0:e.length;for(this.clear();++r<t;){var n=e[r];this.set(n[0],n[1])}}Le.prototype.clear=_e,Le.prototype.delete=Oe,Le.prototype.get=je,Le.prototype.has=We,Le.prototype.set=Ye;var Te=Le;var Ie=function(){this.__data__=[],this.size=0};var Ne=function(e,r){return e===r||e!=e&&r!=r},He=Ne;var Re=function(e,r){for(var t=e.length;t--;)if(He(e[t][0],r))return t;return-1},Pe=Re,Ve=Array.prototype.splice;var Ue=function(e){var r=this.__data__,t=Pe(r,e);return!(t<0)&&(t==r.length-1?r.pop():Ve.call(r,t,1),--this.size,!0)},Xe=Re;var Je=function(e){var r=this.__data__,t=Xe(r,e);return t<0?void 0:r[t][1]},Qe=Re;var Ze=function(e){return Qe(this.__data__,e)>-1},Ge=Re;var Ke=function(e,r){var t=this.__data__,n=Ge(t,e);return n<0?(++this.size,t.push([e,r])):t[n][1]=r,this},qe=Ie,er=Ue,rr=Je,tr=Ze,nr=Ke;function ir(e){var r=-1,t=null==e?0:e.length;for(this.clear();++r<t;){var n=e[r];this.set(n[0],n[1])}}ir.prototype.clear=qe,ir.prototype.delete=er,ir.prototype.get=rr,ir.prototype.has=tr,ir.prototype.set=nr;var ar=ir,sr=ve(S,"Map"),or=Te,lr=ar,dr=sr;var cr=function(e){var r=typeof e;return"string"==r||"number"==r||"symbol"==r||"boolean"==r?"__proto__"!==e:null===e};var ur=function(e,r){var t=e.__data__;return cr(r)?t["string"==typeof r?"string":"hash"]:t.map},gr=ur;var mr=function(e){var r=gr(this,e).delete(e);return this.size-=r?1:0,r},br=ur;var hr=function(e){return br(this,e).get(e)},pr=ur;var yr=function(e){return pr(this,e).has(e)},fr=ur;var xr=function(e,r){var t=fr(this,e),n=t.size;return t.set(e,r),this.size+=t.size==n?0:1,this},vr=function(){this.size=0,this.__data__={hash:new or,map:new(dr||lr),string:new or}},Fr=mr,wr=hr,$r=yr,Er=xr;function Cr(e){var r=-1,t=null==e?0:e.length;for(this.clear();++r<t;){var n=e[r];this.set(n[0],n[1])}}Cr.prototype.clear=vr,Cr.prototype.delete=Fr,Cr.prototype.get=wr,Cr.prototype.has=$r,Cr.prototype.set=Er;var Dr=Cr,Br=Dr;function Ar(e,r){if("function"!=typeof e||null!=r&&"function"!=typeof r)throw new TypeError("Expected a function");var t=function(){var n=arguments,i=r?r.apply(this,n):n[0],a=t.cache;if(a.has(i))return a.get(i);var s=e.apply(this,n);return t.cache=a.set(i,s)||a,s};return t.cache=new(Ar.Cache||Br),t}Ar.Cache=Br;var Sr=Ar;var kr=function(e){var r=Sr(e,(function(e){return 500===t.size&&t.clear(),e})),t=r.cache;return r},Mr=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,zr=/\\(\\)?/g,_r=kr((function(e){var r=[];return 46===e.charCodeAt(0)&&r.push(""),e.replace(Mr,(function(e,t,n,i){r.push(n?i.replace(zr,"$1"):t||e)})),r}));var Or=function(e,r){for(var t=-1,n=null==e?0:e.length,i=Array(n);++t<n;)i[t]=r(e[t],t,e);return i},jr=C,Wr=V,Yr=k?k.prototype:void 0,Lr=Yr?Yr.toString:void 0;var Tr=function e(r){if("string"==typeof r)return r;if(jr(r))return Or(r,e)+"";if(Wr(r))return Lr?Lr.call(r):"";var t=r+"";return"0"==t&&1/r==-1/0?"-0":t},Ir=Tr;var Nr=C,Hr=Z,Rr=_r,Pr=function(e){return null==e?"":Ir(e)};var Vr=function(e,r){return Nr(e)?e:Hr(e,r)?[e]:Rr(Pr(e))},Ur=V;var Xr=function(e){if("string"==typeof e||Ur(e))return e;var r=e+"";return"0"==r&&1/e==-1/0?"-0":r},Jr=Vr,Qr=Xr;var Zr=function(e,r){for(var t=0,n=(r=Jr(r,e)).length;null!=e&&t<n;)e=e[Qr(r[t++])];return t&&t==n?e:void 0},Gr=Zr;var Kr=function(e,r,t){var n=null==e?void 0:Gr(e,r);return void 0===n?t:n},qr=E(Kr);const et=(e,r,t)=>qr(t,r)||qr(e,r),rt=(e,r)=>{const t=r||e.defaultValue;return qr(e.collections,t)},tt={collections:{default:{"width-005":.5,"width-010":1,"width-020":2,"width-040":4,solid:"solid"}},defaultValue:"default"},nt=e=>r=>{var t;const n=r.theme,i=rt(tt,null==n?void 0:n.borderScheme);return(null===(t=null==n?void 0:n.overrides)||void 0===t?void 0:t.border)?`${et(i,e,n.overrides.border)}px`:`${i[e]}px`},it={"width-005":nt("width-005"),"width-010":nt("width-010"),"width-020":nt("width-020"),"width-040":nt("width-040"),solid:(at="solid",e=>{var r;const t=e.theme,n=rt(tt,null==t?void 0:t.borderScheme),i=(null===(r=null==t?void 0:t.overrides)||void 0===r?void 0:r.border)?et(n,at,t.overrides.border):n[at];return"function"==typeof i?i(e):i})};var at;const st={"brand-10":"#2C0C0B","brand-20":"#4C1513","brand-30":"#6C1D1B","brand-40":"#922825","brand-50":"#BF3431","brand-60":"#F15D5A","brand-70":"#F69491","brand-80":"#FABAB7","brand-90":"#FCD7D2","brand-95":"#FFEBE7","brand-100":"#FFF6F4","primary-10":"#1A122C","primary-20":"#2F1F4D","primary-30":"#422D6E","primary-40":"#5B3D97","primary-50":"#7654BC","primary-60":"#9A82CD","primary-70":"#B7A7D8","primary-80":"#CFC5E5","primary-90":"#E3DDF0","primary-95":"#F0EDF7","primary-100":"#F9F8FC","secondary-10":"#0E1723","secondary-20":"#18293D","secondary-30":"#233A57","secondary-40":"#305078","secondary-50":"#4B6A8F","secondary-60":"#7B91A9","secondary-70":"#A1B1C3","secondary-80":"#C1CBD7","secondary-90":"#DBE1E8","secondary-95":"#EBEFF2","secondary-100":"#F7F8FA","neutral-10":"#161616","neutral-20":"#282828","neutral-30":"#393939","neutral-40":"#4E4E4E","neutral-50":"#686868","neutral-60":"#8E8E8E","neutral-70":"#AFAFB0","neutral-80":"#C7CACA","neutral-90":"#DDE1E2","neutral-95":"#EDEFEF","neutral-100":"#F9F9F9","success-10":"#081A0F","success-20":"#0E2D1B","success-30":"#154126","success-40":"#1C5A34","success-50":"#257645","success-60":"#44A068","success-70":"#64C189","success-80":"#80DCA5","success-90":"#B4ECCB","success-95":"#D5F6E2","success-100":"#EFFCF4","warning-10":"#221302","warning-20":"#3B2204","warning-30":"#543106","warning-40":"#744408","warning-50":"#98590C","warning-60":"#D07A13","warning-70":"#E4A244","warning-80":"#F5C26C","warning-90":"#FADBA6","warning-95":"#FCECD4","warning-100":"#FDF7F0","error-10":"#330505","error-20":"#550808","error-30":"#750C0C","error-40":"#9E130F","error-50":"#CB2213","error-60":"#DE6C6C","error-70":"#E89B9B","error-80":"#EFBEBE","error-90":"#F5D9D9","error-95":"#F9ECEC","error-100":"#FCF7F7","info-10":"#021824","info-20":"#032B3F","info-30":"#053D59","info-40":"#065478","info-50":"#176E9B","info-60":"#5296BE","info-70":"#82B5DA","info-80":"#ACCFE7","info-90":"#CCE3F1","info-95":"#E3F1F8","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000","primary-inverse":"#FEAB10"},ot={"brand-10":"#1F1221","brand-20":"#371F3B","brand-30":"#4E2C53","brand-40":"#6B3E73","brand-50":"#8D5197","brand-60":"#FF3399","brand-70":"#FF88C4","brand-80":"#FFB3D9","brand-90":"#FFD4E9","brand-95":"#FFE8F3","brand-100":"#FFD6EB","primary-10":"#1F1221","primary-20":"#371F3B","primary-30":"#4E2C53","primary-40":"#6B3E73","primary-50":"#8D5197","primary-60":"#B07DB7","primary-70":"#C7A3CC","primary-80":"#D9C2DD","primary-90":"#E9DBEB","primary-95":"#F3ECF4","primary-100":"#FAF7FA","secondary-10":"#2D091B","secondary-20":"#4D0F2E","secondary-30":"#6B1540","secondary-40":"#931D58","secondary-50":"#C02673","secondary-60":"#FF409F","secondary-70":"#FF88C4","secondary-80":"#FFB3D9","secondary-90":"#FFD4E9","secondary-95":"#FFE8F3","secondary-100":"#FFF8FC","neutral-10":"#161616","neutral-20":"#282828","neutral-30":"#393939","neutral-40":"#4E4E4E","neutral-50":"#686868","neutral-60":"#8E8E8E","neutral-70":"#AFAFB0","neutral-80":"#C7CACA","neutral-90":"#DDE1E2","neutral-95":"#EDEFEF","neutral-100":"#F9F9F9","success-10":"#081A0F","success-20":"#0E2D1B","success-30":"#154126","success-40":"#1C5A34","success-50":"#257645","success-60":"#44A068","success-70":"#64C189","success-80":"#80DCA5","success-90":"#B4ECCB","success-95":"#D5F6E2","success-100":"#EFFCF4","warning-10":"#221302","warning-20":"#3B2204","warning-30":"#543106","warning-40":"#744408","warning-50":"#98590C","warning-60":"#D07A13","warning-70":"#E4A244","warning-80":"#F5C26C","warning-90":"#FADBA6","warning-95":"#FCECD4","warning-100":"#FDF7F0","error-10":"#330505","error-20":"#550808","error-30":"#750C0C","error-40":"#9E130F","error-50":"#CB2213","error-60":"#DE6C6C","error-70":"#E89B9B","error-80":"#EFBEBE","error-90":"#F5D9D9","error-95":"#F9ECEC","error-100":"#FCF7F7","info-10":"#021824","info-20":"#032B3F","info-30":"#053D59","info-40":"#065478","info-50":"#176E9B","info-60":"#5296BE","info-70":"#82B5DA","info-80":"#ACCFE7","info-90":"#CCE3F1","info-95":"#E3F1F8","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000","primary-inverse":"#FEAB10"},lt={"brand-10":"#2C0C0B","brand-20":"#4C1513","brand-30":"#6C1D1B","brand-40":"#922825","brand-50":"#BF3431","brand-60":"#F15D5A","brand-70":"#F69491","brand-80":"#FABAB7","brand-90":"#FCD7D2","brand-95":"#FFEBE7","brand-100":"#FFF6F4","primary-10":"#001731","primary-20":"#002752","primary-30":"#003874","primary-40":"#004D9F","primary-50":"#1768BE","primary-60":"#3C91EC","primary-70":"#6CB4FF","primary-80":"#A5CDFF","primary-90":"#CFE1FE","primary-95":"#E8F0FE","primary-100":"#F7F9FF","secondary-10":"#131529","secondary-20":"#222547","secondary-30":"#2F3565","secondary-40":"#42498B","secondary-50":"#5B62A7","secondary-60":"#858CBD","secondary-70":"#A8ADCF","secondary-80":"#C6C9E0","secondary-90":"#DDDFEC","secondary-95":"#EDEEF5","secondary-100":"#F8F8FB","neutral-10":"#161616","neutral-20":"#282828","neutral-30":"#393939","neutral-40":"#4E4E4E","neutral-50":"#686868","neutral-60":"#8E8E8E","neutral-70":"#AFAFB0","neutral-80":"#C7CACA","neutral-90":"#DDE1E2","neutral-95":"#EDEFEF","neutral-100":"#F9F9F9","success-10":"#081A0F","success-20":"#0E2D1B","success-30":"#154126","success-40":"#1C5A34","success-50":"#257645","success-60":"#44A068","success-70":"#64C189","success-80":"#80DCA5","success-90":"#B4ECCB","success-95":"#D5F6E2","success-100":"#EFFCF4","warning-10":"#221302","warning-20":"#3B2204","warning-30":"#543106","warning-40":"#744408","warning-50":"#98590C","warning-60":"#D07A13","warning-70":"#E4A244","warning-80":"#F5C26C","warning-90":"#FADBA6","warning-95":"#FCECD4","warning-100":"#FDF7F0","error-10":"#330505","error-20":"#550808","error-30":"#750C0C","error-40":"#9E130F","error-50":"#CB2213","error-60":"#DE6C6C","error-70":"#E89B9B","error-80":"#EFBEBE","error-90":"#F5D9D9","error-95":"#F9ECEC","error-100":"#FCF7F7","info-10":"#021824","info-20":"#032B3F","info-30":"#053D59","info-40":"#065478","info-50":"#176E9B","info-60":"#5296BE","info-70":"#82B5DA","info-80":"#ACCFE7","info-90":"#CCE3F1","info-95":"#E3F1F8","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000","primary-inverse":"#FEAB10"},dt={"brand-10":"#2C0C0B","brand-20":"#4C1513","brand-30":"#6C1D1B","brand-40":"#922825","brand-50":"#BF3431","brand-60":"#F15D5A","brand-70":"#F69491","brand-80":"#FABAB7","brand-90":"#FCD7D2","brand-95":"#FFEBE7","brand-100":"#FFF6F4","primary-10":"#0011924","primary-20":"#032B40","primary-30":"#043D5A","primary-40":"#05547B","primary-50":"#096EA1","primary-60":"#2098D3","primary-70":"#5CB9E8","primary-80":"#8BD3F6","primary-90":"#BEE6FA","primary-95":"#E2F2FA","primary-100":"#F4FAFC","secondary-10":"#131529","secondary-20":"#222547","secondary-30":"#2F3565","secondary-40":"#42498B","secondary-50":"#5B62A7","secondary-60":"#858CBD","secondary-70":"#A8ADCF","secondary-80":"#C6C9E0","secondary-90":"#DDDFEC","secondary-95":"#EDEEF5","secondary-100":"#F8F8FB","neutral-10":"#161616","neutral-20":"#282828","neutral-30":"#393939","neutral-40":"#4E4E4E","neutral-50":"#686868","neutral-60":"#8E8E8E","neutral-70":"#AFAFB0","neutral-80":"#C7CACA","neutral-90":"#DDE1E2","neutral-95":"#EDEFEF","neutral-100":"#F9F9F9","success-10":"#081A0F","success-20":"#0E2D1B","success-30":"#154126","success-40":"#1C5A34","success-50":"#257645","success-60":"#44A068","success-70":"#64C189","success-80":"#80DCA5","success-90":"#B4ECCB","success-95":"#D5F6E2","success-100":"#EFFCF4","warning-10":"#221302","warning-20":"#3B2204","warning-30":"#543106","warning-40":"#744408","warning-50":"#98590C","warning-60":"#D07A13","warning-70":"#E4A244","warning-80":"#F5C26C","warning-90":"#FADBA6","warning-95":"#FCECD4","warning-100":"#FDF7F0","error-10":"#330505","error-20":"#550808","error-30":"#750C0C","error-40":"#9E130F","error-50":"#CB2213","error-60":"#DE6C6C","error-70":"#E89B9B","error-80":"#EFBEBE","error-90":"#F5D9D9","error-95":"#F9ECEC","error-100":"#FCF7F7","info-10":"#021824","info-20":"#032B3F","info-30":"#053D59","info-40":"#065478","info-50":"#176E9B","info-60":"#5296BE","info-70":"#82B5DA","info-80":"#ACCFE7","info-90":"#CCE3F1","info-95":"#E3F1F8","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000","primary-inverse":"#FEAB10"},ct={"brand-10":"#001A19","brand-20":"#002D2B","brand-30":"#00413D","brand-40":"#005954","brand-50":"#00756F","brand-60":"#03A098","brand-70":"#55BFBA","brand-80":"#92D6D2","brand-90":"#BFE7E5","brand-95":"#DDF2F1","brand-100":"#F4FBFA","primary-10":"#09191D","primary-20":"#102B34","primary-30":"#173D49","primary-40":"#205666","primary-50":"#2A7086","primary-60":"#2A7086","primary-70":"#8CB6C2","primary-80":"#B2CED6","primary-90":"#D1E2E7","primary-95":"#E8F0F3","primary-100":"#F9F8FC","secondary-10":"#001731","secondary-20":"#002752","secondary-30":"#003874","secondary-40":"#004D9F","secondary-50":"#5B62A7","secondary-60":"#858CBD","secondary-70":"#A8ADCF","secondary-80":"#C6C9E0","secondary-90":"#DDDFEC","secondary-95":"#EDEEF5","secondary-100":"#F8F8FB","neutral-10":"#161616","neutral-20":"#282828","neutral-30":"#393939","neutral-40":"#4E4E4E","neutral-50":"#686868","neutral-60":"#8E8E8E","neutral-70":"#AFAFB0","neutral-80":"#C7CACA","neutral-90":"#DDE1E2","neutral-95":"#EDEFEF","neutral-100":"#F9F9F9","success-10":"#081A0F","success-20":"#0E2D1B","success-30":"#154126","success-40":"#1C5A34","success-50":"#257645","success-60":"#44A068","success-70":"#64C189","success-80":"#80DCA5","success-90":"#B4ECCB","success-95":"#D5F6E2","success-100":"#EFFCF4","warning-10":"#221302","warning-20":"#3B2204","warning-30":"#543106","warning-40":"#744408","warning-50":"#98590C","warning-60":"#D07A13","warning-70":"#E4A244","warning-80":"#F5C26C","warning-90":"#FADBA6","warning-95":"#FCECD4","warning-100":"#FDF7F0","error-10":"#330505","error-20":"#550808","error-30":"#750C0C","error-40":"#9E130F","error-50":"#CB2213","error-60":"#DE6C6C","error-70":"#E89B9B","error-80":"#EFBEBE","error-90":"#F5D9D9","error-95":"#F9ECEC","error-100":"#FCF7F7","info-10":"#021824","info-20":"#032B3F","info-30":"#053D59","info-40":"#065478","info-50":"#176E9B","info-60":"#5296BE","info-70":"#82B5DA","info-80":"#ACCFE7","info-90":"#CCE3F1","info-95":"#E3F1F8","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000","primary-inverse":"#FEAB10"},ut={"brand-10":"#881317","brand-20":"#B5191E","brand-30":"#B5040A","brand-40":"#D0333F","brand-50":"#DC666F","brand-60":"#E28087","brand-70":"#E7999F","brand-80":"#EDB3B7","brand-90":"#F3CCCF","brand-95":"#F9E6E7","brand-100":"#FCF2F3","primary-10":"#000000","primary-20":"#191919","primary-30":"#333333","primary-40":"#4D4D4D","primary-50":"#666666","primary-60":"#808080","primary-70":"#999999","primary-80":"#B3B3B3","primary-90":"#E6E6E6","primary-95":"#F7F7F7","primary-100":"#FFFFFF","secondary-10":"#19151D","secondary-20":"#2B2533","secondary-30":"#3E3649","secondary-40":"#564A64","secondary-50":"#6F637D","secondary-60":"#948B9F","secondary-70":"#B3ACBB","secondary-80":"#CCC8D2","secondary-90":"#E1DEE4","secondary-95":"#EFEEF1","secondary-100":"#F9F8F9","neutral-10":"#000000","neutral-20":"#191919","neutral-30":"#333333","neutral-40":"#4D4D4D","neutral-50":"#666666","neutral-60":"#808080","neutral-70":"#999999","neutral-80":"#B3B3B3","neutral-90":"#E6E6E6","neutral-95":"#F7F7F7","neutral-100":"#FFFFFF","success-10":"#081A0F","success-20":"#0E2D1B","success-30":"#154126","success-40":"#1C5A34","success-50":"#257645","success-60":"#44A068","success-70":"#64C189","success-80":"#80DCA5","success-90":"#B4ECCB","success-95":"#D5F6E2","success-100":"#EFFCF4","warning-10":"#221302","warning-20":"#3B2204","warning-30":"#543106","warning-40":"#744408","warning-50":"#98590C","warning-60":"#D07A13","warning-70":"#E4A244","warning-80":"#F5C26C","warning-90":"#FADBA6","warning-95":"#FCECD4","warning-100":"#FDF7F0","error-10":"#330505","error-20":"#550808","error-30":"#750C0C","error-40":"#9E130F","error-50":"#CB2213","error-60":"#DE6C6C","error-70":"#E89B9B","error-80":"#EFBEBE","error-90":"#F5D9D9","error-95":"#F9ECEC","error-100":"#FCF7F7","info-10":"#021824","info-20":"#032B3F","info-30":"#053D59","info-40":"#065478","info-50":"#176E9B","info-60":"#5296BE","info-70":"#82B5DA","info-80":"#ACCFE7","info-90":"#CCE3F1","info-95":"#E3F1F8","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000","primary-inverse":"#FEAB10"},gt={"brand-10":"#0E123A","brand-20":"#191E65","brand-30":"#232B90","brand-40":"#303BC5","brand-50":"#494CFF","brand-60":"#AD6EFF","brand-70":"#AEA4FF","brand-80":"#C5C4FF","brand-90":"#DDDCFF","brand-95":"#EDECFF","brand-100":"#F8F8FF","primary-10":"#10152B","primary-20":"#1C254B","primary-30":"#28356C","primary-40":"#38489A","primary-50":"#4D5AD7","primary-60":"#7487F2","primary-70":"#9AAAFC","primary-80":"#BDC7FD","primary-90":"#DADFFB","primary-95":"#ECEEFE","primary-100":"#F7F8FF","secondary-10":"#19151D","secondary-20":"#2B2533","secondary-30":"#3E3649","secondary-40":"#564A64","secondary-50":"#6F637D","secondary-60":"#948B9F","secondary-70":"#B3ACBB","secondary-80":"#CCC8D2","secondary-90":"#E1DEE4","secondary-95":"#EFEEF1","secondary-100":"#F9F8F9","neutral-10":"#161616","neutral-20":"#282828","neutral-30":"#393939","neutral-40":"#4E4E4E","neutral-50":"#686868","neutral-60":"#8E8E8E","neutral-70":"#AFAFB0","neutral-80":"#C7CACA","neutral-90":"#DDE1E2","neutral-95":"#EDEFEF","neutral-100":"#F9F9F9","success-10":"#081A0F","success-20":"#0E2D1B","success-30":"#154126","success-40":"#1C5A34","success-50":"#257645","success-60":"#44A068","success-70":"#64C189","success-80":"#80DCA5","success-90":"#B4ECCB","success-95":"#D5F6E2","success-100":"#EFFCF4","warning-10":"#221302","warning-20":"#3B2204","warning-30":"#543106","warning-40":"#744408","warning-50":"#98590C","warning-60":"#D07A13","warning-70":"#E4A244","warning-80":"#F5C26C","warning-90":"#FADBA6","warning-95":"#FCECD4","warning-100":"#FDF7F0","error-10":"#330505","error-20":"#550808","error-30":"#750C0C","error-40":"#9E130F","error-50":"#CB2213","error-60":"#DE6C6C","error-70":"#E89B9B","error-80":"#EFBEBE","error-90":"#F5D9D9","error-95":"#F9ECEC","error-100":"#FCF7F7","info-10":"#021824","info-20":"#032B3F","info-30":"#053D59","info-40":"#065478","info-50":"#176E9B","info-60":"#5296BE","info-70":"#82B5DA","info-80":"#ACCFE7","info-90":"#CCE3F1","info-95":"#E3F1F8","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000","primary-inverse":"#FEAB10"},mt={"brand-10":"#170F39","brand-20":"#281C62","brand-30":"#38268B","brand-40":"#4D34BF","brand-50":"#5735DF","brand-60":"#9986F9","brand-70":"#B2A5F8","brand-80":"#CDC2FA","brand-90":"#E2DCFC","brand-95":"#EFEDFE","brand-100":"#FAF8FD","primary-10":"#170F39","primary-20":"#281C62","primary-30":"#38268B","primary-40":"#4D34BF","primary-50":"#5735DF","primary-60":"#9986F9","primary-70":"#B2A5F8","primary-80":"#CDC2FA","primary-90":"#E2DCFC","primary-95":"#EFEDFE","primary-100":"#FAF8FD","secondary-10":"#251204","secondary-20":"#401F08","secondary-30":"#5B2C0B","secondary-40":"#7E3D0F","secondary-50":"#B04900","secondary-60":"#E26E1C","secondary-70":"#FF9445","secondary-80":"#FFBB8E","secondary-90":"#FFD9BF","secondary-95":"#FFECDF","secondary-100":"#FFF8F3","neutral-10":"#161616","neutral-20":"#282828","neutral-30":"#393939","neutral-40":"#4E4E4E","neutral-50":"#686868","neutral-60":"#8E8E8E","neutral-70":"#AFAFB0","neutral-80":"#C7CACA","neutral-90":"#DDE1E2","neutral-95":"#EDEFEF","neutral-100":"#F9F9F9","success-10":"#031B15","success-20":"#082D24","success-30":"#094134","success-40":"#0D5947","success-50":"#10755E","success-60":"#16A181","success-70":"#1EC59D","success-80":"#6FDDC2","success-90":"#AFECDE","success-95":"#D5F5ED","success-100":"#F1FCF9","warning-10":"#1F1500","warning-20":"#362500","warning-30":"#4D3501","warning-40":"#6A4801","warning-50":"#8B6001","warning-60":"#BF8301","warning-70":"#EAA102","warning-80":"#FFBF34","warning-90":"#FFDC8F","warning-95":"#FFEDC7","warning-100":"#FFF8EA","error-10":"#270F10","error-20":"#441B1B","error-30":"#612627","error-40":"#853535","error-50":"#AF4546","error-60":"#EC6162","error-70":"#F29696","error-80":"#F7BBBC","error-90":"#FAD8D8","error-95":"#FCEAEA","error-100":"#FEF7F7","info-10":"#0F1627","info-20":"#1B2745","info-30":"#273763","info-40":"#354D88","info-50":"#4665B3","info-60":"#618AF6","info-70":"#8DADFF","info-80":"#B4C9FF","info-90":"#D3DFFF","info-95":"#E9EFFF","info-100":"#F5F8FF",white:"#FFFFFF",black:"#000000","primary-inverse":"#FEAB10"},bt={"brand-10":"#0E113C","brand-20":"#191E67","brand-30":"#232A92","brand-40":"#233FC2","brand-50":"#135CEA","brand-60":"#378FFB","brand-70":"#71B3FD","brand-80":"#9DCFFE","brand-90":"#C1E5FF","brand-95":"#DCF1FF","brand-100":"#F3FAFF","primary-10":"#0E113C","primary-20":"#191E67","primary-30":"#232A92","primary-40":"#233FC2","primary-50":"#135CEA","primary-60":"#378FFB","primary-70":"#71B3FD","primary-80":"#9DCFFE","primary-90":"#C1E5FF","primary-95":"#DCF1FF","primary-100":"#F3FAFF","secondary-10":"#34001F","secondary-20":"#540033","secondary-30":"#730045","secondary-40":"#9D0054","secondary-50":"#C61C64","secondary-60":"#DE6792","secondary-70":"#EB96B6","secondary-80":"#F5BAD2","secondary-90":"#FCD5E3","secondary-95":"#FDEBF1","secondary-100":"#FDF6F9","neutral-10":"#161616","neutral-20":"#282828","neutral-30":"#393939","neutral-40":"#4E4E4E","neutral-50":"#686868","neutral-60":"#8E8E8E","neutral-70":"#AFAFB0","neutral-80":"#C7CACA","neutral-90":"#DDE1E2","neutral-95":"#EDEFEF","neutral-100":"#F9F9F9","success-10":"#081A0F","success-20":"#0E2D1B","success-30":"#154126","success-40":"#1C5A34","success-50":"#257645","success-60":"#44A068","success-70":"#64C189","success-80":"#80DCA5","success-90":"#B4ECCB","success-95":"#D5F6E2","success-100":"#EFFCF4","warning-10":"#221302","warning-20":"#3B2204","warning-30":"#543106","warning-40":"#744408","warning-50":"#98590C","warning-60":"#D07A13","warning-70":"#E4A244","warning-80":"#F5C26C","warning-90":"#FADBA6","warning-95":"#FCECD4","warning-100":"#FDF7F0","error-10":"#330505","error-20":"#550808","error-30":"#750C0C","error-40":"#9E130F","error-50":"#CB2213","error-60":"#DE6C6C","error-70":"#E89B9B","error-80":"#EFBEBE","error-90":"#F5D9D9","error-95":"#F9ECEC","error-100":"#FCF7F7","info-10":"#021824","info-20":"#032B3F","info-30":"#053D59","info-40":"#065478","info-50":"#176E9B","info-60":"#5296BE","info-70":"#82B5DA","info-80":"#ACCFE7","info-90":"#CCE3F1","info-95":"#E3F1F8","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000","primary-inverse":"#FEAB10"},ht={collections:{lifesg:lt,bookingsg:st,rbs:gt,mylegacy:dt,ccube:ot,oneservice:ct,pa:ut,a11yplayground:mt,supportgowhere:bt},defaultValue:"lifesg"},pt={collections:{lifesg:lt,bookingsg:st,rbs:gt,mylegacy:dt,ccube:ot,oneservice:ct,pa:ut,a11yplayground:mt,supportgowhere:bt},defaultValue:"lifesg"},yt=e=>r=>{var t;const n=r.theme,i="dark"===(null==n?void 0:n.colourMode),a=rt(i?pt:ht,null==n?void 0:n.colourScheme),s=i?"primitiveColourDark":"primitiveColour",o=null===(t=null==n?void 0:n.overrides)||void 0===t?void 0:t[s];return o?et(a,e,o):a[e]},ft={"brand-10":yt("brand-10"),"brand-20":yt("brand-20"),"brand-30":yt("brand-30"),"brand-40":yt("brand-40"),"brand-50":yt("brand-50"),"brand-60":yt("brand-60"),"brand-70":yt("brand-70"),"brand-80":yt("brand-80"),"brand-90":yt("brand-90"),"brand-95":yt("brand-95"),"brand-100":yt("brand-100"),"primary-10":yt("primary-10"),"primary-20":yt("primary-20"),"primary-30":yt("primary-30"),"primary-40":yt("primary-40"),"primary-50":yt("primary-50"),"primary-60":yt("primary-60"),"primary-70":yt("primary-70"),"primary-80":yt("primary-80"),"primary-90":yt("primary-90"),"primary-95":yt("primary-95"),"primary-100":yt("primary-100"),"secondary-10":yt("secondary-10"),"secondary-20":yt("secondary-20"),"secondary-30":yt("secondary-30"),"secondary-40":yt("secondary-40"),"secondary-50":yt("secondary-50"),"secondary-60":yt("secondary-60"),"secondary-70":yt("secondary-70"),"secondary-80":yt("secondary-80"),"secondary-90":yt("secondary-90"),"secondary-95":yt("secondary-95"),"secondary-100":yt("secondary-100"),"neutral-10":yt("neutral-10"),"neutral-20":yt("neutral-20"),"neutral-30":yt("neutral-30"),"neutral-40":yt("neutral-40"),"neutral-50":yt("neutral-50"),"neutral-60":yt("neutral-60"),"neutral-70":yt("neutral-70"),"neutral-80":yt("neutral-80"),"neutral-90":yt("neutral-90"),"neutral-95":yt("neutral-95"),"neutral-100":yt("neutral-100"),"success-10":yt("success-10"),"success-20":yt("success-20"),"success-30":yt("success-30"),"success-40":yt("success-40"),"success-50":yt("success-50"),"success-60":yt("success-60"),"success-70":yt("success-70"),"success-80":yt("success-80"),"success-90":yt("success-90"),"success-95":yt("success-95"),"success-100":yt("success-100"),"warning-10":yt("warning-10"),"warning-20":yt("warning-20"),"warning-30":yt("warning-30"),"warning-40":yt("warning-40"),"warning-50":yt("warning-50"),"warning-60":yt("warning-60"),"warning-70":yt("warning-70"),"warning-80":yt("warning-80"),"warning-90":yt("warning-90"),"warning-95":yt("warning-95"),"warning-100":yt("warning-100"),"error-10":yt("error-10"),"error-20":yt("error-20"),"error-30":yt("error-30"),"error-40":yt("error-40"),"error-50":yt("error-50"),"error-60":yt("error-60"),"error-70":yt("error-70"),"error-80":yt("error-80"),"error-90":yt("error-90"),"error-95":yt("error-95"),"error-100":yt("error-100"),"info-10":yt("info-10"),"info-20":yt("info-20"),"info-30":yt("info-30"),"info-40":yt("info-40"),"info-50":yt("info-50"),"info-60":yt("info-60"),"info-70":yt("info-70"),"info-80":yt("info-80"),"info-90":yt("info-90"),"info-95":yt("info-95"),"info-100":yt("info-100"),white:yt("white"),black:yt("black"),"primary-inverse":yt("primary-inverse")},xt={text:yt("neutral-20"),"text-subtle":yt("neutral-30"),"text-subtler":yt("neutral-50"),"text-subtlest":yt("neutral-60"),"text-primary":yt("primary-50"),"text-hover":yt("primary-40"),"text-selected":yt("primary-50"),"text-selected-hover":yt("primary-40"),"text-disabled":yt("neutral-50"),"text-disabled-subtle":yt("neutral-60"),"text-disabled-subtlest":yt("neutral-80"),"text-selected-disabled":yt("neutral-20"),"text-success":yt("success-40"),"text-warning":yt("warning-40"),"text-error":yt("error-40"),"text-info":yt("info-40"),"text-inverse":yt("white"),icon:yt("neutral-50"),"icon-subtle":yt("neutral-60"),"icon-strongest":yt("neutral-20"),"icon-primary":yt("primary-50"),"icon-primary-subtle":yt("primary-60"),"icon-primary-subtlest":yt("primary-70"),"icon-hover":yt("primary-40"),"icon-selected":yt("primary-50"),"icon-selected-hover":yt("primary-40"),"icon-disabled":yt("neutral-50"),"icon-disabled-subtle":yt("neutral-60"),"icon-selected-disabled":yt("neutral-60"),"icon-success":yt("success-50"),"icon-warning":yt("warning-60"),"icon-error":yt("error-50"),"icon-error-strong":yt("error-40"),"icon-info":yt("info-50"),"icon-inverse":yt("white"),"icon-primary-inverse":yt("primary-inverse"),border:yt("neutral-90"),"border-strong":yt("neutral-70"),"border-stronger":yt("neutral-50"),"border-primary":yt("primary-50"),"border-primary-subtle":yt("primary-60"),"border-hover":yt("primary-90"),"border-hover-strong":yt("primary-60"),"border-selected":yt("primary-50"),"border-selected-subtle":yt("primary-70"),"border-selected-subtlest":yt("primary-90"),"border-selected-hover":yt("primary-40"),"border-focus":yt("primary-60"),"border-focus-strong":yt("primary-50"),"border-disabled":yt("neutral-90"),"border-selected-disabled":yt("neutral-70"),"border-success":yt("success-60"),"border-warning":yt("warning-60"),"border-error":yt("error-60"),"border-error-focus":yt("error-60"),"border-error-focus-strong":yt("error-40"),"border-error-strong":yt("error-40"),"border-info":yt("info-60"),bg:yt("white"),"bg-strong":yt("neutral-100"),"bg-stronger":yt("neutral-95"),"bg-strongest":yt("neutral-90"),"bg-hover":yt("primary-95"),"bg-hover-strong":yt("primary-90"),"bg-hover-subtle":yt("primary-100"),"bg-hover-neutral":yt("neutral-100"),"bg-hover-neutral-strong":yt("neutral-90"),"bg-selected":yt("primary-95"),"bg-selected-hover":yt("primary-90"),"bg-selected-strong":yt("primary-90"),"bg-selected-stronger":yt("primary-70"),"bg-selected-strongest":yt("primary-50"),"bg-selected-strongest-hover":yt("primary-40"),"bg-disabled":yt("neutral-95"),"bg-selected-disabled":yt("neutral-95"),"bg-selected-stronger-disabled":yt("neutral-70"),"bg-success":yt("success-100"),"bg-success-hover":yt("success-95"),"bg-success-strong":yt("success-50"),"bg-success-strong-hover":yt("success-40"),"bg-warning":yt("warning-100"),"bg-warning-hover":yt("warning-95"),"bg-warning-strong":yt("warning-50"),"bg-warning-strong-hover":yt("warning-40"),"bg-info":yt("info-100"),"bg-info-hover":yt("info-95"),"bg-info-strong":yt("info-50"),"bg-info-strong-hover":yt("info-40"),"bg-error":yt("error-100"),"bg-error-hover":yt("error-95"),"bg-error-strong":yt("error-50"),"bg-error-strong-hover":yt("error-40"),"bg-inverse":yt("neutral-20"),"bg-inverse-subtle":yt("neutral-30"),"bg-inverse-subtler":yt("neutral-50"),"bg-inverse-subtlest":yt("neutral-60"),"bg-inverse-hover":yt("neutral-40"),"bg-primary":yt("primary-50"),"bg-primary-subtle":yt("primary-60"),"bg-primary-subtler":yt("primary-95"),"bg-primary-subtlest":yt("primary-100"),"bg-available":"#6DD0A1","bg-primary-hover":yt("primary-40"),"bg-primary-subtlest-hover":yt("primary-90"),"bg-primary-subtlest-selected":yt("primary-90"),"overlay-strong":"rgba(40, 40, 40, 0.85)","overlay-subtle":"rgba(40, 40, 40, 0.20)",hyperlink:yt("primary-50"),"hyperlink-hover":yt("primary-40"),"hyperlink-visited":yt("primary-40"),"hyperlink-inverse":yt("primary-inverse"),"focus-ring":yt("black"),"focus-ring-inverse":yt("white")},vt={text:yt("neutral-100"),"text-subtle":yt("neutral-80"),"text-subtler":yt("neutral-60"),"text-subtlest":yt("neutral-50"),"text-primary":yt("primary-60"),"text-hover":yt("primary-70"),"text-selected":yt("primary-60"),"text-selected-hover":yt("primary-70"),"text-disabled":yt("neutral-60"),"text-disabled-subtle":yt("neutral-50"),"text-disabled-subtlest":yt("neutral-30"),"text-selected-disabled":yt("neutral-90"),"text-success":yt("success-70"),"text-warning":yt("warning-70"),"text-error":yt("error-70"),"text-info":yt("info-70"),"text-inverse":yt("black"),icon:yt("neutral-60"),"icon-subtle":yt("neutral-50"),"icon-strongest":yt("neutral-90"),"icon-primary":yt("primary-60"),"icon-primary-subtle":yt("primary-50"),"icon-primary-subtlest":yt("primary-40"),"icon-hover":yt("primary-70"),"icon-selected":yt("primary-60"),"icon-selected-hover":yt("primary-70"),"icon-disabled":yt("neutral-60"),"icon-disabled-subtle":yt("neutral-50"),"icon-selected-disabled":yt("neutral-50"),"icon-success":yt("success-60"),"icon-warning":yt("warning-50"),"icon-error":yt("error-60"),"icon-error-strong":yt("error-70"),"icon-info":yt("info-60"),"icon-inverse":yt("black"),"icon-primary-inverse":yt("primary-inverse"),border:yt("neutral-20"),"border-strong":yt("neutral-40"),"border-stronger":yt("neutral-60"),"border-primary":yt("primary-60"),"border-primary-subtle":yt("primary-50"),"border-hover":yt("primary-20"),"border-hover-strong":yt("primary-50"),"border-selected":yt("primary-60"),"border-selected-subtle":yt("primary-40"),"border-selected-subtlest":yt("primary-20"),"border-selected-hover":yt("primary-70"),"border-focus":yt("primary-50"),"border-focus-strong":yt("primary-60"),"border-disabled":yt("neutral-20"),"border-selected-disabled":yt("neutral-40"),"border-success":yt("success-50"),"border-warning":yt("warning-50"),"border-error":yt("error-50"),"border-error-focus":yt("error-50"),"border-error-focus-strong":yt("error-70"),"border-error-strong":yt("error-70"),"border-info":yt("info-50"),bg:yt("black"),"bg-strong":yt("neutral-10"),"bg-stronger":yt("neutral-20"),"bg-strongest":yt("neutral-20"),"bg-hover":yt("primary-20"),"bg-hover-strong":yt("primary-20"),"bg-hover-subtle":yt("primary-10"),"bg-hover-neutral":yt("neutral-10"),"bg-hover-neutral-strong":yt("neutral-20"),"bg-selected":yt("primary-20"),"bg-selected-hover":yt("primary-20"),"bg-selected-strong":yt("primary-20"),"bg-selected-stronger":yt("primary-40"),"bg-selected-strongest":yt("primary-60"),"bg-selected-strongest-hover":yt("primary-70"),"bg-disabled":yt("neutral-20"),"bg-selected-disabled":yt("neutral-20"),"bg-selected-stronger-disabled":yt("neutral-40"),"bg-success":yt("success-10"),"bg-success-hover":yt("success-20"),"bg-success-strong":yt("success-60"),"bg-success-strong-hover":yt("success-70"),"bg-warning":yt("warning-10"),"bg-warning-hover":yt("warning-20"),"bg-warning-strong":yt("warning-60"),"bg-warning-strong-hover":yt("warning-70"),"bg-info":yt("info-10"),"bg-info-hover":yt("info-20"),"bg-info-strong":yt("info-60"),"bg-info-strong-hover":yt("info-70"),"bg-error":yt("error-10"),"bg-error-hover":yt("error-20"),"bg-error-strong":yt("error-60"),"bg-error-strong-hover":yt("error-70"),"bg-inverse":yt("neutral-90"),"bg-inverse-subtle":yt("neutral-80"),"bg-inverse-subtler":yt("neutral-60"),"bg-inverse-subtlest":yt("neutral-50"),"bg-inverse-hover":yt("neutral-70"),"bg-primary":yt("primary-60"),"bg-primary-subtle":yt("primary-50"),"bg-primary-subtler":yt("primary-20"),"bg-primary-subtlest":yt("primary-10"),"bg-available":"#185339","bg-primary-hover":yt("primary-70"),"bg-primary-subtlest-hover":yt("primary-20"),"bg-primary-subtlest-selected":yt("primary-20"),"overlay-strong":"rgba(78, 78, 78, 0.80)","overlay-subtle":"rgba(78, 78, 78, 0.50)",hyperlink:yt("primary-60"),"hyperlink-hover":yt("primary-70"),"hyperlink-visited":yt("primary-70"),"hyperlink-inverse":yt("primary-inverse"),"focus-ring":yt("primary-60"),"focus-ring-inverse":yt("black")},Ft={text:yt("neutral-30"),"text-subtle":yt("neutral-40"),"text-subtler":yt("neutral-50"),"text-subtlest":yt("neutral-70"),"text-primary":yt("neutral-10"),"text-hover":yt("neutral-70"),"text-selected":yt("neutral-20"),"text-selected-hover":yt("neutral-10"),"text-disabled":yt("neutral-50"),"text-disabled-subtle":yt("neutral-60"),"text-disabled-subtlest":yt("neutral-80"),"text-selected-disabled":yt("neutral-40"),"text-success":yt("success-40"),"text-warning":yt("warning-40"),"text-error":yt("brand-30"),"text-info":yt("neutral-40"),"text-inverse":yt("neutral-100"),icon:yt("neutral-40"),"icon-subtle":yt("neutral-50"),"icon-strongest":yt("neutral-10"),"icon-primary":yt("neutral-10"),"icon-primary-subtle":yt("neutral-30"),"icon-primary-subtlest":yt("neutral-60"),"icon-hover":yt("neutral-70"),"icon-selected":yt("brand-20"),"icon-selected-hover":yt("brand-10"),"icon-disabled":yt("neutral-50"),"icon-disabled-subtle":yt("neutral-60"),"icon-selected-disabled":yt("neutral-40"),"icon-success":yt("success-40"),"icon-warning":yt("warning-60"),"icon-error":yt("brand-30"),"icon-error-strong":yt("brand-10"),"icon-info":yt("neutral-40"),"icon-inverse":yt("neutral-100"),"icon-primary-inverse":"#F9B371",border:yt("neutral-90"),"border-strong":yt("neutral-30"),"border-stronger":yt("neutral-20"),"border-primary":yt("neutral-40"),"border-primary-subtle":yt("neutral-60"),"border-hover":yt("neutral-80"),"border-hover-strong":yt("neutral-10"),"border-selected":yt("brand-20"),"border-selected-subtle":yt("neutral-40"),"border-selected-subtlest":yt("neutral-70"),"border-selected-hover":yt("neutral-10"),"border-focus":yt("neutral-20"),"border-focus-strong":yt("neutral-10"),"border-disabled":yt("neutral-90"),"border-selected-disabled":yt("neutral-80"),"border-success":yt("success-40"),"border-warning":yt("warning-60"),"border-error":yt("brand-30"),"border-error-focus":yt("brand-20"),"border-error-focus-strong":yt("brand-10"),"border-error-strong":yt("brand-20"),"border-info":yt("neutral-40"),bg:yt("neutral-100"),"bg-strong":yt("neutral-95"),"bg-stronger":yt("neutral-90"),"bg-strongest":yt("neutral-80"),"bg-hover":yt("brand-90"),"bg-hover-strong":yt("brand-80"),"bg-hover-subtle":yt("neutral-90"),"bg-hover-neutral":yt("neutral-90"),"bg-hover-neutral-strong":yt("neutral-90"),"bg-selected":yt("brand-100"),"bg-selected-hover":yt("brand-30"),"bg-selected-strong":yt("brand-50"),"bg-selected-stronger":yt("brand-40"),"bg-selected-strongest":yt("brand-20"),"bg-selected-strongest-hover":yt("brand-10"),"bg-disabled":yt("neutral-90"),"bg-selected-disabled":yt("neutral-90"),"bg-selected-stronger-disabled":yt("neutral-80"),"bg-success":yt("success-100"),"bg-success-hover":yt("success-95"),"bg-success-strong":yt("success-50"),"bg-success-strong-hover":yt("success-40"),"bg-warning":yt("warning-100"),"bg-warning-hover":yt("warning-95"),"bg-warning-strong":yt("warning-50"),"bg-warning-strong-hover":yt("warning-40"),"bg-info":yt("neutral-95"),"bg-info-hover":yt("info-95"),"bg-info-strong":yt("info-50"),"bg-info-strong-hover":yt("info-40"),"bg-error":yt("brand-100"),"bg-error-hover":yt("error-95"),"bg-error-strong":yt("error-50"),"bg-error-strong-hover":yt("error-40"),"bg-inverse":yt("neutral-40"),"bg-inverse-subtle":yt("neutral-60"),"bg-inverse-subtler":yt("neutral-70"),"bg-inverse-subtlest":yt("neutral-80"),"bg-inverse-hover":yt("neutral-30"),"bg-primary":yt("brand-20"),"bg-primary-subtle":yt("brand-60"),"bg-primary-subtler":yt("brand-80"),"bg-primary-subtlest":yt("brand-100"),"bg-available":yt("success-60"),"bg-primary-hover":yt("brand-10"),"bg-primary-subtlest-hover":yt("brand-80"),"bg-primary-subtlest-selected":yt("brand-40"),"overlay-strong":"rgba(25, 25, 25, 0.95)","overlay-subtle":"rgba(25, 25, 25, 0.20)",hyperlink:yt("neutral-10"),"hyperlink-hover":yt("neutral-40"),"hyperlink-visited":yt("neutral-50"),"hyperlink-inverse":"#F8AE68","focus-ring":yt("black"),"focus-ring-inverse":yt("white")},wt={text:yt("neutral-20"),"text-subtle":yt("neutral-30"),"text-subtler":yt("neutral-50"),"text-subtlest":yt("neutral-60"),"text-primary":yt("primary-50"),"text-hover":yt("primary-40"),"text-selected":yt("primary-50"),"text-selected-hover":yt("primary-40"),"text-disabled":yt("neutral-50"),"text-disabled-subtle":yt("neutral-60"),"text-disabled-subtlest":yt("neutral-80"),"text-selected-disabled":yt("neutral-20"),"text-success":yt("success-40"),"text-warning":yt("warning-40"),"text-error":yt("error-40"),"text-info":yt("info-40"),"text-inverse":yt("white"),icon:yt("neutral-50"),"icon-subtle":yt("neutral-60"),"icon-strongest":yt("neutral-20"),"icon-primary":yt("primary-50"),"icon-primary-subtle":yt("primary-60"),"icon-primary-subtlest":yt("primary-70"),"icon-hover":yt("primary-40"),"icon-selected":yt("primary-50"),"icon-selected-hover":yt("primary-40"),"icon-disabled":yt("neutral-50"),"icon-disabled-subtle":yt("neutral-60"),"icon-selected-disabled":yt("neutral-60"),"icon-success":yt("success-50"),"icon-warning":yt("warning-60"),"icon-error":yt("error-50"),"icon-error-strong":yt("error-40"),"icon-info":yt("info-50"),"icon-inverse":yt("white"),"icon-primary-inverse":yt("primary-inverse"),border:yt("neutral-90"),"border-strong":yt("neutral-70"),"border-stronger":yt("neutral-50"),"border-primary":yt("primary-50"),"border-primary-subtle":yt("primary-60"),"border-hover":yt("primary-90"),"border-hover-strong":yt("primary-60"),"border-selected":yt("primary-50"),"border-selected-subtle":yt("primary-70"),"border-selected-subtlest":yt("primary-90"),"border-selected-hover":yt("primary-40"),"border-focus":yt("primary-60"),"border-focus-strong":yt("primary-50"),"border-disabled":yt("neutral-90"),"border-selected-disabled":yt("neutral-70"),"border-success":yt("success-60"),"border-warning":yt("warning-60"),"border-error":yt("error-60"),"border-error-focus":yt("error-60"),"border-error-focus-strong":yt("error-40"),"border-error-strong":yt("error-40"),"border-info":yt("info-60"),bg:yt("white"),"bg-strong":yt("neutral-100"),"bg-stronger":yt("neutral-95"),"bg-strongest":yt("neutral-90"),"bg-hover":yt("primary-95"),"bg-hover-strong":yt("primary-90"),"bg-hover-subtle":yt("primary-100"),"bg-hover-neutral":yt("neutral-100"),"bg-hover-neutral-strong":yt("neutral-90"),"bg-selected":yt("primary-95"),"bg-selected-hover":yt("primary-90"),"bg-selected-strong":yt("primary-90"),"bg-selected-stronger":yt("primary-70"),"bg-selected-strongest":yt("primary-50"),"bg-selected-strongest-hover":yt("primary-40"),"bg-disabled":yt("neutral-95"),"bg-selected-disabled":yt("neutral-95"),"bg-selected-stronger-disabled":yt("neutral-70"),"bg-success":yt("success-100"),"bg-success-hover":yt("success-95"),"bg-success-strong":yt("success-50"),"bg-success-strong-hover":yt("success-40"),"bg-warning":yt("warning-100"),"bg-warning-hover":yt("warning-95"),"bg-warning-strong":yt("warning-50"),"bg-warning-strong-hover":yt("warning-40"),"bg-info":yt("info-100"),"bg-info-hover":yt("info-95"),"bg-info-strong":yt("info-50"),"bg-info-strong-hover":yt("info-40"),"bg-error":yt("error-100"),"bg-error-hover":yt("error-95"),"bg-error-strong":yt("error-50"),"bg-error-strong-hover":yt("error-40"),"bg-inverse":yt("neutral-20"),"bg-inverse-subtle":yt("neutral-30"),"bg-inverse-subtler":yt("neutral-50"),"bg-inverse-subtlest":yt("neutral-60"),"bg-inverse-hover":yt("neutral-40"),"bg-primary":yt("primary-50"),"bg-primary-subtle":yt("primary-60"),"bg-primary-subtler":yt("primary-95"),"bg-primary-subtlest":yt("primary-100"),"bg-available":"#6DD0A1","bg-primary-hover":yt("primary-40"),"bg-primary-subtlest-hover":yt("primary-90"),"bg-primary-subtlest-selected":yt("primary-90"),"overlay-strong":"rgba(40, 40, 40, 0.85)","overlay-subtle":"rgba(40, 40, 40, 0.20)",hyperlink:yt("primary-50"),"hyperlink-hover":yt("primary-40"),"hyperlink-visited":yt("primary-40"),"hyperlink-inverse":yt("primary-inverse"),"focus-ring":yt("black"),"focus-ring-inverse":yt("white")},$t={text:yt("neutral-100"),"text-subtle":yt("neutral-80"),"text-subtler":yt("neutral-60"),"text-subtlest":yt("neutral-50"),"text-primary":yt("primary-60"),"text-hover":yt("primary-70"),"text-selected":yt("primary-60"),"text-selected-hover":yt("primary-70"),"text-disabled":yt("neutral-60"),"text-disabled-subtle":yt("neutral-50"),"text-disabled-subtlest":yt("neutral-30"),"text-selected-disabled":yt("neutral-90"),"text-success":yt("success-70"),"text-warning":yt("warning-70"),"text-error":yt("error-70"),"text-info":yt("info-70"),"text-inverse":yt("black"),icon:yt("neutral-60"),"icon-subtle":yt("neutral-50"),"icon-strongest":yt("neutral-90"),"icon-primary":yt("primary-60"),"icon-primary-subtle":yt("primary-50"),"icon-primary-subtlest":yt("primary-40"),"icon-hover":yt("primary-70"),"icon-selected":yt("primary-60"),"icon-selected-hover":yt("primary-70"),"icon-disabled":yt("neutral-60"),"icon-disabled-subtle":yt("neutral-50"),"icon-selected-disabled":yt("neutral-50"),"icon-success":yt("success-60"),"icon-warning":yt("warning-50"),"icon-error":yt("error-60"),"icon-error-strong":yt("error-70"),"icon-info":yt("info-60"),"icon-inverse":yt("black"),"icon-primary-inverse":yt("primary-inverse"),border:yt("neutral-20"),"border-strong":yt("neutral-40"),"border-stronger":yt("neutral-60"),"border-primary":yt("primary-60"),"border-primary-subtle":yt("primary-50"),"border-hover":yt("primary-20"),"border-hover-strong":yt("primary-50"),"border-selected":yt("primary-60"),"border-selected-subtle":yt("primary-40"),"border-selected-subtlest":yt("primary-20"),"border-selected-hover":yt("primary-70"),"border-focus":yt("primary-50"),"border-focus-strong":yt("primary-60"),"border-disabled":yt("neutral-20"),"border-selected-disabled":yt("neutral-40"),"border-success":yt("success-50"),"border-warning":yt("warning-50"),"border-error":yt("error-50"),"border-error-focus":yt("error-50"),"border-error-focus-strong":yt("error-70"),"border-error-strong":yt("error-70"),"border-info":yt("info-50"),bg:yt("black"),"bg-strong":yt("neutral-10"),"bg-stronger":yt("neutral-20"),"bg-strongest":yt("neutral-20"),"bg-hover":yt("primary-20"),"bg-hover-strong":yt("primary-20"),"bg-hover-subtle":yt("primary-10"),"bg-hover-neutral":yt("neutral-10"),"bg-hover-neutral-strong":yt("neutral-20"),"bg-selected":yt("primary-20"),"bg-selected-hover":yt("primary-20"),"bg-selected-strong":yt("primary-20"),"bg-selected-stronger":yt("primary-40"),"bg-selected-strongest":yt("primary-60"),"bg-selected-strongest-hover":yt("primary-70"),"bg-disabled":yt("neutral-20"),"bg-selected-disabled":yt("neutral-20"),"bg-selected-stronger-disabled":yt("neutral-40"),"bg-success":yt("success-10"),"bg-success-hover":yt("success-20"),"bg-success-strong":yt("success-60"),"bg-success-strong-hover":yt("success-70"),"bg-warning":yt("warning-10"),"bg-warning-hover":yt("warning-20"),"bg-warning-strong":yt("warning-60"),"bg-warning-strong-hover":yt("warning-70"),"bg-info":yt("info-10"),"bg-info-hover":yt("info-20"),"bg-info-strong":yt("info-60"),"bg-info-strong-hover":yt("info-70"),"bg-error":yt("error-10"),"bg-error-hover":yt("error-20"),"bg-error-strong":yt("error-60"),"bg-error-strong-hover":yt("error-70"),"bg-inverse":yt("neutral-90"),"bg-inverse-subtle":yt("neutral-80"),"bg-inverse-subtler":yt("neutral-60"),"bg-inverse-subtlest":yt("neutral-50"),"bg-inverse-hover":yt("neutral-70"),"bg-primary":yt("primary-60"),"bg-primary-subtle":yt("primary-50"),"bg-primary-subtler":yt("primary-20"),"bg-primary-subtlest":yt("primary-10"),"bg-available":"#185339","bg-primary-hover":yt("primary-70"),"bg-primary-subtlest-hover":yt("primary-20"),"bg-primary-subtlest-selected":yt("primary-20"),"overlay-strong":"rgba(78, 78, 78, 0.80)","overlay-subtle":"rgba(78, 78, 78, 0.50)",hyperlink:yt("primary-60"),"hyperlink-hover":yt("primary-70"),"hyperlink-visited":yt("primary-70"),"hyperlink-inverse":yt("primary-inverse"),"focus-ring":yt("primary-60"),"focus-ring-inverse":yt("black")},Et={collections:{lifesg:xt,bookingsg:xt,rbs:xt,mylegacy:xt,ccube:xt,oneservice:xt,pa:Ft,a11yplayground:wt,supportgowhere:xt},defaultValue:"lifesg"},Ct={collections:{lifesg:vt,bookingsg:vt,rbs:vt,mylegacy:vt,ccube:vt,oneservice:vt,pa:vt,a11yplayground:$t,supportgowhere:vt},defaultValue:"lifesg"},Dt=e=>r=>{var t;const n=r.theme,i="dark"===(null==n?void 0:n.colourMode),a=rt(i?Ct:Et,null==n?void 0:n.colourScheme),s=i?"semanticColourDark":"semanticColour",o=null===(t=null==n?void 0:n.overrides)||void 0===t?void 0:t[s],l=o?et(a,e,o):a[e];return"function"==typeof l?l(r):l},Bt={text:Dt("text"),"text-subtle":Dt("text-subtle"),"text-subtler":Dt("text-subtler"),"text-subtlest":Dt("text-subtlest"),"text-primary":Dt("text-primary"),"text-hover":Dt("text-hover"),"text-selected":Dt("text-selected"),"text-selected-hover":Dt("text-selected-hover"),"text-disabled":Dt("text-disabled"),"text-disabled-subtle":Dt("text-disabled-subtle"),"text-disabled-subtlest":Dt("text-disabled-subtlest"),"text-selected-disabled":Dt("text-selected-disabled"),"text-success":Dt("text-success"),"text-warning":Dt("text-warning"),"text-error":Dt("text-error"),"text-info":Dt("text-info"),"text-inverse":Dt("text-inverse"),icon:Dt("icon"),"icon-subtle":Dt("icon-subtle"),"icon-strongest":Dt("icon-strongest"),"icon-primary":Dt("icon-primary"),"icon-primary-subtle":Dt("icon-primary-subtle"),"icon-primary-subtlest":Dt("icon-primary-subtlest"),"icon-hover":Dt("icon-hover"),"icon-selected":Dt("icon-selected"),"icon-selected-hover":Dt("icon-selected-hover"),"icon-disabled":Dt("icon-disabled"),"icon-disabled-subtle":Dt("icon-disabled-subtle"),"icon-selected-disabled":Dt("icon-selected-disabled"),"icon-success":Dt("icon-success"),"icon-warning":Dt("icon-warning"),"icon-error":Dt("icon-error"),"icon-error-strong":Dt("icon-error-strong"),"icon-info":Dt("icon-info"),"icon-inverse":Dt("icon-inverse"),"icon-primary-inverse":Dt("icon-primary-inverse"),border:Dt("border"),"border-strong":Dt("border-strong"),"border-stronger":Dt("border-stronger"),"border-primary":Dt("border-primary"),"border-primary-subtle":Dt("border-primary-subtle"),"border-hover":Dt("border-hover"),"border-hover-strong":Dt("border-hover-strong"),"border-selected":Dt("border-selected"),"border-selected-subtle":Dt("border-selected-subtle"),"border-selected-subtlest":Dt("border-selected-subtlest"),"border-selected-hover":Dt("border-selected-hover"),"border-focus":Dt("border-focus"),"border-focus-strong":Dt("border-focus-strong"),"border-disabled":Dt("border-disabled"),"border-selected-disabled":Dt("border-selected-disabled"),"border-success":Dt("border-success"),"border-warning":Dt("border-warning"),"border-error":Dt("border-error"),"border-error-focus":Dt("border-error-focus"),"border-error-focus-strong":Dt("border-error-focus-strong"),"border-error-strong":Dt("border-error-strong"),"border-info":Dt("border-info"),bg:Dt("bg"),"bg-strong":Dt("bg-strong"),"bg-stronger":Dt("bg-stronger"),"bg-strongest":Dt("bg-strongest"),"bg-hover":Dt("bg-hover"),"bg-hover-strong":Dt("bg-hover-strong"),"bg-hover-subtle":Dt("bg-hover-subtle"),"bg-hover-neutral":Dt("bg-hover-neutral"),"bg-hover-neutral-strong":Dt("bg-hover-neutral-strong"),"bg-selected":Dt("bg-selected"),"bg-selected-hover":Dt("bg-selected-hover"),"bg-selected-strong":Dt("bg-selected-strong"),"bg-selected-stronger":Dt("bg-selected-stronger"),"bg-selected-strongest":Dt("bg-selected-strongest"),"bg-selected-strongest-hover":Dt("bg-selected-strongest-hover"),"bg-disabled":Dt("bg-disabled"),"bg-selected-disabled":Dt("bg-selected-disabled"),"bg-selected-stronger-disabled":Dt("bg-selected-stronger-disabled"),"bg-success":Dt("bg-success"),"bg-success-hover":Dt("bg-success-hover"),"bg-success-strong":Dt("bg-success-strong"),"bg-success-strong-hover":Dt("bg-success-strong-hover"),"bg-warning":Dt("bg-warning"),"bg-warning-hover":Dt("bg-warning-hover"),"bg-warning-strong":Dt("bg-warning-strong"),"bg-warning-strong-hover":Dt("bg-warning-strong-hover"),"bg-info":Dt("bg-info"),"bg-info-hover":Dt("bg-info-hover"),"bg-info-strong":Dt("bg-info-strong"),"bg-info-strong-hover":Dt("bg-info-strong-hover"),"bg-error":Dt("bg-error"),"bg-error-hover":Dt("bg-error-hover"),"bg-error-strong":Dt("bg-error-strong"),"bg-error-strong-hover":Dt("bg-error-strong-hover"),"bg-inverse":Dt("bg-inverse"),"bg-inverse-subtle":Dt("bg-inverse-subtle"),"bg-inverse-subtler":Dt("bg-inverse-subtler"),"bg-inverse-subtlest":Dt("bg-inverse-subtlest"),"bg-inverse-hover":Dt("bg-inverse-hover"),"bg-primary":Dt("bg-primary"),"bg-primary-subtle":Dt("bg-primary-subtle"),"bg-primary-subtler":Dt("bg-primary-subtler"),"bg-primary-subtlest":Dt("bg-primary-subtlest"),"bg-available":Dt("bg-available"),"bg-primary-hover":Dt("bg-primary-hover"),"bg-primary-subtlest-hover":Dt("bg-primary-subtlest-hover"),"bg-primary-subtlest-selected":Dt("bg-primary-subtlest-selected"),"overlay-strong":Dt("overlay-strong"),"overlay-subtle":Dt("overlay-subtle"),hyperlink:Dt("hyperlink"),"hyperlink-hover":Dt("hyperlink-hover"),"hyperlink-visited":Dt("hyperlink-visited"),"hyperlink-inverse":Dt("hyperlink-inverse"),"focus-ring":Dt("focus-ring"),"focus-ring-inverse":Dt("focus-ring-inverse")},At={collections:{default:{solid:e=>r=>{var n,i,a;const{thickness:s,radius:o,colour:l}=e||{},d=null!==(n="function"==typeof s?s(r):s)&&void 0!==n?n:it["width-010"](r),c=null!==(i="function"==typeof o?o(r):o)&&void 0!==i?i:0,u=null!==(a="function"==typeof l?l(r):l)&&void 0!==a?a:Bt.border(r),g=it.solid;return t`
            border: ${d} ${g} ${u};
            border-radius: ${c};
        `},"dashed-default":e=>r=>{var n,i,a;const{thickness:s,radius:o,colour:l}=e||{},d=null!==(n="function"==typeof s?s(r):s)&&void 0!==n?n:it["width-010"](r),c=null!==(i="function"==typeof o?o(r):o)&&void 0!==i?i:0,u=null!==(a="function"==typeof l?l(r):l)&&void 0!==a?a:Bt.border(r),g=encodeURIComponent(`<svg width='100%' height='100%' xmlns='http://www.w3.org/2000/svg'><rect width='100%' height='100%' fill='none' rx='${c}' ry='${c}' stroke='${u}' stroke-width='${d}' stroke-dasharray='4, 8' stroke-dashoffset='0' stroke-linecap='square'/></svg>`);return t`
            background-image: url("data:image/svg+xml,${g}");
            border-radius: ${c};
        `}}},defaultValue:"default"},St=e=>1===e.length&&"theme"in e[0],kt=e=>(...r)=>t=>{const n=St(r)?[]:r,i=St(r)?r[0]:t,a=i.theme;return(0,rt(At,null==a?void 0:a.borderScheme)[e])(...n)(i)},Mt={solid:kt("solid"),"dashed-default":kt("dashed-default")},zt={collections:{default:{"xxs-min":0,"xxs-max":320,"xs-min":321,"xs-max":375,"sm-min":376,"sm-max":420,"md-min":421,"md-max":767,"lg-min":768,"lg-max":1023,"xl-min":1024,"xl-max":1440,"xxl-min":1441,"xxs-column":8,"xs-column":8,"sm-column":8,"md-column":8,"lg-column":12,"xl-column":12,"xxl-column":12,"xxs-gutter":16,"xs-gutter":16,"sm-gutter":16,"md-gutter":16,"lg-gutter":32,"xl-gutter":32,"xxl-gutter":32,"xxs-margin":24,"xs-margin":24,"sm-margin":24,"md-margin":24,"lg-margin":48,"xl-margin":48,"xxl-margin":48}},defaultValue:"default"},_t=e=>r=>{var t;const n=r.theme,i=rt(zt,null==n?void 0:n.breakpointScheme);let a;return a=(null===(t=null==n?void 0:n.overrides)||void 0===t?void 0:t.breakpoint)?et(i,e,n.overrides.breakpoint):i[e],a},Ot={"xxs-min":_t("xxs-min"),"xxs-max":_t("xxs-max"),"xs-min":_t("xs-min"),"xs-max":_t("xs-max"),"sm-min":_t("sm-min"),"sm-max":_t("sm-max"),"md-min":_t("md-min"),"md-max":_t("md-max"),"lg-min":_t("lg-min"),"lg-max":_t("lg-max"),"xl-min":_t("xl-min"),"xl-max":_t("xl-max"),"xxl-min":_t("xxl-min"),"xxs-column":_t("xxs-column"),"xs-column":_t("xs-column"),"sm-column":_t("sm-column"),"md-column":_t("md-column"),"lg-column":_t("lg-column"),"xl-column":_t("xl-column"),"xxl-column":_t("xxl-column"),"xxs-gutter":_t("xxs-gutter"),"xs-gutter":_t("xs-gutter"),"sm-gutter":_t("sm-gutter"),"md-gutter":_t("md-gutter"),"lg-gutter":_t("lg-gutter"),"xl-gutter":_t("xl-gutter"),"xxl-gutter":_t("xxl-gutter"),"xxs-margin":_t("xxs-margin"),"xs-margin":_t("xs-margin"),"sm-margin":_t("sm-margin"),"md-margin":_t("md-margin"),"lg-margin":_t("lg-margin"),"xl-margin":_t("xl-margin"),"xxl-margin":_t("xxl-margin")},jt=e=>("max-width"===e?["xxs","xs","sm","md","lg","xl"]:["xxs","xs","sm","md","lg","xl","xxl"]).reduce(((r,t)=>(r[t]=((e,r)=>{const t=Ot["max-width"===e?`${r}-max`:`${r}-min`];return r=>{const n=t(r);return`@media screen and (${e}: ${n}px)`}})(e,t),r)),{}),Wt={MaxWidth:jt("max-width"),MinWidth:jt("min-width")},Yt={collections:{default:{"heading-size-xxl":"3rem","heading-size-xl":"2.5rem","heading-size-lg":"2rem","heading-size-md":"1.625rem","heading-size-sm":"1.375rem","heading-size-xs":"1.125rem","heading-lh-xxl":"3.5rem","heading-lh-xl":"3rem","heading-lh-lg":"2.5rem","heading-lh-md":"2.25rem","heading-lh-sm":"1.75rem","heading-lh-xs":"1.625rem","heading-ls-xxl":"-0.056rem","heading-ls-xl":"-0.032rem","heading-ls-lg":"-0.032rem","heading-ls-md":"0rem","heading-ls-sm":"0rem","heading-ls-xs":"0rem","weight-light":"300","weight-regular":"400","weight-semibold":"600","weight-bold":"700","font-family":"Open Sans","body-size-baseline":"1.125rem","body-size-md":"1rem","body-size-sm":"0.875rem","body-size-xs":"0.75rem","body-lh-baseline":"1.625rem","body-lh-md":"1.5rem","body-lh-sm":"1.625rem","body-lh-xs":"1.25rem","body-ls-baseline":"0rem","body-ls-md":"0.014rem","body-ls-sm":"0.012rem","body-ls-xs":"0.012rem","form-label-size":"1rem","form-description-size":"0.875rem","form-label-lh":"1.5rem","form-description-lh":"1.6rem","form-label-ls":"0.014rem","form-description-ls":"0.012rem"},bookingsg:{"heading-size-xxl":"3rem","heading-size-xl":"2.5rem","heading-size-lg":"2rem","heading-size-md":"1.625rem","heading-size-sm":"1.375rem","heading-size-xs":"1.125rem","heading-lh-xxl":"3.5rem","heading-lh-xl":"3rem","heading-lh-lg":"2.5rem","heading-lh-md":"2.25rem","heading-lh-sm":"1.75rem","heading-lh-xs":"1.75rem","heading-ls-xxl":"-0.056rem","heading-ls-xl":"-0.032rem","heading-ls-lg":"-0.032rem","heading-ls-md":"0rem","heading-ls-sm":"0rem","heading-ls-xs":"0rem","weight-light":"300","weight-regular":"400","weight-semibold":"600","weight-bold":"700","font-family":"Plus Jakarta Sans","body-size-baseline":"1.125rem","body-size-md":"1rem","body-size-sm":"0.875rem","body-size-xs":"0.75rem","body-lh-baseline":"1.75rem","body-lh-md":"1.5rem","body-lh-sm":"1.6rem","body-lh-xs":"1.2rem","body-ls-baseline":"0rem","body-ls-md":"0.014rem","body-ls-sm":"0.012rem","body-ls-xs":"0.012rem","form-label-size":"1rem","form-description-size":"0.875rem","form-label-lh":"1.5rem","form-description-lh":"1.6rem","form-label-ls":"0.014rem","form-description-ls":"0.012rem"},pa:{"heading-size-xxl":"2.5rem","heading-size-xl":"2rem","heading-size-lg":"1.75rem","heading-size-md":"1.5rem","heading-size-sm":"1.25rem","heading-size-xs":"1rem","heading-lh-xxl":"3rem","heading-lh-xl":"2.5rem","heading-lh-lg":"2.25rem","heading-lh-md":"2rem","heading-lh-sm":"2rem","heading-lh-xs":"1.75rem","heading-ls-xxl":"-0.032rem","heading-ls-xl":"-0.032rem","heading-ls-lg":"0rem","heading-ls-md":"0rem","heading-ls-sm":"0rem","heading-ls-xs":"0rem","weight-light":"300","weight-regular":"400","weight-semibold":"600","weight-bold":"700","font-family":"Lato","body-size-baseline":"1rem","body-size-md":"0.875rem","body-size-sm":"0.75rem","body-size-xs":"0.625rem","body-lh-baseline":"1.75rem","body-lh-md":"1.5rem","body-lh-sm":"1.25rem","body-lh-xs":"1.25rem","body-ls-baseline":"0rem","body-ls-md":"0.014rem","body-ls-sm":"0.012rem","body-ls-xs":"0.012rem","form-label-size":"1rem","form-description-size":"0.875rem","form-label-lh":"1.5rem","form-description-lh":"1.6rem","form-label-ls":"0.014rem","form-description-ls":"0.012rem"},a11yplayground:{"heading-size-xxl":"3rem","heading-size-xl":"2.5rem","heading-size-lg":"2rem","heading-size-md":"1.625rem","heading-size-sm":"1.375rem","heading-size-xs":"1.125rem","heading-lh-xxl":"3.5rem","heading-lh-xl":"3rem","heading-lh-lg":"2.5rem","heading-lh-md":"2.25rem","heading-lh-sm":"1.75rem","heading-lh-xs":"1.625rem","heading-ls-xxl":"-0.056rem","heading-ls-xl":"-0.032rem","heading-ls-lg":"-0.032rem","heading-ls-md":"0rem","heading-ls-sm":"0rem","heading-ls-xs":"0rem","weight-light":"300","weight-regular":"400","weight-semibold":"600","weight-bold":"700","font-family":"Atkinson Hyperlegible Next","body-size-baseline":"1.125rem","body-size-md":"1rem","body-size-sm":"0.875rem","body-size-xs":"0.75rem","body-lh-baseline":"1.625rem","body-lh-md":"1.5rem","body-lh-sm":"1.625rem","body-lh-xs":"1.25rem","body-ls-baseline":"0rem","body-ls-md":"0.014rem","body-ls-sm":"0.012rem","body-ls-xs":"0.012rem","form-label-size":"1.125rem","form-description-size":"1rem","form-label-lh":"1.5rem","form-description-lh":"1.625rem","form-label-ls":"0rem","form-description-ls":"0.00875rem"},supportgowhere:{"heading-size-xxl":"3rem","heading-size-xl":"2.5rem","heading-size-lg":"2rem","heading-size-md":"1.625rem","heading-size-sm":"1.375rem","heading-size-xs":"1.125rem","heading-lh-xxl":"3.5rem","heading-lh-xl":"3rem","heading-lh-lg":"2.5rem","heading-lh-md":"2.25rem","heading-lh-sm":"1.75rem","heading-lh-xs":"1.625rem","heading-ls-xxl":"-0.056rem","heading-ls-xl":"-0.032rem","heading-ls-lg":"-0.032rem","heading-ls-md":"0rem","heading-ls-sm":"0rem","heading-ls-xs":"0rem","weight-light":"300","weight-regular":"400","weight-semibold":"600","weight-bold":"700","font-family":"Libre Franklin","body-size-baseline":"1.125rem","body-size-md":"1rem","body-size-sm":"0.875rem","body-size-xs":"0.75rem","body-lh-baseline":"1.625rem","body-lh-md":"1.5rem","body-lh-sm":"1.625rem","body-lh-xs":"1.25rem","body-ls-baseline":"0rem","body-ls-md":"0.014rem","body-ls-sm":"0.012rem","body-ls-xs":"0.012rem","form-label-size":"1rem","form-description-size":"0.875rem","form-label-lh":"1.5rem","form-description-lh":"1.6rem","form-label-ls":"0.014rem","form-description-ls":"0.012rem"}},defaultValue:"default"},Lt=e=>r=>{var t;const n=r.theme,i=rt(Yt,null==n?void 0:n.fontScheme);return(null===(t=null==n?void 0:n.overrides)||void 0===t?void 0:t.fontSpec)?et(i,e,n.overrides.fontSpec):i[e]},Tt={"heading-size-xxl":Lt("heading-size-xxl"),"heading-size-xl":Lt("heading-size-xl"),"heading-size-lg":Lt("heading-size-lg"),"heading-size-md":Lt("heading-size-md"),"heading-size-sm":Lt("heading-size-sm"),"heading-size-xs":Lt("heading-size-xs"),"heading-lh-xxl":Lt("heading-lh-xxl"),"heading-lh-xl":Lt("heading-lh-xl"),"heading-lh-lg":Lt("heading-lh-lg"),"heading-lh-md":Lt("heading-lh-md"),"heading-lh-sm":Lt("heading-lh-sm"),"heading-lh-xs":Lt("heading-lh-xs"),"heading-ls-xxl":Lt("heading-ls-xxl"),"heading-ls-xl":Lt("heading-ls-xl"),"heading-ls-lg":Lt("heading-ls-lg"),"heading-ls-md":Lt("heading-ls-md"),"heading-ls-sm":Lt("heading-ls-sm"),"heading-ls-xs":Lt("heading-ls-xs"),"weight-light":Lt("weight-light"),"weight-regular":Lt("weight-regular"),"weight-semibold":Lt("weight-semibold"),"weight-bold":Lt("weight-bold"),"font-family":Lt("font-family"),"body-size-baseline":Lt("body-size-baseline"),"body-size-md":Lt("body-size-md"),"body-size-sm":Lt("body-size-sm"),"body-size-xs":Lt("body-size-xs"),"body-lh-baseline":Lt("body-lh-baseline"),"body-lh-md":Lt("body-lh-md"),"body-lh-sm":Lt("body-lh-sm"),"body-lh-xs":Lt("body-lh-xs"),"body-ls-baseline":Lt("body-ls-baseline"),"body-ls-md":Lt("body-ls-md"),"body-ls-sm":Lt("body-ls-sm"),"body-ls-xs":Lt("body-ls-xs"),"form-label-size":Lt("form-label-size"),"form-description-size":Lt("form-description-size"),"form-label-lh":Lt("form-label-lh"),"form-description-lh":Lt("form-description-lh"),"form-label-ls":Lt("form-label-ls"),"form-description-ls":Lt("form-description-ls")},It=(e,r,n,i,a)=>{const{disableLigatures:s}=a||{};return t`
        font-family: ${Lt("font-family")};
        font-size: ${Lt(e)};
        font-weight: ${Lt(r)};
        line-height: ${Lt(n)};
        letter-spacing: ${Lt(i)};

        font-variant: ${s?"no-common-ligatures":"normal"};
    `},Nt=(e={})=>({"heading-xxl-light":It("heading-size-xxl","weight-light","heading-lh-xxl","heading-ls-xxl",e),"heading-xxl-regular":It("heading-size-xxl","weight-regular","heading-lh-xxl","heading-ls-xxl",e),"heading-xxl-semibold":It("heading-size-xxl","weight-semibold","heading-lh-xxl","heading-ls-xxl",e),"heading-xxl-bold":It("heading-size-xxl","weight-bold","heading-lh-xxl","heading-ls-xxl",e),"heading-xl-light":It("heading-size-xl","weight-light","heading-lh-xl","heading-ls-xl",e),"heading-xl-regular":It("heading-size-xl","weight-regular","heading-lh-xl","heading-ls-xl",e),"heading-xl-semibold":It("heading-size-xl","weight-semibold","heading-lh-xl","heading-ls-xl",e),"heading-xl-bold":It("heading-size-xl","weight-bold","heading-lh-xl","heading-ls-xl",e),"heading-lg-light":It("heading-size-lg","weight-light","heading-lh-lg","heading-ls-lg",e),"heading-lg-regular":It("heading-size-lg","weight-regular","heading-lh-lg","heading-ls-lg",e),"heading-lg-semibold":It("heading-size-lg","weight-semibold","heading-lh-lg","heading-ls-lg",e),"heading-lg-bold":It("heading-size-lg","weight-bold","heading-lh-lg","heading-ls-lg",e),"heading-md-light":It("heading-size-md","weight-light","heading-lh-md","heading-ls-md",e),"heading-md-regular":It("heading-size-md","weight-regular","heading-lh-md","heading-ls-md",e),"heading-md-semibold":It("heading-size-md","weight-semibold","heading-lh-md","heading-ls-md",e),"heading-md-bold":It("heading-size-md","weight-bold","heading-lh-md","heading-ls-md",e),"heading-sm-light":It("heading-size-sm","weight-light","heading-lh-sm","heading-ls-sm",e),"heading-sm-regular":It("heading-size-sm","weight-regular","heading-lh-sm","heading-ls-sm",e),"heading-sm-semibold":It("heading-size-sm","weight-semibold","heading-lh-sm","heading-ls-sm",e),"heading-sm-bold":It("heading-size-sm","weight-bold","heading-lh-sm","heading-ls-sm",e),"heading-xs-light":It("heading-size-xs","weight-light","heading-lh-xs","heading-ls-xs",e),"heading-xs-regular":It("heading-size-xs","weight-regular","heading-lh-xs","heading-ls-xs",e),"heading-xs-semibold":It("heading-size-xs","weight-semibold","heading-lh-xs","heading-ls-xs",e),"heading-xs-bold":It("heading-size-xs","weight-bold","heading-lh-xs","heading-ls-xs",e),"body-baseline-light":It("body-size-baseline","weight-light","body-lh-baseline","body-ls-baseline",e),"body-baseline-regular":It("body-size-baseline","weight-regular","body-lh-baseline","body-ls-baseline",e),"body-baseline-semibold":It("body-size-baseline","weight-semibold","body-lh-baseline","body-ls-baseline",e),"body-baseline-bold":It("body-size-baseline","weight-bold","body-lh-baseline","body-ls-baseline",e),"body-md-light":It("body-size-md","weight-light","body-lh-md","body-ls-md",e),"body-md-regular":It("body-size-md","weight-regular","body-lh-md","body-ls-md",e),"body-md-semibold":It("body-size-md","weight-semibold","body-lh-md","body-ls-md",e),"body-md-bold":It("body-size-md","weight-bold","body-lh-md","body-ls-md",e),"body-sm-light":It("body-size-sm","weight-light","body-lh-sm","body-ls-sm",e),"body-sm-regular":It("body-size-sm","weight-regular","body-lh-sm","body-ls-sm",e),"body-sm-semibold":It("body-size-sm","weight-semibold","body-lh-sm","body-ls-sm",e),"body-sm-bold":It("body-size-sm","weight-bold","body-lh-sm","body-ls-sm",e),"body-xs-light":It("body-size-xs","weight-light","body-lh-xs","body-ls-xs",e),"body-xs-regular":It("body-size-xs","weight-regular","body-lh-xs","body-ls-xs",e),"body-xs-semibold":It("body-size-xs","weight-semibold","body-lh-xs","body-ls-xs",e),"body-xs-bold":It("body-size-xs","weight-bold","body-lh-xs","body-ls-xs",e),"form-label":It("form-label-size","weight-semibold","form-label-lh","form-label-ls",e),"form-description":It("form-description-size","weight-regular","form-description-lh","form-description-ls",e)}),Ht=Nt({disableLigatures:!0}),Rt={collections:{default:Nt(),bookingsg:Ht,pa:Nt({disableLigatures:!0}),a11yplayground:Nt({disableLigatures:!0}),supportgowhere:Nt({disableLigatures:!0})},defaultValue:"default"},Pt=e=>r=>{var t;const n=r.theme,i=rt(Rt,null==n?void 0:n.fontScheme),a=(null===(t=null==n?void 0:n.overrides)||void 0===t?void 0:t.font)?et(i,e,n.overrides.font):i[e];return"function"==typeof a?a(r):a},Vt={"heading-xxl-light":Pt("heading-xxl-light"),"heading-xxl-regular":Pt("heading-xxl-regular"),"heading-xxl-semibold":Pt("heading-xxl-semibold"),"heading-xxl-bold":Pt("heading-xxl-bold"),"heading-xl-light":Pt("heading-xl-light"),"heading-xl-regular":Pt("heading-xl-regular"),"heading-xl-semibold":Pt("heading-xl-semibold"),"heading-xl-bold":Pt("heading-xl-bold"),"heading-lg-light":Pt("heading-lg-light"),"heading-lg-regular":Pt("heading-lg-regular"),"heading-lg-semibold":Pt("heading-lg-semibold"),"heading-lg-bold":Pt("heading-lg-bold"),"heading-md-light":Pt("heading-md-light"),"heading-md-regular":Pt("heading-md-regular"),"heading-md-semibold":Pt("heading-md-semibold"),"heading-md-bold":Pt("heading-md-bold"),"heading-sm-light":Pt("heading-sm-light"),"heading-sm-regular":Pt("heading-sm-regular"),"heading-sm-semibold":Pt("heading-sm-semibold"),"heading-sm-bold":Pt("heading-sm-bold"),"heading-xs-light":Pt("heading-xs-light"),"heading-xs-regular":Pt("heading-xs-regular"),"heading-xs-semibold":Pt("heading-xs-semibold"),"heading-xs-bold":Pt("heading-xs-bold"),"body-baseline-light":Pt("body-baseline-light"),"body-baseline-regular":Pt("body-baseline-regular"),"body-baseline-semibold":Pt("body-baseline-semibold"),"body-baseline-bold":Pt("body-baseline-bold"),"body-md-light":Pt("body-md-light"),"body-md-regular":Pt("body-md-regular"),"body-md-semibold":Pt("body-md-semibold"),"body-md-bold":Pt("body-md-bold"),"body-sm-light":Pt("body-sm-light"),"body-sm-regular":Pt("body-sm-regular"),"body-sm-semibold":Pt("body-sm-semibold"),"body-sm-bold":Pt("body-sm-bold"),"body-xs-light":Pt("body-xs-light"),"body-xs-regular":Pt("body-xs-regular"),"body-xs-semibold":Pt("body-xs-semibold"),"body-xs-bold":Pt("body-xs-bold"),"form-label":Pt("form-label"),"form-description":Pt("form-description")},Ut={collections:{default:{"duration-150":"150ms","duration-250":"250ms","duration-350":"350ms","duration-500":"500ms","duration-800":"800ms","duration-1000":"1000ms","ease-default":"cubic-bezier(0.45, 0.05, 0.55, 0.95)","ease-standard":"cubic-bezier(0.86, 0, 0.07, 1)","ease-entrance":"cubic-bezier(0.18, 0.13, 0, 1)","ease-exit":"cubic-bezier(1, 0, 0.8, 0.85)"}},defaultValue:"default"},Xt=e=>r=>{var t;const n=r.theme,i=rt(Ut,null==n?void 0:n.motionScheme);return(null===(t=null==n?void 0:n.overrides)||void 0===t?void 0:t.motion)?et(i,e,n.overrides.motion):i[e]},Jt={"duration-150":Xt("duration-150"),"duration-250":Xt("duration-250"),"duration-350":Xt("duration-350"),"duration-500":Xt("duration-500"),"duration-800":Xt("duration-800"),"duration-1000":Xt("duration-1000"),"ease-default":Xt("ease-default"),"ease-standard":Xt("ease-standard"),"ease-entrance":Xt("ease-entrance"),"ease-exit":Xt("ease-exit")},Qt={collections:{default:{none:0,xs:2,sm:4,md:8,lg:12,full:9999}},defaultValue:"default"},Zt=e=>r=>{var t;const n=r.theme,i=rt(Qt,null==n?void 0:n.radiusScheme);return(null===(t=null==n?void 0:n.overrides)||void 0===t?void 0:t.radius)?`${et(i,e,n.overrides.radius)}px`:`${i[e]}px`},Gt={none:Zt("none"),xs:Zt("xs"),sm:Zt("sm"),md:Zt("md"),lg:Zt("lg"),full:Zt("full")},Kt={collections:{default:{"spacing-0":0,"spacing-4":4,"spacing-8":8,"spacing-12":12,"spacing-16":16,"spacing-20":20,"spacing-24":24,"spacing-32":32,"spacing-40":40,"spacing-48":48,"spacing-64":64,"spacing-72":72,"layout-xs":8,"layout-sm":16,"layout-md":24,"layout-lg":32,"layout-xl":48,"layout-xxl":64,"layout-xxxl":128}},defaultValue:"default"},qt=e=>r=>{var t;const n=r.theme,i=rt(Kt,null==n?void 0:n.spacingScheme);return(null===(t=null==n?void 0:n.overrides)||void 0===t?void 0:t.spacing)?`${et(i,e,n.overrides.spacing)}px`:`${i[e]}px`},en={"spacing-0":qt("spacing-0"),"spacing-4":qt("spacing-4"),"spacing-8":qt("spacing-8"),"spacing-12":qt("spacing-12"),"spacing-16":qt("spacing-16"),"spacing-20":qt("spacing-20"),"spacing-24":qt("spacing-24"),"spacing-32":qt("spacing-32"),"spacing-40":qt("spacing-40"),"spacing-48":qt("spacing-48"),"spacing-64":qt("spacing-64"),"spacing-72":qt("spacing-72"),"layout-xs":qt("layout-xs"),"layout-sm":qt("layout-sm"),"layout-md":qt("layout-md"),"layout-lg":qt("layout-lg"),"layout-xl":qt("layout-xl"),"layout-xxl":qt("layout-xxl"),"layout-xxxl":qt("layout-xxxl")},rn=(e,r)=>Object.assign(Object.assign({},e),{colourMode:r}),tn=Object.assign(Object.assign({},Bt),{Primitive:ft}),nn=Object.assign(Object.assign({},Vt),{Spec:Tt}),an=Jt,sn=Object.assign(Object.assign({},it),{Util:Mt}),on=en,ln=Gt,dn=Ot,cn=Wt,un={colourScheme:"lifesg",fontScheme:"default",motionScheme:"default",borderScheme:"default",spacingScheme:"default",radiusScheme:"default",breakpointScheme:"default",resourceScheme:"lifesg",_v2:{colorScheme:"base",textStyleScheme:"base",designTokenScheme:"base",resourceScheme:"base"}},gn={colourScheme:"bookingsg",fontScheme:"bookingsg",motionScheme:"default",borderScheme:"default",spacingScheme:"default",radiusScheme:"default",breakpointScheme:"default",resourceScheme:"bookingsg",_v2:{colorScheme:"bookingsg",textStyleScheme:"base",designTokenScheme:"base",resourceScheme:"bookingsg"}},mn={colourScheme:"ccube",fontScheme:"default",motionScheme:"default",borderScheme:"default",spacingScheme:"default",radiusScheme:"default",breakpointScheme:"default",resourceScheme:"ccube",_v2:{colorScheme:"ccube",textStyleScheme:"base",designTokenScheme:"base",resourceScheme:"ccube"}},bn={colourScheme:"mylegacy",fontScheme:"default",motionScheme:"default",borderScheme:"default",spacingScheme:"default",radiusScheme:"default",breakpointScheme:"default",resourceScheme:"mylegacy",_v2:{colorScheme:"mylegacy",textStyleScheme:"base",designTokenScheme:"base",resourceScheme:"mylegacy"}},hn={colourScheme:"rbs",fontScheme:"default",motionScheme:"default",borderScheme:"default",spacingScheme:"default",radiusScheme:"default",breakpointScheme:"default",resourceScheme:"rbs",_v2:{colorScheme:"rbs",textStyleScheme:"base",designTokenScheme:"rbs",resourceScheme:"rbs"}},pn={colourScheme:"oneservice",fontScheme:"default",motionScheme:"default",borderScheme:"default",spacingScheme:"default",radiusScheme:"default",breakpointScheme:"default",resourceScheme:"oneservice"},yn={colourScheme:"pa",fontScheme:"pa",motionScheme:"default",borderScheme:"default",spacingScheme:"default",radiusScheme:"default",breakpointScheme:"default",resourceScheme:"pa",componentScheme:"pa"},fn={colourScheme:"a11yplayground",fontScheme:"a11yplayground",motionScheme:"default",borderScheme:"default",spacingScheme:"default",radiusScheme:"default",breakpointScheme:"default",resourceScheme:"a11yplayground",componentScheme:"a11yplayground"},xn={colourScheme:"supportgowhere",fontScheme:"supportgowhere",motionScheme:"default",borderScheme:"default",spacingScheme:"default",radiusScheme:"default",breakpointScheme:"default",resourceScheme:"supportgowhere",componentScheme:"default"};Object.assign(Object.assign({},un),{light:rn(un,"light"),dark:rn(un,"dark")}),Object.assign(Object.assign({},gn),{light:rn(gn,"light"),dark:rn(gn,"dark")}),Object.assign(Object.assign({},mn),{light:rn(mn,"light"),dark:rn(mn,"dark")}),Object.assign(Object.assign({},bn),{light:rn(bn,"light"),dark:rn(bn,"dark")}),Object.assign(Object.assign({},hn),{light:rn(hn,"light"),dark:rn(hn,"dark")}),Object.assign(Object.assign({},pn),{light:rn(pn,"light"),dark:rn(pn,"dark")}),Object.assign(Object.assign({},yn),{light:rn(yn,"light"),dark:rn(yn,"dark")}),Object.assign(Object.assign({},fn),{light:rn(fn,"light"),dark:rn(fn,"dark")}),Object.assign(Object.assign({},xn),{light:rn(xn,"light"),dark:rn(xn,"dark")});const vn=r.button`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: ${on["spacing-24"]};
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

        ${({$highlight:e})=>e&&t`
                background-color: ${tn["bg-hover-neutral"]};
            `}
    }
`,Fn=l.forwardRef(((e,r)=>{var{children:t,focusHighlight:n=!0,focusOutline:i="none",type:s="button"}=e,o=w(e,["children","focusHighlight","focusOutline","type"]);return a(vn,Object.assign({ref:r,$outline:i,$highlight:n,type:s},o,{children:t}))})),wn={notCompress:6,compress:4},$n=r.div`
    position: ${e=>e.$fixed?"sticky":"relative"};
    background-color: ${tn.bg};
    z-index: 30;
    top: 0;
    left: 0;
    right: 0;
    width: 100%;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
`,En=r.nav`
    height: ${e=>e.$compress?wn.compress:wn.notCompress}rem;
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    position: relative;
    transition: ${an["duration-350"]} ${an["ease-standard"]};

    ${cn.MaxWidth.lg} {
        height: ${3.5}rem;
    }
`,Cn=r.div`
    display: flex;
    height: 100%;
    margin-left: ${e=>e.$hideNavBranding?"0":"5rem"};
    flex: 1;
    justify-content: flex-end;

    ${cn.MaxWidth.lg} {
        margin-left: 0rem;
    }
`,Dn=r(Fn)`
    display: none;

    ${cn.MaxWidth.lg} {
        display: flex;
        padding: 0 1.5rem;
        margin-right: -1.5rem;
    }
`,Bn=r(e)`
    height: 1.5rem;
    width: 1.5rem;
    color: ${tn.icon};
`,An=r.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    flex-shrink: 0;

    height: ${e=>e.$compress?1.5:2}rem;

    ${cn.MaxWidth.lg} {
        height: 1.5rem;
    }

    ${cn.MaxWidth.xxs} {
        height: 1.25rem;
    }
`,Sn=r.div`
    display: flex;
    background-color: ${tn.border};
    height: 100%;
    width: 2px;
    margin: 0 ${e=>e.$compress?1:1.5}rem;

    ${cn.MaxWidth.lg} {
        margin: 0 1rem;
    }

    ${cn.MaxWidth.sm} {
        margin: 0 0.75rem;
    }
`,kn=r.div`
    position: relative;

    ${e=>{const{$xxlStart:r,$xxlSpan:n,$xlStart:i,$xlSpan:a,$lgStart:s,$lgSpan:o,$mdStart:l,$mdSpan:d,$smStart:c,$smSpan:u,$xsStart:g,$xsSpan:m,$xxsStart:b,$xxsSpan:h}=e;return t`
            grid-column: ${r||"auto"} / span ${n||1};

            ${Wt.MaxWidth.xl} {
                grid-column: ${i||"auto"} / span ${a||1};
            }

            ${Wt.MaxWidth.lg} {
                grid-column: ${s||"auto"} / span ${o||1};
            }

            ${Wt.MaxWidth.md} {
                grid-column: ${l||"auto"} / span ${d||1};
            }

            ${Wt.MaxWidth.sm} {
                grid-column: ${c||"auto"} / span ${u||1};
            }

            ${Wt.MaxWidth.xs} {
                grid-column: ${g||"auto"} / span ${m||1};
            }

            ${Wt.MaxWidth.xxs} {
                grid-column: ${b||"auto"} / span ${h||1};
            }
        `}}
`,Mn=l.forwardRef(((e,r)=>{const t=n(),{xxlCols:i,xlCols:s,lgCols:o,mdCols:l,smCols:d,xsCols:c,xxsCols:u}=e,g=w(e,["xxlCols","xlCols","lgCols","mdCols","smCols","xsCols","xxsCols"]),m=(e,r,t)=>{if(!e)return{start:void 0,span:void 0};if("development"===process.env.NODE_ENV&&("number"==typeof e&&e>r?console.warn(`Warning: ${t}Cols exceeds maximum (${r}): ${e}`):Array.isArray(e)&&(e[0]>r+1||e[1]>r+1)&&console.warn(`Warning: ${t}Cols array exceeds maximum (${r}): [${e[0]}, ${e[1]}]`)),Array.isArray(e)){const[t,n]=e;if(-1===n)return{start:t,span:r-t+1};return{start:t,span:Math.min(n-t,r)}}return{start:void 0,span:Math.min(e,r)}};return a(kn,Object.assign({ref:r},(()=>{const e=Ot["xxl-column"]({theme:t}),r=Ot["xl-column"]({theme:t}),n=Ot["lg-column"]({theme:t}),a=Ot["md-column"]({theme:t}),g=Ot["sm-column"]({theme:t}),b=Ot["xs-column"]({theme:t}),h=Ot["xxs-column"]({theme:t}),p=m(i||s||o||l||d||c||u,e,"xxl"),y=m(s||o||l||d||c||u,r,"xl"),f=m(o||l||d||c||u,n,"lg"),x=m(l||d||c||u,a,"md"),v=m(d||c||u,g,"sm"),F=m(c||u,b,"xs"),w=m(u,h,"xxs");return{$xxlStart:p.start,$xxlSpan:p.span,$xlStart:y.start,$xlSpan:y.span,$lgStart:f.start,$lgSpan:f.span,$mdStart:x.start,$mdSpan:x.span,$smStart:v.start,$smSpan:v.span,$xsStart:F.start,$xsSpan:F.span,$xxsStart:w.start,$xxsSpan:w.span}})(),g))})),zn=r.div`
    flex-grow: 1;
    margin: 0 auto;
    position: relative;
    width: auto;
    height: auto;

    ${e=>e.$stretch?t`
                padding: 0 ${dn["xxl-margin"]}px;
            `:t`
                padding: 0 ${dn["xxl-margin"]}px;
                max-width: 1440px;

                ${cn.MaxWidth.xl} {
                    padding: 0 ${dn["xl-margin"]}px;
                }

                ${cn.MaxWidth.lg} {
                    padding: 0 ${dn["lg-margin"]}px;
                }

                ${cn.MaxWidth.md} {
                    padding: 0 ${dn["md-margin"]}px;
                }

                ${cn.MaxWidth.sm} {
                    padding: 0 ${dn["sm-margin"]}px;
                }

                ${cn.MaxWidth.xs} {
                    padding: 0 ${dn["xs-margin"]}px;
                }

                ${cn.MaxWidth.xxs} {
                    padding: 0 ${dn["xxs-margin"]}px;
                }
            `}

    ${e=>{switch(e.$type){case"grid":return t`
                    column-gap: ${dn["xxl-gutter"]}px;
                    display: grid;
                    grid-template-columns: repeat(
                        ${dn["xxl-column"]},
                        minmax(0, 1fr)
                    );

                    ${cn.MaxWidth.xl} {
                        column-gap: ${dn["xl-gutter"]}px;
                        grid-template-columns: repeat(
                            ${dn["xl-column"]},
                            minmax(0, 1fr)
                        );
                    }

                    ${cn.MaxWidth.lg} {
                        column-gap: ${dn["lg-gutter"]}px;
                        grid-template-columns: repeat(
                            ${dn["lg-column"]},
                            minmax(0, 1fr)
                        );
                    }

                    ${cn.MaxWidth.md} {
                        column-gap: ${dn["md-gutter"]}px;
                        grid-template-columns: repeat(
                            ${dn["md-column"]},
                            minmax(0, 1fr)
                        );
                    }

                    ${cn.MaxWidth.sm} {
                        column-gap: ${dn["sm-gutter"]}px;
                        grid-template-columns: repeat(
                            ${dn["sm-column"]},
                            minmax(0, 1fr)
                        );
                    }

                    ${cn.MaxWidth.xs} {
                        column-gap: ${dn["xs-gutter"]}px;
                        grid-template-columns: repeat(
                            ${dn["xs-column"]},
                            minmax(0, 1fr)
                        );
                    }

                    ${cn.MaxWidth.xxs} {
                        column-gap: ${dn["xxs-gutter"]}px;
                        grid-template-columns: repeat(
                            ${dn["xxs-column"]},
                            minmax(0, 1fr)
                        );
                    }
                `;case"flex-column":return t`
                    display: flex;
                    flex-direction: column;
                `;default:return t`
                    display: flex;
                `}}}
`,_n=l.forwardRef(((e,r)=>{const{children:t,"data-testid":n="container",type:i="flex",stretch:s=!1}=e,o=w(e,["children","data-testid","type","stretch"]);return a(zn,Object.assign({ref:r,"data-testid":n,$type:i,$stretch:s},o,{children:t}))})),On=l.forwardRef(((e,r)=>{const{children:t,"data-testid":n="section",stretch:i=!1}=e,s=w(e,["children","data-testid","stretch"]);return a(jn,Object.assign({ref:r,"data-testid":n,$stretch:i},s,{children:t}))})),jn=r.section`
    display: block;
    position: relative;
`,Wn=l.forwardRef(((e,r)=>{const{children:t,"data-testid":n="content",className:i,type:s="flex",stretch:o=!1}=e,l=w(e,["children","data-testid","className","type","stretch"]);return a(On,Object.assign({ref:r,"data-testid":n,className:i,stretch:o},l,{children:a(_n,{"data-testid":`${n}-container`,type:s,"data-id":"container",stretch:o,children:t})}))})),Yn={Section:On,Container:_n,Content:Wn,ColDiv:Mn},Ln=r.div`
    // matches Layout.Container
    ${e=>e.$stretch?t`
                --sgds-mainnav-padding-x: ${dn["xxl-margin"]}px;
                --sgds-mainnav-mobile-padding-x: ${dn["xxl-margin"]}px;
            `:t`
                --sgds-mainnav-max-width: 1440px;

                --sgds-mainnav-padding-x: ${dn["xxl-margin"]}px;
                --sgds-mainnav-mobile-padding-x: ${dn["xxl-margin"]}px;

                ${cn.MaxWidth.xl} {
                    --sgds-mainnav-padding-x: ${dn["xl-margin"]}px;
                    --sgds-mainnav-mobile-padding-x: ${dn["xl-margin"]}px;
                }

                ${cn.MaxWidth.lg} {
                    --sgds-mainnav-padding-x: ${dn["lg-margin"]}px;
                    --sgds-mainnav-mobile-padding-x: ${dn["lg-margin"]}px;
                }

                ${cn.MaxWidth.md} {
                    --sgds-mainnav-padding-x: ${dn["md-margin"]}px;
                    --sgds-mainnav-mobile-padding-x: ${dn["md-margin"]}px;
                }

                ${cn.MaxWidth.sm} {
                    --sgds-mainnav-padding-x: ${dn["sm-margin"]}px;
                    --sgds-mainnav-mobile-padding-x: ${dn["sm-margin"]}px;
                }

                ${cn.MaxWidth.xs} {
                    --sgds-mainnav-padding-x: ${dn["xs-margin"]}px;
                    --sgds-mainnav-mobile-padding-x: ${dn["xs-margin"]}px;
                }

                ${cn.MaxWidth.xxs} {
                    --sgds-mainnav-padding-x: ${dn["xxs-margin"]}px;
                    --sgds-mainnav-mobile-padding-x: ${dn["xxs-margin"]}px;
                }
            `}
`,Tn=({stretch:e=!1})=>{d((()=>{r()||t()}),[]);const r=()=>document.getElementById(In),t=()=>{if(!document.getElementById(In)){const e=document.createElement("script");e.id=In,e.type="module",e.src=Nn,document.head.appendChild(e)}};return a(Ln,{dangerouslySetInnerHTML:{__html:"<sgds-masthead></sgds-masthead>"},$stretch:e})},In="lifesg-ds-masthead-script",Nn="https://cdn.jsdelivr.net/npm/@govtechsg/sgds-web-component/Masthead/index.js";var Hn={exports:{}};Hn.exports=function(){var e=1e3,r=6e4,t=36e5,n="millisecond",i="second",a="minute",s="hour",o="day",l="week",d="month",c="quarter",u="year",g="date",m="Invalid Date",b=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,h=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,p={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(e){var r=["th","st","nd","rd"],t=e%100;return"["+e+(r[(t-20)%10]||r[t]||r[0])+"]"}},y=function(e,r,t){var n=String(e);return!n||n.length>=r?e:""+Array(r+1-n.length).join(t)+e},f={s:y,z:function(e){var r=-e.utcOffset(),t=Math.abs(r),n=Math.floor(t/60),i=t%60;return(r<=0?"+":"-")+y(n,2,"0")+":"+y(i,2,"0")},m:function e(r,t){if(r.date()<t.date())return-e(t,r);var n=12*(t.year()-r.year())+(t.month()-r.month()),i=r.clone().add(n,d),a=t-i<0,s=r.clone().add(n+(a?-1:1),d);return+(-(n+(t-i)/(a?i-s:s-i))||0)},a:function(e){return e<0?Math.ceil(e)||0:Math.floor(e)},p:function(e){return{M:d,y:u,w:l,d:o,D:g,h:s,m:a,s:i,ms:n,Q:c}[e]||String(e||"").toLowerCase().replace(/s$/,"")},u:function(e){return void 0===e}},x="en",v={};v[x]=p;var F="$isDayjsObject",w=function(e){return e instanceof D||!(!e||!e[F])},$=function e(r,t,n){var i;if(!r)return x;if("string"==typeof r){var a=r.toLowerCase();v[a]&&(i=a),t&&(v[a]=t,i=a);var s=r.split("-");if(!i&&s.length>1)return e(s[0])}else{var o=r.name;v[o]=r,i=o}return!n&&i&&(x=i),i||!n&&x},E=function(e,r){if(w(e))return e.clone();var t="object"==typeof r?r:{};return t.date=e,t.args=arguments,new D(t)},C=f;C.l=$,C.i=w,C.w=function(e,r){return E(e,{locale:r.$L,utc:r.$u,x:r.$x,$offset:r.$offset})};var D=function(){function p(e){this.$L=$(e.locale,null,!0),this.parse(e),this.$x=this.$x||e.x||{},this[F]=!0}var y=p.prototype;return y.parse=function(e){this.$d=function(e){var r=e.date,t=e.utc;if(null===r)return new Date(NaN);if(C.u(r))return new Date;if(r instanceof Date)return new Date(r);if("string"==typeof r&&!/Z$/i.test(r)){var n=r.match(b);if(n){var i=n[2]-1||0,a=(n[7]||"0").substring(0,3);return t?new Date(Date.UTC(n[1],i,n[3]||1,n[4]||0,n[5]||0,n[6]||0,a)):new Date(n[1],i,n[3]||1,n[4]||0,n[5]||0,n[6]||0,a)}}return new Date(r)}(e),this.init()},y.init=function(){var e=this.$d;this.$y=e.getFullYear(),this.$M=e.getMonth(),this.$D=e.getDate(),this.$W=e.getDay(),this.$H=e.getHours(),this.$m=e.getMinutes(),this.$s=e.getSeconds(),this.$ms=e.getMilliseconds()},y.$utils=function(){return C},y.isValid=function(){return!(this.$d.toString()===m)},y.isSame=function(e,r){var t=E(e);return this.startOf(r)<=t&&t<=this.endOf(r)},y.isAfter=function(e,r){return E(e)<this.startOf(r)},y.isBefore=function(e,r){return this.endOf(r)<E(e)},y.$g=function(e,r,t){return C.u(e)?this[r]:this.set(t,e)},y.unix=function(){return Math.floor(this.valueOf()/1e3)},y.valueOf=function(){return this.$d.getTime()},y.startOf=function(e,r){var t=this,n=!!C.u(r)||r,c=C.p(e),m=function(e,r){var i=C.w(t.$u?Date.UTC(t.$y,r,e):new Date(t.$y,r,e),t);return n?i:i.endOf(o)},b=function(e,r){return C.w(t.toDate()[e].apply(t.toDate("s"),(n?[0,0,0,0]:[23,59,59,999]).slice(r)),t)},h=this.$W,p=this.$M,y=this.$D,f="set"+(this.$u?"UTC":"");switch(c){case u:return n?m(1,0):m(31,11);case d:return n?m(1,p):m(0,p+1);case l:var x=this.$locale().weekStart||0,v=(h<x?h+7:h)-x;return m(n?y-v:y+(6-v),p);case o:case g:return b(f+"Hours",0);case s:return b(f+"Minutes",1);case a:return b(f+"Seconds",2);case i:return b(f+"Milliseconds",3);default:return this.clone()}},y.endOf=function(e){return this.startOf(e,!1)},y.$set=function(e,r){var t,l=C.p(e),c="set"+(this.$u?"UTC":""),m=(t={},t[o]=c+"Date",t[g]=c+"Date",t[d]=c+"Month",t[u]=c+"FullYear",t[s]=c+"Hours",t[a]=c+"Minutes",t[i]=c+"Seconds",t[n]=c+"Milliseconds",t)[l],b=l===o?this.$D+(r-this.$W):r;if(l===d||l===u){var h=this.clone().set(g,1);h.$d[m](b),h.init(),this.$d=h.set(g,Math.min(this.$D,h.daysInMonth())).$d}else m&&this.$d[m](b);return this.init(),this},y.set=function(e,r){return this.clone().$set(e,r)},y.get=function(e){return this[C.p(e)]()},y.add=function(n,c){var g,m=this;n=Number(n);var b=C.p(c),h=function(e){var r=E(m);return C.w(r.date(r.date()+Math.round(e*n)),m)};if(b===d)return this.set(d,this.$M+n);if(b===u)return this.set(u,this.$y+n);if(b===o)return h(1);if(b===l)return h(7);var p=(g={},g[a]=r,g[s]=t,g[i]=e,g)[b]||1,y=this.$d.getTime()+n*p;return C.w(y,this)},y.subtract=function(e,r){return this.add(-1*e,r)},y.format=function(e){var r=this,t=this.$locale();if(!this.isValid())return t.invalidDate||m;var n=e||"YYYY-MM-DDTHH:mm:ssZ",i=C.z(this),a=this.$H,s=this.$m,o=this.$M,l=t.weekdays,d=t.months,c=t.meridiem,u=function(e,t,i,a){return e&&(e[t]||e(r,n))||i[t].slice(0,a)},g=function(e){return C.s(a%12||12,e,"0")},b=c||function(e,r,t){var n=e<12?"AM":"PM";return t?n.toLowerCase():n};return n.replace(h,(function(e,n){return n||function(e){switch(e){case"YY":return String(r.$y).slice(-2);case"YYYY":return C.s(r.$y,4,"0");case"M":return o+1;case"MM":return C.s(o+1,2,"0");case"MMM":return u(t.monthsShort,o,d,3);case"MMMM":return u(d,o);case"D":return r.$D;case"DD":return C.s(r.$D,2,"0");case"d":return String(r.$W);case"dd":return u(t.weekdaysMin,r.$W,l,2);case"ddd":return u(t.weekdaysShort,r.$W,l,3);case"dddd":return l[r.$W];case"H":return String(a);case"HH":return C.s(a,2,"0");case"h":return g(1);case"hh":return g(2);case"a":return b(a,s,!0);case"A":return b(a,s,!1);case"m":return String(s);case"mm":return C.s(s,2,"0");case"s":return String(r.$s);case"ss":return C.s(r.$s,2,"0");case"SSS":return C.s(r.$ms,3,"0");case"Z":return i}return null}(e)||i.replace(":","")}))},y.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},y.diff=function(n,g,m){var b,h=this,p=C.p(g),y=E(n),f=(y.utcOffset()-this.utcOffset())*r,x=this-y,v=function(){return C.m(h,y)};switch(p){case u:b=v()/12;break;case d:b=v();break;case c:b=v()/3;break;case l:b=(x-f)/6048e5;break;case o:b=(x-f)/864e5;break;case s:b=x/t;break;case a:b=x/r;break;case i:b=x/e;break;default:b=x}return m?b:C.a(b)},y.daysInMonth=function(){return this.endOf(d).$D},y.$locale=function(){return v[this.$L]},y.locale=function(e,r){if(!e)return this.$L;var t=this.clone(),n=$(e,r,!0);return n&&(t.$L=n),t},y.clone=function(){return C.w(this.$d,this)},y.toDate=function(){return new Date(this.valueOf())},y.toJSON=function(){return this.isValid()?this.toISOString():null},y.toISOString=function(){return this.$d.toISOString()},y.toString=function(){return this.$d.toUTCString()},p}(),B=D.prototype;return E.prototype=B,[["$ms",n],["$s",i],["$m",a],["$H",s],["$W",o],["$M",d],["$y",u],["$D",g]].forEach((function(e){B[e[1]]=function(r){return this.$g(r,e[0],e[1])}})),E.extend=function(e,r){return e.$i||(e(r,D,E),e.$i=!0),E},E.locale=$,E.isDayjs=w,E.unix=function(e){return E(1e3*e)},E.en=v[x],E.Ls=v,E.p={},E}();var Rn=E(Hn.exports),Pn={exports:{}};Pn.exports=function(){var e={LTS:"h:mm:ss A",LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D, YYYY",LLL:"MMMM D, YYYY h:mm A",LLLL:"dddd, MMMM D, YYYY h:mm A"},r=/(\[[^[]*\])|([-_:/.,()\s]+)|(A|a|YYYY|YY?|MM?M?M?|Do|DD?|hh?|HH?|mm?|ss?|S{1,3}|z|ZZ?)/g,t=/\d\d/,n=/\d\d?/,i=/\d*[^-_:/,()\s\d]+/,a={},s=function(e){return(e=+e)+(e>68?1900:2e3)},o=function(e){return function(r){this[e]=+r}},l=[/[+-]\d\d:?(\d\d)?|Z/,function(e){(this.zone||(this.zone={})).offset=function(e){if(!e)return 0;if("Z"===e)return 0;var r=e.match(/([+-]|\d\d)/g),t=60*r[1]+(+r[2]||0);return 0===t?0:"+"===r[0]?-t:t}(e)}],d=function(e){var r=a[e];return r&&(r.indexOf?r:r.s.concat(r.f))},c=function(e,r){var t,n=a.meridiem;if(n){for(var i=1;i<=24;i+=1)if(e.indexOf(n(i,0,r))>-1){t=i>12;break}}else t=e===(r?"pm":"PM");return t},u={A:[i,function(e){this.afternoon=c(e,!1)}],a:[i,function(e){this.afternoon=c(e,!0)}],S:[/\d/,function(e){this.milliseconds=100*+e}],SS:[t,function(e){this.milliseconds=10*+e}],SSS:[/\d{3}/,function(e){this.milliseconds=+e}],s:[n,o("seconds")],ss:[n,o("seconds")],m:[n,o("minutes")],mm:[n,o("minutes")],H:[n,o("hours")],h:[n,o("hours")],HH:[n,o("hours")],hh:[n,o("hours")],D:[n,o("day")],DD:[t,o("day")],Do:[i,function(e){var r=a.ordinal,t=e.match(/\d+/);if(this.day=t[0],r)for(var n=1;n<=31;n+=1)r(n).replace(/\[|\]/g,"")===e&&(this.day=n)}],M:[n,o("month")],MM:[t,o("month")],MMM:[i,function(e){var r=d("months"),t=(d("monthsShort")||r.map((function(e){return e.slice(0,3)}))).indexOf(e)+1;if(t<1)throw new Error;this.month=t%12||t}],MMMM:[i,function(e){var r=d("months").indexOf(e)+1;if(r<1)throw new Error;this.month=r%12||r}],Y:[/[+-]?\d+/,o("year")],YY:[t,function(e){this.year=s(e)}],YYYY:[/\d{4}/,o("year")],Z:l,ZZ:l};function g(t){var n,i;n=t,i=a&&a.formats;for(var s=(t=n.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g,(function(r,t,n){var a=n&&n.toUpperCase();return t||i[n]||e[n]||i[a].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g,(function(e,r,t){return r||t.slice(1)}))}))).match(r),o=s.length,l=0;l<o;l+=1){var d=s[l],c=u[d],g=c&&c[0],m=c&&c[1];s[l]=m?{regex:g,parser:m}:d.replace(/^\[|\]$/g,"")}return function(e){for(var r={},t=0,n=0;t<o;t+=1){var i=s[t];if("string"==typeof i)n+=i.length;else{var a=i.regex,l=i.parser,d=e.slice(n),c=a.exec(d)[0];l.call(r,c),e=e.replace(c,"")}}return function(e){var r=e.afternoon;if(void 0!==r){var t=e.hours;r?t<12&&(e.hours+=12):12===t&&(e.hours=0),delete e.afternoon}}(r),r}}return function(e,r,t){t.p.customParseFormat=!0,e&&e.parseTwoDigitYear&&(s=e.parseTwoDigitYear);var n=r.prototype,i=n.parse;n.parse=function(e){var r=e.date,n=e.utc,s=e.args;this.$u=n;var o=s[1];if("string"==typeof o){var l=!0===s[2],d=!0===s[3],c=l||d,u=s[2];d&&(u=s[2]),a=this.$locale(),!l&&u&&(a=t.Ls[u]),this.$d=function(e,r,t){try{if(["x","X"].indexOf(r)>-1)return new Date(("X"===r?1e3:1)*e);var n=g(r)(e),i=n.year,a=n.month,s=n.day,o=n.hours,l=n.minutes,d=n.seconds,c=n.milliseconds,u=n.zone,m=new Date,b=s||(i||a?1:m.getDate()),h=i||m.getFullYear(),p=0;i&&!a||(p=a>0?a-1:m.getMonth());var y=o||0,f=l||0,x=d||0,v=c||0;return u?new Date(Date.UTC(h,p,b,y,f,x,v+60*u.offset*1e3)):t?new Date(Date.UTC(h,p,b,y,f,x,v)):new Date(h,p,b,y,f,x,v)}catch(e){return new Date("")}}(r,o,n),this.init(),u&&!0!==u&&(this.$L=this.locale(u).$L),c&&r!=this.format(o)&&(this.$d=new Date("")),a={}}else if(o instanceof Array)for(var m=o.length,b=1;b<=m;b+=1){s[1]=o[b-1];var h=t.apply(this,s);if(h.isValid()){this.$d=h.$d,this.$L=h.$L,this.init();break}b===m&&(this.$d=new Date(""))}else i.call(this,e)}}}();var Vn=E(Pn.exports),Un={exports:{}};Un.exports=function(e,r,t){r.prototype.isBetween=function(e,r,n,i){var a=t(e),s=t(r),o="("===(i=i||"()")[0],l=")"===i[1];return(o?this.isAfter(a,n):!this.isBefore(a,n))&&(l?this.isBefore(s,n):!this.isAfter(s,n))||(o?this.isBefore(a,n):!this.isAfter(a,n))&&(l?this.isAfter(s,n):!this.isBefore(s,n))}};var Xn=E(Un.exports),Jn={exports:{}};Jn.exports=function(e,r){r.prototype.isSameOrAfter=function(e,r){return this.isSame(e,r)||this.isAfter(e,r)}};var Qn=E(Jn.exports),Zn={exports:{}};Zn.exports=function(e,r){r.prototype.isSameOrBefore=function(e,r){return this.isSame(e,r)||this.isBefore(e,r)}};var Gn,Kn,qn,ei=E(Zn.exports),ri={exports:{}},ti=E(ri.exports=(Gn={year:0,month:1,day:2,hour:3,minute:4,second:5},Kn={},function(e,r,t){var n,i=function(e,r,t){void 0===t&&(t={});var n=new Date(e),i=function(e,r){void 0===r&&(r={});var t=r.timeZoneName||"short",n=e+"|"+t,i=Kn[n];return i||(i=new Intl.DateTimeFormat("en-US",{hour12:!1,timeZone:e,year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit",timeZoneName:t}),Kn[n]=i),i}(r,t);return i.formatToParts(n)},a=function(e,r){for(var n=i(e,r),a=[],s=0;s<n.length;s+=1){var o=n[s],l=o.type,d=o.value,c=Gn[l];c>=0&&(a[c]=parseInt(d,10))}var u=a[3],g=24===u?0:u,m=a[0]+"-"+a[1]+"-"+a[2]+" "+g+":"+a[4]+":"+a[5]+":000",b=+e;return(t.utc(m).valueOf()-(b-=b%1e3))/6e4},s=r.prototype;s.tz=function(e,r){void 0===e&&(e=n);var i=this.utcOffset(),a=this.toDate(),s=a.toLocaleString("en-US",{timeZone:e}),o=Math.round((a-new Date(s))/1e3/60),l=t(s,{locale:this.$L}).$set("millisecond",this.$ms).utcOffset(15*-Math.round(a.getTimezoneOffset()/15)-o,!0);if(r){var d=l.utcOffset();l=l.add(i-d,"minute")}return l.$x.$timezone=e,l},s.offsetName=function(e){var r=this.$x.$timezone||t.tz.guess(),n=i(this.valueOf(),r,{timeZoneName:e}).find((function(e){return"timezonename"===e.type.toLowerCase()}));return n&&n.value};var o=s.startOf;s.startOf=function(e,r){if(!this.$x||!this.$x.$timezone)return o.call(this,e,r);var n=t(this.format("YYYY-MM-DD HH:mm:ss:SSS"),{locale:this.$L});return o.call(n,e,r).tz(this.$x.$timezone,!0)},t.tz=function(e,r,i){var s=i&&r,o=i||r||n,l=a(+t(),o);if("string"!=typeof e)return t(e).tz(o);var d=function(e,r,t){var n=e-60*r*1e3,i=a(n,t);if(r===i)return[n,r];var s=a(n-=60*(i-r)*1e3,t);return i===s?[n,i]:[e-60*Math.min(i,s)*1e3,Math.max(i,s)]}(t.utc(e,s).valueOf(),l,o),c=d[0],u=d[1],g=t(c).utcOffset(u);return g.$x.$timezone=o,g},t.tz.guess=function(){return Intl.DateTimeFormat().resolvedOptions().timeZone},t.tz.setDefault=function(e){n=e}}));Rn.extend(Xn),Rn.extend(ei),Rn.extend(Qn),Rn.extend(Vn),Rn.extend(ti),function(e){e.generateDays=e=>{const r=e.startOf("month"),t=Rn(r).startOf("week");return ni(t).map((e=>ii(e)))},e.generateDaysForCurrentWeek=e=>{const r=e.startOf("week");return ii(r)},e.generateMonths=e=>{const r=[];for(let t=0;t<12;t++){const n=e.month(t);r.push(Rn(n))}return r},e.generateDecadeOfYears=e=>{const r=e.year(),t=10*Math.floor(r/10),n=e.year(t),i=[n.subtract(1,"year"),n];for(let e=1;e<11;e++)i.push(n.add(e,"year"));return i},e.getStartEndDecade=e=>{const r=10*Math.floor(+e.format("YYYY")/10);return{beginDecade:r,endDecade:+Rn(`${r+9}-01-01`).format("YYYY")}},e.convertTo12HourFormat=e=>{const r=Rn(e,"HH:mm");return r.isValid()?r.format("h:mm a"):""},e.isWithinRange=(e,r,t,n="day")=>!r&&!t||(r&&t?e.isBetween(r,t,n,"[]"):r?e.isSameOrAfter(r,n):e.isSameOrBefore(t,n)),e.isPreviousMonthWithinRange=(r,t)=>e.isWithinRange(r.subtract(1,"month"),t,void 0,"month"),e.isPreviousYearWithinRange=(r,t)=>e.isWithinRange(r.subtract(1,"year"),t,void 0,"year"),e.isPreviousDecadeWithinRange=(r,t)=>{const{beginDecade:n}=e.getStartEndDecade(r);return e.isWithinRange(r.year(n).subtract(1,"year"),t,void 0,"year")},e.isNextMonthWithinRange=(r,t)=>e.isWithinRange(r.add(1,"month"),void 0,t,"month"),e.isNextYearWithinRange=(r,t)=>e.isWithinRange(r.add(1,"year"),void 0,t,"year"),e.isNextDecadeWithinRange=(r,t)=>{const{endDecade:n}=e.getStartEndDecade(r);return e.isWithinRange(r.year(n).add(1,"year"),void 0,t,"year")},e.getWeekStartEnd=e=>({start:e.startOf("week").format("YYYY-MM-DD"),end:e.endOf("week").format("YYYY-MM-DD")}),e.getFixedRangeStartEnd=(e,r)=>({start:e.format("YYYY-MM-DD"),end:e.add(r-1,"day").format("YYYY-MM-DD")}),e.isDisabledDay=(r,t,n,i)=>{const a=e.isWithinRange(r,n?Rn(n):void 0,i?Rn(i):void 0),s=t&&t.includes(r.format("YYYY-MM-DD"));return!a||!!s}}(qn||(qn={}));const ni=e=>{const r=[e];for(let t=1;t<6;t++){const n=e.add(t,"week");r.push(n)}return r},ii=e=>{const r=[];for(let t=0;t<7;t++){const n=e.add(t,"day");r.push(n)}return r},ai=[1,3,5,7,8,10,12],si=[4,6,9,11];var oi,li,di,ci;!function(e){e.clampDay=(r,t,n)=>{const i=parseInt(r),a=parseInt(t),s=parseInt(n);return 0==i?"1":ai.includes(a)?Math.min(i,31).toString():si.includes(a)?Math.min(i,30).toString():2===a?e.isLeapYear(s)?Math.min(i,29).toString():Math.min(i,28).toString():r},e.clampMonth=e=>{const r=parseInt(e);return 0==r?"1":r>12?"12":e},e.isLeapYear=e=>e%4==0&&e%100!=0||e%400==0,e.getTimeDiffInMinutes=(e,r,t="HH:mm")=>{const n=Rn(e,t);return Rn(r,t).diff(n,"minute")},e.toDayjs=e=>e?Rn(e):Rn(),e.addMinutesToTime=(e,r,t="HH:mm")=>Rn(e,t).add(r,"minutes").format(t),e.isSame=(e,r,t="day")=>Rn(e).isSame(Rn(r),t)}(oi||(oi={})),function(e){e.isDateDisabled=(e,r)=>{const{disabledDates:t,minDate:n,maxDate:i}=r;return!!(e&&t&&t.length&&t.includes(e))||(!(!n||!Rn(e).isBefore(n,"day"))||!(!i||!Rn(e).isAfter(i,"day")))},e.sanitizeInput=e=>{if(e){if(Rn(e).isValid())return e}return""}}(li||(li={})),function(e){e.generate=()=>Math.random().toString(36).substring(2,9)}(di||(di={})),function(e){e.transformWithSpaces=(e,r)=>{const t="(.{"+r+"})";return e.replace(/[^\dA-Z]/gi,"").replace(new RegExp(t,"g"),"$1 ").trim()},e.padValue=(e,r)=>{if("0"===e)return r?e:e.padStart(2,"0");if(""===e)return e;return parseInt(e).toString().padStart(2,"0")},e.shouldTruncateToTwoLines=(e,r)=>{const t=Math.floor(r/9);return e.length>=2*t||1===e.split(" ").length&&e.length>t},e.truncateOneLine=(e,r,t,n,i=8)=>{let a=0;r>t&&(a=Math.floor((r-t)/i));const s=n+a;if(s<e.length){const r=Math.floor(s/2);return e.substring(0,r)+" ... "+e.substring(e.length-r,e.length)}return e},e.truncateTwoLines=(e,r,t,n=1.2)=>{const i=Math.floor(2*r/(.6*t))*(2/n);if(e.length<=i)return e;const a=Math.floor(.6*i),s=Math.floor(.2*i);return`${e.substring(0,a)}...${e.substring(e.length-s)}`},e.getTextWidth=(r,t)=>{if("undefined"==typeof document)return 0;const n=(e.getTextWidth.canvas||(e.getTextWidth.canvas=document.createElement("canvas"))).getContext("2d");n.font=t;return n.measureText(r).width},e.maskValue=(e,t)=>{if(!e)return e;const{maskRange:n,unmaskRange:i,maskChar:a="•",maskRegex:s,maskTransformer:o}=t;if(o)return o(e);if(s)return e.replace(s,a);if(n){const{startIndex:t,endIndex:i}=r(n[0],n[1]);return e.substring(0,t)+a.repeat(e.substring(t,i+1).length)+e.substring(i+1)}if(i){const{startIndex:t,endIndex:n}=r(i[0],i[1]);return a.repeat(e.substring(0,t).length)+e.substring(t,n+1)+a.repeat(e.substring(n+1).length)}return e};const r=(e,r)=>e<r?{startIndex:e,endIndex:r}:{startIndex:r,endIndex:e},t=new Intl.PluralRules("en",{type:"ordinal"}),n=new Map([["one","st"],["two","nd"],["few","rd"],["other","th"]]);e.formatOrdinal=e=>{const r=t.select(e);return`${e}${n.get(r)}`}}(ci||(ci={}));const ui=r.div`
    position: fixed;
    left: 0;
    top: 0;
    height: 0;
    width: 0;
    visibility: hidden;
    z-index: ${e=>e.$zIndex};

    ${e=>{if(e.$show)return t`
                height: 100%;
                width: 100vw;
                visibility: visible;
            `}}
`,gi=r.div`
    position: absolute;
    left: 0;
    top: 0;
    background-color: ${e=>e.$stacked?tn["overlay-subtle"]:tn["overlay-strong"]};
    backdrop-filter: ${e=>(e=>{let r="";return e&&(r+="blur(10px)"),r.length>0?r:"none"})(e.$backgroundBlur)};
    transition: opacity 200ms ease;

    ${e=>{let r="";return e.$show?r+=t`
                visibility: visible;
                opacity: 1;
                pointer-events: auto;
                height: 100%;
                width: 100vw;
            `:r+=t`
                visibility: hidden;
                opacity: 0;
                transition-delay: ${e.$disableTransition?"0ms":"400ms"};
                pointer-events: none;
                height: 0;
                width: 0;
            `,e.$disableTransition&&(r+=t`
                transition: none;
            `),r}}
`;var mi;!function(e){e.Ready="overlay-context-ready",e.Change="overlay-context-change"}(mi||(mi={}));const bi=({show:e=!1,rootId:r,onOverlayClick:t,children:n,backgroundOpacity:i,backgroundBlur:s=!0,disableTransition:o=!1,enableOverlayClick:g=!1,zIndex:m,id:h})=>{const[x,v]=c(null),[F,w]=c(),[$]=c((()=>di.generate())),E=p(),C=u(),D=u(null),B=n&&l.cloneElement(n,{ref:D}),A=h?`lifesg-ds-overlay-root-${h}`:"lifesg-ds-overlay-root",S=null!=m?m:F?99999:99998;(e=>{const r=b();d((()=>{if(!r)return;const t={zIndex:e};r.events.emit(mi.Change,t)}),[r,e]),d((()=>{if(!r)return;const t=()=>{const t={zIndex:e};r.events.emit(mi.Change,t)};return null==r||r.events.on(mi.Ready,t),()=>null==r?void 0:r.events.off(mi.Ready,t)}),[r,e])})(S),d((()=>(_(),v(M()),()=>{Y(),j().length<1&&O("remove")})),[]),d((()=>{if(e){const e=z();k(e),W();const r=setTimeout((()=>{O("add")}),200);return()=>clearTimeout(r)}{Y();const e=setTimeout((()=>{j().length<1&&O("remove")}),200);return()=>clearTimeout(e)}}),[e]);const k=e=>{C.current=e,w(e)},M=()=>document&&r?document.getElementById(r):document?document.body:null,z=()=>j().length>0,_=()=>{if(!document.getElementById(pi)){const e=document.createElement("style");e.id=pi;const r=document.documentElement.clientWidth,t=window.innerWidth-r;e.innerHTML=`\n\t\t\t\t.${yi} {\n\t\t\t\t\toverflow: hidden;\n\t\t\t\t\tpadding-right: ${t}px !important;\n\t\t\t\t\t-ms-overflow-style: none;\n\t\t\t\t\tscrollbar-width: none;\n\t\t\t\t}\n\n\t\t\t\t.${yi}::-webkit-scrollbar {\n\t\t\t\t\tdisplay: none;\n\t\t\t\t}\n\t\t\t`,document.body.appendChild(e)}},O=e=>{const r=document.body.classList.contains(yi);"add"!==e||r?"remove"===e&&r&&document.body.classList.remove(yi):document.body.classList.add(yi)},j=()=>{const e=document.body.dataset.lifesgDsOverlayOrder;return e?e.split(","):[]},W=()=>{const e=j();document.body.dataset.lifesgDsOverlayOrder=[...e,$].join(",")},Y=()=>{const e=j();document.body.dataset.lifesgDsOverlayOrder=e.filter((e=>e!==$)).join(",")},L=e=>{var r;const n=null===(r=D.current)||void 0===r?void 0:r.firstChild;n&&n.contains(e.target)||t&&g&&(e.preventDefault(),t())};return x?f.createPortal(a(ui,{id:A,"data-testid":A,$show:e,$zIndex:S,children:n&&a(y,{id:E,children:a(gi,{"data-testid":"overlay-wrapper",$show:e,$stacked:F,$backgroundBlur:s,$disableTransition:o,onClick:L,children:B})})}),x):null},hi=e=>a(h,{children:a(bi,Object.assign({},e))}),pi="lifesg-ds-overlay-stylesheet",yi="lifesg-ds-overlay-open",fi=r.a`
    display: flex;
    justify-content: center;
    height: 100%;

    img {
        width: auto;
        height: 100%;
        transition: ${an["duration-150"]} ${an["ease-default"]};
        object-fit: contain;
    }
`;const xi=({src:e,alt:r,className:t,"data-testid":n})=>a("img",{src:e,alt:r||"",className:t,"data-testid":n,onError:e=>{e.target.onerror=null,e.target.src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKAAAABQCAYAAACeXX40AAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAARTSURBVHgB7Z1tUuJAEIY7qMRYWnIE9wR6BD2Be5S9weoN1pusJ1iPwJ5guYH4GeNH2HkppgojYAIhbXrepwoJEMofPHZP9zQxkgJpmh5HUfTdHZ6624EQsiLOp7676+d5fp4kyeDda/5gNBr1siz76Q5/CCHr41ccx+dOyiEejAWcyHflDg+FkDWDiNjtdk8gYQdPTCIf5SON4ALe0cQ5idya78CZ+E8IaRgn4gki4JkQogCK3Y77wdRLtDiNnp6eRkKIEh0hRBEKSFShgEQVCkhUoYBEFQpIVKGARBUKSFShgEQVCkhUoYBEFQpIVNkUokqWZfLy8iJvb2/jx1tbWxLHsWxsbEgIcBpGCQh3e3srr6+vH16Lokh2dnbGN+swAioA+a6vrzERPPN1PP/w8CB5nsvu7q5YhmvAhoFciHzz5JsmTVNxGUosQwEbBmu+WWl3Ho+Pj6VkbSsUsGGqRjSka6Riq1DAhllGJkZAUhuocKtCAUltLNPfs9wTpIAL8M3hOtne3q50PhrTnY7dj4kCzgFrteFwKM/Pz1In3W53vNNRFvYBA+Xm5mYs4bzdilWAVJubn+8B7O3tlTqvzVDAGaAB7KVDAXB/f19rIYCU2uv1JEmSmUUJpMPrVdN1G+FecAGs+5B6i+0SpM79/X2pG/weyI57yIiCw3rUm4Z7wVMgyt3d3c3s1WEtiMiIqFUniIaQO1SYgqfALgVGo+aBVFx3URI6FHACoh4mUD4DRYnlrbGmoYATUPWWKTRwDtaIlncnmoQCyvuqtwwoVJCOyeoELyBkKpN6i2C9iFEpshrBC1h2OHQWEHeZogTvwVwgCVxARLBVdzmqFiUQD+/BbR17zW0jWAHx4deRQhE9yxYwfu3oz10l+lohWAHLSlMGRFE0sBfhhxumoyXeF3oxE6SAiHx1pz+k1nnj9pDODzcUwXusf/FoEcEJiKizruoVUbC4k+LlW7TW9F/BDJHgBFz3uqu4l4zHnxU6fuwrxPVgUAKi4bzuytNf8cAPNpRt0yByhthXDGYcC1EIVyNoCoxUVW3xYBwLQ6hVJqbbThAR0EejJlmmv+iHX0NaDwYhYB0N56bw68FQMC8gxMPar02EtB40LyBSbxurS7RmFg3HWsG0gG1KvbNo6x9PFcwKiOixzJjVV2K6pWMVkwL6atIC1ke3TArY9tRbpMxuSlsxJ2Abq94yWE3F5gS0+kFZ/R6KKQFRdFieMsbYlrXobkbAUJq31ka3zFyaAwKGsomPqrjuS4RowYsTEVX4xXSiCgUkqlBAogoFJKpQQKIKBSSqUECiCgUkqlBAogoFJKpAwIEQokO/k+f5pRCiQBRF/ShN02N38EcIaZjRaPStkyTJlYuCF0JIs1w49wbj/5TnTOxlWYYoeCSErJ+/cRwj8w7HVTAO3BMnjISkAS68fHjw4X+FujXhgbs7cyccCiMiqYeBu126TPsbS77pF/4DuxeyMpdnp3gAAAAASUVORK5CYII="}}),vi=({resources:e,onClick:r,"data-id":t,"data-testid":n="navbar-brand",type:i})=>a(fi,{role:"link",onClick:e=>{r&&r(e,i)},tabIndex:0,"data-id":t,"data-testid":n,$type:i,children:a(xi,{src:e.logoSrc,alt:e.brandName})}),Fi=r.div`
    display: none;

    ${cn.MaxWidth.lg} {
        display: flex;
    }
`,wi=r.div`
    position: absolute;
    overflow-y: auto;
    overflow-x: hidden;
    height: 100vh;
    display: block;
    padding: 0 0 ${on["spacing-16"]};
    background-color: ${tn.bg};
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);
    visibility: ${e=>e.$show?"visible":"hidden"};

    ${e=>e.$show?t`
            right: 0;
            transition: all 300ms ${an["ease-entrance"]};
            transition-delay: 200ms;
        `:t`
        right: -100%;
        transition: all 300ms ${an["ease-exit"]};
    `}
    ${e=>{const r=`${e.$viewHeight}px`||"1vh";return t`
            height: calc(${r} * 100);
        `}}

	${cn.MaxWidth.lg} {
        width: 75%;
    }

    ${cn.MaxWidth.sm} {
        width: 100%;
    }
`,$i=r.div`
    display: flex;
    flex-direction: column;
`,Ei=r.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;
    padding: ${on["spacing-40"]} ${on["spacing-20"]}
        ${on["spacing-32"]};
`,Ci=r(x)`
    height: 1.5rem;
    width: 1.5rem;
`,Di=r(Fn)`
    position: absolute;
    right: -${on["spacing-4"]};
    color: ${tn.icon};

    :active,
    :focus {
        color: ${tn["icon-hover"]};
    }

    svg {
        height: 1.5rem;
        width: 1.5rem;
    }
`,Bi=l.forwardRef(((e,r)=>{const{show:t,resources:n={},children:i,hideNavBranding:l,onClose:u,onBrandClick:g}=e,[m,b]=c(0),{primary:h,secondary:p}=n;d((()=>(y(),window.addEventListener("resize",y),()=>{window.removeEventListener("resize",y)})),[]);const y=()=>{if(window){const e=.01*window.innerHeight;b(e)}};return a(Fi,{ref:r,"data-testid":"drawer",children:a(wi,{$show:t,$viewHeight:m,children:s($i,{children:[s(Ei,{children:[a(An,{"data-id":"drawer-brand-container",children:!l&&s(o,{children:[h&&a(vi,{resources:h,compress:!0,onClick:g,"data-id":"drawer-brand-primary","data-testid":"drawer__brand",type:"primary"}),p&&s(o,{children:[a(Sn,{}),a(vi,{resources:p,compress:!0,onClick:g,"data-id":"drawer-brand-secondary","data-testid":"drawer__brand-secondary",type:"secondary"})]})]})}),a(Di,{onClick:u,focusHighlight:!1,"aria-label":"Close nav menu",children:a(Ci,{})})]}),i]})})})}));var Ai=function(e,r,t,n){for(var i=e.length,a=t+(n?1:-1);n?a--:++a<i;)if(r(e[a],a,e))return a;return-1},Si=ar;var ki=function(e){var r=this.__data__,t=r.delete(e);return this.size=r.size,t};var Mi=function(e){return this.__data__.get(e)};var zi=function(e){return this.__data__.has(e)},_i=ar,Oi=sr,ji=Dr;var Wi=function(e,r){var t=this.__data__;if(t instanceof _i){var n=t.__data__;if(!Oi||n.length<199)return n.push([e,r]),this.size=++t.size,this;t=this.__data__=new ji(n)}return t.set(e,r),this.size=t.size,this},Yi=ar,Li=function(){this.__data__=new Si,this.size=0},Ti=ki,Ii=Mi,Ni=zi,Hi=Wi;function Ri(e){var r=this.__data__=new Yi(e);this.size=r.size}Ri.prototype.clear=Li,Ri.prototype.delete=Ti,Ri.prototype.get=Ii,Ri.prototype.has=Ni,Ri.prototype.set=Hi;var Pi=Ri;var Vi=Dr,Ui=function(e){return this.__data__.set(e,"__lodash_hash_undefined__"),this},Xi=function(e){return this.__data__.has(e)};function Ji(e){var r=-1,t=null==e?0:e.length;for(this.__data__=new Vi;++r<t;)this.add(e[r])}Ji.prototype.add=Ji.prototype.push=Ui,Ji.prototype.has=Xi;var Qi=function(e,r){return e.has(r)},Zi=Ji,Gi=function(e,r){for(var t=-1,n=null==e?0:e.length;++t<n;)if(r(e[t],t,e))return!0;return!1},Ki=Qi;var qi=function(e,r,t,n,i,a){var s=1&t,o=e.length,l=r.length;if(o!=l&&!(s&&l>o))return!1;var d=a.get(e),c=a.get(r);if(d&&c)return d==r&&c==e;var u=-1,g=!0,m=2&t?new Zi:void 0;for(a.set(e,r),a.set(r,e);++u<o;){var b=e[u],h=r[u];if(n)var p=s?n(h,b,u,r,e,a):n(b,h,u,e,r,a);if(void 0!==p){if(p)continue;g=!1;break}if(m){if(!Gi(r,(function(e,r){if(!Ki(m,r)&&(b===e||i(b,e,t,n,a)))return m.push(r)}))){g=!1;break}}else if(b!==h&&!i(b,h,t,n,a)){g=!1;break}}return a.delete(e),a.delete(r),g};var ea=function(e){var r=-1,t=Array(e.size);return e.forEach((function(e,n){t[++r]=[n,e]})),t};var ra=S.Uint8Array,ta=Ne,na=qi,ia=ea,aa=function(e){var r=-1,t=Array(e.size);return e.forEach((function(e){t[++r]=e})),t},sa=k?k.prototype:void 0,oa=sa?sa.valueOf:void 0;var la=function(e,r,t,n,i,a,s){switch(t){case"[object DataView]":if(e.byteLength!=r.byteLength||e.byteOffset!=r.byteOffset)return!1;e=e.buffer,r=r.buffer;case"[object ArrayBuffer]":return!(e.byteLength!=r.byteLength||!a(new ra(e),new ra(r)));case"[object Boolean]":case"[object Date]":case"[object Number]":return ta(+e,+r);case"[object Error]":return e.name==r.name&&e.message==r.message;case"[object RegExp]":case"[object String]":return e==r+"";case"[object Map]":var o=ia;case"[object Set]":var l=1&n;if(o||(o=aa),e.size!=r.size&&!l)return!1;var d=s.get(e);if(d)return d==r;n|=2,s.set(e,r);var c=na(o(e),o(r),n,i,a,s);return s.delete(e),c;case"[object Symbol]":if(oa)return oa.call(e)==oa.call(r)}return!1};var da=function(e,r){for(var t=-1,n=r.length,i=e.length;++t<n;)e[i+t]=r[t];return e},ca=C;var ua=function(e,r,t){var n=r(e);return ca(e)?n:da(n,t(e))};var ga=function(e,r){for(var t=-1,n=null==e?0:e.length,i=0,a=[];++t<n;){var s=e[t];r(s,t,e)&&(a[i++]=s)}return a},ma=function(){return[]},ba=Object.prototype.propertyIsEnumerable,ha=Object.getOwnPropertySymbols,pa=ha?function(e){return null==e?[]:(e=Object(e),ga(ha(e),(function(r){return ba.call(e,r)})))}:ma;var ya=function(e,r){for(var t=-1,n=Array(e);++t<e;)n[t]=r(t);return n},fa=N,xa=H;var va=function(e){return xa(e)&&"[object Arguments]"==fa(e)},Fa=H,wa=Object.prototype,$a=wa.hasOwnProperty,Ea=wa.propertyIsEnumerable,Ca=va(function(){return arguments}())?va:function(e){return Fa(e)&&$a.call(e,"callee")&&!Ea.call(e,"callee")},Da={exports:{}};var Ba=function(){return!1};!function(e,r){var t=S,n=Ba,i=r&&!r.nodeType&&r,a=i&&e&&!e.nodeType&&e,s=a&&a.exports===i?t.Buffer:void 0,o=(s?s.isBuffer:void 0)||n;e.exports=o}(Da,Da.exports);var Aa=Da.exports,Sa=/^(?:0|[1-9]\d*)$/;var ka=function(e,r){var t=typeof e;return!!(r=null==r?9007199254740991:r)&&("number"==t||"symbol"!=t&&Sa.test(e))&&e>-1&&e%1==0&&e<r};var Ma=function(e){return"number"==typeof e&&e>-1&&e%1==0&&e<=9007199254740991},za=N,_a=Ma,Oa=H,ja={};ja["[object Float32Array]"]=ja["[object Float64Array]"]=ja["[object Int8Array]"]=ja["[object Int16Array]"]=ja["[object Int32Array]"]=ja["[object Uint8Array]"]=ja["[object Uint8ClampedArray]"]=ja["[object Uint16Array]"]=ja["[object Uint32Array]"]=!0,ja["[object Arguments]"]=ja["[object Array]"]=ja["[object ArrayBuffer]"]=ja["[object Boolean]"]=ja["[object DataView]"]=ja["[object Date]"]=ja["[object Error]"]=ja["[object Function]"]=ja["[object Map]"]=ja["[object Number]"]=ja["[object Object]"]=ja["[object RegExp]"]=ja["[object Set]"]=ja["[object String]"]=ja["[object WeakMap]"]=!1;var Wa=function(e){return Oa(e)&&_a(e.length)&&!!ja[za(e)]};var Ya=function(e){return function(r){return e(r)}},La={exports:{}};!function(e,r){var t=D,n=r&&!r.nodeType&&r,i=n&&e&&!e.nodeType&&e,a=i&&i.exports===n&&t.process,s=function(){try{var e=i&&i.require&&i.require("util").types;return e||a&&a.binding&&a.binding("util")}catch(e){}}();e.exports=s}(La,La.exports);var Ta=La.exports,Ia=Wa,Na=Ya,Ha=Ta&&Ta.isTypedArray,Ra=Ha?Na(Ha):Ia,Pa=ya,Va=Ca,Ua=C,Xa=Aa,Ja=ka,Qa=Ra,Za=Object.prototype.hasOwnProperty;var Ga=function(e,r){var t=Ua(e),n=!t&&Va(e),i=!t&&!n&&Xa(e),a=!t&&!n&&!i&&Qa(e),s=t||n||i||a,o=s?Pa(e.length,String):[],l=o.length;for(var d in e)!r&&!Za.call(e,d)||s&&("length"==d||i&&("offset"==d||"parent"==d)||a&&("buffer"==d||"byteLength"==d||"byteOffset"==d)||Ja(d,l))||o.push(d);return o},Ka=Object.prototype;var qa=function(e){var r=e&&e.constructor;return e===("function"==typeof r&&r.prototype||Ka)};var es=function(e,r){return function(t){return e(r(t))}}(Object.keys,Object),rs=qa,ts=es,ns=Object.prototype.hasOwnProperty;var is=function(e){if(!rs(e))return ts(e);var r=[];for(var t in Object(e))ns.call(e,t)&&"constructor"!=t&&r.push(t);return r},as=re,ss=Ma;var os=Ga,ls=is,ds=function(e){return null!=e&&ss(e.length)&&!as(e)};var cs=function(e){return ds(e)?os(e):ls(e)},us=ua,gs=pa,ms=cs;var bs=function(e){return us(e,ms,gs)},hs=Object.prototype.hasOwnProperty;var ps=function(e,r,t,n,i,a){var s=1&t,o=bs(e),l=o.length;if(l!=bs(r).length&&!s)return!1;for(var d=l;d--;){var c=o[d];if(!(s?c in r:hs.call(r,c)))return!1}var u=a.get(e),g=a.get(r);if(u&&g)return u==r&&g==e;var m=!0;a.set(e,r),a.set(r,e);for(var b=s;++d<l;){var h=e[c=o[d]],p=r[c];if(n)var y=s?n(p,h,c,r,e,a):n(h,p,c,e,r,a);if(!(void 0===y?h===p||i(h,p,t,n,a):y)){m=!1;break}b||(b="constructor"==c)}if(m&&!b){var f=e.constructor,x=r.constructor;f==x||!("constructor"in e)||!("constructor"in r)||"function"==typeof f&&f instanceof f&&"function"==typeof x&&x instanceof x||(m=!1)}return a.delete(e),a.delete(r),m},ys=ve(S,"DataView"),fs=sr,xs=ve(S,"Promise"),vs=ve(S,"Set"),Fs=ve(S,"WeakMap"),ws=N,$s=se,Es="[object Map]",Cs="[object Promise]",Ds="[object Set]",Bs="[object WeakMap]",As="[object DataView]",Ss=$s(ys),ks=$s(fs),Ms=$s(xs),zs=$s(vs),_s=$s(Fs),Os=ws;(ys&&Os(new ys(new ArrayBuffer(1)))!=As||fs&&Os(new fs)!=Es||xs&&Os(xs.resolve())!=Cs||vs&&Os(new vs)!=Ds||Fs&&Os(new Fs)!=Bs)&&(Os=function(e){var r=ws(e),t="[object Object]"==r?e.constructor:void 0,n=t?$s(t):"";if(n)switch(n){case Ss:return As;case ks:return Es;case Ms:return Cs;case zs:return Ds;case _s:return Bs}return r});var js=Pi,Ws=qi,Ys=la,Ls=ps,Ts=Os,Is=C,Ns=Aa,Hs=Ra,Rs="[object Arguments]",Ps="[object Array]",Vs="[object Object]",Us=Object.prototype.hasOwnProperty;var Xs=function(e,r,t,n,i,a){var s=Is(e),o=Is(r),l=s?Ps:Ts(e),d=o?Ps:Ts(r),c=(l=l==Rs?Vs:l)==Vs,u=(d=d==Rs?Vs:d)==Vs,g=l==d;if(g&&Ns(e)){if(!Ns(r))return!1;s=!0,c=!1}if(g&&!c)return a||(a=new js),s||Hs(e)?Ws(e,r,t,n,i,a):Ys(e,r,l,t,n,i,a);if(!(1&t)){var m=c&&Us.call(e,"__wrapped__"),b=u&&Us.call(r,"__wrapped__");if(m||b){var h=m?e.value():e,p=b?r.value():r;return a||(a=new js),i(h,p,t,n,a)}}return!!g&&(a||(a=new js),Ls(e,r,t,n,i,a))},Js=H;var Qs=function e(r,t,n,i,a){return r===t||(null==r||null==t||!Js(r)&&!Js(t)?r!=r&&t!=t:Xs(r,t,n,i,e,a))},Zs=Pi,Gs=Qs;var Ks=function(e,r,t,n){var i=t.length,a=i,s=!n;if(null==e)return!a;for(e=Object(e);i--;){var o=t[i];if(s&&o[2]?o[1]!==e[o[0]]:!(o[0]in e))return!1}for(;++i<a;){var l=(o=t[i])[0],d=e[l],c=o[1];if(s&&o[2]){if(void 0===d&&!(l in e))return!1}else{var u=new Zs;if(n)var g=n(d,c,l,e,r,u);if(!(void 0===g?Gs(c,d,3,n,u):g))return!1}}return!0},qs=G;var eo=function(e){return e==e&&!qs(e)},ro=eo,to=cs;var no=function(e){for(var r=to(e),t=r.length;t--;){var n=r[t],i=e[n];r[t]=[n,i,ro(i)]}return r};var io=function(e,r){return function(t){return null!=t&&(t[e]===r&&(void 0!==r||e in Object(t)))}},ao=Ks,so=no,oo=io;var lo=function(e,r){return null!=e&&r in Object(e)},co=Vr,uo=Ca,go=C,mo=ka,bo=Ma,ho=Xr;var po=function(e,r,t){for(var n=-1,i=(r=co(r,e)).length,a=!1;++n<i;){var s=ho(r[n]);if(!(a=null!=e&&t(e,s)))break;e=e[s]}return a||++n!=i?a:!!(i=null==e?0:e.length)&&bo(i)&&mo(s,i)&&(go(e)||uo(e))},yo=lo,fo=po;var xo=Qs,vo=Kr,Fo=function(e,r){return null!=e&&fo(e,r,yo)},wo=Z,$o=eo,Eo=io,Co=Xr;var Do=function(e){return function(r){return null==r?void 0:r[e]}},Bo=Zr;var Ao=Do,So=function(e){return function(r){return Bo(r,e)}},ko=Z,Mo=Xr;var zo=function(e){var r=so(e);return 1==r.length&&r[0][2]?oo(r[0][0],r[0][1]):function(t){return t===e||ao(t,e,r)}},_o=function(e,r){return wo(e)&&$o(r)?Eo(Co(e),r):function(t){var n=vo(t,e);return void 0===n&&n===r?Fo(t,e):xo(r,n,3)}},Oo=function(e){return e},jo=C,Wo=function(e){return ko(e)?Ao(Mo(e)):So(e)};var Yo=/\s/;var Lo=function(e){for(var r=e.length;r--&&Yo.test(e.charAt(r)););return r},To=/^\s+/;var Io=function(e){return e?e.slice(0,Lo(e)+1).replace(To,""):e},No=G,Ho=V,Ro=/^[-+]0x[0-9a-f]+$/i,Po=/^0b[01]+$/i,Vo=/^0o[0-7]+$/i,Uo=parseInt;var Xo=function(e){if("number"==typeof e)return e;if(Ho(e))return NaN;if(No(e)){var r="function"==typeof e.valueOf?e.valueOf():e;e=No(r)?r+"":r}if("string"!=typeof e)return 0===e?e:+e;e=Io(e);var t=Po.test(e);return t||Vo.test(e)?Uo(e.slice(2),t?2:8):Ro.test(e)?NaN:+e},Jo=1/0;var Qo=function(e){return e?(e=Xo(e))===Jo||e===-1/0?17976931348623157e292*(e<0?-1:1):e==e?e:0:0===e?e:0};var Zo=Ai,Go=function(e){return"function"==typeof e?e:null==e?Oo:"object"==typeof e?jo(e)?_o(e[0],e[1]):zo(e):Wo(e)},Ko=function(e){var r=Qo(e),t=r%1;return r==r?t?r-t:r:0},qo=Math.max;var el=E((function(e,r,t){var n=null==e?0:e.length;if(!n)return-1;var i=null==t?0:Ko(t);return i<0&&(i=qo(n+i,0)),Zo(e,Go(r),i)}));const rl=r.div`
    display: inline-block;
    position: relative;
    width: ${({$size:e})=>e?`${e}px`:"1em"};
    height: ${({$size:e})=>e?`${e}px`:"1em"};
    color: ${e=>e.$color||"currentColor"};
`,tl=i`
	0% {
	  transform: rotate(0deg);
	}
	100% {
	  transform: rotate(360deg);
	}
`,nl=r.div`
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
    animation: ${tl} 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
`,il=r(nl)`
    animation-delay: -0.45s;
`,al=r(nl)`
    animation-delay: -0.3s;
`,sl=r(nl)`
    animation-delay: -0.15s;
`,ol={Button:{"button-radius":Gt.md,"button-default-colour-bg":Bt["bg-primary"],"button-default-colour-bg-hover":Bt["bg-primary-hover"],"button-default-colour-text":Bt["text-inverse"],"button-secondary-colour-border":Bt["border-primary"],"button-secondary-colour-text":Bt["text-primary"],"button-light-colour-text":Bt["text-primary"],"button-link-colour-text":Bt["text-primary"]}},ll={collections:{default:{Button:{"button-radius":Gt.sm,"button-default-colour-bg":Bt["bg-primary"],"button-default-colour-bg-hover":Bt["bg-primary-hover"],"button-default-colour-text":Bt["text-inverse"],"button-secondary-colour-border":Bt["border-primary"],"button-secondary-colour-text":Bt["text-primary"],"button-light-colour-text":Bt["text-primary"],"button-link-colour-text":Bt["text-primary"]}},pa:{Button:{"button-radius":Gt.full,"button-default-colour-bg":Bt["bg-primary"],"button-default-colour-bg-hover":Bt["bg-primary-hover"],"button-default-colour-text":Bt["text-inverse"],"button-secondary-colour-border":Bt["border-primary"],"button-secondary-colour-text":Bt["text-primary"],"button-light-colour-text":Bt["text-primary"],"button-link-colour-text":Bt["text-primary"]}},a11yplayground:ol},defaultValue:"default"},dl=(e,r)=>t=>{var n,i;const a=t.theme,s=rt(ll,null==a?void 0:a.componentScheme);return cl((null===(i=null===(n=null==a?void 0:a.componentOverrides)||void 0===n?void 0:n[e])||void 0===i?void 0:i[r])||s[e][r],t)},cl=(e,r)=>{switch(typeof e){case"function":return e(r);case"number":return e+"px";case"string":return e}},ul=dl("Button","button-radius"),gl=dl("Button","button-default-colour-bg"),ml=dl("Button","button-default-colour-bg-hover"),bl=dl("Button","button-default-colour-text"),hl=dl("Button","button-secondary-colour-border"),pl=dl("Button","button-secondary-colour-text"),yl=dl("Button","button-light-colour-text"),fl=dl("Button","button-link-colour-text"),xl=r.button`
    padding: ${on["spacing-8"]} ${on["spacing-16"]};
    min-width: 4rem;
    border: ${sn["width-010"]} ${sn.solid} transparent;
    transition: all ${an["duration-250"]} ${an["ease-default"]};
    border-radius: ${ul};
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;

    // -----------------------------------------------------------------------------
    // BUTTON STYLE + TEXT COLOR
    // -----------------------------------------------------------------------------
    ${e=>{switch(e.$buttonStyle){case"secondary":return t`
                    background-color: ${tn.bg};
                    border-color: ${e.$buttonIsDanger?tn["border-error-strong"]:hl};

                    color: ${e.$buttonIsDanger?tn["text-error"]:pl};

                    &:hover,
                    &:active {
                        background-color: ${tn["bg-hover-neutral"]};
                    }
                `;case"light":return t`
                    background-color: ${tn.bg};
                    border-color: ${tn.border};

                    color: ${e.$buttonIsDanger?tn["text-error"]:yl};

                    &:hover,
                    &:active {
                        background-color: ${tn["bg-hover-neutral"]};
                    }
                `;case"link":return t`
                    background-color: transparent;

                    color: ${e.$buttonIsDanger?tn["text-error"]:fl};
                    &:hover,
                    &:active {
                        background-color: ${tn["bg-hover-neutral"]};
                    }
                `;case"disabled":return t`
                    background-color: ${tn["bg-disabled"]};

                    cursor: not-allowed;

                    &:hover {
                        box-shadow: none;
                    }

                    color: ${tn["text-disabled"]};
                `;default:return t`
                    background-color: ${e.$buttonIsDanger?tn["bg-error-strong"]:gl};};

                    ${cn.MaxWidth.sm} {
                        width: 100%;
                    }

                    color: ${bl}};

                    &:hover,
                    &:active {
                        background-color: ${e.$buttonIsDanger?tn["bg-error-strong-hover"]:ml}
                        };
                    }
                `}}}

    // -----------------------------------------------------------------------------
	// BUTTON SIZE + TEXT SIZE
	// -----------------------------------------------------------------------------
	${e=>{switch(e.$buttonSizeStyle){case"small":return t`
                    height: 2.5rem;
                    ${nn["body-md-semibold"]}

                    ${cn.MaxWidth.xxs} {
                        height: auto;
                    }
                `;case"large":return t`
                    height: 4rem;
                    ${nn["heading-md-semibold"]}

                    ${cn.MaxWidth.xxs} {
                        height: auto;
                    }
                `;default:return t`
                    height: 3rem;
                    ${nn["heading-xs-semibold"]}

                    ${cn.MaxWidth.xxs} {
                        height: auto;
                    }
                `}}}
`,vl=r((({color:e,className:r,size:t})=>s(rl,{className:r,$size:t,$color:e,"data-testid":"component-loading-spinner",children:[a(nl,{id:"inner1"}),a(il,{id:"inner2"}),a(al,{id:"inner3"}),a(sl,{id:"inner4"})]})))`
    margin-right: 0.5rem;
`,Fl=(e,r)=>{const{children:t,disabled:n=!1,loading:i=!1,styleType:o="default",danger:l=!1}=e,d=w(e,["children","disabled","loading","styleType","danger"]),c={$buttonStyle:n?"disabled":o,$buttonSizeStyle:"default",$buttonIsDanger:l};return s(xl,Object.assign({ref:r,"data-testid":d["data-testid"]||"button",disabled:n},c,d,{children:[i&&a(vl,{}),a("span",{children:t})]}))};Fl.displayName="Button.Default";const wl=(e,r)=>{const{children:t,disabled:n=!1,loading:i=!1,styleType:o="default",danger:l=!1}=e,d=w(e,["children","disabled","loading","styleType","danger"]),c={$buttonStyle:n?"disabled":o,$buttonSizeStyle:"small",$buttonIsDanger:l};return s(xl,Object.assign({ref:r,"data-testid":d["data-testid"]||"button",disabled:n},c,d,{children:[i&&a(vl,{}),a("span",{children:t})]}))};wl.displayName="Button.Small";const $l=(e,r)=>{const{children:t,disabled:n=!1,loading:i=!1,styleType:o="default",danger:l=!1}=e,d=w(e,["children","disabled","loading","styleType","danger"]),c={$buttonStyle:n?"disabled":o,$buttonSizeStyle:"large",$buttonIsDanger:l};return s(xl,Object.assign({ref:r,"data-testid":d["data-testid"]||"button",disabled:n},c,d,{children:[i&&a(vl,{}),a("span",{children:t})]}))};$l.displayName="Button.Large";const El={Default:l.forwardRef(Fl),Small:l.forwardRef(wl),Large:l.forwardRef($l)},Cl=e=>t`
    display: -webkit-box;
    -webkit-line-clamp: ${e};
    -webkit-box-orient: vertical;
    overflow: hidden;
`,Dl=(e,r,n=!1)=>t`
        ${nn[`${e}-${r}`]}
        ${n?"margin-bottom: 1.05em;":"margin-bottom: 0;"}
    `,Bl=e=>{if(e)return t`
            ${Cl(e)}
        `},Al=(e,r)=>t`
    ${Dl(e,r.weight||"regular",r.paragraph)}
    ${((e=!1,r=!1,n)=>r?t`
            display: block;
            ${Bl(n)}
        `:e?t`
            display: inline;
        `:t`
            display: block;
            ${Bl(n)}
        `)(r.inline,r.paragraph,r.maxLines)}
    color: ${tn.text};
`;var Sl;!function(e){const n=(e,t,n)=>{const i=r(e).attrs((({inline:e})=>({as:e?"span":void 0})))`
            ${e=>Al(t,e)}
        `;return i.displayName=`Typography.${n}`,i};e.HeadingXXL=n("h1","heading-xxl","HeadingXXL"),e.HeadingXL=n("h2","heading-xl","HeadingXL"),e.HeadingLG=n("h3","heading-lg","HeadingLG"),e.HeadingMD=n("h4","heading-md","HeadingMD"),e.HeadingSM=n("h5","heading-sm","HeadingSM"),e.HeadingXS=n("h6","heading-xs","HeadingXS");const i=(e,t)=>{const n=r.p.attrs((({inline:e})=>({as:e?"span":void 0})))`
            ${r=>Al(e,r)}
        `;return n.displayName=`Typography.${t}`,n};e.BodyBL=i("body-baseline","BodyBL"),e.BodyMD=i("body-md","BodyMD"),e.BodySM=i("body-sm","BodySM"),e.BodyXS=i("body-xs","BodyXS");const o=(e,n)=>{const i=r.a`
            ${r=>t`
                ${Dl(e,r.weight||"regular")}
                color: ${tn.hyperlink};
                text-decoration: none;

                :hover,
                :active,
                :focus {
                    color: ${tn["text-hover"]};
                }
            `}
        `,o=e=>{var{external:r=!1,children:t}=e,n=w(e,["external","children"]);return s(i,Object.assign({},n,{children:[t,r&&a(kl,{})]}))};return o.displayName=`Typography.${n}`,o};e.LinkBL=o("body-baseline","LinkBL"),e.LinkMD=o("body-md","LinkMD"),e.LinkSM=o("body-sm","LinkSM"),e.LinkXS=o("body-xs","LinkXS")}(Sl||(Sl={}));const kl=r(v)`
    height: 1lh;
    width: 1em;
    margin-left: 0.4em;
    vertical-align: middle;
`,Ml=r.ul`
    display: flex;
    list-style: none;
    margin-left: ${on["spacing-64"]};
    flex-shrink: 0;

    ${cn.MaxWidth.lg} {
        display: none;
    }
`,zl=r.ul`
    display: none;

    ${cn.MaxWidth.lg} {
        display: flex;
        list-style: none;
        margin-left: ${on["spacing-64"]};
        flex-shrink: 0;
    }
`,_l=r.ul`
    display: none;
    list-style: none;

    ${cn.MaxWidth.lg} {
        display: flex;
        flex-direction: column;
        margin-top: ${on["spacing-40"]};
        width: max-content;
        min-width: 22rem;
        max-width: 24rem;
    }

    ${cn.MaxWidth.sm} {
        width: 100%;
        max-width: unset;
        min-width: unset;
    }
`,Ol=r.li`
    position: relative;
    display: flex;
    align-items: center;

    :not(:last-of-type) {
        margin-right: ${on["spacing-16"]};
    }

    ${cn.MaxWidth.lg} {
        width: 100%;
        padding: 0 0 0 ${on["spacing-16"]};
        justify-content: center;

        :not(:last-of-type) {
            margin-right: 0;
            margin-bottom: ${e=>e.$mobile?on["spacing-16"]:"0"};
        }
    }

    ${cn.MaxWidth.sm} {
        ${e=>{if(e.$mobile)return t`
                    padding: 0 ${on["spacing-16"]};
                `}}
    }
`,jl=r(El.Small)`
    ${cn.MaxWidth.lg} {
        width: 100%;
    }
`,Wl=r.div`
    display: none;

    ${cn.MaxWidth.lg} {
        display: flex;
        flex-direction: column;
        margin-top: ${on["spacing-40"]};
    }
`,Yl=r(Sl.BodyMD)`
    margin-bottom: ${on["spacing-8"]};
`,Ll=r.div`
    display: flex;
`,Tl=r.a`
    :not(:last-child) {
        margin-right: ${on["spacing-16"]};
    }

    img {
        width: auto;
        height: auto;
        object-fit: contain;
    }

    ${cn.MaxWidth.lg} {
        img {
            max-width: 11rem;
        }
    }

    ${cn.MaxWidth.sm} {
        img {
            max-width: 100%;
        }
    }
`,Il=({actionButtons:e,mobile:r=!1,onActionButtonClick:t})=>{const n=e=>{e.stopPropagation()},i=e=>r=>{r.stopPropagation(),"download"===e.type&&window.scrollTo({left:0,top:document.body.scrollHeight,behavior:"smooth"}),t(r,e)},l=(e,r)=>{const t=e?(e=>{const r=el(e,(e=>"download"===e.type));if(r>-1){const t=[...e],n=t.splice(r,1);return[...t,n[0]]}return e})(r):r;return t.map(((r,t)=>{let o;switch(r.type){case"download":o=e?(l=r.args,s(Wl,{children:[a(Yl,{weight:"semibold",children:l&&l.children||"Download the app"}),s(Ll,{children:[a(Tl,{href:"https://apps.apple.com/sg/app/moments-of-life/id1383218758",target:"_blank",rel:"noopener noreferrer","data-testid":"button__app-store",onClick:n,children:a("img",{src:"https://assets.life.gov.sg/react-design-system/img/download/apple-app-store.png",alt:"apple-app-store"})}),a(Tl,{href:"https://play.google.com/store/apps/details?id=sg.gov.app.mol&hl=en_SG",target:"_blank",rel:"noopener noreferrer","data-testid":"button__play-store",onClick:n,children:a("img",{src:"https://assets.life.gov.sg/react-design-system/img/download/google-play-store.png",alt:"google-play-store"})})]})]})):a(jl,Object.assign({},r.args,{type:"button",onClick:i(r),"data-testid":"action-button__download",children:"Download the app"}));break;case"button":{const n=r.args["data-testid"]?`action-button__${r.args["data-testid"]}`:`action-button__button-${e?"mobile-":""}${t+1}`;o=a(jl,Object.assign({},r.args,{type:"button",onClick:i(r),"data-testid":n}));break}case"component":{const e=r.args;o=e&&e.render||null;break}default:o=null}var l;if(o)return a(Ol,{$mobile:e,children:o},`action-button-${t+1}`)}))};if(e){const t=(null==e?void 0:e.mobile)||e.desktop,n=t.filter((e=>!!e.uncollapsible)),i=t.filter((e=>!e.uncollapsible));return r?a(o,{children:i.length>0&&a(_l,{children:l(r,i)})}):s(o,{children:[n.length>0&&a(zl,{children:l(!1,n)}),e.desktop.length>0&&a(Ml,{children:l(r,e.desktop)})]})}return a(o,{})};var Nl;!function(e){e.isNavItemCommon=e=>!!e.onClick,e.isNavItemLink=e=>{const r=e;return!r.itemType||"link"===r.itemType}}(Nl||(Nl={}));const Hl=r.ul`
    display: flex;
    flex-direction: column;
    position: absolute;
    left: 0;
    top: 100%;

    min-width: 15.625rem;
    width: 100%;
    max-height: 20rem;
    overflow: auto;

    padding: ${on["spacing-8"]} 0;

    background: ${tn.bg};
    border-radius: ${ln.md};
    box-shadow: 0px 2px 8px 0px
        rgb(from ${tn.Primitive["neutral-50"]} r g b / 25%);
`,Rl=r.ul`
    display: none;
    list-style: none;

    ${cn.MaxWidth.lg} {
        border-left: ${sn["width-040"]} solid ${tn["border-selected"]};
        display: flex;
        flex-direction: column;
    }
`,Pl=r(Sl.LinkBL)`
    width: 100%;
    position: relative;
    text-align: left;
    color: ${tn.text};

    margin: 0 ${on["spacing-8"]};

    // use border, as padding still shows an extra line after the ellipsis
    border: ${sn.solid} transparent;
    border-width: ${on["spacing-12"]} ${on["spacing-8"]};

    border-radius: ${ln.md};

    ${Cl(2)}
    white-space: pre-wrap;

    :hover,
    :active,
    :focus {
        background-color: ${tn["bg-hover"]};
        color: ${tn.text};
    }

    ${cn.MaxWidth.lg} {
        ${nn["body-md-regular"]}
    }
`,Vl=r.li`
    width: 100%;
    position: relative;
    display: flex;
    align-items: flex-start;
`,Ul=({items:e,mobile:r=!1,onItemClick:t})=>{const n=e=>r=>{r.stopPropagation(),t(r,e)},i=(r=!1)=>e.map(((e,t)=>{const{children:i,options:s}=e,o=w(e,["children","options"]),l=r?`link__mobile-${t+1}`:`link__${t+1}`;return a(Vl,{children:a(Pl,Object.assign({"data-testid":l},o,{onClick:n(e)},s,{children:i}))},t)}));if(e&&e.length>0){return a(r?Rl:Hl,{children:i(r)})}return a(o,{})},Xl=r.ul`
    display: flex;
    list-style: none;
    position: relative;

    ${e=>e.$alignLeft&&"margin-right: auto;"}

    ${cn.MaxWidth.lg} {
        display: none;
    }
`,Jl=r.ul`
    display: none;
    list-style: none;

    ${cn.MaxWidth.lg} {
        display: flex;
        flex-direction: column;
        overflow: hidden;
    }
`,Ql=r.li`
    display: flex;
    margin-left: 1rem;

    :first-child {
        // negative margin to preserve touch target size for link
        margin-left: ${e=>e.$hiddenBranding?"-0.5rem":"0"};
    }

    ${cn.MaxWidth.lg} {
        flex-direction: column;
        padding: 0.125rem 0;
        width: 100%;
        margin-left: 0rem;
    }
`,Zl=r(Sl.LinkMD)`
    display: flex;
    position: relative;
    align-items: center;
    text-align: center;
    color: ${tn.text};
    height: 100%;
    padding: 0 0.5rem;

    :active,
    :focus,
    :hover {
        color: ${e=>e.$selected?tn["text-selected-hover"]:tn["text-hover"]};
    }

    ${cn.MaxWidth.lg} {
        width: 100%;
        padding: 0.5rem 1rem;
        text-align: left;
        align-items: flex-start;
    }
`,Gl=r.div`
    flex: 1;
    margin-top: 0.25rem;

    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 3;
    white-space: pre-wrap;
`,Kl=r.div`
    position: absolute;
    bottom: 0;
    height: 0.25rem;
    left: 0.5rem;
    right: 0.5rem;
    background-color: ${tn["border-selected"]};

    :hover {
        ${e=>e.$selected&&tn["border-selected-hover"]};
    }

    ${cn.MaxWidth.lg} {
        left: 0;
        right: unset;
        top: 0;
        bottom: 0;
        height: 100%;
        width: 0.25rem;
    }
`,ql=r.div`
    padding-left: 0.5rem;
    margin-right: -0.5rem;
`,ed=r(Fn)`
    padding: 0.5rem;
    transform: rotate(${e=>e.$selected?0:180}deg);
    transition: transform 300ms ease-in-out;
    margin: auto 0.25rem auto 0;
`,rd=r(F)`
    height: 1.25rem;
    width: 1.25rem;
    color: ${tn.icon};
    :hover {
        ${e=>e.$selected?tn["icon-selected-hover"]:tn["icon-hover"]};
    }
`,td=({items:e,selectedId:r,mobile:t=!1,hideNavBranding:n,onItemClick:i})=>{const[l,g]=c(-1),[m,b]=c(!1),h=u(null);d((()=>{const e=e=>{h.current&&!h.current.contains(e.target)&&p()};return document.addEventListener("click",e,!0),()=>{document.removeEventListener("click",e,!0)}}),[]);const p=()=>{b(!1)},y=(e,r)=>t=>{t.stopPropagation(),g(r),b(!0),i(t,e)},f=(e,r)=>{e.stopPropagation(),i(e,r),b(!1)},x=()=>e.map(((e,i)=>{if("component"===e.itemType){const r=e&&e.children||null;return a("li",{children:r},i)}{const o=(e=>{if(e.id===r)return!0;if(e.subMenu&&e.subMenu.length>=1)return!!e.subMenu.find((e=>e.id===r));return!1})(e),{children:d,options:c}=e,u=w(e,["children","options"]),g=o?t?"bold":"semibold":"regular",b=t?`link__mobile-${i+1}`:`link__${i+1}`,h=l>=0&&l===i&&m;return s(Ql,{$hiddenBranding:n,children:[s(Zl,Object.assign({"data-testid":b,weight:g,$selected:o},u,{onClick:y(e,i)},c,{children:[a(Gl,{children:d}),o&&a(Kl,{"data-testid":`${b}-indicator`,$selected:o}),t&&e.subMenu&&a(ql,{children:a(ed,{"data-testid":`${b}-expand-collapse-button`,$selected:h,focusHighlight:!1,focusOutline:"browser","aria-label":h?"Collapse":"Expand",children:a(rd,{$selected:o})})})]})),h&&e.subMenu&&a(Ul,{items:e.subMenu,mobile:t,onItemClick:f})]},i)}}));return e&&e.length>0?t?a(Jl,{ref:h,children:x()}):a(Xl,{ref:h,$alignLeft:n,children:x()}):a(o,{})},nd={primary:{brandName:"LifeSG",logoSrc:"https://assets.life.gov.sg/lifesg/logo-lifesg.svg"}},id={primary:{brandName:"BookingSG",logoSrc:"https://www.booking.gov.sg/logo.svg"}},ad={primary:{brandName:"CCube",logoSrc:"https://assets.life.gov.sg/ccube/logo-ccube.svg"}},sd={primary:{brandName:"MyLegacy",logoSrc:"https://mylegacy.life.gov.sg/images/site-logo.png"}},od=g(((e,r)=>{var{items:t,className:i,id:l,selectedId:g,compress:b=!1,fixed:h=!0,resources:p,hideNavElements:y=!1,hideNavBranding:f=!1,drawerDismissalExclusions:x=[],actionButtons:v,onItemClick:F,onActionButtonClick:$,onBrandClick:E,masthead:C=!0,layout:D="default"}=e,B=w(e,["items","className","id","selectedId","compress","fixed","resources","hideNavElements","hideNavBranding","drawerDismissalExclusions","actionButtons","onItemClick","onActionButtonClick","onBrandClick","masthead","layout"]);const[A,S]=c(!1),[k,M]=c(!1),z="stretch"===D,_=u(null),O=n(),j=(e=>{switch(e){case"bookingsg":return id;case"mylegacy":return sd;case"ccube":return ad;default:return nd}})(null==O?void 0:O.resourceScheme),W=dn["lg-max"]({theme:O}),Y=(null==p?void 0:p.primary)||j.primary,L=null==p?void 0:p.secondary;m(r,(()=>Object.assign(_.current,{dismissDrawer:()=>{T()}})),[A]),d((()=>(N(),window.addEventListener("resize",N),()=>{window.removeEventListener("resize",N)})),[]);const T=()=>{S(!1),setTimeout((()=>{M(!1)}),550)},I=e=>A&&-1===x.indexOf(e),N=()=>{window.innerWidth<=W&&A&&T()},H=(e,r)=>{E&&(e.preventDefault(),E(r)),I("brand-click")&&T()},R=(e,r)=>{Nl.isNavItemCommon(r)&&r.onClick?r.onClick(e):F&&(e.preventDefault(),F(r)),Nl.isNavItemLink(r)&&!r.subMenu&&I("item-click")&&T()},P=(e,r)=>{var t;"button"!==r.type&&"download"!==r.type||!(null===(t=r.args)||void 0===t?void 0:t.onClick)?$&&(e.preventDefault(),$(r)):r.args.onClick(e),I("item-click")&&T()},V=()=>{S(!0),M(!0)},U=()=>{I("close-button-click")&&T()},X=()=>{const e=t.mobile||t.desktop;return e&&e.length>0||v&&(e=>{const r=e.mobile||e.desktop;return!!r&&r.length&&r.some((e=>!e.uncollapsible))})(v)?a(Dn,{"aria-label":"Open nav menu","data-testid":"button__mobile-menu",onClick:V,focusHighlight:!1,children:a(Bn,{})}):null};return s($n,{ref:_,$fixed:h,className:i,id:l||"navbar-wrapper","data-testid":B["data-testid"]||"navbar-wrapper",children:[C&&a(Tn,{stretch:z}),s(Yn.Content,{stretch:z,children:[s(En,{$compress:b,children:[!f&&s(An,{$compress:b,"data-id":"brand-container",children:[Y&&a(vi,{resources:Y,onClick:H,"data-id":"brand-primary","data-testid":"main__brand",type:"primary"}),L&&s(o,{children:[a(Sn,{$compress:b}),a(vi,{resources:L,onClick:H,"data-id":"brand-secondary","data-testid":"main__brand-secondary",type:"secondary"})]})]}),!y&&s(Cn,{$hideNavBranding:f,children:[a(td,{items:t.desktop,onItemClick:R,selectedId:g,hideNavBranding:f}),a(Il,{actionButtons:v,onActionButtonClick:P}),X()]})]}),!y&&a(hi,{show:k,enableOverlayClick:!0,onOverlayClick:U,children:s(Bi,{show:A,resources:{primary:Y,secondary:L},onClose:U,onBrandClick:H,actionButtons:v,hideNavBranding:f,children:[a(td,{items:t.mobile||t.desktop,onItemClick:R,selectedId:g,mobile:!0}),a(Il,{actionButtons:v,onActionButtonClick:P,mobile:!0})]})})]})]})})),ld=wn,dd=3.5;export{od as Navbar,ld as NavbarHeight,dd as NavbarMobileHeight};
//# sourceMappingURL=index.js.map
