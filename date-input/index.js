import{jsxs as e,Fragment as r,jsx as t}from"react/jsx-runtime";import*as n from"react";import a,{useRef as i,useState as o,isValidElement as s,createRef as l,cloneElement as d,PureComponent as c,useEffect as u,useLayoutEffect as g,useCallback as b,useMemo as h,useImperativeHandle as m}from"react";import{ChevronDownIcon as y}from"@lifesg/react-icons/chevron-down";import f,{css as p,keyframes as v,useTheme as x}from"styled-components";import{useFloatingTree as w,useFloating as D,autoUpdate as F,offset as $,flip as E,shift as C,limitShift as S,size as B,useTransitionStyles as A,useClick as k,useDismiss as O,useInteractions as M,FloatingPortal as z,FloatingFocusManager as Y}from"@floating-ui/react";import{findDOMNode as j}from"react-dom";import{ChevronLeftIcon as T}from"@lifesg/react-icons/chevron-left";import{ChevronRightIcon as _}from"@lifesg/react-icons/chevron-right";function R(e,r){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(n=Object.getOwnPropertySymbols(e);a<n.length;a++)r.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(t[n[a]]=e[n[a]])}return t}"function"==typeof SuppressedError&&SuppressedError;var I="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};function L(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var H=Array.isArray,W="object"==typeof I&&I&&I.Object===Object&&I,N="object"==typeof self&&self&&self.Object===Object&&self,P=W||N||Function("return this")(),V=P.Symbol,U=V,Z=Object.prototype,K=Z.hasOwnProperty,J=Z.toString,q=U?U.toStringTag:void 0;var X=function(e){var r=K.call(e,q),t=e[q];try{e[q]=void 0;var n=!0}catch(e){}var a=J.call(e);return n&&(r?e[q]=t:delete e[q]),a},G=Object.prototype.toString;var Q=X,ee=function(e){return G.call(e)},re=V?V.toStringTag:void 0;var te=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":re&&re in Object(e)?Q(e):ee(e)};var ne=te,ae=function(e){return null!=e&&"object"==typeof e};var ie=function(e){return"symbol"==typeof e||ae(e)&&"[object Symbol]"==ne(e)},oe=H,se=ie,le=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,de=/^\w*$/;var ce=function(e,r){if(oe(e))return!1;var t=typeof e;return!("number"!=t&&"symbol"!=t&&"boolean"!=t&&null!=e&&!se(e))||(de.test(e)||!le.test(e)||null!=r&&e in Object(r))};var ue=function(e){var r=typeof e;return null!=e&&("object"==r||"function"==r)},ge=te,be=ue;var he,me=function(e){if(!be(e))return!1;var r=ge(e);return"[object Function]"==r||"[object GeneratorFunction]"==r||"[object AsyncFunction]"==r||"[object Proxy]"==r},ye=P["__core-js_shared__"],fe=(he=/[^.]+$/.exec(ye&&ye.keys&&ye.keys.IE_PROTO||""))?"Symbol(src)_1."+he:"";var pe=function(e){return!!fe&&fe in e},ve=Function.prototype.toString;var xe=me,we=pe,De=ue,Fe=function(e){if(null!=e){try{return ve.call(e)}catch(e){}try{return e+""}catch(e){}}return""},$e=/^\[object .+?Constructor\]$/,Ee=Function.prototype,Ce=Object.prototype,Se=Ee.toString,Be=Ce.hasOwnProperty,Ae=RegExp("^"+Se.call(Be).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");var ke=function(e,r){return null==e?void 0:e[r]},Oe=function(e){return!(!De(e)||we(e))&&(xe(e)?Ae:$e).test(Fe(e))},Me=ke;var ze=function(e,r){var t=Me(e,r);return Oe(t)?t:void 0},Ye=ze(Object,"create"),je=Ye;var Te=function(){this.__data__=je?je(null):{},this.size=0};var _e=function(e){var r=this.has(e)&&delete this.__data__[e];return this.size-=r?1:0,r},Re=Ye,Ie=Object.prototype.hasOwnProperty;var Le=function(e){var r=this.__data__;if(Re){var t=r[e];return"__lodash_hash_undefined__"===t?void 0:t}return Ie.call(r,e)?r[e]:void 0},He=Ye,We=Object.prototype.hasOwnProperty;var Ne=function(e){var r=this.__data__;return He?void 0!==r[e]:We.call(r,e)},Pe=Ye;var Ve=function(e,r){var t=this.__data__;return this.size+=this.has(e)?0:1,t[e]=Pe&&void 0===r?"__lodash_hash_undefined__":r,this},Ue=Te,Ze=_e,Ke=Le,Je=Ne,qe=Ve;function Xe(e){var r=-1,t=null==e?0:e.length;for(this.clear();++r<t;){var n=e[r];this.set(n[0],n[1])}}Xe.prototype.clear=Ue,Xe.prototype.delete=Ze,Xe.prototype.get=Ke,Xe.prototype.has=Je,Xe.prototype.set=qe;var Ge=Xe;var Qe=function(){this.__data__=[],this.size=0};var er=function(e,r){return e===r||e!=e&&r!=r};var rr=function(e,r){for(var t=e.length;t--;)if(er(e[t][0],r))return t;return-1},tr=rr,nr=Array.prototype.splice;var ar=function(e){var r=this.__data__,t=tr(r,e);return!(t<0)&&(t==r.length-1?r.pop():nr.call(r,t,1),--this.size,!0)},ir=rr;var or=function(e){var r=this.__data__,t=ir(r,e);return t<0?void 0:r[t][1]},sr=rr;var lr=function(e){return sr(this.__data__,e)>-1},dr=rr;var cr=function(e,r){var t=this.__data__,n=dr(t,e);return n<0?(++this.size,t.push([e,r])):t[n][1]=r,this},ur=Qe,gr=ar,br=or,hr=lr,mr=cr;function yr(e){var r=-1,t=null==e?0:e.length;for(this.clear();++r<t;){var n=e[r];this.set(n[0],n[1])}}yr.prototype.clear=ur,yr.prototype.delete=gr,yr.prototype.get=br,yr.prototype.has=hr,yr.prototype.set=mr;var fr=yr,pr=ze(P,"Map"),vr=Ge,xr=fr,wr=pr;var Dr=function(e){var r=typeof e;return"string"==r||"number"==r||"symbol"==r||"boolean"==r?"__proto__"!==e:null===e};var Fr=function(e,r){var t=e.__data__;return Dr(r)?t["string"==typeof r?"string":"hash"]:t.map},$r=Fr;var Er=function(e){var r=$r(this,e).delete(e);return this.size-=r?1:0,r},Cr=Fr;var Sr=function(e){return Cr(this,e).get(e)},Br=Fr;var Ar=function(e){return Br(this,e).has(e)},kr=Fr;var Or=function(e,r){var t=kr(this,e),n=t.size;return t.set(e,r),this.size+=t.size==n?0:1,this},Mr=function(){this.size=0,this.__data__={hash:new vr,map:new(wr||xr),string:new vr}},zr=Er,Yr=Sr,jr=Ar,Tr=Or;function _r(e){var r=-1,t=null==e?0:e.length;for(this.clear();++r<t;){var n=e[r];this.set(n[0],n[1])}}_r.prototype.clear=Mr,_r.prototype.delete=zr,_r.prototype.get=Yr,_r.prototype.has=jr,_r.prototype.set=Tr;var Rr=_r;function Ir(e,r){if("function"!=typeof e||null!=r&&"function"!=typeof r)throw new TypeError("Expected a function");var t=function(){var n=arguments,a=r?r.apply(this,n):n[0],i=t.cache;if(i.has(a))return i.get(a);var o=e.apply(this,n);return t.cache=i.set(a,o)||i,o};return t.cache=new(Ir.Cache||Rr),t}Ir.Cache=Rr;var Lr=Ir;var Hr=function(e){var r=Lr(e,(function(e){return 500===t.size&&t.clear(),e})),t=r.cache;return r},Wr=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,Nr=/\\(\\)?/g,Pr=Hr((function(e){var r=[];return 46===e.charCodeAt(0)&&r.push(""),e.replace(Wr,(function(e,t,n,a){r.push(n?a.replace(Nr,"$1"):t||e)})),r}));var Vr=function(e,r){for(var t=-1,n=null==e?0:e.length,a=Array(n);++t<n;)a[t]=r(e[t],t,e);return a},Ur=H,Zr=ie,Kr=V?V.prototype:void 0,Jr=Kr?Kr.toString:void 0;var qr=function e(r){if("string"==typeof r)return r;if(Ur(r))return Vr(r,e)+"";if(Zr(r))return Jr?Jr.call(r):"";var t=r+"";return"0"==t&&1/r==-1/0?"-0":t},Xr=qr;var Gr=H,Qr=ce,et=Pr,rt=function(e){return null==e?"":Xr(e)};var tt=ie;var nt=function(e,r){return Gr(e)?e:Qr(e,r)?[e]:et(rt(e))},at=function(e){if("string"==typeof e||tt(e))return e;var r=e+"";return"0"==r&&1/e==-1/0?"-0":r};var it=function(e,r){for(var t=0,n=(r=nt(r,e)).length;null!=e&&t<n;)e=e[at(r[t++])];return t&&t==n?e:void 0};var ot=L((function(e,r,t){var n=null==e?void 0:it(e,r);return void 0===n?t:n}));const st=(e,r,t)=>ot(t,r)||ot(e,r),lt=(e,r)=>{const t=r||e.defaultValue;return ot(e.collections,t)},dt={collections:{default:{"width-005":.5,"width-010":1,"width-020":2,"width-040":4,solid:"solid"}},defaultValue:"default"},ct=e=>r=>{var t;const n=r.theme,a=lt(dt,null==n?void 0:n.borderScheme);return(null===(t=null==n?void 0:n.overrides)||void 0===t?void 0:t.border)?`${st(a,e,n.overrides.border)}px`:`${a[e]}px`},ut={"width-005":ct("width-005"),"width-010":ct("width-010"),"width-020":ct("width-020"),"width-040":ct("width-040"),solid:(gt="solid",e=>{var r;const t=e.theme,n=lt(dt,null==t?void 0:t.borderScheme),a=(null===(r=null==t?void 0:t.overrides)||void 0===r?void 0:r.border)?st(n,gt,t.overrides.border):n[gt];return"function"==typeof a?a(e):a})};var gt;const bt={"brand-10":"#2C0C0B","brand-20":"#4C1513","brand-30":"#6C1D1B","brand-40":"#922825","brand-50":"#BF3431","brand-60":"#F15D5A","brand-70":"#F69491","brand-80":"#FABAB7","brand-90":"#FCD7D2","brand-95":"#FFEBE7","brand-100":"#FFF6F4","primary-10":"#1A122C","primary-20":"#2F1F4D","primary-30":"#422D6E","primary-40":"#5B3D97","primary-50":"#7654BC","primary-60":"#9A82CD","primary-70":"#B7A7D8","primary-80":"#CFC5E5","primary-90":"#E3DDF0","primary-95":"#F0EDF7","primary-100":"#F9F8FC","secondary-10":"#0E1723","secondary-20":"#18293D","secondary-30":"#233A57","secondary-40":"#305078","secondary-50":"#4B6A8F","secondary-60":"#7B91A9","secondary-70":"#A1B1C3","secondary-80":"#C1CBD7","secondary-90":"#DBE1E8","secondary-95":"#EBEFF2","secondary-100":"#F7F8FA","neutral-10":"#161616","neutral-20":"#282828","neutral-30":"#393939","neutral-40":"#4E4E4E","neutral-50":"#686868","neutral-60":"#8E8E8E","neutral-70":"#AFAFB0","neutral-80":"#C7CACA","neutral-90":"#DDE1E2","neutral-95":"#EDEFEF","neutral-100":"#F9F9F9","success-10":"#081A0F","success-20":"#0E2D1B","success-30":"#154126","success-40":"#1C5A34","success-50":"#257645","success-60":"#44A068","success-70":"#64C189","success-80":"#80DCA5","success-90":"#B4ECCB","success-95":"#D5F6E2","success-100":"#EFFCF4","warning-10":"#221302","warning-20":"#3B2204","warning-30":"#543106","warning-40":"#744408","warning-50":"#98590C","warning-60":"#D07A13","warning-70":"#E4A244","warning-80":"#F5C26C","warning-90":"#FADBA6","warning-95":"#FCECD4","warning-100":"#FDF7F0","error-10":"#330505","error-20":"#550808","error-30":"#750C0C","error-40":"#9E130F","error-50":"#CB2213","error-60":"#DE6C6C","error-70":"#E89B9B","error-80":"#EFBEBE","error-90":"#F5D9D9","error-95":"#F9ECEC","error-100":"#FCF7F7","info-10":"#021824","info-20":"#032B3F","info-30":"#053D59","info-40":"#065478","info-50":"#176E9B","info-60":"#5296BE","info-70":"#82B5DA","info-80":"#ACCFE7","info-90":"#CCE3F1","info-95":"#E3F1F8","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000","primary-inverse":"#FEAB10"},ht={"brand-10":"#1F1221","brand-20":"#371F3B","brand-30":"#4E2C53","brand-40":"#6B3E73","brand-50":"#8D5197","brand-60":"#FF3399","brand-70":"#FF88C4","brand-80":"#FFB3D9","brand-90":"#FFD4E9","brand-95":"#FFE8F3","brand-100":"#FFD6EB","primary-10":"#1F1221","primary-20":"#371F3B","primary-30":"#4E2C53","primary-40":"#6B3E73","primary-50":"#8D5197","primary-60":"#B07DB7","primary-70":"#C7A3CC","primary-80":"#D9C2DD","primary-90":"#E9DBEB","primary-95":"#F3ECF4","primary-100":"#FAF7FA","secondary-10":"#2D091B","secondary-20":"#4D0F2E","secondary-30":"#6B1540","secondary-40":"#931D58","secondary-50":"#C02673","secondary-60":"#FF409F","secondary-70":"#FF88C4","secondary-80":"#FFB3D9","secondary-90":"#FFD4E9","secondary-95":"#FFE8F3","secondary-100":"#FFF8FC","neutral-10":"#161616","neutral-20":"#282828","neutral-30":"#393939","neutral-40":"#4E4E4E","neutral-50":"#686868","neutral-60":"#8E8E8E","neutral-70":"#AFAFB0","neutral-80":"#C7CACA","neutral-90":"#DDE1E2","neutral-95":"#EDEFEF","neutral-100":"#F9F9F9","success-10":"#081A0F","success-20":"#0E2D1B","success-30":"#154126","success-40":"#1C5A34","success-50":"#257645","success-60":"#44A068","success-70":"#64C189","success-80":"#80DCA5","success-90":"#B4ECCB","success-95":"#D5F6E2","success-100":"#EFFCF4","warning-10":"#221302","warning-20":"#3B2204","warning-30":"#543106","warning-40":"#744408","warning-50":"#98590C","warning-60":"#D07A13","warning-70":"#E4A244","warning-80":"#F5C26C","warning-90":"#FADBA6","warning-95":"#FCECD4","warning-100":"#FDF7F0","error-10":"#330505","error-20":"#550808","error-30":"#750C0C","error-40":"#9E130F","error-50":"#CB2213","error-60":"#DE6C6C","error-70":"#E89B9B","error-80":"#EFBEBE","error-90":"#F5D9D9","error-95":"#F9ECEC","error-100":"#FCF7F7","info-10":"#021824","info-20":"#032B3F","info-30":"#053D59","info-40":"#065478","info-50":"#176E9B","info-60":"#5296BE","info-70":"#82B5DA","info-80":"#ACCFE7","info-90":"#CCE3F1","info-95":"#E3F1F8","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000","primary-inverse":"#FEAB10"},mt={"brand-10":"#2C0C0B","brand-20":"#4C1513","brand-30":"#6C1D1B","brand-40":"#922825","brand-50":"#BF3431","brand-60":"#F15D5A","brand-70":"#F69491","brand-80":"#FABAB7","brand-90":"#FCD7D2","brand-95":"#FFEBE7","brand-100":"#FFF6F4","primary-10":"#001731","primary-20":"#002752","primary-30":"#003874","primary-40":"#004D9F","primary-50":"#1768BE","primary-60":"#3C91EC","primary-70":"#6CB4FF","primary-80":"#A5CDFF","primary-90":"#CFE1FE","primary-95":"#E8F0FE","primary-100":"#F7F9FF","secondary-10":"#131529","secondary-20":"#222547","secondary-30":"#2F3565","secondary-40":"#42498B","secondary-50":"#5B62A7","secondary-60":"#858CBD","secondary-70":"#A8ADCF","secondary-80":"#C6C9E0","secondary-90":"#DDDFEC","secondary-95":"#EDEEF5","secondary-100":"#F8F8FB","neutral-10":"#161616","neutral-20":"#282828","neutral-30":"#393939","neutral-40":"#4E4E4E","neutral-50":"#686868","neutral-60":"#8E8E8E","neutral-70":"#AFAFB0","neutral-80":"#C7CACA","neutral-90":"#DDE1E2","neutral-95":"#EDEFEF","neutral-100":"#F9F9F9","success-10":"#081A0F","success-20":"#0E2D1B","success-30":"#154126","success-40":"#1C5A34","success-50":"#257645","success-60":"#44A068","success-70":"#64C189","success-80":"#80DCA5","success-90":"#B4ECCB","success-95":"#D5F6E2","success-100":"#EFFCF4","warning-10":"#221302","warning-20":"#3B2204","warning-30":"#543106","warning-40":"#744408","warning-50":"#98590C","warning-60":"#D07A13","warning-70":"#E4A244","warning-80":"#F5C26C","warning-90":"#FADBA6","warning-95":"#FCECD4","warning-100":"#FDF7F0","error-10":"#330505","error-20":"#550808","error-30":"#750C0C","error-40":"#9E130F","error-50":"#CB2213","error-60":"#DE6C6C","error-70":"#E89B9B","error-80":"#EFBEBE","error-90":"#F5D9D9","error-95":"#F9ECEC","error-100":"#FCF7F7","info-10":"#021824","info-20":"#032B3F","info-30":"#053D59","info-40":"#065478","info-50":"#176E9B","info-60":"#5296BE","info-70":"#82B5DA","info-80":"#ACCFE7","info-90":"#CCE3F1","info-95":"#E3F1F8","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000","primary-inverse":"#FEAB10"},yt={"brand-10":"#2C0C0B","brand-20":"#4C1513","brand-30":"#6C1D1B","brand-40":"#922825","brand-50":"#BF3431","brand-60":"#F15D5A","brand-70":"#F69491","brand-80":"#FABAB7","brand-90":"#FCD7D2","brand-95":"#FFEBE7","brand-100":"#FFF6F4","primary-10":"#0011924","primary-20":"#032B40","primary-30":"#043D5A","primary-40":"#05547B","primary-50":"#096EA1","primary-60":"#2098D3","primary-70":"#5CB9E8","primary-80":"#8BD3F6","primary-90":"#BEE6FA","primary-95":"#E2F2FA","primary-100":"#F4FAFC","secondary-10":"#131529","secondary-20":"#222547","secondary-30":"#2F3565","secondary-40":"#42498B","secondary-50":"#5B62A7","secondary-60":"#858CBD","secondary-70":"#A8ADCF","secondary-80":"#C6C9E0","secondary-90":"#DDDFEC","secondary-95":"#EDEEF5","secondary-100":"#F8F8FB","neutral-10":"#161616","neutral-20":"#282828","neutral-30":"#393939","neutral-40":"#4E4E4E","neutral-50":"#686868","neutral-60":"#8E8E8E","neutral-70":"#AFAFB0","neutral-80":"#C7CACA","neutral-90":"#DDE1E2","neutral-95":"#EDEFEF","neutral-100":"#F9F9F9","success-10":"#081A0F","success-20":"#0E2D1B","success-30":"#154126","success-40":"#1C5A34","success-50":"#257645","success-60":"#44A068","success-70":"#64C189","success-80":"#80DCA5","success-90":"#B4ECCB","success-95":"#D5F6E2","success-100":"#EFFCF4","warning-10":"#221302","warning-20":"#3B2204","warning-30":"#543106","warning-40":"#744408","warning-50":"#98590C","warning-60":"#D07A13","warning-70":"#E4A244","warning-80":"#F5C26C","warning-90":"#FADBA6","warning-95":"#FCECD4","warning-100":"#FDF7F0","error-10":"#330505","error-20":"#550808","error-30":"#750C0C","error-40":"#9E130F","error-50":"#CB2213","error-60":"#DE6C6C","error-70":"#E89B9B","error-80":"#EFBEBE","error-90":"#F5D9D9","error-95":"#F9ECEC","error-100":"#FCF7F7","info-10":"#021824","info-20":"#032B3F","info-30":"#053D59","info-40":"#065478","info-50":"#176E9B","info-60":"#5296BE","info-70":"#82B5DA","info-80":"#ACCFE7","info-90":"#CCE3F1","info-95":"#E3F1F8","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000","primary-inverse":"#FEAB10"},ft={"brand-10":"#001A19","brand-20":"#002D2B","brand-30":"#00413D","brand-40":"#005954","brand-50":"#00756F","brand-60":"#03A098","brand-70":"#55BFBA","brand-80":"#92D6D2","brand-90":"#BFE7E5","brand-95":"#DDF2F1","brand-100":"#F4FBFA","primary-10":"#09191D","primary-20":"#102B34","primary-30":"#173D49","primary-40":"#205666","primary-50":"#2A7086","primary-60":"#2A7086","primary-70":"#8CB6C2","primary-80":"#B2CED6","primary-90":"#D1E2E7","primary-95":"#E8F0F3","primary-100":"#F9F8FC","secondary-10":"#001731","secondary-20":"#002752","secondary-30":"#003874","secondary-40":"#004D9F","secondary-50":"#5B62A7","secondary-60":"#858CBD","secondary-70":"#A8ADCF","secondary-80":"#C6C9E0","secondary-90":"#DDDFEC","secondary-95":"#EDEEF5","secondary-100":"#F8F8FB","neutral-10":"#161616","neutral-20":"#282828","neutral-30":"#393939","neutral-40":"#4E4E4E","neutral-50":"#686868","neutral-60":"#8E8E8E","neutral-70":"#AFAFB0","neutral-80":"#C7CACA","neutral-90":"#DDE1E2","neutral-95":"#EDEFEF","neutral-100":"#F9F9F9","success-10":"#081A0F","success-20":"#0E2D1B","success-30":"#154126","success-40":"#1C5A34","success-50":"#257645","success-60":"#44A068","success-70":"#64C189","success-80":"#80DCA5","success-90":"#B4ECCB","success-95":"#D5F6E2","success-100":"#EFFCF4","warning-10":"#221302","warning-20":"#3B2204","warning-30":"#543106","warning-40":"#744408","warning-50":"#98590C","warning-60":"#D07A13","warning-70":"#E4A244","warning-80":"#F5C26C","warning-90":"#FADBA6","warning-95":"#FCECD4","warning-100":"#FDF7F0","error-10":"#330505","error-20":"#550808","error-30":"#750C0C","error-40":"#9E130F","error-50":"#CB2213","error-60":"#DE6C6C","error-70":"#E89B9B","error-80":"#EFBEBE","error-90":"#F5D9D9","error-95":"#F9ECEC","error-100":"#FCF7F7","info-10":"#021824","info-20":"#032B3F","info-30":"#053D59","info-40":"#065478","info-50":"#176E9B","info-60":"#5296BE","info-70":"#82B5DA","info-80":"#ACCFE7","info-90":"#CCE3F1","info-95":"#E3F1F8","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000","primary-inverse":"#FEAB10"},pt={"brand-10":"#881317","brand-20":"#B5191E","brand-30":"#B5040A","brand-40":"#D0333F","brand-50":"#DC666F","brand-60":"#E28087","brand-70":"#E7999F","brand-80":"#EDB3B7","brand-90":"#F3CCCF","brand-95":"#F9E6E7","brand-100":"#FCF2F3","primary-10":"#000000","primary-20":"#191919","primary-30":"#333333","primary-40":"#4D4D4D","primary-50":"#666666","primary-60":"#808080","primary-70":"#999999","primary-80":"#B3B3B3","primary-90":"#E6E6E6","primary-95":"#F7F7F7","primary-100":"#FFFFFF","secondary-10":"#19151D","secondary-20":"#2B2533","secondary-30":"#3E3649","secondary-40":"#564A64","secondary-50":"#6F637D","secondary-60":"#948B9F","secondary-70":"#B3ACBB","secondary-80":"#CCC8D2","secondary-90":"#E1DEE4","secondary-95":"#EFEEF1","secondary-100":"#F9F8F9","neutral-10":"#000000","neutral-20":"#191919","neutral-30":"#333333","neutral-40":"#4D4D4D","neutral-50":"#666666","neutral-60":"#808080","neutral-70":"#999999","neutral-80":"#B3B3B3","neutral-90":"#E6E6E6","neutral-95":"#F7F7F7","neutral-100":"#FFFFFF","success-10":"#081A0F","success-20":"#0E2D1B","success-30":"#154126","success-40":"#1C5A34","success-50":"#257645","success-60":"#44A068","success-70":"#64C189","success-80":"#80DCA5","success-90":"#B4ECCB","success-95":"#D5F6E2","success-100":"#EFFCF4","warning-10":"#221302","warning-20":"#3B2204","warning-30":"#543106","warning-40":"#744408","warning-50":"#98590C","warning-60":"#D07A13","warning-70":"#E4A244","warning-80":"#F5C26C","warning-90":"#FADBA6","warning-95":"#FCECD4","warning-100":"#FDF7F0","error-10":"#330505","error-20":"#550808","error-30":"#750C0C","error-40":"#9E130F","error-50":"#CB2213","error-60":"#DE6C6C","error-70":"#E89B9B","error-80":"#EFBEBE","error-90":"#F5D9D9","error-95":"#F9ECEC","error-100":"#FCF7F7","info-10":"#021824","info-20":"#032B3F","info-30":"#053D59","info-40":"#065478","info-50":"#176E9B","info-60":"#5296BE","info-70":"#82B5DA","info-80":"#ACCFE7","info-90":"#CCE3F1","info-95":"#E3F1F8","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000","primary-inverse":"#FEAB10"},vt={"brand-10":"#0E123A","brand-20":"#191E65","brand-30":"#232B90","brand-40":"#303BC5","brand-50":"#494CFF","brand-60":"#AD6EFF","brand-70":"#AEA4FF","brand-80":"#C5C4FF","brand-90":"#DDDCFF","brand-95":"#EDECFF","brand-100":"#F8F8FF","primary-10":"#10152B","primary-20":"#1C254B","primary-30":"#28356C","primary-40":"#38489A","primary-50":"#4D5AD7","primary-60":"#7487F2","primary-70":"#9AAAFC","primary-80":"#BDC7FD","primary-90":"#DADFFB","primary-95":"#ECEEFE","primary-100":"#F7F8FF","secondary-10":"#19151D","secondary-20":"#2B2533","secondary-30":"#3E3649","secondary-40":"#564A64","secondary-50":"#6F637D","secondary-60":"#948B9F","secondary-70":"#B3ACBB","secondary-80":"#CCC8D2","secondary-90":"#E1DEE4","secondary-95":"#EFEEF1","secondary-100":"#F9F8F9","neutral-10":"#161616","neutral-20":"#282828","neutral-30":"#393939","neutral-40":"#4E4E4E","neutral-50":"#686868","neutral-60":"#8E8E8E","neutral-70":"#AFAFB0","neutral-80":"#C7CACA","neutral-90":"#DDE1E2","neutral-95":"#EDEFEF","neutral-100":"#F9F9F9","success-10":"#081A0F","success-20":"#0E2D1B","success-30":"#154126","success-40":"#1C5A34","success-50":"#257645","success-60":"#44A068","success-70":"#64C189","success-80":"#80DCA5","success-90":"#B4ECCB","success-95":"#D5F6E2","success-100":"#EFFCF4","warning-10":"#221302","warning-20":"#3B2204","warning-30":"#543106","warning-40":"#744408","warning-50":"#98590C","warning-60":"#D07A13","warning-70":"#E4A244","warning-80":"#F5C26C","warning-90":"#FADBA6","warning-95":"#FCECD4","warning-100":"#FDF7F0","error-10":"#330505","error-20":"#550808","error-30":"#750C0C","error-40":"#9E130F","error-50":"#CB2213","error-60":"#DE6C6C","error-70":"#E89B9B","error-80":"#EFBEBE","error-90":"#F5D9D9","error-95":"#F9ECEC","error-100":"#FCF7F7","info-10":"#021824","info-20":"#032B3F","info-30":"#053D59","info-40":"#065478","info-50":"#176E9B","info-60":"#5296BE","info-70":"#82B5DA","info-80":"#ACCFE7","info-90":"#CCE3F1","info-95":"#E3F1F8","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000","primary-inverse":"#FEAB10"},xt={"brand-10":"#170F39","brand-20":"#281C62","brand-30":"#38268B","brand-40":"#4D34BF","brand-50":"#5735DF","brand-60":"#9986F9","brand-70":"#B2A5F8","brand-80":"#CDC2FA","brand-90":"#E2DCFC","brand-95":"#EFEDFE","brand-100":"#FAF8FD","primary-10":"#170F39","primary-20":"#281C62","primary-30":"#38268B","primary-40":"#4D34BF","primary-50":"#5735DF","primary-60":"#9986F9","primary-70":"#B2A5F8","primary-80":"#CDC2FA","primary-90":"#E2DCFC","primary-95":"#EFEDFE","primary-100":"#FAF8FD","secondary-10":"#251204","secondary-20":"#401F08","secondary-30":"#5B2C0B","secondary-40":"#7E3D0F","secondary-50":"#B04900","secondary-60":"#E26E1C","secondary-70":"#FF9445","secondary-80":"#FFBB8E","secondary-90":"#FFD9BF","secondary-95":"#FFECDF","secondary-100":"#FFF8F3","neutral-10":"#161616","neutral-20":"#282828","neutral-30":"#393939","neutral-40":"#4E4E4E","neutral-50":"#686868","neutral-60":"#8E8E8E","neutral-70":"#AFAFB0","neutral-80":"#C7CACA","neutral-90":"#DDE1E2","neutral-95":"#EDEFEF","neutral-100":"#F9F9F9","success-10":"#031B15","success-20":"#082D24","success-30":"#094134","success-40":"#0D5947","success-50":"#10755E","success-60":"#16A181","success-70":"#1EC59D","success-80":"#6FDDC2","success-90":"#AFECDE","success-95":"#D5F5ED","success-100":"#F1FCF9","warning-10":"#1F1500","warning-20":"#362500","warning-30":"#4D3501","warning-40":"#6A4801","warning-50":"#8B6001","warning-60":"#BF8301","warning-70":"#EAA102","warning-80":"#FFBF34","warning-90":"#FFDC8F","warning-95":"#FFEDC7","warning-100":"#FFF8EA","error-10":"#270F10","error-20":"#441B1B","error-30":"#612627","error-40":"#853535","error-50":"#AF4546","error-60":"#EC6162","error-70":"#F29696","error-80":"#F7BBBC","error-90":"#FAD8D8","error-95":"#FCEAEA","error-100":"#FEF7F7","info-10":"#0F1627","info-20":"#1B2745","info-30":"#273763","info-40":"#354D88","info-50":"#4665B3","info-60":"#618AF6","info-70":"#8DADFF","info-80":"#B4C9FF","info-90":"#D3DFFF","info-95":"#E9EFFF","info-100":"#F5F8FF",white:"#FFFFFF",black:"#000000","primary-inverse":"#FEAB10"},wt={"brand-10":"#0E113C","brand-20":"#191E67","brand-30":"#232A92","brand-40":"#233FC2","brand-50":"#135CEA","brand-60":"#378FFB","brand-70":"#71B3FD","brand-80":"#9DCFFE","brand-90":"#C1E5FF","brand-95":"#DCF1FF","brand-100":"#F3FAFF","primary-10":"#0E113C","primary-20":"#191E67","primary-30":"#232A92","primary-40":"#233FC2","primary-50":"#135CEA","primary-60":"#378FFB","primary-70":"#71B3FD","primary-80":"#9DCFFE","primary-90":"#C1E5FF","primary-95":"#DCF1FF","primary-100":"#F3FAFF","secondary-10":"#34001F","secondary-20":"#540033","secondary-30":"#730045","secondary-40":"#9D0054","secondary-50":"#C61C64","secondary-60":"#DE6792","secondary-70":"#EB96B6","secondary-80":"#F5BAD2","secondary-90":"#FCD5E3","secondary-95":"#FDEBF1","secondary-100":"#FDF6F9","neutral-10":"#161616","neutral-20":"#282828","neutral-30":"#393939","neutral-40":"#4E4E4E","neutral-50":"#686868","neutral-60":"#8E8E8E","neutral-70":"#AFAFB0","neutral-80":"#C7CACA","neutral-90":"#DDE1E2","neutral-95":"#EDEFEF","neutral-100":"#F9F9F9","success-10":"#081A0F","success-20":"#0E2D1B","success-30":"#154126","success-40":"#1C5A34","success-50":"#257645","success-60":"#44A068","success-70":"#64C189","success-80":"#80DCA5","success-90":"#B4ECCB","success-95":"#D5F6E2","success-100":"#EFFCF4","warning-10":"#221302","warning-20":"#3B2204","warning-30":"#543106","warning-40":"#744408","warning-50":"#98590C","warning-60":"#D07A13","warning-70":"#E4A244","warning-80":"#F5C26C","warning-90":"#FADBA6","warning-95":"#FCECD4","warning-100":"#FDF7F0","error-10":"#330505","error-20":"#550808","error-30":"#750C0C","error-40":"#9E130F","error-50":"#CB2213","error-60":"#DE6C6C","error-70":"#E89B9B","error-80":"#EFBEBE","error-90":"#F5D9D9","error-95":"#F9ECEC","error-100":"#FCF7F7","info-10":"#021824","info-20":"#032B3F","info-30":"#053D59","info-40":"#065478","info-50":"#176E9B","info-60":"#5296BE","info-70":"#82B5DA","info-80":"#ACCFE7","info-90":"#CCE3F1","info-95":"#E3F1F8","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000","primary-inverse":"#FEAB10"},Dt={collections:{lifesg:mt,bookingsg:bt,rbs:vt,mylegacy:yt,ccube:ht,oneservice:ft,pa:pt,a11yplayground:xt,supportgowhere:wt},defaultValue:"lifesg"},Ft={collections:{lifesg:mt,bookingsg:bt,rbs:vt,mylegacy:yt,ccube:ht,oneservice:ft,pa:pt,a11yplayground:xt,supportgowhere:wt},defaultValue:"lifesg"},$t=e=>r=>{var t;const n=r.theme,a="dark"===(null==n?void 0:n.colourMode),i=lt(a?Ft:Dt,null==n?void 0:n.colourScheme),o=a?"primitiveColourDark":"primitiveColour",s=null===(t=null==n?void 0:n.overrides)||void 0===t?void 0:t[o];return s?st(i,e,s):i[e]},Et={"brand-10":$t("brand-10"),"brand-20":$t("brand-20"),"brand-30":$t("brand-30"),"brand-40":$t("brand-40"),"brand-50":$t("brand-50"),"brand-60":$t("brand-60"),"brand-70":$t("brand-70"),"brand-80":$t("brand-80"),"brand-90":$t("brand-90"),"brand-95":$t("brand-95"),"brand-100":$t("brand-100"),"primary-10":$t("primary-10"),"primary-20":$t("primary-20"),"primary-30":$t("primary-30"),"primary-40":$t("primary-40"),"primary-50":$t("primary-50"),"primary-60":$t("primary-60"),"primary-70":$t("primary-70"),"primary-80":$t("primary-80"),"primary-90":$t("primary-90"),"primary-95":$t("primary-95"),"primary-100":$t("primary-100"),"secondary-10":$t("secondary-10"),"secondary-20":$t("secondary-20"),"secondary-30":$t("secondary-30"),"secondary-40":$t("secondary-40"),"secondary-50":$t("secondary-50"),"secondary-60":$t("secondary-60"),"secondary-70":$t("secondary-70"),"secondary-80":$t("secondary-80"),"secondary-90":$t("secondary-90"),"secondary-95":$t("secondary-95"),"secondary-100":$t("secondary-100"),"neutral-10":$t("neutral-10"),"neutral-20":$t("neutral-20"),"neutral-30":$t("neutral-30"),"neutral-40":$t("neutral-40"),"neutral-50":$t("neutral-50"),"neutral-60":$t("neutral-60"),"neutral-70":$t("neutral-70"),"neutral-80":$t("neutral-80"),"neutral-90":$t("neutral-90"),"neutral-95":$t("neutral-95"),"neutral-100":$t("neutral-100"),"success-10":$t("success-10"),"success-20":$t("success-20"),"success-30":$t("success-30"),"success-40":$t("success-40"),"success-50":$t("success-50"),"success-60":$t("success-60"),"success-70":$t("success-70"),"success-80":$t("success-80"),"success-90":$t("success-90"),"success-95":$t("success-95"),"success-100":$t("success-100"),"warning-10":$t("warning-10"),"warning-20":$t("warning-20"),"warning-30":$t("warning-30"),"warning-40":$t("warning-40"),"warning-50":$t("warning-50"),"warning-60":$t("warning-60"),"warning-70":$t("warning-70"),"warning-80":$t("warning-80"),"warning-90":$t("warning-90"),"warning-95":$t("warning-95"),"warning-100":$t("warning-100"),"error-10":$t("error-10"),"error-20":$t("error-20"),"error-30":$t("error-30"),"error-40":$t("error-40"),"error-50":$t("error-50"),"error-60":$t("error-60"),"error-70":$t("error-70"),"error-80":$t("error-80"),"error-90":$t("error-90"),"error-95":$t("error-95"),"error-100":$t("error-100"),"info-10":$t("info-10"),"info-20":$t("info-20"),"info-30":$t("info-30"),"info-40":$t("info-40"),"info-50":$t("info-50"),"info-60":$t("info-60"),"info-70":$t("info-70"),"info-80":$t("info-80"),"info-90":$t("info-90"),"info-95":$t("info-95"),"info-100":$t("info-100"),white:$t("white"),black:$t("black"),"primary-inverse":$t("primary-inverse")},Ct={text:$t("neutral-20"),"text-subtle":$t("neutral-30"),"text-subtler":$t("neutral-50"),"text-subtlest":$t("neutral-60"),"text-primary":$t("primary-50"),"text-hover":$t("primary-40"),"text-selected":$t("primary-50"),"text-selected-hover":$t("primary-40"),"text-disabled":$t("neutral-50"),"text-disabled-subtle":$t("neutral-60"),"text-disabled-subtlest":$t("neutral-80"),"text-selected-disabled":$t("neutral-20"),"text-success":$t("success-40"),"text-warning":$t("warning-40"),"text-error":$t("error-40"),"text-info":$t("info-40"),"text-inverse":$t("white"),icon:$t("neutral-50"),"icon-subtle":$t("neutral-60"),"icon-strongest":$t("neutral-20"),"icon-primary":$t("primary-50"),"icon-primary-subtle":$t("primary-60"),"icon-primary-subtlest":$t("primary-70"),"icon-hover":$t("primary-40"),"icon-selected":$t("primary-50"),"icon-selected-hover":$t("primary-40"),"icon-disabled":$t("neutral-50"),"icon-disabled-subtle":$t("neutral-60"),"icon-selected-disabled":$t("neutral-60"),"icon-success":$t("success-50"),"icon-warning":$t("warning-60"),"icon-error":$t("error-50"),"icon-error-strong":$t("error-40"),"icon-info":$t("info-50"),"icon-inverse":$t("white"),"icon-primary-inverse":$t("primary-inverse"),border:$t("neutral-90"),"border-strong":$t("neutral-70"),"border-stronger":$t("neutral-50"),"border-primary":$t("primary-50"),"border-primary-subtle":$t("primary-60"),"border-hover":$t("primary-90"),"border-hover-strong":$t("primary-60"),"border-selected":$t("primary-50"),"border-selected-subtle":$t("primary-70"),"border-selected-subtlest":$t("primary-90"),"border-selected-hover":$t("primary-40"),"border-focus":$t("primary-60"),"border-focus-strong":$t("primary-50"),"border-disabled":$t("neutral-90"),"border-selected-disabled":$t("neutral-70"),"border-success":$t("success-60"),"border-warning":$t("warning-60"),"border-error":$t("error-60"),"border-error-focus":$t("error-60"),"border-error-focus-strong":$t("error-40"),"border-error-strong":$t("error-40"),"border-info":$t("info-60"),bg:$t("white"),"bg-strong":$t("neutral-100"),"bg-stronger":$t("neutral-95"),"bg-strongest":$t("neutral-90"),"bg-hover":$t("primary-95"),"bg-hover-strong":$t("primary-90"),"bg-hover-subtle":$t("primary-100"),"bg-hover-neutral":$t("neutral-100"),"bg-hover-neutral-strong":$t("neutral-90"),"bg-selected":$t("primary-95"),"bg-selected-hover":$t("primary-90"),"bg-selected-strong":$t("primary-90"),"bg-selected-stronger":$t("primary-70"),"bg-selected-strongest":$t("primary-50"),"bg-selected-strongest-hover":$t("primary-40"),"bg-disabled":$t("neutral-95"),"bg-selected-disabled":$t("neutral-95"),"bg-selected-stronger-disabled":$t("neutral-70"),"bg-success":$t("success-100"),"bg-success-hover":$t("success-95"),"bg-success-strong":$t("success-50"),"bg-success-strong-hover":$t("success-40"),"bg-warning":$t("warning-100"),"bg-warning-hover":$t("warning-95"),"bg-warning-strong":$t("warning-50"),"bg-warning-strong-hover":$t("warning-40"),"bg-info":$t("info-100"),"bg-info-hover":$t("info-95"),"bg-info-strong":$t("info-50"),"bg-info-strong-hover":$t("info-40"),"bg-error":$t("error-100"),"bg-error-hover":$t("error-95"),"bg-error-strong":$t("error-50"),"bg-error-strong-hover":$t("error-40"),"bg-inverse":$t("neutral-20"),"bg-inverse-subtle":$t("neutral-30"),"bg-inverse-subtler":$t("neutral-50"),"bg-inverse-subtlest":$t("neutral-60"),"bg-inverse-hover":$t("neutral-40"),"bg-primary":$t("primary-50"),"bg-primary-subtle":$t("primary-60"),"bg-primary-subtler":$t("primary-95"),"bg-primary-subtlest":$t("primary-100"),"bg-available":"#6DD0A1","bg-primary-hover":$t("primary-40"),"bg-primary-subtlest-hover":$t("primary-90"),"bg-primary-subtlest-selected":$t("primary-90"),"overlay-strong":"rgba(40, 40, 40, 0.85)","overlay-subtle":"rgba(40, 40, 40, 0.20)",hyperlink:$t("primary-50"),"hyperlink-hover":$t("primary-40"),"hyperlink-visited":$t("primary-40"),"hyperlink-inverse":$t("primary-inverse"),"focus-ring":$t("black"),"focus-ring-inverse":$t("white")},St={text:$t("neutral-100"),"text-subtle":$t("neutral-80"),"text-subtler":$t("neutral-60"),"text-subtlest":$t("neutral-50"),"text-primary":$t("primary-60"),"text-hover":$t("primary-70"),"text-selected":$t("primary-60"),"text-selected-hover":$t("primary-70"),"text-disabled":$t("neutral-60"),"text-disabled-subtle":$t("neutral-50"),"text-disabled-subtlest":$t("neutral-30"),"text-selected-disabled":$t("neutral-90"),"text-success":$t("success-70"),"text-warning":$t("warning-70"),"text-error":$t("error-70"),"text-info":$t("info-70"),"text-inverse":$t("black"),icon:$t("neutral-60"),"icon-subtle":$t("neutral-50"),"icon-strongest":$t("neutral-90"),"icon-primary":$t("primary-60"),"icon-primary-subtle":$t("primary-50"),"icon-primary-subtlest":$t("primary-40"),"icon-hover":$t("primary-70"),"icon-selected":$t("primary-60"),"icon-selected-hover":$t("primary-70"),"icon-disabled":$t("neutral-60"),"icon-disabled-subtle":$t("neutral-50"),"icon-selected-disabled":$t("neutral-50"),"icon-success":$t("success-60"),"icon-warning":$t("warning-50"),"icon-error":$t("error-60"),"icon-error-strong":$t("error-70"),"icon-info":$t("info-60"),"icon-inverse":$t("black"),"icon-primary-inverse":$t("primary-inverse"),border:$t("neutral-20"),"border-strong":$t("neutral-40"),"border-stronger":$t("neutral-60"),"border-primary":$t("primary-60"),"border-primary-subtle":$t("primary-50"),"border-hover":$t("primary-20"),"border-hover-strong":$t("primary-50"),"border-selected":$t("primary-60"),"border-selected-subtle":$t("primary-40"),"border-selected-subtlest":$t("primary-20"),"border-selected-hover":$t("primary-70"),"border-focus":$t("primary-50"),"border-focus-strong":$t("primary-60"),"border-disabled":$t("neutral-20"),"border-selected-disabled":$t("neutral-40"),"border-success":$t("success-50"),"border-warning":$t("warning-50"),"border-error":$t("error-50"),"border-error-focus":$t("error-50"),"border-error-focus-strong":$t("error-70"),"border-error-strong":$t("error-70"),"border-info":$t("info-50"),bg:$t("black"),"bg-strong":$t("neutral-10"),"bg-stronger":$t("neutral-20"),"bg-strongest":$t("neutral-20"),"bg-hover":$t("primary-20"),"bg-hover-strong":$t("primary-20"),"bg-hover-subtle":$t("primary-10"),"bg-hover-neutral":$t("neutral-10"),"bg-hover-neutral-strong":$t("neutral-20"),"bg-selected":$t("primary-20"),"bg-selected-hover":$t("primary-20"),"bg-selected-strong":$t("primary-20"),"bg-selected-stronger":$t("primary-40"),"bg-selected-strongest":$t("primary-60"),"bg-selected-strongest-hover":$t("primary-70"),"bg-disabled":$t("neutral-20"),"bg-selected-disabled":$t("neutral-20"),"bg-selected-stronger-disabled":$t("neutral-40"),"bg-success":$t("success-10"),"bg-success-hover":$t("success-20"),"bg-success-strong":$t("success-60"),"bg-success-strong-hover":$t("success-70"),"bg-warning":$t("warning-10"),"bg-warning-hover":$t("warning-20"),"bg-warning-strong":$t("warning-60"),"bg-warning-strong-hover":$t("warning-70"),"bg-info":$t("info-10"),"bg-info-hover":$t("info-20"),"bg-info-strong":$t("info-60"),"bg-info-strong-hover":$t("info-70"),"bg-error":$t("error-10"),"bg-error-hover":$t("error-20"),"bg-error-strong":$t("error-60"),"bg-error-strong-hover":$t("error-70"),"bg-inverse":$t("neutral-90"),"bg-inverse-subtle":$t("neutral-80"),"bg-inverse-subtler":$t("neutral-60"),"bg-inverse-subtlest":$t("neutral-50"),"bg-inverse-hover":$t("neutral-70"),"bg-primary":$t("primary-60"),"bg-primary-subtle":$t("primary-50"),"bg-primary-subtler":$t("primary-20"),"bg-primary-subtlest":$t("primary-10"),"bg-available":"#185339","bg-primary-hover":$t("primary-70"),"bg-primary-subtlest-hover":$t("primary-20"),"bg-primary-subtlest-selected":$t("primary-20"),"overlay-strong":"rgba(78, 78, 78, 0.80)","overlay-subtle":"rgba(78, 78, 78, 0.50)",hyperlink:$t("primary-60"),"hyperlink-hover":$t("primary-70"),"hyperlink-visited":$t("primary-70"),"hyperlink-inverse":$t("primary-inverse"),"focus-ring":$t("primary-60"),"focus-ring-inverse":$t("black")},Bt={text:$t("neutral-30"),"text-subtle":$t("neutral-40"),"text-subtler":$t("neutral-50"),"text-subtlest":$t("neutral-70"),"text-primary":$t("neutral-10"),"text-hover":$t("neutral-70"),"text-selected":$t("neutral-20"),"text-selected-hover":$t("neutral-10"),"text-disabled":$t("neutral-50"),"text-disabled-subtle":$t("neutral-60"),"text-disabled-subtlest":$t("neutral-80"),"text-selected-disabled":$t("neutral-40"),"text-success":$t("success-40"),"text-warning":$t("warning-40"),"text-error":$t("brand-30"),"text-info":$t("neutral-40"),"text-inverse":$t("neutral-100"),icon:$t("neutral-40"),"icon-subtle":$t("neutral-50"),"icon-strongest":$t("neutral-10"),"icon-primary":$t("neutral-10"),"icon-primary-subtle":$t("neutral-30"),"icon-primary-subtlest":$t("neutral-60"),"icon-hover":$t("neutral-70"),"icon-selected":$t("brand-20"),"icon-selected-hover":$t("brand-10"),"icon-disabled":$t("neutral-50"),"icon-disabled-subtle":$t("neutral-60"),"icon-selected-disabled":$t("neutral-40"),"icon-success":$t("success-40"),"icon-warning":$t("warning-60"),"icon-error":$t("brand-30"),"icon-error-strong":$t("brand-10"),"icon-info":$t("neutral-40"),"icon-inverse":$t("neutral-100"),"icon-primary-inverse":"#F9B371",border:$t("neutral-90"),"border-strong":$t("neutral-30"),"border-stronger":$t("neutral-20"),"border-primary":$t("neutral-40"),"border-primary-subtle":$t("neutral-60"),"border-hover":$t("neutral-80"),"border-hover-strong":$t("neutral-10"),"border-selected":$t("brand-20"),"border-selected-subtle":$t("neutral-40"),"border-selected-subtlest":$t("neutral-70"),"border-selected-hover":$t("neutral-10"),"border-focus":$t("neutral-20"),"border-focus-strong":$t("neutral-10"),"border-disabled":$t("neutral-90"),"border-selected-disabled":$t("neutral-80"),"border-success":$t("success-40"),"border-warning":$t("warning-60"),"border-error":$t("brand-30"),"border-error-focus":$t("brand-20"),"border-error-focus-strong":$t("brand-10"),"border-error-strong":$t("brand-20"),"border-info":$t("neutral-40"),bg:$t("neutral-100"),"bg-strong":$t("neutral-95"),"bg-stronger":$t("neutral-90"),"bg-strongest":$t("neutral-80"),"bg-hover":$t("brand-90"),"bg-hover-strong":$t("brand-80"),"bg-hover-subtle":$t("neutral-90"),"bg-hover-neutral":$t("neutral-90"),"bg-hover-neutral-strong":$t("neutral-90"),"bg-selected":$t("brand-100"),"bg-selected-hover":$t("brand-30"),"bg-selected-strong":$t("brand-50"),"bg-selected-stronger":$t("brand-40"),"bg-selected-strongest":$t("brand-20"),"bg-selected-strongest-hover":$t("brand-10"),"bg-disabled":$t("neutral-90"),"bg-selected-disabled":$t("neutral-90"),"bg-selected-stronger-disabled":$t("neutral-80"),"bg-success":$t("success-100"),"bg-success-hover":$t("success-95"),"bg-success-strong":$t("success-50"),"bg-success-strong-hover":$t("success-40"),"bg-warning":$t("warning-100"),"bg-warning-hover":$t("warning-95"),"bg-warning-strong":$t("warning-50"),"bg-warning-strong-hover":$t("warning-40"),"bg-info":$t("neutral-95"),"bg-info-hover":$t("info-95"),"bg-info-strong":$t("info-50"),"bg-info-strong-hover":$t("info-40"),"bg-error":$t("brand-100"),"bg-error-hover":$t("error-95"),"bg-error-strong":$t("error-50"),"bg-error-strong-hover":$t("error-40"),"bg-inverse":$t("neutral-40"),"bg-inverse-subtle":$t("neutral-60"),"bg-inverse-subtler":$t("neutral-70"),"bg-inverse-subtlest":$t("neutral-80"),"bg-inverse-hover":$t("neutral-30"),"bg-primary":$t("brand-20"),"bg-primary-subtle":$t("brand-60"),"bg-primary-subtler":$t("brand-80"),"bg-primary-subtlest":$t("brand-100"),"bg-available":$t("success-60"),"bg-primary-hover":$t("brand-10"),"bg-primary-subtlest-hover":$t("brand-80"),"bg-primary-subtlest-selected":$t("brand-40"),"overlay-strong":"rgba(25, 25, 25, 0.95)","overlay-subtle":"rgba(25, 25, 25, 0.20)",hyperlink:$t("neutral-10"),"hyperlink-hover":$t("neutral-40"),"hyperlink-visited":$t("neutral-50"),"hyperlink-inverse":"#F8AE68","focus-ring":$t("black"),"focus-ring-inverse":$t("white")},At={text:$t("neutral-20"),"text-subtle":$t("neutral-30"),"text-subtler":$t("neutral-50"),"text-subtlest":$t("neutral-60"),"text-primary":$t("primary-50"),"text-hover":$t("primary-40"),"text-selected":$t("primary-50"),"text-selected-hover":$t("primary-40"),"text-disabled":$t("neutral-50"),"text-disabled-subtle":$t("neutral-60"),"text-disabled-subtlest":$t("neutral-80"),"text-selected-disabled":$t("neutral-20"),"text-success":$t("success-40"),"text-warning":$t("warning-40"),"text-error":$t("error-40"),"text-info":$t("info-40"),"text-inverse":$t("white"),icon:$t("neutral-50"),"icon-subtle":$t("neutral-60"),"icon-strongest":$t("neutral-20"),"icon-primary":$t("primary-50"),"icon-primary-subtle":$t("primary-60"),"icon-primary-subtlest":$t("primary-70"),"icon-hover":$t("primary-40"),"icon-selected":$t("primary-50"),"icon-selected-hover":$t("primary-40"),"icon-disabled":$t("neutral-50"),"icon-disabled-subtle":$t("neutral-60"),"icon-selected-disabled":$t("neutral-60"),"icon-success":$t("success-50"),"icon-warning":$t("warning-60"),"icon-error":$t("error-50"),"icon-error-strong":$t("error-40"),"icon-info":$t("info-50"),"icon-inverse":$t("white"),"icon-primary-inverse":$t("primary-inverse"),border:$t("neutral-90"),"border-strong":$t("neutral-70"),"border-stronger":$t("neutral-50"),"border-primary":$t("primary-50"),"border-primary-subtle":$t("primary-60"),"border-hover":$t("primary-90"),"border-hover-strong":$t("primary-60"),"border-selected":$t("primary-50"),"border-selected-subtle":$t("primary-70"),"border-selected-subtlest":$t("primary-90"),"border-selected-hover":$t("primary-40"),"border-focus":$t("primary-60"),"border-focus-strong":$t("primary-50"),"border-disabled":$t("neutral-90"),"border-selected-disabled":$t("neutral-70"),"border-success":$t("success-60"),"border-warning":$t("warning-60"),"border-error":$t("error-60"),"border-error-focus":$t("error-60"),"border-error-focus-strong":$t("error-40"),"border-error-strong":$t("error-40"),"border-info":$t("info-60"),bg:$t("white"),"bg-strong":$t("neutral-100"),"bg-stronger":$t("neutral-95"),"bg-strongest":$t("neutral-90"),"bg-hover":$t("primary-95"),"bg-hover-strong":$t("primary-90"),"bg-hover-subtle":$t("primary-100"),"bg-hover-neutral":$t("neutral-100"),"bg-hover-neutral-strong":$t("neutral-90"),"bg-selected":$t("primary-95"),"bg-selected-hover":$t("primary-90"),"bg-selected-strong":$t("primary-90"),"bg-selected-stronger":$t("primary-70"),"bg-selected-strongest":$t("primary-50"),"bg-selected-strongest-hover":$t("primary-40"),"bg-disabled":$t("neutral-95"),"bg-selected-disabled":$t("neutral-95"),"bg-selected-stronger-disabled":$t("neutral-70"),"bg-success":$t("success-100"),"bg-success-hover":$t("success-95"),"bg-success-strong":$t("success-50"),"bg-success-strong-hover":$t("success-40"),"bg-warning":$t("warning-100"),"bg-warning-hover":$t("warning-95"),"bg-warning-strong":$t("warning-50"),"bg-warning-strong-hover":$t("warning-40"),"bg-info":$t("info-100"),"bg-info-hover":$t("info-95"),"bg-info-strong":$t("info-50"),"bg-info-strong-hover":$t("info-40"),"bg-error":$t("error-100"),"bg-error-hover":$t("error-95"),"bg-error-strong":$t("error-50"),"bg-error-strong-hover":$t("error-40"),"bg-inverse":$t("neutral-20"),"bg-inverse-subtle":$t("neutral-30"),"bg-inverse-subtler":$t("neutral-50"),"bg-inverse-subtlest":$t("neutral-60"),"bg-inverse-hover":$t("neutral-40"),"bg-primary":$t("primary-50"),"bg-primary-subtle":$t("primary-60"),"bg-primary-subtler":$t("primary-95"),"bg-primary-subtlest":$t("primary-100"),"bg-available":"#6DD0A1","bg-primary-hover":$t("primary-40"),"bg-primary-subtlest-hover":$t("primary-90"),"bg-primary-subtlest-selected":$t("primary-90"),"overlay-strong":"rgba(40, 40, 40, 0.85)","overlay-subtle":"rgba(40, 40, 40, 0.20)",hyperlink:$t("primary-50"),"hyperlink-hover":$t("primary-40"),"hyperlink-visited":$t("primary-40"),"hyperlink-inverse":$t("primary-inverse"),"focus-ring":$t("black"),"focus-ring-inverse":$t("white")},kt={text:$t("neutral-100"),"text-subtle":$t("neutral-80"),"text-subtler":$t("neutral-60"),"text-subtlest":$t("neutral-50"),"text-primary":$t("primary-60"),"text-hover":$t("primary-70"),"text-selected":$t("primary-60"),"text-selected-hover":$t("primary-70"),"text-disabled":$t("neutral-60"),"text-disabled-subtle":$t("neutral-50"),"text-disabled-subtlest":$t("neutral-30"),"text-selected-disabled":$t("neutral-90"),"text-success":$t("success-70"),"text-warning":$t("warning-70"),"text-error":$t("error-70"),"text-info":$t("info-70"),"text-inverse":$t("black"),icon:$t("neutral-60"),"icon-subtle":$t("neutral-50"),"icon-strongest":$t("neutral-90"),"icon-primary":$t("primary-60"),"icon-primary-subtle":$t("primary-50"),"icon-primary-subtlest":$t("primary-40"),"icon-hover":$t("primary-70"),"icon-selected":$t("primary-60"),"icon-selected-hover":$t("primary-70"),"icon-disabled":$t("neutral-60"),"icon-disabled-subtle":$t("neutral-50"),"icon-selected-disabled":$t("neutral-50"),"icon-success":$t("success-60"),"icon-warning":$t("warning-50"),"icon-error":$t("error-60"),"icon-error-strong":$t("error-70"),"icon-info":$t("info-60"),"icon-inverse":$t("black"),"icon-primary-inverse":$t("primary-inverse"),border:$t("neutral-20"),"border-strong":$t("neutral-40"),"border-stronger":$t("neutral-60"),"border-primary":$t("primary-60"),"border-primary-subtle":$t("primary-50"),"border-hover":$t("primary-20"),"border-hover-strong":$t("primary-50"),"border-selected":$t("primary-60"),"border-selected-subtle":$t("primary-40"),"border-selected-subtlest":$t("primary-20"),"border-selected-hover":$t("primary-70"),"border-focus":$t("primary-50"),"border-focus-strong":$t("primary-60"),"border-disabled":$t("neutral-20"),"border-selected-disabled":$t("neutral-40"),"border-success":$t("success-50"),"border-warning":$t("warning-50"),"border-error":$t("error-50"),"border-error-focus":$t("error-50"),"border-error-focus-strong":$t("error-70"),"border-error-strong":$t("error-70"),"border-info":$t("info-50"),bg:$t("black"),"bg-strong":$t("neutral-10"),"bg-stronger":$t("neutral-20"),"bg-strongest":$t("neutral-20"),"bg-hover":$t("primary-20"),"bg-hover-strong":$t("primary-20"),"bg-hover-subtle":$t("primary-10"),"bg-hover-neutral":$t("neutral-10"),"bg-hover-neutral-strong":$t("neutral-20"),"bg-selected":$t("primary-20"),"bg-selected-hover":$t("primary-20"),"bg-selected-strong":$t("primary-20"),"bg-selected-stronger":$t("primary-40"),"bg-selected-strongest":$t("primary-60"),"bg-selected-strongest-hover":$t("primary-70"),"bg-disabled":$t("neutral-20"),"bg-selected-disabled":$t("neutral-20"),"bg-selected-stronger-disabled":$t("neutral-40"),"bg-success":$t("success-10"),"bg-success-hover":$t("success-20"),"bg-success-strong":$t("success-60"),"bg-success-strong-hover":$t("success-70"),"bg-warning":$t("warning-10"),"bg-warning-hover":$t("warning-20"),"bg-warning-strong":$t("warning-60"),"bg-warning-strong-hover":$t("warning-70"),"bg-info":$t("info-10"),"bg-info-hover":$t("info-20"),"bg-info-strong":$t("info-60"),"bg-info-strong-hover":$t("info-70"),"bg-error":$t("error-10"),"bg-error-hover":$t("error-20"),"bg-error-strong":$t("error-60"),"bg-error-strong-hover":$t("error-70"),"bg-inverse":$t("neutral-90"),"bg-inverse-subtle":$t("neutral-80"),"bg-inverse-subtler":$t("neutral-60"),"bg-inverse-subtlest":$t("neutral-50"),"bg-inverse-hover":$t("neutral-70"),"bg-primary":$t("primary-60"),"bg-primary-subtle":$t("primary-50"),"bg-primary-subtler":$t("primary-20"),"bg-primary-subtlest":$t("primary-10"),"bg-available":"#185339","bg-primary-hover":$t("primary-70"),"bg-primary-subtlest-hover":$t("primary-20"),"bg-primary-subtlest-selected":$t("primary-20"),"overlay-strong":"rgba(78, 78, 78, 0.80)","overlay-subtle":"rgba(78, 78, 78, 0.50)",hyperlink:$t("primary-60"),"hyperlink-hover":$t("primary-70"),"hyperlink-visited":$t("primary-70"),"hyperlink-inverse":$t("primary-inverse"),"focus-ring":$t("primary-60"),"focus-ring-inverse":$t("black")},Ot={collections:{lifesg:Ct,bookingsg:Ct,rbs:Ct,mylegacy:Ct,ccube:Ct,oneservice:Ct,pa:Bt,a11yplayground:At,supportgowhere:Ct},defaultValue:"lifesg"},Mt={collections:{lifesg:St,bookingsg:St,rbs:St,mylegacy:St,ccube:St,oneservice:St,pa:St,a11yplayground:kt,supportgowhere:St},defaultValue:"lifesg"},zt=e=>r=>{var t;const n=r.theme,a="dark"===(null==n?void 0:n.colourMode),i=lt(a?Mt:Ot,null==n?void 0:n.colourScheme),o=a?"semanticColourDark":"semanticColour",s=null===(t=null==n?void 0:n.overrides)||void 0===t?void 0:t[o],l=s?st(i,e,s):i[e];return"function"==typeof l?l(r):l},Yt={text:zt("text"),"text-subtle":zt("text-subtle"),"text-subtler":zt("text-subtler"),"text-subtlest":zt("text-subtlest"),"text-primary":zt("text-primary"),"text-hover":zt("text-hover"),"text-selected":zt("text-selected"),"text-selected-hover":zt("text-selected-hover"),"text-disabled":zt("text-disabled"),"text-disabled-subtle":zt("text-disabled-subtle"),"text-disabled-subtlest":zt("text-disabled-subtlest"),"text-selected-disabled":zt("text-selected-disabled"),"text-success":zt("text-success"),"text-warning":zt("text-warning"),"text-error":zt("text-error"),"text-info":zt("text-info"),"text-inverse":zt("text-inverse"),icon:zt("icon"),"icon-subtle":zt("icon-subtle"),"icon-strongest":zt("icon-strongest"),"icon-primary":zt("icon-primary"),"icon-primary-subtle":zt("icon-primary-subtle"),"icon-primary-subtlest":zt("icon-primary-subtlest"),"icon-hover":zt("icon-hover"),"icon-selected":zt("icon-selected"),"icon-selected-hover":zt("icon-selected-hover"),"icon-disabled":zt("icon-disabled"),"icon-disabled-subtle":zt("icon-disabled-subtle"),"icon-selected-disabled":zt("icon-selected-disabled"),"icon-success":zt("icon-success"),"icon-warning":zt("icon-warning"),"icon-error":zt("icon-error"),"icon-error-strong":zt("icon-error-strong"),"icon-info":zt("icon-info"),"icon-inverse":zt("icon-inverse"),"icon-primary-inverse":zt("icon-primary-inverse"),border:zt("border"),"border-strong":zt("border-strong"),"border-stronger":zt("border-stronger"),"border-primary":zt("border-primary"),"border-primary-subtle":zt("border-primary-subtle"),"border-hover":zt("border-hover"),"border-hover-strong":zt("border-hover-strong"),"border-selected":zt("border-selected"),"border-selected-subtle":zt("border-selected-subtle"),"border-selected-subtlest":zt("border-selected-subtlest"),"border-selected-hover":zt("border-selected-hover"),"border-focus":zt("border-focus"),"border-focus-strong":zt("border-focus-strong"),"border-disabled":zt("border-disabled"),"border-selected-disabled":zt("border-selected-disabled"),"border-success":zt("border-success"),"border-warning":zt("border-warning"),"border-error":zt("border-error"),"border-error-focus":zt("border-error-focus"),"border-error-focus-strong":zt("border-error-focus-strong"),"border-error-strong":zt("border-error-strong"),"border-info":zt("border-info"),bg:zt("bg"),"bg-strong":zt("bg-strong"),"bg-stronger":zt("bg-stronger"),"bg-strongest":zt("bg-strongest"),"bg-hover":zt("bg-hover"),"bg-hover-strong":zt("bg-hover-strong"),"bg-hover-subtle":zt("bg-hover-subtle"),"bg-hover-neutral":zt("bg-hover-neutral"),"bg-hover-neutral-strong":zt("bg-hover-neutral-strong"),"bg-selected":zt("bg-selected"),"bg-selected-hover":zt("bg-selected-hover"),"bg-selected-strong":zt("bg-selected-strong"),"bg-selected-stronger":zt("bg-selected-stronger"),"bg-selected-strongest":zt("bg-selected-strongest"),"bg-selected-strongest-hover":zt("bg-selected-strongest-hover"),"bg-disabled":zt("bg-disabled"),"bg-selected-disabled":zt("bg-selected-disabled"),"bg-selected-stronger-disabled":zt("bg-selected-stronger-disabled"),"bg-success":zt("bg-success"),"bg-success-hover":zt("bg-success-hover"),"bg-success-strong":zt("bg-success-strong"),"bg-success-strong-hover":zt("bg-success-strong-hover"),"bg-warning":zt("bg-warning"),"bg-warning-hover":zt("bg-warning-hover"),"bg-warning-strong":zt("bg-warning-strong"),"bg-warning-strong-hover":zt("bg-warning-strong-hover"),"bg-info":zt("bg-info"),"bg-info-hover":zt("bg-info-hover"),"bg-info-strong":zt("bg-info-strong"),"bg-info-strong-hover":zt("bg-info-strong-hover"),"bg-error":zt("bg-error"),"bg-error-hover":zt("bg-error-hover"),"bg-error-strong":zt("bg-error-strong"),"bg-error-strong-hover":zt("bg-error-strong-hover"),"bg-inverse":zt("bg-inverse"),"bg-inverse-subtle":zt("bg-inverse-subtle"),"bg-inverse-subtler":zt("bg-inverse-subtler"),"bg-inverse-subtlest":zt("bg-inverse-subtlest"),"bg-inverse-hover":zt("bg-inverse-hover"),"bg-primary":zt("bg-primary"),"bg-primary-subtle":zt("bg-primary-subtle"),"bg-primary-subtler":zt("bg-primary-subtler"),"bg-primary-subtlest":zt("bg-primary-subtlest"),"bg-available":zt("bg-available"),"bg-primary-hover":zt("bg-primary-hover"),"bg-primary-subtlest-hover":zt("bg-primary-subtlest-hover"),"bg-primary-subtlest-selected":zt("bg-primary-subtlest-selected"),"overlay-strong":zt("overlay-strong"),"overlay-subtle":zt("overlay-subtle"),hyperlink:zt("hyperlink"),"hyperlink-hover":zt("hyperlink-hover"),"hyperlink-visited":zt("hyperlink-visited"),"hyperlink-inverse":zt("hyperlink-inverse"),"focus-ring":zt("focus-ring"),"focus-ring-inverse":zt("focus-ring-inverse")},jt={collections:{default:{solid:e=>r=>{var t,n,a;const{thickness:i,radius:o,colour:s}=e||{},l=null!==(t="function"==typeof i?i(r):i)&&void 0!==t?t:ut["width-010"](r),d=null!==(n="function"==typeof o?o(r):o)&&void 0!==n?n:0,c=null!==(a="function"==typeof s?s(r):s)&&void 0!==a?a:Yt.border(r),u=ut.solid;return p`
            border: ${l} ${u} ${c};
            border-radius: ${d};
        `},"dashed-default":e=>r=>{var t,n,a;const{thickness:i,radius:o,colour:s}=e||{},l=null!==(t="function"==typeof i?i(r):i)&&void 0!==t?t:ut["width-010"](r),d=null!==(n="function"==typeof o?o(r):o)&&void 0!==n?n:0,c=null!==(a="function"==typeof s?s(r):s)&&void 0!==a?a:Yt.border(r),u=encodeURIComponent(`<svg width='100%' height='100%' xmlns='http://www.w3.org/2000/svg'><rect width='100%' height='100%' fill='none' rx='${d}' ry='${d}' stroke='${c}' stroke-width='${l}' stroke-dasharray='4, 8' stroke-dashoffset='0' stroke-linecap='square'/></svg>`);return p`
            background-image: url("data:image/svg+xml,${u}");
            border-radius: ${d};
        `}}},defaultValue:"default"},Tt=e=>1===e.length&&"theme"in e[0],_t=e=>(...r)=>t=>{const n=Tt(r)?[]:r,a=Tt(r)?r[0]:t,i=a.theme;return(0,lt(jt,null==i?void 0:i.borderScheme)[e])(...n)(a)},Rt={solid:_t("solid"),"dashed-default":_t("dashed-default")},It={collections:{default:{"xxs-min":0,"xxs-max":320,"xs-min":321,"xs-max":375,"sm-min":376,"sm-max":420,"md-min":421,"md-max":767,"lg-min":768,"lg-max":1023,"xl-min":1024,"xl-max":1440,"xxl-min":1441,"xxs-column":8,"xs-column":8,"sm-column":8,"md-column":8,"lg-column":12,"xl-column":12,"xxl-column":12,"xxs-gutter":16,"xs-gutter":16,"sm-gutter":16,"md-gutter":16,"lg-gutter":32,"xl-gutter":32,"xxl-gutter":32,"xxs-margin":24,"xs-margin":24,"sm-margin":24,"md-margin":24,"lg-margin":48,"xl-margin":48,"xxl-margin":48}},defaultValue:"default"},Lt=e=>r=>{var t;const n=r.theme,a=lt(It,null==n?void 0:n.breakpointScheme);let i;return i=(null===(t=null==n?void 0:n.overrides)||void 0===t?void 0:t.breakpoint)?st(a,e,n.overrides.breakpoint):a[e],i},Ht={"xxs-min":Lt("xxs-min"),"xxs-max":Lt("xxs-max"),"xs-min":Lt("xs-min"),"xs-max":Lt("xs-max"),"sm-min":Lt("sm-min"),"sm-max":Lt("sm-max"),"md-min":Lt("md-min"),"md-max":Lt("md-max"),"lg-min":Lt("lg-min"),"lg-max":Lt("lg-max"),"xl-min":Lt("xl-min"),"xl-max":Lt("xl-max"),"xxl-min":Lt("xxl-min"),"xxs-column":Lt("xxs-column"),"xs-column":Lt("xs-column"),"sm-column":Lt("sm-column"),"md-column":Lt("md-column"),"lg-column":Lt("lg-column"),"xl-column":Lt("xl-column"),"xxl-column":Lt("xxl-column"),"xxs-gutter":Lt("xxs-gutter"),"xs-gutter":Lt("xs-gutter"),"sm-gutter":Lt("sm-gutter"),"md-gutter":Lt("md-gutter"),"lg-gutter":Lt("lg-gutter"),"xl-gutter":Lt("xl-gutter"),"xxl-gutter":Lt("xxl-gutter"),"xxs-margin":Lt("xxs-margin"),"xs-margin":Lt("xs-margin"),"sm-margin":Lt("sm-margin"),"md-margin":Lt("md-margin"),"lg-margin":Lt("lg-margin"),"xl-margin":Lt("xl-margin"),"xxl-margin":Lt("xxl-margin")},Wt=e=>("max-width"===e?["xxs","xs","sm","md","lg","xl"]:["xxs","xs","sm","md","lg","xl","xxl"]).reduce(((r,t)=>(r[t]=((e,r)=>{const t=Ht["max-width"===e?`${r}-max`:`${r}-min`];return r=>{const n=t(r);return`@media screen and (${e}: ${n}px)`}})(e,t),r)),{}),Nt={MaxWidth:Wt("max-width"),MinWidth:Wt("min-width")},Pt={collections:{default:{"heading-size-xxl":"3rem","heading-size-xl":"2.5rem","heading-size-lg":"2rem","heading-size-md":"1.625rem","heading-size-sm":"1.375rem","heading-size-xs":"1.125rem","heading-lh-xxl":"3.5rem","heading-lh-xl":"3rem","heading-lh-lg":"2.5rem","heading-lh-md":"2.25rem","heading-lh-sm":"1.75rem","heading-lh-xs":"1.625rem","heading-ls-xxl":"-0.056rem","heading-ls-xl":"-0.032rem","heading-ls-lg":"-0.032rem","heading-ls-md":"0rem","heading-ls-sm":"0rem","heading-ls-xs":"0rem","weight-light":"300","weight-regular":"400","weight-semibold":"600","weight-bold":"700","font-family":"Open Sans","body-size-baseline":"1.125rem","body-size-md":"1rem","body-size-sm":"0.875rem","body-size-xs":"0.75rem","body-lh-baseline":"1.625rem","body-lh-md":"1.5rem","body-lh-sm":"1.625rem","body-lh-xs":"1.25rem","body-ls-baseline":"0rem","body-ls-md":"0.014rem","body-ls-sm":"0.012rem","body-ls-xs":"0.012rem","form-label-size":"1rem","form-description-size":"0.875rem","form-label-lh":"1.5rem","form-description-lh":"1.6rem","form-label-ls":"0.014rem","form-description-ls":"0.012rem"},bookingsg:{"heading-size-xxl":"3rem","heading-size-xl":"2.5rem","heading-size-lg":"2rem","heading-size-md":"1.625rem","heading-size-sm":"1.375rem","heading-size-xs":"1.125rem","heading-lh-xxl":"3.5rem","heading-lh-xl":"3rem","heading-lh-lg":"2.5rem","heading-lh-md":"2.25rem","heading-lh-sm":"1.75rem","heading-lh-xs":"1.75rem","heading-ls-xxl":"-0.056rem","heading-ls-xl":"-0.032rem","heading-ls-lg":"-0.032rem","heading-ls-md":"0rem","heading-ls-sm":"0rem","heading-ls-xs":"0rem","weight-light":"300","weight-regular":"400","weight-semibold":"600","weight-bold":"700","font-family":"Plus Jakarta Sans","body-size-baseline":"1.125rem","body-size-md":"1rem","body-size-sm":"0.875rem","body-size-xs":"0.75rem","body-lh-baseline":"1.75rem","body-lh-md":"1.5rem","body-lh-sm":"1.6rem","body-lh-xs":"1.2rem","body-ls-baseline":"0rem","body-ls-md":"0.014rem","body-ls-sm":"0.012rem","body-ls-xs":"0.012rem","form-label-size":"1rem","form-description-size":"0.875rem","form-label-lh":"1.5rem","form-description-lh":"1.6rem","form-label-ls":"0.014rem","form-description-ls":"0.012rem"},pa:{"heading-size-xxl":"2.5rem","heading-size-xl":"2rem","heading-size-lg":"1.75rem","heading-size-md":"1.5rem","heading-size-sm":"1.25rem","heading-size-xs":"1rem","heading-lh-xxl":"3rem","heading-lh-xl":"2.5rem","heading-lh-lg":"2.25rem","heading-lh-md":"2rem","heading-lh-sm":"2rem","heading-lh-xs":"1.75rem","heading-ls-xxl":"-0.032rem","heading-ls-xl":"-0.032rem","heading-ls-lg":"0rem","heading-ls-md":"0rem","heading-ls-sm":"0rem","heading-ls-xs":"0rem","weight-light":"300","weight-regular":"400","weight-semibold":"600","weight-bold":"700","font-family":"Lato","body-size-baseline":"1rem","body-size-md":"0.875rem","body-size-sm":"0.75rem","body-size-xs":"0.625rem","body-lh-baseline":"1.75rem","body-lh-md":"1.5rem","body-lh-sm":"1.25rem","body-lh-xs":"1.25rem","body-ls-baseline":"0rem","body-ls-md":"0.014rem","body-ls-sm":"0.012rem","body-ls-xs":"0.012rem","form-label-size":"1rem","form-description-size":"0.875rem","form-label-lh":"1.5rem","form-description-lh":"1.6rem","form-label-ls":"0.014rem","form-description-ls":"0.012rem"},a11yplayground:{"heading-size-xxl":"3rem","heading-size-xl":"2.5rem","heading-size-lg":"2rem","heading-size-md":"1.625rem","heading-size-sm":"1.375rem","heading-size-xs":"1.125rem","heading-lh-xxl":"3.5rem","heading-lh-xl":"3rem","heading-lh-lg":"2.5rem","heading-lh-md":"2.25rem","heading-lh-sm":"1.75rem","heading-lh-xs":"1.625rem","heading-ls-xxl":"-0.056rem","heading-ls-xl":"-0.032rem","heading-ls-lg":"-0.032rem","heading-ls-md":"0rem","heading-ls-sm":"0rem","heading-ls-xs":"0rem","weight-light":"300","weight-regular":"400","weight-semibold":"600","weight-bold":"700","font-family":"Atkinson Hyperlegible Next","body-size-baseline":"1.125rem","body-size-md":"1rem","body-size-sm":"0.875rem","body-size-xs":"0.75rem","body-lh-baseline":"1.625rem","body-lh-md":"1.5rem","body-lh-sm":"1.625rem","body-lh-xs":"1.25rem","body-ls-baseline":"0rem","body-ls-md":"0.014rem","body-ls-sm":"0.012rem","body-ls-xs":"0.012rem","form-label-size":"1.125rem","form-description-size":"1rem","form-label-lh":"1.5rem","form-description-lh":"1.625rem","form-label-ls":"0rem","form-description-ls":"0.00875rem"},supportgowhere:{"heading-size-xxl":"3rem","heading-size-xl":"2.5rem","heading-size-lg":"2rem","heading-size-md":"1.625rem","heading-size-sm":"1.375rem","heading-size-xs":"1.125rem","heading-lh-xxl":"3.5rem","heading-lh-xl":"3rem","heading-lh-lg":"2.5rem","heading-lh-md":"2.25rem","heading-lh-sm":"1.75rem","heading-lh-xs":"1.625rem","heading-ls-xxl":"-0.056rem","heading-ls-xl":"-0.032rem","heading-ls-lg":"-0.032rem","heading-ls-md":"0rem","heading-ls-sm":"0rem","heading-ls-xs":"0rem","weight-light":"300","weight-regular":"400","weight-semibold":"600","weight-bold":"700","font-family":"Libre Franklin","body-size-baseline":"1.125rem","body-size-md":"1rem","body-size-sm":"0.875rem","body-size-xs":"0.75rem","body-lh-baseline":"1.625rem","body-lh-md":"1.5rem","body-lh-sm":"1.625rem","body-lh-xs":"1.25rem","body-ls-baseline":"0rem","body-ls-md":"0.014rem","body-ls-sm":"0.012rem","body-ls-xs":"0.012rem","form-label-size":"1rem","form-description-size":"0.875rem","form-label-lh":"1.5rem","form-description-lh":"1.6rem","form-label-ls":"0.014rem","form-description-ls":"0.012rem"}},defaultValue:"default"},Vt=e=>r=>{var t;const n=r.theme,a=lt(Pt,null==n?void 0:n.fontScheme);return(null===(t=null==n?void 0:n.overrides)||void 0===t?void 0:t.fontSpec)?st(a,e,n.overrides.fontSpec):a[e]},Ut={"heading-size-xxl":Vt("heading-size-xxl"),"heading-size-xl":Vt("heading-size-xl"),"heading-size-lg":Vt("heading-size-lg"),"heading-size-md":Vt("heading-size-md"),"heading-size-sm":Vt("heading-size-sm"),"heading-size-xs":Vt("heading-size-xs"),"heading-lh-xxl":Vt("heading-lh-xxl"),"heading-lh-xl":Vt("heading-lh-xl"),"heading-lh-lg":Vt("heading-lh-lg"),"heading-lh-md":Vt("heading-lh-md"),"heading-lh-sm":Vt("heading-lh-sm"),"heading-lh-xs":Vt("heading-lh-xs"),"heading-ls-xxl":Vt("heading-ls-xxl"),"heading-ls-xl":Vt("heading-ls-xl"),"heading-ls-lg":Vt("heading-ls-lg"),"heading-ls-md":Vt("heading-ls-md"),"heading-ls-sm":Vt("heading-ls-sm"),"heading-ls-xs":Vt("heading-ls-xs"),"weight-light":Vt("weight-light"),"weight-regular":Vt("weight-regular"),"weight-semibold":Vt("weight-semibold"),"weight-bold":Vt("weight-bold"),"font-family":Vt("font-family"),"body-size-baseline":Vt("body-size-baseline"),"body-size-md":Vt("body-size-md"),"body-size-sm":Vt("body-size-sm"),"body-size-xs":Vt("body-size-xs"),"body-lh-baseline":Vt("body-lh-baseline"),"body-lh-md":Vt("body-lh-md"),"body-lh-sm":Vt("body-lh-sm"),"body-lh-xs":Vt("body-lh-xs"),"body-ls-baseline":Vt("body-ls-baseline"),"body-ls-md":Vt("body-ls-md"),"body-ls-sm":Vt("body-ls-sm"),"body-ls-xs":Vt("body-ls-xs"),"form-label-size":Vt("form-label-size"),"form-description-size":Vt("form-description-size"),"form-label-lh":Vt("form-label-lh"),"form-description-lh":Vt("form-description-lh"),"form-label-ls":Vt("form-label-ls"),"form-description-ls":Vt("form-description-ls")},Zt=(e,r,t,n,a)=>{const{disableLigatures:i}=a||{};return p`
        font-family: ${Vt("font-family")};
        font-size: ${Vt(e)};
        font-weight: ${Vt(r)};
        line-height: ${Vt(t)};
        letter-spacing: ${Vt(n)};

        font-variant: ${i?"no-common-ligatures":"normal"};
    `},Kt=(e={})=>({"heading-xxl-light":Zt("heading-size-xxl","weight-light","heading-lh-xxl","heading-ls-xxl",e),"heading-xxl-regular":Zt("heading-size-xxl","weight-regular","heading-lh-xxl","heading-ls-xxl",e),"heading-xxl-semibold":Zt("heading-size-xxl","weight-semibold","heading-lh-xxl","heading-ls-xxl",e),"heading-xxl-bold":Zt("heading-size-xxl","weight-bold","heading-lh-xxl","heading-ls-xxl",e),"heading-xl-light":Zt("heading-size-xl","weight-light","heading-lh-xl","heading-ls-xl",e),"heading-xl-regular":Zt("heading-size-xl","weight-regular","heading-lh-xl","heading-ls-xl",e),"heading-xl-semibold":Zt("heading-size-xl","weight-semibold","heading-lh-xl","heading-ls-xl",e),"heading-xl-bold":Zt("heading-size-xl","weight-bold","heading-lh-xl","heading-ls-xl",e),"heading-lg-light":Zt("heading-size-lg","weight-light","heading-lh-lg","heading-ls-lg",e),"heading-lg-regular":Zt("heading-size-lg","weight-regular","heading-lh-lg","heading-ls-lg",e),"heading-lg-semibold":Zt("heading-size-lg","weight-semibold","heading-lh-lg","heading-ls-lg",e),"heading-lg-bold":Zt("heading-size-lg","weight-bold","heading-lh-lg","heading-ls-lg",e),"heading-md-light":Zt("heading-size-md","weight-light","heading-lh-md","heading-ls-md",e),"heading-md-regular":Zt("heading-size-md","weight-regular","heading-lh-md","heading-ls-md",e),"heading-md-semibold":Zt("heading-size-md","weight-semibold","heading-lh-md","heading-ls-md",e),"heading-md-bold":Zt("heading-size-md","weight-bold","heading-lh-md","heading-ls-md",e),"heading-sm-light":Zt("heading-size-sm","weight-light","heading-lh-sm","heading-ls-sm",e),"heading-sm-regular":Zt("heading-size-sm","weight-regular","heading-lh-sm","heading-ls-sm",e),"heading-sm-semibold":Zt("heading-size-sm","weight-semibold","heading-lh-sm","heading-ls-sm",e),"heading-sm-bold":Zt("heading-size-sm","weight-bold","heading-lh-sm","heading-ls-sm",e),"heading-xs-light":Zt("heading-size-xs","weight-light","heading-lh-xs","heading-ls-xs",e),"heading-xs-regular":Zt("heading-size-xs","weight-regular","heading-lh-xs","heading-ls-xs",e),"heading-xs-semibold":Zt("heading-size-xs","weight-semibold","heading-lh-xs","heading-ls-xs",e),"heading-xs-bold":Zt("heading-size-xs","weight-bold","heading-lh-xs","heading-ls-xs",e),"body-baseline-light":Zt("body-size-baseline","weight-light","body-lh-baseline","body-ls-baseline",e),"body-baseline-regular":Zt("body-size-baseline","weight-regular","body-lh-baseline","body-ls-baseline",e),"body-baseline-semibold":Zt("body-size-baseline","weight-semibold","body-lh-baseline","body-ls-baseline",e),"body-baseline-bold":Zt("body-size-baseline","weight-bold","body-lh-baseline","body-ls-baseline",e),"body-md-light":Zt("body-size-md","weight-light","body-lh-md","body-ls-md",e),"body-md-regular":Zt("body-size-md","weight-regular","body-lh-md","body-ls-md",e),"body-md-semibold":Zt("body-size-md","weight-semibold","body-lh-md","body-ls-md",e),"body-md-bold":Zt("body-size-md","weight-bold","body-lh-md","body-ls-md",e),"body-sm-light":Zt("body-size-sm","weight-light","body-lh-sm","body-ls-sm",e),"body-sm-regular":Zt("body-size-sm","weight-regular","body-lh-sm","body-ls-sm",e),"body-sm-semibold":Zt("body-size-sm","weight-semibold","body-lh-sm","body-ls-sm",e),"body-sm-bold":Zt("body-size-sm","weight-bold","body-lh-sm","body-ls-sm",e),"body-xs-light":Zt("body-size-xs","weight-light","body-lh-xs","body-ls-xs",e),"body-xs-regular":Zt("body-size-xs","weight-regular","body-lh-xs","body-ls-xs",e),"body-xs-semibold":Zt("body-size-xs","weight-semibold","body-lh-xs","body-ls-xs",e),"body-xs-bold":Zt("body-size-xs","weight-bold","body-lh-xs","body-ls-xs",e),"form-label":Zt("form-label-size","weight-semibold","form-label-lh","form-label-ls",e),"form-description":Zt("form-description-size","weight-regular","form-description-lh","form-description-ls",e)}),Jt=Kt({disableLigatures:!0}),qt={collections:{default:Kt(),bookingsg:Jt,pa:Kt({disableLigatures:!0}),a11yplayground:Kt({disableLigatures:!0}),supportgowhere:Kt({disableLigatures:!0})},defaultValue:"default"},Xt=e=>r=>{var t;const n=r.theme,a=lt(qt,null==n?void 0:n.fontScheme),i=(null===(t=null==n?void 0:n.overrides)||void 0===t?void 0:t.font)?st(a,e,n.overrides.font):a[e];return"function"==typeof i?i(r):i},Gt={"heading-xxl-light":Xt("heading-xxl-light"),"heading-xxl-regular":Xt("heading-xxl-regular"),"heading-xxl-semibold":Xt("heading-xxl-semibold"),"heading-xxl-bold":Xt("heading-xxl-bold"),"heading-xl-light":Xt("heading-xl-light"),"heading-xl-regular":Xt("heading-xl-regular"),"heading-xl-semibold":Xt("heading-xl-semibold"),"heading-xl-bold":Xt("heading-xl-bold"),"heading-lg-light":Xt("heading-lg-light"),"heading-lg-regular":Xt("heading-lg-regular"),"heading-lg-semibold":Xt("heading-lg-semibold"),"heading-lg-bold":Xt("heading-lg-bold"),"heading-md-light":Xt("heading-md-light"),"heading-md-regular":Xt("heading-md-regular"),"heading-md-semibold":Xt("heading-md-semibold"),"heading-md-bold":Xt("heading-md-bold"),"heading-sm-light":Xt("heading-sm-light"),"heading-sm-regular":Xt("heading-sm-regular"),"heading-sm-semibold":Xt("heading-sm-semibold"),"heading-sm-bold":Xt("heading-sm-bold"),"heading-xs-light":Xt("heading-xs-light"),"heading-xs-regular":Xt("heading-xs-regular"),"heading-xs-semibold":Xt("heading-xs-semibold"),"heading-xs-bold":Xt("heading-xs-bold"),"body-baseline-light":Xt("body-baseline-light"),"body-baseline-regular":Xt("body-baseline-regular"),"body-baseline-semibold":Xt("body-baseline-semibold"),"body-baseline-bold":Xt("body-baseline-bold"),"body-md-light":Xt("body-md-light"),"body-md-regular":Xt("body-md-regular"),"body-md-semibold":Xt("body-md-semibold"),"body-md-bold":Xt("body-md-bold"),"body-sm-light":Xt("body-sm-light"),"body-sm-regular":Xt("body-sm-regular"),"body-sm-semibold":Xt("body-sm-semibold"),"body-sm-bold":Xt("body-sm-bold"),"body-xs-light":Xt("body-xs-light"),"body-xs-regular":Xt("body-xs-regular"),"body-xs-semibold":Xt("body-xs-semibold"),"body-xs-bold":Xt("body-xs-bold"),"form-label":Xt("form-label"),"form-description":Xt("form-description")},Qt={collections:{default:{"duration-150":"150ms","duration-250":"250ms","duration-350":"350ms","duration-500":"500ms","duration-800":"800ms","duration-1000":"1000ms","ease-default":"cubic-bezier(0.45, 0.05, 0.55, 0.95)","ease-standard":"cubic-bezier(0.86, 0, 0.07, 1)","ease-entrance":"cubic-bezier(0.18, 0.13, 0, 1)","ease-exit":"cubic-bezier(1, 0, 0.8, 0.85)"}},defaultValue:"default"},en=e=>r=>{var t;const n=r.theme,a=lt(Qt,null==n?void 0:n.motionScheme);return(null===(t=null==n?void 0:n.overrides)||void 0===t?void 0:t.motion)?st(a,e,n.overrides.motion):a[e]},rn={"duration-150":en("duration-150"),"duration-250":en("duration-250"),"duration-350":en("duration-350"),"duration-500":en("duration-500"),"duration-800":en("duration-800"),"duration-1000":en("duration-1000"),"ease-default":en("ease-default"),"ease-standard":en("ease-standard"),"ease-entrance":en("ease-entrance"),"ease-exit":en("ease-exit")},tn={collections:{default:{none:0,xs:2,sm:4,md:8,lg:12,full:9999}},defaultValue:"default"},nn=e=>r=>{var t;const n=r.theme,a=lt(tn,null==n?void 0:n.radiusScheme);return(null===(t=null==n?void 0:n.overrides)||void 0===t?void 0:t.radius)?`${st(a,e,n.overrides.radius)}px`:`${a[e]}px`},an={none:nn("none"),xs:nn("xs"),sm:nn("sm"),md:nn("md"),lg:nn("lg"),full:nn("full")},on={collections:{default:{"spacing-0":0,"spacing-4":4,"spacing-8":8,"spacing-12":12,"spacing-16":16,"spacing-20":20,"spacing-24":24,"spacing-32":32,"spacing-40":40,"spacing-48":48,"spacing-64":64,"spacing-72":72,"layout-xs":8,"layout-sm":16,"layout-md":24,"layout-lg":32,"layout-xl":48,"layout-xxl":64,"layout-xxxl":128}},defaultValue:"default"},sn=e=>r=>{var t;const n=r.theme,a=lt(on,null==n?void 0:n.spacingScheme);return(null===(t=null==n?void 0:n.overrides)||void 0===t?void 0:t.spacing)?`${st(a,e,n.overrides.spacing)}px`:`${a[e]}px`},ln={"spacing-0":sn("spacing-0"),"spacing-4":sn("spacing-4"),"spacing-8":sn("spacing-8"),"spacing-12":sn("spacing-12"),"spacing-16":sn("spacing-16"),"spacing-20":sn("spacing-20"),"spacing-24":sn("spacing-24"),"spacing-32":sn("spacing-32"),"spacing-40":sn("spacing-40"),"spacing-48":sn("spacing-48"),"spacing-64":sn("spacing-64"),"spacing-72":sn("spacing-72"),"layout-xs":sn("layout-xs"),"layout-sm":sn("layout-sm"),"layout-md":sn("layout-md"),"layout-lg":sn("layout-lg"),"layout-xl":sn("layout-xl"),"layout-xxl":sn("layout-xxl"),"layout-xxxl":sn("layout-xxxl")},dn=(e,r)=>Object.assign(Object.assign({},e),{colourMode:r}),cn=Object.assign(Object.assign({},Yt),{Primitive:Et}),un=Object.assign(Object.assign({},Gt),{Spec:Ut}),gn=rn,bn=Object.assign(Object.assign({},ut),{Util:Rt}),hn=ln,mn=an,yn=Ht,fn=Nt,pn={colourScheme:"lifesg",fontScheme:"default",motionScheme:"default",borderScheme:"default",spacingScheme:"default",radiusScheme:"default",breakpointScheme:"default",resourceScheme:"lifesg",_v2:{colorScheme:"base",textStyleScheme:"base",designTokenScheme:"base",resourceScheme:"base"}},vn={colourScheme:"bookingsg",fontScheme:"bookingsg",motionScheme:"default",borderScheme:"default",spacingScheme:"default",radiusScheme:"default",breakpointScheme:"default",resourceScheme:"bookingsg",_v2:{colorScheme:"bookingsg",textStyleScheme:"base",designTokenScheme:"base",resourceScheme:"bookingsg"}},xn={colourScheme:"ccube",fontScheme:"default",motionScheme:"default",borderScheme:"default",spacingScheme:"default",radiusScheme:"default",breakpointScheme:"default",resourceScheme:"ccube",_v2:{colorScheme:"ccube",textStyleScheme:"base",designTokenScheme:"base",resourceScheme:"ccube"}},wn={colourScheme:"mylegacy",fontScheme:"default",motionScheme:"default",borderScheme:"default",spacingScheme:"default",radiusScheme:"default",breakpointScheme:"default",resourceScheme:"mylegacy",_v2:{colorScheme:"mylegacy",textStyleScheme:"base",designTokenScheme:"base",resourceScheme:"mylegacy"}},Dn={colourScheme:"rbs",fontScheme:"default",motionScheme:"default",borderScheme:"default",spacingScheme:"default",radiusScheme:"default",breakpointScheme:"default",resourceScheme:"rbs",_v2:{colorScheme:"rbs",textStyleScheme:"base",designTokenScheme:"rbs",resourceScheme:"rbs"}},Fn={colourScheme:"oneservice",fontScheme:"default",motionScheme:"default",borderScheme:"default",spacingScheme:"default",radiusScheme:"default",breakpointScheme:"default",resourceScheme:"oneservice"},$n={colourScheme:"pa",fontScheme:"pa",motionScheme:"default",borderScheme:"default",spacingScheme:"default",radiusScheme:"default",breakpointScheme:"default",resourceScheme:"pa",componentScheme:"pa"},En={colourScheme:"a11yplayground",fontScheme:"a11yplayground",motionScheme:"default",borderScheme:"default",spacingScheme:"default",radiusScheme:"default",breakpointScheme:"default",resourceScheme:"a11yplayground",componentScheme:"a11yplayground"},Cn={colourScheme:"supportgowhere",fontScheme:"supportgowhere",motionScheme:"default",borderScheme:"default",spacingScheme:"default",radiusScheme:"default",breakpointScheme:"default",resourceScheme:"supportgowhere",componentScheme:"default"};Object.assign(Object.assign({},pn),{light:dn(pn,"light"),dark:dn(pn,"dark")}),Object.assign(Object.assign({},vn),{light:dn(vn,"light"),dark:dn(vn,"dark")}),Object.assign(Object.assign({},xn),{light:dn(xn,"light"),dark:dn(xn,"dark")}),Object.assign(Object.assign({},wn),{light:dn(wn,"light"),dark:dn(wn,"dark")}),Object.assign(Object.assign({},Dn),{light:dn(Dn,"light"),dark:dn(Dn,"dark")}),Object.assign(Object.assign({},Fn),{light:dn(Fn,"light"),dark:dn(Fn,"dark")}),Object.assign(Object.assign({},$n),{light:dn($n,"light"),dark:dn($n,"dark")}),Object.assign(Object.assign({},En),{light:dn(En,"light"),dark:dn(En,"dark")}),Object.assign(Object.assign({},Cn),{light:dn(Cn,"light"),dark:dn(Cn,"dark")});const Sn=e=>"small"===e?2.5:3;f.div`
    position: relative;
    width: 100%;
    ${e=>{const r=Sn(e.$variant);return p`
            min-height: ${r}rem;
            height: ${r}rem; // Need this to persist the height when expanding or collapsing list
        `}}
`;const Bn=p`
    display: flex;
    position: relative;
    align-items: center;
    justify-content: space-between;
    padding: 0 ${hn["spacing-16"]};
    // exclude top and bottom borders
    height: calc(${e=>Sn(e.$variant)}rem - 2px);
    width: 100%;
    border-radius: ${mn.sm};
    border: none;
    background: transparent;

    :focus,
    :active {
        outline: none;
    }

    :focus-visible {
        outline: 2px solid ${cn["border-focus"]};
    }
`,An=f.button`
    ${Bn}
    cursor: pointer;
`;f.div`
    ${Bn}
`;const kn=v`
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
    border: ${bn["width-010"]} ${bn.solid} ${cn.border};
    border-radius: ${mn.sm};
    background: ${cn.bg};
    overflow: hidden;

    :focus-within {
        border-color: ${cn["border-focus"]};
        box-shadow: 0px 0px 4px 0px
            rgb(from ${cn["border-focus"]} r g b / 50%) inset; // TODO: confirm shadow
    }

    ${e=>e.expanded?p`
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                z-index: 2;
            `:p`
                animation: ${kn} 0.5s ease-in-out;
            `}

    ${e=>e.disabled?p`
                background: ${cn["bg-disabled"]};

                ${An} {
                    cursor: not-allowed;
                }

                :focus-within {
                    border-color: ${cn.border};
                    box-shadow: none;
                }
            `:e.$readOnly?p`
                border: none;
                background: transparent !important;

                ${An} {
                    padding: 0;
                }

                :focus-within {
                    border: none;
                    box-shadow: none;
                }
            `:e.error?p`
                border-color: ${cn["border-error"]};

                :focus-within {
                    border-color: ${cn["border-error"]};
                    box-shadow: 0px 0px 4px 0px
                        rgb(from ${cn["border-error"]} r g b / 50%) inset; // TODO: confirm shadow
                }
            `:void 0}
`,f.div`
    transform: rotate(${e=>e.expanded?180:0}deg);
    transition: transform ${gn["duration-250"]} ${gn["ease-default"]};
    margin-left: ${hn["spacing-16"]};
`,f(y)`
    color: ${cn.icon};
`,f.div`
    height: 1px;
    background: ${cn.border};
    margin: 0 ${hn["spacing-8"]};
`,f.div`
    display: flex;
    flex: 1;
    word-break: break-all;
    ${e=>{if(e.$disabled)return p`
                color: ${cn["text-disabled"]};
            `}}
`;f(f.div`
    ${e=>"small"===e.$variant?un["body-md-regular"]:un["body-baseline-regular"]}
    text-align: left;
    ${e=>{if("middle"!==e.truncateType)return p`
                    ${r=1,p`
    display: -webkit-box;
    -webkit-line-clamp: ${r};
    -webkit-box-orient: vertical;
    overflow: hidden;
`}
                `;var r}}
    overflow: hidden;
`)`
    color: ${cn["text-subtler"]};
`;var On=function(e,r){return On=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,r){e.__proto__=r}||function(e,r){for(var t in r)Object.prototype.hasOwnProperty.call(r,t)&&(e[t]=r[t])},On(e,r)};var Mn=function(){return Mn=Object.assign||function(e){for(var r,t=1,n=arguments.length;t<n;t++)for(var a in r=arguments[t])Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a]);return e},Mn.apply(this,arguments)};var zn="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};var Yn=function(e){var r=typeof e;return null!=e&&("object"==r||"function"==r)},jn="object"==typeof zn&&zn&&zn.Object===Object&&zn,Tn="object"==typeof self&&self&&self.Object===Object&&self,_n=jn||Tn||Function("return this")(),Rn=_n,In=function(){return Rn.Date.now()},Ln=/\s/;var Hn=function(e){for(var r=e.length;r--&&Ln.test(e.charAt(r)););return r},Wn=/^\s+/;var Nn=function(e){return e?e.slice(0,Hn(e)+1).replace(Wn,""):e},Pn=_n.Symbol,Vn=Pn,Un=Object.prototype,Zn=Un.hasOwnProperty,Kn=Un.toString,Jn=Vn?Vn.toStringTag:void 0;var qn=function(e){var r=Zn.call(e,Jn),t=e[Jn];try{e[Jn]=void 0;var n=!0}catch(e){}var a=Kn.call(e);return n&&(r?e[Jn]=t:delete e[Jn]),a},Xn=Object.prototype.toString;var Gn=qn,Qn=function(e){return Xn.call(e)},ea=Pn?Pn.toStringTag:void 0;var ra=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":ea&&ea in Object(e)?Gn(e):Qn(e)},ta=function(e){return null!=e&&"object"==typeof e};var na=Nn,aa=Yn,ia=function(e){return"symbol"==typeof e||ta(e)&&"[object Symbol]"==ra(e)},oa=/^[-+]0x[0-9a-f]+$/i,sa=/^0b[01]+$/i,la=/^0o[0-7]+$/i,da=parseInt;var ca=Yn,ua=In,ga=function(e){if("number"==typeof e)return e;if(ia(e))return NaN;if(aa(e)){var r="function"==typeof e.valueOf?e.valueOf():e;e=aa(r)?r+"":r}if("string"!=typeof e)return 0===e?e:+e;e=na(e);var t=sa.test(e);return t||la.test(e)?da(e.slice(2),t?2:8):oa.test(e)?NaN:+e},ba=Math.max,ha=Math.min;var ma=function(e,r,t){var n,a,i,o,s,l,d=0,c=!1,u=!1,g=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function b(r){var t=n,i=a;return n=a=void 0,d=r,o=e.apply(i,t)}function h(e){var t=e-l;return void 0===l||t>=r||t<0||u&&e-d>=i}function m(){var e=ua();if(h(e))return y(e);s=setTimeout(m,function(e){var t=r-(e-l);return u?ha(t,i-(e-d)):t}(e))}function y(e){return s=void 0,g&&n?b(e):(n=a=void 0,o)}function f(){var e=ua(),t=h(e);if(n=arguments,a=this,l=e,t){if(void 0===s)return function(e){return d=e,s=setTimeout(m,r),c?b(e):o}(l);if(u)return clearTimeout(s),s=setTimeout(m,r),b(l)}return void 0===s&&(s=setTimeout(m,r)),o}return r=ga(r)||0,ca(t)&&(c=!!t.leading,i=(u="maxWait"in t)?ba(ga(t.maxWait)||0,r):i,g="trailing"in t?!!t.trailing:g),f.cancel=function(){void 0!==s&&clearTimeout(s),d=0,n=l=a=s=void 0},f.flush=function(){return void 0===s?o:y(ua())},f},ya=ma,fa=Yn;var pa=function(e,r,t){var n=!0,a=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return fa(t)&&(n="leading"in t?!!t.leading:n,a="trailing"in t?!!t.trailing:a),ya(e,r,{leading:n,maxWait:r,trailing:a})},va=function(e,r,t,n){switch(r){case"debounce":return ma(e,t,n);case"throttle":return pa(e,t,n);default:return e}},xa=function(e){return"function"==typeof e},wa=function(){return"undefined"==typeof window},Da=function(e){return e instanceof Element||e instanceof HTMLDocument},Fa=function(e,r,t,n){return function(a){var i=a.width,o=a.height;r((function(r){return r.width===i&&r.height===o||r.width===i&&!n||r.height===o&&!t?r:(e&&xa(e)&&e(i,o),{width:i,height:o})}))}};!function(e){function r(r){var t=e.call(this,r)||this;t.cancelHandler=function(){t.resizeHandler&&t.resizeHandler.cancel&&(t.resizeHandler.cancel(),t.resizeHandler=null)},t.attachObserver=function(){var e=t.props,r=e.targetRef,n=e.observerOptions;if(!wa()){r&&r.current&&(t.targetRef.current=r.current);var a=t.getElement();a&&(t.observableElement&&t.observableElement===a||(t.observableElement=a,t.resizeObserver.observe(a,n)))}},t.getElement=function(){var e=t.props,r=e.querySelector,n=e.targetDomEl;if(wa())return null;if(r)return document.querySelector(r);if(n&&Da(n))return n;if(t.targetRef&&Da(t.targetRef.current))return t.targetRef.current;var a=j(t);if(!a)return null;switch(t.getRenderType()){case"renderProp":case"childFunction":case"child":case"childArray":return a;default:return a.parentElement}},t.createResizeHandler=function(e){var r=t.props,n=r.handleWidth,a=void 0===n||n,i=r.handleHeight,o=void 0===i||i,s=r.onResize;if(a||o){var l=Fa(s,t.setState.bind(t),a,o);e.forEach((function(e){var r=e&&e.contentRect||{},n=r.width,a=r.height;!t.skipOnMount&&!wa()&&l({width:n,height:a}),t.skipOnMount=!1}))}},t.getRenderType=function(){var e=t.props,r=e.render,n=e.children;return xa(r)?"renderProp":xa(n)?"childFunction":s(n)?"child":Array.isArray(n)?"childArray":"parent"};var n=r.skipOnMount,a=r.refreshMode,i=r.refreshRate,o=void 0===i?1e3:i,d=r.refreshOptions;return t.state={width:void 0,height:void 0},t.skipOnMount=n,t.targetRef=l(),t.observableElement=null,wa()||(t.resizeHandler=va(t.createResizeHandler,a,o,d),t.resizeObserver=new window.ResizeObserver(t.resizeHandler)),t}(function(e,r){if("function"!=typeof r&&null!==r)throw new TypeError("Class extends value "+String(r)+" is not a constructor or null");function t(){this.constructor=e}On(e,r),e.prototype=null===r?Object.create(r):(t.prototype=r.prototype,new t)})(r,e),r.prototype.componentDidMount=function(){this.attachObserver()},r.prototype.componentDidUpdate=function(){this.attachObserver()},r.prototype.componentWillUnmount=function(){wa()||(this.observableElement=null,this.resizeObserver.disconnect(),this.cancelHandler())},r.prototype.render=function(){var e,r=this.props,t=r.render,a=r.children,i=r.nodeType,o=void 0===i?"div":i,s=this.state,l={width:s.width,height:s.height,targetRef:this.targetRef};switch(this.getRenderType()){case"renderProp":return t&&t(l);case"childFunction":return(e=a)(l);case"child":if((e=a).type&&"string"==typeof e.type){var c=function(e,r){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(n=Object.getOwnPropertySymbols(e);a<n.length;a++)r.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(t[n[a]]=e[n[a]])}return t}(l,["targetRef"]);return d(e,c)}return d(e,l);case"childArray":return(e=a).map((function(e){return!!e&&d(e,l)}));default:return n.createElement(o,null)}}}(c);var $a,Ea=wa()?u:g;!function(e){e.Ready="overlay-context-ready",e.Change="overlay-context-change"}($a||($a={}));const Ca=f.div`
    display: flex;
    flex-direction: column;
`,Sa=e=>"right"===e?"bottom-end":"bottom-start",Ba=({enabled:n,isOpen:a,onOpen:s,onClose:l,onDismiss:d,renderElement:c,renderDropdown:g,customZIndex:b,clickToToggle:h=!1,offset:m=0,alignment:y="left",fitAvailableHeight:f,rootNode:p})=>{var v;const j=x(),T=yn["sm-max"]({theme:j}),_=i(null),R=i(null),{width:I=0}=function(e){void 0===e&&(e={});var r=e.skipOnMount,t=void 0!==r&&r,n=e.refreshMode,a=e.refreshRate,s=void 0===a?1e3:a,l=e.refreshOptions,d=e.handleWidth,c=void 0===d||d,u=e.handleHeight,g=void 0===u||u,b=e.targetRef,h=e.observerOptions,m=e.onResize,y=i(t),f=i(null),p=null!=b?b:f,v=i(),x=o({width:void 0,height:void 0}),w=x[0],D=x[1];return Ea((function(){if(!wa()){var e=Fa(m,D,c,g);v.current=va((function(r){(c||g)&&r.forEach((function(r){var t=r&&r.contentRect||{},n=t.width,a=t.height;!y.current&&!wa()&&e({width:n,height:a}),y.current=!1}))}),n,s,l);var r=new window.ResizeObserver(v.current);return p.current&&r.observe(p.current,h),function(){r.disconnect();var e=v.current;e&&e.cancel&&e.cancel()}}}),[n,s,l,c,g,m,h,p.current]),Mn({ref:p},w)}({targetRef:_,handleHeight:!1}),L={name:"center",fn:({x:e,rects:r})=>{const t=0===e||e+r.floating.width===window.innerWidth,n=window.innerWidth<T;return{x:t&&n?(window.innerWidth-r.floating.width)/2:e}}},{refs:H,floatingStyles:W,context:N}=D({open:a,onOpenChange:(e,r,t)=>{"escape-key"===t?null==d||d():e&&!a?null==s||s():!e&&a&&(null==l||l(t))},whileElementsMounted:F,placement:Sa(y),middleware:[$(m),E(),C({limiter:S()}),B({apply({availableHeight:e}){R.current&&Object.assign(R.current.style,{maxHeight:f?`${e}px`:void 0,overflowY:f?"hidden":void 0})}}),L]}),P=(()=>{const[e,r]=o(void 0),t=w();return u((()=>{if(!t)return void r(void 0);const e=e=>{r(e.zIndex)};return t.events.on($a.Change,e),t.events.emit($a.Ready),()=>t.events.off($a.Change,e)}),[t]),e})(),{isMounted:V,styles:U}=A(N,{initial:{opacity:0},open:{opacity:1},duration:300}),Z=k(N,{enabled:n,toggle:h}),K=O(N,{enabled:n}),{getReferenceProps:J,getFloatingProps:q}=M([Z,K]);return e(r,{children:[t("div",Object.assign({ref:e=>{_.current=e,H.setReference(e)}},J(),{children:c()})),V&&t(z,{root:p,children:t(Y,{context:N,modal:!1,initialFocus:R,returnFocus:!1,children:t("div",Object.assign({ref:H.setFloating,style:Object.assign(Object.assign({},W),{zIndex:null!==(v=null!=b?b:P)&&void 0!==v?v:50})},q(),{children:t(Ca,{ref:R,style:Object.assign({},U),inert:U.opacity<1?"":void 0,children:g({elementWidth:I})})}))})})]})},Aa=f.div`
    --vertical-inset: ${hn["spacing-24"]};
    --horizontal-inset: ${hn["spacing-20"]};
    --header-bottom-spacing: ${hn["spacing-4"]};

    border: ${bn["width-010"]} ${bn.solid} ${cn.border};
    border-radius: ${mn.sm};
    overflow: hidden;

    width: ${e=>e.$width}px;
    max-width: 41rem;
    min-width: 21rem;

    ${fn.MaxWidth.sm} {
        min-width: 17.5rem;
    }
`;var ka={exports:{}};ka.exports=function(){var e=1e3,r=6e4,t=36e5,n="millisecond",a="second",i="minute",o="hour",s="day",l="week",d="month",c="quarter",u="year",g="date",b="Invalid Date",h=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,m=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,y={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(e){var r=["th","st","nd","rd"],t=e%100;return"["+e+(r[(t-20)%10]||r[t]||r[0])+"]"}},f=function(e,r,t){var n=String(e);return!n||n.length>=r?e:""+Array(r+1-n.length).join(t)+e},p={s:f,z:function(e){var r=-e.utcOffset(),t=Math.abs(r),n=Math.floor(t/60),a=t%60;return(r<=0?"+":"-")+f(n,2,"0")+":"+f(a,2,"0")},m:function e(r,t){if(r.date()<t.date())return-e(t,r);var n=12*(t.year()-r.year())+(t.month()-r.month()),a=r.clone().add(n,d),i=t-a<0,o=r.clone().add(n+(i?-1:1),d);return+(-(n+(t-a)/(i?a-o:o-a))||0)},a:function(e){return e<0?Math.ceil(e)||0:Math.floor(e)},p:function(e){return{M:d,y:u,w:l,d:s,D:g,h:o,m:i,s:a,ms:n,Q:c}[e]||String(e||"").toLowerCase().replace(/s$/,"")},u:function(e){return void 0===e}},v="en",x={};x[v]=y;var w="$isDayjsObject",D=function(e){return e instanceof C||!(!e||!e[w])},F=function e(r,t,n){var a;if(!r)return v;if("string"==typeof r){var i=r.toLowerCase();x[i]&&(a=i),t&&(x[i]=t,a=i);var o=r.split("-");if(!a&&o.length>1)return e(o[0])}else{var s=r.name;x[s]=r,a=s}return!n&&a&&(v=a),a||!n&&v},$=function(e,r){if(D(e))return e.clone();var t="object"==typeof r?r:{};return t.date=e,t.args=arguments,new C(t)},E=p;E.l=F,E.i=D,E.w=function(e,r){return $(e,{locale:r.$L,utc:r.$u,x:r.$x,$offset:r.$offset})};var C=function(){function y(e){this.$L=F(e.locale,null,!0),this.parse(e),this.$x=this.$x||e.x||{},this[w]=!0}var f=y.prototype;return f.parse=function(e){this.$d=function(e){var r=e.date,t=e.utc;if(null===r)return new Date(NaN);if(E.u(r))return new Date;if(r instanceof Date)return new Date(r);if("string"==typeof r&&!/Z$/i.test(r)){var n=r.match(h);if(n){var a=n[2]-1||0,i=(n[7]||"0").substring(0,3);return t?new Date(Date.UTC(n[1],a,n[3]||1,n[4]||0,n[5]||0,n[6]||0,i)):new Date(n[1],a,n[3]||1,n[4]||0,n[5]||0,n[6]||0,i)}}return new Date(r)}(e),this.init()},f.init=function(){var e=this.$d;this.$y=e.getFullYear(),this.$M=e.getMonth(),this.$D=e.getDate(),this.$W=e.getDay(),this.$H=e.getHours(),this.$m=e.getMinutes(),this.$s=e.getSeconds(),this.$ms=e.getMilliseconds()},f.$utils=function(){return E},f.isValid=function(){return!(this.$d.toString()===b)},f.isSame=function(e,r){var t=$(e);return this.startOf(r)<=t&&t<=this.endOf(r)},f.isAfter=function(e,r){return $(e)<this.startOf(r)},f.isBefore=function(e,r){return this.endOf(r)<$(e)},f.$g=function(e,r,t){return E.u(e)?this[r]:this.set(t,e)},f.unix=function(){return Math.floor(this.valueOf()/1e3)},f.valueOf=function(){return this.$d.getTime()},f.startOf=function(e,r){var t=this,n=!!E.u(r)||r,c=E.p(e),b=function(e,r){var a=E.w(t.$u?Date.UTC(t.$y,r,e):new Date(t.$y,r,e),t);return n?a:a.endOf(s)},h=function(e,r){return E.w(t.toDate()[e].apply(t.toDate("s"),(n?[0,0,0,0]:[23,59,59,999]).slice(r)),t)},m=this.$W,y=this.$M,f=this.$D,p="set"+(this.$u?"UTC":"");switch(c){case u:return n?b(1,0):b(31,11);case d:return n?b(1,y):b(0,y+1);case l:var v=this.$locale().weekStart||0,x=(m<v?m+7:m)-v;return b(n?f-x:f+(6-x),y);case s:case g:return h(p+"Hours",0);case o:return h(p+"Minutes",1);case i:return h(p+"Seconds",2);case a:return h(p+"Milliseconds",3);default:return this.clone()}},f.endOf=function(e){return this.startOf(e,!1)},f.$set=function(e,r){var t,l=E.p(e),c="set"+(this.$u?"UTC":""),b=(t={},t[s]=c+"Date",t[g]=c+"Date",t[d]=c+"Month",t[u]=c+"FullYear",t[o]=c+"Hours",t[i]=c+"Minutes",t[a]=c+"Seconds",t[n]=c+"Milliseconds",t)[l],h=l===s?this.$D+(r-this.$W):r;if(l===d||l===u){var m=this.clone().set(g,1);m.$d[b](h),m.init(),this.$d=m.set(g,Math.min(this.$D,m.daysInMonth())).$d}else b&&this.$d[b](h);return this.init(),this},f.set=function(e,r){return this.clone().$set(e,r)},f.get=function(e){return this[E.p(e)]()},f.add=function(n,c){var g,b=this;n=Number(n);var h=E.p(c),m=function(e){var r=$(b);return E.w(r.date(r.date()+Math.round(e*n)),b)};if(h===d)return this.set(d,this.$M+n);if(h===u)return this.set(u,this.$y+n);if(h===s)return m(1);if(h===l)return m(7);var y=(g={},g[i]=r,g[o]=t,g[a]=e,g)[h]||1,f=this.$d.getTime()+n*y;return E.w(f,this)},f.subtract=function(e,r){return this.add(-1*e,r)},f.format=function(e){var r=this,t=this.$locale();if(!this.isValid())return t.invalidDate||b;var n=e||"YYYY-MM-DDTHH:mm:ssZ",a=E.z(this),i=this.$H,o=this.$m,s=this.$M,l=t.weekdays,d=t.months,c=t.meridiem,u=function(e,t,a,i){return e&&(e[t]||e(r,n))||a[t].slice(0,i)},g=function(e){return E.s(i%12||12,e,"0")},h=c||function(e,r,t){var n=e<12?"AM":"PM";return t?n.toLowerCase():n};return n.replace(m,(function(e,n){return n||function(e){switch(e){case"YY":return String(r.$y).slice(-2);case"YYYY":return E.s(r.$y,4,"0");case"M":return s+1;case"MM":return E.s(s+1,2,"0");case"MMM":return u(t.monthsShort,s,d,3);case"MMMM":return u(d,s);case"D":return r.$D;case"DD":return E.s(r.$D,2,"0");case"d":return String(r.$W);case"dd":return u(t.weekdaysMin,r.$W,l,2);case"ddd":return u(t.weekdaysShort,r.$W,l,3);case"dddd":return l[r.$W];case"H":return String(i);case"HH":return E.s(i,2,"0");case"h":return g(1);case"hh":return g(2);case"a":return h(i,o,!0);case"A":return h(i,o,!1);case"m":return String(o);case"mm":return E.s(o,2,"0");case"s":return String(r.$s);case"ss":return E.s(r.$s,2,"0");case"SSS":return E.s(r.$ms,3,"0");case"Z":return a}return null}(e)||a.replace(":","")}))},f.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},f.diff=function(n,g,b){var h,m=this,y=E.p(g),f=$(n),p=(f.utcOffset()-this.utcOffset())*r,v=this-f,x=function(){return E.m(m,f)};switch(y){case u:h=x()/12;break;case d:h=x();break;case c:h=x()/3;break;case l:h=(v-p)/6048e5;break;case s:h=(v-p)/864e5;break;case o:h=v/t;break;case i:h=v/r;break;case a:h=v/e;break;default:h=v}return b?h:E.a(h)},f.daysInMonth=function(){return this.endOf(d).$D},f.$locale=function(){return x[this.$L]},f.locale=function(e,r){if(!e)return this.$L;var t=this.clone(),n=F(e,r,!0);return n&&(t.$L=n),t},f.clone=function(){return E.w(this.$d,this)},f.toDate=function(){return new Date(this.valueOf())},f.toJSON=function(){return this.isValid()?this.toISOString():null},f.toISOString=function(){return this.$d.toISOString()},f.toString=function(){return this.$d.toUTCString()},y}(),S=C.prototype;return $.prototype=S,[["$ms",n],["$s",a],["$m",i],["$H",o],["$W",s],["$M",d],["$y",u],["$D",g]].forEach((function(e){S[e[1]]=function(r){return this.$g(r,e[0],e[1])}})),$.extend=function(e,r){return e.$i||(e(r,C,$),e.$i=!0),$},$.locale=F,$.isDayjs=D,$.unix=function(e){return $(1e3*e)},$.en=x[v],$.Ls=x,$.p={},$}();var Oa=L(ka.exports),Ma={exports:{}};Ma.exports=function(){var e={LTS:"h:mm:ss A",LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D, YYYY",LLL:"MMMM D, YYYY h:mm A",LLLL:"dddd, MMMM D, YYYY h:mm A"},r=/(\[[^[]*\])|([-_:/.,()\s]+)|(A|a|YYYY|YY?|MM?M?M?|Do|DD?|hh?|HH?|mm?|ss?|S{1,3}|z|ZZ?)/g,t=/\d\d/,n=/\d\d?/,a=/\d*[^-_:/,()\s\d]+/,i={},o=function(e){return(e=+e)+(e>68?1900:2e3)},s=function(e){return function(r){this[e]=+r}},l=[/[+-]\d\d:?(\d\d)?|Z/,function(e){(this.zone||(this.zone={})).offset=function(e){if(!e)return 0;if("Z"===e)return 0;var r=e.match(/([+-]|\d\d)/g),t=60*r[1]+(+r[2]||0);return 0===t?0:"+"===r[0]?-t:t}(e)}],d=function(e){var r=i[e];return r&&(r.indexOf?r:r.s.concat(r.f))},c=function(e,r){var t,n=i.meridiem;if(n){for(var a=1;a<=24;a+=1)if(e.indexOf(n(a,0,r))>-1){t=a>12;break}}else t=e===(r?"pm":"PM");return t},u={A:[a,function(e){this.afternoon=c(e,!1)}],a:[a,function(e){this.afternoon=c(e,!0)}],S:[/\d/,function(e){this.milliseconds=100*+e}],SS:[t,function(e){this.milliseconds=10*+e}],SSS:[/\d{3}/,function(e){this.milliseconds=+e}],s:[n,s("seconds")],ss:[n,s("seconds")],m:[n,s("minutes")],mm:[n,s("minutes")],H:[n,s("hours")],h:[n,s("hours")],HH:[n,s("hours")],hh:[n,s("hours")],D:[n,s("day")],DD:[t,s("day")],Do:[a,function(e){var r=i.ordinal,t=e.match(/\d+/);if(this.day=t[0],r)for(var n=1;n<=31;n+=1)r(n).replace(/\[|\]/g,"")===e&&(this.day=n)}],M:[n,s("month")],MM:[t,s("month")],MMM:[a,function(e){var r=d("months"),t=(d("monthsShort")||r.map((function(e){return e.slice(0,3)}))).indexOf(e)+1;if(t<1)throw new Error;this.month=t%12||t}],MMMM:[a,function(e){var r=d("months").indexOf(e)+1;if(r<1)throw new Error;this.month=r%12||r}],Y:[/[+-]?\d+/,s("year")],YY:[t,function(e){this.year=o(e)}],YYYY:[/\d{4}/,s("year")],Z:l,ZZ:l};function g(t){var n,a;n=t,a=i&&i.formats;for(var o=(t=n.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g,(function(r,t,n){var i=n&&n.toUpperCase();return t||a[n]||e[n]||a[i].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g,(function(e,r,t){return r||t.slice(1)}))}))).match(r),s=o.length,l=0;l<s;l+=1){var d=o[l],c=u[d],g=c&&c[0],b=c&&c[1];o[l]=b?{regex:g,parser:b}:d.replace(/^\[|\]$/g,"")}return function(e){for(var r={},t=0,n=0;t<s;t+=1){var a=o[t];if("string"==typeof a)n+=a.length;else{var i=a.regex,l=a.parser,d=e.slice(n),c=i.exec(d)[0];l.call(r,c),e=e.replace(c,"")}}return function(e){var r=e.afternoon;if(void 0!==r){var t=e.hours;r?t<12&&(e.hours+=12):12===t&&(e.hours=0),delete e.afternoon}}(r),r}}return function(e,r,t){t.p.customParseFormat=!0,e&&e.parseTwoDigitYear&&(o=e.parseTwoDigitYear);var n=r.prototype,a=n.parse;n.parse=function(e){var r=e.date,n=e.utc,o=e.args;this.$u=n;var s=o[1];if("string"==typeof s){var l=!0===o[2],d=!0===o[3],c=l||d,u=o[2];d&&(u=o[2]),i=this.$locale(),!l&&u&&(i=t.Ls[u]),this.$d=function(e,r,t){try{if(["x","X"].indexOf(r)>-1)return new Date(("X"===r?1e3:1)*e);var n=g(r)(e),a=n.year,i=n.month,o=n.day,s=n.hours,l=n.minutes,d=n.seconds,c=n.milliseconds,u=n.zone,b=new Date,h=o||(a||i?1:b.getDate()),m=a||b.getFullYear(),y=0;a&&!i||(y=i>0?i-1:b.getMonth());var f=s||0,p=l||0,v=d||0,x=c||0;return u?new Date(Date.UTC(m,y,h,f,p,v,x+60*u.offset*1e3)):t?new Date(Date.UTC(m,y,h,f,p,v,x)):new Date(m,y,h,f,p,v,x)}catch(e){return new Date("")}}(r,s,n),this.init(),u&&!0!==u&&(this.$L=this.locale(u).$L),c&&r!=this.format(s)&&(this.$d=new Date("")),i={}}else if(s instanceof Array)for(var b=s.length,h=1;h<=b;h+=1){o[1]=s[h-1];var m=t.apply(this,o);if(m.isValid()){this.$d=m.$d,this.$L=m.$L,this.init();break}h===b&&(this.$d=new Date(""))}else a.call(this,e)}}}();var za=L(Ma.exports),Ya={exports:{}};Ya.exports=function(e,r,t){r.prototype.isBetween=function(e,r,n,a){var i=t(e),o=t(r),s="("===(a=a||"()")[0],l=")"===a[1];return(s?this.isAfter(i,n):!this.isBefore(i,n))&&(l?this.isBefore(o,n):!this.isAfter(o,n))||(s?this.isBefore(i,n):!this.isAfter(i,n))&&(l?this.isAfter(o,n):!this.isBefore(o,n))}};var ja=L(Ya.exports),Ta={exports:{}};Ta.exports=function(e,r){r.prototype.isSameOrAfter=function(e,r){return this.isSame(e,r)||this.isAfter(e,r)}};var _a=L(Ta.exports),Ra={exports:{}};Ra.exports=function(e,r){r.prototype.isSameOrBefore=function(e,r){return this.isSame(e,r)||this.isBefore(e,r)}};var Ia,La,Ha,Wa=L(Ra.exports),Na={exports:{}},Pa=L(Na.exports=(Ia={year:0,month:1,day:2,hour:3,minute:4,second:5},La={},function(e,r,t){var n,a=function(e,r,t){void 0===t&&(t={});var n=new Date(e),a=function(e,r){void 0===r&&(r={});var t=r.timeZoneName||"short",n=e+"|"+t,a=La[n];return a||(a=new Intl.DateTimeFormat("en-US",{hour12:!1,timeZone:e,year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit",timeZoneName:t}),La[n]=a),a}(r,t);return a.formatToParts(n)},i=function(e,r){for(var n=a(e,r),i=[],o=0;o<n.length;o+=1){var s=n[o],l=s.type,d=s.value,c=Ia[l];c>=0&&(i[c]=parseInt(d,10))}var u=i[3],g=24===u?0:u,b=i[0]+"-"+i[1]+"-"+i[2]+" "+g+":"+i[4]+":"+i[5]+":000",h=+e;return(t.utc(b).valueOf()-(h-=h%1e3))/6e4},o=r.prototype;o.tz=function(e,r){void 0===e&&(e=n);var a=this.utcOffset(),i=this.toDate(),o=i.toLocaleString("en-US",{timeZone:e}),s=Math.round((i-new Date(o))/1e3/60),l=t(o,{locale:this.$L}).$set("millisecond",this.$ms).utcOffset(15*-Math.round(i.getTimezoneOffset()/15)-s,!0);if(r){var d=l.utcOffset();l=l.add(a-d,"minute")}return l.$x.$timezone=e,l},o.offsetName=function(e){var r=this.$x.$timezone||t.tz.guess(),n=a(this.valueOf(),r,{timeZoneName:e}).find((function(e){return"timezonename"===e.type.toLowerCase()}));return n&&n.value};var s=o.startOf;o.startOf=function(e,r){if(!this.$x||!this.$x.$timezone)return s.call(this,e,r);var n=t(this.format("YYYY-MM-DD HH:mm:ss:SSS"),{locale:this.$L});return s.call(n,e,r).tz(this.$x.$timezone,!0)},t.tz=function(e,r,a){var o=a&&r,s=a||r||n,l=i(+t(),s);if("string"!=typeof e)return t(e).tz(s);var d=function(e,r,t){var n=e-60*r*1e3,a=i(n,t);if(r===a)return[n,r];var o=i(n-=60*(a-r)*1e3,t);return a===o?[n,a]:[e-60*Math.min(a,o)*1e3,Math.max(a,o)]}(t.utc(e,o).valueOf(),l,s),c=d[0],u=d[1],g=t(c).utcOffset(u);return g.$x.$timezone=s,g},t.tz.guess=function(){return Intl.DateTimeFormat().resolvedOptions().timeZone},t.tz.setDefault=function(e){n=e}}));Oa.extend(ja),Oa.extend(Wa),Oa.extend(_a),Oa.extend(za),Oa.extend(Pa),function(e){e.generateDays=e=>{const r=e.startOf("month"),t=Oa(r).startOf("week");return Va(t).map((e=>Ua(e)))},e.generateDaysForCurrentWeek=e=>{const r=e.startOf("week");return Ua(r)},e.generateMonths=e=>{const r=[];for(let t=0;t<12;t++){const n=e.month(t);r.push(Oa(n))}return r},e.generateDecadeOfYears=e=>{const r=e.year(),t=10*Math.floor(r/10),n=e.year(t),a=[n.subtract(1,"year"),n];for(let e=1;e<11;e++)a.push(n.add(e,"year"));return a},e.getStartEndDecade=e=>{const r=10*Math.floor(+e.format("YYYY")/10);return{beginDecade:r,endDecade:+Oa(`${r+9}-01-01`).format("YYYY")}},e.convertTo12HourFormat=e=>{const r=Oa(e,"HH:mm");return r.isValid()?r.format("h:mm a"):""},e.isWithinRange=(e,r,t,n="day")=>!r&&!t||(r&&t?e.isBetween(r,t,n,"[]"):r?e.isSameOrAfter(r,n):e.isSameOrBefore(t,n)),e.isPreviousMonthWithinRange=(r,t)=>e.isWithinRange(r.subtract(1,"month"),t,void 0,"month"),e.isPreviousYearWithinRange=(r,t)=>e.isWithinRange(r.subtract(1,"year"),t,void 0,"year"),e.isPreviousDecadeWithinRange=(r,t)=>{const{beginDecade:n}=e.getStartEndDecade(r);return e.isWithinRange(r.year(n).subtract(1,"year"),t,void 0,"year")},e.isNextMonthWithinRange=(r,t)=>e.isWithinRange(r.add(1,"month"),void 0,t,"month"),e.isNextYearWithinRange=(r,t)=>e.isWithinRange(r.add(1,"year"),void 0,t,"year"),e.isNextDecadeWithinRange=(r,t)=>{const{endDecade:n}=e.getStartEndDecade(r);return e.isWithinRange(r.year(n).add(1,"year"),void 0,t,"year")},e.getWeekStartEnd=e=>({start:e.startOf("week").format("YYYY-MM-DD"),end:e.endOf("week").format("YYYY-MM-DD")}),e.getFixedRangeStartEnd=(e,r)=>({start:e.format("YYYY-MM-DD"),end:e.add(r-1,"day").format("YYYY-MM-DD")}),e.isDisabledDay=(r,t,n,a)=>{const i=e.isWithinRange(r,n?Oa(n):void 0,a?Oa(a):void 0),o=t&&t.includes(r.format("YYYY-MM-DD"));return!i||!!o}}(Ha||(Ha={}));const Va=e=>{const r=[e];for(let t=1;t<6;t++){const n=e.add(t,"week");r.push(n)}return r},Ua=e=>{const r=[];for(let t=0;t<7;t++){const n=e.add(t,"day");r.push(n)}return r},Za=[1,3,5,7,8,10,12],Ka=[4,6,9,11];var Ja,qa,Xa,Ga;!function(e){e.clampDay=(r,t,n)=>{const a=parseInt(r),i=parseInt(t),o=parseInt(n);return 0==a?"1":Za.includes(i)?Math.min(a,31).toString():Ka.includes(i)?Math.min(a,30).toString():2===i?e.isLeapYear(o)?Math.min(a,29).toString():Math.min(a,28).toString():r},e.clampMonth=e=>{const r=parseInt(e);return 0==r?"1":r>12?"12":e},e.isLeapYear=e=>e%4==0&&e%100!=0||e%400==0,e.getTimeDiffInMinutes=(e,r,t="HH:mm")=>{const n=Oa(e,t);return Oa(r,t).diff(n,"minute")},e.toDayjs=e=>e?Oa(e):Oa(),e.addMinutesToTime=(e,r,t="HH:mm")=>Oa(e,t).add(r,"minutes").format(t),e.isSame=(e,r,t="day")=>Oa(e).isSame(Oa(r),t)}(Ja||(Ja={})),function(e){e.isDateDisabled=(e,r)=>{const{disabledDates:t,minDate:n,maxDate:a}=r;return!!(e&&t&&t.length&&t.includes(e))||(!(!n||!Oa(e).isBefore(n,"day"))||!(!a||!Oa(e).isAfter(a,"day")))},e.sanitizeInput=e=>{if(e){if(Oa(e).isValid())return e}return""}}(qa||(qa={})),function(e){e.generate=()=>Math.random().toString(36).substring(2,9)}(Xa||(Xa={})),function(e){e.transformWithSpaces=(e,r)=>{const t="(.{"+r+"})";return e.replace(/[^\dA-Z]/gi,"").replace(new RegExp(t,"g"),"$1 ").trim()},e.padValue=(e,r)=>{if("0"===e)return r?e:e.padStart(2,"0");if(""===e)return e;return parseInt(e).toString().padStart(2,"0")},e.shouldTruncateToTwoLines=(e,r)=>{const t=Math.floor(r/9);return e.length>=2*t||1===e.split(" ").length&&e.length>t},e.truncateOneLine=(e,r,t,n,a=8)=>{let i=0;r>t&&(i=Math.floor((r-t)/a));const o=n+i;if(o<e.length){const r=Math.floor(o/2);return e.substring(0,r)+" ... "+e.substring(e.length-r,e.length)}return e},e.truncateTwoLines=(e,r,t,n=1.2)=>{const a=Math.floor(2*r/(.6*t))*(2/n);if(e.length<=a)return e;const i=Math.floor(.6*a),o=Math.floor(.2*a);return`${e.substring(0,i)}...${e.substring(e.length-o)}`},e.getTextWidth=(r,t)=>{if("undefined"==typeof document)return 0;const n=(e.getTextWidth.canvas||(e.getTextWidth.canvas=document.createElement("canvas"))).getContext("2d");n.font=t;return n.measureText(r).width},e.maskValue=(e,t)=>{if(!e)return e;const{maskRange:n,unmaskRange:a,maskChar:i="•",maskRegex:o,maskTransformer:s}=t;if(s)return s(e);if(o)return e.replace(o,i);if(n){const{startIndex:t,endIndex:a}=r(n[0],n[1]);return e.substring(0,t)+i.repeat(e.substring(t,a+1).length)+e.substring(a+1)}if(a){const{startIndex:t,endIndex:n}=r(a[0],a[1]);return i.repeat(e.substring(0,t).length)+e.substring(t,n+1)+i.repeat(e.substring(n+1).length)}return e};const r=(e,r)=>e<r?{startIndex:e,endIndex:r}:{startIndex:r,endIndex:e},t=new Intl.PluralRules("en",{type:"ordinal"}),n=new Map([["one","st"],["two","nd"],["few","rd"],["other","th"]]);e.formatOrdinal=e=>{const r=t.select(e);return`${e}${n.get(r)}`}}(Ga||(Ga={}));const Qa=e=>{const[r,t]=o(e),n=i(e);return[r,b((e=>{n.current=e,t(e)}),[]),n]},ei=f.div`
    display: inline-block;
    position: relative;
    width: ${({$size:e})=>e?`${e}px`:"1em"};
    height: ${({$size:e})=>e?`${e}px`:"1em"};
    color: ${e=>e.$color||"currentColor"};
`,ri=v`
	0% {
	  transform: rotate(0deg);
	}
	100% {
	  transform: rotate(360deg);
	}
`,ti=f.div`
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
    animation: ${ri} 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
`,ni=f(ti)`
    animation-delay: -0.45s;
`,ai=f(ti)`
    animation-delay: -0.3s;
`,ii=f(ti)`
    animation-delay: -0.15s;
`,oi={Button:{"button-radius":an.md,"button-default-colour-bg":Yt["bg-primary"],"button-default-colour-bg-hover":Yt["bg-primary-hover"],"button-default-colour-text":Yt["text-inverse"],"button-secondary-colour-border":Yt["border-primary"],"button-secondary-colour-text":Yt["text-primary"],"button-light-colour-text":Yt["text-primary"],"button-link-colour-text":Yt["text-primary"]}},si={collections:{default:{Button:{"button-radius":an.sm,"button-default-colour-bg":Yt["bg-primary"],"button-default-colour-bg-hover":Yt["bg-primary-hover"],"button-default-colour-text":Yt["text-inverse"],"button-secondary-colour-border":Yt["border-primary"],"button-secondary-colour-text":Yt["text-primary"],"button-light-colour-text":Yt["text-primary"],"button-link-colour-text":Yt["text-primary"]}},pa:{Button:{"button-radius":an.full,"button-default-colour-bg":Yt["bg-primary"],"button-default-colour-bg-hover":Yt["bg-primary-hover"],"button-default-colour-text":Yt["text-inverse"],"button-secondary-colour-border":Yt["border-primary"],"button-secondary-colour-text":Yt["text-primary"],"button-light-colour-text":Yt["text-primary"],"button-link-colour-text":Yt["text-primary"]}},a11yplayground:oi},defaultValue:"default"},li=(e,r)=>t=>{var n,a;const i=t.theme,o=lt(si,null==i?void 0:i.componentScheme);return di((null===(a=null===(n=null==i?void 0:i.componentOverrides)||void 0===n?void 0:n[e])||void 0===a?void 0:a[r])||o[e][r],t)},di=(e,r)=>{switch(typeof e){case"function":return e(r);case"number":return e+"px";case"string":return e}},ci=li("Button","button-radius"),ui=li("Button","button-default-colour-bg"),gi=li("Button","button-default-colour-bg-hover"),bi=li("Button","button-default-colour-text"),hi=li("Button","button-secondary-colour-border"),mi=li("Button","button-secondary-colour-text"),yi=li("Button","button-light-colour-text"),fi=li("Button","button-link-colour-text"),pi=f.button`
    padding: ${hn["spacing-8"]} ${hn["spacing-16"]};
    min-width: 4rem;
    border: ${bn["width-010"]} ${bn.solid} transparent;
    transition: all ${gn["duration-250"]} ${gn["ease-default"]};
    border-radius: ${ci};
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;

    // -----------------------------------------------------------------------------
    // BUTTON STYLE + TEXT COLOR
    // -----------------------------------------------------------------------------
    ${e=>{switch(e.$buttonStyle){case"secondary":return p`
                    background-color: ${cn.Primitive.white};
                    border-color: ${e.$buttonIsDanger?cn["border-error-strong"]:hi};

                    color: ${e.$buttonIsDanger?cn["text-error"]:mi};

                    &:hover,
                    &:active {
                        background-color: ${cn["bg-hover-neutral"]};
                    }
                `;case"light":return p`
                    background-color: ${cn.bg};
                    border-color: ${cn.border};

                    color: ${e.$buttonIsDanger?cn["text-error"]:yi};

                    &:hover,
                    &:active {
                        background-color: ${cn["bg-hover-neutral"]};
                    }
                `;case"link":return p`
                    background-color: transparent;

                    color: ${e.$buttonIsDanger?cn["text-error"]:fi};
                    &:hover,
                    &:active {
                        background-color: ${cn["bg-hover-neutral"]};
                    }
                `;case"disabled":return p`
                    background-color: ${cn["bg-disabled"]};

                    cursor: not-allowed;

                    &:hover {
                        box-shadow: none;
                    }

                    color: ${cn["text-disabled"]};
                `;default:return p`
                    background-color: ${e.$buttonIsDanger?cn["bg-error-strong"]:ui};};

                    ${fn.MaxWidth.sm} {
                        width: 100%;
                    }

                    color: ${bi}};

                    &:hover,
                    &:active {
                        background-color: ${e.$buttonIsDanger?cn["bg-error-strong-hover"]:gi}
                        };
                    }
                `}}}

    // -----------------------------------------------------------------------------
	// BUTTON SIZE + TEXT SIZE
	// -----------------------------------------------------------------------------
	${e=>{switch(e.$buttonSizeStyle){case"small":return p`
                    height: 2.5rem;
                    ${un["body-md-semibold"]}

                    ${fn.MaxWidth.xxs} {
                        height: auto;
                    }
                `;case"large":return p`
                    height: 4rem;
                    ${un["heading-md-semibold"]}

                    ${fn.MaxWidth.xxs} {
                        height: auto;
                    }
                `;default:return p`
                    height: 3rem;
                    ${un["heading-xs-semibold"]}

                    ${fn.MaxWidth.xxs} {
                        height: auto;
                    }
                `}}}
`,vi=f((({color:r,className:n,size:a})=>e(ei,{className:n,$size:a,$color:r,"data-testid":"component-loading-spinner",children:[t(ti,{id:"inner1"}),t(ni,{id:"inner2"}),t(ai,{id:"inner3"}),t(ii,{id:"inner4"})]})))`
    margin-right: 0.5rem;
`,xi=(r,n)=>{const{children:a,disabled:i=!1,loading:o=!1,styleType:s="default",danger:l=!1}=r,d=R(r,["children","disabled","loading","styleType","danger"]),c={$buttonStyle:i?"disabled":s,$buttonSizeStyle:"default",$buttonIsDanger:l};return e(pi,Object.assign({ref:n,"data-testid":d["data-testid"]||"button",disabled:i},c,d,{children:[o&&t(vi,{}),t("span",{children:a})]}))};xi.displayName="Button.Default";const wi=(r,n)=>{const{children:a,disabled:i=!1,loading:o=!1,styleType:s="default",danger:l=!1}=r,d=R(r,["children","disabled","loading","styleType","danger"]),c={$buttonStyle:i?"disabled":s,$buttonSizeStyle:"small",$buttonIsDanger:l};return e(pi,Object.assign({ref:n,"data-testid":d["data-testid"]||"button",disabled:i},c,d,{children:[o&&t(vi,{}),t("span",{children:a})]}))};wi.displayName="Button.Small";const Di=(r,n)=>{const{children:a,disabled:i=!1,loading:o=!1,styleType:s="default",danger:l=!1}=r,d=R(r,["children","disabled","loading","styleType","danger"]),c={$buttonStyle:i?"disabled":s,$buttonSizeStyle:"large",$buttonIsDanger:l};return e(pi,Object.assign({ref:n,"data-testid":d["data-testid"]||"button",disabled:i},c,d,{children:[o&&t(vi,{}),t("span",{children:a})]}))};Di.displayName="Button.Large";const Fi={Default:a.forwardRef(xi),Small:a.forwardRef(wi),Large:a.forwardRef(Di)},$i=f.button`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: ${hn["spacing-24"]};
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

        ${({$highlight:e})=>e&&p`
                background-color: ${cn["bg-hover-neutral"]};
            `}
    }
