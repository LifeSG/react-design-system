import{jsxs as e,Fragment as r,jsx as t}from"react/jsx-runtime";import*as n from"react";import a,{useRef as i,useState as o,isValidElement as s,createRef as l,cloneElement as d,PureComponent as c,useEffect as u,useLayoutEffect as g,useCallback as h,useMemo as b,useImperativeHandle as m}from"react";import{ChevronDownIcon as f}from"@lifesg/react-icons/chevron-down";import y,{css as p,keyframes as v,useTheme as x}from"styled-components";import{useFloatingTree as D,useFloating as w,autoUpdate as F,offset as $,flip as E,shift as C,limitShift as B,size as S,useTransitionStyles as A,useClick as M,useDismiss as k,useInteractions as z,FloatingPortal as O,FloatingFocusManager as Y}from"@floating-ui/react";import{findDOMNode as T}from"react-dom";import{ChevronLeftIcon as j}from"@lifesg/react-icons/chevron-left";import{ChevronRightIcon as _}from"@lifesg/react-icons/chevron-right";function R(e,r){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(n=Object.getOwnPropertySymbols(e);a<n.length;a++)r.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(t[n[a]]=e[n[a]])}return t}"function"==typeof SuppressedError&&SuppressedError;var I="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};function L(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var H=Array.isArray,W="object"==typeof I&&I&&I.Object===Object&&I,N="object"==typeof self&&self&&self.Object===Object&&self,P=W||N||Function("return this")(),V=P.Symbol,U=V,Z=Object.prototype,K=Z.hasOwnProperty,J=Z.toString,q=U?U.toStringTag:void 0;var X=function(e){var r=K.call(e,q),t=e[q];try{e[q]=void 0;var n=!0}catch(e){}var a=J.call(e);return n&&(r?e[q]=t:delete e[q]),a},G=Object.prototype.toString;var Q=X,ee=function(e){return G.call(e)},re=V?V.toStringTag:void 0;var te=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":re&&re in Object(e)?Q(e):ee(e)};var ne=te,ae=function(e){return null!=e&&"object"==typeof e};var ie=function(e){return"symbol"==typeof e||ae(e)&&"[object Symbol]"==ne(e)},oe=H,se=ie,le=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,de=/^\w*$/;var ce=function(e,r){if(oe(e))return!1;var t=typeof e;return!("number"!=t&&"symbol"!=t&&"boolean"!=t&&null!=e&&!se(e))||(de.test(e)||!le.test(e)||null!=r&&e in Object(r))};var ue=function(e){var r=typeof e;return null!=e&&("object"==r||"function"==r)},ge=te,he=ue;var be,me=function(e){if(!he(e))return!1;var r=ge(e);return"[object Function]"==r||"[object GeneratorFunction]"==r||"[object AsyncFunction]"==r||"[object Proxy]"==r},fe=P["__core-js_shared__"],ye=(be=/[^.]+$/.exec(fe&&fe.keys&&fe.keys.IE_PROTO||""))?"Symbol(src)_1."+be:"";var pe=function(e){return!!ye&&ye in e},ve=Function.prototype.toString;var xe=me,De=pe,we=ue,Fe=function(e){if(null!=e){try{return ve.call(e)}catch(e){}try{return e+""}catch(e){}}return""},$e=/^\[object .+?Constructor\]$/,Ee=Function.prototype,Ce=Object.prototype,Be=Ee.toString,Se=Ce.hasOwnProperty,Ae=RegExp("^"+Be.call(Se).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");var Me=function(e,r){return null==e?void 0:e[r]},ke=function(e){return!(!we(e)||De(e))&&(xe(e)?Ae:$e).test(Fe(e))},ze=Me;var Oe=function(e,r){var t=ze(e,r);return ke(t)?t:void 0},Ye=Oe(Object,"create"),Te=Ye;var je=function(){this.__data__=Te?Te(null):{},this.size=0};var _e=function(e){var r=this.has(e)&&delete this.__data__[e];return this.size-=r?1:0,r},Re=Ye,Ie=Object.prototype.hasOwnProperty;var Le=function(e){var r=this.__data__;if(Re){var t=r[e];return"__lodash_hash_undefined__"===t?void 0:t}return Ie.call(r,e)?r[e]:void 0},He=Ye,We=Object.prototype.hasOwnProperty;var Ne=function(e){var r=this.__data__;return He?void 0!==r[e]:We.call(r,e)},Pe=Ye;var Ve=function(e,r){var t=this.__data__;return this.size+=this.has(e)?0:1,t[e]=Pe&&void 0===r?"__lodash_hash_undefined__":r,this},Ue=je,Ze=_e,Ke=Le,Je=Ne,qe=Ve;function Xe(e){var r=-1,t=null==e?0:e.length;for(this.clear();++r<t;){var n=e[r];this.set(n[0],n[1])}}Xe.prototype.clear=Ue,Xe.prototype.delete=Ze,Xe.prototype.get=Ke,Xe.prototype.has=Je,Xe.prototype.set=qe;var Ge=Xe;var Qe=function(){this.__data__=[],this.size=0};var er=function(e,r){return e===r||e!=e&&r!=r};var rr=function(e,r){for(var t=e.length;t--;)if(er(e[t][0],r))return t;return-1},tr=rr,nr=Array.prototype.splice;var ar=function(e){var r=this.__data__,t=tr(r,e);return!(t<0)&&(t==r.length-1?r.pop():nr.call(r,t,1),--this.size,!0)},ir=rr;var or=function(e){var r=this.__data__,t=ir(r,e);return t<0?void 0:r[t][1]},sr=rr;var lr=function(e){return sr(this.__data__,e)>-1},dr=rr;var cr=function(e,r){var t=this.__data__,n=dr(t,e);return n<0?(++this.size,t.push([e,r])):t[n][1]=r,this},ur=Qe,gr=ar,hr=or,br=lr,mr=cr;function fr(e){var r=-1,t=null==e?0:e.length;for(this.clear();++r<t;){var n=e[r];this.set(n[0],n[1])}}fr.prototype.clear=ur,fr.prototype.delete=gr,fr.prototype.get=hr,fr.prototype.has=br,fr.prototype.set=mr;var yr=fr,pr=Oe(P,"Map"),vr=Ge,xr=yr,Dr=pr;var wr=function(e){var r=typeof e;return"string"==r||"number"==r||"symbol"==r||"boolean"==r?"__proto__"!==e:null===e};var Fr=function(e,r){var t=e.__data__;return wr(r)?t["string"==typeof r?"string":"hash"]:t.map},$r=Fr;var Er=function(e){var r=$r(this,e).delete(e);return this.size-=r?1:0,r},Cr=Fr;var Br=function(e){return Cr(this,e).get(e)},Sr=Fr;var Ar=function(e){return Sr(this,e).has(e)},Mr=Fr;var kr=function(e,r){var t=Mr(this,e),n=t.size;return t.set(e,r),this.size+=t.size==n?0:1,this},zr=function(){this.size=0,this.__data__={hash:new vr,map:new(Dr||xr),string:new vr}},Or=Er,Yr=Br,Tr=Ar,jr=kr;function _r(e){var r=-1,t=null==e?0:e.length;for(this.clear();++r<t;){var n=e[r];this.set(n[0],n[1])}}_r.prototype.clear=zr,_r.prototype.delete=Or,_r.prototype.get=Yr,_r.prototype.has=Tr,_r.prototype.set=jr;var Rr=_r;function Ir(e,r){if("function"!=typeof e||null!=r&&"function"!=typeof r)throw new TypeError("Expected a function");var t=function(){var n=arguments,a=r?r.apply(this,n):n[0],i=t.cache;if(i.has(a))return i.get(a);var o=e.apply(this,n);return t.cache=i.set(a,o)||i,o};return t.cache=new(Ir.Cache||Rr),t}Ir.Cache=Rr;var Lr=Ir;var Hr=function(e){var r=Lr(e,(function(e){return 500===t.size&&t.clear(),e})),t=r.cache;return r},Wr=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,Nr=/\\(\\)?/g,Pr=Hr((function(e){var r=[];return 46===e.charCodeAt(0)&&r.push(""),e.replace(Wr,(function(e,t,n,a){r.push(n?a.replace(Nr,"$1"):t||e)})),r}));var Vr=function(e,r){for(var t=-1,n=null==e?0:e.length,a=Array(n);++t<n;)a[t]=r(e[t],t,e);return a},Ur=H,Zr=ie,Kr=V?V.prototype:void 0,Jr=Kr?Kr.toString:void 0;var qr=function e(r){if("string"==typeof r)return r;if(Ur(r))return Vr(r,e)+"";if(Zr(r))return Jr?Jr.call(r):"";var t=r+"";return"0"==t&&1/r==-1/0?"-0":t},Xr=qr;var Gr=H,Qr=ce,et=Pr,rt=function(e){return null==e?"":Xr(e)};var tt=ie;var nt=function(e,r){return Gr(e)?e:Qr(e,r)?[e]:et(rt(e))},at=function(e){if("string"==typeof e||tt(e))return e;var r=e+"";return"0"==r&&1/e==-1/0?"-0":r};var it=function(e,r){for(var t=0,n=(r=nt(r,e)).length;null!=e&&t<n;)e=e[at(r[t++])];return t&&t==n?e:void 0};var ot=L((function(e,r,t){var n=null==e?void 0:it(e,r);return void 0===n?t:n}));const st=(e,r,t)=>ot(t,r)||ot(e,r),lt=(e,r)=>{const t=r||e.defaultValue;return ot(e.collections,t)},dt={collections:{default:{"width-005":.5,"width-010":1,"width-020":2,"width-040":4,solid:"solid"}},defaultValue:"default"},ct=e=>r=>{var t;const n=r.theme,a=lt(dt,null==n?void 0:n.borderScheme);return(null===(t=null==n?void 0:n.overrides)||void 0===t?void 0:t.border)?`${st(a,e,n.overrides.border)}px`:`${a[e]}px`},ut={"width-005":ct("width-005"),"width-010":ct("width-010"),"width-020":ct("width-020"),"width-040":ct("width-040"),solid:(gt="solid",e=>{var r;const t=e.theme,n=lt(dt,null==t?void 0:t.borderScheme),a=(null===(r=null==t?void 0:t.overrides)||void 0===r?void 0:r.border)?st(n,gt,t.overrides.border):n[gt];return"function"==typeof a?a(e):a})};var gt;const ht={collections:{lifesg:{"brand-10":"#2C0C0B","brand-20":"#4C1513","brand-30":"#6C1D1B","brand-40":"#922825","brand-50":"#BF3431","brand-60":"#F15D5A","brand-70":"#F69491","brand-80":"#FABAB7","brand-90":"#FCD7D2","brand-95":"#FFEBE7","brand-100":"#FFF6F4","primary-10":"#001731","primary-20":"#002752","primary-30":"#003874","primary-40":"#004D9F","primary-50":"#1768BE","primary-60":"#3C91EC","primary-70":"#6CB4FF","primary-80":"#A5CDFF","primary-90":"#CFE1FE","primary-95":"#E8F0FE","primary-100":"#F7F9FF","secondary-10":"#131529","secondary-20":"#222547","secondary-30":"#2F3565","secondary-40":"#42498B","secondary-50":"#5B62A7","secondary-60":"#858CBD","secondary-70":"#A8ADCF","secondary-80":"#C6C9E0","secondary-90":"#DDDFEC","secondary-95":"#EDEEF5","secondary-100":"#F8F8FB","neutral-10":"#161616","neutral-20":"#282828","neutral-30":"#393939","neutral-40":"#4E4E4E","neutral-50":"#686868","neutral-60":"#8E8E8E","neutral-70":"#AFAFB0","neutral-80":"#C7CACA","neutral-90":"#DDE1E2","neutral-95":"#EDEFEF","neutral-100":"#F9F9F9","success-10":"#081A0F","success-20":"#0E2D1B","success-30":"#154126","success-40":"#1C5A34","success-50":"#257645","success-60":"#44A068","success-70":"#64C189","success-80":"#80DCA5","success-90":"#B4ECCB","success-95":"#D5F6E2","success-100":"#EFFCF4","warning-10":"#221302","warning-20":"#3B2204","warning-30":"#543106","warning-40":"#744408","warning-50":"#98590C","warning-60":"#D07A13","warning-70":"#E4A244","warning-80":"#F5C26C","warning-90":"#FADBA6","warning-95":"#FCECD4","warning-100":"#FDF7F0","error-10":"#330505","error-20":"#550808","error-30":"#750C0C","error-40":"#9E130F","error-50":"#CB2213","error-60":"#DE6C6C","error-70":"#E89B9B","error-80":"#EFBEBE","error-90":"#F5D9D9","error-95":"#F9ECEC","error-100":"#FCF7F7","info-10":"#021824","info-20":"#032B3F","info-30":"#053D59","info-40":"#065478","info-50":"#176E9B","info-60":"#5296BE","info-70":"#82B5DA","info-80":"#ACCFE7","info-90":"#CCE3F1","info-95":"#E3F1F8","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000","primary-inverse":"#FEAB10"},bookingsg:{"brand-10":"#2C0C0B","brand-20":"#4C1513","brand-30":"#6C1D1B","brand-40":"#922825","brand-50":"#BF3431","brand-60":"#F15D5A","brand-70":"#F69491","brand-80":"#FABAB7","brand-90":"#FCD7D2","brand-95":"#FFEBE7","brand-100":"#FFF6F4","primary-10":"#1A122C","primary-20":"#2F1F4D","primary-30":"#422D6E","primary-40":"#5B3D97","primary-50":"#7654BC","primary-60":"#9A82CD","primary-70":"#B7A7D8","primary-80":"#CFC5E5","primary-90":"#E3DDF0","primary-95":"#F0EDF7","primary-100":"#F9F8FC","secondary-10":"#0E1723","secondary-20":"#18293D","secondary-30":"#233A57","secondary-40":"#305078","secondary-50":"#4B6A8F","secondary-60":"#7B91A9","secondary-70":"#A1B1C3","secondary-80":"#C1CBD7","secondary-90":"#DBE1E8","secondary-95":"#EBEFF2","secondary-100":"#F7F8FA","neutral-10":"#161616","neutral-20":"#282828","neutral-30":"#393939","neutral-40":"#4E4E4E","neutral-50":"#686868","neutral-60":"#8E8E8E","neutral-70":"#AFAFB0","neutral-80":"#C7CACA","neutral-90":"#DDE1E2","neutral-95":"#EDEFEF","neutral-100":"#F9F9F9","success-10":"#081A0F","success-20":"#0E2D1B","success-30":"#154126","success-40":"#1C5A34","success-50":"#257645","success-60":"#44A068","success-70":"#64C189","success-80":"#80DCA5","success-90":"#B4ECCB","success-95":"#D5F6E2","success-100":"#EFFCF4","warning-10":"#221302","warning-20":"#3B2204","warning-30":"#543106","warning-40":"#744408","warning-50":"#98590C","warning-60":"#D07A13","warning-70":"#E4A244","warning-80":"#F5C26C","warning-90":"#FADBA6","warning-95":"#FCECD4","warning-100":"#FDF7F0","error-10":"#330505","error-20":"#550808","error-30":"#750C0C","error-40":"#9E130F","error-50":"#CB2213","error-60":"#DE6C6C","error-70":"#E89B9B","error-80":"#EFBEBE","error-90":"#F5D9D9","error-95":"#F9ECEC","error-100":"#FCF7F7","info-10":"#021824","info-20":"#032B3F","info-30":"#053D59","info-40":"#065478","info-50":"#176E9B","info-60":"#5296BE","info-70":"#82B5DA","info-80":"#ACCFE7","info-90":"#CCE3F1","info-95":"#E3F1F8","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000","primary-inverse":"#FEAB10"},rbs:{"brand-10":"#0E123A","brand-20":"#191E65","brand-30":"#232B90","brand-40":"#303BC5","brand-50":"#494CFF","brand-60":"#AD6EFF","brand-70":"#AEA4FF","brand-80":"#C5C4FF","brand-90":"#DDDCFF","brand-95":"#EDECFF","brand-100":"#F8F8FF","primary-10":"#10152B","primary-20":"#1C254B","primary-30":"#28356C","primary-40":"#38489A","primary-50":"#4D5AD7","primary-60":"#7487F2","primary-70":"#9AAAFC","primary-80":"#BDC7FD","primary-90":"#DADFFB","primary-95":"#ECEEFE","primary-100":"#F7F8FF","secondary-10":"#19151D","secondary-20":"#2B2533","secondary-30":"#3E3649","secondary-40":"#564A64","secondary-50":"#6F637D","secondary-60":"#948B9F","secondary-70":"#B3ACBB","secondary-80":"#CCC8D2","secondary-90":"#E1DEE4","secondary-95":"#EFEEF1","secondary-100":"#F9F8F9","neutral-10":"#161616","neutral-20":"#282828","neutral-30":"#393939","neutral-40":"#4E4E4E","neutral-50":"#686868","neutral-60":"#8E8E8E","neutral-70":"#AFAFB0","neutral-80":"#C7CACA","neutral-90":"#DDE1E2","neutral-95":"#EDEFEF","neutral-100":"#F9F9F9","success-10":"#081A0F","success-20":"#0E2D1B","success-30":"#154126","success-40":"#1C5A34","success-50":"#257645","success-60":"#44A068","success-70":"#64C189","success-80":"#80DCA5","success-90":"#B4ECCB","success-95":"#D5F6E2","success-100":"#EFFCF4","warning-10":"#221302","warning-20":"#3B2204","warning-30":"#543106","warning-40":"#744408","warning-50":"#98590C","warning-60":"#D07A13","warning-70":"#E4A244","warning-80":"#F5C26C","warning-90":"#FADBA6","warning-95":"#FCECD4","warning-100":"#FDF7F0","error-10":"#330505","error-20":"#550808","error-30":"#750C0C","error-40":"#9E130F","error-50":"#CB2213","error-60":"#DE6C6C","error-70":"#E89B9B","error-80":"#EFBEBE","error-90":"#F5D9D9","error-95":"#F9ECEC","error-100":"#FCF7F7","info-10":"#021824","info-20":"#032B3F","info-30":"#053D59","info-40":"#065478","info-50":"#176E9B","info-60":"#5296BE","info-70":"#82B5DA","info-80":"#ACCFE7","info-90":"#CCE3F1","info-95":"#E3F1F8","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000","primary-inverse":"#FEAB10"},mylegacy:{"brand-10":"#2C0C0B","brand-20":"#4C1513","brand-30":"#6C1D1B","brand-40":"#922825","brand-50":"#BF3431","brand-60":"#F15D5A","brand-70":"#F69491","brand-80":"#FABAB7","brand-90":"#FCD7D2","brand-95":"#FFEBE7","brand-100":"#FFF6F4","primary-10":"#0011924","primary-20":"#032B40","primary-30":"#043D5A","primary-40":"#05547B","primary-50":"#096EA1","primary-60":"#2098D3","primary-70":"#5CB9E8","primary-80":"#8BD3F6","primary-90":"#BEE6FA","primary-95":"#E2F2FA","primary-100":"#F4FAFC","secondary-10":"#131529","secondary-20":"#222547","secondary-30":"#2F3565","secondary-40":"#42498B","secondary-50":"#5B62A7","secondary-60":"#858CBD","secondary-70":"#A8ADCF","secondary-80":"#C6C9E0","secondary-90":"#DDDFEC","secondary-95":"#EDEEF5","secondary-100":"#F8F8FB","neutral-10":"#161616","neutral-20":"#282828","neutral-30":"#393939","neutral-40":"#4E4E4E","neutral-50":"#686868","neutral-60":"#8E8E8E","neutral-70":"#AFAFB0","neutral-80":"#C7CACA","neutral-90":"#DDE1E2","neutral-95":"#EDEFEF","neutral-100":"#F9F9F9","success-10":"#081A0F","success-20":"#0E2D1B","success-30":"#154126","success-40":"#1C5A34","success-50":"#257645","success-60":"#44A068","success-70":"#64C189","success-80":"#80DCA5","success-90":"#B4ECCB","success-95":"#D5F6E2","success-100":"#EFFCF4","warning-10":"#221302","warning-20":"#3B2204","warning-30":"#543106","warning-40":"#744408","warning-50":"#98590C","warning-60":"#D07A13","warning-70":"#E4A244","warning-80":"#F5C26C","warning-90":"#FADBA6","warning-95":"#FCECD4","warning-100":"#FDF7F0","error-10":"#330505","error-20":"#550808","error-30":"#750C0C","error-40":"#9E130F","error-50":"#CB2213","error-60":"#DE6C6C","error-70":"#E89B9B","error-80":"#EFBEBE","error-90":"#F5D9D9","error-95":"#F9ECEC","error-100":"#FCF7F7","info-10":"#021824","info-20":"#032B3F","info-30":"#053D59","info-40":"#065478","info-50":"#176E9B","info-60":"#5296BE","info-70":"#82B5DA","info-80":"#ACCFE7","info-90":"#CCE3F1","info-95":"#E3F1F8","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000","primary-inverse":"#FEAB10"},ccube:{"brand-10":"#1F1221","brand-20":"#371F3B","brand-30":"#4E2C53","brand-40":"#6B3E73","brand-50":"#8D5197","brand-60":"#FF3399","brand-70":"#FF88C4","brand-80":"#FFB3D9","brand-90":"#FFD4E9","brand-95":"#FFE8F3","brand-100":"#FFD6EB","primary-10":"#1F1221","primary-20":"#371F3B","primary-30":"#4E2C53","primary-40":"#6B3E73","primary-50":"#8D5197","primary-60":"#B07DB7","primary-70":"#C7A3CC","primary-80":"#D9C2DD","primary-90":"#E9DBEB","primary-95":"#F3ECF4","primary-100":"#FAF7FA","secondary-10":"#2D091B","secondary-20":"#4D0F2E","secondary-30":"#6B1540","secondary-40":"#931D58","secondary-50":"#C02673","secondary-60":"#FF409F","secondary-70":"#FF88C4","secondary-80":"#FFB3D9","secondary-90":"#FFD4E9","secondary-95":"#FFE8F3","secondary-100":"#FFF8FC","neutral-10":"#161616","neutral-20":"#282828","neutral-30":"#393939","neutral-40":"#4E4E4E","neutral-50":"#686868","neutral-60":"#8E8E8E","neutral-70":"#AFAFB0","neutral-80":"#C7CACA","neutral-90":"#DDE1E2","neutral-95":"#EDEFEF","neutral-100":"#F9F9F9","success-10":"#081A0F","success-20":"#0E2D1B","success-30":"#154126","success-40":"#1C5A34","success-50":"#257645","success-60":"#44A068","success-70":"#64C189","success-80":"#80DCA5","success-90":"#B4ECCB","success-95":"#D5F6E2","success-100":"#EFFCF4","warning-10":"#221302","warning-20":"#3B2204","warning-30":"#543106","warning-40":"#744408","warning-50":"#98590C","warning-60":"#D07A13","warning-70":"#E4A244","warning-80":"#F5C26C","warning-90":"#FADBA6","warning-95":"#FCECD4","warning-100":"#FDF7F0","error-10":"#330505","error-20":"#550808","error-30":"#750C0C","error-40":"#9E130F","error-50":"#CB2213","error-60":"#DE6C6C","error-70":"#E89B9B","error-80":"#EFBEBE","error-90":"#F5D9D9","error-95":"#F9ECEC","error-100":"#FCF7F7","info-10":"#021824","info-20":"#032B3F","info-30":"#053D59","info-40":"#065478","info-50":"#176E9B","info-60":"#5296BE","info-70":"#82B5DA","info-80":"#ACCFE7","info-90":"#CCE3F1","info-95":"#E3F1F8","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000","primary-inverse":"#FEAB10"},oneservice:{"brand-10":"#001A19","brand-20":"#002D2B","brand-30":"#00413D","brand-40":"#005954","brand-50":"#00756F","brand-60":"#03A098","brand-70":"#55BFBA","brand-80":"#92D6D2","brand-90":"#BFE7E5","brand-95":"#DDF2F1","brand-100":"#F4FBFA","primary-10":"#09191D","primary-20":"#102B34","primary-30":"#173D49","primary-40":"#205666","primary-50":"#2A7086","primary-60":"#2A7086","primary-70":"#8CB6C2","primary-80":"#B2CED6","primary-90":"#D1E2E7","primary-95":"#E8F0F3","primary-100":"#F9F8FC","secondary-10":"#001731","secondary-20":"#002752","secondary-30":"#003874","secondary-40":"#004D9F","secondary-50":"#5B62A7","secondary-60":"#858CBD","secondary-70":"#A8ADCF","secondary-80":"#C6C9E0","secondary-90":"#DDDFEC","secondary-95":"#EDEEF5","secondary-100":"#F8F8FB","neutral-10":"#161616","neutral-20":"#282828","neutral-30":"#393939","neutral-40":"#4E4E4E","neutral-50":"#686868","neutral-60":"#8E8E8E","neutral-70":"#AFAFB0","neutral-80":"#C7CACA","neutral-90":"#DDE1E2","neutral-95":"#EDEFEF","neutral-100":"#F9F9F9","success-10":"#081A0F","success-20":"#0E2D1B","success-30":"#154126","success-40":"#1C5A34","success-50":"#257645","success-60":"#44A068","success-70":"#64C189","success-80":"#80DCA5","success-90":"#B4ECCB","success-95":"#D5F6E2","success-100":"#EFFCF4","warning-10":"#221302","warning-20":"#3B2204","warning-30":"#543106","warning-40":"#744408","warning-50":"#98590C","warning-60":"#D07A13","warning-70":"#E4A244","warning-80":"#F5C26C","warning-90":"#FADBA6","warning-95":"#FCECD4","warning-100":"#FDF7F0","error-10":"#330505","error-20":"#550808","error-30":"#750C0C","error-40":"#9E130F","error-50":"#CB2213","error-60":"#DE6C6C","error-70":"#E89B9B","error-80":"#EFBEBE","error-90":"#F5D9D9","error-95":"#F9ECEC","error-100":"#FCF7F7","info-10":"#021824","info-20":"#032B3F","info-30":"#053D59","info-40":"#065478","info-50":"#176E9B","info-60":"#5296BE","info-70":"#82B5DA","info-80":"#ACCFE7","info-90":"#CCE3F1","info-95":"#E3F1F8","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000","primary-inverse":"#FEAB10"},pa:{"brand-10":"#881317","brand-20":"#B5191E","brand-30":"#B5040A","brand-40":"#D0333F","brand-50":"#DC666F","brand-60":"#E28087","brand-70":"#E7999F","brand-80":"#EDB3B7","brand-90":"#F3CCCF","brand-95":"#F9E6E7","brand-100":"#FCF2F3","primary-10":"#000000","primary-20":"#191919","primary-30":"#333333","primary-40":"#4D4D4D","primary-50":"#666666","primary-60":"#808080","primary-70":"#999999","primary-80":"#B3B3B3","primary-90":"#E6E6E6","primary-95":"#F7F7F7","primary-100":"#FFFFFF","secondary-10":"#19151D","secondary-20":"#2B2533","secondary-30":"#3E3649","secondary-40":"#564A64","secondary-50":"#6F637D","secondary-60":"#948B9F","secondary-70":"#B3ACBB","secondary-80":"#CCC8D2","secondary-90":"#E1DEE4","secondary-95":"#EFEEF1","secondary-100":"#F9F8F9","neutral-10":"#000000","neutral-20":"#191919","neutral-30":"#333333","neutral-40":"#4D4D4D","neutral-50":"#666666","neutral-60":"#808080","neutral-70":"#999999","neutral-80":"#B3B3B3","neutral-90":"#E6E6E6","neutral-95":"#F7F7F7","neutral-100":"#FFFFFF","success-10":"#081A0F","success-20":"#0E2D1B","success-30":"#154126","success-40":"#1C5A34","success-50":"#257645","success-60":"#44A068","success-70":"#64C189","success-80":"#80DCA5","success-90":"#B4ECCB","success-95":"#D5F6E2","success-100":"#EFFCF4","warning-10":"#221302","warning-20":"#3B2204","warning-30":"#543106","warning-40":"#744408","warning-50":"#98590C","warning-60":"#D07A13","warning-70":"#E4A244","warning-80":"#F5C26C","warning-90":"#FADBA6","warning-95":"#FCECD4","warning-100":"#FDF7F0","error-10":"#330505","error-20":"#550808","error-30":"#750C0C","error-40":"#9E130F","error-50":"#CB2213","error-60":"#DE6C6C","error-70":"#E89B9B","error-80":"#EFBEBE","error-90":"#F5D9D9","error-95":"#F9ECEC","error-100":"#FCF7F7","info-10":"#021824","info-20":"#032B3F","info-30":"#053D59","info-40":"#065478","info-50":"#176E9B","info-60":"#5296BE","info-70":"#82B5DA","info-80":"#ACCFE7","info-90":"#CCE3F1","info-95":"#E3F1F8","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000","primary-inverse":"#FEAB10"},a11yplayground:{"brand-10":"#170F39","brand-20":"#281C62","brand-30":"#38268B","brand-40":"#4D34BF","brand-50":"#5735DF","brand-60":"#9986F9","brand-70":"#B2A5F8","brand-80":"#CDC2FA","brand-90":"#E2DCFC","brand-95":"#EFEDFE","brand-100":"#FAF8FD","primary-10":"#170F39","primary-20":"#281C62","primary-30":"#38268B","primary-40":"#4D34BF","primary-50":"#5735DF","primary-60":"#9986F9","primary-70":"#B2A5F8","primary-80":"#CDC2FA","primary-90":"#E2DCFC","primary-95":"#EFEDFE","primary-100":"#FAF8FD","secondary-10":"#251204","secondary-20":"#401F08","secondary-30":"#5B2C0B","secondary-40":"#7E3D0F","secondary-50":"#B04900","secondary-60":"#E26E1C","secondary-70":"#FF9445","secondary-80":"#FFBB8E","secondary-90":"#FFD9BF","secondary-95":"#FFECDF","secondary-100":"#FFF8F3","neutral-10":"#161616","neutral-20":"#282828","neutral-30":"#393939","neutral-40":"#4E4E4E","neutral-50":"#686868","neutral-60":"#8E8E8E","neutral-70":"#AFAFB0","neutral-80":"#C7CACA","neutral-90":"#DDE1E2","neutral-95":"#EDEFEF","neutral-100":"#F9F9F9","success-10":"#031B15","success-20":"#082D24","success-30":"#094134","success-40":"#0D5947","success-50":"#10755E","success-60":"#16A181","success-70":"#1EC59D","success-80":"#6FDDC2","success-90":"#AFECDE","success-95":"#D5F5ED","success-100":"#F1FCF9","warning-10":"#1F1500","warning-20":"#362500","warning-30":"#4D3501","warning-40":"#6A4801","warning-50":"#8B6001","warning-60":"#BF8301","warning-70":"#EAA102","warning-80":"#FFBF34","warning-90":"#FFDC8F","warning-95":"#FFEDC7","warning-100":"#FFF8EA","error-10":"#270F10","error-20":"#441B1B","error-30":"#612627","error-40":"#853535","error-50":"#AF4546","error-60":"#EC6162","error-70":"#F29696","error-80":"#F7BBBC","error-90":"#FAD8D8","error-95":"#FCEAEA","error-100":"#FEF7F7","info-10":"#0F1627","info-20":"#1B2745","info-30":"#273763","info-40":"#354D88","info-50":"#4665B3","info-60":"#618AF6","info-70":"#8DADFF","info-80":"#B4C9FF","info-90":"#D3DFFF","info-95":"#E9EFFF","info-100":"#F5F8FF",white:"#FFFFFF",black:"#000000","primary-inverse":"#FEAB10"}},defaultValue:"lifesg"},bt=e=>r=>{var t;const n=r.theme,a=lt(ht,null==n?void 0:n.colourScheme);return(null===(t=null==n?void 0:n.overrides)||void 0===t?void 0:t.primitiveColour)?st(a,e,n.overrides.primitiveColour):a[e]},mt={"brand-10":bt("brand-10"),"brand-20":bt("brand-20"),"brand-30":bt("brand-30"),"brand-40":bt("brand-40"),"brand-50":bt("brand-50"),"brand-60":bt("brand-60"),"brand-70":bt("brand-70"),"brand-80":bt("brand-80"),"brand-90":bt("brand-90"),"brand-95":bt("brand-95"),"brand-100":bt("brand-100"),"primary-10":bt("primary-10"),"primary-20":bt("primary-20"),"primary-30":bt("primary-30"),"primary-40":bt("primary-40"),"primary-50":bt("primary-50"),"primary-60":bt("primary-60"),"primary-70":bt("primary-70"),"primary-80":bt("primary-80"),"primary-90":bt("primary-90"),"primary-95":bt("primary-95"),"primary-100":bt("primary-100"),"secondary-10":bt("secondary-10"),"secondary-20":bt("secondary-20"),"secondary-30":bt("secondary-30"),"secondary-40":bt("secondary-40"),"secondary-50":bt("secondary-50"),"secondary-60":bt("secondary-60"),"secondary-70":bt("secondary-70"),"secondary-80":bt("secondary-80"),"secondary-90":bt("secondary-90"),"secondary-95":bt("secondary-95"),"secondary-100":bt("secondary-100"),"neutral-10":bt("neutral-10"),"neutral-20":bt("neutral-20"),"neutral-30":bt("neutral-30"),"neutral-40":bt("neutral-40"),"neutral-50":bt("neutral-50"),"neutral-60":bt("neutral-60"),"neutral-70":bt("neutral-70"),"neutral-80":bt("neutral-80"),"neutral-90":bt("neutral-90"),"neutral-95":bt("neutral-95"),"neutral-100":bt("neutral-100"),"success-10":bt("success-10"),"success-20":bt("success-20"),"success-30":bt("success-30"),"success-40":bt("success-40"),"success-50":bt("success-50"),"success-60":bt("success-60"),"success-70":bt("success-70"),"success-80":bt("success-80"),"success-90":bt("success-90"),"success-95":bt("success-95"),"success-100":bt("success-100"),"warning-10":bt("warning-10"),"warning-20":bt("warning-20"),"warning-30":bt("warning-30"),"warning-40":bt("warning-40"),"warning-50":bt("warning-50"),"warning-60":bt("warning-60"),"warning-70":bt("warning-70"),"warning-80":bt("warning-80"),"warning-90":bt("warning-90"),"warning-95":bt("warning-95"),"warning-100":bt("warning-100"),"error-10":bt("error-10"),"error-20":bt("error-20"),"error-30":bt("error-30"),"error-40":bt("error-40"),"error-50":bt("error-50"),"error-60":bt("error-60"),"error-70":bt("error-70"),"error-80":bt("error-80"),"error-90":bt("error-90"),"error-95":bt("error-95"),"error-100":bt("error-100"),"info-10":bt("info-10"),"info-20":bt("info-20"),"info-30":bt("info-30"),"info-40":bt("info-40"),"info-50":bt("info-50"),"info-60":bt("info-60"),"info-70":bt("info-70"),"info-80":bt("info-80"),"info-90":bt("info-90"),"info-95":bt("info-95"),"info-100":bt("info-100"),white:bt("white"),black:bt("black"),"primary-inverse":bt("primary-inverse")},ft={text:bt("neutral-20"),"text-subtle":bt("neutral-30"),"text-subtler":bt("neutral-50"),"text-subtlest":bt("neutral-60"),"text-primary":bt("primary-50"),"text-hover":bt("primary-40"),"text-selected":bt("primary-50"),"text-selected-hover":bt("primary-40"),"text-disabled":bt("neutral-50"),"text-disabled-subtle":bt("neutral-60"),"text-disabled-subtlest":bt("neutral-80"),"text-selected-disabled":bt("neutral-20"),"text-success":bt("success-40"),"text-warning":bt("warning-40"),"text-error":bt("error-40"),"text-info":bt("info-40"),"text-inverse":bt("white"),icon:bt("neutral-50"),"icon-subtle":bt("neutral-60"),"icon-strongest":bt("neutral-20"),"icon-primary":bt("primary-50"),"icon-primary-subtle":bt("primary-60"),"icon-primary-subtlest":bt("primary-70"),"icon-hover":bt("primary-40"),"icon-selected":bt("primary-50"),"icon-selected-hover":bt("primary-40"),"icon-disabled":bt("neutral-50"),"icon-disabled-subtle":bt("neutral-60"),"icon-selected-disabled":bt("neutral-60"),"icon-success":bt("success-50"),"icon-warning":bt("warning-60"),"icon-error":bt("error-50"),"icon-error-strong":bt("error-40"),"icon-info":bt("info-50"),"icon-inverse":bt("white"),"icon-primary-inverse":bt("primary-inverse"),border:bt("neutral-90"),"border-strong":bt("neutral-70"),"border-stronger":bt("neutral-50"),"border-primary":bt("primary-50"),"border-primary-subtle":bt("primary-60"),"border-hover":bt("primary-90"),"border-hover-strong":bt("primary-60"),"border-selected":bt("primary-50"),"border-selected-subtle":bt("primary-70"),"border-selected-subtlest":bt("primary-90"),"border-selected-hover":bt("primary-40"),"border-focus":bt("primary-60"),"border-focus-strong":bt("primary-50"),"border-disabled":bt("neutral-90"),"border-selected-disabled":bt("neutral-70"),"border-success":bt("success-60"),"border-warning":bt("warning-60"),"border-error":bt("error-60"),"border-error-focus":bt("error-60"),"border-error-focus-strong":bt("error-40"),"border-error-strong":bt("error-40"),"border-info":bt("info-60"),bg:bt("white"),"bg-strong":bt("neutral-100"),"bg-stronger":bt("neutral-95"),"bg-strongest":bt("neutral-90"),"bg-hover":bt("primary-95"),"bg-hover-strong":bt("primary-90"),"bg-hover-subtle":bt("primary-100"),"bg-hover-neutral":bt("neutral-100"),"bg-hover-neutral-strong":bt("neutral-90"),"bg-selected":bt("primary-95"),"bg-selected-hover":bt("primary-90"),"bg-selected-strong":bt("primary-90"),"bg-selected-stronger":bt("primary-70"),"bg-selected-strongest":bt("primary-50"),"bg-selected-strongest-hover":bt("primary-40"),"bg-disabled":bt("neutral-95"),"bg-selected-disabled":bt("neutral-95"),"bg-selected-stronger-disabled":bt("neutral-70"),"bg-success":bt("success-100"),"bg-success-hover":bt("success-95"),"bg-success-strong":bt("success-50"),"bg-success-strong-hover":bt("success-40"),"bg-warning":bt("warning-100"),"bg-warning-hover":bt("warning-95"),"bg-warning-strong":bt("warning-50"),"bg-warning-strong-hover":bt("warning-40"),"bg-info":bt("info-100"),"bg-info-hover":bt("info-95"),"bg-info-strong":bt("info-50"),"bg-info-strong-hover":bt("info-40"),"bg-error":bt("error-100"),"bg-error-hover":bt("error-95"),"bg-error-strong":bt("error-50"),"bg-error-strong-hover":bt("error-40"),"bg-inverse":bt("neutral-20"),"bg-inverse-subtle":bt("neutral-30"),"bg-inverse-subtler":bt("neutral-50"),"bg-inverse-subtlest":bt("neutral-60"),"bg-inverse-hover":bt("neutral-40"),"bg-primary":bt("primary-50"),"bg-primary-subtle":bt("primary-60"),"bg-primary-subtler":bt("primary-95"),"bg-primary-subtlest":bt("primary-100"),"bg-available":"#6DD0A1","bg-primary-hover":bt("primary-40"),"bg-primary-subtlest-hover":bt("primary-90"),"bg-primary-subtlest-selected":bt("primary-90"),"overlay-strong":"rgba(40, 40, 40, 0.85)","overlay-subtle":"rgba(40, 40, 40, 0.20)",hyperlink:bt("primary-50"),"hyperlink-hover":bt("primary-40"),"hyperlink-visited":bt("primary-40"),"hyperlink-inverse":bt("primary-inverse"),"focus-ring":bt("black"),"focus-ring-inverse":bt("white")},yt={collections:{lifesg:ft,bookingsg:ft,rbs:ft,mylegacy:ft,ccube:ft,oneservice:ft,pa:{text:bt("neutral-30"),"text-subtle":bt("neutral-40"),"text-subtler":bt("neutral-50"),"text-subtlest":bt("neutral-70"),"text-primary":bt("neutral-10"),"text-hover":bt("neutral-70"),"text-selected":bt("neutral-20"),"text-selected-hover":bt("neutral-10"),"text-disabled":bt("neutral-50"),"text-disabled-subtle":bt("neutral-60"),"text-disabled-subtlest":bt("neutral-80"),"text-selected-disabled":bt("neutral-40"),"text-success":bt("success-40"),"text-warning":bt("warning-40"),"text-error":bt("brand-30"),"text-info":bt("neutral-40"),"text-inverse":bt("neutral-100"),icon:bt("neutral-40"),"icon-subtle":bt("neutral-50"),"icon-strongest":bt("neutral-10"),"icon-primary":bt("neutral-10"),"icon-primary-subtle":bt("neutral-30"),"icon-primary-subtlest":bt("neutral-60"),"icon-hover":bt("neutral-70"),"icon-selected":bt("brand-20"),"icon-selected-hover":bt("brand-10"),"icon-disabled":bt("neutral-50"),"icon-disabled-subtle":bt("neutral-60"),"icon-selected-disabled":bt("neutral-40"),"icon-success":bt("success-40"),"icon-warning":bt("warning-60"),"icon-error":bt("brand-30"),"icon-error-strong":bt("brand-10"),"icon-info":bt("neutral-40"),"icon-inverse":bt("neutral-100"),"icon-primary-inverse":"#F9B371",border:bt("neutral-90"),"border-strong":bt("neutral-30"),"border-stronger":bt("neutral-20"),"border-primary":bt("neutral-40"),"border-primary-subtle":bt("neutral-60"),"border-hover":bt("neutral-80"),"border-hover-strong":bt("neutral-10"),"border-selected":bt("brand-20"),"border-selected-subtle":bt("neutral-40"),"border-selected-subtlest":bt("neutral-70"),"border-selected-hover":bt("neutral-10"),"border-focus":bt("neutral-20"),"border-focus-strong":bt("neutral-10"),"border-disabled":bt("neutral-90"),"border-selected-disabled":bt("neutral-80"),"border-success":bt("success-40"),"border-warning":bt("warning-60"),"border-error":bt("brand-30"),"border-error-focus":bt("brand-20"),"border-error-focus-strong":bt("brand-10"),"border-error-strong":bt("brand-20"),"border-info":bt("neutral-40"),bg:bt("neutral-100"),"bg-strong":bt("neutral-95"),"bg-stronger":bt("neutral-90"),"bg-strongest":bt("neutral-80"),"bg-hover":bt("brand-90"),"bg-hover-strong":bt("brand-80"),"bg-hover-subtle":bt("neutral-90"),"bg-hover-neutral":bt("neutral-90"),"bg-hover-neutral-strong":bt("neutral-90"),"bg-selected":bt("brand-100"),"bg-selected-hover":bt("brand-30"),"bg-selected-strong":bt("brand-50"),"bg-selected-stronger":bt("brand-40"),"bg-selected-strongest":bt("brand-20"),"bg-selected-strongest-hover":bt("brand-10"),"bg-disabled":bt("neutral-90"),"bg-selected-disabled":bt("neutral-90"),"bg-selected-stronger-disabled":bt("neutral-80"),"bg-success":bt("success-100"),"bg-success-hover":bt("success-95"),"bg-success-strong":bt("success-50"),"bg-success-strong-hover":bt("success-40"),"bg-warning":bt("warning-100"),"bg-warning-hover":bt("warning-95"),"bg-warning-strong":bt("warning-50"),"bg-warning-strong-hover":bt("warning-40"),"bg-info":bt("neutral-95"),"bg-info-hover":bt("info-95"),"bg-info-strong":bt("info-50"),"bg-info-strong-hover":bt("info-40"),"bg-error":bt("brand-100"),"bg-error-hover":bt("error-95"),"bg-error-strong":bt("error-50"),"bg-error-strong-hover":bt("error-40"),"bg-inverse":bt("neutral-40"),"bg-inverse-subtle":bt("neutral-60"),"bg-inverse-subtler":bt("neutral-70"),"bg-inverse-subtlest":bt("neutral-80"),"bg-inverse-hover":bt("neutral-30"),"bg-primary":bt("brand-20"),"bg-primary-subtle":bt("brand-60"),"bg-primary-subtler":bt("brand-80"),"bg-primary-subtlest":bt("brand-100"),"bg-available":bt("success-60"),"bg-primary-hover":bt("brand-10"),"bg-primary-subtlest-hover":bt("brand-80"),"bg-primary-subtlest-selected":bt("brand-40"),"overlay-strong":"rgba(25, 25, 25, 0.95)","overlay-subtle":"rgba(25, 25, 25, 0.20)",hyperlink:bt("neutral-10"),"hyperlink-hover":bt("neutral-40"),"hyperlink-visited":bt("neutral-50"),"hyperlink-inverse":"#F8AE68","focus-ring":bt("black"),"focus-ring-inverse":bt("white")},a11yplayground:ft},defaultValue:"lifesg"},pt=e=>r=>{var t;const n=r.theme,a=lt(yt,null==n?void 0:n.colourScheme),i=(null===(t=null==n?void 0:n.overrides)||void 0===t?void 0:t.semanticColour)?st(a,e,n.overrides.semanticColour):a[e];return"function"==typeof i?i(r):i},vt={text:pt("text"),"text-subtle":pt("text-subtle"),"text-subtler":pt("text-subtler"),"text-subtlest":pt("text-subtlest"),"text-primary":pt("text-primary"),"text-hover":pt("text-hover"),"text-selected":pt("text-selected"),"text-selected-hover":pt("text-selected-hover"),"text-disabled":pt("text-disabled"),"text-disabled-subtle":pt("text-disabled-subtle"),"text-disabled-subtlest":pt("text-disabled-subtlest"),"text-selected-disabled":pt("text-selected-disabled"),"text-success":pt("text-success"),"text-warning":pt("text-warning"),"text-error":pt("text-error"),"text-info":pt("text-info"),"text-inverse":pt("text-inverse"),icon:pt("icon"),"icon-subtle":pt("icon-subtle"),"icon-strongest":pt("icon-strongest"),"icon-primary":pt("icon-primary"),"icon-primary-subtle":pt("icon-primary-subtle"),"icon-primary-subtlest":pt("icon-primary-subtlest"),"icon-hover":pt("icon-hover"),"icon-selected":pt("icon-selected"),"icon-selected-hover":pt("icon-selected-hover"),"icon-disabled":pt("icon-disabled"),"icon-disabled-subtle":pt("icon-disabled-subtle"),"icon-selected-disabled":pt("icon-selected-disabled"),"icon-success":pt("icon-success"),"icon-warning":pt("icon-warning"),"icon-error":pt("icon-error"),"icon-error-strong":pt("icon-error-strong"),"icon-info":pt("icon-info"),"icon-inverse":pt("icon-inverse"),"icon-primary-inverse":pt("icon-primary-inverse"),border:pt("border"),"border-strong":pt("border-strong"),"border-stronger":pt("border-stronger"),"border-primary":pt("border-primary"),"border-primary-subtle":pt("border-primary-subtle"),"border-hover":pt("border-hover"),"border-hover-strong":pt("border-hover-strong"),"border-selected":pt("border-selected"),"border-selected-subtle":pt("border-selected-subtle"),"border-selected-subtlest":pt("border-selected-subtlest"),"border-selected-hover":pt("border-selected-hover"),"border-focus":pt("border-focus"),"border-focus-strong":pt("border-focus-strong"),"border-disabled":pt("border-disabled"),"border-selected-disabled":pt("border-selected-disabled"),"border-success":pt("border-success"),"border-warning":pt("border-warning"),"border-error":pt("border-error"),"border-error-focus":pt("border-error-focus"),"border-error-focus-strong":pt("border-error-focus-strong"),"border-error-strong":pt("border-error-strong"),"border-info":pt("border-info"),bg:pt("bg"),"bg-strong":pt("bg-strong"),"bg-stronger":pt("bg-stronger"),"bg-strongest":pt("bg-strongest"),"bg-hover":pt("bg-hover"),"bg-hover-strong":pt("bg-hover-strong"),"bg-hover-subtle":pt("bg-hover-subtle"),"bg-hover-neutral":pt("bg-hover-neutral"),"bg-hover-neutral-strong":pt("bg-hover-neutral-strong"),"bg-selected":pt("bg-selected"),"bg-selected-hover":pt("bg-selected-hover"),"bg-selected-strong":pt("bg-selected-strong"),"bg-selected-stronger":pt("bg-selected-stronger"),"bg-selected-strongest":pt("bg-selected-strongest"),"bg-selected-strongest-hover":pt("bg-selected-strongest-hover"),"bg-disabled":pt("bg-disabled"),"bg-selected-disabled":pt("bg-selected-disabled"),"bg-selected-stronger-disabled":pt("bg-selected-stronger-disabled"),"bg-success":pt("bg-success"),"bg-success-hover":pt("bg-success-hover"),"bg-success-strong":pt("bg-success-strong"),"bg-success-strong-hover":pt("bg-success-strong-hover"),"bg-warning":pt("bg-warning"),"bg-warning-hover":pt("bg-warning-hover"),"bg-warning-strong":pt("bg-warning-strong"),"bg-warning-strong-hover":pt("bg-warning-strong-hover"),"bg-info":pt("bg-info"),"bg-info-hover":pt("bg-info-hover"),"bg-info-strong":pt("bg-info-strong"),"bg-info-strong-hover":pt("bg-info-strong-hover"),"bg-error":pt("bg-error"),"bg-error-hover":pt("bg-error-hover"),"bg-error-strong":pt("bg-error-strong"),"bg-error-strong-hover":pt("bg-error-strong-hover"),"bg-inverse":pt("bg-inverse"),"bg-inverse-subtle":pt("bg-inverse-subtle"),"bg-inverse-subtler":pt("bg-inverse-subtler"),"bg-inverse-subtlest":pt("bg-inverse-subtlest"),"bg-inverse-hover":pt("bg-inverse-hover"),"bg-primary":pt("bg-primary"),"bg-primary-subtle":pt("bg-primary-subtle"),"bg-primary-subtler":pt("bg-primary-subtler"),"bg-primary-subtlest":pt("bg-primary-subtlest"),"bg-available":pt("bg-available"),"bg-primary-hover":pt("bg-primary-hover"),"bg-primary-subtlest-hover":pt("bg-primary-subtlest-hover"),"bg-primary-subtlest-selected":pt("bg-primary-subtlest-selected"),"overlay-strong":pt("overlay-strong"),"overlay-subtle":pt("overlay-subtle"),hyperlink:pt("hyperlink"),"hyperlink-hover":pt("hyperlink-hover"),"hyperlink-visited":pt("hyperlink-visited"),"hyperlink-inverse":pt("hyperlink-inverse"),"focus-ring":pt("focus-ring"),"focus-ring-inverse":pt("focus-ring-inverse")},xt={collections:{default:{solid:e=>r=>{var t,n,a;const{thickness:i,radius:o,colour:s}=e||{},l=null!==(t="function"==typeof i?i(r):i)&&void 0!==t?t:ut["width-010"](r),d=null!==(n="function"==typeof o?o(r):o)&&void 0!==n?n:0,c=null!==(a="function"==typeof s?s(r):s)&&void 0!==a?a:vt.border(r),u=ut.solid;return p`
            border: ${l} ${u} ${c};
            border-radius: ${d};
        `},"dashed-default":e=>r=>{var t,n,a;const{thickness:i,radius:o,colour:s}=e||{},l=null!==(t="function"==typeof i?i(r):i)&&void 0!==t?t:ut["width-010"](r),d=null!==(n="function"==typeof o?o(r):o)&&void 0!==n?n:0,c=null!==(a="function"==typeof s?s(r):s)&&void 0!==a?a:vt.border(r),u=encodeURIComponent(`<svg width='100%' height='100%' xmlns='http://www.w3.org/2000/svg'><rect width='100%' height='100%' fill='none' rx='${d}' ry='${d}' stroke='${c}' stroke-width='${l}' stroke-dasharray='4, 8' stroke-dashoffset='0' stroke-linecap='square'/></svg>`);return p`
            background-image: url("data:image/svg+xml,${u}");
            border-radius: ${d};
        `}}},defaultValue:"default"},Dt=e=>1===e.length&&"theme"in e[0],wt=e=>(...r)=>t=>{const n=Dt(r)?[]:r,a=Dt(r)?r[0]:t,i=a.theme;return(0,lt(xt,null==i?void 0:i.borderScheme)[e])(...n)(a)},Ft={solid:wt("solid"),"dashed-default":wt("dashed-default")},$t={collections:{default:{"xxs-min":0,"xxs-max":320,"xs-min":321,"xs-max":375,"sm-min":376,"sm-max":420,"md-min":421,"md-max":767,"lg-min":768,"lg-max":1023,"xl-min":1024,"xl-max":1440,"xxl-min":1441,"xxs-column":8,"xs-column":8,"sm-column":8,"md-column":8,"lg-column":12,"xl-column":12,"xxl-column":12,"xxs-gutter":16,"xs-gutter":16,"sm-gutter":16,"md-gutter":16,"lg-gutter":32,"xl-gutter":32,"xxl-gutter":32,"xxs-margin":24,"xs-margin":24,"sm-margin":24,"md-margin":24,"lg-margin":48,"xl-margin":48,"xxl-margin":48}},defaultValue:"default"},Et=e=>r=>{var t;const n=r.theme,a=lt($t,null==n?void 0:n.breakpointScheme);let i;return i=(null===(t=null==n?void 0:n.overrides)||void 0===t?void 0:t.breakpoint)?st(a,e,n.overrides.breakpoint):a[e],i},Ct={"xxs-min":Et("xxs-min"),"xxs-max":Et("xxs-max"),"xs-min":Et("xs-min"),"xs-max":Et("xs-max"),"sm-min":Et("sm-min"),"sm-max":Et("sm-max"),"md-min":Et("md-min"),"md-max":Et("md-max"),"lg-min":Et("lg-min"),"lg-max":Et("lg-max"),"xl-min":Et("xl-min"),"xl-max":Et("xl-max"),"xxl-min":Et("xxl-min"),"xxs-column":Et("xxs-column"),"xs-column":Et("xs-column"),"sm-column":Et("sm-column"),"md-column":Et("md-column"),"lg-column":Et("lg-column"),"xl-column":Et("xl-column"),"xxl-column":Et("xxl-column"),"xxs-gutter":Et("xxs-gutter"),"xs-gutter":Et("xs-gutter"),"sm-gutter":Et("sm-gutter"),"md-gutter":Et("md-gutter"),"lg-gutter":Et("lg-gutter"),"xl-gutter":Et("xl-gutter"),"xxl-gutter":Et("xxl-gutter"),"xxs-margin":Et("xxs-margin"),"xs-margin":Et("xs-margin"),"sm-margin":Et("sm-margin"),"md-margin":Et("md-margin"),"lg-margin":Et("lg-margin"),"xl-margin":Et("xl-margin"),"xxl-margin":Et("xxl-margin")},Bt=e=>("max-width"===e?["xxs","xs","sm","md","lg","xl"]:["xxs","xs","sm","md","lg","xl","xxl"]).reduce(((r,t)=>(r[t]=((e,r)=>{const t=Ct["max-width"===e?`${r}-max`:`${r}-min`];return r=>{const n=t(r);return`@media screen and (${e}: ${n}px)`}})(e,t),r)),{}),St={MaxWidth:Bt("max-width"),MinWidth:Bt("min-width")},At={collections:{default:{"heading-size-xxl":"3rem","heading-size-xl":"2.5rem","heading-size-lg":"2rem","heading-size-md":"1.625rem","heading-size-sm":"1.375rem","heading-size-xs":"1.125rem","heading-lh-xxl":"3.5rem","heading-lh-xl":"3rem","heading-lh-lg":"2.5rem","heading-lh-md":"2.25rem","heading-lh-sm":"1.75rem","heading-lh-xs":"1.625rem","heading-ls-xxl":"-0.056rem","heading-ls-xl":"-0.032rem","heading-ls-lg":"-0.032rem","heading-ls-md":"0rem","heading-ls-sm":"0rem","heading-ls-xs":"0rem","weight-light":"300","weight-regular":"400","weight-semibold":"600","weight-bold":"700","font-family":"Open Sans","body-size-baseline":"1.125rem","body-size-md":"1rem","body-size-sm":"0.875rem","body-size-xs":"0.75rem","body-lh-baseline":"1.625rem","body-lh-md":"1.5rem","body-lh-sm":"1.625rem","body-lh-xs":"1.25rem","body-ls-baseline":"0rem","body-ls-md":"0.014rem","body-ls-sm":"0.012rem","body-ls-xs":"0.012rem","form-label-size":"1rem","form-description-size":"0.875rem","form-label-lh":"1.5rem","form-description-lh":"1.6rem","form-label-ls":"0.014rem","form-description-ls":"0.012rem"},bookingsg:{"heading-size-xxl":"3rem","heading-size-xl":"2.5rem","heading-size-lg":"2rem","heading-size-md":"1.625rem","heading-size-sm":"1.375rem","heading-size-xs":"1.125rem","heading-lh-xxl":"3.5rem","heading-lh-xl":"3rem","heading-lh-lg":"2.5rem","heading-lh-md":"2.25rem","heading-lh-sm":"1.75rem","heading-lh-xs":"1.75rem","heading-ls-xxl":"-0.056rem","heading-ls-xl":"-0.032rem","heading-ls-lg":"-0.032rem","heading-ls-md":"0rem","heading-ls-sm":"0rem","heading-ls-xs":"0rem","weight-light":"300","weight-regular":"400","weight-semibold":"600","weight-bold":"700","font-family":"Plus Jakarta Sans","body-size-baseline":"1.125rem","body-size-md":"1rem","body-size-sm":"0.875rem","body-size-xs":"0.75rem","body-lh-baseline":"1.75rem","body-lh-md":"1.5rem","body-lh-sm":"1.6rem","body-lh-xs":"1.2rem","body-ls-baseline":"0rem","body-ls-md":"0.014rem","body-ls-sm":"0.012rem","body-ls-xs":"0.012rem","form-label-size":"1rem","form-description-size":"0.875rem","form-label-lh":"1.5rem","form-description-lh":"1.6rem","form-label-ls":"0.014rem","form-description-ls":"0.012rem"},pa:{"heading-size-xxl":"2.5rem","heading-size-xl":"2rem","heading-size-lg":"1.75rem","heading-size-md":"1.5rem","heading-size-sm":"1.25rem","heading-size-xs":"1rem","heading-lh-xxl":"3rem","heading-lh-xl":"2.5rem","heading-lh-lg":"2.25rem","heading-lh-md":"2rem","heading-lh-sm":"2rem","heading-lh-xs":"1.75rem","heading-ls-xxl":"-0.032rem","heading-ls-xl":"-0.032rem","heading-ls-lg":"0rem","heading-ls-md":"0rem","heading-ls-sm":"0rem","heading-ls-xs":"0rem","weight-light":"300","weight-regular":"400","weight-semibold":"600","weight-bold":"700","font-family":"Lato","body-size-baseline":"1rem","body-size-md":"0.875rem","body-size-sm":"0.75rem","body-size-xs":"0.625rem","body-lh-baseline":"1.75rem","body-lh-md":"1.5rem","body-lh-sm":"1.25rem","body-lh-xs":"1.25rem","body-ls-baseline":"0rem","body-ls-md":"0.014rem","body-ls-sm":"0.012rem","body-ls-xs":"0.012rem","form-label-size":"1rem","form-description-size":"0.875rem","form-label-lh":"1.5rem","form-description-lh":"1.6rem","form-label-ls":"0.014rem","form-description-ls":"0.012rem"},a11yplayground:{"heading-size-xxl":"3rem","heading-size-xl":"2.5rem","heading-size-lg":"2rem","heading-size-md":"1.625rem","heading-size-sm":"1.375rem","heading-size-xs":"1.125rem","heading-lh-xxl":"3.5rem","heading-lh-xl":"3rem","heading-lh-lg":"2.5rem","heading-lh-md":"2.25rem","heading-lh-sm":"1.75rem","heading-lh-xs":"1.625rem","heading-ls-xxl":"-0.056rem","heading-ls-xl":"-0.032rem","heading-ls-lg":"-0.032rem","heading-ls-md":"0rem","heading-ls-sm":"0rem","heading-ls-xs":"0rem","weight-light":"300","weight-regular":"400","weight-semibold":"600","weight-bold":"700","font-family":"Atkinson Hyperlegible Next","body-size-baseline":"1.125rem","body-size-md":"1rem","body-size-sm":"0.875rem","body-size-xs":"0.75rem","body-lh-baseline":"1.625rem","body-lh-md":"1.5rem","body-lh-sm":"1.625rem","body-lh-xs":"1.25rem","body-ls-baseline":"0rem","body-ls-md":"0.014rem","body-ls-sm":"0.012rem","body-ls-xs":"0.012rem","form-label-size":"1.125rem","form-description-size":"1rem","form-label-lh":"1.5rem","form-description-lh":"1.625rem","form-label-ls":"0rem","form-description-ls":"0.00875rem"}},defaultValue:"default"},Mt=e=>r=>{var t;const n=r.theme,a=lt(At,null==n?void 0:n.fontScheme);return(null===(t=null==n?void 0:n.overrides)||void 0===t?void 0:t.fontSpec)?st(a,e,n.overrides.fontSpec):a[e]},kt={"heading-size-xxl":Mt("heading-size-xxl"),"heading-size-xl":Mt("heading-size-xl"),"heading-size-lg":Mt("heading-size-lg"),"heading-size-md":Mt("heading-size-md"),"heading-size-sm":Mt("heading-size-sm"),"heading-size-xs":Mt("heading-size-xs"),"heading-lh-xxl":Mt("heading-lh-xxl"),"heading-lh-xl":Mt("heading-lh-xl"),"heading-lh-lg":Mt("heading-lh-lg"),"heading-lh-md":Mt("heading-lh-md"),"heading-lh-sm":Mt("heading-lh-sm"),"heading-lh-xs":Mt("heading-lh-xs"),"heading-ls-xxl":Mt("heading-ls-xxl"),"heading-ls-xl":Mt("heading-ls-xl"),"heading-ls-lg":Mt("heading-ls-lg"),"heading-ls-md":Mt("heading-ls-md"),"heading-ls-sm":Mt("heading-ls-sm"),"heading-ls-xs":Mt("heading-ls-xs"),"weight-light":Mt("weight-light"),"weight-regular":Mt("weight-regular"),"weight-semibold":Mt("weight-semibold"),"weight-bold":Mt("weight-bold"),"font-family":Mt("font-family"),"body-size-baseline":Mt("body-size-baseline"),"body-size-md":Mt("body-size-md"),"body-size-sm":Mt("body-size-sm"),"body-size-xs":Mt("body-size-xs"),"body-lh-baseline":Mt("body-lh-baseline"),"body-lh-md":Mt("body-lh-md"),"body-lh-sm":Mt("body-lh-sm"),"body-lh-xs":Mt("body-lh-xs"),"body-ls-baseline":Mt("body-ls-baseline"),"body-ls-md":Mt("body-ls-md"),"body-ls-sm":Mt("body-ls-sm"),"body-ls-xs":Mt("body-ls-xs"),"form-label-size":Mt("form-label-size"),"form-description-size":Mt("form-description-size"),"form-label-lh":Mt("form-label-lh"),"form-description-lh":Mt("form-description-lh"),"form-label-ls":Mt("form-label-ls"),"form-description-ls":Mt("form-description-ls")},zt=(e,r,t,n,a)=>{const{disableLigatures:i}=a||{};return p`
        font-family: ${Mt("font-family")};
        font-size: ${Mt(e)};
        font-weight: ${Mt(r)};
        line-height: ${Mt(t)};
        letter-spacing: ${Mt(n)};

        font-variant: ${i?"no-common-ligatures":"normal"};
    `},Ot=(e={})=>({"heading-xxl-light":zt("heading-size-xxl","weight-light","heading-lh-xxl","heading-ls-xxl",e),"heading-xxl-regular":zt("heading-size-xxl","weight-regular","heading-lh-xxl","heading-ls-xxl",e),"heading-xxl-semibold":zt("heading-size-xxl","weight-semibold","heading-lh-xxl","heading-ls-xxl",e),"heading-xxl-bold":zt("heading-size-xxl","weight-bold","heading-lh-xxl","heading-ls-xxl",e),"heading-xl-light":zt("heading-size-xl","weight-light","heading-lh-xl","heading-ls-xl",e),"heading-xl-regular":zt("heading-size-xl","weight-regular","heading-lh-xl","heading-ls-xl",e),"heading-xl-semibold":zt("heading-size-xl","weight-semibold","heading-lh-xl","heading-ls-xl",e),"heading-xl-bold":zt("heading-size-xl","weight-bold","heading-lh-xl","heading-ls-xl",e),"heading-lg-light":zt("heading-size-lg","weight-light","heading-lh-lg","heading-ls-lg",e),"heading-lg-regular":zt("heading-size-lg","weight-regular","heading-lh-lg","heading-ls-lg",e),"heading-lg-semibold":zt("heading-size-lg","weight-semibold","heading-lh-lg","heading-ls-lg",e),"heading-lg-bold":zt("heading-size-lg","weight-bold","heading-lh-lg","heading-ls-lg",e),"heading-md-light":zt("heading-size-md","weight-light","heading-lh-md","heading-ls-md",e),"heading-md-regular":zt("heading-size-md","weight-regular","heading-lh-md","heading-ls-md",e),"heading-md-semibold":zt("heading-size-md","weight-semibold","heading-lh-md","heading-ls-md",e),"heading-md-bold":zt("heading-size-md","weight-bold","heading-lh-md","heading-ls-md",e),"heading-sm-light":zt("heading-size-sm","weight-light","heading-lh-sm","heading-ls-sm",e),"heading-sm-regular":zt("heading-size-sm","weight-regular","heading-lh-sm","heading-ls-sm",e),"heading-sm-semibold":zt("heading-size-sm","weight-semibold","heading-lh-sm","heading-ls-sm",e),"heading-sm-bold":zt("heading-size-sm","weight-bold","heading-lh-sm","heading-ls-sm",e),"heading-xs-light":zt("heading-size-xs","weight-light","heading-lh-xs","heading-ls-xs",e),"heading-xs-regular":zt("heading-size-xs","weight-regular","heading-lh-xs","heading-ls-xs",e),"heading-xs-semibold":zt("heading-size-xs","weight-semibold","heading-lh-xs","heading-ls-xs",e),"heading-xs-bold":zt("heading-size-xs","weight-bold","heading-lh-xs","heading-ls-xs",e),"body-baseline-light":zt("body-size-baseline","weight-light","body-lh-baseline","body-ls-baseline",e),"body-baseline-regular":zt("body-size-baseline","weight-regular","body-lh-baseline","body-ls-baseline",e),"body-baseline-semibold":zt("body-size-baseline","weight-semibold","body-lh-baseline","body-ls-baseline",e),"body-baseline-bold":zt("body-size-baseline","weight-bold","body-lh-baseline","body-ls-baseline",e),"body-md-light":zt("body-size-md","weight-light","body-lh-md","body-ls-md",e),"body-md-regular":zt("body-size-md","weight-regular","body-lh-md","body-ls-md",e),"body-md-semibold":zt("body-size-md","weight-semibold","body-lh-md","body-ls-md",e),"body-md-bold":zt("body-size-md","weight-bold","body-lh-md","body-ls-md",e),"body-sm-light":zt("body-size-sm","weight-light","body-lh-sm","body-ls-sm",e),"body-sm-regular":zt("body-size-sm","weight-regular","body-lh-sm","body-ls-sm",e),"body-sm-semibold":zt("body-size-sm","weight-semibold","body-lh-sm","body-ls-sm",e),"body-sm-bold":zt("body-size-sm","weight-bold","body-lh-sm","body-ls-sm",e),"body-xs-light":zt("body-size-xs","weight-light","body-lh-xs","body-ls-xs",e),"body-xs-regular":zt("body-size-xs","weight-regular","body-lh-xs","body-ls-xs",e),"body-xs-semibold":zt("body-size-xs","weight-semibold","body-lh-xs","body-ls-xs",e),"body-xs-bold":zt("body-size-xs","weight-bold","body-lh-xs","body-ls-xs",e),"form-label":zt("form-label-size","weight-semibold","form-label-lh","form-label-ls",e),"form-description":zt("form-description-size","weight-regular","form-description-lh","form-description-ls",e)}),Yt=Ot({disableLigatures:!0}),Tt={collections:{default:Ot(),bookingsg:Yt,pa:Ot({disableLigatures:!0}),a11yplayground:Ot({disableLigatures:!0})},defaultValue:"default"},jt=e=>r=>{var t;const n=r.theme,a=lt(Tt,null==n?void 0:n.fontScheme),i=(null===(t=null==n?void 0:n.overrides)||void 0===t?void 0:t.font)?st(a,e,n.overrides.font):a[e];return"function"==typeof i?i(r):i},_t={"heading-xxl-light":jt("heading-xxl-light"),"heading-xxl-regular":jt("heading-xxl-regular"),"heading-xxl-semibold":jt("heading-xxl-semibold"),"heading-xxl-bold":jt("heading-xxl-bold"),"heading-xl-light":jt("heading-xl-light"),"heading-xl-regular":jt("heading-xl-regular"),"heading-xl-semibold":jt("heading-xl-semibold"),"heading-xl-bold":jt("heading-xl-bold"),"heading-lg-light":jt("heading-lg-light"),"heading-lg-regular":jt("heading-lg-regular"),"heading-lg-semibold":jt("heading-lg-semibold"),"heading-lg-bold":jt("heading-lg-bold"),"heading-md-light":jt("heading-md-light"),"heading-md-regular":jt("heading-md-regular"),"heading-md-semibold":jt("heading-md-semibold"),"heading-md-bold":jt("heading-md-bold"),"heading-sm-light":jt("heading-sm-light"),"heading-sm-regular":jt("heading-sm-regular"),"heading-sm-semibold":jt("heading-sm-semibold"),"heading-sm-bold":jt("heading-sm-bold"),"heading-xs-light":jt("heading-xs-light"),"heading-xs-regular":jt("heading-xs-regular"),"heading-xs-semibold":jt("heading-xs-semibold"),"heading-xs-bold":jt("heading-xs-bold"),"body-baseline-light":jt("body-baseline-light"),"body-baseline-regular":jt("body-baseline-regular"),"body-baseline-semibold":jt("body-baseline-semibold"),"body-baseline-bold":jt("body-baseline-bold"),"body-md-light":jt("body-md-light"),"body-md-regular":jt("body-md-regular"),"body-md-semibold":jt("body-md-semibold"),"body-md-bold":jt("body-md-bold"),"body-sm-light":jt("body-sm-light"),"body-sm-regular":jt("body-sm-regular"),"body-sm-semibold":jt("body-sm-semibold"),"body-sm-bold":jt("body-sm-bold"),"body-xs-light":jt("body-xs-light"),"body-xs-regular":jt("body-xs-regular"),"body-xs-semibold":jt("body-xs-semibold"),"body-xs-bold":jt("body-xs-bold"),"form-label":jt("form-label"),"form-description":jt("form-description")},Rt={collections:{default:{"duration-150":"150ms","duration-250":"250ms","duration-350":"350ms","duration-500":"500ms","duration-800":"800ms","duration-1000":"1000ms","ease-default":"cubic-bezier(0.45, 0.05, 0.55, 0.95)","ease-standard":"cubic-bezier(0.86, 0, 0.07, 1)","ease-entrance":"cubic-bezier(0.18, 0.13, 0, 1)","ease-exit":"cubic-bezier(1, 0, 0.8, 0.85)"}},defaultValue:"default"},It=e=>r=>{var t;const n=r.theme,a=lt(Rt,null==n?void 0:n.motionScheme);return(null===(t=null==n?void 0:n.overrides)||void 0===t?void 0:t.motion)?st(a,e,n.overrides.motion):a[e]},Lt={"duration-150":It("duration-150"),"duration-250":It("duration-250"),"duration-350":It("duration-350"),"duration-500":It("duration-500"),"duration-800":It("duration-800"),"duration-1000":It("duration-1000"),"ease-default":It("ease-default"),"ease-standard":It("ease-standard"),"ease-entrance":It("ease-entrance"),"ease-exit":It("ease-exit")},Ht={collections:{default:{none:0,xs:2,sm:4,md:8,lg:12,full:9999}},defaultValue:"default"},Wt=e=>r=>{var t;const n=r.theme,a=lt(Ht,null==n?void 0:n.radiusScheme);return(null===(t=null==n?void 0:n.overrides)||void 0===t?void 0:t.radius)?`${st(a,e,n.overrides.radius)}px`:`${a[e]}px`},Nt={none:Wt("none"),xs:Wt("xs"),sm:Wt("sm"),md:Wt("md"),lg:Wt("lg"),full:Wt("full")},Pt={collections:{default:{"spacing-0":0,"spacing-4":4,"spacing-8":8,"spacing-12":12,"spacing-16":16,"spacing-20":20,"spacing-24":24,"spacing-32":32,"spacing-40":40,"spacing-48":48,"spacing-64":64,"spacing-72":72,"layout-xs":8,"layout-sm":16,"layout-md":24,"layout-lg":32,"layout-xl":48,"layout-xxl":64,"layout-xxxl":128}},defaultValue:"default"},Vt=e=>r=>{var t;const n=r.theme,a=lt(Pt,null==n?void 0:n.spacingScheme);return(null===(t=null==n?void 0:n.overrides)||void 0===t?void 0:t.spacing)?`${st(a,e,n.overrides.spacing)}px`:`${a[e]}px`},Ut={"spacing-0":Vt("spacing-0"),"spacing-4":Vt("spacing-4"),"spacing-8":Vt("spacing-8"),"spacing-12":Vt("spacing-12"),"spacing-16":Vt("spacing-16"),"spacing-20":Vt("spacing-20"),"spacing-24":Vt("spacing-24"),"spacing-32":Vt("spacing-32"),"spacing-40":Vt("spacing-40"),"spacing-48":Vt("spacing-48"),"spacing-64":Vt("spacing-64"),"spacing-72":Vt("spacing-72"),"layout-xs":Vt("layout-xs"),"layout-sm":Vt("layout-sm"),"layout-md":Vt("layout-md"),"layout-lg":Vt("layout-lg"),"layout-xl":Vt("layout-xl"),"layout-xxl":Vt("layout-xxl"),"layout-xxxl":Vt("layout-xxxl")},Zt=Object.assign(Object.assign({},vt),{Primitive:mt}),Kt=Object.assign(Object.assign({},_t),{Spec:kt}),Jt=Lt,qt=Object.assign(Object.assign({},ut),{Util:Ft}),Xt=Ut,Gt=Nt,Qt=Ct,en=St,rn=e=>"small"===e?2.5:3;y.div`
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
        outline: 2px solid ${Zt["border-focus"]};
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
    border: ${qt["width-010"]} ${qt.solid} ${Zt.border};
    border-radius: ${Gt.sm};
    background: ${Zt.bg};
    overflow: hidden;

    :focus-within {
        border-color: ${Zt["border-focus"]};
        box-shadow: 0px 0px 4px 0px
            rgb(from ${Zt["border-focus"]} r g b / 50%) inset; // TODO: confirm shadow
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
                background: ${Zt["bg-disabled"]};

                ${nn} {
                    cursor: not-allowed;
                }

                :focus-within {
                    border-color: ${Zt.border};
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
                border-color: ${Zt["border-error"]};

                :focus-within {
                    border-color: ${Zt["border-error"]};
                    box-shadow: 0px 0px 4px 0px
                        rgb(from ${Zt["border-error"]} r g b / 50%) inset; // TODO: confirm shadow
                }
            `:void 0}
`,y.div`
    transform: rotate(${e=>e.expanded?180:0}deg);
    transition: transform ${Jt["duration-250"]} ${Jt["ease-default"]};
    margin-left: ${Xt["spacing-16"]};
`,y(f)`
    color: ${Zt.icon};
`,y.div`
    height: 1px;
    background: ${Zt.border};
    margin: 0 ${Xt["spacing-8"]};
`,y.div`
    display: flex;
    flex: 1;
    word-break: break-all;
    ${e=>{if(e.$disabled)return p`
                color: ${Zt["text-disabled"]};
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
    color: ${Zt["text-subtler"]};
`;var on=function(e,r){return on=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,r){e.__proto__=r}||function(e,r){for(var t in r)Object.prototype.hasOwnProperty.call(r,t)&&(e[t]=r[t])},on(e,r)};var sn=function(){return sn=Object.assign||function(e){for(var r,t=1,n=arguments.length;t<n;t++)for(var a in r=arguments[t])Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a]);return e},sn.apply(this,arguments)};var ln="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};var dn=function(e){var r=typeof e;return null!=e&&("object"==r||"function"==r)},cn="object"==typeof ln&&ln&&ln.Object===Object&&ln,un="object"==typeof self&&self&&self.Object===Object&&self,gn=cn||un||Function("return this")(),hn=gn,bn=function(){return hn.Date.now()},mn=/\s/;var fn=function(e){for(var r=e.length;r--&&mn.test(e.charAt(r)););return r},yn=/^\s+/;var pn=function(e){return e?e.slice(0,fn(e)+1).replace(yn,""):e},vn=gn.Symbol,xn=vn,Dn=Object.prototype,wn=Dn.hasOwnProperty,Fn=Dn.toString,$n=xn?xn.toStringTag:void 0;var En=function(e){var r=wn.call(e,$n),t=e[$n];try{e[$n]=void 0;var n=!0}catch(e){}var a=Fn.call(e);return n&&(r?e[$n]=t:delete e[$n]),a},Cn=Object.prototype.toString;var Bn=En,Sn=function(e){return Cn.call(e)},An=vn?vn.toStringTag:void 0;var Mn=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":An&&An in Object(e)?Bn(e):Sn(e)},kn=function(e){return null!=e&&"object"==typeof e};var zn=pn,On=dn,Yn=function(e){return"symbol"==typeof e||kn(e)&&"[object Symbol]"==Mn(e)},Tn=/^[-+]0x[0-9a-f]+$/i,jn=/^0b[01]+$/i,_n=/^0o[0-7]+$/i,Rn=parseInt;var In=dn,Ln=bn,Hn=function(e){if("number"==typeof e)return e;if(Yn(e))return NaN;if(On(e)){var r="function"==typeof e.valueOf?e.valueOf():e;e=On(r)?r+"":r}if("string"!=typeof e)return 0===e?e:+e;e=zn(e);var t=jn.test(e);return t||_n.test(e)?Rn(e.slice(2),t?2:8):Tn.test(e)?NaN:+e},Wn=Math.max,Nn=Math.min;var Pn=function(e,r,t){var n,a,i,o,s,l,d=0,c=!1,u=!1,g=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function h(r){var t=n,i=a;return n=a=void 0,d=r,o=e.apply(i,t)}function b(e){var t=e-l;return void 0===l||t>=r||t<0||u&&e-d>=i}function m(){var e=Ln();if(b(e))return f(e);s=setTimeout(m,function(e){var t=r-(e-l);return u?Nn(t,i-(e-d)):t}(e))}function f(e){return s=void 0,g&&n?h(e):(n=a=void 0,o)}function y(){var e=Ln(),t=b(e);if(n=arguments,a=this,l=e,t){if(void 0===s)return function(e){return d=e,s=setTimeout(m,r),c?h(e):o}(l);if(u)return clearTimeout(s),s=setTimeout(m,r),h(l)}return void 0===s&&(s=setTimeout(m,r)),o}return r=Hn(r)||0,In(t)&&(c=!!t.leading,i=(u="maxWait"in t)?Wn(Hn(t.maxWait)||0,r):i,g="trailing"in t?!!t.trailing:g),y.cancel=function(){void 0!==s&&clearTimeout(s),d=0,n=l=a=s=void 0},y.flush=function(){return void 0===s?o:f(Ln())},y},Vn=Pn,Un=dn;var Zn=function(e,r,t){var n=!0,a=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return Un(t)&&(n="leading"in t?!!t.leading:n,a="trailing"in t?!!t.trailing:a),Vn(e,r,{leading:n,maxWait:r,trailing:a})},Kn=function(e,r,t,n){switch(r){case"debounce":return Pn(e,t,n);case"throttle":return Zn(e,t,n);default:return e}},Jn=function(e){return"function"==typeof e},qn=function(){return"undefined"==typeof window},Xn=function(e){return e instanceof Element||e instanceof HTMLDocument},Gn=function(e,r,t,n){return function(a){var i=a.width,o=a.height;r((function(r){return r.width===i&&r.height===o||r.width===i&&!n||r.height===o&&!t?r:(e&&Jn(e)&&e(i,o),{width:i,height:o})}))}};!function(e){function r(r){var t=e.call(this,r)||this;t.cancelHandler=function(){t.resizeHandler&&t.resizeHandler.cancel&&(t.resizeHandler.cancel(),t.resizeHandler=null)},t.attachObserver=function(){var e=t.props,r=e.targetRef,n=e.observerOptions;if(!qn()){r&&r.current&&(t.targetRef.current=r.current);var a=t.getElement();a&&(t.observableElement&&t.observableElement===a||(t.observableElement=a,t.resizeObserver.observe(a,n)))}},t.getElement=function(){var e=t.props,r=e.querySelector,n=e.targetDomEl;if(qn())return null;if(r)return document.querySelector(r);if(n&&Xn(n))return n;if(t.targetRef&&Xn(t.targetRef.current))return t.targetRef.current;var a=T(t);if(!a)return null;switch(t.getRenderType()){case"renderProp":case"childFunction":case"child":case"childArray":return a;default:return a.parentElement}},t.createResizeHandler=function(e){var r=t.props,n=r.handleWidth,a=void 0===n||n,i=r.handleHeight,o=void 0===i||i,s=r.onResize;if(a||o){var l=Gn(s,t.setState.bind(t),a,o);e.forEach((function(e){var r=e&&e.contentRect||{},n=r.width,a=r.height;!t.skipOnMount&&!qn()&&l({width:n,height:a}),t.skipOnMount=!1}))}},t.getRenderType=function(){var e=t.props,r=e.render,n=e.children;return Jn(r)?"renderProp":Jn(n)?"childFunction":s(n)?"child":Array.isArray(n)?"childArray":"parent"};var n=r.skipOnMount,a=r.refreshMode,i=r.refreshRate,o=void 0===i?1e3:i,d=r.refreshOptions;return t.state={width:void 0,height:void 0},t.skipOnMount=n,t.targetRef=l(),t.observableElement=null,qn()||(t.resizeHandler=Kn(t.createResizeHandler,a,o,d),t.resizeObserver=new window.ResizeObserver(t.resizeHandler)),t}(function(e,r){if("function"!=typeof r&&null!==r)throw new TypeError("Class extends value "+String(r)+" is not a constructor or null");function t(){this.constructor=e}on(e,r),e.prototype=null===r?Object.create(r):(t.prototype=r.prototype,new t)})(r,e),r.prototype.componentDidMount=function(){this.attachObserver()},r.prototype.componentDidUpdate=function(){this.attachObserver()},r.prototype.componentWillUnmount=function(){qn()||(this.observableElement=null,this.resizeObserver.disconnect(),this.cancelHandler())},r.prototype.render=function(){var e,r=this.props,t=r.render,a=r.children,i=r.nodeType,o=void 0===i?"div":i,s=this.state,l={width:s.width,height:s.height,targetRef:this.targetRef};switch(this.getRenderType()){case"renderProp":return t&&t(l);case"childFunction":return(e=a)(l);case"child":if((e=a).type&&"string"==typeof e.type){var c=function(e,r){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(n=Object.getOwnPropertySymbols(e);a<n.length;a++)r.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(t[n[a]]=e[n[a]])}return t}(l,["targetRef"]);return d(e,c)}return d(e,l);case"childArray":return(e=a).map((function(e){return!!e&&d(e,l)}));default:return n.createElement(o,null)}}}(c);var Qn,ea=qn()?u:g;!function(e){e.Ready="overlay-context-ready",e.Change="overlay-context-change"}(Qn||(Qn={}));const ra=y.div`
    display: flex;
    flex-direction: column;
`,ta=e=>"right"===e?"bottom-end":"bottom-start",na=({enabled:n,isOpen:a,onOpen:s,onClose:l,onDismiss:d,renderElement:c,renderDropdown:g,customZIndex:h,clickToToggle:b=!1,offset:m=0,alignment:f="left",fitAvailableHeight:y})=>{var p;const v=x(),T=Qt["sm-max"]({theme:v}),j=i(null),_=i(null),{width:R=0}=function(e){void 0===e&&(e={});var r=e.skipOnMount,t=void 0!==r&&r,n=e.refreshMode,a=e.refreshRate,s=void 0===a?1e3:a,l=e.refreshOptions,d=e.handleWidth,c=void 0===d||d,u=e.handleHeight,g=void 0===u||u,h=e.targetRef,b=e.observerOptions,m=e.onResize,f=i(t),y=i(null),p=null!=h?h:y,v=i(),x=o({width:void 0,height:void 0}),D=x[0],w=x[1];return ea((function(){if(!qn()){var e=Gn(m,w,c,g);v.current=Kn((function(r){(c||g)&&r.forEach((function(r){var t=r&&r.contentRect||{},n=t.width,a=t.height;!f.current&&!qn()&&e({width:n,height:a}),f.current=!1}))}),n,s,l);var r=new window.ResizeObserver(v.current);return p.current&&r.observe(p.current,b),function(){r.disconnect();var e=v.current;e&&e.cancel&&e.cancel()}}}),[n,s,l,c,g,m,b,p.current]),sn({ref:p},D)}({targetRef:j,handleHeight:!1}),I={name:"center",fn:({x:e,rects:r})=>{const t=0===e||e+r.floating.width===window.innerWidth,n=window.innerWidth<T;return{x:t&&n?(window.innerWidth-r.floating.width)/2:e}}},{refs:L,floatingStyles:H,context:W}=w({open:a,onOpenChange:(e,r,t)=>{"escape-key"===t?null==d||d():e&&!a?null==s||s():!e&&a&&(null==l||l(t))},whileElementsMounted:F,placement:ta(f),middleware:[$(m),E(),C({limiter:B()}),S({apply({availableHeight:e}){_.current&&Object.assign(_.current.style,{maxHeight:y?`${e}px`:void 0,overflowY:y?"hidden":void 0})}}),I]}),N=(()=>{const[e,r]=o(void 0),t=D();return u((()=>{if(!t)return void r(void 0);const e=e=>{r(e.zIndex)};return t.events.on(Qn.Change,e),t.events.emit(Qn.Ready),()=>t.events.off(Qn.Change,e)}),[t]),e})(),{isMounted:P,styles:V}=A(W,{initial:{opacity:0},open:{opacity:1},duration:300}),U=M(W,{enabled:n,toggle:b}),Z=k(W,{enabled:n}),{getReferenceProps:K,getFloatingProps:J}=z([U,Z]);return e(r,{children:[t("div",Object.assign({ref:e=>{j.current=e,L.setReference(e)}},K(),{children:c()})),P&&t(O,{children:t(Y,{context:W,modal:!1,initialFocus:_,returnFocus:!1,children:t("div",Object.assign({ref:L.setFloating,style:Object.assign(Object.assign({},H),{zIndex:null!==(p=null!=h?h:N)&&void 0!==p?p:50})},J(),{children:t(ra,{ref:_,style:Object.assign({},V),inert:V.opacity<1?"":void 0,children:g({elementWidth:R})})}))})})]})},aa=y.div`
    --vertical-inset: ${Xt["spacing-24"]};
    --horizontal-inset: ${Xt["spacing-20"]};
    --header-bottom-spacing: ${Xt["spacing-4"]};

    border: ${qt["width-010"]} ${qt.solid} ${Zt.border};
    border-radius: ${Gt.sm};
    overflow: hidden;

    width: ${e=>e.$width}px;
    max-width: 41rem;
    min-width: 21rem;

    ${en.MaxWidth.sm} {
        min-width: 17.5rem;
    }
`;var ia={exports:{}};ia.exports=function(){var e=1e3,r=6e4,t=36e5,n="millisecond",a="second",i="minute",o="hour",s="day",l="week",d="month",c="quarter",u="year",g="date",h="Invalid Date",b=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,m=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,f={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(e){var r=["th","st","nd","rd"],t=e%100;return"["+e+(r[(t-20)%10]||r[t]||r[0])+"]"}},y=function(e,r,t){var n=String(e);return!n||n.length>=r?e:""+Array(r+1-n.length).join(t)+e},p={s:y,z:function(e){var r=-e.utcOffset(),t=Math.abs(r),n=Math.floor(t/60),a=t%60;return(r<=0?"+":"-")+y(n,2,"0")+":"+y(a,2,"0")},m:function e(r,t){if(r.date()<t.date())return-e(t,r);var n=12*(t.year()-r.year())+(t.month()-r.month()),a=r.clone().add(n,d),i=t-a<0,o=r.clone().add(n+(i?-1:1),d);return+(-(n+(t-a)/(i?a-o:o-a))||0)},a:function(e){return e<0?Math.ceil(e)||0:Math.floor(e)},p:function(e){return{M:d,y:u,w:l,d:s,D:g,h:o,m:i,s:a,ms:n,Q:c}[e]||String(e||"").toLowerCase().replace(/s$/,"")},u:function(e){return void 0===e}},v="en",x={};x[v]=f;var D="$isDayjsObject",w=function(e){return e instanceof C||!(!e||!e[D])},F=function e(r,t,n){var a;if(!r)return v;if("string"==typeof r){var i=r.toLowerCase();x[i]&&(a=i),t&&(x[i]=t,a=i);var o=r.split("-");if(!a&&o.length>1)return e(o[0])}else{var s=r.name;x[s]=r,a=s}return!n&&a&&(v=a),a||!n&&v},$=function(e,r){if(w(e))return e.clone();var t="object"==typeof r?r:{};return t.date=e,t.args=arguments,new C(t)},E=p;E.l=F,E.i=w,E.w=function(e,r){return $(e,{locale:r.$L,utc:r.$u,x:r.$x,$offset:r.$offset})};var C=function(){function f(e){this.$L=F(e.locale,null,!0),this.parse(e),this.$x=this.$x||e.x||{},this[D]=!0}var y=f.prototype;return y.parse=function(e){this.$d=function(e){var r=e.date,t=e.utc;if(null===r)return new Date(NaN);if(E.u(r))return new Date;if(r instanceof Date)return new Date(r);if("string"==typeof r&&!/Z$/i.test(r)){var n=r.match(b);if(n){var a=n[2]-1||0,i=(n[7]||"0").substring(0,3);return t?new Date(Date.UTC(n[1],a,n[3]||1,n[4]||0,n[5]||0,n[6]||0,i)):new Date(n[1],a,n[3]||1,n[4]||0,n[5]||0,n[6]||0,i)}}return new Date(r)}(e),this.init()},y.init=function(){var e=this.$d;this.$y=e.getFullYear(),this.$M=e.getMonth(),this.$D=e.getDate(),this.$W=e.getDay(),this.$H=e.getHours(),this.$m=e.getMinutes(),this.$s=e.getSeconds(),this.$ms=e.getMilliseconds()},y.$utils=function(){return E},y.isValid=function(){return!(this.$d.toString()===h)},y.isSame=function(e,r){var t=$(e);return this.startOf(r)<=t&&t<=this.endOf(r)},y.isAfter=function(e,r){return $(e)<this.startOf(r)},y.isBefore=function(e,r){return this.endOf(r)<$(e)},y.$g=function(e,r,t){return E.u(e)?this[r]:this.set(t,e)},y.unix=function(){return Math.floor(this.valueOf()/1e3)},y.valueOf=function(){return this.$d.getTime()},y.startOf=function(e,r){var t=this,n=!!E.u(r)||r,c=E.p(e),h=function(e,r){var a=E.w(t.$u?Date.UTC(t.$y,r,e):new Date(t.$y,r,e),t);return n?a:a.endOf(s)},b=function(e,r){return E.w(t.toDate()[e].apply(t.toDate("s"),(n?[0,0,0,0]:[23,59,59,999]).slice(r)),t)},m=this.$W,f=this.$M,y=this.$D,p="set"+(this.$u?"UTC":"");switch(c){case u:return n?h(1,0):h(31,11);case d:return n?h(1,f):h(0,f+1);case l:var v=this.$locale().weekStart||0,x=(m<v?m+7:m)-v;return h(n?y-x:y+(6-x),f);case s:case g:return b(p+"Hours",0);case o:return b(p+"Minutes",1);case i:return b(p+"Seconds",2);case a:return b(p+"Milliseconds",3);default:return this.clone()}},y.endOf=function(e){return this.startOf(e,!1)},y.$set=function(e,r){var t,l=E.p(e),c="set"+(this.$u?"UTC":""),h=(t={},t[s]=c+"Date",t[g]=c+"Date",t[d]=c+"Month",t[u]=c+"FullYear",t[o]=c+"Hours",t[i]=c+"Minutes",t[a]=c+"Seconds",t[n]=c+"Milliseconds",t)[l],b=l===s?this.$D+(r-this.$W):r;if(l===d||l===u){var m=this.clone().set(g,1);m.$d[h](b),m.init(),this.$d=m.set(g,Math.min(this.$D,m.daysInMonth())).$d}else h&&this.$d[h](b);return this.init(),this},y.set=function(e,r){return this.clone().$set(e,r)},y.get=function(e){return this[E.p(e)]()},y.add=function(n,c){var g,h=this;n=Number(n);var b=E.p(c),m=function(e){var r=$(h);return E.w(r.date(r.date()+Math.round(e*n)),h)};if(b===d)return this.set(d,this.$M+n);if(b===u)return this.set(u,this.$y+n);if(b===s)return m(1);if(b===l)return m(7);var f=(g={},g[i]=r,g[o]=t,g[a]=e,g)[b]||1,y=this.$d.getTime()+n*f;return E.w(y,this)},y.subtract=function(e,r){return this.add(-1*e,r)},y.format=function(e){var r=this,t=this.$locale();if(!this.isValid())return t.invalidDate||h;var n=e||"YYYY-MM-DDTHH:mm:ssZ",a=E.z(this),i=this.$H,o=this.$m,s=this.$M,l=t.weekdays,d=t.months,c=t.meridiem,u=function(e,t,a,i){return e&&(e[t]||e(r,n))||a[t].slice(0,i)},g=function(e){return E.s(i%12||12,e,"0")},b=c||function(e,r,t){var n=e<12?"AM":"PM";return t?n.toLowerCase():n};return n.replace(m,(function(e,n){return n||function(e){switch(e){case"YY":return String(r.$y).slice(-2);case"YYYY":return E.s(r.$y,4,"0");case"M":return s+1;case"MM":return E.s(s+1,2,"0");case"MMM":return u(t.monthsShort,s,d,3);case"MMMM":return u(d,s);case"D":return r.$D;case"DD":return E.s(r.$D,2,"0");case"d":return String(r.$W);case"dd":return u(t.weekdaysMin,r.$W,l,2);case"ddd":return u(t.weekdaysShort,r.$W,l,3);case"dddd":return l[r.$W];case"H":return String(i);case"HH":return E.s(i,2,"0");case"h":return g(1);case"hh":return g(2);case"a":return b(i,o,!0);case"A":return b(i,o,!1);case"m":return String(o);case"mm":return E.s(o,2,"0");case"s":return String(r.$s);case"ss":return E.s(r.$s,2,"0");case"SSS":return E.s(r.$ms,3,"0");case"Z":return a}return null}(e)||a.replace(":","")}))},y.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},y.diff=function(n,g,h){var b,m=this,f=E.p(g),y=$(n),p=(y.utcOffset()-this.utcOffset())*r,v=this-y,x=function(){return E.m(m,y)};switch(f){case u:b=x()/12;break;case d:b=x();break;case c:b=x()/3;break;case l:b=(v-p)/6048e5;break;case s:b=(v-p)/864e5;break;case o:b=v/t;break;case i:b=v/r;break;case a:b=v/e;break;default:b=v}return h?b:E.a(b)},y.daysInMonth=function(){return this.endOf(d).$D},y.$locale=function(){return x[this.$L]},y.locale=function(e,r){if(!e)return this.$L;var t=this.clone(),n=F(e,r,!0);return n&&(t.$L=n),t},y.clone=function(){return E.w(this.$d,this)},y.toDate=function(){return new Date(this.valueOf())},y.toJSON=function(){return this.isValid()?this.toISOString():null},y.toISOString=function(){return this.$d.toISOString()},y.toString=function(){return this.$d.toUTCString()},f}(),B=C.prototype;return $.prototype=B,[["$ms",n],["$s",a],["$m",i],["$H",o],["$W",s],["$M",d],["$y",u],["$D",g]].forEach((function(e){B[e[1]]=function(r){return this.$g(r,e[0],e[1])}})),$.extend=function(e,r){return e.$i||(e(r,C,$),e.$i=!0),$},$.locale=F,$.isDayjs=w,$.unix=function(e){return $(1e3*e)},$.en=x[v],$.Ls=x,$.p={},$}();var oa=L(ia.exports),sa={exports:{}};sa.exports=function(){var e={LTS:"h:mm:ss A",LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D, YYYY",LLL:"MMMM D, YYYY h:mm A",LLLL:"dddd, MMMM D, YYYY h:mm A"},r=/(\[[^[]*\])|([-_:/.,()\s]+)|(A|a|YYYY|YY?|MM?M?M?|Do|DD?|hh?|HH?|mm?|ss?|S{1,3}|z|ZZ?)/g,t=/\d\d/,n=/\d\d?/,a=/\d*[^-_:/,()\s\d]+/,i={},o=function(e){return(e=+e)+(e>68?1900:2e3)},s=function(e){return function(r){this[e]=+r}},l=[/[+-]\d\d:?(\d\d)?|Z/,function(e){(this.zone||(this.zone={})).offset=function(e){if(!e)return 0;if("Z"===e)return 0;var r=e.match(/([+-]|\d\d)/g),t=60*r[1]+(+r[2]||0);return 0===t?0:"+"===r[0]?-t:t}(e)}],d=function(e){var r=i[e];return r&&(r.indexOf?r:r.s.concat(r.f))},c=function(e,r){var t,n=i.meridiem;if(n){for(var a=1;a<=24;a+=1)if(e.indexOf(n(a,0,r))>-1){t=a>12;break}}else t=e===(r?"pm":"PM");return t},u={A:[a,function(e){this.afternoon=c(e,!1)}],a:[a,function(e){this.afternoon=c(e,!0)}],S:[/\d/,function(e){this.milliseconds=100*+e}],SS:[t,function(e){this.milliseconds=10*+e}],SSS:[/\d{3}/,function(e){this.milliseconds=+e}],s:[n,s("seconds")],ss:[n,s("seconds")],m:[n,s("minutes")],mm:[n,s("minutes")],H:[n,s("hours")],h:[n,s("hours")],HH:[n,s("hours")],hh:[n,s("hours")],D:[n,s("day")],DD:[t,s("day")],Do:[a,function(e){var r=i.ordinal,t=e.match(/\d+/);if(this.day=t[0],r)for(var n=1;n<=31;n+=1)r(n).replace(/\[|\]/g,"")===e&&(this.day=n)}],M:[n,s("month")],MM:[t,s("month")],MMM:[a,function(e){var r=d("months"),t=(d("monthsShort")||r.map((function(e){return e.slice(0,3)}))).indexOf(e)+1;if(t<1)throw new Error;this.month=t%12||t}],MMMM:[a,function(e){var r=d("months").indexOf(e)+1;if(r<1)throw new Error;this.month=r%12||r}],Y:[/[+-]?\d+/,s("year")],YY:[t,function(e){this.year=o(e)}],YYYY:[/\d{4}/,s("year")],Z:l,ZZ:l};function g(t){var n,a;n=t,a=i&&i.formats;for(var o=(t=n.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g,(function(r,t,n){var i=n&&n.toUpperCase();return t||a[n]||e[n]||a[i].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g,(function(e,r,t){return r||t.slice(1)}))}))).match(r),s=o.length,l=0;l<s;l+=1){var d=o[l],c=u[d],g=c&&c[0],h=c&&c[1];o[l]=h?{regex:g,parser:h}:d.replace(/^\[|\]$/g,"")}return function(e){for(var r={},t=0,n=0;t<s;t+=1){var a=o[t];if("string"==typeof a)n+=a.length;else{var i=a.regex,l=a.parser,d=e.slice(n),c=i.exec(d)[0];l.call(r,c),e=e.replace(c,"")}}return function(e){var r=e.afternoon;if(void 0!==r){var t=e.hours;r?t<12&&(e.hours+=12):12===t&&(e.hours=0),delete e.afternoon}}(r),r}}return function(e,r,t){t.p.customParseFormat=!0,e&&e.parseTwoDigitYear&&(o=e.parseTwoDigitYear);var n=r.prototype,a=n.parse;n.parse=function(e){var r=e.date,n=e.utc,o=e.args;this.$u=n;var s=o[1];if("string"==typeof s){var l=!0===o[2],d=!0===o[3],c=l||d,u=o[2];d&&(u=o[2]),i=this.$locale(),!l&&u&&(i=t.Ls[u]),this.$d=function(e,r,t){try{if(["x","X"].indexOf(r)>-1)return new Date(("X"===r?1e3:1)*e);var n=g(r)(e),a=n.year,i=n.month,o=n.day,s=n.hours,l=n.minutes,d=n.seconds,c=n.milliseconds,u=n.zone,h=new Date,b=o||(a||i?1:h.getDate()),m=a||h.getFullYear(),f=0;a&&!i||(f=i>0?i-1:h.getMonth());var y=s||0,p=l||0,v=d||0,x=c||0;return u?new Date(Date.UTC(m,f,b,y,p,v,x+60*u.offset*1e3)):t?new Date(Date.UTC(m,f,b,y,p,v,x)):new Date(m,f,b,y,p,v,x)}catch(e){return new Date("")}}(r,s,n),this.init(),u&&!0!==u&&(this.$L=this.locale(u).$L),c&&r!=this.format(s)&&(this.$d=new Date("")),i={}}else if(s instanceof Array)for(var h=s.length,b=1;b<=h;b+=1){o[1]=s[b-1];var m=t.apply(this,o);if(m.isValid()){this.$d=m.$d,this.$L=m.$L,this.init();break}b===h&&(this.$d=new Date(""))}else a.call(this,e)}}}();var la=L(sa.exports),da={exports:{}};da.exports=function(e,r,t){r.prototype.isBetween=function(e,r,n,a){var i=t(e),o=t(r),s="("===(a=a||"()")[0],l=")"===a[1];return(s?this.isAfter(i,n):!this.isBefore(i,n))&&(l?this.isBefore(o,n):!this.isAfter(o,n))||(s?this.isBefore(i,n):!this.isAfter(i,n))&&(l?this.isAfter(o,n):!this.isBefore(o,n))}};var ca=L(da.exports),ua={exports:{}};ua.exports=function(e,r){r.prototype.isSameOrAfter=function(e,r){return this.isSame(e,r)||this.isAfter(e,r)}};var ga=L(ua.exports),ha={exports:{}};ha.exports=function(e,r){r.prototype.isSameOrBefore=function(e,r){return this.isSame(e,r)||this.isBefore(e,r)}};var ba,ma,fa,ya=L(ha.exports),pa={exports:{}},va=L(pa.exports=(ba={year:0,month:1,day:2,hour:3,minute:4,second:5},ma={},function(e,r,t){var n,a=function(e,r,t){void 0===t&&(t={});var n=new Date(e),a=function(e,r){void 0===r&&(r={});var t=r.timeZoneName||"short",n=e+"|"+t,a=ma[n];return a||(a=new Intl.DateTimeFormat("en-US",{hour12:!1,timeZone:e,year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit",timeZoneName:t}),ma[n]=a),a}(r,t);return a.formatToParts(n)},i=function(e,r){for(var n=a(e,r),i=[],o=0;o<n.length;o+=1){var s=n[o],l=s.type,d=s.value,c=ba[l];c>=0&&(i[c]=parseInt(d,10))}var u=i[3],g=24===u?0:u,h=i[0]+"-"+i[1]+"-"+i[2]+" "+g+":"+i[4]+":"+i[5]+":000",b=+e;return(t.utc(h).valueOf()-(b-=b%1e3))/6e4},o=r.prototype;o.tz=function(e,r){void 0===e&&(e=n);var a=this.utcOffset(),i=this.toDate(),o=i.toLocaleString("en-US",{timeZone:e}),s=Math.round((i-new Date(o))/1e3/60),l=t(o,{locale:this.$L}).$set("millisecond",this.$ms).utcOffset(15*-Math.round(i.getTimezoneOffset()/15)-s,!0);if(r){var d=l.utcOffset();l=l.add(a-d,"minute")}return l.$x.$timezone=e,l},o.offsetName=function(e){var r=this.$x.$timezone||t.tz.guess(),n=a(this.valueOf(),r,{timeZoneName:e}).find((function(e){return"timezonename"===e.type.toLowerCase()}));return n&&n.value};var s=o.startOf;o.startOf=function(e,r){if(!this.$x||!this.$x.$timezone)return s.call(this,e,r);var n=t(this.format("YYYY-MM-DD HH:mm:ss:SSS"),{locale:this.$L});return s.call(n,e,r).tz(this.$x.$timezone,!0)},t.tz=function(e,r,a){var o=a&&r,s=a||r||n,l=i(+t(),s);if("string"!=typeof e)return t(e).tz(s);var d=function(e,r,t){var n=e-60*r*1e3,a=i(n,t);if(r===a)return[n,r];var o=i(n-=60*(a-r)*1e3,t);return a===o?[n,a]:[e-60*Math.min(a,o)*1e3,Math.max(a,o)]}(t.utc(e,o).valueOf(),l,s),c=d[0],u=d[1],g=t(c).utcOffset(u);return g.$x.$timezone=s,g},t.tz.guess=function(){return Intl.DateTimeFormat().resolvedOptions().timeZone},t.tz.setDefault=function(e){n=e}}));oa.extend(ca),oa.extend(ya),oa.extend(ga),oa.extend(la),oa.extend(va),function(e){e.generateDays=e=>{const r=e.startOf("month"),t=oa(r).startOf("week");return xa(t).map((e=>Da(e)))},e.generateDaysForCurrentWeek=e=>{const r=e.startOf("week");return Da(r)},e.generateMonths=e=>{const r=[];for(let t=0;t<12;t++){const n=e.month(t);r.push(oa(n))}return r},e.generateDecadeOfYears=e=>{const r=e.year(),t=10*Math.floor(r/10),n=e.year(t),a=[n.subtract(1,"year"),n];for(let e=1;e<11;e++)a.push(n.add(e,"year"));return a},e.getStartEndDecade=e=>{const r=10*Math.floor(+e.format("YYYY")/10);return{beginDecade:r,endDecade:+oa(`${r+9}-01-01`).format("YYYY")}},e.convertTo12HourFormat=e=>{const r=oa(e,"HH:mm");return r.isValid()?r.format("h:mm a"):""},e.isWithinRange=(e,r,t,n="day")=>!r&&!t||(r&&t?e.isBetween(r,t,n,"[]"):r?e.isSameOrAfter(r,n):e.isSameOrBefore(t,n)),e.isPreviousMonthWithinRange=(r,t)=>e.isWithinRange(r.subtract(1,"month"),t,void 0,"month"),e.isPreviousYearWithinRange=(r,t)=>e.isWithinRange(r.subtract(1,"year"),t,void 0,"year"),e.isPreviousDecadeWithinRange=(r,t)=>{const{beginDecade:n}=e.getStartEndDecade(r);return e.isWithinRange(r.year(n).subtract(1,"year"),t,void 0,"year")},e.isNextMonthWithinRange=(r,t)=>e.isWithinRange(r.add(1,"month"),void 0,t,"month"),e.isNextYearWithinRange=(r,t)=>e.isWithinRange(r.add(1,"year"),void 0,t,"year"),e.isNextDecadeWithinRange=(r,t)=>{const{endDecade:n}=e.getStartEndDecade(r);return e.isWithinRange(r.year(n).add(1,"year"),void 0,t,"year")},e.getWeekStartEnd=e=>({start:e.startOf("week").format("YYYY-MM-DD"),end:e.endOf("week").format("YYYY-MM-DD")}),e.getFixedRangeStartEnd=(e,r)=>({start:e.format("YYYY-MM-DD"),end:e.add(r-1,"day").format("YYYY-MM-DD")}),e.isDisabledDay=(r,t,n,a)=>{const i=e.isWithinRange(r,n?oa(n):void 0,a?oa(a):void 0),o=t&&t.includes(r.format("YYYY-MM-DD"));return!i||!!o}}(fa||(fa={}));const xa=e=>{const r=[e];for(let t=1;t<6;t++){const n=e.add(t,"week");r.push(n)}return r},Da=e=>{const r=[];for(let t=0;t<7;t++){const n=e.add(t,"day");r.push(n)}return r},wa=[1,3,5,7,8,10,12],Fa=[4,6,9,11];var $a,Ea,Ca,Ba;!function(e){e.clampDay=(r,t,n)=>{const a=parseInt(r),i=parseInt(t),o=parseInt(n);return 0==a?"1":wa.includes(i)?Math.min(a,31).toString():Fa.includes(i)?Math.min(a,30).toString():2===i?e.isLeapYear(o)?Math.min(a,29).toString():Math.min(a,28).toString():r},e.clampMonth=e=>{const r=parseInt(e);return 0==r?"1":r>12?"12":e},e.isLeapYear=e=>e%4==0&&e%100!=0||e%400==0,e.getTimeDiffInMinutes=(e,r,t="HH:mm")=>{const n=oa(e,t);return oa(r,t).diff(n,"minute")},e.toDayjs=e=>e?oa(e):oa(),e.addMinutesToTime=(e,r,t="HH:mm")=>oa(e,t).add(r,"minutes").format(t),e.isSame=(e,r,t="day")=>oa(e).isSame(oa(r),t)}($a||($a={})),function(e){e.isDateDisabled=(e,r)=>{const{disabledDates:t,minDate:n,maxDate:a}=r;return!!(e&&t&&t.length&&t.includes(e))||(!(!n||!oa(e).isBefore(n,"day"))||!(!a||!oa(e).isAfter(a,"day")))},e.sanitizeInput=e=>{if(e){if(oa(e).isValid())return e}return""}}(Ea||(Ea={})),function(e){e.generate=()=>Math.random().toString(36).substring(2,9)}(Ca||(Ca={})),function(e){e.transformWithSpaces=(e,r)=>{const t="(.{"+r+"})";return e.replace(/[^\dA-Z]/gi,"").replace(new RegExp(t,"g"),"$1 ").trim()},e.padValue=(e,r)=>{if("0"===e)return r?e:e.padStart(2,"0");if(""===e)return e;return parseInt(e).toString().padStart(2,"0")},e.shouldTruncateToTwoLines=(e,r)=>{const t=Math.floor(r/9);return e.length>=2*t||1===e.split(" ").length&&e.length>t},e.truncateOneLine=(e,r,t,n,a=8)=>{let i=0;r>t&&(i=Math.floor((r-t)/a));const o=n+i;if(o<e.length){const r=Math.floor(o/2);return e.substring(0,r)+" ... "+e.substring(e.length-r,e.length)}return e},e.truncateTwoLines=(e,r,t,n=1.2)=>{const a=Math.floor(2*r/(.6*t))*(2/n);if(e.length<=a)return e;const i=Math.floor(.6*a),o=Math.floor(.2*a);return`${e.substring(0,i)}...${e.substring(e.length-o)}`},e.getTextWidth=(r,t)=>{if("undefined"==typeof document)return 0;const n=(e.getTextWidth.canvas||(e.getTextWidth.canvas=document.createElement("canvas"))).getContext("2d");n.font=t;return n.measureText(r).width},e.maskValue=(e,t)=>{if(!e)return e;const{maskRange:n,unmaskRange:a,maskChar:i="•",maskRegex:o,maskTransformer:s}=t;if(s)return s(e);if(o)return e.replace(o,i);if(n){const{startIndex:t,endIndex:a}=r(n[0],n[1]);return e.substring(0,t)+i.repeat(e.substring(t,a+1).length)+e.substring(a+1)}if(a){const{startIndex:t,endIndex:n}=r(a[0],a[1]);return i.repeat(e.substring(0,t).length)+e.substring(t,n+1)+i.repeat(e.substring(n+1).length)}return e};const r=(e,r)=>e<r?{startIndex:e,endIndex:r}:{startIndex:r,endIndex:e},t=new Intl.PluralRules("en",{type:"ordinal"}),n=new Map([["one","st"],["two","nd"],["few","rd"],["other","th"]]);e.formatOrdinal=e=>{const r=t.select(e);return`${e}${n.get(r)}`}}(Ba||(Ba={}));const Sa=e=>{const[r,t]=o(e),n=i(e);return[r,h((e=>{n.current=e,t(e)}),[]),n]},Aa=y.div`
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
`,ka=y.div`
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
`,za=y(ka)`
    animation-delay: -0.45s;
`,Oa=y(ka)`
    animation-delay: -0.3s;
`,Ya=y(ka)`
    animation-delay: -0.15s;
`,Ta={collections:{default:{Button:{"button-radius":Nt.sm,"button-default-colour-bg":vt["bg-primary"],"button-default-colour-bg-hover":vt["bg-primary-hover"],"button-default-colour-text":vt["text-inverse"],"button-secondary-colour-border":vt["border-primary"],"button-secondary-colour-text":vt["text-primary"],"button-light-colour-text":vt["text-primary"],"button-link-colour-text":vt["text-primary"]}},pa:{Button:{"button-radius":Nt.full,"button-default-colour-bg":vt["bg-primary"],"button-default-colour-bg-hover":vt["bg-primary-hover"],"button-default-colour-text":vt["text-inverse"],"button-secondary-colour-border":vt["border-primary"],"button-secondary-colour-text":vt["text-primary"],"button-light-colour-text":vt["text-primary"],"button-link-colour-text":vt["text-primary"]}}},defaultValue:"default"},ja=(e,r)=>t=>{var n,a;const i=t.theme,o=lt(Ta,null==i?void 0:i.componentScheme);return _a((null===(a=null===(n=null==i?void 0:i.componentOverrides)||void 0===n?void 0:n[e])||void 0===a?void 0:a[r])||o[e][r],t)},_a=(e,r)=>{switch(typeof e){case"function":return e(r);case"number":return e+"px";case"string":return e}},Ra=ja("Button","button-radius"),Ia=ja("Button","button-default-colour-bg"),La=ja("Button","button-default-colour-bg-hover"),Ha=ja("Button","button-default-colour-text"),Wa=ja("Button","button-secondary-colour-border"),Na=ja("Button","button-secondary-colour-text"),Pa=ja("Button","button-light-colour-text"),Va=ja("Button","button-link-colour-text"),Ua=y.button`
    padding: ${Xt["spacing-8"]} ${Xt["spacing-16"]};
    min-width: 4rem;
    border: ${qt["width-010"]} ${qt.solid} transparent;
    transition: all ${Jt["duration-250"]} ${Jt["ease-default"]};
    border-radius: ${Ra};
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;

    // -----------------------------------------------------------------------------
    // BUTTON STYLE + TEXT COLOR
    // -----------------------------------------------------------------------------
    ${e=>{switch(e.$buttonStyle){case"secondary":return p`
                    background-color: ${Zt.Primitive.white};
                    border-color: ${e.$buttonIsDanger?Zt["border-error-strong"]:Wa};

                    color: ${e.$buttonIsDanger?Zt["text-error"]:Na};

                    &:hover,
                    &:active {
                        background-color: ${Zt["bg-hover-neutral"]};
                    }
                `;case"light":return p`
                    background-color: ${Zt.bg};
                    border-color: ${Zt.border};

                    color: ${e.$buttonIsDanger?Zt["text-error"]:Pa};

                    &:hover,
                    &:active {
                        background-color: ${Zt["bg-hover-neutral"]};
                    }
                `;case"link":return p`
                    background-color: transparent;

                    color: ${e.$buttonIsDanger?Zt["text-error"]:Va};
                    &:hover,
                    &:active {
                        background-color: ${Zt["bg-hover-neutral"]};
                    }
                `;case"disabled":return p`
                    background-color: ${Zt["bg-disabled"]};

                    cursor: not-allowed;

                    &:hover {
                        box-shadow: none;
                    }

                    color: ${Zt["text-disabled"]};
                `;default:return p`
                    background-color: ${e.$buttonIsDanger?Zt["bg-error-strong"]:Ia};};

                    ${en.MaxWidth.sm} {
                        width: 100%;
                    }

                    color: ${Ha}};

                    &:hover,
                    &:active {
                        background-color: ${e.$buttonIsDanger?Zt["bg-error-strong-hover"]:La}
                        };
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
                    ${Kt["heading-md-semibold"]}

                    ${en.MaxWidth.xxs} {
                        height: auto;
                    }
                `;default:return p`
                    height: 3rem;
                    ${Kt["heading-xs-semibold"]}

                    ${en.MaxWidth.xxs} {
                        height: auto;
                    }
                `}}}
`,Za=y((({color:r,className:n,size:a})=>e(Aa,{className:n,$size:a,$color:r,"data-testid":"component-loading-spinner",children:[t(ka,{id:"inner1"}),t(za,{id:"inner2"}),t(Oa,{id:"inner3"}),t(Ya,{id:"inner4"})]})))`
    margin-right: 0.5rem;
`,Ka=(r,n)=>{const{children:a,disabled:i=!1,loading:o=!1,styleType:s="default",danger:l=!1}=r,d=R(r,["children","disabled","loading","styleType","danger"]),c={$buttonStyle:i?"disabled":s,$buttonSizeStyle:"default",$buttonIsDanger:l};return e(Ua,Object.assign({ref:n,"data-testid":d["data-testid"]||"button",disabled:i},c,d,{children:[o&&t(Za,{}),t("span",{children:a})]}))};Ka.displayName="Button.Default";const Ja=(r,n)=>{const{children:a,disabled:i=!1,loading:o=!1,styleType:s="default",danger:l=!1}=r,d=R(r,["children","disabled","loading","styleType","danger"]),c={$buttonStyle:i?"disabled":s,$buttonSizeStyle:"small",$buttonIsDanger:l};return e(Ua,Object.assign({ref:n,"data-testid":d["data-testid"]||"button",disabled:i},c,d,{children:[o&&t(Za,{}),t("span",{children:a})]}))};Ja.displayName="Button.Small";const qa=(r,n)=>{const{children:a,disabled:i=!1,loading:o=!1,styleType:s="default",danger:l=!1}=r,d=R(r,["children","disabled","loading","styleType","danger"]),c={$buttonStyle:i?"disabled":s,$buttonSizeStyle:"large",$buttonIsDanger:l};return e(Ua,Object.assign({ref:n,"data-testid":d["data-testid"]||"button",disabled:i},c,d,{children:[o&&t(Za,{}),t("span",{children:a})]}))};qa.displayName="Button.Large";const Xa={Default:a.forwardRef(Ka),Small:a.forwardRef(Ja),Large:a.forwardRef(qa)},Ga=y.button`
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
                background-color: ${Zt["bg-hover-neutral"]};
            `}
    }
`,Qa=a.forwardRef(((e,r)=>{var{children:n,focusHighlight:a=!0,focusOutline:i="none",type:o="button"}=e,s=R(e,["children","focusHighlight","focusOutline","type"]);return t(Ga,Object.assign({ref:r,$outline:i,$highlight:a,type:o},s,{children:n}))})),ei=p`
    color: ${Zt.icon};
    height: 1rem;
    width: 1rem;
`,ri=y(j)`
    ${ei}
`,ti=y(_)`
    ${ei}
`,ni=y(f)`
    ${ei}
    transition: transform 250ms ease-in-out;
    margin-left: 0.5rem;
`,ai=y.div`
    position: relative;
    width: 100%;
    display: flex;
    flex-direction: column;

    padding-top: var(--vertical-inset);
    padding-bottom: var(--vertical-inset);
`,ii=y.div`
    display: flex;
    flex: 1;
    position: relative;
`,oi=y.div`
    isolation: isolate;
    width: 100%;

    padding-left: var(--horizontal-inset);
    padding-right: var(--horizontal-inset);
`,si=y.div`
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    background: ${Zt.bg};

    padding-left: var(--horizontal-inset);
    padding-right: var(--horizontal-inset);

    ${e=>{if(!e.$visible)return p`
                display: none;
            `}}
`,li=y.div`
    display: flex;
    justify-content: space-between;

    padding-left: var(--header-horizontal-inset, var(--horizontal-inset));
    padding-right: var(--header-horizontal-inset, var(--horizontal-inset));
    padding-bottom: var(--header-bottom-spacing);
`,di=y.div`
    display: flex;
`,ci=y.button`
    border: none;
    display: flex;
    align-items: center;
    padding: 0.5rem;
    background: transparent;
    cursor: pointer;

    ${e=>!1===e.$visible?p`
                display: none;
            `:e.$expanded?p`
                ${ni} {
                    transform: rotate(180deg);
                }
            `:void 0};
`,ui=y.span`
    ${Kt["body-md-regular"]}
    color: ${Zt.text};
`,gi=y.div`
    display: flex;
`,hi=y(Qa)`
    margin: auto 0;
    padding: 0.75rem;

    :disabled {
        cursor: not-allowed;
    }
`,bi=y.div`
    display: flex;
    gap: 0.5rem;
    margin-top: 1.5rem;

    padding-left: var(--horizontal-inset);
    padding-right: var(--horizontal-inset);
`,mi=y(Xa.Small)`
    flex: 1;
`,fi=y.div`
    width: 100%;
    height: 100%;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(6, 2.5rem);
    align-content: center;
    justify-content: center;

    gap: 0.5rem 0;
`,yi=y.div`
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
    color: ${Zt.text};
    cursor: default;

    // cursor style
    ${e=>e.$interactive?p`
                cursor: pointer;
            `:e.$disabledDisplay?p`
                cursor: not-allowed;
            `:void 0}

    // background, border and text styles
    ${({$variant:e,$interactive:r,$disabledDisplay:t})=>"selected-month"===e?p`
                background: ${Zt["bg-selected"]};
                border-color: ${Zt["border-selected"]};
                color: ${Zt["text-selected"]};
                font-weight: ${Kt.Spec["weight-semibold"]};

                ${r&&p`
                    &:hover {
                        background: ${Zt["bg-selected-hover"]};
                        border-color: ${Zt["border-selected-hover"]};
                        color: ${Zt["text-selected-hover"]};
                    }
                `}
            `:"current-month"===e?p`
                color: ${Zt["text-primary"]};
                font-weight: ${Kt.Spec["weight-semibold"]};
            `:t?p`
                color: ${Zt["text-disabled-subtlest"]};
            `:void 0}

    // hover styles
    ${({$variant:e,$interactive:r})=>{if(r)return"selected-month"===e?p`
                &:hover {
                    background: ${Zt["bg-selected-hover"]};
                    border-color: ${Zt["border-selected-hover"]};
                    color: ${Zt["text-selected-hover"]};
                    font-weight: ${Kt.Spec["weight-semibold"]};
                }
            `:p`
            &:hover {
                background: ${Zt["bg-hover"]};
                color: ${Zt["text-hover"]};
                font-weight: ${Kt.Spec["weight-semibold"]};
            }
        `}}
`,pi=({calendarDate:e,currentFocus:r,selectedStartDate:n,selectedEndDate:a,viewCalendarDate:s,isNewSelection:l,minDate:d,maxDate:c,allowDisabledSelection:g,onMonthSelect:h})=>{const m=b((()=>fa.generateMonths(oa(e))),[e]),f=i(new Array(m.length).fill(null)),[y,p]=o(m.findIndex((e=>e.isSame(s,"month"))));u((()=>{var e;null!==y&&(null===(e=f.current[y])||void 0===e||e.focus())}),[y,m]);const v=(e,r)=>{r||h(e)},x=e=>{const t="start"===r&&a&&e.isAfter(a,"month")&&l,i="end"===r&&n&&e.isBefore(n,"month")&&l;return!(!t&&!i)},D=e=>{const r=e.format("MMMM"),t=(n=e,!fa.isWithinRange(n,d?oa(d):void 0,c?oa(c):void 0,"month"));var n;const a=s.isSame(e,"month"),i=a?"selected-month":oa().isSame(e,"month")?"current-month":"default",o=s.isSame(e,"year")?a?0:-1:0===e.month()?0:-1;return{disabledDisplay:t||x(e),interactive:!t||g,month:r,variant:i,tabIndex:o}};return m.length?t(fi,{onBlur:()=>{p(null)},children:m.map(((e,r)=>{const{disabledDisplay:n,interactive:a,variant:i,month:o,tabIndex:s}=D(e);return t(yi,{ref:e=>f.current[r]=e,tabIndex:s,role:"button","aria-disabled":!a,"aria-selected":"selected-month"===i,$variant:i,$disabledDisplay:n,$interactive:a,onClick:()=>v(e,!a),onKeyDown:r=>{((e,r,t)=>{const n=e.key;let a;const i=m.indexOf(r);switch(n){case"Enter":case" ":e.preventDefault(),v(r,t);break;case"ArrowLeft":a=i-1;break;case"ArrowRight":a=i+1;break;case"ArrowUp":a=i-2;break;case"ArrowDown":a=i+2}void 0!==a&&a>=0&&a<m.length&&(e.preventDefault(),p(a))})(r,e,!a)},children:o},o)}))}):null},vi=y.div`
    width: 100%;
    height: 100%;
    display: grid;
    align-content: center;
    align-items: center;
    grid-template-columns: repeat(3, 1fr);
`,xi=y.div`
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
    color: ${Zt.text};
    cursor: default;

    // cursor style
    ${({$interactive:e,$disabledDisplay:r})=>e?p`
                cursor: pointer;
            `:r?p`
                cursor: not-allowed;
            `:void 0}

    // background, border and text styles
    ${({$variant:e,$interactive:r,$disabledDisplay:t})=>"selected-year"===e?p`
                background: ${Zt["bg-selected"]};
                border-color: ${Zt["border-selected"]};
                color: ${Zt["text-selected"]};
                font-weight: ${Kt.Spec["weight-semibold"]};

                ${r&&p`
                    &:hover {
                        background: ${Zt["bg-selected-hover"]};
                        border-color: ${Zt["border-selected-hover"]};
                        color: ${Zt["text-selected-hover"]};
                    }
                `}
            `:"current-year"===e?p`
                color: ${Zt["text-primary"]};
                font-weight: ${Kt.Spec["weight-semibold"]};
            `:"other-decade"===e||t?p`
                color: ${Zt["text-disabled-subtlest"]};
            `:void 0}

    // hover styles
    ${({$variant:e,$interactive:r})=>{if(r)return"selected-year"===e?p`
                &:hover {
                    background: ${Zt["bg-selected-hover"]};
                    border-color: ${Zt["border-selected-hover"]};
                    color: ${Zt["text-selected-hover"]};
                    font-weight: ${Kt.Spec["weight-semibold"]};
                }
            `:p`
            &:hover {
                background: ${Zt["bg-hover"]};
                color: ${Zt["text-hover"]};
                font-weight: ${Kt.Spec["weight-semibold"]};
            }
        `}}
`,Di=({calendarDate:e,currentFocus:r,selectedStartDate:n,selectedEndDate:a,viewCalendarDate:s,isNewSelection:l,minDate:d,maxDate:c,allowDisabledSelection:g,onYearSelect:h,setCalendarDate:m})=>{const f=b((()=>fa.generateDecadeOfYears(oa(e))),[e]),y=i(new Array(f.length).fill(null)),[p,v]=o(e);u((()=>{var e;if(null===p)return;const r=f.findIndex((e=>e.isSame(p,"year")));r>=0&&(null===(e=y.current[r])||void 0===e||e.focus())}),[p,f]);const x=(e,r)=>{r||h(e)},D=e=>{const t="start"===r&&a&&e.isAfter(a,"year")&&l,i="end"===r&&n&&e.isBefore(n,"year")&&l;return!(!t&&!i)},w=e=>{const r=f.indexOf(e),t=[0,11].includes(r),n=e.year(),a=(i=e,!fa.isWithinRange(i,d?oa(d):void 0,c?oa(c):void 0,"year"));var i;const o=t?"other-decade":s.isSame(e,"year")?"selected-year":oa().isSame(e,"year")?"current-year":"default",l=s.year()>=f[0].year()&&s.year()<=f[f.length-1].year()?"selected-year"===o?0:-1:1===r?0:-1;return{disabledDisplay:a||D(e),interactive:!a||g,year:n,variant:o,tabIndex:l}};return f.length?t(vi,{onBlur:()=>{v(null)},children:f.map(((e,r)=>{const{disabledDisplay:n,interactive:a,variant:i,year:o,tabIndex:s}=w(e);return t(xi,{ref:e=>{y.current[r]=e},tabIndex:s,role:"button","aria-label":`${o}`,"aria-disabled":!a,"aria-selected":"selected-year"===i,$variant:i,$disabledDisplay:n,$interactive:!!a,onClick:()=>x(e,!a),onKeyDown:r=>{((e,r,t)=>{let n;switch(e.key){case"Enter":case" ":e.preventDefault(),x(r,t);break;case"ArrowLeft":n=r.subtract(1,"year");break;case"ArrowRight":n=r.add(1,"year");break;case"ArrowUp":n=r.subtract(3,"year");break;case"ArrowDown":n=r.add(3,"year")}void 0!==n&&(e.preventDefault(),m(n),v(n))})(r,e,!a)},children:o},o)}))}):null},wi=a.forwardRef(((n,a)=>{var{children:s,initialCalendarDate:l,minDate:d,maxDate:c,currentFocus:g,selectedStartDate:h,selectedEndDate:b,selectWithinRange:f,dynamicHeight:y=!1,allowDisabledSelection:p,onCalendarDateChange:v,withButton:x,doneButtonDisabled:D,onDismiss:w,showNavigationHeader:F=!0,getLeftArrowDate:$,getRightArrowDate:E,isLeftArrowDisabled:C,isRightArrowDisabled:B,getMonthHeaderLabel:S,getYearHeaderLabel:A,isFocusable:M=!1}=n,k=R(n,["children","initialCalendarDate","minDate","maxDate","currentFocus","selectedStartDate","selectedEndDate","selectWithinRange","dynamicHeight","allowDisabledSelection","onCalendarDateChange","withButton","doneButtonDisabled","onDismiss","showNavigationHeader","getLeftArrowDate","getRightArrowDate","isLeftArrowDisabled","isRightArrowDisabled","getMonthHeaderLabel","getYearHeaderLabel","isFocusable"]);const[z,O]=o($a.toDayjs(l)),[Y,T]=o($a.toDayjs(l)),[j,_]=o("default"),I=i(null),L=i(null),H=i(null),W=i(null);m(a,(()=>({defaultView(){_("default")},resetView(){const e=$a.toDayjs(l);O(e),T(e),_("default")},setCalendarDate(e){const r=$a.toDayjs(e);O(r),T(r)}}))),u((()=>{const e=$a.toDayjs(l);O(e),T(e)}),[l]),u((()=>{X(Y)}),[Y]);const N=()=>{var e;"month-options"!==j?(_("month-options"),null===(e=H.current)||void 0===e||e.focus()):(_("default"),O(Y))},P=e=>{var r;if("Enter"!==e.key&&" "!==e.key||(e.preventDefault(),N(),null===(r=W.current)||void 0===r||r.focus()),"ArrowUp"===e.key||"ArrowDown"===e.key){e.preventDefault();const r="ArrowUp"===e.key?z.subtract(1,"month"):z.add(1,"month");if(!fa.isWithinRange(r,d?oa(d):void 0,c?oa(c):void 0,"month"))return;O(r),"default"===j&&T(r)}},V=()=>{"default"!==j?(_("default"),O(Y)):_("year-options")},U=e=>{if("Enter"!==e.key&&" "!==e.key||(e.preventDefault(),V()),"ArrowUp"===e.key||"ArrowDown"===e.key){e.preventDefault();let r;if(r="year-options"===j?"ArrowUp"===e.key?z.subtract(10,"year"):z.add(10,"year"):"ArrowUp"===e.key?z.subtract(1,"year"):z.add(1,"year"),!fa.isWithinRange(r,d?oa(d):void 0,c?oa(c):void 0,"year"))return;O(r),"default"===j&&T(r)}},Z=()=>{var e;null===(e=H.current)||void 0===e||e.focus();const r=$?$(z):z.subtract(1,"month");switch(j){case"default":T(r),O(r);break;case"month-options":O((e=>e.subtract(1,"year")));break;case"year-options":O((e=>e.subtract(10,"year")))}},K=()=>{var e;null===(e=H.current)||void 0===e||e.focus();const r=E?E(z):z.add(1,"month");switch(j){case"default":T(r),O(r);break;case"month-options":O((e=>e.add(1,"year")));break;case"year-options":O((e=>e.add(10,"year")))}},J=e=>{O(e),T(e),x||_("default")},q=()=>{const e=$a.toDayjs(l);O(e),T(e),"default"===j?G("reset"):_("default")},X=e=>{v&&v(e)},G=e=>{w&&w(e)},Q=()=>{if(!d||p)return!1;const e=oa(d);return"month-options"===j?!fa.isPreviousYearWithinRange(z,e):"year-options"===j?!fa.isPreviousDecadeWithinRange(z,e):C?C(z):!fa.isPreviousMonthWithinRange(z,e)},ee=()=>{if(!c||p)return!1;const e=oa(c);return"month-options"===j?!fa.isNextYearWithinRange(z,e):"year-options"===j?!fa.isNextDecadeWithinRange(z,e):B?B(z):!fa.isNextMonthWithinRange(z,e)},re=()=>{const n=S?S(z):z.format("MMM"),a=oa(n,"MMM").format("MMMM"),i=(()=>{if("year-options"===j){const{beginDecade:e,endDecade:r}=fa.getStartEndDecade(z);return`${e} to ${r}`}return A?A(z):z.format("YYYY")})(),o={"month-options":`${i}, Close month selection`,"year-options":`${i}, Close year selection`,default:`${i}, Select year`};return e(r,{children:[e(ci,{"aria-label":`${a}, Select month`,type:"button",$expanded:"month-options"===j,$visible:"default"===j,id:"month-dropdown",onClick:N,onKeyDown:P,tabIndex:M?0:-1,children:[t(ui,{children:n}),t(ni,{})]}),e(ci,{ref:W,"aria-label":o[j],type:"button",$expanded:"default"!==j,id:"year-dropdown",onClick:V,onKeyDown:U,tabIndex:M?0:-1,children:[t(ui,{children:i}),t(ni,{})]})]})},te=()=>{switch(j){case"month-options":return t(pi,{calendarDate:z,currentFocus:g,minDate:d,maxDate:c,selectedStartDate:h,selectedEndDate:b,viewCalendarDate:Y,isNewSelection:!!f,onMonthSelect:J,allowDisabledSelection:p});case"year-options":return t(Di,{setCalendarDate:O,calendarDate:z,currentFocus:g,minDate:d,maxDate:c,selectedStartDate:h,selectedEndDate:b,viewCalendarDate:Y,isNewSelection:!!f,onYearSelect:J,allowDisabledSelection:p});default:return null}};return e(ai,Object.assign({ref:H,"data-id":"calendar-container","data-testid":"calendar-container","aria-label":Y.format("MMMM, YYYY"),role:"group"},k,{children:[F&&(()=>{const r={"month-options":"year","year-options":"decade",default:"month"}[j];return e(li,{"data-id":"calendar-header","data-testid":"calendar-header",children:[t(di,{children:re()}),e(gi,{children:[t(hi,{"aria-label":`Previous ${r}`,"data-testid":"left-arrow-btn",disabled:Q(),focusHighlight:!1,focusOutline:"browser",onClick:Z,tabIndex:M?0:-1,children:t(ri,{})}),t(hi,{"aria-label":`Next ${r}`,"data-testid":"right-arrow-btn",disabled:ee(),focusHighlight:!1,focusOutline:"browser",onClick:K,tabIndex:M?0:-1,children:t(ti,{})})]})]})})(),t(ii,{children:(()=>{const n="function"==typeof s?s({calendarDate:Y,currentView:j}):s;if(y)return e(r,{children:["default"===j&&n,te()]});{const a="default"===j;return e(r,{children:[t(oi,{inert:a?void 0:"",children:n}),t(si,{$visible:!a,children:te()})]})}})()}),(()=>{if(!x)return;const r=!!("default"===j)&&D;return e(bi,{children:[t(mi,{ref:L,"data-testid":"cancel-button",styleType:"light",type:"button",onClick:q,children:"Cancel"}),t(mi,{"data-testid":"done-button",ref:I,type:"button",onClick:()=>{r||(O(Y),"default"===j?G("confirmed"):_("default"))},disabled:r,children:"Done"})]})})()]}))})),Fi=y.div`
    width: 100%;
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    row-gap: 0.25rem;
`,$i=y.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 2.5rem;
    pointer-events: none;
    user-select: none;

    ${Kt["body-sm-semibold"]};
    color: ${Zt.text};
`,Ei=y.div`
    grid-column: 1 / -1;
    display: flex;
`,Ci=e=>{let r=Zt.bg,t="transparent";switch(e.$type){case"hover-subtle":r=Zt["bg-hover"],t=Zt["bg-hover"];break;case"hover":r=Zt["bg-hover-strong"],t=Zt["bg-hover-strong"];break;case"hover-outline":r=Zt["bg-hover-subtle"],t=Zt["border-hover"];break;case"selected-outline":r=Zt["bg-selected"],t=Zt["border-selected"];break;case"selected-outline-subtle":r=Zt["bg-selected"],t=Zt["border-selected-subtle"];break;case"selected-hover":r=Zt["bg-selected-hover"];break;case"selected-hover-outline":r=Zt["bg-selected-hover"],t=Zt["border-selected-hover"]}return{color:r,borderColor:t}},Bi=y.div`
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    width: 100%;
    height: 2.5rem;
`,Si=y.div`
    position: absolute;
    height: 2.5rem;
    width: 50%;
    transition: ${Jt["duration-150"]} ${Jt["ease-default"]};
    border: ${qt["width-010"]} ${qt.solid} transparent;
    border-left: none;
    border-right: none;

    ${e=>{if(!e.$type)return;const{color:r,borderColor:t}=Ci(e);return p`
            background-color: ${r};
            background-clip: border-box;
            border-top-color: ${t};
            border-bottom-color: ${t};
        `}}
`,Ai=y(Si)`
    left: 0;
`,Mi=y(Si)`
    right: 0;
`,ki=y.div`
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

    ${e=>{if(e.$type){const{color:r,borderColor:t}=Ci(e);return p`
                background-color: ${r};
                background-clip: content-box;
                border-color: ${t};
            `}}}
`,zi=y(ki)`
    right: calc(50% - 1.25rem);
    clip-path: inset(-3px 1.25rem -3px -3px);
`,Oi=y(ki)`
    left: calc(50% - 1.25rem);
    clip-path: inset(-3px -3px -3px 1.25rem);
`,Yi=y.span`
    position: absolute;
    top: 0;
    bottom: 0;
    z-index: 2;
    cursor: ${e=>e.$interactive?"pointer":null===e.$interactive?"default":"not-allowed"};
`,Ti=y.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 2.5rem;
    width: 2.5rem;
    ${Kt["body-md-regular"]}
    transition: ${Jt["duration-150"]} ${Jt["ease-default"]};

    pointer-events: ${e=>e.$interactive||null===e.$interactive?"auto":"none"};

    ${e=>{const{$disabled:r,$type:t}=e;if(r)return"hidden"===t?p`
                    visibility: hidden;
                `:p`
                color: ${Zt["text-disabled-subtlest"]};
            `;switch(t){case"selected":return p`
                    font-weight: ${Kt.Spec["weight-semibold"]};
                    color: ${Zt["text-selected"]};
                `;case"selected-hover":return p`
                    font-weight: ${Kt.Spec["weight-semibold"]};
                    color: ${Zt["text-selected-hover"]};
                `;case"current":return p`
                    font-weight: ${Kt.Spec["weight-semibold"]};
                    color: ${Zt["text-primary"]};
                `;case"hover":return p`
                    font-weight: ${Kt.Spec["weight-semibold"]};
                    color: ${Zt["text-hover"]};
                `;case"unavailable":return p`
                    color: ${Zt["text-disabled-subtlest"]};
                `;case"hidden":return p`
                    visibility: hidden;
                `;default:return p`
                    color: ${Zt.text};
                `}}}

    &:focus {
        outline: none;
    }
`,ji=y.div`
    position: absolute;
    width: 4px;
    height: 4px;
    background-color: currentColor;
    border-radius: 50%;
    bottom: 4px;
`,_i=({bgLeft:r,bgRight:n,circleLeft:a,circleRight:o,labelType:s,disabled:l,interactive:d,currentDateIndicator:c,date:g,onSelect:h,onHover:b,onFocus:m,onHoverEnd:f,onKeyDown:y,tabIndex:p=-1,role:v="button",focusDate:x})=>{const D=oa().isSame(g,"day"),w=`${g.format("D MMMM YYYY dddd")}, ${l?"Unavailable":"Available"}`,F=!!x&&x.isSame(g,"day"),$=i(null);u((()=>{var e;F&&$.current&&(null===(e=$.current)||void 0===e||e.focus())}),[F]);return e(Bi,{children:[t(Ai,{$type:r}),t(zi,{$type:a}),t(Mi,{$type:n}),t(Oi,{$type:o}),t(Yi,{$interactive:d,children:e(Ti,{ref:$,tabIndex:p,role:v,"aria-label":w,"aria-disabled":!d,"aria-selected":"selected"===s||"selected-hover"===s,$type:s,$disabled:l,$interactive:d,onClick:()=>{h(g)},onKeyDown:e=>{y&&y(e)},onMouseEnter:()=>{b(g)},onMouseLeave:()=>{f&&f(g)},onFocus:()=>{m&&m(g)},children:[g.date(),c&&D&&t(ji,{$disabled:l})]})})]})},Ri=({date:e,calendarDate:r,startDate:n,endDate:a,currentFocus:i,hoverDate:o,focusDate:s,minDate:l,maxDate:d,disabledDates:c,allowDisabledSelection:u,isNewSelection:g,showActiveMonthDaysOnly:h,onSelect:b,onHover:m,onFocus:f,setFocusCell:y,tabIndex:p=-1})=>{const v=fa.isDisabledDay(e,c,l,d),x=!v||u,D=()=>{b(e,!x)},w=()=>{const e=oa(o),r=e.isBefore(a,"day"),t=e.isAfter(n,"day");let s,l,d,c;return"start"===i&&a&&r&&(n&&t?(d=o,c=a):(s=o,l=n||a)),"end"===i&&n&&t&&(a&&r?(d=n,c=o):(s=a||n,l=o)),{hoverStart:s,hoverEnd:l,overlapStart:d,overlapEnd:c}},F={date:e,calendarDate:r,disabled:v,interactive:x,currentDateIndicator:!0,onSelect:D,onHover:()=>{m(e.format("YYYY-MM-DD"),!x)},onFocus:()=>{f(e.format("YYYY-MM-DD"))},onKeyDown:r=>{const t=r.key;if("Enter"===t||" "===t)return r.preventDefault(),void(x&&D());(r=>{let t;const n={ArrowLeft:()=>e.subtract(1,"day"),ArrowRight:()=>e.add(1,"day"),ArrowUp:()=>e.subtract(7,"day"),ArrowDown:()=>e.add(7,"day"),Home:()=>e.startOf("week"),End:()=>e.endOf("week"),PageUp:()=>r.shiftKey?e.subtract(1,"year"):e.add(1,"month"),PageDown:()=>r.shiftKey?e.subtract(1,"year"):e.add(1,"month")}[r.key];n&&(r.preventDefault(),t=n(),y(t.format("YYYY-MM-DD")))})(r)},role:"gridcell",focusDate:oa(s),tabIndex:p};return t(_i,Object.assign({},F,(()=>{const t={};if(r.month()!==e.month())t.labelType=h?"hidden":"unavailable";else if(oa().isSame(e,"day")&&!v)t.labelType="current";else if(g){const r="end"===i&&n&&e.isBefore(n),o="start"===i&&a&&e.isAfter(a);(r||o)&&(t.labelType="unavailable")}return t})(),(()=>{const t={},i=e.isSame(n,"day"),o=e.isSame(a,"day");return h&&r.month()!==e.month()?(t.labelType="hidden",t):((n&&i||a&&o)&&(t.labelType="selected",t.circleLeft="selected-outline",t.circleRight="selected-outline"),n&&a&&e.isBetween(n,a,"day","[]")&&(t.labelType="selected",i||(t.bgLeft="selected-outline-subtle"),o||(t.bgRight="selected-outline-subtle")),t)})(),(()=>{if(!o)return{};const r={},t=e.isSame(o,"day"),{hoverStart:i,hoverEnd:s,overlapStart:l,overlapEnd:d}=w();if(t){const t=e.isSame(n,"day"),i=e.isSame(a,"day");t||i?(r.labelType="selected-hover",r.circleLeft="selected-hover-outline",r.circleRight="selected-hover-outline"):(r.labelType="hover",r.circleLeft="hover",r.circleRight="hover")}if(i&&s){if(e.isBetween(i,s,"day","[]")){const t=e.isSame(i,"day"),n=e.isSame(s,"day");t||(r.labelType="hover",r.bgLeft="hover-outline"),n||(r.labelType="hover",r.bgRight="hover-outline")}return r}return l&&d?(e.isBetween(l,d,"day","[]")&&t&&(r.labelType="selected-hover",r.circleLeft="selected-hover",r.circleRight="selected-hover"),r):r})()))};oa.extend(ca);const Ii=({calendarDate:r,currentFocus:n,disabledDates:a,selectedStartDate:s,selectedEndDate:l,onSelect:d,onHover:c,isNewSelection:g,minDate:m,maxDate:f,allowDisabledSelection:y,showActiveMonthDaysOnly:p,setCalendarDate:v})=>{const x=i(null);u((()=>{if(x.current){const e=x.current;x.current=null,C(e)}}),[r]);const D=h((()=>s&&oa(s).isSame(r,"month")?oa(s):l&&oa(l).isSame(r,"month")?oa(l):oa().isSame(r,"month")?oa():m&&r.isSame(oa(m),"month")?oa(m):oa(r).startOf("month")),[s,r,l,m]),w=e=>{const t=oa(e);if(fa.isWithinRange(t,m?oa(m):void 0,f?oa(f):void 0)){if(!t.isSame(r,"month"))return null==v||v(e),void(x.current=e);C(e)}},F=b((()=>fa.generateDays(r)),[r]),$=b((()=>D()),[D]),[E,C]=o(""),[B,S]=o(""),A=(e,r)=>{r&&!y||d(e)},M=(e,r)=>{r&&!y||(S(e),c(e))},k=e=>{S(e),c(e)},z=()=>{S(""),c("")};return e(Fi,{role:"grid","aria-label":"Date grid","data-testid":"calendar-content",onBlur:e=>{e.currentTarget.contains(e.relatedTarget)||(C(""),S(""),c(""))},children:[F[0].map(((e,r)=>t($i,{"aria-hidden":!0,children:oa(e).format("ddd")},`week-day-${r}`))),F.map(((e,i)=>t(Ei,{role:"row","aria-label":`Week ${i+1}`,onMouseLeave:z,children:e.map(((e,i)=>t(Ri,{date:e,calendarDate:r,startDate:s,endDate:l,hoverDate:B,focusDate:E,currentFocus:n,minDate:m,maxDate:f,disabledDates:a,allowDisabledSelection:y,isNewSelection:g,showActiveMonthDaysOnly:p,onSelect:A,onHover:M,onFocus:k,setFocusCell:w,tabIndex:e.isSame($,"day")?0:-1},`day-${i}`)))},i)))]})},Li=({date:e,calendarDate:r,selectedDate:n,hoverDate:a,minDate:i,maxDate:o,disabledDates:s,allowDisabledSelection:l,numberOfDays:d=1,onSelect:c,onHover:u})=>{const g=fa.isDisabledDay(e,s,i,o),h=!g||l,{start:b,end:m}=n?fa.getFixedRangeStartEnd($a.toDayjs(n),d):{start:void 0,end:void 0},{start:f,end:y}=a?fa.getFixedRangeStartEnd($a.toDayjs(a),d):{start:void 0,end:void 0},p=!!n&&e.isBetween(b,m,"day","[]"),v=!!a&&e.isBetween(f,y,"day","[]"),x=p&&e.isSame(b,"day")||v&&e.isSame(f,"day"),D=p&&e.isSame(m,"day")||v&&e.isSame(y,"day"),w=(e,r,t,n)=>{t?e.circleLeft=r:e.bgLeft=r,n?e.circleRight=r:e.bgRight=r},F={date:e,calendarDate:r,disabled:g,interactive:h,currentDateIndicator:!0,onSelect:()=>{c(e,!h)},onHover:()=>{u(e.format("YYYY-MM-DD"),!h)}};return t(_i,Object.assign({},F,(()=>{const t={};return p||v?t.labelType="selected":r.month()!==e.month()?t.labelType="unavailable":oa().isSame(e,"day")&&!g&&(t.labelType="current"),t})(),(()=>{const r={},t=e.format("YYYY-MM-DD");return v&&w(r,"hover",t===f,t===y),p&&w(r,"selected-outline",t===b,t===m),p&&v&&(w(r,"selected-hover-outline",x,D),t===f&&t!==b&&(r.circleLeft="selected-hover")),r})()))},Hi=({calendarDate:r,disabledDates:n,selectedStartDate:a,onSelect:i,onHover:s,minDate:l,maxDate:d,allowDisabledSelection:c,numberOfDays:u})=>{const g=b((()=>fa.generateDays(r)),[r]),[h,m]=o(""),f=(e,r)=>{r&&!c||(i(e),e&&!oa(e).isSame(e,"month")&&m(""))},y=(e,r)=>{r&&!c||(m(e),s(e))},p=()=>{m(""),s("")};return e(Fi,{"data-testid":"calendar-content",children:[g[0].map(((e,r)=>t($i,{children:oa(e).format("ddd")},`week-day-${r}`))),g.map(((e,i)=>t(Ei,{onMouseLeave:p,children:e.map(((e,i)=>t(Li,{date:e,calendarDate:r,selectedDate:a,hoverDate:h,minDate:l,maxDate:d,disabledDates:n,allowDisabledSelection:c,onSelect:f,onHover:y,numberOfDays:u},`day-${i}`)))},i)))]})},Wi=y.div`
    width: 100%;
    background: ${Zt.bg};
`,Ni=({date:e,calendarDate:r,selectedDate:n,hoverDate:a,minDate:i,maxDate:o,disabledDates:s,allowDisabledSelection:l,showActiveMonthDaysOnly:d,onSelect:c,onHover:u})=>{const g=fa.isDisabledDay(e,s,i,o),h=!g||l,b={date:e,calendarDate:r,disabled:g,interactive:h,currentDateIndicator:!0,onSelect:()=>{c(e,!h)},onHover:()=>{u(e.format("YYYY-MM-DD"),!h)}};return t(_i,Object.assign({},b,(()=>{const t={};r.month()!==e.month()?t.labelType=d?"hidden":"unavailable":oa().isSame(e,"day")&&!g&&(t.labelType="current");const i=e.isSame(n,"day"),o=e.isSame(a,"day");return i&&o?(t.labelType="selected-hover",t.circleLeft="selected-hover-outline",t.circleRight="selected-hover-outline"):i?(t.labelType="selected",t.circleLeft="selected-outline",t.circleRight="selected-outline"):o&&(t.labelType="hover",t.circleLeft="hover-subtle",t.circleRight="hover-subtle"),t})()))};oa.extend(ca);const Pi=({calendarDate:r,disabledDates:n,selectedDate:a,onSelect:i,onHover:s,minDate:l,maxDate:d,allowDisabledSelection:c,showActiveMonthDaysOnly:u})=>{const g=b((()=>fa.generateDays(r)),[r]),[h,m]=o(""),f=(e,r)=>{r&&!c||i(e)},y=(e,r)=>{r&&!c||(m(e),s(e))},p=()=>{m(""),s("")};return e(Fi,{"data-testid":"calendar-content",children:[g[0].map(((e,r)=>t($i,{children:oa(e).format("ddd")},`week-day-${r}`))),g.map(((e,i)=>t(Ei,{onMouseLeave:p,children:e.map(((e,i)=>t(Ni,{date:e,calendarDate:r,selectedDate:a,hoverDate:h,minDate:l,maxDate:d,disabledDates:n,allowDisabledSelection:c,showActiveMonthDaysOnly:u,onSelect:f,onHover:y},`day-${i}`)))},i)))]})},Vi=({date:e,calendarDate:r,selectedDate:n,hoverDate:a,minDate:i,maxDate:o,disabledDates:s,allowDisabledSelection:l,onSelect:d,onHover:c})=>{const u=fa.isDisabledDay(e,s,i,o),g=!u||l,{start:h,end:b}=fa.getWeekStartEnd($a.toDayjs(n)),{start:m,end:f}=fa.getWeekStartEnd($a.toDayjs(a)),y=n&&e.isBetween(h,b,"day","[]"),p=a&&e.isBetween(m,f,"day","[]"),v=y&&e.isSame(h)||p&&e.isSame(m),x=y&&e.isSame(b)||p&&e.isSame(f),D={date:e,calendarDate:r,disabled:u,interactive:g,currentDateIndicator:!0,onSelect:()=>{d(e,!g)},onHover:()=>{c(e.format("YYYY-MM-DD"),!g)}};return t(_i,Object.assign({},D,(()=>{const t={};return r.month()!==e.month()?t.labelType="unavailable":oa().isSame(e,"day")&&!u&&(t.labelType="current"),t})(),(()=>{const e={};let r,t;return y&&p?(r="selected-hover-outline",t="selected-hover"):y?(r="selected-outline",t="selected"):p&&(r="hover",t="hover"),r&&(e.labelType=t,v?e.circleLeft=r:e.bgLeft=r,x?e.circleRight=r:e.bgRight=r),e})()))},Ui=({calendarDate:r,disabledDates:n,selectedStartDate:a,onSelect:i,onHover:s,minDate:l,maxDate:d,allowDisabledSelection:c})=>{const u=b((()=>fa.generateDays(r)),[r]),[g,h]=o(""),m=(e,r)=>{if(r&&!c)return;const t=e.startOf("week");i(t),e&&!oa(e).isSame(t,"month")&&h("")},f=(e,r)=>{r&&!c||(h(e),s(e))},y=()=>{h(""),s("")};return e(Fi,{"data-testid":"calendar-content",children:[u[0].map(((e,r)=>t($i,{children:oa(e).format("ddd")},`week-day-${r}`))),u.map(((e,i)=>t(Ei,{onMouseLeave:y,children:e.map(((e,i)=>t(Vi,{date:e,calendarDate:r,selectedDate:a,hoverDate:g,minDate:l,maxDate:d,disabledDates:n,allowDisabledSelection:c,onSelect:m,onHover:f},`day-${i}`)))},i)))]})},Zi=a.forwardRef((({disabledDates:e,onYearMonthDisplayChange:r,onSelect:n,onHover:a,onDismiss:o,value:s,endValue:l,currentFocus:d,withButton:c,variant:u,minDate:g,maxDate:h,allowDisabledSelection:b,selectWithinRange:f=!0,initialCalendarDate:y,numberOfDays:p,showActiveMonthDaysOnly:v=!1,isFocusable:x=!1},D)=>{const w=i(null),F=i(void 0);m(D,(()=>({reset(){var e;null===(e=w.current)||void 0===e||e.resetView()},setCalendarDate(e){var r;null===(r=w.current)||void 0===r||r.setCalendarDate(e)}})));const $=e=>{var r;const t=e.format("YYYY-MM-DD");null===(r=w.current)||void 0===r||r.setCalendarDate(t),C(t)},E=e=>{B(e)},C=e=>{n&&n(e)},B=e=>{a&&a(e)},S=e=>{if(r){const t={month:e.month()+1,year:e.year()};r(t)}};return t(Wi,{children:t(wi,{ref:w,withButton:c,doneButtonDisabled:(()=>{if(!c)return;let e=!0;switch(u){case"single":e=!1;break;case"range":case"fixed-range":e=!!s!=!!l;break;case"week":e=!s&&!l}return e})(),onDismiss:o,minDate:g,maxDate:h,selectWithinRange:f,currentFocus:d,selectedStartDate:s,selectedEndDate:l,allowDisabledSelection:b,onCalendarDateChange:e=>{var r;F.current&&F.current.isSame(e,"month")||(null===(r=w.current)||void 0===r||r.setCalendarDate(e.format("YYYY-MM-DD")),S(e)),F.current=e},initialCalendarDate:y,isFocusable:x,children:({calendarDate:r})=>(r=>{var n;switch(u){case"week":return t(Ui,{calendarDate:r,disabledDates:e,selectedStartDate:s,minDate:g,maxDate:h,allowDisabledSelection:b,onSelect:$,onHover:E});case"fixed-range":return t(Hi,{calendarDate:r,disabledDates:e,selectedStartDate:s,minDate:g,maxDate:h,allowDisabledSelection:b,onSelect:$,onHover:E,numberOfDays:p});case"single":return t(Pi,{calendarDate:r,disabledDates:e,selectedDate:s,minDate:g,maxDate:h,allowDisabledSelection:b,showActiveMonthDaysOnly:v,onSelect:$,onHover:E});default:return t(Ii,{calendarDate:r,currentFocus:d,disabledDates:e,selectedStartDate:s,selectedEndDate:l,minDate:g,maxDate:h,isNewSelection:f,allowDisabledSelection:b,showActiveMonthDaysOnly:v,onSelect:$,onHover:E,setCalendarDate:null===(n=w.current)||void 0===n?void 0:n.setCalendarDate})}})(r)})})})),Ki=a.forwardRef(((e,r)=>{var{width:n}=e,a=R(e,["width"]);return t(aa,{$width:n,"data-testid":"calendar-dropdown",children:t(Zi,Object.assign({ref:r},a))})})),Ji=p`
    outline-offset: -1px;
    outline: ${qt["width-020"]} ${qt.solid} ${Zt["border-focus"]};
`,qi=p`
    outline-color: ${Zt["border-focus"]};
`,Xi=p`
    outline-color: ${Zt["border-disabled"]};
`,Gi=p`
    outline-color: ${Zt["border-error-focus"]};
`,Qi=y(y.div`
    border: ${qt["width-010"]} ${qt.solid} ${Zt.border};
    border-radius: ${Gt.sm};
    background: ${Zt.bg};

    :focus-within {
        ${Ji}
    }
    ${e=>e.$focused&&Ji}

    ${e=>e.$readOnly?p`
                border-color: transparent;
                padding: 0;
                background: transparent !important;

                :focus-within {
                    ${qi}
                }
                ${e.$focused&&qi}
            `:e.$disabled?p`
                background: ${Zt["bg-disabled"]};
                cursor: not-allowed;

                :focus-within {
                    ${Xi}
                }
                ${e.$focused&&Xi}
            `:e.$error?p`
                border-color: ${Zt["border-error"]};

                :focus-within {
                    ${Gi}
                }
                ${e.$focused&&Gi}
            `:void 0}
`)`
    display: flex;
    align-items: center;
    position: relative;
    height: max-content;
    width: 100%;
    padding: 0 ${Xt["spacing-16"]};
    flex-direction: ${e=>"right"===e.$position?"row-reverse":"row"};
`,eo=y.input`
    ${e=>"small"===e.$variant?Kt["body-md-regular"]:Kt["body-baseline-regular"]}
    color: ${Zt.text};
    display: block;
    background: transparent;
    border: none;
    outline: none;
    box-shadow: none;
    padding: 0;
    margin: 0;

    :disabled {
        color: ${Zt["text-subtler"]};

        :hover {
            cursor: not-allowed;
        }
    }

    ::placeholder,
    ::-webkit-input-placeholder {
        color: ${Zt["text-subtler"]};
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
            ${Zt["border-focus"]};
        border-radius: ${Gt.sm};
    }
`;const ro=y.div`
    display: flex;
    align-items: center;
    position: relative;

    flex: 1;
`,to=y.div`
    display: flex;
    align-items: center;

    ${e=>{if(e.$hover)return p`
                ${no}, ${so} {
                    color: ${Zt["text-subtler"]};
                }
            `}}
`,no=y(eo)`
    background: transparent;
    text-align: center;
`,ao=y(no)`
    width: 2rem;
    margin-right: ${Xt["spacing-4"]};
`,io=y(no)`
    width: 2.5rem;
`,oo=y(no)`
    width: 3rem;
    margin-left: ${Xt["spacing-4"]};
`,so=y.span`
    ${Kt["body-baseline-regular"]}
    ${e=>{if(e.$inactive)return p`
                color: ${Zt.text};
            `}}
`,lo=y.div`
    ${Kt["body-baseline-regular"]}
    background-color: ${Zt.bg};
    color: ${Zt["text-subtler"]};
    position: absolute;
    display: flex;
    align-items: center;
    width: 100%;
    height: 100%;

    ${e=>e.$disabled?p`
                background-color: ${Zt["bg-disabled"]};
                cursor: not-allowed;
            `:e.$hide?p`
                display: none;
            `:void 0}
`;oa.extend(la);const co=a.forwardRef((({disabled:r,readOnly:n,names:a,value:s,focused:l,hoverValue:d,placeholder:c,label:g,onChange:h,onFocus:b,onBlur:f,hideInputKeyboard:y},p)=>{const v=y?"none":"numeric",[x,D,w]=Sa(""),[F,$,E]=Sa(""),[C,B,S]=Sa(""),[A,M]=o("none"),[k,z]=o(!1),O=i(null),Y=i(null),T=i(null),j=i(null),[_,R,I]=V(d);u((()=>{var e;const[r="",t="",n=""]=V(s);D(r),$(t),B(n),r||t||n||!O.current||!O.current.contains(document.activeElement)||null===(e=Y.current)||void 0===e||e.focus()}),[s]),u((()=>{var e;l||M("none"),l&&(z(!0),O.current&&!O.current.contains(document.activeElement)&&(null===(e=Y.current)||void 0===e||e.focus()))}),[l]),m(p,(()=>({ref:O,resetPlaceholder(){z(!1)},resetInput(){const[e="",r="",t=""]=V(s);D(e),$(r),B(t)}})),[s]);const L=e=>{var r;e.preventDefault(),null===(r=Y.current)||void 0===r||r.focus()},H=e=>{e.target.select();const r=e.target.name;M(r)},W=e=>{const[r,t,n]=a,i={[r]:w.current,[t]:E.current,[n]:S.current},o=e.target.name,s=i[o],l=o!==n?Ba.padValue(s,!0):s;switch(o){case r:i[r]=l,D(l);break;case t:i[t]=l,$(l)}const d=`${i[n]}-${i[t]}-${i[r]}`,c=oa(d,"YYYY-MM-DD",!0).isValid(),u=!i[r]&&!i[t]&&!i[n];c&&s!==l&&h(d),O.current&&!O.current.contains(e.relatedTarget)&&(M("none"),null==f||f(u||c))},N=e=>{var r,t;if(d)return;const n=e.target.name,i=e.target.value.replace(/[^0-9]/g,""),o={day:x,month:F,year:C};switch(n){case a[0]:o.day=i,D(i),2===i.length&&(null===(r=T.current)||void 0===r||r.focus());break;case a[1]:o.month=i,$(i),2===i.length&&(null===(t=j.current)||void 0===t||t.focus());break;case a[2]:o.year=i,B(i)}if(!o.day&&!o.month&&!o.year)return void h("");const s=`${o.year}-${o.month}-${o.day}`;oa(s,"YYYY-MM-DD",!0).isValid()&&h(s)},P=e=>{var r,t;"Backspace"!==e.code&&"Backspace"!==e.key||(A===a[1]&&0===F.length&&(null===(r=Y.current)||void 0===r||r.focus()),A===a[2]&&0===C.length&&(null===(t=T.current)||void 0===t||t.focus()))};function V(e){if(e){const r=oa(new Date(e));return r.isValid()?[Ba.padValue(r.date().toString()),Ba.padValue((r.month()+1).toString()),r.year().toString()]:[void 0,void 0,void 0]}return[void 0,void 0,void 0]}return e(ro,{role:"group","aria-label":g,onClick:()=>{var e;r||n||(z(!0),O.current&&!O.current.contains(document.activeElement)&&(null===(e=Y.current)||void 0===e||e.focus()))},onFocus:e=>{r||(z(!0),l||null==b||b(e))},children:[e(to,{ref:O,$hover:!!d,children:[t(ao,{ref:Y,name:a[0],maxLength:2,value:null!=_?_:x,onFocus:H,onBlur:W,onChange:N,type:"text",inputMode:v,pattern:"[0-9]{2}","data-testid":`${a[0]}-input`,"aria-label":"day",disabled:r,readOnly:n,tabIndex:n?-1:0,autoComplete:"off",placeholder:A!==a[0]||n?"DD":""}),t(so,{$inactive:0===x.length,children:"/"}),t(io,{ref:T,name:a[1],maxLength:2,value:null!=R?R:F,onFocus:H,onBlur:W,onChange:N,onKeyDown:P,type:"text",inputMode:v,pattern:"[0-9]{2}","data-testid":`${a[1]}-input`,"aria-label":"month",disabled:r,readOnly:n,tabIndex:n?-1:0,autoComplete:"off",placeholder:A!==a[1]||n?"MM":""}),t(so,{$inactive:0===F.length,children:"/"}),t(oo,{ref:j,name:a[2],maxLength:4,value:null!=I?I:C,onFocus:H,onBlur:W,onChange:N,onKeyDown:P,type:"text",inputMode:v,pattern:"[0-9]{4}","data-testid":`${a[2]}-input`,"aria-label":"year",disabled:r,readOnly:n,tabIndex:n?-1:0,autoComplete:"off",placeholder:A!==a[2]||n?"YYYY":""})]}),(()=>{if(!s&&!n&&c)return t(lo,{$hide:k,$disabled:r,onMouseDown:L,children:c})})()]})})),uo=y(Qi)`
    height: 3rem;
`,go=e=>{var{minDate:r,maxDate:n,disabled:a,disabledDates:s,error:l,hideInputKeyboard:d,value:c,onChange:g,onFocus:h,onBlur:b,onYearMonthDisplayChange:m,withButton:f=!0,readOnly:y,id:p,allowDisabledSelection:v,zIndex:x}=e,D=R(e,["minDate","maxDate","disabled","disabledDates","error","hideInputKeyboard","value","onChange","onFocus","onBlur","onYearMonthDisplayChange","withButton","readOnly","id","allowDisabledSelection","zIndex"]);const[w,F]=o(Ea.sanitizeInput(c)),[$,E]=o(Ea.sanitizeInput(c)),[C,B]=o(void 0),[S,A]=o(!1),[M,k]=o(!1),z=i(null),O=i(null);u((()=>{const e=Ea.sanitizeInput(c);F(e),E(e)}),[c]);const Y=e=>{!v&&Ea.isDateDisabled(e,{disabledDates:s,minDate:r,maxDate:n})||(E(e),f||(H(e),F(e),e&&A(!1)))},T=e=>{var r;E(e),f||(H(e),F(e),e&&(null===(r=z.current)||void 0===r||r.focus(),A(!1)),C&&B(void 0))},j=()=>{y||a||(A(!0),M||(k(!0),h&&h()))},_=e=>{var r;M&&!S&&z.current&&!z.current.contains(e.relatedTarget)&&(null===(r=O.current)||void 0===r||r.resetInput(),E(w),k(!1),W())},I=e=>{B(e)},L=e=>{var r;switch(e){case"reset":E(w);break;case"confirmed":F($),H($)}null===(r=z.current)||void 0===r||r.focus(),A(!1)},H=e=>{g&&g(e)},W=()=>{b&&b()};return t(na,{enabled:!y&&!a,isOpen:S,renderElement:()=>t(uo,Object.assign({tabIndex:-1,ref:z,onBlur:_,onFocus:j,$disabled:a,$readOnly:y,$focused:M,$error:l,id:p,"data-testid":D["data-testid"]},D,{children:t(co,{ref:O,disabled:a,onChange:Y,readOnly:y,focused:S,names:["start-day","start-month","start-year"],value:$,hoverValue:C,hideInputKeyboard:d})})),renderDropdown:({elementWidth:e})=>t(Ki,{variant:"single",initialCalendarDate:$,withButton:f,value:$,disabledDates:s,minDate:r,maxDate:n,allowDisabledSelection:v,onHover:I,onSelect:T,onDismiss:L,onYearMonthDisplayChange:m,width:e}),onClose:()=>{var e;null===(e=O.current)||void 0===e||e.resetInput(),E(w),A(!1),k(!1),W()},onDismiss:()=>{var e,r;null===(e=O.current)||void 0===e||e.resetInput(),null===(r=z.current)||void 0===r||r.focus(),E(w),A(!1)},customZIndex:x,offset:16})};export{go as DateInput};
//# sourceMappingURL=index.js.map
