import{jsx as e,jsxs as r,Fragment as t}from"react/jsx-runtime";import*as n from"react";import i,{useState as o,useEffect as s,useMemo as a,useRef as l,isValidElement as d,createRef as c,cloneElement as u,PureComponent as g,useLayoutEffect as h,createContext as b,useContext as m,forwardRef as p}from"react";import{ExternalIcon as f}from"@lifesg/react-icons/external";import y,{css as v,keyframes as x,ThemeContext as w}from"styled-components";import{ChevronDownIcon as F}from"@lifesg/react-icons/chevron-down";import{useFloatingTree as $,useFloating as E,autoUpdate as D,offset as C,flip as B,shift as S,limitShift as k,size as A,useTransitionStyles as z,useClick as O,useDismiss as M,useInteractions as _,FloatingPortal as T,FloatingFocusManager as L}from"@floating-ui/react";import{findDOMNode as j}from"react-dom";import{ExclamationCircleFillIcon as R}from"@lifesg/react-icons/exclamation-circle-fill";import{SquareIcon as P}from"@lifesg/react-icons/square";import{SquareFillIcon as Y}from"@lifesg/react-icons/square-fill";import{SquareTickFillIcon as I}from"@lifesg/react-icons/square-tick-fill";import{TickIcon as H}from"@lifesg/react-icons/tick";import{CrossIcon as W}from"@lifesg/react-icons/cross";import{MagnifierIcon as N}from"@lifesg/react-icons/magnifier";import"@lifesg/react-icons/caret-right";import{MinusSquareFillIcon as V}from"@lifesg/react-icons/minus-square-fill";function K(e,r){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(n=Object.getOwnPropertySymbols(e);i<n.length;i++)r.indexOf(n[i])<0&&Object.prototype.propertyIsEnumerable.call(e,n[i])&&(t[n[i]]=e[n[i]])}return t}"function"==typeof SuppressedError&&SuppressedError;var U="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};function Z(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var X=Array.isArray,q="object"==typeof U&&U&&U.Object===Object&&U,J=q,G="object"==typeof self&&self&&self.Object===Object&&self,Q=J||G||Function("return this")(),ee=Q.Symbol,re=ee,te=Object.prototype,ne=te.hasOwnProperty,ie=te.toString,oe=re?re.toStringTag:void 0;var se=function(e){var r=ne.call(e,oe),t=e[oe];try{e[oe]=void 0;var n=!0}catch(e){}var i=ie.call(e);return n&&(r?e[oe]=t:delete e[oe]),i},ae=Object.prototype.toString;var le=se,de=function(e){return ae.call(e)},ce=ee?ee.toStringTag:void 0;var ue=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":ce&&ce in Object(e)?le(e):de(e)};var ge=function(e){return null!=e&&"object"==typeof e},he=ue,be=ge;var me=function(e){return"symbol"==typeof e||be(e)&&"[object Symbol]"==he(e)},pe=X,fe=me,ye=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,ve=/^\w*$/;var xe=function(e,r){if(pe(e))return!1;var t=typeof e;return!("number"!=t&&"symbol"!=t&&"boolean"!=t&&null!=e&&!fe(e))||(ve.test(e)||!ye.test(e)||null!=r&&e in Object(r))};var we=function(e){var r=typeof e;return null!=e&&("object"==r||"function"==r)},Fe=ue,$e=we;var Ee,De=function(e){if(!$e(e))return!1;var r=Fe(e);return"[object Function]"==r||"[object GeneratorFunction]"==r||"[object AsyncFunction]"==r||"[object Proxy]"==r},Ce=Q["__core-js_shared__"],Be=(Ee=/[^.]+$/.exec(Ce&&Ce.keys&&Ce.keys.IE_PROTO||""))?"Symbol(src)_1."+Ee:"";var Se=function(e){return!!Be&&Be in e},ke=Function.prototype.toString;var Ae=function(e){if(null!=e){try{return ke.call(e)}catch(e){}try{return e+""}catch(e){}}return""},ze=De,Oe=Se,Me=we,_e=Ae,Te=/^\[object .+?Constructor\]$/,Le=Function.prototype,je=Object.prototype,Re=Le.toString,Pe=je.hasOwnProperty,Ye=RegExp("^"+Re.call(Pe).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");var Ie=function(e,r){return null==e?void 0:e[r]},He=function(e){return!(!Me(e)||Oe(e))&&(ze(e)?Ye:Te).test(_e(e))},We=Ie;var Ne=function(e,r){var t=We(e,r);return He(t)?t:void 0},Ve=Ne(Object,"create"),Ke=Ve;var Ue=function(){this.__data__=Ke?Ke(null):{},this.size=0};var Ze=function(e){var r=this.has(e)&&delete this.__data__[e];return this.size-=r?1:0,r},Xe=Ve,qe=Object.prototype.hasOwnProperty;var Je=function(e){var r=this.__data__;if(Xe){var t=r[e];return"__lodash_hash_undefined__"===t?void 0:t}return qe.call(r,e)?r[e]:void 0},Ge=Ve,Qe=Object.prototype.hasOwnProperty;var er=function(e){var r=this.__data__;return Ge?void 0!==r[e]:Qe.call(r,e)},rr=Ve;var tr=function(e,r){var t=this.__data__;return this.size+=this.has(e)?0:1,t[e]=rr&&void 0===r?"__lodash_hash_undefined__":r,this},nr=Ue,ir=Ze,or=Je,sr=er,ar=tr;function lr(e){var r=-1,t=null==e?0:e.length;for(this.clear();++r<t;){var n=e[r];this.set(n[0],n[1])}}lr.prototype.clear=nr,lr.prototype.delete=ir,lr.prototype.get=or,lr.prototype.has=sr,lr.prototype.set=ar;var dr=lr;var cr=function(){this.__data__=[],this.size=0};var ur=function(e,r){return e===r||e!=e&&r!=r};var gr=function(e,r){for(var t=e.length;t--;)if(ur(e[t][0],r))return t;return-1},hr=gr,br=Array.prototype.splice;var mr=function(e){var r=this.__data__,t=hr(r,e);return!(t<0)&&(t==r.length-1?r.pop():br.call(r,t,1),--this.size,!0)},pr=gr;var fr=function(e){var r=this.__data__,t=pr(r,e);return t<0?void 0:r[t][1]},yr=gr;var vr=function(e){return yr(this.__data__,e)>-1},xr=gr;var wr=function(e,r){var t=this.__data__,n=xr(t,e);return n<0?(++this.size,t.push([e,r])):t[n][1]=r,this},Fr=cr,$r=mr,Er=fr,Dr=vr,Cr=wr;function Br(e){var r=-1,t=null==e?0:e.length;for(this.clear();++r<t;){var n=e[r];this.set(n[0],n[1])}}Br.prototype.clear=Fr,Br.prototype.delete=$r,Br.prototype.get=Er,Br.prototype.has=Dr,Br.prototype.set=Cr;var Sr=Br,kr=Ne(Q,"Map"),Ar=dr,zr=Sr,Or=kr;var Mr=function(e){var r=typeof e;return"string"==r||"number"==r||"symbol"==r||"boolean"==r?"__proto__"!==e:null===e};var _r=function(e,r){var t=e.__data__;return Mr(r)?t["string"==typeof r?"string":"hash"]:t.map},Tr=_r;var Lr=function(e){var r=Tr(this,e).delete(e);return this.size-=r?1:0,r},jr=_r;var Rr=function(e){return jr(this,e).get(e)},Pr=_r;var Yr=function(e){return Pr(this,e).has(e)},Ir=_r;var Hr=function(e,r){var t=Ir(this,e),n=t.size;return t.set(e,r),this.size+=t.size==n?0:1,this},Wr=function(){this.size=0,this.__data__={hash:new Ar,map:new(Or||zr),string:new Ar}},Nr=Lr,Vr=Rr,Kr=Yr,Ur=Hr;function Zr(e){var r=-1,t=null==e?0:e.length;for(this.clear();++r<t;){var n=e[r];this.set(n[0],n[1])}}Zr.prototype.clear=Wr,Zr.prototype.delete=Nr,Zr.prototype.get=Vr,Zr.prototype.has=Kr,Zr.prototype.set=Ur;var Xr=Zr,qr=Xr;function Jr(e,r){if("function"!=typeof e||null!=r&&"function"!=typeof r)throw new TypeError("Expected a function");var t=function(){var n=arguments,i=r?r.apply(this,n):n[0],o=t.cache;if(o.has(i))return o.get(i);var s=e.apply(this,n);return t.cache=o.set(i,s)||o,s};return t.cache=new(Jr.Cache||qr),t}Jr.Cache=qr;var Gr=Jr;var Qr=function(e){var r=Gr(e,(function(e){return 500===t.size&&t.clear(),e})),t=r.cache;return r},et=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,rt=/\\(\\)?/g,tt=Qr((function(e){var r=[];return 46===e.charCodeAt(0)&&r.push(""),e.replace(et,(function(e,t,n,i){r.push(n?i.replace(rt,"$1"):t||e)})),r}));var nt=function(e,r){for(var t=-1,n=null==e?0:e.length,i=Array(n);++t<n;)i[t]=r(e[t],t,e);return i},it=X,ot=me,st=ee?ee.prototype:void 0,at=st?st.toString:void 0;var lt=function e(r){if("string"==typeof r)return r;if(it(r))return nt(r,e)+"";if(ot(r))return at?at.call(r):"";var t=r+"";return"0"==t&&1/r==-1/0?"-0":t},dt=lt;var ct=X,ut=xe,gt=tt,ht=function(e){return null==e?"":dt(e)};var bt=me;var mt=function(e,r){return ct(e)?e:ut(e,r)?[e]:gt(ht(e))},pt=function(e){if("string"==typeof e||bt(e))return e;var r=e+"";return"0"==r&&1/e==-1/0?"-0":r};var ft=function(e,r){for(var t=0,n=(r=mt(r,e)).length;null!=e&&t<n;)e=e[pt(r[t++])];return t&&t==n?e:void 0};var yt=Z((function(e,r,t){var n=null==e?void 0:ft(e,r);return void 0===n?t:n}));const vt=(e,r,t)=>yt(t,r)||yt(e,r),xt=(e,r)=>{const t=r||e.defaultValue;return yt(e.collections,t)},wt={collections:{default:{"width-005":.5,"width-010":1,"width-020":2,"width-040":4,solid:"solid"}},defaultValue:"default"},Ft=e=>r=>{var t;const n=r.theme,i=xt(wt,null==n?void 0:n.borderScheme);return(null===(t=null==n?void 0:n.overrides)||void 0===t?void 0:t.border)?`${vt(i,e,n.overrides.border)}px`:`${i[e]}px`},$t={"width-005":Ft("width-005"),"width-010":Ft("width-010"),"width-020":Ft("width-020"),"width-040":Ft("width-040"),solid:(Et="solid",e=>{var r;const t=e.theme,n=xt(wt,null==t?void 0:t.borderScheme),i=(null===(r=null==t?void 0:t.overrides)||void 0===r?void 0:r.border)?vt(n,Et,t.overrides.border):n[Et];return"function"==typeof i?i(e):i})};var Et;const Dt={"brand-10":"#2C0C0B","brand-20":"#4C1513","brand-30":"#6C1D1B","brand-40":"#922825","brand-50":"#BF3431","brand-60":"#F15D5A","brand-70":"#F69491","brand-80":"#FABAB7","brand-90":"#FCD7D2","brand-95":"#FFEBE7","brand-100":"#FFF6F4","primary-10":"#1A122C","primary-20":"#2F1F4D","primary-30":"#422D6E","primary-40":"#5B3D97","primary-50":"#7654BC","primary-60":"#9A82CD","primary-70":"#B7A7D8","primary-80":"#CFC5E5","primary-90":"#E3DDF0","primary-95":"#F0EDF7","primary-100":"#F9F8FC","secondary-10":"#0E1723","secondary-20":"#18293D","secondary-30":"#233A57","secondary-40":"#305078","secondary-50":"#4B6A8F","secondary-60":"#7B91A9","secondary-70":"#A1B1C3","secondary-80":"#C1CBD7","secondary-90":"#DBE1E8","secondary-95":"#EBEFF2","secondary-100":"#F7F8FA","neutral-10":"#161616","neutral-20":"#282828","neutral-30":"#393939","neutral-40":"#4E4E4E","neutral-50":"#686868","neutral-60":"#8E8E8E","neutral-70":"#AFAFB0","neutral-80":"#C7CACA","neutral-90":"#DDE1E2","neutral-95":"#EDEFEF","neutral-100":"#F9F9F9","success-10":"#081A0F","success-20":"#0E2D1B","success-30":"#154126","success-40":"#1C5A34","success-50":"#257645","success-60":"#44A068","success-70":"#64C189","success-80":"#80DCA5","success-90":"#B4ECCB","success-95":"#D5F6E2","success-100":"#EFFCF4","warning-10":"#221302","warning-20":"#3B2204","warning-30":"#543106","warning-40":"#744408","warning-50":"#98590C","warning-60":"#D07A13","warning-70":"#E4A244","warning-80":"#F5C26C","warning-90":"#FADBA6","warning-95":"#FCECD4","warning-100":"#FDF7F0","error-10":"#330505","error-20":"#550808","error-30":"#750C0C","error-40":"#9E130F","error-50":"#CB2213","error-60":"#DE6C6C","error-70":"#E89B9B","error-80":"#EFBEBE","error-90":"#F5D9D9","error-95":"#F9ECEC","error-100":"#FCF7F7","info-10":"#021824","info-20":"#032B3F","info-30":"#053D59","info-40":"#06547B","info-50":"#176E9B","info-60":"#5296BE","info-70":"#82B5DA","info-80":"#ACCFE7","info-90":"#CCE3F1","info-95":"#E3F1F8","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000","primary-inverse":"#FEAB10"},Ct={"brand-10":"#1F1221","brand-20":"#371F3B","brand-30":"#4E2C53","brand-40":"#6B3E73","brand-50":"#8D5197","brand-60":"#FF3399","brand-70":"#FF88C4","brand-80":"#FFB3D9","brand-90":"#FFD4E9","brand-95":"#FFE8F3","brand-100":"#FFF8FC","primary-10":"#1F1221","primary-20":"#371F3B","primary-30":"#4E2C53","primary-40":"#6B3E73","primary-50":"#8D5197","primary-60":"#B07DB7","primary-70":"#C7A3CC","primary-80":"#D9C2DD","primary-90":"#E9DBEB","primary-95":"#F3ECF4","primary-100":"#FAF7FA","secondary-10":"#2D091B","secondary-20":"#4D0F2E","secondary-30":"#6B1540","secondary-40":"#931D58","secondary-50":"#C02673","secondary-60":"#FF409F","secondary-70":"#FF88C4","secondary-80":"#FFB3D9","secondary-90":"#FFD4E9","secondary-95":"#FFE8F3","secondary-100":"#FFF8FC","neutral-10":"#161616","neutral-20":"#282828","neutral-30":"#393939","neutral-40":"#4E4E4E","neutral-50":"#686868","neutral-60":"#8E8E8E","neutral-70":"#AFAFB0","neutral-80":"#C7CACA","neutral-90":"#DDE1E2","neutral-95":"#EDEFEF","neutral-100":"#F9F9F9","success-10":"#081A0F","success-20":"#0E2D1B","success-30":"#154126","success-40":"#1C5A34","success-50":"#257645","success-60":"#44A068","success-70":"#64C189","success-80":"#80DCA5","success-90":"#B4ECCB","success-95":"#D5F6E2","success-100":"#EFFCF4","warning-10":"#221302","warning-20":"#3B2204","warning-30":"#543106","warning-40":"#744408","warning-50":"#98590C","warning-60":"#D07A13","warning-70":"#E4A244","warning-80":"#F5C26C","warning-90":"#FADBA6","warning-95":"#FCECD4","warning-100":"#FDF7F0","error-10":"#330505","error-20":"#550808","error-30":"#750C0C","error-40":"#9E130F","error-50":"#CB2213","error-60":"#DE6C6C","error-70":"#E89B9B","error-80":"#EFBEBE","error-90":"#F5D9D9","error-95":"#F9ECEC","error-100":"#FCF7F7","info-10":"#021824","info-20":"#032B3F","info-30":"#053D59","info-40":"#06547B","info-50":"#176E9B","info-60":"#5296BE","info-70":"#82B5DA","info-80":"#ACCFE7","info-90":"#CCE3F1","info-95":"#E3F1F8","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000","primary-inverse":"#FEAB10"},Bt={"brand-10":"#2C0C0B","brand-20":"#4C1513","brand-30":"#6C1D1B","brand-40":"#922825","brand-50":"#BF3431","brand-60":"#F15D5A","brand-70":"#F69491","brand-80":"#FABAB7","brand-90":"#FCD7D2","brand-95":"#FFEBE7","brand-100":"#FFF6F4","primary-10":"#001731","primary-20":"#002752","primary-30":"#003874","primary-40":"#004D9F","primary-50":"#1768BE","primary-60":"#3C91EC","primary-70":"#6CB4FF","primary-80":"#A5CDFF","primary-90":"#CFE1FE","primary-95":"#E8F0FE","primary-100":"#F7F9FF","secondary-10":"#131529","secondary-20":"#222547","secondary-30":"#2F3565","secondary-40":"#42498B","secondary-50":"#5B62A7","secondary-60":"#858CBD","secondary-70":"#A8ADCF","secondary-80":"#C6C9E0","secondary-90":"#DDDFEC","secondary-95":"#EDEEF5","secondary-100":"#F8F8FB","neutral-10":"#161616","neutral-20":"#282828","neutral-30":"#393939","neutral-40":"#4E4E4E","neutral-50":"#686868","neutral-60":"#8E8E8E","neutral-70":"#AFAFB0","neutral-80":"#C7CACA","neutral-90":"#DDE1E2","neutral-95":"#EDEFEF","neutral-100":"#F9F9F9","success-10":"#081A0F","success-20":"#0E2D1B","success-30":"#154126","success-40":"#1C5A34","success-50":"#257645","success-60":"#44A068","success-70":"#64C189","success-80":"#80DCA5","success-90":"#B4ECCB","success-95":"#D5F6E2","success-100":"#EFFCF4","warning-10":"#221302","warning-20":"#3B2204","warning-30":"#543106","warning-40":"#744408","warning-50":"#98590C","warning-60":"#D07A13","warning-70":"#E4A244","warning-80":"#F5C26C","warning-90":"#FADBA6","warning-95":"#FCECD4","warning-100":"#FDF7F0","error-10":"#330505","error-20":"#550808","error-30":"#750C0C","error-40":"#9E130F","error-50":"#CB2213","error-60":"#DE6C6C","error-70":"#E89B9B","error-80":"#EFBEBE","error-90":"#F5D9D9","error-95":"#F9ECEC","error-100":"#FCF7F7","info-10":"#021824","info-20":"#032B3F","info-30":"#053D59","info-40":"#06547B","info-50":"#176E9B","info-60":"#5296BE","info-70":"#82B5DA","info-80":"#ACCFE7","info-90":"#CCE3F1","info-95":"#E3F1F8","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000","primary-inverse":"#FEAB10"},St={"brand-10":"#2C0C0B","brand-20":"#4C1513","brand-30":"#6C1D1B","brand-40":"#922825","brand-50":"#BF3431","brand-60":"#F15D5A","brand-70":"#F69491","brand-80":"#FABAB7","brand-90":"#FCD7D2","brand-95":"#FFEBE7","brand-100":"#FFF6F4","primary-10":"#0011924","primary-20":"#032B40","primary-30":"#043D5A","primary-40":"#05547B","primary-50":"#096EA1","primary-60":"#2098D3","primary-70":"#5CB9E8","primary-80":"#8BD3F6","primary-90":"#BEE6FA","primary-95":"#E2F2FA","primary-100":"#F4FAFC","secondary-10":"#131529","secondary-20":"#222547","secondary-30":"#2F3565","secondary-40":"#42498B","secondary-50":"#5B62A7","secondary-60":"#858CBD","secondary-70":"#A8ADCF","secondary-80":"#C6C9E0","secondary-90":"#DDDFEC","secondary-95":"#EDEEF5","secondary-100":"#F8F8FB","neutral-10":"#161616","neutral-20":"#282828","neutral-30":"#393939","neutral-40":"#4E4E4E","neutral-50":"#686868","neutral-60":"#8E8E8E","neutral-70":"#AFAFB0","neutral-80":"#C7CACA","neutral-90":"#DDE1E2","neutral-95":"#EDEFEF","neutral-100":"#F9F9F9","success-10":"#081A0F","success-20":"#0E2D1B","success-30":"#154126","success-40":"#1C5A34","success-50":"#257645","success-60":"#44A068","success-70":"#64C189","success-80":"#80DCA5","success-90":"#B4ECCB","success-95":"#D5F6E2","success-100":"#EFFCF4","warning-10":"#221302","warning-20":"#3B2204","warning-30":"#543106","warning-40":"#744408","warning-50":"#98590C","warning-60":"#D07A13","warning-70":"#E4A244","warning-80":"#F5C26C","warning-90":"#FADBA6","warning-95":"#FCECD4","warning-100":"#FDF7F0","error-10":"#330505","error-20":"#550808","error-30":"#750C0C","error-40":"#9E130F","error-50":"#CB2213","error-60":"#DE6C6C","error-70":"#E89B9B","error-80":"#EFBEBE","error-90":"#F5D9D9","error-95":"#F9ECEC","error-100":"#FCF7F7","info-10":"#021824","info-20":"#032B3F","info-30":"#053D59","info-40":"#06547B","info-50":"#176E9B","info-60":"#5296BE","info-70":"#82B5DA","info-80":"#ACCFE7","info-90":"#CCE3F1","info-95":"#E3F1F8","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000","primary-inverse":"#FEAB10"},kt={"brand-10":"#001A19","brand-20":"#002D2B","brand-30":"#00413D","brand-40":"#005954","brand-50":"#00756F","brand-60":"#03A098","brand-70":"#55BFBA","brand-80":"#92D6D2","brand-90":"#BFE7E5","brand-95":"#DDF2F1","brand-100":"#F4FBFA","primary-10":"#09191D","primary-20":"#102B34","primary-30":"#173D49","primary-40":"#205666","primary-50":"#2A7086","primary-60":"#5D97A9","primary-70":"#8CB6C2","primary-80":"#B2CED6","primary-90":"#D1E2E7","primary-95":"#E8F0F3","primary-100":"#F7FAFB","secondary-10":"#001731","secondary-20":"#002752","secondary-30":"#003874","secondary-40":"#004D9F","secondary-50":"#5B62A7","secondary-60":"#858CBD","secondary-70":"#A8ADCF","secondary-80":"#C6C9E0","secondary-90":"#DDDFEC","secondary-95":"#EDEEF5","secondary-100":"#F8F8FB","neutral-10":"#161616","neutral-20":"#282828","neutral-30":"#393939","neutral-40":"#4E4E4E","neutral-50":"#686868","neutral-60":"#8E8E8E","neutral-70":"#AFAFB0","neutral-80":"#C7CACA","neutral-90":"#DDE1E2","neutral-95":"#EDEFEF","neutral-100":"#F9F9F9","success-10":"#081A0F","success-20":"#0E2D1B","success-30":"#154126","success-40":"#1C5A34","success-50":"#257645","success-60":"#44A068","success-70":"#64C189","success-80":"#80DCA5","success-90":"#B4ECCB","success-95":"#D5F6E2","success-100":"#EFFCF4","warning-10":"#221302","warning-20":"#3B2204","warning-30":"#543106","warning-40":"#744408","warning-50":"#98590C","warning-60":"#D07A13","warning-70":"#E4A244","warning-80":"#F5C26C","warning-90":"#FADBA6","warning-95":"#FCECD4","warning-100":"#FDF7F0","error-10":"#330505","error-20":"#550808","error-30":"#750C0C","error-40":"#9E130F","error-50":"#CB2213","error-60":"#DE6C6C","error-70":"#E89B9B","error-80":"#EFBEBE","error-90":"#F5D9D9","error-95":"#F9ECEC","error-100":"#FCF7F7","info-10":"#021824","info-20":"#032B3F","info-30":"#053D59","info-40":"#06547B","info-50":"#176E9B","info-60":"#5296BE","info-70":"#82B5DA","info-80":"#ACCFE7","info-90":"#CCE3F1","info-95":"#E3F1F8","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000","primary-inverse":"#FEAB10"},At={"brand-10":"#881317","brand-20":"#B5191E","brand-30":"#B5040A","brand-40":"#D0333F","brand-50":"#DC666F","brand-60":"#E28087","brand-70":"#E7999F","brand-80":"#EDB3B7","brand-90":"#F3CCCF","brand-95":"#F9E6E7","brand-100":"#FCF2F3","primary-10":"#000000","primary-20":"#191919","primary-30":"#333333","primary-40":"#4D4D4D","primary-50":"#666666","primary-60":"#808080","primary-70":"#999999","primary-80":"#B3B3B3","primary-90":"#E6E6E6","primary-95":"#F7F7F7","primary-100":"#FFFFFF","secondary-10":"#19151D","secondary-20":"#2B2533","secondary-30":"#3E3649","secondary-40":"#564A64","secondary-50":"#6F637D","secondary-60":"#948B9F","secondary-70":"#B3ACBB","secondary-80":"#CCC8D2","secondary-90":"#E1DEE4","secondary-95":"#EFEEF1","secondary-100":"#F9F8F9","neutral-10":"#000000","neutral-20":"#191919","neutral-30":"#333333","neutral-40":"#4D4D4D","neutral-50":"#666666","neutral-60":"#808080","neutral-70":"#999999","neutral-80":"#B3B3B3","neutral-90":"#E6E6E6","neutral-95":"#F7F7F7","neutral-100":"#FFFFFF","success-10":"#081A0F","success-20":"#0E2D1B","success-30":"#154126","success-40":"#1C5A34","success-50":"#257645","success-60":"#44A068","success-70":"#64C189","success-80":"#80DCA5","success-90":"#B4ECCB","success-95":"#D5F6E2","success-100":"#EFFCF4","warning-10":"#221302","warning-20":"#3B2204","warning-30":"#543106","warning-40":"#744408","warning-50":"#98590C","warning-60":"#D07A13","warning-70":"#E4A244","warning-80":"#F5C26C","warning-90":"#FADBA6","warning-95":"#FCECD4","warning-100":"#FDF7F0","error-10":"#330505","error-20":"#550808","error-30":"#750C0C","error-40":"#9E130F","error-50":"#CB2213","error-60":"#DE6C6C","error-70":"#E89B9B","error-80":"#EFBEBE","error-90":"#F5D9D9","error-95":"#F9ECEC","error-100":"#FCF7F7","info-10":"#021824","info-20":"#032B3F","info-30":"#053D59","info-40":"#06547B","info-50":"#176E9B","info-60":"#5296BE","info-70":"#82B5DA","info-80":"#ACCFE7","info-90":"#CCE3F1","info-95":"#E3F1F8","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000","primary-inverse":"#FEAB10"},zt={"brand-10":"#0E123A","brand-20":"#191E65","brand-30":"#232B90","brand-40":"#303BC5","brand-50":"#494CFF","brand-60":"#AD6EFF","brand-70":"#AEA4FF","brand-80":"#C5C4FF","brand-90":"#DDDCFF","brand-95":"#EDECFF","brand-100":"#F8F8FF","primary-10":"#10152B","primary-20":"#1C254B","primary-30":"#28356C","primary-40":"#38489A","primary-50":"#4D5AD7","primary-60":"#7487F2","primary-70":"#9AAAFC","primary-80":"#BDC7FD","primary-90":"#DADFFB","primary-95":"#ECEEFE","primary-100":"#F7F8FF","secondary-10":"#19151D","secondary-20":"#2B2533","secondary-30":"#3E3649","secondary-40":"#564A64","secondary-50":"#6F637D","secondary-60":"#948B9F","secondary-70":"#B3ACBB","secondary-80":"#CCC8D2","secondary-90":"#E1DEE4","secondary-95":"#EFEEF1","secondary-100":"#F9F8F9","neutral-10":"#161616","neutral-20":"#282828","neutral-30":"#393939","neutral-40":"#4E4E4E","neutral-50":"#686868","neutral-60":"#8E8E8E","neutral-70":"#AFAFB0","neutral-80":"#C7CACA","neutral-90":"#DDE1E2","neutral-95":"#EDEFEF","neutral-100":"#F9F9F9","success-10":"#081A0F","success-20":"#0E2D1B","success-30":"#154126","success-40":"#1C5A34","success-50":"#257645","success-60":"#44A068","success-70":"#64C189","success-80":"#80DCA5","success-90":"#B4ECCB","success-95":"#D5F6E2","success-100":"#EFFCF4","warning-10":"#221302","warning-20":"#3B2204","warning-30":"#543106","warning-40":"#744408","warning-50":"#98590C","warning-60":"#D07A13","warning-70":"#E4A244","warning-80":"#F5C26C","warning-90":"#FADBA6","warning-95":"#FCECD4","warning-100":"#FDF7F0","error-10":"#330505","error-20":"#550808","error-30":"#750C0C","error-40":"#9E130F","error-50":"#CB2213","error-60":"#DE6C6C","error-70":"#E89B9B","error-80":"#EFBEBE","error-90":"#F5D9D9","error-95":"#F9ECEC","error-100":"#FCF7F7","info-10":"#021824","info-20":"#032B3F","info-30":"#053D59","info-40":"#06547B","info-50":"#176E9B","info-60":"#5296BE","info-70":"#82B5DA","info-80":"#ACCFE7","info-90":"#CCE3F1","info-95":"#E3F1F8","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000","primary-inverse":"#FEAB10"},Ot={"brand-10":"#170F39","brand-20":"#281C62","brand-30":"#38268B","brand-40":"#4D34BF","brand-50":"#5735DF","brand-60":"#9986F9","brand-70":"#B2A5F8","brand-80":"#CDC2FA","brand-90":"#E2DCFC","brand-95":"#EFEDFE","brand-100":"#FAF8FD","primary-10":"#170F39","primary-20":"#281C62","primary-30":"#38268B","primary-40":"#4D34BF","primary-50":"#5735DF","primary-60":"#9986F9","primary-70":"#B2A5F8","primary-80":"#CDC2FA","primary-90":"#E2DCFC","primary-95":"#EFEDFE","primary-100":"#FAF8FD","secondary-10":"#251204","secondary-20":"#401F08","secondary-30":"#5B2C0B","secondary-40":"#7E3D0F","secondary-50":"#B04900","secondary-60":"#E26E1C","secondary-70":"#FF9445","secondary-80":"#FFBB8E","secondary-90":"#FFD9BF","secondary-95":"#FFECDF","secondary-100":"#FFF8F3","neutral-10":"#161616","neutral-20":"#282828","neutral-30":"#393939","neutral-40":"#4E4E4E","neutral-50":"#686868","neutral-60":"#8E8E8E","neutral-70":"#AFAFB0","neutral-80":"#C7CACA","neutral-90":"#DDE1E2","neutral-95":"#EDEFEF","neutral-100":"#F9F9F9","success-10":"#031B15","success-20":"#082D24","success-30":"#094134","success-40":"#0D5947","success-50":"#10755E","success-60":"#16A181","success-70":"#1EC59D","success-80":"#6FDDC2","success-90":"#AFECDE","success-95":"#D5F5ED","success-100":"#F1FCF9","warning-10":"#1F1500","warning-20":"#362500","warning-30":"#4D3501","warning-40":"#6A4801","warning-50":"#8B6001","warning-60":"#BF8301","warning-70":"#EAA102","warning-80":"#FFBF34","warning-90":"#FFDC8F","warning-95":"#FFEDC7","warning-100":"#FFF8EA","error-10":"#270F10","error-20":"#441B1B","error-30":"#612627","error-40":"#853535","error-50":"#AF4546","error-60":"#EC6162","error-70":"#F29696","error-80":"#F7BBBC","error-90":"#FAD8D8","error-95":"#FCEAEA","error-100":"#FEF7F7","info-10":"#0F1627","info-20":"#1B2745","info-30":"#273763","info-40":"#354D88","info-50":"#4665B3","info-60":"#618AF6","info-70":"#8DADFF","info-80":"#B4C9FF","info-90":"#D3DFFF","info-95":"#E9EFFF","info-100":"#F5F8FF",white:"#FFFFFF",black:"#000000","primary-inverse":"#FEAB10"},Mt={"brand-10":"#0E113C","brand-20":"#191E67","brand-30":"#232A92","brand-40":"#233FC2","brand-50":"#135CEA","brand-60":"#378FFB","brand-70":"#71B3FD","brand-80":"#9DCFFE","brand-90":"#C1E5FF","brand-95":"#DCF1FF","brand-100":"#F3FAFF","primary-10":"#0E113C","primary-20":"#191E67","primary-30":"#232A92","primary-40":"#233FC2","primary-50":"#135CEA","primary-60":"#378FFB","primary-70":"#71B3FD","primary-80":"#9DCFFE","primary-90":"#C1E5FF","primary-95":"#DCF1FF","primary-100":"#F3FAFF","secondary-10":"#34001F","secondary-20":"#540033","secondary-30":"#730045","secondary-40":"#9D0054","secondary-50":"#C61C64","secondary-60":"#DE6792","secondary-70":"#EB96B6","secondary-80":"#F5BAD2","secondary-90":"#FCD5E3","secondary-95":"#FDEBF1","secondary-100":"#FDF6F9","neutral-10":"#161616","neutral-20":"#282828","neutral-30":"#393939","neutral-40":"#4E4E4E","neutral-50":"#686868","neutral-60":"#8E8E8E","neutral-70":"#AFAFB0","neutral-80":"#C7CACA","neutral-90":"#DDE1E2","neutral-95":"#EDEFEF","neutral-100":"#F9F9F9","success-10":"#081A0F","success-20":"#0E2D1B","success-30":"#154126","success-40":"#1C5A34","success-50":"#257645","success-60":"#44A068","success-70":"#64C189","success-80":"#80DCA5","success-90":"#B4ECCB","success-95":"#D5F6E2","success-100":"#EFFCF4","warning-10":"#221302","warning-20":"#3B2204","warning-30":"#543106","warning-40":"#744408","warning-50":"#98590C","warning-60":"#D07A13","warning-70":"#E4A244","warning-80":"#F5C26C","warning-90":"#FADBA6","warning-95":"#FCECD4","warning-100":"#FDF7F0","error-10":"#330505","error-20":"#550808","error-30":"#750C0C","error-40":"#9E130F","error-50":"#CB2213","error-60":"#DE6C6C","error-70":"#E89B9B","error-80":"#EFBEBE","error-90":"#F5D9D9","error-95":"#F9ECEC","error-100":"#FCF7F7","info-10":"#021824","info-20":"#032B3F","info-30":"#053D59","info-40":"#06547B","info-50":"#176E9B","info-60":"#5296BE","info-70":"#82B5DA","info-80":"#ACCFE7","info-90":"#CCE3F1","info-95":"#E3F1F8","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000","primary-inverse":"#FEAB10"},_t={collections:{lifesg:Bt,bookingsg:Dt,rbs:zt,mylegacy:St,ccube:Ct,oneservice:kt,pa:At,a11yplayground:Ot,supportgowhere:Mt},defaultValue:"lifesg"},Tt={collections:{lifesg:Bt,bookingsg:Dt,rbs:zt,mylegacy:St,ccube:Ct,oneservice:kt,pa:At,a11yplayground:Ot,supportgowhere:Mt},defaultValue:"lifesg"},Lt=e=>r=>{var t;const n=r.theme,i="dark"===(null==n?void 0:n.colourMode),o=xt(i?Tt:_t,null==n?void 0:n.colourScheme),s=i?"primitiveColourDark":"primitiveColour",a=null===(t=null==n?void 0:n.overrides)||void 0===t?void 0:t[s];return a?vt(o,e,a):o[e]},jt={"brand-10":Lt("brand-10"),"brand-20":Lt("brand-20"),"brand-30":Lt("brand-30"),"brand-40":Lt("brand-40"),"brand-50":Lt("brand-50"),"brand-60":Lt("brand-60"),"brand-70":Lt("brand-70"),"brand-80":Lt("brand-80"),"brand-90":Lt("brand-90"),"brand-95":Lt("brand-95"),"brand-100":Lt("brand-100"),"primary-10":Lt("primary-10"),"primary-20":Lt("primary-20"),"primary-30":Lt("primary-30"),"primary-40":Lt("primary-40"),"primary-50":Lt("primary-50"),"primary-60":Lt("primary-60"),"primary-70":Lt("primary-70"),"primary-80":Lt("primary-80"),"primary-90":Lt("primary-90"),"primary-95":Lt("primary-95"),"primary-100":Lt("primary-100"),"secondary-10":Lt("secondary-10"),"secondary-20":Lt("secondary-20"),"secondary-30":Lt("secondary-30"),"secondary-40":Lt("secondary-40"),"secondary-50":Lt("secondary-50"),"secondary-60":Lt("secondary-60"),"secondary-70":Lt("secondary-70"),"secondary-80":Lt("secondary-80"),"secondary-90":Lt("secondary-90"),"secondary-95":Lt("secondary-95"),"secondary-100":Lt("secondary-100"),"neutral-10":Lt("neutral-10"),"neutral-20":Lt("neutral-20"),"neutral-30":Lt("neutral-30"),"neutral-40":Lt("neutral-40"),"neutral-50":Lt("neutral-50"),"neutral-60":Lt("neutral-60"),"neutral-70":Lt("neutral-70"),"neutral-80":Lt("neutral-80"),"neutral-90":Lt("neutral-90"),"neutral-95":Lt("neutral-95"),"neutral-100":Lt("neutral-100"),"success-10":Lt("success-10"),"success-20":Lt("success-20"),"success-30":Lt("success-30"),"success-40":Lt("success-40"),"success-50":Lt("success-50"),"success-60":Lt("success-60"),"success-70":Lt("success-70"),"success-80":Lt("success-80"),"success-90":Lt("success-90"),"success-95":Lt("success-95"),"success-100":Lt("success-100"),"warning-10":Lt("warning-10"),"warning-20":Lt("warning-20"),"warning-30":Lt("warning-30"),"warning-40":Lt("warning-40"),"warning-50":Lt("warning-50"),"warning-60":Lt("warning-60"),"warning-70":Lt("warning-70"),"warning-80":Lt("warning-80"),"warning-90":Lt("warning-90"),"warning-95":Lt("warning-95"),"warning-100":Lt("warning-100"),"error-10":Lt("error-10"),"error-20":Lt("error-20"),"error-30":Lt("error-30"),"error-40":Lt("error-40"),"error-50":Lt("error-50"),"error-60":Lt("error-60"),"error-70":Lt("error-70"),"error-80":Lt("error-80"),"error-90":Lt("error-90"),"error-95":Lt("error-95"),"error-100":Lt("error-100"),"info-10":Lt("info-10"),"info-20":Lt("info-20"),"info-30":Lt("info-30"),"info-40":Lt("info-40"),"info-50":Lt("info-50"),"info-60":Lt("info-60"),"info-70":Lt("info-70"),"info-80":Lt("info-80"),"info-90":Lt("info-90"),"info-95":Lt("info-95"),"info-100":Lt("info-100"),white:Lt("white"),black:Lt("black"),"primary-inverse":Lt("primary-inverse")},Rt={text:Lt("neutral-20"),"text-subtle":Lt("neutral-30"),"text-subtler":Lt("neutral-50"),"text-subtlest":Lt("neutral-60"),"text-primary":Lt("primary-50"),"text-hover":Lt("primary-40"),"text-selected":Lt("primary-50"),"text-selected-hover":Lt("primary-40"),"text-disabled":Lt("neutral-50"),"text-disabled-subtle":Lt("neutral-60"),"text-disabled-subtlest":Lt("neutral-80"),"text-selected-disabled":Lt("neutral-20"),"text-success":Lt("success-40"),"text-warning":Lt("warning-40"),"text-error":Lt("error-40"),"text-info":Lt("info-40"),"text-inverse":Lt("white"),icon:Lt("neutral-50"),"icon-subtle":Lt("neutral-60"),"icon-strongest":Lt("neutral-20"),"icon-primary":Lt("primary-50"),"icon-primary-subtle":Lt("primary-60"),"icon-primary-subtlest":Lt("primary-70"),"icon-hover":Lt("primary-40"),"icon-selected":Lt("primary-50"),"icon-selected-hover":Lt("primary-40"),"icon-disabled":Lt("neutral-50"),"icon-disabled-subtle":Lt("neutral-60"),"icon-selected-disabled":Lt("neutral-60"),"icon-success":Lt("success-50"),"icon-warning":Lt("warning-60"),"icon-error":Lt("error-50"),"icon-error-strong":Lt("error-40"),"icon-info":Lt("info-50"),"icon-inverse":Lt("white"),"icon-primary-inverse":Lt("primary-inverse"),border:Lt("neutral-90"),"border-strong":Lt("neutral-70"),"border-stronger":Lt("neutral-50"),"border-primary":Lt("primary-50"),"border-primary-subtle":Lt("primary-60"),"border-hover":Lt("primary-90"),"border-hover-strong":Lt("primary-60"),"border-selected":Lt("primary-50"),"border-selected-subtle":Lt("primary-70"),"border-selected-subtlest":Lt("primary-90"),"border-selected-hover":Lt("primary-40"),"border-focus":Lt("primary-60"),"border-focus-strong":Lt("primary-50"),"border-disabled":Lt("neutral-90"),"border-selected-disabled":Lt("neutral-70"),"border-success":Lt("success-60"),"border-warning":Lt("warning-60"),"border-error":Lt("error-60"),"border-error-focus":Lt("error-60"),"border-error-focus-strong":Lt("error-40"),"border-error-strong":Lt("error-40"),"border-info":Lt("info-60"),bg:Lt("white"),"bg-strong":Lt("neutral-100"),"bg-stronger":Lt("neutral-95"),"bg-strongest":Lt("neutral-90"),"bg-hover":Lt("primary-95"),"bg-hover-strong":Lt("primary-90"),"bg-hover-subtle":Lt("primary-100"),"bg-hover-neutral":Lt("neutral-100"),"bg-hover-neutral-strong":Lt("neutral-90"),"bg-selected":Lt("primary-95"),"bg-selected-hover":Lt("primary-90"),"bg-selected-strong":Lt("primary-90"),"bg-selected-stronger":Lt("primary-70"),"bg-selected-strongest":Lt("primary-50"),"bg-selected-strongest-hover":Lt("primary-40"),"bg-disabled":Lt("neutral-95"),"bg-selected-disabled":Lt("neutral-95"),"bg-selected-stronger-disabled":Lt("neutral-70"),"bg-success":Lt("success-100"),"bg-success-hover":Lt("success-95"),"bg-success-strong":Lt("success-50"),"bg-success-strong-hover":Lt("success-40"),"bg-warning":Lt("warning-100"),"bg-warning-hover":Lt("warning-95"),"bg-warning-strong":Lt("warning-50"),"bg-warning-strong-hover":Lt("warning-40"),"bg-info":Lt("info-100"),"bg-info-hover":Lt("info-95"),"bg-info-strong":Lt("info-50"),"bg-info-strong-hover":Lt("info-40"),"bg-error":Lt("error-100"),"bg-error-hover":Lt("error-95"),"bg-error-strong":Lt("error-50"),"bg-error-strong-hover":Lt("error-40"),"bg-inverse":Lt("neutral-20"),"bg-inverse-subtle":Lt("neutral-30"),"bg-inverse-subtler":Lt("neutral-50"),"bg-inverse-subtlest":Lt("neutral-60"),"bg-inverse-hover":Lt("neutral-40"),"bg-primary":Lt("primary-50"),"bg-primary-subtle":Lt("primary-60"),"bg-primary-subtler":Lt("primary-95"),"bg-primary-subtlest":Lt("primary-100"),"bg-available":"#6DD0A1","bg-primary-hover":Lt("primary-40"),"bg-primary-subtlest-hover":Lt("primary-90"),"bg-primary-subtlest-selected":Lt("primary-90"),"overlay-strong":"rgba(40, 40, 40, 0.85)","overlay-subtle":"rgba(40, 40, 40, 0.20)",hyperlink:Lt("primary-50"),"hyperlink-hover":Lt("primary-40"),"hyperlink-visited":Lt("primary-40"),"hyperlink-inverse":Lt("primary-inverse"),"focus-ring":Lt("primary-50"),"focus-ring-inverse":Lt("white")},Pt={text:Lt("neutral-100"),"text-subtle":Lt("neutral-80"),"text-subtler":Lt("neutral-60"),"text-subtlest":Lt("neutral-50"),"text-primary":Lt("primary-60"),"text-hover":Lt("primary-70"),"text-selected":Lt("primary-60"),"text-selected-hover":Lt("primary-70"),"text-disabled":Lt("neutral-60"),"text-disabled-subtle":Lt("neutral-50"),"text-disabled-subtlest":Lt("neutral-30"),"text-selected-disabled":Lt("neutral-90"),"text-success":Lt("success-70"),"text-warning":Lt("warning-70"),"text-error":Lt("error-70"),"text-info":Lt("info-70"),"text-inverse":Lt("black"),icon:Lt("neutral-60"),"icon-subtle":Lt("neutral-50"),"icon-strongest":Lt("neutral-90"),"icon-primary":Lt("primary-60"),"icon-primary-subtle":Lt("primary-50"),"icon-primary-subtlest":Lt("primary-40"),"icon-hover":Lt("primary-70"),"icon-selected":Lt("primary-60"),"icon-selected-hover":Lt("primary-70"),"icon-disabled":Lt("neutral-60"),"icon-disabled-subtle":Lt("neutral-50"),"icon-selected-disabled":Lt("neutral-50"),"icon-success":Lt("success-60"),"icon-warning":Lt("warning-50"),"icon-error":Lt("error-60"),"icon-error-strong":Lt("error-70"),"icon-info":Lt("info-60"),"icon-inverse":Lt("black"),"icon-primary-inverse":Lt("primary-inverse"),border:Lt("neutral-20"),"border-strong":Lt("neutral-40"),"border-stronger":Lt("neutral-60"),"border-primary":Lt("primary-60"),"border-primary-subtle":Lt("primary-50"),"border-hover":Lt("primary-20"),"border-hover-strong":Lt("primary-50"),"border-selected":Lt("primary-60"),"border-selected-subtle":Lt("primary-40"),"border-selected-subtlest":Lt("primary-20"),"border-selected-hover":Lt("primary-70"),"border-focus":Lt("primary-50"),"border-focus-strong":Lt("primary-60"),"border-disabled":Lt("neutral-20"),"border-selected-disabled":Lt("neutral-40"),"border-success":Lt("success-50"),"border-warning":Lt("warning-50"),"border-error":Lt("error-50"),"border-error-focus":Lt("error-50"),"border-error-focus-strong":Lt("error-70"),"border-error-strong":Lt("error-70"),"border-info":Lt("info-50"),bg:Lt("black"),"bg-strong":Lt("neutral-10"),"bg-stronger":Lt("neutral-20"),"bg-strongest":Lt("neutral-20"),"bg-hover":Lt("primary-20"),"bg-hover-strong":Lt("primary-20"),"bg-hover-subtle":Lt("primary-10"),"bg-hover-neutral":Lt("neutral-10"),"bg-hover-neutral-strong":Lt("neutral-20"),"bg-selected":Lt("primary-20"),"bg-selected-hover":Lt("primary-20"),"bg-selected-strong":Lt("primary-20"),"bg-selected-stronger":Lt("primary-40"),"bg-selected-strongest":Lt("primary-60"),"bg-selected-strongest-hover":Lt("primary-70"),"bg-disabled":Lt("neutral-20"),"bg-selected-disabled":Lt("neutral-20"),"bg-selected-stronger-disabled":Lt("neutral-40"),"bg-success":Lt("success-10"),"bg-success-hover":Lt("success-20"),"bg-success-strong":Lt("success-60"),"bg-success-strong-hover":Lt("success-70"),"bg-warning":Lt("warning-10"),"bg-warning-hover":Lt("warning-20"),"bg-warning-strong":Lt("warning-60"),"bg-warning-strong-hover":Lt("warning-70"),"bg-info":Lt("info-10"),"bg-info-hover":Lt("info-20"),"bg-info-strong":Lt("info-60"),"bg-info-strong-hover":Lt("info-70"),"bg-error":Lt("error-10"),"bg-error-hover":Lt("error-20"),"bg-error-strong":Lt("error-60"),"bg-error-strong-hover":Lt("error-70"),"bg-inverse":Lt("neutral-90"),"bg-inverse-subtle":Lt("neutral-80"),"bg-inverse-subtler":Lt("neutral-60"),"bg-inverse-subtlest":Lt("neutral-50"),"bg-inverse-hover":Lt("neutral-70"),"bg-primary":Lt("primary-60"),"bg-primary-subtle":Lt("primary-50"),"bg-primary-subtler":Lt("primary-20"),"bg-primary-subtlest":Lt("primary-10"),"bg-available":"#185339","bg-primary-hover":Lt("primary-70"),"bg-primary-subtlest-hover":Lt("primary-20"),"bg-primary-subtlest-selected":Lt("primary-20"),"overlay-strong":"rgba(78, 78, 78, 0.80)","overlay-subtle":"rgba(78, 78, 78, 0.50)",hyperlink:Lt("primary-60"),"hyperlink-hover":Lt("primary-70"),"hyperlink-visited":Lt("primary-70"),"hyperlink-inverse":Lt("primary-inverse"),"focus-ring":Lt("primary-60"),"focus-ring-inverse":Lt("black")},Yt={text:Lt("neutral-30"),"text-subtle":Lt("neutral-40"),"text-subtler":Lt("neutral-50"),"text-subtlest":Lt("neutral-70"),"text-primary":Lt("neutral-10"),"text-hover":Lt("neutral-70"),"text-selected":Lt("neutral-20"),"text-selected-hover":Lt("neutral-10"),"text-disabled":Lt("neutral-50"),"text-disabled-subtle":Lt("neutral-60"),"text-disabled-subtlest":Lt("neutral-80"),"text-selected-disabled":Lt("neutral-40"),"text-success":Lt("success-40"),"text-warning":Lt("warning-40"),"text-error":Lt("brand-30"),"text-info":Lt("neutral-40"),"text-inverse":Lt("neutral-100"),icon:Lt("neutral-40"),"icon-subtle":Lt("neutral-50"),"icon-strongest":Lt("neutral-10"),"icon-primary":Lt("neutral-10"),"icon-primary-subtle":Lt("neutral-30"),"icon-primary-subtlest":Lt("neutral-60"),"icon-hover":Lt("neutral-70"),"icon-selected":Lt("brand-20"),"icon-selected-hover":Lt("brand-10"),"icon-disabled":Lt("neutral-50"),"icon-disabled-subtle":Lt("neutral-60"),"icon-selected-disabled":Lt("neutral-40"),"icon-success":Lt("success-40"),"icon-warning":Lt("warning-60"),"icon-error":Lt("brand-30"),"icon-error-strong":Lt("brand-10"),"icon-info":Lt("neutral-40"),"icon-inverse":Lt("neutral-100"),"icon-primary-inverse":"#F9B371",border:Lt("neutral-90"),"border-strong":Lt("neutral-30"),"border-stronger":Lt("neutral-20"),"border-primary":Lt("neutral-40"),"border-primary-subtle":Lt("neutral-60"),"border-hover":Lt("neutral-80"),"border-hover-strong":Lt("neutral-10"),"border-selected":Lt("brand-20"),"border-selected-subtle":Lt("neutral-40"),"border-selected-subtlest":Lt("neutral-70"),"border-selected-hover":Lt("neutral-10"),"border-focus":Lt("neutral-20"),"border-focus-strong":Lt("neutral-10"),"border-disabled":Lt("neutral-90"),"border-selected-disabled":Lt("neutral-80"),"border-success":Lt("success-40"),"border-warning":Lt("warning-60"),"border-error":Lt("brand-30"),"border-error-focus":Lt("brand-20"),"border-error-focus-strong":Lt("brand-10"),"border-error-strong":Lt("brand-20"),"border-info":Lt("neutral-40"),bg:Lt("neutral-100"),"bg-strong":Lt("neutral-95"),"bg-stronger":Lt("neutral-90"),"bg-strongest":Lt("neutral-80"),"bg-hover":Lt("brand-90"),"bg-hover-strong":Lt("brand-80"),"bg-hover-subtle":Lt("neutral-90"),"bg-hover-neutral":Lt("neutral-90"),"bg-hover-neutral-strong":Lt("neutral-90"),"bg-selected":Lt("brand-100"),"bg-selected-hover":Lt("brand-30"),"bg-selected-strong":Lt("brand-50"),"bg-selected-stronger":Lt("brand-40"),"bg-selected-strongest":Lt("brand-20"),"bg-selected-strongest-hover":Lt("brand-10"),"bg-disabled":Lt("neutral-90"),"bg-selected-disabled":Lt("neutral-90"),"bg-selected-stronger-disabled":Lt("neutral-80"),"bg-success":Lt("success-100"),"bg-success-hover":Lt("success-95"),"bg-success-strong":Lt("success-50"),"bg-success-strong-hover":Lt("success-40"),"bg-warning":Lt("warning-100"),"bg-warning-hover":Lt("warning-95"),"bg-warning-strong":Lt("warning-50"),"bg-warning-strong-hover":Lt("warning-40"),"bg-info":Lt("neutral-95"),"bg-info-hover":Lt("info-95"),"bg-info-strong":Lt("info-50"),"bg-info-strong-hover":Lt("info-40"),"bg-error":Lt("brand-100"),"bg-error-hover":Lt("error-95"),"bg-error-strong":Lt("error-50"),"bg-error-strong-hover":Lt("error-40"),"bg-inverse":Lt("neutral-40"),"bg-inverse-subtle":Lt("neutral-60"),"bg-inverse-subtler":Lt("neutral-70"),"bg-inverse-subtlest":Lt("neutral-80"),"bg-inverse-hover":Lt("neutral-30"),"bg-primary":Lt("brand-20"),"bg-primary-subtle":Lt("brand-60"),"bg-primary-subtler":Lt("brand-80"),"bg-primary-subtlest":Lt("brand-100"),"bg-available":Lt("success-60"),"bg-primary-hover":Lt("brand-10"),"bg-primary-subtlest-hover":Lt("brand-80"),"bg-primary-subtlest-selected":Lt("brand-40"),"overlay-strong":"rgba(25, 25, 25, 0.95)","overlay-subtle":"rgba(25, 25, 25, 0.20)",hyperlink:Lt("neutral-10"),"hyperlink-hover":Lt("neutral-40"),"hyperlink-visited":Lt("neutral-50"),"hyperlink-inverse":"#F8AE68","focus-ring":Lt("primary-50"),"focus-ring-inverse":Lt("white")},It={text:Lt("neutral-20"),"text-subtle":Lt("neutral-30"),"text-subtler":Lt("neutral-50"),"text-subtlest":Lt("neutral-60"),"text-primary":Lt("primary-50"),"text-hover":Lt("primary-40"),"text-selected":Lt("primary-50"),"text-selected-hover":Lt("primary-40"),"text-disabled":Lt("neutral-50"),"text-disabled-subtle":Lt("neutral-60"),"text-disabled-subtlest":Lt("neutral-80"),"text-selected-disabled":Lt("neutral-20"),"text-success":Lt("success-40"),"text-warning":Lt("warning-40"),"text-error":Lt("error-40"),"text-info":Lt("info-40"),"text-inverse":Lt("white"),icon:Lt("neutral-50"),"icon-subtle":Lt("neutral-60"),"icon-strongest":Lt("neutral-20"),"icon-primary":Lt("primary-50"),"icon-primary-subtle":Lt("primary-60"),"icon-primary-subtlest":Lt("primary-70"),"icon-hover":Lt("primary-40"),"icon-selected":Lt("primary-50"),"icon-selected-hover":Lt("primary-40"),"icon-disabled":Lt("neutral-50"),"icon-disabled-subtle":Lt("neutral-60"),"icon-selected-disabled":Lt("neutral-60"),"icon-success":Lt("success-50"),"icon-warning":Lt("warning-60"),"icon-error":Lt("error-50"),"icon-error-strong":Lt("error-40"),"icon-info":Lt("info-50"),"icon-inverse":Lt("white"),"icon-primary-inverse":Lt("primary-inverse"),border:Lt("neutral-90"),"border-strong":Lt("neutral-70"),"border-stronger":Lt("neutral-50"),"border-primary":Lt("primary-50"),"border-primary-subtle":Lt("primary-60"),"border-hover":Lt("primary-90"),"border-hover-strong":Lt("primary-60"),"border-selected":Lt("primary-50"),"border-selected-subtle":Lt("primary-70"),"border-selected-subtlest":Lt("primary-90"),"border-selected-hover":Lt("primary-40"),"border-focus":Lt("primary-60"),"border-focus-strong":Lt("primary-50"),"border-disabled":Lt("neutral-90"),"border-selected-disabled":Lt("neutral-70"),"border-success":Lt("success-60"),"border-warning":Lt("warning-60"),"border-error":Lt("error-60"),"border-error-focus":Lt("error-60"),"border-error-focus-strong":Lt("error-40"),"border-error-strong":Lt("error-40"),"border-info":Lt("info-60"),bg:Lt("white"),"bg-strong":Lt("neutral-100"),"bg-stronger":Lt("neutral-95"),"bg-strongest":Lt("neutral-90"),"bg-hover":Lt("primary-95"),"bg-hover-strong":Lt("primary-90"),"bg-hover-subtle":Lt("primary-100"),"bg-hover-neutral":Lt("neutral-100"),"bg-hover-neutral-strong":Lt("neutral-90"),"bg-selected":Lt("primary-95"),"bg-selected-hover":Lt("primary-90"),"bg-selected-strong":Lt("primary-90"),"bg-selected-stronger":Lt("primary-70"),"bg-selected-strongest":Lt("primary-50"),"bg-selected-strongest-hover":Lt("primary-40"),"bg-disabled":Lt("neutral-95"),"bg-selected-disabled":Lt("neutral-95"),"bg-selected-stronger-disabled":Lt("neutral-70"),"bg-success":Lt("success-100"),"bg-success-hover":Lt("success-95"),"bg-success-strong":Lt("success-50"),"bg-success-strong-hover":Lt("success-40"),"bg-warning":Lt("warning-100"),"bg-warning-hover":Lt("warning-95"),"bg-warning-strong":Lt("warning-50"),"bg-warning-strong-hover":Lt("warning-40"),"bg-info":Lt("info-100"),"bg-info-hover":Lt("info-95"),"bg-info-strong":Lt("info-50"),"bg-info-strong-hover":Lt("info-40"),"bg-error":Lt("error-100"),"bg-error-hover":Lt("error-95"),"bg-error-strong":Lt("error-50"),"bg-error-strong-hover":Lt("error-40"),"bg-inverse":Lt("neutral-20"),"bg-inverse-subtle":Lt("neutral-30"),"bg-inverse-subtler":Lt("neutral-50"),"bg-inverse-subtlest":Lt("neutral-60"),"bg-inverse-hover":Lt("neutral-40"),"bg-primary":Lt("primary-50"),"bg-primary-subtle":Lt("primary-60"),"bg-primary-subtler":Lt("primary-95"),"bg-primary-subtlest":Lt("primary-100"),"bg-available":"#6DD0A1","bg-primary-hover":Lt("primary-40"),"bg-primary-subtlest-hover":Lt("primary-90"),"bg-primary-subtlest-selected":Lt("primary-90"),"overlay-strong":"rgba(40, 40, 40, 0.85)","overlay-subtle":"rgba(40, 40, 40, 0.20)",hyperlink:Lt("primary-50"),"hyperlink-hover":Lt("primary-40"),"hyperlink-visited":Lt("primary-40"),"hyperlink-inverse":Lt("primary-inverse"),"focus-ring":Lt("primary-50"),"focus-ring-inverse":Lt("white")},Ht={text:Lt("neutral-100"),"text-subtle":Lt("neutral-80"),"text-subtler":Lt("neutral-60"),"text-subtlest":Lt("neutral-50"),"text-primary":Lt("primary-60"),"text-hover":Lt("primary-70"),"text-selected":Lt("primary-60"),"text-selected-hover":Lt("primary-70"),"text-disabled":Lt("neutral-60"),"text-disabled-subtle":Lt("neutral-50"),"text-disabled-subtlest":Lt("neutral-30"),"text-selected-disabled":Lt("neutral-90"),"text-success":Lt("success-70"),"text-warning":Lt("warning-70"),"text-error":Lt("error-70"),"text-info":Lt("info-70"),"text-inverse":Lt("black"),icon:Lt("neutral-60"),"icon-subtle":Lt("neutral-50"),"icon-strongest":Lt("neutral-90"),"icon-primary":Lt("primary-60"),"icon-primary-subtle":Lt("primary-50"),"icon-primary-subtlest":Lt("primary-40"),"icon-hover":Lt("primary-70"),"icon-selected":Lt("primary-60"),"icon-selected-hover":Lt("primary-70"),"icon-disabled":Lt("neutral-60"),"icon-disabled-subtle":Lt("neutral-50"),"icon-selected-disabled":Lt("neutral-50"),"icon-success":Lt("success-60"),"icon-warning":Lt("warning-50"),"icon-error":Lt("error-60"),"icon-error-strong":Lt("error-70"),"icon-info":Lt("info-60"),"icon-inverse":Lt("black"),"icon-primary-inverse":Lt("primary-inverse"),border:Lt("neutral-20"),"border-strong":Lt("neutral-40"),"border-stronger":Lt("neutral-60"),"border-primary":Lt("primary-60"),"border-primary-subtle":Lt("primary-50"),"border-hover":Lt("primary-20"),"border-hover-strong":Lt("primary-50"),"border-selected":Lt("primary-60"),"border-selected-subtle":Lt("primary-40"),"border-selected-subtlest":Lt("primary-20"),"border-selected-hover":Lt("primary-70"),"border-focus":Lt("primary-50"),"border-focus-strong":Lt("primary-60"),"border-disabled":Lt("neutral-20"),"border-selected-disabled":Lt("neutral-40"),"border-success":Lt("success-50"),"border-warning":Lt("warning-50"),"border-error":Lt("error-50"),"border-error-focus":Lt("error-50"),"border-error-focus-strong":Lt("error-70"),"border-error-strong":Lt("error-70"),"border-info":Lt("info-50"),bg:Lt("black"),"bg-strong":Lt("neutral-10"),"bg-stronger":Lt("neutral-20"),"bg-strongest":Lt("neutral-20"),"bg-hover":Lt("primary-20"),"bg-hover-strong":Lt("primary-20"),"bg-hover-subtle":Lt("primary-10"),"bg-hover-neutral":Lt("neutral-10"),"bg-hover-neutral-strong":Lt("neutral-20"),"bg-selected":Lt("primary-20"),"bg-selected-hover":Lt("primary-20"),"bg-selected-strong":Lt("primary-20"),"bg-selected-stronger":Lt("primary-40"),"bg-selected-strongest":Lt("primary-60"),"bg-selected-strongest-hover":Lt("primary-70"),"bg-disabled":Lt("neutral-20"),"bg-selected-disabled":Lt("neutral-20"),"bg-selected-stronger-disabled":Lt("neutral-40"),"bg-success":Lt("success-10"),"bg-success-hover":Lt("success-20"),"bg-success-strong":Lt("success-60"),"bg-success-strong-hover":Lt("success-70"),"bg-warning":Lt("warning-10"),"bg-warning-hover":Lt("warning-20"),"bg-warning-strong":Lt("warning-60"),"bg-warning-strong-hover":Lt("warning-70"),"bg-info":Lt("info-10"),"bg-info-hover":Lt("info-20"),"bg-info-strong":Lt("info-60"),"bg-info-strong-hover":Lt("info-70"),"bg-error":Lt("error-10"),"bg-error-hover":Lt("error-20"),"bg-error-strong":Lt("error-60"),"bg-error-strong-hover":Lt("error-70"),"bg-inverse":Lt("neutral-90"),"bg-inverse-subtle":Lt("neutral-80"),"bg-inverse-subtler":Lt("neutral-60"),"bg-inverse-subtlest":Lt("neutral-50"),"bg-inverse-hover":Lt("neutral-70"),"bg-primary":Lt("primary-60"),"bg-primary-subtle":Lt("primary-50"),"bg-primary-subtler":Lt("primary-20"),"bg-primary-subtlest":Lt("primary-10"),"bg-available":"#185339","bg-primary-hover":Lt("primary-70"),"bg-primary-subtlest-hover":Lt("primary-20"),"bg-primary-subtlest-selected":Lt("primary-20"),"overlay-strong":"rgba(78, 78, 78, 0.80)","overlay-subtle":"rgba(78, 78, 78, 0.50)",hyperlink:Lt("primary-60"),"hyperlink-hover":Lt("primary-70"),"hyperlink-visited":Lt("primary-70"),"hyperlink-inverse":Lt("primary-inverse"),"focus-ring":Lt("primary-60"),"focus-ring-inverse":Lt("black")},Wt={collections:{lifesg:Rt,bookingsg:Rt,rbs:Rt,mylegacy:Rt,ccube:Rt,oneservice:Rt,pa:Yt,a11yplayground:It,supportgowhere:Rt},defaultValue:"lifesg"},Nt={collections:{lifesg:Pt,bookingsg:Pt,rbs:Pt,mylegacy:Pt,ccube:Pt,oneservice:Pt,pa:Pt,a11yplayground:Ht,supportgowhere:Pt},defaultValue:"lifesg"},Vt=e=>r=>{var t;const n=r.theme,i="dark"===(null==n?void 0:n.colourMode),o=xt(i?Nt:Wt,null==n?void 0:n.colourScheme),s=i?"semanticColourDark":"semanticColour",a=null===(t=null==n?void 0:n.overrides)||void 0===t?void 0:t[s],l=a?vt(o,e,a):o[e];return"function"==typeof l?l(r):l},Kt={text:Vt("text"),"text-subtle":Vt("text-subtle"),"text-subtler":Vt("text-subtler"),"text-subtlest":Vt("text-subtlest"),"text-primary":Vt("text-primary"),"text-hover":Vt("text-hover"),"text-selected":Vt("text-selected"),"text-selected-hover":Vt("text-selected-hover"),"text-disabled":Vt("text-disabled"),"text-disabled-subtle":Vt("text-disabled-subtle"),"text-disabled-subtlest":Vt("text-disabled-subtlest"),"text-selected-disabled":Vt("text-selected-disabled"),"text-success":Vt("text-success"),"text-warning":Vt("text-warning"),"text-error":Vt("text-error"),"text-info":Vt("text-info"),"text-inverse":Vt("text-inverse"),icon:Vt("icon"),"icon-subtle":Vt("icon-subtle"),"icon-strongest":Vt("icon-strongest"),"icon-primary":Vt("icon-primary"),"icon-primary-subtle":Vt("icon-primary-subtle"),"icon-primary-subtlest":Vt("icon-primary-subtlest"),"icon-hover":Vt("icon-hover"),"icon-selected":Vt("icon-selected"),"icon-selected-hover":Vt("icon-selected-hover"),"icon-disabled":Vt("icon-disabled"),"icon-disabled-subtle":Vt("icon-disabled-subtle"),"icon-selected-disabled":Vt("icon-selected-disabled"),"icon-success":Vt("icon-success"),"icon-warning":Vt("icon-warning"),"icon-error":Vt("icon-error"),"icon-error-strong":Vt("icon-error-strong"),"icon-info":Vt("icon-info"),"icon-inverse":Vt("icon-inverse"),"icon-primary-inverse":Vt("icon-primary-inverse"),border:Vt("border"),"border-strong":Vt("border-strong"),"border-stronger":Vt("border-stronger"),"border-primary":Vt("border-primary"),"border-primary-subtle":Vt("border-primary-subtle"),"border-hover":Vt("border-hover"),"border-hover-strong":Vt("border-hover-strong"),"border-selected":Vt("border-selected"),"border-selected-subtle":Vt("border-selected-subtle"),"border-selected-subtlest":Vt("border-selected-subtlest"),"border-selected-hover":Vt("border-selected-hover"),"border-focus":Vt("border-focus"),"border-focus-strong":Vt("border-focus-strong"),"border-disabled":Vt("border-disabled"),"border-selected-disabled":Vt("border-selected-disabled"),"border-success":Vt("border-success"),"border-warning":Vt("border-warning"),"border-error":Vt("border-error"),"border-error-focus":Vt("border-error-focus"),"border-error-focus-strong":Vt("border-error-focus-strong"),"border-error-strong":Vt("border-error-strong"),"border-info":Vt("border-info"),bg:Vt("bg"),"bg-strong":Vt("bg-strong"),"bg-stronger":Vt("bg-stronger"),"bg-strongest":Vt("bg-strongest"),"bg-hover":Vt("bg-hover"),"bg-hover-strong":Vt("bg-hover-strong"),"bg-hover-subtle":Vt("bg-hover-subtle"),"bg-hover-neutral":Vt("bg-hover-neutral"),"bg-hover-neutral-strong":Vt("bg-hover-neutral-strong"),"bg-selected":Vt("bg-selected"),"bg-selected-hover":Vt("bg-selected-hover"),"bg-selected-strong":Vt("bg-selected-strong"),"bg-selected-stronger":Vt("bg-selected-stronger"),"bg-selected-strongest":Vt("bg-selected-strongest"),"bg-selected-strongest-hover":Vt("bg-selected-strongest-hover"),"bg-disabled":Vt("bg-disabled"),"bg-selected-disabled":Vt("bg-selected-disabled"),"bg-selected-stronger-disabled":Vt("bg-selected-stronger-disabled"),"bg-success":Vt("bg-success"),"bg-success-hover":Vt("bg-success-hover"),"bg-success-strong":Vt("bg-success-strong"),"bg-success-strong-hover":Vt("bg-success-strong-hover"),"bg-warning":Vt("bg-warning"),"bg-warning-hover":Vt("bg-warning-hover"),"bg-warning-strong":Vt("bg-warning-strong"),"bg-warning-strong-hover":Vt("bg-warning-strong-hover"),"bg-info":Vt("bg-info"),"bg-info-hover":Vt("bg-info-hover"),"bg-info-strong":Vt("bg-info-strong"),"bg-info-strong-hover":Vt("bg-info-strong-hover"),"bg-error":Vt("bg-error"),"bg-error-hover":Vt("bg-error-hover"),"bg-error-strong":Vt("bg-error-strong"),"bg-error-strong-hover":Vt("bg-error-strong-hover"),"bg-inverse":Vt("bg-inverse"),"bg-inverse-subtle":Vt("bg-inverse-subtle"),"bg-inverse-subtler":Vt("bg-inverse-subtler"),"bg-inverse-subtlest":Vt("bg-inverse-subtlest"),"bg-inverse-hover":Vt("bg-inverse-hover"),"bg-primary":Vt("bg-primary"),"bg-primary-subtle":Vt("bg-primary-subtle"),"bg-primary-subtler":Vt("bg-primary-subtler"),"bg-primary-subtlest":Vt("bg-primary-subtlest"),"bg-available":Vt("bg-available"),"bg-primary-hover":Vt("bg-primary-hover"),"bg-primary-subtlest-hover":Vt("bg-primary-subtlest-hover"),"bg-primary-subtlest-selected":Vt("bg-primary-subtlest-selected"),"overlay-strong":Vt("overlay-strong"),"overlay-subtle":Vt("overlay-subtle"),hyperlink:Vt("hyperlink"),"hyperlink-hover":Vt("hyperlink-hover"),"hyperlink-visited":Vt("hyperlink-visited"),"hyperlink-inverse":Vt("hyperlink-inverse"),"focus-ring":Vt("focus-ring"),"focus-ring-inverse":Vt("focus-ring-inverse")},Ut={collections:{default:{solid:e=>r=>{var t,n,i;const{thickness:o,radius:s,colour:a}=e||{},l=null!==(t="function"==typeof o?o(r):o)&&void 0!==t?t:$t["width-010"](r),d=null!==(n="function"==typeof s?s(r):s)&&void 0!==n?n:0,c=null!==(i="function"==typeof a?a(r):a)&&void 0!==i?i:Kt.border(r),u=$t.solid;return v`
            border: ${l} ${u} ${c};
            border-radius: ${d};
        `},"dashed-default":e=>r=>{var t,n,i;const{thickness:o,radius:s,colour:a}=e||{},l=null!==(t="function"==typeof o?o(r):o)&&void 0!==t?t:$t["width-010"](r),d=null!==(n="function"==typeof s?s(r):s)&&void 0!==n?n:0,c=null!==(i="function"==typeof a?a(r):a)&&void 0!==i?i:Kt.border(r),u=encodeURIComponent(`<svg width='100%' height='100%' xmlns='http://www.w3.org/2000/svg'><rect width='100%' height='100%' fill='none' rx='${d}' ry='${d}' stroke='${c}' stroke-width='${l}' stroke-dasharray='4, 8' stroke-dashoffset='0' stroke-linecap='square'/></svg>`);return v`
            background-image: url("data:image/svg+xml,${u}");
            border-radius: ${d};
        `}}},defaultValue:"default"},Zt=e=>1===e.length&&"theme"in e[0],Xt=e=>(...r)=>t=>{const n=Zt(r)?[]:r,i=Zt(r)?r[0]:t,o=i.theme;return(0,xt(Ut,null==o?void 0:o.borderScheme)[e])(...n)(i)},qt={solid:Xt("solid"),"dashed-default":Xt("dashed-default")},Jt={collections:{default:{"xxs-min":0,"xxs-max":320,"xs-min":321,"xs-max":375,"sm-min":376,"sm-max":480,"md-min":481,"md-max":768,"lg-min":769,"lg-max":1200,"xl-min":1201,"xl-max":1440,"xxl-min":1441,"xxs-column":8,"xs-column":8,"sm-column":8,"md-column":8,"lg-column":12,"xl-column":12,"xxl-column":12,"xxs-gutter":16,"xs-gutter":16,"sm-gutter":16,"md-gutter":16,"lg-gutter":32,"xl-gutter":32,"xxl-gutter":32,"xxs-margin":24,"xs-margin":24,"sm-margin":24,"md-margin":24,"lg-margin":48,"xl-margin":48,"xxl-margin":48}},defaultValue:"default"},Gt=e=>r=>{var t;const n=r.theme,i=xt(Jt,null==n?void 0:n.breakpointScheme);let o;return o=(null===(t=null==n?void 0:n.overrides)||void 0===t?void 0:t.breakpoint)?vt(i,e,n.overrides.breakpoint):i[e],o},Qt={"xxs-min":Gt("xxs-min"),"xxs-max":Gt("xxs-max"),"xs-min":Gt("xs-min"),"xs-max":Gt("xs-max"),"sm-min":Gt("sm-min"),"sm-max":Gt("sm-max"),"md-min":Gt("md-min"),"md-max":Gt("md-max"),"lg-min":Gt("lg-min"),"lg-max":Gt("lg-max"),"xl-min":Gt("xl-min"),"xl-max":Gt("xl-max"),"xxl-min":Gt("xxl-min"),"xxs-column":Gt("xxs-column"),"xs-column":Gt("xs-column"),"sm-column":Gt("sm-column"),"md-column":Gt("md-column"),"lg-column":Gt("lg-column"),"xl-column":Gt("xl-column"),"xxl-column":Gt("xxl-column"),"xxs-gutter":Gt("xxs-gutter"),"xs-gutter":Gt("xs-gutter"),"sm-gutter":Gt("sm-gutter"),"md-gutter":Gt("md-gutter"),"lg-gutter":Gt("lg-gutter"),"xl-gutter":Gt("xl-gutter"),"xxl-gutter":Gt("xxl-gutter"),"xxs-margin":Gt("xxs-margin"),"xs-margin":Gt("xs-margin"),"sm-margin":Gt("sm-margin"),"md-margin":Gt("md-margin"),"lg-margin":Gt("lg-margin"),"xl-margin":Gt("xl-margin"),"xxl-margin":Gt("xxl-margin")},en=e=>("max-width"===e?["xxs","xs","sm","md","lg","xl"]:["xxs","xs","sm","md","lg","xl","xxl"]).reduce(((r,t)=>(r[t]=((e,r)=>{const t=Qt["max-width"===e?`${r}-max`:`${r}-min`];return r=>{const n=t(r);return`@media screen and (${e}: ${n}px)`}})(e,t),r)),{}),rn={MaxWidth:en("max-width"),MinWidth:en("min-width")},tn={collections:{default:{"heading-size-xxl":"3rem","heading-size-xl":"2.5rem","heading-size-lg":"2rem","heading-size-md":"1.625rem","heading-size-sm":"1.375rem","heading-size-xs":"1.125rem","heading-lh-xxl":"3.5rem","heading-lh-xl":"3rem","heading-lh-lg":"2.5rem","heading-lh-md":"2.25rem","heading-lh-sm":"1.75rem","heading-lh-xs":"1.625rem","heading-ls-xxl":"-0.056rem","heading-ls-xl":"-0.032rem","heading-ls-lg":"-0.032rem","heading-ls-md":"0rem","heading-ls-sm":"0rem","heading-ls-xs":"0rem","weight-light":"300","weight-regular":"400","weight-semibold":"600","weight-bold":"700","font-family":"Open Sans","body-size-baseline":"1.125rem","body-size-md":"1rem","body-size-sm":"0.875rem","body-size-xs":"0.75rem","body-lh-baseline":"1.625rem","body-lh-md":"1.5rem","body-lh-sm":"1.625rem","body-lh-xs":"1.25rem","body-ls-baseline":"0rem","body-ls-md":"0.014rem","body-ls-sm":"0.012rem","body-ls-xs":"0.012rem","form-label-size":"1rem","form-description-size":"0.875rem","form-label-lh":"1.5rem","form-description-lh":"1.6rem","form-label-ls":"0.014rem","form-description-ls":"0.012rem"},bookingsg:{"heading-size-xxl":"3rem","heading-size-xl":"2.5rem","heading-size-lg":"2rem","heading-size-md":"1.625rem","heading-size-sm":"1.375rem","heading-size-xs":"1.125rem","heading-lh-xxl":"3.5rem","heading-lh-xl":"3rem","heading-lh-lg":"2.5rem","heading-lh-md":"2.25rem","heading-lh-sm":"1.75rem","heading-lh-xs":"1.75rem","heading-ls-xxl":"-0.056rem","heading-ls-xl":"-0.032rem","heading-ls-lg":"-0.032rem","heading-ls-md":"0rem","heading-ls-sm":"0rem","heading-ls-xs":"0rem","weight-light":"300","weight-regular":"400","weight-semibold":"600","weight-bold":"700","font-family":"Plus Jakarta Sans","body-size-baseline":"1.125rem","body-size-md":"1rem","body-size-sm":"0.875rem","body-size-xs":"0.75rem","body-lh-baseline":"1.75rem","body-lh-md":"1.5rem","body-lh-sm":"1.6rem","body-lh-xs":"1.2rem","body-ls-baseline":"0rem","body-ls-md":"0.014rem","body-ls-sm":"0.012rem","body-ls-xs":"0.012rem","form-label-size":"1rem","form-description-size":"0.875rem","form-label-lh":"1.5rem","form-description-lh":"1.6rem","form-label-ls":"0.014rem","form-description-ls":"0.012rem"},pa:{"heading-size-xxl":"2.5rem","heading-size-xl":"2rem","heading-size-lg":"1.75rem","heading-size-md":"1.5rem","heading-size-sm":"1.25rem","heading-size-xs":"1rem","heading-lh-xxl":"3rem","heading-lh-xl":"2.5rem","heading-lh-lg":"2.25rem","heading-lh-md":"2rem","heading-lh-sm":"2rem","heading-lh-xs":"1.75rem","heading-ls-xxl":"-0.032rem","heading-ls-xl":"-0.032rem","heading-ls-lg":"0rem","heading-ls-md":"0rem","heading-ls-sm":"0rem","heading-ls-xs":"0rem","weight-light":"300","weight-regular":"400","weight-semibold":"600","weight-bold":"700","font-family":"Lato","body-size-baseline":"1rem","body-size-md":"0.875rem","body-size-sm":"0.75rem","body-size-xs":"0.625rem","body-lh-baseline":"1.75rem","body-lh-md":"1.5rem","body-lh-sm":"1.25rem","body-lh-xs":"1.25rem","body-ls-baseline":"0rem","body-ls-md":"0.014rem","body-ls-sm":"0.012rem","body-ls-xs":"0.012rem","form-label-size":"1rem","form-description-size":"0.875rem","form-label-lh":"1.5rem","form-description-lh":"1.6rem","form-label-ls":"0.014rem","form-description-ls":"0.012rem"},a11yplayground:{"heading-size-xxl":"3rem","heading-size-xl":"2.5rem","heading-size-lg":"2rem","heading-size-md":"1.625rem","heading-size-sm":"1.375rem","heading-size-xs":"1.125rem","heading-lh-xxl":"3.5rem","heading-lh-xl":"3rem","heading-lh-lg":"2.5rem","heading-lh-md":"2.25rem","heading-lh-sm":"1.75rem","heading-lh-xs":"1.625rem","heading-ls-xxl":"-0.056rem","heading-ls-xl":"-0.032rem","heading-ls-lg":"-0.032rem","heading-ls-md":"0rem","heading-ls-sm":"0rem","heading-ls-xs":"0rem","weight-light":"300","weight-regular":"400","weight-semibold":"600","weight-bold":"700","font-family":"Atkinson Hyperlegible Next","body-size-baseline":"1.125rem","body-size-md":"1rem","body-size-sm":"0.875rem","body-size-xs":"0.75rem","body-lh-baseline":"1.625rem","body-lh-md":"1.5rem","body-lh-sm":"1.625rem","body-lh-xs":"1.25rem","body-ls-baseline":"0rem","body-ls-md":"0.014rem","body-ls-sm":"0.012rem","body-ls-xs":"0.012rem","form-label-size":"1.125rem","form-description-size":"1rem","form-label-lh":"1.5rem","form-description-lh":"1.625rem","form-label-ls":"0rem","form-description-ls":"0.00875rem"},supportgowhere:{"heading-size-xxl":"3rem","heading-size-xl":"2.5rem","heading-size-lg":"2rem","heading-size-md":"1.625rem","heading-size-sm":"1.375rem","heading-size-xs":"1.125rem","heading-lh-xxl":"3.5rem","heading-lh-xl":"3rem","heading-lh-lg":"2.5rem","heading-lh-md":"2.25rem","heading-lh-sm":"1.75rem","heading-lh-xs":"1.625rem","heading-ls-xxl":"-0.056rem","heading-ls-xl":"-0.032rem","heading-ls-lg":"-0.032rem","heading-ls-md":"0rem","heading-ls-sm":"0rem","heading-ls-xs":"0rem","weight-light":"300","weight-regular":"400","weight-semibold":"600","weight-bold":"700","font-family":"Libre Franklin","body-size-baseline":"1.125rem","body-size-md":"1rem","body-size-sm":"0.875rem","body-size-xs":"0.75rem","body-lh-baseline":"1.625rem","body-lh-md":"1.5rem","body-lh-sm":"1.625rem","body-lh-xs":"1.25rem","body-ls-baseline":"0rem","body-ls-md":"0.014rem","body-ls-sm":"0.012rem","body-ls-xs":"0.012rem","form-label-size":"1rem","form-description-size":"0.875rem","form-label-lh":"1.5rem","form-description-lh":"1.6rem","form-label-ls":"0.014rem","form-description-ls":"0.012rem"}},defaultValue:"default"},nn=e=>r=>{var t;const n=r.theme,i=xt(tn,null==n?void 0:n.fontScheme);return(null===(t=null==n?void 0:n.overrides)||void 0===t?void 0:t.fontSpec)?vt(i,e,n.overrides.fontSpec):i[e]},on={"heading-size-xxl":nn("heading-size-xxl"),"heading-size-xl":nn("heading-size-xl"),"heading-size-lg":nn("heading-size-lg"),"heading-size-md":nn("heading-size-md"),"heading-size-sm":nn("heading-size-sm"),"heading-size-xs":nn("heading-size-xs"),"heading-lh-xxl":nn("heading-lh-xxl"),"heading-lh-xl":nn("heading-lh-xl"),"heading-lh-lg":nn("heading-lh-lg"),"heading-lh-md":nn("heading-lh-md"),"heading-lh-sm":nn("heading-lh-sm"),"heading-lh-xs":nn("heading-lh-xs"),"heading-ls-xxl":nn("heading-ls-xxl"),"heading-ls-xl":nn("heading-ls-xl"),"heading-ls-lg":nn("heading-ls-lg"),"heading-ls-md":nn("heading-ls-md"),"heading-ls-sm":nn("heading-ls-sm"),"heading-ls-xs":nn("heading-ls-xs"),"weight-light":nn("weight-light"),"weight-regular":nn("weight-regular"),"weight-semibold":nn("weight-semibold"),"weight-bold":nn("weight-bold"),"font-family":nn("font-family"),"body-size-baseline":nn("body-size-baseline"),"body-size-md":nn("body-size-md"),"body-size-sm":nn("body-size-sm"),"body-size-xs":nn("body-size-xs"),"body-lh-baseline":nn("body-lh-baseline"),"body-lh-md":nn("body-lh-md"),"body-lh-sm":nn("body-lh-sm"),"body-lh-xs":nn("body-lh-xs"),"body-ls-baseline":nn("body-ls-baseline"),"body-ls-md":nn("body-ls-md"),"body-ls-sm":nn("body-ls-sm"),"body-ls-xs":nn("body-ls-xs"),"form-label-size":nn("form-label-size"),"form-description-size":nn("form-description-size"),"form-label-lh":nn("form-label-lh"),"form-description-lh":nn("form-description-lh"),"form-label-ls":nn("form-label-ls"),"form-description-ls":nn("form-description-ls")},sn=(e,r,t,n,i)=>{const{disableLigatures:o}=i||{};return v`
        font-family: ${nn("font-family")};
        font-size: ${nn(e)};
        font-weight: ${nn(r)};
        line-height: ${nn(t)};
        letter-spacing: ${nn(n)};

        font-variant: ${o?"no-common-ligatures":"normal"};
    `},an=(e={})=>({"heading-xxl-light":sn("heading-size-xxl","weight-light","heading-lh-xxl","heading-ls-xxl",e),"heading-xxl-regular":sn("heading-size-xxl","weight-regular","heading-lh-xxl","heading-ls-xxl",e),"heading-xxl-semibold":sn("heading-size-xxl","weight-semibold","heading-lh-xxl","heading-ls-xxl",e),"heading-xxl-bold":sn("heading-size-xxl","weight-bold","heading-lh-xxl","heading-ls-xxl",e),"heading-xl-light":sn("heading-size-xl","weight-light","heading-lh-xl","heading-ls-xl",e),"heading-xl-regular":sn("heading-size-xl","weight-regular","heading-lh-xl","heading-ls-xl",e),"heading-xl-semibold":sn("heading-size-xl","weight-semibold","heading-lh-xl","heading-ls-xl",e),"heading-xl-bold":sn("heading-size-xl","weight-bold","heading-lh-xl","heading-ls-xl",e),"heading-lg-light":sn("heading-size-lg","weight-light","heading-lh-lg","heading-ls-lg",e),"heading-lg-regular":sn("heading-size-lg","weight-regular","heading-lh-lg","heading-ls-lg",e),"heading-lg-semibold":sn("heading-size-lg","weight-semibold","heading-lh-lg","heading-ls-lg",e),"heading-lg-bold":sn("heading-size-lg","weight-bold","heading-lh-lg","heading-ls-lg",e),"heading-md-light":sn("heading-size-md","weight-light","heading-lh-md","heading-ls-md",e),"heading-md-regular":sn("heading-size-md","weight-regular","heading-lh-md","heading-ls-md",e),"heading-md-semibold":sn("heading-size-md","weight-semibold","heading-lh-md","heading-ls-md",e),"heading-md-bold":sn("heading-size-md","weight-bold","heading-lh-md","heading-ls-md",e),"heading-sm-light":sn("heading-size-sm","weight-light","heading-lh-sm","heading-ls-sm",e),"heading-sm-regular":sn("heading-size-sm","weight-regular","heading-lh-sm","heading-ls-sm",e),"heading-sm-semibold":sn("heading-size-sm","weight-semibold","heading-lh-sm","heading-ls-sm",e),"heading-sm-bold":sn("heading-size-sm","weight-bold","heading-lh-sm","heading-ls-sm",e),"heading-xs-light":sn("heading-size-xs","weight-light","heading-lh-xs","heading-ls-xs",e),"heading-xs-regular":sn("heading-size-xs","weight-regular","heading-lh-xs","heading-ls-xs",e),"heading-xs-semibold":sn("heading-size-xs","weight-semibold","heading-lh-xs","heading-ls-xs",e),"heading-xs-bold":sn("heading-size-xs","weight-bold","heading-lh-xs","heading-ls-xs",e),"body-baseline-light":sn("body-size-baseline","weight-light","body-lh-baseline","body-ls-baseline",e),"body-baseline-regular":sn("body-size-baseline","weight-regular","body-lh-baseline","body-ls-baseline",e),"body-baseline-semibold":sn("body-size-baseline","weight-semibold","body-lh-baseline","body-ls-baseline",e),"body-baseline-bold":sn("body-size-baseline","weight-bold","body-lh-baseline","body-ls-baseline",e),"body-md-light":sn("body-size-md","weight-light","body-lh-md","body-ls-md",e),"body-md-regular":sn("body-size-md","weight-regular","body-lh-md","body-ls-md",e),"body-md-semibold":sn("body-size-md","weight-semibold","body-lh-md","body-ls-md",e),"body-md-bold":sn("body-size-md","weight-bold","body-lh-md","body-ls-md",e),"body-sm-light":sn("body-size-sm","weight-light","body-lh-sm","body-ls-sm",e),"body-sm-regular":sn("body-size-sm","weight-regular","body-lh-sm","body-ls-sm",e),"body-sm-semibold":sn("body-size-sm","weight-semibold","body-lh-sm","body-ls-sm",e),"body-sm-bold":sn("body-size-sm","weight-bold","body-lh-sm","body-ls-sm",e),"body-xs-light":sn("body-size-xs","weight-light","body-lh-xs","body-ls-xs",e),"body-xs-regular":sn("body-size-xs","weight-regular","body-lh-xs","body-ls-xs",e),"body-xs-semibold":sn("body-size-xs","weight-semibold","body-lh-xs","body-ls-xs",e),"body-xs-bold":sn("body-size-xs","weight-bold","body-lh-xs","body-ls-xs",e),"form-label":sn("form-label-size","weight-semibold","form-label-lh","form-label-ls",e),"form-description":sn("form-description-size","weight-regular","form-description-lh","form-description-ls",e)}),ln=an({disableLigatures:!0}),dn={collections:{default:an(),bookingsg:ln,pa:an({disableLigatures:!0}),a11yplayground:an({disableLigatures:!0}),supportgowhere:an({disableLigatures:!0})},defaultValue:"default"},cn=e=>r=>{var t;const n=r.theme,i=xt(dn,null==n?void 0:n.fontScheme),o=(null===(t=null==n?void 0:n.overrides)||void 0===t?void 0:t.font)?vt(i,e,n.overrides.font):i[e];return"function"==typeof o?o(r):o},un={"heading-xxl-light":cn("heading-xxl-light"),"heading-xxl-regular":cn("heading-xxl-regular"),"heading-xxl-semibold":cn("heading-xxl-semibold"),"heading-xxl-bold":cn("heading-xxl-bold"),"heading-xl-light":cn("heading-xl-light"),"heading-xl-regular":cn("heading-xl-regular"),"heading-xl-semibold":cn("heading-xl-semibold"),"heading-xl-bold":cn("heading-xl-bold"),"heading-lg-light":cn("heading-lg-light"),"heading-lg-regular":cn("heading-lg-regular"),"heading-lg-semibold":cn("heading-lg-semibold"),"heading-lg-bold":cn("heading-lg-bold"),"heading-md-light":cn("heading-md-light"),"heading-md-regular":cn("heading-md-regular"),"heading-md-semibold":cn("heading-md-semibold"),"heading-md-bold":cn("heading-md-bold"),"heading-sm-light":cn("heading-sm-light"),"heading-sm-regular":cn("heading-sm-regular"),"heading-sm-semibold":cn("heading-sm-semibold"),"heading-sm-bold":cn("heading-sm-bold"),"heading-xs-light":cn("heading-xs-light"),"heading-xs-regular":cn("heading-xs-regular"),"heading-xs-semibold":cn("heading-xs-semibold"),"heading-xs-bold":cn("heading-xs-bold"),"body-baseline-light":cn("body-baseline-light"),"body-baseline-regular":cn("body-baseline-regular"),"body-baseline-semibold":cn("body-baseline-semibold"),"body-baseline-bold":cn("body-baseline-bold"),"body-md-light":cn("body-md-light"),"body-md-regular":cn("body-md-regular"),"body-md-semibold":cn("body-md-semibold"),"body-md-bold":cn("body-md-bold"),"body-sm-light":cn("body-sm-light"),"body-sm-regular":cn("body-sm-regular"),"body-sm-semibold":cn("body-sm-semibold"),"body-sm-bold":cn("body-sm-bold"),"body-xs-light":cn("body-xs-light"),"body-xs-regular":cn("body-xs-regular"),"body-xs-semibold":cn("body-xs-semibold"),"body-xs-bold":cn("body-xs-bold"),"form-label":cn("form-label"),"form-description":cn("form-description")},gn={collections:{default:{"duration-150":"150ms","duration-250":"250ms","duration-350":"350ms","duration-500":"500ms","duration-800":"800ms","duration-1000":"1000ms","ease-default":"cubic-bezier(0.45, 0.05, 0.55, 0.95)","ease-standard":"cubic-bezier(0.86, 0, 0.07, 1)","ease-entrance":"cubic-bezier(0.18, 0.13, 0, 1)","ease-exit":"cubic-bezier(1, 0, 0.8, 0.85)"}},defaultValue:"default"},hn=e=>r=>{var t;const n=r.theme,i=xt(gn,null==n?void 0:n.motionScheme);return(null===(t=null==n?void 0:n.overrides)||void 0===t?void 0:t.motion)?vt(i,e,n.overrides.motion):i[e]},bn={"duration-150":hn("duration-150"),"duration-250":hn("duration-250"),"duration-350":hn("duration-350"),"duration-500":hn("duration-500"),"duration-800":hn("duration-800"),"duration-1000":hn("duration-1000"),"ease-default":hn("ease-default"),"ease-standard":hn("ease-standard"),"ease-entrance":hn("ease-entrance"),"ease-exit":hn("ease-exit")},mn={collections:{default:{none:0,xs:2,sm:4,md:8,lg:12,full:9999}},defaultValue:"default"},pn=e=>r=>{var t;const n=r.theme,i=xt(mn,null==n?void 0:n.radiusScheme);return(null===(t=null==n?void 0:n.overrides)||void 0===t?void 0:t.radius)?`${vt(i,e,n.overrides.radius)}px`:`${i[e]}px`},fn={none:pn("none"),xs:pn("xs"),sm:pn("sm"),md:pn("md"),lg:pn("lg"),full:pn("full")},yn=(e,r,t)=>n=>{const i=Vt(r)(n)||Lt(r)(n);return`${e} rgba(from ${i} r g b / ${100*t}%)`},vn={collections:{default:{"xs-subtle":yn("0 0 4px 1px","neutral-50",.24),"xs-strong":yn("0 0 4px 1px","neutral-50",.5),"xs-focus-strong":yn("0 0 4px 1px","border-focus",.5),"xs-error-strong":yn("0 0 4px 1px","border-error",.5),"sm-subtle":yn("0 2px 4px 0","neutral-50",.24),"sm-strong":yn("0 2px 4px 0","neutral-50",.5),"md-subtle":yn("0 2px 8px 0","neutral-50",.24),"md-strong":yn("0 2px 8px 0","neutral-50",.5),"lg-subtle":yn("0 2px 12px 1px","neutral-50",.24),"lg-strong":yn("0 2px 12px 1px","neutral-50",.5)}},defaultValue:"default"},xn=e=>r=>{var t;const n=r.theme,i=xt(vn,null==n?void 0:n.shadowScheme),o=(null===(t=null==n?void 0:n.overrides)||void 0===t?void 0:t.shadow)?vt(i,e,n.overrides.shadow):i[e];return"function"==typeof o?o(r):o},wn={"xs-subtle":xn("xs-subtle"),"xs-strong":xn("xs-strong"),"xs-focus-strong":xn("xs-focus-strong"),"xs-error-strong":xn("xs-error-strong"),"sm-subtle":xn("sm-subtle"),"sm-strong":xn("sm-strong"),"md-subtle":xn("md-subtle"),"md-strong":xn("md-strong"),"lg-subtle":xn("lg-subtle"),"lg-strong":xn("lg-strong")},Fn={collections:{default:{"spacing-0":0,"spacing-4":4,"spacing-8":8,"spacing-12":12,"spacing-16":16,"spacing-20":20,"spacing-24":24,"spacing-32":32,"spacing-40":40,"spacing-48":48,"spacing-64":64,"spacing-72":72,"layout-xs":8,"layout-sm":16,"layout-md":24,"layout-lg":32,"layout-xl":48,"layout-xxl":64,"layout-xxxl":128}},defaultValue:"default"},$n=e=>r=>{var t;const n=r.theme,i=xt(Fn,null==n?void 0:n.spacingScheme);return(null===(t=null==n?void 0:n.overrides)||void 0===t?void 0:t.spacing)?`${vt(i,e,n.overrides.spacing)}px`:`${i[e]}px`},En={"spacing-0":$n("spacing-0"),"spacing-4":$n("spacing-4"),"spacing-8":$n("spacing-8"),"spacing-12":$n("spacing-12"),"spacing-16":$n("spacing-16"),"spacing-20":$n("spacing-20"),"spacing-24":$n("spacing-24"),"spacing-32":$n("spacing-32"),"spacing-40":$n("spacing-40"),"spacing-48":$n("spacing-48"),"spacing-64":$n("spacing-64"),"spacing-72":$n("spacing-72"),"layout-xs":$n("layout-xs"),"layout-sm":$n("layout-sm"),"layout-md":$n("layout-md"),"layout-lg":$n("layout-lg"),"layout-xl":$n("layout-xl"),"layout-xxl":$n("layout-xxl"),"layout-xxxl":$n("layout-xxxl")},Dn=(e,r)=>Object.assign(Object.assign({},e),{colourMode:r}),Cn=Object.assign(Object.assign({},Kt),{Primitive:jt}),Bn=Object.assign(Object.assign({},un),{Spec:on}),Sn=bn,kn=Object.assign(Object.assign({},$t),{Util:qt}),An=En,zn=fn,On=wn,Mn=Qt,_n=rn,Tn={colourScheme:"lifesg",fontScheme:"default",motionScheme:"default",borderScheme:"default",spacingScheme:"default",radiusScheme:"default",shadowScheme:"default",breakpointScheme:"default",resourceScheme:"lifesg",_v2:{colorScheme:"base",textStyleScheme:"base",designTokenScheme:"base",resourceScheme:"base"}},Ln={colourScheme:"bookingsg",fontScheme:"bookingsg",motionScheme:"default",borderScheme:"default",spacingScheme:"default",radiusScheme:"default",shadowScheme:"default",breakpointScheme:"default",resourceScheme:"bookingsg",_v2:{colorScheme:"bookingsg",textStyleScheme:"base",designTokenScheme:"base",resourceScheme:"bookingsg"}},jn={colourScheme:"ccube",fontScheme:"default",motionScheme:"default",borderScheme:"default",spacingScheme:"default",radiusScheme:"default",shadowScheme:"default",breakpointScheme:"default",resourceScheme:"ccube",_v2:{colorScheme:"ccube",textStyleScheme:"base",designTokenScheme:"base",resourceScheme:"ccube"}},Rn={colourScheme:"mylegacy",fontScheme:"default",motionScheme:"default",borderScheme:"default",spacingScheme:"default",radiusScheme:"default",shadowScheme:"default",breakpointScheme:"default",resourceScheme:"mylegacy",_v2:{colorScheme:"mylegacy",textStyleScheme:"base",designTokenScheme:"base",resourceScheme:"mylegacy"}},Pn={colourScheme:"rbs",fontScheme:"default",motionScheme:"default",borderScheme:"default",spacingScheme:"default",radiusScheme:"default",shadowScheme:"default",breakpointScheme:"default",resourceScheme:"rbs",_v2:{colorScheme:"rbs",textStyleScheme:"base",designTokenScheme:"rbs",resourceScheme:"rbs"}},Yn={colourScheme:"oneservice",fontScheme:"default",motionScheme:"default",borderScheme:"default",spacingScheme:"default",radiusScheme:"default",shadowScheme:"default",breakpointScheme:"default",resourceScheme:"oneservice"},In={colourScheme:"pa",fontScheme:"pa",motionScheme:"default",borderScheme:"default",spacingScheme:"default",radiusScheme:"default",shadowScheme:"default",breakpointScheme:"default",resourceScheme:"pa",componentScheme:"pa"},Hn={colourScheme:"a11yplayground",fontScheme:"a11yplayground",motionScheme:"default",borderScheme:"default",spacingScheme:"default",radiusScheme:"default",shadowScheme:"default",breakpointScheme:"default",resourceScheme:"a11yplayground",componentScheme:"a11yplayground"},Wn={colourScheme:"supportgowhere",fontScheme:"supportgowhere",motionScheme:"default",borderScheme:"default",spacingScheme:"default",radiusScheme:"default",shadowScheme:"default",breakpointScheme:"default",resourceScheme:"supportgowhere",componentScheme:"default"};Object.assign(Object.assign({},Tn),{light:Dn(Tn,"light"),dark:Dn(Tn,"dark")}),Object.assign(Object.assign({},Ln),{light:Dn(Ln,"light"),dark:Dn(Ln,"dark")}),Object.assign(Object.assign({},jn),{light:Dn(jn,"light"),dark:Dn(jn,"dark")}),Object.assign(Object.assign({},Rn),{light:Dn(Rn,"light"),dark:Dn(Rn,"dark")}),Object.assign(Object.assign({},Pn),{light:Dn(Pn,"light"),dark:Dn(Pn,"dark")}),Object.assign(Object.assign({},Yn),{light:Dn(Yn,"light"),dark:Dn(Yn,"dark")}),Object.assign(Object.assign({},In),{light:Dn(In,"light"),dark:Dn(In,"dark")}),Object.assign(Object.assign({},Hn),{light:Dn(Hn,"light"),dark:Dn(Hn,"dark")}),Object.assign(Object.assign({},Wn),{light:Dn(Wn,"light"),dark:Dn(Wn,"dark")});const Nn=e=>v`
    display: -webkit-box;
    -webkit-line-clamp: ${e};
    -webkit-box-orient: vertical;
    overflow: hidden;
`,Vn=(e,r,t=!1)=>v`
        ${Bn[`${e}-${r}`]}
        ${t?"margin-bottom: 1.05em;":"margin-bottom: 0;"}
    `,Kn=e=>{if(e)return v`
            ${Nn(e)}
        `},Un=(e,r,t,n,i)=>v`
    ${Vn(e,r||"regular",n)}
    ${((e=!1,r=!1,t)=>r?v`
            display: block;
            ${Kn(t)}
        `:e?v`
            display: inline;
        `:v`
            display: block;
            ${Kn(t)}
        `)(t,n,i)}
    color: ${Cn.text};
`,Zn=y.div`
    ${e=>Un(e.$textStyle,e.$weight,e.$inline,e.$paragraph,e.$maxLines)}
`,Xn=y.a`
    ${e=>v`
        ${Vn(e.$textStyle,e.$weight||"regular")}
        color: ${Cn.hyperlink};
        text-decoration: none;

        &:hover,
        &:active,
        &:focus {
            color: ${Cn["text-hover"]};
        }
    `}
`,qn=y(f)`
    height: 1lh;
    width: 1em;
    margin-left: 0.4em;
    vertical-align: middle;
`;var Jn;function Gn(e,r){return Gn=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,r){return e.__proto__=r,e},Gn(e,r)}function Qn(e){return e&&e.stopPropagation&&e.stopPropagation(),e&&e.preventDefault&&e.preventDefault(),!1}function ei(e){return null==e?[]:Array.isArray(e)?e.slice():[e]}function ri(e){return null!==e&&1===e.length?e[0]:e.slice()}function ti(e){Object.keys(e).forEach((r=>{"undefined"!=typeof document&&document.addEventListener(r,e[r],!1)}))}function ni(e,r){return ii(function(e,r){let t=e;return t<=r.min&&(t=r.min),t>=r.max&&(t=r.max),t}(e,r),r)}function ii(e,r){const t=(e-r.min)%r.step;let n=e-t;return 2*Math.abs(t)>=r.step&&(n+=t>0?r.step:-r.step),parseFloat(n.toFixed(5))}!function(t){const n=(r,t,n)=>{const o=(n,i)=>{var{weight:o,inline:s,paragraph:a,maxLines:l}=n,d=K(n,["weight","inline","paragraph","maxLines"]);return e(Zn,Object.assign({ref:i,as:s?"span":r,$textStyle:t,$weight:o,$inline:s,$paragraph:a,$maxLines:l},d))};return o.displayName=`Typography.${n}`,i.forwardRef(o)};t.HeadingXXL=n("h1","heading-xxl","HeadingXXL"),t.HeadingXL=n("h2","heading-xl","HeadingXL"),t.HeadingLG=n("h3","heading-lg","HeadingLG"),t.HeadingMD=n("h4","heading-md","HeadingMD"),t.HeadingSM=n("h5","heading-sm","HeadingSM"),t.HeadingXS=n("h6","heading-xs","HeadingXS");const o=(r,t)=>{const n=(t,n)=>{var{weight:i,inline:o,paragraph:s,maxLines:a}=t,l=K(t,["weight","inline","paragraph","maxLines"]);return e(Zn,Object.assign({ref:n,as:o?"span":"p",$textStyle:r,$weight:i,$inline:o,$paragraph:s,$maxLines:a},l))};return n.displayName=`Typography.${t}`,i.forwardRef(n)};t.BodyBL=o("body-baseline","BodyBL"),t.BodyMD=o("body-md","BodyMD"),t.BodySM=o("body-sm","BodySM"),t.BodyXS=o("body-xs","BodyXS");const s=(t,n)=>{const o=(n,i)=>{var{weight:o,children:s,external:a}=n,l=K(n,["weight","children","external"]);return r(Xn,Object.assign({ref:i,$textStyle:t,$weight:o},l,{children:[s,a&&e(qn,{})]}))};return o.displayName=`Typography.${n}`,i.forwardRef(o)};t.LinkBL=s("body-baseline","LinkBL"),t.LinkMD=s("body-md","LinkMD"),t.LinkSM=s("body-sm","LinkSM"),t.LinkXS=s("body-xs","LinkXS")}(Jn||(Jn={}));let oi=function(e){function r(r){var t;(t=e.call(this,r)||this).onKeyUp=()=>{t.onEnd()},t.onMouseUp=()=>{t.onEnd(t.getMouseEventMap())},t.onTouchEnd=e=>{e.preventDefault(),t.onEnd(t.getTouchEventMap())},t.onBlur=()=>{t.setState({index:-1},t.onEnd(t.getKeyDownEventMap()))},t.onMouseMove=e=>{t.setState({pending:!0});const r=t.getMousePosition(e),n=t.getDiffPosition(r[0]),i=t.getValueFromPosition(n);t.move(i)},t.onTouchMove=e=>{if(e.touches.length>1)return;t.setState({pending:!0});const r=t.getTouchPosition(e);if(void 0===t.isScrolling){const e=r[0]-t.startPosition[0],n=r[1]-t.startPosition[1];t.isScrolling=Math.abs(n)>Math.abs(e)}if(t.isScrolling)return void t.setState({index:-1});const n=t.getDiffPosition(r[0]),i=t.getValueFromPosition(n);t.move(i)},t.onKeyDown=e=>{if(!(e.ctrlKey||e.shiftKey||e.altKey||e.metaKey))switch(t.setState({pending:!0}),e.key){case"ArrowLeft":case"ArrowDown":case"Left":case"Down":e.preventDefault(),t.moveDownByStep();break;case"ArrowRight":case"ArrowUp":case"Right":case"Up":e.preventDefault(),t.moveUpByStep();break;case"Home":e.preventDefault(),t.move(t.props.min);break;case"End":e.preventDefault(),t.move(t.props.max);break;case"PageDown":e.preventDefault(),t.moveDownByStep(t.props.pageFn(t.props.step));break;case"PageUp":e.preventDefault(),t.moveUpByStep(t.props.pageFn(t.props.step))}},t.onSliderMouseDown=e=>{if(!t.props.disabled&&2!==e.button){if(t.setState({pending:!0}),!t.props.snapDragDisabled){const r=t.getMousePosition(e);t.forceValueFromPosition(r[0],(e=>{t.start(e,r[0]),ti(t.getMouseEventMap())}))}Qn(e)}},t.onSliderClick=e=>{if(!t.props.disabled&&t.props.onSliderClick&&!t.hasMoved){const r=t.getMousePosition(e),n=ni(t.calcValue(t.calcOffsetFromPosition(r[0])),t.props);t.props.onSliderClick(n)}},t.createOnKeyDown=e=>r=>{t.props.disabled||(t.start(e),ti(t.getKeyDownEventMap()),Qn(r))},t.createOnMouseDown=e=>r=>{if(t.props.disabled||2===r.button)return;t.setState({pending:!0});const n=t.getMousePosition(r);t.start(e,n[0]),ti(t.getMouseEventMap()),Qn(r)},t.createOnTouchStart=e=>r=>{if(t.props.disabled||r.touches.length>1)return;t.setState({pending:!0});const n=t.getTouchPosition(r);t.startPosition=n,t.isScrolling=void 0,t.start(e,n[0]),ti(t.getTouchEventMap()),function(e){e.stopPropagation&&e.stopPropagation()}(r)},t.handleResize=()=>{const e=window.setTimeout((()=>{t.pendingResizeTimeouts.shift(),t.resize()}),0);t.pendingResizeTimeouts.push(e)},t.renderThumb=(e,r)=>{const n=t.props.thumbClassName+" "+t.props.thumbClassName+"-"+r+" "+(t.state.index===r?t.props.thumbActiveClassName:""),i={ref:e=>{t["thumb"+r]=e},key:t.props.thumbClassName+"-"+r,className:n,style:e,onMouseDown:t.createOnMouseDown(r),onTouchStart:t.createOnTouchStart(r),onFocus:t.createOnKeyDown(r),tabIndex:0,role:"slider","aria-orientation":t.props.orientation,"aria-valuenow":t.state.value[r],"aria-valuemin":t.props.min,"aria-valuemax":t.props.max,"aria-label":Array.isArray(t.props.ariaLabel)?t.props.ariaLabel[r]:t.props.ariaLabel,"aria-labelledby":Array.isArray(t.props.ariaLabelledby)?t.props.ariaLabelledby[r]:t.props.ariaLabelledby,"aria-disabled":t.props.disabled},o={index:r,value:ri(t.state.value),valueNow:t.state.value[r]};return t.props.ariaValuetext&&(i["aria-valuetext"]="string"==typeof t.props.ariaValuetext?t.props.ariaValuetext:t.props.ariaValuetext(o)),t.props.renderThumb(i,o)},t.renderTrack=(e,r,n)=>{const i={key:t.props.trackClassName+"-"+e,className:t.props.trackClassName+" "+t.props.trackClassName+"-"+e,style:t.buildTrackStyle(r,t.state.upperBound-n)},o={index:e,value:ri(t.state.value)};return t.props.renderTrack(i,o)};let n=ei(r.value);n.length||(n=ei(r.defaultValue)),t.pendingResizeTimeouts=[];const o=[];for(let e=0;e<n.length;e+=1)n[e]=ni(n[e],r),o.push(e);return t.resizeObserver=null,t.resizeElementRef=i.createRef(),t.state={index:-1,upperBound:0,sliderLength:0,value:n,zIndices:o},t}!function(e,r){e.prototype=Object.create(r.prototype),e.prototype.constructor=e,Gn(e,r)}(r,e);var t=r.prototype;return t.componentDidMount=function(){"undefined"!=typeof window&&(this.resizeObserver=new ResizeObserver(this.handleResize),this.resizeObserver.observe(this.resizeElementRef.current),this.resize())},r.getDerivedStateFromProps=function(e,r){const t=ei(e.value);return t.length?r.pending?null:{value:t.map((r=>ni(r,e)))}:null},t.componentDidUpdate=function(){0===this.state.upperBound&&this.resize()},t.componentWillUnmount=function(){this.clearPendingResizeTimeouts(),this.resizeObserver&&this.resizeObserver.disconnect()},t.onEnd=function(e){e&&function(e){Object.keys(e).forEach((r=>{"undefined"!=typeof document&&document.removeEventListener(r,e[r],!1)}))}(e),this.hasMoved&&this.fireChangeEvent("onAfterChange"),this.setState({pending:!1}),this.hasMoved=!1},t.getValue=function(){return ri(this.state.value)},t.getClosestIndex=function(e){let r=Number.MAX_VALUE,t=-1;const{value:n}=this.state,i=n.length;for(let o=0;o<i;o+=1){const i=this.calcOffset(n[o]),s=Math.abs(e-i);s<r&&(r=s,t=o)}return t},t.getMousePosition=function(e){return[e["page"+this.axisKey()],e["page"+this.orthogonalAxisKey()]]},t.getTouchPosition=function(e){const r=e.touches[0];return[r["page"+this.axisKey()],r["page"+this.orthogonalAxisKey()]]},t.getKeyDownEventMap=function(){return{keydown:this.onKeyDown,keyup:this.onKeyUp,focusout:this.onBlur}},t.getMouseEventMap=function(){return{mousemove:this.onMouseMove,mouseup:this.onMouseUp}},t.getTouchEventMap=function(){return{touchmove:this.onTouchMove,touchend:this.onTouchEnd}},t.getValueFromPosition=function(e){const r=e/(this.state.sliderLength-this.state.thumbSize)*(this.props.max-this.props.min);return ni(this.state.startValue+r,this.props)},t.getDiffPosition=function(e){let r=e-this.state.startPosition;return this.props.invert&&(r*=-1),r},t.resize=function(){const{slider:e,thumb0:r}=this;if(!e||!r)return;const t=this.sizeKey(),n=e.getBoundingClientRect(),i=e[t],o=n[this.posMaxKey()],s=n[this.posMinKey()],a=r.getBoundingClientRect()[t.replace("client","").toLowerCase()],l=i-a,d=Math.abs(o-s);this.state.upperBound===l&&this.state.sliderLength===d&&this.state.thumbSize===a||this.setState({upperBound:l,sliderLength:d,thumbSize:a})},t.calcOffset=function(e){const r=this.props.max-this.props.min;return 0===r?0:(e-this.props.min)/r*this.state.upperBound},t.calcValue=function(e){return e/this.state.upperBound*(this.props.max-this.props.min)+this.props.min},t.calcOffsetFromPosition=function(e){const{slider:r}=this,t=r.getBoundingClientRect(),n=t[this.posMaxKey()],i=t[this.posMinKey()];let o=e-(window["page"+this.axisKey()+"Offset"]+(this.props.invert?n:i));return this.props.invert&&(o=this.state.sliderLength-o),o-=this.state.thumbSize/2,o},t.forceValueFromPosition=function(e,r){const t=this.calcOffsetFromPosition(e),n=this.getClosestIndex(t),i=ni(this.calcValue(t),this.props),o=this.state.value.slice();o[n]=i;for(let e=0;e<o.length-1;e+=1)if(o[e+1]-o[e]<this.props.minDistance)return;this.fireChangeEvent("onBeforeChange"),this.hasMoved=!0,this.setState({value:o},(()=>{r(n),this.fireChangeEvent("onChange")}))},t.clearPendingResizeTimeouts=function(){do{const e=this.pendingResizeTimeouts.shift();clearTimeout(e)}while(this.pendingResizeTimeouts.length)},t.start=function(e,r){const t=this["thumb"+e];t&&t.focus();const{zIndices:n}=this.state;n.splice(n.indexOf(e),1),n.push(e),this.setState((t=>({startValue:t.value[e],startPosition:void 0!==r?r:t.startPosition,index:e,zIndices:n})))},t.moveUpByStep=function(e){void 0===e&&(e=this.props.step);const r=this.state.value[this.state.index],t=ni(this.props.invert&&"horizontal"===this.props.orientation?r-e:r+e,this.props);this.move(Math.min(t,this.props.max))},t.moveDownByStep=function(e){void 0===e&&(e=this.props.step);const r=this.state.value[this.state.index],t=ni(this.props.invert&&"horizontal"===this.props.orientation?r+e:r-e,this.props);this.move(Math.max(t,this.props.min))},t.move=function(e){const r=this.state.value.slice(),{index:t}=this.state,{length:n}=r,i=r[t];if(e===i)return;this.hasMoved||this.fireChangeEvent("onBeforeChange"),this.hasMoved=!0;const{pearling:o,max:s,min:a,minDistance:l}=this.props;if(!o){if(t>0){const n=r[t-1];e<n+l&&(e=n+l)}if(t<n-1){const n=r[t+1];e>n-l&&(e=n-l)}}r[t]=e,o&&n>1&&(e>i?(this.pushSucceeding(r,l,t),function(e,r,t,n){for(let i=0;i<e;i+=1){const o=n-i*t;r[e-1-i]>o&&(r[e-1-i]=o)}}(n,r,l,s)):e<i&&(this.pushPreceding(r,l,t),function(e,r,t,n){for(let i=0;i<e;i+=1){const e=n+i*t;r[i]<e&&(r[i]=e)}}(n,r,l,a))),this.setState({value:r},this.fireChangeEvent.bind(this,"onChange"))},t.pushSucceeding=function(e,r,t){let n,i;for(n=t,i=e[n]+r;null!==e[n+1]&&i>e[n+1];n+=1,i=e[n]+r)e[n+1]=ii(i,this.props)},t.pushPreceding=function(e,r,t){for(let n=t,i=e[n]-r;null!==e[n-1]&&i<e[n-1];n-=1,i=e[n]-r)e[n-1]=ii(i,this.props)},t.axisKey=function(){return"vertical"===this.props.orientation?"Y":"X"},t.orthogonalAxisKey=function(){return"vertical"===this.props.orientation?"X":"Y"},t.posMinKey=function(){return"vertical"===this.props.orientation?this.props.invert?"bottom":"top":this.props.invert?"right":"left"},t.posMaxKey=function(){return"vertical"===this.props.orientation?this.props.invert?"top":"bottom":this.props.invert?"left":"right"},t.sizeKey=function(){return"vertical"===this.props.orientation?"clientHeight":"clientWidth"},t.fireChangeEvent=function(e){this.props[e]&&this.props[e](ri(this.state.value),this.state.index)},t.buildThumbStyle=function(e,r){const t={position:"absolute",touchAction:"none",willChange:this.state.index>=0?this.posMinKey():void 0,zIndex:this.state.zIndices.indexOf(r)+1};return t[this.posMinKey()]=e+"px",t},t.buildTrackStyle=function(e,r){const t={position:"absolute",willChange:this.state.index>=0?this.posMinKey()+","+this.posMaxKey():void 0};return t[this.posMinKey()]=e,t[this.posMaxKey()]=r,t},t.buildMarkStyle=function(e){var r;return(r={position:"absolute"})[this.posMinKey()]=e,r},t.renderThumbs=function(e){const{length:r}=e,t=[];for(let n=0;n<r;n+=1)t[n]=this.buildThumbStyle(e[n],n);const n=[];for(let e=0;e<r;e+=1)n[e]=this.renderThumb(t[e],e);return n},t.renderTracks=function(e){const r=[],t=e.length-1;r.push(this.renderTrack(0,0,e[0]));for(let n=0;n<t;n+=1)r.push(this.renderTrack(n+1,e[n],e[n+1]));return r.push(this.renderTrack(t+1,e[t],this.state.upperBound)),r},t.renderMarks=function(){let{marks:e}=this.props;const r=this.props.max-this.props.min+1;return"boolean"==typeof e?e=Array.from({length:r}).map(((e,r)=>r)):"number"==typeof e&&(e=Array.from({length:r}).map(((e,r)=>r)).filter((r=>r%e==0))),e.map(parseFloat).sort(((e,r)=>e-r)).map((e=>{const r=this.calcOffset(e),t={key:e,className:this.props.markClassName,style:this.buildMarkStyle(r)};return this.props.renderMark(t)}))},t.render=function(){const e=[],{value:r}=this.state,t=r.length;for(let n=0;n<t;n+=1)e[n]=this.calcOffset(r[n],n);const n=this.props.withTracks?this.renderTracks(e):null,o=this.renderThumbs(e),s=this.props.marks?this.renderMarks():null;return i.createElement("div",{ref:e=>{this.slider=e,this.resizeElementRef.current=e},style:{position:"relative"},className:this.props.className+(this.props.disabled?" disabled":""),onMouseDown:this.onSliderMouseDown,onClick:this.onSliderClick},n,o,s)},r}(i.Component);oi.displayName="ReactSlider",oi.defaultProps={min:0,max:100,step:1,pageFn:e=>10*e,minDistance:0,defaultValue:0,orientation:"horizontal",className:"slider",thumbClassName:"thumb",thumbActiveClassName:"active",trackClassName:"track",markClassName:"mark",withTracks:!0,pearling:!1,disabled:!1,snapDragDisabled:!1,invert:!1,marks:[],renderThumb:e=>i.createElement("div",e),renderTrack:e=>i.createElement("div",e),renderMark:e=>i.createElement("span",e)};var si=oi;const ai=y.div`
    isolation: isolate;
`,li=y.div`
    margin-top: ${An["spacing-8"]};
    display: flex;
    justify-content: space-between;
    gap: ${An["spacing-8"]};
`,di=y.div`
    margin-bottom: ${An["spacing-8"]};
`,ci=y(Jn.BodyBL)`
    overflow-wrap: anywhere;
`,ui=y(si)`
    height: 0.875rem;
`,gi=y.div`
    height: 2.5rem;
    width: 2.5rem;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    ${e=>e.$disabled?v`
                cursor: not-allowed;
            `:e.$readOnly?void 0:v`
                cursor: grab;
                &:active {
                    cursor: grabbing;
                }
            `}

    &:after {
        content: "";
        display: block;
        height: 0.875rem;
        width: 0.875rem;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);

        background-color: ${Cn.bg};
        box-shadow: ${On["sm-subtle"]};
        border: ${kn["width-010"]} ${kn.solid}
            ${e=>e.$disabled?Cn["border-selected-disabled"]:Cn["border-strong"]};
        border-radius: ${zn.full};
    }
