import{jsx as e,jsxs as r,Fragment as n}from"react/jsx-runtime";import t,{useEffect as i,useState as o,useRef as a,useCallback as s,createContext as l,useContext as d,useImperativeHandle as c,forwardRef as u}from"react";import"@lifesg/react-icons/i-circle-fill";import g,{css as m,isStyledComponent as b,keyframes as h}from"styled-components";import{ExternalIcon as y}from"@lifesg/react-icons/external";import{CrossIcon as p}from"@lifesg/react-icons/cross";import{useFloatingTree as f,FloatingTree as x,useFloatingNodeId as v,FloatingNode as F,useFloating as w,useTransitionStatus as $,useDismiss as E,useInteractions as C,FloatingFocusManager as D}from"@floating-ui/react";import B from"react-dom";import{ExclamationCircleFillIcon as A}from"@lifesg/react-icons/exclamation-circle-fill";function S(e,r){var n={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&r.indexOf(t)<0&&(n[t]=e[t]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(t=Object.getOwnPropertySymbols(e);i<t.length;i++)r.indexOf(t[i])<0&&Object.prototype.propertyIsEnumerable.call(e,t[i])&&(n[t[i]]=e[t[i]])}return n}"function"==typeof SuppressedError&&SuppressedError;var k="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};function z(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var O=Array.isArray,M="object"==typeof k&&k&&k.Object===Object&&k,_="object"==typeof self&&self&&self.Object===Object&&self,T=M||_||Function("return this")(),j=T.Symbol,L=j,Y=Object.prototype,I=Y.hasOwnProperty,W=Y.toString,H=L?L.toStringTag:void 0;var R=function(e){var r=I.call(e,H),n=e[H];try{e[H]=void 0;var t=!0}catch(e){}var i=W.call(e);return t&&(r?e[H]=n:delete e[H]),i},P=Object.prototype.toString;var N=R,V=function(e){return P.call(e)},Z=j?j.toStringTag:void 0;var X=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":Z&&Z in Object(e)?N(e):V(e)};var U=X,J=function(e){return null!=e&&"object"==typeof e};var q=function(e){return"symbol"==typeof e||J(e)&&"[object Symbol]"==U(e)},G=O,K=q,Q=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,ee=/^\w*$/;var re=function(e,r){if(G(e))return!1;var n=typeof e;return!("number"!=n&&"symbol"!=n&&"boolean"!=n&&null!=e&&!K(e))||(ee.test(e)||!Q.test(e)||null!=r&&e in Object(r))};var ne=function(e){var r=typeof e;return null!=e&&("object"==r||"function"==r)},te=X,ie=ne;var oe,ae=function(e){if(!ie(e))return!1;var r=te(e);return"[object Function]"==r||"[object GeneratorFunction]"==r||"[object AsyncFunction]"==r||"[object Proxy]"==r},se=T["__core-js_shared__"],le=(oe=/[^.]+$/.exec(se&&se.keys&&se.keys.IE_PROTO||""))?"Symbol(src)_1."+oe:"";var de=function(e){return!!le&&le in e},ce=Function.prototype.toString;var ue=ae,ge=de,me=ne,be=function(e){if(null!=e){try{return ce.call(e)}catch(e){}try{return e+""}catch(e){}}return""},he=/^\[object .+?Constructor\]$/,ye=Function.prototype,pe=Object.prototype,fe=ye.toString,xe=pe.hasOwnProperty,ve=RegExp("^"+fe.call(xe).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");var Fe=function(e,r){return null==e?void 0:e[r]},we=function(e){return!(!me(e)||ge(e))&&(ue(e)?ve:he).test(be(e))},$e=Fe;var Ee=function(e,r){var n=$e(e,r);return we(n)?n:void 0},Ce=Ee(Object,"create"),De=Ce;var Be=function(){this.__data__=De?De(null):{},this.size=0};var Ae=function(e){var r=this.has(e)&&delete this.__data__[e];return this.size-=r?1:0,r},Se=Ce,ke=Object.prototype.hasOwnProperty;var ze=function(e){var r=this.__data__;if(Se){var n=r[e];return"__lodash_hash_undefined__"===n?void 0:n}return ke.call(r,e)?r[e]:void 0},Oe=Ce,Me=Object.prototype.hasOwnProperty;var _e=function(e){var r=this.__data__;return Oe?void 0!==r[e]:Me.call(r,e)},Te=Ce;var je=function(e,r){var n=this.__data__;return this.size+=this.has(e)?0:1,n[e]=Te&&void 0===r?"__lodash_hash_undefined__":r,this},Le=Be,Ye=Ae,Ie=ze,We=_e,He=je;function Re(e){var r=-1,n=null==e?0:e.length;for(this.clear();++r<n;){var t=e[r];this.set(t[0],t[1])}}Re.prototype.clear=Le,Re.prototype.delete=Ye,Re.prototype.get=Ie,Re.prototype.has=We,Re.prototype.set=He;var Pe=Re;var Ne=function(){this.__data__=[],this.size=0};var Ve=function(e,r){return e===r||e!=e&&r!=r};var Ze=function(e,r){for(var n=e.length;n--;)if(Ve(e[n][0],r))return n;return-1},Xe=Ze,Ue=Array.prototype.splice;var Je=function(e){var r=this.__data__,n=Xe(r,e);return!(n<0)&&(n==r.length-1?r.pop():Ue.call(r,n,1),--this.size,!0)},qe=Ze;var Ge=function(e){var r=this.__data__,n=qe(r,e);return n<0?void 0:r[n][1]},Ke=Ze;var Qe=function(e){return Ke(this.__data__,e)>-1},er=Ze;var rr=function(e,r){var n=this.__data__,t=er(n,e);return t<0?(++this.size,n.push([e,r])):n[t][1]=r,this},nr=Ne,tr=Je,ir=Ge,or=Qe,ar=rr;function sr(e){var r=-1,n=null==e?0:e.length;for(this.clear();++r<n;){var t=e[r];this.set(t[0],t[1])}}sr.prototype.clear=nr,sr.prototype.delete=tr,sr.prototype.get=ir,sr.prototype.has=or,sr.prototype.set=ar;var lr=sr,dr=Ee(T,"Map"),cr=Pe,ur=lr,gr=dr;var mr=function(e){var r=typeof e;return"string"==r||"number"==r||"symbol"==r||"boolean"==r?"__proto__"!==e:null===e};var br=function(e,r){var n=e.__data__;return mr(r)?n["string"==typeof r?"string":"hash"]:n.map},hr=br;var yr=function(e){var r=hr(this,e).delete(e);return this.size-=r?1:0,r},pr=br;var fr=function(e){return pr(this,e).get(e)},xr=br;var vr=function(e){return xr(this,e).has(e)},Fr=br;var wr=function(e,r){var n=Fr(this,e),t=n.size;return n.set(e,r),this.size+=n.size==t?0:1,this},$r=function(){this.size=0,this.__data__={hash:new cr,map:new(gr||ur),string:new cr}},Er=yr,Cr=fr,Dr=vr,Br=wr;function Ar(e){var r=-1,n=null==e?0:e.length;for(this.clear();++r<n;){var t=e[r];this.set(t[0],t[1])}}Ar.prototype.clear=$r,Ar.prototype.delete=Er,Ar.prototype.get=Cr,Ar.prototype.has=Dr,Ar.prototype.set=Br;var Sr=Ar;function kr(e,r){if("function"!=typeof e||null!=r&&"function"!=typeof r)throw new TypeError("Expected a function");var n=function(){var t=arguments,i=r?r.apply(this,t):t[0],o=n.cache;if(o.has(i))return o.get(i);var a=e.apply(this,t);return n.cache=o.set(i,a)||o,a};return n.cache=new(kr.Cache||Sr),n}kr.Cache=Sr;var zr=kr;var Or=function(e){var r=zr(e,(function(e){return 500===n.size&&n.clear(),e})),n=r.cache;return r},Mr=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,_r=/\\(\\)?/g,Tr=Or((function(e){var r=[];return 46===e.charCodeAt(0)&&r.push(""),e.replace(Mr,(function(e,n,t,i){r.push(t?i.replace(_r,"$1"):n||e)})),r}));var jr=function(e,r){for(var n=-1,t=null==e?0:e.length,i=Array(t);++n<t;)i[n]=r(e[n],n,e);return i},Lr=O,Yr=q,Ir=j?j.prototype:void 0,Wr=Ir?Ir.toString:void 0;var Hr=function e(r){if("string"==typeof r)return r;if(Lr(r))return jr(r,e)+"";if(Yr(r))return Wr?Wr.call(r):"";var n=r+"";return"0"==n&&1/r==-1/0?"-0":n},Rr=Hr;var Pr=O,Nr=re,Vr=Tr,Zr=function(e){return null==e?"":Rr(e)};var Xr=q;var Ur=function(e,r){return Pr(e)?e:Nr(e,r)?[e]:Vr(Zr(e))},Jr=function(e){if("string"==typeof e||Xr(e))return e;var r=e+"";return"0"==r&&1/e==-1/0?"-0":r};var qr=function(e,r){for(var n=0,t=(r=Ur(r,e)).length;null!=e&&n<t;)e=e[Jr(r[n++])];return n&&n==t?e:void 0};var Gr=z((function(e,r,n){var t=null==e?void 0:qr(e,r);return void 0===t?n:t}));const Kr=(e,r,n)=>Gr(n,r)||Gr(e,r),Qr=(e,r)=>{const n=r||e.defaultValue;return Gr(e.collections,n)},en={collections:{default:{"width-005":.5,"width-010":1,"width-020":2,"width-040":4,solid:"solid"}},defaultValue:"default"},rn=e=>r=>{var n;const t=r.theme,i=Qr(en,null==t?void 0:t.borderScheme);return(null===(n=null==t?void 0:t.overrides)||void 0===n?void 0:n.border)?`${Kr(i,e,t.overrides.border)}px`:`${i[e]}px`},nn={"width-005":rn("width-005"),"width-010":rn("width-010"),"width-020":rn("width-020"),"width-040":rn("width-040"),solid:(tn="solid",e=>{var r;const n=e.theme,t=Qr(en,null==n?void 0:n.borderScheme),i=(null===(r=null==n?void 0:n.overrides)||void 0===r?void 0:r.border)?Kr(t,tn,n.overrides.border):t[tn];return"function"==typeof i?i(e):i})};var tn;const on={"brand-10":"#2C0C0B","brand-20":"#4C1513","brand-30":"#6C1D1B","brand-40":"#922825","brand-50":"#BF3431","brand-60":"#F15D5A","brand-70":"#F69491","brand-80":"#FABAB7","brand-90":"#FCD7D2","brand-95":"#FFEBE7","brand-100":"#FFF6F4","primary-10":"#1A122C","primary-20":"#2F1F4D","primary-30":"#422D6E","primary-40":"#5B3D97","primary-50":"#7654BC","primary-60":"#9A82CD","primary-70":"#B7A7D8","primary-80":"#CFC5E5","primary-90":"#E3DDF0","primary-95":"#F0EDF7","primary-100":"#F9F8FC","secondary-10":"#0E1723","secondary-20":"#18293D","secondary-30":"#233A57","secondary-40":"#305078","secondary-50":"#4B6A8F","secondary-60":"#7B91A9","secondary-70":"#A1B1C3","secondary-80":"#C1CBD7","secondary-90":"#DBE1E8","secondary-95":"#EBEFF2","secondary-100":"#F7F8FA","neutral-10":"#161616","neutral-20":"#282828","neutral-30":"#393939","neutral-40":"#4E4E4E","neutral-50":"#686868","neutral-60":"#8E8E8E","neutral-70":"#AFAFB0","neutral-80":"#C7CACA","neutral-90":"#DDE1E2","neutral-95":"#EDEFEF","neutral-100":"#F9F9F9","success-10":"#081A0F","success-20":"#0E2D1B","success-30":"#154126","success-40":"#1C5A34","success-50":"#257645","success-60":"#44A068","success-70":"#64C189","success-80":"#80DCA5","success-90":"#B4ECCB","success-95":"#D5F6E2","success-100":"#EFFCF4","warning-10":"#221302","warning-20":"#3B2204","warning-30":"#543106","warning-40":"#744408","warning-50":"#98590C","warning-60":"#D07A13","warning-70":"#E4A244","warning-80":"#F5C26C","warning-90":"#FADBA6","warning-95":"#FCECD4","warning-100":"#FDF7F0","error-10":"#330505","error-20":"#550808","error-30":"#750C0C","error-40":"#9E130F","error-50":"#CB2213","error-60":"#DE6C6C","error-70":"#E89B9B","error-80":"#EFBEBE","error-90":"#F5D9D9","error-95":"#F9ECEC","error-100":"#FCF7F7","info-10":"#021824","info-20":"#032B3F","info-30":"#053D59","info-40":"#06547B","info-50":"#176E9B","info-60":"#5296BE","info-70":"#82B5DA","info-80":"#ACCFE7","info-90":"#CCE3F1","info-95":"#E3F1F8","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000","primary-inverse":"#FEAB10"},an={"brand-10":"#1F1221","brand-20":"#371F3B","brand-30":"#4E2C53","brand-40":"#6B3E73","brand-50":"#8D5197","brand-60":"#FF3399","brand-70":"#FF88C4","brand-80":"#FFB3D9","brand-90":"#FFD4E9","brand-95":"#FFE8F3","brand-100":"#FFF8FC","primary-10":"#1F1221","primary-20":"#371F3B","primary-30":"#4E2C53","primary-40":"#6B3E73","primary-50":"#8D5197","primary-60":"#B07DB7","primary-70":"#C7A3CC","primary-80":"#D9C2DD","primary-90":"#E9DBEB","primary-95":"#F3ECF4","primary-100":"#FAF7FA","secondary-10":"#2D091B","secondary-20":"#4D0F2E","secondary-30":"#6B1540","secondary-40":"#931D58","secondary-50":"#C02673","secondary-60":"#FF409F","secondary-70":"#FF88C4","secondary-80":"#FFB3D9","secondary-90":"#FFD4E9","secondary-95":"#FFE8F3","secondary-100":"#FFF8FC","neutral-10":"#161616","neutral-20":"#282828","neutral-30":"#393939","neutral-40":"#4E4E4E","neutral-50":"#686868","neutral-60":"#8E8E8E","neutral-70":"#AFAFB0","neutral-80":"#C7CACA","neutral-90":"#DDE1E2","neutral-95":"#EDEFEF","neutral-100":"#F9F9F9","success-10":"#081A0F","success-20":"#0E2D1B","success-30":"#154126","success-40":"#1C5A34","success-50":"#257645","success-60":"#44A068","success-70":"#64C189","success-80":"#80DCA5","success-90":"#B4ECCB","success-95":"#D5F6E2","success-100":"#EFFCF4","warning-10":"#221302","warning-20":"#3B2204","warning-30":"#543106","warning-40":"#744408","warning-50":"#98590C","warning-60":"#D07A13","warning-70":"#E4A244","warning-80":"#F5C26C","warning-90":"#FADBA6","warning-95":"#FCECD4","warning-100":"#FDF7F0","error-10":"#330505","error-20":"#550808","error-30":"#750C0C","error-40":"#9E130F","error-50":"#CB2213","error-60":"#DE6C6C","error-70":"#E89B9B","error-80":"#EFBEBE","error-90":"#F5D9D9","error-95":"#F9ECEC","error-100":"#FCF7F7","info-10":"#021824","info-20":"#032B3F","info-30":"#053D59","info-40":"#06547B","info-50":"#176E9B","info-60":"#5296BE","info-70":"#82B5DA","info-80":"#ACCFE7","info-90":"#CCE3F1","info-95":"#E3F1F8","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000","primary-inverse":"#FEAB10"},sn={"brand-10":"#2C0C0B","brand-20":"#4C1513","brand-30":"#6C1D1B","brand-40":"#922825","brand-50":"#BF3431","brand-60":"#F15D5A","brand-70":"#F69491","brand-80":"#FABAB7","brand-90":"#FCD7D2","brand-95":"#FFEBE7","brand-100":"#FFF6F4","primary-10":"#001731","primary-20":"#002752","primary-30":"#003874","primary-40":"#004D9F","primary-50":"#1768BE","primary-60":"#3C91EC","primary-70":"#6CB4FF","primary-80":"#A5CDFF","primary-90":"#CFE1FE","primary-95":"#E8F0FE","primary-100":"#F7F9FF","secondary-10":"#131529","secondary-20":"#222547","secondary-30":"#2F3565","secondary-40":"#42498B","secondary-50":"#5B62A7","secondary-60":"#858CBD","secondary-70":"#A8ADCF","secondary-80":"#C6C9E0","secondary-90":"#DDDFEC","secondary-95":"#EDEEF5","secondary-100":"#F8F8FB","neutral-10":"#161616","neutral-20":"#282828","neutral-30":"#393939","neutral-40":"#4E4E4E","neutral-50":"#686868","neutral-60":"#8E8E8E","neutral-70":"#AFAFB0","neutral-80":"#C7CACA","neutral-90":"#DDE1E2","neutral-95":"#EDEFEF","neutral-100":"#F9F9F9","success-10":"#081A0F","success-20":"#0E2D1B","success-30":"#154126","success-40":"#1C5A34","success-50":"#257645","success-60":"#44A068","success-70":"#64C189","success-80":"#80DCA5","success-90":"#B4ECCB","success-95":"#D5F6E2","success-100":"#EFFCF4","warning-10":"#221302","warning-20":"#3B2204","warning-30":"#543106","warning-40":"#744408","warning-50":"#98590C","warning-60":"#D07A13","warning-70":"#E4A244","warning-80":"#F5C26C","warning-90":"#FADBA6","warning-95":"#FCECD4","warning-100":"#FDF7F0","error-10":"#330505","error-20":"#550808","error-30":"#750C0C","error-40":"#9E130F","error-50":"#CB2213","error-60":"#DE6C6C","error-70":"#E89B9B","error-80":"#EFBEBE","error-90":"#F5D9D9","error-95":"#F9ECEC","error-100":"#FCF7F7","info-10":"#021824","info-20":"#032B3F","info-30":"#053D59","info-40":"#06547B","info-50":"#176E9B","info-60":"#5296BE","info-70":"#82B5DA","info-80":"#ACCFE7","info-90":"#CCE3F1","info-95":"#E3F1F8","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000","primary-inverse":"#FEAB10"},ln={"brand-10":"#2C0C0B","brand-20":"#4C1513","brand-30":"#6C1D1B","brand-40":"#922825","brand-50":"#BF3431","brand-60":"#F15D5A","brand-70":"#F69491","brand-80":"#FABAB7","brand-90":"#FCD7D2","brand-95":"#FFEBE7","brand-100":"#FFF6F4","primary-10":"#0011924","primary-20":"#032B40","primary-30":"#043D5A","primary-40":"#05547B","primary-50":"#096EA1","primary-60":"#2098D3","primary-70":"#5CB9E8","primary-80":"#8BD3F6","primary-90":"#BEE6FA","primary-95":"#E2F2FA","primary-100":"#F4FAFC","secondary-10":"#131529","secondary-20":"#222547","secondary-30":"#2F3565","secondary-40":"#42498B","secondary-50":"#5B62A7","secondary-60":"#858CBD","secondary-70":"#A8ADCF","secondary-80":"#C6C9E0","secondary-90":"#DDDFEC","secondary-95":"#EDEEF5","secondary-100":"#F8F8FB","neutral-10":"#161616","neutral-20":"#282828","neutral-30":"#393939","neutral-40":"#4E4E4E","neutral-50":"#686868","neutral-60":"#8E8E8E","neutral-70":"#AFAFB0","neutral-80":"#C7CACA","neutral-90":"#DDE1E2","neutral-95":"#EDEFEF","neutral-100":"#F9F9F9","success-10":"#081A0F","success-20":"#0E2D1B","success-30":"#154126","success-40":"#1C5A34","success-50":"#257645","success-60":"#44A068","success-70":"#64C189","success-80":"#80DCA5","success-90":"#B4ECCB","success-95":"#D5F6E2","success-100":"#EFFCF4","warning-10":"#221302","warning-20":"#3B2204","warning-30":"#543106","warning-40":"#744408","warning-50":"#98590C","warning-60":"#D07A13","warning-70":"#E4A244","warning-80":"#F5C26C","warning-90":"#FADBA6","warning-95":"#FCECD4","warning-100":"#FDF7F0","error-10":"#330505","error-20":"#550808","error-30":"#750C0C","error-40":"#9E130F","error-50":"#CB2213","error-60":"#DE6C6C","error-70":"#E89B9B","error-80":"#EFBEBE","error-90":"#F5D9D9","error-95":"#F9ECEC","error-100":"#FCF7F7","info-10":"#021824","info-20":"#032B3F","info-30":"#053D59","info-40":"#06547B","info-50":"#176E9B","info-60":"#5296BE","info-70":"#82B5DA","info-80":"#ACCFE7","info-90":"#CCE3F1","info-95":"#E3F1F8","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000","primary-inverse":"#FEAB10"},dn={"brand-10":"#001A19","brand-20":"#002D2B","brand-30":"#00413D","brand-40":"#005954","brand-50":"#00756F","brand-60":"#03A098","brand-70":"#55BFBA","brand-80":"#92D6D2","brand-90":"#BFE7E5","brand-95":"#DDF2F1","brand-100":"#F4FBFA","primary-10":"#09191D","primary-20":"#102B34","primary-30":"#173D49","primary-40":"#205666","primary-50":"#2A7086","primary-60":"#5D97A9","primary-70":"#8CB6C2","primary-80":"#B2CED6","primary-90":"#D1E2E7","primary-95":"#E8F0F3","primary-100":"#F7FAFB","secondary-10":"#001731","secondary-20":"#002752","secondary-30":"#003874","secondary-40":"#004D9F","secondary-50":"#5B62A7","secondary-60":"#858CBD","secondary-70":"#A8ADCF","secondary-80":"#C6C9E0","secondary-90":"#DDDFEC","secondary-95":"#EDEEF5","secondary-100":"#F8F8FB","neutral-10":"#161616","neutral-20":"#282828","neutral-30":"#393939","neutral-40":"#4E4E4E","neutral-50":"#686868","neutral-60":"#8E8E8E","neutral-70":"#AFAFB0","neutral-80":"#C7CACA","neutral-90":"#DDE1E2","neutral-95":"#EDEFEF","neutral-100":"#F9F9F9","success-10":"#081A0F","success-20":"#0E2D1B","success-30":"#154126","success-40":"#1C5A34","success-50":"#257645","success-60":"#44A068","success-70":"#64C189","success-80":"#80DCA5","success-90":"#B4ECCB","success-95":"#D5F6E2","success-100":"#EFFCF4","warning-10":"#221302","warning-20":"#3B2204","warning-30":"#543106","warning-40":"#744408","warning-50":"#98590C","warning-60":"#D07A13","warning-70":"#E4A244","warning-80":"#F5C26C","warning-90":"#FADBA6","warning-95":"#FCECD4","warning-100":"#FDF7F0","error-10":"#330505","error-20":"#550808","error-30":"#750C0C","error-40":"#9E130F","error-50":"#CB2213","error-60":"#DE6C6C","error-70":"#E89B9B","error-80":"#EFBEBE","error-90":"#F5D9D9","error-95":"#F9ECEC","error-100":"#FCF7F7","info-10":"#021824","info-20":"#032B3F","info-30":"#053D59","info-40":"#06547B","info-50":"#176E9B","info-60":"#5296BE","info-70":"#82B5DA","info-80":"#ACCFE7","info-90":"#CCE3F1","info-95":"#E3F1F8","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000","primary-inverse":"#FEAB10"},cn={"brand-10":"#881317","brand-20":"#B5191E","brand-30":"#B5040A","brand-40":"#D0333F","brand-50":"#DC666F","brand-60":"#E28087","brand-70":"#E7999F","brand-80":"#EDB3B7","brand-90":"#F3CCCF","brand-95":"#F9E6E7","brand-100":"#FCF2F3","primary-10":"#000000","primary-20":"#191919","primary-30":"#333333","primary-40":"#4D4D4D","primary-50":"#666666","primary-60":"#808080","primary-70":"#999999","primary-80":"#B3B3B3","primary-90":"#E6E6E6","primary-95":"#F7F7F7","primary-100":"#FFFFFF","secondary-10":"#19151D","secondary-20":"#2B2533","secondary-30":"#3E3649","secondary-40":"#564A64","secondary-50":"#6F637D","secondary-60":"#948B9F","secondary-70":"#B3ACBB","secondary-80":"#CCC8D2","secondary-90":"#E1DEE4","secondary-95":"#EFEEF1","secondary-100":"#F9F8F9","neutral-10":"#000000","neutral-20":"#191919","neutral-30":"#333333","neutral-40":"#4D4D4D","neutral-50":"#666666","neutral-60":"#808080","neutral-70":"#999999","neutral-80":"#B3B3B3","neutral-90":"#E6E6E6","neutral-95":"#F7F7F7","neutral-100":"#FFFFFF","success-10":"#081A0F","success-20":"#0E2D1B","success-30":"#154126","success-40":"#1C5A34","success-50":"#257645","success-60":"#44A068","success-70":"#64C189","success-80":"#80DCA5","success-90":"#B4ECCB","success-95":"#D5F6E2","success-100":"#EFFCF4","warning-10":"#221302","warning-20":"#3B2204","warning-30":"#543106","warning-40":"#744408","warning-50":"#98590C","warning-60":"#D07A13","warning-70":"#E4A244","warning-80":"#F5C26C","warning-90":"#FADBA6","warning-95":"#FCECD4","warning-100":"#FDF7F0","error-10":"#330505","error-20":"#550808","error-30":"#750C0C","error-40":"#9E130F","error-50":"#CB2213","error-60":"#DE6C6C","error-70":"#E89B9B","error-80":"#EFBEBE","error-90":"#F5D9D9","error-95":"#F9ECEC","error-100":"#FCF7F7","info-10":"#021824","info-20":"#032B3F","info-30":"#053D59","info-40":"#06547B","info-50":"#176E9B","info-60":"#5296BE","info-70":"#82B5DA","info-80":"#ACCFE7","info-90":"#CCE3F1","info-95":"#E3F1F8","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000","primary-inverse":"#FEAB10"},un={"brand-10":"#0E123A","brand-20":"#191E65","brand-30":"#232B90","brand-40":"#303BC5","brand-50":"#494CFF","brand-60":"#AD6EFF","brand-70":"#AEA4FF","brand-80":"#C5C4FF","brand-90":"#DDDCFF","brand-95":"#EDECFF","brand-100":"#F8F8FF","primary-10":"#10152B","primary-20":"#1C254B","primary-30":"#28356C","primary-40":"#38489A","primary-50":"#4D5AD7","primary-60":"#7487F2","primary-70":"#9AAAFC","primary-80":"#BDC7FD","primary-90":"#DADFFB","primary-95":"#ECEEFE","primary-100":"#F7F8FF","secondary-10":"#19151D","secondary-20":"#2B2533","secondary-30":"#3E3649","secondary-40":"#564A64","secondary-50":"#6F637D","secondary-60":"#948B9F","secondary-70":"#B3ACBB","secondary-80":"#CCC8D2","secondary-90":"#E1DEE4","secondary-95":"#EFEEF1","secondary-100":"#F9F8F9","neutral-10":"#161616","neutral-20":"#282828","neutral-30":"#393939","neutral-40":"#4E4E4E","neutral-50":"#686868","neutral-60":"#8E8E8E","neutral-70":"#AFAFB0","neutral-80":"#C7CACA","neutral-90":"#DDE1E2","neutral-95":"#EDEFEF","neutral-100":"#F9F9F9","success-10":"#081A0F","success-20":"#0E2D1B","success-30":"#154126","success-40":"#1C5A34","success-50":"#257645","success-60":"#44A068","success-70":"#64C189","success-80":"#80DCA5","success-90":"#B4ECCB","success-95":"#D5F6E2","success-100":"#EFFCF4","warning-10":"#221302","warning-20":"#3B2204","warning-30":"#543106","warning-40":"#744408","warning-50":"#98590C","warning-60":"#D07A13","warning-70":"#E4A244","warning-80":"#F5C26C","warning-90":"#FADBA6","warning-95":"#FCECD4","warning-100":"#FDF7F0","error-10":"#330505","error-20":"#550808","error-30":"#750C0C","error-40":"#9E130F","error-50":"#CB2213","error-60":"#DE6C6C","error-70":"#E89B9B","error-80":"#EFBEBE","error-90":"#F5D9D9","error-95":"#F9ECEC","error-100":"#FCF7F7","info-10":"#021824","info-20":"#032B3F","info-30":"#053D59","info-40":"#06547B","info-50":"#176E9B","info-60":"#5296BE","info-70":"#82B5DA","info-80":"#ACCFE7","info-90":"#CCE3F1","info-95":"#E3F1F8","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000","primary-inverse":"#FEAB10"},gn={"brand-10":"#170F39","brand-20":"#281C62","brand-30":"#38268B","brand-40":"#4D34BF","brand-50":"#5735DF","brand-60":"#9986F9","brand-70":"#B2A5F8","brand-80":"#CDC2FA","brand-90":"#E2DCFC","brand-95":"#EFEDFE","brand-100":"#FAF8FD","primary-10":"#170F39","primary-20":"#281C62","primary-30":"#38268B","primary-40":"#4D34BF","primary-50":"#5735DF","primary-60":"#9986F9","primary-70":"#B2A5F8","primary-80":"#CDC2FA","primary-90":"#E2DCFC","primary-95":"#EFEDFE","primary-100":"#FAF8FD","secondary-10":"#251204","secondary-20":"#401F08","secondary-30":"#5B2C0B","secondary-40":"#7E3D0F","secondary-50":"#B04900","secondary-60":"#E26E1C","secondary-70":"#FF9445","secondary-80":"#FFBB8E","secondary-90":"#FFD9BF","secondary-95":"#FFECDF","secondary-100":"#FFF8F3","neutral-10":"#161616","neutral-20":"#282828","neutral-30":"#393939","neutral-40":"#4E4E4E","neutral-50":"#686868","neutral-60":"#8E8E8E","neutral-70":"#AFAFB0","neutral-80":"#C7CACA","neutral-90":"#DDE1E2","neutral-95":"#EDEFEF","neutral-100":"#F9F9F9","success-10":"#031B15","success-20":"#082D24","success-30":"#094134","success-40":"#0D5947","success-50":"#10755E","success-60":"#16A181","success-70":"#1EC59D","success-80":"#6FDDC2","success-90":"#AFECDE","success-95":"#D5F5ED","success-100":"#F1FCF9","warning-10":"#1F1500","warning-20":"#362500","warning-30":"#4D3501","warning-40":"#6A4801","warning-50":"#8B6001","warning-60":"#BF8301","warning-70":"#EAA102","warning-80":"#FFBF34","warning-90":"#FFDC8F","warning-95":"#FFEDC7","warning-100":"#FFF8EA","error-10":"#270F10","error-20":"#441B1B","error-30":"#612627","error-40":"#853535","error-50":"#AF4546","error-60":"#EC6162","error-70":"#F29696","error-80":"#F7BBBC","error-90":"#FAD8D8","error-95":"#FCEAEA","error-100":"#FEF7F7","info-10":"#0F1627","info-20":"#1B2745","info-30":"#273763","info-40":"#354D88","info-50":"#4665B3","info-60":"#618AF6","info-70":"#8DADFF","info-80":"#B4C9FF","info-90":"#D3DFFF","info-95":"#E9EFFF","info-100":"#F5F8FF",white:"#FFFFFF",black:"#000000","primary-inverse":"#FEAB10"},mn={"brand-10":"#0E113C","brand-20":"#191E67","brand-30":"#232A92","brand-40":"#233FC2","brand-50":"#135CEA","brand-60":"#378FFB","brand-70":"#71B3FD","brand-80":"#9DCFFE","brand-90":"#C1E5FF","brand-95":"#DCF1FF","brand-100":"#F3FAFF","primary-10":"#0E113C","primary-20":"#191E67","primary-30":"#232A92","primary-40":"#233FC2","primary-50":"#135CEA","primary-60":"#378FFB","primary-70":"#71B3FD","primary-80":"#9DCFFE","primary-90":"#C1E5FF","primary-95":"#DCF1FF","primary-100":"#F3FAFF","secondary-10":"#34001F","secondary-20":"#540033","secondary-30":"#730045","secondary-40":"#9D0054","secondary-50":"#C61C64","secondary-60":"#DE6792","secondary-70":"#EB96B6","secondary-80":"#F5BAD2","secondary-90":"#FCD5E3","secondary-95":"#FDEBF1","secondary-100":"#FDF6F9","neutral-10":"#161616","neutral-20":"#282828","neutral-30":"#393939","neutral-40":"#4E4E4E","neutral-50":"#686868","neutral-60":"#8E8E8E","neutral-70":"#AFAFB0","neutral-80":"#C7CACA","neutral-90":"#DDE1E2","neutral-95":"#EDEFEF","neutral-100":"#F9F9F9","success-10":"#081A0F","success-20":"#0E2D1B","success-30":"#154126","success-40":"#1C5A34","success-50":"#257645","success-60":"#44A068","success-70":"#64C189","success-80":"#80DCA5","success-90":"#B4ECCB","success-95":"#D5F6E2","success-100":"#EFFCF4","warning-10":"#221302","warning-20":"#3B2204","warning-30":"#543106","warning-40":"#744408","warning-50":"#98590C","warning-60":"#D07A13","warning-70":"#E4A244","warning-80":"#F5C26C","warning-90":"#FADBA6","warning-95":"#FCECD4","warning-100":"#FDF7F0","error-10":"#330505","error-20":"#550808","error-30":"#750C0C","error-40":"#9E130F","error-50":"#CB2213","error-60":"#DE6C6C","error-70":"#E89B9B","error-80":"#EFBEBE","error-90":"#F5D9D9","error-95":"#F9ECEC","error-100":"#FCF7F7","info-10":"#021824","info-20":"#032B3F","info-30":"#053D59","info-40":"#06547B","info-50":"#176E9B","info-60":"#5296BE","info-70":"#82B5DA","info-80":"#ACCFE7","info-90":"#CCE3F1","info-95":"#E3F1F8","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000","primary-inverse":"#FEAB10"},bn={"brand-10":"#370009","brand-20":"#4E000D","brand-30":"#640011","brand-40":"#850017","brand-50":"#9B001A","brand-60":"#EF2D4E","brand-70":"#F692A3","brand-80":"#FAB9C4","brand-90":"#FCD7DD","brand-95":"#FDEAED","brand-100":"#FEF8F9","primary-10":"#1F102A","primary-20":"#2F193F","primary-30":"#3E2053","primary-40":"#562D71","primary-50":"#663587","primary-60":"#9370AA","primary-70":"#BCA7CB","primary-80":"#D3C5DC","primary-90":"#E5DDEB","primary-95":"#F2EEF5","primary-100":"#FAF9FB","secondary-10":"#201316","secondary-20":"#311D22","secondary-30":"#3F272C","secondary-40":"#58363D","secondary-50":"#684049","secondary-60":"#AF6A7A","secondary-70":"#F393A8","secondary-80":"#FFB6C6","secondary-90":"#FFD6DF","secondary-95":"#FFE9EE","secondary-100":"#FFF7F9","neutral-10":"#161616","neutral-20":"#222222","neutral-30":"#2D2D2D","neutral-40":"#3F3F3F","neutral-50":"#4B4B4B","neutral-60":"#7E7E7E","neutral-70":"#AFAFB0","neutral-80":"#C7CACA","neutral-90":"#DDE1E2","neutral-95":"#EDEFEF","neutral-100":"#F9F9F9","success-10":"#081917","success-20":"#0D2724","success-30":"#11332E","success-40":"#174740","success-50":"#1B554C","success-60":"#2D8C7E","success-70":"#46C2AF","success-80":"#89D8CC","success-90":"#BCE9E2","success-95":"#DAF3EF","success-100":"#F0FAF9","warning-10":"#241200","warning-20":"#371C00","warning-30":"#482500","warning-40":"#633300","warning-50":"#763C00","warning-60":"#C36400","warning-70":"#FF9524","warning-80":"#FFBD77","warning-90":"#FFD9B2","warning-95":"#FFEBD6","warning-100":"#FFF7F0","error-10":"#330505","error-20":"#4B0707","error-30":"#600909","error-40":"#810D0D","error-50":"#98110F","error-60":"#D7504C","error-70":"#E89B9B","error-80":"#EFBEBE","error-90":"#F5D9D9","error-95":"#F9ECEC","error-100":"#FCF7F7","info-10":"#021824","info-20":"#032537","info-30":"#043148","info-40":"#054462","info-50":"#065175","info-60":"#3985AF","info-70":"#82B5DA","info-80":"#ACCFE7","info-90":"#CCE3F1","info-95":"#E3F1F8","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000","primary-inverse":"#FEAB10"},hn={"brand-10":"#00143A","brand-20":"#00205B","brand-30":"#153368","brand-40":"#18417C","brand-50":"#00558C","brand-60":"#009CDE","brand-70":"#5AB9E7","brand-80":"#9ED0ED","brand-90":"#CAE3F4","brand-95":"#E2F0F9","brand-100":"#F4FAFD","primary-10":"#00143A","primary-20":"#00205B","primary-30":"#153368","primary-40":"#18417C","primary-50":"#00558C","primary-60":"#009CDE","primary-70":"#5AB9E7","primary-80":"#9ED0ED","primary-90":"#CAE3F4","primary-95":"#E2F0F9","primary-100":"#F4FAFD","secondary-10":"#10171F","secondary-20":"#1E252C","secondary-30":"#2F353B","secondary-40":"#3D4247","secondary-50":"#4E5255","secondary-60":"#8F9396","secondary-70":"#A9B0B3","secondary-80":"#C7CBCC","secondary-90":"#DDDFE0","secondary-95":"#ECEDEE","secondary-100":"#F8F8F9","neutral-10":"#10171F","neutral-20":"#1E252C","neutral-30":"#2F353B","neutral-40":"#3D4247","neutral-50":"#4E5255","neutral-60":"#8F9396","neutral-70":"#A9B0B3","neutral-80":"#C7CBCC","neutral-90":"#DDDFE0","neutral-95":"#ECEDEE","neutral-100":"#F8F8F9","success-10":"#001B0E","success-20":"#012A16","success-30":"#013D20","success-40":"#014D28","success-50":"#005F30","success-60":"#48A377","success-70":"#77BD9B","success-80":"#A3D5BD","success-90":"#C4E7D6","success-95":"#DBF4E7","success-100":"#ECFDF5","warning-10":"#1F1500","warning-20":"#312100","warning-30":"#473000","warning-40":"#593C00","warning-50":"#6E4B00","warning-60":"#B78C31","warning-70":"#DDA633","warning-80":"#E0C792","warning-90":"#E9DEC5","warning-95":"#F4EEE0","warning-100":"#FAF8F3","error-10":"#360109","error-20":"#50010E","error-30":"#6F0213","error-40":"#88051A","error-50":"#A60A24","error-60":"#E07083","error-70":"#EA98A6","error-80":"#F3BBC4","error-90":"#FAD5DC","error-95":"#FEE9ED","error-100":"#FFF6F8","info-10":"#00143A","info-20":"#00205B","info-30":"#153368","info-40":"#18417C","info-50":"#00558C","info-60":"#009CDE","info-70":"#5AB9E7","info-80":"#9ED0ED","info-90":"#CAE3F4","info-95":"#E2F0F9","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000","primary-inverse":"#FFCB6A"},yn={collections:{lifesg:sn,bookingsg:on,rbs:un,mylegacy:ln,ccube:an,oneservice:dn,pa:cn,a11yplayground:gn,supportgowhere:mn,imda:bn,spf:hn},defaultValue:"lifesg"},pn={collections:{lifesg:sn,bookingsg:on,rbs:un,mylegacy:ln,ccube:an,oneservice:dn,pa:cn,a11yplayground:gn,supportgowhere:mn,imda:bn,spf:hn},defaultValue:"lifesg"},fn=e=>r=>{var n;const t=r.theme,i="dark"===(null==t?void 0:t.colourMode),o=Qr(i?pn:yn,null==t?void 0:t.colourScheme),a=i?"primitiveColourDark":"primitiveColour",s=null===(n=null==t?void 0:t.overrides)||void 0===n?void 0:n[a];return s?Kr(o,e,s):o[e]},xn={"brand-10":fn("brand-10"),"brand-20":fn("brand-20"),"brand-30":fn("brand-30"),"brand-40":fn("brand-40"),"brand-50":fn("brand-50"),"brand-60":fn("brand-60"),"brand-70":fn("brand-70"),"brand-80":fn("brand-80"),"brand-90":fn("brand-90"),"brand-95":fn("brand-95"),"brand-100":fn("brand-100"),"primary-10":fn("primary-10"),"primary-20":fn("primary-20"),"primary-30":fn("primary-30"),"primary-40":fn("primary-40"),"primary-50":fn("primary-50"),"primary-60":fn("primary-60"),"primary-70":fn("primary-70"),"primary-80":fn("primary-80"),"primary-90":fn("primary-90"),"primary-95":fn("primary-95"),"primary-100":fn("primary-100"),"secondary-10":fn("secondary-10"),"secondary-20":fn("secondary-20"),"secondary-30":fn("secondary-30"),"secondary-40":fn("secondary-40"),"secondary-50":fn("secondary-50"),"secondary-60":fn("secondary-60"),"secondary-70":fn("secondary-70"),"secondary-80":fn("secondary-80"),"secondary-90":fn("secondary-90"),"secondary-95":fn("secondary-95"),"secondary-100":fn("secondary-100"),"neutral-10":fn("neutral-10"),"neutral-20":fn("neutral-20"),"neutral-30":fn("neutral-30"),"neutral-40":fn("neutral-40"),"neutral-50":fn("neutral-50"),"neutral-60":fn("neutral-60"),"neutral-70":fn("neutral-70"),"neutral-80":fn("neutral-80"),"neutral-90":fn("neutral-90"),"neutral-95":fn("neutral-95"),"neutral-100":fn("neutral-100"),"success-10":fn("success-10"),"success-20":fn("success-20"),"success-30":fn("success-30"),"success-40":fn("success-40"),"success-50":fn("success-50"),"success-60":fn("success-60"),"success-70":fn("success-70"),"success-80":fn("success-80"),"success-90":fn("success-90"),"success-95":fn("success-95"),"success-100":fn("success-100"),"warning-10":fn("warning-10"),"warning-20":fn("warning-20"),"warning-30":fn("warning-30"),"warning-40":fn("warning-40"),"warning-50":fn("warning-50"),"warning-60":fn("warning-60"),"warning-70":fn("warning-70"),"warning-80":fn("warning-80"),"warning-90":fn("warning-90"),"warning-95":fn("warning-95"),"warning-100":fn("warning-100"),"error-10":fn("error-10"),"error-20":fn("error-20"),"error-30":fn("error-30"),"error-40":fn("error-40"),"error-50":fn("error-50"),"error-60":fn("error-60"),"error-70":fn("error-70"),"error-80":fn("error-80"),"error-90":fn("error-90"),"error-95":fn("error-95"),"error-100":fn("error-100"),"info-10":fn("info-10"),"info-20":fn("info-20"),"info-30":fn("info-30"),"info-40":fn("info-40"),"info-50":fn("info-50"),"info-60":fn("info-60"),"info-70":fn("info-70"),"info-80":fn("info-80"),"info-90":fn("info-90"),"info-95":fn("info-95"),"info-100":fn("info-100"),white:fn("white"),black:fn("black"),"primary-inverse":fn("primary-inverse")},vn={text:fn("neutral-20"),"text-subtle":fn("neutral-30"),"text-subtler":fn("neutral-50"),"text-subtlest":fn("neutral-60"),"text-primary":fn("primary-50"),"text-primary-strongest":fn("primary-20"),"text-hover":fn("primary-40"),"text-selected":fn("primary-50"),"text-selected-hover":fn("primary-40"),"text-disabled":fn("neutral-50"),"text-disabled-subtle":fn("neutral-60"),"text-disabled-subtlest":fn("neutral-80"),"text-selected-disabled":fn("neutral-20"),"text-success":fn("success-40"),"text-warning":fn("warning-40"),"text-error":fn("error-40"),"text-info":fn("info-40"),"text-inverse":fn("white"),icon:fn("neutral-50"),"icon-subtle":fn("neutral-60"),"icon-strongest":fn("neutral-20"),"icon-primary":fn("primary-50"),"icon-primary-subtle":fn("primary-60"),"icon-primary-subtlest":fn("primary-70"),"icon-hover":fn("primary-40"),"icon-selected":fn("primary-50"),"icon-selected-hover":fn("primary-40"),"icon-disabled":fn("neutral-50"),"icon-disabled-subtle":fn("neutral-60"),"icon-selected-disabled":fn("neutral-60"),"icon-success":fn("success-50"),"icon-warning":fn("warning-60"),"icon-error":fn("error-50"),"icon-error-strong":fn("error-40"),"icon-info":fn("info-50"),"icon-inverse":fn("white"),"icon-primary-inverse":fn("primary-inverse"),border:fn("neutral-90"),"border-strong":fn("neutral-70"),"border-stronger":fn("neutral-50"),"border-primary":fn("primary-50"),"border-primary-subtle":fn("primary-60"),"border-hover":fn("primary-90"),"border-hover-strong":fn("primary-60"),"border-selected":fn("primary-50"),"border-selected-subtle":fn("primary-70"),"border-selected-subtlest":fn("primary-90"),"border-selected-hover":fn("primary-40"),"border-focus":fn("primary-60"),"border-focus-strong":fn("primary-50"),"border-disabled":fn("neutral-90"),"border-selected-disabled":fn("neutral-70"),"border-success":fn("success-60"),"border-warning":fn("warning-60"),"border-error":fn("error-60"),"border-error-focus":fn("error-60"),"border-error-focus-strong":fn("error-40"),"border-error-strong":fn("error-40"),"border-info":fn("info-60"),bg:fn("white"),"bg-strong":fn("neutral-100"),"bg-stronger":fn("neutral-95"),"bg-strongest":fn("neutral-90"),"bg-hover":fn("primary-95"),"bg-hover-strong":fn("primary-90"),"bg-hover-subtle":fn("primary-100"),"bg-hover-neutral":fn("neutral-100"),"bg-hover-neutral-strong":fn("neutral-90"),"bg-selected":fn("primary-95"),"bg-selected-hover":fn("primary-90"),"bg-selected-strong":fn("primary-90"),"bg-selected-stronger":fn("primary-70"),"bg-selected-strongest":fn("primary-50"),"bg-selected-strongest-hover":fn("primary-40"),"bg-disabled":fn("neutral-95"),"bg-selected-disabled":fn("neutral-95"),"bg-selected-stronger-disabled":fn("neutral-70"),"bg-success":fn("success-100"),"bg-success-hover":fn("success-95"),"bg-success-strong":fn("success-50"),"bg-success-strong-hover":fn("success-40"),"bg-warning":fn("warning-100"),"bg-warning-hover":fn("warning-95"),"bg-warning-strong":fn("warning-50"),"bg-warning-strong-hover":fn("warning-40"),"bg-info":fn("info-100"),"bg-info-hover":fn("info-95"),"bg-info-strong":fn("info-50"),"bg-info-strong-hover":fn("info-40"),"bg-error":fn("error-100"),"bg-error-hover":fn("error-95"),"bg-error-strong":fn("error-50"),"bg-error-strong-hover":fn("error-40"),"bg-inverse":fn("neutral-20"),"bg-inverse-subtle":fn("neutral-30"),"bg-inverse-subtler":fn("neutral-50"),"bg-inverse-subtlest":fn("neutral-60"),"bg-inverse-hover":fn("neutral-40"),"bg-primary":fn("primary-50"),"bg-primary-subtle":fn("primary-60"),"bg-primary-subtler":fn("primary-95"),"bg-primary-subtlest":fn("primary-100"),"bg-available":"#6DD0A1","bg-primary-hover":fn("primary-40"),"bg-primary-subtlest-hover":fn("primary-90"),"bg-primary-subtlest-selected":fn("primary-90"),"overlay-strong":"rgba(40, 40, 40, 0.85)","overlay-subtle":"rgba(40, 40, 40, 0.20)",hyperlink:fn("primary-50"),"hyperlink-hover":fn("primary-40"),"hyperlink-visited":fn("primary-40"),"hyperlink-inverse":fn("primary-inverse"),"focus-ring":fn("primary-50"),"focus-ring-inverse":fn("white")},Fn={text:fn("neutral-100"),"text-subtle":fn("neutral-80"),"text-subtler":fn("neutral-60"),"text-subtlest":fn("neutral-50"),"text-primary":fn("primary-60"),"text-primary-strongest":fn("primary-90"),"text-hover":fn("primary-70"),"text-selected":fn("primary-60"),"text-selected-hover":fn("primary-70"),"text-disabled":fn("neutral-60"),"text-disabled-subtle":fn("neutral-50"),"text-disabled-subtlest":fn("neutral-30"),"text-selected-disabled":fn("neutral-90"),"text-success":fn("success-70"),"text-warning":fn("warning-70"),"text-error":fn("error-70"),"text-info":fn("info-70"),"text-inverse":fn("black"),icon:fn("neutral-60"),"icon-subtle":fn("neutral-50"),"icon-strongest":fn("neutral-90"),"icon-primary":fn("primary-60"),"icon-primary-subtle":fn("primary-50"),"icon-primary-subtlest":fn("primary-40"),"icon-hover":fn("primary-70"),"icon-selected":fn("primary-60"),"icon-selected-hover":fn("primary-70"),"icon-disabled":fn("neutral-60"),"icon-disabled-subtle":fn("neutral-50"),"icon-selected-disabled":fn("neutral-50"),"icon-success":fn("success-60"),"icon-warning":fn("warning-50"),"icon-error":fn("error-60"),"icon-error-strong":fn("error-70"),"icon-info":fn("info-60"),"icon-inverse":fn("black"),"icon-primary-inverse":fn("primary-inverse"),border:fn("neutral-20"),"border-strong":fn("neutral-40"),"border-stronger":fn("neutral-60"),"border-primary":fn("primary-60"),"border-primary-subtle":fn("primary-50"),"border-hover":fn("primary-20"),"border-hover-strong":fn("primary-50"),"border-selected":fn("primary-60"),"border-selected-subtle":fn("primary-40"),"border-selected-subtlest":fn("primary-20"),"border-selected-hover":fn("primary-70"),"border-focus":fn("primary-50"),"border-focus-strong":fn("primary-60"),"border-disabled":fn("neutral-20"),"border-selected-disabled":fn("neutral-40"),"border-success":fn("success-50"),"border-warning":fn("warning-50"),"border-error":fn("error-50"),"border-error-focus":fn("error-50"),"border-error-focus-strong":fn("error-70"),"border-error-strong":fn("error-70"),"border-info":fn("info-50"),bg:fn("black"),"bg-strong":fn("neutral-10"),"bg-stronger":fn("neutral-20"),"bg-strongest":fn("neutral-20"),"bg-hover":fn("primary-20"),"bg-hover-strong":fn("primary-20"),"bg-hover-subtle":fn("primary-10"),"bg-hover-neutral":fn("neutral-10"),"bg-hover-neutral-strong":fn("neutral-20"),"bg-selected":fn("primary-20"),"bg-selected-hover":fn("primary-20"),"bg-selected-strong":fn("primary-20"),"bg-selected-stronger":fn("primary-40"),"bg-selected-strongest":fn("primary-60"),"bg-selected-strongest-hover":fn("primary-70"),"bg-disabled":fn("neutral-20"),"bg-selected-disabled":fn("neutral-20"),"bg-selected-stronger-disabled":fn("neutral-40"),"bg-success":fn("success-10"),"bg-success-hover":fn("success-20"),"bg-success-strong":fn("success-60"),"bg-success-strong-hover":fn("success-70"),"bg-warning":fn("warning-10"),"bg-warning-hover":fn("warning-20"),"bg-warning-strong":fn("warning-60"),"bg-warning-strong-hover":fn("warning-70"),"bg-info":fn("info-10"),"bg-info-hover":fn("info-20"),"bg-info-strong":fn("info-60"),"bg-info-strong-hover":fn("info-70"),"bg-error":fn("error-10"),"bg-error-hover":fn("error-20"),"bg-error-strong":fn("error-60"),"bg-error-strong-hover":fn("error-70"),"bg-inverse":fn("neutral-90"),"bg-inverse-subtle":fn("neutral-80"),"bg-inverse-subtler":fn("neutral-60"),"bg-inverse-subtlest":fn("neutral-50"),"bg-inverse-hover":fn("neutral-70"),"bg-primary":fn("primary-60"),"bg-primary-subtle":fn("primary-50"),"bg-primary-subtler":fn("primary-20"),"bg-primary-subtlest":fn("primary-10"),"bg-available":"#185339","bg-primary-hover":fn("primary-70"),"bg-primary-subtlest-hover":fn("primary-20"),"bg-primary-subtlest-selected":fn("primary-20"),"overlay-strong":"rgba(78, 78, 78, 0.80)","overlay-subtle":"rgba(78, 78, 78, 0.50)",hyperlink:fn("primary-60"),"hyperlink-hover":fn("primary-70"),"hyperlink-visited":fn("primary-70"),"hyperlink-inverse":fn("primary-inverse"),"focus-ring":fn("primary-60"),"focus-ring-inverse":fn("black")},wn={text:fn("neutral-30"),"text-subtle":fn("neutral-40"),"text-subtler":fn("neutral-50"),"text-subtlest":fn("neutral-70"),"text-primary":fn("neutral-10"),"text-primary-strongest":fn("neutral-10"),"text-hover":fn("neutral-70"),"text-selected":fn("neutral-20"),"text-selected-hover":fn("neutral-10"),"text-disabled":fn("neutral-50"),"text-disabled-subtle":fn("neutral-70"),"text-disabled-subtlest":fn("neutral-80"),"text-selected-disabled":fn("neutral-40"),"text-success":fn("success-40"),"text-warning":fn("warning-40"),"text-error":fn("brand-30"),"text-info":fn("neutral-40"),"text-inverse":fn("neutral-100"),icon:fn("neutral-40"),"icon-subtle":fn("neutral-50"),"icon-strongest":fn("neutral-10"),"icon-primary":fn("neutral-10"),"icon-primary-subtle":fn("neutral-30"),"icon-primary-subtlest":fn("neutral-60"),"icon-hover":fn("neutral-70"),"icon-selected":fn("brand-20"),"icon-selected-hover":fn("brand-10"),"icon-disabled":fn("neutral-50"),"icon-disabled-subtle":fn("neutral-70"),"icon-selected-disabled":fn("neutral-40"),"icon-success":fn("success-40"),"icon-warning":fn("warning-60"),"icon-error":fn("brand-30"),"icon-error-strong":fn("brand-10"),"icon-info":fn("neutral-40"),"icon-inverse":fn("neutral-100"),"icon-primary-inverse":"#F9B371",border:fn("neutral-90"),"border-strong":fn("neutral-30"),"border-stronger":fn("neutral-20"),"border-primary":fn("neutral-40"),"border-primary-subtle":fn("neutral-60"),"border-hover":fn("neutral-80"),"border-hover-strong":fn("neutral-10"),"border-selected":fn("brand-20"),"border-selected-subtle":fn("neutral-40"),"border-selected-subtlest":fn("neutral-70"),"border-selected-hover":fn("neutral-10"),"border-focus":fn("neutral-20"),"border-focus-strong":fn("neutral-10"),"border-disabled":fn("neutral-90"),"border-selected-disabled":fn("neutral-80"),"border-success":fn("success-40"),"border-warning":fn("warning-60"),"border-error":fn("brand-30"),"border-error-focus":fn("brand-20"),"border-error-focus-strong":fn("brand-10"),"border-error-strong":fn("brand-20"),"border-info":fn("neutral-40"),bg:fn("neutral-100"),"bg-strong":fn("neutral-95"),"bg-stronger":fn("neutral-90"),"bg-strongest":fn("neutral-80"),"bg-hover":fn("brand-90"),"bg-hover-strong":fn("brand-80"),"bg-hover-subtle":fn("neutral-90"),"bg-hover-neutral":fn("neutral-90"),"bg-hover-neutral-strong":fn("neutral-90"),"bg-selected":fn("brand-100"),"bg-selected-hover":fn("brand-30"),"bg-selected-strong":fn("brand-50"),"bg-selected-stronger":fn("brand-40"),"bg-selected-strongest":fn("brand-20"),"bg-selected-strongest-hover":fn("brand-10"),"bg-disabled":fn("neutral-90"),"bg-selected-disabled":fn("neutral-90"),"bg-selected-stronger-disabled":fn("neutral-80"),"bg-success":fn("success-100"),"bg-success-hover":fn("success-95"),"bg-success-strong":fn("success-50"),"bg-success-strong-hover":fn("success-40"),"bg-warning":fn("warning-100"),"bg-warning-hover":fn("warning-95"),"bg-warning-strong":fn("warning-50"),"bg-warning-strong-hover":fn("warning-40"),"bg-info":fn("neutral-95"),"bg-info-hover":fn("info-95"),"bg-info-strong":fn("info-50"),"bg-info-strong-hover":fn("info-40"),"bg-error":fn("brand-100"),"bg-error-hover":fn("error-95"),"bg-error-strong":fn("error-50"),"bg-error-strong-hover":fn("error-40"),"bg-inverse":fn("neutral-40"),"bg-inverse-subtle":fn("neutral-60"),"bg-inverse-subtler":fn("neutral-70"),"bg-inverse-subtlest":fn("neutral-80"),"bg-inverse-hover":fn("neutral-30"),"bg-primary":fn("brand-20"),"bg-primary-subtle":fn("brand-60"),"bg-primary-subtler":fn("brand-80"),"bg-primary-subtlest":fn("brand-100"),"bg-available":fn("success-60"),"bg-primary-hover":fn("brand-10"),"bg-primary-subtlest-hover":fn("brand-80"),"bg-primary-subtlest-selected":fn("brand-40"),"overlay-strong":"rgba(25, 25, 25, 0.95)","overlay-subtle":"rgba(25, 25, 25, 0.20)",hyperlink:fn("neutral-10"),"hyperlink-hover":fn("neutral-40"),"hyperlink-visited":fn("neutral-50"),"hyperlink-inverse":"#F8AE68","focus-ring":fn("primary-50"),"focus-ring-inverse":fn("white")},$n={text:fn("neutral-20"),"text-subtle":fn("neutral-30"),"text-subtler":fn("neutral-50"),"text-subtlest":fn("neutral-60"),"text-primary":fn("primary-50"),"text-primary-strongest":fn("primary-20"),"text-hover":fn("primary-40"),"text-selected":fn("primary-50"),"text-selected-hover":fn("primary-40"),"text-disabled":fn("neutral-50"),"text-disabled-subtle":fn("neutral-60"),"text-disabled-subtlest":fn("neutral-80"),"text-selected-disabled":fn("neutral-20"),"text-success":fn("success-40"),"text-warning":fn("warning-40"),"text-error":fn("error-40"),"text-info":fn("info-40"),"text-inverse":fn("white"),icon:fn("neutral-50"),"icon-subtle":fn("neutral-60"),"icon-strongest":fn("neutral-20"),"icon-primary":fn("primary-50"),"icon-primary-subtle":fn("primary-60"),"icon-primary-subtlest":fn("primary-70"),"icon-hover":fn("primary-40"),"icon-selected":fn("primary-50"),"icon-selected-hover":fn("primary-40"),"icon-disabled":fn("neutral-50"),"icon-disabled-subtle":fn("neutral-60"),"icon-selected-disabled":fn("neutral-60"),"icon-success":fn("success-50"),"icon-warning":fn("warning-60"),"icon-error":fn("error-50"),"icon-error-strong":fn("error-40"),"icon-info":fn("info-50"),"icon-inverse":fn("white"),"icon-primary-inverse":fn("primary-inverse"),border:fn("neutral-90"),"border-strong":fn("neutral-70"),"border-stronger":fn("neutral-50"),"border-primary":fn("primary-50"),"border-primary-subtle":fn("primary-60"),"border-hover":fn("primary-90"),"border-hover-strong":fn("primary-60"),"border-selected":fn("primary-50"),"border-selected-subtle":fn("primary-70"),"border-selected-subtlest":fn("primary-90"),"border-selected-hover":fn("primary-40"),"border-focus":fn("primary-60"),"border-focus-strong":fn("primary-50"),"border-disabled":fn("neutral-90"),"border-selected-disabled":fn("neutral-70"),"border-success":fn("success-60"),"border-warning":fn("warning-60"),"border-error":fn("error-60"),"border-error-focus":fn("error-60"),"border-error-focus-strong":fn("error-40"),"border-error-strong":fn("error-40"),"border-info":fn("info-60"),bg:fn("white"),"bg-strong":fn("neutral-100"),"bg-stronger":fn("neutral-95"),"bg-strongest":fn("neutral-90"),"bg-hover":fn("primary-95"),"bg-hover-strong":fn("primary-90"),"bg-hover-subtle":fn("primary-100"),"bg-hover-neutral":fn("neutral-100"),"bg-hover-neutral-strong":fn("neutral-90"),"bg-selected":fn("primary-95"),"bg-selected-hover":fn("primary-90"),"bg-selected-strong":fn("primary-90"),"bg-selected-stronger":fn("primary-70"),"bg-selected-strongest":fn("primary-50"),"bg-selected-strongest-hover":fn("primary-40"),"bg-disabled":fn("neutral-95"),"bg-selected-disabled":fn("neutral-95"),"bg-selected-stronger-disabled":fn("neutral-70"),"bg-success":fn("success-100"),"bg-success-hover":fn("success-95"),"bg-success-strong":fn("success-50"),"bg-success-strong-hover":fn("success-40"),"bg-warning":fn("warning-100"),"bg-warning-hover":fn("warning-95"),"bg-warning-strong":fn("warning-50"),"bg-warning-strong-hover":fn("warning-40"),"bg-info":fn("info-100"),"bg-info-hover":fn("info-95"),"bg-info-strong":fn("info-50"),"bg-info-strong-hover":fn("info-40"),"bg-error":fn("error-100"),"bg-error-hover":fn("error-95"),"bg-error-strong":fn("error-50"),"bg-error-strong-hover":fn("error-40"),"bg-inverse":fn("neutral-20"),"bg-inverse-subtle":fn("neutral-30"),"bg-inverse-subtler":fn("neutral-50"),"bg-inverse-subtlest":fn("neutral-60"),"bg-inverse-hover":fn("neutral-40"),"bg-primary":fn("primary-50"),"bg-primary-subtle":fn("primary-60"),"bg-primary-subtler":fn("primary-95"),"bg-primary-subtlest":fn("primary-100"),"bg-available":"#6DD0A1","bg-primary-hover":fn("primary-40"),"bg-primary-subtlest-hover":fn("primary-90"),"bg-primary-subtlest-selected":fn("primary-90"),"overlay-strong":"rgba(40, 40, 40, 0.85)","overlay-subtle":"rgba(40, 40, 40, 0.20)",hyperlink:fn("primary-50"),"hyperlink-hover":fn("primary-40"),"hyperlink-visited":fn("primary-40"),"hyperlink-inverse":fn("primary-inverse"),"focus-ring":fn("primary-50"),"focus-ring-inverse":fn("white")},En={text:fn("neutral-100"),"text-subtle":fn("neutral-80"),"text-subtler":fn("neutral-60"),"text-subtlest":fn("neutral-50"),"text-primary":fn("primary-60"),"text-primary-strongest":fn("primary-90"),"text-hover":fn("primary-70"),"text-selected":fn("primary-60"),"text-selected-hover":fn("primary-70"),"text-disabled":fn("neutral-60"),"text-disabled-subtle":fn("neutral-50"),"text-disabled-subtlest":fn("neutral-30"),"text-selected-disabled":fn("neutral-90"),"text-success":fn("success-70"),"text-warning":fn("warning-70"),"text-error":fn("error-70"),"text-info":fn("info-70"),"text-inverse":fn("black"),icon:fn("neutral-60"),"icon-subtle":fn("neutral-50"),"icon-strongest":fn("neutral-90"),"icon-primary":fn("primary-60"),"icon-primary-subtle":fn("primary-50"),"icon-primary-subtlest":fn("primary-40"),"icon-hover":fn("primary-70"),"icon-selected":fn("primary-60"),"icon-selected-hover":fn("primary-70"),"icon-disabled":fn("neutral-60"),"icon-disabled-subtle":fn("neutral-50"),"icon-selected-disabled":fn("neutral-50"),"icon-success":fn("success-60"),"icon-warning":fn("warning-50"),"icon-error":fn("error-60"),"icon-error-strong":fn("error-70"),"icon-info":fn("info-60"),"icon-inverse":fn("black"),"icon-primary-inverse":fn("primary-inverse"),border:fn("neutral-20"),"border-strong":fn("neutral-40"),"border-stronger":fn("neutral-60"),"border-primary":fn("primary-60"),"border-primary-subtle":fn("primary-50"),"border-hover":fn("primary-20"),"border-hover-strong":fn("primary-50"),"border-selected":fn("primary-60"),"border-selected-subtle":fn("primary-40"),"border-selected-subtlest":fn("primary-20"),"border-selected-hover":fn("primary-70"),"border-focus":fn("primary-50"),"border-focus-strong":fn("primary-60"),"border-disabled":fn("neutral-20"),"border-selected-disabled":fn("neutral-40"),"border-success":fn("success-50"),"border-warning":fn("warning-50"),"border-error":fn("error-50"),"border-error-focus":fn("error-50"),"border-error-focus-strong":fn("error-70"),"border-error-strong":fn("error-70"),"border-info":fn("info-50"),bg:fn("black"),"bg-strong":fn("neutral-10"),"bg-stronger":fn("neutral-20"),"bg-strongest":fn("neutral-20"),"bg-hover":fn("primary-20"),"bg-hover-strong":fn("primary-20"),"bg-hover-subtle":fn("primary-10"),"bg-hover-neutral":fn("neutral-10"),"bg-hover-neutral-strong":fn("neutral-20"),"bg-selected":fn("primary-20"),"bg-selected-hover":fn("primary-20"),"bg-selected-strong":fn("primary-20"),"bg-selected-stronger":fn("primary-40"),"bg-selected-strongest":fn("primary-60"),"bg-selected-strongest-hover":fn("primary-70"),"bg-disabled":fn("neutral-20"),"bg-selected-disabled":fn("neutral-20"),"bg-selected-stronger-disabled":fn("neutral-40"),"bg-success":fn("success-10"),"bg-success-hover":fn("success-20"),"bg-success-strong":fn("success-60"),"bg-success-strong-hover":fn("success-70"),"bg-warning":fn("warning-10"),"bg-warning-hover":fn("warning-20"),"bg-warning-strong":fn("warning-60"),"bg-warning-strong-hover":fn("warning-70"),"bg-info":fn("info-10"),"bg-info-hover":fn("info-20"),"bg-info-strong":fn("info-60"),"bg-info-strong-hover":fn("info-70"),"bg-error":fn("error-10"),"bg-error-hover":fn("error-20"),"bg-error-strong":fn("error-60"),"bg-error-strong-hover":fn("error-70"),"bg-inverse":fn("neutral-90"),"bg-inverse-subtle":fn("neutral-80"),"bg-inverse-subtler":fn("neutral-60"),"bg-inverse-subtlest":fn("neutral-50"),"bg-inverse-hover":fn("neutral-70"),"bg-primary":fn("primary-60"),"bg-primary-subtle":fn("primary-50"),"bg-primary-subtler":fn("primary-20"),"bg-primary-subtlest":fn("primary-10"),"bg-available":"#185339","bg-primary-hover":fn("primary-70"),"bg-primary-subtlest-hover":fn("primary-20"),"bg-primary-subtlest-selected":fn("primary-20"),"overlay-strong":"rgba(78, 78, 78, 0.80)","overlay-subtle":"rgba(78, 78, 78, 0.50)",hyperlink:fn("primary-60"),"hyperlink-hover":fn("primary-70"),"hyperlink-visited":fn("primary-70"),"hyperlink-inverse":fn("primary-inverse"),"focus-ring":fn("primary-60"),"focus-ring-inverse":fn("black")},Cn={collections:{lifesg:vn,bookingsg:vn,rbs:vn,mylegacy:vn,ccube:vn,oneservice:vn,pa:wn,a11yplayground:$n,supportgowhere:vn,imda:vn,spf:vn},defaultValue:"lifesg"},Dn={collections:{lifesg:Fn,bookingsg:Fn,rbs:Fn,mylegacy:Fn,ccube:Fn,oneservice:Fn,pa:Fn,a11yplayground:En,supportgowhere:Fn,imda:Fn,spf:Fn},defaultValue:"lifesg"},Bn=e=>r=>{var n;const t=r.theme,i="dark"===(null==t?void 0:t.colourMode),o=Qr(i?Dn:Cn,null==t?void 0:t.colourScheme),a=i?"semanticColourDark":"semanticColour",s=null===(n=null==t?void 0:t.overrides)||void 0===n?void 0:n[a],l=s?Kr(o,e,s):o[e];return"function"==typeof l?l(r):l},An={text:Bn("text"),"text-subtle":Bn("text-subtle"),"text-subtler":Bn("text-subtler"),"text-subtlest":Bn("text-subtlest"),"text-primary":Bn("text-primary"),"text-primary-strongest":Bn("text-primary-strongest"),"text-hover":Bn("text-hover"),"text-selected":Bn("text-selected"),"text-selected-hover":Bn("text-selected-hover"),"text-disabled":Bn("text-disabled"),"text-disabled-subtle":Bn("text-disabled-subtle"),"text-disabled-subtlest":Bn("text-disabled-subtlest"),"text-selected-disabled":Bn("text-selected-disabled"),"text-success":Bn("text-success"),"text-warning":Bn("text-warning"),"text-error":Bn("text-error"),"text-info":Bn("text-info"),"text-inverse":Bn("text-inverse"),icon:Bn("icon"),"icon-subtle":Bn("icon-subtle"),"icon-strongest":Bn("icon-strongest"),"icon-primary":Bn("icon-primary"),"icon-primary-subtle":Bn("icon-primary-subtle"),"icon-primary-subtlest":Bn("icon-primary-subtlest"),"icon-hover":Bn("icon-hover"),"icon-selected":Bn("icon-selected"),"icon-selected-hover":Bn("icon-selected-hover"),"icon-disabled":Bn("icon-disabled"),"icon-disabled-subtle":Bn("icon-disabled-subtle"),"icon-selected-disabled":Bn("icon-selected-disabled"),"icon-success":Bn("icon-success"),"icon-warning":Bn("icon-warning"),"icon-error":Bn("icon-error"),"icon-error-strong":Bn("icon-error-strong"),"icon-info":Bn("icon-info"),"icon-inverse":Bn("icon-inverse"),"icon-primary-inverse":Bn("icon-primary-inverse"),border:Bn("border"),"border-strong":Bn("border-strong"),"border-stronger":Bn("border-stronger"),"border-primary":Bn("border-primary"),"border-primary-subtle":Bn("border-primary-subtle"),"border-hover":Bn("border-hover"),"border-hover-strong":Bn("border-hover-strong"),"border-selected":Bn("border-selected"),"border-selected-subtle":Bn("border-selected-subtle"),"border-selected-subtlest":Bn("border-selected-subtlest"),"border-selected-hover":Bn("border-selected-hover"),"border-focus":Bn("border-focus"),"border-focus-strong":Bn("border-focus-strong"),"border-disabled":Bn("border-disabled"),"border-selected-disabled":Bn("border-selected-disabled"),"border-success":Bn("border-success"),"border-warning":Bn("border-warning"),"border-error":Bn("border-error"),"border-error-focus":Bn("border-error-focus"),"border-error-focus-strong":Bn("border-error-focus-strong"),"border-error-strong":Bn("border-error-strong"),"border-info":Bn("border-info"),bg:Bn("bg"),"bg-strong":Bn("bg-strong"),"bg-stronger":Bn("bg-stronger"),"bg-strongest":Bn("bg-strongest"),"bg-hover":Bn("bg-hover"),"bg-hover-strong":Bn("bg-hover-strong"),"bg-hover-subtle":Bn("bg-hover-subtle"),"bg-hover-neutral":Bn("bg-hover-neutral"),"bg-hover-neutral-strong":Bn("bg-hover-neutral-strong"),"bg-selected":Bn("bg-selected"),"bg-selected-hover":Bn("bg-selected-hover"),"bg-selected-strong":Bn("bg-selected-strong"),"bg-selected-stronger":Bn("bg-selected-stronger"),"bg-selected-strongest":Bn("bg-selected-strongest"),"bg-selected-strongest-hover":Bn("bg-selected-strongest-hover"),"bg-disabled":Bn("bg-disabled"),"bg-selected-disabled":Bn("bg-selected-disabled"),"bg-selected-stronger-disabled":Bn("bg-selected-stronger-disabled"),"bg-success":Bn("bg-success"),"bg-success-hover":Bn("bg-success-hover"),"bg-success-strong":Bn("bg-success-strong"),"bg-success-strong-hover":Bn("bg-success-strong-hover"),"bg-warning":Bn("bg-warning"),"bg-warning-hover":Bn("bg-warning-hover"),"bg-warning-strong":Bn("bg-warning-strong"),"bg-warning-strong-hover":Bn("bg-warning-strong-hover"),"bg-info":Bn("bg-info"),"bg-info-hover":Bn("bg-info-hover"),"bg-info-strong":Bn("bg-info-strong"),"bg-info-strong-hover":Bn("bg-info-strong-hover"),"bg-error":Bn("bg-error"),"bg-error-hover":Bn("bg-error-hover"),"bg-error-strong":Bn("bg-error-strong"),"bg-error-strong-hover":Bn("bg-error-strong-hover"),"bg-inverse":Bn("bg-inverse"),"bg-inverse-subtle":Bn("bg-inverse-subtle"),"bg-inverse-subtler":Bn("bg-inverse-subtler"),"bg-inverse-subtlest":Bn("bg-inverse-subtlest"),"bg-inverse-hover":Bn("bg-inverse-hover"),"bg-primary":Bn("bg-primary"),"bg-primary-subtle":Bn("bg-primary-subtle"),"bg-primary-subtler":Bn("bg-primary-subtler"),"bg-primary-subtlest":Bn("bg-primary-subtlest"),"bg-available":Bn("bg-available"),"bg-primary-hover":Bn("bg-primary-hover"),"bg-primary-subtlest-hover":Bn("bg-primary-subtlest-hover"),"bg-primary-subtlest-selected":Bn("bg-primary-subtlest-selected"),"overlay-strong":Bn("overlay-strong"),"overlay-subtle":Bn("overlay-subtle"),hyperlink:Bn("hyperlink"),"hyperlink-hover":Bn("hyperlink-hover"),"hyperlink-visited":Bn("hyperlink-visited"),"hyperlink-inverse":Bn("hyperlink-inverse"),"focus-ring":Bn("focus-ring"),"focus-ring-inverse":Bn("focus-ring-inverse")},Sn={collections:{default:{solid:e=>r=>{var n,t,i;const{thickness:o,radius:a,colour:s}=e||{},l=null!==(n="function"==typeof o?o(r):o+"px")&&void 0!==n?n:nn["width-010"](r),d=null!==(t="function"==typeof a?a(r):a+"px")&&void 0!==t?t:0,c=null!==(i="function"==typeof s?s(r):s)&&void 0!==i?i:An.border(r),u=nn.solid;return m`
            border: ${l} ${u} ${c};
            border-radius: ${d};
        `},"dashed-default":e=>r=>{var n,t,i;const{thickness:o,radius:a,colour:s}=e||{},l=null!==(n="function"==typeof o?o(r):o)&&void 0!==n?n:nn["width-010"](r),d=null!==(t="function"==typeof a?a(r):a)&&void 0!==t?t:0,c=null!==(i="function"==typeof s?s(r):s)&&void 0!==i?i:An.border(r),u=encodeURIComponent(`<svg width='100%' height='100%' xmlns='http://www.w3.org/2000/svg'><rect width='100%' height='100%' fill='none' rx='${d}' ry='${d}' stroke='${c}' stroke-width='${l}' stroke-dasharray='4, 8' stroke-dashoffset='0' stroke-linecap='square'/></svg>`);return m`
            background-image: url("data:image/svg+xml,${u}");
            border-radius: ${d};
        `}}},defaultValue:"default"},kn=e=>1===e.length&&"theme"in e[0],zn=e=>(...r)=>n=>{const t=kn(r)?[]:r,i=kn(r)?r[0]:n,o=i.theme;return(0,Qr(Sn,null==o?void 0:o.borderScheme)[e])(...t)(i)},On={solid:zn("solid"),"dashed-default":zn("dashed-default")},Mn={collections:{default:{"xxs-min":0,"xxs-max":320,"xs-min":321,"xs-max":375,"sm-min":376,"sm-max":480,"md-min":481,"md-max":768,"lg-min":769,"lg-max":1200,"xl-min":1201,"xl-max":1440,"xxl-min":1441,"xxs-column":8,"xs-column":8,"sm-column":8,"md-column":8,"lg-column":12,"xl-column":12,"xxl-column":12,"xxs-gutter":16,"xs-gutter":16,"sm-gutter":16,"md-gutter":16,"lg-gutter":32,"xl-gutter":32,"xxl-gutter":32,"xxs-margin":24,"xs-margin":24,"sm-margin":24,"md-margin":24,"lg-margin":48,"xl-margin":48,"xxl-margin":48}},defaultValue:"default"},_n=e=>r=>{var n;const t=r.theme,i=Qr(Mn,null==t?void 0:t.breakpointScheme);let o;return o=(null===(n=null==t?void 0:t.overrides)||void 0===n?void 0:n.breakpoint)?Kr(i,e,t.overrides.breakpoint):i[e],o},Tn={"xxs-min":_n("xxs-min"),"xxs-max":_n("xxs-max"),"xs-min":_n("xs-min"),"xs-max":_n("xs-max"),"sm-min":_n("sm-min"),"sm-max":_n("sm-max"),"md-min":_n("md-min"),"md-max":_n("md-max"),"lg-min":_n("lg-min"),"lg-max":_n("lg-max"),"xl-min":_n("xl-min"),"xl-max":_n("xl-max"),"xxl-min":_n("xxl-min"),"xxs-column":_n("xxs-column"),"xs-column":_n("xs-column"),"sm-column":_n("sm-column"),"md-column":_n("md-column"),"lg-column":_n("lg-column"),"xl-column":_n("xl-column"),"xxl-column":_n("xxl-column"),"xxs-gutter":_n("xxs-gutter"),"xs-gutter":_n("xs-gutter"),"sm-gutter":_n("sm-gutter"),"md-gutter":_n("md-gutter"),"lg-gutter":_n("lg-gutter"),"xl-gutter":_n("xl-gutter"),"xxl-gutter":_n("xxl-gutter"),"xxs-margin":_n("xxs-margin"),"xs-margin":_n("xs-margin"),"sm-margin":_n("sm-margin"),"md-margin":_n("md-margin"),"lg-margin":_n("lg-margin"),"xl-margin":_n("xl-margin"),"xxl-margin":_n("xxl-margin")},jn=e=>("max-width"===e?["xxs","xs","sm","md","lg","xl"]:["xxs","xs","sm","md","lg","xl","xxl"]).reduce(((r,n)=>(r[n]=((e,r)=>{const n=Tn["max-width"===e?`${r}-max`:`${r}-min`];return r=>{const t=n(r);return`@media screen and (${e}: ${t}px)`}})(e,n),r)),{}),Ln={MaxWidth:jn("max-width"),MinWidth:jn("min-width")},Yn={collections:{default:{none:0,xs:2,sm:4,md:8,lg:12,full:9999},spf:{none:0,xs:2,sm:8,md:8,lg:12,full:9999}},defaultValue:"default"},In=e=>r=>{var n;const t=r.theme,i=Qr(Yn,null==t?void 0:t.radiusScheme);return(null===(n=null==t?void 0:t.overrides)||void 0===n?void 0:n.radius)?`${Kr(i,e,t.overrides.radius)}px`:`${i[e]}px`},Wn={none:In("none"),xs:In("xs"),sm:In("sm"),md:In("md"),lg:In("lg"),full:In("full")},Hn={Button:{"button-radius":Wn.md,"button-default-colour-bg":An["bg-primary"],"button-default-colour-bg-hover":An["bg-primary-hover"],"button-default-colour-text":An["text-inverse"],"button-secondary-colour-border":An["border-primary"],"button-secondary-colour-text":An["text-primary"],"button-light-colour-text":An["text-primary"],"button-link-colour-text":An["text-primary"]},Animation:{"loading-dots-spinner-colour":An["icon-primary"]},Navbar:{"navbar-full-height":"6rem","navbar-full-logo-height":"2rem","navbar-compressed-height":"4rem","navbar-compressed-logo-height":"1.5rem","navbar-mobile-height":"3.5rem","navbar-mobile-logo-height":"1.5rem","navbar-colour-bg":An.bg,"navbar-colour-icon":An.icon,"navbar-link-colour-text":An.text,"navbar-link-colour-text-hover":An["text-hover"],"navbar-link-colour-text-selected-hover":An["text-selected-hover"]},Footer:{"footer-colour-bg":An["bg-strong"],"footer-colour-text":An.text,"footer-link-colour-text":An.text,"footer-link-colour-text-hover":An["text-hover"],"footer-disclaimer-link-colour-text":An.text,"footer-disclaimer-link-colour-text-hover":An["text-subtler"]}},Rn={Button:{"button-radius":Wn.sm,"button-default-colour-bg":An["bg-primary"],"button-default-colour-bg-hover":An["bg-primary-hover"],"button-default-colour-text":An["text-inverse"],"button-secondary-colour-border":An["border-primary"],"button-secondary-colour-text":An["text-primary"],"button-light-colour-text":An["text-primary"],"button-link-colour-text":An["text-primary"]},Animation:{"loading-dots-spinner-colour":An["icon-primary"]},Navbar:{"navbar-full-height":"6rem","navbar-full-logo-height":"2rem","navbar-compressed-height":"4rem","navbar-compressed-logo-height":"1.5rem","navbar-mobile-height":"3.5rem","navbar-mobile-logo-height":"1.5rem","navbar-colour-bg":An.bg,"navbar-colour-icon":An.icon,"navbar-link-colour-text":An.text,"navbar-link-colour-text-hover":An["text-hover"],"navbar-link-colour-text-selected-hover":An["text-selected-hover"]},Footer:{"footer-colour-bg":An["bg-strong"],"footer-colour-text":An.text,"footer-link-colour-text":An.text,"footer-link-colour-text-hover":An["text-hover"],"footer-disclaimer-link-colour-text":An.text,"footer-disclaimer-link-colour-text-hover":An["text-subtler"]}},Pn={Button:{"button-radius":Wn.sm,"button-default-colour-bg":An["bg-primary"],"button-default-colour-bg-hover":An["bg-primary-hover"],"button-default-colour-text":An["text-inverse"],"button-secondary-colour-border":An["border-primary"],"button-secondary-colour-text":An["text-primary"],"button-light-colour-text":An["text-primary"],"button-link-colour-text":An["text-primary"]},Animation:{"loading-dots-spinner-colour":xn["brand-50"]},Navbar:{"navbar-full-height":"6rem","navbar-full-logo-height":"2rem","navbar-compressed-height":"4rem","navbar-compressed-logo-height":"1.5rem","navbar-mobile-height":"3.5rem","navbar-mobile-logo-height":"1.5rem","navbar-colour-bg":An.bg,"navbar-colour-icon":An.icon,"navbar-link-colour-text":An.text,"navbar-link-colour-text-hover":An["text-hover"],"navbar-link-colour-text-selected-hover":An["text-selected-hover"]},Footer:{"footer-colour-bg":An["bg-strong"],"footer-colour-text":An.text,"footer-link-colour-text":An.text,"footer-link-colour-text-hover":An["text-hover"],"footer-disclaimer-link-colour-text":An.text,"footer-disclaimer-link-colour-text-hover":An["text-subtler"]}},Nn={collections:{default:Rn,pa:{Button:{"button-radius":Wn.full,"button-default-colour-bg":An["bg-primary"],"button-default-colour-bg-hover":An["bg-primary-hover"],"button-default-colour-text":An["text-inverse"],"button-secondary-colour-border":An["border-primary"],"button-secondary-colour-text":An["text-primary"],"button-light-colour-text":An["text-primary"],"button-link-colour-text":An["text-primary"]},Animation:{"loading-dots-spinner-colour":An["icon-primary"]},Navbar:{"navbar-full-height":"6rem","navbar-full-logo-height":"2rem","navbar-compressed-height":"4rem","navbar-compressed-logo-height":"1.5rem","navbar-mobile-height":"3.5rem","navbar-mobile-logo-height":"1.5rem","navbar-colour-bg":An.bg,"navbar-colour-icon":An.icon,"navbar-link-colour-text":An.text,"navbar-link-colour-text-hover":An["text-hover"],"navbar-link-colour-text-selected-hover":An["text-selected-hover"]},Footer:{"footer-colour-bg":An["bg-strong"],"footer-colour-text":An.text,"footer-link-colour-text":An.text,"footer-link-colour-text-hover":An["text-hover"],"footer-disclaimer-link-colour-text":An.text,"footer-disclaimer-link-colour-text-hover":An["text-subtler"]}},a11yplayground:Hn,lifesg:Pn,spf:{Button:{"button-radius":Wn.md,"button-default-colour-bg":An["bg-primary"],"button-default-colour-bg-hover":An["bg-primary-hover"],"button-default-colour-text":An["text-inverse"],"button-secondary-colour-border":An["border-primary"],"button-secondary-colour-text":An["text-primary"],"button-light-colour-text":An["text-primary"],"button-link-colour-text":An["text-primary"]},Animation:{"loading-dots-spinner-colour":An["icon-primary"]},Navbar:{"navbar-full-height":"6rem","navbar-full-logo-height":"3rem","navbar-compressed-height":"5rem","navbar-compressed-logo-height":"2rem","navbar-mobile-height":"4rem","navbar-mobile-logo-height":"2rem","navbar-colour-bg":An.bg,"navbar-colour-icon":An.icon,"navbar-link-colour-text":An["text-primary-strongest"],"navbar-link-colour-text-hover":An["text-subtler"],"navbar-link-colour-text-selected-hover":An["text-subtler"]},Footer:{"footer-colour-bg":An["bg-inverse"],"footer-colour-text":An["text-inverse"],"footer-link-colour-text":An["text-inverse"],"footer-link-colour-text-hover":An["text-inverse"],"footer-disclaimer-link-colour-text":An["text-inverse"],"footer-disclaimer-link-colour-text-hover":An["text-inverse"]}}},defaultValue:"default"},Vn=(e,r)=>n=>{var t,i;const o=n.theme,a=Qr(Nn,null==o?void 0:o.componentScheme);return Zn((null===(i=null===(t=null==o?void 0:o.componentOverrides)||void 0===t?void 0:t[e])||void 0===i?void 0:i[r])||a[e][r],n)},Zn=(e,r)=>{switch(typeof e){case"function":return e(r);case"number":return e+"px";case"string":return e}},Xn=Vn("Button","button-radius"),Un=Vn("Button","button-default-colour-bg"),Jn=Vn("Button","button-default-colour-bg-hover"),qn=Vn("Button","button-default-colour-text"),Gn=Vn("Button","button-secondary-colour-border"),Kn=Vn("Button","button-secondary-colour-text"),Qn=Vn("Button","button-light-colour-text"),et=Vn("Button","button-link-colour-text"),rt={collections:{default:{"heading-size-xxl":"3rem","heading-size-xl":"2.5rem","heading-size-lg":"2rem","heading-size-md":"1.625rem","heading-size-sm":"1.375rem","heading-size-xs":"1.125rem","heading-lh-xxl":"3.5rem","heading-lh-xl":"3rem","heading-lh-lg":"2.5rem","heading-lh-md":"2.25rem","heading-lh-sm":"1.75rem","heading-lh-xs":"1.625rem","heading-ls-xxl":"-0.035rem","heading-ls-xl":"-0.02rem","heading-ls-lg":"-0.02rem","heading-ls-md":"0rem","heading-ls-sm":"0rem","heading-ls-xs":"0rem","weight-light":"300","weight-regular":"400","weight-semibold":"600","weight-bold":"700","font-family":"Open Sans","body-size-baseline":"1.125rem","body-size-md":"1rem","body-size-sm":"0.875rem","body-size-xs":"0.75rem","body-lh-baseline":"1.625rem","body-lh-md":"1.5rem","body-lh-sm":"1.625rem","body-lh-xs":"1.25rem","body-ls-baseline":"0rem","body-ls-md":"0.009rem","body-ls-sm":"0.008rem","body-ls-xs":"0.008rem","form-label-size":"1rem","form-description-size":"0.875rem","form-label-lh":"1.5rem","form-description-lh":"1.625rem","form-label-ls":"0.009rem","form-description-ls":"0.008rem"},bookingsg:{"heading-size-xxl":"3rem","heading-size-xl":"2.5rem","heading-size-lg":"2rem","heading-size-md":"1.625rem","heading-size-sm":"1.375rem","heading-size-xs":"1.125rem","heading-lh-xxl":"3.5rem","heading-lh-xl":"3rem","heading-lh-lg":"2.5rem","heading-lh-md":"2.25rem","heading-lh-sm":"1.75rem","heading-lh-xs":"1.75rem","heading-ls-xxl":"-0.035rem","heading-ls-xl":"-0.02rem","heading-ls-lg":"-0.02rem","heading-ls-md":"0rem","heading-ls-sm":"0rem","heading-ls-xs":"0rem","weight-light":"300","weight-regular":"400","weight-semibold":"600","weight-bold":"700","font-family":"Plus Jakarta Sans","body-size-baseline":"1.125rem","body-size-md":"1rem","body-size-sm":"0.875rem","body-size-xs":"0.75rem","body-lh-baseline":"1.75rem","body-lh-md":"1.5rem","body-lh-sm":"1.6rem","body-lh-xs":"1.2rem","body-ls-baseline":"0rem","body-ls-md":"0.009rem","body-ls-sm":"0.008rem","body-ls-xs":"0.008rem","form-label-size":"1rem","form-description-size":"0.875rem","form-label-lh":"1.5rem","form-description-lh":"1.625rem","form-label-ls":"0.009rem","form-description-ls":"0.008rem"},mylegacy:{"heading-size-xxl":"3rem","heading-size-xl":"2.5rem","heading-size-lg":"2rem","heading-size-md":"1.625rem","heading-size-sm":"1.375rem","heading-size-xs":"1.125rem","heading-lh-xxl":"3.5rem","heading-lh-xl":"3rem","heading-lh-lg":"2.5rem","heading-lh-md":"2.25rem","heading-lh-sm":"1.75rem","heading-lh-xs":"1.625rem","heading-ls-xxl":"-0.035rem","heading-ls-xl":"-0.02rem","heading-ls-lg":"-0.02rem","heading-ls-md":"0rem","heading-ls-sm":"0rem","heading-ls-xs":"0rem","weight-light":"300","weight-regular":"400","weight-semibold":"600","weight-bold":"700","font-family":"Open Sans","body-size-baseline":"1.125rem","body-size-md":"1rem","body-size-sm":"0.875rem","body-size-xs":"0.75rem","body-lh-baseline":"1.625rem","body-lh-md":"1.5rem","body-lh-sm":"1.625rem","body-lh-xs":"1.25rem","body-ls-baseline":"0rem","body-ls-md":"0.009rem","body-ls-sm":"0.008rem","body-ls-xs":"0.008rem","form-label-size":"1.125rem","form-description-size":"1rem","form-label-lh":"1.5rem","form-description-lh":"1.625rem","form-label-ls":"0rem","form-description-ls":"0.009rem"},pa:{"heading-size-xxl":"2.5rem","heading-size-xl":"2rem","heading-size-lg":"1.75rem","heading-size-md":"1.5rem","heading-size-sm":"1.25rem","heading-size-xs":"1rem","heading-lh-xxl":"3rem","heading-lh-xl":"2.5rem","heading-lh-lg":"2.25rem","heading-lh-md":"2rem","heading-lh-sm":"2rem","heading-lh-xs":"1.75rem","heading-ls-xxl":"-0.032rem","heading-ls-xl":"-0.032rem","heading-ls-lg":"0rem","heading-ls-md":"0rem","heading-ls-sm":"0rem","heading-ls-xs":"0rem","weight-light":"300","weight-regular":"400","weight-semibold":"600","weight-bold":"700","font-family":"Lato","body-size-baseline":"1rem","body-size-md":"0.875rem","body-size-sm":"0.75rem","body-size-xs":"0.625rem","body-lh-baseline":"1.75rem","body-lh-md":"1.5rem","body-lh-sm":"1.25rem","body-lh-xs":"1.25rem","body-ls-baseline":"0rem","body-ls-md":"0.014rem","body-ls-sm":"0.012rem","body-ls-xs":"0.012rem","form-label-size":"1rem","form-description-size":"0.875rem","form-label-lh":"1.5rem","form-description-lh":"1.6rem","form-label-ls":"0.014rem","form-description-ls":"0.012rem"},a11yplayground:{"heading-size-xxl":"3rem","heading-size-xl":"2.5rem","heading-size-lg":"2rem","heading-size-md":"1.625rem","heading-size-sm":"1.375rem","heading-size-xs":"1.125rem","heading-lh-xxl":"3.5rem","heading-lh-xl":"3rem","heading-lh-lg":"2.5rem","heading-lh-md":"2.25rem","heading-lh-sm":"1.75rem","heading-lh-xs":"1.625rem","heading-ls-xxl":"-0.035rem","heading-ls-xl":"-0.02rem","heading-ls-lg":"-0.02rem","heading-ls-md":"0rem","heading-ls-sm":"0rem","heading-ls-xs":"0rem","weight-light":"300","weight-regular":"400","weight-semibold":"600","weight-bold":"700","font-family":"Atkinson Hyperlegible Next","body-size-baseline":"1.125rem","body-size-md":"1rem","body-size-sm":"0.875rem","body-size-xs":"0.75rem","body-lh-baseline":"1.625rem","body-lh-md":"1.5rem","body-lh-sm":"1.625rem","body-lh-xs":"1.25rem","body-ls-baseline":"0rem","body-ls-md":"0.009rem","body-ls-sm":"0.008rem","body-ls-xs":"0.008rem","form-label-size":"1.125rem","form-description-size":"1rem","form-label-lh":"1.5rem","form-description-lh":"1.625rem","form-label-ls":"0rem","form-description-ls":"0.009rem"},supportgowhere:{"heading-size-xxl":"3rem","heading-size-xl":"2.5rem","heading-size-lg":"2rem","heading-size-md":"1.625rem","heading-size-sm":"1.375rem","heading-size-xs":"1.125rem","heading-lh-xxl":"3.5rem","heading-lh-xl":"3rem","heading-lh-lg":"2.5rem","heading-lh-md":"2.25rem","heading-lh-sm":"1.75rem","heading-lh-xs":"1.625rem","heading-ls-xxl":"-0.035rem","heading-ls-xl":"-0.02rem","heading-ls-lg":"-0.02rem","heading-ls-md":"0rem","heading-ls-sm":"0rem","heading-ls-xs":"0rem","weight-light":"300","weight-regular":"400","weight-semibold":"600","weight-bold":"700","font-family":"Libre Franklin","body-size-baseline":"1.125rem","body-size-md":"1rem","body-size-sm":"0.875rem","body-size-xs":"0.75rem","body-lh-baseline":"1.625rem","body-lh-md":"1.5rem","body-lh-sm":"1.625rem","body-lh-xs":"1.25rem","body-ls-baseline":"0rem","body-ls-md":"0.009rem","body-ls-sm":"0.008rem","body-ls-xs":"0.008rem","form-label-size":"1rem","form-description-size":"0.875rem","form-label-lh":"1.5rem","form-description-lh":"1.625rem","form-label-ls":"0.009rem","form-description-ls":"0.008rem"},sgwdigitallobby:{"heading-size-xxl":"3.75rem","heading-size-xl":"3rem","heading-size-lg":"2.5rem","heading-size-md":"2rem","heading-size-sm":"1.625rem","heading-size-xs":"1.375rem","heading-lh-xxl":"4.5rem","heading-lh-xl":"3.5rem","heading-lh-lg":"3rem","heading-lh-md":"2.5rem","heading-lh-sm":"2.25rem","heading-lh-xs":"1.75rem","heading-ls-xxl":"-0.035rem","heading-ls-xl":"-0.035em","heading-ls-lg":"-0.02rem","heading-ls-md":"-0.02rem","heading-ls-sm":"0rem","heading-ls-xs":"0rem","weight-light":"300","weight-regular":"400","weight-semibold":"600","weight-bold":"700","font-family":"Libre Franklin","body-size-baseline":"1.375rem","body-size-md":"1.2rem","body-size-sm":"1.125rem","body-size-xs":"1rem","body-lh-baseline":"1.75rem","body-lh-md":"1.625rem","body-lh-sm":"1.625rem","body-lh-xs":"1.5rem","body-ls-baseline":"0rem","body-ls-md":"0rem","body-ls-sm":"0rem","body-ls-xs":"0.009rem","form-label-size":"1.25rem","form-description-size":"1.125rem","form-label-lh":"1.625rem","form-description-lh":"1.625rem","form-label-ls":"0rem","form-description-ls":"0rem"},imda:{"heading-size-xxl":"3rem","heading-size-xl":"2.5rem","heading-size-lg":"2rem","heading-size-md":"1.625rem","heading-size-sm":"1.375rem","heading-size-xs":"1.125rem","heading-lh-xxl":"3.5rem","heading-lh-xl":"3rem","heading-lh-lg":"2.5rem","heading-lh-md":"2.25rem","heading-lh-sm":"1.75rem","heading-lh-xs":"1.625rem","heading-ls-xxl":"-0.035rem","heading-ls-xl":"-0.02rem","heading-ls-lg":"-0.02rem","heading-ls-md":"0rem","heading-ls-sm":"0rem","heading-ls-xs":"0rem","weight-light":"300","weight-regular":"400","weight-semibold":"600","weight-bold":"700","font-family":"Montserrat","body-size-baseline":"1.125rem","body-size-md":"1rem","body-size-sm":"0.875rem","body-size-xs":"0.75rem","body-lh-baseline":"1.625rem","body-lh-md":"1.5rem","body-lh-sm":"1.625rem","body-lh-xs":"1.25rem","body-ls-baseline":"0rem","body-ls-md":"0.009rem","body-ls-sm":"0.008rem","body-ls-xs":"0.008rem","form-label-size":"1rem","form-description-size":"0.875rem","form-label-lh":"1.5rem","form-description-lh":"1.625rem","form-label-ls":"0.009rem","form-description-ls":"0.008rem"},spf:{"heading-size-xxl":"3.75rem","heading-size-xl":"3rem","heading-size-lg":"2.5rem","heading-size-md":"2rem","heading-size-sm":"1.75rem","heading-size-xs":"1.5rem","heading-lh-xxl":"4.5rem","heading-lh-xl":"3.5rem","heading-lh-lg":"3rem","heading-lh-md":"2.25rem","heading-lh-sm":"2rem","heading-lh-xs":"1.75rem","heading-ls-xxl":"-0.035rem","heading-ls-xl":"-0.02rem","heading-ls-lg":"-0.02rem","heading-ls-md":"0rem","heading-ls-sm":"0rem","heading-ls-xs":"0rem","weight-light":"300","weight-regular":"400","weight-semibold":"600","weight-bold":"700","font-family":"Public Sans","body-size-baseline":"1.2rem","body-size-md":"1.125rem","body-size-sm":"1rem","body-size-xs":"0.875rem","body-lh-baseline":"1.5rem","body-lh-md":"1.5rem","body-lh-sm":"1.5rem","body-lh-xs":"1.125rem","body-ls-baseline":"0rem","body-ls-md":"0.009rem","body-ls-sm":"0.008rem","body-ls-xs":"0.008rem","form-label-size":"1.125rem","form-description-size":"1rem","form-label-lh":"1.5rem","form-description-lh":"1.625rem","form-label-ls":"0.009rem","form-description-ls":"0.008rem"},oneservice:{"heading-size-xxl":"2.5rem","heading-size-xl":"2rem","heading-size-lg":"1.75rem","heading-size-md":"1.375rem","heading-size-sm":"1.125rem","heading-size-xs":"1rem","heading-lh-xxl":"3.5rem","heading-lh-xl":"3rem","heading-lh-lg":"2.625rem","heading-lh-md":"2rem","heading-lh-sm":"1.625rem","heading-lh-xs":"1.5rem","heading-ls-xxl":"0rem","heading-ls-xl":"0rem","heading-ls-lg":"0rem","heading-ls-md":"0rem","heading-ls-sm":"0rem","heading-ls-xs":"0rem","weight-light":"300","weight-regular":"400","weight-semibold":"600","weight-bold":"700","font-family":"Open Sans","body-size-baseline":"1rem","body-size-md":"0.875rem","body-size-sm":"0.75rem","body-size-xs":"0.75rem","body-lh-baseline":"1.5rem","body-lh-md":"1.313rem","body-lh-sm":"1.125rem","body-lh-xs":"1.125rem","body-ls-baseline":"0rem","body-ls-md":"0rem","body-ls-sm":"0rem","body-ls-xs":"0rem","form-label-size":"0.875rem","form-description-size":"0.875rem","form-label-lh":"1.313rem","form-description-lh":"1.313rem","form-label-ls":"0rem","form-description-ls":"0rem"}},defaultValue:"default"},nt=e=>r=>{var n;const t=r.theme,i=Qr(rt,null==t?void 0:t.fontScheme);return(null===(n=null==t?void 0:t.overrides)||void 0===n?void 0:n.fontSpec)?Kr(i,e,t.overrides.fontSpec):i[e]},tt={"heading-size-xxl":nt("heading-size-xxl"),"heading-size-xl":nt("heading-size-xl"),"heading-size-lg":nt("heading-size-lg"),"heading-size-md":nt("heading-size-md"),"heading-size-sm":nt("heading-size-sm"),"heading-size-xs":nt("heading-size-xs"),"heading-lh-xxl":nt("heading-lh-xxl"),"heading-lh-xl":nt("heading-lh-xl"),"heading-lh-lg":nt("heading-lh-lg"),"heading-lh-md":nt("heading-lh-md"),"heading-lh-sm":nt("heading-lh-sm"),"heading-lh-xs":nt("heading-lh-xs"),"heading-ls-xxl":nt("heading-ls-xxl"),"heading-ls-xl":nt("heading-ls-xl"),"heading-ls-lg":nt("heading-ls-lg"),"heading-ls-md":nt("heading-ls-md"),"heading-ls-sm":nt("heading-ls-sm"),"heading-ls-xs":nt("heading-ls-xs"),"weight-light":nt("weight-light"),"weight-regular":nt("weight-regular"),"weight-semibold":nt("weight-semibold"),"weight-bold":nt("weight-bold"),"font-family":nt("font-family"),"body-size-baseline":nt("body-size-baseline"),"body-size-md":nt("body-size-md"),"body-size-sm":nt("body-size-sm"),"body-size-xs":nt("body-size-xs"),"body-lh-baseline":nt("body-lh-baseline"),"body-lh-md":nt("body-lh-md"),"body-lh-sm":nt("body-lh-sm"),"body-lh-xs":nt("body-lh-xs"),"body-ls-baseline":nt("body-ls-baseline"),"body-ls-md":nt("body-ls-md"),"body-ls-sm":nt("body-ls-sm"),"body-ls-xs":nt("body-ls-xs"),"form-label-size":nt("form-label-size"),"form-description-size":nt("form-description-size"),"form-label-lh":nt("form-label-lh"),"form-description-lh":nt("form-description-lh"),"form-label-ls":nt("form-label-ls"),"form-description-ls":nt("form-description-ls")},it=(e,r,n,t,i)=>{const{disableLigatures:o}=i||{};return m`
        font-family: ${nt("font-family")};
        font-size: ${nt(e)};
        font-weight: ${nt(r)};
        line-height: ${nt(n)};
        letter-spacing: ${nt(t)};

        font-variant: ${o?"no-common-ligatures":"normal"};
    `},ot=(e={})=>({"heading-xxl-light":it("heading-size-xxl","weight-light","heading-lh-xxl","heading-ls-xxl",e),"heading-xxl-regular":it("heading-size-xxl","weight-regular","heading-lh-xxl","heading-ls-xxl",e),"heading-xxl-semibold":it("heading-size-xxl","weight-semibold","heading-lh-xxl","heading-ls-xxl",e),"heading-xxl-bold":it("heading-size-xxl","weight-bold","heading-lh-xxl","heading-ls-xxl",e),"heading-xl-light":it("heading-size-xl","weight-light","heading-lh-xl","heading-ls-xl",e),"heading-xl-regular":it("heading-size-xl","weight-regular","heading-lh-xl","heading-ls-xl",e),"heading-xl-semibold":it("heading-size-xl","weight-semibold","heading-lh-xl","heading-ls-xl",e),"heading-xl-bold":it("heading-size-xl","weight-bold","heading-lh-xl","heading-ls-xl",e),"heading-lg-light":it("heading-size-lg","weight-light","heading-lh-lg","heading-ls-lg",e),"heading-lg-regular":it("heading-size-lg","weight-regular","heading-lh-lg","heading-ls-lg",e),"heading-lg-semibold":it("heading-size-lg","weight-semibold","heading-lh-lg","heading-ls-lg",e),"heading-lg-bold":it("heading-size-lg","weight-bold","heading-lh-lg","heading-ls-lg",e),"heading-md-light":it("heading-size-md","weight-light","heading-lh-md","heading-ls-md",e),"heading-md-regular":it("heading-size-md","weight-regular","heading-lh-md","heading-ls-md",e),"heading-md-semibold":it("heading-size-md","weight-semibold","heading-lh-md","heading-ls-md",e),"heading-md-bold":it("heading-size-md","weight-bold","heading-lh-md","heading-ls-md",e),"heading-sm-light":it("heading-size-sm","weight-light","heading-lh-sm","heading-ls-sm",e),"heading-sm-regular":it("heading-size-sm","weight-regular","heading-lh-sm","heading-ls-sm",e),"heading-sm-semibold":it("heading-size-sm","weight-semibold","heading-lh-sm","heading-ls-sm",e),"heading-sm-bold":it("heading-size-sm","weight-bold","heading-lh-sm","heading-ls-sm",e),"heading-xs-light":it("heading-size-xs","weight-light","heading-lh-xs","heading-ls-xs",e),"heading-xs-regular":it("heading-size-xs","weight-regular","heading-lh-xs","heading-ls-xs",e),"heading-xs-semibold":it("heading-size-xs","weight-semibold","heading-lh-xs","heading-ls-xs",e),"heading-xs-bold":it("heading-size-xs","weight-bold","heading-lh-xs","heading-ls-xs",e),"body-baseline-light":it("body-size-baseline","weight-light","body-lh-baseline","body-ls-baseline",e),"body-baseline-regular":it("body-size-baseline","weight-regular","body-lh-baseline","body-ls-baseline",e),"body-baseline-semibold":it("body-size-baseline","weight-semibold","body-lh-baseline","body-ls-baseline",e),"body-baseline-bold":it("body-size-baseline","weight-bold","body-lh-baseline","body-ls-baseline",e),"body-md-light":it("body-size-md","weight-light","body-lh-md","body-ls-md",e),"body-md-regular":it("body-size-md","weight-regular","body-lh-md","body-ls-md",e),"body-md-semibold":it("body-size-md","weight-semibold","body-lh-md","body-ls-md",e),"body-md-bold":it("body-size-md","weight-bold","body-lh-md","body-ls-md",e),"body-sm-light":it("body-size-sm","weight-light","body-lh-sm","body-ls-sm",e),"body-sm-regular":it("body-size-sm","weight-regular","body-lh-sm","body-ls-sm",e),"body-sm-semibold":it("body-size-sm","weight-semibold","body-lh-sm","body-ls-sm",e),"body-sm-bold":it("body-size-sm","weight-bold","body-lh-sm","body-ls-sm",e),"body-xs-light":it("body-size-xs","weight-light","body-lh-xs","body-ls-xs",e),"body-xs-regular":it("body-size-xs","weight-regular","body-lh-xs","body-ls-xs",e),"body-xs-semibold":it("body-size-xs","weight-semibold","body-lh-xs","body-ls-xs",e),"body-xs-bold":it("body-size-xs","weight-bold","body-lh-xs","body-ls-xs",e),"form-label":it("form-label-size","weight-semibold","form-label-lh","form-label-ls",e),"form-description":it("form-description-size","weight-regular","form-description-lh","form-description-ls",e)}),at=ot({disableLigatures:!0}),st=ot(),lt=ot({disableLigatures:!0}),dt=ot({disableLigatures:!0}),ct=ot({disableLigatures:!0}),ut={collections:{default:st,bookingsg:at,mylegacy:st,pa:lt,a11yplayground:dt,supportgowhere:ct,sgwdigitallobby:ct,imda:ot({disableLigatures:!0}),spf:ot({disableLigatures:!0}),oneservice:ot()},defaultValue:"default"},gt=e=>r=>{var n;const t=r.theme,i=Qr(ut,null==t?void 0:t.fontScheme),o=(null===(n=null==t?void 0:t.overrides)||void 0===n?void 0:n.font)?Kr(i,e,t.overrides.font):i[e];return"function"==typeof o?o(r):o},mt={"heading-xxl-light":gt("heading-xxl-light"),"heading-xxl-regular":gt("heading-xxl-regular"),"heading-xxl-semibold":gt("heading-xxl-semibold"),"heading-xxl-bold":gt("heading-xxl-bold"),"heading-xl-light":gt("heading-xl-light"),"heading-xl-regular":gt("heading-xl-regular"),"heading-xl-semibold":gt("heading-xl-semibold"),"heading-xl-bold":gt("heading-xl-bold"),"heading-lg-light":gt("heading-lg-light"),"heading-lg-regular":gt("heading-lg-regular"),"heading-lg-semibold":gt("heading-lg-semibold"),"heading-lg-bold":gt("heading-lg-bold"),"heading-md-light":gt("heading-md-light"),"heading-md-regular":gt("heading-md-regular"),"heading-md-semibold":gt("heading-md-semibold"),"heading-md-bold":gt("heading-md-bold"),"heading-sm-light":gt("heading-sm-light"),"heading-sm-regular":gt("heading-sm-regular"),"heading-sm-semibold":gt("heading-sm-semibold"),"heading-sm-bold":gt("heading-sm-bold"),"heading-xs-light":gt("heading-xs-light"),"heading-xs-regular":gt("heading-xs-regular"),"heading-xs-semibold":gt("heading-xs-semibold"),"heading-xs-bold":gt("heading-xs-bold"),"body-baseline-light":gt("body-baseline-light"),"body-baseline-regular":gt("body-baseline-regular"),"body-baseline-semibold":gt("body-baseline-semibold"),"body-baseline-bold":gt("body-baseline-bold"),"body-md-light":gt("body-md-light"),"body-md-regular":gt("body-md-regular"),"body-md-semibold":gt("body-md-semibold"),"body-md-bold":gt("body-md-bold"),"body-sm-light":gt("body-sm-light"),"body-sm-regular":gt("body-sm-regular"),"body-sm-semibold":gt("body-sm-semibold"),"body-sm-bold":gt("body-sm-bold"),"body-xs-light":gt("body-xs-light"),"body-xs-regular":gt("body-xs-regular"),"body-xs-semibold":gt("body-xs-semibold"),"body-xs-bold":gt("body-xs-bold"),"form-label":gt("form-label"),"form-description":gt("form-description")},bt={collections:{default:{"duration-150":"150ms","duration-250":"250ms","duration-350":"350ms","duration-500":"500ms","duration-800":"800ms","duration-1000":"1000ms","ease-default":"cubic-bezier(0.45, 0.05, 0.55, 0.95)","ease-standard":"cubic-bezier(0.86, 0, 0.07, 1)","ease-entrance":"cubic-bezier(0.18, 0.13, 0, 1)","ease-exit":"cubic-bezier(1, 0, 0.8, 0.85)"}},defaultValue:"default"},ht=e=>r=>{var n;const t=r.theme,i=Qr(bt,null==t?void 0:t.motionScheme);return(null===(n=null==t?void 0:t.overrides)||void 0===n?void 0:n.motion)?Kr(i,e,t.overrides.motion):i[e]},yt={"duration-150":ht("duration-150"),"duration-250":ht("duration-250"),"duration-350":ht("duration-350"),"duration-500":ht("duration-500"),"duration-800":ht("duration-800"),"duration-1000":ht("duration-1000"),"ease-default":ht("ease-default"),"ease-standard":ht("ease-standard"),"ease-entrance":ht("ease-entrance"),"ease-exit":ht("ease-exit")},pt=(e,r,n)=>t=>{const i=Bn(r)(t)||fn(r)(t);return`${e} rgba(from ${i} r g b / ${100*n}%)`},ft={collections:{default:{"xs-subtle":pt("0 0 4px 1px","neutral-50",.24),"xs-strong":pt("0 0 4px 1px","neutral-50",.5),"xs-focus-strong":pt("0 0 4px 1px","border-focus",.5),"xs-error-strong":pt("0 0 4px 1px","border-error",.5),"sm-subtle":pt("0 2px 4px 0","neutral-50",.24),"sm-strong":pt("0 2px 4px 0","neutral-50",.5),"md-subtle":pt("0 2px 8px 0","neutral-50",.24),"md-strong":pt("0 2px 8px 0","neutral-50",.5),"lg-subtle":pt("0 2px 12px 1px","neutral-50",.24),"lg-strong":pt("0 2px 12px 1px","neutral-50",.5)}},defaultValue:"default"},xt=e=>r=>{var n;const t=r.theme,i=Qr(ft,null==t?void 0:t.shadowScheme),o=(null===(n=null==t?void 0:t.overrides)||void 0===n?void 0:n.shadow)?Kr(i,e,t.overrides.shadow):i[e];return"function"==typeof o?o(r):o},vt={"xs-subtle":xt("xs-subtle"),"xs-strong":xt("xs-strong"),"xs-focus-strong":xt("xs-focus-strong"),"xs-error-strong":xt("xs-error-strong"),"sm-subtle":xt("sm-subtle"),"sm-strong":xt("sm-strong"),"md-subtle":xt("md-subtle"),"md-strong":xt("md-strong"),"lg-subtle":xt("lg-subtle"),"lg-strong":xt("lg-strong")},Ft={collections:{default:{"spacing-0":0,"spacing-4":4,"spacing-8":8,"spacing-12":12,"spacing-16":16,"spacing-20":20,"spacing-24":24,"spacing-32":32,"spacing-40":40,"spacing-48":48,"spacing-64":64,"spacing-72":72,"layout-xs":8,"layout-sm":16,"layout-md":24,"layout-lg":32,"layout-xl":48,"layout-xxl":64,"layout-xxxl":128}},defaultValue:"default"},wt=e=>r=>{var n;const t=r.theme,i=Qr(Ft,null==t?void 0:t.spacingScheme);return(null===(n=null==t?void 0:t.overrides)||void 0===n?void 0:n.spacing)?`${Kr(i,e,t.overrides.spacing)}px`:`${i[e]}px`},$t={"spacing-0":wt("spacing-0"),"spacing-4":wt("spacing-4"),"spacing-8":wt("spacing-8"),"spacing-12":wt("spacing-12"),"spacing-16":wt("spacing-16"),"spacing-20":wt("spacing-20"),"spacing-24":wt("spacing-24"),"spacing-32":wt("spacing-32"),"spacing-40":wt("spacing-40"),"spacing-48":wt("spacing-48"),"spacing-64":wt("spacing-64"),"spacing-72":wt("spacing-72"),"layout-xs":wt("layout-xs"),"layout-sm":wt("layout-sm"),"layout-md":wt("layout-md"),"layout-lg":wt("layout-lg"),"layout-xl":wt("layout-xl"),"layout-xxl":wt("layout-xxl"),"layout-xxxl":wt("layout-xxxl")},Et=(e,r)=>Object.assign(Object.assign({},e),{colourMode:r}),Ct=Object.assign(Object.assign({},An),{Primitive:xn}),Dt=Object.assign(Object.assign({},mt),{Spec:tt}),Bt=yt,At=Object.assign(Object.assign({},nn),{Util:On}),St=$t,kt=Wn,zt=vt,Ot=Tn,Mt=Ln,_t={colourScheme:"lifesg",fontScheme:"default",motionScheme:"default",borderScheme:"default",spacingScheme:"default",radiusScheme:"default",shadowScheme:"default",breakpointScheme:"default",resourceScheme:"lifesg",componentScheme:"lifesg",_v2:{colorScheme:"base",textStyleScheme:"base",designTokenScheme:"base",resourceScheme:"base"}},Tt={colourScheme:"bookingsg",fontScheme:"bookingsg",motionScheme:"default",borderScheme:"default",spacingScheme:"default",radiusScheme:"default",shadowScheme:"default",breakpointScheme:"default",resourceScheme:"bookingsg",_v2:{colorScheme:"bookingsg",textStyleScheme:"base",designTokenScheme:"base",resourceScheme:"bookingsg"}},jt={colourScheme:"ccube",fontScheme:"default",motionScheme:"default",borderScheme:"default",spacingScheme:"default",radiusScheme:"default",shadowScheme:"default",breakpointScheme:"default",resourceScheme:"ccube",_v2:{colorScheme:"ccube",textStyleScheme:"base",designTokenScheme:"base",resourceScheme:"ccube"}},Lt={colourScheme:"mylegacy",fontScheme:"mylegacy",motionScheme:"default",borderScheme:"default",spacingScheme:"default",radiusScheme:"default",shadowScheme:"default",breakpointScheme:"default",resourceScheme:"mylegacy",_v2:{colorScheme:"mylegacy",textStyleScheme:"base",designTokenScheme:"base",resourceScheme:"mylegacy"}},Yt={colourScheme:"rbs",fontScheme:"default",motionScheme:"default",borderScheme:"default",spacingScheme:"default",radiusScheme:"default",shadowScheme:"default",breakpointScheme:"default",resourceScheme:"rbs",_v2:{colorScheme:"rbs",textStyleScheme:"base",designTokenScheme:"rbs",resourceScheme:"rbs"}},It={colourScheme:"oneservice",fontScheme:"oneservice",motionScheme:"default",borderScheme:"default",spacingScheme:"default",radiusScheme:"default",shadowScheme:"default",breakpointScheme:"default",resourceScheme:"oneservice"},Wt={colourScheme:"pa",fontScheme:"pa",motionScheme:"default",borderScheme:"default",spacingScheme:"default",radiusScheme:"default",shadowScheme:"default",breakpointScheme:"default",resourceScheme:"pa",componentScheme:"pa"},Ht={colourScheme:"a11yplayground",fontScheme:"a11yplayground",motionScheme:"default",borderScheme:"default",spacingScheme:"default",radiusScheme:"default",shadowScheme:"default",breakpointScheme:"default",resourceScheme:"a11yplayground",componentScheme:"a11yplayground"},Rt={colourScheme:"supportgowhere",fontScheme:"supportgowhere",motionScheme:"default",borderScheme:"default",spacingScheme:"default",radiusScheme:"default",shadowScheme:"default",breakpointScheme:"default",resourceScheme:"supportgowhere",componentScheme:"default"},Pt={colourScheme:"supportgowhere",fontScheme:"sgwdigitallobby",motionScheme:"default",borderScheme:"default",spacingScheme:"default",radiusScheme:"default",shadowScheme:"default",breakpointScheme:"default",resourceScheme:"supportgowhere",componentScheme:"default"},Nt={colourScheme:"imda",fontScheme:"imda",motionScheme:"default",borderScheme:"default",spacingScheme:"default",radiusScheme:"default",shadowScheme:"default",breakpointScheme:"default",resourceScheme:"imda",componentScheme:"default"},Vt={colourScheme:"spf",fontScheme:"spf",motionScheme:"default",borderScheme:"default",spacingScheme:"default",radiusScheme:"spf",shadowScheme:"default",breakpointScheme:"default",resourceScheme:"spf",componentScheme:"spf"};Object.assign(Object.assign({},_t),{light:Et(_t,"light"),dark:Et(_t,"dark")}),Object.assign(Object.assign({},Tt),{light:Et(Tt,"light"),dark:Et(Tt,"dark")}),Object.assign(Object.assign({},jt),{light:Et(jt,"light"),dark:Et(jt,"dark")}),Object.assign(Object.assign({},Lt),{light:Et(Lt,"light"),dark:Et(Lt,"dark")}),Object.assign(Object.assign({},Yt),{light:Et(Yt,"light"),dark:Et(Yt,"dark")}),Object.assign(Object.assign({},It),{light:Et(It,"light"),dark:Et(It,"dark")}),Object.assign(Object.assign({},Wt),{light:Et(Wt,"light"),dark:Et(Wt,"dark")}),Object.assign(Object.assign({},Ht),{light:Et(Ht,"light"),dark:Et(Ht,"dark")}),Object.assign(Object.assign({},Rt),{light:Et(Rt,"light"),dark:Et(Rt,"dark")}),Object.assign(Object.assign({},Pt),{light:Et(Pt,"light"),dark:Et(Pt,"dark")}),Object.assign(Object.assign({},Nt),{light:Et(Nt,"light"),dark:Et(Nt,"dark")}),Object.assign(Object.assign({},Vt),{light:Et(Vt,"light"),dark:Et(Vt,"dark")});const Zt=(e,r,n=!1)=>m`
        ${Dt[`${e}-${r}`]}
        ${n?"margin-bottom: 1.05em;":"margin-bottom: 0;"}
    `,Xt=e=>{if(e)return m`
            ${r=e,m`
    display: -webkit-box;
    -webkit-line-clamp: ${r};
    -webkit-box-orient: vertical;
    overflow: hidden;
`}
        `;var r},Ut=(e,r,n,t,i)=>m`
    ${Zt(e,r||"regular",t)}
    ${((e=!1,r=!1,n)=>r?m`
            display: block;
            ${Xt(n)}
        `:e?m`
            display: inline;
        `:m`
            display: block;
            ${Xt(n)}
        `)(n,t,i)}
    color: ${Ct.text};
`,Jt=g.div`
    ${e=>Ut(e.$textStyle,e.$weight,e.$inline,e.$paragraph,e.$maxLines)}
`,qt=g.a`
    ${e=>{var r;return m`
        ${Zt(e.$textStyle,e.$weight||"regular")}
        color: ${Ct.hyperlink};
        text-decoration: ${null!==(r=e.$underlineStyle)&&void 0!==r?r:"underline"};

        &:hover,
        &:active,
        &:focus {
            color: ${Ct["text-hover"]};
        }
    `}}
`,Gt=g(y)`
    height: 1lh;
    width: 1em;
    margin-left: 0.4em;
    vertical-align: middle;
`;var Kt;!function(n){const i=(r,n,i)=>{const o=(t,i)=>{var{weight:o,inline:a,paragraph:s,maxLines:l}=t,d=S(t,["weight","inline","paragraph","maxLines"]);return e(Jt,Object.assign({ref:i,as:a?"span":r,$textStyle:n,$weight:o,$inline:a,$paragraph:s,$maxLines:l},d))};return o.displayName=`Typography.${i}`,t.forwardRef(o)};n.HeadingXXL=i("h1","heading-xxl","HeadingXXL"),n.HeadingXL=i("h2","heading-xl","HeadingXL"),n.HeadingLG=i("h3","heading-lg","HeadingLG"),n.HeadingMD=i("h4","heading-md","HeadingMD"),n.HeadingSM=i("h5","heading-sm","HeadingSM"),n.HeadingXS=i("h6","heading-xs","HeadingXS");const o=(r,n)=>{const i=(n,t)=>{var{weight:i,inline:o,paragraph:a,maxLines:s}=n,l=S(n,["weight","inline","paragraph","maxLines"]);return e(Jt,Object.assign({ref:t,as:o?"span":"p",$textStyle:r,$weight:i,$inline:o,$paragraph:a,$maxLines:s},l))};return i.displayName=`Typography.${n}`,t.forwardRef(i)};n.BodyBL=o("body-baseline","BodyBL"),n.BodyMD=o("body-md","BodyMD"),n.BodySM=o("body-sm","BodySM"),n.BodyXS=o("body-xs","BodyXS");const a=(n,i)=>{const o=(t,i)=>{var{weight:o,children:a,external:s,underlineStyle:l="underline"}=t,d=S(t,["weight","children","external","underlineStyle"]);return r(qt,Object.assign({ref:i,$textStyle:n,$weight:o,$underlineStyle:l},d,{children:[a,s&&e(Gt,{})]}))};return o.displayName=`Typography.${i}`,t.forwardRef(o)};n.LinkBL=a("body-baseline","LinkBL"),n.LinkMD=a("body-md","LinkMD"),n.LinkSM=a("body-sm","LinkSM"),n.LinkXS=a("body-xs","LinkXS")}(Kt||(Kt={}));const Qt=g.div`
    border-radius: ${kt.md};
    background: ${Ct.bg};
    padding: ${St["spacing-16"]} ${St["spacing-32"]};
    ${e=>{var r;return"dark"===(null===(r=e.theme)||void 0===r?void 0:r.colourMode)?m`
                  border: ${At["width-010"]} ${At.solid}
                      ${Ct.border};
              `:m`
                  box-shadow: ${zt["md-subtle"]};
              `}}
`,ei=g.button`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: ${St["spacing-24"]};
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

        ${({$highlight:e})=>e&&m`
                background-color: ${Ct["bg-hover-neutral"]};
            `}
    }
