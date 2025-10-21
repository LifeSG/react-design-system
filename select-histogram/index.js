import{jsx as e,jsxs as r,Fragment as n}from"react/jsx-runtime";import*as t from"react";import i,{useState as o,useEffect as s,useMemo as a,useRef as l,isValidElement as d,createRef as c,cloneElement as u,PureComponent as g,useLayoutEffect as h,createContext as b,useContext as m,forwardRef as p}from"react";import{ExternalIcon as f}from"@lifesg/react-icons/external";import y,{css as v,keyframes as x,ThemeContext as F}from"styled-components";import{ChevronDownIcon as w}from"@lifesg/react-icons/chevron-down";import{useFloatingTree as $,useFloating as E,autoUpdate as D,offset as C,flip as B,shift as S,limitShift as A,size as k,useTransitionStyles as z,useClick as O,useDismiss as M,useInteractions as _,FloatingPortal as T,FloatingFocusManager as L}from"@floating-ui/react";import{findDOMNode as j}from"react-dom";import{ExclamationCircleFillIcon as R}from"@lifesg/react-icons/exclamation-circle-fill";import{SquareIcon as P}from"@lifesg/react-icons/square";import{SquareFillIcon as Y}from"@lifesg/react-icons/square-fill";import{SquareTickFillIcon as I}from"@lifesg/react-icons/square-tick-fill";import{TickIcon as H}from"@lifesg/react-icons/tick";import{CrossIcon as W}from"@lifesg/react-icons/cross";import{MagnifierIcon as N}from"@lifesg/react-icons/magnifier";import"@lifesg/react-icons/caret-right";import{MinusSquareFillIcon as V}from"@lifesg/react-icons/minus-square-fill";function K(e,r){var n={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&r.indexOf(t)<0&&(n[t]=e[t]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(t=Object.getOwnPropertySymbols(e);i<t.length;i++)r.indexOf(t[i])<0&&Object.prototype.propertyIsEnumerable.call(e,t[i])&&(n[t[i]]=e[t[i]])}return n}"function"==typeof SuppressedError&&SuppressedError;var U="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};function Z(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var X=Array.isArray,q="object"==typeof U&&U&&U.Object===Object&&U,J=q,G="object"==typeof self&&self&&self.Object===Object&&self,Q=J||G||Function("return this")(),ee=Q.Symbol,re=ee,ne=Object.prototype,te=ne.hasOwnProperty,ie=ne.toString,oe=re?re.toStringTag:void 0;var se=function(e){var r=te.call(e,oe),n=e[oe];try{e[oe]=void 0;var t=!0}catch(e){}var i=ie.call(e);return t&&(r?e[oe]=n:delete e[oe]),i},ae=Object.prototype.toString;var le=se,de=function(e){return ae.call(e)},ce=ee?ee.toStringTag:void 0;var ue=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":ce&&ce in Object(e)?le(e):de(e)};var ge=function(e){return null!=e&&"object"==typeof e},he=ue,be=ge;var me=function(e){return"symbol"==typeof e||be(e)&&"[object Symbol]"==he(e)},pe=X,fe=me,ye=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,ve=/^\w*$/;var xe=function(e,r){if(pe(e))return!1;var n=typeof e;return!("number"!=n&&"symbol"!=n&&"boolean"!=n&&null!=e&&!fe(e))||(ve.test(e)||!ye.test(e)||null!=r&&e in Object(r))};var Fe=function(e){var r=typeof e;return null!=e&&("object"==r||"function"==r)},we=ue,$e=Fe;var Ee,De=function(e){if(!$e(e))return!1;var r=we(e);return"[object Function]"==r||"[object GeneratorFunction]"==r||"[object AsyncFunction]"==r||"[object Proxy]"==r},Ce=Q["__core-js_shared__"],Be=(Ee=/[^.]+$/.exec(Ce&&Ce.keys&&Ce.keys.IE_PROTO||""))?"Symbol(src)_1."+Ee:"";var Se=function(e){return!!Be&&Be in e},Ae=Function.prototype.toString;var ke=function(e){if(null!=e){try{return Ae.call(e)}catch(e){}try{return e+""}catch(e){}}return""},ze=De,Oe=Se,Me=Fe,_e=ke,Te=/^\[object .+?Constructor\]$/,Le=Function.prototype,je=Object.prototype,Re=Le.toString,Pe=je.hasOwnProperty,Ye=RegExp("^"+Re.call(Pe).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");var Ie=function(e,r){return null==e?void 0:e[r]},He=function(e){return!(!Me(e)||Oe(e))&&(ze(e)?Ye:Te).test(_e(e))},We=Ie;var Ne=function(e,r){var n=We(e,r);return He(n)?n:void 0},Ve=Ne(Object,"create"),Ke=Ve;var Ue=function(){this.__data__=Ke?Ke(null):{},this.size=0};var Ze=function(e){var r=this.has(e)&&delete this.__data__[e];return this.size-=r?1:0,r},Xe=Ve,qe=Object.prototype.hasOwnProperty;var Je=function(e){var r=this.__data__;if(Xe){var n=r[e];return"__lodash_hash_undefined__"===n?void 0:n}return qe.call(r,e)?r[e]:void 0},Ge=Ve,Qe=Object.prototype.hasOwnProperty;var er=function(e){var r=this.__data__;return Ge?void 0!==r[e]:Qe.call(r,e)},rr=Ve;var nr=function(e,r){var n=this.__data__;return this.size+=this.has(e)?0:1,n[e]=rr&&void 0===r?"__lodash_hash_undefined__":r,this},tr=Ue,ir=Ze,or=Je,sr=er,ar=nr;function lr(e){var r=-1,n=null==e?0:e.length;for(this.clear();++r<n;){var t=e[r];this.set(t[0],t[1])}}lr.prototype.clear=tr,lr.prototype.delete=ir,lr.prototype.get=or,lr.prototype.has=sr,lr.prototype.set=ar;var dr=lr;var cr=function(){this.__data__=[],this.size=0};var ur=function(e,r){return e===r||e!=e&&r!=r};var gr=function(e,r){for(var n=e.length;n--;)if(ur(e[n][0],r))return n;return-1},hr=gr,br=Array.prototype.splice;var mr=function(e){var r=this.__data__,n=hr(r,e);return!(n<0)&&(n==r.length-1?r.pop():br.call(r,n,1),--this.size,!0)},pr=gr;var fr=function(e){var r=this.__data__,n=pr(r,e);return n<0?void 0:r[n][1]},yr=gr;var vr=function(e){return yr(this.__data__,e)>-1},xr=gr;var Fr=function(e,r){var n=this.__data__,t=xr(n,e);return t<0?(++this.size,n.push([e,r])):n[t][1]=r,this},wr=cr,$r=mr,Er=fr,Dr=vr,Cr=Fr;function Br(e){var r=-1,n=null==e?0:e.length;for(this.clear();++r<n;){var t=e[r];this.set(t[0],t[1])}}Br.prototype.clear=wr,Br.prototype.delete=$r,Br.prototype.get=Er,Br.prototype.has=Dr,Br.prototype.set=Cr;var Sr=Br,Ar=Ne(Q,"Map"),kr=dr,zr=Sr,Or=Ar;var Mr=function(e){var r=typeof e;return"string"==r||"number"==r||"symbol"==r||"boolean"==r?"__proto__"!==e:null===e};var _r=function(e,r){var n=e.__data__;return Mr(r)?n["string"==typeof r?"string":"hash"]:n.map},Tr=_r;var Lr=function(e){var r=Tr(this,e).delete(e);return this.size-=r?1:0,r},jr=_r;var Rr=function(e){return jr(this,e).get(e)},Pr=_r;var Yr=function(e){return Pr(this,e).has(e)},Ir=_r;var Hr=function(e,r){var n=Ir(this,e),t=n.size;return n.set(e,r),this.size+=n.size==t?0:1,this},Wr=function(){this.size=0,this.__data__={hash:new kr,map:new(Or||zr),string:new kr}},Nr=Lr,Vr=Rr,Kr=Yr,Ur=Hr;function Zr(e){var r=-1,n=null==e?0:e.length;for(this.clear();++r<n;){var t=e[r];this.set(t[0],t[1])}}Zr.prototype.clear=Wr,Zr.prototype.delete=Nr,Zr.prototype.get=Vr,Zr.prototype.has=Kr,Zr.prototype.set=Ur;var Xr=Zr,qr=Xr;function Jr(e,r){if("function"!=typeof e||null!=r&&"function"!=typeof r)throw new TypeError("Expected a function");var n=function(){var t=arguments,i=r?r.apply(this,t):t[0],o=n.cache;if(o.has(i))return o.get(i);var s=e.apply(this,t);return n.cache=o.set(i,s)||o,s};return n.cache=new(Jr.Cache||qr),n}Jr.Cache=qr;var Gr=Jr;var Qr=function(e){var r=Gr(e,(function(e){return 500===n.size&&n.clear(),e})),n=r.cache;return r},en=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,rn=/\\(\\)?/g,nn=Qr((function(e){var r=[];return 46===e.charCodeAt(0)&&r.push(""),e.replace(en,(function(e,n,t,i){r.push(t?i.replace(rn,"$1"):n||e)})),r}));var tn=function(e,r){for(var n=-1,t=null==e?0:e.length,i=Array(t);++n<t;)i[n]=r(e[n],n,e);return i},on=X,sn=me,an=ee?ee.prototype:void 0,ln=an?an.toString:void 0;var dn=function e(r){if("string"==typeof r)return r;if(on(r))return tn(r,e)+"";if(sn(r))return ln?ln.call(r):"";var n=r+"";return"0"==n&&1/r==-1/0?"-0":n},cn=dn;var un=X,gn=xe,hn=nn,bn=function(e){return null==e?"":cn(e)};var mn=me;var pn=function(e,r){return un(e)?e:gn(e,r)?[e]:hn(bn(e))},fn=function(e){if("string"==typeof e||mn(e))return e;var r=e+"";return"0"==r&&1/e==-1/0?"-0":r};var yn=function(e,r){for(var n=0,t=(r=pn(r,e)).length;null!=e&&n<t;)e=e[fn(r[n++])];return n&&n==t?e:void 0};var vn=Z((function(e,r,n){var t=null==e?void 0:yn(e,r);return void 0===t?n:t}));const xn=(e,r,n)=>vn(n,r)||vn(e,r),Fn=(e,r)=>{const n=r||e.defaultValue;return vn(e.collections,n)},wn={collections:{default:{"width-005":.5,"width-010":1,"width-020":2,"width-040":4,solid:"solid"}},defaultValue:"default"},$n=e=>r=>{var n;const t=r.theme,i=Fn(wn,null==t?void 0:t.borderScheme);return(null===(n=null==t?void 0:t.overrides)||void 0===n?void 0:n.border)?`${xn(i,e,t.overrides.border)}px`:`${i[e]}px`},En={"width-005":$n("width-005"),"width-010":$n("width-010"),"width-020":$n("width-020"),"width-040":$n("width-040"),solid:(Dn="solid",e=>{var r;const n=e.theme,t=Fn(wn,null==n?void 0:n.borderScheme),i=(null===(r=null==n?void 0:n.overrides)||void 0===r?void 0:r.border)?xn(t,Dn,n.overrides.border):t[Dn];return"function"==typeof i?i(e):i})};var Dn;const Cn={"brand-10":"#2C0C0B","brand-20":"#4C1513","brand-30":"#6C1D1B","brand-40":"#922825","brand-50":"#BF3431","brand-60":"#F15D5A","brand-70":"#F69491","brand-80":"#FABAB7","brand-90":"#FCD7D2","brand-95":"#FFEBE7","brand-100":"#FFF6F4","primary-10":"#1A122C","primary-20":"#2F1F4D","primary-30":"#422D6E","primary-40":"#5B3D97","primary-50":"#7654BC","primary-60":"#9A82CD","primary-70":"#B7A7D8","primary-80":"#CFC5E5","primary-90":"#E3DDF0","primary-95":"#F0EDF7","primary-100":"#F9F8FC","secondary-10":"#0E1723","secondary-20":"#18293D","secondary-30":"#233A57","secondary-40":"#305078","secondary-50":"#4B6A8F","secondary-60":"#7B91A9","secondary-70":"#A1B1C3","secondary-80":"#C1CBD7","secondary-90":"#DBE1E8","secondary-95":"#EBEFF2","secondary-100":"#F7F8FA","neutral-10":"#161616","neutral-20":"#282828","neutral-30":"#393939","neutral-40":"#4E4E4E","neutral-50":"#686868","neutral-60":"#8E8E8E","neutral-70":"#AFAFB0","neutral-80":"#C7CACA","neutral-90":"#DDE1E2","neutral-95":"#EDEFEF","neutral-100":"#F9F9F9","success-10":"#081A0F","success-20":"#0E2D1B","success-30":"#154126","success-40":"#1C5A34","success-50":"#257645","success-60":"#44A068","success-70":"#64C189","success-80":"#80DCA5","success-90":"#B4ECCB","success-95":"#D5F6E2","success-100":"#EFFCF4","warning-10":"#221302","warning-20":"#3B2204","warning-30":"#543106","warning-40":"#744408","warning-50":"#98590C","warning-60":"#D07A13","warning-70":"#E4A244","warning-80":"#F5C26C","warning-90":"#FADBA6","warning-95":"#FCECD4","warning-100":"#FDF7F0","error-10":"#330505","error-20":"#550808","error-30":"#750C0C","error-40":"#9E130F","error-50":"#CB2213","error-60":"#DE6C6C","error-70":"#E89B9B","error-80":"#EFBEBE","error-90":"#F5D9D9","error-95":"#F9ECEC","error-100":"#FCF7F7","info-10":"#021824","info-20":"#032B3F","info-30":"#053D59","info-40":"#06547B","info-50":"#176E9B","info-60":"#5296BE","info-70":"#82B5DA","info-80":"#ACCFE7","info-90":"#CCE3F1","info-95":"#E3F1F8","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000","primary-inverse":"#FEAB10"},Bn={"brand-10":"#1F1221","brand-20":"#371F3B","brand-30":"#4E2C53","brand-40":"#6B3E73","brand-50":"#8D5197","brand-60":"#FF3399","brand-70":"#FF88C4","brand-80":"#FFB3D9","brand-90":"#FFD4E9","brand-95":"#FFE8F3","brand-100":"#FFF8FC","primary-10":"#1F1221","primary-20":"#371F3B","primary-30":"#4E2C53","primary-40":"#6B3E73","primary-50":"#8D5197","primary-60":"#B07DB7","primary-70":"#C7A3CC","primary-80":"#D9C2DD","primary-90":"#E9DBEB","primary-95":"#F3ECF4","primary-100":"#FAF7FA","secondary-10":"#2D091B","secondary-20":"#4D0F2E","secondary-30":"#6B1540","secondary-40":"#931D58","secondary-50":"#C02673","secondary-60":"#FF409F","secondary-70":"#FF88C4","secondary-80":"#FFB3D9","secondary-90":"#FFD4E9","secondary-95":"#FFE8F3","secondary-100":"#FFF8FC","neutral-10":"#161616","neutral-20":"#282828","neutral-30":"#393939","neutral-40":"#4E4E4E","neutral-50":"#686868","neutral-60":"#8E8E8E","neutral-70":"#AFAFB0","neutral-80":"#C7CACA","neutral-90":"#DDE1E2","neutral-95":"#EDEFEF","neutral-100":"#F9F9F9","success-10":"#081A0F","success-20":"#0E2D1B","success-30":"#154126","success-40":"#1C5A34","success-50":"#257645","success-60":"#44A068","success-70":"#64C189","success-80":"#80DCA5","success-90":"#B4ECCB","success-95":"#D5F6E2","success-100":"#EFFCF4","warning-10":"#221302","warning-20":"#3B2204","warning-30":"#543106","warning-40":"#744408","warning-50":"#98590C","warning-60":"#D07A13","warning-70":"#E4A244","warning-80":"#F5C26C","warning-90":"#FADBA6","warning-95":"#FCECD4","warning-100":"#FDF7F0","error-10":"#330505","error-20":"#550808","error-30":"#750C0C","error-40":"#9E130F","error-50":"#CB2213","error-60":"#DE6C6C","error-70":"#E89B9B","error-80":"#EFBEBE","error-90":"#F5D9D9","error-95":"#F9ECEC","error-100":"#FCF7F7","info-10":"#021824","info-20":"#032B3F","info-30":"#053D59","info-40":"#06547B","info-50":"#176E9B","info-60":"#5296BE","info-70":"#82B5DA","info-80":"#ACCFE7","info-90":"#CCE3F1","info-95":"#E3F1F8","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000","primary-inverse":"#FEAB10"},Sn={"brand-10":"#2C0C0B","brand-20":"#4C1513","brand-30":"#6C1D1B","brand-40":"#922825","brand-50":"#BF3431","brand-60":"#F15D5A","brand-70":"#F69491","brand-80":"#FABAB7","brand-90":"#FCD7D2","brand-95":"#FFEBE7","brand-100":"#FFF6F4","primary-10":"#001731","primary-20":"#002752","primary-30":"#003874","primary-40":"#004D9F","primary-50":"#1768BE","primary-60":"#3C91EC","primary-70":"#6CB4FF","primary-80":"#A5CDFF","primary-90":"#CFE1FE","primary-95":"#E8F0FE","primary-100":"#F7F9FF","secondary-10":"#131529","secondary-20":"#222547","secondary-30":"#2F3565","secondary-40":"#42498B","secondary-50":"#5B62A7","secondary-60":"#858CBD","secondary-70":"#A8ADCF","secondary-80":"#C6C9E0","secondary-90":"#DDDFEC","secondary-95":"#EDEEF5","secondary-100":"#F8F8FB","neutral-10":"#161616","neutral-20":"#282828","neutral-30":"#393939","neutral-40":"#4E4E4E","neutral-50":"#686868","neutral-60":"#8E8E8E","neutral-70":"#AFAFB0","neutral-80":"#C7CACA","neutral-90":"#DDE1E2","neutral-95":"#EDEFEF","neutral-100":"#F9F9F9","success-10":"#081A0F","success-20":"#0E2D1B","success-30":"#154126","success-40":"#1C5A34","success-50":"#257645","success-60":"#44A068","success-70":"#64C189","success-80":"#80DCA5","success-90":"#B4ECCB","success-95":"#D5F6E2","success-100":"#EFFCF4","warning-10":"#221302","warning-20":"#3B2204","warning-30":"#543106","warning-40":"#744408","warning-50":"#98590C","warning-60":"#D07A13","warning-70":"#E4A244","warning-80":"#F5C26C","warning-90":"#FADBA6","warning-95":"#FCECD4","warning-100":"#FDF7F0","error-10":"#330505","error-20":"#550808","error-30":"#750C0C","error-40":"#9E130F","error-50":"#CB2213","error-60":"#DE6C6C","error-70":"#E89B9B","error-80":"#EFBEBE","error-90":"#F5D9D9","error-95":"#F9ECEC","error-100":"#FCF7F7","info-10":"#021824","info-20":"#032B3F","info-30":"#053D59","info-40":"#06547B","info-50":"#176E9B","info-60":"#5296BE","info-70":"#82B5DA","info-80":"#ACCFE7","info-90":"#CCE3F1","info-95":"#E3F1F8","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000","primary-inverse":"#FEAB10"},An={"brand-10":"#2C0C0B","brand-20":"#4C1513","brand-30":"#6C1D1B","brand-40":"#922825","brand-50":"#BF3431","brand-60":"#F15D5A","brand-70":"#F69491","brand-80":"#FABAB7","brand-90":"#FCD7D2","brand-95":"#FFEBE7","brand-100":"#FFF6F4","primary-10":"#0011924","primary-20":"#032B40","primary-30":"#043D5A","primary-40":"#05547B","primary-50":"#096EA1","primary-60":"#2098D3","primary-70":"#5CB9E8","primary-80":"#8BD3F6","primary-90":"#BEE6FA","primary-95":"#E2F2FA","primary-100":"#F4FAFC","secondary-10":"#131529","secondary-20":"#222547","secondary-30":"#2F3565","secondary-40":"#42498B","secondary-50":"#5B62A7","secondary-60":"#858CBD","secondary-70":"#A8ADCF","secondary-80":"#C6C9E0","secondary-90":"#DDDFEC","secondary-95":"#EDEEF5","secondary-100":"#F8F8FB","neutral-10":"#161616","neutral-20":"#282828","neutral-30":"#393939","neutral-40":"#4E4E4E","neutral-50":"#686868","neutral-60":"#8E8E8E","neutral-70":"#AFAFB0","neutral-80":"#C7CACA","neutral-90":"#DDE1E2","neutral-95":"#EDEFEF","neutral-100":"#F9F9F9","success-10":"#081A0F","success-20":"#0E2D1B","success-30":"#154126","success-40":"#1C5A34","success-50":"#257645","success-60":"#44A068","success-70":"#64C189","success-80":"#80DCA5","success-90":"#B4ECCB","success-95":"#D5F6E2","success-100":"#EFFCF4","warning-10":"#221302","warning-20":"#3B2204","warning-30":"#543106","warning-40":"#744408","warning-50":"#98590C","warning-60":"#D07A13","warning-70":"#E4A244","warning-80":"#F5C26C","warning-90":"#FADBA6","warning-95":"#FCECD4","warning-100":"#FDF7F0","error-10":"#330505","error-20":"#550808","error-30":"#750C0C","error-40":"#9E130F","error-50":"#CB2213","error-60":"#DE6C6C","error-70":"#E89B9B","error-80":"#EFBEBE","error-90":"#F5D9D9","error-95":"#F9ECEC","error-100":"#FCF7F7","info-10":"#021824","info-20":"#032B3F","info-30":"#053D59","info-40":"#06547B","info-50":"#176E9B","info-60":"#5296BE","info-70":"#82B5DA","info-80":"#ACCFE7","info-90":"#CCE3F1","info-95":"#E3F1F8","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000","primary-inverse":"#FEAB10"},kn={"brand-10":"#001A19","brand-20":"#002D2B","brand-30":"#00413D","brand-40":"#005954","brand-50":"#00756F","brand-60":"#03A098","brand-70":"#55BFBA","brand-80":"#92D6D2","brand-90":"#BFE7E5","brand-95":"#DDF2F1","brand-100":"#F4FBFA","primary-10":"#09191D","primary-20":"#102B34","primary-30":"#173D49","primary-40":"#205666","primary-50":"#2A7086","primary-60":"#5D97A9","primary-70":"#8CB6C2","primary-80":"#B2CED6","primary-90":"#D1E2E7","primary-95":"#E8F0F3","primary-100":"#F7FAFB","secondary-10":"#001731","secondary-20":"#002752","secondary-30":"#003874","secondary-40":"#004D9F","secondary-50":"#5B62A7","secondary-60":"#858CBD","secondary-70":"#A8ADCF","secondary-80":"#C6C9E0","secondary-90":"#DDDFEC","secondary-95":"#EDEEF5","secondary-100":"#F8F8FB","neutral-10":"#161616","neutral-20":"#282828","neutral-30":"#393939","neutral-40":"#4E4E4E","neutral-50":"#686868","neutral-60":"#8E8E8E","neutral-70":"#AFAFB0","neutral-80":"#C7CACA","neutral-90":"#DDE1E2","neutral-95":"#EDEFEF","neutral-100":"#F9F9F9","success-10":"#081A0F","success-20":"#0E2D1B","success-30":"#154126","success-40":"#1C5A34","success-50":"#257645","success-60":"#44A068","success-70":"#64C189","success-80":"#80DCA5","success-90":"#B4ECCB","success-95":"#D5F6E2","success-100":"#EFFCF4","warning-10":"#221302","warning-20":"#3B2204","warning-30":"#543106","warning-40":"#744408","warning-50":"#98590C","warning-60":"#D07A13","warning-70":"#E4A244","warning-80":"#F5C26C","warning-90":"#FADBA6","warning-95":"#FCECD4","warning-100":"#FDF7F0","error-10":"#330505","error-20":"#550808","error-30":"#750C0C","error-40":"#9E130F","error-50":"#CB2213","error-60":"#DE6C6C","error-70":"#E89B9B","error-80":"#EFBEBE","error-90":"#F5D9D9","error-95":"#F9ECEC","error-100":"#FCF7F7","info-10":"#021824","info-20":"#032B3F","info-30":"#053D59","info-40":"#06547B","info-50":"#176E9B","info-60":"#5296BE","info-70":"#82B5DA","info-80":"#ACCFE7","info-90":"#CCE3F1","info-95":"#E3F1F8","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000","primary-inverse":"#FEAB10"},zn={"brand-10":"#881317","brand-20":"#B5191E","brand-30":"#B5040A","brand-40":"#D0333F","brand-50":"#DC666F","brand-60":"#E28087","brand-70":"#E7999F","brand-80":"#EDB3B7","brand-90":"#F3CCCF","brand-95":"#F9E6E7","brand-100":"#FCF2F3","primary-10":"#000000","primary-20":"#191919","primary-30":"#333333","primary-40":"#4D4D4D","primary-50":"#666666","primary-60":"#808080","primary-70":"#999999","primary-80":"#B3B3B3","primary-90":"#E6E6E6","primary-95":"#F7F7F7","primary-100":"#FFFFFF","secondary-10":"#19151D","secondary-20":"#2B2533","secondary-30":"#3E3649","secondary-40":"#564A64","secondary-50":"#6F637D","secondary-60":"#948B9F","secondary-70":"#B3ACBB","secondary-80":"#CCC8D2","secondary-90":"#E1DEE4","secondary-95":"#EFEEF1","secondary-100":"#F9F8F9","neutral-10":"#000000","neutral-20":"#191919","neutral-30":"#333333","neutral-40":"#4D4D4D","neutral-50":"#666666","neutral-60":"#808080","neutral-70":"#999999","neutral-80":"#B3B3B3","neutral-90":"#E6E6E6","neutral-95":"#F7F7F7","neutral-100":"#FFFFFF","success-10":"#081A0F","success-20":"#0E2D1B","success-30":"#154126","success-40":"#1C5A34","success-50":"#257645","success-60":"#44A068","success-70":"#64C189","success-80":"#80DCA5","success-90":"#B4ECCB","success-95":"#D5F6E2","success-100":"#EFFCF4","warning-10":"#221302","warning-20":"#3B2204","warning-30":"#543106","warning-40":"#744408","warning-50":"#98590C","warning-60":"#D07A13","warning-70":"#E4A244","warning-80":"#F5C26C","warning-90":"#FADBA6","warning-95":"#FCECD4","warning-100":"#FDF7F0","error-10":"#330505","error-20":"#550808","error-30":"#750C0C","error-40":"#9E130F","error-50":"#CB2213","error-60":"#DE6C6C","error-70":"#E89B9B","error-80":"#EFBEBE","error-90":"#F5D9D9","error-95":"#F9ECEC","error-100":"#FCF7F7","info-10":"#021824","info-20":"#032B3F","info-30":"#053D59","info-40":"#06547B","info-50":"#176E9B","info-60":"#5296BE","info-70":"#82B5DA","info-80":"#ACCFE7","info-90":"#CCE3F1","info-95":"#E3F1F8","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000","primary-inverse":"#FEAB10"},On={"brand-10":"#0E123A","brand-20":"#191E65","brand-30":"#232B90","brand-40":"#303BC5","brand-50":"#494CFF","brand-60":"#AD6EFF","brand-70":"#AEA4FF","brand-80":"#C5C4FF","brand-90":"#DDDCFF","brand-95":"#EDECFF","brand-100":"#F8F8FF","primary-10":"#10152B","primary-20":"#1C254B","primary-30":"#28356C","primary-40":"#38489A","primary-50":"#4D5AD7","primary-60":"#7487F2","primary-70":"#9AAAFC","primary-80":"#BDC7FD","primary-90":"#DADFFB","primary-95":"#ECEEFE","primary-100":"#F7F8FF","secondary-10":"#19151D","secondary-20":"#2B2533","secondary-30":"#3E3649","secondary-40":"#564A64","secondary-50":"#6F637D","secondary-60":"#948B9F","secondary-70":"#B3ACBB","secondary-80":"#CCC8D2","secondary-90":"#E1DEE4","secondary-95":"#EFEEF1","secondary-100":"#F9F8F9","neutral-10":"#161616","neutral-20":"#282828","neutral-30":"#393939","neutral-40":"#4E4E4E","neutral-50":"#686868","neutral-60":"#8E8E8E","neutral-70":"#AFAFB0","neutral-80":"#C7CACA","neutral-90":"#DDE1E2","neutral-95":"#EDEFEF","neutral-100":"#F9F9F9","success-10":"#081A0F","success-20":"#0E2D1B","success-30":"#154126","success-40":"#1C5A34","success-50":"#257645","success-60":"#44A068","success-70":"#64C189","success-80":"#80DCA5","success-90":"#B4ECCB","success-95":"#D5F6E2","success-100":"#EFFCF4","warning-10":"#221302","warning-20":"#3B2204","warning-30":"#543106","warning-40":"#744408","warning-50":"#98590C","warning-60":"#D07A13","warning-70":"#E4A244","warning-80":"#F5C26C","warning-90":"#FADBA6","warning-95":"#FCECD4","warning-100":"#FDF7F0","error-10":"#330505","error-20":"#550808","error-30":"#750C0C","error-40":"#9E130F","error-50":"#CB2213","error-60":"#DE6C6C","error-70":"#E89B9B","error-80":"#EFBEBE","error-90":"#F5D9D9","error-95":"#F9ECEC","error-100":"#FCF7F7","info-10":"#021824","info-20":"#032B3F","info-30":"#053D59","info-40":"#06547B","info-50":"#176E9B","info-60":"#5296BE","info-70":"#82B5DA","info-80":"#ACCFE7","info-90":"#CCE3F1","info-95":"#E3F1F8","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000","primary-inverse":"#FEAB10"},Mn={"brand-10":"#170F39","brand-20":"#281C62","brand-30":"#38268B","brand-40":"#4D34BF","brand-50":"#5735DF","brand-60":"#9986F9","brand-70":"#B2A5F8","brand-80":"#CDC2FA","brand-90":"#E2DCFC","brand-95":"#EFEDFE","brand-100":"#FAF8FD","primary-10":"#170F39","primary-20":"#281C62","primary-30":"#38268B","primary-40":"#4D34BF","primary-50":"#5735DF","primary-60":"#9986F9","primary-70":"#B2A5F8","primary-80":"#CDC2FA","primary-90":"#E2DCFC","primary-95":"#EFEDFE","primary-100":"#FAF8FD","secondary-10":"#251204","secondary-20":"#401F08","secondary-30":"#5B2C0B","secondary-40":"#7E3D0F","secondary-50":"#B04900","secondary-60":"#E26E1C","secondary-70":"#FF9445","secondary-80":"#FFBB8E","secondary-90":"#FFD9BF","secondary-95":"#FFECDF","secondary-100":"#FFF8F3","neutral-10":"#161616","neutral-20":"#282828","neutral-30":"#393939","neutral-40":"#4E4E4E","neutral-50":"#686868","neutral-60":"#8E8E8E","neutral-70":"#AFAFB0","neutral-80":"#C7CACA","neutral-90":"#DDE1E2","neutral-95":"#EDEFEF","neutral-100":"#F9F9F9","success-10":"#031B15","success-20":"#082D24","success-30":"#094134","success-40":"#0D5947","success-50":"#10755E","success-60":"#16A181","success-70":"#1EC59D","success-80":"#6FDDC2","success-90":"#AFECDE","success-95":"#D5F5ED","success-100":"#F1FCF9","warning-10":"#1F1500","warning-20":"#362500","warning-30":"#4D3501","warning-40":"#6A4801","warning-50":"#8B6001","warning-60":"#BF8301","warning-70":"#EAA102","warning-80":"#FFBF34","warning-90":"#FFDC8F","warning-95":"#FFEDC7","warning-100":"#FFF8EA","error-10":"#270F10","error-20":"#441B1B","error-30":"#612627","error-40":"#853535","error-50":"#AF4546","error-60":"#EC6162","error-70":"#F29696","error-80":"#F7BBBC","error-90":"#FAD8D8","error-95":"#FCEAEA","error-100":"#FEF7F7","info-10":"#0F1627","info-20":"#1B2745","info-30":"#273763","info-40":"#354D88","info-50":"#4665B3","info-60":"#618AF6","info-70":"#8DADFF","info-80":"#B4C9FF","info-90":"#D3DFFF","info-95":"#E9EFFF","info-100":"#F5F8FF",white:"#FFFFFF",black:"#000000","primary-inverse":"#FEAB10"},_n={"brand-10":"#0E113C","brand-20":"#191E67","brand-30":"#232A92","brand-40":"#233FC2","brand-50":"#135CEA","brand-60":"#378FFB","brand-70":"#71B3FD","brand-80":"#9DCFFE","brand-90":"#C1E5FF","brand-95":"#DCF1FF","brand-100":"#F3FAFF","primary-10":"#0E113C","primary-20":"#191E67","primary-30":"#232A92","primary-40":"#233FC2","primary-50":"#135CEA","primary-60":"#378FFB","primary-70":"#71B3FD","primary-80":"#9DCFFE","primary-90":"#C1E5FF","primary-95":"#DCF1FF","primary-100":"#F3FAFF","secondary-10":"#34001F","secondary-20":"#540033","secondary-30":"#730045","secondary-40":"#9D0054","secondary-50":"#C61C64","secondary-60":"#DE6792","secondary-70":"#EB96B6","secondary-80":"#F5BAD2","secondary-90":"#FCD5E3","secondary-95":"#FDEBF1","secondary-100":"#FDF6F9","neutral-10":"#161616","neutral-20":"#282828","neutral-30":"#393939","neutral-40":"#4E4E4E","neutral-50":"#686868","neutral-60":"#8E8E8E","neutral-70":"#AFAFB0","neutral-80":"#C7CACA","neutral-90":"#DDE1E2","neutral-95":"#EDEFEF","neutral-100":"#F9F9F9","success-10":"#081A0F","success-20":"#0E2D1B","success-30":"#154126","success-40":"#1C5A34","success-50":"#257645","success-60":"#44A068","success-70":"#64C189","success-80":"#80DCA5","success-90":"#B4ECCB","success-95":"#D5F6E2","success-100":"#EFFCF4","warning-10":"#221302","warning-20":"#3B2204","warning-30":"#543106","warning-40":"#744408","warning-50":"#98590C","warning-60":"#D07A13","warning-70":"#E4A244","warning-80":"#F5C26C","warning-90":"#FADBA6","warning-95":"#FCECD4","warning-100":"#FDF7F0","error-10":"#330505","error-20":"#550808","error-30":"#750C0C","error-40":"#9E130F","error-50":"#CB2213","error-60":"#DE6C6C","error-70":"#E89B9B","error-80":"#EFBEBE","error-90":"#F5D9D9","error-95":"#F9ECEC","error-100":"#FCF7F7","info-10":"#021824","info-20":"#032B3F","info-30":"#053D59","info-40":"#06547B","info-50":"#176E9B","info-60":"#5296BE","info-70":"#82B5DA","info-80":"#ACCFE7","info-90":"#CCE3F1","info-95":"#E3F1F8","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000","primary-inverse":"#FEAB10"},Tn={"brand-10":"#370009","brand-20":"#4E000D","brand-30":"#640011","brand-40":"#850017","brand-50":"#9B001A","brand-60":"#EF2D4E","brand-70":"#F692A3","brand-80":"#FAB9C4","brand-90":"#FCD7DD","brand-95":"#FDEAED","brand-100":"#FEF8F9","primary-10":"#1F102A","primary-20":"#2F193F","primary-30":"#3E2053","primary-40":"#562D71","primary-50":"#663587","primary-60":"#9370AA","primary-70":"#BCA7CB","primary-80":"#D3C5DC","primary-90":"#E5DDEB","primary-95":"#F2EEF5","primary-100":"#FAF9FB","secondary-10":"#201316","secondary-20":"#311D22","secondary-30":"#3F272C","secondary-40":"#58363D","secondary-50":"#684049","secondary-60":"#AF6A7A","secondary-70":"#F393A8","secondary-80":"#FFB6C6","secondary-90":"#FFD6DF","secondary-95":"#FFE9EE","secondary-100":"#FFF7F9","neutral-10":"#161616","neutral-20":"#222222","neutral-30":"#2D2D2D","neutral-40":"#3F3F3F","neutral-50":"#4B4B4B","neutral-60":"#7E7E7E","neutral-70":"#AFAFB0","neutral-80":"#C7CACA","neutral-90":"#DDE1E2","neutral-95":"#EDEFEF","neutral-100":"#F9F9F9","success-10":"#081917","success-20":"#0D2724","success-30":"#11332E","success-40":"#174740","success-50":"#1B554C","success-60":"#2D8C7E","success-70":"#46C2AF","success-80":"#89D8CC","success-90":"#BCE9E2","success-95":"#DAF3EF","success-100":"#F0FAF9","warning-10":"#241200","warning-20":"#371C00","warning-30":"#482500","warning-40":"#633300","warning-50":"#763C00","warning-60":"#C36400","warning-70":"#FF9524","warning-80":"#FFBD77","warning-90":"#FFD9B2","warning-95":"#FFEBD6","warning-100":"#FFF7F0","error-10":"#330505","error-20":"#4B0707","error-30":"#600909","error-40":"#810D0D","error-50":"#98110F","error-60":"#D7504C","error-70":"#E89B9B","error-80":"#EFBEBE","error-90":"#F5D9D9","error-95":"#F9ECEC","error-100":"#FCF7F7","info-10":"#021824","info-20":"#032537","info-30":"#043148","info-40":"#054462","info-50":"#065175","info-60":"#3985AF","info-70":"#82B5DA","info-80":"#ACCFE7","info-90":"#CCE3F1","info-95":"#E3F1F8","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000","primary-inverse":"#FEAB10"},Ln={collections:{lifesg:Sn,bookingsg:Cn,rbs:On,mylegacy:An,ccube:Bn,oneservice:kn,pa:zn,a11yplayground:Mn,supportgowhere:_n,imda:Tn},defaultValue:"lifesg"},jn={collections:{lifesg:Sn,bookingsg:Cn,rbs:On,mylegacy:An,ccube:Bn,oneservice:kn,pa:zn,a11yplayground:Mn,supportgowhere:_n,imda:Tn},defaultValue:"lifesg"},Rn=e=>r=>{var n;const t=r.theme,i="dark"===(null==t?void 0:t.colourMode),o=Fn(i?jn:Ln,null==t?void 0:t.colourScheme),s=i?"primitiveColourDark":"primitiveColour",a=null===(n=null==t?void 0:t.overrides)||void 0===n?void 0:n[s];return a?xn(o,e,a):o[e]},Pn={"brand-10":Rn("brand-10"),"brand-20":Rn("brand-20"),"brand-30":Rn("brand-30"),"brand-40":Rn("brand-40"),"brand-50":Rn("brand-50"),"brand-60":Rn("brand-60"),"brand-70":Rn("brand-70"),"brand-80":Rn("brand-80"),"brand-90":Rn("brand-90"),"brand-95":Rn("brand-95"),"brand-100":Rn("brand-100"),"primary-10":Rn("primary-10"),"primary-20":Rn("primary-20"),"primary-30":Rn("primary-30"),"primary-40":Rn("primary-40"),"primary-50":Rn("primary-50"),"primary-60":Rn("primary-60"),"primary-70":Rn("primary-70"),"primary-80":Rn("primary-80"),"primary-90":Rn("primary-90"),"primary-95":Rn("primary-95"),"primary-100":Rn("primary-100"),"secondary-10":Rn("secondary-10"),"secondary-20":Rn("secondary-20"),"secondary-30":Rn("secondary-30"),"secondary-40":Rn("secondary-40"),"secondary-50":Rn("secondary-50"),"secondary-60":Rn("secondary-60"),"secondary-70":Rn("secondary-70"),"secondary-80":Rn("secondary-80"),"secondary-90":Rn("secondary-90"),"secondary-95":Rn("secondary-95"),"secondary-100":Rn("secondary-100"),"neutral-10":Rn("neutral-10"),"neutral-20":Rn("neutral-20"),"neutral-30":Rn("neutral-30"),"neutral-40":Rn("neutral-40"),"neutral-50":Rn("neutral-50"),"neutral-60":Rn("neutral-60"),"neutral-70":Rn("neutral-70"),"neutral-80":Rn("neutral-80"),"neutral-90":Rn("neutral-90"),"neutral-95":Rn("neutral-95"),"neutral-100":Rn("neutral-100"),"success-10":Rn("success-10"),"success-20":Rn("success-20"),"success-30":Rn("success-30"),"success-40":Rn("success-40"),"success-50":Rn("success-50"),"success-60":Rn("success-60"),"success-70":Rn("success-70"),"success-80":Rn("success-80"),"success-90":Rn("success-90"),"success-95":Rn("success-95"),"success-100":Rn("success-100"),"warning-10":Rn("warning-10"),"warning-20":Rn("warning-20"),"warning-30":Rn("warning-30"),"warning-40":Rn("warning-40"),"warning-50":Rn("warning-50"),"warning-60":Rn("warning-60"),"warning-70":Rn("warning-70"),"warning-80":Rn("warning-80"),"warning-90":Rn("warning-90"),"warning-95":Rn("warning-95"),"warning-100":Rn("warning-100"),"error-10":Rn("error-10"),"error-20":Rn("error-20"),"error-30":Rn("error-30"),"error-40":Rn("error-40"),"error-50":Rn("error-50"),"error-60":Rn("error-60"),"error-70":Rn("error-70"),"error-80":Rn("error-80"),"error-90":Rn("error-90"),"error-95":Rn("error-95"),"error-100":Rn("error-100"),"info-10":Rn("info-10"),"info-20":Rn("info-20"),"info-30":Rn("info-30"),"info-40":Rn("info-40"),"info-50":Rn("info-50"),"info-60":Rn("info-60"),"info-70":Rn("info-70"),"info-80":Rn("info-80"),"info-90":Rn("info-90"),"info-95":Rn("info-95"),"info-100":Rn("info-100"),white:Rn("white"),black:Rn("black"),"primary-inverse":Rn("primary-inverse")},Yn={text:Rn("neutral-20"),"text-subtle":Rn("neutral-30"),"text-subtler":Rn("neutral-50"),"text-subtlest":Rn("neutral-60"),"text-primary":Rn("primary-50"),"text-hover":Rn("primary-40"),"text-selected":Rn("primary-50"),"text-selected-hover":Rn("primary-40"),"text-disabled":Rn("neutral-50"),"text-disabled-subtle":Rn("neutral-60"),"text-disabled-subtlest":Rn("neutral-80"),"text-selected-disabled":Rn("neutral-20"),"text-success":Rn("success-40"),"text-warning":Rn("warning-40"),"text-error":Rn("error-40"),"text-info":Rn("info-40"),"text-inverse":Rn("white"),icon:Rn("neutral-50"),"icon-subtle":Rn("neutral-60"),"icon-strongest":Rn("neutral-20"),"icon-primary":Rn("primary-50"),"icon-primary-subtle":Rn("primary-60"),"icon-primary-subtlest":Rn("primary-70"),"icon-hover":Rn("primary-40"),"icon-selected":Rn("primary-50"),"icon-selected-hover":Rn("primary-40"),"icon-disabled":Rn("neutral-50"),"icon-disabled-subtle":Rn("neutral-60"),"icon-selected-disabled":Rn("neutral-60"),"icon-success":Rn("success-50"),"icon-warning":Rn("warning-60"),"icon-error":Rn("error-50"),"icon-error-strong":Rn("error-40"),"icon-info":Rn("info-50"),"icon-inverse":Rn("white"),"icon-primary-inverse":Rn("primary-inverse"),border:Rn("neutral-90"),"border-strong":Rn("neutral-70"),"border-stronger":Rn("neutral-50"),"border-primary":Rn("primary-50"),"border-primary-subtle":Rn("primary-60"),"border-hover":Rn("primary-90"),"border-hover-strong":Rn("primary-60"),"border-selected":Rn("primary-50"),"border-selected-subtle":Rn("primary-70"),"border-selected-subtlest":Rn("primary-90"),"border-selected-hover":Rn("primary-40"),"border-focus":Rn("primary-60"),"border-focus-strong":Rn("primary-50"),"border-disabled":Rn("neutral-90"),"border-selected-disabled":Rn("neutral-70"),"border-success":Rn("success-60"),"border-warning":Rn("warning-60"),"border-error":Rn("error-60"),"border-error-focus":Rn("error-60"),"border-error-focus-strong":Rn("error-40"),"border-error-strong":Rn("error-40"),"border-info":Rn("info-60"),bg:Rn("white"),"bg-strong":Rn("neutral-100"),"bg-stronger":Rn("neutral-95"),"bg-strongest":Rn("neutral-90"),"bg-hover":Rn("primary-95"),"bg-hover-strong":Rn("primary-90"),"bg-hover-subtle":Rn("primary-100"),"bg-hover-neutral":Rn("neutral-100"),"bg-hover-neutral-strong":Rn("neutral-90"),"bg-selected":Rn("primary-95"),"bg-selected-hover":Rn("primary-90"),"bg-selected-strong":Rn("primary-90"),"bg-selected-stronger":Rn("primary-70"),"bg-selected-strongest":Rn("primary-50"),"bg-selected-strongest-hover":Rn("primary-40"),"bg-disabled":Rn("neutral-95"),"bg-selected-disabled":Rn("neutral-95"),"bg-selected-stronger-disabled":Rn("neutral-70"),"bg-success":Rn("success-100"),"bg-success-hover":Rn("success-95"),"bg-success-strong":Rn("success-50"),"bg-success-strong-hover":Rn("success-40"),"bg-warning":Rn("warning-100"),"bg-warning-hover":Rn("warning-95"),"bg-warning-strong":Rn("warning-50"),"bg-warning-strong-hover":Rn("warning-40"),"bg-info":Rn("info-100"),"bg-info-hover":Rn("info-95"),"bg-info-strong":Rn("info-50"),"bg-info-strong-hover":Rn("info-40"),"bg-error":Rn("error-100"),"bg-error-hover":Rn("error-95"),"bg-error-strong":Rn("error-50"),"bg-error-strong-hover":Rn("error-40"),"bg-inverse":Rn("neutral-20"),"bg-inverse-subtle":Rn("neutral-30"),"bg-inverse-subtler":Rn("neutral-50"),"bg-inverse-subtlest":Rn("neutral-60"),"bg-inverse-hover":Rn("neutral-40"),"bg-primary":Rn("primary-50"),"bg-primary-subtle":Rn("primary-60"),"bg-primary-subtler":Rn("primary-95"),"bg-primary-subtlest":Rn("primary-100"),"bg-available":"#6DD0A1","bg-primary-hover":Rn("primary-40"),"bg-primary-subtlest-hover":Rn("primary-90"),"bg-primary-subtlest-selected":Rn("primary-90"),"overlay-strong":"rgba(40, 40, 40, 0.85)","overlay-subtle":"rgba(40, 40, 40, 0.20)",hyperlink:Rn("primary-50"),"hyperlink-hover":Rn("primary-40"),"hyperlink-visited":Rn("primary-40"),"hyperlink-inverse":Rn("primary-inverse"),"focus-ring":Rn("primary-50"),"focus-ring-inverse":Rn("white")},In={text:Rn("neutral-100"),"text-subtle":Rn("neutral-80"),"text-subtler":Rn("neutral-60"),"text-subtlest":Rn("neutral-50"),"text-primary":Rn("primary-60"),"text-hover":Rn("primary-70"),"text-selected":Rn("primary-60"),"text-selected-hover":Rn("primary-70"),"text-disabled":Rn("neutral-60"),"text-disabled-subtle":Rn("neutral-50"),"text-disabled-subtlest":Rn("neutral-30"),"text-selected-disabled":Rn("neutral-90"),"text-success":Rn("success-70"),"text-warning":Rn("warning-70"),"text-error":Rn("error-70"),"text-info":Rn("info-70"),"text-inverse":Rn("black"),icon:Rn("neutral-60"),"icon-subtle":Rn("neutral-50"),"icon-strongest":Rn("neutral-90"),"icon-primary":Rn("primary-60"),"icon-primary-subtle":Rn("primary-50"),"icon-primary-subtlest":Rn("primary-40"),"icon-hover":Rn("primary-70"),"icon-selected":Rn("primary-60"),"icon-selected-hover":Rn("primary-70"),"icon-disabled":Rn("neutral-60"),"icon-disabled-subtle":Rn("neutral-50"),"icon-selected-disabled":Rn("neutral-50"),"icon-success":Rn("success-60"),"icon-warning":Rn("warning-50"),"icon-error":Rn("error-60"),"icon-error-strong":Rn("error-70"),"icon-info":Rn("info-60"),"icon-inverse":Rn("black"),"icon-primary-inverse":Rn("primary-inverse"),border:Rn("neutral-20"),"border-strong":Rn("neutral-40"),"border-stronger":Rn("neutral-60"),"border-primary":Rn("primary-60"),"border-primary-subtle":Rn("primary-50"),"border-hover":Rn("primary-20"),"border-hover-strong":Rn("primary-50"),"border-selected":Rn("primary-60"),"border-selected-subtle":Rn("primary-40"),"border-selected-subtlest":Rn("primary-20"),"border-selected-hover":Rn("primary-70"),"border-focus":Rn("primary-50"),"border-focus-strong":Rn("primary-60"),"border-disabled":Rn("neutral-20"),"border-selected-disabled":Rn("neutral-40"),"border-success":Rn("success-50"),"border-warning":Rn("warning-50"),"border-error":Rn("error-50"),"border-error-focus":Rn("error-50"),"border-error-focus-strong":Rn("error-70"),"border-error-strong":Rn("error-70"),"border-info":Rn("info-50"),bg:Rn("black"),"bg-strong":Rn("neutral-10"),"bg-stronger":Rn("neutral-20"),"bg-strongest":Rn("neutral-20"),"bg-hover":Rn("primary-20"),"bg-hover-strong":Rn("primary-20"),"bg-hover-subtle":Rn("primary-10"),"bg-hover-neutral":Rn("neutral-10"),"bg-hover-neutral-strong":Rn("neutral-20"),"bg-selected":Rn("primary-20"),"bg-selected-hover":Rn("primary-20"),"bg-selected-strong":Rn("primary-20"),"bg-selected-stronger":Rn("primary-40"),"bg-selected-strongest":Rn("primary-60"),"bg-selected-strongest-hover":Rn("primary-70"),"bg-disabled":Rn("neutral-20"),"bg-selected-disabled":Rn("neutral-20"),"bg-selected-stronger-disabled":Rn("neutral-40"),"bg-success":Rn("success-10"),"bg-success-hover":Rn("success-20"),"bg-success-strong":Rn("success-60"),"bg-success-strong-hover":Rn("success-70"),"bg-warning":Rn("warning-10"),"bg-warning-hover":Rn("warning-20"),"bg-warning-strong":Rn("warning-60"),"bg-warning-strong-hover":Rn("warning-70"),"bg-info":Rn("info-10"),"bg-info-hover":Rn("info-20"),"bg-info-strong":Rn("info-60"),"bg-info-strong-hover":Rn("info-70"),"bg-error":Rn("error-10"),"bg-error-hover":Rn("error-20"),"bg-error-strong":Rn("error-60"),"bg-error-strong-hover":Rn("error-70"),"bg-inverse":Rn("neutral-90"),"bg-inverse-subtle":Rn("neutral-80"),"bg-inverse-subtler":Rn("neutral-60"),"bg-inverse-subtlest":Rn("neutral-50"),"bg-inverse-hover":Rn("neutral-70"),"bg-primary":Rn("primary-60"),"bg-primary-subtle":Rn("primary-50"),"bg-primary-subtler":Rn("primary-20"),"bg-primary-subtlest":Rn("primary-10"),"bg-available":"#185339","bg-primary-hover":Rn("primary-70"),"bg-primary-subtlest-hover":Rn("primary-20"),"bg-primary-subtlest-selected":Rn("primary-20"),"overlay-strong":"rgba(78, 78, 78, 0.80)","overlay-subtle":"rgba(78, 78, 78, 0.50)",hyperlink:Rn("primary-60"),"hyperlink-hover":Rn("primary-70"),"hyperlink-visited":Rn("primary-70"),"hyperlink-inverse":Rn("primary-inverse"),"focus-ring":Rn("primary-60"),"focus-ring-inverse":Rn("black")},Hn={text:Rn("neutral-30"),"text-subtle":Rn("neutral-40"),"text-subtler":Rn("neutral-50"),"text-subtlest":Rn("neutral-70"),"text-primary":Rn("neutral-10"),"text-hover":Rn("neutral-70"),"text-selected":Rn("neutral-20"),"text-selected-hover":Rn("neutral-10"),"text-disabled":Rn("neutral-50"),"text-disabled-subtle":Rn("neutral-60"),"text-disabled-subtlest":Rn("neutral-80"),"text-selected-disabled":Rn("neutral-40"),"text-success":Rn("success-40"),"text-warning":Rn("warning-40"),"text-error":Rn("brand-30"),"text-info":Rn("neutral-40"),"text-inverse":Rn("neutral-100"),icon:Rn("neutral-40"),"icon-subtle":Rn("neutral-50"),"icon-strongest":Rn("neutral-10"),"icon-primary":Rn("neutral-10"),"icon-primary-subtle":Rn("neutral-30"),"icon-primary-subtlest":Rn("neutral-60"),"icon-hover":Rn("neutral-70"),"icon-selected":Rn("brand-20"),"icon-selected-hover":Rn("brand-10"),"icon-disabled":Rn("neutral-50"),"icon-disabled-subtle":Rn("neutral-60"),"icon-selected-disabled":Rn("neutral-40"),"icon-success":Rn("success-40"),"icon-warning":Rn("warning-60"),"icon-error":Rn("brand-30"),"icon-error-strong":Rn("brand-10"),"icon-info":Rn("neutral-40"),"icon-inverse":Rn("neutral-100"),"icon-primary-inverse":"#F9B371",border:Rn("neutral-90"),"border-strong":Rn("neutral-30"),"border-stronger":Rn("neutral-20"),"border-primary":Rn("neutral-40"),"border-primary-subtle":Rn("neutral-60"),"border-hover":Rn("neutral-80"),"border-hover-strong":Rn("neutral-10"),"border-selected":Rn("brand-20"),"border-selected-subtle":Rn("neutral-40"),"border-selected-subtlest":Rn("neutral-70"),"border-selected-hover":Rn("neutral-10"),"border-focus":Rn("neutral-20"),"border-focus-strong":Rn("neutral-10"),"border-disabled":Rn("neutral-90"),"border-selected-disabled":Rn("neutral-80"),"border-success":Rn("success-40"),"border-warning":Rn("warning-60"),"border-error":Rn("brand-30"),"border-error-focus":Rn("brand-20"),"border-error-focus-strong":Rn("brand-10"),"border-error-strong":Rn("brand-20"),"border-info":Rn("neutral-40"),bg:Rn("neutral-100"),"bg-strong":Rn("neutral-95"),"bg-stronger":Rn("neutral-90"),"bg-strongest":Rn("neutral-80"),"bg-hover":Rn("brand-90"),"bg-hover-strong":Rn("brand-80"),"bg-hover-subtle":Rn("neutral-90"),"bg-hover-neutral":Rn("neutral-90"),"bg-hover-neutral-strong":Rn("neutral-90"),"bg-selected":Rn("brand-100"),"bg-selected-hover":Rn("brand-30"),"bg-selected-strong":Rn("brand-50"),"bg-selected-stronger":Rn("brand-40"),"bg-selected-strongest":Rn("brand-20"),"bg-selected-strongest-hover":Rn("brand-10"),"bg-disabled":Rn("neutral-90"),"bg-selected-disabled":Rn("neutral-90"),"bg-selected-stronger-disabled":Rn("neutral-80"),"bg-success":Rn("success-100"),"bg-success-hover":Rn("success-95"),"bg-success-strong":Rn("success-50"),"bg-success-strong-hover":Rn("success-40"),"bg-warning":Rn("warning-100"),"bg-warning-hover":Rn("warning-95"),"bg-warning-strong":Rn("warning-50"),"bg-warning-strong-hover":Rn("warning-40"),"bg-info":Rn("neutral-95"),"bg-info-hover":Rn("info-95"),"bg-info-strong":Rn("info-50"),"bg-info-strong-hover":Rn("info-40"),"bg-error":Rn("brand-100"),"bg-error-hover":Rn("error-95"),"bg-error-strong":Rn("error-50"),"bg-error-strong-hover":Rn("error-40"),"bg-inverse":Rn("neutral-40"),"bg-inverse-subtle":Rn("neutral-60"),"bg-inverse-subtler":Rn("neutral-70"),"bg-inverse-subtlest":Rn("neutral-80"),"bg-inverse-hover":Rn("neutral-30"),"bg-primary":Rn("brand-20"),"bg-primary-subtle":Rn("brand-60"),"bg-primary-subtler":Rn("brand-80"),"bg-primary-subtlest":Rn("brand-100"),"bg-available":Rn("success-60"),"bg-primary-hover":Rn("brand-10"),"bg-primary-subtlest-hover":Rn("brand-80"),"bg-primary-subtlest-selected":Rn("brand-40"),"overlay-strong":"rgba(25, 25, 25, 0.95)","overlay-subtle":"rgba(25, 25, 25, 0.20)",hyperlink:Rn("neutral-10"),"hyperlink-hover":Rn("neutral-40"),"hyperlink-visited":Rn("neutral-50"),"hyperlink-inverse":"#F8AE68","focus-ring":Rn("primary-50"),"focus-ring-inverse":Rn("white")},Wn={text:Rn("neutral-20"),"text-subtle":Rn("neutral-30"),"text-subtler":Rn("neutral-50"),"text-subtlest":Rn("neutral-60"),"text-primary":Rn("primary-50"),"text-hover":Rn("primary-40"),"text-selected":Rn("primary-50"),"text-selected-hover":Rn("primary-40"),"text-disabled":Rn("neutral-50"),"text-disabled-subtle":Rn("neutral-60"),"text-disabled-subtlest":Rn("neutral-80"),"text-selected-disabled":Rn("neutral-20"),"text-success":Rn("success-40"),"text-warning":Rn("warning-40"),"text-error":Rn("error-40"),"text-info":Rn("info-40"),"text-inverse":Rn("white"),icon:Rn("neutral-50"),"icon-subtle":Rn("neutral-60"),"icon-strongest":Rn("neutral-20"),"icon-primary":Rn("primary-50"),"icon-primary-subtle":Rn("primary-60"),"icon-primary-subtlest":Rn("primary-70"),"icon-hover":Rn("primary-40"),"icon-selected":Rn("primary-50"),"icon-selected-hover":Rn("primary-40"),"icon-disabled":Rn("neutral-50"),"icon-disabled-subtle":Rn("neutral-60"),"icon-selected-disabled":Rn("neutral-60"),"icon-success":Rn("success-50"),"icon-warning":Rn("warning-60"),"icon-error":Rn("error-50"),"icon-error-strong":Rn("error-40"),"icon-info":Rn("info-50"),"icon-inverse":Rn("white"),"icon-primary-inverse":Rn("primary-inverse"),border:Rn("neutral-90"),"border-strong":Rn("neutral-70"),"border-stronger":Rn("neutral-50"),"border-primary":Rn("primary-50"),"border-primary-subtle":Rn("primary-60"),"border-hover":Rn("primary-90"),"border-hover-strong":Rn("primary-60"),"border-selected":Rn("primary-50"),"border-selected-subtle":Rn("primary-70"),"border-selected-subtlest":Rn("primary-90"),"border-selected-hover":Rn("primary-40"),"border-focus":Rn("primary-60"),"border-focus-strong":Rn("primary-50"),"border-disabled":Rn("neutral-90"),"border-selected-disabled":Rn("neutral-70"),"border-success":Rn("success-60"),"border-warning":Rn("warning-60"),"border-error":Rn("error-60"),"border-error-focus":Rn("error-60"),"border-error-focus-strong":Rn("error-40"),"border-error-strong":Rn("error-40"),"border-info":Rn("info-60"),bg:Rn("white"),"bg-strong":Rn("neutral-100"),"bg-stronger":Rn("neutral-95"),"bg-strongest":Rn("neutral-90"),"bg-hover":Rn("primary-95"),"bg-hover-strong":Rn("primary-90"),"bg-hover-subtle":Rn("primary-100"),"bg-hover-neutral":Rn("neutral-100"),"bg-hover-neutral-strong":Rn("neutral-90"),"bg-selected":Rn("primary-95"),"bg-selected-hover":Rn("primary-90"),"bg-selected-strong":Rn("primary-90"),"bg-selected-stronger":Rn("primary-70"),"bg-selected-strongest":Rn("primary-50"),"bg-selected-strongest-hover":Rn("primary-40"),"bg-disabled":Rn("neutral-95"),"bg-selected-disabled":Rn("neutral-95"),"bg-selected-stronger-disabled":Rn("neutral-70"),"bg-success":Rn("success-100"),"bg-success-hover":Rn("success-95"),"bg-success-strong":Rn("success-50"),"bg-success-strong-hover":Rn("success-40"),"bg-warning":Rn("warning-100"),"bg-warning-hover":Rn("warning-95"),"bg-warning-strong":Rn("warning-50"),"bg-warning-strong-hover":Rn("warning-40"),"bg-info":Rn("info-100"),"bg-info-hover":Rn("info-95"),"bg-info-strong":Rn("info-50"),"bg-info-strong-hover":Rn("info-40"),"bg-error":Rn("error-100"),"bg-error-hover":Rn("error-95"),"bg-error-strong":Rn("error-50"),"bg-error-strong-hover":Rn("error-40"),"bg-inverse":Rn("neutral-20"),"bg-inverse-subtle":Rn("neutral-30"),"bg-inverse-subtler":Rn("neutral-50"),"bg-inverse-subtlest":Rn("neutral-60"),"bg-inverse-hover":Rn("neutral-40"),"bg-primary":Rn("primary-50"),"bg-primary-subtle":Rn("primary-60"),"bg-primary-subtler":Rn("primary-95"),"bg-primary-subtlest":Rn("primary-100"),"bg-available":"#6DD0A1","bg-primary-hover":Rn("primary-40"),"bg-primary-subtlest-hover":Rn("primary-90"),"bg-primary-subtlest-selected":Rn("primary-90"),"overlay-strong":"rgba(40, 40, 40, 0.85)","overlay-subtle":"rgba(40, 40, 40, 0.20)",hyperlink:Rn("primary-50"),"hyperlink-hover":Rn("primary-40"),"hyperlink-visited":Rn("primary-40"),"hyperlink-inverse":Rn("primary-inverse"),"focus-ring":Rn("primary-50"),"focus-ring-inverse":Rn("white")},Nn={text:Rn("neutral-100"),"text-subtle":Rn("neutral-80"),"text-subtler":Rn("neutral-60"),"text-subtlest":Rn("neutral-50"),"text-primary":Rn("primary-60"),"text-hover":Rn("primary-70"),"text-selected":Rn("primary-60"),"text-selected-hover":Rn("primary-70"),"text-disabled":Rn("neutral-60"),"text-disabled-subtle":Rn("neutral-50"),"text-disabled-subtlest":Rn("neutral-30"),"text-selected-disabled":Rn("neutral-90"),"text-success":Rn("success-70"),"text-warning":Rn("warning-70"),"text-error":Rn("error-70"),"text-info":Rn("info-70"),"text-inverse":Rn("black"),icon:Rn("neutral-60"),"icon-subtle":Rn("neutral-50"),"icon-strongest":Rn("neutral-90"),"icon-primary":Rn("primary-60"),"icon-primary-subtle":Rn("primary-50"),"icon-primary-subtlest":Rn("primary-40"),"icon-hover":Rn("primary-70"),"icon-selected":Rn("primary-60"),"icon-selected-hover":Rn("primary-70"),"icon-disabled":Rn("neutral-60"),"icon-disabled-subtle":Rn("neutral-50"),"icon-selected-disabled":Rn("neutral-50"),"icon-success":Rn("success-60"),"icon-warning":Rn("warning-50"),"icon-error":Rn("error-60"),"icon-error-strong":Rn("error-70"),"icon-info":Rn("info-60"),"icon-inverse":Rn("black"),"icon-primary-inverse":Rn("primary-inverse"),border:Rn("neutral-20"),"border-strong":Rn("neutral-40"),"border-stronger":Rn("neutral-60"),"border-primary":Rn("primary-60"),"border-primary-subtle":Rn("primary-50"),"border-hover":Rn("primary-20"),"border-hover-strong":Rn("primary-50"),"border-selected":Rn("primary-60"),"border-selected-subtle":Rn("primary-40"),"border-selected-subtlest":Rn("primary-20"),"border-selected-hover":Rn("primary-70"),"border-focus":Rn("primary-50"),"border-focus-strong":Rn("primary-60"),"border-disabled":Rn("neutral-20"),"border-selected-disabled":Rn("neutral-40"),"border-success":Rn("success-50"),"border-warning":Rn("warning-50"),"border-error":Rn("error-50"),"border-error-focus":Rn("error-50"),"border-error-focus-strong":Rn("error-70"),"border-error-strong":Rn("error-70"),"border-info":Rn("info-50"),bg:Rn("black"),"bg-strong":Rn("neutral-10"),"bg-stronger":Rn("neutral-20"),"bg-strongest":Rn("neutral-20"),"bg-hover":Rn("primary-20"),"bg-hover-strong":Rn("primary-20"),"bg-hover-subtle":Rn("primary-10"),"bg-hover-neutral":Rn("neutral-10"),"bg-hover-neutral-strong":Rn("neutral-20"),"bg-selected":Rn("primary-20"),"bg-selected-hover":Rn("primary-20"),"bg-selected-strong":Rn("primary-20"),"bg-selected-stronger":Rn("primary-40"),"bg-selected-strongest":Rn("primary-60"),"bg-selected-strongest-hover":Rn("primary-70"),"bg-disabled":Rn("neutral-20"),"bg-selected-disabled":Rn("neutral-20"),"bg-selected-stronger-disabled":Rn("neutral-40"),"bg-success":Rn("success-10"),"bg-success-hover":Rn("success-20"),"bg-success-strong":Rn("success-60"),"bg-success-strong-hover":Rn("success-70"),"bg-warning":Rn("warning-10"),"bg-warning-hover":Rn("warning-20"),"bg-warning-strong":Rn("warning-60"),"bg-warning-strong-hover":Rn("warning-70"),"bg-info":Rn("info-10"),"bg-info-hover":Rn("info-20"),"bg-info-strong":Rn("info-60"),"bg-info-strong-hover":Rn("info-70"),"bg-error":Rn("error-10"),"bg-error-hover":Rn("error-20"),"bg-error-strong":Rn("error-60"),"bg-error-strong-hover":Rn("error-70"),"bg-inverse":Rn("neutral-90"),"bg-inverse-subtle":Rn("neutral-80"),"bg-inverse-subtler":Rn("neutral-60"),"bg-inverse-subtlest":Rn("neutral-50"),"bg-inverse-hover":Rn("neutral-70"),"bg-primary":Rn("primary-60"),"bg-primary-subtle":Rn("primary-50"),"bg-primary-subtler":Rn("primary-20"),"bg-primary-subtlest":Rn("primary-10"),"bg-available":"#185339","bg-primary-hover":Rn("primary-70"),"bg-primary-subtlest-hover":Rn("primary-20"),"bg-primary-subtlest-selected":Rn("primary-20"),"overlay-strong":"rgba(78, 78, 78, 0.80)","overlay-subtle":"rgba(78, 78, 78, 0.50)",hyperlink:Rn("primary-60"),"hyperlink-hover":Rn("primary-70"),"hyperlink-visited":Rn("primary-70"),"hyperlink-inverse":Rn("primary-inverse"),"focus-ring":Rn("primary-60"),"focus-ring-inverse":Rn("black")},Vn={collections:{lifesg:Yn,bookingsg:Yn,rbs:Yn,mylegacy:Yn,ccube:Yn,oneservice:Yn,pa:Hn,a11yplayground:Wn,supportgowhere:Yn,imda:Yn},defaultValue:"lifesg"},Kn={collections:{lifesg:In,bookingsg:In,rbs:In,mylegacy:In,ccube:In,oneservice:In,pa:In,a11yplayground:Nn,supportgowhere:In,imda:In},defaultValue:"lifesg"},Un=e=>r=>{var n;const t=r.theme,i="dark"===(null==t?void 0:t.colourMode),o=Fn(i?Kn:Vn,null==t?void 0:t.colourScheme),s=i?"semanticColourDark":"semanticColour",a=null===(n=null==t?void 0:t.overrides)||void 0===n?void 0:n[s],l=a?xn(o,e,a):o[e];return"function"==typeof l?l(r):l},Zn={text:Un("text"),"text-subtle":Un("text-subtle"),"text-subtler":Un("text-subtler"),"text-subtlest":Un("text-subtlest"),"text-primary":Un("text-primary"),"text-hover":Un("text-hover"),"text-selected":Un("text-selected"),"text-selected-hover":Un("text-selected-hover"),"text-disabled":Un("text-disabled"),"text-disabled-subtle":Un("text-disabled-subtle"),"text-disabled-subtlest":Un("text-disabled-subtlest"),"text-selected-disabled":Un("text-selected-disabled"),"text-success":Un("text-success"),"text-warning":Un("text-warning"),"text-error":Un("text-error"),"text-info":Un("text-info"),"text-inverse":Un("text-inverse"),icon:Un("icon"),"icon-subtle":Un("icon-subtle"),"icon-strongest":Un("icon-strongest"),"icon-primary":Un("icon-primary"),"icon-primary-subtle":Un("icon-primary-subtle"),"icon-primary-subtlest":Un("icon-primary-subtlest"),"icon-hover":Un("icon-hover"),"icon-selected":Un("icon-selected"),"icon-selected-hover":Un("icon-selected-hover"),"icon-disabled":Un("icon-disabled"),"icon-disabled-subtle":Un("icon-disabled-subtle"),"icon-selected-disabled":Un("icon-selected-disabled"),"icon-success":Un("icon-success"),"icon-warning":Un("icon-warning"),"icon-error":Un("icon-error"),"icon-error-strong":Un("icon-error-strong"),"icon-info":Un("icon-info"),"icon-inverse":Un("icon-inverse"),"icon-primary-inverse":Un("icon-primary-inverse"),border:Un("border"),"border-strong":Un("border-strong"),"border-stronger":Un("border-stronger"),"border-primary":Un("border-primary"),"border-primary-subtle":Un("border-primary-subtle"),"border-hover":Un("border-hover"),"border-hover-strong":Un("border-hover-strong"),"border-selected":Un("border-selected"),"border-selected-subtle":Un("border-selected-subtle"),"border-selected-subtlest":Un("border-selected-subtlest"),"border-selected-hover":Un("border-selected-hover"),"border-focus":Un("border-focus"),"border-focus-strong":Un("border-focus-strong"),"border-disabled":Un("border-disabled"),"border-selected-disabled":Un("border-selected-disabled"),"border-success":Un("border-success"),"border-warning":Un("border-warning"),"border-error":Un("border-error"),"border-error-focus":Un("border-error-focus"),"border-error-focus-strong":Un("border-error-focus-strong"),"border-error-strong":Un("border-error-strong"),"border-info":Un("border-info"),bg:Un("bg"),"bg-strong":Un("bg-strong"),"bg-stronger":Un("bg-stronger"),"bg-strongest":Un("bg-strongest"),"bg-hover":Un("bg-hover"),"bg-hover-strong":Un("bg-hover-strong"),"bg-hover-subtle":Un("bg-hover-subtle"),"bg-hover-neutral":Un("bg-hover-neutral"),"bg-hover-neutral-strong":Un("bg-hover-neutral-strong"),"bg-selected":Un("bg-selected"),"bg-selected-hover":Un("bg-selected-hover"),"bg-selected-strong":Un("bg-selected-strong"),"bg-selected-stronger":Un("bg-selected-stronger"),"bg-selected-strongest":Un("bg-selected-strongest"),"bg-selected-strongest-hover":Un("bg-selected-strongest-hover"),"bg-disabled":Un("bg-disabled"),"bg-selected-disabled":Un("bg-selected-disabled"),"bg-selected-stronger-disabled":Un("bg-selected-stronger-disabled"),"bg-success":Un("bg-success"),"bg-success-hover":Un("bg-success-hover"),"bg-success-strong":Un("bg-success-strong"),"bg-success-strong-hover":Un("bg-success-strong-hover"),"bg-warning":Un("bg-warning"),"bg-warning-hover":Un("bg-warning-hover"),"bg-warning-strong":Un("bg-warning-strong"),"bg-warning-strong-hover":Un("bg-warning-strong-hover"),"bg-info":Un("bg-info"),"bg-info-hover":Un("bg-info-hover"),"bg-info-strong":Un("bg-info-strong"),"bg-info-strong-hover":Un("bg-info-strong-hover"),"bg-error":Un("bg-error"),"bg-error-hover":Un("bg-error-hover"),"bg-error-strong":Un("bg-error-strong"),"bg-error-strong-hover":Un("bg-error-strong-hover"),"bg-inverse":Un("bg-inverse"),"bg-inverse-subtle":Un("bg-inverse-subtle"),"bg-inverse-subtler":Un("bg-inverse-subtler"),"bg-inverse-subtlest":Un("bg-inverse-subtlest"),"bg-inverse-hover":Un("bg-inverse-hover"),"bg-primary":Un("bg-primary"),"bg-primary-subtle":Un("bg-primary-subtle"),"bg-primary-subtler":Un("bg-primary-subtler"),"bg-primary-subtlest":Un("bg-primary-subtlest"),"bg-available":Un("bg-available"),"bg-primary-hover":Un("bg-primary-hover"),"bg-primary-subtlest-hover":Un("bg-primary-subtlest-hover"),"bg-primary-subtlest-selected":Un("bg-primary-subtlest-selected"),"overlay-strong":Un("overlay-strong"),"overlay-subtle":Un("overlay-subtle"),hyperlink:Un("hyperlink"),"hyperlink-hover":Un("hyperlink-hover"),"hyperlink-visited":Un("hyperlink-visited"),"hyperlink-inverse":Un("hyperlink-inverse"),"focus-ring":Un("focus-ring"),"focus-ring-inverse":Un("focus-ring-inverse")},Xn={collections:{default:{solid:e=>r=>{var n,t,i;const{thickness:o,radius:s,colour:a}=e||{},l=null!==(n="function"==typeof o?o(r):o)&&void 0!==n?n:En["width-010"](r),d=null!==(t="function"==typeof s?s(r):s)&&void 0!==t?t:0,c=null!==(i="function"==typeof a?a(r):a)&&void 0!==i?i:Zn.border(r),u=En.solid;return v`
            border: ${l} ${u} ${c};
            border-radius: ${d};
        `},"dashed-default":e=>r=>{var n,t,i;const{thickness:o,radius:s,colour:a}=e||{},l=null!==(n="function"==typeof o?o(r):o)&&void 0!==n?n:En["width-010"](r),d=null!==(t="function"==typeof s?s(r):s)&&void 0!==t?t:0,c=null!==(i="function"==typeof a?a(r):a)&&void 0!==i?i:Zn.border(r),u=encodeURIComponent(`<svg width='100%' height='100%' xmlns='http://www.w3.org/2000/svg'><rect width='100%' height='100%' fill='none' rx='${d}' ry='${d}' stroke='${c}' stroke-width='${l}' stroke-dasharray='4, 8' stroke-dashoffset='0' stroke-linecap='square'/></svg>`);return v`
            background-image: url("data:image/svg+xml,${u}");
            border-radius: ${d};
        `}}},defaultValue:"default"},qn=e=>1===e.length&&"theme"in e[0],Jn=e=>(...r)=>n=>{const t=qn(r)?[]:r,i=qn(r)?r[0]:n,o=i.theme;return(0,Fn(Xn,null==o?void 0:o.borderScheme)[e])(...t)(i)},Gn={solid:Jn("solid"),"dashed-default":Jn("dashed-default")},Qn={collections:{default:{"xxs-min":0,"xxs-max":320,"xs-min":321,"xs-max":375,"sm-min":376,"sm-max":480,"md-min":481,"md-max":768,"lg-min":769,"lg-max":1200,"xl-min":1201,"xl-max":1440,"xxl-min":1441,"xxs-column":8,"xs-column":8,"sm-column":8,"md-column":8,"lg-column":12,"xl-column":12,"xxl-column":12,"xxs-gutter":16,"xs-gutter":16,"sm-gutter":16,"md-gutter":16,"lg-gutter":32,"xl-gutter":32,"xxl-gutter":32,"xxs-margin":24,"xs-margin":24,"sm-margin":24,"md-margin":24,"lg-margin":48,"xl-margin":48,"xxl-margin":48}},defaultValue:"default"},et=e=>r=>{var n;const t=r.theme,i=Fn(Qn,null==t?void 0:t.breakpointScheme);let o;return o=(null===(n=null==t?void 0:t.overrides)||void 0===n?void 0:n.breakpoint)?xn(i,e,t.overrides.breakpoint):i[e],o},rt={"xxs-min":et("xxs-min"),"xxs-max":et("xxs-max"),"xs-min":et("xs-min"),"xs-max":et("xs-max"),"sm-min":et("sm-min"),"sm-max":et("sm-max"),"md-min":et("md-min"),"md-max":et("md-max"),"lg-min":et("lg-min"),"lg-max":et("lg-max"),"xl-min":et("xl-min"),"xl-max":et("xl-max"),"xxl-min":et("xxl-min"),"xxs-column":et("xxs-column"),"xs-column":et("xs-column"),"sm-column":et("sm-column"),"md-column":et("md-column"),"lg-column":et("lg-column"),"xl-column":et("xl-column"),"xxl-column":et("xxl-column"),"xxs-gutter":et("xxs-gutter"),"xs-gutter":et("xs-gutter"),"sm-gutter":et("sm-gutter"),"md-gutter":et("md-gutter"),"lg-gutter":et("lg-gutter"),"xl-gutter":et("xl-gutter"),"xxl-gutter":et("xxl-gutter"),"xxs-margin":et("xxs-margin"),"xs-margin":et("xs-margin"),"sm-margin":et("sm-margin"),"md-margin":et("md-margin"),"lg-margin":et("lg-margin"),"xl-margin":et("xl-margin"),"xxl-margin":et("xxl-margin")},nt=e=>("max-width"===e?["xxs","xs","sm","md","lg","xl"]:["xxs","xs","sm","md","lg","xl","xxl"]).reduce(((r,n)=>(r[n]=((e,r)=>{const n=rt["max-width"===e?`${r}-max`:`${r}-min`];return r=>{const t=n(r);return`@media screen and (${e}: ${t}px)`}})(e,n),r)),{}),tt={MaxWidth:nt("max-width"),MinWidth:nt("min-width")},it={collections:{default:{"heading-size-xxl":"3rem","heading-size-xl":"2.5rem","heading-size-lg":"2rem","heading-size-md":"1.625rem","heading-size-sm":"1.375rem","heading-size-xs":"1.125rem","heading-lh-xxl":"3.5rem","heading-lh-xl":"3rem","heading-lh-lg":"2.5rem","heading-lh-md":"2.25rem","heading-lh-sm":"1.75rem","heading-lh-xs":"1.625rem","heading-ls-xxl":"-0.056rem","heading-ls-xl":"-0.032rem","heading-ls-lg":"-0.032rem","heading-ls-md":"0rem","heading-ls-sm":"0rem","heading-ls-xs":"0rem","weight-light":"300","weight-regular":"400","weight-semibold":"600","weight-bold":"700","font-family":"Open Sans","body-size-baseline":"1.125rem","body-size-md":"1rem","body-size-sm":"0.875rem","body-size-xs":"0.75rem","body-lh-baseline":"1.625rem","body-lh-md":"1.5rem","body-lh-sm":"1.625rem","body-lh-xs":"1.25rem","body-ls-baseline":"0rem","body-ls-md":"0.014rem","body-ls-sm":"0.012rem","body-ls-xs":"0.012rem","form-label-size":"1rem","form-description-size":"0.875rem","form-label-lh":"1.5rem","form-description-lh":"1.6rem","form-label-ls":"0.014rem","form-description-ls":"0.012rem"},bookingsg:{"heading-size-xxl":"3rem","heading-size-xl":"2.5rem","heading-size-lg":"2rem","heading-size-md":"1.625rem","heading-size-sm":"1.375rem","heading-size-xs":"1.125rem","heading-lh-xxl":"3.5rem","heading-lh-xl":"3rem","heading-lh-lg":"2.5rem","heading-lh-md":"2.25rem","heading-lh-sm":"1.75rem","heading-lh-xs":"1.75rem","heading-ls-xxl":"-0.056rem","heading-ls-xl":"-0.032rem","heading-ls-lg":"-0.032rem","heading-ls-md":"0rem","heading-ls-sm":"0rem","heading-ls-xs":"0rem","weight-light":"300","weight-regular":"400","weight-semibold":"600","weight-bold":"700","font-family":"Plus Jakarta Sans","body-size-baseline":"1.125rem","body-size-md":"1rem","body-size-sm":"0.875rem","body-size-xs":"0.75rem","body-lh-baseline":"1.75rem","body-lh-md":"1.5rem","body-lh-sm":"1.6rem","body-lh-xs":"1.2rem","body-ls-baseline":"0rem","body-ls-md":"0.014rem","body-ls-sm":"0.012rem","body-ls-xs":"0.012rem","form-label-size":"1rem","form-description-size":"0.875rem","form-label-lh":"1.5rem","form-description-lh":"1.6rem","form-label-ls":"0.014rem","form-description-ls":"0.012rem"},pa:{"heading-size-xxl":"2.5rem","heading-size-xl":"2rem","heading-size-lg":"1.75rem","heading-size-md":"1.5rem","heading-size-sm":"1.25rem","heading-size-xs":"1rem","heading-lh-xxl":"3rem","heading-lh-xl":"2.5rem","heading-lh-lg":"2.25rem","heading-lh-md":"2rem","heading-lh-sm":"2rem","heading-lh-xs":"1.75rem","heading-ls-xxl":"-0.032rem","heading-ls-xl":"-0.032rem","heading-ls-lg":"0rem","heading-ls-md":"0rem","heading-ls-sm":"0rem","heading-ls-xs":"0rem","weight-light":"300","weight-regular":"400","weight-semibold":"600","weight-bold":"700","font-family":"Lato","body-size-baseline":"1rem","body-size-md":"0.875rem","body-size-sm":"0.75rem","body-size-xs":"0.625rem","body-lh-baseline":"1.75rem","body-lh-md":"1.5rem","body-lh-sm":"1.25rem","body-lh-xs":"1.25rem","body-ls-baseline":"0rem","body-ls-md":"0.014rem","body-ls-sm":"0.012rem","body-ls-xs":"0.012rem","form-label-size":"1rem","form-description-size":"0.875rem","form-label-lh":"1.5rem","form-description-lh":"1.6rem","form-label-ls":"0.014rem","form-description-ls":"0.012rem"},a11yplayground:{"heading-size-xxl":"3rem","heading-size-xl":"2.5rem","heading-size-lg":"2rem","heading-size-md":"1.625rem","heading-size-sm":"1.375rem","heading-size-xs":"1.125rem","heading-lh-xxl":"3.5rem","heading-lh-xl":"3rem","heading-lh-lg":"2.5rem","heading-lh-md":"2.25rem","heading-lh-sm":"1.75rem","heading-lh-xs":"1.625rem","heading-ls-xxl":"-0.056rem","heading-ls-xl":"-0.032rem","heading-ls-lg":"-0.032rem","heading-ls-md":"0rem","heading-ls-sm":"0rem","heading-ls-xs":"0rem","weight-light":"300","weight-regular":"400","weight-semibold":"600","weight-bold":"700","font-family":"Atkinson Hyperlegible Next","body-size-baseline":"1.125rem","body-size-md":"1rem","body-size-sm":"0.875rem","body-size-xs":"0.75rem","body-lh-baseline":"1.625rem","body-lh-md":"1.5rem","body-lh-sm":"1.625rem","body-lh-xs":"1.25rem","body-ls-baseline":"0rem","body-ls-md":"0.014rem","body-ls-sm":"0.012rem","body-ls-xs":"0.012rem","form-label-size":"1.125rem","form-description-size":"1rem","form-label-lh":"1.5rem","form-description-lh":"1.625rem","form-label-ls":"0rem","form-description-ls":"0.00875rem"},supportgowhere:{"heading-size-xxl":"3rem","heading-size-xl":"2.5rem","heading-size-lg":"2rem","heading-size-md":"1.625rem","heading-size-sm":"1.375rem","heading-size-xs":"1.125rem","heading-lh-xxl":"3.5rem","heading-lh-xl":"3rem","heading-lh-lg":"2.5rem","heading-lh-md":"2.25rem","heading-lh-sm":"1.75rem","heading-lh-xs":"1.625rem","heading-ls-xxl":"-0.056rem","heading-ls-xl":"-0.032rem","heading-ls-lg":"-0.032rem","heading-ls-md":"0rem","heading-ls-sm":"0rem","heading-ls-xs":"0rem","weight-light":"300","weight-regular":"400","weight-semibold":"600","weight-bold":"700","font-family":"Libre Franklin","body-size-baseline":"1.125rem","body-size-md":"1rem","body-size-sm":"0.875rem","body-size-xs":"0.75rem","body-lh-baseline":"1.625rem","body-lh-md":"1.5rem","body-lh-sm":"1.625rem","body-lh-xs":"1.25rem","body-ls-baseline":"0rem","body-ls-md":"0.014rem","body-ls-sm":"0.012rem","body-ls-xs":"0.012rem","form-label-size":"1rem","form-description-size":"0.875rem","form-label-lh":"1.5rem","form-description-lh":"1.6rem","form-label-ls":"0.014rem","form-description-ls":"0.012rem"},imda:{"heading-size-xxl":"3rem","heading-size-xl":"2.5rem","heading-size-lg":"2rem","heading-size-md":"1.625rem","heading-size-sm":"1.375rem","heading-size-xs":"1.125rem","heading-lh-xxl":"3.5rem","heading-lh-xl":"3rem","heading-lh-lg":"2.5rem","heading-lh-md":"2.25rem","heading-lh-sm":"1.75rem","heading-lh-xs":"1.625rem","heading-ls-xxl":"-0.056rem","heading-ls-xl":"-0.032rem","heading-ls-lg":"-0.032rem","heading-ls-md":"0rem","heading-ls-sm":"0rem","heading-ls-xs":"0rem","weight-light":"300","weight-regular":"400","weight-semibold":"600","weight-bold":"700","font-family":"Montserrat","body-size-baseline":"1.125rem","body-size-md":"1rem","body-size-sm":"0.875rem","body-size-xs":"0.75rem","body-lh-baseline":"1.625rem","body-lh-md":"1.5rem","body-lh-sm":"1.625rem","body-lh-xs":"1.25rem","body-ls-baseline":"0rem","body-ls-md":"0.014rem","body-ls-sm":"0.012rem","body-ls-xs":"0.012rem","form-label-size":"1rem","form-description-size":"0.875rem","form-label-lh":"1.5rem","form-description-lh":"1.625rem","form-label-ls":"0.014rem","form-description-ls":"0.012rem"}},defaultValue:"default"},ot=e=>r=>{var n;const t=r.theme,i=Fn(it,null==t?void 0:t.fontScheme);return(null===(n=null==t?void 0:t.overrides)||void 0===n?void 0:n.fontSpec)?xn(i,e,t.overrides.fontSpec):i[e]},st={"heading-size-xxl":ot("heading-size-xxl"),"heading-size-xl":ot("heading-size-xl"),"heading-size-lg":ot("heading-size-lg"),"heading-size-md":ot("heading-size-md"),"heading-size-sm":ot("heading-size-sm"),"heading-size-xs":ot("heading-size-xs"),"heading-lh-xxl":ot("heading-lh-xxl"),"heading-lh-xl":ot("heading-lh-xl"),"heading-lh-lg":ot("heading-lh-lg"),"heading-lh-md":ot("heading-lh-md"),"heading-lh-sm":ot("heading-lh-sm"),"heading-lh-xs":ot("heading-lh-xs"),"heading-ls-xxl":ot("heading-ls-xxl"),"heading-ls-xl":ot("heading-ls-xl"),"heading-ls-lg":ot("heading-ls-lg"),"heading-ls-md":ot("heading-ls-md"),"heading-ls-sm":ot("heading-ls-sm"),"heading-ls-xs":ot("heading-ls-xs"),"weight-light":ot("weight-light"),"weight-regular":ot("weight-regular"),"weight-semibold":ot("weight-semibold"),"weight-bold":ot("weight-bold"),"font-family":ot("font-family"),"body-size-baseline":ot("body-size-baseline"),"body-size-md":ot("body-size-md"),"body-size-sm":ot("body-size-sm"),"body-size-xs":ot("body-size-xs"),"body-lh-baseline":ot("body-lh-baseline"),"body-lh-md":ot("body-lh-md"),"body-lh-sm":ot("body-lh-sm"),"body-lh-xs":ot("body-lh-xs"),"body-ls-baseline":ot("body-ls-baseline"),"body-ls-md":ot("body-ls-md"),"body-ls-sm":ot("body-ls-sm"),"body-ls-xs":ot("body-ls-xs"),"form-label-size":ot("form-label-size"),"form-description-size":ot("form-description-size"),"form-label-lh":ot("form-label-lh"),"form-description-lh":ot("form-description-lh"),"form-label-ls":ot("form-label-ls"),"form-description-ls":ot("form-description-ls")},at=(e,r,n,t,i)=>{const{disableLigatures:o}=i||{};return v`
        font-family: ${ot("font-family")};
        font-size: ${ot(e)};
        font-weight: ${ot(r)};
        line-height: ${ot(n)};
        letter-spacing: ${ot(t)};

        font-variant: ${o?"no-common-ligatures":"normal"};
    `},lt=(e={})=>({"heading-xxl-light":at("heading-size-xxl","weight-light","heading-lh-xxl","heading-ls-xxl",e),"heading-xxl-regular":at("heading-size-xxl","weight-regular","heading-lh-xxl","heading-ls-xxl",e),"heading-xxl-semibold":at("heading-size-xxl","weight-semibold","heading-lh-xxl","heading-ls-xxl",e),"heading-xxl-bold":at("heading-size-xxl","weight-bold","heading-lh-xxl","heading-ls-xxl",e),"heading-xl-light":at("heading-size-xl","weight-light","heading-lh-xl","heading-ls-xl",e),"heading-xl-regular":at("heading-size-xl","weight-regular","heading-lh-xl","heading-ls-xl",e),"heading-xl-semibold":at("heading-size-xl","weight-semibold","heading-lh-xl","heading-ls-xl",e),"heading-xl-bold":at("heading-size-xl","weight-bold","heading-lh-xl","heading-ls-xl",e),"heading-lg-light":at("heading-size-lg","weight-light","heading-lh-lg","heading-ls-lg",e),"heading-lg-regular":at("heading-size-lg","weight-regular","heading-lh-lg","heading-ls-lg",e),"heading-lg-semibold":at("heading-size-lg","weight-semibold","heading-lh-lg","heading-ls-lg",e),"heading-lg-bold":at("heading-size-lg","weight-bold","heading-lh-lg","heading-ls-lg",e),"heading-md-light":at("heading-size-md","weight-light","heading-lh-md","heading-ls-md",e),"heading-md-regular":at("heading-size-md","weight-regular","heading-lh-md","heading-ls-md",e),"heading-md-semibold":at("heading-size-md","weight-semibold","heading-lh-md","heading-ls-md",e),"heading-md-bold":at("heading-size-md","weight-bold","heading-lh-md","heading-ls-md",e),"heading-sm-light":at("heading-size-sm","weight-light","heading-lh-sm","heading-ls-sm",e),"heading-sm-regular":at("heading-size-sm","weight-regular","heading-lh-sm","heading-ls-sm",e),"heading-sm-semibold":at("heading-size-sm","weight-semibold","heading-lh-sm","heading-ls-sm",e),"heading-sm-bold":at("heading-size-sm","weight-bold","heading-lh-sm","heading-ls-sm",e),"heading-xs-light":at("heading-size-xs","weight-light","heading-lh-xs","heading-ls-xs",e),"heading-xs-regular":at("heading-size-xs","weight-regular","heading-lh-xs","heading-ls-xs",e),"heading-xs-semibold":at("heading-size-xs","weight-semibold","heading-lh-xs","heading-ls-xs",e),"heading-xs-bold":at("heading-size-xs","weight-bold","heading-lh-xs","heading-ls-xs",e),"body-baseline-light":at("body-size-baseline","weight-light","body-lh-baseline","body-ls-baseline",e),"body-baseline-regular":at("body-size-baseline","weight-regular","body-lh-baseline","body-ls-baseline",e),"body-baseline-semibold":at("body-size-baseline","weight-semibold","body-lh-baseline","body-ls-baseline",e),"body-baseline-bold":at("body-size-baseline","weight-bold","body-lh-baseline","body-ls-baseline",e),"body-md-light":at("body-size-md","weight-light","body-lh-md","body-ls-md",e),"body-md-regular":at("body-size-md","weight-regular","body-lh-md","body-ls-md",e),"body-md-semibold":at("body-size-md","weight-semibold","body-lh-md","body-ls-md",e),"body-md-bold":at("body-size-md","weight-bold","body-lh-md","body-ls-md",e),"body-sm-light":at("body-size-sm","weight-light","body-lh-sm","body-ls-sm",e),"body-sm-regular":at("body-size-sm","weight-regular","body-lh-sm","body-ls-sm",e),"body-sm-semibold":at("body-size-sm","weight-semibold","body-lh-sm","body-ls-sm",e),"body-sm-bold":at("body-size-sm","weight-bold","body-lh-sm","body-ls-sm",e),"body-xs-light":at("body-size-xs","weight-light","body-lh-xs","body-ls-xs",e),"body-xs-regular":at("body-size-xs","weight-regular","body-lh-xs","body-ls-xs",e),"body-xs-semibold":at("body-size-xs","weight-semibold","body-lh-xs","body-ls-xs",e),"body-xs-bold":at("body-size-xs","weight-bold","body-lh-xs","body-ls-xs",e),"form-label":at("form-label-size","weight-semibold","form-label-lh","form-label-ls",e),"form-description":at("form-description-size","weight-regular","form-description-lh","form-description-ls",e)}),dt=lt({disableLigatures:!0}),ct={collections:{default:lt(),bookingsg:dt,pa:lt({disableLigatures:!0}),a11yplayground:lt({disableLigatures:!0}),supportgowhere:lt({disableLigatures:!0}),imda:lt({disableLigatures:!0})},defaultValue:"default"},ut=e=>r=>{var n;const t=r.theme,i=Fn(ct,null==t?void 0:t.fontScheme),o=(null===(n=null==t?void 0:t.overrides)||void 0===n?void 0:n.font)?xn(i,e,t.overrides.font):i[e];return"function"==typeof o?o(r):o},gt={"heading-xxl-light":ut("heading-xxl-light"),"heading-xxl-regular":ut("heading-xxl-regular"),"heading-xxl-semibold":ut("heading-xxl-semibold"),"heading-xxl-bold":ut("heading-xxl-bold"),"heading-xl-light":ut("heading-xl-light"),"heading-xl-regular":ut("heading-xl-regular"),"heading-xl-semibold":ut("heading-xl-semibold"),"heading-xl-bold":ut("heading-xl-bold"),"heading-lg-light":ut("heading-lg-light"),"heading-lg-regular":ut("heading-lg-regular"),"heading-lg-semibold":ut("heading-lg-semibold"),"heading-lg-bold":ut("heading-lg-bold"),"heading-md-light":ut("heading-md-light"),"heading-md-regular":ut("heading-md-regular"),"heading-md-semibold":ut("heading-md-semibold"),"heading-md-bold":ut("heading-md-bold"),"heading-sm-light":ut("heading-sm-light"),"heading-sm-regular":ut("heading-sm-regular"),"heading-sm-semibold":ut("heading-sm-semibold"),"heading-sm-bold":ut("heading-sm-bold"),"heading-xs-light":ut("heading-xs-light"),"heading-xs-regular":ut("heading-xs-regular"),"heading-xs-semibold":ut("heading-xs-semibold"),"heading-xs-bold":ut("heading-xs-bold"),"body-baseline-light":ut("body-baseline-light"),"body-baseline-regular":ut("body-baseline-regular"),"body-baseline-semibold":ut("body-baseline-semibold"),"body-baseline-bold":ut("body-baseline-bold"),"body-md-light":ut("body-md-light"),"body-md-regular":ut("body-md-regular"),"body-md-semibold":ut("body-md-semibold"),"body-md-bold":ut("body-md-bold"),"body-sm-light":ut("body-sm-light"),"body-sm-regular":ut("body-sm-regular"),"body-sm-semibold":ut("body-sm-semibold"),"body-sm-bold":ut("body-sm-bold"),"body-xs-light":ut("body-xs-light"),"body-xs-regular":ut("body-xs-regular"),"body-xs-semibold":ut("body-xs-semibold"),"body-xs-bold":ut("body-xs-bold"),"form-label":ut("form-label"),"form-description":ut("form-description")},ht={collections:{default:{"duration-150":"150ms","duration-250":"250ms","duration-350":"350ms","duration-500":"500ms","duration-800":"800ms","duration-1000":"1000ms","ease-default":"cubic-bezier(0.45, 0.05, 0.55, 0.95)","ease-standard":"cubic-bezier(0.86, 0, 0.07, 1)","ease-entrance":"cubic-bezier(0.18, 0.13, 0, 1)","ease-exit":"cubic-bezier(1, 0, 0.8, 0.85)"}},defaultValue:"default"},bt=e=>r=>{var n;const t=r.theme,i=Fn(ht,null==t?void 0:t.motionScheme);return(null===(n=null==t?void 0:t.overrides)||void 0===n?void 0:n.motion)?xn(i,e,t.overrides.motion):i[e]},mt={"duration-150":bt("duration-150"),"duration-250":bt("duration-250"),"duration-350":bt("duration-350"),"duration-500":bt("duration-500"),"duration-800":bt("duration-800"),"duration-1000":bt("duration-1000"),"ease-default":bt("ease-default"),"ease-standard":bt("ease-standard"),"ease-entrance":bt("ease-entrance"),"ease-exit":bt("ease-exit")},pt={collections:{default:{none:0,xs:2,sm:4,md:8,lg:12,full:9999}},defaultValue:"default"},ft=e=>r=>{var n;const t=r.theme,i=Fn(pt,null==t?void 0:t.radiusScheme);return(null===(n=null==t?void 0:t.overrides)||void 0===n?void 0:n.radius)?`${xn(i,e,t.overrides.radius)}px`:`${i[e]}px`},yt={none:ft("none"),xs:ft("xs"),sm:ft("sm"),md:ft("md"),lg:ft("lg"),full:ft("full")},vt=(e,r,n)=>t=>{const i=Un(r)(t)||Rn(r)(t);return`${e} rgba(from ${i} r g b / ${100*n}%)`},xt={collections:{default:{"xs-subtle":vt("0 0 4px 1px","neutral-50",.24),"xs-strong":vt("0 0 4px 1px","neutral-50",.5),"xs-focus-strong":vt("0 0 4px 1px","border-focus",.5),"xs-error-strong":vt("0 0 4px 1px","border-error",.5),"sm-subtle":vt("0 2px 4px 0","neutral-50",.24),"sm-strong":vt("0 2px 4px 0","neutral-50",.5),"md-subtle":vt("0 2px 8px 0","neutral-50",.24),"md-strong":vt("0 2px 8px 0","neutral-50",.5),"lg-subtle":vt("0 2px 12px 1px","neutral-50",.24),"lg-strong":vt("0 2px 12px 1px","neutral-50",.5)}},defaultValue:"default"},Ft=e=>r=>{var n;const t=r.theme,i=Fn(xt,null==t?void 0:t.shadowScheme),o=(null===(n=null==t?void 0:t.overrides)||void 0===n?void 0:n.shadow)?xn(i,e,t.overrides.shadow):i[e];return"function"==typeof o?o(r):o},wt={"xs-subtle":Ft("xs-subtle"),"xs-strong":Ft("xs-strong"),"xs-focus-strong":Ft("xs-focus-strong"),"xs-error-strong":Ft("xs-error-strong"),"sm-subtle":Ft("sm-subtle"),"sm-strong":Ft("sm-strong"),"md-subtle":Ft("md-subtle"),"md-strong":Ft("md-strong"),"lg-subtle":Ft("lg-subtle"),"lg-strong":Ft("lg-strong")},$t={collections:{default:{"spacing-0":0,"spacing-4":4,"spacing-8":8,"spacing-12":12,"spacing-16":16,"spacing-20":20,"spacing-24":24,"spacing-32":32,"spacing-40":40,"spacing-48":48,"spacing-64":64,"spacing-72":72,"layout-xs":8,"layout-sm":16,"layout-md":24,"layout-lg":32,"layout-xl":48,"layout-xxl":64,"layout-xxxl":128}},defaultValue:"default"},Et=e=>r=>{var n;const t=r.theme,i=Fn($t,null==t?void 0:t.spacingScheme);return(null===(n=null==t?void 0:t.overrides)||void 0===n?void 0:n.spacing)?`${xn(i,e,t.overrides.spacing)}px`:`${i[e]}px`},Dt={"spacing-0":Et("spacing-0"),"spacing-4":Et("spacing-4"),"spacing-8":Et("spacing-8"),"spacing-12":Et("spacing-12"),"spacing-16":Et("spacing-16"),"spacing-20":Et("spacing-20"),"spacing-24":Et("spacing-24"),"spacing-32":Et("spacing-32"),"spacing-40":Et("spacing-40"),"spacing-48":Et("spacing-48"),"spacing-64":Et("spacing-64"),"spacing-72":Et("spacing-72"),"layout-xs":Et("layout-xs"),"layout-sm":Et("layout-sm"),"layout-md":Et("layout-md"),"layout-lg":Et("layout-lg"),"layout-xl":Et("layout-xl"),"layout-xxl":Et("layout-xxl"),"layout-xxxl":Et("layout-xxxl")},Ct=(e,r)=>Object.assign(Object.assign({},e),{colourMode:r}),Bt=Object.assign(Object.assign({},Zn),{Primitive:Pn}),St=Object.assign(Object.assign({},gt),{Spec:st}),At=mt,kt=Object.assign(Object.assign({},En),{Util:Gn}),zt=Dt,Ot=yt,Mt=wt,_t=rt,Tt=tt,Lt={colourScheme:"lifesg",fontScheme:"default",motionScheme:"default",borderScheme:"default",spacingScheme:"default",radiusScheme:"default",shadowScheme:"default",breakpointScheme:"default",resourceScheme:"lifesg",componentScheme:"lifesg",_v2:{colorScheme:"base",textStyleScheme:"base",designTokenScheme:"base",resourceScheme:"base"}},jt={colourScheme:"bookingsg",fontScheme:"bookingsg",motionScheme:"default",borderScheme:"default",spacingScheme:"default",radiusScheme:"default",shadowScheme:"default",breakpointScheme:"default",resourceScheme:"bookingsg",_v2:{colorScheme:"bookingsg",textStyleScheme:"base",designTokenScheme:"base",resourceScheme:"bookingsg"}},Rt={colourScheme:"ccube",fontScheme:"default",motionScheme:"default",borderScheme:"default",spacingScheme:"default",radiusScheme:"default",shadowScheme:"default",breakpointScheme:"default",resourceScheme:"ccube",_v2:{colorScheme:"ccube",textStyleScheme:"base",designTokenScheme:"base",resourceScheme:"ccube"}},Pt={colourScheme:"mylegacy",fontScheme:"default",motionScheme:"default",borderScheme:"default",spacingScheme:"default",radiusScheme:"default",shadowScheme:"default",breakpointScheme:"default",resourceScheme:"mylegacy",_v2:{colorScheme:"mylegacy",textStyleScheme:"base",designTokenScheme:"base",resourceScheme:"mylegacy"}},Yt={colourScheme:"rbs",fontScheme:"default",motionScheme:"default",borderScheme:"default",spacingScheme:"default",radiusScheme:"default",shadowScheme:"default",breakpointScheme:"default",resourceScheme:"rbs",_v2:{colorScheme:"rbs",textStyleScheme:"base",designTokenScheme:"rbs",resourceScheme:"rbs"}},It={colourScheme:"oneservice",fontScheme:"default",motionScheme:"default",borderScheme:"default",spacingScheme:"default",radiusScheme:"default",shadowScheme:"default",breakpointScheme:"default",resourceScheme:"oneservice"},Ht={colourScheme:"pa",fontScheme:"pa",motionScheme:"default",borderScheme:"default",spacingScheme:"default",radiusScheme:"default",shadowScheme:"default",breakpointScheme:"default",resourceScheme:"pa",componentScheme:"pa"},Wt={colourScheme:"a11yplayground",fontScheme:"a11yplayground",motionScheme:"default",borderScheme:"default",spacingScheme:"default",radiusScheme:"default",shadowScheme:"default",breakpointScheme:"default",resourceScheme:"a11yplayground",componentScheme:"a11yplayground"},Nt={colourScheme:"supportgowhere",fontScheme:"supportgowhere",motionScheme:"default",borderScheme:"default",spacingScheme:"default",radiusScheme:"default",shadowScheme:"default",breakpointScheme:"default",resourceScheme:"supportgowhere",componentScheme:"default"},Vt={colourScheme:"imda",fontScheme:"imda",motionScheme:"default",borderScheme:"default",spacingScheme:"default",radiusScheme:"default",shadowScheme:"default",breakpointScheme:"default",resourceScheme:"imda",componentScheme:"default"};Object.assign(Object.assign({},Lt),{light:Ct(Lt,"light"),dark:Ct(Lt,"dark")}),Object.assign(Object.assign({},jt),{light:Ct(jt,"light"),dark:Ct(jt,"dark")}),Object.assign(Object.assign({},Rt),{light:Ct(Rt,"light"),dark:Ct(Rt,"dark")}),Object.assign(Object.assign({},Pt),{light:Ct(Pt,"light"),dark:Ct(Pt,"dark")}),Object.assign(Object.assign({},Yt),{light:Ct(Yt,"light"),dark:Ct(Yt,"dark")}),Object.assign(Object.assign({},It),{light:Ct(It,"light"),dark:Ct(It,"dark")}),Object.assign(Object.assign({},Ht),{light:Ct(Ht,"light"),dark:Ct(Ht,"dark")}),Object.assign(Object.assign({},Wt),{light:Ct(Wt,"light"),dark:Ct(Wt,"dark")}),Object.assign(Object.assign({},Nt),{light:Ct(Nt,"light"),dark:Ct(Nt,"dark")}),Object.assign(Object.assign({},Vt),{light:Ct(Vt,"light"),dark:Ct(Vt,"dark")});const Kt=e=>v`
    display: -webkit-box;
    -webkit-line-clamp: ${e};
    -webkit-box-orient: vertical;
    overflow: hidden;
`,Ut=(e,r,n=!1)=>v`
        ${St[`${e}-${r}`]}
        ${n?"margin-bottom: 1.05em;":"margin-bottom: 0;"}
    `,Zt=e=>{if(e)return v`
            ${Kt(e)}
        `},Xt=(e,r,n,t,i)=>v`
    ${Ut(e,r||"regular",t)}
    ${((e=!1,r=!1,n)=>r?v`
            display: block;
            ${Zt(n)}
        `:e?v`
            display: inline;
        `:v`
            display: block;
            ${Zt(n)}
        `)(n,t,i)}
    color: ${Bt.text};
`,qt=y.div`
    ${e=>Xt(e.$textStyle,e.$weight,e.$inline,e.$paragraph,e.$maxLines)}
`,Jt=y.a`
    ${e=>{var r;return v`
        ${Ut(e.$textStyle,e.$weight||"regular")}
        color: ${Bt.hyperlink};
        text-decoration: ${null!==(r=e.$underlineStyle)&&void 0!==r?r:"underline"};

        &:hover,
        &:active,
        &:focus {
            color: ${Bt["text-hover"]};
        }
    `}}
`,Gt=y(f)`
    height: 1lh;
    width: 1em;
    margin-left: 0.4em;
    vertical-align: middle;
`;var Qt;function ei(e,r){return ei=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,r){return e.__proto__=r,e},ei(e,r)}function ri(e){return e&&e.stopPropagation&&e.stopPropagation(),e&&e.preventDefault&&e.preventDefault(),!1}function ni(e){return null==e?[]:Array.isArray(e)?e.slice():[e]}function ti(e){return null!==e&&1===e.length?e[0]:e.slice()}function ii(e){Object.keys(e).forEach((r=>{"undefined"!=typeof document&&document.addEventListener(r,e[r],!1)}))}function oi(e,r){return si(function(e,r){let n=e;return n<=r.min&&(n=r.min),n>=r.max&&(n=r.max),n}(e,r),r)}function si(e,r){const n=(e-r.min)%r.step;let t=e-n;return 2*Math.abs(n)>=r.step&&(t+=n>0?r.step:-r.step),parseFloat(t.toFixed(5))}!function(n){const t=(r,n,t)=>{const o=(t,i)=>{var{weight:o,inline:s,paragraph:a,maxLines:l}=t,d=K(t,["weight","inline","paragraph","maxLines"]);return e(qt,Object.assign({ref:i,as:s?"span":r,$textStyle:n,$weight:o,$inline:s,$paragraph:a,$maxLines:l},d))};return o.displayName=`Typography.${t}`,i.forwardRef(o)};n.HeadingXXL=t("h1","heading-xxl","HeadingXXL"),n.HeadingXL=t("h2","heading-xl","HeadingXL"),n.HeadingLG=t("h3","heading-lg","HeadingLG"),n.HeadingMD=t("h4","heading-md","HeadingMD"),n.HeadingSM=t("h5","heading-sm","HeadingSM"),n.HeadingXS=t("h6","heading-xs","HeadingXS");const o=(r,n)=>{const t=(n,t)=>{var{weight:i,inline:o,paragraph:s,maxLines:a}=n,l=K(n,["weight","inline","paragraph","maxLines"]);return e(qt,Object.assign({ref:t,as:o?"span":"p",$textStyle:r,$weight:i,$inline:o,$paragraph:s,$maxLines:a},l))};return t.displayName=`Typography.${n}`,i.forwardRef(t)};n.BodyBL=o("body-baseline","BodyBL"),n.BodyMD=o("body-md","BodyMD"),n.BodySM=o("body-sm","BodySM"),n.BodyXS=o("body-xs","BodyXS");const s=(n,t)=>{const o=(t,i)=>{var{weight:o,children:s,external:a,underlineStyle:l="underline"}=t,d=K(t,["weight","children","external","underlineStyle"]);return r(Jt,Object.assign({ref:i,$textStyle:n,$weight:o,$underlineStyle:l},d,{children:[s,a&&e(Gt,{})]}))};return o.displayName=`Typography.${t}`,i.forwardRef(o)};n.LinkBL=s("body-baseline","LinkBL"),n.LinkMD=s("body-md","LinkMD"),n.LinkSM=s("body-sm","LinkSM"),n.LinkXS=s("body-xs","LinkXS")}(Qt||(Qt={}));let ai=function(e){function r(r){var n;(n=e.call(this,r)||this).onKeyUp=()=>{n.onEnd()},n.onMouseUp=()=>{n.onEnd(n.getMouseEventMap())},n.onTouchEnd=e=>{e.preventDefault(),n.onEnd(n.getTouchEventMap())},n.onBlur=()=>{n.setState({index:-1},n.onEnd(n.getKeyDownEventMap()))},n.onMouseMove=e=>{n.setState({pending:!0});const r=n.getMousePosition(e),t=n.getDiffPosition(r[0]),i=n.getValueFromPosition(t);n.move(i)},n.onTouchMove=e=>{if(e.touches.length>1)return;n.setState({pending:!0});const r=n.getTouchPosition(e);if(void 0===n.isScrolling){const e=r[0]-n.startPosition[0],t=r[1]-n.startPosition[1];n.isScrolling=Math.abs(t)>Math.abs(e)}if(n.isScrolling)return void n.setState({index:-1});const t=n.getDiffPosition(r[0]),i=n.getValueFromPosition(t);n.move(i)},n.onKeyDown=e=>{if(!(e.ctrlKey||e.shiftKey||e.altKey||e.metaKey))switch(n.setState({pending:!0}),e.key){case"ArrowLeft":case"ArrowDown":case"Left":case"Down":e.preventDefault(),n.moveDownByStep();break;case"ArrowRight":case"ArrowUp":case"Right":case"Up":e.preventDefault(),n.moveUpByStep();break;case"Home":e.preventDefault(),n.move(n.props.min);break;case"End":e.preventDefault(),n.move(n.props.max);break;case"PageDown":e.preventDefault(),n.moveDownByStep(n.props.pageFn(n.props.step));break;case"PageUp":e.preventDefault(),n.moveUpByStep(n.props.pageFn(n.props.step))}},n.onSliderMouseDown=e=>{if(!n.props.disabled&&2!==e.button){if(n.setState({pending:!0}),!n.props.snapDragDisabled){const r=n.getMousePosition(e);n.forceValueFromPosition(r[0],(e=>{n.start(e,r[0]),ii(n.getMouseEventMap())}))}ri(e)}},n.onSliderClick=e=>{if(!n.props.disabled&&n.props.onSliderClick&&!n.hasMoved){const r=n.getMousePosition(e),t=oi(n.calcValue(n.calcOffsetFromPosition(r[0])),n.props);n.props.onSliderClick(t)}},n.createOnKeyDown=e=>r=>{n.props.disabled||(n.start(e),ii(n.getKeyDownEventMap()),ri(r))},n.createOnMouseDown=e=>r=>{if(n.props.disabled||2===r.button)return;n.setState({pending:!0});const t=n.getMousePosition(r);n.start(e,t[0]),ii(n.getMouseEventMap()),ri(r)},n.createOnTouchStart=e=>r=>{if(n.props.disabled||r.touches.length>1)return;n.setState({pending:!0});const t=n.getTouchPosition(r);n.startPosition=t,n.isScrolling=void 0,n.start(e,t[0]),ii(n.getTouchEventMap()),function(e){e.stopPropagation&&e.stopPropagation()}(r)},n.handleResize=()=>{const e=window.setTimeout((()=>{n.pendingResizeTimeouts.shift(),n.resize()}),0);n.pendingResizeTimeouts.push(e)},n.renderThumb=(e,r)=>{const t=n.props.thumbClassName+" "+n.props.thumbClassName+"-"+r+" "+(n.state.index===r?n.props.thumbActiveClassName:""),i={ref:e=>{n["thumb"+r]=e},key:n.props.thumbClassName+"-"+r,className:t,style:e,onMouseDown:n.createOnMouseDown(r),onTouchStart:n.createOnTouchStart(r),onFocus:n.createOnKeyDown(r),tabIndex:0,role:"slider","aria-orientation":n.props.orientation,"aria-valuenow":n.state.value[r],"aria-valuemin":n.props.min,"aria-valuemax":n.props.max,"aria-label":Array.isArray(n.props.ariaLabel)?n.props.ariaLabel[r]:n.props.ariaLabel,"aria-labelledby":Array.isArray(n.props.ariaLabelledby)?n.props.ariaLabelledby[r]:n.props.ariaLabelledby,"aria-disabled":n.props.disabled},o={index:r,value:ti(n.state.value),valueNow:n.state.value[r]};return n.props.ariaValuetext&&(i["aria-valuetext"]="string"==typeof n.props.ariaValuetext?n.props.ariaValuetext:n.props.ariaValuetext(o)),n.props.renderThumb(i,o)},n.renderTrack=(e,r,t)=>{const i={key:n.props.trackClassName+"-"+e,className:n.props.trackClassName+" "+n.props.trackClassName+"-"+e,style:n.buildTrackStyle(r,n.state.upperBound-t)},o={index:e,value:ti(n.state.value)};return n.props.renderTrack(i,o)};let t=ni(r.value);t.length||(t=ni(r.defaultValue)),n.pendingResizeTimeouts=[];const o=[];for(let e=0;e<t.length;e+=1)t[e]=oi(t[e],r),o.push(e);return n.resizeObserver=null,n.resizeElementRef=i.createRef(),n.state={index:-1,upperBound:0,sliderLength:0,value:t,zIndices:o},n}!function(e,r){e.prototype=Object.create(r.prototype),e.prototype.constructor=e,ei(e,r)}(r,e);var n=r.prototype;return n.componentDidMount=function(){"undefined"!=typeof window&&(this.resizeObserver=new ResizeObserver(this.handleResize),this.resizeObserver.observe(this.resizeElementRef.current),this.resize())},r.getDerivedStateFromProps=function(e,r){const n=ni(e.value);return n.length?r.pending?null:{value:n.map((r=>oi(r,e)))}:null},n.componentDidUpdate=function(){0===this.state.upperBound&&this.resize()},n.componentWillUnmount=function(){this.clearPendingResizeTimeouts(),this.resizeObserver&&this.resizeObserver.disconnect()},n.onEnd=function(e){e&&function(e){Object.keys(e).forEach((r=>{"undefined"!=typeof document&&document.removeEventListener(r,e[r],!1)}))}(e),this.hasMoved&&this.fireChangeEvent("onAfterChange"),this.setState({pending:!1}),this.hasMoved=!1},n.getValue=function(){return ti(this.state.value)},n.getClosestIndex=function(e){let r=Number.MAX_VALUE,n=-1;const{value:t}=this.state,i=t.length;for(let o=0;o<i;o+=1){const i=this.calcOffset(t[o]),s=Math.abs(e-i);s<r&&(r=s,n=o)}return n},n.getMousePosition=function(e){return[e["page"+this.axisKey()],e["page"+this.orthogonalAxisKey()]]},n.getTouchPosition=function(e){const r=e.touches[0];return[r["page"+this.axisKey()],r["page"+this.orthogonalAxisKey()]]},n.getKeyDownEventMap=function(){return{keydown:this.onKeyDown,keyup:this.onKeyUp,focusout:this.onBlur}},n.getMouseEventMap=function(){return{mousemove:this.onMouseMove,mouseup:this.onMouseUp}},n.getTouchEventMap=function(){return{touchmove:this.onTouchMove,touchend:this.onTouchEnd}},n.getValueFromPosition=function(e){const r=e/(this.state.sliderLength-this.state.thumbSize)*(this.props.max-this.props.min);return oi(this.state.startValue+r,this.props)},n.getDiffPosition=function(e){let r=e-this.state.startPosition;return this.props.invert&&(r*=-1),r},n.resize=function(){const{slider:e,thumb0:r}=this;if(!e||!r)return;const n=this.sizeKey(),t=e.getBoundingClientRect(),i=e[n],o=t[this.posMaxKey()],s=t[this.posMinKey()],a=r.getBoundingClientRect()[n.replace("client","").toLowerCase()],l=i-a,d=Math.abs(o-s);this.state.upperBound===l&&this.state.sliderLength===d&&this.state.thumbSize===a||this.setState({upperBound:l,sliderLength:d,thumbSize:a})},n.calcOffset=function(e){const r=this.props.max-this.props.min;return 0===r?0:(e-this.props.min)/r*this.state.upperBound},n.calcValue=function(e){return e/this.state.upperBound*(this.props.max-this.props.min)+this.props.min},n.calcOffsetFromPosition=function(e){const{slider:r}=this,n=r.getBoundingClientRect(),t=n[this.posMaxKey()],i=n[this.posMinKey()];let o=e-(window["page"+this.axisKey()+"Offset"]+(this.props.invert?t:i));return this.props.invert&&(o=this.state.sliderLength-o),o-=this.state.thumbSize/2,o},n.forceValueFromPosition=function(e,r){const n=this.calcOffsetFromPosition(e),t=this.getClosestIndex(n),i=oi(this.calcValue(n),this.props),o=this.state.value.slice();o[t]=i;for(let e=0;e<o.length-1;e+=1)if(o[e+1]-o[e]<this.props.minDistance)return;this.fireChangeEvent("onBeforeChange"),this.hasMoved=!0,this.setState({value:o},(()=>{r(t),this.fireChangeEvent("onChange")}))},n.clearPendingResizeTimeouts=function(){do{const e=this.pendingResizeTimeouts.shift();clearTimeout(e)}while(this.pendingResizeTimeouts.length)},n.start=function(e,r){const n=this["thumb"+e];n&&n.focus();const{zIndices:t}=this.state;t.splice(t.indexOf(e),1),t.push(e),this.setState((n=>({startValue:n.value[e],startPosition:void 0!==r?r:n.startPosition,index:e,zIndices:t})))},n.moveUpByStep=function(e){void 0===e&&(e=this.props.step);const r=this.state.value[this.state.index],n=oi(this.props.invert&&"horizontal"===this.props.orientation?r-e:r+e,this.props);this.move(Math.min(n,this.props.max))},n.moveDownByStep=function(e){void 0===e&&(e=this.props.step);const r=this.state.value[this.state.index],n=oi(this.props.invert&&"horizontal"===this.props.orientation?r+e:r-e,this.props);this.move(Math.max(n,this.props.min))},n.move=function(e){const r=this.state.value.slice(),{index:n}=this.state,{length:t}=r,i=r[n];if(e===i)return;this.hasMoved||this.fireChangeEvent("onBeforeChange"),this.hasMoved=!0;const{pearling:o,max:s,min:a,minDistance:l}=this.props;if(!o){if(n>0){const t=r[n-1];e<t+l&&(e=t+l)}if(n<t-1){const t=r[n+1];e>t-l&&(e=t-l)}}r[n]=e,o&&t>1&&(e>i?(this.pushSucceeding(r,l,n),function(e,r,n,t){for(let i=0;i<e;i+=1){const o=t-i*n;r[e-1-i]>o&&(r[e-1-i]=o)}}(t,r,l,s)):e<i&&(this.pushPreceding(r,l,n),function(e,r,n,t){for(let i=0;i<e;i+=1){const e=t+i*n;r[i]<e&&(r[i]=e)}}(t,r,l,a))),this.setState({value:r},this.fireChangeEvent.bind(this,"onChange"))},n.pushSucceeding=function(e,r,n){let t,i;for(t=n,i=e[t]+r;null!==e[t+1]&&i>e[t+1];t+=1,i=e[t]+r)e[t+1]=si(i,this.props)},n.pushPreceding=function(e,r,n){for(let t=n,i=e[t]-r;null!==e[t-1]&&i<e[t-1];t-=1,i=e[t]-r)e[t-1]=si(i,this.props)},n.axisKey=function(){return"vertical"===this.props.orientation?"Y":"X"},n.orthogonalAxisKey=function(){return"vertical"===this.props.orientation?"X":"Y"},n.posMinKey=function(){return"vertical"===this.props.orientation?this.props.invert?"bottom":"top":this.props.invert?"right":"left"},n.posMaxKey=function(){return"vertical"===this.props.orientation?this.props.invert?"top":"bottom":this.props.invert?"left":"right"},n.sizeKey=function(){return"vertical"===this.props.orientation?"clientHeight":"clientWidth"},n.fireChangeEvent=function(e){this.props[e]&&this.props[e](ti(this.state.value),this.state.index)},n.buildThumbStyle=function(e,r){const n={position:"absolute",touchAction:"none",willChange:this.state.index>=0?this.posMinKey():void 0,zIndex:this.state.zIndices.indexOf(r)+1};return n[this.posMinKey()]=e+"px",n},n.buildTrackStyle=function(e,r){const n={position:"absolute",willChange:this.state.index>=0?this.posMinKey()+","+this.posMaxKey():void 0};return n[this.posMinKey()]=e,n[this.posMaxKey()]=r,n},n.buildMarkStyle=function(e){var r;return(r={position:"absolute"})[this.posMinKey()]=e,r},n.renderThumbs=function(e){const{length:r}=e,n=[];for(let t=0;t<r;t+=1)n[t]=this.buildThumbStyle(e[t],t);const t=[];for(let e=0;e<r;e+=1)t[e]=this.renderThumb(n[e],e);return t},n.renderTracks=function(e){const r=[],n=e.length-1;r.push(this.renderTrack(0,0,e[0]));for(let t=0;t<n;t+=1)r.push(this.renderTrack(t+1,e[t],e[t+1]));return r.push(this.renderTrack(n+1,e[n],this.state.upperBound)),r},n.renderMarks=function(){let{marks:e}=this.props;const r=this.props.max-this.props.min+1;return"boolean"==typeof e?e=Array.from({length:r}).map(((e,r)=>r)):"number"==typeof e&&(e=Array.from({length:r}).map(((e,r)=>r)).filter((r=>r%e==0))),e.map(parseFloat).sort(((e,r)=>e-r)).map((e=>{const r=this.calcOffset(e),n={key:e,className:this.props.markClassName,style:this.buildMarkStyle(r)};return this.props.renderMark(n)}))},n.render=function(){const e=[],{value:r}=this.state,n=r.length;for(let t=0;t<n;t+=1)e[t]=this.calcOffset(r[t],t);const t=this.props.withTracks?this.renderTracks(e):null,o=this.renderThumbs(e),s=this.props.marks?this.renderMarks():null;return i.createElement("div",{ref:e=>{this.slider=e,this.resizeElementRef.current=e},style:{position:"relative"},className:this.props.className+(this.props.disabled?" disabled":""),onMouseDown:this.onSliderMouseDown,onClick:this.onSliderClick},t,o,s)},r}(i.Component);ai.displayName="ReactSlider",ai.defaultProps={min:0,max:100,step:1,pageFn:e=>10*e,minDistance:0,defaultValue:0,orientation:"horizontal",className:"slider",thumbClassName:"thumb",thumbActiveClassName:"active",trackClassName:"track",markClassName:"mark",withTracks:!0,pearling:!1,disabled:!1,snapDragDisabled:!1,invert:!1,marks:[],renderThumb:e=>i.createElement("div",e),renderTrack:e=>i.createElement("div",e),renderMark:e=>i.createElement("span",e)};var li=ai;const di=y.div`
    isolation: isolate;
`,ci=y.div`
    margin-top: ${zt["spacing-8"]};
    display: flex;
    justify-content: space-between;
    gap: ${zt["spacing-8"]};
`,ui=y.div`
    margin-bottom: ${zt["spacing-8"]};
`,gi=y(Qt.BodyBL)`
    overflow-wrap: anywhere;
`,hi=y(li)`
    height: 0.875rem;
`,bi=y.div`
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

        background-color: ${Bt.bg};
        box-shadow: ${Mt["sm-subtle"]};
        border: ${kt["width-010"]} ${kt.solid}
            ${e=>e.$disabled?Bt["border-selected-disabled"]:Bt["border-strong"]};
        border-radius: ${Ot.full};
    }