`,hi=y.div`
    height: 0.875rem;
    width: 0.875rem;
    position: relative;
    outline: none;

    &:focus ${gi}:after {
        outline-offset: -1px;
        outline: ${kn["width-040"]} ${kn.solid}
            ${Cn["border-selected"]};
    }
`,bi=y.div`
    height: 0.25rem;
    top: 50%;
    transform: translateY(-50%);
    border-radius: ${zn.full};

    background: ${e=>e.$color&&"function"==typeof e.$color?e.$color(e):e.$color||Cn["border-strong"](e)};
`,mi=y.div`
    display: flex;
    margin-bottom: ${An["spacing-16"]};
    align-items: baseline;
`,pi=y.div`
    margin: 0 0.5rem;
`,fi=y.div`
    width: 100%;
    height: 4rem;
    display: flex;
    align-items: flex-end;
    padding: 0 0.4375rem;
`,yi=y.div`
    flex: 1;
    border-radius: ${zn.sm} ${zn.sm} 0 0;
    border: 0.5px solid transparent; // space between bars
    background-clip: content-box;

    ${e=>{let r=Cn["bg-strongest"];return e.$disabled&&e.$selected?r=Cn["bg-selected-stronger-disabled"]:e.$disabled?r=Cn["bg-disabled"]:e.$selected&&(r=Cn["bg-selected-stronger"]),v`
            background-color: ${r};
        `}}
