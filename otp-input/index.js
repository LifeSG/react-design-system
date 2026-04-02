import{jsx as e,jsxs as r,Fragment as n}from"react/jsx-runtime";import t,{useRef as i,useLayoutEffect as o,useCallback as a,useEffect as s,useState as l,createContext as d,useContext as c,useImperativeHandle as u,forwardRef as g}from"react";import"@lifesg/react-icons/i-circle-fill";import m,{css as b,isStyledComponent as h,keyframes as y}from"styled-components";import{ExternalIcon as p}from"@lifesg/react-icons/external";import{CrossIcon as f}from"@lifesg/react-icons/cross";import{useFloatingTree as x,FloatingTree as v,useFloatingNodeId as F,FloatingNode as w,useFloating as $,useTransitionStatus as E,useDismiss as C,useInteractions as D,FloatingFocusManager as B}from"@floating-ui/react";import A from"react-dom";import{ExclamationCircleFillIcon as S}from"@lifesg/react-icons/exclamation-circle-fill";function k(e,r){var n={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&r.indexOf(t)<0&&(n[t]=e[t]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(t=Object.getOwnPropertySymbols(e);i<t.length;i++)r.indexOf(t[i])<0&&Object.prototype.propertyIsEnumerable.call(e,t[i])&&(n[t[i]]=e[t[i]])}return n}"function"==typeof SuppressedError&&SuppressedError;var z="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};function O(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var M=Array.isArray,_="object"==typeof z&&z&&z.Object===Object&&z,T="object"==typeof self&&self&&self.Object===Object&&self,L=_||T||Function("return this")(),j=L.Symbol,Y=j,I=Object.prototype,W=I.hasOwnProperty,H=I.toString,R=Y?Y.toStringTag:void 0;var P=function(e){var r=W.call(e,R),n=e[R];try{e[R]=void 0;var t=!0}catch(e){}var i=H.call(e);return t&&(r?e[R]=n:delete e[R]),i},N=Object.prototype.toString;var V=P,Z=function(e){return N.call(e)},X=j?j.toStringTag:void 0;var U=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":X&&X in Object(e)?V(e):Z(e)};var J=U,q=function(e){return null!=e&&"object"==typeof e};var G=function(e){return"symbol"==typeof e||q(e)&&"[object Symbol]"==J(e)},K=M,Q=G,ee=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,re=/^\w*$/;var ne=function(e,r){if(K(e))return!1;var n=typeof e;return!("number"!=n&&"symbol"!=n&&"boolean"!=n&&null!=e&&!Q(e))||(re.test(e)||!ee.test(e)||null!=r&&e in Object(r))};var te=function(e){var r=typeof e;return null!=e&&("object"==r||"function"==r)},ie=U,oe=te;var ae,se=function(e){if(!oe(e))return!1;var r=ie(e);return"[object Function]"==r||"[object GeneratorFunction]"==r||"[object AsyncFunction]"==r||"[object Proxy]"==r},le=L["__core-js_shared__"],de=(ae=/[^.]+$/.exec(le&&le.keys&&le.keys.IE_PROTO||""))?"Symbol(src)_1."+ae:"";var ce=function(e){return!!de&&de in e},ue=Function.prototype.toString;var ge=se,me=ce,be=te,he=function(e){if(null!=e){try{return ue.call(e)}catch(e){}try{return e+""}catch(e){}}return""},ye=/^\[object .+?Constructor\]$/,pe=Function.prototype,fe=Object.prototype,xe=pe.toString,ve=fe.hasOwnProperty,Fe=RegExp("^"+xe.call(ve).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");var we=function(e,r){return null==e?void 0:e[r]},$e=function(e){return!(!be(e)||me(e))&&(ge(e)?Fe:ye).test(he(e))},Ee=we;var Ce=function(e,r){var n=Ee(e,r);return $e(n)?n:void 0},De=Ce(Object,"create"),Be=De;var Ae=function(){this.__data__=Be?Be(null):{},this.size=0};var Se=function(e){var r=this.has(e)&&delete this.__data__[e];return this.size-=r?1:0,r},ke=De,ze=Object.prototype.hasOwnProperty;var Oe=function(e){var r=this.__data__;if(ke){var n=r[e];return"__lodash_hash_undefined__"===n?void 0:n}return ze.call(r,e)?r[e]:void 0},Me=De,_e=Object.prototype.hasOwnProperty;var Te=function(e){var r=this.__data__;return Me?void 0!==r[e]:_e.call(r,e)},Le=De;var je=function(e,r){var n=this.__data__;return this.size+=this.has(e)?0:1,n[e]=Le&&void 0===r?"__lodash_hash_undefined__":r,this},Ye=Ae,Ie=Se,We=Oe,He=Te,Re=je;function Pe(e){var r=-1,n=null==e?0:e.length;for(this.clear();++r<n;){var t=e[r];this.set(t[0],t[1])}}Pe.prototype.clear=Ye,Pe.prototype.delete=Ie,Pe.prototype.get=We,Pe.prototype.has=He,Pe.prototype.set=Re;var Ne=Pe;var Ve=function(){this.__data__=[],this.size=0};var Ze=function(e,r){return e===r||e!=e&&r!=r};var Xe=function(e,r){for(var n=e.length;n--;)if(Ze(e[n][0],r))return n;return-1},Ue=Xe,Je=Array.prototype.splice;var qe=function(e){var r=this.__data__,n=Ue(r,e);return!(n<0)&&(n==r.length-1?r.pop():Je.call(r,n,1),--this.size,!0)},Ge=Xe;var Ke=function(e){var r=this.__data__,n=Ge(r,e);return n<0?void 0:r[n][1]},Qe=Xe;var er=function(e){return Qe(this.__data__,e)>-1},rr=Xe;var nr=function(e,r){var n=this.__data__,t=rr(n,e);return t<0?(++this.size,n.push([e,r])):n[t][1]=r,this},tr=Ve,ir=qe,or=Ke,ar=er,sr=nr;function lr(e){var r=-1,n=null==e?0:e.length;for(this.clear();++r<n;){var t=e[r];this.set(t[0],t[1])}}lr.prototype.clear=tr,lr.prototype.delete=ir,lr.prototype.get=or,lr.prototype.has=ar,lr.prototype.set=sr;var dr=lr,cr=Ce(L,"Map"),ur=Ne,gr=dr,mr=cr;var br=function(e){var r=typeof e;return"string"==r||"number"==r||"symbol"==r||"boolean"==r?"__proto__"!==e:null===e};var hr=function(e,r){var n=e.__data__;return br(r)?n["string"==typeof r?"string":"hash"]:n.map},yr=hr;var pr=function(e){var r=yr(this,e).delete(e);return this.size-=r?1:0,r},fr=hr;var xr=function(e){return fr(this,e).get(e)},vr=hr;var Fr=function(e){return vr(this,e).has(e)},wr=hr;var $r=function(e,r){var n=wr(this,e),t=n.size;return n.set(e,r),this.size+=n.size==t?0:1,this},Er=function(){this.size=0,this.__data__={hash:new ur,map:new(mr||gr),string:new ur}},Cr=pr,Dr=xr,Br=Fr,Ar=$r;function Sr(e){var r=-1,n=null==e?0:e.length;for(this.clear();++r<n;){var t=e[r];this.set(t[0],t[1])}}Sr.prototype.clear=Er,Sr.prototype.delete=Cr,Sr.prototype.get=Dr,Sr.prototype.has=Br,Sr.prototype.set=Ar;var kr=Sr;function zr(e,r){if("function"!=typeof e||null!=r&&"function"!=typeof r)throw new TypeError("Expected a function");var n=function(){var t=arguments,i=r?r.apply(this,t):t[0],o=n.cache;if(o.has(i))return o.get(i);var a=e.apply(this,t);return n.cache=o.set(i,a)||o,a};return n.cache=new(zr.Cache||kr),n}zr.Cache=kr;var Or=zr;var Mr=function(e){var r=Or(e,(function(e){return 500===n.size&&n.clear(),e})),n=r.cache;return r},_r=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,Tr=/\\(\\)?/g,Lr=Mr((function(e){var r=[];return 46===e.charCodeAt(0)&&r.push(""),e.replace(_r,(function(e,n,t,i){r.push(t?i.replace(Tr,"$1"):n||e)})),r}));var jr=function(e,r){for(var n=-1,t=null==e?0:e.length,i=Array(t);++n<t;)i[n]=r(e[n],n,e);return i},Yr=M,Ir=G,Wr=j?j.prototype:void 0,Hr=Wr?Wr.toString:void 0;var Rr=function e(r){if("string"==typeof r)return r;if(Yr(r))return jr(r,e)+"";if(Ir(r))return Hr?Hr.call(r):"";var n=r+"";return"0"==n&&1/r==-1/0?"-0":n},Pr=Rr;var Nr=M,Vr=ne,Zr=Lr,Xr=function(e){return null==e?"":Pr(e)};var Ur=G;var Jr=function(e,r){return Nr(e)?e:Vr(e,r)?[e]:Zr(Xr(e))},qr=function(e){if("string"==typeof e||Ur(e))return e;var r=e+"";return"0"==r&&1/e==-1/0?"-0":r};var Gr=function(e,r){for(var n=0,t=(r=Jr(r,e)).length;null!=e&&n<t;)e=e[qr(r[n++])];return n&&n==t?e:void 0};var Kr=O((function(e,r,n){var t=null==e?void 0:Gr(e,r);return void 0===t?n:t}));const Qr=(e,r,n)=>Kr(n,r)||Kr(e,r),en=(e,r)=>{const n=r||e.defaultValue;return Kr(e.collections,n)},rn={collections:{default:{"width-005":.5,"width-010":1,"width-020":2,"width-040":4,solid:"solid"}},defaultValue:"default"},nn=e=>r=>{var n;const t=r.theme,i=en(rn,null==t?void 0:t.borderScheme);return(null===(n=null==t?void 0:t.overrides)||void 0===n?void 0:n.border)?`${Qr(i,e,t.overrides.border)}px`:`${i[e]}px`},tn={"width-005":nn("width-005"),"width-010":nn("width-010"),"width-020":nn("width-020"),"width-040":nn("width-040"),solid:(on="solid",e=>{var r;const n=e.theme,t=en(rn,null==n?void 0:n.borderScheme),i=(null===(r=null==n?void 0:n.overrides)||void 0===r?void 0:r.border)?Qr(t,on,n.overrides.border):t[on];return"function"==typeof i?i(e):i})};var on;const an={"brand-10":"#2C0C0B","brand-20":"#4C1513","brand-30":"#6C1D1B","brand-40":"#922825","brand-50":"#BF3431","brand-60":"#F15D5A","brand-70":"#F69491","brand-80":"#FABAB7","brand-90":"#FCD7D2","brand-95":"#FFEBE7","brand-100":"#FFF6F4","primary-10":"#1A122C","primary-20":"#2F1F4D","primary-30":"#422D6E","primary-40":"#5B3D97","primary-50":"#7654BC","primary-60":"#9A82CD","primary-70":"#B7A7D8","primary-80":"#CFC5E5","primary-90":"#E3DDF0","primary-95":"#F0EDF7","primary-100":"#F9F8FC","secondary-10":"#0E1723","secondary-20":"#18293D","secondary-30":"#233A57","secondary-40":"#305078","secondary-50":"#4B6A8F","secondary-60":"#7B91A9","secondary-70":"#A1B1C3","secondary-80":"#C1CBD7","secondary-90":"#DBE1E8","secondary-95":"#EBEFF2","secondary-100":"#F7F8FA","neutral-10":"#161616","neutral-20":"#282828","neutral-30":"#393939","neutral-40":"#4E4E4E","neutral-50":"#686868","neutral-60":"#8E8E8E","neutral-70":"#AFAFB0","neutral-80":"#C7CACA","neutral-90":"#DDE1E2","neutral-95":"#EDEFEF","neutral-100":"#F9F9F9","success-10":"#081A0F","success-20":"#0E2D1B","success-30":"#154126","success-40":"#1C5A34","success-50":"#257645","success-60":"#44A068","success-70":"#64C189","success-80":"#80DCA5","success-90":"#B4ECCB","success-95":"#D5F6E2","success-100":"#EFFCF4","warning-10":"#221302","warning-20":"#3B2204","warning-30":"#543106","warning-40":"#744408","warning-50":"#98590C","warning-60":"#D07A13","warning-70":"#E4A244","warning-80":"#F5C26C","warning-90":"#FADBA6","warning-95":"#FCECD4","warning-100":"#FDF7F0","error-10":"#330505","error-20":"#550808","error-30":"#750C0C","error-40":"#9E130F","error-50":"#CB2213","error-60":"#DE6C6C","error-70":"#E89B9B","error-80":"#EFBEBE","error-90":"#F5D9D9","error-95":"#F9ECEC","error-100":"#FCF7F7","info-10":"#021824","info-20":"#032B3F","info-30":"#053D59","info-40":"#06547B","info-50":"#176E9B","info-60":"#5296BE","info-70":"#82B5DA","info-80":"#ACCFE7","info-90":"#CCE3F1","info-95":"#E3F1F8","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000","primary-inverse":"#FEAB10"},sn={"brand-10":"#1F1221","brand-20":"#371F3B","brand-30":"#4E2C53","brand-40":"#6B3E73","brand-50":"#8D5197","brand-60":"#FF3399","brand-70":"#FF88C4","brand-80":"#FFB3D9","brand-90":"#FFD4E9","brand-95":"#FFE8F3","brand-100":"#FFF8FC","primary-10":"#1F1221","primary-20":"#371F3B","primary-30":"#4E2C53","primary-40":"#6B3E73","primary-50":"#8D5197","primary-60":"#B07DB7","primary-70":"#C7A3CC","primary-80":"#D9C2DD","primary-90":"#E9DBEB","primary-95":"#F3ECF4","primary-100":"#FAF7FA","secondary-10":"#2D091B","secondary-20":"#4D0F2E","secondary-30":"#6B1540","secondary-40":"#931D58","secondary-50":"#C02673","secondary-60":"#FF409F","secondary-70":"#FF88C4","secondary-80":"#FFB3D9","secondary-90":"#FFD4E9","secondary-95":"#FFE8F3","secondary-100":"#FFF8FC","neutral-10":"#161616","neutral-20":"#282828","neutral-30":"#393939","neutral-40":"#4E4E4E","neutral-50":"#686868","neutral-60":"#8E8E8E","neutral-70":"#AFAFB0","neutral-80":"#C7CACA","neutral-90":"#DDE1E2","neutral-95":"#EDEFEF","neutral-100":"#F9F9F9","success-10":"#081A0F","success-20":"#0E2D1B","success-30":"#154126","success-40":"#1C5A34","success-50":"#257645","success-60":"#44A068","success-70":"#64C189","success-80":"#80DCA5","success-90":"#B4ECCB","success-95":"#D5F6E2","success-100":"#EFFCF4","warning-10":"#221302","warning-20":"#3B2204","warning-30":"#543106","warning-40":"#744408","warning-50":"#98590C","warning-60":"#D07A13","warning-70":"#E4A244","warning-80":"#F5C26C","warning-90":"#FADBA6","warning-95":"#FCECD4","warning-100":"#FDF7F0","error-10":"#330505","error-20":"#550808","error-30":"#750C0C","error-40":"#9E130F","error-50":"#CB2213","error-60":"#DE6C6C","error-70":"#E89B9B","error-80":"#EFBEBE","error-90":"#F5D9D9","error-95":"#F9ECEC","error-100":"#FCF7F7","info-10":"#021824","info-20":"#032B3F","info-30":"#053D59","info-40":"#06547B","info-50":"#176E9B","info-60":"#5296BE","info-70":"#82B5DA","info-80":"#ACCFE7","info-90":"#CCE3F1","info-95":"#E3F1F8","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000","primary-inverse":"#FEAB10"},ln={"brand-10":"#2C0C0B","brand-20":"#4C1513","brand-30":"#6C1D1B","brand-40":"#922825","brand-50":"#BF3431","brand-60":"#F15D5A","brand-70":"#F69491","brand-80":"#FABAB7","brand-90":"#FCD7D2","brand-95":"#FFEBE7","brand-100":"#FFF6F4","primary-10":"#001731","primary-20":"#002752","primary-30":"#003874","primary-40":"#004D9F","primary-50":"#1768BE","primary-60":"#3C91EC","primary-70":"#6CB4FF","primary-80":"#A5CDFF","primary-90":"#CFE1FE","primary-95":"#E8F0FE","primary-100":"#F7F9FF","secondary-10":"#131529","secondary-20":"#222547","secondary-30":"#2F3565","secondary-40":"#42498B","secondary-50":"#5B62A7","secondary-60":"#858CBD","secondary-70":"#A8ADCF","secondary-80":"#C6C9E0","secondary-90":"#DDDFEC","secondary-95":"#EDEEF5","secondary-100":"#F8F8FB","neutral-10":"#161616","neutral-20":"#282828","neutral-30":"#393939","neutral-40":"#4E4E4E","neutral-50":"#686868","neutral-60":"#8E8E8E","neutral-70":"#AFAFB0","neutral-80":"#C7CACA","neutral-90":"#DDE1E2","neutral-95":"#EDEFEF","neutral-100":"#F9F9F9","success-10":"#081A0F","success-20":"#0E2D1B","success-30":"#154126","success-40":"#1C5A34","success-50":"#257645","success-60":"#44A068","success-70":"#64C189","success-80":"#80DCA5","success-90":"#B4ECCB","success-95":"#D5F6E2","success-100":"#EFFCF4","warning-10":"#221302","warning-20":"#3B2204","warning-30":"#543106","warning-40":"#744408","warning-50":"#98590C","warning-60":"#D07A13","warning-70":"#E4A244","warning-80":"#F5C26C","warning-90":"#FADBA6","warning-95":"#FCECD4","warning-100":"#FDF7F0","error-10":"#330505","error-20":"#550808","error-30":"#750C0C","error-40":"#9E130F","error-50":"#CB2213","error-60":"#DE6C6C","error-70":"#E89B9B","error-80":"#EFBEBE","error-90":"#F5D9D9","error-95":"#F9ECEC","error-100":"#FCF7F7","info-10":"#021824","info-20":"#032B3F","info-30":"#053D59","info-40":"#06547B","info-50":"#176E9B","info-60":"#5296BE","info-70":"#82B5DA","info-80":"#ACCFE7","info-90":"#CCE3F1","info-95":"#E3F1F8","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000","primary-inverse":"#FEAB10"},dn={"brand-10":"#2C0C0B","brand-20":"#4C1513","brand-30":"#6C1D1B","brand-40":"#922825","brand-50":"#BF3431","brand-60":"#F15D5A","brand-70":"#F69491","brand-80":"#FABAB7","brand-90":"#FCD7D2","brand-95":"#FFEBE7","brand-100":"#FFF6F4","primary-10":"#0011924","primary-20":"#032B40","primary-30":"#043D5A","primary-40":"#05547B","primary-50":"#096EA1","primary-60":"#2098D3","primary-70":"#5CB9E8","primary-80":"#8BD3F6","primary-90":"#BEE6FA","primary-95":"#E2F2FA","primary-100":"#F4FAFC","secondary-10":"#131529","secondary-20":"#222547","secondary-30":"#2F3565","secondary-40":"#42498B","secondary-50":"#5B62A7","secondary-60":"#858CBD","secondary-70":"#A8ADCF","secondary-80":"#C6C9E0","secondary-90":"#DDDFEC","secondary-95":"#EDEEF5","secondary-100":"#F8F8FB","neutral-10":"#161616","neutral-20":"#282828","neutral-30":"#393939","neutral-40":"#4E4E4E","neutral-50":"#686868","neutral-60":"#8E8E8E","neutral-70":"#AFAFB0","neutral-80":"#C7CACA","neutral-90":"#DDE1E2","neutral-95":"#EDEFEF","neutral-100":"#F9F9F9","success-10":"#081A0F","success-20":"#0E2D1B","success-30":"#154126","success-40":"#1C5A34","success-50":"#257645","success-60":"#44A068","success-70":"#64C189","success-80":"#80DCA5","success-90":"#B4ECCB","success-95":"#D5F6E2","success-100":"#EFFCF4","warning-10":"#221302","warning-20":"#3B2204","warning-30":"#543106","warning-40":"#744408","warning-50":"#98590C","warning-60":"#D07A13","warning-70":"#E4A244","warning-80":"#F5C26C","warning-90":"#FADBA6","warning-95":"#FCECD4","warning-100":"#FDF7F0","error-10":"#330505","error-20":"#550808","error-30":"#750C0C","error-40":"#9E130F","error-50":"#CB2213","error-60":"#DE6C6C","error-70":"#E89B9B","error-80":"#EFBEBE","error-90":"#F5D9D9","error-95":"#F9ECEC","error-100":"#FCF7F7","info-10":"#021824","info-20":"#032B3F","info-30":"#053D59","info-40":"#06547B","info-50":"#176E9B","info-60":"#5296BE","info-70":"#82B5DA","info-80":"#ACCFE7","info-90":"#CCE3F1","info-95":"#E3F1F8","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000","primary-inverse":"#FEAB10"},cn={"brand-10":"#001A19","brand-20":"#002D2B","brand-30":"#00413D","brand-40":"#005954","brand-50":"#00756F","brand-60":"#03A098","brand-70":"#55BFBA","brand-80":"#92D6D2","brand-90":"#BFE7E5","brand-95":"#DDF2F1","brand-100":"#F4FBFA","primary-10":"#09191D","primary-20":"#102B34","primary-30":"#173D49","primary-40":"#205666","primary-50":"#2A7086","primary-60":"#5D97A9","primary-70":"#8CB6C2","primary-80":"#B2CED6","primary-90":"#D1E2E7","primary-95":"#E8F0F3","primary-100":"#F7FAFB","secondary-10":"#001731","secondary-20":"#002752","secondary-30":"#003874","secondary-40":"#004D9F","secondary-50":"#5B62A7","secondary-60":"#858CBD","secondary-70":"#A8ADCF","secondary-80":"#C6C9E0","secondary-90":"#DDDFEC","secondary-95":"#EDEEF5","secondary-100":"#F8F8FB","neutral-10":"#161616","neutral-20":"#282828","neutral-30":"#393939","neutral-40":"#4E4E4E","neutral-50":"#686868","neutral-60":"#8E8E8E","neutral-70":"#AFAFB0","neutral-80":"#C7CACA","neutral-90":"#DDE1E2","neutral-95":"#EDEFEF","neutral-100":"#F9F9F9","success-10":"#081A0F","success-20":"#0E2D1B","success-30":"#154126","success-40":"#1C5A34","success-50":"#257645","success-60":"#44A068","success-70":"#64C189","success-80":"#80DCA5","success-90":"#B4ECCB","success-95":"#D5F6E2","success-100":"#EFFCF4","warning-10":"#221302","warning-20":"#3B2204","warning-30":"#543106","warning-40":"#744408","warning-50":"#98590C","warning-60":"#D07A13","warning-70":"#E4A244","warning-80":"#F5C26C","warning-90":"#FADBA6","warning-95":"#FCECD4","warning-100":"#FDF7F0","error-10":"#330505","error-20":"#550808","error-30":"#750C0C","error-40":"#9E130F","error-50":"#CB2213","error-60":"#DE6C6C","error-70":"#E89B9B","error-80":"#EFBEBE","error-90":"#F5D9D9","error-95":"#F9ECEC","error-100":"#FCF7F7","info-10":"#021824","info-20":"#032B3F","info-30":"#053D59","info-40":"#06547B","info-50":"#176E9B","info-60":"#5296BE","info-70":"#82B5DA","info-80":"#ACCFE7","info-90":"#CCE3F1","info-95":"#E3F1F8","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000","primary-inverse":"#FEAB10"},un={"brand-10":"#881317","brand-20":"#B5191E","brand-30":"#B5040A","brand-40":"#D0333F","brand-50":"#DC666F","brand-60":"#E28087","brand-70":"#E7999F","brand-80":"#EDB3B7","brand-90":"#F3CCCF","brand-95":"#F9E6E7","brand-100":"#FCF2F3","primary-10":"#000000","primary-20":"#191919","primary-30":"#333333","primary-40":"#4D4D4D","primary-50":"#666666","primary-60":"#808080","primary-70":"#999999","primary-80":"#B3B3B3","primary-90":"#E6E6E6","primary-95":"#F7F7F7","primary-100":"#FFFFFF","secondary-10":"#19151D","secondary-20":"#2B2533","secondary-30":"#3E3649","secondary-40":"#564A64","secondary-50":"#6F637D","secondary-60":"#948B9F","secondary-70":"#B3ACBB","secondary-80":"#CCC8D2","secondary-90":"#E1DEE4","secondary-95":"#EFEEF1","secondary-100":"#F9F8F9","neutral-10":"#000000","neutral-20":"#191919","neutral-30":"#333333","neutral-40":"#4D4D4D","neutral-50":"#666666","neutral-60":"#808080","neutral-70":"#999999","neutral-80":"#B3B3B3","neutral-90":"#E6E6E6","neutral-95":"#F7F7F7","neutral-100":"#FFFFFF","success-10":"#081A0F","success-20":"#0E2D1B","success-30":"#154126","success-40":"#1C5A34","success-50":"#257645","success-60":"#44A068","success-70":"#64C189","success-80":"#80DCA5","success-90":"#B4ECCB","success-95":"#D5F6E2","success-100":"#EFFCF4","warning-10":"#221302","warning-20":"#3B2204","warning-30":"#543106","warning-40":"#744408","warning-50":"#98590C","warning-60":"#D07A13","warning-70":"#E4A244","warning-80":"#F5C26C","warning-90":"#FADBA6","warning-95":"#FCECD4","warning-100":"#FDF7F0","error-10":"#330505","error-20":"#550808","error-30":"#750C0C","error-40":"#9E130F","error-50":"#CB2213","error-60":"#DE6C6C","error-70":"#E89B9B","error-80":"#EFBEBE","error-90":"#F5D9D9","error-95":"#F9ECEC","error-100":"#FCF7F7","info-10":"#021824","info-20":"#032B3F","info-30":"#053D59","info-40":"#06547B","info-50":"#176E9B","info-60":"#5296BE","info-70":"#82B5DA","info-80":"#ACCFE7","info-90":"#CCE3F1","info-95":"#E3F1F8","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000","primary-inverse":"#FEAB10"},gn={"brand-10":"#0E123A","brand-20":"#191E65","brand-30":"#232B90","brand-40":"#303BC5","brand-50":"#494CFF","brand-60":"#AD6EFF","brand-70":"#AEA4FF","brand-80":"#C5C4FF","brand-90":"#DDDCFF","brand-95":"#EDECFF","brand-100":"#F8F8FF","primary-10":"#10152B","primary-20":"#1C254B","primary-30":"#28356C","primary-40":"#38489A","primary-50":"#4D5AD7","primary-60":"#7487F2","primary-70":"#9AAAFC","primary-80":"#BDC7FD","primary-90":"#DADFFB","primary-95":"#ECEEFE","primary-100":"#F7F8FF","secondary-10":"#19151D","secondary-20":"#2B2533","secondary-30":"#3E3649","secondary-40":"#564A64","secondary-50":"#6F637D","secondary-60":"#948B9F","secondary-70":"#B3ACBB","secondary-80":"#CCC8D2","secondary-90":"#E1DEE4","secondary-95":"#EFEEF1","secondary-100":"#F9F8F9","neutral-10":"#161616","neutral-20":"#282828","neutral-30":"#393939","neutral-40":"#4E4E4E","neutral-50":"#686868","neutral-60":"#8E8E8E","neutral-70":"#AFAFB0","neutral-80":"#C7CACA","neutral-90":"#DDE1E2","neutral-95":"#EDEFEF","neutral-100":"#F9F9F9","success-10":"#081A0F","success-20":"#0E2D1B","success-30":"#154126","success-40":"#1C5A34","success-50":"#257645","success-60":"#44A068","success-70":"#64C189","success-80":"#80DCA5","success-90":"#B4ECCB","success-95":"#D5F6E2","success-100":"#EFFCF4","warning-10":"#221302","warning-20":"#3B2204","warning-30":"#543106","warning-40":"#744408","warning-50":"#98590C","warning-60":"#D07A13","warning-70":"#E4A244","warning-80":"#F5C26C","warning-90":"#FADBA6","warning-95":"#FCECD4","warning-100":"#FDF7F0","error-10":"#330505","error-20":"#550808","error-30":"#750C0C","error-40":"#9E130F","error-50":"#CB2213","error-60":"#DE6C6C","error-70":"#E89B9B","error-80":"#EFBEBE","error-90":"#F5D9D9","error-95":"#F9ECEC","error-100":"#FCF7F7","info-10":"#021824","info-20":"#032B3F","info-30":"#053D59","info-40":"#06547B","info-50":"#176E9B","info-60":"#5296BE","info-70":"#82B5DA","info-80":"#ACCFE7","info-90":"#CCE3F1","info-95":"#E3F1F8","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000","primary-inverse":"#FEAB10"},mn={"brand-10":"#170F39","brand-20":"#281C62","brand-30":"#38268B","brand-40":"#4D34BF","brand-50":"#5735DF","brand-60":"#9986F9","brand-70":"#B2A5F8","brand-80":"#CDC2FA","brand-90":"#E2DCFC","brand-95":"#EFEDFE","brand-100":"#FAF8FD","primary-10":"#170F39","primary-20":"#281C62","primary-30":"#38268B","primary-40":"#4D34BF","primary-50":"#5735DF","primary-60":"#9986F9","primary-70":"#B2A5F8","primary-80":"#CDC2FA","primary-90":"#E2DCFC","primary-95":"#EFEDFE","primary-100":"#FAF8FD","secondary-10":"#251204","secondary-20":"#401F08","secondary-30":"#5B2C0B","secondary-40":"#7E3D0F","secondary-50":"#B04900","secondary-60":"#E26E1C","secondary-70":"#FF9445","secondary-80":"#FFBB8E","secondary-90":"#FFD9BF","secondary-95":"#FFECDF","secondary-100":"#FFF8F3","neutral-10":"#161616","neutral-20":"#282828","neutral-30":"#393939","neutral-40":"#4E4E4E","neutral-50":"#686868","neutral-60":"#8E8E8E","neutral-70":"#AFAFB0","neutral-80":"#C7CACA","neutral-90":"#DDE1E2","neutral-95":"#EDEFEF","neutral-100":"#F9F9F9","success-10":"#031B15","success-20":"#082D24","success-30":"#094134","success-40":"#0D5947","success-50":"#10755E","success-60":"#16A181","success-70":"#1EC59D","success-80":"#6FDDC2","success-90":"#AFECDE","success-95":"#D5F5ED","success-100":"#F1FCF9","warning-10":"#1F1500","warning-20":"#362500","warning-30":"#4D3501","warning-40":"#6A4801","warning-50":"#8B6001","warning-60":"#BF8301","warning-70":"#EAA102","warning-80":"#FFBF34","warning-90":"#FFDC8F","warning-95":"#FFEDC7","warning-100":"#FFF8EA","error-10":"#270F10","error-20":"#441B1B","error-30":"#612627","error-40":"#853535","error-50":"#AF4546","error-60":"#EC6162","error-70":"#F29696","error-80":"#F7BBBC","error-90":"#FAD8D8","error-95":"#FCEAEA","error-100":"#FEF7F7","info-10":"#0F1627","info-20":"#1B2745","info-30":"#273763","info-40":"#354D88","info-50":"#4665B3","info-60":"#618AF6","info-70":"#8DADFF","info-80":"#B4C9FF","info-90":"#D3DFFF","info-95":"#E9EFFF","info-100":"#F5F8FF",white:"#FFFFFF",black:"#000000","primary-inverse":"#FEAB10"},bn={"brand-10":"#0E113C","brand-20":"#191E67","brand-30":"#232A92","brand-40":"#233FC2","brand-50":"#135CEA","brand-60":"#378FFB","brand-70":"#71B3FD","brand-80":"#9DCFFE","brand-90":"#C1E5FF","brand-95":"#DCF1FF","brand-100":"#F3FAFF","primary-10":"#0E113C","primary-20":"#191E67","primary-30":"#232A92","primary-40":"#233FC2","primary-50":"#135CEA","primary-60":"#378FFB","primary-70":"#71B3FD","primary-80":"#9DCFFE","primary-90":"#C1E5FF","primary-95":"#DCF1FF","primary-100":"#F3FAFF","secondary-10":"#34001F","secondary-20":"#540033","secondary-30":"#730045","secondary-40":"#9D0054","secondary-50":"#C61C64","secondary-60":"#DE6792","secondary-70":"#EB96B6","secondary-80":"#F5BAD2","secondary-90":"#FCD5E3","secondary-95":"#FDEBF1","secondary-100":"#FDF6F9","neutral-10":"#161616","neutral-20":"#282828","neutral-30":"#393939","neutral-40":"#4E4E4E","neutral-50":"#686868","neutral-60":"#8E8E8E","neutral-70":"#AFAFB0","neutral-80":"#C7CACA","neutral-90":"#DDE1E2","neutral-95":"#EDEFEF","neutral-100":"#F9F9F9","success-10":"#081A0F","success-20":"#0E2D1B","success-30":"#154126","success-40":"#1C5A34","success-50":"#257645","success-60":"#44A068","success-70":"#64C189","success-80":"#80DCA5","success-90":"#B4ECCB","success-95":"#D5F6E2","success-100":"#EFFCF4","warning-10":"#221302","warning-20":"#3B2204","warning-30":"#543106","warning-40":"#744408","warning-50":"#98590C","warning-60":"#D07A13","warning-70":"#E4A244","warning-80":"#F5C26C","warning-90":"#FADBA6","warning-95":"#FCECD4","warning-100":"#FDF7F0","error-10":"#330505","error-20":"#550808","error-30":"#750C0C","error-40":"#9E130F","error-50":"#CB2213","error-60":"#DE6C6C","error-70":"#E89B9B","error-80":"#EFBEBE","error-90":"#F5D9D9","error-95":"#F9ECEC","error-100":"#FCF7F7","info-10":"#021824","info-20":"#032B3F","info-30":"#053D59","info-40":"#06547B","info-50":"#176E9B","info-60":"#5296BE","info-70":"#82B5DA","info-80":"#ACCFE7","info-90":"#CCE3F1","info-95":"#E3F1F8","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000","primary-inverse":"#FEAB10"},hn={"brand-10":"#370009","brand-20":"#4E000D","brand-30":"#640011","brand-40":"#850017","brand-50":"#9B001A","brand-60":"#EF2D4E","brand-70":"#F692A3","brand-80":"#FAB9C4","brand-90":"#FCD7DD","brand-95":"#FDEAED","brand-100":"#FEF8F9","primary-10":"#1F102A","primary-20":"#2F193F","primary-30":"#3E2053","primary-40":"#562D71","primary-50":"#663587","primary-60":"#9370AA","primary-70":"#BCA7CB","primary-80":"#D3C5DC","primary-90":"#E5DDEB","primary-95":"#F2EEF5","primary-100":"#FAF9FB","secondary-10":"#201316","secondary-20":"#311D22","secondary-30":"#3F272C","secondary-40":"#58363D","secondary-50":"#684049","secondary-60":"#AF6A7A","secondary-70":"#F393A8","secondary-80":"#FFB6C6","secondary-90":"#FFD6DF","secondary-95":"#FFE9EE","secondary-100":"#FFF7F9","neutral-10":"#161616","neutral-20":"#222222","neutral-30":"#2D2D2D","neutral-40":"#3F3F3F","neutral-50":"#4B4B4B","neutral-60":"#7E7E7E","neutral-70":"#AFAFB0","neutral-80":"#C7CACA","neutral-90":"#DDE1E2","neutral-95":"#EDEFEF","neutral-100":"#F9F9F9","success-10":"#081917","success-20":"#0D2724","success-30":"#11332E","success-40":"#174740","success-50":"#1B554C","success-60":"#2D8C7E","success-70":"#46C2AF","success-80":"#89D8CC","success-90":"#BCE9E2","success-95":"#DAF3EF","success-100":"#F0FAF9","warning-10":"#241200","warning-20":"#371C00","warning-30":"#482500","warning-40":"#633300","warning-50":"#763C00","warning-60":"#C36400","warning-70":"#FF9524","warning-80":"#FFBD77","warning-90":"#FFD9B2","warning-95":"#FFEBD6","warning-100":"#FFF7F0","error-10":"#330505","error-20":"#4B0707","error-30":"#600909","error-40":"#810D0D","error-50":"#98110F","error-60":"#D7504C","error-70":"#E89B9B","error-80":"#EFBEBE","error-90":"#F5D9D9","error-95":"#F9ECEC","error-100":"#FCF7F7","info-10":"#021824","info-20":"#032537","info-30":"#043148","info-40":"#054462","info-50":"#065175","info-60":"#3985AF","info-70":"#82B5DA","info-80":"#ACCFE7","info-90":"#CCE3F1","info-95":"#E3F1F8","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000","primary-inverse":"#FEAB10"},yn={"brand-10":"#00143A","brand-20":"#00205B","brand-30":"#153368","brand-40":"#18417C","brand-50":"#00558C","brand-60":"#009CDE","brand-70":"#5AB9E7","brand-80":"#9ED0ED","brand-90":"#CAE3F4","brand-95":"#E2F0F9","brand-100":"#F4FAFD","primary-10":"#00143A","primary-20":"#00205B","primary-30":"#153368","primary-40":"#18417C","primary-50":"#00558C","primary-60":"#009CDE","primary-70":"#5AB9E7","primary-80":"#9ED0ED","primary-90":"#CAE3F4","primary-95":"#E2F0F9","primary-100":"#F4FAFD","secondary-10":"#10171F","secondary-20":"#1E252C","secondary-30":"#2F353B","secondary-40":"#3D4247","secondary-50":"#4E5255","secondary-60":"#8F9396","secondary-70":"#A9B0B3","secondary-80":"#C7CBCC","secondary-90":"#DDDFE0","secondary-95":"#ECEDEE","secondary-100":"#F8F8F9","neutral-10":"#10171F","neutral-20":"#1E252C","neutral-30":"#2F353B","neutral-40":"#3D4247","neutral-50":"#4E5255","neutral-60":"#8F9396","neutral-70":"#A9B0B3","neutral-80":"#C7CBCC","neutral-90":"#DDDFE0","neutral-95":"#ECEDEE","neutral-100":"#F8F8F9","success-10":"#001B0E","success-20":"#012A16","success-30":"#013D20","success-40":"#014D28","success-50":"#005F30","success-60":"#48A377","success-70":"#77BD9B","success-80":"#A3D5BD","success-90":"#C4E7D6","success-95":"#DBF4E7","success-100":"#ECFDF5","warning-10":"#1F1500","warning-20":"#312100","warning-30":"#473000","warning-40":"#593C00","warning-50":"#6E4B00","warning-60":"#B78C31","warning-70":"#DDA633","warning-80":"#E0C792","warning-90":"#E9DEC5","warning-95":"#F4EEE0","warning-100":"#FAF8F3","error-10":"#360109","error-20":"#50010E","error-30":"#6F0213","error-40":"#88051A","error-50":"#A60A24","error-60":"#E07083","error-70":"#EA98A6","error-80":"#F3BBC4","error-90":"#FAD5DC","error-95":"#FEE9ED","error-100":"#FFF6F8","info-10":"#00143A","info-20":"#00205B","info-30":"#153368","info-40":"#18417C","info-50":"#00558C","info-60":"#009CDE","info-70":"#5AB9E7","info-80":"#9ED0ED","info-90":"#CAE3F4","info-95":"#E2F0F9","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000","primary-inverse":"#FFCB6A"},pn={collections:{lifesg:ln,bookingsg:an,rbs:gn,mylegacy:dn,ccube:sn,oneservice:cn,pa:un,a11yplayground:mn,supportgowhere:bn,imda:hn,spf:yn},defaultValue:"lifesg"},fn={collections:{lifesg:ln,bookingsg:an,rbs:gn,mylegacy:dn,ccube:sn,oneservice:cn,pa:un,a11yplayground:mn,supportgowhere:bn,imda:hn,spf:yn},defaultValue:"lifesg"},xn=e=>r=>{var n;const t=r.theme,i="dark"===(null==t?void 0:t.colourMode),o=en(i?fn:pn,null==t?void 0:t.colourScheme),a=i?"primitiveColourDark":"primitiveColour",s=null===(n=null==t?void 0:t.overrides)||void 0===n?void 0:n[a];return s?Qr(o,e,s):o[e]},vn={"brand-10":xn("brand-10"),"brand-20":xn("brand-20"),"brand-30":xn("brand-30"),"brand-40":xn("brand-40"),"brand-50":xn("brand-50"),"brand-60":xn("brand-60"),"brand-70":xn("brand-70"),"brand-80":xn("brand-80"),"brand-90":xn("brand-90"),"brand-95":xn("brand-95"),"brand-100":xn("brand-100"),"primary-10":xn("primary-10"),"primary-20":xn("primary-20"),"primary-30":xn("primary-30"),"primary-40":xn("primary-40"),"primary-50":xn("primary-50"),"primary-60":xn("primary-60"),"primary-70":xn("primary-70"),"primary-80":xn("primary-80"),"primary-90":xn("primary-90"),"primary-95":xn("primary-95"),"primary-100":xn("primary-100"),"secondary-10":xn("secondary-10"),"secondary-20":xn("secondary-20"),"secondary-30":xn("secondary-30"),"secondary-40":xn("secondary-40"),"secondary-50":xn("secondary-50"),"secondary-60":xn("secondary-60"),"secondary-70":xn("secondary-70"),"secondary-80":xn("secondary-80"),"secondary-90":xn("secondary-90"),"secondary-95":xn("secondary-95"),"secondary-100":xn("secondary-100"),"neutral-10":xn("neutral-10"),"neutral-20":xn("neutral-20"),"neutral-30":xn("neutral-30"),"neutral-40":xn("neutral-40"),"neutral-50":xn("neutral-50"),"neutral-60":xn("neutral-60"),"neutral-70":xn("neutral-70"),"neutral-80":xn("neutral-80"),"neutral-90":xn("neutral-90"),"neutral-95":xn("neutral-95"),"neutral-100":xn("neutral-100"),"success-10":xn("success-10"),"success-20":xn("success-20"),"success-30":xn("success-30"),"success-40":xn("success-40"),"success-50":xn("success-50"),"success-60":xn("success-60"),"success-70":xn("success-70"),"success-80":xn("success-80"),"success-90":xn("success-90"),"success-95":xn("success-95"),"success-100":xn("success-100"),"warning-10":xn("warning-10"),"warning-20":xn("warning-20"),"warning-30":xn("warning-30"),"warning-40":xn("warning-40"),"warning-50":xn("warning-50"),"warning-60":xn("warning-60"),"warning-70":xn("warning-70"),"warning-80":xn("warning-80"),"warning-90":xn("warning-90"),"warning-95":xn("warning-95"),"warning-100":xn("warning-100"),"error-10":xn("error-10"),"error-20":xn("error-20"),"error-30":xn("error-30"),"error-40":xn("error-40"),"error-50":xn("error-50"),"error-60":xn("error-60"),"error-70":xn("error-70"),"error-80":xn("error-80"),"error-90":xn("error-90"),"error-95":xn("error-95"),"error-100":xn("error-100"),"info-10":xn("info-10"),"info-20":xn("info-20"),"info-30":xn("info-30"),"info-40":xn("info-40"),"info-50":xn("info-50"),"info-60":xn("info-60"),"info-70":xn("info-70"),"info-80":xn("info-80"),"info-90":xn("info-90"),"info-95":xn("info-95"),"info-100":xn("info-100"),white:xn("white"),black:xn("black"),"primary-inverse":xn("primary-inverse")},Fn={text:xn("neutral-20"),"text-subtle":xn("neutral-30"),"text-subtler":xn("neutral-50"),"text-subtlest":xn("neutral-60"),"text-primary":xn("primary-50"),"text-primary-strongest":xn("primary-20"),"text-hover":xn("primary-40"),"text-selected":xn("primary-50"),"text-selected-hover":xn("primary-40"),"text-disabled":xn("neutral-50"),"text-disabled-subtle":xn("neutral-60"),"text-disabled-subtlest":xn("neutral-80"),"text-selected-disabled":xn("neutral-20"),"text-success":xn("success-40"),"text-warning":xn("warning-40"),"text-error":xn("error-40"),"text-info":xn("info-40"),"text-inverse":xn("white"),icon:xn("neutral-50"),"icon-subtle":xn("neutral-60"),"icon-strongest":xn("neutral-20"),"icon-primary":xn("primary-50"),"icon-primary-subtle":xn("primary-60"),"icon-primary-subtlest":xn("primary-70"),"icon-hover":xn("primary-40"),"icon-selected":xn("primary-50"),"icon-selected-hover":xn("primary-40"),"icon-disabled":xn("neutral-50"),"icon-disabled-subtle":xn("neutral-60"),"icon-selected-disabled":xn("neutral-60"),"icon-success":xn("success-50"),"icon-warning":xn("warning-60"),"icon-error":xn("error-50"),"icon-error-strong":xn("error-40"),"icon-info":xn("info-50"),"icon-inverse":xn("white"),"icon-primary-inverse":xn("primary-inverse"),border:xn("neutral-90"),"border-strong":xn("neutral-70"),"border-stronger":xn("neutral-50"),"border-primary":xn("primary-50"),"border-primary-subtle":xn("primary-60"),"border-hover":xn("primary-90"),"border-hover-strong":xn("primary-60"),"border-selected":xn("primary-50"),"border-selected-subtle":xn("primary-70"),"border-selected-subtlest":xn("primary-90"),"border-selected-hover":xn("primary-40"),"border-focus":xn("primary-60"),"border-focus-strong":xn("primary-50"),"border-disabled":xn("neutral-90"),"border-selected-disabled":xn("neutral-70"),"border-success":xn("success-60"),"border-warning":xn("warning-60"),"border-error":xn("error-60"),"border-error-focus":xn("error-60"),"border-error-focus-strong":xn("error-40"),"border-error-strong":xn("error-40"),"border-info":xn("info-60"),bg:xn("white"),"bg-strong":xn("neutral-100"),"bg-stronger":xn("neutral-95"),"bg-strongest":xn("neutral-90"),"bg-hover":xn("primary-95"),"bg-hover-strong":xn("primary-90"),"bg-hover-subtle":xn("primary-100"),"bg-hover-neutral":xn("neutral-100"),"bg-hover-neutral-strong":xn("neutral-90"),"bg-selected":xn("primary-95"),"bg-selected-hover":xn("primary-90"),"bg-selected-strong":xn("primary-90"),"bg-selected-stronger":xn("primary-70"),"bg-selected-strongest":xn("primary-50"),"bg-selected-strongest-hover":xn("primary-40"),"bg-disabled":xn("neutral-95"),"bg-selected-disabled":xn("neutral-95"),"bg-selected-stronger-disabled":xn("neutral-70"),"bg-success":xn("success-100"),"bg-success-hover":xn("success-95"),"bg-success-strong":xn("success-50"),"bg-success-strong-hover":xn("success-40"),"bg-warning":xn("warning-100"),"bg-warning-hover":xn("warning-95"),"bg-warning-strong":xn("warning-50"),"bg-warning-strong-hover":xn("warning-40"),"bg-info":xn("info-100"),"bg-info-hover":xn("info-95"),"bg-info-strong":xn("info-50"),"bg-info-strong-hover":xn("info-40"),"bg-error":xn("error-100"),"bg-error-hover":xn("error-95"),"bg-error-strong":xn("error-50"),"bg-error-strong-hover":xn("error-40"),"bg-inverse":xn("neutral-20"),"bg-inverse-subtle":xn("neutral-30"),"bg-inverse-subtler":xn("neutral-50"),"bg-inverse-subtlest":xn("neutral-60"),"bg-inverse-hover":xn("neutral-40"),"bg-primary":xn("primary-50"),"bg-primary-subtle":xn("primary-60"),"bg-primary-subtler":xn("primary-95"),"bg-primary-subtlest":xn("primary-100"),"bg-available":"#6DD0A1","bg-primary-hover":xn("primary-40"),"bg-primary-subtlest-hover":xn("primary-90"),"bg-primary-subtlest-selected":xn("primary-90"),"overlay-strong":"rgba(40, 40, 40, 0.85)","overlay-subtle":"rgba(40, 40, 40, 0.20)",hyperlink:xn("primary-50"),"hyperlink-hover":xn("primary-40"),"hyperlink-visited":xn("primary-40"),"hyperlink-inverse":xn("primary-inverse"),"focus-ring":xn("primary-50"),"focus-ring-inverse":xn("white")},wn={text:xn("neutral-100"),"text-subtle":xn("neutral-80"),"text-subtler":xn("neutral-60"),"text-subtlest":xn("neutral-50"),"text-primary":xn("primary-60"),"text-primary-strongest":xn("primary-90"),"text-hover":xn("primary-70"),"text-selected":xn("primary-60"),"text-selected-hover":xn("primary-70"),"text-disabled":xn("neutral-60"),"text-disabled-subtle":xn("neutral-50"),"text-disabled-subtlest":xn("neutral-30"),"text-selected-disabled":xn("neutral-90"),"text-success":xn("success-70"),"text-warning":xn("warning-70"),"text-error":xn("error-70"),"text-info":xn("info-70"),"text-inverse":xn("black"),icon:xn("neutral-60"),"icon-subtle":xn("neutral-50"),"icon-strongest":xn("neutral-90"),"icon-primary":xn("primary-60"),"icon-primary-subtle":xn("primary-50"),"icon-primary-subtlest":xn("primary-40"),"icon-hover":xn("primary-70"),"icon-selected":xn("primary-60"),"icon-selected-hover":xn("primary-70"),"icon-disabled":xn("neutral-60"),"icon-disabled-subtle":xn("neutral-50"),"icon-selected-disabled":xn("neutral-50"),"icon-success":xn("success-60"),"icon-warning":xn("warning-50"),"icon-error":xn("error-60"),"icon-error-strong":xn("error-70"),"icon-info":xn("info-60"),"icon-inverse":xn("black"),"icon-primary-inverse":xn("primary-inverse"),border:xn("neutral-20"),"border-strong":xn("neutral-40"),"border-stronger":xn("neutral-60"),"border-primary":xn("primary-60"),"border-primary-subtle":xn("primary-50"),"border-hover":xn("primary-20"),"border-hover-strong":xn("primary-50"),"border-selected":xn("primary-60"),"border-selected-subtle":xn("primary-40"),"border-selected-subtlest":xn("primary-20"),"border-selected-hover":xn("primary-70"),"border-focus":xn("primary-50"),"border-focus-strong":xn("primary-60"),"border-disabled":xn("neutral-20"),"border-selected-disabled":xn("neutral-40"),"border-success":xn("success-50"),"border-warning":xn("warning-50"),"border-error":xn("error-50"),"border-error-focus":xn("error-50"),"border-error-focus-strong":xn("error-70"),"border-error-strong":xn("error-70"),"border-info":xn("info-50"),bg:xn("black"),"bg-strong":xn("neutral-10"),"bg-stronger":xn("neutral-20"),"bg-strongest":xn("neutral-20"),"bg-hover":xn("primary-20"),"bg-hover-strong":xn("primary-20"),"bg-hover-subtle":xn("primary-10"),"bg-hover-neutral":xn("neutral-10"),"bg-hover-neutral-strong":xn("neutral-20"),"bg-selected":xn("primary-20"),"bg-selected-hover":xn("primary-20"),"bg-selected-strong":xn("primary-20"),"bg-selected-stronger":xn("primary-40"),"bg-selected-strongest":xn("primary-60"),"bg-selected-strongest-hover":xn("primary-70"),"bg-disabled":xn("neutral-20"),"bg-selected-disabled":xn("neutral-20"),"bg-selected-stronger-disabled":xn("neutral-40"),"bg-success":xn("success-10"),"bg-success-hover":xn("success-20"),"bg-success-strong":xn("success-60"),"bg-success-strong-hover":xn("success-70"),"bg-warning":xn("warning-10"),"bg-warning-hover":xn("warning-20"),"bg-warning-strong":xn("warning-60"),"bg-warning-strong-hover":xn("warning-70"),"bg-info":xn("info-10"),"bg-info-hover":xn("info-20"),"bg-info-strong":xn("info-60"),"bg-info-strong-hover":xn("info-70"),"bg-error":xn("error-10"),"bg-error-hover":xn("error-20"),"bg-error-strong":xn("error-60"),"bg-error-strong-hover":xn("error-70"),"bg-inverse":xn("neutral-90"),"bg-inverse-subtle":xn("neutral-80"),"bg-inverse-subtler":xn("neutral-60"),"bg-inverse-subtlest":xn("neutral-50"),"bg-inverse-hover":xn("neutral-70"),"bg-primary":xn("primary-60"),"bg-primary-subtle":xn("primary-50"),"bg-primary-subtler":xn("primary-20"),"bg-primary-subtlest":xn("primary-10"),"bg-available":"#185339","bg-primary-hover":xn("primary-70"),"bg-primary-subtlest-hover":xn("primary-20"),"bg-primary-subtlest-selected":xn("primary-20"),"overlay-strong":"rgba(78, 78, 78, 0.80)","overlay-subtle":"rgba(78, 78, 78, 0.50)",hyperlink:xn("primary-60"),"hyperlink-hover":xn("primary-70"),"hyperlink-visited":xn("primary-70"),"hyperlink-inverse":xn("primary-inverse"),"focus-ring":xn("primary-60"),"focus-ring-inverse":xn("black")},$n={text:xn("neutral-30"),"text-subtle":xn("neutral-40"),"text-subtler":xn("neutral-50"),"text-subtlest":xn("neutral-70"),"text-primary":xn("neutral-10"),"text-primary-strongest":xn("neutral-10"),"text-hover":xn("neutral-70"),"text-selected":xn("neutral-20"),"text-selected-hover":xn("neutral-10"),"text-disabled":xn("neutral-50"),"text-disabled-subtle":xn("neutral-70"),"text-disabled-subtlest":xn("neutral-80"),"text-selected-disabled":xn("neutral-40"),"text-success":xn("success-40"),"text-warning":xn("warning-40"),"text-error":xn("brand-30"),"text-info":xn("neutral-40"),"text-inverse":xn("neutral-100"),icon:xn("neutral-40"),"icon-subtle":xn("neutral-50"),"icon-strongest":xn("neutral-10"),"icon-primary":xn("neutral-10"),"icon-primary-subtle":xn("neutral-30"),"icon-primary-subtlest":xn("neutral-60"),"icon-hover":xn("neutral-70"),"icon-selected":xn("brand-20"),"icon-selected-hover":xn("brand-10"),"icon-disabled":xn("neutral-50"),"icon-disabled-subtle":xn("neutral-70"),"icon-selected-disabled":xn("neutral-40"),"icon-success":xn("success-40"),"icon-warning":xn("warning-60"),"icon-error":xn("brand-30"),"icon-error-strong":xn("brand-10"),"icon-info":xn("neutral-40"),"icon-inverse":xn("neutral-100"),"icon-primary-inverse":"#F9B371",border:xn("neutral-90"),"border-strong":xn("neutral-30"),"border-stronger":xn("neutral-20"),"border-primary":xn("neutral-40"),"border-primary-subtle":xn("neutral-60"),"border-hover":xn("neutral-80"),"border-hover-strong":xn("neutral-10"),"border-selected":xn("brand-20"),"border-selected-subtle":xn("neutral-40"),"border-selected-subtlest":xn("neutral-70"),"border-selected-hover":xn("neutral-10"),"border-focus":xn("neutral-20"),"border-focus-strong":xn("neutral-10"),"border-disabled":xn("neutral-90"),"border-selected-disabled":xn("neutral-80"),"border-success":xn("success-40"),"border-warning":xn("warning-60"),"border-error":xn("brand-30"),"border-error-focus":xn("brand-20"),"border-error-focus-strong":xn("brand-10"),"border-error-strong":xn("brand-20"),"border-info":xn("neutral-40"),bg:xn("neutral-100"),"bg-strong":xn("neutral-95"),"bg-stronger":xn("neutral-90"),"bg-strongest":xn("neutral-80"),"bg-hover":xn("brand-90"),"bg-hover-strong":xn("brand-80"),"bg-hover-subtle":xn("neutral-90"),"bg-hover-neutral":xn("neutral-90"),"bg-hover-neutral-strong":xn("neutral-90"),"bg-selected":xn("brand-100"),"bg-selected-hover":xn("brand-30"),"bg-selected-strong":xn("brand-50"),"bg-selected-stronger":xn("brand-40"),"bg-selected-strongest":xn("brand-20"),"bg-selected-strongest-hover":xn("brand-10"),"bg-disabled":xn("neutral-90"),"bg-selected-disabled":xn("neutral-90"),"bg-selected-stronger-disabled":xn("neutral-80"),"bg-success":xn("success-100"),"bg-success-hover":xn("success-95"),"bg-success-strong":xn("success-50"),"bg-success-strong-hover":xn("success-40"),"bg-warning":xn("warning-100"),"bg-warning-hover":xn("warning-95"),"bg-warning-strong":xn("warning-50"),"bg-warning-strong-hover":xn("warning-40"),"bg-info":xn("neutral-95"),"bg-info-hover":xn("info-95"),"bg-info-strong":xn("info-50"),"bg-info-strong-hover":xn("info-40"),"bg-error":xn("brand-100"),"bg-error-hover":xn("error-95"),"bg-error-strong":xn("error-50"),"bg-error-strong-hover":xn("error-40"),"bg-inverse":xn("neutral-40"),"bg-inverse-subtle":xn("neutral-60"),"bg-inverse-subtler":xn("neutral-70"),"bg-inverse-subtlest":xn("neutral-80"),"bg-inverse-hover":xn("neutral-30"),"bg-primary":xn("brand-20"),"bg-primary-subtle":xn("brand-60"),"bg-primary-subtler":xn("brand-80"),"bg-primary-subtlest":xn("brand-100"),"bg-available":xn("success-60"),"bg-primary-hover":xn("brand-10"),"bg-primary-subtlest-hover":xn("brand-80"),"bg-primary-subtlest-selected":xn("brand-40"),"overlay-strong":"rgba(25, 25, 25, 0.95)","overlay-subtle":"rgba(25, 25, 25, 0.20)",hyperlink:xn("neutral-10"),"hyperlink-hover":xn("neutral-40"),"hyperlink-visited":xn("neutral-50"),"hyperlink-inverse":"#F8AE68","focus-ring":xn("primary-50"),"focus-ring-inverse":xn("white")},En={text:xn("neutral-20"),"text-subtle":xn("neutral-30"),"text-subtler":xn("neutral-50"),"text-subtlest":xn("neutral-60"),"text-primary":xn("primary-50"),"text-primary-strongest":xn("primary-20"),"text-hover":xn("primary-40"),"text-selected":xn("primary-50"),"text-selected-hover":xn("primary-40"),"text-disabled":xn("neutral-50"),"text-disabled-subtle":xn("neutral-60"),"text-disabled-subtlest":xn("neutral-80"),"text-selected-disabled":xn("neutral-20"),"text-success":xn("success-40"),"text-warning":xn("warning-40"),"text-error":xn("error-40"),"text-info":xn("info-40"),"text-inverse":xn("white"),icon:xn("neutral-50"),"icon-subtle":xn("neutral-60"),"icon-strongest":xn("neutral-20"),"icon-primary":xn("primary-50"),"icon-primary-subtle":xn("primary-60"),"icon-primary-subtlest":xn("primary-70"),"icon-hover":xn("primary-40"),"icon-selected":xn("primary-50"),"icon-selected-hover":xn("primary-40"),"icon-disabled":xn("neutral-50"),"icon-disabled-subtle":xn("neutral-60"),"icon-selected-disabled":xn("neutral-60"),"icon-success":xn("success-50"),"icon-warning":xn("warning-60"),"icon-error":xn("error-50"),"icon-error-strong":xn("error-40"),"icon-info":xn("info-50"),"icon-inverse":xn("white"),"icon-primary-inverse":xn("primary-inverse"),border:xn("neutral-90"),"border-strong":xn("neutral-70"),"border-stronger":xn("neutral-50"),"border-primary":xn("primary-50"),"border-primary-subtle":xn("primary-60"),"border-hover":xn("primary-90"),"border-hover-strong":xn("primary-60"),"border-selected":xn("primary-50"),"border-selected-subtle":xn("primary-70"),"border-selected-subtlest":xn("primary-90"),"border-selected-hover":xn("primary-40"),"border-focus":xn("primary-60"),"border-focus-strong":xn("primary-50"),"border-disabled":xn("neutral-90"),"border-selected-disabled":xn("neutral-70"),"border-success":xn("success-60"),"border-warning":xn("warning-60"),"border-error":xn("error-60"),"border-error-focus":xn("error-60"),"border-error-focus-strong":xn("error-40"),"border-error-strong":xn("error-40"),"border-info":xn("info-60"),bg:xn("white"),"bg-strong":xn("neutral-100"),"bg-stronger":xn("neutral-95"),"bg-strongest":xn("neutral-90"),"bg-hover":xn("primary-95"),"bg-hover-strong":xn("primary-90"),"bg-hover-subtle":xn("primary-100"),"bg-hover-neutral":xn("neutral-100"),"bg-hover-neutral-strong":xn("neutral-90"),"bg-selected":xn("primary-95"),"bg-selected-hover":xn("primary-90"),"bg-selected-strong":xn("primary-90"),"bg-selected-stronger":xn("primary-70"),"bg-selected-strongest":xn("primary-50"),"bg-selected-strongest-hover":xn("primary-40"),"bg-disabled":xn("neutral-95"),"bg-selected-disabled":xn("neutral-95"),"bg-selected-stronger-disabled":xn("neutral-70"),"bg-success":xn("success-100"),"bg-success-hover":xn("success-95"),"bg-success-strong":xn("success-50"),"bg-success-strong-hover":xn("success-40"),"bg-warning":xn("warning-100"),"bg-warning-hover":xn("warning-95"),"bg-warning-strong":xn("warning-50"),"bg-warning-strong-hover":xn("warning-40"),"bg-info":xn("info-100"),"bg-info-hover":xn("info-95"),"bg-info-strong":xn("info-50"),"bg-info-strong-hover":xn("info-40"),"bg-error":xn("error-100"),"bg-error-hover":xn("error-95"),"bg-error-strong":xn("error-50"),"bg-error-strong-hover":xn("error-40"),"bg-inverse":xn("neutral-20"),"bg-inverse-subtle":xn("neutral-30"),"bg-inverse-subtler":xn("neutral-50"),"bg-inverse-subtlest":xn("neutral-60"),"bg-inverse-hover":xn("neutral-40"),"bg-primary":xn("primary-50"),"bg-primary-subtle":xn("primary-60"),"bg-primary-subtler":xn("primary-95"),"bg-primary-subtlest":xn("primary-100"),"bg-available":"#6DD0A1","bg-primary-hover":xn("primary-40"),"bg-primary-subtlest-hover":xn("primary-90"),"bg-primary-subtlest-selected":xn("primary-90"),"overlay-strong":"rgba(40, 40, 40, 0.85)","overlay-subtle":"rgba(40, 40, 40, 0.20)",hyperlink:xn("primary-50"),"hyperlink-hover":xn("primary-40"),"hyperlink-visited":xn("primary-40"),"hyperlink-inverse":xn("primary-inverse"),"focus-ring":xn("primary-50"),"focus-ring-inverse":xn("white")},Cn={text:xn("neutral-100"),"text-subtle":xn("neutral-80"),"text-subtler":xn("neutral-60"),"text-subtlest":xn("neutral-50"),"text-primary":xn("primary-60"),"text-primary-strongest":xn("primary-90"),"text-hover":xn("primary-70"),"text-selected":xn("primary-60"),"text-selected-hover":xn("primary-70"),"text-disabled":xn("neutral-60"),"text-disabled-subtle":xn("neutral-50"),"text-disabled-subtlest":xn("neutral-30"),"text-selected-disabled":xn("neutral-90"),"text-success":xn("success-70"),"text-warning":xn("warning-70"),"text-error":xn("error-70"),"text-info":xn("info-70"),"text-inverse":xn("black"),icon:xn("neutral-60"),"icon-subtle":xn("neutral-50"),"icon-strongest":xn("neutral-90"),"icon-primary":xn("primary-60"),"icon-primary-subtle":xn("primary-50"),"icon-primary-subtlest":xn("primary-40"),"icon-hover":xn("primary-70"),"icon-selected":xn("primary-60"),"icon-selected-hover":xn("primary-70"),"icon-disabled":xn("neutral-60"),"icon-disabled-subtle":xn("neutral-50"),"icon-selected-disabled":xn("neutral-50"),"icon-success":xn("success-60"),"icon-warning":xn("warning-50"),"icon-error":xn("error-60"),"icon-error-strong":xn("error-70"),"icon-info":xn("info-60"),"icon-inverse":xn("black"),"icon-primary-inverse":xn("primary-inverse"),border:xn("neutral-20"),"border-strong":xn("neutral-40"),"border-stronger":xn("neutral-60"),"border-primary":xn("primary-60"),"border-primary-subtle":xn("primary-50"),"border-hover":xn("primary-20"),"border-hover-strong":xn("primary-50"),"border-selected":xn("primary-60"),"border-selected-subtle":xn("primary-40"),"border-selected-subtlest":xn("primary-20"),"border-selected-hover":xn("primary-70"),"border-focus":xn("primary-50"),"border-focus-strong":xn("primary-60"),"border-disabled":xn("neutral-20"),"border-selected-disabled":xn("neutral-40"),"border-success":xn("success-50"),"border-warning":xn("warning-50"),"border-error":xn("error-50"),"border-error-focus":xn("error-50"),"border-error-focus-strong":xn("error-70"),"border-error-strong":xn("error-70"),"border-info":xn("info-50"),bg:xn("black"),"bg-strong":xn("neutral-10"),"bg-stronger":xn("neutral-20"),"bg-strongest":xn("neutral-20"),"bg-hover":xn("primary-20"),"bg-hover-strong":xn("primary-20"),"bg-hover-subtle":xn("primary-10"),"bg-hover-neutral":xn("neutral-10"),"bg-hover-neutral-strong":xn("neutral-20"),"bg-selected":xn("primary-20"),"bg-selected-hover":xn("primary-20"),"bg-selected-strong":xn("primary-20"),"bg-selected-stronger":xn("primary-40"),"bg-selected-strongest":xn("primary-60"),"bg-selected-strongest-hover":xn("primary-70"),"bg-disabled":xn("neutral-20"),"bg-selected-disabled":xn("neutral-20"),"bg-selected-stronger-disabled":xn("neutral-40"),"bg-success":xn("success-10"),"bg-success-hover":xn("success-20"),"bg-success-strong":xn("success-60"),"bg-success-strong-hover":xn("success-70"),"bg-warning":xn("warning-10"),"bg-warning-hover":xn("warning-20"),"bg-warning-strong":xn("warning-60"),"bg-warning-strong-hover":xn("warning-70"),"bg-info":xn("info-10"),"bg-info-hover":xn("info-20"),"bg-info-strong":xn("info-60"),"bg-info-strong-hover":xn("info-70"),"bg-error":xn("error-10"),"bg-error-hover":xn("error-20"),"bg-error-strong":xn("error-60"),"bg-error-strong-hover":xn("error-70"),"bg-inverse":xn("neutral-90"),"bg-inverse-subtle":xn("neutral-80"),"bg-inverse-subtler":xn("neutral-60"),"bg-inverse-subtlest":xn("neutral-50"),"bg-inverse-hover":xn("neutral-70"),"bg-primary":xn("primary-60"),"bg-primary-subtle":xn("primary-50"),"bg-primary-subtler":xn("primary-20"),"bg-primary-subtlest":xn("primary-10"),"bg-available":"#185339","bg-primary-hover":xn("primary-70"),"bg-primary-subtlest-hover":xn("primary-20"),"bg-primary-subtlest-selected":xn("primary-20"),"overlay-strong":"rgba(78, 78, 78, 0.80)","overlay-subtle":"rgba(78, 78, 78, 0.50)",hyperlink:xn("primary-60"),"hyperlink-hover":xn("primary-70"),"hyperlink-visited":xn("primary-70"),"hyperlink-inverse":xn("primary-inverse"),"focus-ring":xn("primary-60"),"focus-ring-inverse":xn("black")},Dn={collections:{lifesg:Fn,bookingsg:Fn,rbs:Fn,mylegacy:Fn,ccube:Fn,oneservice:Fn,pa:$n,a11yplayground:En,supportgowhere:Fn,imda:Fn,spf:Fn},defaultValue:"lifesg"},Bn={collections:{lifesg:wn,bookingsg:wn,rbs:wn,mylegacy:wn,ccube:wn,oneservice:wn,pa:wn,a11yplayground:Cn,supportgowhere:wn,imda:wn,spf:wn},defaultValue:"lifesg"},An=e=>r=>{var n;const t=r.theme,i="dark"===(null==t?void 0:t.colourMode),o=en(i?Bn:Dn,null==t?void 0:t.colourScheme),a=i?"semanticColourDark":"semanticColour",s=null===(n=null==t?void 0:t.overrides)||void 0===n?void 0:n[a],l=s?Qr(o,e,s):o[e];return"function"==typeof l?l(r):l},Sn={text:An("text"),"text-subtle":An("text-subtle"),"text-subtler":An("text-subtler"),"text-subtlest":An("text-subtlest"),"text-primary":An("text-primary"),"text-primary-strongest":An("text-primary-strongest"),"text-hover":An("text-hover"),"text-selected":An("text-selected"),"text-selected-hover":An("text-selected-hover"),"text-disabled":An("text-disabled"),"text-disabled-subtle":An("text-disabled-subtle"),"text-disabled-subtlest":An("text-disabled-subtlest"),"text-selected-disabled":An("text-selected-disabled"),"text-success":An("text-success"),"text-warning":An("text-warning"),"text-error":An("text-error"),"text-info":An("text-info"),"text-inverse":An("text-inverse"),icon:An("icon"),"icon-subtle":An("icon-subtle"),"icon-strongest":An("icon-strongest"),"icon-primary":An("icon-primary"),"icon-primary-subtle":An("icon-primary-subtle"),"icon-primary-subtlest":An("icon-primary-subtlest"),"icon-hover":An("icon-hover"),"icon-selected":An("icon-selected"),"icon-selected-hover":An("icon-selected-hover"),"icon-disabled":An("icon-disabled"),"icon-disabled-subtle":An("icon-disabled-subtle"),"icon-selected-disabled":An("icon-selected-disabled"),"icon-success":An("icon-success"),"icon-warning":An("icon-warning"),"icon-error":An("icon-error"),"icon-error-strong":An("icon-error-strong"),"icon-info":An("icon-info"),"icon-inverse":An("icon-inverse"),"icon-primary-inverse":An("icon-primary-inverse"),border:An("border"),"border-strong":An("border-strong"),"border-stronger":An("border-stronger"),"border-primary":An("border-primary"),"border-primary-subtle":An("border-primary-subtle"),"border-hover":An("border-hover"),"border-hover-strong":An("border-hover-strong"),"border-selected":An("border-selected"),"border-selected-subtle":An("border-selected-subtle"),"border-selected-subtlest":An("border-selected-subtlest"),"border-selected-hover":An("border-selected-hover"),"border-focus":An("border-focus"),"border-focus-strong":An("border-focus-strong"),"border-disabled":An("border-disabled"),"border-selected-disabled":An("border-selected-disabled"),"border-success":An("border-success"),"border-warning":An("border-warning"),"border-error":An("border-error"),"border-error-focus":An("border-error-focus"),"border-error-focus-strong":An("border-error-focus-strong"),"border-error-strong":An("border-error-strong"),"border-info":An("border-info"),bg:An("bg"),"bg-strong":An("bg-strong"),"bg-stronger":An("bg-stronger"),"bg-strongest":An("bg-strongest"),"bg-hover":An("bg-hover"),"bg-hover-strong":An("bg-hover-strong"),"bg-hover-subtle":An("bg-hover-subtle"),"bg-hover-neutral":An("bg-hover-neutral"),"bg-hover-neutral-strong":An("bg-hover-neutral-strong"),"bg-selected":An("bg-selected"),"bg-selected-hover":An("bg-selected-hover"),"bg-selected-strong":An("bg-selected-strong"),"bg-selected-stronger":An("bg-selected-stronger"),"bg-selected-strongest":An("bg-selected-strongest"),"bg-selected-strongest-hover":An("bg-selected-strongest-hover"),"bg-disabled":An("bg-disabled"),"bg-selected-disabled":An("bg-selected-disabled"),"bg-selected-stronger-disabled":An("bg-selected-stronger-disabled"),"bg-success":An("bg-success"),"bg-success-hover":An("bg-success-hover"),"bg-success-strong":An("bg-success-strong"),"bg-success-strong-hover":An("bg-success-strong-hover"),"bg-warning":An("bg-warning"),"bg-warning-hover":An("bg-warning-hover"),"bg-warning-strong":An("bg-warning-strong"),"bg-warning-strong-hover":An("bg-warning-strong-hover"),"bg-info":An("bg-info"),"bg-info-hover":An("bg-info-hover"),"bg-info-strong":An("bg-info-strong"),"bg-info-strong-hover":An("bg-info-strong-hover"),"bg-error":An("bg-error"),"bg-error-hover":An("bg-error-hover"),"bg-error-strong":An("bg-error-strong"),"bg-error-strong-hover":An("bg-error-strong-hover"),"bg-inverse":An("bg-inverse"),"bg-inverse-subtle":An("bg-inverse-subtle"),"bg-inverse-subtler":An("bg-inverse-subtler"),"bg-inverse-subtlest":An("bg-inverse-subtlest"),"bg-inverse-hover":An("bg-inverse-hover"),"bg-primary":An("bg-primary"),"bg-primary-subtle":An("bg-primary-subtle"),"bg-primary-subtler":An("bg-primary-subtler"),"bg-primary-subtlest":An("bg-primary-subtlest"),"bg-available":An("bg-available"),"bg-primary-hover":An("bg-primary-hover"),"bg-primary-subtlest-hover":An("bg-primary-subtlest-hover"),"bg-primary-subtlest-selected":An("bg-primary-subtlest-selected"),"overlay-strong":An("overlay-strong"),"overlay-subtle":An("overlay-subtle"),hyperlink:An("hyperlink"),"hyperlink-hover":An("hyperlink-hover"),"hyperlink-visited":An("hyperlink-visited"),"hyperlink-inverse":An("hyperlink-inverse"),"focus-ring":An("focus-ring"),"focus-ring-inverse":An("focus-ring-inverse")},kn={collections:{default:{solid:e=>r=>{var n,t,i;const{thickness:o,radius:a,colour:s}=e||{},l=null!==(n="function"==typeof o?o(r):o+"px")&&void 0!==n?n:tn["width-010"](r),d=null!==(t="function"==typeof a?a(r):a+"px")&&void 0!==t?t:0,c=null!==(i="function"==typeof s?s(r):s)&&void 0!==i?i:Sn.border(r),u=tn.solid;return b`
            border: ${l} ${u} ${c};
            border-radius: ${d};
        `},"dashed-default":e=>r=>{var n,t,i;const{thickness:o,radius:a,colour:s}=e||{},l=null!==(n="function"==typeof o?o(r):o)&&void 0!==n?n:tn["width-010"](r),d=null!==(t="function"==typeof a?a(r):a)&&void 0!==t?t:0,c=null!==(i="function"==typeof s?s(r):s)&&void 0!==i?i:Sn.border(r),u=encodeURIComponent(`<svg width='100%' height='100%' xmlns='http://www.w3.org/2000/svg'><rect width='100%' height='100%' fill='none' rx='${d}' ry='${d}' stroke='${c}' stroke-width='${l}' stroke-dasharray='4, 8' stroke-dashoffset='0' stroke-linecap='square'/></svg>`);return b`
            background-image: url("data:image/svg+xml,${u}");
            border-radius: ${d};
        `}}},defaultValue:"default"},zn=e=>1===e.length&&"theme"in e[0],On=e=>(...r)=>n=>{const t=zn(r)?[]:r,i=zn(r)?r[0]:n,o=i.theme;return(0,en(kn,null==o?void 0:o.borderScheme)[e])(...t)(i)},Mn={solid:On("solid"),"dashed-default":On("dashed-default")},_n={collections:{default:{"xxs-min":0,"xxs-max":320,"xs-min":321,"xs-max":375,"sm-min":376,"sm-max":480,"md-min":481,"md-max":768,"lg-min":769,"lg-max":1200,"xl-min":1201,"xl-max":1440,"xxl-min":1441,"xxs-column":8,"xs-column":8,"sm-column":8,"md-column":8,"lg-column":12,"xl-column":12,"xxl-column":12,"xxs-gutter":16,"xs-gutter":16,"sm-gutter":16,"md-gutter":16,"lg-gutter":32,"xl-gutter":32,"xxl-gutter":32,"xxs-margin":24,"xs-margin":24,"sm-margin":24,"md-margin":24,"lg-margin":48,"xl-margin":48,"xxl-margin":48}},defaultValue:"default"},Tn=e=>r=>{var n;const t=r.theme,i=en(_n,null==t?void 0:t.breakpointScheme);let o;return o=(null===(n=null==t?void 0:t.overrides)||void 0===n?void 0:n.breakpoint)?Qr(i,e,t.overrides.breakpoint):i[e],o},Ln={"xxs-min":Tn("xxs-min"),"xxs-max":Tn("xxs-max"),"xs-min":Tn("xs-min"),"xs-max":Tn("xs-max"),"sm-min":Tn("sm-min"),"sm-max":Tn("sm-max"),"md-min":Tn("md-min"),"md-max":Tn("md-max"),"lg-min":Tn("lg-min"),"lg-max":Tn("lg-max"),"xl-min":Tn("xl-min"),"xl-max":Tn("xl-max"),"xxl-min":Tn("xxl-min"),"xxs-column":Tn("xxs-column"),"xs-column":Tn("xs-column"),"sm-column":Tn("sm-column"),"md-column":Tn("md-column"),"lg-column":Tn("lg-column"),"xl-column":Tn("xl-column"),"xxl-column":Tn("xxl-column"),"xxs-gutter":Tn("xxs-gutter"),"xs-gutter":Tn("xs-gutter"),"sm-gutter":Tn("sm-gutter"),"md-gutter":Tn("md-gutter"),"lg-gutter":Tn("lg-gutter"),"xl-gutter":Tn("xl-gutter"),"xxl-gutter":Tn("xxl-gutter"),"xxs-margin":Tn("xxs-margin"),"xs-margin":Tn("xs-margin"),"sm-margin":Tn("sm-margin"),"md-margin":Tn("md-margin"),"lg-margin":Tn("lg-margin"),"xl-margin":Tn("xl-margin"),"xxl-margin":Tn("xxl-margin")},jn=e=>("max-width"===e?["xxs","xs","sm","md","lg","xl"]:["xxs","xs","sm","md","lg","xl","xxl"]).reduce(((r,n)=>(r[n]=((e,r)=>{const n=Ln["max-width"===e?`${r}-max`:`${r}-min`];return r=>{const t=n(r);return`@media screen and (${e}: ${t}px)`}})(e,n),r)),{}),Yn={MaxWidth:jn("max-width"),MinWidth:jn("min-width")},In={collections:{default:{none:0,xs:2,sm:4,md:8,lg:12,full:9999},spf:{none:0,xs:2,sm:8,md:8,lg:12,full:9999}},defaultValue:"default"},Wn=e=>r=>{var n;const t=r.theme,i=en(In,null==t?void 0:t.radiusScheme);return(null===(n=null==t?void 0:t.overrides)||void 0===n?void 0:n.radius)?`${Qr(i,e,t.overrides.radius)}px`:`${i[e]}px`},Hn={none:Wn("none"),xs:Wn("xs"),sm:Wn("sm"),md:Wn("md"),lg:Wn("lg"),full:Wn("full")},Rn={Button:{"button-radius":Hn.md,"button-default-colour-bg":Sn["bg-primary"],"button-default-colour-bg-hover":Sn["bg-primary-hover"],"button-default-colour-text":Sn["text-inverse"],"button-secondary-colour-border":Sn["border-primary"],"button-secondary-colour-text":Sn["text-primary"],"button-light-colour-text":Sn["text-primary"],"button-link-colour-text":Sn["text-primary"]},Animation:{"loading-dots-spinner-colour":Sn["icon-primary"]},Navbar:{"navbar-full-height":"6rem","navbar-full-logo-height":"2rem","navbar-compressed-height":"4rem","navbar-compressed-logo-height":"1.5rem","navbar-mobile-height":"3.5rem","navbar-mobile-logo-height":"1.5rem","navbar-colour-bg":Sn.bg,"navbar-colour-icon":Sn.icon,"navbar-link-colour-text":Sn.text,"navbar-link-colour-text-hover":Sn["text-hover"],"navbar-link-colour-text-selected-hover":Sn["text-selected-hover"]},Footer:{"footer-colour-bg":Sn["bg-strong"],"footer-colour-text":Sn.text,"footer-link-colour-text":Sn.text,"footer-link-colour-text-hover":Sn["text-hover"],"footer-disclaimer-link-colour-text":Sn.text,"footer-disclaimer-link-colour-text-hover":Sn["text-subtler"]}},Pn={Button:{"button-radius":Hn.sm,"button-default-colour-bg":Sn["bg-primary"],"button-default-colour-bg-hover":Sn["bg-primary-hover"],"button-default-colour-text":Sn["text-inverse"],"button-secondary-colour-border":Sn["border-primary"],"button-secondary-colour-text":Sn["text-primary"],"button-light-colour-text":Sn["text-primary"],"button-link-colour-text":Sn["text-primary"]},Animation:{"loading-dots-spinner-colour":Sn["icon-primary"]},Navbar:{"navbar-full-height":"6rem","navbar-full-logo-height":"2rem","navbar-compressed-height":"4rem","navbar-compressed-logo-height":"1.5rem","navbar-mobile-height":"3.5rem","navbar-mobile-logo-height":"1.5rem","navbar-colour-bg":Sn.bg,"navbar-colour-icon":Sn.icon,"navbar-link-colour-text":Sn.text,"navbar-link-colour-text-hover":Sn["text-hover"],"navbar-link-colour-text-selected-hover":Sn["text-selected-hover"]},Footer:{"footer-colour-bg":Sn["bg-strong"],"footer-colour-text":Sn.text,"footer-link-colour-text":Sn.text,"footer-link-colour-text-hover":Sn["text-hover"],"footer-disclaimer-link-colour-text":Sn.text,"footer-disclaimer-link-colour-text-hover":Sn["text-subtler"]}},Nn={Button:{"button-radius":Hn.sm,"button-default-colour-bg":Sn["bg-primary"],"button-default-colour-bg-hover":Sn["bg-primary-hover"],"button-default-colour-text":Sn["text-inverse"],"button-secondary-colour-border":Sn["border-primary"],"button-secondary-colour-text":Sn["text-primary"],"button-light-colour-text":Sn["text-primary"],"button-link-colour-text":Sn["text-primary"]},Animation:{"loading-dots-spinner-colour":vn["brand-50"]},Navbar:{"navbar-full-height":"6rem","navbar-full-logo-height":"2rem","navbar-compressed-height":"4rem","navbar-compressed-logo-height":"1.5rem","navbar-mobile-height":"3.5rem","navbar-mobile-logo-height":"1.5rem","navbar-colour-bg":Sn.bg,"navbar-colour-icon":Sn.icon,"navbar-link-colour-text":Sn.text,"navbar-link-colour-text-hover":Sn["text-hover"],"navbar-link-colour-text-selected-hover":Sn["text-selected-hover"]},Footer:{"footer-colour-bg":Sn["bg-strong"],"footer-colour-text":Sn.text,"footer-link-colour-text":Sn.text,"footer-link-colour-text-hover":Sn["text-hover"],"footer-disclaimer-link-colour-text":Sn.text,"footer-disclaimer-link-colour-text-hover":Sn["text-subtler"]}},Vn={collections:{default:Pn,pa:{Button:{"button-radius":Hn.full,"button-default-colour-bg":Sn["bg-primary"],"button-default-colour-bg-hover":Sn["bg-primary-hover"],"button-default-colour-text":Sn["text-inverse"],"button-secondary-colour-border":Sn["border-primary"],"button-secondary-colour-text":Sn["text-primary"],"button-light-colour-text":Sn["text-primary"],"button-link-colour-text":Sn["text-primary"]},Animation:{"loading-dots-spinner-colour":Sn["icon-primary"]},Navbar:{"navbar-full-height":"6rem","navbar-full-logo-height":"2rem","navbar-compressed-height":"4rem","navbar-compressed-logo-height":"1.5rem","navbar-mobile-height":"3.5rem","navbar-mobile-logo-height":"1.5rem","navbar-colour-bg":Sn.bg,"navbar-colour-icon":Sn.icon,"navbar-link-colour-text":Sn.text,"navbar-link-colour-text-hover":Sn["text-hover"],"navbar-link-colour-text-selected-hover":Sn["text-selected-hover"]},Footer:{"footer-colour-bg":Sn["bg-strong"],"footer-colour-text":Sn.text,"footer-link-colour-text":Sn.text,"footer-link-colour-text-hover":Sn["text-hover"],"footer-disclaimer-link-colour-text":Sn.text,"footer-disclaimer-link-colour-text-hover":Sn["text-subtler"]}},a11yplayground:Rn,lifesg:Nn,spf:{Button:{"button-radius":Hn.md,"button-default-colour-bg":Sn["bg-primary"],"button-default-colour-bg-hover":Sn["bg-primary-hover"],"button-default-colour-text":Sn["text-inverse"],"button-secondary-colour-border":Sn["border-primary"],"button-secondary-colour-text":Sn["text-primary"],"button-light-colour-text":Sn["text-primary"],"button-link-colour-text":Sn["text-primary"]},Animation:{"loading-dots-spinner-colour":Sn["icon-primary"]},Navbar:{"navbar-full-height":"6rem","navbar-full-logo-height":"3rem","navbar-compressed-height":"5rem","navbar-compressed-logo-height":"2rem","navbar-mobile-height":"4rem","navbar-mobile-logo-height":"2rem","navbar-colour-bg":Sn.bg,"navbar-colour-icon":Sn.icon,"navbar-link-colour-text":Sn["text-primary-strongest"],"navbar-link-colour-text-hover":Sn["text-subtler"],"navbar-link-colour-text-selected-hover":Sn["text-subtler"]},Footer:{"footer-colour-bg":Sn["bg-inverse"],"footer-colour-text":Sn["text-inverse"],"footer-link-colour-text":Sn["text-inverse"],"footer-link-colour-text-hover":Sn["text-inverse"],"footer-disclaimer-link-colour-text":Sn["text-inverse"],"footer-disclaimer-link-colour-text-hover":Sn["text-inverse"]}}},defaultValue:"default"},Zn=(e,r)=>n=>{var t,i;const o=n.theme,a=en(Vn,null==o?void 0:o.componentScheme);return Xn((null===(i=null===(t=null==o?void 0:o.componentOverrides)||void 0===t?void 0:t[e])||void 0===i?void 0:i[r])||a[e][r],n)},Xn=(e,r)=>{switch(typeof e){case"function":return e(r);case"number":return e+"px";case"string":return e}},Un=Zn("Button","button-radius"),Jn=Zn("Button","button-default-colour-bg"),qn=Zn("Button","button-default-colour-bg-hover"),Gn=Zn("Button","button-default-colour-text"),Kn=Zn("Button","button-secondary-colour-border"),Qn=Zn("Button","button-secondary-colour-text"),et=Zn("Button","button-light-colour-text"),rt=Zn("Button","button-link-colour-text"),nt={collections:{default:{"heading-size-xxl":"3rem","heading-size-xl":"2.5rem","heading-size-lg":"2rem","heading-size-md":"1.625rem","heading-size-sm":"1.375rem","heading-size-xs":"1.125rem","heading-lh-xxl":"3.5rem","heading-lh-xl":"3rem","heading-lh-lg":"2.5rem","heading-lh-md":"2.25rem","heading-lh-sm":"1.75rem","heading-lh-xs":"1.625rem","heading-ls-xxl":"-0.035rem","heading-ls-xl":"-0.02rem","heading-ls-lg":"-0.02rem","heading-ls-md":"0rem","heading-ls-sm":"0rem","heading-ls-xs":"0rem","weight-light":"300","weight-regular":"400","weight-semibold":"600","weight-bold":"700","font-family":"Open Sans","body-size-baseline":"1.125rem","body-size-md":"1rem","body-size-sm":"0.875rem","body-size-xs":"0.75rem","body-lh-baseline":"1.625rem","body-lh-md":"1.5rem","body-lh-sm":"1.625rem","body-lh-xs":"1.25rem","body-ls-baseline":"0rem","body-ls-md":"0.009rem","body-ls-sm":"0.008rem","body-ls-xs":"0.008rem","form-label-size":"1rem","form-description-size":"0.875rem","form-label-lh":"1.5rem","form-description-lh":"1.625rem","form-label-ls":"0.009rem","form-description-ls":"0.008rem"},bookingsg:{"heading-size-xxl":"3rem","heading-size-xl":"2.5rem","heading-size-lg":"2rem","heading-size-md":"1.625rem","heading-size-sm":"1.375rem","heading-size-xs":"1.125rem","heading-lh-xxl":"3.5rem","heading-lh-xl":"3rem","heading-lh-lg":"2.5rem","heading-lh-md":"2.25rem","heading-lh-sm":"1.75rem","heading-lh-xs":"1.75rem","heading-ls-xxl":"-0.035rem","heading-ls-xl":"-0.02rem","heading-ls-lg":"-0.02rem","heading-ls-md":"0rem","heading-ls-sm":"0rem","heading-ls-xs":"0rem","weight-light":"300","weight-regular":"400","weight-semibold":"600","weight-bold":"700","font-family":"Plus Jakarta Sans","body-size-baseline":"1.125rem","body-size-md":"1rem","body-size-sm":"0.875rem","body-size-xs":"0.75rem","body-lh-baseline":"1.75rem","body-lh-md":"1.5rem","body-lh-sm":"1.6rem","body-lh-xs":"1.2rem","body-ls-baseline":"0rem","body-ls-md":"0.009rem","body-ls-sm":"0.008rem","body-ls-xs":"0.008rem","form-label-size":"1rem","form-description-size":"0.875rem","form-label-lh":"1.5rem","form-description-lh":"1.625rem","form-label-ls":"0.009rem","form-description-ls":"0.008rem"},mylegacy:{"heading-size-xxl":"3rem","heading-size-xl":"2.5rem","heading-size-lg":"2rem","heading-size-md":"1.625rem","heading-size-sm":"1.375rem","heading-size-xs":"1.125rem","heading-lh-xxl":"3.5rem","heading-lh-xl":"3rem","heading-lh-lg":"2.5rem","heading-lh-md":"2.25rem","heading-lh-sm":"1.75rem","heading-lh-xs":"1.625rem","heading-ls-xxl":"-0.035rem","heading-ls-xl":"-0.02rem","heading-ls-lg":"-0.02rem","heading-ls-md":"0rem","heading-ls-sm":"0rem","heading-ls-xs":"0rem","weight-light":"300","weight-regular":"400","weight-semibold":"600","weight-bold":"700","font-family":"Open Sans","body-size-baseline":"1.125rem","body-size-md":"1rem","body-size-sm":"0.875rem","body-size-xs":"0.75rem","body-lh-baseline":"1.625rem","body-lh-md":"1.5rem","body-lh-sm":"1.625rem","body-lh-xs":"1.25rem","body-ls-baseline":"0rem","body-ls-md":"0.009rem","body-ls-sm":"0.008rem","body-ls-xs":"0.008rem","form-label-size":"1.125rem","form-description-size":"1rem","form-label-lh":"1.5rem","form-description-lh":"1.625rem","form-label-ls":"0rem","form-description-ls":"0.009rem"},pa:{"heading-size-xxl":"2.5rem","heading-size-xl":"2rem","heading-size-lg":"1.75rem","heading-size-md":"1.5rem","heading-size-sm":"1.25rem","heading-size-xs":"1rem","heading-lh-xxl":"3rem","heading-lh-xl":"2.5rem","heading-lh-lg":"2.25rem","heading-lh-md":"2rem","heading-lh-sm":"2rem","heading-lh-xs":"1.75rem","heading-ls-xxl":"-0.032rem","heading-ls-xl":"-0.032rem","heading-ls-lg":"0rem","heading-ls-md":"0rem","heading-ls-sm":"0rem","heading-ls-xs":"0rem","weight-light":"300","weight-regular":"400","weight-semibold":"600","weight-bold":"700","font-family":"Lato","body-size-baseline":"1rem","body-size-md":"0.875rem","body-size-sm":"0.75rem","body-size-xs":"0.625rem","body-lh-baseline":"1.75rem","body-lh-md":"1.5rem","body-lh-sm":"1.25rem","body-lh-xs":"1.25rem","body-ls-baseline":"0rem","body-ls-md":"0.014rem","body-ls-sm":"0.012rem","body-ls-xs":"0.012rem","form-label-size":"1rem","form-description-size":"0.875rem","form-label-lh":"1.5rem","form-description-lh":"1.6rem","form-label-ls":"0.014rem","form-description-ls":"0.012rem"},a11yplayground:{"heading-size-xxl":"3rem","heading-size-xl":"2.5rem","heading-size-lg":"2rem","heading-size-md":"1.625rem","heading-size-sm":"1.375rem","heading-size-xs":"1.125rem","heading-lh-xxl":"3.5rem","heading-lh-xl":"3rem","heading-lh-lg":"2.5rem","heading-lh-md":"2.25rem","heading-lh-sm":"1.75rem","heading-lh-xs":"1.625rem","heading-ls-xxl":"-0.035rem","heading-ls-xl":"-0.02rem","heading-ls-lg":"-0.02rem","heading-ls-md":"0rem","heading-ls-sm":"0rem","heading-ls-xs":"0rem","weight-light":"300","weight-regular":"400","weight-semibold":"600","weight-bold":"700","font-family":"Atkinson Hyperlegible Next","body-size-baseline":"1.125rem","body-size-md":"1rem","body-size-sm":"0.875rem","body-size-xs":"0.75rem","body-lh-baseline":"1.625rem","body-lh-md":"1.5rem","body-lh-sm":"1.625rem","body-lh-xs":"1.25rem","body-ls-baseline":"0rem","body-ls-md":"0.009rem","body-ls-sm":"0.008rem","body-ls-xs":"0.008rem","form-label-size":"1.125rem","form-description-size":"1rem","form-label-lh":"1.5rem","form-description-lh":"1.625rem","form-label-ls":"0rem","form-description-ls":"0.009rem"},supportgowhere:{"heading-size-xxl":"3rem","heading-size-xl":"2.5rem","heading-size-lg":"2rem","heading-size-md":"1.625rem","heading-size-sm":"1.375rem","heading-size-xs":"1.125rem","heading-lh-xxl":"3.5rem","heading-lh-xl":"3rem","heading-lh-lg":"2.5rem","heading-lh-md":"2.25rem","heading-lh-sm":"1.75rem","heading-lh-xs":"1.625rem","heading-ls-xxl":"-0.035rem","heading-ls-xl":"-0.02rem","heading-ls-lg":"-0.02rem","heading-ls-md":"0rem","heading-ls-sm":"0rem","heading-ls-xs":"0rem","weight-light":"300","weight-regular":"400","weight-semibold":"600","weight-bold":"700","font-family":"Libre Franklin","body-size-baseline":"1.125rem","body-size-md":"1rem","body-size-sm":"0.875rem","body-size-xs":"0.75rem","body-lh-baseline":"1.625rem","body-lh-md":"1.5rem","body-lh-sm":"1.625rem","body-lh-xs":"1.25rem","body-ls-baseline":"0rem","body-ls-md":"0.009rem","body-ls-sm":"0.008rem","body-ls-xs":"0.008rem","form-label-size":"1rem","form-description-size":"0.875rem","form-label-lh":"1.5rem","form-description-lh":"1.625rem","form-label-ls":"0.009rem","form-description-ls":"0.008rem"},sgwdigitallobby:{"heading-size-xxl":"3.75rem","heading-size-xl":"3rem","heading-size-lg":"2.5rem","heading-size-md":"2rem","heading-size-sm":"1.625rem","heading-size-xs":"1.375rem","heading-lh-xxl":"4.5rem","heading-lh-xl":"3.5rem","heading-lh-lg":"3rem","heading-lh-md":"2.5rem","heading-lh-sm":"2.25rem","heading-lh-xs":"1.75rem","heading-ls-xxl":"-0.035rem","heading-ls-xl":"-0.035em","heading-ls-lg":"-0.02rem","heading-ls-md":"-0.02rem","heading-ls-sm":"0rem","heading-ls-xs":"0rem","weight-light":"300","weight-regular":"400","weight-semibold":"600","weight-bold":"700","font-family":"Libre Franklin","body-size-baseline":"1.375rem","body-size-md":"1.2rem","body-size-sm":"1.125rem","body-size-xs":"1rem","body-lh-baseline":"1.75rem","body-lh-md":"1.625rem","body-lh-sm":"1.625rem","body-lh-xs":"1.5rem","body-ls-baseline":"0rem","body-ls-md":"0rem","body-ls-sm":"0rem","body-ls-xs":"0.009rem","form-label-size":"1.25rem","form-description-size":"1.125rem","form-label-lh":"1.625rem","form-description-lh":"1.625rem","form-label-ls":"0rem","form-description-ls":"0rem"},imda:{"heading-size-xxl":"3rem","heading-size-xl":"2.5rem","heading-size-lg":"2rem","heading-size-md":"1.625rem","heading-size-sm":"1.375rem","heading-size-xs":"1.125rem","heading-lh-xxl":"3.5rem","heading-lh-xl":"3rem","heading-lh-lg":"2.5rem","heading-lh-md":"2.25rem","heading-lh-sm":"1.75rem","heading-lh-xs":"1.625rem","heading-ls-xxl":"-0.035rem","heading-ls-xl":"-0.02rem","heading-ls-lg":"-0.02rem","heading-ls-md":"0rem","heading-ls-sm":"0rem","heading-ls-xs":"0rem","weight-light":"300","weight-regular":"400","weight-semibold":"600","weight-bold":"700","font-family":"Montserrat","body-size-baseline":"1.125rem","body-size-md":"1rem","body-size-sm":"0.875rem","body-size-xs":"0.75rem","body-lh-baseline":"1.625rem","body-lh-md":"1.5rem","body-lh-sm":"1.625rem","body-lh-xs":"1.25rem","body-ls-baseline":"0rem","body-ls-md":"0.009rem","body-ls-sm":"0.008rem","body-ls-xs":"0.008rem","form-label-size":"1rem","form-description-size":"0.875rem","form-label-lh":"1.5rem","form-description-lh":"1.625rem","form-label-ls":"0.009rem","form-description-ls":"0.008rem"},spf:{"heading-size-xxl":"3.75rem","heading-size-xl":"3rem","heading-size-lg":"2.5rem","heading-size-md":"2rem","heading-size-sm":"1.75rem","heading-size-xs":"1.5rem","heading-lh-xxl":"4.5rem","heading-lh-xl":"3.5rem","heading-lh-lg":"3rem","heading-lh-md":"2.25rem","heading-lh-sm":"2rem","heading-lh-xs":"1.75rem","heading-ls-xxl":"-0.035rem","heading-ls-xl":"-0.02rem","heading-ls-lg":"-0.02rem","heading-ls-md":"0rem","heading-ls-sm":"0rem","heading-ls-xs":"0rem","weight-light":"300","weight-regular":"400","weight-semibold":"600","weight-bold":"700","font-family":"Public Sans","body-size-baseline":"1.2rem","body-size-md":"1.125rem","body-size-sm":"1rem","body-size-xs":"0.875rem","body-lh-baseline":"1.5rem","body-lh-md":"1.5rem","body-lh-sm":"1.5rem","body-lh-xs":"1.125rem","body-ls-baseline":"0rem","body-ls-md":"0.009rem","body-ls-sm":"0.008rem","body-ls-xs":"0.008rem","form-label-size":"1.125rem","form-description-size":"1rem","form-label-lh":"1.5rem","form-description-lh":"1.625rem","form-label-ls":"0.009rem","form-description-ls":"0.008rem"},oneservice:{"heading-size-xxl":"2.5rem","heading-size-xl":"2rem","heading-size-lg":"1.75rem","heading-size-md":"1.375rem","heading-size-sm":"1.125rem","heading-size-xs":"1rem","heading-lh-xxl":"3.5rem","heading-lh-xl":"3rem","heading-lh-lg":"2.625rem","heading-lh-md":"2rem","heading-lh-sm":"1.625rem","heading-lh-xs":"1.5rem","heading-ls-xxl":"0rem","heading-ls-xl":"0rem","heading-ls-lg":"0rem","heading-ls-md":"0rem","heading-ls-sm":"0rem","heading-ls-xs":"0rem","weight-light":"300","weight-regular":"400","weight-semibold":"600","weight-bold":"700","font-family":"Open Sans","body-size-baseline":"1rem","body-size-md":"0.875rem","body-size-sm":"0.75rem","body-size-xs":"0.75rem","body-lh-baseline":"1.5rem","body-lh-md":"1.313rem","body-lh-sm":"1.125rem","body-lh-xs":"1.125rem","body-ls-baseline":"0rem","body-ls-md":"0rem","body-ls-sm":"0rem","body-ls-xs":"0rem","form-label-size":"0.875rem","form-description-size":"0.875rem","form-label-lh":"1.313rem","form-description-lh":"1.313rem","form-label-ls":"0rem","form-description-ls":"0rem"}},defaultValue:"default"},tt=e=>r=>{var n;const t=r.theme,i=en(nt,null==t?void 0:t.fontScheme);return(null===(n=null==t?void 0:t.overrides)||void 0===n?void 0:n.fontSpec)?Qr(i,e,t.overrides.fontSpec):i[e]},it={"heading-size-xxl":tt("heading-size-xxl"),"heading-size-xl":tt("heading-size-xl"),"heading-size-lg":tt("heading-size-lg"),"heading-size-md":tt("heading-size-md"),"heading-size-sm":tt("heading-size-sm"),"heading-size-xs":tt("heading-size-xs"),"heading-lh-xxl":tt("heading-lh-xxl"),"heading-lh-xl":tt("heading-lh-xl"),"heading-lh-lg":tt("heading-lh-lg"),"heading-lh-md":tt("heading-lh-md"),"heading-lh-sm":tt("heading-lh-sm"),"heading-lh-xs":tt("heading-lh-xs"),"heading-ls-xxl":tt("heading-ls-xxl"),"heading-ls-xl":tt("heading-ls-xl"),"heading-ls-lg":tt("heading-ls-lg"),"heading-ls-md":tt("heading-ls-md"),"heading-ls-sm":tt("heading-ls-sm"),"heading-ls-xs":tt("heading-ls-xs"),"weight-light":tt("weight-light"),"weight-regular":tt("weight-regular"),"weight-semibold":tt("weight-semibold"),"weight-bold":tt("weight-bold"),"font-family":tt("font-family"),"body-size-baseline":tt("body-size-baseline"),"body-size-md":tt("body-size-md"),"body-size-sm":tt("body-size-sm"),"body-size-xs":tt("body-size-xs"),"body-lh-baseline":tt("body-lh-baseline"),"body-lh-md":tt("body-lh-md"),"body-lh-sm":tt("body-lh-sm"),"body-lh-xs":tt("body-lh-xs"),"body-ls-baseline":tt("body-ls-baseline"),"body-ls-md":tt("body-ls-md"),"body-ls-sm":tt("body-ls-sm"),"body-ls-xs":tt("body-ls-xs"),"form-label-size":tt("form-label-size"),"form-description-size":tt("form-description-size"),"form-label-lh":tt("form-label-lh"),"form-description-lh":tt("form-description-lh"),"form-label-ls":tt("form-label-ls"),"form-description-ls":tt("form-description-ls")},ot=(e,r,n,t,i)=>{const{disableLigatures:o}=i||{};return b`
        font-family: ${tt("font-family")};
        font-size: ${tt(e)};
        font-weight: ${tt(r)};
        line-height: ${tt(n)};
        letter-spacing: ${tt(t)};

        font-variant: ${o?"no-common-ligatures":"normal"};
    `},at=(e={})=>({"heading-xxl-light":ot("heading-size-xxl","weight-light","heading-lh-xxl","heading-ls-xxl",e),"heading-xxl-regular":ot("heading-size-xxl","weight-regular","heading-lh-xxl","heading-ls-xxl",e),"heading-xxl-semibold":ot("heading-size-xxl","weight-semibold","heading-lh-xxl","heading-ls-xxl",e),"heading-xxl-bold":ot("heading-size-xxl","weight-bold","heading-lh-xxl","heading-ls-xxl",e),"heading-xl-light":ot("heading-size-xl","weight-light","heading-lh-xl","heading-ls-xl",e),"heading-xl-regular":ot("heading-size-xl","weight-regular","heading-lh-xl","heading-ls-xl",e),"heading-xl-semibold":ot("heading-size-xl","weight-semibold","heading-lh-xl","heading-ls-xl",e),"heading-xl-bold":ot("heading-size-xl","weight-bold","heading-lh-xl","heading-ls-xl",e),"heading-lg-light":ot("heading-size-lg","weight-light","heading-lh-lg","heading-ls-lg",e),"heading-lg-regular":ot("heading-size-lg","weight-regular","heading-lh-lg","heading-ls-lg",e),"heading-lg-semibold":ot("heading-size-lg","weight-semibold","heading-lh-lg","heading-ls-lg",e),"heading-lg-bold":ot("heading-size-lg","weight-bold","heading-lh-lg","heading-ls-lg",e),"heading-md-light":ot("heading-size-md","weight-light","heading-lh-md","heading-ls-md",e),"heading-md-regular":ot("heading-size-md","weight-regular","heading-lh-md","heading-ls-md",e),"heading-md-semibold":ot("heading-size-md","weight-semibold","heading-lh-md","heading-ls-md",e),"heading-md-bold":ot("heading-size-md","weight-bold","heading-lh-md","heading-ls-md",e),"heading-sm-light":ot("heading-size-sm","weight-light","heading-lh-sm","heading-ls-sm",e),"heading-sm-regular":ot("heading-size-sm","weight-regular","heading-lh-sm","heading-ls-sm",e),"heading-sm-semibold":ot("heading-size-sm","weight-semibold","heading-lh-sm","heading-ls-sm",e),"heading-sm-bold":ot("heading-size-sm","weight-bold","heading-lh-sm","heading-ls-sm",e),"heading-xs-light":ot("heading-size-xs","weight-light","heading-lh-xs","heading-ls-xs",e),"heading-xs-regular":ot("heading-size-xs","weight-regular","heading-lh-xs","heading-ls-xs",e),"heading-xs-semibold":ot("heading-size-xs","weight-semibold","heading-lh-xs","heading-ls-xs",e),"heading-xs-bold":ot("heading-size-xs","weight-bold","heading-lh-xs","heading-ls-xs",e),"body-baseline-light":ot("body-size-baseline","weight-light","body-lh-baseline","body-ls-baseline",e),"body-baseline-regular":ot("body-size-baseline","weight-regular","body-lh-baseline","body-ls-baseline",e),"body-baseline-semibold":ot("body-size-baseline","weight-semibold","body-lh-baseline","body-ls-baseline",e),"body-baseline-bold":ot("body-size-baseline","weight-bold","body-lh-baseline","body-ls-baseline",e),"body-md-light":ot("body-size-md","weight-light","body-lh-md","body-ls-md",e),"body-md-regular":ot("body-size-md","weight-regular","body-lh-md","body-ls-md",e),"body-md-semibold":ot("body-size-md","weight-semibold","body-lh-md","body-ls-md",e),"body-md-bold":ot("body-size-md","weight-bold","body-lh-md","body-ls-md",e),"body-sm-light":ot("body-size-sm","weight-light","body-lh-sm","body-ls-sm",e),"body-sm-regular":ot("body-size-sm","weight-regular","body-lh-sm","body-ls-sm",e),"body-sm-semibold":ot("body-size-sm","weight-semibold","body-lh-sm","body-ls-sm",e),"body-sm-bold":ot("body-size-sm","weight-bold","body-lh-sm","body-ls-sm",e),"body-xs-light":ot("body-size-xs","weight-light","body-lh-xs","body-ls-xs",e),"body-xs-regular":ot("body-size-xs","weight-regular","body-lh-xs","body-ls-xs",e),"body-xs-semibold":ot("body-size-xs","weight-semibold","body-lh-xs","body-ls-xs",e),"body-xs-bold":ot("body-size-xs","weight-bold","body-lh-xs","body-ls-xs",e),"form-label":ot("form-label-size","weight-semibold","form-label-lh","form-label-ls",e),"form-description":ot("form-description-size","weight-regular","form-description-lh","form-description-ls",e)}),st=at({disableLigatures:!0}),lt=at(),dt=at({disableLigatures:!0}),ct=at({disableLigatures:!0}),ut=at({disableLigatures:!0}),gt={collections:{default:lt,bookingsg:st,mylegacy:lt,pa:dt,a11yplayground:ct,supportgowhere:ut,sgwdigitallobby:ut,imda:at({disableLigatures:!0}),spf:at({disableLigatures:!0}),oneservice:at()},defaultValue:"default"},mt=e=>r=>{var n;const t=r.theme,i=en(gt,null==t?void 0:t.fontScheme),o=(null===(n=null==t?void 0:t.overrides)||void 0===n?void 0:n.font)?Qr(i,e,t.overrides.font):i[e];return"function"==typeof o?o(r):o},bt={"heading-xxl-light":mt("heading-xxl-light"),"heading-xxl-regular":mt("heading-xxl-regular"),"heading-xxl-semibold":mt("heading-xxl-semibold"),"heading-xxl-bold":mt("heading-xxl-bold"),"heading-xl-light":mt("heading-xl-light"),"heading-xl-regular":mt("heading-xl-regular"),"heading-xl-semibold":mt("heading-xl-semibold"),"heading-xl-bold":mt("heading-xl-bold"),"heading-lg-light":mt("heading-lg-light"),"heading-lg-regular":mt("heading-lg-regular"),"heading-lg-semibold":mt("heading-lg-semibold"),"heading-lg-bold":mt("heading-lg-bold"),"heading-md-light":mt("heading-md-light"),"heading-md-regular":mt("heading-md-regular"),"heading-md-semibold":mt("heading-md-semibold"),"heading-md-bold":mt("heading-md-bold"),"heading-sm-light":mt("heading-sm-light"),"heading-sm-regular":mt("heading-sm-regular"),"heading-sm-semibold":mt("heading-sm-semibold"),"heading-sm-bold":mt("heading-sm-bold"),"heading-xs-light":mt("heading-xs-light"),"heading-xs-regular":mt("heading-xs-regular"),"heading-xs-semibold":mt("heading-xs-semibold"),"heading-xs-bold":mt("heading-xs-bold"),"body-baseline-light":mt("body-baseline-light"),"body-baseline-regular":mt("body-baseline-regular"),"body-baseline-semibold":mt("body-baseline-semibold"),"body-baseline-bold":mt("body-baseline-bold"),"body-md-light":mt("body-md-light"),"body-md-regular":mt("body-md-regular"),"body-md-semibold":mt("body-md-semibold"),"body-md-bold":mt("body-md-bold"),"body-sm-light":mt("body-sm-light"),"body-sm-regular":mt("body-sm-regular"),"body-sm-semibold":mt("body-sm-semibold"),"body-sm-bold":mt("body-sm-bold"),"body-xs-light":mt("body-xs-light"),"body-xs-regular":mt("body-xs-regular"),"body-xs-semibold":mt("body-xs-semibold"),"body-xs-bold":mt("body-xs-bold"),"form-label":mt("form-label"),"form-description":mt("form-description")},ht={collections:{default:{"duration-150":"150ms","duration-250":"250ms","duration-350":"350ms","duration-500":"500ms","duration-800":"800ms","duration-1000":"1000ms","ease-default":"cubic-bezier(0.45, 0.05, 0.55, 0.95)","ease-standard":"cubic-bezier(0.86, 0, 0.07, 1)","ease-entrance":"cubic-bezier(0.18, 0.13, 0, 1)","ease-exit":"cubic-bezier(1, 0, 0.8, 0.85)"}},defaultValue:"default"},yt=e=>r=>{var n;const t=r.theme,i=en(ht,null==t?void 0:t.motionScheme);return(null===(n=null==t?void 0:t.overrides)||void 0===n?void 0:n.motion)?Qr(i,e,t.overrides.motion):i[e]},pt={"duration-150":yt("duration-150"),"duration-250":yt("duration-250"),"duration-350":yt("duration-350"),"duration-500":yt("duration-500"),"duration-800":yt("duration-800"),"duration-1000":yt("duration-1000"),"ease-default":yt("ease-default"),"ease-standard":yt("ease-standard"),"ease-entrance":yt("ease-entrance"),"ease-exit":yt("ease-exit")},ft=(e,r,n)=>t=>{const i=An(r)(t)||xn(r)(t);return`${e} rgba(from ${i} r g b / ${100*n}%)`},xt={collections:{default:{"xs-subtle":ft("0 0 4px 1px","neutral-50",.24),"xs-strong":ft("0 0 4px 1px","neutral-50",.5),"xs-focus-strong":ft("0 0 4px 1px","border-focus",.5),"xs-error-strong":ft("0 0 4px 1px","border-error",.5),"sm-subtle":ft("0 2px 4px 0","neutral-50",.24),"sm-strong":ft("0 2px 4px 0","neutral-50",.5),"md-subtle":ft("0 2px 8px 0","neutral-50",.24),"md-strong":ft("0 2px 8px 0","neutral-50",.5),"lg-subtle":ft("0 2px 12px 1px","neutral-50",.24),"lg-strong":ft("0 2px 12px 1px","neutral-50",.5)}},defaultValue:"default"},vt=e=>r=>{var n;const t=r.theme,i=en(xt,null==t?void 0:t.shadowScheme),o=(null===(n=null==t?void 0:t.overrides)||void 0===n?void 0:n.shadow)?Qr(i,e,t.overrides.shadow):i[e];return"function"==typeof o?o(r):o},Ft={"xs-subtle":vt("xs-subtle"),"xs-strong":vt("xs-strong"),"xs-focus-strong":vt("xs-focus-strong"),"xs-error-strong":vt("xs-error-strong"),"sm-subtle":vt("sm-subtle"),"sm-strong":vt("sm-strong"),"md-subtle":vt("md-subtle"),"md-strong":vt("md-strong"),"lg-subtle":vt("lg-subtle"),"lg-strong":vt("lg-strong")},wt={collections:{default:{"spacing-0":0,"spacing-4":4,"spacing-8":8,"spacing-12":12,"spacing-16":16,"spacing-20":20,"spacing-24":24,"spacing-32":32,"spacing-40":40,"spacing-48":48,"spacing-64":64,"spacing-72":72,"layout-xs":8,"layout-sm":16,"layout-md":24,"layout-lg":32,"layout-xl":48,"layout-xxl":64,"layout-xxxl":128}},defaultValue:"default"},$t=e=>r=>{var n;const t=r.theme,i=en(wt,null==t?void 0:t.spacingScheme);return(null===(n=null==t?void 0:t.overrides)||void 0===n?void 0:n.spacing)?`${Qr(i,e,t.overrides.spacing)}px`:`${i[e]}px`},Et={"spacing-0":$t("spacing-0"),"spacing-4":$t("spacing-4"),"spacing-8":$t("spacing-8"),"spacing-12":$t("spacing-12"),"spacing-16":$t("spacing-16"),"spacing-20":$t("spacing-20"),"spacing-24":$t("spacing-24"),"spacing-32":$t("spacing-32"),"spacing-40":$t("spacing-40"),"spacing-48":$t("spacing-48"),"spacing-64":$t("spacing-64"),"spacing-72":$t("spacing-72"),"layout-xs":$t("layout-xs"),"layout-sm":$t("layout-sm"),"layout-md":$t("layout-md"),"layout-lg":$t("layout-lg"),"layout-xl":$t("layout-xl"),"layout-xxl":$t("layout-xxl"),"layout-xxxl":$t("layout-xxxl")},Ct=(e,r)=>Object.assign(Object.assign({},e),{colourMode:r}),Dt=Object.assign(Object.assign({},Sn),{Primitive:vn}),Bt=Object.assign(Object.assign({},bt),{Spec:it}),At=pt,St=Object.assign(Object.assign({},tn),{Util:Mn}),kt=Et,zt=Hn,Ot=Ft,Mt=Ln,_t=Yn,Tt={colourScheme:"lifesg",fontScheme:"default",motionScheme:"default",borderScheme:"default",spacingScheme:"default",radiusScheme:"default",shadowScheme:"default",breakpointScheme:"default",resourceScheme:"lifesg",componentScheme:"lifesg",_v2:{colorScheme:"base",textStyleScheme:"base",designTokenScheme:"base",resourceScheme:"base"}},Lt={colourScheme:"bookingsg",fontScheme:"bookingsg",motionScheme:"default",borderScheme:"default",spacingScheme:"default",radiusScheme:"default",shadowScheme:"default",breakpointScheme:"default",resourceScheme:"bookingsg",_v2:{colorScheme:"bookingsg",textStyleScheme:"base",designTokenScheme:"base",resourceScheme:"bookingsg"}},jt={colourScheme:"ccube",fontScheme:"default",motionScheme:"default",borderScheme:"default",spacingScheme:"default",radiusScheme:"default",shadowScheme:"default",breakpointScheme:"default",resourceScheme:"ccube",_v2:{colorScheme:"ccube",textStyleScheme:"base",designTokenScheme:"base",resourceScheme:"ccube"}},Yt={colourScheme:"mylegacy",fontScheme:"mylegacy",motionScheme:"default",borderScheme:"default",spacingScheme:"default",radiusScheme:"default",shadowScheme:"default",breakpointScheme:"default",resourceScheme:"mylegacy",_v2:{colorScheme:"mylegacy",textStyleScheme:"base",designTokenScheme:"base",resourceScheme:"mylegacy"}},It={colourScheme:"rbs",fontScheme:"default",motionScheme:"default",borderScheme:"default",spacingScheme:"default",radiusScheme:"default",shadowScheme:"default",breakpointScheme:"default",resourceScheme:"rbs",_v2:{colorScheme:"rbs",textStyleScheme:"base",designTokenScheme:"rbs",resourceScheme:"rbs"}},Wt={colourScheme:"oneservice",fontScheme:"oneservice",motionScheme:"default",borderScheme:"default",spacingScheme:"default",radiusScheme:"default",shadowScheme:"default",breakpointScheme:"default",resourceScheme:"oneservice"},Ht={colourScheme:"pa",fontScheme:"pa",motionScheme:"default",borderScheme:"default",spacingScheme:"default",radiusScheme:"default",shadowScheme:"default",breakpointScheme:"default",resourceScheme:"pa",componentScheme:"pa"},Rt={colourScheme:"a11yplayground",fontScheme:"a11yplayground",motionScheme:"default",borderScheme:"default",spacingScheme:"default",radiusScheme:"default",shadowScheme:"default",breakpointScheme:"default",resourceScheme:"a11yplayground",componentScheme:"a11yplayground"},Pt={colourScheme:"supportgowhere",fontScheme:"supportgowhere",motionScheme:"default",borderScheme:"default",spacingScheme:"default",radiusScheme:"default",shadowScheme:"default",breakpointScheme:"default",resourceScheme:"supportgowhere",componentScheme:"default"},Nt={colourScheme:"supportgowhere",fontScheme:"sgwdigitallobby",motionScheme:"default",borderScheme:"default",spacingScheme:"default",radiusScheme:"default",shadowScheme:"default",breakpointScheme:"default",resourceScheme:"supportgowhere",componentScheme:"default"},Vt={colourScheme:"imda",fontScheme:"imda",motionScheme:"default",borderScheme:"default",spacingScheme:"default",radiusScheme:"default",shadowScheme:"default",breakpointScheme:"default",resourceScheme:"imda",componentScheme:"default"},Zt={colourScheme:"spf",fontScheme:"spf",motionScheme:"default",borderScheme:"default",spacingScheme:"default",radiusScheme:"spf",shadowScheme:"default",breakpointScheme:"default",resourceScheme:"spf",componentScheme:"spf"};Object.assign(Object.assign({},Tt),{light:Ct(Tt,"light"),dark:Ct(Tt,"dark")}),Object.assign(Object.assign({},Lt),{light:Ct(Lt,"light"),dark:Ct(Lt,"dark")}),Object.assign(Object.assign({},jt),{light:Ct(jt,"light"),dark:Ct(jt,"dark")}),Object.assign(Object.assign({},Yt),{light:Ct(Yt,"light"),dark:Ct(Yt,"dark")}),Object.assign(Object.assign({},It),{light:Ct(It,"light"),dark:Ct(It,"dark")}),Object.assign(Object.assign({},Wt),{light:Ct(Wt,"light"),dark:Ct(Wt,"dark")}),Object.assign(Object.assign({},Ht),{light:Ct(Ht,"light"),dark:Ct(Ht,"dark")}),Object.assign(Object.assign({},Rt),{light:Ct(Rt,"light"),dark:Ct(Rt,"dark")}),Object.assign(Object.assign({},Pt),{light:Ct(Pt,"light"),dark:Ct(Pt,"dark")}),Object.assign(Object.assign({},Nt),{light:Ct(Nt,"light"),dark:Ct(Nt,"dark")}),Object.assign(Object.assign({},Vt),{light:Ct(Vt,"light"),dark:Ct(Vt,"dark")}),Object.assign(Object.assign({},Zt),{light:Ct(Zt,"light"),dark:Ct(Zt,"dark")});const Xt=(e,r,n=!1)=>b`
        ${Bt[`${e}-${r}`]}
        ${n?"margin-bottom: 1.05em;":"margin-bottom: 0;"}
    `,Ut=e=>{if(e)return b`
            ${r=e,b`
    display: -webkit-box;
    -webkit-line-clamp: ${r};
    -webkit-box-orient: vertical;
    overflow: hidden;
`}
        `;var r},Jt=(e,r,n,t,i)=>b`
    ${Xt(e,r||"regular",t)}
    ${((e=!1,r=!1,n)=>r?b`
            display: block;
            ${Ut(n)}
        `:e?b`
            display: inline;
        `:b`
            display: block;
            ${Ut(n)}
        `)(n,t,i)}
    color: ${Dt.text};
`,qt=m.div`
    ${e=>Jt(e.$textStyle,e.$weight,e.$inline,e.$paragraph,e.$maxLines)}
`,Gt=m.a`
    ${e=>{var r;return b`
        ${Xt(e.$textStyle,e.$weight||"regular")}
        color: ${Dt.hyperlink};
        text-decoration: ${null!==(r=e.$underlineStyle)&&void 0!==r?r:"underline"};

        &:hover,
        &:active,
        &:focus {
            color: ${Dt["text-hover"]};
        }
    `}}
`,Kt=m(p)`
    height: 1lh;
    width: 1em;
    margin-left: 0.4em;
    vertical-align: middle;
`;var Qt;!function(n){const i=(r,n,i)=>{const o=(t,i)=>{var{weight:o,inline:a,paragraph:s,maxLines:l}=t,d=k(t,["weight","inline","paragraph","maxLines"]);return e(qt,Object.assign({ref:i,as:a?"span":r,$textStyle:n,$weight:o,$inline:a,$paragraph:s,$maxLines:l},d))};return o.displayName=`Typography.${i}`,t.forwardRef(o)};n.HeadingXXL=i("h1","heading-xxl","HeadingXXL"),n.HeadingXL=i("h2","heading-xl","HeadingXL"),n.HeadingLG=i("h3","heading-lg","HeadingLG"),n.HeadingMD=i("h4","heading-md","HeadingMD"),n.HeadingSM=i("h5","heading-sm","HeadingSM"),n.HeadingXS=i("h6","heading-xs","HeadingXS");const o=(r,n)=>{const i=(n,t)=>{var{weight:i,inline:o,paragraph:a,maxLines:s}=n,l=k(n,["weight","inline","paragraph","maxLines"]);return e(qt,Object.assign({ref:t,as:o?"span":"p",$textStyle:r,$weight:i,$inline:o,$paragraph:a,$maxLines:s},l))};return i.displayName=`Typography.${n}`,t.forwardRef(i)};n.BodyBL=o("body-baseline","BodyBL"),n.BodyMD=o("body-md","BodyMD"),n.BodySM=o("body-sm","BodySM"),n.BodyXS=o("body-xs","BodyXS");const a=(n,i)=>{const o=(t,i)=>{var{weight:o,children:a,external:s,underlineStyle:l="underline"}=t,d=k(t,["weight","children","external","underlineStyle"]);return r(Gt,Object.assign({ref:i,$textStyle:n,$weight:o,$underlineStyle:l},d,{children:[a,s&&e(Kt,{})]}))};return o.displayName=`Typography.${i}`,t.forwardRef(o)};n.LinkBL=a("body-baseline","LinkBL"),n.LinkMD=a("body-md","LinkMD"),n.LinkSM=a("body-sm","LinkSM"),n.LinkXS=a("body-xs","LinkXS")}(Qt||(Qt={}));const ei=m.div`
    border-radius: ${zt.md};
    background: ${Dt.bg};
    padding: ${kt["spacing-16"]} ${kt["spacing-32"]};
    ${e=>{var r;return"dark"===(null===(r=e.theme)||void 0===r?void 0:r.colourMode)?b`
                  border: ${St["width-010"]} ${St.solid}
                      ${Dt.border};
              `:b`
                  box-shadow: ${Ot["md-subtle"]};
              `}}
`,ri=m.button`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: ${kt["spacing-24"]};
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

        ${({$highlight:e})=>e&&b`
                background-color: ${Dt["bg-hover-neutral"]};
            `}
    }
