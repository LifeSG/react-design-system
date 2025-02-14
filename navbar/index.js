import{MenuIcon as e}from"@lifesg/react-icons/menu";import r,{css as t,keyframes as n,useTheme as i}from"styled-components";import{jsx as a,jsxs as o,Fragment as s}from"react/jsx-runtime";import l,{useEffect as d,useState as c,useRef as u,forwardRef as g,useImperativeHandle as h}from"react";import{useFloatingTree as m,FloatingTree as b,useFloatingNodeId as f,FloatingNode as p}from"@floating-ui/react";import y from"react-dom";import{CrossIcon as v}from"@lifesg/react-icons/cross";import{ExternalIcon as F}from"@lifesg/react-icons/external";import{ChevronUpIcon as x}from"@lifesg/react-icons/chevron-up";function w(e,r){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(n=Object.getOwnPropertySymbols(e);i<n.length;i++)r.indexOf(n[i])<0&&Object.prototype.propertyIsEnumerable.call(e,n[i])&&(t[n[i]]=e[n[i]])}return t}"function"==typeof SuppressedError&&SuppressedError;var B="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};function D(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var $=Array.isArray,S="object"==typeof B&&B&&B.Object===Object&&B,E=S,C="object"==typeof self&&self&&self.Object===Object&&self,A=E||C||Function("return this")(),k=A.Symbol,z=k,O=Object.prototype,H=O.hasOwnProperty,M=O.toString,_=z?z.toStringTag:void 0;var j=function(e){var r=H.call(e,_),t=e[_];try{e[_]=void 0;var n=!0}catch(e){}var i=M.call(e);return n&&(r?e[_]=t:delete e[_]),i},W=Object.prototype.toString;var T=j,L=function(e){return W.call(e)},I=k?k.toStringTag:void 0;var Y=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":I&&I in Object(e)?T(e):L(e)};var R=function(e){return null!=e&&"object"==typeof e},P=Y,N=R;var V=function(e){return"symbol"==typeof e||N(e)&&"[object Symbol]"==P(e)},U=$,J=V,X=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,G=/^\w*$/;var Q=function(e,r){if(U(e))return!1;var t=typeof e;return!("number"!=t&&"symbol"!=t&&"boolean"!=t&&null!=e&&!J(e))||(G.test(e)||!X.test(e)||null!=r&&e in Object(r))};var Z=function(e){var r=typeof e;return null!=e&&("object"==r||"function"==r)},K=Y,q=Z;var ee,re=function(e){if(!q(e))return!1;var r=K(e);return"[object Function]"==r||"[object GeneratorFunction]"==r||"[object AsyncFunction]"==r||"[object Proxy]"==r},te=A["__core-js_shared__"],ne=(ee=/[^.]+$/.exec(te&&te.keys&&te.keys.IE_PROTO||""))?"Symbol(src)_1."+ee:"";var ie=function(e){return!!ne&&ne in e},ae=Function.prototype.toString;var oe=function(e){if(null!=e){try{return ae.call(e)}catch(e){}try{return e+""}catch(e){}}return""},se=re,le=ie,de=Z,ce=oe,ue=/^\[object .+?Constructor\]$/,ge=Function.prototype,he=Object.prototype,me=ge.toString,be=he.hasOwnProperty,fe=RegExp("^"+me.call(be).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");var pe=function(e,r){return null==e?void 0:e[r]},ye=function(e){return!(!de(e)||le(e))&&(se(e)?fe:ue).test(ce(e))},ve=pe;var Fe=function(e,r){var t=ve(e,r);return ye(t)?t:void 0},xe=Fe(Object,"create"),we=xe;var Be=function(){this.__data__=we?we(null):{},this.size=0};var De=function(e){var r=this.has(e)&&delete this.__data__[e];return this.size-=r?1:0,r},$e=xe,Se=Object.prototype.hasOwnProperty;var Ee=function(e){var r=this.__data__;if($e){var t=r[e];return"__lodash_hash_undefined__"===t?void 0:t}return Se.call(r,e)?r[e]:void 0},Ce=xe,Ae=Object.prototype.hasOwnProperty;var ke=function(e){var r=this.__data__;return Ce?void 0!==r[e]:Ae.call(r,e)},ze=xe;var Oe=function(e,r){var t=this.__data__;return this.size+=this.has(e)?0:1,t[e]=ze&&void 0===r?"__lodash_hash_undefined__":r,this},He=Be,Me=De,_e=Ee,je=ke,We=Oe;function Te(e){var r=-1,t=null==e?0:e.length;for(this.clear();++r<t;){var n=e[r];this.set(n[0],n[1])}}Te.prototype.clear=He,Te.prototype.delete=Me,Te.prototype.get=_e,Te.prototype.has=je,Te.prototype.set=We;var Le=Te;var Ie=function(){this.__data__=[],this.size=0};var Ye=function(e,r){return e===r||e!=e&&r!=r},Re=Ye;var Pe=function(e,r){for(var t=e.length;t--;)if(Re(e[t][0],r))return t;return-1},Ne=Pe,Ve=Array.prototype.splice;var Ue=function(e){var r=this.__data__,t=Ne(r,e);return!(t<0)&&(t==r.length-1?r.pop():Ve.call(r,t,1),--this.size,!0)},Je=Pe;var Xe=function(e){var r=this.__data__,t=Je(r,e);return t<0?void 0:r[t][1]},Ge=Pe;var Qe=function(e){return Ge(this.__data__,e)>-1},Ze=Pe;var Ke=function(e,r){var t=this.__data__,n=Ze(t,e);return n<0?(++this.size,t.push([e,r])):t[n][1]=r,this},qe=Ie,er=Ue,rr=Xe,tr=Qe,nr=Ke;function ir(e){var r=-1,t=null==e?0:e.length;for(this.clear();++r<t;){var n=e[r];this.set(n[0],n[1])}}ir.prototype.clear=qe,ir.prototype.delete=er,ir.prototype.get=rr,ir.prototype.has=tr,ir.prototype.set=nr;var ar=ir,or=Fe(A,"Map"),sr=Le,lr=ar,dr=or;var cr=function(e){var r=typeof e;return"string"==r||"number"==r||"symbol"==r||"boolean"==r?"__proto__"!==e:null===e};var ur=function(e,r){var t=e.__data__;return cr(r)?t["string"==typeof r?"string":"hash"]:t.map},gr=ur;var hr=function(e){var r=gr(this,e).delete(e);return this.size-=r?1:0,r},mr=ur;var br=function(e){return mr(this,e).get(e)},fr=ur;var pr=function(e){return fr(this,e).has(e)},yr=ur;var vr=function(e,r){var t=yr(this,e),n=t.size;return t.set(e,r),this.size+=t.size==n?0:1,this},Fr=function(){this.size=0,this.__data__={hash:new sr,map:new(dr||lr),string:new sr}},xr=hr,wr=br,Br=pr,Dr=vr;function $r(e){var r=-1,t=null==e?0:e.length;for(this.clear();++r<t;){var n=e[r];this.set(n[0],n[1])}}$r.prototype.clear=Fr,$r.prototype.delete=xr,$r.prototype.get=wr,$r.prototype.has=Br,$r.prototype.set=Dr;var Sr=$r,Er=Sr;function Cr(e,r){if("function"!=typeof e||null!=r&&"function"!=typeof r)throw new TypeError("Expected a function");var t=function(){var n=arguments,i=r?r.apply(this,n):n[0],a=t.cache;if(a.has(i))return a.get(i);var o=e.apply(this,n);return t.cache=a.set(i,o)||a,o};return t.cache=new(Cr.Cache||Er),t}Cr.Cache=Er;var Ar=Cr;var kr=function(e){var r=Ar(e,(function(e){return 500===t.size&&t.clear(),e})),t=r.cache;return r},zr=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,Or=/\\(\\)?/g,Hr=kr((function(e){var r=[];return 46===e.charCodeAt(0)&&r.push(""),e.replace(zr,(function(e,t,n,i){r.push(n?i.replace(Or,"$1"):t||e)})),r}));var Mr=function(e,r){for(var t=-1,n=null==e?0:e.length,i=Array(n);++t<n;)i[t]=r(e[t],t,e);return i},_r=$,jr=V,Wr=k?k.prototype:void 0,Tr=Wr?Wr.toString:void 0;var Lr=function e(r){if("string"==typeof r)return r;if(_r(r))return Mr(r,e)+"";if(jr(r))return Tr?Tr.call(r):"";var t=r+"";return"0"==t&&1/r==-1/0?"-0":t},Ir=Lr;var Yr=$,Rr=Q,Pr=Hr,Nr=function(e){return null==e?"":Ir(e)};var Vr=function(e,r){return Yr(e)?e:Rr(e,r)?[e]:Pr(Nr(e))},Ur=V;var Jr=function(e){if("string"==typeof e||Ur(e))return e;var r=e+"";return"0"==r&&1/e==-1/0?"-0":r},Xr=Vr,Gr=Jr;var Qr=function(e,r){for(var t=0,n=(r=Xr(r,e)).length;null!=e&&t<n;)e=e[Gr(r[t++])];return t&&t==n?e:void 0},Zr=Qr;var Kr=function(e,r,t){var n=null==e?void 0:Zr(e,r);return void 0===n?t:n},qr=D(Kr);const et=(e,r,t)=>qr(t,r)||qr(e,r),rt=(e,r)=>{const t=r||e.defaultValue;return qr(e.collections,t)},tt={collections:{lifesg:{"duration-150":"150ms","duration-250":"250ms","duration-350":"350ms","duration-500":"500ms","duration-800":"800ms","duration-1000":"1000ms","ease-default":"cubic-bezier(0.45, 0.05, 0.55, 0.95)","ease-standard":"cubic-bezier(0.86, 0, 0.07, 1)","ease-entrance":"cubic-bezier(0.18, 0.13, 0, 1)","ease-exit":"cubic-bezier(1, 0, 0.8, 0.85)"}},defaultValue:"lifesg"},nt=e=>r=>{var t;const n=r.theme,i=rt(tt,null==n?void 0:n.motionScheme);return(null===(t=null==n?void 0:n.overrides)||void 0===t?void 0:t.motion)?et(i,e,n.overrides.motion):i[e]},it={"duration-150":nt("duration-150"),"duration-250":nt("duration-250"),"duration-350":nt("duration-350"),"duration-500":nt("duration-500"),"duration-800":nt("duration-800"),"duration-1000":nt("duration-1000"),"ease-default":nt("ease-default"),"ease-standard":nt("ease-standard"),"ease-entrance":nt("ease-entrance"),"ease-exit":nt("ease-exit")},at={collections:{lifesg:{"brand-10":"#2C0C0B","brand-20":"#4C1513","brand-30":"#6C1D1B","brand-40":"#922825","brand-50":"#BF3431","brand-60":"#F15D5A","brand-70":"#F69491","brand-80":"#FABAB7","brand-90":"#FCD7D2","brand-95":"#FFEBE7","brand-100":"#FFF6F4","primary-10":"#001731","primary-20":"#002752","primary-30":"#003874","primary-40":"#004D9F","primary-50":"#1768BE","primary-60":"#3C91EC","primary-70":"#6CB4FF","primary-80":"#A5CDFF","primary-90":"#CFE1FE","primary-95":"#E8F0FE","primary-100":"#F7F9FF","secondary-10":"#131529","secondary-20":"#222547","secondary-30":"#2F3565","secondary-40":"#42498B","secondary-50":"#5B62A7","secondary-60":"#858CBD","secondary-70":"#A8ADCF","secondary-80":"#C6C9E0","secondary-90":"#DDDFEC","secondary-95":"#EDEEF5","secondary-100":"#F8F8FB","neutral-10":"#161616","neutral-20":"#282828","neutral-30":"#393939","neutral-40":"#4E4E4E","neutral-50":"#686868","neutral-60":"#8E8E8E","neutral-70":"#AFAFB0","neutral-80":"#C7CACA","neutral-90":"#DDE1E2","neutral-95":"#EDEFEF","neutral-100":"#F9F9F9","success-10":"#081A0F","success-20":"#0E2D1B","success-30":"#154126","success-40":"#1C5A34","success-50":"#257645","success-60":"#44A068","success-70":"#64C189","success-80":"#80DCA5","success-90":"#B4ECCB","success-95":"#D5F6E2","success-100":"#EFFCF4","warning-10":"#221302","warning-20":"#3B2204","warning-30":"#543106","warning-40":"#744408","warning-50":"#98590C","warning-60":"#D07A13","warning-70":"#E4A244","warning-80":"#F5C26C","warning-90":"#FADBA6","warning-95":"#FCECD4","warning-100":"#FDF7F0","error-10":"#330505","error-20":"#550808","error-30":"#750C0C","error-40":"#9E130F","error-50":"#CB2213","error-60":"#DE6C6C","error-70":"#E89B9B","error-80":"#EFBEBE","error-90":"#F5D9D9","error-95":"#F9ECEC","error-100":"#FCF7F7","info-10":"#021824","info-20":"#032B3F","info-30":"#053D59","info-40":"#065478","info-50":"#176E9B","info-60":"#5296BE","info-70":"#82B5DA","info-80":"#ACCFE7","info-90":"#CCE3F1","info-95":"#E3F1F8","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000","primary-inverse":"#FEAB10"},bookingsg:{"brand-10":"#2C0C0B","brand-20":"#4C1513","brand-30":"#6C1D1B","brand-40":"#922825","brand-50":"#BF3431","brand-60":"#F15D5A","brand-70":"#F69491","brand-80":"#FABAB7","brand-90":"#FCD7D2","brand-95":"#FFEBE7","brand-100":"#FFF6F4","primary-10":"#1A122C","primary-20":"#2F1F4D","primary-30":"#422D6E","primary-40":"#5B3D97","primary-50":"#7654BC","primary-60":"#9A82CD","primary-70":"#B7A7D8","primary-80":"#CFC5E5","primary-90":"#E3DDF0","primary-95":"#F0EDF7","primary-100":"#F9F8FC","secondary-10":"#0E1723","secondary-20":"#18293D","secondary-30":"#233A57","secondary-40":"#305078","secondary-50":"#4B6A8F","secondary-60":"#7B91A9","secondary-70":"#A1B1C3","secondary-80":"#C1CBD7","secondary-90":"#DBE1E8","secondary-95":"#EBEFF2","secondary-100":"#F7F8FA","neutral-10":"#161616","neutral-20":"#282828","neutral-30":"#393939","neutral-40":"#4E4E4E","neutral-50":"#686868","neutral-60":"#8E8E8E","neutral-70":"#AFAFB0","neutral-80":"#C7CACA","neutral-90":"#DDE1E2","neutral-95":"#EDEFEF","neutral-100":"#F9F9F9","success-10":"#081A0F","success-20":"#0E2D1B","success-30":"#154126","success-40":"#1C5A34","success-50":"#257645","success-60":"#44A068","success-70":"#64C189","success-80":"#80DCA5","success-90":"#B4ECCB","success-95":"#D5F6E2","success-100":"#EFFCF4","warning-10":"#221302","warning-20":"#3B2204","warning-30":"#543106","warning-40":"#744408","warning-50":"#98590C","warning-60":"#D07A13","warning-70":"#E4A244","warning-80":"#F5C26C","warning-90":"#FADBA6","warning-95":"#FCECD4","warning-100":"#FDF7F0","error-10":"#330505","error-20":"#550808","error-30":"#750C0C","error-40":"#9E130F","error-50":"#CB2213","error-60":"#DE6C6C","error-70":"#E89B9B","error-80":"#EFBEBE","error-90":"#F5D9D9","error-95":"#F9ECEC","error-100":"#FCF7F7","info-10":"#021824","info-20":"#032B3F","info-30":"#053D59","info-40":"#065478","info-50":"#176E9B","info-60":"#5296BE","info-70":"#82B5DA","info-80":"#ACCFE7","info-90":"#CCE3F1","info-95":"#E3F1F8","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000","primary-inverse":"#FEAB10"},rbs:{"brand-10":"#0E123A","brand-20":"#191E65","brand-30":"#232B90","brand-40":"#303BC5","brand-50":"#494CFF","brand-60":"#AD6EFF","brand-70":"#AEA4FF","brand-80":"#C5C4FF","brand-90":"#DDDCFF","brand-95":"#EDECFF","brand-100":"#F8F8FF","primary-10":"#10152B","primary-20":"#1C254B","primary-30":"#28356C","primary-40":"#38489A","primary-50":"#4D5AD7","primary-60":"#7487F2","primary-70":"#9AAAFC","primary-80":"#BDC7FD","primary-90":"#DADFFB","primary-95":"#ECEEFE","primary-100":"#F7F8FF","secondary-10":"#19151D","secondary-20":"#2B2533","secondary-30":"#3E3649","secondary-40":"#564A64","secondary-50":"#6F637D","secondary-60":"#948B9F","secondary-70":"#B3ACBB","secondary-80":"#CCC8D2","secondary-90":"#E1DEE4","secondary-95":"#EFEEF1","secondary-100":"#F9F8F9","neutral-10":"#161616","neutral-20":"#282828","neutral-30":"#393939","neutral-40":"#4E4E4E","neutral-50":"#686868","neutral-60":"#8E8E8E","neutral-70":"#AFAFB0","neutral-80":"#C7CACA","neutral-90":"#DDE1E2","neutral-95":"#EDEFEF","neutral-100":"#F9F9F9","success-10":"#081A0F","success-20":"#0E2D1B","success-30":"#154126","success-40":"#1C5A34","success-50":"#257645","success-60":"#44A068","success-70":"#64C189","success-80":"#80DCA5","success-90":"#B4ECCB","success-95":"#D5F6E2","success-100":"#EFFCF4","warning-10":"#221302","warning-20":"#3B2204","warning-30":"#543106","warning-40":"#744408","warning-50":"#98590C","warning-60":"#D07A13","warning-70":"#E4A244","warning-80":"#F5C26C","warning-90":"#FADBA6","warning-95":"#FCECD4","warning-100":"#FDF7F0","error-10":"#330505","error-20":"#550808","error-30":"#750C0C","error-40":"#9E130F","error-50":"#CB2213","error-60":"#DE6C6C","error-70":"#E89B9B","error-80":"#EFBEBE","error-90":"#F5D9D9","error-95":"#F9ECEC","error-100":"#FCF7F7","info-10":"#021824","info-20":"#032B3F","info-30":"#053D59","info-40":"#065478","info-50":"#176E9B","info-60":"#5296BE","info-70":"#82B5DA","info-80":"#ACCFE7","info-90":"#CCE3F1","info-95":"#E3F1F8","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000","primary-inverse":"#FEAB10"},mylegacy:{"brand-10":"#2C0C0B","brand-20":"#4C1513","brand-30":"#6C1D1B","brand-40":"#922825","brand-50":"#BF3431","brand-60":"#F15D5A","brand-70":"#F69491","brand-80":"#FABAB7","brand-90":"#FCD7D2","brand-95":"#FFEBE7","brand-100":"#FFF6F4","primary-10":"#0011924","primary-20":"#032B40","primary-30":"#043D5A","primary-40":"#05547B","primary-50":"#096EA1","primary-60":"#2098D3","primary-70":"#5CB9E8","primary-80":"#8BD3F6","primary-90":"#BEE6FA","primary-95":"#E2F2FA","primary-100":"#F4FAFC","secondary-10":"#131529","secondary-20":"#222547","secondary-30":"#2F3565","secondary-40":"#42498B","secondary-50":"#5B62A7","secondary-60":"#858CBD","secondary-70":"#A8ADCF","secondary-80":"#C6C9E0","secondary-90":"#DDDFEC","secondary-95":"#EDEEF5","secondary-100":"#F8F8FB","neutral-10":"#161616","neutral-20":"#282828","neutral-30":"#393939","neutral-40":"#4E4E4E","neutral-50":"#686868","neutral-60":"#8E8E8E","neutral-70":"#AFAFB0","neutral-80":"#C7CACA","neutral-90":"#DDE1E2","neutral-95":"#EDEFEF","neutral-100":"#F9F9F9","success-10":"#081A0F","success-20":"#0E2D1B","success-30":"#154126","success-40":"#1C5A34","success-50":"#257645","success-60":"#44A068","success-70":"#64C189","success-80":"#80DCA5","success-90":"#B4ECCB","success-95":"#D5F6E2","success-100":"#EFFCF4","warning-10":"#221302","warning-20":"#3B2204","warning-30":"#543106","warning-40":"#744408","warning-50":"#98590C","warning-60":"#D07A13","warning-70":"#E4A244","warning-80":"#F5C26C","warning-90":"#FADBA6","warning-95":"#FCECD4","warning-100":"#FDF7F0","error-10":"#330505","error-20":"#550808","error-30":"#750C0C","error-40":"#9E130F","error-50":"#CB2213","error-60":"#DE6C6C","error-70":"#E89B9B","error-80":"#EFBEBE","error-90":"#F5D9D9","error-95":"#F9ECEC","error-100":"#FCF7F7","info-10":"#021824","info-20":"#032B3F","info-30":"#053D59","info-40":"#065478","info-50":"#176E9B","info-60":"#5296BE","info-70":"#82B5DA","info-80":"#ACCFE7","info-90":"#CCE3F1","info-95":"#E3F1F8","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000","primary-inverse":"#FEAB10"},ccube:{"brand-10":"#1F1221","brand-20":"#371F3B","brand-30":"#4E2C53","brand-40":"#6B3E73","brand-50":"#8D5197","brand-60":"#FF3399","brand-70":"#FF88C4","brand-80":"#FFB3D9","brand-90":"#FFD4E9","brand-95":"#FFE8F3","brand-100":"#FFD6EB","primary-10":"#1F1221","primary-20":"#371F3B","primary-30":"#4E2C53","primary-40":"#6B3E73","primary-50":"#8D5197","primary-60":"#B07DB7","primary-70":"#C7A3CC","primary-80":"#D9C2DD","primary-90":"#E9DBEB","primary-95":"#F3ECF4","primary-100":"#FAF7FA","secondary-10":"#2D091B","secondary-20":"#4D0F2E","secondary-30":"#6B1540","secondary-40":"#931D58","secondary-50":"#C02673","secondary-60":"#FF409F","secondary-70":"#FF88C4","secondary-80":"#FFB3D9","secondary-90":"#FFD4E9","secondary-95":"#FFE8F3","secondary-100":"#FFF8FC","neutral-10":"#161616","neutral-20":"#282828","neutral-30":"#393939","neutral-40":"#4E4E4E","neutral-50":"#686868","neutral-60":"#8E8E8E","neutral-70":"#AFAFB0","neutral-80":"#C7CACA","neutral-90":"#DDE1E2","neutral-95":"#EDEFEF","neutral-100":"#F9F9F9","success-10":"#081A0F","success-20":"#0E2D1B","success-30":"#154126","success-40":"#1C5A34","success-50":"#257645","success-60":"#44A068","success-70":"#64C189","success-80":"#80DCA5","success-90":"#B4ECCB","success-95":"#D5F6E2","success-100":"#EFFCF4","warning-10":"#221302","warning-20":"#3B2204","warning-30":"#543106","warning-40":"#744408","warning-50":"#98590C","warning-60":"#D07A13","warning-70":"#E4A244","warning-80":"#F5C26C","warning-90":"#FADBA6","warning-95":"#FCECD4","warning-100":"#FDF7F0","error-10":"#330505","error-20":"#550808","error-30":"#750C0C","error-40":"#9E130F","error-50":"#CB2213","error-60":"#DE6C6C","error-70":"#E89B9B","error-80":"#EFBEBE","error-90":"#F5D9D9","error-95":"#F9ECEC","error-100":"#FCF7F7","info-10":"#021824","info-20":"#032B3F","info-30":"#053D59","info-40":"#065478","info-50":"#176E9B","info-60":"#5296BE","info-70":"#82B5DA","info-80":"#ACCFE7","info-90":"#CCE3F1","info-95":"#E3F1F8","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000","primary-inverse":"#FEAB10"}},defaultValue:"lifesg"},ot=e=>r=>{var t;const n=r.theme,i=rt(at,null==n?void 0:n.colourScheme);return(null===(t=null==n?void 0:n.overrides)||void 0===t?void 0:t.primitiveColour)?et(i,e,n.overrides.primitiveColour):i[e]},st={"brand-10":ot("brand-10"),"brand-20":ot("brand-20"),"brand-30":ot("brand-30"),"brand-40":ot("brand-40"),"brand-50":ot("brand-50"),"brand-60":ot("brand-60"),"brand-70":ot("brand-70"),"brand-80":ot("brand-80"),"brand-90":ot("brand-90"),"brand-95":ot("brand-95"),"brand-100":ot("brand-100"),"primary-10":ot("primary-10"),"primary-20":ot("primary-20"),"primary-30":ot("primary-30"),"primary-40":ot("primary-40"),"primary-50":ot("primary-50"),"primary-60":ot("primary-60"),"primary-70":ot("primary-70"),"primary-80":ot("primary-80"),"primary-90":ot("primary-90"),"primary-95":ot("primary-95"),"primary-100":ot("primary-100"),"secondary-10":ot("secondary-10"),"secondary-20":ot("secondary-20"),"secondary-30":ot("secondary-30"),"secondary-40":ot("secondary-40"),"secondary-50":ot("secondary-50"),"secondary-60":ot("secondary-60"),"secondary-70":ot("secondary-70"),"secondary-80":ot("secondary-80"),"secondary-90":ot("secondary-90"),"secondary-95":ot("secondary-95"),"secondary-100":ot("secondary-100"),"neutral-10":ot("neutral-10"),"neutral-20":ot("neutral-20"),"neutral-30":ot("neutral-30"),"neutral-40":ot("neutral-40"),"neutral-50":ot("neutral-50"),"neutral-60":ot("neutral-60"),"neutral-70":ot("neutral-70"),"neutral-80":ot("neutral-80"),"neutral-90":ot("neutral-90"),"neutral-95":ot("neutral-95"),"neutral-100":ot("neutral-100"),"success-10":ot("success-10"),"success-20":ot("success-20"),"success-30":ot("success-30"),"success-40":ot("success-40"),"success-50":ot("success-50"),"success-60":ot("success-60"),"success-70":ot("success-70"),"success-80":ot("success-80"),"success-90":ot("success-90"),"success-95":ot("success-95"),"success-100":ot("success-100"),"warning-10":ot("warning-10"),"warning-20":ot("warning-20"),"warning-30":ot("warning-30"),"warning-40":ot("warning-40"),"warning-50":ot("warning-50"),"warning-60":ot("warning-60"),"warning-70":ot("warning-70"),"warning-80":ot("warning-80"),"warning-90":ot("warning-90"),"warning-95":ot("warning-95"),"warning-100":ot("warning-100"),"error-10":ot("error-10"),"error-20":ot("error-20"),"error-30":ot("error-30"),"error-40":ot("error-40"),"error-50":ot("error-50"),"error-60":ot("error-60"),"error-70":ot("error-70"),"error-80":ot("error-80"),"error-90":ot("error-90"),"error-95":ot("error-95"),"error-100":ot("error-100"),"info-10":ot("info-10"),"info-20":ot("info-20"),"info-30":ot("info-30"),"info-40":ot("info-40"),"info-50":ot("info-50"),"info-60":ot("info-60"),"info-70":ot("info-70"),"info-80":ot("info-80"),"info-90":ot("info-90"),"info-95":ot("info-95"),"info-100":ot("info-100"),white:ot("white"),black:ot("black"),"primary-inverse":ot("primary-inverse")},lt={text:ot("neutral-20"),"text-subtle":ot("neutral-30"),"text-subtler":ot("neutral-50"),"text-subtlest":ot("neutral-60"),"text-primary":ot("primary-50"),"text-hover":ot("primary-40"),"text-selected":ot("primary-50"),"text-selected-hover":ot("primary-40"),"text-disabled":ot("neutral-50"),"text-disabled-subtle":ot("neutral-60"),"text-disabled-subtlest":ot("neutral-80"),"text-selected-disabled":ot("neutral-20"),"text-success":ot("success-40"),"text-warning":ot("warning-40"),"text-error":ot("error-40"),"text-info":ot("info-40"),"text-inverse":ot("white"),icon:ot("neutral-50"),"icon-subtle":ot("neutral-60"),"icon-strongest":ot("neutral-20"),"icon-primary":ot("primary-50"),"icon-primary-subtle":ot("primary-60"),"icon-primary-subtlest":ot("primary-70"),"icon-hover":ot("primary-40"),"icon-selected":ot("primary-50"),"icon-selected-hover":ot("primary-40"),"icon-disabled":ot("neutral-50"),"icon-disabled-subtle":ot("neutral-60"),"icon-selected-disabled":ot("neutral-60"),"icon-success":ot("success-50"),"icon-warning":ot("warning-60"),"icon-error":ot("error-50"),"icon-error-strong":ot("error-40"),"icon-info":ot("info-50"),"icon-inverse":ot("white"),"icon-primary-inverse":ot("primary-inverse"),border:ot("neutral-90"),"border-strong":ot("neutral-70"),"border-stronger":ot("neutral-50"),"border-primary":ot("primary-50"),"border-primary-subtle":ot("primary-60"),"border-hover":ot("primary-90"),"border-hover-strong":ot("primary-60"),"border-selected":ot("primary-50"),"border-selected-subtle":ot("primary-70"),"border-selected-subtlest":ot("primary-90"),"border-selected-hover":ot("primary-40"),"border-focus":ot("primary-60"),"border-focus-strong":ot("primary-50"),"border-disabled":ot("neutral-90"),"border-selected-disabled":ot("neutral-70"),"border-success":ot("success-60"),"border-warning":ot("warning-60"),"border-error":ot("error-60"),"border-error-focus":ot("error-60"),"border-error-focus-strong":ot("error-40"),"border-error-strong":ot("error-40"),"border-info":ot("info-60"),bg:ot("white"),"bg-strong":ot("neutral-100"),"bg-stronger":ot("neutral-95"),"bg-strongest":ot("neutral-90"),"bg-hover":ot("primary-95"),"bg-hover-strong":ot("primary-90"),"bg-hover-subtle":ot("primary-100"),"bg-hover-neutral":ot("neutral-100"),"bg-hover-neutral-strong":ot("neutral-90"),"bg-selected":ot("primary-95"),"bg-selected-hover":ot("primary-90"),"bg-selected-strong":ot("primary-90"),"bg-selected-stronger":ot("primary-70"),"bg-selected-strongest":ot("primary-50"),"bg-selected-strongest-hover":ot("primary-40"),"bg-disabled":ot("neutral-95"),"bg-selected-disabled":ot("neutral-95"),"bg-selected-stronger-disabled":ot("neutral-70"),"bg-success":ot("success-100"),"bg-success-hover":ot("success-95"),"bg-success-strong":ot("success-50"),"bg-success-strong-hover":ot("success-40"),"bg-warning":ot("warning-100"),"bg-warning-hover":ot("warning-95"),"bg-warning-strong":ot("warning-50"),"bg-warning-strong-hover":ot("warning-40"),"bg-info":ot("info-100"),"bg-info-hover":ot("info-95"),"bg-info-strong":ot("info-50"),"bg-info-strong-hover":ot("info-40"),"bg-error":ot("error-100"),"bg-error-hover":ot("error-95"),"bg-error-strong":ot("error-50"),"bg-error-strong-hover":ot("error-40"),"bg-inverse":ot("neutral-20"),"bg-inverse-subtle":ot("neutral-30"),"bg-inverse-subtler":ot("neutral-50"),"bg-inverse-subtlest":ot("neutral-60"),"bg-inverse-hover":ot("neutral-40"),"bg-primary":ot("primary-50"),"bg-primary-subtle":ot("primary-60"),"bg-primary-subtler":ot("primary-95"),"bg-primary-subtlest":ot("primary-100"),"bg-available":"#6DD0A1","bg-primary-hover":ot("primary-40"),"bg-primary-subtlest-hover":ot("primary-90"),"bg-primary-subtlest-selected":ot("primary-90"),"overlay-strong":"rgba(40, 40, 40, 0.85)","overlay-subtle":"rgba(40, 40, 40, 0.20)",hyperlink:ot("primary-50"),"hyperlink-hover":ot("primary-40"),"hyperlink-visited":ot("primary-40"),"hyperlink-inverse":ot("primary-inverse"),"focus-ring":ot("black"),"focus-ring-inverse":ot("white")},dt={collections:{lifesg:lt,bookingsg:lt,rbs:lt,mylegacy:lt,ccube:lt},defaultValue:"lifesg"},ct=e=>r=>{var t;const n=r.theme,i=rt(dt,null==n?void 0:n.colourScheme),a=(null===(t=null==n?void 0:n.overrides)||void 0===t?void 0:t.semanticColour)?et(i,e,n.overrides.semanticColour):i[e];return"function"==typeof a?a(r):a},ut={text:ct("text"),"text-subtle":ct("text-subtle"),"text-subtler":ct("text-subtler"),"text-subtlest":ct("text-subtlest"),"text-primary":ct("text-primary"),"text-hover":ct("text-hover"),"text-selected":ct("text-selected"),"text-selected-hover":ct("text-selected-hover"),"text-disabled":ct("text-disabled"),"text-disabled-subtle":ct("text-disabled-subtle"),"text-disabled-subtlest":ct("text-disabled-subtlest"),"text-selected-disabled":ct("text-selected-disabled"),"text-success":ct("text-success"),"text-warning":ct("text-warning"),"text-error":ct("text-error"),"text-info":ct("text-info"),"text-inverse":ct("text-inverse"),icon:ct("icon"),"icon-subtle":ct("icon-subtle"),"icon-strongest":ct("icon-strongest"),"icon-primary":ct("icon-primary"),"icon-primary-subtle":ct("icon-primary-subtle"),"icon-primary-subtlest":ct("icon-primary-subtlest"),"icon-hover":ct("icon-hover"),"icon-selected":ct("icon-selected"),"icon-selected-hover":ct("icon-selected-hover"),"icon-disabled":ct("icon-disabled"),"icon-disabled-subtle":ct("icon-disabled-subtle"),"icon-selected-disabled":ct("icon-selected-disabled"),"icon-success":ct("icon-success"),"icon-warning":ct("icon-warning"),"icon-error":ct("icon-error"),"icon-error-strong":ct("icon-error-strong"),"icon-info":ct("icon-info"),"icon-inverse":ct("icon-inverse"),"icon-primary-inverse":ct("icon-primary-inverse"),border:ct("border"),"border-strong":ct("border-strong"),"border-stronger":ct("border-stronger"),"border-primary":ct("border-primary"),"border-primary-subtle":ct("border-primary-subtle"),"border-hover":ct("border-hover"),"border-hover-strong":ct("border-hover-strong"),"border-selected":ct("border-selected"),"border-selected-subtle":ct("border-selected-subtle"),"border-selected-subtlest":ct("border-selected-subtlest"),"border-selected-hover":ct("border-selected-hover"),"border-focus":ct("border-focus"),"border-focus-strong":ct("border-focus-strong"),"border-disabled":ct("border-disabled"),"border-selected-disabled":ct("border-selected-disabled"),"border-success":ct("border-success"),"border-warning":ct("border-warning"),"border-error":ct("border-error"),"border-error-focus":ct("border-error-focus"),"border-error-focus-strong":ct("border-error-focus-strong"),"border-error-strong":ct("border-error-strong"),"border-info":ct("border-info"),bg:ct("bg"),"bg-strong":ct("bg-strong"),"bg-stronger":ct("bg-stronger"),"bg-strongest":ct("bg-strongest"),"bg-hover":ct("bg-hover"),"bg-hover-strong":ct("bg-hover-strong"),"bg-hover-subtle":ct("bg-hover-subtle"),"bg-hover-neutral":ct("bg-hover-neutral"),"bg-hover-neutral-strong":ct("bg-hover-neutral-strong"),"bg-selected":ct("bg-selected"),"bg-selected-hover":ct("bg-selected-hover"),"bg-selected-strong":ct("bg-selected-strong"),"bg-selected-stronger":ct("bg-selected-stronger"),"bg-selected-strongest":ct("bg-selected-strongest"),"bg-selected-strongest-hover":ct("bg-selected-strongest-hover"),"bg-disabled":ct("bg-disabled"),"bg-selected-disabled":ct("bg-selected-disabled"),"bg-selected-stronger-disabled":ct("bg-selected-stronger-disabled"),"bg-success":ct("bg-success"),"bg-success-hover":ct("bg-success-hover"),"bg-success-strong":ct("bg-success-strong"),"bg-success-strong-hover":ct("bg-success-strong-hover"),"bg-warning":ct("bg-warning"),"bg-warning-hover":ct("bg-warning-hover"),"bg-warning-strong":ct("bg-warning-strong"),"bg-warning-strong-hover":ct("bg-warning-strong-hover"),"bg-info":ct("bg-info"),"bg-info-hover":ct("bg-info-hover"),"bg-info-strong":ct("bg-info-strong"),"bg-info-strong-hover":ct("bg-info-strong-hover"),"bg-error":ct("bg-error"),"bg-error-hover":ct("bg-error-hover"),"bg-error-strong":ct("bg-error-strong"),"bg-error-strong-hover":ct("bg-error-strong-hover"),"bg-inverse":ct("bg-inverse"),"bg-inverse-subtle":ct("bg-inverse-subtle"),"bg-inverse-subtler":ct("bg-inverse-subtler"),"bg-inverse-subtlest":ct("bg-inverse-subtlest"),"bg-inverse-hover":ct("bg-inverse-hover"),"bg-primary":ct("bg-primary"),"bg-primary-subtle":ct("bg-primary-subtle"),"bg-primary-subtler":ct("bg-primary-subtler"),"bg-primary-subtlest":ct("bg-primary-subtlest"),"bg-available":ct("bg-available"),"bg-primary-hover":ct("bg-primary-hover"),"bg-primary-subtlest-hover":ct("bg-primary-subtlest-hover"),"bg-primary-subtlest-selected":ct("bg-primary-subtlest-selected"),"overlay-strong":ct("overlay-strong"),"overlay-subtle":ct("overlay-subtle"),hyperlink:ct("hyperlink"),"hyperlink-hover":ct("hyperlink-hover"),"hyperlink-visited":ct("hyperlink-visited"),"hyperlink-inverse":ct("hyperlink-inverse"),"focus-ring":ct("focus-ring"),"focus-ring-inverse":ct("focus-ring-inverse")},gt={collections:{lifesg:{"width-010":1,"width-020":2,"width-040":4,solid:"solid","dashed-default":e=>r=>{var n,i,a;const{thickness:o,radius:s,colour:l}=e||{},d=null!==(n="function"==typeof o?o(r):o)&&void 0!==n?n:bt["width-010"](r),c=null!==(i="function"==typeof s?s(r):s)&&void 0!==i?i:0,u=null!==(a="function"==typeof l?l(r):l)&&void 0!==a?a:ut.border(r),g=encodeURIComponent(`<svg width='100%' height='100%' xmlns='http://www.w3.org/2000/svg'><rect width='100%' height='100%' fill='none' rx='${c}' ry='${c}' stroke='${u}' stroke-width='${d}' stroke-dasharray='4, 8' stroke-dashoffset='0' stroke-linecap='square'/></svg>`);return t`
            background-image: url("data:image/svg+xml,${g}");
            border-radius: ${c};
        `}}},defaultValue:"lifesg"},ht=e=>r=>{var t;const n=r.theme,i=rt(gt,null==n?void 0:n.borderScheme);return(null===(t=null==n?void 0:n.overrides)||void 0===t?void 0:t.border)?`${et(i,e,n.overrides.border)}px`:`${i[e]}px`},mt=e=>1===e.length&&"theme"in e[0],bt={"width-010":ht("width-010"),"width-020":ht("width-020"),"width-040":ht("width-040"),solid:(ft="solid",e=>{var r;const t=e.theme,n=rt(gt,null==t?void 0:t.borderScheme),i=(null===(r=null==t?void 0:t.overrides)||void 0===r?void 0:r.border)?et(n,ft,t.overrides.border):n[ft];return"function"==typeof i?i(e):i}),"dashed-default":(e=>(...r)=>t=>{var n;const i=mt(r)?[]:r,a=mt(r)?r[0]:t,o=a.theme,s=rt(gt,null==o?void 0:o.borderScheme);return((null===(n=null==o?void 0:o.overrides)||void 0===n?void 0:n.border)?et(s,e,o.overrides.border):s[e])(...i)(a)})("dashed-default")};var ft;const pt={collections:{lifesg:{"xxs-min":0,"xxs-max":320,"xs-min":321,"xs-max":375,"sm-min":376,"sm-max":420,"md-min":421,"md-max":767,"lg-min":768,"lg-max":1023,"xl-min":1024,"xl-max":1440,"xxl-min":1441,"xxs-column":8,"xs-column":8,"sm-column":8,"md-column":8,"lg-column":12,"xl-column":12,"xxl-column":12,"xxs-gutter":16,"xs-gutter":16,"sm-gutter":16,"md-gutter":16,"lg-gutter":32,"xl-gutter":32,"xxl-gutter":32,"xxs-margin":24,"xs-margin":24,"sm-margin":24,"md-margin":24,"lg-margin":48,"xl-margin":48,"xxl-margin":48}},defaultValue:"lifesg"},yt=e=>r=>{var t;const n=r.theme,i=rt(pt,null==n?void 0:n.breakpointScheme);let a;return a=(null===(t=null==n?void 0:n.overrides)||void 0===t?void 0:t.breakpoint)?et(i,e,n.overrides.breakpoint):i[e],a},vt={"xxs-min":yt("xxs-min"),"xxs-max":yt("xxs-max"),"xs-min":yt("xs-min"),"xs-max":yt("xs-max"),"sm-min":yt("sm-min"),"sm-max":yt("sm-max"),"md-min":yt("md-min"),"md-max":yt("md-max"),"lg-min":yt("lg-min"),"lg-max":yt("lg-max"),"xl-min":yt("xl-min"),"xl-max":yt("xl-max"),"xxl-min":yt("xxl-min"),"xxs-column":yt("xxs-column"),"xs-column":yt("xs-column"),"sm-column":yt("sm-column"),"md-column":yt("md-column"),"lg-column":yt("lg-column"),"xl-column":yt("xl-column"),"xxl-column":yt("xxl-column"),"xxs-gutter":yt("xxs-gutter"),"xs-gutter":yt("xs-gutter"),"sm-gutter":yt("sm-gutter"),"md-gutter":yt("md-gutter"),"lg-gutter":yt("lg-gutter"),"xl-gutter":yt("xl-gutter"),"xxl-gutter":yt("xxl-gutter"),"xxs-margin":yt("xxs-margin"),"xs-margin":yt("xs-margin"),"sm-margin":yt("sm-margin"),"md-margin":yt("md-margin"),"lg-margin":yt("lg-margin"),"xl-margin":yt("xl-margin"),"xxl-margin":yt("xxl-margin")},Ft=e=>("max-width"===e?["xxs","xs","sm","md","lg","xl"]:["xxs","xs","sm","md","lg","xl","xxl"]).reduce(((r,t)=>(r[t]=((e,r)=>{const t=vt["max-width"===e?`${r}-max`:`${r}-min`];return r=>{const n=t(r);return`@media screen and (${e}: ${n}px)`}})(e,t),r)),{}),xt={MaxWidth:Ft("max-width"),MinWidth:Ft("min-width")},wt={"header-size-xxl":"3rem","header-size-xl":"2.5rem","header-size-lg":"2rem","header-size-md":"1.625rem","header-size-sm":"1.375rem","header-size-xs":"1.125rem","header-lh-xxl":"3.5rem","header-lh-xl":"3rem","header-lh-lg":"2.5rem","header-lh-md":"2.25rem","header-lh-sm":"1.75rem","header-lh-xs":"1.625rem","header-ls-xxl":"-0.056rem","header-ls-xl":"-0.032rem","header-ls-lg":"-0.032rem","header-ls-md":"0rem","header-ls-sm":"0rem","header-ls-xs":"0rem","weight-light":"300","weight-regular":"400","weight-semibold":"600","weight-bold":"700","font-family":"Open Sans","body-size-baseline":"1.125rem","body-size-md":"1rem","body-size-sm":"0.875rem","body-size-xs":"0.75rem","body-lh-baseline":"1.625rem","body-lh-md":"1.5rem","body-lh-sm":"1.625rem","body-lh-xs":"1.25rem","body-ls-baseline":"0rem","body-ls-md":"0.014rem","body-ls-sm":"0.012rem","body-ls-xs":"0.012rem","formlabel-size-baseline":"1rem","formlabel-size-lg":"1.125rem","formlabel-lh-baseline":"1.5rem","formlabel-lh-lg":"1.625rem","formlabel-ls-baseline":"0.014rem","formlabel-ls-lg":"0rem"},Bt={collections:{lifesg:wt,bookingsg:{"header-size-xxl":"3rem","header-size-xl":"2.5rem","header-size-lg":"2rem","header-size-md":"1.625rem","header-size-sm":"1.375rem","header-size-xs":"1.125rem","header-lh-xxl":"3.5rem","header-lh-xl":"3rem","header-lh-lg":"2.5rem","header-lh-md":"2.25rem","header-lh-sm":"1.75rem","header-lh-xs":"1.75rem","header-ls-xxl":"-0.056rem","header-ls-xl":"-0.032rem","header-ls-lg":"-0.032rem","header-ls-md":"0rem","header-ls-sm":"0rem","header-ls-xs":"0rem","weight-light":"300","weight-regular":"400","weight-semibold":"600","weight-bold":"700","font-family":"Plus Jakarta Sans","body-size-baseline":"1.125rem","body-size-md":"1rem","body-size-sm":"0.875rem","body-size-xs":"0.75rem","body-lh-baseline":"1.75rem","body-lh-md":"1.5rem","body-lh-sm":"1.6rem","body-lh-xs":"1.2rem","body-ls-baseline":"0rem","body-ls-md":"0.014rem","body-ls-sm":"0.012rem","body-ls-xs":"0.012rem","formlabel-size-baseline":"1rem","formlabel-size-lg":"1.125rem","formlabel-lh-baseline":"1.5rem","formlabel-lh-lg":"1.75rem","formlabel-ls-baseline":"0.014rem","formlabel-ls-lg":"0rem"},rbs:wt,mylegacy:wt,ccube:wt},defaultValue:"lifesg"},Dt=e=>r=>{var t;const n=r.theme,i=rt(Bt,null==n?void 0:n.fontScheme);return(null===(t=null==n?void 0:n.overrides)||void 0===t?void 0:t.fontSpec)?et(i,e,n.overrides.fontSpec):i[e]},$t={"header-size-xxl":Dt("header-size-xxl"),"header-size-xl":Dt("header-size-xl"),"header-size-lg":Dt("header-size-lg"),"header-size-md":Dt("header-size-md"),"header-size-sm":Dt("header-size-sm"),"header-size-xs":Dt("header-size-xs"),"header-lh-xxl":Dt("header-lh-xxl"),"header-lh-xl":Dt("header-lh-xl"),"header-lh-lg":Dt("header-lh-lg"),"header-lh-md":Dt("header-lh-md"),"header-lh-sm":Dt("header-lh-sm"),"header-lh-xs":Dt("header-lh-xs"),"header-ls-xxl":Dt("header-ls-xxl"),"header-ls-xl":Dt("header-ls-xl"),"header-ls-lg":Dt("header-ls-lg"),"header-ls-md":Dt("header-ls-md"),"header-ls-sm":Dt("header-ls-sm"),"header-ls-xs":Dt("header-ls-xs"),"weight-light":Dt("weight-light"),"weight-regular":Dt("weight-regular"),"weight-semibold":Dt("weight-semibold"),"weight-bold":Dt("weight-bold"),"font-family":Dt("font-family"),"body-size-baseline":Dt("body-size-baseline"),"body-size-md":Dt("body-size-md"),"body-size-sm":Dt("body-size-sm"),"body-size-xs":Dt("body-size-xs"),"body-lh-baseline":Dt("body-lh-baseline"),"body-lh-md":Dt("body-lh-md"),"body-lh-sm":Dt("body-lh-sm"),"body-lh-xs":Dt("body-lh-xs"),"body-ls-baseline":Dt("body-ls-baseline"),"body-ls-md":Dt("body-ls-md"),"body-ls-sm":Dt("body-ls-sm"),"body-ls-xs":Dt("body-ls-xs"),"formlabel-size-baseline":Dt("formlabel-size-baseline"),"formlabel-size-lg":Dt("formlabel-size-lg"),"formlabel-lh-baseline":Dt("formlabel-lh-baseline"),"formlabel-lh-lg":Dt("formlabel-lh-lg"),"formlabel-ls-baseline":Dt("formlabel-ls-baseline"),"formlabel-ls-lg":Dt("formlabel-ls-lg")},St={collections:{lifesg:{none:0,xs:2,sm:4,md:8,lg:12,full:9999}},defaultValue:"lifesg"},Et=e=>r=>{var t;const n=r.theme,i=rt(St,null==n?void 0:n.radiusScheme);return(null===(t=null==n?void 0:n.overrides)||void 0===t?void 0:t.radius)?`${et(i,e,n.overrides.radius)}px`:`${i[e]}px`},Ct={none:Et("none"),xs:Et("xs"),sm:Et("sm"),md:Et("md"),lg:Et("lg"),full:Et("full")},At={collections:{lifesg:{"spacing-0":0,"spacing-4":4,"spacing-8":8,"spacing-12":12,"spacing-16":16,"spacing-20":20,"spacing-24":24,"spacing-32":32,"spacing-40":40,"spacing-48":48,"spacing-64":64,"spacing-72":72,"layout-xs":8,"layout-sm":16,"layout-md":24,"layout-lg":32,"layout-xl":48,"layout-xxl":64,"layout-xxxl":128}},defaultValue:"lifesg"},kt=e=>r=>{var t;const n=r.theme,i=rt(At,null==n?void 0:n.spacingScheme);return(null===(t=null==n?void 0:n.overrides)||void 0===t?void 0:t.spacing)?`${et(i,e,n.overrides.spacing)}px`:`${i[e]}px`},zt={"spacing-0":kt("spacing-0"),"spacing-4":kt("spacing-4"),"spacing-8":kt("spacing-8"),"spacing-12":kt("spacing-12"),"spacing-16":kt("spacing-16"),"spacing-20":kt("spacing-20"),"spacing-24":kt("spacing-24"),"spacing-32":kt("spacing-32"),"spacing-40":kt("spacing-40"),"spacing-48":kt("spacing-48"),"spacing-64":kt("spacing-64"),"spacing-72":kt("spacing-72"),"layout-xs":kt("layout-xs"),"layout-sm":kt("layout-sm"),"layout-md":kt("layout-md"),"layout-lg":kt("layout-lg"),"layout-xl":kt("layout-xl"),"layout-xxl":kt("layout-xxl"),"layout-xxxl":kt("layout-xxxl")},Ot=(e,r,n,i)=>t`
    font-family: ${Dt("font-family")};
    font-size: ${Dt(e)};
    font-weight: ${Dt(r)};
    line-height: ${Dt(n)};
    letter-spacing: ${Dt(i)};
`,Ht={"header-xxl-light":Ot("header-size-xxl","weight-light","header-lh-xxl","header-ls-xxl"),"header-xxl-regular":Ot("header-size-xxl","weight-regular","header-lh-xxl","header-ls-xxl"),"header-xxl-semibold":Ot("header-size-xxl","weight-semibold","header-lh-xxl","header-ls-xxl"),"header-xxl-bold":Ot("header-size-xxl","weight-bold","header-lh-xxl","header-ls-xxl"),"header-xl-light":Ot("header-size-xl","weight-light","header-lh-xl","header-ls-xl"),"header-xl-regular":Ot("header-size-xl","weight-regular","header-lh-xl","header-ls-xl"),"header-xl-semibold":Ot("header-size-xl","weight-semibold","header-lh-xl","header-ls-xl"),"header-xl-bold":Ot("header-size-xl","weight-bold","header-lh-xl","header-ls-xl"),"header-lg-light":Ot("header-size-lg","weight-light","header-lh-lg","header-ls-lg"),"header-lg-regular":Ot("header-size-lg","weight-regular","header-lh-lg","header-ls-lg"),"header-lg-semibold":Ot("header-size-lg","weight-semibold","header-lh-lg","header-ls-lg"),"header-lg-bold":Ot("header-size-lg","weight-bold","header-lh-lg","header-ls-lg"),"header-md-light":Ot("header-size-md","weight-light","header-lh-md","header-ls-md"),"header-md-regular":Ot("header-size-md","weight-regular","header-lh-md","header-ls-md"),"header-md-semibold":Ot("header-size-md","weight-semibold","header-lh-md","header-ls-md"),"header-md-bold":Ot("header-size-md","weight-bold","header-lh-md","header-ls-md"),"header-sm-light":Ot("header-size-sm","weight-light","header-lh-sm","header-ls-sm"),"header-sm-regular":Ot("header-size-sm","weight-regular","header-lh-sm","header-ls-sm"),"header-sm-semibold":Ot("header-size-sm","weight-semibold","header-lh-sm","header-ls-sm"),"header-sm-bold":Ot("header-size-sm","weight-bold","header-lh-sm","header-ls-sm"),"header-xs-light":Ot("header-size-xs","weight-light","header-lh-xs","header-ls-xs"),"header-xs-regular":Ot("header-size-xs","weight-regular","header-lh-xs","header-ls-xs"),"header-xs-semibold":Ot("header-size-xs","weight-semibold","header-lh-xs","header-ls-xs"),"header-xs-bold":Ot("header-size-xs","weight-bold","header-lh-xs","header-ls-xs"),"body-baseline-light":Ot("body-size-baseline","weight-light","body-lh-baseline","body-ls-baseline"),"body-baseline-regular":Ot("body-size-baseline","weight-regular","body-lh-baseline","body-ls-baseline"),"body-baseline-semibold":Ot("body-size-baseline","weight-semibold","body-lh-baseline","body-ls-baseline"),"body-baseline-bold":Ot("body-size-baseline","weight-bold","body-lh-baseline","body-ls-baseline"),"body-md-light":Ot("body-size-md","weight-light","body-lh-md","body-ls-md"),"body-md-regular":Ot("body-size-md","weight-regular","body-lh-md","body-ls-md"),"body-md-semibold":Ot("body-size-md","weight-semibold","body-lh-md","body-ls-md"),"body-md-bold":Ot("body-size-md","weight-bold","body-lh-md","body-ls-md"),"body-sm-light":Ot("body-size-sm","weight-light","body-lh-sm","body-ls-sm"),"body-sm-regular":Ot("body-size-sm","weight-regular","body-lh-sm","body-ls-sm"),"body-sm-semibold":Ot("body-size-sm","weight-semibold","body-lh-sm","body-ls-sm"),"body-sm-bold":Ot("body-size-sm","weight-bold","body-lh-sm","body-ls-sm"),"body-xs-light":Ot("body-size-xs","weight-light","body-lh-xs","body-ls-xs"),"body-xs-regular":Ot("body-size-xs","weight-regular","body-lh-xs","body-ls-xs"),"body-xs-semibold":Ot("body-size-xs","weight-semibold","body-lh-xs","body-ls-xs"),"body-xs-bold":Ot("body-size-xs","weight-bold","body-lh-xs","body-ls-xs"),"formlabel-baseline-semibold":Ot("formlabel-size-baseline","weight-semibold","formlabel-lh-baseline","formlabel-ls-baseline"),"formlabel-lg-semibold":Ot("formlabel-size-lg","weight-semibold","formlabel-lh-lg","formlabel-ls-lg")},Mt={collections:{lifesg:Ht,bookingsg:Ht,rbs:Ht,mylegacy:Ht,ccube:Ht},defaultValue:"lifesg"},_t=e=>r=>{var t;const n=r.theme,i=rt(Mt,null==n?void 0:n.fontScheme),a=(null===(t=null==n?void 0:n.overrides)||void 0===t?void 0:t.font)?et(i,e,n.overrides.font):i[e];return"function"==typeof a?a(r):a},jt={"header-xxl-light":_t("header-xxl-light"),"header-xxl-regular":_t("header-xxl-regular"),"header-xxl-semibold":_t("header-xxl-semibold"),"header-xxl-bold":_t("header-xxl-bold"),"header-xl-light":_t("header-xl-light"),"header-xl-regular":_t("header-xl-regular"),"header-xl-semibold":_t("header-xl-semibold"),"header-xl-bold":_t("header-xl-bold"),"header-lg-light":_t("header-lg-light"),"header-lg-regular":_t("header-lg-regular"),"header-lg-semibold":_t("header-lg-semibold"),"header-lg-bold":_t("header-lg-bold"),"header-md-light":_t("header-md-light"),"header-md-regular":_t("header-md-regular"),"header-md-semibold":_t("header-md-semibold"),"header-md-bold":_t("header-md-bold"),"header-sm-light":_t("header-sm-light"),"header-sm-regular":_t("header-sm-regular"),"header-sm-semibold":_t("header-sm-semibold"),"header-sm-bold":_t("header-sm-bold"),"header-xs-light":_t("header-xs-light"),"header-xs-regular":_t("header-xs-regular"),"header-xs-semibold":_t("header-xs-semibold"),"header-xs-bold":_t("header-xs-bold"),"body-baseline-light":_t("body-baseline-light"),"body-baseline-regular":_t("body-baseline-regular"),"body-baseline-semibold":_t("body-baseline-semibold"),"body-baseline-bold":_t("body-baseline-bold"),"body-md-light":_t("body-md-light"),"body-md-regular":_t("body-md-regular"),"body-md-semibold":_t("body-md-semibold"),"body-md-bold":_t("body-md-bold"),"body-sm-light":_t("body-sm-light"),"body-sm-regular":_t("body-sm-regular"),"body-sm-semibold":_t("body-sm-semibold"),"body-sm-bold":_t("body-sm-bold"),"body-xs-light":_t("body-xs-light"),"body-xs-regular":_t("body-xs-regular"),"body-xs-semibold":_t("body-xs-semibold"),"body-xs-bold":_t("body-xs-bold"),"formlabel-baseline-semibold":_t("formlabel-baseline-semibold"),"formlabel-lg-semibold":_t("formlabel-lg-semibold")},Wt=Object.assign(Object.assign({},ut),{Primitive:st}),Tt=Object.assign(Object.assign({},jt),{Spec:$t}),Lt=it,It=bt,Yt=zt,Rt=Ct,Pt=xt,Nt=r.button`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: ${Yt["spacing-32"]};
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
                background-color: ${Wt["bg-hover-neutral"]};
            `}
    }
`,Vt=l.forwardRef(((e,r)=>{var{children:t,focusHighlight:n=!0,focusOutline:i="none",type:o="button"}=e,s=w(e,["children","focusHighlight","focusOutline","type"]);return a(Nt,Object.assign({ref:r,$outline:i,$highlight:n,type:o},s,{children:t}))})),Ut="all 300ms cubic-bezier(0.21, 0.79, 0.53, 1)",Jt={notCompress:6,compress:4},Xt=r.div`
    position: ${e=>e.$fixed?"sticky":"relative"};
    background-color: white;
    z-index: 30;
    top: 0;
    left: 0;
    right: 0;
    width: 100%;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
`,Gt=r.nav`
    height: ${e=>e.$compress?Jt.compress:Jt.notCompress}rem;
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    position: relative;
    transition: ${Ut};

    ${Pt.MaxWidth.lg} {
        height: ${3.5}rem;
    }
`,Qt=r.div`
    display: flex;
    height: 100%;
    margin-left: ${e=>e.$hideNavBranding?"0":"5rem"};
    flex: 1;
    justify-content: flex-end;

    ${Pt.MaxWidth.lg} {
        margin-left: 0rem;
    }
`,Zt=r(Vt)`
    display: none;

    ${Pt.MaxWidth.lg} {
        display: flex;
        padding: 0 1.5rem;
        margin-right: -1.5rem;
    }
`,Kt=r(e)`
    height: 1.5rem;
    width: 1.5rem;
    color: ${Wt.icon};
`,qt=r.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    flex-shrink: 0;

    height: ${e=>e.$compress?1.5:2}rem;

    ${Pt.MaxWidth.lg} {
        height: 1.5rem;
    }

    ${Pt.MaxWidth.xxs} {
        height: 1.25rem;
    }
`,en=r.div`
    display: flex;
    background-color: ${Wt.border};
    height: 100%;
    width: 1px;
    margin: 0 ${e=>e.$compress?1:1.5}rem;

    ${Pt.MaxWidth.lg} {
        margin: 0 1rem;
    }

    ${Pt.MaxWidth.sm} {
        width: 2px;
        margin: 0 0.75rem;
    }
`,rn={mobileS:320,mobileM:375,mobileL:480,tablet:1199,desktopM:1399,desktopL:1999,desktop4k:3840},tn=e=>Object.keys(rn).reduce(((r,t)=>{const n=rn[t];return r[t]=`@media screen and (${e}: ${n}px)`,r}),{}),nn=tn("max-width"),an=(tn("min-width"),r.div`
    position: relative;
    ${e=>{const{$desktopStart:r,$desktopSpan:n,$tabletStart:i,$tabletSpan:a,$mobileStart:o,$mobileSpan:s}=e;return t`
            grid-column: ${r||"auto"} / span ${n||1};

            ${nn.tablet} {
                grid-column: ${i||"auto"} / span
                    ${a||1};
            }

            ${nn.mobileL} {
                grid-column: ${o||"auto"} / span
                    ${s||1};
            }
        `}}
`),on=l.forwardRef(((e,r)=>{const{mobileCols:t,tabletCols:n,desktopCols:i}=e,o=w(e,["mobileCols","tabletCols","desktopCols"]);return a(an,Object.assign({ref:r},(()=>{const e=n||t,r=t,a=sn(i||n||t),o=sn(e),s=sn(r);return{$desktopSpan:a.span,$desktopStart:a.start,$mobileSpan:s.span,$mobileStart:s.start,$tabletSpan:o.span,$tabletStart:o.start}})(),o))})),sn=e=>{if(Array.isArray(e)&&e.length>1){const[r,t]=e,n=r<=t?r:t,i=r<=t?t:r;let a;return a=i===n?1:i-n,{start:n,span:a}}return"number"==typeof e?{start:void 0,span:e}:{start:void 0,span:void 0}},ln=l.forwardRef(((e,r)=>{const{children:t,"data-testid":n="container",type:i="flex",stretch:o=!1}=e,s=w(e,["children","data-testid","type","stretch"]);return a(dn,Object.assign({ref:r,"data-testid":n,$type:i,$stretch:o},s,{children:t}))})),dn=r.div`
    flex-grow: 1;
    margin: 0 auto;
    position: relative;
    width: auto;
    height: auto;

    ${e=>e.$stretch?t`
                padding: 0 3rem;
            `:t`
                padding: 0 0.75rem;
                /* Max width restrictions */
                max-width: 1320px;

                ${nn.desktopM} {
                    max-width: 1140px;
                }
            `}
    ${nn.tablet} {
        max-width: 720px;
    }
    ${nn.mobileL} {
        width: 100%;
        padding: 0;
        max-width: unset;
    }

    ${e=>{switch(e.$type){case"grid":return t`
                    column-gap: 2rem;
                    display: grid;
                    grid-template-columns: repeat(12, minmax(0, 1fr));

                    ${nn.tablet} {
                        column-gap: 1.5rem;
                        grid-template-columns: repeat(8, minmax(0, 1fr));
                    }

                    ${nn.mobileL} {
                        column-gap: 1rem;
                        grid-template-columns: repeat(4, minmax(0, 1fr));
                    }
                `;case"flex-column":return t`
                    display: flex;
                    flex-direction: column;
                `;default:return t`
                    display: flex;
                `}}}
`,cn=l.forwardRef(((e,r)=>{const{children:t,"data-testid":n="section",stretch:i=!1}=e,o=w(e,["children","data-testid","stretch"]);return a(un,Object.assign({ref:r,"data-testid":n,$stretch:i},o,{children:t}))})),un=r.section`
    display: block;
    position: relative;
    ${e=>e.$stretch?t`
                ${nn.tablet} {
                    padding: 0 1.5rem;

                    // Extra enforcement
                    padding-left: 1.5rem !important;
                    padding-right: 1.5rem !important;
                }
            `:t`
                padding: 0 1.5rem;

                // Extra enforcement
                padding-left: 1.5rem !important;
                padding-right: 1.5rem !important;
            `}
`,gn=l.forwardRef(((e,r)=>{const{children:t,"data-testid":n="content",className:i,type:o="flex",stretch:s=!1}=e,l=w(e,["children","data-testid","className","type","stretch"]);return a(cn,Object.assign({ref:r,"data-testid":n,className:i,stretch:s},l,{children:a(ln,Object.assign({"data-testid":`${n}-container`,type:o,"data-id":"container",stretch:s},{children:t}))}))})),hn={Section:cn,Container:ln,Content:gn,ColDiv:on},mn=r.div`
    background: hsl(0, 0%, 94%);
    padding: 0 0.5rem;

    ${Pt.MaxWidth.sm} {
        padding: 0;
    }
`,bn=()=>{d((()=>{e()||r()}),[]);const e=()=>document.getElementById(fn),r=()=>{if(!document.getElementById(fn)){const e=document.createElement("script");e.id=fn,e.type="module",e.src=pn,document.head.appendChild(e)}};return a(mn,{dangerouslySetInnerHTML:{__html:"<sgds-masthead></sgds-masthead>"}})},fn="lifesg-ds-masthead-script",pn="https://cdn.jsdelivr.net/npm/@govtechsg/sgds-web-component/Masthead/index.js";var yn={exports:{}};yn.exports=function(){var e=1e3,r=6e4,t=36e5,n="millisecond",i="second",a="minute",o="hour",s="day",l="week",d="month",c="quarter",u="year",g="date",h="Invalid Date",m=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,b=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,f={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(e){var r=["th","st","nd","rd"],t=e%100;return"["+e+(r[(t-20)%10]||r[t]||r[0])+"]"}},p=function(e,r,t){var n=String(e);return!n||n.length>=r?e:""+Array(r+1-n.length).join(t)+e},y={s:p,z:function(e){var r=-e.utcOffset(),t=Math.abs(r),n=Math.floor(t/60),i=t%60;return(r<=0?"+":"-")+p(n,2,"0")+":"+p(i,2,"0")},m:function e(r,t){if(r.date()<t.date())return-e(t,r);var n=12*(t.year()-r.year())+(t.month()-r.month()),i=r.clone().add(n,d),a=t-i<0,o=r.clone().add(n+(a?-1:1),d);return+(-(n+(t-i)/(a?i-o:o-i))||0)},a:function(e){return e<0?Math.ceil(e)||0:Math.floor(e)},p:function(e){return{M:d,y:u,w:l,d:s,D:g,h:o,m:a,s:i,ms:n,Q:c}[e]||String(e||"").toLowerCase().replace(/s$/,"")},u:function(e){return void 0===e}},v="en",F={};F[v]=f;var x="$isDayjsObject",w=function(e){return e instanceof S||!(!e||!e[x])},B=function e(r,t,n){var i;if(!r)return v;if("string"==typeof r){var a=r.toLowerCase();F[a]&&(i=a),t&&(F[a]=t,i=a);var o=r.split("-");if(!i&&o.length>1)return e(o[0])}else{var s=r.name;F[s]=r,i=s}return!n&&i&&(v=i),i||!n&&v},D=function(e,r){if(w(e))return e.clone();var t="object"==typeof r?r:{};return t.date=e,t.args=arguments,new S(t)},$=y;$.l=B,$.i=w,$.w=function(e,r){return D(e,{locale:r.$L,utc:r.$u,x:r.$x,$offset:r.$offset})};var S=function(){function f(e){this.$L=B(e.locale,null,!0),this.parse(e),this.$x=this.$x||e.x||{},this[x]=!0}var p=f.prototype;return p.parse=function(e){this.$d=function(e){var r=e.date,t=e.utc;if(null===r)return new Date(NaN);if($.u(r))return new Date;if(r instanceof Date)return new Date(r);if("string"==typeof r&&!/Z$/i.test(r)){var n=r.match(m);if(n){var i=n[2]-1||0,a=(n[7]||"0").substring(0,3);return t?new Date(Date.UTC(n[1],i,n[3]||1,n[4]||0,n[5]||0,n[6]||0,a)):new Date(n[1],i,n[3]||1,n[4]||0,n[5]||0,n[6]||0,a)}}return new Date(r)}(e),this.init()},p.init=function(){var e=this.$d;this.$y=e.getFullYear(),this.$M=e.getMonth(),this.$D=e.getDate(),this.$W=e.getDay(),this.$H=e.getHours(),this.$m=e.getMinutes(),this.$s=e.getSeconds(),this.$ms=e.getMilliseconds()},p.$utils=function(){return $},p.isValid=function(){return!(this.$d.toString()===h)},p.isSame=function(e,r){var t=D(e);return this.startOf(r)<=t&&t<=this.endOf(r)},p.isAfter=function(e,r){return D(e)<this.startOf(r)},p.isBefore=function(e,r){return this.endOf(r)<D(e)},p.$g=function(e,r,t){return $.u(e)?this[r]:this.set(t,e)},p.unix=function(){return Math.floor(this.valueOf()/1e3)},p.valueOf=function(){return this.$d.getTime()},p.startOf=function(e,r){var t=this,n=!!$.u(r)||r,c=$.p(e),h=function(e,r){var i=$.w(t.$u?Date.UTC(t.$y,r,e):new Date(t.$y,r,e),t);return n?i:i.endOf(s)},m=function(e,r){return $.w(t.toDate()[e].apply(t.toDate("s"),(n?[0,0,0,0]:[23,59,59,999]).slice(r)),t)},b=this.$W,f=this.$M,p=this.$D,y="set"+(this.$u?"UTC":"");switch(c){case u:return n?h(1,0):h(31,11);case d:return n?h(1,f):h(0,f+1);case l:var v=this.$locale().weekStart||0,F=(b<v?b+7:b)-v;return h(n?p-F:p+(6-F),f);case s:case g:return m(y+"Hours",0);case o:return m(y+"Minutes",1);case a:return m(y+"Seconds",2);case i:return m(y+"Milliseconds",3);default:return this.clone()}},p.endOf=function(e){return this.startOf(e,!1)},p.$set=function(e,r){var t,l=$.p(e),c="set"+(this.$u?"UTC":""),h=(t={},t[s]=c+"Date",t[g]=c+"Date",t[d]=c+"Month",t[u]=c+"FullYear",t[o]=c+"Hours",t[a]=c+"Minutes",t[i]=c+"Seconds",t[n]=c+"Milliseconds",t)[l],m=l===s?this.$D+(r-this.$W):r;if(l===d||l===u){var b=this.clone().set(g,1);b.$d[h](m),b.init(),this.$d=b.set(g,Math.min(this.$D,b.daysInMonth())).$d}else h&&this.$d[h](m);return this.init(),this},p.set=function(e,r){return this.clone().$set(e,r)},p.get=function(e){return this[$.p(e)]()},p.add=function(n,c){var g,h=this;n=Number(n);var m=$.p(c),b=function(e){var r=D(h);return $.w(r.date(r.date()+Math.round(e*n)),h)};if(m===d)return this.set(d,this.$M+n);if(m===u)return this.set(u,this.$y+n);if(m===s)return b(1);if(m===l)return b(7);var f=(g={},g[a]=r,g[o]=t,g[i]=e,g)[m]||1,p=this.$d.getTime()+n*f;return $.w(p,this)},p.subtract=function(e,r){return this.add(-1*e,r)},p.format=function(e){var r=this,t=this.$locale();if(!this.isValid())return t.invalidDate||h;var n=e||"YYYY-MM-DDTHH:mm:ssZ",i=$.z(this),a=this.$H,o=this.$m,s=this.$M,l=t.weekdays,d=t.months,c=t.meridiem,u=function(e,t,i,a){return e&&(e[t]||e(r,n))||i[t].slice(0,a)},g=function(e){return $.s(a%12||12,e,"0")},m=c||function(e,r,t){var n=e<12?"AM":"PM";return t?n.toLowerCase():n};return n.replace(b,(function(e,n){return n||function(e){switch(e){case"YY":return String(r.$y).slice(-2);case"YYYY":return $.s(r.$y,4,"0");case"M":return s+1;case"MM":return $.s(s+1,2,"0");case"MMM":return u(t.monthsShort,s,d,3);case"MMMM":return u(d,s);case"D":return r.$D;case"DD":return $.s(r.$D,2,"0");case"d":return String(r.$W);case"dd":return u(t.weekdaysMin,r.$W,l,2);case"ddd":return u(t.weekdaysShort,r.$W,l,3);case"dddd":return l[r.$W];case"H":return String(a);case"HH":return $.s(a,2,"0");case"h":return g(1);case"hh":return g(2);case"a":return m(a,o,!0);case"A":return m(a,o,!1);case"m":return String(o);case"mm":return $.s(o,2,"0");case"s":return String(r.$s);case"ss":return $.s(r.$s,2,"0");case"SSS":return $.s(r.$ms,3,"0");case"Z":return i}return null}(e)||i.replace(":","")}))},p.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},p.diff=function(n,g,h){var m,b=this,f=$.p(g),p=D(n),y=(p.utcOffset()-this.utcOffset())*r,v=this-p,F=function(){return $.m(b,p)};switch(f){case u:m=F()/12;break;case d:m=F();break;case c:m=F()/3;break;case l:m=(v-y)/6048e5;break;case s:m=(v-y)/864e5;break;case o:m=v/t;break;case a:m=v/r;break;case i:m=v/e;break;default:m=v}return h?m:$.a(m)},p.daysInMonth=function(){return this.endOf(d).$D},p.$locale=function(){return F[this.$L]},p.locale=function(e,r){if(!e)return this.$L;var t=this.clone(),n=B(e,r,!0);return n&&(t.$L=n),t},p.clone=function(){return $.w(this.$d,this)},p.toDate=function(){return new Date(this.valueOf())},p.toJSON=function(){return this.isValid()?this.toISOString():null},p.toISOString=function(){return this.$d.toISOString()},p.toString=function(){return this.$d.toUTCString()},f}(),E=S.prototype;return D.prototype=E,[["$ms",n],["$s",i],["$m",a],["$H",o],["$W",s],["$M",d],["$y",u],["$D",g]].forEach((function(e){E[e[1]]=function(r){return this.$g(r,e[0],e[1])}})),D.extend=function(e,r){return e.$i||(e(r,S,D),e.$i=!0),D},D.locale=B,D.isDayjs=w,D.unix=function(e){return D(1e3*e)},D.en=F[v],D.Ls=F,D.p={},D}();var vn=D(yn.exports),Fn={exports:{}};Fn.exports=function(){var e={LTS:"h:mm:ss A",LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D, YYYY",LLL:"MMMM D, YYYY h:mm A",LLLL:"dddd, MMMM D, YYYY h:mm A"},r=/(\[[^[]*\])|([-_:/.,()\s]+)|(A|a|YYYY|YY?|MM?M?M?|Do|DD?|hh?|HH?|mm?|ss?|S{1,3}|z|ZZ?)/g,t=/\d\d/,n=/\d\d?/,i=/\d*[^-_:/,()\s\d]+/,a={},o=function(e){return(e=+e)+(e>68?1900:2e3)},s=function(e){return function(r){this[e]=+r}},l=[/[+-]\d\d:?(\d\d)?|Z/,function(e){(this.zone||(this.zone={})).offset=function(e){if(!e)return 0;if("Z"===e)return 0;var r=e.match(/([+-]|\d\d)/g),t=60*r[1]+(+r[2]||0);return 0===t?0:"+"===r[0]?-t:t}(e)}],d=function(e){var r=a[e];return r&&(r.indexOf?r:r.s.concat(r.f))},c=function(e,r){var t,n=a.meridiem;if(n){for(var i=1;i<=24;i+=1)if(e.indexOf(n(i,0,r))>-1){t=i>12;break}}else t=e===(r?"pm":"PM");return t},u={A:[i,function(e){this.afternoon=c(e,!1)}],a:[i,function(e){this.afternoon=c(e,!0)}],S:[/\d/,function(e){this.milliseconds=100*+e}],SS:[t,function(e){this.milliseconds=10*+e}],SSS:[/\d{3}/,function(e){this.milliseconds=+e}],s:[n,s("seconds")],ss:[n,s("seconds")],m:[n,s("minutes")],mm:[n,s("minutes")],H:[n,s("hours")],h:[n,s("hours")],HH:[n,s("hours")],hh:[n,s("hours")],D:[n,s("day")],DD:[t,s("day")],Do:[i,function(e){var r=a.ordinal,t=e.match(/\d+/);if(this.day=t[0],r)for(var n=1;n<=31;n+=1)r(n).replace(/\[|\]/g,"")===e&&(this.day=n)}],M:[n,s("month")],MM:[t,s("month")],MMM:[i,function(e){var r=d("months"),t=(d("monthsShort")||r.map((function(e){return e.slice(0,3)}))).indexOf(e)+1;if(t<1)throw new Error;this.month=t%12||t}],MMMM:[i,function(e){var r=d("months").indexOf(e)+1;if(r<1)throw new Error;this.month=r%12||r}],Y:[/[+-]?\d+/,s("year")],YY:[t,function(e){this.year=o(e)}],YYYY:[/\d{4}/,s("year")],Z:l,ZZ:l};function g(t){var n,i;n=t,i=a&&a.formats;for(var o=(t=n.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g,(function(r,t,n){var a=n&&n.toUpperCase();return t||i[n]||e[n]||i[a].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g,(function(e,r,t){return r||t.slice(1)}))}))).match(r),s=o.length,l=0;l<s;l+=1){var d=o[l],c=u[d],g=c&&c[0],h=c&&c[1];o[l]=h?{regex:g,parser:h}:d.replace(/^\[|\]$/g,"")}return function(e){for(var r={},t=0,n=0;t<s;t+=1){var i=o[t];if("string"==typeof i)n+=i.length;else{var a=i.regex,l=i.parser,d=e.slice(n),c=a.exec(d)[0];l.call(r,c),e=e.replace(c,"")}}return function(e){var r=e.afternoon;if(void 0!==r){var t=e.hours;r?t<12&&(e.hours+=12):12===t&&(e.hours=0),delete e.afternoon}}(r),r}}return function(e,r,t){t.p.customParseFormat=!0,e&&e.parseTwoDigitYear&&(o=e.parseTwoDigitYear);var n=r.prototype,i=n.parse;n.parse=function(e){var r=e.date,n=e.utc,o=e.args;this.$u=n;var s=o[1];if("string"==typeof s){var l=!0===o[2],d=!0===o[3],c=l||d,u=o[2];d&&(u=o[2]),a=this.$locale(),!l&&u&&(a=t.Ls[u]),this.$d=function(e,r,t){try{if(["x","X"].indexOf(r)>-1)return new Date(("X"===r?1e3:1)*e);var n=g(r)(e),i=n.year,a=n.month,o=n.day,s=n.hours,l=n.minutes,d=n.seconds,c=n.milliseconds,u=n.zone,h=new Date,m=o||(i||a?1:h.getDate()),b=i||h.getFullYear(),f=0;i&&!a||(f=a>0?a-1:h.getMonth());var p=s||0,y=l||0,v=d||0,F=c||0;return u?new Date(Date.UTC(b,f,m,p,y,v,F+60*u.offset*1e3)):t?new Date(Date.UTC(b,f,m,p,y,v,F)):new Date(b,f,m,p,y,v,F)}catch(e){return new Date("")}}(r,s,n),this.init(),u&&!0!==u&&(this.$L=this.locale(u).$L),c&&r!=this.format(s)&&(this.$d=new Date("")),a={}}else if(s instanceof Array)for(var h=s.length,m=1;m<=h;m+=1){o[1]=s[m-1];var b=t.apply(this,o);if(b.isValid()){this.$d=b.$d,this.$L=b.$L,this.init();break}m===h&&(this.$d=new Date(""))}else i.call(this,e)}}}();var xn=D(Fn.exports),wn={exports:{}};wn.exports=function(e,r,t){r.prototype.isBetween=function(e,r,n,i){var a=t(e),o=t(r),s="("===(i=i||"()")[0],l=")"===i[1];return(s?this.isAfter(a,n):!this.isBefore(a,n))&&(l?this.isBefore(o,n):!this.isAfter(o,n))||(s?this.isBefore(a,n):!this.isAfter(a,n))&&(l?this.isAfter(o,n):!this.isBefore(o,n))}};var Bn=D(wn.exports),Dn={exports:{}};Dn.exports=function(e,r){r.prototype.isSameOrAfter=function(e,r){return this.isSame(e,r)||this.isAfter(e,r)}};var $n=D(Dn.exports),Sn={exports:{}};Sn.exports=function(e,r){r.prototype.isSameOrBefore=function(e,r){return this.isSame(e,r)||this.isBefore(e,r)}};var En,Cn,An,kn=D(Sn.exports),zn={exports:{}},On=D(zn.exports=(En={year:0,month:1,day:2,hour:3,minute:4,second:5},Cn={},function(e,r,t){var n,i=function(e,r,t){void 0===t&&(t={});var n=new Date(e),i=function(e,r){void 0===r&&(r={});var t=r.timeZoneName||"short",n=e+"|"+t,i=Cn[n];return i||(i=new Intl.DateTimeFormat("en-US",{hour12:!1,timeZone:e,year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit",timeZoneName:t}),Cn[n]=i),i}(r,t);return i.formatToParts(n)},a=function(e,r){for(var n=i(e,r),a=[],o=0;o<n.length;o+=1){var s=n[o],l=s.type,d=s.value,c=En[l];c>=0&&(a[c]=parseInt(d,10))}var u=a[3],g=24===u?0:u,h=a[0]+"-"+a[1]+"-"+a[2]+" "+g+":"+a[4]+":"+a[5]+":000",m=+e;return(t.utc(h).valueOf()-(m-=m%1e3))/6e4},o=r.prototype;o.tz=function(e,r){void 0===e&&(e=n);var i=this.utcOffset(),a=this.toDate(),o=a.toLocaleString("en-US",{timeZone:e}),s=Math.round((a-new Date(o))/1e3/60),l=t(o,{locale:this.$L}).$set("millisecond",this.$ms).utcOffset(15*-Math.round(a.getTimezoneOffset()/15)-s,!0);if(r){var d=l.utcOffset();l=l.add(i-d,"minute")}return l.$x.$timezone=e,l},o.offsetName=function(e){var r=this.$x.$timezone||t.tz.guess(),n=i(this.valueOf(),r,{timeZoneName:e}).find((function(e){return"timezonename"===e.type.toLowerCase()}));return n&&n.value};var s=o.startOf;o.startOf=function(e,r){if(!this.$x||!this.$x.$timezone)return s.call(this,e,r);var n=t(this.format("YYYY-MM-DD HH:mm:ss:SSS"),{locale:this.$L});return s.call(n,e,r).tz(this.$x.$timezone,!0)},t.tz=function(e,r,i){var o=i&&r,s=i||r||n,l=a(+t(),s);if("string"!=typeof e)return t(e).tz(s);var d=function(e,r,t){var n=e-60*r*1e3,i=a(n,t);if(r===i)return[n,r];var o=a(n-=60*(i-r)*1e3,t);return i===o?[n,i]:[e-60*Math.min(i,o)*1e3,Math.max(i,o)]}(t.utc(e,o).valueOf(),l,s),c=d[0],u=d[1],g=t(c).utcOffset(u);return g.$x.$timezone=s,g},t.tz.guess=function(){return Intl.DateTimeFormat().resolvedOptions().timeZone},t.tz.setDefault=function(e){n=e}}));vn.extend(Bn),vn.extend(kn),vn.extend($n),vn.extend(xn),vn.extend(On),function(e){e.generateDays=e=>{const r=e.startOf("month"),t=vn(r).startOf("week");return Hn(t).map((e=>Mn(e)))},e.generateDaysForCurrentWeek=e=>{const r=e.startOf("week");return Mn(r)},e.generateMonths=e=>{const r=[];for(let t=0;t<12;t++){const n=e.month(t);r.push(vn(n))}return r},e.generateDecadeOfYears=e=>{const r=e.year(),t=10*Math.floor(r/10),n=e.year(t),i=[n.subtract(1,"year"),n];for(let e=1;e<11;e++)i.push(n.add(e,"year"));return i},e.getStartEndDecade=e=>{const r=10*Math.floor(+e.format("YYYY")/10);return{beginDecade:r,endDecade:+vn(`${r+9}-01-01`).format("YYYY")}},e.convertTo12HourFormat=e=>{const r=vn(e,"HH:mm");return r.isValid()?r.format("h:mm a"):""},e.isWithinRange=(e,r,t,n="day")=>!r&&!t||(r&&t?e.isBetween(r,t,n,"[]"):r?e.isSameOrAfter(r,n):e.isSameOrBefore(t,n)),e.isPreviousMonthWithinRange=(r,t)=>e.isWithinRange(r.subtract(1,"month"),t,void 0,"month"),e.isPreviousYearWithinRange=(r,t)=>e.isWithinRange(r.subtract(1,"year"),t,void 0,"year"),e.isPreviousDecadeWithinRange=(r,t)=>{const{beginDecade:n}=e.getStartEndDecade(r);return e.isWithinRange(r.year(n).subtract(1,"year"),t,void 0,"year")},e.isNextMonthWithinRange=(r,t)=>e.isWithinRange(r.add(1,"month"),void 0,t,"month"),e.isNextYearWithinRange=(r,t)=>e.isWithinRange(r.add(1,"year"),void 0,t,"year"),e.isNextDecadeWithinRange=(r,t)=>{const{endDecade:n}=e.getStartEndDecade(r);return e.isWithinRange(r.year(n).add(1,"year"),void 0,t,"year")},e.getWeekStartEnd=e=>({start:e.startOf("week").format("YYYY-MM-DD"),end:e.endOf("week").format("YYYY-MM-DD")}),e.getFixedRangeStartEnd=(e,r)=>({start:e.format("YYYY-MM-DD"),end:e.add(r-1,"day").format("YYYY-MM-DD")}),e.isDisabledDay=(r,t,n,i)=>{const a=e.isWithinRange(r,n?vn(n):void 0,i?vn(i):void 0),o=t&&t.includes(r.format("YYYY-MM-DD"));return!a||!!o}}(An||(An={}));const Hn=e=>{const r=[e];for(let t=1;t<6;t++){const n=e.add(t,"week");r.push(n)}return r},Mn=e=>{const r=[];for(let t=0;t<7;t++){const n=e.add(t,"day");r.push(n)}return r},_n=[1,3,5,7,8,10,12],jn=[4,6,9,11];var Wn,Tn,Ln,In;!function(e){e.clampDay=(r,t,n)=>{const i=parseInt(r),a=parseInt(t),o=parseInt(n);return 0==i?"1":_n.includes(a)?Math.min(i,31).toString():jn.includes(a)?Math.min(i,30).toString():2===a?e.isLeapYear(o)?Math.min(i,29).toString():Math.min(i,28).toString():r},e.clampMonth=e=>{const r=parseInt(e);return 0==r?"1":r>12?"12":e},e.isLeapYear=e=>e%4==0&&e%100!=0||e%400==0,e.getTimeDiffInMinutes=(e,r,t="HH:mm")=>{const n=vn(e,t);return vn(r,t).diff(n,"minute")},e.toDayjs=e=>e?vn(e):vn(),e.addMinutesToTime=(e,r,t="HH:mm")=>vn(e,t).add(r,"minutes").format(t),e.isSame=(e,r,t="day")=>vn(e).isSame(vn(r),t)}(Wn||(Wn={})),function(e){e.isDateDisabled=(e,r)=>{const{disabledDates:t,minDate:n,maxDate:i}=r;return!!(t&&t.length&&t.includes(e))||(!(!n||!vn(e).isBefore(n,"day"))||!(!i||!vn(e).isAfter(i,"day")))},e.sanitizeInput=e=>{if(e){if(vn(e).isValid())return e}return""}}(Tn||(Tn={})),function(e){e.generate=()=>Math.random().toString(36).substring(2,9)}(Ln||(Ln={})),function(e){e.transformWithSpaces=(e,r)=>{const t="(.{"+r+"})";return e.replace(/[^\dA-Z]/gi,"").replace(new RegExp(t,"g"),"$1 ").trim()},e.padValue=(e,r)=>{if("0"===e)return r?e:e.padStart(2,"0");if(""===e)return e;return parseInt(e).toString().padStart(2,"0")},e.shouldTruncateToTwoLines=(e,r)=>{const t=Math.floor(r/9);return e.length>=2*t||1===e.split(" ").length&&e.length>t},e.truncateOneLine=(e,r,t,n,i=8)=>{let a=0;r>t&&(a=Math.floor((r-t)/i));const o=n+a;if(o<e.length){const r=Math.floor(o/2);return e.substring(0,r)+" ... "+e.substring(e.length-r,e.length)}return e},e.truncateTwoLines=(e,r,t,n=1.2)=>{const i=Math.floor(2*r/(.6*t))*(2/n);if(e.length<=i)return e;const a=Math.floor(.6*i),o=Math.floor(.2*i);return`${e.substring(0,a)}...${e.substring(e.length-o)}`},e.getTextWidth=(r,t)=>{if("undefined"==typeof document)return 0;const n=(e.getTextWidth.canvas||(e.getTextWidth.canvas=document.createElement("canvas"))).getContext("2d");n.font=t;return n.measureText(r).width},e.maskValue=(e,t)=>{if(!e)return e;const{maskRange:n,unmaskRange:i,maskChar:a="•",maskRegex:o,maskTransformer:s}=t;if(s)return s(e);if(o)return e.replace(o,a);if(n){const{startIndex:t,endIndex:i}=r(n[0],n[1]);return e.substring(0,t)+a.repeat(e.substring(t,i+1).length)+e.substring(i+1)}if(i){const{startIndex:t,endIndex:n}=r(i[0],i[1]);return a.repeat(e.substring(0,t).length)+e.substring(t,n+1)+a.repeat(e.substring(n+1).length)}return e};const r=(e,r)=>e<r?{startIndex:e,endIndex:r}:{startIndex:r,endIndex:e}}(In||(In={}));const Yn=r.div`
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
`,Rn=r.div`
    position: absolute;
    left: 0;
    top: 0;
    background-color: ${e=>e.$stacked?Wt["overlay-subtle"]:Wt["overlay-strong"]};
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
`;var Pn;!function(e){e.Ready="overlay-context-ready",e.Change="overlay-context-change"}(Pn||(Pn={}));const Nn=({show:e=!1,rootId:r,onOverlayClick:t,children:n,backgroundOpacity:i,backgroundBlur:o=!0,disableTransition:s=!1,enableOverlayClick:g=!1,zIndex:h,id:b})=>{const[v,F]=c(null),[x,w]=c(),[B]=c((()=>Ln.generate())),D=f(),$=u(),S=u(null),E=n&&l.cloneElement(n,{ref:S}),C=b?`lifesg-ds-overlay-root-${b}`:"lifesg-ds-overlay-root",A=null!=h?h:x?99999:99998;(e=>{const r=m();d((()=>{if(!r)return;const t={zIndex:e};r.events.emit(Pn.Change,t)}),[r,e]),d((()=>{if(!r)return;const t=()=>{const t={zIndex:e};r.events.emit(Pn.Change,t)};return null==r||r.events.on(Pn.Ready,t),()=>null==r?void 0:r.events.off(Pn.Ready,t)}),[r,e])})(A),d((()=>(H(),F(z()),()=>{W(),_().length<1&&M("remove")})),[]),d((()=>{if(e){const e=O();k(e),j();const r=setTimeout((()=>{M("add")}),200);return()=>clearTimeout(r)}{W();const e=setTimeout((()=>{_().length<1&&M("remove")}),200);return()=>clearTimeout(e)}}),[e]);const k=e=>{$.current=e,w(e)},z=()=>document&&r?document.getElementById(r):document?document.body:null,O=()=>_().length>0,H=()=>{if(!document.getElementById(Un)){const e=document.createElement("style");e.id=Un;const r=document.documentElement.clientWidth,t=window.innerWidth-r;e.innerHTML=`\n\t\t\t\t.${Jn} {\n\t\t\t\t\toverflow: hidden;\n\t\t\t\t\tpadding-right: ${t}px !important;\n\t\t\t\t\t-ms-overflow-style: none;\n\t\t\t\t\tscrollbar-width: none;\n\t\t\t\t}\n\n\t\t\t\t.${Jn}::-webkit-scrollbar {\n\t\t\t\t\tdisplay: none;\n\t\t\t\t}\n\t\t\t`,document.body.appendChild(e)}},M=e=>{const r=document.body.classList.contains(Jn);"add"!==e||r?"remove"===e&&r&&document.body.classList.remove(Jn):document.body.classList.add(Jn)},_=()=>{const e=document.body.dataset.lifesgDsOverlayOrder;return e?e.split(","):[]},j=()=>{const e=_();document.body.dataset.lifesgDsOverlayOrder=[...e,B].join(",")},W=()=>{const e=_();document.body.dataset.lifesgDsOverlayOrder=e.filter((e=>e!==B)).join(",")},T=e=>{var r;const n=null===(r=S.current)||void 0===r?void 0:r.firstChild;n&&n.contains(e.target)||t&&g&&(e.preventDefault(),t())};return v?y.createPortal(a(Yn,Object.assign({id:C,"data-testid":C,$show:e,$zIndex:A},{children:n&&a(p,Object.assign({id:D},{children:a(Rn,Object.assign({"data-testid":"overlay-wrapper",$show:e,$stacked:x,$backgroundBlur:o,$disableTransition:s,onClick:T},{children:E}))}))})),v):null},Vn=e=>a(b,{children:a(Nn,Object.assign({},e))}),Un="lifesg-ds-overlay-stylesheet",Jn="lifesg-ds-overlay-open",Xn=r.a`
    display: flex;
    justify-content: center;
    height: 100%;

    img {
        width: auto;
        height: 100%;
        transition: ${Ut};
        object-fit: contain;
    }
`;const Gn=({src:e,alt:r,className:t,"data-testid":n})=>a("img",{src:e,alt:r||"",className:t,"data-testid":n,onError:e=>{e.target.onerror=null,e.target.src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKAAAABQCAYAAACeXX40AAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAARTSURBVHgB7Z1tUuJAEIY7qMRYWnIE9wR6BD2Be5S9weoN1pusJ1iPwJ5guYH4GeNH2HkppgojYAIhbXrepwoJEMofPHZP9zQxkgJpmh5HUfTdHZ6624EQsiLOp7676+d5fp4kyeDda/5gNBr1siz76Q5/CCHr41ccx+dOyiEejAWcyHflDg+FkDWDiNjtdk8gYQdPTCIf5SON4ALe0cQ5idya78CZ+E8IaRgn4gki4JkQogCK3Y77wdRLtDiNnp6eRkKIEh0hRBEKSFShgEQVCkhUoYBEFQpIVKGARBUKSFShgEQVCkhUoYBEFQpIVNkUokqWZfLy8iJvb2/jx1tbWxLHsWxsbEgIcBpGCQh3e3srr6+vH16Lokh2dnbGN+swAioA+a6vrzERPPN1PP/w8CB5nsvu7q5YhmvAhoFciHzz5JsmTVNxGUosQwEbBmu+WWl3Ho+Pj6VkbSsUsGGqRjSka6Riq1DAhllGJkZAUhuocKtCAUltLNPfs9wTpIAL8M3hOtne3q50PhrTnY7dj4kCzgFrteFwKM/Pz1In3W53vNNRFvYBA+Xm5mYs4bzdilWAVJubn+8B7O3tlTqvzVDAGaAB7KVDAXB/f19rIYCU2uv1JEmSmUUJpMPrVdN1G+FecAGs+5B6i+0SpM79/X2pG/weyI57yIiCw3rUm4Z7wVMgyt3d3c3s1WEtiMiIqFUniIaQO1SYgqfALgVGo+aBVFx3URI6FHACoh4mUD4DRYnlrbGmoYATUPWWKTRwDtaIlncnmoQCyvuqtwwoVJCOyeoELyBkKpN6i2C9iFEpshrBC1h2OHQWEHeZogTvwVwgCVxARLBVdzmqFiUQD+/BbR17zW0jWAHx4deRQhE9yxYwfu3oz10l+lohWAHLSlMGRFE0sBfhhxumoyXeF3oxE6SAiHx1pz+k1nnj9pDODzcUwXusf/FoEcEJiKizruoVUbC4k+LlW7TW9F/BDJHgBFz3uqu4l4zHnxU6fuwrxPVgUAKi4bzuytNf8cAPNpRt0yByhthXDGYcC1EIVyNoCoxUVW3xYBwLQ6hVJqbbThAR0EejJlmmv+iHX0NaDwYhYB0N56bw68FQMC8gxMPar02EtB40LyBSbxurS7RmFg3HWsG0gG1KvbNo6x9PFcwKiOixzJjVV2K6pWMVkwL6atIC1ke3TArY9tRbpMxuSlsxJ2Abq94yWE3F5gS0+kFZ/R6KKQFRdFieMsbYlrXobkbAUJq31ka3zFyaAwKGsomPqrjuS4RowYsTEVX4xXSiCgUkqlBAogoFJKpQQKIKBSSqUECiCgUkqlBAogoFJKpAwIEQokO/k+f5pRCiQBRF/ShN02N38EcIaZjRaPStkyTJlYuCF0JIs1w49wbj/5TnTOxlWYYoeCSErJ+/cRwj8w7HVTAO3BMnjISkAS68fHjw4X+FujXhgbs7cyccCiMiqYeBu126TPsbS77pF/4DuxeyMpdnp3gAAAAASUVORK5CYII="}}),Qn=({resources:e,onClick:r,"data-id":t,"data-testid":n="navbar-brand",type:i})=>a(Xn,Object.assign({role:"link",onClick:e=>{r&&r(e,i)},tabIndex:0,"data-id":t,"data-testid":n,$type:i},{children:a(Gn,{src:e.logoSrc,alt:e.brandName})})),Zn=(e,r,t)=>r?qr(t,r)||qr(e,r):t||e,Kn=(e,r)=>{const t=r||e.defaultValue;return qr(e.collections,t)};var qn;!function(e){e.colorScheme="colorScheme",e.layout="layout",e.textStyleScheme="textStyleScheme",e.designTokenScheme="designTokenScheme",e.resourceScheme="resourceScheme"}(qn||(qn={}));const ei={collections:{base:{Brand:{1:"#EF413D",2:"#F26664",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#1C76D5",PrimaryDark:"#1869BF",Secondary:"#0056b3",Accent:{Dark:{1:"#4B539F",2:"#6D74B1",3:"#959BC5"},Light:{1:"#57A9FF",2:"#81BFFF",3:"#BED7FF",4:"#E2ECFD",5:"#F6F8FF",6:"#FBFCFE"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(87, 169, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},bookingsg:{Brand:{1:"#EF413D",2:"#F26664",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#6F4AB8",PrimaryDark:"#6443A6",Secondary:"#6443A6",Accent:{Dark:{1:"#355985",2:"#68819D",3:"#9AABBE"},Light:{1:"#977ECC",2:"#B5A5D7",3:"#CEC3E4 ",4:"#E2DBEF",5:"#F2EFF8",6:"#F7F6FB"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(161, 87, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},rbs:{Brand:{1:"#3E4DFF",2:"#AEACFF",3:"#AD44FF",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#4855D4",PrimaryDark:"#3E49B2",Secondary:"#364891",Accent:{Dark:{1:"#5E516E",2:"#7A6F87",3:"#C5C0CC"},Light:{1:"#8397FC",2:"#ABB8FC",3:"#CED6FD ",4:"#E1E4FA",5:"#F0F2FF",6:"#FAFBFF"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(90, 87, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},mylegacy:{Brand:{1:"#24588D",2:"#FFC166",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#0C7BB3",PrimaryDark:"#066391",Secondary:"#066391",Accent:{Dark:{1:"#4B539F",2:"#6D74B1",3:"#959BC5"},Light:{1:"#229AD6",2:"#8DD4F7",3:"#A4DDF9",4:"#BBE5FA",5:"#E8F4FA",6:"#F7FBFC"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#1A5230",Icon:"#2A854E",Border:"#7DDBA3",Background:"#E1FAEB"},Orange:{Text:"#693D07",Icon:"#CF7911",Border:"#F9CB77",Background:"#FCF2E6",Badge:"#F57F17"},Red:{Text:"#CB2213",Icon:"#CB2213",Border:"#DC6363",Background:"#FAF0F0"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(34, 154, 214, 0.6)",Red:"rgba(203, 34, 19, 0.5)",Elevation:"rgba(75, 83, 159, 0.24)"}},ccube:{Brand:{1:"#8D5197",2:"#FE3399",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#8D5197",PrimaryDark:"#6B3E73",Secondary:"#C02673",Accent:{Dark:{1:"#921D58",2:"#FF409F",3:"#FF88C4"},Light:{1:"#B07DB7",2:"#C7A2CC",3:"#D9C2DD",4:"#E9DBEB",5:"#F3ECF4",6:"#FAF7FA"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(210, 77, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},oneservice:{Brand:{1:"#009F97",2:"#49C3CA",3:"#A81E5E",4:"#ED1386",5:"#F7D414",6:"#000000"},Primary:"#2D7990",PrimaryDark:"#205666",Secondary:"#0056B3",Accent:{Dark:{1:"#4B539F",2:"#6D74B1",3:"#959BC5"},Light:{1:"#5D97A9",2:"#8CB6C2",3:"#B2CED6",4:"#D1E2E7",5:"#E8F0F3",6:"#F7FAFB"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(45, 121, 144, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}}},defaultValue:"base"},ri=e=>r=>{var t;const n=(null===(t=r.theme)||void 0===t?void 0:t._v2)||r.theme,i=Kn(ei,null==n?void 0:n[qn.colorScheme]);return n.options&&n.options.color?Zn(i,e,n.options.color):Zn(i,e)},ti=(ri("Brand.1"),ri("Brand.2"),ri("Brand.3"),ri("Brand.4"),ri("Brand.5"),ri("Brand.6"),ri("Primary")),ni=(ri("PrimaryDark"),ri("Secondary")),ii={Light:{1:ri("Accent.Light.1"),2:ri("Accent.Light.2"),3:ri("Accent.Light.3"),4:ri("Accent.Light.4"),5:ri("Accent.Light.5"),6:ri("Accent.Light.6")},Dark:{1:ri("Accent.Dark.1"),2:ri("Accent.Dark.2"),3:ri("Accent.Dark.3")}},ai={1:ri("Neutral.1"),2:ri("Neutral.2"),3:ri("Neutral.3"),4:ri("Neutral.4"),5:ri("Neutral.5"),6:ri("Neutral.6"),7:ri("Neutral.7"),8:ri("Neutral.8")},oi=(ri("Validation.Green.Text"),ri("Validation.Green.Icon"),ri("Validation.Green.Border"),ri("Validation.Green.Background"),ri("Validation.Orange.Text"),ri("Validation.Orange.Icon"),ri("Validation.Orange.Border"),ri("Validation.Orange.Background"),ri("Validation.Orange.Badge"),ri("Validation.Red.Text"),ri("Validation.Red.Icon"),ri("Validation.Red.Border"),ri("Validation.Red.Background"),ri("Validation.Blue.Text"),ri("Validation.Blue.Icon"),ri("Validation.Blue.Border"),ri("Validation.Blue.Background"),{Accent:ri("Shadow.Accent"),Red:ri("Shadow.Red"),Elevation:ri("Shadow.Elevation")}),si=r.div`
    display: none;

    ${nn.tablet} {
        display: flex;
    }
`,li=r.div`
    position: absolute;
    overflow-y: auto;
    overflow-x: hidden;
    height: 100vh;
    display: block;
    padding: 0 0 1rem;
    background-color: white;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);
    visibility: ${e=>e.$show?"visible":"hidden"};

    ${e=>e.$show?t`
            right: 0;
            transition: all 300ms cubic-bezier(0.21, 0.79, 0.53, 1);
            transition-delay: 200ms;
        `:t`
        right: -100%;
        transition: all 300ms cubic-bezier(0.4, 0.34, 0.38, 1);
    `}
    ${e=>{const r=`${e.$viewHeight}px`||"1vh";return t`
            height: calc(${r} * 100);
        `}}

	${nn.tablet} {
        width: 75%;
    }

    ${nn.mobileL} {
        width: 100%;
    }
