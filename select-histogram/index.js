import{jsxs as e,jsx as r,Fragment as n}from"react/jsx-runtime";import*as t from"react";import i,{useState as o,useEffect as s,useMemo as a,useRef as l,isValidElement as d,createRef as c,cloneElement as u,PureComponent as h,useLayoutEffect as g,forwardRef as b}from"react";import{ExternalIcon as m}from"@lifesg/react-icons/external";import p,{css as f,keyframes as y,useTheme as v}from"styled-components";import{ExclamationCircleFillIcon as x}from"@lifesg/react-icons/exclamation-circle-fill";import{SquareIcon as w}from"@lifesg/react-icons/square";import{SquareTickFillIcon as $}from"@lifesg/react-icons/square-tick-fill";import{TickIcon as F}from"@lifesg/react-icons/tick";import{CrossIcon as E}from"@lifesg/react-icons/cross";import{MagnifierIcon as D}from"@lifesg/react-icons/magnifier";import{ChevronDownIcon as C}from"@lifesg/react-icons/chevron-down";import"@lifesg/react-icons/caret-right";import{MinusSquareFillIcon as B}from"@lifesg/react-icons/minus-square-fill";import{useFloatingTree as M,useFloating as k,autoUpdate as z,offset as O,flip as A,shift as S,limitShift as _,size as T,useTransitionStyles as L,useClick as j,useDismiss as Y,useInteractions as P,FloatingPortal as R,FloatingFocusManager as I}from"@floating-ui/react";import{findDOMNode as H}from"react-dom";function W(e,r){var n={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&r.indexOf(t)<0&&(n[t]=e[t]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(t=Object.getOwnPropertySymbols(e);i<t.length;i++)r.indexOf(t[i])<0&&Object.prototype.propertyIsEnumerable.call(e,t[i])&&(n[t[i]]=e[t[i]])}return n}"function"==typeof SuppressedError&&SuppressedError;var N="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};function V(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var K=Array.isArray,U="object"==typeof N&&N&&N.Object===Object&&N,Z=U,X="object"==typeof self&&self&&self.Object===Object&&self,q=Z||X||Function("return this")(),J=q.Symbol,G=J,Q=Object.prototype,ee=Q.hasOwnProperty,re=Q.toString,ne=G?G.toStringTag:void 0;var te=function(e){var r=ee.call(e,ne),n=e[ne];try{e[ne]=void 0;var t=!0}catch(e){}var i=re.call(e);return t&&(r?e[ne]=n:delete e[ne]),i},ie=Object.prototype.toString;var oe=te,se=function(e){return ie.call(e)},ae=J?J.toStringTag:void 0;var le=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":ae&&ae in Object(e)?oe(e):se(e)};var de=function(e){return null!=e&&"object"==typeof e},ce=le,ue=de;var he=function(e){return"symbol"==typeof e||ue(e)&&"[object Symbol]"==ce(e)},ge=K,be=he,me=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,pe=/^\w*$/;var fe=function(e,r){if(ge(e))return!1;var n=typeof e;return!("number"!=n&&"symbol"!=n&&"boolean"!=n&&null!=e&&!be(e))||(pe.test(e)||!me.test(e)||null!=r&&e in Object(r))};var ye=function(e){var r=typeof e;return null!=e&&("object"==r||"function"==r)},ve=le,xe=ye;var we,$e=function(e){if(!xe(e))return!1;var r=ve(e);return"[object Function]"==r||"[object GeneratorFunction]"==r||"[object AsyncFunction]"==r||"[object Proxy]"==r},Fe=q["__core-js_shared__"],Ee=(we=/[^.]+$/.exec(Fe&&Fe.keys&&Fe.keys.IE_PROTO||""))?"Symbol(src)_1."+we:"";var De=function(e){return!!Ee&&Ee in e},Ce=Function.prototype.toString;var Be=function(e){if(null!=e){try{return Ce.call(e)}catch(e){}try{return e+""}catch(e){}}return""},Me=$e,ke=De,ze=ye,Oe=Be,Ae=/^\[object .+?Constructor\]$/,Se=Function.prototype,_e=Object.prototype,Te=Se.toString,Le=_e.hasOwnProperty,je=RegExp("^"+Te.call(Le).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");var Ye=function(e,r){return null==e?void 0:e[r]},Pe=function(e){return!(!ze(e)||ke(e))&&(Me(e)?je:Ae).test(Oe(e))},Re=Ye;var Ie=function(e,r){var n=Re(e,r);return Pe(n)?n:void 0},He=Ie(Object,"create"),We=He;var Ne=function(){this.__data__=We?We(null):{},this.size=0};var Ve=function(e){var r=this.has(e)&&delete this.__data__[e];return this.size-=r?1:0,r},Ke=He,Ue=Object.prototype.hasOwnProperty;var Ze=function(e){var r=this.__data__;if(Ke){var n=r[e];return"__lodash_hash_undefined__"===n?void 0:n}return Ue.call(r,e)?r[e]:void 0},Xe=He,qe=Object.prototype.hasOwnProperty;var Je=function(e){var r=this.__data__;return Xe?void 0!==r[e]:qe.call(r,e)},Ge=He;var Qe=function(e,r){var n=this.__data__;return this.size+=this.has(e)?0:1,n[e]=Ge&&void 0===r?"__lodash_hash_undefined__":r,this},er=Ne,rr=Ve,nr=Ze,tr=Je,ir=Qe;function or(e){var r=-1,n=null==e?0:e.length;for(this.clear();++r<n;){var t=e[r];this.set(t[0],t[1])}}or.prototype.clear=er,or.prototype.delete=rr,or.prototype.get=nr,or.prototype.has=tr,or.prototype.set=ir;var sr=or;var ar=function(){this.__data__=[],this.size=0};var lr=function(e,r){return e===r||e!=e&&r!=r};var dr=function(e,r){for(var n=e.length;n--;)if(lr(e[n][0],r))return n;return-1},cr=dr,ur=Array.prototype.splice;var hr=function(e){var r=this.__data__,n=cr(r,e);return!(n<0)&&(n==r.length-1?r.pop():ur.call(r,n,1),--this.size,!0)},gr=dr;var br=function(e){var r=this.__data__,n=gr(r,e);return n<0?void 0:r[n][1]},mr=dr;var pr=function(e){return mr(this.__data__,e)>-1},fr=dr;var yr=function(e,r){var n=this.__data__,t=fr(n,e);return t<0?(++this.size,n.push([e,r])):n[t][1]=r,this},vr=ar,xr=hr,wr=br,$r=pr,Fr=yr;function Er(e){var r=-1,n=null==e?0:e.length;for(this.clear();++r<n;){var t=e[r];this.set(t[0],t[1])}}Er.prototype.clear=vr,Er.prototype.delete=xr,Er.prototype.get=wr,Er.prototype.has=$r,Er.prototype.set=Fr;var Dr=Er,Cr=Ie(q,"Map"),Br=sr,Mr=Dr,kr=Cr;var zr=function(e){var r=typeof e;return"string"==r||"number"==r||"symbol"==r||"boolean"==r?"__proto__"!==e:null===e};var Or=function(e,r){var n=e.__data__;return zr(r)?n["string"==typeof r?"string":"hash"]:n.map},Ar=Or;var Sr=function(e){var r=Ar(this,e).delete(e);return this.size-=r?1:0,r},_r=Or;var Tr=function(e){return _r(this,e).get(e)},Lr=Or;var jr=function(e){return Lr(this,e).has(e)},Yr=Or;var Pr=function(e,r){var n=Yr(this,e),t=n.size;return n.set(e,r),this.size+=n.size==t?0:1,this},Rr=function(){this.size=0,this.__data__={hash:new Br,map:new(kr||Mr),string:new Br}},Ir=Sr,Hr=Tr,Wr=jr,Nr=Pr;function Vr(e){var r=-1,n=null==e?0:e.length;for(this.clear();++r<n;){var t=e[r];this.set(t[0],t[1])}}Vr.prototype.clear=Rr,Vr.prototype.delete=Ir,Vr.prototype.get=Hr,Vr.prototype.has=Wr,Vr.prototype.set=Nr;var Kr=Vr,Ur=Kr;function Zr(e,r){if("function"!=typeof e||null!=r&&"function"!=typeof r)throw new TypeError("Expected a function");var n=function(){var t=arguments,i=r?r.apply(this,t):t[0],o=n.cache;if(o.has(i))return o.get(i);var s=e.apply(this,t);return n.cache=o.set(i,s)||o,s};return n.cache=new(Zr.Cache||Ur),n}Zr.Cache=Ur;var Xr=Zr;var qr=function(e){var r=Xr(e,(function(e){return 500===n.size&&n.clear(),e})),n=r.cache;return r},Jr=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,Gr=/\\(\\)?/g,Qr=qr((function(e){var r=[];return 46===e.charCodeAt(0)&&r.push(""),e.replace(Jr,(function(e,n,t,i){r.push(t?i.replace(Gr,"$1"):n||e)})),r}));var en=function(e,r){for(var n=-1,t=null==e?0:e.length,i=Array(t);++n<t;)i[n]=r(e[n],n,e);return i},rn=K,nn=he,tn=J?J.prototype:void 0,on=tn?tn.toString:void 0;var sn=function e(r){if("string"==typeof r)return r;if(rn(r))return en(r,e)+"";if(nn(r))return on?on.call(r):"";var n=r+"";return"0"==n&&1/r==-1/0?"-0":n},an=sn;var ln=K,dn=fe,cn=Qr,un=function(e){return null==e?"":an(e)};var hn=he;var gn=function(e,r){return ln(e)?e:dn(e,r)?[e]:cn(un(e))},bn=function(e){if("string"==typeof e||hn(e))return e;var r=e+"";return"0"==r&&1/e==-1/0?"-0":r};var mn=function(e,r){for(var n=0,t=(r=gn(r,e)).length;null!=e&&n<t;)e=e[bn(r[n++])];return n&&n==t?e:void 0};var pn=V((function(e,r,n){var t=null==e?void 0:mn(e,r);return void 0===t?n:t}));const fn=(e,r,n)=>pn(n,r)||pn(e,r),yn=(e,r)=>{const n=r||e.defaultValue;return pn(e.collections,n)},vn={collections:{default:{"width-005":.5,"width-010":1,"width-020":2,"width-040":4,solid:"solid"}},defaultValue:"default"},xn=e=>r=>{var n;const t=r.theme,i=yn(vn,null==t?void 0:t.borderScheme);return(null===(n=null==t?void 0:t.overrides)||void 0===n?void 0:n.border)?`${fn(i,e,t.overrides.border)}px`:`${i[e]}px`},wn={"width-005":xn("width-005"),"width-010":xn("width-010"),"width-020":xn("width-020"),"width-040":xn("width-040"),solid:($n="solid",e=>{var r;const n=e.theme,t=yn(vn,null==n?void 0:n.borderScheme),i=(null===(r=null==n?void 0:n.overrides)||void 0===r?void 0:r.border)?fn(t,$n,n.overrides.border):t[$n];return"function"==typeof i?i(e):i})};var $n;const Fn={collections:{lifesg:{"brand-10":"#2C0C0B","brand-20":"#4C1513","brand-30":"#6C1D1B","brand-40":"#922825","brand-50":"#BF3431","brand-60":"#F15D5A","brand-70":"#F69491","brand-80":"#FABAB7","brand-90":"#FCD7D2","brand-95":"#FFEBE7","brand-100":"#FFF6F4","primary-10":"#001731","primary-20":"#002752","primary-30":"#003874","primary-40":"#004D9F","primary-50":"#1768BE","primary-60":"#3C91EC","primary-70":"#6CB4FF","primary-80":"#A5CDFF","primary-90":"#CFE1FE","primary-95":"#E8F0FE","primary-100":"#F7F9FF","secondary-10":"#131529","secondary-20":"#222547","secondary-30":"#2F3565","secondary-40":"#42498B","secondary-50":"#5B62A7","secondary-60":"#858CBD","secondary-70":"#A8ADCF","secondary-80":"#C6C9E0","secondary-90":"#DDDFEC","secondary-95":"#EDEEF5","secondary-100":"#F8F8FB","neutral-10":"#161616","neutral-20":"#282828","neutral-30":"#393939","neutral-40":"#4E4E4E","neutral-50":"#686868","neutral-60":"#8E8E8E","neutral-70":"#AFAFB0","neutral-80":"#C7CACA","neutral-90":"#DDE1E2","neutral-95":"#EDEFEF","neutral-100":"#F9F9F9","success-10":"#081A0F","success-20":"#0E2D1B","success-30":"#154126","success-40":"#1C5A34","success-50":"#257645","success-60":"#44A068","success-70":"#64C189","success-80":"#80DCA5","success-90":"#B4ECCB","success-95":"#D5F6E2","success-100":"#EFFCF4","warning-10":"#221302","warning-20":"#3B2204","warning-30":"#543106","warning-40":"#744408","warning-50":"#98590C","warning-60":"#D07A13","warning-70":"#E4A244","warning-80":"#F5C26C","warning-90":"#FADBA6","warning-95":"#FCECD4","warning-100":"#FDF7F0","error-10":"#330505","error-20":"#550808","error-30":"#750C0C","error-40":"#9E130F","error-50":"#CB2213","error-60":"#DE6C6C","error-70":"#E89B9B","error-80":"#EFBEBE","error-90":"#F5D9D9","error-95":"#F9ECEC","error-100":"#FCF7F7","info-10":"#021824","info-20":"#032B3F","info-30":"#053D59","info-40":"#065478","info-50":"#176E9B","info-60":"#5296BE","info-70":"#82B5DA","info-80":"#ACCFE7","info-90":"#CCE3F1","info-95":"#E3F1F8","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000","primary-inverse":"#FEAB10"},bookingsg:{"brand-10":"#2C0C0B","brand-20":"#4C1513","brand-30":"#6C1D1B","brand-40":"#922825","brand-50":"#BF3431","brand-60":"#F15D5A","brand-70":"#F69491","brand-80":"#FABAB7","brand-90":"#FCD7D2","brand-95":"#FFEBE7","brand-100":"#FFF6F4","primary-10":"#1A122C","primary-20":"#2F1F4D","primary-30":"#422D6E","primary-40":"#5B3D97","primary-50":"#7654BC","primary-60":"#9A82CD","primary-70":"#B7A7D8","primary-80":"#CFC5E5","primary-90":"#E3DDF0","primary-95":"#F0EDF7","primary-100":"#F9F8FC","secondary-10":"#0E1723","secondary-20":"#18293D","secondary-30":"#233A57","secondary-40":"#305078","secondary-50":"#4B6A8F","secondary-60":"#7B91A9","secondary-70":"#A1B1C3","secondary-80":"#C1CBD7","secondary-90":"#DBE1E8","secondary-95":"#EBEFF2","secondary-100":"#F7F8FA","neutral-10":"#161616","neutral-20":"#282828","neutral-30":"#393939","neutral-40":"#4E4E4E","neutral-50":"#686868","neutral-60":"#8E8E8E","neutral-70":"#AFAFB0","neutral-80":"#C7CACA","neutral-90":"#DDE1E2","neutral-95":"#EDEFEF","neutral-100":"#F9F9F9","success-10":"#081A0F","success-20":"#0E2D1B","success-30":"#154126","success-40":"#1C5A34","success-50":"#257645","success-60":"#44A068","success-70":"#64C189","success-80":"#80DCA5","success-90":"#B4ECCB","success-95":"#D5F6E2","success-100":"#EFFCF4","warning-10":"#221302","warning-20":"#3B2204","warning-30":"#543106","warning-40":"#744408","warning-50":"#98590C","warning-60":"#D07A13","warning-70":"#E4A244","warning-80":"#F5C26C","warning-90":"#FADBA6","warning-95":"#FCECD4","warning-100":"#FDF7F0","error-10":"#330505","error-20":"#550808","error-30":"#750C0C","error-40":"#9E130F","error-50":"#CB2213","error-60":"#DE6C6C","error-70":"#E89B9B","error-80":"#EFBEBE","error-90":"#F5D9D9","error-95":"#F9ECEC","error-100":"#FCF7F7","info-10":"#021824","info-20":"#032B3F","info-30":"#053D59","info-40":"#065478","info-50":"#176E9B","info-60":"#5296BE","info-70":"#82B5DA","info-80":"#ACCFE7","info-90":"#CCE3F1","info-95":"#E3F1F8","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000","primary-inverse":"#FEAB10"},rbs:{"brand-10":"#0E123A","brand-20":"#191E65","brand-30":"#232B90","brand-40":"#303BC5","brand-50":"#494CFF","brand-60":"#AD6EFF","brand-70":"#AEA4FF","brand-80":"#C5C4FF","brand-90":"#DDDCFF","brand-95":"#EDECFF","brand-100":"#F8F8FF","primary-10":"#10152B","primary-20":"#1C254B","primary-30":"#28356C","primary-40":"#38489A","primary-50":"#4D5AD7","primary-60":"#7487F2","primary-70":"#9AAAFC","primary-80":"#BDC7FD","primary-90":"#DADFFB","primary-95":"#ECEEFE","primary-100":"#F7F8FF","secondary-10":"#19151D","secondary-20":"#2B2533","secondary-30":"#3E3649","secondary-40":"#564A64","secondary-50":"#6F637D","secondary-60":"#948B9F","secondary-70":"#B3ACBB","secondary-80":"#CCC8D2","secondary-90":"#E1DEE4","secondary-95":"#EFEEF1","secondary-100":"#F9F8F9","neutral-10":"#161616","neutral-20":"#282828","neutral-30":"#393939","neutral-40":"#4E4E4E","neutral-50":"#686868","neutral-60":"#8E8E8E","neutral-70":"#AFAFB0","neutral-80":"#C7CACA","neutral-90":"#DDE1E2","neutral-95":"#EDEFEF","neutral-100":"#F9F9F9","success-10":"#081A0F","success-20":"#0E2D1B","success-30":"#154126","success-40":"#1C5A34","success-50":"#257645","success-60":"#44A068","success-70":"#64C189","success-80":"#80DCA5","success-90":"#B4ECCB","success-95":"#D5F6E2","success-100":"#EFFCF4","warning-10":"#221302","warning-20":"#3B2204","warning-30":"#543106","warning-40":"#744408","warning-50":"#98590C","warning-60":"#D07A13","warning-70":"#E4A244","warning-80":"#F5C26C","warning-90":"#FADBA6","warning-95":"#FCECD4","warning-100":"#FDF7F0","error-10":"#330505","error-20":"#550808","error-30":"#750C0C","error-40":"#9E130F","error-50":"#CB2213","error-60":"#DE6C6C","error-70":"#E89B9B","error-80":"#EFBEBE","error-90":"#F5D9D9","error-95":"#F9ECEC","error-100":"#FCF7F7","info-10":"#021824","info-20":"#032B3F","info-30":"#053D59","info-40":"#065478","info-50":"#176E9B","info-60":"#5296BE","info-70":"#82B5DA","info-80":"#ACCFE7","info-90":"#CCE3F1","info-95":"#E3F1F8","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000","primary-inverse":"#FEAB10"},mylegacy:{"brand-10":"#2C0C0B","brand-20":"#4C1513","brand-30":"#6C1D1B","brand-40":"#922825","brand-50":"#BF3431","brand-60":"#F15D5A","brand-70":"#F69491","brand-80":"#FABAB7","brand-90":"#FCD7D2","brand-95":"#FFEBE7","brand-100":"#FFF6F4","primary-10":"#0011924","primary-20":"#032B40","primary-30":"#043D5A","primary-40":"#05547B","primary-50":"#096EA1","primary-60":"#2098D3","primary-70":"#5CB9E8","primary-80":"#8BD3F6","primary-90":"#BEE6FA","primary-95":"#E2F2FA","primary-100":"#F4FAFC","secondary-10":"#131529","secondary-20":"#222547","secondary-30":"#2F3565","secondary-40":"#42498B","secondary-50":"#5B62A7","secondary-60":"#858CBD","secondary-70":"#A8ADCF","secondary-80":"#C6C9E0","secondary-90":"#DDDFEC","secondary-95":"#EDEEF5","secondary-100":"#F8F8FB","neutral-10":"#161616","neutral-20":"#282828","neutral-30":"#393939","neutral-40":"#4E4E4E","neutral-50":"#686868","neutral-60":"#8E8E8E","neutral-70":"#AFAFB0","neutral-80":"#C7CACA","neutral-90":"#DDE1E2","neutral-95":"#EDEFEF","neutral-100":"#F9F9F9","success-10":"#081A0F","success-20":"#0E2D1B","success-30":"#154126","success-40":"#1C5A34","success-50":"#257645","success-60":"#44A068","success-70":"#64C189","success-80":"#80DCA5","success-90":"#B4ECCB","success-95":"#D5F6E2","success-100":"#EFFCF4","warning-10":"#221302","warning-20":"#3B2204","warning-30":"#543106","warning-40":"#744408","warning-50":"#98590C","warning-60":"#D07A13","warning-70":"#E4A244","warning-80":"#F5C26C","warning-90":"#FADBA6","warning-95":"#FCECD4","warning-100":"#FDF7F0","error-10":"#330505","error-20":"#550808","error-30":"#750C0C","error-40":"#9E130F","error-50":"#CB2213","error-60":"#DE6C6C","error-70":"#E89B9B","error-80":"#EFBEBE","error-90":"#F5D9D9","error-95":"#F9ECEC","error-100":"#FCF7F7","info-10":"#021824","info-20":"#032B3F","info-30":"#053D59","info-40":"#065478","info-50":"#176E9B","info-60":"#5296BE","info-70":"#82B5DA","info-80":"#ACCFE7","info-90":"#CCE3F1","info-95":"#E3F1F8","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000","primary-inverse":"#FEAB10"},ccube:{"brand-10":"#1F1221","brand-20":"#371F3B","brand-30":"#4E2C53","brand-40":"#6B3E73","brand-50":"#8D5197","brand-60":"#FF3399","brand-70":"#FF88C4","brand-80":"#FFB3D9","brand-90":"#FFD4E9","brand-95":"#FFE8F3","brand-100":"#FFD6EB","primary-10":"#1F1221","primary-20":"#371F3B","primary-30":"#4E2C53","primary-40":"#6B3E73","primary-50":"#8D5197","primary-60":"#B07DB7","primary-70":"#C7A3CC","primary-80":"#D9C2DD","primary-90":"#E9DBEB","primary-95":"#F3ECF4","primary-100":"#FAF7FA","secondary-10":"#2D091B","secondary-20":"#4D0F2E","secondary-30":"#6B1540","secondary-40":"#931D58","secondary-50":"#C02673","secondary-60":"#FF409F","secondary-70":"#FF88C4","secondary-80":"#FFB3D9","secondary-90":"#FFD4E9","secondary-95":"#FFE8F3","secondary-100":"#FFF8FC","neutral-10":"#161616","neutral-20":"#282828","neutral-30":"#393939","neutral-40":"#4E4E4E","neutral-50":"#686868","neutral-60":"#8E8E8E","neutral-70":"#AFAFB0","neutral-80":"#C7CACA","neutral-90":"#DDE1E2","neutral-95":"#EDEFEF","neutral-100":"#F9F9F9","success-10":"#081A0F","success-20":"#0E2D1B","success-30":"#154126","success-40":"#1C5A34","success-50":"#257645","success-60":"#44A068","success-70":"#64C189","success-80":"#80DCA5","success-90":"#B4ECCB","success-95":"#D5F6E2","success-100":"#EFFCF4","warning-10":"#221302","warning-20":"#3B2204","warning-30":"#543106","warning-40":"#744408","warning-50":"#98590C","warning-60":"#D07A13","warning-70":"#E4A244","warning-80":"#F5C26C","warning-90":"#FADBA6","warning-95":"#FCECD4","warning-100":"#FDF7F0","error-10":"#330505","error-20":"#550808","error-30":"#750C0C","error-40":"#9E130F","error-50":"#CB2213","error-60":"#DE6C6C","error-70":"#E89B9B","error-80":"#EFBEBE","error-90":"#F5D9D9","error-95":"#F9ECEC","error-100":"#FCF7F7","info-10":"#021824","info-20":"#032B3F","info-30":"#053D59","info-40":"#065478","info-50":"#176E9B","info-60":"#5296BE","info-70":"#82B5DA","info-80":"#ACCFE7","info-90":"#CCE3F1","info-95":"#E3F1F8","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000","primary-inverse":"#FEAB10"},pa:{"brand-10":"#89000B","brand-20":"#B0000E","brand-30":"#C4000F","brand-40":"#D0333F","brand-50":"#DC666F","brand-60":"#E28087","brand-70":"#E7999F","brand-80":"#EDB3B7","brand-90":"#F3CCCF","brand-95":"#F9E6E7","brand-100":"#FCF2F3","primary-10":"#000000","primary-20":"#191919","primary-30":"#333333","primary-40":"#4D4D4D","primary-50":"#666666","primary-60":"#808080","primary-70":"#999999","primary-80":"#B3B3B3","primary-90":"#E6E6E6","primary-95":"#F7F7F7","primary-100":"#FFFFFF","secondary-10":"#19151D","secondary-20":"#2B2533","secondary-30":"#3E3649","secondary-40":"#564A64","secondary-50":"#6F637D","secondary-60":"#948B9F","secondary-70":"#B3ACBB","secondary-80":"#CCC8D2","secondary-90":"#E1DEE4","secondary-95":"#EFEEF1","secondary-100":"#F9F8F9","neutral-10":"#000000","neutral-20":"#191919","neutral-30":"#333333","neutral-40":"#4D4D4D","neutral-50":"#666666","neutral-60":"#808080","neutral-70":"#999999","neutral-80":"#B3B3B3","neutral-90":"#E6E6E6","neutral-95":"#F7F7F7","neutral-100":"#FFFFFF","success-10":"#081A0F","success-20":"#0E2D1B","success-30":"#154126","success-40":"#1C5A34","success-50":"#257645","success-60":"#44A068","success-70":"#64C189","success-80":"#80DCA5","success-90":"#B4ECCB","success-95":"#D5F6E2","success-100":"#EFFCF4","warning-10":"#221302","warning-20":"#3B2204","warning-30":"#543106","warning-40":"#744408","warning-50":"#98590C","warning-60":"#D07A13","warning-70":"#E4A244","warning-80":"#F5C26C","warning-90":"#FADBA6","warning-95":"#FCECD4","warning-100":"#FDF7F0","error-10":"#330505","error-20":"#550808","error-30":"#750C0C","error-40":"#9E130F","error-50":"#CB2213","error-60":"#DE6C6C","error-70":"#E89B9B","error-80":"#EFBEBE","error-90":"#F5D9D9","error-95":"#F9ECEC","error-100":"#FCF7F7","info-10":"#021824","info-20":"#032B3F","info-30":"#053D59","info-40":"#065478","info-50":"#176E9B","info-60":"#5296BE","info-70":"#82B5DA","info-80":"#ACCFE7","info-90":"#CCE3F1","info-95":"#E3F1F8","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000","primary-inverse":"#FEAB10"}},defaultValue:"lifesg"},En=e=>r=>{var n;const t=r.theme,i=yn(Fn,null==t?void 0:t.colourScheme);return(null===(n=null==t?void 0:t.overrides)||void 0===n?void 0:n.primitiveColour)?fn(i,e,t.overrides.primitiveColour):i[e]},Dn={"brand-10":En("brand-10"),"brand-20":En("brand-20"),"brand-30":En("brand-30"),"brand-40":En("brand-40"),"brand-50":En("brand-50"),"brand-60":En("brand-60"),"brand-70":En("brand-70"),"brand-80":En("brand-80"),"brand-90":En("brand-90"),"brand-95":En("brand-95"),"brand-100":En("brand-100"),"primary-10":En("primary-10"),"primary-20":En("primary-20"),"primary-30":En("primary-30"),"primary-40":En("primary-40"),"primary-50":En("primary-50"),"primary-60":En("primary-60"),"primary-70":En("primary-70"),"primary-80":En("primary-80"),"primary-90":En("primary-90"),"primary-95":En("primary-95"),"primary-100":En("primary-100"),"secondary-10":En("secondary-10"),"secondary-20":En("secondary-20"),"secondary-30":En("secondary-30"),"secondary-40":En("secondary-40"),"secondary-50":En("secondary-50"),"secondary-60":En("secondary-60"),"secondary-70":En("secondary-70"),"secondary-80":En("secondary-80"),"secondary-90":En("secondary-90"),"secondary-95":En("secondary-95"),"secondary-100":En("secondary-100"),"neutral-10":En("neutral-10"),"neutral-20":En("neutral-20"),"neutral-30":En("neutral-30"),"neutral-40":En("neutral-40"),"neutral-50":En("neutral-50"),"neutral-60":En("neutral-60"),"neutral-70":En("neutral-70"),"neutral-80":En("neutral-80"),"neutral-90":En("neutral-90"),"neutral-95":En("neutral-95"),"neutral-100":En("neutral-100"),"success-10":En("success-10"),"success-20":En("success-20"),"success-30":En("success-30"),"success-40":En("success-40"),"success-50":En("success-50"),"success-60":En("success-60"),"success-70":En("success-70"),"success-80":En("success-80"),"success-90":En("success-90"),"success-95":En("success-95"),"success-100":En("success-100"),"warning-10":En("warning-10"),"warning-20":En("warning-20"),"warning-30":En("warning-30"),"warning-40":En("warning-40"),"warning-50":En("warning-50"),"warning-60":En("warning-60"),"warning-70":En("warning-70"),"warning-80":En("warning-80"),"warning-90":En("warning-90"),"warning-95":En("warning-95"),"warning-100":En("warning-100"),"error-10":En("error-10"),"error-20":En("error-20"),"error-30":En("error-30"),"error-40":En("error-40"),"error-50":En("error-50"),"error-60":En("error-60"),"error-70":En("error-70"),"error-80":En("error-80"),"error-90":En("error-90"),"error-95":En("error-95"),"error-100":En("error-100"),"info-10":En("info-10"),"info-20":En("info-20"),"info-30":En("info-30"),"info-40":En("info-40"),"info-50":En("info-50"),"info-60":En("info-60"),"info-70":En("info-70"),"info-80":En("info-80"),"info-90":En("info-90"),"info-95":En("info-95"),"info-100":En("info-100"),white:En("white"),black:En("black"),"primary-inverse":En("primary-inverse")},Cn={text:En("neutral-20"),"text-subtle":En("neutral-30"),"text-subtler":En("neutral-50"),"text-subtlest":En("neutral-60"),"text-primary":En("primary-50"),"text-hover":En("primary-40"),"text-selected":En("primary-50"),"text-selected-hover":En("primary-40"),"text-disabled":En("neutral-50"),"text-disabled-subtle":En("neutral-60"),"text-disabled-subtlest":En("neutral-80"),"text-selected-disabled":En("neutral-20"),"text-success":En("success-40"),"text-warning":En("warning-40"),"text-error":En("error-40"),"text-info":En("info-40"),"text-inverse":En("white"),icon:En("neutral-50"),"icon-subtle":En("neutral-60"),"icon-strongest":En("neutral-20"),"icon-primary":En("primary-50"),"icon-primary-subtle":En("primary-60"),"icon-primary-subtlest":En("primary-70"),"icon-hover":En("primary-40"),"icon-selected":En("primary-50"),"icon-selected-hover":En("primary-40"),"icon-disabled":En("neutral-50"),"icon-disabled-subtle":En("neutral-60"),"icon-selected-disabled":En("neutral-60"),"icon-success":En("success-50"),"icon-warning":En("warning-60"),"icon-error":En("error-50"),"icon-error-strong":En("error-40"),"icon-info":En("info-50"),"icon-inverse":En("white"),"icon-primary-inverse":En("primary-inverse"),border:En("neutral-90"),"border-strong":En("neutral-70"),"border-stronger":En("neutral-50"),"border-primary":En("primary-50"),"border-primary-subtle":En("primary-60"),"border-hover":En("primary-90"),"border-hover-strong":En("primary-60"),"border-selected":En("primary-50"),"border-selected-subtle":En("primary-70"),"border-selected-subtlest":En("primary-90"),"border-selected-hover":En("primary-40"),"border-focus":En("primary-60"),"border-focus-strong":En("primary-50"),"border-disabled":En("neutral-90"),"border-selected-disabled":En("neutral-70"),"border-success":En("success-60"),"border-warning":En("warning-60"),"border-error":En("error-60"),"border-error-focus":En("error-60"),"border-error-focus-strong":En("error-40"),"border-error-strong":En("error-40"),"border-info":En("info-60"),bg:En("white"),"bg-strong":En("neutral-100"),"bg-stronger":En("neutral-95"),"bg-strongest":En("neutral-90"),"bg-hover":En("primary-95"),"bg-hover-strong":En("primary-90"),"bg-hover-subtle":En("primary-100"),"bg-hover-neutral":En("neutral-100"),"bg-hover-neutral-strong":En("neutral-90"),"bg-selected":En("primary-95"),"bg-selected-hover":En("primary-90"),"bg-selected-strong":En("primary-90"),"bg-selected-stronger":En("primary-70"),"bg-selected-strongest":En("primary-50"),"bg-selected-strongest-hover":En("primary-40"),"bg-disabled":En("neutral-95"),"bg-selected-disabled":En("neutral-95"),"bg-selected-stronger-disabled":En("neutral-70"),"bg-success":En("success-100"),"bg-success-hover":En("success-95"),"bg-success-strong":En("success-50"),"bg-success-strong-hover":En("success-40"),"bg-warning":En("warning-100"),"bg-warning-hover":En("warning-95"),"bg-warning-strong":En("warning-50"),"bg-warning-strong-hover":En("warning-40"),"bg-info":En("info-100"),"bg-info-hover":En("info-95"),"bg-info-strong":En("info-50"),"bg-info-strong-hover":En("info-40"),"bg-error":En("error-100"),"bg-error-hover":En("error-95"),"bg-error-strong":En("error-50"),"bg-error-strong-hover":En("error-40"),"bg-inverse":En("neutral-20"),"bg-inverse-subtle":En("neutral-30"),"bg-inverse-subtler":En("neutral-50"),"bg-inverse-subtlest":En("neutral-60"),"bg-inverse-hover":En("neutral-40"),"bg-primary":En("primary-50"),"bg-primary-subtle":En("primary-60"),"bg-primary-subtler":En("primary-95"),"bg-primary-subtlest":En("primary-100"),"bg-available":"#6DD0A1","bg-primary-hover":En("primary-40"),"bg-primary-subtlest-hover":En("primary-90"),"bg-primary-subtlest-selected":En("primary-90"),"overlay-strong":"rgba(40, 40, 40, 0.85)","overlay-subtle":"rgba(40, 40, 40, 0.20)",hyperlink:En("primary-50"),"hyperlink-hover":En("primary-40"),"hyperlink-visited":En("primary-40"),"hyperlink-inverse":En("primary-inverse"),"focus-ring":En("black"),"focus-ring-inverse":En("white")},Bn={collections:{lifesg:Cn,bookingsg:Cn,rbs:Cn,mylegacy:Cn,ccube:Cn,pa:{text:En("neutral-30"),"text-subtle":En("neutral-40"),"text-subtler":En("neutral-50"),"text-subtlest":En("neutral-70"),"text-primary":En("neutral-10"),"text-hover":En("neutral-70"),"text-selected":En("neutral-20"),"text-selected-hover":En("neutral-10"),"text-disabled":En("neutral-50"),"text-disabled-subtle":En("neutral-60"),"text-disabled-subtlest":En("neutral-80"),"text-selected-disabled":En("neutral-40"),"text-success":En("success-40"),"text-warning":En("warning-40"),"text-error":En("brand-30"),"text-info":En("neutral-40"),"text-inverse":En("neutral-100"),icon:En("neutral-40"),"icon-subtle":En("neutral-50"),"icon-strongest":En("neutral-10"),"icon-primary":En("neutral-10"),"icon-primary-subtle":En("neutral-30"),"icon-primary-subtlest":En("neutral-60"),"icon-hover":En("neutral-70"),"icon-selected":En("brand-20"),"icon-selected-hover":En("brand-10"),"icon-disabled":En("neutral-50"),"icon-disabled-subtle":En("neutral-60"),"icon-selected-disabled":En("neutral-40"),"icon-success":En("success-40"),"icon-warning":En("warning-60"),"icon-error":En("brand-30"),"icon-error-strong":En("brand-10"),"icon-info":En("neutral-40"),"icon-inverse":En("neutral-100"),"icon-primary-inverse":"#F9B371",border:En("neutral-90"),"border-strong":En("neutral-30"),"border-stronger":En("neutral-20"),"border-primary":En("neutral-40"),"border-primary-subtle":En("neutral-60"),"border-hover":En("neutral-80"),"border-hover-strong":En("neutral-10"),"border-selected":En("neutral-20"),"border-selected-subtle":En("neutral-40"),"border-selected-subtlest":En("neutral-70"),"border-selected-hover":En("neutral-10"),"border-focus":En("brand-60"),"border-focus-strong":En("brand-40"),"border-disabled":En("neutral-90"),"border-selected-disabled":En("neutral-80"),"border-success":En("success-40"),"border-warning":En("warning-60"),"border-error":En("brand-30"),"border-error-focus":En("brand-20"),"border-error-focus-strong":En("brand-10"),"border-error-strong":En("brand-20"),"border-info":En("neutral-40"),bg:En("neutral-100"),"bg-strong":En("neutral-95"),"bg-stronger":En("neutral-90"),"bg-strongest":En("neutral-80"),"bg-hover":En("brand-90"),"bg-hover-strong":En("brand-80"),"bg-hover-subtle":En("neutral-90"),"bg-hover-neutral":En("neutral-90"),"bg-hover-neutral-strong":En("neutral-90"),"bg-selected":En("brand-50"),"bg-selected-hover":En("brand-70"),"bg-selected-strong":En("brand-90"),"bg-selected-stronger":En("brand-40"),"bg-selected-strongest":En("brand-20"),"bg-selected-strongest-hover":En("brand-10"),"bg-disabled":En("neutral-90"),"bg-selected-disabled":En("neutral-90"),"bg-selected-stronger-disabled":En("neutral-80"),"bg-success":En("success-100"),"bg-success-hover":En("success-95"),"bg-success-strong":En("success-50"),"bg-success-strong-hover":En("success-40"),"bg-warning":En("warning-100"),"bg-warning-hover":En("warning-95"),"bg-warning-strong":En("warning-50"),"bg-warning-strong-hover":En("warning-40"),"bg-info":En("neutral-95"),"bg-info-hover":En("info-95"),"bg-info-strong":En("info-50"),"bg-info-strong-hover":En("info-40"),"bg-error":En("brand-100"),"bg-error-hover":En("error-95"),"bg-error-strong":En("error-50"),"bg-error-strong-hover":En("error-40"),"bg-inverse":En("neutral-40"),"bg-inverse-subtle":En("neutral-60"),"bg-inverse-subtler":En("neutral-70"),"bg-inverse-subtlest":En("neutral-80"),"bg-inverse-hover":En("neutral-30"),"bg-primary":En("brand-20"),"bg-primary-subtle":En("brand-60"),"bg-primary-subtler":En("brand-80"),"bg-primary-subtlest":En("brand-100"),"bg-available":En("success-60"),"bg-primary-hover":En("brand-10"),"bg-primary-subtlest-hover":En("brand-80"),"bg-primary-subtlest-selected":En("brand-40"),"overlay-strong":"rgba(25, 25, 25, 0.95)","overlay-subtle":"rgba(25, 25, 25, 0.20)",hyperlink:En("neutral-10"),"hyperlink-hover":En("neutral-40"),"hyperlink-visited":En("neutral-50"),"hyperlink-inverse":"#F8AE68","focus-ring":En("black"),"focus-ring-inverse":En("white")}},defaultValue:"lifesg"},Mn=e=>r=>{var n;const t=r.theme,i=yn(Bn,null==t?void 0:t.colourScheme),o=(null===(n=null==t?void 0:t.overrides)||void 0===n?void 0:n.semanticColour)?fn(i,e,t.overrides.semanticColour):i[e];return"function"==typeof o?o(r):o},kn={text:Mn("text"),"text-subtle":Mn("text-subtle"),"text-subtler":Mn("text-subtler"),"text-subtlest":Mn("text-subtlest"),"text-primary":Mn("text-primary"),"text-hover":Mn("text-hover"),"text-selected":Mn("text-selected"),"text-selected-hover":Mn("text-selected-hover"),"text-disabled":Mn("text-disabled"),"text-disabled-subtle":Mn("text-disabled-subtle"),"text-disabled-subtlest":Mn("text-disabled-subtlest"),"text-selected-disabled":Mn("text-selected-disabled"),"text-success":Mn("text-success"),"text-warning":Mn("text-warning"),"text-error":Mn("text-error"),"text-info":Mn("text-info"),"text-inverse":Mn("text-inverse"),icon:Mn("icon"),"icon-subtle":Mn("icon-subtle"),"icon-strongest":Mn("icon-strongest"),"icon-primary":Mn("icon-primary"),"icon-primary-subtle":Mn("icon-primary-subtle"),"icon-primary-subtlest":Mn("icon-primary-subtlest"),"icon-hover":Mn("icon-hover"),"icon-selected":Mn("icon-selected"),"icon-selected-hover":Mn("icon-selected-hover"),"icon-disabled":Mn("icon-disabled"),"icon-disabled-subtle":Mn("icon-disabled-subtle"),"icon-selected-disabled":Mn("icon-selected-disabled"),"icon-success":Mn("icon-success"),"icon-warning":Mn("icon-warning"),"icon-error":Mn("icon-error"),"icon-error-strong":Mn("icon-error-strong"),"icon-info":Mn("icon-info"),"icon-inverse":Mn("icon-inverse"),"icon-primary-inverse":Mn("icon-primary-inverse"),border:Mn("border"),"border-strong":Mn("border-strong"),"border-stronger":Mn("border-stronger"),"border-primary":Mn("border-primary"),"border-primary-subtle":Mn("border-primary-subtle"),"border-hover":Mn("border-hover"),"border-hover-strong":Mn("border-hover-strong"),"border-selected":Mn("border-selected"),"border-selected-subtle":Mn("border-selected-subtle"),"border-selected-subtlest":Mn("border-selected-subtlest"),"border-selected-hover":Mn("border-selected-hover"),"border-focus":Mn("border-focus"),"border-focus-strong":Mn("border-focus-strong"),"border-disabled":Mn("border-disabled"),"border-selected-disabled":Mn("border-selected-disabled"),"border-success":Mn("border-success"),"border-warning":Mn("border-warning"),"border-error":Mn("border-error"),"border-error-focus":Mn("border-error-focus"),"border-error-focus-strong":Mn("border-error-focus-strong"),"border-error-strong":Mn("border-error-strong"),"border-info":Mn("border-info"),bg:Mn("bg"),"bg-strong":Mn("bg-strong"),"bg-stronger":Mn("bg-stronger"),"bg-strongest":Mn("bg-strongest"),"bg-hover":Mn("bg-hover"),"bg-hover-strong":Mn("bg-hover-strong"),"bg-hover-subtle":Mn("bg-hover-subtle"),"bg-hover-neutral":Mn("bg-hover-neutral"),"bg-hover-neutral-strong":Mn("bg-hover-neutral-strong"),"bg-selected":Mn("bg-selected"),"bg-selected-hover":Mn("bg-selected-hover"),"bg-selected-strong":Mn("bg-selected-strong"),"bg-selected-stronger":Mn("bg-selected-stronger"),"bg-selected-strongest":Mn("bg-selected-strongest"),"bg-selected-strongest-hover":Mn("bg-selected-strongest-hover"),"bg-disabled":Mn("bg-disabled"),"bg-selected-disabled":Mn("bg-selected-disabled"),"bg-selected-stronger-disabled":Mn("bg-selected-stronger-disabled"),"bg-success":Mn("bg-success"),"bg-success-hover":Mn("bg-success-hover"),"bg-success-strong":Mn("bg-success-strong"),"bg-success-strong-hover":Mn("bg-success-strong-hover"),"bg-warning":Mn("bg-warning"),"bg-warning-hover":Mn("bg-warning-hover"),"bg-warning-strong":Mn("bg-warning-strong"),"bg-warning-strong-hover":Mn("bg-warning-strong-hover"),"bg-info":Mn("bg-info"),"bg-info-hover":Mn("bg-info-hover"),"bg-info-strong":Mn("bg-info-strong"),"bg-info-strong-hover":Mn("bg-info-strong-hover"),"bg-error":Mn("bg-error"),"bg-error-hover":Mn("bg-error-hover"),"bg-error-strong":Mn("bg-error-strong"),"bg-error-strong-hover":Mn("bg-error-strong-hover"),"bg-inverse":Mn("bg-inverse"),"bg-inverse-subtle":Mn("bg-inverse-subtle"),"bg-inverse-subtler":Mn("bg-inverse-subtler"),"bg-inverse-subtlest":Mn("bg-inverse-subtlest"),"bg-inverse-hover":Mn("bg-inverse-hover"),"bg-primary":Mn("bg-primary"),"bg-primary-subtle":Mn("bg-primary-subtle"),"bg-primary-subtler":Mn("bg-primary-subtler"),"bg-primary-subtlest":Mn("bg-primary-subtlest"),"bg-available":Mn("bg-available"),"bg-primary-hover":Mn("bg-primary-hover"),"bg-primary-subtlest-hover":Mn("bg-primary-subtlest-hover"),"bg-primary-subtlest-selected":Mn("bg-primary-subtlest-selected"),"overlay-strong":Mn("overlay-strong"),"overlay-subtle":Mn("overlay-subtle"),hyperlink:Mn("hyperlink"),"hyperlink-hover":Mn("hyperlink-hover"),"hyperlink-visited":Mn("hyperlink-visited"),"hyperlink-inverse":Mn("hyperlink-inverse"),"focus-ring":Mn("focus-ring"),"focus-ring-inverse":Mn("focus-ring-inverse")},zn={collections:{default:{solid:e=>r=>{var n,t,i;const{thickness:o,radius:s,colour:a}=e||{},l=null!==(n="function"==typeof o?o(r):o)&&void 0!==n?n:wn["width-010"](r),d=null!==(t="function"==typeof s?s(r):s)&&void 0!==t?t:0,c=null!==(i="function"==typeof a?a(r):a)&&void 0!==i?i:kn.border(r),u=wn.solid;return f`
            border: ${l} ${u} ${c};
            border-radius: ${d};
        `},"dashed-default":e=>r=>{var n,t,i;const{thickness:o,radius:s,colour:a}=e||{},l=null!==(n="function"==typeof o?o(r):o)&&void 0!==n?n:wn["width-010"](r),d=null!==(t="function"==typeof s?s(r):s)&&void 0!==t?t:0,c=null!==(i="function"==typeof a?a(r):a)&&void 0!==i?i:kn.border(r),u=encodeURIComponent(`<svg width='100%' height='100%' xmlns='http://www.w3.org/2000/svg'><rect width='100%' height='100%' fill='none' rx='${d}' ry='${d}' stroke='${c}' stroke-width='${l}' stroke-dasharray='4, 8' stroke-dashoffset='0' stroke-linecap='square'/></svg>`);return f`
            background-image: url("data:image/svg+xml,${u}");
            border-radius: ${d};
        `}}},defaultValue:"default"},On=e=>1===e.length&&"theme"in e[0],An=e=>(...r)=>n=>{const t=On(r)?[]:r,i=On(r)?r[0]:n,o=i.theme;return(0,yn(zn,null==o?void 0:o.borderScheme)[e])(...t)(i)},Sn={solid:An("solid"),"dashed-default":An("dashed-default")},_n={collections:{default:{"xxs-min":0,"xxs-max":320,"xs-min":321,"xs-max":375,"sm-min":376,"sm-max":420,"md-min":421,"md-max":767,"lg-min":768,"lg-max":1023,"xl-min":1024,"xl-max":1440,"xxl-min":1441,"xxs-column":8,"xs-column":8,"sm-column":8,"md-column":8,"lg-column":12,"xl-column":12,"xxl-column":12,"xxs-gutter":16,"xs-gutter":16,"sm-gutter":16,"md-gutter":16,"lg-gutter":32,"xl-gutter":32,"xxl-gutter":32,"xxs-margin":24,"xs-margin":24,"sm-margin":24,"md-margin":24,"lg-margin":48,"xl-margin":48,"xxl-margin":48}},defaultValue:"default"},Tn=e=>r=>{var n;const t=r.theme,i=yn(_n,null==t?void 0:t.breakpointScheme);let o;return o=(null===(n=null==t?void 0:t.overrides)||void 0===n?void 0:n.breakpoint)?fn(i,e,t.overrides.breakpoint):i[e],o},Ln={"xxs-min":Tn("xxs-min"),"xxs-max":Tn("xxs-max"),"xs-min":Tn("xs-min"),"xs-max":Tn("xs-max"),"sm-min":Tn("sm-min"),"sm-max":Tn("sm-max"),"md-min":Tn("md-min"),"md-max":Tn("md-max"),"lg-min":Tn("lg-min"),"lg-max":Tn("lg-max"),"xl-min":Tn("xl-min"),"xl-max":Tn("xl-max"),"xxl-min":Tn("xxl-min"),"xxs-column":Tn("xxs-column"),"xs-column":Tn("xs-column"),"sm-column":Tn("sm-column"),"md-column":Tn("md-column"),"lg-column":Tn("lg-column"),"xl-column":Tn("xl-column"),"xxl-column":Tn("xxl-column"),"xxs-gutter":Tn("xxs-gutter"),"xs-gutter":Tn("xs-gutter"),"sm-gutter":Tn("sm-gutter"),"md-gutter":Tn("md-gutter"),"lg-gutter":Tn("lg-gutter"),"xl-gutter":Tn("xl-gutter"),"xxl-gutter":Tn("xxl-gutter"),"xxs-margin":Tn("xxs-margin"),"xs-margin":Tn("xs-margin"),"sm-margin":Tn("sm-margin"),"md-margin":Tn("md-margin"),"lg-margin":Tn("lg-margin"),"xl-margin":Tn("xl-margin"),"xxl-margin":Tn("xxl-margin")},jn=e=>("max-width"===e?["xxs","xs","sm","md","lg","xl"]:["xxs","xs","sm","md","lg","xl","xxl"]).reduce(((r,n)=>(r[n]=((e,r)=>{const n=Ln["max-width"===e?`${r}-max`:`${r}-min`];return r=>{const t=n(r);return`@media screen and (${e}: ${t}px)`}})(e,n),r)),{}),Yn={MaxWidth:jn("max-width"),MinWidth:jn("min-width")},Pn={collections:{default:{"heading-size-xxl":"3rem","heading-size-xl":"2.5rem","heading-size-lg":"2rem","heading-size-md":"1.625rem","heading-size-sm":"1.375rem","heading-size-xs":"1.125rem","heading-lh-xxl":"3.5rem","heading-lh-xl":"3rem","heading-lh-lg":"2.5rem","heading-lh-md":"2.25rem","heading-lh-sm":"1.75rem","heading-lh-xs":"1.625rem","heading-ls-xxl":"-0.056rem","heading-ls-xl":"-0.032rem","heading-ls-lg":"-0.032rem","heading-ls-md":"0rem","heading-ls-sm":"0rem","heading-ls-xs":"0rem","weight-light":"300","weight-regular":"400","weight-semibold":"600","weight-bold":"700","font-family":"Open Sans","body-size-baseline":"1.125rem","body-size-md":"1rem","body-size-sm":"0.875rem","body-size-xs":"0.75rem","body-lh-baseline":"1.625rem","body-lh-md":"1.5rem","body-lh-sm":"1.625rem","body-lh-xs":"1.25rem","body-ls-baseline":"0rem","body-ls-md":"0.014rem","body-ls-sm":"0.012rem","body-ls-xs":"0.012rem","form-label-size":"1rem","form-description-size":"0.875rem","form-label-lh":"1.5rem","form-description-lh":"1.6rem","form-label-ls":"0.014rem","form-description-ls":"0.012rem"},bookingsg:{"heading-size-xxl":"3rem","heading-size-xl":"2.5rem","heading-size-lg":"2rem","heading-size-md":"1.625rem","heading-size-sm":"1.375rem","heading-size-xs":"1.125rem","heading-lh-xxl":"3.5rem","heading-lh-xl":"3rem","heading-lh-lg":"2.5rem","heading-lh-md":"2.25rem","heading-lh-sm":"1.75rem","heading-lh-xs":"1.75rem","heading-ls-xxl":"-0.056rem","heading-ls-xl":"-0.032rem","heading-ls-lg":"-0.032rem","heading-ls-md":"0rem","heading-ls-sm":"0rem","heading-ls-xs":"0rem","weight-light":"300","weight-regular":"400","weight-semibold":"600","weight-bold":"700","font-family":"Plus Jakarta Sans","body-size-baseline":"1.125rem","body-size-md":"1rem","body-size-sm":"0.875rem","body-size-xs":"0.75rem","body-lh-baseline":"1.75rem","body-lh-md":"1.5rem","body-lh-sm":"1.6rem","body-lh-xs":"1.2rem","body-ls-baseline":"0rem","body-ls-md":"0.014rem","body-ls-sm":"0.012rem","body-ls-xs":"0.012rem","form-label-size":"1rem","form-description-size":"0.875rem","form-label-lh":"1.5rem","form-description-lh":"1.6rem","form-label-ls":"0.014rem","form-description-ls":"0.012rem"},pa:{"heading-size-xxl":"3rem","heading-size-xl":"2.5rem","heading-size-lg":"2rem","heading-size-md":"1.625rem","heading-size-sm":"1.375rem","heading-size-xs":"1.125rem","heading-lh-xxl":"3.5rem","heading-lh-xl":"3rem","heading-lh-lg":"2.5rem","heading-lh-md":"2.25rem","heading-lh-sm":"1.75rem","heading-lh-xs":"1.625rem","heading-ls-xxl":"-0.056rem","heading-ls-xl":"-0.032rem","heading-ls-lg":"0rem","heading-ls-md":"0rem","heading-ls-sm":"0rem","heading-ls-xs":"0rem","weight-light":"300","weight-regular":"400","weight-semibold":"600","weight-bold":"700","font-family":"Lato","body-size-baseline":"1.375rem","body-size-md":"1rem","body-size-sm":"0.875rem","body-size-xs":"0.75rem","body-lh-baseline":"1.5rem","body-lh-md":"1.5rem","body-lh-sm":"1.6rem","body-lh-xs":"1.2rem","body-ls-baseline":"0.014rem","body-ls-md":"0.014rem","body-ls-sm":"0.012rem","body-ls-xs":"0.012rem","form-label-size":"1rem","form-description-size":"0.875rem","form-label-lh":"1.5rem","form-description-lh":"1.6rem","form-label-ls":"0.014rem","form-description-ls":"0.012rem"}},defaultValue:"default"},Rn=e=>r=>{var n;const t=r.theme,i=yn(Pn,null==t?void 0:t.fontScheme);return(null===(n=null==t?void 0:t.overrides)||void 0===n?void 0:n.fontSpec)?fn(i,e,t.overrides.fontSpec):i[e]},In={"heading-size-xxl":Rn("heading-size-xxl"),"heading-size-xl":Rn("heading-size-xl"),"heading-size-lg":Rn("heading-size-lg"),"heading-size-md":Rn("heading-size-md"),"heading-size-sm":Rn("heading-size-sm"),"heading-size-xs":Rn("heading-size-xs"),"heading-lh-xxl":Rn("heading-lh-xxl"),"heading-lh-xl":Rn("heading-lh-xl"),"heading-lh-lg":Rn("heading-lh-lg"),"heading-lh-md":Rn("heading-lh-md"),"heading-lh-sm":Rn("heading-lh-sm"),"heading-lh-xs":Rn("heading-lh-xs"),"heading-ls-xxl":Rn("heading-ls-xxl"),"heading-ls-xl":Rn("heading-ls-xl"),"heading-ls-lg":Rn("heading-ls-lg"),"heading-ls-md":Rn("heading-ls-md"),"heading-ls-sm":Rn("heading-ls-sm"),"heading-ls-xs":Rn("heading-ls-xs"),"weight-light":Rn("weight-light"),"weight-regular":Rn("weight-regular"),"weight-semibold":Rn("weight-semibold"),"weight-bold":Rn("weight-bold"),"font-family":Rn("font-family"),"body-size-baseline":Rn("body-size-baseline"),"body-size-md":Rn("body-size-md"),"body-size-sm":Rn("body-size-sm"),"body-size-xs":Rn("body-size-xs"),"body-lh-baseline":Rn("body-lh-baseline"),"body-lh-md":Rn("body-lh-md"),"body-lh-sm":Rn("body-lh-sm"),"body-lh-xs":Rn("body-lh-xs"),"body-ls-baseline":Rn("body-ls-baseline"),"body-ls-md":Rn("body-ls-md"),"body-ls-sm":Rn("body-ls-sm"),"body-ls-xs":Rn("body-ls-xs"),"form-label-size":Rn("form-label-size"),"form-description-size":Rn("form-description-size"),"form-label-lh":Rn("form-label-lh"),"form-description-lh":Rn("form-description-lh"),"form-label-ls":Rn("form-label-ls"),"form-description-ls":Rn("form-description-ls")},Hn=(e,r,n,t,i)=>{const{disableLigatures:o}=i||{};return f`
        font-family: ${Rn("font-family")};
        font-size: ${Rn(e)};
        font-weight: ${Rn(r)};
        line-height: ${Rn(n)};
        letter-spacing: ${Rn(t)};

        font-variant: ${o?"no-common-ligatures":"normal"};
    `},Wn=(e={})=>({"heading-xxl-light":Hn("heading-size-xxl","weight-light","heading-lh-xxl","heading-ls-xxl",e),"heading-xxl-regular":Hn("heading-size-xxl","weight-regular","heading-lh-xxl","heading-ls-xxl",e),"heading-xxl-semibold":Hn("heading-size-xxl","weight-semibold","heading-lh-xxl","heading-ls-xxl",e),"heading-xxl-bold":Hn("heading-size-xxl","weight-bold","heading-lh-xxl","heading-ls-xxl",e),"heading-xl-light":Hn("heading-size-xl","weight-light","heading-lh-xl","heading-ls-xl",e),"heading-xl-regular":Hn("heading-size-xl","weight-regular","heading-lh-xl","heading-ls-xl",e),"heading-xl-semibold":Hn("heading-size-xl","weight-semibold","heading-lh-xl","heading-ls-xl",e),"heading-xl-bold":Hn("heading-size-xl","weight-bold","heading-lh-xl","heading-ls-xl",e),"heading-lg-light":Hn("heading-size-lg","weight-light","heading-lh-lg","heading-ls-lg",e),"heading-lg-regular":Hn("heading-size-lg","weight-regular","heading-lh-lg","heading-ls-lg",e),"heading-lg-semibold":Hn("heading-size-lg","weight-semibold","heading-lh-lg","heading-ls-lg",e),"heading-lg-bold":Hn("heading-size-lg","weight-bold","heading-lh-lg","heading-ls-lg",e),"heading-md-light":Hn("heading-size-md","weight-light","heading-lh-md","heading-ls-md",e),"heading-md-regular":Hn("heading-size-md","weight-regular","heading-lh-md","heading-ls-md",e),"heading-md-semibold":Hn("heading-size-md","weight-semibold","heading-lh-md","heading-ls-md",e),"heading-md-bold":Hn("heading-size-md","weight-bold","heading-lh-md","heading-ls-md",e),"heading-sm-light":Hn("heading-size-sm","weight-light","heading-lh-sm","heading-ls-sm",e),"heading-sm-regular":Hn("heading-size-sm","weight-regular","heading-lh-sm","heading-ls-sm",e),"heading-sm-semibold":Hn("heading-size-sm","weight-semibold","heading-lh-sm","heading-ls-sm",e),"heading-sm-bold":Hn("heading-size-sm","weight-bold","heading-lh-sm","heading-ls-sm",e),"heading-xs-light":Hn("heading-size-xs","weight-light","heading-lh-xs","heading-ls-xs",e),"heading-xs-regular":Hn("heading-size-xs","weight-regular","heading-lh-xs","heading-ls-xs",e),"heading-xs-semibold":Hn("heading-size-xs","weight-semibold","heading-lh-xs","heading-ls-xs",e),"heading-xs-bold":Hn("heading-size-xs","weight-bold","heading-lh-xs","heading-ls-xs",e),"body-baseline-light":Hn("body-size-baseline","weight-light","body-lh-baseline","body-ls-baseline",e),"body-baseline-regular":Hn("body-size-baseline","weight-regular","body-lh-baseline","body-ls-baseline",e),"body-baseline-semibold":Hn("body-size-baseline","weight-semibold","body-lh-baseline","body-ls-baseline",e),"body-baseline-bold":Hn("body-size-baseline","weight-bold","body-lh-baseline","body-ls-baseline",e),"body-md-light":Hn("body-size-md","weight-light","body-lh-md","body-ls-md",e),"body-md-regular":Hn("body-size-md","weight-regular","body-lh-md","body-ls-md",e),"body-md-semibold":Hn("body-size-md","weight-semibold","body-lh-md","body-ls-md",e),"body-md-bold":Hn("body-size-md","weight-bold","body-lh-md","body-ls-md",e),"body-sm-light":Hn("body-size-sm","weight-light","body-lh-sm","body-ls-sm",e),"body-sm-regular":Hn("body-size-sm","weight-regular","body-lh-sm","body-ls-sm",e),"body-sm-semibold":Hn("body-size-sm","weight-semibold","body-lh-sm","body-ls-sm",e),"body-sm-bold":Hn("body-size-sm","weight-bold","body-lh-sm","body-ls-sm",e),"body-xs-light":Hn("body-size-xs","weight-light","body-lh-xs","body-ls-xs",e),"body-xs-regular":Hn("body-size-xs","weight-regular","body-lh-xs","body-ls-xs",e),"body-xs-semibold":Hn("body-size-xs","weight-semibold","body-lh-xs","body-ls-xs",e),"body-xs-bold":Hn("body-size-xs","weight-bold","body-lh-xs","body-ls-xs",e),"form-label":Hn("form-label-size","weight-semibold","form-label-lh","form-label-ls",e),"form-description":Hn("form-description-size","weight-regular","form-description-lh","form-description-ls",e)}),Nn={collections:{default:Wn(),bookingsg:Wn({disableLigatures:!0}),pa:Wn({disableLigatures:!0})},defaultValue:"default"},Vn=e=>r=>{var n;const t=r.theme,i=yn(Nn,null==t?void 0:t.fontScheme),o=(null===(n=null==t?void 0:t.overrides)||void 0===n?void 0:n.font)?fn(i,e,t.overrides.font):i[e];return"function"==typeof o?o(r):o},Kn={"heading-xxl-light":Vn("heading-xxl-light"),"heading-xxl-regular":Vn("heading-xxl-regular"),"heading-xxl-semibold":Vn("heading-xxl-semibold"),"heading-xxl-bold":Vn("heading-xxl-bold"),"heading-xl-light":Vn("heading-xl-light"),"heading-xl-regular":Vn("heading-xl-regular"),"heading-xl-semibold":Vn("heading-xl-semibold"),"heading-xl-bold":Vn("heading-xl-bold"),"heading-lg-light":Vn("heading-lg-light"),"heading-lg-regular":Vn("heading-lg-regular"),"heading-lg-semibold":Vn("heading-lg-semibold"),"heading-lg-bold":Vn("heading-lg-bold"),"heading-md-light":Vn("heading-md-light"),"heading-md-regular":Vn("heading-md-regular"),"heading-md-semibold":Vn("heading-md-semibold"),"heading-md-bold":Vn("heading-md-bold"),"heading-sm-light":Vn("heading-sm-light"),"heading-sm-regular":Vn("heading-sm-regular"),"heading-sm-semibold":Vn("heading-sm-semibold"),"heading-sm-bold":Vn("heading-sm-bold"),"heading-xs-light":Vn("heading-xs-light"),"heading-xs-regular":Vn("heading-xs-regular"),"heading-xs-semibold":Vn("heading-xs-semibold"),"heading-xs-bold":Vn("heading-xs-bold"),"body-baseline-light":Vn("body-baseline-light"),"body-baseline-regular":Vn("body-baseline-regular"),"body-baseline-semibold":Vn("body-baseline-semibold"),"body-baseline-bold":Vn("body-baseline-bold"),"body-md-light":Vn("body-md-light"),"body-md-regular":Vn("body-md-regular"),"body-md-semibold":Vn("body-md-semibold"),"body-md-bold":Vn("body-md-bold"),"body-sm-light":Vn("body-sm-light"),"body-sm-regular":Vn("body-sm-regular"),"body-sm-semibold":Vn("body-sm-semibold"),"body-sm-bold":Vn("body-sm-bold"),"body-xs-light":Vn("body-xs-light"),"body-xs-regular":Vn("body-xs-regular"),"body-xs-semibold":Vn("body-xs-semibold"),"body-xs-bold":Vn("body-xs-bold"),"form-label":Vn("form-label"),"form-description":Vn("form-description")},Un={collections:{default:{"duration-150":"150ms","duration-250":"250ms","duration-350":"350ms","duration-500":"500ms","duration-800":"800ms","duration-1000":"1000ms","ease-default":"cubic-bezier(0.45, 0.05, 0.55, 0.95)","ease-standard":"cubic-bezier(0.86, 0, 0.07, 1)","ease-entrance":"cubic-bezier(0.18, 0.13, 0, 1)","ease-exit":"cubic-bezier(1, 0, 0.8, 0.85)"}},defaultValue:"default"},Zn=e=>r=>{var n;const t=r.theme,i=yn(Un,null==t?void 0:t.motionScheme);return(null===(n=null==t?void 0:t.overrides)||void 0===n?void 0:n.motion)?fn(i,e,t.overrides.motion):i[e]},Xn={"duration-150":Zn("duration-150"),"duration-250":Zn("duration-250"),"duration-350":Zn("duration-350"),"duration-500":Zn("duration-500"),"duration-800":Zn("duration-800"),"duration-1000":Zn("duration-1000"),"ease-default":Zn("ease-default"),"ease-standard":Zn("ease-standard"),"ease-entrance":Zn("ease-entrance"),"ease-exit":Zn("ease-exit")},qn={collections:{default:{none:0,xs:2,sm:4,md:8,lg:12,full:9999}},defaultValue:"default"},Jn=e=>r=>{var n;const t=r.theme,i=yn(qn,null==t?void 0:t.radiusScheme);return(null===(n=null==t?void 0:t.overrides)||void 0===n?void 0:n.radius)?`${fn(i,e,t.overrides.radius)}px`:`${i[e]}px`},Gn={none:Jn("none"),xs:Jn("xs"),sm:Jn("sm"),md:Jn("md"),lg:Jn("lg"),full:Jn("full")},Qn={collections:{default:{"spacing-0":0,"spacing-4":4,"spacing-8":8,"spacing-12":12,"spacing-16":16,"spacing-20":20,"spacing-24":24,"spacing-32":32,"spacing-40":40,"spacing-48":48,"spacing-64":64,"spacing-72":72,"layout-xs":8,"layout-sm":16,"layout-md":24,"layout-lg":32,"layout-xl":48,"layout-xxl":64,"layout-xxxl":128}},defaultValue:"default"},et=e=>r=>{var n;const t=r.theme,i=yn(Qn,null==t?void 0:t.spacingScheme);return(null===(n=null==t?void 0:t.overrides)||void 0===n?void 0:n.spacing)?`${fn(i,e,t.overrides.spacing)}px`:`${i[e]}px`},rt={"spacing-0":et("spacing-0"),"spacing-4":et("spacing-4"),"spacing-8":et("spacing-8"),"spacing-12":et("spacing-12"),"spacing-16":et("spacing-16"),"spacing-20":et("spacing-20"),"spacing-24":et("spacing-24"),"spacing-32":et("spacing-32"),"spacing-40":et("spacing-40"),"spacing-48":et("spacing-48"),"spacing-64":et("spacing-64"),"spacing-72":et("spacing-72"),"layout-xs":et("layout-xs"),"layout-sm":et("layout-sm"),"layout-md":et("layout-md"),"layout-lg":et("layout-lg"),"layout-xl":et("layout-xl"),"layout-xxl":et("layout-xxl"),"layout-xxxl":et("layout-xxxl")},nt=Object.assign(Object.assign({},kn),{Primitive:Dn}),tt=Object.assign(Object.assign({},Kn),{Spec:In}),it=Xn,ot=Object.assign(Object.assign({},wn),{Util:Sn}),st=rt,at=Gn,lt=Ln,dt=Yn,ct=e=>f`
    display: -webkit-box;
    -webkit-line-clamp: ${e};
    -webkit-box-orient: vertical;
    overflow: hidden;
`,ut=(e,r,n=!1)=>f`
        ${tt[`${e}-${r}`]}
        ${n?"margin-bottom: 1.05em;":"margin-bottom: 0;"}
    `,ht=e=>{if(e)return f`
            ${ct(e)}
        `},gt=(e,r)=>f`
    ${ut(e,r.weight||"regular",r.paragraph)}
    ${((e=!1,r=!1,n)=>r?f`
            display: block;
            ${ht(n)}
        `:e?f`
            display: inline;
        `:f`
            display: block;
            ${ht(n)}
        `)(r.inline,r.paragraph,r.maxLines)}
    color: ${nt.text};
`;var bt;!function(n){const t=(e,r,n)=>{const t=p(e).attrs((({inline:e})=>({as:e?"span":void 0})))`
            ${e=>gt(r,e)}
        `;return t.displayName=`Typography.${n}`,t};n.HeadingXXL=t("h1","heading-xxl","HeadingXXL"),n.HeadingXL=t("h2","heading-xl","HeadingXL"),n.HeadingLG=t("h3","heading-lg","HeadingLG"),n.HeadingMD=t("h4","heading-md","HeadingMD"),n.HeadingSM=t("h5","heading-sm","HeadingSM"),n.HeadingXS=t("h6","heading-xs","HeadingXS");const i=(e,r)=>{const n=p.p.attrs((({inline:e})=>({as:e?"span":void 0})))`
            ${r=>gt(e,r)}
        `;return n.displayName=`Typography.${r}`,n};n.BodyBL=i("body-baseline","BodyBL"),n.BodyMD=i("body-md","BodyMD"),n.BodySM=i("body-sm","BodySM"),n.BodyXS=i("body-xs","BodyXS");const o=(n,t)=>{const i=p.a`
            ${e=>f`
                ${ut(n,e.weight||"regular")}
                color: ${nt.hyperlink};
                text-decoration: none;

                :hover,
                :active,
                :focus {
                    color: ${nt["text-hover"]};
                }
            `}
        `,o=n=>{var{external:t=!1,children:o}=n,s=W(n,["external","children"]);return e(i,Object.assign({},s,{children:[o,t&&r(mt,{})]}))};return o.displayName=`Typography.${t}`,o};n.LinkBL=o("body-baseline","LinkBL"),n.LinkMD=o("body-md","LinkMD"),n.LinkSM=o("body-sm","LinkSM"),n.LinkXS=o("body-xs","LinkXS")}(bt||(bt={}));const mt=p(m)`
    height: 1lh;
    width: 1em;
    margin-left: 0.4em;
    vertical-align: middle;
`;function pt(e,r){return pt=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,r){return e.__proto__=r,e},pt(e,r)}function ft(e){return e&&e.stopPropagation&&e.stopPropagation(),e&&e.preventDefault&&e.preventDefault(),!1}function yt(e){return null==e?[]:Array.isArray(e)?e.slice():[e]}function vt(e){return null!==e&&1===e.length?e[0]:e.slice()}function xt(e){Object.keys(e).forEach((r=>{"undefined"!=typeof document&&document.addEventListener(r,e[r],!1)}))}function wt(e,r){return $t(function(e,r){let n=e;return n<=r.min&&(n=r.min),n>=r.max&&(n=r.max),n}(e,r),r)}function $t(e,r){const n=(e-r.min)%r.step;let t=e-n;return 2*Math.abs(n)>=r.step&&(t+=n>0?r.step:-r.step),parseFloat(t.toFixed(5))}let Ft=function(e){function r(r){var n;(n=e.call(this,r)||this).onKeyUp=()=>{n.onEnd()},n.onMouseUp=()=>{n.onEnd(n.getMouseEventMap())},n.onTouchEnd=e=>{e.preventDefault(),n.onEnd(n.getTouchEventMap())},n.onBlur=()=>{n.setState({index:-1},n.onEnd(n.getKeyDownEventMap()))},n.onMouseMove=e=>{n.setState({pending:!0});const r=n.getMousePosition(e),t=n.getDiffPosition(r[0]),i=n.getValueFromPosition(t);n.move(i)},n.onTouchMove=e=>{if(e.touches.length>1)return;n.setState({pending:!0});const r=n.getTouchPosition(e);if(void 0===n.isScrolling){const e=r[0]-n.startPosition[0],t=r[1]-n.startPosition[1];n.isScrolling=Math.abs(t)>Math.abs(e)}if(n.isScrolling)return void n.setState({index:-1});const t=n.getDiffPosition(r[0]),i=n.getValueFromPosition(t);n.move(i)},n.onKeyDown=e=>{if(!(e.ctrlKey||e.shiftKey||e.altKey||e.metaKey))switch(n.setState({pending:!0}),e.key){case"ArrowLeft":case"ArrowDown":case"Left":case"Down":e.preventDefault(),n.moveDownByStep();break;case"ArrowRight":case"ArrowUp":case"Right":case"Up":e.preventDefault(),n.moveUpByStep();break;case"Home":e.preventDefault(),n.move(n.props.min);break;case"End":e.preventDefault(),n.move(n.props.max);break;case"PageDown":e.preventDefault(),n.moveDownByStep(n.props.pageFn(n.props.step));break;case"PageUp":e.preventDefault(),n.moveUpByStep(n.props.pageFn(n.props.step))}},n.onSliderMouseDown=e=>{if(!n.props.disabled&&2!==e.button){if(n.setState({pending:!0}),!n.props.snapDragDisabled){const r=n.getMousePosition(e);n.forceValueFromPosition(r[0],(e=>{n.start(e,r[0]),xt(n.getMouseEventMap())}))}ft(e)}},n.onSliderClick=e=>{if(!n.props.disabled&&n.props.onSliderClick&&!n.hasMoved){const r=n.getMousePosition(e),t=wt(n.calcValue(n.calcOffsetFromPosition(r[0])),n.props);n.props.onSliderClick(t)}},n.createOnKeyDown=e=>r=>{n.props.disabled||(n.start(e),xt(n.getKeyDownEventMap()),ft(r))},n.createOnMouseDown=e=>r=>{if(n.props.disabled||2===r.button)return;n.setState({pending:!0});const t=n.getMousePosition(r);n.start(e,t[0]),xt(n.getMouseEventMap()),ft(r)},n.createOnTouchStart=e=>r=>{if(n.props.disabled||r.touches.length>1)return;n.setState({pending:!0});const t=n.getTouchPosition(r);n.startPosition=t,n.isScrolling=void 0,n.start(e,t[0]),xt(n.getTouchEventMap()),function(e){e.stopPropagation&&e.stopPropagation()}(r)},n.handleResize=()=>{const e=window.setTimeout((()=>{n.pendingResizeTimeouts.shift(),n.resize()}),0);n.pendingResizeTimeouts.push(e)},n.renderThumb=(e,r)=>{const t=n.props.thumbClassName+" "+n.props.thumbClassName+"-"+r+" "+(n.state.index===r?n.props.thumbActiveClassName:""),i={ref:e=>{n["thumb"+r]=e},key:n.props.thumbClassName+"-"+r,className:t,style:e,onMouseDown:n.createOnMouseDown(r),onTouchStart:n.createOnTouchStart(r),onFocus:n.createOnKeyDown(r),tabIndex:0,role:"slider","aria-orientation":n.props.orientation,"aria-valuenow":n.state.value[r],"aria-valuemin":n.props.min,"aria-valuemax":n.props.max,"aria-label":Array.isArray(n.props.ariaLabel)?n.props.ariaLabel[r]:n.props.ariaLabel,"aria-labelledby":Array.isArray(n.props.ariaLabelledby)?n.props.ariaLabelledby[r]:n.props.ariaLabelledby,"aria-disabled":n.props.disabled},o={index:r,value:vt(n.state.value),valueNow:n.state.value[r]};return n.props.ariaValuetext&&(i["aria-valuetext"]="string"==typeof n.props.ariaValuetext?n.props.ariaValuetext:n.props.ariaValuetext(o)),n.props.renderThumb(i,o)},n.renderTrack=(e,r,t)=>{const i={key:n.props.trackClassName+"-"+e,className:n.props.trackClassName+" "+n.props.trackClassName+"-"+e,style:n.buildTrackStyle(r,n.state.upperBound-t)},o={index:e,value:vt(n.state.value)};return n.props.renderTrack(i,o)};let t=yt(r.value);t.length||(t=yt(r.defaultValue)),n.pendingResizeTimeouts=[];const o=[];for(let e=0;e<t.length;e+=1)t[e]=wt(t[e],r),o.push(e);return n.resizeObserver=null,n.resizeElementRef=i.createRef(),n.state={index:-1,upperBound:0,sliderLength:0,value:t,zIndices:o},n}!function(e,r){e.prototype=Object.create(r.prototype),e.prototype.constructor=e,pt(e,r)}(r,e);var n=r.prototype;return n.componentDidMount=function(){"undefined"!=typeof window&&(this.resizeObserver=new ResizeObserver(this.handleResize),this.resizeObserver.observe(this.resizeElementRef.current),this.resize())},r.getDerivedStateFromProps=function(e,r){const n=yt(e.value);return n.length?r.pending?null:{value:n.map((r=>wt(r,e)))}:null},n.componentDidUpdate=function(){0===this.state.upperBound&&this.resize()},n.componentWillUnmount=function(){this.clearPendingResizeTimeouts(),this.resizeObserver&&this.resizeObserver.disconnect()},n.onEnd=function(e){e&&function(e){Object.keys(e).forEach((r=>{"undefined"!=typeof document&&document.removeEventListener(r,e[r],!1)}))}(e),this.hasMoved&&this.fireChangeEvent("onAfterChange"),this.setState({pending:!1}),this.hasMoved=!1},n.getValue=function(){return vt(this.state.value)},n.getClosestIndex=function(e){let r=Number.MAX_VALUE,n=-1;const{value:t}=this.state,i=t.length;for(let o=0;o<i;o+=1){const i=this.calcOffset(t[o]),s=Math.abs(e-i);s<r&&(r=s,n=o)}return n},n.getMousePosition=function(e){return[e["page"+this.axisKey()],e["page"+this.orthogonalAxisKey()]]},n.getTouchPosition=function(e){const r=e.touches[0];return[r["page"+this.axisKey()],r["page"+this.orthogonalAxisKey()]]},n.getKeyDownEventMap=function(){return{keydown:this.onKeyDown,keyup:this.onKeyUp,focusout:this.onBlur}},n.getMouseEventMap=function(){return{mousemove:this.onMouseMove,mouseup:this.onMouseUp}},n.getTouchEventMap=function(){return{touchmove:this.onTouchMove,touchend:this.onTouchEnd}},n.getValueFromPosition=function(e){const r=e/(this.state.sliderLength-this.state.thumbSize)*(this.props.max-this.props.min);return wt(this.state.startValue+r,this.props)},n.getDiffPosition=function(e){let r=e-this.state.startPosition;return this.props.invert&&(r*=-1),r},n.resize=function(){const{slider:e,thumb0:r}=this;if(!e||!r)return;const n=this.sizeKey(),t=e.getBoundingClientRect(),i=e[n],o=t[this.posMaxKey()],s=t[this.posMinKey()],a=r.getBoundingClientRect()[n.replace("client","").toLowerCase()],l=i-a,d=Math.abs(o-s);this.state.upperBound===l&&this.state.sliderLength===d&&this.state.thumbSize===a||this.setState({upperBound:l,sliderLength:d,thumbSize:a})},n.calcOffset=function(e){const r=this.props.max-this.props.min;return 0===r?0:(e-this.props.min)/r*this.state.upperBound},n.calcValue=function(e){return e/this.state.upperBound*(this.props.max-this.props.min)+this.props.min},n.calcOffsetFromPosition=function(e){const{slider:r}=this,n=r.getBoundingClientRect(),t=n[this.posMaxKey()],i=n[this.posMinKey()];let o=e-(window["page"+this.axisKey()+"Offset"]+(this.props.invert?t:i));return this.props.invert&&(o=this.state.sliderLength-o),o-=this.state.thumbSize/2,o},n.forceValueFromPosition=function(e,r){const n=this.calcOffsetFromPosition(e),t=this.getClosestIndex(n),i=wt(this.calcValue(n),this.props),o=this.state.value.slice();o[t]=i;for(let e=0;e<o.length-1;e+=1)if(o[e+1]-o[e]<this.props.minDistance)return;this.fireChangeEvent("onBeforeChange"),this.hasMoved=!0,this.setState({value:o},(()=>{r(t),this.fireChangeEvent("onChange")}))},n.clearPendingResizeTimeouts=function(){do{const e=this.pendingResizeTimeouts.shift();clearTimeout(e)}while(this.pendingResizeTimeouts.length)},n.start=function(e,r){const n=this["thumb"+e];n&&n.focus();const{zIndices:t}=this.state;t.splice(t.indexOf(e),1),t.push(e),this.setState((n=>({startValue:n.value[e],startPosition:void 0!==r?r:n.startPosition,index:e,zIndices:t})))},n.moveUpByStep=function(e){void 0===e&&(e=this.props.step);const r=this.state.value[this.state.index],n=wt(this.props.invert&&"horizontal"===this.props.orientation?r-e:r+e,this.props);this.move(Math.min(n,this.props.max))},n.moveDownByStep=function(e){void 0===e&&(e=this.props.step);const r=this.state.value[this.state.index],n=wt(this.props.invert&&"horizontal"===this.props.orientation?r+e:r-e,this.props);this.move(Math.max(n,this.props.min))},n.move=function(e){const r=this.state.value.slice(),{index:n}=this.state,{length:t}=r,i=r[n];if(e===i)return;this.hasMoved||this.fireChangeEvent("onBeforeChange"),this.hasMoved=!0;const{pearling:o,max:s,min:a,minDistance:l}=this.props;if(!o){if(n>0){const t=r[n-1];e<t+l&&(e=t+l)}if(n<t-1){const t=r[n+1];e>t-l&&(e=t-l)}}r[n]=e,o&&t>1&&(e>i?(this.pushSucceeding(r,l,n),function(e,r,n,t){for(let i=0;i<e;i+=1){const o=t-i*n;r[e-1-i]>o&&(r[e-1-i]=o)}}(t,r,l,s)):e<i&&(this.pushPreceding(r,l,n),function(e,r,n,t){for(let i=0;i<e;i+=1){const e=t+i*n;r[i]<e&&(r[i]=e)}}(t,r,l,a))),this.setState({value:r},this.fireChangeEvent.bind(this,"onChange"))},n.pushSucceeding=function(e,r,n){let t,i;for(t=n,i=e[t]+r;null!==e[t+1]&&i>e[t+1];t+=1,i=e[t]+r)e[t+1]=$t(i,this.props)},n.pushPreceding=function(e,r,n){for(let t=n,i=e[t]-r;null!==e[t-1]&&i<e[t-1];t-=1,i=e[t]-r)e[t-1]=$t(i,this.props)},n.axisKey=function(){return"vertical"===this.props.orientation?"Y":"X"},n.orthogonalAxisKey=function(){return"vertical"===this.props.orientation?"X":"Y"},n.posMinKey=function(){return"vertical"===this.props.orientation?this.props.invert?"bottom":"top":this.props.invert?"right":"left"},n.posMaxKey=function(){return"vertical"===this.props.orientation?this.props.invert?"top":"bottom":this.props.invert?"left":"right"},n.sizeKey=function(){return"vertical"===this.props.orientation?"clientHeight":"clientWidth"},n.fireChangeEvent=function(e){this.props[e]&&this.props[e](vt(this.state.value),this.state.index)},n.buildThumbStyle=function(e,r){const n={position:"absolute",touchAction:"none",willChange:this.state.index>=0?this.posMinKey():void 0,zIndex:this.state.zIndices.indexOf(r)+1};return n[this.posMinKey()]=e+"px",n},n.buildTrackStyle=function(e,r){const n={position:"absolute",willChange:this.state.index>=0?this.posMinKey()+","+this.posMaxKey():void 0};return n[this.posMinKey()]=e,n[this.posMaxKey()]=r,n},n.buildMarkStyle=function(e){var r;return(r={position:"absolute"})[this.posMinKey()]=e,r},n.renderThumbs=function(e){const{length:r}=e,n=[];for(let t=0;t<r;t+=1)n[t]=this.buildThumbStyle(e[t],t);const t=[];for(let e=0;e<r;e+=1)t[e]=this.renderThumb(n[e],e);return t},n.renderTracks=function(e){const r=[],n=e.length-1;r.push(this.renderTrack(0,0,e[0]));for(let t=0;t<n;t+=1)r.push(this.renderTrack(t+1,e[t],e[t+1]));return r.push(this.renderTrack(n+1,e[n],this.state.upperBound)),r},n.renderMarks=function(){let{marks:e}=this.props;const r=this.props.max-this.props.min+1;return"boolean"==typeof e?e=Array.from({length:r}).map(((e,r)=>r)):"number"==typeof e&&(e=Array.from({length:r}).map(((e,r)=>r)).filter((r=>r%e==0))),e.map(parseFloat).sort(((e,r)=>e-r)).map((e=>{const r=this.calcOffset(e),n={key:e,className:this.props.markClassName,style:this.buildMarkStyle(r)};return this.props.renderMark(n)}))},n.render=function(){const e=[],{value:r}=this.state,n=r.length;for(let t=0;t<n;t+=1)e[t]=this.calcOffset(r[t],t);const t=this.props.withTracks?this.renderTracks(e):null,o=this.renderThumbs(e),s=this.props.marks?this.renderMarks():null;return i.createElement("div",{ref:e=>{this.slider=e,this.resizeElementRef.current=e},style:{position:"relative"},className:this.props.className+(this.props.disabled?" disabled":""),onMouseDown:this.onSliderMouseDown,onClick:this.onSliderClick},t,o,s)},r}(i.Component);Ft.displayName="ReactSlider",Ft.defaultProps={min:0,max:100,step:1,pageFn:e=>10*e,minDistance:0,defaultValue:0,orientation:"horizontal",className:"slider",thumbClassName:"thumb",thumbActiveClassName:"active",trackClassName:"track",markClassName:"mark",withTracks:!0,pearling:!1,disabled:!1,snapDragDisabled:!1,invert:!1,marks:[],renderThumb:e=>i.createElement("div",e),renderTrack:e=>i.createElement("div",e),renderMark:e=>i.createElement("span",e)};var Et=Ft;const Dt=p.div`
    isolation: isolate;
`,Ct=p.div`
    margin-top: ${st["spacing-8"]};
    display: flex;
    justify-content: space-between;
    gap: ${st["spacing-8"]};
`,Bt=p.div`
    margin-bottom: ${st["spacing-8"]};
`,Mt=p(bt.BodyBL)`
    overflow-wrap: anywhere;
`,kt=p(Et)`
    height: 0.875rem;
`,zt=p.div`
    height: 2.5rem;
    width: 2.5rem;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    ${e=>e.$disabled?f`
                cursor: not-allowed;
            `:e.$readOnly?void 0:f`
                cursor: grab;
                :active {
                    cursor: grabbing;
                }
            `}

    :after {
        content: "";
        display: block;
        height: 0.875rem;
        width: 0.875rem;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);

        background-color: ${nt.bg};
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.16);
        border: ${ot["width-010"]} ${ot.solid}
            ${e=>e.$disabled?nt["border-selected-disabled"]:nt["border-strong"]};
        border-radius: 50%;
    }