`,vi=y((t=>{var{value:n,min:i=0,max:a=100,step:l=1,minRange:d,numOfThumbs:c=2,colors:u,disabled:g,readOnly:h,ariaLabels:b,showSliderLabels:m,sliderLabelPrefix:p,sliderLabelSuffix:f,showIndicatorLabel:y,indicatorLabelPrefix:v,indicatorLabelSuffix:x,renderSliderLabel:w,onChange:F,onChangeEnd:$}=t,E=K(t,["value","min","max","step","minRange","numOfThumbs","colors","disabled","readOnly","ariaLabels","showSliderLabels","sliderLabelPrefix","sliderLabelSuffix","showIndicatorLabel","indicatorLabelPrefix","indicatorLabelSuffix","renderSliderLabel","onChange","onChangeEnd"]);const[D,C]=o(S()),B=function(){const e=function(){const e=g||h?Cn["border-disabled"]:Cn["border-strong"],r=g||h?Cn["border-selected-disabled"]:Cn["border-selected"];if(1===c)return[r,e];const t=[];t.push(e);for(let e=0;e<c-1;e++)t.push(r);return t.push(e),t}();return new Array(c+1).fill(0).map(((r,t)=>(null==u?void 0:u[t])||e[t]))}();s((()=>{n!==D&&C(S())}),[n]);function S(){if(n&&n.length===c)return n;const e=[];for(let r=0;r<c;r++)e.push(i+l*r);return e}const k=e=>w?w(e):r(ci,{children:[p,e,f]});return r(ai,Object.assign({},E,{children:[y&&e(di,{children:(()=>{let e="";if(1===D.length)e=`${D[0]}`;else if(2===D.length)e=`${D[0]} - ${D[1]}`;else if(D.length>2){e=`${Math.min(...D)} - ${Math.max(...D)}`}return r(ci,{children:[v,e,x]})})()}),e(ui,{step:l,min:i,max:a,value:D,disabled:g||h,onChange:(e,r)=>{if("number"==typeof e){const r=[e];C(r),null==F||F(r)}else{if(r>-1&&D[r]===e[r])return;const t=[...e];C(t),null==F||F(t)}},onAfterChange:e=>{if("number"==typeof e){const r=[e];C(r),null==$||$(r)}else{const r=[...e];C(r),null==$||$(r)}},minDistance:d,ariaLabel:b,renderThumb:(r,t)=>e(hi,Object.assign({"data-testid":`slider-thumb-${t.index}`},r,{tabIndex:g?void 0:r.tabIndex,children:e(gi,{$disabled:g,$readOnly:h})})),renderTrack:(r,t)=>e(bi,Object.assign({"data-testid":`slider-track-${t.index}`},r,{$color:B[t.index]}))}),m&&r(li,{children:[e("div",{children:k(i)}),e("div",{children:k(a)})]})]}))}))`
    margin-top: -0.3125rem;
