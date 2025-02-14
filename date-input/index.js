import{jsxs as e,Fragment as r,jsx as t}from"react/jsx-runtime";import*as n from"react";import a,{useRef as i,useState as o,isValidElement as s,createRef as l,cloneElement as d,PureComponent as c,useEffect as u,useLayoutEffect as h,useCallback as b,useMemo as g,useImperativeHandle as m}from"react";import{ChevronDownIcon as f}from"@lifesg/react-icons/chevron-down";import y,{css as p,keyframes as v,useTheme as x}from"styled-components";import{useFloatingTree as D,useFloating as w,autoUpdate as $,offset as F,flip as E,shift as C,limitShift as S,size as O,useTransitionStyles as B,useClick as M,useDismiss as A,useInteractions as z,FloatingPortal as k,FloatingFocusManager as Y}from"@floating-ui/react";import{findDOMNode as j}from"react-dom";import{ChevronLeftIcon as T}from"@lifesg/react-icons/chevron-left";import{ChevronRightIcon as _}from"@lifesg/react-icons/chevron-right";function R(e,r){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(n=Object.getOwnPropertySymbols(e);a<n.length;a++)r.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(t[n[a]]=e[n[a]])}return t}"function"==typeof SuppressedError&&SuppressedError;var H="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};function L(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var I=Array.isArray,W="object"==typeof H&&H&&H.Object===Object&&H,N="object"==typeof self&&self&&self.Object===Object&&self,P=W||N||Function("return this")(),V=P.Symbol,Z=V,U=Object.prototype,K=U.hasOwnProperty,J=U.toString,q=Z?Z.toStringTag:void 0;var X=function(e){var r=K.call(e,q),t=e[q];try{e[q]=void 0;var n=!0}catch(e){}var a=J.call(e);return n&&(r?e[q]=t:delete e[q]),a},G=Object.prototype.toString;var Q=X,ee=function(e){return G.call(e)},re=V?V.toStringTag:void 0;var te=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":re&&re in Object(e)?Q(e):ee(e)};var ne=te,ae=function(e){return null!=e&&"object"==typeof e};var ie=function(e){return"symbol"==typeof e||ae(e)&&"[object Symbol]"==ne(e)},oe=I,se=ie,le=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,de=/^\w*$/;var ce=function(e,r){if(oe(e))return!1;var t=typeof e;return!("number"!=t&&"symbol"!=t&&"boolean"!=t&&null!=e&&!se(e))||(de.test(e)||!le.test(e)||null!=r&&e in Object(r))};var ue=function(e){var r=typeof e;return null!=e&&("object"==r||"function"==r)},he=te,be=ue;var ge,me=function(e){if(!be(e))return!1;var r=he(e);return"[object Function]"==r||"[object GeneratorFunction]"==r||"[object AsyncFunction]"==r||"[object Proxy]"==r},fe=P["__core-js_shared__"],ye=(ge=/[^.]+$/.exec(fe&&fe.keys&&fe.keys.IE_PROTO||""))?"Symbol(src)_1."+ge:"";var pe=function(e){return!!ye&&ye in e},ve=Function.prototype.toString;var xe=me,De=pe,we=ue,$e=function(e){if(null!=e){try{return ve.call(e)}catch(e){}try{return e+""}catch(e){}}return""},Fe=/^\[object .+?Constructor\]$/,Ee=Function.prototype,Ce=Object.prototype,Se=Ee.toString,Oe=Ce.hasOwnProperty,Be=RegExp("^"+Se.call(Oe).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");var Me=function(e,r){return null==e?void 0:e[r]},Ae=function(e){return!(!we(e)||De(e))&&(xe(e)?Be:Fe).test($e(e))},ze=Me;var ke=function(e,r){var t=ze(e,r);return Ae(t)?t:void 0},Ye=ke(Object,"create"),je=Ye;var Te=function(){this.__data__=je?je(null):{},this.size=0};var _e=function(e){var r=this.has(e)&&delete this.__data__[e];return this.size-=r?1:0,r},Re=Ye,He=Object.prototype.hasOwnProperty;var Le=function(e){var r=this.__data__;if(Re){var t=r[e];return"__lodash_hash_undefined__"===t?void 0:t}return He.call(r,e)?r[e]:void 0},Ie=Ye,We=Object.prototype.hasOwnProperty;var Ne=function(e){var r=this.__data__;return Ie?void 0!==r[e]:We.call(r,e)},Pe=Ye;var Ve=function(e,r){var t=this.__data__;return this.size+=this.has(e)?0:1,t[e]=Pe&&void 0===r?"__lodash_hash_undefined__":r,this},Ze=Te,Ue=_e,Ke=Le,Je=Ne,qe=Ve;function Xe(e){var r=-1,t=null==e?0:e.length;for(this.clear();++r<t;){var n=e[r];this.set(n[0],n[1])}}Xe.prototype.clear=Ze,Xe.prototype.delete=Ue,Xe.prototype.get=Ke,Xe.prototype.has=Je,Xe.prototype.set=qe;var Ge=Xe;var Qe=function(){this.__data__=[],this.size=0};var er=function(e,r){return e===r||e!=e&&r!=r};var rr=function(e,r){for(var t=e.length;t--;)if(er(e[t][0],r))return t;return-1},tr=rr,nr=Array.prototype.splice;var ar=function(e){var r=this.__data__,t=tr(r,e);return!(t<0)&&(t==r.length-1?r.pop():nr.call(r,t,1),--this.size,!0)},ir=rr;var or=function(e){var r=this.__data__,t=ir(r,e);return t<0?void 0:r[t][1]},sr=rr;var lr=function(e){return sr(this.__data__,e)>-1},dr=rr;var cr=function(e,r){var t=this.__data__,n=dr(t,e);return n<0?(++this.size,t.push([e,r])):t[n][1]=r,this},ur=Qe,hr=ar,br=or,gr=lr,mr=cr;function fr(e){var r=-1,t=null==e?0:e.length;for(this.clear();++r<t;){var n=e[r];this.set(n[0],n[1])}}fr.prototype.clear=ur,fr.prototype.delete=hr,fr.prototype.get=br,fr.prototype.has=gr,fr.prototype.set=mr;var yr=fr,pr=ke(P,"Map"),vr=Ge,xr=yr,Dr=pr;var wr=function(e){var r=typeof e;return"string"==r||"number"==r||"symbol"==r||"boolean"==r?"__proto__"!==e:null===e};var $r=function(e,r){var t=e.__data__;return wr(r)?t["string"==typeof r?"string":"hash"]:t.map},Fr=$r;var Er=function(e){var r=Fr(this,e).delete(e);return this.size-=r?1:0,r},Cr=$r;var Sr=function(e){return Cr(this,e).get(e)},Or=$r;var Br=function(e){return Or(this,e).has(e)},Mr=$r;var Ar=function(e,r){var t=Mr(this,e),n=t.size;return t.set(e,r),this.size+=t.size==n?0:1,this},zr=function(){this.size=0,this.__data__={hash:new vr,map:new(Dr||xr),string:new vr}},kr=Er,Yr=Sr,jr=Br,Tr=Ar;function _r(e){var r=-1,t=null==e?0:e.length;for(this.clear();++r<t;){var n=e[r];this.set(n[0],n[1])}}_r.prototype.clear=zr,_r.prototype.delete=kr,_r.prototype.get=Yr,_r.prototype.has=jr,_r.prototype.set=Tr;var Rr=_r;function Hr(e,r){if("function"!=typeof e||null!=r&&"function"!=typeof r)throw new TypeError("Expected a function");var t=function(){var n=arguments,a=r?r.apply(this,n):n[0],i=t.cache;if(i.has(a))return i.get(a);var o=e.apply(this,n);return t.cache=i.set(a,o)||i,o};return t.cache=new(Hr.Cache||Rr),t}Hr.Cache=Rr;var Lr=Hr;var Ir=function(e){var r=Lr(e,(function(e){return 500===t.size&&t.clear(),e})),t=r.cache;return r},Wr=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,Nr=/\\(\\)?/g,Pr=Ir((function(e){var r=[];return 46===e.charCodeAt(0)&&r.push(""),e.replace(Wr,(function(e,t,n,a){r.push(n?a.replace(Nr,"$1"):t||e)})),r}));var Vr=function(e,r){for(var t=-1,n=null==e?0:e.length,a=Array(n);++t<n;)a[t]=r(e[t],t,e);return a},Zr=I,Ur=ie,Kr=V?V.prototype:void 0,Jr=Kr?Kr.toString:void 0;var qr=function e(r){if("string"==typeof r)return r;if(Zr(r))return Vr(r,e)+"";if(Ur(r))return Jr?Jr.call(r):"";var t=r+"";return"0"==t&&1/r==-1/0?"-0":t},Xr=qr;var Gr=I,Qr=ce,et=Pr,rt=function(e){return null==e?"":Xr(e)};var tt=ie;var nt=function(e,r){return Gr(e)?e:Qr(e,r)?[e]:et(rt(e))},at=function(e){if("string"==typeof e||tt(e))return e;var r=e+"";return"0"==r&&1/e==-1/0?"-0":r};var it=function(e,r){for(var t=0,n=(r=nt(r,e)).length;null!=e&&t<n;)e=e[at(r[t++])];return t&&t==n?e:void 0};var ot=L((function(e,r,t){var n=null==e?void 0:it(e,r);return void 0===n?t:n}));const st=(e,r,t)=>ot(t,r)||ot(e,r),lt=(e,r)=>{const t=r||e.defaultValue;return ot(e.collections,t)},dt={collections:{lifesg:{"duration-150":"150ms","duration-250":"250ms","duration-350":"350ms","duration-500":"500ms","duration-800":"800ms","duration-1000":"1000ms","ease-default":"cubic-bezier(0.45, 0.05, 0.55, 0.95)","ease-standard":"cubic-bezier(0.86, 0, 0.07, 1)","ease-entrance":"cubic-bezier(0.18, 0.13, 0, 1)","ease-exit":"cubic-bezier(1, 0, 0.8, 0.85)"}},defaultValue:"lifesg"},ct=e=>r=>{var t;const n=r.theme,a=lt(dt,null==n?void 0:n.motionScheme);return(null===(t=null==n?void 0:n.overrides)||void 0===t?void 0:t.motion)?st(a,e,n.overrides.motion):a[e]},ut={"duration-150":ct("duration-150"),"duration-250":ct("duration-250"),"duration-350":ct("duration-350"),"duration-500":ct("duration-500"),"duration-800":ct("duration-800"),"duration-1000":ct("duration-1000"),"ease-default":ct("ease-default"),"ease-standard":ct("ease-standard"),"ease-entrance":ct("ease-entrance"),"ease-exit":ct("ease-exit")},ht={collections:{lifesg:{"brand-10":"#2C0C0B","brand-20":"#4C1513","brand-30":"#6C1D1B","brand-40":"#922825","brand-50":"#BF3431","brand-60":"#F15D5A","brand-70":"#F69491","brand-80":"#FABAB7","brand-90":"#FCD7D2","brand-95":"#FFEBE7","brand-100":"#FFF6F4","primary-10":"#001731","primary-20":"#002752","primary-30":"#003874","primary-40":"#004D9F","primary-50":"#1768BE","primary-60":"#3C91EC","primary-70":"#6CB4FF","primary-80":"#A5CDFF","primary-90":"#CFE1FE","primary-95":"#E8F0FE","primary-100":"#F7F9FF","secondary-10":"#131529","secondary-20":"#222547","secondary-30":"#2F3565","secondary-40":"#42498B","secondary-50":"#5B62A7","secondary-60":"#858CBD","secondary-70":"#A8ADCF","secondary-80":"#C6C9E0","secondary-90":"#DDDFEC","secondary-95":"#EDEEF5","secondary-100":"#F8F8FB","neutral-10":"#161616","neutral-20":"#282828","neutral-30":"#393939","neutral-40":"#4E4E4E","neutral-50":"#686868","neutral-60":"#8E8E8E","neutral-70":"#AFAFB0","neutral-80":"#C7CACA","neutral-90":"#DDE1E2","neutral-95":"#EDEFEF","neutral-100":"#F9F9F9","success-10":"#081A0F","success-20":"#0E2D1B","success-30":"#154126","success-40":"#1C5A34","success-50":"#257645","success-60":"#44A068","success-70":"#64C189","success-80":"#80DCA5","success-90":"#B4ECCB","success-95":"#D5F6E2","success-100":"#EFFCF4","warning-10":"#221302","warning-20":"#3B2204","warning-30":"#543106","warning-40":"#744408","warning-50":"#98590C","warning-60":"#D07A13","warning-70":"#E4A244","warning-80":"#F5C26C","warning-90":"#FADBA6","warning-95":"#FCECD4","warning-100":"#FDF7F0","error-10":"#330505","error-20":"#550808","error-30":"#750C0C","error-40":"#9E130F","error-50":"#CB2213","error-60":"#DE6C6C","error-70":"#E89B9B","error-80":"#EFBEBE","error-90":"#F5D9D9","error-95":"#F9ECEC","error-100":"#FCF7F7","info-10":"#021824","info-20":"#032B3F","info-30":"#053D59","info-40":"#065478","info-50":"#176E9B","info-60":"#5296BE","info-70":"#82B5DA","info-80":"#ACCFE7","info-90":"#CCE3F1","info-95":"#E3F1F8","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000","primary-inverse":"#FEAB10"},bookingsg:{"brand-10":"#2C0C0B","brand-20":"#4C1513","brand-30":"#6C1D1B","brand-40":"#922825","brand-50":"#BF3431","brand-60":"#F15D5A","brand-70":"#F69491","brand-80":"#FABAB7","brand-90":"#FCD7D2","brand-95":"#FFEBE7","brand-100":"#FFF6F4","primary-10":"#1A122C","primary-20":"#2F1F4D","primary-30":"#422D6E","primary-40":"#5B3D97","primary-50":"#7654BC","primary-60":"#9A82CD","primary-70":"#B7A7D8","primary-80":"#CFC5E5","primary-90":"#E3DDF0","primary-95":"#F0EDF7","primary-100":"#F9F8FC","secondary-10":"#0E1723","secondary-20":"#18293D","secondary-30":"#233A57","secondary-40":"#305078","secondary-50":"#4B6A8F","secondary-60":"#7B91A9","secondary-70":"#A1B1C3","secondary-80":"#C1CBD7","secondary-90":"#DBE1E8","secondary-95":"#EBEFF2","secondary-100":"#F7F8FA","neutral-10":"#161616","neutral-20":"#282828","neutral-30":"#393939","neutral-40":"#4E4E4E","neutral-50":"#686868","neutral-60":"#8E8E8E","neutral-70":"#AFAFB0","neutral-80":"#C7CACA","neutral-90":"#DDE1E2","neutral-95":"#EDEFEF","neutral-100":"#F9F9F9","success-10":"#081A0F","success-20":"#0E2D1B","success-30":"#154126","success-40":"#1C5A34","success-50":"#257645","success-60":"#44A068","success-70":"#64C189","success-80":"#80DCA5","success-90":"#B4ECCB","success-95":"#D5F6E2","success-100":"#EFFCF4","warning-10":"#221302","warning-20":"#3B2204","warning-30":"#543106","warning-40":"#744408","warning-50":"#98590C","warning-60":"#D07A13","warning-70":"#E4A244","warning-80":"#F5C26C","warning-90":"#FADBA6","warning-95":"#FCECD4","warning-100":"#FDF7F0","error-10":"#330505","error-20":"#550808","error-30":"#750C0C","error-40":"#9E130F","error-50":"#CB2213","error-60":"#DE6C6C","error-70":"#E89B9B","error-80":"#EFBEBE","error-90":"#F5D9D9","error-95":"#F9ECEC","error-100":"#FCF7F7","info-10":"#021824","info-20":"#032B3F","info-30":"#053D59","info-40":"#065478","info-50":"#176E9B","info-60":"#5296BE","info-70":"#82B5DA","info-80":"#ACCFE7","info-90":"#CCE3F1","info-95":"#E3F1F8","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000","primary-inverse":"#FEAB10"},rbs:{"brand-10":"#0E123A","brand-20":"#191E65","brand-30":"#232B90","brand-40":"#303BC5","brand-50":"#494CFF","brand-60":"#AD6EFF","brand-70":"#AEA4FF","brand-80":"#C5C4FF","brand-90":"#DDDCFF","brand-95":"#EDECFF","brand-100":"#F8F8FF","primary-10":"#10152B","primary-20":"#1C254B","primary-30":"#28356C","primary-40":"#38489A","primary-50":"#4D5AD7","primary-60":"#7487F2","primary-70":"#9AAAFC","primary-80":"#BDC7FD","primary-90":"#DADFFB","primary-95":"#ECEEFE","primary-100":"#F7F8FF","secondary-10":"#19151D","secondary-20":"#2B2533","secondary-30":"#3E3649","secondary-40":"#564A64","secondary-50":"#6F637D","secondary-60":"#948B9F","secondary-70":"#B3ACBB","secondary-80":"#CCC8D2","secondary-90":"#E1DEE4","secondary-95":"#EFEEF1","secondary-100":"#F9F8F9","neutral-10":"#161616","neutral-20":"#282828","neutral-30":"#393939","neutral-40":"#4E4E4E","neutral-50":"#686868","neutral-60":"#8E8E8E","neutral-70":"#AFAFB0","neutral-80":"#C7CACA","neutral-90":"#DDE1E2","neutral-95":"#EDEFEF","neutral-100":"#F9F9F9","success-10":"#081A0F","success-20":"#0E2D1B","success-30":"#154126","success-40":"#1C5A34","success-50":"#257645","success-60":"#44A068","success-70":"#64C189","success-80":"#80DCA5","success-90":"#B4ECCB","success-95":"#D5F6E2","success-100":"#EFFCF4","warning-10":"#221302","warning-20":"#3B2204","warning-30":"#543106","warning-40":"#744408","warning-50":"#98590C","warning-60":"#D07A13","warning-70":"#E4A244","warning-80":"#F5C26C","warning-90":"#FADBA6","warning-95":"#FCECD4","warning-100":"#FDF7F0","error-10":"#330505","error-20":"#550808","error-30":"#750C0C","error-40":"#9E130F","error-50":"#CB2213","error-60":"#DE6C6C","error-70":"#E89B9B","error-80":"#EFBEBE","error-90":"#F5D9D9","error-95":"#F9ECEC","error-100":"#FCF7F7","info-10":"#021824","info-20":"#032B3F","info-30":"#053D59","info-40":"#065478","info-50":"#176E9B","info-60":"#5296BE","info-70":"#82B5DA","info-80":"#ACCFE7","info-90":"#CCE3F1","info-95":"#E3F1F8","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000","primary-inverse":"#FEAB10"},mylegacy:{"brand-10":"#2C0C0B","brand-20":"#4C1513","brand-30":"#6C1D1B","brand-40":"#922825","brand-50":"#BF3431","brand-60":"#F15D5A","brand-70":"#F69491","brand-80":"#FABAB7","brand-90":"#FCD7D2","brand-95":"#FFEBE7","brand-100":"#FFF6F4","primary-10":"#0011924","primary-20":"#032B40","primary-30":"#043D5A","primary-40":"#05547B","primary-50":"#096EA1","primary-60":"#2098D3","primary-70":"#5CB9E8","primary-80":"#8BD3F6","primary-90":"#BEE6FA","primary-95":"#E2F2FA","primary-100":"#F4FAFC","secondary-10":"#131529","secondary-20":"#222547","secondary-30":"#2F3565","secondary-40":"#42498B","secondary-50":"#5B62A7","secondary-60":"#858CBD","secondary-70":"#A8ADCF","secondary-80":"#C6C9E0","secondary-90":"#DDDFEC","secondary-95":"#EDEEF5","secondary-100":"#F8F8FB","neutral-10":"#161616","neutral-20":"#282828","neutral-30":"#393939","neutral-40":"#4E4E4E","neutral-50":"#686868","neutral-60":"#8E8E8E","neutral-70":"#AFAFB0","neutral-80":"#C7CACA","neutral-90":"#DDE1E2","neutral-95":"#EDEFEF","neutral-100":"#F9F9F9","success-10":"#081A0F","success-20":"#0E2D1B","success-30":"#154126","success-40":"#1C5A34","success-50":"#257645","success-60":"#44A068","success-70":"#64C189","success-80":"#80DCA5","success-90":"#B4ECCB","success-95":"#D5F6E2","success-100":"#EFFCF4","warning-10":"#221302","warning-20":"#3B2204","warning-30":"#543106","warning-40":"#744408","warning-50":"#98590C","warning-60":"#D07A13","warning-70":"#E4A244","warning-80":"#F5C26C","warning-90":"#FADBA6","warning-95":"#FCECD4","warning-100":"#FDF7F0","error-10":"#330505","error-20":"#550808","error-30":"#750C0C","error-40":"#9E130F","error-50":"#CB2213","error-60":"#DE6C6C","error-70":"#E89B9B","error-80":"#EFBEBE","error-90":"#F5D9D9","error-95":"#F9ECEC","error-100":"#FCF7F7","info-10":"#021824","info-20":"#032B3F","info-30":"#053D59","info-40":"#065478","info-50":"#176E9B","info-60":"#5296BE","info-70":"#82B5DA","info-80":"#ACCFE7","info-90":"#CCE3F1","info-95":"#E3F1F8","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000","primary-inverse":"#FEAB10"},ccube:{"brand-10":"#1F1221","brand-20":"#371F3B","brand-30":"#4E2C53","brand-40":"#6B3E73","brand-50":"#8D5197","brand-60":"#FF3399","brand-70":"#FF88C4","brand-80":"#FFB3D9","brand-90":"#FFD4E9","brand-95":"#FFE8F3","brand-100":"#FFD6EB","primary-10":"#1F1221","primary-20":"#371F3B","primary-30":"#4E2C53","primary-40":"#6B3E73","primary-50":"#8D5197","primary-60":"#B07DB7","primary-70":"#C7A3CC","primary-80":"#D9C2DD","primary-90":"#E9DBEB","primary-95":"#F3ECF4","primary-100":"#FAF7FA","secondary-10":"#2D091B","secondary-20":"#4D0F2E","secondary-30":"#6B1540","secondary-40":"#931D58","secondary-50":"#C02673","secondary-60":"#FF409F","secondary-70":"#FF88C4","secondary-80":"#FFB3D9","secondary-90":"#FFD4E9","secondary-95":"#FFE8F3","secondary-100":"#FFF8FC","neutral-10":"#161616","neutral-20":"#282828","neutral-30":"#393939","neutral-40":"#4E4E4E","neutral-50":"#686868","neutral-60":"#8E8E8E","neutral-70":"#AFAFB0","neutral-80":"#C7CACA","neutral-90":"#DDE1E2","neutral-95":"#EDEFEF","neutral-100":"#F9F9F9","success-10":"#081A0F","success-20":"#0E2D1B","success-30":"#154126","success-40":"#1C5A34","success-50":"#257645","success-60":"#44A068","success-70":"#64C189","success-80":"#80DCA5","success-90":"#B4ECCB","success-95":"#D5F6E2","success-100":"#EFFCF4","warning-10":"#221302","warning-20":"#3B2204","warning-30":"#543106","warning-40":"#744408","warning-50":"#98590C","warning-60":"#D07A13","warning-70":"#E4A244","warning-80":"#F5C26C","warning-90":"#FADBA6","warning-95":"#FCECD4","warning-100":"#FDF7F0","error-10":"#330505","error-20":"#550808","error-30":"#750C0C","error-40":"#9E130F","error-50":"#CB2213","error-60":"#DE6C6C","error-70":"#E89B9B","error-80":"#EFBEBE","error-90":"#F5D9D9","error-95":"#F9ECEC","error-100":"#FCF7F7","info-10":"#021824","info-20":"#032B3F","info-30":"#053D59","info-40":"#065478","info-50":"#176E9B","info-60":"#5296BE","info-70":"#82B5DA","info-80":"#ACCFE7","info-90":"#CCE3F1","info-95":"#E3F1F8","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000","primary-inverse":"#FEAB10"}},defaultValue:"lifesg"},bt=e=>r=>{var t;const n=r.theme,a=lt(ht,null==n?void 0:n.colourScheme);return(null===(t=null==n?void 0:n.overrides)||void 0===t?void 0:t.primitiveColour)?st(a,e,n.overrides.primitiveColour):a[e]},gt={"brand-10":bt("brand-10"),"brand-20":bt("brand-20"),"brand-30":bt("brand-30"),"brand-40":bt("brand-40"),"brand-50":bt("brand-50"),"brand-60":bt("brand-60"),"brand-70":bt("brand-70"),"brand-80":bt("brand-80"),"brand-90":bt("brand-90"),"brand-95":bt("brand-95"),"brand-100":bt("brand-100"),"primary-10":bt("primary-10"),"primary-20":bt("primary-20"),"primary-30":bt("primary-30"),"primary-40":bt("primary-40"),"primary-50":bt("primary-50"),"primary-60":bt("primary-60"),"primary-70":bt("primary-70"),"primary-80":bt("primary-80"),"primary-90":bt("primary-90"),"primary-95":bt("primary-95"),"primary-100":bt("primary-100"),"secondary-10":bt("secondary-10"),"secondary-20":bt("secondary-20"),"secondary-30":bt("secondary-30"),"secondary-40":bt("secondary-40"),"secondary-50":bt("secondary-50"),"secondary-60":bt("secondary-60"),"secondary-70":bt("secondary-70"),"secondary-80":bt("secondary-80"),"secondary-90":bt("secondary-90"),"secondary-95":bt("secondary-95"),"secondary-100":bt("secondary-100"),"neutral-10":bt("neutral-10"),"neutral-20":bt("neutral-20"),"neutral-30":bt("neutral-30"),"neutral-40":bt("neutral-40"),"neutral-50":bt("neutral-50"),"neutral-60":bt("neutral-60"),"neutral-70":bt("neutral-70"),"neutral-80":bt("neutral-80"),"neutral-90":bt("neutral-90"),"neutral-95":bt("neutral-95"),"neutral-100":bt("neutral-100"),"success-10":bt("success-10"),"success-20":bt("success-20"),"success-30":bt("success-30"),"success-40":bt("success-40"),"success-50":bt("success-50"),"success-60":bt("success-60"),"success-70":bt("success-70"),"success-80":bt("success-80"),"success-90":bt("success-90"),"success-95":bt("success-95"),"success-100":bt("success-100"),"warning-10":bt("warning-10"),"warning-20":bt("warning-20"),"warning-30":bt("warning-30"),"warning-40":bt("warning-40"),"warning-50":bt("warning-50"),"warning-60":bt("warning-60"),"warning-70":bt("warning-70"),"warning-80":bt("warning-80"),"warning-90":bt("warning-90"),"warning-95":bt("warning-95"),"warning-100":bt("warning-100"),"error-10":bt("error-10"),"error-20":bt("error-20"),"error-30":bt("error-30"),"error-40":bt("error-40"),"error-50":bt("error-50"),"error-60":bt("error-60"),"error-70":bt("error-70"),"error-80":bt("error-80"),"error-90":bt("error-90"),"error-95":bt("error-95"),"error-100":bt("error-100"),"info-10":bt("info-10"),"info-20":bt("info-20"),"info-30":bt("info-30"),"info-40":bt("info-40"),"info-50":bt("info-50"),"info-60":bt("info-60"),"info-70":bt("info-70"),"info-80":bt("info-80"),"info-90":bt("info-90"),"info-95":bt("info-95"),"info-100":bt("info-100"),white:bt("white"),black:bt("black"),"primary-inverse":bt("primary-inverse")},mt={text:bt("neutral-20"),"text-subtle":bt("neutral-30"),"text-subtler":bt("neutral-50"),"text-subtlest":bt("neutral-60"),"text-primary":bt("primary-50"),"text-hover":bt("primary-40"),"text-selected":bt("primary-50"),"text-selected-hover":bt("primary-40"),"text-disabled":bt("neutral-50"),"text-disabled-subtle":bt("neutral-60"),"text-disabled-subtlest":bt("neutral-80"),"text-selected-disabled":bt("neutral-20"),"text-success":bt("success-40"),"text-warning":bt("warning-40"),"text-error":bt("error-40"),"text-info":bt("info-40"),"text-inverse":bt("white"),icon:bt("neutral-50"),"icon-subtle":bt("neutral-60"),"icon-strongest":bt("neutral-20"),"icon-primary":bt("primary-50"),"icon-primary-subtle":bt("primary-60"),"icon-primary-subtlest":bt("primary-70"),"icon-hover":bt("primary-40"),"icon-selected":bt("primary-50"),"icon-selected-hover":bt("primary-40"),"icon-disabled":bt("neutral-50"),"icon-disabled-subtle":bt("neutral-60"),"icon-selected-disabled":bt("neutral-60"),"icon-success":bt("success-50"),"icon-warning":bt("warning-60"),"icon-error":bt("error-50"),"icon-error-strong":bt("error-40"),"icon-info":bt("info-50"),"icon-inverse":bt("white"),"icon-primary-inverse":bt("primary-inverse"),border:bt("neutral-90"),"border-strong":bt("neutral-70"),"border-stronger":bt("neutral-50"),"border-primary":bt("primary-50"),"border-primary-subtle":bt("primary-60"),"border-hover":bt("primary-90"),"border-hover-strong":bt("primary-60"),"border-selected":bt("primary-50"),"border-selected-subtle":bt("primary-70"),"border-selected-subtlest":bt("primary-90"),"border-selected-hover":bt("primary-40"),"border-focus":bt("primary-60"),"border-focus-strong":bt("primary-50"),"border-disabled":bt("neutral-90"),"border-selected-disabled":bt("neutral-70"),"border-success":bt("success-60"),"border-warning":bt("warning-60"),"border-error":bt("error-60"),"border-error-focus":bt("error-60"),"border-error-focus-strong":bt("error-40"),"border-error-strong":bt("error-40"),"border-info":bt("info-60"),bg:bt("white"),"bg-strong":bt("neutral-100"),"bg-stronger":bt("neutral-95"),"bg-strongest":bt("neutral-90"),"bg-hover":bt("primary-95"),"bg-hover-strong":bt("primary-90"),"bg-hover-subtle":bt("primary-100"),"bg-hover-neutral":bt("neutral-100"),"bg-hover-neutral-strong":bt("neutral-90"),"bg-selected":bt("primary-95"),"bg-selected-hover":bt("primary-90"),"bg-selected-strong":bt("primary-90"),"bg-selected-stronger":bt("primary-70"),"bg-selected-strongest":bt("primary-50"),"bg-selected-strongest-hover":bt("primary-40"),"bg-disabled":bt("neutral-95"),"bg-selected-disabled":bt("neutral-95"),"bg-selected-stronger-disabled":bt("neutral-70"),"bg-success":bt("success-100"),"bg-success-hover":bt("success-95"),"bg-success-strong":bt("success-50"),"bg-success-strong-hover":bt("success-40"),"bg-warning":bt("warning-100"),"bg-warning-hover":bt("warning-95"),"bg-warning-strong":bt("warning-50"),"bg-warning-strong-hover":bt("warning-40"),"bg-info":bt("info-100"),"bg-info-hover":bt("info-95"),"bg-info-strong":bt("info-50"),"bg-info-strong-hover":bt("info-40"),"bg-error":bt("error-100"),"bg-error-hover":bt("error-95"),"bg-error-strong":bt("error-50"),"bg-error-strong-hover":bt("error-40"),"bg-inverse":bt("neutral-20"),"bg-inverse-subtle":bt("neutral-30"),"bg-inverse-subtler":bt("neutral-50"),"bg-inverse-subtlest":bt("neutral-60"),"bg-inverse-hover":bt("neutral-40"),"bg-primary":bt("primary-50"),"bg-primary-subtle":bt("primary-60"),"bg-primary-subtler":bt("primary-95"),"bg-primary-subtlest":bt("primary-100"),"bg-available":"#6DD0A1","bg-primary-hover":bt("primary-40"),"bg-primary-subtlest-hover":bt("primary-90"),"bg-primary-subtlest-selected":bt("primary-90"),"overlay-strong":"rgba(40, 40, 40, 0.85)","overlay-subtle":"rgba(40, 40, 40, 0.20)",hyperlink:bt("primary-50"),"hyperlink-hover":bt("primary-40"),"hyperlink-visited":bt("primary-40"),"hyperlink-inverse":bt("primary-inverse"),"focus-ring":bt("black"),"focus-ring-inverse":bt("white")},ft={collections:{lifesg:mt,bookingsg:mt,rbs:mt,mylegacy:mt,ccube:mt},defaultValue:"lifesg"},yt=e=>r=>{var t;const n=r.theme,a=lt(ft,null==n?void 0:n.colourScheme),i=(null===(t=null==n?void 0:n.overrides)||void 0===t?void 0:t.semanticColour)?st(a,e,n.overrides.semanticColour):a[e];return"function"==typeof i?i(r):i},pt={text:yt("text"),"text-subtle":yt("text-subtle"),"text-subtler":yt("text-subtler"),"text-subtlest":yt("text-subtlest"),"text-primary":yt("text-primary"),"text-hover":yt("text-hover"),"text-selected":yt("text-selected"),"text-selected-hover":yt("text-selected-hover"),"text-disabled":yt("text-disabled"),"text-disabled-subtle":yt("text-disabled-subtle"),"text-disabled-subtlest":yt("text-disabled-subtlest"),"text-selected-disabled":yt("text-selected-disabled"),"text-success":yt("text-success"),"text-warning":yt("text-warning"),"text-error":yt("text-error"),"text-info":yt("text-info"),"text-inverse":yt("text-inverse"),icon:yt("icon"),"icon-subtle":yt("icon-subtle"),"icon-strongest":yt("icon-strongest"),"icon-primary":yt("icon-primary"),"icon-primary-subtle":yt("icon-primary-subtle"),"icon-primary-subtlest":yt("icon-primary-subtlest"),"icon-hover":yt("icon-hover"),"icon-selected":yt("icon-selected"),"icon-selected-hover":yt("icon-selected-hover"),"icon-disabled":yt("icon-disabled"),"icon-disabled-subtle":yt("icon-disabled-subtle"),"icon-selected-disabled":yt("icon-selected-disabled"),"icon-success":yt("icon-success"),"icon-warning":yt("icon-warning"),"icon-error":yt("icon-error"),"icon-error-strong":yt("icon-error-strong"),"icon-info":yt("icon-info"),"icon-inverse":yt("icon-inverse"),"icon-primary-inverse":yt("icon-primary-inverse"),border:yt("border"),"border-strong":yt("border-strong"),"border-stronger":yt("border-stronger"),"border-primary":yt("border-primary"),"border-primary-subtle":yt("border-primary-subtle"),"border-hover":yt("border-hover"),"border-hover-strong":yt("border-hover-strong"),"border-selected":yt("border-selected"),"border-selected-subtle":yt("border-selected-subtle"),"border-selected-subtlest":yt("border-selected-subtlest"),"border-selected-hover":yt("border-selected-hover"),"border-focus":yt("border-focus"),"border-focus-strong":yt("border-focus-strong"),"border-disabled":yt("border-disabled"),"border-selected-disabled":yt("border-selected-disabled"),"border-success":yt("border-success"),"border-warning":yt("border-warning"),"border-error":yt("border-error"),"border-error-focus":yt("border-error-focus"),"border-error-focus-strong":yt("border-error-focus-strong"),"border-error-strong":yt("border-error-strong"),"border-info":yt("border-info"),bg:yt("bg"),"bg-strong":yt("bg-strong"),"bg-stronger":yt("bg-stronger"),"bg-strongest":yt("bg-strongest"),"bg-hover":yt("bg-hover"),"bg-hover-strong":yt("bg-hover-strong"),"bg-hover-subtle":yt("bg-hover-subtle"),"bg-hover-neutral":yt("bg-hover-neutral"),"bg-hover-neutral-strong":yt("bg-hover-neutral-strong"),"bg-selected":yt("bg-selected"),"bg-selected-hover":yt("bg-selected-hover"),"bg-selected-strong":yt("bg-selected-strong"),"bg-selected-stronger":yt("bg-selected-stronger"),"bg-selected-strongest":yt("bg-selected-strongest"),"bg-selected-strongest-hover":yt("bg-selected-strongest-hover"),"bg-disabled":yt("bg-disabled"),"bg-selected-disabled":yt("bg-selected-disabled"),"bg-selected-stronger-disabled":yt("bg-selected-stronger-disabled"),"bg-success":yt("bg-success"),"bg-success-hover":yt("bg-success-hover"),"bg-success-strong":yt("bg-success-strong"),"bg-success-strong-hover":yt("bg-success-strong-hover"),"bg-warning":yt("bg-warning"),"bg-warning-hover":yt("bg-warning-hover"),"bg-warning-strong":yt("bg-warning-strong"),"bg-warning-strong-hover":yt("bg-warning-strong-hover"),"bg-info":yt("bg-info"),"bg-info-hover":yt("bg-info-hover"),"bg-info-strong":yt("bg-info-strong"),"bg-info-strong-hover":yt("bg-info-strong-hover"),"bg-error":yt("bg-error"),"bg-error-hover":yt("bg-error-hover"),"bg-error-strong":yt("bg-error-strong"),"bg-error-strong-hover":yt("bg-error-strong-hover"),"bg-inverse":yt("bg-inverse"),"bg-inverse-subtle":yt("bg-inverse-subtle"),"bg-inverse-subtler":yt("bg-inverse-subtler"),"bg-inverse-subtlest":yt("bg-inverse-subtlest"),"bg-inverse-hover":yt("bg-inverse-hover"),"bg-primary":yt("bg-primary"),"bg-primary-subtle":yt("bg-primary-subtle"),"bg-primary-subtler":yt("bg-primary-subtler"),"bg-primary-subtlest":yt("bg-primary-subtlest"),"bg-available":yt("bg-available"),"bg-primary-hover":yt("bg-primary-hover"),"bg-primary-subtlest-hover":yt("bg-primary-subtlest-hover"),"bg-primary-subtlest-selected":yt("bg-primary-subtlest-selected"),"overlay-strong":yt("overlay-strong"),"overlay-subtle":yt("overlay-subtle"),hyperlink:yt("hyperlink"),"hyperlink-hover":yt("hyperlink-hover"),"hyperlink-visited":yt("hyperlink-visited"),"hyperlink-inverse":yt("hyperlink-inverse"),"focus-ring":yt("focus-ring"),"focus-ring-inverse":yt("focus-ring-inverse")},vt={collections:{lifesg:{"width-010":1,"width-020":2,"width-040":4,solid:"solid","dashed-default":e=>r=>{var t,n,a;const{thickness:i,radius:o,colour:s}=e||{},l=null!==(t="function"==typeof i?i(r):i)&&void 0!==t?t:wt["width-010"](r),d=null!==(n="function"==typeof o?o(r):o)&&void 0!==n?n:0,c=null!==(a="function"==typeof s?s(r):s)&&void 0!==a?a:pt.border(r),u=encodeURIComponent(`<svg width='100%' height='100%' xmlns='http://www.w3.org/2000/svg'><rect width='100%' height='100%' fill='none' rx='${d}' ry='${d}' stroke='${c}' stroke-width='${l}' stroke-dasharray='4, 8' stroke-dashoffset='0' stroke-linecap='square'/></svg>`);return p`
            background-image: url("data:image/svg+xml,${u}");
            border-radius: ${d};
        `}}},defaultValue:"lifesg"},xt=e=>r=>{var t;const n=r.theme,a=lt(vt,null==n?void 0:n.borderScheme);return(null===(t=null==n?void 0:n.overrides)||void 0===t?void 0:t.border)?`${st(a,e,n.overrides.border)}px`:`${a[e]}px`},Dt=e=>1===e.length&&"theme"in e[0],wt={"width-010":xt("width-010"),"width-020":xt("width-020"),"width-040":xt("width-040"),solid:($t="solid",e=>{var r;const t=e.theme,n=lt(vt,null==t?void 0:t.borderScheme),a=(null===(r=null==t?void 0:t.overrides)||void 0===r?void 0:r.border)?st(n,$t,t.overrides.border):n[$t];return"function"==typeof a?a(e):a}),"dashed-default":(e=>(...r)=>t=>{var n;const a=Dt(r)?[]:r,i=Dt(r)?r[0]:t,o=i.theme,s=lt(vt,null==o?void 0:o.borderScheme);return((null===(n=null==o?void 0:o.overrides)||void 0===n?void 0:n.border)?st(s,e,o.overrides.border):s[e])(...a)(i)})("dashed-default")};var $t;const Ft={collections:{lifesg:{"xxs-min":0,"xxs-max":320,"xs-min":321,"xs-max":375,"sm-min":376,"sm-max":420,"md-min":421,"md-max":767,"lg-min":768,"lg-max":1023,"xl-min":1024,"xl-max":1440,"xxl-min":1441,"xxs-column":8,"xs-column":8,"sm-column":8,"md-column":8,"lg-column":12,"xl-column":12,"xxl-column":12,"xxs-gutter":16,"xs-gutter":16,"sm-gutter":16,"md-gutter":16,"lg-gutter":32,"xl-gutter":32,"xxl-gutter":32,"xxs-margin":24,"xs-margin":24,"sm-margin":24,"md-margin":24,"lg-margin":48,"xl-margin":48,"xxl-margin":48}},defaultValue:"lifesg"},Et=e=>r=>{var t;const n=r.theme,a=lt(Ft,null==n?void 0:n.breakpointScheme);let i;return i=(null===(t=null==n?void 0:n.overrides)||void 0===t?void 0:t.breakpoint)?st(a,e,n.overrides.breakpoint):a[e],i},Ct={"xxs-min":Et("xxs-min"),"xxs-max":Et("xxs-max"),"xs-min":Et("xs-min"),"xs-max":Et("xs-max"),"sm-min":Et("sm-min"),"sm-max":Et("sm-max"),"md-min":Et("md-min"),"md-max":Et("md-max"),"lg-min":Et("lg-min"),"lg-max":Et("lg-max"),"xl-min":Et("xl-min"),"xl-max":Et("xl-max"),"xxl-min":Et("xxl-min"),"xxs-column":Et("xxs-column"),"xs-column":Et("xs-column"),"sm-column":Et("sm-column"),"md-column":Et("md-column"),"lg-column":Et("lg-column"),"xl-column":Et("xl-column"),"xxl-column":Et("xxl-column"),"xxs-gutter":Et("xxs-gutter"),"xs-gutter":Et("xs-gutter"),"sm-gutter":Et("sm-gutter"),"md-gutter":Et("md-gutter"),"lg-gutter":Et("lg-gutter"),"xl-gutter":Et("xl-gutter"),"xxl-gutter":Et("xxl-gutter"),"xxs-margin":Et("xxs-margin"),"xs-margin":Et("xs-margin"),"sm-margin":Et("sm-margin"),"md-margin":Et("md-margin"),"lg-margin":Et("lg-margin"),"xl-margin":Et("xl-margin"),"xxl-margin":Et("xxl-margin")},St=e=>("max-width"===e?["xxs","xs","sm","md","lg","xl"]:["xxs","xs","sm","md","lg","xl","xxl"]).reduce(((r,t)=>(r[t]=((e,r)=>{const t=Ct["max-width"===e?`${r}-max`:`${r}-min`];return r=>{const n=t(r);return`@media screen and (${e}: ${n}px)`}})(e,t),r)),{}),Ot={MaxWidth:St("max-width"),MinWidth:St("min-width")},Bt={"header-size-xxl":"3rem","header-size-xl":"2.5rem","header-size-lg":"2rem","header-size-md":"1.625rem","header-size-sm":"1.375rem","header-size-xs":"1.125rem","header-lh-xxl":"3.5rem","header-lh-xl":"3rem","header-lh-lg":"2.5rem","header-lh-md":"2.25rem","header-lh-sm":"1.75rem","header-lh-xs":"1.625rem","header-ls-xxl":"-0.056rem","header-ls-xl":"-0.032rem","header-ls-lg":"-0.032rem","header-ls-md":"0rem","header-ls-sm":"0rem","header-ls-xs":"0rem","weight-light":"300","weight-regular":"400","weight-semibold":"600","weight-bold":"700","font-family":"Open Sans","body-size-baseline":"1.125rem","body-size-md":"1rem","body-size-sm":"0.875rem","body-size-xs":"0.75rem","body-lh-baseline":"1.625rem","body-lh-md":"1.5rem","body-lh-sm":"1.625rem","body-lh-xs":"1.25rem","body-ls-baseline":"0rem","body-ls-md":"0.014rem","body-ls-sm":"0.012rem","body-ls-xs":"0.012rem","formlabel-size-baseline":"1rem","formlabel-size-lg":"1.125rem","formlabel-lh-baseline":"1.5rem","formlabel-lh-lg":"1.625rem","formlabel-ls-baseline":"0.014rem","formlabel-ls-lg":"0rem"},Mt={collections:{lifesg:Bt,bookingsg:{"header-size-xxl":"3rem","header-size-xl":"2.5rem","header-size-lg":"2rem","header-size-md":"1.625rem","header-size-sm":"1.375rem","header-size-xs":"1.125rem","header-lh-xxl":"3.5rem","header-lh-xl":"3rem","header-lh-lg":"2.5rem","header-lh-md":"2.25rem","header-lh-sm":"1.75rem","header-lh-xs":"1.75rem","header-ls-xxl":"-0.056rem","header-ls-xl":"-0.032rem","header-ls-lg":"-0.032rem","header-ls-md":"0rem","header-ls-sm":"0rem","header-ls-xs":"0rem","weight-light":"300","weight-regular":"400","weight-semibold":"600","weight-bold":"700","font-family":"Plus Jakarta Sans","body-size-baseline":"1.125rem","body-size-md":"1rem","body-size-sm":"0.875rem","body-size-xs":"0.75rem","body-lh-baseline":"1.75rem","body-lh-md":"1.5rem","body-lh-sm":"1.6rem","body-lh-xs":"1.2rem","body-ls-baseline":"0rem","body-ls-md":"0.014rem","body-ls-sm":"0.012rem","body-ls-xs":"0.012rem","formlabel-size-baseline":"1rem","formlabel-size-lg":"1.125rem","formlabel-lh-baseline":"1.5rem","formlabel-lh-lg":"1.75rem","formlabel-ls-baseline":"0.014rem","formlabel-ls-lg":"0rem"},rbs:Bt,mylegacy:Bt,ccube:Bt},defaultValue:"lifesg"},At=e=>r=>{var t;const n=r.theme,a=lt(Mt,null==n?void 0:n.fontScheme);return(null===(t=null==n?void 0:n.overrides)||void 0===t?void 0:t.fontSpec)?st(a,e,n.overrides.fontSpec):a[e]},zt={"header-size-xxl":At("header-size-xxl"),"header-size-xl":At("header-size-xl"),"header-size-lg":At("header-size-lg"),"header-size-md":At("header-size-md"),"header-size-sm":At("header-size-sm"),"header-size-xs":At("header-size-xs"),"header-lh-xxl":At("header-lh-xxl"),"header-lh-xl":At("header-lh-xl"),"header-lh-lg":At("header-lh-lg"),"header-lh-md":At("header-lh-md"),"header-lh-sm":At("header-lh-sm"),"header-lh-xs":At("header-lh-xs"),"header-ls-xxl":At("header-ls-xxl"),"header-ls-xl":At("header-ls-xl"),"header-ls-lg":At("header-ls-lg"),"header-ls-md":At("header-ls-md"),"header-ls-sm":At("header-ls-sm"),"header-ls-xs":At("header-ls-xs"),"weight-light":At("weight-light"),"weight-regular":At("weight-regular"),"weight-semibold":At("weight-semibold"),"weight-bold":At("weight-bold"),"font-family":At("font-family"),"body-size-baseline":At("body-size-baseline"),"body-size-md":At("body-size-md"),"body-size-sm":At("body-size-sm"),"body-size-xs":At("body-size-xs"),"body-lh-baseline":At("body-lh-baseline"),"body-lh-md":At("body-lh-md"),"body-lh-sm":At("body-lh-sm"),"body-lh-xs":At("body-lh-xs"),"body-ls-baseline":At("body-ls-baseline"),"body-ls-md":At("body-ls-md"),"body-ls-sm":At("body-ls-sm"),"body-ls-xs":At("body-ls-xs"),"formlabel-size-baseline":At("formlabel-size-baseline"),"formlabel-size-lg":At("formlabel-size-lg"),"formlabel-lh-baseline":At("formlabel-lh-baseline"),"formlabel-lh-lg":At("formlabel-lh-lg"),"formlabel-ls-baseline":At("formlabel-ls-baseline"),"formlabel-ls-lg":At("formlabel-ls-lg")},kt={collections:{lifesg:{none:0,xs:2,sm:4,md:8,lg:12,full:9999}},defaultValue:"lifesg"},Yt=e=>r=>{var t;const n=r.theme,a=lt(kt,null==n?void 0:n.radiusScheme);return(null===(t=null==n?void 0:n.overrides)||void 0===t?void 0:t.radius)?`${st(a,e,n.overrides.radius)}px`:`${a[e]}px`},jt={none:Yt("none"),xs:Yt("xs"),sm:Yt("sm"),md:Yt("md"),lg:Yt("lg"),full:Yt("full")},Tt={collections:{lifesg:{"spacing-0":0,"spacing-4":4,"spacing-8":8,"spacing-12":12,"spacing-16":16,"spacing-20":20,"spacing-24":24,"spacing-32":32,"spacing-40":40,"spacing-48":48,"spacing-64":64,"spacing-72":72,"layout-xs":8,"layout-sm":16,"layout-md":24,"layout-lg":32,"layout-xl":48,"layout-xxl":64,"layout-xxxl":128}},defaultValue:"lifesg"},_t=e=>r=>{var t;const n=r.theme,a=lt(Tt,null==n?void 0:n.spacingScheme);return(null===(t=null==n?void 0:n.overrides)||void 0===t?void 0:t.spacing)?`${st(a,e,n.overrides.spacing)}px`:`${a[e]}px`},Rt={"spacing-0":_t("spacing-0"),"spacing-4":_t("spacing-4"),"spacing-8":_t("spacing-8"),"spacing-12":_t("spacing-12"),"spacing-16":_t("spacing-16"),"spacing-20":_t("spacing-20"),"spacing-24":_t("spacing-24"),"spacing-32":_t("spacing-32"),"spacing-40":_t("spacing-40"),"spacing-48":_t("spacing-48"),"spacing-64":_t("spacing-64"),"spacing-72":_t("spacing-72"),"layout-xs":_t("layout-xs"),"layout-sm":_t("layout-sm"),"layout-md":_t("layout-md"),"layout-lg":_t("layout-lg"),"layout-xl":_t("layout-xl"),"layout-xxl":_t("layout-xxl"),"layout-xxxl":_t("layout-xxxl")},Ht=(e,r,t,n)=>p`
    font-family: ${At("font-family")};
    font-size: ${At(e)};
    font-weight: ${At(r)};
    line-height: ${At(t)};
    letter-spacing: ${At(n)};
`,Lt={"header-xxl-light":Ht("header-size-xxl","weight-light","header-lh-xxl","header-ls-xxl"),"header-xxl-regular":Ht("header-size-xxl","weight-regular","header-lh-xxl","header-ls-xxl"),"header-xxl-semibold":Ht("header-size-xxl","weight-semibold","header-lh-xxl","header-ls-xxl"),"header-xxl-bold":Ht("header-size-xxl","weight-bold","header-lh-xxl","header-ls-xxl"),"header-xl-light":Ht("header-size-xl","weight-light","header-lh-xl","header-ls-xl"),"header-xl-regular":Ht("header-size-xl","weight-regular","header-lh-xl","header-ls-xl"),"header-xl-semibold":Ht("header-size-xl","weight-semibold","header-lh-xl","header-ls-xl"),"header-xl-bold":Ht("header-size-xl","weight-bold","header-lh-xl","header-ls-xl"),"header-lg-light":Ht("header-size-lg","weight-light","header-lh-lg","header-ls-lg"),"header-lg-regular":Ht("header-size-lg","weight-regular","header-lh-lg","header-ls-lg"),"header-lg-semibold":Ht("header-size-lg","weight-semibold","header-lh-lg","header-ls-lg"),"header-lg-bold":Ht("header-size-lg","weight-bold","header-lh-lg","header-ls-lg"),"header-md-light":Ht("header-size-md","weight-light","header-lh-md","header-ls-md"),"header-md-regular":Ht("header-size-md","weight-regular","header-lh-md","header-ls-md"),"header-md-semibold":Ht("header-size-md","weight-semibold","header-lh-md","header-ls-md"),"header-md-bold":Ht("header-size-md","weight-bold","header-lh-md","header-ls-md"),"header-sm-light":Ht("header-size-sm","weight-light","header-lh-sm","header-ls-sm"),"header-sm-regular":Ht("header-size-sm","weight-regular","header-lh-sm","header-ls-sm"),"header-sm-semibold":Ht("header-size-sm","weight-semibold","header-lh-sm","header-ls-sm"),"header-sm-bold":Ht("header-size-sm","weight-bold","header-lh-sm","header-ls-sm"),"header-xs-light":Ht("header-size-xs","weight-light","header-lh-xs","header-ls-xs"),"header-xs-regular":Ht("header-size-xs","weight-regular","header-lh-xs","header-ls-xs"),"header-xs-semibold":Ht("header-size-xs","weight-semibold","header-lh-xs","header-ls-xs"),"header-xs-bold":Ht("header-size-xs","weight-bold","header-lh-xs","header-ls-xs"),"body-baseline-light":Ht("body-size-baseline","weight-light","body-lh-baseline","body-ls-baseline"),"body-baseline-regular":Ht("body-size-baseline","weight-regular","body-lh-baseline","body-ls-baseline"),"body-baseline-semibold":Ht("body-size-baseline","weight-semibold","body-lh-baseline","body-ls-baseline"),"body-baseline-bold":Ht("body-size-baseline","weight-bold","body-lh-baseline","body-ls-baseline"),"body-md-light":Ht("body-size-md","weight-light","body-lh-md","body-ls-md"),"body-md-regular":Ht("body-size-md","weight-regular","body-lh-md","body-ls-md"),"body-md-semibold":Ht("body-size-md","weight-semibold","body-lh-md","body-ls-md"),"body-md-bold":Ht("body-size-md","weight-bold","body-lh-md","body-ls-md"),"body-sm-light":Ht("body-size-sm","weight-light","body-lh-sm","body-ls-sm"),"body-sm-regular":Ht("body-size-sm","weight-regular","body-lh-sm","body-ls-sm"),"body-sm-semibold":Ht("body-size-sm","weight-semibold","body-lh-sm","body-ls-sm"),"body-sm-bold":Ht("body-size-sm","weight-bold","body-lh-sm","body-ls-sm"),"body-xs-light":Ht("body-size-xs","weight-light","body-lh-xs","body-ls-xs"),"body-xs-regular":Ht("body-size-xs","weight-regular","body-lh-xs","body-ls-xs"),"body-xs-semibold":Ht("body-size-xs","weight-semibold","body-lh-xs","body-ls-xs"),"body-xs-bold":Ht("body-size-xs","weight-bold","body-lh-xs","body-ls-xs"),"formlabel-baseline-semibold":Ht("formlabel-size-baseline","weight-semibold","formlabel-lh-baseline","formlabel-ls-baseline"),"formlabel-lg-semibold":Ht("formlabel-size-lg","weight-semibold","formlabel-lh-lg","formlabel-ls-lg")},It={collections:{lifesg:Lt,bookingsg:Lt,rbs:Lt,mylegacy:Lt,ccube:Lt},defaultValue:"lifesg"},Wt=e=>r=>{var t;const n=r.theme,a=lt(It,null==n?void 0:n.fontScheme),i=(null===(t=null==n?void 0:n.overrides)||void 0===t?void 0:t.font)?st(a,e,n.overrides.font):a[e];return"function"==typeof i?i(r):i},Nt={"header-xxl-light":Wt("header-xxl-light"),"header-xxl-regular":Wt("header-xxl-regular"),"header-xxl-semibold":Wt("header-xxl-semibold"),"header-xxl-bold":Wt("header-xxl-bold"),"header-xl-light":Wt("header-xl-light"),"header-xl-regular":Wt("header-xl-regular"),"header-xl-semibold":Wt("header-xl-semibold"),"header-xl-bold":Wt("header-xl-bold"),"header-lg-light":Wt("header-lg-light"),"header-lg-regular":Wt("header-lg-regular"),"header-lg-semibold":Wt("header-lg-semibold"),"header-lg-bold":Wt("header-lg-bold"),"header-md-light":Wt("header-md-light"),"header-md-regular":Wt("header-md-regular"),"header-md-semibold":Wt("header-md-semibold"),"header-md-bold":Wt("header-md-bold"),"header-sm-light":Wt("header-sm-light"),"header-sm-regular":Wt("header-sm-regular"),"header-sm-semibold":Wt("header-sm-semibold"),"header-sm-bold":Wt("header-sm-bold"),"header-xs-light":Wt("header-xs-light"),"header-xs-regular":Wt("header-xs-regular"),"header-xs-semibold":Wt("header-xs-semibold"),"header-xs-bold":Wt("header-xs-bold"),"body-baseline-light":Wt("body-baseline-light"),"body-baseline-regular":Wt("body-baseline-regular"),"body-baseline-semibold":Wt("body-baseline-semibold"),"body-baseline-bold":Wt("body-baseline-bold"),"body-md-light":Wt("body-md-light"),"body-md-regular":Wt("body-md-regular"),"body-md-semibold":Wt("body-md-semibold"),"body-md-bold":Wt("body-md-bold"),"body-sm-light":Wt("body-sm-light"),"body-sm-regular":Wt("body-sm-regular"),"body-sm-semibold":Wt("body-sm-semibold"),"body-sm-bold":Wt("body-sm-bold"),"body-xs-light":Wt("body-xs-light"),"body-xs-regular":Wt("body-xs-regular"),"body-xs-semibold":Wt("body-xs-semibold"),"body-xs-bold":Wt("body-xs-bold"),"formlabel-baseline-semibold":Wt("formlabel-baseline-semibold"),"formlabel-lg-semibold":Wt("formlabel-lg-semibold")},Pt=Object.assign(Object.assign({},pt),{Primitive:gt}),Vt=Object.assign(Object.assign({},Nt),{Spec:zt}),Zt=ut,Ut=wt,Kt=Rt,Jt=jt,qt=Ct,Xt=Ot,Gt=e=>"small"===e?2.5:3;y.div`
    position: relative;
    width: 100%;
    ${e=>{const r=Gt(e.$variant);return p`
            min-height: ${r}rem;
            height: ${r}rem; // Need this to persist the height when expanding or collapsing list
        `}}
`;const Qt=p`
    display: flex;
    position: relative;
    align-items: center;
    justify-content: space-between;
    padding: 0 ${Kt["spacing-16"]};
    // exclude top and bottom borders
    height: calc(${e=>Gt(e.$variant)}rem - 2px);
    width: 100%;
    border-radius: ${Jt.sm};
    border: none;
    background: transparent;

    :focus,
    :active {
        outline: none;
    }

    :focus-visible {
        outline: 2px solid ${Pt["border-focus"]};
    }
`,en=y.button`
    ${Qt}
    cursor: pointer;
`;y.div`
    ${Qt}
`;const rn=v`
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
    border: ${Ut["width-010"]} ${Ut.solid} ${Pt.border};
    border-radius: ${Jt.sm};
    background: ${Pt.bg};
    overflow: hidden;

    :focus-within {
        border-color: ${Pt["border-focus"]};
        box-shadow: 0px 0px 4px 0px
            rgb(from ${Pt["border-focus"]} r g b / 50%) inset; // TODO: confirm shadow
    }

    ${e=>e.expanded?p`
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                z-index: 2;
            `:p`
                animation: ${rn} 0.5s ease-in-out;
            `}

    ${e=>e.disabled?p`
                background: ${Pt["bg-disabled"]};

                ${en} {
                    cursor: not-allowed;
                }

                :focus-within {
                    border-color: ${Pt.border};
                    box-shadow: none;
                }
            `:e.$readOnly?p`
                border: none;
                background: transparent !important;

                ${en} {
                    padding: 0;
                }

                :focus-within {
                    border: none;
                    box-shadow: none;
                }
            `:e.error?p`
                border-color: ${Pt["border-error"]};

                :focus-within {
                    border-color: ${Pt["border-error"]};
                    box-shadow: 0px 0px 4px 0px
                        rgb(from ${Pt["border-error"]} r g b / 50%) inset; // TODO: confirm shadow
                }
            `:void 0}
`,y.div`
    transform: rotate(${e=>e.expanded?180:0}deg);
    transition: transform ${Zt["duration-250"]} ${Zt["ease-default"]};
    margin-left: ${Kt["spacing-16"]};
`,y(f)`
    color: ${Pt.icon};
`,y.div`
    height: 1px;
    background: ${Pt.border};
    margin: 0 ${Kt["spacing-8"]};
`,y.div`
    display: flex;
    flex: 1;
    word-break: break-all;
    ${e=>{if(e.$disabled)return p`
                color: ${Pt["text-disabled"]};
            `}}
`;y(y.div`
    ${e=>"small"===e.$variant?Vt["body-md-regular"]:Vt["body-baseline-regular"]}
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
    color: ${Pt["text-subtler"]};
`;var tn=function(e,r){return tn=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,r){e.__proto__=r}||function(e,r){for(var t in r)Object.prototype.hasOwnProperty.call(r,t)&&(e[t]=r[t])},tn(e,r)};var nn=function(){return nn=Object.assign||function(e){for(var r,t=1,n=arguments.length;t<n;t++)for(var a in r=arguments[t])Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a]);return e},nn.apply(this,arguments)};var an="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};var on=function(e){var r=typeof e;return null!=e&&("object"==r||"function"==r)},sn="object"==typeof an&&an&&an.Object===Object&&an,ln="object"==typeof self&&self&&self.Object===Object&&self,dn=sn||ln||Function("return this")(),cn=dn,un=function(){return cn.Date.now()},hn=/\s/;var bn=function(e){for(var r=e.length;r--&&hn.test(e.charAt(r)););return r},gn=/^\s+/;var mn=function(e){return e?e.slice(0,bn(e)+1).replace(gn,""):e},fn=dn.Symbol,yn=fn,pn=Object.prototype,vn=pn.hasOwnProperty,xn=pn.toString,Dn=yn?yn.toStringTag:void 0;var wn=function(e){var r=vn.call(e,Dn),t=e[Dn];try{e[Dn]=void 0;var n=!0}catch(e){}var a=xn.call(e);return n&&(r?e[Dn]=t:delete e[Dn]),a},$n=Object.prototype.toString;var Fn=wn,En=function(e){return $n.call(e)},Cn=fn?fn.toStringTag:void 0;var Sn=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":Cn&&Cn in Object(e)?Fn(e):En(e)},On=function(e){return null!=e&&"object"==typeof e};var Bn=mn,Mn=on,An=function(e){return"symbol"==typeof e||On(e)&&"[object Symbol]"==Sn(e)},zn=/^[-+]0x[0-9a-f]+$/i,kn=/^0b[01]+$/i,Yn=/^0o[0-7]+$/i,jn=parseInt;var Tn=on,_n=un,Rn=function(e){if("number"==typeof e)return e;if(An(e))return NaN;if(Mn(e)){var r="function"==typeof e.valueOf?e.valueOf():e;e=Mn(r)?r+"":r}if("string"!=typeof e)return 0===e?e:+e;e=Bn(e);var t=kn.test(e);return t||Yn.test(e)?jn(e.slice(2),t?2:8):zn.test(e)?NaN:+e},Hn=Math.max,Ln=Math.min;var In=function(e,r,t){var n,a,i,o,s,l,d=0,c=!1,u=!1,h=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function b(r){var t=n,i=a;return n=a=void 0,d=r,o=e.apply(i,t)}function g(e){var t=e-l;return void 0===l||t>=r||t<0||u&&e-d>=i}function m(){var e=_n();if(g(e))return f(e);s=setTimeout(m,function(e){var t=r-(e-l);return u?Ln(t,i-(e-d)):t}(e))}function f(e){return s=void 0,h&&n?b(e):(n=a=void 0,o)}function y(){var e=_n(),t=g(e);if(n=arguments,a=this,l=e,t){if(void 0===s)return function(e){return d=e,s=setTimeout(m,r),c?b(e):o}(l);if(u)return clearTimeout(s),s=setTimeout(m,r),b(l)}return void 0===s&&(s=setTimeout(m,r)),o}return r=Rn(r)||0,Tn(t)&&(c=!!t.leading,i=(u="maxWait"in t)?Hn(Rn(t.maxWait)||0,r):i,h="trailing"in t?!!t.trailing:h),y.cancel=function(){void 0!==s&&clearTimeout(s),d=0,n=l=a=s=void 0},y.flush=function(){return void 0===s?o:f(_n())},y},Wn=In,Nn=on;var Pn=function(e,r,t){var n=!0,a=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return Nn(t)&&(n="leading"in t?!!t.leading:n,a="trailing"in t?!!t.trailing:a),Wn(e,r,{leading:n,maxWait:r,trailing:a})},Vn=function(e,r,t,n){switch(r){case"debounce":return In(e,t,n);case"throttle":return Pn(e,t,n);default:return e}},Zn=function(e){return"function"==typeof e},Un=function(){return"undefined"==typeof window},Kn=function(e){return e instanceof Element||e instanceof HTMLDocument},Jn=function(e,r,t,n){return function(a){var i=a.width,o=a.height;r((function(r){return r.width===i&&r.height===o||r.width===i&&!n||r.height===o&&!t?r:(e&&Zn(e)&&e(i,o),{width:i,height:o})}))}};!function(e){function r(r){var t=e.call(this,r)||this;t.cancelHandler=function(){t.resizeHandler&&t.resizeHandler.cancel&&(t.resizeHandler.cancel(),t.resizeHandler=null)},t.attachObserver=function(){var e=t.props,r=e.targetRef,n=e.observerOptions;if(!Un()){r&&r.current&&(t.targetRef.current=r.current);var a=t.getElement();a&&(t.observableElement&&t.observableElement===a||(t.observableElement=a,t.resizeObserver.observe(a,n)))}},t.getElement=function(){var e=t.props,r=e.querySelector,n=e.targetDomEl;if(Un())return null;if(r)return document.querySelector(r);if(n&&Kn(n))return n;if(t.targetRef&&Kn(t.targetRef.current))return t.targetRef.current;var a=j(t);if(!a)return null;switch(t.getRenderType()){case"renderProp":case"childFunction":case"child":case"childArray":return a;default:return a.parentElement}},t.createResizeHandler=function(e){var r=t.props,n=r.handleWidth,a=void 0===n||n,i=r.handleHeight,o=void 0===i||i,s=r.onResize;if(a||o){var l=Jn(s,t.setState.bind(t),a,o);e.forEach((function(e){var r=e&&e.contentRect||{},n=r.width,a=r.height;!t.skipOnMount&&!Un()&&l({width:n,height:a}),t.skipOnMount=!1}))}},t.getRenderType=function(){var e=t.props,r=e.render,n=e.children;return Zn(r)?"renderProp":Zn(n)?"childFunction":s(n)?"child":Array.isArray(n)?"childArray":"parent"};var n=r.skipOnMount,a=r.refreshMode,i=r.refreshRate,o=void 0===i?1e3:i,d=r.refreshOptions;return t.state={width:void 0,height:void 0},t.skipOnMount=n,t.targetRef=l(),t.observableElement=null,Un()||(t.resizeHandler=Vn(t.createResizeHandler,a,o,d),t.resizeObserver=new window.ResizeObserver(t.resizeHandler)),t}(function(e,r){if("function"!=typeof r&&null!==r)throw new TypeError("Class extends value "+String(r)+" is not a constructor or null");function t(){this.constructor=e}tn(e,r),e.prototype=null===r?Object.create(r):(t.prototype=r.prototype,new t)})(r,e),r.prototype.componentDidMount=function(){this.attachObserver()},r.prototype.componentDidUpdate=function(){this.attachObserver()},r.prototype.componentWillUnmount=function(){Un()||(this.observableElement=null,this.resizeObserver.disconnect(),this.cancelHandler())},r.prototype.render=function(){var e,r=this.props,t=r.render,a=r.children,i=r.nodeType,o=void 0===i?"div":i,s=this.state,l={width:s.width,height:s.height,targetRef:this.targetRef};switch(this.getRenderType()){case"renderProp":return t&&t(l);case"childFunction":return(e=a)(l);case"child":if((e=a).type&&"string"==typeof e.type){var c=function(e,r){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(n=Object.getOwnPropertySymbols(e);a<n.length;a++)r.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(t[n[a]]=e[n[a]])}return t}(l,["targetRef"]);return d(e,c)}return d(e,l);case"childArray":return(e=a).map((function(e){return!!e&&d(e,l)}));default:return n.createElement(o,null)}}}(c);var qn,Xn=Un()?u:h;!function(e){e.Ready="overlay-context-ready",e.Change="overlay-context-change"}(qn||(qn={}));const Gn=y.div`
    display: flex;
    flex-direction: column;
`,Qn=e=>"right"===e?"bottom-end":"bottom-start",ea=({enabled:n,isOpen:a,onOpen:s,onClose:l,onDismiss:d,renderElement:c,renderDropdown:h,customZIndex:b,clickToToggle:g=!1,offset:m=0,alignment:f="left",fitAvailableHeight:y})=>{var p;const v=x(),j=qt["sm-max"]({theme:v}),T=i(null),_=i(null),{width:R}=function(e){void 0===e&&(e={});var r=e.skipOnMount,t=void 0!==r&&r,n=e.refreshMode,a=e.refreshRate,s=void 0===a?1e3:a,l=e.refreshOptions,d=e.handleWidth,c=void 0===d||d,u=e.handleHeight,h=void 0===u||u,b=e.targetRef,g=e.observerOptions,m=e.onResize,f=i(t),y=i(null),p=null!=b?b:y,v=i(),x=o({width:void 0,height:void 0}),D=x[0],w=x[1];return Xn((function(){if(!Un()){var e=Jn(m,w,c,h);v.current=Vn((function(r){(c||h)&&r.forEach((function(r){var t=r&&r.contentRect||{},n=t.width,a=t.height;!f.current&&!Un()&&e({width:n,height:a}),f.current=!1}))}),n,s,l);var r=new window.ResizeObserver(v.current);return p.current&&r.observe(p.current,g),function(){r.disconnect();var e=v.current;e&&e.cancel&&e.cancel()}}}),[n,s,l,c,h,m,g,p.current]),nn({ref:p},D)}({targetRef:T,handleHeight:!1}),H={name:"center",fn:({x:e,rects:r})=>{const t=0===e||e+r.floating.width===window.innerWidth,n=window.innerWidth<j;return{x:t&&n?(window.innerWidth-r.floating.width)/2:e}}},{refs:L,floatingStyles:I,context:W}=w({open:a,onOpenChange:(e,r,t)=>{"escape-key"===t?null==d||d():e&&!a?null==s||s():!e&&a&&(null==l||l(t))},whileElementsMounted:$,placement:Qn(f),middleware:[F(m),E(),C({limiter:S()}),O({apply({availableHeight:e}){_.current&&Object.assign(_.current.style,{maxHeight:y?`${e}px`:void 0,overflowY:y?"hidden":void 0})}}),H]}),N=(()=>{const[e,r]=o(void 0),t=D();return u((()=>{if(!t)return void r(void 0);const e=e=>{r(e.zIndex)};return t.events.on(qn.Change,e),t.events.emit(qn.Ready),()=>t.events.off(qn.Change,e)}),[t]),e})(),{isMounted:P,styles:V}=B(W,{initial:{opacity:0},open:{opacity:1},duration:300}),Z=M(W,{enabled:n,toggle:g}),U=A(W,{enabled:n}),{getReferenceProps:K,getFloatingProps:J}=z([Z,U]);return e(r,{children:[t("div",Object.assign({ref:e=>{T.current=e,L.setReference(e)}},K(),{children:c()})),P&&t(k,{children:t(Y,Object.assign({context:W,modal:!1,initialFocus:_,returnFocus:!1},{children:t("div",Object.assign({ref:L.setFloating,style:Object.assign(Object.assign({},I),{zIndex:null!==(p=null!=b?b:N)&&void 0!==p?p:50})},J(),{children:t(Gn,Object.assign({ref:_,style:Object.assign({},V),inert:V.opacity<1?"":void 0},{children:h({elementWidth:R})}))}))}))})]})},ra=y.div`
    --vertical-inset: ${Kt["spacing-24"]};
    --horizontal-inset: ${Kt["spacing-20"]};
    --header-bottom-spacing: ${Kt["spacing-4"]};

    border: ${Ut["width-010"]} ${Ut.solid} ${Pt.border};
    border-radius: ${Jt.sm};
    overflow: hidden;

    width: ${e=>e.$width}px;
    max-width: 41rem;
    min-width: 21rem;

    ${Xt.MaxWidth.sm} {
        min-width: 17.5rem;
    }
`;var ta={exports:{}};ta.exports=function(){var e=1e3,r=6e4,t=36e5,n="millisecond",a="second",i="minute",o="hour",s="day",l="week",d="month",c="quarter",u="year",h="date",b="Invalid Date",g=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,m=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,f={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(e){var r=["th","st","nd","rd"],t=e%100;return"["+e+(r[(t-20)%10]||r[t]||r[0])+"]"}},y=function(e,r,t){var n=String(e);return!n||n.length>=r?e:""+Array(r+1-n.length).join(t)+e},p={s:y,z:function(e){var r=-e.utcOffset(),t=Math.abs(r),n=Math.floor(t/60),a=t%60;return(r<=0?"+":"-")+y(n,2,"0")+":"+y(a,2,"0")},m:function e(r,t){if(r.date()<t.date())return-e(t,r);var n=12*(t.year()-r.year())+(t.month()-r.month()),a=r.clone().add(n,d),i=t-a<0,o=r.clone().add(n+(i?-1:1),d);return+(-(n+(t-a)/(i?a-o:o-a))||0)},a:function(e){return e<0?Math.ceil(e)||0:Math.floor(e)},p:function(e){return{M:d,y:u,w:l,d:s,D:h,h:o,m:i,s:a,ms:n,Q:c}[e]||String(e||"").toLowerCase().replace(/s$/,"")},u:function(e){return void 0===e}},v="en",x={};x[v]=f;var D="$isDayjsObject",w=function(e){return e instanceof C||!(!e||!e[D])},$=function e(r,t,n){var a;if(!r)return v;if("string"==typeof r){var i=r.toLowerCase();x[i]&&(a=i),t&&(x[i]=t,a=i);var o=r.split("-");if(!a&&o.length>1)return e(o[0])}else{var s=r.name;x[s]=r,a=s}return!n&&a&&(v=a),a||!n&&v},F=function(e,r){if(w(e))return e.clone();var t="object"==typeof r?r:{};return t.date=e,t.args=arguments,new C(t)},E=p;E.l=$,E.i=w,E.w=function(e,r){return F(e,{locale:r.$L,utc:r.$u,x:r.$x,$offset:r.$offset})};var C=function(){function f(e){this.$L=$(e.locale,null,!0),this.parse(e),this.$x=this.$x||e.x||{},this[D]=!0}var y=f.prototype;return y.parse=function(e){this.$d=function(e){var r=e.date,t=e.utc;if(null===r)return new Date(NaN);if(E.u(r))return new Date;if(r instanceof Date)return new Date(r);if("string"==typeof r&&!/Z$/i.test(r)){var n=r.match(g);if(n){var a=n[2]-1||0,i=(n[7]||"0").substring(0,3);return t?new Date(Date.UTC(n[1],a,n[3]||1,n[4]||0,n[5]||0,n[6]||0,i)):new Date(n[1],a,n[3]||1,n[4]||0,n[5]||0,n[6]||0,i)}}return new Date(r)}(e),this.init()},y.init=function(){var e=this.$d;this.$y=e.getFullYear(),this.$M=e.getMonth(),this.$D=e.getDate(),this.$W=e.getDay(),this.$H=e.getHours(),this.$m=e.getMinutes(),this.$s=e.getSeconds(),this.$ms=e.getMilliseconds()},y.$utils=function(){return E},y.isValid=function(){return!(this.$d.toString()===b)},y.isSame=function(e,r){var t=F(e);return this.startOf(r)<=t&&t<=this.endOf(r)},y.isAfter=function(e,r){return F(e)<this.startOf(r)},y.isBefore=function(e,r){return this.endOf(r)<F(e)},y.$g=function(e,r,t){return E.u(e)?this[r]:this.set(t,e)},y.unix=function(){return Math.floor(this.valueOf()/1e3)},y.valueOf=function(){return this.$d.getTime()},y.startOf=function(e,r){var t=this,n=!!E.u(r)||r,c=E.p(e),b=function(e,r){var a=E.w(t.$u?Date.UTC(t.$y,r,e):new Date(t.$y,r,e),t);return n?a:a.endOf(s)},g=function(e,r){return E.w(t.toDate()[e].apply(t.toDate("s"),(n?[0,0,0,0]:[23,59,59,999]).slice(r)),t)},m=this.$W,f=this.$M,y=this.$D,p="set"+(this.$u?"UTC":"");switch(c){case u:return n?b(1,0):b(31,11);case d:return n?b(1,f):b(0,f+1);case l:var v=this.$locale().weekStart||0,x=(m<v?m+7:m)-v;return b(n?y-x:y+(6-x),f);case s:case h:return g(p+"Hours",0);case o:return g(p+"Minutes",1);case i:return g(p+"Seconds",2);case a:return g(p+"Milliseconds",3);default:return this.clone()}},y.endOf=function(e){return this.startOf(e,!1)},y.$set=function(e,r){var t,l=E.p(e),c="set"+(this.$u?"UTC":""),b=(t={},t[s]=c+"Date",t[h]=c+"Date",t[d]=c+"Month",t[u]=c+"FullYear",t[o]=c+"Hours",t[i]=c+"Minutes",t[a]=c+"Seconds",t[n]=c+"Milliseconds",t)[l],g=l===s?this.$D+(r-this.$W):r;if(l===d||l===u){var m=this.clone().set(h,1);m.$d[b](g),m.init(),this.$d=m.set(h,Math.min(this.$D,m.daysInMonth())).$d}else b&&this.$d[b](g);return this.init(),this},y.set=function(e,r){return this.clone().$set(e,r)},y.get=function(e){return this[E.p(e)]()},y.add=function(n,c){var h,b=this;n=Number(n);var g=E.p(c),m=function(e){var r=F(b);return E.w(r.date(r.date()+Math.round(e*n)),b)};if(g===d)return this.set(d,this.$M+n);if(g===u)return this.set(u,this.$y+n);if(g===s)return m(1);if(g===l)return m(7);var f=(h={},h[i]=r,h[o]=t,h[a]=e,h)[g]||1,y=this.$d.getTime()+n*f;return E.w(y,this)},y.subtract=function(e,r){return this.add(-1*e,r)},y.format=function(e){var r=this,t=this.$locale();if(!this.isValid())return t.invalidDate||b;var n=e||"YYYY-MM-DDTHH:mm:ssZ",a=E.z(this),i=this.$H,o=this.$m,s=this.$M,l=t.weekdays,d=t.months,c=t.meridiem,u=function(e,t,a,i){return e&&(e[t]||e(r,n))||a[t].slice(0,i)},h=function(e){return E.s(i%12||12,e,"0")},g=c||function(e,r,t){var n=e<12?"AM":"PM";return t?n.toLowerCase():n};return n.replace(m,(function(e,n){return n||function(e){switch(e){case"YY":return String(r.$y).slice(-2);case"YYYY":return E.s(r.$y,4,"0");case"M":return s+1;case"MM":return E.s(s+1,2,"0");case"MMM":return u(t.monthsShort,s,d,3);case"MMMM":return u(d,s);case"D":return r.$D;case"DD":return E.s(r.$D,2,"0");case"d":return String(r.$W);case"dd":return u(t.weekdaysMin,r.$W,l,2);case"ddd":return u(t.weekdaysShort,r.$W,l,3);case"dddd":return l[r.$W];case"H":return String(i);case"HH":return E.s(i,2,"0");case"h":return h(1);case"hh":return h(2);case"a":return g(i,o,!0);case"A":return g(i,o,!1);case"m":return String(o);case"mm":return E.s(o,2,"0");case"s":return String(r.$s);case"ss":return E.s(r.$s,2,"0");case"SSS":return E.s(r.$ms,3,"0");case"Z":return a}return null}(e)||a.replace(":","")}))},y.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},y.diff=function(n,h,b){var g,m=this,f=E.p(h),y=F(n),p=(y.utcOffset()-this.utcOffset())*r,v=this-y,x=function(){return E.m(m,y)};switch(f){case u:g=x()/12;break;case d:g=x();break;case c:g=x()/3;break;case l:g=(v-p)/6048e5;break;case s:g=(v-p)/864e5;break;case o:g=v/t;break;case i:g=v/r;break;case a:g=v/e;break;default:g=v}return b?g:E.a(g)},y.daysInMonth=function(){return this.endOf(d).$D},y.$locale=function(){return x[this.$L]},y.locale=function(e,r){if(!e)return this.$L;var t=this.clone(),n=$(e,r,!0);return n&&(t.$L=n),t},y.clone=function(){return E.w(this.$d,this)},y.toDate=function(){return new Date(this.valueOf())},y.toJSON=function(){return this.isValid()?this.toISOString():null},y.toISOString=function(){return this.$d.toISOString()},y.toString=function(){return this.$d.toUTCString()},f}(),S=C.prototype;return F.prototype=S,[["$ms",n],["$s",a],["$m",i],["$H",o],["$W",s],["$M",d],["$y",u],["$D",h]].forEach((function(e){S[e[1]]=function(r){return this.$g(r,e[0],e[1])}})),F.extend=function(e,r){return e.$i||(e(r,C,F),e.$i=!0),F},F.locale=$,F.isDayjs=w,F.unix=function(e){return F(1e3*e)},F.en=x[v],F.Ls=x,F.p={},F}();var na=L(ta.exports),aa={exports:{}};aa.exports=function(){var e={LTS:"h:mm:ss A",LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D, YYYY",LLL:"MMMM D, YYYY h:mm A",LLLL:"dddd, MMMM D, YYYY h:mm A"},r=/(\[[^[]*\])|([-_:/.,()\s]+)|(A|a|YYYY|YY?|MM?M?M?|Do|DD?|hh?|HH?|mm?|ss?|S{1,3}|z|ZZ?)/g,t=/\d\d/,n=/\d\d?/,a=/\d*[^-_:/,()\s\d]+/,i={},o=function(e){return(e=+e)+(e>68?1900:2e3)},s=function(e){return function(r){this[e]=+r}},l=[/[+-]\d\d:?(\d\d)?|Z/,function(e){(this.zone||(this.zone={})).offset=function(e){if(!e)return 0;if("Z"===e)return 0;var r=e.match(/([+-]|\d\d)/g),t=60*r[1]+(+r[2]||0);return 0===t?0:"+"===r[0]?-t:t}(e)}],d=function(e){var r=i[e];return r&&(r.indexOf?r:r.s.concat(r.f))},c=function(e,r){var t,n=i.meridiem;if(n){for(var a=1;a<=24;a+=1)if(e.indexOf(n(a,0,r))>-1){t=a>12;break}}else t=e===(r?"pm":"PM");return t},u={A:[a,function(e){this.afternoon=c(e,!1)}],a:[a,function(e){this.afternoon=c(e,!0)}],S:[/\d/,function(e){this.milliseconds=100*+e}],SS:[t,function(e){this.milliseconds=10*+e}],SSS:[/\d{3}/,function(e){this.milliseconds=+e}],s:[n,s("seconds")],ss:[n,s("seconds")],m:[n,s("minutes")],mm:[n,s("minutes")],H:[n,s("hours")],h:[n,s("hours")],HH:[n,s("hours")],hh:[n,s("hours")],D:[n,s("day")],DD:[t,s("day")],Do:[a,function(e){var r=i.ordinal,t=e.match(/\d+/);if(this.day=t[0],r)for(var n=1;n<=31;n+=1)r(n).replace(/\[|\]/g,"")===e&&(this.day=n)}],M:[n,s("month")],MM:[t,s("month")],MMM:[a,function(e){var r=d("months"),t=(d("monthsShort")||r.map((function(e){return e.slice(0,3)}))).indexOf(e)+1;if(t<1)throw new Error;this.month=t%12||t}],MMMM:[a,function(e){var r=d("months").indexOf(e)+1;if(r<1)throw new Error;this.month=r%12||r}],Y:[/[+-]?\d+/,s("year")],YY:[t,function(e){this.year=o(e)}],YYYY:[/\d{4}/,s("year")],Z:l,ZZ:l};function h(t){var n,a;n=t,a=i&&i.formats;for(var o=(t=n.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g,(function(r,t,n){var i=n&&n.toUpperCase();return t||a[n]||e[n]||a[i].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g,(function(e,r,t){return r||t.slice(1)}))}))).match(r),s=o.length,l=0;l<s;l+=1){var d=o[l],c=u[d],h=c&&c[0],b=c&&c[1];o[l]=b?{regex:h,parser:b}:d.replace(/^\[|\]$/g,"")}return function(e){for(var r={},t=0,n=0;t<s;t+=1){var a=o[t];if("string"==typeof a)n+=a.length;else{var i=a.regex,l=a.parser,d=e.slice(n),c=i.exec(d)[0];l.call(r,c),e=e.replace(c,"")}}return function(e){var r=e.afternoon;if(void 0!==r){var t=e.hours;r?t<12&&(e.hours+=12):12===t&&(e.hours=0),delete e.afternoon}}(r),r}}return function(e,r,t){t.p.customParseFormat=!0,e&&e.parseTwoDigitYear&&(o=e.parseTwoDigitYear);var n=r.prototype,a=n.parse;n.parse=function(e){var r=e.date,n=e.utc,o=e.args;this.$u=n;var s=o[1];if("string"==typeof s){var l=!0===o[2],d=!0===o[3],c=l||d,u=o[2];d&&(u=o[2]),i=this.$locale(),!l&&u&&(i=t.Ls[u]),this.$d=function(e,r,t){try{if(["x","X"].indexOf(r)>-1)return new Date(("X"===r?1e3:1)*e);var n=h(r)(e),a=n.year,i=n.month,o=n.day,s=n.hours,l=n.minutes,d=n.seconds,c=n.milliseconds,u=n.zone,b=new Date,g=o||(a||i?1:b.getDate()),m=a||b.getFullYear(),f=0;a&&!i||(f=i>0?i-1:b.getMonth());var y=s||0,p=l||0,v=d||0,x=c||0;return u?new Date(Date.UTC(m,f,g,y,p,v,x+60*u.offset*1e3)):t?new Date(Date.UTC(m,f,g,y,p,v,x)):new Date(m,f,g,y,p,v,x)}catch(e){return new Date("")}}(r,s,n),this.init(),u&&!0!==u&&(this.$L=this.locale(u).$L),c&&r!=this.format(s)&&(this.$d=new Date("")),i={}}else if(s instanceof Array)for(var b=s.length,g=1;g<=b;g+=1){o[1]=s[g-1];var m=t.apply(this,o);if(m.isValid()){this.$d=m.$d,this.$L=m.$L,this.init();break}g===b&&(this.$d=new Date(""))}else a.call(this,e)}}}();var ia=L(aa.exports),oa={exports:{}};oa.exports=function(e,r,t){r.prototype.isBetween=function(e,r,n,a){var i=t(e),o=t(r),s="("===(a=a||"()")[0],l=")"===a[1];return(s?this.isAfter(i,n):!this.isBefore(i,n))&&(l?this.isBefore(o,n):!this.isAfter(o,n))||(s?this.isBefore(i,n):!this.isAfter(i,n))&&(l?this.isAfter(o,n):!this.isBefore(o,n))}};var sa=L(oa.exports),la={exports:{}};la.exports=function(e,r){r.prototype.isSameOrAfter=function(e,r){return this.isSame(e,r)||this.isAfter(e,r)}};var da=L(la.exports),ca={exports:{}};ca.exports=function(e,r){r.prototype.isSameOrBefore=function(e,r){return this.isSame(e,r)||this.isBefore(e,r)}};var ua,ha,ba,ga=L(ca.exports),ma={exports:{}},fa=L(ma.exports=(ua={year:0,month:1,day:2,hour:3,minute:4,second:5},ha={},function(e,r,t){var n,a=function(e,r,t){void 0===t&&(t={});var n=new Date(e),a=function(e,r){void 0===r&&(r={});var t=r.timeZoneName||"short",n=e+"|"+t,a=ha[n];return a||(a=new Intl.DateTimeFormat("en-US",{hour12:!1,timeZone:e,year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit",timeZoneName:t}),ha[n]=a),a}(r,t);return a.formatToParts(n)},i=function(e,r){for(var n=a(e,r),i=[],o=0;o<n.length;o+=1){var s=n[o],l=s.type,d=s.value,c=ua[l];c>=0&&(i[c]=parseInt(d,10))}var u=i[3],h=24===u?0:u,b=i[0]+"-"+i[1]+"-"+i[2]+" "+h+":"+i[4]+":"+i[5]+":000",g=+e;return(t.utc(b).valueOf()-(g-=g%1e3))/6e4},o=r.prototype;o.tz=function(e,r){void 0===e&&(e=n);var a=this.utcOffset(),i=this.toDate(),o=i.toLocaleString("en-US",{timeZone:e}),s=Math.round((i-new Date(o))/1e3/60),l=t(o,{locale:this.$L}).$set("millisecond",this.$ms).utcOffset(15*-Math.round(i.getTimezoneOffset()/15)-s,!0);if(r){var d=l.utcOffset();l=l.add(a-d,"minute")}return l.$x.$timezone=e,l},o.offsetName=function(e){var r=this.$x.$timezone||t.tz.guess(),n=a(this.valueOf(),r,{timeZoneName:e}).find((function(e){return"timezonename"===e.type.toLowerCase()}));return n&&n.value};var s=o.startOf;o.startOf=function(e,r){if(!this.$x||!this.$x.$timezone)return s.call(this,e,r);var n=t(this.format("YYYY-MM-DD HH:mm:ss:SSS"),{locale:this.$L});return s.call(n,e,r).tz(this.$x.$timezone,!0)},t.tz=function(e,r,a){var o=a&&r,s=a||r||n,l=i(+t(),s);if("string"!=typeof e)return t(e).tz(s);var d=function(e,r,t){var n=e-60*r*1e3,a=i(n,t);if(r===a)return[n,r];var o=i(n-=60*(a-r)*1e3,t);return a===o?[n,a]:[e-60*Math.min(a,o)*1e3,Math.max(a,o)]}(t.utc(e,o).valueOf(),l,s),c=d[0],u=d[1],h=t(c).utcOffset(u);return h.$x.$timezone=s,h},t.tz.guess=function(){return Intl.DateTimeFormat().resolvedOptions().timeZone},t.tz.setDefault=function(e){n=e}}));na.extend(sa),na.extend(ga),na.extend(da),na.extend(ia),na.extend(fa),function(e){e.generateDays=e=>{const r=e.startOf("month"),t=na(r).startOf("week");return ya(t).map((e=>pa(e)))},e.generateDaysForCurrentWeek=e=>{const r=e.startOf("week");return pa(r)},e.generateMonths=e=>{const r=[];for(let t=0;t<12;t++){const n=e.month(t);r.push(na(n))}return r},e.generateDecadeOfYears=e=>{const r=e.year(),t=10*Math.floor(r/10),n=e.year(t),a=[n.subtract(1,"year"),n];for(let e=1;e<11;e++)a.push(n.add(e,"year"));return a},e.getStartEndDecade=e=>{const r=10*Math.floor(+e.format("YYYY")/10);return{beginDecade:r,endDecade:+na(`${r+9}-01-01`).format("YYYY")}},e.convertTo12HourFormat=e=>{const r=na(e,"HH:mm");return r.isValid()?r.format("h:mm a"):""},e.isWithinRange=(e,r,t,n="day")=>!r&&!t||(r&&t?e.isBetween(r,t,n,"[]"):r?e.isSameOrAfter(r,n):e.isSameOrBefore(t,n)),e.isPreviousMonthWithinRange=(r,t)=>e.isWithinRange(r.subtract(1,"month"),t,void 0,"month"),e.isPreviousYearWithinRange=(r,t)=>e.isWithinRange(r.subtract(1,"year"),t,void 0,"year"),e.isPreviousDecadeWithinRange=(r,t)=>{const{beginDecade:n}=e.getStartEndDecade(r);return e.isWithinRange(r.year(n).subtract(1,"year"),t,void 0,"year")},e.isNextMonthWithinRange=(r,t)=>e.isWithinRange(r.add(1,"month"),void 0,t,"month"),e.isNextYearWithinRange=(r,t)=>e.isWithinRange(r.add(1,"year"),void 0,t,"year"),e.isNextDecadeWithinRange=(r,t)=>{const{endDecade:n}=e.getStartEndDecade(r);return e.isWithinRange(r.year(n).add(1,"year"),void 0,t,"year")},e.getWeekStartEnd=e=>({start:e.startOf("week").format("YYYY-MM-DD"),end:e.endOf("week").format("YYYY-MM-DD")}),e.getFixedRangeStartEnd=(e,r)=>({start:e.format("YYYY-MM-DD"),end:e.add(r-1,"day").format("YYYY-MM-DD")}),e.isDisabledDay=(r,t,n,a)=>{const i=e.isWithinRange(r,n?na(n):void 0,a?na(a):void 0),o=t&&t.includes(r.format("YYYY-MM-DD"));return!i||!!o}}(ba||(ba={}));const ya=e=>{const r=[e];for(let t=1;t<6;t++){const n=e.add(t,"week");r.push(n)}return r},pa=e=>{const r=[];for(let t=0;t<7;t++){const n=e.add(t,"day");r.push(n)}return r},va=[1,3,5,7,8,10,12],xa=[4,6,9,11];var Da,wa,$a,Fa;!function(e){e.clampDay=(r,t,n)=>{const a=parseInt(r),i=parseInt(t),o=parseInt(n);return 0==a?"1":va.includes(i)?Math.min(a,31).toString():xa.includes(i)?Math.min(a,30).toString():2===i?e.isLeapYear(o)?Math.min(a,29).toString():Math.min(a,28).toString():r},e.clampMonth=e=>{const r=parseInt(e);return 0==r?"1":r>12?"12":e},e.isLeapYear=e=>e%4==0&&e%100!=0||e%400==0,e.getTimeDiffInMinutes=(e,r,t="HH:mm")=>{const n=na(e,t);return na(r,t).diff(n,"minute")},e.toDayjs=e=>e?na(e):na(),e.addMinutesToTime=(e,r,t="HH:mm")=>na(e,t).add(r,"minutes").format(t),e.isSame=(e,r,t="day")=>na(e).isSame(na(r),t)}(Da||(Da={})),function(e){e.isDateDisabled=(e,r)=>{const{disabledDates:t,minDate:n,maxDate:a}=r;return!!(t&&t.length&&t.includes(e))||(!(!n||!na(e).isBefore(n,"day"))||!(!a||!na(e).isAfter(a,"day")))},e.sanitizeInput=e=>{if(e){if(na(e).isValid())return e}return""}}(wa||(wa={})),function(e){e.generate=()=>Math.random().toString(36).substring(2,9)}($a||($a={})),function(e){e.transformWithSpaces=(e,r)=>{const t="(.{"+r+"})";return e.replace(/[^\dA-Z]/gi,"").replace(new RegExp(t,"g"),"$1 ").trim()},e.padValue=(e,r)=>{if("0"===e)return r?e:e.padStart(2,"0");if(""===e)return e;return parseInt(e).toString().padStart(2,"0")},e.shouldTruncateToTwoLines=(e,r)=>{const t=Math.floor(r/9);return e.length>=2*t||1===e.split(" ").length&&e.length>t},e.truncateOneLine=(e,r,t,n,a=8)=>{let i=0;r>t&&(i=Math.floor((r-t)/a));const o=n+i;if(o<e.length){const r=Math.floor(o/2);return e.substring(0,r)+" ... "+e.substring(e.length-r,e.length)}return e},e.truncateTwoLines=(e,r,t,n=1.2)=>{const a=Math.floor(2*r/(.6*t))*(2/n);if(e.length<=a)return e;const i=Math.floor(.6*a),o=Math.floor(.2*a);return`${e.substring(0,i)}...${e.substring(e.length-o)}`},e.getTextWidth=(r,t)=>{if("undefined"==typeof document)return 0;const n=(e.getTextWidth.canvas||(e.getTextWidth.canvas=document.createElement("canvas"))).getContext("2d");n.font=t;return n.measureText(r).width},e.maskValue=(e,t)=>{if(!e)return e;const{maskRange:n,unmaskRange:a,maskChar:i="•",maskRegex:o,maskTransformer:s}=t;if(s)return s(e);if(o)return e.replace(o,i);if(n){const{startIndex:t,endIndex:a}=r(n[0],n[1]);return e.substring(0,t)+i.repeat(e.substring(t,a+1).length)+e.substring(a+1)}if(a){const{startIndex:t,endIndex:n}=r(a[0],a[1]);return i.repeat(e.substring(0,t).length)+e.substring(t,n+1)+i.repeat(e.substring(n+1).length)}return e};const r=(e,r)=>e<r?{startIndex:e,endIndex:r}:{startIndex:r,endIndex:e}}(Fa||(Fa={}));const Ea=e=>{const[r,t]=o(e),n=i(e);return[r,b((e=>{n.current=e,t(e)}),[]),n]},Ca=y.div`
    display: inline-block;
    position: relative;
    width: ${({$size:e})=>e?`${e}px`:"1em"};
    height: ${({$size:e})=>e?`${e}px`:"1em"};
    color: ${e=>e.$color||"currentColor"};
`,Sa=v`
	0% {
	  transform: rotate(0deg);
	}
	100% {
	  transform: rotate(360deg);
	}
`,Oa=y.div`
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
    animation: ${Sa} 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
`,Ba=y(Oa)`
    animation-delay: -0.45s;
`,Ma=y(Oa)`
    animation-delay: -0.3s;
`,Aa=y(Oa)`
    animation-delay: -0.15s;
`,za=y.button`
    padding: ${Kt["spacing-8"]} ${Kt["spacing-16"]};
    min-width: 4rem;
    border: ${Ut["width-010"]} ${Ut.solid} transparent;
    border-radius: ${Jt.sm};
    transition: all ${Zt["duration-250"]} ${Zt["ease-default"]};
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;

    // -----------------------------------------------------------------------------
    // BUTTON STYLE + TEXT COLOR
    // -----------------------------------------------------------------------------
    ${e=>{switch(e.$buttonStyle){case"secondary":return p`
                    background-color: ${Pt.Primitive.white};
                    border-color: ${e.$buttonIsDanger?Pt["border-error-strong"]:Pt["border-primary"]};

                    color: ${e.$buttonIsDanger?Pt["text-error"]:Pt["text-primary"]};

                    &:hover,
                    &:active {
                        background-color: ${Pt["bg-hover-neutral"]};
                    }
                `;case"light":return p`
                    background-color: ${Pt.bg};
                    border-color: ${Pt.border};

                    color: ${e.$buttonIsDanger?Pt["text-error"]:Pt["text-primary"]};

                    &:hover,
                    &:active {
                        background-color: ${Pt["bg-hover-neutral"]};
                    }
                `;case"link":return p`
                    background-color: transparent;

                    color: ${e.$buttonIsDanger?Pt["text-error"]:Pt["text-primary"]};
                    &:hover,
                    &:active {
                        background-color: ${Pt["bg-hover-neutral"]};
                    }
                `;case"disabled":return p`
                    background-color: ${Pt["bg-disabled"]};

                    cursor: not-allowed;

                    &:hover {
                        box-shadow: none;
                    }

                    color: ${Pt["text-disabled"]};
                `;default:return p`
                    background-color: ${e.$buttonIsDanger?Pt["bg-error-strong"]:Pt["bg-primary"]};

                    ${Xt.MaxWidth.md} {
                        width: 100%;
                    }

                    color: ${Pt["text-inverse"]};

                    &:hover,
                    &:active {
                        background-color: ${e.$buttonIsDanger?Pt["bg-error-strong-hover"]:Pt["bg-primary-hover"]};
                    }
                `}}}

    // -----------------------------------------------------------------------------
	// BUTTON SIZE + TEXT SIZE
	// -----------------------------------------------------------------------------
	${e=>{switch(e.$buttonSizeStyle){case"small":return p`
                    height: 2.5rem;
                    ${Vt["body-md-semibold"]}

                    ${Xt.MaxWidth.xxs} {
                        height: auto;
                    }
                `;case"large":return p`
                    height: 4rem;
                    ${Vt["header-md-semibold"]}

                    ${Xt.MaxWidth.xxs} {
                        height: auto;
                    }
                `;default:return p`
                    height: 3rem;
                    ${Vt["header-xs-semibold"]}

                    ${Xt.MaxWidth.xxs} {
                        height: auto;
                    }
                `}}}
`,ka=y((({color:r,className:n,size:a})=>e(Ca,Object.assign({className:n,$size:a,$color:r},{children:[t(Oa,{id:"inner1"}),t(Ba,{id:"inner2"}),t(Ma,{id:"inner3"}),t(Aa,{id:"inner4"})]}))))`
    margin-right: 0.5rem;
`,Ya=(r,n)=>{const{children:a,disabled:i=!1,loading:o=!1,styleType:s="default",danger:l=!1}=r,d=R(r,["children","disabled","loading","styleType","danger"]),c={$buttonStyle:i?"disabled":s,$buttonSizeStyle:"default",$buttonIsDanger:l};return e(za,Object.assign({ref:n,"data-testid":d["data-testid"]||"button",disabled:i},c,d,{children:[o&&t(ka,{}),t("span",{children:a})]}))};Ya.displayName="Button.Default";const ja=(r,n)=>{const{children:a,disabled:i=!1,loading:o=!1,styleType:s="default",danger:l=!1}=r,d=R(r,["children","disabled","loading","styleType","danger"]),c={$buttonStyle:i?"disabled":s,$buttonSizeStyle:"small",$buttonIsDanger:l};return e(za,Object.assign({ref:n,"data-testid":d["data-testid"]||"button",disabled:i},c,d,{children:[o&&t(ka,{}),t("span",{children:a})]}))};ja.displayName="Button.Small";const Ta=(r,n)=>{const{children:a,disabled:i=!1,loading:o=!1,styleType:s="default",danger:l=!1}=r,d=R(r,["children","disabled","loading","styleType","danger"]),c={$buttonStyle:i?"disabled":s,$buttonSizeStyle:"large",$buttonIsDanger:l};return e(za,Object.assign({ref:n,"data-testid":d["data-testid"]||"button",disabled:i},c,d,{children:[o&&t(ka,{}),t("span",{children:a})]}))};Ta.displayName="Button.Large";const _a={Default:a.forwardRef(Ya),Small:a.forwardRef(ja),Large:a.forwardRef(Ta)},Ra=y.button`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: ${Kt["spacing-32"]};
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
                background-color: ${Pt["bg-hover-neutral"]};
            `}
    }
`,Ha=a.forwardRef(((e,r)=>{var{children:n,focusHighlight:a=!0,focusOutline:i="none",type:o="button"}=e,s=R(e,["children","focusHighlight","focusOutline","type"]);return t(Ra,Object.assign({ref:r,$outline:i,$highlight:a,type:o},s,{children:n}))})),La=p`
    color: ${Pt.icon};
    height: 1rem;
    width: 1rem;
`,Ia=y(T)`
    ${La}
`,Wa=y(_)`
    ${La}
`,Na=y(f)`
    ${La}
    transition: transform 250ms ease-in-out;
    margin-left: 0.5rem;
`,Pa=y.div`
    position: relative;
    width: 100%;
    display: flex;
    flex-direction: column;

    padding-top: var(--vertical-inset);
    padding-bottom: var(--vertical-inset);
`,Va=y.div`
    display: flex;
    flex: 1;
    position: relative;
`,Za=y.div`
    isolation: isolate;
    width: 100%;

    padding-left: var(--horizontal-inset);
    padding-right: var(--horizontal-inset);
`,Ua=y.div`
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    background: ${Pt.bg};

    padding-left: var(--horizontal-inset);
    padding-right: var(--horizontal-inset);

    ${e=>{if(!e.$visible)return p`
                display: none;
            `}}
`,Ka=y.div`
    display: flex;
    justify-content: space-between;

    padding-left: var(--header-horizontal-inset, var(--horizontal-inset));
    padding-right: var(--header-horizontal-inset, var(--horizontal-inset));
    padding-bottom: var(--header-bottom-spacing);
`,Ja=y.div`
    display: flex;
`,qa=y.button`
    border: none;
    display: flex;
    align-items: center;
    padding: 0.5rem;
    background: transparent;
    cursor: pointer;

    ${e=>!1===e.$visible?p`
                display: none;
            `:e.$expanded?p`
                ${Na} {
                    transform: rotate(180deg);
                }
            `:void 0};
`,Xa=y.span`
    ${Vt["body-md-regular"]}
    color: ${Pt.text};
`,Ga=y.div`
    display: flex;
`,Qa=y(Ha)`
    margin: auto 0;
    padding: 0.75rem;

    :disabled {
        cursor: not-allowed;
    }
`,ei=y.div`
    display: flex;
    gap: 0.5rem;
    margin-top: 1.5rem;

    padding-left: var(--horizontal-inset);
    padding-right: var(--horizontal-inset);
`,ri=y(_a.Small)`
    flex: 1;
`,ti=y.div`
    width: 100%;
    height: 100%;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(6, 2.5rem);
    align-content: center;
    justify-content: center;

    gap: 0.5rem 0;
`,ni=y.div`
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: ${Jt.md};
    margin: 0 0.5rem;
    transition: ${Zt["duration-150"]} ${Zt["ease-default"]};

    // default styles
    ${Vt["body-md-regular"]}
    border-radius: ${Jt.md};
    border: ${Ut["width-010"]} ${Ut.solid} transparent;
    background-clip: border-box;
    color: ${Pt.text};
    cursor: default;

    // cursor style
    ${e=>e.$interactive?p`
                cursor: pointer;
            `:e.$disabledDisplay?p`
                cursor: not-allowed;
            `:void 0}

    // background, border and text styles
    ${({$variant:e,$interactive:r,$disabledDisplay:t})=>"selected-month"===e?p`
                background: ${Pt["bg-selected"]};
                border-color: ${Pt["border-selected"]};
                color: ${Pt["text-selected"]};
                font-weight: ${Vt.Spec["weight-semibold"]};

                ${r&&p`
                    &:hover {
                        background: ${Pt["bg-selected-hover"]};
                        border-color: ${Pt["border-selected-hover"]};
                        color: ${Pt["text-selected-hover"]};
                    }
                `}
            `:"current-month"===e?p`
                color: ${Pt["text-primary"]};
                font-weight: ${Vt.Spec["weight-semibold"]};
            `:t?p`
                color: ${Pt["text-disabled-subtlest"]};
            `:void 0}

    // hover styles
    ${({$variant:e,$interactive:r})=>{if(r)return"selected-month"===e?p`
                &:hover {
                    background: ${Pt["bg-selected-hover"]};
                    border-color: ${Pt["border-selected-hover"]};
                    color: ${Pt["text-selected-hover"]};
                    font-weight: ${Vt.Spec["weight-semibold"]};
                }
            `:p`
            &:hover {
                background: ${Pt["bg-hover"]};
                color: ${Pt["text-hover"]};
                font-weight: ${Vt.Spec["weight-semibold"]};
            }
        `}}
`,ai=({calendarDate:e,currentFocus:r,selectedStartDate:n,selectedEndDate:a,viewCalendarDate:i,isNewSelection:o,minDate:s,maxDate:l,allowDisabledSelection:d,onMonthSelect:c})=>{const u=g((()=>ba.generateMonths(na(e))),[e]),h=e=>{const t="start"===r&&a&&e.isAfter(a,"month")&&o,i="end"===r&&n&&e.isBefore(n,"month")&&o;return t||i},b=e=>{const r=e.format("MMMM"),t=(n=e,!ba.isWithinRange(n,s?na(s):void 0,l?na(l):void 0,"month"));var n;const a=i.isSame(e,"month")?"selected-month":na().isSame(e,"month")?"current-month":"default";return{disabledDisplay:t||h(e),interactive:!t||d,month:r,variant:a}};return u.length?t(ti,{children:u.map((e=>{const{disabledDisplay:r,interactive:n,variant:a,month:i}=b(e);return t(ni,Object.assign({$variant:a,$disabledDisplay:r,$interactive:n,onClick:()=>((e,r)=>{r||c(e)})(e,!n)},{children:i}),i)}))}):null},ii=y.div`
    width: 100%;
    height: 100%;
    display: grid;
    align-content: center;
    align-items: center;
    grid-template-columns: repeat(3, 1fr);
`,oi=y.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 1rem 0.5rem;
    transition: ${Zt["duration-150"]} ${Zt["ease-default"]};
    padding: 0.5rem;

    // default styles
    ${Vt["body-md-regular"]}
    border-radius: ${Jt.md};
    border: ${Ut["width-010"]} ${Ut.solid} transparent;
    background-clip: border-box;
    color: ${Pt.text};
    cursor: default;

    // cursor style
    ${({$interactive:e,$disabledDisplay:r})=>e?p`
                cursor: pointer;
            `:r?p`
                cursor: not-allowed;
            `:void 0}

    // background, border and text styles
    ${({$variant:e,$interactive:r,$disabledDisplay:t})=>"selected-year"===e?p`
                background: ${Pt["bg-selected"]};
                border-color: ${Pt["border-selected"]};
                color: ${Pt["text-selected"]};
                font-weight: ${Vt.Spec["weight-semibold"]};

                ${r&&p`
                    &:hover {
                        background: ${Pt["bg-selected-hover"]};
                        border-color: ${Pt["border-selected-hover"]};
                        color: ${Pt["text-selected-hover"]};
                    }
                `}
            `:"current-year"===e?p`
                color: ${Pt["text-primary"]};
                font-weight: ${Vt.Spec["weight-semibold"]};
            `:"other-decade"===e||t?p`
                color: ${Pt["text-disabled-subtlest"]};
            `:void 0}

    // hover styles
    ${({$variant:e,$interactive:r})=>{if(r)return"selected-year"===e?p`
                &:hover {
                    background: ${Pt["bg-selected-hover"]};
                    border-color: ${Pt["border-selected-hover"]};
                    color: ${Pt["text-selected-hover"]};
                    font-weight: ${Vt.Spec["weight-semibold"]};
                }
            `:p`
            &:hover {
                background: ${Pt["bg-hover"]};
                color: ${Pt["text-hover"]};
                font-weight: ${Vt.Spec["weight-semibold"]};
            }
        `}}
`,si=({calendarDate:e,currentFocus:r,selectedStartDate:n,selectedEndDate:a,viewCalendarDate:i,isNewSelection:o,minDate:s,maxDate:l,allowDisabledSelection:d,onYearSelect:c})=>{const u=g((()=>ba.generateDecadeOfYears(na(e))),[e]),h=e=>{const t="start"===r&&a&&e.isAfter(a,"year")&&o,i="end"===r&&n&&e.isBefore(n,"year")&&o;return t||i},b=e=>{const r=[0,11].includes(u.indexOf(e)),t=e.year(),n=(a=e,!ba.isWithinRange(a,s?na(s):void 0,l?na(l):void 0,"year"));var a;const o=r?"other-decade":i.isSame(e,"year")?"selected-year":na().isSame(e,"year")?"current-year":"default";return{disabledDisplay:n||h(e),interactive:!n||d,year:t,variant:o}};return u.length?t(ii,{children:u.map((e=>{const{disabledDisplay:r,interactive:n,variant:a,year:i}=b(e);return t(oi,Object.assign({$variant:a,$disabledDisplay:r,$interactive:n,onClick:()=>((e,r)=>{r||c(e)})(e,!n)},{children:i}),i)}))}):null},li=a.forwardRef(((n,a)=>{var{children:s,initialCalendarDate:l,minDate:d,maxDate:c,currentFocus:h,selectedStartDate:b,selectedEndDate:g,selectWithinRange:f,dynamicHeight:y=!1,allowDisabledSelection:p,onCalendarDateChange:v,withButton:x,doneButtonDisabled:D,onDismiss:w,showNavigationHeader:$=!0,getLeftArrowDate:F,getRightArrowDate:E,isLeftArrowDisabled:C,isRightArrowDisabled:S,getMonthHeaderLabel:O,getYearHeaderLabel:B}=n,M=R(n,["children","initialCalendarDate","minDate","maxDate","currentFocus","selectedStartDate","selectedEndDate","selectWithinRange","dynamicHeight","allowDisabledSelection","onCalendarDateChange","withButton","doneButtonDisabled","onDismiss","showNavigationHeader","getLeftArrowDate","getRightArrowDate","isLeftArrowDisabled","isRightArrowDisabled","getMonthHeaderLabel","getYearHeaderLabel"]);const[A,z]=o(Da.toDayjs(l)),[k,Y]=o(Da.toDayjs(l)),[j,T]=o("default"),_=i(null),H=i(null),L=i();m(a,(()=>({defaultView(){T("default")},resetView(){const e=Da.toDayjs(l);z(e),Y(e),T("default")},setCalendarDate(e){const r=Da.toDayjs(e);z(r),Y(r)}}))),u((()=>{const e=Da.toDayjs(l);z(e),Y(e)}),[l]),u((()=>{U(k)}),[k]);const I=()=>{"month-options"!==j?(T("month-options"),L.current.focus()):(T("default"),z(k))},W=()=>{"default"!==j?(T("default"),z(k)):T("year-options")},N=()=>{L.current.focus();const e=F?F(A):A.subtract(1,"month");switch(j){case"default":Y(e),z(e);break;case"month-options":z((e=>e.subtract(1,"year")));break;case"year-options":z((e=>e.subtract(10,"year")))}},P=()=>{L.current.focus();const e=E?E(A):A.add(1,"month");switch(j){case"default":Y(e),z(e);break;case"month-options":z((e=>e.add(1,"year")));break;case"year-options":z((e=>e.add(10,"year")))}},V=e=>{z(e),Y(e),x||T("default")},Z=()=>{const e=Da.toDayjs(l);z(e),Y(e),"default"===j?K("reset"):T("default")},U=e=>{v&&v(e)},K=e=>{w&&w(e)},J=()=>{if(!d||p)return!1;const e=na(d);return"month-options"===j?!ba.isPreviousYearWithinRange(A,e):"year-options"===j?!ba.isPreviousDecadeWithinRange(A,e):C?C(A):!ba.isPreviousMonthWithinRange(A,e)},q=()=>{if(!c||p)return!1;const e=na(c);return"month-options"===j?!ba.isNextYearWithinRange(A,e):"year-options"===j?!ba.isNextDecadeWithinRange(A,e):S?S(A):!ba.isNextMonthWithinRange(A,e)},X=()=>{if("year-options"===j){const{beginDecade:e,endDecade:r}=ba.getStartEndDecade(A);return`${e} to ${r}`}return B?B(A):A.format("YYYY")},G=()=>{const n=O?O(A):A.format("MMM");return e(r,{children:[e(qa,Object.assign({type:"button",tabIndex:-1,$expanded:"month-options"===j,$visible:"default"===j,id:"month-dropdown",onClick:I},{children:[t(Xa,{children:n}),t(Na,{})]})),e(qa,Object.assign({type:"button",tabIndex:-1,$expanded:"default"!==j,id:"year-dropdown",onClick:W},{children:[t(Xa,{children:X()}),t(Na,{})]}))]})},Q=()=>{switch(j){case"month-options":return t(ai,{calendarDate:A,currentFocus:h,minDate:d,maxDate:c,selectedStartDate:b,selectedEndDate:g,viewCalendarDate:k,isNewSelection:f,onMonthSelect:V,allowDisabledSelection:p});case"year-options":return t(si,{calendarDate:A,currentFocus:h,minDate:d,maxDate:c,selectedStartDate:b,selectedEndDate:g,viewCalendarDate:k,isNewSelection:f,onYearSelect:V,allowDisabledSelection:p});default:return null}};return e(Pa,Object.assign({ref:L,"data-id":"calendar-container","data-testid":"calendar-container"},M,{children:[$&&e(Ka,Object.assign({"data-id":"calendar-header","data-testid":"calendar-header"},{children:[t(Ja,{children:G()}),e(Ga,{children:[t(Qa,Object.assign({"aria-label":"Previous month","data-testid":"left-arrow-btn",disabled:J(),focusHighlight:!1,tabIndex:-1,onClick:N},{children:t(Ia,{})})),t(Qa,Object.assign({"aria-label":"Next month","data-testid":"right-arrow-btn",disabled:q(),focusHighlight:!1,tabIndex:-1,onClick:P},{children:t(Wa,{})}))]})]})),t(Va,{children:(()=>{const n="function"==typeof s?s({calendarDate:k,currentView:j}):s;return e(r,y?{children:["default"===j&&n,Q()]}:{children:[t(Za,{children:n}),t(Ua,Object.assign({$visible:"default"!==j},{children:Q()}))]})})()}),(()=>{if(!x)return;const r=!!("default"===j)&&D;return e(ei,{children:[t(ri,Object.assign({ref:H,"data-testid":"cancel-button",styleType:"light",type:"button",onClick:Z},{children:"Cancel"})),t(ri,Object.assign({"data-testid":"done-button",ref:_,type:"button",onClick:()=>{r||(z(k),"default"===j?K("confirmed"):T("default"))},disabled:r},{children:"Done"}))]})})()]}))})),di=y.div`
    width: 100%;
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    row-gap: 0.25rem;
`,ci=y.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 2.5rem;
    pointer-events: none;
    user-select: none;

    ${Vt["body-sm-semibold"]};
    color: ${Pt.text};
`,ui=y.div`
    grid-column: 1 / -1;
    display: flex;
`,hi=e=>{let r=Pt.bg,t="transparent";switch(e.$type){case"hover-subtle":r=Pt["bg-hover"],t=Pt["bg-hover"];break;case"hover":r=Pt["bg-hover-strong"],t=Pt["bg-hover-strong"];break;case"hover-outline":r=Pt["bg-hover-subtle"],t=Pt["border-hover"];break;case"selected-outline":r=Pt["bg-selected"],t=Pt["border-selected"];break;case"selected-outline-subtle":r=Pt["bg-selected"],t=Pt["border-selected-subtle"];break;case"selected-hover":r=Pt["bg-selected-hover"];break;case"selected-hover-outline":r=Pt["bg-selected-hover"],t=Pt["border-selected-hover"]}return{color:r,borderColor:t}},bi=y.div`
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    width: 100%;
    height: 2.5rem;
`,gi=y.div`
    position: absolute;
    height: 2.5rem;
    width: 50%;
    transition: ${Zt["duration-150"]} ${Zt["ease-default"]};
    border: ${Ut["width-010"]} ${Ut.solid} transparent;
    border-left: none;
    border-right: none;

    ${e=>{if(!e.$type)return;const{color:r,borderColor:t}=hi(e);return p`
            background-color: ${r};
            background-clip: border-box;
            border-top-color: ${t};
            border-bottom-color: ${t};
        `}}
`,mi=y(gi)`
    left: 0;
`,fi=y(gi)`
    right: 0;
`,yi=y.div`
    position: absolute;
    z-index: 1;

    display: flex;
    align-items: center;
    justify-content: center;
    height: 2.5rem;
    width: 2.5rem;
    transition: ${Zt["duration-150"]} ${Zt["ease-default"]};

    border: ${Ut["width-010"]} ${Ut.solid} transparent;
    border-radius: ${Jt.md};

    ${e=>{if(e.$type){const{color:r,borderColor:t}=hi(e);return p`
                background-color: ${r};
                background-clip: content-box;
                border-color: ${t};
            `}}}
`,pi=y(yi)`
    right: calc(50% - 1.25rem);
    clip-path: inset(-3px 1.25rem -3px -3px);
`,vi=y(yi)`
    left: calc(50% - 1.25rem);
    clip-path: inset(-3px -3px -3px 1.25rem);
`,xi=y.div`
    position: absolute;
    top: 0;
    bottom: 0;
    z-index: 2;

    display: flex;
    align-items: center;
    justify-content: center;
    height: 2.5rem;
    width: 2.5rem;
    ${Vt["body-md-regular"]}
    transition: ${Zt["duration-150"]} ${Zt["ease-default"]};

    cursor: ${e=>e.$interactive?"pointer":null===e.$interactive?"default":"not-allowed"};

    ${e=>{const{$disabled:r,$type:t}=e;if(r)return p`
                color: ${Pt["text-disabled-subtlest"]};
            `;switch(t){case"selected":return p`
                    font-weight: ${Vt.Spec["weight-semibold"]};
                    color: ${Pt["text-selected"]};
                `;case"selected-hover":return p`
                    font-weight: ${Vt.Spec["weight-semibold"]};
                    color: ${Pt["text-selected-hover"]};
                `;case"current":return p`
                    font-weight: ${Vt.Spec["weight-semibold"]};
                    color: ${Pt["text-primary"]};
                `;case"hover":return p`
                    font-weight: ${Vt.Spec["weight-semibold"]};
                    color: ${Pt["text-hover"]};
                `;case"unavailable":return p`
                    color: ${Pt["text-disabled-subtlest"]};
                `;case"hidden":return p`
                    visibility: hidden;
                `;default:return p`
                    color: ${Pt.text};
                `}}}
`,Di=y.div`
    position: absolute;
    width: 4px;
    height: 4px;
    background-color: currentColor;
    border-radius: 50%;
    bottom: 4px;
`,wi=({bgLeft:r,bgRight:n,circleLeft:a,circleRight:i,labelType:o,disabled:s,interactive:l,currentDateIndicator:d,date:c,onSelect:u,onHover:h,onHoverEnd:b})=>{const g=na().isSame(c,"day");return e(bi,{children:[t(mi,{$type:r}),t(pi,{$type:a}),t(fi,{$type:n}),t(vi,{$type:i}),e(xi,Object.assign({$type:o,$disabled:s,$interactive:l,onClick:()=>{u(c)},onMouseEnter:()=>{h(c)},onMouseLeave:()=>{b&&b(c)}},{children:[c.date(),d&&g&&t(Di,{$disabled:s})]}))]})},$i=({date:e,calendarDate:r,startDate:n,endDate:a,currentFocus:i,hoverDate:o,minDate:s,maxDate:l,disabledDates:d,allowDisabledSelection:c,isNewSelection:u,showActiveMonthDaysOnly:h,onSelect:b,onHover:g})=>{const m=ba.isDisabledDay(e,d,s,l),f=!m||c,y=()=>{const e=na(o),r=e.isBefore(a,"day"),t=e.isAfter(n,"day");let s,l,d,c;return"start"===i&&a&&r&&(n&&t?(d=o,c=a):(s=o,l=n||a)),"end"===i&&n&&t&&(a&&r?(d=n,c=o):(s=a||n,l=o)),{hoverStart:s,hoverEnd:l,overlapStart:d,overlapEnd:c}},p={date:e,calendarDate:r,disabled:m,interactive:f,currentDateIndicator:!0,onSelect:()=>{b(e,!f)},onHover:()=>{g(e.format("YYYY-MM-DD"),!f)}};return t(wi,Object.assign({},p,(()=>{const t={};if(r.month()!==e.month())t.labelType=h?"hidden":"unavailable";else if(na().isSame(e,"day")&&!m)t.labelType="current";else if(u){const r="end"===i&&n&&e.isBefore(n),o="start"===i&&a&&e.isAfter(a);(r||o)&&(t.labelType="unavailable")}return t})(),(()=>{const t={},i=e.isSame(n,"day"),o=e.isSame(a,"day");return h&&r.month()!==e.month()?(t.labelType="hidden",t):((n&&i||a&&o)&&(t.labelType="selected",t.circleLeft="selected-outline",t.circleRight="selected-outline"),n&&a&&e.isBetween(n,a,"day","[]")&&(t.labelType="selected",i||(t.bgLeft="selected-outline-subtle"),o||(t.bgRight="selected-outline-subtle")),t)})(),(()=>{if(!o)return;const r={},t=e.isSame(o,"day"),{hoverStart:i,hoverEnd:s,overlapStart:l,overlapEnd:d}=y();if(t){const t=e.isSame(n,"day"),i=e.isSame(a,"day");t||i?(r.labelType="selected-hover",r.circleLeft="selected-hover-outline",r.circleRight="selected-hover-outline"):(r.labelType="hover",r.circleLeft="hover",r.circleRight="hover")}if(i&&s){if(e.isBetween(i,s,"day","[]")){const t=e.isSame(i,"day"),n=e.isSame(s,"day");t||(r.labelType="hover",r.bgLeft="hover-outline"),n||(r.labelType="hover",r.bgRight="hover-outline")}return r}return l&&d?(e.isBetween(l,d,"day","[]")&&t&&(r.labelType="selected-hover",r.circleLeft="selected-hover",r.circleRight="selected-hover"),r):r})()))};na.extend(sa);const Fi=({calendarDate:r,currentFocus:n,disabledDates:a,selectedStartDate:i,selectedEndDate:s,onSelect:l,onHover:d,isNewSelection:c,minDate:u,maxDate:h,allowDisabledSelection:b,showActiveMonthDaysOnly:m})=>{const f=g((()=>ba.generateDays(r)),[r]),[y,p]=o(""),v=(e,r)=>{r&&!b||l(e)},x=(e,r)=>{r&&!b||(p(e),d(e))},D=()=>{p(""),d("")};return e(di,Object.assign({"data-testid":"calendar-content"},{children:[f[0].map(((e,r)=>t(ci,{children:na(e).format("ddd")},`week-day-${r}`))),f.map(((e,o)=>t(ui,Object.assign({onMouseLeave:D},{children:e.map(((e,o)=>t($i,{date:e,calendarDate:r,startDate:i,endDate:s,hoverDate:y,currentFocus:n,minDate:u,maxDate:h,disabledDates:a,allowDisabledSelection:b,isNewSelection:c,showActiveMonthDaysOnly:m,onSelect:v,onHover:x},`day-${o}`)))}),o)))]}))},Ei=({date:e,calendarDate:r,selectedDate:n,hoverDate:a,minDate:i,maxDate:o,disabledDates:s,allowDisabledSelection:l,numberOfDays:d,onSelect:c,onHover:u})=>{const h=ba.isDisabledDay(e,s,i,o),b=!h||l,{start:g,end:m}=n?ba.getFixedRangeStartEnd(Da.toDayjs(n),d):{start:void 0,end:void 0},{start:f,end:y}=a?ba.getFixedRangeStartEnd(Da.toDayjs(a),d):{start:void 0,end:void 0},p=n&&e.isBetween(g,m,"day","[]"),v=a&&e.isBetween(f,y,"day","[]"),x=p&&e.isSame(g,"day")||v&&e.isSame(f,"day"),D=p&&e.isSame(m,"day")||v&&e.isSame(y,"day"),w=(e,r,t,n)=>{t?e.circleLeft=r:e.bgLeft=r,n?e.circleRight=r:e.bgRight=r},$={date:e,calendarDate:r,disabled:h,interactive:b,currentDateIndicator:!0,onSelect:()=>{c(e,!b)},onHover:()=>{u(e.format("YYYY-MM-DD"),!b)}};return t(wi,Object.assign({},$,(()=>{const t={};return p||v?t.labelType="selected":r.month()!==e.month()?t.labelType="unavailable":na().isSame(e,"day")&&!h&&(t.labelType="current"),t})(),(()=>{const r={},t=e.format("YYYY-MM-DD");return v&&w(r,"hover",t===f,t===y),p&&w(r,"selected-outline",t===g,t===m),p&&v&&(w(r,"selected-hover-outline",x,D),t===f&&t!==g&&(r.circleLeft="selected-hover")),r})()))},Ci=({calendarDate:r,disabledDates:n,selectedStartDate:a,onSelect:i,onHover:s,minDate:l,maxDate:d,allowDisabledSelection:c,numberOfDays:u})=>{const h=g((()=>ba.generateDays(r)),[r]),[b,m]=o(""),f=(e,r)=>{r&&!c||(i(e),e&&!na(e).isSame(e,"month")&&m(""))},y=(e,r)=>{r&&!c||(m(e),s(e))},p=()=>{m(""),s("")};return e(di,Object.assign({"data-testid":"calendar-content"},{children:[h[0].map(((e,r)=>t(ci,{children:na(e).format("ddd")},`week-day-${r}`))),h.map(((e,i)=>t(ui,Object.assign({onMouseLeave:p},{children:e.map(((e,i)=>t(Ei,{date:e,calendarDate:r,selectedDate:a,hoverDate:b,minDate:l,maxDate:d,disabledDates:n,allowDisabledSelection:c,onSelect:f,onHover:y,numberOfDays:u},`day-${i}`)))}),i)))]}))},Si=y.div`
    width: 100%;
    background: ${Pt.bg};
`,Oi=({date:e,calendarDate:r,selectedDate:n,hoverDate:a,minDate:i,maxDate:o,disabledDates:s,allowDisabledSelection:l,showActiveMonthDaysOnly:d,onSelect:c,onHover:u})=>{const h=ba.isDisabledDay(e,s,i,o),b=!h||l,g={date:e,calendarDate:r,disabled:h,interactive:b,currentDateIndicator:!0,onSelect:()=>{c(e,!b)},onHover:()=>{u(e.format("YYYY-MM-DD"),!b)}};return t(wi,Object.assign({},g,(()=>{const t={};r.month()!==e.month()?t.labelType=d?"hidden":"unavailable":na().isSame(e,"day")&&!h&&(t.labelType="current");const i=e.isSame(n,"day"),o=e.isSame(a,"day");return i&&o?(t.labelType="selected-hover",t.circleLeft="selected-hover-outline",t.circleRight="selected-hover-outline"):i?(t.labelType="selected",t.circleLeft="selected-outline",t.circleRight="selected-outline"):o&&(t.labelType="hover",t.circleLeft="hover-subtle",t.circleRight="hover-subtle"),t})()))};na.extend(sa);const Bi=({calendarDate:r,disabledDates:n,selectedDate:a,onSelect:i,onHover:s,minDate:l,maxDate:d,allowDisabledSelection:c,showActiveMonthDaysOnly:u})=>{const h=g((()=>ba.generateDays(r)),[r]),[b,m]=o(""),f=(e,r)=>{r&&!c||i(e)},y=(e,r)=>{r&&!c||(m(e),s(e))},p=()=>{m(""),s("")};return e(di,Object.assign({"data-testid":"calendar-content"},{children:[h[0].map(((e,r)=>t(ci,{children:na(e).format("ddd")},`week-day-${r}`))),h.map(((e,i)=>t(ui,Object.assign({onMouseLeave:p},{children:e.map(((e,i)=>t(Oi,{date:e,calendarDate:r,selectedDate:a,hoverDate:b,minDate:l,maxDate:d,disabledDates:n,allowDisabledSelection:c,showActiveMonthDaysOnly:u,onSelect:f,onHover:y},`day-${i}`)))}),i)))]}))},Mi=({date:e,calendarDate:r,selectedDate:n,hoverDate:a,minDate:i,maxDate:o,disabledDates:s,allowDisabledSelection:l,onSelect:d,onHover:c})=>{const u=ba.isDisabledDay(e,s,i,o),h=!u||l,{start:b,end:g}=ba.getWeekStartEnd(Da.toDayjs(n)),{start:m,end:f}=ba.getWeekStartEnd(Da.toDayjs(a)),y=n&&e.isBetween(b,g,"day","[]"),p=a&&e.isBetween(m,f,"day","[]"),v=y&&e.isSame(b)||p&&e.isSame(m),x=y&&e.isSame(g)||p&&e.isSame(f),D={date:e,calendarDate:r,disabled:u,interactive:h,currentDateIndicator:!0,onSelect:()=>{d(e,!h)},onHover:()=>{c(e.format("YYYY-MM-DD"),!h)}};return t(wi,Object.assign({},D,(()=>{const t={};return r.month()!==e.month()?t.labelType="unavailable":na().isSame(e,"day")&&!u&&(t.labelType="current"),t})(),(()=>{const e={};let r,t;return y&&p?(r="selected-hover-outline",t="selected-hover"):y?(r="selected-outline",t="selected"):p&&(r="hover",t="hover"),r&&(e.labelType=t,v?e.circleLeft=r:e.bgLeft=r,x?e.circleRight=r:e.bgRight=r),e})()))},Ai=({calendarDate:r,disabledDates:n,selectedStartDate:a,onSelect:i,onHover:s,minDate:l,maxDate:d,allowDisabledSelection:c})=>{const u=g((()=>ba.generateDays(r)),[r]),[h,b]=o(""),m=(e,r)=>{if(r&&!c)return;const t=e.startOf("week");i(t),e&&!na(e).isSame(t,"month")&&b("")},f=(e,r)=>{r&&!c||(b(e),s(e))},y=()=>{b(""),s("")};return e(di,Object.assign({"data-testid":"calendar-content"},{children:[u[0].map(((e,r)=>t(ci,{children:na(e).format("ddd")},`week-day-${r}`))),u.map(((e,i)=>t(ui,Object.assign({onMouseLeave:y},{children:e.map(((e,i)=>t(Mi,{date:e,calendarDate:r,selectedDate:a,hoverDate:h,minDate:l,maxDate:d,disabledDates:n,allowDisabledSelection:c,onSelect:m,onHover:f},`day-${i}`)))}),i)))]}))},zi=a.forwardRef((({disabledDates:e,onYearMonthDisplayChange:r,onSelect:n,onHover:a,onDismiss:o,value:s,endValue:l,currentFocus:d,withButton:c,variant:u,minDate:h,maxDate:b,allowDisabledSelection:g,selectWithinRange:f=!0,initialCalendarDate:y,numberOfDays:p,showActiveMonthDaysOnly:v=!1},x)=>{const D=i(),w=i(void 0);m(x,(()=>({reset(){D.current.resetView()},setCalendarDate(e){D.current.setCalendarDate(e)}})));const $=e=>{const r=e.format("YYYY-MM-DD");D.current.setCalendarDate(r),E(r)},F=e=>{C(e)},E=e=>{n&&n(e)},C=e=>{a&&a(e)},S=e=>{if(r){const t={month:e.month()+1,year:e.year()};r(t)}};return t(Si,{children:t(li,Object.assign({ref:D,withButton:c,doneButtonDisabled:(()=>{if(!c)return;let e=!0;switch(u){case"single":e=!1;break;case"range":case"fixed-range":e=!!s!=!!l;break;case"week":e=!s&&!l}return e})(),onDismiss:o,minDate:h,maxDate:b,selectWithinRange:f,currentFocus:d,selectedStartDate:s,selectedEndDate:l,allowDisabledSelection:g,onCalendarDateChange:e=>{w.current&&w.current.isSame(e,"month")||S(e),w.current=e},initialCalendarDate:y},{children:({calendarDate:r})=>(r=>{switch(u){case"week":return t(Ai,{calendarDate:r,disabledDates:e,selectedStartDate:s,minDate:h,maxDate:b,allowDisabledSelection:g,onSelect:$,onHover:F});case"fixed-range":return t(Ci,{calendarDate:r,disabledDates:e,selectedStartDate:s,minDate:h,maxDate:b,allowDisabledSelection:g,onSelect:$,onHover:F,numberOfDays:p});case"single":return t(Bi,{calendarDate:r,disabledDates:e,selectedDate:s,minDate:h,maxDate:b,allowDisabledSelection:g,showActiveMonthDaysOnly:v,onSelect:$,onHover:F});default:return t(Fi,{calendarDate:r,currentFocus:d,disabledDates:e,selectedStartDate:s,selectedEndDate:l,minDate:h,maxDate:b,isNewSelection:f,allowDisabledSelection:g,showActiveMonthDaysOnly:v,onSelect:$,onHover:F})}})(r)}))})})),ki=a.forwardRef(((e,r)=>{var{width:n}=e,a=R(e,["width"]);return t(ra,Object.assign({$width:n,"data-testid":"calendar-dropdown"},{children:t(zi,Object.assign({ref:r},a))}))})),Yi=p`
    outline-offset: -1px;
    outline: ${Ut["width-020"]} ${Ut.solid} ${Pt["border-focus"]};
`,ji=p`
    outline-color: ${Pt["border-focus"]};
`,Ti=p`
    outline-color: ${Pt["border-disabled"]};
`,_i=p`
    outline-color: ${Pt["border-error-focus"]};
`,Ri=y(y.div`
    border: ${Ut["width-010"]} ${Ut.solid} ${Pt.border};
    border-radius: ${Jt.sm};
    background: ${Pt.bg};

    :focus-within {
        ${Yi}
    }
    ${e=>e.$focused&&Yi}

    ${e=>e.$readOnly?p`
                border-color: transparent;
                padding: 0;
                background: transparent !important;

                :focus-within {
                    ${ji}
                }
                ${e.$focused&&ji}
            `:e.$disabled?p`
                background: ${Pt["bg-disabled"]};
                cursor: not-allowed;

                :focus-within {
                    ${Ti}
                }
                ${e.$focused&&Ti}
            `:e.$error?p`
                border-color: ${Pt["border-error"]};

                :focus-within {
                    ${_i}
                }
                ${e.$focused&&_i}
            `:void 0}
`)`
    display: flex;
    align-items: center;
    position: relative;
    height: max-content;
    width: 100%;
    padding: 0 ${Kt["spacing-16"]};
    flex-direction: ${e=>"right"===e.$position?"row-reverse":"row"};
`,Hi=y.input`
    ${e=>"small"===e.$variant?Vt["body-md-regular"]:Vt["body-baseline-regular"]}
    color: ${Pt.text};
    display: block;
    background: transparent;
    border: none;
    outline: none;
    box-shadow: none;
    padding: 0;
    margin: 0;

    :disabled {
        color: ${Pt["text-subtler"]};

        :hover {
            cursor: not-allowed;
        }
    }

    ::placeholder,
    ::-webkit-input-placeholder {
        color: ${Pt["text-subtler"]};
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
`;y.button`
    background: transparent;
    border: none;
    outline: none;

    :focus,
    :active {
        outline: none;
    }

    :focus-visible {
        outline: ${Ut["width-010"]} ${Ut.solid}
            ${Pt["border-focus"]};
        border-radius: ${Jt.sm};
    }
`;const Li=y.div`
    display: flex;
    align-items: center;
    position: relative;

    flex: 1;
`,Ii=y.div`
    display: flex;
    align-items: center;

    ${e=>{if(e.$hover)return p`
                ${Wi}, ${Zi} {
                    color: ${Pt["text-subtler"]};
                }
            `}}
`,Wi=y(Hi)`
    background: transparent;
    text-align: center;
`,Ni=y(Wi)`
    width: 2rem;
    margin-right: ${Kt["spacing-4"]};
`,Pi=y(Wi)`
    width: 2.5rem;
`,Vi=y(Wi)`
    width: 3rem;
    margin-left: ${Kt["spacing-4"]};
`,Zi=y.span`
    ${Vt["body-baseline-regular"]}
    ${e=>{if(e.$inactive)return p`
                color: ${Pt.text};
            `}}
`,Ui=y.div`
    ${Vt["body-baseline-regular"]}
    background-color: ${Pt.bg};
    color: ${Pt["text-subtler"]};
    position: absolute;
    display: flex;
    align-items: center;
    width: 100%;
    height: 100%;

    ${e=>e.$disabled?p`
                background-color: ${Pt["bg-disabled"]};
                cursor: not-allowed;
            `:e.$hide?p`
                display: none;
            `:void 0}
`;na.extend(ia);const Ki=a.forwardRef((({disabled:r,readOnly:n,names:a,value:s,focused:l,hoverValue:d,placeholder:c,label:h,onChange:b,onFocus:g,onBlur:f,hideInputKeyboard:y},p)=>{const v=y?"none":"numeric",[x,D,w]=Ea(""),[$,F,E]=Ea(""),[C,S,O]=Ea(""),[B,M]=o("none"),[A,z]=o(!1),k=i(null),Y=i(null),j=i(null),T=i(null),[_,R,H]=V(d);u((()=>{const[e="",r="",t=""]=V(s);D(e),F(r),S(t),e||r||t||!k.current.contains(document.activeElement)||Y.current.focus()}),[s]),u((()=>{l||M("none"),l&&(z(!0),k.current.contains(document.activeElement)||Y.current.focus())}),[l]),m(p,(()=>({ref:k,resetPlaceholder(){z(!1)},resetInput(){const[e="",r="",t=""]=V(s);D(e),F(r),S(t)}})),[s]);const L=e=>{var r;e.preventDefault(),null===(r=Y.current)||void 0===r||r.focus()},I=e=>{e.target.select();const r=e.target.name;M(r)},W=e=>{const[r,t,n]=a,i={[r]:w.current,[t]:E.current,[n]:O.current},o=e.target.name,s=i[o],l=o!==n?Fa.padValue(s,!0):s;switch(o){case r:i[r]=l,D(l);break;case t:i[t]=l,F(l)}const d=`${i[n]}-${i[t]}-${i[r]}`,c=na(d,"YYYY-MM-DD",!0).isValid(),u=!i[r]&&!i[t]&&!i[n];c&&s!==l&&b(d),k.current.contains(e.relatedTarget)||(M("none"),null==f||f(u||c))},N=e=>{if(d)return;const r=e.target.name,t=e.target.value.replace(/[^0-9]/g,""),n={day:x,month:$,year:C};switch(r){case a[0]:n.day=t,D(t),2===t.length&&j.current.focus();break;case a[1]:n.month=t,F(t),2===t.length&&T.current.focus();break;case a[2]:n.year=t,S(t)}if(!n.day&&!n.month&&!n.year)return void b("");const i=`${n.year}-${n.month}-${n.day}`;na(i,"YYYY-MM-DD",!0).isValid()&&b(i)},P=e=>{"Backspace"!==e.code&&"Backspace"!==e.key||(B===a[1]&&0===$.length&&Y.current.focus(),B===a[2]&&0===C.length&&j.current.focus())};function V(e){if(e){const r=na(new Date(e));return r.isValid()?[Fa.padValue(r.date().toString()),Fa.padValue((r.month()+1).toString()),r.year().toString()]:[void 0,void 0,void 0]}return[void 0,void 0,void 0]}return e(Li,Object.assign({role:"group","aria-label":h,onClick:()=>{r||n||(z(!0),k.current.contains(document.activeElement)||Y.current.focus())},onFocus:e=>{r||(z(!0),l||null==g||g(e))}},{children:[e(Ii,Object.assign({ref:k,$hover:!!d},{children:[t(Ni,{ref:Y,name:a[0],maxLength:2,value:null!=_?_:x,onFocus:I,onBlur:W,onChange:N,type:"text",inputMode:v,pattern:"[0-9]{2}","data-testid":`${a[0]}-input`,"aria-label":"day",disabled:r,readOnly:n,tabIndex:n?-1:0,autoComplete:"off",placeholder:B!==a[0]||n?"DD":""}),t(Zi,Object.assign({$inactive:0===x.length},{children:"/"})),t(Pi,{ref:j,name:a[1],maxLength:2,value:null!=R?R:$,onFocus:I,onBlur:W,onChange:N,onKeyDown:P,type:"text",inputMode:v,pattern:"[0-9]{2}","data-testid":`${a[1]}-input`,"aria-label":"month",disabled:r,readOnly:n,tabIndex:n?-1:0,autoComplete:"off",placeholder:B!==a[1]||n?"MM":""}),t(Zi,Object.assign({$inactive:0===$.length},{children:"/"})),t(Vi,{ref:T,name:a[2],maxLength:4,value:null!=H?H:C,onFocus:I,onBlur:W,onChange:N,onKeyDown:P,type:"text",inputMode:v,pattern:"[0-9]{4}","data-testid":`${a[2]}-input`,"aria-label":"year",disabled:r,readOnly:n,tabIndex:n?-1:0,autoComplete:"off",placeholder:B!==a[2]||n?"YYYY":""})]})),(()=>{if(!s&&!n&&c)return t(Ui,Object.assign({$hide:A,$disabled:r,onMouseDown:L},{children:c}))})()]}))})),Ji=y(Ri)`
    height: 3rem;
`,qi=e=>{var{minDate:r,maxDate:n,disabled:a,disabledDates:s,error:l,hideInputKeyboard:d,value:c,onChange:h,onFocus:b,onBlur:g,onYearMonthDisplayChange:m,withButton:f=!0,readOnly:y,id:p,allowDisabledSelection:v,zIndex:x}=e,D=R(e,["minDate","maxDate","disabled","disabledDates","error","hideInputKeyboard","value","onChange","onFocus","onBlur","onYearMonthDisplayChange","withButton","readOnly","id","allowDisabledSelection","zIndex"]);const[w,$]=o(wa.sanitizeInput(c)),[F,E]=o(wa.sanitizeInput(c)),[C,S]=o(void 0),[O,B]=o(!1),[M,A]=o(!1),z=i(null),k=i();u((()=>{const e=wa.sanitizeInput(c);$(e),E(e)}),[c]);const Y=e=>{!v&&wa.isDateDisabled(e,{disabledDates:s,minDate:r,maxDate:n})||(E(e),f||(I(e),$(e),e&&B(!1)))},j=e=>{E(e),f||(I(e),$(e),e&&(z.current.focus(),B(!1)),C&&S(void 0))},T=()=>{y||a||(B(!0),M||(A(!0),b&&b()))},_=e=>{!M||O||z.current.contains(e.relatedTarget)||(k.current.resetInput(),E(w),A(!1),W())},H=e=>{S(e)},L=e=>{switch(e){case"reset":E(w);break;case"confirmed":$(F),I(F)}z.current.focus(),B(!1)},I=e=>{h&&h(e)},W=()=>{g&&g()};return t(ea,{enabled:!y&&!a,isOpen:O,renderElement:()=>t(Ji,Object.assign({tabIndex:-1,ref:z,onBlur:_,onFocus:T,$disabled:a,$readOnly:y,$focused:M,$error:l,id:p,"data-testid":D["data-testid"]},D,{children:t(Ki,{ref:k,disabled:a,onChange:Y,readOnly:y,focused:O,names:["start-day","start-month","start-year"],value:F,hoverValue:C,hideInputKeyboard:d})})),renderDropdown:({elementWidth:e})=>t(ki,{variant:"single",initialCalendarDate:F,withButton:f,value:F,disabledDates:s,minDate:r,maxDate:n,allowDisabledSelection:v,onHover:H,onSelect:j,onDismiss:L,onYearMonthDisplayChange:m,width:e}),onClose:()=>{k.current.resetInput(),E(w),B(!1),A(!1),W()},onDismiss:()=>{k.current.resetInput(),z.current.focus(),E(w),B(!1)},customZIndex:x,offset:16})};export{qi as DateInput};
//# sourceMappingURL=index.js.map
