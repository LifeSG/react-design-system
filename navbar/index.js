import{MenuIcon as e}from"@lifesg/react-icons/menu";import r,{css as n,useTheme as t,keyframes as i}from"styled-components";import{jsx as a,jsxs as s,Fragment as o}from"react/jsx-runtime";import l,{useEffect as d,useState as c,useRef as u,forwardRef as g,useImperativeHandle as h}from"react";import{useFloatingTree as m,FloatingTree as b,useFloatingNodeId as f,FloatingNode as p}from"@floating-ui/react";import y from"react-dom";import{CrossIcon as x}from"@lifesg/react-icons/cross";import{ExternalIcon as v}from"@lifesg/react-icons/external";import{ChevronUpIcon as F}from"@lifesg/react-icons/chevron-up";function w(e,r){var n={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&r.indexOf(t)<0&&(n[t]=e[t]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(t=Object.getOwnPropertySymbols(e);i<t.length;i++)r.indexOf(t[i])<0&&Object.prototype.propertyIsEnumerable.call(e,t[i])&&(n[t[i]]=e[t[i]])}return n}"function"==typeof SuppressedError&&SuppressedError;var $="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};function C(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var E=Array.isArray,D="object"==typeof $&&$&&$.Object===Object&&$,B=D,A="object"==typeof self&&self&&self.Object===Object&&self,k=B||A||Function("return this")(),M=k.Symbol,S=M,z=Object.prototype,_=z.hasOwnProperty,O=z.toString,j=S?S.toStringTag:void 0;var W=function(e){var r=_.call(e,j),n=e[j];try{e[j]=void 0;var t=!0}catch(e){}var i=O.call(e);return t&&(r?e[j]=n:delete e[j]),i},Y=Object.prototype.toString;var L=W,I=function(e){return Y.call(e)},T=M?M.toStringTag:void 0;var N=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":T&&T in Object(e)?L(e):I(e)};var H=function(e){return null!=e&&"object"==typeof e},R=N,P=H;var U=function(e){return"symbol"==typeof e||P(e)&&"[object Symbol]"==R(e)},V=E,X=U,J=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,Q=/^\w*$/;var Z=function(e,r){if(V(e))return!1;var n=typeof e;return!("number"!=n&&"symbol"!=n&&"boolean"!=n&&null!=e&&!X(e))||(Q.test(e)||!J.test(e)||null!=r&&e in Object(r))};var G=function(e){var r=typeof e;return null!=e&&("object"==r||"function"==r)},K=N,q=G;var ee,re=function(e){if(!q(e))return!1;var r=K(e);return"[object Function]"==r||"[object GeneratorFunction]"==r||"[object AsyncFunction]"==r||"[object Proxy]"==r},ne=k["__core-js_shared__"],te=(ee=/[^.]+$/.exec(ne&&ne.keys&&ne.keys.IE_PROTO||""))?"Symbol(src)_1."+ee:"";var ie=function(e){return!!te&&te in e},ae=Function.prototype.toString;var se=function(e){if(null!=e){try{return ae.call(e)}catch(e){}try{return e+""}catch(e){}}return""},oe=re,le=ie,de=G,ce=se,ue=/^\[object .+?Constructor\]$/,ge=Function.prototype,he=Object.prototype,me=ge.toString,be=he.hasOwnProperty,fe=RegExp("^"+me.call(be).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");var pe=function(e,r){return null==e?void 0:e[r]},ye=function(e){return!(!de(e)||le(e))&&(oe(e)?fe:ue).test(ce(e))},xe=pe;var ve=function(e,r){var n=xe(e,r);return ye(n)?n:void 0},Fe=ve(Object,"create"),we=Fe;var $e=function(){this.__data__=we?we(null):{},this.size=0};var Ce=function(e){var r=this.has(e)&&delete this.__data__[e];return this.size-=r?1:0,r},Ee=Fe,De=Object.prototype.hasOwnProperty;var Be=function(e){var r=this.__data__;if(Ee){var n=r[e];return"__lodash_hash_undefined__"===n?void 0:n}return De.call(r,e)?r[e]:void 0},Ae=Fe,ke=Object.prototype.hasOwnProperty;var Me=function(e){var r=this.__data__;return Ae?void 0!==r[e]:ke.call(r,e)},Se=Fe;var ze=function(e,r){var n=this.__data__;return this.size+=this.has(e)?0:1,n[e]=Se&&void 0===r?"__lodash_hash_undefined__":r,this},_e=$e,Oe=Ce,je=Be,We=Me,Ye=ze;function Le(e){var r=-1,n=null==e?0:e.length;for(this.clear();++r<n;){var t=e[r];this.set(t[0],t[1])}}Le.prototype.clear=_e,Le.prototype.delete=Oe,Le.prototype.get=je,Le.prototype.has=We,Le.prototype.set=Ye;var Ie=Le;var Te=function(){this.__data__=[],this.size=0};var Ne=function(e,r){return e===r||e!=e&&r!=r},He=Ne;var Re=function(e,r){for(var n=e.length;n--;)if(He(e[n][0],r))return n;return-1},Pe=Re,Ue=Array.prototype.splice;var Ve=function(e){var r=this.__data__,n=Pe(r,e);return!(n<0)&&(n==r.length-1?r.pop():Ue.call(r,n,1),--this.size,!0)},Xe=Re;var Je=function(e){var r=this.__data__,n=Xe(r,e);return n<0?void 0:r[n][1]},Qe=Re;var Ze=function(e){return Qe(this.__data__,e)>-1},Ge=Re;var Ke=function(e,r){var n=this.__data__,t=Ge(n,e);return t<0?(++this.size,n.push([e,r])):n[t][1]=r,this},qe=Te,er=Ve,rr=Je,nr=Ze,tr=Ke;function ir(e){var r=-1,n=null==e?0:e.length;for(this.clear();++r<n;){var t=e[r];this.set(t[0],t[1])}}ir.prototype.clear=qe,ir.prototype.delete=er,ir.prototype.get=rr,ir.prototype.has=nr,ir.prototype.set=tr;var ar=ir,sr=ve(k,"Map"),or=Ie,lr=ar,dr=sr;var cr=function(e){var r=typeof e;return"string"==r||"number"==r||"symbol"==r||"boolean"==r?"__proto__"!==e:null===e};var ur=function(e,r){var n=e.__data__;return cr(r)?n["string"==typeof r?"string":"hash"]:n.map},gr=ur;var hr=function(e){var r=gr(this,e).delete(e);return this.size-=r?1:0,r},mr=ur;var br=function(e){return mr(this,e).get(e)},fr=ur;var pr=function(e){return fr(this,e).has(e)},yr=ur;var xr=function(e,r){var n=yr(this,e),t=n.size;return n.set(e,r),this.size+=n.size==t?0:1,this},vr=function(){this.size=0,this.__data__={hash:new or,map:new(dr||lr),string:new or}},Fr=hr,wr=br,$r=pr,Cr=xr;function Er(e){var r=-1,n=null==e?0:e.length;for(this.clear();++r<n;){var t=e[r];this.set(t[0],t[1])}}Er.prototype.clear=vr,Er.prototype.delete=Fr,Er.prototype.get=wr,Er.prototype.has=$r,Er.prototype.set=Cr;var Dr=Er,Br=Dr;function Ar(e,r){if("function"!=typeof e||null!=r&&"function"!=typeof r)throw new TypeError("Expected a function");var n=function(){var t=arguments,i=r?r.apply(this,t):t[0],a=n.cache;if(a.has(i))return a.get(i);var s=e.apply(this,t);return n.cache=a.set(i,s)||a,s};return n.cache=new(Ar.Cache||Br),n}Ar.Cache=Br;var kr=Ar;var Mr=function(e){var r=kr(e,(function(e){return 500===n.size&&n.clear(),e})),n=r.cache;return r},Sr=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,zr=/\\(\\)?/g,_r=Mr((function(e){var r=[];return 46===e.charCodeAt(0)&&r.push(""),e.replace(Sr,(function(e,n,t,i){r.push(t?i.replace(zr,"$1"):n||e)})),r}));var Or=function(e,r){for(var n=-1,t=null==e?0:e.length,i=Array(t);++n<t;)i[n]=r(e[n],n,e);return i},jr=E,Wr=U,Yr=M?M.prototype:void 0,Lr=Yr?Yr.toString:void 0;var Ir=function e(r){if("string"==typeof r)return r;if(jr(r))return Or(r,e)+"";if(Wr(r))return Lr?Lr.call(r):"";var n=r+"";return"0"==n&&1/r==-1/0?"-0":n},Tr=Ir;var Nr=E,Hr=Z,Rr=_r,Pr=function(e){return null==e?"":Tr(e)};var Ur=function(e,r){return Nr(e)?e:Hr(e,r)?[e]:Rr(Pr(e))},Vr=U;var Xr=function(e){if("string"==typeof e||Vr(e))return e;var r=e+"";return"0"==r&&1/e==-1/0?"-0":r},Jr=Ur,Qr=Xr;var Zr=function(e,r){for(var n=0,t=(r=Jr(r,e)).length;null!=e&&n<t;)e=e[Qr(r[n++])];return n&&n==t?e:void 0},Gr=Zr;var Kr=function(e,r,n){var t=null==e?void 0:Gr(e,r);return void 0===t?n:t},qr=C(Kr);const en=(e,r,n)=>qr(n,r)||qr(e,r),rn=(e,r)=>{const n=r||e.defaultValue;return qr(e.collections,n)},nn={collections:{default:{"width-005":.5,"width-010":1,"width-020":2,"width-040":4,solid:"solid"}},defaultValue:"default"},tn=e=>r=>{var n;const t=r.theme,i=rn(nn,null==t?void 0:t.borderScheme);return(null===(n=null==t?void 0:t.overrides)||void 0===n?void 0:n.border)?`${en(i,e,t.overrides.border)}px`:`${i[e]}px`},an={"width-005":tn("width-005"),"width-010":tn("width-010"),"width-020":tn("width-020"),"width-040":tn("width-040"),solid:(sn="solid",e=>{var r;const n=e.theme,t=rn(nn,null==n?void 0:n.borderScheme),i=(null===(r=null==n?void 0:n.overrides)||void 0===r?void 0:r.border)?en(t,sn,n.overrides.border):t[sn];return"function"==typeof i?i(e):i})};var sn;const on={collections:{lifesg:{"brand-10":"#2C0C0B","brand-20":"#4C1513","brand-30":"#6C1D1B","brand-40":"#922825","brand-50":"#BF3431","brand-60":"#F15D5A","brand-70":"#F69491","brand-80":"#FABAB7","brand-90":"#FCD7D2","brand-95":"#FFEBE7","brand-100":"#FFF6F4","primary-10":"#001731","primary-20":"#002752","primary-30":"#003874","primary-40":"#004D9F","primary-50":"#1768BE","primary-60":"#3C91EC","primary-70":"#6CB4FF","primary-80":"#A5CDFF","primary-90":"#CFE1FE","primary-95":"#E8F0FE","primary-100":"#F7F9FF","secondary-10":"#131529","secondary-20":"#222547","secondary-30":"#2F3565","secondary-40":"#42498B","secondary-50":"#5B62A7","secondary-60":"#858CBD","secondary-70":"#A8ADCF","secondary-80":"#C6C9E0","secondary-90":"#DDDFEC","secondary-95":"#EDEEF5","secondary-100":"#F8F8FB","neutral-10":"#161616","neutral-20":"#282828","neutral-30":"#393939","neutral-40":"#4E4E4E","neutral-50":"#686868","neutral-60":"#8E8E8E","neutral-70":"#AFAFB0","neutral-80":"#C7CACA","neutral-90":"#DDE1E2","neutral-95":"#EDEFEF","neutral-100":"#F9F9F9","success-10":"#081A0F","success-20":"#0E2D1B","success-30":"#154126","success-40":"#1C5A34","success-50":"#257645","success-60":"#44A068","success-70":"#64C189","success-80":"#80DCA5","success-90":"#B4ECCB","success-95":"#D5F6E2","success-100":"#EFFCF4","warning-10":"#221302","warning-20":"#3B2204","warning-30":"#543106","warning-40":"#744408","warning-50":"#98590C","warning-60":"#D07A13","warning-70":"#E4A244","warning-80":"#F5C26C","warning-90":"#FADBA6","warning-95":"#FCECD4","warning-100":"#FDF7F0","error-10":"#330505","error-20":"#550808","error-30":"#750C0C","error-40":"#9E130F","error-50":"#CB2213","error-60":"#DE6C6C","error-70":"#E89B9B","error-80":"#EFBEBE","error-90":"#F5D9D9","error-95":"#F9ECEC","error-100":"#FCF7F7","info-10":"#021824","info-20":"#032B3F","info-30":"#053D59","info-40":"#065478","info-50":"#176E9B","info-60":"#5296BE","info-70":"#82B5DA","info-80":"#ACCFE7","info-90":"#CCE3F1","info-95":"#E3F1F8","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000","primary-inverse":"#FEAB10"},bookingsg:{"brand-10":"#2C0C0B","brand-20":"#4C1513","brand-30":"#6C1D1B","brand-40":"#922825","brand-50":"#BF3431","brand-60":"#F15D5A","brand-70":"#F69491","brand-80":"#FABAB7","brand-90":"#FCD7D2","brand-95":"#FFEBE7","brand-100":"#FFF6F4","primary-10":"#1A122C","primary-20":"#2F1F4D","primary-30":"#422D6E","primary-40":"#5B3D97","primary-50":"#7654BC","primary-60":"#9A82CD","primary-70":"#B7A7D8","primary-80":"#CFC5E5","primary-90":"#E3DDF0","primary-95":"#F0EDF7","primary-100":"#F9F8FC","secondary-10":"#0E1723","secondary-20":"#18293D","secondary-30":"#233A57","secondary-40":"#305078","secondary-50":"#4B6A8F","secondary-60":"#7B91A9","secondary-70":"#A1B1C3","secondary-80":"#C1CBD7","secondary-90":"#DBE1E8","secondary-95":"#EBEFF2","secondary-100":"#F7F8FA","neutral-10":"#161616","neutral-20":"#282828","neutral-30":"#393939","neutral-40":"#4E4E4E","neutral-50":"#686868","neutral-60":"#8E8E8E","neutral-70":"#AFAFB0","neutral-80":"#C7CACA","neutral-90":"#DDE1E2","neutral-95":"#EDEFEF","neutral-100":"#F9F9F9","success-10":"#081A0F","success-20":"#0E2D1B","success-30":"#154126","success-40":"#1C5A34","success-50":"#257645","success-60":"#44A068","success-70":"#64C189","success-80":"#80DCA5","success-90":"#B4ECCB","success-95":"#D5F6E2","success-100":"#EFFCF4","warning-10":"#221302","warning-20":"#3B2204","warning-30":"#543106","warning-40":"#744408","warning-50":"#98590C","warning-60":"#D07A13","warning-70":"#E4A244","warning-80":"#F5C26C","warning-90":"#FADBA6","warning-95":"#FCECD4","warning-100":"#FDF7F0","error-10":"#330505","error-20":"#550808","error-30":"#750C0C","error-40":"#9E130F","error-50":"#CB2213","error-60":"#DE6C6C","error-70":"#E89B9B","error-80":"#EFBEBE","error-90":"#F5D9D9","error-95":"#F9ECEC","error-100":"#FCF7F7","info-10":"#021824","info-20":"#032B3F","info-30":"#053D59","info-40":"#065478","info-50":"#176E9B","info-60":"#5296BE","info-70":"#82B5DA","info-80":"#ACCFE7","info-90":"#CCE3F1","info-95":"#E3F1F8","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000","primary-inverse":"#FEAB10"},rbs:{"brand-10":"#0E123A","brand-20":"#191E65","brand-30":"#232B90","brand-40":"#303BC5","brand-50":"#494CFF","brand-60":"#AD6EFF","brand-70":"#AEA4FF","brand-80":"#C5C4FF","brand-90":"#DDDCFF","brand-95":"#EDECFF","brand-100":"#F8F8FF","primary-10":"#10152B","primary-20":"#1C254B","primary-30":"#28356C","primary-40":"#38489A","primary-50":"#4D5AD7","primary-60":"#7487F2","primary-70":"#9AAAFC","primary-80":"#BDC7FD","primary-90":"#DADFFB","primary-95":"#ECEEFE","primary-100":"#F7F8FF","secondary-10":"#19151D","secondary-20":"#2B2533","secondary-30":"#3E3649","secondary-40":"#564A64","secondary-50":"#6F637D","secondary-60":"#948B9F","secondary-70":"#B3ACBB","secondary-80":"#CCC8D2","secondary-90":"#E1DEE4","secondary-95":"#EFEEF1","secondary-100":"#F9F8F9","neutral-10":"#161616","neutral-20":"#282828","neutral-30":"#393939","neutral-40":"#4E4E4E","neutral-50":"#686868","neutral-60":"#8E8E8E","neutral-70":"#AFAFB0","neutral-80":"#C7CACA","neutral-90":"#DDE1E2","neutral-95":"#EDEFEF","neutral-100":"#F9F9F9","success-10":"#081A0F","success-20":"#0E2D1B","success-30":"#154126","success-40":"#1C5A34","success-50":"#257645","success-60":"#44A068","success-70":"#64C189","success-80":"#80DCA5","success-90":"#B4ECCB","success-95":"#D5F6E2","success-100":"#EFFCF4","warning-10":"#221302","warning-20":"#3B2204","warning-30":"#543106","warning-40":"#744408","warning-50":"#98590C","warning-60":"#D07A13","warning-70":"#E4A244","warning-80":"#F5C26C","warning-90":"#FADBA6","warning-95":"#FCECD4","warning-100":"#FDF7F0","error-10":"#330505","error-20":"#550808","error-30":"#750C0C","error-40":"#9E130F","error-50":"#CB2213","error-60":"#DE6C6C","error-70":"#E89B9B","error-80":"#EFBEBE","error-90":"#F5D9D9","error-95":"#F9ECEC","error-100":"#FCF7F7","info-10":"#021824","info-20":"#032B3F","info-30":"#053D59","info-40":"#065478","info-50":"#176E9B","info-60":"#5296BE","info-70":"#82B5DA","info-80":"#ACCFE7","info-90":"#CCE3F1","info-95":"#E3F1F8","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000","primary-inverse":"#FEAB10"},mylegacy:{"brand-10":"#2C0C0B","brand-20":"#4C1513","brand-30":"#6C1D1B","brand-40":"#922825","brand-50":"#BF3431","brand-60":"#F15D5A","brand-70":"#F69491","brand-80":"#FABAB7","brand-90":"#FCD7D2","brand-95":"#FFEBE7","brand-100":"#FFF6F4","primary-10":"#0011924","primary-20":"#032B40","primary-30":"#043D5A","primary-40":"#05547B","primary-50":"#096EA1","primary-60":"#2098D3","primary-70":"#5CB9E8","primary-80":"#8BD3F6","primary-90":"#BEE6FA","primary-95":"#E2F2FA","primary-100":"#F4FAFC","secondary-10":"#131529","secondary-20":"#222547","secondary-30":"#2F3565","secondary-40":"#42498B","secondary-50":"#5B62A7","secondary-60":"#858CBD","secondary-70":"#A8ADCF","secondary-80":"#C6C9E0","secondary-90":"#DDDFEC","secondary-95":"#EDEEF5","secondary-100":"#F8F8FB","neutral-10":"#161616","neutral-20":"#282828","neutral-30":"#393939","neutral-40":"#4E4E4E","neutral-50":"#686868","neutral-60":"#8E8E8E","neutral-70":"#AFAFB0","neutral-80":"#C7CACA","neutral-90":"#DDE1E2","neutral-95":"#EDEFEF","neutral-100":"#F9F9F9","success-10":"#081A0F","success-20":"#0E2D1B","success-30":"#154126","success-40":"#1C5A34","success-50":"#257645","success-60":"#44A068","success-70":"#64C189","success-80":"#80DCA5","success-90":"#B4ECCB","success-95":"#D5F6E2","success-100":"#EFFCF4","warning-10":"#221302","warning-20":"#3B2204","warning-30":"#543106","warning-40":"#744408","warning-50":"#98590C","warning-60":"#D07A13","warning-70":"#E4A244","warning-80":"#F5C26C","warning-90":"#FADBA6","warning-95":"#FCECD4","warning-100":"#FDF7F0","error-10":"#330505","error-20":"#550808","error-30":"#750C0C","error-40":"#9E130F","error-50":"#CB2213","error-60":"#DE6C6C","error-70":"#E89B9B","error-80":"#EFBEBE","error-90":"#F5D9D9","error-95":"#F9ECEC","error-100":"#FCF7F7","info-10":"#021824","info-20":"#032B3F","info-30":"#053D59","info-40":"#065478","info-50":"#176E9B","info-60":"#5296BE","info-70":"#82B5DA","info-80":"#ACCFE7","info-90":"#CCE3F1","info-95":"#E3F1F8","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000","primary-inverse":"#FEAB10"},ccube:{"brand-10":"#1F1221","brand-20":"#371F3B","brand-30":"#4E2C53","brand-40":"#6B3E73","brand-50":"#8D5197","brand-60":"#FF3399","brand-70":"#FF88C4","brand-80":"#FFB3D9","brand-90":"#FFD4E9","brand-95":"#FFE8F3","brand-100":"#FFD6EB","primary-10":"#1F1221","primary-20":"#371F3B","primary-30":"#4E2C53","primary-40":"#6B3E73","primary-50":"#8D5197","primary-60":"#B07DB7","primary-70":"#C7A3CC","primary-80":"#D9C2DD","primary-90":"#E9DBEB","primary-95":"#F3ECF4","primary-100":"#FAF7FA","secondary-10":"#2D091B","secondary-20":"#4D0F2E","secondary-30":"#6B1540","secondary-40":"#931D58","secondary-50":"#C02673","secondary-60":"#FF409F","secondary-70":"#FF88C4","secondary-80":"#FFB3D9","secondary-90":"#FFD4E9","secondary-95":"#FFE8F3","secondary-100":"#FFF8FC","neutral-10":"#161616","neutral-20":"#282828","neutral-30":"#393939","neutral-40":"#4E4E4E","neutral-50":"#686868","neutral-60":"#8E8E8E","neutral-70":"#AFAFB0","neutral-80":"#C7CACA","neutral-90":"#DDE1E2","neutral-95":"#EDEFEF","neutral-100":"#F9F9F9","success-10":"#081A0F","success-20":"#0E2D1B","success-30":"#154126","success-40":"#1C5A34","success-50":"#257645","success-60":"#44A068","success-70":"#64C189","success-80":"#80DCA5","success-90":"#B4ECCB","success-95":"#D5F6E2","success-100":"#EFFCF4","warning-10":"#221302","warning-20":"#3B2204","warning-30":"#543106","warning-40":"#744408","warning-50":"#98590C","warning-60":"#D07A13","warning-70":"#E4A244","warning-80":"#F5C26C","warning-90":"#FADBA6","warning-95":"#FCECD4","warning-100":"#FDF7F0","error-10":"#330505","error-20":"#550808","error-30":"#750C0C","error-40":"#9E130F","error-50":"#CB2213","error-60":"#DE6C6C","error-70":"#E89B9B","error-80":"#EFBEBE","error-90":"#F5D9D9","error-95":"#F9ECEC","error-100":"#FCF7F7","info-10":"#021824","info-20":"#032B3F","info-30":"#053D59","info-40":"#065478","info-50":"#176E9B","info-60":"#5296BE","info-70":"#82B5DA","info-80":"#ACCFE7","info-90":"#CCE3F1","info-95":"#E3F1F8","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000","primary-inverse":"#FEAB10"},oneservice:{"brand-10":"#001A19","brand-20":"#002D2B","brand-30":"#00413D","brand-40":"#005954","brand-50":"#00756F","brand-60":"#03A098","brand-70":"#55BFBA","brand-80":"#92D6D2","brand-90":"#BFE7E5","brand-95":"#DDF2F1","brand-100":"#F4FBFA","primary-10":"#09191D","primary-20":"#102B34","primary-30":"#173D49","primary-40":"#205666","primary-50":"#2A7086","primary-60":"#2A7086","primary-70":"#8CB6C2","primary-80":"#B2CED6","primary-90":"#D1E2E7","primary-95":"#E8F0F3","primary-100":"#F9F8FC","secondary-10":"#001731","secondary-20":"#002752","secondary-30":"#003874","secondary-40":"#004D9F","secondary-50":"#5B62A7","secondary-60":"#858CBD","secondary-70":"#A8ADCF","secondary-80":"#C6C9E0","secondary-90":"#DDDFEC","secondary-95":"#EDEEF5","secondary-100":"#F8F8FB","neutral-10":"#161616","neutral-20":"#282828","neutral-30":"#393939","neutral-40":"#4E4E4E","neutral-50":"#686868","neutral-60":"#8E8E8E","neutral-70":"#AFAFB0","neutral-80":"#C7CACA","neutral-90":"#DDE1E2","neutral-95":"#EDEFEF","neutral-100":"#F9F9F9","success-10":"#081A0F","success-20":"#0E2D1B","success-30":"#154126","success-40":"#1C5A34","success-50":"#257645","success-60":"#44A068","success-70":"#64C189","success-80":"#80DCA5","success-90":"#B4ECCB","success-95":"#D5F6E2","success-100":"#EFFCF4","warning-10":"#221302","warning-20":"#3B2204","warning-30":"#543106","warning-40":"#744408","warning-50":"#98590C","warning-60":"#D07A13","warning-70":"#E4A244","warning-80":"#F5C26C","warning-90":"#FADBA6","warning-95":"#FCECD4","warning-100":"#FDF7F0","error-10":"#330505","error-20":"#550808","error-30":"#750C0C","error-40":"#9E130F","error-50":"#CB2213","error-60":"#DE6C6C","error-70":"#E89B9B","error-80":"#EFBEBE","error-90":"#F5D9D9","error-95":"#F9ECEC","error-100":"#FCF7F7","info-10":"#021824","info-20":"#032B3F","info-30":"#053D59","info-40":"#065478","info-50":"#176E9B","info-60":"#5296BE","info-70":"#82B5DA","info-80":"#ACCFE7","info-90":"#CCE3F1","info-95":"#E3F1F8","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000","primary-inverse":"#FEAB10"},pa:{"brand-10":"#881317","brand-20":"#B5191E","brand-30":"#B5040A","brand-40":"#D0333F","brand-50":"#DC666F","brand-60":"#E28087","brand-70":"#E7999F","brand-80":"#EDB3B7","brand-90":"#F3CCCF","brand-95":"#F9E6E7","brand-100":"#FCF2F3","primary-10":"#000000","primary-20":"#191919","primary-30":"#333333","primary-40":"#4D4D4D","primary-50":"#666666","primary-60":"#808080","primary-70":"#999999","primary-80":"#B3B3B3","primary-90":"#E6E6E6","primary-95":"#F7F7F7","primary-100":"#FFFFFF","secondary-10":"#19151D","secondary-20":"#2B2533","secondary-30":"#3E3649","secondary-40":"#564A64","secondary-50":"#6F637D","secondary-60":"#948B9F","secondary-70":"#B3ACBB","secondary-80":"#CCC8D2","secondary-90":"#E1DEE4","secondary-95":"#EFEEF1","secondary-100":"#F9F8F9","neutral-10":"#000000","neutral-20":"#191919","neutral-30":"#333333","neutral-40":"#4D4D4D","neutral-50":"#666666","neutral-60":"#808080","neutral-70":"#999999","neutral-80":"#B3B3B3","neutral-90":"#E6E6E6","neutral-95":"#F7F7F7","neutral-100":"#FFFFFF","success-10":"#081A0F","success-20":"#0E2D1B","success-30":"#154126","success-40":"#1C5A34","success-50":"#257645","success-60":"#44A068","success-70":"#64C189","success-80":"#80DCA5","success-90":"#B4ECCB","success-95":"#D5F6E2","success-100":"#EFFCF4","warning-10":"#221302","warning-20":"#3B2204","warning-30":"#543106","warning-40":"#744408","warning-50":"#98590C","warning-60":"#D07A13","warning-70":"#E4A244","warning-80":"#F5C26C","warning-90":"#FADBA6","warning-95":"#FCECD4","warning-100":"#FDF7F0","error-10":"#330505","error-20":"#550808","error-30":"#750C0C","error-40":"#9E130F","error-50":"#CB2213","error-60":"#DE6C6C","error-70":"#E89B9B","error-80":"#EFBEBE","error-90":"#F5D9D9","error-95":"#F9ECEC","error-100":"#FCF7F7","info-10":"#021824","info-20":"#032B3F","info-30":"#053D59","info-40":"#065478","info-50":"#176E9B","info-60":"#5296BE","info-70":"#82B5DA","info-80":"#ACCFE7","info-90":"#CCE3F1","info-95":"#E3F1F8","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000","primary-inverse":"#FEAB10"},a11yplayground:{"brand-10":"#170F39","brand-20":"#281C62","brand-30":"#38268B","brand-40":"#4D34BF","brand-50":"#5735DF","brand-60":"#9986F9","brand-70":"#B2A5F8","brand-80":"#CDC2FA","brand-90":"#E2DCFC","brand-95":"#EFEDFE","brand-100":"#FAF8FD","primary-10":"#170F39","primary-20":"#281C62","primary-30":"#38268B","primary-40":"#4D34BF","primary-50":"#5735DF","primary-60":"#9986F9","primary-70":"#B2A5F8","primary-80":"#CDC2FA","primary-90":"#E2DCFC","primary-95":"#EFEDFE","primary-100":"#FAF8FD","secondary-10":"#251204","secondary-20":"#401F08","secondary-30":"#5B2C0B","secondary-40":"#7E3D0F","secondary-50":"#B04900","secondary-60":"#E26E1C","secondary-70":"#FF9445","secondary-80":"#FFBB8E","secondary-90":"#FFD9BF","secondary-95":"#FFECDF","secondary-100":"#FFF8F3","neutral-10":"#161616","neutral-20":"#282828","neutral-30":"#393939","neutral-40":"#4E4E4E","neutral-50":"#686868","neutral-60":"#8E8E8E","neutral-70":"#AFAFB0","neutral-80":"#C7CACA","neutral-90":"#DDE1E2","neutral-95":"#EDEFEF","neutral-100":"#F9F9F9","success-10":"#031B15","success-20":"#082D24","success-30":"#094134","success-40":"#0D5947","success-50":"#10755E","success-60":"#16A181","success-70":"#1EC59D","success-80":"#6FDDC2","success-90":"#AFECDE","success-95":"#D5F5ED","success-100":"#F1FCF9","warning-10":"#1F1500","warning-20":"#362500","warning-30":"#4D3501","warning-40":"#6A4801","warning-50":"#8B6001","warning-60":"#BF8301","warning-70":"#EAA102","warning-80":"#FFBF34","warning-90":"#FFDC8F","warning-95":"#FFEDC7","warning-100":"#FFF8EA","error-10":"#270F10","error-20":"#441B1B","error-30":"#612627","error-40":"#853535","error-50":"#AF4546","error-60":"#EC6162","error-70":"#F29696","error-80":"#F7BBBC","error-90":"#FAD8D8","error-95":"#FCEAEA","error-100":"#FEF7F7","info-10":"#0F1627","info-20":"#1B2745","info-30":"#273763","info-40":"#354D88","info-50":"#4665B3","info-60":"#618AF6","info-70":"#8DADFF","info-80":"#B4C9FF","info-90":"#D3DFFF","info-95":"#E9EFFF","info-100":"#F5F8FF",white:"#FFFFFF",black:"#000000","primary-inverse":"#FEAB10"}},defaultValue:"lifesg"},ln=e=>r=>{var n;const t=r.theme,i=rn(on,null==t?void 0:t.colourScheme);return(null===(n=null==t?void 0:t.overrides)||void 0===n?void 0:n.primitiveColour)?en(i,e,t.overrides.primitiveColour):i[e]},dn={"brand-10":ln("brand-10"),"brand-20":ln("brand-20"),"brand-30":ln("brand-30"),"brand-40":ln("brand-40"),"brand-50":ln("brand-50"),"brand-60":ln("brand-60"),"brand-70":ln("brand-70"),"brand-80":ln("brand-80"),"brand-90":ln("brand-90"),"brand-95":ln("brand-95"),"brand-100":ln("brand-100"),"primary-10":ln("primary-10"),"primary-20":ln("primary-20"),"primary-30":ln("primary-30"),"primary-40":ln("primary-40"),"primary-50":ln("primary-50"),"primary-60":ln("primary-60"),"primary-70":ln("primary-70"),"primary-80":ln("primary-80"),"primary-90":ln("primary-90"),"primary-95":ln("primary-95"),"primary-100":ln("primary-100"),"secondary-10":ln("secondary-10"),"secondary-20":ln("secondary-20"),"secondary-30":ln("secondary-30"),"secondary-40":ln("secondary-40"),"secondary-50":ln("secondary-50"),"secondary-60":ln("secondary-60"),"secondary-70":ln("secondary-70"),"secondary-80":ln("secondary-80"),"secondary-90":ln("secondary-90"),"secondary-95":ln("secondary-95"),"secondary-100":ln("secondary-100"),"neutral-10":ln("neutral-10"),"neutral-20":ln("neutral-20"),"neutral-30":ln("neutral-30"),"neutral-40":ln("neutral-40"),"neutral-50":ln("neutral-50"),"neutral-60":ln("neutral-60"),"neutral-70":ln("neutral-70"),"neutral-80":ln("neutral-80"),"neutral-90":ln("neutral-90"),"neutral-95":ln("neutral-95"),"neutral-100":ln("neutral-100"),"success-10":ln("success-10"),"success-20":ln("success-20"),"success-30":ln("success-30"),"success-40":ln("success-40"),"success-50":ln("success-50"),"success-60":ln("success-60"),"success-70":ln("success-70"),"success-80":ln("success-80"),"success-90":ln("success-90"),"success-95":ln("success-95"),"success-100":ln("success-100"),"warning-10":ln("warning-10"),"warning-20":ln("warning-20"),"warning-30":ln("warning-30"),"warning-40":ln("warning-40"),"warning-50":ln("warning-50"),"warning-60":ln("warning-60"),"warning-70":ln("warning-70"),"warning-80":ln("warning-80"),"warning-90":ln("warning-90"),"warning-95":ln("warning-95"),"warning-100":ln("warning-100"),"error-10":ln("error-10"),"error-20":ln("error-20"),"error-30":ln("error-30"),"error-40":ln("error-40"),"error-50":ln("error-50"),"error-60":ln("error-60"),"error-70":ln("error-70"),"error-80":ln("error-80"),"error-90":ln("error-90"),"error-95":ln("error-95"),"error-100":ln("error-100"),"info-10":ln("info-10"),"info-20":ln("info-20"),"info-30":ln("info-30"),"info-40":ln("info-40"),"info-50":ln("info-50"),"info-60":ln("info-60"),"info-70":ln("info-70"),"info-80":ln("info-80"),"info-90":ln("info-90"),"info-95":ln("info-95"),"info-100":ln("info-100"),white:ln("white"),black:ln("black"),"primary-inverse":ln("primary-inverse")},cn={text:ln("neutral-20"),"text-subtle":ln("neutral-30"),"text-subtler":ln("neutral-50"),"text-subtlest":ln("neutral-60"),"text-primary":ln("primary-50"),"text-hover":ln("primary-40"),"text-selected":ln("primary-50"),"text-selected-hover":ln("primary-40"),"text-disabled":ln("neutral-50"),"text-disabled-subtle":ln("neutral-60"),"text-disabled-subtlest":ln("neutral-80"),"text-selected-disabled":ln("neutral-20"),"text-success":ln("success-40"),"text-warning":ln("warning-40"),"text-error":ln("error-40"),"text-info":ln("info-40"),"text-inverse":ln("white"),icon:ln("neutral-50"),"icon-subtle":ln("neutral-60"),"icon-strongest":ln("neutral-20"),"icon-primary":ln("primary-50"),"icon-primary-subtle":ln("primary-60"),"icon-primary-subtlest":ln("primary-70"),"icon-hover":ln("primary-40"),"icon-selected":ln("primary-50"),"icon-selected-hover":ln("primary-40"),"icon-disabled":ln("neutral-50"),"icon-disabled-subtle":ln("neutral-60"),"icon-selected-disabled":ln("neutral-60"),"icon-success":ln("success-50"),"icon-warning":ln("warning-60"),"icon-error":ln("error-50"),"icon-error-strong":ln("error-40"),"icon-info":ln("info-50"),"icon-inverse":ln("white"),"icon-primary-inverse":ln("primary-inverse"),border:ln("neutral-90"),"border-strong":ln("neutral-70"),"border-stronger":ln("neutral-50"),"border-primary":ln("primary-50"),"border-primary-subtle":ln("primary-60"),"border-hover":ln("primary-90"),"border-hover-strong":ln("primary-60"),"border-selected":ln("primary-50"),"border-selected-subtle":ln("primary-70"),"border-selected-subtlest":ln("primary-90"),"border-selected-hover":ln("primary-40"),"border-focus":ln("primary-60"),"border-focus-strong":ln("primary-50"),"border-disabled":ln("neutral-90"),"border-selected-disabled":ln("neutral-70"),"border-success":ln("success-60"),"border-warning":ln("warning-60"),"border-error":ln("error-60"),"border-error-focus":ln("error-60"),"border-error-focus-strong":ln("error-40"),"border-error-strong":ln("error-40"),"border-info":ln("info-60"),bg:ln("white"),"bg-strong":ln("neutral-100"),"bg-stronger":ln("neutral-95"),"bg-strongest":ln("neutral-90"),"bg-hover":ln("primary-95"),"bg-hover-strong":ln("primary-90"),"bg-hover-subtle":ln("primary-100"),"bg-hover-neutral":ln("neutral-100"),"bg-hover-neutral-strong":ln("neutral-90"),"bg-selected":ln("primary-95"),"bg-selected-hover":ln("primary-90"),"bg-selected-strong":ln("primary-90"),"bg-selected-stronger":ln("primary-70"),"bg-selected-strongest":ln("primary-50"),"bg-selected-strongest-hover":ln("primary-40"),"bg-disabled":ln("neutral-95"),"bg-selected-disabled":ln("neutral-95"),"bg-selected-stronger-disabled":ln("neutral-70"),"bg-success":ln("success-100"),"bg-success-hover":ln("success-95"),"bg-success-strong":ln("success-50"),"bg-success-strong-hover":ln("success-40"),"bg-warning":ln("warning-100"),"bg-warning-hover":ln("warning-95"),"bg-warning-strong":ln("warning-50"),"bg-warning-strong-hover":ln("warning-40"),"bg-info":ln("info-100"),"bg-info-hover":ln("info-95"),"bg-info-strong":ln("info-50"),"bg-info-strong-hover":ln("info-40"),"bg-error":ln("error-100"),"bg-error-hover":ln("error-95"),"bg-error-strong":ln("error-50"),"bg-error-strong-hover":ln("error-40"),"bg-inverse":ln("neutral-20"),"bg-inverse-subtle":ln("neutral-30"),"bg-inverse-subtler":ln("neutral-50"),"bg-inverse-subtlest":ln("neutral-60"),"bg-inverse-hover":ln("neutral-40"),"bg-primary":ln("primary-50"),"bg-primary-subtle":ln("primary-60"),"bg-primary-subtler":ln("primary-95"),"bg-primary-subtlest":ln("primary-100"),"bg-available":"#6DD0A1","bg-primary-hover":ln("primary-40"),"bg-primary-subtlest-hover":ln("primary-90"),"bg-primary-subtlest-selected":ln("primary-90"),"overlay-strong":"rgba(40, 40, 40, 0.85)","overlay-subtle":"rgba(40, 40, 40, 0.20)",hyperlink:ln("primary-50"),"hyperlink-hover":ln("primary-40"),"hyperlink-visited":ln("primary-40"),"hyperlink-inverse":ln("primary-inverse"),"focus-ring":ln("black"),"focus-ring-inverse":ln("white")},un={collections:{lifesg:cn,bookingsg:cn,rbs:cn,mylegacy:cn,ccube:cn,oneservice:cn,pa:{text:ln("neutral-30"),"text-subtle":ln("neutral-40"),"text-subtler":ln("neutral-50"),"text-subtlest":ln("neutral-70"),"text-primary":ln("neutral-10"),"text-hover":ln("neutral-70"),"text-selected":ln("neutral-20"),"text-selected-hover":ln("neutral-10"),"text-disabled":ln("neutral-50"),"text-disabled-subtle":ln("neutral-60"),"text-disabled-subtlest":ln("neutral-80"),"text-selected-disabled":ln("neutral-40"),"text-success":ln("success-40"),"text-warning":ln("warning-40"),"text-error":ln("brand-30"),"text-info":ln("neutral-40"),"text-inverse":ln("neutral-100"),icon:ln("neutral-40"),"icon-subtle":ln("neutral-50"),"icon-strongest":ln("neutral-10"),"icon-primary":ln("neutral-10"),"icon-primary-subtle":ln("neutral-30"),"icon-primary-subtlest":ln("neutral-60"),"icon-hover":ln("neutral-70"),"icon-selected":ln("brand-20"),"icon-selected-hover":ln("brand-10"),"icon-disabled":ln("neutral-50"),"icon-disabled-subtle":ln("neutral-60"),"icon-selected-disabled":ln("neutral-40"),"icon-success":ln("success-40"),"icon-warning":ln("warning-60"),"icon-error":ln("brand-30"),"icon-error-strong":ln("brand-10"),"icon-info":ln("neutral-40"),"icon-inverse":ln("neutral-100"),"icon-primary-inverse":"#F9B371",border:ln("neutral-90"),"border-strong":ln("neutral-30"),"border-stronger":ln("neutral-20"),"border-primary":ln("neutral-40"),"border-primary-subtle":ln("neutral-60"),"border-hover":ln("neutral-80"),"border-hover-strong":ln("neutral-10"),"border-selected":ln("brand-20"),"border-selected-subtle":ln("neutral-40"),"border-selected-subtlest":ln("neutral-70"),"border-selected-hover":ln("neutral-10"),"border-focus":ln("neutral-20"),"border-focus-strong":ln("neutral-10"),"border-disabled":ln("neutral-90"),"border-selected-disabled":ln("neutral-80"),"border-success":ln("success-40"),"border-warning":ln("warning-60"),"border-error":ln("brand-30"),"border-error-focus":ln("brand-20"),"border-error-focus-strong":ln("brand-10"),"border-error-strong":ln("brand-20"),"border-info":ln("neutral-40"),bg:ln("neutral-100"),"bg-strong":ln("neutral-95"),"bg-stronger":ln("neutral-90"),"bg-strongest":ln("neutral-80"),"bg-hover":ln("brand-90"),"bg-hover-strong":ln("brand-80"),"bg-hover-subtle":ln("neutral-90"),"bg-hover-neutral":ln("neutral-90"),"bg-hover-neutral-strong":ln("neutral-90"),"bg-selected":ln("brand-100"),"bg-selected-hover":ln("brand-30"),"bg-selected-strong":ln("brand-50"),"bg-selected-stronger":ln("brand-40"),"bg-selected-strongest":ln("brand-20"),"bg-selected-strongest-hover":ln("brand-10"),"bg-disabled":ln("neutral-90"),"bg-selected-disabled":ln("neutral-90"),"bg-selected-stronger-disabled":ln("neutral-80"),"bg-success":ln("success-100"),"bg-success-hover":ln("success-95"),"bg-success-strong":ln("success-50"),"bg-success-strong-hover":ln("success-40"),"bg-warning":ln("warning-100"),"bg-warning-hover":ln("warning-95"),"bg-warning-strong":ln("warning-50"),"bg-warning-strong-hover":ln("warning-40"),"bg-info":ln("neutral-95"),"bg-info-hover":ln("info-95"),"bg-info-strong":ln("info-50"),"bg-info-strong-hover":ln("info-40"),"bg-error":ln("brand-100"),"bg-error-hover":ln("error-95"),"bg-error-strong":ln("error-50"),"bg-error-strong-hover":ln("error-40"),"bg-inverse":ln("neutral-40"),"bg-inverse-subtle":ln("neutral-60"),"bg-inverse-subtler":ln("neutral-70"),"bg-inverse-subtlest":ln("neutral-80"),"bg-inverse-hover":ln("neutral-30"),"bg-primary":ln("brand-20"),"bg-primary-subtle":ln("brand-60"),"bg-primary-subtler":ln("brand-80"),"bg-primary-subtlest":ln("brand-100"),"bg-available":ln("success-60"),"bg-primary-hover":ln("brand-10"),"bg-primary-subtlest-hover":ln("brand-80"),"bg-primary-subtlest-selected":ln("brand-40"),"overlay-strong":"rgba(25, 25, 25, 0.95)","overlay-subtle":"rgba(25, 25, 25, 0.20)",hyperlink:ln("neutral-10"),"hyperlink-hover":ln("neutral-40"),"hyperlink-visited":ln("neutral-50"),"hyperlink-inverse":"#F8AE68","focus-ring":ln("black"),"focus-ring-inverse":ln("white")},a11yplayground:cn},defaultValue:"lifesg"},gn=e=>r=>{var n;const t=r.theme,i=rn(un,null==t?void 0:t.colourScheme),a=(null===(n=null==t?void 0:t.overrides)||void 0===n?void 0:n.semanticColour)?en(i,e,t.overrides.semanticColour):i[e];return"function"==typeof a?a(r):a},hn={text:gn("text"),"text-subtle":gn("text-subtle"),"text-subtler":gn("text-subtler"),"text-subtlest":gn("text-subtlest"),"text-primary":gn("text-primary"),"text-hover":gn("text-hover"),"text-selected":gn("text-selected"),"text-selected-hover":gn("text-selected-hover"),"text-disabled":gn("text-disabled"),"text-disabled-subtle":gn("text-disabled-subtle"),"text-disabled-subtlest":gn("text-disabled-subtlest"),"text-selected-disabled":gn("text-selected-disabled"),"text-success":gn("text-success"),"text-warning":gn("text-warning"),"text-error":gn("text-error"),"text-info":gn("text-info"),"text-inverse":gn("text-inverse"),icon:gn("icon"),"icon-subtle":gn("icon-subtle"),"icon-strongest":gn("icon-strongest"),"icon-primary":gn("icon-primary"),"icon-primary-subtle":gn("icon-primary-subtle"),"icon-primary-subtlest":gn("icon-primary-subtlest"),"icon-hover":gn("icon-hover"),"icon-selected":gn("icon-selected"),"icon-selected-hover":gn("icon-selected-hover"),"icon-disabled":gn("icon-disabled"),"icon-disabled-subtle":gn("icon-disabled-subtle"),"icon-selected-disabled":gn("icon-selected-disabled"),"icon-success":gn("icon-success"),"icon-warning":gn("icon-warning"),"icon-error":gn("icon-error"),"icon-error-strong":gn("icon-error-strong"),"icon-info":gn("icon-info"),"icon-inverse":gn("icon-inverse"),"icon-primary-inverse":gn("icon-primary-inverse"),border:gn("border"),"border-strong":gn("border-strong"),"border-stronger":gn("border-stronger"),"border-primary":gn("border-primary"),"border-primary-subtle":gn("border-primary-subtle"),"border-hover":gn("border-hover"),"border-hover-strong":gn("border-hover-strong"),"border-selected":gn("border-selected"),"border-selected-subtle":gn("border-selected-subtle"),"border-selected-subtlest":gn("border-selected-subtlest"),"border-selected-hover":gn("border-selected-hover"),"border-focus":gn("border-focus"),"border-focus-strong":gn("border-focus-strong"),"border-disabled":gn("border-disabled"),"border-selected-disabled":gn("border-selected-disabled"),"border-success":gn("border-success"),"border-warning":gn("border-warning"),"border-error":gn("border-error"),"border-error-focus":gn("border-error-focus"),"border-error-focus-strong":gn("border-error-focus-strong"),"border-error-strong":gn("border-error-strong"),"border-info":gn("border-info"),bg:gn("bg"),"bg-strong":gn("bg-strong"),"bg-stronger":gn("bg-stronger"),"bg-strongest":gn("bg-strongest"),"bg-hover":gn("bg-hover"),"bg-hover-strong":gn("bg-hover-strong"),"bg-hover-subtle":gn("bg-hover-subtle"),"bg-hover-neutral":gn("bg-hover-neutral"),"bg-hover-neutral-strong":gn("bg-hover-neutral-strong"),"bg-selected":gn("bg-selected"),"bg-selected-hover":gn("bg-selected-hover"),"bg-selected-strong":gn("bg-selected-strong"),"bg-selected-stronger":gn("bg-selected-stronger"),"bg-selected-strongest":gn("bg-selected-strongest"),"bg-selected-strongest-hover":gn("bg-selected-strongest-hover"),"bg-disabled":gn("bg-disabled"),"bg-selected-disabled":gn("bg-selected-disabled"),"bg-selected-stronger-disabled":gn("bg-selected-stronger-disabled"),"bg-success":gn("bg-success"),"bg-success-hover":gn("bg-success-hover"),"bg-success-strong":gn("bg-success-strong"),"bg-success-strong-hover":gn("bg-success-strong-hover"),"bg-warning":gn("bg-warning"),"bg-warning-hover":gn("bg-warning-hover"),"bg-warning-strong":gn("bg-warning-strong"),"bg-warning-strong-hover":gn("bg-warning-strong-hover"),"bg-info":gn("bg-info"),"bg-info-hover":gn("bg-info-hover"),"bg-info-strong":gn("bg-info-strong"),"bg-info-strong-hover":gn("bg-info-strong-hover"),"bg-error":gn("bg-error"),"bg-error-hover":gn("bg-error-hover"),"bg-error-strong":gn("bg-error-strong"),"bg-error-strong-hover":gn("bg-error-strong-hover"),"bg-inverse":gn("bg-inverse"),"bg-inverse-subtle":gn("bg-inverse-subtle"),"bg-inverse-subtler":gn("bg-inverse-subtler"),"bg-inverse-subtlest":gn("bg-inverse-subtlest"),"bg-inverse-hover":gn("bg-inverse-hover"),"bg-primary":gn("bg-primary"),"bg-primary-subtle":gn("bg-primary-subtle"),"bg-primary-subtler":gn("bg-primary-subtler"),"bg-primary-subtlest":gn("bg-primary-subtlest"),"bg-available":gn("bg-available"),"bg-primary-hover":gn("bg-primary-hover"),"bg-primary-subtlest-hover":gn("bg-primary-subtlest-hover"),"bg-primary-subtlest-selected":gn("bg-primary-subtlest-selected"),"overlay-strong":gn("overlay-strong"),"overlay-subtle":gn("overlay-subtle"),hyperlink:gn("hyperlink"),"hyperlink-hover":gn("hyperlink-hover"),"hyperlink-visited":gn("hyperlink-visited"),"hyperlink-inverse":gn("hyperlink-inverse"),"focus-ring":gn("focus-ring"),"focus-ring-inverse":gn("focus-ring-inverse")},mn={collections:{default:{solid:e=>r=>{var t,i,a;const{thickness:s,radius:o,colour:l}=e||{},d=null!==(t="function"==typeof s?s(r):s)&&void 0!==t?t:an["width-010"](r),c=null!==(i="function"==typeof o?o(r):o)&&void 0!==i?i:0,u=null!==(a="function"==typeof l?l(r):l)&&void 0!==a?a:hn.border(r),g=an.solid;return n`
            border: ${d} ${g} ${u};
            border-radius: ${c};
        `},"dashed-default":e=>r=>{var t,i,a;const{thickness:s,radius:o,colour:l}=e||{},d=null!==(t="function"==typeof s?s(r):s)&&void 0!==t?t:an["width-010"](r),c=null!==(i="function"==typeof o?o(r):o)&&void 0!==i?i:0,u=null!==(a="function"==typeof l?l(r):l)&&void 0!==a?a:hn.border(r),g=encodeURIComponent(`<svg width='100%' height='100%' xmlns='http://www.w3.org/2000/svg'><rect width='100%' height='100%' fill='none' rx='${c}' ry='${c}' stroke='${u}' stroke-width='${d}' stroke-dasharray='4, 8' stroke-dashoffset='0' stroke-linecap='square'/></svg>`);return n`
            background-image: url("data:image/svg+xml,${g}");
            border-radius: ${c};
        `}}},defaultValue:"default"},bn=e=>1===e.length&&"theme"in e[0],fn=e=>(...r)=>n=>{const t=bn(r)?[]:r,i=bn(r)?r[0]:n,a=i.theme;return(0,rn(mn,null==a?void 0:a.borderScheme)[e])(...t)(i)},pn={solid:fn("solid"),"dashed-default":fn("dashed-default")},yn={collections:{default:{"xxs-min":0,"xxs-max":320,"xs-min":321,"xs-max":375,"sm-min":376,"sm-max":420,"md-min":421,"md-max":767,"lg-min":768,"lg-max":1023,"xl-min":1024,"xl-max":1440,"xxl-min":1441,"xxs-column":8,"xs-column":8,"sm-column":8,"md-column":8,"lg-column":12,"xl-column":12,"xxl-column":12,"xxs-gutter":16,"xs-gutter":16,"sm-gutter":16,"md-gutter":16,"lg-gutter":32,"xl-gutter":32,"xxl-gutter":32,"xxs-margin":24,"xs-margin":24,"sm-margin":24,"md-margin":24,"lg-margin":48,"xl-margin":48,"xxl-margin":48}},defaultValue:"default"},xn=e=>r=>{var n;const t=r.theme,i=rn(yn,null==t?void 0:t.breakpointScheme);let a;return a=(null===(n=null==t?void 0:t.overrides)||void 0===n?void 0:n.breakpoint)?en(i,e,t.overrides.breakpoint):i[e],a},vn={"xxs-min":xn("xxs-min"),"xxs-max":xn("xxs-max"),"xs-min":xn("xs-min"),"xs-max":xn("xs-max"),"sm-min":xn("sm-min"),"sm-max":xn("sm-max"),"md-min":xn("md-min"),"md-max":xn("md-max"),"lg-min":xn("lg-min"),"lg-max":xn("lg-max"),"xl-min":xn("xl-min"),"xl-max":xn("xl-max"),"xxl-min":xn("xxl-min"),"xxs-column":xn("xxs-column"),"xs-column":xn("xs-column"),"sm-column":xn("sm-column"),"md-column":xn("md-column"),"lg-column":xn("lg-column"),"xl-column":xn("xl-column"),"xxl-column":xn("xxl-column"),"xxs-gutter":xn("xxs-gutter"),"xs-gutter":xn("xs-gutter"),"sm-gutter":xn("sm-gutter"),"md-gutter":xn("md-gutter"),"lg-gutter":xn("lg-gutter"),"xl-gutter":xn("xl-gutter"),"xxl-gutter":xn("xxl-gutter"),"xxs-margin":xn("xxs-margin"),"xs-margin":xn("xs-margin"),"sm-margin":xn("sm-margin"),"md-margin":xn("md-margin"),"lg-margin":xn("lg-margin"),"xl-margin":xn("xl-margin"),"xxl-margin":xn("xxl-margin")},Fn=e=>("max-width"===e?["xxs","xs","sm","md","lg","xl"]:["xxs","xs","sm","md","lg","xl","xxl"]).reduce(((r,n)=>(r[n]=((e,r)=>{const n=vn["max-width"===e?`${r}-max`:`${r}-min`];return r=>{const t=n(r);return`@media screen and (${e}: ${t}px)`}})(e,n),r)),{}),wn={MaxWidth:Fn("max-width"),MinWidth:Fn("min-width")},$n={collections:{default:{"heading-size-xxl":"3rem","heading-size-xl":"2.5rem","heading-size-lg":"2rem","heading-size-md":"1.625rem","heading-size-sm":"1.375rem","heading-size-xs":"1.125rem","heading-lh-xxl":"3.5rem","heading-lh-xl":"3rem","heading-lh-lg":"2.5rem","heading-lh-md":"2.25rem","heading-lh-sm":"1.75rem","heading-lh-xs":"1.625rem","heading-ls-xxl":"-0.056rem","heading-ls-xl":"-0.032rem","heading-ls-lg":"-0.032rem","heading-ls-md":"0rem","heading-ls-sm":"0rem","heading-ls-xs":"0rem","weight-light":"300","weight-regular":"400","weight-semibold":"600","weight-bold":"700","font-family":"Open Sans","body-size-baseline":"1.125rem","body-size-md":"1rem","body-size-sm":"0.875rem","body-size-xs":"0.75rem","body-lh-baseline":"1.625rem","body-lh-md":"1.5rem","body-lh-sm":"1.625rem","body-lh-xs":"1.25rem","body-ls-baseline":"0rem","body-ls-md":"0.014rem","body-ls-sm":"0.012rem","body-ls-xs":"0.012rem","form-label-size":"1rem","form-description-size":"0.875rem","form-label-lh":"1.5rem","form-description-lh":"1.6rem","form-label-ls":"0.014rem","form-description-ls":"0.012rem"},bookingsg:{"heading-size-xxl":"3rem","heading-size-xl":"2.5rem","heading-size-lg":"2rem","heading-size-md":"1.625rem","heading-size-sm":"1.375rem","heading-size-xs":"1.125rem","heading-lh-xxl":"3.5rem","heading-lh-xl":"3rem","heading-lh-lg":"2.5rem","heading-lh-md":"2.25rem","heading-lh-sm":"1.75rem","heading-lh-xs":"1.75rem","heading-ls-xxl":"-0.056rem","heading-ls-xl":"-0.032rem","heading-ls-lg":"-0.032rem","heading-ls-md":"0rem","heading-ls-sm":"0rem","heading-ls-xs":"0rem","weight-light":"300","weight-regular":"400","weight-semibold":"600","weight-bold":"700","font-family":"Plus Jakarta Sans","body-size-baseline":"1.125rem","body-size-md":"1rem","body-size-sm":"0.875rem","body-size-xs":"0.75rem","body-lh-baseline":"1.75rem","body-lh-md":"1.5rem","body-lh-sm":"1.6rem","body-lh-xs":"1.2rem","body-ls-baseline":"0rem","body-ls-md":"0.014rem","body-ls-sm":"0.012rem","body-ls-xs":"0.012rem","form-label-size":"1rem","form-description-size":"0.875rem","form-label-lh":"1.5rem","form-description-lh":"1.6rem","form-label-ls":"0.014rem","form-description-ls":"0.012rem"},pa:{"heading-size-xxl":"2.5rem","heading-size-xl":"2rem","heading-size-lg":"1.75rem","heading-size-md":"1.5rem","heading-size-sm":"1.25rem","heading-size-xs":"1rem","heading-lh-xxl":"3rem","heading-lh-xl":"2.5rem","heading-lh-lg":"2.25rem","heading-lh-md":"2rem","heading-lh-sm":"2rem","heading-lh-xs":"1.75rem","heading-ls-xxl":"-0.032rem","heading-ls-xl":"-0.032rem","heading-ls-lg":"0rem","heading-ls-md":"0rem","heading-ls-sm":"0rem","heading-ls-xs":"0rem","weight-light":"300","weight-regular":"400","weight-semibold":"600","weight-bold":"700","font-family":"Lato","body-size-baseline":"1rem","body-size-md":"0.875rem","body-size-sm":"0.75rem","body-size-xs":"0.625rem","body-lh-baseline":"1.75rem","body-lh-md":"1.5rem","body-lh-sm":"1.25rem","body-lh-xs":"1.25rem","body-ls-baseline":"0rem","body-ls-md":"0.014rem","body-ls-sm":"0.012rem","body-ls-xs":"0.012rem","form-label-size":"1rem","form-description-size":"0.875rem","form-label-lh":"1.5rem","form-description-lh":"1.6rem","form-label-ls":"0.014rem","form-description-ls":"0.012rem"},a11yplayground:{"heading-size-xxl":"3rem","heading-size-xl":"2.5rem","heading-size-lg":"2rem","heading-size-md":"1.625rem","heading-size-sm":"1.375rem","heading-size-xs":"1.125rem","heading-lh-xxl":"3.5rem","heading-lh-xl":"3rem","heading-lh-lg":"2.5rem","heading-lh-md":"2.25rem","heading-lh-sm":"1.75rem","heading-lh-xs":"1.625rem","heading-ls-xxl":"-0.056rem","heading-ls-xl":"-0.032rem","heading-ls-lg":"-0.032rem","heading-ls-md":"0rem","heading-ls-sm":"0rem","heading-ls-xs":"0rem","weight-light":"300","weight-regular":"400","weight-semibold":"600","weight-bold":"700","font-family":"Atkinson Hyperlegible Next","body-size-baseline":"1.125rem","body-size-md":"1rem","body-size-sm":"0.875rem","body-size-xs":"0.75rem","body-lh-baseline":"1.625rem","body-lh-md":"1.5rem","body-lh-sm":"1.625rem","body-lh-xs":"1.25rem","body-ls-baseline":"0rem","body-ls-md":"0.014rem","body-ls-sm":"0.012rem","body-ls-xs":"0.012rem","form-label-size":"1.125rem","form-description-size":"1rem","form-label-lh":"1.5rem","form-description-lh":"1.625rem","form-label-ls":"0rem","form-description-ls":"0.00875rem"}},defaultValue:"default"},Cn=e=>r=>{var n;const t=r.theme,i=rn($n,null==t?void 0:t.fontScheme);return(null===(n=null==t?void 0:t.overrides)||void 0===n?void 0:n.fontSpec)?en(i,e,t.overrides.fontSpec):i[e]},En={"heading-size-xxl":Cn("heading-size-xxl"),"heading-size-xl":Cn("heading-size-xl"),"heading-size-lg":Cn("heading-size-lg"),"heading-size-md":Cn("heading-size-md"),"heading-size-sm":Cn("heading-size-sm"),"heading-size-xs":Cn("heading-size-xs"),"heading-lh-xxl":Cn("heading-lh-xxl"),"heading-lh-xl":Cn("heading-lh-xl"),"heading-lh-lg":Cn("heading-lh-lg"),"heading-lh-md":Cn("heading-lh-md"),"heading-lh-sm":Cn("heading-lh-sm"),"heading-lh-xs":Cn("heading-lh-xs"),"heading-ls-xxl":Cn("heading-ls-xxl"),"heading-ls-xl":Cn("heading-ls-xl"),"heading-ls-lg":Cn("heading-ls-lg"),"heading-ls-md":Cn("heading-ls-md"),"heading-ls-sm":Cn("heading-ls-sm"),"heading-ls-xs":Cn("heading-ls-xs"),"weight-light":Cn("weight-light"),"weight-regular":Cn("weight-regular"),"weight-semibold":Cn("weight-semibold"),"weight-bold":Cn("weight-bold"),"font-family":Cn("font-family"),"body-size-baseline":Cn("body-size-baseline"),"body-size-md":Cn("body-size-md"),"body-size-sm":Cn("body-size-sm"),"body-size-xs":Cn("body-size-xs"),"body-lh-baseline":Cn("body-lh-baseline"),"body-lh-md":Cn("body-lh-md"),"body-lh-sm":Cn("body-lh-sm"),"body-lh-xs":Cn("body-lh-xs"),"body-ls-baseline":Cn("body-ls-baseline"),"body-ls-md":Cn("body-ls-md"),"body-ls-sm":Cn("body-ls-sm"),"body-ls-xs":Cn("body-ls-xs"),"form-label-size":Cn("form-label-size"),"form-description-size":Cn("form-description-size"),"form-label-lh":Cn("form-label-lh"),"form-description-lh":Cn("form-description-lh"),"form-label-ls":Cn("form-label-ls"),"form-description-ls":Cn("form-description-ls")},Dn=(e,r,t,i,a)=>{const{disableLigatures:s}=a||{};return n`
        font-family: ${Cn("font-family")};
        font-size: ${Cn(e)};
        font-weight: ${Cn(r)};
        line-height: ${Cn(t)};
        letter-spacing: ${Cn(i)};

        font-variant: ${s?"no-common-ligatures":"normal"};
    `},Bn=(e={})=>({"heading-xxl-light":Dn("heading-size-xxl","weight-light","heading-lh-xxl","heading-ls-xxl",e),"heading-xxl-regular":Dn("heading-size-xxl","weight-regular","heading-lh-xxl","heading-ls-xxl",e),"heading-xxl-semibold":Dn("heading-size-xxl","weight-semibold","heading-lh-xxl","heading-ls-xxl",e),"heading-xxl-bold":Dn("heading-size-xxl","weight-bold","heading-lh-xxl","heading-ls-xxl",e),"heading-xl-light":Dn("heading-size-xl","weight-light","heading-lh-xl","heading-ls-xl",e),"heading-xl-regular":Dn("heading-size-xl","weight-regular","heading-lh-xl","heading-ls-xl",e),"heading-xl-semibold":Dn("heading-size-xl","weight-semibold","heading-lh-xl","heading-ls-xl",e),"heading-xl-bold":Dn("heading-size-xl","weight-bold","heading-lh-xl","heading-ls-xl",e),"heading-lg-light":Dn("heading-size-lg","weight-light","heading-lh-lg","heading-ls-lg",e),"heading-lg-regular":Dn("heading-size-lg","weight-regular","heading-lh-lg","heading-ls-lg",e),"heading-lg-semibold":Dn("heading-size-lg","weight-semibold","heading-lh-lg","heading-ls-lg",e),"heading-lg-bold":Dn("heading-size-lg","weight-bold","heading-lh-lg","heading-ls-lg",e),"heading-md-light":Dn("heading-size-md","weight-light","heading-lh-md","heading-ls-md",e),"heading-md-regular":Dn("heading-size-md","weight-regular","heading-lh-md","heading-ls-md",e),"heading-md-semibold":Dn("heading-size-md","weight-semibold","heading-lh-md","heading-ls-md",e),"heading-md-bold":Dn("heading-size-md","weight-bold","heading-lh-md","heading-ls-md",e),"heading-sm-light":Dn("heading-size-sm","weight-light","heading-lh-sm","heading-ls-sm",e),"heading-sm-regular":Dn("heading-size-sm","weight-regular","heading-lh-sm","heading-ls-sm",e),"heading-sm-semibold":Dn("heading-size-sm","weight-semibold","heading-lh-sm","heading-ls-sm",e),"heading-sm-bold":Dn("heading-size-sm","weight-bold","heading-lh-sm","heading-ls-sm",e),"heading-xs-light":Dn("heading-size-xs","weight-light","heading-lh-xs","heading-ls-xs",e),"heading-xs-regular":Dn("heading-size-xs","weight-regular","heading-lh-xs","heading-ls-xs",e),"heading-xs-semibold":Dn("heading-size-xs","weight-semibold","heading-lh-xs","heading-ls-xs",e),"heading-xs-bold":Dn("heading-size-xs","weight-bold","heading-lh-xs","heading-ls-xs",e),"body-baseline-light":Dn("body-size-baseline","weight-light","body-lh-baseline","body-ls-baseline",e),"body-baseline-regular":Dn("body-size-baseline","weight-regular","body-lh-baseline","body-ls-baseline",e),"body-baseline-semibold":Dn("body-size-baseline","weight-semibold","body-lh-baseline","body-ls-baseline",e),"body-baseline-bold":Dn("body-size-baseline","weight-bold","body-lh-baseline","body-ls-baseline",e),"body-md-light":Dn("body-size-md","weight-light","body-lh-md","body-ls-md",e),"body-md-regular":Dn("body-size-md","weight-regular","body-lh-md","body-ls-md",e),"body-md-semibold":Dn("body-size-md","weight-semibold","body-lh-md","body-ls-md",e),"body-md-bold":Dn("body-size-md","weight-bold","body-lh-md","body-ls-md",e),"body-sm-light":Dn("body-size-sm","weight-light","body-lh-sm","body-ls-sm",e),"body-sm-regular":Dn("body-size-sm","weight-regular","body-lh-sm","body-ls-sm",e),"body-sm-semibold":Dn("body-size-sm","weight-semibold","body-lh-sm","body-ls-sm",e),"body-sm-bold":Dn("body-size-sm","weight-bold","body-lh-sm","body-ls-sm",e),"body-xs-light":Dn("body-size-xs","weight-light","body-lh-xs","body-ls-xs",e),"body-xs-regular":Dn("body-size-xs","weight-regular","body-lh-xs","body-ls-xs",e),"body-xs-semibold":Dn("body-size-xs","weight-semibold","body-lh-xs","body-ls-xs",e),"body-xs-bold":Dn("body-size-xs","weight-bold","body-lh-xs","body-ls-xs",e),"form-label":Dn("form-label-size","weight-semibold","form-label-lh","form-label-ls",e),"form-description":Dn("form-description-size","weight-regular","form-description-lh","form-description-ls",e)}),An=Bn({disableLigatures:!0}),kn={collections:{default:Bn(),bookingsg:An,pa:Bn({disableLigatures:!0}),a11yplayground:Bn({disableLigatures:!0})},defaultValue:"default"},Mn=e=>r=>{var n;const t=r.theme,i=rn(kn,null==t?void 0:t.fontScheme),a=(null===(n=null==t?void 0:t.overrides)||void 0===n?void 0:n.font)?en(i,e,t.overrides.font):i[e];return"function"==typeof a?a(r):a},Sn={"heading-xxl-light":Mn("heading-xxl-light"),"heading-xxl-regular":Mn("heading-xxl-regular"),"heading-xxl-semibold":Mn("heading-xxl-semibold"),"heading-xxl-bold":Mn("heading-xxl-bold"),"heading-xl-light":Mn("heading-xl-light"),"heading-xl-regular":Mn("heading-xl-regular"),"heading-xl-semibold":Mn("heading-xl-semibold"),"heading-xl-bold":Mn("heading-xl-bold"),"heading-lg-light":Mn("heading-lg-light"),"heading-lg-regular":Mn("heading-lg-regular"),"heading-lg-semibold":Mn("heading-lg-semibold"),"heading-lg-bold":Mn("heading-lg-bold"),"heading-md-light":Mn("heading-md-light"),"heading-md-regular":Mn("heading-md-regular"),"heading-md-semibold":Mn("heading-md-semibold"),"heading-md-bold":Mn("heading-md-bold"),"heading-sm-light":Mn("heading-sm-light"),"heading-sm-regular":Mn("heading-sm-regular"),"heading-sm-semibold":Mn("heading-sm-semibold"),"heading-sm-bold":Mn("heading-sm-bold"),"heading-xs-light":Mn("heading-xs-light"),"heading-xs-regular":Mn("heading-xs-regular"),"heading-xs-semibold":Mn("heading-xs-semibold"),"heading-xs-bold":Mn("heading-xs-bold"),"body-baseline-light":Mn("body-baseline-light"),"body-baseline-regular":Mn("body-baseline-regular"),"body-baseline-semibold":Mn("body-baseline-semibold"),"body-baseline-bold":Mn("body-baseline-bold"),"body-md-light":Mn("body-md-light"),"body-md-regular":Mn("body-md-regular"),"body-md-semibold":Mn("body-md-semibold"),"body-md-bold":Mn("body-md-bold"),"body-sm-light":Mn("body-sm-light"),"body-sm-regular":Mn("body-sm-regular"),"body-sm-semibold":Mn("body-sm-semibold"),"body-sm-bold":Mn("body-sm-bold"),"body-xs-light":Mn("body-xs-light"),"body-xs-regular":Mn("body-xs-regular"),"body-xs-semibold":Mn("body-xs-semibold"),"body-xs-bold":Mn("body-xs-bold"),"form-label":Mn("form-label"),"form-description":Mn("form-description")},zn={collections:{default:{"duration-150":"150ms","duration-250":"250ms","duration-350":"350ms","duration-500":"500ms","duration-800":"800ms","duration-1000":"1000ms","ease-default":"cubic-bezier(0.45, 0.05, 0.55, 0.95)","ease-standard":"cubic-bezier(0.86, 0, 0.07, 1)","ease-entrance":"cubic-bezier(0.18, 0.13, 0, 1)","ease-exit":"cubic-bezier(1, 0, 0.8, 0.85)"}},defaultValue:"default"},_n=e=>r=>{var n;const t=r.theme,i=rn(zn,null==t?void 0:t.motionScheme);return(null===(n=null==t?void 0:t.overrides)||void 0===n?void 0:n.motion)?en(i,e,t.overrides.motion):i[e]},On={"duration-150":_n("duration-150"),"duration-250":_n("duration-250"),"duration-350":_n("duration-350"),"duration-500":_n("duration-500"),"duration-800":_n("duration-800"),"duration-1000":_n("duration-1000"),"ease-default":_n("ease-default"),"ease-standard":_n("ease-standard"),"ease-entrance":_n("ease-entrance"),"ease-exit":_n("ease-exit")},jn={collections:{default:{none:0,xs:2,sm:4,md:8,lg:12,full:9999}},defaultValue:"default"},Wn=e=>r=>{var n;const t=r.theme,i=rn(jn,null==t?void 0:t.radiusScheme);return(null===(n=null==t?void 0:t.overrides)||void 0===n?void 0:n.radius)?`${en(i,e,t.overrides.radius)}px`:`${i[e]}px`},Yn={none:Wn("none"),xs:Wn("xs"),sm:Wn("sm"),md:Wn("md"),lg:Wn("lg"),full:Wn("full")},Ln={collections:{default:{"spacing-0":0,"spacing-4":4,"spacing-8":8,"spacing-12":12,"spacing-16":16,"spacing-20":20,"spacing-24":24,"spacing-32":32,"spacing-40":40,"spacing-48":48,"spacing-64":64,"spacing-72":72,"layout-xs":8,"layout-sm":16,"layout-md":24,"layout-lg":32,"layout-xl":48,"layout-xxl":64,"layout-xxxl":128}},defaultValue:"default"},In=e=>r=>{var n;const t=r.theme,i=rn(Ln,null==t?void 0:t.spacingScheme);return(null===(n=null==t?void 0:t.overrides)||void 0===n?void 0:n.spacing)?`${en(i,e,t.overrides.spacing)}px`:`${i[e]}px`},Tn={"spacing-0":In("spacing-0"),"spacing-4":In("spacing-4"),"spacing-8":In("spacing-8"),"spacing-12":In("spacing-12"),"spacing-16":In("spacing-16"),"spacing-20":In("spacing-20"),"spacing-24":In("spacing-24"),"spacing-32":In("spacing-32"),"spacing-40":In("spacing-40"),"spacing-48":In("spacing-48"),"spacing-64":In("spacing-64"),"spacing-72":In("spacing-72"),"layout-xs":In("layout-xs"),"layout-sm":In("layout-sm"),"layout-md":In("layout-md"),"layout-lg":In("layout-lg"),"layout-xl":In("layout-xl"),"layout-xxl":In("layout-xxl"),"layout-xxxl":In("layout-xxxl")},Nn=Object.assign(Object.assign({},hn),{Primitive:dn}),Hn=Object.assign(Object.assign({},Sn),{Spec:En}),Rn=On,Pn=Object.assign(Object.assign({},an),{Util:pn}),Un=Tn,Vn=Yn,Xn=vn,Jn=wn,Qn=r.button`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: ${Un["spacing-24"]};
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

        ${({$highlight:e})=>e&&n`
                background-color: ${Nn["bg-hover-neutral"]};
            `}
    }