`,mi=y.div`
    height: 0.875rem;
    width: 0.875rem;
    position: relative;
    outline: none;

    &:focus ${bi}:after {
        outline-offset: -1px;
        outline: ${kt["width-040"]} ${kt.solid}
            ${Bt["border-selected"]};
    }
`,pi=y.div`
    height: 0.25rem;
    top: 50%;
    transform: translateY(-50%);
    border-radius: ${Ot.full};

    background: ${e=>e.$color&&"function"==typeof e.$color?e.$color(e):e.$color||Bt["border-strong"](e)};
`,fi=y.div`
    display: flex;
    margin-bottom: ${zt["spacing-16"]};
    align-items: baseline;
`,yi=y.div`
    margin: 0 0.5rem;
`,vi=y.div`
    width: 100%;
    height: 4rem;
    display: flex;
    align-items: flex-end;
    padding: 0 0.4375rem;
`,xi=y.div`
    flex: 1;
    border-radius: ${Ot.sm} ${Ot.sm} 0 0;
    border: 0.5px solid transparent; // space between bars
    background-clip: content-box;

    ${e=>{let r=Bt["bg-strongest"];return e.$disabled&&e.$selected?r=Bt["bg-selected-stronger-disabled"]:e.$disabled?r=Bt["bg-disabled"]:e.$selected&&(r=Bt["bg-selected-stronger"]),v`
            background-color: ${r};
        `}}