`,ni=t.forwardRef(((r,n)=>{var{children:t,focusHighlight:i=!0,focusOutline:o="none",type:a="button"}=r,s=k(r,["children","focusHighlight","focusOutline","type"]);return e(ri,Object.assign({ref:n,$outline:o,$highlight:i,type:a},s,{children:t}))})),ti=m.div`
    position: relative;
    display: flex;
    flex-direction: column;
    width: 40rem;
    max-height: 70%;
    background: ${Dt.bg};
    box-shadow: ${Ot["lg-strong"]};
    border-radius: ${zt.lg};
    overflow: hidden;

    ${_t.MaxWidth.md} {
        width: 90%;
        max-height: 70%;
    }
`,ii=m(ni)`
    position: absolute;
    top: var(--close-button-top-inset, ${kt["spacing-16"]});
    right: var(--close-button-right-inset, ${kt["spacing-16"]});
    padding: 0;
    color: ${Dt.icon};

    svg {
        height: 2rem;
        width: 2rem;
    }

    ${_t.MaxWidth.sm} {
        right: var(--close-button-right-inset, ${kt["spacing-20"]});
    }
`;const oi=t.forwardRef((function(n,t){var{id:i="modal-box",children:o,onClose:a,showCloseButton:s=!0}=n,l=k(n,["id","children","onClose","showCloseButton"]);return r(ti,Object.assign({ref:t,"data-testid":i},l,{onClick:e=>{e.stopPropagation()},children:[s&&e(ii,{onClick:a,"data-testid":"close-button",focusHighlight:!1,focusOutline:"browser",children:e(f,{})}),o]}))}));oi.displayName="Modal.Box";const ai=e=>{const{textSize:r}=e||{};return b`
        // Text styling
        ${r&&Bt[`${r}-regular`]}

        strong {
            font-weight: ${Bt.Spec["weight-semibold"]};
            ${r&&Bt[`${r}-semibold`]};
        }

        p {
            margin: 0;
        }

        // Link styling
        a {
            font-weight: ${Bt.Spec["weight-semibold"]};
            ${r&&Bt[`${r}-semibold`]}
            color: ${Dt.hyperlink};
            text-decoration: underline;

            svg {
                color: ${Dt["icon-primary"]};
                height: 1lh;
                width: 1em;
                margin-left: 0.4rem;
                vertical-align: middle;
            }

            &:hover,
            &:active,
            &:visited,
            &:focus {
                color: ${Dt["hyperlink-hover"]};

                svg {
                    color: ${Dt["icon-hover"]};
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
    `};m.div`
    max-width: 30rem;
    padding: 0 1rem;
    pointer-events: auto;
    outline: none;
`,m((r=>{var{children:n}=r,t=k(r,["children"]);const i=t["data-testid"]||"card";return e(ei,Object.assign({},t,{"data-testid":i,children:"string"==typeof n?e(Qt.BodyBL,{children:n}):n}))}))`
    color: ${Dt.text};
    ${ai({textSize:"body-md"})}

    ${_t.MaxWidth.sm} {
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
        background: ${Dt["bg-inverse-subtlest"]};
        border: 5px solid transparent;
        border-radius: ${zt.full};
        background-clip: padding-box;
    }
`,m(oi)`
    padding: 3.5rem 1.25rem 2.5rem;
`,m.div`
    overflow-y: scroll;

    &::-webkit-scrollbar {
        display: none; /* Chrome/Safari/Webkit */
    }

    color: ${Dt.text};
    ${ai({textSize:"body-md"})}
`;var si={exports:{}};si.exports=function(){var e=1e3,r=6e4,n=36e5,t="millisecond",i="second",o="minute",a="hour",s="day",l="week",d="month",c="quarter",u="year",g="date",m="Invalid Date",b=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,h=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,y={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(e){var r=["th","st","nd","rd"],n=e%100;return"["+e+(r[(n-20)%10]||r[n]||r[0])+"]"}},p=function(e,r,n){var t=String(e);return!t||t.length>=r?e:""+Array(r+1-t.length).join(n)+e},f={s:p,z:function(e){var r=-e.utcOffset(),n=Math.abs(r),t=Math.floor(n/60),i=n%60;return(r<=0?"+":"-")+p(t,2,"0")+":"+p(i,2,"0")},m:function e(r,n){if(r.date()<n.date())return-e(n,r);var t=12*(n.year()-r.year())+(n.month()-r.month()),i=r.clone().add(t,d),o=n-i<0,a=r.clone().add(t+(o?-1:1),d);return+(-(t+(n-i)/(o?i-a:a-i))||0)},a:function(e){return e<0?Math.ceil(e)||0:Math.floor(e)},p:function(e){return{M:d,y:u,w:l,d:s,D:g,h:a,m:o,s:i,ms:t,Q:c}[e]||String(e||"").toLowerCase().replace(/s$/,"")},u:function(e){return void 0===e}},x="en",v={};v[x]=y;var F="$isDayjsObject",w=function(e){return e instanceof D||!(!e||!e[F])},$=function e(r,n,t){var i;if(!r)return x;if("string"==typeof r){var o=r.toLowerCase();v[o]&&(i=o),n&&(v[o]=n,i=o);var a=r.split("-");if(!i&&a.length>1)return e(a[0])}else{var s=r.name;v[s]=r,i=s}return!t&&i&&(x=i),i||!t&&x},E=function(e,r){if(w(e))return e.clone();var n="object"==typeof r?r:{};return n.date=e,n.args=arguments,new D(n)},C=f;C.l=$,C.i=w,C.w=function(e,r){return E(e,{locale:r.$L,utc:r.$u,x:r.$x,$offset:r.$offset})};var D=function(){function y(e){this.$L=$(e.locale,null,!0),this.parse(e),this.$x=this.$x||e.x||{},this[F]=!0}var p=y.prototype;return p.parse=function(e){this.$d=function(e){var r=e.date,n=e.utc;if(null===r)return new Date(NaN);if(C.u(r))return new Date;if(r instanceof Date)return new Date(r);if("string"==typeof r&&!/Z$/i.test(r)){var t=r.match(b);if(t){var i=t[2]-1||0,o=(t[7]||"0").substring(0,3);return n?new Date(Date.UTC(t[1],i,t[3]||1,t[4]||0,t[5]||0,t[6]||0,o)):new Date(t[1],i,t[3]||1,t[4]||0,t[5]||0,t[6]||0,o)}}return new Date(r)}(e),this.init()},p.init=function(){var e=this.$d;this.$y=e.getFullYear(),this.$M=e.getMonth(),this.$D=e.getDate(),this.$W=e.getDay(),this.$H=e.getHours(),this.$m=e.getMinutes(),this.$s=e.getSeconds(),this.$ms=e.getMilliseconds()},p.$utils=function(){return C},p.isValid=function(){return!(this.$d.toString()===m)},p.isSame=function(e,r){var n=E(e);return this.startOf(r)<=n&&n<=this.endOf(r)},p.isAfter=function(e,r){return E(e)<this.startOf(r)},p.isBefore=function(e,r){return this.endOf(r)<E(e)},p.$g=function(e,r,n){return C.u(e)?this[r]:this.set(n,e)},p.unix=function(){return Math.floor(this.valueOf()/1e3)},p.valueOf=function(){return this.$d.getTime()},p.startOf=function(e,r){var n=this,t=!!C.u(r)||r,c=C.p(e),m=function(e,r){var i=C.w(n.$u?Date.UTC(n.$y,r,e):new Date(n.$y,r,e),n);return t?i:i.endOf(s)},b=function(e,r){return C.w(n.toDate()[e].apply(n.toDate("s"),(t?[0,0,0,0]:[23,59,59,999]).slice(r)),n)},h=this.$W,y=this.$M,p=this.$D,f="set"+(this.$u?"UTC":"");switch(c){case u:return t?m(1,0):m(31,11);case d:return t?m(1,y):m(0,y+1);case l:var x=this.$locale().weekStart||0,v=(h<x?h+7:h)-x;return m(t?p-v:p+(6-v),y);case s:case g:return b(f+"Hours",0);case a:return b(f+"Minutes",1);case o:return b(f+"Seconds",2);case i:return b(f+"Milliseconds",3);default:return this.clone()}},p.endOf=function(e){return this.startOf(e,!1)},p.$set=function(e,r){var n,l=C.p(e),c="set"+(this.$u?"UTC":""),m=(n={},n[s]=c+"Date",n[g]=c+"Date",n[d]=c+"Month",n[u]=c+"FullYear",n[a]=c+"Hours",n[o]=c+"Minutes",n[i]=c+"Seconds",n[t]=c+"Milliseconds",n)[l],b=l===s?this.$D+(r-this.$W):r;if(l===d||l===u){var h=this.clone().set(g,1);h.$d[m](b),h.init(),this.$d=h.set(g,Math.min(this.$D,h.daysInMonth())).$d}else m&&this.$d[m](b);return this.init(),this},p.set=function(e,r){return this.clone().$set(e,r)},p.get=function(e){return this[C.p(e)]()},p.add=function(t,c){var g,m=this;t=Number(t);var b=C.p(c),h=function(e){var r=E(m);return C.w(r.date(r.date()+Math.round(e*t)),m)};if(b===d)return this.set(d,this.$M+t);if(b===u)return this.set(u,this.$y+t);if(b===s)return h(1);if(b===l)return h(7);var y=(g={},g[o]=r,g[a]=n,g[i]=e,g)[b]||1,p=this.$d.getTime()+t*y;return C.w(p,this)},p.subtract=function(e,r){return this.add(-1*e,r)},p.format=function(e){var r=this,n=this.$locale();if(!this.isValid())return n.invalidDate||m;var t=e||"YYYY-MM-DDTHH:mm:ssZ",i=C.z(this),o=this.$H,a=this.$m,s=this.$M,l=n.weekdays,d=n.months,c=n.meridiem,u=function(e,n,i,o){return e&&(e[n]||e(r,t))||i[n].slice(0,o)},g=function(e){return C.s(o%12||12,e,"0")},b=c||function(e,r,n){var t=e<12?"AM":"PM";return n?t.toLowerCase():t};return t.replace(h,(function(e,t){return t||function(e){switch(e){case"YY":return String(r.$y).slice(-2);case"YYYY":return C.s(r.$y,4,"0");case"M":return s+1;case"MM":return C.s(s+1,2,"0");case"MMM":return u(n.monthsShort,s,d,3);case"MMMM":return u(d,s);case"D":return r.$D;case"DD":return C.s(r.$D,2,"0");case"d":return String(r.$W);case"dd":return u(n.weekdaysMin,r.$W,l,2);case"ddd":return u(n.weekdaysShort,r.$W,l,3);case"dddd":return l[r.$W];case"H":return String(o);case"HH":return C.s(o,2,"0");case"h":return g(1);case"hh":return g(2);case"a":return b(o,a,!0);case"A":return b(o,a,!1);case"m":return String(a);case"mm":return C.s(a,2,"0");case"s":return String(r.$s);case"ss":return C.s(r.$s,2,"0");case"SSS":return C.s(r.$ms,3,"0");case"Z":return i}return null}(e)||i.replace(":","")}))},p.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},p.diff=function(t,g,m){var b,h=this,y=C.p(g),p=E(t),f=(p.utcOffset()-this.utcOffset())*r,x=this-p,v=function(){return C.m(h,p)};switch(y){case u:b=v()/12;break;case d:b=v();break;case c:b=v()/3;break;case l:b=(x-f)/6048e5;break;case s:b=(x-f)/864e5;break;case a:b=x/n;break;case o:b=x/r;break;case i:b=x/e;break;default:b=x}return m?b:C.a(b)},p.daysInMonth=function(){return this.endOf(d).$D},p.$locale=function(){return v[this.$L]},p.locale=function(e,r){if(!e)return this.$L;var n=this.clone(),t=$(e,r,!0);return t&&(n.$L=t),n},p.clone=function(){return C.w(this.$d,this)},p.toDate=function(){return new Date(this.valueOf())},p.toJSON=function(){return this.isValid()?this.toISOString():null},p.toISOString=function(){return this.$d.toISOString()},p.toString=function(){return this.$d.toUTCString()},y}(),B=D.prototype;return E.prototype=B,[["$ms",t],["$s",i],["$m",o],["$H",a],["$W",s],["$M",d],["$y",u],["$D",g]].forEach((function(e){B[e[1]]=function(r){return this.$g(r,e[0],e[1])}})),E.extend=function(e,r){return e.$i||(e(r,D,E),e.$i=!0),E},E.locale=$,E.isDayjs=w,E.unix=function(e){return E(1e3*e)},E.en=v[x],E.Ls=v,E.p={},E}();var li=O(si.exports),di={exports:{}};di.exports=function(){var e={LTS:"h:mm:ss A",LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D, YYYY",LLL:"MMMM D, YYYY h:mm A",LLLL:"dddd, MMMM D, YYYY h:mm A"},r=/(\[[^[]*\])|([-_:/.,()\s]+)|(A|a|YYYY|YY?|MM?M?M?|Do|DD?|hh?|HH?|mm?|ss?|S{1,3}|z|ZZ?)/g,n=/\d\d/,t=/\d\d?/,i=/\d*[^-_:/,()\s\d]+/,o={},a=function(e){return(e=+e)+(e>68?1900:2e3)},s=function(e){return function(r){this[e]=+r}},l=[/[+-]\d\d:?(\d\d)?|Z/,function(e){(this.zone||(this.zone={})).offset=function(e){if(!e)return 0;if("Z"===e)return 0;var r=e.match(/([+-]|\d\d)/g),n=60*r[1]+(+r[2]||0);return 0===n?0:"+"===r[0]?-n:n}(e)}],d=function(e){var r=o[e];return r&&(r.indexOf?r:r.s.concat(r.f))},c=function(e,r){var n,t=o.meridiem;if(t){for(var i=1;i<=24;i+=1)if(e.indexOf(t(i,0,r))>-1){n=i>12;break}}else n=e===(r?"pm":"PM");return n},u={A:[i,function(e){this.afternoon=c(e,!1)}],a:[i,function(e){this.afternoon=c(e,!0)}],S:[/\d/,function(e){this.milliseconds=100*+e}],SS:[n,function(e){this.milliseconds=10*+e}],SSS:[/\d{3}/,function(e){this.milliseconds=+e}],s:[t,s("seconds")],ss:[t,s("seconds")],m:[t,s("minutes")],mm:[t,s("minutes")],H:[t,s("hours")],h:[t,s("hours")],HH:[t,s("hours")],hh:[t,s("hours")],D:[t,s("day")],DD:[n,s("day")],Do:[i,function(e){var r=o.ordinal,n=e.match(/\d+/);if(this.day=n[0],r)for(var t=1;t<=31;t+=1)r(t).replace(/\[|\]/g,"")===e&&(this.day=t)}],M:[t,s("month")],MM:[n,s("month")],MMM:[i,function(e){var r=d("months"),n=(d("monthsShort")||r.map((function(e){return e.slice(0,3)}))).indexOf(e)+1;if(n<1)throw new Error;this.month=n%12||n}],MMMM:[i,function(e){var r=d("months").indexOf(e)+1;if(r<1)throw new Error;this.month=r%12||r}],Y:[/[+-]?\d+/,s("year")],YY:[n,function(e){this.year=a(e)}],YYYY:[/\d{4}/,s("year")],Z:l,ZZ:l};function g(n){var t,i;t=n,i=o&&o.formats;for(var a=(n=t.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g,(function(r,n,t){var o=t&&t.toUpperCase();return n||i[t]||e[t]||i[o].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g,(function(e,r,n){return r||n.slice(1)}))}))).match(r),s=a.length,l=0;l<s;l+=1){var d=a[l],c=u[d],g=c&&c[0],m=c&&c[1];a[l]=m?{regex:g,parser:m}:d.replace(/^\[|\]$/g,"")}return function(e){for(var r={},n=0,t=0;n<s;n+=1){var i=a[n];if("string"==typeof i)t+=i.length;else{var o=i.regex,l=i.parser,d=e.slice(t),c=o.exec(d)[0];l.call(r,c),e=e.replace(c,"")}}return function(e){var r=e.afternoon;if(void 0!==r){var n=e.hours;r?n<12&&(e.hours+=12):12===n&&(e.hours=0),delete e.afternoon}}(r),r}}return function(e,r,n){n.p.customParseFormat=!0,e&&e.parseTwoDigitYear&&(a=e.parseTwoDigitYear);var t=r.prototype,i=t.parse;t.parse=function(e){var r=e.date,t=e.utc,a=e.args;this.$u=t;var s=a[1];if("string"==typeof s){var l=!0===a[2],d=!0===a[3],c=l||d,u=a[2];d&&(u=a[2]),o=this.$locale(),!l&&u&&(o=n.Ls[u]),this.$d=function(e,r,n){try{if(["x","X"].indexOf(r)>-1)return new Date(("X"===r?1e3:1)*e);var t=g(r)(e),i=t.year,o=t.month,a=t.day,s=t.hours,l=t.minutes,d=t.seconds,c=t.milliseconds,u=t.zone,m=new Date,b=a||(i||o?1:m.getDate()),h=i||m.getFullYear(),y=0;i&&!o||(y=o>0?o-1:m.getMonth());var p=s||0,f=l||0,x=d||0,v=c||0;return u?new Date(Date.UTC(h,y,b,p,f,x,v+60*u.offset*1e3)):n?new Date(Date.UTC(h,y,b,p,f,x,v)):new Date(h,y,b,p,f,x,v)}catch(e){return new Date("")}}(r,s,t),this.init(),u&&!0!==u&&(this.$L=this.locale(u).$L),c&&r!=this.format(s)&&(this.$d=new Date("")),o={}}else if(s instanceof Array)for(var m=s.length,b=1;b<=m;b+=1){a[1]=s[b-1];var h=n.apply(this,a);if(h.isValid()){this.$d=h.$d,this.$L=h.$L,this.init();break}b===m&&(this.$d=new Date(""))}else i.call(this,e)}}}();var ci=O(di.exports),ui={exports:{}};ui.exports=function(e,r,n){r.prototype.isBetween=function(e,r,t,i){var o=n(e),a=n(r),s="("===(i=i||"()")[0],l=")"===i[1];return(s?this.isAfter(o,t):!this.isBefore(o,t))&&(l?this.isBefore(a,t):!this.isAfter(a,t))||(s?this.isBefore(o,t):!this.isAfter(o,t))&&(l?this.isAfter(a,t):!this.isBefore(a,t))}};var gi=O(ui.exports),mi={exports:{}};mi.exports=function(e,r){r.prototype.isSameOrAfter=function(e,r){return this.isSame(e,r)||this.isAfter(e,r)}};var bi=O(mi.exports),hi={exports:{}};hi.exports=function(e,r){r.prototype.isSameOrBefore=function(e,r){return this.isSame(e,r)||this.isBefore(e,r)}};var yi,pi,fi,xi=O(hi.exports),vi={exports:{}},Fi=O(vi.exports=(yi={year:0,month:1,day:2,hour:3,minute:4,second:5},pi={},function(e,r,n){var t,i=function(e,r,n){void 0===n&&(n={});var t=new Date(e),i=function(e,r){void 0===r&&(r={});var n=r.timeZoneName||"short",t=e+"|"+n,i=pi[t];return i||(i=new Intl.DateTimeFormat("en-US",{hour12:!1,timeZone:e,year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit",timeZoneName:n}),pi[t]=i),i}(r,n);return i.formatToParts(t)},o=function(e,r){for(var t=i(e,r),o=[],a=0;a<t.length;a+=1){var s=t[a],l=s.type,d=s.value,c=yi[l];c>=0&&(o[c]=parseInt(d,10))}var u=o[3],g=24===u?0:u,m=o[0]+"-"+o[1]+"-"+o[2]+" "+g+":"+o[4]+":"+o[5]+":000",b=+e;return(n.utc(m).valueOf()-(b-=b%1e3))/6e4},a=r.prototype;a.tz=function(e,r){void 0===e&&(e=t);var i=this.utcOffset(),o=this.toDate(),a=o.toLocaleString("en-US",{timeZone:e}),s=Math.round((o-new Date(a))/1e3/60),l=n(a,{locale:this.$L}).$set("millisecond",this.$ms).utcOffset(15*-Math.round(o.getTimezoneOffset()/15)-s,!0);if(r){var d=l.utcOffset();l=l.add(i-d,"minute")}return l.$x.$timezone=e,l},a.offsetName=function(e){var r=this.$x.$timezone||n.tz.guess(),t=i(this.valueOf(),r,{timeZoneName:e}).find((function(e){return"timezonename"===e.type.toLowerCase()}));return t&&t.value};var s=a.startOf;a.startOf=function(e,r){if(!this.$x||!this.$x.$timezone)return s.call(this,e,r);var t=n(this.format("YYYY-MM-DD HH:mm:ss:SSS"),{locale:this.$L});return s.call(t,e,r).tz(this.$x.$timezone,!0)},n.tz=function(e,r,i){var a=i&&r,s=i||r||t,l=o(+n(),s);if("string"!=typeof e)return n(e).tz(s);var d=function(e,r,n){var t=e-60*r*1e3,i=o(t,n);if(r===i)return[t,r];var a=o(t-=60*(i-r)*1e3,n);return i===a?[t,i]:[e-60*Math.min(i,a)*1e3,Math.max(i,a)]}(n.utc(e,a).valueOf(),l,s),c=d[0],u=d[1],g=n(c).utcOffset(u);return g.$x.$timezone=s,g},n.tz.guess=function(){return Intl.DateTimeFormat().resolvedOptions().timeZone},n.tz.setDefault=function(e){t=e}}));li.extend(gi),li.extend(xi),li.extend(bi),li.extend(ci),li.extend(Fi),function(e){e.generateDays=e=>{const r=e.startOf("month"),n=li(r).startOf("week");return wi(n).map((e=>$i(e)))},e.generateDaysForCurrentWeek=e=>{const r=e.startOf("week");return $i(r)},e.generateMonths=e=>{const r=[];for(let n=0;n<12;n++){const t=e.month(n);r.push(li(t))}return r},e.generateDecadeOfYears=e=>{const r=e.year(),n=10*Math.floor(r/10),t=e.year(n),i=[t.subtract(1,"year"),t];for(let e=1;e<11;e++)i.push(t.add(e,"year"));return i},e.getStartEndDecade=e=>{const r=10*Math.floor(+e.format("YYYY")/10);return{beginDecade:r,endDecade:+li(`${r+9}-01-01`).format("YYYY")}},e.convertTo12HourFormat=e=>{const r=li(e,"HH:mm");return r.isValid()?r.format("h:mm a"):""},e.isWithinRange=(e,r,n,t="day")=>!r&&!n||(r&&n?e.isBetween(r,n,t,"[]"):r?e.isSameOrAfter(r,t):e.isSameOrBefore(n,t)),e.isPreviousMonthWithinRange=(r,n)=>e.isWithinRange(r.subtract(1,"month"),n,void 0,"month"),e.isPreviousYearWithinRange=(r,n)=>e.isWithinRange(r.subtract(1,"year"),n,void 0,"year"),e.isPreviousDecadeWithinRange=(r,n)=>{const{beginDecade:t}=e.getStartEndDecade(r);return e.isWithinRange(r.year(t).subtract(1,"year"),n,void 0,"year")},e.isNextMonthWithinRange=(r,n)=>e.isWithinRange(r.add(1,"month"),void 0,n,"month"),e.isNextYearWithinRange=(r,n)=>e.isWithinRange(r.add(1,"year"),void 0,n,"year"),e.isNextDecadeWithinRange=(r,n)=>{const{endDecade:t}=e.getStartEndDecade(r);return e.isWithinRange(r.year(t).add(1,"year"),void 0,n,"year")},e.getWeekStartEnd=e=>({start:e.startOf("week").format("YYYY-MM-DD"),end:e.endOf("week").format("YYYY-MM-DD")}),e.getFixedRangeStartEnd=(e,r)=>({start:e.format("YYYY-MM-DD"),end:e.add(r-1,"day").format("YYYY-MM-DD")}),e.isDisabledDay=(r,n,t,i)=>{const o=e.isWithinRange(r,t?li(t):void 0,i?li(i):void 0),a=n&&n.includes(r.format("YYYY-MM-DD"));return!o||!!a}}(fi||(fi={}));const wi=e=>{const r=[e];for(let n=1;n<6;n++){const t=e.add(n,"week");r.push(t)}return r},$i=e=>{const r=[];for(let n=0;n<7;n++){const t=e.add(n,"day");r.push(t)}return r},Ei=[1,3,5,7,8,10,12],Ci=[4,6,9,11];var Di,Bi,Ai,Si;!function(e){e.clampDay=(r,n,t)=>{const i=parseInt(r),o=parseInt(n),a=parseInt(t);return 0==i?"1":Ei.includes(o)?Math.min(i,31).toString():Ci.includes(o)?Math.min(i,30).toString():2===o?e.isLeapYear(a)?Math.min(i,29).toString():Math.min(i,28).toString():r},e.clampMonth=e=>{const r=parseInt(e);return 0==r?"1":r>12?"12":e},e.isLeapYear=e=>e%4==0&&e%100!=0||e%400==0,e.getTimeDiffInMinutes=(e,r,n="HH:mm")=>{const t=li(e,n);return li(r,n).diff(t,"minute")},e.toDayjs=e=>e?li(e):li(),e.addMinutesToTime=(e,r,n="HH:mm")=>li(e,n).add(r,"minutes").format(n),e.isSame=(e,r,n="day")=>li(e).isSame(li(r),n)}(Di||(Di={})),function(e){e.isDateDisabled=(e,r)=>{const{disabledDates:n,minDate:t,maxDate:i}=r;return!!(e&&n&&n.length&&n.includes(e))||(!(!t||!li(e).isBefore(t,"day"))||!(!i||!li(e).isAfter(i,"day")))},e.sanitizeInput=e=>{if(e){const n=r(e);if(li(n,"YYYY-MM-DD",!0).isValid())return n}return""};const r=e=>{const r=e.match(/^(\d{1,4})-(\d{1,2})-(\d{1,2})$/);if(!r)return"";const[,n,t,i]=r;if(n.length<=2||parseInt(n,10)<100)return"";return`${n.padStart(4,"0")}-${t.padStart(2,"0")}-${i.padStart(2,"0")}`}}(Bi||(Bi={})),function(e){e.generate=()=>Math.random().toString(36).substring(2,9)}(Ai||(Ai={})),function(e){e.transformWithSpaces=(e,r)=>{const n="(.{"+r+"})";return e.replace(/[^\dA-Z]/gi,"").replace(new RegExp(n,"g"),"$1 ").trim()},e.padValue=(e,r)=>{if("0"===e)return r?e:e.padStart(2,"0");if(""===e)return e;return parseInt(e).toString().padStart(2,"0")},e.shouldTruncateToTwoLines=(e,r)=>{const n=Math.floor(r/9);return e.length>=2*n||1===e.split(" ").length&&e.length>n},e.truncateOneLine=(e,r,n,t,i=8)=>{let o=0;r>n&&(o=Math.floor((r-n)/i));const a=t+o;if(a<e.length){const r=Math.floor(a/2);return e.substring(0,r)+" ... "+e.substring(e.length-r,e.length)}return e},e.truncateTwoLines=(e,r,n,t=1.2)=>{const i=Math.floor(2*r/(.6*n))*(2/t);if(e.length<=i)return e;const o=Math.floor(.6*i),a=Math.floor(.2*i);return`${e.substring(0,o)}...${e.substring(e.length-a)}`},e.getTextWidth=(r,n)=>{if("undefined"==typeof document)return 0;const t=(e.getTextWidth.canvas||(e.getTextWidth.canvas=document.createElement("canvas"))).getContext("2d");t.font=n;return t.measureText(r).width},e.maskValue=(e,n)=>{if(!e)return e;const{maskRange:t,unmaskRange:i,maskChar:o="•",maskRegex:a,maskTransformer:s}=n;if(s)return s(e);if(a)return e.replace(a,o);if(t){const{startIndex:n,endIndex:i}=r(t[0],t[1]);return e.substring(0,n)+o.repeat(e.substring(n,i+1).length)+e.substring(i+1)}if(i){const{startIndex:n,endIndex:t}=r(i[0],i[1]);return o.repeat(e.substring(0,n).length)+e.substring(n,t+1)+o.repeat(e.substring(t+1).length)}return e};const r=(e,r)=>e<r?{startIndex:e,endIndex:r}:{startIndex:r,endIndex:e},n=new Intl.PluralRules("en",{type:"ordinal"}),t=new Map([["one","st"],["two","nd"],["few","rd"],["other","th"]]);e.formatOrdinal=e=>{const r=n.select(e);return`${e}${t.get(r)}`},e.getMaskedDescription=(e,r,n)=>{if(!e||"masked"!==r||!n)return"";const[t,i]=n,o=t>0,a=i<e.length-1,s=o?e.substring(0,t):"",l=a?e.substring(i+1):"";return o&&a?`Starting with ${s} and ending with ${l}`:o?`Starting with ${s}`:a?`Ending with ${l}`:""}}(Si||(Si={}));const ki=m.div`
    position: fixed;
    left: 0;
    top: 0;
    height: 0;
    width: 0;
    visibility: hidden;
    z-index: ${e=>e.$zIndex};

    ${e=>{if(e.$show)return b`
                height: 100%;
                width: 100vw;
                visibility: visible;
            `}}
`,zi=m.div`
    position: absolute;
    left: 0;
    top: 0;
    background-color: ${e=>e.$stacked?Dt["overlay-subtle"]:Dt["overlay-strong"]};
    backdrop-filter: ${e=>(e=>{let r="";return e&&(r+="blur(10px)"),r.length>0?r:"none"})(e.$backgroundBlur)};
    transition: opacity 200ms ease;

    ${e=>{let r="";return e.$show?r+=b`
                visibility: visible;
                opacity: 1;
                pointer-events: auto;
                height: 100%;
                width: 100vw;
            `:r+=b`
                visibility: hidden;
                opacity: 0;
                transition-delay: ${e.$disableTransition?"0ms":"400ms"};
                pointer-events: none;
                height: 0;
                width: 0;
            `,e.$disableTransition&&(r+=b`
                transition: none;
            `),r}};
`;var Oi;!function(e){e.Ready="overlay-context-ready",e.Change="overlay-context-change"}(Oi||(Oi={}));const Mi=({show:r=!1,rootId:n,onOverlayClick:t,children:o,backgroundOpacity:a,backgroundBlur:d=!0,disableTransition:c=!1,enableOverlayClick:u=!1,zIndex:g,id:m,containerRef:b})=>{const[h,y]=l(null),[p,f]=l(),[v]=l((()=>Ai.generate())),$=F(),E=i(),C=i(!1),D=i(null),B=m?`lifesg-ds-overlay-root-${m}`:"lifesg-ds-overlay-root",S=null!=g?g:p?99999:99998;(e=>{const r=x();s((()=>{if(!r)return;const n={zIndex:e};r.events.emit(Oi.Change,n)}),[r,e]),s((()=>{if(!r)return;const n=()=>{const n={zIndex:e};r.events.emit(Oi.Change,n)};return null==r||r.events.on(Oi.Ready,n),()=>null==r?void 0:r.events.off(Oi.Ready,n)}),[r,e])})(S),s((()=>(_(),y(O()),()=>{Y(),L().length<1&&(z()&&(I("remove"),H()),T("remove"))})),[]),s((()=>{if(r){const e=M();k(e),j(),z()&&1===L().length&&(W(),I("add"));const r=setTimeout((()=>{T("add")}),200);return()=>clearTimeout(r)}{Y(),z()&&L().length<1&&(I("remove"),H());const e=setTimeout((()=>{L().length<1&&T("remove")}),200);return()=>clearTimeout(e)}}),[r]),s((()=>{if(r)return document.addEventListener("mousedown",R,!0),()=>{document.removeEventListener("mousedown",R,!0)}}),[r]);const k=e=>{E.current=e,f(e)},z=()=>/(iPad|iPhone|iPod)/g.test(navigator.userAgent),O=()=>document&&n?document.getElementById(n):document?document.body:null,M=()=>L().length>0,_=()=>{if(!document.getElementById(Ti)){const e=document.createElement("style");e.id=Ti;const r=document.documentElement.clientWidth,n=window.innerWidth-r;e.innerHTML=`\n\t\t\t\t.${Li} {\n\t\t\t\t\toverflow: hidden;\n\t\t\t\t\tpadding-right: ${n}px !important;\n\t\t\t\t\t-ms-overflow-style: none;\n\t\t\t\t\tscrollbar-width: none;\n\t\t\t\t}\n\n\t\t\t\t.${Li}::-webkit-scrollbar {\n\t\t\t\t\tdisplay: none;\n\t\t\t\t}\n\n\t\t\t\t.${ji} {\n\t\t\t\t\tposition: fixed;\n\t\t\t\t\ttop: var(${Yi}, 0);\n\t\t\t\t\tbottom: 0;\n\t\t\t\t}\n\t\t\t`,document.body.appendChild(e)}},T=e=>{const r=document.body.classList.contains(Li);"add"!==e||r?"remove"===e&&r&&document.body.classList.remove(Li):document.body.classList.add(Li)},L=()=>{const e=document.body.dataset.lifesgDsOverlayOrder;return e?e.split(","):[]},j=()=>{const e=L();document.body.dataset.lifesgDsOverlayOrder=[...e,v].join(",")},Y=()=>{const e=L();document.body.dataset.lifesgDsOverlayOrder=e.filter((e=>e!==v)).join(",")},I=e=>{if(!z())return;const r=document.body.classList.contains(ji);"add"!==e||r?"remove"===e&&r&&document.body.classList.remove(ji):document.body.classList.add(ji)},W=()=>{const e=document.body.style,r=e.top?e.top:window.scrollY+"px";document.body.style.setProperty(Yi,r)},H=()=>{if(!z())return;const e=document.body.style.getPropertyValue(Yi);requestAnimationFrame((()=>{window.scrollTo({top:parseFloat(e)})}))},R=e=>{var r;const n=null!==(r=null==b?void 0:b.current)&&void 0!==r?r:D.current,t=D.current;if(!n)return void(C.current=!1);const i=e.target,o=t===i,a=n===i,s=n.contains(i);C.current=!o&&(a||s)},P=e=>{var r;const n=null!==(r=null==b?void 0:b.current)&&void 0!==r?r:D.current,i=D.current;if(!n)return void(C.current=!1);const o=e.target,a=i===o,s=n===o,l=n.contains(o);!a&&(s||l)||C.current||!t||!u||(e.preventDefault(),t()),C.current=!1};return h?A.createPortal(e(ki,{id:B,"data-testid":B,$show:r,$zIndex:S,children:o&&e(w,{id:$,children:e(zi,{ref:D,"data-testid":"overlay-wrapper",$show:r,$stacked:p,$backgroundBlur:d,$disableTransition:c,onClick:P,children:o})})}),h):null},_i=r=>e(v,{children:e(Mi,Object.assign({},r))}),Ti="lifesg-ds-overlay-stylesheet",Li="lifesg-ds-overlay-open",ji="lifesg-ds-overlay-scroll-lock",Yi="--lifesg-ds-overlay-scroll-y",Ii=d({onClose:()=>{}}),Wi=m.div`
    position: relative;
    width: 100%;
    height: 100%;

    overflow: auto;

    ${_t.MaxWidth.sm} {
        ${e=>b`
                height: calc(
                    ${e.$verticalHeight?`${e.$verticalHeight}px`:"1vh"} * 100
                );
            `}

        top: ${e=>e.$offsetTop||0}px;
    }

    ${e=>b`
        &[data-status="initial"] {
            opacity: 0;
            ${e.$animationFrom}: -3%;
        }

        &[data-status="open"] {
            opacity: 1;
            ${e.$animationFrom}: 0;
            transition: all ${At["duration-250"]} ${At["ease-entrance"]};
            transition-delay: ${At["duration-150"]};
        }

        &[data-status="close"] {
            opacity: 0;
            ${e.$animationFrom}: -3%;
            transition: all ${At["duration-250"]} ${At["ease-exit"]};
        }
    `}
`,Hi=m.div`
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100%;
    pointer-events: none;
`,Ri=m.div`
    pointer-events: auto;
    width: 100%;
    outline: none;
`,Pi=m.div`
    width: 40rem;
    margin: ${kt["spacing-64"]} auto;
    background: ${Dt.bg};
    box-shadow: ${Ot["xs-strong"]};
    border-radius: ${zt.lg};

    display: flex;
    flex-direction: column-reverse;

    max-width: calc(100% - ${Mt["xxl-margin"]}px * 2);

    ${_t.MaxWidth.xl} {
        max-width: calc(100% - ${Mt["xl-margin"]}px * 2);
    }

    ${_t.MaxWidth.lg} {
        max-width: calc(100% - ${Mt["lg-margin"]}px * 2);
    }

    ${_t.MaxWidth.md} {
        max-width: calc(100% - ${Mt["md-margin"]}px * 2);
    }

    ${_t.MaxWidth.sm} {
        max-width: calc(100% - ${Mt["sm-margin"]}px * 2);
    }

    ${_t.MaxWidth.xs} {
        max-width: calc(100% - ${Mt["xs-margin"]}px * 2);
    }

    ${_t.MaxWidth.xxs} {
        max-width: calc(100% - ${Mt["xxs-margin"]}px * 2);
    }
`,Ni=m.div`
    margin-right: ${kt["spacing-16"]};
    margin-left: auto;
    margin-top: ${kt["spacing-16"]};
    margin-bottom: ${kt["spacing-16"]};
`,Vi=m(ni)`
    padding: 0;
    color: ${Dt.icon};

    svg {
        height: 2rem;
        width: 2rem;
    }
`,Zi=m.div`
    margin-right: ${kt["spacing-64"]};
    margin-left: ${kt["spacing-64"]};

    ${_t.MaxWidth.sm} {
        margin-right: ${kt["spacing-20"]};
        margin-left: ${kt["spacing-20"]};
    }
`,Xi=m.div`
    margin-right: ${kt["spacing-64"]};
    margin-left: ${kt["spacing-64"]};

    ${_t.MaxWidth.sm} {
        margin-right: ${kt["spacing-20"]};
        margin-left: ${kt["spacing-20"]};
    }

    display: flex;
    flex-direction: row-reverse; /* primary button on right */
    column-gap: ${kt["spacing-32"]};
    row-gap: ${kt["spacing-16"]};

    & > button {
        flex: 1;
    }

    ${_t.MaxWidth.md} {
        flex-direction: column;
    }
`,Ui=m.div`
    :where(& > ${Zi}:last-child) {
        margin-bottom: ${kt["spacing-64"]};
    }

    :where(& > ${Xi}:not(:first-child)) {
        margin-top: ${kt["spacing-32"]};
    }

    :where(& > ${Xi}:last-child) {
        margin-bottom: ${kt["spacing-64"]};
    }

    ${e=>e.$hasCloseButton?b`
                  :where(& > ${Zi}:first-child),
                  :where(& > ${Xi}:first-child) {
                      margin-top: 0;
                  }
              `:b`
                  :where(& > ${Zi}:first-child),
                  :where(& > ${Xi}:first-child) {
                      margin-top: ${kt["spacing-64"]};
                  }
              `}
`,Ji=r=>{var{"data-testid":n="modal-close-button"}=r,t=k(r,["data-testid"]);const{onClose:i}=c(Ii);return e(Ni,Object.assign({"data-testid":n},t,{children:e(Vi,{onClick:i,"data-testid":"close-button",focusHighlight:!1,focusOutline:"browser","aria-label":"Close button",children:e(f,{"aria-hidden":!0})})}))};Ji.displayName="ModalV2.CloseButton";const qi=r=>{var{"data-testid":n="modal-content",children:t}=r,i=k(r,["data-testid","children"]);return e(Zi,Object.assign({"data-testid":n},i,{children:t}))};qi.displayName="ModalV2.Content";const Gi=e=>{var{"data-testid":n="modal-footer",primaryButton:t,secondaryButton:i}=e,o=k(e,["data-testid","primaryButton","secondaryButton"]);return r(Xi,Object.assign({"data-testid":n},o,{children:[t,i]}))};Gi.displayName="ModalV2.Footer";const Ki=t.forwardRef((function(e,n){var{id:i,"data-testid":o="modal-card",children:a}=e,s=k(e,["id","data-testid","children"]);const l=e=>t.Children.toArray(a).find((r=>((e,r)=>h(e.type)?e.type.target===r:e.type===r)(r,e))),d=l(Ji),c=l(qi),u=l(Gi),g=!!d;return r(Pi,Object.assign({ref:n,id:i,"data-testid":o},s,{onClick:e=>{e.stopPropagation()},children:[r(Ui,{$hasCloseButton:g,children:[c,u]}),g&&d]}))}));Ki.displayName="ModalV2.Card",Object.assign((r=>{var{id:n,show:d,onClose:c,animationFrom:u="bottom",children:g,enableOverlayClick:m=!0,rootComponentId:b,zIndex:h,onOverlayClick:y,dismissKeyboardOnShow:p=!0,"data-testid":f="modal","aria-label":x,"aria-labelledby":v,"aria-describedby":F,disableInitialFocus:w=!1}=r,A=k(r,["id","show","onClose","animationFrom","children","enableOverlayClick","rootComponentId","zIndex","onOverlayClick","dismissKeyboardOnShow","data-testid","aria-label","aria-labelledby","aria-describedby","disableInitialFocus"]);const{verticalHeight:S,offsetTop:z}=(()=>{const[e,r]=l(),[n,t]=l(),i=a((()=>{const e=.01*window.innerHeight;r(e)}),[]),o=a((()=>{if(window.visualViewport){const e=.01*window.visualViewport.height;r(e),t(window.visualViewport.offsetTop)}}),[]);return s((()=>window.visualViewport?(o(),window.visualViewport.addEventListener("resize",o),()=>{var e;null===(e=window.visualViewport)||void 0===e||e.removeEventListener("resize",o)}):(i(),window.addEventListener("resize",i),()=>{window.removeEventListener("resize",i)})),[]),{verticalHeight:e,offsetTop:n}})(),O=i(null),M=g&&t.cloneElement(g,{ref:O}),{refs:_,context:T}=$({open:d,onOpenChange:e=>{e||null==c||c()}}),{isMounted:L,status:j}=E(T,{duration:300}),Y=C(T,{outsidePress:!1,enabled:!!c}),{getFloatingProps:I}=D([Y]),W=function(e){const r=i(null);return o((()=>{r.current=e}),[e]),a(((...e)=>{var n;return null===(n=r.current)||void 0===n?void 0:n.call(r,...e)}),[])}((()=>{var e,r;p&&(null===(r=null===(e=document.activeElement)||void 0===e?void 0:e.blur)||void 0===r||r.call(e))}));return s((()=>{d&&W()}),[d,W]),e(_i,{"data-testid":`${f}-overlay`,show:L,enableOverlayClick:m,onOverlayClick:y,id:n,rootId:b,containerRef:O,zIndex:h,children:e(Wi,Object.assign({$show:L,$animationFrom:u,"data-testid":f,$verticalHeight:S,$offsetTop:z,"data-status":j},A,{children:e(Ii.Provider,{value:{onClose:c},children:L&&e(B,{context:T,initialFocus:w?-1:_.floating,children:e(Hi,{children:e(Ri,Object.assign({ref:_.setFloating},I(),{role:"dialog","aria-label":x,"aria-labelledby":v,"aria-describedby":F,children:M}))})})})}))})}),{Card:Ki,CloseButton:Ji,Content:qi,Footer:Gi}),m.div`
    display: inline;
    width: fit-content;
    cursor: pointer;
    position: relative;
`;const Qi=e=>{switch(e){case"underline":return"text-decoration: underline 1px;";case"underline-dashed":return"text-decoration: underline dashed 1px;"}};m.span`
    color: ${Dt["text-primary"]};
    font-weight: 600;
    text-underline-position: under;

    ${({$defaultStyle:e})=>Qi(e)}

    &:hover,
    &:focus-visible {
        color: ${Dt["text-hover"]};
        ${({$hoverStyle:e})=>Qi(e)}
    }

    svg {
        height: 1lh; // align vertically
        width: 1em; // scale icon with font size
        vertical-align: top;
    }
`,m.span`
    ${e=>!e.$standalone&&"margin-left: 0.25rem;"}
`,m.div`
    padding-left: ${kt["spacing-4"]};
    display: inline;
`,m.div`
    margin-bottom: ${kt["spacing-8"]};
`,m.label`
    color: ${Dt["text-subtle"]};
    display: inline-block;

    ${Bt["form-label"]}
    ${ai()}
    font-weight: ${Bt.Spec["weight-semibold"]};
`;const eo=m(S)`
    height: 1lh;
    width: 1em;
    flex-shrink: 0;
    color: ${Dt["icon-error-strong"]};
`,ro=m.div`
    ${Bt["body-sm-semibold"]}
    display: flex;
    gap: ${kt["spacing-4"]};
    margin-top: ${kt["spacing-8"]};
`,no=m.p`
    color: ${Dt["text-error"]};
    margin-bottom: 0;
    outline: none;
`;m.span`
    ${Bt["form-description"]}
    color: ${Dt["text-subtler"]};
    display: block;
`;const to=n=>r(ro,{children:[e(eo,{"aria-hidden":!0}),e(no,Object.assign({},n))]}),io=m.span`
    clip-path: inset(50%);
    height: 1px;
    width: 1px;
    overflow: hidden;
    position: absolute;
    white-space: nowrap;
`,oo=m.div`
    display: inline-block;
    position: relative;
    width: ${({$size:e})=>e?`${e}px`:"1em"};
    height: ${({$size:e})=>e?`${e}px`:"1em"};
    color: ${e=>e.$color||"currentColor"};
`,ao=y`
	0% {
	  transform: rotate(0deg);
	}
	100% {
	  transform: rotate(360deg);
	}
`,so=m.div`
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
    animation: ${ao} 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
`,lo=m(so)`
    animation-delay: -0.45s;
`,co=m(so)`
    animation-delay: -0.3s;
`,uo=m(so)`
    animation-delay: -0.15s;
`,go=m.button`
    padding: ${kt["spacing-8"]} ${kt["spacing-16"]};
    min-width: 4rem;
    border: ${St["width-010"]} ${St.solid} transparent;
    transition: all ${At["duration-250"]} ${At["ease-default"]};
    border-radius: ${Un};
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;

    // -----------------------------------------------------------------------------
    // BUTTON STYLE + TEXT COLOR
    // -----------------------------------------------------------------------------
    ${e=>{switch(e.$buttonStyle){case"secondary":return b`
                    background-color: ${Dt.bg};
                    border-color: ${e.$buttonIsDanger?Dt["border-error-strong"]:Kn};

                    color: ${e.$buttonIsDanger?Dt["text-error"]:Qn};

                    &:hover,
                    &:active {
                        @media (pointer: fine) {
                            background-color: ${Dt["bg-hover-neutral"]};
                        }
                    }
                `;case"light":return b`
                    background-color: ${Dt.bg};
                    border-color: ${Dt.border};

                    color: ${e.$buttonIsDanger?Dt["text-error"]:et};

                    &:hover,
                    &:active {
                        @media (pointer: fine) {
                            background-color: ${Dt["bg-hover-neutral"]};
                        }
                    }
                `;case"link":return b`
                    background-color: transparent;

                    color: ${e.$buttonIsDanger?Dt["text-error"]:rt};
                    &:hover,
                    &:active {
                        @media (pointer: fine) {
                            background-color: ${Dt["bg-hover-neutral"]};
                        }
                    }
                `;case"disabled":return b`
                    background-color: ${Dt["bg-disabled"]};

                    cursor: not-allowed;

                    &:hover {
                        box-shadow: none;
                    }

                    color: ${Dt["text-disabled"]};
                `;default:return b`
                    background-color: ${e.$buttonIsDanger?Dt["bg-error-strong"]:Jn};

                    ${_t.MaxWidth.sm} {
                        width: 100%;
                    }

                    color: ${Gn};

                    &:hover,
                    &:active {
                        @media (pointer: fine) {
                            background-color: ${e.$buttonIsDanger?Dt["bg-error-strong-hover"]:qn};
                        }
                    }
                `}}}

    // -----------------------------------------------------------------------------
	// BUTTON SIZE + TEXT SIZE
	// -----------------------------------------------------------------------------
	${e=>{switch(e.$buttonSizeStyle){case"small":return b`
                    height: 2.5rem;
                    ${Bt["body-md-semibold"]}

                    ${_t.MaxWidth.xxs} {
                        height: auto;
                    }
                `;case"large":return b`
                    height: 4rem;
                    ${Bt["heading-md-semibold"]}

                    ${_t.MaxWidth.xxs} {
                        height: auto;
                    }
                `;default:return b`
                    height: 3rem;
                    ${Bt["heading-xs-semibold"]}

                    ${_t.MaxWidth.xxs} {
                        height: auto;
                    }
                `}}}
`,mo=m((({color:n,className:t,size:i})=>r(oo,{className:t,$size:i,$color:n,"data-testid":"component-loading-spinner",children:[e(so,{id:"inner1"}),e(lo,{id:"inner2"}),e(co,{id:"inner3"}),e(uo,{id:"inner4"})]})))`
    margin-right: ${e=>e.$hasChildren?"0.5rem":"0"};
`,bo=e=>t.Children.toArray(e).some((e=>"string"==typeof e?""!==e.trim():null!=e)),ho=(n,t)=>{const{children:i,disabled:o=!1,loading:a=!1,styleType:s="default",danger:l=!1,focusableWhenDisabled:d=!1,onClick:c}=n,u=k(n,["children","disabled","loading","styleType","danger","focusableWhenDisabled","onClick"]),g={$buttonStyle:o?"disabled":s,$buttonSizeStyle:"default",$buttonIsDanger:l};return r(go,Object.assign({ref:t,"data-testid":u["data-testid"]||"button",disabled:o&&!d,"aria-disabled":o,"aria-busy":a,onClick:o?void 0:c},g,u,{children:[a&&e(mo,{$hasChildren:bo(i)}),e("span",{children:i})]}))};ho.displayName="Button.Default";const yo=(n,t)=>{const{children:i,disabled:o=!1,loading:a=!1,styleType:s="default",danger:l=!1,focusableWhenDisabled:d=!1,onClick:c}=n,u=k(n,["children","disabled","loading","styleType","danger","focusableWhenDisabled","onClick"]),g={$buttonStyle:o?"disabled":s,$buttonSizeStyle:"small",$buttonIsDanger:l};return r(go,Object.assign({ref:t,"data-testid":u["data-testid"]||"button",disabled:o&&!d,"aria-disabled":o,"aria-busy":a,onClick:o?void 0:c},g,u,{children:[a&&e(mo,{$hasChildren:bo(i)}),e("span",{children:i})]}))};yo.displayName="Button.Small";const po=(n,t)=>{const{children:i,disabled:o=!1,loading:a=!1,styleType:s="default",danger:l=!1,focusableWhenDisabled:d=!1,onClick:c}=n,u=k(n,["children","disabled","loading","styleType","danger","focusableWhenDisabled","onClick"]),g={$buttonStyle:o?"disabled":s,$buttonSizeStyle:"large",$buttonIsDanger:l};return r(go,Object.assign({ref:t,"data-testid":u["data-testid"]||"button",disabled:o&&!d,"aria-disabled":o,"aria-busy":a,onClick:o?void 0:c},g,u,{children:[a&&e(mo,{$hasChildren:bo(i)}),e("span",{children:i})]}))};po.displayName="Button.Large";const fo={Default:t.forwardRef(ho),Small:t.forwardRef(yo),Large:t.forwardRef(po)},xo=b`
    outline-offset: -1px;
    outline: ${St["width-020"]} ${St.solid} ${Dt["border-focus"]};
`,vo=b`
    outline-color: ${Dt["border-focus"]};
`,Fo=b`
    outline-color: ${Dt["border-disabled"]};
`,wo=b`
    outline-color: ${Dt["border-error-focus"]};
`,$o=b`
    outline: none;
`,Eo=m.div`
    border: ${St["width-010"]} ${St.solid} ${Dt.border};
    border-radius: ${zt.sm};
    background: ${Dt.bg};

    &:focus-within {
        ${xo}
    }
    ${e=>e.$focused&&!e.$noBorder&&xo}

    ${e=>e.$readOnly?b`
                border-color: transparent;
                padding: 0;
                background: transparent !important;

                &:focus-within {
                    ${vo}
                }
                ${e.$focused&&vo}
            `:e.$disabled?b`
                background: ${Dt["bg-disabled"]};
                cursor: not-allowed;

                &:focus-within {
                    ${Fo}
                }
                ${e.$focused&&Fo}
            `:e.$error?b`
                border-color: ${Dt["border-error"]};

                &:focus-within {
                    ${wo}
                }
                ${e.$focused&&wo}
            `:void 0}
    ${e=>{if(e.$noBorder)return b`
                border-color: transparent;
                background: transparent;
                &:focus-within {
                    ${$o}
                }
            `}}
`;m(Eo)`
    display: flex;
    align-items: center;
    position: relative;
    height: max-content;
    width: 100%;
    padding: 0 ${kt["spacing-16"]} 0
        ${e=>e.$readOnly?"0":kt["spacing-16"]};
    flex-direction: ${e=>"right"===e.$position?"row-reverse":"row"};
`;const Co=m.input`
    ${e=>"small"===e.$variant?Bt["body-md-regular"]:Bt["body-baseline-regular"]}
    color: ${Dt.text};
    display: block;
    background: transparent;
    border: none;
    outline: none;
    box-shadow: none;
    padding: 0;
    margin: 0;

    &:disabled {
        color: ${Dt["text-subtler"]};

        &:hover {
            cursor: not-allowed;
        }
    }

    &::placeholder,
    &::-webkit-input-placeholder {
        color: ${Dt["text-subtler"]};
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
`,Do=m.button`
    background: transparent;
    border: none;
    outline: none;

    &:focus,
    &:active {
        outline: none;
    }

    &:focus-visible {
        outline: ${St["width-010"]} ${St.solid}
            ${Dt["border-focus"]};
        border-radius: ${zt.sm};
    }
`,Bo=m(Co)`
    width: 100%;
    height: calc(3rem - 2px); // exclude top and bottom borders

    ${e=>"no-border"!==e.$styleType&&b`
            padding-left: ${e.$visuallyReadOnly?0:kt["spacing-16"]};
            padding-right: ${e.$visuallyReadOnly||e.$showClear?0:kt["spacing-16"]};
        `}
`,Ao=m(Do)`
    height: auto;
    padding: ${kt["spacing-12"]} ${kt["spacing-16"]};

    cursor: pointer;
    color: ${Dt.icon};

    ${e=>"no-border"===e.$styleType&&b`
            margin-right: -${kt["spacing-12"]};
        `}
`,So=m(f)`
    height: 1.25rem;
    width: 1.25rem;
    vertical-align: middle;
`,ko=m.div`
    display: flex;
    width: 100%;
`,zo=m(Eo)`
    display: flex;
    align-items: center;
    width: 100%;
`,Oo=t.forwardRef(((t,o)=>{var{value:a,spacing:s,type:l,error:d,disabled:c,readOnly:g,onChange:m,onClear:b,allowClear:h=!1,className:y,styleType:p="bordered"}=t,f=k(t,["value","spacing","type","error","disabled","readOnly","onChange","onClear","allowClear","className","styleType"]);const x=((e,r)=>"tel"===e&&!!r)(l,s),v=i(null);u(o,(()=>v.current),[]);const F=function({ref:e,formatter:r}){return()=>{var n;const t=e.current;if(!t)return;const i=t.value,o=r(i),a=null!==(n=t.selectionEnd)&&void 0!==n?n:0,s=i.substring(0,a),l=r(s),d=s.length-l.length,c=Math.max(0,a-d);return{nextValue:o,updateCaretPosition:()=>{t.value=o,t.setSelectionRange(c,c)}}}}({ref:v,formatter:e=>x?Si.transformWithSpaces(e,s):e}),w=e=>{m&&(x?E(e):m(e))},$=()=>{b&&b(),v&&v.current&&v.current.focus()},E=e=>{const r=F();if(!r)return;const{nextValue:n,updateCaretPosition:t}=r,i=n.replace(/\s/g,"");e.target.value=i,null==m||m(e),t()},C=a?(e=>e?x?Si.transformWithSpaces(e,s):e:"")(a):a,D=h&&!c&&!g&&!!a,B=()=>r(n,{children:[e(Bo,Object.assign({"data-testid":"input",ref:v,"aria-disabled":c,value:C,onChange:w,type:l,readOnly:g||c,$showClear:D,$styleType:p,$visuallyReadOnly:g},f)),D&&e(Ao,{onClick:$,type:"button","aria-label":"Clear input",$styleType:p,children:e(So,{"aria-hidden":!0})})]});return e(n,{children:"no-border"===p?e(ko,{className:y,children:B()}):e(zo,{$disabled:c,$error:d,$readOnly:g,className:y,children:B()})})})),Mo=m.div`
    display: flex;
    flex-direction: column;
`,_o=m.div`
    display: flex;
    flex-direction: row;
    align-self: center;
    align-items: center;
    gap: ${kt["spacing-8"]};
`,To=m(Oo)`
    min-width: 20px;
    margin-bottom: 0rem !important;

    input {
        padding: 0;
        text-align: center;
    }
`,Lo=m(fo.Small)`
    margin: ${kt["spacing-32"]} 0;
`,jo=m(Qt.BodyBL)`
    flex-shrink: 0;
`,Yo=(e,r=1)=>!!e&&RegExp(`^[0-9]{${r}}$`).test(e),Io=(e,r,n)=>{if(e.length===r)return e;if(n){const[t,i]=e.split(n.separator);return t===n.value&&i.length===r?i:""}return""},Wo=g(((n,t)=>{var{id:o,value:a=[],"data-testid":d,className:c,cooldownDuration:g,actionButtonProps:m,errorMessage:b,numOfInput:h,prefix:y,onChange:p,onCooldownStart:f,onCooldownEnd:x,otpOnly:v,onCountdownChange:F}=n,w=k(n,["id","value","data-testid","className","cooldownDuration","actionButtonProps","errorMessage","numOfInput","prefix","onChange","onCooldownStart","onCooldownEnd","otpOnly","onCountdownChange"]);const $=null!=m?m:{},{disabled:E,onClick:C,styleType:D="secondary"}=$,B=k($,["disabled","onClick","styleType"]),A=i([]),S=i(p),[z,O]=l(new Array(h).fill("")),[M,_]=l(g),[T,L]=l(new Date),[j]=l((()=>Ai.generate())),Y=!!b,I=`${j}-error`,W=`${j}-timer`;s((()=>{var e;return null===(e=null==A?void 0:A.current[0])||void 0===e||e.focus(),document.addEventListener("paste",N),()=>document.removeEventListener("paste",N)}),[]),s((()=>{if(0!==g){f&&f();const e=Z();return()=>e()}}),[T]),u(t,(()=>({startCooldown:()=>{L(new Date),_(g)}}))),s((()=>{S.current=p}),[p]),s((()=>{a.length===h&&O(a)}),[a]);const H=e=>{if(e&&Yo(e,h)){const r=e.split("");return O(r),S.current&&S.current(r),!0}return!1},R=e=>r=>{var n;const t=r.target.value,i=z.every((e=>""===e)),o=Io(t,h,y);if(i&&H(o))return;const a=t.replace(/[^0-9]/g,"");if(Yo(a)){const r=[...z];r[e]=a.substring(a.length-1),null===(n=A.current[e+1])||void 0===n||n.focus(),O(r),p&&p(r)}},P=e=>r=>{var n,t,i;const{key:o,code:a}=r;if("Backspace"===o||"Backspace"===a){const r=[...z];""!==r[e]?r[e]="":0!==e&&(r[e-1]="",null===(n=A.current[e-1])||void 0===n||n.focus()),O(r),p&&p(r)}else"ArrowRight"===r.code?null===(t=A.current[e+1])||void 0===t||t.focus():"ArrowLeft"===r.code&&(null===(i=A.current[e-1])||void 0===i||i.focus())},N=e=>{if(!e.clipboardData)return;const r=e.clipboardData.getData("text"),n=Io(r,h,y);H(n)||e.preventDefault()},V=()=>{const e=Date.now(),r=1e3*g;return e<T.valueOf()+r},Z=()=>{const e=setInterval((()=>{const r=Date.now(),n=1e3*g,t=Math.ceil((T.valueOf()+n-r)/1e3);_(t),t<=0?(x&&x(),clearInterval(e)):F&&F(t)}),1e3);return()=>{clearInterval(e)}},X=(e,r,n)=>n?`${n}-${r}-${e+1}`:`${r}-${e+1}`,U=e=>`${e} second${1===e?"":"s"}`;return r(Mo,{id:o,"data-testid":d,className:c,children:[r(_o,{role:"group","aria-label":`${h}-digit OTP input field`,children:[y&&r(jo,{forwardedAs:"span","data-testid":"otp-prefix",weight:"semibold",children:[e(io,{children:"O T P prefix"}),`${y.value} ${y.separator}`]}),z.map(((r,n)=>e(To,Object.assign({id:X(n,"otp-input",o),"data-testid":X(n,"otp-input",d),"aria-label":`${Si.formatOrdinal(n+1)} digit`,"aria-invalid":Y,"aria-describedby":Y?I:void 0,ref:e=>A.current[n]=e,type:"text",inputMode:"numeric",value:r,error:Y,onChange:R(n),onKeyDown:P(n),autoComplete:"off"},w),n)))]}),b&&e(to,{id:I,children:b}),r(io,{role:"timer",id:W,children:[U(M)," remaining"]}),e(io,{"aria-live":"polite",children:M>0?"":"Ready to resend OTP"}),!v&&e(Lo,Object.assign({styleType:D,type:"button"},B,{onClick:e=>{O(new Array(h).fill("")),V()||(L(new Date),_(g)),C&&C(e)},disabled:E||V()},B.children?{children:B.children}:{children:M>0?`Resend OTP in ${U(M)}`:"Resend OTP","aria-label":M>0?`Resend OTP in ${U(g)}`:"Resend OTP","aria-describedby":W}))]})}));export{Wo as OtpInput};
//# sourceMappingURL=index.js.map