`,Ei=a.forwardRef(((e,r)=>{var{children:n,focusHighlight:a=!0,focusOutline:i="none",type:o="button"}=e,s=R(e,["children","focusHighlight","focusOutline","type"]);return t($i,Object.assign({ref:r,$outline:i,$highlight:a,type:o},s,{children:n}))})),Ci=p`
    color: ${cn.icon};
    height: 1rem;
    width: 1rem;
`,Si=f(T)`
    ${Ci}
`,Bi=f(_)`
    ${Ci}
`,Ai=f(y)`
    ${Ci}
    transition: transform 250ms ease-in-out;
    margin-left: 0.5rem;
`,ki=f.div`
    position: relative;
    width: 100%;
    display: flex;
    flex-direction: column;

    padding-top: var(--vertical-inset);
    padding-bottom: var(--vertical-inset);
`,Oi=f.div`
    display: flex;
    flex: 1;
    position: relative;
`,Mi=f.div`
    isolation: isolate;
    width: 100%;

    padding-left: var(--horizontal-inset);
    padding-right: var(--horizontal-inset);
`,zi=f.div`
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    background: ${cn.bg};

    padding-left: var(--horizontal-inset);
    padding-right: var(--horizontal-inset);

    ${e=>{if(!e.$visible)return p`
                display: none;
            `}}