`,Fi=y((n=>{var{value:t,min:i=0,max:a=100,step:l=1,minRange:d,numOfThumbs:c=2,colors:u,disabled:g,readOnly:h,ariaLabels:b,showSliderLabels:m,sliderLabelPrefix:p,sliderLabelSuffix:f,showIndicatorLabel:y,indicatorLabelPrefix:v,indicatorLabelSuffix:x,renderSliderLabel:F,onChange:w,onChangeEnd:$}=n,E=K(n,["value","min","max","step","minRange","numOfThumbs","colors","disabled","readOnly","ariaLabels","showSliderLabels","sliderLabelPrefix","sliderLabelSuffix","showIndicatorLabel","indicatorLabelPrefix","indicatorLabelSuffix","renderSliderLabel","onChange","onChangeEnd"]);const[D,C]=o(S()),B=function(){const e=function(){const e=g||h?Bt["border-disabled"]:Bt["border-strong"],r=g||h?Bt["border-selected-disabled"]:Bt["border-selected"];if(1===c)return[r,e];const n=[];n.push(e);for(let e=0;e<c-1;e++)n.push(r);return n.push(e),n}();return new Array(c+1).fill(0).map(((r,n)=>(null==u?void 0:u[n])||e[n]))}();s((()=>{t!==D&&C(S())}),[t]);function S(){if(t&&t.length===c)return t;const e=[];for(let r=0;r<c;r++)e.push(i+l*r);return e}const A=e=>F?F(e):r(gi,{children:[p,e,f]});return r(di,Object.assign({},E,{children:[y&&e(ui,{children:(()=>{let e="";if(1===D.length)e=`${D[0]}`;else if(2===D.length)e=`${D[0]} - ${D[1]}`;else if(D.length>2){e=`${Math.min(...D)} - ${Math.max(...D)}`}return r(gi,{children:[v,e,x]})})()}),e(hi,{step:l,min:i,max:a,value:D,disabled:g||h,onChange:(e,r)=>{if("number"==typeof e){const r=[e];C(r),null==w||w(r)}else{if(r>-1&&D[r]===e[r])return;const n=[...e];C(n),null==w||w(n)}},onAfterChange:e=>{if("number"==typeof e){const r=[e];C(r),null==$||$(r)}else{const r=[...e];C(r),null==$||$(r)}},minDistance:d,ariaLabel:b,renderThumb:(r,n)=>e(mi,Object.assign({"data-testid":`slider-thumb-${n.index}`},r,{tabIndex:g?void 0:r.tabIndex,children:e(bi,{$disabled:g,$readOnly:h})})),renderTrack:(r,n)=>e(pi,Object.assign({"data-testid":`slider-track-${n.index}`},r,{$color:B[n.index]}))}),m&&r(ci,{children:[e("div",{children:A(i)}),e("div",{children:A(a)})]})]}))}))`
    margin-top: -0.3125rem;
