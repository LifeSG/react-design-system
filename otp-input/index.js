import{jsx as e,jsxs as r,Fragment as n}from"react/jsx-runtime";import t,{useEffect as i,useState as o,useRef as a,useCallback as s,createContext as l,useContext as d,useImperativeHandle as c}from"react";import"@lifesg/react-icons/i-circle-fill";import u,{css as g,isStyledComponent as b,keyframes as m}from"styled-components";import{ExternalIcon as h}from"@lifesg/react-icons/external";import{CrossIcon as y}from"@lifesg/react-icons/cross";import{useFloatingTree as p,FloatingTree as f,useFloatingNodeId as v,FloatingNode as x,useFloating as F,useTransitionStatus as w,useDismiss as E,useInteractions as $,FloatingFocusManager as D}from"@floating-ui/react";import C from"react-dom";import{ExclamationCircleFillIcon as B}from"@lifesg/react-icons/exclamation-circle-fill";function A(e,r){var n={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&r.indexOf(t)<0&&(n[t]=e[t]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(t=Object.getOwnPropertySymbols(e);i<t.length;i++)r.indexOf(t[i])<0&&Object.prototype.propertyIsEnumerable.call(e,t[i])&&(n[t[i]]=e[t[i]])}return n}"function"==typeof SuppressedError&&SuppressedError;var S="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};function k(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var z=Array.isArray,O="object"==typeof S&&S&&S.Object===Object&&S,M="object"==typeof self&&self&&self.Object===Object&&self,_=O||M||Function("return this")(),T=_.Symbol,j=T,L=Object.prototype,Y=L.hasOwnProperty,W=L.toString,I=j?j.toStringTag:void 0;var H=function(e){var r=Y.call(e,I),n=e[I];try{e[I]=void 0;var t=!0}catch(e){}var i=W.call(e);return t&&(r?e[I]=n:delete e[I]),i},R=Object.prototype.toString;var P=H,N=function(e){return R.call(e)},V=T?T.toStringTag:void 0;var Z=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":V&&V in Object(e)?P(e):N(e)};var X=Z,U=function(e){return null!=e&&"object"==typeof e};var J=function(e){return"symbol"==typeof e||U(e)&&"[object Symbol]"==X(e)},q=z,G=J,K=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,Q=/^\w*$/;var ee=function(e,r){if(q(e))return!1;var n=typeof e;return!("number"!=n&&"symbol"!=n&&"boolean"!=n&&null!=e&&!G(e))||(Q.test(e)||!K.test(e)||null!=r&&e in Object(r))};var re=function(e){var r=typeof e;return null!=e&&("object"==r||"function"==r)},ne=Z,te=re;var ie,oe=function(e){if(!te(e))return!1;var r=ne(e);return"[object Function]"==r||"[object GeneratorFunction]"==r||"[object AsyncFunction]"==r||"[object Proxy]"==r},ae=_["__core-js_shared__"],se=(ie=/[^.]+$/.exec(ae&&ae.keys&&ae.keys.IE_PROTO||""))?"Symbol(src)_1."+ie:"";var le=function(e){return!!se&&se in e},de=Function.prototype.toString;var ce=oe,ue=le,ge=re,be=function(e){if(null!=e){try{return de.call(e)}catch(e){}try{return e+""}catch(e){}}return""},me=/^\[object .+?Constructor\]$/,he=Function.prototype,ye=Object.prototype,pe=he.toString,fe=ye.hasOwnProperty,ve=RegExp("^"+pe.call(fe).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");var xe=function(e,r){return null==e?void 0:e[r]},Fe=function(e){return!(!ge(e)||ue(e))&&(ce(e)?ve:me).test(be(e))},we=xe;var Ee=function(e,r){var n=we(e,r);return Fe(n)?n:void 0},$e=Ee(Object,"create"),De=$e;var Ce=function(){this.__data__=De?De(null):{},this.size=0};var Be=function(e){var r=this.has(e)&&delete this.__data__[e];return this.size-=r?1:0,r},Ae=$e,Se=Object.prototype.hasOwnProperty;var ke=function(e){var r=this.__data__;if(Ae){var n=r[e];return"__lodash_hash_undefined__"===n?void 0:n}return Se.call(r,e)?r[e]:void 0},ze=$e,Oe=Object.prototype.hasOwnProperty;var Me=function(e){var r=this.__data__;return ze?void 0!==r[e]:Oe.call(r,e)},_e=$e;var Te=function(e,r){var n=this.__data__;return this.size+=this.has(e)?0:1,n[e]=_e&&void 0===r?"__lodash_hash_undefined__":r,this},je=Ce,Le=Be,Ye=ke,We=Me,Ie=Te;function He(e){var r=-1,n=null==e?0:e.length;for(this.clear();++r<n;){var t=e[r];this.set(t[0],t[1])}}He.prototype.clear=je,He.prototype.delete=Le,He.prototype.get=Ye,He.prototype.has=We,He.prototype.set=Ie;var Re=He;var Pe=function(){this.__data__=[],this.size=0};var Ne=function(e,r){return e===r||e!=e&&r!=r};var Ve=function(e,r){for(var n=e.length;n--;)if(Ne(e[n][0],r))return n;return-1},Ze=Ve,Xe=Array.prototype.splice;var Ue=function(e){var r=this.__data__,n=Ze(r,e);return!(n<0)&&(n==r.length-1?r.pop():Xe.call(r,n,1),--this.size,!0)},Je=Ve;var qe=function(e){var r=this.__data__,n=Je(r,e);return n<0?void 0:r[n][1]},Ge=Ve;var Ke=function(e){return Ge(this.__data__,e)>-1},Qe=Ve;var er=function(e,r){var n=this.__data__,t=Qe(n,e);return t<0?(++this.size,n.push([e,r])):n[t][1]=r,this},rr=Pe,nr=Ue,tr=qe,ir=Ke,or=er;function ar(e){var r=-1,n=null==e?0:e.length;for(this.clear();++r<n;){var t=e[r];this.set(t[0],t[1])}}ar.prototype.clear=rr,ar.prototype.delete=nr,ar.prototype.get=tr,ar.prototype.has=ir,ar.prototype.set=or;var sr=ar,lr=Ee(_,"Map"),dr=Re,cr=sr,ur=lr;var gr=function(e){var r=typeof e;return"string"==r||"number"==r||"symbol"==r||"boolean"==r?"__proto__"!==e:null===e};var br=function(e,r){var n=e.__data__;return gr(r)?n["string"==typeof r?"string":"hash"]:n.map},mr=br;var hr=function(e){var r=mr(this,e).delete(e);return this.size-=r?1:0,r},yr=br;var pr=function(e){return yr(this,e).get(e)},fr=br;var vr=function(e){return fr(this,e).has(e)},xr=br;var Fr=function(e,r){var n=xr(this,e),t=n.size;return n.set(e,r),this.size+=n.size==t?0:1,this},wr=function(){this.size=0,this.__data__={hash:new dr,map:new(ur||cr),string:new dr}},Er=hr,$r=pr,Dr=vr,Cr=Fr;function Br(e){var r=-1,n=null==e?0:e.length;for(this.clear();++r<n;){var t=e[r];this.set(t[0],t[1])}}Br.prototype.clear=wr,Br.prototype.delete=Er,Br.prototype.get=$r,Br.prototype.has=Dr,Br.prototype.set=Cr;var Ar=Br;function Sr(e,r){if("function"!=typeof e||null!=r&&"function"!=typeof r)throw new TypeError("Expected a function");var n=function(){var t=arguments,i=r?r.apply(this,t):t[0],o=n.cache;if(o.has(i))return o.get(i);var a=e.apply(this,t);return n.cache=o.set(i,a)||o,a};return n.cache=new(Sr.Cache||Ar),n}Sr.Cache=Ar;var kr=Sr;var zr=function(e){var r=kr(e,(function(e){return 500===n.size&&n.clear(),e})),n=r.cache;return r},Or=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,Mr=/\\(\\)?/g,_r=zr((function(e){var r=[];return 46===e.charCodeAt(0)&&r.push(""),e.replace(Or,(function(e,n,t,i){r.push(t?i.replace(Mr,"$1"):n||e)})),r}));var Tr=function(e,r){for(var n=-1,t=null==e?0:e.length,i=Array(t);++n<t;)i[n]=r(e[n],n,e);return i},jr=z,Lr=J,Yr=T?T.prototype:void 0,Wr=Yr?Yr.toString:void 0;var Ir=function e(r){if("string"==typeof r)return r;if(jr(r))return Tr(r,e)+"";if(Lr(r))return Wr?Wr.call(r):"";var n=r+"";return"0"==n&&1/r==-1/0?"-0":n},Hr=Ir;var Rr=z,Pr=ee,Nr=_r,Vr=function(e){return null==e?"":Hr(e)};var Zr=J;var Xr=function(e,r){return Rr(e)?e:Pr(e,r)?[e]:Nr(Vr(e))},Ur=function(e){if("string"==typeof e||Zr(e))return e;var r=e+"";return"0"==r&&1/e==-1/0?"-0":r};var Jr=function(e,r){for(var n=0,t=(r=Xr(r,e)).length;null!=e&&n<t;)e=e[Ur(r[n++])];return n&&n==t?e:void 0};var qr=k((function(e,r,n){var t=null==e?void 0:Jr(e,r);return void 0===t?n:t}));const Gr=(e,r,n)=>qr(n,r)||qr(e,r),Kr=(e,r)=>{const n=r||e.defaultValue;return qr(e.collections,n)},Qr={collections:{default:{"width-005":.5,"width-010":1,"width-020":2,"width-040":4,solid:"solid"}},defaultValue:"default"},en=e=>r=>{var n;const t=r.theme,i=Kr(Qr,null==t?void 0:t.borderScheme);return(null===(n=null==t?void 0:t.overrides)||void 0===n?void 0:n.border)?`${Gr(i,e,t.overrides.border)}px`:`${i[e]}px`},rn={"width-005":en("width-005"),"width-010":en("width-010"),"width-020":en("width-020"),"width-040":en("width-040"),solid:(nn="solid",e=>{var r;const n=e.theme,t=Kr(Qr,null==n?void 0:n.borderScheme),i=(null===(r=null==n?void 0:n.overrides)||void 0===r?void 0:r.border)?Gr(t,nn,n.overrides.border):t[nn];return"function"==typeof i?i(e):i})};var nn;const tn={"brand-10":"#2C0C0B","brand-20":"#4C1513","brand-30":"#6C1D1B","brand-40":"#922825","brand-50":"#BF3431","brand-60":"#F15D5A","brand-70":"#F69491","brand-80":"#FABAB7","brand-90":"#FCD7D2","brand-95":"#FFEBE7","brand-100":"#FFF6F4","primary-10":"#1A122C","primary-20":"#2F1F4D","primary-30":"#422D6E","primary-40":"#5B3D97","primary-50":"#7654BC","primary-60":"#9A82CD","primary-70":"#B7A7D8","primary-80":"#CFC5E5","primary-90":"#E3DDF0","primary-95":"#F0EDF7","primary-100":"#F9F8FC","secondary-10":"#0E1723","secondary-20":"#18293D","secondary-30":"#233A57","secondary-40":"#305078","secondary-50":"#4B6A8F","secondary-60":"#7B91A9","secondary-70":"#A1B1C3","secondary-80":"#C1CBD7","secondary-90":"#DBE1E8","secondary-95":"#EBEFF2","secondary-100":"#F7F8FA","neutral-10":"#161616","neutral-20":"#282828","neutral-30":"#393939","neutral-40":"#4E4E4E","neutral-50":"#686868","neutral-60":"#8E8E8E","neutral-70":"#AFAFB0","neutral-80":"#C7CACA","neutral-90":"#DDE1E2","neutral-95":"#EDEFEF","neutral-100":"#F9F9F9","success-10":"#081A0F","success-20":"#0E2D1B","success-30":"#154126","success-40":"#1C5A34","success-50":"#257645","success-60":"#44A068","success-70":"#64C189","success-80":"#80DCA5","success-90":"#B4ECCB","success-95":"#D5F6E2","success-100":"#EFFCF4","warning-10":"#221302","warning-20":"#3B2204","warning-30":"#543106","warning-40":"#744408","warning-50":"#98590C","warning-60":"#D07A13","warning-70":"#E4A244","warning-80":"#F5C26C","warning-90":"#FADBA6","warning-95":"#FCECD4","warning-100":"#FDF7F0","error-10":"#330505","error-20":"#550808","error-30":"#750C0C","error-40":"#9E130F","error-50":"#CB2213","error-60":"#DE6C6C","error-70":"#E89B9B","error-80":"#EFBEBE","error-90":"#F5D9D9","error-95":"#F9ECEC","error-100":"#FCF7F7","info-10":"#021824","info-20":"#032B3F","info-30":"#053D59","info-40":"#06547B","info-50":"#176E9B","info-60":"#5296BE","info-70":"#82B5DA","info-80":"#ACCFE7","info-90":"#CCE3F1","info-95":"#E3F1F8","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000","primary-inverse":"#FEAB10"},on={"brand-10":"#1F1221","brand-20":"#371F3B","brand-30":"#4E2C53","brand-40":"#6B3E73","brand-50":"#8D5197","brand-60":"#FF3399","brand-70":"#FF88C4","brand-80":"#FFB3D9","brand-90":"#FFD4E9","brand-95":"#FFE8F3","brand-100":"#FFF8FC","primary-10":"#1F1221","primary-20":"#371F3B","primary-30":"#4E2C53","primary-40":"#6B3E73","primary-50":"#8D5197","primary-60":"#B07DB7","primary-70":"#C7A3CC","primary-80":"#D9C2DD","primary-90":"#E9DBEB","primary-95":"#F3ECF4","primary-100":"#FAF7FA","secondary-10":"#2D091B","secondary-20":"#4D0F2E","secondary-30":"#6B1540","secondary-40":"#931D58","secondary-50":"#C02673","secondary-60":"#FF409F","secondary-70":"#FF88C4","secondary-80":"#FFB3D9","secondary-90":"#FFD4E9","secondary-95":"#FFE8F3","secondary-100":"#FFF8FC","neutral-10":"#161616","neutral-20":"#282828","neutral-30":"#393939","neutral-40":"#4E4E4E","neutral-50":"#686868","neutral-60":"#8E8E8E","neutral-70":"#AFAFB0","neutral-80":"#C7CACA","neutral-90":"#DDE1E2","neutral-95":"#EDEFEF","neutral-100":"#F9F9F9","success-10":"#081A0F","success-20":"#0E2D1B","success-30":"#154126","success-40":"#1C5A34","success-50":"#257645","success-60":"#44A068","success-70":"#64C189","success-80":"#80DCA5","success-90":"#B4ECCB","success-95":"#D5F6E2","success-100":"#EFFCF4","warning-10":"#221302","warning-20":"#3B2204","warning-30":"#543106","warning-40":"#744408","warning-50":"#98590C","warning-60":"#D07A13","warning-70":"#E4A244","warning-80":"#F5C26C","warning-90":"#FADBA6","warning-95":"#FCECD4","warning-100":"#FDF7F0","error-10":"#330505","error-20":"#550808","error-30":"#750C0C","error-40":"#9E130F","error-50":"#CB2213","error-60":"#DE6C6C","error-70":"#E89B9B","error-80":"#EFBEBE","error-90":"#F5D9D9","error-95":"#F9ECEC","error-100":"#FCF7F7","info-10":"#021824","info-20":"#032B3F","info-30":"#053D59","info-40":"#06547B","info-50":"#176E9B","info-60":"#5296BE","info-70":"#82B5DA","info-80":"#ACCFE7","info-90":"#CCE3F1","info-95":"#E3F1F8","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000","primary-inverse":"#FEAB10"},an={"brand-10":"#2C0C0B","brand-20":"#4C1513","brand-30":"#6C1D1B","brand-40":"#922825","brand-50":"#BF3431","brand-60":"#F15D5A","brand-70":"#F69491","brand-80":"#FABAB7","brand-90":"#FCD7D2","brand-95":"#FFEBE7","brand-100":"#FFF6F4","primary-10":"#001731","primary-20":"#002752","primary-30":"#003874","primary-40":"#004D9F","primary-50":"#1768BE","primary-60":"#3C91EC","primary-70":"#6CB4FF","primary-80":"#A5CDFF","primary-90":"#CFE1FE","primary-95":"#E8F0FE","primary-100":"#F7F9FF","secondary-10":"#131529","secondary-20":"#222547","secondary-30":"#2F3565","secondary-40":"#42498B","secondary-50":"#5B62A7","secondary-60":"#858CBD","secondary-70":"#A8ADCF","secondary-80":"#C6C9E0","secondary-90":"#DDDFEC","secondary-95":"#EDEEF5","secondary-100":"#F8F8FB","neutral-10":"#161616","neutral-20":"#282828","neutral-30":"#393939","neutral-40":"#4E4E4E","neutral-50":"#686868","neutral-60":"#8E8E8E","neutral-70":"#AFAFB0","neutral-80":"#C7CACA","neutral-90":"#DDE1E2","neutral-95":"#EDEFEF","neutral-100":"#F9F9F9","success-10":"#081A0F","success-20":"#0E2D1B","success-30":"#154126","success-40":"#1C5A34","success-50":"#257645","success-60":"#44A068","success-70":"#64C189","success-80":"#80DCA5","success-90":"#B4ECCB","success-95":"#D5F6E2","success-100":"#EFFCF4","warning-10":"#221302","warning-20":"#3B2204","warning-30":"#543106","warning-40":"#744408","warning-50":"#98590C","warning-60":"#D07A13","warning-70":"#E4A244","warning-80":"#F5C26C","warning-90":"#FADBA6","warning-95":"#FCECD4","warning-100":"#FDF7F0","error-10":"#330505","error-20":"#550808","error-30":"#750C0C","error-40":"#9E130F","error-50":"#CB2213","error-60":"#DE6C6C","error-70":"#E89B9B","error-80":"#EFBEBE","error-90":"#F5D9D9","error-95":"#F9ECEC","error-100":"#FCF7F7","info-10":"#021824","info-20":"#032B3F","info-30":"#053D59","info-40":"#06547B","info-50":"#176E9B","info-60":"#5296BE","info-70":"#82B5DA","info-80":"#ACCFE7","info-90":"#CCE3F1","info-95":"#E3F1F8","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000","primary-inverse":"#FEAB10"},sn={"brand-10":"#2C0C0B","brand-20":"#4C1513","brand-30":"#6C1D1B","brand-40":"#922825","brand-50":"#BF3431","brand-60":"#F15D5A","brand-70":"#F69491","brand-80":"#FABAB7","brand-90":"#FCD7D2","brand-95":"#FFEBE7","brand-100":"#FFF6F4","primary-10":"#0011924","primary-20":"#032B40","primary-30":"#043D5A","primary-40":"#05547B","primary-50":"#096EA1","primary-60":"#2098D3","primary-70":"#5CB9E8","primary-80":"#8BD3F6","primary-90":"#BEE6FA","primary-95":"#E2F2FA","primary-100":"#F4FAFC","secondary-10":"#131529","secondary-20":"#222547","secondary-30":"#2F3565","secondary-40":"#42498B","secondary-50":"#5B62A7","secondary-60":"#858CBD","secondary-70":"#A8ADCF","secondary-80":"#C6C9E0","secondary-90":"#DDDFEC","secondary-95":"#EDEEF5","secondary-100":"#F8F8FB","neutral-10":"#161616","neutral-20":"#282828","neutral-30":"#393939","neutral-40":"#4E4E4E","neutral-50":"#686868","neutral-60":"#8E8E8E","neutral-70":"#AFAFB0","neutral-80":"#C7CACA","neutral-90":"#DDE1E2","neutral-95":"#EDEFEF","neutral-100":"#F9F9F9","success-10":"#081A0F","success-20":"#0E2D1B","success-30":"#154126","success-40":"#1C5A34","success-50":"#257645","success-60":"#44A068","success-70":"#64C189","success-80":"#80DCA5","success-90":"#B4ECCB","success-95":"#D5F6E2","success-100":"#EFFCF4","warning-10":"#221302","warning-20":"#3B2204","warning-30":"#543106","warning-40":"#744408","warning-50":"#98590C","warning-60":"#D07A13","warning-70":"#E4A244","warning-80":"#F5C26C","warning-90":"#FADBA6","warning-95":"#FCECD4","warning-100":"#FDF7F0","error-10":"#330505","error-20":"#550808","error-30":"#750C0C","error-40":"#9E130F","error-50":"#CB2213","error-60":"#DE6C6C","error-70":"#E89B9B","error-80":"#EFBEBE","error-90":"#F5D9D9","error-95":"#F9ECEC","error-100":"#FCF7F7","info-10":"#021824","info-20":"#032B3F","info-30":"#053D59","info-40":"#06547B","info-50":"#176E9B","info-60":"#5296BE","info-70":"#82B5DA","info-80":"#ACCFE7","info-90":"#CCE3F1","info-95":"#E3F1F8","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000","primary-inverse":"#FEAB10"},ln={"brand-10":"#001A19","brand-20":"#002D2B","brand-30":"#00413D","brand-40":"#005954","brand-50":"#00756F","brand-60":"#03A098","brand-70":"#55BFBA","brand-80":"#92D6D2","brand-90":"#BFE7E5","brand-95":"#DDF2F1","brand-100":"#F4FBFA","primary-10":"#09191D","primary-20":"#102B34","primary-30":"#173D49","primary-40":"#205666","primary-50":"#2A7086","primary-60":"#5D97A9","primary-70":"#8CB6C2","primary-80":"#B2CED6","primary-90":"#D1E2E7","primary-95":"#E8F0F3","primary-100":"#F7FAFB","secondary-10":"#001731","secondary-20":"#002752","secondary-30":"#003874","secondary-40":"#004D9F","secondary-50":"#5B62A7","secondary-60":"#858CBD","secondary-70":"#A8ADCF","secondary-80":"#C6C9E0","secondary-90":"#DDDFEC","secondary-95":"#EDEEF5","secondary-100":"#F8F8FB","neutral-10":"#161616","neutral-20":"#282828","neutral-30":"#393939","neutral-40":"#4E4E4E","neutral-50":"#686868","neutral-60":"#8E8E8E","neutral-70":"#AFAFB0","neutral-80":"#C7CACA","neutral-90":"#DDE1E2","neutral-95":"#EDEFEF","neutral-100":"#F9F9F9","success-10":"#081A0F","success-20":"#0E2D1B","success-30":"#154126","success-40":"#1C5A34","success-50":"#257645","success-60":"#44A068","success-70":"#64C189","success-80":"#80DCA5","success-90":"#B4ECCB","success-95":"#D5F6E2","success-100":"#EFFCF4","warning-10":"#221302","warning-20":"#3B2204","warning-30":"#543106","warning-40":"#744408","warning-50":"#98590C","warning-60":"#D07A13","warning-70":"#E4A244","warning-80":"#F5C26C","warning-90":"#FADBA6","warning-95":"#FCECD4","warning-100":"#FDF7F0","error-10":"#330505","error-20":"#550808","error-30":"#750C0C","error-40":"#9E130F","error-50":"#CB2213","error-60":"#DE6C6C","error-70":"#E89B9B","error-80":"#EFBEBE","error-90":"#F5D9D9","error-95":"#F9ECEC","error-100":"#FCF7F7","info-10":"#021824","info-20":"#032B3F","info-30":"#053D59","info-40":"#06547B","info-50":"#176E9B","info-60":"#5296BE","info-70":"#82B5DA","info-80":"#ACCFE7","info-90":"#CCE3F1","info-95":"#E3F1F8","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000","primary-inverse":"#FEAB10"},dn={"brand-10":"#881317","brand-20":"#B5191E","brand-30":"#B5040A","brand-40":"#D0333F","brand-50":"#DC666F","brand-60":"#E28087","brand-70":"#E7999F","brand-80":"#EDB3B7","brand-90":"#F3CCCF","brand-95":"#F9E6E7","brand-100":"#FCF2F3","primary-10":"#000000","primary-20":"#191919","primary-30":"#333333","primary-40":"#4D4D4D","primary-50":"#666666","primary-60":"#808080","primary-70":"#999999","primary-80":"#B3B3B3","primary-90":"#E6E6E6","primary-95":"#F7F7F7","primary-100":"#FFFFFF","secondary-10":"#19151D","secondary-20":"#2B2533","secondary-30":"#3E3649","secondary-40":"#564A64","secondary-50":"#6F637D","secondary-60":"#948B9F","secondary-70":"#B3ACBB","secondary-80":"#CCC8D2","secondary-90":"#E1DEE4","secondary-95":"#EFEEF1","secondary-100":"#F9F8F9","neutral-10":"#000000","neutral-20":"#191919","neutral-30":"#333333","neutral-40":"#4D4D4D","neutral-50":"#666666","neutral-60":"#808080","neutral-70":"#999999","neutral-80":"#B3B3B3","neutral-90":"#E6E6E6","neutral-95":"#F7F7F7","neutral-100":"#FFFFFF","success-10":"#081A0F","success-20":"#0E2D1B","success-30":"#154126","success-40":"#1C5A34","success-50":"#257645","success-60":"#44A068","success-70":"#64C189","success-80":"#80DCA5","success-90":"#B4ECCB","success-95":"#D5F6E2","success-100":"#EFFCF4","warning-10":"#221302","warning-20":"#3B2204","warning-30":"#543106","warning-40":"#744408","warning-50":"#98590C","warning-60":"#D07A13","warning-70":"#E4A244","warning-80":"#F5C26C","warning-90":"#FADBA6","warning-95":"#FCECD4","warning-100":"#FDF7F0","error-10":"#330505","error-20":"#550808","error-30":"#750C0C","error-40":"#9E130F","error-50":"#CB2213","error-60":"#DE6C6C","error-70":"#E89B9B","error-80":"#EFBEBE","error-90":"#F5D9D9","error-95":"#F9ECEC","error-100":"#FCF7F7","info-10":"#021824","info-20":"#032B3F","info-30":"#053D59","info-40":"#06547B","info-50":"#176E9B","info-60":"#5296BE","info-70":"#82B5DA","info-80":"#ACCFE7","info-90":"#CCE3F1","info-95":"#E3F1F8","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000","primary-inverse":"#FEAB10"},cn={"brand-10":"#0E123A","brand-20":"#191E65","brand-30":"#232B90","brand-40":"#303BC5","brand-50":"#494CFF","brand-60":"#AD6EFF","brand-70":"#AEA4FF","brand-80":"#C5C4FF","brand-90":"#DDDCFF","brand-95":"#EDECFF","brand-100":"#F8F8FF","primary-10":"#10152B","primary-20":"#1C254B","primary-30":"#28356C","primary-40":"#38489A","primary-50":"#4D5AD7","primary-60":"#7487F2","primary-70":"#9AAAFC","primary-80":"#BDC7FD","primary-90":"#DADFFB","primary-95":"#ECEEFE","primary-100":"#F7F8FF","secondary-10":"#19151D","secondary-20":"#2B2533","secondary-30":"#3E3649","secondary-40":"#564A64","secondary-50":"#6F637D","secondary-60":"#948B9F","secondary-70":"#B3ACBB","secondary-80":"#CCC8D2","secondary-90":"#E1DEE4","secondary-95":"#EFEEF1","secondary-100":"#F9F8F9","neutral-10":"#161616","neutral-20":"#282828","neutral-30":"#393939","neutral-40":"#4E4E4E","neutral-50":"#686868","neutral-60":"#8E8E8E","neutral-70":"#AFAFB0","neutral-80":"#C7CACA","neutral-90":"#DDE1E2","neutral-95":"#EDEFEF","neutral-100":"#F9F9F9","success-10":"#081A0F","success-20":"#0E2D1B","success-30":"#154126","success-40":"#1C5A34","success-50":"#257645","success-60":"#44A068","success-70":"#64C189","success-80":"#80DCA5","success-90":"#B4ECCB","success-95":"#D5F6E2","success-100":"#EFFCF4","warning-10":"#221302","warning-20":"#3B2204","warning-30":"#543106","warning-40":"#744408","warning-50":"#98590C","warning-60":"#D07A13","warning-70":"#E4A244","warning-80":"#F5C26C","warning-90":"#FADBA6","warning-95":"#FCECD4","warning-100":"#FDF7F0","error-10":"#330505","error-20":"#550808","error-30":"#750C0C","error-40":"#9E130F","error-50":"#CB2213","error-60":"#DE6C6C","error-70":"#E89B9B","error-80":"#EFBEBE","error-90":"#F5D9D9","error-95":"#F9ECEC","error-100":"#FCF7F7","info-10":"#021824","info-20":"#032B3F","info-30":"#053D59","info-40":"#06547B","info-50":"#176E9B","info-60":"#5296BE","info-70":"#82B5DA","info-80":"#ACCFE7","info-90":"#CCE3F1","info-95":"#E3F1F8","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000","primary-inverse":"#FEAB10"},un={"brand-10":"#170F39","brand-20":"#281C62","brand-30":"#38268B","brand-40":"#4D34BF","brand-50":"#5735DF","brand-60":"#9986F9","brand-70":"#B2A5F8","brand-80":"#CDC2FA","brand-90":"#E2DCFC","brand-95":"#EFEDFE","brand-100":"#FAF8FD","primary-10":"#170F39","primary-20":"#281C62","primary-30":"#38268B","primary-40":"#4D34BF","primary-50":"#5735DF","primary-60":"#9986F9","primary-70":"#B2A5F8","primary-80":"#CDC2FA","primary-90":"#E2DCFC","primary-95":"#EFEDFE","primary-100":"#FAF8FD","secondary-10":"#251204","secondary-20":"#401F08","secondary-30":"#5B2C0B","secondary-40":"#7E3D0F","secondary-50":"#B04900","secondary-60":"#E26E1C","secondary-70":"#FF9445","secondary-80":"#FFBB8E","secondary-90":"#FFD9BF","secondary-95":"#FFECDF","secondary-100":"#FFF8F3","neutral-10":"#161616","neutral-20":"#282828","neutral-30":"#393939","neutral-40":"#4E4E4E","neutral-50":"#686868","neutral-60":"#8E8E8E","neutral-70":"#AFAFB0","neutral-80":"#C7CACA","neutral-90":"#DDE1E2","neutral-95":"#EDEFEF","neutral-100":"#F9F9F9","success-10":"#031B15","success-20":"#082D24","success-30":"#094134","success-40":"#0D5947","success-50":"#10755E","success-60":"#16A181","success-70":"#1EC59D","success-80":"#6FDDC2","success-90":"#AFECDE","success-95":"#D5F5ED","success-100":"#F1FCF9","warning-10":"#1F1500","warning-20":"#362500","warning-30":"#4D3501","warning-40":"#6A4801","warning-50":"#8B6001","warning-60":"#BF8301","warning-70":"#EAA102","warning-80":"#FFBF34","warning-90":"#FFDC8F","warning-95":"#FFEDC7","warning-100":"#FFF8EA","error-10":"#270F10","error-20":"#441B1B","error-30":"#612627","error-40":"#853535","error-50":"#AF4546","error-60":"#EC6162","error-70":"#F29696","error-80":"#F7BBBC","error-90":"#FAD8D8","error-95":"#FCEAEA","error-100":"#FEF7F7","info-10":"#0F1627","info-20":"#1B2745","info-30":"#273763","info-40":"#354D88","info-50":"#4665B3","info-60":"#618AF6","info-70":"#8DADFF","info-80":"#B4C9FF","info-90":"#D3DFFF","info-95":"#E9EFFF","info-100":"#F5F8FF",white:"#FFFFFF",black:"#000000","primary-inverse":"#FEAB10"},gn={"brand-10":"#0E113C","brand-20":"#191E67","brand-30":"#232A92","brand-40":"#233FC2","brand-50":"#135CEA","brand-60":"#378FFB","brand-70":"#71B3FD","brand-80":"#9DCFFE","brand-90":"#C1E5FF","brand-95":"#DCF1FF","brand-100":"#F3FAFF","primary-10":"#0E113C","primary-20":"#191E67","primary-30":"#232A92","primary-40":"#233FC2","primary-50":"#135CEA","primary-60":"#378FFB","primary-70":"#71B3FD","primary-80":"#9DCFFE","primary-90":"#C1E5FF","primary-95":"#DCF1FF","primary-100":"#F3FAFF","secondary-10":"#34001F","secondary-20":"#540033","secondary-30":"#730045","secondary-40":"#9D0054","secondary-50":"#C61C64","secondary-60":"#DE6792","secondary-70":"#EB96B6","secondary-80":"#F5BAD2","secondary-90":"#FCD5E3","secondary-95":"#FDEBF1","secondary-100":"#FDF6F9","neutral-10":"#161616","neutral-20":"#282828","neutral-30":"#393939","neutral-40":"#4E4E4E","neutral-50":"#686868","neutral-60":"#8E8E8E","neutral-70":"#AFAFB0","neutral-80":"#C7CACA","neutral-90":"#DDE1E2","neutral-95":"#EDEFEF","neutral-100":"#F9F9F9","success-10":"#081A0F","success-20":"#0E2D1B","success-30":"#154126","success-40":"#1C5A34","success-50":"#257645","success-60":"#44A068","success-70":"#64C189","success-80":"#80DCA5","success-90":"#B4ECCB","success-95":"#D5F6E2","success-100":"#EFFCF4","warning-10":"#221302","warning-20":"#3B2204","warning-30":"#543106","warning-40":"#744408","warning-50":"#98590C","warning-60":"#D07A13","warning-70":"#E4A244","warning-80":"#F5C26C","warning-90":"#FADBA6","warning-95":"#FCECD4","warning-100":"#FDF7F0","error-10":"#330505","error-20":"#550808","error-30":"#750C0C","error-40":"#9E130F","error-50":"#CB2213","error-60":"#DE6C6C","error-70":"#E89B9B","error-80":"#EFBEBE","error-90":"#F5D9D9","error-95":"#F9ECEC","error-100":"#FCF7F7","info-10":"#021824","info-20":"#032B3F","info-30":"#053D59","info-40":"#06547B","info-50":"#176E9B","info-60":"#5296BE","info-70":"#82B5DA","info-80":"#ACCFE7","info-90":"#CCE3F1","info-95":"#E3F1F8","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000","primary-inverse":"#FEAB10"},bn={"brand-10":"#370009","brand-20":"#4E000D","brand-30":"#640011","brand-40":"#850017","brand-50":"#9B001A","brand-60":"#EF2D4E","brand-70":"#F692A3","brand-80":"#FAB9C4","brand-90":"#FCD7DD","brand-95":"#FDEAED","brand-100":"#FEF8F9","primary-10":"#1F102A","primary-20":"#2F193F","primary-30":"#3E2053","primary-40":"#562D71","primary-50":"#663587","primary-60":"#9370AA","primary-70":"#BCA7CB","primary-80":"#D3C5DC","primary-90":"#E5DDEB","primary-95":"#F2EEF5","primary-100":"#FAF9FB","secondary-10":"#201316","secondary-20":"#311D22","secondary-30":"#3F272C","secondary-40":"#58363D","secondary-50":"#684049","secondary-60":"#AF6A7A","secondary-70":"#F393A8","secondary-80":"#FFB6C6","secondary-90":"#FFD6DF","secondary-95":"#FFE9EE","secondary-100":"#FFF7F9","neutral-10":"#161616","neutral-20":"#222222","neutral-30":"#2D2D2D","neutral-40":"#3F3F3F","neutral-50":"#4B4B4B","neutral-60":"#7E7E7E","neutral-70":"#AFAFB0","neutral-80":"#C7CACA","neutral-90":"#DDE1E2","neutral-95":"#EDEFEF","neutral-100":"#F9F9F9","success-10":"#081917","success-20":"#0D2724","success-30":"#11332E","success-40":"#174740","success-50":"#1B554C","success-60":"#2D8C7E","success-70":"#46C2AF","success-80":"#89D8CC","success-90":"#BCE9E2","success-95":"#DAF3EF","success-100":"#F0FAF9","warning-10":"#241200","warning-20":"#371C00","warning-30":"#482500","warning-40":"#633300","warning-50":"#763C00","warning-60":"#C36400","warning-70":"#FF9524","warning-80":"#FFBD77","warning-90":"#FFD9B2","warning-95":"#FFEBD6","warning-100":"#FFF7F0","error-10":"#330505","error-20":"#4B0707","error-30":"#600909","error-40":"#810D0D","error-50":"#98110F","error-60":"#D7504C","error-70":"#E89B9B","error-80":"#EFBEBE","error-90":"#F5D9D9","error-95":"#F9ECEC","error-100":"#FCF7F7","info-10":"#021824","info-20":"#032537","info-30":"#043148","info-40":"#054462","info-50":"#065175","info-60":"#3985AF","info-70":"#82B5DA","info-80":"#ACCFE7","info-90":"#CCE3F1","info-95":"#E3F1F8","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000","primary-inverse":"#FEAB10"},mn={"brand-10":"#00143A","brand-20":"#00205B","brand-30":"#153368","brand-40":"#18417C","brand-50":"#00558C","brand-60":"#009CDE","brand-70":"#5AB9E7","brand-80":"#9ED0ED","brand-90":"#CAE3F4","brand-95":"#E2F0F9","brand-100":"#F4FAFD","primary-10":"#00143A","primary-20":"#00205B","primary-30":"#153368","primary-40":"#18417C","primary-50":"#00558C","primary-60":"#009CDE","primary-70":"#5AB9E7","primary-80":"#9ED0ED","primary-90":"#CAE3F4","primary-95":"#E2F0F9","primary-100":"#F4FAFD","secondary-10":"#10171F","secondary-20":"#1E252C","secondary-30":"#2F353B","secondary-40":"#3D4247","secondary-50":"#4E5255","secondary-60":"#8F9396","secondary-70":"#A9B0B3","secondary-80":"#C7CBCC","secondary-90":"#DDDFE0","secondary-95":"#ECEDEE","secondary-100":"#F8F8F9","neutral-10":"#10171F","neutral-20":"#1E252C","neutral-30":"#2F353B","neutral-40":"#3D4247","neutral-50":"#4E5255","neutral-60":"#8F9396","neutral-70":"#A9B0B3","neutral-80":"#C7CBCC","neutral-90":"#DDDFE0","neutral-95":"#ECEDEE","neutral-100":"#F8F8F9","success-10":"#001B0E","success-20":"#012A16","success-30":"#013D20","success-40":"#014D28","success-50":"#005F30","success-60":"#48A377","success-70":"#77BD9B","success-80":"#A3D5BD","success-90":"#C4E7D6","success-95":"#DBF4E7","success-100":"#ECFDF5","warning-10":"#1F1500","warning-20":"#312100","warning-30":"#473000","warning-40":"#593C00","warning-50":"#6E4B00","warning-60":"#B78C31","warning-70":"#DDA633","warning-80":"#E0C792","warning-90":"#E9DEC5","warning-95":"#F4EEE0","warning-100":"#FAF8F3","error-10":"#360109","error-20":"#50010E","error-30":"#6F0213","error-40":"#88051A","error-50":"#A60A24","error-60":"#E07083","error-70":"#EA98A6","error-80":"#F3BBC4","error-90":"#FAD5DC","error-95":"#FEE9ED","error-100":"#FFF6F8","info-10":"#00143A","info-20":"#00205B","info-30":"#153368","info-40":"#18417C","info-50":"#00558C","info-60":"#009CDE","info-70":"#5AB9E7","info-80":"#9ED0ED","info-90":"#CAE3F4","info-95":"#E2F0F9","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000","primary-inverse":"#FFCB6A"},hn={collections:{lifesg:an,bookingsg:tn,rbs:cn,mylegacy:sn,ccube:on,oneservice:ln,pa:dn,a11yplayground:un,supportgowhere:gn,imda:bn,spf:mn},defaultValue:"lifesg"},yn={collections:{lifesg:an,bookingsg:tn,rbs:cn,mylegacy:sn,ccube:on,oneservice:ln,pa:dn,a11yplayground:un,supportgowhere:gn,imda:bn,spf:mn},defaultValue:"lifesg"},pn=e=>r=>{var n;const t=r.theme,i="dark"===(null==t?void 0:t.colourMode),o=Kr(i?yn:hn,null==t?void 0:t.colourScheme),a=i?"primitiveColourDark":"primitiveColour",s=null===(n=null==t?void 0:t.overrides)||void 0===n?void 0:n[a];return s?Gr(o,e,s):o[e]},fn={"brand-10":pn("brand-10"),"brand-20":pn("brand-20"),"brand-30":pn("brand-30"),"brand-40":pn("brand-40"),"brand-50":pn("brand-50"),"brand-60":pn("brand-60"),"brand-70":pn("brand-70"),"brand-80":pn("brand-80"),"brand-90":pn("brand-90"),"brand-95":pn("brand-95"),"brand-100":pn("brand-100"),"primary-10":pn("primary-10"),"primary-20":pn("primary-20"),"primary-30":pn("primary-30"),"primary-40":pn("primary-40"),"primary-50":pn("primary-50"),"primary-60":pn("primary-60"),"primary-70":pn("primary-70"),"primary-80":pn("primary-80"),"primary-90":pn("primary-90"),"primary-95":pn("primary-95"),"primary-100":pn("primary-100"),"secondary-10":pn("secondary-10"),"secondary-20":pn("secondary-20"),"secondary-30":pn("secondary-30"),"secondary-40":pn("secondary-40"),"secondary-50":pn("secondary-50"),"secondary-60":pn("secondary-60"),"secondary-70":pn("secondary-70"),"secondary-80":pn("secondary-80"),"secondary-90":pn("secondary-90"),"secondary-95":pn("secondary-95"),"secondary-100":pn("secondary-100"),"neutral-10":pn("neutral-10"),"neutral-20":pn("neutral-20"),"neutral-30":pn("neutral-30"),"neutral-40":pn("neutral-40"),"neutral-50":pn("neutral-50"),"neutral-60":pn("neutral-60"),"neutral-70":pn("neutral-70"),"neutral-80":pn("neutral-80"),"neutral-90":pn("neutral-90"),"neutral-95":pn("neutral-95"),"neutral-100":pn("neutral-100"),"success-10":pn("success-10"),"success-20":pn("success-20"),"success-30":pn("success-30"),"success-40":pn("success-40"),"success-50":pn("success-50"),"success-60":pn("success-60"),"success-70":pn("success-70"),"success-80":pn("success-80"),"success-90":pn("success-90"),"success-95":pn("success-95"),"success-100":pn("success-100"),"warning-10":pn("warning-10"),"warning-20":pn("warning-20"),"warning-30":pn("warning-30"),"warning-40":pn("warning-40"),"warning-50":pn("warning-50"),"warning-60":pn("warning-60"),"warning-70":pn("warning-70"),"warning-80":pn("warning-80"),"warning-90":pn("warning-90"),"warning-95":pn("warning-95"),"warning-100":pn("warning-100"),"error-10":pn("error-10"),"error-20":pn("error-20"),"error-30":pn("error-30"),"error-40":pn("error-40"),"error-50":pn("error-50"),"error-60":pn("error-60"),"error-70":pn("error-70"),"error-80":pn("error-80"),"error-90":pn("error-90"),"error-95":pn("error-95"),"error-100":pn("error-100"),"info-10":pn("info-10"),"info-20":pn("info-20"),"info-30":pn("info-30"),"info-40":pn("info-40"),"info-50":pn("info-50"),"info-60":pn("info-60"),"info-70":pn("info-70"),"info-80":pn("info-80"),"info-90":pn("info-90"),"info-95":pn("info-95"),"info-100":pn("info-100"),white:pn("white"),black:pn("black"),"primary-inverse":pn("primary-inverse")},vn={text:pn("neutral-20"),"text-subtle":pn("neutral-30"),"text-subtler":pn("neutral-50"),"text-subtlest":pn("neutral-60"),"text-primary":pn("primary-50"),"text-primary-strongest":pn("primary-20"),"text-hover":pn("primary-40"),"text-selected":pn("primary-50"),"text-selected-hover":pn("primary-40"),"text-disabled":pn("neutral-50"),"text-disabled-subtle":pn("neutral-60"),"text-disabled-subtlest":pn("neutral-80"),"text-selected-disabled":pn("neutral-20"),"text-success":pn("success-40"),"text-warning":pn("warning-40"),"text-error":pn("error-40"),"text-info":pn("info-40"),"text-inverse":pn("white"),icon:pn("neutral-50"),"icon-subtle":pn("neutral-60"),"icon-strongest":pn("neutral-20"),"icon-primary":pn("primary-50"),"icon-primary-subtle":pn("primary-60"),"icon-primary-subtlest":pn("primary-70"),"icon-hover":pn("primary-40"),"icon-selected":pn("primary-50"),"icon-selected-hover":pn("primary-40"),"icon-disabled":pn("neutral-50"),"icon-disabled-subtle":pn("neutral-60"),"icon-selected-disabled":pn("neutral-60"),"icon-success":pn("success-50"),"icon-warning":pn("warning-60"),"icon-error":pn("error-50"),"icon-error-strong":pn("error-40"),"icon-info":pn("info-50"),"icon-inverse":pn("white"),"icon-primary-inverse":pn("primary-inverse"),border:pn("neutral-90"),"border-strong":pn("neutral-70"),"border-stronger":pn("neutral-50"),"border-primary":pn("primary-50"),"border-primary-subtle":pn("primary-60"),"border-hover":pn("primary-90"),"border-hover-strong":pn("primary-60"),"border-selected":pn("primary-50"),"border-selected-subtle":pn("primary-70"),"border-selected-subtlest":pn("primary-90"),"border-selected-hover":pn("primary-40"),"border-focus":pn("primary-60"),"border-focus-strong":pn("primary-50"),"border-disabled":pn("neutral-90"),"border-selected-disabled":pn("neutral-70"),"border-success":pn("success-60"),"border-warning":pn("warning-60"),"border-error":pn("error-60"),"border-error-focus":pn("error-60"),"border-error-focus-strong":pn("error-40"),"border-error-strong":pn("error-40"),"border-info":pn("info-60"),bg:pn("white"),"bg-strong":pn("neutral-100"),"bg-stronger":pn("neutral-95"),"bg-strongest":pn("neutral-90"),"bg-hover":pn("primary-95"),"bg-hover-strong":pn("primary-90"),"bg-hover-subtle":pn("primary-100"),"bg-hover-neutral":pn("neutral-100"),"bg-hover-neutral-strong":pn("neutral-90"),"bg-selected":pn("primary-95"),"bg-selected-hover":pn("primary-90"),"bg-selected-strong":pn("primary-90"),"bg-selected-stronger":pn("primary-70"),"bg-selected-strongest":pn("primary-50"),"bg-selected-strongest-hover":pn("primary-40"),"bg-disabled":pn("neutral-95"),"bg-selected-disabled":pn("neutral-95"),"bg-selected-stronger-disabled":pn("neutral-70"),"bg-success":pn("success-100"),"bg-success-hover":pn("success-95"),"bg-success-strong":pn("success-50"),"bg-success-strong-hover":pn("success-40"),"bg-warning":pn("warning-100"),"bg-warning-hover":pn("warning-95"),"bg-warning-strong":pn("warning-50"),"bg-warning-strong-hover":pn("warning-40"),"bg-info":pn("info-100"),"bg-info-hover":pn("info-95"),"bg-info-strong":pn("info-50"),"bg-info-strong-hover":pn("info-40"),"bg-error":pn("error-100"),"bg-error-hover":pn("error-95"),"bg-error-strong":pn("error-50"),"bg-error-strong-hover":pn("error-40"),"bg-inverse":pn("neutral-20"),"bg-inverse-subtle":pn("neutral-30"),"bg-inverse-subtler":pn("neutral-50"),"bg-inverse-subtlest":pn("neutral-60"),"bg-inverse-hover":pn("neutral-40"),"bg-primary":pn("primary-50"),"bg-primary-subtle":pn("primary-60"),"bg-primary-subtler":pn("primary-95"),"bg-primary-subtlest":pn("primary-100"),"bg-available":"#6DD0A1","bg-primary-hover":pn("primary-40"),"bg-primary-subtlest-hover":pn("primary-90"),"bg-primary-subtlest-selected":pn("primary-90"),"overlay-strong":"rgba(40, 40, 40, 0.85)","overlay-subtle":"rgba(40, 40, 40, 0.20)",hyperlink:pn("primary-50"),"hyperlink-hover":pn("primary-40"),"hyperlink-visited":pn("primary-40"),"hyperlink-inverse":pn("primary-inverse"),"focus-ring":pn("primary-50"),"focus-ring-inverse":pn("white")},xn={text:pn("neutral-100"),"text-subtle":pn("neutral-80"),"text-subtler":pn("neutral-60"),"text-subtlest":pn("neutral-50"),"text-primary":pn("primary-60"),"text-primary-strongest":pn("primary-90"),"text-hover":pn("primary-70"),"text-selected":pn("primary-60"),"text-selected-hover":pn("primary-70"),"text-disabled":pn("neutral-60"),"text-disabled-subtle":pn("neutral-50"),"text-disabled-subtlest":pn("neutral-30"),"text-selected-disabled":pn("neutral-90"),"text-success":pn("success-70"),"text-warning":pn("warning-70"),"text-error":pn("error-70"),"text-info":pn("info-70"),"text-inverse":pn("black"),icon:pn("neutral-60"),"icon-subtle":pn("neutral-50"),"icon-strongest":pn("neutral-90"),"icon-primary":pn("primary-60"),"icon-primary-subtle":pn("primary-50"),"icon-primary-subtlest":pn("primary-40"),"icon-hover":pn("primary-70"),"icon-selected":pn("primary-60"),"icon-selected-hover":pn("primary-70"),"icon-disabled":pn("neutral-60"),"icon-disabled-subtle":pn("neutral-50"),"icon-selected-disabled":pn("neutral-50"),"icon-success":pn("success-60"),"icon-warning":pn("warning-50"),"icon-error":pn("error-60"),"icon-error-strong":pn("error-70"),"icon-info":pn("info-60"),"icon-inverse":pn("black"),"icon-primary-inverse":pn("primary-inverse"),border:pn("neutral-20"),"border-strong":pn("neutral-40"),"border-stronger":pn("neutral-60"),"border-primary":pn("primary-60"),"border-primary-subtle":pn("primary-50"),"border-hover":pn("primary-20"),"border-hover-strong":pn("primary-50"),"border-selected":pn("primary-60"),"border-selected-subtle":pn("primary-40"),"border-selected-subtlest":pn("primary-20"),"border-selected-hover":pn("primary-70"),"border-focus":pn("primary-50"),"border-focus-strong":pn("primary-60"),"border-disabled":pn("neutral-20"),"border-selected-disabled":pn("neutral-40"),"border-success":pn("success-50"),"border-warning":pn("warning-50"),"border-error":pn("error-50"),"border-error-focus":pn("error-50"),"border-error-focus-strong":pn("error-70"),"border-error-strong":pn("error-70"),"border-info":pn("info-50"),bg:pn("black"),"bg-strong":pn("neutral-10"),"bg-stronger":pn("neutral-20"),"bg-strongest":pn("neutral-20"),"bg-hover":pn("primary-20"),"bg-hover-strong":pn("primary-20"),"bg-hover-subtle":pn("primary-10"),"bg-hover-neutral":pn("neutral-10"),"bg-hover-neutral-strong":pn("neutral-20"),"bg-selected":pn("primary-20"),"bg-selected-hover":pn("primary-20"),"bg-selected-strong":pn("primary-20"),"bg-selected-stronger":pn("primary-40"),"bg-selected-strongest":pn("primary-60"),"bg-selected-strongest-hover":pn("primary-70"),"bg-disabled":pn("neutral-20"),"bg-selected-disabled":pn("neutral-20"),"bg-selected-stronger-disabled":pn("neutral-40"),"bg-success":pn("success-10"),"bg-success-hover":pn("success-20"),"bg-success-strong":pn("success-60"),"bg-success-strong-hover":pn("success-70"),"bg-warning":pn("warning-10"),"bg-warning-hover":pn("warning-20"),"bg-warning-strong":pn("warning-60"),"bg-warning-strong-hover":pn("warning-70"),"bg-info":pn("info-10"),"bg-info-hover":pn("info-20"),"bg-info-strong":pn("info-60"),"bg-info-strong-hover":pn("info-70"),"bg-error":pn("error-10"),"bg-error-hover":pn("error-20"),"bg-error-strong":pn("error-60"),"bg-error-strong-hover":pn("error-70"),"bg-inverse":pn("neutral-90"),"bg-inverse-subtle":pn("neutral-80"),"bg-inverse-subtler":pn("neutral-60"),"bg-inverse-subtlest":pn("neutral-50"),"bg-inverse-hover":pn("neutral-70"),"bg-primary":pn("primary-60"),"bg-primary-subtle":pn("primary-50"),"bg-primary-subtler":pn("primary-20"),"bg-primary-subtlest":pn("primary-10"),"bg-available":"#185339","bg-primary-hover":pn("primary-70"),"bg-primary-subtlest-hover":pn("primary-20"),"bg-primary-subtlest-selected":pn("primary-20"),"overlay-strong":"rgba(78, 78, 78, 0.80)","overlay-subtle":"rgba(78, 78, 78, 0.50)",hyperlink:pn("primary-60"),"hyperlink-hover":pn("primary-70"),"hyperlink-visited":pn("primary-70"),"hyperlink-inverse":pn("primary-inverse"),"focus-ring":pn("primary-60"),"focus-ring-inverse":pn("black")},Fn={text:pn("neutral-30"),"text-subtle":pn("neutral-40"),"text-subtler":pn("neutral-50"),"text-subtlest":pn("neutral-70"),"text-primary":pn("neutral-10"),"text-primary-strongest":pn("neutral-10"),"text-hover":pn("neutral-70"),"text-selected":pn("neutral-20"),"text-selected-hover":pn("neutral-10"),"text-disabled":pn("neutral-50"),"text-disabled-subtle":pn("neutral-70"),"text-disabled-subtlest":pn("neutral-80"),"text-selected-disabled":pn("neutral-40"),"text-success":pn("success-40"),"text-warning":pn("warning-40"),"text-error":pn("brand-30"),"text-info":pn("neutral-40"),"text-inverse":pn("neutral-100"),icon:pn("neutral-40"),"icon-subtle":pn("neutral-50"),"icon-strongest":pn("neutral-10"),"icon-primary":pn("neutral-10"),"icon-primary-subtle":pn("neutral-30"),"icon-primary-subtlest":pn("neutral-60"),"icon-hover":pn("neutral-70"),"icon-selected":pn("brand-20"),"icon-selected-hover":pn("brand-10"),"icon-disabled":pn("neutral-50"),"icon-disabled-subtle":pn("neutral-70"),"icon-selected-disabled":pn("neutral-40"),"icon-success":pn("success-40"),"icon-warning":pn("warning-60"),"icon-error":pn("brand-30"),"icon-error-strong":pn("brand-10"),"icon-info":pn("neutral-40"),"icon-inverse":pn("neutral-100"),"icon-primary-inverse":"#F9B371",border:pn("neutral-90"),"border-strong":pn("neutral-30"),"border-stronger":pn("neutral-20"),"border-primary":pn("neutral-40"),"border-primary-subtle":pn("neutral-60"),"border-hover":pn("neutral-80"),"border-hover-strong":pn("neutral-10"),"border-selected":pn("brand-20"),"border-selected-subtle":pn("neutral-40"),"border-selected-subtlest":pn("neutral-70"),"border-selected-hover":pn("neutral-10"),"border-focus":pn("neutral-20"),"border-focus-strong":pn("neutral-10"),"border-disabled":pn("neutral-90"),"border-selected-disabled":pn("neutral-80"),"border-success":pn("success-40"),"border-warning":pn("warning-60"),"border-error":pn("brand-30"),"border-error-focus":pn("brand-20"),"border-error-focus-strong":pn("brand-10"),"border-error-strong":pn("brand-20"),"border-info":pn("neutral-40"),bg:pn("neutral-100"),"bg-strong":pn("neutral-95"),"bg-stronger":pn("neutral-90"),"bg-strongest":pn("neutral-80"),"bg-hover":pn("brand-90"),"bg-hover-strong":pn("brand-80"),"bg-hover-subtle":pn("neutral-90"),"bg-hover-neutral":pn("neutral-90"),"bg-hover-neutral-strong":pn("neutral-90"),"bg-selected":pn("brand-100"),"bg-selected-hover":pn("brand-30"),"bg-selected-strong":pn("brand-50"),"bg-selected-stronger":pn("brand-40"),"bg-selected-strongest":pn("brand-20"),"bg-selected-strongest-hover":pn("brand-10"),"bg-disabled":pn("neutral-90"),"bg-selected-disabled":pn("neutral-90"),"bg-selected-stronger-disabled":pn("neutral-80"),"bg-success":pn("success-100"),"bg-success-hover":pn("success-95"),"bg-success-strong":pn("success-50"),"bg-success-strong-hover":pn("success-40"),"bg-warning":pn("warning-100"),"bg-warning-hover":pn("warning-95"),"bg-warning-strong":pn("warning-50"),"bg-warning-strong-hover":pn("warning-40"),"bg-info":pn("neutral-95"),"bg-info-hover":pn("info-95"),"bg-info-strong":pn("info-50"),"bg-info-strong-hover":pn("info-40"),"bg-error":pn("brand-100"),"bg-error-hover":pn("error-95"),"bg-error-strong":pn("error-50"),"bg-error-strong-hover":pn("error-40"),"bg-inverse":pn("neutral-40"),"bg-inverse-subtle":pn("neutral-60"),"bg-inverse-subtler":pn("neutral-70"),"bg-inverse-subtlest":pn("neutral-80"),"bg-inverse-hover":pn("neutral-30"),"bg-primary":pn("brand-20"),"bg-primary-subtle":pn("brand-60"),"bg-primary-subtler":pn("brand-80"),"bg-primary-subtlest":pn("brand-100"),"bg-available":pn("success-60"),"bg-primary-hover":pn("brand-10"),"bg-primary-subtlest-hover":pn("brand-80"),"bg-primary-subtlest-selected":pn("brand-40"),"overlay-strong":"rgba(25, 25, 25, 0.95)","overlay-subtle":"rgba(25, 25, 25, 0.20)",hyperlink:pn("neutral-10"),"hyperlink-hover":pn("neutral-40"),"hyperlink-visited":pn("neutral-50"),"hyperlink-inverse":"#F8AE68","focus-ring":pn("primary-50"),"focus-ring-inverse":pn("white")},wn={text:pn("neutral-20"),"text-subtle":pn("neutral-30"),"text-subtler":pn("neutral-50"),"text-subtlest":pn("neutral-60"),"text-primary":pn("primary-50"),"text-primary-strongest":pn("primary-20"),"text-hover":pn("primary-40"),"text-selected":pn("primary-50"),"text-selected-hover":pn("primary-40"),"text-disabled":pn("neutral-50"),"text-disabled-subtle":pn("neutral-60"),"text-disabled-subtlest":pn("neutral-80"),"text-selected-disabled":pn("neutral-20"),"text-success":pn("success-40"),"text-warning":pn("warning-40"),"text-error":pn("error-40"),"text-info":pn("info-40"),"text-inverse":pn("white"),icon:pn("neutral-50"),"icon-subtle":pn("neutral-60"),"icon-strongest":pn("neutral-20"),"icon-primary":pn("primary-50"),"icon-primary-subtle":pn("primary-60"),"icon-primary-subtlest":pn("primary-70"),"icon-hover":pn("primary-40"),"icon-selected":pn("primary-50"),"icon-selected-hover":pn("primary-40"),"icon-disabled":pn("neutral-50"),"icon-disabled-subtle":pn("neutral-60"),"icon-selected-disabled":pn("neutral-60"),"icon-success":pn("success-50"),"icon-warning":pn("warning-60"),"icon-error":pn("error-50"),"icon-error-strong":pn("error-40"),"icon-info":pn("info-50"),"icon-inverse":pn("white"),"icon-primary-inverse":pn("primary-inverse"),border:pn("neutral-90"),"border-strong":pn("neutral-70"),"border-stronger":pn("neutral-50"),"border-primary":pn("primary-50"),"border-primary-subtle":pn("primary-60"),"border-hover":pn("primary-90"),"border-hover-strong":pn("primary-60"),"border-selected":pn("primary-50"),"border-selected-subtle":pn("primary-70"),"border-selected-subtlest":pn("primary-90"),"border-selected-hover":pn("primary-40"),"border-focus":pn("primary-60"),"border-focus-strong":pn("primary-50"),"border-disabled":pn("neutral-90"),"border-selected-disabled":pn("neutral-70"),"border-success":pn("success-60"),"border-warning":pn("warning-60"),"border-error":pn("error-60"),"border-error-focus":pn("error-60"),"border-error-focus-strong":pn("error-40"),"border-error-strong":pn("error-40"),"border-info":pn("info-60"),bg:pn("white"),"bg-strong":pn("neutral-100"),"bg-stronger":pn("neutral-95"),"bg-strongest":pn("neutral-90"),"bg-hover":pn("primary-95"),"bg-hover-strong":pn("primary-90"),"bg-hover-subtle":pn("primary-100"),"bg-hover-neutral":pn("neutral-100"),"bg-hover-neutral-strong":pn("neutral-90"),"bg-selected":pn("primary-95"),"bg-selected-hover":pn("primary-90"),"bg-selected-strong":pn("primary-90"),"bg-selected-stronger":pn("primary-70"),"bg-selected-strongest":pn("primary-50"),"bg-selected-strongest-hover":pn("primary-40"),"bg-disabled":pn("neutral-95"),"bg-selected-disabled":pn("neutral-95"),"bg-selected-stronger-disabled":pn("neutral-70"),"bg-success":pn("success-100"),"bg-success-hover":pn("success-95"),"bg-success-strong":pn("success-50"),"bg-success-strong-hover":pn("success-40"),"bg-warning":pn("warning-100"),"bg-warning-hover":pn("warning-95"),"bg-warning-strong":pn("warning-50"),"bg-warning-strong-hover":pn("warning-40"),"bg-info":pn("info-100"),"bg-info-hover":pn("info-95"),"bg-info-strong":pn("info-50"),"bg-info-strong-hover":pn("info-40"),"bg-error":pn("error-100"),"bg-error-hover":pn("error-95"),"bg-error-strong":pn("error-50"),"bg-error-strong-hover":pn("error-40"),"bg-inverse":pn("neutral-20"),"bg-inverse-subtle":pn("neutral-30"),"bg-inverse-subtler":pn("neutral-50"),"bg-inverse-subtlest":pn("neutral-60"),"bg-inverse-hover":pn("neutral-40"),"bg-primary":pn("primary-50"),"bg-primary-subtle":pn("primary-60"),"bg-primary-subtler":pn("primary-95"),"bg-primary-subtlest":pn("primary-100"),"bg-available":"#6DD0A1","bg-primary-hover":pn("primary-40"),"bg-primary-subtlest-hover":pn("primary-90"),"bg-primary-subtlest-selected":pn("primary-90"),"overlay-strong":"rgba(40, 40, 40, 0.85)","overlay-subtle":"rgba(40, 40, 40, 0.20)",hyperlink:pn("primary-50"),"hyperlink-hover":pn("primary-40"),"hyperlink-visited":pn("primary-40"),"hyperlink-inverse":pn("primary-inverse"),"focus-ring":pn("primary-50"),"focus-ring-inverse":pn("white")},En={text:pn("neutral-100"),"text-subtle":pn("neutral-80"),"text-subtler":pn("neutral-60"),"text-subtlest":pn("neutral-50"),"text-primary":pn("primary-60"),"text-primary-strongest":pn("primary-90"),"text-hover":pn("primary-70"),"text-selected":pn("primary-60"),"text-selected-hover":pn("primary-70"),"text-disabled":pn("neutral-60"),"text-disabled-subtle":pn("neutral-50"),"text-disabled-subtlest":pn("neutral-30"),"text-selected-disabled":pn("neutral-90"),"text-success":pn("success-70"),"text-warning":pn("warning-70"),"text-error":pn("error-70"),"text-info":pn("info-70"),"text-inverse":pn("black"),icon:pn("neutral-60"),"icon-subtle":pn("neutral-50"),"icon-strongest":pn("neutral-90"),"icon-primary":pn("primary-60"),"icon-primary-subtle":pn("primary-50"),"icon-primary-subtlest":pn("primary-40"),"icon-hover":pn("primary-70"),"icon-selected":pn("primary-60"),"icon-selected-hover":pn("primary-70"),"icon-disabled":pn("neutral-60"),"icon-disabled-subtle":pn("neutral-50"),"icon-selected-disabled":pn("neutral-50"),"icon-success":pn("success-60"),"icon-warning":pn("warning-50"),"icon-error":pn("error-60"),"icon-error-strong":pn("error-70"),"icon-info":pn("info-60"),"icon-inverse":pn("black"),"icon-primary-inverse":pn("primary-inverse"),border:pn("neutral-20"),"border-strong":pn("neutral-40"),"border-stronger":pn("neutral-60"),"border-primary":pn("primary-60"),"border-primary-subtle":pn("primary-50"),"border-hover":pn("primary-20"),"border-hover-strong":pn("primary-50"),"border-selected":pn("primary-60"),"border-selected-subtle":pn("primary-40"),"border-selected-subtlest":pn("primary-20"),"border-selected-hover":pn("primary-70"),"border-focus":pn("primary-50"),"border-focus-strong":pn("primary-60"),"border-disabled":pn("neutral-20"),"border-selected-disabled":pn("neutral-40"),"border-success":pn("success-50"),"border-warning":pn("warning-50"),"border-error":pn("error-50"),"border-error-focus":pn("error-50"),"border-error-focus-strong":pn("error-70"),"border-error-strong":pn("error-70"),"border-info":pn("info-50"),bg:pn("black"),"bg-strong":pn("neutral-10"),"bg-stronger":pn("neutral-20"),"bg-strongest":pn("neutral-20"),"bg-hover":pn("primary-20"),"bg-hover-strong":pn("primary-20"),"bg-hover-subtle":pn("primary-10"),"bg-hover-neutral":pn("neutral-10"),"bg-hover-neutral-strong":pn("neutral-20"),"bg-selected":pn("primary-20"),"bg-selected-hover":pn("primary-20"),"bg-selected-strong":pn("primary-20"),"bg-selected-stronger":pn("primary-40"),"bg-selected-strongest":pn("primary-60"),"bg-selected-strongest-hover":pn("primary-70"),"bg-disabled":pn("neutral-20"),"bg-selected-disabled":pn("neutral-20"),"bg-selected-stronger-disabled":pn("neutral-40"),"bg-success":pn("success-10"),"bg-success-hover":pn("success-20"),"bg-success-strong":pn("success-60"),"bg-success-strong-hover":pn("success-70"),"bg-warning":pn("warning-10"),"bg-warning-hover":pn("warning-20"),"bg-warning-strong":pn("warning-60"),"bg-warning-strong-hover":pn("warning-70"),"bg-info":pn("info-10"),"bg-info-hover":pn("info-20"),"bg-info-strong":pn("info-60"),"bg-info-strong-hover":pn("info-70"),"bg-error":pn("error-10"),"bg-error-hover":pn("error-20"),"bg-error-strong":pn("error-60"),"bg-error-strong-hover":pn("error-70"),"bg-inverse":pn("neutral-90"),"bg-inverse-subtle":pn("neutral-80"),"bg-inverse-subtler":pn("neutral-60"),"bg-inverse-subtlest":pn("neutral-50"),"bg-inverse-hover":pn("neutral-70"),"bg-primary":pn("primary-60"),"bg-primary-subtle":pn("primary-50"),"bg-primary-subtler":pn("primary-20"),"bg-primary-subtlest":pn("primary-10"),"bg-available":"#185339","bg-primary-hover":pn("primary-70"),"bg-primary-subtlest-hover":pn("primary-20"),"bg-primary-subtlest-selected":pn("primary-20"),"overlay-strong":"rgba(78, 78, 78, 0.80)","overlay-subtle":"rgba(78, 78, 78, 0.50)",hyperlink:pn("primary-60"),"hyperlink-hover":pn("primary-70"),"hyperlink-visited":pn("primary-70"),"hyperlink-inverse":pn("primary-inverse"),"focus-ring":pn("primary-60"),"focus-ring-inverse":pn("black")},$n={collections:{lifesg:vn,bookingsg:vn,rbs:vn,mylegacy:vn,ccube:vn,oneservice:vn,pa:Fn,a11yplayground:wn,supportgowhere:vn,imda:vn,spf:vn},defaultValue:"lifesg"},Dn={collections:{lifesg:xn,bookingsg:xn,rbs:xn,mylegacy:xn,ccube:xn,oneservice:xn,pa:xn,a11yplayground:En,supportgowhere:xn,imda:xn,spf:xn},defaultValue:"lifesg"},Cn=e=>r=>{var n;const t=r.theme,i="dark"===(null==t?void 0:t.colourMode),o=Kr(i?Dn:$n,null==t?void 0:t.colourScheme),a=i?"semanticColourDark":"semanticColour",s=null===(n=null==t?void 0:t.overrides)||void 0===n?void 0:n[a],l=s?Gr(o,e,s):o[e];return"function"==typeof l?l(r):l},Bn={text:Cn("text"),"text-subtle":Cn("text-subtle"),"text-subtler":Cn("text-subtler"),"text-subtlest":Cn("text-subtlest"),"text-primary":Cn("text-primary"),"text-primary-strongest":Cn("text-primary-strongest"),"text-hover":Cn("text-hover"),"text-selected":Cn("text-selected"),"text-selected-hover":Cn("text-selected-hover"),"text-disabled":Cn("text-disabled"),"text-disabled-subtle":Cn("text-disabled-subtle"),"text-disabled-subtlest":Cn("text-disabled-subtlest"),"text-selected-disabled":Cn("text-selected-disabled"),"text-success":Cn("text-success"),"text-warning":Cn("text-warning"),"text-error":Cn("text-error"),"text-info":Cn("text-info"),"text-inverse":Cn("text-inverse"),icon:Cn("icon"),"icon-subtle":Cn("icon-subtle"),"icon-strongest":Cn("icon-strongest"),"icon-primary":Cn("icon-primary"),"icon-primary-subtle":Cn("icon-primary-subtle"),"icon-primary-subtlest":Cn("icon-primary-subtlest"),"icon-hover":Cn("icon-hover"),"icon-selected":Cn("icon-selected"),"icon-selected-hover":Cn("icon-selected-hover"),"icon-disabled":Cn("icon-disabled"),"icon-disabled-subtle":Cn("icon-disabled-subtle"),"icon-selected-disabled":Cn("icon-selected-disabled"),"icon-success":Cn("icon-success"),"icon-warning":Cn("icon-warning"),"icon-error":Cn("icon-error"),"icon-error-strong":Cn("icon-error-strong"),"icon-info":Cn("icon-info"),"icon-inverse":Cn("icon-inverse"),"icon-primary-inverse":Cn("icon-primary-inverse"),border:Cn("border"),"border-strong":Cn("border-strong"),"border-stronger":Cn("border-stronger"),"border-primary":Cn("border-primary"),"border-primary-subtle":Cn("border-primary-subtle"),"border-hover":Cn("border-hover"),"border-hover-strong":Cn("border-hover-strong"),"border-selected":Cn("border-selected"),"border-selected-subtle":Cn("border-selected-subtle"),"border-selected-subtlest":Cn("border-selected-subtlest"),"border-selected-hover":Cn("border-selected-hover"),"border-focus":Cn("border-focus"),"border-focus-strong":Cn("border-focus-strong"),"border-disabled":Cn("border-disabled"),"border-selected-disabled":Cn("border-selected-disabled"),"border-success":Cn("border-success"),"border-warning":Cn("border-warning"),"border-error":Cn("border-error"),"border-error-focus":Cn("border-error-focus"),"border-error-focus-strong":Cn("border-error-focus-strong"),"border-error-strong":Cn("border-error-strong"),"border-info":Cn("border-info"),bg:Cn("bg"),"bg-strong":Cn("bg-strong"),"bg-stronger":Cn("bg-stronger"),"bg-strongest":Cn("bg-strongest"),"bg-hover":Cn("bg-hover"),"bg-hover-strong":Cn("bg-hover-strong"),"bg-hover-subtle":Cn("bg-hover-subtle"),"bg-hover-neutral":Cn("bg-hover-neutral"),"bg-hover-neutral-strong":Cn("bg-hover-neutral-strong"),"bg-selected":Cn("bg-selected"),"bg-selected-hover":Cn("bg-selected-hover"),"bg-selected-strong":Cn("bg-selected-strong"),"bg-selected-stronger":Cn("bg-selected-stronger"),"bg-selected-strongest":Cn("bg-selected-strongest"),"bg-selected-strongest-hover":Cn("bg-selected-strongest-hover"),"bg-disabled":Cn("bg-disabled"),"bg-selected-disabled":Cn("bg-selected-disabled"),"bg-selected-stronger-disabled":Cn("bg-selected-stronger-disabled"),"bg-success":Cn("bg-success"),"bg-success-hover":Cn("bg-success-hover"),"bg-success-strong":Cn("bg-success-strong"),"bg-success-strong-hover":Cn("bg-success-strong-hover"),"bg-warning":Cn("bg-warning"),"bg-warning-hover":Cn("bg-warning-hover"),"bg-warning-strong":Cn("bg-warning-strong"),"bg-warning-strong-hover":Cn("bg-warning-strong-hover"),"bg-info":Cn("bg-info"),"bg-info-hover":Cn("bg-info-hover"),"bg-info-strong":Cn("bg-info-strong"),"bg-info-strong-hover":Cn("bg-info-strong-hover"),"bg-error":Cn("bg-error"),"bg-error-hover":Cn("bg-error-hover"),"bg-error-strong":Cn("bg-error-strong"),"bg-error-strong-hover":Cn("bg-error-strong-hover"),"bg-inverse":Cn("bg-inverse"),"bg-inverse-subtle":Cn("bg-inverse-subtle"),"bg-inverse-subtler":Cn("bg-inverse-subtler"),"bg-inverse-subtlest":Cn("bg-inverse-subtlest"),"bg-inverse-hover":Cn("bg-inverse-hover"),"bg-primary":Cn("bg-primary"),"bg-primary-subtle":Cn("bg-primary-subtle"),"bg-primary-subtler":Cn("bg-primary-subtler"),"bg-primary-subtlest":Cn("bg-primary-subtlest"),"bg-available":Cn("bg-available"),"bg-primary-hover":Cn("bg-primary-hover"),"bg-primary-subtlest-hover":Cn("bg-primary-subtlest-hover"),"bg-primary-subtlest-selected":Cn("bg-primary-subtlest-selected"),"overlay-strong":Cn("overlay-strong"),"overlay-subtle":Cn("overlay-subtle"),hyperlink:Cn("hyperlink"),"hyperlink-hover":Cn("hyperlink-hover"),"hyperlink-visited":Cn("hyperlink-visited"),"hyperlink-inverse":Cn("hyperlink-inverse"),"focus-ring":Cn("focus-ring"),"focus-ring-inverse":Cn("focus-ring-inverse")},An={collections:{default:{solid:e=>r=>{var n,t,i;const{thickness:o,radius:a,colour:s}=e||{},l=null!==(n="function"==typeof o?o(r):o)&&void 0!==n?n:rn["width-010"](r),d=null!==(t="function"==typeof a?a(r):a)&&void 0!==t?t:0,c=null!==(i="function"==typeof s?s(r):s)&&void 0!==i?i:Bn.border(r),u=rn.solid;return g`
            border: ${l} ${u} ${c};
            border-radius: ${d};
        `},"dashed-default":e=>r=>{var n,t,i;const{thickness:o,radius:a,colour:s}=e||{},l=null!==(n="function"==typeof o?o(r):o)&&void 0!==n?n:rn["width-010"](r),d=null!==(t="function"==typeof a?a(r):a)&&void 0!==t?t:0,c=null!==(i="function"==typeof s?s(r):s)&&void 0!==i?i:Bn.border(r),u=encodeURIComponent(`<svg width='100%' height='100%' xmlns='http://www.w3.org/2000/svg'><rect width='100%' height='100%' fill='none' rx='${d}' ry='${d}' stroke='${c}' stroke-width='${l}' stroke-dasharray='4, 8' stroke-dashoffset='0' stroke-linecap='square'/></svg>`);return g`
            background-image: url("data:image/svg+xml,${u}");
            border-radius: ${d};
        `}}},defaultValue:"default"},Sn=e=>1===e.length&&"theme"in e[0],kn=e=>(...r)=>n=>{const t=Sn(r)?[]:r,i=Sn(r)?r[0]:n,o=i.theme;return(0,Kr(An,null==o?void 0:o.borderScheme)[e])(...t)(i)},zn={solid:kn("solid"),"dashed-default":kn("dashed-default")},On={collections:{default:{"xxs-min":0,"xxs-max":320,"xs-min":321,"xs-max":375,"sm-min":376,"sm-max":480,"md-min":481,"md-max":768,"lg-min":769,"lg-max":1200,"xl-min":1201,"xl-max":1440,"xxl-min":1441,"xxs-column":8,"xs-column":8,"sm-column":8,"md-column":8,"lg-column":12,"xl-column":12,"xxl-column":12,"xxs-gutter":16,"xs-gutter":16,"sm-gutter":16,"md-gutter":16,"lg-gutter":32,"xl-gutter":32,"xxl-gutter":32,"xxs-margin":24,"xs-margin":24,"sm-margin":24,"md-margin":24,"lg-margin":48,"xl-margin":48,"xxl-margin":48}},defaultValue:"default"},Mn=e=>r=>{var n;const t=r.theme,i=Kr(On,null==t?void 0:t.breakpointScheme);let o;return o=(null===(n=null==t?void 0:t.overrides)||void 0===n?void 0:n.breakpoint)?Gr(i,e,t.overrides.breakpoint):i[e],o},_n={"xxs-min":Mn("xxs-min"),"xxs-max":Mn("xxs-max"),"xs-min":Mn("xs-min"),"xs-max":Mn("xs-max"),"sm-min":Mn("sm-min"),"sm-max":Mn("sm-max"),"md-min":Mn("md-min"),"md-max":Mn("md-max"),"lg-min":Mn("lg-min"),"lg-max":Mn("lg-max"),"xl-min":Mn("xl-min"),"xl-max":Mn("xl-max"),"xxl-min":Mn("xxl-min"),"xxs-column":Mn("xxs-column"),"xs-column":Mn("xs-column"),"sm-column":Mn("sm-column"),"md-column":Mn("md-column"),"lg-column":Mn("lg-column"),"xl-column":Mn("xl-column"),"xxl-column":Mn("xxl-column"),"xxs-gutter":Mn("xxs-gutter"),"xs-gutter":Mn("xs-gutter"),"sm-gutter":Mn("sm-gutter"),"md-gutter":Mn("md-gutter"),"lg-gutter":Mn("lg-gutter"),"xl-gutter":Mn("xl-gutter"),"xxl-gutter":Mn("xxl-gutter"),"xxs-margin":Mn("xxs-margin"),"xs-margin":Mn("xs-margin"),"sm-margin":Mn("sm-margin"),"md-margin":Mn("md-margin"),"lg-margin":Mn("lg-margin"),"xl-margin":Mn("xl-margin"),"xxl-margin":Mn("xxl-margin")},Tn=e=>("max-width"===e?["xxs","xs","sm","md","lg","xl"]:["xxs","xs","sm","md","lg","xl","xxl"]).reduce(((r,n)=>(r[n]=((e,r)=>{const n=_n["max-width"===e?`${r}-max`:`${r}-min`];return r=>{const t=n(r);return`@media screen and (${e}: ${t}px)`}})(e,n),r)),{}),jn={MaxWidth:Tn("max-width"),MinWidth:Tn("min-width")},Ln={collections:{default:{"heading-size-xxl":"3rem","heading-size-xl":"2.5rem","heading-size-lg":"2rem","heading-size-md":"1.625rem","heading-size-sm":"1.375rem","heading-size-xs":"1.125rem","heading-lh-xxl":"3.5rem","heading-lh-xl":"3rem","heading-lh-lg":"2.5rem","heading-lh-md":"2.25rem","heading-lh-sm":"1.75rem","heading-lh-xs":"1.625rem","heading-ls-xxl":"-0.056rem","heading-ls-xl":"-0.032rem","heading-ls-lg":"-0.032rem","heading-ls-md":"0rem","heading-ls-sm":"0rem","heading-ls-xs":"0rem","weight-light":"300","weight-regular":"400","weight-semibold":"600","weight-bold":"700","font-family":"Open Sans","body-size-baseline":"1.125rem","body-size-md":"1rem","body-size-sm":"0.875rem","body-size-xs":"0.75rem","body-lh-baseline":"1.625rem","body-lh-md":"1.5rem","body-lh-sm":"1.625rem","body-lh-xs":"1.25rem","body-ls-baseline":"0rem","body-ls-md":"0.014rem","body-ls-sm":"0.012rem","body-ls-xs":"0.012rem","form-label-size":"1rem","form-description-size":"0.875rem","form-label-lh":"1.5rem","form-description-lh":"1.6rem","form-label-ls":"0.014rem","form-description-ls":"0.012rem"},bookingsg:{"heading-size-xxl":"3rem","heading-size-xl":"2.5rem","heading-size-lg":"2rem","heading-size-md":"1.625rem","heading-size-sm":"1.375rem","heading-size-xs":"1.125rem","heading-lh-xxl":"3.5rem","heading-lh-xl":"3rem","heading-lh-lg":"2.5rem","heading-lh-md":"2.25rem","heading-lh-sm":"1.75rem","heading-lh-xs":"1.75rem","heading-ls-xxl":"-0.056rem","heading-ls-xl":"-0.032rem","heading-ls-lg":"-0.032rem","heading-ls-md":"0rem","heading-ls-sm":"0rem","heading-ls-xs":"0rem","weight-light":"300","weight-regular":"400","weight-semibold":"600","weight-bold":"700","font-family":"Plus Jakarta Sans","body-size-baseline":"1.125rem","body-size-md":"1rem","body-size-sm":"0.875rem","body-size-xs":"0.75rem","body-lh-baseline":"1.75rem","body-lh-md":"1.5rem","body-lh-sm":"1.6rem","body-lh-xs":"1.2rem","body-ls-baseline":"0rem","body-ls-md":"0.014rem","body-ls-sm":"0.012rem","body-ls-xs":"0.012rem","form-label-size":"1rem","form-description-size":"0.875rem","form-label-lh":"1.5rem","form-description-lh":"1.6rem","form-label-ls":"0.014rem","form-description-ls":"0.012rem"},pa:{"heading-size-xxl":"2.5rem","heading-size-xl":"2rem","heading-size-lg":"1.75rem","heading-size-md":"1.5rem","heading-size-sm":"1.25rem","heading-size-xs":"1rem","heading-lh-xxl":"3rem","heading-lh-xl":"2.5rem","heading-lh-lg":"2.25rem","heading-lh-md":"2rem","heading-lh-sm":"2rem","heading-lh-xs":"1.75rem","heading-ls-xxl":"-0.032rem","heading-ls-xl":"-0.032rem","heading-ls-lg":"0rem","heading-ls-md":"0rem","heading-ls-sm":"0rem","heading-ls-xs":"0rem","weight-light":"300","weight-regular":"400","weight-semibold":"600","weight-bold":"700","font-family":"Lato","body-size-baseline":"1rem","body-size-md":"0.875rem","body-size-sm":"0.75rem","body-size-xs":"0.625rem","body-lh-baseline":"1.75rem","body-lh-md":"1.5rem","body-lh-sm":"1.25rem","body-lh-xs":"1.25rem","body-ls-baseline":"0rem","body-ls-md":"0.014rem","body-ls-sm":"0.012rem","body-ls-xs":"0.012rem","form-label-size":"1rem","form-description-size":"0.875rem","form-label-lh":"1.5rem","form-description-lh":"1.6rem","form-label-ls":"0.014rem","form-description-ls":"0.012rem"},a11yplayground:{"heading-size-xxl":"3rem","heading-size-xl":"2.5rem","heading-size-lg":"2rem","heading-size-md":"1.625rem","heading-size-sm":"1.375rem","heading-size-xs":"1.125rem","heading-lh-xxl":"3.5rem","heading-lh-xl":"3rem","heading-lh-lg":"2.5rem","heading-lh-md":"2.25rem","heading-lh-sm":"1.75rem","heading-lh-xs":"1.625rem","heading-ls-xxl":"-0.056rem","heading-ls-xl":"-0.032rem","heading-ls-lg":"-0.032rem","heading-ls-md":"0rem","heading-ls-sm":"0rem","heading-ls-xs":"0rem","weight-light":"300","weight-regular":"400","weight-semibold":"600","weight-bold":"700","font-family":"Atkinson Hyperlegible Next","body-size-baseline":"1.125rem","body-size-md":"1rem","body-size-sm":"0.875rem","body-size-xs":"0.75rem","body-lh-baseline":"1.625rem","body-lh-md":"1.5rem","body-lh-sm":"1.625rem","body-lh-xs":"1.25rem","body-ls-baseline":"0rem","body-ls-md":"0.014rem","body-ls-sm":"0.012rem","body-ls-xs":"0.012rem","form-label-size":"1.125rem","form-description-size":"1rem","form-label-lh":"1.5rem","form-description-lh":"1.625rem","form-label-ls":"0rem","form-description-ls":"0.00875rem"},supportgowhere:{"heading-size-xxl":"3rem","heading-size-xl":"2.5rem","heading-size-lg":"2rem","heading-size-md":"1.625rem","heading-size-sm":"1.375rem","heading-size-xs":"1.125rem","heading-lh-xxl":"3.5rem","heading-lh-xl":"3rem","heading-lh-lg":"2.5rem","heading-lh-md":"2.25rem","heading-lh-sm":"1.75rem","heading-lh-xs":"1.625rem","heading-ls-xxl":"-0.056rem","heading-ls-xl":"-0.032rem","heading-ls-lg":"-0.032rem","heading-ls-md":"0rem","heading-ls-sm":"0rem","heading-ls-xs":"0rem","weight-light":"300","weight-regular":"400","weight-semibold":"600","weight-bold":"700","font-family":"Libre Franklin","body-size-baseline":"1.125rem","body-size-md":"1rem","body-size-sm":"0.875rem","body-size-xs":"0.75rem","body-lh-baseline":"1.625rem","body-lh-md":"1.5rem","body-lh-sm":"1.625rem","body-lh-xs":"1.25rem","body-ls-baseline":"0rem","body-ls-md":"0.014rem","body-ls-sm":"0.012rem","body-ls-xs":"0.012rem","form-label-size":"1rem","form-description-size":"0.875rem","form-label-lh":"1.5rem","form-description-lh":"1.6rem","form-label-ls":"0.014rem","form-description-ls":"0.012rem"},imda:{"heading-size-xxl":"3rem","heading-size-xl":"2.5rem","heading-size-lg":"2rem","heading-size-md":"1.625rem","heading-size-sm":"1.375rem","heading-size-xs":"1.125rem","heading-lh-xxl":"3.5rem","heading-lh-xl":"3rem","heading-lh-lg":"2.5rem","heading-lh-md":"2.25rem","heading-lh-sm":"1.75rem","heading-lh-xs":"1.625rem","heading-ls-xxl":"-0.056rem","heading-ls-xl":"-0.032rem","heading-ls-lg":"-0.032rem","heading-ls-md":"0rem","heading-ls-sm":"0rem","heading-ls-xs":"0rem","weight-light":"300","weight-regular":"400","weight-semibold":"600","weight-bold":"700","font-family":"Montserrat","body-size-baseline":"1.125rem","body-size-md":"1rem","body-size-sm":"0.875rem","body-size-xs":"0.75rem","body-lh-baseline":"1.625rem","body-lh-md":"1.5rem","body-lh-sm":"1.625rem","body-lh-xs":"1.25rem","body-ls-baseline":"0rem","body-ls-md":"0.014rem","body-ls-sm":"0.012rem","body-ls-xs":"0.012rem","form-label-size":"1rem","form-description-size":"0.875rem","form-label-lh":"1.5rem","form-description-lh":"1.625rem","form-label-ls":"0.014rem","form-description-ls":"0.012rem"},spf:{"heading-size-xxl":"3.75rem","heading-size-xl":"3rem","heading-size-lg":"2.5rem","heading-size-md":"2rem","heading-size-sm":"1.75rem","heading-size-xs":"1.5rem","heading-lh-xxl":"4.5rem","heading-lh-xl":"3.5rem","heading-lh-lg":"3rem","heading-lh-md":"2.25rem","heading-lh-sm":"2rem","heading-lh-xs":"1.75rem","heading-ls-xxl":"-0.035rem","heading-ls-xl":"-0.02rem","heading-ls-lg":"-0.02rem","heading-ls-md":"0rem","heading-ls-sm":"0rem","heading-ls-xs":"0rem","weight-light":"300","weight-regular":"400","weight-semibold":"600","weight-bold":"700","font-family":"Public Sans","body-size-baseline":"1.2rem","body-size-md":"1.125rem","body-size-sm":"1rem","body-size-xs":"0.875rem","body-lh-baseline":"1.5rem","body-lh-md":"1.5rem","body-lh-sm":"1.5rem","body-lh-xs":"1.125rem","body-ls-baseline":"0rem","body-ls-md":"0.009rem","body-ls-sm":"0.008rem","body-ls-xs":"0.008rem","form-label-size":"1.125rem","form-description-size":"1rem","form-label-lh":"1.5rem","form-description-lh":"1.625rem","form-label-ls":"0.009rem","form-description-ls":"0.008rem"}},defaultValue:"default"},Yn=e=>r=>{var n;const t=r.theme,i=Kr(Ln,null==t?void 0:t.fontScheme);return(null===(n=null==t?void 0:t.overrides)||void 0===n?void 0:n.fontSpec)?Gr(i,e,t.overrides.fontSpec):i[e]},Wn={"heading-size-xxl":Yn("heading-size-xxl"),"heading-size-xl":Yn("heading-size-xl"),"heading-size-lg":Yn("heading-size-lg"),"heading-size-md":Yn("heading-size-md"),"heading-size-sm":Yn("heading-size-sm"),"heading-size-xs":Yn("heading-size-xs"),"heading-lh-xxl":Yn("heading-lh-xxl"),"heading-lh-xl":Yn("heading-lh-xl"),"heading-lh-lg":Yn("heading-lh-lg"),"heading-lh-md":Yn("heading-lh-md"),"heading-lh-sm":Yn("heading-lh-sm"),"heading-lh-xs":Yn("heading-lh-xs"),"heading-ls-xxl":Yn("heading-ls-xxl"),"heading-ls-xl":Yn("heading-ls-xl"),"heading-ls-lg":Yn("heading-ls-lg"),"heading-ls-md":Yn("heading-ls-md"),"heading-ls-sm":Yn("heading-ls-sm"),"heading-ls-xs":Yn("heading-ls-xs"),"weight-light":Yn("weight-light"),"weight-regular":Yn("weight-regular"),"weight-semibold":Yn("weight-semibold"),"weight-bold":Yn("weight-bold"),"font-family":Yn("font-family"),"body-size-baseline":Yn("body-size-baseline"),"body-size-md":Yn("body-size-md"),"body-size-sm":Yn("body-size-sm"),"body-size-xs":Yn("body-size-xs"),"body-lh-baseline":Yn("body-lh-baseline"),"body-lh-md":Yn("body-lh-md"),"body-lh-sm":Yn("body-lh-sm"),"body-lh-xs":Yn("body-lh-xs"),"body-ls-baseline":Yn("body-ls-baseline"),"body-ls-md":Yn("body-ls-md"),"body-ls-sm":Yn("body-ls-sm"),"body-ls-xs":Yn("body-ls-xs"),"form-label-size":Yn("form-label-size"),"form-description-size":Yn("form-description-size"),"form-label-lh":Yn("form-label-lh"),"form-description-lh":Yn("form-description-lh"),"form-label-ls":Yn("form-label-ls"),"form-description-ls":Yn("form-description-ls")},In=(e,r,n,t,i)=>{const{disableLigatures:o}=i||{};return g`
        font-family: ${Yn("font-family")};
        font-size: ${Yn(e)};
        font-weight: ${Yn(r)};
        line-height: ${Yn(n)};
        letter-spacing: ${Yn(t)};

        font-variant: ${o?"no-common-ligatures":"normal"};
    `},Hn=(e={})=>({"heading-xxl-light":In("heading-size-xxl","weight-light","heading-lh-xxl","heading-ls-xxl",e),"heading-xxl-regular":In("heading-size-xxl","weight-regular","heading-lh-xxl","heading-ls-xxl",e),"heading-xxl-semibold":In("heading-size-xxl","weight-semibold","heading-lh-xxl","heading-ls-xxl",e),"heading-xxl-bold":In("heading-size-xxl","weight-bold","heading-lh-xxl","heading-ls-xxl",e),"heading-xl-light":In("heading-size-xl","weight-light","heading-lh-xl","heading-ls-xl",e),"heading-xl-regular":In("heading-size-xl","weight-regular","heading-lh-xl","heading-ls-xl",e),"heading-xl-semibold":In("heading-size-xl","weight-semibold","heading-lh-xl","heading-ls-xl",e),"heading-xl-bold":In("heading-size-xl","weight-bold","heading-lh-xl","heading-ls-xl",e),"heading-lg-light":In("heading-size-lg","weight-light","heading-lh-lg","heading-ls-lg",e),"heading-lg-regular":In("heading-size-lg","weight-regular","heading-lh-lg","heading-ls-lg",e),"heading-lg-semibold":In("heading-size-lg","weight-semibold","heading-lh-lg","heading-ls-lg",e),"heading-lg-bold":In("heading-size-lg","weight-bold","heading-lh-lg","heading-ls-lg",e),"heading-md-light":In("heading-size-md","weight-light","heading-lh-md","heading-ls-md",e),"heading-md-regular":In("heading-size-md","weight-regular","heading-lh-md","heading-ls-md",e),"heading-md-semibold":In("heading-size-md","weight-semibold","heading-lh-md","heading-ls-md",e),"heading-md-bold":In("heading-size-md","weight-bold","heading-lh-md","heading-ls-md",e),"heading-sm-light":In("heading-size-sm","weight-light","heading-lh-sm","heading-ls-sm",e),"heading-sm-regular":In("heading-size-sm","weight-regular","heading-lh-sm","heading-ls-sm",e),"heading-sm-semibold":In("heading-size-sm","weight-semibold","heading-lh-sm","heading-ls-sm",e),"heading-sm-bold":In("heading-size-sm","weight-bold","heading-lh-sm","heading-ls-sm",e),"heading-xs-light":In("heading-size-xs","weight-light","heading-lh-xs","heading-ls-xs",e),"heading-xs-regular":In("heading-size-xs","weight-regular","heading-lh-xs","heading-ls-xs",e),"heading-xs-semibold":In("heading-size-xs","weight-semibold","heading-lh-xs","heading-ls-xs",e),"heading-xs-bold":In("heading-size-xs","weight-bold","heading-lh-xs","heading-ls-xs",e),"body-baseline-light":In("body-size-baseline","weight-light","body-lh-baseline","body-ls-baseline",e),"body-baseline-regular":In("body-size-baseline","weight-regular","body-lh-baseline","body-ls-baseline",e),"body-baseline-semibold":In("body-size-baseline","weight-semibold","body-lh-baseline","body-ls-baseline",e),"body-baseline-bold":In("body-size-baseline","weight-bold","body-lh-baseline","body-ls-baseline",e),"body-md-light":In("body-size-md","weight-light","body-lh-md","body-ls-md",e),"body-md-regular":In("body-size-md","weight-regular","body-lh-md","body-ls-md",e),"body-md-semibold":In("body-size-md","weight-semibold","body-lh-md","body-ls-md",e),"body-md-bold":In("body-size-md","weight-bold","body-lh-md","body-ls-md",e),"body-sm-light":In("body-size-sm","weight-light","body-lh-sm","body-ls-sm",e),"body-sm-regular":In("body-size-sm","weight-regular","body-lh-sm","body-ls-sm",e),"body-sm-semibold":In("body-size-sm","weight-semibold","body-lh-sm","body-ls-sm",e),"body-sm-bold":In("body-size-sm","weight-bold","body-lh-sm","body-ls-sm",e),"body-xs-light":In("body-size-xs","weight-light","body-lh-xs","body-ls-xs",e),"body-xs-regular":In("body-size-xs","weight-regular","body-lh-xs","body-ls-xs",e),"body-xs-semibold":In("body-size-xs","weight-semibold","body-lh-xs","body-ls-xs",e),"body-xs-bold":In("body-size-xs","weight-bold","body-lh-xs","body-ls-xs",e),"form-label":In("form-label-size","weight-semibold","form-label-lh","form-label-ls",e),"form-description":In("form-description-size","weight-regular","form-description-lh","form-description-ls",e)}),Rn=Hn({disableLigatures:!0}),Pn={collections:{default:Hn(),bookingsg:Rn,pa:Hn({disableLigatures:!0}),a11yplayground:Hn({disableLigatures:!0}),supportgowhere:Hn({disableLigatures:!0}),imda:Hn({disableLigatures:!0}),spf:Hn({disableLigatures:!0})},defaultValue:"default"},Nn=e=>r=>{var n;const t=r.theme,i=Kr(Pn,null==t?void 0:t.fontScheme),o=(null===(n=null==t?void 0:t.overrides)||void 0===n?void 0:n.font)?Gr(i,e,t.overrides.font):i[e];return"function"==typeof o?o(r):o},Vn={"heading-xxl-light":Nn("heading-xxl-light"),"heading-xxl-regular":Nn("heading-xxl-regular"),"heading-xxl-semibold":Nn("heading-xxl-semibold"),"heading-xxl-bold":Nn("heading-xxl-bold"),"heading-xl-light":Nn("heading-xl-light"),"heading-xl-regular":Nn("heading-xl-regular"),"heading-xl-semibold":Nn("heading-xl-semibold"),"heading-xl-bold":Nn("heading-xl-bold"),"heading-lg-light":Nn("heading-lg-light"),"heading-lg-regular":Nn("heading-lg-regular"),"heading-lg-semibold":Nn("heading-lg-semibold"),"heading-lg-bold":Nn("heading-lg-bold"),"heading-md-light":Nn("heading-md-light"),"heading-md-regular":Nn("heading-md-regular"),"heading-md-semibold":Nn("heading-md-semibold"),"heading-md-bold":Nn("heading-md-bold"),"heading-sm-light":Nn("heading-sm-light"),"heading-sm-regular":Nn("heading-sm-regular"),"heading-sm-semibold":Nn("heading-sm-semibold"),"heading-sm-bold":Nn("heading-sm-bold"),"heading-xs-light":Nn("heading-xs-light"),"heading-xs-regular":Nn("heading-xs-regular"),"heading-xs-semibold":Nn("heading-xs-semibold"),"heading-xs-bold":Nn("heading-xs-bold"),"body-baseline-light":Nn("body-baseline-light"),"body-baseline-regular":Nn("body-baseline-regular"),"body-baseline-semibold":Nn("body-baseline-semibold"),"body-baseline-bold":Nn("body-baseline-bold"),"body-md-light":Nn("body-md-light"),"body-md-regular":Nn("body-md-regular"),"body-md-semibold":Nn("body-md-semibold"),"body-md-bold":Nn("body-md-bold"),"body-sm-light":Nn("body-sm-light"),"body-sm-regular":Nn("body-sm-regular"),"body-sm-semibold":Nn("body-sm-semibold"),"body-sm-bold":Nn("body-sm-bold"),"body-xs-light":Nn("body-xs-light"),"body-xs-regular":Nn("body-xs-regular"),"body-xs-semibold":Nn("body-xs-semibold"),"body-xs-bold":Nn("body-xs-bold"),"form-label":Nn("form-label"),"form-description":Nn("form-description")},Zn={collections:{default:{"duration-150":"150ms","duration-250":"250ms","duration-350":"350ms","duration-500":"500ms","duration-800":"800ms","duration-1000":"1000ms","ease-default":"cubic-bezier(0.45, 0.05, 0.55, 0.95)","ease-standard":"cubic-bezier(0.86, 0, 0.07, 1)","ease-entrance":"cubic-bezier(0.18, 0.13, 0, 1)","ease-exit":"cubic-bezier(1, 0, 0.8, 0.85)"}},defaultValue:"default"},Xn=e=>r=>{var n;const t=r.theme,i=Kr(Zn,null==t?void 0:t.motionScheme);return(null===(n=null==t?void 0:t.overrides)||void 0===n?void 0:n.motion)?Gr(i,e,t.overrides.motion):i[e]},Un={"duration-150":Xn("duration-150"),"duration-250":Xn("duration-250"),"duration-350":Xn("duration-350"),"duration-500":Xn("duration-500"),"duration-800":Xn("duration-800"),"duration-1000":Xn("duration-1000"),"ease-default":Xn("ease-default"),"ease-standard":Xn("ease-standard"),"ease-entrance":Xn("ease-entrance"),"ease-exit":Xn("ease-exit")},Jn={collections:{default:{none:0,xs:2,sm:4,md:8,lg:12,full:9999},spf:{none:0,xs:2,sm:8,md:8,lg:12,full:9999}},defaultValue:"default"},qn=e=>r=>{var n;const t=r.theme,i=Kr(Jn,null==t?void 0:t.radiusScheme);return(null===(n=null==t?void 0:t.overrides)||void 0===n?void 0:n.radius)?`${Gr(i,e,t.overrides.radius)}px`:`${i[e]}px`},Gn={none:qn("none"),xs:qn("xs"),sm:qn("sm"),md:qn("md"),lg:qn("lg"),full:qn("full")},Kn=(e,r,n)=>t=>{const i=Cn(r)(t)||pn(r)(t);return`${e} rgba(from ${i} r g b / ${100*n}%)`},Qn={collections:{default:{"xs-subtle":Kn("0 0 4px 1px","neutral-50",.24),"xs-strong":Kn("0 0 4px 1px","neutral-50",.5),"xs-focus-strong":Kn("0 0 4px 1px","border-focus",.5),"xs-error-strong":Kn("0 0 4px 1px","border-error",.5),"sm-subtle":Kn("0 2px 4px 0","neutral-50",.24),"sm-strong":Kn("0 2px 4px 0","neutral-50",.5),"md-subtle":Kn("0 2px 8px 0","neutral-50",.24),"md-strong":Kn("0 2px 8px 0","neutral-50",.5),"lg-subtle":Kn("0 2px 12px 1px","neutral-50",.24),"lg-strong":Kn("0 2px 12px 1px","neutral-50",.5)}},defaultValue:"default"},et=e=>r=>{var n;const t=r.theme,i=Kr(Qn,null==t?void 0:t.shadowScheme),o=(null===(n=null==t?void 0:t.overrides)||void 0===n?void 0:n.shadow)?Gr(i,e,t.overrides.shadow):i[e];return"function"==typeof o?o(r):o},rt={"xs-subtle":et("xs-subtle"),"xs-strong":et("xs-strong"),"xs-focus-strong":et("xs-focus-strong"),"xs-error-strong":et("xs-error-strong"),"sm-subtle":et("sm-subtle"),"sm-strong":et("sm-strong"),"md-subtle":et("md-subtle"),"md-strong":et("md-strong"),"lg-subtle":et("lg-subtle"),"lg-strong":et("lg-strong")},nt={collections:{default:{"spacing-0":0,"spacing-4":4,"spacing-8":8,"spacing-12":12,"spacing-16":16,"spacing-20":20,"spacing-24":24,"spacing-32":32,"spacing-40":40,"spacing-48":48,"spacing-64":64,"spacing-72":72,"layout-xs":8,"layout-sm":16,"layout-md":24,"layout-lg":32,"layout-xl":48,"layout-xxl":64,"layout-xxxl":128}},defaultValue:"default"},tt=e=>r=>{var n;const t=r.theme,i=Kr(nt,null==t?void 0:t.spacingScheme);return(null===(n=null==t?void 0:t.overrides)||void 0===n?void 0:n.spacing)?`${Gr(i,e,t.overrides.spacing)}px`:`${i[e]}px`},it={"spacing-0":tt("spacing-0"),"spacing-4":tt("spacing-4"),"spacing-8":tt("spacing-8"),"spacing-12":tt("spacing-12"),"spacing-16":tt("spacing-16"),"spacing-20":tt("spacing-20"),"spacing-24":tt("spacing-24"),"spacing-32":tt("spacing-32"),"spacing-40":tt("spacing-40"),"spacing-48":tt("spacing-48"),"spacing-64":tt("spacing-64"),"spacing-72":tt("spacing-72"),"layout-xs":tt("layout-xs"),"layout-sm":tt("layout-sm"),"layout-md":tt("layout-md"),"layout-lg":tt("layout-lg"),"layout-xl":tt("layout-xl"),"layout-xxl":tt("layout-xxl"),"layout-xxxl":tt("layout-xxxl")},ot=(e,r)=>Object.assign(Object.assign({},e),{colourMode:r}),at=Object.assign(Object.assign({},Bn),{Primitive:fn}),st=Object.assign(Object.assign({},Vn),{Spec:Wn}),lt=Un,dt=Object.assign(Object.assign({},rn),{Util:zn}),ct=it,ut=Gn,gt=rt,bt=_n,mt=jn,ht={colourScheme:"lifesg",fontScheme:"default",motionScheme:"default",borderScheme:"default",spacingScheme:"default",radiusScheme:"default",shadowScheme:"default",breakpointScheme:"default",resourceScheme:"lifesg",componentScheme:"lifesg",_v2:{colorScheme:"base",textStyleScheme:"base",designTokenScheme:"base",resourceScheme:"base"}},yt={colourScheme:"bookingsg",fontScheme:"bookingsg",motionScheme:"default",borderScheme:"default",spacingScheme:"default",radiusScheme:"default",shadowScheme:"default",breakpointScheme:"default",resourceScheme:"bookingsg",_v2:{colorScheme:"bookingsg",textStyleScheme:"base",designTokenScheme:"base",resourceScheme:"bookingsg"}},pt={colourScheme:"ccube",fontScheme:"default",motionScheme:"default",borderScheme:"default",spacingScheme:"default",radiusScheme:"default",shadowScheme:"default",breakpointScheme:"default",resourceScheme:"ccube",_v2:{colorScheme:"ccube",textStyleScheme:"base",designTokenScheme:"base",resourceScheme:"ccube"}},ft={colourScheme:"mylegacy",fontScheme:"default",motionScheme:"default",borderScheme:"default",spacingScheme:"default",radiusScheme:"default",shadowScheme:"default",breakpointScheme:"default",resourceScheme:"mylegacy",_v2:{colorScheme:"mylegacy",textStyleScheme:"base",designTokenScheme:"base",resourceScheme:"mylegacy"}},vt={colourScheme:"rbs",fontScheme:"default",motionScheme:"default",borderScheme:"default",spacingScheme:"default",radiusScheme:"default",shadowScheme:"default",breakpointScheme:"default",resourceScheme:"rbs",_v2:{colorScheme:"rbs",textStyleScheme:"base",designTokenScheme:"rbs",resourceScheme:"rbs"}},xt={colourScheme:"oneservice",fontScheme:"default",motionScheme:"default",borderScheme:"default",spacingScheme:"default",radiusScheme:"default",shadowScheme:"default",breakpointScheme:"default",resourceScheme:"oneservice"},Ft={colourScheme:"pa",fontScheme:"pa",motionScheme:"default",borderScheme:"default",spacingScheme:"default",radiusScheme:"default",shadowScheme:"default",breakpointScheme:"default",resourceScheme:"pa",componentScheme:"pa"},wt={colourScheme:"a11yplayground",fontScheme:"a11yplayground",motionScheme:"default",borderScheme:"default",spacingScheme:"default",radiusScheme:"default",shadowScheme:"default",breakpointScheme:"default",resourceScheme:"a11yplayground",componentScheme:"a11yplayground"},Et={colourScheme:"supportgowhere",fontScheme:"supportgowhere",motionScheme:"default",borderScheme:"default",spacingScheme:"default",radiusScheme:"default",shadowScheme:"default",breakpointScheme:"default",resourceScheme:"supportgowhere",componentScheme:"default"},$t={colourScheme:"imda",fontScheme:"imda",motionScheme:"default",borderScheme:"default",spacingScheme:"default",radiusScheme:"default",shadowScheme:"default",breakpointScheme:"default",resourceScheme:"imda",componentScheme:"default"},Dt={colourScheme:"spf",fontScheme:"spf",motionScheme:"default",borderScheme:"default",spacingScheme:"default",radiusScheme:"spf",shadowScheme:"default",breakpointScheme:"default",resourceScheme:"spf",componentScheme:"spf"};Object.assign(Object.assign({},ht),{light:ot(ht,"light"),dark:ot(ht,"dark")}),Object.assign(Object.assign({},yt),{light:ot(yt,"light"),dark:ot(yt,"dark")}),Object.assign(Object.assign({},pt),{light:ot(pt,"light"),dark:ot(pt,"dark")}),Object.assign(Object.assign({},ft),{light:ot(ft,"light"),dark:ot(ft,"dark")}),Object.assign(Object.assign({},vt),{light:ot(vt,"light"),dark:ot(vt,"dark")}),Object.assign(Object.assign({},xt),{light:ot(xt,"light"),dark:ot(xt,"dark")}),Object.assign(Object.assign({},Ft),{light:ot(Ft,"light"),dark:ot(Ft,"dark")}),Object.assign(Object.assign({},wt),{light:ot(wt,"light"),dark:ot(wt,"dark")}),Object.assign(Object.assign({},Et),{light:ot(Et,"light"),dark:ot(Et,"dark")}),Object.assign(Object.assign({},$t),{light:ot($t,"light"),dark:ot($t,"dark")}),Object.assign(Object.assign({},Dt),{light:ot(Dt,"light"),dark:ot(Dt,"dark")});const Ct=(e,r,n=!1)=>g`
        ${st[`${e}-${r}`]}
        ${n?"margin-bottom: 1.05em;":"margin-bottom: 0;"}
    `,Bt=e=>{if(e)return g`
            ${r=e,g`
    display: -webkit-box;
    -webkit-line-clamp: ${r};
    -webkit-box-orient: vertical;
    overflow: hidden;
`}
        `;var r},At=(e,r,n,t,i)=>g`
    ${Ct(e,r||"regular",t)}
    ${((e=!1,r=!1,n)=>r?g`
            display: block;
            ${Bt(n)}
        `:e?g`
            display: inline;
        `:g`
            display: block;
            ${Bt(n)}
        `)(n,t,i)}
    color: ${at.text};
`,St=u.div`
    ${e=>At(e.$textStyle,e.$weight,e.$inline,e.$paragraph,e.$maxLines)}
`,kt=u.a`
    ${e=>{var r;return g`
        ${Ct(e.$textStyle,e.$weight||"regular")}
        color: ${at.hyperlink};
        text-decoration: ${null!==(r=e.$underlineStyle)&&void 0!==r?r:"underline"};

        &:hover,
        &:active,
        &:focus {
            color: ${at["text-hover"]};
        }
    `}}
`,zt=u(h)`
    height: 1lh;
    width: 1em;
    margin-left: 0.4em;
    vertical-align: middle;
`;var Ot;!function(n){const i=(r,n,i)=>{const o=(t,i)=>{var{weight:o,inline:a,paragraph:s,maxLines:l}=t,d=A(t,["weight","inline","paragraph","maxLines"]);return e(St,Object.assign({ref:i,as:a?"span":r,$textStyle:n,$weight:o,$inline:a,$paragraph:s,$maxLines:l},d))};return o.displayName=`Typography.${i}`,t.forwardRef(o)};n.HeadingXXL=i("h1","heading-xxl","HeadingXXL"),n.HeadingXL=i("h2","heading-xl","HeadingXL"),n.HeadingLG=i("h3","heading-lg","HeadingLG"),n.HeadingMD=i("h4","heading-md","HeadingMD"),n.HeadingSM=i("h5","heading-sm","HeadingSM"),n.HeadingXS=i("h6","heading-xs","HeadingXS");const o=(r,n)=>{const i=(n,t)=>{var{weight:i,inline:o,paragraph:a,maxLines:s}=n,l=A(n,["weight","inline","paragraph","maxLines"]);return e(St,Object.assign({ref:t,as:o?"span":"p",$textStyle:r,$weight:i,$inline:o,$paragraph:a,$maxLines:s},l))};return i.displayName=`Typography.${n}`,t.forwardRef(i)};n.BodyBL=o("body-baseline","BodyBL"),n.BodyMD=o("body-md","BodyMD"),n.BodySM=o("body-sm","BodySM"),n.BodyXS=o("body-xs","BodyXS");const a=(n,i)=>{const o=(t,i)=>{var{weight:o,children:a,external:s,underlineStyle:l="underline"}=t,d=A(t,["weight","children","external","underlineStyle"]);return r(kt,Object.assign({ref:i,$textStyle:n,$weight:o,$underlineStyle:l},d,{children:[a,s&&e(zt,{})]}))};return o.displayName=`Typography.${i}`,t.forwardRef(o)};n.LinkBL=a("body-baseline","LinkBL"),n.LinkMD=a("body-md","LinkMD"),n.LinkSM=a("body-sm","LinkSM"),n.LinkXS=a("body-xs","LinkXS")}(Ot||(Ot={}));const Mt=u.div`
    border-radius: ${ut.md};
    background: ${at.bg};
    padding: ${ct["spacing-16"]} ${ct["spacing-32"]};
    ${e=>{var r;return"dark"===(null===(r=e.theme)||void 0===r?void 0:r.colourMode)?g`
                  border: ${dt["width-010"]} ${dt.solid}
                      ${at.border};
              `:g`
                  box-shadow: ${gt["md-subtle"]};
              `}}
`,_t=u.button`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: ${ct["spacing-24"]};
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

        ${({$highlight:e})=>e&&g`
                background-color: ${at["bg-hover-neutral"]};
            `}
    }