`,Ot=p.div`
    height: 0.875rem;
    width: 0.875rem;
    position: relative;
    outline: none;

    :focus ${zt}:after {
        outline-offset: -1px;
        outline: ${ot["width-040"]} ${ot.solid}
            ${nt["border-selected"]};
    }
`,At=p.div`
    height: 0.25rem;
    top: 50%;
    transform: translateY(-50%);
    border-radius: ${at.full};

    background: ${e=>e.$color&&"function"==typeof e.$color?e.$color(e):e.$color||nt["border-strong"](e)};
`,St=p.div`
    display: flex;
    margin-bottom: ${st["spacing-16"]};
    align-items: baseline;
`,_t=p.div`
    margin: 0 0.5rem;
`,Tt=p.div`
    width: 100%;
    height: 4rem;
    display: flex;
    align-items: flex-end;
    padding: 0 0.4375rem;
`,Lt=p.div`
    flex: 1;
    border-radius: ${at.sm} ${at.sm} 0 0;
    border: 0.5px solid transparent; // space between bars
    background-clip: content-box;

    ${e=>{let r=nt["bg-strongest"];return e.$disabled&&e.$selected?r=nt["bg-selected-stronger-disabled"]:e.$disabled?r=nt["bg-disabled"]:e.$selected&&(r=nt["bg-selected-stronger"]),f`
            background-color: ${r};
        `}}