`,wi=t=>{var{bins:i=[],interval:l,disabled:d,readOnly:c,value:u,showRangeLabels:g,rangeLabelPrefix:h,rangeLabelSuffix:b,ariaLabels:m,onChange:p,onChangeEnd:f,renderEmptyView:y,renderRangeLabel:v}=t,x=K(t,["bins","interval","disabled","readOnly","value","showRangeLabels","rangeLabelPrefix","rangeLabelSuffix","ariaLabels","onChange","onChangeEnd","renderEmptyView","renderRangeLabel"]);const F=i.map((e=>e.count)),w=Math.max(...F),$=i.map((e=>e.minValue)),E=Math.max(...$),D=Math.min(...$),[C,B]=o(z()),S=a((()=>{const e=[...i].sort(((e,r)=>e.minValue-r.minValue)),r=(E-D)/l+1,n=[];for(let t=0;t<r;t++){const r=e.find((e=>e.minValue===D+l*t));r?n.push(r):n.push({count:0,minValue:D+l*t})}return n}),[i,l]);s((()=>{u!==C&&B(z())}),[u]);const A=e=>{const[r,n]=e,t=[r,n];B(t),null==p||p(t)},k=e=>{const[r,n]=e,t=[r,n];B(t),null==f||f(t)};function z(){return null!=u?u:[D,D+l]}const O=e=>v?v(e):r(Qt.BodyBL,{children:[h,e,b]});return r("div",Object.assign({},x,{children:[g&&r(fi,{children:[O(C[0]),e(yi,{children:"-"}),O(C[1])]}),S.every((e=>0===e.count))&&y?y():r(n,{children:[e(vi,{children:S.map(((r,n)=>{const t=r.count/w;return e(xi,{style:{height:t?`calc(calc(100% - 0.25rem) * ${t} + 0.25rem)`:0},$selected:r.minValue>=C[0]&&r.minValue<C[1],$disabled:d||c},n)}))}),e(Fi,{min:D,max:E+l,step:l,minRange:l,numOfThumbs:2,value:C,disabled:d,readOnly:c,ariaLabels:m,onChange:A,onChangeEnd:k})]})]}))};var $i=function(e,r){return $i=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,r){e.__proto__=r}||function(e,r){for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])},$i(e,r)};var Ei=function(){return Ei=Object.assign||function(e){for(var r,n=1,t=arguments.length;n<t;n++)for(var i in r=arguments[n])Object.prototype.hasOwnProperty.call(r,i)&&(e[i]=r[i]);return e},Ei.apply(this,arguments)};var Di="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};var Ci=function(e){var r=typeof e;return null!=e&&("object"==r||"function"==r)},Bi="object"==typeof Di&&Di&&Di.Object===Object&&Di,Si="object"==typeof self&&self&&self.Object===Object&&self,Ai=Bi||Si||Function("return this")(),ki=Ai,zi=function(){return ki.Date.now()},Oi=/\s/;var Mi=function(e){for(var r=e.length;r--&&Oi.test(e.charAt(r)););return r},_i=/^\s+/;var Ti=function(e){return e?e.slice(0,Mi(e)+1).replace(_i,""):e},Li=Ai.Symbol,ji=Li,Ri=Object.prototype,Pi=Ri.hasOwnProperty,Yi=Ri.toString,Ii=ji?ji.toStringTag:void 0;var Hi=function(e){var r=Pi.call(e,Ii),n=e[Ii];try{e[Ii]=void 0;var t=!0}catch(e){}var i=Yi.call(e);return t&&(r?e[Ii]=n:delete e[Ii]),i},Wi=Object.prototype.toString;var Ni=Hi,Vi=function(e){return Wi.call(e)},Ki=Li?Li.toStringTag:void 0;var Ui=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":Ki&&Ki in Object(e)?Ni(e):Vi(e)},Zi=function(e){return null!=e&&"object"==typeof e};var Xi=Ti,qi=Ci,Ji=function(e){return"symbol"==typeof e||Zi(e)&&"[object Symbol]"==Ui(e)},Gi=/^[-+]0x[0-9a-f]+$/i,Qi=/^0b[01]+$/i,eo=/^0o[0-7]+$/i,ro=parseInt;var no=Ci,to=zi,io=function(e){if("number"==typeof e)return e;if(Ji(e))return NaN;if(qi(e)){var r="function"==typeof e.valueOf?e.valueOf():e;e=qi(r)?r+"":r}if("string"!=typeof e)return 0===e?e:+e;e=Xi(e);var n=Qi.test(e);return n||eo.test(e)?ro(e.slice(2),n?2:8):Gi.test(e)?NaN:+e},oo=Math.max,so=Math.min;var ao=function(e,r,n){var t,i,o,s,a,l,d=0,c=!1,u=!1,g=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function h(r){var n=t,o=i;return t=i=void 0,d=r,s=e.apply(o,n)}function b(e){var n=e-l;return void 0===l||n>=r||n<0||u&&e-d>=o}function m(){var e=to();if(b(e))return p(e);a=setTimeout(m,function(e){var n=r-(e-l);return u?so(n,o-(e-d)):n}(e))}function p(e){return a=void 0,g&&t?h(e):(t=i=void 0,s)}function f(){var e=to(),n=b(e);if(t=arguments,i=this,l=e,n){if(void 0===a)return function(e){return d=e,a=setTimeout(m,r),c?h(e):s}(l);if(u)return clearTimeout(a),a=setTimeout(m,r),h(l)}return void 0===a&&(a=setTimeout(m,r)),s}return r=io(r)||0,no(n)&&(c=!!n.leading,o=(u="maxWait"in n)?oo(io(n.maxWait)||0,r):o,g="trailing"in n?!!n.trailing:g),f.cancel=function(){void 0!==a&&clearTimeout(a),d=0,t=l=i=a=void 0},f.flush=function(){return void 0===a?s:p(to())},f},lo=ao,co=Ci;var uo=function(e,r,n){var t=!0,i=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return co(n)&&(t="leading"in n?!!n.leading:t,i="trailing"in n?!!n.trailing:i),lo(e,r,{leading:t,maxWait:r,trailing:i})},go=function(e,r,n,t){switch(r){case"debounce":return ao(e,n,t);case"throttle":return uo(e,n,t);default:return e}},ho=function(e){return"function"==typeof e},bo=function(){return"undefined"==typeof window},mo=function(e){return e instanceof Element||e instanceof HTMLDocument},po=function(e,r,n,t){return function(i){var o=i.width,s=i.height;r((function(r){return r.width===o&&r.height===s||r.width===o&&!t||r.height===s&&!n?r:(e&&ho(e)&&e(o,s),{width:o,height:s})}))}};!function(e){function r(r){var n=e.call(this,r)||this;n.cancelHandler=function(){n.resizeHandler&&n.resizeHandler.cancel&&(n.resizeHandler.cancel(),n.resizeHandler=null)},n.attachObserver=function(){var e=n.props,r=e.targetRef,t=e.observerOptions;if(!bo()){r&&r.current&&(n.targetRef.current=r.current);var i=n.getElement();i&&(n.observableElement&&n.observableElement===i||(n.observableElement=i,n.resizeObserver.observe(i,t)))}},n.getElement=function(){var e=n.props,r=e.querySelector,t=e.targetDomEl;if(bo())return null;if(r)return document.querySelector(r);if(t&&mo(t))return t;if(n.targetRef&&mo(n.targetRef.current))return n.targetRef.current;var i=j(n);if(!i)return null;switch(n.getRenderType()){case"renderProp":case"childFunction":case"child":case"childArray":return i;default:return i.parentElement}},n.createResizeHandler=function(e){var r=n.props,t=r.handleWidth,i=void 0===t||t,o=r.handleHeight,s=void 0===o||o,a=r.onResize;if(i||s){var l=po(a,n.setState.bind(n),i,s);e.forEach((function(e){var r=e&&e.contentRect||{},t=r.width,i=r.height;!n.skipOnMount&&!bo()&&l({width:t,height:i}),n.skipOnMount=!1}))}},n.getRenderType=function(){var e=n.props,r=e.render,t=e.children;return ho(r)?"renderProp":ho(t)?"childFunction":d(t)?"child":Array.isArray(t)?"childArray":"parent"};var t=r.skipOnMount,i=r.refreshMode,o=r.refreshRate,s=void 0===o?1e3:o,a=r.refreshOptions;return n.state={width:void 0,height:void 0},n.skipOnMount=t,n.targetRef=c(),n.observableElement=null,bo()||(n.resizeHandler=go(n.createResizeHandler,i,s,a),n.resizeObserver=new window.ResizeObserver(n.resizeHandler)),n}(function(e,r){if("function"!=typeof r&&null!==r)throw new TypeError("Class extends value "+String(r)+" is not a constructor or null");function n(){this.constructor=e}$i(e,r),e.prototype=null===r?Object.create(r):(n.prototype=r.prototype,new n)})(r,e),r.prototype.componentDidMount=function(){this.attachObserver()},r.prototype.componentDidUpdate=function(){this.attachObserver()},r.prototype.componentWillUnmount=function(){bo()||(this.observableElement=null,this.resizeObserver.disconnect(),this.cancelHandler())},r.prototype.render=function(){var e,r=this.props,n=r.render,i=r.children,o=r.nodeType,s=void 0===o?"div":o,a=this.state,l={width:a.width,height:a.height,targetRef:this.targetRef};switch(this.getRenderType()){case"renderProp":return n&&n(l);case"childFunction":return(e=i)(l);case"child":if((e=i).type&&"string"==typeof e.type){var d=function(e,r){var n={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&r.indexOf(t)<0&&(n[t]=e[t]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(t=Object.getOwnPropertySymbols(e);i<t.length;i++)r.indexOf(t[i])<0&&Object.prototype.propertyIsEnumerable.call(e,t[i])&&(n[t[i]]=e[t[i]])}return n}(l,["targetRef"]);return u(e,d)}return u(e,l);case"childArray":return(e=i).map((function(e){return!!e&&u(e,l)}));default:return t.createElement(s,null)}}}(g);var fo,yo=bo()?s:h;!function(e){e.transformWithSpaces=(e,r)=>{const n="(.{"+r+"})";return e.replace(/[^\dA-Z]/gi,"").replace(new RegExp(n,"g"),"$1 ").trim()},e.padValue=(e,r)=>{if("0"===e)return r?e:e.padStart(2,"0");if(""===e)return e;return parseInt(e).toString().padStart(2,"0")},e.shouldTruncateToTwoLines=(e,r)=>{const n=Math.floor(r/9);return e.length>=2*n||1===e.split(" ").length&&e.length>n},e.truncateOneLine=(e,r,n,t,i=8)=>{let o=0;r>n&&(o=Math.floor((r-n)/i));const s=t+o;if(s<e.length){const r=Math.floor(s/2);return e.substring(0,r)+" ... "+e.substring(e.length-r,e.length)}return e},e.truncateTwoLines=(e,r,n,t=1.2)=>{const i=Math.floor(2*r/(.6*n))*(2/t);if(e.length<=i)return e;const o=Math.floor(.6*i),s=Math.floor(.2*i);return`${e.substring(0,o)}...${e.substring(e.length-s)}`},e.getTextWidth=(r,n)=>{if("undefined"==typeof document)return 0;const t=(e.getTextWidth.canvas||(e.getTextWidth.canvas=document.createElement("canvas"))).getContext("2d");t.font=n;return t.measureText(r).width},e.maskValue=(e,n)=>{if(!e)return e;const{maskRange:t,unmaskRange:i,maskChar:o="•",maskRegex:s,maskTransformer:a}=n;if(a)return a(e);if(s)return e.replace(s,o);if(t){const{startIndex:n,endIndex:i}=r(t[0],t[1]);return e.substring(0,n)+o.repeat(e.substring(n,i+1).length)+e.substring(i+1)}if(i){const{startIndex:n,endIndex:t}=r(i[0],i[1]);return o.repeat(e.substring(0,n).length)+e.substring(n,t+1)+o.repeat(e.substring(t+1).length)}return e};const r=(e,r)=>e<r?{startIndex:e,endIndex:r}:{startIndex:r,endIndex:e},n=new Intl.PluralRules("en",{type:"ordinal"}),t=new Map([["one","st"],["two","nd"],["few","rd"],["other","th"]]);e.formatOrdinal=e=>{const r=n.select(e);return`${e}${t.get(r)}`},e.getMaskedDescription=(e,r,n)=>{if(!e||"masked"!==r||!n)return"";const[t,i]=n,o=t>0,s=i<e.length-1,a=o?e.substring(0,t):"",l=s?e.substring(i+1):"";return o&&s?`Starting with ${a} and ending with ${l}`:o?`Starting with ${a}`:s?`Ending with ${l}`:""}}(fo||(fo={}));const vo=y.div`
    font-weight: ${e=>e.$bold?St.Spec["weight-semibold"]:St.Spec["weight-regular"]};

    ${e=>e.$disabled?v`
                color: ${Bt["text-disabled"]};
            `:e.$selected?v`
                color: ${Bt["text-selected"]};
            `:v`
                color: ${Bt.text};
            `}
    width: 100%;

    ${e=>"end"===e.$truncateType&&Kt(e.$maxLines||2)}
    overflow-wrap: break-word;