`,Yi=f.div`
    display: flex;
    justify-content: space-between;

    padding-left: var(--header-horizontal-inset, var(--horizontal-inset));
    padding-right: var(--header-horizontal-inset, var(--horizontal-inset));
    padding-bottom: var(--header-bottom-spacing);
`,ji=f.div`
    display: flex;
`,Ti=f.button`
    border: none;
    display: flex;
    align-items: center;
    padding: 0.5rem;
    background: transparent;
    cursor: pointer;

    ${e=>!1===e.$visible?p`
                display: none;
            `:e.$expanded?p`
                ${Ai} {
                    transform: rotate(180deg);
                }
            `:void 0};
`,_i=f.span`
    ${un["body-md-regular"]}
    color: ${cn.text};
`,Ri=f.div`
    display: flex;
`,Ii=f(Ei)`
    margin: auto 0;
    padding: 0.75rem;

    :disabled {
        cursor: not-allowed;
    }
`,Li=f.div`
    display: flex;
    gap: 0.5rem;
    margin-top: 1.5rem;

    padding-left: var(--horizontal-inset);
    padding-right: var(--horizontal-inset);
`,Hi=f(Fi.Small)`
    flex: 1;
`,Wi=f.div`
    width: 100%;
    height: 100%;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(6, 2.5rem);
    align-content: center;
    justify-content: center;

    gap: 0.5rem 0;