`,xi=n=>{var{bins:i=[],interval:l,disabled:d,readOnly:c,value:u,showRangeLabels:g,rangeLabelPrefix:h,rangeLabelSuffix:b,ariaLabels:m,onChange:p,onChangeEnd:f,renderEmptyView:y,renderRangeLabel:v}=n,x=K(n,["bins","interval","disabled","readOnly","value","showRangeLabels","rangeLabelPrefix","rangeLabelSuffix","ariaLabels","onChange","onChangeEnd","renderEmptyView","renderRangeLabel"]);const w=i.map((e=>e.count)),F=Math.max(...w),$=i.map((e=>e.minValue)),E=Math.max(...$),D=Math.min(...$),[C,B]=o(z()),S=a((()=>{const e=[...i].sort(((e,r)=>e.minValue-r.minValue)),r=(E-D)/l+1,t=[];for(let n=0;n<r;n++){const r=e.find((e=>e.minValue===D+l*n));r?t.push(r):t.push({count:0,minValue:D+l*n})}return t}),[i,l]);s((()=>{u!==C&&B(z())}),[u]);const k=e=>{const[r,t]=e,n=[r,t];B(n),null==p||p(n)},A=e=>{const[r,t]=e,n=[r,t];B(n),null==f||f(n)};function z(){return null!=u?u:[D,D+l]}const O=e=>v?v(e):r(Jn.BodyBL,{children:[h,e,b]});return r("div",Object.assign({},x,{children:[g&&r(mi,{children:[O(C[0]),e(pi,{children:"-"}),O(C[1])]}),S.every((e=>0===e.count))&&y?y():r(t,{children:[e(fi,{children:S.map(((r,t)=>{const n=r.count/F;return e(yi,{style:{height:n?`calc(calc(100% - 0.25rem) * ${n} + 0.25rem)`:0},$selected:r.minValue>=C[0]&&r.minValue<C[1],$disabled:d||c},t)}))}),e(vi,{min:D,max:E+l,step:l,minRange:l,numOfThumbs:2,value:C,disabled:d,readOnly:c,ariaLabels:m,onChange:k,onChangeEnd:A})]})]}))};var wi=function(e,r){return wi=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,r){e.__proto__=r}||function(e,r){for(var t in r)Object.prototype.hasOwnProperty.call(r,t)&&(e[t]=r[t])},wi(e,r)};var Fi=function(){return Fi=Object.assign||function(e){for(var r,t=1,n=arguments.length;t<n;t++)for(var i in r=arguments[t])Object.prototype.hasOwnProperty.call(r,i)&&(e[i]=r[i]);return e},Fi.apply(this,arguments)};var $i="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};var Ei=function(e){var r=typeof e;return null!=e&&("object"==r||"function"==r)},Di="object"==typeof $i&&$i&&$i.Object===Object&&$i,Ci="object"==typeof self&&self&&self.Object===Object&&self,Bi=Di||Ci||Function("return this")(),Si=Bi,ki=function(){return Si.Date.now()},Ai=/\s/;var zi=function(e){for(var r=e.length;r--&&Ai.test(e.charAt(r)););return r},Oi=/^\s+/;var Mi=function(e){return e?e.slice(0,zi(e)+1).replace(Oi,""):e},_i=Bi.Symbol,Ti=_i,Li=Object.prototype,ji=Li.hasOwnProperty,Ri=Li.toString,Pi=Ti?Ti.toStringTag:void 0;var Yi=function(e){var r=ji.call(e,Pi),t=e[Pi];try{e[Pi]=void 0;var n=!0}catch(e){}var i=Ri.call(e);return n&&(r?e[Pi]=t:delete e[Pi]),i},Ii=Object.prototype.toString;var Hi=Yi,Wi=function(e){return Ii.call(e)},Ni=_i?_i.toStringTag:void 0;var Vi=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":Ni&&Ni in Object(e)?Hi(e):Wi(e)},Ki=function(e){return null!=e&&"object"==typeof e};var Ui=Mi,Zi=Ei,Xi=function(e){return"symbol"==typeof e||Ki(e)&&"[object Symbol]"==Vi(e)},qi=/^[-+]0x[0-9a-f]+$/i,Ji=/^0b[01]+$/i,Gi=/^0o[0-7]+$/i,Qi=parseInt;var eo=Ei,ro=ki,to=function(e){if("number"==typeof e)return e;if(Xi(e))return NaN;if(Zi(e)){var r="function"==typeof e.valueOf?e.valueOf():e;e=Zi(r)?r+"":r}if("string"!=typeof e)return 0===e?e:+e;e=Ui(e);var t=Ji.test(e);return t||Gi.test(e)?Qi(e.slice(2),t?2:8):qi.test(e)?NaN:+e},no=Math.max,io=Math.min;var oo=function(e,r,t){var n,i,o,s,a,l,d=0,c=!1,u=!1,g=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function h(r){var t=n,o=i;return n=i=void 0,d=r,s=e.apply(o,t)}function b(e){var t=e-l;return void 0===l||t>=r||t<0||u&&e-d>=o}function m(){var e=ro();if(b(e))return p(e);a=setTimeout(m,function(e){var t=r-(e-l);return u?io(t,o-(e-d)):t}(e))}function p(e){return a=void 0,g&&n?h(e):(n=i=void 0,s)}function f(){var e=ro(),t=b(e);if(n=arguments,i=this,l=e,t){if(void 0===a)return function(e){return d=e,a=setTimeout(m,r),c?h(e):s}(l);if(u)return clearTimeout(a),a=setTimeout(m,r),h(l)}return void 0===a&&(a=setTimeout(m,r)),s}return r=to(r)||0,eo(t)&&(c=!!t.leading,o=(u="maxWait"in t)?no(to(t.maxWait)||0,r):o,g="trailing"in t?!!t.trailing:g),f.cancel=function(){void 0!==a&&clearTimeout(a),d=0,n=l=i=a=void 0},f.flush=function(){return void 0===a?s:p(ro())},f},so=oo,ao=Ei;var lo=function(e,r,t){var n=!0,i=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return ao(t)&&(n="leading"in t?!!t.leading:n,i="trailing"in t?!!t.trailing:i),so(e,r,{leading:n,maxWait:r,trailing:i})},co=function(e,r,t,n){switch(r){case"debounce":return oo(e,t,n);case"throttle":return lo(e,t,n);default:return e}},uo=function(e){return"function"==typeof e},go=function(){return"undefined"==typeof window},ho=function(e){return e instanceof Element||e instanceof HTMLDocument},bo=function(e,r,t,n){return function(i){var o=i.width,s=i.height;r((function(r){return r.width===o&&r.height===s||r.width===o&&!n||r.height===s&&!t?r:(e&&uo(e)&&e(o,s),{width:o,height:s})}))}};!function(e){function r(r){var t=e.call(this,r)||this;t.cancelHandler=function(){t.resizeHandler&&t.resizeHandler.cancel&&(t.resizeHandler.cancel(),t.resizeHandler=null)},t.attachObserver=function(){var e=t.props,r=e.targetRef,n=e.observerOptions;if(!go()){r&&r.current&&(t.targetRef.current=r.current);var i=t.getElement();i&&(t.observableElement&&t.observableElement===i||(t.observableElement=i,t.resizeObserver.observe(i,n)))}},t.getElement=function(){var e=t.props,r=e.querySelector,n=e.targetDomEl;if(go())return null;if(r)return document.querySelector(r);if(n&&ho(n))return n;if(t.targetRef&&ho(t.targetRef.current))return t.targetRef.current;var i=j(t);if(!i)return null;switch(t.getRenderType()){case"renderProp":case"childFunction":case"child":case"childArray":return i;default:return i.parentElement}},t.createResizeHandler=function(e){var r=t.props,n=r.handleWidth,i=void 0===n||n,o=r.handleHeight,s=void 0===o||o,a=r.onResize;if(i||s){var l=bo(a,t.setState.bind(t),i,s);e.forEach((function(e){var r=e&&e.contentRect||{},n=r.width,i=r.height;!t.skipOnMount&&!go()&&l({width:n,height:i}),t.skipOnMount=!1}))}},t.getRenderType=function(){var e=t.props,r=e.render,n=e.children;return uo(r)?"renderProp":uo(n)?"childFunction":d(n)?"child":Array.isArray(n)?"childArray":"parent"};var n=r.skipOnMount,i=r.refreshMode,o=r.refreshRate,s=void 0===o?1e3:o,a=r.refreshOptions;return t.state={width:void 0,height:void 0},t.skipOnMount=n,t.targetRef=c(),t.observableElement=null,go()||(t.resizeHandler=co(t.createResizeHandler,i,s,a),t.resizeObserver=new window.ResizeObserver(t.resizeHandler)),t}(function(e,r){if("function"!=typeof r&&null!==r)throw new TypeError("Class extends value "+String(r)+" is not a constructor or null");function t(){this.constructor=e}wi(e,r),e.prototype=null===r?Object.create(r):(t.prototype=r.prototype,new t)})(r,e),r.prototype.componentDidMount=function(){this.attachObserver()},r.prototype.componentDidUpdate=function(){this.attachObserver()},r.prototype.componentWillUnmount=function(){go()||(this.observableElement=null,this.resizeObserver.disconnect(),this.cancelHandler())},r.prototype.render=function(){var e,r=this.props,t=r.render,i=r.children,o=r.nodeType,s=void 0===o?"div":o,a=this.state,l={width:a.width,height:a.height,targetRef:this.targetRef};switch(this.getRenderType()){case"renderProp":return t&&t(l);case"childFunction":return(e=i)(l);case"child":if((e=i).type&&"string"==typeof e.type){var d=function(e,r){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(n=Object.getOwnPropertySymbols(e);i<n.length;i++)r.indexOf(n[i])<0&&Object.prototype.propertyIsEnumerable.call(e,n[i])&&(t[n[i]]=e[n[i]])}return t}(l,["targetRef"]);return u(e,d)}return u(e,l);case"childArray":return(e=i).map((function(e){return!!e&&u(e,l)}));default:return n.createElement(s,null)}}}(g);var mo,po=go()?s:h;!function(e){e.transformWithSpaces=(e,r)=>{const t="(.{"+r+"})";return e.replace(/[^\dA-Z]/gi,"").replace(new RegExp(t,"g"),"$1 ").trim()},e.padValue=(e,r)=>{if("0"===e)return r?e:e.padStart(2,"0");if(""===e)return e;return parseInt(e).toString().padStart(2,"0")},e.shouldTruncateToTwoLines=(e,r)=>{const t=Math.floor(r/9);return e.length>=2*t||1===e.split(" ").length&&e.length>t},e.truncateOneLine=(e,r,t,n,i=8)=>{let o=0;r>t&&(o=Math.floor((r-t)/i));const s=n+o;if(s<e.length){const r=Math.floor(s/2);return e.substring(0,r)+" ... "+e.substring(e.length-r,e.length)}return e},e.truncateTwoLines=(e,r,t,n=1.2)=>{const i=Math.floor(2*r/(.6*t))*(2/n);if(e.length<=i)return e;const o=Math.floor(.6*i),s=Math.floor(.2*i);return`${e.substring(0,o)}...${e.substring(e.length-s)}`},e.getTextWidth=(r,t)=>{if("undefined"==typeof document)return 0;const n=(e.getTextWidth.canvas||(e.getTextWidth.canvas=document.createElement("canvas"))).getContext("2d");n.font=t;return n.measureText(r).width},e.maskValue=(e,t)=>{if(!e)return e;const{maskRange:n,unmaskRange:i,maskChar:o="•",maskRegex:s,maskTransformer:a}=t;if(a)return a(e);if(s)return e.replace(s,o);if(n){const{startIndex:t,endIndex:i}=r(n[0],n[1]);return e.substring(0,t)+o.repeat(e.substring(t,i+1).length)+e.substring(i+1)}if(i){const{startIndex:t,endIndex:n}=r(i[0],i[1]);return o.repeat(e.substring(0,t).length)+e.substring(t,n+1)+o.repeat(e.substring(n+1).length)}return e};const r=(e,r)=>e<r?{startIndex:e,endIndex:r}:{startIndex:r,endIndex:e},t=new Intl.PluralRules("en",{type:"ordinal"}),n=new Map([["one","st"],["two","nd"],["few","rd"],["other","th"]]);e.formatOrdinal=e=>{const r=t.select(e);return`${e}${n.get(r)}`}}(mo||(mo={}));const fo=y.div`
    font-weight: ${e=>e.$bold?Bn.Spec["weight-semibold"]:Bn.Spec["weight-regular"]};

    ${e=>e.$disabled?v`
                color: ${Cn["text-disabled"]};
            `:e.$selected?v`
                color: ${Cn["text-selected"]};
            `:v`
                color: ${Cn.text};
            `}
    width: 100%;

    ${e=>"end"===e.$truncateType&&Nn(e.$maxLines||2)}
    overflow-wrap: break-word;