`,xo=y.div`
    color: ${Bt["text-subtlest"]};
    width: 100%;

    ${e=>"end"===e.$truncateType&&Kt(e.$maxLines||2)}
    overflow-wrap: break-word;

    ${e=>"next-line"===e.$labelDisplayType?v`
                    ${St["body-md-semibold"]}
                `:v`
                    ${St["body-baseline-regular"]}
                `}
`;y.span`
    font-weight: ${St.Spec["weight-semibold"]};
`,y.div`
    text-align: left;
    width: 100%;
    overflow: hidden;
    overflow-wrap: break-word;

    ${e=>"small"===e.$variant?St["body-md-regular"]:St["body-baseline-regular"]}

    ${e=>{switch(e.$labelDisplayType){case"next-line":return v`
                    display: flex;
                    flex-direction: column;
                `;case"inline":return v`
                    ${vo} {
                        display: inline;
                    }

                    ${xo} {
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
`;var Fo=Sr;var wo=function(e){var r=this.__data__,n=r.delete(e);return this.size=r.size,n};var $o=function(e){return this.__data__.get(e)};var Eo=function(e){return this.__data__.has(e)},Do=Sr,Co=Ar,Bo=Xr;var So=function(e,r){var n=this.__data__;if(n instanceof Do){var t=n.__data__;if(!Co||t.length<199)return t.push([e,r]),this.size=++n.size,this;n=this.__data__=new Bo(t)}return n.set(e,r),this.size=n.size,this},Ao=Sr,ko=function(){this.__data__=new Fo,this.size=0},zo=wo,Oo=$o,Mo=Eo,_o=So;function To(e){var r=this.__data__=new Ao(e);this.size=r.size}To.prototype.clear=ko,To.prototype.delete=zo,To.prototype.get=Oo,To.prototype.has=Mo,To.prototype.set=_o;var Lo=Xr,jo=function(e){return this.__data__.set(e,"__lodash_hash_undefined__"),this},Ro=function(e){return this.__data__.has(e)};function Po(e){var r=-1,n=null==e?0:e.length;for(this.__data__=new Lo;++r<n;)this.add(e[r])}Po.prototype.add=Po.prototype.push=jo,Po.prototype.has=Ro,Q.Uint8Array;var Yo=ee?ee.prototype:void 0;Yo&&Yo.valueOf;var Io=ue,Ho=ge;var Wo=function(e){return Ho(e)&&"[object Arguments]"==Io(e)},No=Object.prototype;No.hasOwnProperty,No.propertyIsEnumerable;Wo(function(){return arguments}());var Vo={exports:{}};var Ko=function(){return!1};!function(e,r){var n=Q,t=Ko,i=r&&!r.nodeType&&r,o=i&&e&&!e.nodeType&&e,s=o&&o.exports===i?n.Buffer:void 0,a=(s?s.isBuffer:void 0)||t;e.exports=a}(Vo,Vo.exports);var Uo={exports:{}};!function(e,r){var n=q,t=r&&!r.nodeType&&r,i=t&&e&&!e.nodeType&&e,o=i&&i.exports===t&&n.process,s=function(){try{var e=i&&i.require&&i.require("util").types;return e||o&&o.binding&&o.binding("util")}catch(e){}}();e.exports=s}(Uo,Uo.exports);var Zo=Uo.exports;Zo&&Zo.isTypedArray;var Xo=Ne(Q,"DataView"),qo=Ar,Jo=Ne(Q,"Promise"),Go=Ne(Q,"Set"),Qo=Ne(Q,"WeakMap"),es=ue,rs=ke,ns="[object Map]",ts="[object Promise]",is="[object Set]",os="[object WeakMap]",ss="[object DataView]",as=rs(Xo),ls=rs(qo),ds=rs(Jo),cs=rs(Go),us=rs(Qo),gs=es;(Xo&&gs(new Xo(new ArrayBuffer(1)))!=ss||qo&&gs(new qo)!=ns||Jo&&gs(Jo.resolve())!=ts||Go&&gs(new Go)!=is||Qo&&gs(new Qo)!=os)&&(gs=function(e){var r=es(e),n="[object Object]"==r?e.constructor:void 0,t=n?rs(n):"";if(t)switch(t){case as:return ss;case ls:return ns;case ds:return ts;case cs:return is;case us:return os}return r});var hs={exports:{}};hs.exports=function(){var e=1e3,r=6e4,n=36e5,t="millisecond",i="second",o="minute",s="hour",a="day",l="week",d="month",c="quarter",u="year",g="date",h="Invalid Date",b=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,m=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,p={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(e){var r=["th","st","nd","rd"],n=e%100;return"["+e+(r[(n-20)%10]||r[n]||r[0])+"]"}},f=function(e,r,n){var t=String(e);return!t||t.length>=r?e:""+Array(r+1-t.length).join(n)+e},y={s:f,z:function(e){var r=-e.utcOffset(),n=Math.abs(r),t=Math.floor(n/60),i=n%60;return(r<=0?"+":"-")+f(t,2,"0")+":"+f(i,2,"0")},m:function e(r,n){if(r.date()<n.date())return-e(n,r);var t=12*(n.year()-r.year())+(n.month()-r.month()),i=r.clone().add(t,d),o=n-i<0,s=r.clone().add(t+(o?-1:1),d);return+(-(t+(n-i)/(o?i-s:s-i))||0)},a:function(e){return e<0?Math.ceil(e)||0:Math.floor(e)},p:function(e){return{M:d,y:u,w:l,d:a,D:g,h:s,m:o,s:i,ms:t,Q:c}[e]||String(e||"").toLowerCase().replace(/s$/,"")},u:function(e){return void 0===e}},v="en",x={};x[v]=p;var F="$isDayjsObject",w=function(e){return e instanceof C||!(!e||!e[F])},$=function e(r,n,t){var i;if(!r)return v;if("string"==typeof r){var o=r.toLowerCase();x[o]&&(i=o),n&&(x[o]=n,i=o);var s=r.split("-");if(!i&&s.length>1)return e(s[0])}else{var a=r.name;x[a]=r,i=a}return!t&&i&&(v=i),i||!t&&v},E=function(e,r){if(w(e))return e.clone();var n="object"==typeof r?r:{};return n.date=e,n.args=arguments,new C(n)},D=y;D.l=$,D.i=w,D.w=function(e,r){return E(e,{locale:r.$L,utc:r.$u,x:r.$x,$offset:r.$offset})};var C=function(){function p(e){this.$L=$(e.locale,null,!0),this.parse(e),this.$x=this.$x||e.x||{},this[F]=!0}var f=p.prototype;return f.parse=function(e){this.$d=function(e){var r=e.date,n=e.utc;if(null===r)return new Date(NaN);if(D.u(r))return new Date;if(r instanceof Date)return new Date(r);if("string"==typeof r&&!/Z$/i.test(r)){var t=r.match(b);if(t){var i=t[2]-1||0,o=(t[7]||"0").substring(0,3);return n?new Date(Date.UTC(t[1],i,t[3]||1,t[4]||0,t[5]||0,t[6]||0,o)):new Date(t[1],i,t[3]||1,t[4]||0,t[5]||0,t[6]||0,o)}}return new Date(r)}(e),this.init()},f.init=function(){var e=this.$d;this.$y=e.getFullYear(),this.$M=e.getMonth(),this.$D=e.getDate(),this.$W=e.getDay(),this.$H=e.getHours(),this.$m=e.getMinutes(),this.$s=e.getSeconds(),this.$ms=e.getMilliseconds()},f.$utils=function(){return D},f.isValid=function(){return!(this.$d.toString()===h)},f.isSame=function(e,r){var n=E(e);return this.startOf(r)<=n&&n<=this.endOf(r)},f.isAfter=function(e,r){return E(e)<this.startOf(r)},f.isBefore=function(e,r){return this.endOf(r)<E(e)},f.$g=function(e,r,n){return D.u(e)?this[r]:this.set(n,e)},f.unix=function(){return Math.floor(this.valueOf()/1e3)},f.valueOf=function(){return this.$d.getTime()},f.startOf=function(e,r){var n=this,t=!!D.u(r)||r,c=D.p(e),h=function(e,r){var i=D.w(n.$u?Date.UTC(n.$y,r,e):new Date(n.$y,r,e),n);return t?i:i.endOf(a)},b=function(e,r){return D.w(n.toDate()[e].apply(n.toDate("s"),(t?[0,0,0,0]:[23,59,59,999]).slice(r)),n)},m=this.$W,p=this.$M,f=this.$D,y="set"+(this.$u?"UTC":"");switch(c){case u:return t?h(1,0):h(31,11);case d:return t?h(1,p):h(0,p+1);case l:var v=this.$locale().weekStart||0,x=(m<v?m+7:m)-v;return h(t?f-x:f+(6-x),p);case a:case g:return b(y+"Hours",0);case s:return b(y+"Minutes",1);case o:return b(y+"Seconds",2);case i:return b(y+"Milliseconds",3);default:return this.clone()}},f.endOf=function(e){return this.startOf(e,!1)},f.$set=function(e,r){var n,l=D.p(e),c="set"+(this.$u?"UTC":""),h=(n={},n[a]=c+"Date",n[g]=c+"Date",n[d]=c+"Month",n[u]=c+"FullYear",n[s]=c+"Hours",n[o]=c+"Minutes",n[i]=c+"Seconds",n[t]=c+"Milliseconds",n)[l],b=l===a?this.$D+(r-this.$W):r;if(l===d||l===u){var m=this.clone().set(g,1);m.$d[h](b),m.init(),this.$d=m.set(g,Math.min(this.$D,m.daysInMonth())).$d}else h&&this.$d[h](b);return this.init(),this},f.set=function(e,r){return this.clone().$set(e,r)},f.get=function(e){return this[D.p(e)]()},f.add=function(t,c){var g,h=this;t=Number(t);var b=D.p(c),m=function(e){var r=E(h);return D.w(r.date(r.date()+Math.round(e*t)),h)};if(b===d)return this.set(d,this.$M+t);if(b===u)return this.set(u,this.$y+t);if(b===a)return m(1);if(b===l)return m(7);var p=(g={},g[o]=r,g[s]=n,g[i]=e,g)[b]||1,f=this.$d.getTime()+t*p;return D.w(f,this)},f.subtract=function(e,r){return this.add(-1*e,r)},f.format=function(e){var r=this,n=this.$locale();if(!this.isValid())return n.invalidDate||h;var t=e||"YYYY-MM-DDTHH:mm:ssZ",i=D.z(this),o=this.$H,s=this.$m,a=this.$M,l=n.weekdays,d=n.months,c=n.meridiem,u=function(e,n,i,o){return e&&(e[n]||e(r,t))||i[n].slice(0,o)},g=function(e){return D.s(o%12||12,e,"0")},b=c||function(e,r,n){var t=e<12?"AM":"PM";return n?t.toLowerCase():t};return t.replace(m,(function(e,t){return t||function(e){switch(e){case"YY":return String(r.$y).slice(-2);case"YYYY":return D.s(r.$y,4,"0");case"M":return a+1;case"MM":return D.s(a+1,2,"0");case"MMM":return u(n.monthsShort,a,d,3);case"MMMM":return u(d,a);case"D":return r.$D;case"DD":return D.s(r.$D,2,"0");case"d":return String(r.$W);case"dd":return u(n.weekdaysMin,r.$W,l,2);case"ddd":return u(n.weekdaysShort,r.$W,l,3);case"dddd":return l[r.$W];case"H":return String(o);case"HH":return D.s(o,2,"0");case"h":return g(1);case"hh":return g(2);case"a":return b(o,s,!0);case"A":return b(o,s,!1);case"m":return String(s);case"mm":return D.s(s,2,"0");case"s":return String(r.$s);case"ss":return D.s(r.$s,2,"0");case"SSS":return D.s(r.$ms,3,"0");case"Z":return i}return null}(e)||i.replace(":","")}))},f.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},f.diff=function(t,g,h){var b,m=this,p=D.p(g),f=E(t),y=(f.utcOffset()-this.utcOffset())*r,v=this-f,x=function(){return D.m(m,f)};switch(p){case u:b=x()/12;break;case d:b=x();break;case c:b=x()/3;break;case l:b=(v-y)/6048e5;break;case a:b=(v-y)/864e5;break;case s:b=v/n;break;case o:b=v/r;break;case i:b=v/e;break;default:b=v}return h?b:D.a(b)},f.daysInMonth=function(){return this.endOf(d).$D},f.$locale=function(){return x[this.$L]},f.locale=function(e,r){if(!e)return this.$L;var n=this.clone(),t=$(e,r,!0);return t&&(n.$L=t),n},f.clone=function(){return D.w(this.$d,this)},f.toDate=function(){return new Date(this.valueOf())},f.toJSON=function(){return this.isValid()?this.toISOString():null},f.toISOString=function(){return this.$d.toISOString()},f.toString=function(){return this.$d.toUTCString()},p}(),B=C.prototype;return E.prototype=B,[["$ms",t],["$s",i],["$m",o],["$H",s],["$W",a],["$M",d],["$y",u],["$D",g]].forEach((function(e){B[e[1]]=function(r){return this.$g(r,e[0],e[1])}})),E.extend=function(e,r){return e.$i||(e(r,C,E),e.$i=!0),E},E.locale=$,E.isDayjs=w,E.unix=function(e){return E(1e3*e)},E.en=x[v],E.Ls=x,E.p={},E}();var bs=Z(hs.exports),ms={exports:{}};ms.exports=function(){var e={LTS:"h:mm:ss A",LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D, YYYY",LLL:"MMMM D, YYYY h:mm A",LLLL:"dddd, MMMM D, YYYY h:mm A"},r=/(\[[^[]*\])|([-_:/.,()\s]+)|(A|a|YYYY|YY?|MM?M?M?|Do|DD?|hh?|HH?|mm?|ss?|S{1,3}|z|ZZ?)/g,n=/\d\d/,t=/\d\d?/,i=/\d*[^-_:/,()\s\d]+/,o={},s=function(e){return(e=+e)+(e>68?1900:2e3)},a=function(e){return function(r){this[e]=+r}},l=[/[+-]\d\d:?(\d\d)?|Z/,function(e){(this.zone||(this.zone={})).offset=function(e){if(!e)return 0;if("Z"===e)return 0;var r=e.match(/([+-]|\d\d)/g),n=60*r[1]+(+r[2]||0);return 0===n?0:"+"===r[0]?-n:n}(e)}],d=function(e){var r=o[e];return r&&(r.indexOf?r:r.s.concat(r.f))},c=function(e,r){var n,t=o.meridiem;if(t){for(var i=1;i<=24;i+=1)if(e.indexOf(t(i,0,r))>-1){n=i>12;break}}else n=e===(r?"pm":"PM");return n},u={A:[i,function(e){this.afternoon=c(e,!1)}],a:[i,function(e){this.afternoon=c(e,!0)}],S:[/\d/,function(e){this.milliseconds=100*+e}],SS:[n,function(e){this.milliseconds=10*+e}],SSS:[/\d{3}/,function(e){this.milliseconds=+e}],s:[t,a("seconds")],ss:[t,a("seconds")],m:[t,a("minutes")],mm:[t,a("minutes")],H:[t,a("hours")],h:[t,a("hours")],HH:[t,a("hours")],hh:[t,a("hours")],D:[t,a("day")],DD:[n,a("day")],Do:[i,function(e){var r=o.ordinal,n=e.match(/\d+/);if(this.day=n[0],r)for(var t=1;t<=31;t+=1)r(t).replace(/\[|\]/g,"")===e&&(this.day=t)}],M:[t,a("month")],MM:[n,a("month")],MMM:[i,function(e){var r=d("months"),n=(d("monthsShort")||r.map((function(e){return e.slice(0,3)}))).indexOf(e)+1;if(n<1)throw new Error;this.month=n%12||n}],MMMM:[i,function(e){var r=d("months").indexOf(e)+1;if(r<1)throw new Error;this.month=r%12||r}],Y:[/[+-]?\d+/,a("year")],YY:[n,function(e){this.year=s(e)}],YYYY:[/\d{4}/,a("year")],Z:l,ZZ:l};function g(n){var t,i;t=n,i=o&&o.formats;for(var s=(n=t.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g,(function(r,n,t){var o=t&&t.toUpperCase();return n||i[t]||e[t]||i[o].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g,(function(e,r,n){return r||n.slice(1)}))}))).match(r),a=s.length,l=0;l<a;l+=1){var d=s[l],c=u[d],g=c&&c[0],h=c&&c[1];s[l]=h?{regex:g,parser:h}:d.replace(/^\[|\]$/g,"")}return function(e){for(var r={},n=0,t=0;n<a;n+=1){var i=s[n];if("string"==typeof i)t+=i.length;else{var o=i.regex,l=i.parser,d=e.slice(t),c=o.exec(d)[0];l.call(r,c),e=e.replace(c,"")}}return function(e){var r=e.afternoon;if(void 0!==r){var n=e.hours;r?n<12&&(e.hours+=12):12===n&&(e.hours=0),delete e.afternoon}}(r),r}}return function(e,r,n){n.p.customParseFormat=!0,e&&e.parseTwoDigitYear&&(s=e.parseTwoDigitYear);var t=r.prototype,i=t.parse;t.parse=function(e){var r=e.date,t=e.utc,s=e.args;this.$u=t;var a=s[1];if("string"==typeof a){var l=!0===s[2],d=!0===s[3],c=l||d,u=s[2];d&&(u=s[2]),o=this.$locale(),!l&&u&&(o=n.Ls[u]),this.$d=function(e,r,n){try{if(["x","X"].indexOf(r)>-1)return new Date(("X"===r?1e3:1)*e);var t=g(r)(e),i=t.year,o=t.month,s=t.day,a=t.hours,l=t.minutes,d=t.seconds,c=t.milliseconds,u=t.zone,h=new Date,b=s||(i||o?1:h.getDate()),m=i||h.getFullYear(),p=0;i&&!o||(p=o>0?o-1:h.getMonth());var f=a||0,y=l||0,v=d||0,x=c||0;return u?new Date(Date.UTC(m,p,b,f,y,v,x+60*u.offset*1e3)):n?new Date(Date.UTC(m,p,b,f,y,v,x)):new Date(m,p,b,f,y,v,x)}catch(e){return new Date("")}}(r,a,t),this.init(),u&&!0!==u&&(this.$L=this.locale(u).$L),c&&r!=this.format(a)&&(this.$d=new Date("")),o={}}else if(a instanceof Array)for(var h=a.length,b=1;b<=h;b+=1){s[1]=a[b-1];var m=n.apply(this,s);if(m.isValid()){this.$d=m.$d,this.$L=m.$L,this.init();break}b===h&&(this.$d=new Date(""))}else i.call(this,e)}}}();var ps=Z(ms.exports),fs={exports:{}};fs.exports=function(e,r,n){r.prototype.isBetween=function(e,r,t,i){var o=n(e),s=n(r),a="("===(i=i||"()")[0],l=")"===i[1];return(a?this.isAfter(o,t):!this.isBefore(o,t))&&(l?this.isBefore(s,t):!this.isAfter(s,t))||(a?this.isBefore(o,t):!this.isAfter(o,t))&&(l?this.isAfter(s,t):!this.isBefore(s,t))}};var ys=Z(fs.exports),vs={exports:{}};vs.exports=function(e,r){r.prototype.isSameOrAfter=function(e,r){return this.isSame(e,r)||this.isAfter(e,r)}};var xs=Z(vs.exports),Fs={exports:{}};Fs.exports=function(e,r){r.prototype.isSameOrBefore=function(e,r){return this.isSame(e,r)||this.isBefore(e,r)}};var ws,$s,Es=Z(Fs.exports),Ds={exports:{}};Ds.exports=(ws={year:0,month:1,day:2,hour:3,minute:4,second:5},$s={},function(e,r,n){var t,i=function(e,r,n){void 0===n&&(n={});var t=new Date(e),i=function(e,r){void 0===r&&(r={});var n=r.timeZoneName||"short",t=e+"|"+n,i=$s[t];return i||(i=new Intl.DateTimeFormat("en-US",{hour12:!1,timeZone:e,year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit",timeZoneName:n}),$s[t]=i),i}(r,n);return i.formatToParts(t)},o=function(e,r){for(var t=i(e,r),o=[],s=0;s<t.length;s+=1){var a=t[s],l=a.type,d=a.value,c=ws[l];c>=0&&(o[c]=parseInt(d,10))}var u=o[3],g=24===u?0:u,h=o[0]+"-"+o[1]+"-"+o[2]+" "+g+":"+o[4]+":"+o[5]+":000",b=+e;return(n.utc(h).valueOf()-(b-=b%1e3))/6e4},s=r.prototype;s.tz=function(e,r){void 0===e&&(e=t);var i=this.utcOffset(),o=this.toDate(),s=o.toLocaleString("en-US",{timeZone:e}),a=Math.round((o-new Date(s))/1e3/60),l=n(s,{locale:this.$L}).$set("millisecond",this.$ms).utcOffset(15*-Math.round(o.getTimezoneOffset()/15)-a,!0);if(r){var d=l.utcOffset();l=l.add(i-d,"minute")}return l.$x.$timezone=e,l},s.offsetName=function(e){var r=this.$x.$timezone||n.tz.guess(),t=i(this.valueOf(),r,{timeZoneName:e}).find((function(e){return"timezonename"===e.type.toLowerCase()}));return t&&t.value};var a=s.startOf;s.startOf=function(e,r){if(!this.$x||!this.$x.$timezone)return a.call(this,e,r);var t=n(this.format("YYYY-MM-DD HH:mm:ss:SSS"),{locale:this.$L});return a.call(t,e,r).tz(this.$x.$timezone,!0)},n.tz=function(e,r,i){var s=i&&r,a=i||r||t,l=o(+n(),a);if("string"!=typeof e)return n(e).tz(a);var d=function(e,r,n){var t=e-60*r*1e3,i=o(t,n);if(r===i)return[t,r];var s=o(t-=60*(i-r)*1e3,n);return i===s?[t,i]:[e-60*Math.min(i,s)*1e3,Math.max(i,s)]}(n.utc(e,s).valueOf(),l,a),c=d[0],u=d[1],g=n(c).utcOffset(u);return g.$x.$timezone=a,g},n.tz.guess=function(){return Intl.DateTimeFormat().resolvedOptions().timeZone},n.tz.setDefault=function(e){t=e}});var Cs,Bs=Z(Ds.exports);bs.extend(ys),bs.extend(Es),bs.extend(xs),bs.extend(ps),bs.extend(Bs),function(e){e.generateDays=e=>{const r=e.startOf("month"),n=bs(r).startOf("week");return Ss(n).map((e=>As(e)))},e.generateDaysForCurrentWeek=e=>{const r=e.startOf("week");return As(r)},e.generateMonths=e=>{const r=[];for(let n=0;n<12;n++){const t=e.month(n);r.push(bs(t))}return r},e.generateDecadeOfYears=e=>{const r=e.year(),n=10*Math.floor(r/10),t=e.year(n),i=[t.subtract(1,"year"),t];for(let e=1;e<11;e++)i.push(t.add(e,"year"));return i},e.getStartEndDecade=e=>{const r=10*Math.floor(+e.format("YYYY")/10);return{beginDecade:r,endDecade:+bs(`${r+9}-01-01`).format("YYYY")}},e.convertTo12HourFormat=e=>{const r=bs(e,"HH:mm");return r.isValid()?r.format("h:mm a"):""},e.isWithinRange=(e,r,n,t="day")=>!r&&!n||(r&&n?e.isBetween(r,n,t,"[]"):r?e.isSameOrAfter(r,t):e.isSameOrBefore(n,t)),e.isPreviousMonthWithinRange=(r,n)=>e.isWithinRange(r.subtract(1,"month"),n,void 0,"month"),e.isPreviousYearWithinRange=(r,n)=>e.isWithinRange(r.subtract(1,"year"),n,void 0,"year"),e.isPreviousDecadeWithinRange=(r,n)=>{const{beginDecade:t}=e.getStartEndDecade(r);return e.isWithinRange(r.year(t).subtract(1,"year"),n,void 0,"year")},e.isNextMonthWithinRange=(r,n)=>e.isWithinRange(r.add(1,"month"),void 0,n,"month"),e.isNextYearWithinRange=(r,n)=>e.isWithinRange(r.add(1,"year"),void 0,n,"year"),e.isNextDecadeWithinRange=(r,n)=>{const{endDecade:t}=e.getStartEndDecade(r);return e.isWithinRange(r.year(t).add(1,"year"),void 0,n,"year")},e.getWeekStartEnd=e=>({start:e.startOf("week").format("YYYY-MM-DD"),end:e.endOf("week").format("YYYY-MM-DD")}),e.getFixedRangeStartEnd=(e,r)=>({start:e.format("YYYY-MM-DD"),end:e.add(r-1,"day").format("YYYY-MM-DD")}),e.isDisabledDay=(r,n,t,i)=>{const o=e.isWithinRange(r,t?bs(t):void 0,i?bs(i):void 0),s=n&&n.includes(r.format("YYYY-MM-DD"));return!o||!!s}}(Cs||(Cs={}));const Ss=e=>{const r=[e];for(let n=1;n<6;n++){const t=e.add(n,"week");r.push(t)}return r},As=e=>{const r=[];for(let n=0;n<7;n++){const t=e.add(n,"day");r.push(t)}return r},ks=[1,3,5,7,8,10,12],zs=[4,6,9,11];var Os,Ms,_s;!function(e){e.clampDay=(r,n,t)=>{const i=parseInt(r),o=parseInt(n),s=parseInt(t);return 0==i?"1":ks.includes(o)?Math.min(i,31).toString():zs.includes(o)?Math.min(i,30).toString():2===o?e.isLeapYear(s)?Math.min(i,29).toString():Math.min(i,28).toString():r},e.clampMonth=e=>{const r=parseInt(e);return 0==r?"1":r>12?"12":e},e.isLeapYear=e=>e%4==0&&e%100!=0||e%400==0,e.getTimeDiffInMinutes=(e,r,n="HH:mm")=>{const t=bs(e,n);return bs(r,n).diff(t,"minute")},e.toDayjs=e=>e?bs(e):bs(),e.addMinutesToTime=(e,r,n="HH:mm")=>bs(e,n).add(r,"minutes").format(n),e.isSame=(e,r,n="day")=>bs(e).isSame(bs(r),n)}(Os||(Os={})),function(e){e.isDateDisabled=(e,r)=>{const{disabledDates:n,minDate:t,maxDate:i}=r;return!!(e&&n&&n.length&&n.includes(e))||(!(!t||!bs(e).isBefore(t,"day"))||!(!i||!bs(e).isAfter(i,"day")))},e.sanitizeInput=e=>{if(e){if(bs(e).isValid())return e}return""}}(Ms||(Ms={})),function(e){e.generate=()=>Math.random().toString(36).substring(2,9)}(_s||(_s={}));const Ts=e=>"small"===e?2.5:3;y.div`
    position: relative;
    width: 100%;
    ${e=>{const r=Ts(e.$variant);return v`
            min-height: ${r}rem;
            height: ${r}rem; // Need this to persist the height when expanding or collapsing list
        `}}
`;const Ls=v`
    display: flex;
    position: relative;
    align-items: center;
    justify-content: space-between;
    padding: 0 ${zt["spacing-16"]};
    // exclude top and bottom borders
    height: calc(${e=>Ts(e.$variant)}rem - 2px);
    width: 100%;
    border-radius: ${Ot.sm};
    border: none;
    background: transparent;

    &:focus,
    &:active {
        outline: none;
    }

    &:focus-visible {
        outline: 2px solid ${Bt["border-focus"]};
    }
`,js=y.button`
    ${Ls}
    cursor: pointer;
`;y.div`
    ${Ls}
`;const Rs=x`
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
    border: ${kt["width-010"]} ${kt.solid} ${Bt.border};
    border-radius: ${Ot.sm};
    background: ${Bt.bg};
    overflow: hidden;

    &:focus-within {
        border-color: ${Bt["border-focus"]};
        box-shadow: 0px 0px 4px 0px
            rgb(from ${Bt["border-focus"]} r g b / 50%) inset; // TODO: confirm shadow
    }

    ${e=>e.$expanded?v`
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                z-index: 2;
            `:v`
                animation: ${Rs} 0.5s ease-in-out;
            `}

    ${e=>e.$disabled?v`
                background: ${Bt["bg-disabled"]};

                ${js} {
                    cursor: not-allowed;
                }

                &:focus-within {
                    border-color: ${Bt.border};
                    box-shadow: none;
                }
            `:e.$readOnly?v`
                border: none;
                background: transparent !important;

                ${js} {
                    padding: 0;
                }

                &:focus-within {
                    border: none;
                    box-shadow: none;
                }
            `:e.$error?v`
                border-color: ${Bt["border-error"]};

                &:focus-within {
                    border-color: ${Bt["border-error"]};
                    box-shadow: 0px 0px 4px 0px
                        rgb(from ${Bt["border-error"]} r g b / 50%) inset; // TODO: confirm shadow
                }
            `:void 0}
`,y.div`
    transform: rotate(${e=>e.$expanded?180:0}deg);
    transition: transform ${At["duration-250"]} ${At["ease-default"]};
    margin-left: ${zt["spacing-16"]};
`,y(w)`
    color: ${Bt.icon};
`,y.div`
    height: 1px;
    background: ${Bt.border};
    margin: 0 ${zt["spacing-8"]};
`;const Ps=y.div`
    display: flex;
    flex: 1;
    word-break: break-all;
    ${e=>{if(e.$disabled)return v`
                color: ${Bt["text-disabled"]};
            `}}
`;var Ys;y(y.div`
    ${e=>"small"===e.$variant?St["body-md-regular"]:St["body-baseline-regular"]}
    text-align: left;
    ${e=>{if("middle"!==e.$truncateType)return v`
                    ${Kt(1)}
                `}}
    overflow: hidden;
`)`
    color: ${Bt["text-subtler"]};
`,function(e){e.Ready="overlay-context-ready",e.Change="overlay-context-change"}(Ys||(Ys={}));const Is=e=>"right"===e?"bottom-end":"bottom-start",Hs=b({elementWidth:0,styles:{},setFloatingRef:()=>{},getFloatingProps:()=>({})}),Ws=({enabled:t,isOpen:i,onOpen:a,onClose:d,onDismiss:c,renderElement:u,renderDropdown:g,customZIndex:h,clickToToggle:b=!1,offset:p=0,alignment:f="left",fitAvailableHeight:y,rootNode:v,positionRef:x})=>{var w;const j=m(F),R=_t["sm-max"]({theme:j}),P=l(null),{width:Y=0}=function(e){void 0===e&&(e={});var r=e.skipOnMount,n=void 0!==r&&r,t=e.refreshMode,i=e.refreshRate,s=void 0===i?1e3:i,a=e.refreshOptions,d=e.handleWidth,c=void 0===d||d,u=e.handleHeight,g=void 0===u||u,h=e.targetRef,b=e.observerOptions,m=e.onResize,p=l(n),f=l(null),y=null!=h?h:f,v=l(),x=o({width:void 0,height:void 0}),F=x[0],w=x[1];return yo((function(){if(!bo()){var e=po(m,w,c,g);v.current=go((function(r){(c||g)&&r.forEach((function(r){var n=r&&r.contentRect||{},t=n.width,i=n.height;!p.current&&!bo()&&e({width:t,height:i}),p.current=!1}))}),t,s,a);var r=new window.ResizeObserver(v.current);return y.current&&r.observe(y.current,b),function(){r.disconnect();var e=v.current;e&&e.cancel&&e.cancel()}}}),[t,s,a,c,g,m,b,y.current]),Ei({ref:y},F)}({targetRef:null!=x?x:P,handleHeight:!1}),I={name:"center",fn:({x:e,rects:r})=>{const n=0===e||e+r.floating.width===window.innerWidth,t=window.innerWidth<R;return{x:n&&t?(window.innerWidth-r.floating.width)/2:e}}},{refs:H,floatingStyles:W,context:N}=E({open:i,onOpenChange:(e,r,n)=>{"escape-key"===n?null==c||c():e&&!i?null==a||a():!e&&i&&(null==d||d(n))},whileElementsMounted:D,placement:Is(f),middleware:[C(p),B(),S({limiter:A()}),k({apply({availableHeight:e,elements:r}){!y||e>=r.floating.scrollHeight?r.floating.style.setProperty("--available-height",""):r.floating.style.setProperty("--available-height",`${Math.max(0,e)}px`)}}),I]}),V=(()=>{const[e,r]=o(void 0),n=$();return s((()=>{if(!n)return void r(void 0);const e=e=>{r(e.zIndex)};return n.events.on(Ys.Change,e),n.events.emit(Ys.Ready),()=>n.events.off(Ys.Change,e)}),[n]),e})(),{isMounted:K,styles:U}=z(N,{initial:{opacity:0},open:{opacity:1},duration:300}),Z=O(N,{enabled:t,toggle:b}),X=M(N,{enabled:t}),{getReferenceProps:q,getFloatingProps:J}=_([Z,X]),G={elementWidth:Y,styles:Object.assign(Object.assign(Object.assign({},U),W),{zIndex:null!==(w=null!=h?h:V)&&void 0!==w?w:50}),setFloatingRef:H.setFloating,getFloatingProps:J};return r(n,{children:[e("div",Object.assign({ref:e=>{P.current=e,H.setReference(e)}},q(),{children:u()})),K&&e(T,{root:v,children:e(L,{context:N,modal:!1,initialFocus:-1,returnFocus:!1,children:e(Hs.Provider,{value:G,children:g(G)})})})]})},Ns=i.createContext({focusedIndex:-1,setFocusedIndex:()=>{}}),Vs=({children:r})=>{const[n,t]=o(-1);return e(Ns.Provider,{value:{focusedIndex:n,setFocusedIndex:t},children:r})},Ks=y.div`
    display: inline-block;
    position: relative;
    width: ${({$size:e})=>e?`${e}px`:"1em"};
    height: ${({$size:e})=>e?`${e}px`:"1em"};
    color: ${e=>e.$color||"currentColor"};
`,Us=x`
	0% {
	  transform: rotate(0deg);
	}
	100% {
	  transform: rotate(360deg);
	}
`,Zs=y.div`
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
    animation: ${Us} 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
`,Xs=y(Zs)`
    animation-delay: -0.45s;
`,qs=y(Zs)`
    animation-delay: -0.3s;
`,Js=y(Zs)`
    animation-delay: -0.15s;
`,Gs=({color:n,className:t,size:i})=>r(Ks,{className:t,$size:i,$color:n,"data-testid":"component-loading-spinner",children:[e(Zs,{id:"inner1"}),e(Xs,{id:"inner2"}),e(qs,{id:"inner3"}),e(Js,{id:"inner4"})]}),Qs=v`
    outline-offset: -1px;
    outline: ${kt["width-020"]} ${kt.solid} ${Bt["border-focus"]};
`,ea=v`
    outline-color: ${Bt["border-focus"]};
`,ra=v`
    outline-color: ${Bt["border-disabled"]};
`,na=v`
    outline-color: ${Bt["border-error-focus"]};
`,ta=y.div`
    border: ${kt["width-010"]} ${kt.solid} ${Bt.border};
    border-radius: ${Ot.sm};
    background: ${Bt.bg};

    &:focus-within {
        ${Qs}
    }
    ${e=>e.$focused&&Qs}

    ${e=>e.$readOnly?v`
                border-color: transparent;
                padding: 0;
                background: transparent !important;

                &:focus-within {
                    ${ea}
                }
                ${e.$focused&&ea}
            `:e.$disabled?v`
                background: ${Bt["bg-disabled"]};
                cursor: not-allowed;

                &:focus-within {
                    ${ra}
                }
                ${e.$focused&&ra}
            `:e.$error?v`
                border-color: ${Bt["border-error"]};

                &:focus-within {
                    ${na}
                }
                ${e.$focused&&na}
            `:void 0}
`;y(ta)`
    display: flex;
    align-items: center;
    position: relative;
    height: max-content;
    width: 100%;
    padding: 0 ${zt["spacing-16"]} 0
        ${e=>e.$readOnly?"0":zt["spacing-16"]};
    flex-direction: ${e=>"right"===e.$position?"row-reverse":"row"};
`;const ia=y.input`
    ${e=>"small"===e.$variant?St["body-md-regular"]:St["body-baseline-regular"]}
    color: ${Bt.text};
    display: block;
    background: transparent;
    border: none;
    outline: none;
    box-shadow: none;
    padding: 0;
    margin: 0;

    &:disabled {
        color: ${Bt["text-subtler"]};

        &:hover {
            cursor: not-allowed;
        }
    }

    &::placeholder,
    &::-webkit-input-placeholder {
        color: ${Bt["text-subtler"]};
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
`,oa=y.button`
    background: transparent;
    border: none;
    outline: none;

    &:focus,
    &:active {
        outline: none;
    }

    &:focus-visible {
        outline: ${kt["width-010"]} ${kt.solid}
            ${Bt["border-focus"]};
        border-radius: ${Ot.sm};
    }
`;y.div`
    border: ${kt["width-010"]} ${kt.solid} ${Bt.border};
    border-radius: ${Ot.sm};
    background: ${Bt.bg};

    ${e=>e.$customWidth?`width: ${e.$customWidth};`:e.$width?`width: ${e.$width}px; min-width: 23rem;`:"min-width: 23rem;"}
    max-height: min(27rem, var(--available-height, infinity * 1px));
    overflow: hidden;
    overflow-y: auto;
    ${e=>"small"===e.$variant?St["body-md-regular"]:St["body-baseline-regular"]}

    ${Tt.MaxWidth.sm} {
        min-width: unset;
        width: calc(100vw - ${_t["sm-margin"]} * 2);
        max-height: 15rem;
    }

    ${Tt.MaxWidth.xs} {
        width: calc(100vw - ${_t["xs-margin"]} * 2);
    }

    ${Tt.MaxWidth.xxs} {
        width: calc(100vw - ${_t["xxs-margin"]} * 2);
    }

    &::-webkit-scrollbar {
        width: 14px;
    }

    &::-webkit-scrollbar-track {
        background: transparent;
    }

    &::-webkit-scrollbar-thumb {
        background: ${Bt["bg-inverse-subtlest"]};
        border: 5px solid transparent;
        border-radius: ${Ot.full};
        background-clip: padding-box;
    }
`,y.div`
    background: transparent;
    padding: ${zt["spacing-8"]};
`,y.ul`
    list-style-type: none;
`,y.li`
    display: flex;
    align-items: flex-start;
    gap: ${zt["spacing-8"]};
    padding: ${zt["spacing-12"]} ${zt["spacing-8"]};
    cursor: pointer;
    border: none;
    border-radius: ${Ot.none};
    outline: none;

    ${e=>e.$disabled?v`
                cursor: not-allowed;
            `:e.$active&&e.$selected?v`
                background: ${Bt["bg-hover"]};
            `:e.$active?v`
                background: ${Bt["bg-hover-subtle"]};
            `:void 0}
`,y(H)`
    flex-shrink: 0;
    height: 1lh;
    width: 1rem;
    color: ${Bt["icon-selected"]};
`,y.div`
    flex-shrink: 0;
    height: 1lh;
    width: 1rem;
`,y(I)`
    flex-shrink: 0;
    height: 1lh;
    width: 1lh;
    color: ${Bt["icon-selected"]};
`,y(P)`
    flex-shrink: 0;
    height: 1lh;
    width: 1lh;
    color: ${Bt["icon-primary-subtlest"]};
`,y(Y)`
    flex-shrink: 0;
    height: 1lh;
    width: 1lh;
    color: ${Bt["icon-disabled-subtle"]};
`,y.div`
    width: 100%;
    display: flex;
    justify-content: flex-end;
`;const sa=y(oa)`
    cursor: pointer;
    overflow: hidden;
    color: ${Bt["text-primary"]};
    font-size: inherit;
`;y(sa)`
    ${St["body-baseline-semibold"]}
`,y(sa)`
    ${St["body-md-semibold"]}
    padding: ${zt["spacing-8"]} ${zt["spacing-8"]};
`,y.div`
    width: 100%;
    display: flex;
    padding: ${zt["spacing-12"]} ${zt["spacing-16"]};
    align-items: center;
`,y(R)`
    margin-right: ${zt["spacing-4"]};
    color: ${Bt["icon-error"]};
    height: 1em;
    width: 1em;
`,y(Gs)`
    margin-right: ${zt["spacing-8"]};
    color: ${Bt.icon};
`,y.div`
    ${(e=>{const{textSize:r}=e||{};return v`
        // Text styling
        ${r&&St[`${r}-regular`]}

        strong {
            font-weight: ${St.Spec["weight-semibold"]};
            ${r&&St[`${r}-semibold`]};
        }

        p {
            margin: 0;
        }

        // Link styling
        a {
            font-weight: ${St.Spec["weight-semibold"]};
            ${r&&St[`${r}-semibold`]}
            color: ${Bt.hyperlink};
            text-decoration: underline;

            svg {
                color: ${Bt["icon-primary"]};
                height: 1lh;
                width: 1em;
                margin-left: 0.4rem;
                vertical-align: middle;
            }

            &:hover,
            &:active,
            &:visited,
            &:focus {
                color: ${Bt["hyperlink-hover"]};

                svg {
                    color: ${Bt["icon-hover"]};
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
    color: ${Bt["text-subtle"]};
    padding: 0 ${zt["spacing-16"]} ${zt["spacing-12"]}
        ${zt["spacing-16"]};
`;const aa=y.button`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: ${zt["spacing-24"]};
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
                background-color: ${Bt["bg-hover-neutral"]};
            `}
    }
`,la=i.forwardRef(((r,n)=>{var{children:t,focusHighlight:i=!0,focusOutline:o="none",type:s="button"}=r,a=K(r,["children","focusHighlight","focusOutline","type"]);return e(aa,Object.assign({ref:n,$outline:o,$highlight:i,type:s},a,{children:t}))})),da=y.div`
    background: ${Bt["bg-strong"]};
    border-radius: ${Ot.sm};
    display: flex;
    align-items: center;

    ${e=>"small"===e.$variant?St["body-md-regular"]:St["body-baseline-regular"]}
`,ca=y.label`
    flex: 1;
    display: flex;
    align-items: center;
    gap: ${zt["spacing-8"]};
    padding: ${e=>"small"===e.$variant?v`
                  ${zt["spacing-8"]} ${zt["spacing-16"]}
              `:v`10px ${zt["spacing-16"]}`};
`,ua=y(ia)`
    flex: 1;
`,ga=y(N)`
    color: ${Bt.icon};
    flex-shrink: 0;
    height: 1em;
    width: 1em;
`,ha=y(la)`
    flex-shrink: 0;
    align-self: stretch;
    box-sizing: content-box;
    padding: ${zt["spacing-8"]};
    margin-left: -${zt["spacing-8"]};
    color: ${Bt.icon};
    cursor: pointer;
    font-size: inherit;

    svg {
        flex-shrink: 0;
        height: 1em;
        width: 1em;
    }
`;p(((n,t)=>{var{value:i,variant:o,onClear:s}=n,a=K(n,["value","variant","onClear"]);return r(da,{$variant:o,children:[r(ca,{$variant:o,children:[e(ga,{"aria-hidden":!0}),e(ua,Object.assign({ref:t,value:i,$variant:o},a))]}),i&&e(ha,{"aria-label":"Clear search",focusOutline:"browser",onClick:s,children:e(W,{"aria-hidden":!0})})]})}));const ba=y(oa)`
    display: flex;
    align-items: center;
    gap: ${zt["spacing-8"]};
    width: 100%;
    padding: ${e=>e.$readOnly?`0 ${zt["spacing-16"]}`:zt["spacing-16"]};

    ${e=>"small"===e.$variant?v`
                  ${St["body-md-regular"]}
                  height: calc(2.5rem - 2px); // exclude top and bottom borders
              `:v`
                  ${St["body-baseline-regular"]}
                  height: calc(3rem - 2px);
              `}

    &:disabled {
        cursor: not-allowed;
    }

    &:focus-visible {
        outline: 2px solid ${Bt["focus-ring"]};
        outline-offset: -2px;
    }
`,ma=y.div`
    display: flex;
    align-items: center;
    transform: rotate(${e=>e.$expanded?180:0}deg);
    transition: transform ${At["duration-250"]} ${At["ease-default"]};

    svg {
        color: ${Bt.icon};
        height: 1em;
        width: 1em;
    }
`,pa=p(((n,t)=>{var{children:i,disabled:o,expanded:s,listboxId:a,popupRole:l,readOnly:d,variant:c}=n,u=K(n,["children","disabled","expanded","listboxId","popupRole","readOnly","variant"]);return r(ba,Object.assign({ref:t,type:"button",role:"combobox","aria-expanded":s,"aria-haspopup":l,"aria-controls":s?a:void 0,"data-testid":"selector","aria-disabled":o,"aria-readonly":d,$variant:c,$readOnly:d},u,{children:[i,!d&&e(ma,{$expanded:s,$variant:c,children:e(w,{"aria-hidden":!0})})]}))})),fa={Button:{"button-radius":yt.md,"button-default-colour-bg":Zn["bg-primary"],"button-default-colour-bg-hover":Zn["bg-primary-hover"],"button-default-colour-text":Zn["text-inverse"],"button-secondary-colour-border":Zn["border-primary"],"button-secondary-colour-text":Zn["text-primary"],"button-light-colour-text":Zn["text-primary"],"button-link-colour-text":Zn["text-primary"]},Animation:{"loading-dots-spinner-colour":Zn["icon-primary"]}},ya={Button:{"button-radius":yt.sm,"button-default-colour-bg":Zn["bg-primary"],"button-default-colour-bg-hover":Zn["bg-primary-hover"],"button-default-colour-text":Zn["text-inverse"],"button-secondary-colour-border":Zn["border-primary"],"button-secondary-colour-text":Zn["text-primary"],"button-light-colour-text":Zn["text-primary"],"button-link-colour-text":Zn["text-primary"]},Animation:{"loading-dots-spinner-colour":Zn["icon-primary"]}},va={Button:{"button-radius":yt.sm,"button-default-colour-bg":Zn["bg-primary"],"button-default-colour-bg-hover":Zn["bg-primary-hover"],"button-default-colour-text":Zn["text-inverse"],"button-secondary-colour-border":Zn["border-primary"],"button-secondary-colour-text":Zn["text-primary"],"button-light-colour-text":Zn["text-primary"],"button-link-colour-text":Zn["text-primary"]},Animation:{"loading-dots-spinner-colour":Bt.Primitive["brand-50"]}},xa={collections:{default:ya,pa:{Button:{"button-radius":yt.full,"button-default-colour-bg":Zn["bg-primary"],"button-default-colour-bg-hover":Zn["bg-primary-hover"],"button-default-colour-text":Zn["text-inverse"],"button-secondary-colour-border":Zn["border-primary"],"button-secondary-colour-text":Zn["text-primary"],"button-light-colour-text":Zn["text-primary"],"button-link-colour-text":Zn["text-primary"]},Animation:{"loading-dots-spinner-colour":Zn["icon-primary"]}},a11yplayground:fa,lifesg:va},defaultValue:"default"},Fa=(e,r)=>n=>{var t,i;const o=n.theme,s=Fn(xa,null==o?void 0:o.componentScheme);return wa((null===(i=null===(t=null==o?void 0:o.componentOverrides)||void 0===t?void 0:t[e])||void 0===i?void 0:i[r])||s[e][r],n)},wa=(e,r)=>{switch(typeof e){case"function":return e(r);case"number":return e+"px";case"string":return e}},$a=Fa("Button","button-radius"),Ea=Fa("Button","button-default-colour-bg"),Da=Fa("Button","button-default-colour-bg-hover"),Ca=Fa("Button","button-default-colour-text"),Ba=Fa("Button","button-secondary-colour-border"),Sa=Fa("Button","button-secondary-colour-text"),Aa=Fa("Button","button-light-colour-text"),ka=Fa("Button","button-link-colour-text");y.button`
    padding: ${zt["spacing-8"]} ${zt["spacing-16"]};
    min-width: 4rem;
    border: ${kt["width-010"]} ${kt.solid} transparent;
    transition: all ${At["duration-250"]} ${At["ease-default"]};
    border-radius: ${$a};
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;

    // -----------------------------------------------------------------------------
    // BUTTON STYLE + TEXT COLOR
    // -----------------------------------------------------------------------------
    ${e=>{switch(e.$buttonStyle){case"secondary":return v`
                    background-color: ${Bt.bg};
                    border-color: ${e.$buttonIsDanger?Bt["border-error-strong"]:Ba};

                    color: ${e.$buttonIsDanger?Bt["text-error"]:Sa};

                    &:hover,
                    &:active {
                        @media (pointer: fine) {
                            background-color: ${Bt["bg-hover-neutral"]};
                        }
                    }
                `;case"light":return v`
                    background-color: ${Bt.bg};
                    border-color: ${Bt.border};

                    color: ${e.$buttonIsDanger?Bt["text-error"]:Aa};

                    &:hover,
                    &:active {
                        @media (pointer: fine) {
                            background-color: ${Bt["bg-hover-neutral"]};
                        }
                    }
                `;case"link":return v`
                    background-color: transparent;

                    color: ${e.$buttonIsDanger?Bt["text-error"]:ka};
                    &:hover,
                    &:active {
                        @media (pointer: fine) {
                            background-color: ${Bt["bg-hover-neutral"]};
                        }
                    }
                `;case"disabled":return v`
                    background-color: ${Bt["bg-disabled"]};

                    cursor: not-allowed;

                    &:hover {
                        box-shadow: none;
                    }

                    color: ${Bt["text-disabled"]};
                `;default:return v`
                    background-color: ${e.$buttonIsDanger?Bt["bg-error-strong"]:Ea};

                    ${Tt.MaxWidth.sm} {
                        width: 100%;
                    }

                    color: ${Ca};

                    &:hover,
                    &:active {
                        @media (pointer: fine) {
                            background-color: ${e.$buttonIsDanger?Bt["bg-error-strong-hover"]:Da};
                        }
                    }
                `}}}

    // -----------------------------------------------------------------------------
	// BUTTON SIZE + TEXT SIZE
	// -----------------------------------------------------------------------------
	${e=>{switch(e.$buttonSizeStyle){case"small":return v`
                    height: 2.5rem;
                    ${St["body-md-semibold"]}

                    ${Tt.MaxWidth.xxs} {
                        height: auto;
                    }
                `;case"large":return v`
                    height: 4rem;
                    ${St["heading-md-semibold"]}

                    ${Tt.MaxWidth.xxs} {
                        height: auto;
                    }
                `;default:return v`
                    height: 3rem;
                    ${St["heading-xs-semibold"]}

                    ${Tt.MaxWidth.xxs} {
                        height: auto;
                    }
                `}}}
`,y(Gs)`
    margin-right: 0.5rem;
`,y.li`
    display: ${e=>e.$visible?"flex":"none"};
`,y.div`
    flex: 1;
    display: flex;
    align-items: flex-start;
    gap: ${zt["spacing-8"]};
    padding: ${zt["spacing-12"]} ${zt["spacing-8"]};
    cursor: ${e=>e.$toggleable?"default":"pointer"};
    overflow: hidden; // required for label to truncate properly
    border-radius: ${Ot.none};
    outline: none;

    ${e=>e.$active&&v`
            background: ${Bt["bg-hover"]};
        `}
`,y.div`
    height: 1px;
    width: calc((1lh + ${zt["spacing-8"]}) * ${e=>e.$level});
`,y.div`
    width: 1lh;
    height: 1lh;
    color: ${Bt["icon-primary"]};
    cursor: pointer;

    svg {
        width: 1lh;
        height: 1lh;
        transition: transform ${At["duration-350"]}
            ${At["ease-standard"]};

        ${e=>{if(e.$expanded)return v`
                    transform: rotate(90deg);
                `}}
    }
`,y.div`
    width: 1lh;
    height: 1lh;
    margin-right: ${zt["spacing-8"]};
`,y.div`
    flex-shrink: 0;
    height: 1lh;
    width: ${e=>e.$hasNestedSiblings?"1lh":zt["spacing-16"]};

    display: flex;
    justify-content: center;
`,y(V)`
    flex-shrink: 0;
    height: 1lh;
    width: 1lh;
    color: ${Bt["icon-selected"]};
`;const za=y.div`
    overflow: hidden;
    border: ${kt["width-010"]} ${kt.solid} ${Bt.border};
    border-radius: ${Ot.sm};
    background: ${Bt.bg};
    padding: ${zt["spacing-16"]};
    min-width: 23rem;

    ${Tt.MaxWidth.sm} {
        min-width: unset;
        width: calc(100vw - ${_t["sm-margin"]} * 2);
    }

    ${Tt.MaxWidth.xs} {
        width: calc(100vw - ${_t["xs-margin"]} * 2);
    }

    ${Tt.MaxWidth.xxs} {
        width: calc(100vw - ${_t["xxs-margin"]} * 2);
    }
`,Oa=y.div`
    display: flex;
    align-items: baseline;
`,Ma=y.div`
    margin: 0 0.5rem;
    color: ${Bt.text};
`,_a=y(y.div`
    ${e=>"small"===e.$variant?St["body-md-regular"]:St["body-baseline-regular"]}
    text-align: left;
    ${e=>{if("middle"!==e.$truncateType)return v`
                    ${Kt(1)}
                `}}
    overflow: hidden;
`)`
    color: ${Bt["text-subtler"]};
`,Ta=n=>{var{alignment:t="left",className:i,disabled:a,dropdownZIndex:d,error:c,histogramSlider:u,id:g,onBlur:h,onChange:b,onChangeEnd:m,optionTruncationType:p="end",placeholder:f="Select",rangeLabelPrefix:y,rangeLabelSuffix:v,readOnly:x,renderRangeLabel:F,value:w,dropdownRootNode:$}=n,E=K(n,["alignment","className","disabled","dropdownZIndex","error","histogramSlider","id","onBlur","onChange","onChangeEnd","optionTruncationType","placeholder","rangeLabelPrefix","rangeLabelSuffix","readOnly","renderRangeLabel","value","dropdownRootNode"]);const{interval:D,bins:C=[],renderEmptyView:B,ariaLabels:S}=u,A=C.map((e=>e.minValue)),k=Math.min(...A),[z,O]=o(U()),[M,_]=o(!1),[T,L]=o(!1),[j]=o((()=>_s.generate())),R=l(null),P=l(null),Y=l(null),I=E["data-testid"]||"select-histogram";s((()=>{w!==z&&O(U())}),[w]);const H=e=>{O(e),null==b||b(e)},W=e=>{O(e),null==m||m(e)},N=()=>{T||M||L(!0)},V=e=>{T&&!M&&R.current&&!R.current.contains(e.relatedTarget)&&(L(!1),null==h||h())};function U(){return null!=w?w:[k,k+D]}const Z=e=>F?F(e):r(Qt.BodyBL,{children:[y,e,v]});return e(Vs,{children:e(Ws,{enabled:!x&&!a,isOpen:M,renderElement:()=>e(ta,{className:i,"data-testid":I,id:g,ref:R,tabIndex:-1,onFocus:N,onBlur:V,$focused:T,$disabled:a,$readOnly:x,$error:c,children:e(pa,{ref:P,disabled:a,expanded:M,listboxId:j,popupRole:"dialog",readOnly:x,variant:"default",children:e(Ps,{ref:Y,$disabled:a,children:A&&0!==A.length?r(Oa,{children:[Z(z[0]),e(Ma,{children:"-"}),Z(z[1])]}):e(_a,{$truncateType:p,$variant:"default",children:f})})})}),renderDropdown:({elementWidth:r,styles:n,setFloatingRef:t,getFloatingProps:i})=>e(za,Object.assign({style:Object.assign(Object.assign({},n),{width:r}),ref:t},i(),{children:e(wi,{interval:D,value:z,bins:C,onChange:H,onChangeEnd:W,showRangeLabels:!1,renderEmptyView:B,ariaLabels:S})})),onOpen:()=>{_(!0)},onClose:()=>{_(!1)},onDismiss:()=>{var e;null===(e=P.current)||void 0===e||e.focus(),_(!1)},clickToToggle:!0,offset:8,alignment:t,fitAvailableHeight:!0,customZIndex:d,rootNode:$})})};export{Ta as SelectHistogram};
//# sourceMappingURL=index.js.map