`,di=r.div`
    display: flex;
    flex-direction: column;
`,ci=r.div`
    display: flex;
    justify-content: space-between;
    position: relative;
    padding: 2.5rem 1.25rem 2rem;
`,ui=r(v)`
    height: 1.5rem;
    width: 1.5rem;
    margin-right: -0.25rem;
`,gi=r(Vt)`
    position: absolute;
    right: -0.25rem;
    bottom: 0.65rem;
    color: ${ai[1]};

    :active,
    :focus {
        color: ${ti};
    }
`,hi=l.forwardRef(((e,r)=>{const{show:t,resources:n,children:i,hideNavBranding:l,onClose:u,onBrandClick:g}=e,[h,m]=c(0),{primary:b,secondary:f}=n;d((()=>(p(),window.addEventListener("resize",p),()=>{window.removeEventListener("resize",p)})),[]);const p=()=>{if(window){const e=.01*window.innerHeight;m(e)}};return a(si,Object.assign({ref:r,"data-testid":"drawer"},{children:a(li,Object.assign({$show:t,$viewHeight:h},{children:o(di,{children:[o(ci,{children:[a(qt,Object.assign({"data-id":"drawer-brand-container"},{children:!l&&o(s,{children:[a(Qn,{resources:b,compress:!0,onClick:g,"data-id":"drawer-brand-primary","data-testid":"drawer__brand",type:"primary"}),f&&o(s,{children:[a(en,{}),a(Qn,{resources:f,compress:!0,onClick:g,"data-id":"drawer-brand-secondary","data-testid":"drawer__brand-secondary",type:"secondary"})]})]})})),a(gi,Object.assign({onClick:u,focusHighlight:!1,"aria-label":"Close nav menu"},{children:a(ui,{})}))]}),i]})}))}))})),mi={primary:{brandName:"LifeSG",logoSrc:"https://assets.life.gov.sg/lifesg/logo-lifesg.svg"}},bi={primary:{brandName:"BookingSG",logoSrc:"https://www.booking.gov.sg/logo.svg"}},fi={primary:{brandName:"MyLegacy",logoSrc:"https://assets.life.gov.sg/ccube/logo-ccube.svg"}},pi={primary:{brandName:"CCube",logoSrc:"https://mylegacy.life.gov.sg/images/site-logo.png"}};var yi=function(e,r,t,n){for(var i=e.length,a=t+(n?1:-1);n?a--:++a<i;)if(r(e[a],a,e))return a;return-1},vi=ar;var Fi=function(e){var r=this.__data__,t=r.delete(e);return this.size=r.size,t};var xi=function(e){return this.__data__.get(e)};var wi=function(e){return this.__data__.has(e)},Bi=ar,Di=or,$i=Sr;var Si=function(e,r){var t=this.__data__;if(t instanceof Bi){var n=t.__data__;if(!Di||n.length<199)return n.push([e,r]),this.size=++t.size,this;t=this.__data__=new $i(n)}return t.set(e,r),this.size=t.size,this},Ei=ar,Ci=function(){this.__data__=new vi,this.size=0},Ai=Fi,ki=xi,zi=wi,Oi=Si;function Hi(e){var r=this.__data__=new Ei(e);this.size=r.size}Hi.prototype.clear=Ci,Hi.prototype.delete=Ai,Hi.prototype.get=ki,Hi.prototype.has=zi,Hi.prototype.set=Oi;var Mi=Hi;var _i=Sr,ji=function(e){return this.__data__.set(e,"__lodash_hash_undefined__"),this},Wi=function(e){return this.__data__.has(e)};function Ti(e){var r=-1,t=null==e?0:e.length;for(this.__data__=new _i;++r<t;)this.add(e[r])}Ti.prototype.add=Ti.prototype.push=ji,Ti.prototype.has=Wi;var Li=function(e,r){return e.has(r)},Ii=Ti,Yi=function(e,r){for(var t=-1,n=null==e?0:e.length;++t<n;)if(r(e[t],t,e))return!0;return!1},Ri=Li;var Pi=function(e,r,t,n,i,a){var o=1&t,s=e.length,l=r.length;if(s!=l&&!(o&&l>s))return!1;var d=a.get(e),c=a.get(r);if(d&&c)return d==r&&c==e;var u=-1,g=!0,h=2&t?new Ii:void 0;for(a.set(e,r),a.set(r,e);++u<s;){var m=e[u],b=r[u];if(n)var f=o?n(b,m,u,r,e,a):n(m,b,u,e,r,a);if(void 0!==f){if(f)continue;g=!1;break}if(h){if(!Yi(r,(function(e,r){if(!Ri(h,r)&&(m===e||i(m,e,t,n,a)))return h.push(r)}))){g=!1;break}}else if(m!==b&&!i(m,b,t,n,a)){g=!1;break}}return a.delete(e),a.delete(r),g};var Ni=function(e){var r=-1,t=Array(e.size);return e.forEach((function(e,n){t[++r]=[n,e]})),t};var Vi=A.Uint8Array,Ui=Ye,Ji=Pi,Xi=Ni,Gi=function(e){var r=-1,t=Array(e.size);return e.forEach((function(e){t[++r]=e})),t},Qi=k?k.prototype:void 0,Zi=Qi?Qi.valueOf:void 0;var Ki=function(e,r,t,n,i,a,o){switch(t){case"[object DataView]":if(e.byteLength!=r.byteLength||e.byteOffset!=r.byteOffset)return!1;e=e.buffer,r=r.buffer;case"[object ArrayBuffer]":return!(e.byteLength!=r.byteLength||!a(new Vi(e),new Vi(r)));case"[object Boolean]":case"[object Date]":case"[object Number]":return Ui(+e,+r);case"[object Error]":return e.name==r.name&&e.message==r.message;case"[object RegExp]":case"[object String]":return e==r+"";case"[object Map]":var s=Xi;case"[object Set]":var l=1&n;if(s||(s=Gi),e.size!=r.size&&!l)return!1;var d=o.get(e);if(d)return d==r;n|=2,o.set(e,r);var c=Ji(s(e),s(r),n,i,a,o);return o.delete(e),c;case"[object Symbol]":if(Zi)return Zi.call(e)==Zi.call(r)}return!1};var qi=function(e,r){for(var t=-1,n=r.length,i=e.length;++t<n;)e[i+t]=r[t];return e},ea=$;var ra=function(e,r,t){var n=r(e);return ea(e)?n:qi(n,t(e))};var ta=function(e,r){for(var t=-1,n=null==e?0:e.length,i=0,a=[];++t<n;){var o=e[t];r(o,t,e)&&(a[i++]=o)}return a},na=function(){return[]},ia=Object.prototype.propertyIsEnumerable,aa=Object.getOwnPropertySymbols,oa=aa?function(e){return null==e?[]:(e=Object(e),ta(aa(e),(function(r){return ia.call(e,r)})))}:na;var sa=function(e,r){for(var t=-1,n=Array(e);++t<e;)n[t]=r(t);return n},la=Y,da=R;var ca=function(e){return da(e)&&"[object Arguments]"==la(e)},ua=R,ga=Object.prototype,ha=ga.hasOwnProperty,ma=ga.propertyIsEnumerable,ba=ca(function(){return arguments}())?ca:function(e){return ua(e)&&ha.call(e,"callee")&&!ma.call(e,"callee")},fa={exports:{}};var pa=function(){return!1};!function(e,r){var t=A,n=pa,i=r&&!r.nodeType&&r,a=i&&e&&!e.nodeType&&e,o=a&&a.exports===i?t.Buffer:void 0,s=(o?o.isBuffer:void 0)||n;e.exports=s}(fa,fa.exports);var ya=fa.exports,va=/^(?:0|[1-9]\d*)$/;var Fa=function(e,r){var t=typeof e;return!!(r=null==r?9007199254740991:r)&&("number"==t||"symbol"!=t&&va.test(e))&&e>-1&&e%1==0&&e<r};var xa=function(e){return"number"==typeof e&&e>-1&&e%1==0&&e<=9007199254740991},wa=Y,Ba=xa,Da=R,$a={};$a["[object Float32Array]"]=$a["[object Float64Array]"]=$a["[object Int8Array]"]=$a["[object Int16Array]"]=$a["[object Int32Array]"]=$a["[object Uint8Array]"]=$a["[object Uint8ClampedArray]"]=$a["[object Uint16Array]"]=$a["[object Uint32Array]"]=!0,$a["[object Arguments]"]=$a["[object Array]"]=$a["[object ArrayBuffer]"]=$a["[object Boolean]"]=$a["[object DataView]"]=$a["[object Date]"]=$a["[object Error]"]=$a["[object Function]"]=$a["[object Map]"]=$a["[object Number]"]=$a["[object Object]"]=$a["[object RegExp]"]=$a["[object Set]"]=$a["[object String]"]=$a["[object WeakMap]"]=!1;var Sa=function(e){return Da(e)&&Ba(e.length)&&!!$a[wa(e)]};var Ea=function(e){return function(r){return e(r)}},Ca={exports:{}};!function(e,r){var t=S,n=r&&!r.nodeType&&r,i=n&&e&&!e.nodeType&&e,a=i&&i.exports===n&&t.process,o=function(){try{var e=i&&i.require&&i.require("util").types;return e||a&&a.binding&&a.binding("util")}catch(e){}}();e.exports=o}(Ca,Ca.exports);var Aa=Ca.exports,ka=Sa,za=Ea,Oa=Aa&&Aa.isTypedArray,Ha=Oa?za(Oa):ka,Ma=sa,_a=ba,ja=$,Wa=ya,Ta=Fa,La=Ha,Ia=Object.prototype.hasOwnProperty;var Ya=function(e,r){var t=ja(e),n=!t&&_a(e),i=!t&&!n&&Wa(e),a=!t&&!n&&!i&&La(e),o=t||n||i||a,s=o?Ma(e.length,String):[],l=s.length;for(var d in e)!r&&!Ia.call(e,d)||o&&("length"==d||i&&("offset"==d||"parent"==d)||a&&("buffer"==d||"byteLength"==d||"byteOffset"==d)||Ta(d,l))||s.push(d);return s},Ra=Object.prototype;var Pa=function(e){var r=e&&e.constructor;return e===("function"==typeof r&&r.prototype||Ra)};var Na=function(e,r){return function(t){return e(r(t))}}(Object.keys,Object),Va=Pa,Ua=Na,Ja=Object.prototype.hasOwnProperty;var Xa=function(e){if(!Va(e))return Ua(e);var r=[];for(var t in Object(e))Ja.call(e,t)&&"constructor"!=t&&r.push(t);return r},Ga=re,Qa=xa;var Za=Ya,Ka=Xa,qa=function(e){return null!=e&&Qa(e.length)&&!Ga(e)};var eo=function(e){return qa(e)?Za(e):Ka(e)},ro=ra,to=oa,no=eo;var io=function(e){return ro(e,no,to)},ao=Object.prototype.hasOwnProperty;var oo=function(e,r,t,n,i,a){var o=1&t,s=io(e),l=s.length;if(l!=io(r).length&&!o)return!1;for(var d=l;d--;){var c=s[d];if(!(o?c in r:ao.call(r,c)))return!1}var u=a.get(e),g=a.get(r);if(u&&g)return u==r&&g==e;var h=!0;a.set(e,r),a.set(r,e);for(var m=o;++d<l;){var b=e[c=s[d]],f=r[c];if(n)var p=o?n(f,b,c,r,e,a):n(b,f,c,e,r,a);if(!(void 0===p?b===f||i(b,f,t,n,a):p)){h=!1;break}m||(m="constructor"==c)}if(h&&!m){var y=e.constructor,v=r.constructor;y==v||!("constructor"in e)||!("constructor"in r)||"function"==typeof y&&y instanceof y&&"function"==typeof v&&v instanceof v||(h=!1)}return a.delete(e),a.delete(r),h},so=Fe(A,"DataView"),lo=or,co=Fe(A,"Promise"),uo=Fe(A,"Set"),go=Fe(A,"WeakMap"),ho=Y,mo=oe,bo="[object Map]",fo="[object Promise]",po="[object Set]",yo="[object WeakMap]",vo="[object DataView]",Fo=mo(so),xo=mo(lo),wo=mo(co),Bo=mo(uo),Do=mo(go),$o=ho;(so&&$o(new so(new ArrayBuffer(1)))!=vo||lo&&$o(new lo)!=bo||co&&$o(co.resolve())!=fo||uo&&$o(new uo)!=po||go&&$o(new go)!=yo)&&($o=function(e){var r=ho(e),t="[object Object]"==r?e.constructor:void 0,n=t?mo(t):"";if(n)switch(n){case Fo:return vo;case xo:return bo;case wo:return fo;case Bo:return po;case Do:return yo}return r});var So=Mi,Eo=Pi,Co=Ki,Ao=oo,ko=$o,zo=$,Oo=ya,Ho=Ha,Mo="[object Arguments]",_o="[object Array]",jo="[object Object]",Wo=Object.prototype.hasOwnProperty;var To=function(e,r,t,n,i,a){var o=zo(e),s=zo(r),l=o?_o:ko(e),d=s?_o:ko(r),c=(l=l==Mo?jo:l)==jo,u=(d=d==Mo?jo:d)==jo,g=l==d;if(g&&Oo(e)){if(!Oo(r))return!1;o=!0,c=!1}if(g&&!c)return a||(a=new So),o||Ho(e)?Eo(e,r,t,n,i,a):Co(e,r,l,t,n,i,a);if(!(1&t)){var h=c&&Wo.call(e,"__wrapped__"),m=u&&Wo.call(r,"__wrapped__");if(h||m){var b=h?e.value():e,f=m?r.value():r;return a||(a=new So),i(b,f,t,n,a)}}return!!g&&(a||(a=new So),Ao(e,r,t,n,i,a))},Lo=R;var Io=function e(r,t,n,i,a){return r===t||(null==r||null==t||!Lo(r)&&!Lo(t)?r!=r&&t!=t:To(r,t,n,i,e,a))},Yo=Mi,Ro=Io;var Po=function(e,r,t,n){var i=t.length,a=i,o=!n;if(null==e)return!a;for(e=Object(e);i--;){var s=t[i];if(o&&s[2]?s[1]!==e[s[0]]:!(s[0]in e))return!1}for(;++i<a;){var l=(s=t[i])[0],d=e[l],c=s[1];if(o&&s[2]){if(void 0===d&&!(l in e))return!1}else{var u=new Yo;if(n)var g=n(d,c,l,e,r,u);if(!(void 0===g?Ro(c,d,3,n,u):g))return!1}}return!0},No=Z;var Vo=function(e){return e==e&&!No(e)},Uo=Vo,Jo=eo;var Xo=function(e){for(var r=Jo(e),t=r.length;t--;){var n=r[t],i=e[n];r[t]=[n,i,Uo(i)]}return r};var Go=function(e,r){return function(t){return null!=t&&(t[e]===r&&(void 0!==r||e in Object(t)))}},Qo=Po,Zo=Xo,Ko=Go;var qo=function(e,r){return null!=e&&r in Object(e)},es=Vr,rs=ba,ts=$,ns=Fa,is=xa,as=Jr;var os=function(e,r,t){for(var n=-1,i=(r=es(r,e)).length,a=!1;++n<i;){var o=as(r[n]);if(!(a=null!=e&&t(e,o)))break;e=e[o]}return a||++n!=i?a:!!(i=null==e?0:e.length)&&is(i)&&ns(o,i)&&(ts(e)||rs(e))},ss=qo,ls=os;var ds=Io,cs=Kr,us=function(e,r){return null!=e&&ls(e,r,ss)},gs=Q,hs=Vo,ms=Go,bs=Jr;var fs=function(e){return function(r){return null==r?void 0:r[e]}},ps=Qr;var ys=fs,vs=function(e){return function(r){return ps(r,e)}},Fs=Q,xs=Jr;var ws=function(e){var r=Zo(e);return 1==r.length&&r[0][2]?Ko(r[0][0],r[0][1]):function(t){return t===e||Qo(t,e,r)}},Bs=function(e,r){return gs(e)&&hs(r)?ms(bs(e),r):function(t){var n=cs(t,e);return void 0===n&&n===r?us(t,e):ds(r,n,3)}},Ds=function(e){return e},$s=$,Ss=function(e){return Fs(e)?ys(xs(e)):vs(e)};var Es=/\s/;var Cs=function(e){for(var r=e.length;r--&&Es.test(e.charAt(r)););return r},As=/^\s+/;var ks=function(e){return e?e.slice(0,Cs(e)+1).replace(As,""):e},zs=Z,Os=V,Hs=/^[-+]0x[0-9a-f]+$/i,Ms=/^0b[01]+$/i,_s=/^0o[0-7]+$/i,js=parseInt;var Ws=function(e){if("number"==typeof e)return e;if(Os(e))return NaN;if(zs(e)){var r="function"==typeof e.valueOf?e.valueOf():e;e=zs(r)?r+"":r}if("string"!=typeof e)return 0===e?e:+e;e=ks(e);var t=Ms.test(e);return t||_s.test(e)?js(e.slice(2),t?2:8):Hs.test(e)?NaN:+e},Ts=1/0;var Ls=function(e){return e?(e=Ws(e))===Ts||e===-1/0?17976931348623157e292*(e<0?-1:1):e==e?e:0:0===e?e:0};var Is=yi,Ys=function(e){return"function"==typeof e?e:null==e?Ds:"object"==typeof e?$s(e)?Bs(e[0],e[1]):ws(e):Ss(e)},Rs=function(e){var r=Ls(e),t=r%1;return r==r?t?r-t:r:0},Ps=Math.max;var Ns=D((function(e,r,t){var n=null==e?0:e.length;if(!n)return-1;var i=null==t?0:Rs(t);return i<0&&(i=Ps(n+i,0)),Is(e,Ys(r),i)}));const Vs=r.div`
    display: inline-block;
    position: relative;
    width: ${({$size:e})=>e?`${e}px`:"1em"};
    height: ${({$size:e})=>e?`${e}px`:"1em"};
    color: ${e=>e.$color||"currentColor"};