`,jt=p((n=>{var{value:t,min:i=0,max:a=100,step:l=1,minRange:d,numOfThumbs:c=2,colors:u,disabled:h,readOnly:g,ariaLabels:b,showSliderLabels:m,sliderLabelPrefix:p,sliderLabelSuffix:f,showIndicatorLabel:y,indicatorLabelPrefix:v,indicatorLabelSuffix:x,renderSliderLabel:w,onChange:$,onChangeEnd:F}=n,E=W(n,["value","min","max","step","minRange","numOfThumbs","colors","disabled","readOnly","ariaLabels","showSliderLabels","sliderLabelPrefix","sliderLabelSuffix","showIndicatorLabel","indicatorLabelPrefix","indicatorLabelSuffix","renderSliderLabel","onChange","onChangeEnd"]);const[D,C]=o(M()),B=function(){const e=function(){const e=h||g?nt["border-disabled"]:nt["border-strong"],r=h||g?nt["border-selected-disabled"]:nt["border-selected"];if(1===c)return[r,e];const n=[];n.push(e);for(let e=0;e<c-1;e++)n.push(r);return n.push(e),n}();return new Array(c+1).fill(0).map(((r,n)=>(null==u?void 0:u[n])||e[n]))}();s((()=>{t!==D&&C(M())}),[t]);function M(){if(t&&t.length===c)return t;const e=[];for(let r=0;r<c;r++)e.push(i+l*r);return e}const k=r=>w?w(r):e(Mt,{children:[p,r,f]});return e(Dt,Object.assign({},E,{children:[y&&r(Bt,{children:(()=>{let r="";if(1===D.length)r=`${D[0]}`;else if(2===D.length)r=`${D[0]} - ${D[1]}`;else if(D.length>2){r=`${Math.min(...D)} - ${Math.max(...D)}`}return e(Mt,{children:[v,r,x]})})()}),r(kt,{step:l,min:i,max:a,value:D,disabled:h||g,onChange:(e,r)=>{if("number"==typeof e){const r=[e];C(r),null==$||$(r)}else{if(r>-1&&D[r]===e[r])return;const n=[...e];C(n),null==$||$(n)}},onAfterChange:e=>{if("number"==typeof e){const r=[e];C(r),null==F||F(r)}else{const r=[...e];C(r),null==F||F(r)}},minDistance:d,ariaLabel:b,renderThumb:(e,n)=>r(Ot,Object.assign({"data-testid":`slider-thumb-${n.index}`},e,{tabIndex:h?void 0:e.tabIndex,children:r(zt,{$disabled:h,$readOnly:g})})),renderTrack:(e,n)=>r(At,Object.assign({"data-testid":`slider-track-${n.index}`},e,{$color:B[n.index]}))}),m&&e(Ct,{children:[r("div",{children:k(i)}),r("div",{children:k(a)})]})]}))}))`
    margin-top: -0.3125rem;
