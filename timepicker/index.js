import{jsxs as e,Fragment as r,jsx as n}from"react/jsx-runtime";import*as t from"react";import i,{useRef as o,useState as a,isValidElement as s,createRef as l,cloneElement as d,PureComponent as c,useEffect as u,useLayoutEffect as g,createContext as b,useContext as m,version as h,useCallback as y,useMemo as f}from"react";import{ChevronDownIcon as p}from"@lifesg/react-icons/chevron-down";import v,{css as x,keyframes as F,ThemeContext as w}from"styled-components";import{useFloatingTree as $,useFloating as E,autoUpdate as D,offset as C,flip as k,shift as B,limitShift as S,size as A,useTransitionStyles as z,useClick as M,useDismiss as O,useInteractions as T,FloatingPortal as j,FloatingFocusManager as _}from"@floating-ui/react";import{findDOMNode as L}from"react-dom";import{ChevronUpIcon as H}from"@lifesg/react-icons/chevron-up";import{ArrowRightIcon as I}from"@lifesg/react-icons/arrow-right";import{ExclamationCircleFillIcon as N}from"@lifesg/react-icons/exclamation-circle-fill";import{ExclamationTriangleFillIcon as Y}from"@lifesg/react-icons/exclamation-triangle-fill";import{ICircleFillIcon as R}from"@lifesg/react-icons/i-circle-fill";import{TickCircleFillIcon as W}from"@lifesg/react-icons/tick-circle-fill";import{ChevronDownIcon as P}from"@lifesg/react-icons";import{ExternalIcon as U}from"@lifesg/react-icons/external";import{CircleIcon as V}from"@lifesg/react-icons/circle";import{CircleDotIcon as Z}from"@lifesg/react-icons/circle-dot";import{CrossIcon as X}from"@lifesg/react-icons/cross";import{SquareIcon as q}from"@lifesg/react-icons/square";import{SquareTickFillIcon as J}from"@lifesg/react-icons/square-tick-fill";import{TickIcon as G}from"@lifesg/react-icons/tick";function K(e,r){var n={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&r.indexOf(t)<0&&(n[t]=e[t]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(t=Object.getOwnPropertySymbols(e);i<t.length;i++)r.indexOf(t[i])<0&&Object.prototype.propertyIsEnumerable.call(e,t[i])&&(n[t[i]]=e[t[i]])}return n}"function"==typeof SuppressedError&&SuppressedError;var Q="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};function ee(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var re=Array.isArray,ne="object"==typeof Q&&Q&&Q.Object===Object&&Q,te="object"==typeof self&&self&&self.Object===Object&&self,ie=ne||te||Function("return this")(),oe=ie.Symbol,ae=oe,se=Object.prototype,le=se.hasOwnProperty,de=se.toString,ce=ae?ae.toStringTag:void 0;var ue=function(e){var r=le.call(e,ce),n=e[ce];try{e[ce]=void 0;var t=!0}catch(e){}var i=de.call(e);return t&&(r?e[ce]=n:delete e[ce]),i},ge=Object.prototype.toString;var be=ue,me=function(e){return ge.call(e)},he=oe?oe.toStringTag:void 0;var ye=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":he&&he in Object(e)?be(e):me(e)};var fe=ye,pe=function(e){return null!=e&&"object"==typeof e};var ve=function(e){return"symbol"==typeof e||pe(e)&&"[object Symbol]"==fe(e)},xe=re,Fe=ve,we=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,$e=/^\w*$/;var Ee=function(e,r){if(xe(e))return!1;var n=typeof e;return!("number"!=n&&"symbol"!=n&&"boolean"!=n&&null!=e&&!Fe(e))||($e.test(e)||!we.test(e)||null!=r&&e in Object(r))};var De=function(e){var r=typeof e;return null!=e&&("object"==r||"function"==r)},Ce=ye,ke=De;var Be,Se=function(e){if(!ke(e))return!1;var r=Ce(e);return"[object Function]"==r||"[object GeneratorFunction]"==r||"[object AsyncFunction]"==r||"[object Proxy]"==r},Ae=ie["__core-js_shared__"],ze=(Be=/[^.]+$/.exec(Ae&&Ae.keys&&Ae.keys.IE_PROTO||""))?"Symbol(src)_1."+Be:"";var Me=function(e){return!!ze&&ze in e},Oe=Function.prototype.toString;var Te=Se,je=Me,_e=De,Le=function(e){if(null!=e){try{return Oe.call(e)}catch(e){}try{return e+""}catch(e){}}return""},He=/^\[object .+?Constructor\]$/,Ie=Function.prototype,Ne=Object.prototype,Ye=Ie.toString,Re=Ne.hasOwnProperty,We=RegExp("^"+Ye.call(Re).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");var Pe=function(e,r){return null==e?void 0:e[r]},Ue=function(e){return!(!_e(e)||je(e))&&(Te(e)?We:He).test(Le(e))},Ve=Pe;var Ze=function(e,r){var n=Ve(e,r);return Ue(n)?n:void 0},Xe=Ze(Object,"create"),qe=Xe;var Je=function(){this.__data__=qe?qe(null):{},this.size=0};var Ge=function(e){var r=this.has(e)&&delete this.__data__[e];return this.size-=r?1:0,r},Ke=Xe,Qe=Object.prototype.hasOwnProperty;var er=function(e){var r=this.__data__;if(Ke){var n=r[e];return"__lodash_hash_undefined__"===n?void 0:n}return Qe.call(r,e)?r[e]:void 0},rr=Xe,nr=Object.prototype.hasOwnProperty;var tr=function(e){var r=this.__data__;return rr?void 0!==r[e]:nr.call(r,e)},ir=Xe;var or=function(e,r){var n=this.__data__;return this.size+=this.has(e)?0:1,n[e]=ir&&void 0===r?"__lodash_hash_undefined__":r,this},ar=Je,sr=Ge,lr=er,dr=tr,cr=or;function ur(e){var r=-1,n=null==e?0:e.length;for(this.clear();++r<n;){var t=e[r];this.set(t[0],t[1])}}ur.prototype.clear=ar,ur.prototype.delete=sr,ur.prototype.get=lr,ur.prototype.has=dr,ur.prototype.set=cr;var gr=ur;var br=function(){this.__data__=[],this.size=0};var mr=function(e,r){return e===r||e!=e&&r!=r};var hr=function(e,r){for(var n=e.length;n--;)if(mr(e[n][0],r))return n;return-1},yr=hr,fr=Array.prototype.splice;var pr=function(e){var r=this.__data__,n=yr(r,e);return!(n<0)&&(n==r.length-1?r.pop():fr.call(r,n,1),--this.size,!0)},vr=hr;var xr=function(e){var r=this.__data__,n=vr(r,e);return n<0?void 0:r[n][1]},Fr=hr;var wr=function(e){return Fr(this.__data__,e)>-1},$r=hr;var Er=function(e,r){var n=this.__data__,t=$r(n,e);return t<0?(++this.size,n.push([e,r])):n[t][1]=r,this},Dr=br,Cr=pr,kr=xr,Br=wr,Sr=Er;function Ar(e){var r=-1,n=null==e?0:e.length;for(this.clear();++r<n;){var t=e[r];this.set(t[0],t[1])}}Ar.prototype.clear=Dr,Ar.prototype.delete=Cr,Ar.prototype.get=kr,Ar.prototype.has=Br,Ar.prototype.set=Sr;var zr=Ar,Mr=Ze(ie,"Map"),Or=gr,Tr=zr,jr=Mr;var _r=function(e){var r=typeof e;return"string"==r||"number"==r||"symbol"==r||"boolean"==r?"__proto__"!==e:null===e};var Lr=function(e,r){var n=e.__data__;return _r(r)?n["string"==typeof r?"string":"hash"]:n.map},Hr=Lr;var Ir=function(e){var r=Hr(this,e).delete(e);return this.size-=r?1:0,r},Nr=Lr;var Yr=function(e){return Nr(this,e).get(e)},Rr=Lr;var Wr=function(e){return Rr(this,e).has(e)},Pr=Lr;var Ur=function(e,r){var n=Pr(this,e),t=n.size;return n.set(e,r),this.size+=n.size==t?0:1,this},Vr=function(){this.size=0,this.__data__={hash:new Or,map:new(jr||Tr),string:new Or}},Zr=Ir,Xr=Yr,qr=Wr,Jr=Ur;function Gr(e){var r=-1,n=null==e?0:e.length;for(this.clear();++r<n;){var t=e[r];this.set(t[0],t[1])}}Gr.prototype.clear=Vr,Gr.prototype.delete=Zr,Gr.prototype.get=Xr,Gr.prototype.has=qr,Gr.prototype.set=Jr;var Kr=Gr;function Qr(e,r){if("function"!=typeof e||null!=r&&"function"!=typeof r)throw new TypeError("Expected a function");var n=function(){var t=arguments,i=r?r.apply(this,t):t[0],o=n.cache;if(o.has(i))return o.get(i);var a=e.apply(this,t);return n.cache=o.set(i,a)||o,a};return n.cache=new(Qr.Cache||Kr),n}Qr.Cache=Kr;var en=Qr;var rn=function(e){var r=en(e,(function(e){return 500===n.size&&n.clear(),e})),n=r.cache;return r},nn=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,tn=/\\(\\)?/g,on=rn((function(e){var r=[];return 46===e.charCodeAt(0)&&r.push(""),e.replace(nn,(function(e,n,t,i){r.push(t?i.replace(tn,"$1"):n||e)})),r}));var an=function(e,r){for(var n=-1,t=null==e?0:e.length,i=Array(t);++n<t;)i[n]=r(e[n],n,e);return i},sn=re,ln=ve,dn=oe?oe.prototype:void 0,cn=dn?dn.toString:void 0;var un=function e(r){if("string"==typeof r)return r;if(sn(r))return an(r,e)+"";if(ln(r))return cn?cn.call(r):"";var n=r+"";return"0"==n&&1/r==-1/0?"-0":n},gn=un;var bn=re,mn=Ee,hn=on,yn=function(e){return null==e?"":gn(e)};var fn=ve;var pn=function(e,r){return bn(e)?e:mn(e,r)?[e]:hn(yn(e))},vn=function(e){if("string"==typeof e||fn(e))return e;var r=e+"";return"0"==r&&1/e==-1/0?"-0":r};var xn=function(e,r){for(var n=0,t=(r=pn(r,e)).length;null!=e&&n<t;)e=e[vn(r[n++])];return n&&n==t?e:void 0};var Fn=ee((function(e,r,n){var t=null==e?void 0:xn(e,r);return void 0===t?n:t}));const wn=(e,r,n)=>Fn(n,r)||Fn(e,r),$n=(e,r)=>{const n=r||e.defaultValue;return Fn(e.collections,n)},En={collections:{default:{"width-005":.5,"width-010":1,"width-020":2,"width-040":4,solid:"solid"}},defaultValue:"default"},Dn=e=>r=>{var n;const t=r.theme,i=$n(En,null==t?void 0:t.borderScheme);return(null===(n=null==t?void 0:t.overrides)||void 0===n?void 0:n.border)?`${wn(i,e,t.overrides.border)}px`:`${i[e]}px`},Cn={"width-005":Dn("width-005"),"width-010":Dn("width-010"),"width-020":Dn("width-020"),"width-040":Dn("width-040"),solid:(kn="solid",e=>{var r;const n=e.theme,t=$n(En,null==n?void 0:n.borderScheme),i=(null===(r=null==n?void 0:n.overrides)||void 0===r?void 0:r.border)?wn(t,kn,n.overrides.border):t[kn];return"function"==typeof i?i(e):i})};var kn;const Bn={"brand-10":"#2C0C0B","brand-20":"#4C1513","brand-30":"#6C1D1B","brand-40":"#922825","brand-50":"#BF3431","brand-60":"#F15D5A","brand-70":"#F69491","brand-80":"#FABAB7","brand-90":"#FCD7D2","brand-95":"#FFEBE7","brand-100":"#FFF6F4","primary-10":"#1A122C","primary-20":"#2F1F4D","primary-30":"#422D6E","primary-40":"#5B3D97","primary-50":"#7654BC","primary-60":"#9A82CD","primary-70":"#B7A7D8","primary-80":"#CFC5E5","primary-90":"#E3DDF0","primary-95":"#F0EDF7","primary-100":"#F9F8FC","secondary-10":"#0E1723","secondary-20":"#18293D","secondary-30":"#233A57","secondary-40":"#305078","secondary-50":"#4B6A8F","secondary-60":"#7B91A9","secondary-70":"#A1B1C3","secondary-80":"#C1CBD7","secondary-90":"#DBE1E8","secondary-95":"#EBEFF2","secondary-100":"#F7F8FA","neutral-10":"#161616","neutral-20":"#282828","neutral-30":"#393939","neutral-40":"#4E4E4E","neutral-50":"#686868","neutral-60":"#8E8E8E","neutral-70":"#AFAFB0","neutral-80":"#C7CACA","neutral-90":"#DDE1E2","neutral-95":"#EDEFEF","neutral-100":"#F9F9F9","success-10":"#081A0F","success-20":"#0E2D1B","success-30":"#154126","success-40":"#1C5A34","success-50":"#257645","success-60":"#44A068","success-70":"#64C189","success-80":"#80DCA5","success-90":"#B4ECCB","success-95":"#D5F6E2","success-100":"#EFFCF4","warning-10":"#221302","warning-20":"#3B2204","warning-30":"#543106","warning-40":"#744408","warning-50":"#98590C","warning-60":"#D07A13","warning-70":"#E4A244","warning-80":"#F5C26C","warning-90":"#FADBA6","warning-95":"#FCECD4","warning-100":"#FDF7F0","error-10":"#330505","error-20":"#550808","error-30":"#750C0C","error-40":"#9E130F","error-50":"#CB2213","error-60":"#DE6C6C","error-70":"#E89B9B","error-80":"#EFBEBE","error-90":"#F5D9D9","error-95":"#F9ECEC","error-100":"#FCF7F7","info-10":"#021824","info-20":"#032B3F","info-30":"#053D59","info-40":"#06547B","info-50":"#176E9B","info-60":"#5296BE","info-70":"#82B5DA","info-80":"#ACCFE7","info-90":"#CCE3F1","info-95":"#E3F1F8","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000","primary-inverse":"#FEAB10"},Sn={"brand-10":"#1F1221","brand-20":"#371F3B","brand-30":"#4E2C53","brand-40":"#6B3E73","brand-50":"#8D5197","brand-60":"#FF3399","brand-70":"#FF88C4","brand-80":"#FFB3D9","brand-90":"#FFD4E9","brand-95":"#FFE8F3","brand-100":"#FFF8FC","primary-10":"#1F1221","primary-20":"#371F3B","primary-30":"#4E2C53","primary-40":"#6B3E73","primary-50":"#8D5197","primary-60":"#B07DB7","primary-70":"#C7A3CC","primary-80":"#D9C2DD","primary-90":"#E9DBEB","primary-95":"#F3ECF4","primary-100":"#FAF7FA","secondary-10":"#2D091B","secondary-20":"#4D0F2E","secondary-30":"#6B1540","secondary-40":"#931D58","secondary-50":"#C02673","secondary-60":"#FF409F","secondary-70":"#FF88C4","secondary-80":"#FFB3D9","secondary-90":"#FFD4E9","secondary-95":"#FFE8F3","secondary-100":"#FFF8FC","neutral-10":"#161616","neutral-20":"#282828","neutral-30":"#393939","neutral-40":"#4E4E4E","neutral-50":"#686868","neutral-60":"#8E8E8E","neutral-70":"#AFAFB0","neutral-80":"#C7CACA","neutral-90":"#DDE1E2","neutral-95":"#EDEFEF","neutral-100":"#F9F9F9","success-10":"#081A0F","success-20":"#0E2D1B","success-30":"#154126","success-40":"#1C5A34","success-50":"#257645","success-60":"#44A068","success-70":"#64C189","success-80":"#80DCA5","success-90":"#B4ECCB","success-95":"#D5F6E2","success-100":"#EFFCF4","warning-10":"#221302","warning-20":"#3B2204","warning-30":"#543106","warning-40":"#744408","warning-50":"#98590C","warning-60":"#D07A13","warning-70":"#E4A244","warning-80":"#F5C26C","warning-90":"#FADBA6","warning-95":"#FCECD4","warning-100":"#FDF7F0","error-10":"#330505","error-20":"#550808","error-30":"#750C0C","error-40":"#9E130F","error-50":"#CB2213","error-60":"#DE6C6C","error-70":"#E89B9B","error-80":"#EFBEBE","error-90":"#F5D9D9","error-95":"#F9ECEC","error-100":"#FCF7F7","info-10":"#021824","info-20":"#032B3F","info-30":"#053D59","info-40":"#06547B","info-50":"#176E9B","info-60":"#5296BE","info-70":"#82B5DA","info-80":"#ACCFE7","info-90":"#CCE3F1","info-95":"#E3F1F8","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000","primary-inverse":"#FEAB10"},An={"brand-10":"#2C0C0B","brand-20":"#4C1513","brand-30":"#6C1D1B","brand-40":"#922825","brand-50":"#BF3431","brand-60":"#F15D5A","brand-70":"#F69491","brand-80":"#FABAB7","brand-90":"#FCD7D2","brand-95":"#FFEBE7","brand-100":"#FFF6F4","primary-10":"#001731","primary-20":"#002752","primary-30":"#003874","primary-40":"#004D9F","primary-50":"#1768BE","primary-60":"#3C91EC","primary-70":"#6CB4FF","primary-80":"#A5CDFF","primary-90":"#CFE1FE","primary-95":"#E8F0FE","primary-100":"#F7F9FF","secondary-10":"#131529","secondary-20":"#222547","secondary-30":"#2F3565","secondary-40":"#42498B","secondary-50":"#5B62A7","secondary-60":"#858CBD","secondary-70":"#A8ADCF","secondary-80":"#C6C9E0","secondary-90":"#DDDFEC","secondary-95":"#EDEEF5","secondary-100":"#F8F8FB","neutral-10":"#161616","neutral-20":"#282828","neutral-30":"#393939","neutral-40":"#4E4E4E","neutral-50":"#686868","neutral-60":"#8E8E8E","neutral-70":"#AFAFB0","neutral-80":"#C7CACA","neutral-90":"#DDE1E2","neutral-95":"#EDEFEF","neutral-100":"#F9F9F9","success-10":"#081A0F","success-20":"#0E2D1B","success-30":"#154126","success-40":"#1C5A34","success-50":"#257645","success-60":"#44A068","success-70":"#64C189","success-80":"#80DCA5","success-90":"#B4ECCB","success-95":"#D5F6E2","success-100":"#EFFCF4","warning-10":"#221302","warning-20":"#3B2204","warning-30":"#543106","warning-40":"#744408","warning-50":"#98590C","warning-60":"#D07A13","warning-70":"#E4A244","warning-80":"#F5C26C","warning-90":"#FADBA6","warning-95":"#FCECD4","warning-100":"#FDF7F0","error-10":"#330505","error-20":"#550808","error-30":"#750C0C","error-40":"#9E130F","error-50":"#CB2213","error-60":"#DE6C6C","error-70":"#E89B9B","error-80":"#EFBEBE","error-90":"#F5D9D9","error-95":"#F9ECEC","error-100":"#FCF7F7","info-10":"#021824","info-20":"#032B3F","info-30":"#053D59","info-40":"#06547B","info-50":"#176E9B","info-60":"#5296BE","info-70":"#82B5DA","info-80":"#ACCFE7","info-90":"#CCE3F1","info-95":"#E3F1F8","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000","primary-inverse":"#FEAB10"},zn={"brand-10":"#2C0C0B","brand-20":"#4C1513","brand-30":"#6C1D1B","brand-40":"#922825","brand-50":"#BF3431","brand-60":"#F15D5A","brand-70":"#F69491","brand-80":"#FABAB7","brand-90":"#FCD7D2","brand-95":"#FFEBE7","brand-100":"#FFF6F4","primary-10":"#0011924","primary-20":"#032B40","primary-30":"#043D5A","primary-40":"#05547B","primary-50":"#096EA1","primary-60":"#2098D3","primary-70":"#5CB9E8","primary-80":"#8BD3F6","primary-90":"#BEE6FA","primary-95":"#E2F2FA","primary-100":"#F4FAFC","secondary-10":"#131529","secondary-20":"#222547","secondary-30":"#2F3565","secondary-40":"#42498B","secondary-50":"#5B62A7","secondary-60":"#858CBD","secondary-70":"#A8ADCF","secondary-80":"#C6C9E0","secondary-90":"#DDDFEC","secondary-95":"#EDEEF5","secondary-100":"#F8F8FB","neutral-10":"#161616","neutral-20":"#282828","neutral-30":"#393939","neutral-40":"#4E4E4E","neutral-50":"#686868","neutral-60":"#8E8E8E","neutral-70":"#AFAFB0","neutral-80":"#C7CACA","neutral-90":"#DDE1E2","neutral-95":"#EDEFEF","neutral-100":"#F9F9F9","success-10":"#081A0F","success-20":"#0E2D1B","success-30":"#154126","success-40":"#1C5A34","success-50":"#257645","success-60":"#44A068","success-70":"#64C189","success-80":"#80DCA5","success-90":"#B4ECCB","success-95":"#D5F6E2","success-100":"#EFFCF4","warning-10":"#221302","warning-20":"#3B2204","warning-30":"#543106","warning-40":"#744408","warning-50":"#98590C","warning-60":"#D07A13","warning-70":"#E4A244","warning-80":"#F5C26C","warning-90":"#FADBA6","warning-95":"#FCECD4","warning-100":"#FDF7F0","error-10":"#330505","error-20":"#550808","error-30":"#750C0C","error-40":"#9E130F","error-50":"#CB2213","error-60":"#DE6C6C","error-70":"#E89B9B","error-80":"#EFBEBE","error-90":"#F5D9D9","error-95":"#F9ECEC","error-100":"#FCF7F7","info-10":"#021824","info-20":"#032B3F","info-30":"#053D59","info-40":"#06547B","info-50":"#176E9B","info-60":"#5296BE","info-70":"#82B5DA","info-80":"#ACCFE7","info-90":"#CCE3F1","info-95":"#E3F1F8","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000","primary-inverse":"#FEAB10"},Mn={"brand-10":"#001A19","brand-20":"#002D2B","brand-30":"#00413D","brand-40":"#005954","brand-50":"#00756F","brand-60":"#03A098","brand-70":"#55BFBA","brand-80":"#92D6D2","brand-90":"#BFE7E5","brand-95":"#DDF2F1","brand-100":"#F4FBFA","primary-10":"#09191D","primary-20":"#102B34","primary-30":"#173D49","primary-40":"#205666","primary-50":"#2A7086","primary-60":"#5D97A9","primary-70":"#8CB6C2","primary-80":"#B2CED6","primary-90":"#D1E2E7","primary-95":"#E8F0F3","primary-100":"#F7FAFB","secondary-10":"#001731","secondary-20":"#002752","secondary-30":"#003874","secondary-40":"#004D9F","secondary-50":"#5B62A7","secondary-60":"#858CBD","secondary-70":"#A8ADCF","secondary-80":"#C6C9E0","secondary-90":"#DDDFEC","secondary-95":"#EDEEF5","secondary-100":"#F8F8FB","neutral-10":"#161616","neutral-20":"#282828","neutral-30":"#393939","neutral-40":"#4E4E4E","neutral-50":"#686868","neutral-60":"#8E8E8E","neutral-70":"#AFAFB0","neutral-80":"#C7CACA","neutral-90":"#DDE1E2","neutral-95":"#EDEFEF","neutral-100":"#F9F9F9","success-10":"#081A0F","success-20":"#0E2D1B","success-30":"#154126","success-40":"#1C5A34","success-50":"#257645","success-60":"#44A068","success-70":"#64C189","success-80":"#80DCA5","success-90":"#B4ECCB","success-95":"#D5F6E2","success-100":"#EFFCF4","warning-10":"#221302","warning-20":"#3B2204","warning-30":"#543106","warning-40":"#744408","warning-50":"#98590C","warning-60":"#D07A13","warning-70":"#E4A244","warning-80":"#F5C26C","warning-90":"#FADBA6","warning-95":"#FCECD4","warning-100":"#FDF7F0","error-10":"#330505","error-20":"#550808","error-30":"#750C0C","error-40":"#9E130F","error-50":"#CB2213","error-60":"#DE6C6C","error-70":"#E89B9B","error-80":"#EFBEBE","error-90":"#F5D9D9","error-95":"#F9ECEC","error-100":"#FCF7F7","info-10":"#021824","info-20":"#032B3F","info-30":"#053D59","info-40":"#06547B","info-50":"#176E9B","info-60":"#5296BE","info-70":"#82B5DA","info-80":"#ACCFE7","info-90":"#CCE3F1","info-95":"#E3F1F8","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000","primary-inverse":"#FEAB10"},On={"brand-10":"#881317","brand-20":"#B5191E","brand-30":"#B5040A","brand-40":"#D0333F","brand-50":"#DC666F","brand-60":"#E28087","brand-70":"#E7999F","brand-80":"#EDB3B7","brand-90":"#F3CCCF","brand-95":"#F9E6E7","brand-100":"#FCF2F3","primary-10":"#000000","primary-20":"#191919","primary-30":"#333333","primary-40":"#4D4D4D","primary-50":"#666666","primary-60":"#808080","primary-70":"#999999","primary-80":"#B3B3B3","primary-90":"#E6E6E6","primary-95":"#F7F7F7","primary-100":"#FFFFFF","secondary-10":"#19151D","secondary-20":"#2B2533","secondary-30":"#3E3649","secondary-40":"#564A64","secondary-50":"#6F637D","secondary-60":"#948B9F","secondary-70":"#B3ACBB","secondary-80":"#CCC8D2","secondary-90":"#E1DEE4","secondary-95":"#EFEEF1","secondary-100":"#F9F8F9","neutral-10":"#000000","neutral-20":"#191919","neutral-30":"#333333","neutral-40":"#4D4D4D","neutral-50":"#666666","neutral-60":"#808080","neutral-70":"#999999","neutral-80":"#B3B3B3","neutral-90":"#E6E6E6","neutral-95":"#F7F7F7","neutral-100":"#FFFFFF","success-10":"#081A0F","success-20":"#0E2D1B","success-30":"#154126","success-40":"#1C5A34","success-50":"#257645","success-60":"#44A068","success-70":"#64C189","success-80":"#80DCA5","success-90":"#B4ECCB","success-95":"#D5F6E2","success-100":"#EFFCF4","warning-10":"#221302","warning-20":"#3B2204","warning-30":"#543106","warning-40":"#744408","warning-50":"#98590C","warning-60":"#D07A13","warning-70":"#E4A244","warning-80":"#F5C26C","warning-90":"#FADBA6","warning-95":"#FCECD4","warning-100":"#FDF7F0","error-10":"#330505","error-20":"#550808","error-30":"#750C0C","error-40":"#9E130F","error-50":"#CB2213","error-60":"#DE6C6C","error-70":"#E89B9B","error-80":"#EFBEBE","error-90":"#F5D9D9","error-95":"#F9ECEC","error-100":"#FCF7F7","info-10":"#021824","info-20":"#032B3F","info-30":"#053D59","info-40":"#06547B","info-50":"#176E9B","info-60":"#5296BE","info-70":"#82B5DA","info-80":"#ACCFE7","info-90":"#CCE3F1","info-95":"#E3F1F8","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000","primary-inverse":"#FEAB10"},Tn={"brand-10":"#0E123A","brand-20":"#191E65","brand-30":"#232B90","brand-40":"#303BC5","brand-50":"#494CFF","brand-60":"#AD6EFF","brand-70":"#AEA4FF","brand-80":"#C5C4FF","brand-90":"#DDDCFF","brand-95":"#EDECFF","brand-100":"#F8F8FF","primary-10":"#10152B","primary-20":"#1C254B","primary-30":"#28356C","primary-40":"#38489A","primary-50":"#4D5AD7","primary-60":"#7487F2","primary-70":"#9AAAFC","primary-80":"#BDC7FD","primary-90":"#DADFFB","primary-95":"#ECEEFE","primary-100":"#F7F8FF","secondary-10":"#19151D","secondary-20":"#2B2533","secondary-30":"#3E3649","secondary-40":"#564A64","secondary-50":"#6F637D","secondary-60":"#948B9F","secondary-70":"#B3ACBB","secondary-80":"#CCC8D2","secondary-90":"#E1DEE4","secondary-95":"#EFEEF1","secondary-100":"#F9F8F9","neutral-10":"#161616","neutral-20":"#282828","neutral-30":"#393939","neutral-40":"#4E4E4E","neutral-50":"#686868","neutral-60":"#8E8E8E","neutral-70":"#AFAFB0","neutral-80":"#C7CACA","neutral-90":"#DDE1E2","neutral-95":"#EDEFEF","neutral-100":"#F9F9F9","success-10":"#081A0F","success-20":"#0E2D1B","success-30":"#154126","success-40":"#1C5A34","success-50":"#257645","success-60":"#44A068","success-70":"#64C189","success-80":"#80DCA5","success-90":"#B4ECCB","success-95":"#D5F6E2","success-100":"#EFFCF4","warning-10":"#221302","warning-20":"#3B2204","warning-30":"#543106","warning-40":"#744408","warning-50":"#98590C","warning-60":"#D07A13","warning-70":"#E4A244","warning-80":"#F5C26C","warning-90":"#FADBA6","warning-95":"#FCECD4","warning-100":"#FDF7F0","error-10":"#330505","error-20":"#550808","error-30":"#750C0C","error-40":"#9E130F","error-50":"#CB2213","error-60":"#DE6C6C","error-70":"#E89B9B","error-80":"#EFBEBE","error-90":"#F5D9D9","error-95":"#F9ECEC","error-100":"#FCF7F7","info-10":"#021824","info-20":"#032B3F","info-30":"#053D59","info-40":"#06547B","info-50":"#176E9B","info-60":"#5296BE","info-70":"#82B5DA","info-80":"#ACCFE7","info-90":"#CCE3F1","info-95":"#E3F1F8","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000","primary-inverse":"#FEAB10"},jn={"brand-10":"#170F39","brand-20":"#281C62","brand-30":"#38268B","brand-40":"#4D34BF","brand-50":"#5735DF","brand-60":"#9986F9","brand-70":"#B2A5F8","brand-80":"#CDC2FA","brand-90":"#E2DCFC","brand-95":"#EFEDFE","brand-100":"#FAF8FD","primary-10":"#170F39","primary-20":"#281C62","primary-30":"#38268B","primary-40":"#4D34BF","primary-50":"#5735DF","primary-60":"#9986F9","primary-70":"#B2A5F8","primary-80":"#CDC2FA","primary-90":"#E2DCFC","primary-95":"#EFEDFE","primary-100":"#FAF8FD","secondary-10":"#251204","secondary-20":"#401F08","secondary-30":"#5B2C0B","secondary-40":"#7E3D0F","secondary-50":"#B04900","secondary-60":"#E26E1C","secondary-70":"#FF9445","secondary-80":"#FFBB8E","secondary-90":"#FFD9BF","secondary-95":"#FFECDF","secondary-100":"#FFF8F3","neutral-10":"#161616","neutral-20":"#282828","neutral-30":"#393939","neutral-40":"#4E4E4E","neutral-50":"#686868","neutral-60":"#8E8E8E","neutral-70":"#AFAFB0","neutral-80":"#C7CACA","neutral-90":"#DDE1E2","neutral-95":"#EDEFEF","neutral-100":"#F9F9F9","success-10":"#031B15","success-20":"#082D24","success-30":"#094134","success-40":"#0D5947","success-50":"#10755E","success-60":"#16A181","success-70":"#1EC59D","success-80":"#6FDDC2","success-90":"#AFECDE","success-95":"#D5F5ED","success-100":"#F1FCF9","warning-10":"#1F1500","warning-20":"#362500","warning-30":"#4D3501","warning-40":"#6A4801","warning-50":"#8B6001","warning-60":"#BF8301","warning-70":"#EAA102","warning-80":"#FFBF34","warning-90":"#FFDC8F","warning-95":"#FFEDC7","warning-100":"#FFF8EA","error-10":"#270F10","error-20":"#441B1B","error-30":"#612627","error-40":"#853535","error-50":"#AF4546","error-60":"#EC6162","error-70":"#F29696","error-80":"#F7BBBC","error-90":"#FAD8D8","error-95":"#FCEAEA","error-100":"#FEF7F7","info-10":"#0F1627","info-20":"#1B2745","info-30":"#273763","info-40":"#354D88","info-50":"#4665B3","info-60":"#618AF6","info-70":"#8DADFF","info-80":"#B4C9FF","info-90":"#D3DFFF","info-95":"#E9EFFF","info-100":"#F5F8FF",white:"#FFFFFF",black:"#000000","primary-inverse":"#FEAB10"},_n={"brand-10":"#0E113C","brand-20":"#191E67","brand-30":"#232A92","brand-40":"#233FC2","brand-50":"#135CEA","brand-60":"#378FFB","brand-70":"#71B3FD","brand-80":"#9DCFFE","brand-90":"#C1E5FF","brand-95":"#DCF1FF","brand-100":"#F3FAFF","primary-10":"#0E113C","primary-20":"#191E67","primary-30":"#232A92","primary-40":"#233FC2","primary-50":"#135CEA","primary-60":"#378FFB","primary-70":"#71B3FD","primary-80":"#9DCFFE","primary-90":"#C1E5FF","primary-95":"#DCF1FF","primary-100":"#F3FAFF","secondary-10":"#34001F","secondary-20":"#540033","secondary-30":"#730045","secondary-40":"#9D0054","secondary-50":"#C61C64","secondary-60":"#DE6792","secondary-70":"#EB96B6","secondary-80":"#F5BAD2","secondary-90":"#FCD5E3","secondary-95":"#FDEBF1","secondary-100":"#FDF6F9","neutral-10":"#161616","neutral-20":"#282828","neutral-30":"#393939","neutral-40":"#4E4E4E","neutral-50":"#686868","neutral-60":"#8E8E8E","neutral-70":"#AFAFB0","neutral-80":"#C7CACA","neutral-90":"#DDE1E2","neutral-95":"#EDEFEF","neutral-100":"#F9F9F9","success-10":"#081A0F","success-20":"#0E2D1B","success-30":"#154126","success-40":"#1C5A34","success-50":"#257645","success-60":"#44A068","success-70":"#64C189","success-80":"#80DCA5","success-90":"#B4ECCB","success-95":"#D5F6E2","success-100":"#EFFCF4","warning-10":"#221302","warning-20":"#3B2204","warning-30":"#543106","warning-40":"#744408","warning-50":"#98590C","warning-60":"#D07A13","warning-70":"#E4A244","warning-80":"#F5C26C","warning-90":"#FADBA6","warning-95":"#FCECD4","warning-100":"#FDF7F0","error-10":"#330505","error-20":"#550808","error-30":"#750C0C","error-40":"#9E130F","error-50":"#CB2213","error-60":"#DE6C6C","error-70":"#E89B9B","error-80":"#EFBEBE","error-90":"#F5D9D9","error-95":"#F9ECEC","error-100":"#FCF7F7","info-10":"#021824","info-20":"#032B3F","info-30":"#053D59","info-40":"#06547B","info-50":"#176E9B","info-60":"#5296BE","info-70":"#82B5DA","info-80":"#ACCFE7","info-90":"#CCE3F1","info-95":"#E3F1F8","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000","primary-inverse":"#FEAB10"},Ln={"brand-10":"#370009","brand-20":"#4E000D","brand-30":"#640011","brand-40":"#850017","brand-50":"#9B001A","brand-60":"#EF2D4E","brand-70":"#F692A3","brand-80":"#FAB9C4","brand-90":"#FCD7DD","brand-95":"#FDEAED","brand-100":"#FEF8F9","primary-10":"#1F102A","primary-20":"#2F193F","primary-30":"#3E2053","primary-40":"#562D71","primary-50":"#663587","primary-60":"#9370AA","primary-70":"#BCA7CB","primary-80":"#D3C5DC","primary-90":"#E5DDEB","primary-95":"#F2EEF5","primary-100":"#FAF9FB","secondary-10":"#201316","secondary-20":"#311D22","secondary-30":"#3F272C","secondary-40":"#58363D","secondary-50":"#684049","secondary-60":"#AF6A7A","secondary-70":"#F393A8","secondary-80":"#FFB6C6","secondary-90":"#FFD6DF","secondary-95":"#FFE9EE","secondary-100":"#FFF7F9","neutral-10":"#161616","neutral-20":"#222222","neutral-30":"#2D2D2D","neutral-40":"#3F3F3F","neutral-50":"#4B4B4B","neutral-60":"#7E7E7E","neutral-70":"#AFAFB0","neutral-80":"#C7CACA","neutral-90":"#DDE1E2","neutral-95":"#EDEFEF","neutral-100":"#F9F9F9","success-10":"#081917","success-20":"#0D2724","success-30":"#11332E","success-40":"#174740","success-50":"#1B554C","success-60":"#2D8C7E","success-70":"#46C2AF","success-80":"#89D8CC","success-90":"#BCE9E2","success-95":"#DAF3EF","success-100":"#F0FAF9","warning-10":"#241200","warning-20":"#371C00","warning-30":"#482500","warning-40":"#633300","warning-50":"#763C00","warning-60":"#C36400","warning-70":"#FF9524","warning-80":"#FFBD77","warning-90":"#FFD9B2","warning-95":"#FFEBD6","warning-100":"#FFF7F0","error-10":"#330505","error-20":"#4B0707","error-30":"#600909","error-40":"#810D0D","error-50":"#98110F","error-60":"#D7504C","error-70":"#E89B9B","error-80":"#EFBEBE","error-90":"#F5D9D9","error-95":"#F9ECEC","error-100":"#FCF7F7","info-10":"#021824","info-20":"#032537","info-30":"#043148","info-40":"#054462","info-50":"#065175","info-60":"#3985AF","info-70":"#82B5DA","info-80":"#ACCFE7","info-90":"#CCE3F1","info-95":"#E3F1F8","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000","primary-inverse":"#FEAB10"},Hn={"brand-10":"#00143A","brand-20":"#00205B","brand-30":"#153368","brand-40":"#18417C","brand-50":"#00558C","brand-60":"#009CDE","brand-70":"#5AB9E7","brand-80":"#9ED0ED","brand-90":"#CAE3F4","brand-95":"#E2F0F9","brand-100":"#F4FAFD","primary-10":"#00143A","primary-20":"#00205B","primary-30":"#153368","primary-40":"#18417C","primary-50":"#00558C","primary-60":"#009CDE","primary-70":"#5AB9E7","primary-80":"#9ED0ED","primary-90":"#CAE3F4","primary-95":"#E2F0F9","primary-100":"#F4FAFD","secondary-10":"#10171F","secondary-20":"#1E252C","secondary-30":"#2F353B","secondary-40":"#3D4247","secondary-50":"#4E5255","secondary-60":"#8F9396","secondary-70":"#A9B0B3","secondary-80":"#C7CBCC","secondary-90":"#DDDFE0","secondary-95":"#ECEDEE","secondary-100":"#F8F8F9","neutral-10":"#10171F","neutral-20":"#1E252C","neutral-30":"#2F353B","neutral-40":"#3D4247","neutral-50":"#4E5255","neutral-60":"#8F9396","neutral-70":"#A9B0B3","neutral-80":"#C7CBCC","neutral-90":"#DDDFE0","neutral-95":"#ECEDEE","neutral-100":"#F8F8F9","success-10":"#001B0E","success-20":"#012A16","success-30":"#013D20","success-40":"#014D28","success-50":"#005F30","success-60":"#48A377","success-70":"#77BD9B","success-80":"#A3D5BD","success-90":"#C4E7D6","success-95":"#DBF4E7","success-100":"#ECFDF5","warning-10":"#1F1500","warning-20":"#312100","warning-30":"#473000","warning-40":"#593C00","warning-50":"#6E4B00","warning-60":"#B78C31","warning-70":"#DDA633","warning-80":"#E0C792","warning-90":"#E9DEC5","warning-95":"#F4EEE0","warning-100":"#FAF8F3","error-10":"#360109","error-20":"#50010E","error-30":"#6F0213","error-40":"#88051A","error-50":"#A60A24","error-60":"#E07083","error-70":"#EA98A6","error-80":"#F3BBC4","error-90":"#FAD5DC","error-95":"#FEE9ED","error-100":"#FFF6F8","info-10":"#00143A","info-20":"#00205B","info-30":"#153368","info-40":"#18417C","info-50":"#00558C","info-60":"#009CDE","info-70":"#5AB9E7","info-80":"#9ED0ED","info-90":"#CAE3F4","info-95":"#E2F0F9","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000","primary-inverse":"#FFCB6A"},In={"brand-10":"#0B181F","brand-20":"#132B35","brand-30":"#1B3D4C","brand-40":"#25546A","brand-50":"#306F8B","brand-60":"#459EC6","brand-70":"#70B5D3","brand-80":"#93C7DE","brand-90":"#CBE4EF","brand-95":"#EBF4F9","brand-100":"#F3F9FB","primary-10":"#0B181F","primary-20":"#132B35","primary-30":"#1B3D4C","primary-40":"#25546A","primary-50":"#306F8B","primary-60":"#459EC6","primary-70":"#70B5D3","primary-80":"#93C7DE","primary-90":"#CBE4EF","primary-95":"#EBF4F9","primary-100":"#F3F9FB","secondary-10":"#1E1500","secondary-20":"#352500","secondary-30":"#4B3500","secondary-40":"#674A00","secondary-50":"#896100","secondary-60":"#C28A00","secondary-70":"#E1A100","secondary-80":"#FAB200","secondary-90":"#FDDD8E","secondary-95":"#FEF2D5","secondary-100":"#FFF9EA","neutral-10":"#161616","neutral-20":"#282828","neutral-30":"#393939","neutral-40":"#4E4E4E","neutral-50":"#686868","neutral-60":"#969492","neutral-70":"#AFACA7","neutral-80":"#C2BFBB","neutral-90":"#E4DFD9","neutral-95":"#F4F1EF","neutral-100":"#F9F8F7","success-10":"#071913","success-20":"#0D2D22","success-30":"#134031","success-40":"#1A5944","success-50":"#237559","success-60":"#31A77E","success-70":"#39C293","success-80":"#67D2AD","success-90":"#B8EAD9","success-95":"#E3F7F0","success-100":"#F1FBF8","warning-10":"#211403","warning-20":"#3B2205","warning-30":"#543108","warning-40":"#73440B","warning-50":"#98590E","warning-60":"#D38221","warning-70":"#DEA057","warning-80":"#E5B77F","warning-90":"#F3DDC3","warning-95":"#FAF2E8","warning-100":"#FDF9F4","error-10":"#2E0A0C","error-20":"#4F1114","error-30":"#70171C","error-40":"#972026","error-50":"#C62932","error-60":"#F7636B","error-70":"#F98D93","error-80":"#FAAAAE","error-90":"#FDD7D9","error-95":"#FEF0F1","error-100":"#FFF6F6","info-10":"#0F1627","info-20":"#1B2745","info-30":"#273763","info-40":"#354D88","info-50":"#4665B3","info-60":"#6A90F6","info-70":"#8DAAF8","info-80":"#A7BEFA","info-90":"#D4DFFD","info-95":"#EEF3FE","info-100":"#F5F8FE",white:"#FFFFFF",black:"#000000","primary-inverse":"#FAB200"},Nn={collections:{lifesg:An,bookingsg:Bn,rbs:Tn,mylegacy:zn,ccube:Sn,oneservice:Mn,pa:On,a11yplayground:jn,supportgowhere:_n,sgwdigitallobby:_n,imda:Ln,spf:Hn,smgs:In},defaultValue:"lifesg"},Yn={collections:{lifesg:An,bookingsg:Bn,rbs:Tn,mylegacy:zn,ccube:Sn,oneservice:Mn,pa:On,a11yplayground:jn,supportgowhere:_n,sgwdigitallobby:_n,imda:Ln,spf:Hn,smgs:In},defaultValue:"lifesg"},Rn=e=>r=>{var n;const t=r.theme,i="dark"===(null==t?void 0:t.colourMode),o=$n(i?Yn:Nn,null==t?void 0:t.colourScheme),a=i?"primitiveColourDark":"primitiveColour",s=null===(n=null==t?void 0:t.overrides)||void 0===n?void 0:n[a];return s?wn(o,e,s):o[e]},Wn={"brand-10":Rn("brand-10"),"brand-20":Rn("brand-20"),"brand-30":Rn("brand-30"),"brand-40":Rn("brand-40"),"brand-50":Rn("brand-50"),"brand-60":Rn("brand-60"),"brand-70":Rn("brand-70"),"brand-80":Rn("brand-80"),"brand-90":Rn("brand-90"),"brand-95":Rn("brand-95"),"brand-100":Rn("brand-100"),"primary-10":Rn("primary-10"),"primary-20":Rn("primary-20"),"primary-30":Rn("primary-30"),"primary-40":Rn("primary-40"),"primary-50":Rn("primary-50"),"primary-60":Rn("primary-60"),"primary-70":Rn("primary-70"),"primary-80":Rn("primary-80"),"primary-90":Rn("primary-90"),"primary-95":Rn("primary-95"),"primary-100":Rn("primary-100"),"secondary-10":Rn("secondary-10"),"secondary-20":Rn("secondary-20"),"secondary-30":Rn("secondary-30"),"secondary-40":Rn("secondary-40"),"secondary-50":Rn("secondary-50"),"secondary-60":Rn("secondary-60"),"secondary-70":Rn("secondary-70"),"secondary-80":Rn("secondary-80"),"secondary-90":Rn("secondary-90"),"secondary-95":Rn("secondary-95"),"secondary-100":Rn("secondary-100"),"neutral-10":Rn("neutral-10"),"neutral-20":Rn("neutral-20"),"neutral-30":Rn("neutral-30"),"neutral-40":Rn("neutral-40"),"neutral-50":Rn("neutral-50"),"neutral-60":Rn("neutral-60"),"neutral-70":Rn("neutral-70"),"neutral-80":Rn("neutral-80"),"neutral-90":Rn("neutral-90"),"neutral-95":Rn("neutral-95"),"neutral-100":Rn("neutral-100"),"success-10":Rn("success-10"),"success-20":Rn("success-20"),"success-30":Rn("success-30"),"success-40":Rn("success-40"),"success-50":Rn("success-50"),"success-60":Rn("success-60"),"success-70":Rn("success-70"),"success-80":Rn("success-80"),"success-90":Rn("success-90"),"success-95":Rn("success-95"),"success-100":Rn("success-100"),"warning-10":Rn("warning-10"),"warning-20":Rn("warning-20"),"warning-30":Rn("warning-30"),"warning-40":Rn("warning-40"),"warning-50":Rn("warning-50"),"warning-60":Rn("warning-60"),"warning-70":Rn("warning-70"),"warning-80":Rn("warning-80"),"warning-90":Rn("warning-90"),"warning-95":Rn("warning-95"),"warning-100":Rn("warning-100"),"error-10":Rn("error-10"),"error-20":Rn("error-20"),"error-30":Rn("error-30"),"error-40":Rn("error-40"),"error-50":Rn("error-50"),"error-60":Rn("error-60"),"error-70":Rn("error-70"),"error-80":Rn("error-80"),"error-90":Rn("error-90"),"error-95":Rn("error-95"),"error-100":Rn("error-100"),"info-10":Rn("info-10"),"info-20":Rn("info-20"),"info-30":Rn("info-30"),"info-40":Rn("info-40"),"info-50":Rn("info-50"),"info-60":Rn("info-60"),"info-70":Rn("info-70"),"info-80":Rn("info-80"),"info-90":Rn("info-90"),"info-95":Rn("info-95"),"info-100":Rn("info-100"),white:Rn("white"),black:Rn("black"),"primary-inverse":Rn("primary-inverse")},Pn={text:Rn("neutral-20"),"text-subtle":Rn("neutral-30"),"text-subtler":Rn("neutral-50"),"text-subtlest":Rn("neutral-60"),"text-primary":Rn("primary-50"),"text-primary-strongest":Rn("primary-20"),"text-hover":Rn("primary-40"),"text-selected":Rn("primary-50"),"text-selected-hover":Rn("primary-40"),"text-disabled":Rn("neutral-50"),"text-disabled-subtle":Rn("neutral-60"),"text-disabled-subtlest":Rn("neutral-80"),"text-selected-disabled":Rn("neutral-20"),"text-success":Rn("success-40"),"text-warning":Rn("warning-40"),"text-error":Rn("error-40"),"text-info":Rn("info-40"),"text-inverse":Rn("white"),icon:Rn("neutral-50"),"icon-subtle":Rn("neutral-60"),"icon-strongest":Rn("neutral-20"),"icon-primary":Rn("primary-50"),"icon-primary-subtle":Rn("primary-60"),"icon-primary-subtlest":Rn("primary-70"),"icon-hover":Rn("primary-40"),"icon-selected":Rn("primary-50"),"icon-selected-hover":Rn("primary-40"),"icon-disabled":Rn("neutral-50"),"icon-disabled-subtle":Rn("neutral-60"),"icon-selected-disabled":Rn("neutral-60"),"icon-success":Rn("success-50"),"icon-warning":Rn("warning-60"),"icon-error":Rn("error-50"),"icon-error-strong":Rn("error-40"),"icon-info":Rn("info-50"),"icon-inverse":Rn("white"),"icon-primary-inverse":Rn("primary-inverse"),border:Rn("neutral-90"),"border-strong":Rn("neutral-70"),"border-stronger":Rn("neutral-50"),"border-primary":Rn("primary-50"),"border-primary-subtle":Rn("primary-60"),"border-hover":Rn("primary-90"),"border-hover-strong":Rn("primary-60"),"border-selected":Rn("primary-50"),"border-selected-subtle":Rn("primary-70"),"border-selected-subtlest":Rn("primary-90"),"border-selected-hover":Rn("primary-40"),"border-focus":Rn("primary-60"),"border-focus-strong":Rn("primary-50"),"border-disabled":Rn("neutral-90"),"border-selected-disabled":Rn("neutral-70"),"border-success":Rn("success-60"),"border-warning":Rn("warning-60"),"border-error":Rn("error-60"),"border-error-focus":Rn("error-60"),"border-error-focus-strong":Rn("error-40"),"border-error-strong":Rn("error-40"),"border-info":Rn("info-60"),bg:Rn("white"),"bg-strong":Rn("neutral-100"),"bg-stronger":Rn("neutral-95"),"bg-strongest":Rn("neutral-90"),"bg-hover":Rn("primary-95"),"bg-hover-strong":Rn("primary-90"),"bg-hover-subtle":Rn("primary-100"),"bg-hover-neutral":Rn("neutral-100"),"bg-hover-neutral-strong":Rn("neutral-90"),"bg-selected":Rn("primary-95"),"bg-selected-hover":Rn("primary-90"),"bg-selected-strong":Rn("primary-90"),"bg-selected-stronger":Rn("primary-70"),"bg-selected-strongest":Rn("primary-50"),"bg-selected-strongest-hover":Rn("primary-40"),"bg-disabled":Rn("neutral-95"),"bg-selected-disabled":Rn("neutral-95"),"bg-selected-stronger-disabled":Rn("neutral-70"),"bg-success":Rn("success-100"),"bg-success-hover":Rn("success-95"),"bg-success-strong":Rn("success-50"),"bg-success-strong-hover":Rn("success-40"),"bg-warning":Rn("warning-100"),"bg-warning-hover":Rn("warning-95"),"bg-warning-strong":Rn("warning-50"),"bg-warning-strong-hover":Rn("warning-40"),"bg-info":Rn("info-100"),"bg-info-hover":Rn("info-95"),"bg-info-strong":Rn("info-50"),"bg-info-strong-hover":Rn("info-40"),"bg-error":Rn("error-100"),"bg-error-hover":Rn("error-95"),"bg-error-strong":Rn("error-50"),"bg-error-strong-hover":Rn("error-40"),"bg-inverse":Rn("neutral-20"),"bg-inverse-subtle":Rn("neutral-30"),"bg-inverse-subtler":Rn("neutral-50"),"bg-inverse-subtlest":Rn("neutral-60"),"bg-inverse-hover":Rn("neutral-40"),"bg-primary":Rn("primary-50"),"bg-primary-subtle":Rn("primary-60"),"bg-primary-subtler":Rn("primary-95"),"bg-primary-subtlest":Rn("primary-100"),"bg-available":"#6DD0A1","bg-primary-hover":Rn("primary-40"),"bg-primary-subtlest-hover":Rn("primary-90"),"bg-primary-subtlest-selected":Rn("primary-90"),"overlay-strong":"rgba(40, 40, 40, 0.85)","overlay-subtle":"rgba(40, 40, 40, 0.20)",hyperlink:Rn("primary-50"),"hyperlink-hover":Rn("primary-40"),"hyperlink-visited":Rn("primary-40"),"hyperlink-inverse":Rn("primary-inverse"),"focus-ring":Rn("primary-50"),"focus-ring-inverse":Rn("white")},Un={text:Rn("neutral-100"),"text-subtle":Rn("neutral-80"),"text-subtler":Rn("neutral-60"),"text-subtlest":Rn("neutral-50"),"text-primary":Rn("primary-60"),"text-primary-strongest":Rn("primary-90"),"text-hover":Rn("primary-70"),"text-selected":Rn("primary-60"),"text-selected-hover":Rn("primary-70"),"text-disabled":Rn("neutral-60"),"text-disabled-subtle":Rn("neutral-50"),"text-disabled-subtlest":Rn("neutral-30"),"text-selected-disabled":Rn("neutral-90"),"text-success":Rn("success-70"),"text-warning":Rn("warning-70"),"text-error":Rn("error-70"),"text-info":Rn("info-70"),"text-inverse":Rn("black"),icon:Rn("neutral-60"),"icon-subtle":Rn("neutral-50"),"icon-strongest":Rn("neutral-90"),"icon-primary":Rn("primary-60"),"icon-primary-subtle":Rn("primary-50"),"icon-primary-subtlest":Rn("primary-40"),"icon-hover":Rn("primary-70"),"icon-selected":Rn("primary-60"),"icon-selected-hover":Rn("primary-70"),"icon-disabled":Rn("neutral-60"),"icon-disabled-subtle":Rn("neutral-50"),"icon-selected-disabled":Rn("neutral-50"),"icon-success":Rn("success-60"),"icon-warning":Rn("warning-50"),"icon-error":Rn("error-60"),"icon-error-strong":Rn("error-70"),"icon-info":Rn("info-60"),"icon-inverse":Rn("black"),"icon-primary-inverse":Rn("primary-inverse"),border:Rn("neutral-20"),"border-strong":Rn("neutral-40"),"border-stronger":Rn("neutral-60"),"border-primary":Rn("primary-60"),"border-primary-subtle":Rn("primary-50"),"border-hover":Rn("primary-20"),"border-hover-strong":Rn("primary-50"),"border-selected":Rn("primary-60"),"border-selected-subtle":Rn("primary-40"),"border-selected-subtlest":Rn("primary-20"),"border-selected-hover":Rn("primary-70"),"border-focus":Rn("primary-50"),"border-focus-strong":Rn("primary-60"),"border-disabled":Rn("neutral-20"),"border-selected-disabled":Rn("neutral-40"),"border-success":Rn("success-50"),"border-warning":Rn("warning-50"),"border-error":Rn("error-50"),"border-error-focus":Rn("error-50"),"border-error-focus-strong":Rn("error-70"),"border-error-strong":Rn("error-70"),"border-info":Rn("info-50"),bg:Rn("black"),"bg-strong":Rn("neutral-10"),"bg-stronger":Rn("neutral-20"),"bg-strongest":Rn("neutral-20"),"bg-hover":Rn("primary-20"),"bg-hover-strong":Rn("primary-20"),"bg-hover-subtle":Rn("primary-10"),"bg-hover-neutral":Rn("neutral-10"),"bg-hover-neutral-strong":Rn("neutral-20"),"bg-selected":Rn("primary-20"),"bg-selected-hover":Rn("primary-20"),"bg-selected-strong":Rn("primary-20"),"bg-selected-stronger":Rn("primary-40"),"bg-selected-strongest":Rn("primary-60"),"bg-selected-strongest-hover":Rn("primary-70"),"bg-disabled":Rn("neutral-20"),"bg-selected-disabled":Rn("neutral-20"),"bg-selected-stronger-disabled":Rn("neutral-40"),"bg-success":Rn("success-10"),"bg-success-hover":Rn("success-20"),"bg-success-strong":Rn("success-60"),"bg-success-strong-hover":Rn("success-70"),"bg-warning":Rn("warning-10"),"bg-warning-hover":Rn("warning-20"),"bg-warning-strong":Rn("warning-60"),"bg-warning-strong-hover":Rn("warning-70"),"bg-info":Rn("info-10"),"bg-info-hover":Rn("info-20"),"bg-info-strong":Rn("info-60"),"bg-info-strong-hover":Rn("info-70"),"bg-error":Rn("error-10"),"bg-error-hover":Rn("error-20"),"bg-error-strong":Rn("error-60"),"bg-error-strong-hover":Rn("error-70"),"bg-inverse":Rn("neutral-90"),"bg-inverse-subtle":Rn("neutral-80"),"bg-inverse-subtler":Rn("neutral-60"),"bg-inverse-subtlest":Rn("neutral-50"),"bg-inverse-hover":Rn("neutral-70"),"bg-primary":Rn("primary-60"),"bg-primary-subtle":Rn("primary-50"),"bg-primary-subtler":Rn("primary-20"),"bg-primary-subtlest":Rn("primary-10"),"bg-available":"#185339","bg-primary-hover":Rn("primary-70"),"bg-primary-subtlest-hover":Rn("primary-20"),"bg-primary-subtlest-selected":Rn("primary-20"),"overlay-strong":"rgba(78, 78, 78, 0.80)","overlay-subtle":"rgba(78, 78, 78, 0.50)",hyperlink:Rn("primary-60"),"hyperlink-hover":Rn("primary-70"),"hyperlink-visited":Rn("primary-70"),"hyperlink-inverse":Rn("primary-inverse"),"focus-ring":Rn("primary-60"),"focus-ring-inverse":Rn("black")},Vn={text:Rn("neutral-30"),"text-subtle":Rn("neutral-40"),"text-subtler":Rn("neutral-50"),"text-subtlest":Rn("neutral-70"),"text-primary":Rn("neutral-10"),"text-primary-strongest":Rn("neutral-10"),"text-hover":Rn("neutral-70"),"text-selected":Rn("neutral-20"),"text-selected-hover":Rn("neutral-10"),"text-disabled":Rn("neutral-50"),"text-disabled-subtle":Rn("neutral-70"),"text-disabled-subtlest":Rn("neutral-80"),"text-selected-disabled":Rn("neutral-40"),"text-success":Rn("success-40"),"text-warning":Rn("warning-40"),"text-error":Rn("brand-30"),"text-info":Rn("neutral-40"),"text-inverse":Rn("neutral-100"),icon:Rn("neutral-40"),"icon-subtle":Rn("neutral-50"),"icon-strongest":Rn("neutral-10"),"icon-primary":Rn("neutral-10"),"icon-primary-subtle":Rn("neutral-30"),"icon-primary-subtlest":Rn("neutral-60"),"icon-hover":Rn("neutral-70"),"icon-selected":Rn("brand-20"),"icon-selected-hover":Rn("brand-10"),"icon-disabled":Rn("neutral-50"),"icon-disabled-subtle":Rn("neutral-70"),"icon-selected-disabled":Rn("neutral-40"),"icon-success":Rn("success-40"),"icon-warning":Rn("warning-60"),"icon-error":Rn("brand-30"),"icon-error-strong":Rn("brand-10"),"icon-info":Rn("neutral-40"),"icon-inverse":Rn("neutral-100"),"icon-primary-inverse":"#F9B371",border:Rn("neutral-90"),"border-strong":Rn("neutral-30"),"border-stronger":Rn("neutral-20"),"border-primary":Rn("neutral-40"),"border-primary-subtle":Rn("neutral-60"),"border-hover":Rn("neutral-80"),"border-hover-strong":Rn("neutral-10"),"border-selected":Rn("brand-20"),"border-selected-subtle":Rn("neutral-40"),"border-selected-subtlest":Rn("neutral-70"),"border-selected-hover":Rn("neutral-10"),"border-focus":Rn("neutral-20"),"border-focus-strong":Rn("neutral-10"),"border-disabled":Rn("neutral-90"),"border-selected-disabled":Rn("neutral-80"),"border-success":Rn("success-40"),"border-warning":Rn("warning-60"),"border-error":Rn("brand-30"),"border-error-focus":Rn("brand-20"),"border-error-focus-strong":Rn("brand-10"),"border-error-strong":Rn("brand-20"),"border-info":Rn("neutral-40"),bg:Rn("neutral-100"),"bg-strong":Rn("neutral-95"),"bg-stronger":Rn("neutral-90"),"bg-strongest":Rn("neutral-80"),"bg-hover":Rn("brand-90"),"bg-hover-strong":Rn("brand-80"),"bg-hover-subtle":Rn("neutral-90"),"bg-hover-neutral":Rn("neutral-90"),"bg-hover-neutral-strong":Rn("neutral-90"),"bg-selected":Rn("brand-100"),"bg-selected-hover":Rn("brand-30"),"bg-selected-strong":Rn("brand-50"),"bg-selected-stronger":Rn("brand-40"),"bg-selected-strongest":Rn("brand-20"),"bg-selected-strongest-hover":Rn("brand-10"),"bg-disabled":Rn("neutral-90"),"bg-selected-disabled":Rn("neutral-90"),"bg-selected-stronger-disabled":Rn("neutral-80"),"bg-success":Rn("success-100"),"bg-success-hover":Rn("success-95"),"bg-success-strong":Rn("success-50"),"bg-success-strong-hover":Rn("success-40"),"bg-warning":Rn("warning-100"),"bg-warning-hover":Rn("warning-95"),"bg-warning-strong":Rn("warning-50"),"bg-warning-strong-hover":Rn("warning-40"),"bg-info":Rn("neutral-95"),"bg-info-hover":Rn("info-95"),"bg-info-strong":Rn("info-50"),"bg-info-strong-hover":Rn("info-40"),"bg-error":Rn("brand-100"),"bg-error-hover":Rn("error-95"),"bg-error-strong":Rn("error-50"),"bg-error-strong-hover":Rn("error-40"),"bg-inverse":Rn("neutral-40"),"bg-inverse-subtle":Rn("neutral-60"),"bg-inverse-subtler":Rn("neutral-70"),"bg-inverse-subtlest":Rn("neutral-80"),"bg-inverse-hover":Rn("neutral-30"),"bg-primary":Rn("brand-20"),"bg-primary-subtle":Rn("brand-60"),"bg-primary-subtler":Rn("brand-80"),"bg-primary-subtlest":Rn("brand-100"),"bg-available":Rn("success-60"),"bg-primary-hover":Rn("brand-10"),"bg-primary-subtlest-hover":Rn("brand-80"),"bg-primary-subtlest-selected":Rn("brand-40"),"overlay-strong":"rgba(25, 25, 25, 0.95)","overlay-subtle":"rgba(25, 25, 25, 0.20)",hyperlink:Rn("neutral-10"),"hyperlink-hover":Rn("neutral-40"),"hyperlink-visited":Rn("neutral-50"),"hyperlink-inverse":"#F8AE68","focus-ring":Rn("primary-50"),"focus-ring-inverse":Rn("white")},Zn={text:Rn("neutral-20"),"text-subtle":Rn("neutral-30"),"text-subtler":Rn("neutral-50"),"text-subtlest":Rn("neutral-60"),"text-primary":Rn("primary-50"),"text-primary-strongest":Rn("primary-20"),"text-hover":Rn("primary-40"),"text-selected":Rn("primary-50"),"text-selected-hover":Rn("primary-40"),"text-disabled":Rn("neutral-50"),"text-disabled-subtle":Rn("neutral-60"),"text-disabled-subtlest":Rn("neutral-80"),"text-selected-disabled":Rn("neutral-20"),"text-success":Rn("success-40"),"text-warning":Rn("warning-40"),"text-error":Rn("error-40"),"text-info":Rn("info-40"),"text-inverse":Rn("white"),icon:Rn("neutral-50"),"icon-subtle":Rn("neutral-60"),"icon-strongest":Rn("neutral-20"),"icon-primary":Rn("primary-50"),"icon-primary-subtle":Rn("primary-60"),"icon-primary-subtlest":Rn("primary-70"),"icon-hover":Rn("primary-40"),"icon-selected":Rn("primary-50"),"icon-selected-hover":Rn("primary-40"),"icon-disabled":Rn("neutral-50"),"icon-disabled-subtle":Rn("neutral-60"),"icon-selected-disabled":Rn("neutral-60"),"icon-success":Rn("success-50"),"icon-warning":Rn("warning-60"),"icon-error":Rn("error-50"),"icon-error-strong":Rn("error-40"),"icon-info":Rn("info-50"),"icon-inverse":Rn("white"),"icon-primary-inverse":Rn("primary-inverse"),border:Rn("neutral-90"),"border-strong":Rn("neutral-70"),"border-stronger":Rn("neutral-50"),"border-primary":Rn("primary-50"),"border-primary-subtle":Rn("primary-60"),"border-hover":Rn("primary-90"),"border-hover-strong":Rn("primary-60"),"border-selected":Rn("primary-50"),"border-selected-subtle":Rn("primary-70"),"border-selected-subtlest":Rn("primary-90"),"border-selected-hover":Rn("primary-40"),"border-focus":Rn("primary-60"),"border-focus-strong":Rn("primary-50"),"border-disabled":Rn("neutral-90"),"border-selected-disabled":Rn("neutral-70"),"border-success":Rn("success-60"),"border-warning":Rn("warning-60"),"border-error":Rn("error-60"),"border-error-focus":Rn("error-60"),"border-error-focus-strong":Rn("error-40"),"border-error-strong":Rn("error-40"),"border-info":Rn("info-60"),bg:Rn("white"),"bg-strong":Rn("neutral-100"),"bg-stronger":Rn("neutral-95"),"bg-strongest":Rn("neutral-90"),"bg-hover":Rn("primary-95"),"bg-hover-strong":Rn("primary-90"),"bg-hover-subtle":Rn("primary-100"),"bg-hover-neutral":Rn("neutral-100"),"bg-hover-neutral-strong":Rn("neutral-90"),"bg-selected":Rn("primary-95"),"bg-selected-hover":Rn("primary-90"),"bg-selected-strong":Rn("primary-90"),"bg-selected-stronger":Rn("primary-70"),"bg-selected-strongest":Rn("primary-50"),"bg-selected-strongest-hover":Rn("primary-40"),"bg-disabled":Rn("neutral-95"),"bg-selected-disabled":Rn("neutral-95"),"bg-selected-stronger-disabled":Rn("neutral-70"),"bg-success":Rn("success-100"),"bg-success-hover":Rn("success-95"),"bg-success-strong":Rn("success-50"),"bg-success-strong-hover":Rn("success-40"),"bg-warning":Rn("warning-100"),"bg-warning-hover":Rn("warning-95"),"bg-warning-strong":Rn("warning-50"),"bg-warning-strong-hover":Rn("warning-40"),"bg-info":Rn("info-100"),"bg-info-hover":Rn("info-95"),"bg-info-strong":Rn("info-50"),"bg-info-strong-hover":Rn("info-40"),"bg-error":Rn("error-100"),"bg-error-hover":Rn("error-95"),"bg-error-strong":Rn("error-50"),"bg-error-strong-hover":Rn("error-40"),"bg-inverse":Rn("neutral-20"),"bg-inverse-subtle":Rn("neutral-30"),"bg-inverse-subtler":Rn("neutral-50"),"bg-inverse-subtlest":Rn("neutral-60"),"bg-inverse-hover":Rn("neutral-40"),"bg-primary":Rn("primary-50"),"bg-primary-subtle":Rn("primary-60"),"bg-primary-subtler":Rn("primary-95"),"bg-primary-subtlest":Rn("primary-100"),"bg-available":"#6DD0A1","bg-primary-hover":Rn("primary-40"),"bg-primary-subtlest-hover":Rn("primary-90"),"bg-primary-subtlest-selected":Rn("primary-90"),"overlay-strong":"rgba(40, 40, 40, 0.85)","overlay-subtle":"rgba(40, 40, 40, 0.20)",hyperlink:Rn("primary-50"),"hyperlink-hover":Rn("primary-40"),"hyperlink-visited":Rn("primary-40"),"hyperlink-inverse":Rn("primary-inverse"),"focus-ring":Rn("primary-50"),"focus-ring-inverse":Rn("white")},Xn={text:Rn("neutral-100"),"text-subtle":Rn("neutral-80"),"text-subtler":Rn("neutral-60"),"text-subtlest":Rn("neutral-50"),"text-primary":Rn("primary-60"),"text-primary-strongest":Rn("primary-90"),"text-hover":Rn("primary-70"),"text-selected":Rn("primary-60"),"text-selected-hover":Rn("primary-70"),"text-disabled":Rn("neutral-60"),"text-disabled-subtle":Rn("neutral-50"),"text-disabled-subtlest":Rn("neutral-30"),"text-selected-disabled":Rn("neutral-90"),"text-success":Rn("success-70"),"text-warning":Rn("warning-70"),"text-error":Rn("error-70"),"text-info":Rn("info-70"),"text-inverse":Rn("black"),icon:Rn("neutral-60"),"icon-subtle":Rn("neutral-50"),"icon-strongest":Rn("neutral-90"),"icon-primary":Rn("primary-60"),"icon-primary-subtle":Rn("primary-50"),"icon-primary-subtlest":Rn("primary-40"),"icon-hover":Rn("primary-70"),"icon-selected":Rn("primary-60"),"icon-selected-hover":Rn("primary-70"),"icon-disabled":Rn("neutral-60"),"icon-disabled-subtle":Rn("neutral-50"),"icon-selected-disabled":Rn("neutral-50"),"icon-success":Rn("success-60"),"icon-warning":Rn("warning-50"),"icon-error":Rn("error-60"),"icon-error-strong":Rn("error-70"),"icon-info":Rn("info-60"),"icon-inverse":Rn("black"),"icon-primary-inverse":Rn("primary-inverse"),border:Rn("neutral-20"),"border-strong":Rn("neutral-40"),"border-stronger":Rn("neutral-60"),"border-primary":Rn("primary-60"),"border-primary-subtle":Rn("primary-50"),"border-hover":Rn("primary-20"),"border-hover-strong":Rn("primary-50"),"border-selected":Rn("primary-60"),"border-selected-subtle":Rn("primary-40"),"border-selected-subtlest":Rn("primary-20"),"border-selected-hover":Rn("primary-70"),"border-focus":Rn("primary-50"),"border-focus-strong":Rn("primary-60"),"border-disabled":Rn("neutral-20"),"border-selected-disabled":Rn("neutral-40"),"border-success":Rn("success-50"),"border-warning":Rn("warning-50"),"border-error":Rn("error-50"),"border-error-focus":Rn("error-50"),"border-error-focus-strong":Rn("error-70"),"border-error-strong":Rn("error-70"),"border-info":Rn("info-50"),bg:Rn("black"),"bg-strong":Rn("neutral-10"),"bg-stronger":Rn("neutral-20"),"bg-strongest":Rn("neutral-20"),"bg-hover":Rn("primary-20"),"bg-hover-strong":Rn("primary-20"),"bg-hover-subtle":Rn("primary-10"),"bg-hover-neutral":Rn("neutral-10"),"bg-hover-neutral-strong":Rn("neutral-20"),"bg-selected":Rn("primary-20"),"bg-selected-hover":Rn("primary-20"),"bg-selected-strong":Rn("primary-20"),"bg-selected-stronger":Rn("primary-40"),"bg-selected-strongest":Rn("primary-60"),"bg-selected-strongest-hover":Rn("primary-70"),"bg-disabled":Rn("neutral-20"),"bg-selected-disabled":Rn("neutral-20"),"bg-selected-stronger-disabled":Rn("neutral-40"),"bg-success":Rn("success-10"),"bg-success-hover":Rn("success-20"),"bg-success-strong":Rn("success-60"),"bg-success-strong-hover":Rn("success-70"),"bg-warning":Rn("warning-10"),"bg-warning-hover":Rn("warning-20"),"bg-warning-strong":Rn("warning-60"),"bg-warning-strong-hover":Rn("warning-70"),"bg-info":Rn("info-10"),"bg-info-hover":Rn("info-20"),"bg-info-strong":Rn("info-60"),"bg-info-strong-hover":Rn("info-70"),"bg-error":Rn("error-10"),"bg-error-hover":Rn("error-20"),"bg-error-strong":Rn("error-60"),"bg-error-strong-hover":Rn("error-70"),"bg-inverse":Rn("neutral-90"),"bg-inverse-subtle":Rn("neutral-80"),"bg-inverse-subtler":Rn("neutral-60"),"bg-inverse-subtlest":Rn("neutral-50"),"bg-inverse-hover":Rn("neutral-70"),"bg-primary":Rn("primary-60"),"bg-primary-subtle":Rn("primary-50"),"bg-primary-subtler":Rn("primary-20"),"bg-primary-subtlest":Rn("primary-10"),"bg-available":"#185339","bg-primary-hover":Rn("primary-70"),"bg-primary-subtlest-hover":Rn("primary-20"),"bg-primary-subtlest-selected":Rn("primary-20"),"overlay-strong":"rgba(78, 78, 78, 0.80)","overlay-subtle":"rgba(78, 78, 78, 0.50)",hyperlink:Rn("primary-60"),"hyperlink-hover":Rn("primary-70"),"hyperlink-visited":Rn("primary-70"),"hyperlink-inverse":Rn("primary-inverse"),"focus-ring":Rn("primary-60"),"focus-ring-inverse":Rn("black")},qn={text:Rn("neutral-20"),"text-subtle":Rn("neutral-30"),"text-subtler":Rn("neutral-50"),"text-subtlest":Rn("neutral-60"),"text-primary":Rn("primary-50"),"text-primary-strongest":Rn("primary-20"),"text-hover":Rn("primary-40"),"text-selected":Rn("primary-50"),"text-selected-hover":Rn("primary-40"),"text-disabled":Rn("neutral-50"),"text-disabled-subtle":Rn("neutral-60"),"text-disabled-subtlest":Rn("neutral-80"),"text-selected-disabled":Rn("neutral-20"),"text-success":Rn("success-40"),"text-warning":Rn("warning-40"),"text-error":Rn("error-40"),"text-info":Rn("info-40"),"text-inverse":Rn("white"),icon:Rn("neutral-50"),"icon-subtle":Rn("neutral-60"),"icon-strongest":Rn("neutral-20"),"icon-primary":Rn("primary-50"),"icon-primary-subtle":Rn("primary-60"),"icon-primary-subtlest":Rn("primary-70"),"icon-hover":Rn("primary-40"),"icon-selected":Rn("primary-50"),"icon-selected-hover":Rn("primary-40"),"icon-disabled":Rn("neutral-50"),"icon-disabled-subtle":Rn("neutral-60"),"icon-selected-disabled":Rn("neutral-60"),"icon-success":Rn("success-50"),"icon-warning":Rn("warning-60"),"icon-error":Rn("error-50"),"icon-error-strong":Rn("error-40"),"icon-info":Rn("info-50"),"icon-inverse":Rn("white"),"icon-primary-inverse":Rn("primary-inverse"),border:Rn("neutral-50"),"border-strong":Rn("neutral-70"),"border-stronger":Rn("neutral-50"),"border-primary":Rn("primary-50"),"border-primary-subtle":Rn("primary-60"),"border-hover":Rn("primary-90"),"border-hover-strong":Rn("primary-60"),"border-selected":Rn("primary-50"),"border-selected-subtle":Rn("primary-70"),"border-selected-subtlest":Rn("primary-90"),"border-selected-hover":Rn("primary-40"),"border-focus":Rn("primary-60"),"border-focus-strong":Rn("primary-50"),"border-disabled":Rn("neutral-90"),"border-selected-disabled":Rn("neutral-70"),"border-success":Rn("success-60"),"border-warning":Rn("warning-60"),"border-error":Rn("error-60"),"border-error-focus":Rn("error-60"),"border-error-focus-strong":Rn("error-40"),"border-error-strong":Rn("error-40"),"border-info":Rn("info-60"),bg:Rn("white"),"bg-strong":Rn("neutral-100"),"bg-stronger":Rn("neutral-95"),"bg-strongest":Rn("neutral-90"),"bg-hover":Rn("primary-95"),"bg-hover-strong":Rn("primary-90"),"bg-hover-subtle":Rn("primary-100"),"bg-hover-neutral":Rn("neutral-100"),"bg-hover-neutral-strong":Rn("neutral-90"),"bg-selected":Rn("primary-95"),"bg-selected-hover":Rn("primary-90"),"bg-selected-strong":Rn("primary-90"),"bg-selected-stronger":Rn("primary-70"),"bg-selected-strongest":Rn("primary-50"),"bg-selected-strongest-hover":Rn("primary-40"),"bg-disabled":Rn("neutral-95"),"bg-selected-disabled":Rn("neutral-95"),"bg-selected-stronger-disabled":Rn("neutral-70"),"bg-success":Rn("success-100"),"bg-success-hover":Rn("success-95"),"bg-success-strong":Rn("success-50"),"bg-success-strong-hover":Rn("success-40"),"bg-warning":Rn("warning-100"),"bg-warning-hover":Rn("warning-95"),"bg-warning-strong":Rn("warning-50"),"bg-warning-strong-hover":Rn("warning-40"),"bg-info":Rn("info-100"),"bg-info-hover":Rn("info-95"),"bg-info-strong":Rn("info-50"),"bg-info-strong-hover":Rn("info-40"),"bg-error":Rn("error-100"),"bg-error-hover":Rn("error-95"),"bg-error-strong":Rn("error-50"),"bg-error-strong-hover":Rn("error-40"),"bg-inverse":Rn("neutral-20"),"bg-inverse-subtle":Rn("neutral-30"),"bg-inverse-subtler":Rn("neutral-50"),"bg-inverse-subtlest":Rn("neutral-60"),"bg-inverse-hover":Rn("neutral-40"),"bg-primary":Rn("primary-50"),"bg-primary-subtle":Rn("primary-60"),"bg-primary-subtler":Rn("primary-95"),"bg-primary-subtlest":Rn("primary-100"),"bg-available":"#6DD0A1","bg-primary-hover":Rn("primary-40"),"bg-primary-subtlest-hover":Rn("primary-90"),"bg-primary-subtlest-selected":Rn("primary-90"),"overlay-strong":"rgba(40, 40, 40, 0.85)","overlay-subtle":"rgba(40, 40, 40, 0.20)",hyperlink:Rn("primary-50"),"hyperlink-hover":Rn("primary-40"),"hyperlink-visited":Rn("primary-40"),"hyperlink-inverse":Rn("primary-inverse"),"focus-ring":Rn("primary-50"),"focus-ring-inverse":Rn("white")},Jn={text:Rn("neutral-100"),"text-subtle":Rn("neutral-80"),"text-subtler":Rn("neutral-60"),"text-subtlest":Rn("neutral-50"),"text-primary":Rn("primary-60"),"text-primary-strongest":Rn("primary-90"),"text-hover":Rn("primary-70"),"text-selected":Rn("primary-60"),"text-selected-hover":Rn("primary-70"),"text-disabled":Rn("neutral-60"),"text-disabled-subtle":Rn("neutral-50"),"text-disabled-subtlest":Rn("neutral-30"),"text-selected-disabled":Rn("neutral-90"),"text-success":Rn("success-70"),"text-warning":Rn("warning-70"),"text-error":Rn("error-70"),"text-info":Rn("info-70"),"text-inverse":Rn("black"),icon:Rn("neutral-60"),"icon-subtle":Rn("neutral-50"),"icon-strongest":Rn("neutral-90"),"icon-primary":Rn("primary-60"),"icon-primary-subtle":Rn("primary-50"),"icon-primary-subtlest":Rn("primary-40"),"icon-hover":Rn("primary-70"),"icon-selected":Rn("primary-60"),"icon-selected-hover":Rn("primary-70"),"icon-disabled":Rn("neutral-60"),"icon-disabled-subtle":Rn("neutral-50"),"icon-selected-disabled":Rn("neutral-50"),"icon-success":Rn("success-60"),"icon-warning":Rn("warning-50"),"icon-error":Rn("error-60"),"icon-error-strong":Rn("error-70"),"icon-info":Rn("info-60"),"icon-inverse":Rn("black"),"icon-primary-inverse":Rn("primary-inverse"),border:Rn("neutral-50"),"border-strong":Rn("neutral-40"),"border-stronger":Rn("neutral-60"),"border-primary":Rn("primary-60"),"border-primary-subtle":Rn("primary-50"),"border-hover":Rn("primary-20"),"border-hover-strong":Rn("primary-50"),"border-selected":Rn("primary-60"),"border-selected-subtle":Rn("primary-40"),"border-selected-subtlest":Rn("primary-20"),"border-selected-hover":Rn("primary-70"),"border-focus":Rn("primary-50"),"border-focus-strong":Rn("primary-60"),"border-disabled":Rn("neutral-20"),"border-selected-disabled":Rn("neutral-40"),"border-success":Rn("success-50"),"border-warning":Rn("warning-50"),"border-error":Rn("error-50"),"border-error-focus":Rn("error-50"),"border-error-focus-strong":Rn("error-70"),"border-error-strong":Rn("error-70"),"border-info":Rn("info-50"),bg:Rn("black"),"bg-strong":Rn("neutral-10"),"bg-stronger":Rn("neutral-20"),"bg-strongest":Rn("neutral-20"),"bg-hover":Rn("primary-20"),"bg-hover-strong":Rn("primary-20"),"bg-hover-subtle":Rn("primary-10"),"bg-hover-neutral":Rn("neutral-10"),"bg-hover-neutral-strong":Rn("neutral-20"),"bg-selected":Rn("primary-20"),"bg-selected-hover":Rn("primary-20"),"bg-selected-strong":Rn("primary-20"),"bg-selected-stronger":Rn("primary-40"),"bg-selected-strongest":Rn("primary-60"),"bg-selected-strongest-hover":Rn("primary-70"),"bg-disabled":Rn("neutral-20"),"bg-selected-disabled":Rn("neutral-20"),"bg-selected-stronger-disabled":Rn("neutral-40"),"bg-success":Rn("success-10"),"bg-success-hover":Rn("success-20"),"bg-success-strong":Rn("success-60"),"bg-success-strong-hover":Rn("success-70"),"bg-warning":Rn("warning-10"),"bg-warning-hover":Rn("warning-20"),"bg-warning-strong":Rn("warning-60"),"bg-warning-strong-hover":Rn("warning-70"),"bg-info":Rn("info-10"),"bg-info-hover":Rn("info-20"),"bg-info-strong":Rn("info-60"),"bg-info-strong-hover":Rn("info-70"),"bg-error":Rn("error-10"),"bg-error-hover":Rn("error-20"),"bg-error-strong":Rn("error-60"),"bg-error-strong-hover":Rn("error-70"),"bg-inverse":Rn("neutral-90"),"bg-inverse-subtle":Rn("neutral-80"),"bg-inverse-subtler":Rn("neutral-60"),"bg-inverse-subtlest":Rn("neutral-50"),"bg-inverse-hover":Rn("neutral-70"),"bg-primary":Rn("primary-60"),"bg-primary-subtle":Rn("primary-50"),"bg-primary-subtler":Rn("primary-20"),"bg-primary-subtlest":Rn("primary-10"),"bg-available":"#185339","bg-primary-hover":Rn("primary-70"),"bg-primary-subtlest-hover":Rn("primary-20"),"bg-primary-subtlest-selected":Rn("primary-20"),"overlay-strong":"rgba(78, 78, 78, 0.80)","overlay-subtle":"rgba(78, 78, 78, 0.50)",hyperlink:Rn("primary-60"),"hyperlink-hover":Rn("primary-70"),"hyperlink-visited":Rn("primary-70"),"hyperlink-inverse":Rn("primary-inverse"),"focus-ring":Rn("primary-60"),"focus-ring-inverse":Rn("black")},Gn={collections:{lifesg:Pn,bookingsg:Pn,rbs:Pn,mylegacy:Pn,ccube:Pn,oneservice:Pn,pa:Vn,a11yplayground:Zn,supportgowhere:Pn,sgwdigitallobby:qn,imda:Pn,spf:Pn,smgs:Pn},defaultValue:"lifesg"},Kn={collections:{lifesg:Un,bookingsg:Un,rbs:Un,mylegacy:Un,ccube:Un,oneservice:Un,pa:Un,a11yplayground:Xn,supportgowhere:Un,sgwdigitallobby:Jn,imda:Un,spf:Un,smgs:Un},defaultValue:"lifesg"},Qn=e=>r=>{var n;const t=r.theme,i="dark"===(null==t?void 0:t.colourMode),o=$n(i?Kn:Gn,null==t?void 0:t.colourScheme),a=i?"semanticColourDark":"semanticColour",s=null===(n=null==t?void 0:t.overrides)||void 0===n?void 0:n[a],l=s?wn(o,e,s):o[e];return"function"==typeof l?l(r):l},et={text:Qn("text"),"text-subtle":Qn("text-subtle"),"text-subtler":Qn("text-subtler"),"text-subtlest":Qn("text-subtlest"),"text-primary":Qn("text-primary"),"text-primary-strongest":Qn("text-primary-strongest"),"text-hover":Qn("text-hover"),"text-selected":Qn("text-selected"),"text-selected-hover":Qn("text-selected-hover"),"text-disabled":Qn("text-disabled"),"text-disabled-subtle":Qn("text-disabled-subtle"),"text-disabled-subtlest":Qn("text-disabled-subtlest"),"text-selected-disabled":Qn("text-selected-disabled"),"text-success":Qn("text-success"),"text-warning":Qn("text-warning"),"text-error":Qn("text-error"),"text-info":Qn("text-info"),"text-inverse":Qn("text-inverse"),icon:Qn("icon"),"icon-subtle":Qn("icon-subtle"),"icon-strongest":Qn("icon-strongest"),"icon-primary":Qn("icon-primary"),"icon-primary-subtle":Qn("icon-primary-subtle"),"icon-primary-subtlest":Qn("icon-primary-subtlest"),"icon-hover":Qn("icon-hover"),"icon-selected":Qn("icon-selected"),"icon-selected-hover":Qn("icon-selected-hover"),"icon-disabled":Qn("icon-disabled"),"icon-disabled-subtle":Qn("icon-disabled-subtle"),"icon-selected-disabled":Qn("icon-selected-disabled"),"icon-success":Qn("icon-success"),"icon-warning":Qn("icon-warning"),"icon-error":Qn("icon-error"),"icon-error-strong":Qn("icon-error-strong"),"icon-info":Qn("icon-info"),"icon-inverse":Qn("icon-inverse"),"icon-primary-inverse":Qn("icon-primary-inverse"),border:Qn("border"),"border-strong":Qn("border-strong"),"border-stronger":Qn("border-stronger"),"border-primary":Qn("border-primary"),"border-primary-subtle":Qn("border-primary-subtle"),"border-hover":Qn("border-hover"),"border-hover-strong":Qn("border-hover-strong"),"border-selected":Qn("border-selected"),"border-selected-subtle":Qn("border-selected-subtle"),"border-selected-subtlest":Qn("border-selected-subtlest"),"border-selected-hover":Qn("border-selected-hover"),"border-focus":Qn("border-focus"),"border-focus-strong":Qn("border-focus-strong"),"border-disabled":Qn("border-disabled"),"border-selected-disabled":Qn("border-selected-disabled"),"border-success":Qn("border-success"),"border-warning":Qn("border-warning"),"border-error":Qn("border-error"),"border-error-focus":Qn("border-error-focus"),"border-error-focus-strong":Qn("border-error-focus-strong"),"border-error-strong":Qn("border-error-strong"),"border-info":Qn("border-info"),bg:Qn("bg"),"bg-strong":Qn("bg-strong"),"bg-stronger":Qn("bg-stronger"),"bg-strongest":Qn("bg-strongest"),"bg-hover":Qn("bg-hover"),"bg-hover-strong":Qn("bg-hover-strong"),"bg-hover-subtle":Qn("bg-hover-subtle"),"bg-hover-neutral":Qn("bg-hover-neutral"),"bg-hover-neutral-strong":Qn("bg-hover-neutral-strong"),"bg-selected":Qn("bg-selected"),"bg-selected-hover":Qn("bg-selected-hover"),"bg-selected-strong":Qn("bg-selected-strong"),"bg-selected-stronger":Qn("bg-selected-stronger"),"bg-selected-strongest":Qn("bg-selected-strongest"),"bg-selected-strongest-hover":Qn("bg-selected-strongest-hover"),"bg-disabled":Qn("bg-disabled"),"bg-selected-disabled":Qn("bg-selected-disabled"),"bg-selected-stronger-disabled":Qn("bg-selected-stronger-disabled"),"bg-success":Qn("bg-success"),"bg-success-hover":Qn("bg-success-hover"),"bg-success-strong":Qn("bg-success-strong"),"bg-success-strong-hover":Qn("bg-success-strong-hover"),"bg-warning":Qn("bg-warning"),"bg-warning-hover":Qn("bg-warning-hover"),"bg-warning-strong":Qn("bg-warning-strong"),"bg-warning-strong-hover":Qn("bg-warning-strong-hover"),"bg-info":Qn("bg-info"),"bg-info-hover":Qn("bg-info-hover"),"bg-info-strong":Qn("bg-info-strong"),"bg-info-strong-hover":Qn("bg-info-strong-hover"),"bg-error":Qn("bg-error"),"bg-error-hover":Qn("bg-error-hover"),"bg-error-strong":Qn("bg-error-strong"),"bg-error-strong-hover":Qn("bg-error-strong-hover"),"bg-inverse":Qn("bg-inverse"),"bg-inverse-subtle":Qn("bg-inverse-subtle"),"bg-inverse-subtler":Qn("bg-inverse-subtler"),"bg-inverse-subtlest":Qn("bg-inverse-subtlest"),"bg-inverse-hover":Qn("bg-inverse-hover"),"bg-primary":Qn("bg-primary"),"bg-primary-subtle":Qn("bg-primary-subtle"),"bg-primary-subtler":Qn("bg-primary-subtler"),"bg-primary-subtlest":Qn("bg-primary-subtlest"),"bg-available":Qn("bg-available"),"bg-primary-hover":Qn("bg-primary-hover"),"bg-primary-subtlest-hover":Qn("bg-primary-subtlest-hover"),"bg-primary-subtlest-selected":Qn("bg-primary-subtlest-selected"),"overlay-strong":Qn("overlay-strong"),"overlay-subtle":Qn("overlay-subtle"),hyperlink:Qn("hyperlink"),"hyperlink-hover":Qn("hyperlink-hover"),"hyperlink-visited":Qn("hyperlink-visited"),"hyperlink-inverse":Qn("hyperlink-inverse"),"focus-ring":Qn("focus-ring"),"focus-ring-inverse":Qn("focus-ring-inverse")},rt={collections:{default:{solid:e=>r=>{var n,t,i;const{thickness:o,radius:a,colour:s}=e||{},l=null!==(n="function"==typeof o?o(r):o+"px")&&void 0!==n?n:Cn["width-010"](r),d=null!==(t="function"==typeof a?a(r):a+"px")&&void 0!==t?t:0,c=null!==(i="function"==typeof s?s(r):s)&&void 0!==i?i:et.border(r),u=Cn.solid;return x`
            border: ${l} ${u} ${c};
            border-radius: ${d};
        `},"dashed-default":e=>r=>{var n,t,i;const{thickness:o,radius:a,colour:s}=e||{},l=null!==(n="function"==typeof o?o(r):o)&&void 0!==n?n:Cn["width-010"](r),d=null!==(t="function"==typeof a?a(r):a)&&void 0!==t?t:0,c=null!==(i="function"==typeof s?s(r):s)&&void 0!==i?i:et.border(r),u=encodeURIComponent(`<svg width='100%' height='100%' xmlns='http://www.w3.org/2000/svg'><rect width='100%' height='100%' fill='none' rx='${d}' ry='${d}' stroke='${c}' stroke-width='${l}' stroke-dasharray='4, 8' stroke-dashoffset='0' stroke-linecap='square'/></svg>`);return x`
            background-image: url("data:image/svg+xml,${u}");
            border-radius: ${d};
        `}}},defaultValue:"default"},nt=e=>1===e.length&&"theme"in e[0],tt=e=>(...r)=>n=>{const t=nt(r)?[]:r,i=nt(r)?r[0]:n,o=i.theme;return(0,$n(rt,null==o?void 0:o.borderScheme)[e])(...t)(i)},it={solid:tt("solid"),"dashed-default":tt("dashed-default")},ot={collections:{default:{"xxs-min":0,"xxs-max":320,"xs-min":321,"xs-max":375,"sm-min":376,"sm-max":480,"md-min":481,"md-max":768,"lg-min":769,"lg-max":1200,"xl-min":1201,"xl-max":1440,"xxl-min":1441,"xxs-column":8,"xs-column":8,"sm-column":8,"md-column":8,"lg-column":12,"xl-column":12,"xxl-column":12,"xxs-gutter":16,"xs-gutter":16,"sm-gutter":16,"md-gutter":16,"lg-gutter":32,"xl-gutter":32,"xxl-gutter":32,"xxs-margin":24,"xs-margin":24,"sm-margin":24,"md-margin":24,"lg-margin":48,"xl-margin":48,"xxl-margin":48}},defaultValue:"default"},at=e=>r=>{var n;const t=r.theme,i=$n(ot,null==t?void 0:t.breakpointScheme);let o;return o=(null===(n=null==t?void 0:t.overrides)||void 0===n?void 0:n.breakpoint)?wn(i,e,t.overrides.breakpoint):i[e],o},st={"xxs-min":at("xxs-min"),"xxs-max":at("xxs-max"),"xs-min":at("xs-min"),"xs-max":at("xs-max"),"sm-min":at("sm-min"),"sm-max":at("sm-max"),"md-min":at("md-min"),"md-max":at("md-max"),"lg-min":at("lg-min"),"lg-max":at("lg-max"),"xl-min":at("xl-min"),"xl-max":at("xl-max"),"xxl-min":at("xxl-min"),"xxs-column":at("xxs-column"),"xs-column":at("xs-column"),"sm-column":at("sm-column"),"md-column":at("md-column"),"lg-column":at("lg-column"),"xl-column":at("xl-column"),"xxl-column":at("xxl-column"),"xxs-gutter":at("xxs-gutter"),"xs-gutter":at("xs-gutter"),"sm-gutter":at("sm-gutter"),"md-gutter":at("md-gutter"),"lg-gutter":at("lg-gutter"),"xl-gutter":at("xl-gutter"),"xxl-gutter":at("xxl-gutter"),"xxs-margin":at("xxs-margin"),"xs-margin":at("xs-margin"),"sm-margin":at("sm-margin"),"md-margin":at("md-margin"),"lg-margin":at("lg-margin"),"xl-margin":at("xl-margin"),"xxl-margin":at("xxl-margin")},lt=e=>("max-width"===e?["xxs","xs","sm","md","lg","xl"]:["xxs","xs","sm","md","lg","xl","xxl"]).reduce(((r,n)=>(r[n]=((e,r)=>{const n=st["max-width"===e?`${r}-max`:`${r}-min`];return r=>{const t=n(r);return`@media screen and (${e}: ${t}px)`}})(e,n),r)),{}),dt={MaxWidth:lt("max-width"),MinWidth:lt("min-width")},ct={collections:{default:{none:0,xs:2,sm:4,md:8,lg:12,full:9999},spf:{none:0,xs:2,sm:8,md:8,lg:12,full:9999}},defaultValue:"default"},ut=e=>r=>{var n;const t=r.theme,i=$n(ct,null==t?void 0:t.radiusScheme);return(null===(n=null==t?void 0:t.overrides)||void 0===n?void 0:n.radius)?`${wn(i,e,t.overrides.radius)}px`:`${i[e]}px`},gt={none:ut("none"),xs:ut("xs"),sm:ut("sm"),md:ut("md"),lg:ut("lg"),full:ut("full")},bt={Button:{"button-radius":gt.md,"button-default-colour-bg":et["bg-primary"],"button-default-colour-bg-hover":et["bg-primary-hover"],"button-default-colour-text":et["text-inverse"],"button-secondary-colour-border":et["border-primary"],"button-secondary-colour-text":et["text-primary"],"button-light-colour-text":et["text-primary"],"button-link-colour-text":et["text-primary"]},Animation:{"loading-dots-spinner-colour":et["icon-primary"]},Navbar:{"navbar-full-height":"6rem","navbar-full-logo-height":"2rem","navbar-compressed-height":"4rem","navbar-compressed-logo-height":"1.5rem","navbar-mobile-height":"3.5rem","navbar-mobile-logo-height":"1.5rem","navbar-colour-bg":et.bg,"navbar-colour-icon":et.icon,"navbar-link-colour-text":et.text,"navbar-link-colour-text-hover":et["text-hover"],"navbar-link-colour-text-selected-hover":et["text-selected-hover"]},Footer:{"footer-colour-bg":et["bg-strong"],"footer-colour-text":et.text,"footer-link-colour-text":et.text,"footer-link-colour-text-hover":et["text-hover"],"footer-disclaimer-link-colour-text":et.text,"footer-disclaimer-link-colour-text-hover":et["text-subtler"]}},mt={Button:{"button-radius":gt.sm,"button-default-colour-bg":et["bg-primary"],"button-default-colour-bg-hover":et["bg-primary-hover"],"button-default-colour-text":et["text-inverse"],"button-secondary-colour-border":et["border-primary"],"button-secondary-colour-text":et["text-primary"],"button-light-colour-text":et["text-primary"],"button-link-colour-text":et["text-primary"]},Animation:{"loading-dots-spinner-colour":et["icon-primary"]},Navbar:{"navbar-full-height":"6rem","navbar-full-logo-height":"2rem","navbar-compressed-height":"4rem","navbar-compressed-logo-height":"1.5rem","navbar-mobile-height":"3.5rem","navbar-mobile-logo-height":"1.5rem","navbar-colour-bg":et.bg,"navbar-colour-icon":et.icon,"navbar-link-colour-text":et.text,"navbar-link-colour-text-hover":et["text-hover"],"navbar-link-colour-text-selected-hover":et["text-selected-hover"]},Footer:{"footer-colour-bg":et["bg-strong"],"footer-colour-text":et.text,"footer-link-colour-text":et.text,"footer-link-colour-text-hover":et["text-hover"],"footer-disclaimer-link-colour-text":et.text,"footer-disclaimer-link-colour-text-hover":et["text-subtler"]}},ht={Button:{"button-radius":gt.sm,"button-default-colour-bg":et["bg-primary"],"button-default-colour-bg-hover":et["bg-primary-hover"],"button-default-colour-text":et["text-inverse"],"button-secondary-colour-border":et["border-primary"],"button-secondary-colour-text":et["text-primary"],"button-light-colour-text":et["text-primary"],"button-link-colour-text":et["text-primary"]},Animation:{"loading-dots-spinner-colour":Wn["brand-50"]},Navbar:{"navbar-full-height":"6rem","navbar-full-logo-height":"2rem","navbar-compressed-height":"4rem","navbar-compressed-logo-height":"1.5rem","navbar-mobile-height":"3.5rem","navbar-mobile-logo-height":"1.5rem","navbar-colour-bg":et.bg,"navbar-colour-icon":et.icon,"navbar-link-colour-text":et.text,"navbar-link-colour-text-hover":et["text-hover"],"navbar-link-colour-text-selected-hover":et["text-selected-hover"]},Footer:{"footer-colour-bg":et["bg-strong"],"footer-colour-text":et.text,"footer-link-colour-text":et.text,"footer-link-colour-text-hover":et["text-hover"],"footer-disclaimer-link-colour-text":et.text,"footer-disclaimer-link-colour-text-hover":et["text-subtler"]}},yt={collections:{default:mt,pa:{Button:{"button-radius":gt.full,"button-default-colour-bg":et["bg-primary"],"button-default-colour-bg-hover":et["bg-primary-hover"],"button-default-colour-text":et["text-inverse"],"button-secondary-colour-border":et["border-primary"],"button-secondary-colour-text":et["text-primary"],"button-light-colour-text":et["text-primary"],"button-link-colour-text":et["text-primary"]},Animation:{"loading-dots-spinner-colour":et["icon-primary"]},Navbar:{"navbar-full-height":"6rem","navbar-full-logo-height":"2rem","navbar-compressed-height":"4rem","navbar-compressed-logo-height":"1.5rem","navbar-mobile-height":"3.5rem","navbar-mobile-logo-height":"1.5rem","navbar-colour-bg":et.bg,"navbar-colour-icon":et.icon,"navbar-link-colour-text":et.text,"navbar-link-colour-text-hover":et["text-hover"],"navbar-link-colour-text-selected-hover":et["text-selected-hover"]},Footer:{"footer-colour-bg":et["bg-strong"],"footer-colour-text":et.text,"footer-link-colour-text":et.text,"footer-link-colour-text-hover":et["text-hover"],"footer-disclaimer-link-colour-text":et.text,"footer-disclaimer-link-colour-text-hover":et["text-subtler"]}},a11yplayground:bt,lifesg:ht,spf:{Button:{"button-radius":gt.md,"button-default-colour-bg":et["bg-primary"],"button-default-colour-bg-hover":et["bg-primary-hover"],"button-default-colour-text":et["text-inverse"],"button-secondary-colour-border":et["border-primary"],"button-secondary-colour-text":et["text-primary"],"button-light-colour-text":et["text-primary"],"button-link-colour-text":et["text-primary"]},Animation:{"loading-dots-spinner-colour":et["icon-primary"]},Navbar:{"navbar-full-height":"6rem","navbar-full-logo-height":"3rem","navbar-compressed-height":"5rem","navbar-compressed-logo-height":"2rem","navbar-mobile-height":"4rem","navbar-mobile-logo-height":"2rem","navbar-colour-bg":et.bg,"navbar-colour-icon":et.icon,"navbar-link-colour-text":et["text-primary-strongest"],"navbar-link-colour-text-hover":et["text-subtler"],"navbar-link-colour-text-selected-hover":et["text-subtler"]},Footer:{"footer-colour-bg":et["bg-inverse"],"footer-colour-text":et["text-inverse"],"footer-link-colour-text":et["text-inverse"],"footer-link-colour-text-hover":et["text-inverse"],"footer-disclaimer-link-colour-text":et["text-inverse"],"footer-disclaimer-link-colour-text-hover":et["text-inverse"]}},smgs:{Button:{"button-radius":gt.md,"button-default-colour-bg":et["bg-primary"],"button-default-colour-bg-hover":et["bg-primary-hover"],"button-default-colour-text":et["text-inverse"],"button-secondary-colour-border":et["border-primary"],"button-secondary-colour-text":et["text-primary"],"button-light-colour-text":et["text-primary"],"button-link-colour-text":et["text-primary"]},Animation:{"loading-dots-spinner-colour":et["icon-primary"]},Navbar:{"navbar-full-height":"6rem","navbar-full-logo-height":"2rem","navbar-compressed-height":"4rem","navbar-compressed-logo-height":"1.5rem","navbar-mobile-height":"3.5rem","navbar-mobile-logo-height":"1.5rem","navbar-colour-bg":et.bg,"navbar-colour-icon":et.icon,"navbar-link-colour-text":et.text,"navbar-link-colour-text-hover":et["text-hover"],"navbar-link-colour-text-selected-hover":et["text-selected-hover"]},Footer:{"footer-colour-bg":et["bg-strong"],"footer-colour-text":et.text,"footer-link-colour-text":et.text,"footer-link-colour-text-hover":et["text-hover"],"footer-disclaimer-link-colour-text":et.text,"footer-disclaimer-link-colour-text-hover":et["text-subtler"]}}},defaultValue:"default"},ft=(e,r)=>n=>{var t,i;const o=n.theme,a=$n(yt,null==o?void 0:o.componentScheme);return pt((null===(i=null===(t=null==o?void 0:o.componentOverrides)||void 0===t?void 0:t[e])||void 0===i?void 0:i[r])||a[e][r],n)},pt=(e,r)=>{switch(typeof e){case"function":return e(r);case"number":return e+"px";case"string":return e}},vt=ft("Button","button-radius"),xt=ft("Button","button-default-colour-bg"),Ft=ft("Button","button-default-colour-bg-hover"),wt=ft("Button","button-default-colour-text"),$t=ft("Button","button-secondary-colour-border"),Et=ft("Button","button-secondary-colour-text"),Dt=ft("Button","button-light-colour-text"),Ct=ft("Button","button-link-colour-text"),kt={collections:{default:{"heading-size-xxl":"3rem","heading-size-xl":"2.5rem","heading-size-lg":"2rem","heading-size-md":"1.625rem","heading-size-sm":"1.375rem","heading-size-xs":"1.125rem","heading-lh-xxl":"3.5rem","heading-lh-xl":"3rem","heading-lh-lg":"2.5rem","heading-lh-md":"2.25rem","heading-lh-sm":"1.75rem","heading-lh-xs":"1.625rem","heading-ls-xxl":"-0.035rem","heading-ls-xl":"-0.02rem","heading-ls-lg":"-0.02rem","heading-ls-md":"0rem","heading-ls-sm":"0rem","heading-ls-xs":"0rem","weight-light":"300","weight-regular":"400","weight-semibold":"600","weight-bold":"700","font-family":"Open Sans","heading-font-family":"Open Sans","body-font-family":"Open Sans","body-size-baseline":"1.125rem","body-size-md":"1rem","body-size-sm":"0.875rem","body-size-xs":"0.75rem","body-lh-baseline":"1.625rem","body-lh-md":"1.5rem","body-lh-sm":"1.625rem","body-lh-xs":"1.25rem","body-ls-baseline":"0rem","body-ls-md":"0.009rem","body-ls-sm":"0.008rem","body-ls-xs":"0.008rem","form-label-size":"1rem","form-description-size":"0.875rem","form-label-lh":"1.5rem","form-description-lh":"1.625rem","form-label-ls":"0.009rem","form-description-ls":"0.008rem"},bookingsg:{"heading-size-xxl":"3rem","heading-size-xl":"2.5rem","heading-size-lg":"2rem","heading-size-md":"1.625rem","heading-size-sm":"1.375rem","heading-size-xs":"1.125rem","heading-lh-xxl":"3.5rem","heading-lh-xl":"3rem","heading-lh-lg":"2.5rem","heading-lh-md":"2.25rem","heading-lh-sm":"1.75rem","heading-lh-xs":"1.75rem","heading-ls-xxl":"-0.035rem","heading-ls-xl":"-0.02rem","heading-ls-lg":"-0.02rem","heading-ls-md":"0rem","heading-ls-sm":"0rem","heading-ls-xs":"0rem","weight-light":"300","weight-regular":"400","weight-semibold":"600","weight-bold":"700","font-family":"Plus Jakarta Sans","heading-font-family":"Plus Jakarta Sans","body-font-family":"Plus Jakarta Sans","body-size-baseline":"1.125rem","body-size-md":"1rem","body-size-sm":"0.875rem","body-size-xs":"0.75rem","body-lh-baseline":"1.75rem","body-lh-md":"1.5rem","body-lh-sm":"1.6rem","body-lh-xs":"1.2rem","body-ls-baseline":"0rem","body-ls-md":"0.009rem","body-ls-sm":"0.008rem","body-ls-xs":"0.008rem","form-label-size":"1rem","form-description-size":"0.875rem","form-label-lh":"1.5rem","form-description-lh":"1.625rem","form-label-ls":"0.009rem","form-description-ls":"0.008rem"},mylegacy:{"heading-size-xxl":"3rem","heading-size-xl":"2.5rem","heading-size-lg":"2rem","heading-size-md":"1.625rem","heading-size-sm":"1.375rem","heading-size-xs":"1.125rem","heading-lh-xxl":"3.5rem","heading-lh-xl":"3rem","heading-lh-lg":"2.5rem","heading-lh-md":"2.25rem","heading-lh-sm":"1.75rem","heading-lh-xs":"1.625rem","heading-ls-xxl":"-0.035rem","heading-ls-xl":"-0.02rem","heading-ls-lg":"-0.02rem","heading-ls-md":"0rem","heading-ls-sm":"0rem","heading-ls-xs":"0rem","weight-light":"300","weight-regular":"400","weight-semibold":"600","weight-bold":"700","font-family":"Open Sans","heading-font-family":"Open Sans","body-font-family":"Open Sans","body-size-baseline":"1.125rem","body-size-md":"1rem","body-size-sm":"0.875rem","body-size-xs":"0.75rem","body-lh-baseline":"1.625rem","body-lh-md":"1.5rem","body-lh-sm":"1.625rem","body-lh-xs":"1.25rem","body-ls-baseline":"0rem","body-ls-md":"0.009rem","body-ls-sm":"0.008rem","body-ls-xs":"0.008rem","form-label-size":"1.125rem","form-description-size":"1rem","form-label-lh":"1.5rem","form-description-lh":"1.625rem","form-label-ls":"0rem","form-description-ls":"0.009rem"},pa:{"heading-size-xxl":"2.5rem","heading-size-xl":"2rem","heading-size-lg":"1.75rem","heading-size-md":"1.5rem","heading-size-sm":"1.25rem","heading-size-xs":"1rem","heading-lh-xxl":"3rem","heading-lh-xl":"2.5rem","heading-lh-lg":"2.25rem","heading-lh-md":"2rem","heading-lh-sm":"2rem","heading-lh-xs":"1.75rem","heading-ls-xxl":"-0.032rem","heading-ls-xl":"-0.032rem","heading-ls-lg":"0rem","heading-ls-md":"0rem","heading-ls-sm":"0rem","heading-ls-xs":"0rem","weight-light":"300","weight-regular":"400","weight-semibold":"600","weight-bold":"700","font-family":"Lato","heading-font-family":"Lato","body-font-family":"Lato","body-size-baseline":"1rem","body-size-md":"0.875rem","body-size-sm":"0.75rem","body-size-xs":"0.625rem","body-lh-baseline":"1.75rem","body-lh-md":"1.5rem","body-lh-sm":"1.25rem","body-lh-xs":"1.25rem","body-ls-baseline":"0rem","body-ls-md":"0.014rem","body-ls-sm":"0.012rem","body-ls-xs":"0.012rem","form-label-size":"1rem","form-description-size":"0.875rem","form-label-lh":"1.5rem","form-description-lh":"1.6rem","form-label-ls":"0.014rem","form-description-ls":"0.012rem"},a11yplayground:{"heading-size-xxl":"3rem","heading-size-xl":"2.5rem","heading-size-lg":"2rem","heading-size-md":"1.625rem","heading-size-sm":"1.375rem","heading-size-xs":"1.125rem","heading-lh-xxl":"3.5rem","heading-lh-xl":"3rem","heading-lh-lg":"2.5rem","heading-lh-md":"2.25rem","heading-lh-sm":"1.75rem","heading-lh-xs":"1.625rem","heading-ls-xxl":"-0.035rem","heading-ls-xl":"-0.02rem","heading-ls-lg":"-0.02rem","heading-ls-md":"0rem","heading-ls-sm":"0rem","heading-ls-xs":"0rem","weight-light":"300","weight-regular":"400","weight-semibold":"600","weight-bold":"700","font-family":"Atkinson Hyperlegible Next","heading-font-family":"Atkinson Hyperlegible Next","body-font-family":"Atkinson Hyperlegible Next","body-size-baseline":"1.125rem","body-size-md":"1rem","body-size-sm":"0.875rem","body-size-xs":"0.75rem","body-lh-baseline":"1.625rem","body-lh-md":"1.5rem","body-lh-sm":"1.625rem","body-lh-xs":"1.25rem","body-ls-baseline":"0rem","body-ls-md":"0.009rem","body-ls-sm":"0.008rem","body-ls-xs":"0.008rem","form-label-size":"1.125rem","form-description-size":"1rem","form-label-lh":"1.5rem","form-description-lh":"1.625rem","form-label-ls":"0rem","form-description-ls":"0.009rem"},supportgowhere:{"heading-size-xxl":"3rem","heading-size-xl":"2.5rem","heading-size-lg":"2rem","heading-size-md":"1.625rem","heading-size-sm":"1.375rem","heading-size-xs":"1.125rem","heading-lh-xxl":"3.5rem","heading-lh-xl":"3rem","heading-lh-lg":"2.5rem","heading-lh-md":"2.25rem","heading-lh-sm":"1.75rem","heading-lh-xs":"1.625rem","heading-ls-xxl":"-0.035rem","heading-ls-xl":"-0.02rem","heading-ls-lg":"-0.02rem","heading-ls-md":"0rem","heading-ls-sm":"0rem","heading-ls-xs":"0rem","weight-light":"300","weight-regular":"400","weight-semibold":"600","weight-bold":"700","font-family":"Libre Franklin","heading-font-family":"Libre Franklin","body-font-family":"Libre Franklin","body-size-baseline":"1.125rem","body-size-md":"1rem","body-size-sm":"0.875rem","body-size-xs":"0.75rem","body-lh-baseline":"1.625rem","body-lh-md":"1.5rem","body-lh-sm":"1.625rem","body-lh-xs":"1.25rem","body-ls-baseline":"0rem","body-ls-md":"0.009rem","body-ls-sm":"0.008rem","body-ls-xs":"0.008rem","form-label-size":"1rem","form-description-size":"0.875rem","form-label-lh":"1.5rem","form-description-lh":"1.625rem","form-label-ls":"0.009rem","form-description-ls":"0.008rem"},sgwdigitallobby:{"heading-size-xxl":"3.75rem","heading-size-xl":"3rem","heading-size-lg":"2.5rem","heading-size-md":"2rem","heading-size-sm":"1.625rem","heading-size-xs":"1.375rem","heading-lh-xxl":"4.5rem","heading-lh-xl":"3.5rem","heading-lh-lg":"3rem","heading-lh-md":"2.5rem","heading-lh-sm":"2.25rem","heading-lh-xs":"1.75rem","heading-ls-xxl":"-0.035rem","heading-ls-xl":"-0.035em","heading-ls-lg":"-0.02rem","heading-ls-md":"-0.02rem","heading-ls-sm":"0rem","heading-ls-xs":"0rem","weight-light":"300","weight-regular":"400","weight-semibold":"600","weight-bold":"700","font-family":"Libre Franklin","heading-font-family":"Libre Franklin","body-font-family":"Libre Franklin","body-size-baseline":"1.375rem","body-size-md":"1.2rem","body-size-sm":"1.125rem","body-size-xs":"1rem","body-lh-baseline":"1.75rem","body-lh-md":"1.625rem","body-lh-sm":"1.625rem","body-lh-xs":"1.5rem","body-ls-baseline":"0rem","body-ls-md":"0rem","body-ls-sm":"0rem","body-ls-xs":"0.009rem","form-label-size":"1.25rem","form-description-size":"1.125rem","form-label-lh":"1.625rem","form-description-lh":"1.625rem","form-label-ls":"0rem","form-description-ls":"0rem"},imda:{"heading-size-xxl":"3rem","heading-size-xl":"2.5rem","heading-size-lg":"2rem","heading-size-md":"1.625rem","heading-size-sm":"1.375rem","heading-size-xs":"1.125rem","heading-lh-xxl":"3.5rem","heading-lh-xl":"3rem","heading-lh-lg":"2.5rem","heading-lh-md":"2.25rem","heading-lh-sm":"1.75rem","heading-lh-xs":"1.625rem","heading-ls-xxl":"-0.035rem","heading-ls-xl":"-0.02rem","heading-ls-lg":"-0.02rem","heading-ls-md":"0rem","heading-ls-sm":"0rem","heading-ls-xs":"0rem","weight-light":"300","weight-regular":"400","weight-semibold":"600","weight-bold":"700","font-family":"Montserrat","heading-font-family":"Montserrat","body-font-family":"Montserrat","body-size-baseline":"1.125rem","body-size-md":"1rem","body-size-sm":"0.875rem","body-size-xs":"0.75rem","body-lh-baseline":"1.625rem","body-lh-md":"1.5rem","body-lh-sm":"1.625rem","body-lh-xs":"1.25rem","body-ls-baseline":"0rem","body-ls-md":"0.009rem","body-ls-sm":"0.008rem","body-ls-xs":"0.008rem","form-label-size":"1rem","form-description-size":"0.875rem","form-label-lh":"1.5rem","form-description-lh":"1.625rem","form-label-ls":"0.009rem","form-description-ls":"0.008rem"},spf:{"heading-size-xxl":"3.75rem","heading-size-xl":"3rem","heading-size-lg":"2.5rem","heading-size-md":"2rem","heading-size-sm":"1.75rem","heading-size-xs":"1.5rem","heading-lh-xxl":"4.5rem","heading-lh-xl":"3.5rem","heading-lh-lg":"3rem","heading-lh-md":"2.25rem","heading-lh-sm":"2rem","heading-lh-xs":"1.75rem","heading-ls-xxl":"-0.035rem","heading-ls-xl":"-0.02rem","heading-ls-lg":"-0.02rem","heading-ls-md":"0rem","heading-ls-sm":"0rem","heading-ls-xs":"0rem","weight-light":"300","weight-regular":"400","weight-semibold":"600","weight-bold":"700","font-family":"Public Sans","heading-font-family":"Public Sans","body-font-family":"Public Sans","body-size-baseline":"1.2rem","body-size-md":"1.125rem","body-size-sm":"1rem","body-size-xs":"0.875rem","body-lh-baseline":"1.5rem","body-lh-md":"1.5rem","body-lh-sm":"1.5rem","body-lh-xs":"1.125rem","body-ls-baseline":"0rem","body-ls-md":"0.009rem","body-ls-sm":"0.008rem","body-ls-xs":"0.008rem","form-label-size":"1.125rem","form-description-size":"1rem","form-label-lh":"1.5rem","form-description-lh":"1.625rem","form-label-ls":"0.009rem","form-description-ls":"0.008rem"},oneservice:{"heading-size-xxl":"2.5rem","heading-size-xl":"2rem","heading-size-lg":"1.75rem","heading-size-md":"1.375rem","heading-size-sm":"1.125rem","heading-size-xs":"1rem","heading-lh-xxl":"3.5rem","heading-lh-xl":"3rem","heading-lh-lg":"2.625rem","heading-lh-md":"2rem","heading-lh-sm":"1.625rem","heading-lh-xs":"1.5rem","heading-ls-xxl":"0rem","heading-ls-xl":"0rem","heading-ls-lg":"0rem","heading-ls-md":"0rem","heading-ls-sm":"0rem","heading-ls-xs":"0rem","weight-light":"300","weight-regular":"400","weight-semibold":"600","weight-bold":"700","font-family":"Open Sans","heading-font-family":"Open Sans","body-font-family":"Open Sans","body-size-baseline":"1rem","body-size-md":"0.875rem","body-size-sm":"0.75rem","body-size-xs":"0.75rem","body-lh-baseline":"1.5rem","body-lh-md":"1.313rem","body-lh-sm":"1.125rem","body-lh-xs":"1.125rem","body-ls-baseline":"0rem","body-ls-md":"0rem","body-ls-sm":"0rem","body-ls-xs":"0rem","form-label-size":"0.875rem","form-description-size":"0.875rem","form-label-lh":"1.313rem","form-description-lh":"1.313rem","form-label-ls":"0rem","form-description-ls":"0rem"},smgs:{"heading-size-xxl":"3rem","heading-size-xl":"2.5rem","heading-size-lg":"2rem","heading-size-md":"1.625rem","heading-size-sm":"1.375rem","heading-size-xs":"1.125rem","heading-lh-xxl":"3.5rem","heading-lh-xl":"3rem","heading-lh-lg":"2.5rem","heading-lh-md":"2.25rem","heading-lh-sm":"1.75rem","heading-lh-xs":"1.625rem","heading-ls-xxl":"-0.035rem","heading-ls-xl":"-0.02rem","heading-ls-lg":"-0.02rem","heading-ls-md":"0rem","heading-ls-sm":"0rem","heading-ls-xs":"0rem","weight-light":"300","weight-regular":"400","weight-semibold":"600","weight-bold":"700","font-family":"Poppins, Inter","heading-font-family":"Poppins","body-font-family":"Inter","body-size-baseline":"1.125rem","body-size-md":"1rem","body-size-sm":"0.875rem","body-size-xs":"0.75rem","body-lh-baseline":"1.625rem","body-lh-md":"1.5rem","body-lh-sm":"1.625rem","body-lh-xs":"1.25rem","body-ls-baseline":"0rem","body-ls-md":"0.009rem","body-ls-sm":"0.008rem","body-ls-xs":"0.008rem","form-label-size":"1rem","form-description-size":"0.875rem","form-label-lh":"1.5rem","form-description-lh":"1.625rem","form-label-ls":"0rem","form-description-ls":"0.009rem"}},defaultValue:"default"},Bt=e=>r=>{var n;const t=r.theme,i=$n(kt,null==t?void 0:t.fontScheme);return(null===(n=null==t?void 0:t.overrides)||void 0===n?void 0:n.fontSpec)?wn(i,e,t.overrides.fontSpec):i[e]},St={"heading-size-xxl":Bt("heading-size-xxl"),"heading-size-xl":Bt("heading-size-xl"),"heading-size-lg":Bt("heading-size-lg"),"heading-size-md":Bt("heading-size-md"),"heading-size-sm":Bt("heading-size-sm"),"heading-size-xs":Bt("heading-size-xs"),"heading-lh-xxl":Bt("heading-lh-xxl"),"heading-lh-xl":Bt("heading-lh-xl"),"heading-lh-lg":Bt("heading-lh-lg"),"heading-lh-md":Bt("heading-lh-md"),"heading-lh-sm":Bt("heading-lh-sm"),"heading-lh-xs":Bt("heading-lh-xs"),"heading-ls-xxl":Bt("heading-ls-xxl"),"heading-ls-xl":Bt("heading-ls-xl"),"heading-ls-lg":Bt("heading-ls-lg"),"heading-ls-md":Bt("heading-ls-md"),"heading-ls-sm":Bt("heading-ls-sm"),"heading-ls-xs":Bt("heading-ls-xs"),"weight-light":Bt("weight-light"),"weight-regular":Bt("weight-regular"),"weight-semibold":Bt("weight-semibold"),"weight-bold":Bt("weight-bold"),"font-family":Bt("font-family"),"heading-font-family":Bt("heading-font-family"),"body-font-family":Bt("body-font-family"),"body-size-baseline":Bt("body-size-baseline"),"body-size-md":Bt("body-size-md"),"body-size-sm":Bt("body-size-sm"),"body-size-xs":Bt("body-size-xs"),"body-lh-baseline":Bt("body-lh-baseline"),"body-lh-md":Bt("body-lh-md"),"body-lh-sm":Bt("body-lh-sm"),"body-lh-xs":Bt("body-lh-xs"),"body-ls-baseline":Bt("body-ls-baseline"),"body-ls-md":Bt("body-ls-md"),"body-ls-sm":Bt("body-ls-sm"),"body-ls-xs":Bt("body-ls-xs"),"form-label-size":Bt("form-label-size"),"form-description-size":Bt("form-description-size"),"form-label-lh":Bt("form-label-lh"),"form-description-lh":Bt("form-description-lh"),"form-label-ls":Bt("form-label-ls"),"form-description-ls":Bt("form-description-ls")},At=(e,r,n,t,i,o)=>{const{disableLigatures:a}=o||{};return x`
        font-family: ${Bt(e)};
        font-size: ${Bt(r)};
        font-weight: ${Bt(n)};
        line-height: ${Bt(t)};
        letter-spacing: ${Bt(i)};

        font-variant: ${a?"no-common-ligatures":"normal"};
    `},zt=(e={})=>({"heading-xxl-light":At("heading-font-family","heading-size-xxl","weight-light","heading-lh-xxl","heading-ls-xxl",e),"heading-xxl-regular":At("heading-font-family","heading-size-xxl","weight-regular","heading-lh-xxl","heading-ls-xxl",e),"heading-xxl-semibold":At("heading-font-family","heading-size-xxl","weight-semibold","heading-lh-xxl","heading-ls-xxl",e),"heading-xxl-bold":At("heading-font-family","heading-size-xxl","weight-bold","heading-lh-xxl","heading-ls-xxl",e),"heading-xl-light":At("heading-font-family","heading-size-xl","weight-light","heading-lh-xl","heading-ls-xl",e),"heading-xl-regular":At("heading-font-family","heading-size-xl","weight-regular","heading-lh-xl","heading-ls-xl",e),"heading-xl-semibold":At("heading-font-family","heading-size-xl","weight-semibold","heading-lh-xl","heading-ls-xl",e),"heading-xl-bold":At("heading-font-family","heading-size-xl","weight-bold","heading-lh-xl","heading-ls-xl",e),"heading-lg-light":At("heading-font-family","heading-size-lg","weight-light","heading-lh-lg","heading-ls-lg",e),"heading-lg-regular":At("heading-font-family","heading-size-lg","weight-regular","heading-lh-lg","heading-ls-lg",e),"heading-lg-semibold":At("heading-font-family","heading-size-lg","weight-semibold","heading-lh-lg","heading-ls-lg",e),"heading-lg-bold":At("heading-font-family","heading-size-lg","weight-bold","heading-lh-lg","heading-ls-lg",e),"heading-md-light":At("heading-font-family","heading-size-md","weight-light","heading-lh-md","heading-ls-md",e),"heading-md-regular":At("heading-font-family","heading-size-md","weight-regular","heading-lh-md","heading-ls-md",e),"heading-md-semibold":At("heading-font-family","heading-size-md","weight-semibold","heading-lh-md","heading-ls-md",e),"heading-md-bold":At("heading-font-family","heading-size-md","weight-bold","heading-lh-md","heading-ls-md",e),"heading-sm-light":At("heading-font-family","heading-size-sm","weight-light","heading-lh-sm","heading-ls-sm",e),"heading-sm-regular":At("heading-font-family","heading-size-sm","weight-regular","heading-lh-sm","heading-ls-sm",e),"heading-sm-semibold":At("heading-font-family","heading-size-sm","weight-semibold","heading-lh-sm","heading-ls-sm",e),"heading-sm-bold":At("heading-font-family","heading-size-sm","weight-bold","heading-lh-sm","heading-ls-sm",e),"heading-xs-light":At("heading-font-family","heading-size-xs","weight-light","heading-lh-xs","heading-ls-xs",e),"heading-xs-regular":At("heading-font-family","heading-size-xs","weight-regular","heading-lh-xs","heading-ls-xs",e),"heading-xs-semibold":At("heading-font-family","heading-size-xs","weight-semibold","heading-lh-xs","heading-ls-xs",e),"heading-xs-bold":At("heading-font-family","heading-size-xs","weight-bold","heading-lh-xs","heading-ls-xs",e),"body-baseline-light":At("body-font-family","body-size-baseline","weight-light","body-lh-baseline","body-ls-baseline",e),"body-baseline-regular":At("body-font-family","body-size-baseline","weight-regular","body-lh-baseline","body-ls-baseline",e),"body-baseline-semibold":At("body-font-family","body-size-baseline","weight-semibold","body-lh-baseline","body-ls-baseline",e),"body-baseline-bold":At("body-font-family","body-size-baseline","weight-bold","body-lh-baseline","body-ls-baseline",e),"body-md-light":At("body-font-family","body-size-md","weight-light","body-lh-md","body-ls-md",e),"body-md-regular":At("body-font-family","body-size-md","weight-regular","body-lh-md","body-ls-md",e),"body-md-semibold":At("body-font-family","body-size-md","weight-semibold","body-lh-md","body-ls-md",e),"body-md-bold":At("body-font-family","body-size-md","weight-bold","body-lh-md","body-ls-md",e),"body-sm-light":At("body-font-family","body-size-sm","weight-light","body-lh-sm","body-ls-sm",e),"body-sm-regular":At("body-font-family","body-size-sm","weight-regular","body-lh-sm","body-ls-sm",e),"body-sm-semibold":At("body-font-family","body-size-sm","weight-semibold","body-lh-sm","body-ls-sm",e),"body-sm-bold":At("body-font-family","body-size-sm","weight-bold","body-lh-sm","body-ls-sm",e),"body-xs-light":At("body-font-family","body-size-xs","weight-light","body-lh-xs","body-ls-xs",e),"body-xs-regular":At("body-font-family","body-size-xs","weight-regular","body-lh-xs","body-ls-xs",e),"body-xs-semibold":At("body-font-family","body-size-xs","weight-semibold","body-lh-xs","body-ls-xs",e),"body-xs-bold":At("body-font-family","body-size-xs","weight-bold","body-lh-xs","body-ls-xs",e),"form-label":At("body-font-family","form-label-size","weight-semibold","form-label-lh","form-label-ls",e),"form-description":At("body-font-family","form-description-size","weight-regular","form-description-lh","form-description-ls",e)}),Mt=zt({disableLigatures:!0}),Ot=zt(),Tt=zt({disableLigatures:!0}),jt=zt({disableLigatures:!0}),_t=zt({disableLigatures:!0}),Lt={collections:{default:Ot,bookingsg:Mt,mylegacy:Ot,pa:Tt,a11yplayground:jt,supportgowhere:_t,sgwdigitallobby:_t,imda:zt({disableLigatures:!0}),spf:zt({disableLigatures:!0}),oneservice:zt(),smgs:zt({disableLigatures:!0})},defaultValue:"default"},Ht=e=>r=>{var n;const t=r.theme,i=$n(Lt,null==t?void 0:t.fontScheme),o=(null===(n=null==t?void 0:t.overrides)||void 0===n?void 0:n.font)?wn(i,e,t.overrides.font):i[e];return"function"==typeof o?o(r):o},It={"heading-xxl-light":Ht("heading-xxl-light"),"heading-xxl-regular":Ht("heading-xxl-regular"),"heading-xxl-semibold":Ht("heading-xxl-semibold"),"heading-xxl-bold":Ht("heading-xxl-bold"),"heading-xl-light":Ht("heading-xl-light"),"heading-xl-regular":Ht("heading-xl-regular"),"heading-xl-semibold":Ht("heading-xl-semibold"),"heading-xl-bold":Ht("heading-xl-bold"),"heading-lg-light":Ht("heading-lg-light"),"heading-lg-regular":Ht("heading-lg-regular"),"heading-lg-semibold":Ht("heading-lg-semibold"),"heading-lg-bold":Ht("heading-lg-bold"),"heading-md-light":Ht("heading-md-light"),"heading-md-regular":Ht("heading-md-regular"),"heading-md-semibold":Ht("heading-md-semibold"),"heading-md-bold":Ht("heading-md-bold"),"heading-sm-light":Ht("heading-sm-light"),"heading-sm-regular":Ht("heading-sm-regular"),"heading-sm-semibold":Ht("heading-sm-semibold"),"heading-sm-bold":Ht("heading-sm-bold"),"heading-xs-light":Ht("heading-xs-light"),"heading-xs-regular":Ht("heading-xs-regular"),"heading-xs-semibold":Ht("heading-xs-semibold"),"heading-xs-bold":Ht("heading-xs-bold"),"body-baseline-light":Ht("body-baseline-light"),"body-baseline-regular":Ht("body-baseline-regular"),"body-baseline-semibold":Ht("body-baseline-semibold"),"body-baseline-bold":Ht("body-baseline-bold"),"body-md-light":Ht("body-md-light"),"body-md-regular":Ht("body-md-regular"),"body-md-semibold":Ht("body-md-semibold"),"body-md-bold":Ht("body-md-bold"),"body-sm-light":Ht("body-sm-light"),"body-sm-regular":Ht("body-sm-regular"),"body-sm-semibold":Ht("body-sm-semibold"),"body-sm-bold":Ht("body-sm-bold"),"body-xs-light":Ht("body-xs-light"),"body-xs-regular":Ht("body-xs-regular"),"body-xs-semibold":Ht("body-xs-semibold"),"body-xs-bold":Ht("body-xs-bold"),"form-label":Ht("form-label"),"form-description":Ht("form-description")},Nt={collections:{default:{"duration-150":"150ms","duration-250":"250ms","duration-350":"350ms","duration-500":"500ms","duration-800":"800ms","duration-1000":"1000ms","ease-default":"cubic-bezier(0.45, 0.05, 0.55, 0.95)","ease-standard":"cubic-bezier(0.86, 0, 0.07, 1)","ease-entrance":"cubic-bezier(0.18, 0.13, 0, 1)","ease-exit":"cubic-bezier(1, 0, 0.8, 0.85)"}},defaultValue:"default"},Yt=e=>r=>{var n;const t=r.theme,i=$n(Nt,null==t?void 0:t.motionScheme);return(null===(n=null==t?void 0:t.overrides)||void 0===n?void 0:n.motion)?wn(i,e,t.overrides.motion):i[e]},Rt={"duration-150":Yt("duration-150"),"duration-250":Yt("duration-250"),"duration-350":Yt("duration-350"),"duration-500":Yt("duration-500"),"duration-800":Yt("duration-800"),"duration-1000":Yt("duration-1000"),"ease-default":Yt("ease-default"),"ease-standard":Yt("ease-standard"),"ease-entrance":Yt("ease-entrance"),"ease-exit":Yt("ease-exit")},Wt={collections:{default:{"spacing-0":0,"spacing-4":4,"spacing-8":8,"spacing-12":12,"spacing-16":16,"spacing-20":20,"spacing-24":24,"spacing-32":32,"spacing-40":40,"spacing-48":48,"spacing-64":64,"spacing-72":72,"layout-xs":8,"layout-sm":16,"layout-md":24,"layout-lg":32,"layout-xl":48,"layout-xxl":64,"layout-xxxl":128}},defaultValue:"default"},Pt=e=>r=>{var n;const t=r.theme,i=$n(Wt,null==t?void 0:t.spacingScheme);return(null===(n=null==t?void 0:t.overrides)||void 0===n?void 0:n.spacing)?`${wn(i,e,t.overrides.spacing)}px`:`${i[e]}px`},Ut={"spacing-0":Pt("spacing-0"),"spacing-4":Pt("spacing-4"),"spacing-8":Pt("spacing-8"),"spacing-12":Pt("spacing-12"),"spacing-16":Pt("spacing-16"),"spacing-20":Pt("spacing-20"),"spacing-24":Pt("spacing-24"),"spacing-32":Pt("spacing-32"),"spacing-40":Pt("spacing-40"),"spacing-48":Pt("spacing-48"),"spacing-64":Pt("spacing-64"),"spacing-72":Pt("spacing-72"),"layout-xs":Pt("layout-xs"),"layout-sm":Pt("layout-sm"),"layout-md":Pt("layout-md"),"layout-lg":Pt("layout-lg"),"layout-xl":Pt("layout-xl"),"layout-xxl":Pt("layout-xxl"),"layout-xxxl":Pt("layout-xxxl")},Vt=(e,r)=>Object.assign(Object.assign({},e),{colourMode:r}),Zt=Object.assign(Object.assign({},et),{Primitive:Wn}),Xt=Object.assign(Object.assign({},It),{Spec:St}),qt=Rt,Jt=Object.assign(Object.assign({},Cn),{Util:it}),Gt=Ut,Kt=gt,Qt=st,ei=dt,ri={colourScheme:"lifesg",fontScheme:"default",motionScheme:"default",borderScheme:"default",spacingScheme:"default",radiusScheme:"default",shadowScheme:"default",breakpointScheme:"default",resourceScheme:"lifesg",componentScheme:"lifesg",_v2:{colorScheme:"base",textStyleScheme:"base",designTokenScheme:"base",resourceScheme:"base"}},ni={colourScheme:"bookingsg",fontScheme:"bookingsg",motionScheme:"default",borderScheme:"default",spacingScheme:"default",radiusScheme:"default",shadowScheme:"default",breakpointScheme:"default",resourceScheme:"bookingsg",_v2:{colorScheme:"bookingsg",textStyleScheme:"base",designTokenScheme:"base",resourceScheme:"bookingsg"}},ti={colourScheme:"ccube",fontScheme:"default",motionScheme:"default",borderScheme:"default",spacingScheme:"default",radiusScheme:"default",shadowScheme:"default",breakpointScheme:"default",resourceScheme:"ccube",_v2:{colorScheme:"ccube",textStyleScheme:"base",designTokenScheme:"base",resourceScheme:"ccube"}},ii={colourScheme:"mylegacy",fontScheme:"mylegacy",motionScheme:"default",borderScheme:"default",spacingScheme:"default",radiusScheme:"default",shadowScheme:"default",breakpointScheme:"default",resourceScheme:"mylegacy",_v2:{colorScheme:"mylegacy",textStyleScheme:"base",designTokenScheme:"base",resourceScheme:"mylegacy"}},oi={colourScheme:"rbs",fontScheme:"default",motionScheme:"default",borderScheme:"default",spacingScheme:"default",radiusScheme:"default",shadowScheme:"default",breakpointScheme:"default",resourceScheme:"rbs",_v2:{colorScheme:"rbs",textStyleScheme:"base",designTokenScheme:"rbs",resourceScheme:"rbs"}},ai={colourScheme:"oneservice",fontScheme:"oneservice",motionScheme:"default",borderScheme:"default",spacingScheme:"default",radiusScheme:"default",shadowScheme:"default",breakpointScheme:"default",resourceScheme:"oneservice"},si={colourScheme:"pa",fontScheme:"pa",motionScheme:"default",borderScheme:"default",spacingScheme:"default",radiusScheme:"default",shadowScheme:"default",breakpointScheme:"default",resourceScheme:"pa",componentScheme:"pa"},li={colourScheme:"a11yplayground",fontScheme:"a11yplayground",motionScheme:"default",borderScheme:"default",spacingScheme:"default",radiusScheme:"default",shadowScheme:"default",breakpointScheme:"default",resourceScheme:"a11yplayground",componentScheme:"a11yplayground"},di={colourScheme:"supportgowhere",fontScheme:"supportgowhere",motionScheme:"default",borderScheme:"default",spacingScheme:"default",radiusScheme:"default",shadowScheme:"default",breakpointScheme:"default",resourceScheme:"supportgowhere",componentScheme:"default"},ci={colourScheme:"sgwdigitallobby",fontScheme:"sgwdigitallobby",motionScheme:"default",borderScheme:"default",spacingScheme:"default",radiusScheme:"default",shadowScheme:"default",breakpointScheme:"default",resourceScheme:"supportgowhere",componentScheme:"default"},ui={colourScheme:"imda",fontScheme:"imda",motionScheme:"default",borderScheme:"default",spacingScheme:"default",radiusScheme:"default",shadowScheme:"default",breakpointScheme:"default",resourceScheme:"imda",componentScheme:"default"},gi={colourScheme:"spf",fontScheme:"spf",motionScheme:"default",borderScheme:"default",spacingScheme:"default",radiusScheme:"spf",shadowScheme:"default",breakpointScheme:"default",resourceScheme:"spf",componentScheme:"spf"},bi={colourScheme:"smgs",fontScheme:"smgs",motionScheme:"default",borderScheme:"default",spacingScheme:"default",radiusScheme:"default",shadowScheme:"default",breakpointScheme:"default",resourceScheme:"smgs",componentScheme:"smgs"};Object.assign(Object.assign({},ri),{light:Vt(ri,"light"),dark:Vt(ri,"dark")}),Object.assign(Object.assign({},ni),{light:Vt(ni,"light"),dark:Vt(ni,"dark")}),Object.assign(Object.assign({},ti),{light:Vt(ti,"light"),dark:Vt(ti,"dark")}),Object.assign(Object.assign({},ii),{light:Vt(ii,"light"),dark:Vt(ii,"dark")}),Object.assign(Object.assign({},oi),{light:Vt(oi,"light"),dark:Vt(oi,"dark")}),Object.assign(Object.assign({},ai),{light:Vt(ai,"light"),dark:Vt(ai,"dark")}),Object.assign(Object.assign({},si),{light:Vt(si,"light"),dark:Vt(si,"dark")}),Object.assign(Object.assign({},li),{light:Vt(li,"light"),dark:Vt(li,"dark")}),Object.assign(Object.assign({},di),{light:Vt(di,"light"),dark:Vt(di,"dark")}),Object.assign(Object.assign({},ci),{light:Vt(ci,"light"),dark:Vt(ci,"dark")}),Object.assign(Object.assign({},ui),{light:Vt(ui,"light"),dark:Vt(ui,"dark")}),Object.assign(Object.assign({},gi),{light:Vt(gi,"light"),dark:Vt(gi,"dark")}),Object.assign(Object.assign({},bi),{light:Vt(bi,"light"),dark:Vt(bi,"dark")});const mi=e=>x`
    display: -webkit-box;
    -webkit-line-clamp: ${e};
    -webkit-box-orient: vertical;
    overflow: hidden;
`,hi=e=>"small"===e?2.5:3;v.div`
    position: relative;
    width: 100%;
    ${e=>{const r=hi(e.$variant);return x`
            min-height: ${r}rem;
            height: ${r}rem; // Need this to persist the height when expanding or collapsing list
        `}}
`;const yi=x`
    display: flex;
    position: relative;
    align-items: center;
    justify-content: space-between;
    padding: 0 ${Gt["spacing-16"]};
    // exclude top and bottom borders
    height: calc(${e=>hi(e.$variant)}rem - 2px);
    width: 100%;
    border-radius: ${Kt.sm};
    border: none;
    background: transparent;

    &:focus,
    &:active {
        outline: none;
    }

    &:focus-visible {
        outline: 2px solid ${Zt["border-focus"]};
    }
`,fi=v.button`
    ${yi}
    cursor: pointer;
`;v.div`
    ${yi}
`;const pi=F`
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
`;v.div`
    position: relative;
    border: ${Jt["width-010"]} ${Jt.solid} ${Zt.border};
    border-radius: ${Kt.sm};
    background: ${Zt.bg};
    overflow: hidden;

    &:focus-within {
        border-color: ${Zt["border-focus"]};
        box-shadow: 0px 0px 4px 0px
            rgb(from ${Zt["border-focus"]} r g b / 50%) inset; // TODO: confirm shadow
    }

    ${e=>e.$expanded?x`
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                z-index: 2;
            `:x`
                animation: ${pi} 0.5s ease-in-out;
            `}

    ${e=>e.$disabled?x`
                background: ${Zt["bg-disabled"]};

                ${fi} {
                    cursor: not-allowed;
                }

                &:focus-within {
                    border-color: ${Zt.border};
                    box-shadow: none;
                }
            `:e.$readOnly?x`
                border: none;
                background: transparent !important;

                ${fi} {
                    padding: 0;
                }

                &:focus-within {
                    border: none;
                    box-shadow: none;
                }
            `:e.$error?x`
                border-color: ${Zt["border-error"]};

                &:focus-within {
                    border-color: ${Zt["border-error"]};
                    box-shadow: 0px 0px 4px 0px
                        rgb(from ${Zt["border-error"]} r g b / 50%) inset; // TODO: confirm shadow
                }
            `:void 0}
`,v.div`
    transform: rotate(${e=>e.$expanded?180:0}deg);
    transition: transform ${qt["duration-250"]} ${qt["ease-default"]};
    margin-left: ${Gt["spacing-16"]};
`,v(p)`
    color: ${Zt.icon};
`,v.div`
    height: 1px;
    background: ${Zt.border};
    margin: 0 ${Gt["spacing-8"]};
`,v.div`
    display: flex;
    flex: 1;
    word-break: break-all;
    ${e=>{if(e.$disabled)return x`
                color: ${Zt["text-disabled"]};
            `}}
`;v(v.div`
    ${e=>"small"===e.$variant?Xt["body-md-regular"]:Xt["body-baseline-regular"]}
    text-align: left;
    ${e=>{if("middle"!==e.$truncateType)return x`
                    ${mi(1)}
                `}}
    overflow: hidden;
`)`
    color: ${Zt["text-subtler"]};
`;var vi=function(e,r){return vi=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,r){e.__proto__=r}||function(e,r){for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])},vi(e,r)};var xi=function(){return xi=Object.assign||function(e){for(var r,n=1,t=arguments.length;n<t;n++)for(var i in r=arguments[n])Object.prototype.hasOwnProperty.call(r,i)&&(e[i]=r[i]);return e},xi.apply(this,arguments)};var Fi="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};var wi=function(e){var r=typeof e;return null!=e&&("object"==r||"function"==r)},$i="object"==typeof Fi&&Fi&&Fi.Object===Object&&Fi,Ei="object"==typeof self&&self&&self.Object===Object&&self,Di=$i||Ei||Function("return this")(),Ci=Di,ki=function(){return Ci.Date.now()},Bi=/\s/;var Si=function(e){for(var r=e.length;r--&&Bi.test(e.charAt(r)););return r},Ai=/^\s+/;var zi=function(e){return e?e.slice(0,Si(e)+1).replace(Ai,""):e},Mi=Di.Symbol,Oi=Mi,Ti=Object.prototype,ji=Ti.hasOwnProperty,_i=Ti.toString,Li=Oi?Oi.toStringTag:void 0;var Hi=function(e){var r=ji.call(e,Li),n=e[Li];try{e[Li]=void 0;var t=!0}catch(e){}var i=_i.call(e);return t&&(r?e[Li]=n:delete e[Li]),i},Ii=Object.prototype.toString;var Ni=Hi,Yi=function(e){return Ii.call(e)},Ri=Mi?Mi.toStringTag:void 0;var Wi=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":Ri&&Ri in Object(e)?Ni(e):Yi(e)},Pi=function(e){return null!=e&&"object"==typeof e};var Ui=zi,Vi=wi,Zi=function(e){return"symbol"==typeof e||Pi(e)&&"[object Symbol]"==Wi(e)},Xi=/^[-+]0x[0-9a-f]+$/i,qi=/^0b[01]+$/i,Ji=/^0o[0-7]+$/i,Gi=parseInt;var Ki=wi,Qi=ki,eo=function(e){if("number"==typeof e)return e;if(Zi(e))return NaN;if(Vi(e)){var r="function"==typeof e.valueOf?e.valueOf():e;e=Vi(r)?r+"":r}if("string"!=typeof e)return 0===e?e:+e;e=Ui(e);var n=qi.test(e);return n||Ji.test(e)?Gi(e.slice(2),n?2:8):Xi.test(e)?NaN:+e},ro=Math.max,no=Math.min;var to=function(e,r,n){var t,i,o,a,s,l,d=0,c=!1,u=!1,g=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function b(r){var n=t,o=i;return t=i=void 0,d=r,a=e.apply(o,n)}function m(e){var n=e-l;return void 0===l||n>=r||n<0||u&&e-d>=o}function h(){var e=Qi();if(m(e))return y(e);s=setTimeout(h,function(e){var n=r-(e-l);return u?no(n,o-(e-d)):n}(e))}function y(e){return s=void 0,g&&t?b(e):(t=i=void 0,a)}function f(){var e=Qi(),n=m(e);if(t=arguments,i=this,l=e,n){if(void 0===s)return function(e){return d=e,s=setTimeout(h,r),c?b(e):a}(l);if(u)return clearTimeout(s),s=setTimeout(h,r),b(l)}return void 0===s&&(s=setTimeout(h,r)),a}return r=eo(r)||0,Ki(n)&&(c=!!n.leading,o=(u="maxWait"in n)?ro(eo(n.maxWait)||0,r):o,g="trailing"in n?!!n.trailing:g),f.cancel=function(){void 0!==s&&clearTimeout(s),d=0,t=l=i=s=void 0},f.flush=function(){return void 0===s?a:y(Qi())},f},io=to,oo=wi;var ao=function(e,r,n){var t=!0,i=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return oo(n)&&(t="leading"in n?!!n.leading:t,i="trailing"in n?!!n.trailing:i),io(e,r,{leading:t,maxWait:r,trailing:i})},so=function(e,r,n,t){switch(r){case"debounce":return to(e,n,t);case"throttle":return ao(e,n,t);default:return e}},lo=function(e){return"function"==typeof e},co=function(){return"undefined"==typeof window},uo=function(e){return e instanceof Element||e instanceof HTMLDocument},go=function(e,r,n,t){return function(i){var o=i.width,a=i.height;r((function(r){return r.width===o&&r.height===a||r.width===o&&!t||r.height===a&&!n?r:(e&&lo(e)&&e(o,a),{width:o,height:a})}))}};!function(e){function r(r){var n=e.call(this,r)||this;n.cancelHandler=function(){n.resizeHandler&&n.resizeHandler.cancel&&(n.resizeHandler.cancel(),n.resizeHandler=null)},n.attachObserver=function(){var e=n.props,r=e.targetRef,t=e.observerOptions;if(!co()){r&&r.current&&(n.targetRef.current=r.current);var i=n.getElement();i&&(n.observableElement&&n.observableElement===i||(n.observableElement=i,n.resizeObserver.observe(i,t)))}},n.getElement=function(){var e=n.props,r=e.querySelector,t=e.targetDomEl;if(co())return null;if(r)return document.querySelector(r);if(t&&uo(t))return t;if(n.targetRef&&uo(n.targetRef.current))return n.targetRef.current;var i=L(n);if(!i)return null;switch(n.getRenderType()){case"renderProp":case"childFunction":case"child":case"childArray":return i;default:return i.parentElement}},n.createResizeHandler=function(e){var r=n.props,t=r.handleWidth,i=void 0===t||t,o=r.handleHeight,a=void 0===o||o,s=r.onResize;if(i||a){var l=go(s,n.setState.bind(n),i,a);e.forEach((function(e){var r=e&&e.contentRect||{},t=r.width,i=r.height;!n.skipOnMount&&!co()&&l({width:t,height:i}),n.skipOnMount=!1}))}},n.getRenderType=function(){var e=n.props,r=e.render,t=e.children;return lo(r)?"renderProp":lo(t)?"childFunction":s(t)?"child":Array.isArray(t)?"childArray":"parent"};var t=r.skipOnMount,i=r.refreshMode,o=r.refreshRate,a=void 0===o?1e3:o,d=r.refreshOptions;return n.state={width:void 0,height:void 0},n.skipOnMount=t,n.targetRef=l(),n.observableElement=null,co()||(n.resizeHandler=so(n.createResizeHandler,i,a,d),n.resizeObserver=new window.ResizeObserver(n.resizeHandler)),n}(function(e,r){if("function"!=typeof r&&null!==r)throw new TypeError("Class extends value "+String(r)+" is not a constructor or null");function n(){this.constructor=e}vi(e,r),e.prototype=null===r?Object.create(r):(n.prototype=r.prototype,new n)})(r,e),r.prototype.componentDidMount=function(){this.attachObserver()},r.prototype.componentDidUpdate=function(){this.attachObserver()},r.prototype.componentWillUnmount=function(){co()||(this.observableElement=null,this.resizeObserver.disconnect(),this.cancelHandler())},r.prototype.render=function(){var e,r=this.props,n=r.render,i=r.children,o=r.nodeType,a=void 0===o?"div":o,s=this.state,l={width:s.width,height:s.height,targetRef:this.targetRef};switch(this.getRenderType()){case"renderProp":return n&&n(l);case"childFunction":return(e=i)(l);case"child":if((e=i).type&&"string"==typeof e.type){var c=function(e,r){var n={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&r.indexOf(t)<0&&(n[t]=e[t]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(t=Object.getOwnPropertySymbols(e);i<t.length;i++)r.indexOf(t[i])<0&&Object.prototype.propertyIsEnumerable.call(e,t[i])&&(n[t[i]]=e[t[i]])}return n}(l,["targetRef"]);return d(e,c)}return d(e,l);case"childArray":return(e=i).map((function(e){return!!e&&d(e,l)}));default:return t.createElement(a,null)}}}(c);var bo,mo=co()?u:g;function ho(e){void 0===e&&(e={});var r=e.skipOnMount,n=void 0!==r&&r,t=e.refreshMode,i=e.refreshRate,s=void 0===i?1e3:i,l=e.refreshOptions,d=e.handleWidth,c=void 0===d||d,u=e.handleHeight,g=void 0===u||u,b=e.targetRef,m=e.observerOptions,h=e.onResize,y=o(n),f=o(null),p=null!=b?b:f,v=o(),x=a({width:void 0,height:void 0}),F=x[0],w=x[1];return mo((function(){if(!co()){var e=go(h,w,c,g);v.current=so((function(r){(c||g)&&r.forEach((function(r){var n=r&&r.contentRect||{},t=n.width,i=n.height;!y.current&&!co()&&e({width:t,height:i}),y.current=!1}))}),t,s,l);var r=new window.ResizeObserver(v.current);return p.current&&r.observe(p.current,m),function(){r.disconnect();var e=v.current;e&&e.cancel&&e.cancel()}}}),[t,s,l,c,g,h,m,p.current]),xi({ref:p},F)}!function(e){e.Ready="overlay-context-ready",e.Change="overlay-context-change"}(bo||(bo={}));const yo=e=>"right"===e?"bottom-end":"bottom-start",fo=b({elementWidth:0,styles:{},setFloatingRef:()=>{},getFloatingProps:()=>({})}),po=({enabled:t,isOpen:i,onOpen:s,onClose:l,onDismiss:d,renderElement:c,renderDropdown:g,customZIndex:b,clickToToggle:h=!1,offset:y=0,alignment:f="left",fitAvailableHeight:p,rootNode:v,positionRef:x})=>{var F;const L=m(w),H=Qt["sm-max"]({theme:L}),I=o(null),{width:N=0}=ho({targetRef:null!=x?x:I,handleHeight:!1}),Y={name:"center",fn:({x:e,rects:r})=>{const n=0===e||e+r.floating.width===window.innerWidth,t=window.innerWidth<H;return{x:n&&t?(window.innerWidth-r.floating.width)/2:e}}},{refs:R,floatingStyles:W,context:P}=E({open:i,onOpenChange:(e,r,n)=>{"escape-key"===n?null==d||d():e&&!i?null==s||s():!e&&i&&(null==l||l(n))},whileElementsMounted:D,placement:yo(f),middleware:[C(y),k(),B({limiter:S()}),A({apply({availableHeight:e,elements:r}){!p||e>=r.floating.scrollHeight?r.floating.style.setProperty("--available-height",""):r.floating.style.setProperty("--available-height",`${Math.max(0,e)}px`)}}),Y]}),U=(()=>{const[e,r]=a(void 0),n=$();return u((()=>{if(!n)return void r(void 0);const e=e=>{r(e.zIndex)};return n.events.on(bo.Change,e),n.events.emit(bo.Ready),()=>n.events.off(bo.Change,e)}),[n]),e})(),{isMounted:V,styles:Z}=z(P,{initial:{opacity:0},open:{opacity:1},duration:300}),X=M(P,{enabled:t,toggle:h,keyboardHandlers:h}),q=O(P,{enabled:t}),{getReferenceProps:J,getFloatingProps:G}=T([X,q]),K={elementWidth:N,styles:Object.assign(Object.assign(Object.assign({},Z),W),{zIndex:null!==(F=null!=b?b:U)&&void 0!==F?F:50}),setFloatingRef:R.setFloating,getFloatingProps:G};return e(r,{children:[n("div",Object.assign({ref:e=>{I.current=e,R.setReference(e)}},J(),{children:c()})),V&&n(j,{root:v,children:n(_,{context:P,modal:!1,initialFocus:-1,returnFocus:!1,children:n(fo.Provider,{value:K,children:g(K)})})})]})},vo=x`
    outline-offset: -1px;
    outline: ${Jt["width-020"]} ${Jt.solid} ${Zt["border-focus"]};
`,xo=x`
    outline-color: ${Zt["border-focus"]};
`,Fo=x`
    outline-color: ${Zt["border-disabled"]};
`,wo=x`
    outline-color: ${Zt["border-error-focus"]};
`,$o=x`
    outline: none;
`,Eo=v.div`
    border: ${Jt["width-010"]} ${Jt.solid} ${Zt.border};
    border-radius: ${Kt.sm};
    background: ${Zt.bg};

    &:focus-within {
        ${vo}
    }
    ${e=>e.$focused&&!e.$noBorder&&vo}

    ${e=>e.$readOnly?x`
                border-color: transparent;
                padding: 0;
                background: transparent !important;

                &:focus-within {
                    ${xo}
                }
                ${e.$focused&&xo}
            `:e.$disabled?x`
                background: ${Zt["bg-disabled"]};
                cursor: not-allowed;

                &:focus-within {
                    ${Fo}
                }
                ${e.$focused&&Fo}
            `:e.$error?x`
                border-color: ${Zt["border-error"]};

                &:focus-within {
                    ${wo}
                }
                ${e.$focused&&wo}
            `:void 0}
    ${e=>{if(e.$noBorder)return x`
                border-color: transparent;
                background: transparent;
                &:focus-within {
                    ${$o}
                }
            `}}
`,Do=v(Eo)`
    display: flex;
    align-items: center;
    position: relative;
    height: max-content;
    width: 100%;
    padding: 0 ${Gt["spacing-16"]} 0
        ${e=>e.$readOnly?"0":Gt["spacing-16"]};
    flex-direction: ${e=>"right"===e.$position?"row-reverse":"row"};
`,Co=v.input`
    ${e=>"small"===e.$variant?Xt["body-md-regular"]:Xt["body-baseline-regular"]}
    color: ${Zt.text};
    display: block;
    background: transparent;
    border: none;
    outline: none;
    box-shadow: none;
    padding: 0;
    margin: 0;

    &:disabled {
        color: ${Zt["text-subtler"]};

        &:hover {
            cursor: not-allowed;
        }
    }

    &::placeholder,
    &::-webkit-input-placeholder {
        color: ${Zt["text-subtler"]};
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
`;var ko;v.button`
    background: transparent;
    border: none;
    outline: none;

    &:focus,
    &:active {
        outline: none;
    }

    &:focus-visible {
        outline: ${Jt["width-010"]} ${Jt.solid}
            ${Zt["border-focus"]};
        border-radius: ${Kt.sm};
    }
`,function(e){e.transformWithSpaces=(e,r)=>{const n="(.{"+r+"})";return e.replace(/[^\dA-Z]/gi,"").replace(new RegExp(n,"g"),"$1 ").trim()},e.padValue=(e,r)=>{if("0"===e)return r?e:e.padStart(2,"0");if(""===e)return e;return parseInt(e).toString().padStart(2,"0")},e.shouldTruncateToTwoLines=(e,r)=>{const n=Math.floor(r/9);return e.length>=2*n||1===e.split(" ").length&&e.length>n},e.truncateOneLine=(e,r,n,t,i=8)=>{let o=0;r>n&&(o=Math.floor((r-n)/i));const a=t+o;if(a<e.length){const r=Math.floor(a/2);return e.substring(0,r)+" ... "+e.substring(e.length-r,e.length)}return e},e.truncateTwoLines=(e,r,n,t=1.2)=>{const i=Math.floor(2*r/(.6*n))*(2/t);if(e.length<=i)return e;const o=Math.floor(.6*i),a=Math.floor(.2*i);return`${e.substring(0,o)}...${e.substring(e.length-a)}`},e.getTextWidth=(r,n)=>{if("undefined"==typeof document)return 0;const t=(e.getTextWidth.canvas||(e.getTextWidth.canvas=document.createElement("canvas"))).getContext("2d");t.font=n;return t.measureText(r).width},e.maskValue=(e,n)=>{if(!e)return e;const{maskRange:t,unmaskRange:i,maskChar:o="•",maskRegex:a,maskTransformer:s}=n;if(s)return s(e);if(a)return e.replace(a,o);if(t){const{startIndex:n,endIndex:i}=r(t[0],t[1]);return e.substring(0,n)+o.repeat(e.substring(n,i+1).length)+e.substring(i+1)}if(i){const{startIndex:n,endIndex:t}=r(i[0],i[1]);return o.repeat(e.substring(0,n).length)+e.substring(n,t+1)+o.repeat(e.substring(t+1).length)}return e};const r=(e,r)=>e<r?{startIndex:e,endIndex:r}:{startIndex:r,endIndex:e},n=new Intl.PluralRules("en",{type:"ordinal"}),t=new Map([["one","st"],["two","nd"],["few","rd"],["other","th"]]);e.formatOrdinal=e=>{const r=n.select(e);return`${e}${t.get(r)}`},e.getMaskedDescription=(e,r,n)=>{if(!e||"masked"!==r||!n)return"";const[t,i]=n,o=t>0,a=i<e.length-1,s=o?e.substring(0,t):"",l=a?e.substring(i+1):"";return o&&a?`Starting with ${s} and ending with ${l}`:o?`Starting with ${s}`:a?`Ending with ${l}`:""},e.joinNonEmptyStrings=(e,r=", ")=>e.filter(Boolean).join(r)}(ko||(ko={}));var Bo={exports:{}};Bo.exports=function(){var e=1e3,r=6e4,n=36e5,t="millisecond",i="second",o="minute",a="hour",s="day",l="week",d="month",c="quarter",u="year",g="date",b="Invalid Date",m=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,h=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,y={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(e){var r=["th","st","nd","rd"],n=e%100;return"["+e+(r[(n-20)%10]||r[n]||r[0])+"]"}},f=function(e,r,n){var t=String(e);return!t||t.length>=r?e:""+Array(r+1-t.length).join(n)+e},p={s:f,z:function(e){var r=-e.utcOffset(),n=Math.abs(r),t=Math.floor(n/60),i=n%60;return(r<=0?"+":"-")+f(t,2,"0")+":"+f(i,2,"0")},m:function e(r,n){if(r.date()<n.date())return-e(n,r);var t=12*(n.year()-r.year())+(n.month()-r.month()),i=r.clone().add(t,d),o=n-i<0,a=r.clone().add(t+(o?-1:1),d);return+(-(t+(n-i)/(o?i-a:a-i))||0)},a:function(e){return e<0?Math.ceil(e)||0:Math.floor(e)},p:function(e){return{M:d,y:u,w:l,d:s,D:g,h:a,m:o,s:i,ms:t,Q:c}[e]||String(e||"").toLowerCase().replace(/s$/,"")},u:function(e){return void 0===e}},v="en",x={};x[v]=y;var F="$isDayjsObject",w=function(e){return e instanceof C||!(!e||!e[F])},$=function e(r,n,t){var i;if(!r)return v;if("string"==typeof r){var o=r.toLowerCase();x[o]&&(i=o),n&&(x[o]=n,i=o);var a=r.split("-");if(!i&&a.length>1)return e(a[0])}else{var s=r.name;x[s]=r,i=s}return!t&&i&&(v=i),i||!t&&v},E=function(e,r){if(w(e))return e.clone();var n="object"==typeof r?r:{};return n.date=e,n.args=arguments,new C(n)},D=p;D.l=$,D.i=w,D.w=function(e,r){return E(e,{locale:r.$L,utc:r.$u,x:r.$x,$offset:r.$offset})};var C=function(){function y(e){this.$L=$(e.locale,null,!0),this.parse(e),this.$x=this.$x||e.x||{},this[F]=!0}var f=y.prototype;return f.parse=function(e){this.$d=function(e){var r=e.date,n=e.utc;if(null===r)return new Date(NaN);if(D.u(r))return new Date;if(r instanceof Date)return new Date(r);if("string"==typeof r&&!/Z$/i.test(r)){var t=r.match(m);if(t){var i=t[2]-1||0,o=(t[7]||"0").substring(0,3);return n?new Date(Date.UTC(t[1],i,t[3]||1,t[4]||0,t[5]||0,t[6]||0,o)):new Date(t[1],i,t[3]||1,t[4]||0,t[5]||0,t[6]||0,o)}}return new Date(r)}(e),this.init()},f.init=function(){var e=this.$d;this.$y=e.getFullYear(),this.$M=e.getMonth(),this.$D=e.getDate(),this.$W=e.getDay(),this.$H=e.getHours(),this.$m=e.getMinutes(),this.$s=e.getSeconds(),this.$ms=e.getMilliseconds()},f.$utils=function(){return D},f.isValid=function(){return!(this.$d.toString()===b)},f.isSame=function(e,r){var n=E(e);return this.startOf(r)<=n&&n<=this.endOf(r)},f.isAfter=function(e,r){return E(e)<this.startOf(r)},f.isBefore=function(e,r){return this.endOf(r)<E(e)},f.$g=function(e,r,n){return D.u(e)?this[r]:this.set(n,e)},f.unix=function(){return Math.floor(this.valueOf()/1e3)},f.valueOf=function(){return this.$d.getTime()},f.startOf=function(e,r){var n=this,t=!!D.u(r)||r,c=D.p(e),b=function(e,r){var i=D.w(n.$u?Date.UTC(n.$y,r,e):new Date(n.$y,r,e),n);return t?i:i.endOf(s)},m=function(e,r){return D.w(n.toDate()[e].apply(n.toDate("s"),(t?[0,0,0,0]:[23,59,59,999]).slice(r)),n)},h=this.$W,y=this.$M,f=this.$D,p="set"+(this.$u?"UTC":"");switch(c){case u:return t?b(1,0):b(31,11);case d:return t?b(1,y):b(0,y+1);case l:var v=this.$locale().weekStart||0,x=(h<v?h+7:h)-v;return b(t?f-x:f+(6-x),y);case s:case g:return m(p+"Hours",0);case a:return m(p+"Minutes",1);case o:return m(p+"Seconds",2);case i:return m(p+"Milliseconds",3);default:return this.clone()}},f.endOf=function(e){return this.startOf(e,!1)},f.$set=function(e,r){var n,l=D.p(e),c="set"+(this.$u?"UTC":""),b=(n={},n[s]=c+"Date",n[g]=c+"Date",n[d]=c+"Month",n[u]=c+"FullYear",n[a]=c+"Hours",n[o]=c+"Minutes",n[i]=c+"Seconds",n[t]=c+"Milliseconds",n)[l],m=l===s?this.$D+(r-this.$W):r;if(l===d||l===u){var h=this.clone().set(g,1);h.$d[b](m),h.init(),this.$d=h.set(g,Math.min(this.$D,h.daysInMonth())).$d}else b&&this.$d[b](m);return this.init(),this},f.set=function(e,r){return this.clone().$set(e,r)},f.get=function(e){return this[D.p(e)]()},f.add=function(t,c){var g,b=this;t=Number(t);var m=D.p(c),h=function(e){var r=E(b);return D.w(r.date(r.date()+Math.round(e*t)),b)};if(m===d)return this.set(d,this.$M+t);if(m===u)return this.set(u,this.$y+t);if(m===s)return h(1);if(m===l)return h(7);var y=(g={},g[o]=r,g[a]=n,g[i]=e,g)[m]||1,f=this.$d.getTime()+t*y;return D.w(f,this)},f.subtract=function(e,r){return this.add(-1*e,r)},f.format=function(e){var r=this,n=this.$locale();if(!this.isValid())return n.invalidDate||b;var t=e||"YYYY-MM-DDTHH:mm:ssZ",i=D.z(this),o=this.$H,a=this.$m,s=this.$M,l=n.weekdays,d=n.months,c=n.meridiem,u=function(e,n,i,o){return e&&(e[n]||e(r,t))||i[n].slice(0,o)},g=function(e){return D.s(o%12||12,e,"0")},m=c||function(e,r,n){var t=e<12?"AM":"PM";return n?t.toLowerCase():t};return t.replace(h,(function(e,t){return t||function(e){switch(e){case"YY":return String(r.$y).slice(-2);case"YYYY":return D.s(r.$y,4,"0");case"M":return s+1;case"MM":return D.s(s+1,2,"0");case"MMM":return u(n.monthsShort,s,d,3);case"MMMM":return u(d,s);case"D":return r.$D;case"DD":return D.s(r.$D,2,"0");case"d":return String(r.$W);case"dd":return u(n.weekdaysMin,r.$W,l,2);case"ddd":return u(n.weekdaysShort,r.$W,l,3);case"dddd":return l[r.$W];case"H":return String(o);case"HH":return D.s(o,2,"0");case"h":return g(1);case"hh":return g(2);case"a":return m(o,a,!0);case"A":return m(o,a,!1);case"m":return String(a);case"mm":return D.s(a,2,"0");case"s":return String(r.$s);case"ss":return D.s(r.$s,2,"0");case"SSS":return D.s(r.$ms,3,"0");case"Z":return i}return null}(e)||i.replace(":","")}))},f.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},f.diff=function(t,g,b){var m,h=this,y=D.p(g),f=E(t),p=(f.utcOffset()-this.utcOffset())*r,v=this-f,x=function(){return D.m(h,f)};switch(y){case u:m=x()/12;break;case d:m=x();break;case c:m=x()/3;break;case l:m=(v-p)/6048e5;break;case s:m=(v-p)/864e5;break;case a:m=v/n;break;case o:m=v/r;break;case i:m=v/e;break;default:m=v}return b?m:D.a(m)},f.daysInMonth=function(){return this.endOf(d).$D},f.$locale=function(){return x[this.$L]},f.locale=function(e,r){if(!e)return this.$L;var n=this.clone(),t=$(e,r,!0);return t&&(n.$L=t),n},f.clone=function(){return D.w(this.$d,this)},f.toDate=function(){return new Date(this.valueOf())},f.toJSON=function(){return this.isValid()?this.toISOString():null},f.toISOString=function(){return this.$d.toISOString()},f.toString=function(){return this.$d.toUTCString()},y}(),k=C.prototype;return E.prototype=k,[["$ms",t],["$s",i],["$m",o],["$H",a],["$W",s],["$M",d],["$y",u],["$D",g]].forEach((function(e){k[e[1]]=function(r){return this.$g(r,e[0],e[1])}})),E.extend=function(e,r){return e.$i||(e(r,C,E),e.$i=!0),E},E.locale=$,E.isDayjs=w,E.unix=function(e){return E(1e3*e)},E.en=x[v],E.Ls=x,E.p={},E}();var So,Ao,zo=ee(Bo.exports);!function(e){e.AM="AM",e.PM="PM"}(So||(So={})),function(e){e.roundToNearestInterval=(e,r,n)=>{const[t,i]=e.split(":"),o=parseInt(t,10),a=parseInt(i,10);if(isNaN(o)||isNaN(a)||a<0||a>=60)throw new Error("Invalid time format");const s=60*o+a,l=s%r,d=0===l?s:n?s+(r-l):s-l,c=d%60;return`${Math.floor(d/60).toString().padStart(2,"0")}:${c.toString().padStart(2,"0")}`},e.generateHourlyIntervals=(e,r,n="ha")=>{const t="HH:mm";let i=zo(e,t),o=zo(r,t);i.isSame(o)&&(o=o.add(1,"day"));const a=[];for(;i.isBefore(o);)a.push(i.format(n)),i=i.add(1,"hour");return a},e.getTimeValues=(e,r)=>{const n={hour:"",minute:"",period:So.AM};if(!r)return n;try{if("24hr"===e){const t=jo(r,e);n.minute=ko.padValue(t.minute);const i=parseInt(t.hour);0===Math.floor(i/12)?(n.period=So.AM,n.hour=0===i?"12":ko.padValue(i.toString())):(n.period=So.PM,n.hour=12===i?i.toString():ko.padValue((i-12).toString()))}else{const{hour:t,minute:i,period:o=""}=jo(r,e);n.hour=ko.padValue(t),n.minute=ko.padValue(i),n.period="am"===o.toLowerCase()?So.AM:So.PM}return n}catch(e){return n}},e.updateMinutes=(e,r)=>{const n=parseInt(e);if(isNaN(n))return"add"===r?ko.padValue("0"):"55";const t=Math.floor(n/5),i=(("add"===r?t+1:n%5==0?t-1:t)%12+12)%12;return ko.padValue((5*i).toString())},e.updateHours=(e,r)=>{const n=parseInt(e);if(isNaN(n))return"add"===r?ko.padValue("1"):"12";const t="add"===r?n+1:n-1;return t<=12&&t>0?ko.padValue(t.toString()):13===t?ko.padValue("1"):"12"},e.convertTo24HourFormat=e=>{const r=parseInt(e.hour);let n;return n=e.period===So.PM?12===r?r.toString():(r+12).toString():12===r?"00":e.hour,`${n}:${e.minute}`},e.convertHourTo12HourFormat=e=>{const r=parseInt(e),n=r%12==0?12..toString():(r%12).toString();return ko.padValue(n)},e.formatTimeRange=(e,r)=>`${zo(e,"HH:mm").format("h:mmA")} to ${zo(r,"HH:mm").format("h:mmA")}`,e.isSameTime=(e,r)=>zo(e,"H:mm").isSame(zo(r,"H:mm"),"minute"),e.formatDisplayValue=(e,r)=>{try{const{hour:n,minute:t,period:i=""}=jo(e,r),o=ko.padValue(n);let a=`${o}:${ko.padValue(t)}`;return"12hr"===r?(a+=i.toLowerCase(),a):a}catch(e){return""}},e.toMinutesSeconds=e=>({minutes:Math.floor(e/60),seconds:e%60}),e.to24Hour=e=>{if((null==e?void 0:e.includes("am"))||(null==e?void 0:e.includes("pm"))){const[r,n]=e.split(/(am|pm)/i),[t,i]=r.split(":").map(Number);let o=t;return"pm"===n&&o<12&&(o+=12),"am"===n&&12===o&&(o=0),_o(o,i)}return e},e.generateTimings=(r,n="12hr",t,i)=>{const o=[];let a=0,s=1440-r;for(t&&(a=e.timeToMinutes(t)),i&&(s=e.timeToMinutes(i));a<=s;){let e=Math.floor(a/60);const t=a%60;if("12hr"===n){const r=e>=12?"pm":"am";e%=12,e=e||12;const n=_o(e,t,r);o.push(n)}else{const r=_o(e,t);o.push(r)}a+=r}return o},e.parseInput=(e,r="12hr")=>{if(""===e||void 0===e)return e;const n=e.trim().toLowerCase(),t=/^(?:(\d{1,2})([:.])?(\d{2})?)?(a|p|am|pm)?$/.exec(n);if(!t)return;let i=parseInt(t[1]||"0",10);const o=parseInt(t[3]||"0",10);let a=t[4];if(void 0===t[1]||i>24||o>59)return;if("a"===a?a="am":"p"===a&&(a="pm"),"24hr"===r)return"pm"===a&&i<12?i+=12:("am"===a&&12===i||24===i)&&(i=0),_o(i,o);a?0===i||24===i?(a="am",i=12):i>12&&(a="pm",i-=12):(a=0===i||24===i||i>6&&i<12?"am":"pm",i=i%12||12);return _o(i,o,a)},e.findClosestFlooredTime=(r,n)=>{if(!r)return r;const t=e.timeToMinutes(r);let i="",o=1/0;for(const r of n){const n=e.timeToMinutes(r)-t;if(n<=0&&Math.abs(n)<o)o=Math.abs(n),i=r;else if(n>0)break}return i},e.timeToMinutes=e=>{const[r,n]=e.toLowerCase().split(/(am|pm)/),[t,i]=r.split(":").map(Number);let o=t;return"pm"===n&&12!==o&&(o+=12),"am"===n&&12===o&&(o=0),60*o+i},e.calculateDuration=(r,n)=>{const t=e.timeToMinutes(r);return e.timeToMinutes(n)-t},e.calculateScrollPosition=r=>{const{scrollTime:n,minTime:t,maxTime:i,interval:o,intervalWidth:a,options:s}=r;try{if(!/^([0-1]?[0-9]|2[0-3]):[0-5][0-9]$/.test(n))return console.warn(`Invalid scrollTime format: "${n}". Expected format: HH:mm.`),null;const r=(null==s?void 0:s.roundToInterval)?e.roundToNearestInterval(n,o):n,[l,d]=Mo(r);if(isNaN(l)||isNaN(d))return console.warn(`Invalid scrollTime: "${n}".`),null;const c=60*l+d,[u,g]=Mo(t),b=60*u+g,[m,h]=Mo(i);(c<b||c>60*m+h)&&console.warn(`scrollTime "${n}" is outside the range (${t} - ${i}).`);return(c-b)/o*a}catch(e){return console.warn(`Error processing scrollTime: "${n}".`,e),null}}}(Ao||(Ao={}));const Mo=e=>e.split(":").map(Number),Oo=(e,r)=>{const n=parseInt(e);return"24hr"===r?n>=0&&n<=23:n>=1&&n<=12},To=e=>{const r=parseInt(e);return r>=0&&r<=59},jo=(e,r)=>{const n=e?e.split(":"):[],t=new Error("Invalid format");if("12hr"===r){if(2!==n.length||4!==n[1].length)throw t;const e=n[1].substring(0,2),o=n[1].substring(2);if(!Oo(n[0],r)||!To(e)||"am"!==(i=o).toLowerCase()&&"pm"!==i.toLowerCase())throw t;return{hour:n[0],minute:e,period:n[1].substring(2)}}if(2!==n.length)throw t;if(!Oo(n[0],r)||!To(n[1]))throw t;return{hour:n[0],minute:n[1]};var i},_o=(e,r,n)=>n?`${e}:${r.toString().padStart(2,"0")}${n}`:`${e.toString().padStart(2,"0")}:${r.toString().padStart(2,"0")}`;var Lo={exports:{}};Lo.exports=function(){var e={LTS:"h:mm:ss A",LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D, YYYY",LLL:"MMMM D, YYYY h:mm A",LLLL:"dddd, MMMM D, YYYY h:mm A"},r=/(\[[^[]*\])|([-_:/.,()\s]+)|(A|a|YYYY|YY?|MM?M?M?|Do|DD?|hh?|HH?|mm?|ss?|S{1,3}|z|ZZ?)/g,n=/\d\d/,t=/\d\d?/,i=/\d*[^-_:/,()\s\d]+/,o={},a=function(e){return(e=+e)+(e>68?1900:2e3)},s=function(e){return function(r){this[e]=+r}},l=[/[+-]\d\d:?(\d\d)?|Z/,function(e){(this.zone||(this.zone={})).offset=function(e){if(!e)return 0;if("Z"===e)return 0;var r=e.match(/([+-]|\d\d)/g),n=60*r[1]+(+r[2]||0);return 0===n?0:"+"===r[0]?-n:n}(e)}],d=function(e){var r=o[e];return r&&(r.indexOf?r:r.s.concat(r.f))},c=function(e,r){var n,t=o.meridiem;if(t){for(var i=1;i<=24;i+=1)if(e.indexOf(t(i,0,r))>-1){n=i>12;break}}else n=e===(r?"pm":"PM");return n},u={A:[i,function(e){this.afternoon=c(e,!1)}],a:[i,function(e){this.afternoon=c(e,!0)}],S:[/\d/,function(e){this.milliseconds=100*+e}],SS:[n,function(e){this.milliseconds=10*+e}],SSS:[/\d{3}/,function(e){this.milliseconds=+e}],s:[t,s("seconds")],ss:[t,s("seconds")],m:[t,s("minutes")],mm:[t,s("minutes")],H:[t,s("hours")],h:[t,s("hours")],HH:[t,s("hours")],hh:[t,s("hours")],D:[t,s("day")],DD:[n,s("day")],Do:[i,function(e){var r=o.ordinal,n=e.match(/\d+/);if(this.day=n[0],r)for(var t=1;t<=31;t+=1)r(t).replace(/\[|\]/g,"")===e&&(this.day=t)}],M:[t,s("month")],MM:[n,s("month")],MMM:[i,function(e){var r=d("months"),n=(d("monthsShort")||r.map((function(e){return e.slice(0,3)}))).indexOf(e)+1;if(n<1)throw new Error;this.month=n%12||n}],MMMM:[i,function(e){var r=d("months").indexOf(e)+1;if(r<1)throw new Error;this.month=r%12||r}],Y:[/[+-]?\d+/,s("year")],YY:[n,function(e){this.year=a(e)}],YYYY:[/\d{4}/,s("year")],Z:l,ZZ:l};function g(n){var t,i;t=n,i=o&&o.formats;for(var a=(n=t.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g,(function(r,n,t){var o=t&&t.toUpperCase();return n||i[t]||e[t]||i[o].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g,(function(e,r,n){return r||n.slice(1)}))}))).match(r),s=a.length,l=0;l<s;l+=1){var d=a[l],c=u[d],g=c&&c[0],b=c&&c[1];a[l]=b?{regex:g,parser:b}:d.replace(/^\[|\]$/g,"")}return function(e){for(var r={},n=0,t=0;n<s;n+=1){var i=a[n];if("string"==typeof i)t+=i.length;else{var o=i.regex,l=i.parser,d=e.slice(t),c=o.exec(d)[0];l.call(r,c),e=e.replace(c,"")}}return function(e){var r=e.afternoon;if(void 0!==r){var n=e.hours;r?n<12&&(e.hours+=12):12===n&&(e.hours=0),delete e.afternoon}}(r),r}}return function(e,r,n){n.p.customParseFormat=!0,e&&e.parseTwoDigitYear&&(a=e.parseTwoDigitYear);var t=r.prototype,i=t.parse;t.parse=function(e){var r=e.date,t=e.utc,a=e.args;this.$u=t;var s=a[1];if("string"==typeof s){var l=!0===a[2],d=!0===a[3],c=l||d,u=a[2];d&&(u=a[2]),o=this.$locale(),!l&&u&&(o=n.Ls[u]),this.$d=function(e,r,n){try{if(["x","X"].indexOf(r)>-1)return new Date(("X"===r?1e3:1)*e);var t=g(r)(e),i=t.year,o=t.month,a=t.day,s=t.hours,l=t.minutes,d=t.seconds,c=t.milliseconds,u=t.zone,b=new Date,m=a||(i||o?1:b.getDate()),h=i||b.getFullYear(),y=0;i&&!o||(y=o>0?o-1:b.getMonth());var f=s||0,p=l||0,v=d||0,x=c||0;return u?new Date(Date.UTC(h,y,m,f,p,v,x+60*u.offset*1e3)):n?new Date(Date.UTC(h,y,m,f,p,v,x)):new Date(h,y,m,f,p,v,x)}catch(e){return new Date("")}}(r,s,t),this.init(),u&&!0!==u&&(this.$L=this.locale(u).$L),c&&r!=this.format(s)&&(this.$d=new Date("")),o={}}else if(s instanceof Array)for(var b=s.length,m=1;m<=b;m+=1){a[1]=s[m-1];var h=n.apply(this,a);if(h.isValid()){this.$d=h.$d,this.$L=h.$L,this.init();break}m===b&&(this.$d=new Date(""))}else i.call(this,e)}}}();var Ho=ee(Lo.exports),Io={exports:{}};Io.exports=function(e,r,n){r.prototype.isBetween=function(e,r,t,i){var o=n(e),a=n(r),s="("===(i=i||"()")[0],l=")"===i[1];return(s?this.isAfter(o,t):!this.isBefore(o,t))&&(l?this.isBefore(a,t):!this.isAfter(a,t))||(s?this.isBefore(o,t):!this.isAfter(o,t))&&(l?this.isAfter(a,t):!this.isBefore(a,t))}};var No=ee(Io.exports),Yo={exports:{}};Yo.exports=function(e,r){r.prototype.isSameOrAfter=function(e,r){return this.isSame(e,r)||this.isAfter(e,r)}};var Ro=ee(Yo.exports),Wo={exports:{}};Wo.exports=function(e,r){r.prototype.isSameOrBefore=function(e,r){return this.isSame(e,r)||this.isBefore(e,r)}};var Po,Uo,Vo,Zo=ee(Wo.exports),Xo={exports:{}},qo=ee(Xo.exports=(Po={year:0,month:1,day:2,hour:3,minute:4,second:5},Uo={},function(e,r,n){var t,i=function(e,r,n){void 0===n&&(n={});var t=new Date(e),i=function(e,r){void 0===r&&(r={});var n=r.timeZoneName||"short",t=e+"|"+n,i=Uo[t];return i||(i=new Intl.DateTimeFormat("en-US",{hour12:!1,timeZone:e,year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit",timeZoneName:n}),Uo[t]=i),i}(r,n);return i.formatToParts(t)},o=function(e,r){for(var t=i(e,r),o=[],a=0;a<t.length;a+=1){var s=t[a],l=s.type,d=s.value,c=Po[l];c>=0&&(o[c]=parseInt(d,10))}var u=o[3],g=24===u?0:u,b=o[0]+"-"+o[1]+"-"+o[2]+" "+g+":"+o[4]+":"+o[5]+":000",m=+e;return(n.utc(b).valueOf()-(m-=m%1e3))/6e4},a=r.prototype;a.tz=function(e,r){void 0===e&&(e=t);var i=this.utcOffset(),o=this.toDate(),a=o.toLocaleString("en-US",{timeZone:e}),s=Math.round((o-new Date(a))/1e3/60),l=n(a,{locale:this.$L}).$set("millisecond",this.$ms).utcOffset(15*-Math.round(o.getTimezoneOffset()/15)-s,!0);if(r){var d=l.utcOffset();l=l.add(i-d,"minute")}return l.$x.$timezone=e,l},a.offsetName=function(e){var r=this.$x.$timezone||n.tz.guess(),t=i(this.valueOf(),r,{timeZoneName:e}).find((function(e){return"timezonename"===e.type.toLowerCase()}));return t&&t.value};var s=a.startOf;a.startOf=function(e,r){if(!this.$x||!this.$x.$timezone)return s.call(this,e,r);var t=n(this.format("YYYY-MM-DD HH:mm:ss:SSS"),{locale:this.$L});return s.call(t,e,r).tz(this.$x.$timezone,!0)},n.tz=function(e,r,i){var a=i&&r,s=i||r||t,l=o(+n(),s);if("string"!=typeof e)return n(e).tz(s);var d=function(e,r,n){var t=e-60*r*1e3,i=o(t,n);if(r===i)return[t,r];var a=o(t-=60*(i-r)*1e3,n);return i===a?[t,i]:[e-60*Math.min(i,a)*1e3,Math.max(i,a)]}(n.utc(e,a).valueOf(),l,s),c=d[0],u=d[1],g=n(c).utcOffset(u);return g.$x.$timezone=s,g},n.tz.guess=function(){return Intl.DateTimeFormat().resolvedOptions().timeZone},n.tz.setDefault=function(e){t=e}}));zo.extend(No),zo.extend(Zo),zo.extend(Ro),zo.extend(Ho),zo.extend(qo),function(e){e.generateDays=e=>{const r=e.startOf("month"),n=zo(r).startOf("week");return Jo(n).map((e=>Go(e)))},e.generateDaysForCurrentWeek=e=>{const r=e.startOf("week");return Go(r)},e.generateMonths=e=>{const r=[];for(let n=0;n<12;n++){const t=e.month(n);r.push(zo(t))}return r},e.generateDecadeOfYears=e=>{const r=e.year(),n=10*Math.floor(r/10),t=e.year(n),i=[t.subtract(1,"year"),t];for(let e=1;e<11;e++)i.push(t.add(e,"year"));return i},e.getStartEndDecade=e=>{const r=10*Math.floor(+e.format("YYYY")/10);return{beginDecade:r,endDecade:+zo(`${r+9}-01-01`).format("YYYY")}},e.convertTo12HourFormat=e=>{const r=zo(e,"HH:mm");return r.isValid()?r.format("h:mm a"):""},e.isWithinRange=(e,r,n,t="day")=>!r&&!n||(r&&n?e.isBetween(r,n,t,"[]"):r?e.isSameOrAfter(r,t):e.isSameOrBefore(n,t)),e.isPreviousMonthWithinRange=(r,n)=>e.isWithinRange(r.subtract(1,"month"),n,void 0,"month"),e.isPreviousYearWithinRange=(r,n)=>e.isWithinRange(r.subtract(1,"year"),n,void 0,"year"),e.isPreviousDecadeWithinRange=(r,n)=>{const{beginDecade:t}=e.getStartEndDecade(r);return e.isWithinRange(r.year(t).subtract(1,"year"),n,void 0,"year")},e.isNextMonthWithinRange=(r,n)=>e.isWithinRange(r.add(1,"month"),void 0,n,"month"),e.isNextYearWithinRange=(r,n)=>e.isWithinRange(r.add(1,"year"),void 0,n,"year"),e.isNextDecadeWithinRange=(r,n)=>{const{endDecade:t}=e.getStartEndDecade(r);return e.isWithinRange(r.year(t).add(1,"year"),void 0,n,"year")},e.getWeekStartEnd=e=>({start:e.startOf("week").format("YYYY-MM-DD"),end:e.endOf("week").format("YYYY-MM-DD")}),e.getFixedRangeStartEnd=(e,r)=>({start:e.format("YYYY-MM-DD"),end:e.add(r-1,"day").format("YYYY-MM-DD")}),e.isDisabledDay=(r,n,t,i)=>{const o=e.isWithinRange(r,t?zo(t):void 0,i?zo(i):void 0),a=n&&n.includes(r.format("YYYY-MM-DD"));return!o||!!a}}(Vo||(Vo={}));const Jo=e=>{const r=[e];for(let n=1;n<6;n++){const t=e.add(n,"week");r.push(t)}return r},Go=e=>{const r=[];for(let n=0;n<7;n++){const t=e.add(n,"day");r.push(t)}return r},Ko=[1,3,5,7,8,10,12],Qo=[4,6,9,11];var ea,ra;!function(e){e.clampDay=(r,n,t)=>{const i=parseInt(r),o=parseInt(n),a=parseInt(t);return 0==i?"1":Ko.includes(o)?Math.min(i,31).toString():Qo.includes(o)?Math.min(i,30).toString():2===o?e.isLeapYear(a)?Math.min(i,29).toString():Math.min(i,28).toString():r},e.clampMonth=e=>{const r=parseInt(e);return 0==r?"1":r>12?"12":e},e.isLeapYear=e=>e%4==0&&e%100!=0||e%400==0,e.getTimeDiffInMinutes=(e,r,n="HH:mm")=>{const t=zo(e,n);return zo(r,n).diff(t,"minute")},e.toDayjs=e=>e?zo(e):zo(),e.addMinutesToTime=(e,r,n="HH:mm")=>zo(e,n).add(r,"minutes").format(n),e.isSame=(e,r,n="day")=>zo(e).isSame(zo(r),n)}(ea||(ea={})),function(e){e.isDateDisabled=(e,r)=>{const{disabledDates:n,minDate:t,maxDate:i}=r;return!!(e&&n&&n.length&&n.includes(e))||(!(!t||!zo(e).isBefore(t,"day"))||!(!i||!zo(e).isAfter(i,"day")))},e.sanitizeInput=e=>{if(e){const n=r(e);if(zo(n,"YYYY-MM-DD",!0).isValid())return n}return""};const r=e=>{const r=e.match(/^(\d{1,4})-(\d{1,2})-(\d{1,2})$/);if(!r)return"";const[,n,t,i]=r;if(n.length<=2||parseInt(n,10)<100)return"";return`${n.padStart(4,"0")}-${t.padStart(2,"0")}-${i.padStart(2,"0")}`}}(ra||(ra={}));var na;!function(e){e.generate=()=>Math.random().toString(36).substring(2,9)}(na||(na={})),v.span`
    clip-path: inset(50%);
    height: 1px;
    width: 1px;
    overflow: hidden;
    position: absolute;
    white-space: nowrap;
`;const ta=e=>(()=>{const e=h.split(".");return parseInt(e[0],10)>=19})()?e:e?"true":void 0,ia=v.div`
    display: inline-block;
    position: relative;
    width: ${({$size:e})=>e?`${e}px`:"1em"};
    height: ${({$size:e})=>e?`${e}px`:"1em"};
    color: ${e=>e.$color||"currentColor"};
`,oa=F`
	0% {
	  transform: rotate(0deg);
	}
	100% {
	  transform: rotate(360deg);
	}
`,aa=v.div`
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
    animation: ${oa} 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
`,sa=v(aa)`
    animation-delay: -0.45s;
`,la=v(aa)`
    animation-delay: -0.3s;
`,da=v(aa)`
    animation-delay: -0.15s;
`,ca=v.button`
    padding: ${Gt["spacing-8"]} ${Gt["spacing-16"]};
    min-width: 4rem;
    border: ${Jt["width-010"]} ${Jt.solid} transparent;
    transition: all ${qt["duration-250"]} ${qt["ease-default"]};
    border-radius: ${vt};
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;

    // -----------------------------------------------------------------------------
    // BUTTON STYLE + TEXT COLOR
    // -----------------------------------------------------------------------------
    ${e=>{switch(e.$buttonStyle){case"secondary":return x`
                    background-color: ${Zt.bg};
                    border-color: ${e.$buttonIsDanger?Zt["border-error-strong"]:$t};

                    color: ${e.$buttonIsDanger?Zt["text-error"]:Et};

                    &:hover,
                    &:active {
                        @media (pointer: fine) {
                            background-color: ${Zt["bg-hover-neutral"]};
                        }
                    }
                `;case"light":return x`
                    background-color: ${Zt.bg};
                    border-color: ${Zt.border};

                    color: ${e.$buttonIsDanger?Zt["text-error"]:Dt};

                    &:hover,
                    &:active {
                        @media (pointer: fine) {
                            background-color: ${Zt["bg-hover-neutral"]};
                        }
                    }
                `;case"link":return x`
                    background-color: transparent;

                    color: ${e.$buttonIsDanger?Zt["text-error"]:Ct};
                    &:hover,
                    &:active {
                        @media (pointer: fine) {
                            background-color: ${Zt["bg-hover-neutral"]};
                        }
                    }
                `;case"disabled":return x`
                    background-color: ${Zt["bg-disabled"]};

                    cursor: not-allowed;

                    &:hover {
                        box-shadow: none;
                    }

                    color: ${Zt["text-disabled"]};
                `;default:return x`
                    background-color: ${e.$buttonIsDanger?Zt["bg-error-strong"]:xt};

                    ${ei.MaxWidth.sm} {
                        width: 100%;
                    }

                    color: ${wt};

                    &:hover,
                    &:active {
                        @media (pointer: fine) {
                            background-color: ${e.$buttonIsDanger?Zt["bg-error-strong-hover"]:Ft};
                        }
                    }
                `}}}

    // -----------------------------------------------------------------------------
	// BUTTON SIZE + TEXT SIZE
	// -----------------------------------------------------------------------------
	${e=>{switch(e.$buttonSizeStyle){case"small":return x`
                    height: 2.5rem;
                    ${Xt["body-md-semibold"]}

                    ${ei.MaxWidth.xxs} {
                        height: auto;
                    }
                `;case"large":return x`
                    height: 4rem;
                    ${Xt["heading-md-semibold"]}

                    ${ei.MaxWidth.xxs} {
                        height: auto;
                    }
                `;default:return x`
                    height: 3rem;
                    ${Xt["heading-xs-semibold"]}

                    ${ei.MaxWidth.xxs} {
                        height: auto;
                    }
                `}}}
`,ua=v((({color:r,className:t,size:i})=>e(ia,{className:t,$size:i,$color:r,"data-testid":"component-loading-spinner",children:[n(aa,{id:"inner1"}),n(sa,{id:"inner2"}),n(la,{id:"inner3"}),n(da,{id:"inner4"})]})))`
    margin-right: ${e=>e.$hasChildren?"0.5rem":"0"};
`,ga=e=>i.Children.toArray(e).some((e=>"string"==typeof e?""!==e.trim():null!=e)),ba=(r,t)=>{const{children:i,disabled:o=!1,loading:a=!1,styleType:s="default",danger:l=!1,focusableWhenDisabled:d=!1,onClick:c}=r,u=K(r,["children","disabled","loading","styleType","danger","focusableWhenDisabled","onClick"]),g={$buttonStyle:o?"disabled":s,$buttonSizeStyle:"default",$buttonIsDanger:l};return e(ca,Object.assign({ref:t,"data-testid":u["data-testid"]||"button",disabled:o&&!d,"aria-disabled":o,"aria-busy":a,onClick:o?void 0:c},g,u,{children:[a&&n(ua,{$hasChildren:ga(i)}),n("span",{children:i})]}))};ba.displayName="Button.Default";const ma=(r,t)=>{const{children:i,disabled:o=!1,loading:a=!1,styleType:s="default",danger:l=!1,focusableWhenDisabled:d=!1,onClick:c}=r,u=K(r,["children","disabled","loading","styleType","danger","focusableWhenDisabled","onClick"]),g={$buttonStyle:o?"disabled":s,$buttonSizeStyle:"small",$buttonIsDanger:l};return e(ca,Object.assign({ref:t,"data-testid":u["data-testid"]||"button",disabled:o&&!d,"aria-disabled":o,"aria-busy":a,onClick:o?void 0:c},g,u,{children:[a&&n(ua,{$hasChildren:ga(i)}),n("span",{children:i})]}))};ma.displayName="Button.Small";const ha=(r,t)=>{const{children:i,disabled:o=!1,loading:a=!1,styleType:s="default",danger:l=!1,focusableWhenDisabled:d=!1,onClick:c}=r,u=K(r,["children","disabled","loading","styleType","danger","focusableWhenDisabled","onClick"]),g={$buttonStyle:o?"disabled":s,$buttonSizeStyle:"large",$buttonIsDanger:l};return e(ca,Object.assign({ref:t,"data-testid":u["data-testid"]||"button",disabled:o&&!d,"aria-disabled":o,"aria-busy":a,onClick:o?void 0:c},g,u,{children:[a&&n(ua,{$hasChildren:ga(i)}),n("span",{children:i})]}))};ha.displayName="Button.Large";const ya={Default:i.forwardRef(ba),Small:i.forwardRef(ma),Large:i.forwardRef(ha)},fa=e=>{const{textSize:r}=e||{};return x`
        // Text styling
        ${r&&Xt[`${r}-regular`]}

        strong {
            font-weight: ${Xt.Spec["weight-semibold"]};
            ${r&&Xt[`${r}-semibold`]};
        }

        p {
            margin: 0;
        }

        // Link styling
        a {
            font-weight: ${Xt.Spec["weight-semibold"]};
            ${r&&Xt[`${r}-semibold`]}
            color: ${Zt.hyperlink};
            text-decoration: underline;

            svg {
                color: ${Zt["icon-primary"]};
                height: 1lh;
                width: 1em;
                margin-left: 0.4rem;
                vertical-align: middle;
            }

            &:hover,
            &:active,
            &:visited,
            &:focus {
                color: ${Zt["hyperlink-hover"]};

                svg {
                    color: ${Zt["icon-hover"]};
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
    `},pa=(e,r,n=!1)=>x`
        ${Xt[`${e}-${r}`]}
        ${n?"margin-bottom: 1.05em;":"margin-bottom: 0;"}
    `,va=e=>{if(e)return x`
            ${mi(e)}
        `},xa=(e,r,n,t,i)=>x`
    ${pa(e,r||"regular",t)}
    ${((e=!1,r=!1,n)=>r?x`
            display: block;
            ${va(n)}
        `:e?x`
            display: inline;
        `:x`
            display: block;
            ${va(n)}
        `)(n,t,i)}
    color: ${Zt.text};
`,Fa=v.div`
    ${e=>xa(e.$textStyle,e.$weight,e.$inline,e.$paragraph,e.$maxLines)}
`,wa=v.a`
    ${e=>{var r;return x`
        ${pa(e.$textStyle,e.$weight||"regular")}
        color: ${Zt.hyperlink};
        text-decoration: ${null!==(r=e.$underlineStyle)&&void 0!==r?r:"underline"};

        &:hover,
        &:active,
        &:focus {
            color: ${Zt["text-hover"]};
        }
    `}}
`,$a=v(U)`
    height: 1lh;
    width: 1em;
    margin-left: 0.4em;
    vertical-align: middle;
`;var Ea;!function(r){const t=(e,r,t)=>{const o=(t,i)=>{var{weight:o,inline:a,paragraph:s,maxLines:l}=t,d=K(t,["weight","inline","paragraph","maxLines"]);return n(Fa,Object.assign({ref:i,as:a?"span":e,$textStyle:r,$weight:o,$inline:a,$paragraph:s,$maxLines:l},d))};return o.displayName=`Typography.${t}`,i.forwardRef(o)};r.HeadingXXL=t("h1","heading-xxl","HeadingXXL"),r.HeadingXL=t("h2","heading-xl","HeadingXL"),r.HeadingLG=t("h3","heading-lg","HeadingLG"),r.HeadingMD=t("h4","heading-md","HeadingMD"),r.HeadingSM=t("h5","heading-sm","HeadingSM"),r.HeadingXS=t("h6","heading-xs","HeadingXS");const o=(e,r)=>{const t=(r,t)=>{var{weight:i,inline:o,paragraph:a,maxLines:s}=r,l=K(r,["weight","inline","paragraph","maxLines"]);return n(Fa,Object.assign({ref:t,as:o?"span":"p",$textStyle:e,$weight:i,$inline:o,$paragraph:a,$maxLines:s},l))};return t.displayName=`Typography.${r}`,i.forwardRef(t)};r.BodyBL=o("body-baseline","BodyBL"),r.BodyMD=o("body-md","BodyMD"),r.BodySM=o("body-sm","BodySM"),r.BodyXS=o("body-xs","BodyXS");const a=(r,t)=>{const o=(t,i)=>{var{weight:o,children:a,external:s,underlineStyle:l="underline"}=t,d=K(t,["weight","children","external","underlineStyle"]);return e(wa,Object.assign({ref:i,$textStyle:r,$weight:o,$underlineStyle:l},d,{children:[a,s&&n($a,{})]}))};return o.displayName=`Typography.${t}`,i.forwardRef(o)};r.LinkBL=a("body-baseline","LinkBL"),r.LinkMD=a("body-md","LinkMD"),r.LinkSM=a("body-sm","LinkSM"),r.LinkXS=a("body-xs","LinkXS")}(Ea||(Ea={}));const Da=v.div`
    padding: ${Gt["spacing-8"]} ${Gt["spacing-16"]};
    display: flex;

    ${e=>{let r,n;switch(e.$type){case"error":r=Zt["bg-error"](e),n=Zt["border-error"](e);break;case"success":r=Zt["bg-success"](e),n=Zt["border-success"](e);break;case"warning":default:r=Zt["bg-warning"](e),n=Zt["border-warning"](e);break;case"info":r=Zt["bg-info"](e),n=Zt["border-info"](e);break;case"description":r=Zt["bg-strong"](e),n=Zt["border-strong"](e)}return x`
            background: ${r};
            border-left: ${Jt["width-020"]} ${Jt.solid}
                ${n};
        `}}
`,Ca=v.div`
    display: flex;
    align-items: center;
    height: 1lh;
    margin-right: ${Gt["spacing-8"]};

    ${e=>{let r;const n="small"===e.$sizeType?"1.25rem":"1.5rem";switch(e.$type){case"error":r=Zt["icon-error"](e);break;case"success":r=Zt["icon-success"](e);break;case"warning":default:r=Zt["icon-warning"](e);break;case"info":r=Zt["icon-info"](e);break;case"description":r=Zt["icon-subtle"](e)}return x`
            svg {
                color: ${r};
                width: ${n};
                height: ${n};
            }
        `}}
`,ka=v(Ea.LinkSM)`
    ${e=>"small"===e.$sizeType?x`
                ${Xt["body-sm-semibold"]}
                margin-top: ${Gt["spacing-4"]};
            `:x`
                ${Xt["body-md-semibold"]}
                margin-top: ${Gt["spacing-8"]};
            `}
    display: flex;
    align-items: center;
    align-self: flex-start;

    svg {
        height: 1rem;
        width: 1rem;
        margin-left: ${Gt["spacing-4"]};
    }
`,Ba=v.div`
    display: flex;
    flex-direction: column;
    flex: 1;
    overflow-wrap: anywhere;
`,Sa=v.div`
    display: flex;
    flex-direction: column;
    flex: 1;
    order: 1;
    ${e=>{if(e.$showMore&&e.$hasActionLink)return x`
                margin-bottom: ${Gt["spacing-8"]};
            `}}
    ${e=>{const r="linear-gradient(to bottom, black 50%, transparent 100%)";if(!e.$showMore&&e.$maxCollapsedHeight)return`\n                max-height: ${e.$maxCollapsedHeight}px;\n\t\t\t\toverflow: hidden;\n                -webkit-mask-image: ${r};\n                mask-image: ${r};\n\t\t\t`}}
`,Aa=v.div`
    color: ${Zt.text};

    ${e=>"small"===e.$sizeType?fa({textSize:"body-sm"}):fa({textSize:"body-md"})}
`,za=v.button`
    ${e=>"small"===e.$sizeType?x`
                ${Xt["body-sm-semibold"]}
            `:x`
                ${Xt["body-md-semibold"]}
            `}

    display: flex;
    align-items: center;
    align-self: flex-start;
    gap: ${Gt["spacing-4"]};
    margin-top: ${Gt["spacing-8"]};
    order: 2;

    cursor: pointer;
    user-select: none;
    border: none;
    background: transparent;

    color: ${Zt["text-primary"]};
`,Ma=v(P)`
    transform: rotate(${e=>e.$expanded?180:0}deg);
    transition: transform ${qt["duration-350"]} ${qt["ease-standard"]};
`,Oa=v.div`
    height: 1.625rem;
    width: 1.625rem;
    margin-right: 0.5rem;
    flex-shrink: 0;

    svg {
        height: 100%;
        width: 100%;
    }

    ${e=>e.$disabled?e.$active?x`
                    color: ${Zt["icon-selected-disabled"]};
                `:x`
                    color: ${Zt["icon-disabled-subtle"]};
                `:e.$active?x`
                color: ${Zt["icon-selected"]};
            `:x`
            color: ${Zt["icon-subtle"]};
        `};
`,Ta=x`
    margin-bottom: ${e=>e.$bottomMargin||0}rem;

    // Counter matters
    counter-reset: list;

    ${e=>e.$size&&Xt[`${e.$size}-regular`]}
    font-weight: ${Xt.Spec["weight-regular"]};
    color: ${Zt.text};

    // nested lists styling
    ol,
    ul {
        margin-top: 0.5rem;
        margin-bottom: 0.5rem;
    }
`,ja=v.ol`
    ${Ta}

    margin-left: 3em;

    ${ei.MaxWidth.lg} {
        margin-left: 2.5em;
    }

    li {
        position: relative;
    }

    ${e=>{const{reversed:r}=e,n=e.$counterType||"decimal",t=e.$counterSeparator||")";return x`
            li:before {
                content: counter(list, ${n}) "${t}";
                counter-increment: ${r?"list -1":"list"};
                position: absolute;
                left: -2em;
            }
        `}}

    ${e=>{const{reversed:r,start:n}=e;if(n){return x`
                counter-reset: list ${r?n+1:n-1};
            `}}}

    list-style-position: outside;
    list-style-type: none;

    ul > li:before {
        content: "";
    }
`,_a=v.ul`
    ${Ta}

    margin-left: ${e=>e.$hasCustomIcon?0:"2.5em"};
    list-style-type: ${e=>e.$hasCustomIcon?"none":e.$bulletType||"disc"};

    ${e=>e.$hasCustomIcon&&x`
            & > li {
                display: flex;
                align-items: flex-start;
                gap: 0.5em;
            }
        `}
`,La=t=>{var{size:o,bulletType:a,bottomMargin:s,children:l}=t,d=K(t,["size","bulletType","bottomMargin","children"]);const c=void 0!==a&&"string"!=typeof a;return n(_a,Object.assign({$size:o,$bulletType:c?void 0:a,$bottomMargin:s,$hasCustomIcon:c},d,{children:c?i.Children.map(l,(t=>i.isValidElement(t)?i.cloneElement(t,{children:e(r,{children:[n("div",{"aria-hidden":!0,children:a}),n("div",{children:t.props.children})]})}):t)):l}))};La.displayName="TextList.Ul";const Ha=e=>{var{size:r,counterType:t,counterSeparator:i,bottomMargin:o,children:a}=e,s=K(e,["size","counterType","counterSeparator","bottomMargin","children"]);return n(ja,Object.assign({$size:r,$counterType:t,$counterSeparator:i,$bottomMargin:o},s,{children:a}))};Ha.displayName="TextList.Ol";const Ia=La,Na=v.div`
    position: relative;
    display: inline-flex;
    min-width: 10.375rem;
    border-radius: ${Kt.sm};
    border-width: 1px;
    border-style: solid;
    overflow: hidden;
    flex-direction: column;
    height: fit-content;
    background: ${Zt.bg};

    &:has(input:focus-visible) {
        outline: 2px solid ${Zt["focus-ring"]};
        outline-offset: 0;
    }

    ${e=>{if(!e.$indicator)return x`
                justify-content: center;
            `}}

    // Container min width to fit content
    ${e=>{if(e.$useContentWidth)return x`
                min-width: unset;
            `}}

    // apply container border and header background color
    ${e=>"no-border"===e.$styleType?e.$error?e.$disabled?x`
                            border-color: ${Zt["border-error"]};
                        `:x`
                            border-color: ${Zt["border-error"]};

                            &:has(${Va}:hover) {
                                @media (pointer: fine) {
                                    background: ${Zt["bg-hover-subtle"]};
                                }
                            }
                        `:e.$disabled?e.$selected?x`
                            border: none;
                            background: ${Zt["bg-selected-disabled"]};
                        `:x`
                            border: none;
                        `:e.$selected?x`
                        border: none;
                        background: ${Zt["bg-selected"]};

                        &:has(${Va}:hover) {
                            @media (pointer: fine) {
                                background: ${Zt["bg-selected-hover"]};

                                & ${Wa} {
                                    color: ${Zt["text-selected-hover"]};
                                }

                                & ${rs} {
                                    color: ${Zt["icon-selected-hover"]};
                                }
                            }
                        }
                    `:x`
                    border: none;

                    &:has(${Va}:hover) {
                        @media (pointer: fine) {
                            background: ${Zt["bg-hover-subtle"]};
                        }
                    }
                `:e.$error?e.$disabled?x`
                            border-color: ${Zt["border-error"]};
                        `:x`
                            border-color: ${Zt["border-error"]};

                            &:has(${Va}:hover) {
                                @media (pointer: fine) {
                                    background: ${Zt["bg-hover-subtle"]};
                                }
                            }
                        `:e.$disabled?e.$selected?x`
                            border-color: ${Zt["border-selected-disabled"]};
                            background: ${Zt["bg-selected-disabled"]};
                        `:x`
                            border-color: ${Zt["border-disabled"]};
                            background: ${Zt["bg-disabled"]};
                        `:e.$selected?x`
                        border-color: ${Zt["border-selected"]};
                        background: ${Zt["bg-selected"]};

                        &:has(${Va}:hover) {
                            @media (pointer: fine) {
                                background: ${Zt["bg-selected-hover"]};

                                & ${Wa} {
                                    color: ${Zt["text-selected-hover"]};
                                }

                                & ${rs} {
                                    color: ${Zt["icon-selected-hover"]};
                                }
                            }
                        }
                    `:x`
                    border-color: ${Zt.border};

                    &:has(${Va}:hover) {
                        @media (pointer: fine) {
                            background: ${Zt["bg-hover-subtle"]};
                        }
                    }
                `}
`,Ya=v.input`
    position: absolute;
    height: 100%;
    width: 100%;
    cursor: ${e=>e.$disabledVisual?"not-allowed":"pointer"};
    top: 0;
    left: 0;
    opacity: 0;

    /* Hide appearance but keep it focusable using keyboard interactions */
    appearance: none;
    background: transparent;
    border: none;
`,Ra=v.div`
    display: flex;
`,Wa=v.div`
    display: flex;
    flex-direction: column;
    overflow-wrap: anywhere;
    width: 100%;
    overflow: hidden;

    // apply header container text color
    ${e=>e.$disabled?e.$selected?x`
                    color: ${Zt["text-selected-disabled"]};
                `:x`
                    color: ${Zt["text-disabled"]};
                `:e.$selected?x`
                color: ${Zt["text-selected"]};
            `:x`
            color: ${Zt.text};
        `}
`,Pa=v.label`
    ${e=>e.$selected?Xt["body-baseline-semibold"]:Xt["body-baseline-regular"]};
    overflow: hidden;
    display: -webkit-box;
    text-overflow: ellipsis;
    -webkit-box-orient: vertical;
    overflow-wrap: break-word;
    -webkit-line-clamp: ${e=>{var r,n;return null!==(n=null===(r=e.$maxLines)||void 0===r?void 0:r.desktop)&&void 0!==n?n:"none"}};
    ${ei.MaxWidth.lg} {
        -webkit-line-clamp: ${e=>{var r,n;return null!==(n=null===(r=e.$maxLines)||void 0===r?void 0:r.tablet)&&void 0!==n?n:"none"}};
    }
    ${ei.MaxWidth.sm} {
        -webkit-line-clamp: ${e=>{var r,n;return null!==(n=null===(r=e.$maxLines)||void 0===r?void 0:r.mobile)&&void 0!==n?n:"none"}};
    }
`,Ua=v.div`
    ${Xt["body-md-regular"]}
    margin-top: 0.5rem;

    z-index: 1; // forces sublabel to render above the input
    pointer-events: none; // to allow click events to be passed to the input

    strong,
    b {
        ${Xt["body-md-semibold"]}
    }
`,Va=v.div`
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
`,Za=v.div`
    display: flex;
    height: 100%;
    width: 100%;
    position: relative;
    padding: ${e=>e.$addPadding?"0.6875rem 0rem 0.6875rem 1rem":"0.6875rem 1rem"};
`,Xa=v.button`
    color: ${e=>e.$disabled?Zt["text-disabled"]:Zt["text-error"]};
    white-space: nowrap;
    ${Xt["body-md-semibold"]}
    height: fit-content;
    padding: 0.6875rem 1rem 0.6875rem 0.5rem;
    border: none;
    background: none;

    cursor: ${e=>e.$disabled?"not-allowed":"pointer"};
`,qa=v.button`
    color: ${e=>e.disabled?Zt["text-disabled"]:Zt["text-primary"]};
    ${Xt["body-baseline-semibold"]}
    display: flex;
    align-items: center;
    justify-content: flex-end;
    border: none;
    background-color: ${Zt.bg};
    cursor: ${e=>e.disabled?"not-allowed":"pointer"};
    padding: 0 1rem 0.6875rem 1rem;
    padding-top: ${e=>e.$paddingTopRequired?"0.6875rem":"0rem"};
    width: 100%;

    svg {
        width: 1em;
        height: 1em;
        margin-left: 0.5rem;
    }
`,Ja=v.div`
    width: 100%;
    color: ${e=>e.$disabled?Zt["text-disabled"]:Zt["text-error"]};
    border: none;
    background: ${Zt.bg};
    cursor: ${e=>e.$disabled?"not-allowed":"pointer"};
    padding: 0.6875rem 1rem 0.5rem 1rem;
`,Ga=v((r=>{var{type:t,className:i,children:o,actionLink:s,actionLinkIcon:l,sizeType:d="default",showIcon:c=!1,customIcon:g,maxCollapsedHeight:b,role:m}=r,h=K(r,["type","className","children","actionLink","actionLinkIcon","sizeType","showIcon","customIcon","maxCollapsedHeight","role"]);const[f,p]=a(!1),[v,x]=a(!1),{height:F,ref:w}=ho(),[$]=a((()=>na.generate())),E=y((()=>{p(!b),x(D())}),[b,F]),D=()=>!(!F||!b)&&F>b;u((()=>{E()}),[b,F,E]);return e(Da,{className:i,$type:t,$sizeType:d,"aria-label":`${(()=>{switch(t){case"success":return"Success";case"warning":return"Warning";case"error":return"Error";case"info":return"Information";case"description":return"Description";default:return"Alert"}})()}`,"data-testid":h["data-testid"],role:m,children:[c&&n(Ca,{$sizeType:d,$type:t,children:(()=>{if(t&&g)return g;switch(t){case"success":return n(W,{"aria-hidden":!0});case"warning":return n(Y,{"aria-hidden":!0});case"error":return n(N,{"aria-hidden":!0});case"info":case"description":return n(R,{"aria-hidden":!0});default:return null}})()}),e(Ba,{children:[v&&e(za,{$sizeType:d,$type:t,type:"button","aria-expanded":f,"aria-controls":$,onClick:()=>p(!f),children:["Show ",f?"less":"more",n(Ma,{$expanded:f})]}),e(Sa,{id:$,$maxCollapsedHeight:D()?b:void 0,$showMore:f,$hasActionLink:!!s,inert:ta(!!b&&!f),children:[n(Aa,{ref:w,$type:t,$sizeType:d,children:o}),s?e(ka,Object.assign({"data-testid":"action-link",$type:t,$sizeType:d,underlineStyle:"none"},s,{children:[s.children,l||n(I,{})]})):null]})]})]})}))`
    width: 100%;
    user-select: none;
`,Ka=v.div`
    padding: 0 1rem;
    padding-top: 0.6875rem;
    padding-bottom: ${e=>e.$isFinalItem?"0.6875rem":"0.5rem"};
    background-color: ${Zt.bg};
    ${fa({textSize:"body-md"})}

    ${e=>e.$disabled?x`
                color: ${Zt["text-disabled"]};
            `:e.$selected?x`
                color: ${Zt["text-selected"]};
            `:x`
                color: ${Zt.text};
            `}
`,Qa=v(Ea.BodyMD)`
    color: ${e=>e.$disabled?Zt["text-disabled"]:Zt["text-error"]};
`,es=v(Ia)`
    color: ${e=>e.$disabled?Zt["text-disabled"]:Zt["text-error"]};
`,rs=v((({type:e,active:r=!1,disabled:t,className:i})=>{let o;switch(e){case"checkbox":o=n(r?J:q,{});break;case"radio":o=n(r?Z:V,{});break;case"tick":o=n(G,{});break;case"cross":o=n(X,{});break;default:o=null}return n(Oa,{className:i,$active:r,$disabled:t,"aria-hidden":!0,children:o})}))`
    ${e=>e.$disabled?e.$selected?x`
                    color: ${Zt["icon-selected-disabled"]};
                `:x`
                    color: ${Zt["icon-disabled-subtle"]};
                `:e.$selected?x`
                color: ${Zt["icon-selected"]};
            `:x`
            color: ${Zt["icon-subtle"]};
        `};
`,ns=v.button`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: ${Gt["spacing-24"]};
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

        ${({$highlight:e})=>e&&x`
                background-color: ${Zt["bg-hover-neutral"]};
            `}
    }
`,ts=i.forwardRef(((e,r)=>{var{children:t,focusHighlight:i=!0,focusOutline:o="none",type:a="button"}=e,s=K(e,["children","focusHighlight","focusOutline","type"]);return n(ns,Object.assign({ref:r,$outline:o,$highlight:i,type:a},s,{children:t}))})),is=v.div`
    overflow: hidden;

    ${ei.MaxWidth.xxs} {
        max-width: 100%;
    }
`,os=v.div`
    position: relative;
    width: 100%;
    padding: ${Gt["spacing-8"]} ${Gt["spacing-20"]}
        ${Gt["spacing-24"]} ${Gt["spacing-20"]};
    display: flex;
    flex-direction: column;
    background: ${Zt.bg};
    border: ${Jt["width-010"]} ${Jt.solid} ${Zt.border};
    border-radius: ${Kt.sm};
`,as=v.div`
    display: flex;
    align-items: center;
    justify-content: space-between;

    ${ei.MaxWidth.xxs} {
        flex-direction: column;
        width: 100%;
    }
`,ss=v.div`
    display: flex;
    justify-content: flex-end;
    margin-top: ${Gt["spacing-16"]};
    gap: ${Gt["spacing-8"]};

    ${ei.MaxWidth.xxs} {
        flex-direction: column-reverse; // FIXME: this breaks tab focus
        margin-top: ${Gt["spacing-32"]};
    }
`,ls=v.div`
    display: flex;
    align-items: center;
    margin-right: ${Gt["spacing-32"]};

    ${ei.MaxWidth.xxs} {
        margin-right: 0;
        width: 100%;
    }
`,ds=v.div`
    display: flex;
    gap: ${Gt["spacing-8"]};

    ${ei.MaxWidth.lg} {
        flex-direction: column;
    }

    ${ei.MaxWidth.xxs} {
        flex-direction: row;
        width: 100%;
    }
`,cs=v.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    ${ei.MaxWidth.xxs} {
        width: 6rem;
    }
`,us=v(ts)`
    width: 5rem;
    padding: ${Gt["spacing-16"]} 0;
    color: ${Zt.icon};

    svg {
        height: 1rem;
        width: 1rem;
    }

    &:hover {
        color: ${Zt["icon-hover"]};
    }
`,gs=v(Ea.BodyBL)`
    flex-shrink: 0;
    width: 1.5rem;
    text-align: center;
`,bs=v(Eo)`
    height: calc(3rem - 2px);
    width: 5rem;
    display: flex;
    align-items: center;
    justify-content: center;

    ${ei.MaxWidth.xxs} {
        width: 100%;
    }
`,ms=v(Co)`
    text-align: center;
    width: 100%;

    &:focus::placeholder {
        color: transparent;
    }
`,hs=v((t=>{var{type:i="checkbox",indicator:s,checked:l,styleType:d="default",children:c,childrenMaxLines:g,subLabel:b,disabled:m,error:h,name:y,id:v,className:x,compositeSection:F,removable:w,focusableWhenDisabled:$,useContentWidth:E,onRemove:D,onChange:C,"data-testid":k,"aria-describedby":B}=t,S=K(t,["type","indicator","checked","styleType","children","childrenMaxLines","subLabel","disabled","error","name","id","className","compositeSection","removable","focusableWhenDisabled","useContentWidth","onRemove","onChange","data-testid","aria-describedby"]);const{collapsible:A=!0,errors:z,children:M,initialExpanded:O}=F||{},[T,j]=a(l),[_,L]=a(!!O),I=f((()=>{const e=Array.isArray(z)&&(null==z?void 0:z.length)>0,r=!Array.isArray(z)&&!!z;return e||r}),[z]),[N]=a(na.generate()),Y=v?`${v}`:`tg-${N}`,R=o(null),W=!!m&&!!$,P=!!m&&!$,U=!!m;u((()=>{j(l)}),[l]),u((()=>{T&&L(null==O||O)}),[T]);const V=e=>{if(U)e.preventDefault();else if(C)C(e);else switch(i){case"checkbox":j((e=>!e));break;case"radio":case"yes":case"no":T||j(!0)}},Z=()=>{m||L(!_)},X=()=>{m||!D||D()},q=()=>{var e;null===(e=null==R?void 0:R.current)||void 0===e||e.click()},J=e=>{e.stopPropagation()},G=()=>{let e;switch(i){case"yes":e="tick";break;case"no":e="cross";break;case"checkbox":case"radio":e=i}return n(rs,{type:e,active:T,disabled:m,$selected:T,$disabled:m})},Q=()=>{if(!b)return null;let e;return e="function"==typeof b?b():b,n(Ua,{"data-id":"toggle-sublabel",id:`${Y}-sublabel`,"aria-hidden":!0,children:e})},ee=t=>e(r,{children:[n(Qa,{weight:"semibold",$disabled:m,children:"Error"}),n(es,{$disabled:m,children:null==t?void 0:t.map(((e,r)=>n("li",{id:`${Y}-error-list-item-${r}`,children:n(Qa,{weight:"semibold",$disabled:m,children:e})},r)))})]});return e(Na,{$selected:T,$disabled:m,className:x,$styleType:d,$error:h,$indicator:s,$useContentWidth:E,id:v,"data-testid":k,children:[(()=>{const r=["string"==typeof b?`${Y}-sublabel`:null,B].filter(Boolean).join(" ")||void 0;return e(Va,{id:`${Y}-header-container`,$disabled:m,$error:h,$selected:T,$indicator:s,$styleType:d,children:[n(Za,{$addPadding:w,children:e(Ra,{id:`${Y}-input-container`,onClick:q,children:[n(Ya,Object.assign({ref:R,name:y,id:`${Y}-input`,type:"checkbox"===i?"checkbox":"radio","data-testid":"toggle-input",disabled:P,"aria-disabled":W,$disabledVisual:m,onChange:V,onClick:J,checked:T,tabIndex:W?0:void 0,"aria-describedby":r},S)),s&&G(),e(Wa,{$selected:T,$disabled:m,children:[n(Pa,{htmlFor:`${Y}-input`,"data-testid":"toggle-label",id:`${Y}-label`,$maxLines:g,$selected:T,children:c}),b&&Q()]})]})}),w&&n(Xa,{type:"button",$disabled:m,onClick:X,id:`${Y}-remove-button`,children:"Remove"})]})})(),M&&e("div",{children:[(!A||_)&&n(Ka,{"data-id":"toggle-composite-children",$isFinalItem:!A,$disabled:m,children:M}),A&&!_&&I&&n(Ja,{$disabled:m,onClick:Z,id:`${Y}-error-alert`,children:n(Ga,{type:m?"description":"error",className:x,showIcon:!0,children:Array.isArray(z)?ee(z):z})}),A&&e(qa,{$paddingTopRequired:!_&&!I,disabled:m,onClick:Z,"data-testid":_?"collapse-button":"expand-button",children:[_?"Show less":"Show more",n(_?H:p,{"aria-hidden":!0})]})]})]})}))`
    min-width: 5rem;
    flex: 1;
`,ys=v(ya.Small)`
    width: 7rem;

    ${ei.MaxWidth.sm} {
        flex: 1;
    }

    ${ei.MaxWidth.xxs} {
        width: 100%;
    }
`;var fs,ps,vs;!function(e){e.HOUR_UP="hour-up",e.HOUR_DOWN="hour-down",e.MINUTE_UP="minute-up",e.MINUTE_DOWN="minute-down"}(fs||(fs={})),function(e){e.HOUR="hour",e.MINUTE="minute"}(ps||(ps={})),function(e){e.AM="am",e.PM="pm"}(vs||(vs={}));const xs=({id:r,value:t,show:i,format:s,onChange:l,onCancel:d})=>{const c=Ao.getTimeValues(s,t),[g,b]=a(c.hour),[m,h]=a(c.minute),[f,v]=a(c.period),x=o(null),F=o(null);u((()=>{if(i&&x.current&&x.current.focus({preventScroll:!0}),i){const{hour:e,minute:r,period:n}=Ao.getTimeValues(s,t);b(e),h(r),v(n)}}),[i,t,s]),u((()=>{const e=x.current,r=F.current;return e&&e.addEventListener("keydown",w),r&&r.addEventListener("keydown",w),()=>{e&&e.removeEventListener("keydown",w),r&&r.removeEventListener("keydown",w)}}),[]);const w=e=>{["Digit0","Digit1","Digit2","Digit3","Digit4","Digit5","Digit6","Digit7","Digit8","Digit9","Tab","Backspace","Delete","ArrowLeft","ArrowRight","ArrowUp","ArrowDown"].includes(e.code)||["Backspace","0","1","2","3","4","5","6","7","8","9"].includes(e.key)||e.preventDefault()},$=y((e=>{switch(e.currentTarget.name){case fs.MINUTE_UP:h(Ao.updateMinutes(m,"add"));break;case fs.MINUTE_DOWN:h(Ao.updateMinutes(m,"minus"));break;case fs.HOUR_UP:b(Ao.updateHours(g,"add"));break;case fs.HOUR_DOWN:b(Ao.updateHours(g,"minus"))}}),[g,m]),E=e=>{e.target.select()},D=e=>{const r=e.target.value;switch(e.target.name){case ps.HOUR:r.length<=2&&b(r);break;case ps.MINUTE:r.length<=2&&h(r)}},C=e=>{const r=parseInt(e.target.value);if(!isNaN(r))switch(e.target.name){case ps.HOUR:{const n=r>23||r<0?c.hour:Ao.convertHourTo12HourFormat(e.target.value);b(n);break}case ps.MINUTE:{const n=r>59||r<0?c.minute:e.target.value;h(ko.padValue(n));break}}},k=e=>{switch(e.target.name){case vs.AM:v(So.AM);break;case vs.PM:v(So.PM)}},B=e=>r?`${r}-${e}`:e;return n(is,{children:e(os,{"data-testid":B("timepicker-dropdown"),inert:ta(!i),children:[e(as,{children:[e(ls,{children:[e(cs,{children:[n(us,{"aria-label":"increase hour",name:fs.HOUR_UP,tabIndex:-1,onClick:$,"data-testid":B("hour-increment-button"),children:n(H,{})}),n(bs,{children:n(ms,{"aria-label":"hour",type:"number",name:ps.HOUR,id:"hour",maxLength:2,pattern:"[0-9]{2}",ref:x,value:g,onFocus:E,onChange:D,onBlur:C,min:1,max:12,placeholder:"HH","data-testid":B("hour-input")})}),n(us,{"aria-label":"decrease hour",name:fs.HOUR_DOWN,tabIndex:-1,onClick:$,"data-testid":B("hour-decrement-button"),children:n(p,{})})]}),n(gs,{children:":"}),e(cs,{children:[n(us,{"aria-label":"increase minute",name:fs.MINUTE_UP,tabIndex:-1,onClick:$,"data-testid":B("minute-increment-button"),children:n(H,{})}),n(bs,{children:n(ms,{"aria-label":"minute",type:"number",name:ps.MINUTE,id:"minute",maxLength:2,pattern:"[0-9]{2}",ref:F,value:m,onChange:D,onBlur:C,onFocus:E,min:0,max:59,placeholder:"MM","data-testid":B("minute-input")})}),n(us,{"aria-label":"decrease minute",name:fs.MINUTE_DOWN,tabIndex:-1,onClick:$,"data-testid":B("minute-decrement-button"),children:n(p,{})})]})]}),e(ds,{children:[n(hs,{checked:f===So.AM,name:vs.AM,type:"radio",onChange:k,"data-testid":B("am-toggle"),"aria-label":"AM",children:"AM"}),n(hs,{checked:f===So.PM,name:vs.PM,type:"radio",onChange:k,"data-testid":B("pm-toggle"),"aria-label":"PM",children:"PM"})]})]}),e(ss,{children:[n(ys,{type:"button",styleType:"secondary",onClick:d,"data-testid":B("cancel-button"),children:"Cancel"}),n(ys,{type:"button",onClick:()=>{let e;e="24hr"===s?Ao.convertTo24HourFormat({hour:g,minute:m,period:f}):`${g}:${m}${f}`,l(e)},disabled:""===g||""===m,"data-testid":B("confirm-button"),children:"Done"})]})]})})};v.div`
    position: relative;
`;const Fs=v(Co)`
    height: calc(3rem - 2px); // exclude top and bottom borders
`,ws=e=>{var{id:r,disabled:t=!1,readOnly:i=!1,error:s,value:l,placeholder:d,format:c="24hr",onChange:u,onFocus:g,onBlur:b,alignment:m,dropdownZIndex:h,dropdownRootNode:f,"aria-labelledby":p,"aria-describedby":v}=e,x=K(e,["id","disabled","readOnly","error","value","placeholder","format","onChange","onFocus","onBlur","alignment","dropdownZIndex","dropdownRootNode","aria-labelledby","aria-describedby"]);const[F,w]=a(!1),$=o(null),E=o(null),D=y((()=>"12hr"===c?"HH:MMam":"HH:MM"),[c]),C=()=>{var e;null===(e=E.current)||void 0===e||e.focus({preventScroll:!0})},k=()=>{t||i||w(!0)},B=()=>{w(!1),C()},S=e=>{null==u||u(e),w(!1),C()},A=()=>{null==g||g()},z=e=>{var r;if(F)return;const n=e.relatedTarget;n&&(null===(r=$.current)||void 0===r?void 0:r.contains(n))||null==b||b()},M=e=>{t||i||"Enter"!==e.key&&" "!==e.key&&"ArrowDown"!==e.key||(e.preventDefault(),k())};return n(po,{enabled:!i&&!t,isOpen:F,renderElement:()=>n(Do,Object.assign({ref:$,role:"group",$readOnly:i,$disabled:t,$focused:F,$error:s},x,{children:n(Fs,{ref:E,readOnly:!0,placeholder:d||D(),value:Ao.formatDisplayValue(l,c),role:"combobox","aria-invalid":s||void 0,"aria-disabled":t||void 0,"aria-readonly":i||void 0,"aria-labelledby":p,"aria-describedby":v,"aria-expanded":!t&&!i&&F,"data-testid":r?`${r}-timepicker-selector`:"timepicker-selector",onFocus:A,onClick:k,onKeyDown:M,onBlur:z})})),renderDropdown:({styles:e,setFloatingRef:t,getFloatingProps:i})=>n("div",Object.assign({ref:t,style:e,role:"dialog","aria-label":"Time picker"},i(),{children:n(xs,{id:r,show:F,value:l,format:c,onCancel:B,onChange:S})})),onOpen:k,onClose:()=>{w(!1),null==b||b()},onDismiss:B,offset:8,alignment:m,customZIndex:h,rootNode:f})};export{ws as Timepicker};
//# sourceMappingURL=index.js.map