`,Us=n`
	0% {
	  transform: rotate(0deg);
	}
	100% {
	  transform: rotate(360deg);
	}
`,Js=r.div`
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
    animation: ${Us} 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
`,Xs=r(Js)`
    animation-delay: -0.45s;
`,Gs=r(Js)`
    animation-delay: -0.3s;
`,Qs=r(Js)`
    animation-delay: -0.15s;
`,Zs=r.button`
    padding: ${Yt["spacing-8"]} ${Yt["spacing-16"]};
    min-width: 4rem;
    border: ${It["width-010"]} ${It.solid} transparent;
    border-radius: ${Rt.sm};
    transition: all ${Lt["duration-250"]} ${Lt["ease-default"]};
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;

    // -----------------------------------------------------------------------------
    // BUTTON STYLE + TEXT COLOR
    // -----------------------------------------------------------------------------
    ${e=>{switch(e.$buttonStyle){case"secondary":return t`
                    background-color: ${Wt.Primitive.white};
                    border-color: ${e.$buttonIsDanger?Wt["border-error-strong"]:Wt["border-primary"]};

                    color: ${e.$buttonIsDanger?Wt["text-error"]:Wt["text-primary"]};

                    &:hover,
                    &:active {
                        background-color: ${Wt["bg-hover-neutral"]};
                    }
                `;case"light":return t`
                    background-color: ${Wt.bg};
                    border-color: ${Wt.border};

                    color: ${e.$buttonIsDanger?Wt["text-error"]:Wt["text-primary"]};

                    &:hover,
                    &:active {
                        background-color: ${Wt["bg-hover-neutral"]};
                    }
                `;case"link":return t`
                    background-color: transparent;

                    color: ${e.$buttonIsDanger?Wt["text-error"]:Wt["text-primary"]};
                    &:hover,
                    &:active {
                        background-color: ${Wt["bg-hover-neutral"]};
                    }
                `;case"disabled":return t`
                    background-color: ${Wt["bg-disabled"]};

                    cursor: not-allowed;

                    &:hover {
                        box-shadow: none;
                    }

                    color: ${Wt["text-disabled"]};
                `;default:return t`
                    background-color: ${e.$buttonIsDanger?Wt["bg-error-strong"]:Wt["bg-primary"]};

                    ${Pt.MaxWidth.md} {
                        width: 100%;
                    }

                    color: ${Wt["text-inverse"]};

                    &:hover,
                    &:active {
                        background-color: ${e.$buttonIsDanger?Wt["bg-error-strong-hover"]:Wt["bg-primary-hover"]};
                    }
                `}}}

    // -----------------------------------------------------------------------------
	// BUTTON SIZE + TEXT SIZE
	// -----------------------------------------------------------------------------
	${e=>{switch(e.$buttonSizeStyle){case"small":return t`
                    height: 2.5rem;
                    ${Tt["body-md-semibold"]}

                    ${Pt.MaxWidth.xxs} {
                        height: auto;
                    }
                `;case"large":return t`
                    height: 4rem;
                    ${Tt["header-md-semibold"]}

                    ${Pt.MaxWidth.xxs} {
                        height: auto;
                    }
                `;default:return t`
                    height: 3rem;
                    ${Tt["header-xs-semibold"]}

                    ${Pt.MaxWidth.xxs} {
                        height: auto;
                    }
                `}}}