`,Yt=t=>{var{bins:i=[],interval:l,disabled:d,readOnly:c,value:u,showRangeLabels:h,rangeLabelPrefix:g,rangeLabelSuffix:b,ariaLabels:m,onChange:p,onChangeEnd:f,renderEmptyView:y,renderRangeLabel:v}=t,x=W(t,["bins","interval","disabled","readOnly","value","showRangeLabels","rangeLabelPrefix","rangeLabelSuffix","ariaLabels","onChange","onChangeEnd","renderEmptyView","renderRangeLabel"]);const w=i.map((e=>e.count)),$=Math.max(...w),F=i.map((e=>e.minValue)),E=Math.max(...F),D=Math.min(...F),[C,B]=o(O()),M=a((()=>{const e=[...i].sort(((e,r)=>e.minValue-r.minValue)),r=(E-D)/l+1,n=[];for(let t=0;t<r;t++){const r=e.find((e=>e.minValue===D+l*t));r?n.push(r):n.push({count:0,minValue:D+l*t})}return n}),[i,l]);s((()=>{u!==C&&B(O())}),[u]);const k=e=>{const[r,n]=e,t=[r,n];B(t),null==p||p(t)},z=e=>{const[r,n]=e,t=[r,n];B(t),null==f||f(t)};function O(){return null!=u?u:[D,D+l]}const A=r=>v?v(r):e(bt.BodyBL,{children:[g,r,b]});return e("div",Object.assign({},x,{children:[h&&e(St,{children:[A(C[0]),r(_t,{children:"-"}),A(C[1])]}),M.every((e=>0===e.count))&&y?y():e(n,{children:[r(Tt,{children:M.map(((e,n)=>{const t=e.count/$;return r(Lt,{style:{height:t?`calc(calc(100% - 0.25rem) * ${t} + 0.25rem)`:0},$selected:e.minValue>=C[0]&&e.minValue<C[1],$disabled:d||c},n)}))}),r(jt,{min:D,max:E+l,step:l,minRange:l,numOfThumbs:2,value:C,disabled:d,readOnly:c,ariaLabels:m,onChange:k,onChangeEnd:z})]})]}))};var Pt=function(e,r){return Pt=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,r){e.__proto__=r}||function(e,r){for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])},Pt(e,r)};var Rt=function(){return Rt=Object.assign||function(e){for(var r,n=1,t=arguments.length;n<t;n++)for(var i in r=arguments[n])Object.prototype.hasOwnProperty.call(r,i)&&(e[i]=r[i]);return e},Rt.apply(this,arguments)};var It="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};var Ht=function(e){var r=typeof e;return null!=e&&("object"==r||"function"==r)},Wt="object"==typeof It&&It&&It.Object===Object&&It,Nt="object"==typeof self&&self&&self.Object===Object&&self,Vt=Wt||Nt||Function("return this")(),Kt=Vt,Ut=function(){return Kt.Date.now()},Zt=/\s/;var Xt=function(e){for(var r=e.length;r--&&Zt.test(e.charAt(r)););return r},qt=/^\s+/;var Jt=function(e){return e?e.slice(0,Xt(e)+1).replace(qt,""):e},Gt=Vt.Symbol,Qt=Gt,ei=Object.prototype,ri=ei.hasOwnProperty,ni=ei.toString,ti=Qt?Qt.toStringTag:void 0;var ii=function(e){var r=ri.call(e,ti),n=e[ti];try{e[ti]=void 0;var t=!0}catch(e){}var i=ni.call(e);return t&&(r?e[ti]=n:delete e[ti]),i},oi=Object.prototype.toString;var si=ii,ai=function(e){return oi.call(e)},li=Gt?Gt.toStringTag:void 0;var di=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":li&&li in Object(e)?si(e):ai(e)},ci=function(e){return null!=e&&"object"==typeof e};var ui=Jt,hi=Ht,gi=function(e){return"symbol"==typeof e||ci(e)&&"[object Symbol]"==di(e)},bi=/^[-+]0x[0-9a-f]+$/i,mi=/^0b[01]+$/i,pi=/^0o[0-7]+$/i,fi=parseInt;var yi=Ht,vi=Ut,xi=function(e){if("number"==typeof e)return e;if(gi(e))return NaN;if(hi(e)){var r="function"==typeof e.valueOf?e.valueOf():e;e=hi(r)?r+"":r}if("string"!=typeof e)return 0===e?e:+e;e=ui(e);var n=mi.test(e);return n||pi.test(e)?fi(e.slice(2),n?2:8):bi.test(e)?NaN:+e},wi=Math.max,$i=Math.min;var Fi=function(e,r,n){var t,i,o,s,a,l,d=0,c=!1,u=!1,h=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function g(r){var n=t,o=i;return t=i=void 0,d=r,s=e.apply(o,n)}function b(e){var n=e-l;return void 0===l||n>=r||n<0||u&&e-d>=o}function m(){var e=vi();if(b(e))return p(e);a=setTimeout(m,function(e){var n=r-(e-l);return u?$i(n,o-(e-d)):n}(e))}function p(e){return a=void 0,h&&t?g(e):(t=i=void 0,s)}function f(){var e=vi(),n=b(e);if(t=arguments,i=this,l=e,n){if(void 0===a)return function(e){return d=e,a=setTimeout(m,r),c?g(e):s}(l);if(u)return clearTimeout(a),a=setTimeout(m,r),g(l)}return void 0===a&&(a=setTimeout(m,r)),s}return r=xi(r)||0,yi(n)&&(c=!!n.leading,o=(u="maxWait"in n)?wi(xi(n.maxWait)||0,r):o,h="trailing"in n?!!n.trailing:h),f.cancel=function(){void 0!==a&&clearTimeout(a),d=0,t=l=i=a=void 0},f.flush=function(){return void 0===a?s:p(vi())},f},Ei=Fi,Di=Ht;var Ci=function(e,r,n){var t=!0,i=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return Di(n)&&(t="leading"in n?!!n.leading:t,i="trailing"in n?!!n.trailing:i),Ei(e,r,{leading:t,maxWait:r,trailing:i})},Bi=function(e,r,n,t){switch(r){case"debounce":return Fi(e,n,t);case"throttle":return Ci(e,n,t);default:return e}},Mi=function(e){return"function"==typeof e},ki=function(){return"undefined"==typeof window},zi=function(e){return e instanceof Element||e instanceof HTMLDocument},Oi=function(e,r,n,t){return function(i){var o=i.width,s=i.height;r((function(r){return r.width===o&&r.height===s||r.width===o&&!t||r.height===s&&!n?r:(e&&Mi(e)&&e(o,s),{width:o,height:s})}))}};!function(e){function r(r){var n=e.call(this,r)||this;n.cancelHandler=function(){n.resizeHandler&&n.resizeHandler.cancel&&(n.resizeHandler.cancel(),n.resizeHandler=null)},n.attachObserver=function(){var e=n.props,r=e.targetRef,t=e.observerOptions;if(!ki()){r&&r.current&&(n.targetRef.current=r.current);var i=n.getElement();i&&(n.observableElement&&n.observableElement===i||(n.observableElement=i,n.resizeObserver.observe(i,t)))}},n.getElement=function(){var e=n.props,r=e.querySelector,t=e.targetDomEl;if(ki())return null;if(r)return document.querySelector(r);if(t&&zi(t))return t;if(n.targetRef&&zi(n.targetRef.current))return n.targetRef.current;var i=H(n);if(!i)return null;switch(n.getRenderType()){case"renderProp":case"childFunction":case"child":case"childArray":return i;default:return i.parentElement}},n.createResizeHandler=function(e){var r=n.props,t=r.handleWidth,i=void 0===t||t,o=r.handleHeight,s=void 0===o||o,a=r.onResize;if(i||s){var l=Oi(a,n.setState.bind(n),i,s);e.forEach((function(e){var r=e&&e.contentRect||{},t=r.width,i=r.height;!n.skipOnMount&&!ki()&&l({width:t,height:i}),n.skipOnMount=!1}))}},n.getRenderType=function(){var e=n.props,r=e.render,t=e.children;return Mi(r)?"renderProp":Mi(t)?"childFunction":d(t)?"child":Array.isArray(t)?"childArray":"parent"};var t=r.skipOnMount,i=r.refreshMode,o=r.refreshRate,s=void 0===o?1e3:o,a=r.refreshOptions;return n.state={width:void 0,height:void 0},n.skipOnMount=t,n.targetRef=c(),n.observableElement=null,ki()||(n.resizeHandler=Bi(n.createResizeHandler,i,s,a),n.resizeObserver=new window.ResizeObserver(n.resizeHandler)),n}(function(e,r){if("function"!=typeof r&&null!==r)throw new TypeError("Class extends value "+String(r)+" is not a constructor or null");function n(){this.constructor=e}Pt(e,r),e.prototype=null===r?Object.create(r):(n.prototype=r.prototype,new n)})(r,e),r.prototype.componentDidMount=function(){this.attachObserver()},r.prototype.componentDidUpdate=function(){this.attachObserver()},r.prototype.componentWillUnmount=function(){ki()||(this.observableElement=null,this.resizeObserver.disconnect(),this.cancelHandler())},r.prototype.render=function(){var e,r=this.props,n=r.render,i=r.children,o=r.nodeType,s=void 0===o?"div":o,a=this.state,l={width:a.width,height:a.height,targetRef:this.targetRef};switch(this.getRenderType()){case"renderProp":return n&&n(l);case"childFunction":return(e=i)(l);case"child":if((e=i).type&&"string"==typeof e.type){var d=function(e,r){var n={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&r.indexOf(t)<0&&(n[t]=e[t]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(t=Object.getOwnPropertySymbols(e);i<t.length;i++)r.indexOf(t[i])<0&&Object.prototype.propertyIsEnumerable.call(e,t[i])&&(n[t[i]]=e[t[i]])}return n}(l,["targetRef"]);return u(e,d)}return u(e,l);case"childArray":return(e=i).map((function(e){return!!e&&u(e,l)}));default:return t.createElement(s,null)}}}(h);var Ai,Si=ki()?s:g;!function(e){e.transformWithSpaces=(e,r)=>{const n="(.{"+r+"})";return e.replace(/[^\dA-Z]/gi,"").replace(new RegExp(n,"g"),"$1 ").trim()},e.padValue=(e,r)=>{if("0"===e)return r?e:e.padStart(2,"0");if(""===e)return e;return parseInt(e).toString().padStart(2,"0")},e.shouldTruncateToTwoLines=(e,r)=>{const n=Math.floor(r/9);return e.length>=2*n||1===e.split(" ").length&&e.length>n},e.truncateOneLine=(e,r,n,t,i=8)=>{let o=0;r>n&&(o=Math.floor((r-n)/i));const s=t+o;if(s<e.length){const r=Math.floor(s/2);return e.substring(0,r)+" ... "+e.substring(e.length-r,e.length)}return e},e.truncateTwoLines=(e,r,n,t=1.2)=>{const i=Math.floor(2*r/(.6*n))*(2/t);if(e.length<=i)return e;const o=Math.floor(.6*i),s=Math.floor(.2*i);return`${e.substring(0,o)}...${e.substring(e.length-s)}`},e.getTextWidth=(r,n)=>{if("undefined"==typeof document)return 0;const t=(e.getTextWidth.canvas||(e.getTextWidth.canvas=document.createElement("canvas"))).getContext("2d");t.font=n;return t.measureText(r).width},e.maskValue=(e,n)=>{if(!e)return e;const{maskRange:t,unmaskRange:i,maskChar:o="•",maskRegex:s,maskTransformer:a}=n;if(a)return a(e);if(s)return e.replace(s,o);if(t){const{startIndex:n,endIndex:i}=r(t[0],t[1]);return e.substring(0,n)+o.repeat(e.substring(n,i+1).length)+e.substring(i+1)}if(i){const{startIndex:n,endIndex:t}=r(i[0],i[1]);return o.repeat(e.substring(0,n).length)+e.substring(n,t+1)+o.repeat(e.substring(t+1).length)}return e};const r=(e,r)=>e<r?{startIndex:e,endIndex:r}:{startIndex:r,endIndex:e}}(Ai||(Ai={}));const _i=p.div`
    font-weight: ${e=>e.$bold?tt.Spec["weight-semibold"]:tt.Spec["weight-regular"]};
    color: ${e=>e.$selected?nt["text-selected"]:nt.text};
    width: 100%;

    ${e=>"end"===e.$truncateType&&ct(e.$maxLines||2)}
    overflow-wrap: break-word;