`,ri=t.forwardRef(((r,n)=>{var{children:t,focusHighlight:i=!0,focusOutline:o="none",type:a="button"}=r,s=S(r,["children","focusHighlight","focusOutline","type"]);return e(ei,Object.assign({ref:n,$outline:o,$highlight:i,type:a},s,{children:t}))})),ni=g.div`
    position: relative;
    display: flex;
    flex-direction: column;
    width: 40rem;
    max-height: 70%;
    background: ${Ct.bg};
    box-shadow: ${zt["lg-strong"]};
    border-radius: ${kt.lg};
    overflow: hidden;

    ${Mt.MaxWidth.md} {
        width: 90%;
        max-height: 70%;
    }
`,ti=g(ri)`
    position: absolute;
    top: var(--close-button-top-inset, ${St["spacing-16"]});
    right: var(--close-button-right-inset, ${St["spacing-16"]});
    padding: 0;
    color: ${Ct.icon};

    svg {
        height: 2rem;
        width: 2rem;
    }

    ${Mt.MaxWidth.sm} {
        right: var(--close-button-right-inset, ${St["spacing-20"]});
    }
`,ii=e=>{const{textSize:r}=e||{};return m`
        // Text styling
        ${r&&Dt[`${r}-regular`]}

        strong {
            font-weight: ${Dt.Spec["weight-semibold"]};
            ${r&&Dt[`${r}-semibold`]};
        }

        p {
            margin: 0;
        }

        // Link styling
        a {
            font-weight: ${Dt.Spec["weight-semibold"]};
            ${r&&Dt[`${r}-semibold`]}
            color: ${Ct.hyperlink};
            text-decoration: underline;

            svg {
                color: ${Ct["icon-primary"]};
                height: 1lh;
                width: 1em;
                margin-left: 0.4rem;
                vertical-align: middle;
            }

            &:hover,
            &:active,
            &:visited,
            &:focus {
                color: ${Ct["hyperlink-hover"]};

                svg {
                    color: ${Ct["icon-hover"]};
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
    `};g.div`
    max-width: 30rem;
    padding: 0 1rem;
    pointer-events: auto;
    outline: none;
`,g((r=>{var{children:n}=r,t=S(r,["children"]);const i=t["data-testid"]||"card";return e(Qt,Object.assign({},t,{"data-testid":i,children:"string"==typeof n?e(Kt.BodyBL,{children:n}):n}))}))`
    color: ${Ct.text};
    ${ii({textSize:"body-md"})}

    ${Mt.MaxWidth.sm} {
        display: none;
    }

    ${({$maxHeight:e})=>void 0!==e&&`\n        max-height: ${e}px;\n    `}

    ${({$overflow:e})=>e&&`\n        overflow-y: ${e};\n    `}

    &::-webkit-scrollbar {
        width: 14px;
    }

    &::-webkit-scrollbar-track {
        background: transparent;
    }

    &::-webkit-scrollbar-thumb {
        background: ${Ct["bg-inverse-subtlest"]};
        border: 5px solid transparent;
        border-radius: ${kt.full};
        background-clip: padding-box;
    }
`,g((n=>{var{id:t="modal-box",children:i,onClose:o,showCloseButton:a=!0}=n,s=S(n,["id","children","onClose","showCloseButton"]);return r(ni,Object.assign({"data-testid":t},s,{onClick:e=>{e.stopPropagation()},children:[a&&e(ti,{onClick:o,"data-testid":"close-button",focusHighlight:!1,focusOutline:"browser",children:e(p,{})}),i]}))}))`
    padding: 3.5rem 1.25rem 2.5rem;
`,g.div`
    overflow-y: scroll;

    &::-webkit-scrollbar {
        display: none; /* Chrome/Safari/Webkit */
    }

    color: ${Ct.text};
    ${ii({textSize:"body-md"})}
`;var oi={exports:{}};oi.exports=function(){var e=1e3,r=6e4,n=36e5,t="millisecond",i="second",o="minute",a="hour",s="day",l="week",d="month",c="quarter",u="year",g="date",m="Invalid Date",b=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,h=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,y={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(e){var r=["th","st","nd","rd"],n=e%100;return"["+e+(r[(n-20)%10]||r[n]||r[0])+"]"}},p=function(e,r,n){var t=String(e);return!t||t.length>=r?e:""+Array(r+1-t.length).join(n)+e},f={s:p,z:function(e){var r=-e.utcOffset(),n=Math.abs(r),t=Math.floor(n/60),i=n%60;return(r<=0?"+":"-")+p(t,2,"0")+":"+p(i,2,"0")},m:function e(r,n){if(r.date()<n.date())return-e(n,r);var t=12*(n.year()-r.year())+(n.month()-r.month()),i=r.clone().add(t,d),o=n-i<0,a=r.clone().add(t+(o?-1:1),d);return+(-(t+(n-i)/(o?i-a:a-i))||0)},a:function(e){return e<0?Math.ceil(e)||0:Math.floor(e)},p:function(e){return{M:d,y:u,w:l,d:s,D:g,h:a,m:o,s:i,ms:t,Q:c}[e]||String(e||"").toLowerCase().replace(/s$/,"")},u:function(e){return void 0===e}},x="en",v={};v[x]=y;var F="$isDayjsObject",w=function(e){return e instanceof D||!(!e||!e[F])},$=function e(r,n,t){var i;if(!r)return x;if("string"==typeof r){var o=r.toLowerCase();v[o]&&(i=o),n&&(v[o]=n,i=o);var a=r.split("-");if(!i&&a.length>1)return e(a[0])}else{var s=r.name;v[s]=r,i=s}return!t&&i&&(x=i),i||!t&&x},E=function(e,r){if(w(e))return e.clone();var n="object"==typeof r?r:{};return n.date=e,n.args=arguments,new D(n)},C=f;C.l=$,C.i=w,C.w=function(e,r){return E(e,{locale:r.$L,utc:r.$u,x:r.$x,$offset:r.$offset})};var D=function(){function y(e){this.$L=$(e.locale,null,!0),this.parse(e),this.$x=this.$x||e.x||{},this[F]=!0}var p=y.prototype;return p.parse=function(e){this.$d=function(e){var r=e.date,n=e.utc;if(null===r)return new Date(NaN);if(C.u(r))return new Date;if(r instanceof Date)return new Date(r);if("string"==typeof r&&!/Z$/i.test(r)){var t=r.match(b);if(t){var i=t[2]-1||0,o=(t[7]||"0").substring(0,3);return n?new Date(Date.UTC(t[1],i,t[3]||1,t[4]||0,t[5]||0,t[6]||0,o)):new Date(t[1],i,t[3]||1,t[4]||0,t[5]||0,t[6]||0,o)}}return new Date(r)}(e),this.init()},p.init=function(){var e=this.$d;this.$y=e.getFullYear(),this.$M=e.getMonth(),this.$D=e.getDate(),this.$W=e.getDay(),this.$H=e.getHours(),this.$m=e.getMinutes(),this.$s=e.getSeconds(),this.$ms=e.getMilliseconds()},p.$utils=function(){return C},p.isValid=function(){return!(this.$d.toString()===m)},p.isSame=function(e,r){var n=E(e);return this.startOf(r)<=n&&n<=this.endOf(r)},p.isAfter=function(e,r){return E(e)<this.startOf(r)},p.isBefore=function(e,r){return this.endOf(r)<E(e)},p.$g=function(e,r,n){return C.u(e)?this[r]:this.set(n,e)},p.unix=function(){return Math.floor(this.valueOf()/1e3)},p.valueOf=function(){return this.$d.getTime()},p.startOf=function(e,r){var n=this,t=!!C.u(r)||r,c=C.p(e),m=function(e,r){var i=C.w(n.$u?Date.UTC(n.$y,r,e):new Date(n.$y,r,e),n);return t?i:i.endOf(s)},b=function(e,r){return C.w(n.toDate()[e].apply(n.toDate("s"),(t?[0,0,0,0]:[23,59,59,999]).slice(r)),n)},h=this.$W,y=this.$M,p=this.$D,f="set"+(this.$u?"UTC":"");switch(c){case u:return t?m(1,0):m(31,11);case d:return t?m(1,y):m(0,y+1);case l:var x=this.$locale().weekStart||0,v=(h<x?h+7:h)-x;return m(t?p-v:p+(6-v),y);case s:case g:return b(f+"Hours",0);case a:return b(f+"Minutes",1);case o:return b(f+"Seconds",2);case i:return b(f+"Milliseconds",3);default:return this.clone()}},p.endOf=function(e){return this.startOf(e,!1)},p.$set=function(e,r){var n,l=C.p(e),c="set"+(this.$u?"UTC":""),m=(n={},n[s]=c+"Date",n[g]=c+"Date",n[d]=c+"Month",n[u]=c+"FullYear",n[a]=c+"Hours",n[o]=c+"Minutes",n[i]=c+"Seconds",n[t]=c+"Milliseconds",n)[l],b=l===s?this.$D+(r-this.$W):r;if(l===d||l===u){var h=this.clone().set(g,1);h.$d[m](b),h.init(),this.$d=h.set(g,Math.min(this.$D,h.daysInMonth())).$d}else m&&this.$d[m](b);return this.init(),this},p.set=function(e,r){return this.clone().$set(e,r)},p.get=function(e){return this[C.p(e)]()},p.add=function(t,c){var g,m=this;t=Number(t);var b=C.p(c),h=function(e){var r=E(m);return C.w(r.date(r.date()+Math.round(e*t)),m)};if(b===d)return this.set(d,this.$M+t);if(b===u)return this.set(u,this.$y+t);if(b===s)return h(1);if(b===l)return h(7);var y=(g={},g[o]=r,g[a]=n,g[i]=e,g)[b]||1,p=this.$d.getTime()+t*y;return C.w(p,this)},p.subtract=function(e,r){return this.add(-1*e,r)},p.format=function(e){var r=this,n=this.$locale();if(!this.isValid())return n.invalidDate||m;var t=e||"YYYY-MM-DDTHH:mm:ssZ",i=C.z(this),o=this.$H,a=this.$m,s=this.$M,l=n.weekdays,d=n.months,c=n.meridiem,u=function(e,n,i,o){return e&&(e[n]||e(r,t))||i[n].slice(0,o)},g=function(e){return C.s(o%12||12,e,"0")},b=c||function(e,r,n){var t=e<12?"AM":"PM";return n?t.toLowerCase():t};return t.replace(h,(function(e,t){return t||function(e){switch(e){case"YY":return String(r.$y).slice(-2);case"YYYY":return C.s(r.$y,4,"0");case"M":return s+1;case"MM":return C.s(s+1,2,"0");case"MMM":return u(n.monthsShort,s,d,3);case"MMMM":return u(d,s);case"D":return r.$D;case"DD":return C.s(r.$D,2,"0");case"d":return String(r.$W);case"dd":return u(n.weekdaysMin,r.$W,l,2);case"ddd":return u(n.weekdaysShort,r.$W,l,3);case"dddd":return l[r.$W];case"H":return String(o);case"HH":return C.s(o,2,"0");case"h":return g(1);case"hh":return g(2);case"a":return b(o,a,!0);case"A":return b(o,a,!1);case"m":return String(a);case"mm":return C.s(a,2,"0");case"s":return String(r.$s);case"ss":return C.s(r.$s,2,"0");case"SSS":return C.s(r.$ms,3,"0");case"Z":return i}return null}(e)||i.replace(":","")}))},p.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},p.diff=function(t,g,m){var b,h=this,y=C.p(g),p=E(t),f=(p.utcOffset()-this.utcOffset())*r,x=this-p,v=function(){return C.m(h,p)};switch(y){case u:b=v()/12;break;case d:b=v();break;case c:b=v()/3;break;case l:b=(x-f)/6048e5;break;case s:b=(x-f)/864e5;break;case a:b=x/n;break;case o:b=x/r;break;case i:b=x/e;break;default:b=x}return m?b:C.a(b)},p.daysInMonth=function(){return this.endOf(d).$D},p.$locale=function(){return v[this.$L]},p.locale=function(e,r){if(!e)return this.$L;var n=this.clone(),t=$(e,r,!0);return t&&(n.$L=t),n},p.clone=function(){return C.w(this.$d,this)},p.toDate=function(){return new Date(this.valueOf())},p.toJSON=function(){return this.isValid()?this.toISOString():null},p.toISOString=function(){return this.$d.toISOString()},p.toString=function(){return this.$d.toUTCString()},y}(),B=D.prototype;return E.prototype=B,[["$ms",t],["$s",i],["$m",o],["$H",a],["$W",s],["$M",d],["$y",u],["$D",g]].forEach((function(e){B[e[1]]=function(r){return this.$g(r,e[0],e[1])}})),E.extend=function(e,r){return e.$i||(e(r,D,E),e.$i=!0),E},E.locale=$,E.isDayjs=w,E.unix=function(e){return E(1e3*e)},E.en=v[x],E.Ls=v,E.p={},E}();var ai=z(oi.exports),si={exports:{}};si.exports=function(){var e={LTS:"h:mm:ss A",LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D, YYYY",LLL:"MMMM D, YYYY h:mm A",LLLL:"dddd, MMMM D, YYYY h:mm A"},r=/(\[[^[]*\])|([-_:/.,()\s]+)|(A|a|YYYY|YY?|MM?M?M?|Do|DD?|hh?|HH?|mm?|ss?|S{1,3}|z|ZZ?)/g,n=/\d\d/,t=/\d\d?/,i=/\d*[^-_:/,()\s\d]+/,o={},a=function(e){return(e=+e)+(e>68?1900:2e3)},s=function(e){return function(r){this[e]=+r}},l=[/[+-]\d\d:?(\d\d)?|Z/,function(e){(this.zone||(this.zone={})).offset=function(e){if(!e)return 0;if("Z"===e)return 0;var r=e.match(/([+-]|\d\d)/g),n=60*r[1]+(+r[2]||0);return 0===n?0:"+"===r[0]?-n:n}(e)}],d=function(e){var r=o[e];return r&&(r.indexOf?r:r.s.concat(r.f))},c=function(e,r){var n,t=o.meridiem;if(t){for(var i=1;i<=24;i+=1)if(e.indexOf(t(i,0,r))>-1){n=i>12;break}}else n=e===(r?"pm":"PM");return n},u={A:[i,function(e){this.afternoon=c(e,!1)}],a:[i,function(e){this.afternoon=c(e,!0)}],S:[/\d/,function(e){this.milliseconds=100*+e}],SS:[n,function(e){this.milliseconds=10*+e}],SSS:[/\d{3}/,function(e){this.milliseconds=+e}],s:[t,s("seconds")],ss:[t,s("seconds")],m:[t,s("minutes")],mm:[t,s("minutes")],H:[t,s("hours")],h:[t,s("hours")],HH:[t,s("hours")],hh:[t,s("hours")],D:[t,s("day")],DD:[n,s("day")],Do:[i,function(e){var r=o.ordinal,n=e.match(/\d+/);if(this.day=n[0],r)for(var t=1;t<=31;t+=1)r(t).replace(/\[|\]/g,"")===e&&(this.day=t)}],M:[t,s("month")],MM:[n,s("month")],MMM:[i,function(e){var r=d("months"),n=(d("monthsShort")||r.map((function(e){return e.slice(0,3)}))).indexOf(e)+1;if(n<1)throw new Error;this.month=n%12||n}],MMMM:[i,function(e){var r=d("months").indexOf(e)+1;if(r<1)throw new Error;this.month=r%12||r}],Y:[/[+-]?\d+/,s("year")],YY:[n,function(e){this.year=a(e)}],YYYY:[/\d{4}/,s("year")],Z:l,ZZ:l};function g(n){var t,i;t=n,i=o&&o.formats;for(var a=(n=t.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g,(function(r,n,t){var o=t&&t.toUpperCase();return n||i[t]||e[t]||i[o].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g,(function(e,r,n){return r||n.slice(1)}))}))).match(r),s=a.length,l=0;l<s;l+=1){var d=a[l],c=u[d],g=c&&c[0],m=c&&c[1];a[l]=m?{regex:g,parser:m}:d.replace(/^\[|\]$/g,"")}return function(e){for(var r={},n=0,t=0;n<s;n+=1){var i=a[n];if("string"==typeof i)t+=i.length;else{var o=i.regex,l=i.parser,d=e.slice(t),c=o.exec(d)[0];l.call(r,c),e=e.replace(c,"")}}return function(e){var r=e.afternoon;if(void 0!==r){var n=e.hours;r?n<12&&(e.hours+=12):12===n&&(e.hours=0),delete e.afternoon}}(r),r}}return function(e,r,n){n.p.customParseFormat=!0,e&&e.parseTwoDigitYear&&(a=e.parseTwoDigitYear);var t=r.prototype,i=t.parse;t.parse=function(e){var r=e.date,t=e.utc,a=e.args;this.$u=t;var s=a[1];if("string"==typeof s){var l=!0===a[2],d=!0===a[3],c=l||d,u=a[2];d&&(u=a[2]),o=this.$locale(),!l&&u&&(o=n.Ls[u]),this.$d=function(e,r,n){try{if(["x","X"].indexOf(r)>-1)return new Date(("X"===r?1e3:1)*e);var t=g(r)(e),i=t.year,o=t.month,a=t.day,s=t.hours,l=t.minutes,d=t.seconds,c=t.milliseconds,u=t.zone,m=new Date,b=a||(i||o?1:m.getDate()),h=i||m.getFullYear(),y=0;i&&!o||(y=o>0?o-1:m.getMonth());var p=s||0,f=l||0,x=d||0,v=c||0;return u?new Date(Date.UTC(h,y,b,p,f,x,v+60*u.offset*1e3)):n?new Date(Date.UTC(h,y,b,p,f,x,v)):new Date(h,y,b,p,f,x,v)}catch(e){return new Date("")}}(r,s,t),this.init(),u&&!0!==u&&(this.$L=this.locale(u).$L),c&&r!=this.format(s)&&(this.$d=new Date("")),o={}}else if(s instanceof Array)for(var m=s.length,b=1;b<=m;b+=1){a[1]=s[b-1];var h=n.apply(this,a);if(h.isValid()){this.$d=h.$d,this.$L=h.$L,this.init();break}b===m&&(this.$d=new Date(""))}else i.call(this,e)}}}();var li=z(si.exports),di={exports:{}};di.exports=function(e,r,n){r.prototype.isBetween=function(e,r,t,i){var o=n(e),a=n(r),s="("===(i=i||"()")[0],l=")"===i[1];return(s?this.isAfter(o,t):!this.isBefore(o,t))&&(l?this.isBefore(a,t):!this.isAfter(a,t))||(s?this.isBefore(o,t):!this.isAfter(o,t))&&(l?this.isAfter(a,t):!this.isBefore(a,t))}};var ci=z(di.exports),ui={exports:{}};ui.exports=function(e,r){r.prototype.isSameOrAfter=function(e,r){return this.isSame(e,r)||this.isAfter(e,r)}};var gi=z(ui.exports),mi={exports:{}};mi.exports=function(e,r){r.prototype.isSameOrBefore=function(e,r){return this.isSame(e,r)||this.isBefore(e,r)}};var bi,hi,yi,pi=z(mi.exports),fi={exports:{}},xi=z(fi.exports=(bi={year:0,month:1,day:2,hour:3,minute:4,second:5},hi={},function(e,r,n){var t,i=function(e,r,n){void 0===n&&(n={});var t=new Date(e),i=function(e,r){void 0===r&&(r={});var n=r.timeZoneName||"short",t=e+"|"+n,i=hi[t];return i||(i=new Intl.DateTimeFormat("en-US",{hour12:!1,timeZone:e,year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit",timeZoneName:n}),hi[t]=i),i}(r,n);return i.formatToParts(t)},o=function(e,r){for(var t=i(e,r),o=[],a=0;a<t.length;a+=1){var s=t[a],l=s.type,d=s.value,c=bi[l];c>=0&&(o[c]=parseInt(d,10))}var u=o[3],g=24===u?0:u,m=o[0]+"-"+o[1]+"-"+o[2]+" "+g+":"+o[4]+":"+o[5]+":000",b=+e;return(n.utc(m).valueOf()-(b-=b%1e3))/6e4},a=r.prototype;a.tz=function(e,r){void 0===e&&(e=t);var i=this.utcOffset(),o=this.toDate(),a=o.toLocaleString("en-US",{timeZone:e}),s=Math.round((o-new Date(a))/1e3/60),l=n(a,{locale:this.$L}).$set("millisecond",this.$ms).utcOffset(15*-Math.round(o.getTimezoneOffset()/15)-s,!0);if(r){var d=l.utcOffset();l=l.add(i-d,"minute")}return l.$x.$timezone=e,l},a.offsetName=function(e){var r=this.$x.$timezone||n.tz.guess(),t=i(this.valueOf(),r,{timeZoneName:e}).find((function(e){return"timezonename"===e.type.toLowerCase()}));return t&&t.value};var s=a.startOf;a.startOf=function(e,r){if(!this.$x||!this.$x.$timezone)return s.call(this,e,r);var t=n(this.format("YYYY-MM-DD HH:mm:ss:SSS"),{locale:this.$L});return s.call(t,e,r).tz(this.$x.$timezone,!0)},n.tz=function(e,r,i){var a=i&&r,s=i||r||t,l=o(+n(),s);if("string"!=typeof e)return n(e).tz(s);var d=function(e,r,n){var t=e-60*r*1e3,i=o(t,n);if(r===i)return[t,r];var a=o(t-=60*(i-r)*1e3,n);return i===a?[t,i]:[e-60*Math.min(i,a)*1e3,Math.max(i,a)]}(n.utc(e,a).valueOf(),l,s),c=d[0],u=d[1],g=n(c).utcOffset(u);return g.$x.$timezone=s,g},n.tz.guess=function(){return Intl.DateTimeFormat().resolvedOptions().timeZone},n.tz.setDefault=function(e){t=e}}));ai.extend(ci),ai.extend(pi),ai.extend(gi),ai.extend(li),ai.extend(xi),function(e){e.generateDays=e=>{const r=e.startOf("month"),n=ai(r).startOf("week");return vi(n).map((e=>Fi(e)))},e.generateDaysForCurrentWeek=e=>{const r=e.startOf("week");return Fi(r)},e.generateMonths=e=>{const r=[];for(let n=0;n<12;n++){const t=e.month(n);r.push(ai(t))}return r},e.generateDecadeOfYears=e=>{const r=e.year(),n=10*Math.floor(r/10),t=e.year(n),i=[t.subtract(1,"year"),t];for(let e=1;e<11;e++)i.push(t.add(e,"year"));return i},e.getStartEndDecade=e=>{const r=10*Math.floor(+e.format("YYYY")/10);return{beginDecade:r,endDecade:+ai(`${r+9}-01-01`).format("YYYY")}},e.convertTo12HourFormat=e=>{const r=ai(e,"HH:mm");return r.isValid()?r.format("h:mm a"):""},e.isWithinRange=(e,r,n,t="day")=>!r&&!n||(r&&n?e.isBetween(r,n,t,"[]"):r?e.isSameOrAfter(r,t):e.isSameOrBefore(n,t)),e.isPreviousMonthWithinRange=(r,n)=>e.isWithinRange(r.subtract(1,"month"),n,void 0,"month"),e.isPreviousYearWithinRange=(r,n)=>e.isWithinRange(r.subtract(1,"year"),n,void 0,"year"),e.isPreviousDecadeWithinRange=(r,n)=>{const{beginDecade:t}=e.getStartEndDecade(r);return e.isWithinRange(r.year(t).subtract(1,"year"),n,void 0,"year")},e.isNextMonthWithinRange=(r,n)=>e.isWithinRange(r.add(1,"month"),void 0,n,"month"),e.isNextYearWithinRange=(r,n)=>e.isWithinRange(r.add(1,"year"),void 0,n,"year"),e.isNextDecadeWithinRange=(r,n)=>{const{endDecade:t}=e.getStartEndDecade(r);return e.isWithinRange(r.year(t).add(1,"year"),void 0,n,"year")},e.getWeekStartEnd=e=>({start:e.startOf("week").format("YYYY-MM-DD"),end:e.endOf("week").format("YYYY-MM-DD")}),e.getFixedRangeStartEnd=(e,r)=>({start:e.format("YYYY-MM-DD"),end:e.add(r-1,"day").format("YYYY-MM-DD")}),e.isDisabledDay=(r,n,t,i)=>{const o=e.isWithinRange(r,t?ai(t):void 0,i?ai(i):void 0),a=n&&n.includes(r.format("YYYY-MM-DD"));return!o||!!a}}(yi||(yi={}));const vi=e=>{const r=[e];for(let n=1;n<6;n++){const t=e.add(n,"week");r.push(t)}return r},Fi=e=>{const r=[];for(let n=0;n<7;n++){const t=e.add(n,"day");r.push(t)}return r},wi=[1,3,5,7,8,10,12],$i=[4,6,9,11];var Ei,Ci,Di,Bi;!function(e){e.clampDay=(r,n,t)=>{const i=parseInt(r),o=parseInt(n),a=parseInt(t);return 0==i?"1":wi.includes(o)?Math.min(i,31).toString():$i.includes(o)?Math.min(i,30).toString():2===o?e.isLeapYear(a)?Math.min(i,29).toString():Math.min(i,28).toString():r},e.clampMonth=e=>{const r=parseInt(e);return 0==r?"1":r>12?"12":e},e.isLeapYear=e=>e%4==0&&e%100!=0||e%400==0,e.getTimeDiffInMinutes=(e,r,n="HH:mm")=>{const t=ai(e,n);return ai(r,n).diff(t,"minute")},e.toDayjs=e=>e?ai(e):ai(),e.addMinutesToTime=(e,r,n="HH:mm")=>ai(e,n).add(r,"minutes").format(n),e.isSame=(e,r,n="day")=>ai(e).isSame(ai(r),n)}(Ei||(Ei={})),function(e){e.isDateDisabled=(e,r)=>{const{disabledDates:n,minDate:t,maxDate:i}=r;return!!(e&&n&&n.length&&n.includes(e))||(!(!t||!ai(e).isBefore(t,"day"))||!(!i||!ai(e).isAfter(i,"day")))},e.sanitizeInput=e=>{if(e){const n=r(e);if(ai(n,"YYYY-MM-DD",!0).isValid())return n}return""};const r=e=>{const r=e.match(/^(\d{1,4})-(\d{1,2})-(\d{1,2})$/);if(!r)return"";const[,n,t,i]=r;if(n.length<=2||parseInt(n,10)<100)return"";return`${n.padStart(4,"0")}-${t.padStart(2,"0")}-${i.padStart(2,"0")}`}}(Ci||(Ci={})),function(e){e.generate=()=>Math.random().toString(36).substring(2,9)}(Di||(Di={})),function(e){e.transformWithSpaces=(e,r)=>{const n="(.{"+r+"})";return e.replace(/[^\dA-Z]/gi,"").replace(new RegExp(n,"g"),"$1 ").trim()},e.padValue=(e,r)=>{if("0"===e)return r?e:e.padStart(2,"0");if(""===e)return e;return parseInt(e).toString().padStart(2,"0")},e.shouldTruncateToTwoLines=(e,r)=>{const n=Math.floor(r/9);return e.length>=2*n||1===e.split(" ").length&&e.length>n},e.truncateOneLine=(e,r,n,t,i=8)=>{let o=0;r>n&&(o=Math.floor((r-n)/i));const a=t+o;if(a<e.length){const r=Math.floor(a/2);return e.substring(0,r)+" ... "+e.substring(e.length-r,e.length)}return e},e.truncateTwoLines=(e,r,n,t=1.2)=>{const i=Math.floor(2*r/(.6*n))*(2/t);if(e.length<=i)return e;const o=Math.floor(.6*i),a=Math.floor(.2*i);return`${e.substring(0,o)}...${e.substring(e.length-a)}`},e.getTextWidth=(r,n)=>{if("undefined"==typeof document)return 0;const t=(e.getTextWidth.canvas||(e.getTextWidth.canvas=document.createElement("canvas"))).getContext("2d");t.font=n;return t.measureText(r).width},e.maskValue=(e,n)=>{if(!e)return e;const{maskRange:t,unmaskRange:i,maskChar:o="•",maskRegex:a,maskTransformer:s}=n;if(s)return s(e);if(a)return e.replace(a,o);if(t){const{startIndex:n,endIndex:i}=r(t[0],t[1]);return e.substring(0,n)+o.repeat(e.substring(n,i+1).length)+e.substring(i+1)}if(i){const{startIndex:n,endIndex:t}=r(i[0],i[1]);return o.repeat(e.substring(0,n).length)+e.substring(n,t+1)+o.repeat(e.substring(t+1).length)}return e};const r=(e,r)=>e<r?{startIndex:e,endIndex:r}:{startIndex:r,endIndex:e},n=new Intl.PluralRules("en",{type:"ordinal"}),t=new Map([["one","st"],["two","nd"],["few","rd"],["other","th"]]);e.formatOrdinal=e=>{const r=n.select(e);return`${e}${t.get(r)}`},e.getMaskedDescription=(e,r,n)=>{if(!e||"masked"!==r||!n)return"";const[t,i]=n,o=t>0,a=i<e.length-1,s=o?e.substring(0,t):"",l=a?e.substring(i+1):"";return o&&a?`Starting with ${s} and ending with ${l}`:o?`Starting with ${s}`:a?`Ending with ${l}`:""}}(Bi||(Bi={}));const Ai=g.div`
    position: fixed;
    left: 0;
    top: 0;
    height: 0;
    width: 0;
    visibility: hidden;
    z-index: ${e=>e.$zIndex};

    ${e=>{if(e.$show)return m`
                height: 100%;
                width: 100vw;
                visibility: visible;
            `}}
`,Si=g.div`
    position: absolute;
    left: 0;
    top: 0;
    background-color: ${e=>e.$stacked?Ct["overlay-subtle"]:Ct["overlay-strong"]};
    backdrop-filter: ${e=>(e=>{let r="";return e&&(r+="blur(10px)"),r.length>0?r:"none"})(e.$backgroundBlur)};
    transition: opacity 200ms ease;

    ${e=>{let r="";return e.$show?r+=m`
                visibility: visible;
                opacity: 1;
                pointer-events: auto;
                height: 100%;
                width: 100vw;
            `:r+=m`
                visibility: hidden;
                opacity: 0;
                transition-delay: ${e.$disableTransition?"0ms":"400ms"};
                pointer-events: none;
                height: 0;
                width: 0;
            `,e.$disableTransition&&(r+=m`
                transition: none;
            `),r}};
`;var ki;!function(e){e.Ready="overlay-context-ready",e.Change="overlay-context-change"}(ki||(ki={}));const zi=({show:r=!1,rootId:n,onOverlayClick:s,children:l,backgroundOpacity:d,backgroundBlur:c=!0,disableTransition:u=!1,enableOverlayClick:g=!1,zIndex:m,id:b})=>{const[h,y]=o(null),[p,x]=o(),[w]=o((()=>Di.generate())),$=v(),E=a(),C=a(null),D=l&&t.cloneElement(l,{ref:C}),A=b?`lifesg-ds-overlay-root-${b}`:"lifesg-ds-overlay-root",S=null!=m?m:p?99999:99998;(e=>{const r=f();i((()=>{if(!r)return;const n={zIndex:e};r.events.emit(ki.Change,n)}),[r,e]),i((()=>{if(!r)return;const n=()=>{const n={zIndex:e};r.events.emit(ki.Change,n)};return null==r||r.events.on(ki.Ready,n),()=>null==r?void 0:r.events.off(ki.Ready,n)}),[r,e])})(S),i((()=>(_(),y(O()),()=>{Y(),j().length<1&&(z()&&(I("remove"),H()),T("remove"))})),[]),i((()=>{if(r){const e=M();k(e),L(),z()&&1===j().length&&(W(),I("add"));const r=setTimeout((()=>{T("add")}),200);return()=>clearTimeout(r)}{Y(),z()&&j().length<1&&(I("remove"),H());const e=setTimeout((()=>{j().length<1&&T("remove")}),200);return()=>clearTimeout(e)}}),[r]);const k=e=>{E.current=e,x(e)},z=()=>/(iPad|iPhone|iPod)/g.test(navigator.userAgent),O=()=>document&&n?document.getElementById(n):document?document.body:null,M=()=>j().length>0,_=()=>{if(!document.getElementById(Mi)){const e=document.createElement("style");e.id=Mi;const r=document.documentElement.clientWidth,n=window.innerWidth-r;e.innerHTML=`\n\t\t\t\t.${_i} {\n\t\t\t\t\toverflow: hidden;\n\t\t\t\t\tpadding-right: ${n}px !important;\n\t\t\t\t\t-ms-overflow-style: none;\n\t\t\t\t\tscrollbar-width: none;\n\t\t\t\t}\n\n\t\t\t\t.${_i}::-webkit-scrollbar {\n\t\t\t\t\tdisplay: none;\n\t\t\t\t}\n\n\t\t\t\t.${Ti} {\n\t\t\t\t\tposition: fixed;\n\t\t\t\t\ttop: var(${ji}, 0);\n\t\t\t\t\tbottom: 0;\n\t\t\t\t}\n\t\t\t`,document.body.appendChild(e)}},T=e=>{const r=document.body.classList.contains(_i);"add"!==e||r?"remove"===e&&r&&document.body.classList.remove(_i):document.body.classList.add(_i)},j=()=>{const e=document.body.dataset.lifesgDsOverlayOrder;return e?e.split(","):[]},L=()=>{const e=j();document.body.dataset.lifesgDsOverlayOrder=[...e,w].join(",")},Y=()=>{const e=j();document.body.dataset.lifesgDsOverlayOrder=e.filter((e=>e!==w)).join(",")},I=e=>{if(!z())return;const r=document.body.classList.contains(Ti);"add"!==e||r?"remove"===e&&r&&document.body.classList.remove(Ti):document.body.classList.add(Ti)},W=()=>{const e=document.body.style,r=e.top?e.top:window.scrollY+"px";document.body.style.setProperty(ji,r)},H=()=>{if(!z())return;const e=document.body.style.getPropertyValue(ji);requestAnimationFrame((()=>{window.scrollTo({top:parseFloat(e)})}))},R=e=>{var r;const n=null===(r=C.current)||void 0===r?void 0:r.firstChild;n&&n.contains(e.target)||s&&g&&(e.preventDefault(),s())};return h?B.createPortal(e(Ai,{id:A,"data-testid":A,$show:r,$zIndex:S,children:l&&e(F,{id:$,children:e(Si,{"data-testid":"overlay-wrapper",$show:r,$stacked:p,$backgroundBlur:c,$disableTransition:u,onClick:R,children:D})})}),h):null},Oi=r=>e(x,{children:e(zi,Object.assign({},r))}),Mi="lifesg-ds-overlay-stylesheet",_i="lifesg-ds-overlay-open",Ti="lifesg-ds-overlay-scroll-lock",ji="--lifesg-ds-overlay-scroll-y",Li=l({onClose:()=>{}}),Yi=g.div`
    position: relative;
    width: 100%;
    height: 100%;

    overflow: auto;

    ${Mt.MaxWidth.sm} {
        ${e=>m`
                height: calc(
                    ${e.$verticalHeight?`${e.$verticalHeight}px`:"1vh"} * 100
                );
            `}

        top: ${e=>e.$offsetTop||0}px;
    }

    ${e=>m`
        &[data-status="initial"] {
            opacity: 0;
            ${e.$animationFrom}: -3%;
        }

        &[data-status="open"] {
            opacity: 1;
            ${e.$animationFrom}: 0;
            transition: all ${Bt["duration-250"]}
                ${Bt["ease-entrance"]}
            transition-delay: ${Bt["duration-150"]};
        }

        &[data-status="close"] {
            opacity: 0;
            ${e.$animationFrom}: -3%;
            transition: all ${Bt["duration-250"]}
                ${Bt["ease-exit"]};
        }
    `}
`,Ii=g.div`
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100%;
    pointer-events: none;
`,Wi=g.div`
    pointer-events: auto;
    width: 100%;
    outline: none;
`,Hi=g.div`
    width: 40rem;
    margin: ${St["spacing-64"]} auto;
    background: ${Ct.bg};
    box-shadow: ${zt["xs-strong"]};
    border-radius: ${kt.lg};

    display: flex;
    flex-direction: column-reverse;

    max-width: calc(100% - ${Ot["xxl-margin"]}px * 2);

    ${Mt.MaxWidth.xl} {
        max-width: calc(100% - ${Ot["xl-margin"]}px * 2);
    }

    ${Mt.MaxWidth.lg} {
        max-width: calc(100% - ${Ot["lg-margin"]}px * 2);
    }

    ${Mt.MaxWidth.md} {
        max-width: calc(100% - ${Ot["md-margin"]}px * 2);
    }

    ${Mt.MaxWidth.sm} {
        max-width: calc(100% - ${Ot["sm-margin"]}px * 2);
    }

    ${Mt.MaxWidth.xs} {
        max-width: calc(100% - ${Ot["xs-margin"]}px * 2);
    }

    ${Mt.MaxWidth.xxs} {
        max-width: calc(100% - ${Ot["xxs-margin"]}px * 2);
    }
`,Ri=g.div`
    margin-right: ${St["spacing-16"]};
    margin-left: auto;
    margin-top: ${St["spacing-16"]};
    margin-bottom: ${St["spacing-16"]};
`,Pi=g(ri)`
    padding: 0;
    color: ${Ct.icon};

    svg {
        height: 2rem;
        width: 2rem;
    }
`,Ni=g.div`
    margin-right: ${St["spacing-64"]};
    margin-left: ${St["spacing-64"]};

    ${Mt.MaxWidth.sm} {
        margin-right: ${St["spacing-20"]};
        margin-left: ${St["spacing-20"]};
    }
`,Vi=g.div`
    margin-right: ${St["spacing-64"]};
    margin-left: ${St["spacing-64"]};

    ${Mt.MaxWidth.sm} {
        margin-right: ${St["spacing-20"]};
        margin-left: ${St["spacing-20"]};
    }

    display: flex;
    flex-direction: row-reverse; /* primary button on right */
    column-gap: ${St["spacing-32"]};
    row-gap: ${St["spacing-16"]};

    & > button {
        flex: 1;
    }

    ${Mt.MaxWidth.md} {
        flex-direction: column;
    }
`,Zi=g.div`
    :where(& > ${Ni}:last-child) {
        margin-bottom: ${St["spacing-64"]};
    }

    :where(& > ${Vi}:not(:first-child)) {
        margin-top: ${St["spacing-32"]};
    }

    :where(& > ${Vi}:last-child) {
        margin-bottom: ${St["spacing-64"]};
    }

    ${e=>e.$hasCloseButton?m`
                  :where(& > ${Ni}:first-child),
                  :where(& > ${Vi}:first-child) {
                      margin-top: 0;
                  }
              `:m`
                  :where(& > ${Ni}:first-child),
                  :where(& > ${Vi}:first-child) {
                      margin-top: ${St["spacing-64"]};
                  }
              `}
`,Xi=r=>{var{"data-testid":n="modal-close-button"}=r,t=S(r,["data-testid"]);const{onClose:i}=d(Li);return e(Ri,Object.assign({"data-testid":n},t,{children:e(Pi,{onClick:i,"data-testid":"close-button",focusHighlight:!1,focusOutline:"browser","aria-label":"Close button",children:e(p,{"aria-hidden":!0})})}))};Xi.displayName="ModalV2.CloseButton";const Ui=r=>{var{"data-testid":n="modal-content",children:t}=r,i=S(r,["data-testid","children"]);return e(Ni,Object.assign({"data-testid":n},i,{children:t}))};Ui.displayName="ModalV2.Content";const Ji=e=>{var{"data-testid":n="modal-footer",primaryButton:t,secondaryButton:i}=e,o=S(e,["data-testid","primaryButton","secondaryButton"]);return r(Vi,Object.assign({"data-testid":n},o,{children:[t,i]}))};Ji.displayName="ModalV2.Footer";const qi=e=>{var{id:n,"data-testid":i="modal-card",children:o}=e,a=S(e,["id","data-testid","children"]);const s=e=>t.Children.toArray(o).find((r=>((e,r)=>b(e.type)?e.type.target===r:e.type===r)(r,e))),l=s(Xi),d=s(Ui),c=s(Ji),u=!!l;return r(Hi,Object.assign({id:n,"data-testid":i},a,{onClick:e=>{e.stopPropagation()},children:[r(Zi,{$hasCloseButton:u,children:[d,c]}),u&&l]}))};qi.displayName="ModalV2.Card",Object.assign((r=>{var{id:n,show:t,onClose:a,animationFrom:l="bottom",children:d,enableOverlayClick:c=!0,rootComponentId:u,zIndex:g,onOverlayClick:m,dismissKeyboardOnShow:b=!0,"data-testid":h="modal"}=r,y=S(r,["id","show","onClose","animationFrom","children","enableOverlayClick","rootComponentId","zIndex","onOverlayClick","dismissKeyboardOnShow","data-testid"]);const{verticalHeight:p,offsetTop:f}=(()=>{const[e,r]=o(),[n,t]=o(),a=s((()=>{const e=.01*window.innerHeight;r(e)}),[]),l=s((()=>{if(window.visualViewport){const e=.01*window.visualViewport.height;r(e),t(window.visualViewport.offsetTop)}}),[]);return i((()=>window.visualViewport?(l(),window.visualViewport.addEventListener("resize",l),()=>{var e;null===(e=window.visualViewport)||void 0===e||e.removeEventListener("resize",l)}):(a(),window.addEventListener("resize",a),()=>{window.removeEventListener("resize",a)})),[]),{verticalHeight:e,offsetTop:n}})(),{refs:x,context:v}=w({open:t,onOpenChange:e=>{e||null==a||a()}}),{isMounted:F,status:B}=$(v,{duration:300}),A=E(v,{outsidePress:!1,enabled:!!a}),{getFloatingProps:k}=C([A]);return i((()=>{var e,r;t&&b&&(null===(r=null===(e=document.activeElement)||void 0===e?void 0:e.blur)||void 0===r||r.call(e))}),[b,t]),e(Oi,{"data-testid":`${h}-overlay`,show:F,enableOverlayClick:c,onOverlayClick:m,id:n,rootId:u,zIndex:g,children:e(Yi,Object.assign({$show:F,$animationFrom:l,"data-testid":h,$verticalHeight:p,$offsetTop:f},y,{"data-status":B,children:e(Li.Provider,{value:{onClose:a},children:F&&e(D,{context:v,initialFocus:x.floating,children:e(Ii,{children:e(Wi,Object.assign({ref:x.setFloating},k(),{"aria-modal":!0,role:"dialog",children:d}))})})})}))})}),{Card:qi,CloseButton:Xi,Content:Ui,Footer:Ji}),g.div`
    display: inline;
    width: fit-content;
    cursor: pointer;
    position: relative;
`;const Gi=e=>{switch(e){case"underline":return"text-decoration: underline 1px;";case"underline-dashed":return"text-decoration: underline dashed 1px;"}};g.span`
    color: ${Ct["text-primary"]};
    font-weight: 600;
    text-underline-position: under;

    ${({$defaultStyle:e})=>Gi(e)}

    &:hover,
    &:focus-visible {
        color: ${Ct["text-hover"]};
        ${({$hoverStyle:e})=>Gi(e)}
    }

    svg {
        height: 1lh; // align vertically
        width: 1em; // scale icon with font size
        vertical-align: top;
    }
`,g.span`
    ${e=>!e.$standalone&&"margin-left: 0.25rem;"}
`,g.div`
    padding-left: ${St["spacing-4"]};
    display: inline;
`,g.div`
    margin-bottom: ${St["spacing-8"]};
`,g.label`
    color: ${Ct["text-subtle"]};
    display: inline-block;

    ${Dt["form-label"]}
    ${ii()}
    font-weight: ${Dt.Spec["weight-semibold"]};
`;const Ki=g(A)`
    height: 1lh;
    width: 1em;
    flex-shrink: 0;
    color: ${Ct["icon-error-strong"]};
`,Qi=g.div`
    ${Dt["body-sm-semibold"]}
    display: flex;
    gap: ${St["spacing-4"]};
    margin-top: ${St["spacing-8"]};
`,eo=g.p`
    color: ${Ct["text-error"]};
    margin-bottom: 0;
    outline: none;
`;g.span`
    ${Dt["form-description"]}
    color: ${Ct["text-subtler"]};
    display: block;
`;const ro=n=>r(Qi,{children:[e(Ki,{"aria-hidden":!0}),e(eo,Object.assign({},n))]}),no=g.span`
    clip-path: inset(50%);
    height: 1px;
    width: 1px;
    overflow: hidden;
    position: absolute;
    white-space: nowrap;
`,to=g.div`
    display: inline-block;
    position: relative;
    width: ${({$size:e})=>e?`${e}px`:"1em"};
    height: ${({$size:e})=>e?`${e}px`:"1em"};
    color: ${e=>e.$color||"currentColor"};
`,io=h`
	0% {
	  transform: rotate(0deg);
	}
	100% {
	  transform: rotate(360deg);
	}
`,oo=g.div`
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
    animation: ${io} 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
`,ao=g(oo)`
    animation-delay: -0.45s;
`,so=g(oo)`
    animation-delay: -0.3s;
`,lo=g(oo)`
    animation-delay: -0.15s;
`,co=g.button`
    padding: ${St["spacing-8"]} ${St["spacing-16"]};
    min-width: 4rem;
    border: ${At["width-010"]} ${At.solid} transparent;
    transition: all ${Bt["duration-250"]} ${Bt["ease-default"]};
    border-radius: ${Xn};
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;

    // -----------------------------------------------------------------------------
    // BUTTON STYLE + TEXT COLOR
    // -----------------------------------------------------------------------------
    ${e=>{switch(e.$buttonStyle){case"secondary":return m`
                    background-color: ${Ct.bg};
                    border-color: ${e.$buttonIsDanger?Ct["border-error-strong"]:Gn};

                    color: ${e.$buttonIsDanger?Ct["text-error"]:Kn};

                    &:hover,
                    &:active {
                        @media (pointer: fine) {
                            background-color: ${Ct["bg-hover-neutral"]};
                        }
                    }
                `;case"light":return m`
                    background-color: ${Ct.bg};
                    border-color: ${Ct.border};

                    color: ${e.$buttonIsDanger?Ct["text-error"]:Qn};

                    &:hover,
                    &:active {
                        @media (pointer: fine) {
                            background-color: ${Ct["bg-hover-neutral"]};
                        }
                    }
                `;case"link":return m`
                    background-color: transparent;

                    color: ${e.$buttonIsDanger?Ct["text-error"]:et};
                    &:hover,
                    &:active {
                        @media (pointer: fine) {
                            background-color: ${Ct["bg-hover-neutral"]};
                        }
                    }
                `;case"disabled":return m`
                    background-color: ${Ct["bg-disabled"]};

                    cursor: not-allowed;

                    &:hover {
                        box-shadow: none;
                    }

                    color: ${Ct["text-disabled"]};
                `;default:return m`
                    background-color: ${e.$buttonIsDanger?Ct["bg-error-strong"]:Un};

                    ${Mt.MaxWidth.sm} {
                        width: 100%;
                    }

                    color: ${qn};

                    &:hover,
                    &:active {
                        @media (pointer: fine) {
                            background-color: ${e.$buttonIsDanger?Ct["bg-error-strong-hover"]:Jn};
                        }
                    }
                `}}}

    // -----------------------------------------------------------------------------
	// BUTTON SIZE + TEXT SIZE
	// -----------------------------------------------------------------------------
	${e=>{switch(e.$buttonSizeStyle){case"small":return m`
                    height: 2.5rem;
                    ${Dt["body-md-semibold"]}

                    ${Mt.MaxWidth.xxs} {
                        height: auto;
                    }
                `;case"large":return m`
                    height: 4rem;
                    ${Dt["heading-md-semibold"]}

                    ${Mt.MaxWidth.xxs} {
                        height: auto;
                    }
                `;default:return m`
                    height: 3rem;
                    ${Dt["heading-xs-semibold"]}

                    ${Mt.MaxWidth.xxs} {
                        height: auto;
                    }
                `}}}
`,uo=g((({color:n,className:t,size:i})=>r(to,{className:t,$size:i,$color:n,"data-testid":"component-loading-spinner",children:[e(oo,{id:"inner1"}),e(ao,{id:"inner2"}),e(so,{id:"inner3"}),e(lo,{id:"inner4"})]})))`
    margin-right: ${e=>e.$hasChildren?"0.5rem":"0"};
`,go=e=>t.Children.toArray(e).some((e=>"string"==typeof e?""!==e.trim():null!=e)),mo=(n,t)=>{const{children:i,disabled:o=!1,loading:a=!1,styleType:s="default",danger:l=!1,focusableWhenDisabled:d=!1,onClick:c}=n,u=S(n,["children","disabled","loading","styleType","danger","focusableWhenDisabled","onClick"]),g={$buttonStyle:o?"disabled":s,$buttonSizeStyle:"default",$buttonIsDanger:l};return r(co,Object.assign({ref:t,"data-testid":u["data-testid"]||"button",disabled:o&&!d,"aria-disabled":o,"aria-busy":a,onClick:o?void 0:c},g,u,{children:[a&&e(uo,{$hasChildren:go(i)}),e("span",{children:i})]}))};mo.displayName="Button.Default";const bo=(n,t)=>{const{children:i,disabled:o=!1,loading:a=!1,styleType:s="default",danger:l=!1,focusableWhenDisabled:d=!1,onClick:c}=n,u=S(n,["children","disabled","loading","styleType","danger","focusableWhenDisabled","onClick"]),g={$buttonStyle:o?"disabled":s,$buttonSizeStyle:"small",$buttonIsDanger:l};return r(co,Object.assign({ref:t,"data-testid":u["data-testid"]||"button",disabled:o&&!d,"aria-disabled":o,"aria-busy":a,onClick:o?void 0:c},g,u,{children:[a&&e(uo,{$hasChildren:go(i)}),e("span",{children:i})]}))};bo.displayName="Button.Small";const ho=(n,t)=>{const{children:i,disabled:o=!1,loading:a=!1,styleType:s="default",danger:l=!1,focusableWhenDisabled:d=!1,onClick:c}=n,u=S(n,["children","disabled","loading","styleType","danger","focusableWhenDisabled","onClick"]),g={$buttonStyle:o?"disabled":s,$buttonSizeStyle:"large",$buttonIsDanger:l};return r(co,Object.assign({ref:t,"data-testid":u["data-testid"]||"button",disabled:o&&!d,"aria-disabled":o,"aria-busy":a,onClick:o?void 0:c},g,u,{children:[a&&e(uo,{$hasChildren:go(i)}),e("span",{children:i})]}))};ho.displayName="Button.Large";const yo={Default:t.forwardRef(mo),Small:t.forwardRef(bo),Large:t.forwardRef(ho)},po=m`
    outline-offset: -1px;
    outline: ${At["width-020"]} ${At.solid} ${Ct["border-focus"]};
`,fo=m`
    outline-color: ${Ct["border-focus"]};
`,xo=m`
    outline-color: ${Ct["border-disabled"]};
`,vo=m`
    outline-color: ${Ct["border-error-focus"]};
`,Fo=m`
    outline: none;
`,wo=g.div`
    border: ${At["width-010"]} ${At.solid} ${Ct.border};
    border-radius: ${kt.sm};
    background: ${Ct.bg};

    &:focus-within {
        ${po}
    }
    ${e=>e.$focused&&!e.$noBorder&&po}

    ${e=>e.$readOnly?m`
                border-color: transparent;
                padding: 0;
                background: transparent !important;

                &:focus-within {
                    ${fo}
                }
                ${e.$focused&&fo}
            `:e.$disabled?m`
                background: ${Ct["bg-disabled"]};
                cursor: not-allowed;

                &:focus-within {
                    ${xo}
                }
                ${e.$focused&&xo}
            `:e.$error?m`
                border-color: ${Ct["border-error"]};

                &:focus-within {
                    ${vo}
                }
                ${e.$focused&&vo}
            `:void 0}
    ${e=>{if(e.$noBorder)return m`
                border-color: transparent;
                background: transparent;
                &:focus-within {
                    ${Fo}
                }
            `}}
`;g(wo)`
    display: flex;
    align-items: center;
    position: relative;
    height: max-content;
    width: 100%;
    padding: 0 ${St["spacing-16"]} 0
        ${e=>e.$readOnly?"0":St["spacing-16"]};
    flex-direction: ${e=>"right"===e.$position?"row-reverse":"row"};
`;const $o=g.input`
    ${e=>"small"===e.$variant?Dt["body-md-regular"]:Dt["body-baseline-regular"]}
    color: ${Ct.text};
    display: block;
    background: transparent;
    border: none;
    outline: none;
    box-shadow: none;
    padding: 0;
    margin: 0;

    &:disabled {
        color: ${Ct["text-subtler"]};

        &:hover {
            cursor: not-allowed;
        }
    }

    &::placeholder,
    &::-webkit-input-placeholder {
        color: ${Ct["text-subtler"]};
    }

    // Chrome, Safari, Edge, Opera
    &::-webkit-outer-spin-button,
    &::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
    }

    // Safari (remove top shadow)
    --webkit-appearance: none;

    // Firefox
    --moz-appearance: textfield;
`,Eo=g.button`
    background: transparent;
    border: none;
    outline: none;

    &:focus,
    &:active {
        outline: none;
    }

    &:focus-visible {
        outline: ${At["width-010"]} ${At.solid}
            ${Ct["border-focus"]};
        border-radius: ${kt.sm};
    }
`,Co=g($o)`
    width: 100%;
    height: calc(3rem - 2px); // exclude top and bottom borders

    ${e=>"no-border"!==e.$styleType&&m`
            padding-left: ${e.$visuallyReadOnly?0:St["spacing-16"]};
            padding-right: ${e.$visuallyReadOnly||e.$showClear?0:St["spacing-16"]};
        `}
`,Do=g(Eo)`
    height: auto;
    padding: ${St["spacing-12"]} ${St["spacing-16"]};

    cursor: pointer;
    color: ${Ct.icon};

    ${e=>"no-border"===e.$styleType&&m`
            margin-right: -${St["spacing-12"]};
        `}
`,Bo=g(p)`
    height: 1.25rem;
    width: 1.25rem;
    vertical-align: middle;
`,Ao=g.div`
    display: flex;
    width: 100%;
`,So=g(wo)`
    display: flex;
    align-items: center;
    width: 100%;
`,ko=t.forwardRef(((t,i)=>{var{value:o,spacing:s,type:l,error:d,disabled:u,readOnly:g,onChange:m,onClear:b,allowClear:h=!1,className:y,styleType:p="bordered"}=t,f=S(t,["value","spacing","type","error","disabled","readOnly","onChange","onClear","allowClear","className","styleType"]);const x=((e,r)=>"tel"===e&&!!r)(l,s),v=a(null);c(i,(()=>v.current),[]);const F=function({ref:e,formatter:r}){return()=>{var n;const t=e.current;if(!t)return;const i=t.value,o=r(i),a=null!==(n=t.selectionEnd)&&void 0!==n?n:0,s=i.substring(0,a),l=r(s),d=s.length-l.length,c=Math.max(0,a-d);return{nextValue:o,updateCaretPosition:()=>{t.value=o,t.setSelectionRange(c,c)}}}}({ref:v,formatter:e=>x?Bi.transformWithSpaces(e,s):e}),w=e=>{m&&(x?E(e):m(e))},$=()=>{b&&b(),v&&v.current&&v.current.focus()},E=e=>{const r=F();if(!r)return;const{nextValue:n,updateCaretPosition:t}=r,i=n.replace(/\s/g,"");e.target.value=i,null==m||m(e),t()},C=o?(e=>e?x?Bi.transformWithSpaces(e,s):e:"")(o):o,D=h&&!u&&!g&&!!o,B=()=>r(n,{children:[e(Co,Object.assign({"data-testid":"input",ref:v,"aria-disabled":u,value:C,onChange:w,type:l,readOnly:g||u,$showClear:D,$styleType:p,$visuallyReadOnly:g},f)),D&&e(Do,{onClick:$,type:"button","aria-label":"Clear input",$styleType:p,children:e(Bo,{"aria-hidden":!0})})]});return e(n,{children:"no-border"===p?e(Ao,{className:y,children:B()}):e(So,{$disabled:u,$error:d,$readOnly:g,className:y,children:B()})})})),zo=g.div`
    display: flex;
    flex-direction: column;
`,Oo=g.div`
    display: flex;
    flex-direction: row;
    align-self: center;
    align-items: center;
    gap: ${St["spacing-8"]};
`,Mo=g(ko)`
    min-width: 20px;
    margin-bottom: 0rem !important;

    input {
        padding: 0;
        text-align: center;
    }
`,_o=g(yo.Small)`
    margin: ${St["spacing-32"]} 0;
`,To=g(Kt.BodyBL)`
    flex-shrink: 0;
`,jo=(e,r=1)=>!!e&&RegExp(`^[0-9]{${r}}$`).test(e),Lo=(e,r,n)=>{if(e.length===r)return e;if(n){const[t,i]=e.split(n.separator);return t===n.value&&i.length===r?i:""}return""},Yo=u(((n,t)=>{var{id:s,value:l=[],"data-testid":d,className:u,cooldownDuration:g,actionButtonProps:m,errorMessage:b,numOfInput:h,prefix:y,onChange:p,onCooldownStart:f,onCooldownEnd:x,otpOnly:v,onCountdownChange:F}=n,w=S(n,["id","value","data-testid","className","cooldownDuration","actionButtonProps","errorMessage","numOfInput","prefix","onChange","onCooldownStart","onCooldownEnd","otpOnly","onCountdownChange"]);const $=null!=m?m:{},{disabled:E,onClick:C,styleType:D="secondary"}=$,B=S($,["disabled","onClick","styleType"]),A=a([]),k=a(p),[z,O]=o(new Array(h).fill("")),[M,_]=o(g),[T,j]=o(new Date),[L]=o((()=>Di.generate())),Y=!!b,I=`${L}-error`,W=`${L}-timer`;i((()=>{var e;return null===(e=null==A?void 0:A.current[0])||void 0===e||e.focus(),document.addEventListener("paste",N),()=>document.removeEventListener("paste",N)}),[]),i((()=>{if(0!==g){f&&f();const e=Z();return()=>e()}}),[T]),c(t,(()=>({startCooldown:()=>{j(new Date),_(g)}}))),i((()=>{k.current=p}),[p]),i((()=>{l.length===h&&O(l)}),[l]);const H=e=>{if(e&&jo(e,h)){const r=e.split("");return O(r),k.current&&k.current(r),!0}return!1},R=e=>r=>{var n;const t=r.target.value,i=z.every((e=>""===e)),o=Lo(t,h,y);if(i&&H(o))return;const a=t.replace(/[^0-9]/g,"");if(jo(a)){const r=[...z];r[e]=a.substring(a.length-1),null===(n=A.current[e+1])||void 0===n||n.focus(),O(r),p&&p(r)}},P=e=>r=>{var n,t,i;const{key:o,code:a}=r;if("Backspace"===o||"Backspace"===a){const r=[...z];""!==r[e]?r[e]="":0!==e&&(r[e-1]="",null===(n=A.current[e-1])||void 0===n||n.focus()),O(r),p&&p(r)}else"ArrowRight"===r.code?null===(t=A.current[e+1])||void 0===t||t.focus():"ArrowLeft"===r.code&&(null===(i=A.current[e-1])||void 0===i||i.focus())},N=e=>{if(!e.clipboardData)return;const r=e.clipboardData.getData("text"),n=Lo(r,h,y);H(n)||e.preventDefault()},V=()=>{const e=Date.now(),r=1e3*g;return e<T.valueOf()+r},Z=()=>{const e=setInterval((()=>{const r=Date.now(),n=1e3*g,t=Math.ceil((T.valueOf()+n-r)/1e3);_(t),t<=0?(x&&x(),clearInterval(e)):F&&F(t)}),1e3);return()=>{clearInterval(e)}},X=(e,r,n)=>n?`${n}-${r}-${e+1}`:`${r}-${e+1}`,U=e=>`${e} second${1===e?"":"s"}`;return r(zo,{id:s,"data-testid":d,className:u,children:[r(Oo,{role:"group","aria-label":`${h}-digit OTP input field`,children:[y&&r(To,{forwardedAs:"span","data-testid":"otp-prefix",weight:"semibold",children:[e(no,{children:"O T P prefix"}),`${y.value} ${y.separator}`]}),z.map(((r,n)=>e(Mo,Object.assign({id:X(n,"otp-input",s),"data-testid":X(n,"otp-input",d),"aria-label":`${Bi.formatOrdinal(n+1)} digit`,"aria-invalid":Y,"aria-describedby":Y?I:void 0,ref:e=>A.current[n]=e,type:"text",inputMode:"numeric",value:r,error:Y,onChange:R(n),onKeyDown:P(n),autoComplete:"off"},w),n)))]}),b&&e(ro,{id:I,children:b}),r(no,{role:"timer",id:W,children:[U(M)," remaining"]}),e(no,{"aria-live":"polite",children:M>0?"":"Ready to resend OTP"}),!v&&e(_o,Object.assign({styleType:D,type:"button"},B,{onClick:e=>{O(new Array(h).fill("")),V()||(j(new Date),_(g)),C&&C(e)},disabled:E||V()},B.children?{children:B.children}:{children:M>0?`Resend OTP in ${U(M)}`:"Resend OTP","aria-label":M>0?`Resend OTP in ${U(g)}`:"Resend OTP","aria-describedby":W}))]})}));export{Yo as OtpInput};
//# sourceMappingURL=index.js.map