`,Ks=r((({color:e,className:r,size:t})=>o(Vs,Object.assign({className:r,$size:t,$color:e},{children:[a(Js,{id:"inner1"}),a(Xs,{id:"inner2"}),a(Gs,{id:"inner3"}),a(Qs,{id:"inner4"})]}))))`
    margin-right: 0.5rem;
`,qs=(e,r)=>{const{children:t,disabled:n=!1,loading:i=!1,styleType:s="default",danger:l=!1}=e,d=w(e,["children","disabled","loading","styleType","danger"]),c={$buttonStyle:n?"disabled":s,$buttonSizeStyle:"default",$buttonIsDanger:l};return o(Zs,Object.assign({ref:r,"data-testid":d["data-testid"]||"button",disabled:n},c,d,{children:[i&&a(Ks,{}),a("span",{children:t})]}))};qs.displayName="Button.Default";const el=(e,r)=>{const{children:t,disabled:n=!1,loading:i=!1,styleType:s="default",danger:l=!1}=e,d=w(e,["children","disabled","loading","styleType","danger"]),c={$buttonStyle:n?"disabled":s,$buttonSizeStyle:"small",$buttonIsDanger:l};return o(Zs,Object.assign({ref:r,"data-testid":d["data-testid"]||"button",disabled:n},c,d,{children:[i&&a(Ks,{}),a("span",{children:t})]}))};el.displayName="Button.Small";const rl=(e,r)=>{const{children:t,disabled:n=!1,loading:i=!1,styleType:s="default",danger:l=!1}=e,d=w(e,["children","disabled","loading","styleType","danger"]),c={$buttonStyle:n?"disabled":s,$buttonSizeStyle:"large",$buttonIsDanger:l};return o(Zs,Object.assign({ref:r,"data-testid":d["data-testid"]||"button",disabled:n},c,d,{children:[i&&a(Ks,{}),a("span",{children:t})]}))};rl.displayName="Button.Large";const tl={Default:l.forwardRef(qs),Small:l.forwardRef(el),Large:l.forwardRef(rl)},nl=(e,r,n=!1)=>{const i=`${e}-${r.toLowerCase()}`;return t`
        ${Tt[i]}
        ${n?"margin-bottom: 1.05em;":"margin-bottom: 0;"}
    `},il=(e,r)=>t`
    ${nl(e,r.weight||"regular",r.paragraph)}
    ${((e=!1,r=!1)=>r?t`
            display: block;
        `:e?t`
            display: inline;
        `:t`
            display: block;
        `)(r.inline,r.paragraph)}
    color: ${Wt.text};