`,Ti=p.div`
    color: ${nt["text-subtlest"]};
    width: 100%;

    ${e=>"end"===e.$truncateType&&ct(e.$maxLines||2)}
    overflow-wrap: break-word;

    ${e=>"next-line"===e.$labelDisplayType?f`
                    ${tt["body-md-semibold"]}
                `:f`
                    ${tt["body-baseline-regular"]}
                `}
`;p.span`
    font-weight: ${tt.Spec["weight-semibold"]};
`,p.div`
    text-align: left;
    width: 100%;
    overflow: hidden;
    overflow-wrap: break-word;

    ${e=>"small"===e.$variant?tt["body-md-regular"]:tt["body-baseline-regular"]}

    ${e=>{switch(e.$labelDisplayType){case"next-line":return f`
                    display: flex;
                    flex-direction: column;
                `;case"inline":return f`
                    ${_i} {
                        display: inline;
                    }

                    ${Ti} {
                        display: inline;
                        margin-left: 0.5rem;
                    }
                `}}}
`,p.div`
    display: inline-block;
    width: ${e=>1===e.$maxLines?50:100}%;
    height: 1lh;
    word-break: break-all;
    overflow: hidden;
`,p.div`
    display: inline-block;
    width: ${e=>1===e.$maxLines?50:100}%;
    height: 1lh;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    direction: rtl;
    text-align: right;
