import{MenuIcon as e}from"@lifesg/react-icons/menu";import r,{css as t,useTheme as n,keyframes as i}from"styled-components";import{jsx as a,jsxs as s,Fragment as o}from"react/jsx-runtime";import l,{useEffect as d,useState as c,useRef as u,forwardRef as g,useImperativeHandle as h}from"react";import{useFloatingTree as m,FloatingTree as b,useFloatingNodeId as f,FloatingNode as p}from"@floating-ui/react";import y from"react-dom";import{CrossIcon as x}from"@lifesg/react-icons/cross";import{ExternalIcon as v}from"@lifesg/react-icons/external";import{ChevronUpIcon as w}from"@lifesg/react-icons/chevron-up";function F(e,r){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(n=Object.getOwnPropertySymbols(e);i<n.length;i++)r.indexOf(n[i])<0&&Object.prototype.propertyIsEnumerable.call(e,n[i])&&(t[n[i]]=e[n[i]])}return t}"function"==typeof SuppressedError&&SuppressedError;var $="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};function C(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var E=Array.isArray,D="object"==typeof $&&$&&$.Object===Object&&$,B=D,A="object"==typeof self&&self&&self.Object===Object&&self,k=B||A||Function("return this")(),M=k.Symbol,S=M,z=Object.prototype,_=z.hasOwnProperty,O=z.toString,j=S?S.toStringTag:void 0;var W=function(e){var r=_.call(e,j),t=e[j];try{e[j]=void 0;var n=!0}catch(e){}var i=O.call(e);return n&&(r?e[j]=t:delete e[j]),i},Y=Object.prototype.toString;var L=W,I=function(e){return Y.call(e)},T=M?M.toStringTag:void 0;var N=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":T&&T in Object(e)?L(e):I(e)};var H=function(e){return null!=e&&"object"==typeof e},R=N,P=H;var U=function(e){return"symbol"==typeof e||P(e)&&"[object Symbol]"==R(e)},V=E,X=U,J=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,Q=/^\w*$/;var Z=function(e,r){if(V(e))return!1;var t=typeof e;return!("number"!=t&&"symbol"!=t&&"boolean"!=t&&null!=e&&!X(e))||(Q.test(e)||!J.test(e)||null!=r&&e in Object(r))};var G=function(e){var r=typeof e;return null!=e&&("object"==r||"function"==r)},K=N,q=G;var ee,re=function(e){if(!q(e))return!1;var r=K(e);return"[object Function]"==r||"[object GeneratorFunction]"==r||"[object AsyncFunction]"==r||"[object Proxy]"==r},te=k["__core-js_shared__"],ne=(ee=/[^.]+$/.exec(te&&te.keys&&te.keys.IE_PROTO||""))?"Symbol(src)_1."+ee:"";var ie=function(e){return!!ne&&ne in e},ae=Function.prototype.toString;var se=function(e){if(null!=e){try{return ae.call(e)}catch(e){}try{return e+""}catch(e){}}return""},oe=re,le=ie,de=G,ce=se,ue=/^\[object .+?Constructor\]$/,ge=Function.prototype,he=Object.prototype,me=ge.toString,be=he.hasOwnProperty,fe=RegExp("^"+me.call(be).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");var pe=function(e,r){return null==e?void 0:e[r]},ye=function(e){return!(!de(e)||le(e))&&(oe(e)?fe:ue).test(ce(e))},xe=pe;var ve=function(e,r){var t=xe(e,r);return ye(t)?t:void 0},we=ve(Object,"create"),Fe=we;var $e=function(){this.__data__=Fe?Fe(null):{},this.size=0};var Ce=function(e){var r=this.has(e)&&delete this.__data__[e];return this.size-=r?1:0,r},Ee=we,De=Object.prototype.hasOwnProperty;var Be=function(e){var r=this.__data__;if(Ee){var t=r[e];return"__lodash_hash_undefined__"===t?void 0:t}return De.call(r,e)?r[e]:void 0},Ae=we,ke=Object.prototype.hasOwnProperty;var Me=function(e){var r=this.__data__;return Ae?void 0!==r[e]:ke.call(r,e)},Se=we;var ze=function(e,r){var t=this.__data__;return this.size+=this.has(e)?0:1,t[e]=Se&&void 0===r?"__lodash_hash_undefined__":r,this},_e=$e,Oe=Ce,je=Be,We=Me,Ye=ze;function Le(e){var r=-1,t=null==e?0:e.length;for(this.clear();++r<t;){var n=e[r];this.set(n[0],n[1])}}Le.prototype.clear=_e,Le.prototype.delete=Oe,Le.prototype.get=je,Le.prototype.has=We,Le.prototype.set=Ye;var Ie=Le;var Te=function(){this.__data__=[],this.size=0};var Ne=function(e,r){return e===r||e!=e&&r!=r},He=Ne;var Re=function(e,r){for(var t=e.length;t--;)if(He(e[t][0],r))return t;return-1},Pe=Re,Ue=Array.prototype.splice;var Ve=function(e){var r=this.__data__,t=Pe(r,e);return!(t<0)&&(t==r.length-1?r.pop():Ue.call(r,t,1),--this.size,!0)},Xe=Re;var Je=function(e){var r=this.__data__,t=Xe(r,e);return t<0?void 0:r[t][1]},Qe=Re;var Ze=function(e){return Qe(this.__data__,e)>-1},Ge=Re;var Ke=function(e,r){var t=this.__data__,n=Ge(t,e);return n<0?(++this.size,t.push([e,r])):t[n][1]=r,this},qe=Te,er=Ve,rr=Je,tr=Ze,nr=Ke;function ir(e){var r=-1,t=null==e?0:e.length;for(this.clear();++r<t;){var n=e[r];this.set(n[0],n[1])}}ir.prototype.clear=qe,ir.prototype.delete=er,ir.prototype.get=rr,ir.prototype.has=tr,ir.prototype.set=nr;var ar=ir,sr=ve(k,"Map"),or=Ie,lr=ar,dr=sr;var cr=function(e){var r=typeof e;return"string"==r||"number"==r||"symbol"==r||"boolean"==r?"__proto__"!==e:null===e};var ur=function(e,r){var t=e.__data__;return cr(r)?t["string"==typeof r?"string":"hash"]:t.map},gr=ur;var hr=function(e){var r=gr(this,e).delete(e);return this.size-=r?1:0,r},mr=ur;var br=function(e){return mr(this,e).get(e)},fr=ur;var pr=function(e){return fr(this,e).has(e)},yr=ur;var xr=function(e,r){var t=yr(this,e),n=t.size;return t.set(e,r),this.size+=t.size==n?0:1,this},vr=function(){this.size=0,this.__data__={hash:new or,map:new(dr||lr),string:new or}},wr=hr,Fr=br,$r=pr,Cr=xr;function Er(e){var r=-1,t=null==e?0:e.length;for(this.clear();++r<t;){var n=e[r];this.set(n[0],n[1])}}Er.prototype.clear=vr,Er.prototype.delete=wr,Er.prototype.get=Fr,Er.prototype.has=$r,Er.prototype.set=Cr;var Dr=Er,Br=Dr;function Ar(e,r){if("function"!=typeof e||null!=r&&"function"!=typeof r)throw new TypeError("Expected a function");var t=function(){var n=arguments,i=r?r.apply(this,n):n[0],a=t.cache;if(a.has(i))return a.get(i);var s=e.apply(this,n);return t.cache=a.set(i,s)||a,s};return t.cache=new(Ar.Cache||Br),t}Ar.Cache=Br;var kr=Ar;var Mr=function(e){var r=kr(e,(function(e){return 500===t.size&&t.clear(),e})),t=r.cache;return r},Sr=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,zr=/\\(\\)?/g,_r=Mr((function(e){var r=[];return 46===e.charCodeAt(0)&&r.push(""),e.replace(Sr,(function(e,t,n,i){r.push(n?i.replace(zr,"$1"):t||e)})),r}));var Or=function(e,r){for(var t=-1,n=null==e?0:e.length,i=Array(n);++t<n;)i[t]=r(e[t],t,e);return i},jr=E,Wr=U,Yr=M?M.prototype:void 0,Lr=Yr?Yr.toString:void 0;var Ir=function e(r){if("string"==typeof r)return r;if(jr(r))return Or(r,e)+"";if(Wr(r))return Lr?Lr.call(r):"";var t=r+"";return"0"==t&&1/r==-1/0?"-0":t},Tr=Ir;var Nr=E,Hr=Z,Rr=_r,Pr=function(e){return null==e?"":Tr(e)};var Ur=function(e,r){return Nr(e)?e:Hr(e,r)?[e]:Rr(Pr(e))},Vr=U;var Xr=function(e){if("string"==typeof e||Vr(e))return e;var r=e+"";return"0"==r&&1/e==-1/0?"-0":r},Jr=Ur,Qr=Xr;var Zr=function(e,r){for(var t=0,n=(r=Jr(r,e)).length;null!=e&&t<n;)e=e[Qr(r[t++])];return t&&t==n?e:void 0},Gr=Zr;var Kr=function(e,r,t){var n=null==e?void 0:Gr(e,r);return void 0===n?t:n},qr=C(Kr);const et=(e,r,t)=>qr(t,r)||qr(e,r),rt=(e,r)=>{const t=r||e.defaultValue;return qr(e.collections,t)},tt={collections:{default:{"width-005":.5,"width-010":1,"width-020":2,"width-040":4,solid:"solid"}},defaultValue:"default"},nt=e=>r=>{var t;const n=r.theme,i=rt(tt,null==n?void 0:n.borderScheme);return(null===(t=null==n?void 0:n.overrides)||void 0===t?void 0:t.border)?`${et(i,e,n.overrides.border)}px`:`${i[e]}px`},it={"width-005":nt("width-005"),"width-010":nt("width-010"),"width-020":nt("width-020"),"width-040":nt("width-040"),solid:(at="solid",e=>{var r;const t=e.theme,n=rt(tt,null==t?void 0:t.borderScheme),i=(null===(r=null==t?void 0:t.overrides)||void 0===r?void 0:r.border)?et(n,at,t.overrides.border):n[at];return"function"==typeof i?i(e):i})};var at;const st={collections:{lifesg:{"brand-10":"#2C0C0B","brand-20":"#4C1513","brand-30":"#6C1D1B","brand-40":"#922825","brand-50":"#BF3431","brand-60":"#F15D5A","brand-70":"#F69491","brand-80":"#FABAB7","brand-90":"#FCD7D2","brand-95":"#FFEBE7","brand-100":"#FFF6F4","primary-10":"#001731","primary-20":"#002752","primary-30":"#003874","primary-40":"#004D9F","primary-50":"#1768BE","primary-60":"#3C91EC","primary-70":"#6CB4FF","primary-80":"#A5CDFF","primary-90":"#CFE1FE","primary-95":"#E8F0FE","primary-100":"#F7F9FF","secondary-10":"#131529","secondary-20":"#222547","secondary-30":"#2F3565","secondary-40":"#42498B","secondary-50":"#5B62A7","secondary-60":"#858CBD","secondary-70":"#A8ADCF","secondary-80":"#C6C9E0","secondary-90":"#DDDFEC","secondary-95":"#EDEEF5","secondary-100":"#F8F8FB","neutral-10":"#161616","neutral-20":"#282828","neutral-30":"#393939","neutral-40":"#4E4E4E","neutral-50":"#686868","neutral-60":"#8E8E8E","neutral-70":"#AFAFB0","neutral-80":"#C7CACA","neutral-90":"#DDE1E2","neutral-95":"#EDEFEF","neutral-100":"#F9F9F9","success-10":"#081A0F","success-20":"#0E2D1B","success-30":"#154126","success-40":"#1C5A34","success-50":"#257645","success-60":"#44A068","success-70":"#64C189","success-80":"#80DCA5","success-90":"#B4ECCB","success-95":"#D5F6E2","success-100":"#EFFCF4","warning-10":"#221302","warning-20":"#3B2204","warning-30":"#543106","warning-40":"#744408","warning-50":"#98590C","warning-60":"#D07A13","warning-70":"#E4A244","warning-80":"#F5C26C","warning-90":"#FADBA6","warning-95":"#FCECD4","warning-100":"#FDF7F0","error-10":"#330505","error-20":"#550808","error-30":"#750C0C","error-40":"#9E130F","error-50":"#CB2213","error-60":"#DE6C6C","error-70":"#E89B9B","error-80":"#EFBEBE","error-90":"#F5D9D9","error-95":"#F9ECEC","error-100":"#FCF7F7","info-10":"#021824","info-20":"#032B3F","info-30":"#053D59","info-40":"#065478","info-50":"#176E9B","info-60":"#5296BE","info-70":"#82B5DA","info-80":"#ACCFE7","info-90":"#CCE3F1","info-95":"#E3F1F8","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000","primary-inverse":"#FEAB10"},bookingsg:{"brand-10":"#2C0C0B","brand-20":"#4C1513","brand-30":"#6C1D1B","brand-40":"#922825","brand-50":"#BF3431","brand-60":"#F15D5A","brand-70":"#F69491","brand-80":"#FABAB7","brand-90":"#FCD7D2","brand-95":"#FFEBE7","brand-100":"#FFF6F4","primary-10":"#1A122C","primary-20":"#2F1F4D","primary-30":"#422D6E","primary-40":"#5B3D97","primary-50":"#7654BC","primary-60":"#9A82CD","primary-70":"#B7A7D8","primary-80":"#CFC5E5","primary-90":"#E3DDF0","primary-95":"#F0EDF7","primary-100":"#F9F8FC","secondary-10":"#0E1723","secondary-20":"#18293D","secondary-30":"#233A57","secondary-40":"#305078","secondary-50":"#4B6A8F","secondary-60":"#7B91A9","secondary-70":"#A1B1C3","secondary-80":"#C1CBD7","secondary-90":"#DBE1E8","secondary-95":"#EBEFF2","secondary-100":"#F7F8FA","neutral-10":"#161616","neutral-20":"#282828","neutral-30":"#393939","neutral-40":"#4E4E4E","neutral-50":"#686868","neutral-60":"#8E8E8E","neutral-70":"#AFAFB0","neutral-80":"#C7CACA","neutral-90":"#DDE1E2","neutral-95":"#EDEFEF","neutral-100":"#F9F9F9","success-10":"#081A0F","success-20":"#0E2D1B","success-30":"#154126","success-40":"#1C5A34","success-50":"#257645","success-60":"#44A068","success-70":"#64C189","success-80":"#80DCA5","success-90":"#B4ECCB","success-95":"#D5F6E2","success-100":"#EFFCF4","warning-10":"#221302","warning-20":"#3B2204","warning-30":"#543106","warning-40":"#744408","warning-50":"#98590C","warning-60":"#D07A13","warning-70":"#E4A244","warning-80":"#F5C26C","warning-90":"#FADBA6","warning-95":"#FCECD4","warning-100":"#FDF7F0","error-10":"#330505","error-20":"#550808","error-30":"#750C0C","error-40":"#9E130F","error-50":"#CB2213","error-60":"#DE6C6C","error-70":"#E89B9B","error-80":"#EFBEBE","error-90":"#F5D9D9","error-95":"#F9ECEC","error-100":"#FCF7F7","info-10":"#021824","info-20":"#032B3F","info-30":"#053D59","info-40":"#065478","info-50":"#176E9B","info-60":"#5296BE","info-70":"#82B5DA","info-80":"#ACCFE7","info-90":"#CCE3F1","info-95":"#E3F1F8","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000","primary-inverse":"#FEAB10"},rbs:{"brand-10":"#0E123A","brand-20":"#191E65","brand-30":"#232B90","brand-40":"#303BC5","brand-50":"#494CFF","brand-60":"#AD6EFF","brand-70":"#AEA4FF","brand-80":"#C5C4FF","brand-90":"#DDDCFF","brand-95":"#EDECFF","brand-100":"#F8F8FF","primary-10":"#10152B","primary-20":"#1C254B","primary-30":"#28356C","primary-40":"#38489A","primary-50":"#4D5AD7","primary-60":"#7487F2","primary-70":"#9AAAFC","primary-80":"#BDC7FD","primary-90":"#DADFFB","primary-95":"#ECEEFE","primary-100":"#F7F8FF","secondary-10":"#19151D","secondary-20":"#2B2533","secondary-30":"#3E3649","secondary-40":"#564A64","secondary-50":"#6F637D","secondary-60":"#948B9F","secondary-70":"#B3ACBB","secondary-80":"#CCC8D2","secondary-90":"#E1DEE4","secondary-95":"#EFEEF1","secondary-100":"#F9F8F9","neutral-10":"#161616","neutral-20":"#282828","neutral-30":"#393939","neutral-40":"#4E4E4E","neutral-50":"#686868","neutral-60":"#8E8E8E","neutral-70":"#AFAFB0","neutral-80":"#C7CACA","neutral-90":"#DDE1E2","neutral-95":"#EDEFEF","neutral-100":"#F9F9F9","success-10":"#081A0F","success-20":"#0E2D1B","success-30":"#154126","success-40":"#1C5A34","success-50":"#257645","success-60":"#44A068","success-70":"#64C189","success-80":"#80DCA5","success-90":"#B4ECCB","success-95":"#D5F6E2","success-100":"#EFFCF4","warning-10":"#221302","warning-20":"#3B2204","warning-30":"#543106","warning-40":"#744408","warning-50":"#98590C","warning-60":"#D07A13","warning-70":"#E4A244","warning-80":"#F5C26C","warning-90":"#FADBA6","warning-95":"#FCECD4","warning-100":"#FDF7F0","error-10":"#330505","error-20":"#550808","error-30":"#750C0C","error-40":"#9E130F","error-50":"#CB2213","error-60":"#DE6C6C","error-70":"#E89B9B","error-80":"#EFBEBE","error-90":"#F5D9D9","error-95":"#F9ECEC","error-100":"#FCF7F7","info-10":"#021824","info-20":"#032B3F","info-30":"#053D59","info-40":"#065478","info-50":"#176E9B","info-60":"#5296BE","info-70":"#82B5DA","info-80":"#ACCFE7","info-90":"#CCE3F1","info-95":"#E3F1F8","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000","primary-inverse":"#FEAB10"},mylegacy:{"brand-10":"#2C0C0B","brand-20":"#4C1513","brand-30":"#6C1D1B","brand-40":"#922825","brand-50":"#BF3431","brand-60":"#F15D5A","brand-70":"#F69491","brand-80":"#FABAB7","brand-90":"#FCD7D2","brand-95":"#FFEBE7","brand-100":"#FFF6F4","primary-10":"#0011924","primary-20":"#032B40","primary-30":"#043D5A","primary-40":"#05547B","primary-50":"#096EA1","primary-60":"#2098D3","primary-70":"#5CB9E8","primary-80":"#8BD3F6","primary-90":"#BEE6FA","primary-95":"#E2F2FA","primary-100":"#F4FAFC","secondary-10":"#131529","secondary-20":"#222547","secondary-30":"#2F3565","secondary-40":"#42498B","secondary-50":"#5B62A7","secondary-60":"#858CBD","secondary-70":"#A8ADCF","secondary-80":"#C6C9E0","secondary-90":"#DDDFEC","secondary-95":"#EDEEF5","secondary-100":"#F8F8FB","neutral-10":"#161616","neutral-20":"#282828","neutral-30":"#393939","neutral-40":"#4E4E4E","neutral-50":"#686868","neutral-60":"#8E8E8E","neutral-70":"#AFAFB0","neutral-80":"#C7CACA","neutral-90":"#DDE1E2","neutral-95":"#EDEFEF","neutral-100":"#F9F9F9","success-10":"#081A0F","success-20":"#0E2D1B","success-30":"#154126","success-40":"#1C5A34","success-50":"#257645","success-60":"#44A068","success-70":"#64C189","success-80":"#80DCA5","success-90":"#B4ECCB","success-95":"#D5F6E2","success-100":"#EFFCF4","warning-10":"#221302","warning-20":"#3B2204","warning-30":"#543106","warning-40":"#744408","warning-50":"#98590C","warning-60":"#D07A13","warning-70":"#E4A244","warning-80":"#F5C26C","warning-90":"#FADBA6","warning-95":"#FCECD4","warning-100":"#FDF7F0","error-10":"#330505","error-20":"#550808","error-30":"#750C0C","error-40":"#9E130F","error-50":"#CB2213","error-60":"#DE6C6C","error-70":"#E89B9B","error-80":"#EFBEBE","error-90":"#F5D9D9","error-95":"#F9ECEC","error-100":"#FCF7F7","info-10":"#021824","info-20":"#032B3F","info-30":"#053D59","info-40":"#065478","info-50":"#176E9B","info-60":"#5296BE","info-70":"#82B5DA","info-80":"#ACCFE7","info-90":"#CCE3F1","info-95":"#E3F1F8","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000","primary-inverse":"#FEAB10"},ccube:{"brand-10":"#1F1221","brand-20":"#371F3B","brand-30":"#4E2C53","brand-40":"#6B3E73","brand-50":"#8D5197","brand-60":"#FF3399","brand-70":"#FF88C4","brand-80":"#FFB3D9","brand-90":"#FFD4E9","brand-95":"#FFE8F3","brand-100":"#FFD6EB","primary-10":"#1F1221","primary-20":"#371F3B","primary-30":"#4E2C53","primary-40":"#6B3E73","primary-50":"#8D5197","primary-60":"#B07DB7","primary-70":"#C7A3CC","primary-80":"#D9C2DD","primary-90":"#E9DBEB","primary-95":"#F3ECF4","primary-100":"#FAF7FA","secondary-10":"#2D091B","secondary-20":"#4D0F2E","secondary-30":"#6B1540","secondary-40":"#931D58","secondary-50":"#C02673","secondary-60":"#FF409F","secondary-70":"#FF88C4","secondary-80":"#FFB3D9","secondary-90":"#FFD4E9","secondary-95":"#FFE8F3","secondary-100":"#FFF8FC","neutral-10":"#161616","neutral-20":"#282828","neutral-30":"#393939","neutral-40":"#4E4E4E","neutral-50":"#686868","neutral-60":"#8E8E8E","neutral-70":"#AFAFB0","neutral-80":"#C7CACA","neutral-90":"#DDE1E2","neutral-95":"#EDEFEF","neutral-100":"#F9F9F9","success-10":"#081A0F","success-20":"#0E2D1B","success-30":"#154126","success-40":"#1C5A34","success-50":"#257645","success-60":"#44A068","success-70":"#64C189","success-80":"#80DCA5","success-90":"#B4ECCB","success-95":"#D5F6E2","success-100":"#EFFCF4","warning-10":"#221302","warning-20":"#3B2204","warning-30":"#543106","warning-40":"#744408","warning-50":"#98590C","warning-60":"#D07A13","warning-70":"#E4A244","warning-80":"#F5C26C","warning-90":"#FADBA6","warning-95":"#FCECD4","warning-100":"#FDF7F0","error-10":"#330505","error-20":"#550808","error-30":"#750C0C","error-40":"#9E130F","error-50":"#CB2213","error-60":"#DE6C6C","error-70":"#E89B9B","error-80":"#EFBEBE","error-90":"#F5D9D9","error-95":"#F9ECEC","error-100":"#FCF7F7","info-10":"#021824","info-20":"#032B3F","info-30":"#053D59","info-40":"#065478","info-50":"#176E9B","info-60":"#5296BE","info-70":"#82B5DA","info-80":"#ACCFE7","info-90":"#CCE3F1","info-95":"#E3F1F8","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000","primary-inverse":"#FEAB10"},oneservice:{"brand-10":"#001A19","brand-20":"#002D2B","brand-30":"#00413D","brand-40":"#005954","brand-50":"#00756F","brand-60":"#03A098","brand-70":"#55BFBA","brand-80":"#92D6D2","brand-90":"#BFE7E5","brand-95":"#DDF2F1","brand-100":"#F4FBFA","primary-10":"#09191D","primary-20":"#102B34","primary-30":"#173D49","primary-40":"#205666","primary-50":"#2A7086","primary-60":"#2A7086","primary-70":"#8CB6C2","primary-80":"#B2CED6","primary-90":"#D1E2E7","primary-95":"#E8F0F3","primary-100":"#F9F8FC","secondary-10":"#001731","secondary-20":"#002752","secondary-30":"#003874","secondary-40":"#004D9F","secondary-50":"#5B62A7","secondary-60":"#858CBD","secondary-70":"#A8ADCF","secondary-80":"#C6C9E0","secondary-90":"#DDDFEC","secondary-95":"#EDEEF5","secondary-100":"#F8F8FB","neutral-10":"#161616","neutral-20":"#282828","neutral-30":"#393939","neutral-40":"#4E4E4E","neutral-50":"#686868","neutral-60":"#8E8E8E","neutral-70":"#AFAFB0","neutral-80":"#C7CACA","neutral-90":"#DDE1E2","neutral-95":"#EDEFEF","neutral-100":"#F9F9F9","success-10":"#081A0F","success-20":"#0E2D1B","success-30":"#154126","success-40":"#1C5A34","success-50":"#257645","success-60":"#44A068","success-70":"#64C189","success-80":"#80DCA5","success-90":"#B4ECCB","success-95":"#D5F6E2","success-100":"#EFFCF4","warning-10":"#221302","warning-20":"#3B2204","warning-30":"#543106","warning-40":"#744408","warning-50":"#98590C","warning-60":"#D07A13","warning-70":"#E4A244","warning-80":"#F5C26C","warning-90":"#FADBA6","warning-95":"#FCECD4","warning-100":"#FDF7F0","error-10":"#330505","error-20":"#550808","error-30":"#750C0C","error-40":"#9E130F","error-50":"#CB2213","error-60":"#DE6C6C","error-70":"#E89B9B","error-80":"#EFBEBE","error-90":"#F5D9D9","error-95":"#F9ECEC","error-100":"#FCF7F7","info-10":"#021824","info-20":"#032B3F","info-30":"#053D59","info-40":"#065478","info-50":"#176E9B","info-60":"#5296BE","info-70":"#82B5DA","info-80":"#ACCFE7","info-90":"#CCE3F1","info-95":"#E3F1F8","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000","primary-inverse":"#FEAB10"},pa:{"brand-10":"#881317","brand-20":"#B5191E","brand-30":"#B5040A","brand-40":"#D0333F","brand-50":"#DC666F","brand-60":"#E28087","brand-70":"#E7999F","brand-80":"#EDB3B7","brand-90":"#F3CCCF","brand-95":"#F9E6E7","brand-100":"#FCF2F3","primary-10":"#000000","primary-20":"#191919","primary-30":"#333333","primary-40":"#4D4D4D","primary-50":"#666666","primary-60":"#808080","primary-70":"#999999","primary-80":"#B3B3B3","primary-90":"#E6E6E6","primary-95":"#F7F7F7","primary-100":"#FFFFFF","secondary-10":"#19151D","secondary-20":"#2B2533","secondary-30":"#3E3649","secondary-40":"#564A64","secondary-50":"#6F637D","secondary-60":"#948B9F","secondary-70":"#B3ACBB","secondary-80":"#CCC8D2","secondary-90":"#E1DEE4","secondary-95":"#EFEEF1","secondary-100":"#F9F8F9","neutral-10":"#000000","neutral-20":"#191919","neutral-30":"#333333","neutral-40":"#4D4D4D","neutral-50":"#666666","neutral-60":"#808080","neutral-70":"#999999","neutral-80":"#B3B3B3","neutral-90":"#E6E6E6","neutral-95":"#F7F7F7","neutral-100":"#FFFFFF","success-10":"#081A0F","success-20":"#0E2D1B","success-30":"#154126","success-40":"#1C5A34","success-50":"#257645","success-60":"#44A068","success-70":"#64C189","success-80":"#80DCA5","success-90":"#B4ECCB","success-95":"#D5F6E2","success-100":"#EFFCF4","warning-10":"#221302","warning-20":"#3B2204","warning-30":"#543106","warning-40":"#744408","warning-50":"#98590C","warning-60":"#D07A13","warning-70":"#E4A244","warning-80":"#F5C26C","warning-90":"#FADBA6","warning-95":"#FCECD4","warning-100":"#FDF7F0","error-10":"#330505","error-20":"#550808","error-30":"#750C0C","error-40":"#9E130F","error-50":"#CB2213","error-60":"#DE6C6C","error-70":"#E89B9B","error-80":"#EFBEBE","error-90":"#F5D9D9","error-95":"#F9ECEC","error-100":"#FCF7F7","info-10":"#021824","info-20":"#032B3F","info-30":"#053D59","info-40":"#065478","info-50":"#176E9B","info-60":"#5296BE","info-70":"#82B5DA","info-80":"#ACCFE7","info-90":"#CCE3F1","info-95":"#E3F1F8","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000","primary-inverse":"#FEAB10"}},defaultValue:"lifesg"},ot=e=>r=>{var t;const n=r.theme,i=rt(st,null==n?void 0:n.colourScheme);return(null===(t=null==n?void 0:n.overrides)||void 0===t?void 0:t.primitiveColour)?et(i,e,n.overrides.primitiveColour):i[e]},lt={"brand-10":ot("brand-10"),"brand-20":ot("brand-20"),"brand-30":ot("brand-30"),"brand-40":ot("brand-40"),"brand-50":ot("brand-50"),"brand-60":ot("brand-60"),"brand-70":ot("brand-70"),"brand-80":ot("brand-80"),"brand-90":ot("brand-90"),"brand-95":ot("brand-95"),"brand-100":ot("brand-100"),"primary-10":ot("primary-10"),"primary-20":ot("primary-20"),"primary-30":ot("primary-30"),"primary-40":ot("primary-40"),"primary-50":ot("primary-50"),"primary-60":ot("primary-60"),"primary-70":ot("primary-70"),"primary-80":ot("primary-80"),"primary-90":ot("primary-90"),"primary-95":ot("primary-95"),"primary-100":ot("primary-100"),"secondary-10":ot("secondary-10"),"secondary-20":ot("secondary-20"),"secondary-30":ot("secondary-30"),"secondary-40":ot("secondary-40"),"secondary-50":ot("secondary-50"),"secondary-60":ot("secondary-60"),"secondary-70":ot("secondary-70"),"secondary-80":ot("secondary-80"),"secondary-90":ot("secondary-90"),"secondary-95":ot("secondary-95"),"secondary-100":ot("secondary-100"),"neutral-10":ot("neutral-10"),"neutral-20":ot("neutral-20"),"neutral-30":ot("neutral-30"),"neutral-40":ot("neutral-40"),"neutral-50":ot("neutral-50"),"neutral-60":ot("neutral-60"),"neutral-70":ot("neutral-70"),"neutral-80":ot("neutral-80"),"neutral-90":ot("neutral-90"),"neutral-95":ot("neutral-95"),"neutral-100":ot("neutral-100"),"success-10":ot("success-10"),"success-20":ot("success-20"),"success-30":ot("success-30"),"success-40":ot("success-40"),"success-50":ot("success-50"),"success-60":ot("success-60"),"success-70":ot("success-70"),"success-80":ot("success-80"),"success-90":ot("success-90"),"success-95":ot("success-95"),"success-100":ot("success-100"),"warning-10":ot("warning-10"),"warning-20":ot("warning-20"),"warning-30":ot("warning-30"),"warning-40":ot("warning-40"),"warning-50":ot("warning-50"),"warning-60":ot("warning-60"),"warning-70":ot("warning-70"),"warning-80":ot("warning-80"),"warning-90":ot("warning-90"),"warning-95":ot("warning-95"),"warning-100":ot("warning-100"),"error-10":ot("error-10"),"error-20":ot("error-20"),"error-30":ot("error-30"),"error-40":ot("error-40"),"error-50":ot("error-50"),"error-60":ot("error-60"),"error-70":ot("error-70"),"error-80":ot("error-80"),"error-90":ot("error-90"),"error-95":ot("error-95"),"error-100":ot("error-100"),"info-10":ot("info-10"),"info-20":ot("info-20"),"info-30":ot("info-30"),"info-40":ot("info-40"),"info-50":ot("info-50"),"info-60":ot("info-60"),"info-70":ot("info-70"),"info-80":ot("info-80"),"info-90":ot("info-90"),"info-95":ot("info-95"),"info-100":ot("info-100"),white:ot("white"),black:ot("black"),"primary-inverse":ot("primary-inverse")},dt={text:ot("neutral-20"),"text-subtle":ot("neutral-30"),"text-subtler":ot("neutral-50"),"text-subtlest":ot("neutral-60"),"text-primary":ot("primary-50"),"text-hover":ot("primary-40"),"text-selected":ot("primary-50"),"text-selected-hover":ot("primary-40"),"text-disabled":ot("neutral-50"),"text-disabled-subtle":ot("neutral-60"),"text-disabled-subtlest":ot("neutral-80"),"text-selected-disabled":ot("neutral-20"),"text-success":ot("success-40"),"text-warning":ot("warning-40"),"text-error":ot("error-40"),"text-info":ot("info-40"),"text-inverse":ot("white"),icon:ot("neutral-50"),"icon-subtle":ot("neutral-60"),"icon-strongest":ot("neutral-20"),"icon-primary":ot("primary-50"),"icon-primary-subtle":ot("primary-60"),"icon-primary-subtlest":ot("primary-70"),"icon-hover":ot("primary-40"),"icon-selected":ot("primary-50"),"icon-selected-hover":ot("primary-40"),"icon-disabled":ot("neutral-50"),"icon-disabled-subtle":ot("neutral-60"),"icon-selected-disabled":ot("neutral-60"),"icon-success":ot("success-50"),"icon-warning":ot("warning-60"),"icon-error":ot("error-50"),"icon-error-strong":ot("error-40"),"icon-info":ot("info-50"),"icon-inverse":ot("white"),"icon-primary-inverse":ot("primary-inverse"),border:ot("neutral-90"),"border-strong":ot("neutral-70"),"border-stronger":ot("neutral-50"),"border-primary":ot("primary-50"),"border-primary-subtle":ot("primary-60"),"border-hover":ot("primary-90"),"border-hover-strong":ot("primary-60"),"border-selected":ot("primary-50"),"border-selected-subtle":ot("primary-70"),"border-selected-subtlest":ot("primary-90"),"border-selected-hover":ot("primary-40"),"border-focus":ot("primary-60"),"border-focus-strong":ot("primary-50"),"border-disabled":ot("neutral-90"),"border-selected-disabled":ot("neutral-70"),"border-success":ot("success-60"),"border-warning":ot("warning-60"),"border-error":ot("error-60"),"border-error-focus":ot("error-60"),"border-error-focus-strong":ot("error-40"),"border-error-strong":ot("error-40"),"border-info":ot("info-60"),bg:ot("white"),"bg-strong":ot("neutral-100"),"bg-stronger":ot("neutral-95"),"bg-strongest":ot("neutral-90"),"bg-hover":ot("primary-95"),"bg-hover-strong":ot("primary-90"),"bg-hover-subtle":ot("primary-100"),"bg-hover-neutral":ot("neutral-100"),"bg-hover-neutral-strong":ot("neutral-90"),"bg-selected":ot("primary-95"),"bg-selected-hover":ot("primary-90"),"bg-selected-strong":ot("primary-90"),"bg-selected-stronger":ot("primary-70"),"bg-selected-strongest":ot("primary-50"),"bg-selected-strongest-hover":ot("primary-40"),"bg-disabled":ot("neutral-95"),"bg-selected-disabled":ot("neutral-95"),"bg-selected-stronger-disabled":ot("neutral-70"),"bg-success":ot("success-100"),"bg-success-hover":ot("success-95"),"bg-success-strong":ot("success-50"),"bg-success-strong-hover":ot("success-40"),"bg-warning":ot("warning-100"),"bg-warning-hover":ot("warning-95"),"bg-warning-strong":ot("warning-50"),"bg-warning-strong-hover":ot("warning-40"),"bg-info":ot("info-100"),"bg-info-hover":ot("info-95"),"bg-info-strong":ot("info-50"),"bg-info-strong-hover":ot("info-40"),"bg-error":ot("error-100"),"bg-error-hover":ot("error-95"),"bg-error-strong":ot("error-50"),"bg-error-strong-hover":ot("error-40"),"bg-inverse":ot("neutral-20"),"bg-inverse-subtle":ot("neutral-30"),"bg-inverse-subtler":ot("neutral-50"),"bg-inverse-subtlest":ot("neutral-60"),"bg-inverse-hover":ot("neutral-40"),"bg-primary":ot("primary-50"),"bg-primary-subtle":ot("primary-60"),"bg-primary-subtler":ot("primary-95"),"bg-primary-subtlest":ot("primary-100"),"bg-available":"#6DD0A1","bg-primary-hover":ot("primary-40"),"bg-primary-subtlest-hover":ot("primary-90"),"bg-primary-subtlest-selected":ot("primary-90"),"overlay-strong":"rgba(40, 40, 40, 0.85)","overlay-subtle":"rgba(40, 40, 40, 0.20)",hyperlink:ot("primary-50"),"hyperlink-hover":ot("primary-40"),"hyperlink-visited":ot("primary-40"),"hyperlink-inverse":ot("primary-inverse"),"focus-ring":ot("black"),"focus-ring-inverse":ot("white")},ct={collections:{lifesg:dt,bookingsg:dt,rbs:dt,mylegacy:dt,ccube:dt,oneservice:dt,pa:{text:ot("neutral-30"),"text-subtle":ot("neutral-40"),"text-subtler":ot("neutral-50"),"text-subtlest":ot("neutral-70"),"text-primary":ot("neutral-10"),"text-hover":ot("neutral-70"),"text-selected":ot("neutral-20"),"text-selected-hover":ot("neutral-10"),"text-disabled":ot("neutral-50"),"text-disabled-subtle":ot("neutral-60"),"text-disabled-subtlest":ot("neutral-80"),"text-selected-disabled":ot("neutral-40"),"text-success":ot("success-40"),"text-warning":ot("warning-40"),"text-error":ot("brand-30"),"text-info":ot("neutral-40"),"text-inverse":ot("neutral-100"),icon:ot("neutral-40"),"icon-subtle":ot("neutral-50"),"icon-strongest":ot("neutral-10"),"icon-primary":ot("neutral-10"),"icon-primary-subtle":ot("neutral-30"),"icon-primary-subtlest":ot("neutral-60"),"icon-hover":ot("neutral-70"),"icon-selected":ot("brand-20"),"icon-selected-hover":ot("brand-10"),"icon-disabled":ot("neutral-50"),"icon-disabled-subtle":ot("neutral-60"),"icon-selected-disabled":ot("neutral-40"),"icon-success":ot("success-40"),"icon-warning":ot("warning-60"),"icon-error":ot("brand-30"),"icon-error-strong":ot("brand-10"),"icon-info":ot("neutral-40"),"icon-inverse":ot("neutral-100"),"icon-primary-inverse":"#F9B371",border:ot("neutral-90"),"border-strong":ot("neutral-30"),"border-stronger":ot("neutral-20"),"border-primary":ot("neutral-40"),"border-primary-subtle":ot("neutral-60"),"border-hover":ot("neutral-80"),"border-hover-strong":ot("neutral-10"),"border-selected":ot("brand-20"),"border-selected-subtle":ot("neutral-40"),"border-selected-subtlest":ot("neutral-70"),"border-selected-hover":ot("neutral-10"),"border-focus":ot("neutral-20"),"border-focus-strong":ot("neutral-10"),"border-disabled":ot("neutral-90"),"border-selected-disabled":ot("neutral-80"),"border-success":ot("success-40"),"border-warning":ot("warning-60"),"border-error":ot("brand-30"),"border-error-focus":ot("brand-20"),"border-error-focus-strong":ot("brand-10"),"border-error-strong":ot("brand-20"),"border-info":ot("neutral-40"),bg:ot("neutral-100"),"bg-strong":ot("neutral-95"),"bg-stronger":ot("neutral-90"),"bg-strongest":ot("neutral-80"),"bg-hover":ot("brand-90"),"bg-hover-strong":ot("brand-80"),"bg-hover-subtle":ot("neutral-90"),"bg-hover-neutral":ot("neutral-90"),"bg-hover-neutral-strong":ot("neutral-90"),"bg-selected":ot("brand-100"),"bg-selected-hover":ot("brand-30"),"bg-selected-strong":ot("brand-50"),"bg-selected-stronger":ot("brand-40"),"bg-selected-strongest":ot("brand-20"),"bg-selected-strongest-hover":ot("brand-10"),"bg-disabled":ot("neutral-90"),"bg-selected-disabled":ot("neutral-90"),"bg-selected-stronger-disabled":ot("neutral-80"),"bg-success":ot("success-100"),"bg-success-hover":ot("success-95"),"bg-success-strong":ot("success-50"),"bg-success-strong-hover":ot("success-40"),"bg-warning":ot("warning-100"),"bg-warning-hover":ot("warning-95"),"bg-warning-strong":ot("warning-50"),"bg-warning-strong-hover":ot("warning-40"),"bg-info":ot("neutral-95"),"bg-info-hover":ot("info-95"),"bg-info-strong":ot("info-50"),"bg-info-strong-hover":ot("info-40"),"bg-error":ot("brand-100"),"bg-error-hover":ot("error-95"),"bg-error-strong":ot("error-50"),"bg-error-strong-hover":ot("error-40"),"bg-inverse":ot("neutral-40"),"bg-inverse-subtle":ot("neutral-60"),"bg-inverse-subtler":ot("neutral-70"),"bg-inverse-subtlest":ot("neutral-80"),"bg-inverse-hover":ot("neutral-30"),"bg-primary":ot("brand-20"),"bg-primary-subtle":ot("brand-60"),"bg-primary-subtler":ot("brand-80"),"bg-primary-subtlest":ot("brand-100"),"bg-available":ot("success-60"),"bg-primary-hover":ot("brand-10"),"bg-primary-subtlest-hover":ot("brand-80"),"bg-primary-subtlest-selected":ot("brand-40"),"overlay-strong":"rgba(25, 25, 25, 0.95)","overlay-subtle":"rgba(25, 25, 25, 0.20)",hyperlink:ot("neutral-10"),"hyperlink-hover":ot("neutral-40"),"hyperlink-visited":ot("neutral-50"),"hyperlink-inverse":"#F8AE68","focus-ring":ot("black"),"focus-ring-inverse":ot("white")}},defaultValue:"lifesg"},ut=e=>r=>{var t;const n=r.theme,i=rt(ct,null==n?void 0:n.colourScheme),a=(null===(t=null==n?void 0:n.overrides)||void 0===t?void 0:t.semanticColour)?et(i,e,n.overrides.semanticColour):i[e];return"function"==typeof a?a(r):a},gt={text:ut("text"),"text-subtle":ut("text-subtle"),"text-subtler":ut("text-subtler"),"text-subtlest":ut("text-subtlest"),"text-primary":ut("text-primary"),"text-hover":ut("text-hover"),"text-selected":ut("text-selected"),"text-selected-hover":ut("text-selected-hover"),"text-disabled":ut("text-disabled"),"text-disabled-subtle":ut("text-disabled-subtle"),"text-disabled-subtlest":ut("text-disabled-subtlest"),"text-selected-disabled":ut("text-selected-disabled"),"text-success":ut("text-success"),"text-warning":ut("text-warning"),"text-error":ut("text-error"),"text-info":ut("text-info"),"text-inverse":ut("text-inverse"),icon:ut("icon"),"icon-subtle":ut("icon-subtle"),"icon-strongest":ut("icon-strongest"),"icon-primary":ut("icon-primary"),"icon-primary-subtle":ut("icon-primary-subtle"),"icon-primary-subtlest":ut("icon-primary-subtlest"),"icon-hover":ut("icon-hover"),"icon-selected":ut("icon-selected"),"icon-selected-hover":ut("icon-selected-hover"),"icon-disabled":ut("icon-disabled"),"icon-disabled-subtle":ut("icon-disabled-subtle"),"icon-selected-disabled":ut("icon-selected-disabled"),"icon-success":ut("icon-success"),"icon-warning":ut("icon-warning"),"icon-error":ut("icon-error"),"icon-error-strong":ut("icon-error-strong"),"icon-info":ut("icon-info"),"icon-inverse":ut("icon-inverse"),"icon-primary-inverse":ut("icon-primary-inverse"),border:ut("border"),"border-strong":ut("border-strong"),"border-stronger":ut("border-stronger"),"border-primary":ut("border-primary"),"border-primary-subtle":ut("border-primary-subtle"),"border-hover":ut("border-hover"),"border-hover-strong":ut("border-hover-strong"),"border-selected":ut("border-selected"),"border-selected-subtle":ut("border-selected-subtle"),"border-selected-subtlest":ut("border-selected-subtlest"),"border-selected-hover":ut("border-selected-hover"),"border-focus":ut("border-focus"),"border-focus-strong":ut("border-focus-strong"),"border-disabled":ut("border-disabled"),"border-selected-disabled":ut("border-selected-disabled"),"border-success":ut("border-success"),"border-warning":ut("border-warning"),"border-error":ut("border-error"),"border-error-focus":ut("border-error-focus"),"border-error-focus-strong":ut("border-error-focus-strong"),"border-error-strong":ut("border-error-strong"),"border-info":ut("border-info"),bg:ut("bg"),"bg-strong":ut("bg-strong"),"bg-stronger":ut("bg-stronger"),"bg-strongest":ut("bg-strongest"),"bg-hover":ut("bg-hover"),"bg-hover-strong":ut("bg-hover-strong"),"bg-hover-subtle":ut("bg-hover-subtle"),"bg-hover-neutral":ut("bg-hover-neutral"),"bg-hover-neutral-strong":ut("bg-hover-neutral-strong"),"bg-selected":ut("bg-selected"),"bg-selected-hover":ut("bg-selected-hover"),"bg-selected-strong":ut("bg-selected-strong"),"bg-selected-stronger":ut("bg-selected-stronger"),"bg-selected-strongest":ut("bg-selected-strongest"),"bg-selected-strongest-hover":ut("bg-selected-strongest-hover"),"bg-disabled":ut("bg-disabled"),"bg-selected-disabled":ut("bg-selected-disabled"),"bg-selected-stronger-disabled":ut("bg-selected-stronger-disabled"),"bg-success":ut("bg-success"),"bg-success-hover":ut("bg-success-hover"),"bg-success-strong":ut("bg-success-strong"),"bg-success-strong-hover":ut("bg-success-strong-hover"),"bg-warning":ut("bg-warning"),"bg-warning-hover":ut("bg-warning-hover"),"bg-warning-strong":ut("bg-warning-strong"),"bg-warning-strong-hover":ut("bg-warning-strong-hover"),"bg-info":ut("bg-info"),"bg-info-hover":ut("bg-info-hover"),"bg-info-strong":ut("bg-info-strong"),"bg-info-strong-hover":ut("bg-info-strong-hover"),"bg-error":ut("bg-error"),"bg-error-hover":ut("bg-error-hover"),"bg-error-strong":ut("bg-error-strong"),"bg-error-strong-hover":ut("bg-error-strong-hover"),"bg-inverse":ut("bg-inverse"),"bg-inverse-subtle":ut("bg-inverse-subtle"),"bg-inverse-subtler":ut("bg-inverse-subtler"),"bg-inverse-subtlest":ut("bg-inverse-subtlest"),"bg-inverse-hover":ut("bg-inverse-hover"),"bg-primary":ut("bg-primary"),"bg-primary-subtle":ut("bg-primary-subtle"),"bg-primary-subtler":ut("bg-primary-subtler"),"bg-primary-subtlest":ut("bg-primary-subtlest"),"bg-available":ut("bg-available"),"bg-primary-hover":ut("bg-primary-hover"),"bg-primary-subtlest-hover":ut("bg-primary-subtlest-hover"),"bg-primary-subtlest-selected":ut("bg-primary-subtlest-selected"),"overlay-strong":ut("overlay-strong"),"overlay-subtle":ut("overlay-subtle"),hyperlink:ut("hyperlink"),"hyperlink-hover":ut("hyperlink-hover"),"hyperlink-visited":ut("hyperlink-visited"),"hyperlink-inverse":ut("hyperlink-inverse"),"focus-ring":ut("focus-ring"),"focus-ring-inverse":ut("focus-ring-inverse")},ht={collections:{default:{solid:e=>r=>{var n,i,a;const{thickness:s,radius:o,colour:l}=e||{},d=null!==(n="function"==typeof s?s(r):s)&&void 0!==n?n:it["width-010"](r),c=null!==(i="function"==typeof o?o(r):o)&&void 0!==i?i:0,u=null!==(a="function"==typeof l?l(r):l)&&void 0!==a?a:gt.border(r),g=it.solid;return t`
            border: ${d} ${g} ${u};
            border-radius: ${c};
        `},"dashed-default":e=>r=>{var n,i,a;const{thickness:s,radius:o,colour:l}=e||{},d=null!==(n="function"==typeof s?s(r):s)&&void 0!==n?n:it["width-010"](r),c=null!==(i="function"==typeof o?o(r):o)&&void 0!==i?i:0,u=null!==(a="function"==typeof l?l(r):l)&&void 0!==a?a:gt.border(r),g=encodeURIComponent(`<svg width='100%' height='100%' xmlns='http://www.w3.org/2000/svg'><rect width='100%' height='100%' fill='none' rx='${c}' ry='${c}' stroke='${u}' stroke-width='${d}' stroke-dasharray='4, 8' stroke-dashoffset='0' stroke-linecap='square'/></svg>`);return t`
            background-image: url("data:image/svg+xml,${g}");
            border-radius: ${c};
        `}}},defaultValue:"default"},mt=e=>1===e.length&&"theme"in e[0],bt=e=>(...r)=>t=>{const n=mt(r)?[]:r,i=mt(r)?r[0]:t,a=i.theme;return(0,rt(ht,null==a?void 0:a.borderScheme)[e])(...n)(i)},ft={solid:bt("solid"),"dashed-default":bt("dashed-default")},pt={collections:{default:{"xxs-min":0,"xxs-max":320,"xs-min":321,"xs-max":375,"sm-min":376,"sm-max":420,"md-min":421,"md-max":767,"lg-min":768,"lg-max":1023,"xl-min":1024,"xl-max":1440,"xxl-min":1441,"xxs-column":8,"xs-column":8,"sm-column":8,"md-column":8,"lg-column":12,"xl-column":12,"xxl-column":12,"xxs-gutter":16,"xs-gutter":16,"sm-gutter":16,"md-gutter":16,"lg-gutter":32,"xl-gutter":32,"xxl-gutter":32,"xxs-margin":24,"xs-margin":24,"sm-margin":24,"md-margin":24,"lg-margin":48,"xl-margin":48,"xxl-margin":48}},defaultValue:"default"},yt=e=>r=>{var t;const n=r.theme,i=rt(pt,null==n?void 0:n.breakpointScheme);let a;return a=(null===(t=null==n?void 0:n.overrides)||void 0===t?void 0:t.breakpoint)?et(i,e,n.overrides.breakpoint):i[e],a},xt={"xxs-min":yt("xxs-min"),"xxs-max":yt("xxs-max"),"xs-min":yt("xs-min"),"xs-max":yt("xs-max"),"sm-min":yt("sm-min"),"sm-max":yt("sm-max"),"md-min":yt("md-min"),"md-max":yt("md-max"),"lg-min":yt("lg-min"),"lg-max":yt("lg-max"),"xl-min":yt("xl-min"),"xl-max":yt("xl-max"),"xxl-min":yt("xxl-min"),"xxs-column":yt("xxs-column"),"xs-column":yt("xs-column"),"sm-column":yt("sm-column"),"md-column":yt("md-column"),"lg-column":yt("lg-column"),"xl-column":yt("xl-column"),"xxl-column":yt("xxl-column"),"xxs-gutter":yt("xxs-gutter"),"xs-gutter":yt("xs-gutter"),"sm-gutter":yt("sm-gutter"),"md-gutter":yt("md-gutter"),"lg-gutter":yt("lg-gutter"),"xl-gutter":yt("xl-gutter"),"xxl-gutter":yt("xxl-gutter"),"xxs-margin":yt("xxs-margin"),"xs-margin":yt("xs-margin"),"sm-margin":yt("sm-margin"),"md-margin":yt("md-margin"),"lg-margin":yt("lg-margin"),"xl-margin":yt("xl-margin"),"xxl-margin":yt("xxl-margin")},vt=e=>("max-width"===e?["xxs","xs","sm","md","lg","xl"]:["xxs","xs","sm","md","lg","xl","xxl"]).reduce(((r,t)=>(r[t]=((e,r)=>{const t=xt["max-width"===e?`${r}-max`:`${r}-min`];return r=>{const n=t(r);return`@media screen and (${e}: ${n}px)`}})(e,t),r)),{}),wt={MaxWidth:vt("max-width"),MinWidth:vt("min-width")},Ft={collections:{default:{"heading-size-xxl":"3rem","heading-size-xl":"2.5rem","heading-size-lg":"2rem","heading-size-md":"1.625rem","heading-size-sm":"1.375rem","heading-size-xs":"1.125rem","heading-lh-xxl":"3.5rem","heading-lh-xl":"3rem","heading-lh-lg":"2.5rem","heading-lh-md":"2.25rem","heading-lh-sm":"1.75rem","heading-lh-xs":"1.625rem","heading-ls-xxl":"-0.056rem","heading-ls-xl":"-0.032rem","heading-ls-lg":"-0.032rem","heading-ls-md":"0rem","heading-ls-sm":"0rem","heading-ls-xs":"0rem","weight-light":"300","weight-regular":"400","weight-semibold":"600","weight-bold":"700","font-family":"Open Sans","body-size-baseline":"1.125rem","body-size-md":"1rem","body-size-sm":"0.875rem","body-size-xs":"0.75rem","body-lh-baseline":"1.625rem","body-lh-md":"1.5rem","body-lh-sm":"1.625rem","body-lh-xs":"1.25rem","body-ls-baseline":"0rem","body-ls-md":"0.014rem","body-ls-sm":"0.012rem","body-ls-xs":"0.012rem","form-label-size":"1rem","form-description-size":"0.875rem","form-label-lh":"1.5rem","form-description-lh":"1.6rem","form-label-ls":"0.014rem","form-description-ls":"0.012rem"},bookingsg:{"heading-size-xxl":"3rem","heading-size-xl":"2.5rem","heading-size-lg":"2rem","heading-size-md":"1.625rem","heading-size-sm":"1.375rem","heading-size-xs":"1.125rem","heading-lh-xxl":"3.5rem","heading-lh-xl":"3rem","heading-lh-lg":"2.5rem","heading-lh-md":"2.25rem","heading-lh-sm":"1.75rem","heading-lh-xs":"1.75rem","heading-ls-xxl":"-0.056rem","heading-ls-xl":"-0.032rem","heading-ls-lg":"-0.032rem","heading-ls-md":"0rem","heading-ls-sm":"0rem","heading-ls-xs":"0rem","weight-light":"300","weight-regular":"400","weight-semibold":"600","weight-bold":"700","font-family":"Plus Jakarta Sans","body-size-baseline":"1.125rem","body-size-md":"1rem","body-size-sm":"0.875rem","body-size-xs":"0.75rem","body-lh-baseline":"1.75rem","body-lh-md":"1.5rem","body-lh-sm":"1.6rem","body-lh-xs":"1.2rem","body-ls-baseline":"0rem","body-ls-md":"0.014rem","body-ls-sm":"0.012rem","body-ls-xs":"0.012rem","form-label-size":"1rem","form-description-size":"0.875rem","form-label-lh":"1.5rem","form-description-lh":"1.6rem","form-label-ls":"0.014rem","form-description-ls":"0.012rem"},pa:{"heading-size-xxl":"2.5rem","heading-size-xl":"2rem","heading-size-lg":"1.75rem","heading-size-md":"1.5rem","heading-size-sm":"1.25rem","heading-size-xs":"1rem","heading-lh-xxl":"3rem","heading-lh-xl":"2.5rem","heading-lh-lg":"2.25rem","heading-lh-md":"2rem","heading-lh-sm":"2rem","heading-lh-xs":"1.75rem","heading-ls-xxl":"-0.032rem","heading-ls-xl":"0rem","heading-ls-lg":"0rem","heading-ls-md":"0rem","heading-ls-sm":"0rem","heading-ls-xs":"0rem","weight-light":"300","weight-regular":"400","weight-semibold":"600","weight-bold":"700","font-family":"Lato","body-size-baseline":"1rem","body-size-md":"0.875rem","body-size-sm":"0.75rem","body-size-xs":"0.625rem","body-lh-baseline":"1.75rem","body-lh-md":"1.5rem","body-lh-sm":"1.25rem","body-lh-xs":"1.25rem","body-ls-baseline":"0rem","body-ls-md":"0.012rem","body-ls-sm":"0.012rem","body-ls-xs":"0.012rem","form-label-size":"1rem","form-description-size":"0.875rem","form-label-lh":"1.5rem","form-description-lh":"1.6rem","form-label-ls":"0.014rem","form-description-ls":"0.012rem"}},defaultValue:"default"},$t=e=>r=>{var t;const n=r.theme,i=rt(Ft,null==n?void 0:n.fontScheme);return(null===(t=null==n?void 0:n.overrides)||void 0===t?void 0:t.fontSpec)?et(i,e,n.overrides.fontSpec):i[e]},Ct={"heading-size-xxl":$t("heading-size-xxl"),"heading-size-xl":$t("heading-size-xl"),"heading-size-lg":$t("heading-size-lg"),"heading-size-md":$t("heading-size-md"),"heading-size-sm":$t("heading-size-sm"),"heading-size-xs":$t("heading-size-xs"),"heading-lh-xxl":$t("heading-lh-xxl"),"heading-lh-xl":$t("heading-lh-xl"),"heading-lh-lg":$t("heading-lh-lg"),"heading-lh-md":$t("heading-lh-md"),"heading-lh-sm":$t("heading-lh-sm"),"heading-lh-xs":$t("heading-lh-xs"),"heading-ls-xxl":$t("heading-ls-xxl"),"heading-ls-xl":$t("heading-ls-xl"),"heading-ls-lg":$t("heading-ls-lg"),"heading-ls-md":$t("heading-ls-md"),"heading-ls-sm":$t("heading-ls-sm"),"heading-ls-xs":$t("heading-ls-xs"),"weight-light":$t("weight-light"),"weight-regular":$t("weight-regular"),"weight-semibold":$t("weight-semibold"),"weight-bold":$t("weight-bold"),"font-family":$t("font-family"),"body-size-baseline":$t("body-size-baseline"),"body-size-md":$t("body-size-md"),"body-size-sm":$t("body-size-sm"),"body-size-xs":$t("body-size-xs"),"body-lh-baseline":$t("body-lh-baseline"),"body-lh-md":$t("body-lh-md"),"body-lh-sm":$t("body-lh-sm"),"body-lh-xs":$t("body-lh-xs"),"body-ls-baseline":$t("body-ls-baseline"),"body-ls-md":$t("body-ls-md"),"body-ls-sm":$t("body-ls-sm"),"body-ls-xs":$t("body-ls-xs"),"form-label-size":$t("form-label-size"),"form-description-size":$t("form-description-size"),"form-label-lh":$t("form-label-lh"),"form-description-lh":$t("form-description-lh"),"form-label-ls":$t("form-label-ls"),"form-description-ls":$t("form-description-ls")},Et=(e,r,n,i,a)=>{const{disableLigatures:s}=a||{};return t`
        font-family: ${$t("font-family")};
        font-size: ${$t(e)};
        font-weight: ${$t(r)};
        line-height: ${$t(n)};
        letter-spacing: ${$t(i)};

        font-variant: ${s?"no-common-ligatures":"normal"};
    `},Dt=(e={})=>({"heading-xxl-light":Et("heading-size-xxl","weight-light","heading-lh-xxl","heading-ls-xxl",e),"heading-xxl-regular":Et("heading-size-xxl","weight-regular","heading-lh-xxl","heading-ls-xxl",e),"heading-xxl-semibold":Et("heading-size-xxl","weight-semibold","heading-lh-xxl","heading-ls-xxl",e),"heading-xxl-bold":Et("heading-size-xxl","weight-bold","heading-lh-xxl","heading-ls-xxl",e),"heading-xl-light":Et("heading-size-xl","weight-light","heading-lh-xl","heading-ls-xl",e),"heading-xl-regular":Et("heading-size-xl","weight-regular","heading-lh-xl","heading-ls-xl",e),"heading-xl-semibold":Et("heading-size-xl","weight-semibold","heading-lh-xl","heading-ls-xl",e),"heading-xl-bold":Et("heading-size-xl","weight-bold","heading-lh-xl","heading-ls-xl",e),"heading-lg-light":Et("heading-size-lg","weight-light","heading-lh-lg","heading-ls-lg",e),"heading-lg-regular":Et("heading-size-lg","weight-regular","heading-lh-lg","heading-ls-lg",e),"heading-lg-semibold":Et("heading-size-lg","weight-semibold","heading-lh-lg","heading-ls-lg",e),"heading-lg-bold":Et("heading-size-lg","weight-bold","heading-lh-lg","heading-ls-lg",e),"heading-md-light":Et("heading-size-md","weight-light","heading-lh-md","heading-ls-md",e),"heading-md-regular":Et("heading-size-md","weight-regular","heading-lh-md","heading-ls-md",e),"heading-md-semibold":Et("heading-size-md","weight-semibold","heading-lh-md","heading-ls-md",e),"heading-md-bold":Et("heading-size-md","weight-bold","heading-lh-md","heading-ls-md",e),"heading-sm-light":Et("heading-size-sm","weight-light","heading-lh-sm","heading-ls-sm",e),"heading-sm-regular":Et("heading-size-sm","weight-regular","heading-lh-sm","heading-ls-sm",e),"heading-sm-semibold":Et("heading-size-sm","weight-semibold","heading-lh-sm","heading-ls-sm",e),"heading-sm-bold":Et("heading-size-sm","weight-bold","heading-lh-sm","heading-ls-sm",e),"heading-xs-light":Et("heading-size-xs","weight-light","heading-lh-xs","heading-ls-xs",e),"heading-xs-regular":Et("heading-size-xs","weight-regular","heading-lh-xs","heading-ls-xs",e),"heading-xs-semibold":Et("heading-size-xs","weight-semibold","heading-lh-xs","heading-ls-xs",e),"heading-xs-bold":Et("heading-size-xs","weight-bold","heading-lh-xs","heading-ls-xs",e),"body-baseline-light":Et("body-size-baseline","weight-light","body-lh-baseline","body-ls-baseline",e),"body-baseline-regular":Et("body-size-baseline","weight-regular","body-lh-baseline","body-ls-baseline",e),"body-baseline-semibold":Et("body-size-baseline","weight-semibold","body-lh-baseline","body-ls-baseline",e),"body-baseline-bold":Et("body-size-baseline","weight-bold","body-lh-baseline","body-ls-baseline",e),"body-md-light":Et("body-size-md","weight-light","body-lh-md","body-ls-md",e),"body-md-regular":Et("body-size-md","weight-regular","body-lh-md","body-ls-md",e),"body-md-semibold":Et("body-size-md","weight-semibold","body-lh-md","body-ls-md",e),"body-md-bold":Et("body-size-md","weight-bold","body-lh-md","body-ls-md",e),"body-sm-light":Et("body-size-sm","weight-light","body-lh-sm","body-ls-sm",e),"body-sm-regular":Et("body-size-sm","weight-regular","body-lh-sm","body-ls-sm",e),"body-sm-semibold":Et("body-size-sm","weight-semibold","body-lh-sm","body-ls-sm",e),"body-sm-bold":Et("body-size-sm","weight-bold","body-lh-sm","body-ls-sm",e),"body-xs-light":Et("body-size-xs","weight-light","body-lh-xs","body-ls-xs",e),"body-xs-regular":Et("body-size-xs","weight-regular","body-lh-xs","body-ls-xs",e),"body-xs-semibold":Et("body-size-xs","weight-semibold","body-lh-xs","body-ls-xs",e),"body-xs-bold":Et("body-size-xs","weight-bold","body-lh-xs","body-ls-xs",e),"form-label":Et("form-label-size","weight-semibold","form-label-lh","form-label-ls",e),"form-description":Et("form-description-size","weight-regular","form-description-lh","form-description-ls",e)}),Bt=Dt({disableLigatures:!0}),At={collections:{default:Dt(),bookingsg:Bt,pa:Dt({disableLigatures:!0})},defaultValue:"default"},kt=e=>r=>{var t;const n=r.theme,i=rt(At,null==n?void 0:n.fontScheme),a=(null===(t=null==n?void 0:n.overrides)||void 0===t?void 0:t.font)?et(i,e,n.overrides.font):i[e];return"function"==typeof a?a(r):a},Mt={"heading-xxl-light":kt("heading-xxl-light"),"heading-xxl-regular":kt("heading-xxl-regular"),"heading-xxl-semibold":kt("heading-xxl-semibold"),"heading-xxl-bold":kt("heading-xxl-bold"),"heading-xl-light":kt("heading-xl-light"),"heading-xl-regular":kt("heading-xl-regular"),"heading-xl-semibold":kt("heading-xl-semibold"),"heading-xl-bold":kt("heading-xl-bold"),"heading-lg-light":kt("heading-lg-light"),"heading-lg-regular":kt("heading-lg-regular"),"heading-lg-semibold":kt("heading-lg-semibold"),"heading-lg-bold":kt("heading-lg-bold"),"heading-md-light":kt("heading-md-light"),"heading-md-regular":kt("heading-md-regular"),"heading-md-semibold":kt("heading-md-semibold"),"heading-md-bold":kt("heading-md-bold"),"heading-sm-light":kt("heading-sm-light"),"heading-sm-regular":kt("heading-sm-regular"),"heading-sm-semibold":kt("heading-sm-semibold"),"heading-sm-bold":kt("heading-sm-bold"),"heading-xs-light":kt("heading-xs-light"),"heading-xs-regular":kt("heading-xs-regular"),"heading-xs-semibold":kt("heading-xs-semibold"),"heading-xs-bold":kt("heading-xs-bold"),"body-baseline-light":kt("body-baseline-light"),"body-baseline-regular":kt("body-baseline-regular"),"body-baseline-semibold":kt("body-baseline-semibold"),"body-baseline-bold":kt("body-baseline-bold"),"body-md-light":kt("body-md-light"),"body-md-regular":kt("body-md-regular"),"body-md-semibold":kt("body-md-semibold"),"body-md-bold":kt("body-md-bold"),"body-sm-light":kt("body-sm-light"),"body-sm-regular":kt("body-sm-regular"),"body-sm-semibold":kt("body-sm-semibold"),"body-sm-bold":kt("body-sm-bold"),"body-xs-light":kt("body-xs-light"),"body-xs-regular":kt("body-xs-regular"),"body-xs-semibold":kt("body-xs-semibold"),"body-xs-bold":kt("body-xs-bold"),"form-label":kt("form-label"),"form-description":kt("form-description")},St={collections:{default:{"duration-150":"150ms","duration-250":"250ms","duration-350":"350ms","duration-500":"500ms","duration-800":"800ms","duration-1000":"1000ms","ease-default":"cubic-bezier(0.45, 0.05, 0.55, 0.95)","ease-standard":"cubic-bezier(0.86, 0, 0.07, 1)","ease-entrance":"cubic-bezier(0.18, 0.13, 0, 1)","ease-exit":"cubic-bezier(1, 0, 0.8, 0.85)"}},defaultValue:"default"},zt=e=>r=>{var t;const n=r.theme,i=rt(St,null==n?void 0:n.motionScheme);return(null===(t=null==n?void 0:n.overrides)||void 0===t?void 0:t.motion)?et(i,e,n.overrides.motion):i[e]},_t={"duration-150":zt("duration-150"),"duration-250":zt("duration-250"),"duration-350":zt("duration-350"),"duration-500":zt("duration-500"),"duration-800":zt("duration-800"),"duration-1000":zt("duration-1000"),"ease-default":zt("ease-default"),"ease-standard":zt("ease-standard"),"ease-entrance":zt("ease-entrance"),"ease-exit":zt("ease-exit")},Ot={collections:{default:{none:0,xs:2,sm:4,md:8,lg:12,full:9999}},defaultValue:"default"},jt=e=>r=>{var t;const n=r.theme,i=rt(Ot,null==n?void 0:n.radiusScheme);return(null===(t=null==n?void 0:n.overrides)||void 0===t?void 0:t.radius)?`${et(i,e,n.overrides.radius)}px`:`${i[e]}px`},Wt={none:jt("none"),xs:jt("xs"),sm:jt("sm"),md:jt("md"),lg:jt("lg"),full:jt("full")},Yt={collections:{default:{"spacing-0":0,"spacing-4":4,"spacing-8":8,"spacing-12":12,"spacing-16":16,"spacing-20":20,"spacing-24":24,"spacing-32":32,"spacing-40":40,"spacing-48":48,"spacing-64":64,"spacing-72":72,"layout-xs":8,"layout-sm":16,"layout-md":24,"layout-lg":32,"layout-xl":48,"layout-xxl":64,"layout-xxxl":128}},defaultValue:"default"},Lt=e=>r=>{var t;const n=r.theme,i=rt(Yt,null==n?void 0:n.spacingScheme);return(null===(t=null==n?void 0:n.overrides)||void 0===t?void 0:t.spacing)?`${et(i,e,n.overrides.spacing)}px`:`${i[e]}px`},It={"spacing-0":Lt("spacing-0"),"spacing-4":Lt("spacing-4"),"spacing-8":Lt("spacing-8"),"spacing-12":Lt("spacing-12"),"spacing-16":Lt("spacing-16"),"spacing-20":Lt("spacing-20"),"spacing-24":Lt("spacing-24"),"spacing-32":Lt("spacing-32"),"spacing-40":Lt("spacing-40"),"spacing-48":Lt("spacing-48"),"spacing-64":Lt("spacing-64"),"spacing-72":Lt("spacing-72"),"layout-xs":Lt("layout-xs"),"layout-sm":Lt("layout-sm"),"layout-md":Lt("layout-md"),"layout-lg":Lt("layout-lg"),"layout-xl":Lt("layout-xl"),"layout-xxl":Lt("layout-xxl"),"layout-xxxl":Lt("layout-xxxl")},Tt=Object.assign(Object.assign({},gt),{Primitive:lt}),Nt=Object.assign(Object.assign({},Mt),{Spec:Ct}),Ht=_t,Rt=Object.assign(Object.assign({},it),{Util:ft}),Pt=It,Ut=Wt,Vt=xt,Xt=wt,Jt=r.button`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: ${Pt["spacing-24"]};
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
                background-color: ${Tt["bg-hover-neutral"]};
            `}
    }
`,Qt=l.forwardRef(((e,r)=>{var{children:t,focusHighlight:n=!0,focusOutline:i="none",type:s="button"}=e,o=F(e,["children","focusHighlight","focusOutline","type"]);return a(Jt,Object.assign({ref:r,$outline:i,$highlight:n,type:s},o,{children:t}))})),Zt={notCompress:6,compress:4},Gt=r.div`
    position: ${e=>e.$fixed?"sticky":"relative"};
    background-color: white;
    z-index: 30;
    top: 0;
    left: 0;
    right: 0;
    width: 100%;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
`,Kt=r.nav`
    height: ${e=>e.$compress?Zt.compress:Zt.notCompress}rem;
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    position: relative;
    transition: ${Ht["duration-350"]} ${Ht["ease-standard"]};

    ${Xt.MaxWidth.lg} {
        height: ${3.5}rem;
    }
`,qt=r.div`
    display: flex;
    height: 100%;
    margin-left: ${e=>e.$hideNavBranding?"0":"5rem"};
    flex: 1;
    justify-content: flex-end;

    ${Xt.MaxWidth.lg} {
        margin-left: 0rem;
    }
`,en=r(Qt)`
    display: none;

    ${Xt.MaxWidth.lg} {
        display: flex;
        padding: 0 1.5rem;
        margin-right: -1.5rem;
    }
`,rn=r(e)`
    height: 1.5rem;
    width: 1.5rem;
    color: ${Tt.icon};
`,tn=r.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    flex-shrink: 0;

    height: ${e=>e.$compress?1.5:2}rem;

    ${Xt.MaxWidth.lg} {
        height: 1.5rem;
    }

    ${Xt.MaxWidth.xxs} {
        height: 1.25rem;
    }
`,nn=r.div`
    display: flex;
    background-color: ${Tt.border};
    height: 100%;
    width: 2px;
    margin: 0 ${e=>e.$compress?1:1.5}rem;

    ${Xt.MaxWidth.lg} {
        margin: 0 1rem;
    }

    ${Xt.MaxWidth.sm} {
        margin: 0 0.75rem;
    }
`,an=r.div`
    position: relative;

    ${e=>{const{$xxlStart:r,$xxlSpan:n,$xlStart:i,$xlSpan:a,$lgStart:s,$lgSpan:o,$mdStart:l,$mdSpan:d,$smStart:c,$smSpan:u,$xsStart:g,$xsSpan:h,$xxsStart:m,$xxsSpan:b}=e;return t`
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
                grid-column: ${g||"auto"} / span ${h||1};
            }

            ${wt.MaxWidth.xxs} {
                grid-column: ${m||"auto"} / span ${b||1};
            }
        `}}
`,sn=l.forwardRef(((e,r)=>{const t=n(),{xxlCols:i,xlCols:s,lgCols:o,mdCols:l,smCols:d,xsCols:c,xxsCols:u}=e,g=F(e,["xxlCols","xlCols","lgCols","mdCols","smCols","xsCols","xxsCols"]),h=(e,r,t)=>{if(!e)return{start:void 0,span:void 0};if("development"===process.env.NODE_ENV&&("number"==typeof e&&e>r?console.warn(`Warning: ${t}Cols exceeds maximum (${r}): ${e}`):Array.isArray(e)&&(e[0]>r+1||e[1]>r+1)&&console.warn(`Warning: ${t}Cols array exceeds maximum (${r}): [${e[0]}, ${e[1]}]`)),Array.isArray(e)){const[t,n]=e;if(-1===n)return{start:t,span:r-t+1};return{start:t,span:Math.min(n-t,r)}}return{start:void 0,span:Math.min(e,r)}};return a(an,Object.assign({ref:r},(()=>{const e=xt["xxl-column"]({theme:t}),r=xt["xl-column"]({theme:t}),n=xt["lg-column"]({theme:t}),a=xt["md-column"]({theme:t}),g=xt["sm-column"]({theme:t}),m=xt["xs-column"]({theme:t}),b=xt["xxs-column"]({theme:t}),f=h(i||s||o||l||d||c||u,e,"xxl"),p=h(s||o||l||d||c||u,r,"xl"),y=h(o||l||d||c||u,n,"lg"),x=h(l||d||c||u,a,"md"),v=h(d||c||u,g,"sm"),w=h(c||u,m,"xs"),F=h(u,b,"xxs");return{$xxlStart:f.start,$xxlSpan:f.span,$xlStart:p.start,$xlSpan:p.span,$lgStart:y.start,$lgSpan:y.span,$mdStart:x.start,$mdSpan:x.span,$smStart:v.start,$smSpan:v.span,$xsStart:w.start,$xsSpan:w.span,$xxsStart:F.start,$xxsSpan:F.span}})(),g))})),on=r.div`
    flex-grow: 1;
    margin: 0 auto;
    position: relative;
    width: auto;
    height: auto;

    ${e=>e.$stretch?t`
                padding: 0 ${Vt["xxl-margin"]}px;
            `:t`
                padding: 0 ${Vt["xxl-margin"]}px;
                max-width: 1440px;

                ${Xt.MaxWidth.xl} {
                    padding: 0 ${Vt["xl-margin"]}px;
                }

                ${Xt.MaxWidth.lg} {
                    padding: 0 ${Vt["lg-margin"]}px;
                }

                ${Xt.MaxWidth.md} {
                    padding: 0 ${Vt["md-margin"]}px;
                }

                ${Xt.MaxWidth.sm} {
                    padding: 0 ${Vt["sm-margin"]}px;
                }

                ${Xt.MaxWidth.xs} {
                    padding: 0 ${Vt["xs-margin"]}px;
                }

                ${Xt.MaxWidth.xxs} {
                    padding: 0 ${Vt["xxs-margin"]}px;
                }
            `}

    ${e=>{switch(e.$type){case"grid":return t`
                    column-gap: ${Vt["xxl-gutter"]}px;
                    display: grid;
                    grid-template-columns: repeat(
                        ${Vt["xxl-column"]},
                        minmax(0, 1fr)
                    );

                    ${Xt.MaxWidth.xl} {
                        column-gap: ${Vt["xl-gutter"]}px;
                        grid-template-columns: repeat(
                            ${Vt["xl-column"]},
                            minmax(0, 1fr)
                        );
                    }

                    ${Xt.MaxWidth.lg} {
                        column-gap: ${Vt["lg-gutter"]}px;
                        grid-template-columns: repeat(
                            ${Vt["lg-column"]},
                            minmax(0, 1fr)
                        );
                    }

                    ${Xt.MaxWidth.md} {
                        column-gap: ${Vt["md-gutter"]}px;
                        grid-template-columns: repeat(
                            ${Vt["md-column"]},
                            minmax(0, 1fr)
                        );
                    }

                    ${Xt.MaxWidth.sm} {
                        column-gap: ${Vt["sm-gutter"]}px;
                        grid-template-columns: repeat(
                            ${Vt["sm-column"]},
                            minmax(0, 1fr)
                        );
                    }

                    ${Xt.MaxWidth.xs} {
                        column-gap: ${Vt["xs-gutter"]}px;
                        grid-template-columns: repeat(
                            ${Vt["xs-column"]},
                            minmax(0, 1fr)
                        );
                    }

                    ${Xt.MaxWidth.xxs} {
                        column-gap: ${Vt["xxs-gutter"]}px;
                        grid-template-columns: repeat(
                            ${Vt["xxs-column"]},
                            minmax(0, 1fr)
                        );
                    }
                `;case"flex-column":return t`
                    display: flex;
                    flex-direction: column;
                `;default:return t`
                    display: flex;
                `}}}
`,ln=l.forwardRef(((e,r)=>{const{children:t,"data-testid":n="container",type:i="flex",stretch:s=!1}=e,o=F(e,["children","data-testid","type","stretch"]);return a(on,Object.assign({ref:r,"data-testid":n,$type:i,$stretch:s},o,{children:t}))})),dn=l.forwardRef(((e,r)=>{const{children:t,"data-testid":n="section",stretch:i=!1}=e,s=F(e,["children","data-testid","stretch"]);return a(cn,Object.assign({ref:r,"data-testid":n,$stretch:i},s,{children:t}))})),cn=r.section`
    display: block;
    position: relative;
`,un=l.forwardRef(((e,r)=>{const{children:t,"data-testid":n="content",className:i,type:s="flex",stretch:o=!1}=e,l=F(e,["children","data-testid","className","type","stretch"]);return a(dn,Object.assign({ref:r,"data-testid":n,className:i,stretch:o},l,{children:a(ln,{"data-testid":`${n}-container`,type:s,"data-id":"container",stretch:o,children:t})}))})),gn={Section:dn,Container:ln,Content:un,ColDiv:sn},hn=r.div`
    background: hsl(0, 0%, 94%);
    padding: 0 0.5rem;

    ${Xt.MaxWidth.sm} {
        padding: 0;
    }
`,mn=()=>{d((()=>{e()||r()}),[]);const e=()=>document.getElementById(bn),r=()=>{if(!document.getElementById(bn)){const e=document.createElement("script");e.id=bn,e.type="module",e.src=fn,document.head.appendChild(e)}};return a(hn,{dangerouslySetInnerHTML:{__html:"<sgds-masthead></sgds-masthead>"}})},bn="lifesg-ds-masthead-script",fn="https://cdn.jsdelivr.net/npm/@govtechsg/sgds-web-component/Masthead/index.js";var pn={exports:{}};pn.exports=function(){var e=1e3,r=6e4,t=36e5,n="millisecond",i="second",a="minute",s="hour",o="day",l="week",d="month",c="quarter",u="year",g="date",h="Invalid Date",m=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,b=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,f={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(e){var r=["th","st","nd","rd"],t=e%100;return"["+e+(r[(t-20)%10]||r[t]||r[0])+"]"}},p=function(e,r,t){var n=String(e);return!n||n.length>=r?e:""+Array(r+1-n.length).join(t)+e},y={s:p,z:function(e){var r=-e.utcOffset(),t=Math.abs(r),n=Math.floor(t/60),i=t%60;return(r<=0?"+":"-")+p(n,2,"0")+":"+p(i,2,"0")},m:function e(r,t){if(r.date()<t.date())return-e(t,r);var n=12*(t.year()-r.year())+(t.month()-r.month()),i=r.clone().add(n,d),a=t-i<0,s=r.clone().add(n+(a?-1:1),d);return+(-(n+(t-i)/(a?i-s:s-i))||0)},a:function(e){return e<0?Math.ceil(e)||0:Math.floor(e)},p:function(e){return{M:d,y:u,w:l,d:o,D:g,h:s,m:a,s:i,ms:n,Q:c}[e]||String(e||"").toLowerCase().replace(/s$/,"")},u:function(e){return void 0===e}},x="en",v={};v[x]=f;var w="$isDayjsObject",F=function(e){return e instanceof D||!(!e||!e[w])},$=function e(r,t,n){var i;if(!r)return x;if("string"==typeof r){var a=r.toLowerCase();v[a]&&(i=a),t&&(v[a]=t,i=a);var s=r.split("-");if(!i&&s.length>1)return e(s[0])}else{var o=r.name;v[o]=r,i=o}return!n&&i&&(x=i),i||!n&&x},C=function(e,r){if(F(e))return e.clone();var t="object"==typeof r?r:{};return t.date=e,t.args=arguments,new D(t)},E=y;E.l=$,E.i=F,E.w=function(e,r){return C(e,{locale:r.$L,utc:r.$u,x:r.$x,$offset:r.$offset})};var D=function(){function f(e){this.$L=$(e.locale,null,!0),this.parse(e),this.$x=this.$x||e.x||{},this[w]=!0}var p=f.prototype;return p.parse=function(e){this.$d=function(e){var r=e.date,t=e.utc;if(null===r)return new Date(NaN);if(E.u(r))return new Date;if(r instanceof Date)return new Date(r);if("string"==typeof r&&!/Z$/i.test(r)){var n=r.match(m);if(n){var i=n[2]-1||0,a=(n[7]||"0").substring(0,3);return t?new Date(Date.UTC(n[1],i,n[3]||1,n[4]||0,n[5]||0,n[6]||0,a)):new Date(n[1],i,n[3]||1,n[4]||0,n[5]||0,n[6]||0,a)}}return new Date(r)}(e),this.init()},p.init=function(){var e=this.$d;this.$y=e.getFullYear(),this.$M=e.getMonth(),this.$D=e.getDate(),this.$W=e.getDay(),this.$H=e.getHours(),this.$m=e.getMinutes(),this.$s=e.getSeconds(),this.$ms=e.getMilliseconds()},p.$utils=function(){return E},p.isValid=function(){return!(this.$d.toString()===h)},p.isSame=function(e,r){var t=C(e);return this.startOf(r)<=t&&t<=this.endOf(r)},p.isAfter=function(e,r){return C(e)<this.startOf(r)},p.isBefore=function(e,r){return this.endOf(r)<C(e)},p.$g=function(e,r,t){return E.u(e)?this[r]:this.set(t,e)},p.unix=function(){return Math.floor(this.valueOf()/1e3)},p.valueOf=function(){return this.$d.getTime()},p.startOf=function(e,r){var t=this,n=!!E.u(r)||r,c=E.p(e),h=function(e,r){var i=E.w(t.$u?Date.UTC(t.$y,r,e):new Date(t.$y,r,e),t);return n?i:i.endOf(o)},m=function(e,r){return E.w(t.toDate()[e].apply(t.toDate("s"),(n?[0,0,0,0]:[23,59,59,999]).slice(r)),t)},b=this.$W,f=this.$M,p=this.$D,y="set"+(this.$u?"UTC":"");switch(c){case u:return n?h(1,0):h(31,11);case d:return n?h(1,f):h(0,f+1);case l:var x=this.$locale().weekStart||0,v=(b<x?b+7:b)-x;return h(n?p-v:p+(6-v),f);case o:case g:return m(y+"Hours",0);case s:return m(y+"Minutes",1);case a:return m(y+"Seconds",2);case i:return m(y+"Milliseconds",3);default:return this.clone()}},p.endOf=function(e){return this.startOf(e,!1)},p.$set=function(e,r){var t,l=E.p(e),c="set"+(this.$u?"UTC":""),h=(t={},t[o]=c+"Date",t[g]=c+"Date",t[d]=c+"Month",t[u]=c+"FullYear",t[s]=c+"Hours",t[a]=c+"Minutes",t[i]=c+"Seconds",t[n]=c+"Milliseconds",t)[l],m=l===o?this.$D+(r-this.$W):r;if(l===d||l===u){var b=this.clone().set(g,1);b.$d[h](m),b.init(),this.$d=b.set(g,Math.min(this.$D,b.daysInMonth())).$d}else h&&this.$d[h](m);return this.init(),this},p.set=function(e,r){return this.clone().$set(e,r)},p.get=function(e){return this[E.p(e)]()},p.add=function(n,c){var g,h=this;n=Number(n);var m=E.p(c),b=function(e){var r=C(h);return E.w(r.date(r.date()+Math.round(e*n)),h)};if(m===d)return this.set(d,this.$M+n);if(m===u)return this.set(u,this.$y+n);if(m===o)return b(1);if(m===l)return b(7);var f=(g={},g[a]=r,g[s]=t,g[i]=e,g)[m]||1,p=this.$d.getTime()+n*f;return E.w(p,this)},p.subtract=function(e,r){return this.add(-1*e,r)},p.format=function(e){var r=this,t=this.$locale();if(!this.isValid())return t.invalidDate||h;var n=e||"YYYY-MM-DDTHH:mm:ssZ",i=E.z(this),a=this.$H,s=this.$m,o=this.$M,l=t.weekdays,d=t.months,c=t.meridiem,u=function(e,t,i,a){return e&&(e[t]||e(r,n))||i[t].slice(0,a)},g=function(e){return E.s(a%12||12,e,"0")},m=c||function(e,r,t){var n=e<12?"AM":"PM";return t?n.toLowerCase():n};return n.replace(b,(function(e,n){return n||function(e){switch(e){case"YY":return String(r.$y).slice(-2);case"YYYY":return E.s(r.$y,4,"0");case"M":return o+1;case"MM":return E.s(o+1,2,"0");case"MMM":return u(t.monthsShort,o,d,3);case"MMMM":return u(d,o);case"D":return r.$D;case"DD":return E.s(r.$D,2,"0");case"d":return String(r.$W);case"dd":return u(t.weekdaysMin,r.$W,l,2);case"ddd":return u(t.weekdaysShort,r.$W,l,3);case"dddd":return l[r.$W];case"H":return String(a);case"HH":return E.s(a,2,"0");case"h":return g(1);case"hh":return g(2);case"a":return m(a,s,!0);case"A":return m(a,s,!1);case"m":return String(s);case"mm":return E.s(s,2,"0");case"s":return String(r.$s);case"ss":return E.s(r.$s,2,"0");case"SSS":return E.s(r.$ms,3,"0");case"Z":return i}return null}(e)||i.replace(":","")}))},p.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},p.diff=function(n,g,h){var m,b=this,f=E.p(g),p=C(n),y=(p.utcOffset()-this.utcOffset())*r,x=this-p,v=function(){return E.m(b,p)};switch(f){case u:m=v()/12;break;case d:m=v();break;case c:m=v()/3;break;case l:m=(x-y)/6048e5;break;case o:m=(x-y)/864e5;break;case s:m=x/t;break;case a:m=x/r;break;case i:m=x/e;break;default:m=x}return h?m:E.a(m)},p.daysInMonth=function(){return this.endOf(d).$D},p.$locale=function(){return v[this.$L]},p.locale=function(e,r){if(!e)return this.$L;var t=this.clone(),n=$(e,r,!0);return n&&(t.$L=n),t},p.clone=function(){return E.w(this.$d,this)},p.toDate=function(){return new Date(this.valueOf())},p.toJSON=function(){return this.isValid()?this.toISOString():null},p.toISOString=function(){return this.$d.toISOString()},p.toString=function(){return this.$d.toUTCString()},f}(),B=D.prototype;return C.prototype=B,[["$ms",n],["$s",i],["$m",a],["$H",s],["$W",o],["$M",d],["$y",u],["$D",g]].forEach((function(e){B[e[1]]=function(r){return this.$g(r,e[0],e[1])}})),C.extend=function(e,r){return e.$i||(e(r,D,C),e.$i=!0),C},C.locale=$,C.isDayjs=F,C.unix=function(e){return C(1e3*e)},C.en=v[x],C.Ls=v,C.p={},C}();var yn=C(pn.exports),xn={exports:{}};xn.exports=function(){var e={LTS:"h:mm:ss A",LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D, YYYY",LLL:"MMMM D, YYYY h:mm A",LLLL:"dddd, MMMM D, YYYY h:mm A"},r=/(\[[^[]*\])|([-_:/.,()\s]+)|(A|a|YYYY|YY?|MM?M?M?|Do|DD?|hh?|HH?|mm?|ss?|S{1,3}|z|ZZ?)/g,t=/\d\d/,n=/\d\d?/,i=/\d*[^-_:/,()\s\d]+/,a={},s=function(e){return(e=+e)+(e>68?1900:2e3)},o=function(e){return function(r){this[e]=+r}},l=[/[+-]\d\d:?(\d\d)?|Z/,function(e){(this.zone||(this.zone={})).offset=function(e){if(!e)return 0;if("Z"===e)return 0;var r=e.match(/([+-]|\d\d)/g),t=60*r[1]+(+r[2]||0);return 0===t?0:"+"===r[0]?-t:t}(e)}],d=function(e){var r=a[e];return r&&(r.indexOf?r:r.s.concat(r.f))},c=function(e,r){var t,n=a.meridiem;if(n){for(var i=1;i<=24;i+=1)if(e.indexOf(n(i,0,r))>-1){t=i>12;break}}else t=e===(r?"pm":"PM");return t},u={A:[i,function(e){this.afternoon=c(e,!1)}],a:[i,function(e){this.afternoon=c(e,!0)}],S:[/\d/,function(e){this.milliseconds=100*+e}],SS:[t,function(e){this.milliseconds=10*+e}],SSS:[/\d{3}/,function(e){this.milliseconds=+e}],s:[n,o("seconds")],ss:[n,o("seconds")],m:[n,o("minutes")],mm:[n,o("minutes")],H:[n,o("hours")],h:[n,o("hours")],HH:[n,o("hours")],hh:[n,o("hours")],D:[n,o("day")],DD:[t,o("day")],Do:[i,function(e){var r=a.ordinal,t=e.match(/\d+/);if(this.day=t[0],r)for(var n=1;n<=31;n+=1)r(n).replace(/\[|\]/g,"")===e&&(this.day=n)}],M:[n,o("month")],MM:[t,o("month")],MMM:[i,function(e){var r=d("months"),t=(d("monthsShort")||r.map((function(e){return e.slice(0,3)}))).indexOf(e)+1;if(t<1)throw new Error;this.month=t%12||t}],MMMM:[i,function(e){var r=d("months").indexOf(e)+1;if(r<1)throw new Error;this.month=r%12||r}],Y:[/[+-]?\d+/,o("year")],YY:[t,function(e){this.year=s(e)}],YYYY:[/\d{4}/,o("year")],Z:l,ZZ:l};function g(t){var n,i;n=t,i=a&&a.formats;for(var s=(t=n.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g,(function(r,t,n){var a=n&&n.toUpperCase();return t||i[n]||e[n]||i[a].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g,(function(e,r,t){return r||t.slice(1)}))}))).match(r),o=s.length,l=0;l<o;l+=1){var d=s[l],c=u[d],g=c&&c[0],h=c&&c[1];s[l]=h?{regex:g,parser:h}:d.replace(/^\[|\]$/g,"")}return function(e){for(var r={},t=0,n=0;t<o;t+=1){var i=s[t];if("string"==typeof i)n+=i.length;else{var a=i.regex,l=i.parser,d=e.slice(n),c=a.exec(d)[0];l.call(r,c),e=e.replace(c,"")}}return function(e){var r=e.afternoon;if(void 0!==r){var t=e.hours;r?t<12&&(e.hours+=12):12===t&&(e.hours=0),delete e.afternoon}}(r),r}}return function(e,r,t){t.p.customParseFormat=!0,e&&e.parseTwoDigitYear&&(s=e.parseTwoDigitYear);var n=r.prototype,i=n.parse;n.parse=function(e){var r=e.date,n=e.utc,s=e.args;this.$u=n;var o=s[1];if("string"==typeof o){var l=!0===s[2],d=!0===s[3],c=l||d,u=s[2];d&&(u=s[2]),a=this.$locale(),!l&&u&&(a=t.Ls[u]),this.$d=function(e,r,t){try{if(["x","X"].indexOf(r)>-1)return new Date(("X"===r?1e3:1)*e);var n=g(r)(e),i=n.year,a=n.month,s=n.day,o=n.hours,l=n.minutes,d=n.seconds,c=n.milliseconds,u=n.zone,h=new Date,m=s||(i||a?1:h.getDate()),b=i||h.getFullYear(),f=0;i&&!a||(f=a>0?a-1:h.getMonth());var p=o||0,y=l||0,x=d||0,v=c||0;return u?new Date(Date.UTC(b,f,m,p,y,x,v+60*u.offset*1e3)):t?new Date(Date.UTC(b,f,m,p,y,x,v)):new Date(b,f,m,p,y,x,v)}catch(e){return new Date("")}}(r,o,n),this.init(),u&&!0!==u&&(this.$L=this.locale(u).$L),c&&r!=this.format(o)&&(this.$d=new Date("")),a={}}else if(o instanceof Array)for(var h=o.length,m=1;m<=h;m+=1){s[1]=o[m-1];var b=t.apply(this,s);if(b.isValid()){this.$d=b.$d,this.$L=b.$L,this.init();break}m===h&&(this.$d=new Date(""))}else i.call(this,e)}}}();var vn=C(xn.exports),wn={exports:{}};wn.exports=function(e,r,t){r.prototype.isBetween=function(e,r,n,i){var a=t(e),s=t(r),o="("===(i=i||"()")[0],l=")"===i[1];return(o?this.isAfter(a,n):!this.isBefore(a,n))&&(l?this.isBefore(s,n):!this.isAfter(s,n))||(o?this.isBefore(a,n):!this.isAfter(a,n))&&(l?this.isAfter(s,n):!this.isBefore(s,n))}};var Fn=C(wn.exports),$n={exports:{}};$n.exports=function(e,r){r.prototype.isSameOrAfter=function(e,r){return this.isSame(e,r)||this.isAfter(e,r)}};var Cn=C($n.exports),En={exports:{}};En.exports=function(e,r){r.prototype.isSameOrBefore=function(e,r){return this.isSame(e,r)||this.isBefore(e,r)}};var Dn,Bn,An,kn=C(En.exports),Mn={exports:{}},Sn=C(Mn.exports=(Dn={year:0,month:1,day:2,hour:3,minute:4,second:5},Bn={},function(e,r,t){var n,i=function(e,r,t){void 0===t&&(t={});var n=new Date(e),i=function(e,r){void 0===r&&(r={});var t=r.timeZoneName||"short",n=e+"|"+t,i=Bn[n];return i||(i=new Intl.DateTimeFormat("en-US",{hour12:!1,timeZone:e,year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit",timeZoneName:t}),Bn[n]=i),i}(r,t);return i.formatToParts(n)},a=function(e,r){for(var n=i(e,r),a=[],s=0;s<n.length;s+=1){var o=n[s],l=o.type,d=o.value,c=Dn[l];c>=0&&(a[c]=parseInt(d,10))}var u=a[3],g=24===u?0:u,h=a[0]+"-"+a[1]+"-"+a[2]+" "+g+":"+a[4]+":"+a[5]+":000",m=+e;return(t.utc(h).valueOf()-(m-=m%1e3))/6e4},s=r.prototype;s.tz=function(e,r){void 0===e&&(e=n);var i=this.utcOffset(),a=this.toDate(),s=a.toLocaleString("en-US",{timeZone:e}),o=Math.round((a-new Date(s))/1e3/60),l=t(s,{locale:this.$L}).$set("millisecond",this.$ms).utcOffset(15*-Math.round(a.getTimezoneOffset()/15)-o,!0);if(r){var d=l.utcOffset();l=l.add(i-d,"minute")}return l.$x.$timezone=e,l},s.offsetName=function(e){var r=this.$x.$timezone||t.tz.guess(),n=i(this.valueOf(),r,{timeZoneName:e}).find((function(e){return"timezonename"===e.type.toLowerCase()}));return n&&n.value};var o=s.startOf;s.startOf=function(e,r){if(!this.$x||!this.$x.$timezone)return o.call(this,e,r);var n=t(this.format("YYYY-MM-DD HH:mm:ss:SSS"),{locale:this.$L});return o.call(n,e,r).tz(this.$x.$timezone,!0)},t.tz=function(e,r,i){var s=i&&r,o=i||r||n,l=a(+t(),o);if("string"!=typeof e)return t(e).tz(o);var d=function(e,r,t){var n=e-60*r*1e3,i=a(n,t);if(r===i)return[n,r];var s=a(n-=60*(i-r)*1e3,t);return i===s?[n,i]:[e-60*Math.min(i,s)*1e3,Math.max(i,s)]}(t.utc(e,s).valueOf(),l,o),c=d[0],u=d[1],g=t(c).utcOffset(u);return g.$x.$timezone=o,g},t.tz.guess=function(){return Intl.DateTimeFormat().resolvedOptions().timeZone},t.tz.setDefault=function(e){n=e}}));yn.extend(Fn),yn.extend(kn),yn.extend(Cn),yn.extend(vn),yn.extend(Sn),function(e){e.generateDays=e=>{const r=e.startOf("month"),t=yn(r).startOf("week");return zn(t).map((e=>_n(e)))},e.generateDaysForCurrentWeek=e=>{const r=e.startOf("week");return _n(r)},e.generateMonths=e=>{const r=[];for(let t=0;t<12;t++){const n=e.month(t);r.push(yn(n))}return r},e.generateDecadeOfYears=e=>{const r=e.year(),t=10*Math.floor(r/10),n=e.year(t),i=[n.subtract(1,"year"),n];for(let e=1;e<11;e++)i.push(n.add(e,"year"));return i},e.getStartEndDecade=e=>{const r=10*Math.floor(+e.format("YYYY")/10);return{beginDecade:r,endDecade:+yn(`${r+9}-01-01`).format("YYYY")}},e.convertTo12HourFormat=e=>{const r=yn(e,"HH:mm");return r.isValid()?r.format("h:mm a"):""},e.isWithinRange=(e,r,t,n="day")=>!r&&!t||(r&&t?e.isBetween(r,t,n,"[]"):r?e.isSameOrAfter(r,n):e.isSameOrBefore(t,n)),e.isPreviousMonthWithinRange=(r,t)=>e.isWithinRange(r.subtract(1,"month"),t,void 0,"month"),e.isPreviousYearWithinRange=(r,t)=>e.isWithinRange(r.subtract(1,"year"),t,void 0,"year"),e.isPreviousDecadeWithinRange=(r,t)=>{const{beginDecade:n}=e.getStartEndDecade(r);return e.isWithinRange(r.year(n).subtract(1,"year"),t,void 0,"year")},e.isNextMonthWithinRange=(r,t)=>e.isWithinRange(r.add(1,"month"),void 0,t,"month"),e.isNextYearWithinRange=(r,t)=>e.isWithinRange(r.add(1,"year"),void 0,t,"year"),e.isNextDecadeWithinRange=(r,t)=>{const{endDecade:n}=e.getStartEndDecade(r);return e.isWithinRange(r.year(n).add(1,"year"),void 0,t,"year")},e.getWeekStartEnd=e=>({start:e.startOf("week").format("YYYY-MM-DD"),end:e.endOf("week").format("YYYY-MM-DD")}),e.getFixedRangeStartEnd=(e,r)=>({start:e.format("YYYY-MM-DD"),end:e.add(r-1,"day").format("YYYY-MM-DD")}),e.isDisabledDay=(r,t,n,i)=>{const a=e.isWithinRange(r,n?yn(n):void 0,i?yn(i):void 0),s=t&&t.includes(r.format("YYYY-MM-DD"));return!a||!!s}}(An||(An={}));const zn=e=>{const r=[e];for(let t=1;t<6;t++){const n=e.add(t,"week");r.push(n)}return r},_n=e=>{const r=[];for(let t=0;t<7;t++){const n=e.add(t,"day");r.push(n)}return r},On=[1,3,5,7,8,10,12],jn=[4,6,9,11];var Wn,Yn,Ln,In;!function(e){e.clampDay=(r,t,n)=>{const i=parseInt(r),a=parseInt(t),s=parseInt(n);return 0==i?"1":On.includes(a)?Math.min(i,31).toString():jn.includes(a)?Math.min(i,30).toString():2===a?e.isLeapYear(s)?Math.min(i,29).toString():Math.min(i,28).toString():r},e.clampMonth=e=>{const r=parseInt(e);return 0==r?"1":r>12?"12":e},e.isLeapYear=e=>e%4==0&&e%100!=0||e%400==0,e.getTimeDiffInMinutes=(e,r,t="HH:mm")=>{const n=yn(e,t);return yn(r,t).diff(n,"minute")},e.toDayjs=e=>e?yn(e):yn(),e.addMinutesToTime=(e,r,t="HH:mm")=>yn(e,t).add(r,"minutes").format(t),e.isSame=(e,r,t="day")=>yn(e).isSame(yn(r),t)}(Wn||(Wn={})),function(e){e.isDateDisabled=(e,r)=>{const{disabledDates:t,minDate:n,maxDate:i}=r;return!!(e&&t&&t.length&&t.includes(e))||(!(!n||!yn(e).isBefore(n,"day"))||!(!i||!yn(e).isAfter(i,"day")))},e.sanitizeInput=e=>{if(e){if(yn(e).isValid())return e}return""}}(Yn||(Yn={})),function(e){e.generate=()=>Math.random().toString(36).substring(2,9)}(Ln||(Ln={})),function(e){e.transformWithSpaces=(e,r)=>{const t="(.{"+r+"})";return e.replace(/[^\dA-Z]/gi,"").replace(new RegExp(t,"g"),"$1 ").trim()},e.padValue=(e,r)=>{if("0"===e)return r?e:e.padStart(2,"0");if(""===e)return e;return parseInt(e).toString().padStart(2,"0")},e.shouldTruncateToTwoLines=(e,r)=>{const t=Math.floor(r/9);return e.length>=2*t||1===e.split(" ").length&&e.length>t},e.truncateOneLine=(e,r,t,n,i=8)=>{let a=0;r>t&&(a=Math.floor((r-t)/i));const s=n+a;if(s<e.length){const r=Math.floor(s/2);return e.substring(0,r)+" ... "+e.substring(e.length-r,e.length)}return e},e.truncateTwoLines=(e,r,t,n=1.2)=>{const i=Math.floor(2*r/(.6*t))*(2/n);if(e.length<=i)return e;const a=Math.floor(.6*i),s=Math.floor(.2*i);return`${e.substring(0,a)}...${e.substring(e.length-s)}`},e.getTextWidth=(r,t)=>{if("undefined"==typeof document)return 0;const n=(e.getTextWidth.canvas||(e.getTextWidth.canvas=document.createElement("canvas"))).getContext("2d");n.font=t;return n.measureText(r).width},e.maskValue=(e,t)=>{if(!e)return e;const{maskRange:n,unmaskRange:i,maskChar:a="•",maskRegex:s,maskTransformer:o}=t;if(o)return o(e);if(s)return e.replace(s,a);if(n){const{startIndex:t,endIndex:i}=r(n[0],n[1]);return e.substring(0,t)+a.repeat(e.substring(t,i+1).length)+e.substring(i+1)}if(i){const{startIndex:t,endIndex:n}=r(i[0],i[1]);return a.repeat(e.substring(0,t).length)+e.substring(t,n+1)+a.repeat(e.substring(n+1).length)}return e};const r=(e,r)=>e<r?{startIndex:e,endIndex:r}:{startIndex:r,endIndex:e}}(In||(In={}));const Tn=r.div`
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
`,Nn=r.div`
    position: absolute;
    left: 0;
    top: 0;
    background-color: ${e=>e.$stacked?Tt["overlay-subtle"]:Tt["overlay-strong"]};
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
`;var Hn;!function(e){e.Ready="overlay-context-ready",e.Change="overlay-context-change"}(Hn||(Hn={}));const Rn=({show:e=!1,rootId:r,onOverlayClick:t,children:n,backgroundOpacity:i,backgroundBlur:s=!0,disableTransition:o=!1,enableOverlayClick:g=!1,zIndex:h,id:b})=>{const[x,v]=c(null),[w,F]=c(),[$]=c((()=>Ln.generate())),C=f(),E=u(),D=u(null),B=n&&l.cloneElement(n,{ref:D}),A=b?`lifesg-ds-overlay-root-${b}`:"lifesg-ds-overlay-root",k=null!=h?h:w?99999:99998;(e=>{const r=m();d((()=>{if(!r)return;const t={zIndex:e};r.events.emit(Hn.Change,t)}),[r,e]),d((()=>{if(!r)return;const t=()=>{const t={zIndex:e};r.events.emit(Hn.Change,t)};return null==r||r.events.on(Hn.Ready,t),()=>null==r?void 0:r.events.off(Hn.Ready,t)}),[r,e])})(k),d((()=>(_(),v(S()),()=>{Y(),j().length<1&&O("remove")})),[]),d((()=>{if(e){const e=z();M(e),W();const r=setTimeout((()=>{O("add")}),200);return()=>clearTimeout(r)}{Y();const e=setTimeout((()=>{j().length<1&&O("remove")}),200);return()=>clearTimeout(e)}}),[e]);const M=e=>{E.current=e,F(e)},S=()=>document&&r?document.getElementById(r):document?document.body:null,z=()=>j().length>0,_=()=>{if(!document.getElementById(Un)){const e=document.createElement("style");e.id=Un;const r=document.documentElement.clientWidth,t=window.innerWidth-r;e.innerHTML=`\n\t\t\t\t.${Vn} {\n\t\t\t\t\toverflow: hidden;\n\t\t\t\t\tpadding-right: ${t}px !important;\n\t\t\t\t\t-ms-overflow-style: none;\n\t\t\t\t\tscrollbar-width: none;\n\t\t\t\t}\n\n\t\t\t\t.${Vn}::-webkit-scrollbar {\n\t\t\t\t\tdisplay: none;\n\t\t\t\t}\n\t\t\t`,document.body.appendChild(e)}},O=e=>{const r=document.body.classList.contains(Vn);"add"!==e||r?"remove"===e&&r&&document.body.classList.remove(Vn):document.body.classList.add(Vn)},j=()=>{const e=document.body.dataset.lifesgDsOverlayOrder;return e?e.split(","):[]},W=()=>{const e=j();document.body.dataset.lifesgDsOverlayOrder=[...e,$].join(",")},Y=()=>{const e=j();document.body.dataset.lifesgDsOverlayOrder=e.filter((e=>e!==$)).join(",")},L=e=>{var r;const n=null===(r=D.current)||void 0===r?void 0:r.firstChild;n&&n.contains(e.target)||t&&g&&(e.preventDefault(),t())};return x?y.createPortal(a(Tn,{id:A,"data-testid":A,$show:e,$zIndex:k,children:n&&a(p,{id:C,children:a(Nn,{"data-testid":"overlay-wrapper",$show:e,$stacked:w,$backgroundBlur:s,$disableTransition:o,onClick:L,children:B})})}),x):null},Pn=e=>a(b,{children:a(Rn,Object.assign({},e))}),Un="lifesg-ds-overlay-stylesheet",Vn="lifesg-ds-overlay-open",Xn=r.a`
    display: flex;
    justify-content: center;
    height: 100%;

    img {
        width: auto;
        height: 100%;
        transition: ${Ht["duration-150"]} ${Ht["ease-default"]};
        object-fit: contain;
    }
`;const Jn=({src:e,alt:r,className:t,"data-testid":n})=>a("img",{src:e,alt:r||"",className:t,"data-testid":n,onError:e=>{e.target.onerror=null,e.target.src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKAAAABQCAYAAACeXX40AAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAARTSURBVHgB7Z1tUuJAEIY7qMRYWnIE9wR6BD2Be5S9weoN1pusJ1iPwJ5guYH4GeNH2HkppgojYAIhbXrepwoJEMofPHZP9zQxkgJpmh5HUfTdHZ6624EQsiLOp7676+d5fp4kyeDda/5gNBr1siz76Q5/CCHr41ccx+dOyiEejAWcyHflDg+FkDWDiNjtdk8gYQdPTCIf5SON4ALe0cQ5idya78CZ+E8IaRgn4gki4JkQogCK3Y77wdRLtDiNnp6eRkKIEh0hRBEKSFShgEQVCkhUoYBEFQpIVKGARBUKSFShgEQVCkhUoYBEFQpIVNkUokqWZfLy8iJvb2/jx1tbWxLHsWxsbEgIcBpGCQh3e3srr6+vH16Lokh2dnbGN+swAioA+a6vrzERPPN1PP/w8CB5nsvu7q5YhmvAhoFciHzz5JsmTVNxGUosQwEbBmu+WWl3Ho+Pj6VkbSsUsGGqRjSka6Riq1DAhllGJkZAUhuocKtCAUltLNPfs9wTpIAL8M3hOtne3q50PhrTnY7dj4kCzgFrteFwKM/Pz1In3W53vNNRFvYBA+Xm5mYs4bzdilWAVJubn+8B7O3tlTqvzVDAGaAB7KVDAXB/f19rIYCU2uv1JEmSmUUJpMPrVdN1G+FecAGs+5B6i+0SpM79/X2pG/weyI57yIiCw3rUm4Z7wVMgyt3d3c3s1WEtiMiIqFUniIaQO1SYgqfALgVGo+aBVFx3URI6FHACoh4mUD4DRYnlrbGmoYATUPWWKTRwDtaIlncnmoQCyvuqtwwoVJCOyeoELyBkKpN6i2C9iFEpshrBC1h2OHQWEHeZogTvwVwgCVxARLBVdzmqFiUQD+/BbR17zW0jWAHx4deRQhE9yxYwfu3oz10l+lohWAHLSlMGRFE0sBfhhxumoyXeF3oxE6SAiHx1pz+k1nnj9pDODzcUwXusf/FoEcEJiKizruoVUbC4k+LlW7TW9F/BDJHgBFz3uqu4l4zHnxU6fuwrxPVgUAKi4bzuytNf8cAPNpRt0yByhthXDGYcC1EIVyNoCoxUVW3xYBwLQ6hVJqbbThAR0EejJlmmv+iHX0NaDwYhYB0N56bw68FQMC8gxMPar02EtB40LyBSbxurS7RmFg3HWsG0gG1KvbNo6x9PFcwKiOixzJjVV2K6pWMVkwL6atIC1ke3TArY9tRbpMxuSlsxJ2Abq94yWE3F5gS0+kFZ/R6KKQFRdFieMsbYlrXobkbAUJq31ka3zFyaAwKGsomPqrjuS4RowYsTEVX4xXSiCgUkqlBAogoFJKpQQKIKBSSqUECiCgUkqlBAogoFJKpAwIEQokO/k+f5pRCiQBRF/ShN02N38EcIaZjRaPStkyTJlYuCF0JIs1w49wbj/5TnTOxlWYYoeCSErJ+/cRwj8w7HVTAO3BMnjISkAS68fHjw4X+FujXhgbs7cyccCiMiqYeBu126TPsbS77pF/4DuxeyMpdnp3gAAAAASUVORK5CYII="}}),Qn=({resources:e,onClick:r,"data-id":t,"data-testid":n="navbar-brand",type:i})=>a(Xn,{role:"link",onClick:e=>{r&&r(e,i)},tabIndex:0,"data-id":t,"data-testid":n,$type:i,children:a(Jn,{src:e.logoSrc,alt:e.brandName})}),Zn=r.div`
    display: none;

    ${Xt.MaxWidth.lg} {
        display: flex;
    }
`,Gn=r.div`
    position: absolute;
    overflow-y: auto;
    overflow-x: hidden;
    height: 100vh;
    display: block;
    padding: 0 0 ${Pt["spacing-16"]};
    background-color: white;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);
    visibility: ${e=>e.$show?"visible":"hidden"};

    ${e=>e.$show?t`
            right: 0;
            transition: all 300ms ${Ht["ease-entrance"]};
            transition-delay: 200ms;
        `:t`
        right: -100%;
        transition: all 300ms ${Ht["ease-exit"]};
    `}
    ${e=>{const r=`${e.$viewHeight}px`||"1vh";return t`
            height: calc(${r} * 100);
        `}}

	${Xt.MaxWidth.lg} {
        width: 75%;
    }

    ${Xt.MaxWidth.sm} {
        width: 100%;
    }