`;var al;!function(e){const n=(e,t,n)=>{const i=r(e).attrs((({inline:e})=>({as:e?"span":void 0})))`
            ${e=>il(t,e)}
        `;return i.displayName=`Typography.${n}`,i};e.HeaderXXL=n("h1","header-xxl","HeaderXXL"),e.HeaderXL=n("h2","header-xl","HeaderXL"),e.HeaderLG=n("h3","header-lg","HeaderLG"),e.HeaderMD=n("h4","header-md","HeaderMD"),e.HeaderSM=n("h5","header-sm","HeaderSM"),e.HeaderXS=n("h6","header-xs","HeaderXS");const i=(e,t)=>{const n=r.p.attrs((({inline:e})=>({as:e?"span":void 0})))`
            ${r=>il(e,r)}
        `;return n.displayName=`Typography.${t}`,n};e.BodyBL=i("body-baseline","BodyBL"),e.BodyMD=i("body-md","BodyMD"),e.BodySM=i("body-sm","BodySM"),e.BodyXS=i("body-xs","BodyXS");const s=(e,n)=>{const i=r.a`
            ${r=>t`
                ${nl(e,r.weight||"regular")}
                color: ${Wt.hyperlink};
                text-decoration: none;

                :hover,
                :active,
                :focus {
                    color: ${Wt["text-hover"]};
                }
            `}
        `,s=e=>{var{external:r=!1,children:t}=e,n=w(e,["external","children"]);return o(i,Object.assign({},n,{children:[t,r&&a(ol,{})]}))};return s.displayName=`Typography.${n}`,s};e.LinkBL=s("body-baseline","LinkBL"),e.LinkMD=s("body-md","LinkMD"),e.LinkSM=s("body-sm","LinkSM"),e.LinkXS=s("body-xs","LinkXS")}(al||(al={}));const ol=r(F)`
    height: 1lh;
    width: 1em;
    margin-left: 0.4em;
    vertical-align: middle;