`,Tt=t.forwardRef(((r,n)=>{var{children:t,focusHighlight:i=!0,focusOutline:o="none",type:a="button"}=r,s=A(r,["children","focusHighlight","focusOutline","type"]);return e(_t,Object.assign({ref:n,$outline:o,$highlight:i,type:a},s,{children:t}))})),jt=u.div`
    position: relative;
    display: flex;
    flex-direction: column;
    width: 40rem;
    max-height: 70%;
    background: ${at.bg};
    box-shadow: ${gt["lg-strong"]};
    border-radius: ${ut.lg};
    overflow: hidden;

    ${mt.MaxWidth.md} {
        width: 90%;
        max-height: 70%;
    }
`,Lt=u(Tt)`
    position: absolute;
    top: var(--close-button-top-inset, ${ct["spacing-16"]});
    right: var(--close-button-right-inset, ${ct["spacing-16"]});
    padding: 0;
    color: ${at.icon};

    svg {
        height: 2rem;
        width: 2rem;
    }

    ${mt.MaxWidth.sm} {
        right: var(--close-button-right-inset, ${ct["spacing-20"]});
    }
`,Yt=e=>{const{textSize:r}=e||{};return g`
        // Text styling
        ${r&&st[`${r}-regular`]}

        strong {
            font-weight: ${st.Spec["weight-semibold"]};
            ${r&&st[`${r}-semibold`]};
        }

        p {
            margin: 0;
        }

        // Link styling
        a {
            font-weight: ${st.Spec["weight-semibold"]};
            ${r&&st[`${r}-semibold`]}
            color: ${at.hyperlink};
            text-decoration: underline;

            svg {
                color: ${at["icon-primary"]};
                height: 1lh;
                width: 1em;
                margin-left: 0.4rem;
                vertical-align: middle;
            }

            &:hover,
            &:active,
            &:visited,
            &:focus {
                color: ${at["hyperlink-hover"]};

                svg {
                    color: ${at["icon-hover"]};
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
    `};u.div`
    max-width: 30rem;
    padding: 0 1rem;
    pointer-events: auto;
    outline: none;
`,u((r=>{var{children:n}=r,t=A(r,["children"]);const i=t["data-testid"]||"card";return e(Mt,Object.assign({},t,{"data-testid":i,children:"string"==typeof n?e(Ot.BodyBL,{children:n}):n}))}))`
    color: ${at.text};
    ${Yt({textSize:"body-md"})}

    ${mt.MaxWidth.sm} {
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
        background: ${at["bg-inverse-subtlest"]};
        border: 5px solid transparent;
        border-radius: ${ut.full};
        background-clip: padding-box;
    }
`,u((n=>{var{id:t="modal-box",children:i,onClose:o,showCloseButton:a=!0}=n,s=A(n,["id","children","onClose","showCloseButton"]);return r(jt,Object.assign({"data-testid":t},s,{onClick:e=>{e.stopPropagation()},children:[a&&e(Lt,{onClick:o,"data-testid":"close-button",focusHighlight:!1,focusOutline:"browser",children:e(y,{})}),i]}))}))`
    padding: 3.5rem 1.25rem 2.5rem;
`,u.div`
    overflow-y: scroll;

    &::-webkit-scrollbar {
        display: none; /* Chrome/Safari/Webkit */
    }

    color: ${at.text};
    ${Yt({textSize:"body-md"})}
`;var Wt={exports:{}};Wt.exports=function(){var e=1e3,r=6e4,n=36e5,t="millisecond",i="second",o="minute",a="hour",s="day",l="week",d="month",c="quarter",u="year",g="date",b="Invalid Date",m=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,h=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,y={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(e){var r=["th","st","nd","rd"],n=e%100;return"["+e+(r[(n-20)%10]||r[n]||r[0])+"]"}},p=function(e,r,n){var t=String(e);return!t||t.length>=r?e:""+Array(r+1-t.length).join(n)+e},f={s:p,z:function(e){var r=-e.utcOffset(),n=Math.abs(r),t=Math.floor(n/60),i=n%60;return(r<=0?"+":"-")+p(t,2,"0")+":"+p(i,2,"0")},m:function e(r,n){if(r.date()<n.date())return-e(n,r);var t=12*(n.year()-r.year())+(n.month()-r.month()),i=r.clone().add(t,d),o=n-i<0,a=r.clone().add(t+(o?-1:1),d);return+(-(t+(n-i)/(o?i-a:a-i))||0)},a:function(e){return e<0?Math.ceil(e)||0:Math.floor(e)},p:function(e){return{M:d,y:u,w:l,d:s,D:g,h:a,m:o,s:i,ms:t,Q:c}[e]||String(e||"").toLowerCase().replace(/s$/,"")},u:function(e){return void 0===e}},v="en",x={};x[v]=y;var F="$isDayjsObject",w=function(e){return e instanceof C||!(!e||!e[F])},E=function e(r,n,t){var i;if(!r)return v;if("string"==typeof r){var o=r.toLowerCase();x[o]&&(i=o),n&&(x[o]=n,i=o);var a=r.split("-");if(!i&&a.length>1)return e(a[0])}else{var s=r.name;x[s]=r,i=s}return!t&&i&&(v=i),i||!t&&v},$=function(e,r){if(w(e))return e.clone();var n="object"==typeof r?r:{};return n.date=e,n.args=arguments,new C(n)},D=f;D.l=E,D.i=w,D.w=function(e,r){return $(e,{locale:r.$L,utc:r.$u,x:r.$x,$offset:r.$offset})};var C=function(){function y(e){this.$L=E(e.locale,null,!0),this.parse(e),this.$x=this.$x||e.x||{},this[F]=!0}var p=y.prototype;return p.parse=function(e){this.$d=function(e){var r=e.date,n=e.utc;if(null===r)return new Date(NaN);if(D.u(r))return new Date;if(r instanceof Date)return new Date(r);if("string"==typeof r&&!/Z$/i.test(r)){var t=r.match(m);if(t){var i=t[2]-1||0,o=(t[7]||"0").substring(0,3);return n?new Date(Date.UTC(t[1],i,t[3]||1,t[4]||0,t[5]||0,t[6]||0,o)):new Date(t[1],i,t[3]||1,t[4]||0,t[5]||0,t[6]||0,o)}}return new Date(r)}(e),this.init()},p.init=function(){var e=this.$d;this.$y=e.getFullYear(),this.$M=e.getMonth(),this.$D=e.getDate(),this.$W=e.getDay(),this.$H=e.getHours(),this.$m=e.getMinutes(),this.$s=e.getSeconds(),this.$ms=e.getMilliseconds()},p.$utils=function(){return D},p.isValid=function(){return!(this.$d.toString()===b)},p.isSame=function(e,r){var n=$(e);return this.startOf(r)<=n&&n<=this.endOf(r)},p.isAfter=function(e,r){return $(e)<this.startOf(r)},p.isBefore=function(e,r){return this.endOf(r)<$(e)},p.$g=function(e,r,n){return D.u(e)?this[r]:this.set(n,e)},p.unix=function(){return Math.floor(this.valueOf()/1e3)},p.valueOf=function(){return this.$d.getTime()},p.startOf=function(e,r){var n=this,t=!!D.u(r)||r,c=D.p(e),b=function(e,r){var i=D.w(n.$u?Date.UTC(n.$y,r,e):new Date(n.$y,r,e),n);return t?i:i.endOf(s)},m=function(e,r){return D.w(n.toDate()[e].apply(n.toDate("s"),(t?[0,0,0,0]:[23,59,59,999]).slice(r)),n)},h=this.$W,y=this.$M,p=this.$D,f="set"+(this.$u?"UTC":"");switch(c){case u:return t?b(1,0):b(31,11);case d:return t?b(1,y):b(0,y+1);case l:var v=this.$locale().weekStart||0,x=(h<v?h+7:h)-v;return b(t?p-x:p+(6-x),y);case s:case g:return m(f+"Hours",0);case a:return m(f+"Minutes",1);case o:return m(f+"Seconds",2);case i:return m(f+"Milliseconds",3);default:return this.clone()}},p.endOf=function(e){return this.startOf(e,!1)},p.$set=function(e,r){var n,l=D.p(e),c="set"+(this.$u?"UTC":""),b=(n={},n[s]=c+"Date",n[g]=c+"Date",n[d]=c+"Month",n[u]=c+"FullYear",n[a]=c+"Hours",n[o]=c+"Minutes",n[i]=c+"Seconds",n[t]=c+"Milliseconds",n)[l],m=l===s?this.$D+(r-this.$W):r;if(l===d||l===u){var h=this.clone().set(g,1);h.$d[b](m),h.init(),this.$d=h.set(g,Math.min(this.$D,h.daysInMonth())).$d}else b&&this.$d[b](m);return this.init(),this},p.set=function(e,r){return this.clone().$set(e,r)},p.get=function(e){return this[D.p(e)]()},p.add=function(t,c){var g,b=this;t=Number(t);var m=D.p(c),h=function(e){var r=$(b);return D.w(r.date(r.date()+Math.round(e*t)),b)};if(m===d)return this.set(d,this.$M+t);if(m===u)return this.set(u,this.$y+t);if(m===s)return h(1);if(m===l)return h(7);var y=(g={},g[o]=r,g[a]=n,g[i]=e,g)[m]||1,p=this.$d.getTime()+t*y;return D.w(p,this)},p.subtract=function(e,r){return this.add(-1*e,r)},p.format=function(e){var r=this,n=this.$locale();if(!this.isValid())return n.invalidDate||b;var t=e||"YYYY-MM-DDTHH:mm:ssZ",i=D.z(this),o=this.$H,a=this.$m,s=this.$M,l=n.weekdays,d=n.months,c=n.meridiem,u=function(e,n,i,o){return e&&(e[n]||e(r,t))||i[n].slice(0,o)},g=function(e){return D.s(o%12||12,e,"0")},m=c||function(e,r,n){var t=e<12?"AM":"PM";return n?t.toLowerCase():t};return t.replace(h,(function(e,t){return t||function(e){switch(e){case"YY":return String(r.$y).slice(-2);case"YYYY":return D.s(r.$y,4,"0");case"M":return s+1;case"MM":return D.s(s+1,2,"0");case"MMM":return u(n.monthsShort,s,d,3);case"MMMM":return u(d,s);case"D":return r.$D;case"DD":return D.s(r.$D,2,"0");case"d":return String(r.$W);case"dd":return u(n.weekdaysMin,r.$W,l,2);case"ddd":return u(n.weekdaysShort,r.$W,l,3);case"dddd":return l[r.$W];case"H":return String(o);case"HH":return D.s(o,2,"0");case"h":return g(1);case"hh":return g(2);case"a":return m(o,a,!0);case"A":return m(o,a,!1);case"m":return String(a);case"mm":return D.s(a,2,"0");case"s":return String(r.$s);case"ss":return D.s(r.$s,2,"0");case"SSS":return D.s(r.$ms,3,"0");case"Z":return i}return null}(e)||i.replace(":","")}))},p.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},p.diff=function(t,g,b){var m,h=this,y=D.p(g),p=$(t),f=(p.utcOffset()-this.utcOffset())*r,v=this-p,x=function(){return D.m(h,p)};switch(y){case u:m=x()/12;break;case d:m=x();break;case c:m=x()/3;break;case l:m=(v-f)/6048e5;break;case s:m=(v-f)/864e5;break;case a:m=v/n;break;case o:m=v/r;break;case i:m=v/e;break;default:m=v}return b?m:D.a(m)},p.daysInMonth=function(){return this.endOf(d).$D},p.$locale=function(){return x[this.$L]},p.locale=function(e,r){if(!e)return this.$L;var n=this.clone(),t=E(e,r,!0);return t&&(n.$L=t),n},p.clone=function(){return D.w(this.$d,this)},p.toDate=function(){return new Date(this.valueOf())},p.toJSON=function(){return this.isValid()?this.toISOString():null},p.toISOString=function(){return this.$d.toISOString()},p.toString=function(){return this.$d.toUTCString()},y}(),B=C.prototype;return $.prototype=B,[["$ms",t],["$s",i],["$m",o],["$H",a],["$W",s],["$M",d],["$y",u],["$D",g]].forEach((function(e){B[e[1]]=function(r){return this.$g(r,e[0],e[1])}})),$.extend=function(e,r){return e.$i||(e(r,C,$),e.$i=!0),$},$.locale=E,$.isDayjs=w,$.unix=function(e){return $(1e3*e)},$.en=x[v],$.Ls=x,$.p={},$}();var It=k(Wt.exports),Ht={exports:{}};Ht.exports=function(){var e={LTS:"h:mm:ss A",LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D, YYYY",LLL:"MMMM D, YYYY h:mm A",LLLL:"dddd, MMMM D, YYYY h:mm A"},r=/(\[[^[]*\])|([-_:/.,()\s]+)|(A|a|YYYY|YY?|MM?M?M?|Do|DD?|hh?|HH?|mm?|ss?|S{1,3}|z|ZZ?)/g,n=/\d\d/,t=/\d\d?/,i=/\d*[^-_:/,()\s\d]+/,o={},a=function(e){return(e=+e)+(e>68?1900:2e3)},s=function(e){return function(r){this[e]=+r}},l=[/[+-]\d\d:?(\d\d)?|Z/,function(e){(this.zone||(this.zone={})).offset=function(e){if(!e)return 0;if("Z"===e)return 0;var r=e.match(/([+-]|\d\d)/g),n=60*r[1]+(+r[2]||0);return 0===n?0:"+"===r[0]?-n:n}(e)}],d=function(e){var r=o[e];return r&&(r.indexOf?r:r.s.concat(r.f))},c=function(e,r){var n,t=o.meridiem;if(t){for(var i=1;i<=24;i+=1)if(e.indexOf(t(i,0,r))>-1){n=i>12;break}}else n=e===(r?"pm":"PM");return n},u={A:[i,function(e){this.afternoon=c(e,!1)}],a:[i,function(e){this.afternoon=c(e,!0)}],S:[/\d/,function(e){this.milliseconds=100*+e}],SS:[n,function(e){this.milliseconds=10*+e}],SSS:[/\d{3}/,function(e){this.milliseconds=+e}],s:[t,s("seconds")],ss:[t,s("seconds")],m:[t,s("minutes")],mm:[t,s("minutes")],H:[t,s("hours")],h:[t,s("hours")],HH:[t,s("hours")],hh:[t,s("hours")],D:[t,s("day")],DD:[n,s("day")],Do:[i,function(e){var r=o.ordinal,n=e.match(/\d+/);if(this.day=n[0],r)for(var t=1;t<=31;t+=1)r(t).replace(/\[|\]/g,"")===e&&(this.day=t)}],M:[t,s("month")],MM:[n,s("month")],MMM:[i,function(e){var r=d("months"),n=(d("monthsShort")||r.map((function(e){return e.slice(0,3)}))).indexOf(e)+1;if(n<1)throw new Error;this.month=n%12||n}],MMMM:[i,function(e){var r=d("months").indexOf(e)+1;if(r<1)throw new Error;this.month=r%12||r}],Y:[/[+-]?\d+/,s("year")],YY:[n,function(e){this.year=a(e)}],YYYY:[/\d{4}/,s("year")],Z:l,ZZ:l};function g(n){var t,i;t=n,i=o&&o.formats;for(var a=(n=t.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g,(function(r,n,t){var o=t&&t.toUpperCase();return n||i[t]||e[t]||i[o].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g,(function(e,r,n){return r||n.slice(1)}))}))).match(r),s=a.length,l=0;l<s;l+=1){var d=a[l],c=u[d],g=c&&c[0],b=c&&c[1];a[l]=b?{regex:g,parser:b}:d.replace(/^\[|\]$/g,"")}return function(e){for(var r={},n=0,t=0;n<s;n+=1){var i=a[n];if("string"==typeof i)t+=i.length;else{var o=i.regex,l=i.parser,d=e.slice(t),c=o.exec(d)[0];l.call(r,c),e=e.replace(c,"")}}return function(e){var r=e.afternoon;if(void 0!==r){var n=e.hours;r?n<12&&(e.hours+=12):12===n&&(e.hours=0),delete e.afternoon}}(r),r}}return function(e,r,n){n.p.customParseFormat=!0,e&&e.parseTwoDigitYear&&(a=e.parseTwoDigitYear);var t=r.prototype,i=t.parse;t.parse=function(e){var r=e.date,t=e.utc,a=e.args;this.$u=t;var s=a[1];if("string"==typeof s){var l=!0===a[2],d=!0===a[3],c=l||d,u=a[2];d&&(u=a[2]),o=this.$locale(),!l&&u&&(o=n.Ls[u]),this.$d=function(e,r,n){try{if(["x","X"].indexOf(r)>-1)return new Date(("X"===r?1e3:1)*e);var t=g(r)(e),i=t.year,o=t.month,a=t.day,s=t.hours,l=t.minutes,d=t.seconds,c=t.milliseconds,u=t.zone,b=new Date,m=a||(i||o?1:b.getDate()),h=i||b.getFullYear(),y=0;i&&!o||(y=o>0?o-1:b.getMonth());var p=s||0,f=l||0,v=d||0,x=c||0;return u?new Date(Date.UTC(h,y,m,p,f,v,x+60*u.offset*1e3)):n?new Date(Date.UTC(h,y,m,p,f,v,x)):new Date(h,y,m,p,f,v,x)}catch(e){return new Date("")}}(r,s,t),this.init(),u&&!0!==u&&(this.$L=this.locale(u).$L),c&&r!=this.format(s)&&(this.$d=new Date("")),o={}}else if(s instanceof Array)for(var b=s.length,m=1;m<=b;m+=1){a[1]=s[m-1];var h=n.apply(this,a);if(h.isValid()){this.$d=h.$d,this.$L=h.$L,this.init();break}m===b&&(this.$d=new Date(""))}else i.call(this,e)}}}();var Rt=k(Ht.exports),Pt={exports:{}};Pt.exports=function(e,r,n){r.prototype.isBetween=function(e,r,t,i){var o=n(e),a=n(r),s="("===(i=i||"()")[0],l=")"===i[1];return(s?this.isAfter(o,t):!this.isBefore(o,t))&&(l?this.isBefore(a,t):!this.isAfter(a,t))||(s?this.isBefore(o,t):!this.isAfter(o,t))&&(l?this.isAfter(a,t):!this.isBefore(a,t))}};var Nt=k(Pt.exports),Vt={exports:{}};Vt.exports=function(e,r){r.prototype.isSameOrAfter=function(e,r){return this.isSame(e,r)||this.isAfter(e,r)}};var Zt=k(Vt.exports),Xt={exports:{}};Xt.exports=function(e,r){r.prototype.isSameOrBefore=function(e,r){return this.isSame(e,r)||this.isBefore(e,r)}};var Ut,Jt,qt,Gt=k(Xt.exports),Kt={exports:{}},Qt=k(Kt.exports=(Ut={year:0,month:1,day:2,hour:3,minute:4,second:5},Jt={},function(e,r,n){var t,i=function(e,r,n){void 0===n&&(n={});var t=new Date(e),i=function(e,r){void 0===r&&(r={});var n=r.timeZoneName||"short",t=e+"|"+n,i=Jt[t];return i||(i=new Intl.DateTimeFormat("en-US",{hour12:!1,timeZone:e,year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit",timeZoneName:n}),Jt[t]=i),i}(r,n);return i.formatToParts(t)},o=function(e,r){for(var t=i(e,r),o=[],a=0;a<t.length;a+=1){var s=t[a],l=s.type,d=s.value,c=Ut[l];c>=0&&(o[c]=parseInt(d,10))}var u=o[3],g=24===u?0:u,b=o[0]+"-"+o[1]+"-"+o[2]+" "+g+":"+o[4]+":"+o[5]+":000",m=+e;return(n.utc(b).valueOf()-(m-=m%1e3))/6e4},a=r.prototype;a.tz=function(e,r){void 0===e&&(e=t);var i=this.utcOffset(),o=this.toDate(),a=o.toLocaleString("en-US",{timeZone:e}),s=Math.round((o-new Date(a))/1e3/60),l=n(a,{locale:this.$L}).$set("millisecond",this.$ms).utcOffset(15*-Math.round(o.getTimezoneOffset()/15)-s,!0);if(r){var d=l.utcOffset();l=l.add(i-d,"minute")}return l.$x.$timezone=e,l},a.offsetName=function(e){var r=this.$x.$timezone||n.tz.guess(),t=i(this.valueOf(),r,{timeZoneName:e}).find((function(e){return"timezonename"===e.type.toLowerCase()}));return t&&t.value};var s=a.startOf;a.startOf=function(e,r){if(!this.$x||!this.$x.$timezone)return s.call(this,e,r);var t=n(this.format("YYYY-MM-DD HH:mm:ss:SSS"),{locale:this.$L});return s.call(t,e,r).tz(this.$x.$timezone,!0)},n.tz=function(e,r,i){var a=i&&r,s=i||r||t,l=o(+n(),s);if("string"!=typeof e)return n(e).tz(s);var d=function(e,r,n){var t=e-60*r*1e3,i=o(t,n);if(r===i)return[t,r];var a=o(t-=60*(i-r)*1e3,n);return i===a?[t,i]:[e-60*Math.min(i,a)*1e3,Math.max(i,a)]}(n.utc(e,a).valueOf(),l,s),c=d[0],u=d[1],g=n(c).utcOffset(u);return g.$x.$timezone=s,g},n.tz.guess=function(){return Intl.DateTimeFormat().resolvedOptions().timeZone},n.tz.setDefault=function(e){t=e}}));It.extend(Nt),It.extend(Gt),It.extend(Zt),It.extend(Rt),It.extend(Qt),function(e){e.generateDays=e=>{const r=e.startOf("month"),n=It(r).startOf("week");return ei(n).map((e=>ri(e)))},e.generateDaysForCurrentWeek=e=>{const r=e.startOf("week");return ri(r)},e.generateMonths=e=>{const r=[];for(let n=0;n<12;n++){const t=e.month(n);r.push(It(t))}return r},e.generateDecadeOfYears=e=>{const r=e.year(),n=10*Math.floor(r/10),t=e.year(n),i=[t.subtract(1,"year"),t];for(let e=1;e<11;e++)i.push(t.add(e,"year"));return i},e.getStartEndDecade=e=>{const r=10*Math.floor(+e.format("YYYY")/10);return{beginDecade:r,endDecade:+It(`${r+9}-01-01`).format("YYYY")}},e.convertTo12HourFormat=e=>{const r=It(e,"HH:mm");return r.isValid()?r.format("h:mm a"):""},e.isWithinRange=(e,r,n,t="day")=>!r&&!n||(r&&n?e.isBetween(r,n,t,"[]"):r?e.isSameOrAfter(r,t):e.isSameOrBefore(n,t)),e.isPreviousMonthWithinRange=(r,n)=>e.isWithinRange(r.subtract(1,"month"),n,void 0,"month"),e.isPreviousYearWithinRange=(r,n)=>e.isWithinRange(r.subtract(1,"year"),n,void 0,"year"),e.isPreviousDecadeWithinRange=(r,n)=>{const{beginDecade:t}=e.getStartEndDecade(r);return e.isWithinRange(r.year(t).subtract(1,"year"),n,void 0,"year")},e.isNextMonthWithinRange=(r,n)=>e.isWithinRange(r.add(1,"month"),void 0,n,"month"),e.isNextYearWithinRange=(r,n)=>e.isWithinRange(r.add(1,"year"),void 0,n,"year"),e.isNextDecadeWithinRange=(r,n)=>{const{endDecade:t}=e.getStartEndDecade(r);return e.isWithinRange(r.year(t).add(1,"year"),void 0,n,"year")},e.getWeekStartEnd=e=>({start:e.startOf("week").format("YYYY-MM-DD"),end:e.endOf("week").format("YYYY-MM-DD")}),e.getFixedRangeStartEnd=(e,r)=>({start:e.format("YYYY-MM-DD"),end:e.add(r-1,"day").format("YYYY-MM-DD")}),e.isDisabledDay=(r,n,t,i)=>{const o=e.isWithinRange(r,t?It(t):void 0,i?It(i):void 0),a=n&&n.includes(r.format("YYYY-MM-DD"));return!o||!!a}}(qt||(qt={}));const ei=e=>{const r=[e];for(let n=1;n<6;n++){const t=e.add(n,"week");r.push(t)}return r},ri=e=>{const r=[];for(let n=0;n<7;n++){const t=e.add(n,"day");r.push(t)}return r},ni=[1,3,5,7,8,10,12],ti=[4,6,9,11];var ii,oi,ai,si;!function(e){e.clampDay=(r,n,t)=>{const i=parseInt(r),o=parseInt(n),a=parseInt(t);return 0==i?"1":ni.includes(o)?Math.min(i,31).toString():ti.includes(o)?Math.min(i,30).toString():2===o?e.isLeapYear(a)?Math.min(i,29).toString():Math.min(i,28).toString():r},e.clampMonth=e=>{const r=parseInt(e);return 0==r?"1":r>12?"12":e},e.isLeapYear=e=>e%4==0&&e%100!=0||e%400==0,e.getTimeDiffInMinutes=(e,r,n="HH:mm")=>{const t=It(e,n);return It(r,n).diff(t,"minute")},e.toDayjs=e=>e?It(e):It(),e.addMinutesToTime=(e,r,n="HH:mm")=>It(e,n).add(r,"minutes").format(n),e.isSame=(e,r,n="day")=>It(e).isSame(It(r),n)}(ii||(ii={})),function(e){e.isDateDisabled=(e,r)=>{const{disabledDates:n,minDate:t,maxDate:i}=r;return!!(e&&n&&n.length&&n.includes(e))||(!(!t||!It(e).isBefore(t,"day"))||!(!i||!It(e).isAfter(i,"day")))},e.sanitizeInput=e=>{if(e){if(It(e).isValid())return e}return""}}(oi||(oi={})),function(e){e.generate=()=>Math.random().toString(36).substring(2,9)}(ai||(ai={})),function(e){e.transformWithSpaces=(e,r)=>{const n="(.{"+r+"})";return e.replace(/[^\dA-Z]/gi,"").replace(new RegExp(n,"g"),"$1 ").trim()},e.padValue=(e,r)=>{if("0"===e)return r?e:e.padStart(2,"0");if(""===e)return e;return parseInt(e).toString().padStart(2,"0")},e.shouldTruncateToTwoLines=(e,r)=>{const n=Math.floor(r/9);return e.length>=2*n||1===e.split(" ").length&&e.length>n},e.truncateOneLine=(e,r,n,t,i=8)=>{let o=0;r>n&&(o=Math.floor((r-n)/i));const a=t+o;if(a<e.length){const r=Math.floor(a/2);return e.substring(0,r)+" ... "+e.substring(e.length-r,e.length)}return e},e.truncateTwoLines=(e,r,n,t=1.2)=>{const i=Math.floor(2*r/(.6*n))*(2/t);if(e.length<=i)return e;const o=Math.floor(.6*i),a=Math.floor(.2*i);return`${e.substring(0,o)}...${e.substring(e.length-a)}`},e.getTextWidth=(r,n)=>{if("undefined"==typeof document)return 0;const t=(e.getTextWidth.canvas||(e.getTextWidth.canvas=document.createElement("canvas"))).getContext("2d");t.font=n;return t.measureText(r).width},e.maskValue=(e,n)=>{if(!e)return e;const{maskRange:t,unmaskRange:i,maskChar:o="•",maskRegex:a,maskTransformer:s}=n;if(s)return s(e);if(a)return e.replace(a,o);if(t){const{startIndex:n,endIndex:i}=r(t[0],t[1]);return e.substring(0,n)+o.repeat(e.substring(n,i+1).length)+e.substring(i+1)}if(i){const{startIndex:n,endIndex:t}=r(i[0],i[1]);return o.repeat(e.substring(0,n).length)+e.substring(n,t+1)+o.repeat(e.substring(t+1).length)}return e};const r=(e,r)=>e<r?{startIndex:e,endIndex:r}:{startIndex:r,endIndex:e},n=new Intl.PluralRules("en",{type:"ordinal"}),t=new Map([["one","st"],["two","nd"],["few","rd"],["other","th"]]);e.formatOrdinal=e=>{const r=n.select(e);return`${e}${t.get(r)}`},e.getMaskedDescription=(e,r,n)=>{if(!e||"masked"!==r||!n)return"";const[t,i]=n,o=t>0,a=i<e.length-1,s=o?e.substring(0,t):"",l=a?e.substring(i+1):"";return o&&a?`Starting with ${s} and ending with ${l}`:o?`Starting with ${s}`:a?`Ending with ${l}`:""}}(si||(si={}));const li=u.div`
    position: fixed;
    left: 0;
    top: 0;
    height: 0;
    width: 0;
    visibility: hidden;
    z-index: ${e=>e.$zIndex};

    ${e=>{if(e.$show)return g`
                height: 100%;
                width: 100vw;
                visibility: visible;
            `}}
`,di=u.div`
    position: absolute;
    left: 0;
    top: 0;
    background-color: ${e=>e.$stacked?at["overlay-subtle"]:at["overlay-strong"]};
    backdrop-filter: ${e=>(e=>{let r="";return e&&(r+="blur(10px)"),r.length>0?r:"none"})(e.$backgroundBlur)};
    transition: opacity 200ms ease;

    ${e=>{let r="";return e.$show?r+=g`
                visibility: visible;
                opacity: 1;
                pointer-events: auto;
                height: 100%;
                width: 100vw;
            `:r+=g`
                visibility: hidden;
                opacity: 0;
                transition-delay: ${e.$disableTransition?"0ms":"400ms"};
                pointer-events: none;
                height: 0;
                width: 0;
            `,e.$disableTransition&&(r+=g`
                transition: none;
            `),r}};
`;var ci;!function(e){e.Ready="overlay-context-ready",e.Change="overlay-context-change"}(ci||(ci={}));const ui=({show:r=!1,rootId:n,onOverlayClick:s,children:l,backgroundOpacity:d,backgroundBlur:c=!0,disableTransition:u=!1,enableOverlayClick:g=!1,zIndex:b,id:m})=>{const[h,y]=o(null),[f,F]=o(),[w]=o((()=>ai.generate())),E=v(),$=a(),D=a(null),B=l&&t.cloneElement(l,{ref:D}),A=m?`lifesg-ds-overlay-root-${m}`:"lifesg-ds-overlay-root",S=null!=b?b:f?99999:99998;(e=>{const r=p();i((()=>{if(!r)return;const n={zIndex:e};r.events.emit(ci.Change,n)}),[r,e]),i((()=>{if(!r)return;const n=()=>{const n={zIndex:e};r.events.emit(ci.Change,n)};return null==r||r.events.on(ci.Ready,n),()=>null==r?void 0:r.events.off(ci.Ready,n)}),[r,e])})(S),i((()=>(_(),y(O()),()=>{Y(),j().length<1&&(W("remove"),H(),T("remove"))})),[]),i((()=>{if(r){const e=M();k(e),L(),z()&&1===j().length&&(I(),W("add"));const r=setTimeout((()=>{T("add")}),200);return()=>clearTimeout(r)}{Y(),z()&&j().length<1&&(W("remove"),H());const e=setTimeout((()=>{j().length<1&&T("remove")}),200);return()=>clearTimeout(e)}}),[r]);const k=e=>{$.current=e,F(e)},z=()=>/(iPad|iPhone|iPod)/g.test(navigator.userAgent),O=()=>document&&n?document.getElementById(n):document?document.body:null,M=()=>j().length>0,_=()=>{if(!document.getElementById(bi)){const e=document.createElement("style");e.id=bi;const r=document.documentElement.clientWidth,n=window.innerWidth-r;e.innerHTML=`\n\t\t\t\t.${mi} {\n\t\t\t\t\toverflow: hidden;\n\t\t\t\t\tpadding-right: ${n}px !important;\n\t\t\t\t\t-ms-overflow-style: none;\n\t\t\t\t\tscrollbar-width: none;\n\t\t\t\t}\n\n\t\t\t\t.${mi}::-webkit-scrollbar {\n\t\t\t\t\tdisplay: none;\n\t\t\t\t}\n\n\t\t\t\t.${hi} {\n\t\t\t\t\tposition: fixed;\n\t\t\t\t\ttop: var(${yi}, 0);\n\t\t\t\t\tbottom: 0;\n\t\t\t\t}\n\t\t\t`,document.body.appendChild(e)}},T=e=>{const r=document.body.classList.contains(mi);"add"!==e||r?"remove"===e&&r&&document.body.classList.remove(mi):document.body.classList.add(mi)},j=()=>{const e=document.body.dataset.lifesgDsOverlayOrder;return e?e.split(","):[]},L=()=>{const e=j();document.body.dataset.lifesgDsOverlayOrder=[...e,w].join(",")},Y=()=>{const e=j();document.body.dataset.lifesgDsOverlayOrder=e.filter((e=>e!==w)).join(",")},W=e=>{if(!z())return;const r=document.body.classList.contains(hi);"add"!==e||r?"remove"===e&&r&&document.body.classList.remove(hi):document.body.classList.add(hi)},I=()=>{const e=document.body.style,r=e.top?e.top:window.scrollY+"px";document.body.style.setProperty(yi,r)},H=()=>{const e=document.body.style.getPropertyValue(yi);requestAnimationFrame((()=>{window.scrollTo({top:parseFloat(e)})}))},R=e=>{var r;const n=null===(r=D.current)||void 0===r?void 0:r.firstChild;n&&n.contains(e.target)||s&&g&&(e.preventDefault(),s())};return h?C.createPortal(e(li,{id:A,"data-testid":A,$show:r,$zIndex:S,children:l&&e(x,{id:E,children:e(di,{"data-testid":"overlay-wrapper",$show:r,$stacked:f,$backgroundBlur:c,$disableTransition:u,onClick:R,children:B})})}),h):null},gi=r=>e(f,{children:e(ui,Object.assign({},r))}),bi="lifesg-ds-overlay-stylesheet",mi="lifesg-ds-overlay-open",hi="lifesg-ds-overlay-scroll-lock",yi="--lifesg-ds-overlay-scroll-y",pi=l({onClose:()=>{}}),fi=u.div`
    position: relative;
    width: 100%;
    height: 100%;

    overflow: auto;

    ${mt.MaxWidth.sm} {
        ${e=>g`
                height: calc(
                    ${e.$verticalHeight?`${e.$verticalHeight}px`:"1vh"} * 100
                );
            `}

        top: ${e=>e.$offsetTop||0}px;
    }

    ${e=>g`
        &[data-status="initial"] {
            opacity: 0;
            ${e.$animationFrom}: -3%;
        }

        &[data-status="open"] {
            opacity: 1;
            ${e.$animationFrom}: 0;
            transition: all ${lt["duration-250"]}
                ${lt["ease-entrance"]}
            transition-delay: ${lt["duration-150"]};
        }

        &[data-status="close"] {
            opacity: 0;
            ${e.$animationFrom}: -3%;
            transition: all ${lt["duration-250"]}
                ${lt["ease-exit"]};
        }
    `}
`,vi=u.div`
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100%;
    pointer-events: none;
`,xi=u.div`
    pointer-events: auto;
    width: 100%;
    outline: none;
`,Fi=u.div`
    width: 40rem;
    margin: ${ct["spacing-64"]} auto;
    background: ${at.bg};
    box-shadow: ${gt["xs-strong"]};
    border-radius: ${ut.lg};

    display: flex;
    flex-direction: column-reverse;

    max-width: calc(100% - ${bt["xxl-margin"]}px * 2);

    ${mt.MaxWidth.xl} {
        max-width: calc(100% - ${bt["xl-margin"]}px * 2);
    }

    ${mt.MaxWidth.lg} {
        max-width: calc(100% - ${bt["lg-margin"]}px * 2);
    }

    ${mt.MaxWidth.md} {
        max-width: calc(100% - ${bt["md-margin"]}px * 2);
    }

    ${mt.MaxWidth.sm} {
        max-width: calc(100% - ${bt["sm-margin"]}px * 2);
    }

    ${mt.MaxWidth.xs} {
        max-width: calc(100% - ${bt["xs-margin"]}px * 2);
    }

    ${mt.MaxWidth.xxs} {
        max-width: calc(100% - ${bt["xxs-margin"]}px * 2);
    }
`,wi=u.div`
    margin-right: ${ct["spacing-16"]};
    margin-left: auto;
    margin-top: ${ct["spacing-16"]};
    margin-bottom: ${ct["spacing-16"]};
`,Ei=u(Tt)`
    padding: 0;
    color: ${at.icon};

    svg {
        height: 2rem;
        width: 2rem;
    }
`,$i=u.div`
    margin-right: ${ct["spacing-64"]};
    margin-left: ${ct["spacing-64"]};

    ${mt.MaxWidth.sm} {
        margin-right: ${ct["spacing-20"]};
        margin-left: ${ct["spacing-20"]};
    }
`,Di=u.div`
    margin-right: ${ct["spacing-64"]};
    margin-left: ${ct["spacing-64"]};

    ${mt.MaxWidth.sm} {
        margin-right: ${ct["spacing-20"]};
        margin-left: ${ct["spacing-20"]};
    }

    display: flex;
    flex-direction: row-reverse; /* primary button on right */
    column-gap: ${ct["spacing-32"]};
    row-gap: ${ct["spacing-16"]};

    & > button {
        flex: 1;
    }

    ${mt.MaxWidth.md} {
        flex-direction: column;
    }
`,Ci=u.div`
    :where(& > ${$i}:last-child) {
        margin-bottom: ${ct["spacing-64"]};
    }

    :where(& > ${Di}:not(:first-child)) {
        margin-top: ${ct["spacing-32"]};
    }

    :where(& > ${Di}:last-child) {
        margin-bottom: ${ct["spacing-64"]};
    }

    ${e=>e.$hasCloseButton?g`
                  :where(& > ${$i}:first-child),
                  :where(& > ${Di}:first-child) {
                      margin-top: 0;
                  }
              `:g`
                  :where(& > ${$i}:first-child),
                  :where(& > ${Di}:first-child) {
                      margin-top: ${ct["spacing-64"]};
                  }
              `}
`,Bi=r=>{var{"data-testid":n="modal-close-button"}=r,t=A(r,["data-testid"]);const{onClose:i}=d(pi);return e(wi,Object.assign({"data-testid":n},t,{children:e(Ei,{onClick:i,"data-testid":"close-button",focusHighlight:!1,focusOutline:"browser","aria-label":"Close button",children:e(y,{"aria-hidden":!0})})}))};Bi.displayName="ModalV2.CloseButton";const Ai=r=>{var{"data-testid":n="modal-content",children:t}=r,i=A(r,["data-testid","children"]);return e($i,Object.assign({"data-testid":n},i,{children:t}))};Ai.displayName="ModalV2.Content";const Si=e=>{var{"data-testid":n="modal-footer",primaryButton:t,secondaryButton:i}=e,o=A(e,["data-testid","primaryButton","secondaryButton"]);return r(Di,Object.assign({"data-testid":n},o,{children:[t,i]}))};Si.displayName="ModalV2.Footer";const ki=e=>{var{id:n,"data-testid":i="modal-card",children:o}=e,a=A(e,["id","data-testid","children"]);const s=e=>t.Children.toArray(o).find((r=>((e,r)=>b(e.type)?e.type.target===r:e.type===r)(r,e))),l=s(Bi),d=s(Ai),c=s(Si),u=!!l;return r(Fi,Object.assign({id:n,"data-testid":i},a,{onClick:e=>{e.stopPropagation()},children:[r(Ci,{$hasCloseButton:u,children:[d,c]}),u&&l]}))};ki.displayName="ModalV2.Card",Object.assign((r=>{var{id:n,show:t,onClose:a,animationFrom:l="bottom",children:d,enableOverlayClick:c=!0,rootComponentId:u,zIndex:g,onOverlayClick:b,dismissKeyboardOnShow:m=!0,"data-testid":h="modal"}=r,y=A(r,["id","show","onClose","animationFrom","children","enableOverlayClick","rootComponentId","zIndex","onOverlayClick","dismissKeyboardOnShow","data-testid"]);const{verticalHeight:p,offsetTop:f}=(()=>{const[e,r]=o(),[n,t]=o(),a=s((()=>{const e=.01*window.innerHeight;r(e)}),[]),l=s((()=>{if(window.visualViewport){const e=.01*window.visualViewport.height;r(e),t(window.visualViewport.offsetTop)}}),[]);return i((()=>window.visualViewport?(l(),window.visualViewport.addEventListener("resize",l),()=>{var e;null===(e=window.visualViewport)||void 0===e||e.removeEventListener("resize",l)}):(a(),window.addEventListener("resize",a),()=>{window.removeEventListener("resize",a)})),[]),{verticalHeight:e,offsetTop:n}})(),{refs:v,context:x}=F({open:t,onOpenChange:e=>{e||null==a||a()}}),{isMounted:C,status:B}=w(x,{duration:300}),S=E(x,{outsidePress:!1,enabled:!!a}),{getFloatingProps:k}=$([S]);return i((()=>{var e,r;t&&m&&(null===(r=null===(e=document.activeElement)||void 0===e?void 0:e.blur)||void 0===r||r.call(e))}),[m,t]),e(gi,{"data-testid":`${h}-overlay`,show:C,enableOverlayClick:c,onOverlayClick:b,id:n,rootId:u,zIndex:g,children:e(fi,Object.assign({$show:C,$animationFrom:l,"data-testid":h,$verticalHeight:p,$offsetTop:f},y,{"data-status":B,children:e(pi.Provider,{value:{onClose:a},children:C&&e(D,{context:x,initialFocus:v.floating,children:e(vi,{children:e(xi,Object.assign({ref:v.setFloating},k(),{"aria-modal":!0,role:"dialog",children:d}))})})})}))})}),{Card:ki,CloseButton:Bi,Content:Ai,Footer:Si}),u.div`
    display: inline;
    width: fit-content;
    cursor: pointer;
    position: relative;
`;const zi=e=>{switch(e){case"underline":return"text-decoration: underline 1px;";case"underline-dashed":return"text-decoration: underline dashed 1px;"}};u.span`
    color: ${at["text-primary"]};
    font-weight: 600;
    text-underline-position: under;

    ${({$defaultStyle:e})=>zi(e)}

    &:hover,
    &:focus-visible {
        color: ${at["text-hover"]};
        ${({$hoverStyle:e})=>zi(e)}
    }

    svg {
        height: 1lh; // align vertically
        width: 1em; // scale icon with font size
        vertical-align: top;
    }
`,u.span`
    ${e=>!e.$standalone&&"margin-left: 0.25rem;"}
`,u.div`
    padding-left: ${ct["spacing-4"]};
    display: inline;
`,u.div`
    margin-bottom: ${ct["spacing-8"]};
`,u.label`
    color: ${at["text-subtle"]};
    display: inline-block;

    ${st["form-label"]}
    ${Yt()}
    font-weight: ${st.Spec["weight-semibold"]};
`;const Oi=u(B)`
    height: 1lh;
    width: 1em;
    flex-shrink: 0;
    color: ${at["icon-error-strong"]};
`,Mi=u.div`
    ${st["body-sm-semibold"]}
    display: flex;
    gap: ${ct["spacing-4"]};
    margin-top: ${ct["spacing-8"]};
`,_i=u.p`
    color: ${at["text-error"]};
    margin-bottom: 0;
    outline: none;
`;u.span`
    ${st["form-description"]}
    color: ${at["text-subtler"]};
    display: block;
`;const Ti=n=>r(Mi,{children:[e(Oi,{"aria-hidden":!0}),e(_i,Object.assign({},n))]}),ji=u.div`
    clip-path: inset(50%);
    height: 1px;
    width: 1px;
    overflow: hidden;
    position: absolute;
    white-space: nowrap;
`,Li=u.div`
    display: inline-block;
    position: relative;
    width: ${({$size:e})=>e?`${e}px`:"1em"};
    height: ${({$size:e})=>e?`${e}px`:"1em"};
    color: ${e=>e.$color||"currentColor"};
`,Yi=m`
	0% {
	  transform: rotate(0deg);
	}
	100% {
	  transform: rotate(360deg);
	}
`,Wi=u.div`
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
    animation: ${Yi} 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
`,Ii=u(Wi)`
    animation-delay: -0.45s;
`,Hi=u(Wi)`
    animation-delay: -0.3s;
`,Ri=u(Wi)`
    animation-delay: -0.15s;
`,Pi={Button:{"button-radius":Gn.md,"button-default-colour-bg":Bn["bg-primary"],"button-default-colour-bg-hover":Bn["bg-primary-hover"],"button-default-colour-text":Bn["text-inverse"],"button-secondary-colour-border":Bn["border-primary"],"button-secondary-colour-text":Bn["text-primary"],"button-light-colour-text":Bn["text-primary"],"button-link-colour-text":Bn["text-primary"]},Animation:{"loading-dots-spinner-colour":Bn["icon-primary"]},Navbar:{"navbar-full-height":"6rem","navbar-full-logo-height":"2rem","navbar-compressed-height":"4rem","navbar-compressed-logo-height":"1.5rem","navbar-mobile-height":"3.5rem","navbar-mobile-logo-height":"1.5rem","navbar-colour-bg":Bn.bg,"navbar-colour-icon":Bn.icon,"navbar-link-colour-text":Bn.text,"navbar-link-colour-text-hover":Bn["text-hover"],"navbar-link-colour-text-selected-hover":Bn["text-selected-hover"]},Footer:{"footer-colour-bg":Bn["bg-strong"],"footer-colour-text":Bn.text,"footer-link-colour-text":Bn.text,"footer-link-colour-text-hover":Bn["text-hover"],"footer-disclaimer-link-colour-text":Bn.text,"footer-disclaimer-link-colour-text-hover":Bn["text-subtler"]}},Ni={Button:{"button-radius":Gn.sm,"button-default-colour-bg":Bn["bg-primary"],"button-default-colour-bg-hover":Bn["bg-primary-hover"],"button-default-colour-text":Bn["text-inverse"],"button-secondary-colour-border":Bn["border-primary"],"button-secondary-colour-text":Bn["text-primary"],"button-light-colour-text":Bn["text-primary"],"button-link-colour-text":Bn["text-primary"]},Animation:{"loading-dots-spinner-colour":Bn["icon-primary"]},Navbar:{"navbar-full-height":"6rem","navbar-full-logo-height":"2rem","navbar-compressed-height":"4rem","navbar-compressed-logo-height":"1.5rem","navbar-mobile-height":"3.5rem","navbar-mobile-logo-height":"1.5rem","navbar-colour-bg":Bn.bg,"navbar-colour-icon":Bn.icon,"navbar-link-colour-text":Bn.text,"navbar-link-colour-text-hover":Bn["text-hover"],"navbar-link-colour-text-selected-hover":Bn["text-selected-hover"]},Footer:{"footer-colour-bg":Bn["bg-strong"],"footer-colour-text":Bn.text,"footer-link-colour-text":Bn.text,"footer-link-colour-text-hover":Bn["text-hover"],"footer-disclaimer-link-colour-text":Bn.text,"footer-disclaimer-link-colour-text-hover":Bn["text-subtler"]}},Vi={Button:{"button-radius":Gn.sm,"button-default-colour-bg":Bn["bg-primary"],"button-default-colour-bg-hover":Bn["bg-primary-hover"],"button-default-colour-text":Bn["text-inverse"],"button-secondary-colour-border":Bn["border-primary"],"button-secondary-colour-text":Bn["text-primary"],"button-light-colour-text":Bn["text-primary"],"button-link-colour-text":Bn["text-primary"]},Animation:{"loading-dots-spinner-colour":at.Primitive["brand-50"]},Navbar:{"navbar-full-height":"6rem","navbar-full-logo-height":"2rem","navbar-compressed-height":"4rem","navbar-compressed-logo-height":"1.5rem","navbar-mobile-height":"3.5rem","navbar-mobile-logo-height":"1.5rem","navbar-colour-bg":Bn.bg,"navbar-colour-icon":Bn.icon,"navbar-link-colour-text":Bn.text,"navbar-link-colour-text-hover":Bn["text-hover"],"navbar-link-colour-text-selected-hover":Bn["text-selected-hover"]},Footer:{"footer-colour-bg":Bn["bg-strong"],"footer-colour-text":Bn.text,"footer-link-colour-text":Bn.text,"footer-link-colour-text-hover":Bn["text-hover"],"footer-disclaimer-link-colour-text":Bn.text,"footer-disclaimer-link-colour-text-hover":Bn["text-subtler"]}},Zi={collections:{default:Ni,pa:{Button:{"button-radius":Gn.full,"button-default-colour-bg":Bn["bg-primary"],"button-default-colour-bg-hover":Bn["bg-primary-hover"],"button-default-colour-text":Bn["text-inverse"],"button-secondary-colour-border":Bn["border-primary"],"button-secondary-colour-text":Bn["text-primary"],"button-light-colour-text":Bn["text-primary"],"button-link-colour-text":Bn["text-primary"]},Animation:{"loading-dots-spinner-colour":Bn["icon-primary"]},Navbar:{"navbar-full-height":"6rem","navbar-full-logo-height":"2rem","navbar-compressed-height":"4rem","navbar-compressed-logo-height":"1.5rem","navbar-mobile-height":"3.5rem","navbar-mobile-logo-height":"1.5rem","navbar-colour-bg":Bn.bg,"navbar-colour-icon":Bn.icon,"navbar-link-colour-text":Bn.text,"navbar-link-colour-text-hover":Bn["text-hover"],"navbar-link-colour-text-selected-hover":Bn["text-selected-hover"]},Footer:{"footer-colour-bg":Bn["bg-strong"],"footer-colour-text":Bn.text,"footer-link-colour-text":Bn.text,"footer-link-colour-text-hover":Bn["text-hover"],"footer-disclaimer-link-colour-text":Bn.text,"footer-disclaimer-link-colour-text-hover":Bn["text-subtler"]}},a11yplayground:Pi,lifesg:Vi,spf:{Button:{"button-radius":Gn.md,"button-default-colour-bg":Bn["bg-primary"],"button-default-colour-bg-hover":Bn["bg-primary-hover"],"button-default-colour-text":Bn["text-inverse"],"button-secondary-colour-border":Bn["border-primary"],"button-secondary-colour-text":Bn["text-primary"],"button-light-colour-text":Bn["text-primary"],"button-link-colour-text":Bn["text-primary"]},Animation:{"loading-dots-spinner-colour":Bn["icon-primary"]},Navbar:{"navbar-full-height":"6rem","navbar-full-logo-height":"3rem","navbar-compressed-height":"5rem","navbar-compressed-logo-height":"2rem","navbar-mobile-height":"4rem","navbar-mobile-logo-height":"2rem","navbar-colour-bg":Bn.bg,"navbar-colour-icon":Bn.icon,"navbar-link-colour-text":Bn["text-primary-strongest"],"navbar-link-colour-text-hover":Bn["text-subtler"],"navbar-link-colour-text-selected-hover":Bn["text-subtler"]},Footer:{"footer-colour-bg":Bn["bg-inverse"],"footer-colour-text":Bn["text-inverse"],"footer-link-colour-text":Bn["text-inverse"],"footer-link-colour-text-hover":Bn["text-inverse"],"footer-disclaimer-link-colour-text":Bn["text-inverse"],"footer-disclaimer-link-colour-text-hover":Bn["text-inverse"]}}},defaultValue:"default"},Xi=(e,r)=>n=>{var t,i;const o=n.theme,a=Kr(Zi,null==o?void 0:o.componentScheme);return Ui((null===(i=null===(t=null==o?void 0:o.componentOverrides)||void 0===t?void 0:t[e])||void 0===i?void 0:i[r])||a[e][r],n)},Ui=(e,r)=>{switch(typeof e){case"function":return e(r);case"number":return e+"px";case"string":return e}},Ji=Xi("Button","button-radius"),qi=Xi("Button","button-default-colour-bg"),Gi=Xi("Button","button-default-colour-bg-hover"),Ki=Xi("Button","button-default-colour-text"),Qi=Xi("Button","button-secondary-colour-border"),eo=Xi("Button","button-secondary-colour-text"),ro=Xi("Button","button-light-colour-text"),no=Xi("Button","button-link-colour-text"),to=u.button`
    padding: ${ct["spacing-8"]} ${ct["spacing-16"]};
    min-width: 4rem;
    border: ${dt["width-010"]} ${dt.solid} transparent;
    transition: all ${lt["duration-250"]} ${lt["ease-default"]};
    border-radius: ${Ji};
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;

    // -----------------------------------------------------------------------------
    // BUTTON STYLE + TEXT COLOR
    // -----------------------------------------------------------------------------
    ${e=>{switch(e.$buttonStyle){case"secondary":return g`
                    background-color: ${at.bg};
                    border-color: ${e.$buttonIsDanger?at["border-error-strong"]:Qi};

                    color: ${e.$buttonIsDanger?at["text-error"]:eo};

                    &:hover,
                    &:active {
                        @media (pointer: fine) {
                            background-color: ${at["bg-hover-neutral"]};
                        }
                    }
                `;case"light":return g`
                    background-color: ${at.bg};
                    border-color: ${at.border};

                    color: ${e.$buttonIsDanger?at["text-error"]:ro};

                    &:hover,
                    &:active {
                        @media (pointer: fine) {
                            background-color: ${at["bg-hover-neutral"]};
                        }
                    }
                `;case"link":return g`
                    background-color: transparent;

                    color: ${e.$buttonIsDanger?at["text-error"]:no};
                    &:hover,
                    &:active {
                        @media (pointer: fine) {
                            background-color: ${at["bg-hover-neutral"]};
                        }
                    }
                `;case"disabled":return g`
                    background-color: ${at["bg-disabled"]};

                    cursor: not-allowed;

                    &:hover {
                        box-shadow: none;
                    }

                    color: ${at["text-disabled"]};
                `;default:return g`
                    background-color: ${e.$buttonIsDanger?at["bg-error-strong"]:qi};

                    ${mt.MaxWidth.sm} {
                        width: 100%;
                    }

                    color: ${Ki};

                    &:hover,
                    &:active {
                        @media (pointer: fine) {
                            background-color: ${e.$buttonIsDanger?at["bg-error-strong-hover"]:Gi};
                        }
                    }
                `}}}

    // -----------------------------------------------------------------------------
	// BUTTON SIZE + TEXT SIZE
	// -----------------------------------------------------------------------------
	${e=>{switch(e.$buttonSizeStyle){case"small":return g`
                    height: 2.5rem;
                    ${st["body-md-semibold"]}

                    ${mt.MaxWidth.xxs} {
                        height: auto;
                    }
                `;case"large":return g`
                    height: 4rem;
                    ${st["heading-md-semibold"]}

                    ${mt.MaxWidth.xxs} {
                        height: auto;
                    }
                `;default:return g`
                    height: 3rem;
                    ${st["heading-xs-semibold"]}

                    ${mt.MaxWidth.xxs} {
                        height: auto;
                    }
                `}}}
`,io=u((({color:n,className:t,size:i})=>r(Li,{className:t,$size:i,$color:n,"data-testid":"component-loading-spinner",children:[e(Wi,{id:"inner1"}),e(Ii,{id:"inner2"}),e(Hi,{id:"inner3"}),e(Ri,{id:"inner4"})]})))`
    margin-right: 0.5rem;
`,oo=(n,t)=>{const{children:i,disabled:o=!1,loading:a=!1,styleType:s="default",danger:l=!1,focusableWhenDisabled:d=!1,onClick:c}=n,u=A(n,["children","disabled","loading","styleType","danger","focusableWhenDisabled","onClick"]),g={$buttonStyle:o?"disabled":s,$buttonSizeStyle:"default",$buttonIsDanger:l};return r(to,Object.assign({ref:t,"data-testid":u["data-testid"]||"button",disabled:o&&!d,"aria-disabled":o,"aria-busy":a,onClick:o?void 0:c},g,u,{children:[a&&e(io,{}),e("span",{children:i})]}))};oo.displayName="Button.Default";const ao=(n,t)=>{const{children:i,disabled:o=!1,loading:a=!1,styleType:s="default",danger:l=!1,focusableWhenDisabled:d=!1,onClick:c}=n,u=A(n,["children","disabled","loading","styleType","danger","focusableWhenDisabled","onClick"]),g={$buttonStyle:o?"disabled":s,$buttonSizeStyle:"small",$buttonIsDanger:l};return r(to,Object.assign({ref:t,"data-testid":u["data-testid"]||"button",disabled:o&&!d,"aria-disabled":o,"aria-busy":a,onClick:o?void 0:c},g,u,{children:[a&&e(io,{}),e("span",{children:i})]}))};ao.displayName="Button.Small";const so=(n,t)=>{const{children:i,disabled:o=!1,loading:a=!1,styleType:s="default",danger:l=!1,focusableWhenDisabled:d=!1,onClick:c}=n,u=A(n,["children","disabled","loading","styleType","danger","focusableWhenDisabled","onClick"]),g={$buttonStyle:o?"disabled":s,$buttonSizeStyle:"large",$buttonIsDanger:l};return r(to,Object.assign({ref:t,"data-testid":u["data-testid"]||"button",disabled:o&&!d,"aria-disabled":o,"aria-busy":a,onClick:o?void 0:c},g,u,{children:[a&&e(io,{}),e("span",{children:i})]}))};so.displayName="Button.Large";const lo={Default:t.forwardRef(oo),Small:t.forwardRef(ao),Large:t.forwardRef(so)},co=g`
    outline-offset: -1px;
    outline: ${dt["width-020"]} ${dt.solid} ${at["border-focus"]};
`,uo=g`
    outline-color: ${at["border-focus"]};
`,go=g`
    outline-color: ${at["border-disabled"]};
`,bo=g`
    outline-color: ${at["border-error-focus"]};
`,mo=u.div`
    border: ${dt["width-010"]} ${dt.solid} ${at.border};
    border-radius: ${ut.sm};
    background: ${at.bg};

    &:focus-within {
        ${co}
    }
    ${e=>e.$focused&&co}

    ${e=>e.$readOnly?g`
                border-color: transparent;
                padding: 0;
                background: transparent !important;

                &:focus-within {
                    ${uo}
                }
                ${e.$focused&&uo}
            `:e.$disabled?g`
                background: ${at["bg-disabled"]};
                cursor: not-allowed;

                &:focus-within {
                    ${go}
                }
                ${e.$focused&&go}
            `:e.$error?g`
                border-color: ${at["border-error"]};

                &:focus-within {
                    ${bo}
                }
                ${e.$focused&&bo}
            `:void 0}
`;u(mo)`
    display: flex;
    align-items: center;
    position: relative;
    height: max-content;
    width: 100%;
    padding: 0 ${ct["spacing-16"]} 0
        ${e=>e.$readOnly?"0":ct["spacing-16"]};
    flex-direction: ${e=>"right"===e.$position?"row-reverse":"row"};
`;const ho=u.input`
    ${e=>"small"===e.$variant?st["body-md-regular"]:st["body-baseline-regular"]}
    color: ${at.text};
    display: block;
    background: transparent;
    border: none;
    outline: none;
    box-shadow: none;
    padding: 0;
    margin: 0;

    &:disabled {
        color: ${at["text-subtler"]};

        &:hover {
            cursor: not-allowed;
        }
    }

    &::placeholder,
    &::-webkit-input-placeholder {
        color: ${at["text-subtler"]};
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
`,yo=u.button`
    background: transparent;
    border: none;
    outline: none;

    &:focus,
    &:active {
        outline: none;
    }

    &:focus-visible {
        outline: ${dt["width-010"]} ${dt.solid}
            ${at["border-focus"]};
        border-radius: ${ut.sm};
    }
`,po=u(ho)`
    width: 100%;
    height: calc(3rem - 2px); // exclude top and bottom borders

    ${e=>"no-border"!==e.$styleType&&g`
            padding-left: ${e.$visuallyReadOnly?0:ct["spacing-16"]};
            padding-right: ${e.$visuallyReadOnly||e.$showClear?0:ct["spacing-16"]};
        `}
`,fo=u(yo)`
    height: auto;
    padding: ${ct["spacing-12"]} ${ct["spacing-16"]};

    cursor: pointer;
    color: ${at.icon};

    ${e=>"no-border"===e.$styleType&&g`
            margin-right: -${ct["spacing-12"]};
        `}
`,vo=u(y)`
    height: 1.25rem;
    width: 1.25rem;
    vertical-align: middle;
`,xo=u.div`
    display: flex;
    width: 100%;
`,Fo=u(mo)`
    display: flex;
    align-items: center;
    width: 100%;
`,wo=t.forwardRef(((t,i)=>{var{value:o,spacing:s,type:l,error:d,disabled:u,readOnly:g,onChange:b,onClear:m,allowClear:h=!1,className:y,styleType:p="bordered"}=t,f=A(t,["value","spacing","type","error","disabled","readOnly","onChange","onClear","allowClear","className","styleType"]);const v=((e,r)=>"tel"===e&&!!r)(l,s),x=a(null);c(i,(()=>x.current),[]);const F=function({ref:e,formatter:r}){return()=>{var n;const t=e.current;if(!t)return;const i=t.value,o=r(i),a=null!==(n=t.selectionEnd)&&void 0!==n?n:0,s=i.substring(0,a),l=r(s),d=s.length-l.length,c=Math.max(0,a-d);return{nextValue:o,updateCaretPosition:()=>{t.value=o,t.setSelectionRange(c,c)}}}}({ref:x,formatter:e=>v?si.transformWithSpaces(e,s):e}),w=e=>{b&&(v?$(e):b(e))},E=()=>{m&&m(),x&&x.current&&x.current.focus()},$=e=>{const r=F();if(!r)return;const{nextValue:n,updateCaretPosition:t}=r,i=n.replace(/\s/g,"");e.target.value=i,null==b||b(e),t()},D=o?(e=>e?v?si.transformWithSpaces(e,s):e:"")(o):o,C=h&&!u&&!g&&!!o,B=()=>r(n,{children:[e(po,Object.assign({"data-testid":"input",ref:x,"aria-disabled":u,value:D,onChange:w,type:l,readOnly:g||u,$showClear:C,$styleType:p,$visuallyReadOnly:g},f)),C&&e(fo,{onClick:E,type:"button","aria-label":"Clear input",$styleType:p,children:e(vo,{"aria-hidden":!0})})]});return e(n,{children:"no-border"===p?e(xo,{className:y,children:B()}):e(Fo,{$disabled:u,$error:d,$readOnly:g,className:y,children:B()})})})),Eo=u.div`
    display: flex;
    flex-direction: column;
`,$o=u.div`
    display: flex;
    flex-direction: row;
    align-self: center;
    align-items: center;
    gap: ${ct["spacing-8"]};
`,Do=u(wo)`
    min-width: 20px;
    margin-bottom: 0rem !important;

    input {
        padding: 0;
        text-align: center;
    }
`,Co=u(lo.Small)`
    margin: ${ct["spacing-32"]} 0;
`,Bo=u(Ot.BodyBL)`
    flex-shrink: 0;
`,Ao=(e,r=1)=>!!e&&RegExp(`^[0-9]{${r}}$`).test(e),So=(e,r,n)=>{if(e.length===r)return e;if(n){const[t,i]=e.split(n.separator);return t===n.value&&i.length===r?i:""}return""},ko=n=>{var{id:t,value:s=[],"data-testid":l,className:d,cooldownDuration:c,actionButtonProps:u,errorMessage:g,numOfInput:b,prefix:m,onChange:h,onCooldownStart:y,onCooldownEnd:p}=n,f=A(n,["id","value","data-testid","className","cooldownDuration","actionButtonProps","errorMessage","numOfInput","prefix","onChange","onCooldownStart","onCooldownEnd"]);const v=null!=u?u:{},{disabled:x,onClick:F,styleType:w="secondary"}=v,E=A(v,["disabled","onClick","styleType"]),$=a([]),D=a(h),[C,B]=o(new Array(b).fill("")),[S,k]=o(c),[z,O]=o(new Date),[M]=o((()=>ai.generate())),_=!!g,T=`${M}-error`,j=`${M}-timer`;i((()=>{var e;return null===(e=null==$?void 0:$.current[0])||void 0===e||e.focus(),document.addEventListener("paste",I),()=>document.removeEventListener("paste",I)}),[]),i((()=>{if(0!==c){y&&y();const e=R();return()=>e()}}),[z]),i((()=>{D.current=h}),[h]),i((()=>{s.length===b&&B(s)}),[s]);const L=e=>{if(e&&Ao(e,b)){const r=e.split("");return B(r),D.current&&D.current(r),!0}return!1},Y=e=>r=>{var n;const t=r.target.value,i=C.every((e=>""===e)),o=So(t,b,m);if(i&&L(o))return;const a=t.replace(/[^0-9]/g,"");if(Ao(a)){const r=[...C];r[e]=a.substring(a.length-1),null===(n=$.current[e+1])||void 0===n||n.focus(),B(r),h&&h(r)}},W=e=>r=>{var n,t,i;const{key:o,code:a}=r;if("Backspace"===o||"Backspace"===a){const r=[...C];""!==r[e]?r[e]="":0!==e&&(r[e-1]="",null===(n=$.current[e-1])||void 0===n||n.focus()),B(r),h&&h(r)}else"ArrowRight"===r.code?null===(t=$.current[e+1])||void 0===t||t.focus():"ArrowLeft"===r.code&&(null===(i=$.current[e-1])||void 0===i||i.focus())},I=e=>{if(!e.clipboardData)return;const r=e.clipboardData.getData("text"),n=So(r,b,m);L(n)||e.preventDefault()},H=()=>{const e=Date.now(),r=1e3*c;return e<z.valueOf()+r},R=()=>{const e=setInterval((()=>{const r=Date.now(),n=1e3*c,t=Math.ceil((z.valueOf()+n-r)/1e3);k(t),t<=0&&(p&&p(),clearInterval(e))}),1e3);return()=>{clearInterval(e)}},P=(e,r,n)=>n?`${n}-${r}-${e+1}`:`${r}-${e+1}`,N=e=>`${e} second${1===e?"":"s"}`;return r(Eo,{id:t,"data-testid":l,className:d,children:[r($o,{role:"group","aria-label":`${b}-digit OTP input field`,children:[m&&r(Bo,{forwardedAs:"span","data-testid":"otp-prefix",weight:"semibold",children:[e(ji,{children:"O T P prefix"}),`${m.value} ${m.separator}`]}),C.map(((r,n)=>e(Do,Object.assign({id:P(n,"otp-input",t),"data-testid":P(n,"otp-input",l),"aria-label":`${si.formatOrdinal(n+1)} digit`,"aria-invalid":_,"aria-describedby":_?T:void 0,ref:e=>$.current[n]=e,type:"text",inputMode:"numeric",value:r,error:_,onChange:Y(n),onKeyDown:W(n),autoComplete:"off"},f),n)))]}),g&&e(Ti,{id:T,children:g}),r(ji,{role:"timer",id:j,children:[N(S)," remaining"]}),e(ji,{"aria-live":"polite",children:S>0?"":"Ready to resend OTP"}),e(Co,Object.assign({styleType:w,type:"button"},E,{onClick:e=>{B(new Array(b).fill("")),H()||(O(new Date),k(c)),F&&F(e)},disabled:x||H()},E.children?{children:E.children}:{children:S>0?`Resend OTP in ${N(S)}`:"Resend OTP","aria-label":S>0?`Resend OTP in ${N(c)}`:"Resend OTP","aria-describedby":j}))]})};export{ko as OtpInput};
//# sourceMappingURL=index.js.map
