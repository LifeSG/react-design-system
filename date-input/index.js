import{jsxs as e,Fragment as r,jsx as t}from"react/jsx-runtime";import*as n from"react";import a,{useRef as o,useState as i,isValidElement as s,createRef as l,cloneElement as d,PureComponent as c,useEffect as u,useLayoutEffect as h,useCallback as b,useMemo as g,useImperativeHandle as m}from"react";import{ChevronDownIcon as f}from"@lifesg/react-icons/chevron-down";import y,{css as p,keyframes as v,useTheme as x}from"styled-components";import{useFloatingTree as w,useFloating as D,autoUpdate as $,offset as F,flip as E,shift as C,limitShift as S,size as B,useTransitionStyles as A,useClick as M,useDismiss as O,useInteractions as z,FloatingPortal as k,FloatingFocusManager as Y}from"@floating-ui/react";import{findDOMNode as T}from"react-dom";import{ChevronLeftIcon as j}from"@lifesg/react-icons/chevron-left";import{ChevronRightIcon as _}from"@lifesg/react-icons/chevron-right";function R(e,r){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(n=Object.getOwnPropertySymbols(e);a<n.length;a++)r.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(t[n[a]]=e[n[a]])}return t}"function"==typeof SuppressedError&&SuppressedError;var H="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};function L(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var I=Array.isArray,W="object"==typeof H&&H&&H.Object===Object&&H,N="object"==typeof self&&self&&self.Object===Object&&self,P=W||N||Function("return this")(),V=P.Symbol,Z=V,U=Object.prototype,K=U.hasOwnProperty,J=U.toString,q=Z?Z.toStringTag:void 0;var X=function(e){var r=K.call(e,q),t=e[q];try{e[q]=void 0;var n=!0}catch(e){}var a=J.call(e);return n&&(r?e[q]=t:delete e[q]),a},G=Object.prototype.toString;var Q=X,ee=function(e){return G.call(e)},re=V?V.toStringTag:void 0;var te=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":re&&re in Object(e)?Q(e):ee(e)};var ne=te,ae=function(e){return null!=e&&"object"==typeof e};var oe=function(e){return"symbol"==typeof e||ae(e)&&"[object Symbol]"==ne(e)},ie=I,se=oe,le=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,de=/^\w*$/;var ce=function(e,r){if(ie(e))return!1;var t=typeof e;return!("number"!=t&&"symbol"!=t&&"boolean"!=t&&null!=e&&!se(e))||(de.test(e)||!le.test(e)||null!=r&&e in Object(r))};var ue=function(e){var r=typeof e;return null!=e&&("object"==r||"function"==r)},he=te,be=ue;var ge,me=function(e){if(!be(e))return!1;var r=he(e);return"[object Function]"==r||"[object GeneratorFunction]"==r||"[object AsyncFunction]"==r||"[object Proxy]"==r},fe=P["__core-js_shared__"],ye=(ge=/[^.]+$/.exec(fe&&fe.keys&&fe.keys.IE_PROTO||""))?"Symbol(src)_1."+ge:"";var pe=function(e){return!!ye&&ye in e},ve=Function.prototype.toString;var xe=me,we=pe,De=ue,$e=function(e){if(null!=e){try{return ve.call(e)}catch(e){}try{return e+""}catch(e){}}return""},Fe=/^\[object .+?Constructor\]$/,Ee=Function.prototype,Ce=Object.prototype,Se=Ee.toString,Be=Ce.hasOwnProperty,Ae=RegExp("^"+Se.call(Be).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");var Me=function(e,r){return null==e?void 0:e[r]},Oe=function(e){return!(!De(e)||we(e))&&(xe(e)?Ae:Fe).test($e(e))},ze=Me;var ke=function(e,r){var t=ze(e,r);return Oe(t)?t:void 0},Ye=ke(Object,"create"),Te=Ye;var je=function(){this.__data__=Te?Te(null):{},this.size=0};var _e=function(e){var r=this.has(e)&&delete this.__data__[e];return this.size-=r?1:0,r},Re=Ye,He=Object.prototype.hasOwnProperty;var Le=function(e){var r=this.__data__;if(Re){var t=r[e];return"__lodash_hash_undefined__"===t?void 0:t}return He.call(r,e)?r[e]:void 0},Ie=Ye,We=Object.prototype.hasOwnProperty;var Ne=function(e){var r=this.__data__;return Ie?void 0!==r[e]:We.call(r,e)},Pe=Ye;var Ve=function(e,r){var t=this.__data__;return this.size+=this.has(e)?0:1,t[e]=Pe&&void 0===r?"__lodash_hash_undefined__":r,this},Ze=je,Ue=_e,Ke=Le,Je=Ne,qe=Ve;function Xe(e){var r=-1,t=null==e?0:e.length;for(this.clear();++r<t;){var n=e[r];this.set(n[0],n[1])}}Xe.prototype.clear=Ze,Xe.prototype.delete=Ue,Xe.prototype.get=Ke,Xe.prototype.has=Je,Xe.prototype.set=qe;var Ge=Xe;var Qe=function(){this.__data__=[],this.size=0};var er=function(e,r){return e===r||e!=e&&r!=r};var rr=function(e,r){for(var t=e.length;t--;)if(er(e[t][0],r))return t;return-1},tr=rr,nr=Array.prototype.splice;var ar=function(e){var r=this.__data__,t=tr(r,e);return!(t<0)&&(t==r.length-1?r.pop():nr.call(r,t,1),--this.size,!0)},or=rr;var ir=function(e){var r=this.__data__,t=or(r,e);return t<0?void 0:r[t][1]},sr=rr;var lr=function(e){return sr(this.__data__,e)>-1},dr=rr;var cr=function(e,r){var t=this.__data__,n=dr(t,e);return n<0?(++this.size,t.push([e,r])):t[n][1]=r,this},ur=Qe,hr=ar,br=ir,gr=lr,mr=cr;function fr(e){var r=-1,t=null==e?0:e.length;for(this.clear();++r<t;){var n=e[r];this.set(n[0],n[1])}}fr.prototype.clear=ur,fr.prototype.delete=hr,fr.prototype.get=br,fr.prototype.has=gr,fr.prototype.set=mr;var yr=fr,pr=ke(P,"Map"),vr=Ge,xr=yr,wr=pr;var Dr=function(e){var r=typeof e;return"string"==r||"number"==r||"symbol"==r||"boolean"==r?"__proto__"!==e:null===e};var $r=function(e,r){var t=e.__data__;return Dr(r)?t["string"==typeof r?"string":"hash"]:t.map},Fr=$r;var Er=function(e){var r=Fr(this,e).delete(e);return this.size-=r?1:0,r},Cr=$r;var Sr=function(e){return Cr(this,e).get(e)},Br=$r;var Ar=function(e){return Br(this,e).has(e)},Mr=$r;var Or=function(e,r){var t=Mr(this,e),n=t.size;return t.set(e,r),this.size+=t.size==n?0:1,this},zr=function(){this.size=0,this.__data__={hash:new vr,map:new(wr||xr),string:new vr}},kr=Er,Yr=Sr,Tr=Ar,jr=Or;function _r(e){var r=-1,t=null==e?0:e.length;for(this.clear();++r<t;){var n=e[r];this.set(n[0],n[1])}}_r.prototype.clear=zr,_r.prototype.delete=kr,_r.prototype.get=Yr,_r.prototype.has=Tr,_r.prototype.set=jr;var Rr=_r;function Hr(e,r){if("function"!=typeof e||null!=r&&"function"!=typeof r)throw new TypeError("Expected a function");var t=function(){var n=arguments,a=r?r.apply(this,n):n[0],o=t.cache;if(o.has(a))return o.get(a);var i=e.apply(this,n);return t.cache=o.set(a,i)||o,i};return t.cache=new(Hr.Cache||Rr),t}Hr.Cache=Rr;var Lr=Hr;var Ir=function(e){var r=Lr(e,(function(e){return 500===t.size&&t.clear(),e})),t=r.cache;return r},Wr=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,Nr=/\\(\\)?/g,Pr=Ir((function(e){var r=[];return 46===e.charCodeAt(0)&&r.push(""),e.replace(Wr,(function(e,t,n,a){r.push(n?a.replace(Nr,"$1"):t||e)})),r}));var Vr=function(e,r){for(var t=-1,n=null==e?0:e.length,a=Array(n);++t<n;)a[t]=r(e[t],t,e);return a},Zr=I,Ur=oe,Kr=V?V.prototype:void 0,Jr=Kr?Kr.toString:void 0;var qr=function e(r){if("string"==typeof r)return r;if(Zr(r))return Vr(r,e)+"";if(Ur(r))return Jr?Jr.call(r):"";var t=r+"";return"0"==t&&1/r==-1/0?"-0":t},Xr=qr;var Gr=I,Qr=ce,et=Pr,rt=function(e){return null==e?"":Xr(e)};var tt=oe;var nt=function(e,r){return Gr(e)?e:Qr(e,r)?[e]:et(rt(e))},at=function(e){if("string"==typeof e||tt(e))return e;var r=e+"";return"0"==r&&1/e==-1/0?"-0":r};var ot=function(e,r){for(var t=0,n=(r=nt(r,e)).length;null!=e&&t<n;)e=e[at(r[t++])];return t&&t==n?e:void 0};var it=L((function(e,r,t){var n=null==e?void 0:ot(e,r);return void 0===n?t:n}));const st=(e,r,t)=>it(t,r)||it(e,r),lt=(e,r)=>{const t=r||e.defaultValue;return it(e.collections,t)},dt={collections:{default:{"width-005":.5,"width-010":1,"width-020":2,"width-040":4,solid:"solid"}},defaultValue:"default"},ct=e=>r=>{var t;const n=r.theme,a=lt(dt,null==n?void 0:n.borderScheme);return(null===(t=null==n?void 0:n.overrides)||void 0===t?void 0:t.border)?`${st(a,e,n.overrides.border)}px`:`${a[e]}px`},ut={"width-005":ct("width-005"),"width-010":ct("width-010"),"width-020":ct("width-020"),"width-040":ct("width-040"),solid:(ht="solid",e=>{var r;const t=e.theme,n=lt(dt,null==t?void 0:t.borderScheme),a=(null===(r=null==t?void 0:t.overrides)||void 0===r?void 0:r.border)?st(n,ht,t.overrides.border):n[ht];return"function"==typeof a?a(e):a})};var ht;const bt={collections:{lifesg:{"brand-10":"#2C0C0B","brand-20":"#4C1513","brand-30":"#6C1D1B","brand-40":"#922825","brand-50":"#BF3431","brand-60":"#F15D5A","brand-70":"#F69491","brand-80":"#FABAB7","brand-90":"#FCD7D2","brand-95":"#FFEBE7","brand-100":"#FFF6F4","primary-10":"#001731","primary-20":"#002752","primary-30":"#003874","primary-40":"#004D9F","primary-50":"#1768BE","primary-60":"#3C91EC","primary-70":"#6CB4FF","primary-80":"#A5CDFF","primary-90":"#CFE1FE","primary-95":"#E8F0FE","primary-100":"#F7F9FF","secondary-10":"#131529","secondary-20":"#222547","secondary-30":"#2F3565","secondary-40":"#42498B","secondary-50":"#5B62A7","secondary-60":"#858CBD","secondary-70":"#A8ADCF","secondary-80":"#C6C9E0","secondary-90":"#DDDFEC","secondary-95":"#EDEEF5","secondary-100":"#F8F8FB","neutral-10":"#161616","neutral-20":"#282828","neutral-30":"#393939","neutral-40":"#4E4E4E","neutral-50":"#686868","neutral-60":"#8E8E8E","neutral-70":"#AFAFB0","neutral-80":"#C7CACA","neutral-90":"#DDE1E2","neutral-95":"#EDEFEF","neutral-100":"#F9F9F9","success-10":"#081A0F","success-20":"#0E2D1B","success-30":"#154126","success-40":"#1C5A34","success-50":"#257645","success-60":"#44A068","success-70":"#64C189","success-80":"#80DCA5","success-90":"#B4ECCB","success-95":"#D5F6E2","success-100":"#EFFCF4","warning-10":"#221302","warning-20":"#3B2204","warning-30":"#543106","warning-40":"#744408","warning-50":"#98590C","warning-60":"#D07A13","warning-70":"#E4A244","warning-80":"#F5C26C","warning-90":"#FADBA6","warning-95":"#FCECD4","warning-100":"#FDF7F0","error-10":"#330505","error-20":"#550808","error-30":"#750C0C","error-40":"#9E130F","error-50":"#CB2213","error-60":"#DE6C6C","error-70":"#E89B9B","error-80":"#EFBEBE","error-90":"#F5D9D9","error-95":"#F9ECEC","error-100":"#FCF7F7","info-10":"#021824","info-20":"#032B3F","info-30":"#053D59","info-40":"#065478","info-50":"#176E9B","info-60":"#5296BE","info-70":"#82B5DA","info-80":"#ACCFE7","info-90":"#CCE3F1","info-95":"#E3F1F8","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000","primary-inverse":"#FEAB10"},bookingsg:{"brand-10":"#2C0C0B","brand-20":"#4C1513","brand-30":"#6C1D1B","brand-40":"#922825","brand-50":"#BF3431","brand-60":"#F15D5A","brand-70":"#F69491","brand-80":"#FABAB7","brand-90":"#FCD7D2","brand-95":"#FFEBE7","brand-100":"#FFF6F4","primary-10":"#1A122C","primary-20":"#2F1F4D","primary-30":"#422D6E","primary-40":"#5B3D97","primary-50":"#7654BC","primary-60":"#9A82CD","primary-70":"#B7A7D8","primary-80":"#CFC5E5","primary-90":"#E3DDF0","primary-95":"#F0EDF7","primary-100":"#F9F8FC","secondary-10":"#0E1723","secondary-20":"#18293D","secondary-30":"#233A57","secondary-40":"#305078","secondary-50":"#4B6A8F","secondary-60":"#7B91A9","secondary-70":"#A1B1C3","secondary-80":"#C1CBD7","secondary-90":"#DBE1E8","secondary-95":"#EBEFF2","secondary-100":"#F7F8FA","neutral-10":"#161616","neutral-20":"#282828","neutral-30":"#393939","neutral-40":"#4E4E4E","neutral-50":"#686868","neutral-60":"#8E8E8E","neutral-70":"#AFAFB0","neutral-80":"#C7CACA","neutral-90":"#DDE1E2","neutral-95":"#EDEFEF","neutral-100":"#F9F9F9","success-10":"#081A0F","success-20":"#0E2D1B","success-30":"#154126","success-40":"#1C5A34","success-50":"#257645","success-60":"#44A068","success-70":"#64C189","success-80":"#80DCA5","success-90":"#B4ECCB","success-95":"#D5F6E2","success-100":"#EFFCF4","warning-10":"#221302","warning-20":"#3B2204","warning-30":"#543106","warning-40":"#744408","warning-50":"#98590C","warning-60":"#D07A13","warning-70":"#E4A244","warning-80":"#F5C26C","warning-90":"#FADBA6","warning-95":"#FCECD4","warning-100":"#FDF7F0","error-10":"#330505","error-20":"#550808","error-30":"#750C0C","error-40":"#9E130F","error-50":"#CB2213","error-60":"#DE6C6C","error-70":"#E89B9B","error-80":"#EFBEBE","error-90":"#F5D9D9","error-95":"#F9ECEC","error-100":"#FCF7F7","info-10":"#021824","info-20":"#032B3F","info-30":"#053D59","info-40":"#065478","info-50":"#176E9B","info-60":"#5296BE","info-70":"#82B5DA","info-80":"#ACCFE7","info-90":"#CCE3F1","info-95":"#E3F1F8","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000","primary-inverse":"#FEAB10"},rbs:{"brand-10":"#0E123A","brand-20":"#191E65","brand-30":"#232B90","brand-40":"#303BC5","brand-50":"#494CFF","brand-60":"#AD6EFF","brand-70":"#AEA4FF","brand-80":"#C5C4FF","brand-90":"#DDDCFF","brand-95":"#EDECFF","brand-100":"#F8F8FF","primary-10":"#10152B","primary-20":"#1C254B","primary-30":"#28356C","primary-40":"#38489A","primary-50":"#4D5AD7","primary-60":"#7487F2","primary-70":"#9AAAFC","primary-80":"#BDC7FD","primary-90":"#DADFFB","primary-95":"#ECEEFE","primary-100":"#F7F8FF","secondary-10":"#19151D","secondary-20":"#2B2533","secondary-30":"#3E3649","secondary-40":"#564A64","secondary-50":"#6F637D","secondary-60":"#948B9F","secondary-70":"#B3ACBB","secondary-80":"#CCC8D2","secondary-90":"#E1DEE4","secondary-95":"#EFEEF1","secondary-100":"#F9F8F9","neutral-10":"#161616","neutral-20":"#282828","neutral-30":"#393939","neutral-40":"#4E4E4E","neutral-50":"#686868","neutral-60":"#8E8E8E","neutral-70":"#AFAFB0","neutral-80":"#C7CACA","neutral-90":"#DDE1E2","neutral-95":"#EDEFEF","neutral-100":"#F9F9F9","success-10":"#081A0F","success-20":"#0E2D1B","success-30":"#154126","success-40":"#1C5A34","success-50":"#257645","success-60":"#44A068","success-70":"#64C189","success-80":"#80DCA5","success-90":"#B4ECCB","success-95":"#D5F6E2","success-100":"#EFFCF4","warning-10":"#221302","warning-20":"#3B2204","warning-30":"#543106","warning-40":"#744408","warning-50":"#98590C","warning-60":"#D07A13","warning-70":"#E4A244","warning-80":"#F5C26C","warning-90":"#FADBA6","warning-95":"#FCECD4","warning-100":"#FDF7F0","error-10":"#330505","error-20":"#550808","error-30":"#750C0C","error-40":"#9E130F","error-50":"#CB2213","error-60":"#DE6C6C","error-70":"#E89B9B","error-80":"#EFBEBE","error-90":"#F5D9D9","error-95":"#F9ECEC","error-100":"#FCF7F7","info-10":"#021824","info-20":"#032B3F","info-30":"#053D59","info-40":"#065478","info-50":"#176E9B","info-60":"#5296BE","info-70":"#82B5DA","info-80":"#ACCFE7","info-90":"#CCE3F1","info-95":"#E3F1F8","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000","primary-inverse":"#FEAB10"},mylegacy:{"brand-10":"#2C0C0B","brand-20":"#4C1513","brand-30":"#6C1D1B","brand-40":"#922825","brand-50":"#BF3431","brand-60":"#F15D5A","brand-70":"#F69491","brand-80":"#FABAB7","brand-90":"#FCD7D2","brand-95":"#FFEBE7","brand-100":"#FFF6F4","primary-10":"#0011924","primary-20":"#032B40","primary-30":"#043D5A","primary-40":"#05547B","primary-50":"#096EA1","primary-60":"#2098D3","primary-70":"#5CB9E8","primary-80":"#8BD3F6","primary-90":"#BEE6FA","primary-95":"#E2F2FA","primary-100":"#F4FAFC","secondary-10":"#131529","secondary-20":"#222547","secondary-30":"#2F3565","secondary-40":"#42498B","secondary-50":"#5B62A7","secondary-60":"#858CBD","secondary-70":"#A8ADCF","secondary-80":"#C6C9E0","secondary-90":"#DDDFEC","secondary-95":"#EDEEF5","secondary-100":"#F8F8FB","neutral-10":"#161616","neutral-20":"#282828","neutral-30":"#393939","neutral-40":"#4E4E4E","neutral-50":"#686868","neutral-60":"#8E8E8E","neutral-70":"#AFAFB0","neutral-80":"#C7CACA","neutral-90":"#DDE1E2","neutral-95":"#EDEFEF","neutral-100":"#F9F9F9","success-10":"#081A0F","success-20":"#0E2D1B","success-30":"#154126","success-40":"#1C5A34","success-50":"#257645","success-60":"#44A068","success-70":"#64C189","success-80":"#80DCA5","success-90":"#B4ECCB","success-95":"#D5F6E2","success-100":"#EFFCF4","warning-10":"#221302","warning-20":"#3B2204","warning-30":"#543106","warning-40":"#744408","warning-50":"#98590C","warning-60":"#D07A13","warning-70":"#E4A244","warning-80":"#F5C26C","warning-90":"#FADBA6","warning-95":"#FCECD4","warning-100":"#FDF7F0","error-10":"#330505","error-20":"#550808","error-30":"#750C0C","error-40":"#9E130F","error-50":"#CB2213","error-60":"#DE6C6C","error-70":"#E89B9B","error-80":"#EFBEBE","error-90":"#F5D9D9","error-95":"#F9ECEC","error-100":"#FCF7F7","info-10":"#021824","info-20":"#032B3F","info-30":"#053D59","info-40":"#065478","info-50":"#176E9B","info-60":"#5296BE","info-70":"#82B5DA","info-80":"#ACCFE7","info-90":"#CCE3F1","info-95":"#E3F1F8","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000","primary-inverse":"#FEAB10"},ccube:{"brand-10":"#1F1221","brand-20":"#371F3B","brand-30":"#4E2C53","brand-40":"#6B3E73","brand-50":"#8D5197","brand-60":"#FF3399","brand-70":"#FF88C4","brand-80":"#FFB3D9","brand-90":"#FFD4E9","brand-95":"#FFE8F3","brand-100":"#FFD6EB","primary-10":"#1F1221","primary-20":"#371F3B","primary-30":"#4E2C53","primary-40":"#6B3E73","primary-50":"#8D5197","primary-60":"#B07DB7","primary-70":"#C7A3CC","primary-80":"#D9C2DD","primary-90":"#E9DBEB","primary-95":"#F3ECF4","primary-100":"#FAF7FA","secondary-10":"#2D091B","secondary-20":"#4D0F2E","secondary-30":"#6B1540","secondary-40":"#931D58","secondary-50":"#C02673","secondary-60":"#FF409F","secondary-70":"#FF88C4","secondary-80":"#FFB3D9","secondary-90":"#FFD4E9","secondary-95":"#FFE8F3","secondary-100":"#FFF8FC","neutral-10":"#161616","neutral-20":"#282828","neutral-30":"#393939","neutral-40":"#4E4E4E","neutral-50":"#686868","neutral-60":"#8E8E8E","neutral-70":"#AFAFB0","neutral-80":"#C7CACA","neutral-90":"#DDE1E2","neutral-95":"#EDEFEF","neutral-100":"#F9F9F9","success-10":"#081A0F","success-20":"#0E2D1B","success-30":"#154126","success-40":"#1C5A34","success-50":"#257645","success-60":"#44A068","success-70":"#64C189","success-80":"#80DCA5","success-90":"#B4ECCB","success-95":"#D5F6E2","success-100":"#EFFCF4","warning-10":"#221302","warning-20":"#3B2204","warning-30":"#543106","warning-40":"#744408","warning-50":"#98590C","warning-60":"#D07A13","warning-70":"#E4A244","warning-80":"#F5C26C","warning-90":"#FADBA6","warning-95":"#FCECD4","warning-100":"#FDF7F0","error-10":"#330505","error-20":"#550808","error-30":"#750C0C","error-40":"#9E130F","error-50":"#CB2213","error-60":"#DE6C6C","error-70":"#E89B9B","error-80":"#EFBEBE","error-90":"#F5D9D9","error-95":"#F9ECEC","error-100":"#FCF7F7","info-10":"#021824","info-20":"#032B3F","info-30":"#053D59","info-40":"#065478","info-50":"#176E9B","info-60":"#5296BE","info-70":"#82B5DA","info-80":"#ACCFE7","info-90":"#CCE3F1","info-95":"#E3F1F8","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000","primary-inverse":"#FEAB10"},pa:{"brand-10":"#89000B","brand-20":"#B0000E","brand-30":"#C4000F","brand-40":"#D0333F","brand-50":"#DC666F","brand-60":"#E28087","brand-70":"#E7999F","brand-80":"#EDB3B7","brand-90":"#F3CCCF","brand-95":"#F9E6E7","brand-100":"#FCF2F3","primary-10":"#000000","primary-20":"#191919","primary-30":"#333333","primary-40":"#4D4D4D","primary-50":"#666666","primary-60":"#808080","primary-70":"#999999","primary-80":"#B3B3B3","primary-90":"#E6E6E6","primary-95":"#F7F7F7","primary-100":"#FFFFFF","secondary-10":"#19151D","secondary-20":"#2B2533","secondary-30":"#3E3649","secondary-40":"#564A64","secondary-50":"#6F637D","secondary-60":"#948B9F","secondary-70":"#B3ACBB","secondary-80":"#CCC8D2","secondary-90":"#E1DEE4","secondary-95":"#EFEEF1","secondary-100":"#F9F8F9","neutral-10":"#000000","neutral-20":"#191919","neutral-30":"#333333","neutral-40":"#4D4D4D","neutral-50":"#666666","neutral-60":"#808080","neutral-70":"#999999","neutral-80":"#B3B3B3","neutral-90":"#E6E6E6","neutral-95":"#F7F7F7","neutral-100":"#FFFFFF","success-10":"#081A0F","success-20":"#0E2D1B","success-30":"#154126","success-40":"#1C5A34","success-50":"#257645","success-60":"#44A068","success-70":"#64C189","success-80":"#80DCA5","success-90":"#B4ECCB","success-95":"#D5F6E2","success-100":"#EFFCF4","warning-10":"#221302","warning-20":"#3B2204","warning-30":"#543106","warning-40":"#744408","warning-50":"#98590C","warning-60":"#D07A13","warning-70":"#E4A244","warning-80":"#F5C26C","warning-90":"#FADBA6","warning-95":"#FCECD4","warning-100":"#FDF7F0","error-10":"#330505","error-20":"#550808","error-30":"#750C0C","error-40":"#9E130F","error-50":"#CB2213","error-60":"#DE6C6C","error-70":"#E89B9B","error-80":"#EFBEBE","error-90":"#F5D9D9","error-95":"#F9ECEC","error-100":"#FCF7F7","info-10":"#021824","info-20":"#032B3F","info-30":"#053D59","info-40":"#065478","info-50":"#176E9B","info-60":"#5296BE","info-70":"#82B5DA","info-80":"#ACCFE7","info-90":"#CCE3F1","info-95":"#E3F1F8","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000","primary-inverse":"#FEAB10"}},defaultValue:"lifesg"},gt=e=>r=>{var t;const n=r.theme,a=lt(bt,null==n?void 0:n.colourScheme);return(null===(t=null==n?void 0:n.overrides)||void 0===t?void 0:t.primitiveColour)?st(a,e,n.overrides.primitiveColour):a[e]},mt={"brand-10":gt("brand-10"),"brand-20":gt("brand-20"),"brand-30":gt("brand-30"),"brand-40":gt("brand-40"),"brand-50":gt("brand-50"),"brand-60":gt("brand-60"),"brand-70":gt("brand-70"),"brand-80":gt("brand-80"),"brand-90":gt("brand-90"),"brand-95":gt("brand-95"),"brand-100":gt("brand-100"),"primary-10":gt("primary-10"),"primary-20":gt("primary-20"),"primary-30":gt("primary-30"),"primary-40":gt("primary-40"),"primary-50":gt("primary-50"),"primary-60":gt("primary-60"),"primary-70":gt("primary-70"),"primary-80":gt("primary-80"),"primary-90":gt("primary-90"),"primary-95":gt("primary-95"),"primary-100":gt("primary-100"),"secondary-10":gt("secondary-10"),"secondary-20":gt("secondary-20"),"secondary-30":gt("secondary-30"),"secondary-40":gt("secondary-40"),"secondary-50":gt("secondary-50"),"secondary-60":gt("secondary-60"),"secondary-70":gt("secondary-70"),"secondary-80":gt("secondary-80"),"secondary-90":gt("secondary-90"),"secondary-95":gt("secondary-95"),"secondary-100":gt("secondary-100"),"neutral-10":gt("neutral-10"),"neutral-20":gt("neutral-20"),"neutral-30":gt("neutral-30"),"neutral-40":gt("neutral-40"),"neutral-50":gt("neutral-50"),"neutral-60":gt("neutral-60"),"neutral-70":gt("neutral-70"),"neutral-80":gt("neutral-80"),"neutral-90":gt("neutral-90"),"neutral-95":gt("neutral-95"),"neutral-100":gt("neutral-100"),"success-10":gt("success-10"),"success-20":gt("success-20"),"success-30":gt("success-30"),"success-40":gt("success-40"),"success-50":gt("success-50"),"success-60":gt("success-60"),"success-70":gt("success-70"),"success-80":gt("success-80"),"success-90":gt("success-90"),"success-95":gt("success-95"),"success-100":gt("success-100"),"warning-10":gt("warning-10"),"warning-20":gt("warning-20"),"warning-30":gt("warning-30"),"warning-40":gt("warning-40"),"warning-50":gt("warning-50"),"warning-60":gt("warning-60"),"warning-70":gt("warning-70"),"warning-80":gt("warning-80"),"warning-90":gt("warning-90"),"warning-95":gt("warning-95"),"warning-100":gt("warning-100"),"error-10":gt("error-10"),"error-20":gt("error-20"),"error-30":gt("error-30"),"error-40":gt("error-40"),"error-50":gt("error-50"),"error-60":gt("error-60"),"error-70":gt("error-70"),"error-80":gt("error-80"),"error-90":gt("error-90"),"error-95":gt("error-95"),"error-100":gt("error-100"),"info-10":gt("info-10"),"info-20":gt("info-20"),"info-30":gt("info-30"),"info-40":gt("info-40"),"info-50":gt("info-50"),"info-60":gt("info-60"),"info-70":gt("info-70"),"info-80":gt("info-80"),"info-90":gt("info-90"),"info-95":gt("info-95"),"info-100":gt("info-100"),white:gt("white"),black:gt("black"),"primary-inverse":gt("primary-inverse")},ft={text:gt("neutral-20"),"text-subtle":gt("neutral-30"),"text-subtler":gt("neutral-50"),"text-subtlest":gt("neutral-60"),"text-primary":gt("primary-50"),"text-hover":gt("primary-40"),"text-selected":gt("primary-50"),"text-selected-hover":gt("primary-40"),"text-disabled":gt("neutral-50"),"text-disabled-subtle":gt("neutral-60"),"text-disabled-subtlest":gt("neutral-80"),"text-selected-disabled":gt("neutral-20"),"text-success":gt("success-40"),"text-warning":gt("warning-40"),"text-error":gt("error-40"),"text-info":gt("info-40"),"text-inverse":gt("white"),icon:gt("neutral-50"),"icon-subtle":gt("neutral-60"),"icon-strongest":gt("neutral-20"),"icon-primary":gt("primary-50"),"icon-primary-subtle":gt("primary-60"),"icon-primary-subtlest":gt("primary-70"),"icon-hover":gt("primary-40"),"icon-selected":gt("primary-50"),"icon-selected-hover":gt("primary-40"),"icon-disabled":gt("neutral-50"),"icon-disabled-subtle":gt("neutral-60"),"icon-selected-disabled":gt("neutral-60"),"icon-success":gt("success-50"),"icon-warning":gt("warning-60"),"icon-error":gt("error-50"),"icon-error-strong":gt("error-40"),"icon-info":gt("info-50"),"icon-inverse":gt("white"),"icon-primary-inverse":gt("primary-inverse"),border:gt("neutral-90"),"border-strong":gt("neutral-70"),"border-stronger":gt("neutral-50"),"border-primary":gt("primary-50"),"border-primary-subtle":gt("primary-60"),"border-hover":gt("primary-90"),"border-hover-strong":gt("primary-60"),"border-selected":gt("primary-50"),"border-selected-subtle":gt("primary-70"),"border-selected-subtlest":gt("primary-90"),"border-selected-hover":gt("primary-40"),"border-focus":gt("primary-60"),"border-focus-strong":gt("primary-50"),"border-disabled":gt("neutral-90"),"border-selected-disabled":gt("neutral-70"),"border-success":gt("success-60"),"border-warning":gt("warning-60"),"border-error":gt("error-60"),"border-error-focus":gt("error-60"),"border-error-focus-strong":gt("error-40"),"border-error-strong":gt("error-40"),"border-info":gt("info-60"),bg:gt("white"),"bg-strong":gt("neutral-100"),"bg-stronger":gt("neutral-95"),"bg-strongest":gt("neutral-90"),"bg-hover":gt("primary-95"),"bg-hover-strong":gt("primary-90"),"bg-hover-subtle":gt("primary-100"),"bg-hover-neutral":gt("neutral-100"),"bg-hover-neutral-strong":gt("neutral-90"),"bg-selected":gt("primary-95"),"bg-selected-hover":gt("primary-90"),"bg-selected-strong":gt("primary-90"),"bg-selected-stronger":gt("primary-70"),"bg-selected-strongest":gt("primary-50"),"bg-selected-strongest-hover":gt("primary-40"),"bg-disabled":gt("neutral-95"),"bg-selected-disabled":gt("neutral-95"),"bg-selected-stronger-disabled":gt("neutral-70"),"bg-success":gt("success-100"),"bg-success-hover":gt("success-95"),"bg-success-strong":gt("success-50"),"bg-success-strong-hover":gt("success-40"),"bg-warning":gt("warning-100"),"bg-warning-hover":gt("warning-95"),"bg-warning-strong":gt("warning-50"),"bg-warning-strong-hover":gt("warning-40"),"bg-info":gt("info-100"),"bg-info-hover":gt("info-95"),"bg-info-strong":gt("info-50"),"bg-info-strong-hover":gt("info-40"),"bg-error":gt("error-100"),"bg-error-hover":gt("error-95"),"bg-error-strong":gt("error-50"),"bg-error-strong-hover":gt("error-40"),"bg-inverse":gt("neutral-20"),"bg-inverse-subtle":gt("neutral-30"),"bg-inverse-subtler":gt("neutral-50"),"bg-inverse-subtlest":gt("neutral-60"),"bg-inverse-hover":gt("neutral-40"),"bg-primary":gt("primary-50"),"bg-primary-subtle":gt("primary-60"),"bg-primary-subtler":gt("primary-95"),"bg-primary-subtlest":gt("primary-100"),"bg-available":"#6DD0A1","bg-primary-hover":gt("primary-40"),"bg-primary-subtlest-hover":gt("primary-90"),"bg-primary-subtlest-selected":gt("primary-90"),"overlay-strong":"rgba(40, 40, 40, 0.85)","overlay-subtle":"rgba(40, 40, 40, 0.20)",hyperlink:gt("primary-50"),"hyperlink-hover":gt("primary-40"),"hyperlink-visited":gt("primary-40"),"hyperlink-inverse":gt("primary-inverse"),"focus-ring":gt("black"),"focus-ring-inverse":gt("white")},yt={collections:{lifesg:ft,bookingsg:ft,rbs:ft,mylegacy:ft,ccube:ft,pa:{text:gt("neutral-30"),"text-subtle":gt("neutral-40"),"text-subtler":gt("neutral-50"),"text-subtlest":gt("neutral-70"),"text-primary":gt("neutral-10"),"text-hover":gt("neutral-70"),"text-selected":gt("neutral-20"),"text-selected-hover":gt("neutral-10"),"text-disabled":gt("neutral-50"),"text-disabled-subtle":gt("neutral-60"),"text-disabled-subtlest":gt("neutral-80"),"text-selected-disabled":gt("neutral-40"),"text-success":gt("success-40"),"text-warning":gt("warning-40"),"text-error":gt("brand-30"),"text-info":gt("neutral-40"),"text-inverse":gt("neutral-100"),icon:gt("neutral-40"),"icon-subtle":gt("neutral-50"),"icon-strongest":gt("neutral-10"),"icon-primary":gt("neutral-10"),"icon-primary-subtle":gt("neutral-30"),"icon-primary-subtlest":gt("neutral-60"),"icon-hover":gt("neutral-70"),"icon-selected":gt("brand-20"),"icon-selected-hover":gt("brand-10"),"icon-disabled":gt("neutral-50"),"icon-disabled-subtle":gt("neutral-60"),"icon-selected-disabled":gt("neutral-40"),"icon-success":gt("success-40"),"icon-warning":gt("warning-60"),"icon-error":gt("brand-30"),"icon-error-strong":gt("brand-10"),"icon-info":gt("neutral-40"),"icon-inverse":gt("neutral-100"),"icon-primary-inverse":"#F9B371",border:gt("neutral-90"),"border-strong":gt("neutral-30"),"border-stronger":gt("neutral-20"),"border-primary":gt("neutral-40"),"border-primary-subtle":gt("neutral-60"),"border-hover":gt("neutral-80"),"border-hover-strong":gt("neutral-10"),"border-selected":gt("neutral-20"),"border-selected-subtle":gt("neutral-40"),"border-selected-subtlest":gt("neutral-70"),"border-selected-hover":gt("neutral-10"),"border-focus":gt("brand-60"),"border-focus-strong":gt("brand-40"),"border-disabled":gt("neutral-90"),"border-selected-disabled":gt("neutral-80"),"border-success":gt("success-40"),"border-warning":gt("warning-60"),"border-error":gt("brand-30"),"border-error-focus":gt("brand-20"),"border-error-focus-strong":gt("brand-10"),"border-error-strong":gt("brand-20"),"border-info":gt("neutral-40"),bg:gt("neutral-100"),"bg-strong":gt("neutral-95"),"bg-stronger":gt("neutral-90"),"bg-strongest":gt("neutral-80"),"bg-hover":gt("brand-90"),"bg-hover-strong":gt("brand-80"),"bg-hover-subtle":gt("neutral-90"),"bg-hover-neutral":gt("neutral-90"),"bg-hover-neutral-strong":gt("neutral-90"),"bg-selected":gt("brand-50"),"bg-selected-hover":gt("brand-70"),"bg-selected-strong":gt("brand-90"),"bg-selected-stronger":gt("brand-40"),"bg-selected-strongest":gt("brand-20"),"bg-selected-strongest-hover":gt("brand-10"),"bg-disabled":gt("neutral-90"),"bg-selected-disabled":gt("neutral-90"),"bg-selected-stronger-disabled":gt("neutral-80"),"bg-success":gt("success-100"),"bg-success-hover":gt("success-95"),"bg-success-strong":gt("success-50"),"bg-success-strong-hover":gt("success-40"),"bg-warning":gt("warning-100"),"bg-warning-hover":gt("warning-95"),"bg-warning-strong":gt("warning-50"),"bg-warning-strong-hover":gt("warning-40"),"bg-info":gt("neutral-95"),"bg-info-hover":gt("info-95"),"bg-info-strong":gt("info-50"),"bg-info-strong-hover":gt("info-40"),"bg-error":gt("brand-100"),"bg-error-hover":gt("error-95"),"bg-error-strong":gt("error-50"),"bg-error-strong-hover":gt("error-40"),"bg-inverse":gt("neutral-40"),"bg-inverse-subtle":gt("neutral-60"),"bg-inverse-subtler":gt("neutral-70"),"bg-inverse-subtlest":gt("neutral-80"),"bg-inverse-hover":gt("neutral-30"),"bg-primary":gt("brand-20"),"bg-primary-subtle":gt("brand-60"),"bg-primary-subtler":gt("brand-80"),"bg-primary-subtlest":gt("brand-100"),"bg-available":gt("success-60"),"bg-primary-hover":gt("brand-10"),"bg-primary-subtlest-hover":gt("brand-80"),"bg-primary-subtlest-selected":gt("brand-40"),"overlay-strong":"rgba(25, 25, 25, 0.95)","overlay-subtle":"rgba(25, 25, 25, 0.20)",hyperlink:gt("neutral-10"),"hyperlink-hover":gt("neutral-40"),"hyperlink-visited":gt("neutral-50"),"hyperlink-inverse":"#F8AE68","focus-ring":gt("black"),"focus-ring-inverse":gt("white")}},defaultValue:"lifesg"},pt=e=>r=>{var t;const n=r.theme,a=lt(yt,null==n?void 0:n.colourScheme),o=(null===(t=null==n?void 0:n.overrides)||void 0===t?void 0:t.semanticColour)?st(a,e,n.overrides.semanticColour):a[e];return"function"==typeof o?o(r):o},vt={text:pt("text"),"text-subtle":pt("text-subtle"),"text-subtler":pt("text-subtler"),"text-subtlest":pt("text-subtlest"),"text-primary":pt("text-primary"),"text-hover":pt("text-hover"),"text-selected":pt("text-selected"),"text-selected-hover":pt("text-selected-hover"),"text-disabled":pt("text-disabled"),"text-disabled-subtle":pt("text-disabled-subtle"),"text-disabled-subtlest":pt("text-disabled-subtlest"),"text-selected-disabled":pt("text-selected-disabled"),"text-success":pt("text-success"),"text-warning":pt("text-warning"),"text-error":pt("text-error"),"text-info":pt("text-info"),"text-inverse":pt("text-inverse"),icon:pt("icon"),"icon-subtle":pt("icon-subtle"),"icon-strongest":pt("icon-strongest"),"icon-primary":pt("icon-primary"),"icon-primary-subtle":pt("icon-primary-subtle"),"icon-primary-subtlest":pt("icon-primary-subtlest"),"icon-hover":pt("icon-hover"),"icon-selected":pt("icon-selected"),"icon-selected-hover":pt("icon-selected-hover"),"icon-disabled":pt("icon-disabled"),"icon-disabled-subtle":pt("icon-disabled-subtle"),"icon-selected-disabled":pt("icon-selected-disabled"),"icon-success":pt("icon-success"),"icon-warning":pt("icon-warning"),"icon-error":pt("icon-error"),"icon-error-strong":pt("icon-error-strong"),"icon-info":pt("icon-info"),"icon-inverse":pt("icon-inverse"),"icon-primary-inverse":pt("icon-primary-inverse"),border:pt("border"),"border-strong":pt("border-strong"),"border-stronger":pt("border-stronger"),"border-primary":pt("border-primary"),"border-primary-subtle":pt("border-primary-subtle"),"border-hover":pt("border-hover"),"border-hover-strong":pt("border-hover-strong"),"border-selected":pt("border-selected"),"border-selected-subtle":pt("border-selected-subtle"),"border-selected-subtlest":pt("border-selected-subtlest"),"border-selected-hover":pt("border-selected-hover"),"border-focus":pt("border-focus"),"border-focus-strong":pt("border-focus-strong"),"border-disabled":pt("border-disabled"),"border-selected-disabled":pt("border-selected-disabled"),"border-success":pt("border-success"),"border-warning":pt("border-warning"),"border-error":pt("border-error"),"border-error-focus":pt("border-error-focus"),"border-error-focus-strong":pt("border-error-focus-strong"),"border-error-strong":pt("border-error-strong"),"border-info":pt("border-info"),bg:pt("bg"),"bg-strong":pt("bg-strong"),"bg-stronger":pt("bg-stronger"),"bg-strongest":pt("bg-strongest"),"bg-hover":pt("bg-hover"),"bg-hover-strong":pt("bg-hover-strong"),"bg-hover-subtle":pt("bg-hover-subtle"),"bg-hover-neutral":pt("bg-hover-neutral"),"bg-hover-neutral-strong":pt("bg-hover-neutral-strong"),"bg-selected":pt("bg-selected"),"bg-selected-hover":pt("bg-selected-hover"),"bg-selected-strong":pt("bg-selected-strong"),"bg-selected-stronger":pt("bg-selected-stronger"),"bg-selected-strongest":pt("bg-selected-strongest"),"bg-selected-strongest-hover":pt("bg-selected-strongest-hover"),"bg-disabled":pt("bg-disabled"),"bg-selected-disabled":pt("bg-selected-disabled"),"bg-selected-stronger-disabled":pt("bg-selected-stronger-disabled"),"bg-success":pt("bg-success"),"bg-success-hover":pt("bg-success-hover"),"bg-success-strong":pt("bg-success-strong"),"bg-success-strong-hover":pt("bg-success-strong-hover"),"bg-warning":pt("bg-warning"),"bg-warning-hover":pt("bg-warning-hover"),"bg-warning-strong":pt("bg-warning-strong"),"bg-warning-strong-hover":pt("bg-warning-strong-hover"),"bg-info":pt("bg-info"),"bg-info-hover":pt("bg-info-hover"),"bg-info-strong":pt("bg-info-strong"),"bg-info-strong-hover":pt("bg-info-strong-hover"),"bg-error":pt("bg-error"),"bg-error-hover":pt("bg-error-hover"),"bg-error-strong":pt("bg-error-strong"),"bg-error-strong-hover":pt("bg-error-strong-hover"),"bg-inverse":pt("bg-inverse"),"bg-inverse-subtle":pt("bg-inverse-subtle"),"bg-inverse-subtler":pt("bg-inverse-subtler"),"bg-inverse-subtlest":pt("bg-inverse-subtlest"),"bg-inverse-hover":pt("bg-inverse-hover"),"bg-primary":pt("bg-primary"),"bg-primary-subtle":pt("bg-primary-subtle"),"bg-primary-subtler":pt("bg-primary-subtler"),"bg-primary-subtlest":pt("bg-primary-subtlest"),"bg-available":pt("bg-available"),"bg-primary-hover":pt("bg-primary-hover"),"bg-primary-subtlest-hover":pt("bg-primary-subtlest-hover"),"bg-primary-subtlest-selected":pt("bg-primary-subtlest-selected"),"overlay-strong":pt("overlay-strong"),"overlay-subtle":pt("overlay-subtle"),hyperlink:pt("hyperlink"),"hyperlink-hover":pt("hyperlink-hover"),"hyperlink-visited":pt("hyperlink-visited"),"hyperlink-inverse":pt("hyperlink-inverse"),"focus-ring":pt("focus-ring"),"focus-ring-inverse":pt("focus-ring-inverse")},xt={collections:{default:{solid:e=>r=>{var t,n,a;const{thickness:o,radius:i,colour:s}=e||{},l=null!==(t="function"==typeof o?o(r):o)&&void 0!==t?t:ut["width-010"](r),d=null!==(n="function"==typeof i?i(r):i)&&void 0!==n?n:0,c=null!==(a="function"==typeof s?s(r):s)&&void 0!==a?a:vt.border(r),u=ut.solid;return p`
            border: ${l} ${u} ${c};
            border-radius: ${d};
        `},"dashed-default":e=>r=>{var t,n,a;const{thickness:o,radius:i,colour:s}=e||{},l=null!==(t="function"==typeof o?o(r):o)&&void 0!==t?t:ut["width-010"](r),d=null!==(n="function"==typeof i?i(r):i)&&void 0!==n?n:0,c=null!==(a="function"==typeof s?s(r):s)&&void 0!==a?a:vt.border(r),u=encodeURIComponent(`<svg width='100%' height='100%' xmlns='http://www.w3.org/2000/svg'><rect width='100%' height='100%' fill='none' rx='${d}' ry='${d}' stroke='${c}' stroke-width='${l}' stroke-dasharray='4, 8' stroke-dashoffset='0' stroke-linecap='square'/></svg>`);return p`
            background-image: url("data:image/svg+xml,${u}");
            border-radius: ${d};
        `}}},defaultValue:"default"},wt=e=>1===e.length&&"theme"in e[0],Dt=e=>(...r)=>t=>{const n=wt(r)?[]:r,a=wt(r)?r[0]:t,o=a.theme;return(0,lt(xt,null==o?void 0:o.borderScheme)[e])(...n)(a)},$t={solid:Dt("solid"),"dashed-default":Dt("dashed-default")},Ft={collections:{default:{"xxs-min":0,"xxs-max":320,"xs-min":321,"xs-max":375,"sm-min":376,"sm-max":420,"md-min":421,"md-max":767,"lg-min":768,"lg-max":1023,"xl-min":1024,"xl-max":1440,"xxl-min":1441,"xxs-column":8,"xs-column":8,"sm-column":8,"md-column":8,"lg-column":12,"xl-column":12,"xxl-column":12,"xxs-gutter":16,"xs-gutter":16,"sm-gutter":16,"md-gutter":16,"lg-gutter":32,"xl-gutter":32,"xxl-gutter":32,"xxs-margin":24,"xs-margin":24,"sm-margin":24,"md-margin":24,"lg-margin":48,"xl-margin":48,"xxl-margin":48}},defaultValue:"default"},Et=e=>r=>{var t;const n=r.theme,a=lt(Ft,null==n?void 0:n.breakpointScheme);let o;return o=(null===(t=null==n?void 0:n.overrides)||void 0===t?void 0:t.breakpoint)?st(a,e,n.overrides.breakpoint):a[e],o},Ct={"xxs-min":Et("xxs-min"),"xxs-max":Et("xxs-max"),"xs-min":Et("xs-min"),"xs-max":Et("xs-max"),"sm-min":Et("sm-min"),"sm-max":Et("sm-max"),"md-min":Et("md-min"),"md-max":Et("md-max"),"lg-min":Et("lg-min"),"lg-max":Et("lg-max"),"xl-min":Et("xl-min"),"xl-max":Et("xl-max"),"xxl-min":Et("xxl-min"),"xxs-column":Et("xxs-column"),"xs-column":Et("xs-column"),"sm-column":Et("sm-column"),"md-column":Et("md-column"),"lg-column":Et("lg-column"),"xl-column":Et("xl-column"),"xxl-column":Et("xxl-column"),"xxs-gutter":Et("xxs-gutter"),"xs-gutter":Et("xs-gutter"),"sm-gutter":Et("sm-gutter"),"md-gutter":Et("md-gutter"),"lg-gutter":Et("lg-gutter"),"xl-gutter":Et("xl-gutter"),"xxl-gutter":Et("xxl-gutter"),"xxs-margin":Et("xxs-margin"),"xs-margin":Et("xs-margin"),"sm-margin":Et("sm-margin"),"md-margin":Et("md-margin"),"lg-margin":Et("lg-margin"),"xl-margin":Et("xl-margin"),"xxl-margin":Et("xxl-margin")},St=e=>("max-width"===e?["xxs","xs","sm","md","lg","xl"]:["xxs","xs","sm","md","lg","xl","xxl"]).reduce(((r,t)=>(r[t]=((e,r)=>{const t=Ct["max-width"===e?`${r}-max`:`${r}-min`];return r=>{const n=t(r);return`@media screen and (${e}: ${n}px)`}})(e,t),r)),{}),Bt={MaxWidth:St("max-width"),MinWidth:St("min-width")},At={"header-size-xxl":"3rem","header-size-xl":"2.5rem","header-size-lg":"2rem","header-size-md":"1.625rem","header-size-sm":"1.375rem","header-size-xs":"1.125rem","header-lh-xxl":"3.5rem","header-lh-xl":"3rem","header-lh-lg":"2.5rem","header-lh-md":"2.25rem","header-lh-sm":"1.75rem","header-lh-xs":"1.625rem","header-ls-xxl":"-0.056rem","header-ls-xl":"-0.032rem","header-ls-lg":"-0.032rem","header-ls-md":"0rem","header-ls-sm":"0rem","header-ls-xs":"0rem","weight-light":"300","weight-regular":"400","weight-semibold":"600","weight-bold":"700","font-family":"Open Sans","body-size-baseline":"1.125rem","body-size-md":"1rem","body-size-sm":"0.875rem","body-size-xs":"0.75rem","body-lh-baseline":"1.625rem","body-lh-md":"1.5rem","body-lh-sm":"1.625rem","body-lh-xs":"1.25rem","body-ls-baseline":"0rem","body-ls-md":"0.014rem","body-ls-sm":"0.012rem","body-ls-xs":"0.012rem","form-label-size":"1rem","form-description-size":"0.875rem","form-label-lh":"1.5rem","form-description-lh":"1.6rem","form-label-ls":"0.014rem","form-description-ls":"0.012rem"},Mt={collections:{lifesg:At,bookingsg:{"header-size-xxl":"3rem","header-size-xl":"2.5rem","header-size-lg":"2rem","header-size-md":"1.625rem","header-size-sm":"1.375rem","header-size-xs":"1.125rem","header-lh-xxl":"3.5rem","header-lh-xl":"3rem","header-lh-lg":"2.5rem","header-lh-md":"2.25rem","header-lh-sm":"1.75rem","header-lh-xs":"1.75rem","header-ls-xxl":"-0.056rem","header-ls-xl":"-0.032rem","header-ls-lg":"-0.032rem","header-ls-md":"0rem","header-ls-sm":"0rem","header-ls-xs":"0rem","weight-light":"300","weight-regular":"400","weight-semibold":"600","weight-bold":"700","font-family":"Plus Jakarta Sans","body-size-baseline":"1.125rem","body-size-md":"1rem","body-size-sm":"0.875rem","body-size-xs":"0.75rem","body-lh-baseline":"1.75rem","body-lh-md":"1.5rem","body-lh-sm":"1.6rem","body-lh-xs":"1.2rem","body-ls-baseline":"0rem","body-ls-md":"0.014rem","body-ls-sm":"0.012rem","body-ls-xs":"0.012rem","form-label-size":"1rem","form-description-size":"0.875rem","form-label-lh":"1.5rem","form-description-lh":"1.6rem","form-label-ls":"0.014rem","form-description-ls":"0.012rem"},rbs:At,mylegacy:At,ccube:At,pa:{"header-size-xxl":"3rem","header-size-xl":"2.5rem","header-size-lg":"2rem","header-size-md":"1.625rem","header-size-sm":"1.375rem","header-size-xs":"1.125rem","header-lh-xxl":"3.5rem","header-lh-xl":"3rem","header-lh-lg":"2.5rem","header-lh-md":"2.25rem","header-lh-sm":"1.75rem","header-lh-xs":"1.625rem","header-ls-xxl":"-0.056rem","header-ls-xl":"-0.032rem","header-ls-lg":"0rem","header-ls-md":"0rem","header-ls-sm":"0rem","header-ls-xs":"0rem","weight-light":"300","weight-regular":"400","weight-semibold":"600","weight-bold":"700","font-family":"Lato","body-size-baseline":"1.375rem","body-size-md":"1rem","body-size-sm":"0.875rem","body-size-xs":"0.75rem","body-lh-baseline":"1.5rem","body-lh-md":"1.5rem","body-lh-sm":"1.6rem","body-lh-xs":"1.2rem","body-ls-baseline":"0.014rem","body-ls-md":"0.014rem","body-ls-sm":"0.012rem","body-ls-xs":"0.012rem","form-label-size":"1rem","form-description-size":"0.875rem","form-label-lh":"1.5rem","form-description-lh":"1.6rem","form-label-ls":"0.014rem","form-description-ls":"0.012rem"}},defaultValue:"lifesg"},Ot=e=>r=>{var t;const n=r.theme,a=lt(Mt,null==n?void 0:n.fontScheme);return(null===(t=null==n?void 0:n.overrides)||void 0===t?void 0:t.fontSpec)?st(a,e,n.overrides.fontSpec):a[e]},zt={"header-size-xxl":Ot("header-size-xxl"),"header-size-xl":Ot("header-size-xl"),"header-size-lg":Ot("header-size-lg"),"header-size-md":Ot("header-size-md"),"header-size-sm":Ot("header-size-sm"),"header-size-xs":Ot("header-size-xs"),"header-lh-xxl":Ot("header-lh-xxl"),"header-lh-xl":Ot("header-lh-xl"),"header-lh-lg":Ot("header-lh-lg"),"header-lh-md":Ot("header-lh-md"),"header-lh-sm":Ot("header-lh-sm"),"header-lh-xs":Ot("header-lh-xs"),"header-ls-xxl":Ot("header-ls-xxl"),"header-ls-xl":Ot("header-ls-xl"),"header-ls-lg":Ot("header-ls-lg"),"header-ls-md":Ot("header-ls-md"),"header-ls-sm":Ot("header-ls-sm"),"header-ls-xs":Ot("header-ls-xs"),"weight-light":Ot("weight-light"),"weight-regular":Ot("weight-regular"),"weight-semibold":Ot("weight-semibold"),"weight-bold":Ot("weight-bold"),"font-family":Ot("font-family"),"body-size-baseline":Ot("body-size-baseline"),"body-size-md":Ot("body-size-md"),"body-size-sm":Ot("body-size-sm"),"body-size-xs":Ot("body-size-xs"),"body-lh-baseline":Ot("body-lh-baseline"),"body-lh-md":Ot("body-lh-md"),"body-lh-sm":Ot("body-lh-sm"),"body-lh-xs":Ot("body-lh-xs"),"body-ls-baseline":Ot("body-ls-baseline"),"body-ls-md":Ot("body-ls-md"),"body-ls-sm":Ot("body-ls-sm"),"body-ls-xs":Ot("body-ls-xs"),"form-label-size":Ot("form-label-size"),"form-description-size":Ot("form-description-size"),"form-label-lh":Ot("form-label-lh"),"form-description-lh":Ot("form-description-lh"),"form-label-ls":Ot("form-label-ls"),"form-description-ls":Ot("form-description-ls")},kt=(e,r,t,n)=>p`
    font-family: ${Ot("font-family")};
    font-size: ${Ot(e)};
    font-weight: ${Ot(r)};
    line-height: ${Ot(t)};
    letter-spacing: ${Ot(n)};
`,Yt={"header-xxl-light":kt("header-size-xxl","weight-light","header-lh-xxl","header-ls-xxl"),"header-xxl-regular":kt("header-size-xxl","weight-regular","header-lh-xxl","header-ls-xxl"),"header-xxl-semibold":kt("header-size-xxl","weight-semibold","header-lh-xxl","header-ls-xxl"),"header-xxl-bold":kt("header-size-xxl","weight-bold","header-lh-xxl","header-ls-xxl"),"header-xl-light":kt("header-size-xl","weight-light","header-lh-xl","header-ls-xl"),"header-xl-regular":kt("header-size-xl","weight-regular","header-lh-xl","header-ls-xl"),"header-xl-semibold":kt("header-size-xl","weight-semibold","header-lh-xl","header-ls-xl"),"header-xl-bold":kt("header-size-xl","weight-bold","header-lh-xl","header-ls-xl"),"header-lg-light":kt("header-size-lg","weight-light","header-lh-lg","header-ls-lg"),"header-lg-regular":kt("header-size-lg","weight-regular","header-lh-lg","header-ls-lg"),"header-lg-semibold":kt("header-size-lg","weight-semibold","header-lh-lg","header-ls-lg"),"header-lg-bold":kt("header-size-lg","weight-bold","header-lh-lg","header-ls-lg"),"header-md-light":kt("header-size-md","weight-light","header-lh-md","header-ls-md"),"header-md-regular":kt("header-size-md","weight-regular","header-lh-md","header-ls-md"),"header-md-semibold":kt("header-size-md","weight-semibold","header-lh-md","header-ls-md"),"header-md-bold":kt("header-size-md","weight-bold","header-lh-md","header-ls-md"),"header-sm-light":kt("header-size-sm","weight-light","header-lh-sm","header-ls-sm"),"header-sm-regular":kt("header-size-sm","weight-regular","header-lh-sm","header-ls-sm"),"header-sm-semibold":kt("header-size-sm","weight-semibold","header-lh-sm","header-ls-sm"),"header-sm-bold":kt("header-size-sm","weight-bold","header-lh-sm","header-ls-sm"),"header-xs-light":kt("header-size-xs","weight-light","header-lh-xs","header-ls-xs"),"header-xs-regular":kt("header-size-xs","weight-regular","header-lh-xs","header-ls-xs"),"header-xs-semibold":kt("header-size-xs","weight-semibold","header-lh-xs","header-ls-xs"),"header-xs-bold":kt("header-size-xs","weight-bold","header-lh-xs","header-ls-xs"),"body-baseline-light":kt("body-size-baseline","weight-light","body-lh-baseline","body-ls-baseline"),"body-baseline-regular":kt("body-size-baseline","weight-regular","body-lh-baseline","body-ls-baseline"),"body-baseline-semibold":kt("body-size-baseline","weight-semibold","body-lh-baseline","body-ls-baseline"),"body-baseline-bold":kt("body-size-baseline","weight-bold","body-lh-baseline","body-ls-baseline"),"body-md-light":kt("body-size-md","weight-light","body-lh-md","body-ls-md"),"body-md-regular":kt("body-size-md","weight-regular","body-lh-md","body-ls-md"),"body-md-semibold":kt("body-size-md","weight-semibold","body-lh-md","body-ls-md"),"body-md-bold":kt("body-size-md","weight-bold","body-lh-md","body-ls-md"),"body-sm-light":kt("body-size-sm","weight-light","body-lh-sm","body-ls-sm"),"body-sm-regular":kt("body-size-sm","weight-regular","body-lh-sm","body-ls-sm"),"body-sm-semibold":kt("body-size-sm","weight-semibold","body-lh-sm","body-ls-sm"),"body-sm-bold":kt("body-size-sm","weight-bold","body-lh-sm","body-ls-sm"),"body-xs-light":kt("body-size-xs","weight-light","body-lh-xs","body-ls-xs"),"body-xs-regular":kt("body-size-xs","weight-regular","body-lh-xs","body-ls-xs"),"body-xs-semibold":kt("body-size-xs","weight-semibold","body-lh-xs","body-ls-xs"),"body-xs-bold":kt("body-size-xs","weight-bold","body-lh-xs","body-ls-xs"),"form-label":kt("form-label-size","weight-semibold","form-label-lh","form-label-ls"),"form-description":kt("form-description-size","weight-regular","form-description-lh","form-description-ls")},Tt={collections:{lifesg:Yt,bookingsg:Yt,rbs:Yt,mylegacy:Yt,ccube:Yt,pa:Yt},defaultValue:"lifesg"},jt=e=>r=>{var t;const n=r.theme,a=lt(Tt,null==n?void 0:n.fontScheme),o=(null===(t=null==n?void 0:n.overrides)||void 0===t?void 0:t.font)?st(a,e,n.overrides.font):a[e];return"function"==typeof o?o(r):o},_t={"header-xxl-light":jt("header-xxl-light"),"header-xxl-regular":jt("header-xxl-regular"),"header-xxl-semibold":jt("header-xxl-semibold"),"header-xxl-bold":jt("header-xxl-bold"),"header-xl-light":jt("header-xl-light"),"header-xl-regular":jt("header-xl-regular"),"header-xl-semibold":jt("header-xl-semibold"),"header-xl-bold":jt("header-xl-bold"),"header-lg-light":jt("header-lg-light"),"header-lg-regular":jt("header-lg-regular"),"header-lg-semibold":jt("header-lg-semibold"),"header-lg-bold":jt("header-lg-bold"),"header-md-light":jt("header-md-light"),"header-md-regular":jt("header-md-regular"),"header-md-semibold":jt("header-md-semibold"),"header-md-bold":jt("header-md-bold"),"header-sm-light":jt("header-sm-light"),"header-sm-regular":jt("header-sm-regular"),"header-sm-semibold":jt("header-sm-semibold"),"header-sm-bold":jt("header-sm-bold"),"header-xs-light":jt("header-xs-light"),"header-xs-regular":jt("header-xs-regular"),"header-xs-semibold":jt("header-xs-semibold"),"header-xs-bold":jt("header-xs-bold"),"body-baseline-light":jt("body-baseline-light"),"body-baseline-regular":jt("body-baseline-regular"),"body-baseline-semibold":jt("body-baseline-semibold"),"body-baseline-bold":jt("body-baseline-bold"),"body-md-light":jt("body-md-light"),"body-md-regular":jt("body-md-regular"),"body-md-semibold":jt("body-md-semibold"),"body-md-bold":jt("body-md-bold"),"body-sm-light":jt("body-sm-light"),"body-sm-regular":jt("body-sm-regular"),"body-sm-semibold":jt("body-sm-semibold"),"body-sm-bold":jt("body-sm-bold"),"body-xs-light":jt("body-xs-light"),"body-xs-regular":jt("body-xs-regular"),"body-xs-semibold":jt("body-xs-semibold"),"body-xs-bold":jt("body-xs-bold"),"form-label":jt("form-label"),"form-description":jt("form-description")},Rt={collections:{default:{"duration-150":"150ms","duration-250":"250ms","duration-350":"350ms","duration-500":"500ms","duration-800":"800ms","duration-1000":"1000ms","ease-default":"cubic-bezier(0.45, 0.05, 0.55, 0.95)","ease-standard":"cubic-bezier(0.86, 0, 0.07, 1)","ease-entrance":"cubic-bezier(0.18, 0.13, 0, 1)","ease-exit":"cubic-bezier(1, 0, 0.8, 0.85)"}},defaultValue:"default"},Ht=e=>r=>{var t;const n=r.theme,a=lt(Rt,null==n?void 0:n.motionScheme);return(null===(t=null==n?void 0:n.overrides)||void 0===t?void 0:t.motion)?st(a,e,n.overrides.motion):a[e]},Lt={"duration-150":Ht("duration-150"),"duration-250":Ht("duration-250"),"duration-350":Ht("duration-350"),"duration-500":Ht("duration-500"),"duration-800":Ht("duration-800"),"duration-1000":Ht("duration-1000"),"ease-default":Ht("ease-default"),"ease-standard":Ht("ease-standard"),"ease-entrance":Ht("ease-entrance"),"ease-exit":Ht("ease-exit")},It={collections:{default:{none:0,xs:2,sm:4,md:8,lg:12,full:9999}},defaultValue:"default"},Wt=e=>r=>{var t;const n=r.theme,a=lt(It,null==n?void 0:n.radiusScheme);return(null===(t=null==n?void 0:n.overrides)||void 0===t?void 0:t.radius)?`${st(a,e,n.overrides.radius)}px`:`${a[e]}px`},Nt={none:Wt("none"),xs:Wt("xs"),sm:Wt("sm"),md:Wt("md"),lg:Wt("lg"),full:Wt("full")},Pt={collections:{default:{"spacing-0":0,"spacing-4":4,"spacing-8":8,"spacing-12":12,"spacing-16":16,"spacing-20":20,"spacing-24":24,"spacing-32":32,"spacing-40":40,"spacing-48":48,"spacing-64":64,"spacing-72":72,"layout-xs":8,"layout-sm":16,"layout-md":24,"layout-lg":32,"layout-xl":48,"layout-xxl":64,"layout-xxxl":128}},defaultValue:"default"},Vt=e=>r=>{var t;const n=r.theme,a=lt(Pt,null==n?void 0:n.spacingScheme);return(null===(t=null==n?void 0:n.overrides)||void 0===t?void 0:t.spacing)?`${st(a,e,n.overrides.spacing)}px`:`${a[e]}px`},Zt={"spacing-0":Vt("spacing-0"),"spacing-4":Vt("spacing-4"),"spacing-8":Vt("spacing-8"),"spacing-12":Vt("spacing-12"),"spacing-16":Vt("spacing-16"),"spacing-20":Vt("spacing-20"),"spacing-24":Vt("spacing-24"),"spacing-32":Vt("spacing-32"),"spacing-40":Vt("spacing-40"),"spacing-48":Vt("spacing-48"),"spacing-64":Vt("spacing-64"),"spacing-72":Vt("spacing-72"),"layout-xs":Vt("layout-xs"),"layout-sm":Vt("layout-sm"),"layout-md":Vt("layout-md"),"layout-lg":Vt("layout-lg"),"layout-xl":Vt("layout-xl"),"layout-xxl":Vt("layout-xxl"),"layout-xxxl":Vt("layout-xxxl")},Ut=Object.assign(Object.assign({},vt),{Primitive:mt}),Kt=Object.assign(Object.assign({},_t),{Spec:zt}),Jt=Lt,qt=Object.assign(Object.assign({},ut),{Util:$t}),Xt=Zt,Gt=Nt,Qt=Ct,en=Bt,rn=e=>"small"===e?2.5:3;y.div`
    position: relative;
    width: 100%;
    ${e=>{const r=rn(e.$variant);return p`
            min-height: ${r}rem;
            height: ${r}rem; // Need this to persist the height when expanding or collapsing list
        `}}
`;const tn=p`
    display: flex;
    position: relative;
    align-items: center;
    justify-content: space-between;
    padding: 0 ${Xt["spacing-16"]};
    // exclude top and bottom borders
    height: calc(${e=>rn(e.$variant)}rem - 2px);
    width: 100%;
    border-radius: ${Gt.sm};
    border: none;
    background: transparent;

    :focus,
    :active {
        outline: none;
    }

    :focus-visible {
        outline: 2px solid ${Ut["border-focus"]};
    }
`,nn=y.button`
    ${tn}
    cursor: pointer;
`;y.div`
    ${tn}
`;const an=v`
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
    border: ${qt["width-010"]} ${qt.solid} ${Ut.border};
    border-radius: ${Gt.sm};
    background: ${Ut.bg};
    overflow: hidden;

    :focus-within {
        border-color: ${Ut["border-focus"]};
        box-shadow: 0px 0px 4px 0px
            rgb(from ${Ut["border-focus"]} r g b / 50%) inset; // TODO: confirm shadow
    }

    ${e=>e.expanded?p`
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                z-index: 2;
            `:p`
                animation: ${an} 0.5s ease-in-out;
            `}

    ${e=>e.disabled?p`
                background: ${Ut["bg-disabled"]};

                ${nn} {
                    cursor: not-allowed;
                }

                :focus-within {
                    border-color: ${Ut.border};
                    box-shadow: none;
                }
            `:e.$readOnly?p`
                border: none;
                background: transparent !important;

                ${nn} {
                    padding: 0;
                }

                :focus-within {
                    border: none;
                    box-shadow: none;
                }
            `:e.error?p`
                border-color: ${Ut["border-error"]};

                :focus-within {
                    border-color: ${Ut["border-error"]};
                    box-shadow: 0px 0px 4px 0px
                        rgb(from ${Ut["border-error"]} r g b / 50%) inset; // TODO: confirm shadow
                }
            `:void 0}
`,y.div`
    transform: rotate(${e=>e.expanded?180:0}deg);
    transition: transform ${Jt["duration-250"]} ${Jt["ease-default"]};
    margin-left: ${Xt["spacing-16"]};
`,y(f)`
    color: ${Ut.icon};
`,y.div`
    height: 1px;
    background: ${Ut.border};
    margin: 0 ${Xt["spacing-8"]};
`,y.div`
    display: flex;
    flex: 1;
    word-break: break-all;
    ${e=>{if(e.$disabled)return p`
                color: ${Ut["text-disabled"]};
            `}}
`;y(y.div`
    ${e=>"small"===e.$variant?Kt["body-md-regular"]:Kt["body-baseline-regular"]}
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
    color: ${Ut["text-subtler"]};
`;var on=function(e,r){return on=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,r){e.__proto__=r}||function(e,r){for(var t in r)Object.prototype.hasOwnProperty.call(r,t)&&(e[t]=r[t])},on(e,r)};var sn=function(){return sn=Object.assign||function(e){for(var r,t=1,n=arguments.length;t<n;t++)for(var a in r=arguments[t])Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a]);return e},sn.apply(this,arguments)};var ln="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};var dn=function(e){var r=typeof e;return null!=e&&("object"==r||"function"==r)},cn="object"==typeof ln&&ln&&ln.Object===Object&&ln,un="object"==typeof self&&self&&self.Object===Object&&self,hn=cn||un||Function("return this")(),bn=hn,gn=function(){return bn.Date.now()},mn=/\s/;var fn=function(e){for(var r=e.length;r--&&mn.test(e.charAt(r)););return r},yn=/^\s+/;var pn=function(e){return e?e.slice(0,fn(e)+1).replace(yn,""):e},vn=hn.Symbol,xn=vn,wn=Object.prototype,Dn=wn.hasOwnProperty,$n=wn.toString,Fn=xn?xn.toStringTag:void 0;var En=function(e){var r=Dn.call(e,Fn),t=e[Fn];try{e[Fn]=void 0;var n=!0}catch(e){}var a=$n.call(e);return n&&(r?e[Fn]=t:delete e[Fn]),a},Cn=Object.prototype.toString;var Sn=En,Bn=function(e){return Cn.call(e)},An=vn?vn.toStringTag:void 0;var Mn=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":An&&An in Object(e)?Sn(e):Bn(e)},On=function(e){return null!=e&&"object"==typeof e};var zn=pn,kn=dn,Yn=function(e){return"symbol"==typeof e||On(e)&&"[object Symbol]"==Mn(e)},Tn=/^[-+]0x[0-9a-f]+$/i,jn=/^0b[01]+$/i,_n=/^0o[0-7]+$/i,Rn=parseInt;var Hn=dn,Ln=gn,In=function(e){if("number"==typeof e)return e;if(Yn(e))return NaN;if(kn(e)){var r="function"==typeof e.valueOf?e.valueOf():e;e=kn(r)?r+"":r}if("string"!=typeof e)return 0===e?e:+e;e=zn(e);var t=jn.test(e);return t||_n.test(e)?Rn(e.slice(2),t?2:8):Tn.test(e)?NaN:+e},Wn=Math.max,Nn=Math.min;var Pn=function(e,r,t){var n,a,o,i,s,l,d=0,c=!1,u=!1,h=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function b(r){var t=n,o=a;return n=a=void 0,d=r,i=e.apply(o,t)}function g(e){var t=e-l;return void 0===l||t>=r||t<0||u&&e-d>=o}function m(){var e=Ln();if(g(e))return f(e);s=setTimeout(m,function(e){var t=r-(e-l);return u?Nn(t,o-(e-d)):t}(e))}function f(e){return s=void 0,h&&n?b(e):(n=a=void 0,i)}function y(){var e=Ln(),t=g(e);if(n=arguments,a=this,l=e,t){if(void 0===s)return function(e){return d=e,s=setTimeout(m,r),c?b(e):i}(l);if(u)return clearTimeout(s),s=setTimeout(m,r),b(l)}return void 0===s&&(s=setTimeout(m,r)),i}return r=In(r)||0,Hn(t)&&(c=!!t.leading,o=(u="maxWait"in t)?Wn(In(t.maxWait)||0,r):o,h="trailing"in t?!!t.trailing:h),y.cancel=function(){void 0!==s&&clearTimeout(s),d=0,n=l=a=s=void 0},y.flush=function(){return void 0===s?i:f(Ln())},y},Vn=Pn,Zn=dn;var Un=function(e,r,t){var n=!0,a=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return Zn(t)&&(n="leading"in t?!!t.leading:n,a="trailing"in t?!!t.trailing:a),Vn(e,r,{leading:n,maxWait:r,trailing:a})},Kn=function(e,r,t,n){switch(r){case"debounce":return Pn(e,t,n);case"throttle":return Un(e,t,n);default:return e}},Jn=function(e){return"function"==typeof e},qn=function(){return"undefined"==typeof window},Xn=function(e){return e instanceof Element||e instanceof HTMLDocument},Gn=function(e,r,t,n){return function(a){var o=a.width,i=a.height;r((function(r){return r.width===o&&r.height===i||r.width===o&&!n||r.height===i&&!t?r:(e&&Jn(e)&&e(o,i),{width:o,height:i})}))}};!function(e){function r(r){var t=e.call(this,r)||this;t.cancelHandler=function(){t.resizeHandler&&t.resizeHandler.cancel&&(t.resizeHandler.cancel(),t.resizeHandler=null)},t.attachObserver=function(){var e=t.props,r=e.targetRef,n=e.observerOptions;if(!qn()){r&&r.current&&(t.targetRef.current=r.current);var a=t.getElement();a&&(t.observableElement&&t.observableElement===a||(t.observableElement=a,t.resizeObserver.observe(a,n)))}},t.getElement=function(){var e=t.props,r=e.querySelector,n=e.targetDomEl;if(qn())return null;if(r)return document.querySelector(r);if(n&&Xn(n))return n;if(t.targetRef&&Xn(t.targetRef.current))return t.targetRef.current;var a=T(t);if(!a)return null;switch(t.getRenderType()){case"renderProp":case"childFunction":case"child":case"childArray":return a;default:return a.parentElement}},t.createResizeHandler=function(e){var r=t.props,n=r.handleWidth,a=void 0===n||n,o=r.handleHeight,i=void 0===o||o,s=r.onResize;if(a||i){var l=Gn(s,t.setState.bind(t),a,i);e.forEach((function(e){var r=e&&e.contentRect||{},n=r.width,a=r.height;!t.skipOnMount&&!qn()&&l({width:n,height:a}),t.skipOnMount=!1}))}},t.getRenderType=function(){var e=t.props,r=e.render,n=e.children;return Jn(r)?"renderProp":Jn(n)?"childFunction":s(n)?"child":Array.isArray(n)?"childArray":"parent"};var n=r.skipOnMount,a=r.refreshMode,o=r.refreshRate,i=void 0===o?1e3:o,d=r.refreshOptions;return t.state={width:void 0,height:void 0},t.skipOnMount=n,t.targetRef=l(),t.observableElement=null,qn()||(t.resizeHandler=Kn(t.createResizeHandler,a,i,d),t.resizeObserver=new window.ResizeObserver(t.resizeHandler)),t}(function(e,r){if("function"!=typeof r&&null!==r)throw new TypeError("Class extends value "+String(r)+" is not a constructor or null");function t(){this.constructor=e}on(e,r),e.prototype=null===r?Object.create(r):(t.prototype=r.prototype,new t)})(r,e),r.prototype.componentDidMount=function(){this.attachObserver()},r.prototype.componentDidUpdate=function(){this.attachObserver()},r.prototype.componentWillUnmount=function(){qn()||(this.observableElement=null,this.resizeObserver.disconnect(),this.cancelHandler())},r.prototype.render=function(){var e,r=this.props,t=r.render,a=r.children,o=r.nodeType,i=void 0===o?"div":o,s=this.state,l={width:s.width,height:s.height,targetRef:this.targetRef};switch(this.getRenderType()){case"renderProp":return t&&t(l);case"childFunction":return(e=a)(l);case"child":if((e=a).type&&"string"==typeof e.type){var c=function(e,r){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(n=Object.getOwnPropertySymbols(e);a<n.length;a++)r.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(t[n[a]]=e[n[a]])}return t}(l,["targetRef"]);return d(e,c)}return d(e,l);case"childArray":return(e=a).map((function(e){return!!e&&d(e,l)}));default:return n.createElement(i,null)}}}(c);var Qn,ea=qn()?u:h;!function(e){e.Ready="overlay-context-ready",e.Change="overlay-context-change"}(Qn||(Qn={}));const ra=y.div`
    display: flex;
    flex-direction: column;
`,ta=e=>"right"===e?"bottom-end":"bottom-start",na=({enabled:n,isOpen:a,onOpen:s,onClose:l,onDismiss:d,renderElement:c,renderDropdown:h,customZIndex:b,clickToToggle:g=!1,offset:m=0,alignment:f="left",fitAvailableHeight:y})=>{var p;const v=x(),T=Qt["sm-max"]({theme:v}),j=o(null),_=o(null),{width:R=0}=function(e){void 0===e&&(e={});var r=e.skipOnMount,t=void 0!==r&&r,n=e.refreshMode,a=e.refreshRate,s=void 0===a?1e3:a,l=e.refreshOptions,d=e.handleWidth,c=void 0===d||d,u=e.handleHeight,h=void 0===u||u,b=e.targetRef,g=e.observerOptions,m=e.onResize,f=o(t),y=o(null),p=null!=b?b:y,v=o(),x=i({width:void 0,height:void 0}),w=x[0],D=x[1];return ea((function(){if(!qn()){var e=Gn(m,D,c,h);v.current=Kn((function(r){(c||h)&&r.forEach((function(r){var t=r&&r.contentRect||{},n=t.width,a=t.height;!f.current&&!qn()&&e({width:n,height:a}),f.current=!1}))}),n,s,l);var r=new window.ResizeObserver(v.current);return p.current&&r.observe(p.current,g),function(){r.disconnect();var e=v.current;e&&e.cancel&&e.cancel()}}}),[n,s,l,c,h,m,g,p.current]),sn({ref:p},w)}({targetRef:j,handleHeight:!1}),H={name:"center",fn:({x:e,rects:r})=>{const t=0===e||e+r.floating.width===window.innerWidth,n=window.innerWidth<T;return{x:t&&n?(window.innerWidth-r.floating.width)/2:e}}},{refs:L,floatingStyles:I,context:W}=D({open:a,onOpenChange:(e,r,t)=>{"escape-key"===t?null==d||d():e&&!a?null==s||s():!e&&a&&(null==l||l(t))},whileElementsMounted:$,placement:ta(f),middleware:[F(m),E(),C({limiter:S()}),B({apply({availableHeight:e}){_.current&&Object.assign(_.current.style,{maxHeight:y?`${e}px`:void 0,overflowY:y?"hidden":void 0})}}),H]}),N=(()=>{const[e,r]=i(void 0),t=w();return u((()=>{if(!t)return void r(void 0);const e=e=>{r(e.zIndex)};return t.events.on(Qn.Change,e),t.events.emit(Qn.Ready),()=>t.events.off(Qn.Change,e)}),[t]),e})(),{isMounted:P,styles:V}=A(W,{initial:{opacity:0},open:{opacity:1},duration:300}),Z=M(W,{enabled:n,toggle:g}),U=O(W,{enabled:n}),{getReferenceProps:K,getFloatingProps:J}=z([Z,U]);return e(r,{children:[t("div",Object.assign({ref:e=>{j.current=e,L.setReference(e)}},K(),{children:c()})),P&&t(k,{children:t(Y,{context:W,modal:!1,initialFocus:_,returnFocus:!1,children:t("div",Object.assign({ref:L.setFloating,style:Object.assign(Object.assign({},I),{zIndex:null!==(p=null!=b?b:N)&&void 0!==p?p:50})},J(),{children:t(ra,{ref:_,style:Object.assign({},V),inert:V.opacity<1?"":void 0,children:h({elementWidth:R})})}))})})]})},aa=y.div`
    --vertical-inset: ${Xt["spacing-24"]};
    --horizontal-inset: ${Xt["spacing-20"]};
    --header-bottom-spacing: ${Xt["spacing-4"]};

    border: ${qt["width-010"]} ${qt.solid} ${Ut.border};
    border-radius: ${Gt.sm};
    overflow: hidden;

    width: ${e=>e.$width}px;
    max-width: 41rem;
    min-width: 21rem;

    ${en.MaxWidth.sm} {
        min-width: 17.5rem;
    }
`;var oa={exports:{}};oa.exports=function(){var e=1e3,r=6e4,t=36e5,n="millisecond",a="second",o="minute",i="hour",s="day",l="week",d="month",c="quarter",u="year",h="date",b="Invalid Date",g=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,m=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,f={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(e){var r=["th","st","nd","rd"],t=e%100;return"["+e+(r[(t-20)%10]||r[t]||r[0])+"]"}},y=function(e,r,t){var n=String(e);return!n||n.length>=r?e:""+Array(r+1-n.length).join(t)+e},p={s:y,z:function(e){var r=-e.utcOffset(),t=Math.abs(r),n=Math.floor(t/60),a=t%60;return(r<=0?"+":"-")+y(n,2,"0")+":"+y(a,2,"0")},m:function e(r,t){if(r.date()<t.date())return-e(t,r);var n=12*(t.year()-r.year())+(t.month()-r.month()),a=r.clone().add(n,d),o=t-a<0,i=r.clone().add(n+(o?-1:1),d);return+(-(n+(t-a)/(o?a-i:i-a))||0)},a:function(e){return e<0?Math.ceil(e)||0:Math.floor(e)},p:function(e){return{M:d,y:u,w:l,d:s,D:h,h:i,m:o,s:a,ms:n,Q:c}[e]||String(e||"").toLowerCase().replace(/s$/,"")},u:function(e){return void 0===e}},v="en",x={};x[v]=f;var w="$isDayjsObject",D=function(e){return e instanceof C||!(!e||!e[w])},$=function e(r,t,n){var a;if(!r)return v;if("string"==typeof r){var o=r.toLowerCase();x[o]&&(a=o),t&&(x[o]=t,a=o);var i=r.split("-");if(!a&&i.length>1)return e(i[0])}else{var s=r.name;x[s]=r,a=s}return!n&&a&&(v=a),a||!n&&v},F=function(e,r){if(D(e))return e.clone();var t="object"==typeof r?r:{};return t.date=e,t.args=arguments,new C(t)},E=p;E.l=$,E.i=D,E.w=function(e,r){return F(e,{locale:r.$L,utc:r.$u,x:r.$x,$offset:r.$offset})};var C=function(){function f(e){this.$L=$(e.locale,null,!0),this.parse(e),this.$x=this.$x||e.x||{},this[w]=!0}var y=f.prototype;return y.parse=function(e){this.$d=function(e){var r=e.date,t=e.utc;if(null===r)return new Date(NaN);if(E.u(r))return new Date;if(r instanceof Date)return new Date(r);if("string"==typeof r&&!/Z$/i.test(r)){var n=r.match(g);if(n){var a=n[2]-1||0,o=(n[7]||"0").substring(0,3);return t?new Date(Date.UTC(n[1],a,n[3]||1,n[4]||0,n[5]||0,n[6]||0,o)):new Date(n[1],a,n[3]||1,n[4]||0,n[5]||0,n[6]||0,o)}}return new Date(r)}(e),this.init()},y.init=function(){var e=this.$d;this.$y=e.getFullYear(),this.$M=e.getMonth(),this.$D=e.getDate(),this.$W=e.getDay(),this.$H=e.getHours(),this.$m=e.getMinutes(),this.$s=e.getSeconds(),this.$ms=e.getMilliseconds()},y.$utils=function(){return E},y.isValid=function(){return!(this.$d.toString()===b)},y.isSame=function(e,r){var t=F(e);return this.startOf(r)<=t&&t<=this.endOf(r)},y.isAfter=function(e,r){return F(e)<this.startOf(r)},y.isBefore=function(e,r){return this.endOf(r)<F(e)},y.$g=function(e,r,t){return E.u(e)?this[r]:this.set(t,e)},y.unix=function(){return Math.floor(this.valueOf()/1e3)},y.valueOf=function(){return this.$d.getTime()},y.startOf=function(e,r){var t=this,n=!!E.u(r)||r,c=E.p(e),b=function(e,r){var a=E.w(t.$u?Date.UTC(t.$y,r,e):new Date(t.$y,r,e),t);return n?a:a.endOf(s)},g=function(e,r){return E.w(t.toDate()[e].apply(t.toDate("s"),(n?[0,0,0,0]:[23,59,59,999]).slice(r)),t)},m=this.$W,f=this.$M,y=this.$D,p="set"+(this.$u?"UTC":"");switch(c){case u:return n?b(1,0):b(31,11);case d:return n?b(1,f):b(0,f+1);case l:var v=this.$locale().weekStart||0,x=(m<v?m+7:m)-v;return b(n?y-x:y+(6-x),f);case s:case h:return g(p+"Hours",0);case i:return g(p+"Minutes",1);case o:return g(p+"Seconds",2);case a:return g(p+"Milliseconds",3);default:return this.clone()}},y.endOf=function(e){return this.startOf(e,!1)},y.$set=function(e,r){var t,l=E.p(e),c="set"+(this.$u?"UTC":""),b=(t={},t[s]=c+"Date",t[h]=c+"Date",t[d]=c+"Month",t[u]=c+"FullYear",t[i]=c+"Hours",t[o]=c+"Minutes",t[a]=c+"Seconds",t[n]=c+"Milliseconds",t)[l],g=l===s?this.$D+(r-this.$W):r;if(l===d||l===u){var m=this.clone().set(h,1);m.$d[b](g),m.init(),this.$d=m.set(h,Math.min(this.$D,m.daysInMonth())).$d}else b&&this.$d[b](g);return this.init(),this},y.set=function(e,r){return this.clone().$set(e,r)},y.get=function(e){return this[E.p(e)]()},y.add=function(n,c){var h,b=this;n=Number(n);var g=E.p(c),m=function(e){var r=F(b);return E.w(r.date(r.date()+Math.round(e*n)),b)};if(g===d)return this.set(d,this.$M+n);if(g===u)return this.set(u,this.$y+n);if(g===s)return m(1);if(g===l)return m(7);var f=(h={},h[o]=r,h[i]=t,h[a]=e,h)[g]||1,y=this.$d.getTime()+n*f;return E.w(y,this)},y.subtract=function(e,r){return this.add(-1*e,r)},y.format=function(e){var r=this,t=this.$locale();if(!this.isValid())return t.invalidDate||b;var n=e||"YYYY-MM-DDTHH:mm:ssZ",a=E.z(this),o=this.$H,i=this.$m,s=this.$M,l=t.weekdays,d=t.months,c=t.meridiem,u=function(e,t,a,o){return e&&(e[t]||e(r,n))||a[t].slice(0,o)},h=function(e){return E.s(o%12||12,e,"0")},g=c||function(e,r,t){var n=e<12?"AM":"PM";return t?n.toLowerCase():n};return n.replace(m,(function(e,n){return n||function(e){switch(e){case"YY":return String(r.$y).slice(-2);case"YYYY":return E.s(r.$y,4,"0");case"M":return s+1;case"MM":return E.s(s+1,2,"0");case"MMM":return u(t.monthsShort,s,d,3);case"MMMM":return u(d,s);case"D":return r.$D;case"DD":return E.s(r.$D,2,"0");case"d":return String(r.$W);case"dd":return u(t.weekdaysMin,r.$W,l,2);case"ddd":return u(t.weekdaysShort,r.$W,l,3);case"dddd":return l[r.$W];case"H":return String(o);case"HH":return E.s(o,2,"0");case"h":return h(1);case"hh":return h(2);case"a":return g(o,i,!0);case"A":return g(o,i,!1);case"m":return String(i);case"mm":return E.s(i,2,"0");case"s":return String(r.$s);case"ss":return E.s(r.$s,2,"0");case"SSS":return E.s(r.$ms,3,"0");case"Z":return a}return null}(e)||a.replace(":","")}))},y.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},y.diff=function(n,h,b){var g,m=this,f=E.p(h),y=F(n),p=(y.utcOffset()-this.utcOffset())*r,v=this-y,x=function(){return E.m(m,y)};switch(f){case u:g=x()/12;break;case d:g=x();break;case c:g=x()/3;break;case l:g=(v-p)/6048e5;break;case s:g=(v-p)/864e5;break;case i:g=v/t;break;case o:g=v/r;break;case a:g=v/e;break;default:g=v}return b?g:E.a(g)},y.daysInMonth=function(){return this.endOf(d).$D},y.$locale=function(){return x[this.$L]},y.locale=function(e,r){if(!e)return this.$L;var t=this.clone(),n=$(e,r,!0);return n&&(t.$L=n),t},y.clone=function(){return E.w(this.$d,this)},y.toDate=function(){return new Date(this.valueOf())},y.toJSON=function(){return this.isValid()?this.toISOString():null},y.toISOString=function(){return this.$d.toISOString()},y.toString=function(){return this.$d.toUTCString()},f}(),S=C.prototype;return F.prototype=S,[["$ms",n],["$s",a],["$m",o],["$H",i],["$W",s],["$M",d],["$y",u],["$D",h]].forEach((function(e){S[e[1]]=function(r){return this.$g(r,e[0],e[1])}})),F.extend=function(e,r){return e.$i||(e(r,C,F),e.$i=!0),F},F.locale=$,F.isDayjs=D,F.unix=function(e){return F(1e3*e)},F.en=x[v],F.Ls=x,F.p={},F}();var ia=L(oa.exports),sa={exports:{}};sa.exports=function(){var e={LTS:"h:mm:ss A",LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D, YYYY",LLL:"MMMM D, YYYY h:mm A",LLLL:"dddd, MMMM D, YYYY h:mm A"},r=/(\[[^[]*\])|([-_:/.,()\s]+)|(A|a|YYYY|YY?|MM?M?M?|Do|DD?|hh?|HH?|mm?|ss?|S{1,3}|z|ZZ?)/g,t=/\d\d/,n=/\d\d?/,a=/\d*[^-_:/,()\s\d]+/,o={},i=function(e){return(e=+e)+(e>68?1900:2e3)},s=function(e){return function(r){this[e]=+r}},l=[/[+-]\d\d:?(\d\d)?|Z/,function(e){(this.zone||(this.zone={})).offset=function(e){if(!e)return 0;if("Z"===e)return 0;var r=e.match(/([+-]|\d\d)/g),t=60*r[1]+(+r[2]||0);return 0===t?0:"+"===r[0]?-t:t}(e)}],d=function(e){var r=o[e];return r&&(r.indexOf?r:r.s.concat(r.f))},c=function(e,r){var t,n=o.meridiem;if(n){for(var a=1;a<=24;a+=1)if(e.indexOf(n(a,0,r))>-1){t=a>12;break}}else t=e===(r?"pm":"PM");return t},u={A:[a,function(e){this.afternoon=c(e,!1)}],a:[a,function(e){this.afternoon=c(e,!0)}],S:[/\d/,function(e){this.milliseconds=100*+e}],SS:[t,function(e){this.milliseconds=10*+e}],SSS:[/\d{3}/,function(e){this.milliseconds=+e}],s:[n,s("seconds")],ss:[n,s("seconds")],m:[n,s("minutes")],mm:[n,s("minutes")],H:[n,s("hours")],h:[n,s("hours")],HH:[n,s("hours")],hh:[n,s("hours")],D:[n,s("day")],DD:[t,s("day")],Do:[a,function(e){var r=o.ordinal,t=e.match(/\d+/);if(this.day=t[0],r)for(var n=1;n<=31;n+=1)r(n).replace(/\[|\]/g,"")===e&&(this.day=n)}],M:[n,s("month")],MM:[t,s("month")],MMM:[a,function(e){var r=d("months"),t=(d("monthsShort")||r.map((function(e){return e.slice(0,3)}))).indexOf(e)+1;if(t<1)throw new Error;this.month=t%12||t}],MMMM:[a,function(e){var r=d("months").indexOf(e)+1;if(r<1)throw new Error;this.month=r%12||r}],Y:[/[+-]?\d+/,s("year")],YY:[t,function(e){this.year=i(e)}],YYYY:[/\d{4}/,s("year")],Z:l,ZZ:l};function h(t){var n,a;n=t,a=o&&o.formats;for(var i=(t=n.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g,(function(r,t,n){var o=n&&n.toUpperCase();return t||a[n]||e[n]||a[o].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g,(function(e,r,t){return r||t.slice(1)}))}))).match(r),s=i.length,l=0;l<s;l+=1){var d=i[l],c=u[d],h=c&&c[0],b=c&&c[1];i[l]=b?{regex:h,parser:b}:d.replace(/^\[|\]$/g,"")}return function(e){for(var r={},t=0,n=0;t<s;t+=1){var a=i[t];if("string"==typeof a)n+=a.length;else{var o=a.regex,l=a.parser,d=e.slice(n),c=o.exec(d)[0];l.call(r,c),e=e.replace(c,"")}}return function(e){var r=e.afternoon;if(void 0!==r){var t=e.hours;r?t<12&&(e.hours+=12):12===t&&(e.hours=0),delete e.afternoon}}(r),r}}return function(e,r,t){t.p.customParseFormat=!0,e&&e.parseTwoDigitYear&&(i=e.parseTwoDigitYear);var n=r.prototype,a=n.parse;n.parse=function(e){var r=e.date,n=e.utc,i=e.args;this.$u=n;var s=i[1];if("string"==typeof s){var l=!0===i[2],d=!0===i[3],c=l||d,u=i[2];d&&(u=i[2]),o=this.$locale(),!l&&u&&(o=t.Ls[u]),this.$d=function(e,r,t){try{if(["x","X"].indexOf(r)>-1)return new Date(("X"===r?1e3:1)*e);var n=h(r)(e),a=n.year,o=n.month,i=n.day,s=n.hours,l=n.minutes,d=n.seconds,c=n.milliseconds,u=n.zone,b=new Date,g=i||(a||o?1:b.getDate()),m=a||b.getFullYear(),f=0;a&&!o||(f=o>0?o-1:b.getMonth());var y=s||0,p=l||0,v=d||0,x=c||0;return u?new Date(Date.UTC(m,f,g,y,p,v,x+60*u.offset*1e3)):t?new Date(Date.UTC(m,f,g,y,p,v,x)):new Date(m,f,g,y,p,v,x)}catch(e){return new Date("")}}(r,s,n),this.init(),u&&!0!==u&&(this.$L=this.locale(u).$L),c&&r!=this.format(s)&&(this.$d=new Date("")),o={}}else if(s instanceof Array)for(var b=s.length,g=1;g<=b;g+=1){i[1]=s[g-1];var m=t.apply(this,i);if(m.isValid()){this.$d=m.$d,this.$L=m.$L,this.init();break}g===b&&(this.$d=new Date(""))}else a.call(this,e)}}}();var la=L(sa.exports),da={exports:{}};da.exports=function(e,r,t){r.prototype.isBetween=function(e,r,n,a){var o=t(e),i=t(r),s="("===(a=a||"()")[0],l=")"===a[1];return(s?this.isAfter(o,n):!this.isBefore(o,n))&&(l?this.isBefore(i,n):!this.isAfter(i,n))||(s?this.isBefore(o,n):!this.isAfter(o,n))&&(l?this.isAfter(i,n):!this.isBefore(i,n))}};var ca=L(da.exports),ua={exports:{}};ua.exports=function(e,r){r.prototype.isSameOrAfter=function(e,r){return this.isSame(e,r)||this.isAfter(e,r)}};var ha=L(ua.exports),ba={exports:{}};ba.exports=function(e,r){r.prototype.isSameOrBefore=function(e,r){return this.isSame(e,r)||this.isBefore(e,r)}};var ga,ma,fa,ya=L(ba.exports),pa={exports:{}},va=L(pa.exports=(ga={year:0,month:1,day:2,hour:3,minute:4,second:5},ma={},function(e,r,t){var n,a=function(e,r,t){void 0===t&&(t={});var n=new Date(e),a=function(e,r){void 0===r&&(r={});var t=r.timeZoneName||"short",n=e+"|"+t,a=ma[n];return a||(a=new Intl.DateTimeFormat("en-US",{hour12:!1,timeZone:e,year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit",timeZoneName:t}),ma[n]=a),a}(r,t);return a.formatToParts(n)},o=function(e,r){for(var n=a(e,r),o=[],i=0;i<n.length;i+=1){var s=n[i],l=s.type,d=s.value,c=ga[l];c>=0&&(o[c]=parseInt(d,10))}var u=o[3],h=24===u?0:u,b=o[0]+"-"+o[1]+"-"+o[2]+" "+h+":"+o[4]+":"+o[5]+":000",g=+e;return(t.utc(b).valueOf()-(g-=g%1e3))/6e4},i=r.prototype;i.tz=function(e,r){void 0===e&&(e=n);var a=this.utcOffset(),o=this.toDate(),i=o.toLocaleString("en-US",{timeZone:e}),s=Math.round((o-new Date(i))/1e3/60),l=t(i,{locale:this.$L}).$set("millisecond",this.$ms).utcOffset(15*-Math.round(o.getTimezoneOffset()/15)-s,!0);if(r){var d=l.utcOffset();l=l.add(a-d,"minute")}return l.$x.$timezone=e,l},i.offsetName=function(e){var r=this.$x.$timezone||t.tz.guess(),n=a(this.valueOf(),r,{timeZoneName:e}).find((function(e){return"timezonename"===e.type.toLowerCase()}));return n&&n.value};var s=i.startOf;i.startOf=function(e,r){if(!this.$x||!this.$x.$timezone)return s.call(this,e,r);var n=t(this.format("YYYY-MM-DD HH:mm:ss:SSS"),{locale:this.$L});return s.call(n,e,r).tz(this.$x.$timezone,!0)},t.tz=function(e,r,a){var i=a&&r,s=a||r||n,l=o(+t(),s);if("string"!=typeof e)return t(e).tz(s);var d=function(e,r,t){var n=e-60*r*1e3,a=o(n,t);if(r===a)return[n,r];var i=o(n-=60*(a-r)*1e3,t);return a===i?[n,a]:[e-60*Math.min(a,i)*1e3,Math.max(a,i)]}(t.utc(e,i).valueOf(),l,s),c=d[0],u=d[1],h=t(c).utcOffset(u);return h.$x.$timezone=s,h},t.tz.guess=function(){return Intl.DateTimeFormat().resolvedOptions().timeZone},t.tz.setDefault=function(e){n=e}}));ia.extend(ca),ia.extend(ya),ia.extend(ha),ia.extend(la),ia.extend(va),function(e){e.generateDays=e=>{const r=e.startOf("month"),t=ia(r).startOf("week");return xa(t).map((e=>wa(e)))},e.generateDaysForCurrentWeek=e=>{const r=e.startOf("week");return wa(r)},e.generateMonths=e=>{const r=[];for(let t=0;t<12;t++){const n=e.month(t);r.push(ia(n))}return r},e.generateDecadeOfYears=e=>{const r=e.year(),t=10*Math.floor(r/10),n=e.year(t),a=[n.subtract(1,"year"),n];for(let e=1;e<11;e++)a.push(n.add(e,"year"));return a},e.getStartEndDecade=e=>{const r=10*Math.floor(+e.format("YYYY")/10);return{beginDecade:r,endDecade:+ia(`${r+9}-01-01`).format("YYYY")}},e.convertTo12HourFormat=e=>{const r=ia(e,"HH:mm");return r.isValid()?r.format("h:mm a"):""},e.isWithinRange=(e,r,t,n="day")=>!r&&!t||(r&&t?e.isBetween(r,t,n,"[]"):r?e.isSameOrAfter(r,n):e.isSameOrBefore(t,n)),e.isPreviousMonthWithinRange=(r,t)=>e.isWithinRange(r.subtract(1,"month"),t,void 0,"month"),e.isPreviousYearWithinRange=(r,t)=>e.isWithinRange(r.subtract(1,"year"),t,void 0,"year"),e.isPreviousDecadeWithinRange=(r,t)=>{const{beginDecade:n}=e.getStartEndDecade(r);return e.isWithinRange(r.year(n).subtract(1,"year"),t,void 0,"year")},e.isNextMonthWithinRange=(r,t)=>e.isWithinRange(r.add(1,"month"),void 0,t,"month"),e.isNextYearWithinRange=(r,t)=>e.isWithinRange(r.add(1,"year"),void 0,t,"year"),e.isNextDecadeWithinRange=(r,t)=>{const{endDecade:n}=e.getStartEndDecade(r);return e.isWithinRange(r.year(n).add(1,"year"),void 0,t,"year")},e.getWeekStartEnd=e=>({start:e.startOf("week").format("YYYY-MM-DD"),end:e.endOf("week").format("YYYY-MM-DD")}),e.getFixedRangeStartEnd=(e,r)=>({start:e.format("YYYY-MM-DD"),end:e.add(r-1,"day").format("YYYY-MM-DD")}),e.isDisabledDay=(r,t,n,a)=>{const o=e.isWithinRange(r,n?ia(n):void 0,a?ia(a):void 0),i=t&&t.includes(r.format("YYYY-MM-DD"));return!o||!!i}}(fa||(fa={}));const xa=e=>{const r=[e];for(let t=1;t<6;t++){const n=e.add(t,"week");r.push(n)}return r},wa=e=>{const r=[];for(let t=0;t<7;t++){const n=e.add(t,"day");r.push(n)}return r},Da=[1,3,5,7,8,10,12],$a=[4,6,9,11];var Fa,Ea,Ca,Sa;!function(e){e.clampDay=(r,t,n)=>{const a=parseInt(r),o=parseInt(t),i=parseInt(n);return 0==a?"1":Da.includes(o)?Math.min(a,31).toString():$a.includes(o)?Math.min(a,30).toString():2===o?e.isLeapYear(i)?Math.min(a,29).toString():Math.min(a,28).toString():r},e.clampMonth=e=>{const r=parseInt(e);return 0==r?"1":r>12?"12":e},e.isLeapYear=e=>e%4==0&&e%100!=0||e%400==0,e.getTimeDiffInMinutes=(e,r,t="HH:mm")=>{const n=ia(e,t);return ia(r,t).diff(n,"minute")},e.toDayjs=e=>e?ia(e):ia(),e.addMinutesToTime=(e,r,t="HH:mm")=>ia(e,t).add(r,"minutes").format(t),e.isSame=(e,r,t="day")=>ia(e).isSame(ia(r),t)}(Fa||(Fa={})),function(e){e.isDateDisabled=(e,r)=>{const{disabledDates:t,minDate:n,maxDate:a}=r;return!!(e&&t&&t.length&&t.includes(e))||(!(!n||!ia(e).isBefore(n,"day"))||!(!a||!ia(e).isAfter(a,"day")))},e.sanitizeInput=e=>{if(e){if(ia(e).isValid())return e}return""}}(Ea||(Ea={})),function(e){e.generate=()=>Math.random().toString(36).substring(2,9)}(Ca||(Ca={})),function(e){e.transformWithSpaces=(e,r)=>{const t="(.{"+r+"})";return e.replace(/[^\dA-Z]/gi,"").replace(new RegExp(t,"g"),"$1 ").trim()},e.padValue=(e,r)=>{if("0"===e)return r?e:e.padStart(2,"0");if(""===e)return e;return parseInt(e).toString().padStart(2,"0")},e.shouldTruncateToTwoLines=(e,r)=>{const t=Math.floor(r/9);return e.length>=2*t||1===e.split(" ").length&&e.length>t},e.truncateOneLine=(e,r,t,n,a=8)=>{let o=0;r>t&&(o=Math.floor((r-t)/a));const i=n+o;if(i<e.length){const r=Math.floor(i/2);return e.substring(0,r)+" ... "+e.substring(e.length-r,e.length)}return e},e.truncateTwoLines=(e,r,t,n=1.2)=>{const a=Math.floor(2*r/(.6*t))*(2/n);if(e.length<=a)return e;const o=Math.floor(.6*a),i=Math.floor(.2*a);return`${e.substring(0,o)}...${e.substring(e.length-i)}`},e.getTextWidth=(r,t)=>{if("undefined"==typeof document)return 0;const n=(e.getTextWidth.canvas||(e.getTextWidth.canvas=document.createElement("canvas"))).getContext("2d");n.font=t;return n.measureText(r).width},e.maskValue=(e,t)=>{if(!e)return e;const{maskRange:n,unmaskRange:a,maskChar:o="•",maskRegex:i,maskTransformer:s}=t;if(s)return s(e);if(i)return e.replace(i,o);if(n){const{startIndex:t,endIndex:a}=r(n[0],n[1]);return e.substring(0,t)+o.repeat(e.substring(t,a+1).length)+e.substring(a+1)}if(a){const{startIndex:t,endIndex:n}=r(a[0],a[1]);return o.repeat(e.substring(0,t).length)+e.substring(t,n+1)+o.repeat(e.substring(n+1).length)}return e};const r=(e,r)=>e<r?{startIndex:e,endIndex:r}:{startIndex:r,endIndex:e}}(Sa||(Sa={}));const Ba=e=>{const[r,t]=i(e),n=o(e);return[r,b((e=>{n.current=e,t(e)}),[]),n]},Aa=y.div`
    display: inline-block;
    position: relative;
    width: ${({$size:e})=>e?`${e}px`:"1em"};
    height: ${({$size:e})=>e?`${e}px`:"1em"};
    color: ${e=>e.$color||"currentColor"};
`,Ma=v`
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
    animation: ${Ma} 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
`,za=y(Oa)`
    animation-delay: -0.45s;
`,ka=y(Oa)`
    animation-delay: -0.3s;
`,Ya=y(Oa)`
    animation-delay: -0.15s;
`,Ta=y.button`
    padding: ${Xt["spacing-8"]} ${Xt["spacing-16"]};
    min-width: 4rem;
    border: ${qt["width-010"]} ${qt.solid} transparent;
    border-radius: ${Gt.sm};
    transition: all ${Jt["duration-250"]} ${Jt["ease-default"]};
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;

    // -----------------------------------------------------------------------------
    // BUTTON STYLE + TEXT COLOR
    // -----------------------------------------------------------------------------
    ${e=>{switch(e.$buttonStyle){case"secondary":return p`
                    background-color: ${Ut.Primitive.white};
                    border-color: ${e.$buttonIsDanger?Ut["border-error-strong"]:Ut["border-primary"]};

                    color: ${e.$buttonIsDanger?Ut["text-error"]:Ut["text-primary"]};

                    &:hover,
                    &:active {
                        background-color: ${Ut["bg-hover-neutral"]};
                    }
                `;case"light":return p`
                    background-color: ${Ut.bg};
                    border-color: ${Ut.border};

                    color: ${e.$buttonIsDanger?Ut["text-error"]:Ut["text-primary"]};

                    &:hover,
                    &:active {
                        background-color: ${Ut["bg-hover-neutral"]};
                    }
                `;case"link":return p`
                    background-color: transparent;

                    color: ${e.$buttonIsDanger?Ut["text-error"]:Ut["text-primary"]};
                    &:hover,
                    &:active {
                        background-color: ${Ut["bg-hover-neutral"]};
                    }
                `;case"disabled":return p`
                    background-color: ${Ut["bg-disabled"]};

                    cursor: not-allowed;

                    &:hover {
                        box-shadow: none;
                    }

                    color: ${Ut["text-disabled"]};
                `;default:return p`
                    background-color: ${e.$buttonIsDanger?Ut["bg-error-strong"]:Ut["bg-primary"]};

                    ${en.MaxWidth.md} {
                        width: 100%;
                    }

                    color: ${Ut["text-inverse"]};

                    &:hover,
                    &:active {
                        background-color: ${e.$buttonIsDanger?Ut["bg-error-strong-hover"]:Ut["bg-primary-hover"]};
                    }
                `}}}

    // -----------------------------------------------------------------------------
	// BUTTON SIZE + TEXT SIZE
	// -----------------------------------------------------------------------------
	${e=>{switch(e.$buttonSizeStyle){case"small":return p`
                    height: 2.5rem;
                    ${Kt["body-md-semibold"]}

                    ${en.MaxWidth.xxs} {
                        height: auto;
                    }
                `;case"large":return p`
                    height: 4rem;
                    ${Kt["header-md-semibold"]}

                    ${en.MaxWidth.xxs} {
                        height: auto;
                    }
                `;default:return p`
                    height: 3rem;
                    ${Kt["header-xs-semibold"]}

                    ${en.MaxWidth.xxs} {
                        height: auto;
                    }
                `}}}
`,ja=y((({color:r,className:n,size:a})=>e(Aa,{className:n,$size:a,$color:r,children:[t(Oa,{id:"inner1"}),t(za,{id:"inner2"}),t(ka,{id:"inner3"}),t(Ya,{id:"inner4"})]})))`
    margin-right: 0.5rem;
`,_a=(r,n)=>{const{children:a,disabled:o=!1,loading:i=!1,styleType:s="default",danger:l=!1}=r,d=R(r,["children","disabled","loading","styleType","danger"]),c={$buttonStyle:o?"disabled":s,$buttonSizeStyle:"default",$buttonIsDanger:l};return e(Ta,Object.assign({ref:n,"data-testid":d["data-testid"]||"button",disabled:o},c,d,{children:[i&&t(ja,{}),t("span",{children:a})]}))};_a.displayName="Button.Default";const Ra=(r,n)=>{const{children:a,disabled:o=!1,loading:i=!1,styleType:s="default",danger:l=!1}=r,d=R(r,["children","disabled","loading","styleType","danger"]),c={$buttonStyle:o?"disabled":s,$buttonSizeStyle:"small",$buttonIsDanger:l};return e(Ta,Object.assign({ref:n,"data-testid":d["data-testid"]||"button",disabled:o},c,d,{children:[i&&t(ja,{}),t("span",{children:a})]}))};Ra.displayName="Button.Small";const Ha=(r,n)=>{const{children:a,disabled:o=!1,loading:i=!1,styleType:s="default",danger:l=!1}=r,d=R(r,["children","disabled","loading","styleType","danger"]),c={$buttonStyle:o?"disabled":s,$buttonSizeStyle:"large",$buttonIsDanger:l};return e(Ta,Object.assign({ref:n,"data-testid":d["data-testid"]||"button",disabled:o},c,d,{children:[i&&t(ja,{}),t("span",{children:a})]}))};Ha.displayName="Button.Large";const La={Default:a.forwardRef(_a),Small:a.forwardRef(Ra),Large:a.forwardRef(Ha)},Ia=y.button`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: ${Xt["spacing-24"]};
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
                background-color: ${Ut["bg-hover-neutral"]};
            `}
    }
`,Wa=a.forwardRef(((e,r)=>{var{children:n,focusHighlight:a=!0,focusOutline:o="none",type:i="button"}=e,s=R(e,["children","focusHighlight","focusOutline","type"]);return t(Ia,Object.assign({ref:r,$outline:o,$highlight:a,type:i},s,{children:n}))})),Na=p`
    color: ${Ut.icon};
    height: 1rem;
    width: 1rem;
`,Pa=y(j)`
    ${Na}
`,Va=y(_)`
    ${Na}
`,Za=y(f)`
    ${Na}
    transition: transform 250ms ease-in-out;
    margin-left: 0.5rem;
`,Ua=y.div`
    position: relative;
    width: 100%;
    display: flex;
    flex-direction: column;

    padding-top: var(--vertical-inset);
    padding-bottom: var(--vertical-inset);
`,Ka=y.div`
    display: flex;
    flex: 1;
    position: relative;
`,Ja=y.div`
    isolation: isolate;
    width: 100%;

    padding-left: var(--horizontal-inset);
    padding-right: var(--horizontal-inset);
`,qa=y.div`
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    background: ${Ut.bg};

    padding-left: var(--horizontal-inset);
    padding-right: var(--horizontal-inset);

    ${e=>{if(!e.$visible)return p`
                display: none;
            `}}
`,Xa=y.div`
    display: flex;
    justify-content: space-between;

    padding-left: var(--header-horizontal-inset, var(--horizontal-inset));
    padding-right: var(--header-horizontal-inset, var(--horizontal-inset));
    padding-bottom: var(--header-bottom-spacing);
`,Ga=y.div`
    display: flex;
`,Qa=y.button`
    border: none;
    display: flex;
    align-items: center;
    padding: 0.5rem;
    background: transparent;
    cursor: pointer;

    ${e=>!1===e.$visible?p`
                display: none;
            `:e.$expanded?p`
                ${Za} {
                    transform: rotate(180deg);
                }
            `:void 0};
`,eo=y.span`
    ${Kt["body-md-regular"]}
    color: ${Ut.text};
`,ro=y.div`
    display: flex;
`,to=y(Wa)`
    margin: auto 0;
    padding: 0.75rem;

    :disabled {
        cursor: not-allowed;
    }
`,no=y.div`
    display: flex;
    gap: 0.5rem;
    margin-top: 1.5rem;

    padding-left: var(--horizontal-inset);
    padding-right: var(--horizontal-inset);
`,ao=y(La.Small)`
    flex: 1;
`,oo=y.div`
    width: 100%;
    height: 100%;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(6, 2.5rem);
    align-content: center;
    justify-content: center;

    gap: 0.5rem 0;
`,io=y.div`
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: ${Gt.md};
    margin: 0 0.5rem;
    transition: ${Jt["duration-150"]} ${Jt["ease-default"]};

    // default styles
    ${Kt["body-md-regular"]}
    border-radius: ${Gt.md};
    border: ${qt["width-010"]} ${qt.solid} transparent;
    background-clip: border-box;
    color: ${Ut.text};
    cursor: default;

    // cursor style
    ${e=>e.$interactive?p`
                cursor: pointer;
            `:e.$disabledDisplay?p`
                cursor: not-allowed;
            `:void 0}

    // background, border and text styles
    ${({$variant:e,$interactive:r,$disabledDisplay:t})=>"selected-month"===e?p`
                background: ${Ut["bg-selected"]};
                border-color: ${Ut["border-selected"]};
                color: ${Ut["text-selected"]};
                font-weight: ${Kt.Spec["weight-semibold"]};

                ${r&&p`
                    &:hover {
                        background: ${Ut["bg-selected-hover"]};
                        border-color: ${Ut["border-selected-hover"]};
                        color: ${Ut["text-selected-hover"]};
                    }
                `}
            `:"current-month"===e?p`
                color: ${Ut["text-primary"]};
                font-weight: ${Kt.Spec["weight-semibold"]};
            `:t?p`
                color: ${Ut["text-disabled-subtlest"]};
            `:void 0}

    // hover styles
    ${({$variant:e,$interactive:r})=>{if(r)return"selected-month"===e?p`
                &:hover {
                    background: ${Ut["bg-selected-hover"]};
                    border-color: ${Ut["border-selected-hover"]};
                    color: ${Ut["text-selected-hover"]};
                    font-weight: ${Kt.Spec["weight-semibold"]};
                }
            `:p`
            &:hover {
                background: ${Ut["bg-hover"]};
                color: ${Ut["text-hover"]};
                font-weight: ${Kt.Spec["weight-semibold"]};
            }
        `}}
`,so=({calendarDate:e,currentFocus:r,selectedStartDate:n,selectedEndDate:a,viewCalendarDate:o,isNewSelection:i,minDate:s,maxDate:l,allowDisabledSelection:d,onMonthSelect:c})=>{const u=g((()=>fa.generateMonths(ia(e))),[e]),h=e=>{const t="start"===r&&a&&e.isAfter(a,"month")&&i,o="end"===r&&n&&e.isBefore(n,"month")&&i;return!(!t&&!o)},b=e=>{const r=e.format("MMMM"),t=(n=e,!fa.isWithinRange(n,s?ia(s):void 0,l?ia(l):void 0,"month"));var n;const a=o.isSame(e,"month")?"selected-month":ia().isSame(e,"month")?"current-month":"default";return{disabledDisplay:t||h(e),interactive:!t||d,month:r,variant:a}};return u.length?t(oo,{children:u.map((e=>{const{disabledDisplay:r,interactive:n,variant:a,month:o}=b(e);return t(io,{$variant:a,$disabledDisplay:r,$interactive:n,onClick:()=>((e,r)=>{r||c(e)})(e,!n),children:o},o)}))}):null},lo=y.div`
    width: 100%;
    height: 100%;
    display: grid;
    align-content: center;
    align-items: center;
    grid-template-columns: repeat(3, 1fr);
`,co=y.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 1rem 0.5rem;
    transition: ${Jt["duration-150"]} ${Jt["ease-default"]};
    padding: 0.5rem;

    // default styles
    ${Kt["body-md-regular"]}
    border-radius: ${Gt.md};
    border: ${qt["width-010"]} ${qt.solid} transparent;
    background-clip: border-box;
    color: ${Ut.text};
    cursor: default;

    // cursor style
    ${({$interactive:e,$disabledDisplay:r})=>e?p`
                cursor: pointer;
            `:r?p`
                cursor: not-allowed;
            `:void 0}

    // background, border and text styles
    ${({$variant:e,$interactive:r,$disabledDisplay:t})=>"selected-year"===e?p`
                background: ${Ut["bg-selected"]};
                border-color: ${Ut["border-selected"]};
                color: ${Ut["text-selected"]};
                font-weight: ${Kt.Spec["weight-semibold"]};

                ${r&&p`
                    &:hover {
                        background: ${Ut["bg-selected-hover"]};
                        border-color: ${Ut["border-selected-hover"]};
                        color: ${Ut["text-selected-hover"]};
                    }
                `}
            `:"current-year"===e?p`
                color: ${Ut["text-primary"]};
                font-weight: ${Kt.Spec["weight-semibold"]};
            `:"other-decade"===e||t?p`
                color: ${Ut["text-disabled-subtlest"]};
            `:void 0}

    // hover styles
    ${({$variant:e,$interactive:r})=>{if(r)return"selected-year"===e?p`
                &:hover {
                    background: ${Ut["bg-selected-hover"]};
                    border-color: ${Ut["border-selected-hover"]};
                    color: ${Ut["text-selected-hover"]};
                    font-weight: ${Kt.Spec["weight-semibold"]};
                }
            `:p`
            &:hover {
                background: ${Ut["bg-hover"]};
                color: ${Ut["text-hover"]};
                font-weight: ${Kt.Spec["weight-semibold"]};
            }
        `}}
`,uo=({calendarDate:e,currentFocus:r,selectedStartDate:n,selectedEndDate:a,viewCalendarDate:o,isNewSelection:i,minDate:s,maxDate:l,allowDisabledSelection:d,onYearSelect:c})=>{const u=g((()=>fa.generateDecadeOfYears(ia(e))),[e]),h=e=>{const t="start"===r&&a&&e.isAfter(a,"year")&&i,o="end"===r&&n&&e.isBefore(n,"year")&&i;return!(!t&&!o)},b=e=>{const r=[0,11].includes(u.indexOf(e)),t=e.year(),n=(a=e,!fa.isWithinRange(a,s?ia(s):void 0,l?ia(l):void 0,"year"));var a;const i=r?"other-decade":o.isSame(e,"year")?"selected-year":ia().isSame(e,"year")?"current-year":"default";return{disabledDisplay:n||h(e),interactive:!n||d,year:t,variant:i}};return u.length?t(lo,{children:u.map((e=>{const{disabledDisplay:r,interactive:n,variant:a,year:o}=b(e);return t(co,{$variant:a,$disabledDisplay:r,$interactive:!!n,onClick:()=>((e,r)=>{r||c(e)})(e,!n),children:o},o)}))}):null},ho=a.forwardRef(((n,a)=>{var{children:s,initialCalendarDate:l,minDate:d,maxDate:c,currentFocus:h,selectedStartDate:b,selectedEndDate:g,selectWithinRange:f,dynamicHeight:y=!1,allowDisabledSelection:p,onCalendarDateChange:v,withButton:x,doneButtonDisabled:w,onDismiss:D,showNavigationHeader:$=!0,getLeftArrowDate:F,getRightArrowDate:E,isLeftArrowDisabled:C,isRightArrowDisabled:S,getMonthHeaderLabel:B,getYearHeaderLabel:A}=n,M=R(n,["children","initialCalendarDate","minDate","maxDate","currentFocus","selectedStartDate","selectedEndDate","selectWithinRange","dynamicHeight","allowDisabledSelection","onCalendarDateChange","withButton","doneButtonDisabled","onDismiss","showNavigationHeader","getLeftArrowDate","getRightArrowDate","isLeftArrowDisabled","isRightArrowDisabled","getMonthHeaderLabel","getYearHeaderLabel"]);const[O,z]=i(Fa.toDayjs(l)),[k,Y]=i(Fa.toDayjs(l)),[T,j]=i("default"),_=o(null),H=o(null),L=o(null);m(a,(()=>({defaultView(){j("default")},resetView(){const e=Fa.toDayjs(l);z(e),Y(e),j("default")},setCalendarDate(e){const r=Fa.toDayjs(e);z(r),Y(r)}}))),u((()=>{const e=Fa.toDayjs(l);z(e),Y(e)}),[l]),u((()=>{U(k)}),[k]);const I=()=>{var e;"month-options"!==T?(j("month-options"),null===(e=L.current)||void 0===e||e.focus()):(j("default"),z(k))},W=()=>{"default"!==T?(j("default"),z(k)):j("year-options")},N=()=>{var e;null===(e=L.current)||void 0===e||e.focus();const r=F?F(O):O.subtract(1,"month");switch(T){case"default":Y(r),z(r);break;case"month-options":z((e=>e.subtract(1,"year")));break;case"year-options":z((e=>e.subtract(10,"year")))}},P=()=>{var e;null===(e=L.current)||void 0===e||e.focus();const r=E?E(O):O.add(1,"month");switch(T){case"default":Y(r),z(r);break;case"month-options":z((e=>e.add(1,"year")));break;case"year-options":z((e=>e.add(10,"year")))}},V=e=>{z(e),Y(e),x||j("default")},Z=()=>{const e=Fa.toDayjs(l);z(e),Y(e),"default"===T?K("reset"):j("default")},U=e=>{v&&v(e)},K=e=>{D&&D(e)},J=()=>{if(!d||p)return!1;const e=ia(d);return"month-options"===T?!fa.isPreviousYearWithinRange(O,e):"year-options"===T?!fa.isPreviousDecadeWithinRange(O,e):C?C(O):!fa.isPreviousMonthWithinRange(O,e)},q=()=>{if(!c||p)return!1;const e=ia(c);return"month-options"===T?!fa.isNextYearWithinRange(O,e):"year-options"===T?!fa.isNextDecadeWithinRange(O,e):S?S(O):!fa.isNextMonthWithinRange(O,e)},X=()=>{if("year-options"===T){const{beginDecade:e,endDecade:r}=fa.getStartEndDecade(O);return`${e} to ${r}`}return A?A(O):O.format("YYYY")},G=()=>{const n=B?B(O):O.format("MMM");return e(r,{children:[e(Qa,{type:"button",tabIndex:-1,$expanded:"month-options"===T,$visible:"default"===T,id:"month-dropdown",onClick:I,children:[t(eo,{children:n}),t(Za,{})]}),e(Qa,{type:"button",tabIndex:-1,$expanded:"default"!==T,id:"year-dropdown",onClick:W,children:[t(eo,{children:X()}),t(Za,{})]})]})},Q=()=>{switch(T){case"month-options":return t(so,{calendarDate:O,currentFocus:h,minDate:d,maxDate:c,selectedStartDate:b,selectedEndDate:g,viewCalendarDate:k,isNewSelection:!!f,onMonthSelect:V,allowDisabledSelection:p});case"year-options":return t(uo,{calendarDate:O,currentFocus:h,minDate:d,maxDate:c,selectedStartDate:b,selectedEndDate:g,viewCalendarDate:k,isNewSelection:!!f,onYearSelect:V,allowDisabledSelection:p});default:return null}};return e(Ua,Object.assign({ref:L,"data-id":"calendar-container","data-testid":"calendar-container"},M,{children:[$&&e(Xa,{"data-id":"calendar-header","data-testid":"calendar-header",children:[t(Ga,{children:G()}),e(ro,{children:[t(to,{"aria-label":"Previous month","data-testid":"left-arrow-btn",disabled:J(),focusHighlight:!1,tabIndex:-1,onClick:N,children:t(Pa,{})}),t(to,{"aria-label":"Next month","data-testid":"right-arrow-btn",disabled:q(),focusHighlight:!1,tabIndex:-1,onClick:P,children:t(Va,{})})]})]}),t(Ka,{children:(()=>{const n="function"==typeof s?s({calendarDate:k,currentView:T}):s;return e(r,y?{children:["default"===T&&n,Q()]}:{children:[t(Ja,{children:n}),t(qa,{$visible:"default"!==T,children:Q()})]})})()}),(()=>{if(!x)return;const r=!!("default"===T)&&w;return e(no,{children:[t(ao,{ref:H,"data-testid":"cancel-button",styleType:"light",type:"button",onClick:Z,children:"Cancel"}),t(ao,{"data-testid":"done-button",ref:_,type:"button",onClick:()=>{r||(z(k),"default"===T?K("confirmed"):j("default"))},disabled:r,children:"Done"})]})})()]}))})),bo=y.div`
    width: 100%;
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    row-gap: 0.25rem;
`,go=y.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 2.5rem;
    pointer-events: none;
    user-select: none;

    ${Kt["body-sm-semibold"]};
    color: ${Ut.text};
`,mo=y.div`
    grid-column: 1 / -1;
    display: flex;
`,fo=e=>{let r=Ut.bg,t="transparent";switch(e.$type){case"hover-subtle":r=Ut["bg-hover"],t=Ut["bg-hover"];break;case"hover":r=Ut["bg-hover-strong"],t=Ut["bg-hover-strong"];break;case"hover-outline":r=Ut["bg-hover-subtle"],t=Ut["border-hover"];break;case"selected-outline":r=Ut["bg-selected"],t=Ut["border-selected"];break;case"selected-outline-subtle":r=Ut["bg-selected"],t=Ut["border-selected-subtle"];break;case"selected-hover":r=Ut["bg-selected-hover"];break;case"selected-hover-outline":r=Ut["bg-selected-hover"],t=Ut["border-selected-hover"]}return{color:r,borderColor:t}},yo=y.div`
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    width: 100%;
    height: 2.5rem;
`,po=y.div`
    position: absolute;
    height: 2.5rem;
    width: 50%;
    transition: ${Jt["duration-150"]} ${Jt["ease-default"]};
    border: ${qt["width-010"]} ${qt.solid} transparent;
    border-left: none;
    border-right: none;

    ${e=>{if(!e.$type)return;const{color:r,borderColor:t}=fo(e);return p`
            background-color: ${r};
            background-clip: border-box;
            border-top-color: ${t};
            border-bottom-color: ${t};
        `}}
`,vo=y(po)`
    left: 0;
`,xo=y(po)`
    right: 0;
`,wo=y.div`
    position: absolute;
    z-index: 1;

    display: flex;
    align-items: center;
    justify-content: center;
    height: 2.5rem;
    width: 2.5rem;
    transition: ${Jt["duration-150"]} ${Jt["ease-default"]};

    border: ${qt["width-010"]} ${qt.solid} transparent;
    border-radius: ${Gt.md};

    ${e=>{if(e.$type){const{color:r,borderColor:t}=fo(e);return p`
                background-color: ${r};
                background-clip: content-box;
                border-color: ${t};
            `}}}
`,Do=y(wo)`
    right: calc(50% - 1.25rem);
    clip-path: inset(-3px 1.25rem -3px -3px);
`,$o=y(wo)`
    left: calc(50% - 1.25rem);
    clip-path: inset(-3px -3px -3px 1.25rem);
`,Fo=y.div`
    position: absolute;
    top: 0;
    bottom: 0;
    z-index: 2;

    display: flex;
    align-items: center;
    justify-content: center;
    height: 2.5rem;
    width: 2.5rem;
    ${Kt["body-md-regular"]}
    transition: ${Jt["duration-150"]} ${Jt["ease-default"]};

    cursor: ${e=>e.$interactive?"pointer":null===e.$interactive?"default":"not-allowed"};

    ${e=>{const{$disabled:r,$type:t}=e;if(r)return"hidden"===t?p`
                    visibility: hidden;
                `:p`
                color: ${Ut["text-disabled-subtlest"]};
            `;switch(t){case"selected":return p`
                    font-weight: ${Kt.Spec["weight-semibold"]};
                    color: ${Ut["text-selected"]};
                `;case"selected-hover":return p`
                    font-weight: ${Kt.Spec["weight-semibold"]};
                    color: ${Ut["text-selected-hover"]};
                `;case"current":return p`
                    font-weight: ${Kt.Spec["weight-semibold"]};
                    color: ${Ut["text-primary"]};
                `;case"hover":return p`
                    font-weight: ${Kt.Spec["weight-semibold"]};
                    color: ${Ut["text-hover"]};
                `;case"unavailable":return p`
                    color: ${Ut["text-disabled-subtlest"]};
                `;case"hidden":return p`
                    visibility: hidden;
                `;default:return p`
                    color: ${Ut.text};
                `}}}
`,Eo=y.div`
    position: absolute;
    width: 4px;
    height: 4px;
    background-color: currentColor;
    border-radius: 50%;
    bottom: 4px;
`,Co=({bgLeft:r,bgRight:n,circleLeft:a,circleRight:o,labelType:i,disabled:s,interactive:l,currentDateIndicator:d,date:c,onSelect:u,onHover:h,onHoverEnd:b})=>{const g=ia().isSame(c,"day");return e(yo,{children:[t(vo,{$type:r}),t(Do,{$type:a}),t(xo,{$type:n}),t($o,{$type:o}),e(Fo,{$type:i,$disabled:s,$interactive:l,onClick:()=>{u(c)},onMouseEnter:()=>{h(c)},onMouseLeave:()=>{b&&b(c)},children:[c.date(),d&&g&&t(Eo,{$disabled:s})]})]})},So=({date:e,calendarDate:r,startDate:n,endDate:a,currentFocus:o,hoverDate:i,minDate:s,maxDate:l,disabledDates:d,allowDisabledSelection:c,isNewSelection:u,showActiveMonthDaysOnly:h,onSelect:b,onHover:g})=>{const m=fa.isDisabledDay(e,d,s,l),f=!m||c,y=()=>{const e=ia(i),r=e.isBefore(a,"day"),t=e.isAfter(n,"day");let s,l,d,c;return"start"===o&&a&&r&&(n&&t?(d=i,c=a):(s=i,l=n||a)),"end"===o&&n&&t&&(a&&r?(d=n,c=i):(s=a||n,l=i)),{hoverStart:s,hoverEnd:l,overlapStart:d,overlapEnd:c}},p={date:e,calendarDate:r,disabled:m,interactive:f,currentDateIndicator:!0,onSelect:()=>{b(e,!f)},onHover:()=>{g(e.format("YYYY-MM-DD"),!f)}};return t(Co,Object.assign({},p,(()=>{const t={};if(r.month()!==e.month())t.labelType=h?"hidden":"unavailable";else if(ia().isSame(e,"day")&&!m)t.labelType="current";else if(u){const r="end"===o&&n&&e.isBefore(n),i="start"===o&&a&&e.isAfter(a);(r||i)&&(t.labelType="unavailable")}return t})(),(()=>{const t={},o=e.isSame(n,"day"),i=e.isSame(a,"day");return h&&r.month()!==e.month()?(t.labelType="hidden",t):((n&&o||a&&i)&&(t.labelType="selected",t.circleLeft="selected-outline",t.circleRight="selected-outline"),n&&a&&e.isBetween(n,a,"day","[]")&&(t.labelType="selected",o||(t.bgLeft="selected-outline-subtle"),i||(t.bgRight="selected-outline-subtle")),t)})(),(()=>{if(!i)return{};const r={},t=e.isSame(i,"day"),{hoverStart:o,hoverEnd:s,overlapStart:l,overlapEnd:d}=y();if(t){const t=e.isSame(n,"day"),o=e.isSame(a,"day");t||o?(r.labelType="selected-hover",r.circleLeft="selected-hover-outline",r.circleRight="selected-hover-outline"):(r.labelType="hover",r.circleLeft="hover",r.circleRight="hover")}if(o&&s){if(e.isBetween(o,s,"day","[]")){const t=e.isSame(o,"day"),n=e.isSame(s,"day");t||(r.labelType="hover",r.bgLeft="hover-outline"),n||(r.labelType="hover",r.bgRight="hover-outline")}return r}return l&&d?(e.isBetween(l,d,"day","[]")&&t&&(r.labelType="selected-hover",r.circleLeft="selected-hover",r.circleRight="selected-hover"),r):r})()))};ia.extend(ca);const Bo=({calendarDate:r,currentFocus:n,disabledDates:a,selectedStartDate:o,selectedEndDate:s,onSelect:l,onHover:d,isNewSelection:c,minDate:u,maxDate:h,allowDisabledSelection:b,showActiveMonthDaysOnly:m})=>{const f=g((()=>fa.generateDays(r)),[r]),[y,p]=i(""),v=(e,r)=>{r&&!b||l(e)},x=(e,r)=>{r&&!b||(p(e),d(e))},w=()=>{p(""),d("")};return e(bo,{"data-testid":"calendar-content",children:[f[0].map(((e,r)=>t(go,{children:ia(e).format("ddd")},`week-day-${r}`))),f.map(((e,i)=>t(mo,{onMouseLeave:w,children:e.map(((e,i)=>t(So,{date:e,calendarDate:r,startDate:o,endDate:s,hoverDate:y,currentFocus:n,minDate:u,maxDate:h,disabledDates:a,allowDisabledSelection:b,isNewSelection:c,showActiveMonthDaysOnly:m,onSelect:v,onHover:x},`day-${i}`)))},i)))]})},Ao=({date:e,calendarDate:r,selectedDate:n,hoverDate:a,minDate:o,maxDate:i,disabledDates:s,allowDisabledSelection:l,numberOfDays:d=1,onSelect:c,onHover:u})=>{const h=fa.isDisabledDay(e,s,o,i),b=!h||l,{start:g,end:m}=n?fa.getFixedRangeStartEnd(Fa.toDayjs(n),d):{start:void 0,end:void 0},{start:f,end:y}=a?fa.getFixedRangeStartEnd(Fa.toDayjs(a),d):{start:void 0,end:void 0},p=!!n&&e.isBetween(g,m,"day","[]"),v=!!a&&e.isBetween(f,y,"day","[]"),x=p&&e.isSame(g,"day")||v&&e.isSame(f,"day"),w=p&&e.isSame(m,"day")||v&&e.isSame(y,"day"),D=(e,r,t,n)=>{t?e.circleLeft=r:e.bgLeft=r,n?e.circleRight=r:e.bgRight=r},$={date:e,calendarDate:r,disabled:h,interactive:b,currentDateIndicator:!0,onSelect:()=>{c(e,!b)},onHover:()=>{u(e.format("YYYY-MM-DD"),!b)}};return t(Co,Object.assign({},$,(()=>{const t={};return p||v?t.labelType="selected":r.month()!==e.month()?t.labelType="unavailable":ia().isSame(e,"day")&&!h&&(t.labelType="current"),t})(),(()=>{const r={},t=e.format("YYYY-MM-DD");return v&&D(r,"hover",t===f,t===y),p&&D(r,"selected-outline",t===g,t===m),p&&v&&(D(r,"selected-hover-outline",x,w),t===f&&t!==g&&(r.circleLeft="selected-hover")),r})()))},Mo=({calendarDate:r,disabledDates:n,selectedStartDate:a,onSelect:o,onHover:s,minDate:l,maxDate:d,allowDisabledSelection:c,numberOfDays:u})=>{const h=g((()=>fa.generateDays(r)),[r]),[b,m]=i(""),f=(e,r)=>{r&&!c||(o(e),e&&!ia(e).isSame(e,"month")&&m(""))},y=(e,r)=>{r&&!c||(m(e),s(e))},p=()=>{m(""),s("")};return e(bo,{"data-testid":"calendar-content",children:[h[0].map(((e,r)=>t(go,{children:ia(e).format("ddd")},`week-day-${r}`))),h.map(((e,o)=>t(mo,{onMouseLeave:p,children:e.map(((e,o)=>t(Ao,{date:e,calendarDate:r,selectedDate:a,hoverDate:b,minDate:l,maxDate:d,disabledDates:n,allowDisabledSelection:c,onSelect:f,onHover:y,numberOfDays:u},`day-${o}`)))},o)))]})},Oo=y.div`
    width: 100%;
    background: ${Ut.bg};
`,zo=({date:e,calendarDate:r,selectedDate:n,hoverDate:a,minDate:o,maxDate:i,disabledDates:s,allowDisabledSelection:l,showActiveMonthDaysOnly:d,onSelect:c,onHover:u})=>{const h=fa.isDisabledDay(e,s,o,i),b=!h||l,g={date:e,calendarDate:r,disabled:h,interactive:b,currentDateIndicator:!0,onSelect:()=>{c(e,!b)},onHover:()=>{u(e.format("YYYY-MM-DD"),!b)}};return t(Co,Object.assign({},g,(()=>{const t={};r.month()!==e.month()?t.labelType=d?"hidden":"unavailable":ia().isSame(e,"day")&&!h&&(t.labelType="current");const o=e.isSame(n,"day"),i=e.isSame(a,"day");return o&&i?(t.labelType="selected-hover",t.circleLeft="selected-hover-outline",t.circleRight="selected-hover-outline"):o?(t.labelType="selected",t.circleLeft="selected-outline",t.circleRight="selected-outline"):i&&(t.labelType="hover",t.circleLeft="hover-subtle",t.circleRight="hover-subtle"),t})()))};ia.extend(ca);const ko=({calendarDate:r,disabledDates:n,selectedDate:a,onSelect:o,onHover:s,minDate:l,maxDate:d,allowDisabledSelection:c,showActiveMonthDaysOnly:u})=>{const h=g((()=>fa.generateDays(r)),[r]),[b,m]=i(""),f=(e,r)=>{r&&!c||o(e)},y=(e,r)=>{r&&!c||(m(e),s(e))},p=()=>{m(""),s("")};return e(bo,{"data-testid":"calendar-content",children:[h[0].map(((e,r)=>t(go,{children:ia(e).format("ddd")},`week-day-${r}`))),h.map(((e,o)=>t(mo,{onMouseLeave:p,children:e.map(((e,o)=>t(zo,{date:e,calendarDate:r,selectedDate:a,hoverDate:b,minDate:l,maxDate:d,disabledDates:n,allowDisabledSelection:c,showActiveMonthDaysOnly:u,onSelect:f,onHover:y},`day-${o}`)))},o)))]})},Yo=({date:e,calendarDate:r,selectedDate:n,hoverDate:a,minDate:o,maxDate:i,disabledDates:s,allowDisabledSelection:l,onSelect:d,onHover:c})=>{const u=fa.isDisabledDay(e,s,o,i),h=!u||l,{start:b,end:g}=fa.getWeekStartEnd(Fa.toDayjs(n)),{start:m,end:f}=fa.getWeekStartEnd(Fa.toDayjs(a)),y=n&&e.isBetween(b,g,"day","[]"),p=a&&e.isBetween(m,f,"day","[]"),v=y&&e.isSame(b)||p&&e.isSame(m),x=y&&e.isSame(g)||p&&e.isSame(f),w={date:e,calendarDate:r,disabled:u,interactive:h,currentDateIndicator:!0,onSelect:()=>{d(e,!h)},onHover:()=>{c(e.format("YYYY-MM-DD"),!h)}};return t(Co,Object.assign({},w,(()=>{const t={};return r.month()!==e.month()?t.labelType="unavailable":ia().isSame(e,"day")&&!u&&(t.labelType="current"),t})(),(()=>{const e={};let r,t;return y&&p?(r="selected-hover-outline",t="selected-hover"):y?(r="selected-outline",t="selected"):p&&(r="hover",t="hover"),r&&(e.labelType=t,v?e.circleLeft=r:e.bgLeft=r,x?e.circleRight=r:e.bgRight=r),e})()))},To=({calendarDate:r,disabledDates:n,selectedStartDate:a,onSelect:o,onHover:s,minDate:l,maxDate:d,allowDisabledSelection:c})=>{const u=g((()=>fa.generateDays(r)),[r]),[h,b]=i(""),m=(e,r)=>{if(r&&!c)return;const t=e.startOf("week");o(t),e&&!ia(e).isSame(t,"month")&&b("")},f=(e,r)=>{r&&!c||(b(e),s(e))},y=()=>{b(""),s("")};return e(bo,{"data-testid":"calendar-content",children:[u[0].map(((e,r)=>t(go,{children:ia(e).format("ddd")},`week-day-${r}`))),u.map(((e,o)=>t(mo,{onMouseLeave:y,children:e.map(((e,o)=>t(Yo,{date:e,calendarDate:r,selectedDate:a,hoverDate:h,minDate:l,maxDate:d,disabledDates:n,allowDisabledSelection:c,onSelect:m,onHover:f},`day-${o}`)))},o)))]})},jo=a.forwardRef((({disabledDates:e,onYearMonthDisplayChange:r,onSelect:n,onHover:a,onDismiss:i,value:s,endValue:l,currentFocus:d,withButton:c,variant:u,minDate:h,maxDate:b,allowDisabledSelection:g,selectWithinRange:f=!0,initialCalendarDate:y,numberOfDays:p,showActiveMonthDaysOnly:v=!1},x)=>{const w=o(null),D=o(void 0);m(x,(()=>({reset(){var e;null===(e=w.current)||void 0===e||e.resetView()},setCalendarDate(e){var r;null===(r=w.current)||void 0===r||r.setCalendarDate(e)}})));const $=e=>{var r;const t=e.format("YYYY-MM-DD");null===(r=w.current)||void 0===r||r.setCalendarDate(t),E(t)},F=e=>{C(e)},E=e=>{n&&n(e)},C=e=>{a&&a(e)},S=e=>{if(r){const t={month:e.month()+1,year:e.year()};r(t)}};return t(Oo,{children:t(ho,{ref:w,withButton:c,doneButtonDisabled:(()=>{if(!c)return;let e=!0;switch(u){case"single":e=!1;break;case"range":case"fixed-range":e=!!s!=!!l;break;case"week":e=!s&&!l}return e})(),onDismiss:i,minDate:h,maxDate:b,selectWithinRange:f,currentFocus:d,selectedStartDate:s,selectedEndDate:l,allowDisabledSelection:g,onCalendarDateChange:e=>{D.current&&D.current.isSame(e,"month")||S(e),D.current=e},initialCalendarDate:y,children:({calendarDate:r})=>(r=>{switch(u){case"week":return t(To,{calendarDate:r,disabledDates:e,selectedStartDate:s,minDate:h,maxDate:b,allowDisabledSelection:g,onSelect:$,onHover:F});case"fixed-range":return t(Mo,{calendarDate:r,disabledDates:e,selectedStartDate:s,minDate:h,maxDate:b,allowDisabledSelection:g,onSelect:$,onHover:F,numberOfDays:p});case"single":return t(ko,{calendarDate:r,disabledDates:e,selectedDate:s,minDate:h,maxDate:b,allowDisabledSelection:g,showActiveMonthDaysOnly:v,onSelect:$,onHover:F});default:return t(Bo,{calendarDate:r,currentFocus:d,disabledDates:e,selectedStartDate:s,selectedEndDate:l,minDate:h,maxDate:b,isNewSelection:f,allowDisabledSelection:g,showActiveMonthDaysOnly:v,onSelect:$,onHover:F})}})(r)})})})),_o=a.forwardRef(((e,r)=>{var{width:n}=e,a=R(e,["width"]);return t(aa,{$width:n,"data-testid":"calendar-dropdown",children:t(jo,Object.assign({ref:r},a))})})),Ro=p`
    outline-offset: -1px;
    outline: ${qt["width-020"]} ${qt.solid} ${Ut["border-focus"]};
`,Ho=p`
    outline-color: ${Ut["border-focus"]};
`,Lo=p`
    outline-color: ${Ut["border-disabled"]};
`,Io=p`
    outline-color: ${Ut["border-error-focus"]};
`,Wo=y(y.div`
    border: ${qt["width-010"]} ${qt.solid} ${Ut.border};
    border-radius: ${Gt.sm};
    background: ${Ut.bg};

    :focus-within {
        ${Ro}
    }
    ${e=>e.$focused&&Ro}

    ${e=>e.$readOnly?p`
                border-color: transparent;
                padding: 0;
                background: transparent !important;

                :focus-within {
                    ${Ho}
                }
                ${e.$focused&&Ho}
            `:e.$disabled?p`
                background: ${Ut["bg-disabled"]};
                cursor: not-allowed;

                :focus-within {
                    ${Lo}
                }
                ${e.$focused&&Lo}
            `:e.$error?p`
                border-color: ${Ut["border-error"]};

                :focus-within {
                    ${Io}
                }
                ${e.$focused&&Io}
            `:void 0}
`)`
    display: flex;
    align-items: center;
    position: relative;
    height: max-content;
    width: 100%;
    padding: 0 ${Xt["spacing-16"]};
    flex-direction: ${e=>"right"===e.$position?"row-reverse":"row"};
`,No=y.input`
    ${e=>"small"===e.$variant?Kt["body-md-regular"]:Kt["body-baseline-regular"]}
    color: ${Ut.text};
    display: block;
    background: transparent;
    border: none;
    outline: none;
    box-shadow: none;
    padding: 0;
    margin: 0;

    :disabled {
        color: ${Ut["text-subtler"]};

        :hover {
            cursor: not-allowed;
        }
    }

    ::placeholder,
    ::-webkit-input-placeholder {
        color: ${Ut["text-subtler"]};
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
        outline: ${qt["width-010"]} ${qt.solid}
            ${Ut["border-focus"]};
        border-radius: ${Gt.sm};
    }
`;const Po=y.div`
    display: flex;
    align-items: center;
    position: relative;

    flex: 1;
`,Vo=y.div`
    display: flex;
    align-items: center;

    ${e=>{if(e.$hover)return p`
                ${Zo}, ${qo} {
                    color: ${Ut["text-subtler"]};
                }
            `}}
`,Zo=y(No)`
    background: transparent;
    text-align: center;
`,Uo=y(Zo)`
    width: 2rem;
    margin-right: ${Xt["spacing-4"]};
`,Ko=y(Zo)`
    width: 2.5rem;
`,Jo=y(Zo)`
    width: 3rem;
    margin-left: ${Xt["spacing-4"]};
`,qo=y.span`
    ${Kt["body-baseline-regular"]}
    ${e=>{if(e.$inactive)return p`
                color: ${Ut.text};
            `}}
`,Xo=y.div`
    ${Kt["body-baseline-regular"]}
    background-color: ${Ut.bg};
    color: ${Ut["text-subtler"]};
    position: absolute;
    display: flex;
    align-items: center;
    width: 100%;
    height: 100%;

    ${e=>e.$disabled?p`
                background-color: ${Ut["bg-disabled"]};
                cursor: not-allowed;
            `:e.$hide?p`
                display: none;
            `:void 0}
`;ia.extend(la);const Go=a.forwardRef((({disabled:r,readOnly:n,names:a,value:s,focused:l,hoverValue:d,placeholder:c,label:h,onChange:b,onFocus:g,onBlur:f,hideInputKeyboard:y},p)=>{const v=y?"none":"numeric",[x,w,D]=Ba(""),[$,F,E]=Ba(""),[C,S,B]=Ba(""),[A,M]=i("none"),[O,z]=i(!1),k=o(null),Y=o(null),T=o(null),j=o(null),[_,R,H]=V(d);u((()=>{var e;const[r="",t="",n=""]=V(s);w(r),F(t),S(n),r||t||n||!k.current||!k.current.contains(document.activeElement)||null===(e=Y.current)||void 0===e||e.focus()}),[s]),u((()=>{var e;l||M("none"),l&&(z(!0),k.current&&!k.current.contains(document.activeElement)&&(null===(e=Y.current)||void 0===e||e.focus()))}),[l]),m(p,(()=>({ref:k,resetPlaceholder(){z(!1)},resetInput(){const[e="",r="",t=""]=V(s);w(e),F(r),S(t)}})),[s]);const L=e=>{var r;e.preventDefault(),null===(r=Y.current)||void 0===r||r.focus()},I=e=>{e.target.select();const r=e.target.name;M(r)},W=e=>{const[r,t,n]=a,o={[r]:D.current,[t]:E.current,[n]:B.current},i=e.target.name,s=o[i],l=i!==n?Sa.padValue(s,!0):s;switch(i){case r:o[r]=l,w(l);break;case t:o[t]=l,F(l)}const d=`${o[n]}-${o[t]}-${o[r]}`,c=ia(d,"YYYY-MM-DD",!0).isValid(),u=!o[r]&&!o[t]&&!o[n];c&&s!==l&&b(d),k.current&&!k.current.contains(e.relatedTarget)&&(M("none"),null==f||f(u||c))},N=e=>{var r,t;if(d)return;const n=e.target.name,o=e.target.value.replace(/[^0-9]/g,""),i={day:x,month:$,year:C};switch(n){case a[0]:i.day=o,w(o),2===o.length&&(null===(r=T.current)||void 0===r||r.focus());break;case a[1]:i.month=o,F(o),2===o.length&&(null===(t=j.current)||void 0===t||t.focus());break;case a[2]:i.year=o,S(o)}if(!i.day&&!i.month&&!i.year)return void b("");const s=`${i.year}-${i.month}-${i.day}`;ia(s,"YYYY-MM-DD",!0).isValid()&&b(s)},P=e=>{var r,t;"Backspace"!==e.code&&"Backspace"!==e.key||(A===a[1]&&0===$.length&&(null===(r=Y.current)||void 0===r||r.focus()),A===a[2]&&0===C.length&&(null===(t=T.current)||void 0===t||t.focus()))};function V(e){if(e){const r=ia(new Date(e));return r.isValid()?[Sa.padValue(r.date().toString()),Sa.padValue((r.month()+1).toString()),r.year().toString()]:[void 0,void 0,void 0]}return[void 0,void 0,void 0]}return e(Po,{role:"group","aria-label":h,onClick:()=>{var e;r||n||(z(!0),k.current&&!k.current.contains(document.activeElement)&&(null===(e=Y.current)||void 0===e||e.focus()))},onFocus:e=>{r||(z(!0),l||null==g||g(e))},children:[e(Vo,{ref:k,$hover:!!d,children:[t(Uo,{ref:Y,name:a[0],maxLength:2,value:null!=_?_:x,onFocus:I,onBlur:W,onChange:N,type:"text",inputMode:v,pattern:"[0-9]{2}","data-testid":`${a[0]}-input`,"aria-label":"day",disabled:r,readOnly:n,tabIndex:n?-1:0,autoComplete:"off",placeholder:A!==a[0]||n?"DD":""}),t(qo,{$inactive:0===x.length,children:"/"}),t(Ko,{ref:T,name:a[1],maxLength:2,value:null!=R?R:$,onFocus:I,onBlur:W,onChange:N,onKeyDown:P,type:"text",inputMode:v,pattern:"[0-9]{2}","data-testid":`${a[1]}-input`,"aria-label":"month",disabled:r,readOnly:n,tabIndex:n?-1:0,autoComplete:"off",placeholder:A!==a[1]||n?"MM":""}),t(qo,{$inactive:0===$.length,children:"/"}),t(Jo,{ref:j,name:a[2],maxLength:4,value:null!=H?H:C,onFocus:I,onBlur:W,onChange:N,onKeyDown:P,type:"text",inputMode:v,pattern:"[0-9]{4}","data-testid":`${a[2]}-input`,"aria-label":"year",disabled:r,readOnly:n,tabIndex:n?-1:0,autoComplete:"off",placeholder:A!==a[2]||n?"YYYY":""})]}),(()=>{if(!s&&!n&&c)return t(Xo,{$hide:O,$disabled:r,onMouseDown:L,children:c})})()]})})),Qo=y(Wo)`
    height: 3rem;
`,ei=e=>{var{minDate:r,maxDate:n,disabled:a,disabledDates:s,error:l,hideInputKeyboard:d,value:c,onChange:h,onFocus:b,onBlur:g,onYearMonthDisplayChange:m,withButton:f=!0,readOnly:y,id:p,allowDisabledSelection:v,zIndex:x}=e,w=R(e,["minDate","maxDate","disabled","disabledDates","error","hideInputKeyboard","value","onChange","onFocus","onBlur","onYearMonthDisplayChange","withButton","readOnly","id","allowDisabledSelection","zIndex"]);const[D,$]=i(Ea.sanitizeInput(c)),[F,E]=i(Ea.sanitizeInput(c)),[C,S]=i(void 0),[B,A]=i(!1),[M,O]=i(!1),z=o(null),k=o(null);u((()=>{const e=Ea.sanitizeInput(c);$(e),E(e)}),[c]);const Y=e=>{!v&&Ea.isDateDisabled(e,{disabledDates:s,minDate:r,maxDate:n})||(E(e),f||(I(e),$(e),e&&A(!1)))},T=e=>{var r;E(e),f||(I(e),$(e),e&&(null===(r=z.current)||void 0===r||r.focus(),A(!1)),C&&S(void 0))},j=()=>{y||a||(A(!0),M||(O(!0),b&&b()))},_=e=>{var r;M&&!B&&z.current&&!z.current.contains(e.relatedTarget)&&(null===(r=k.current)||void 0===r||r.resetInput(),E(D),O(!1),W())},H=e=>{S(e)},L=e=>{var r;switch(e){case"reset":E(D);break;case"confirmed":$(F),I(F)}null===(r=z.current)||void 0===r||r.focus(),A(!1)},I=e=>{h&&h(e)},W=()=>{g&&g()};return t(na,{enabled:!y&&!a,isOpen:B,renderElement:()=>t(Qo,Object.assign({tabIndex:-1,ref:z,onBlur:_,onFocus:j,$disabled:a,$readOnly:y,$focused:M,$error:l,id:p,"data-testid":w["data-testid"]},w,{children:t(Go,{ref:k,disabled:a,onChange:Y,readOnly:y,focused:B,names:["start-day","start-month","start-year"],value:F,hoverValue:C,hideInputKeyboard:d})})),renderDropdown:({elementWidth:e})=>t(_o,{variant:"single",initialCalendarDate:F,withButton:f,value:F,disabledDates:s,minDate:r,maxDate:n,allowDisabledSelection:v,onHover:H,onSelect:T,onDismiss:L,onYearMonthDisplayChange:m,width:e}),onClose:()=>{var e;null===(e=k.current)||void 0===e||e.resetInput(),E(D),A(!1),O(!1),W()},onDismiss:()=>{var e,r;null===(e=k.current)||void 0===e||e.resetInput(),null===(r=z.current)||void 0===r||r.focus(),E(D),A(!1)},customZIndex:x,offset:16})};export{ei as DateInput};
//# sourceMappingURL=index.js.map
