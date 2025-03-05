import{MenuIcon as e}from"@lifesg/react-icons/menu";import r,{css as t,useTheme as n,keyframes as i}from"styled-components";import{jsx as a,jsxs as s,Fragment as o}from"react/jsx-runtime";import l,{useEffect as d,useState as c,useRef as u,forwardRef as h,useImperativeHandle as g}from"react";import{useFloatingTree as m,FloatingTree as b,useFloatingNodeId as f,FloatingNode as p}from"@floating-ui/react";import y from"react-dom";import{CrossIcon as x}from"@lifesg/react-icons/cross";import{ExternalIcon as v}from"@lifesg/react-icons/external";import{ChevronUpIcon as w}from"@lifesg/react-icons/chevron-up";function F(e,r){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(n=Object.getOwnPropertySymbols(e);i<n.length;i++)r.indexOf(n[i])<0&&Object.prototype.propertyIsEnumerable.call(e,n[i])&&(t[n[i]]=e[n[i]])}return t}"function"==typeof SuppressedError&&SuppressedError;var $="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};function C(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var E=Array.isArray,D="object"==typeof $&&$&&$.Object===Object&&$,B=D,A="object"==typeof self&&self&&self.Object===Object&&self,k=B||A||Function("return this")(),M=k.Symbol,S=M,z=Object.prototype,O=z.hasOwnProperty,_=z.toString,j=S?S.toStringTag:void 0;var W=function(e){var r=O.call(e,j),t=e[j];try{e[j]=void 0;var n=!0}catch(e){}var i=_.call(e);return n&&(r?e[j]=t:delete e[j]),i},Y=Object.prototype.toString;var L=W,T=function(e){return Y.call(e)},I=M?M.toStringTag:void 0;var N=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":I&&I in Object(e)?L(e):T(e)};var H=function(e){return null!=e&&"object"==typeof e},R=N,P=H;var U=function(e){return"symbol"==typeof e||P(e)&&"[object Symbol]"==R(e)},V=E,X=U,J=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,Q=/^\w*$/;var Z=function(e,r){if(V(e))return!1;var t=typeof e;return!("number"!=t&&"symbol"!=t&&"boolean"!=t&&null!=e&&!X(e))||(Q.test(e)||!J.test(e)||null!=r&&e in Object(r))};var G=function(e){var r=typeof e;return null!=e&&("object"==r||"function"==r)},K=N,q=G;var ee,re=function(e){if(!q(e))return!1;var r=K(e);return"[object Function]"==r||"[object GeneratorFunction]"==r||"[object AsyncFunction]"==r||"[object Proxy]"==r},te=k["__core-js_shared__"],ne=(ee=/[^.]+$/.exec(te&&te.keys&&te.keys.IE_PROTO||""))?"Symbol(src)_1."+ee:"";var ie=function(e){return!!ne&&ne in e},ae=Function.prototype.toString;var se=function(e){if(null!=e){try{return ae.call(e)}catch(e){}try{return e+""}catch(e){}}return""},oe=re,le=ie,de=G,ce=se,ue=/^\[object .+?Constructor\]$/,he=Function.prototype,ge=Object.prototype,me=he.toString,be=ge.hasOwnProperty,fe=RegExp("^"+me.call(be).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");var pe=function(e,r){return null==e?void 0:e[r]},ye=function(e){return!(!de(e)||le(e))&&(oe(e)?fe:ue).test(ce(e))},xe=pe;var ve=function(e,r){var t=xe(e,r);return ye(t)?t:void 0},we=ve(Object,"create"),Fe=we;var $e=function(){this.__data__=Fe?Fe(null):{},this.size=0};var Ce=function(e){var r=this.has(e)&&delete this.__data__[e];return this.size-=r?1:0,r},Ee=we,De=Object.prototype.hasOwnProperty;var Be=function(e){var r=this.__data__;if(Ee){var t=r[e];return"__lodash_hash_undefined__"===t?void 0:t}return De.call(r,e)?r[e]:void 0},Ae=we,ke=Object.prototype.hasOwnProperty;var Me=function(e){var r=this.__data__;return Ae?void 0!==r[e]:ke.call(r,e)},Se=we;var ze=function(e,r){var t=this.__data__;return this.size+=this.has(e)?0:1,t[e]=Se&&void 0===r?"__lodash_hash_undefined__":r,this},Oe=$e,_e=Ce,je=Be,We=Me,Ye=ze;function Le(e){var r=-1,t=null==e?0:e.length;for(this.clear();++r<t;){var n=e[r];this.set(n[0],n[1])}}Le.prototype.clear=Oe,Le.prototype.delete=_e,Le.prototype.get=je,Le.prototype.has=We,Le.prototype.set=Ye;var Te=Le;var Ie=function(){this.__data__=[],this.size=0};var Ne=function(e,r){return e===r||e!=e&&r!=r},He=Ne;var Re=function(e,r){for(var t=e.length;t--;)if(He(e[t][0],r))return t;return-1},Pe=Re,Ue=Array.prototype.splice;var Ve=function(e){var r=this.__data__,t=Pe(r,e);return!(t<0)&&(t==r.length-1?r.pop():Ue.call(r,t,1),--this.size,!0)},Xe=Re;var Je=function(e){var r=this.__data__,t=Xe(r,e);return t<0?void 0:r[t][1]},Qe=Re;var Ze=function(e){return Qe(this.__data__,e)>-1},Ge=Re;var Ke=function(e,r){var t=this.__data__,n=Ge(t,e);return n<0?(++this.size,t.push([e,r])):t[n][1]=r,this},qe=Ie,er=Ve,rr=Je,tr=Ze,nr=Ke;function ir(e){var r=-1,t=null==e?0:e.length;for(this.clear();++r<t;){var n=e[r];this.set(n[0],n[1])}}ir.prototype.clear=qe,ir.prototype.delete=er,ir.prototype.get=rr,ir.prototype.has=tr,ir.prototype.set=nr;var ar=ir,sr=ve(k,"Map"),or=Te,lr=ar,dr=sr;var cr=function(e){var r=typeof e;return"string"==r||"number"==r||"symbol"==r||"boolean"==r?"__proto__"!==e:null===e};var ur=function(e,r){var t=e.__data__;return cr(r)?t["string"==typeof r?"string":"hash"]:t.map},hr=ur;var gr=function(e){var r=hr(this,e).delete(e);return this.size-=r?1:0,r},mr=ur;var br=function(e){return mr(this,e).get(e)},fr=ur;var pr=function(e){return fr(this,e).has(e)},yr=ur;var xr=function(e,r){var t=yr(this,e),n=t.size;return t.set(e,r),this.size+=t.size==n?0:1,this},vr=function(){this.size=0,this.__data__={hash:new or,map:new(dr||lr),string:new or}},wr=gr,Fr=br,$r=pr,Cr=xr;function Er(e){var r=-1,t=null==e?0:e.length;for(this.clear();++r<t;){var n=e[r];this.set(n[0],n[1])}}Er.prototype.clear=vr,Er.prototype.delete=wr,Er.prototype.get=Fr,Er.prototype.has=$r,Er.prototype.set=Cr;var Dr=Er,Br=Dr;function Ar(e,r){if("function"!=typeof e||null!=r&&"function"!=typeof r)throw new TypeError("Expected a function");var t=function(){var n=arguments,i=r?r.apply(this,n):n[0],a=t.cache;if(a.has(i))return a.get(i);var s=e.apply(this,n);return t.cache=a.set(i,s)||a,s};return t.cache=new(Ar.Cache||Br),t}Ar.Cache=Br;var kr=Ar;var Mr=function(e){var r=kr(e,(function(e){return 500===t.size&&t.clear(),e})),t=r.cache;return r},Sr=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,zr=/\\(\\)?/g,Or=Mr((function(e){var r=[];return 46===e.charCodeAt(0)&&r.push(""),e.replace(Sr,(function(e,t,n,i){r.push(n?i.replace(zr,"$1"):t||e)})),r}));var _r=function(e,r){for(var t=-1,n=null==e?0:e.length,i=Array(n);++t<n;)i[t]=r(e[t],t,e);return i},jr=E,Wr=U,Yr=M?M.prototype:void 0,Lr=Yr?Yr.toString:void 0;var Tr=function e(r){if("string"==typeof r)return r;if(jr(r))return _r(r,e)+"";if(Wr(r))return Lr?Lr.call(r):"";var t=r+"";return"0"==t&&1/r==-1/0?"-0":t},Ir=Tr;var Nr=E,Hr=Z,Rr=Or,Pr=function(e){return null==e?"":Ir(e)};var Ur=function(e,r){return Nr(e)?e:Hr(e,r)?[e]:Rr(Pr(e))},Vr=U;var Xr=function(e){if("string"==typeof e||Vr(e))return e;var r=e+"";return"0"==r&&1/e==-1/0?"-0":r},Jr=Ur,Qr=Xr;var Zr=function(e,r){for(var t=0,n=(r=Jr(r,e)).length;null!=e&&t<n;)e=e[Qr(r[t++])];return t&&t==n?e:void 0},Gr=Zr;var Kr=function(e,r,t){var n=null==e?void 0:Gr(e,r);return void 0===n?t:n},qr=C(Kr);const et=(e,r,t)=>qr(t,r)||qr(e,r),rt=(e,r)=>{const t=r||e.defaultValue;return qr(e.collections,t)},tt={collections:{lifesg:{"duration-150":"150ms","duration-250":"250ms","duration-350":"350ms","duration-500":"500ms","duration-800":"800ms","duration-1000":"1000ms","ease-default":"cubic-bezier(0.45, 0.05, 0.55, 0.95)","ease-standard":"cubic-bezier(0.86, 0, 0.07, 1)","ease-entrance":"cubic-bezier(0.18, 0.13, 0, 1)","ease-exit":"cubic-bezier(1, 0, 0.8, 0.85)"}},defaultValue:"lifesg"},nt=e=>r=>{var t;const n=r.theme,i=rt(tt,null==n?void 0:n.motionScheme);return(null===(t=null==n?void 0:n.overrides)||void 0===t?void 0:t.motion)?et(i,e,n.overrides.motion):i[e]},it={"duration-150":nt("duration-150"),"duration-250":nt("duration-250"),"duration-350":nt("duration-350"),"duration-500":nt("duration-500"),"duration-800":nt("duration-800"),"duration-1000":nt("duration-1000"),"ease-default":nt("ease-default"),"ease-standard":nt("ease-standard"),"ease-entrance":nt("ease-entrance"),"ease-exit":nt("ease-exit")},at={collections:{lifesg:{"brand-10":"#2C0C0B","brand-20":"#4C1513","brand-30":"#6C1D1B","brand-40":"#922825","brand-50":"#BF3431","brand-60":"#F15D5A","brand-70":"#F69491","brand-80":"#FABAB7","brand-90":"#FCD7D2","brand-95":"#FFEBE7","brand-100":"#FFF6F4","primary-10":"#001731","primary-20":"#002752","primary-30":"#003874","primary-40":"#004D9F","primary-50":"#1768BE","primary-60":"#3C91EC","primary-70":"#6CB4FF","primary-80":"#A5CDFF","primary-90":"#CFE1FE","primary-95":"#E8F0FE","primary-100":"#F7F9FF","secondary-10":"#131529","secondary-20":"#222547","secondary-30":"#2F3565","secondary-40":"#42498B","secondary-50":"#5B62A7","secondary-60":"#858CBD","secondary-70":"#A8ADCF","secondary-80":"#C6C9E0","secondary-90":"#DDDFEC","secondary-95":"#EDEEF5","secondary-100":"#F8F8FB","neutral-10":"#161616","neutral-20":"#282828","neutral-30":"#393939","neutral-40":"#4E4E4E","neutral-50":"#686868","neutral-60":"#8E8E8E","neutral-70":"#AFAFB0","neutral-80":"#C7CACA","neutral-90":"#DDE1E2","neutral-95":"#EDEFEF","neutral-100":"#F9F9F9","success-10":"#081A0F","success-20":"#0E2D1B","success-30":"#154126","success-40":"#1C5A34","success-50":"#257645","success-60":"#44A068","success-70":"#64C189","success-80":"#80DCA5","success-90":"#B4ECCB","success-95":"#D5F6E2","success-100":"#EFFCF4","warning-10":"#221302","warning-20":"#3B2204","warning-30":"#543106","warning-40":"#744408","warning-50":"#98590C","warning-60":"#D07A13","warning-70":"#E4A244","warning-80":"#F5C26C","warning-90":"#FADBA6","warning-95":"#FCECD4","warning-100":"#FDF7F0","error-10":"#330505","error-20":"#550808","error-30":"#750C0C","error-40":"#9E130F","error-50":"#CB2213","error-60":"#DE6C6C","error-70":"#E89B9B","error-80":"#EFBEBE","error-90":"#F5D9D9","error-95":"#F9ECEC","error-100":"#FCF7F7","info-10":"#021824","info-20":"#032B3F","info-30":"#053D59","info-40":"#065478","info-50":"#176E9B","info-60":"#5296BE","info-70":"#82B5DA","info-80":"#ACCFE7","info-90":"#CCE3F1","info-95":"#E3F1F8","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000","primary-inverse":"#FEAB10"},bookingsg:{"brand-10":"#2C0C0B","brand-20":"#4C1513","brand-30":"#6C1D1B","brand-40":"#922825","brand-50":"#BF3431","brand-60":"#F15D5A","brand-70":"#F69491","brand-80":"#FABAB7","brand-90":"#FCD7D2","brand-95":"#FFEBE7","brand-100":"#FFF6F4","primary-10":"#1A122C","primary-20":"#2F1F4D","primary-30":"#422D6E","primary-40":"#5B3D97","primary-50":"#7654BC","primary-60":"#9A82CD","primary-70":"#B7A7D8","primary-80":"#CFC5E5","primary-90":"#E3DDF0","primary-95":"#F0EDF7","primary-100":"#F9F8FC","secondary-10":"#0E1723","secondary-20":"#18293D","secondary-30":"#233A57","secondary-40":"#305078","secondary-50":"#4B6A8F","secondary-60":"#7B91A9","secondary-70":"#A1B1C3","secondary-80":"#C1CBD7","secondary-90":"#DBE1E8","secondary-95":"#EBEFF2","secondary-100":"#F7F8FA","neutral-10":"#161616","neutral-20":"#282828","neutral-30":"#393939","neutral-40":"#4E4E4E","neutral-50":"#686868","neutral-60":"#8E8E8E","neutral-70":"#AFAFB0","neutral-80":"#C7CACA","neutral-90":"#DDE1E2","neutral-95":"#EDEFEF","neutral-100":"#F9F9F9","success-10":"#081A0F","success-20":"#0E2D1B","success-30":"#154126","success-40":"#1C5A34","success-50":"#257645","success-60":"#44A068","success-70":"#64C189","success-80":"#80DCA5","success-90":"#B4ECCB","success-95":"#D5F6E2","success-100":"#EFFCF4","warning-10":"#221302","warning-20":"#3B2204","warning-30":"#543106","warning-40":"#744408","warning-50":"#98590C","warning-60":"#D07A13","warning-70":"#E4A244","warning-80":"#F5C26C","warning-90":"#FADBA6","warning-95":"#FCECD4","warning-100":"#FDF7F0","error-10":"#330505","error-20":"#550808","error-30":"#750C0C","error-40":"#9E130F","error-50":"#CB2213","error-60":"#DE6C6C","error-70":"#E89B9B","error-80":"#EFBEBE","error-90":"#F5D9D9","error-95":"#F9ECEC","error-100":"#FCF7F7","info-10":"#021824","info-20":"#032B3F","info-30":"#053D59","info-40":"#065478","info-50":"#176E9B","info-60":"#5296BE","info-70":"#82B5DA","info-80":"#ACCFE7","info-90":"#CCE3F1","info-95":"#E3F1F8","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000","primary-inverse":"#FEAB10"},rbs:{"brand-10":"#0E123A","brand-20":"#191E65","brand-30":"#232B90","brand-40":"#303BC5","brand-50":"#494CFF","brand-60":"#AD6EFF","brand-70":"#AEA4FF","brand-80":"#C5C4FF","brand-90":"#DDDCFF","brand-95":"#EDECFF","brand-100":"#F8F8FF","primary-10":"#10152B","primary-20":"#1C254B","primary-30":"#28356C","primary-40":"#38489A","primary-50":"#4D5AD7","primary-60":"#7487F2","primary-70":"#9AAAFC","primary-80":"#BDC7FD","primary-90":"#DADFFB","primary-95":"#ECEEFE","primary-100":"#F7F8FF","secondary-10":"#19151D","secondary-20":"#2B2533","secondary-30":"#3E3649","secondary-40":"#564A64","secondary-50":"#6F637D","secondary-60":"#948B9F","secondary-70":"#B3ACBB","secondary-80":"#CCC8D2","secondary-90":"#E1DEE4","secondary-95":"#EFEEF1","secondary-100":"#F9F8F9","neutral-10":"#161616","neutral-20":"#282828","neutral-30":"#393939","neutral-40":"#4E4E4E","neutral-50":"#686868","neutral-60":"#8E8E8E","neutral-70":"#AFAFB0","neutral-80":"#C7CACA","neutral-90":"#DDE1E2","neutral-95":"#EDEFEF","neutral-100":"#F9F9F9","success-10":"#081A0F","success-20":"#0E2D1B","success-30":"#154126","success-40":"#1C5A34","success-50":"#257645","success-60":"#44A068","success-70":"#64C189","success-80":"#80DCA5","success-90":"#B4ECCB","success-95":"#D5F6E2","success-100":"#EFFCF4","warning-10":"#221302","warning-20":"#3B2204","warning-30":"#543106","warning-40":"#744408","warning-50":"#98590C","warning-60":"#D07A13","warning-70":"#E4A244","warning-80":"#F5C26C","warning-90":"#FADBA6","warning-95":"#FCECD4","warning-100":"#FDF7F0","error-10":"#330505","error-20":"#550808","error-30":"#750C0C","error-40":"#9E130F","error-50":"#CB2213","error-60":"#DE6C6C","error-70":"#E89B9B","error-80":"#EFBEBE","error-90":"#F5D9D9","error-95":"#F9ECEC","error-100":"#FCF7F7","info-10":"#021824","info-20":"#032B3F","info-30":"#053D59","info-40":"#065478","info-50":"#176E9B","info-60":"#5296BE","info-70":"#82B5DA","info-80":"#ACCFE7","info-90":"#CCE3F1","info-95":"#E3F1F8","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000","primary-inverse":"#FEAB10"},mylegacy:{"brand-10":"#2C0C0B","brand-20":"#4C1513","brand-30":"#6C1D1B","brand-40":"#922825","brand-50":"#BF3431","brand-60":"#F15D5A","brand-70":"#F69491","brand-80":"#FABAB7","brand-90":"#FCD7D2","brand-95":"#FFEBE7","brand-100":"#FFF6F4","primary-10":"#0011924","primary-20":"#032B40","primary-30":"#043D5A","primary-40":"#05547B","primary-50":"#096EA1","primary-60":"#2098D3","primary-70":"#5CB9E8","primary-80":"#8BD3F6","primary-90":"#BEE6FA","primary-95":"#E2F2FA","primary-100":"#F4FAFC","secondary-10":"#131529","secondary-20":"#222547","secondary-30":"#2F3565","secondary-40":"#42498B","secondary-50":"#5B62A7","secondary-60":"#858CBD","secondary-70":"#A8ADCF","secondary-80":"#C6C9E0","secondary-90":"#DDDFEC","secondary-95":"#EDEEF5","secondary-100":"#F8F8FB","neutral-10":"#161616","neutral-20":"#282828","neutral-30":"#393939","neutral-40":"#4E4E4E","neutral-50":"#686868","neutral-60":"#8E8E8E","neutral-70":"#AFAFB0","neutral-80":"#C7CACA","neutral-90":"#DDE1E2","neutral-95":"#EDEFEF","neutral-100":"#F9F9F9","success-10":"#081A0F","success-20":"#0E2D1B","success-30":"#154126","success-40":"#1C5A34","success-50":"#257645","success-60":"#44A068","success-70":"#64C189","success-80":"#80DCA5","success-90":"#B4ECCB","success-95":"#D5F6E2","success-100":"#EFFCF4","warning-10":"#221302","warning-20":"#3B2204","warning-30":"#543106","warning-40":"#744408","warning-50":"#98590C","warning-60":"#D07A13","warning-70":"#E4A244","warning-80":"#F5C26C","warning-90":"#FADBA6","warning-95":"#FCECD4","warning-100":"#FDF7F0","error-10":"#330505","error-20":"#550808","error-30":"#750C0C","error-40":"#9E130F","error-50":"#CB2213","error-60":"#DE6C6C","error-70":"#E89B9B","error-80":"#EFBEBE","error-90":"#F5D9D9","error-95":"#F9ECEC","error-100":"#FCF7F7","info-10":"#021824","info-20":"#032B3F","info-30":"#053D59","info-40":"#065478","info-50":"#176E9B","info-60":"#5296BE","info-70":"#82B5DA","info-80":"#ACCFE7","info-90":"#CCE3F1","info-95":"#E3F1F8","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000","primary-inverse":"#FEAB10"},ccube:{"brand-10":"#1F1221","brand-20":"#371F3B","brand-30":"#4E2C53","brand-40":"#6B3E73","brand-50":"#8D5197","brand-60":"#FF3399","brand-70":"#FF88C4","brand-80":"#FFB3D9","brand-90":"#FFD4E9","brand-95":"#FFE8F3","brand-100":"#FFD6EB","primary-10":"#1F1221","primary-20":"#371F3B","primary-30":"#4E2C53","primary-40":"#6B3E73","primary-50":"#8D5197","primary-60":"#B07DB7","primary-70":"#C7A3CC","primary-80":"#D9C2DD","primary-90":"#E9DBEB","primary-95":"#F3ECF4","primary-100":"#FAF7FA","secondary-10":"#2D091B","secondary-20":"#4D0F2E","secondary-30":"#6B1540","secondary-40":"#931D58","secondary-50":"#C02673","secondary-60":"#FF409F","secondary-70":"#FF88C4","secondary-80":"#FFB3D9","secondary-90":"#FFD4E9","secondary-95":"#FFE8F3","secondary-100":"#FFF8FC","neutral-10":"#161616","neutral-20":"#282828","neutral-30":"#393939","neutral-40":"#4E4E4E","neutral-50":"#686868","neutral-60":"#8E8E8E","neutral-70":"#AFAFB0","neutral-80":"#C7CACA","neutral-90":"#DDE1E2","neutral-95":"#EDEFEF","neutral-100":"#F9F9F9","success-10":"#081A0F","success-20":"#0E2D1B","success-30":"#154126","success-40":"#1C5A34","success-50":"#257645","success-60":"#44A068","success-70":"#64C189","success-80":"#80DCA5","success-90":"#B4ECCB","success-95":"#D5F6E2","success-100":"#EFFCF4","warning-10":"#221302","warning-20":"#3B2204","warning-30":"#543106","warning-40":"#744408","warning-50":"#98590C","warning-60":"#D07A13","warning-70":"#E4A244","warning-80":"#F5C26C","warning-90":"#FADBA6","warning-95":"#FCECD4","warning-100":"#FDF7F0","error-10":"#330505","error-20":"#550808","error-30":"#750C0C","error-40":"#9E130F","error-50":"#CB2213","error-60":"#DE6C6C","error-70":"#E89B9B","error-80":"#EFBEBE","error-90":"#F5D9D9","error-95":"#F9ECEC","error-100":"#FCF7F7","info-10":"#021824","info-20":"#032B3F","info-30":"#053D59","info-40":"#065478","info-50":"#176E9B","info-60":"#5296BE","info-70":"#82B5DA","info-80":"#ACCFE7","info-90":"#CCE3F1","info-95":"#E3F1F8","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000","primary-inverse":"#FEAB10"},pa:{"brand-10":"#0E123A","brand-20":"#191E65","brand-30":"#232B90","brand-40":"#303BC5","brand-50":"#494CFF","brand-60":"#AD6EFF","brand-70":"#AEA4FF","brand-80":"#C5C4FF","brand-90":"#DDDCFF","brand-95":"#EDECFF","brand-100":"#F8F8FF","primary-10":"#89000B","primary-20":"#B0000E","primary-30":"#C4000F","primary-40":"#D0333F","primary-50":"#DC666F","primary-60":"#E28087","primary-70":"#E7999F","primary-80":"#EDB3B7","primary-90":"#F3CCCF","primary-95":"#F9E6E7","primary-100":"#FCF2F3","secondary-10":"#19151D","secondary-20":"#2B2533","secondary-30":"#3E3649","secondary-40":"#564A64","secondary-50":"#6F637D","secondary-60":"#948B9F","secondary-70":"#B3ACBB","secondary-80":"#CCC8D2","secondary-90":"#E1DEE4","secondary-95":"#EFEEF1","secondary-100":"#F9F8F9","neutral-10":"#000000","neutral-20":"#191919","neutral-30":"#333333","neutral-40":"#4d4d4d","neutral-50":"#666666","neutral-60":"#808080","neutral-70":"#999999","neutral-80":"#B3B3B3","neutral-90":"#E6E6E6","neutral-95":"#F7F7F7","neutral-100":"#FFFFFF","success-10":"#081A0F","success-20":"#0E2D1B","success-30":"#154126","success-40":"#1C5A34","success-50":"#257645","success-60":"#44A068","success-70":"#64C189","success-80":"#80DCA5","success-90":"#B4ECCB","success-95":"#D5F6E2","success-100":"#EFFCF4","warning-10":"#221302","warning-20":"#3B2204","warning-30":"#543106","warning-40":"#744408","warning-50":"#98590C","warning-60":"#D07A13","warning-70":"#E4A244","warning-80":"#F5C26C","warning-90":"#FADBA6","warning-95":"#FCECD4","warning-100":"#FDF7F0","error-10":"#330505","error-20":"#550808","error-30":"#750C0C","error-40":"#9E130F","error-50":"#CB2213","error-60":"#DE6C6C","error-70":"#E89B9B","error-80":"#EFBEBE","error-90":"#F5D9D9","error-95":"#F9ECEC","error-100":"#FCF7F7","info-10":"#021824","info-20":"#032B3F","info-30":"#053D59","info-40":"#065478","info-50":"#176E9B","info-60":"#5296BE","info-70":"#82B5DA","info-80":"#ACCFE7","info-90":"#CCE3F1","info-95":"#E3F1F8","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000","primary-inverse":"#FEAB10"}},defaultValue:"lifesg"},st=e=>r=>{var t;const n=r.theme,i=rt(at,null==n?void 0:n.colourScheme);return(null===(t=null==n?void 0:n.overrides)||void 0===t?void 0:t.primitiveColour)?et(i,e,n.overrides.primitiveColour):i[e]},ot={"brand-10":st("brand-10"),"brand-20":st("brand-20"),"brand-30":st("brand-30"),"brand-40":st("brand-40"),"brand-50":st("brand-50"),"brand-60":st("brand-60"),"brand-70":st("brand-70"),"brand-80":st("brand-80"),"brand-90":st("brand-90"),"brand-95":st("brand-95"),"brand-100":st("brand-100"),"primary-10":st("primary-10"),"primary-20":st("primary-20"),"primary-30":st("primary-30"),"primary-40":st("primary-40"),"primary-50":st("primary-50"),"primary-60":st("primary-60"),"primary-70":st("primary-70"),"primary-80":st("primary-80"),"primary-90":st("primary-90"),"primary-95":st("primary-95"),"primary-100":st("primary-100"),"secondary-10":st("secondary-10"),"secondary-20":st("secondary-20"),"secondary-30":st("secondary-30"),"secondary-40":st("secondary-40"),"secondary-50":st("secondary-50"),"secondary-60":st("secondary-60"),"secondary-70":st("secondary-70"),"secondary-80":st("secondary-80"),"secondary-90":st("secondary-90"),"secondary-95":st("secondary-95"),"secondary-100":st("secondary-100"),"neutral-10":st("neutral-10"),"neutral-20":st("neutral-20"),"neutral-30":st("neutral-30"),"neutral-40":st("neutral-40"),"neutral-50":st("neutral-50"),"neutral-60":st("neutral-60"),"neutral-70":st("neutral-70"),"neutral-80":st("neutral-80"),"neutral-90":st("neutral-90"),"neutral-95":st("neutral-95"),"neutral-100":st("neutral-100"),"success-10":st("success-10"),"success-20":st("success-20"),"success-30":st("success-30"),"success-40":st("success-40"),"success-50":st("success-50"),"success-60":st("success-60"),"success-70":st("success-70"),"success-80":st("success-80"),"success-90":st("success-90"),"success-95":st("success-95"),"success-100":st("success-100"),"warning-10":st("warning-10"),"warning-20":st("warning-20"),"warning-30":st("warning-30"),"warning-40":st("warning-40"),"warning-50":st("warning-50"),"warning-60":st("warning-60"),"warning-70":st("warning-70"),"warning-80":st("warning-80"),"warning-90":st("warning-90"),"warning-95":st("warning-95"),"warning-100":st("warning-100"),"error-10":st("error-10"),"error-20":st("error-20"),"error-30":st("error-30"),"error-40":st("error-40"),"error-50":st("error-50"),"error-60":st("error-60"),"error-70":st("error-70"),"error-80":st("error-80"),"error-90":st("error-90"),"error-95":st("error-95"),"error-100":st("error-100"),"info-10":st("info-10"),"info-20":st("info-20"),"info-30":st("info-30"),"info-40":st("info-40"),"info-50":st("info-50"),"info-60":st("info-60"),"info-70":st("info-70"),"info-80":st("info-80"),"info-90":st("info-90"),"info-95":st("info-95"),"info-100":st("info-100"),white:st("white"),black:st("black"),"primary-inverse":st("primary-inverse")},lt={text:st("neutral-20"),"text-subtle":st("neutral-30"),"text-subtler":st("neutral-50"),"text-subtlest":st("neutral-60"),"text-primary":st("primary-50"),"text-hover":st("primary-40"),"text-selected":st("primary-50"),"text-selected-hover":st("primary-40"),"text-disabled":st("neutral-50"),"text-disabled-subtle":st("neutral-60"),"text-disabled-subtlest":st("neutral-80"),"text-selected-disabled":st("neutral-20"),"text-success":st("success-40"),"text-warning":st("warning-40"),"text-error":st("error-40"),"text-info":st("info-40"),"text-inverse":st("white"),icon:st("neutral-50"),"icon-subtle":st("neutral-60"),"icon-strongest":st("neutral-20"),"icon-primary":st("primary-50"),"icon-primary-subtle":st("primary-60"),"icon-primary-subtlest":st("primary-70"),"icon-hover":st("primary-40"),"icon-selected":st("primary-50"),"icon-selected-hover":st("primary-40"),"icon-disabled":st("neutral-50"),"icon-disabled-subtle":st("neutral-60"),"icon-selected-disabled":st("neutral-60"),"icon-success":st("success-50"),"icon-warning":st("warning-60"),"icon-error":st("error-50"),"icon-error-strong":st("error-40"),"icon-info":st("info-50"),"icon-inverse":st("white"),"icon-primary-inverse":st("primary-inverse"),border:st("neutral-90"),"border-strong":st("neutral-70"),"border-stronger":st("neutral-50"),"border-primary":st("primary-50"),"border-primary-subtle":st("primary-60"),"border-hover":st("primary-90"),"border-hover-strong":st("primary-60"),"border-selected":st("primary-50"),"border-selected-subtle":st("primary-70"),"border-selected-subtlest":st("primary-90"),"border-selected-hover":st("primary-40"),"border-focus":st("primary-60"),"border-focus-strong":st("primary-50"),"border-disabled":st("neutral-90"),"border-selected-disabled":st("neutral-70"),"border-success":st("success-60"),"border-warning":st("warning-60"),"border-error":st("error-60"),"border-error-focus":st("error-60"),"border-error-focus-strong":st("error-40"),"border-error-strong":st("error-40"),"border-info":st("info-60"),bg:st("white"),"bg-strong":st("neutral-100"),"bg-stronger":st("neutral-95"),"bg-strongest":st("neutral-90"),"bg-hover":st("primary-95"),"bg-hover-strong":st("primary-90"),"bg-hover-subtle":st("primary-100"),"bg-hover-neutral":st("neutral-100"),"bg-hover-neutral-strong":st("neutral-90"),"bg-selected":st("primary-95"),"bg-selected-hover":st("primary-90"),"bg-selected-strong":st("primary-90"),"bg-selected-stronger":st("primary-70"),"bg-selected-strongest":st("primary-50"),"bg-selected-strongest-hover":st("primary-40"),"bg-disabled":st("neutral-95"),"bg-selected-disabled":st("neutral-95"),"bg-selected-stronger-disabled":st("neutral-70"),"bg-success":st("success-100"),"bg-success-hover":st("success-95"),"bg-success-strong":st("success-50"),"bg-success-strong-hover":st("success-40"),"bg-warning":st("warning-100"),"bg-warning-hover":st("warning-95"),"bg-warning-strong":st("warning-50"),"bg-warning-strong-hover":st("warning-40"),"bg-info":st("info-100"),"bg-info-hover":st("info-95"),"bg-info-strong":st("info-50"),"bg-info-strong-hover":st("info-40"),"bg-error":st("error-100"),"bg-error-hover":st("error-95"),"bg-error-strong":st("error-50"),"bg-error-strong-hover":st("error-40"),"bg-inverse":st("neutral-20"),"bg-inverse-subtle":st("neutral-30"),"bg-inverse-subtler":st("neutral-50"),"bg-inverse-subtlest":st("neutral-60"),"bg-inverse-hover":st("neutral-40"),"bg-primary":st("primary-50"),"bg-primary-subtle":st("primary-60"),"bg-primary-subtler":st("primary-95"),"bg-primary-subtlest":st("primary-100"),"bg-available":"#6DD0A1","bg-primary-hover":st("primary-40"),"bg-primary-subtlest-hover":st("primary-90"),"bg-primary-subtlest-selected":st("primary-90"),"overlay-strong":"rgba(40, 40, 40, 0.85)","overlay-subtle":"rgba(40, 40, 40, 0.20)",hyperlink:st("primary-50"),"hyperlink-hover":st("primary-40"),"hyperlink-visited":st("primary-40"),"hyperlink-inverse":st("primary-inverse"),"focus-ring":st("black"),"focus-ring-inverse":st("white")},dt={collections:{lifesg:lt,bookingsg:lt,rbs:lt,mylegacy:lt,ccube:lt,pa:lt},defaultValue:"lifesg"},ct=e=>r=>{var t;const n=r.theme,i=rt(dt,null==n?void 0:n.colourScheme),a=(null===(t=null==n?void 0:n.overrides)||void 0===t?void 0:t.semanticColour)?et(i,e,n.overrides.semanticColour):i[e];return"function"==typeof a?a(r):a},ut={text:ct("text"),"text-subtle":ct("text-subtle"),"text-subtler":ct("text-subtler"),"text-subtlest":ct("text-subtlest"),"text-primary":ct("text-primary"),"text-hover":ct("text-hover"),"text-selected":ct("text-selected"),"text-selected-hover":ct("text-selected-hover"),"text-disabled":ct("text-disabled"),"text-disabled-subtle":ct("text-disabled-subtle"),"text-disabled-subtlest":ct("text-disabled-subtlest"),"text-selected-disabled":ct("text-selected-disabled"),"text-success":ct("text-success"),"text-warning":ct("text-warning"),"text-error":ct("text-error"),"text-info":ct("text-info"),"text-inverse":ct("text-inverse"),icon:ct("icon"),"icon-subtle":ct("icon-subtle"),"icon-strongest":ct("icon-strongest"),"icon-primary":ct("icon-primary"),"icon-primary-subtle":ct("icon-primary-subtle"),"icon-primary-subtlest":ct("icon-primary-subtlest"),"icon-hover":ct("icon-hover"),"icon-selected":ct("icon-selected"),"icon-selected-hover":ct("icon-selected-hover"),"icon-disabled":ct("icon-disabled"),"icon-disabled-subtle":ct("icon-disabled-subtle"),"icon-selected-disabled":ct("icon-selected-disabled"),"icon-success":ct("icon-success"),"icon-warning":ct("icon-warning"),"icon-error":ct("icon-error"),"icon-error-strong":ct("icon-error-strong"),"icon-info":ct("icon-info"),"icon-inverse":ct("icon-inverse"),"icon-primary-inverse":ct("icon-primary-inverse"),border:ct("border"),"border-strong":ct("border-strong"),"border-stronger":ct("border-stronger"),"border-primary":ct("border-primary"),"border-primary-subtle":ct("border-primary-subtle"),"border-hover":ct("border-hover"),"border-hover-strong":ct("border-hover-strong"),"border-selected":ct("border-selected"),"border-selected-subtle":ct("border-selected-subtle"),"border-selected-subtlest":ct("border-selected-subtlest"),"border-selected-hover":ct("border-selected-hover"),"border-focus":ct("border-focus"),"border-focus-strong":ct("border-focus-strong"),"border-disabled":ct("border-disabled"),"border-selected-disabled":ct("border-selected-disabled"),"border-success":ct("border-success"),"border-warning":ct("border-warning"),"border-error":ct("border-error"),"border-error-focus":ct("border-error-focus"),"border-error-focus-strong":ct("border-error-focus-strong"),"border-error-strong":ct("border-error-strong"),"border-info":ct("border-info"),bg:ct("bg"),"bg-strong":ct("bg-strong"),"bg-stronger":ct("bg-stronger"),"bg-strongest":ct("bg-strongest"),"bg-hover":ct("bg-hover"),"bg-hover-strong":ct("bg-hover-strong"),"bg-hover-subtle":ct("bg-hover-subtle"),"bg-hover-neutral":ct("bg-hover-neutral"),"bg-hover-neutral-strong":ct("bg-hover-neutral-strong"),"bg-selected":ct("bg-selected"),"bg-selected-hover":ct("bg-selected-hover"),"bg-selected-strong":ct("bg-selected-strong"),"bg-selected-stronger":ct("bg-selected-stronger"),"bg-selected-strongest":ct("bg-selected-strongest"),"bg-selected-strongest-hover":ct("bg-selected-strongest-hover"),"bg-disabled":ct("bg-disabled"),"bg-selected-disabled":ct("bg-selected-disabled"),"bg-selected-stronger-disabled":ct("bg-selected-stronger-disabled"),"bg-success":ct("bg-success"),"bg-success-hover":ct("bg-success-hover"),"bg-success-strong":ct("bg-success-strong"),"bg-success-strong-hover":ct("bg-success-strong-hover"),"bg-warning":ct("bg-warning"),"bg-warning-hover":ct("bg-warning-hover"),"bg-warning-strong":ct("bg-warning-strong"),"bg-warning-strong-hover":ct("bg-warning-strong-hover"),"bg-info":ct("bg-info"),"bg-info-hover":ct("bg-info-hover"),"bg-info-strong":ct("bg-info-strong"),"bg-info-strong-hover":ct("bg-info-strong-hover"),"bg-error":ct("bg-error"),"bg-error-hover":ct("bg-error-hover"),"bg-error-strong":ct("bg-error-strong"),"bg-error-strong-hover":ct("bg-error-strong-hover"),"bg-inverse":ct("bg-inverse"),"bg-inverse-subtle":ct("bg-inverse-subtle"),"bg-inverse-subtler":ct("bg-inverse-subtler"),"bg-inverse-subtlest":ct("bg-inverse-subtlest"),"bg-inverse-hover":ct("bg-inverse-hover"),"bg-primary":ct("bg-primary"),"bg-primary-subtle":ct("bg-primary-subtle"),"bg-primary-subtler":ct("bg-primary-subtler"),"bg-primary-subtlest":ct("bg-primary-subtlest"),"bg-available":ct("bg-available"),"bg-primary-hover":ct("bg-primary-hover"),"bg-primary-subtlest-hover":ct("bg-primary-subtlest-hover"),"bg-primary-subtlest-selected":ct("bg-primary-subtlest-selected"),"overlay-strong":ct("overlay-strong"),"overlay-subtle":ct("overlay-subtle"),hyperlink:ct("hyperlink"),"hyperlink-hover":ct("hyperlink-hover"),"hyperlink-visited":ct("hyperlink-visited"),"hyperlink-inverse":ct("hyperlink-inverse"),"focus-ring":ct("focus-ring"),"focus-ring-inverse":ct("focus-ring-inverse")},ht={collections:{lifesg:{"width-005":.5,"width-010":1,"width-020":2,"width-040":4,solid:"solid","dashed-default":e=>r=>{var n,i,a;const{thickness:s,radius:o,colour:l}=e||{},d=null!==(n="function"==typeof s?s(r):s)&&void 0!==n?n:bt["width-010"](r),c=null!==(i="function"==typeof o?o(r):o)&&void 0!==i?i:0,u=null!==(a="function"==typeof l?l(r):l)&&void 0!==a?a:ut.border(r),h=encodeURIComponent(`<svg width='100%' height='100%' xmlns='http://www.w3.org/2000/svg'><rect width='100%' height='100%' fill='none' rx='${c}' ry='${c}' stroke='${u}' stroke-width='${d}' stroke-dasharray='4, 8' stroke-dashoffset='0' stroke-linecap='square'/></svg>`);return t`
            background-image: url("data:image/svg+xml,${h}");
            border-radius: ${c};
        `}}},defaultValue:"lifesg"},gt=e=>r=>{var t;const n=r.theme,i=rt(ht,null==n?void 0:n.borderScheme);return(null===(t=null==n?void 0:n.overrides)||void 0===t?void 0:t.border)?`${et(i,e,n.overrides.border)}px`:`${i[e]}px`},mt=e=>1===e.length&&"theme"in e[0],bt={"width-005":gt("width-005"),"width-010":gt("width-010"),"width-020":gt("width-020"),"width-040":gt("width-040"),solid:(ft="solid",e=>{var r;const t=e.theme,n=rt(ht,null==t?void 0:t.borderScheme),i=(null===(r=null==t?void 0:t.overrides)||void 0===r?void 0:r.border)?et(n,ft,t.overrides.border):n[ft];return"function"==typeof i?i(e):i}),"dashed-default":(e=>(...r)=>t=>{var n;const i=mt(r)?[]:r,a=mt(r)?r[0]:t,s=a.theme,o=rt(ht,null==s?void 0:s.borderScheme);return((null===(n=null==s?void 0:s.overrides)||void 0===n?void 0:n.border)?et(o,e,s.overrides.border):o[e])(...i)(a)})("dashed-default")};var ft;const pt={collections:{lifesg:{"xxs-min":0,"xxs-max":320,"xs-min":321,"xs-max":375,"sm-min":376,"sm-max":420,"md-min":421,"md-max":767,"lg-min":768,"lg-max":1023,"xl-min":1024,"xl-max":1440,"xxl-min":1441,"xxs-column":8,"xs-column":8,"sm-column":8,"md-column":8,"lg-column":12,"xl-column":12,"xxl-column":12,"xxs-gutter":16,"xs-gutter":16,"sm-gutter":16,"md-gutter":16,"lg-gutter":32,"xl-gutter":32,"xxl-gutter":32,"xxs-margin":24,"xs-margin":24,"sm-margin":24,"md-margin":24,"lg-margin":48,"xl-margin":48,"xxl-margin":48}},defaultValue:"lifesg"},yt=e=>r=>{var t;const n=r.theme,i=rt(pt,null==n?void 0:n.breakpointScheme);let a;return a=(null===(t=null==n?void 0:n.overrides)||void 0===t?void 0:t.breakpoint)?et(i,e,n.overrides.breakpoint):i[e],a},xt={"xxs-min":yt("xxs-min"),"xxs-max":yt("xxs-max"),"xs-min":yt("xs-min"),"xs-max":yt("xs-max"),"sm-min":yt("sm-min"),"sm-max":yt("sm-max"),"md-min":yt("md-min"),"md-max":yt("md-max"),"lg-min":yt("lg-min"),"lg-max":yt("lg-max"),"xl-min":yt("xl-min"),"xl-max":yt("xl-max"),"xxl-min":yt("xxl-min"),"xxs-column":yt("xxs-column"),"xs-column":yt("xs-column"),"sm-column":yt("sm-column"),"md-column":yt("md-column"),"lg-column":yt("lg-column"),"xl-column":yt("xl-column"),"xxl-column":yt("xxl-column"),"xxs-gutter":yt("xxs-gutter"),"xs-gutter":yt("xs-gutter"),"sm-gutter":yt("sm-gutter"),"md-gutter":yt("md-gutter"),"lg-gutter":yt("lg-gutter"),"xl-gutter":yt("xl-gutter"),"xxl-gutter":yt("xxl-gutter"),"xxs-margin":yt("xxs-margin"),"xs-margin":yt("xs-margin"),"sm-margin":yt("sm-margin"),"md-margin":yt("md-margin"),"lg-margin":yt("lg-margin"),"xl-margin":yt("xl-margin"),"xxl-margin":yt("xxl-margin")},vt=e=>("max-width"===e?["xxs","xs","sm","md","lg","xl"]:["xxs","xs","sm","md","lg","xl","xxl"]).reduce(((r,t)=>(r[t]=((e,r)=>{const t=xt["max-width"===e?`${r}-max`:`${r}-min`];return r=>{const n=t(r);return`@media screen and (${e}: ${n}px)`}})(e,t),r)),{}),wt={MaxWidth:vt("max-width"),MinWidth:vt("min-width")},Ft={"header-size-xxl":"3rem","header-size-xl":"2.5rem","header-size-lg":"2rem","header-size-md":"1.625rem","header-size-sm":"1.375rem","header-size-xs":"1.125rem","header-lh-xxl":"3.5rem","header-lh-xl":"3rem","header-lh-lg":"2.5rem","header-lh-md":"2.25rem","header-lh-sm":"1.75rem","header-lh-xs":"1.625rem","header-ls-xxl":"-0.056rem","header-ls-xl":"-0.032rem","header-ls-lg":"-0.032rem","header-ls-md":"0rem","header-ls-sm":"0rem","header-ls-xs":"0rem","weight-light":"300","weight-regular":"400","weight-semibold":"600","weight-bold":"700","font-family":"Open Sans","body-size-baseline":"1.125rem","body-size-md":"1rem","body-size-sm":"0.875rem","body-size-xs":"0.75rem","body-lh-baseline":"1.625rem","body-lh-md":"1.5rem","body-lh-sm":"1.625rem","body-lh-xs":"1.25rem","body-ls-baseline":"0rem","body-ls-md":"0.014rem","body-ls-sm":"0.012rem","body-ls-xs":"0.012rem","formlabel-size-baseline":"1rem","formlabel-size-lg":"1.125rem","formlabel-lh-baseline":"1.5rem","formlabel-lh-lg":"1.625rem","formlabel-ls-baseline":"0.014rem","formlabel-ls-lg":"0rem"},$t={collections:{lifesg:Ft,bookingsg:{"header-size-xxl":"3rem","header-size-xl":"2.5rem","header-size-lg":"2rem","header-size-md":"1.625rem","header-size-sm":"1.375rem","header-size-xs":"1.125rem","header-lh-xxl":"3.5rem","header-lh-xl":"3rem","header-lh-lg":"2.5rem","header-lh-md":"2.25rem","header-lh-sm":"1.75rem","header-lh-xs":"1.75rem","header-ls-xxl":"-0.056rem","header-ls-xl":"-0.032rem","header-ls-lg":"-0.032rem","header-ls-md":"0rem","header-ls-sm":"0rem","header-ls-xs":"0rem","weight-light":"300","weight-regular":"400","weight-semibold":"600","weight-bold":"700","font-family":"Plus Jakarta Sans","body-size-baseline":"1.125rem","body-size-md":"1rem","body-size-sm":"0.875rem","body-size-xs":"0.75rem","body-lh-baseline":"1.75rem","body-lh-md":"1.5rem","body-lh-sm":"1.6rem","body-lh-xs":"1.2rem","body-ls-baseline":"0rem","body-ls-md":"0.014rem","body-ls-sm":"0.012rem","body-ls-xs":"0.012rem","formlabel-size-baseline":"1rem","formlabel-size-lg":"1.125rem","formlabel-lh-baseline":"1.5rem","formlabel-lh-lg":"1.75rem","formlabel-ls-baseline":"0.014rem","formlabel-ls-lg":"0rem"},rbs:Ft,mylegacy:Ft,ccube:Ft,pa:{"header-size-xxl":"3rem","header-size-xl":"2.5rem","header-size-lg":"2rem","header-size-md":"1.625rem","header-size-sm":"1.375rem","header-size-xs":"1.125rem","header-lh-xxl":"3.5rem","header-lh-xl":"3rem","header-lh-lg":"2.5rem","header-lh-md":"2.25rem","header-lh-sm":"1.75rem","header-lh-xs":"1.625rem","header-ls-xxl":"-0.056rem","header-ls-xl":"-0.032rem","header-ls-lg":"-0.032rem","header-ls-md":"0rem","header-ls-sm":"0rem","header-ls-xs":"0rem","weight-light":"300","weight-regular":"400","weight-semibold":"600","weight-bold":"700","font-family":"Lato","body-size-baseline":"1.125rem","body-size-md":"1rem","body-size-sm":"0.875rem","body-size-xs":"0.75rem","body-lh-baseline":"1.625rem","body-lh-md":"1.5rem","body-lh-sm":"1.625rem","body-lh-xs":"1.25rem","body-ls-baseline":"0rem","body-ls-md":"0.014rem","body-ls-sm":"0.012rem","body-ls-xs":"0.012rem","formlabel-size-baseline":"1rem","formlabel-size-lg":"1.125rem","formlabel-lh-baseline":"1.5rem","formlabel-lh-lg":"1.625rem","formlabel-ls-baseline":"0.014rem","formlabel-ls-lg":"0rem"}},defaultValue:"lifesg"},Ct=e=>r=>{var t;const n=r.theme,i=rt($t,null==n?void 0:n.fontScheme);return(null===(t=null==n?void 0:n.overrides)||void 0===t?void 0:t.fontSpec)?et(i,e,n.overrides.fontSpec):i[e]},Et={"header-size-xxl":Ct("header-size-xxl"),"header-size-xl":Ct("header-size-xl"),"header-size-lg":Ct("header-size-lg"),"header-size-md":Ct("header-size-md"),"header-size-sm":Ct("header-size-sm"),"header-size-xs":Ct("header-size-xs"),"header-lh-xxl":Ct("header-lh-xxl"),"header-lh-xl":Ct("header-lh-xl"),"header-lh-lg":Ct("header-lh-lg"),"header-lh-md":Ct("header-lh-md"),"header-lh-sm":Ct("header-lh-sm"),"header-lh-xs":Ct("header-lh-xs"),"header-ls-xxl":Ct("header-ls-xxl"),"header-ls-xl":Ct("header-ls-xl"),"header-ls-lg":Ct("header-ls-lg"),"header-ls-md":Ct("header-ls-md"),"header-ls-sm":Ct("header-ls-sm"),"header-ls-xs":Ct("header-ls-xs"),"weight-light":Ct("weight-light"),"weight-regular":Ct("weight-regular"),"weight-semibold":Ct("weight-semibold"),"weight-bold":Ct("weight-bold"),"font-family":Ct("font-family"),"body-size-baseline":Ct("body-size-baseline"),"body-size-md":Ct("body-size-md"),"body-size-sm":Ct("body-size-sm"),"body-size-xs":Ct("body-size-xs"),"body-lh-baseline":Ct("body-lh-baseline"),"body-lh-md":Ct("body-lh-md"),"body-lh-sm":Ct("body-lh-sm"),"body-lh-xs":Ct("body-lh-xs"),"body-ls-baseline":Ct("body-ls-baseline"),"body-ls-md":Ct("body-ls-md"),"body-ls-sm":Ct("body-ls-sm"),"body-ls-xs":Ct("body-ls-xs"),"formlabel-size-baseline":Ct("formlabel-size-baseline"),"formlabel-size-lg":Ct("formlabel-size-lg"),"formlabel-lh-baseline":Ct("formlabel-lh-baseline"),"formlabel-lh-lg":Ct("formlabel-lh-lg"),"formlabel-ls-baseline":Ct("formlabel-ls-baseline"),"formlabel-ls-lg":Ct("formlabel-ls-lg")},Dt={collections:{lifesg:{none:0,xs:2,sm:4,md:8,lg:12,full:9999}},defaultValue:"lifesg"},Bt=e=>r=>{var t;const n=r.theme,i=rt(Dt,null==n?void 0:n.radiusScheme);return(null===(t=null==n?void 0:n.overrides)||void 0===t?void 0:t.radius)?`${et(i,e,n.overrides.radius)}px`:`${i[e]}px`},At={none:Bt("none"),xs:Bt("xs"),sm:Bt("sm"),md:Bt("md"),lg:Bt("lg"),full:Bt("full")},kt={collections:{lifesg:{"spacing-0":0,"spacing-4":4,"spacing-8":8,"spacing-12":12,"spacing-16":16,"spacing-20":20,"spacing-24":24,"spacing-32":32,"spacing-40":40,"spacing-48":48,"spacing-64":64,"spacing-72":72,"layout-xs":8,"layout-sm":16,"layout-md":24,"layout-lg":32,"layout-xl":48,"layout-xxl":64,"layout-xxxl":128}},defaultValue:"lifesg"},Mt=e=>r=>{var t;const n=r.theme,i=rt(kt,null==n?void 0:n.spacingScheme);return(null===(t=null==n?void 0:n.overrides)||void 0===t?void 0:t.spacing)?`${et(i,e,n.overrides.spacing)}px`:`${i[e]}px`},St={"spacing-0":Mt("spacing-0"),"spacing-4":Mt("spacing-4"),"spacing-8":Mt("spacing-8"),"spacing-12":Mt("spacing-12"),"spacing-16":Mt("spacing-16"),"spacing-20":Mt("spacing-20"),"spacing-24":Mt("spacing-24"),"spacing-32":Mt("spacing-32"),"spacing-40":Mt("spacing-40"),"spacing-48":Mt("spacing-48"),"spacing-64":Mt("spacing-64"),"spacing-72":Mt("spacing-72"),"layout-xs":Mt("layout-xs"),"layout-sm":Mt("layout-sm"),"layout-md":Mt("layout-md"),"layout-lg":Mt("layout-lg"),"layout-xl":Mt("layout-xl"),"layout-xxl":Mt("layout-xxl"),"layout-xxxl":Mt("layout-xxxl")},zt=(e,r,n,i)=>t`
    font-family: ${Ct("font-family")};
    font-size: ${Ct(e)};
    font-weight: ${Ct(r)};
    line-height: ${Ct(n)};
    letter-spacing: ${Ct(i)};
`,Ot={"header-xxl-light":zt("header-size-xxl","weight-light","header-lh-xxl","header-ls-xxl"),"header-xxl-regular":zt("header-size-xxl","weight-regular","header-lh-xxl","header-ls-xxl"),"header-xxl-semibold":zt("header-size-xxl","weight-semibold","header-lh-xxl","header-ls-xxl"),"header-xxl-bold":zt("header-size-xxl","weight-bold","header-lh-xxl","header-ls-xxl"),"header-xl-light":zt("header-size-xl","weight-light","header-lh-xl","header-ls-xl"),"header-xl-regular":zt("header-size-xl","weight-regular","header-lh-xl","header-ls-xl"),"header-xl-semibold":zt("header-size-xl","weight-semibold","header-lh-xl","header-ls-xl"),"header-xl-bold":zt("header-size-xl","weight-bold","header-lh-xl","header-ls-xl"),"header-lg-light":zt("header-size-lg","weight-light","header-lh-lg","header-ls-lg"),"header-lg-regular":zt("header-size-lg","weight-regular","header-lh-lg","header-ls-lg"),"header-lg-semibold":zt("header-size-lg","weight-semibold","header-lh-lg","header-ls-lg"),"header-lg-bold":zt("header-size-lg","weight-bold","header-lh-lg","header-ls-lg"),"header-md-light":zt("header-size-md","weight-light","header-lh-md","header-ls-md"),"header-md-regular":zt("header-size-md","weight-regular","header-lh-md","header-ls-md"),"header-md-semibold":zt("header-size-md","weight-semibold","header-lh-md","header-ls-md"),"header-md-bold":zt("header-size-md","weight-bold","header-lh-md","header-ls-md"),"header-sm-light":zt("header-size-sm","weight-light","header-lh-sm","header-ls-sm"),"header-sm-regular":zt("header-size-sm","weight-regular","header-lh-sm","header-ls-sm"),"header-sm-semibold":zt("header-size-sm","weight-semibold","header-lh-sm","header-ls-sm"),"header-sm-bold":zt("header-size-sm","weight-bold","header-lh-sm","header-ls-sm"),"header-xs-light":zt("header-size-xs","weight-light","header-lh-xs","header-ls-xs"),"header-xs-regular":zt("header-size-xs","weight-regular","header-lh-xs","header-ls-xs"),"header-xs-semibold":zt("header-size-xs","weight-semibold","header-lh-xs","header-ls-xs"),"header-xs-bold":zt("header-size-xs","weight-bold","header-lh-xs","header-ls-xs"),"body-baseline-light":zt("body-size-baseline","weight-light","body-lh-baseline","body-ls-baseline"),"body-baseline-regular":zt("body-size-baseline","weight-regular","body-lh-baseline","body-ls-baseline"),"body-baseline-semibold":zt("body-size-baseline","weight-semibold","body-lh-baseline","body-ls-baseline"),"body-baseline-bold":zt("body-size-baseline","weight-bold","body-lh-baseline","body-ls-baseline"),"body-md-light":zt("body-size-md","weight-light","body-lh-md","body-ls-md"),"body-md-regular":zt("body-size-md","weight-regular","body-lh-md","body-ls-md"),"body-md-semibold":zt("body-size-md","weight-semibold","body-lh-md","body-ls-md"),"body-md-bold":zt("body-size-md","weight-bold","body-lh-md","body-ls-md"),"body-sm-light":zt("body-size-sm","weight-light","body-lh-sm","body-ls-sm"),"body-sm-regular":zt("body-size-sm","weight-regular","body-lh-sm","body-ls-sm"),"body-sm-semibold":zt("body-size-sm","weight-semibold","body-lh-sm","body-ls-sm"),"body-sm-bold":zt("body-size-sm","weight-bold","body-lh-sm","body-ls-sm"),"body-xs-light":zt("body-size-xs","weight-light","body-lh-xs","body-ls-xs"),"body-xs-regular":zt("body-size-xs","weight-regular","body-lh-xs","body-ls-xs"),"body-xs-semibold":zt("body-size-xs","weight-semibold","body-lh-xs","body-ls-xs"),"body-xs-bold":zt("body-size-xs","weight-bold","body-lh-xs","body-ls-xs"),"formlabel-baseline-semibold":zt("formlabel-size-baseline","weight-semibold","formlabel-lh-baseline","formlabel-ls-baseline"),"formlabel-lg-semibold":zt("formlabel-size-lg","weight-semibold","formlabel-lh-lg","formlabel-ls-lg")},_t={collections:{lifesg:Ot,bookingsg:Ot,rbs:Ot,mylegacy:Ot,ccube:Ot,pa:Ot},defaultValue:"lifesg"},jt=e=>r=>{var t;const n=r.theme,i=rt(_t,null==n?void 0:n.fontScheme),a=(null===(t=null==n?void 0:n.overrides)||void 0===t?void 0:t.font)?et(i,e,n.overrides.font):i[e];return"function"==typeof a?a(r):a},Wt={"header-xxl-light":jt("header-xxl-light"),"header-xxl-regular":jt("header-xxl-regular"),"header-xxl-semibold":jt("header-xxl-semibold"),"header-xxl-bold":jt("header-xxl-bold"),"header-xl-light":jt("header-xl-light"),"header-xl-regular":jt("header-xl-regular"),"header-xl-semibold":jt("header-xl-semibold"),"header-xl-bold":jt("header-xl-bold"),"header-lg-light":jt("header-lg-light"),"header-lg-regular":jt("header-lg-regular"),"header-lg-semibold":jt("header-lg-semibold"),"header-lg-bold":jt("header-lg-bold"),"header-md-light":jt("header-md-light"),"header-md-regular":jt("header-md-regular"),"header-md-semibold":jt("header-md-semibold"),"header-md-bold":jt("header-md-bold"),"header-sm-light":jt("header-sm-light"),"header-sm-regular":jt("header-sm-regular"),"header-sm-semibold":jt("header-sm-semibold"),"header-sm-bold":jt("header-sm-bold"),"header-xs-light":jt("header-xs-light"),"header-xs-regular":jt("header-xs-regular"),"header-xs-semibold":jt("header-xs-semibold"),"header-xs-bold":jt("header-xs-bold"),"body-baseline-light":jt("body-baseline-light"),"body-baseline-regular":jt("body-baseline-regular"),"body-baseline-semibold":jt("body-baseline-semibold"),"body-baseline-bold":jt("body-baseline-bold"),"body-md-light":jt("body-md-light"),"body-md-regular":jt("body-md-regular"),"body-md-semibold":jt("body-md-semibold"),"body-md-bold":jt("body-md-bold"),"body-sm-light":jt("body-sm-light"),"body-sm-regular":jt("body-sm-regular"),"body-sm-semibold":jt("body-sm-semibold"),"body-sm-bold":jt("body-sm-bold"),"body-xs-light":jt("body-xs-light"),"body-xs-regular":jt("body-xs-regular"),"body-xs-semibold":jt("body-xs-semibold"),"body-xs-bold":jt("body-xs-bold"),"formlabel-baseline-semibold":jt("formlabel-baseline-semibold"),"formlabel-lg-semibold":jt("formlabel-lg-semibold")},Yt=Object.assign(Object.assign({},ut),{Primitive:ot}),Lt=Object.assign(Object.assign({},Wt),{Spec:Et}),Tt=it,It=bt,Nt=St,Ht=At,Rt=xt,Pt=wt,Ut=r.button`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: ${Nt["spacing-24"]};
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
                background-color: ${Yt["bg-hover-neutral"]};
            `}
    }
`,Vt=l.forwardRef(((e,r)=>{var{children:t,focusHighlight:n=!0,focusOutline:i="none",type:s="button"}=e,o=F(e,["children","focusHighlight","focusOutline","type"]);return a(Ut,Object.assign({ref:r,$outline:i,$highlight:n,type:s},o,{children:t}))})),Xt={notCompress:6,compress:4},Jt=r.div`
    position: ${e=>e.$fixed?"sticky":"relative"};
    background-color: white;
    z-index: 30;
    top: 0;
    left: 0;
    right: 0;
    width: 100%;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
`,Qt=r.nav`
    height: ${e=>e.$compress?Xt.compress:Xt.notCompress}rem;
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    position: relative;
    transition: ${Tt["duration-350"]} ${Tt["ease-standard"]};

    ${Pt.MaxWidth.lg} {
        height: ${3.5}rem;
    }
`,Zt=r.div`
    display: flex;
    height: 100%;
    margin-left: ${e=>e.$hideNavBranding?"0":"5rem"};
    flex: 1;
    justify-content: flex-end;

    ${Pt.MaxWidth.lg} {
        margin-left: 0rem;
    }
`,Gt=r(Vt)`
    display: none;

    ${Pt.MaxWidth.lg} {
        display: flex;
        padding: 0 1.5rem;
        margin-right: -1.5rem;
    }
`,Kt=r(e)`
    height: 1.5rem;
    width: 1.5rem;
    color: ${Yt.icon};
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
    background-color: ${Yt.border};
    height: 100%;
    width: 2px;
    margin: 0 ${e=>e.$compress?1:1.5}rem;

    ${Pt.MaxWidth.lg} {
        margin: 0 1rem;
    }

    ${Pt.MaxWidth.sm} {
        margin: 0 0.75rem;
    }
`,rn=r.div`
    position: relative;

    ${e=>{const{$xxlStart:r,$xxlSpan:n,$xlStart:i,$xlSpan:a,$lgStart:s,$lgSpan:o,$mdStart:l,$mdSpan:d,$smStart:c,$smSpan:u,$xsStart:h,$xsSpan:g,$xxsStart:m,$xxsSpan:b}=e;return t`
            grid-column: ${r||"auto"} / span ${n||1};

            ${wt.MaxWidth.xl} {
                grid-column: ${i||"auto"} / span ${a||1};
            }

            ${wt.MaxWidth.lg} {
                grid-column: ${s||"auto"} / span ${o||1};
            }

            ${wt.MaxWidth.md} {
                grid-column: ${l||"auto"} / span ${d||1};
            }

            ${wt.MaxWidth.sm} {
                grid-column: ${c||"auto"} / span ${u||1};
            }

            ${wt.MaxWidth.xs} {
                grid-column: ${h||"auto"} / span ${g||1};
            }

            ${wt.MaxWidth.xxs} {
                grid-column: ${m||"auto"} / span ${b||1};
            }
        `}}
`,tn=l.forwardRef(((e,r)=>{const t=n(),{xxlCols:i,xlCols:s,lgCols:o,mdCols:l,smCols:d,xsCols:c,xxsCols:u}=e,h=F(e,["xxlCols","xlCols","lgCols","mdCols","smCols","xsCols","xxsCols"]),g=(e,r,t)=>{if(!e)return{start:void 0,span:void 0};if("development"===process.env.NODE_ENV&&("number"==typeof e&&e>r?console.warn(`Warning: ${t}Cols exceeds maximum (${r}): ${e}`):Array.isArray(e)&&(e[0]>r+1||e[1]>r+1)&&console.warn(`Warning: ${t}Cols array exceeds maximum (${r}): [${e[0]}, ${e[1]}]`)),Array.isArray(e)){const[t,n]=e;if(-1===n)return{start:t,span:r-t+1};return{start:t,span:Math.min(n-t,r)}}return{start:void 0,span:Math.min(e,r)}};return a(rn,Object.assign({ref:r},(()=>{const e=xt["xxl-column"]({theme:t}),r=xt["xl-column"]({theme:t}),n=xt["lg-column"]({theme:t}),a=xt["md-column"]({theme:t}),h=xt["sm-column"]({theme:t}),m=xt["xs-column"]({theme:t}),b=xt["xxs-column"]({theme:t}),f=g(i||s||o||l||d||c||u,e,"xxl"),p=g(s||o||l||d||c||u,r,"xl"),y=g(o||l||d||c||u,n,"lg"),x=g(l||d||c||u,a,"md"),v=g(d||c||u,h,"sm"),w=g(c||u,m,"xs"),F=g(u,b,"xxs");return{$xxlStart:f.start,$xxlSpan:f.span,$xlStart:p.start,$xlSpan:p.span,$lgStart:y.start,$lgSpan:y.span,$mdStart:x.start,$mdSpan:x.span,$smStart:v.start,$smSpan:v.span,$xsStart:w.start,$xsSpan:w.span,$xxsStart:F.start,$xxsSpan:F.span}})(),h))})),nn=r.div`
    flex-grow: 1;
    margin: 0 auto;
    position: relative;
    width: auto;
    height: auto;

    ${e=>e.$stretch?t`
                padding: 0 ${Rt["xxl-margin"]}px;
            `:t`
                padding: 0 ${Rt["xxl-margin"]}px;
                max-width: 1440px;

                ${Pt.MaxWidth.xl} {
                    padding: 0 ${Rt["xl-margin"]}px;
                }

                ${Pt.MaxWidth.lg} {
                    padding: 0 ${Rt["lg-margin"]}px;
                }

                ${Pt.MaxWidth.md} {
                    padding: 0 ${Rt["md-margin"]}px;
                }

                ${Pt.MaxWidth.sm} {
                    padding: 0 ${Rt["sm-margin"]}px;
                }

                ${Pt.MaxWidth.xs} {
                    padding: 0 ${Rt["xs-margin"]}px;
                }

                ${Pt.MaxWidth.xxs} {
                    padding: 0 ${Rt["xxs-margin"]}px;
                }
            `}

    ${e=>{switch(e.$type){case"grid":return t`
                    column-gap: ${Rt["xxl-gutter"]}px;
                    display: grid;
                    grid-template-columns: repeat(
                        ${Rt["xxl-column"]},
                        minmax(0, 1fr)
                    );

                    ${Pt.MaxWidth.xl} {
                        column-gap: ${Rt["xl-gutter"]}px;
                        grid-template-columns: repeat(
                            ${Rt["xl-column"]},
                            minmax(0, 1fr)
                        );
                    }

                    ${Pt.MaxWidth.lg} {
                        column-gap: ${Rt["lg-gutter"]}px;
                        grid-template-columns: repeat(
                            ${Rt["lg-column"]},
                            minmax(0, 1fr)
                        );
                    }

                    ${Pt.MaxWidth.md} {
                        column-gap: ${Rt["md-gutter"]}px;
                        grid-template-columns: repeat(
                            ${Rt["md-column"]},
                            minmax(0, 1fr)
                        );
                    }

                    ${Pt.MaxWidth.sm} {
                        column-gap: ${Rt["sm-gutter"]}px;
                        grid-template-columns: repeat(
                            ${Rt["sm-column"]},
                            minmax(0, 1fr)
                        );
                    }

                    ${Pt.MaxWidth.xs} {
                        column-gap: ${Rt["xs-gutter"]}px;
                        grid-template-columns: repeat(
                            ${Rt["xs-column"]},
                            minmax(0, 1fr)
                        );
                    }

                    ${Pt.MaxWidth.xxs} {
                        column-gap: ${Rt["xss-gutter"]}px;
                        grid-template-columns: repeat(
                            ${Rt["xss-column"]},
                            minmax(0, 1fr)
                        );
                    }
                `;case"flex-column":return t`
                    display: flex;
                    flex-direction: column;
                `;default:return t`
                    display: flex;
                `}}}
`,an=l.forwardRef(((e,r)=>{const{children:t,"data-testid":n="container",type:i="flex",stretch:s=!1}=e,o=F(e,["children","data-testid","type","stretch"]);return a(nn,Object.assign({ref:r,"data-testid":n,$type:i,$stretch:s},o,{children:t}))})),sn=l.forwardRef(((e,r)=>{const{children:t,"data-testid":n="section",stretch:i=!1}=e,s=F(e,["children","data-testid","stretch"]);return a(on,Object.assign({ref:r,"data-testid":n,$stretch:i},s,{children:t}))})),on=r.section`
    display: block;
    position: relative;
`,ln=l.forwardRef(((e,r)=>{const{children:t,"data-testid":n="content",className:i,type:s="flex",stretch:o=!1}=e,l=F(e,["children","data-testid","className","type","stretch"]);return a(sn,Object.assign({ref:r,"data-testid":n,className:i,stretch:o},l,{children:a(an,Object.assign({"data-testid":`${n}-container`,type:s,"data-id":"container",stretch:o},{children:t}))}))})),dn={Section:sn,Container:an,Content:ln,ColDiv:tn},cn=r.div`
    background: hsl(0, 0%, 94%);
    padding: 0 0.5rem;

    ${Pt.MaxWidth.sm} {
        padding: 0;
    }
`,un=()=>{d((()=>{e()||r()}),[]);const e=()=>document.getElementById(hn),r=()=>{if(!document.getElementById(hn)){const e=document.createElement("script");e.id=hn,e.type="module",e.src=gn,document.head.appendChild(e)}};return a(cn,{dangerouslySetInnerHTML:{__html:"<sgds-masthead></sgds-masthead>"}})},hn="lifesg-ds-masthead-script",gn="https://cdn.jsdelivr.net/npm/@govtechsg/sgds-web-component/Masthead/index.js";var mn={exports:{}};mn.exports=function(){var e=1e3,r=6e4,t=36e5,n="millisecond",i="second",a="minute",s="hour",o="day",l="week",d="month",c="quarter",u="year",h="date",g="Invalid Date",m=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,b=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,f={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(e){var r=["th","st","nd","rd"],t=e%100;return"["+e+(r[(t-20)%10]||r[t]||r[0])+"]"}},p=function(e,r,t){var n=String(e);return!n||n.length>=r?e:""+Array(r+1-n.length).join(t)+e},y={s:p,z:function(e){var r=-e.utcOffset(),t=Math.abs(r),n=Math.floor(t/60),i=t%60;return(r<=0?"+":"-")+p(n,2,"0")+":"+p(i,2,"0")},m:function e(r,t){if(r.date()<t.date())return-e(t,r);var n=12*(t.year()-r.year())+(t.month()-r.month()),i=r.clone().add(n,d),a=t-i<0,s=r.clone().add(n+(a?-1:1),d);return+(-(n+(t-i)/(a?i-s:s-i))||0)},a:function(e){return e<0?Math.ceil(e)||0:Math.floor(e)},p:function(e){return{M:d,y:u,w:l,d:o,D:h,h:s,m:a,s:i,ms:n,Q:c}[e]||String(e||"").toLowerCase().replace(/s$/,"")},u:function(e){return void 0===e}},x="en",v={};v[x]=f;var w="$isDayjsObject",F=function(e){return e instanceof D||!(!e||!e[w])},$=function e(r,t,n){var i;if(!r)return x;if("string"==typeof r){var a=r.toLowerCase();v[a]&&(i=a),t&&(v[a]=t,i=a);var s=r.split("-");if(!i&&s.length>1)return e(s[0])}else{var o=r.name;v[o]=r,i=o}return!n&&i&&(x=i),i||!n&&x},C=function(e,r){if(F(e))return e.clone();var t="object"==typeof r?r:{};return t.date=e,t.args=arguments,new D(t)},E=y;E.l=$,E.i=F,E.w=function(e,r){return C(e,{locale:r.$L,utc:r.$u,x:r.$x,$offset:r.$offset})};var D=function(){function f(e){this.$L=$(e.locale,null,!0),this.parse(e),this.$x=this.$x||e.x||{},this[w]=!0}var p=f.prototype;return p.parse=function(e){this.$d=function(e){var r=e.date,t=e.utc;if(null===r)return new Date(NaN);if(E.u(r))return new Date;if(r instanceof Date)return new Date(r);if("string"==typeof r&&!/Z$/i.test(r)){var n=r.match(m);if(n){var i=n[2]-1||0,a=(n[7]||"0").substring(0,3);return t?new Date(Date.UTC(n[1],i,n[3]||1,n[4]||0,n[5]||0,n[6]||0,a)):new Date(n[1],i,n[3]||1,n[4]||0,n[5]||0,n[6]||0,a)}}return new Date(r)}(e),this.init()},p.init=function(){var e=this.$d;this.$y=e.getFullYear(),this.$M=e.getMonth(),this.$D=e.getDate(),this.$W=e.getDay(),this.$H=e.getHours(),this.$m=e.getMinutes(),this.$s=e.getSeconds(),this.$ms=e.getMilliseconds()},p.$utils=function(){return E},p.isValid=function(){return!(this.$d.toString()===g)},p.isSame=function(e,r){var t=C(e);return this.startOf(r)<=t&&t<=this.endOf(r)},p.isAfter=function(e,r){return C(e)<this.startOf(r)},p.isBefore=function(e,r){return this.endOf(r)<C(e)},p.$g=function(e,r,t){return E.u(e)?this[r]:this.set(t,e)},p.unix=function(){return Math.floor(this.valueOf()/1e3)},p.valueOf=function(){return this.$d.getTime()},p.startOf=function(e,r){var t=this,n=!!E.u(r)||r,c=E.p(e),g=function(e,r){var i=E.w(t.$u?Date.UTC(t.$y,r,e):new Date(t.$y,r,e),t);return n?i:i.endOf(o)},m=function(e,r){return E.w(t.toDate()[e].apply(t.toDate("s"),(n?[0,0,0,0]:[23,59,59,999]).slice(r)),t)},b=this.$W,f=this.$M,p=this.$D,y="set"+(this.$u?"UTC":"");switch(c){case u:return n?g(1,0):g(31,11);case d:return n?g(1,f):g(0,f+1);case l:var x=this.$locale().weekStart||0,v=(b<x?b+7:b)-x;return g(n?p-v:p+(6-v),f);case o:case h:return m(y+"Hours",0);case s:return m(y+"Minutes",1);case a:return m(y+"Seconds",2);case i:return m(y+"Milliseconds",3);default:return this.clone()}},p.endOf=function(e){return this.startOf(e,!1)},p.$set=function(e,r){var t,l=E.p(e),c="set"+(this.$u?"UTC":""),g=(t={},t[o]=c+"Date",t[h]=c+"Date",t[d]=c+"Month",t[u]=c+"FullYear",t[s]=c+"Hours",t[a]=c+"Minutes",t[i]=c+"Seconds",t[n]=c+"Milliseconds",t)[l],m=l===o?this.$D+(r-this.$W):r;if(l===d||l===u){var b=this.clone().set(h,1);b.$d[g](m),b.init(),this.$d=b.set(h,Math.min(this.$D,b.daysInMonth())).$d}else g&&this.$d[g](m);return this.init(),this},p.set=function(e,r){return this.clone().$set(e,r)},p.get=function(e){return this[E.p(e)]()},p.add=function(n,c){var h,g=this;n=Number(n);var m=E.p(c),b=function(e){var r=C(g);return E.w(r.date(r.date()+Math.round(e*n)),g)};if(m===d)return this.set(d,this.$M+n);if(m===u)return this.set(u,this.$y+n);if(m===o)return b(1);if(m===l)return b(7);var f=(h={},h[a]=r,h[s]=t,h[i]=e,h)[m]||1,p=this.$d.getTime()+n*f;return E.w(p,this)},p.subtract=function(e,r){return this.add(-1*e,r)},p.format=function(e){var r=this,t=this.$locale();if(!this.isValid())return t.invalidDate||g;var n=e||"YYYY-MM-DDTHH:mm:ssZ",i=E.z(this),a=this.$H,s=this.$m,o=this.$M,l=t.weekdays,d=t.months,c=t.meridiem,u=function(e,t,i,a){return e&&(e[t]||e(r,n))||i[t].slice(0,a)},h=function(e){return E.s(a%12||12,e,"0")},m=c||function(e,r,t){var n=e<12?"AM":"PM";return t?n.toLowerCase():n};return n.replace(b,(function(e,n){return n||function(e){switch(e){case"YY":return String(r.$y).slice(-2);case"YYYY":return E.s(r.$y,4,"0");case"M":return o+1;case"MM":return E.s(o+1,2,"0");case"MMM":return u(t.monthsShort,o,d,3);case"MMMM":return u(d,o);case"D":return r.$D;case"DD":return E.s(r.$D,2,"0");case"d":return String(r.$W);case"dd":return u(t.weekdaysMin,r.$W,l,2);case"ddd":return u(t.weekdaysShort,r.$W,l,3);case"dddd":return l[r.$W];case"H":return String(a);case"HH":return E.s(a,2,"0");case"h":return h(1);case"hh":return h(2);case"a":return m(a,s,!0);case"A":return m(a,s,!1);case"m":return String(s);case"mm":return E.s(s,2,"0");case"s":return String(r.$s);case"ss":return E.s(r.$s,2,"0");case"SSS":return E.s(r.$ms,3,"0");case"Z":return i}return null}(e)||i.replace(":","")}))},p.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},p.diff=function(n,h,g){var m,b=this,f=E.p(h),p=C(n),y=(p.utcOffset()-this.utcOffset())*r,x=this-p,v=function(){return E.m(b,p)};switch(f){case u:m=v()/12;break;case d:m=v();break;case c:m=v()/3;break;case l:m=(x-y)/6048e5;break;case o:m=(x-y)/864e5;break;case s:m=x/t;break;case a:m=x/r;break;case i:m=x/e;break;default:m=x}return g?m:E.a(m)},p.daysInMonth=function(){return this.endOf(d).$D},p.$locale=function(){return v[this.$L]},p.locale=function(e,r){if(!e)return this.$L;var t=this.clone(),n=$(e,r,!0);return n&&(t.$L=n),t},p.clone=function(){return E.w(this.$d,this)},p.toDate=function(){return new Date(this.valueOf())},p.toJSON=function(){return this.isValid()?this.toISOString():null},p.toISOString=function(){return this.$d.toISOString()},p.toString=function(){return this.$d.toUTCString()},f}(),B=D.prototype;return C.prototype=B,[["$ms",n],["$s",i],["$m",a],["$H",s],["$W",o],["$M",d],["$y",u],["$D",h]].forEach((function(e){B[e[1]]=function(r){return this.$g(r,e[0],e[1])}})),C.extend=function(e,r){return e.$i||(e(r,D,C),e.$i=!0),C},C.locale=$,C.isDayjs=F,C.unix=function(e){return C(1e3*e)},C.en=v[x],C.Ls=v,C.p={},C}();var bn=C(mn.exports),fn={exports:{}};fn.exports=function(){var e={LTS:"h:mm:ss A",LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D, YYYY",LLL:"MMMM D, YYYY h:mm A",LLLL:"dddd, MMMM D, YYYY h:mm A"},r=/(\[[^[]*\])|([-_:/.,()\s]+)|(A|a|YYYY|YY?|MM?M?M?|Do|DD?|hh?|HH?|mm?|ss?|S{1,3}|z|ZZ?)/g,t=/\d\d/,n=/\d\d?/,i=/\d*[^-_:/,()\s\d]+/,a={},s=function(e){return(e=+e)+(e>68?1900:2e3)},o=function(e){return function(r){this[e]=+r}},l=[/[+-]\d\d:?(\d\d)?|Z/,function(e){(this.zone||(this.zone={})).offset=function(e){if(!e)return 0;if("Z"===e)return 0;var r=e.match(/([+-]|\d\d)/g),t=60*r[1]+(+r[2]||0);return 0===t?0:"+"===r[0]?-t:t}(e)}],d=function(e){var r=a[e];return r&&(r.indexOf?r:r.s.concat(r.f))},c=function(e,r){var t,n=a.meridiem;if(n){for(var i=1;i<=24;i+=1)if(e.indexOf(n(i,0,r))>-1){t=i>12;break}}else t=e===(r?"pm":"PM");return t},u={A:[i,function(e){this.afternoon=c(e,!1)}],a:[i,function(e){this.afternoon=c(e,!0)}],S:[/\d/,function(e){this.milliseconds=100*+e}],SS:[t,function(e){this.milliseconds=10*+e}],SSS:[/\d{3}/,function(e){this.milliseconds=+e}],s:[n,o("seconds")],ss:[n,o("seconds")],m:[n,o("minutes")],mm:[n,o("minutes")],H:[n,o("hours")],h:[n,o("hours")],HH:[n,o("hours")],hh:[n,o("hours")],D:[n,o("day")],DD:[t,o("day")],Do:[i,function(e){var r=a.ordinal,t=e.match(/\d+/);if(this.day=t[0],r)for(var n=1;n<=31;n+=1)r(n).replace(/\[|\]/g,"")===e&&(this.day=n)}],M:[n,o("month")],MM:[t,o("month")],MMM:[i,function(e){var r=d("months"),t=(d("monthsShort")||r.map((function(e){return e.slice(0,3)}))).indexOf(e)+1;if(t<1)throw new Error;this.month=t%12||t}],MMMM:[i,function(e){var r=d("months").indexOf(e)+1;if(r<1)throw new Error;this.month=r%12||r}],Y:[/[+-]?\d+/,o("year")],YY:[t,function(e){this.year=s(e)}],YYYY:[/\d{4}/,o("year")],Z:l,ZZ:l};function h(t){var n,i;n=t,i=a&&a.formats;for(var s=(t=n.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g,(function(r,t,n){var a=n&&n.toUpperCase();return t||i[n]||e[n]||i[a].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g,(function(e,r,t){return r||t.slice(1)}))}))).match(r),o=s.length,l=0;l<o;l+=1){var d=s[l],c=u[d],h=c&&c[0],g=c&&c[1];s[l]=g?{regex:h,parser:g}:d.replace(/^\[|\]$/g,"")}return function(e){for(var r={},t=0,n=0;t<o;t+=1){var i=s[t];if("string"==typeof i)n+=i.length;else{var a=i.regex,l=i.parser,d=e.slice(n),c=a.exec(d)[0];l.call(r,c),e=e.replace(c,"")}}return function(e){var r=e.afternoon;if(void 0!==r){var t=e.hours;r?t<12&&(e.hours+=12):12===t&&(e.hours=0),delete e.afternoon}}(r),r}}return function(e,r,t){t.p.customParseFormat=!0,e&&e.parseTwoDigitYear&&(s=e.parseTwoDigitYear);var n=r.prototype,i=n.parse;n.parse=function(e){var r=e.date,n=e.utc,s=e.args;this.$u=n;var o=s[1];if("string"==typeof o){var l=!0===s[2],d=!0===s[3],c=l||d,u=s[2];d&&(u=s[2]),a=this.$locale(),!l&&u&&(a=t.Ls[u]),this.$d=function(e,r,t){try{if(["x","X"].indexOf(r)>-1)return new Date(("X"===r?1e3:1)*e);var n=h(r)(e),i=n.year,a=n.month,s=n.day,o=n.hours,l=n.minutes,d=n.seconds,c=n.milliseconds,u=n.zone,g=new Date,m=s||(i||a?1:g.getDate()),b=i||g.getFullYear(),f=0;i&&!a||(f=a>0?a-1:g.getMonth());var p=o||0,y=l||0,x=d||0,v=c||0;return u?new Date(Date.UTC(b,f,m,p,y,x,v+60*u.offset*1e3)):t?new Date(Date.UTC(b,f,m,p,y,x,v)):new Date(b,f,m,p,y,x,v)}catch(e){return new Date("")}}(r,o,n),this.init(),u&&!0!==u&&(this.$L=this.locale(u).$L),c&&r!=this.format(o)&&(this.$d=new Date("")),a={}}else if(o instanceof Array)for(var g=o.length,m=1;m<=g;m+=1){s[1]=o[m-1];var b=t.apply(this,s);if(b.isValid()){this.$d=b.$d,this.$L=b.$L,this.init();break}m===g&&(this.$d=new Date(""))}else i.call(this,e)}}}();var pn=C(fn.exports),yn={exports:{}};yn.exports=function(e,r,t){r.prototype.isBetween=function(e,r,n,i){var a=t(e),s=t(r),o="("===(i=i||"()")[0],l=")"===i[1];return(o?this.isAfter(a,n):!this.isBefore(a,n))&&(l?this.isBefore(s,n):!this.isAfter(s,n))||(o?this.isBefore(a,n):!this.isAfter(a,n))&&(l?this.isAfter(s,n):!this.isBefore(s,n))}};var xn=C(yn.exports),vn={exports:{}};vn.exports=function(e,r){r.prototype.isSameOrAfter=function(e,r){return this.isSame(e,r)||this.isAfter(e,r)}};var wn=C(vn.exports),Fn={exports:{}};Fn.exports=function(e,r){r.prototype.isSameOrBefore=function(e,r){return this.isSame(e,r)||this.isBefore(e,r)}};var $n,Cn,En,Dn=C(Fn.exports),Bn={exports:{}},An=C(Bn.exports=($n={year:0,month:1,day:2,hour:3,minute:4,second:5},Cn={},function(e,r,t){var n,i=function(e,r,t){void 0===t&&(t={});var n=new Date(e),i=function(e,r){void 0===r&&(r={});var t=r.timeZoneName||"short",n=e+"|"+t,i=Cn[n];return i||(i=new Intl.DateTimeFormat("en-US",{hour12:!1,timeZone:e,year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit",timeZoneName:t}),Cn[n]=i),i}(r,t);return i.formatToParts(n)},a=function(e,r){for(var n=i(e,r),a=[],s=0;s<n.length;s+=1){var o=n[s],l=o.type,d=o.value,c=$n[l];c>=0&&(a[c]=parseInt(d,10))}var u=a[3],h=24===u?0:u,g=a[0]+"-"+a[1]+"-"+a[2]+" "+h+":"+a[4]+":"+a[5]+":000",m=+e;return(t.utc(g).valueOf()-(m-=m%1e3))/6e4},s=r.prototype;s.tz=function(e,r){void 0===e&&(e=n);var i=this.utcOffset(),a=this.toDate(),s=a.toLocaleString("en-US",{timeZone:e}),o=Math.round((a-new Date(s))/1e3/60),l=t(s,{locale:this.$L}).$set("millisecond",this.$ms).utcOffset(15*-Math.round(a.getTimezoneOffset()/15)-o,!0);if(r){var d=l.utcOffset();l=l.add(i-d,"minute")}return l.$x.$timezone=e,l},s.offsetName=function(e){var r=this.$x.$timezone||t.tz.guess(),n=i(this.valueOf(),r,{timeZoneName:e}).find((function(e){return"timezonename"===e.type.toLowerCase()}));return n&&n.value};var o=s.startOf;s.startOf=function(e,r){if(!this.$x||!this.$x.$timezone)return o.call(this,e,r);var n=t(this.format("YYYY-MM-DD HH:mm:ss:SSS"),{locale:this.$L});return o.call(n,e,r).tz(this.$x.$timezone,!0)},t.tz=function(e,r,i){var s=i&&r,o=i||r||n,l=a(+t(),o);if("string"!=typeof e)return t(e).tz(o);var d=function(e,r,t){var n=e-60*r*1e3,i=a(n,t);if(r===i)return[n,r];var s=a(n-=60*(i-r)*1e3,t);return i===s?[n,i]:[e-60*Math.min(i,s)*1e3,Math.max(i,s)]}(t.utc(e,s).valueOf(),l,o),c=d[0],u=d[1],h=t(c).utcOffset(u);return h.$x.$timezone=o,h},t.tz.guess=function(){return Intl.DateTimeFormat().resolvedOptions().timeZone},t.tz.setDefault=function(e){n=e}}));bn.extend(xn),bn.extend(Dn),bn.extend(wn),bn.extend(pn),bn.extend(An),function(e){e.generateDays=e=>{const r=e.startOf("month"),t=bn(r).startOf("week");return kn(t).map((e=>Mn(e)))},e.generateDaysForCurrentWeek=e=>{const r=e.startOf("week");return Mn(r)},e.generateMonths=e=>{const r=[];for(let t=0;t<12;t++){const n=e.month(t);r.push(bn(n))}return r},e.generateDecadeOfYears=e=>{const r=e.year(),t=10*Math.floor(r/10),n=e.year(t),i=[n.subtract(1,"year"),n];for(let e=1;e<11;e++)i.push(n.add(e,"year"));return i},e.getStartEndDecade=e=>{const r=10*Math.floor(+e.format("YYYY")/10);return{beginDecade:r,endDecade:+bn(`${r+9}-01-01`).format("YYYY")}},e.convertTo12HourFormat=e=>{const r=bn(e,"HH:mm");return r.isValid()?r.format("h:mm a"):""},e.isWithinRange=(e,r,t,n="day")=>!r&&!t||(r&&t?e.isBetween(r,t,n,"[]"):r?e.isSameOrAfter(r,n):e.isSameOrBefore(t,n)),e.isPreviousMonthWithinRange=(r,t)=>e.isWithinRange(r.subtract(1,"month"),t,void 0,"month"),e.isPreviousYearWithinRange=(r,t)=>e.isWithinRange(r.subtract(1,"year"),t,void 0,"year"),e.isPreviousDecadeWithinRange=(r,t)=>{const{beginDecade:n}=e.getStartEndDecade(r);return e.isWithinRange(r.year(n).subtract(1,"year"),t,void 0,"year")},e.isNextMonthWithinRange=(r,t)=>e.isWithinRange(r.add(1,"month"),void 0,t,"month"),e.isNextYearWithinRange=(r,t)=>e.isWithinRange(r.add(1,"year"),void 0,t,"year"),e.isNextDecadeWithinRange=(r,t)=>{const{endDecade:n}=e.getStartEndDecade(r);return e.isWithinRange(r.year(n).add(1,"year"),void 0,t,"year")},e.getWeekStartEnd=e=>({start:e.startOf("week").format("YYYY-MM-DD"),end:e.endOf("week").format("YYYY-MM-DD")}),e.getFixedRangeStartEnd=(e,r)=>({start:e.format("YYYY-MM-DD"),end:e.add(r-1,"day").format("YYYY-MM-DD")}),e.isDisabledDay=(r,t,n,i)=>{const a=e.isWithinRange(r,n?bn(n):void 0,i?bn(i):void 0),s=t&&t.includes(r.format("YYYY-MM-DD"));return!a||!!s}}(En||(En={}));const kn=e=>{const r=[e];for(let t=1;t<6;t++){const n=e.add(t,"week");r.push(n)}return r},Mn=e=>{const r=[];for(let t=0;t<7;t++){const n=e.add(t,"day");r.push(n)}return r},Sn=[1,3,5,7,8,10,12],zn=[4,6,9,11];var On,_n,jn,Wn;!function(e){e.clampDay=(r,t,n)=>{const i=parseInt(r),a=parseInt(t),s=parseInt(n);return 0==i?"1":Sn.includes(a)?Math.min(i,31).toString():zn.includes(a)?Math.min(i,30).toString():2===a?e.isLeapYear(s)?Math.min(i,29).toString():Math.min(i,28).toString():r},e.clampMonth=e=>{const r=parseInt(e);return 0==r?"1":r>12?"12":e},e.isLeapYear=e=>e%4==0&&e%100!=0||e%400==0,e.getTimeDiffInMinutes=(e,r,t="HH:mm")=>{const n=bn(e,t);return bn(r,t).diff(n,"minute")},e.toDayjs=e=>e?bn(e):bn(),e.addMinutesToTime=(e,r,t="HH:mm")=>bn(e,t).add(r,"minutes").format(t),e.isSame=(e,r,t="day")=>bn(e).isSame(bn(r),t)}(On||(On={})),function(e){e.isDateDisabled=(e,r)=>{const{disabledDates:t,minDate:n,maxDate:i}=r;return!!(t&&t.length&&t.includes(e))||(!(!n||!bn(e).isBefore(n,"day"))||!(!i||!bn(e).isAfter(i,"day")))},e.sanitizeInput=e=>{if(e){if(bn(e).isValid())return e}return""}}(_n||(_n={})),function(e){e.generate=()=>Math.random().toString(36).substring(2,9)}(jn||(jn={})),function(e){e.transformWithSpaces=(e,r)=>{const t="(.{"+r+"})";return e.replace(/[^\dA-Z]/gi,"").replace(new RegExp(t,"g"),"$1 ").trim()},e.padValue=(e,r)=>{if("0"===e)return r?e:e.padStart(2,"0");if(""===e)return e;return parseInt(e).toString().padStart(2,"0")},e.shouldTruncateToTwoLines=(e,r)=>{const t=Math.floor(r/9);return e.length>=2*t||1===e.split(" ").length&&e.length>t},e.truncateOneLine=(e,r,t,n,i=8)=>{let a=0;r>t&&(a=Math.floor((r-t)/i));const s=n+a;if(s<e.length){const r=Math.floor(s/2);return e.substring(0,r)+" ... "+e.substring(e.length-r,e.length)}return e},e.truncateTwoLines=(e,r,t,n=1.2)=>{const i=Math.floor(2*r/(.6*t))*(2/n);if(e.length<=i)return e;const a=Math.floor(.6*i),s=Math.floor(.2*i);return`${e.substring(0,a)}...${e.substring(e.length-s)}`},e.getTextWidth=(r,t)=>{if("undefined"==typeof document)return 0;const n=(e.getTextWidth.canvas||(e.getTextWidth.canvas=document.createElement("canvas"))).getContext("2d");n.font=t;return n.measureText(r).width},e.maskValue=(e,t)=>{if(!e)return e;const{maskRange:n,unmaskRange:i,maskChar:a="•",maskRegex:s,maskTransformer:o}=t;if(o)return o(e);if(s)return e.replace(s,a);if(n){const{startIndex:t,endIndex:i}=r(n[0],n[1]);return e.substring(0,t)+a.repeat(e.substring(t,i+1).length)+e.substring(i+1)}if(i){const{startIndex:t,endIndex:n}=r(i[0],i[1]);return a.repeat(e.substring(0,t).length)+e.substring(t,n+1)+a.repeat(e.substring(n+1).length)}return e};const r=(e,r)=>e<r?{startIndex:e,endIndex:r}:{startIndex:r,endIndex:e}}(Wn||(Wn={}));const Yn=r.div`
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
`,Ln=r.div`
    position: absolute;
    left: 0;
    top: 0;
    background-color: ${e=>e.$stacked?Yt["overlay-subtle"]:Yt["overlay-strong"]};
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
`;var Tn;!function(e){e.Ready="overlay-context-ready",e.Change="overlay-context-change"}(Tn||(Tn={}));const In=({show:e=!1,rootId:r,onOverlayClick:t,children:n,backgroundOpacity:i,backgroundBlur:s=!0,disableTransition:o=!1,enableOverlayClick:h=!1,zIndex:g,id:b})=>{const[x,v]=c(null),[w,F]=c(),[$]=c((()=>jn.generate())),C=f(),E=u(),D=u(null),B=n&&l.cloneElement(n,{ref:D}),A=b?`lifesg-ds-overlay-root-${b}`:"lifesg-ds-overlay-root",k=null!=g?g:w?99999:99998;(e=>{const r=m();d((()=>{if(!r)return;const t={zIndex:e};r.events.emit(Tn.Change,t)}),[r,e]),d((()=>{if(!r)return;const t=()=>{const t={zIndex:e};r.events.emit(Tn.Change,t)};return null==r||r.events.on(Tn.Ready,t),()=>null==r?void 0:r.events.off(Tn.Ready,t)}),[r,e])})(k),d((()=>(O(),v(S()),()=>{Y(),j().length<1&&_("remove")})),[]),d((()=>{if(e){const e=z();M(e),W();const r=setTimeout((()=>{_("add")}),200);return()=>clearTimeout(r)}{Y();const e=setTimeout((()=>{j().length<1&&_("remove")}),200);return()=>clearTimeout(e)}}),[e]);const M=e=>{E.current=e,F(e)},S=()=>document&&r?document.getElementById(r):document?document.body:null,z=()=>j().length>0,O=()=>{if(!document.getElementById(Hn)){const e=document.createElement("style");e.id=Hn;const r=document.documentElement.clientWidth,t=window.innerWidth-r;e.innerHTML=`\n\t\t\t\t.${Rn} {\n\t\t\t\t\toverflow: hidden;\n\t\t\t\t\tpadding-right: ${t}px !important;\n\t\t\t\t\t-ms-overflow-style: none;\n\t\t\t\t\tscrollbar-width: none;\n\t\t\t\t}\n\n\t\t\t\t.${Rn}::-webkit-scrollbar {\n\t\t\t\t\tdisplay: none;\n\t\t\t\t}\n\t\t\t`,document.body.appendChild(e)}},_=e=>{const r=document.body.classList.contains(Rn);"add"!==e||r?"remove"===e&&r&&document.body.classList.remove(Rn):document.body.classList.add(Rn)},j=()=>{const e=document.body.dataset.lifesgDsOverlayOrder;return e?e.split(","):[]},W=()=>{const e=j();document.body.dataset.lifesgDsOverlayOrder=[...e,$].join(",")},Y=()=>{const e=j();document.body.dataset.lifesgDsOverlayOrder=e.filter((e=>e!==$)).join(",")},L=e=>{var r;const n=null===(r=D.current)||void 0===r?void 0:r.firstChild;n&&n.contains(e.target)||t&&h&&(e.preventDefault(),t())};return x?y.createPortal(a(Yn,Object.assign({id:A,"data-testid":A,$show:e,$zIndex:k},{children:n&&a(p,Object.assign({id:C},{children:a(Ln,Object.assign({"data-testid":"overlay-wrapper",$show:e,$stacked:w,$backgroundBlur:s,$disableTransition:o,onClick:L},{children:B}))}))})),x):null},Nn=e=>a(b,{children:a(In,Object.assign({},e))}),Hn="lifesg-ds-overlay-stylesheet",Rn="lifesg-ds-overlay-open",Pn=r.a`
    display: flex;
    justify-content: center;
    height: 100%;

    img {
        width: auto;
        height: 100%;
        transition: ${Tt["duration-150"]} ${Tt["ease-default"]};
        object-fit: contain;
    }
`;const Un=({src:e,alt:r,className:t,"data-testid":n})=>a("img",{src:e,alt:r||"",className:t,"data-testid":n,onError:e=>{e.target.onerror=null,e.target.src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKAAAABQCAYAAACeXX40AAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAARTSURBVHgB7Z1tUuJAEIY7qMRYWnIE9wR6BD2Be5S9weoN1pusJ1iPwJ5guYH4GeNH2HkppgojYAIhbXrepwoJEMofPHZP9zQxkgJpmh5HUfTdHZ6624EQsiLOp7676+d5fp4kyeDda/5gNBr1siz76Q5/CCHr41ccx+dOyiEejAWcyHflDg+FkDWDiNjtdk8gYQdPTCIf5SON4ALe0cQ5idya78CZ+E8IaRgn4gki4JkQogCK3Y77wdRLtDiNnp6eRkKIEh0hRBEKSFShgEQVCkhUoYBEFQpIVKGARBUKSFShgEQVCkhUoYBEFQpIVNkUokqWZfLy8iJvb2/jx1tbWxLHsWxsbEgIcBpGCQh3e3srr6+vH16Lokh2dnbGN+swAioA+a6vrzERPPN1PP/w8CB5nsvu7q5YhmvAhoFciHzz5JsmTVNxGUosQwEbBmu+WWl3Ho+Pj6VkbSsUsGGqRjSka6Riq1DAhllGJkZAUhuocKtCAUltLNPfs9wTpIAL8M3hOtne3q50PhrTnY7dj4kCzgFrteFwKM/Pz1In3W53vNNRFvYBA+Xm5mYs4bzdilWAVJubn+8B7O3tlTqvzVDAGaAB7KVDAXB/f19rIYCU2uv1JEmSmUUJpMPrVdN1G+FecAGs+5B6i+0SpM79/X2pG/weyI57yIiCw3rUm4Z7wVMgyt3d3c3s1WEtiMiIqFUniIaQO1SYgqfALgVGo+aBVFx3URI6FHACoh4mUD4DRYnlrbGmoYATUPWWKTRwDtaIlncnmoQCyvuqtwwoVJCOyeoELyBkKpN6i2C9iFEpshrBC1h2OHQWEHeZogTvwVwgCVxARLBVdzmqFiUQD+/BbR17zW0jWAHx4deRQhE9yxYwfu3oz10l+lohWAHLSlMGRFE0sBfhhxumoyXeF3oxE6SAiHx1pz+k1nnj9pDODzcUwXusf/FoEcEJiKizruoVUbC4k+LlW7TW9F/BDJHgBFz3uqu4l4zHnxU6fuwrxPVgUAKi4bzuytNf8cAPNpRt0yByhthXDGYcC1EIVyNoCoxUVW3xYBwLQ6hVJqbbThAR0EejJlmmv+iHX0NaDwYhYB0N56bw68FQMC8gxMPar02EtB40LyBSbxurS7RmFg3HWsG0gG1KvbNo6x9PFcwKiOixzJjVV2K6pWMVkwL6atIC1ke3TArY9tRbpMxuSlsxJ2Abq94yWE3F5gS0+kFZ/R6KKQFRdFieMsbYlrXobkbAUJq31ka3zFyaAwKGsomPqrjuS4RowYsTEVX4xXSiCgUkqlBAogoFJKpQQKIKBSSqUECiCgUkqlBAogoFJKpAwIEQokO/k+f5pRCiQBRF/ShN02N38EcIaZjRaPStkyTJlYuCF0JIs1w49wbj/5TnTOxlWYYoeCSErJ+/cRwj8w7HVTAO3BMnjISkAS68fHjw4X+FujXhgbs7cyccCiMiqYeBu126TPsbS77pF/4DuxeyMpdnp3gAAAAASUVORK5CYII="}}),Vn=({resources:e,onClick:r,"data-id":t,"data-testid":n="navbar-brand",type:i})=>a(Pn,Object.assign({role:"link",onClick:e=>{r&&r(e,i)},tabIndex:0,"data-id":t,"data-testid":n,$type:i},{children:a(Un,{src:e.logoSrc,alt:e.brandName})})),Xn=r.div`
    display: none;

    ${Pt.MaxWidth.lg} {
        display: flex;
    }
`,Jn=r.div`
    position: absolute;
    overflow-y: auto;
    overflow-x: hidden;
    height: 100vh;
    display: block;
    padding: 0 0 ${Nt["spacing-16"]};
    background-color: white;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);
    visibility: ${e=>e.$show?"visible":"hidden"};

    ${e=>e.$show?t`
            right: 0;
            transition: all 300ms ${Tt["ease-entrance"]};
            transition-delay: 200ms;
        `:t`
        right: -100%;
        transition: all 300ms ${Tt["ease-exit"]};
    `}
    ${e=>{const r=`${e.$viewHeight}px`||"1vh";return t`
            height: calc(${r} * 100);
        `}}

	${Pt.MaxWidth.lg} {
        width: 75%;
    }

    ${Pt.MaxWidth.sm} {
        width: 100%;
    }
`,Qn=r.div`
    display: flex;
    flex-direction: column;
`,Zn=r.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;
    padding: ${Nt["spacing-40"]} ${Nt["spacing-20"]}
        ${Nt["spacing-32"]};
`,Gn=r(x)`
    height: 1.5rem;
    width: 1.5rem;
`,Kn=r(Vt)`
    position: absolute;
    right: -${Nt["spacing-4"]};
    color: ${Yt.icon};

    :active,
    :focus {
        color: ${Yt["icon-hover"]};
    }

    svg {
        height: 1.5rem;
        width: 1.5rem;
    }
`,qn=l.forwardRef(((e,r)=>{const{show:t,resources:n,children:i,hideNavBranding:l,onClose:u,onBrandClick:h}=e,[g,m]=c(0),{primary:b,secondary:f}=n;d((()=>(p(),window.addEventListener("resize",p),()=>{window.removeEventListener("resize",p)})),[]);const p=()=>{if(window){const e=.01*window.innerHeight;m(e)}};return a(Xn,Object.assign({ref:r,"data-testid":"drawer"},{children:a(Jn,Object.assign({$show:t,$viewHeight:g},{children:s(Qn,{children:[s(Zn,{children:[a(qt,Object.assign({"data-id":"drawer-brand-container"},{children:!l&&s(o,{children:[a(Vn,{resources:b,compress:!0,onClick:h,"data-id":"drawer-brand-primary","data-testid":"drawer__brand",type:"primary"}),f&&s(o,{children:[a(en,{}),a(Vn,{resources:f,compress:!0,onClick:h,"data-id":"drawer-brand-secondary","data-testid":"drawer__brand-secondary",type:"secondary"})]})]})})),a(Kn,Object.assign({onClick:u,focusHighlight:!1,"aria-label":"Close nav menu"},{children:a(Gn,{})}))]}),i]})}))}))}));var ei=function(e,r,t,n){for(var i=e.length,a=t+(n?1:-1);n?a--:++a<i;)if(r(e[a],a,e))return a;return-1},ri=ar;var ti=function(e){var r=this.__data__,t=r.delete(e);return this.size=r.size,t};var ni=function(e){return this.__data__.get(e)};var ii=function(e){return this.__data__.has(e)},ai=ar,si=sr,oi=Dr;var li=function(e,r){var t=this.__data__;if(t instanceof ai){var n=t.__data__;if(!si||n.length<199)return n.push([e,r]),this.size=++t.size,this;t=this.__data__=new oi(n)}return t.set(e,r),this.size=t.size,this},di=ar,ci=function(){this.__data__=new ri,this.size=0},ui=ti,hi=ni,gi=ii,mi=li;function bi(e){var r=this.__data__=new di(e);this.size=r.size}bi.prototype.clear=ci,bi.prototype.delete=ui,bi.prototype.get=hi,bi.prototype.has=gi,bi.prototype.set=mi;var fi=bi;var pi=Dr,yi=function(e){return this.__data__.set(e,"__lodash_hash_undefined__"),this},xi=function(e){return this.__data__.has(e)};function vi(e){var r=-1,t=null==e?0:e.length;for(this.__data__=new pi;++r<t;)this.add(e[r])}vi.prototype.add=vi.prototype.push=yi,vi.prototype.has=xi;var wi=function(e,r){return e.has(r)},Fi=vi,$i=function(e,r){for(var t=-1,n=null==e?0:e.length;++t<n;)if(r(e[t],t,e))return!0;return!1},Ci=wi;var Ei=function(e,r,t,n,i,a){var s=1&t,o=e.length,l=r.length;if(o!=l&&!(s&&l>o))return!1;var d=a.get(e),c=a.get(r);if(d&&c)return d==r&&c==e;var u=-1,h=!0,g=2&t?new Fi:void 0;for(a.set(e,r),a.set(r,e);++u<o;){var m=e[u],b=r[u];if(n)var f=s?n(b,m,u,r,e,a):n(m,b,u,e,r,a);if(void 0!==f){if(f)continue;h=!1;break}if(g){if(!$i(r,(function(e,r){if(!Ci(g,r)&&(m===e||i(m,e,t,n,a)))return g.push(r)}))){h=!1;break}}else if(m!==b&&!i(m,b,t,n,a)){h=!1;break}}return a.delete(e),a.delete(r),h};var Di=function(e){var r=-1,t=Array(e.size);return e.forEach((function(e,n){t[++r]=[n,e]})),t};var Bi=k.Uint8Array,Ai=Ne,ki=Ei,Mi=Di,Si=function(e){var r=-1,t=Array(e.size);return e.forEach((function(e){t[++r]=e})),t},zi=M?M.prototype:void 0,Oi=zi?zi.valueOf:void 0;var _i=function(e,r,t,n,i,a,s){switch(t){case"[object DataView]":if(e.byteLength!=r.byteLength||e.byteOffset!=r.byteOffset)return!1;e=e.buffer,r=r.buffer;case"[object ArrayBuffer]":return!(e.byteLength!=r.byteLength||!a(new Bi(e),new Bi(r)));case"[object Boolean]":case"[object Date]":case"[object Number]":return Ai(+e,+r);case"[object Error]":return e.name==r.name&&e.message==r.message;case"[object RegExp]":case"[object String]":return e==r+"";case"[object Map]":var o=Mi;case"[object Set]":var l=1&n;if(o||(o=Si),e.size!=r.size&&!l)return!1;var d=s.get(e);if(d)return d==r;n|=2,s.set(e,r);var c=ki(o(e),o(r),n,i,a,s);return s.delete(e),c;case"[object Symbol]":if(Oi)return Oi.call(e)==Oi.call(r)}return!1};var ji=function(e,r){for(var t=-1,n=r.length,i=e.length;++t<n;)e[i+t]=r[t];return e},Wi=E;var Yi=function(e,r,t){var n=r(e);return Wi(e)?n:ji(n,t(e))};var Li=function(e,r){for(var t=-1,n=null==e?0:e.length,i=0,a=[];++t<n;){var s=e[t];r(s,t,e)&&(a[i++]=s)}return a},Ti=function(){return[]},Ii=Object.prototype.propertyIsEnumerable,Ni=Object.getOwnPropertySymbols,Hi=Ni?function(e){return null==e?[]:(e=Object(e),Li(Ni(e),(function(r){return Ii.call(e,r)})))}:Ti;var Ri=function(e,r){for(var t=-1,n=Array(e);++t<e;)n[t]=r(t);return n},Pi=N,Ui=H;var Vi=function(e){return Ui(e)&&"[object Arguments]"==Pi(e)},Xi=H,Ji=Object.prototype,Qi=Ji.hasOwnProperty,Zi=Ji.propertyIsEnumerable,Gi=Vi(function(){return arguments}())?Vi:function(e){return Xi(e)&&Qi.call(e,"callee")&&!Zi.call(e,"callee")},Ki={exports:{}};var qi=function(){return!1};!function(e,r){var t=k,n=qi,i=r&&!r.nodeType&&r,a=i&&e&&!e.nodeType&&e,s=a&&a.exports===i?t.Buffer:void 0,o=(s?s.isBuffer:void 0)||n;e.exports=o}(Ki,Ki.exports);var ea=Ki.exports,ra=/^(?:0|[1-9]\d*)$/;var ta=function(e,r){var t=typeof e;return!!(r=null==r?9007199254740991:r)&&("number"==t||"symbol"!=t&&ra.test(e))&&e>-1&&e%1==0&&e<r};var na=function(e){return"number"==typeof e&&e>-1&&e%1==0&&e<=9007199254740991},ia=N,aa=na,sa=H,oa={};oa["[object Float32Array]"]=oa["[object Float64Array]"]=oa["[object Int8Array]"]=oa["[object Int16Array]"]=oa["[object Int32Array]"]=oa["[object Uint8Array]"]=oa["[object Uint8ClampedArray]"]=oa["[object Uint16Array]"]=oa["[object Uint32Array]"]=!0,oa["[object Arguments]"]=oa["[object Array]"]=oa["[object ArrayBuffer]"]=oa["[object Boolean]"]=oa["[object DataView]"]=oa["[object Date]"]=oa["[object Error]"]=oa["[object Function]"]=oa["[object Map]"]=oa["[object Number]"]=oa["[object Object]"]=oa["[object RegExp]"]=oa["[object Set]"]=oa["[object String]"]=oa["[object WeakMap]"]=!1;var la=function(e){return sa(e)&&aa(e.length)&&!!oa[ia(e)]};var da=function(e){return function(r){return e(r)}},ca={exports:{}};!function(e,r){var t=D,n=r&&!r.nodeType&&r,i=n&&e&&!e.nodeType&&e,a=i&&i.exports===n&&t.process,s=function(){try{var e=i&&i.require&&i.require("util").types;return e||a&&a.binding&&a.binding("util")}catch(e){}}();e.exports=s}(ca,ca.exports);var ua=ca.exports,ha=la,ga=da,ma=ua&&ua.isTypedArray,ba=ma?ga(ma):ha,fa=Ri,pa=Gi,ya=E,xa=ea,va=ta,wa=ba,Fa=Object.prototype.hasOwnProperty;var $a=function(e,r){var t=ya(e),n=!t&&pa(e),i=!t&&!n&&xa(e),a=!t&&!n&&!i&&wa(e),s=t||n||i||a,o=s?fa(e.length,String):[],l=o.length;for(var d in e)!r&&!Fa.call(e,d)||s&&("length"==d||i&&("offset"==d||"parent"==d)||a&&("buffer"==d||"byteLength"==d||"byteOffset"==d)||va(d,l))||o.push(d);return o},Ca=Object.prototype;var Ea=function(e){var r=e&&e.constructor;return e===("function"==typeof r&&r.prototype||Ca)};var Da=function(e,r){return function(t){return e(r(t))}}(Object.keys,Object),Ba=Ea,Aa=Da,ka=Object.prototype.hasOwnProperty;var Ma=function(e){if(!Ba(e))return Aa(e);var r=[];for(var t in Object(e))ka.call(e,t)&&"constructor"!=t&&r.push(t);return r},Sa=re,za=na;var Oa=$a,_a=Ma,ja=function(e){return null!=e&&za(e.length)&&!Sa(e)};var Wa=function(e){return ja(e)?Oa(e):_a(e)},Ya=Yi,La=Hi,Ta=Wa;var Ia=function(e){return Ya(e,Ta,La)},Na=Object.prototype.hasOwnProperty;var Ha=function(e,r,t,n,i,a){var s=1&t,o=Ia(e),l=o.length;if(l!=Ia(r).length&&!s)return!1;for(var d=l;d--;){var c=o[d];if(!(s?c in r:Na.call(r,c)))return!1}var u=a.get(e),h=a.get(r);if(u&&h)return u==r&&h==e;var g=!0;a.set(e,r),a.set(r,e);for(var m=s;++d<l;){var b=e[c=o[d]],f=r[c];if(n)var p=s?n(f,b,c,r,e,a):n(b,f,c,e,r,a);if(!(void 0===p?b===f||i(b,f,t,n,a):p)){g=!1;break}m||(m="constructor"==c)}if(g&&!m){var y=e.constructor,x=r.constructor;y==x||!("constructor"in e)||!("constructor"in r)||"function"==typeof y&&y instanceof y&&"function"==typeof x&&x instanceof x||(g=!1)}return a.delete(e),a.delete(r),g},Ra=ve(k,"DataView"),Pa=sr,Ua=ve(k,"Promise"),Va=ve(k,"Set"),Xa=ve(k,"WeakMap"),Ja=N,Qa=se,Za="[object Map]",Ga="[object Promise]",Ka="[object Set]",qa="[object WeakMap]",es="[object DataView]",rs=Qa(Ra),ts=Qa(Pa),ns=Qa(Ua),is=Qa(Va),as=Qa(Xa),ss=Ja;(Ra&&ss(new Ra(new ArrayBuffer(1)))!=es||Pa&&ss(new Pa)!=Za||Ua&&ss(Ua.resolve())!=Ga||Va&&ss(new Va)!=Ka||Xa&&ss(new Xa)!=qa)&&(ss=function(e){var r=Ja(e),t="[object Object]"==r?e.constructor:void 0,n=t?Qa(t):"";if(n)switch(n){case rs:return es;case ts:return Za;case ns:return Ga;case is:return Ka;case as:return qa}return r});var os=fi,ls=Ei,ds=_i,cs=Ha,us=ss,hs=E,gs=ea,ms=ba,bs="[object Arguments]",fs="[object Array]",ps="[object Object]",ys=Object.prototype.hasOwnProperty;var xs=function(e,r,t,n,i,a){var s=hs(e),o=hs(r),l=s?fs:us(e),d=o?fs:us(r),c=(l=l==bs?ps:l)==ps,u=(d=d==bs?ps:d)==ps,h=l==d;if(h&&gs(e)){if(!gs(r))return!1;s=!0,c=!1}if(h&&!c)return a||(a=new os),s||ms(e)?ls(e,r,t,n,i,a):ds(e,r,l,t,n,i,a);if(!(1&t)){var g=c&&ys.call(e,"__wrapped__"),m=u&&ys.call(r,"__wrapped__");if(g||m){var b=g?e.value():e,f=m?r.value():r;return a||(a=new os),i(b,f,t,n,a)}}return!!h&&(a||(a=new os),cs(e,r,t,n,i,a))},vs=H;var ws=function e(r,t,n,i,a){return r===t||(null==r||null==t||!vs(r)&&!vs(t)?r!=r&&t!=t:xs(r,t,n,i,e,a))},Fs=fi,$s=ws;var Cs=function(e,r,t,n){var i=t.length,a=i,s=!n;if(null==e)return!a;for(e=Object(e);i--;){var o=t[i];if(s&&o[2]?o[1]!==e[o[0]]:!(o[0]in e))return!1}for(;++i<a;){var l=(o=t[i])[0],d=e[l],c=o[1];if(s&&o[2]){if(void 0===d&&!(l in e))return!1}else{var u=new Fs;if(n)var h=n(d,c,l,e,r,u);if(!(void 0===h?$s(c,d,3,n,u):h))return!1}}return!0},Es=G;var Ds=function(e){return e==e&&!Es(e)},Bs=Ds,As=Wa;var ks=function(e){for(var r=As(e),t=r.length;t--;){var n=r[t],i=e[n];r[t]=[n,i,Bs(i)]}return r};var Ms=function(e,r){return function(t){return null!=t&&(t[e]===r&&(void 0!==r||e in Object(t)))}},Ss=Cs,zs=ks,Os=Ms;var _s=function(e,r){return null!=e&&r in Object(e)},js=Ur,Ws=Gi,Ys=E,Ls=ta,Ts=na,Is=Xr;var Ns=function(e,r,t){for(var n=-1,i=(r=js(r,e)).length,a=!1;++n<i;){var s=Is(r[n]);if(!(a=null!=e&&t(e,s)))break;e=e[s]}return a||++n!=i?a:!!(i=null==e?0:e.length)&&Ts(i)&&Ls(s,i)&&(Ys(e)||Ws(e))},Hs=_s,Rs=Ns;var Ps=ws,Us=Kr,Vs=function(e,r){return null!=e&&Rs(e,r,Hs)},Xs=Z,Js=Ds,Qs=Ms,Zs=Xr;var Gs=function(e){return function(r){return null==r?void 0:r[e]}},Ks=Zr;var qs=Gs,eo=function(e){return function(r){return Ks(r,e)}},ro=Z,to=Xr;var no=function(e){var r=zs(e);return 1==r.length&&r[0][2]?Os(r[0][0],r[0][1]):function(t){return t===e||Ss(t,e,r)}},io=function(e,r){return Xs(e)&&Js(r)?Qs(Zs(e),r):function(t){var n=Us(t,e);return void 0===n&&n===r?Vs(t,e):Ps(r,n,3)}},ao=function(e){return e},so=E,oo=function(e){return ro(e)?qs(to(e)):eo(e)};var lo=/\s/;var co=function(e){for(var r=e.length;r--&&lo.test(e.charAt(r)););return r},uo=/^\s+/;var ho=function(e){return e?e.slice(0,co(e)+1).replace(uo,""):e},go=G,mo=U,bo=/^[-+]0x[0-9a-f]+$/i,fo=/^0b[01]+$/i,po=/^0o[0-7]+$/i,yo=parseInt;var xo=function(e){if("number"==typeof e)return e;if(mo(e))return NaN;if(go(e)){var r="function"==typeof e.valueOf?e.valueOf():e;e=go(r)?r+"":r}if("string"!=typeof e)return 0===e?e:+e;e=ho(e);var t=fo.test(e);return t||po.test(e)?yo(e.slice(2),t?2:8):bo.test(e)?NaN:+e},vo=1/0;var wo=function(e){return e?(e=xo(e))===vo||e===-1/0?17976931348623157e292*(e<0?-1:1):e==e?e:0:0===e?e:0};var Fo=ei,$o=function(e){return"function"==typeof e?e:null==e?ao:"object"==typeof e?so(e)?io(e[0],e[1]):no(e):oo(e)},Co=function(e){var r=wo(e),t=r%1;return r==r?t?r-t:r:0},Eo=Math.max;var Do=C((function(e,r,t){var n=null==e?0:e.length;if(!n)return-1;var i=null==t?0:Co(t);return i<0&&(i=Eo(n+i,0)),Fo(e,$o(r),i)}));const Bo=r.div`
    display: inline-block;
    position: relative;
    width: ${({$size:e})=>e?`${e}px`:"1em"};
    height: ${({$size:e})=>e?`${e}px`:"1em"};
    color: ${e=>e.$color||"currentColor"};
`,Ao=i`
	0% {
	  transform: rotate(0deg);
	}
	100% {
	  transform: rotate(360deg);
	}
`,ko=r.div`
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
    animation: ${Ao} 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
`,Mo=r(ko)`
    animation-delay: -0.45s;
`,So=r(ko)`
    animation-delay: -0.3s;
`,zo=r(ko)`
    animation-delay: -0.15s;
`,Oo=r.button`
    padding: ${Nt["spacing-8"]} ${Nt["spacing-16"]};
    min-width: 4rem;
    border: ${It["width-010"]} ${It.solid} transparent;
    border-radius: ${Ht.sm};
    transition: all ${Tt["duration-250"]} ${Tt["ease-default"]};
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;

    // -----------------------------------------------------------------------------
    // BUTTON STYLE + TEXT COLOR
    // -----------------------------------------------------------------------------
    ${e=>{switch(e.$buttonStyle){case"secondary":return t`
                    background-color: ${Yt.Primitive.white};
                    border-color: ${e.$buttonIsDanger?Yt["border-error-strong"]:Yt["border-primary"]};

                    color: ${e.$buttonIsDanger?Yt["text-error"]:Yt["text-primary"]};

                    &:hover,
                    &:active {
                        background-color: ${Yt["bg-hover-neutral"]};
                    }
                `;case"light":return t`
                    background-color: ${Yt.bg};
                    border-color: ${Yt.border};

                    color: ${e.$buttonIsDanger?Yt["text-error"]:Yt["text-primary"]};

                    &:hover,
                    &:active {
                        background-color: ${Yt["bg-hover-neutral"]};
                    }
                `;case"link":return t`
                    background-color: transparent;

                    color: ${e.$buttonIsDanger?Yt["text-error"]:Yt["text-primary"]};
                    &:hover,
                    &:active {
                        background-color: ${Yt["bg-hover-neutral"]};
                    }
                `;case"disabled":return t`
                    background-color: ${Yt["bg-disabled"]};

                    cursor: not-allowed;

                    &:hover {
                        box-shadow: none;
                    }

                    color: ${Yt["text-disabled"]};
                `;default:return t`
                    background-color: ${e.$buttonIsDanger?Yt["bg-error-strong"]:Yt["bg-primary"]};

                    ${Pt.MaxWidth.md} {
                        width: 100%;
                    }

                    color: ${Yt["text-inverse"]};

                    &:hover,
                    &:active {
                        background-color: ${e.$buttonIsDanger?Yt["bg-error-strong-hover"]:Yt["bg-primary-hover"]};
                    }
                `}}}

    // -----------------------------------------------------------------------------
	// BUTTON SIZE + TEXT SIZE
	// -----------------------------------------------------------------------------
	${e=>{switch(e.$buttonSizeStyle){case"small":return t`
                    height: 2.5rem;
                    ${Lt["body-md-semibold"]}

                    ${Pt.MaxWidth.xxs} {
                        height: auto;
                    }
                `;case"large":return t`
                    height: 4rem;
                    ${Lt["header-md-semibold"]}

                    ${Pt.MaxWidth.xxs} {
                        height: auto;
                    }
                `;default:return t`
                    height: 3rem;
                    ${Lt["header-xs-semibold"]}

                    ${Pt.MaxWidth.xxs} {
                        height: auto;
                    }
                `}}}
`,_o=r((({color:e,className:r,size:t})=>s(Bo,Object.assign({className:r,$size:t,$color:e},{children:[a(ko,{id:"inner1"}),a(Mo,{id:"inner2"}),a(So,{id:"inner3"}),a(zo,{id:"inner4"})]}))))`
    margin-right: 0.5rem;
`,jo=(e,r)=>{const{children:t,disabled:n=!1,loading:i=!1,styleType:o="default",danger:l=!1}=e,d=F(e,["children","disabled","loading","styleType","danger"]),c={$buttonStyle:n?"disabled":o,$buttonSizeStyle:"default",$buttonIsDanger:l};return s(Oo,Object.assign({ref:r,"data-testid":d["data-testid"]||"button",disabled:n},c,d,{children:[i&&a(_o,{}),a("span",{children:t})]}))};jo.displayName="Button.Default";const Wo=(e,r)=>{const{children:t,disabled:n=!1,loading:i=!1,styleType:o="default",danger:l=!1}=e,d=F(e,["children","disabled","loading","styleType","danger"]),c={$buttonStyle:n?"disabled":o,$buttonSizeStyle:"small",$buttonIsDanger:l};return s(Oo,Object.assign({ref:r,"data-testid":d["data-testid"]||"button",disabled:n},c,d,{children:[i&&a(_o,{}),a("span",{children:t})]}))};Wo.displayName="Button.Small";const Yo=(e,r)=>{const{children:t,disabled:n=!1,loading:i=!1,styleType:o="default",danger:l=!1}=e,d=F(e,["children","disabled","loading","styleType","danger"]),c={$buttonStyle:n?"disabled":o,$buttonSizeStyle:"large",$buttonIsDanger:l};return s(Oo,Object.assign({ref:r,"data-testid":d["data-testid"]||"button",disabled:n},c,d,{children:[i&&a(_o,{}),a("span",{children:t})]}))};Yo.displayName="Button.Large";const Lo={Default:l.forwardRef(jo),Small:l.forwardRef(Wo),Large:l.forwardRef(Yo)},To=(e,r,n=!1)=>{const i=`${e}-${r.toLowerCase()}`;return t`
        ${Lt[i]}
        ${n?"margin-bottom: 1.05em;":"margin-bottom: 0;"}
    `},Io=(e,r)=>t`
    ${To(e,r.weight||"regular",r.paragraph)}
    ${((e=!1,r=!1)=>r?t`
            display: block;
        `:e?t`
            display: inline;
        `:t`
            display: block;
        `)(r.inline,r.paragraph)}
    color: ${Yt.text};
`;var No;!function(e){const n=(e,t,n)=>{const i=r(e).attrs((({inline:e})=>({as:e?"span":void 0})))`
            ${e=>Io(t,e)}
        `;return i.displayName=`Typography.${n}`,i};e.HeaderXXL=n("h1","header-xxl","HeaderXXL"),e.HeaderXL=n("h2","header-xl","HeaderXL"),e.HeaderLG=n("h3","header-lg","HeaderLG"),e.HeaderMD=n("h4","header-md","HeaderMD"),e.HeaderSM=n("h5","header-sm","HeaderSM"),e.HeaderXS=n("h6","header-xs","HeaderXS");const i=(e,t)=>{const n=r.p.attrs((({inline:e})=>({as:e?"span":void 0})))`
            ${r=>Io(e,r)}
        `;return n.displayName=`Typography.${t}`,n};e.BodyBL=i("body-baseline","BodyBL"),e.BodyMD=i("body-md","BodyMD"),e.BodySM=i("body-sm","BodySM"),e.BodyXS=i("body-xs","BodyXS");const o=(e,n)=>{const i=r.a`
            ${r=>t`
                ${To(e,r.weight||"regular")}
                color: ${Yt.hyperlink};
                text-decoration: none;

                :hover,
                :active,
                :focus {
                    color: ${Yt["text-hover"]};
                }
            `}
        `,o=e=>{var{external:r=!1,children:t}=e,n=F(e,["external","children"]);return s(i,Object.assign({},n,{children:[t,r&&a(Ho,{})]}))};return o.displayName=`Typography.${n}`,o};e.LinkBL=o("body-baseline","LinkBL"),e.LinkMD=o("body-md","LinkMD"),e.LinkSM=o("body-sm","LinkSM"),e.LinkXS=o("body-xs","LinkXS")}(No||(No={}));const Ho=r(v)`
    height: 1lh;
    width: 1em;
    margin-left: 0.4em;
    vertical-align: middle;
`,Ro=r.ul`
    display: flex;
    list-style: none;
    margin-left: ${Nt["spacing-64"]};
    flex-shrink: 0;

    ${Pt.MaxWidth.lg} {
        display: none;
    }
`,Po=r.ul`
    display: none;

    ${Pt.MaxWidth.lg} {
        display: flex;
        list-style: none;
        margin-left: ${Nt["spacing-64"]};
        flex-shrink: 0;
    }
`,Uo=r.ul`
    display: none;
    list-style: none;

    ${Pt.MaxWidth.lg} {
        display: flex;
        flex-direction: column;
        margin-top: ${Nt["spacing-40"]};
        width: max-content;
        min-width: 22rem;
        max-width: 24rem;
    }

    ${Pt.MaxWidth.sm} {
        width: 100%;
        max-width: unset;
        min-width: unset;
    }
`,Vo=r.li`
    position: relative;
    display: flex;
    align-items: center;

    :not(:last-of-type) {
        margin-right: ${Nt["spacing-16"]};
    }

    ${Pt.MaxWidth.lg} {
        width: 100%;
        padding: 0 0 0 ${Nt["spacing-16"]};
        justify-content: center;

        :not(:last-of-type) {
            margin-right: 0;
            margin-bottom: ${e=>e.$mobile?Nt["spacing-16"]:"0"};
        }
    }

    ${Pt.MaxWidth.sm} {
        ${e=>{if(e.$mobile)return t`
                    padding: 0 ${Nt["spacing-16"]};
                `}}
    }
`,Xo=r(Lo.Small)`
    ${Pt.MaxWidth.lg} {
        width: 100%;
    }
`,Jo=r.div`
    display: none;

    ${Pt.MaxWidth.lg} {
        display: flex;
        flex-direction: column;
        margin-top: ${Nt["spacing-40"]};
    }
`,Qo=r(No.BodyMD)`
    margin-bottom: ${Nt["spacing-8"]};
`,Zo=r.div`
    display: flex;
`,Go=r.a`
    :not(:last-child) {
        margin-right: ${Nt["spacing-16"]};
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
`,Ko=({actionButtons:e,mobile:r=!1,onActionButtonClick:t})=>{const n=e=>{e.stopPropagation()},i=e=>r=>{r.stopPropagation(),"download"===e.type&&window.scrollTo({left:0,top:document.body.scrollHeight,behavior:"smooth"}),t(r,e)},l=(e,r)=>{const t=e?(e=>{const r=Do(e,(e=>"download"===e.type));if(r>-1){const t=[...e],n=t.splice(r,1);return[...t,n[0]]}return e})(r):r;return t.map(((r,t)=>{let o;switch(r.type){case"download":o=e?(l=r.args,s(Jo,{children:[a(Qo,Object.assign({weight:"semibold"},{children:l&&l.children||"Download the app"})),s(Zo,{children:[a(Go,Object.assign({href:"https://apps.apple.com/sg/app/moments-of-life/id1383218758",target:"_blank",rel:"noopener noreferrer","data-testid":"button__app-store",onClick:n},{children:a("img",{src:"https://assets.life.gov.sg/react-design-system/img/download/apple-app-store.png",alt:"apple-app-store"})})),a(Go,Object.assign({href:"https://play.google.com/store/apps/details?id=sg.gov.app.mol&hl=en_SG",target:"_blank",rel:"noopener noreferrer","data-testid":"button__play-store",onClick:n},{children:a("img",{src:"https://assets.life.gov.sg/react-design-system/img/download/google-play-store.png",alt:"google-play-store"})}))]})]})):a(Xo,Object.assign({},r.args,{type:"button",onClick:i(r),"data-testid":"action-button__download"},{children:"Download the app"}));break;case"button":{const n=r.args["data-testid"]?`action-button__${r.args["data-testid"]}`:`action-button__button-${e?"mobile-":""}${t+1}`;o=a(Xo,Object.assign({},r.args,{type:"button",onClick:i(r),"data-testid":n}));break}case"component":{const e=r.args;o=e&&e.render||null;break}default:o=null}var l;if(o)return a(Vo,Object.assign({$mobile:e},{children:o}),`action-button-${t+1}`)}))};if(e){const t=(null==e?void 0:e.mobile)||e.desktop,n=t.filter((e=>!!e.uncollapsible)),i=t.filter((e=>!e.uncollapsible));return r?a(o,{children:i.length>0&&a(Uo,{children:l(r,i)})}):s(o,{children:[n.length>0&&a(Po,{children:l(!1,n)}),e.desktop.length>0&&a(Ro,{children:l(r,e.desktop)})]})}return a(o,{})},qo=r.ul`
    display: flex;
    flex-direction: column;
    position: absolute;
    left: 0;
    top: 100%;

    min-width: 15.625rem;
    width: 100%;
    max-height: 20rem;
    overflow: auto;

    padding: ${Nt["spacing-8"]} 0;

    background: ${Yt.bg};
    border-radius: ${Ht.md};
    box-shadow: 0px 2px 8px 0px
        rgb(from ${Yt.Primitive["neutral-50"]} r g b / 25%);
`,el=r.ul`
    display: none;
    list-style: none;

    ${Pt.MaxWidth.lg} {
        border-left: ${It["width-040"]} solid ${Yt["border-selected"]};
        display: flex;
        flex-direction: column;
    }
`,rl=r(No.LinkBL)`
    width: 100%;
    position: relative;
    text-align: left;
    color: ${Yt.text};

    margin: 0 ${Nt["spacing-8"]};

    // use border, as padding still shows an extra line after the ellipsis
    border: ${It.solid} transparent;
    border-width: ${Nt["spacing-12"]} ${Nt["spacing-8"]};

    border-radius: ${Ht.md};

    ${tl=2,t`
    display: -webkit-box;
    -webkit-line-clamp: ${tl};
    -webkit-box-orient: vertical;
    overflow: hidden;
`}
    white-space: pre-wrap;

    :hover,
    :active,
    :focus {
        background-color: ${Yt["bg-hover"]};
        color: ${Yt.text};
    }

    ${Pt.MaxWidth.lg} {
        ${Lt["body-md-regular"]}
    }
`;var tl;const nl=r.li`
    width: 100%;
    position: relative;
    display: flex;
    align-items: flex-start;
`,il=({items:e,mobile:r=!1,onItemClick:t})=>{const n=e=>r=>{r.stopPropagation(),t(r,e)},i=(r=!1)=>e.map(((e,t)=>{const{children:i,options:s}=e,o=F(e,["children","options"]),l=r?`link__mobile-${t+1}`:`link__${t+1}`;return a(nl,{children:a(rl,Object.assign({"data-testid":l},o,{onClick:n(e)},s,{children:i}))},t)}));if(e&&e.length>0){return a(r?el:qo,{children:i(r)})}return a(o,{})},al=r.ul`
    display: flex;
    list-style: none;
    position: relative;

    ${e=>e.$alignLeft&&"margin-right: auto;"}

    ${Pt.MaxWidth.lg} {
        display: none;
    }
`,sl=r.ul`
    display: none;
    list-style: none;

    ${Pt.MaxWidth.lg} {
        display: flex;
        flex-direction: column;
        overflow: hidden;
    }
`,ol=r.li`
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
`,ll=r(No.LinkMD)`
    display: flex;
    position: relative;
    align-items: center;
    text-align: center;
    color: ${Yt.text};
    height: 100%;
    padding: 0 0.5rem;

    :active,
    :focus,
    :hover {
        color: ${e=>e.$selected?Yt["text-selected-hover"]:Yt["text-hover"]};
    }

    ${Pt.MaxWidth.lg} {
        width: 100%;
        padding: 0.5rem 1rem;
        text-align: left;
        align-items: flex-start;
    }
`,dl=r.div`
    flex: 1;
    margin-top: 0.25rem;

    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 3;
    white-space: pre-wrap;
`,cl=r.div`
    position: absolute;
    bottom: 0;
    height: 0.25rem;
    left: 0.5rem;
    right: 0.5rem;
    background-color: ${Yt["border-selected"]};

    :hover {
        ${e=>e.$selected&&Yt["border-selected-hover"]};
    }

    ${Pt.MaxWidth.lg} {
        left: 0;
        right: unset;
        top: 0;
        bottom: 0;
        height: 100%;
        width: 0.25rem;
    }
`,ul=r.div`
    padding-left: 0.5rem;
    margin-right: -0.5rem;
`,hl=r(Vt)`
    padding: 0.5rem;
    transform: rotate(${e=>e.$selected?0:180}deg);
    transition: transform 300ms ease-in-out;
    margin: auto 0.25rem auto 0;
`,gl=r(w)`
    height: 1.25rem;
    width: 1.25rem;
    color: ${Yt.icon};
    :hover {
        ${e=>e.$selected?Yt["icon-selected-hover"]:Yt["icon-hover"]};
    }
`,ml=({items:e,selectedId:r,mobile:t=!1,hideNavBranding:n,onItemClick:i})=>{const[l,h]=c(-1),[g,m]=c(!1),b=u(null);d((()=>{const e=e=>{b.current&&!b.current.contains(e.target)&&f()};return document.addEventListener("click",e,!0),()=>{document.removeEventListener("click",e,!0)}}),[]);const f=()=>{m(!1)},p=(e,r)=>t=>{t.stopPropagation(),h(r),m(!0),i(t,e)},y=(e,r)=>{e.stopPropagation(),i(e,r),m(!1)},x=()=>e.map(((e,i)=>{if("component"===e.itemType){const r=e&&e.children||null;return a("li",{children:r},i)}{const o=(e=>{if(e.id===r)return!0;if((null==e?void 0:e.subMenu)&&e.subMenu.length>=1)return!!e.subMenu.find((e=>e.id===r));return!1})(e),{children:d,options:c}=e,u=F(e,["children","options"]),h=o?t?"bold":"semibold":"regular",m=t?`link__mobile-${i+1}`:`link__${i+1}`,b=l>=0&&l===i&&g;return s(ol,Object.assign({$hiddenBranding:n},{children:[s(ll,Object.assign({"data-testid":m,weight:h,$selected:o},u,{onClick:p(e,i)},c,{children:[a(dl,{children:d}),o&&a(cl,{"data-testid":`${m}-indicator`,$selected:o}),t&&e.subMenu&&a(ul,{children:a(hl,Object.assign({"data-testid":`${m}-expand-collapse-button`,$selected:b,focusHighlight:!1,focusOutline:"browser","aria-label":b?"Collapse":"Expand"},{children:a(gl,{$selected:o})}))})]})),b&&a(il,{items:e.subMenu,mobile:t,onItemClick:y})]}),i)}}));return e&&e.length>0?t?a(sl,Object.assign({ref:b},{children:x()})):a(al,Object.assign({ref:b,$alignLeft:n},{children:x()})):a(o,{})},bl={primary:{brandName:"LifeSG",logoSrc:"https://assets.life.gov.sg/lifesg/logo-lifesg.svg"}},fl={primary:{brandName:"BookingSG",logoSrc:"https://www.booking.gov.sg/logo.svg"}},pl={primary:{brandName:"MyLegacy",logoSrc:"https://assets.life.gov.sg/ccube/logo-ccube.svg"}},yl={primary:{brandName:"CCube",logoSrc:"https://mylegacy.life.gov.sg/images/site-logo.png"}},xl=h(((e,r)=>{var{items:t,className:i,id:l,selectedId:h,compress:m=!1,fixed:b=!0,resources:f,hideNavElements:p=!1,hideNavBranding:y=!1,drawerDismissalExclusions:x=[],actionButtons:v,onItemClick:w,onActionButtonClick:$,onBrandClick:C,masthead:E=!0,layout:D="default"}=e,B=F(e,["items","className","id","selectedId","compress","fixed","resources","hideNavElements","hideNavBranding","drawerDismissalExclusions","actionButtons","onItemClick","onActionButtonClick","onBrandClick","masthead","layout"]);const[A,k]=c(!1),[M,S]=c(!1),z="stretch"===D,O=u(),_=n(),j=(e=>{switch(e){case"bookingsg":return fl;case"mylegacy":return yl;case"ccube":return pl;default:return bl}})(null==_?void 0:_.resourceScheme),W=Rt["lg-max"]({theme:_}),Y=(null==f?void 0:f.primary)||j.primary,L=null==f?void 0:f.secondary;g(r,(()=>Object.assign(O.current,{dismissDrawer:()=>{T()}})),[A]),d((()=>(N(),window.addEventListener("resize",N),()=>{window.removeEventListener("resize",N)})),[]);const T=()=>{k(!1),setTimeout((()=>{S(!1)}),550)},I=e=>A&&-1===x.indexOf(e),N=()=>{window.innerWidth<=W&&A&&T()},H=(e,r)=>{C&&(e.preventDefault(),C(r)),I("brand-click")&&T()},R=(e,r)=>{r.onClick?r.onClick(e):w&&(e.preventDefault(),w(r)),!(null==r?void 0:r.subMenu)&&I("item-click")&&T()},P=(e,r)=>{r.args&&r.args.onClick?r.args.onClick(e):$&&(e.preventDefault(),$(r)),I("item-click")&&T()},U=()=>{k(!0),S(!0)},V=()=>{I("close-button-click")&&T()},X=()=>{const e=t.mobile||t.desktop;return e&&e.length>0||v&&(()=>{const e=v.mobile||v.desktop;return!!e&&e.length&&e.some((e=>!e.uncollapsible))})()?a(Gt,Object.assign({"aria-label":"Open nav menu","data-testid":"button__mobile-menu",onClick:U,focusHighlight:!1},{children:a(Kt,{})})):null};return s(Jt,Object.assign({ref:O,$fixed:b,className:i,id:l||"navbar-wrapper","data-testid":B["data-testid"]||"navbar-wrapper"},{children:[E&&a(un,{}),s(dn.Content,Object.assign({stretch:z},{children:[s(Qt,Object.assign({$compress:m},{children:[!y&&s(qt,Object.assign({$compress:m,"data-id":"brand-container"},{children:[a(Vn,{resources:Y,onClick:H,"data-id":"brand-primary","data-testid":"main__brand",type:"primary"}),L&&s(o,{children:[a(en,{$compress:m}),a(Vn,{resources:L,onClick:H,"data-id":"brand-secondary","data-testid":"main__brand-secondary",type:"secondary"})]})]})),!p&&s(Zt,Object.assign({$hideNavBranding:y},{children:[a(ml,{items:t.desktop,onItemClick:R,selectedId:h,hideNavBranding:y}),a(Ko,{actionButtons:v,onActionButtonClick:P}),X()]}))]})),!p&&a(Nn,Object.assign({show:M,enableOverlayClick:!0,onOverlayClick:V},{children:s(qn,Object.assign({show:A,resources:{primary:Y,secondary:L},onClose:V,onBrandClick:H,actionButtons:v,hideNavBranding:y},{children:[a(ml,{items:t.mobile||t.desktop,onItemClick:R,selectedId:h,mobile:!0}),a(Ko,{actionButtons:v,onActionButtonClick:P,mobile:!0})]}))}))]}))]}))})),vl=Xt,wl=3.5;export{xl as Navbar,vl as NavbarHeight,wl as NavbarMobileHeight};
//# sourceMappingURL=index.js.map