`,yo=y.div`
    color: ${Cn["text-subtlest"]};
    width: 100%;

    ${e=>"end"===e.$truncateType&&Nn(e.$maxLines||2)}
    overflow-wrap: break-word;

    ${e=>"next-line"===e.$labelDisplayType?v`
                    ${Bn["body-md-semibold"]}
                `:v`
                    ${Bn["body-baseline-regular"]}
                `}
`;y.span`
    font-weight: ${Bn.Spec["weight-semibold"]};
`,y.div`
    text-align: left;
    width: 100%;
    overflow: hidden;
    overflow-wrap: break-word;

    ${e=>"small"===e.$variant?Bn["body-md-regular"]:Bn["body-baseline-regular"]}

    ${e=>{switch(e.$labelDisplayType){case"next-line":return v`
                    display: flex;
                    flex-direction: column;
                `;case"inline":return v`
                    ${fo} {
                        display: inline;
                    }

                    ${yo} {
                        display: inline;
                        margin-left: 0.5rem;
                    }
                `}}}
`,y.div`
    display: inline-block;
    width: ${e=>1===e.$maxLines?50:100}%;
    height: 1lh;
    word-break: break-all;
    overflow: hidden;
`,y.div`
    display: inline-block;
    width: ${e=>1===e.$maxLines?50:100}%;
    height: 1lh;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    direction: rtl;
    text-align: right;