`,Ni=f.div`
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: ${mn.md};
    margin: 0 0.5rem;
    transition: ${gn["duration-150"]} ${gn["ease-default"]};

    // default styles
    ${un["body-md-regular"]}
    border-radius: ${mn.md};
    border: ${bn["width-010"]} ${bn.solid} transparent;
    background-clip: border-box;
    color: ${cn.text};
    cursor: default;

    // cursor style
    ${e=>e.$interactive?p`
                cursor: pointer;
            `:e.$disabledDisplay?p`
                cursor: not-allowed;
            `:void 0}

    // background, border and text styles
    ${({$variant:e,$interactive:r,$disabledDisplay:t})=>"selected-month"===e?p`
                background: ${cn["bg-selected"]};
                border-color: ${cn["border-selected"]};
                color: ${cn["text-selected"]};
                font-weight: ${un.Spec["weight-semibold"]};

                ${r&&p`
                    &:hover {
                        background: ${cn["bg-selected-hover"]};
                        border-color: ${cn["border-selected-hover"]};
                        color: ${cn["text-selected-hover"]};
                    }
                `}
            `:"current-month"===e?p`
                color: ${cn["text-primary"]};
                font-weight: ${un.Spec["weight-semibold"]};
            `:t?p`
                color: ${cn["text-disabled-subtlest"]};
            `:void 0}

    // hover styles
    ${({$variant:e,$interactive:r})=>{if(r)return"selected-month"===e?p`
                &:hover {
                    background: ${cn["bg-selected-hover"]};
                    border-color: ${cn["border-selected-hover"]};
                    color: ${cn["text-selected-hover"]};
                    font-weight: ${un.Spec["weight-semibold"]};
                }
            `:p`
            &:hover {
                background: ${cn["bg-hover"]};
                color: ${cn["text-hover"]};
                font-weight: ${un.Spec["weight-semibold"]};
            }
        `}}