`;var Li=Dr;var ji=function(e){var r=this.__data__,n=r.delete(e);return this.size=r.size,n};var Yi=function(e){return this.__data__.get(e)};var Pi=function(e){return this.__data__.has(e)},Ri=Dr,Ii=Cr,Hi=Kr;var Wi=function(e,r){var n=this.__data__;if(n instanceof Ri){var t=n.__data__;if(!Ii||t.length<199)return t.push([e,r]),this.size=++n.size,this;n=this.__data__=new Hi(t)}return n.set(e,r),this.size=n.size,this},Ni=Dr,Vi=function(){this.__data__=new Li,this.size=0},Ki=ji,Ui=Yi,Zi=Pi,Xi=Wi;function qi(e){var r=this.__data__=new Ni(e);this.size=r.size}qi.prototype.clear=Vi,qi.prototype.delete=Ki,qi.prototype.get=Ui,qi.prototype.has=Zi,qi.prototype.set=Xi;var Ji=Kr,Gi=function(e){return this.__data__.set(e,"__lodash_hash_undefined__"),this},Qi=function(e){return this.__data__.has(e)};function eo(e){var r=-1,n=null==e?0:e.length;for(this.__data__=new Ji;++r<n;)this.add(e[r])}eo.prototype.add=eo.prototype.push=Gi,eo.prototype.has=Qi,q.Uint8Array;var ro=J?J.prototype:void 0;ro&&ro.valueOf;var no=le,to=de;var io=function(e){return to(e)&&"[object Arguments]"==no(e)},oo=Object.prototype;oo.hasOwnProperty,oo.propertyIsEnumerable;io(function(){return arguments}());var so={exports:{}};var ao=function(){return!1};!function(e,r){var n=q,t=ao,i=r&&!r.nodeType&&r,o=i&&e&&!e.nodeType&&e,s=o&&o.exports===i?n.Buffer:void 0,a=(s?s.isBuffer:void 0)||t;e.exports=a}(so,so.exports);var lo={exports:{}};!function(e,r){var n=U,t=r&&!r.nodeType&&r,i=t&&e&&!e.nodeType&&e,o=i&&i.exports===t&&n.process,s=function(){try{var e=i&&i.require&&i.require("util").types;return e||o&&o.binding&&o.binding("util")}catch(e){}}();e.exports=s}(lo,lo.exports);var co=lo.exports;co&&co.isTypedArray;var uo=Ie(q,"DataView"),ho=Cr,go=Ie(q,"Promise"),bo=Ie(q,"Set"),mo=Ie(q,"WeakMap"),po=le,fo=Be,yo="[object Map]",vo="[object Promise]",xo="[object Set]",wo="[object WeakMap]",$o="[object DataView]",Fo=fo(uo),Eo=fo(ho),Do=fo(go),Co=fo(bo),Bo=fo(mo),Mo=po;(uo&&Mo(new uo(new ArrayBuffer(1)))!=$o||ho&&Mo(new ho)!=yo||go&&Mo(go.resolve())!=vo||bo&&Mo(new bo)!=xo||mo&&Mo(new mo)!=wo)&&(Mo=function(e){var r=po(e),n="[object Object]"==r?e.constructor:void 0,t=n?fo(n):"";if(t)switch(t){case Fo:return $o;case Eo:return yo;case Do:return vo;case Co:return xo;case Bo:return wo}return r});var ko={exports:{}};ko.exports=function(){var e=1e3,r=6e4,n=36e5,t="millisecond",i="second",o="minute",s="hour",a="day",l="week",d="month",c="quarter",u="year",h="date",g="Invalid Date",b=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,m=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,p={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(e){var r=["th","st","nd","rd"],n=e%100;return"["+e+(r[(n-20)%10]||r[n]||r[0])+"]"}},f=function(e,r,n){var t=String(e);return!t||t.length>=r?e:""+Array(r+1-t.length).join(n)+e},y={s:f,z:function(e){var r=-e.utcOffset(),n=Math.abs(r),t=Math.floor(n/60),i=n%60;return(r<=0?"+":"-")+f(t,2,"0")+":"+f(i,2,"0")},m:function e(r,n){if(r.date()<n.date())return-e(n,r);var t=12*(n.year()-r.year())+(n.month()-r.month()),i=r.clone().add(t,d),o=n-i<0,s=r.clone().add(t+(o?-1:1),d);return+(-(t+(n-i)/(o?i-s:s-i))||0)},a:function(e){return e<0?Math.ceil(e)||0:Math.floor(e)},p:function(e){return{M:d,y:u,w:l,d:a,D:h,h:s,m:o,s:i,ms:t,Q:c}[e]||String(e||"").toLowerCase().replace(/s$/,"")},u:function(e){return void 0===e}},v="en",x={};x[v]=p;var w="$isDayjsObject",$=function(e){return e instanceof C||!(!e||!e[w])},F=function e(r,n,t){var i;if(!r)return v;if("string"==typeof r){var o=r.toLowerCase();x[o]&&(i=o),n&&(x[o]=n,i=o);var s=r.split("-");if(!i&&s.length>1)return e(s[0])}else{var a=r.name;x[a]=r,i=a}return!t&&i&&(v=i),i||!t&&v},E=function(e,r){if($(e))return e.clone();var n="object"==typeof r?r:{};return n.date=e,n.args=arguments,new C(n)},D=y;D.l=F,D.i=$,D.w=function(e,r){return E(e,{locale:r.$L,utc:r.$u,x:r.$x,$offset:r.$offset})};var C=function(){function p(e){this.$L=F(e.locale,null,!0),this.parse(e),this.$x=this.$x||e.x||{},this[w]=!0}var f=p.prototype;return f.parse=function(e){this.$d=function(e){var r=e.date,n=e.utc;if(null===r)return new Date(NaN);if(D.u(r))return new Date;if(r instanceof Date)return new Date(r);if("string"==typeof r&&!/Z$/i.test(r)){var t=r.match(b);if(t){var i=t[2]-1||0,o=(t[7]||"0").substring(0,3);return n?new Date(Date.UTC(t[1],i,t[3]||1,t[4]||0,t[5]||0,t[6]||0,o)):new Date(t[1],i,t[3]||1,t[4]||0,t[5]||0,t[6]||0,o)}}return new Date(r)}(e),this.init()},f.init=function(){var e=this.$d;this.$y=e.getFullYear(),this.$M=e.getMonth(),this.$D=e.getDate(),this.$W=e.getDay(),this.$H=e.getHours(),this.$m=e.getMinutes(),this.$s=e.getSeconds(),this.$ms=e.getMilliseconds()},f.$utils=function(){return D},f.isValid=function(){return!(this.$d.toString()===g)},f.isSame=function(e,r){var n=E(e);return this.startOf(r)<=n&&n<=this.endOf(r)},f.isAfter=function(e,r){return E(e)<this.startOf(r)},f.isBefore=function(e,r){return this.endOf(r)<E(e)},f.$g=function(e,r,n){return D.u(e)?this[r]:this.set(n,e)},f.unix=function(){return Math.floor(this.valueOf()/1e3)},f.valueOf=function(){return this.$d.getTime()},f.startOf=function(e,r){var n=this,t=!!D.u(r)||r,c=D.p(e),g=function(e,r){var i=D.w(n.$u?Date.UTC(n.$y,r,e):new Date(n.$y,r,e),n);return t?i:i.endOf(a)},b=function(e,r){return D.w(n.toDate()[e].apply(n.toDate("s"),(t?[0,0,0,0]:[23,59,59,999]).slice(r)),n)},m=this.$W,p=this.$M,f=this.$D,y="set"+(this.$u?"UTC":"");switch(c){case u:return t?g(1,0):g(31,11);case d:return t?g(1,p):g(0,p+1);case l:var v=this.$locale().weekStart||0,x=(m<v?m+7:m)-v;return g(t?f-x:f+(6-x),p);case a:case h:return b(y+"Hours",0);case s:return b(y+"Minutes",1);case o:return b(y+"Seconds",2);case i:return b(y+"Milliseconds",3);default:return this.clone()}},f.endOf=function(e){return this.startOf(e,!1)},f.$set=function(e,r){var n,l=D.p(e),c="set"+(this.$u?"UTC":""),g=(n={},n[a]=c+"Date",n[h]=c+"Date",n[d]=c+"Month",n[u]=c+"FullYear",n[s]=c+"Hours",n[o]=c+"Minutes",n[i]=c+"Seconds",n[t]=c+"Milliseconds",n)[l],b=l===a?this.$D+(r-this.$W):r;if(l===d||l===u){var m=this.clone().set(h,1);m.$d[g](b),m.init(),this.$d=m.set(h,Math.min(this.$D,m.daysInMonth())).$d}else g&&this.$d[g](b);return this.init(),this},f.set=function(e,r){return this.clone().$set(e,r)},f.get=function(e){return this[D.p(e)]()},f.add=function(t,c){var h,g=this;t=Number(t);var b=D.p(c),m=function(e){var r=E(g);return D.w(r.date(r.date()+Math.round(e*t)),g)};if(b===d)return this.set(d,this.$M+t);if(b===u)return this.set(u,this.$y+t);if(b===a)return m(1);if(b===l)return m(7);var p=(h={},h[o]=r,h[s]=n,h[i]=e,h)[b]||1,f=this.$d.getTime()+t*p;return D.w(f,this)},f.subtract=function(e,r){return this.add(-1*e,r)},f.format=function(e){var r=this,n=this.$locale();if(!this.isValid())return n.invalidDate||g;var t=e||"YYYY-MM-DDTHH:mm:ssZ",i=D.z(this),o=this.$H,s=this.$m,a=this.$M,l=n.weekdays,d=n.months,c=n.meridiem,u=function(e,n,i,o){return e&&(e[n]||e(r,t))||i[n].slice(0,o)},h=function(e){return D.s(o%12||12,e,"0")},b=c||function(e,r,n){var t=e<12?"AM":"PM";return n?t.toLowerCase():t};return t.replace(m,(function(e,t){return t||function(e){switch(e){case"YY":return String(r.$y).slice(-2);case"YYYY":return D.s(r.$y,4,"0");case"M":return a+1;case"MM":return D.s(a+1,2,"0");case"MMM":return u(n.monthsShort,a,d,3);case"MMMM":return u(d,a);case"D":return r.$D;case"DD":return D.s(r.$D,2,"0");case"d":return String(r.$W);case"dd":return u(n.weekdaysMin,r.$W,l,2);case"ddd":return u(n.weekdaysShort,r.$W,l,3);case"dddd":return l[r.$W];case"H":return String(o);case"HH":return D.s(o,2,"0");case"h":return h(1);case"hh":return h(2);case"a":return b(o,s,!0);case"A":return b(o,s,!1);case"m":return String(s);case"mm":return D.s(s,2,"0");case"s":return String(r.$s);case"ss":return D.s(r.$s,2,"0");case"SSS":return D.s(r.$ms,3,"0");case"Z":return i}return null}(e)||i.replace(":","")}))},f.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},f.diff=function(t,h,g){var b,m=this,p=D.p(h),f=E(t),y=(f.utcOffset()-this.utcOffset())*r,v=this-f,x=function(){return D.m(m,f)};switch(p){case u:b=x()/12;break;case d:b=x();break;case c:b=x()/3;break;case l:b=(v-y)/6048e5;break;case a:b=(v-y)/864e5;break;case s:b=v/n;break;case o:b=v/r;break;case i:b=v/e;break;default:b=v}return g?b:D.a(b)},f.daysInMonth=function(){return this.endOf(d).$D},f.$locale=function(){return x[this.$L]},f.locale=function(e,r){if(!e)return this.$L;var n=this.clone(),t=F(e,r,!0);return t&&(n.$L=t),n},f.clone=function(){return D.w(this.$d,this)},f.toDate=function(){return new Date(this.valueOf())},f.toJSON=function(){return this.isValid()?this.toISOString():null},f.toISOString=function(){return this.$d.toISOString()},f.toString=function(){return this.$d.toUTCString()},p}(),B=C.prototype;return E.prototype=B,[["$ms",t],["$s",i],["$m",o],["$H",s],["$W",a],["$M",d],["$y",u],["$D",h]].forEach((function(e){B[e[1]]=function(r){return this.$g(r,e[0],e[1])}})),E.extend=function(e,r){return e.$i||(e(r,C,E),e.$i=!0),E},E.locale=F,E.isDayjs=$,E.unix=function(e){return E(1e3*e)},E.en=x[v],E.Ls=x,E.p={},E}();var zo=V(ko.exports),Oo={exports:{}};Oo.exports=function(){var e={LTS:"h:mm:ss A",LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D, YYYY",LLL:"MMMM D, YYYY h:mm A",LLLL:"dddd, MMMM D, YYYY h:mm A"},r=/(\[[^[]*\])|([-_:/.,()\s]+)|(A|a|YYYY|YY?|MM?M?M?|Do|DD?|hh?|HH?|mm?|ss?|S{1,3}|z|ZZ?)/g,n=/\d\d/,t=/\d\d?/,i=/\d*[^-_:/,()\s\d]+/,o={},s=function(e){return(e=+e)+(e>68?1900:2e3)},a=function(e){return function(r){this[e]=+r}},l=[/[+-]\d\d:?(\d\d)?|Z/,function(e){(this.zone||(this.zone={})).offset=function(e){if(!e)return 0;if("Z"===e)return 0;var r=e.match(/([+-]|\d\d)/g),n=60*r[1]+(+r[2]||0);return 0===n?0:"+"===r[0]?-n:n}(e)}],d=function(e){var r=o[e];return r&&(r.indexOf?r:r.s.concat(r.f))},c=function(e,r){var n,t=o.meridiem;if(t){for(var i=1;i<=24;i+=1)if(e.indexOf(t(i,0,r))>-1){n=i>12;break}}else n=e===(r?"pm":"PM");return n},u={A:[i,function(e){this.afternoon=c(e,!1)}],a:[i,function(e){this.afternoon=c(e,!0)}],S:[/\d/,function(e){this.milliseconds=100*+e}],SS:[n,function(e){this.milliseconds=10*+e}],SSS:[/\d{3}/,function(e){this.milliseconds=+e}],s:[t,a("seconds")],ss:[t,a("seconds")],m:[t,a("minutes")],mm:[t,a("minutes")],H:[t,a("hours")],h:[t,a("hours")],HH:[t,a("hours")],hh:[t,a("hours")],D:[t,a("day")],DD:[n,a("day")],Do:[i,function(e){var r=o.ordinal,n=e.match(/\d+/);if(this.day=n[0],r)for(var t=1;t<=31;t+=1)r(t).replace(/\[|\]/g,"")===e&&(this.day=t)}],M:[t,a("month")],MM:[n,a("month")],MMM:[i,function(e){var r=d("months"),n=(d("monthsShort")||r.map((function(e){return e.slice(0,3)}))).indexOf(e)+1;if(n<1)throw new Error;this.month=n%12||n}],MMMM:[i,function(e){var r=d("months").indexOf(e)+1;if(r<1)throw new Error;this.month=r%12||r}],Y:[/[+-]?\d+/,a("year")],YY:[n,function(e){this.year=s(e)}],YYYY:[/\d{4}/,a("year")],Z:l,ZZ:l};function h(n){var t,i;t=n,i=o&&o.formats;for(var s=(n=t.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g,(function(r,n,t){var o=t&&t.toUpperCase();return n||i[t]||e[t]||i[o].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g,(function(e,r,n){return r||n.slice(1)}))}))).match(r),a=s.length,l=0;l<a;l+=1){var d=s[l],c=u[d],h=c&&c[0],g=c&&c[1];s[l]=g?{regex:h,parser:g}:d.replace(/^\[|\]$/g,"")}return function(e){for(var r={},n=0,t=0;n<a;n+=1){var i=s[n];if("string"==typeof i)t+=i.length;else{var o=i.regex,l=i.parser,d=e.slice(t),c=o.exec(d)[0];l.call(r,c),e=e.replace(c,"")}}return function(e){var r=e.afternoon;if(void 0!==r){var n=e.hours;r?n<12&&(e.hours+=12):12===n&&(e.hours=0),delete e.afternoon}}(r),r}}return function(e,r,n){n.p.customParseFormat=!0,e&&e.parseTwoDigitYear&&(s=e.parseTwoDigitYear);var t=r.prototype,i=t.parse;t.parse=function(e){var r=e.date,t=e.utc,s=e.args;this.$u=t;var a=s[1];if("string"==typeof a){var l=!0===s[2],d=!0===s[3],c=l||d,u=s[2];d&&(u=s[2]),o=this.$locale(),!l&&u&&(o=n.Ls[u]),this.$d=function(e,r,n){try{if(["x","X"].indexOf(r)>-1)return new Date(("X"===r?1e3:1)*e);var t=h(r)(e),i=t.year,o=t.month,s=t.day,a=t.hours,l=t.minutes,d=t.seconds,c=t.milliseconds,u=t.zone,g=new Date,b=s||(i||o?1:g.getDate()),m=i||g.getFullYear(),p=0;i&&!o||(p=o>0?o-1:g.getMonth());var f=a||0,y=l||0,v=d||0,x=c||0;return u?new Date(Date.UTC(m,p,b,f,y,v,x+60*u.offset*1e3)):n?new Date(Date.UTC(m,p,b,f,y,v,x)):new Date(m,p,b,f,y,v,x)}catch(e){return new Date("")}}(r,a,t),this.init(),u&&!0!==u&&(this.$L=this.locale(u).$L),c&&r!=this.format(a)&&(this.$d=new Date("")),o={}}else if(a instanceof Array)for(var g=a.length,b=1;b<=g;b+=1){s[1]=a[b-1];var m=n.apply(this,s);if(m.isValid()){this.$d=m.$d,this.$L=m.$L,this.init();break}b===g&&(this.$d=new Date(""))}else i.call(this,e)}}}();var Ao=V(Oo.exports),So={exports:{}};So.exports=function(e,r,n){r.prototype.isBetween=function(e,r,t,i){var o=n(e),s=n(r),a="("===(i=i||"()")[0],l=")"===i[1];return(a?this.isAfter(o,t):!this.isBefore(o,t))&&(l?this.isBefore(s,t):!this.isAfter(s,t))||(a?this.isBefore(o,t):!this.isAfter(o,t))&&(l?this.isAfter(s,t):!this.isBefore(s,t))}};var _o=V(So.exports),To={exports:{}};To.exports=function(e,r){r.prototype.isSameOrAfter=function(e,r){return this.isSame(e,r)||this.isAfter(e,r)}};var Lo=V(To.exports),jo={exports:{}};jo.exports=function(e,r){r.prototype.isSameOrBefore=function(e,r){return this.isSame(e,r)||this.isBefore(e,r)}};var Yo,Po,Ro=V(jo.exports),Io={exports:{}};Io.exports=(Yo={year:0,month:1,day:2,hour:3,minute:4,second:5},Po={},function(e,r,n){var t,i=function(e,r,n){void 0===n&&(n={});var t=new Date(e),i=function(e,r){void 0===r&&(r={});var n=r.timeZoneName||"short",t=e+"|"+n,i=Po[t];return i||(i=new Intl.DateTimeFormat("en-US",{hour12:!1,timeZone:e,year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit",timeZoneName:n}),Po[t]=i),i}(r,n);return i.formatToParts(t)},o=function(e,r){for(var t=i(e,r),o=[],s=0;s<t.length;s+=1){var a=t[s],l=a.type,d=a.value,c=Yo[l];c>=0&&(o[c]=parseInt(d,10))}var u=o[3],h=24===u?0:u,g=o[0]+"-"+o[1]+"-"+o[2]+" "+h+":"+o[4]+":"+o[5]+":000",b=+e;return(n.utc(g).valueOf()-(b-=b%1e3))/6e4},s=r.prototype;s.tz=function(e,r){void 0===e&&(e=t);var i=this.utcOffset(),o=this.toDate(),s=o.toLocaleString("en-US",{timeZone:e}),a=Math.round((o-new Date(s))/1e3/60),l=n(s,{locale:this.$L}).$set("millisecond",this.$ms).utcOffset(15*-Math.round(o.getTimezoneOffset()/15)-a,!0);if(r){var d=l.utcOffset();l=l.add(i-d,"minute")}return l.$x.$timezone=e,l},s.offsetName=function(e){var r=this.$x.$timezone||n.tz.guess(),t=i(this.valueOf(),r,{timeZoneName:e}).find((function(e){return"timezonename"===e.type.toLowerCase()}));return t&&t.value};var a=s.startOf;s.startOf=function(e,r){if(!this.$x||!this.$x.$timezone)return a.call(this,e,r);var t=n(this.format("YYYY-MM-DD HH:mm:ss:SSS"),{locale:this.$L});return a.call(t,e,r).tz(this.$x.$timezone,!0)},n.tz=function(e,r,i){var s=i&&r,a=i||r||t,l=o(+n(),a);if("string"!=typeof e)return n(e).tz(a);var d=function(e,r,n){var t=e-60*r*1e3,i=o(t,n);if(r===i)return[t,r];var s=o(t-=60*(i-r)*1e3,n);return i===s?[t,i]:[e-60*Math.min(i,s)*1e3,Math.max(i,s)]}(n.utc(e,s).valueOf(),l,a),c=d[0],u=d[1],h=n(c).utcOffset(u);return h.$x.$timezone=a,h},n.tz.guess=function(){return Intl.DateTimeFormat().resolvedOptions().timeZone},n.tz.setDefault=function(e){t=e}});var Ho,Wo=V(Io.exports);zo.extend(_o),zo.extend(Ro),zo.extend(Lo),zo.extend(Ao),zo.extend(Wo),function(e){e.generateDays=e=>{const r=e.startOf("month"),n=zo(r).startOf("week");return No(n).map((e=>Vo(e)))},e.generateDaysForCurrentWeek=e=>{const r=e.startOf("week");return Vo(r)},e.generateMonths=e=>{const r=[];for(let n=0;n<12;n++){const t=e.month(n);r.push(zo(t))}return r},e.generateDecadeOfYears=e=>{const r=e.year(),n=10*Math.floor(r/10),t=e.year(n),i=[t.subtract(1,"year"),t];for(let e=1;e<11;e++)i.push(t.add(e,"year"));return i},e.getStartEndDecade=e=>{const r=10*Math.floor(+e.format("YYYY")/10);return{beginDecade:r,endDecade:+zo(`${r+9}-01-01`).format("YYYY")}},e.convertTo12HourFormat=e=>{const r=zo(e,"HH:mm");return r.isValid()?r.format("h:mm a"):""},e.isWithinRange=(e,r,n,t="day")=>!r&&!n||(r&&n?e.isBetween(r,n,t,"[]"):r?e.isSameOrAfter(r,t):e.isSameOrBefore(n,t)),e.isPreviousMonthWithinRange=(r,n)=>e.isWithinRange(r.subtract(1,"month"),n,void 0,"month"),e.isPreviousYearWithinRange=(r,n)=>e.isWithinRange(r.subtract(1,"year"),n,void 0,"year"),e.isPreviousDecadeWithinRange=(r,n)=>{const{beginDecade:t}=e.getStartEndDecade(r);return e.isWithinRange(r.year(t).subtract(1,"year"),n,void 0,"year")},e.isNextMonthWithinRange=(r,n)=>e.isWithinRange(r.add(1,"month"),void 0,n,"month"),e.isNextYearWithinRange=(r,n)=>e.isWithinRange(r.add(1,"year"),void 0,n,"year"),e.isNextDecadeWithinRange=(r,n)=>{const{endDecade:t}=e.getStartEndDecade(r);return e.isWithinRange(r.year(t).add(1,"year"),void 0,n,"year")},e.getWeekStartEnd=e=>({start:e.startOf("week").format("YYYY-MM-DD"),end:e.endOf("week").format("YYYY-MM-DD")}),e.getFixedRangeStartEnd=(e,r)=>({start:e.format("YYYY-MM-DD"),end:e.add(r-1,"day").format("YYYY-MM-DD")}),e.isDisabledDay=(r,n,t,i)=>{const o=e.isWithinRange(r,t?zo(t):void 0,i?zo(i):void 0),s=n&&n.includes(r.format("YYYY-MM-DD"));return!o||!!s}}(Ho||(Ho={}));const No=e=>{const r=[e];for(let n=1;n<6;n++){const t=e.add(n,"week");r.push(t)}return r},Vo=e=>{const r=[];for(let n=0;n<7;n++){const t=e.add(n,"day");r.push(t)}return r},Ko=[1,3,5,7,8,10,12],Uo=[4,6,9,11];var Zo,Xo,qo;!function(e){e.clampDay=(r,n,t)=>{const i=parseInt(r),o=parseInt(n),s=parseInt(t);return 0==i?"1":Ko.includes(o)?Math.min(i,31).toString():Uo.includes(o)?Math.min(i,30).toString():2===o?e.isLeapYear(s)?Math.min(i,29).toString():Math.min(i,28).toString():r},e.clampMonth=e=>{const r=parseInt(e);return 0==r?"1":r>12?"12":e},e.isLeapYear=e=>e%4==0&&e%100!=0||e%400==0,e.getTimeDiffInMinutes=(e,r,n="HH:mm")=>{const t=zo(e,n);return zo(r,n).diff(t,"minute")},e.toDayjs=e=>e?zo(e):zo(),e.addMinutesToTime=(e,r,n="HH:mm")=>zo(e,n).add(r,"minutes").format(n),e.isSame=(e,r,n="day")=>zo(e).isSame(zo(r),n)}(Zo||(Zo={})),function(e){e.isDateDisabled=(e,r)=>{const{disabledDates:n,minDate:t,maxDate:i}=r;return!!(e&&n&&n.length&&n.includes(e))||(!(!t||!zo(e).isBefore(t,"day"))||!(!i||!zo(e).isAfter(i,"day")))},e.sanitizeInput=e=>{if(e){if(zo(e).isValid())return e}return""}}(Xo||(Xo={})),function(e){e.generate=()=>Math.random().toString(36).substring(2,9)}(qo||(qo={}));const Jo=i.createContext({focusedIndex:-1,setFocusedIndex:()=>{}}),Go=({children:e})=>{const[n,t]=o(-1);return r(Jo.Provider,{value:{focusedIndex:n,setFocusedIndex:t},children:e})},Qo=p.div`
    display: inline-block;
    position: relative;
    width: ${({$size:e})=>e?`${e}px`:"1em"};
    height: ${({$size:e})=>e?`${e}px`:"1em"};
    color: ${e=>e.$color||"currentColor"};