`;var vo=Sr;var xo=function(e){var r=this.__data__,t=r.delete(e);return this.size=r.size,t};var wo=function(e){return this.__data__.get(e)};var Fo=function(e){return this.__data__.has(e)},$o=Sr,Eo=kr,Do=Xr;var Co=function(e,r){var t=this.__data__;if(t instanceof $o){var n=t.__data__;if(!Eo||n.length<199)return n.push([e,r]),this.size=++t.size,this;t=this.__data__=new Do(n)}return t.set(e,r),this.size=t.size,this},Bo=Sr,So=function(){this.__data__=new vo,this.size=0},ko=xo,Ao=wo,zo=Fo,Oo=Co;function Mo(e){var r=this.__data__=new Bo(e);this.size=r.size}Mo.prototype.clear=So,Mo.prototype.delete=ko,Mo.prototype.get=Ao,Mo.prototype.has=zo,Mo.prototype.set=Oo;var _o=Xr,To=function(e){return this.__data__.set(e,"__lodash_hash_undefined__"),this},Lo=function(e){return this.__data__.has(e)};function jo(e){var r=-1,t=null==e?0:e.length;for(this.__data__=new _o;++r<t;)this.add(e[r])}jo.prototype.add=jo.prototype.push=To,jo.prototype.has=Lo,Q.Uint8Array;var Ro=ee?ee.prototype:void 0;Ro&&Ro.valueOf;var Po=ue,Yo=ge;var Io=function(e){return Yo(e)&&"[object Arguments]"==Po(e)},Ho=Object.prototype;Ho.hasOwnProperty,Ho.propertyIsEnumerable;Io(function(){return arguments}());var Wo={exports:{}};var No=function(){return!1};!function(e,r){var t=Q,n=No,i=r&&!r.nodeType&&r,o=i&&e&&!e.nodeType&&e,s=o&&o.exports===i?t.Buffer:void 0,a=(s?s.isBuffer:void 0)||n;e.exports=a}(Wo,Wo.exports);var Vo={exports:{}};!function(e,r){var t=q,n=r&&!r.nodeType&&r,i=n&&e&&!e.nodeType&&e,o=i&&i.exports===n&&t.process,s=function(){try{var e=i&&i.require&&i.require("util").types;return e||o&&o.binding&&o.binding("util")}catch(e){}}();e.exports=s}(Vo,Vo.exports);var Ko=Vo.exports;Ko&&Ko.isTypedArray;var Uo=Ne(Q,"DataView"),Zo=kr,Xo=Ne(Q,"Promise"),qo=Ne(Q,"Set"),Jo=Ne(Q,"WeakMap"),Go=ue,Qo=Ae,es="[object Map]",rs="[object Promise]",ts="[object Set]",ns="[object WeakMap]",is="[object DataView]",os=Qo(Uo),ss=Qo(Zo),as=Qo(Xo),ls=Qo(qo),ds=Qo(Jo),cs=Go;(Uo&&cs(new Uo(new ArrayBuffer(1)))!=is||Zo&&cs(new Zo)!=es||Xo&&cs(Xo.resolve())!=rs||qo&&cs(new qo)!=ts||Jo&&cs(new Jo)!=ns)&&(cs=function(e){var r=Go(e),t="[object Object]"==r?e.constructor:void 0,n=t?Qo(t):"";if(n)switch(n){case os:return is;case ss:return es;case as:return rs;case ls:return ts;case ds:return ns}return r});var us={exports:{}};us.exports=function(){var e=1e3,r=6e4,t=36e5,n="millisecond",i="second",o="minute",s="hour",a="day",l="week",d="month",c="quarter",u="year",g="date",h="Invalid Date",b=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,m=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,p={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(e){var r=["th","st","nd","rd"],t=e%100;return"["+e+(r[(t-20)%10]||r[t]||r[0])+"]"}},f=function(e,r,t){var n=String(e);return!n||n.length>=r?e:""+Array(r+1-n.length).join(t)+e},y={s:f,z:function(e){var r=-e.utcOffset(),t=Math.abs(r),n=Math.floor(t/60),i=t%60;return(r<=0?"+":"-")+f(n,2,"0")+":"+f(i,2,"0")},m:function e(r,t){if(r.date()<t.date())return-e(t,r);var n=12*(t.year()-r.year())+(t.month()-r.month()),i=r.clone().add(n,d),o=t-i<0,s=r.clone().add(n+(o?-1:1),d);return+(-(n+(t-i)/(o?i-s:s-i))||0)},a:function(e){return e<0?Math.ceil(e)||0:Math.floor(e)},p:function(e){return{M:d,y:u,w:l,d:a,D:g,h:s,m:o,s:i,ms:n,Q:c}[e]||String(e||"").toLowerCase().replace(/s$/,"")},u:function(e){return void 0===e}},v="en",x={};x[v]=p;var w="$isDayjsObject",F=function(e){return e instanceof C||!(!e||!e[w])},$=function e(r,t,n){var i;if(!r)return v;if("string"==typeof r){var o=r.toLowerCase();x[o]&&(i=o),t&&(x[o]=t,i=o);var s=r.split("-");if(!i&&s.length>1)return e(s[0])}else{var a=r.name;x[a]=r,i=a}return!n&&i&&(v=i),i||!n&&v},E=function(e,r){if(F(e))return e.clone();var t="object"==typeof r?r:{};return t.date=e,t.args=arguments,new C(t)},D=y;D.l=$,D.i=F,D.w=function(e,r){return E(e,{locale:r.$L,utc:r.$u,x:r.$x,$offset:r.$offset})};var C=function(){function p(e){this.$L=$(e.locale,null,!0),this.parse(e),this.$x=this.$x||e.x||{},this[w]=!0}var f=p.prototype;return f.parse=function(e){this.$d=function(e){var r=e.date,t=e.utc;if(null===r)return new Date(NaN);if(D.u(r))return new Date;if(r instanceof Date)return new Date(r);if("string"==typeof r&&!/Z$/i.test(r)){var n=r.match(b);if(n){var i=n[2]-1||0,o=(n[7]||"0").substring(0,3);return t?new Date(Date.UTC(n[1],i,n[3]||1,n[4]||0,n[5]||0,n[6]||0,o)):new Date(n[1],i,n[3]||1,n[4]||0,n[5]||0,n[6]||0,o)}}return new Date(r)}(e),this.init()},f.init=function(){var e=this.$d;this.$y=e.getFullYear(),this.$M=e.getMonth(),this.$D=e.getDate(),this.$W=e.getDay(),this.$H=e.getHours(),this.$m=e.getMinutes(),this.$s=e.getSeconds(),this.$ms=e.getMilliseconds()},f.$utils=function(){return D},f.isValid=function(){return!(this.$d.toString()===h)},f.isSame=function(e,r){var t=E(e);return this.startOf(r)<=t&&t<=this.endOf(r)},f.isAfter=function(e,r){return E(e)<this.startOf(r)},f.isBefore=function(e,r){return this.endOf(r)<E(e)},f.$g=function(e,r,t){return D.u(e)?this[r]:this.set(t,e)},f.unix=function(){return Math.floor(this.valueOf()/1e3)},f.valueOf=function(){return this.$d.getTime()},f.startOf=function(e,r){var t=this,n=!!D.u(r)||r,c=D.p(e),h=function(e,r){var i=D.w(t.$u?Date.UTC(t.$y,r,e):new Date(t.$y,r,e),t);return n?i:i.endOf(a)},b=function(e,r){return D.w(t.toDate()[e].apply(t.toDate("s"),(n?[0,0,0,0]:[23,59,59,999]).slice(r)),t)},m=this.$W,p=this.$M,f=this.$D,y="set"+(this.$u?"UTC":"");switch(c){case u:return n?h(1,0):h(31,11);case d:return n?h(1,p):h(0,p+1);case l:var v=this.$locale().weekStart||0,x=(m<v?m+7:m)-v;return h(n?f-x:f+(6-x),p);case a:case g:return b(y+"Hours",0);case s:return b(y+"Minutes",1);case o:return b(y+"Seconds",2);case i:return b(y+"Milliseconds",3);default:return this.clone()}},f.endOf=function(e){return this.startOf(e,!1)},f.$set=function(e,r){var t,l=D.p(e),c="set"+(this.$u?"UTC":""),h=(t={},t[a]=c+"Date",t[g]=c+"Date",t[d]=c+"Month",t[u]=c+"FullYear",t[s]=c+"Hours",t[o]=c+"Minutes",t[i]=c+"Seconds",t[n]=c+"Milliseconds",t)[l],b=l===a?this.$D+(r-this.$W):r;if(l===d||l===u){var m=this.clone().set(g,1);m.$d[h](b),m.init(),this.$d=m.set(g,Math.min(this.$D,m.daysInMonth())).$d}else h&&this.$d[h](b);return this.init(),this},f.set=function(e,r){return this.clone().$set(e,r)},f.get=function(e){return this[D.p(e)]()},f.add=function(n,c){var g,h=this;n=Number(n);var b=D.p(c),m=function(e){var r=E(h);return D.w(r.date(r.date()+Math.round(e*n)),h)};if(b===d)return this.set(d,this.$M+n);if(b===u)return this.set(u,this.$y+n);if(b===a)return m(1);if(b===l)return m(7);var p=(g={},g[o]=r,g[s]=t,g[i]=e,g)[b]||1,f=this.$d.getTime()+n*p;return D.w(f,this)},f.subtract=function(e,r){return this.add(-1*e,r)},f.format=function(e){var r=this,t=this.$locale();if(!this.isValid())return t.invalidDate||h;var n=e||"YYYY-MM-DDTHH:mm:ssZ",i=D.z(this),o=this.$H,s=this.$m,a=this.$M,l=t.weekdays,d=t.months,c=t.meridiem,u=function(e,t,i,o){return e&&(e[t]||e(r,n))||i[t].slice(0,o)},g=function(e){return D.s(o%12||12,e,"0")},b=c||function(e,r,t){var n=e<12?"AM":"PM";return t?n.toLowerCase():n};return n.replace(m,(function(e,n){return n||function(e){switch(e){case"YY":return String(r.$y).slice(-2);case"YYYY":return D.s(r.$y,4,"0");case"M":return a+1;case"MM":return D.s(a+1,2,"0");case"MMM":return u(t.monthsShort,a,d,3);case"MMMM":return u(d,a);case"D":return r.$D;case"DD":return D.s(r.$D,2,"0");case"d":return String(r.$W);case"dd":return u(t.weekdaysMin,r.$W,l,2);case"ddd":return u(t.weekdaysShort,r.$W,l,3);case"dddd":return l[r.$W];case"H":return String(o);case"HH":return D.s(o,2,"0");case"h":return g(1);case"hh":return g(2);case"a":return b(o,s,!0);case"A":return b(o,s,!1);case"m":return String(s);case"mm":return D.s(s,2,"0");case"s":return String(r.$s);case"ss":return D.s(r.$s,2,"0");case"SSS":return D.s(r.$ms,3,"0");case"Z":return i}return null}(e)||i.replace(":","")}))},f.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},f.diff=function(n,g,h){var b,m=this,p=D.p(g),f=E(n),y=(f.utcOffset()-this.utcOffset())*r,v=this-f,x=function(){return D.m(m,f)};switch(p){case u:b=x()/12;break;case d:b=x();break;case c:b=x()/3;break;case l:b=(v-y)/6048e5;break;case a:b=(v-y)/864e5;break;case s:b=v/t;break;case o:b=v/r;break;case i:b=v/e;break;default:b=v}return h?b:D.a(b)},f.daysInMonth=function(){return this.endOf(d).$D},f.$locale=function(){return x[this.$L]},f.locale=function(e,r){if(!e)return this.$L;var t=this.clone(),n=$(e,r,!0);return n&&(t.$L=n),t},f.clone=function(){return D.w(this.$d,this)},f.toDate=function(){return new Date(this.valueOf())},f.toJSON=function(){return this.isValid()?this.toISOString():null},f.toISOString=function(){return this.$d.toISOString()},f.toString=function(){return this.$d.toUTCString()},p}(),B=C.prototype;return E.prototype=B,[["$ms",n],["$s",i],["$m",o],["$H",s],["$W",a],["$M",d],["$y",u],["$D",g]].forEach((function(e){B[e[1]]=function(r){return this.$g(r,e[0],e[1])}})),E.extend=function(e,r){return e.$i||(e(r,C,E),e.$i=!0),E},E.locale=$,E.isDayjs=F,E.unix=function(e){return E(1e3*e)},E.en=x[v],E.Ls=x,E.p={},E}();var gs=Z(us.exports),hs={exports:{}};hs.exports=function(){var e={LTS:"h:mm:ss A",LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D, YYYY",LLL:"MMMM D, YYYY h:mm A",LLLL:"dddd, MMMM D, YYYY h:mm A"},r=/(\[[^[]*\])|([-_:/.,()\s]+)|(A|a|YYYY|YY?|MM?M?M?|Do|DD?|hh?|HH?|mm?|ss?|S{1,3}|z|ZZ?)/g,t=/\d\d/,n=/\d\d?/,i=/\d*[^-_:/,()\s\d]+/,o={},s=function(e){return(e=+e)+(e>68?1900:2e3)},a=function(e){return function(r){this[e]=+r}},l=[/[+-]\d\d:?(\d\d)?|Z/,function(e){(this.zone||(this.zone={})).offset=function(e){if(!e)return 0;if("Z"===e)return 0;var r=e.match(/([+-]|\d\d)/g),t=60*r[1]+(+r[2]||0);return 0===t?0:"+"===r[0]?-t:t}(e)}],d=function(e){var r=o[e];return r&&(r.indexOf?r:r.s.concat(r.f))},c=function(e,r){var t,n=o.meridiem;if(n){for(var i=1;i<=24;i+=1)if(e.indexOf(n(i,0,r))>-1){t=i>12;break}}else t=e===(r?"pm":"PM");return t},u={A:[i,function(e){this.afternoon=c(e,!1)}],a:[i,function(e){this.afternoon=c(e,!0)}],S:[/\d/,function(e){this.milliseconds=100*+e}],SS:[t,function(e){this.milliseconds=10*+e}],SSS:[/\d{3}/,function(e){this.milliseconds=+e}],s:[n,a("seconds")],ss:[n,a("seconds")],m:[n,a("minutes")],mm:[n,a("minutes")],H:[n,a("hours")],h:[n,a("hours")],HH:[n,a("hours")],hh:[n,a("hours")],D:[n,a("day")],DD:[t,a("day")],Do:[i,function(e){var r=o.ordinal,t=e.match(/\d+/);if(this.day=t[0],r)for(var n=1;n<=31;n+=1)r(n).replace(/\[|\]/g,"")===e&&(this.day=n)}],M:[n,a("month")],MM:[t,a("month")],MMM:[i,function(e){var r=d("months"),t=(d("monthsShort")||r.map((function(e){return e.slice(0,3)}))).indexOf(e)+1;if(t<1)throw new Error;this.month=t%12||t}],MMMM:[i,function(e){var r=d("months").indexOf(e)+1;if(r<1)throw new Error;this.month=r%12||r}],Y:[/[+-]?\d+/,a("year")],YY:[t,function(e){this.year=s(e)}],YYYY:[/\d{4}/,a("year")],Z:l,ZZ:l};function g(t){var n,i;n=t,i=o&&o.formats;for(var s=(t=n.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g,(function(r,t,n){var o=n&&n.toUpperCase();return t||i[n]||e[n]||i[o].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g,(function(e,r,t){return r||t.slice(1)}))}))).match(r),a=s.length,l=0;l<a;l+=1){var d=s[l],c=u[d],g=c&&c[0],h=c&&c[1];s[l]=h?{regex:g,parser:h}:d.replace(/^\[|\]$/g,"")}return function(e){for(var r={},t=0,n=0;t<a;t+=1){var i=s[t];if("string"==typeof i)n+=i.length;else{var o=i.regex,l=i.parser,d=e.slice(n),c=o.exec(d)[0];l.call(r,c),e=e.replace(c,"")}}return function(e){var r=e.afternoon;if(void 0!==r){var t=e.hours;r?t<12&&(e.hours+=12):12===t&&(e.hours=0),delete e.afternoon}}(r),r}}return function(e,r,t){t.p.customParseFormat=!0,e&&e.parseTwoDigitYear&&(s=e.parseTwoDigitYear);var n=r.prototype,i=n.parse;n.parse=function(e){var r=e.date,n=e.utc,s=e.args;this.$u=n;var a=s[1];if("string"==typeof a){var l=!0===s[2],d=!0===s[3],c=l||d,u=s[2];d&&(u=s[2]),o=this.$locale(),!l&&u&&(o=t.Ls[u]),this.$d=function(e,r,t){try{if(["x","X"].indexOf(r)>-1)return new Date(("X"===r?1e3:1)*e);var n=g(r)(e),i=n.year,o=n.month,s=n.day,a=n.hours,l=n.minutes,d=n.seconds,c=n.milliseconds,u=n.zone,h=new Date,b=s||(i||o?1:h.getDate()),m=i||h.getFullYear(),p=0;i&&!o||(p=o>0?o-1:h.getMonth());var f=a||0,y=l||0,v=d||0,x=c||0;return u?new Date(Date.UTC(m,p,b,f,y,v,x+60*u.offset*1e3)):t?new Date(Date.UTC(m,p,b,f,y,v,x)):new Date(m,p,b,f,y,v,x)}catch(e){return new Date("")}}(r,a,n),this.init(),u&&!0!==u&&(this.$L=this.locale(u).$L),c&&r!=this.format(a)&&(this.$d=new Date("")),o={}}else if(a instanceof Array)for(var h=a.length,b=1;b<=h;b+=1){s[1]=a[b-1];var m=t.apply(this,s);if(m.isValid()){this.$d=m.$d,this.$L=m.$L,this.init();break}b===h&&(this.$d=new Date(""))}else i.call(this,e)}}}();var bs=Z(hs.exports),ms={exports:{}};ms.exports=function(e,r,t){r.prototype.isBetween=function(e,r,n,i){var o=t(e),s=t(r),a="("===(i=i||"()")[0],l=")"===i[1];return(a?this.isAfter(o,n):!this.isBefore(o,n))&&(l?this.isBefore(s,n):!this.isAfter(s,n))||(a?this.isBefore(o,n):!this.isAfter(o,n))&&(l?this.isAfter(s,n):!this.isBefore(s,n))}};var ps=Z(ms.exports),fs={exports:{}};fs.exports=function(e,r){r.prototype.isSameOrAfter=function(e,r){return this.isSame(e,r)||this.isAfter(e,r)}};var ys=Z(fs.exports),vs={exports:{}};vs.exports=function(e,r){r.prototype.isSameOrBefore=function(e,r){return this.isSame(e,r)||this.isBefore(e,r)}};var xs,ws,Fs=Z(vs.exports),$s={exports:{}};$s.exports=(xs={year:0,month:1,day:2,hour:3,minute:4,second:5},ws={},function(e,r,t){var n,i=function(e,r,t){void 0===t&&(t={});var n=new Date(e),i=function(e,r){void 0===r&&(r={});var t=r.timeZoneName||"short",n=e+"|"+t,i=ws[n];return i||(i=new Intl.DateTimeFormat("en-US",{hour12:!1,timeZone:e,year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit",timeZoneName:t}),ws[n]=i),i}(r,t);return i.formatToParts(n)},o=function(e,r){for(var n=i(e,r),o=[],s=0;s<n.length;s+=1){var a=n[s],l=a.type,d=a.value,c=xs[l];c>=0&&(o[c]=parseInt(d,10))}var u=o[3],g=24===u?0:u,h=o[0]+"-"+o[1]+"-"+o[2]+" "+g+":"+o[4]+":"+o[5]+":000",b=+e;return(t.utc(h).valueOf()-(b-=b%1e3))/6e4},s=r.prototype;s.tz=function(e,r){void 0===e&&(e=n);var i=this.utcOffset(),o=this.toDate(),s=o.toLocaleString("en-US",{timeZone:e}),a=Math.round((o-new Date(s))/1e3/60),l=t(s,{locale:this.$L}).$set("millisecond",this.$ms).utcOffset(15*-Math.round(o.getTimezoneOffset()/15)-a,!0);if(r){var d=l.utcOffset();l=l.add(i-d,"minute")}return l.$x.$timezone=e,l},s.offsetName=function(e){var r=this.$x.$timezone||t.tz.guess(),n=i(this.valueOf(),r,{timeZoneName:e}).find((function(e){return"timezonename"===e.type.toLowerCase()}));return n&&n.value};var a=s.startOf;s.startOf=function(e,r){if(!this.$x||!this.$x.$timezone)return a.call(this,e,r);var n=t(this.format("YYYY-MM-DD HH:mm:ss:SSS"),{locale:this.$L});return a.call(n,e,r).tz(this.$x.$timezone,!0)},t.tz=function(e,r,i){var s=i&&r,a=i||r||n,l=o(+t(),a);if("string"!=typeof e)return t(e).tz(a);var d=function(e,r,t){var n=e-60*r*1e3,i=o(n,t);if(r===i)return[n,r];var s=o(n-=60*(i-r)*1e3,t);return i===s?[n,i]:[e-60*Math.min(i,s)*1e3,Math.max(i,s)]}(t.utc(e,s).valueOf(),l,a),c=d[0],u=d[1],g=t(c).utcOffset(u);return g.$x.$timezone=a,g},t.tz.guess=function(){return Intl.DateTimeFormat().resolvedOptions().timeZone},t.tz.setDefault=function(e){n=e}});var Es,Ds=Z($s.exports);gs.extend(ps),gs.extend(Fs),gs.extend(ys),gs.extend(bs),gs.extend(Ds),function(e){e.generateDays=e=>{const r=e.startOf("month"),t=gs(r).startOf("week");return Cs(t).map((e=>Bs(e)))},e.generateDaysForCurrentWeek=e=>{const r=e.startOf("week");return Bs(r)},e.generateMonths=e=>{const r=[];for(let t=0;t<12;t++){const n=e.month(t);r.push(gs(n))}return r},e.generateDecadeOfYears=e=>{const r=e.year(),t=10*Math.floor(r/10),n=e.year(t),i=[n.subtract(1,"year"),n];for(let e=1;e<11;e++)i.push(n.add(e,"year"));return i},e.getStartEndDecade=e=>{const r=10*Math.floor(+e.format("YYYY")/10);return{beginDecade:r,endDecade:+gs(`${r+9}-01-01`).format("YYYY")}},e.convertTo12HourFormat=e=>{const r=gs(e,"HH:mm");return r.isValid()?r.format("h:mm a"):""},e.isWithinRange=(e,r,t,n="day")=>!r&&!t||(r&&t?e.isBetween(r,t,n,"[]"):r?e.isSameOrAfter(r,n):e.isSameOrBefore(t,n)),e.isPreviousMonthWithinRange=(r,t)=>e.isWithinRange(r.subtract(1,"month"),t,void 0,"month"),e.isPreviousYearWithinRange=(r,t)=>e.isWithinRange(r.subtract(1,"year"),t,void 0,"year"),e.isPreviousDecadeWithinRange=(r,t)=>{const{beginDecade:n}=e.getStartEndDecade(r);return e.isWithinRange(r.year(n).subtract(1,"year"),t,void 0,"year")},e.isNextMonthWithinRange=(r,t)=>e.isWithinRange(r.add(1,"month"),void 0,t,"month"),e.isNextYearWithinRange=(r,t)=>e.isWithinRange(r.add(1,"year"),void 0,t,"year"),e.isNextDecadeWithinRange=(r,t)=>{const{endDecade:n}=e.getStartEndDecade(r);return e.isWithinRange(r.year(n).add(1,"year"),void 0,t,"year")},e.getWeekStartEnd=e=>({start:e.startOf("week").format("YYYY-MM-DD"),end:e.endOf("week").format("YYYY-MM-DD")}),e.getFixedRangeStartEnd=(e,r)=>({start:e.format("YYYY-MM-DD"),end:e.add(r-1,"day").format("YYYY-MM-DD")}),e.isDisabledDay=(r,t,n,i)=>{const o=e.isWithinRange(r,n?gs(n):void 0,i?gs(i):void 0),s=t&&t.includes(r.format("YYYY-MM-DD"));return!o||!!s}}(Es||(Es={}));const Cs=e=>{const r=[e];for(let t=1;t<6;t++){const n=e.add(t,"week");r.push(n)}return r},Bs=e=>{const r=[];for(let t=0;t<7;t++){const n=e.add(t,"day");r.push(n)}return r},Ss=[1,3,5,7,8,10,12],ks=[4,6,9,11];var As,zs,Os;!function(e){e.clampDay=(r,t,n)=>{const i=parseInt(r),o=parseInt(t),s=parseInt(n);return 0==i?"1":Ss.includes(o)?Math.min(i,31).toString():ks.includes(o)?Math.min(i,30).toString():2===o?e.isLeapYear(s)?Math.min(i,29).toString():Math.min(i,28).toString():r},e.clampMonth=e=>{const r=parseInt(e);return 0==r?"1":r>12?"12":e},e.isLeapYear=e=>e%4==0&&e%100!=0||e%400==0,e.getTimeDiffInMinutes=(e,r,t="HH:mm")=>{const n=gs(e,t);return gs(r,t).diff(n,"minute")},e.toDayjs=e=>e?gs(e):gs(),e.addMinutesToTime=(e,r,t="HH:mm")=>gs(e,t).add(r,"minutes").format(t),e.isSame=(e,r,t="day")=>gs(e).isSame(gs(r),t)}(As||(As={})),function(e){e.isDateDisabled=(e,r)=>{const{disabledDates:t,minDate:n,maxDate:i}=r;return!!(e&&t&&t.length&&t.includes(e))||(!(!n||!gs(e).isBefore(n,"day"))||!(!i||!gs(e).isAfter(i,"day")))},e.sanitizeInput=e=>{if(e){if(gs(e).isValid())return e}return""}}(zs||(zs={})),function(e){e.generate=()=>Math.random().toString(36).substring(2,9)}(Os||(Os={}));const Ms=e=>"small"===e?2.5:3;y.div`
    position: relative;
    width: 100%;
    ${e=>{const r=Ms(e.$variant);return v`
            min-height: ${r}rem;
            height: ${r}rem; // Need this to persist the height when expanding or collapsing list
        `}}