`,Pi=({calendarDate:e,currentFocus:r,selectedStartDate:n,selectedEndDate:a,viewCalendarDate:s,isNewSelection:l,minDate:d,maxDate:c,allowDisabledSelection:g,onMonthSelect:b})=>{const m=h((()=>Ha.generateMonths(Oa(e))),[e]),y=i(new Array(m.length).fill(null)),[f,p]=o(m.findIndex((e=>e.isSame(s,"month"))));u((()=>{var e;null!==f&&(null===(e=y.current[f])||void 0===e||e.focus())}),[f,m]);const v=(e,r)=>{r||b(e)},x=e=>{const t="start"===r&&a&&e.isAfter(a,"month")&&l,i="end"===r&&n&&e.isBefore(n,"month")&&l;return!(!t&&!i)},w=e=>{const r=e.format("MMMM"),t=(n=e,!Ha.isWithinRange(n,d?Oa(d):void 0,c?Oa(c):void 0,"month"));var n;const a=s.isSame(e,"month"),i=a?"selected-month":Oa().isSame(e,"month")?"current-month":"default",o=s.isSame(e,"year")?a?0:-1:0===e.month()?0:-1;return{disabledDisplay:t||x(e),interactive:!t||g,month:r,variant:i,tabIndex:o}};return m.length?t(Wi,{onBlur:()=>{p(null)},children:m.map(((e,r)=>{const{disabledDisplay:n,interactive:a,variant:i,month:o,tabIndex:s}=w(e);return t(Ni,{ref:e=>y.current[r]=e,tabIndex:s,role:"button","aria-disabled":!a,"aria-selected":"selected-month"===i,$variant:i,$disabledDisplay:n,$interactive:a,onClick:()=>v(e,!a),onKeyDown:r=>{((e,r,t)=>{const n=e.key;let a;const i=m.indexOf(r);switch(n){case"Enter":case" ":e.preventDefault(),v(r,t);break;case"ArrowLeft":a=i-1;break;case"ArrowRight":a=i+1;break;case"ArrowUp":a=i-2;break;case"ArrowDown":a=i+2}void 0!==a&&a>=0&&a<m.length&&(e.preventDefault(),p(a))})(r,e,!a)},children:o},o)}))}):null},Vi=f.div`
    width: 100%;
    height: 100%;
    display: grid;
    align-content: center;
    align-items: center;
    grid-template-columns: repeat(3, 1fr);
