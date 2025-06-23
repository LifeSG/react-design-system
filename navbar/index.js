import{MenuIcon as e}from"@lifesg/react-icons/menu";import r,{css as t,useTheme as n,keyframes as i}from"styled-components";import{jsx as a,jsxs as s,Fragment as o}from"react/jsx-runtime";import l,{useEffect as d,useState as c,useRef as u,forwardRef as g,useImperativeHandle as b}from"react";import{useFloatingTree as m,FloatingTree as h,useFloatingNodeId as p,FloatingNode as y}from"@floating-ui/react";import f from"react-dom";import{CrossIcon as x}from"@lifesg/react-icons/cross";import{ExternalIcon as v}from"@lifesg/react-icons/external";import{ChevronUpIcon as F}from"@lifesg/react-icons/chevron-up";function w(e,r){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(n=Object.getOwnPropertySymbols(e);i<n.length;i++)r.indexOf(n[i])<0&&Object.prototype.propertyIsEnumerable.call(e,n[i])&&(t[n[i]]=e[n[i]])}return t}"function"==typeof SuppressedError&&SuppressedError;var $="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};function C(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var E=Array.isArray,D="object"==typeof $&&$&&$.Object===Object&&$,B=D,A="object"==typeof self&&self&&self.Object===Object&&self,k=B||A||Function("return this")(),S=k.Symbol,M=S,z=Object.prototype,_=z.hasOwnProperty,O=z.toString,j=M?M.toStringTag:void 0;var W=function(e){var r=_.call(e,j),t=e[j];try{e[j]=void 0;var n=!0}catch(e){}var i=O.call(e);return n&&(r?e[j]=t:delete e[j]),i},Y=Object.prototype.toString;var L=W,T=function(e){return Y.call(e)},I=S?S.toStringTag:void 0;var N=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":I&&I in Object(e)?L(e):T(e)};var H=function(e){return null!=e&&"object"==typeof e},R=N,P=H;var V=function(e){return"symbol"==typeof e||P(e)&&"[object Symbol]"==R(e)},U=E,X=V,J=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,Q=/^\w*$/;var Z=function(e,r){if(U(e))return!1;var t=typeof e;return!("number"!=t&&"symbol"!=t&&"boolean"!=t&&null!=e&&!X(e))||(Q.test(e)||!J.test(e)||null!=r&&e in Object(r))};var G=function(e){var r=typeof e;return null!=e&&("object"==r||"function"==r)},K=N,q=G;var ee,re=function(e){if(!q(e))return!1;var r=K(e);return"[object Function]"==r||"[object GeneratorFunction]"==r||"[object AsyncFunction]"==r||"[object Proxy]"==r},te=k["__core-js_shared__"],ne=(ee=/[^.]+$/.exec(te&&te.keys&&te.keys.IE_PROTO||""))?"Symbol(src)_1."+ee:"";var ie=function(e){return!!ne&&ne in e},ae=Function.prototype.toString;var se=function(e){if(null!=e){try{return ae.call(e)}catch(e){}try{return e+""}catch(e){}}return""},oe=re,le=ie,de=G,ce=se,ue=/^\[object .+?Constructor\]$/,ge=Function.prototype,be=Object.prototype,me=ge.toString,he=be.hasOwnProperty,pe=RegExp("^"+me.call(he).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");var ye=function(e,r){return null==e?void 0:e[r]},fe=function(e){return!(!de(e)||le(e))&&(oe(e)?pe:ue).test(ce(e))},xe=ye;var ve=function(e,r){var t=xe(e,r);return fe(t)?t:void 0},Fe=ve(Object,"create"),we=Fe;var $e=function(){this.__data__=we?we(null):{},this.size=0};var Ce=function(e){var r=this.has(e)&&delete this.__data__[e];return this.size-=r?1:0,r},Ee=Fe,De=Object.prototype.hasOwnProperty;var Be=function(e){var r=this.__data__;if(Ee){var t=r[e];return"__lodash_hash_undefined__"===t?void 0:t}return De.call(r,e)?r[e]:void 0},Ae=Fe,ke=Object.prototype.hasOwnProperty;var Se=function(e){var r=this.__data__;return Ae?void 0!==r[e]:ke.call(r,e)},Me=Fe;var ze=function(e,r){var t=this.__data__;return this.size+=this.has(e)?0:1,t[e]=Me&&void 0===r?"__lodash_hash_undefined__":r,this},_e=$e,Oe=Ce,je=Be,We=Se,Ye=ze;function Le(e){var r=-1,t=null==e?0:e.length;for(this.clear();++r<t;){var n=e[r];this.set(n[0],n[1])}}Le.prototype.clear=_e,Le.prototype.delete=Oe,Le.prototype.get=je,Le.prototype.has=We,Le.prototype.set=Ye;var Te=Le;var Ie=function(){this.__data__=[],this.size=0};var Ne=function(e,r){return e===r||e!=e&&r!=r},He=Ne;var Re=function(e,r){for(var t=e.length;t--;)if(He(e[t][0],r))return t;return-1},Pe=Re,Ve=Array.prototype.splice;var Ue=function(e){var r=this.__data__,t=Pe(r,e);return!(t<0)&&(t==r.length-1?r.pop():Ve.call(r,t,1),--this.size,!0)},Xe=Re;var Je=function(e){var r=this.__data__,t=Xe(r,e);return t<0?void 0:r[t][1]},Qe=Re;var Ze=function(e){return Qe(this.__data__,e)>-1},Ge=Re;var Ke=function(e,r){var t=this.__data__,n=Ge(t,e);return n<0?(++this.size,t.push([e,r])):t[n][1]=r,this},qe=Ie,er=Ue,rr=Je,tr=Ze,nr=Ke;function ir(e){var r=-1,t=null==e?0:e.length;for(this.clear();++r<t;){var n=e[r];this.set(n[0],n[1])}}ir.prototype.clear=qe,ir.prototype.delete=er,ir.prototype.get=rr,ir.prototype.has=tr,ir.prototype.set=nr;var ar=ir,sr=ve(k,"Map"),or=Te,lr=ar,dr=sr;var cr=function(e){var r=typeof e;return"string"==r||"number"==r||"symbol"==r||"boolean"==r?"__proto__"!==e:null===e};var ur=function(e,r){var t=e.__data__;return cr(r)?t["string"==typeof r?"string":"hash"]:t.map},gr=ur;var br=function(e){var r=gr(this,e).delete(e);return this.size-=r?1:0,r},mr=ur;var hr=function(e){return mr(this,e).get(e)},pr=ur;var yr=function(e){return pr(this,e).has(e)},fr=ur;var xr=function(e,r){var t=fr(this,e),n=t.size;return t.set(e,r),this.size+=t.size==n?0:1,this},vr=function(){this.size=0,this.__data__={hash:new or,map:new(dr||lr),string:new or}},Fr=br,wr=hr,$r=yr,Cr=xr;function Er(e){var r=-1,t=null==e?0:e.length;for(this.clear();++r<t;){var n=e[r];this.set(n[0],n[1])}}Er.prototype.clear=vr,Er.prototype.delete=Fr,Er.prototype.get=wr,Er.prototype.has=$r,Er.prototype.set=Cr;var Dr=Er,Br=Dr;function Ar(e,r){if("function"!=typeof e||null!=r&&"function"!=typeof r)throw new TypeError("Expected a function");var t=function(){var n=arguments,i=r?r.apply(this,n):n[0],a=t.cache;if(a.has(i))return a.get(i);var s=e.apply(this,n);return t.cache=a.set(i,s)||a,s};return t.cache=new(Ar.Cache||Br),t}Ar.Cache=Br;var kr=Ar;var Sr=function(e){var r=kr(e,(function(e){return 500===t.size&&t.clear(),e})),t=r.cache;return r},Mr=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,zr=/\\(\\)?/g,_r=Sr((function(e){var r=[];return 46===e.charCodeAt(0)&&r.push(""),e.replace(Mr,(function(e,t,n,i){r.push(n?i.replace(zr,"$1"):t||e)})),r}));var Or=function(e,r){for(var t=-1,n=null==e?0:e.length,i=Array(n);++t<n;)i[t]=r(e[t],t,e);return i},jr=E,Wr=V,Yr=S?S.prototype:void 0,Lr=Yr?Yr.toString:void 0;var Tr=function e(r){if("string"==typeof r)return r;if(jr(r))return Or(r,e)+"";if(Wr(r))return Lr?Lr.call(r):"";var t=r+"";return"0"==t&&1/r==-1/0?"-0":t},Ir=Tr;var Nr=E,Hr=Z,Rr=_r,Pr=function(e){return null==e?"":Ir(e)};var Vr=function(e,r){return Nr(e)?e:Hr(e,r)?[e]:Rr(Pr(e))},Ur=V;var Xr=function(e){if("string"==typeof e||Ur(e))return e;var r=e+"";return"0"==r&&1/e==-1/0?"-0":r},Jr=Vr,Qr=Xr;var Zr=function(e,r){for(var t=0,n=(r=Jr(r,e)).length;null!=e&&t<n;)e=e[Qr(r[t++])];return t&&t==n?e:void 0},Gr=Zr;var Kr=function(e,r,t){var n=null==e?void 0:Gr(e,r);return void 0===n?t:n},qr=C(Kr);const et=(e,r,t)=>qr(t,r)||qr(e,r),rt=(e,r)=>{const t=r||e.defaultValue;return qr(e.collections,t)},tt={collections:{default:{"width-005":.5,"width-010":1,"width-020":2,"width-040":4,solid:"solid"}},defaultValue:"default"},nt=e=>r=>{var t;const n=r.theme,i=rt(tt,null==n?void 0:n.borderScheme);return(null===(t=null==n?void 0:n.overrides)||void 0===t?void 0:t.border)?`${et(i,e,n.overrides.border)}px`:`${i[e]}px`},it={"width-005":nt("width-005"),"width-010":nt("width-010"),"width-020":nt("width-020"),"width-040":nt("width-040"),solid:(at="solid",e=>{var r;const t=e.theme,n=rt(tt,null==t?void 0:t.borderScheme),i=(null===(r=null==t?void 0:t.overrides)||void 0===r?void 0:r.border)?et(n,at,t.overrides.border):n[at];return"function"==typeof i?i(e):i})};var at;const st={"brand-10":"#2C0C0B","brand-20":"#4C1513","brand-30":"#6C1D1B","brand-40":"#922825","brand-50":"#BF3431","brand-60":"#F15D5A","brand-70":"#F69491","brand-80":"#FABAB7","brand-90":"#FCD7D2","brand-95":"#FFEBE7","brand-100":"#FFF6F4","primary-10":"#1A122C","primary-20":"#2F1F4D","primary-30":"#422D6E","primary-40":"#5B3D97","primary-50":"#7654BC","primary-60":"#9A82CD","primary-70":"#B7A7D8","primary-80":"#CFC5E5","primary-90":"#E3DDF0","primary-95":"#F0EDF7","primary-100":"#F9F8FC","secondary-10":"#0E1723","secondary-20":"#18293D","secondary-30":"#233A57","secondary-40":"#305078","secondary-50":"#4B6A8F","secondary-60":"#7B91A9","secondary-70":"#A1B1C3","secondary-80":"#C1CBD7","secondary-90":"#DBE1E8","secondary-95":"#EBEFF2","secondary-100":"#F7F8FA","neutral-10":"#161616","neutral-20":"#282828","neutral-30":"#393939","neutral-40":"#4E4E4E","neutral-50":"#686868","neutral-60":"#8E8E8E","neutral-70":"#AFAFB0","neutral-80":"#C7CACA","neutral-90":"#DDE1E2","neutral-95":"#EDEFEF","neutral-100":"#F9F9F9","success-10":"#081A0F","success-20":"#0E2D1B","success-30":"#154126","success-40":"#1C5A34","success-50":"#257645","success-60":"#44A068","success-70":"#64C189","success-80":"#80DCA5","success-90":"#B4ECCB","success-95":"#D5F6E2","success-100":"#EFFCF4","warning-10":"#221302","warning-20":"#3B2204","warning-30":"#543106","warning-40":"#744408","warning-50":"#98590C","warning-60":"#D07A13","warning-70":"#E4A244","warning-80":"#F5C26C","warning-90":"#FADBA6","warning-95":"#FCECD4","warning-100":"#FDF7F0","error-10":"#330505","error-20":"#550808","error-30":"#750C0C","error-40":"#9E130F","error-50":"#CB2213","error-60":"#DE6C6C","error-70":"#E89B9B","error-80":"#EFBEBE","error-90":"#F5D9D9","error-95":"#F9ECEC","error-100":"#FCF7F7","info-10":"#021824","info-20":"#032B3F","info-30":"#053D59","info-40":"#065478","info-50":"#176E9B","info-60":"#5296BE","info-70":"#82B5DA","info-80":"#ACCFE7","info-90":"#CCE3F1","info-95":"#E3F1F8","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000","primary-inverse":"#FEAB10"},ot={"brand-10":"#1F1221","brand-20":"#371F3B","brand-30":"#4E2C53","brand-40":"#6B3E73","brand-50":"#8D5197","brand-60":"#FF3399","brand-70":"#FF88C4","brand-80":"#FFB3D9","brand-90":"#FFD4E9","brand-95":"#FFE8F3","brand-100":"#FFD6EB","primary-10":"#1F1221","primary-20":"#371F3B","primary-30":"#4E2C53","primary-40":"#6B3E73","primary-50":"#8D5197","primary-60":"#B07DB7","primary-70":"#C7A3CC","primary-80":"#D9C2DD","primary-90":"#E9DBEB","primary-95":"#F3ECF4","primary-100":"#FAF7FA","secondary-10":"#2D091B","secondary-20":"#4D0F2E","secondary-30":"#6B1540","secondary-40":"#931D58","secondary-50":"#C02673","secondary-60":"#FF409F","secondary-70":"#FF88C4","secondary-80":"#FFB3D9","secondary-90":"#FFD4E9","secondary-95":"#FFE8F3","secondary-100":"#FFF8FC","neutral-10":"#161616","neutral-20":"#282828","neutral-30":"#393939","neutral-40":"#4E4E4E","neutral-50":"#686868","neutral-60":"#8E8E8E","neutral-70":"#AFAFB0","neutral-80":"#C7CACA","neutral-90":"#DDE1E2","neutral-95":"#EDEFEF","neutral-100":"#F9F9F9","success-10":"#081A0F","success-20":"#0E2D1B","success-30":"#154126","success-40":"#1C5A34","success-50":"#257645","success-60":"#44A068","success-70":"#64C189","success-80":"#80DCA5","success-90":"#B4ECCB","success-95":"#D5F6E2","success-100":"#EFFCF4","warning-10":"#221302","warning-20":"#3B2204","warning-30":"#543106","warning-40":"#744408","warning-50":"#98590C","warning-60":"#D07A13","warning-70":"#E4A244","warning-80":"#F5C26C","warning-90":"#FADBA6","warning-95":"#FCECD4","warning-100":"#FDF7F0","error-10":"#330505","error-20":"#550808","error-30":"#750C0C","error-40":"#9E130F","error-50":"#CB2213","error-60":"#DE6C6C","error-70":"#E89B9B","error-80":"#EFBEBE","error-90":"#F5D9D9","error-95":"#F9ECEC","error-100":"#FCF7F7","info-10":"#021824","info-20":"#032B3F","info-30":"#053D59","info-40":"#065478","info-50":"#176E9B","info-60":"#5296BE","info-70":"#82B5DA","info-80":"#ACCFE7","info-90":"#CCE3F1","info-95":"#E3F1F8","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000","primary-inverse":"#FEAB10"},lt={"brand-10":"#2C0C0B","brand-20":"#4C1513","brand-30":"#6C1D1B","brand-40":"#922825","brand-50":"#BF3431","brand-60":"#F15D5A","brand-70":"#F69491","brand-80":"#FABAB7","brand-90":"#FCD7D2","brand-95":"#FFEBE7","brand-100":"#FFF6F4","primary-10":"#001731","primary-20":"#002752","primary-30":"#003874","primary-40":"#004D9F","primary-50":"#1768BE","primary-60":"#3C91EC","primary-70":"#6CB4FF","primary-80":"#A5CDFF","primary-90":"#CFE1FE","primary-95":"#E8F0FE","primary-100":"#F7F9FF","secondary-10":"#131529","secondary-20":"#222547","secondary-30":"#2F3565","secondary-40":"#42498B","secondary-50":"#5B62A7","secondary-60":"#858CBD","secondary-70":"#A8ADCF","secondary-80":"#C6C9E0","secondary-90":"#DDDFEC","secondary-95":"#EDEEF5","secondary-100":"#F8F8FB","neutral-10":"#161616","neutral-20":"#282828","neutral-30":"#393939","neutral-40":"#4E4E4E","neutral-50":"#686868","neutral-60":"#8E8E8E","neutral-70":"#AFAFB0","neutral-80":"#C7CACA","neutral-90":"#DDE1E2","neutral-95":"#EDEFEF","neutral-100":"#F9F9F9","success-10":"#081A0F","success-20":"#0E2D1B","success-30":"#154126","success-40":"#1C5A34","success-50":"#257645","success-60":"#44A068","success-70":"#64C189","success-80":"#80DCA5","success-90":"#B4ECCB","success-95":"#D5F6E2","success-100":"#EFFCF4","warning-10":"#221302","warning-20":"#3B2204","warning-30":"#543106","warning-40":"#744408","warning-50":"#98590C","warning-60":"#D07A13","warning-70":"#E4A244","warning-80":"#F5C26C","warning-90":"#FADBA6","warning-95":"#FCECD4","warning-100":"#FDF7F0","error-10":"#330505","error-20":"#550808","error-30":"#750C0C","error-40":"#9E130F","error-50":"#CB2213","error-60":"#DE6C6C","error-70":"#E89B9B","error-80":"#EFBEBE","error-90":"#F5D9D9","error-95":"#F9ECEC","error-100":"#FCF7F7","info-10":"#021824","info-20":"#032B3F","info-30":"#053D59","info-40":"#065478","info-50":"#176E9B","info-60":"#5296BE","info-70":"#82B5DA","info-80":"#ACCFE7","info-90":"#CCE3F1","info-95":"#E3F1F8","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000","primary-inverse":"#FEAB10"},dt={"brand-10":"#2C0C0B","brand-20":"#4C1513","brand-30":"#6C1D1B","brand-40":"#922825","brand-50":"#BF3431","brand-60":"#F15D5A","brand-70":"#F69491","brand-80":"#FABAB7","brand-90":"#FCD7D2","brand-95":"#FFEBE7","brand-100":"#FFF6F4","primary-10":"#0011924","primary-20":"#032B40","primary-30":"#043D5A","primary-40":"#05547B","primary-50":"#096EA1","primary-60":"#2098D3","primary-70":"#5CB9E8","primary-80":"#8BD3F6","primary-90":"#BEE6FA","primary-95":"#E2F2FA","primary-100":"#F4FAFC","secondary-10":"#131529","secondary-20":"#222547","secondary-30":"#2F3565","secondary-40":"#42498B","secondary-50":"#5B62A7","secondary-60":"#858CBD","secondary-70":"#A8ADCF","secondary-80":"#C6C9E0","secondary-90":"#DDDFEC","secondary-95":"#EDEEF5","secondary-100":"#F8F8FB","neutral-10":"#161616","neutral-20":"#282828","neutral-30":"#393939","neutral-40":"#4E4E4E","neutral-50":"#686868","neutral-60":"#8E8E8E","neutral-70":"#AFAFB0","neutral-80":"#C7CACA","neutral-90":"#DDE1E2","neutral-95":"#EDEFEF","neutral-100":"#F9F9F9","success-10":"#081A0F","success-20":"#0E2D1B","success-30":"#154126","success-40":"#1C5A34","success-50":"#257645","success-60":"#44A068","success-70":"#64C189","success-80":"#80DCA5","success-90":"#B4ECCB","success-95":"#D5F6E2","success-100":"#EFFCF4","warning-10":"#221302","warning-20":"#3B2204","warning-30":"#543106","warning-40":"#744408","warning-50":"#98590C","warning-60":"#D07A13","warning-70":"#E4A244","warning-80":"#F5C26C","warning-90":"#FADBA6","warning-95":"#FCECD4","warning-100":"#FDF7F0","error-10":"#330505","error-20":"#550808","error-30":"#750C0C","error-40":"#9E130F","error-50":"#CB2213","error-60":"#DE6C6C","error-70":"#E89B9B","error-80":"#EFBEBE","error-90":"#F5D9D9","error-95":"#F9ECEC","error-100":"#FCF7F7","info-10":"#021824","info-20":"#032B3F","info-30":"#053D59","info-40":"#065478","info-50":"#176E9B","info-60":"#5296BE","info-70":"#82B5DA","info-80":"#ACCFE7","info-90":"#CCE3F1","info-95":"#E3F1F8","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000","primary-inverse":"#FEAB10"},ct={"brand-10":"#001A19","brand-20":"#002D2B","brand-30":"#00413D","brand-40":"#005954","brand-50":"#00756F","brand-60":"#03A098","brand-70":"#55BFBA","brand-80":"#92D6D2","brand-90":"#BFE7E5","brand-95":"#DDF2F1","brand-100":"#F4FBFA","primary-10":"#09191D","primary-20":"#102B34","primary-30":"#173D49","primary-40":"#205666","primary-50":"#2A7086","primary-60":"#2A7086","primary-70":"#8CB6C2","primary-80":"#B2CED6","primary-90":"#D1E2E7","primary-95":"#E8F0F3","primary-100":"#F9F8FC","secondary-10":"#001731","secondary-20":"#002752","secondary-30":"#003874","secondary-40":"#004D9F","secondary-50":"#5B62A7","secondary-60":"#858CBD","secondary-70":"#A8ADCF","secondary-80":"#C6C9E0","secondary-90":"#DDDFEC","secondary-95":"#EDEEF5","secondary-100":"#F8F8FB","neutral-10":"#161616","neutral-20":"#282828","neutral-30":"#393939","neutral-40":"#4E4E4E","neutral-50":"#686868","neutral-60":"#8E8E8E","neutral-70":"#AFAFB0","neutral-80":"#C7CACA","neutral-90":"#DDE1E2","neutral-95":"#EDEFEF","neutral-100":"#F9F9F9","success-10":"#081A0F","success-20":"#0E2D1B","success-30":"#154126","success-40":"#1C5A34","success-50":"#257645","success-60":"#44A068","success-70":"#64C189","success-80":"#80DCA5","success-90":"#B4ECCB","success-95":"#D5F6E2","success-100":"#EFFCF4","warning-10":"#221302","warning-20":"#3B2204","warning-30":"#543106","warning-40":"#744408","warning-50":"#98590C","warning-60":"#D07A13","warning-70":"#E4A244","warning-80":"#F5C26C","warning-90":"#FADBA6","warning-95":"#FCECD4","warning-100":"#FDF7F0","error-10":"#330505","error-20":"#550808","error-30":"#750C0C","error-40":"#9E130F","error-50":"#CB2213","error-60":"#DE6C6C","error-70":"#E89B9B","error-80":"#EFBEBE","error-90":"#F5D9D9","error-95":"#F9ECEC","error-100":"#FCF7F7","info-10":"#021824","info-20":"#032B3F","info-30":"#053D59","info-40":"#065478","info-50":"#176E9B","info-60":"#5296BE","info-70":"#82B5DA","info-80":"#ACCFE7","info-90":"#CCE3F1","info-95":"#E3F1F8","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000","primary-inverse":"#FEAB10"},ut={"brand-10":"#881317","brand-20":"#B5191E","brand-30":"#B5040A","brand-40":"#D0333F","brand-50":"#DC666F","brand-60":"#E28087","brand-70":"#E7999F","brand-80":"#EDB3B7","brand-90":"#F3CCCF","brand-95":"#F9E6E7","brand-100":"#FCF2F3","primary-10":"#000000","primary-20":"#191919","primary-30":"#333333","primary-40":"#4D4D4D","primary-50":"#666666","primary-60":"#808080","primary-70":"#999999","primary-80":"#B3B3B3","primary-90":"#E6E6E6","primary-95":"#F7F7F7","primary-100":"#FFFFFF","secondary-10":"#19151D","secondary-20":"#2B2533","secondary-30":"#3E3649","secondary-40":"#564A64","secondary-50":"#6F637D","secondary-60":"#948B9F","secondary-70":"#B3ACBB","secondary-80":"#CCC8D2","secondary-90":"#E1DEE4","secondary-95":"#EFEEF1","secondary-100":"#F9F8F9","neutral-10":"#000000","neutral-20":"#191919","neutral-30":"#333333","neutral-40":"#4D4D4D","neutral-50":"#666666","neutral-60":"#808080","neutral-70":"#999999","neutral-80":"#B3B3B3","neutral-90":"#E6E6E6","neutral-95":"#F7F7F7","neutral-100":"#FFFFFF","success-10":"#081A0F","success-20":"#0E2D1B","success-30":"#154126","success-40":"#1C5A34","success-50":"#257645","success-60":"#44A068","success-70":"#64C189","success-80":"#80DCA5","success-90":"#B4ECCB","success-95":"#D5F6E2","success-100":"#EFFCF4","warning-10":"#221302","warning-20":"#3B2204","warning-30":"#543106","warning-40":"#744408","warning-50":"#98590C","warning-60":"#D07A13","warning-70":"#E4A244","warning-80":"#F5C26C","warning-90":"#FADBA6","warning-95":"#FCECD4","warning-100":"#FDF7F0","error-10":"#330505","error-20":"#550808","error-30":"#750C0C","error-40":"#9E130F","error-50":"#CB2213","error-60":"#DE6C6C","error-70":"#E89B9B","error-80":"#EFBEBE","error-90":"#F5D9D9","error-95":"#F9ECEC","error-100":"#FCF7F7","info-10":"#021824","info-20":"#032B3F","info-30":"#053D59","info-40":"#065478","info-50":"#176E9B","info-60":"#5296BE","info-70":"#82B5DA","info-80":"#ACCFE7","info-90":"#CCE3F1","info-95":"#E3F1F8","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000","primary-inverse":"#FEAB10"},gt={"brand-10":"#0E123A","brand-20":"#191E65","brand-30":"#232B90","brand-40":"#303BC5","brand-50":"#494CFF","brand-60":"#AD6EFF","brand-70":"#AEA4FF","brand-80":"#C5C4FF","brand-90":"#DDDCFF","brand-95":"#EDECFF","brand-100":"#F8F8FF","primary-10":"#10152B","primary-20":"#1C254B","primary-30":"#28356C","primary-40":"#38489A","primary-50":"#4D5AD7","primary-60":"#7487F2","primary-70":"#9AAAFC","primary-80":"#BDC7FD","primary-90":"#DADFFB","primary-95":"#ECEEFE","primary-100":"#F7F8FF","secondary-10":"#19151D","secondary-20":"#2B2533","secondary-30":"#3E3649","secondary-40":"#564A64","secondary-50":"#6F637D","secondary-60":"#948B9F","secondary-70":"#B3ACBB","secondary-80":"#CCC8D2","secondary-90":"#E1DEE4","secondary-95":"#EFEEF1","secondary-100":"#F9F8F9","neutral-10":"#161616","neutral-20":"#282828","neutral-30":"#393939","neutral-40":"#4E4E4E","neutral-50":"#686868","neutral-60":"#8E8E8E","neutral-70":"#AFAFB0","neutral-80":"#C7CACA","neutral-90":"#DDE1E2","neutral-95":"#EDEFEF","neutral-100":"#F9F9F9","success-10":"#081A0F","success-20":"#0E2D1B","success-30":"#154126","success-40":"#1C5A34","success-50":"#257645","success-60":"#44A068","success-70":"#64C189","success-80":"#80DCA5","success-90":"#B4ECCB","success-95":"#D5F6E2","success-100":"#EFFCF4","warning-10":"#221302","warning-20":"#3B2204","warning-30":"#543106","warning-40":"#744408","warning-50":"#98590C","warning-60":"#D07A13","warning-70":"#E4A244","warning-80":"#F5C26C","warning-90":"#FADBA6","warning-95":"#FCECD4","warning-100":"#FDF7F0","error-10":"#330505","error-20":"#550808","error-30":"#750C0C","error-40":"#9E130F","error-50":"#CB2213","error-60":"#DE6C6C","error-70":"#E89B9B","error-80":"#EFBEBE","error-90":"#F5D9D9","error-95":"#F9ECEC","error-100":"#FCF7F7","info-10":"#021824","info-20":"#032B3F","info-30":"#053D59","info-40":"#065478","info-50":"#176E9B","info-60":"#5296BE","info-70":"#82B5DA","info-80":"#ACCFE7","info-90":"#CCE3F1","info-95":"#E3F1F8","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000","primary-inverse":"#FEAB10"},bt={"brand-10":"#170F39","brand-20":"#281C62","brand-30":"#38268B","brand-40":"#4D34BF","brand-50":"#5735DF","brand-60":"#9986F9","brand-70":"#B2A5F8","brand-80":"#CDC2FA","brand-90":"#E2DCFC","brand-95":"#EFEDFE","brand-100":"#FAF8FD","primary-10":"#170F39","primary-20":"#281C62","primary-30":"#38268B","primary-40":"#4D34BF","primary-50":"#5735DF","primary-60":"#9986F9","primary-70":"#B2A5F8","primary-80":"#CDC2FA","primary-90":"#E2DCFC","primary-95":"#EFEDFE","primary-100":"#FAF8FD","secondary-10":"#251204","secondary-20":"#401F08","secondary-30":"#5B2C0B","secondary-40":"#7E3D0F","secondary-50":"#B04900","secondary-60":"#E26E1C","secondary-70":"#FF9445","secondary-80":"#FFBB8E","secondary-90":"#FFD9BF","secondary-95":"#FFECDF","secondary-100":"#FFF8F3","neutral-10":"#161616","neutral-20":"#282828","neutral-30":"#393939","neutral-40":"#4E4E4E","neutral-50":"#686868","neutral-60":"#8E8E8E","neutral-70":"#AFAFB0","neutral-80":"#C7CACA","neutral-90":"#DDE1E2","neutral-95":"#EDEFEF","neutral-100":"#F9F9F9","success-10":"#031B15","success-20":"#082D24","success-30":"#094134","success-40":"#0D5947","success-50":"#10755E","success-60":"#16A181","success-70":"#1EC59D","success-80":"#6FDDC2","success-90":"#AFECDE","success-95":"#D5F5ED","success-100":"#F1FCF9","warning-10":"#1F1500","warning-20":"#362500","warning-30":"#4D3501","warning-40":"#6A4801","warning-50":"#8B6001","warning-60":"#BF8301","warning-70":"#EAA102","warning-80":"#FFBF34","warning-90":"#FFDC8F","warning-95":"#FFEDC7","warning-100":"#FFF8EA","error-10":"#270F10","error-20":"#441B1B","error-30":"#612627","error-40":"#853535","error-50":"#AF4546","error-60":"#EC6162","error-70":"#F29696","error-80":"#F7BBBC","error-90":"#FAD8D8","error-95":"#FCEAEA","error-100":"#FEF7F7","info-10":"#0F1627","info-20":"#1B2745","info-30":"#273763","info-40":"#354D88","info-50":"#4665B3","info-60":"#618AF6","info-70":"#8DADFF","info-80":"#B4C9FF","info-90":"#D3DFFF","info-95":"#E9EFFF","info-100":"#F5F8FF",white:"#FFFFFF",black:"#000000","primary-inverse":"#FEAB10"},mt={collections:{lifesg:lt,bookingsg:st,rbs:gt,mylegacy:dt,ccube:ot,oneservice:ct,pa:ut,a11yplayground:bt},defaultValue:"lifesg"},ht={collections:{lifesg:lt,bookingsg:st,rbs:gt,mylegacy:dt,ccube:ot,oneservice:ct,pa:ut,a11yplayground:bt},defaultValue:"lifesg"},pt=e=>r=>{var t;const n=r.theme,i="dark"===(null==n?void 0:n.colourMode),a=rt(i?ht:mt,null==n?void 0:n.colourScheme),s=i?"primitiveColourDark":"primitiveColour",o=null===(t=null==n?void 0:n.overrides)||void 0===t?void 0:t[s];return o?et(a,e,o):a[e]},yt={"brand-10":pt("brand-10"),"brand-20":pt("brand-20"),"brand-30":pt("brand-30"),"brand-40":pt("brand-40"),"brand-50":pt("brand-50"),"brand-60":pt("brand-60"),"brand-70":pt("brand-70"),"brand-80":pt("brand-80"),"brand-90":pt("brand-90"),"brand-95":pt("brand-95"),"brand-100":pt("brand-100"),"primary-10":pt("primary-10"),"primary-20":pt("primary-20"),"primary-30":pt("primary-30"),"primary-40":pt("primary-40"),"primary-50":pt("primary-50"),"primary-60":pt("primary-60"),"primary-70":pt("primary-70"),"primary-80":pt("primary-80"),"primary-90":pt("primary-90"),"primary-95":pt("primary-95"),"primary-100":pt("primary-100"),"secondary-10":pt("secondary-10"),"secondary-20":pt("secondary-20"),"secondary-30":pt("secondary-30"),"secondary-40":pt("secondary-40"),"secondary-50":pt("secondary-50"),"secondary-60":pt("secondary-60"),"secondary-70":pt("secondary-70"),"secondary-80":pt("secondary-80"),"secondary-90":pt("secondary-90"),"secondary-95":pt("secondary-95"),"secondary-100":pt("secondary-100"),"neutral-10":pt("neutral-10"),"neutral-20":pt("neutral-20"),"neutral-30":pt("neutral-30"),"neutral-40":pt("neutral-40"),"neutral-50":pt("neutral-50"),"neutral-60":pt("neutral-60"),"neutral-70":pt("neutral-70"),"neutral-80":pt("neutral-80"),"neutral-90":pt("neutral-90"),"neutral-95":pt("neutral-95"),"neutral-100":pt("neutral-100"),"success-10":pt("success-10"),"success-20":pt("success-20"),"success-30":pt("success-30"),"success-40":pt("success-40"),"success-50":pt("success-50"),"success-60":pt("success-60"),"success-70":pt("success-70"),"success-80":pt("success-80"),"success-90":pt("success-90"),"success-95":pt("success-95"),"success-100":pt("success-100"),"warning-10":pt("warning-10"),"warning-20":pt("warning-20"),"warning-30":pt("warning-30"),"warning-40":pt("warning-40"),"warning-50":pt("warning-50"),"warning-60":pt("warning-60"),"warning-70":pt("warning-70"),"warning-80":pt("warning-80"),"warning-90":pt("warning-90"),"warning-95":pt("warning-95"),"warning-100":pt("warning-100"),"error-10":pt("error-10"),"error-20":pt("error-20"),"error-30":pt("error-30"),"error-40":pt("error-40"),"error-50":pt("error-50"),"error-60":pt("error-60"),"error-70":pt("error-70"),"error-80":pt("error-80"),"error-90":pt("error-90"),"error-95":pt("error-95"),"error-100":pt("error-100"),"info-10":pt("info-10"),"info-20":pt("info-20"),"info-30":pt("info-30"),"info-40":pt("info-40"),"info-50":pt("info-50"),"info-60":pt("info-60"),"info-70":pt("info-70"),"info-80":pt("info-80"),"info-90":pt("info-90"),"info-95":pt("info-95"),"info-100":pt("info-100"),white:pt("white"),black:pt("black"),"primary-inverse":pt("primary-inverse")},ft={text:pt("neutral-20"),"text-subtle":pt("neutral-30"),"text-subtler":pt("neutral-50"),"text-subtlest":pt("neutral-60"),"text-primary":pt("primary-50"),"text-hover":pt("primary-40"),"text-selected":pt("primary-50"),"text-selected-hover":pt("primary-40"),"text-disabled":pt("neutral-50"),"text-disabled-subtle":pt("neutral-60"),"text-disabled-subtlest":pt("neutral-80"),"text-selected-disabled":pt("neutral-20"),"text-success":pt("success-40"),"text-warning":pt("warning-40"),"text-error":pt("error-40"),"text-info":pt("info-40"),"text-inverse":pt("white"),icon:pt("neutral-50"),"icon-subtle":pt("neutral-60"),"icon-strongest":pt("neutral-20"),"icon-primary":pt("primary-50"),"icon-primary-subtle":pt("primary-60"),"icon-primary-subtlest":pt("primary-70"),"icon-hover":pt("primary-40"),"icon-selected":pt("primary-50"),"icon-selected-hover":pt("primary-40"),"icon-disabled":pt("neutral-50"),"icon-disabled-subtle":pt("neutral-60"),"icon-selected-disabled":pt("neutral-60"),"icon-success":pt("success-50"),"icon-warning":pt("warning-60"),"icon-error":pt("error-50"),"icon-error-strong":pt("error-40"),"icon-info":pt("info-50"),"icon-inverse":pt("white"),"icon-primary-inverse":pt("primary-inverse"),border:pt("neutral-90"),"border-strong":pt("neutral-70"),"border-stronger":pt("neutral-50"),"border-primary":pt("primary-50"),"border-primary-subtle":pt("primary-60"),"border-hover":pt("primary-90"),"border-hover-strong":pt("primary-60"),"border-selected":pt("primary-50"),"border-selected-subtle":pt("primary-70"),"border-selected-subtlest":pt("primary-90"),"border-selected-hover":pt("primary-40"),"border-focus":pt("primary-60"),"border-focus-strong":pt("primary-50"),"border-disabled":pt("neutral-90"),"border-selected-disabled":pt("neutral-70"),"border-success":pt("success-60"),"border-warning":pt("warning-60"),"border-error":pt("error-60"),"border-error-focus":pt("error-60"),"border-error-focus-strong":pt("error-40"),"border-error-strong":pt("error-40"),"border-info":pt("info-60"),bg:pt("white"),"bg-strong":pt("neutral-100"),"bg-stronger":pt("neutral-95"),"bg-strongest":pt("neutral-90"),"bg-hover":pt("primary-95"),"bg-hover-strong":pt("primary-90"),"bg-hover-subtle":pt("primary-100"),"bg-hover-neutral":pt("neutral-100"),"bg-hover-neutral-strong":pt("neutral-90"),"bg-selected":pt("primary-95"),"bg-selected-hover":pt("primary-90"),"bg-selected-strong":pt("primary-90"),"bg-selected-stronger":pt("primary-70"),"bg-selected-strongest":pt("primary-50"),"bg-selected-strongest-hover":pt("primary-40"),"bg-disabled":pt("neutral-95"),"bg-selected-disabled":pt("neutral-95"),"bg-selected-stronger-disabled":pt("neutral-70"),"bg-success":pt("success-100"),"bg-success-hover":pt("success-95"),"bg-success-strong":pt("success-50"),"bg-success-strong-hover":pt("success-40"),"bg-warning":pt("warning-100"),"bg-warning-hover":pt("warning-95"),"bg-warning-strong":pt("warning-50"),"bg-warning-strong-hover":pt("warning-40"),"bg-info":pt("info-100"),"bg-info-hover":pt("info-95"),"bg-info-strong":pt("info-50"),"bg-info-strong-hover":pt("info-40"),"bg-error":pt("error-100"),"bg-error-hover":pt("error-95"),"bg-error-strong":pt("error-50"),"bg-error-strong-hover":pt("error-40"),"bg-inverse":pt("neutral-20"),"bg-inverse-subtle":pt("neutral-30"),"bg-inverse-subtler":pt("neutral-50"),"bg-inverse-subtlest":pt("neutral-60"),"bg-inverse-hover":pt("neutral-40"),"bg-primary":pt("primary-50"),"bg-primary-subtle":pt("primary-60"),"bg-primary-subtler":pt("primary-95"),"bg-primary-subtlest":pt("primary-100"),"bg-available":"#6DD0A1","bg-primary-hover":pt("primary-40"),"bg-primary-subtlest-hover":pt("primary-90"),"bg-primary-subtlest-selected":pt("primary-90"),"overlay-strong":"rgba(40, 40, 40, 0.85)","overlay-subtle":"rgba(40, 40, 40, 0.20)",hyperlink:pt("primary-50"),"hyperlink-hover":pt("primary-40"),"hyperlink-visited":pt("primary-40"),"hyperlink-inverse":pt("primary-inverse"),"focus-ring":pt("black"),"focus-ring-inverse":pt("white")},xt={text:pt("neutral-100"),"text-subtle":pt("neutral-80"),"text-subtler":pt("neutral-60"),"text-subtlest":pt("neutral-50"),"text-primary":pt("primary-60"),"text-hover":pt("primary-70"),"text-selected":pt("primary-60"),"text-selected-hover":pt("primary-70"),"text-disabled":pt("neutral-60"),"text-disabled-subtle":pt("neutral-50"),"text-disabled-subtlest":pt("neutral-30"),"text-selected-disabled":pt("neutral-90"),"text-success":pt("success-70"),"text-warning":pt("warning-70"),"text-error":pt("error-70"),"text-info":pt("info-70"),"text-inverse":pt("black"),icon:pt("neutral-60"),"icon-subtle":pt("neutral-50"),"icon-strongest":pt("neutral-90"),"icon-primary":pt("primary-60"),"icon-primary-subtle":pt("primary-50"),"icon-primary-subtlest":pt("primary-40"),"icon-hover":pt("primary-70"),"icon-selected":pt("primary-60"),"icon-selected-hover":pt("primary-70"),"icon-disabled":pt("neutral-60"),"icon-disabled-subtle":pt("neutral-50"),"icon-selected-disabled":pt("neutral-50"),"icon-success":pt("success-60"),"icon-warning":pt("warning-50"),"icon-error":pt("error-60"),"icon-error-strong":pt("error-70"),"icon-info":pt("info-60"),"icon-inverse":pt("black"),"icon-primary-inverse":pt("primary-inverse"),border:pt("neutral-20"),"border-strong":pt("neutral-40"),"border-stronger":pt("neutral-60"),"border-primary":pt("primary-60"),"border-primary-subtle":pt("primary-50"),"border-hover":pt("primary-20"),"border-hover-strong":pt("primary-50"),"border-selected":pt("primary-60"),"border-selected-subtle":pt("primary-40"),"border-selected-subtlest":pt("primary-20"),"border-selected-hover":pt("primary-70"),"border-focus":pt("primary-50"),"border-focus-strong":pt("primary-60"),"border-disabled":pt("neutral-20"),"border-selected-disabled":pt("neutral-40"),"border-success":pt("success-50"),"border-warning":pt("warning-50"),"border-error":pt("error-50"),"border-error-focus":pt("error-50"),"border-error-focus-strong":pt("error-70"),"border-error-strong":pt("error-70"),"border-info":pt("info-50"),bg:pt("black"),"bg-strong":pt("neutral-10"),"bg-stronger":pt("neutral-20"),"bg-strongest":pt("neutral-20"),"bg-hover":pt("primary-20"),"bg-hover-strong":pt("primary-20"),"bg-hover-subtle":pt("primary-10"),"bg-hover-neutral":pt("neutral-10"),"bg-hover-neutral-strong":pt("neutral-20"),"bg-selected":pt("primary-20"),"bg-selected-hover":pt("primary-20"),"bg-selected-strong":pt("primary-20"),"bg-selected-stronger":pt("primary-40"),"bg-selected-strongest":pt("primary-60"),"bg-selected-strongest-hover":pt("primary-70"),"bg-disabled":pt("neutral-20"),"bg-selected-disabled":pt("neutral-20"),"bg-selected-stronger-disabled":pt("neutral-40"),"bg-success":pt("success-10"),"bg-success-hover":pt("success-20"),"bg-success-strong":pt("success-60"),"bg-success-strong-hover":pt("success-70"),"bg-warning":pt("warning-10"),"bg-warning-hover":pt("warning-20"),"bg-warning-strong":pt("warning-60"),"bg-warning-strong-hover":pt("warning-70"),"bg-info":pt("info-10"),"bg-info-hover":pt("info-20"),"bg-info-strong":pt("info-60"),"bg-info-strong-hover":pt("info-70"),"bg-error":pt("error-10"),"bg-error-hover":pt("error-20"),"bg-error-strong":pt("error-60"),"bg-error-strong-hover":pt("error-70"),"bg-inverse":pt("neutral-90"),"bg-inverse-subtle":pt("neutral-80"),"bg-inverse-subtler":pt("neutral-60"),"bg-inverse-subtlest":pt("neutral-50"),"bg-inverse-hover":pt("neutral-70"),"bg-primary":pt("primary-60"),"bg-primary-subtle":pt("primary-50"),"bg-primary-subtler":pt("primary-20"),"bg-primary-subtlest":pt("primary-10"),"bg-available":"#185339","bg-primary-hover":pt("primary-70"),"bg-primary-subtlest-hover":pt("primary-20"),"bg-primary-subtlest-selected":pt("primary-20"),"overlay-strong":"rgba(78, 78, 78, 0.80)","overlay-subtle":"rgba(78, 78, 78, 0.50)",hyperlink:pt("primary-60"),"hyperlink-hover":pt("primary-70"),"hyperlink-visited":pt("primary-70"),"hyperlink-inverse":pt("primary-inverse"),"focus-ring":pt("primary-60"),"focus-ring-inverse":pt("black")},vt={text:pt("neutral-30"),"text-subtle":pt("neutral-40"),"text-subtler":pt("neutral-50"),"text-subtlest":pt("neutral-70"),"text-primary":pt("neutral-10"),"text-hover":pt("neutral-70"),"text-selected":pt("neutral-20"),"text-selected-hover":pt("neutral-10"),"text-disabled":pt("neutral-50"),"text-disabled-subtle":pt("neutral-60"),"text-disabled-subtlest":pt("neutral-80"),"text-selected-disabled":pt("neutral-40"),"text-success":pt("success-40"),"text-warning":pt("warning-40"),"text-error":pt("brand-30"),"text-info":pt("neutral-40"),"text-inverse":pt("neutral-100"),icon:pt("neutral-40"),"icon-subtle":pt("neutral-50"),"icon-strongest":pt("neutral-10"),"icon-primary":pt("neutral-10"),"icon-primary-subtle":pt("neutral-30"),"icon-primary-subtlest":pt("neutral-60"),"icon-hover":pt("neutral-70"),"icon-selected":pt("brand-20"),"icon-selected-hover":pt("brand-10"),"icon-disabled":pt("neutral-50"),"icon-disabled-subtle":pt("neutral-60"),"icon-selected-disabled":pt("neutral-40"),"icon-success":pt("success-40"),"icon-warning":pt("warning-60"),"icon-error":pt("brand-30"),"icon-error-strong":pt("brand-10"),"icon-info":pt("neutral-40"),"icon-inverse":pt("neutral-100"),"icon-primary-inverse":"#F9B371",border:pt("neutral-90"),"border-strong":pt("neutral-30"),"border-stronger":pt("neutral-20"),"border-primary":pt("neutral-40"),"border-primary-subtle":pt("neutral-60"),"border-hover":pt("neutral-80"),"border-hover-strong":pt("neutral-10"),"border-selected":pt("brand-20"),"border-selected-subtle":pt("neutral-40"),"border-selected-subtlest":pt("neutral-70"),"border-selected-hover":pt("neutral-10"),"border-focus":pt("neutral-20"),"border-focus-strong":pt("neutral-10"),"border-disabled":pt("neutral-90"),"border-selected-disabled":pt("neutral-80"),"border-success":pt("success-40"),"border-warning":pt("warning-60"),"border-error":pt("brand-30"),"border-error-focus":pt("brand-20"),"border-error-focus-strong":pt("brand-10"),"border-error-strong":pt("brand-20"),"border-info":pt("neutral-40"),bg:pt("neutral-100"),"bg-strong":pt("neutral-95"),"bg-stronger":pt("neutral-90"),"bg-strongest":pt("neutral-80"),"bg-hover":pt("brand-90"),"bg-hover-strong":pt("brand-80"),"bg-hover-subtle":pt("neutral-90"),"bg-hover-neutral":pt("neutral-90"),"bg-hover-neutral-strong":pt("neutral-90"),"bg-selected":pt("brand-100"),"bg-selected-hover":pt("brand-30"),"bg-selected-strong":pt("brand-50"),"bg-selected-stronger":pt("brand-40"),"bg-selected-strongest":pt("brand-20"),"bg-selected-strongest-hover":pt("brand-10"),"bg-disabled":pt("neutral-90"),"bg-selected-disabled":pt("neutral-90"),"bg-selected-stronger-disabled":pt("neutral-80"),"bg-success":pt("success-100"),"bg-success-hover":pt("success-95"),"bg-success-strong":pt("success-50"),"bg-success-strong-hover":pt("success-40"),"bg-warning":pt("warning-100"),"bg-warning-hover":pt("warning-95"),"bg-warning-strong":pt("warning-50"),"bg-warning-strong-hover":pt("warning-40"),"bg-info":pt("neutral-95"),"bg-info-hover":pt("info-95"),"bg-info-strong":pt("info-50"),"bg-info-strong-hover":pt("info-40"),"bg-error":pt("brand-100"),"bg-error-hover":pt("error-95"),"bg-error-strong":pt("error-50"),"bg-error-strong-hover":pt("error-40"),"bg-inverse":pt("neutral-40"),"bg-inverse-subtle":pt("neutral-60"),"bg-inverse-subtler":pt("neutral-70"),"bg-inverse-subtlest":pt("neutral-80"),"bg-inverse-hover":pt("neutral-30"),"bg-primary":pt("brand-20"),"bg-primary-subtle":pt("brand-60"),"bg-primary-subtler":pt("brand-80"),"bg-primary-subtlest":pt("brand-100"),"bg-available":pt("success-60"),"bg-primary-hover":pt("brand-10"),"bg-primary-subtlest-hover":pt("brand-80"),"bg-primary-subtlest-selected":pt("brand-40"),"overlay-strong":"rgba(25, 25, 25, 0.95)","overlay-subtle":"rgba(25, 25, 25, 0.20)",hyperlink:pt("neutral-10"),"hyperlink-hover":pt("neutral-40"),"hyperlink-visited":pt("neutral-50"),"hyperlink-inverse":"#F8AE68","focus-ring":pt("black"),"focus-ring-inverse":pt("white")},Ft={text:pt("neutral-20"),"text-subtle":pt("neutral-30"),"text-subtler":pt("neutral-50"),"text-subtlest":pt("neutral-60"),"text-primary":pt("primary-50"),"text-hover":pt("primary-40"),"text-selected":pt("primary-50"),"text-selected-hover":pt("primary-40"),"text-disabled":pt("neutral-50"),"text-disabled-subtle":pt("neutral-60"),"text-disabled-subtlest":pt("neutral-80"),"text-selected-disabled":pt("neutral-20"),"text-success":pt("success-40"),"text-warning":pt("warning-40"),"text-error":pt("error-40"),"text-info":pt("info-40"),"text-inverse":pt("white"),icon:pt("neutral-50"),"icon-subtle":pt("neutral-60"),"icon-strongest":pt("neutral-20"),"icon-primary":pt("primary-50"),"icon-primary-subtle":pt("primary-60"),"icon-primary-subtlest":pt("primary-70"),"icon-hover":pt("primary-40"),"icon-selected":pt("primary-50"),"icon-selected-hover":pt("primary-40"),"icon-disabled":pt("neutral-50"),"icon-disabled-subtle":pt("neutral-60"),"icon-selected-disabled":pt("neutral-60"),"icon-success":pt("success-50"),"icon-warning":pt("warning-60"),"icon-error":pt("error-50"),"icon-error-strong":pt("error-40"),"icon-info":pt("info-50"),"icon-inverse":pt("white"),"icon-primary-inverse":pt("primary-inverse"),border:pt("neutral-90"),"border-strong":pt("neutral-70"),"border-stronger":pt("neutral-50"),"border-primary":pt("primary-50"),"border-primary-subtle":pt("primary-60"),"border-hover":pt("primary-90"),"border-hover-strong":pt("primary-60"),"border-selected":pt("primary-50"),"border-selected-subtle":pt("primary-70"),"border-selected-subtlest":pt("primary-90"),"border-selected-hover":pt("primary-40"),"border-focus":pt("primary-60"),"border-focus-strong":pt("primary-50"),"border-disabled":pt("neutral-90"),"border-selected-disabled":pt("neutral-70"),"border-success":pt("success-60"),"border-warning":pt("warning-60"),"border-error":pt("error-60"),"border-error-focus":pt("error-60"),"border-error-focus-strong":pt("error-40"),"border-error-strong":pt("error-40"),"border-info":pt("info-60"),bg:pt("white"),"bg-strong":pt("neutral-100"),"bg-stronger":pt("neutral-95"),"bg-strongest":pt("neutral-90"),"bg-hover":pt("primary-95"),"bg-hover-strong":pt("primary-90"),"bg-hover-subtle":pt("primary-100"),"bg-hover-neutral":pt("neutral-100"),"bg-hover-neutral-strong":pt("neutral-90"),"bg-selected":pt("primary-95"),"bg-selected-hover":pt("primary-90"),"bg-selected-strong":pt("primary-90"),"bg-selected-stronger":pt("primary-70"),"bg-selected-strongest":pt("primary-50"),"bg-selected-strongest-hover":pt("primary-40"),"bg-disabled":pt("neutral-95"),"bg-selected-disabled":pt("neutral-95"),"bg-selected-stronger-disabled":pt("neutral-70"),"bg-success":pt("success-100"),"bg-success-hover":pt("success-95"),"bg-success-strong":pt("success-50"),"bg-success-strong-hover":pt("success-40"),"bg-warning":pt("warning-100"),"bg-warning-hover":pt("warning-95"),"bg-warning-strong":pt("warning-50"),"bg-warning-strong-hover":pt("warning-40"),"bg-info":pt("info-100"),"bg-info-hover":pt("info-95"),"bg-info-strong":pt("info-50"),"bg-info-strong-hover":pt("info-40"),"bg-error":pt("error-100"),"bg-error-hover":pt("error-95"),"bg-error-strong":pt("error-50"),"bg-error-strong-hover":pt("error-40"),"bg-inverse":pt("neutral-20"),"bg-inverse-subtle":pt("neutral-30"),"bg-inverse-subtler":pt("neutral-50"),"bg-inverse-subtlest":pt("neutral-60"),"bg-inverse-hover":pt("neutral-40"),"bg-primary":pt("primary-50"),"bg-primary-subtle":pt("primary-60"),"bg-primary-subtler":pt("primary-95"),"bg-primary-subtlest":pt("primary-100"),"bg-available":"#6DD0A1","bg-primary-hover":pt("primary-40"),"bg-primary-subtlest-hover":pt("primary-90"),"bg-primary-subtlest-selected":pt("primary-90"),"overlay-strong":"rgba(40, 40, 40, 0.85)","overlay-subtle":"rgba(40, 40, 40, 0.20)",hyperlink:pt("primary-50"),"hyperlink-hover":pt("primary-40"),"hyperlink-visited":pt("primary-40"),"hyperlink-inverse":pt("primary-inverse"),"focus-ring":pt("black"),"focus-ring-inverse":pt("white")},wt={text:pt("neutral-100"),"text-subtle":pt("neutral-80"),"text-subtler":pt("neutral-60"),"text-subtlest":pt("neutral-50"),"text-primary":pt("primary-60"),"text-hover":pt("primary-70"),"text-selected":pt("primary-60"),"text-selected-hover":pt("primary-70"),"text-disabled":pt("neutral-60"),"text-disabled-subtle":pt("neutral-50"),"text-disabled-subtlest":pt("neutral-30"),"text-selected-disabled":pt("neutral-90"),"text-success":pt("success-70"),"text-warning":pt("warning-70"),"text-error":pt("error-70"),"text-info":pt("info-70"),"text-inverse":pt("black"),icon:pt("neutral-60"),"icon-subtle":pt("neutral-50"),"icon-strongest":pt("neutral-90"),"icon-primary":pt("primary-60"),"icon-primary-subtle":pt("primary-50"),"icon-primary-subtlest":pt("primary-40"),"icon-hover":pt("primary-70"),"icon-selected":pt("primary-60"),"icon-selected-hover":pt("primary-70"),"icon-disabled":pt("neutral-60"),"icon-disabled-subtle":pt("neutral-50"),"icon-selected-disabled":pt("neutral-50"),"icon-success":pt("success-60"),"icon-warning":pt("warning-50"),"icon-error":pt("error-60"),"icon-error-strong":pt("error-70"),"icon-info":pt("info-60"),"icon-inverse":pt("black"),"icon-primary-inverse":pt("primary-inverse"),border:pt("neutral-20"),"border-strong":pt("neutral-40"),"border-stronger":pt("neutral-60"),"border-primary":pt("primary-60"),"border-primary-subtle":pt("primary-50"),"border-hover":pt("primary-20"),"border-hover-strong":pt("primary-50"),"border-selected":pt("primary-60"),"border-selected-subtle":pt("primary-40"),"border-selected-subtlest":pt("primary-20"),"border-selected-hover":pt("primary-70"),"border-focus":pt("primary-50"),"border-focus-strong":pt("primary-60"),"border-disabled":pt("neutral-20"),"border-selected-disabled":pt("neutral-40"),"border-success":pt("success-50"),"border-warning":pt("warning-50"),"border-error":pt("error-50"),"border-error-focus":pt("error-50"),"border-error-focus-strong":pt("error-70"),"border-error-strong":pt("error-70"),"border-info":pt("info-50"),bg:pt("black"),"bg-strong":pt("neutral-10"),"bg-stronger":pt("neutral-20"),"bg-strongest":pt("neutral-20"),"bg-hover":pt("primary-20"),"bg-hover-strong":pt("primary-20"),"bg-hover-subtle":pt("primary-10"),"bg-hover-neutral":pt("neutral-10"),"bg-hover-neutral-strong":pt("neutral-20"),"bg-selected":pt("primary-20"),"bg-selected-hover":pt("primary-20"),"bg-selected-strong":pt("primary-20"),"bg-selected-stronger":pt("primary-40"),"bg-selected-strongest":pt("primary-60"),"bg-selected-strongest-hover":pt("primary-70"),"bg-disabled":pt("neutral-20"),"bg-selected-disabled":pt("neutral-20"),"bg-selected-stronger-disabled":pt("neutral-40"),"bg-success":pt("success-10"),"bg-success-hover":pt("success-20"),"bg-success-strong":pt("success-60"),"bg-success-strong-hover":pt("success-70"),"bg-warning":pt("warning-10"),"bg-warning-hover":pt("warning-20"),"bg-warning-strong":pt("warning-60"),"bg-warning-strong-hover":pt("warning-70"),"bg-info":pt("info-10"),"bg-info-hover":pt("info-20"),"bg-info-strong":pt("info-60"),"bg-info-strong-hover":pt("info-70"),"bg-error":pt("error-10"),"bg-error-hover":pt("error-20"),"bg-error-strong":pt("error-60"),"bg-error-strong-hover":pt("error-70"),"bg-inverse":pt("neutral-90"),"bg-inverse-subtle":pt("neutral-80"),"bg-inverse-subtler":pt("neutral-60"),"bg-inverse-subtlest":pt("neutral-50"),"bg-inverse-hover":pt("neutral-70"),"bg-primary":pt("primary-60"),"bg-primary-subtle":pt("primary-50"),"bg-primary-subtler":pt("primary-20"),"bg-primary-subtlest":pt("primary-10"),"bg-available":"#185339","bg-primary-hover":pt("primary-70"),"bg-primary-subtlest-hover":pt("primary-20"),"bg-primary-subtlest-selected":pt("primary-20"),"overlay-strong":"rgba(78, 78, 78, 0.80)","overlay-subtle":"rgba(78, 78, 78, 0.50)",hyperlink:pt("primary-60"),"hyperlink-hover":pt("primary-70"),"hyperlink-visited":pt("primary-70"),"hyperlink-inverse":pt("primary-inverse"),"focus-ring":pt("primary-60"),"focus-ring-inverse":pt("black")},$t={collections:{lifesg:ft,bookingsg:ft,rbs:ft,mylegacy:ft,ccube:ft,oneservice:ft,pa:vt,a11yplayground:Ft},defaultValue:"lifesg"},Ct={collections:{lifesg:xt,bookingsg:xt,rbs:xt,mylegacy:xt,ccube:xt,oneservice:xt,pa:xt,a11yplayground:wt},defaultValue:"lifesg"},Et=e=>r=>{var t;const n=r.theme,i="dark"===(null==n?void 0:n.colourMode),a=rt(i?Ct:$t,null==n?void 0:n.colourScheme),s=i?"semanticColourDark":"semanticColour",o=null===(t=null==n?void 0:n.overrides)||void 0===t?void 0:t[s],l=o?et(a,e,o):a[e];return"function"==typeof l?l(r):l},Dt={text:Et("text"),"text-subtle":Et("text-subtle"),"text-subtler":Et("text-subtler"),"text-subtlest":Et("text-subtlest"),"text-primary":Et("text-primary"),"text-hover":Et("text-hover"),"text-selected":Et("text-selected"),"text-selected-hover":Et("text-selected-hover"),"text-disabled":Et("text-disabled"),"text-disabled-subtle":Et("text-disabled-subtle"),"text-disabled-subtlest":Et("text-disabled-subtlest"),"text-selected-disabled":Et("text-selected-disabled"),"text-success":Et("text-success"),"text-warning":Et("text-warning"),"text-error":Et("text-error"),"text-info":Et("text-info"),"text-inverse":Et("text-inverse"),icon:Et("icon"),"icon-subtle":Et("icon-subtle"),"icon-strongest":Et("icon-strongest"),"icon-primary":Et("icon-primary"),"icon-primary-subtle":Et("icon-primary-subtle"),"icon-primary-subtlest":Et("icon-primary-subtlest"),"icon-hover":Et("icon-hover"),"icon-selected":Et("icon-selected"),"icon-selected-hover":Et("icon-selected-hover"),"icon-disabled":Et("icon-disabled"),"icon-disabled-subtle":Et("icon-disabled-subtle"),"icon-selected-disabled":Et("icon-selected-disabled"),"icon-success":Et("icon-success"),"icon-warning":Et("icon-warning"),"icon-error":Et("icon-error"),"icon-error-strong":Et("icon-error-strong"),"icon-info":Et("icon-info"),"icon-inverse":Et("icon-inverse"),"icon-primary-inverse":Et("icon-primary-inverse"),border:Et("border"),"border-strong":Et("border-strong"),"border-stronger":Et("border-stronger"),"border-primary":Et("border-primary"),"border-primary-subtle":Et("border-primary-subtle"),"border-hover":Et("border-hover"),"border-hover-strong":Et("border-hover-strong"),"border-selected":Et("border-selected"),"border-selected-subtle":Et("border-selected-subtle"),"border-selected-subtlest":Et("border-selected-subtlest"),"border-selected-hover":Et("border-selected-hover"),"border-focus":Et("border-focus"),"border-focus-strong":Et("border-focus-strong"),"border-disabled":Et("border-disabled"),"border-selected-disabled":Et("border-selected-disabled"),"border-success":Et("border-success"),"border-warning":Et("border-warning"),"border-error":Et("border-error"),"border-error-focus":Et("border-error-focus"),"border-error-focus-strong":Et("border-error-focus-strong"),"border-error-strong":Et("border-error-strong"),"border-info":Et("border-info"),bg:Et("bg"),"bg-strong":Et("bg-strong"),"bg-stronger":Et("bg-stronger"),"bg-strongest":Et("bg-strongest"),"bg-hover":Et("bg-hover"),"bg-hover-strong":Et("bg-hover-strong"),"bg-hover-subtle":Et("bg-hover-subtle"),"bg-hover-neutral":Et("bg-hover-neutral"),"bg-hover-neutral-strong":Et("bg-hover-neutral-strong"),"bg-selected":Et("bg-selected"),"bg-selected-hover":Et("bg-selected-hover"),"bg-selected-strong":Et("bg-selected-strong"),"bg-selected-stronger":Et("bg-selected-stronger"),"bg-selected-strongest":Et("bg-selected-strongest"),"bg-selected-strongest-hover":Et("bg-selected-strongest-hover"),"bg-disabled":Et("bg-disabled"),"bg-selected-disabled":Et("bg-selected-disabled"),"bg-selected-stronger-disabled":Et("bg-selected-stronger-disabled"),"bg-success":Et("bg-success"),"bg-success-hover":Et("bg-success-hover"),"bg-success-strong":Et("bg-success-strong"),"bg-success-strong-hover":Et("bg-success-strong-hover"),"bg-warning":Et("bg-warning"),"bg-warning-hover":Et("bg-warning-hover"),"bg-warning-strong":Et("bg-warning-strong"),"bg-warning-strong-hover":Et("bg-warning-strong-hover"),"bg-info":Et("bg-info"),"bg-info-hover":Et("bg-info-hover"),"bg-info-strong":Et("bg-info-strong"),"bg-info-strong-hover":Et("bg-info-strong-hover"),"bg-error":Et("bg-error"),"bg-error-hover":Et("bg-error-hover"),"bg-error-strong":Et("bg-error-strong"),"bg-error-strong-hover":Et("bg-error-strong-hover"),"bg-inverse":Et("bg-inverse"),"bg-inverse-subtle":Et("bg-inverse-subtle"),"bg-inverse-subtler":Et("bg-inverse-subtler"),"bg-inverse-subtlest":Et("bg-inverse-subtlest"),"bg-inverse-hover":Et("bg-inverse-hover"),"bg-primary":Et("bg-primary"),"bg-primary-subtle":Et("bg-primary-subtle"),"bg-primary-subtler":Et("bg-primary-subtler"),"bg-primary-subtlest":Et("bg-primary-subtlest"),"bg-available":Et("bg-available"),"bg-primary-hover":Et("bg-primary-hover"),"bg-primary-subtlest-hover":Et("bg-primary-subtlest-hover"),"bg-primary-subtlest-selected":Et("bg-primary-subtlest-selected"),"overlay-strong":Et("overlay-strong"),"overlay-subtle":Et("overlay-subtle"),hyperlink:Et("hyperlink"),"hyperlink-hover":Et("hyperlink-hover"),"hyperlink-visited":Et("hyperlink-visited"),"hyperlink-inverse":Et("hyperlink-inverse"),"focus-ring":Et("focus-ring"),"focus-ring-inverse":Et("focus-ring-inverse")},Bt={collections:{default:{solid:e=>r=>{var n,i,a;const{thickness:s,radius:o,colour:l}=e||{},d=null!==(n="function"==typeof s?s(r):s)&&void 0!==n?n:it["width-010"](r),c=null!==(i="function"==typeof o?o(r):o)&&void 0!==i?i:0,u=null!==(a="function"==typeof l?l(r):l)&&void 0!==a?a:Dt.border(r),g=it.solid;return t`
            border: ${d} ${g} ${u};
            border-radius: ${c};
        `},"dashed-default":e=>r=>{var n,i,a;const{thickness:s,radius:o,colour:l}=e||{},d=null!==(n="function"==typeof s?s(r):s)&&void 0!==n?n:it["width-010"](r),c=null!==(i="function"==typeof o?o(r):o)&&void 0!==i?i:0,u=null!==(a="function"==typeof l?l(r):l)&&void 0!==a?a:Dt.border(r),g=encodeURIComponent(`<svg width='100%' height='100%' xmlns='http://www.w3.org/2000/svg'><rect width='100%' height='100%' fill='none' rx='${c}' ry='${c}' stroke='${u}' stroke-width='${d}' stroke-dasharray='4, 8' stroke-dashoffset='0' stroke-linecap='square'/></svg>`);return t`
            background-image: url("data:image/svg+xml,${g}");
            border-radius: ${c};
        `}}},defaultValue:"default"},At=e=>1===e.length&&"theme"in e[0],kt=e=>(...r)=>t=>{const n=At(r)?[]:r,i=At(r)?r[0]:t,a=i.theme;return(0,rt(Bt,null==a?void 0:a.borderScheme)[e])(...n)(i)},St={solid:kt("solid"),"dashed-default":kt("dashed-default")},Mt={collections:{default:{"xxs-min":0,"xxs-max":320,"xs-min":321,"xs-max":375,"sm-min":376,"sm-max":420,"md-min":421,"md-max":767,"lg-min":768,"lg-max":1023,"xl-min":1024,"xl-max":1440,"xxl-min":1441,"xxs-column":8,"xs-column":8,"sm-column":8,"md-column":8,"lg-column":12,"xl-column":12,"xxl-column":12,"xxs-gutter":16,"xs-gutter":16,"sm-gutter":16,"md-gutter":16,"lg-gutter":32,"xl-gutter":32,"xxl-gutter":32,"xxs-margin":24,"xs-margin":24,"sm-margin":24,"md-margin":24,"lg-margin":48,"xl-margin":48,"xxl-margin":48}},defaultValue:"default"},zt=e=>r=>{var t;const n=r.theme,i=rt(Mt,null==n?void 0:n.breakpointScheme);let a;return a=(null===(t=null==n?void 0:n.overrides)||void 0===t?void 0:t.breakpoint)?et(i,e,n.overrides.breakpoint):i[e],a},_t={"xxs-min":zt("xxs-min"),"xxs-max":zt("xxs-max"),"xs-min":zt("xs-min"),"xs-max":zt("xs-max"),"sm-min":zt("sm-min"),"sm-max":zt("sm-max"),"md-min":zt("md-min"),"md-max":zt("md-max"),"lg-min":zt("lg-min"),"lg-max":zt("lg-max"),"xl-min":zt("xl-min"),"xl-max":zt("xl-max"),"xxl-min":zt("xxl-min"),"xxs-column":zt("xxs-column"),"xs-column":zt("xs-column"),"sm-column":zt("sm-column"),"md-column":zt("md-column"),"lg-column":zt("lg-column"),"xl-column":zt("xl-column"),"xxl-column":zt("xxl-column"),"xxs-gutter":zt("xxs-gutter"),"xs-gutter":zt("xs-gutter"),"sm-gutter":zt("sm-gutter"),"md-gutter":zt("md-gutter"),"lg-gutter":zt("lg-gutter"),"xl-gutter":zt("xl-gutter"),"xxl-gutter":zt("xxl-gutter"),"xxs-margin":zt("xxs-margin"),"xs-margin":zt("xs-margin"),"sm-margin":zt("sm-margin"),"md-margin":zt("md-margin"),"lg-margin":zt("lg-margin"),"xl-margin":zt("xl-margin"),"xxl-margin":zt("xxl-margin")},Ot=e=>("max-width"===e?["xxs","xs","sm","md","lg","xl"]:["xxs","xs","sm","md","lg","xl","xxl"]).reduce(((r,t)=>(r[t]=((e,r)=>{const t=_t["max-width"===e?`${r}-max`:`${r}-min`];return r=>{const n=t(r);return`@media screen and (${e}: ${n}px)`}})(e,t),r)),{}),jt={MaxWidth:Ot("max-width"),MinWidth:Ot("min-width")},Wt={collections:{default:{"heading-size-xxl":"3rem","heading-size-xl":"2.5rem","heading-size-lg":"2rem","heading-size-md":"1.625rem","heading-size-sm":"1.375rem","heading-size-xs":"1.125rem","heading-lh-xxl":"3.5rem","heading-lh-xl":"3rem","heading-lh-lg":"2.5rem","heading-lh-md":"2.25rem","heading-lh-sm":"1.75rem","heading-lh-xs":"1.625rem","heading-ls-xxl":"-0.056rem","heading-ls-xl":"-0.032rem","heading-ls-lg":"-0.032rem","heading-ls-md":"0rem","heading-ls-sm":"0rem","heading-ls-xs":"0rem","weight-light":"300","weight-regular":"400","weight-semibold":"600","weight-bold":"700","font-family":"Open Sans","body-size-baseline":"1.125rem","body-size-md":"1rem","body-size-sm":"0.875rem","body-size-xs":"0.75rem","body-lh-baseline":"1.625rem","body-lh-md":"1.5rem","body-lh-sm":"1.625rem","body-lh-xs":"1.25rem","body-ls-baseline":"0rem","body-ls-md":"0.014rem","body-ls-sm":"0.012rem","body-ls-xs":"0.012rem","form-label-size":"1rem","form-description-size":"0.875rem","form-label-lh":"1.5rem","form-description-lh":"1.6rem","form-label-ls":"0.014rem","form-description-ls":"0.012rem"},bookingsg:{"heading-size-xxl":"3rem","heading-size-xl":"2.5rem","heading-size-lg":"2rem","heading-size-md":"1.625rem","heading-size-sm":"1.375rem","heading-size-xs":"1.125rem","heading-lh-xxl":"3.5rem","heading-lh-xl":"3rem","heading-lh-lg":"2.5rem","heading-lh-md":"2.25rem","heading-lh-sm":"1.75rem","heading-lh-xs":"1.75rem","heading-ls-xxl":"-0.056rem","heading-ls-xl":"-0.032rem","heading-ls-lg":"-0.032rem","heading-ls-md":"0rem","heading-ls-sm":"0rem","heading-ls-xs":"0rem","weight-light":"300","weight-regular":"400","weight-semibold":"600","weight-bold":"700","font-family":"Plus Jakarta Sans","body-size-baseline":"1.125rem","body-size-md":"1rem","body-size-sm":"0.875rem","body-size-xs":"0.75rem","body-lh-baseline":"1.75rem","body-lh-md":"1.5rem","body-lh-sm":"1.6rem","body-lh-xs":"1.2rem","body-ls-baseline":"0rem","body-ls-md":"0.014rem","body-ls-sm":"0.012rem","body-ls-xs":"0.012rem","form-label-size":"1rem","form-description-size":"0.875rem","form-label-lh":"1.5rem","form-description-lh":"1.6rem","form-label-ls":"0.014rem","form-description-ls":"0.012rem"},pa:{"heading-size-xxl":"2.5rem","heading-size-xl":"2rem","heading-size-lg":"1.75rem","heading-size-md":"1.5rem","heading-size-sm":"1.25rem","heading-size-xs":"1rem","heading-lh-xxl":"3rem","heading-lh-xl":"2.5rem","heading-lh-lg":"2.25rem","heading-lh-md":"2rem","heading-lh-sm":"2rem","heading-lh-xs":"1.75rem","heading-ls-xxl":"-0.032rem","heading-ls-xl":"-0.032rem","heading-ls-lg":"0rem","heading-ls-md":"0rem","heading-ls-sm":"0rem","heading-ls-xs":"0rem","weight-light":"300","weight-regular":"400","weight-semibold":"600","weight-bold":"700","font-family":"Lato","body-size-baseline":"1rem","body-size-md":"0.875rem","body-size-sm":"0.75rem","body-size-xs":"0.625rem","body-lh-baseline":"1.75rem","body-lh-md":"1.5rem","body-lh-sm":"1.25rem","body-lh-xs":"1.25rem","body-ls-baseline":"0rem","body-ls-md":"0.014rem","body-ls-sm":"0.012rem","body-ls-xs":"0.012rem","form-label-size":"1rem","form-description-size":"0.875rem","form-label-lh":"1.5rem","form-description-lh":"1.6rem","form-label-ls":"0.014rem","form-description-ls":"0.012rem"},a11yplayground:{"heading-size-xxl":"3rem","heading-size-xl":"2.5rem","heading-size-lg":"2rem","heading-size-md":"1.625rem","heading-size-sm":"1.375rem","heading-size-xs":"1.125rem","heading-lh-xxl":"3.5rem","heading-lh-xl":"3rem","heading-lh-lg":"2.5rem","heading-lh-md":"2.25rem","heading-lh-sm":"1.75rem","heading-lh-xs":"1.625rem","heading-ls-xxl":"-0.056rem","heading-ls-xl":"-0.032rem","heading-ls-lg":"-0.032rem","heading-ls-md":"0rem","heading-ls-sm":"0rem","heading-ls-xs":"0rem","weight-light":"300","weight-regular":"400","weight-semibold":"600","weight-bold":"700","font-family":"Atkinson Hyperlegible Next","body-size-baseline":"1.125rem","body-size-md":"1rem","body-size-sm":"0.875rem","body-size-xs":"0.75rem","body-lh-baseline":"1.625rem","body-lh-md":"1.5rem","body-lh-sm":"1.625rem","body-lh-xs":"1.25rem","body-ls-baseline":"0rem","body-ls-md":"0.014rem","body-ls-sm":"0.012rem","body-ls-xs":"0.012rem","form-label-size":"1.125rem","form-description-size":"1rem","form-label-lh":"1.5rem","form-description-lh":"1.625rem","form-label-ls":"0rem","form-description-ls":"0.00875rem"}},defaultValue:"default"},Yt=e=>r=>{var t;const n=r.theme,i=rt(Wt,null==n?void 0:n.fontScheme);return(null===(t=null==n?void 0:n.overrides)||void 0===t?void 0:t.fontSpec)?et(i,e,n.overrides.fontSpec):i[e]},Lt={"heading-size-xxl":Yt("heading-size-xxl"),"heading-size-xl":Yt("heading-size-xl"),"heading-size-lg":Yt("heading-size-lg"),"heading-size-md":Yt("heading-size-md"),"heading-size-sm":Yt("heading-size-sm"),"heading-size-xs":Yt("heading-size-xs"),"heading-lh-xxl":Yt("heading-lh-xxl"),"heading-lh-xl":Yt("heading-lh-xl"),"heading-lh-lg":Yt("heading-lh-lg"),"heading-lh-md":Yt("heading-lh-md"),"heading-lh-sm":Yt("heading-lh-sm"),"heading-lh-xs":Yt("heading-lh-xs"),"heading-ls-xxl":Yt("heading-ls-xxl"),"heading-ls-xl":Yt("heading-ls-xl"),"heading-ls-lg":Yt("heading-ls-lg"),"heading-ls-md":Yt("heading-ls-md"),"heading-ls-sm":Yt("heading-ls-sm"),"heading-ls-xs":Yt("heading-ls-xs"),"weight-light":Yt("weight-light"),"weight-regular":Yt("weight-regular"),"weight-semibold":Yt("weight-semibold"),"weight-bold":Yt("weight-bold"),"font-family":Yt("font-family"),"body-size-baseline":Yt("body-size-baseline"),"body-size-md":Yt("body-size-md"),"body-size-sm":Yt("body-size-sm"),"body-size-xs":Yt("body-size-xs"),"body-lh-baseline":Yt("body-lh-baseline"),"body-lh-md":Yt("body-lh-md"),"body-lh-sm":Yt("body-lh-sm"),"body-lh-xs":Yt("body-lh-xs"),"body-ls-baseline":Yt("body-ls-baseline"),"body-ls-md":Yt("body-ls-md"),"body-ls-sm":Yt("body-ls-sm"),"body-ls-xs":Yt("body-ls-xs"),"form-label-size":Yt("form-label-size"),"form-description-size":Yt("form-description-size"),"form-label-lh":Yt("form-label-lh"),"form-description-lh":Yt("form-description-lh"),"form-label-ls":Yt("form-label-ls"),"form-description-ls":Yt("form-description-ls")},Tt=(e,r,n,i,a)=>{const{disableLigatures:s}=a||{};return t`
        font-family: ${Yt("font-family")};
        font-size: ${Yt(e)};
        font-weight: ${Yt(r)};
        line-height: ${Yt(n)};
        letter-spacing: ${Yt(i)};

        font-variant: ${s?"no-common-ligatures":"normal"};
    `},It=(e={})=>({"heading-xxl-light":Tt("heading-size-xxl","weight-light","heading-lh-xxl","heading-ls-xxl",e),"heading-xxl-regular":Tt("heading-size-xxl","weight-regular","heading-lh-xxl","heading-ls-xxl",e),"heading-xxl-semibold":Tt("heading-size-xxl","weight-semibold","heading-lh-xxl","heading-ls-xxl",e),"heading-xxl-bold":Tt("heading-size-xxl","weight-bold","heading-lh-xxl","heading-ls-xxl",e),"heading-xl-light":Tt("heading-size-xl","weight-light","heading-lh-xl","heading-ls-xl",e),"heading-xl-regular":Tt("heading-size-xl","weight-regular","heading-lh-xl","heading-ls-xl",e),"heading-xl-semibold":Tt("heading-size-xl","weight-semibold","heading-lh-xl","heading-ls-xl",e),"heading-xl-bold":Tt("heading-size-xl","weight-bold","heading-lh-xl","heading-ls-xl",e),"heading-lg-light":Tt("heading-size-lg","weight-light","heading-lh-lg","heading-ls-lg",e),"heading-lg-regular":Tt("heading-size-lg","weight-regular","heading-lh-lg","heading-ls-lg",e),"heading-lg-semibold":Tt("heading-size-lg","weight-semibold","heading-lh-lg","heading-ls-lg",e),"heading-lg-bold":Tt("heading-size-lg","weight-bold","heading-lh-lg","heading-ls-lg",e),"heading-md-light":Tt("heading-size-md","weight-light","heading-lh-md","heading-ls-md",e),"heading-md-regular":Tt("heading-size-md","weight-regular","heading-lh-md","heading-ls-md",e),"heading-md-semibold":Tt("heading-size-md","weight-semibold","heading-lh-md","heading-ls-md",e),"heading-md-bold":Tt("heading-size-md","weight-bold","heading-lh-md","heading-ls-md",e),"heading-sm-light":Tt("heading-size-sm","weight-light","heading-lh-sm","heading-ls-sm",e),"heading-sm-regular":Tt("heading-size-sm","weight-regular","heading-lh-sm","heading-ls-sm",e),"heading-sm-semibold":Tt("heading-size-sm","weight-semibold","heading-lh-sm","heading-ls-sm",e),"heading-sm-bold":Tt("heading-size-sm","weight-bold","heading-lh-sm","heading-ls-sm",e),"heading-xs-light":Tt("heading-size-xs","weight-light","heading-lh-xs","heading-ls-xs",e),"heading-xs-regular":Tt("heading-size-xs","weight-regular","heading-lh-xs","heading-ls-xs",e),"heading-xs-semibold":Tt("heading-size-xs","weight-semibold","heading-lh-xs","heading-ls-xs",e),"heading-xs-bold":Tt("heading-size-xs","weight-bold","heading-lh-xs","heading-ls-xs",e),"body-baseline-light":Tt("body-size-baseline","weight-light","body-lh-baseline","body-ls-baseline",e),"body-baseline-regular":Tt("body-size-baseline","weight-regular","body-lh-baseline","body-ls-baseline",e),"body-baseline-semibold":Tt("body-size-baseline","weight-semibold","body-lh-baseline","body-ls-baseline",e),"body-baseline-bold":Tt("body-size-baseline","weight-bold","body-lh-baseline","body-ls-baseline",e),"body-md-light":Tt("body-size-md","weight-light","body-lh-md","body-ls-md",e),"body-md-regular":Tt("body-size-md","weight-regular","body-lh-md","body-ls-md",e),"body-md-semibold":Tt("body-size-md","weight-semibold","body-lh-md","body-ls-md",e),"body-md-bold":Tt("body-size-md","weight-bold","body-lh-md","body-ls-md",e),"body-sm-light":Tt("body-size-sm","weight-light","body-lh-sm","body-ls-sm",e),"body-sm-regular":Tt("body-size-sm","weight-regular","body-lh-sm","body-ls-sm",e),"body-sm-semibold":Tt("body-size-sm","weight-semibold","body-lh-sm","body-ls-sm",e),"body-sm-bold":Tt("body-size-sm","weight-bold","body-lh-sm","body-ls-sm",e),"body-xs-light":Tt("body-size-xs","weight-light","body-lh-xs","body-ls-xs",e),"body-xs-regular":Tt("body-size-xs","weight-regular","body-lh-xs","body-ls-xs",e),"body-xs-semibold":Tt("body-size-xs","weight-semibold","body-lh-xs","body-ls-xs",e),"body-xs-bold":Tt("body-size-xs","weight-bold","body-lh-xs","body-ls-xs",e),"form-label":Tt("form-label-size","weight-semibold","form-label-lh","form-label-ls",e),"form-description":Tt("form-description-size","weight-regular","form-description-lh","form-description-ls",e)}),Nt=It({disableLigatures:!0}),Ht={collections:{default:It(),bookingsg:Nt,pa:It({disableLigatures:!0}),a11yplayground:It({disableLigatures:!0})},defaultValue:"default"},Rt=e=>r=>{var t;const n=r.theme,i=rt(Ht,null==n?void 0:n.fontScheme),a=(null===(t=null==n?void 0:n.overrides)||void 0===t?void 0:t.font)?et(i,e,n.overrides.font):i[e];return"function"==typeof a?a(r):a},Pt={"heading-xxl-light":Rt("heading-xxl-light"),"heading-xxl-regular":Rt("heading-xxl-regular"),"heading-xxl-semibold":Rt("heading-xxl-semibold"),"heading-xxl-bold":Rt("heading-xxl-bold"),"heading-xl-light":Rt("heading-xl-light"),"heading-xl-regular":Rt("heading-xl-regular"),"heading-xl-semibold":Rt("heading-xl-semibold"),"heading-xl-bold":Rt("heading-xl-bold"),"heading-lg-light":Rt("heading-lg-light"),"heading-lg-regular":Rt("heading-lg-regular"),"heading-lg-semibold":Rt("heading-lg-semibold"),"heading-lg-bold":Rt("heading-lg-bold"),"heading-md-light":Rt("heading-md-light"),"heading-md-regular":Rt("heading-md-regular"),"heading-md-semibold":Rt("heading-md-semibold"),"heading-md-bold":Rt("heading-md-bold"),"heading-sm-light":Rt("heading-sm-light"),"heading-sm-regular":Rt("heading-sm-regular"),"heading-sm-semibold":Rt("heading-sm-semibold"),"heading-sm-bold":Rt("heading-sm-bold"),"heading-xs-light":Rt("heading-xs-light"),"heading-xs-regular":Rt("heading-xs-regular"),"heading-xs-semibold":Rt("heading-xs-semibold"),"heading-xs-bold":Rt("heading-xs-bold"),"body-baseline-light":Rt("body-baseline-light"),"body-baseline-regular":Rt("body-baseline-regular"),"body-baseline-semibold":Rt("body-baseline-semibold"),"body-baseline-bold":Rt("body-baseline-bold"),"body-md-light":Rt("body-md-light"),"body-md-regular":Rt("body-md-regular"),"body-md-semibold":Rt("body-md-semibold"),"body-md-bold":Rt("body-md-bold"),"body-sm-light":Rt("body-sm-light"),"body-sm-regular":Rt("body-sm-regular"),"body-sm-semibold":Rt("body-sm-semibold"),"body-sm-bold":Rt("body-sm-bold"),"body-xs-light":Rt("body-xs-light"),"body-xs-regular":Rt("body-xs-regular"),"body-xs-semibold":Rt("body-xs-semibold"),"body-xs-bold":Rt("body-xs-bold"),"form-label":Rt("form-label"),"form-description":Rt("form-description")},Vt={collections:{default:{"duration-150":"150ms","duration-250":"250ms","duration-350":"350ms","duration-500":"500ms","duration-800":"800ms","duration-1000":"1000ms","ease-default":"cubic-bezier(0.45, 0.05, 0.55, 0.95)","ease-standard":"cubic-bezier(0.86, 0, 0.07, 1)","ease-entrance":"cubic-bezier(0.18, 0.13, 0, 1)","ease-exit":"cubic-bezier(1, 0, 0.8, 0.85)"}},defaultValue:"default"},Ut=e=>r=>{var t;const n=r.theme,i=rt(Vt,null==n?void 0:n.motionScheme);return(null===(t=null==n?void 0:n.overrides)||void 0===t?void 0:t.motion)?et(i,e,n.overrides.motion):i[e]},Xt={"duration-150":Ut("duration-150"),"duration-250":Ut("duration-250"),"duration-350":Ut("duration-350"),"duration-500":Ut("duration-500"),"duration-800":Ut("duration-800"),"duration-1000":Ut("duration-1000"),"ease-default":Ut("ease-default"),"ease-standard":Ut("ease-standard"),"ease-entrance":Ut("ease-entrance"),"ease-exit":Ut("ease-exit")},Jt={collections:{default:{none:0,xs:2,sm:4,md:8,lg:12,full:9999}},defaultValue:"default"},Qt=e=>r=>{var t;const n=r.theme,i=rt(Jt,null==n?void 0:n.radiusScheme);return(null===(t=null==n?void 0:n.overrides)||void 0===t?void 0:t.radius)?`${et(i,e,n.overrides.radius)}px`:`${i[e]}px`},Zt={none:Qt("none"),xs:Qt("xs"),sm:Qt("sm"),md:Qt("md"),lg:Qt("lg"),full:Qt("full")},Gt={collections:{default:{"spacing-0":0,"spacing-4":4,"spacing-8":8,"spacing-12":12,"spacing-16":16,"spacing-20":20,"spacing-24":24,"spacing-32":32,"spacing-40":40,"spacing-48":48,"spacing-64":64,"spacing-72":72,"layout-xs":8,"layout-sm":16,"layout-md":24,"layout-lg":32,"layout-xl":48,"layout-xxl":64,"layout-xxxl":128}},defaultValue:"default"},Kt=e=>r=>{var t;const n=r.theme,i=rt(Gt,null==n?void 0:n.spacingScheme);return(null===(t=null==n?void 0:n.overrides)||void 0===t?void 0:t.spacing)?`${et(i,e,n.overrides.spacing)}px`:`${i[e]}px`},qt={"spacing-0":Kt("spacing-0"),"spacing-4":Kt("spacing-4"),"spacing-8":Kt("spacing-8"),"spacing-12":Kt("spacing-12"),"spacing-16":Kt("spacing-16"),"spacing-20":Kt("spacing-20"),"spacing-24":Kt("spacing-24"),"spacing-32":Kt("spacing-32"),"spacing-40":Kt("spacing-40"),"spacing-48":Kt("spacing-48"),"spacing-64":Kt("spacing-64"),"spacing-72":Kt("spacing-72"),"layout-xs":Kt("layout-xs"),"layout-sm":Kt("layout-sm"),"layout-md":Kt("layout-md"),"layout-lg":Kt("layout-lg"),"layout-xl":Kt("layout-xl"),"layout-xxl":Kt("layout-xxl"),"layout-xxxl":Kt("layout-xxxl")},en=(e,r)=>Object.assign(Object.assign({},e),{colourMode:r}),rn=Object.assign(Object.assign({},Dt),{Primitive:yt}),tn=Object.assign(Object.assign({},Pt),{Spec:Lt}),nn=Xt,an=Object.assign(Object.assign({},it),{Util:St}),sn=qt,on=Zt,ln=_t,dn=jt,cn={colourScheme:"lifesg",fontScheme:"default",motionScheme:"default",borderScheme:"default",spacingScheme:"default",radiusScheme:"default",breakpointScheme:"default",resourceScheme:"lifesg",_v2:{colorScheme:"base",textStyleScheme:"base",designTokenScheme:"base",resourceScheme:"base"}},un={colourScheme:"bookingsg",fontScheme:"bookingsg",motionScheme:"default",borderScheme:"default",spacingScheme:"default",radiusScheme:"default",breakpointScheme:"default",resourceScheme:"bookingsg",_v2:{colorScheme:"bookingsg",textStyleScheme:"base",designTokenScheme:"base",resourceScheme:"bookingsg"}},gn={colourScheme:"ccube",fontScheme:"default",motionScheme:"default",borderScheme:"default",spacingScheme:"default",radiusScheme:"default",breakpointScheme:"default",resourceScheme:"ccube",_v2:{colorScheme:"ccube",textStyleScheme:"base",designTokenScheme:"base",resourceScheme:"ccube"}},bn={colourScheme:"mylegacy",fontScheme:"default",motionScheme:"default",borderScheme:"default",spacingScheme:"default",radiusScheme:"default",breakpointScheme:"default",resourceScheme:"mylegacy",_v2:{colorScheme:"mylegacy",textStyleScheme:"base",designTokenScheme:"base",resourceScheme:"mylegacy"}},mn={colourScheme:"rbs",fontScheme:"default",motionScheme:"default",borderScheme:"default",spacingScheme:"default",radiusScheme:"default",breakpointScheme:"default",resourceScheme:"rbs",_v2:{colorScheme:"rbs",textStyleScheme:"base",designTokenScheme:"rbs",resourceScheme:"rbs"}},hn={colourScheme:"oneservice",fontScheme:"default",motionScheme:"default",borderScheme:"default",spacingScheme:"default",radiusScheme:"default",breakpointScheme:"default",resourceScheme:"oneservice"},pn={colourScheme:"pa",fontScheme:"pa",motionScheme:"default",borderScheme:"default",spacingScheme:"default",radiusScheme:"default",breakpointScheme:"default",resourceScheme:"pa",componentScheme:"pa"},yn={colourScheme:"a11yplayground",fontScheme:"a11yplayground",motionScheme:"default",borderScheme:"default",spacingScheme:"default",radiusScheme:"default",breakpointScheme:"default",resourceScheme:"a11yplayground",componentScheme:"default"};Object.assign(Object.assign({},cn),{light:en(cn,"light"),dark:en(cn,"dark")}),Object.assign(Object.assign({},un),{light:en(un,"light"),dark:en(un,"dark")}),Object.assign(Object.assign({},gn),{light:en(gn,"light"),dark:en(gn,"dark")}),Object.assign(Object.assign({},bn),{light:en(bn,"light"),dark:en(bn,"dark")}),Object.assign(Object.assign({},mn),{light:en(mn,"light"),dark:en(mn,"dark")}),Object.assign(Object.assign({},hn),{light:en(hn,"light"),dark:en(hn,"dark")}),Object.assign(Object.assign({},pn),{light:en(pn,"light"),dark:en(pn,"dark")}),Object.assign(Object.assign({},yn),{light:en(yn,"light"),dark:en(yn,"dark")});const fn=r.button`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: ${sn["spacing-24"]};
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
                background-color: ${rn["bg-hover-neutral"]};
            `}
    }
`,xn=l.forwardRef(((e,r)=>{var{children:t,focusHighlight:n=!0,focusOutline:i="none",type:s="button"}=e,o=w(e,["children","focusHighlight","focusOutline","type"]);return a(fn,Object.assign({ref:r,$outline:i,$highlight:n,type:s},o,{children:t}))})),vn={notCompress:6,compress:4},Fn=r.div`
    position: ${e=>e.$fixed?"sticky":"relative"};
    background-color: ${rn.bg};
    z-index: 30;
    top: 0;
    left: 0;
    right: 0;
    width: 100%;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
`,wn=r.nav`
    height: ${e=>e.$compress?vn.compress:vn.notCompress}rem;
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    position: relative;
    transition: ${nn["duration-350"]} ${nn["ease-standard"]};

    ${dn.MaxWidth.lg} {
        height: ${3.5}rem;
    }
`,$n=r.div`
    display: flex;
    height: 100%;
    margin-left: ${e=>e.$hideNavBranding?"0":"5rem"};
    flex: 1;
    justify-content: flex-end;

    ${dn.MaxWidth.lg} {
        margin-left: 0rem;
    }
`,Cn=r(xn)`
    display: none;

    ${dn.MaxWidth.lg} {
        display: flex;
        padding: 0 1.5rem;
        margin-right: -1.5rem;
    }
`,En=r(e)`
    height: 1.5rem;
    width: 1.5rem;
    color: ${rn.icon};
`,Dn=r.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    flex-shrink: 0;

    height: ${e=>e.$compress?1.5:2}rem;

    ${dn.MaxWidth.lg} {
        height: 1.5rem;
    }

    ${dn.MaxWidth.xxs} {
        height: 1.25rem;
    }
`,Bn=r.div`
    display: flex;
    background-color: ${rn.border};
    height: 100%;
    width: 2px;
    margin: 0 ${e=>e.$compress?1:1.5}rem;

    ${dn.MaxWidth.lg} {
        margin: 0 1rem;
    }

    ${dn.MaxWidth.sm} {
        margin: 0 0.75rem;
    }
`,An=r.div`
    position: relative;

    ${e=>{const{$xxlStart:r,$xxlSpan:n,$xlStart:i,$xlSpan:a,$lgStart:s,$lgSpan:o,$mdStart:l,$mdSpan:d,$smStart:c,$smSpan:u,$xsStart:g,$xsSpan:b,$xxsStart:m,$xxsSpan:h}=e;return t`
            grid-column: ${r||"auto"} / span ${n||1};

            ${jt.MaxWidth.xl} {
                grid-column: ${i||"auto"} / span ${a||1};
            }

            ${jt.MaxWidth.lg} {
                grid-column: ${s||"auto"} / span ${o||1};
            }

            ${jt.MaxWidth.md} {
                grid-column: ${l||"auto"} / span ${d||1};
            }

            ${jt.MaxWidth.sm} {
                grid-column: ${c||"auto"} / span ${u||1};
            }

            ${jt.MaxWidth.xs} {
                grid-column: ${g||"auto"} / span ${b||1};
            }

            ${jt.MaxWidth.xxs} {
                grid-column: ${m||"auto"} / span ${h||1};
            }
        `}}
`,kn=l.forwardRef(((e,r)=>{const t=n(),{xxlCols:i,xlCols:s,lgCols:o,mdCols:l,smCols:d,xsCols:c,xxsCols:u}=e,g=w(e,["xxlCols","xlCols","lgCols","mdCols","smCols","xsCols","xxsCols"]),b=(e,r,t)=>{if(!e)return{start:void 0,span:void 0};if("development"===process.env.NODE_ENV&&("number"==typeof e&&e>r?console.warn(`Warning: ${t}Cols exceeds maximum (${r}): ${e}`):Array.isArray(e)&&(e[0]>r+1||e[1]>r+1)&&console.warn(`Warning: ${t}Cols array exceeds maximum (${r}): [${e[0]}, ${e[1]}]`)),Array.isArray(e)){const[t,n]=e;if(-1===n)return{start:t,span:r-t+1};return{start:t,span:Math.min(n-t,r)}}return{start:void 0,span:Math.min(e,r)}};return a(An,Object.assign({ref:r},(()=>{const e=_t["xxl-column"]({theme:t}),r=_t["xl-column"]({theme:t}),n=_t["lg-column"]({theme:t}),a=_t["md-column"]({theme:t}),g=_t["sm-column"]({theme:t}),m=_t["xs-column"]({theme:t}),h=_t["xxs-column"]({theme:t}),p=b(i||s||o||l||d||c||u,e,"xxl"),y=b(s||o||l||d||c||u,r,"xl"),f=b(o||l||d||c||u,n,"lg"),x=b(l||d||c||u,a,"md"),v=b(d||c||u,g,"sm"),F=b(c||u,m,"xs"),w=b(u,h,"xxs");return{$xxlStart:p.start,$xxlSpan:p.span,$xlStart:y.start,$xlSpan:y.span,$lgStart:f.start,$lgSpan:f.span,$mdStart:x.start,$mdSpan:x.span,$smStart:v.start,$smSpan:v.span,$xsStart:F.start,$xsSpan:F.span,$xxsStart:w.start,$xxsSpan:w.span}})(),g))})),Sn=r.div`
    flex-grow: 1;
    margin: 0 auto;
    position: relative;
    width: auto;
    height: auto;

    ${e=>e.$stretch?t`
                padding: 0 ${ln["xxl-margin"]}px;
            `:t`
                padding: 0 ${ln["xxl-margin"]}px;
                max-width: 1440px;

                ${dn.MaxWidth.xl} {
                    padding: 0 ${ln["xl-margin"]}px;
                }

                ${dn.MaxWidth.lg} {
                    padding: 0 ${ln["lg-margin"]}px;
                }

                ${dn.MaxWidth.md} {
                    padding: 0 ${ln["md-margin"]}px;
                }

                ${dn.MaxWidth.sm} {
                    padding: 0 ${ln["sm-margin"]}px;
                }

                ${dn.MaxWidth.xs} {
                    padding: 0 ${ln["xs-margin"]}px;
                }

                ${dn.MaxWidth.xxs} {
                    padding: 0 ${ln["xxs-margin"]}px;
                }
            `}

    ${e=>{switch(e.$type){case"grid":return t`
                    column-gap: ${ln["xxl-gutter"]}px;
                    display: grid;
                    grid-template-columns: repeat(
                        ${ln["xxl-column"]},
                        minmax(0, 1fr)
                    );

                    ${dn.MaxWidth.xl} {
                        column-gap: ${ln["xl-gutter"]}px;
                        grid-template-columns: repeat(
                            ${ln["xl-column"]},
                            minmax(0, 1fr)
                        );
                    }

                    ${dn.MaxWidth.lg} {
                        column-gap: ${ln["lg-gutter"]}px;
                        grid-template-columns: repeat(
                            ${ln["lg-column"]},
                            minmax(0, 1fr)
                        );
                    }

                    ${dn.MaxWidth.md} {
                        column-gap: ${ln["md-gutter"]}px;
                        grid-template-columns: repeat(
                            ${ln["md-column"]},
                            minmax(0, 1fr)
                        );
                    }

                    ${dn.MaxWidth.sm} {
                        column-gap: ${ln["sm-gutter"]}px;
                        grid-template-columns: repeat(
                            ${ln["sm-column"]},
                            minmax(0, 1fr)
                        );
                    }

                    ${dn.MaxWidth.xs} {
                        column-gap: ${ln["xs-gutter"]}px;
                        grid-template-columns: repeat(
                            ${ln["xs-column"]},
                            minmax(0, 1fr)
                        );
                    }

                    ${dn.MaxWidth.xxs} {
                        column-gap: ${ln["xxs-gutter"]}px;
                        grid-template-columns: repeat(
                            ${ln["xxs-column"]},
                            minmax(0, 1fr)
                        );
                    }
                `;case"flex-column":return t`
                    display: flex;
                    flex-direction: column;
                `;default:return t`
                    display: flex;
                `}}}
`,Mn=l.forwardRef(((e,r)=>{const{children:t,"data-testid":n="container",type:i="flex",stretch:s=!1}=e,o=w(e,["children","data-testid","type","stretch"]);return a(Sn,Object.assign({ref:r,"data-testid":n,$type:i,$stretch:s},o,{children:t}))})),zn=l.forwardRef(((e,r)=>{const{children:t,"data-testid":n="section",stretch:i=!1}=e,s=w(e,["children","data-testid","stretch"]);return a(_n,Object.assign({ref:r,"data-testid":n,$stretch:i},s,{children:t}))})),_n=r.section`
    display: block;
    position: relative;
`,On=l.forwardRef(((e,r)=>{const{children:t,"data-testid":n="content",className:i,type:s="flex",stretch:o=!1}=e,l=w(e,["children","data-testid","className","type","stretch"]);return a(zn,Object.assign({ref:r,"data-testid":n,className:i,stretch:o},l,{children:a(Mn,{"data-testid":`${n}-container`,type:s,"data-id":"container",stretch:o,children:t})}))})),jn={Section:zn,Container:Mn,Content:On,ColDiv:kn},Wn=r.div`
    // matches Layout.Container
    ${e=>e.$stretch?t`
                --sgds-mainnav-padding-x: ${ln["xxl-margin"]}px;
                --sgds-mainnav-mobile-padding-x: ${ln["xxl-margin"]}px;
            `:t`
                --sgds-mainnav-max-width: 1440px;

                --sgds-mainnav-padding-x: ${ln["xxl-margin"]}px;
                --sgds-mainnav-mobile-padding-x: ${ln["xxl-margin"]}px;

                ${dn.MaxWidth.xl} {
                    --sgds-mainnav-padding-x: ${ln["xl-margin"]}px;
                    --sgds-mainnav-mobile-padding-x: ${ln["xl-margin"]}px;
                }

                ${dn.MaxWidth.lg} {
                    --sgds-mainnav-padding-x: ${ln["lg-margin"]}px;
                    --sgds-mainnav-mobile-padding-x: ${ln["lg-margin"]}px;
                }

                ${dn.MaxWidth.md} {
                    --sgds-mainnav-padding-x: ${ln["md-margin"]}px;
                    --sgds-mainnav-mobile-padding-x: ${ln["md-margin"]}px;
                }

                ${dn.MaxWidth.sm} {
                    --sgds-mainnav-padding-x: ${ln["sm-margin"]}px;
                    --sgds-mainnav-mobile-padding-x: ${ln["sm-margin"]}px;
                }

                ${dn.MaxWidth.xs} {
                    --sgds-mainnav-padding-x: ${ln["xs-margin"]}px;
                    --sgds-mainnav-mobile-padding-x: ${ln["xs-margin"]}px;
                }

                ${dn.MaxWidth.xxs} {
                    --sgds-mainnav-padding-x: ${ln["xxs-margin"]}px;
                    --sgds-mainnav-mobile-padding-x: ${ln["xxs-margin"]}px;
                }
            `}
`,Yn=({stretch:e=!1})=>{d((()=>{r()||t()}),[]);const r=()=>document.getElementById(Ln),t=()=>{if(!document.getElementById(Ln)){const e=document.createElement("script");e.id=Ln,e.type="module",e.src=Tn,document.head.appendChild(e)}};return a(Wn,{dangerouslySetInnerHTML:{__html:"<sgds-masthead></sgds-masthead>"},$stretch:e})},Ln="lifesg-ds-masthead-script",Tn="https://cdn.jsdelivr.net/npm/@govtechsg/sgds-web-component/Masthead/index.js";var In={exports:{}};In.exports=function(){var e=1e3,r=6e4,t=36e5,n="millisecond",i="second",a="minute",s="hour",o="day",l="week",d="month",c="quarter",u="year",g="date",b="Invalid Date",m=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,h=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,p={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(e){var r=["th","st","nd","rd"],t=e%100;return"["+e+(r[(t-20)%10]||r[t]||r[0])+"]"}},y=function(e,r,t){var n=String(e);return!n||n.length>=r?e:""+Array(r+1-n.length).join(t)+e},f={s:y,z:function(e){var r=-e.utcOffset(),t=Math.abs(r),n=Math.floor(t/60),i=t%60;return(r<=0?"+":"-")+y(n,2,"0")+":"+y(i,2,"0")},m:function e(r,t){if(r.date()<t.date())return-e(t,r);var n=12*(t.year()-r.year())+(t.month()-r.month()),i=r.clone().add(n,d),a=t-i<0,s=r.clone().add(n+(a?-1:1),d);return+(-(n+(t-i)/(a?i-s:s-i))||0)},a:function(e){return e<0?Math.ceil(e)||0:Math.floor(e)},p:function(e){return{M:d,y:u,w:l,d:o,D:g,h:s,m:a,s:i,ms:n,Q:c}[e]||String(e||"").toLowerCase().replace(/s$/,"")},u:function(e){return void 0===e}},x="en",v={};v[x]=p;var F="$isDayjsObject",w=function(e){return e instanceof D||!(!e||!e[F])},$=function e(r,t,n){var i;if(!r)return x;if("string"==typeof r){var a=r.toLowerCase();v[a]&&(i=a),t&&(v[a]=t,i=a);var s=r.split("-");if(!i&&s.length>1)return e(s[0])}else{var o=r.name;v[o]=r,i=o}return!n&&i&&(x=i),i||!n&&x},C=function(e,r){if(w(e))return e.clone();var t="object"==typeof r?r:{};return t.date=e,t.args=arguments,new D(t)},E=f;E.l=$,E.i=w,E.w=function(e,r){return C(e,{locale:r.$L,utc:r.$u,x:r.$x,$offset:r.$offset})};var D=function(){function p(e){this.$L=$(e.locale,null,!0),this.parse(e),this.$x=this.$x||e.x||{},this[F]=!0}var y=p.prototype;return y.parse=function(e){this.$d=function(e){var r=e.date,t=e.utc;if(null===r)return new Date(NaN);if(E.u(r))return new Date;if(r instanceof Date)return new Date(r);if("string"==typeof r&&!/Z$/i.test(r)){var n=r.match(m);if(n){var i=n[2]-1||0,a=(n[7]||"0").substring(0,3);return t?new Date(Date.UTC(n[1],i,n[3]||1,n[4]||0,n[5]||0,n[6]||0,a)):new Date(n[1],i,n[3]||1,n[4]||0,n[5]||0,n[6]||0,a)}}return new Date(r)}(e),this.init()},y.init=function(){var e=this.$d;this.$y=e.getFullYear(),this.$M=e.getMonth(),this.$D=e.getDate(),this.$W=e.getDay(),this.$H=e.getHours(),this.$m=e.getMinutes(),this.$s=e.getSeconds(),this.$ms=e.getMilliseconds()},y.$utils=function(){return E},y.isValid=function(){return!(this.$d.toString()===b)},y.isSame=function(e,r){var t=C(e);return this.startOf(r)<=t&&t<=this.endOf(r)},y.isAfter=function(e,r){return C(e)<this.startOf(r)},y.isBefore=function(e,r){return this.endOf(r)<C(e)},y.$g=function(e,r,t){return E.u(e)?this[r]:this.set(t,e)},y.unix=function(){return Math.floor(this.valueOf()/1e3)},y.valueOf=function(){return this.$d.getTime()},y.startOf=function(e,r){var t=this,n=!!E.u(r)||r,c=E.p(e),b=function(e,r){var i=E.w(t.$u?Date.UTC(t.$y,r,e):new Date(t.$y,r,e),t);return n?i:i.endOf(o)},m=function(e,r){return E.w(t.toDate()[e].apply(t.toDate("s"),(n?[0,0,0,0]:[23,59,59,999]).slice(r)),t)},h=this.$W,p=this.$M,y=this.$D,f="set"+(this.$u?"UTC":"");switch(c){case u:return n?b(1,0):b(31,11);case d:return n?b(1,p):b(0,p+1);case l:var x=this.$locale().weekStart||0,v=(h<x?h+7:h)-x;return b(n?y-v:y+(6-v),p);case o:case g:return m(f+"Hours",0);case s:return m(f+"Minutes",1);case a:return m(f+"Seconds",2);case i:return m(f+"Milliseconds",3);default:return this.clone()}},y.endOf=function(e){return this.startOf(e,!1)},y.$set=function(e,r){var t,l=E.p(e),c="set"+(this.$u?"UTC":""),b=(t={},t[o]=c+"Date",t[g]=c+"Date",t[d]=c+"Month",t[u]=c+"FullYear",t[s]=c+"Hours",t[a]=c+"Minutes",t[i]=c+"Seconds",t[n]=c+"Milliseconds",t)[l],m=l===o?this.$D+(r-this.$W):r;if(l===d||l===u){var h=this.clone().set(g,1);h.$d[b](m),h.init(),this.$d=h.set(g,Math.min(this.$D,h.daysInMonth())).$d}else b&&this.$d[b](m);return this.init(),this},y.set=function(e,r){return this.clone().$set(e,r)},y.get=function(e){return this[E.p(e)]()},y.add=function(n,c){var g,b=this;n=Number(n);var m=E.p(c),h=function(e){var r=C(b);return E.w(r.date(r.date()+Math.round(e*n)),b)};if(m===d)return this.set(d,this.$M+n);if(m===u)return this.set(u,this.$y+n);if(m===o)return h(1);if(m===l)return h(7);var p=(g={},g[a]=r,g[s]=t,g[i]=e,g)[m]||1,y=this.$d.getTime()+n*p;return E.w(y,this)},y.subtract=function(e,r){return this.add(-1*e,r)},y.format=function(e){var r=this,t=this.$locale();if(!this.isValid())return t.invalidDate||b;var n=e||"YYYY-MM-DDTHH:mm:ssZ",i=E.z(this),a=this.$H,s=this.$m,o=this.$M,l=t.weekdays,d=t.months,c=t.meridiem,u=function(e,t,i,a){return e&&(e[t]||e(r,n))||i[t].slice(0,a)},g=function(e){return E.s(a%12||12,e,"0")},m=c||function(e,r,t){var n=e<12?"AM":"PM";return t?n.toLowerCase():n};return n.replace(h,(function(e,n){return n||function(e){switch(e){case"YY":return String(r.$y).slice(-2);case"YYYY":return E.s(r.$y,4,"0");case"M":return o+1;case"MM":return E.s(o+1,2,"0");case"MMM":return u(t.monthsShort,o,d,3);case"MMMM":return u(d,o);case"D":return r.$D;case"DD":return E.s(r.$D,2,"0");case"d":return String(r.$W);case"dd":return u(t.weekdaysMin,r.$W,l,2);case"ddd":return u(t.weekdaysShort,r.$W,l,3);case"dddd":return l[r.$W];case"H":return String(a);case"HH":return E.s(a,2,"0");case"h":return g(1);case"hh":return g(2);case"a":return m(a,s,!0);case"A":return m(a,s,!1);case"m":return String(s);case"mm":return E.s(s,2,"0");case"s":return String(r.$s);case"ss":return E.s(r.$s,2,"0");case"SSS":return E.s(r.$ms,3,"0");case"Z":return i}return null}(e)||i.replace(":","")}))},y.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},y.diff=function(n,g,b){var m,h=this,p=E.p(g),y=C(n),f=(y.utcOffset()-this.utcOffset())*r,x=this-y,v=function(){return E.m(h,y)};switch(p){case u:m=v()/12;break;case d:m=v();break;case c:m=v()/3;break;case l:m=(x-f)/6048e5;break;case o:m=(x-f)/864e5;break;case s:m=x/t;break;case a:m=x/r;break;case i:m=x/e;break;default:m=x}return b?m:E.a(m)},y.daysInMonth=function(){return this.endOf(d).$D},y.$locale=function(){return v[this.$L]},y.locale=function(e,r){if(!e)return this.$L;var t=this.clone(),n=$(e,r,!0);return n&&(t.$L=n),t},y.clone=function(){return E.w(this.$d,this)},y.toDate=function(){return new Date(this.valueOf())},y.toJSON=function(){return this.isValid()?this.toISOString():null},y.toISOString=function(){return this.$d.toISOString()},y.toString=function(){return this.$d.toUTCString()},p}(),B=D.prototype;return C.prototype=B,[["$ms",n],["$s",i],["$m",a],["$H",s],["$W",o],["$M",d],["$y",u],["$D",g]].forEach((function(e){B[e[1]]=function(r){return this.$g(r,e[0],e[1])}})),C.extend=function(e,r){return e.$i||(e(r,D,C),e.$i=!0),C},C.locale=$,C.isDayjs=w,C.unix=function(e){return C(1e3*e)},C.en=v[x],C.Ls=v,C.p={},C}();var Nn=C(In.exports),Hn={exports:{}};Hn.exports=function(){var e={LTS:"h:mm:ss A",LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D, YYYY",LLL:"MMMM D, YYYY h:mm A",LLLL:"dddd, MMMM D, YYYY h:mm A"},r=/(\[[^[]*\])|([-_:/.,()\s]+)|(A|a|YYYY|YY?|MM?M?M?|Do|DD?|hh?|HH?|mm?|ss?|S{1,3}|z|ZZ?)/g,t=/\d\d/,n=/\d\d?/,i=/\d*[^-_:/,()\s\d]+/,a={},s=function(e){return(e=+e)+(e>68?1900:2e3)},o=function(e){return function(r){this[e]=+r}},l=[/[+-]\d\d:?(\d\d)?|Z/,function(e){(this.zone||(this.zone={})).offset=function(e){if(!e)return 0;if("Z"===e)return 0;var r=e.match(/([+-]|\d\d)/g),t=60*r[1]+(+r[2]||0);return 0===t?0:"+"===r[0]?-t:t}(e)}],d=function(e){var r=a[e];return r&&(r.indexOf?r:r.s.concat(r.f))},c=function(e,r){var t,n=a.meridiem;if(n){for(var i=1;i<=24;i+=1)if(e.indexOf(n(i,0,r))>-1){t=i>12;break}}else t=e===(r?"pm":"PM");return t},u={A:[i,function(e){this.afternoon=c(e,!1)}],a:[i,function(e){this.afternoon=c(e,!0)}],S:[/\d/,function(e){this.milliseconds=100*+e}],SS:[t,function(e){this.milliseconds=10*+e}],SSS:[/\d{3}/,function(e){this.milliseconds=+e}],s:[n,o("seconds")],ss:[n,o("seconds")],m:[n,o("minutes")],mm:[n,o("minutes")],H:[n,o("hours")],h:[n,o("hours")],HH:[n,o("hours")],hh:[n,o("hours")],D:[n,o("day")],DD:[t,o("day")],Do:[i,function(e){var r=a.ordinal,t=e.match(/\d+/);if(this.day=t[0],r)for(var n=1;n<=31;n+=1)r(n).replace(/\[|\]/g,"")===e&&(this.day=n)}],M:[n,o("month")],MM:[t,o("month")],MMM:[i,function(e){var r=d("months"),t=(d("monthsShort")||r.map((function(e){return e.slice(0,3)}))).indexOf(e)+1;if(t<1)throw new Error;this.month=t%12||t}],MMMM:[i,function(e){var r=d("months").indexOf(e)+1;if(r<1)throw new Error;this.month=r%12||r}],Y:[/[+-]?\d+/,o("year")],YY:[t,function(e){this.year=s(e)}],YYYY:[/\d{4}/,o("year")],Z:l,ZZ:l};function g(t){var n,i;n=t,i=a&&a.formats;for(var s=(t=n.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g,(function(r,t,n){var a=n&&n.toUpperCase();return t||i[n]||e[n]||i[a].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g,(function(e,r,t){return r||t.slice(1)}))}))).match(r),o=s.length,l=0;l<o;l+=1){var d=s[l],c=u[d],g=c&&c[0],b=c&&c[1];s[l]=b?{regex:g,parser:b}:d.replace(/^\[|\]$/g,"")}return function(e){for(var r={},t=0,n=0;t<o;t+=1){var i=s[t];if("string"==typeof i)n+=i.length;else{var a=i.regex,l=i.parser,d=e.slice(n),c=a.exec(d)[0];l.call(r,c),e=e.replace(c,"")}}return function(e){var r=e.afternoon;if(void 0!==r){var t=e.hours;r?t<12&&(e.hours+=12):12===t&&(e.hours=0),delete e.afternoon}}(r),r}}return function(e,r,t){t.p.customParseFormat=!0,e&&e.parseTwoDigitYear&&(s=e.parseTwoDigitYear);var n=r.prototype,i=n.parse;n.parse=function(e){var r=e.date,n=e.utc,s=e.args;this.$u=n;var o=s[1];if("string"==typeof o){var l=!0===s[2],d=!0===s[3],c=l||d,u=s[2];d&&(u=s[2]),a=this.$locale(),!l&&u&&(a=t.Ls[u]),this.$d=function(e,r,t){try{if(["x","X"].indexOf(r)>-1)return new Date(("X"===r?1e3:1)*e);var n=g(r)(e),i=n.year,a=n.month,s=n.day,o=n.hours,l=n.minutes,d=n.seconds,c=n.milliseconds,u=n.zone,b=new Date,m=s||(i||a?1:b.getDate()),h=i||b.getFullYear(),p=0;i&&!a||(p=a>0?a-1:b.getMonth());var y=o||0,f=l||0,x=d||0,v=c||0;return u?new Date(Date.UTC(h,p,m,y,f,x,v+60*u.offset*1e3)):t?new Date(Date.UTC(h,p,m,y,f,x,v)):new Date(h,p,m,y,f,x,v)}catch(e){return new Date("")}}(r,o,n),this.init(),u&&!0!==u&&(this.$L=this.locale(u).$L),c&&r!=this.format(o)&&(this.$d=new Date("")),a={}}else if(o instanceof Array)for(var b=o.length,m=1;m<=b;m+=1){s[1]=o[m-1];var h=t.apply(this,s);if(h.isValid()){this.$d=h.$d,this.$L=h.$L,this.init();break}m===b&&(this.$d=new Date(""))}else i.call(this,e)}}}();var Rn=C(Hn.exports),Pn={exports:{}};Pn.exports=function(e,r,t){r.prototype.isBetween=function(e,r,n,i){var a=t(e),s=t(r),o="("===(i=i||"()")[0],l=")"===i[1];return(o?this.isAfter(a,n):!this.isBefore(a,n))&&(l?this.isBefore(s,n):!this.isAfter(s,n))||(o?this.isBefore(a,n):!this.isAfter(a,n))&&(l?this.isAfter(s,n):!this.isBefore(s,n))}};var Vn=C(Pn.exports),Un={exports:{}};Un.exports=function(e,r){r.prototype.isSameOrAfter=function(e,r){return this.isSame(e,r)||this.isAfter(e,r)}};var Xn=C(Un.exports),Jn={exports:{}};Jn.exports=function(e,r){r.prototype.isSameOrBefore=function(e,r){return this.isSame(e,r)||this.isBefore(e,r)}};var Qn,Zn,Gn,Kn=C(Jn.exports),qn={exports:{}},ei=C(qn.exports=(Qn={year:0,month:1,day:2,hour:3,minute:4,second:5},Zn={},function(e,r,t){var n,i=function(e,r,t){void 0===t&&(t={});var n=new Date(e),i=function(e,r){void 0===r&&(r={});var t=r.timeZoneName||"short",n=e+"|"+t,i=Zn[n];return i||(i=new Intl.DateTimeFormat("en-US",{hour12:!1,timeZone:e,year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit",timeZoneName:t}),Zn[n]=i),i}(r,t);return i.formatToParts(n)},a=function(e,r){for(var n=i(e,r),a=[],s=0;s<n.length;s+=1){var o=n[s],l=o.type,d=o.value,c=Qn[l];c>=0&&(a[c]=parseInt(d,10))}var u=a[3],g=24===u?0:u,b=a[0]+"-"+a[1]+"-"+a[2]+" "+g+":"+a[4]+":"+a[5]+":000",m=+e;return(t.utc(b).valueOf()-(m-=m%1e3))/6e4},s=r.prototype;s.tz=function(e,r){void 0===e&&(e=n);var i=this.utcOffset(),a=this.toDate(),s=a.toLocaleString("en-US",{timeZone:e}),o=Math.round((a-new Date(s))/1e3/60),l=t(s,{locale:this.$L}).$set("millisecond",this.$ms).utcOffset(15*-Math.round(a.getTimezoneOffset()/15)-o,!0);if(r){var d=l.utcOffset();l=l.add(i-d,"minute")}return l.$x.$timezone=e,l},s.offsetName=function(e){var r=this.$x.$timezone||t.tz.guess(),n=i(this.valueOf(),r,{timeZoneName:e}).find((function(e){return"timezonename"===e.type.toLowerCase()}));return n&&n.value};var o=s.startOf;s.startOf=function(e,r){if(!this.$x||!this.$x.$timezone)return o.call(this,e,r);var n=t(this.format("YYYY-MM-DD HH:mm:ss:SSS"),{locale:this.$L});return o.call(n,e,r).tz(this.$x.$timezone,!0)},t.tz=function(e,r,i){var s=i&&r,o=i||r||n,l=a(+t(),o);if("string"!=typeof e)return t(e).tz(o);var d=function(e,r,t){var n=e-60*r*1e3,i=a(n,t);if(r===i)return[n,r];var s=a(n-=60*(i-r)*1e3,t);return i===s?[n,i]:[e-60*Math.min(i,s)*1e3,Math.max(i,s)]}(t.utc(e,s).valueOf(),l,o),c=d[0],u=d[1],g=t(c).utcOffset(u);return g.$x.$timezone=o,g},t.tz.guess=function(){return Intl.DateTimeFormat().resolvedOptions().timeZone},t.tz.setDefault=function(e){n=e}}));Nn.extend(Vn),Nn.extend(Kn),Nn.extend(Xn),Nn.extend(Rn),Nn.extend(ei),function(e){e.generateDays=e=>{const r=e.startOf("month"),t=Nn(r).startOf("week");return ri(t).map((e=>ti(e)))},e.generateDaysForCurrentWeek=e=>{const r=e.startOf("week");return ti(r)},e.generateMonths=e=>{const r=[];for(let t=0;t<12;t++){const n=e.month(t);r.push(Nn(n))}return r},e.generateDecadeOfYears=e=>{const r=e.year(),t=10*Math.floor(r/10),n=e.year(t),i=[n.subtract(1,"year"),n];for(let e=1;e<11;e++)i.push(n.add(e,"year"));return i},e.getStartEndDecade=e=>{const r=10*Math.floor(+e.format("YYYY")/10);return{beginDecade:r,endDecade:+Nn(`${r+9}-01-01`).format("YYYY")}},e.convertTo12HourFormat=e=>{const r=Nn(e,"HH:mm");return r.isValid()?r.format("h:mm a"):""},e.isWithinRange=(e,r,t,n="day")=>!r&&!t||(r&&t?e.isBetween(r,t,n,"[]"):r?e.isSameOrAfter(r,n):e.isSameOrBefore(t,n)),e.isPreviousMonthWithinRange=(r,t)=>e.isWithinRange(r.subtract(1,"month"),t,void 0,"month"),e.isPreviousYearWithinRange=(r,t)=>e.isWithinRange(r.subtract(1,"year"),t,void 0,"year"),e.isPreviousDecadeWithinRange=(r,t)=>{const{beginDecade:n}=e.getStartEndDecade(r);return e.isWithinRange(r.year(n).subtract(1,"year"),t,void 0,"year")},e.isNextMonthWithinRange=(r,t)=>e.isWithinRange(r.add(1,"month"),void 0,t,"month"),e.isNextYearWithinRange=(r,t)=>e.isWithinRange(r.add(1,"year"),void 0,t,"year"),e.isNextDecadeWithinRange=(r,t)=>{const{endDecade:n}=e.getStartEndDecade(r);return e.isWithinRange(r.year(n).add(1,"year"),void 0,t,"year")},e.getWeekStartEnd=e=>({start:e.startOf("week").format("YYYY-MM-DD"),end:e.endOf("week").format("YYYY-MM-DD")}),e.getFixedRangeStartEnd=(e,r)=>({start:e.format("YYYY-MM-DD"),end:e.add(r-1,"day").format("YYYY-MM-DD")}),e.isDisabledDay=(r,t,n,i)=>{const a=e.isWithinRange(r,n?Nn(n):void 0,i?Nn(i):void 0),s=t&&t.includes(r.format("YYYY-MM-DD"));return!a||!!s}}(Gn||(Gn={}));const ri=e=>{const r=[e];for(let t=1;t<6;t++){const n=e.add(t,"week");r.push(n)}return r},ti=e=>{const r=[];for(let t=0;t<7;t++){const n=e.add(t,"day");r.push(n)}return r},ni=[1,3,5,7,8,10,12],ii=[4,6,9,11];var ai,si,oi,li;!function(e){e.clampDay=(r,t,n)=>{const i=parseInt(r),a=parseInt(t),s=parseInt(n);return 0==i?"1":ni.includes(a)?Math.min(i,31).toString():ii.includes(a)?Math.min(i,30).toString():2===a?e.isLeapYear(s)?Math.min(i,29).toString():Math.min(i,28).toString():r},e.clampMonth=e=>{const r=parseInt(e);return 0==r?"1":r>12?"12":e},e.isLeapYear=e=>e%4==0&&e%100!=0||e%400==0,e.getTimeDiffInMinutes=(e,r,t="HH:mm")=>{const n=Nn(e,t);return Nn(r,t).diff(n,"minute")},e.toDayjs=e=>e?Nn(e):Nn(),e.addMinutesToTime=(e,r,t="HH:mm")=>Nn(e,t).add(r,"minutes").format(t),e.isSame=(e,r,t="day")=>Nn(e).isSame(Nn(r),t)}(ai||(ai={})),function(e){e.isDateDisabled=(e,r)=>{const{disabledDates:t,minDate:n,maxDate:i}=r;return!!(e&&t&&t.length&&t.includes(e))||(!(!n||!Nn(e).isBefore(n,"day"))||!(!i||!Nn(e).isAfter(i,"day")))},e.sanitizeInput=e=>{if(e){if(Nn(e).isValid())return e}return""}}(si||(si={})),function(e){e.generate=()=>Math.random().toString(36).substring(2,9)}(oi||(oi={})),function(e){e.transformWithSpaces=(e,r)=>{const t="(.{"+r+"})";return e.replace(/[^\dA-Z]/gi,"").replace(new RegExp(t,"g"),"$1 ").trim()},e.padValue=(e,r)=>{if("0"===e)return r?e:e.padStart(2,"0");if(""===e)return e;return parseInt(e).toString().padStart(2,"0")},e.shouldTruncateToTwoLines=(e,r)=>{const t=Math.floor(r/9);return e.length>=2*t||1===e.split(" ").length&&e.length>t},e.truncateOneLine=(e,r,t,n,i=8)=>{let a=0;r>t&&(a=Math.floor((r-t)/i));const s=n+a;if(s<e.length){const r=Math.floor(s/2);return e.substring(0,r)+" ... "+e.substring(e.length-r,e.length)}return e},e.truncateTwoLines=(e,r,t,n=1.2)=>{const i=Math.floor(2*r/(.6*t))*(2/n);if(e.length<=i)return e;const a=Math.floor(.6*i),s=Math.floor(.2*i);return`${e.substring(0,a)}...${e.substring(e.length-s)}`},e.getTextWidth=(r,t)=>{if("undefined"==typeof document)return 0;const n=(e.getTextWidth.canvas||(e.getTextWidth.canvas=document.createElement("canvas"))).getContext("2d");n.font=t;return n.measureText(r).width},e.maskValue=(e,t)=>{if(!e)return e;const{maskRange:n,unmaskRange:i,maskChar:a="•",maskRegex:s,maskTransformer:o}=t;if(o)return o(e);if(s)return e.replace(s,a);if(n){const{startIndex:t,endIndex:i}=r(n[0],n[1]);return e.substring(0,t)+a.repeat(e.substring(t,i+1).length)+e.substring(i+1)}if(i){const{startIndex:t,endIndex:n}=r(i[0],i[1]);return a.repeat(e.substring(0,t).length)+e.substring(t,n+1)+a.repeat(e.substring(n+1).length)}return e};const r=(e,r)=>e<r?{startIndex:e,endIndex:r}:{startIndex:r,endIndex:e},t=new Intl.PluralRules("en",{type:"ordinal"}),n=new Map([["one","st"],["two","nd"],["few","rd"],["other","th"]]);e.formatOrdinal=e=>{const r=t.select(e);return`${e}${n.get(r)}`}}(li||(li={}));const di=r.div`
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
`,ci=r.div`
    position: absolute;
    left: 0;
    top: 0;
    background-color: ${e=>e.$stacked?rn["overlay-subtle"]:rn["overlay-strong"]};
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
`;var ui;!function(e){e.Ready="overlay-context-ready",e.Change="overlay-context-change"}(ui||(ui={}));const gi=({show:e=!1,rootId:r,onOverlayClick:t,children:n,backgroundOpacity:i,backgroundBlur:s=!0,disableTransition:o=!1,enableOverlayClick:g=!1,zIndex:b,id:h})=>{const[x,v]=c(null),[F,w]=c(),[$]=c((()=>oi.generate())),C=p(),E=u(),D=u(null),B=n&&l.cloneElement(n,{ref:D}),A=h?`lifesg-ds-overlay-root-${h}`:"lifesg-ds-overlay-root",k=null!=b?b:F?99999:99998;(e=>{const r=m();d((()=>{if(!r)return;const t={zIndex:e};r.events.emit(ui.Change,t)}),[r,e]),d((()=>{if(!r)return;const t=()=>{const t={zIndex:e};r.events.emit(ui.Change,t)};return null==r||r.events.on(ui.Ready,t),()=>null==r?void 0:r.events.off(ui.Ready,t)}),[r,e])})(k),d((()=>(_(),v(M()),()=>{Y(),j().length<1&&O("remove")})),[]),d((()=>{if(e){const e=z();S(e),W();const r=setTimeout((()=>{O("add")}),200);return()=>clearTimeout(r)}{Y();const e=setTimeout((()=>{j().length<1&&O("remove")}),200);return()=>clearTimeout(e)}}),[e]);const S=e=>{E.current=e,w(e)},M=()=>document&&r?document.getElementById(r):document?document.body:null,z=()=>j().length>0,_=()=>{if(!document.getElementById(mi)){const e=document.createElement("style");e.id=mi;const r=document.documentElement.clientWidth,t=window.innerWidth-r;e.innerHTML=`\n\t\t\t\t.${hi} {\n\t\t\t\t\toverflow: hidden;\n\t\t\t\t\tpadding-right: ${t}px !important;\n\t\t\t\t\t-ms-overflow-style: none;\n\t\t\t\t\tscrollbar-width: none;\n\t\t\t\t}\n\n\t\t\t\t.${hi}::-webkit-scrollbar {\n\t\t\t\t\tdisplay: none;\n\t\t\t\t}\n\t\t\t`,document.body.appendChild(e)}},O=e=>{const r=document.body.classList.contains(hi);"add"!==e||r?"remove"===e&&r&&document.body.classList.remove(hi):document.body.classList.add(hi)},j=()=>{const e=document.body.dataset.lifesgDsOverlayOrder;return e?e.split(","):[]},W=()=>{const e=j();document.body.dataset.lifesgDsOverlayOrder=[...e,$].join(",")},Y=()=>{const e=j();document.body.dataset.lifesgDsOverlayOrder=e.filter((e=>e!==$)).join(",")},L=e=>{var r;const n=null===(r=D.current)||void 0===r?void 0:r.firstChild;n&&n.contains(e.target)||t&&g&&(e.preventDefault(),t())};return x?f.createPortal(a(di,{id:A,"data-testid":A,$show:e,$zIndex:k,children:n&&a(y,{id:C,children:a(ci,{"data-testid":"overlay-wrapper",$show:e,$stacked:F,$backgroundBlur:s,$disableTransition:o,onClick:L,children:B})})}),x):null},bi=e=>a(h,{children:a(gi,Object.assign({},e))}),mi="lifesg-ds-overlay-stylesheet",hi="lifesg-ds-overlay-open",pi=r.a`
    display: flex;
    justify-content: center;
    height: 100%;

    img {
        width: auto;
        height: 100%;
        transition: ${nn["duration-150"]} ${nn["ease-default"]};
        object-fit: contain;
    }
`;const yi=({src:e,alt:r,className:t,"data-testid":n})=>a("img",{src:e,alt:r||"",className:t,"data-testid":n,onError:e=>{e.target.onerror=null,e.target.src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKAAAABQCAYAAACeXX40AAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAARTSURBVHgB7Z1tUuJAEIY7qMRYWnIE9wR6BD2Be5S9weoN1pusJ1iPwJ5guYH4GeNH2HkppgojYAIhbXrepwoJEMofPHZP9zQxkgJpmh5HUfTdHZ6624EQsiLOp7676+d5fp4kyeDda/5gNBr1siz76Q5/CCHr41ccx+dOyiEejAWcyHflDg+FkDWDiNjtdk8gYQdPTCIf5SON4ALe0cQ5idya78CZ+E8IaRgn4gki4JkQogCK3Y77wdRLtDiNnp6eRkKIEh0hRBEKSFShgEQVCkhUoYBEFQpIVKGARBUKSFShgEQVCkhUoYBEFQpIVNkUokqWZfLy8iJvb2/jx1tbWxLHsWxsbEgIcBpGCQh3e3srr6+vH16Lokh2dnbGN+swAioA+a6vrzERPPN1PP/w8CB5nsvu7q5YhmvAhoFciHzz5JsmTVNxGUosQwEbBmu+WWl3Ho+Pj6VkbSsUsGGqRjSka6Riq1DAhllGJkZAUhuocKtCAUltLNPfs9wTpIAL8M3hOtne3q50PhrTnY7dj4kCzgFrteFwKM/Pz1In3W53vNNRFvYBA+Xm5mYs4bzdilWAVJubn+8B7O3tlTqvzVDAGaAB7KVDAXB/f19rIYCU2uv1JEmSmUUJpMPrVdN1G+FecAGs+5B6i+0SpM79/X2pG/weyI57yIiCw3rUm4Z7wVMgyt3d3c3s1WEtiMiIqFUniIaQO1SYgqfALgVGo+aBVFx3URI6FHACoh4mUD4DRYnlrbGmoYATUPWWKTRwDtaIlncnmoQCyvuqtwwoVJCOyeoELyBkKpN6i2C9iFEpshrBC1h2OHQWEHeZogTvwVwgCVxARLBVdzmqFiUQD+/BbR17zW0jWAHx4deRQhE9yxYwfu3oz10l+lohWAHLSlMGRFE0sBfhhxumoyXeF3oxE6SAiHx1pz+k1nnj9pDODzcUwXusf/FoEcEJiKizruoVUbC4k+LlW7TW9F/BDJHgBFz3uqu4l4zHnxU6fuwrxPVgUAKi4bzuytNf8cAPNpRt0yByhthXDGYcC1EIVyNoCoxUVW3xYBwLQ6hVJqbbThAR0EejJlmmv+iHX0NaDwYhYB0N56bw68FQMC8gxMPar02EtB40LyBSbxurS7RmFg3HWsG0gG1KvbNo6x9PFcwKiOixzJjVV2K6pWMVkwL6atIC1ke3TArY9tRbpMxuSlsxJ2Abq94yWE3F5gS0+kFZ/R6KKQFRdFieMsbYlrXobkbAUJq31ka3zFyaAwKGsomPqrjuS4RowYsTEVX4xXSiCgUkqlBAogoFJKpQQKIKBSSqUECiCgUkqlBAogoFJKpAwIEQokO/k+f5pRCiQBRF/ShN02N38EcIaZjRaPStkyTJlYuCF0JIs1w49wbj/5TnTOxlWYYoeCSErJ+/cRwj8w7HVTAO3BMnjISkAS68fHjw4X+FujXhgbs7cyccCiMiqYeBu126TPsbS77pF/4DuxeyMpdnp3gAAAAASUVORK5CYII="}}),fi=({resources:e,onClick:r,"data-id":t,"data-testid":n="navbar-brand",type:i})=>a(pi,{role:"link",onClick:e=>{r&&r(e,i)},tabIndex:0,"data-id":t,"data-testid":n,$type:i,children:a(yi,{src:e.logoSrc,alt:e.brandName})}),xi=r.div`
    display: none;

    ${dn.MaxWidth.lg} {
        display: flex;
    }
`,vi=r.div`
    position: absolute;
    overflow-y: auto;
    overflow-x: hidden;
    height: 100vh;
    display: block;
    padding: 0 0 ${sn["spacing-16"]};
    background-color: ${rn.bg};
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);
    visibility: ${e=>e.$show?"visible":"hidden"};

    ${e=>e.$show?t`
            right: 0;
            transition: all 300ms ${nn["ease-entrance"]};
            transition-delay: 200ms;
        `:t`
        right: -100%;
        transition: all 300ms ${nn["ease-exit"]};
    `}
    ${e=>{const r=`${e.$viewHeight}px`||"1vh";return t`
            height: calc(${r} * 100);
        `}}

	${dn.MaxWidth.lg} {
        width: 75%;
    }

    ${dn.MaxWidth.sm} {
        width: 100%;
    }