`,Kn=r.div`
    display: flex;
    flex-direction: column;
`,qn=r.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;
    padding: ${Pt["spacing-40"]} ${Pt["spacing-20"]}
        ${Pt["spacing-32"]};
`,ei=r(x)`
    height: 1.5rem;
    width: 1.5rem;
`,ri=r(Qt)`
    position: absolute;
    right: -${Pt["spacing-4"]};
    color: ${Tt.icon};

    :active,
    :focus {
        color: ${Tt["icon-hover"]};
    }

    svg {
        height: 1.5rem;
        width: 1.5rem;
    }
`,ti=l.forwardRef(((e,r)=>{const{show:t,resources:n={},children:i,hideNavBranding:l,onClose:u,onBrandClick:g}=e,[h,m]=c(0),{primary:b,secondary:f}=n;d((()=>(p(),window.addEventListener("resize",p),()=>{window.removeEventListener("resize",p)})),[]);const p=()=>{if(window){const e=.01*window.innerHeight;m(e)}};return a(Zn,{ref:r,"data-testid":"drawer",children:a(Gn,{$show:t,$viewHeight:h,children:s(Kn,{children:[s(qn,{children:[a(tn,{"data-id":"drawer-brand-container",children:!l&&s(o,{children:[b&&a(Qn,{resources:b,compress:!0,onClick:g,"data-id":"drawer-brand-primary","data-testid":"drawer__brand",type:"primary"}),f&&s(o,{children:[a(nn,{}),a(Qn,{resources:f,compress:!0,onClick:g,"data-id":"drawer-brand-secondary","data-testid":"drawer__brand-secondary",type:"secondary"})]})]})}),a(ri,{onClick:u,focusHighlight:!1,"aria-label":"Close nav menu",children:a(ei,{})})]}),i]})})})}));var ni=function(e,r,t,n){for(var i=e.length,a=t+(n?1:-1);n?a--:++a<i;)if(r(e[a],a,e))return a;return-1},ii=ar;var ai=function(e){var r=this.__data__,t=r.delete(e);return this.size=r.size,t};var si=function(e){return this.__data__.get(e)};var oi=function(e){return this.__data__.has(e)},li=ar,di=sr,ci=Dr;var ui=function(e,r){var t=this.__data__;if(t instanceof li){var n=t.__data__;if(!di||n.length<199)return n.push([e,r]),this.size=++t.size,this;t=this.__data__=new ci(n)}return t.set(e,r),this.size=t.size,this},gi=ar,hi=function(){this.__data__=new ii,this.size=0},mi=ai,bi=si,fi=oi,pi=ui;function yi(e){var r=this.__data__=new gi(e);this.size=r.size}yi.prototype.clear=hi,yi.prototype.delete=mi,yi.prototype.get=bi,yi.prototype.has=fi,yi.prototype.set=pi;var xi=yi;var vi=Dr,wi=function(e){return this.__data__.set(e,"__lodash_hash_undefined__"),this},Fi=function(e){return this.__data__.has(e)};function $i(e){var r=-1,t=null==e?0:e.length;for(this.__data__=new vi;++r<t;)this.add(e[r])}$i.prototype.add=$i.prototype.push=wi,$i.prototype.has=Fi;var Ci=function(e,r){return e.has(r)},Ei=$i,Di=function(e,r){for(var t=-1,n=null==e?0:e.length;++t<n;)if(r(e[t],t,e))return!0;return!1},Bi=Ci;var Ai=function(e,r,t,n,i,a){var s=1&t,o=e.length,l=r.length;if(o!=l&&!(s&&l>o))return!1;var d=a.get(e),c=a.get(r);if(d&&c)return d==r&&c==e;var u=-1,g=!0,h=2&t?new Ei:void 0;for(a.set(e,r),a.set(r,e);++u<o;){var m=e[u],b=r[u];if(n)var f=s?n(b,m,u,r,e,a):n(m,b,u,e,r,a);if(void 0!==f){if(f)continue;g=!1;break}if(h){if(!Di(r,(function(e,r){if(!Bi(h,r)&&(m===e||i(m,e,t,n,a)))return h.push(r)}))){g=!1;break}}else if(m!==b&&!i(m,b,t,n,a)){g=!1;break}}return a.delete(e),a.delete(r),g};var ki=function(e){var r=-1,t=Array(e.size);return e.forEach((function(e,n){t[++r]=[n,e]})),t};var Mi=k.Uint8Array,Si=Ne,zi=Ai,_i=ki,Oi=function(e){var r=-1,t=Array(e.size);return e.forEach((function(e){t[++r]=e})),t},ji=M?M.prototype:void 0,Wi=ji?ji.valueOf:void 0;var Yi=function(e,r,t,n,i,a,s){switch(t){case"[object DataView]":if(e.byteLength!=r.byteLength||e.byteOffset!=r.byteOffset)return!1;e=e.buffer,r=r.buffer;case"[object ArrayBuffer]":return!(e.byteLength!=r.byteLength||!a(new Mi(e),new Mi(r)));case"[object Boolean]":case"[object Date]":case"[object Number]":return Si(+e,+r);case"[object Error]":return e.name==r.name&&e.message==r.message;case"[object RegExp]":case"[object String]":return e==r+"";case"[object Map]":var o=_i;case"[object Set]":var l=1&n;if(o||(o=Oi),e.size!=r.size&&!l)return!1;var d=s.get(e);if(d)return d==r;n|=2,s.set(e,r);var c=zi(o(e),o(r),n,i,a,s);return s.delete(e),c;case"[object Symbol]":if(Wi)return Wi.call(e)==Wi.call(r)}return!1};var Li=function(e,r){for(var t=-1,n=r.length,i=e.length;++t<n;)e[i+t]=r[t];return e},Ii=E;var Ti=function(e,r,t){var n=r(e);return Ii(e)?n:Li(n,t(e))};var Ni=function(e,r){for(var t=-1,n=null==e?0:e.length,i=0,a=[];++t<n;){var s=e[t];r(s,t,e)&&(a[i++]=s)}return a},Hi=function(){return[]},Ri=Object.prototype.propertyIsEnumerable,Pi=Object.getOwnPropertySymbols,Ui=Pi?function(e){return null==e?[]:(e=Object(e),Ni(Pi(e),(function(r){return Ri.call(e,r)})))}:Hi;var Vi=function(e,r){for(var t=-1,n=Array(e);++t<e;)n[t]=r(t);return n},Xi=N,Ji=H;var Qi=function(e){return Ji(e)&&"[object Arguments]"==Xi(e)},Zi=H,Gi=Object.prototype,Ki=Gi.hasOwnProperty,qi=Gi.propertyIsEnumerable,ea=Qi(function(){return arguments}())?Qi:function(e){return Zi(e)&&Ki.call(e,"callee")&&!qi.call(e,"callee")},ra={exports:{}};var ta=function(){return!1};!function(e,r){var t=k,n=ta,i=r&&!r.nodeType&&r,a=i&&e&&!e.nodeType&&e,s=a&&a.exports===i?t.Buffer:void 0,o=(s?s.isBuffer:void 0)||n;e.exports=o}(ra,ra.exports);var na=ra.exports,ia=/^(?:0|[1-9]\d*)$/;var aa=function(e,r){var t=typeof e;return!!(r=null==r?9007199254740991:r)&&("number"==t||"symbol"!=t&&ia.test(e))&&e>-1&&e%1==0&&e<r};var sa=function(e){return"number"==typeof e&&e>-1&&e%1==0&&e<=9007199254740991},oa=N,la=sa,da=H,ca={};ca["[object Float32Array]"]=ca["[object Float64Array]"]=ca["[object Int8Array]"]=ca["[object Int16Array]"]=ca["[object Int32Array]"]=ca["[object Uint8Array]"]=ca["[object Uint8ClampedArray]"]=ca["[object Uint16Array]"]=ca["[object Uint32Array]"]=!0,ca["[object Arguments]"]=ca["[object Array]"]=ca["[object ArrayBuffer]"]=ca["[object Boolean]"]=ca["[object DataView]"]=ca["[object Date]"]=ca["[object Error]"]=ca["[object Function]"]=ca["[object Map]"]=ca["[object Number]"]=ca["[object Object]"]=ca["[object RegExp]"]=ca["[object Set]"]=ca["[object String]"]=ca["[object WeakMap]"]=!1;var ua=function(e){return da(e)&&la(e.length)&&!!ca[oa(e)]};var ga=function(e){return function(r){return e(r)}},ha={exports:{}};!function(e,r){var t=D,n=r&&!r.nodeType&&r,i=n&&e&&!e.nodeType&&e,a=i&&i.exports===n&&t.process,s=function(){try{var e=i&&i.require&&i.require("util").types;return e||a&&a.binding&&a.binding("util")}catch(e){}}();e.exports=s}(ha,ha.exports);var ma=ha.exports,ba=ua,fa=ga,pa=ma&&ma.isTypedArray,ya=pa?fa(pa):ba,xa=Vi,va=ea,wa=E,Fa=na,$a=aa,Ca=ya,Ea=Object.prototype.hasOwnProperty;var Da=function(e,r){var t=wa(e),n=!t&&va(e),i=!t&&!n&&Fa(e),a=!t&&!n&&!i&&Ca(e),s=t||n||i||a,o=s?xa(e.length,String):[],l=o.length;for(var d in e)!r&&!Ea.call(e,d)||s&&("length"==d||i&&("offset"==d||"parent"==d)||a&&("buffer"==d||"byteLength"==d||"byteOffset"==d)||$a(d,l))||o.push(d);return o},Ba=Object.prototype;var Aa=function(e){var r=e&&e.constructor;return e===("function"==typeof r&&r.prototype||Ba)};var ka=function(e,r){return function(t){return e(r(t))}}(Object.keys,Object),Ma=Aa,Sa=ka,za=Object.prototype.hasOwnProperty;var _a=function(e){if(!Ma(e))return Sa(e);var r=[];for(var t in Object(e))za.call(e,t)&&"constructor"!=t&&r.push(t);return r},Oa=re,ja=sa;var Wa=Da,Ya=_a,La=function(e){return null!=e&&ja(e.length)&&!Oa(e)};var Ia=function(e){return La(e)?Wa(e):Ya(e)},Ta=Ti,Na=Ui,Ha=Ia;var Ra=function(e){return Ta(e,Ha,Na)},Pa=Object.prototype.hasOwnProperty;var Ua=function(e,r,t,n,i,a){var s=1&t,o=Ra(e),l=o.length;if(l!=Ra(r).length&&!s)return!1;for(var d=l;d--;){var c=o[d];if(!(s?c in r:Pa.call(r,c)))return!1}var u=a.get(e),g=a.get(r);if(u&&g)return u==r&&g==e;var h=!0;a.set(e,r),a.set(r,e);for(var m=s;++d<l;){var b=e[c=o[d]],f=r[c];if(n)var p=s?n(f,b,c,r,e,a):n(b,f,c,e,r,a);if(!(void 0===p?b===f||i(b,f,t,n,a):p)){h=!1;break}m||(m="constructor"==c)}if(h&&!m){var y=e.constructor,x=r.constructor;y==x||!("constructor"in e)||!("constructor"in r)||"function"==typeof y&&y instanceof y&&"function"==typeof x&&x instanceof x||(h=!1)}return a.delete(e),a.delete(r),h},Va=ve(k,"DataView"),Xa=sr,Ja=ve(k,"Promise"),Qa=ve(k,"Set"),Za=ve(k,"WeakMap"),Ga=N,Ka=se,qa="[object Map]",es="[object Promise]",rs="[object Set]",ts="[object WeakMap]",ns="[object DataView]",is=Ka(Va),as=Ka(Xa),ss=Ka(Ja),os=Ka(Qa),ls=Ka(Za),ds=Ga;(Va&&ds(new Va(new ArrayBuffer(1)))!=ns||Xa&&ds(new Xa)!=qa||Ja&&ds(Ja.resolve())!=es||Qa&&ds(new Qa)!=rs||Za&&ds(new Za)!=ts)&&(ds=function(e){var r=Ga(e),t="[object Object]"==r?e.constructor:void 0,n=t?Ka(t):"";if(n)switch(n){case is:return ns;case as:return qa;case ss:return es;case os:return rs;case ls:return ts}return r});var cs=xi,us=Ai,gs=Yi,hs=Ua,ms=ds,bs=E,fs=na,ps=ya,ys="[object Arguments]",xs="[object Array]",vs="[object Object]",ws=Object.prototype.hasOwnProperty;var Fs=function(e,r,t,n,i,a){var s=bs(e),o=bs(r),l=s?xs:ms(e),d=o?xs:ms(r),c=(l=l==ys?vs:l)==vs,u=(d=d==ys?vs:d)==vs,g=l==d;if(g&&fs(e)){if(!fs(r))return!1;s=!0,c=!1}if(g&&!c)return a||(a=new cs),s||ps(e)?us(e,r,t,n,i,a):gs(e,r,l,t,n,i,a);if(!(1&t)){var h=c&&ws.call(e,"__wrapped__"),m=u&&ws.call(r,"__wrapped__");if(h||m){var b=h?e.value():e,f=m?r.value():r;return a||(a=new cs),i(b,f,t,n,a)}}return!!g&&(a||(a=new cs),hs(e,r,t,n,i,a))},$s=H;var Cs=function e(r,t,n,i,a){return r===t||(null==r||null==t||!$s(r)&&!$s(t)?r!=r&&t!=t:Fs(r,t,n,i,e,a))},Es=xi,Ds=Cs;var Bs=function(e,r,t,n){var i=t.length,a=i,s=!n;if(null==e)return!a;for(e=Object(e);i--;){var o=t[i];if(s&&o[2]?o[1]!==e[o[0]]:!(o[0]in e))return!1}for(;++i<a;){var l=(o=t[i])[0],d=e[l],c=o[1];if(s&&o[2]){if(void 0===d&&!(l in e))return!1}else{var u=new Es;if(n)var g=n(d,c,l,e,r,u);if(!(void 0===g?Ds(c,d,3,n,u):g))return!1}}return!0},As=G;var ks=function(e){return e==e&&!As(e)},Ms=ks,Ss=Ia;var zs=function(e){for(var r=Ss(e),t=r.length;t--;){var n=r[t],i=e[n];r[t]=[n,i,Ms(i)]}return r};var _s=function(e,r){return function(t){return null!=t&&(t[e]===r&&(void 0!==r||e in Object(t)))}},Os=Bs,js=zs,Ws=_s;var Ys=function(e,r){return null!=e&&r in Object(e)},Ls=Ur,Is=ea,Ts=E,Ns=aa,Hs=sa,Rs=Xr;var Ps=function(e,r,t){for(var n=-1,i=(r=Ls(r,e)).length,a=!1;++n<i;){var s=Rs(r[n]);if(!(a=null!=e&&t(e,s)))break;e=e[s]}return a||++n!=i?a:!!(i=null==e?0:e.length)&&Hs(i)&&Ns(s,i)&&(Ts(e)||Is(e))},Us=Ys,Vs=Ps;var Xs=Cs,Js=Kr,Qs=function(e,r){return null!=e&&Vs(e,r,Us)},Zs=Z,Gs=ks,Ks=_s,qs=Xr;var eo=function(e){return function(r){return null==r?void 0:r[e]}},ro=Zr;var to=eo,no=function(e){return function(r){return ro(r,e)}},io=Z,ao=Xr;var so=function(e){var r=js(e);return 1==r.length&&r[0][2]?Ws(r[0][0],r[0][1]):function(t){return t===e||Os(t,e,r)}},oo=function(e,r){return Zs(e)&&Gs(r)?Ks(qs(e),r):function(t){var n=Js(t,e);return void 0===n&&n===r?Qs(t,e):Xs(r,n,3)}},lo=function(e){return e},co=E,uo=function(e){return io(e)?to(ao(e)):no(e)};var go=/\s/;var ho=function(e){for(var r=e.length;r--&&go.test(e.charAt(r)););return r},mo=/^\s+/;var bo=function(e){return e?e.slice(0,ho(e)+1).replace(mo,""):e},fo=G,po=U,yo=/^[-+]0x[0-9a-f]+$/i,xo=/^0b[01]+$/i,vo=/^0o[0-7]+$/i,wo=parseInt;var Fo=function(e){if("number"==typeof e)return e;if(po(e))return NaN;if(fo(e)){var r="function"==typeof e.valueOf?e.valueOf():e;e=fo(r)?r+"":r}if("string"!=typeof e)return 0===e?e:+e;e=bo(e);var t=xo.test(e);return t||vo.test(e)?wo(e.slice(2),t?2:8):yo.test(e)?NaN:+e},$o=1/0;var Co=function(e){return e?(e=Fo(e))===$o||e===-1/0?17976931348623157e292*(e<0?-1:1):e==e?e:0:0===e?e:0};var Eo=ni,Do=function(e){return"function"==typeof e?e:null==e?lo:"object"==typeof e?co(e)?oo(e[0],e[1]):so(e):uo(e)},Bo=function(e){var r=Co(e),t=r%1;return r==r?t?r-t:r:0},Ao=Math.max;var ko=C((function(e,r,t){var n=null==e?0:e.length;if(!n)return-1;var i=null==t?0:Bo(t);return i<0&&(i=Ao(n+i,0)),Eo(e,Do(r),i)}));const Mo=r.div`
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
`,Wo=r.button`
    padding: ${Pt["spacing-8"]} ${Pt["spacing-16"]};
    min-width: 4rem;
    border: ${Rt["width-010"]} ${Rt.solid} transparent;
    border-radius: ${Ut.sm};
    transition: all ${Ht["duration-250"]} ${Ht["ease-default"]};
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;

    // -----------------------------------------------------------------------------
    // BUTTON STYLE + TEXT COLOR
    // -----------------------------------------------------------------------------
    ${e=>{switch(e.$buttonStyle){case"secondary":return t`
                    background-color: ${Tt.Primitive.white};
                    border-color: ${e.$buttonIsDanger?Tt["border-error-strong"]:Tt["border-primary"]};

                    color: ${e.$buttonIsDanger?Tt["text-error"]:Tt["text-primary"]};

                    &:hover,
                    &:active {
                        background-color: ${Tt["bg-hover-neutral"]};
                    }
                `;case"light":return t`
                    background-color: ${Tt.bg};
                    border-color: ${Tt.border};

                    color: ${e.$buttonIsDanger?Tt["text-error"]:Tt["text-primary"]};

                    &:hover,
                    &:active {
                        background-color: ${Tt["bg-hover-neutral"]};
                    }
                `;case"link":return t`
                    background-color: transparent;

                    color: ${e.$buttonIsDanger?Tt["text-error"]:Tt["text-primary"]};
                    &:hover,
                    &:active {
                        background-color: ${Tt["bg-hover-neutral"]};
                    }
                `;case"disabled":return t`
                    background-color: ${Tt["bg-disabled"]};

                    cursor: not-allowed;

                    &:hover {
                        box-shadow: none;
                    }

                    color: ${Tt["text-disabled"]};
                `;default:return t`
                    background-color: ${e.$buttonIsDanger?Tt["bg-error-strong"]:Tt["bg-primary"]};

                    ${Xt.MaxWidth.md} {
                        width: 100%;
                    }

                    color: ${Tt["text-inverse"]};

                    &:hover,
                    &:active {
                        background-color: ${e.$buttonIsDanger?Tt["bg-error-strong-hover"]:Tt["bg-primary-hover"]};
                    }
                `}}}

    // -----------------------------------------------------------------------------
	// BUTTON SIZE + TEXT SIZE
	// -----------------------------------------------------------------------------
	${e=>{switch(e.$buttonSizeStyle){case"small":return t`
                    height: 2.5rem;
                    ${Nt["body-md-semibold"]}

                    ${Xt.MaxWidth.xxs} {
                        height: auto;
                    }
                `;case"large":return t`
                    height: 4rem;
                    ${Nt["heading-md-semibold"]}

                    ${Xt.MaxWidth.xxs} {
                        height: auto;
                    }
                `;default:return t`
                    height: 3rem;
                    ${Nt["heading-xs-semibold"]}

                    ${Xt.MaxWidth.xxs} {
                        height: auto;
                    }
                `}}}
`,Yo=r((({color:e,className:r,size:t})=>s(Mo,{className:r,$size:t,$color:e,"data-testid":"component-loading-spinner",children:[a(zo,{id:"inner1"}),a(_o,{id:"inner2"}),a(Oo,{id:"inner3"}),a(jo,{id:"inner4"})]})))`
    margin-right: 0.5rem;
`,Lo=(e,r)=>{const{children:t,disabled:n=!1,loading:i=!1,styleType:o="default",danger:l=!1}=e,d=F(e,["children","disabled","loading","styleType","danger"]),c={$buttonStyle:n?"disabled":o,$buttonSizeStyle:"default",$buttonIsDanger:l};return s(Wo,Object.assign({ref:r,"data-testid":d["data-testid"]||"button",disabled:n},c,d,{children:[i&&a(Yo,{}),a("span",{children:t})]}))};Lo.displayName="Button.Default";const Io=(e,r)=>{const{children:t,disabled:n=!1,loading:i=!1,styleType:o="default",danger:l=!1}=e,d=F(e,["children","disabled","loading","styleType","danger"]),c={$buttonStyle:n?"disabled":o,$buttonSizeStyle:"small",$buttonIsDanger:l};return s(Wo,Object.assign({ref:r,"data-testid":d["data-testid"]||"button",disabled:n},c,d,{children:[i&&a(Yo,{}),a("span",{children:t})]}))};Io.displayName="Button.Small";const To=(e,r)=>{const{children:t,disabled:n=!1,loading:i=!1,styleType:o="default",danger:l=!1}=e,d=F(e,["children","disabled","loading","styleType","danger"]),c={$buttonStyle:n?"disabled":o,$buttonSizeStyle:"large",$buttonIsDanger:l};return s(Wo,Object.assign({ref:r,"data-testid":d["data-testid"]||"button",disabled:n},c,d,{children:[i&&a(Yo,{}),a("span",{children:t})]}))};To.displayName="Button.Large";const No={Default:l.forwardRef(Lo),Small:l.forwardRef(Io),Large:l.forwardRef(To)},Ho=e=>t`
    display: -webkit-box;
    -webkit-line-clamp: ${e};
    -webkit-box-orient: vertical;
    overflow: hidden;
`,Ro=(e,r,n=!1)=>t`
        ${Nt[`${e}-${r}`]}
        ${n?"margin-bottom: 1.05em;":"margin-bottom: 0;"}
    `,Po=e=>{if(e)return t`
            ${Ho(e)}
        `},Uo=(e,r)=>t`
    ${Ro(e,r.weight||"regular",r.paragraph)}
    ${((e=!1,r=!1,n)=>r?t`
            display: block;
            ${Po(n)}
        `:e?t`
            display: inline;
        `:t`
            display: block;
            ${Po(n)}
        `)(r.inline,r.paragraph,r.maxLines)}
    color: ${Tt.text};
`;var Vo;!function(e){const n=(e,t,n)=>{const i=r(e).attrs((({inline:e})=>({as:e?"span":void 0})))`
            ${e=>Uo(t,e)}
        `;return i.displayName=`Typography.${n}`,i};e.HeadingXXL=n("h1","heading-xxl","HeadingXXL"),e.HeadingXL=n("h2","heading-xl","HeadingXL"),e.HeadingLG=n("h3","heading-lg","HeadingLG"),e.HeadingMD=n("h4","heading-md","HeadingMD"),e.HeadingSM=n("h5","heading-sm","HeadingSM"),e.HeadingXS=n("h6","heading-xs","HeadingXS");const i=(e,t)=>{const n=r.p.attrs((({inline:e})=>({as:e?"span":void 0})))`
            ${r=>Uo(e,r)}
        `;return n.displayName=`Typography.${t}`,n};e.BodyBL=i("body-baseline","BodyBL"),e.BodyMD=i("body-md","BodyMD"),e.BodySM=i("body-sm","BodySM"),e.BodyXS=i("body-xs","BodyXS");const o=(e,n)=>{const i=r.a`
            ${r=>t`
                ${Ro(e,r.weight||"regular")}
                color: ${Tt.hyperlink};
                text-decoration: none;

                :hover,
                :active,
                :focus {
                    color: ${Tt["text-hover"]};
                }
            `}
        `,o=e=>{var{external:r=!1,children:t}=e,n=F(e,["external","children"]);return s(i,Object.assign({},n,{children:[t,r&&a(Xo,{})]}))};return o.displayName=`Typography.${n}`,o};e.LinkBL=o("body-baseline","LinkBL"),e.LinkMD=o("body-md","LinkMD"),e.LinkSM=o("body-sm","LinkSM"),e.LinkXS=o("body-xs","LinkXS")}(Vo||(Vo={}));const Xo=r(v)`
    height: 1lh;
    width: 1em;
    margin-left: 0.4em;
    vertical-align: middle;
`,Jo=r.ul`
    display: flex;
    list-style: none;
    margin-left: ${Pt["spacing-64"]};
    flex-shrink: 0;

    ${Xt.MaxWidth.lg} {
        display: none;
    }
`,Qo=r.ul`
    display: none;

    ${Xt.MaxWidth.lg} {
        display: flex;
        list-style: none;
        margin-left: ${Pt["spacing-64"]};
        flex-shrink: 0;
    }
`,Zo=r.ul`
    display: none;
    list-style: none;

    ${Xt.MaxWidth.lg} {
        display: flex;
        flex-direction: column;
        margin-top: ${Pt["spacing-40"]};
        width: max-content;
        min-width: 22rem;
        max-width: 24rem;
    }

    ${Xt.MaxWidth.sm} {
        width: 100%;
        max-width: unset;
        min-width: unset;
    }
`,Go=r.li`
    position: relative;
    display: flex;
    align-items: center;

    :not(:last-of-type) {
        margin-right: ${Pt["spacing-16"]};
    }

    ${Xt.MaxWidth.lg} {
        width: 100%;
        padding: 0 0 0 ${Pt["spacing-16"]};
        justify-content: center;

        :not(:last-of-type) {
            margin-right: 0;
            margin-bottom: ${e=>e.$mobile?Pt["spacing-16"]:"0"};
        }
    }

    ${Xt.MaxWidth.sm} {
        ${e=>{if(e.$mobile)return t`
                    padding: 0 ${Pt["spacing-16"]};
                `}}
    }
`,Ko=r(No.Small)`
    ${Xt.MaxWidth.lg} {
        width: 100%;
    }
`,qo=r.div`
    display: none;

    ${Xt.MaxWidth.lg} {
        display: flex;
        flex-direction: column;
        margin-top: ${Pt["spacing-40"]};
    }
`,el=r(Vo.BodyMD)`
    margin-bottom: ${Pt["spacing-8"]};
`,rl=r.div`
    display: flex;
`,tl=r.a`
    :not(:last-child) {
        margin-right: ${Pt["spacing-16"]};
    }

    img {
        width: auto;
        height: auto;
        object-fit: contain;
    }

    ${Xt.MaxWidth.lg} {
        img {
            max-width: 11rem;
        }
    }

    ${Xt.MaxWidth.sm} {
        img {
            max-width: 100%;
        }
    }
`,nl=({actionButtons:e,mobile:r=!1,onActionButtonClick:t})=>{const n=e=>{e.stopPropagation()},i=e=>r=>{r.stopPropagation(),"download"===e.type&&window.scrollTo({left:0,top:document.body.scrollHeight,behavior:"smooth"}),t(r,e)},l=(e,r)=>{const t=e?(e=>{const r=ko(e,(e=>"download"===e.type));if(r>-1){const t=[...e],n=t.splice(r,1);return[...t,n[0]]}return e})(r):r;return t.map(((r,t)=>{let o;switch(r.type){case"download":o=e?(l=r.args,s(qo,{children:[a(el,{weight:"semibold",children:l&&l.children||"Download the app"}),s(rl,{children:[a(tl,{href:"https://apps.apple.com/sg/app/moments-of-life/id1383218758",target:"_blank",rel:"noopener noreferrer","data-testid":"button__app-store",onClick:n,children:a("img",{src:"https://assets.life.gov.sg/react-design-system/img/download/apple-app-store.png",alt:"apple-app-store"})}),a(tl,{href:"https://play.google.com/store/apps/details?id=sg.gov.app.mol&hl=en_SG",target:"_blank",rel:"noopener noreferrer","data-testid":"button__play-store",onClick:n,children:a("img",{src:"https://assets.life.gov.sg/react-design-system/img/download/google-play-store.png",alt:"google-play-store"})})]})]})):a(Ko,Object.assign({},r.args,{type:"button",onClick:i(r),"data-testid":"action-button__download",children:"Download the app"}));break;case"button":{const n=r.args["data-testid"]?`action-button__${r.args["data-testid"]}`:`action-button__button-${e?"mobile-":""}${t+1}`;o=a(Ko,Object.assign({},r.args,{type:"button",onClick:i(r),"data-testid":n}));break}case"component":{const e=r.args;o=e&&e.render||null;break}default:o=null}var l;if(o)return a(Go,{$mobile:e,children:o},`action-button-${t+1}`)}))};if(e){const t=(null==e?void 0:e.mobile)||e.desktop,n=t.filter((e=>!!e.uncollapsible)),i=t.filter((e=>!e.uncollapsible));return r?a(o,{children:i.length>0&&a(Zo,{children:l(r,i)})}):s(o,{children:[n.length>0&&a(Qo,{children:l(!1,n)}),e.desktop.length>0&&a(Jo,{children:l(r,e.desktop)})]})}return a(o,{})};var il;!function(e){e.isNavItemCommon=e=>!!e.onClick,e.isNavItemLink=e=>{const r=e;return!r.itemType||"link"===r.itemType}}(il||(il={}));const al=r.ul`
    display: flex;
    flex-direction: column;
    position: absolute;
    left: 0;
    top: 100%;

    min-width: 15.625rem;
    width: 100%;
    max-height: 20rem;
    overflow: auto;

    padding: ${Pt["spacing-8"]} 0;

    background: ${Tt.bg};
    border-radius: ${Ut.md};
    box-shadow: 0px 2px 8px 0px
        rgb(from ${Tt.Primitive["neutral-50"]} r g b / 25%);
`,sl=r.ul`
    display: none;
    list-style: none;

    ${Xt.MaxWidth.lg} {
        border-left: ${Rt["width-040"]} solid ${Tt["border-selected"]};
        display: flex;
        flex-direction: column;
    }
`,ol=r(Vo.LinkBL)`
    width: 100%;
    position: relative;
    text-align: left;
    color: ${Tt.text};

    margin: 0 ${Pt["spacing-8"]};

    // use border, as padding still shows an extra line after the ellipsis
    border: ${Rt.solid} transparent;
    border-width: ${Pt["spacing-12"]} ${Pt["spacing-8"]};

    border-radius: ${Ut.md};

    ${Ho(2)}
    white-space: pre-wrap;

    :hover,
    :active,
    :focus {
        background-color: ${Tt["bg-hover"]};
        color: ${Tt.text};
    }

    ${Xt.MaxWidth.lg} {
        ${Nt["body-md-regular"]}
    }
`,ll=r.li`
    width: 100%;
    position: relative;
    display: flex;
    align-items: flex-start;
`,dl=({items:e,mobile:r=!1,onItemClick:t})=>{const n=e=>r=>{r.stopPropagation(),t(r,e)},i=(r=!1)=>e.map(((e,t)=>{const{children:i,options:s}=e,o=F(e,["children","options"]),l=r?`link__mobile-${t+1}`:`link__${t+1}`;return a(ll,{children:a(ol,Object.assign({"data-testid":l},o,{onClick:n(e)},s,{children:i}))},t)}));if(e&&e.length>0){return a(r?sl:al,{children:i(r)})}return a(o,{})},cl=r.ul`
    display: flex;
    list-style: none;
    position: relative;

    ${e=>e.$alignLeft&&"margin-right: auto;"}

    ${Xt.MaxWidth.lg} {
        display: none;
    }
`,ul=r.ul`
    display: none;
    list-style: none;

    ${Xt.MaxWidth.lg} {
        display: flex;
        flex-direction: column;
        overflow: hidden;
    }
`,gl=r.li`
    display: flex;
    margin-left: 1rem;

    :first-child {
        // negative margin to preserve touch target size for link
        margin-left: ${e=>e.$hiddenBranding?"-0.5rem":"0"};
    }

    ${Xt.MaxWidth.lg} {
        flex-direction: column;
        padding: 0.125rem 0;
        width: 100%;
        margin-left: 0rem;
    }
`,hl=r(Vo.LinkMD)`
    display: flex;
    position: relative;
    align-items: center;
    text-align: center;
    color: ${Tt.text};
    height: 100%;
    padding: 0 0.5rem;

    :active,
    :focus,
    :hover {
        color: ${e=>e.$selected?Tt["text-selected-hover"]:Tt["text-hover"]};
    }

    ${Xt.MaxWidth.lg} {
        width: 100%;
        padding: 0.5rem 1rem;
        text-align: left;
        align-items: flex-start;
    }
`,ml=r.div`
    flex: 1;
    margin-top: 0.25rem;

    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 3;
    white-space: pre-wrap;
`,bl=r.div`
    position: absolute;
    bottom: 0;
    height: 0.25rem;
    left: 0.5rem;
    right: 0.5rem;
    background-color: ${Tt["border-selected"]};

    :hover {
        ${e=>e.$selected&&Tt["border-selected-hover"]};
    }

    ${Xt.MaxWidth.lg} {
        left: 0;
        right: unset;
        top: 0;
        bottom: 0;
        height: 100%;
        width: 0.25rem;
    }
`,fl=r.div`
    padding-left: 0.5rem;
    margin-right: -0.5rem;
`,pl=r(Qt)`
    padding: 0.5rem;
    transform: rotate(${e=>e.$selected?0:180}deg);
    transition: transform 300ms ease-in-out;
    margin: auto 0.25rem auto 0;
`,yl=r(w)`
    height: 1.25rem;
    width: 1.25rem;
    color: ${Tt.icon};
    :hover {
        ${e=>e.$selected?Tt["icon-selected-hover"]:Tt["icon-hover"]};
    }
`,xl=({items:e,selectedId:r,mobile:t=!1,hideNavBranding:n,onItemClick:i})=>{const[l,g]=c(-1),[h,m]=c(!1),b=u(null);d((()=>{const e=e=>{b.current&&!b.current.contains(e.target)&&f()};return document.addEventListener("click",e,!0),()=>{document.removeEventListener("click",e,!0)}}),[]);const f=()=>{m(!1)},p=(e,r)=>t=>{t.stopPropagation(),g(r),m(!0),i(t,e)},y=(e,r)=>{e.stopPropagation(),i(e,r),m(!1)},x=()=>e.map(((e,i)=>{if("component"===e.itemType){const r=e&&e.children||null;return a("li",{children:r},i)}{const o=(e=>{if(e.id===r)return!0;if(e.subMenu&&e.subMenu.length>=1)return!!e.subMenu.find((e=>e.id===r));return!1})(e),{children:d,options:c}=e,u=F(e,["children","options"]),g=o?t?"bold":"semibold":"regular",m=t?`link__mobile-${i+1}`:`link__${i+1}`,b=l>=0&&l===i&&h;return s(gl,{$hiddenBranding:n,children:[s(hl,Object.assign({"data-testid":m,weight:g,$selected:o},u,{onClick:p(e,i)},c,{children:[a(ml,{children:d}),o&&a(bl,{"data-testid":`${m}-indicator`,$selected:o}),t&&e.subMenu&&a(fl,{children:a(pl,{"data-testid":`${m}-expand-collapse-button`,$selected:b,focusHighlight:!1,focusOutline:"browser","aria-label":b?"Collapse":"Expand",children:a(yl,{$selected:o})})})]})),b&&e.subMenu&&a(dl,{items:e.subMenu,mobile:t,onItemClick:y})]},i)}}));return e&&e.length>0?t?a(ul,{ref:b,children:x()}):a(cl,{ref:b,$alignLeft:n,children:x()}):a(o,{})},vl={primary:{brandName:"LifeSG",logoSrc:"https://assets.life.gov.sg/lifesg/logo-lifesg.svg"}},wl={primary:{brandName:"BookingSG",logoSrc:"https://www.booking.gov.sg/logo.svg"}},Fl={primary:{brandName:"CCube",logoSrc:"https://assets.life.gov.sg/ccube/logo-ccube.svg"}},$l={primary:{brandName:"MyLegacy",logoSrc:"https://mylegacy.life.gov.sg/images/site-logo.png"}},Cl=g(((e,r)=>{var{items:t,className:i,id:l,selectedId:g,compress:m=!1,fixed:b=!0,resources:f,hideNavElements:p=!1,hideNavBranding:y=!1,drawerDismissalExclusions:x=[],actionButtons:v,onItemClick:w,onActionButtonClick:$,onBrandClick:C,masthead:E=!0,layout:D="default"}=e,B=F(e,["items","className","id","selectedId","compress","fixed","resources","hideNavElements","hideNavBranding","drawerDismissalExclusions","actionButtons","onItemClick","onActionButtonClick","onBrandClick","masthead","layout"]);const[A,k]=c(!1),[M,S]=c(!1),z="stretch"===D,_=u(null),O=n(),j=(e=>{switch(e){case"bookingsg":return wl;case"mylegacy":return $l;case"ccube":return Fl;default:return vl}})(null==O?void 0:O.resourceScheme),W=Vt["lg-max"]({theme:O}),Y=(null==f?void 0:f.primary)||j.primary,L=null==f?void 0:f.secondary;h(r,(()=>Object.assign(_.current,{dismissDrawer:()=>{I()}})),[A]),d((()=>(N(),window.addEventListener("resize",N),()=>{window.removeEventListener("resize",N)})),[]);const I=()=>{k(!1),setTimeout((()=>{S(!1)}),550)},T=e=>A&&-1===x.indexOf(e),N=()=>{window.innerWidth<=W&&A&&I()},H=(e,r)=>{C&&(e.preventDefault(),C(r)),T("brand-click")&&I()},R=(e,r)=>{il.isNavItemCommon(r)&&r.onClick?r.onClick(e):w&&(e.preventDefault(),w(r)),il.isNavItemLink(r)&&!r.subMenu&&T("item-click")&&I()},P=(e,r)=>{var t;"button"!==r.type&&"download"!==r.type||!(null===(t=r.args)||void 0===t?void 0:t.onClick)?$&&(e.preventDefault(),$(r)):r.args.onClick(e),T("item-click")&&I()},U=()=>{k(!0),S(!0)},V=()=>{T("close-button-click")&&I()},X=()=>{const e=t.mobile||t.desktop;return e&&e.length>0||v&&(e=>{const r=e.mobile||e.desktop;return!!r&&r.length&&r.some((e=>!e.uncollapsible))})(v)?a(en,{"aria-label":"Open nav menu","data-testid":"button__mobile-menu",onClick:U,focusHighlight:!1,children:a(rn,{})}):null};return s(Gt,{ref:_,$fixed:b,className:i,id:l||"navbar-wrapper","data-testid":B["data-testid"]||"navbar-wrapper",children:[E&&a(mn,{}),s(gn.Content,{stretch:z,children:[s(Kt,{$compress:m,children:[!y&&s(tn,{$compress:m,"data-id":"brand-container",children:[Y&&a(Qn,{resources:Y,onClick:H,"data-id":"brand-primary","data-testid":"main__brand",type:"primary"}),L&&s(o,{children:[a(nn,{$compress:m}),a(Qn,{resources:L,onClick:H,"data-id":"brand-secondary","data-testid":"main__brand-secondary",type:"secondary"})]})]}),!p&&s(qt,{$hideNavBranding:y,children:[a(xl,{items:t.desktop,onItemClick:R,selectedId:g,hideNavBranding:y}),a(nl,{actionButtons:v,onActionButtonClick:P}),X()]})]}),!p&&a(Pn,{show:M,enableOverlayClick:!0,onOverlayClick:V,children:s(ti,{show:A,resources:{primary:Y,secondary:L},onClose:V,onBrandClick:H,actionButtons:v,hideNavBranding:y,children:[a(xl,{items:t.mobile||t.desktop,onItemClick:R,selectedId:g,mobile:!0}),a(nl,{actionButtons:v,onActionButtonClick:P,mobile:!0})]})})]})]})})),El=Zt,Dl=3.5;export{Cl as Navbar,El as NavbarHeight,Dl as NavbarMobileHeight};
//# sourceMappingURL=index.js.map