`,Ui=f.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 1rem 0.5rem;
    transition: ${gn["duration-150"]} ${gn["ease-default"]};
    padding: 0.5rem;

    // default styles
    ${un["body-md-regular"]}
    border-radius: ${mn.md};
    border: ${bn["width-010"]} ${bn.solid} transparent;
    background-clip: border-box;
    color: ${cn.text};
    cursor: default;

    // cursor style
    ${({$interactive:e,$disabledDisplay:r})=>e?p`
                cursor: pointer;
            `:r?p`
                cursor: not-allowed;
            `:void 0}

    // background, border and text styles
    ${({$variant:e,$interactive:r,$disabledDisplay:t})=>"selected-year"===e?p`
                background: ${cn["bg-selected"]};
                border-color: ${cn["border-selected"]};
                color: ${cn["text-selected"]};
                font-weight: ${un.Spec["weight-semibold"]};

                ${r&&p`
                    &:hover {
                        background: ${cn["bg-selected-hover"]};
                        border-color: ${cn["border-selected-hover"]};
                        color: ${cn["text-selected-hover"]};
                    }
                `}
            `:"current-year"===e?p`
                color: ${cn["text-primary"]};
                font-weight: ${un.Spec["weight-semibold"]};
            `:"other-decade"===e||t?p`
                color: ${cn["text-disabled-subtlest"]};
            `:void 0}

    // hover styles
    ${({$variant:e,$interactive:r})=>{if(r)return"selected-year"===e?p`
                &:hover {
                    background: ${cn["bg-selected-hover"]};
                    border-color: ${cn["border-selected-hover"]};
                    color: ${cn["text-selected-hover"]};
                    font-weight: ${un.Spec["weight-semibold"]};
                }
            `:p`
            &:hover {
                background: ${cn["bg-hover"]};
                color: ${cn["text-hover"]};
                font-weight: ${un.Spec["weight-semibold"]};
            }
        `}}
`,Zi=({calendarDate:e,currentFocus:r,selectedStartDate:n,selectedEndDate:a,viewCalendarDate:s,isNewSelection:l,minDate:d,maxDate:c,allowDisabledSelection:g,onYearSelect:b,setCalendarDate:m})=>{const y=h((()=>Ha.generateDecadeOfYears(Oa(e))),[e]),f=i(new Array(y.length).fill(null)),[p,v]=o(e);u((()=>{var e;if(null===p)return;const r=y.findIndex((e=>e.isSame(p,"year")));r>=0&&(null===(e=f.current[r])||void 0===e||e.focus())}),[p,y]);const x=(e,r)=>{r||b(e)},w=e=>{const t="start"===r&&a&&e.isAfter(a,"year")&&l,i="end"===r&&n&&e.isBefore(n,"year")&&l;return!(!t&&!i)},D=e=>{const r=y.indexOf(e),t=[0,11].includes(r),n=e.year(),a=(i=e,!Ha.isWithinRange(i,d?Oa(d):void 0,c?Oa(c):void 0,"year"));var i;const o=t?"other-decade":s.isSame(e,"year")?"selected-year":Oa().isSame(e,"year")?"current-year":"default",l=s.year()>=y[0].year()&&s.year()<=y[y.length-1].year()?"selected-year"===o?0:-1:1===r?0:-1;return{disabledDisplay:a||w(e),interactive:!a||g,year:n,variant:o,tabIndex:l}};return y.length?t(Vi,{onBlur:()=>{v(null)},children:y.map(((e,r)=>{const{disabledDisplay:n,interactive:a,variant:i,year:o,tabIndex:s}=D(e);return t(Ui,{ref:e=>{f.current[r]=e},tabIndex:s,role:"button","aria-label":`${o}`,"aria-disabled":!a,"aria-selected":"selected-year"===i,$variant:i,$disabledDisplay:n,$interactive:!!a,onClick:()=>x(e,!a),onKeyDown:r=>{((e,r,t)=>{let n;switch(e.key){case"Enter":case" ":e.preventDefault(),x(r,t);break;case"ArrowLeft":n=r.subtract(1,"year");break;case"ArrowRight":n=r.add(1,"year");break;case"ArrowUp":n=r.subtract(3,"year");break;case"ArrowDown":n=r.add(3,"year")}void 0!==n&&(e.preventDefault(),m(n),v(n))})(r,e,!a)},children:o},o)}))}):null},Ki=a.forwardRef(((n,a)=>{var{children:s,initialCalendarDate:l,minDate:d,maxDate:c,currentFocus:g,selectedStartDate:b,selectedEndDate:h,selectWithinRange:y,dynamicHeight:f=!1,allowDisabledSelection:p,onCalendarDateChange:v,withButton:x,doneButtonDisabled:w,onDismiss:D,showNavigationHeader:F=!0,getLeftArrowDate:$,getRightArrowDate:E,isLeftArrowDisabled:C,isRightArrowDisabled:S,getMonthHeaderLabel:B,getYearHeaderLabel:A,isFocusable:k=!1}=n,O=R(n,["children","initialCalendarDate","minDate","maxDate","currentFocus","selectedStartDate","selectedEndDate","selectWithinRange","dynamicHeight","allowDisabledSelection","onCalendarDateChange","withButton","doneButtonDisabled","onDismiss","showNavigationHeader","getLeftArrowDate","getRightArrowDate","isLeftArrowDisabled","isRightArrowDisabled","getMonthHeaderLabel","getYearHeaderLabel","isFocusable"]);const[M,z]=o(Ja.toDayjs(l)),[Y,j]=o(Ja.toDayjs(l)),[T,_]=o("default"),I=i(null),L=i(null),H=i(null),W=i(null);m(a,(()=>({defaultView(){_("default")},resetView(){const e=Ja.toDayjs(l);z(e),j(e),_("default")},setCalendarDate(e){const r=Ja.toDayjs(e);z(r),j(r)}}))),u((()=>{const e=Ja.toDayjs(l);z(e),j(e)}),[l]),u((()=>{X(Y)}),[Y]);const N=()=>{var e;"month-options"!==T?(_("month-options"),null===(e=H.current)||void 0===e||e.focus()):(_("default"),z(Y))},P=e=>{var r;if("Enter"!==e.key&&" "!==e.key||(e.preventDefault(),N(),null===(r=W.current)||void 0===r||r.focus()),"ArrowUp"===e.key||"ArrowDown"===e.key){e.preventDefault();const r="ArrowUp"===e.key?M.subtract(1,"month"):M.add(1,"month");if(!Ha.isWithinRange(r,d?Oa(d):void 0,c?Oa(c):void 0,"month"))return;z(r),"default"===T&&j(r)}},V=()=>{"default"!==T?(_("default"),z(Y)):_("year-options")},U=e=>{if("Enter"!==e.key&&" "!==e.key||(e.preventDefault(),V()),"ArrowUp"===e.key||"ArrowDown"===e.key){e.preventDefault();let r;if(r="year-options"===T?"ArrowUp"===e.key?M.subtract(10,"year"):M.add(10,"year"):"ArrowUp"===e.key?M.subtract(1,"year"):M.add(1,"year"),!Ha.isWithinRange(r,d?Oa(d):void 0,c?Oa(c):void 0,"year"))return;z(r),"default"===T&&j(r)}},Z=()=>{var e;null===(e=H.current)||void 0===e||e.focus();const r=$?$(M):M.subtract(1,"month");switch(T){case"default":j(r),z(r);break;case"month-options":z((e=>e.subtract(1,"year")));break;case"year-options":z((e=>e.subtract(10,"year")))}},K=()=>{var e;null===(e=H.current)||void 0===e||e.focus();const r=E?E(M):M.add(1,"month");switch(T){case"default":j(r),z(r);break;case"month-options":z((e=>e.add(1,"year")));break;case"year-options":z((e=>e.add(10,"year")))}},J=e=>{z(e),j(e),x||_("default")},q=()=>{const e=Ja.toDayjs(l);z(e),j(e),"default"===T?G("reset"):_("default")},X=e=>{v&&v(e)},G=e=>{D&&D(e)},Q=()=>{if(!d||p)return!1;const e=Oa(d);return"month-options"===T?!Ha.isPreviousYearWithinRange(M,e):"year-options"===T?!Ha.isPreviousDecadeWithinRange(M,e):C?C(M):!Ha.isPreviousMonthWithinRange(M,e)},ee=()=>{if(!c||p)return!1;const e=Oa(c);return"month-options"===T?!Ha.isNextYearWithinRange(M,e):"year-options"===T?!Ha.isNextDecadeWithinRange(M,e):S?S(M):!Ha.isNextMonthWithinRange(M,e)},re=()=>{const n=B?B(M):M.format("MMM"),a=Oa(n,"MMM").format("MMMM"),i=(()=>{if("year-options"===T){const{beginDecade:e,endDecade:r}=Ha.getStartEndDecade(M);return`${e} to ${r}`}return A?A(M):M.format("YYYY")})(),o={"month-options":`${i}, Close month selection`,"year-options":`${i}, Close year selection`,default:`${i}, Select year`};return e(r,{children:[e(Ti,{"aria-label":`${a}, Select month`,type:"button",$expanded:"month-options"===T,$visible:"default"===T,id:"month-dropdown",onClick:N,onKeyDown:P,tabIndex:k?0:-1,children:[t(_i,{children:n}),t(Ai,{})]}),e(Ti,{ref:W,"aria-label":o[T],type:"button",$expanded:"default"!==T,id:"year-dropdown",onClick:V,onKeyDown:U,tabIndex:k?0:-1,children:[t(_i,{children:i}),t(Ai,{})]})]})},te=()=>{switch(T){case"month-options":return t(Pi,{calendarDate:M,currentFocus:g,minDate:d,maxDate:c,selectedStartDate:b,selectedEndDate:h,viewCalendarDate:Y,isNewSelection:!!y,onMonthSelect:J,allowDisabledSelection:p});case"year-options":return t(Zi,{setCalendarDate:z,calendarDate:M,currentFocus:g,minDate:d,maxDate:c,selectedStartDate:b,selectedEndDate:h,viewCalendarDate:Y,isNewSelection:!!y,onYearSelect:J,allowDisabledSelection:p});default:return null}};return e(ki,Object.assign({ref:H,"data-id":"calendar-container","data-testid":"calendar-container","aria-label":Y.format("MMMM, YYYY"),role:"group"},O,{children:[F&&(()=>{const r={"month-options":"year","year-options":"decade",default:"month"}[T];return e(Yi,{"data-id":"calendar-header","data-testid":"calendar-header",children:[t(ji,{children:re()}),e(Ri,{children:[t(Ii,{"aria-label":`Previous ${r}`,"data-testid":"left-arrow-btn",disabled:Q(),focusHighlight:!1,focusOutline:"browser",onClick:Z,tabIndex:k?0:-1,children:t(Si,{})}),t(Ii,{"aria-label":`Next ${r}`,"data-testid":"right-arrow-btn",disabled:ee(),focusHighlight:!1,focusOutline:"browser",onClick:K,tabIndex:k?0:-1,children:t(Bi,{})})]})]})})(),t(Oi,{children:(()=>{const n="function"==typeof s?s({calendarDate:Y,currentView:T}):s;if(f)return e(r,{children:["default"===T&&n,te()]});{const a="default"===T;return e(r,{children:[t(Mi,{inert:a?void 0:"",children:n}),t(zi,{$visible:!a,children:te()})]})}})()}),(()=>{if(!x)return;const r=!!("default"===T)&&w;return e(Li,{children:[t(Hi,{ref:L,"data-testid":"cancel-button",styleType:"light",type:"button",onClick:q,children:"Cancel"}),t(Hi,{"data-testid":"done-button",ref:I,type:"button",onClick:()=>{r||(z(Y),"default"===T?G("confirmed"):_("default"))},disabled:r,children:"Done"})]})})()]}))})),Ji=f.div`
    width: 100%;
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    row-gap: 0.25rem;
`,qi=f.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 2.5rem;
    pointer-events: none;
    user-select: none;

    ${un["body-sm-semibold"]};
    color: ${cn.text};