`;const _s=v`
    display: flex;
    position: relative;
    align-items: center;
    justify-content: space-between;
    padding: 0 ${An["spacing-16"]};
    // exclude top and bottom borders
    height: calc(${e=>Ms(e.$variant)}rem - 2px);
    width: 100%;
    border-radius: ${zn.sm};
    border: none;
    background: transparent;

    &:focus,
    &:active {
        outline: none;
    }

    &:focus-visible {
        outline: 2px solid ${Cn["border-focus"]};
    }
`,Ts=y.button`
    ${_s}
    cursor: pointer;
`;y.div`
    ${_s}
`;const Ls=x`
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
`;y.div`
    position: relative;
    border: ${kn["width-010"]} ${kn.solid} ${Cn.border};
    border-radius: ${zn.sm};
    background: ${Cn.bg};
    overflow: hidden;

    &:focus-within {
        border-color: ${Cn["border-focus"]};
        box-shadow: 0px 0px 4px 0px
            rgb(from ${Cn["border-focus"]} r g b / 50%) inset; // TODO: confirm shadow
    }

    ${e=>e.$expanded?v`
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                z-index: 2;
            `:v`
                animation: ${Ls} 0.5s ease-in-out;
            `}

    ${e=>e.$disabled?v`
                background: ${Cn["bg-disabled"]};

                ${Ts} {
                    cursor: not-allowed;
                }

                &:focus-within {
                    border-color: ${Cn.border};
                    box-shadow: none;
                }
            `:e.$readOnly?v`
                border: none;
                background: transparent !important;

                ${Ts} {
                    padding: 0;
                }

                &:focus-within {
                    border: none;
                    box-shadow: none;
                }
            `:e.$error?v`
                border-color: ${Cn["border-error"]};

                &:focus-within {
                    border-color: ${Cn["border-error"]};
                    box-shadow: 0px 0px 4px 0px
                        rgb(from ${Cn["border-error"]} r g b / 50%) inset; // TODO: confirm shadow
                }
            `:void 0}
`,y.div`
    transform: rotate(${e=>e.$expanded?180:0}deg);
    transition: transform ${Sn["duration-250"]} ${Sn["ease-default"]};
    margin-left: ${An["spacing-16"]};
`,y(F)`
    color: ${Cn.icon};
`,y.div`
    height: 1px;
    background: ${Cn.border};
    margin: 0 ${An["spacing-8"]};
`;const js=y.div`
    display: flex;
    flex: 1;
    word-break: break-all;
    ${e=>{if(e.$disabled)return v`
                color: ${Cn["text-disabled"]};
            `}}
`;var Rs;y(y.div`
    ${e=>"small"===e.$variant?Bn["body-md-regular"]:Bn["body-baseline-regular"]}
    text-align: left;
    ${e=>{if("middle"!==e.$truncateType)return v`
                    ${Nn(1)}
                `}}
    overflow: hidden;
`)`
    color: ${Cn["text-subtler"]};