`,sl=r.ul`
    display: flex;
    list-style: none;
    margin-left: 4rem;
    flex-shrink: 0;

    ${Pt.MaxWidth.lg} {
        display: none;
    }
`,ll=r.ul`
    display: none;

    ${Pt.MaxWidth.lg} {
        display: flex;
        list-style: none;
        margin-left: 4rem;
        flex-shrink: 0;
    }
`,dl=r.ul`
    display: none;
    list-style: none;

    ${Pt.MaxWidth.lg} {
        display: flex;
        flex-direction: column;
        margin-top: 2.5rem;
        width: max-content;
        min-width: 22rem;
        max-width: 24rem;
    }

    ${Pt.MaxWidth.sm} {
        width: 100%;
        max-width: unset;
        min-width: unset;
    }
`,cl=r.li`
    position: relative;
    display: flex;
    align-items: center;

    :not(:last-of-type) {
        margin-right: 1rem;
    }

    ${Pt.MaxWidth.lg} {
        width: 100%;
        padding: 0 0 0 1rem;
        justify-content: center;

        :not(:last-of-type) {
            margin-right: 0;
            margin-bottom: ${e=>e.$mobile?"1rem":"0"};
        }
    }

    ${Pt.MaxWidth.sm} {
        ${e=>{if(e.$mobile)return t`
                    padding: 0 1rem;
                `}}
    }