`,Xi=f.div`
    grid-column: 1 / -1;
    display: flex;
`,Gi=e=>{let r=cn.bg,t="transparent";switch(e.$type){case"hover-subtle":r=cn["bg-hover"],t=cn["bg-hover"];break;case"hover":r=cn["bg-hover-strong"],t=cn["bg-hover-strong"];break;case"hover-outline":r=cn["bg-hover-subtle"],t=cn["border-hover"];break;case"selected-outline":r=cn["bg-selected"],t=cn["border-selected"];break;case"selected-outline-subtle":r=cn["bg-selected"],t=cn["border-selected-subtle"];break;case"selected-hover":r=cn["bg-selected-hover"];break;case"selected-hover-outline":r=cn["bg-selected-hover"],t=cn["border-selected-hover"]}return{color:r,borderColor:t}},Qi=f.div`
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    width: 100%;
    height: 2.5rem;
`,eo=f.div`
    position: absolute;
    height: 2.5rem;
    width: 50%;
    transition: ${gn["duration-150"]} ${gn["ease-default"]};
    border: ${bn["width-010"]} ${bn.solid} transparent;
    border-left: none;
    border-right: none;

    ${e=>{if(!e.$type)return;const{color:r,borderColor:t}=Gi(e);return p`
            background-color: ${r};
            background-clip: border-box;
            border-top-color: ${t};
            border-bottom-color: ${t};
        `}}
`,ro=f(eo)`
    left: 0;
`,to=f(eo)`
    right: 0;
`,no=f.div`
    position: absolute;
    z-index: 1;

    display: flex;
    align-items: center;
    justify-content: center;
    height: 2.5rem;
    width: 2.5rem;
    transition: ${gn["duration-150"]} ${gn["ease-default"]};

    border: ${bn["width-010"]} ${bn.solid} transparent;
    border-radius: ${mn.md};

    ${e=>{if(e.$type){const{color:r,borderColor:t}=Gi(e);return p`
                background-color: ${r};
                background-clip: content-box;
                border-color: ${t};
            `}}}
`,ao=f(no)`
    right: calc(50% - 1.25rem);
    clip-path: inset(-3px 1.25rem -3px -3px);
`,io=f(no)`
    left: calc(50% - 1.25rem);
    clip-path: inset(-3px -3px -3px 1.25rem);
`,oo=f.span`
    position: absolute;
    top: 0;
    bottom: 0;
    z-index: 2;
    cursor: ${e=>e.$interactive?"pointer":null===e.$interactive?"default":"not-allowed"};