`,function(e){e.Ready="overlay-context-ready",e.Change="overlay-context-change"}(Rs||(Rs={}));const Ps=e=>"right"===e?"bottom-end":"bottom-start",Ys=b({elementWidth:0,styles:{},setFloatingRef:()=>{},getFloatingProps:()=>({})}),Is=({enabled:n,isOpen:i,onOpen:a,onClose:d,onDismiss:c,renderElement:u,renderDropdown:g,customZIndex:h,clickToToggle:b=!1,offset:p=0,alignment:f="left",fitAvailableHeight:y,rootNode:v})=>{var x;const F=m(w),j=Mn["sm-max"]({theme:F}),R=l(null),{width:P=0}=function(e){void 0===e&&(e={});var r=e.skipOnMount,t=void 0!==r&&r,n=e.refreshMode,i=e.refreshRate,s=void 0===i?1e3:i,a=e.refreshOptions,d=e.handleWidth,c=void 0===d||d,u=e.handleHeight,g=void 0===u||u,h=e.targetRef,b=e.observerOptions,m=e.onResize,p=l(t),f=l(null),y=null!=h?h:f,v=l(),x=o({width:void 0,height:void 0}),w=x[0],F=x[1];return po((function(){if(!go()){var e=bo(m,F,c,g);v.current=co((function(r){(c||g)&&r.forEach((function(r){var t=r&&r.contentRect||{},n=t.width,i=t.height;!p.current&&!go()&&e({width:n,height:i}),p.current=!1}))}),n,s,a);var r=new window.ResizeObserver(v.current);return y.current&&r.observe(y.current,b),function(){r.disconnect();var e=v.current;e&&e.cancel&&e.cancel()}}}),[n,s,a,c,g,m,b,y.current]),Fi({ref:y},w)}({targetRef:R,handleHeight:!1}),Y={name:"center",fn:({x:e,rects:r})=>{const t=0===e||e+r.floating.width===window.innerWidth,n=window.innerWidth<j;return{x:t&&n?(window.innerWidth-r.floating.width)/2:e}}},{refs:I,floatingStyles:H,context:W}=E({open:i,onOpenChange:(e,r,t)=>{"escape-key"===t?null==c||c():e&&!i?null==a||a():!e&&i&&(null==d||d(t))},whileElementsMounted:D,placement:Ps(f),middleware:[C(p),B(),S({limiter:k()}),A({apply({availableHeight:e,elements:r}){!y||e>=r.floating.scrollHeight?r.floating.style.setProperty("--available-height",""):r.floating.style.setProperty("--available-height",`${Math.max(0,e)}px`)}}),Y]}),N=(()=>{const[e,r]=o(void 0),t=$();return s((()=>{if(!t)return void r(void 0);const e=e=>{r(e.zIndex)};return t.events.on(Rs.Change,e),t.events.emit(Rs.Ready),()=>t.events.off(Rs.Change,e)}),[t]),e})(),{isMounted:V,styles:K}=z(W,{initial:{opacity:0},open:{opacity:1},duration:300}),U=O(W,{enabled:n,toggle:b}),Z=M(W,{enabled:n}),{getReferenceProps:X,getFloatingProps:q}=_([U,Z]),J={elementWidth:P,styles:Object.assign(Object.assign(Object.assign({},K),H),{zIndex:null!==(x=null!=h?h:N)&&void 0!==x?x:50}),setFloatingRef:I.setFloating,getFloatingProps:q};return r(t,{children:[e("div",Object.assign({ref:e=>{R.current=e,I.setReference(e)}},X(),{children:u()})),V&&e(T,{root:v,children:e(L,{context:W,modal:!1,initialFocus:-1,returnFocus:!1,children:e(Ys.Provider,{value:J,children:g(J)})})})]})},Hs=i.createContext({focusedIndex:-1,setFocusedIndex:()=>{}}),Ws=({children:r})=>{const[t,n]=o(-1);return e(Hs.Provider,{value:{focusedIndex:t,setFocusedIndex:n},children:r})},Ns=y.div`
    display: inline-block;
    position: relative;
    width: ${({$size:e})=>e?`${e}px`:"1em"};
    height: ${({$size:e})=>e?`${e}px`:"1em"};
    color: ${e=>e.$color||"currentColor"};
`,Vs=x`
	0% {
	  transform: rotate(0deg);
	}
	100% {
	  transform: rotate(360deg);
	}
`,Ks=y.div`
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
    animation: ${Vs} 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
`,Us=y(Ks)`
    animation-delay: -0.45s;
`,Zs=y(Ks)`
    animation-delay: -0.3s;
`,Xs=y(Ks)`
    animation-delay: -0.15s;
`,qs=({color:t,className:n,size:i})=>r(Ns,{className:n,$size:i,$color:t,"data-testid":"component-loading-spinner",children:[e(Ks,{id:"inner1"}),e(Us,{id:"inner2"}),e(Zs,{id:"inner3"}),e(Xs,{id:"inner4"})]}),Js=v`
    outline-offset: -1px;
    outline: ${kn["width-020"]} ${kn.solid} ${Cn["border-focus"]};
`,Gs=v`
    outline-color: ${Cn["border-focus"]};
`,Qs=v`
    outline-color: ${Cn["border-disabled"]};
`,ea=v`
    outline-color: ${Cn["border-error-focus"]};
`,ra=y.div`
    border: ${kn["width-010"]} ${kn.solid} ${Cn.border};
    border-radius: ${zn.sm};
    background: ${Cn.bg};

    &:focus-within {
        ${Js}
    }
    ${e=>e.$focused&&Js}

    ${e=>e.$readOnly?v`
                border-color: transparent;
                padding: 0;
                background: transparent !important;

                &:focus-within {
                    ${Gs}
                }
                ${e.$focused&&Gs}
            `:e.$disabled?v`
                background: ${Cn["bg-disabled"]};
                cursor: not-allowed;

                &:focus-within {
                    ${Qs}
                }
                ${e.$focused&&Qs}
            `:e.$error?v`
                border-color: ${Cn["border-error"]};

                &:focus-within {
                    ${ea}
                }
                ${e.$focused&&ea}
            `:void 0}
`;y(ra)`
    display: flex;
    align-items: center;
    position: relative;
    height: max-content;
    width: 100%;
    padding: 0 ${An["spacing-16"]};
    flex-direction: ${e=>"right"===e.$position?"row-reverse":"row"};
`;const ta=y.input`
    ${e=>"small"===e.$variant?Bn["body-md-regular"]:Bn["body-baseline-regular"]}
    color: ${Cn.text};
    display: block;
    background: transparent;
    border: none;
    outline: none;
    box-shadow: none;
    padding: 0;
    margin: 0;

    &:disabled {
        color: ${Cn["text-subtler"]};

        &:hover {
            cursor: not-allowed;
        }
    }

    &::placeholder,
    &::-webkit-input-placeholder {
        color: ${Cn["text-subtler"]};
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
`,na=y.button`
    background: transparent;
    border: none;
    outline: none;

    &:focus,
    &:active {
        outline: none;
    }

    &:focus-visible {
        outline: ${kn["width-010"]} ${kn.solid}
            ${Cn["border-focus"]};
        border-radius: ${zn.sm};
    }
`;y.div`
    border: ${kn["width-010"]} ${kn.solid} ${Cn.border};
    border-radius: ${zn.sm};
    background: ${Cn.bg};

    ${e=>e.$customWidth?`width: ${e.$customWidth};`:e.$width?`width: ${e.$width}px; min-width: 23rem;`:"min-width: 23rem;"}
    max-height: min(27rem, var(--available-height, infinity * 1px));
    overflow: hidden;
    overflow-y: auto;
    ${e=>"small"===e.$variant?Bn["body-md-regular"]:Bn["body-baseline-regular"]}

    ${_n.MaxWidth.sm} {
        min-width: unset;
        width: calc(100vw - ${Mn["sm-margin"]} * 2);
        max-height: 15rem;
    }

    ${_n.MaxWidth.xs} {
        width: calc(100vw - ${Mn["xs-margin"]} * 2);
    }

    ${_n.MaxWidth.xxs} {
        width: calc(100vw - ${Mn["xxs-margin"]} * 2);
    }

    &::-webkit-scrollbar {
        width: 14px;
    }

    &::-webkit-scrollbar-track {
        background: transparent;
    }

    &::-webkit-scrollbar-thumb {
        background: ${Cn["bg-inverse-subtlest"]};
        border: 5px solid transparent;
        border-radius: ${zn.full};
        background-clip: padding-box;
    }
`,y.div`
    background: transparent;
    padding: ${An["spacing-8"]};
`,y.ul`
    list-style-type: none;
`,y.li`
    display: flex;
    align-items: flex-start;
    gap: ${An["spacing-8"]};
    padding: ${An["spacing-12"]} ${An["spacing-8"]};
    cursor: pointer;
    border: none;
    border-radius: ${zn.none};
    outline: none;

    ${e=>e.$disabled?v`
                cursor: not-allowed;
            `:e.$active&&e.$selected?v`
                background: ${Cn["bg-hover"]};
            `:e.$active?v`
                background: ${Cn["bg-hover-subtle"]};
            `:void 0}
`,y(H)`
    flex-shrink: 0;
    height: 1lh;
    width: 1rem;
    color: ${Cn["icon-selected"]};
`,y.div`
    flex-shrink: 0;
    height: 1lh;
    width: 1rem;
`,y(I)`
    flex-shrink: 0;
    height: 1lh;
    width: 1lh;
    color: ${Cn["icon-selected"]};
`,y(P)`
    flex-shrink: 0;
    height: 1lh;
    width: 1lh;
    color: ${Cn["icon-primary-subtlest"]};
`,y(Y)`
    flex-shrink: 0;
    height: 1lh;
    width: 1lh;
    color: ${Cn["icon-disabled-subtle"]};
`,y.div`
    width: 100%;
    display: flex;
    justify-content: flex-end;
`;const ia=y(na)`
    cursor: pointer;
    overflow: hidden;
    color: ${Cn["text-primary"]};
    font-size: inherit;
`;y(ia)`
    ${Bn["body-baseline-semibold"]}
`,y(ia)`
    ${Bn["body-md-semibold"]}
    padding: ${An["spacing-8"]} ${An["spacing-8"]};
`,y.div`
    width: 100%;
    display: flex;
    padding: ${An["spacing-12"]} ${An["spacing-16"]};
    align-items: center;
`,y(R)`
    margin-right: ${An["spacing-4"]};
    color: ${Cn["icon-error"]};
    height: 1em;
    width: 1em;
`,y(qs)`
    margin-right: ${An["spacing-8"]};
    color: ${Cn.icon};
`,y.div`
    ${(e=>{const{textSize:r}=e||{};return v`
        // Text styling
        ${r&&Bn[`${r}-regular`]}

        strong {
            font-weight: ${Bn.Spec["weight-semibold"]};
            ${r&&Bn[`${r}-semibold`]};
        }

        p {
            margin: 0;
        }

        // Link styling
        a {
            font-weight: ${Bn.Spec["weight-semibold"]};
            ${r&&Bn[`${r}-semibold`]}
            color: ${Cn.hyperlink};
            text-decoration: none;

            svg {
                color: ${Cn["icon-primary"]};
                height: 1lh;
                width: 1em;
                margin-left: 0.4rem;
                vertical-align: middle;
            }

            &:hover,
            &:active,
            &:visited,
            &:focus {
                color: ${Cn["hyperlink-hover"]};

                svg {
                    color: ${Cn["icon-hover"]};
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
    `})()}
    color: ${Cn["text-subtle"]};
    padding: 0 ${An["spacing-16"]} ${An["spacing-12"]}
        ${An["spacing-16"]};
`;const oa=y.button`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: ${An["spacing-24"]};
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

        ${({$highlight:e})=>e&&v`
                background-color: ${Cn["bg-hover-neutral"]};
            `}
    }
`,sa=i.forwardRef(((r,t)=>{var{children:n,focusHighlight:i=!0,focusOutline:o="none",type:s="button"}=r,a=K(r,["children","focusHighlight","focusOutline","type"]);return e(oa,Object.assign({ref:t,$outline:o,$highlight:i,type:s},a,{children:n}))})),aa=y.div`
    background: ${Cn["bg-strong"]};
    border-radius: ${zn.sm};
    display: flex;
    align-items: center;

    ${e=>"small"===e.$variant?Bn["body-md-regular"]:Bn["body-baseline-regular"]}
`,la=y.label`
    flex: 1;
    display: flex;
    align-items: center;
    gap: ${An["spacing-8"]};
    padding: ${e=>"small"===e.$variant?v`
                  ${An["spacing-8"]} ${An["spacing-16"]}
              `:v`10px ${An["spacing-16"]}`};
`,da=y(ta)`
    flex: 1;
`,ca=y(N)`
    color: ${Cn.icon};
    flex-shrink: 0;
    height: 1em;
    width: 1em;
`,ua=y(sa)`
    flex-shrink: 0;
    align-self: stretch;
    box-sizing: content-box;
    padding: ${An["spacing-8"]};
    margin-left: -${An["spacing-8"]};
    color: ${Cn.icon};
    cursor: pointer;
    font-size: inherit;

    svg {
        flex-shrink: 0;
        height: 1em;
        width: 1em;
    }
`;p(((t,n)=>{var{value:i,variant:o,onClear:s}=t,a=K(t,["value","variant","onClear"]);return r(aa,{$variant:o,children:[r(la,{$variant:o,children:[e(ca,{"aria-hidden":!0}),e(da,Object.assign({ref:n,value:i,$variant:o},a))]}),i&&e(ua,{"aria-label":"Clear search",focusOutline:"browser",onClick:s,children:e(W,{"aria-hidden":!0})})]})}));const ga=y(na)`
    display: flex;
    align-items: center;
    gap: ${An["spacing-8"]};
    width: 100%;
    height: calc(3rem - 2px); // exclude top and bottom borders
    padding: ${An["spacing-16"]};

    ${e=>"small"===e.$variant?Bn["body-md-regular"]:Bn["body-baseline-regular"]}

    &:disabled {
        cursor: not-allowed;
    }
`,ha=y.div`
    display: flex;
    align-items: center;
    transform: rotate(${e=>e.$expanded?180:0}deg);
    transition: transform ${Sn["duration-250"]} ${Sn["ease-default"]};

    svg {
        color: ${Cn.icon};
        height: 1em;
        width: 1em;
    }
`,ba=p((({children:t,disabled:n,expanded:i,listboxId:o,popupRole:s,readOnly:a,variant:l},d)=>r(ga,{ref:d,type:"button","aria-expanded":i,"aria-haspopup":s,"data-testid":"selector",disabled:n,"aria-controls":o,$variant:l,children:[t,!a&&e(ha,{$expanded:i,$variant:l,children:e(F,{"aria-hidden":!0})})]}))),ma={Button:{"button-radius":fn.md,"button-default-colour-bg":Kt["bg-primary"],"button-default-colour-bg-hover":Kt["bg-primary-hover"],"button-default-colour-text":Kt["text-inverse"],"button-secondary-colour-border":Kt["border-primary"],"button-secondary-colour-text":Kt["text-primary"],"button-light-colour-text":Kt["text-primary"],"button-link-colour-text":Kt["text-primary"]}},pa={collections:{default:{Button:{"button-radius":fn.sm,"button-default-colour-bg":Kt["bg-primary"],"button-default-colour-bg-hover":Kt["bg-primary-hover"],"button-default-colour-text":Kt["text-inverse"],"button-secondary-colour-border":Kt["border-primary"],"button-secondary-colour-text":Kt["text-primary"],"button-light-colour-text":Kt["text-primary"],"button-link-colour-text":Kt["text-primary"]}},pa:{Button:{"button-radius":fn.full,"button-default-colour-bg":Kt["bg-primary"],"button-default-colour-bg-hover":Kt["bg-primary-hover"],"button-default-colour-text":Kt["text-inverse"],"button-secondary-colour-border":Kt["border-primary"],"button-secondary-colour-text":Kt["text-primary"],"button-light-colour-text":Kt["text-primary"],"button-link-colour-text":Kt["text-primary"]}},a11yplayground:ma},defaultValue:"default"},fa=(e,r)=>t=>{var n,i;const o=t.theme,s=xt(pa,null==o?void 0:o.componentScheme);return ya((null===(i=null===(n=null==o?void 0:o.componentOverrides)||void 0===n?void 0:n[e])||void 0===i?void 0:i[r])||s[e][r],t)},ya=(e,r)=>{switch(typeof e){case"function":return e(r);case"number":return e+"px";case"string":return e}},va=fa("Button","button-radius"),xa=fa("Button","button-default-colour-bg"),wa=fa("Button","button-default-colour-bg-hover"),Fa=fa("Button","button-default-colour-text"),$a=fa("Button","button-secondary-colour-border"),Ea=fa("Button","button-secondary-colour-text"),Da=fa("Button","button-light-colour-text"),Ca=fa("Button","button-link-colour-text");y.button`
    padding: ${An["spacing-8"]} ${An["spacing-16"]};
    min-width: 4rem;
    border: ${kn["width-010"]} ${kn.solid} transparent;
    transition: all ${Sn["duration-250"]} ${Sn["ease-default"]};
    border-radius: ${va};
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;

    // -----------------------------------------------------------------------------
    // BUTTON STYLE + TEXT COLOR
    // -----------------------------------------------------------------------------
    ${e=>{switch(e.$buttonStyle){case"secondary":return v`
                    background-color: ${Cn.bg};
                    border-color: ${e.$buttonIsDanger?Cn["border-error-strong"]:$a};

                    color: ${e.$buttonIsDanger?Cn["text-error"]:Ea};

                    &:hover,
                    &:active {
                        @media (pointer: fine) {
                            background-color: ${Cn["bg-hover-neutral"]};
                        }
                    }
                `;case"light":return v`
                    background-color: ${Cn.bg};
                    border-color: ${Cn.border};

                    color: ${e.$buttonIsDanger?Cn["text-error"]:Da};

                    &:hover,
                    &:active {
                        @media (pointer: fine) {
                            background-color: ${Cn["bg-hover-neutral"]};
                        }
                    }
                `;case"link":return v`
                    background-color: transparent;

                    color: ${e.$buttonIsDanger?Cn["text-error"]:Ca};
                    &:hover,
                    &:active {
                        @media (pointer: fine) {
                            background-color: ${Cn["bg-hover-neutral"]};
                        }
                    }
                `;case"disabled":return v`
                    background-color: ${Cn["bg-disabled"]};

                    cursor: not-allowed;

                    &:hover {
                        box-shadow: none;
                    }

                    color: ${Cn["text-disabled"]};
                `;default:return v`
                    background-color: ${e.$buttonIsDanger?Cn["bg-error-strong"]:xa};

                    ${_n.MaxWidth.sm} {
                        width: 100%;
                    }

                    color: ${Fa};

                    &:hover,
                    &:active {
                        @media (pointer: fine) {
                            background-color: ${e.$buttonIsDanger?Cn["bg-error-strong-hover"]:wa};
                        }
                    }
                `}}}

    // -----------------------------------------------------------------------------
	// BUTTON SIZE + TEXT SIZE
	// -----------------------------------------------------------------------------
	${e=>{switch(e.$buttonSizeStyle){case"small":return v`
                    height: 2.5rem;
                    ${Bn["body-md-semibold"]}

                    ${_n.MaxWidth.xxs} {
                        height: auto;
                    }
                `;case"large":return v`
                    height: 4rem;
                    ${Bn["heading-md-semibold"]}

                    ${_n.MaxWidth.xxs} {
                        height: auto;
                    }
                `;default:return v`
                    height: 3rem;
                    ${Bn["heading-xs-semibold"]}

                    ${_n.MaxWidth.xxs} {
                        height: auto;
                    }
                `}}}
`,y(qs)`
    margin-right: 0.5rem;
`,y.li`
    display: ${e=>e.$visible?"flex":"none"};
`,y.div`
    flex: 1;
    display: flex;
    align-items: flex-start;
    gap: ${An["spacing-8"]};
    padding: ${An["spacing-12"]} ${An["spacing-8"]};
    cursor: ${e=>e.$toggleable?"default":"pointer"};
    overflow: hidden; // required for label to truncate properly
    border-radius: ${zn.none};
    outline: none;

    ${e=>e.$active&&v`
            background: ${Cn["bg-hover"]};
        `}
`,y.div`
    height: 1px;
    width: calc((1lh + ${An["spacing-8"]}) * ${e=>e.$level});
`,y.div`
    width: 1lh;
    height: 1lh;
    color: ${Cn["icon-primary"]};
    cursor: pointer;

    svg {
        width: 1lh;
        height: 1lh;
        transition: transform ${Sn["duration-350"]}
            ${Sn["ease-standard"]};

        ${e=>{if(e.$expanded)return v`
                    transform: rotate(90deg);
                `}}
    }
`,y.div`
    width: 1lh;
    height: 1lh;
    margin-right: ${An["spacing-8"]};
`,y.div`
    flex-shrink: 0;
    height: 1lh;
    width: ${e=>e.$hasNestedSiblings?"1lh":An["spacing-16"]};

    display: flex;
    justify-content: center;
`,y(V)`
    flex-shrink: 0;
    height: 1lh;
    width: 1lh;
    color: ${Cn["icon-selected"]};
`;const Ba=y.div`
    overflow: hidden;
    border: ${kn["width-010"]} ${kn.solid} ${Cn.border};
    border-radius: ${zn.sm};
    background: ${Cn.bg};
    padding: ${An["spacing-16"]};
    min-width: 23rem;

    ${_n.MaxWidth.sm} {
        min-width: unset;
        width: calc(100vw - ${Mn["sm-margin"]} * 2);
    }

    ${_n.MaxWidth.xs} {
        width: calc(100vw - ${Mn["xs-margin"]} * 2);
    }

    ${_n.MaxWidth.xxs} {
        width: calc(100vw - ${Mn["xxs-margin"]} * 2);
    }
`,Sa=y.div`
    display: flex;
    align-items: baseline;
`,ka=y.div`
    margin: 0 0.5rem;
    color: ${Cn.text};
`,Aa=y(y.div`
    ${e=>"small"===e.$variant?Bn["body-md-regular"]:Bn["body-baseline-regular"]}
    text-align: left;
    ${e=>{if("middle"!==e.$truncateType)return v`
                    ${Nn(1)}
                `}}
    overflow: hidden;
`)`
    color: ${Cn["text-subtler"]};
`,za=t=>{var{alignment:n="left",className:i,disabled:a,dropdownZIndex:d,error:c,histogramSlider:u,id:g,onBlur:h,onChange:b,onChangeEnd:m,optionTruncationType:p="end",placeholder:f="Select",rangeLabelPrefix:y,rangeLabelSuffix:v,readOnly:x,renderRangeLabel:w,value:F,dropdownRootNode:$}=t,E=K(t,["alignment","className","disabled","dropdownZIndex","error","histogramSlider","id","onBlur","onChange","onChangeEnd","optionTruncationType","placeholder","rangeLabelPrefix","rangeLabelSuffix","readOnly","renderRangeLabel","value","dropdownRootNode"]);const{interval:D,bins:C=[],renderEmptyView:B,ariaLabels:S}=u,k=C.map((e=>e.minValue)),A=Math.min(...k),[z,O]=o(U()),[M,_]=o(!1),[T,L]=o(!1),[j]=o((()=>Os.generate())),R=l(null),P=l(null),Y=l(null),I=E["data-testid"]||"select-histogram";s((()=>{F!==z&&O(U())}),[F]);const H=e=>{O(e),null==b||b(e)},W=e=>{O(e),null==m||m(e)},N=()=>{T||M||L(!0)},V=e=>{T&&!M&&R.current&&!R.current.contains(e.relatedTarget)&&(L(!1),null==h||h())};function U(){return null!=F?F:[A,A+D]}const Z=e=>w?w(e):r(Jn.BodyBL,{children:[y,e,v]});return e(Ws,{children:e(Is,{enabled:!x&&!a,isOpen:M,renderElement:()=>e(ra,{className:i,"data-testid":I,id:g,ref:R,tabIndex:-1,onFocus:N,onBlur:V,$focused:T,$disabled:a,$readOnly:x,$error:c,children:e(ba,{ref:P,disabled:a,expanded:M,listboxId:j,popupRole:"dialog",readOnly:x,variant:"default",children:e(js,{ref:Y,$disabled:a,children:k&&0!==k.length?r(Sa,{children:[Z(z[0]),e(ka,{children:"-"}),Z(z[1])]}):e(Aa,{$truncateType:p,$variant:"default",children:f})})})}),renderDropdown:({elementWidth:r,styles:t,setFloatingRef:n,getFloatingProps:i})=>e(Ba,Object.assign({style:Object.assign(Object.assign({},t),{width:r}),ref:n},i(),{children:e(xi,{interval:D,value:z,bins:C,onChange:H,onChangeEnd:W,showRangeLabels:!1,renderEmptyView:B,ariaLabels:S})})),onOpen:()=>{_(!0)},onClose:()=>{_(!1)},onDismiss:()=>{var e;null===(e=P.current)||void 0===e||e.focus(),_(!1)},clickToToggle:!0,offset:8,alignment:n,fitAvailableHeight:!0,customZIndex:d,rootNode:$})})};export{za as SelectHistogram};
//# sourceMappingURL=index.js.map