`,ul=r(tl.Small)`
    ${Pt.MaxWidth.lg} {
        width: 100%;
        padding: 0.685rem 1rem;
    }
`,gl=r.div`
    display: none;

    ${Pt.MaxWidth.lg} {
        display: flex;
        flex-direction: column;
        margin-top: 2.5rem;
    }
`,hl=r(al.BodyMD)`
    margin-bottom: 0.5rem;
`,ml=r.div`
    display: flex;
`,bl=r.a`
    :not(:last-child) {
        margin-right: 1rem;
    }

    img {
        width: auto;
        height: auto;
        object-fit: contain;
    }

    ${Pt.MaxWidth.lg} {
        img {
            max-width: 11rem;
        }
    }

    ${Pt.MaxWidth.sm} {
        img {
            max-width: 100%;
        }
    }
`,fl=({actionButtons:e,mobile:r=!1,onActionButtonClick:t})=>{const n=e=>{e.stopPropagation()},i=e=>r=>{r.stopPropagation(),"download"===e.type&&window.scrollTo({left:0,top:document.body.scrollHeight,behavior:"smooth"}),t(r,e)},l=(e,r)=>{const t=e?(e=>{const r=Ns(e,(e=>"download"===e.type));if(r>-1){const t=[...e],n=t.splice(r,1);return[...t,n[0]]}return e})(r):r;return t.map(((r,t)=>{let s;switch(r.type){case"download":s=e?(l=r.args,o(gl,{children:[a(hl,Object.assign({weight:"semibold"},{children:l&&l.children||"Download the app"})),o(ml,{children:[a(bl,Object.assign({href:"https://apps.apple.com/sg/app/moments-of-life/id1383218758",target:"_blank",rel:"noopener noreferrer","data-testid":"button__app-store",onClick:n},{children:a("img",{src:"https://assets.life.gov.sg/react-design-system/img/download/apple-app-store.png",alt:"apple-app-store"})})),a(bl,Object.assign({href:"https://play.google.com/store/apps/details?id=sg.gov.app.mol&hl=en_SG",target:"_blank",rel:"noopener noreferrer","data-testid":"button__play-store",onClick:n},{children:a("img",{src:"https://assets.life.gov.sg/react-design-system/img/download/google-play-store.png",alt:"google-play-store"})}))]})]})):a(ul,Object.assign({},r.args,{type:"button",onClick:i(r),"data-testid":"action-button__download"},{children:"Download the app"}));break;case"button":{const n=r.args["data-testid"]?`action-button__${r.args["data-testid"]}`:`action-button__button-${e?"mobile-":""}${t+1}`;s=a(ul,Object.assign({},r.args,{type:"button",onClick:i(r),"data-testid":n}));break}case"component":{const e=r.args;s=e&&e.render||null;break}default:s=null}var l;if(s)return a(cl,Object.assign({$mobile:e},{children:s}),`action-button-${t+1}`)}))};if(e){const t=(null==e?void 0:e.mobile)||e.desktop,n=t.filter((e=>!!e.uncollapsible)),i=t.filter((e=>!e.uncollapsible));return r?a(s,{children:i.length>0&&a(dl,{children:l(r,i)})}):o(s,{children:[n.length>0&&a(ll,{children:l(!1,n)}),e.desktop.length>0&&a(sl,{children:l(r,e.desktop)})]})}return a(s,{})},pl={OpenSans:{Regular:"Open Sans",Semibold:"Open Sans Semibold",Bold:"Open Sans Bold",Light:"Open Sans Light"},PlusJakartaSans:{Regular:"Plus Jakarta Sans",Semibold:"Plus Jakarta Sans Semibold",Bold:"Plus Jakarta Sans Bold",Light:"Plus Jakarta Sans Light"},MerriWeather:"Merriweather"},yl={D1:{fontFamily:pl.OpenSans.Bold,fontSize:3,fontWeight:700,lineHeight:4,letterSpacing:-.056},D2:{fontFamily:pl.OpenSans.Bold,fontSize:2.5,fontWeight:700,lineHeight:3.5,letterSpacing:-.032},D3:{fontFamily:pl.OpenSans.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},D4:{fontFamily:pl.OpenSans.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},DBody:{fontFamily:pl.OpenSans.Regular,fontSize:1.375,lineHeight:1.75},H1:{fontFamily:pl.OpenSans.Bold,fontSize:2,fontWeight:700,lineHeight:2.5},H2:{fontFamily:pl.OpenSans.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},H3:{fontFamily:pl.OpenSans.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},H4:{fontFamily:pl.OpenSans.Bold,fontSize:1.125,fontWeight:700,lineHeight:1.625},H5:{fontFamily:pl.OpenSans.Bold,fontSize:1,fontWeight:700,lineHeight:1.5,letterSpacing:.014},H6:{fontFamily:pl.OpenSans.Bold,fontSize:.875,fontWeight:700,lineHeight:1.6,letterSpacing:.012},Body:{fontFamily:pl.OpenSans.Regular,fontSize:1.125,lineHeight:1.625},BodySmall:{fontFamily:pl.OpenSans.Regular,fontSize:1,lineHeight:1.5,letterSpacing:.014},XSmall:{fontFamily:pl.OpenSans.Regular,fontSize:.75,lineHeight:1.2,letterSpacing:.012}},vl={D1:{fontFamily:pl.PlusJakartaSans.Bold,fontSize:3,fontWeight:700,lineHeight:3.5,letterSpacing:-.056},D2:{fontFamily:pl.PlusJakartaSans.Bold,fontSize:2.5,fontWeight:700,lineHeight:3,letterSpacing:-.032},D3:{fontFamily:pl.PlusJakartaSans.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},D4:{fontFamily:pl.PlusJakartaSans.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},DBody:{fontFamily:pl.PlusJakartaSans.Regular,fontSize:1.375,lineHeight:1.75},H1:{fontFamily:pl.PlusJakartaSans.Bold,fontSize:2,fontWeight:700,lineHeight:2.5,letterSpacing:-.032},H2:{fontFamily:pl.PlusJakartaSans.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},H3:{fontFamily:pl.PlusJakartaSans.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},H4:{fontFamily:pl.PlusJakartaSans.Bold,fontSize:1.125,fontWeight:700,lineHeight:1.75},H5:{fontFamily:pl.PlusJakartaSans.Bold,fontSize:1,fontWeight:700,lineHeight:1.5},H6:{fontFamily:pl.PlusJakartaSans.Bold,fontSize:.875,fontWeight:700,lineHeight:1.625,letterSpacing:.012},Body:{fontFamily:pl.PlusJakartaSans.Regular,fontSize:1.125,lineHeight:1.75},BodySmall:{fontFamily:pl.PlusJakartaSans.Regular,fontSize:1,lineHeight:1.5,letterSpacing:.014},XSmall:{fontFamily:pl.PlusJakartaSans.Regular,fontSize:.75,lineHeight:1.2,letterSpacing:.012}},Fl={collections:{base:yl,oneservice:{D1:{fontFamily:pl.OpenSans.Bold,fontSize:2.5,fontWeight:700,lineHeight:3.5},D2:{fontFamily:pl.OpenSans.Bold,fontSize:2,fontWeight:700,lineHeight:3},D3:{fontFamily:pl.OpenSans.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},D4:{fontFamily:pl.OpenSans.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},DBody:{fontFamily:pl.OpenSans.Regular,fontSize:1.125,lineHeight:1.625},H1:{fontFamily:pl.OpenSans.Bold,fontSize:1.75,fontWeight:700,lineHeight:2.625},H2:{fontFamily:pl.OpenSans.Bold,fontSize:1.375,fontWeight:700,lineHeight:2},H3:{fontFamily:pl.OpenSans.Bold,fontSize:1.125,fontWeight:700,lineHeight:1.625},H4:{fontFamily:pl.OpenSans.Bold,fontSize:1,fontWeight:700,lineHeight:1.5},H5:{fontFamily:pl.OpenSans.Bold,fontSize:.875,fontWeight:700,lineHeight:1.313},H6:{fontFamily:pl.OpenSans.Bold,fontSize:.75,fontWeight:700,lineHeight:1.125},Body:{fontFamily:pl.OpenSans.Regular,fontSize:1,lineHeight:1.5},BodySmall:{fontFamily:pl.OpenSans.Regular,fontSize:.875,lineHeight:1.313},XSmall:{fontFamily:pl.OpenSans.Regular,fontSize:.75,lineHeight:1.125}},plusJakartaSans:vl},defaultValue:"base"},xl=e=>r=>{var t;const n=(null===(t=r.theme)||void 0===t?void 0:t._v2)||r.theme,i=Kn(Fl,null==n?void 0:n[qn.textStyleScheme]);return n.options&&n.options.textStyle?Zn(i,e,n.options.textStyle):Zn(i,e)},wl={D1:{fontFamily:xl("D1.fontFamily"),fontSize:xl("D1.fontSize"),fontWeight:xl("D1.fontWeight"),lineHeight:xl("D1.lineHeight"),letterSpacing:xl("D1.letterSpacing")},D2:{fontFamily:xl("D2.fontFamily"),fontSize:xl("D2.fontSize"),fontWeight:xl("D2.fontWeight"),lineHeight:xl("D2.lineHeight"),letterSpacing:xl("D2.letterSpacing")},D3:{fontFamily:xl("D3.fontFamily"),fontSize:xl("D3.fontSize"),fontWeight:xl("D3.fontWeight"),lineHeight:xl("D3.lineHeight"),letterSpacing:xl("D3.letterSpacing")},D4:{fontFamily:xl("D4.fontFamily"),fontSize:xl("D4.fontSize"),fontWeight:xl("D4.fontWeight"),lineHeight:xl("D4.lineHeight"),letterSpacing:xl("D4.letterSpacing")},DBody:{fontFamily:xl("DBody.fontFamily"),fontSize:xl("DBody.fontSize"),fontWeight:xl("DBody.fontWeight"),lineHeight:xl("DBody.lineHeight"),letterSpacing:xl("DBody.letterSpacing")},H1:{fontFamily:xl("H1.fontFamily"),fontSize:xl("H1.fontSize"),fontWeight:xl("H1.fontWeight"),lineHeight:xl("H1.lineHeight"),letterSpacing:xl("H1.letterSpacing")},H2:{fontFamily:xl("H2.fontFamily"),fontSize:xl("H2.fontSize"),fontWeight:xl("H2.fontWeight"),lineHeight:xl("H2.lineHeight"),letterSpacing:xl("H2.letterSpacing")},H3:{fontFamily:xl("H3.fontFamily"),fontSize:xl("H3.fontSize"),fontWeight:xl("H3.fontWeight"),lineHeight:xl("H3.lineHeight"),letterSpacing:xl("H3.letterSpacing")},H4:{fontFamily:xl("H4.fontFamily"),fontSize:xl("H4.fontSize"),fontWeight:xl("H4.fontWeight"),lineHeight:xl("H4.lineHeight"),letterSpacing:xl("H4.letterSpacing")},H5:{fontFamily:xl("H5.fontFamily"),fontSize:xl("H5.fontSize"),fontWeight:xl("H5.fontWeight"),lineHeight:xl("H5.lineHeight"),letterSpacing:xl("H5.letterSpacing")},H6:{fontFamily:xl("H6.fontFamily"),fontSize:xl("H6.fontSize"),fontWeight:xl("H6.fontWeight"),lineHeight:xl("H6.lineHeight"),letterSpacing:xl("H6.letterSpacing")},Body:{fontFamily:xl("Body.fontFamily"),fontSize:xl("Body.fontSize"),fontWeight:xl("Body.fontWeight"),lineHeight:xl("Body.lineHeight"),letterSpacing:xl("Body.letterSpacing")},BodySmall:{fontFamily:xl("BodySmall.fontFamily"),fontSize:xl("BodySmall.fontSize"),fontWeight:xl("BodySmall.fontWeight"),lineHeight:xl("BodySmall.lineHeight"),letterSpacing:xl("BodySmall.letterSpacing")},XSmall:{fontFamily:xl("XSmall.fontFamily"),fontSize:xl("XSmall.fontSize"),fontWeight:xl("XSmall.fontWeight"),lineHeight:xl("XSmall.lineHeight"),letterSpacing:xl("XSmall.letterSpacing")}},Bl=[pl.OpenSans,pl.PlusJakartaSans],Dl=(e,r)=>{switch(r){case 700:case"bold":return e.Bold;case 600:case"semibold":return e.Semibold;case 300:case"light":return e.Light;case 400:case"regular":return e.Regular;default:return""}},$l=(e,r)=>n=>{var i;const a=wl[e].fontFamily(n),o=wl[e].fontWeight(n),s=Bl.find((e=>Object.values(e).includes(a)));return s?t`
                font-family: ${Dl(s,r)||Dl(s,o)||a};
                font-weight: normal !important;
            `:t`
            font-family: ${a};
            font-weight: ${null!==(i=Sl(r)||o)&&void 0!==i?i:"normal"};
        `},Sl=e=>{switch(e){case 300:case"light":return 300;case 400:case"regular":return 400;case 600:case"semibold":return 600;case 700:case"bold":return 700;case 900:case"black":return 900;default:return""}},El=e=>{if(e>0)return t`
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: ${e};
            line-clamp: ${e};
            overflow: hidden;
        `},Cl=(e,r,n=!1)=>i=>{const a=wl[e],o=a.fontSize(i);return t`
            ${$l(e,r)}
            font-size: ${o}rem !important;
            line-height: ${a.lineHeight}rem !important;
            letter-spacing: ${a.letterSpacing(i)||0}rem !important;
            ${t`
                margin-bottom: ${o*(n?1.05:0)}rem;
            `}
        `},Al=(e=!1,r=!1,n=void 0)=>r?t`
            display: block;
            ${El(n)}
        `:e?t`
            display: inline;
        `:t`
            display: block;
            ${El(n)}
        `;var kl;!function(e){e.D1=r.h1`
        ${e=>t`
                ${Cl("D1",e.weight,e.paragraph)}
                color: ${ai[1]};
                ${Al(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.D2=r.h1`
        ${e=>t`
                ${Cl("D2",e.weight,e.paragraph)}
                color: ${ai[1]};
                ${Al(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.D3=r.h1`
        ${e=>t`
                ${Cl("D3",e.weight,e.paragraph)}
                color: ${ai[1]};
                ${Al(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.D4=r.h1`
        ${e=>t`
                ${Cl("D4",e.weight,e.paragraph)}
                color: ${ai[1]};
                ${Al(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.DBody=r.h1`
        ${e=>t`
                ${Cl("DBody",e.weight,e.paragraph)}
                color: ${ai[1]};
                ${Al(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H1=r.h1`
        ${e=>t`
                ${Cl("H1",e.weight,e.paragraph)}
                color: ${ai[1]};
                ${Al(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H2=r.h2`
        ${e=>t`
                ${Cl("H2",e.weight,e.paragraph)}
                color: ${ai[1]};
                ${Al(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H3=r.h3`
        ${e=>t`
                ${Cl("H3",e.weight,e.paragraph)}
                color: ${ai[1]};
                ${Al(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H4=r.h4`
        ${e=>t`
                ${Cl("H4",e.weight,e.paragraph)}
                color: ${ai[1]};
                ${Al(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H5=r.h5`
        ${e=>t`
                ${Cl("H5",e.weight,e.paragraph)}
                color: ${ai[1]};
                ${Al(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H6=r.h6`
        ${e=>t`
                ${Cl("H6",e.weight,e.paragraph)}
                color: ${ai[1]};
                ${Al(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.Body=r.p`
        ${e=>t`
                ${Cl("Body",e.weight,e.paragraph)}
                color: ${ai[1]};
                ${Al(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.BodySmall=r.p`
        ${e=>t`
                ${Cl("BodySmall",e.weight,e.paragraph)}
                color: ${ai[1]};
                ${Al(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.XSmall=r.span`
        ${e=>t`
                ${Cl("XSmall",e.weight,e.paragraph)}
                color: ${ai[1]};
                ${Al(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.Hyperlink={Default:e=>Hl(Object.assign(Object.assign({},e),{textStyle:"Body"})),Small:e=>Hl(Object.assign(Object.assign({},e),{textStyle:"BodySmall"}))}}(kl||(kl={}));const zl=r.a`
    ${e=>t`
            ${Cl(e.textStyle,e.weight)}
            color: ${ti};
            text-decoration: none;

            :hover,
            :active,
            :focus {
                color: ${ni};

                svg {
                    color: ${ni};
                }
            }
        `}
`,Ol=r(F)`
    height: 1rem;
    width: 1rem;
    margin-left: 0.4rem;
    vertical-align: middle;
`,Hl=e=>{var{external:r=!1,children:t}=e,n=w(e,["external","children"]);return o(zl,Object.assign({},n,{children:[t,r&&a(Ol,{})]}))};var Ml;!function(e){e[e.Subpage=0]="Subpage",e[e.Domain=1]="Domain"}(Ml||(Ml={}));const _l={collections:{base:{InputBoxShadow:t`
        inset 0 0 4px 0px ${oi.Accent}
    `,InputErrorBoxShadow:t`
        inset 0 0 4px 0px ${oi.Red}
    `,ElevationBoxShadow:t`
      0px 2px 8px ${oi.Elevation}
    `,Table:{Header:"#F5F5F5",Cell:{Primary:"#FBFBFB",Secondary:"#FFFFFF",Selected:"#F9F6FF",Hover:"#E8E1F5"}},Button:{Danger:{BackgroundColor:"#CB2213",Border:"#CB2213",Hover:"#8F0E0E",Primary:"#CB2213"}}},rbs:{InputBoxShadow:t`
        inset 0 0 3px 0px ${oi.Accent}
    `,InputErrorBoxShadow:t`
        inset 0 0 3px 0px ${oi.Red}
    `,ElevationBoxShadow:t`
      0px 2px 8px ${oi.Elevation}
    `,Table:{Header:"#F5F5F5",Cell:{Primary:"#FBFBFB",Secondary:"#FFFFFF",Selected:"#F0F6FF",Hover:"#DDE6FD"}},Button:{Danger:{BackgroundColor:"#CB2213",Border:"#CB2213",Hover:"#8F0E0E",Primary:"#CB2213"}}}},defaultValue:"base"},jl=e=>r=>{var t,n;const i=(null===(t=r.theme)||void 0===t?void 0:t._v2)||r.theme,a=Kn(_l,null==i?void 0:i[qn.designTokenScheme]);return(null===(n=i.options)||void 0===n?void 0:n.designToken)?Zn(a,e,i.options.designToken):Zn(a,e)},Wl=(jl("InputBoxShadow"),jl("InputErrorBoxShadow"),jl("ElevationBoxShadow")),Tl=(jl("Table.Header"),jl("Table.Cell.Primary"),jl("Table.Cell.Secondary"),jl("Table.Cell.Selected"),jl("Table.Cell.Hover"),jl("Button.Danger.BackgroundColor"),jl("Button.Danger.Hover"),jl("Button.Danger.Primary"),jl("Button.Danger.Border"),r.ul`
    width: 100%;
    overflow: auto;
    display: flex;
    flex-direction: column;
    margin-top: 0;
    left: 0;
    top: 102%;
    min-width: 15.625rem;
    position: absolute;
    max-height: 20rem;

    background: ${ai[8]};
    border-radius: 0 0 0.5rem 0.5rem;
    box-shadow: ${Wl};
`),Ll=r.ul`
    display: none;
    list-style: none;

    ${nn.tablet} {
        border-left: 0.25rem solid ${ti};
        display: flex;
        flex-direction: column;
    }
`,Il=r(kl.Hyperlink.Small)`
    ${Cl("H6","regular")};
    width: 100%;
    display: flex;
    position: relative;
    align-items: flex-start;
    text-align: left;
    color: ${ai[1]};

    padding: 1px 1rem;

    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    white-space: pre-wrap;

    :active,
    :focus {
        color: ${ti};
    }
    :hover {
        color: ${ii.Light[1]};
    }

    ${nn.tablet} {
        ${Cl("H5","bold")}
        width: 100%;
        padding-left: 1.5rem;
        padding-right: 1.5rem;
        line-height: 1.125rem;
    }
`,Yl=r.li`
    width: 100%;
    position: relative;
    display: flex;
    align-items: flex-start;
    padding: 0.5rem 0;

    :first-child {
        padding-top: 1rem;
    }

    :last-child {
        padding-bottom: 1rem;
    }

    ${nn.tablet} {
        padding: 0.625rem 0;

        :first-child {
            padding-top: 0.25rem;
        }

        :last-child {
            padding-bottom: 0.625rem;
        }
    }
`,Rl=({items:e,mobile:r=!1,onItemClick:t})=>{const n=e=>r=>{r.stopPropagation(),t(r,e)},i=(r=!1)=>e.map(((e,t)=>{const{children:i,options:o}=e,s=w(e,["children","options"]),l=r?`link__mobile-${t+1}`:`link__${t+1}`;return a(Yl,{children:a(Il,Object.assign({"data-testid":l,weight:"bold"},s,{onClick:n(e)},o,{children:i}))},t)}));if(e&&e.length>0){return a(r?Ll:Tl,{children:i(r)})}return a(s,{})},Pl=r.ul`
    display: flex;
    list-style: none;
    position: relative;

    ${e=>e.$alignLeft&&"margin-right: auto;"}

    ${Pt.MaxWidth.lg} {
        display: none;
    }
`,Nl=r.ul`
    display: none;
    list-style: none;

    ${Pt.MaxWidth.lg} {
        display: flex;
        flex-direction: column;
        overflow: hidden;
    }
`,Vl=r.li`
    display: flex;
    margin-left: 1rem;

    :first-child {
        // negative margin to preserve touch target size for link
        margin-left: ${e=>e.$hiddenBranding?"-0.5rem":"0"};
    }

    ${Pt.MaxWidth.lg} {
        flex-direction: column;
        padding: 0.125rem 0;
        width: 100%;
        margin-left: 0rem;
    }
`,Ul=r(al.LinkMD)`
    display: flex;
    position: relative;
    align-items: center;
    text-align: center;
    color: ${Wt.text};
    height: 100%;
    padding: 0 0.5rem;

    :active,
    :focus,
    :hover {
        color: ${e=>e.$selected?Wt["text-selected-hover"]:Wt["text-hover"]};
    }

    ${Pt.MaxWidth.lg} {
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
`,Xl=r.div`
    position: absolute;
    bottom: 0;
    height: 0.25rem;
    left: 0.5rem;
    right: 0.5rem;
    background-color: ${Wt["border-selected"]};

    :hover {
        ${e=>e.$selected&&Wt["border-selected-hover"]};
    }

    ${Pt.MaxWidth.lg} {
        left: 0;
        right: unset;
        top: 0;
        bottom: 0;
        height: 100%;
        width: 0.25rem;
    }
`,Gl=r.div`
    padding-left: 0.5rem;
    margin-right: -0.5rem;
`,Ql=r(Vt)`
    padding: 0.5rem;
    transform: rotate(${e=>e.$selected?0:180}deg);
    transition: transform 300ms ease-in-out;
    margin: auto 0.25rem auto 0;
`,Zl=r(x)`
    height: 1.25rem;
    width: 1.25rem;
    color: ${Wt.icon};
    :hover {
        ${e=>e.$selected?Wt["icon-selected-hover"]:Wt["icon-hover"]};
    }
`,Kl=({items:e,selectedId:r,mobile:t=!1,hideNavBranding:n,onItemClick:i})=>{const[l,g]=c(-1),[h,m]=c(!1),b=u(null);d((()=>{const e=e=>{b.current&&!b.current.contains(e.target)&&f()};return document.addEventListener("click",e,!0),()=>{document.removeEventListener("click",e,!0)}}),[]);const f=()=>{m(!1)},p=(e,r)=>t=>{t.stopPropagation(),g(r),m(!0),i(t,e)},y=(e,r)=>{e.stopPropagation(),i(e,r),m(!1)},v=()=>e.map(((e,i)=>{if("component"===e.itemType){const r=e&&e.children||null;return a("li",{children:r},i)}{const s=(e=>{if(e.id===r)return!0;if((null==e?void 0:e.subMenu)&&e.subMenu.length>=1)return!!e.subMenu.find((e=>e.id===r));return!1})(e),{children:d,options:c}=e,u=w(e,["children","options"]),g=s?t?"bold":"semibold":"regular",m=t?`link__mobile-${i+1}`:`link__${i+1}`,b=l>=0&&l===i&&h;return o(Vl,Object.assign({$hiddenBranding:n},{children:[o(Ul,Object.assign({"data-testid":m,weight:g,$selected:s},u,{onClick:p(e,i)},c,{children:[a(Jl,{children:d}),s&&a(Xl,{"data-testid":`${m}-indicator`,$selected:s}),t&&e.subMenu&&a(Gl,{children:a(Ql,Object.assign({"data-testid":`${m}-expand-collapse-button`,$selected:b,focusHighlight:!1,focusOutline:"browser","aria-label":b?"Collapse":"Expand"},{children:a(Zl,{$selected:s})}))})]})),b&&a(Rl,{items:e.subMenu,mobile:t,onItemClick:y})]}),i)}}));return e&&e.length>0?t?a(Nl,Object.assign({ref:b},{children:v()})):a(Pl,Object.assign({ref:b,$alignLeft:n},{children:v()})):a(s,{})},ql=g(((e,r)=>{var{items:t,className:n,id:l,selectedId:g,compress:m=!1,fixed:b=!0,resources:f,hideNavElements:p=!1,hideNavBranding:y=!1,drawerDismissalExclusions:v=[],actionButtons:F,onItemClick:x,onActionButtonClick:B,onBrandClick:D,masthead:$=!0,layout:S="default"}=e,E=w(e,["items","className","id","selectedId","compress","fixed","resources","hideNavElements","hideNavBranding","drawerDismissalExclusions","actionButtons","onItemClick","onActionButtonClick","onBrandClick","masthead","layout"]);const[C,A]=c(!1),[k,z]=c(!1),O="stretch"===S,H=u(),M=i(),_=(e=>{switch(e){case"bookingsg":return bi;case"mylegacy":return pi;case"ccube":return fi;default:return mi}})(null==M?void 0:M.resourceScheme),j=(null==f?void 0:f.primary)||_.primary,W=null==f?void 0:f.secondary;h(r,(()=>Object.assign(H.current,{dismissDrawer:()=>{T()}})),[C]),d((()=>(I(),window.addEventListener("resize",I),()=>{window.removeEventListener("resize",I)})),[]);const T=()=>{A(!1),setTimeout((()=>{z(!1)}),550)},L=e=>C&&-1===v.indexOf(e),I=()=>{window.innerWidth<=rn.tablet&&C&&T()},Y=(e,r)=>{D&&(e.preventDefault(),D(r)),L("brand-click")&&T()},R=(e,r)=>{r.onClick?r.onClick(e):x&&(e.preventDefault(),x(r)),!(null==r?void 0:r.subMenu)&&L("item-click")&&T()},P=(e,r)=>{r.args&&r.args.onClick?r.args.onClick(e):B&&(e.preventDefault(),B(r)),L("item-click")&&T()},N=()=>{A(!0),z(!0)},V=()=>{L("close-button-click")&&T()},U=()=>{const e=t.mobile||t.desktop;return e&&e.length>0||F&&(()=>{const e=F.mobile||F.desktop;return!!e&&e.length&&e.some((e=>!e.uncollapsible))})()?a(Zt,Object.assign({"aria-label":"Open nav menu","data-testid":"button__mobile-menu",onClick:N,focusHighlight:!1},{children:a(Kt,{})})):null};return o(Xt,Object.assign({ref:H,$fixed:b,className:n,id:l||"navbar-wrapper","data-testid":E["data-testid"]||"navbar-wrapper"},{children:[$&&a(bn,{}),o(hn.Content,Object.assign({stretch:O},{children:[o(Gt,Object.assign({$compress:m},{children:[!y&&o(qt,Object.assign({$compress:m,"data-id":"brand-container"},{children:[a(Qn,{resources:j,onClick:Y,"data-id":"brand-primary","data-testid":"main__brand",type:"primary"}),W&&o(s,{children:[a(en,{$compress:m}),a(Qn,{resources:W,onClick:Y,"data-id":"brand-secondary","data-testid":"main__brand-secondary",type:"secondary"})]})]})),!p&&o(Qt,Object.assign({$hideNavBranding:y},{children:[a(Kl,{items:t.desktop,onItemClick:R,selectedId:g,hideNavBranding:y}),a(fl,{actionButtons:F,onActionButtonClick:P}),U()]}))]})),!p&&a(Vn,Object.assign({show:k,enableOverlayClick:!0,onOverlayClick:V},{children:o(hi,Object.assign({show:C,resources:{primary:j,secondary:W},onClose:V,onBrandClick:Y,actionButtons:F,hideNavBranding:y},{children:[a(Kl,{items:t.mobile||t.desktop,onItemClick:R,selectedId:g,mobile:!0}),a(fl,{actionButtons:F,onActionButtonClick:P,mobile:!0})]}))}))]}))]}))})),ed=Jt,rd=3.5;export{ql as Navbar,ed as NavbarHeight,rd as NavbarMobileHeight};
//# sourceMappingURL=index.js.map