`,Zn=l.forwardRef(((e,r)=>{var{children:n,focusHighlight:t=!0,focusOutline:i="none",type:s="button"}=e,o=w(e,["children","focusHighlight","focusOutline","type"]);return a(Qn,Object.assign({ref:r,$outline:i,$highlight:t,type:s},o,{children:n}))})),Gn={notCompress:6,compress:4},Kn=r.div`
    position: ${e=>e.$fixed?"sticky":"relative"};
    background-color: white;
    z-index: 30;
    top: 0;
    left: 0;
    right: 0;
    width: 100%;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
`,qn=r.nav`
    height: ${e=>e.$compress?Gn.compress:Gn.notCompress}rem;
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    position: relative;
    transition: ${Rn["duration-350"]} ${Rn["ease-standard"]};

    ${Jn.MaxWidth.lg} {
        height: ${3.5}rem;
    }
`,et=r.div`
    display: flex;
    height: 100%;
    margin-left: ${e=>e.$hideNavBranding?"0":"5rem"};
    flex: 1;
    justify-content: flex-end;

    ${Jn.MaxWidth.lg} {
        margin-left: 0rem;
    }
`,rt=r(Zn)`
    display: none;

    ${Jn.MaxWidth.lg} {
        display: flex;
        padding: 0 1.5rem;
        margin-right: -1.5rem;
    }