`,es=y`
	0% {
	  transform: rotate(0deg);
	}
	100% {
	  transform: rotate(360deg);
	}
`,rs=p.div`
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
    animation: ${es} 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
`,ns=p(rs)`
    animation-delay: -0.45s;
`,ts=p(rs)`
    animation-delay: -0.3s;
`,is=p(rs)`
    animation-delay: -0.15s;
`,os=({color:n,className:t,size:i})=>e(Qo,{className:t,$size:i,$color:n,"data-testid":"component-loading-spinner",children:[r(rs,{id:"inner1"}),r(ns,{id:"inner2"}),r(ts,{id:"inner3"}),r(is,{id:"inner4"})]}),ss=f`
    outline-offset: -1px;
    outline: ${ot["width-020"]} ${ot.solid} ${nt["border-focus"]};
`,as=f`
    outline-color: ${nt["border-focus"]};
`,ls=f`
    outline-color: ${nt["border-disabled"]};
`,ds=f`
    outline-color: ${nt["border-error-focus"]};
`,cs=p.div`
    border: ${ot["width-010"]} ${ot.solid} ${nt.border};
    border-radius: ${at.sm};
    background: ${nt.bg};

    :focus-within {
        ${ss}
    }
    ${e=>e.$focused&&ss}

    ${e=>e.$readOnly?f`
                border-color: transparent;
                padding: 0;
                background: transparent !important;

                :focus-within {
                    ${as}
                }
                ${e.$focused&&as}
            `:e.$disabled?f`
                background: ${nt["bg-disabled"]};
                cursor: not-allowed;

                :focus-within {
                    ${ls}
                }
                ${e.$focused&&ls}
            `:e.$error?f`
                border-color: ${nt["border-error"]};

                :focus-within {
                    ${ds}
                }
                ${e.$focused&&ds}
            `:void 0}
`;p(cs)`
    display: flex;
    align-items: center;
    position: relative;
    height: max-content;
    width: 100%;
    padding: 0 ${st["spacing-16"]};
    flex-direction: ${e=>"right"===e.$position?"row-reverse":"row"};
`;const us=p.input`
    ${e=>"small"===e.$variant?tt["body-md-regular"]:tt["body-baseline-regular"]}
    color: ${nt.text};
    display: block;
    background: transparent;
    border: none;
    outline: none;
    box-shadow: none;
    padding: 0;
    margin: 0;

    :disabled {
        color: ${nt["text-subtler"]};

        :hover {
            cursor: not-allowed;
        }
    }

    ::placeholder,
    ::-webkit-input-placeholder {
        color: ${nt["text-subtler"]};
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
`,hs=p.button`
    background: transparent;
    border: none;
    outline: none;

    :focus,
    :active {
        outline: none;
    }

    :focus-visible {
        outline: ${ot["width-010"]} ${ot.solid}
            ${nt["border-focus"]};
        border-radius: ${at.sm};
    }
`;p.div`
    overflow: hidden;
    border: ${ot["width-010"]} ${ot.solid} ${nt.border};
    border-radius: ${at.sm};
    background: ${nt.bg};

    min-width: 23rem;
    ${e=>e.$width&&`width: ${e.$width}px;`}
    max-height: 27rem;
    overflow-y: auto;

    ${e=>"small"===e.$variant?tt["body-md-regular"]:tt["body-baseline-regular"]}

    ${dt.MaxWidth.sm} {
        min-width: unset;
        width: calc(100vw - ${lt["sm-margin"]} * 2);
        max-height: 15rem;
    }

    ${dt.MaxWidth.xs} {
        width: calc(100vw - ${lt["xs-margin"]} * 2);
    }

    ${dt.MaxWidth.xxs} {
        width: calc(100vw - ${lt["xxs-margin"]} * 2);
    }

    ::-webkit-scrollbar {
        width: 14px;
    }

    ::-webkit-scrollbar-track {
        background: transparent;
    }

    ::-webkit-scrollbar-thumb {
        background: ${nt["bg-inverse-subtlest"]};
        border: 5px solid transparent;
        border-radius: 9999px;
        background-clip: padding-box;
    }
`,p.div`
    background: transparent;
    padding: ${st["spacing-8"]};
`,p.ul`
    list-style-type: none;
`,p.li`
    display: flex;
    align-items: flex-start;
    gap: ${st["spacing-8"]};
    padding: ${st["spacing-12"]} ${st["spacing-8"]};
    cursor: pointer;

    outline: none;

    ${e=>e.$active&&e.$selected?f`
                background: ${nt["bg-hover"]};
            `:e.$active?f`
                background: ${nt["bg-hover-subtle"]};
            `:void 0}
`,p(F)`
    flex-shrink: 0;
    height: 1lh;
    width: 1rem;
    color: ${nt["icon-selected"]};
`,p.div`
    flex-shrink: 0;
    height: 1lh;
    width: 1rem;
`,p($)`
    flex-shrink: 0;
    height: 1lh;
    width: 1lh;
    color: ${nt["icon-selected"]};
`,p(w)`
    flex-shrink: 0;
    height: 1lh;
    width: 1lh;
    color: ${nt["icon-primary-subtlest"]};
`,p.div`
    width: 100%;
    display: flex;
    justify-content: flex-end;
`;const gs=p(hs)`
    cursor: pointer;
    overflow: hidden;
    color: ${nt["text-primary"]};
    font-size: inherit;
`;p(gs)`
    ${tt["body-baseline-semibold"]}
`,p(gs)`
    ${tt["body-md-semibold"]}
    padding: ${st["spacing-8"]} ${st["spacing-8"]};
`,p.div`
    width: 100%;
    display: flex;
    padding: ${st["spacing-12"]} ${st["spacing-16"]};
    align-items: center;
`,p(x)`
    margin-right: ${st["spacing-4"]};
    color: ${nt["icon-error"]};
    height: 1em;
    width: 1em;
`,p(os)`
    margin-right: ${st["spacing-8"]};
    color: ${nt.icon};
`;const bs=p.button`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: ${st["spacing-24"]};
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

        ${({$highlight:e})=>e&&f`
                background-color: ${nt["bg-hover-neutral"]};
            `}
    }