`,Fi=r.div`
    display: flex;
    flex-direction: column;
`,wi=r.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;
    padding: ${sn["spacing-40"]} ${sn["spacing-20"]}
        ${sn["spacing-32"]};
`,$i=r(x)`
    height: 1.5rem;
    width: 1.5rem;
`,Ci=r(xn)`
    position: absolute;
    right: -${sn["spacing-4"]};
    color: ${rn.icon};

    :active,
    :focus {
        color: ${rn["icon-hover"]};
    }

    svg {
        height: 1.5rem;
        width: 1.5rem;
    }
`,Ei=l.forwardRef(((e,r)=>{const{show:t,resources:n={},children:i,hideNavBranding:l,onClose:u,onBrandClick:g}=e,[b,m]=c(0),{primary:h,secondary:p}=n;d((()=>(y(),window.addEventListener("resize",y),()=>{window.removeEventListener("resize",y)})),[]);const y=()=>{if(window){const e=.01*window.innerHeight;m(e)}};return a(xi,{ref:r,"data-testid":"drawer",children:a(vi,{$show:t,$viewHeight:b,children:s(Fi,{children:[s(wi,{children:[a(Dn,{"data-id":"drawer-brand-container",children:!l&&s(o,{children:[h&&a(fi,{resources:h,compress:!0,onClick:g,"data-id":"drawer-brand-primary","data-testid":"drawer__brand",type:"primary"}),p&&s(o,{children:[a(Bn,{}),a(fi,{resources:p,compress:!0,onClick:g,"data-id":"drawer-brand-secondary","data-testid":"drawer__brand-secondary",type:"secondary"})]})]})}),a(Ci,{onClick:u,focusHighlight:!1,"aria-label":"Close nav menu",children:a($i,{})})]}),i]})})})}));var Di=function(e,r,t,n){for(var i=e.length,a=t+(n?1:-1);n?a--:++a<i;)if(r(e[a],a,e))return a;return-1},Bi=ar;var Ai=function(e){var r=this.__data__,t=r.delete(e);return this.size=r.size,t};var ki=function(e){return this.__data__.get(e)};var Si=function(e){return this.__data__.has(e)},Mi=ar,zi=sr,_i=Dr;var Oi=function(e,r){var t=this.__data__;if(t instanceof Mi){var n=t.__data__;if(!zi||n.length<199)return n.push([e,r]),this.size=++t.size,this;t=this.__data__=new _i(n)}return t.set(e,r),this.size=t.size,this},ji=ar,Wi=function(){this.__data__=new Bi,this.size=0},Yi=Ai,Li=ki,Ti=Si,Ii=Oi;function Ni(e){var r=this.__data__=new ji(e);this.size=r.size}Ni.prototype.clear=Wi,Ni.prototype.delete=Yi,Ni.prototype.get=Li,Ni.prototype.has=Ti,Ni.prototype.set=Ii;var Hi=Ni;var Ri=Dr,Pi=function(e){return this.__data__.set(e,"__lodash_hash_undefined__"),this},Vi=function(e){return this.__data__.has(e)};function Ui(e){var r=-1,t=null==e?0:e.length;for(this.__data__=new Ri;++r<t;)this.add(e[r])}Ui.prototype.add=Ui.prototype.push=Pi,Ui.prototype.has=Vi;var Xi=function(e,r){return e.has(r)},Ji=Ui,Qi=function(e,r){for(var t=-1,n=null==e?0:e.length;++t<n;)if(r(e[t],t,e))return!0;return!1},Zi=Xi;var Gi=function(e,r,t,n,i,a){var s=1&t,o=e.length,l=r.length;if(o!=l&&!(s&&l>o))return!1;var d=a.get(e),c=a.get(r);if(d&&c)return d==r&&c==e;var u=-1,g=!0,b=2&t?new Ji:void 0;for(a.set(e,r),a.set(r,e);++u<o;){var m=e[u],h=r[u];if(n)var p=s?n(h,m,u,r,e,a):n(m,h,u,e,r,a);if(void 0!==p){if(p)continue;g=!1;break}if(b){if(!Qi(r,(function(e,r){if(!Zi(b,r)&&(m===e||i(m,e,t,n,a)))return b.push(r)}))){g=!1;break}}else if(m!==h&&!i(m,h,t,n,a)){g=!1;break}}return a.delete(e),a.delete(r),g};var Ki=function(e){var r=-1,t=Array(e.size);return e.forEach((function(e,n){t[++r]=[n,e]})),t};var qi=k.Uint8Array,ea=Ne,ra=Gi,ta=Ki,na=function(e){var r=-1,t=Array(e.size);return e.forEach((function(e){t[++r]=e})),t},ia=S?S.prototype:void 0,aa=ia?ia.valueOf:void 0;var sa=function(e,r,t,n,i,a,s){switch(t){case"[object DataView]":if(e.byteLength!=r.byteLength||e.byteOffset!=r.byteOffset)return!1;e=e.buffer,r=r.buffer;case"[object ArrayBuffer]":return!(e.byteLength!=r.byteLength||!a(new qi(e),new qi(r)));case"[object Boolean]":case"[object Date]":case"[object Number]":return ea(+e,+r);case"[object Error]":return e.name==r.name&&e.message==r.message;case"[object RegExp]":case"[object String]":return e==r+"";case"[object Map]":var o=ta;case"[object Set]":var l=1&n;if(o||(o=na),e.size!=r.size&&!l)return!1;var d=s.get(e);if(d)return d==r;n|=2,s.set(e,r);var c=ra(o(e),o(r),n,i,a,s);return s.delete(e),c;case"[object Symbol]":if(aa)return aa.call(e)==aa.call(r)}return!1};var oa=function(e,r){for(var t=-1,n=r.length,i=e.length;++t<n;)e[i+t]=r[t];return e},la=E;var da=function(e,r,t){var n=r(e);return la(e)?n:oa(n,t(e))};var ca=function(e,r){for(var t=-1,n=null==e?0:e.length,i=0,a=[];++t<n;){var s=e[t];r(s,t,e)&&(a[i++]=s)}return a},ua=function(){return[]},ga=Object.prototype.propertyIsEnumerable,ba=Object.getOwnPropertySymbols,ma=ba?function(e){return null==e?[]:(e=Object(e),ca(ba(e),(function(r){return ga.call(e,r)})))}:ua;var ha=function(e,r){for(var t=-1,n=Array(e);++t<e;)n[t]=r(t);return n},pa=N,ya=H;var fa=function(e){return ya(e)&&"[object Arguments]"==pa(e)},xa=H,va=Object.prototype,Fa=va.hasOwnProperty,wa=va.propertyIsEnumerable,$a=fa(function(){return arguments}())?fa:function(e){return xa(e)&&Fa.call(e,"callee")&&!wa.call(e,"callee")},Ca={exports:{}};var Ea=function(){return!1};!function(e,r){var t=k,n=Ea,i=r&&!r.nodeType&&r,a=i&&e&&!e.nodeType&&e,s=a&&a.exports===i?t.Buffer:void 0,o=(s?s.isBuffer:void 0)||n;e.exports=o}(Ca,Ca.exports);var Da=Ca.exports,Ba=/^(?:0|[1-9]\d*)$/;var Aa=function(e,r){var t=typeof e;return!!(r=null==r?9007199254740991:r)&&("number"==t||"symbol"!=t&&Ba.test(e))&&e>-1&&e%1==0&&e<r};var ka=function(e){return"number"==typeof e&&e>-1&&e%1==0&&e<=9007199254740991},Sa=N,Ma=ka,za=H,_a={};_a["[object Float32Array]"]=_a["[object Float64Array]"]=_a["[object Int8Array]"]=_a["[object Int16Array]"]=_a["[object Int32Array]"]=_a["[object Uint8Array]"]=_a["[object Uint8ClampedArray]"]=_a["[object Uint16Array]"]=_a["[object Uint32Array]"]=!0,_a["[object Arguments]"]=_a["[object Array]"]=_a["[object ArrayBuffer]"]=_a["[object Boolean]"]=_a["[object DataView]"]=_a["[object Date]"]=_a["[object Error]"]=_a["[object Function]"]=_a["[object Map]"]=_a["[object Number]"]=_a["[object Object]"]=_a["[object RegExp]"]=_a["[object Set]"]=_a["[object String]"]=_a["[object WeakMap]"]=!1;var Oa=function(e){return za(e)&&Ma(e.length)&&!!_a[Sa(e)]};var ja=function(e){return function(r){return e(r)}},Wa={exports:{}};!function(e,r){var t=D,n=r&&!r.nodeType&&r,i=n&&e&&!e.nodeType&&e,a=i&&i.exports===n&&t.process,s=function(){try{var e=i&&i.require&&i.require("util").types;return e||a&&a.binding&&a.binding("util")}catch(e){}}();e.exports=s}(Wa,Wa.exports);var Ya=Wa.exports,La=Oa,Ta=ja,Ia=Ya&&Ya.isTypedArray,Na=Ia?Ta(Ia):La,Ha=ha,Ra=$a,Pa=E,Va=Da,Ua=Aa,Xa=Na,Ja=Object.prototype.hasOwnProperty;var Qa=function(e,r){var t=Pa(e),n=!t&&Ra(e),i=!t&&!n&&Va(e),a=!t&&!n&&!i&&Xa(e),s=t||n||i||a,o=s?Ha(e.length,String):[],l=o.length;for(var d in e)!r&&!Ja.call(e,d)||s&&("length"==d||i&&("offset"==d||"parent"==d)||a&&("buffer"==d||"byteLength"==d||"byteOffset"==d)||Ua(d,l))||o.push(d);return o},Za=Object.prototype;var Ga=function(e){var r=e&&e.constructor;return e===("function"==typeof r&&r.prototype||Za)};var Ka=function(e,r){return function(t){return e(r(t))}}(Object.keys,Object),qa=Ga,es=Ka,rs=Object.prototype.hasOwnProperty;var ts=function(e){if(!qa(e))return es(e);var r=[];for(var t in Object(e))rs.call(e,t)&&"constructor"!=t&&r.push(t);return r},ns=re,is=ka;var as=Qa,ss=ts,os=function(e){return null!=e&&is(e.length)&&!ns(e)};var ls=function(e){return os(e)?as(e):ss(e)},ds=da,cs=ma,us=ls;var gs=function(e){return ds(e,us,cs)},bs=Object.prototype.hasOwnProperty;var ms=function(e,r,t,n,i,a){var s=1&t,o=gs(e),l=o.length;if(l!=gs(r).length&&!s)return!1;for(var d=l;d--;){var c=o[d];if(!(s?c in r:bs.call(r,c)))return!1}var u=a.get(e),g=a.get(r);if(u&&g)return u==r&&g==e;var b=!0;a.set(e,r),a.set(r,e);for(var m=s;++d<l;){var h=e[c=o[d]],p=r[c];if(n)var y=s?n(p,h,c,r,e,a):n(h,p,c,e,r,a);if(!(void 0===y?h===p||i(h,p,t,n,a):y)){b=!1;break}m||(m="constructor"==c)}if(b&&!m){var f=e.constructor,x=r.constructor;f==x||!("constructor"in e)||!("constructor"in r)||"function"==typeof f&&f instanceof f&&"function"==typeof x&&x instanceof x||(b=!1)}return a.delete(e),a.delete(r),b},hs=ve(k,"DataView"),ps=sr,ys=ve(k,"Promise"),fs=ve(k,"Set"),xs=ve(k,"WeakMap"),vs=N,Fs=se,ws="[object Map]",$s="[object Promise]",Cs="[object Set]",Es="[object WeakMap]",Ds="[object DataView]",Bs=Fs(hs),As=Fs(ps),ks=Fs(ys),Ss=Fs(fs),Ms=Fs(xs),zs=vs;(hs&&zs(new hs(new ArrayBuffer(1)))!=Ds||ps&&zs(new ps)!=ws||ys&&zs(ys.resolve())!=$s||fs&&zs(new fs)!=Cs||xs&&zs(new xs)!=Es)&&(zs=function(e){var r=vs(e),t="[object Object]"==r?e.constructor:void 0,n=t?Fs(t):"";if(n)switch(n){case Bs:return Ds;case As:return ws;case ks:return $s;case Ss:return Cs;case Ms:return Es}return r});var _s=Hi,Os=Gi,js=sa,Ws=ms,Ys=zs,Ls=E,Ts=Da,Is=Na,Ns="[object Arguments]",Hs="[object Array]",Rs="[object Object]",Ps=Object.prototype.hasOwnProperty;var Vs=function(e,r,t,n,i,a){var s=Ls(e),o=Ls(r),l=s?Hs:Ys(e),d=o?Hs:Ys(r),c=(l=l==Ns?Rs:l)==Rs,u=(d=d==Ns?Rs:d)==Rs,g=l==d;if(g&&Ts(e)){if(!Ts(r))return!1;s=!0,c=!1}if(g&&!c)return a||(a=new _s),s||Is(e)?Os(e,r,t,n,i,a):js(e,r,l,t,n,i,a);if(!(1&t)){var b=c&&Ps.call(e,"__wrapped__"),m=u&&Ps.call(r,"__wrapped__");if(b||m){var h=b?e.value():e,p=m?r.value():r;return a||(a=new _s),i(h,p,t,n,a)}}return!!g&&(a||(a=new _s),Ws(e,r,t,n,i,a))},Us=H;var Xs=function e(r,t,n,i,a){return r===t||(null==r||null==t||!Us(r)&&!Us(t)?r!=r&&t!=t:Vs(r,t,n,i,e,a))},Js=Hi,Qs=Xs;var Zs=function(e,r,t,n){var i=t.length,a=i,s=!n;if(null==e)return!a;for(e=Object(e);i--;){var o=t[i];if(s&&o[2]?o[1]!==e[o[0]]:!(o[0]in e))return!1}for(;++i<a;){var l=(o=t[i])[0],d=e[l],c=o[1];if(s&&o[2]){if(void 0===d&&!(l in e))return!1}else{var u=new Js;if(n)var g=n(d,c,l,e,r,u);if(!(void 0===g?Qs(c,d,3,n,u):g))return!1}}return!0},Gs=G;var Ks=function(e){return e==e&&!Gs(e)},qs=Ks,eo=ls;var ro=function(e){for(var r=eo(e),t=r.length;t--;){var n=r[t],i=e[n];r[t]=[n,i,qs(i)]}return r};var to=function(e,r){return function(t){return null!=t&&(t[e]===r&&(void 0!==r||e in Object(t)))}},no=Zs,io=ro,ao=to;var so=function(e,r){return null!=e&&r in Object(e)},oo=Vr,lo=$a,co=E,uo=Aa,go=ka,bo=Xr;var mo=function(e,r,t){for(var n=-1,i=(r=oo(r,e)).length,a=!1;++n<i;){var s=bo(r[n]);if(!(a=null!=e&&t(e,s)))break;e=e[s]}return a||++n!=i?a:!!(i=null==e?0:e.length)&&go(i)&&uo(s,i)&&(co(e)||lo(e))},ho=so,po=mo;var yo=Xs,fo=Kr,xo=function(e,r){return null!=e&&po(e,r,ho)},vo=Z,Fo=Ks,wo=to,$o=Xr;var Co=function(e){return function(r){return null==r?void 0:r[e]}},Eo=Zr;var Do=Co,Bo=function(e){return function(r){return Eo(r,e)}},Ao=Z,ko=Xr;var So=function(e){var r=io(e);return 1==r.length&&r[0][2]?ao(r[0][0],r[0][1]):function(t){return t===e||no(t,e,r)}},Mo=function(e,r){return vo(e)&&Fo(r)?wo($o(e),r):function(t){var n=fo(t,e);return void 0===n&&n===r?xo(t,e):yo(r,n,3)}},zo=function(e){return e},_o=E,Oo=function(e){return Ao(e)?Do(ko(e)):Bo(e)};var jo=/\s/;var Wo=function(e){for(var r=e.length;r--&&jo.test(e.charAt(r)););return r},Yo=/^\s+/;var Lo=function(e){return e?e.slice(0,Wo(e)+1).replace(Yo,""):e},To=G,Io=V,No=/^[-+]0x[0-9a-f]+$/i,Ho=/^0b[01]+$/i,Ro=/^0o[0-7]+$/i,Po=parseInt;var Vo=function(e){if("number"==typeof e)return e;if(Io(e))return NaN;if(To(e)){var r="function"==typeof e.valueOf?e.valueOf():e;e=To(r)?r+"":r}if("string"!=typeof e)return 0===e?e:+e;e=Lo(e);var t=Ho.test(e);return t||Ro.test(e)?Po(e.slice(2),t?2:8):No.test(e)?NaN:+e},Uo=1/0;var Xo=function(e){return e?(e=Vo(e))===Uo||e===-1/0?17976931348623157e292*(e<0?-1:1):e==e?e:0:0===e?e:0};var Jo=Di,Qo=function(e){return"function"==typeof e?e:null==e?zo:"object"==typeof e?_o(e)?Mo(e[0],e[1]):So(e):Oo(e)},Zo=function(e){var r=Xo(e),t=r%1;return r==r?t?r-t:r:0},Go=Math.max;var Ko=C((function(e,r,t){var n=null==e?0:e.length;if(!n)return-1;var i=null==t?0:Zo(t);return i<0&&(i=Go(n+i,0)),Jo(e,Qo(r),i)}));const qo=r.div`
    display: inline-block;
    position: relative;
    width: ${({$size:e})=>e?`${e}px`:"1em"};
    height: ${({$size:e})=>e?`${e}px`:"1em"};
    color: ${e=>e.$color||"currentColor"};
`,el=i`
	0% {
	  transform: rotate(0deg);
	}
	100% {
	  transform: rotate(360deg);
	}
`,rl=r.div`
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
    animation: ${el} 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
`,tl=r(rl)`
    animation-delay: -0.45s;
`,nl=r(rl)`
    animation-delay: -0.3s;
`,il=r(rl)`
    animation-delay: -0.15s;
`,al={collections:{default:{Button:{"button-radius":Zt.sm,"button-default-colour-bg":Dt["bg-primary"],"button-default-colour-bg-hover":Dt["bg-primary-hover"],"button-default-colour-text":Dt["text-inverse"],"button-secondary-colour-border":Dt["border-primary"],"button-secondary-colour-text":Dt["text-primary"],"button-light-colour-text":Dt["text-primary"],"button-link-colour-text":Dt["text-primary"]}},pa:{Button:{"button-radius":Zt.full,"button-default-colour-bg":Dt["bg-primary"],"button-default-colour-bg-hover":Dt["bg-primary-hover"],"button-default-colour-text":Dt["text-inverse"],"button-secondary-colour-border":Dt["border-primary"],"button-secondary-colour-text":Dt["text-primary"],"button-light-colour-text":Dt["text-primary"],"button-link-colour-text":Dt["text-primary"]}}},defaultValue:"default"},sl=(e,r)=>t=>{var n,i;const a=t.theme,s=rt(al,null==a?void 0:a.componentScheme);return ol((null===(i=null===(n=null==a?void 0:a.componentOverrides)||void 0===n?void 0:n[e])||void 0===i?void 0:i[r])||s[e][r],t)},ol=(e,r)=>{switch(typeof e){case"function":return e(r);case"number":return e+"px";case"string":return e}},ll=sl("Button","button-radius"),dl=sl("Button","button-default-colour-bg"),cl=sl("Button","button-default-colour-bg-hover"),ul=sl("Button","button-default-colour-text"),gl=sl("Button","button-secondary-colour-border"),bl=sl("Button","button-secondary-colour-text"),ml=sl("Button","button-light-colour-text"),hl=sl("Button","button-link-colour-text"),pl=r.button`
    padding: ${sn["spacing-8"]} ${sn["spacing-16"]};
    min-width: 4rem;
    border: ${an["width-010"]} ${an.solid} transparent;
    transition: all ${nn["duration-250"]} ${nn["ease-default"]};
    border-radius: ${ll};
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;

    // -----------------------------------------------------------------------------
    // BUTTON STYLE + TEXT COLOR
    // -----------------------------------------------------------------------------
    ${e=>{switch(e.$buttonStyle){case"secondary":return t`
                    background-color: ${rn.Primitive.white};
                    border-color: ${e.$buttonIsDanger?rn["border-error-strong"]:gl};

                    color: ${e.$buttonIsDanger?rn["text-error"]:bl};

                    &:hover,
                    &:active {
                        background-color: ${rn["bg-hover-neutral"]};
                    }
                `;case"light":return t`
                    background-color: ${rn.bg};
                    border-color: ${rn.border};

                    color: ${e.$buttonIsDanger?rn["text-error"]:ml};

                    &:hover,
                    &:active {
                        background-color: ${rn["bg-hover-neutral"]};
                    }
                `;case"link":return t`
                    background-color: transparent;

                    color: ${e.$buttonIsDanger?rn["text-error"]:hl};
                    &:hover,
                    &:active {
                        background-color: ${rn["bg-hover-neutral"]};
                    }
                `;case"disabled":return t`
                    background-color: ${rn["bg-disabled"]};

                    cursor: not-allowed;

                    &:hover {
                        box-shadow: none;
                    }

                    color: ${rn["text-disabled"]};
                `;default:return t`
                    background-color: ${e.$buttonIsDanger?rn["bg-error-strong"]:dl};};

                    ${dn.MaxWidth.sm} {
                        width: 100%;
                    }

                    color: ${ul}};

                    &:hover,
                    &:active {
                        background-color: ${e.$buttonIsDanger?rn["bg-error-strong-hover"]:cl}
                        };
                    }
                `}}}

    // -----------------------------------------------------------------------------
	// BUTTON SIZE + TEXT SIZE
	// -----------------------------------------------------------------------------
	${e=>{switch(e.$buttonSizeStyle){case"small":return t`
                    height: 2.5rem;
                    ${tn["body-md-semibold"]}

                    ${dn.MaxWidth.xxs} {
                        height: auto;
                    }
                `;case"large":return t`
                    height: 4rem;
                    ${tn["heading-md-semibold"]}

                    ${dn.MaxWidth.xxs} {
                        height: auto;
                    }
                `;default:return t`
                    height: 3rem;
                    ${tn["heading-xs-semibold"]}

                    ${dn.MaxWidth.xxs} {
                        height: auto;
                    }
                `}}}
`,yl=r((({color:e,className:r,size:t})=>s(qo,{className:r,$size:t,$color:e,"data-testid":"component-loading-spinner",children:[a(rl,{id:"inner1"}),a(tl,{id:"inner2"}),a(nl,{id:"inner3"}),a(il,{id:"inner4"})]})))`
    margin-right: 0.5rem;
`,fl=(e,r)=>{const{children:t,disabled:n=!1,loading:i=!1,styleType:o="default",danger:l=!1}=e,d=w(e,["children","disabled","loading","styleType","danger"]),c={$buttonStyle:n?"disabled":o,$buttonSizeStyle:"default",$buttonIsDanger:l};return s(pl,Object.assign({ref:r,"data-testid":d["data-testid"]||"button",disabled:n},c,d,{children:[i&&a(yl,{}),a("span",{children:t})]}))};fl.displayName="Button.Default";const xl=(e,r)=>{const{children:t,disabled:n=!1,loading:i=!1,styleType:o="default",danger:l=!1}=e,d=w(e,["children","disabled","loading","styleType","danger"]),c={$buttonStyle:n?"disabled":o,$buttonSizeStyle:"small",$buttonIsDanger:l};return s(pl,Object.assign({ref:r,"data-testid":d["data-testid"]||"button",disabled:n},c,d,{children:[i&&a(yl,{}),a("span",{children:t})]}))};xl.displayName="Button.Small";const vl=(e,r)=>{const{children:t,disabled:n=!1,loading:i=!1,styleType:o="default",danger:l=!1}=e,d=w(e,["children","disabled","loading","styleType","danger"]),c={$buttonStyle:n?"disabled":o,$buttonSizeStyle:"large",$buttonIsDanger:l};return s(pl,Object.assign({ref:r,"data-testid":d["data-testid"]||"button",disabled:n},c,d,{children:[i&&a(yl,{}),a("span",{children:t})]}))};vl.displayName="Button.Large";const Fl={Default:l.forwardRef(fl),Small:l.forwardRef(xl),Large:l.forwardRef(vl)},wl=e=>t`
    display: -webkit-box;
    -webkit-line-clamp: ${e};
    -webkit-box-orient: vertical;
    overflow: hidden;
`,$l=(e,r,n=!1)=>t`
        ${tn[`${e}-${r}`]}
        ${n?"margin-bottom: 1.05em;":"margin-bottom: 0;"}
    `,Cl=e=>{if(e)return t`
            ${wl(e)}
        `},El=(e,r)=>t`
    ${$l(e,r.weight||"regular",r.paragraph)}
    ${((e=!1,r=!1,n)=>r?t`
            display: block;
            ${Cl(n)}
        `:e?t`
            display: inline;
        `:t`
            display: block;
            ${Cl(n)}
        `)(r.inline,r.paragraph,r.maxLines)}
    color: ${rn.text};
`;var Dl;!function(e){const n=(e,t,n)=>{const i=r(e).attrs((({inline:e})=>({as:e?"span":void 0})))`
            ${e=>El(t,e)}
        `;return i.displayName=`Typography.${n}`,i};e.HeadingXXL=n("h1","heading-xxl","HeadingXXL"),e.HeadingXL=n("h2","heading-xl","HeadingXL"),e.HeadingLG=n("h3","heading-lg","HeadingLG"),e.HeadingMD=n("h4","heading-md","HeadingMD"),e.HeadingSM=n("h5","heading-sm","HeadingSM"),e.HeadingXS=n("h6","heading-xs","HeadingXS");const i=(e,t)=>{const n=r.p.attrs((({inline:e})=>({as:e?"span":void 0})))`
            ${r=>El(e,r)}
        `;return n.displayName=`Typography.${t}`,n};e.BodyBL=i("body-baseline","BodyBL"),e.BodyMD=i("body-md","BodyMD"),e.BodySM=i("body-sm","BodySM"),e.BodyXS=i("body-xs","BodyXS");const o=(e,n)=>{const i=r.a`
            ${r=>t`
                ${$l(e,r.weight||"regular")}
                color: ${rn.hyperlink};
                text-decoration: none;

                :hover,
                :active,
                :focus {
                    color: ${rn["text-hover"]};
                }
            `}
        `,o=e=>{var{external:r=!1,children:t}=e,n=w(e,["external","children"]);return s(i,Object.assign({},n,{children:[t,r&&a(Bl,{})]}))};return o.displayName=`Typography.${n}`,o};e.LinkBL=o("body-baseline","LinkBL"),e.LinkMD=o("body-md","LinkMD"),e.LinkSM=o("body-sm","LinkSM"),e.LinkXS=o("body-xs","LinkXS")}(Dl||(Dl={}));const Bl=r(v)`
    height: 1lh;
    width: 1em;
    margin-left: 0.4em;
    vertical-align: middle;
`,Al=r.ul`
    display: flex;
    list-style: none;
    margin-left: ${sn["spacing-64"]};
    flex-shrink: 0;

    ${dn.MaxWidth.lg} {
        display: none;
    }
`,kl=r.ul`
    display: none;

    ${dn.MaxWidth.lg} {
        display: flex;
        list-style: none;
        margin-left: ${sn["spacing-64"]};
        flex-shrink: 0;
    }
`,Sl=r.ul`
    display: none;
    list-style: none;

    ${dn.MaxWidth.lg} {
        display: flex;
        flex-direction: column;
        margin-top: ${sn["spacing-40"]};
        width: max-content;
        min-width: 22rem;
        max-width: 24rem;
    }

    ${dn.MaxWidth.sm} {
        width: 100%;
        max-width: unset;
        min-width: unset;
    }
`,Ml=r.li`
    position: relative;
    display: flex;
    align-items: center;

    :not(:last-of-type) {
        margin-right: ${sn["spacing-16"]};
    }

    ${dn.MaxWidth.lg} {
        width: 100%;
        padding: 0 0 0 ${sn["spacing-16"]};
        justify-content: center;

        :not(:last-of-type) {
            margin-right: 0;
            margin-bottom: ${e=>e.$mobile?sn["spacing-16"]:"0"};
        }
    }

    ${dn.MaxWidth.sm} {
        ${e=>{if(e.$mobile)return t`
                    padding: 0 ${sn["spacing-16"]};
                `}}
    }
`,zl=r(Fl.Small)`
    ${dn.MaxWidth.lg} {
        width: 100%;
    }
`,_l=r.div`
    display: none;

    ${dn.MaxWidth.lg} {
        display: flex;
        flex-direction: column;
        margin-top: ${sn["spacing-40"]};
    }
`,Ol=r(Dl.BodyMD)`
    margin-bottom: ${sn["spacing-8"]};
`,jl=r.div`
    display: flex;
`,Wl=r.a`
    :not(:last-child) {
        margin-right: ${sn["spacing-16"]};
    }

    img {
        width: auto;
        height: auto;
        object-fit: contain;
    }

    ${dn.MaxWidth.lg} {
        img {
            max-width: 11rem;
        }
    }

    ${dn.MaxWidth.sm} {
        img {
            max-width: 100%;
        }
    }
`,Yl=({actionButtons:e,mobile:r=!1,onActionButtonClick:t})=>{const n=e=>{e.stopPropagation()},i=e=>r=>{r.stopPropagation(),"download"===e.type&&window.scrollTo({left:0,top:document.body.scrollHeight,behavior:"smooth"}),t(r,e)},l=(e,r)=>{const t=e?(e=>{const r=Ko(e,(e=>"download"===e.type));if(r>-1){const t=[...e],n=t.splice(r,1);return[...t,n[0]]}return e})(r):r;return t.map(((r,t)=>{let o;switch(r.type){case"download":o=e?(l=r.args,s(_l,{children:[a(Ol,{weight:"semibold",children:l&&l.children||"Download the app"}),s(jl,{children:[a(Wl,{href:"https://apps.apple.com/sg/app/moments-of-life/id1383218758",target:"_blank",rel:"noopener noreferrer","data-testid":"button__app-store",onClick:n,children:a("img",{src:"https://assets.life.gov.sg/react-design-system/img/download/apple-app-store.png",alt:"apple-app-store"})}),a(Wl,{href:"https://play.google.com/store/apps/details?id=sg.gov.app.mol&hl=en_SG",target:"_blank",rel:"noopener noreferrer","data-testid":"button__play-store",onClick:n,children:a("img",{src:"https://assets.life.gov.sg/react-design-system/img/download/google-play-store.png",alt:"google-play-store"})})]})]})):a(zl,Object.assign({},r.args,{type:"button",onClick:i(r),"data-testid":"action-button__download",children:"Download the app"}));break;case"button":{const n=r.args["data-testid"]?`action-button__${r.args["data-testid"]}`:`action-button__button-${e?"mobile-":""}${t+1}`;o=a(zl,Object.assign({},r.args,{type:"button",onClick:i(r),"data-testid":n}));break}case"component":{const e=r.args;o=e&&e.render||null;break}default:o=null}var l;if(o)return a(Ml,{$mobile:e,children:o},`action-button-${t+1}`)}))};if(e){const t=(null==e?void 0:e.mobile)||e.desktop,n=t.filter((e=>!!e.uncollapsible)),i=t.filter((e=>!e.uncollapsible));return r?a(o,{children:i.length>0&&a(Sl,{children:l(r,i)})}):s(o,{children:[n.length>0&&a(kl,{children:l(!1,n)}),e.desktop.length>0&&a(Al,{children:l(r,e.desktop)})]})}return a(o,{})};var Ll;!function(e){e.isNavItemCommon=e=>!!e.onClick,e.isNavItemLink=e=>{const r=e;return!r.itemType||"link"===r.itemType}}(Ll||(Ll={}));const Tl=r.ul`
    display: flex;
    flex-direction: column;
    position: absolute;
    left: 0;
    top: 100%;

    min-width: 15.625rem;
    width: 100%;
    max-height: 20rem;
    overflow: auto;

    padding: ${sn["spacing-8"]} 0;

    background: ${rn.bg};
    border-radius: ${on.md};
    box-shadow: 0px 2px 8px 0px
        rgb(from ${rn.Primitive["neutral-50"]} r g b / 25%);
`,Il=r.ul`
    display: none;
    list-style: none;

    ${dn.MaxWidth.lg} {
        border-left: ${an["width-040"]} solid ${rn["border-selected"]};
        display: flex;
        flex-direction: column;
    }
`,Nl=r(Dl.LinkBL)`
    width: 100%;
    position: relative;
    text-align: left;
    color: ${rn.text};

    margin: 0 ${sn["spacing-8"]};

    // use border, as padding still shows an extra line after the ellipsis
    border: ${an.solid} transparent;
    border-width: ${sn["spacing-12"]} ${sn["spacing-8"]};

    border-radius: ${on.md};

    ${wl(2)}
    white-space: pre-wrap;

    :hover,
    :active,
    :focus {
        background-color: ${rn["bg-hover"]};
        color: ${rn.text};
    }

    ${dn.MaxWidth.lg} {
        ${tn["body-md-regular"]}
    }
`,Hl=r.li`
    width: 100%;
    position: relative;
    display: flex;
    align-items: flex-start;
`,Rl=({items:e,mobile:r=!1,onItemClick:t})=>{const n=e=>r=>{r.stopPropagation(),t(r,e)},i=(r=!1)=>e.map(((e,t)=>{const{children:i,options:s}=e,o=w(e,["children","options"]),l=r?`link__mobile-${t+1}`:`link__${t+1}`;return a(Hl,{children:a(Nl,Object.assign({"data-testid":l},o,{onClick:n(e)},s,{children:i}))},t)}));if(e&&e.length>0){return a(r?Il:Tl,{children:i(r)})}return a(o,{})},Pl=r.ul`
    display: flex;
    list-style: none;
    position: relative;

    ${e=>e.$alignLeft&&"margin-right: auto;"}

    ${dn.MaxWidth.lg} {
        display: none;
    }
`,Vl=r.ul`
    display: none;
    list-style: none;

    ${dn.MaxWidth.lg} {
        display: flex;
        flex-direction: column;
        overflow: hidden;
    }
`,Ul=r.li`
    display: flex;
    margin-left: 1rem;

    :first-child {
        // negative margin to preserve touch target size for link
        margin-left: ${e=>e.$hiddenBranding?"-0.5rem":"0"};
    }

    ${dn.MaxWidth.lg} {
        flex-direction: column;
        padding: 0.125rem 0;
        width: 100%;
        margin-left: 0rem;
    }
`,Xl=r(Dl.LinkMD)`
    display: flex;
    position: relative;
    align-items: center;
    text-align: center;
    color: ${rn.text};
    height: 100%;
    padding: 0 0.5rem;

    :active,
    :focus,
    :hover {
        color: ${e=>e.$selected?rn["text-selected-hover"]:rn["text-hover"]};
    }

    ${dn.MaxWidth.lg} {
        width: 100%;
        padding: 0.5rem 1rem;
        text-align: left;
        align-items: flex-start;
    }
`,Jl=r.div`
    flex: 1;
    margin-top: 0.25rem;

    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 3;
    white-space: pre-wrap;
`,Ql=r.div`
    position: absolute;
    bottom: 0;
    height: 0.25rem;
    left: 0.5rem;
    right: 0.5rem;
    background-color: ${rn["border-selected"]};

    :hover {
        ${e=>e.$selected&&rn["border-selected-hover"]};
    }

    ${dn.MaxWidth.lg} {
        left: 0;
        right: unset;
        top: 0;
        bottom: 0;
        height: 100%;
        width: 0.25rem;
    }
`,Zl=r.div`
    padding-left: 0.5rem;
    margin-right: -0.5rem;
`,Gl=r(xn)`
    padding: 0.5rem;
    transform: rotate(${e=>e.$selected?0:180}deg);
    transition: transform 300ms ease-in-out;
    margin: auto 0.25rem auto 0;
`,Kl=r(F)`
    height: 1.25rem;
    width: 1.25rem;
    color: ${rn.icon};
    :hover {
        ${e=>e.$selected?rn["icon-selected-hover"]:rn["icon-hover"]};
    }
`,ql=({items:e,selectedId:r,mobile:t=!1,hideNavBranding:n,onItemClick:i})=>{const[l,g]=c(-1),[b,m]=c(!1),h=u(null);d((()=>{const e=e=>{h.current&&!h.current.contains(e.target)&&p()};return document.addEventListener("click",e,!0),()=>{document.removeEventListener("click",e,!0)}}),[]);const p=()=>{m(!1)},y=(e,r)=>t=>{t.stopPropagation(),g(r),m(!0),i(t,e)},f=(e,r)=>{e.stopPropagation(),i(e,r),m(!1)},x=()=>e.map(((e,i)=>{if("component"===e.itemType){const r=e&&e.children||null;return a("li",{children:r},i)}{const o=(e=>{if(e.id===r)return!0;if(e.subMenu&&e.subMenu.length>=1)return!!e.subMenu.find((e=>e.id===r));return!1})(e),{children:d,options:c}=e,u=w(e,["children","options"]),g=o?t?"bold":"semibold":"regular",m=t?`link__mobile-${i+1}`:`link__${i+1}`,h=l>=0&&l===i&&b;return s(Ul,{$hiddenBranding:n,children:[s(Xl,Object.assign({"data-testid":m,weight:g,$selected:o},u,{onClick:y(e,i)},c,{children:[a(Jl,{children:d}),o&&a(Ql,{"data-testid":`${m}-indicator`,$selected:o}),t&&e.subMenu&&a(Zl,{children:a(Gl,{"data-testid":`${m}-expand-collapse-button`,$selected:h,focusHighlight:!1,focusOutline:"browser","aria-label":h?"Collapse":"Expand",children:a(Kl,{$selected:o})})})]})),h&&e.subMenu&&a(Rl,{items:e.subMenu,mobile:t,onItemClick:f})]},i)}}));return e&&e.length>0?t?a(Vl,{ref:h,children:x()}):a(Pl,{ref:h,$alignLeft:n,children:x()}):a(o,{})},ed={primary:{brandName:"LifeSG",logoSrc:"https://assets.life.gov.sg/lifesg/logo-lifesg.svg"}},rd={primary:{brandName:"BookingSG",logoSrc:"https://www.booking.gov.sg/logo.svg"}},td={primary:{brandName:"CCube",logoSrc:"https://assets.life.gov.sg/ccube/logo-ccube.svg"}},nd={primary:{brandName:"MyLegacy",logoSrc:"https://mylegacy.life.gov.sg/images/site-logo.png"}},id=g(((e,r)=>{var{items:t,className:i,id:l,selectedId:g,compress:m=!1,fixed:h=!0,resources:p,hideNavElements:y=!1,hideNavBranding:f=!1,drawerDismissalExclusions:x=[],actionButtons:v,onItemClick:F,onActionButtonClick:$,onBrandClick:C,masthead:E=!0,layout:D="default"}=e,B=w(e,["items","className","id","selectedId","compress","fixed","resources","hideNavElements","hideNavBranding","drawerDismissalExclusions","actionButtons","onItemClick","onActionButtonClick","onBrandClick","masthead","layout"]);const[A,k]=c(!1),[S,M]=c(!1),z="stretch"===D,_=u(null),O=n(),j=(e=>{switch(e){case"bookingsg":return rd;case"mylegacy":return nd;case"ccube":return td;default:return ed}})(null==O?void 0:O.resourceScheme),W=ln["lg-max"]({theme:O}),Y=(null==p?void 0:p.primary)||j.primary,L=null==p?void 0:p.secondary;b(r,(()=>Object.assign(_.current,{dismissDrawer:()=>{T()}})),[A]),d((()=>(N(),window.addEventListener("resize",N),()=>{window.removeEventListener("resize",N)})),[]);const T=()=>{k(!1),setTimeout((()=>{M(!1)}),550)},I=e=>A&&-1===x.indexOf(e),N=()=>{window.innerWidth<=W&&A&&T()},H=(e,r)=>{C&&(e.preventDefault(),C(r)),I("brand-click")&&T()},R=(e,r)=>{Ll.isNavItemCommon(r)&&r.onClick?r.onClick(e):F&&(e.preventDefault(),F(r)),Ll.isNavItemLink(r)&&!r.subMenu&&I("item-click")&&T()},P=(e,r)=>{var t;"button"!==r.type&&"download"!==r.type||!(null===(t=r.args)||void 0===t?void 0:t.onClick)?$&&(e.preventDefault(),$(r)):r.args.onClick(e),I("item-click")&&T()},V=()=>{k(!0),M(!0)},U=()=>{I("close-button-click")&&T()},X=()=>{const e=t.mobile||t.desktop;return e&&e.length>0||v&&(e=>{const r=e.mobile||e.desktop;return!!r&&r.length&&r.some((e=>!e.uncollapsible))})(v)?a(Cn,{"aria-label":"Open nav menu","data-testid":"button__mobile-menu",onClick:V,focusHighlight:!1,children:a(En,{})}):null};return s(Fn,{ref:_,$fixed:h,className:i,id:l||"navbar-wrapper","data-testid":B["data-testid"]||"navbar-wrapper",children:[E&&a(Yn,{stretch:z}),s(jn.Content,{stretch:z,children:[s(wn,{$compress:m,children:[!f&&s(Dn,{$compress:m,"data-id":"brand-container",children:[Y&&a(fi,{resources:Y,onClick:H,"data-id":"brand-primary","data-testid":"main__brand",type:"primary"}),L&&s(o,{children:[a(Bn,{$compress:m}),a(fi,{resources:L,onClick:H,"data-id":"brand-secondary","data-testid":"main__brand-secondary",type:"secondary"})]})]}),!y&&s($n,{$hideNavBranding:f,children:[a(ql,{items:t.desktop,onItemClick:R,selectedId:g,hideNavBranding:f}),a(Yl,{actionButtons:v,onActionButtonClick:P}),X()]})]}),!y&&a(bi,{show:S,enableOverlayClick:!0,onOverlayClick:U,children:s(Ei,{show:A,resources:{primary:Y,secondary:L},onClose:U,onBrandClick:H,actionButtons:v,hideNavBranding:f,children:[a(ql,{items:t.mobile||t.desktop,onItemClick:R,selectedId:g,mobile:!0}),a(Yl,{actionButtons:v,onActionButtonClick:P,mobile:!0})]})})]})]})})),ad=vn,sd=3.5;export{id as Navbar,ad as NavbarHeight,sd as NavbarMobileHeight};
//# sourceMappingURL=index.js.map