`,so=f.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 2.5rem;
    width: 2.5rem;
    ${un["body-md-regular"]}
    transition: ${gn["duration-150"]} ${gn["ease-default"]};

    pointer-events: ${e=>e.$interactive||null===e.$interactive?"auto":"none"};

    ${e=>{const{$disabled:r,$type:t}=e;if(r)return"hidden"===t?p`
                    visibility: hidden;
                `:p`
                color: ${cn["text-disabled-subtlest"]};
            `;switch(t){case"selected":return p`
                    font-weight: ${un.Spec["weight-semibold"]};
                    color: ${cn["text-selected"]};
                `;case"selected-hover":return p`
                    font-weight: ${un.Spec["weight-semibold"]};
                    color: ${cn["text-selected-hover"]};
                `;case"current":return p`
                    font-weight: ${un.Spec["weight-semibold"]};
                    color: ${cn["text-primary"]};
                `;case"hover":return p`
                    font-weight: ${un.Spec["weight-semibold"]};
                    color: ${cn["text-hover"]};
                `;case"unavailable":return p`
                    color: ${cn["text-disabled-subtlest"]};
                `;case"hidden":return p`
                    visibility: hidden;
                `;default:return p`
                    color: ${cn.text};
                `}}}

    &:focus {
        outline: none;
    }
`,lo=f.div`
    position: absolute;
    width: 4px;
    height: 4px;
    background-color: currentColor;
    border-radius: 50%;
    bottom: 4px;
`,co=({bgLeft:r,bgRight:n,circleLeft:a,circleRight:o,labelType:s,disabled:l,interactive:d,currentDateIndicator:c,date:g,onSelect:b,onHover:h,onFocus:m,onHoverEnd:y,onKeyDown:f,tabIndex:p=-1,role:v="button",focusDate:x})=>{const w=Oa().isSame(g,"day"),D=`${g.format("D MMMM YYYY dddd")}, ${l?"Unavailable":"Available"}`,F=!!x&&x.isSame(g,"day"),$=i(null);u((()=>{var e;F&&$.current&&(null===(e=$.current)||void 0===e||e.focus())}),[F]);return e(Qi,{children:[t(ro,{$type:r}),t(ao,{$type:a}),t(to,{$type:n}),t(io,{$type:o}),t(oo,{$interactive:d,children:e(so,{ref:$,tabIndex:p,role:v,"aria-label":D,"aria-disabled":!d,"aria-selected":"selected"===s||"selected-hover"===s,$type:s,$disabled:l,$interactive:d,onClick:()=>{b(g)},onKeyDown:e=>{f&&f(e)},onMouseEnter:()=>{h(g)},onMouseLeave:()=>{y&&y(g)},onFocus:()=>{m&&m(g)},children:[g.date(),c&&w&&t(lo,{$disabled:l})]})})]})},uo=({date:e,calendarDate:r,startDate:n,endDate:a,currentFocus:i,hoverDate:o,focusDate:s,minDate:l,maxDate:d,disabledDates:c,allowDisabledSelection:u,isNewSelection:g,showActiveMonthDaysOnly:b,onSelect:h,onHover:m,onFocus:y,setFocusCell:f,tabIndex:p=-1})=>{const v=Ha.isDisabledDay(e,c,l,d),x=!v||u,w=()=>{h(e,!x)},D=()=>{const e=Oa(o),r=e.isBefore(a,"day"),t=e.isAfter(n,"day");let s,l,d,c;return"start"===i&&a&&r&&(n&&t?(d=o,c=a):(s=o,l=n||a)),"end"===i&&n&&t&&(a&&r?(d=n,c=o):(s=a||n,l=o)),{hoverStart:s,hoverEnd:l,overlapStart:d,overlapEnd:c}},F={date:e,calendarDate:r,disabled:v,interactive:x,currentDateIndicator:!0,onSelect:w,onHover:()=>{m(e.format("YYYY-MM-DD"),!x)},onFocus:()=>{y(e.format("YYYY-MM-DD"))},onKeyDown:r=>{const t=r.key;if("Enter"===t||" "===t)return r.preventDefault(),void(x&&w());(r=>{let t;const n={ArrowLeft:()=>e.subtract(1,"day"),ArrowRight:()=>e.add(1,"day"),ArrowUp:()=>e.subtract(7,"day"),ArrowDown:()=>e.add(7,"day"),Home:()=>e.startOf("week"),End:()=>e.endOf("week"),PageUp:()=>r.shiftKey?e.subtract(1,"year"):e.add(1,"month"),PageDown:()=>r.shiftKey?e.subtract(1,"year"):e.add(1,"month")}[r.key];n&&(r.preventDefault(),t=n(),f(t.format("YYYY-MM-DD")))})(r)},role:"gridcell",focusDate:Oa(s),tabIndex:p};return t(co,Object.assign({},F,(()=>{const t={};if(r.month()!==e.month())t.labelType=b?"hidden":"unavailable";else if(Oa().isSame(e,"day")&&!v)t.labelType="current";else if(g){const r="end"===i&&n&&e.isBefore(n),o="start"===i&&a&&e.isAfter(a);(r||o)&&(t.labelType="unavailable")}return t})(),(()=>{const t={},i=e.isSame(n,"day"),o=e.isSame(a,"day");return b&&r.month()!==e.month()?(t.labelType="hidden",t):((n&&i||a&&o)&&(t.labelType="selected",t.circleLeft="selected-outline",t.circleRight="selected-outline"),n&&a&&e.isBetween(n,a,"day","[]")&&(t.labelType="selected",i||(t.bgLeft="selected-outline-subtle"),o||(t.bgRight="selected-outline-subtle")),t)})(),(()=>{if(!o)return{};const r={},t=e.isSame(o,"day"),{hoverStart:i,hoverEnd:s,overlapStart:l,overlapEnd:d}=D();if(t){const t=e.isSame(n,"day"),i=e.isSame(a,"day");t||i?(r.labelType="selected-hover",r.circleLeft="selected-hover-outline",r.circleRight="selected-hover-outline"):(r.labelType="hover",r.circleLeft="hover",r.circleRight="hover")}if(i&&s){if(e.isBetween(i,s,"day","[]")){const t=e.isSame(i,"day"),n=e.isSame(s,"day");t||(r.labelType="hover",r.bgLeft="hover-outline"),n||(r.labelType="hover",r.bgRight="hover-outline")}return r}return l&&d?(e.isBetween(l,d,"day","[]")&&t&&(r.labelType="selected-hover",r.circleLeft="selected-hover",r.circleRight="selected-hover"),r):r})()))};Oa.extend(ja);const go=({calendarDate:r,currentFocus:n,disabledDates:a,selectedStartDate:s,selectedEndDate:l,onSelect:d,onHover:c,isNewSelection:g,minDate:m,maxDate:y,allowDisabledSelection:f,showActiveMonthDaysOnly:p,setCalendarDate:v})=>{const x=i(null);u((()=>{if(x.current){const e=x.current;x.current=null,C(e)}}),[r]);const w=b((()=>s&&Oa(s).isSame(r,"month")?Oa(s):l&&Oa(l).isSame(r,"month")?Oa(l):Oa().isSame(r,"month")?Oa():m&&r.isSame(Oa(m),"month")?Oa(m):Oa(r).startOf("month")),[s,r,l,m]),D=e=>{const t=Oa(e);if(Ha.isWithinRange(t,m?Oa(m):void 0,y?Oa(y):void 0)){if(!t.isSame(r,"month"))return null==v||v(e),void(x.current=e);C(e)}},F=h((()=>Ha.generateDays(r)),[r]),$=h((()=>w()),[w]),[E,C]=o(""),[S,B]=o(""),A=(e,r)=>{r&&!f||d(e)},k=(e,r)=>{r&&!f||(B(e),c(e))},O=e=>{B(e),c(e)},M=()=>{B(""),c("")};return e(Ji,{role:"grid","aria-label":"Date grid","data-testid":"calendar-content",onBlur:e=>{e.currentTarget.contains(e.relatedTarget)||(C(""),B(""),c(""))},children:[F[0].map(((e,r)=>t(qi,{"aria-hidden":!0,children:Oa(e).format("ddd")},`week-day-${r}`))),F.map(((e,i)=>t(Xi,{role:"row","aria-label":`Week ${i+1}`,onMouseLeave:M,children:e.map(((e,i)=>t(uo,{date:e,calendarDate:r,startDate:s,endDate:l,hoverDate:S,focusDate:E,currentFocus:n,minDate:m,maxDate:y,disabledDates:a,allowDisabledSelection:f,isNewSelection:g,showActiveMonthDaysOnly:p,onSelect:A,onHover:k,onFocus:O,setFocusCell:D,tabIndex:e.isSame($,"day")?0:-1},`day-${i}`)))},i)))]})},bo=({date:e,calendarDate:r,selectedDate:n,hoverDate:a,minDate:i,maxDate:o,disabledDates:s,allowDisabledSelection:l,numberOfDays:d=1,onSelect:c,onHover:u})=>{const g=Ha.isDisabledDay(e,s,i,o),b=!g||l,{start:h,end:m}=n?Ha.getFixedRangeStartEnd(Ja.toDayjs(n),d):{start:void 0,end:void 0},{start:y,end:f}=a?Ha.getFixedRangeStartEnd(Ja.toDayjs(a),d):{start:void 0,end:void 0},p=!!n&&e.isBetween(h,m,"day","[]"),v=!!a&&e.isBetween(y,f,"day","[]"),x=p&&e.isSame(h,"day")||v&&e.isSame(y,"day"),w=p&&e.isSame(m,"day")||v&&e.isSame(f,"day"),D=(e,r,t,n)=>{t?e.circleLeft=r:e.bgLeft=r,n?e.circleRight=r:e.bgRight=r},F={date:e,calendarDate:r,disabled:g,interactive:b,currentDateIndicator:!0,onSelect:()=>{c(e,!b)},onHover:()=>{u(e.format("YYYY-MM-DD"),!b)}};return t(co,Object.assign({},F,(()=>{const t={};return p||v?t.labelType="selected":r.month()!==e.month()?t.labelType="unavailable":Oa().isSame(e,"day")&&!g&&(t.labelType="current"),t})(),(()=>{const r={},t=e.format("YYYY-MM-DD");return v&&D(r,"hover",t===y,t===f),p&&D(r,"selected-outline",t===h,t===m),p&&v&&(D(r,"selected-hover-outline",x,w),t===y&&t!==h&&(r.circleLeft="selected-hover")),r})()))},ho=({calendarDate:r,disabledDates:n,selectedStartDate:a,onSelect:i,onHover:s,minDate:l,maxDate:d,allowDisabledSelection:c,numberOfDays:u})=>{const g=h((()=>Ha.generateDays(r)),[r]),[b,m]=o(""),y=(e,r)=>{r&&!c||(i(e),e&&!Oa(e).isSame(e,"month")&&m(""))},f=(e,r)=>{r&&!c||(m(e),s(e))},p=()=>{m(""),s("")};return e(Ji,{"data-testid":"calendar-content",children:[g[0].map(((e,r)=>t(qi,{children:Oa(e).format("ddd")},`week-day-${r}`))),g.map(((e,i)=>t(Xi,{onMouseLeave:p,children:e.map(((e,i)=>t(bo,{date:e,calendarDate:r,selectedDate:a,hoverDate:b,minDate:l,maxDate:d,disabledDates:n,allowDisabledSelection:c,onSelect:y,onHover:f,numberOfDays:u},`day-${i}`)))},i)))]})},mo=f.div`
    width: 100%;
    background: ${cn.bg};
`,yo=({date:e,calendarDate:r,selectedDate:n,hoverDate:a,minDate:i,maxDate:o,disabledDates:s,allowDisabledSelection:l,showActiveMonthDaysOnly:d,onSelect:c,onHover:u})=>{const g=Ha.isDisabledDay(e,s,i,o),b=!g||l,h={date:e,calendarDate:r,disabled:g,interactive:b,currentDateIndicator:!0,onSelect:()=>{c(e,!b)},onHover:()=>{u(e.format("YYYY-MM-DD"),!b)}};return t(co,Object.assign({},h,(()=>{const t={};r.month()!==e.month()?t.labelType=d?"hidden":"unavailable":Oa().isSame(e,"day")&&!g&&(t.labelType="current");const i=e.isSame(n,"day"),o=e.isSame(a,"day");return i&&o?(t.labelType="selected-hover",t.circleLeft="selected-hover-outline",t.circleRight="selected-hover-outline"):i?(t.labelType="selected",t.circleLeft="selected-outline",t.circleRight="selected-outline"):o&&(t.labelType="hover",t.circleLeft="hover-subtle",t.circleRight="hover-subtle"),t})()))};Oa.extend(ja);const fo=({calendarDate:r,disabledDates:n,selectedDate:a,onSelect:i,onHover:s,minDate:l,maxDate:d,allowDisabledSelection:c,showActiveMonthDaysOnly:u})=>{const g=h((()=>Ha.generateDays(r)),[r]),[b,m]=o(""),y=(e,r)=>{r&&!c||i(e)},f=(e,r)=>{r&&!c||(m(e),s(e))},p=()=>{m(""),s("")};return e(Ji,{"data-testid":"calendar-content",children:[g[0].map(((e,r)=>t(qi,{children:Oa(e).format("ddd")},`week-day-${r}`))),g.map(((e,i)=>t(Xi,{onMouseLeave:p,children:e.map(((e,i)=>t(yo,{date:e,calendarDate:r,selectedDate:a,hoverDate:b,minDate:l,maxDate:d,disabledDates:n,allowDisabledSelection:c,showActiveMonthDaysOnly:u,onSelect:y,onHover:f},`day-${i}`)))},i)))]})},po=({date:e,calendarDate:r,selectedDate:n,hoverDate:a,minDate:i,maxDate:o,disabledDates:s,allowDisabledSelection:l,onSelect:d,onHover:c})=>{const u=Ha.isDisabledDay(e,s,i,o),g=!u||l,{start:b,end:h}=Ha.getWeekStartEnd(Ja.toDayjs(n)),{start:m,end:y}=Ha.getWeekStartEnd(Ja.toDayjs(a)),f=n&&e.isBetween(b,h,"day","[]"),p=a&&e.isBetween(m,y,"day","[]"),v=f&&e.isSame(b)||p&&e.isSame(m),x=f&&e.isSame(h)||p&&e.isSame(y),w={date:e,calendarDate:r,disabled:u,interactive:g,currentDateIndicator:!0,onSelect:()=>{d(e,!g)},onHover:()=>{c(e.format("YYYY-MM-DD"),!g)}};return t(co,Object.assign({},w,(()=>{const t={};return r.month()!==e.month()?t.labelType="unavailable":Oa().isSame(e,"day")&&!u&&(t.labelType="current"),t})(),(()=>{const e={};let r,t;return f&&p?(r="selected-hover-outline",t="selected-hover"):f?(r="selected-outline",t="selected"):p&&(r="hover",t="hover"),r&&(e.labelType=t,v?e.circleLeft=r:e.bgLeft=r,x?e.circleRight=r:e.bgRight=r),e})()))},vo=({calendarDate:r,disabledDates:n,selectedStartDate:a,onSelect:i,onHover:s,minDate:l,maxDate:d,allowDisabledSelection:c})=>{const u=h((()=>Ha.generateDays(r)),[r]),[g,b]=o(""),m=(e,r)=>{if(r&&!c)return;const t=e.startOf("week");i(t),e&&!Oa(e).isSame(t,"month")&&b("")},y=(e,r)=>{r&&!c||(b(e),s(e))},f=()=>{b(""),s("")};return e(Ji,{"data-testid":"calendar-content",children:[u[0].map(((e,r)=>t(qi,{children:Oa(e).format("ddd")},`week-day-${r}`))),u.map(((e,i)=>t(Xi,{onMouseLeave:f,children:e.map(((e,i)=>t(po,{date:e,calendarDate:r,selectedDate:a,hoverDate:g,minDate:l,maxDate:d,disabledDates:n,allowDisabledSelection:c,onSelect:m,onHover:y},`day-${i}`)))},i)))]})},xo=a.forwardRef((({disabledDates:e,onYearMonthDisplayChange:r,onSelect:n,onHover:a,onDismiss:o,value:s,endValue:l,currentFocus:d,withButton:c,variant:u,minDate:g,maxDate:b,allowDisabledSelection:h,selectWithinRange:y=!0,initialCalendarDate:f,numberOfDays:p,showActiveMonthDaysOnly:v=!1,isFocusable:x=!1},w)=>{const D=i(null),F=i(void 0);m(w,(()=>({reset(){var e;null===(e=D.current)||void 0===e||e.resetView()},setCalendarDate(e){var r;null===(r=D.current)||void 0===r||r.setCalendarDate(e)}})));const $=e=>{var r;const t=e.format("YYYY-MM-DD");null===(r=D.current)||void 0===r||r.setCalendarDate(t),C(t)},E=e=>{S(e)},C=e=>{n&&n(e)},S=e=>{a&&a(e)},B=e=>{if(r){const t={month:e.month()+1,year:e.year()};r(t)}};return t(mo,{children:t(Ki,{ref:D,withButton:c,doneButtonDisabled:(()=>{if(!c)return;let e=!0;switch(u){case"single":e=!1;break;case"range":case"fixed-range":e=!!s!=!!l;break;case"week":e=!s&&!l}return e})(),onDismiss:o,minDate:g,maxDate:b,selectWithinRange:y,currentFocus:d,selectedStartDate:s,selectedEndDate:l,allowDisabledSelection:h,onCalendarDateChange:e=>{var r;F.current&&F.current.isSame(e,"month")||(null===(r=D.current)||void 0===r||r.setCalendarDate(e.format("YYYY-MM-DD")),B(e)),F.current=e},initialCalendarDate:f,isFocusable:x,children:({calendarDate:r})=>(r=>{var n;switch(u){case"week":return t(vo,{calendarDate:r,disabledDates:e,selectedStartDate:s,minDate:g,maxDate:b,allowDisabledSelection:h,onSelect:$,onHover:E});case"fixed-range":return t(ho,{calendarDate:r,disabledDates:e,selectedStartDate:s,minDate:g,maxDate:b,allowDisabledSelection:h,onSelect:$,onHover:E,numberOfDays:p});case"single":return t(fo,{calendarDate:r,disabledDates:e,selectedDate:s,minDate:g,maxDate:b,allowDisabledSelection:h,showActiveMonthDaysOnly:v,onSelect:$,onHover:E});default:return t(go,{calendarDate:r,currentFocus:d,disabledDates:e,selectedStartDate:s,selectedEndDate:l,minDate:g,maxDate:b,isNewSelection:y,allowDisabledSelection:h,showActiveMonthDaysOnly:v,onSelect:$,onHover:E,setCalendarDate:null===(n=D.current)||void 0===n?void 0:n.setCalendarDate})}})(r)})})})),wo=a.forwardRef(((e,r)=>{var{width:n}=e,a=R(e,["width"]);return t(Aa,{$width:n,"data-testid":"calendar-dropdown",children:t(xo,Object.assign({ref:r},a))})})),Do=p`
    outline-offset: -1px;
    outline: ${bn["width-020"]} ${bn.solid} ${cn["border-focus"]};
`,Fo=p`
    outline-color: ${cn["border-focus"]};
`,$o=p`
    outline-color: ${cn["border-disabled"]};
`,Eo=p`
    outline-color: ${cn["border-error-focus"]};
`,Co=f(f.div`
    border: ${bn["width-010"]} ${bn.solid} ${cn.border};
    border-radius: ${mn.sm};
    background: ${cn.bg};

    :focus-within {
        ${Do}
    }
    ${e=>e.$focused&&Do}

    ${e=>e.$readOnly?p`
                border-color: transparent;
                padding: 0;
                background: transparent !important;

                :focus-within {
                    ${Fo}
                }
                ${e.$focused&&Fo}
            `:e.$disabled?p`
                background: ${cn["bg-disabled"]};
                cursor: not-allowed;

                :focus-within {
                    ${$o}
                }
                ${e.$focused&&$o}
            `:e.$error?p`
                border-color: ${cn["border-error"]};

                :focus-within {
                    ${Eo}
                }
                ${e.$focused&&Eo}
            `:void 0}
`)`
    display: flex;
    align-items: center;
    position: relative;
    height: max-content;
    width: 100%;
    padding: 0 ${hn["spacing-16"]};
    flex-direction: ${e=>"right"===e.$position?"row-reverse":"row"};
`,So=f.input`
    ${e=>"small"===e.$variant?un["body-md-regular"]:un["body-baseline-regular"]}
    color: ${cn.text};
    display: block;
    background: transparent;
    border: none;
    outline: none;
    box-shadow: none;
    padding: 0;
    margin: 0;

    :disabled {
        color: ${cn["text-subtler"]};

        :hover {
            cursor: not-allowed;
        }
    }

    ::placeholder,
    ::-webkit-input-placeholder {
        color: ${cn["text-subtler"]};
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
`;f.button`
    background: transparent;
    border: none;
    outline: none;

    :focus,
    :active {
        outline: none;
    }

    :focus-visible {
        outline: ${bn["width-010"]} ${bn.solid}
            ${cn["border-focus"]};
        border-radius: ${mn.sm};
    }
`;const Bo=f.div`
    display: flex;
    align-items: center;
    position: relative;

    flex: 1;
`,Ao=f.div`
    display: flex;
    align-items: center;

    ${e=>{if(e.$hover)return p`
                ${ko}, ${Yo} {
                    color: ${cn["text-subtler"]};
                }
            `}}
`,ko=f(So)`
    background: transparent;
    text-align: center;
`,Oo=f(ko)`
    width: 2rem;
    margin-right: ${hn["spacing-4"]};
`,Mo=f(ko)`
    width: 2.5rem;
`,zo=f(ko)`
    width: 3rem;
    margin-left: ${hn["spacing-4"]};
`,Yo=f.span`
    ${un["body-baseline-regular"]}
    ${e=>{if(e.$inactive)return p`
                color: ${cn.text};
            `}}
`,jo=f.div`
    ${un["body-baseline-regular"]}
    background-color: ${cn.bg};
    color: ${cn["text-subtler"]};
    position: absolute;
    display: flex;
    align-items: center;
    width: 100%;
    height: 100%;

    ${e=>e.$disabled?p`
                background-color: ${cn["bg-disabled"]};
                cursor: not-allowed;
            `:e.$hide?p`
                display: none;
            `:void 0}
`;Oa.extend(za);const To=a.forwardRef((({disabled:r,readOnly:n,names:a,value:s,focused:l,hoverValue:d,placeholder:c,label:g,onChange:b,onFocus:h,onBlur:y,hideInputKeyboard:f},p)=>{const v=f?"none":"numeric",[x,w,D]=Qa(""),[F,$,E]=Qa(""),[C,S,B]=Qa(""),[A,k]=o("none"),[O,M]=o(!1),z=i(null),Y=i(null),j=i(null),T=i(null),[_,R,I]=V(d);u((()=>{var e;const[r="",t="",n=""]=V(s);w(r),$(t),S(n),r||t||n||!z.current||!z.current.contains(document.activeElement)||null===(e=Y.current)||void 0===e||e.focus()}),[s]),u((()=>{var e;l||k("none"),l&&(M(!0),z.current&&!z.current.contains(document.activeElement)&&(null===(e=Y.current)||void 0===e||e.focus()))}),[l]),m(p,(()=>({ref:z,resetPlaceholder(){M(!1)},resetInput(){const[e="",r="",t=""]=V(s);w(e),$(r),S(t)}})),[s]);const L=e=>{var r;e.preventDefault(),null===(r=Y.current)||void 0===r||r.focus()},H=e=>{e.target.select();const r=e.target.name;k(r)},W=e=>{const[r,t,n]=a,i={[r]:D.current,[t]:E.current,[n]:B.current},o=e.target.name,s=i[o],l=o!==n?Ga.padValue(s,!0):s;switch(o){case r:i[r]=l,w(l);break;case t:i[t]=l,$(l)}const d=`${i[n]}-${i[t]}-${i[r]}`,c=Oa(d,"YYYY-MM-DD",!0).isValid(),u=!i[r]&&!i[t]&&!i[n];c&&s!==l&&b(d),z.current&&!z.current.contains(e.relatedTarget)&&(k("none"),null==y||y(u||c))},N=e=>{var r,t;if(d)return;const n=e.target.name,i=e.target.value.replace(/[^0-9]/g,""),o={day:x,month:F,year:C};switch(n){case a[0]:o.day=i,w(i),2===i.length&&(null===(r=j.current)||void 0===r||r.focus());break;case a[1]:o.month=i,$(i),2===i.length&&(null===(t=T.current)||void 0===t||t.focus());break;case a[2]:o.year=i,S(i)}if(!o.day&&!o.month&&!o.year)return void b("");const s=`${o.year}-${o.month}-${o.day}`;Oa(s,"YYYY-MM-DD",!0).isValid()&&b(s)},P=e=>{var r,t;"Backspace"!==e.code&&"Backspace"!==e.key||(A===a[1]&&0===F.length&&(null===(r=Y.current)||void 0===r||r.focus()),A===a[2]&&0===C.length&&(null===(t=j.current)||void 0===t||t.focus()))};function V(e){if(e){const r=Oa(new Date(e));return r.isValid()?[Ga.padValue(r.date().toString()),Ga.padValue((r.month()+1).toString()),r.year().toString()]:[void 0,void 0,void 0]}return[void 0,void 0,void 0]}return e(Bo,{role:"group","aria-label":g,onClick:()=>{var e;r||n||(M(!0),z.current&&!z.current.contains(document.activeElement)&&(null===(e=Y.current)||void 0===e||e.focus()))},onFocus:e=>{r||(M(!0),l||null==h||h(e))},children:[e(Ao,{ref:z,$hover:!!d,children:[t(Oo,{ref:Y,name:a[0],maxLength:2,value:null!=_?_:x,onFocus:H,onBlur:W,onChange:N,type:"text",inputMode:v,pattern:"[0-9]{2}","data-testid":`${a[0]}-input`,"aria-label":"day",disabled:r,readOnly:n,tabIndex:n?-1:0,autoComplete:"off",placeholder:A!==a[0]||n?"DD":""}),t(Yo,{$inactive:0===x.length,children:"/"}),t(Mo,{ref:j,name:a[1],maxLength:2,value:null!=R?R:F,onFocus:H,onBlur:W,onChange:N,onKeyDown:P,type:"text",inputMode:v,pattern:"[0-9]{2}","data-testid":`${a[1]}-input`,"aria-label":"month",disabled:r,readOnly:n,tabIndex:n?-1:0,autoComplete:"off",placeholder:A!==a[1]||n?"MM":""}),t(Yo,{$inactive:0===F.length,children:"/"}),t(zo,{ref:T,name:a[2],maxLength:4,value:null!=I?I:C,onFocus:H,onBlur:W,onChange:N,onKeyDown:P,type:"text",inputMode:v,pattern:"[0-9]{4}","data-testid":`${a[2]}-input`,"aria-label":"year",disabled:r,readOnly:n,tabIndex:n?-1:0,autoComplete:"off",placeholder:A!==a[2]||n?"YYYY":""})]}),(()=>{if(!s&&!n&&c)return t(jo,{$hide:O,$disabled:r,onMouseDown:L,children:c})})()]})})),_o=f(Co)`
    height: 3rem;
`,Ro=e=>{var{minDate:r,maxDate:n,disabled:a,disabledDates:s,error:l,hideInputKeyboard:d,value:c,onChange:g,onFocus:b,onBlur:h,onYearMonthDisplayChange:m,withButton:y=!0,readOnly:f,id:p,allowDisabledSelection:v,zIndex:x,dropdownRootNode:w}=e,D=R(e,["minDate","maxDate","disabled","disabledDates","error","hideInputKeyboard","value","onChange","onFocus","onBlur","onYearMonthDisplayChange","withButton","readOnly","id","allowDisabledSelection","zIndex","dropdownRootNode"]);const[F,$]=o(qa.sanitizeInput(c)),[E,C]=o(qa.sanitizeInput(c)),[S,B]=o(void 0),[A,k]=o(!1),[O,M]=o(!1),z=i(null),Y=i(null);u((()=>{const e=qa.sanitizeInput(c);$(e),C(e)}),[c]);const j=e=>{!v&&qa.isDateDisabled(e,{disabledDates:s,minDate:r,maxDate:n})||(C(e),y||(W(e),$(e),e&&k(!1)))},T=e=>{var r;C(e),y||(W(e),$(e),e&&(null===(r=z.current)||void 0===r||r.focus(),k(!1)),S&&B(void 0))},_=()=>{f||a||(k(!0),O||(M(!0),b&&b()))},I=e=>{var r;O&&!A&&z.current&&!z.current.contains(e.relatedTarget)&&(null===(r=Y.current)||void 0===r||r.resetInput(),C(F),M(!1),N())},L=e=>{B(e)},H=e=>{var r;switch(e){case"reset":C(F);break;case"confirmed":$(E),W(E)}null===(r=z.current)||void 0===r||r.focus(),k(!1)},W=e=>{g&&g(e)},N=()=>{h&&h()};return t(Ba,{enabled:!f&&!a,isOpen:A,renderElement:()=>t(_o,Object.assign({tabIndex:-1,ref:z,onBlur:I,onFocus:_,$disabled:a,$readOnly:f,$focused:O,$error:l,id:p,"data-testid":D["data-testid"]},D,{children:t(To,{ref:Y,disabled:a,onChange:j,readOnly:f,focused:A,names:["start-day","start-month","start-year"],value:E,hoverValue:S,hideInputKeyboard:d})})),renderDropdown:({elementWidth:e})=>t(wo,{variant:"single",initialCalendarDate:E,withButton:y,value:E,disabledDates:s,minDate:r,maxDate:n,allowDisabledSelection:v,onHover:L,onSelect:T,onDismiss:H,onYearMonthDisplayChange:m,width:e}),onClose:()=>{var e;null===(e=Y.current)||void 0===e||e.resetInput(),C(F),k(!1),M(!1),N()},onDismiss:()=>{var e,r;null===(e=Y.current)||void 0===e||e.resetInput(),null===(r=z.current)||void 0===r||r.focus(),C(F),k(!1)},customZIndex:x,offset:16,rootNode:w})};export{Ro as DateInput};
//# sourceMappingURL=index.js.map