`,ms=i.forwardRef(((e,n)=>{var{children:t,focusHighlight:i=!0,focusOutline:o="none",type:s="button"}=e,a=W(e,["children","focusHighlight","focusOutline","type"]);return r(bs,Object.assign({ref:n,$outline:o,$highlight:i,type:s},a,{children:t}))})),ps=p.div`
    background: ${nt["bg-strong"]};
    border-radius: ${at.sm};
    display: flex;
    align-items: center;

    ${e=>"small"===e.$variant?tt["body-md-regular"]:tt["body-baseline-regular"]}
`,fs=p.label`
    flex: 1;
    display: flex;
    align-items: center;
    gap: ${st["spacing-8"]};
    padding: ${e=>"small"===e.$variant?f`
                  ${st["spacing-8"]} ${st["spacing-16"]}
              `:f`10px ${st["spacing-16"]}`};
`,ys=p(us)`
    flex: 1;
`,vs=p(D)`
    color: ${nt.icon};
    flex-shrink: 0;
    height: 1em;
    width: 1em;
`,xs=p(ms)`
    flex-shrink: 0;
    align-self: stretch;
    box-sizing: content-box;
    padding: ${st["spacing-8"]};
    margin-left: -${st["spacing-8"]};
    color: ${nt.icon};
    cursor: pointer;
    font-size: inherit;

    svg {
        flex-shrink: 0;
        height: 1em;
        width: 1em;
    }
`;b(((n,t)=>{var{value:i,variant:o,onClear:s}=n,a=W(n,["value","variant","onClear"]);return e(ps,{$variant:o,children:[e(fs,{$variant:o,children:[r(vs,{"aria-hidden":!0}),r(ys,Object.assign({ref:t,value:i,$variant:o},a))]}),i&&r(xs,{"aria-label":"Clear search",focusOutline:"browser",onClick:s,children:r(E,{"aria-hidden":!0})})]})}));const ws=p(hs)`
    display: flex;
    align-items: center;
    gap: ${st["spacing-8"]};
    width: 100%;
    height: calc(3rem - 2px); // exclude top and bottom borders
    padding: ${st["spacing-16"]};

    ${e=>"small"===e.$variant?tt["body-md-regular"]:tt["body-baseline-regular"]}

    :disabled {
        cursor: not-allowed;
    }
`,$s=p.div`
    display: flex;
    align-items: center;
    transform: rotate(${e=>e.$expanded?180:0}deg);
    transition: transform ${it["duration-250"]} ${it["ease-default"]};

    svg {
        color: ${nt.icon};
        height: 1em;
        width: 1em;
    }
`,Fs=b((({children:n,disabled:t,expanded:i,listboxId:o,popupRole:s,readOnly:a,variant:l},d)=>e(ws,{ref:d,type:"button","aria-expanded":i,"aria-haspopup":s,"data-testid":"selector",disabled:t,"aria-controls":o,$variant:l,children:[n,!a&&r($s,{$expanded:i,$variant:l,children:r(C,{"aria-hidden":!0})})]})));p.button`
    padding: ${st["spacing-8"]} ${st["spacing-16"]};
    min-width: 4rem;
    border: ${ot["width-010"]} ${ot.solid} transparent;
    border-radius: ${at.sm};
    transition: all ${it["duration-250"]} ${it["ease-default"]};
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;

    // -----------------------------------------------------------------------------
    // BUTTON STYLE + TEXT COLOR
    // -----------------------------------------------------------------------------
    ${e=>{switch(e.$buttonStyle){case"secondary":return f`
                    background-color: ${nt.Primitive.white};
                    border-color: ${e.$buttonIsDanger?nt["border-error-strong"]:nt["border-primary"]};

                    color: ${e.$buttonIsDanger?nt["text-error"]:nt["text-primary"]};

                    &:hover,
                    &:active {
                        background-color: ${nt["bg-hover-neutral"]};
                    }
                `;case"light":return f`
                    background-color: ${nt.bg};
                    border-color: ${nt.border};

                    color: ${e.$buttonIsDanger?nt["text-error"]:nt["text-primary"]};

                    &:hover,
                    &:active {
                        background-color: ${nt["bg-hover-neutral"]};
                    }
                `;case"link":return f`
                    background-color: transparent;

                    color: ${e.$buttonIsDanger?nt["text-error"]:nt["text-primary"]};
                    &:hover,
                    &:active {
                        background-color: ${nt["bg-hover-neutral"]};
                    }
                `;case"disabled":return f`
                    background-color: ${nt["bg-disabled"]};

                    cursor: not-allowed;

                    &:hover {
                        box-shadow: none;
                    }

                    color: ${nt["text-disabled"]};
                `;default:return f`
                    background-color: ${e.$buttonIsDanger?nt["bg-error-strong"]:nt["bg-primary"]};

                    ${dt.MaxWidth.md} {
                        width: 100%;
                    }

                    color: ${nt["text-inverse"]};

                    &:hover,
                    &:active {
                        background-color: ${e.$buttonIsDanger?nt["bg-error-strong-hover"]:nt["bg-primary-hover"]};
                    }
                `}}}

    // -----------------------------------------------------------------------------
	// BUTTON SIZE + TEXT SIZE
	// -----------------------------------------------------------------------------
	${e=>{switch(e.$buttonSizeStyle){case"small":return f`
                    height: 2.5rem;
                    ${tt["body-md-semibold"]}

                    ${dt.MaxWidth.xxs} {
                        height: auto;
                    }
                `;case"large":return f`
                    height: 4rem;
                    ${tt["heading-md-semibold"]}

                    ${dt.MaxWidth.xxs} {
                        height: auto;
                    }
                `;default:return f`
                    height: 3rem;
                    ${tt["heading-xs-semibold"]}

                    ${dt.MaxWidth.xxs} {
                        height: auto;
                    }
                `}}}
`,p(os)`
    margin-right: 0.5rem;
`,p.li`
    display: ${e=>e.$visible?"flex":"none"};
`,p.div`
    flex: 1;
    display: flex;
    align-items: flex-start;
    gap: ${st["spacing-8"]};
    padding: ${st["spacing-12"]} ${st["spacing-8"]};
    cursor: ${e=>e.$toggleable?"default":"pointer"};
    overflow: hidden; // required for label to truncate properly

    outline: none;

    ${e=>e.$active&&f`
            background: ${nt["bg-hover"]};
        `}
`,p.div`
    height: 1px;
    width: calc((1lh + ${st["spacing-8"]}) * ${e=>e.$level});
`,p.div`
    width: 1lh;
    height: 1lh;
    color: ${nt["icon-primary"]};
    cursor: pointer;

    svg {
        width: 1lh;
        height: 1lh;
        transition: transform ${it["duration-350"]}
            ${it["ease-standard"]};

        ${e=>{if(e.$expanded)return f`
                    transform: rotate(90deg);
                `}}
    }
`,p.div`
    width: 1lh;
    height: 1lh;
    margin-right: ${st["spacing-8"]};
`,p.div`
    flex-shrink: 0;
    height: 1lh;
    width: ${e=>e.$hasNestedSiblings?"1lh":st["spacing-16"]};

    display: flex;
    justify-content: center;
`,p(B)`
    flex-shrink: 0;
    height: 1lh;
    width: 1lh;
    color: ${nt["icon-selected"]};
`;const Es=e=>"small"===e?2.5:3;p.div`
    position: relative;
    width: 100%;
    ${e=>{const r=Es(e.$variant);return f`
            min-height: ${r}rem;
            height: ${r}rem; // Need this to persist the height when expanding or collapsing list
        `}}
`;const Ds=f`
    display: flex;
    position: relative;
    align-items: center;
    justify-content: space-between;
    padding: 0 ${st["spacing-16"]};
    // exclude top and bottom borders
    height: calc(${e=>Es(e.$variant)}rem - 2px);
    width: 100%;
    border-radius: ${at.sm};
    border: none;
    background: transparent;

    :focus,
    :active {
        outline: none;
    }

    :focus-visible {
        outline: 2px solid ${nt["border-focus"]};
    }
`,Cs=p.button`
    ${Ds}
    cursor: pointer;
`;p.div`
    ${Ds}
`;const Bs=y`
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
`;p.div`
    position: relative;
    border: ${ot["width-010"]} ${ot.solid} ${nt.border};
    border-radius: ${at.sm};
    background: ${nt.bg};
    overflow: hidden;

    :focus-within {
        border-color: ${nt["border-focus"]};
        box-shadow: 0px 0px 4px 0px
            rgb(from ${nt["border-focus"]} r g b / 50%) inset; // TODO: confirm shadow
    }

    ${e=>e.expanded?f`
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                z-index: 2;
            `:f`
                animation: ${Bs} 0.5s ease-in-out;
            `}

    ${e=>e.disabled?f`
                background: ${nt["bg-disabled"]};

                ${Cs} {
                    cursor: not-allowed;
                }

                :focus-within {
                    border-color: ${nt.border};
                    box-shadow: none;
                }
            `:e.$readOnly?f`
                border: none;
                background: transparent !important;

                ${Cs} {
                    padding: 0;
                }

                :focus-within {
                    border: none;
                    box-shadow: none;
                }
            `:e.error?f`
                border-color: ${nt["border-error"]};

                :focus-within {
                    border-color: ${nt["border-error"]};
                    box-shadow: 0px 0px 4px 0px
                        rgb(from ${nt["border-error"]} r g b / 50%) inset; // TODO: confirm shadow
                }
            `:void 0}
`,p.div`
    transform: rotate(${e=>e.expanded?180:0}deg);
    transition: transform ${it["duration-250"]} ${it["ease-default"]};
    margin-left: ${st["spacing-16"]};
`,p(C)`
    color: ${nt.icon};
`,p.div`
    height: 1px;
    background: ${nt.border};
    margin: 0 ${st["spacing-8"]};
`;const Ms=p.div`
    display: flex;
    flex: 1;
    word-break: break-all;
    ${e=>{if(e.$disabled)return f`
                color: ${nt["text-disabled"]};
            `}}
`,ks=p.div`
    ${e=>"small"===e.$variant?tt["body-md-regular"]:tt["body-baseline-regular"]}
    text-align: left;
    ${e=>{if("middle"!==e.truncateType)return f`
                    ${ct(1)}
                `}}
    overflow: hidden;
`;var zs;p(ks)`
    color: ${nt["text-subtler"]};
`,function(e){e.Ready="overlay-context-ready",e.Change="overlay-context-change"}(zs||(zs={}));const Os=p.div`
    display: flex;
    flex-direction: column;
`,As=e=>"right"===e?"bottom-end":"bottom-start",Ss=({enabled:t,isOpen:i,onOpen:a,onClose:d,onDismiss:c,renderElement:u,renderDropdown:h,customZIndex:g,clickToToggle:b=!1,offset:m=0,alignment:p="left",fitAvailableHeight:f})=>{var y;const x=v(),w=lt["sm-max"]({theme:x}),$=l(null),F=l(null),{width:E=0}=function(e){void 0===e&&(e={});var r=e.skipOnMount,n=void 0!==r&&r,t=e.refreshMode,i=e.refreshRate,s=void 0===i?1e3:i,a=e.refreshOptions,d=e.handleWidth,c=void 0===d||d,u=e.handleHeight,h=void 0===u||u,g=e.targetRef,b=e.observerOptions,m=e.onResize,p=l(n),f=l(null),y=null!=g?g:f,v=l(),x=o({width:void 0,height:void 0}),w=x[0],$=x[1];return Si((function(){if(!ki()){var e=Oi(m,$,c,h);v.current=Bi((function(r){(c||h)&&r.forEach((function(r){var n=r&&r.contentRect||{},t=n.width,i=n.height;!p.current&&!ki()&&e({width:t,height:i}),p.current=!1}))}),t,s,a);var r=new window.ResizeObserver(v.current);return y.current&&r.observe(y.current,b),function(){r.disconnect();var e=v.current;e&&e.cancel&&e.cancel()}}}),[t,s,a,c,h,m,b,y.current]),Rt({ref:y},w)}({targetRef:$,handleHeight:!1}),D={name:"center",fn:({x:e,rects:r})=>{const n=0===e||e+r.floating.width===window.innerWidth,t=window.innerWidth<w;return{x:n&&t?(window.innerWidth-r.floating.width)/2:e}}},{refs:C,floatingStyles:B,context:H}=k({open:i,onOpenChange:(e,r,n)=>{"escape-key"===n?null==c||c():e&&!i?null==a||a():!e&&i&&(null==d||d(n))},whileElementsMounted:z,placement:As(p),middleware:[O(m),A(),S({limiter:_()}),T({apply({availableHeight:e}){F.current&&Object.assign(F.current.style,{maxHeight:f?`${e}px`:void 0,overflowY:f?"hidden":void 0})}}),D]}),W=(()=>{const[e,r]=o(void 0),n=M();return s((()=>{if(!n)return void r(void 0);const e=e=>{r(e.zIndex)};return n.events.on(zs.Change,e),n.events.emit(zs.Ready),()=>n.events.off(zs.Change,e)}),[n]),e})(),{isMounted:N,styles:V}=L(H,{initial:{opacity:0},open:{opacity:1},duration:300}),K=j(H,{enabled:t,toggle:b}),U=Y(H,{enabled:t}),{getReferenceProps:Z,getFloatingProps:X}=P([K,U]);return e(n,{children:[r("div",Object.assign({ref:e=>{$.current=e,C.setReference(e)}},Z(),{children:u()})),N&&r(R,{children:r(I,{context:H,modal:!1,initialFocus:F,returnFocus:!1,children:r("div",Object.assign({ref:C.setFloating,style:Object.assign(Object.assign({},B),{zIndex:null!==(y=null!=g?g:W)&&void 0!==y?y:50})},X(),{children:r(Os,{ref:F,style:Object.assign({},V),inert:V.opacity<1?"":void 0,children:h({elementWidth:E})})}))})})]})},_s=p.div`
    overflow: hidden;
    border: ${ot["width-010"]} ${ot.solid} ${nt.border};
    border-radius: ${at.sm};
    background: ${nt.bg};
    padding: ${st["spacing-16"]};
    min-width: 23rem;

    ${dt.MaxWidth.sm} {
        min-width: unset;
        width: calc(100vw - ${lt["sm-margin"]} * 2);
        max-height: 15rem;
    }

    ${dt.MaxWidth.xs} {
        width: calc(100vw - ${lt["xs-margin"]} * 2);
    }

    ${dt.MaxWidth.xxs} {
        width: calc(100vw - ${lt["xxs-margin"]} * 2);
    }
`,Ts=p.div`
    display: flex;
    align-items: baseline;
`,Ls=p.div`
    margin: 0 0.5rem;
`,js=p.div`
    ${e=>"small"===e.$variant?tt["body-md-regular"]:tt["body-baseline-regular"]}
    text-align: left;
    ${e=>{if("middle"!==e.truncateType)return f`
                    ${ct(1)}
                `}}
    overflow: hidden;
`,Ys=p(js)`
    color: ${nt["text-subtler"]};
`,Ps=n=>{var{alignment:t="left",className:i,disabled:a,dropdownZIndex:d,error:c,histogramSlider:u,id:h,onBlur:g,onChange:b,onChangeEnd:m,optionTruncationType:p="end",placeholder:f="Select",rangeLabelPrefix:y,rangeLabelSuffix:v,readOnly:x,renderRangeLabel:w,value:$}=n,F=W(n,["alignment","className","disabled","dropdownZIndex","error","histogramSlider","id","onBlur","onChange","onChangeEnd","optionTruncationType","placeholder","rangeLabelPrefix","rangeLabelSuffix","readOnly","renderRangeLabel","value"]);const{interval:E,bins:D=[],renderEmptyView:C,ariaLabels:B}=u,[M,k]=o(K()),[z,O]=o(!1),[A,S]=o(!1),[_]=o((()=>qo.generate())),T=D.map((e=>e.minValue)),L=Math.min(...T),j=l(null),Y=l(null),P=l(null),R=F["data-testid"]||"select-histogram";s((()=>{$!==M&&k(K())}),[$]);const I=e=>{k(e),null==b||b(e)},H=e=>{k(e),null==m||m(e)},N=()=>{A||z||S(!0)},V=e=>{A&&!z&&j.current&&!j.current.contains(e.relatedTarget)&&(S(!1),null==g||g())};function K(){return null!=$?$:[L,L+E]}const U=r=>w?w(r):e(bt.BodyBL,{children:[y,r,v]});return r(Go,{children:r(Ss,{enabled:!x&&!a,isOpen:z,renderElement:()=>r(cs,{className:i,"data-testid":R,id:h,ref:j,tabIndex:-1,onFocus:N,onBlur:V,$focused:A,$disabled:a,$readOnly:x,$error:c,children:r(Fs,{ref:Y,disabled:a,expanded:z,listboxId:_,popupRole:"dialog",readOnly:x,variant:"default",children:r(Ms,{ref:P,$disabled:a,children:T&&0!==T.length?e(Ts,{children:[U(M[0]),r(Ls,{children:"-"}),U(M[1])]}):r(Ys,{truncateType:p,$variant:"default",children:f})})})}),renderDropdown:({elementWidth:e})=>r(_s,{style:{width:e},children:r(Yt,{interval:E,value:M,bins:D,onChange:I,onChangeEnd:H,showRangeLabels:!1,renderEmptyView:C,ariaLabels:B})}),onOpen:()=>{O(!0)},onClose:()=>{O(!1)},onDismiss:()=>{var e;null===(e=Y.current)||void 0===e||e.focus(),O(!1)},clickToToggle:!0,offset:8,alignment:t,fitAvailableHeight:!0,customZIndex:d})})};export{Ps as SelectHistogram};
//# sourceMappingURL=index.js.map