`,nt=r(e)`
    height: 1.5rem;
    width: 1.5rem;
    color: ${Nn.icon};
`,tt=r.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    flex-shrink: 0;

    height: ${e=>e.$compress?1.5:2}rem;

    ${Jn.MaxWidth.lg} {
        height: 1.5rem;
    }

    ${Jn.MaxWidth.xxs} {
        height: 1.25rem;
    }
`,it=r.div`
    display: flex;
    background-color: ${Nn.border};
    height: 100%;
    width: 2px;
    margin: 0 ${e=>e.$compress?1:1.5}rem;

    ${Jn.MaxWidth.lg} {
        margin: 0 1rem;
    }

    ${Jn.MaxWidth.sm} {
        margin: 0 0.75rem;
    }
`,at=r.div`
    position: relative;

    ${e=>{const{$xxlStart:r,$xxlSpan:t,$xlStart:i,$xlSpan:a,$lgStart:s,$lgSpan:o,$mdStart:l,$mdSpan:d,$smStart:c,$smSpan:u,$xsStart:g,$xsSpan:h,$xxsStart:m,$xxsSpan:b}=e;return n`
            grid-column: ${r||"auto"} / span ${t||1};

            ${wn.MaxWidth.xl} {
                grid-column: ${i||"auto"} / span ${a||1};
            }

            ${wn.MaxWidth.lg} {
                grid-column: ${s||"auto"} / span ${o||1};
            }

            ${wn.MaxWidth.md} {
                grid-column: ${l||"auto"} / span ${d||1};
            }

            ${wn.MaxWidth.sm} {
                grid-column: ${c||"auto"} / span ${u||1};
            }

            ${wn.MaxWidth.xs} {
                grid-column: ${g||"auto"} / span ${h||1};
            }

            ${wn.MaxWidth.xxs} {
                grid-column: ${m||"auto"} / span ${b||1};
            }
        `}}
`,st=l.forwardRef(((e,r)=>{const n=t(),{xxlCols:i,xlCols:s,lgCols:o,mdCols:l,smCols:d,xsCols:c,xxsCols:u}=e,g=w(e,["xxlCols","xlCols","lgCols","mdCols","smCols","xsCols","xxsCols"]),h=(e,r,n)=>{if(!e)return{start:void 0,span:void 0};if("development"===process.env.NODE_ENV&&("number"==typeof e&&e>r?console.warn(`Warning: ${n}Cols exceeds maximum (${r}): ${e}`):Array.isArray(e)&&(e[0]>r+1||e[1]>r+1)&&console.warn(`Warning: ${n}Cols array exceeds maximum (${r}): [${e[0]}, ${e[1]}]`)),Array.isArray(e)){const[n,t]=e;if(-1===t)return{start:n,span:r-n+1};return{start:n,span:Math.min(t-n,r)}}return{start:void 0,span:Math.min(e,r)}};return a(at,Object.assign({ref:r},(()=>{const e=vn["xxl-column"]({theme:n}),r=vn["xl-column"]({theme:n}),t=vn["lg-column"]({theme:n}),a=vn["md-column"]({theme:n}),g=vn["sm-column"]({theme:n}),m=vn["xs-column"]({theme:n}),b=vn["xxs-column"]({theme:n}),f=h(i||s||o||l||d||c||u,e,"xxl"),p=h(s||o||l||d||c||u,r,"xl"),y=h(o||l||d||c||u,t,"lg"),x=h(l||d||c||u,a,"md"),v=h(d||c||u,g,"sm"),F=h(c||u,m,"xs"),w=h(u,b,"xxs");return{$xxlStart:f.start,$xxlSpan:f.span,$xlStart:p.start,$xlSpan:p.span,$lgStart:y.start,$lgSpan:y.span,$mdStart:x.start,$mdSpan:x.span,$smStart:v.start,$smSpan:v.span,$xsStart:F.start,$xsSpan:F.span,$xxsStart:w.start,$xxsSpan:w.span}})(),g))})),ot=r.div`
    flex-grow: 1;
    margin: 0 auto;
    position: relative;
    width: auto;
    height: auto;

    ${e=>e.$stretch?n`
                padding: 0 ${Xn["xxl-margin"]}px;
            `:n`
                padding: 0 ${Xn["xxl-margin"]}px;
                max-width: 1440px;

                ${Jn.MaxWidth.xl} {
                    padding: 0 ${Xn["xl-margin"]}px;
                }

                ${Jn.MaxWidth.lg} {
                    padding: 0 ${Xn["lg-margin"]}px;
                }

                ${Jn.MaxWidth.md} {
                    padding: 0 ${Xn["md-margin"]}px;
                }

                ${Jn.MaxWidth.sm} {
                    padding: 0 ${Xn["sm-margin"]}px;
                }

                ${Jn.MaxWidth.xs} {
                    padding: 0 ${Xn["xs-margin"]}px;
                }

                ${Jn.MaxWidth.xxs} {
                    padding: 0 ${Xn["xxs-margin"]}px;
                }
            `}

    ${e=>{switch(e.$type){case"grid":return n`
                    column-gap: ${Xn["xxl-gutter"]}px;
                    display: grid;
                    grid-template-columns: repeat(
                        ${Xn["xxl-column"]},
                        minmax(0, 1fr)
                    );

                    ${Jn.MaxWidth.xl} {
                        column-gap: ${Xn["xl-gutter"]}px;
                        grid-template-columns: repeat(
                            ${Xn["xl-column"]},
                            minmax(0, 1fr)
                        );
                    }

                    ${Jn.MaxWidth.lg} {
                        column-gap: ${Xn["lg-gutter"]}px;
                        grid-template-columns: repeat(
                            ${Xn["lg-column"]},
                            minmax(0, 1fr)
                        );
                    }

                    ${Jn.MaxWidth.md} {
                        column-gap: ${Xn["md-gutter"]}px;
                        grid-template-columns: repeat(
                            ${Xn["md-column"]},
                            minmax(0, 1fr)
                        );
                    }

                    ${Jn.MaxWidth.sm} {
                        column-gap: ${Xn["sm-gutter"]}px;
                        grid-template-columns: repeat(
                            ${Xn["sm-column"]},
                            minmax(0, 1fr)
                        );
                    }

                    ${Jn.MaxWidth.xs} {
                        column-gap: ${Xn["xs-gutter"]}px;
                        grid-template-columns: repeat(
                            ${Xn["xs-column"]},
                            minmax(0, 1fr)
                        );
                    }

                    ${Jn.MaxWidth.xxs} {
                        column-gap: ${Xn["xxs-gutter"]}px;
                        grid-template-columns: repeat(
                            ${Xn["xxs-column"]},
                            minmax(0, 1fr)
                        );
                    }
                `;case"flex-column":return n`
                    display: flex;
                    flex-direction: column;
                `;default:return n`
                    display: flex;
                `}}}
`,lt=l.forwardRef(((e,r)=>{const{children:n,"data-testid":t="container",type:i="flex",stretch:s=!1}=e,o=w(e,["children","data-testid","type","stretch"]);return a(ot,Object.assign({ref:r,"data-testid":t,$type:i,$stretch:s},o,{children:n}))})),dt=l.forwardRef(((e,r)=>{const{children:n,"data-testid":t="section",stretch:i=!1}=e,s=w(e,["children","data-testid","stretch"]);return a(ct,Object.assign({ref:r,"data-testid":t,$stretch:i},s,{children:n}))})),ct=r.section`
    display: block;
    position: relative;
`,ut=l.forwardRef(((e,r)=>{const{children:n,"data-testid":t="content",className:i,type:s="flex",stretch:o=!1}=e,l=w(e,["children","data-testid","className","type","stretch"]);return a(dt,Object.assign({ref:r,"data-testid":t,className:i,stretch:o},l,{children:a(lt,{"data-testid":`${t}-container`,type:s,"data-id":"container",stretch:o,children:n})}))})),gt={Section:dt,Container:lt,Content:ut,ColDiv:st},ht=r.div`
    // matches Layout.Container
    ${e=>e.$stretch?n`
                --sgds-mainnav-padding-x: ${Xn["xxl-margin"]}px;
                --sgds-mainnav-mobile-padding-x: ${Xn["xxl-margin"]}px;
            `:n`
                --sgds-mainnav-max-width: 1440px;

                --sgds-mainnav-padding-x: ${Xn["xxl-margin"]}px;
                --sgds-mainnav-mobile-padding-x: ${Xn["xxl-margin"]}px;

                ${Jn.MaxWidth.xl} {
                    --sgds-mainnav-padding-x: ${Xn["xl-margin"]}px;
                    --sgds-mainnav-mobile-padding-x: ${Xn["xl-margin"]}px;
                }

                ${Jn.MaxWidth.lg} {
                    --sgds-mainnav-padding-x: ${Xn["lg-margin"]}px;
                    --sgds-mainnav-mobile-padding-x: ${Xn["lg-margin"]}px;
                }

                ${Jn.MaxWidth.md} {
                    --sgds-mainnav-padding-x: ${Xn["md-margin"]}px;
                    --sgds-mainnav-mobile-padding-x: ${Xn["md-margin"]}px;
                }

                ${Jn.MaxWidth.sm} {
                    --sgds-mainnav-padding-x: ${Xn["sm-margin"]}px;
                    --sgds-mainnav-mobile-padding-x: ${Xn["sm-margin"]}px;
                }

                ${Jn.MaxWidth.xs} {
                    --sgds-mainnav-padding-x: ${Xn["xs-margin"]}px;
                    --sgds-mainnav-mobile-padding-x: ${Xn["xs-margin"]}px;
                }

                ${Jn.MaxWidth.xxs} {
                    --sgds-mainnav-padding-x: ${Xn["xxs-margin"]}px;
                    --sgds-mainnav-mobile-padding-x: ${Xn["xxs-margin"]}px;
                }
            `}
`,mt=({stretch:e=!1})=>{d((()=>{r()||n()}),[]);const r=()=>document.getElementById(bt),n=()=>{if(!document.getElementById(bt)){const e=document.createElement("script");e.id=bt,e.type="module",e.src=ft,document.head.appendChild(e)}};return a(ht,{dangerouslySetInnerHTML:{__html:"<sgds-masthead></sgds-masthead>"},$stretch:e})},bt="lifesg-ds-masthead-script",ft="https://cdn.jsdelivr.net/npm/@govtechsg/sgds-web-component/Masthead/index.js";var pt={exports:{}};pt.exports=function(){var e=1e3,r=6e4,n=36e5,t="millisecond",i="second",a="minute",s="hour",o="day",l="week",d="month",c="quarter",u="year",g="date",h="Invalid Date",m=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,b=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,f={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(e){var r=["th","st","nd","rd"],n=e%100;return"["+e+(r[(n-20)%10]||r[n]||r[0])+"]"}},p=function(e,r,n){var t=String(e);return!t||t.length>=r?e:""+Array(r+1-t.length).join(n)+e},y={s:p,z:function(e){var r=-e.utcOffset(),n=Math.abs(r),t=Math.floor(n/60),i=n%60;return(r<=0?"+":"-")+p(t,2,"0")+":"+p(i,2,"0")},m:function e(r,n){if(r.date()<n.date())return-e(n,r);var t=12*(n.year()-r.year())+(n.month()-r.month()),i=r.clone().add(t,d),a=n-i<0,s=r.clone().add(t+(a?-1:1),d);return+(-(t+(n-i)/(a?i-s:s-i))||0)},a:function(e){return e<0?Math.ceil(e)||0:Math.floor(e)},p:function(e){return{M:d,y:u,w:l,d:o,D:g,h:s,m:a,s:i,ms:t,Q:c}[e]||String(e||"").toLowerCase().replace(/s$/,"")},u:function(e){return void 0===e}},x="en",v={};v[x]=f;var F="$isDayjsObject",w=function(e){return e instanceof D||!(!e||!e[F])},$=function e(r,n,t){var i;if(!r)return x;if("string"==typeof r){var a=r.toLowerCase();v[a]&&(i=a),n&&(v[a]=n,i=a);var s=r.split("-");if(!i&&s.length>1)return e(s[0])}else{var o=r.name;v[o]=r,i=o}return!t&&i&&(x=i),i||!t&&x},C=function(e,r){if(w(e))return e.clone();var n="object"==typeof r?r:{};return n.date=e,n.args=arguments,new D(n)},E=y;E.l=$,E.i=w,E.w=function(e,r){return C(e,{locale:r.$L,utc:r.$u,x:r.$x,$offset:r.$offset})};var D=function(){function f(e){this.$L=$(e.locale,null,!0),this.parse(e),this.$x=this.$x||e.x||{},this[F]=!0}var p=f.prototype;return p.parse=function(e){this.$d=function(e){var r=e.date,n=e.utc;if(null===r)return new Date(NaN);if(E.u(r))return new Date;if(r instanceof Date)return new Date(r);if("string"==typeof r&&!/Z$/i.test(r)){var t=r.match(m);if(t){var i=t[2]-1||0,a=(t[7]||"0").substring(0,3);return n?new Date(Date.UTC(t[1],i,t[3]||1,t[4]||0,t[5]||0,t[6]||0,a)):new Date(t[1],i,t[3]||1,t[4]||0,t[5]||0,t[6]||0,a)}}return new Date(r)}(e),this.init()},p.init=function(){var e=this.$d;this.$y=e.getFullYear(),this.$M=e.getMonth(),this.$D=e.getDate(),this.$W=e.getDay(),this.$H=e.getHours(),this.$m=e.getMinutes(),this.$s=e.getSeconds(),this.$ms=e.getMilliseconds()},p.$utils=function(){return E},p.isValid=function(){return!(this.$d.toString()===h)},p.isSame=function(e,r){var n=C(e);return this.startOf(r)<=n&&n<=this.endOf(r)},p.isAfter=function(e,r){return C(e)<this.startOf(r)},p.isBefore=function(e,r){return this.endOf(r)<C(e)},p.$g=function(e,r,n){return E.u(e)?this[r]:this.set(n,e)},p.unix=function(){return Math.floor(this.valueOf()/1e3)},p.valueOf=function(){return this.$d.getTime()},p.startOf=function(e,r){var n=this,t=!!E.u(r)||r,c=E.p(e),h=function(e,r){var i=E.w(n.$u?Date.UTC(n.$y,r,e):new Date(n.$y,r,e),n);return t?i:i.endOf(o)},m=function(e,r){return E.w(n.toDate()[e].apply(n.toDate("s"),(t?[0,0,0,0]:[23,59,59,999]).slice(r)),n)},b=this.$W,f=this.$M,p=this.$D,y="set"+(this.$u?"UTC":"");switch(c){case u:return t?h(1,0):h(31,11);case d:return t?h(1,f):h(0,f+1);case l:var x=this.$locale().weekStart||0,v=(b<x?b+7:b)-x;return h(t?p-v:p+(6-v),f);case o:case g:return m(y+"Hours",0);case s:return m(y+"Minutes",1);case a:return m(y+"Seconds",2);case i:return m(y+"Milliseconds",3);default:return this.clone()}},p.endOf=function(e){return this.startOf(e,!1)},p.$set=function(e,r){var n,l=E.p(e),c="set"+(this.$u?"UTC":""),h=(n={},n[o]=c+"Date",n[g]=c+"Date",n[d]=c+"Month",n[u]=c+"FullYear",n[s]=c+"Hours",n[a]=c+"Minutes",n[i]=c+"Seconds",n[t]=c+"Milliseconds",n)[l],m=l===o?this.$D+(r-this.$W):r;if(l===d||l===u){var b=this.clone().set(g,1);b.$d[h](m),b.init(),this.$d=b.set(g,Math.min(this.$D,b.daysInMonth())).$d}else h&&this.$d[h](m);return this.init(),this},p.set=function(e,r){return this.clone().$set(e,r)},p.get=function(e){return this[E.p(e)]()},p.add=function(t,c){var g,h=this;t=Number(t);var m=E.p(c),b=function(e){var r=C(h);return E.w(r.date(r.date()+Math.round(e*t)),h)};if(m===d)return this.set(d,this.$M+t);if(m===u)return this.set(u,this.$y+t);if(m===o)return b(1);if(m===l)return b(7);var f=(g={},g[a]=r,g[s]=n,g[i]=e,g)[m]||1,p=this.$d.getTime()+t*f;return E.w(p,this)},p.subtract=function(e,r){return this.add(-1*e,r)},p.format=function(e){var r=this,n=this.$locale();if(!this.isValid())return n.invalidDate||h;var t=e||"YYYY-MM-DDTHH:mm:ssZ",i=E.z(this),a=this.$H,s=this.$m,o=this.$M,l=n.weekdays,d=n.months,c=n.meridiem,u=function(e,n,i,a){return e&&(e[n]||e(r,t))||i[n].slice(0,a)},g=function(e){return E.s(a%12||12,e,"0")},m=c||function(e,r,n){var t=e<12?"AM":"PM";return n?t.toLowerCase():t};return t.replace(b,(function(e,t){return t||function(e){switch(e){case"YY":return String(r.$y).slice(-2);case"YYYY":return E.s(r.$y,4,"0");case"M":return o+1;case"MM":return E.s(o+1,2,"0");case"MMM":return u(n.monthsShort,o,d,3);case"MMMM":return u(d,o);case"D":return r.$D;case"DD":return E.s(r.$D,2,"0");case"d":return String(r.$W);case"dd":return u(n.weekdaysMin,r.$W,l,2);case"ddd":return u(n.weekdaysShort,r.$W,l,3);case"dddd":return l[r.$W];case"H":return String(a);case"HH":return E.s(a,2,"0");case"h":return g(1);case"hh":return g(2);case"a":return m(a,s,!0);case"A":return m(a,s,!1);case"m":return String(s);case"mm":return E.s(s,2,"0");case"s":return String(r.$s);case"ss":return E.s(r.$s,2,"0");case"SSS":return E.s(r.$ms,3,"0");case"Z":return i}return null}(e)||i.replace(":","")}))},p.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},p.diff=function(t,g,h){var m,b=this,f=E.p(g),p=C(t),y=(p.utcOffset()-this.utcOffset())*r,x=this-p,v=function(){return E.m(b,p)};switch(f){case u:m=v()/12;break;case d:m=v();break;case c:m=v()/3;break;case l:m=(x-y)/6048e5;break;case o:m=(x-y)/864e5;break;case s:m=x/n;break;case a:m=x/r;break;case i:m=x/e;break;default:m=x}return h?m:E.a(m)},p.daysInMonth=function(){return this.endOf(d).$D},p.$locale=function(){return v[this.$L]},p.locale=function(e,r){if(!e)return this.$L;var n=this.clone(),t=$(e,r,!0);return t&&(n.$L=t),n},p.clone=function(){return E.w(this.$d,this)},p.toDate=function(){return new Date(this.valueOf())},p.toJSON=function(){return this.isValid()?this.toISOString():null},p.toISOString=function(){return this.$d.toISOString()},p.toString=function(){return this.$d.toUTCString()},f}(),B=D.prototype;return C.prototype=B,[["$ms",t],["$s",i],["$m",a],["$H",s],["$W",o],["$M",d],["$y",u],["$D",g]].forEach((function(e){B[e[1]]=function(r){return this.$g(r,e[0],e[1])}})),C.extend=function(e,r){return e.$i||(e(r,D,C),e.$i=!0),C},C.locale=$,C.isDayjs=w,C.unix=function(e){return C(1e3*e)},C.en=v[x],C.Ls=v,C.p={},C}();var yt=C(pt.exports),xt={exports:{}};xt.exports=function(){var e={LTS:"h:mm:ss A",LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D, YYYY",LLL:"MMMM D, YYYY h:mm A",LLLL:"dddd, MMMM D, YYYY h:mm A"},r=/(\[[^[]*\])|([-_:/.,()\s]+)|(A|a|YYYY|YY?|MM?M?M?|Do|DD?|hh?|HH?|mm?|ss?|S{1,3}|z|ZZ?)/g,n=/\d\d/,t=/\d\d?/,i=/\d*[^-_:/,()\s\d]+/,a={},s=function(e){return(e=+e)+(e>68?1900:2e3)},o=function(e){return function(r){this[e]=+r}},l=[/[+-]\d\d:?(\d\d)?|Z/,function(e){(this.zone||(this.zone={})).offset=function(e){if(!e)return 0;if("Z"===e)return 0;var r=e.match(/([+-]|\d\d)/g),n=60*r[1]+(+r[2]||0);return 0===n?0:"+"===r[0]?-n:n}(e)}],d=function(e){var r=a[e];return r&&(r.indexOf?r:r.s.concat(r.f))},c=function(e,r){var n,t=a.meridiem;if(t){for(var i=1;i<=24;i+=1)if(e.indexOf(t(i,0,r))>-1){n=i>12;break}}else n=e===(r?"pm":"PM");return n},u={A:[i,function(e){this.afternoon=c(e,!1)}],a:[i,function(e){this.afternoon=c(e,!0)}],S:[/\d/,function(e){this.milliseconds=100*+e}],SS:[n,function(e){this.milliseconds=10*+e}],SSS:[/\d{3}/,function(e){this.milliseconds=+e}],s:[t,o("seconds")],ss:[t,o("seconds")],m:[t,o("minutes")],mm:[t,o("minutes")],H:[t,o("hours")],h:[t,o("hours")],HH:[t,o("hours")],hh:[t,o("hours")],D:[t,o("day")],DD:[n,o("day")],Do:[i,function(e){var r=a.ordinal,n=e.match(/\d+/);if(this.day=n[0],r)for(var t=1;t<=31;t+=1)r(t).replace(/\[|\]/g,"")===e&&(this.day=t)}],M:[t,o("month")],MM:[n,o("month")],MMM:[i,function(e){var r=d("months"),n=(d("monthsShort")||r.map((function(e){return e.slice(0,3)}))).indexOf(e)+1;if(n<1)throw new Error;this.month=n%12||n}],MMMM:[i,function(e){var r=d("months").indexOf(e)+1;if(r<1)throw new Error;this.month=r%12||r}],Y:[/[+-]?\d+/,o("year")],YY:[n,function(e){this.year=s(e)}],YYYY:[/\d{4}/,o("year")],Z:l,ZZ:l};function g(n){var t,i;t=n,i=a&&a.formats;for(var s=(n=t.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g,(function(r,n,t){var a=t&&t.toUpperCase();return n||i[t]||e[t]||i[a].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g,(function(e,r,n){return r||n.slice(1)}))}))).match(r),o=s.length,l=0;l<o;l+=1){var d=s[l],c=u[d],g=c&&c[0],h=c&&c[1];s[l]=h?{regex:g,parser:h}:d.replace(/^\[|\]$/g,"")}return function(e){for(var r={},n=0,t=0;n<o;n+=1){var i=s[n];if("string"==typeof i)t+=i.length;else{var a=i.regex,l=i.parser,d=e.slice(t),c=a.exec(d)[0];l.call(r,c),e=e.replace(c,"")}}return function(e){var r=e.afternoon;if(void 0!==r){var n=e.hours;r?n<12&&(e.hours+=12):12===n&&(e.hours=0),delete e.afternoon}}(r),r}}return function(e,r,n){n.p.customParseFormat=!0,e&&e.parseTwoDigitYear&&(s=e.parseTwoDigitYear);var t=r.prototype,i=t.parse;t.parse=function(e){var r=e.date,t=e.utc,s=e.args;this.$u=t;var o=s[1];if("string"==typeof o){var l=!0===s[2],d=!0===s[3],c=l||d,u=s[2];d&&(u=s[2]),a=this.$locale(),!l&&u&&(a=n.Ls[u]),this.$d=function(e,r,n){try{if(["x","X"].indexOf(r)>-1)return new Date(("X"===r?1e3:1)*e);var t=g(r)(e),i=t.year,a=t.month,s=t.day,o=t.hours,l=t.minutes,d=t.seconds,c=t.milliseconds,u=t.zone,h=new Date,m=s||(i||a?1:h.getDate()),b=i||h.getFullYear(),f=0;i&&!a||(f=a>0?a-1:h.getMonth());var p=o||0,y=l||0,x=d||0,v=c||0;return u?new Date(Date.UTC(b,f,m,p,y,x,v+60*u.offset*1e3)):n?new Date(Date.UTC(b,f,m,p,y,x,v)):new Date(b,f,m,p,y,x,v)}catch(e){return new Date("")}}(r,o,t),this.init(),u&&!0!==u&&(this.$L=this.locale(u).$L),c&&r!=this.format(o)&&(this.$d=new Date("")),a={}}else if(o instanceof Array)for(var h=o.length,m=1;m<=h;m+=1){s[1]=o[m-1];var b=n.apply(this,s);if(b.isValid()){this.$d=b.$d,this.$L=b.$L,this.init();break}m===h&&(this.$d=new Date(""))}else i.call(this,e)}}}();var vt=C(xt.exports),Ft={exports:{}};Ft.exports=function(e,r,n){r.prototype.isBetween=function(e,r,t,i){var a=n(e),s=n(r),o="("===(i=i||"()")[0],l=")"===i[1];return(o?this.isAfter(a,t):!this.isBefore(a,t))&&(l?this.isBefore(s,t):!this.isAfter(s,t))||(o?this.isBefore(a,t):!this.isAfter(a,t))&&(l?this.isAfter(s,t):!this.isBefore(s,t))}};var wt=C(Ft.exports),$t={exports:{}};$t.exports=function(e,r){r.prototype.isSameOrAfter=function(e,r){return this.isSame(e,r)||this.isAfter(e,r)}};var Ct=C($t.exports),Et={exports:{}};Et.exports=function(e,r){r.prototype.isSameOrBefore=function(e,r){return this.isSame(e,r)||this.isBefore(e,r)}};var Dt,Bt,At,kt=C(Et.exports),Mt={exports:{}},St=C(Mt.exports=(Dt={year:0,month:1,day:2,hour:3,minute:4,second:5},Bt={},function(e,r,n){var t,i=function(e,r,n){void 0===n&&(n={});var t=new Date(e),i=function(e,r){void 0===r&&(r={});var n=r.timeZoneName||"short",t=e+"|"+n,i=Bt[t];return i||(i=new Intl.DateTimeFormat("en-US",{hour12:!1,timeZone:e,year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit",timeZoneName:n}),Bt[t]=i),i}(r,n);return i.formatToParts(t)},a=function(e,r){for(var t=i(e,r),a=[],s=0;s<t.length;s+=1){var o=t[s],l=o.type,d=o.value,c=Dt[l];c>=0&&(a[c]=parseInt(d,10))}var u=a[3],g=24===u?0:u,h=a[0]+"-"+a[1]+"-"+a[2]+" "+g+":"+a[4]+":"+a[5]+":000",m=+e;return(n.utc(h).valueOf()-(m-=m%1e3))/6e4},s=r.prototype;s.tz=function(e,r){void 0===e&&(e=t);var i=this.utcOffset(),a=this.toDate(),s=a.toLocaleString("en-US",{timeZone:e}),o=Math.round((a-new Date(s))/1e3/60),l=n(s,{locale:this.$L}).$set("millisecond",this.$ms).utcOffset(15*-Math.round(a.getTimezoneOffset()/15)-o,!0);if(r){var d=l.utcOffset();l=l.add(i-d,"minute")}return l.$x.$timezone=e,l},s.offsetName=function(e){var r=this.$x.$timezone||n.tz.guess(),t=i(this.valueOf(),r,{timeZoneName:e}).find((function(e){return"timezonename"===e.type.toLowerCase()}));return t&&t.value};var o=s.startOf;s.startOf=function(e,r){if(!this.$x||!this.$x.$timezone)return o.call(this,e,r);var t=n(this.format("YYYY-MM-DD HH:mm:ss:SSS"),{locale:this.$L});return o.call(t,e,r).tz(this.$x.$timezone,!0)},n.tz=function(e,r,i){var s=i&&r,o=i||r||t,l=a(+n(),o);if("string"!=typeof e)return n(e).tz(o);var d=function(e,r,n){var t=e-60*r*1e3,i=a(t,n);if(r===i)return[t,r];var s=a(t-=60*(i-r)*1e3,n);return i===s?[t,i]:[e-60*Math.min(i,s)*1e3,Math.max(i,s)]}(n.utc(e,s).valueOf(),l,o),c=d[0],u=d[1],g=n(c).utcOffset(u);return g.$x.$timezone=o,g},n.tz.guess=function(){return Intl.DateTimeFormat().resolvedOptions().timeZone},n.tz.setDefault=function(e){t=e}}));yt.extend(wt),yt.extend(kt),yt.extend(Ct),yt.extend(vt),yt.extend(St),function(e){e.generateDays=e=>{const r=e.startOf("month"),n=yt(r).startOf("week");return zt(n).map((e=>_t(e)))},e.generateDaysForCurrentWeek=e=>{const r=e.startOf("week");return _t(r)},e.generateMonths=e=>{const r=[];for(let n=0;n<12;n++){const t=e.month(n);r.push(yt(t))}return r},e.generateDecadeOfYears=e=>{const r=e.year(),n=10*Math.floor(r/10),t=e.year(n),i=[t.subtract(1,"year"),t];for(let e=1;e<11;e++)i.push(t.add(e,"year"));return i},e.getStartEndDecade=e=>{const r=10*Math.floor(+e.format("YYYY")/10);return{beginDecade:r,endDecade:+yt(`${r+9}-01-01`).format("YYYY")}},e.convertTo12HourFormat=e=>{const r=yt(e,"HH:mm");return r.isValid()?r.format("h:mm a"):""},e.isWithinRange=(e,r,n,t="day")=>!r&&!n||(r&&n?e.isBetween(r,n,t,"[]"):r?e.isSameOrAfter(r,t):e.isSameOrBefore(n,t)),e.isPreviousMonthWithinRange=(r,n)=>e.isWithinRange(r.subtract(1,"month"),n,void 0,"month"),e.isPreviousYearWithinRange=(r,n)=>e.isWithinRange(r.subtract(1,"year"),n,void 0,"year"),e.isPreviousDecadeWithinRange=(r,n)=>{const{beginDecade:t}=e.getStartEndDecade(r);return e.isWithinRange(r.year(t).subtract(1,"year"),n,void 0,"year")},e.isNextMonthWithinRange=(r,n)=>e.isWithinRange(r.add(1,"month"),void 0,n,"month"),e.isNextYearWithinRange=(r,n)=>e.isWithinRange(r.add(1,"year"),void 0,n,"year"),e.isNextDecadeWithinRange=(r,n)=>{const{endDecade:t}=e.getStartEndDecade(r);return e.isWithinRange(r.year(t).add(1,"year"),void 0,n,"year")},e.getWeekStartEnd=e=>({start:e.startOf("week").format("YYYY-MM-DD"),end:e.endOf("week").format("YYYY-MM-DD")}),e.getFixedRangeStartEnd=(e,r)=>({start:e.format("YYYY-MM-DD"),end:e.add(r-1,"day").format("YYYY-MM-DD")}),e.isDisabledDay=(r,n,t,i)=>{const a=e.isWithinRange(r,t?yt(t):void 0,i?yt(i):void 0),s=n&&n.includes(r.format("YYYY-MM-DD"));return!a||!!s}}(At||(At={}));const zt=e=>{const r=[e];for(let n=1;n<6;n++){const t=e.add(n,"week");r.push(t)}return r},_t=e=>{const r=[];for(let n=0;n<7;n++){const t=e.add(n,"day");r.push(t)}return r},Ot=[1,3,5,7,8,10,12],jt=[4,6,9,11];var Wt,Yt,Lt,It;!function(e){e.clampDay=(r,n,t)=>{const i=parseInt(r),a=parseInt(n),s=parseInt(t);return 0==i?"1":Ot.includes(a)?Math.min(i,31).toString():jt.includes(a)?Math.min(i,30).toString():2===a?e.isLeapYear(s)?Math.min(i,29).toString():Math.min(i,28).toString():r},e.clampMonth=e=>{const r=parseInt(e);return 0==r?"1":r>12?"12":e},e.isLeapYear=e=>e%4==0&&e%100!=0||e%400==0,e.getTimeDiffInMinutes=(e,r,n="HH:mm")=>{const t=yt(e,n);return yt(r,n).diff(t,"minute")},e.toDayjs=e=>e?yt(e):yt(),e.addMinutesToTime=(e,r,n="HH:mm")=>yt(e,n).add(r,"minutes").format(n),e.isSame=(e,r,n="day")=>yt(e).isSame(yt(r),n)}(Wt||(Wt={})),function(e){e.isDateDisabled=(e,r)=>{const{disabledDates:n,minDate:t,maxDate:i}=r;return!!(e&&n&&n.length&&n.includes(e))||(!(!t||!yt(e).isBefore(t,"day"))||!(!i||!yt(e).isAfter(i,"day")))},e.sanitizeInput=e=>{if(e){if(yt(e).isValid())return e}return""}}(Yt||(Yt={})),function(e){e.generate=()=>Math.random().toString(36).substring(2,9)}(Lt||(Lt={})),function(e){e.transformWithSpaces=(e,r)=>{const n="(.{"+r+"})";return e.replace(/[^\dA-Z]/gi,"").replace(new RegExp(n,"g"),"$1 ").trim()},e.padValue=(e,r)=>{if("0"===e)return r?e:e.padStart(2,"0");if(""===e)return e;return parseInt(e).toString().padStart(2,"0")},e.shouldTruncateToTwoLines=(e,r)=>{const n=Math.floor(r/9);return e.length>=2*n||1===e.split(" ").length&&e.length>n},e.truncateOneLine=(e,r,n,t,i=8)=>{let a=0;r>n&&(a=Math.floor((r-n)/i));const s=t+a;if(s<e.length){const r=Math.floor(s/2);return e.substring(0,r)+" ... "+e.substring(e.length-r,e.length)}return e},e.truncateTwoLines=(e,r,n,t=1.2)=>{const i=Math.floor(2*r/(.6*n))*(2/t);if(e.length<=i)return e;const a=Math.floor(.6*i),s=Math.floor(.2*i);return`${e.substring(0,a)}...${e.substring(e.length-s)}`},e.getTextWidth=(r,n)=>{if("undefined"==typeof document)return 0;const t=(e.getTextWidth.canvas||(e.getTextWidth.canvas=document.createElement("canvas"))).getContext("2d");t.font=n;return t.measureText(r).width},e.maskValue=(e,n)=>{if(!e)return e;const{maskRange:t,unmaskRange:i,maskChar:a="•",maskRegex:s,maskTransformer:o}=n;if(o)return o(e);if(s)return e.replace(s,a);if(t){const{startIndex:n,endIndex:i}=r(t[0],t[1]);return e.substring(0,n)+a.repeat(e.substring(n,i+1).length)+e.substring(i+1)}if(i){const{startIndex:n,endIndex:t}=r(i[0],i[1]);return a.repeat(e.substring(0,n).length)+e.substring(n,t+1)+a.repeat(e.substring(t+1).length)}return e};const r=(e,r)=>e<r?{startIndex:e,endIndex:r}:{startIndex:r,endIndex:e},n=new Intl.PluralRules("en",{type:"ordinal"}),t=new Map([["one","st"],["two","nd"],["few","rd"],["other","th"]]);e.formatOrdinal=e=>{const r=n.select(e);return`${e}${t.get(r)}`}}(It||(It={}));const Tt=r.div`
    position: fixed;
    left: 0;
    top: 0;
    height: 0;
    width: 0;
    visibility: hidden;
    z-index: ${e=>e.$zIndex};

    ${e=>{if(e.$show)return n`
                height: 100%;
                width: 100vw;
                visibility: visible;
            `}}
`,Nt=r.div`
    position: absolute;
    left: 0;
    top: 0;
    background-color: ${e=>e.$stacked?Nn["overlay-subtle"]:Nn["overlay-strong"]};
    backdrop-filter: ${e=>(e=>{let r="";return e&&(r+="blur(10px)"),r.length>0?r:"none"})(e.$backgroundBlur)};
    transition: opacity 200ms ease;

    ${e=>{let r="";return e.$show?r+=n`
                visibility: visible;
                opacity: 1;
                pointer-events: auto;
                height: 100%;
                width: 100vw;
            `:r+=n`
                visibility: hidden;
                opacity: 0;
                transition-delay: ${e.$disableTransition?"0ms":"400ms"};
                pointer-events: none;
                height: 0;
                width: 0;
            `,e.$disableTransition&&(r+=n`
                transition: none;
            `),r}}
`;var Ht;!function(e){e.Ready="overlay-context-ready",e.Change="overlay-context-change"}(Ht||(Ht={}));const Rt=({show:e=!1,rootId:r,onOverlayClick:n,children:t,backgroundOpacity:i,backgroundBlur:s=!0,disableTransition:o=!1,enableOverlayClick:g=!1,zIndex:h,id:b})=>{const[x,v]=c(null),[F,w]=c(),[$]=c((()=>Lt.generate())),C=f(),E=u(),D=u(null),B=t&&l.cloneElement(t,{ref:D}),A=b?`lifesg-ds-overlay-root-${b}`:"lifesg-ds-overlay-root",k=null!=h?h:F?99999:99998;(e=>{const r=m();d((()=>{if(!r)return;const n={zIndex:e};r.events.emit(Ht.Change,n)}),[r,e]),d((()=>{if(!r)return;const n=()=>{const n={zIndex:e};r.events.emit(Ht.Change,n)};return null==r||r.events.on(Ht.Ready,n),()=>null==r?void 0:r.events.off(Ht.Ready,n)}),[r,e])})(k),d((()=>(_(),v(S()),()=>{Y(),j().length<1&&O("remove")})),[]),d((()=>{if(e){const e=z();M(e),W();const r=setTimeout((()=>{O("add")}),200);return()=>clearTimeout(r)}{Y();const e=setTimeout((()=>{j().length<1&&O("remove")}),200);return()=>clearTimeout(e)}}),[e]);const M=e=>{E.current=e,w(e)},S=()=>document&&r?document.getElementById(r):document?document.body:null,z=()=>j().length>0,_=()=>{if(!document.getElementById(Ut)){const e=document.createElement("style");e.id=Ut;const r=document.documentElement.clientWidth,n=window.innerWidth-r;e.innerHTML=`\n\t\t\t\t.${Vt} {\n\t\t\t\t\toverflow: hidden;\n\t\t\t\t\tpadding-right: ${n}px !important;\n\t\t\t\t\t-ms-overflow-style: none;\n\t\t\t\t\tscrollbar-width: none;\n\t\t\t\t}\n\n\t\t\t\t.${Vt}::-webkit-scrollbar {\n\t\t\t\t\tdisplay: none;\n\t\t\t\t}\n\t\t\t`,document.body.appendChild(e)}},O=e=>{const r=document.body.classList.contains(Vt);"add"!==e||r?"remove"===e&&r&&document.body.classList.remove(Vt):document.body.classList.add(Vt)},j=()=>{const e=document.body.dataset.lifesgDsOverlayOrder;return e?e.split(","):[]},W=()=>{const e=j();document.body.dataset.lifesgDsOverlayOrder=[...e,$].join(",")},Y=()=>{const e=j();document.body.dataset.lifesgDsOverlayOrder=e.filter((e=>e!==$)).join(",")},L=e=>{var r;const t=null===(r=D.current)||void 0===r?void 0:r.firstChild;t&&t.contains(e.target)||n&&g&&(e.preventDefault(),n())};return x?y.createPortal(a(Tt,{id:A,"data-testid":A,$show:e,$zIndex:k,children:t&&a(p,{id:C,children:a(Nt,{"data-testid":"overlay-wrapper",$show:e,$stacked:F,$backgroundBlur:s,$disableTransition:o,onClick:L,children:B})})}),x):null},Pt=e=>a(b,{children:a(Rt,Object.assign({},e))}),Ut="lifesg-ds-overlay-stylesheet",Vt="lifesg-ds-overlay-open",Xt=r.a`
    display: flex;
    justify-content: center;
    height: 100%;

    img {
        width: auto;
        height: 100%;
        transition: ${Rn["duration-150"]} ${Rn["ease-default"]};
        object-fit: contain;
    }
`;const Jt=({src:e,alt:r,className:n,"data-testid":t})=>a("img",{src:e,alt:r||"",className:n,"data-testid":t,onError:e=>{e.target.onerror=null,e.target.src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKAAAABQCAYAAACeXX40AAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAARTSURBVHgB7Z1tUuJAEIY7qMRYWnIE9wR6BD2Be5S9weoN1pusJ1iPwJ5guYH4GeNH2HkppgojYAIhbXrepwoJEMofPHZP9zQxkgJpmh5HUfTdHZ6624EQsiLOp7676+d5fp4kyeDda/5gNBr1siz76Q5/CCHr41ccx+dOyiEejAWcyHflDg+FkDWDiNjtdk8gYQdPTCIf5SON4ALe0cQ5idya78CZ+E8IaRgn4gki4JkQogCK3Y77wdRLtDiNnp6eRkKIEh0hRBEKSFShgEQVCkhUoYBEFQpIVKGARBUKSFShgEQVCkhUoYBEFQpIVNkUokqWZfLy8iJvb2/jx1tbWxLHsWxsbEgIcBpGCQh3e3srr6+vH16Lokh2dnbGN+swAioA+a6vrzERPPN1PP/w8CB5nsvu7q5YhmvAhoFciHzz5JsmTVNxGUosQwEbBmu+WWl3Ho+Pj6VkbSsUsGGqRjSka6Riq1DAhllGJkZAUhuocKtCAUltLNPfs9wTpIAL8M3hOtne3q50PhrTnY7dj4kCzgFrteFwKM/Pz1In3W53vNNRFvYBA+Xm5mYs4bzdilWAVJubn+8B7O3tlTqvzVDAGaAB7KVDAXB/f19rIYCU2uv1JEmSmUUJpMPrVdN1G+FecAGs+5B6i+0SpM79/X2pG/weyI57yIiCw3rUm4Z7wVMgyt3d3c3s1WEtiMiIqFUniIaQO1SYgqfALgVGo+aBVFx3URI6FHACoh4mUD4DRYnlrbGmoYATUPWWKTRwDtaIlncnmoQCyvuqtwwoVJCOyeoELyBkKpN6i2C9iFEpshrBC1h2OHQWEHeZogTvwVwgCVxARLBVdzmqFiUQD+/BbR17zW0jWAHx4deRQhE9yxYwfu3oz10l+lohWAHLSlMGRFE0sBfhhxumoyXeF3oxE6SAiHx1pz+k1nnj9pDODzcUwXusf/FoEcEJiKizruoVUbC4k+LlW7TW9F/BDJHgBFz3uqu4l4zHnxU6fuwrxPVgUAKi4bzuytNf8cAPNpRt0yByhthXDGYcC1EIVyNoCoxUVW3xYBwLQ6hVJqbbThAR0EejJlmmv+iHX0NaDwYhYB0N56bw68FQMC8gxMPar02EtB40LyBSbxurS7RmFg3HWsG0gG1KvbNo6x9PFcwKiOixzJjVV2K6pWMVkwL6atIC1ke3TArY9tRbpMxuSlsxJ2Abq94yWE3F5gS0+kFZ/R6KKQFRdFieMsbYlrXobkbAUJq31ka3zFyaAwKGsomPqrjuS4RowYsTEVX4xXSiCgUkqlBAogoFJKpQQKIKBSSqUECiCgUkqlBAogoFJKpAwIEQokO/k+f5pRCiQBRF/ShN02N38EcIaZjRaPStkyTJlYuCF0JIs1w49wbj/5TnTOxlWYYoeCSErJ+/cRwj8w7HVTAO3BMnjISkAS68fHjw4X+FujXhgbs7cyccCiMiqYeBu126TPsbS77pF/4DuxeyMpdnp3gAAAAASUVORK5CYII="}}),Qt=({resources:e,onClick:r,"data-id":n,"data-testid":t="navbar-brand",type:i})=>a(Xt,{role:"link",onClick:e=>{r&&r(e,i)},tabIndex:0,"data-id":n,"data-testid":t,$type:i,children:a(Jt,{src:e.logoSrc,alt:e.brandName})}),Zt=r.div`
    display: none;

    ${Jn.MaxWidth.lg} {
        display: flex;
    }
`,Gt=r.div`
    position: absolute;
    overflow-y: auto;
    overflow-x: hidden;
    height: 100vh;
    display: block;
    padding: 0 0 ${Un["spacing-16"]};
    background-color: white;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);
    visibility: ${e=>e.$show?"visible":"hidden"};

    ${e=>e.$show?n`
            right: 0;
            transition: all 300ms ${Rn["ease-entrance"]};
            transition-delay: 200ms;
        `:n`
        right: -100%;
        transition: all 300ms ${Rn["ease-exit"]};
    `}
    ${e=>{const r=`${e.$viewHeight}px`||"1vh";return n`
            height: calc(${r} * 100);
        `}}

	${Jn.MaxWidth.lg} {
        width: 75%;
    }

    ${Jn.MaxWidth.sm} {
        width: 100%;
    }
`,Kt=r.div`
    display: flex;
    flex-direction: column;
`,qt=r.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;
    padding: ${Un["spacing-40"]} ${Un["spacing-20"]}
        ${Un["spacing-32"]};
`,ei=r(x)`
    height: 1.5rem;
    width: 1.5rem;
`,ri=r(Zn)`
    position: absolute;
    right: -${Un["spacing-4"]};
    color: ${Nn.icon};

    :active,
    :focus {
        color: ${Nn["icon-hover"]};
    }

    svg {
        height: 1.5rem;
        width: 1.5rem;
    }
`,ni=l.forwardRef(((e,r)=>{const{show:n,resources:t={},children:i,hideNavBranding:l,onClose:u,onBrandClick:g}=e,[h,m]=c(0),{primary:b,secondary:f}=t;d((()=>(p(),window.addEventListener("resize",p),()=>{window.removeEventListener("resize",p)})),[]);const p=()=>{if(window){const e=.01*window.innerHeight;m(e)}};return a(Zt,{ref:r,"data-testid":"drawer",children:a(Gt,{$show:n,$viewHeight:h,children:s(Kt,{children:[s(qt,{children:[a(tt,{"data-id":"drawer-brand-container",children:!l&&s(o,{children:[b&&a(Qt,{resources:b,compress:!0,onClick:g,"data-id":"drawer-brand-primary","data-testid":"drawer__brand",type:"primary"}),f&&s(o,{children:[a(it,{}),a(Qt,{resources:f,compress:!0,onClick:g,"data-id":"drawer-brand-secondary","data-testid":"drawer__brand-secondary",type:"secondary"})]})]})}),a(ri,{onClick:u,focusHighlight:!1,"aria-label":"Close nav menu",children:a(ei,{})})]}),i]})})})}));var ti=function(e,r,n,t){for(var i=e.length,a=n+(t?1:-1);t?a--:++a<i;)if(r(e[a],a,e))return a;return-1},ii=ar;var ai=function(e){var r=this.__data__,n=r.delete(e);return this.size=r.size,n};var si=function(e){return this.__data__.get(e)};var oi=function(e){return this.__data__.has(e)},li=ar,di=sr,ci=Dr;var ui=function(e,r){var n=this.__data__;if(n instanceof li){var t=n.__data__;if(!di||t.length<199)return t.push([e,r]),this.size=++n.size,this;n=this.__data__=new ci(t)}return n.set(e,r),this.size=n.size,this},gi=ar,hi=function(){this.__data__=new ii,this.size=0},mi=ai,bi=si,fi=oi,pi=ui;function yi(e){var r=this.__data__=new gi(e);this.size=r.size}yi.prototype.clear=hi,yi.prototype.delete=mi,yi.prototype.get=bi,yi.prototype.has=fi,yi.prototype.set=pi;var xi=yi;var vi=Dr,Fi=function(e){return this.__data__.set(e,"__lodash_hash_undefined__"),this},wi=function(e){return this.__data__.has(e)};function $i(e){var r=-1,n=null==e?0:e.length;for(this.__data__=new vi;++r<n;)this.add(e[r])}$i.prototype.add=$i.prototype.push=Fi,$i.prototype.has=wi;var Ci=function(e,r){return e.has(r)},Ei=$i,Di=function(e,r){for(var n=-1,t=null==e?0:e.length;++n<t;)if(r(e[n],n,e))return!0;return!1},Bi=Ci;var Ai=function(e,r,n,t,i,a){var s=1&n,o=e.length,l=r.length;if(o!=l&&!(s&&l>o))return!1;var d=a.get(e),c=a.get(r);if(d&&c)return d==r&&c==e;var u=-1,g=!0,h=2&n?new Ei:void 0;for(a.set(e,r),a.set(r,e);++u<o;){var m=e[u],b=r[u];if(t)var f=s?t(b,m,u,r,e,a):t(m,b,u,e,r,a);if(void 0!==f){if(f)continue;g=!1;break}if(h){if(!Di(r,(function(e,r){if(!Bi(h,r)&&(m===e||i(m,e,n,t,a)))return h.push(r)}))){g=!1;break}}else if(m!==b&&!i(m,b,n,t,a)){g=!1;break}}return a.delete(e),a.delete(r),g};var ki=function(e){var r=-1,n=Array(e.size);return e.forEach((function(e,t){n[++r]=[t,e]})),n};var Mi=k.Uint8Array,Si=Ne,zi=Ai,_i=ki,Oi=function(e){var r=-1,n=Array(e.size);return e.forEach((function(e){n[++r]=e})),n},ji=M?M.prototype:void 0,Wi=ji?ji.valueOf:void 0;var Yi=function(e,r,n,t,i,a,s){switch(n){case"[object DataView]":if(e.byteLength!=r.byteLength||e.byteOffset!=r.byteOffset)return!1;e=e.buffer,r=r.buffer;case"[object ArrayBuffer]":return!(e.byteLength!=r.byteLength||!a(new Mi(e),new Mi(r)));case"[object Boolean]":case"[object Date]":case"[object Number]":return Si(+e,+r);case"[object Error]":return e.name==r.name&&e.message==r.message;case"[object RegExp]":case"[object String]":return e==r+"";case"[object Map]":var o=_i;case"[object Set]":var l=1&t;if(o||(o=Oi),e.size!=r.size&&!l)return!1;var d=s.get(e);if(d)return d==r;t|=2,s.set(e,r);var c=zi(o(e),o(r),t,i,a,s);return s.delete(e),c;case"[object Symbol]":if(Wi)return Wi.call(e)==Wi.call(r)}return!1};var Li=function(e,r){for(var n=-1,t=r.length,i=e.length;++n<t;)e[i+n]=r[n];return e},Ii=E;var Ti=function(e,r,n){var t=r(e);return Ii(e)?t:Li(t,n(e))};var Ni=function(e,r){for(var n=-1,t=null==e?0:e.length,i=0,a=[];++n<t;){var s=e[n];r(s,n,e)&&(a[i++]=s)}return a},Hi=function(){return[]},Ri=Object.prototype.propertyIsEnumerable,Pi=Object.getOwnPropertySymbols,Ui=Pi?function(e){return null==e?[]:(e=Object(e),Ni(Pi(e),(function(r){return Ri.call(e,r)})))}:Hi;var Vi=function(e,r){for(var n=-1,t=Array(e);++n<e;)t[n]=r(n);return t},Xi=N,Ji=H;var Qi=function(e){return Ji(e)&&"[object Arguments]"==Xi(e)},Zi=H,Gi=Object.prototype,Ki=Gi.hasOwnProperty,qi=Gi.propertyIsEnumerable,ea=Qi(function(){return arguments}())?Qi:function(e){return Zi(e)&&Ki.call(e,"callee")&&!qi.call(e,"callee")},ra={exports:{}};var na=function(){return!1};!function(e,r){var n=k,t=na,i=r&&!r.nodeType&&r,a=i&&e&&!e.nodeType&&e,s=a&&a.exports===i?n.Buffer:void 0,o=(s?s.isBuffer:void 0)||t;e.exports=o}(ra,ra.exports);var ta=ra.exports,ia=/^(?:0|[1-9]\d*)$/;var aa=function(e,r){var n=typeof e;return!!(r=null==r?9007199254740991:r)&&("number"==n||"symbol"!=n&&ia.test(e))&&e>-1&&e%1==0&&e<r};var sa=function(e){return"number"==typeof e&&e>-1&&e%1==0&&e<=9007199254740991},oa=N,la=sa,da=H,ca={};ca["[object Float32Array]"]=ca["[object Float64Array]"]=ca["[object Int8Array]"]=ca["[object Int16Array]"]=ca["[object Int32Array]"]=ca["[object Uint8Array]"]=ca["[object Uint8ClampedArray]"]=ca["[object Uint16Array]"]=ca["[object Uint32Array]"]=!0,ca["[object Arguments]"]=ca["[object Array]"]=ca["[object ArrayBuffer]"]=ca["[object Boolean]"]=ca["[object DataView]"]=ca["[object Date]"]=ca["[object Error]"]=ca["[object Function]"]=ca["[object Map]"]=ca["[object Number]"]=ca["[object Object]"]=ca["[object RegExp]"]=ca["[object Set]"]=ca["[object String]"]=ca["[object WeakMap]"]=!1;var ua=function(e){return da(e)&&la(e.length)&&!!ca[oa(e)]};var ga=function(e){return function(r){return e(r)}},ha={exports:{}};!function(e,r){var n=D,t=r&&!r.nodeType&&r,i=t&&e&&!e.nodeType&&e,a=i&&i.exports===t&&n.process,s=function(){try{var e=i&&i.require&&i.require("util").types;return e||a&&a.binding&&a.binding("util")}catch(e){}}();e.exports=s}(ha,ha.exports);var ma=ha.exports,ba=ua,fa=ga,pa=ma&&ma.isTypedArray,ya=pa?fa(pa):ba,xa=Vi,va=ea,Fa=E,wa=ta,$a=aa,Ca=ya,Ea=Object.prototype.hasOwnProperty;var Da=function(e,r){var n=Fa(e),t=!n&&va(e),i=!n&&!t&&wa(e),a=!n&&!t&&!i&&Ca(e),s=n||t||i||a,o=s?xa(e.length,String):[],l=o.length;for(var d in e)!r&&!Ea.call(e,d)||s&&("length"==d||i&&("offset"==d||"parent"==d)||a&&("buffer"==d||"byteLength"==d||"byteOffset"==d)||$a(d,l))||o.push(d);return o},Ba=Object.prototype;var Aa=function(e){var r=e&&e.constructor;return e===("function"==typeof r&&r.prototype||Ba)};var ka=function(e,r){return function(n){return e(r(n))}}(Object.keys,Object),Ma=Aa,Sa=ka,za=Object.prototype.hasOwnProperty;var _a=function(e){if(!Ma(e))return Sa(e);var r=[];for(var n in Object(e))za.call(e,n)&&"constructor"!=n&&r.push(n);return r},Oa=re,ja=sa;var Wa=Da,Ya=_a,La=function(e){return null!=e&&ja(e.length)&&!Oa(e)};var Ia=function(e){return La(e)?Wa(e):Ya(e)},Ta=Ti,Na=Ui,Ha=Ia;var Ra=function(e){return Ta(e,Ha,Na)},Pa=Object.prototype.hasOwnProperty;var Ua=function(e,r,n,t,i,a){var s=1&n,o=Ra(e),l=o.length;if(l!=Ra(r).length&&!s)return!1;for(var d=l;d--;){var c=o[d];if(!(s?c in r:Pa.call(r,c)))return!1}var u=a.get(e),g=a.get(r);if(u&&g)return u==r&&g==e;var h=!0;a.set(e,r),a.set(r,e);for(var m=s;++d<l;){var b=e[c=o[d]],f=r[c];if(t)var p=s?t(f,b,c,r,e,a):t(b,f,c,e,r,a);if(!(void 0===p?b===f||i(b,f,n,t,a):p)){h=!1;break}m||(m="constructor"==c)}if(h&&!m){var y=e.constructor,x=r.constructor;y==x||!("constructor"in e)||!("constructor"in r)||"function"==typeof y&&y instanceof y&&"function"==typeof x&&x instanceof x||(h=!1)}return a.delete(e),a.delete(r),h},Va=ve(k,"DataView"),Xa=sr,Ja=ve(k,"Promise"),Qa=ve(k,"Set"),Za=ve(k,"WeakMap"),Ga=N,Ka=se,qa="[object Map]",es="[object Promise]",rs="[object Set]",ns="[object WeakMap]",ts="[object DataView]",is=Ka(Va),as=Ka(Xa),ss=Ka(Ja),os=Ka(Qa),ls=Ka(Za),ds=Ga;(Va&&ds(new Va(new ArrayBuffer(1)))!=ts||Xa&&ds(new Xa)!=qa||Ja&&ds(Ja.resolve())!=es||Qa&&ds(new Qa)!=rs||Za&&ds(new Za)!=ns)&&(ds=function(e){var r=Ga(e),n="[object Object]"==r?e.constructor:void 0,t=n?Ka(n):"";if(t)switch(t){case is:return ts;case as:return qa;case ss:return es;case os:return rs;case ls:return ns}return r});var cs=xi,us=Ai,gs=Yi,hs=Ua,ms=ds,bs=E,fs=ta,ps=ya,ys="[object Arguments]",xs="[object Array]",vs="[object Object]",Fs=Object.prototype.hasOwnProperty;var ws=function(e,r,n,t,i,a){var s=bs(e),o=bs(r),l=s?xs:ms(e),d=o?xs:ms(r),c=(l=l==ys?vs:l)==vs,u=(d=d==ys?vs:d)==vs,g=l==d;if(g&&fs(e)){if(!fs(r))return!1;s=!0,c=!1}if(g&&!c)return a||(a=new cs),s||ps(e)?us(e,r,n,t,i,a):gs(e,r,l,n,t,i,a);if(!(1&n)){var h=c&&Fs.call(e,"__wrapped__"),m=u&&Fs.call(r,"__wrapped__");if(h||m){var b=h?e.value():e,f=m?r.value():r;return a||(a=new cs),i(b,f,n,t,a)}}return!!g&&(a||(a=new cs),hs(e,r,n,t,i,a))},$s=H;var Cs=function e(r,n,t,i,a){return r===n||(null==r||null==n||!$s(r)&&!$s(n)?r!=r&&n!=n:ws(r,n,t,i,e,a))},Es=xi,Ds=Cs;var Bs=function(e,r,n,t){var i=n.length,a=i,s=!t;if(null==e)return!a;for(e=Object(e);i--;){var o=n[i];if(s&&o[2]?o[1]!==e[o[0]]:!(o[0]in e))return!1}for(;++i<a;){var l=(o=n[i])[0],d=e[l],c=o[1];if(s&&o[2]){if(void 0===d&&!(l in e))return!1}else{var u=new Es;if(t)var g=t(d,c,l,e,r,u);if(!(void 0===g?Ds(c,d,3,t,u):g))return!1}}return!0},As=G;var ks=function(e){return e==e&&!As(e)},Ms=ks,Ss=Ia;var zs=function(e){for(var r=Ss(e),n=r.length;n--;){var t=r[n],i=e[t];r[n]=[t,i,Ms(i)]}return r};var _s=function(e,r){return function(n){return null!=n&&(n[e]===r&&(void 0!==r||e in Object(n)))}},Os=Bs,js=zs,Ws=_s;var Ys=function(e,r){return null!=e&&r in Object(e)},Ls=Ur,Is=ea,Ts=E,Ns=aa,Hs=sa,Rs=Xr;var Ps=function(e,r,n){for(var t=-1,i=(r=Ls(r,e)).length,a=!1;++t<i;){var s=Rs(r[t]);if(!(a=null!=e&&n(e,s)))break;e=e[s]}return a||++t!=i?a:!!(i=null==e?0:e.length)&&Hs(i)&&Ns(s,i)&&(Ts(e)||Is(e))},Us=Ys,Vs=Ps;var Xs=Cs,Js=Kr,Qs=function(e,r){return null!=e&&Vs(e,r,Us)},Zs=Z,Gs=ks,Ks=_s,qs=Xr;var eo=function(e){return function(r){return null==r?void 0:r[e]}},ro=Zr;var no=eo,to=function(e){return function(r){return ro(r,e)}},io=Z,ao=Xr;var so=function(e){var r=js(e);return 1==r.length&&r[0][2]?Ws(r[0][0],r[0][1]):function(n){return n===e||Os(n,e,r)}},oo=function(e,r){return Zs(e)&&Gs(r)?Ks(qs(e),r):function(n){var t=Js(n,e);return void 0===t&&t===r?Qs(n,e):Xs(r,t,3)}},lo=function(e){return e},co=E,uo=function(e){return io(e)?no(ao(e)):to(e)};var go=/\s/;var ho=function(e){for(var r=e.length;r--&&go.test(e.charAt(r)););return r},mo=/^\s+/;var bo=function(e){return e?e.slice(0,ho(e)+1).replace(mo,""):e},fo=G,po=U,yo=/^[-+]0x[0-9a-f]+$/i,xo=/^0b[01]+$/i,vo=/^0o[0-7]+$/i,Fo=parseInt;var wo=function(e){if("number"==typeof e)return e;if(po(e))return NaN;if(fo(e)){var r="function"==typeof e.valueOf?e.valueOf():e;e=fo(r)?r+"":r}if("string"!=typeof e)return 0===e?e:+e;e=bo(e);var n=xo.test(e);return n||vo.test(e)?Fo(e.slice(2),n?2:8):yo.test(e)?NaN:+e},$o=1/0;var Co=function(e){return e?(e=wo(e))===$o||e===-1/0?17976931348623157e292*(e<0?-1:1):e==e?e:0:0===e?e:0};var Eo=ti,Do=function(e){return"function"==typeof e?e:null==e?lo:"object"==typeof e?co(e)?oo(e[0],e[1]):so(e):uo(e)},Bo=function(e){var r=Co(e),n=r%1;return r==r?n?r-n:r:0},Ao=Math.max;var ko=C((function(e,r,n){var t=null==e?0:e.length;if(!t)return-1;var i=null==n?0:Bo(n);return i<0&&(i=Ao(t+i,0)),Eo(e,Do(r),i)}));const Mo=r.div`
    display: inline-block;
    position: relative;
    width: ${({$size:e})=>e?`${e}px`:"1em"};
    height: ${({$size:e})=>e?`${e}px`:"1em"};
    color: ${e=>e.$color||"currentColor"};
`,So=i`
	0% {
	  transform: rotate(0deg);
	}
	100% {
	  transform: rotate(360deg);
	}
`,zo=r.div`
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
    animation: ${So} 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
`,_o=r(zo)`
    animation-delay: -0.45s;
`,Oo=r(zo)`
    animation-delay: -0.3s;
`,jo=r(zo)`
    animation-delay: -0.15s;
`,Wo={collections:{default:{Button:{"button-radius":Yn.sm,"button-default-colour-bg":hn["bg-primary"],"button-default-colour-bg-hover":hn["bg-primary-hover"],"button-default-colour-text":hn["text-inverse"],"button-secondary-colour-border":hn["border-primary"],"button-secondary-colour-text":hn["text-primary"],"button-light-colour-text":hn["text-primary"],"button-link-colour-text":hn["text-primary"]}},pa:{Button:{"button-radius":Yn.full,"button-default-colour-bg":hn["bg-primary"],"button-default-colour-bg-hover":hn["bg-primary-hover"],"button-default-colour-text":hn["text-inverse"],"button-secondary-colour-border":hn["border-primary"],"button-secondary-colour-text":hn["text-primary"],"button-light-colour-text":hn["text-primary"],"button-link-colour-text":hn["text-primary"]}}},defaultValue:"default"},Yo=(e,r)=>n=>{var t,i;const a=n.theme,s=rn(Wo,null==a?void 0:a.componentScheme);return Lo((null===(i=null===(t=null==a?void 0:a.componentOverrides)||void 0===t?void 0:t[e])||void 0===i?void 0:i[r])||s[e][r],n)},Lo=(e,r)=>{switch(typeof e){case"function":return e(r);case"number":return e+"px";case"string":return e}},Io=Yo("Button","button-radius"),To=Yo("Button","button-default-colour-bg"),No=Yo("Button","button-default-colour-bg-hover"),Ho=Yo("Button","button-default-colour-text"),Ro=Yo("Button","button-secondary-colour-border"),Po=Yo("Button","button-secondary-colour-text"),Uo=Yo("Button","button-light-colour-text"),Vo=Yo("Button","button-link-colour-text"),Xo=r.button`
    padding: ${Un["spacing-8"]} ${Un["spacing-16"]};
    min-width: 4rem;
    border: ${Pn["width-010"]} ${Pn.solid} transparent;
    transition: all ${Rn["duration-250"]} ${Rn["ease-default"]};
    border-radius: ${Io};
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;

    // -----------------------------------------------------------------------------
    // BUTTON STYLE + TEXT COLOR
    // -----------------------------------------------------------------------------
    ${e=>{switch(e.$buttonStyle){case"secondary":return n`
                    background-color: ${Nn.Primitive.white};
                    border-color: ${e.$buttonIsDanger?Nn["border-error-strong"]:Ro};

                    color: ${e.$buttonIsDanger?Nn["text-error"]:Po};

                    &:hover,
                    &:active {
                        background-color: ${Nn["bg-hover-neutral"]};
                    }
                `;case"light":return n`
                    background-color: ${Nn.bg};
                    border-color: ${Nn.border};

                    color: ${e.$buttonIsDanger?Nn["text-error"]:Uo};

                    &:hover,
                    &:active {
                        background-color: ${Nn["bg-hover-neutral"]};
                    }
                `;case"link":return n`
                    background-color: transparent;

                    color: ${e.$buttonIsDanger?Nn["text-error"]:Vo};
                    &:hover,
                    &:active {
                        background-color: ${Nn["bg-hover-neutral"]};
                    }
                `;case"disabled":return n`
                    background-color: ${Nn["bg-disabled"]};

                    cursor: not-allowed;

                    &:hover {
                        box-shadow: none;
                    }

                    color: ${Nn["text-disabled"]};
                `;default:return n`
                    background-color: ${e.$buttonIsDanger?Nn["bg-error-strong"]:To};};

                    ${Jn.MaxWidth.sm} {
                        width: 100%;
                    }

                    color: ${Ho}};

                    &:hover,
                    &:active {
                        background-color: ${e.$buttonIsDanger?Nn["bg-error-strong-hover"]:No}
                        };
                    }
                `}}}

    // -----------------------------------------------------------------------------
	// BUTTON SIZE + TEXT SIZE
	// -----------------------------------------------------------------------------
	${e=>{switch(e.$buttonSizeStyle){case"small":return n`
                    height: 2.5rem;
                    ${Hn["body-md-semibold"]}

                    ${Jn.MaxWidth.xxs} {
                        height: auto;
                    }
                `;case"large":return n`
                    height: 4rem;
                    ${Hn["heading-md-semibold"]}

                    ${Jn.MaxWidth.xxs} {
                        height: auto;
                    }
                `;default:return n`
                    height: 3rem;
                    ${Hn["heading-xs-semibold"]}

                    ${Jn.MaxWidth.xxs} {
                        height: auto;
                    }
                `}}}
`,Jo=r((({color:e,className:r,size:n})=>s(Mo,{className:r,$size:n,$color:e,"data-testid":"component-loading-spinner",children:[a(zo,{id:"inner1"}),a(_o,{id:"inner2"}),a(Oo,{id:"inner3"}),a(jo,{id:"inner4"})]})))`
    margin-right: 0.5rem;
`,Qo=(e,r)=>{const{children:n,disabled:t=!1,loading:i=!1,styleType:o="default",danger:l=!1}=e,d=w(e,["children","disabled","loading","styleType","danger"]),c={$buttonStyle:t?"disabled":o,$buttonSizeStyle:"default",$buttonIsDanger:l};return s(Xo,Object.assign({ref:r,"data-testid":d["data-testid"]||"button",disabled:t},c,d,{children:[i&&a(Jo,{}),a("span",{children:n})]}))};Qo.displayName="Button.Default";const Zo=(e,r)=>{const{children:n,disabled:t=!1,loading:i=!1,styleType:o="default",danger:l=!1}=e,d=w(e,["children","disabled","loading","styleType","danger"]),c={$buttonStyle:t?"disabled":o,$buttonSizeStyle:"small",$buttonIsDanger:l};return s(Xo,Object.assign({ref:r,"data-testid":d["data-testid"]||"button",disabled:t},c,d,{children:[i&&a(Jo,{}),a("span",{children:n})]}))};Zo.displayName="Button.Small";const Go=(e,r)=>{const{children:n,disabled:t=!1,loading:i=!1,styleType:o="default",danger:l=!1}=e,d=w(e,["children","disabled","loading","styleType","danger"]),c={$buttonStyle:t?"disabled":o,$buttonSizeStyle:"large",$buttonIsDanger:l};return s(Xo,Object.assign({ref:r,"data-testid":d["data-testid"]||"button",disabled:t},c,d,{children:[i&&a(Jo,{}),a("span",{children:n})]}))};Go.displayName="Button.Large";const Ko={Default:l.forwardRef(Qo),Small:l.forwardRef(Zo),Large:l.forwardRef(Go)},qo=e=>n`
    display: -webkit-box;
    -webkit-line-clamp: ${e};
    -webkit-box-orient: vertical;
    overflow: hidden;
`,el=(e,r,t=!1)=>n`
        ${Hn[`${e}-${r}`]}
        ${t?"margin-bottom: 1.05em;":"margin-bottom: 0;"}
    `,rl=e=>{if(e)return n`
            ${qo(e)}
        `},nl=(e,r)=>n`
    ${el(e,r.weight||"regular",r.paragraph)}
    ${((e=!1,r=!1,t)=>r?n`
            display: block;
            ${rl(t)}
        `:e?n`
            display: inline;
        `:n`
            display: block;
            ${rl(t)}
        `)(r.inline,r.paragraph,r.maxLines)}
    color: ${Nn.text};
`;var tl;!function(e){const t=(e,n,t)=>{const i=r(e).attrs((({inline:e})=>({as:e?"span":void 0})))`
            ${e=>nl(n,e)}
        `;return i.displayName=`Typography.${t}`,i};e.HeadingXXL=t("h1","heading-xxl","HeadingXXL"),e.HeadingXL=t("h2","heading-xl","HeadingXL"),e.HeadingLG=t("h3","heading-lg","HeadingLG"),e.HeadingMD=t("h4","heading-md","HeadingMD"),e.HeadingSM=t("h5","heading-sm","HeadingSM"),e.HeadingXS=t("h6","heading-xs","HeadingXS");const i=(e,n)=>{const t=r.p.attrs((({inline:e})=>({as:e?"span":void 0})))`
            ${r=>nl(e,r)}
        `;return t.displayName=`Typography.${n}`,t};e.BodyBL=i("body-baseline","BodyBL"),e.BodyMD=i("body-md","BodyMD"),e.BodySM=i("body-sm","BodySM"),e.BodyXS=i("body-xs","BodyXS");const o=(e,t)=>{const i=r.a`
            ${r=>n`
                ${el(e,r.weight||"regular")}
                color: ${Nn.hyperlink};
                text-decoration: none;

                :hover,
                :active,
                :focus {
                    color: ${Nn["text-hover"]};
                }
            `}
        `,o=e=>{var{external:r=!1,children:n}=e,t=w(e,["external","children"]);return s(i,Object.assign({},t,{children:[n,r&&a(il,{})]}))};return o.displayName=`Typography.${t}`,o};e.LinkBL=o("body-baseline","LinkBL"),e.LinkMD=o("body-md","LinkMD"),e.LinkSM=o("body-sm","LinkSM"),e.LinkXS=o("body-xs","LinkXS")}(tl||(tl={}));const il=r(v)`
    height: 1lh;
    width: 1em;
    margin-left: 0.4em;
    vertical-align: middle;
`,al=r.ul`
    display: flex;
    list-style: none;
    margin-left: ${Un["spacing-64"]};
    flex-shrink: 0;

    ${Jn.MaxWidth.lg} {
        display: none;
    }
`,sl=r.ul`
    display: none;

    ${Jn.MaxWidth.lg} {
        display: flex;
        list-style: none;
        margin-left: ${Un["spacing-64"]};
        flex-shrink: 0;
    }
`,ol=r.ul`
    display: none;
    list-style: none;

    ${Jn.MaxWidth.lg} {
        display: flex;
        flex-direction: column;
        margin-top: ${Un["spacing-40"]};
        width: max-content;
        min-width: 22rem;
        max-width: 24rem;
    }

    ${Jn.MaxWidth.sm} {
        width: 100%;
        max-width: unset;
        min-width: unset;
    }
`,ll=r.li`
    position: relative;
    display: flex;
    align-items: center;

    :not(:last-of-type) {
        margin-right: ${Un["spacing-16"]};
    }

    ${Jn.MaxWidth.lg} {
        width: 100%;
        padding: 0 0 0 ${Un["spacing-16"]};
        justify-content: center;

        :not(:last-of-type) {
            margin-right: 0;
            margin-bottom: ${e=>e.$mobile?Un["spacing-16"]:"0"};
        }
    }

    ${Jn.MaxWidth.sm} {
        ${e=>{if(e.$mobile)return n`
                    padding: 0 ${Un["spacing-16"]};
                `}}
    }
`,dl=r(Ko.Small)`
    ${Jn.MaxWidth.lg} {
        width: 100%;
    }
`,cl=r.div`
    display: none;

    ${Jn.MaxWidth.lg} {
        display: flex;
        flex-direction: column;
        margin-top: ${Un["spacing-40"]};
    }
`,ul=r(tl.BodyMD)`
    margin-bottom: ${Un["spacing-8"]};
`,gl=r.div`
    display: flex;
`,hl=r.a`
    :not(:last-child) {
        margin-right: ${Un["spacing-16"]};
    }

    img {
        width: auto;
        height: auto;
        object-fit: contain;
    }

    ${Jn.MaxWidth.lg} {
        img {
            max-width: 11rem;
        }
    }

    ${Jn.MaxWidth.sm} {
        img {
            max-width: 100%;
        }
    }
`,ml=({actionButtons:e,mobile:r=!1,onActionButtonClick:n})=>{const t=e=>{e.stopPropagation()},i=e=>r=>{r.stopPropagation(),"download"===e.type&&window.scrollTo({left:0,top:document.body.scrollHeight,behavior:"smooth"}),n(r,e)},l=(e,r)=>{const n=e?(e=>{const r=ko(e,(e=>"download"===e.type));if(r>-1){const n=[...e],t=n.splice(r,1);return[...n,t[0]]}return e})(r):r;return n.map(((r,n)=>{let o;switch(r.type){case"download":o=e?(l=r.args,s(cl,{children:[a(ul,{weight:"semibold",children:l&&l.children||"Download the app"}),s(gl,{children:[a(hl,{href:"https://apps.apple.com/sg/app/moments-of-life/id1383218758",target:"_blank",rel:"noopener noreferrer","data-testid":"button__app-store",onClick:t,children:a("img",{src:"https://assets.life.gov.sg/react-design-system/img/download/apple-app-store.png",alt:"apple-app-store"})}),a(hl,{href:"https://play.google.com/store/apps/details?id=sg.gov.app.mol&hl=en_SG",target:"_blank",rel:"noopener noreferrer","data-testid":"button__play-store",onClick:t,children:a("img",{src:"https://assets.life.gov.sg/react-design-system/img/download/google-play-store.png",alt:"google-play-store"})})]})]})):a(dl,Object.assign({},r.args,{type:"button",onClick:i(r),"data-testid":"action-button__download",children:"Download the app"}));break;case"button":{const t=r.args["data-testid"]?`action-button__${r.args["data-testid"]}`:`action-button__button-${e?"mobile-":""}${n+1}`;o=a(dl,Object.assign({},r.args,{type:"button",onClick:i(r),"data-testid":t}));break}case"component":{const e=r.args;o=e&&e.render||null;break}default:o=null}var l;if(o)return a(ll,{$mobile:e,children:o},`action-button-${n+1}`)}))};if(e){const n=(null==e?void 0:e.mobile)||e.desktop,t=n.filter((e=>!!e.uncollapsible)),i=n.filter((e=>!e.uncollapsible));return r?a(o,{children:i.length>0&&a(ol,{children:l(r,i)})}):s(o,{children:[t.length>0&&a(sl,{children:l(!1,t)}),e.desktop.length>0&&a(al,{children:l(r,e.desktop)})]})}return a(o,{})};var bl;!function(e){e.isNavItemCommon=e=>!!e.onClick,e.isNavItemLink=e=>{const r=e;return!r.itemType||"link"===r.itemType}}(bl||(bl={}));const fl=r.ul`
    display: flex;
    flex-direction: column;
    position: absolute;
    left: 0;
    top: 100%;

    min-width: 15.625rem;
    width: 100%;
    max-height: 20rem;
    overflow: auto;

    padding: ${Un["spacing-8"]} 0;

    background: ${Nn.bg};
    border-radius: ${Vn.md};
    box-shadow: 0px 2px 8px 0px
        rgb(from ${Nn.Primitive["neutral-50"]} r g b / 25%);
`,pl=r.ul`
    display: none;
    list-style: none;

    ${Jn.MaxWidth.lg} {
        border-left: ${Pn["width-040"]} solid ${Nn["border-selected"]};
        display: flex;
        flex-direction: column;
    }
`,yl=r(tl.LinkBL)`
    width: 100%;
    position: relative;
    text-align: left;
    color: ${Nn.text};

    margin: 0 ${Un["spacing-8"]};

    // use border, as padding still shows an extra line after the ellipsis
    border: ${Pn.solid} transparent;
    border-width: ${Un["spacing-12"]} ${Un["spacing-8"]};

    border-radius: ${Vn.md};

    ${qo(2)}
    white-space: pre-wrap;

    :hover,
    :active,
    :focus {
        background-color: ${Nn["bg-hover"]};
        color: ${Nn.text};
    }

    ${Jn.MaxWidth.lg} {
        ${Hn["body-md-regular"]}
    }
`,xl=r.li`
    width: 100%;
    position: relative;
    display: flex;
    align-items: flex-start;
`,vl=({items:e,mobile:r=!1,onItemClick:n})=>{const t=e=>r=>{r.stopPropagation(),n(r,e)},i=(r=!1)=>e.map(((e,n)=>{const{children:i,options:s}=e,o=w(e,["children","options"]),l=r?`link__mobile-${n+1}`:`link__${n+1}`;return a(xl,{children:a(yl,Object.assign({"data-testid":l},o,{onClick:t(e)},s,{children:i}))},n)}));if(e&&e.length>0){return a(r?pl:fl,{children:i(r)})}return a(o,{})},Fl=r.ul`
    display: flex;
    list-style: none;
    position: relative;

    ${e=>e.$alignLeft&&"margin-right: auto;"}

    ${Jn.MaxWidth.lg} {
        display: none;
    }
`,wl=r.ul`
    display: none;
    list-style: none;

    ${Jn.MaxWidth.lg} {
        display: flex;
        flex-direction: column;
        overflow: hidden;
    }
`,$l=r.li`
    display: flex;
    margin-left: 1rem;

    :first-child {
        // negative margin to preserve touch target size for link
        margin-left: ${e=>e.$hiddenBranding?"-0.5rem":"0"};
    }

    ${Jn.MaxWidth.lg} {
        flex-direction: column;
        padding: 0.125rem 0;
        width: 100%;
        margin-left: 0rem;
    }
`,Cl=r(tl.LinkMD)`
    display: flex;
    position: relative;
    align-items: center;
    text-align: center;
    color: ${Nn.text};
    height: 100%;
    padding: 0 0.5rem;

    :active,
    :focus,
    :hover {
        color: ${e=>e.$selected?Nn["text-selected-hover"]:Nn["text-hover"]};
    }

    ${Jn.MaxWidth.lg} {
        width: 100%;
        padding: 0.5rem 1rem;
        text-align: left;
        align-items: flex-start;
    }
`,El=r.div`
    flex: 1;
    margin-top: 0.25rem;

    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 3;
    white-space: pre-wrap;
`,Dl=r.div`
    position: absolute;
    bottom: 0;
    height: 0.25rem;
    left: 0.5rem;
    right: 0.5rem;
    background-color: ${Nn["border-selected"]};

    :hover {
        ${e=>e.$selected&&Nn["border-selected-hover"]};
    }

    ${Jn.MaxWidth.lg} {
        left: 0;
        right: unset;
        top: 0;
        bottom: 0;
        height: 100%;
        width: 0.25rem;
    }
`,Bl=r.div`
    padding-left: 0.5rem;
    margin-right: -0.5rem;
`,Al=r(Zn)`
    padding: 0.5rem;
    transform: rotate(${e=>e.$selected?0:180}deg);
    transition: transform 300ms ease-in-out;
    margin: auto 0.25rem auto 0;
`,kl=r(F)`
    height: 1.25rem;
    width: 1.25rem;
    color: ${Nn.icon};
    :hover {
        ${e=>e.$selected?Nn["icon-selected-hover"]:Nn["icon-hover"]};
    }
`,Ml=({items:e,selectedId:r,mobile:n=!1,hideNavBranding:t,onItemClick:i})=>{const[l,g]=c(-1),[h,m]=c(!1),b=u(null);d((()=>{const e=e=>{b.current&&!b.current.contains(e.target)&&f()};return document.addEventListener("click",e,!0),()=>{document.removeEventListener("click",e,!0)}}),[]);const f=()=>{m(!1)},p=(e,r)=>n=>{n.stopPropagation(),g(r),m(!0),i(n,e)},y=(e,r)=>{e.stopPropagation(),i(e,r),m(!1)},x=()=>e.map(((e,i)=>{if("component"===e.itemType){const r=e&&e.children||null;return a("li",{children:r},i)}{const o=(e=>{if(e.id===r)return!0;if(e.subMenu&&e.subMenu.length>=1)return!!e.subMenu.find((e=>e.id===r));return!1})(e),{children:d,options:c}=e,u=w(e,["children","options"]),g=o?n?"bold":"semibold":"regular",m=n?`link__mobile-${i+1}`:`link__${i+1}`,b=l>=0&&l===i&&h;return s($l,{$hiddenBranding:t,children:[s(Cl,Object.assign({"data-testid":m,weight:g,$selected:o},u,{onClick:p(e,i)},c,{children:[a(El,{children:d}),o&&a(Dl,{"data-testid":`${m}-indicator`,$selected:o}),n&&e.subMenu&&a(Bl,{children:a(Al,{"data-testid":`${m}-expand-collapse-button`,$selected:b,focusHighlight:!1,focusOutline:"browser","aria-label":b?"Collapse":"Expand",children:a(kl,{$selected:o})})})]})),b&&e.subMenu&&a(vl,{items:e.subMenu,mobile:n,onItemClick:y})]},i)}}));return e&&e.length>0?n?a(wl,{ref:b,children:x()}):a(Fl,{ref:b,$alignLeft:t,children:x()}):a(o,{})},Sl={primary:{brandName:"LifeSG",logoSrc:"https://assets.life.gov.sg/lifesg/logo-lifesg.svg"}},zl={primary:{brandName:"BookingSG",logoSrc:"https://www.booking.gov.sg/logo.svg"}},_l={primary:{brandName:"CCube",logoSrc:"https://assets.life.gov.sg/ccube/logo-ccube.svg"}},Ol={primary:{brandName:"MyLegacy",logoSrc:"https://mylegacy.life.gov.sg/images/site-logo.png"}},jl=g(((e,r)=>{var{items:n,className:i,id:l,selectedId:g,compress:m=!1,fixed:b=!0,resources:f,hideNavElements:p=!1,hideNavBranding:y=!1,drawerDismissalExclusions:x=[],actionButtons:v,onItemClick:F,onActionButtonClick:$,onBrandClick:C,masthead:E=!0,layout:D="default"}=e,B=w(e,["items","className","id","selectedId","compress","fixed","resources","hideNavElements","hideNavBranding","drawerDismissalExclusions","actionButtons","onItemClick","onActionButtonClick","onBrandClick","masthead","layout"]);const[A,k]=c(!1),[M,S]=c(!1),z="stretch"===D,_=u(null),O=t(),j=(e=>{switch(e){case"bookingsg":return zl;case"mylegacy":return Ol;case"ccube":return _l;default:return Sl}})(null==O?void 0:O.resourceScheme),W=Xn["lg-max"]({theme:O}),Y=(null==f?void 0:f.primary)||j.primary,L=null==f?void 0:f.secondary;h(r,(()=>Object.assign(_.current,{dismissDrawer:()=>{I()}})),[A]),d((()=>(N(),window.addEventListener("resize",N),()=>{window.removeEventListener("resize",N)})),[]);const I=()=>{k(!1),setTimeout((()=>{S(!1)}),550)},T=e=>A&&-1===x.indexOf(e),N=()=>{window.innerWidth<=W&&A&&I()},H=(e,r)=>{C&&(e.preventDefault(),C(r)),T("brand-click")&&I()},R=(e,r)=>{bl.isNavItemCommon(r)&&r.onClick?r.onClick(e):F&&(e.preventDefault(),F(r)),bl.isNavItemLink(r)&&!r.subMenu&&T("item-click")&&I()},P=(e,r)=>{var n;"button"!==r.type&&"download"!==r.type||!(null===(n=r.args)||void 0===n?void 0:n.onClick)?$&&(e.preventDefault(),$(r)):r.args.onClick(e),T("item-click")&&I()},U=()=>{k(!0),S(!0)},V=()=>{T("close-button-click")&&I()},X=()=>{const e=n.mobile||n.desktop;return e&&e.length>0||v&&(e=>{const r=e.mobile||e.desktop;return!!r&&r.length&&r.some((e=>!e.uncollapsible))})(v)?a(rt,{"aria-label":"Open nav menu","data-testid":"button__mobile-menu",onClick:U,focusHighlight:!1,children:a(nt,{})}):null};return s(Kn,{ref:_,$fixed:b,className:i,id:l||"navbar-wrapper","data-testid":B["data-testid"]||"navbar-wrapper",children:[E&&a(mt,{stretch:z}),s(gt.Content,{stretch:z,children:[s(qn,{$compress:m,children:[!y&&s(tt,{$compress:m,"data-id":"brand-container",children:[Y&&a(Qt,{resources:Y,onClick:H,"data-id":"brand-primary","data-testid":"main__brand",type:"primary"}),L&&s(o,{children:[a(it,{$compress:m}),a(Qt,{resources:L,onClick:H,"data-id":"brand-secondary","data-testid":"main__brand-secondary",type:"secondary"})]})]}),!p&&s(et,{$hideNavBranding:y,children:[a(Ml,{items:n.desktop,onItemClick:R,selectedId:g,hideNavBranding:y}),a(ml,{actionButtons:v,onActionButtonClick:P}),X()]})]}),!p&&a(Pt,{show:M,enableOverlayClick:!0,onOverlayClick:V,children:s(ni,{show:A,resources:{primary:Y,secondary:L},onClose:V,onBrandClick:H,actionButtons:v,hideNavBranding:y,children:[a(Ml,{items:n.mobile||n.desktop,onItemClick:R,selectedId:g,mobile:!0}),a(ml,{actionButtons:v,onActionButtonClick:P,mobile:!0})]})})]})]})})),Wl=Gn,Yl=3.5;export{jl as Navbar,Wl as NavbarHeight,Yl as NavbarMobileHeight};
//# sourceMappingURL=index.js.map
