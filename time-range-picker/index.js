import{jsxs as e,jsx as t,Fragment as r}from"react/jsx-runtime";import*as n from"react";import o,{useRef as i,useEffect as s,useState as a,isValidElement as l,createRef as d,cloneElement as c,PureComponent as u,useLayoutEffect as h,forwardRef as g,useCallback as m,useContext as f,useMemo as p,createElement as b}from"react";import{ArrowRightIcon as v,ChevronDownIcon as y}from"@lifesg/react-icons";import x,{css as w,keyframes as $,useTheme as C}from"styled-components";import{ChevronDownIcon as F}from"@lifesg/react-icons/chevron-down";import{ChevronUpIcon as S}from"@lifesg/react-icons/chevron-up";import E,{findDOMNode as k,unstable_batchedUpdates as I}from"react-dom";import{ArrowRightIcon as T}from"@lifesg/react-icons/arrow-right";import{ExclamationCircleFillIcon as D}from"@lifesg/react-icons/exclamation-circle-fill";import{ExclamationTriangleFillIcon as z}from"@lifesg/react-icons/exclamation-triangle-fill";import{ICircleFillIcon as M}from"@lifesg/react-icons/i-circle-fill";import{TickCircleFillIcon as _}from"@lifesg/react-icons/tick-circle-fill";import{ExternalIcon as O}from"@lifesg/react-icons/external";import{CircleIcon as A}from"@lifesg/react-icons/circle";import{CircleDotIcon as B}from"@lifesg/react-icons/circle-dot";import{CrossIcon as H}from"@lifesg/react-icons/cross";import{SquareIcon as R}from"@lifesg/react-icons/square";import{SquareTickFillIcon as j}from"@lifesg/react-icons/square-tick-fill";import{TickIcon as L}from"@lifesg/react-icons/tick";import{MagnifierIcon as P}from"@lifesg/react-icons/magnifier";import"@lifesg/react-icons/caret-right";import{MinusSquareFillIcon as W}from"@lifesg/react-icons/minus-square-fill";import{useFloatingTree as V,useFloating as N,autoUpdate as Y,offset as U,flip as q,shift as G,limitShift as Z,size as Q,useTransitionStyles as X,useClick as K,useDismiss as J,useInteractions as ee,FloatingPortal as te,FloatingFocusManager as re}from"@floating-ui/react";function ne(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(n=Object.getOwnPropertySymbols(e);o<n.length;o++)t.indexOf(n[o])<0&&Object.prototype.propertyIsEnumerable.call(e,n[o])&&(r[n[o]]=e[n[o]])}return r}"function"==typeof SuppressedError&&SuppressedError;const oe=(e,t,r="window",n)=>{const o=i();s((()=>{o.current=t}),[t]),s((()=>{let t;switch(r){case"window":t=window;break;case"document":t=document;break;default:t=r}if(!t||!t.addEventListener)return;const i=e=>{var t;return null===(t=o.current)||void 0===t?void 0:t.call(o,e)};return t.addEventListener(e,i,n),()=>{null==t||t.removeEventListener(e,i,n)}}),[e,r])};var ie="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};function se(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var ae=Array.isArray,le="object"==typeof ie&&ie&&ie.Object===Object&&ie,de=le,ce="object"==typeof self&&self&&self.Object===Object&&self,ue=de||ce||Function("return this")(),he=ue.Symbol,ge=he,me=Object.prototype,fe=me.hasOwnProperty,pe=me.toString,be=ge?ge.toStringTag:void 0;var ve=function(e){var t=fe.call(e,be),r=e[be];try{e[be]=void 0;var n=!0}catch(e){}var o=pe.call(e);return n&&(t?e[be]=r:delete e[be]),o},ye=Object.prototype.toString;var xe=ve,we=function(e){return ye.call(e)},$e=he?he.toStringTag:void 0;var Ce=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":$e&&$e in Object(e)?xe(e):we(e)};var Fe=function(e){return null!=e&&"object"==typeof e},Se=Ce,Ee=Fe;var ke=function(e){return"symbol"==typeof e||Ee(e)&&"[object Symbol]"==Se(e)},Ie=ae,Te=ke,De=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,ze=/^\w*$/;var Me=function(e,t){if(Ie(e))return!1;var r=typeof e;return!("number"!=r&&"symbol"!=r&&"boolean"!=r&&null!=e&&!Te(e))||(ze.test(e)||!De.test(e)||null!=t&&e in Object(t))};var _e=function(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)},Oe=Ce,Ae=_e;var Be,He=function(e){if(!Ae(e))return!1;var t=Oe(e);return"[object Function]"==t||"[object GeneratorFunction]"==t||"[object AsyncFunction]"==t||"[object Proxy]"==t},Re=ue["__core-js_shared__"],je=(Be=/[^.]+$/.exec(Re&&Re.keys&&Re.keys.IE_PROTO||""))?"Symbol(src)_1."+Be:"";var Le=function(e){return!!je&&je in e},Pe=Function.prototype.toString;var We=function(e){if(null!=e){try{return Pe.call(e)}catch(e){}try{return e+""}catch(e){}}return""},Ve=He,Ne=Le,Ye=_e,Ue=We,qe=/^\[object .+?Constructor\]$/,Ge=Function.prototype,Ze=Object.prototype,Qe=Ge.toString,Xe=Ze.hasOwnProperty,Ke=RegExp("^"+Qe.call(Xe).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");var Je=function(e,t){return null==e?void 0:e[t]},et=function(e){return!(!Ye(e)||Ne(e))&&(Ve(e)?Ke:qe).test(Ue(e))},tt=Je;var rt=function(e,t){var r=tt(e,t);return et(r)?r:void 0},nt=rt(Object,"create"),ot=nt;var it=function(){this.__data__=ot?ot(null):{},this.size=0};var st=function(e){var t=this.has(e)&&delete this.__data__[e];return this.size-=t?1:0,t},at=nt,lt=Object.prototype.hasOwnProperty;var dt=function(e){var t=this.__data__;if(at){var r=t[e];return"__lodash_hash_undefined__"===r?void 0:r}return lt.call(t,e)?t[e]:void 0},ct=nt,ut=Object.prototype.hasOwnProperty;var ht=function(e){var t=this.__data__;return ct?void 0!==t[e]:ut.call(t,e)},gt=nt;var mt=function(e,t){var r=this.__data__;return this.size+=this.has(e)?0:1,r[e]=gt&&void 0===t?"__lodash_hash_undefined__":t,this},ft=it,pt=st,bt=dt,vt=ht,yt=mt;function xt(e){var t=-1,r=null==e?0:e.length;for(this.clear();++t<r;){var n=e[t];this.set(n[0],n[1])}}xt.prototype.clear=ft,xt.prototype.delete=pt,xt.prototype.get=bt,xt.prototype.has=vt,xt.prototype.set=yt;var wt=xt;var $t=function(){this.__data__=[],this.size=0};var Ct=function(e,t){return e===t||e!=e&&t!=t},Ft=Ct;var St=function(e,t){for(var r=e.length;r--;)if(Ft(e[r][0],t))return r;return-1},Et=St,kt=Array.prototype.splice;var It=function(e){var t=this.__data__,r=Et(t,e);return!(r<0)&&(r==t.length-1?t.pop():kt.call(t,r,1),--this.size,!0)},Tt=St;var Dt=function(e){var t=this.__data__,r=Tt(t,e);return r<0?void 0:t[r][1]},zt=St;var Mt=function(e){return zt(this.__data__,e)>-1},_t=St;var Ot=function(e,t){var r=this.__data__,n=_t(r,e);return n<0?(++this.size,r.push([e,t])):r[n][1]=t,this},At=$t,Bt=It,Ht=Dt,Rt=Mt,jt=Ot;function Lt(e){var t=-1,r=null==e?0:e.length;for(this.clear();++t<r;){var n=e[t];this.set(n[0],n[1])}}Lt.prototype.clear=At,Lt.prototype.delete=Bt,Lt.prototype.get=Ht,Lt.prototype.has=Rt,Lt.prototype.set=jt;var Pt=Lt,Wt=rt(ue,"Map"),Vt=wt,Nt=Pt,Yt=Wt;var Ut=function(e){var t=typeof e;return"string"==t||"number"==t||"symbol"==t||"boolean"==t?"__proto__"!==e:null===e};var qt=function(e,t){var r=e.__data__;return Ut(t)?r["string"==typeof t?"string":"hash"]:r.map},Gt=qt;var Zt=function(e){var t=Gt(this,e).delete(e);return this.size-=t?1:0,t},Qt=qt;var Xt=function(e){return Qt(this,e).get(e)},Kt=qt;var Jt=function(e){return Kt(this,e).has(e)},er=qt;var tr=function(e,t){var r=er(this,e),n=r.size;return r.set(e,t),this.size+=r.size==n?0:1,this},rr=function(){this.size=0,this.__data__={hash:new Vt,map:new(Yt||Nt),string:new Vt}},nr=Zt,or=Xt,ir=Jt,sr=tr;function ar(e){var t=-1,r=null==e?0:e.length;for(this.clear();++t<r;){var n=e[t];this.set(n[0],n[1])}}ar.prototype.clear=rr,ar.prototype.delete=nr,ar.prototype.get=or,ar.prototype.has=ir,ar.prototype.set=sr;var lr=ar,dr=lr;function cr(e,t){if("function"!=typeof e||null!=t&&"function"!=typeof t)throw new TypeError("Expected a function");var r=function(){var n=arguments,o=t?t.apply(this,n):n[0],i=r.cache;if(i.has(o))return i.get(o);var s=e.apply(this,n);return r.cache=i.set(o,s)||i,s};return r.cache=new(cr.Cache||dr),r}cr.Cache=dr;var ur=cr;var hr=function(e){var t=ur(e,(function(e){return 500===r.size&&r.clear(),e})),r=t.cache;return t},gr=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,mr=/\\(\\)?/g,fr=hr((function(e){var t=[];return 46===e.charCodeAt(0)&&t.push(""),e.replace(gr,(function(e,r,n,o){t.push(n?o.replace(mr,"$1"):r||e)})),t}));var pr=function(e,t){for(var r=-1,n=null==e?0:e.length,o=Array(n);++r<n;)o[r]=t(e[r],r,e);return o},br=ae,vr=ke,yr=he?he.prototype:void 0,xr=yr?yr.toString:void 0;var wr=function e(t){if("string"==typeof t)return t;if(br(t))return pr(t,e)+"";if(vr(t))return xr?xr.call(t):"";var r=t+"";return"0"==r&&1/t==-1/0?"-0":r},$r=wr;var Cr=ae,Fr=Me,Sr=fr,Er=function(e){return null==e?"":$r(e)};var kr=function(e,t){return Cr(e)?e:Fr(e,t)?[e]:Sr(Er(e))},Ir=ke;var Tr=function(e){if("string"==typeof e||Ir(e))return e;var t=e+"";return"0"==t&&1/e==-1/0?"-0":t},Dr=kr,zr=Tr;var Mr=function(e,t){for(var r=0,n=(t=Dr(t,e)).length;null!=e&&r<n;)e=e[zr(t[r++])];return r&&r==n?e:void 0},_r=Mr;var Or=function(e,t,r){var n=null==e?void 0:_r(e,t);return void 0===n?r:n},Ar=se(Or);const Br=(e,t,r)=>Ar(r,t)||Ar(e,t),Hr=(e,t)=>{const r=t||e.defaultValue;return Ar(e.collections,r)},Rr={collections:{default:{"width-005":.5,"width-010":1,"width-020":2,"width-040":4,solid:"solid"}},defaultValue:"default"},jr=e=>t=>{var r;const n=t.theme,o=Hr(Rr,null==n?void 0:n.borderScheme);return(null===(r=null==n?void 0:n.overrides)||void 0===r?void 0:r.border)?`${Br(o,e,n.overrides.border)}px`:`${o[e]}px`},Lr={"width-005":jr("width-005"),"width-010":jr("width-010"),"width-020":jr("width-020"),"width-040":jr("width-040"),solid:(Pr="solid",e=>{var t;const r=e.theme,n=Hr(Rr,null==r?void 0:r.borderScheme),o=(null===(t=null==r?void 0:r.overrides)||void 0===t?void 0:t.border)?Br(n,Pr,r.overrides.border):n[Pr];return"function"==typeof o?o(e):o})};var Pr;const Wr={collections:{lifesg:{"brand-10":"#2C0C0B","brand-20":"#4C1513","brand-30":"#6C1D1B","brand-40":"#922825","brand-50":"#BF3431","brand-60":"#F15D5A","brand-70":"#F69491","brand-80":"#FABAB7","brand-90":"#FCD7D2","brand-95":"#FFEBE7","brand-100":"#FFF6F4","primary-10":"#001731","primary-20":"#002752","primary-30":"#003874","primary-40":"#004D9F","primary-50":"#1768BE","primary-60":"#3C91EC","primary-70":"#6CB4FF","primary-80":"#A5CDFF","primary-90":"#CFE1FE","primary-95":"#E8F0FE","primary-100":"#F7F9FF","secondary-10":"#131529","secondary-20":"#222547","secondary-30":"#2F3565","secondary-40":"#42498B","secondary-50":"#5B62A7","secondary-60":"#858CBD","secondary-70":"#A8ADCF","secondary-80":"#C6C9E0","secondary-90":"#DDDFEC","secondary-95":"#EDEEF5","secondary-100":"#F8F8FB","neutral-10":"#161616","neutral-20":"#282828","neutral-30":"#393939","neutral-40":"#4E4E4E","neutral-50":"#686868","neutral-60":"#8E8E8E","neutral-70":"#AFAFB0","neutral-80":"#C7CACA","neutral-90":"#DDE1E2","neutral-95":"#EDEFEF","neutral-100":"#F9F9F9","success-10":"#081A0F","success-20":"#0E2D1B","success-30":"#154126","success-40":"#1C5A34","success-50":"#257645","success-60":"#44A068","success-70":"#64C189","success-80":"#80DCA5","success-90":"#B4ECCB","success-95":"#D5F6E2","success-100":"#EFFCF4","warning-10":"#221302","warning-20":"#3B2204","warning-30":"#543106","warning-40":"#744408","warning-50":"#98590C","warning-60":"#D07A13","warning-70":"#E4A244","warning-80":"#F5C26C","warning-90":"#FADBA6","warning-95":"#FCECD4","warning-100":"#FDF7F0","error-10":"#330505","error-20":"#550808","error-30":"#750C0C","error-40":"#9E130F","error-50":"#CB2213","error-60":"#DE6C6C","error-70":"#E89B9B","error-80":"#EFBEBE","error-90":"#F5D9D9","error-95":"#F9ECEC","error-100":"#FCF7F7","info-10":"#021824","info-20":"#032B3F","info-30":"#053D59","info-40":"#065478","info-50":"#176E9B","info-60":"#5296BE","info-70":"#82B5DA","info-80":"#ACCFE7","info-90":"#CCE3F1","info-95":"#E3F1F8","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000","primary-inverse":"#FEAB10"},bookingsg:{"brand-10":"#2C0C0B","brand-20":"#4C1513","brand-30":"#6C1D1B","brand-40":"#922825","brand-50":"#BF3431","brand-60":"#F15D5A","brand-70":"#F69491","brand-80":"#FABAB7","brand-90":"#FCD7D2","brand-95":"#FFEBE7","brand-100":"#FFF6F4","primary-10":"#1A122C","primary-20":"#2F1F4D","primary-30":"#422D6E","primary-40":"#5B3D97","primary-50":"#7654BC","primary-60":"#9A82CD","primary-70":"#B7A7D8","primary-80":"#CFC5E5","primary-90":"#E3DDF0","primary-95":"#F0EDF7","primary-100":"#F9F8FC","secondary-10":"#0E1723","secondary-20":"#18293D","secondary-30":"#233A57","secondary-40":"#305078","secondary-50":"#4B6A8F","secondary-60":"#7B91A9","secondary-70":"#A1B1C3","secondary-80":"#C1CBD7","secondary-90":"#DBE1E8","secondary-95":"#EBEFF2","secondary-100":"#F7F8FA","neutral-10":"#161616","neutral-20":"#282828","neutral-30":"#393939","neutral-40":"#4E4E4E","neutral-50":"#686868","neutral-60":"#8E8E8E","neutral-70":"#AFAFB0","neutral-80":"#C7CACA","neutral-90":"#DDE1E2","neutral-95":"#EDEFEF","neutral-100":"#F9F9F9","success-10":"#081A0F","success-20":"#0E2D1B","success-30":"#154126","success-40":"#1C5A34","success-50":"#257645","success-60":"#44A068","success-70":"#64C189","success-80":"#80DCA5","success-90":"#B4ECCB","success-95":"#D5F6E2","success-100":"#EFFCF4","warning-10":"#221302","warning-20":"#3B2204","warning-30":"#543106","warning-40":"#744408","warning-50":"#98590C","warning-60":"#D07A13","warning-70":"#E4A244","warning-80":"#F5C26C","warning-90":"#FADBA6","warning-95":"#FCECD4","warning-100":"#FDF7F0","error-10":"#330505","error-20":"#550808","error-30":"#750C0C","error-40":"#9E130F","error-50":"#CB2213","error-60":"#DE6C6C","error-70":"#E89B9B","error-80":"#EFBEBE","error-90":"#F5D9D9","error-95":"#F9ECEC","error-100":"#FCF7F7","info-10":"#021824","info-20":"#032B3F","info-30":"#053D59","info-40":"#065478","info-50":"#176E9B","info-60":"#5296BE","info-70":"#82B5DA","info-80":"#ACCFE7","info-90":"#CCE3F1","info-95":"#E3F1F8","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000","primary-inverse":"#FEAB10"},rbs:{"brand-10":"#0E123A","brand-20":"#191E65","brand-30":"#232B90","brand-40":"#303BC5","brand-50":"#494CFF","brand-60":"#AD6EFF","brand-70":"#AEA4FF","brand-80":"#C5C4FF","brand-90":"#DDDCFF","brand-95":"#EDECFF","brand-100":"#F8F8FF","primary-10":"#10152B","primary-20":"#1C254B","primary-30":"#28356C","primary-40":"#38489A","primary-50":"#4D5AD7","primary-60":"#7487F2","primary-70":"#9AAAFC","primary-80":"#BDC7FD","primary-90":"#DADFFB","primary-95":"#ECEEFE","primary-100":"#F7F8FF","secondary-10":"#19151D","secondary-20":"#2B2533","secondary-30":"#3E3649","secondary-40":"#564A64","secondary-50":"#6F637D","secondary-60":"#948B9F","secondary-70":"#B3ACBB","secondary-80":"#CCC8D2","secondary-90":"#E1DEE4","secondary-95":"#EFEEF1","secondary-100":"#F9F8F9","neutral-10":"#161616","neutral-20":"#282828","neutral-30":"#393939","neutral-40":"#4E4E4E","neutral-50":"#686868","neutral-60":"#8E8E8E","neutral-70":"#AFAFB0","neutral-80":"#C7CACA","neutral-90":"#DDE1E2","neutral-95":"#EDEFEF","neutral-100":"#F9F9F9","success-10":"#081A0F","success-20":"#0E2D1B","success-30":"#154126","success-40":"#1C5A34","success-50":"#257645","success-60":"#44A068","success-70":"#64C189","success-80":"#80DCA5","success-90":"#B4ECCB","success-95":"#D5F6E2","success-100":"#EFFCF4","warning-10":"#221302","warning-20":"#3B2204","warning-30":"#543106","warning-40":"#744408","warning-50":"#98590C","warning-60":"#D07A13","warning-70":"#E4A244","warning-80":"#F5C26C","warning-90":"#FADBA6","warning-95":"#FCECD4","warning-100":"#FDF7F0","error-10":"#330505","error-20":"#550808","error-30":"#750C0C","error-40":"#9E130F","error-50":"#CB2213","error-60":"#DE6C6C","error-70":"#E89B9B","error-80":"#EFBEBE","error-90":"#F5D9D9","error-95":"#F9ECEC","error-100":"#FCF7F7","info-10":"#021824","info-20":"#032B3F","info-30":"#053D59","info-40":"#065478","info-50":"#176E9B","info-60":"#5296BE","info-70":"#82B5DA","info-80":"#ACCFE7","info-90":"#CCE3F1","info-95":"#E3F1F8","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000","primary-inverse":"#FEAB10"},mylegacy:{"brand-10":"#2C0C0B","brand-20":"#4C1513","brand-30":"#6C1D1B","brand-40":"#922825","brand-50":"#BF3431","brand-60":"#F15D5A","brand-70":"#F69491","brand-80":"#FABAB7","brand-90":"#FCD7D2","brand-95":"#FFEBE7","brand-100":"#FFF6F4","primary-10":"#0011924","primary-20":"#032B40","primary-30":"#043D5A","primary-40":"#05547B","primary-50":"#096EA1","primary-60":"#2098D3","primary-70":"#5CB9E8","primary-80":"#8BD3F6","primary-90":"#BEE6FA","primary-95":"#E2F2FA","primary-100":"#F4FAFC","secondary-10":"#131529","secondary-20":"#222547","secondary-30":"#2F3565","secondary-40":"#42498B","secondary-50":"#5B62A7","secondary-60":"#858CBD","secondary-70":"#A8ADCF","secondary-80":"#C6C9E0","secondary-90":"#DDDFEC","secondary-95":"#EDEEF5","secondary-100":"#F8F8FB","neutral-10":"#161616","neutral-20":"#282828","neutral-30":"#393939","neutral-40":"#4E4E4E","neutral-50":"#686868","neutral-60":"#8E8E8E","neutral-70":"#AFAFB0","neutral-80":"#C7CACA","neutral-90":"#DDE1E2","neutral-95":"#EDEFEF","neutral-100":"#F9F9F9","success-10":"#081A0F","success-20":"#0E2D1B","success-30":"#154126","success-40":"#1C5A34","success-50":"#257645","success-60":"#44A068","success-70":"#64C189","success-80":"#80DCA5","success-90":"#B4ECCB","success-95":"#D5F6E2","success-100":"#EFFCF4","warning-10":"#221302","warning-20":"#3B2204","warning-30":"#543106","warning-40":"#744408","warning-50":"#98590C","warning-60":"#D07A13","warning-70":"#E4A244","warning-80":"#F5C26C","warning-90":"#FADBA6","warning-95":"#FCECD4","warning-100":"#FDF7F0","error-10":"#330505","error-20":"#550808","error-30":"#750C0C","error-40":"#9E130F","error-50":"#CB2213","error-60":"#DE6C6C","error-70":"#E89B9B","error-80":"#EFBEBE","error-90":"#F5D9D9","error-95":"#F9ECEC","error-100":"#FCF7F7","info-10":"#021824","info-20":"#032B3F","info-30":"#053D59","info-40":"#065478","info-50":"#176E9B","info-60":"#5296BE","info-70":"#82B5DA","info-80":"#ACCFE7","info-90":"#CCE3F1","info-95":"#E3F1F8","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000","primary-inverse":"#FEAB10"},ccube:{"brand-10":"#1F1221","brand-20":"#371F3B","brand-30":"#4E2C53","brand-40":"#6B3E73","brand-50":"#8D5197","brand-60":"#FF3399","brand-70":"#FF88C4","brand-80":"#FFB3D9","brand-90":"#FFD4E9","brand-95":"#FFE8F3","brand-100":"#FFD6EB","primary-10":"#1F1221","primary-20":"#371F3B","primary-30":"#4E2C53","primary-40":"#6B3E73","primary-50":"#8D5197","primary-60":"#B07DB7","primary-70":"#C7A3CC","primary-80":"#D9C2DD","primary-90":"#E9DBEB","primary-95":"#F3ECF4","primary-100":"#FAF7FA","secondary-10":"#2D091B","secondary-20":"#4D0F2E","secondary-30":"#6B1540","secondary-40":"#931D58","secondary-50":"#C02673","secondary-60":"#FF409F","secondary-70":"#FF88C4","secondary-80":"#FFB3D9","secondary-90":"#FFD4E9","secondary-95":"#FFE8F3","secondary-100":"#FFF8FC","neutral-10":"#161616","neutral-20":"#282828","neutral-30":"#393939","neutral-40":"#4E4E4E","neutral-50":"#686868","neutral-60":"#8E8E8E","neutral-70":"#AFAFB0","neutral-80":"#C7CACA","neutral-90":"#DDE1E2","neutral-95":"#EDEFEF","neutral-100":"#F9F9F9","success-10":"#081A0F","success-20":"#0E2D1B","success-30":"#154126","success-40":"#1C5A34","success-50":"#257645","success-60":"#44A068","success-70":"#64C189","success-80":"#80DCA5","success-90":"#B4ECCB","success-95":"#D5F6E2","success-100":"#EFFCF4","warning-10":"#221302","warning-20":"#3B2204","warning-30":"#543106","warning-40":"#744408","warning-50":"#98590C","warning-60":"#D07A13","warning-70":"#E4A244","warning-80":"#F5C26C","warning-90":"#FADBA6","warning-95":"#FCECD4","warning-100":"#FDF7F0","error-10":"#330505","error-20":"#550808","error-30":"#750C0C","error-40":"#9E130F","error-50":"#CB2213","error-60":"#DE6C6C","error-70":"#E89B9B","error-80":"#EFBEBE","error-90":"#F5D9D9","error-95":"#F9ECEC","error-100":"#FCF7F7","info-10":"#021824","info-20":"#032B3F","info-30":"#053D59","info-40":"#065478","info-50":"#176E9B","info-60":"#5296BE","info-70":"#82B5DA","info-80":"#ACCFE7","info-90":"#CCE3F1","info-95":"#E3F1F8","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000","primary-inverse":"#FEAB10"},pa:{"brand-10":"#89000B","brand-20":"#B0000E","brand-30":"#C4000F","brand-40":"#D0333F","brand-50":"#DC666F","brand-60":"#E28087","brand-70":"#E7999F","brand-80":"#EDB3B7","brand-90":"#F3CCCF","brand-95":"#F9E6E7","brand-100":"#FCF2F3","primary-10":"#000000","primary-20":"#191919","primary-30":"#333333","primary-40":"#4D4D4D","primary-50":"#666666","primary-60":"#808080","primary-70":"#999999","primary-80":"#B3B3B3","primary-90":"#E6E6E6","primary-95":"#F7F7F7","primary-100":"#FFFFFF","secondary-10":"#19151D","secondary-20":"#2B2533","secondary-30":"#3E3649","secondary-40":"#564A64","secondary-50":"#6F637D","secondary-60":"#948B9F","secondary-70":"#B3ACBB","secondary-80":"#CCC8D2","secondary-90":"#E1DEE4","secondary-95":"#EFEEF1","secondary-100":"#F9F8F9","neutral-10":"#000000","neutral-20":"#191919","neutral-30":"#333333","neutral-40":"#4D4D4D","neutral-50":"#666666","neutral-60":"#808080","neutral-70":"#999999","neutral-80":"#B3B3B3","neutral-90":"#E6E6E6","neutral-95":"#F7F7F7","neutral-100":"#FFFFFF","success-10":"#081A0F","success-20":"#0E2D1B","success-30":"#154126","success-40":"#1C5A34","success-50":"#257645","success-60":"#44A068","success-70":"#64C189","success-80":"#80DCA5","success-90":"#B4ECCB","success-95":"#D5F6E2","success-100":"#EFFCF4","warning-10":"#221302","warning-20":"#3B2204","warning-30":"#543106","warning-40":"#744408","warning-50":"#98590C","warning-60":"#D07A13","warning-70":"#E4A244","warning-80":"#F5C26C","warning-90":"#FADBA6","warning-95":"#FCECD4","warning-100":"#FDF7F0","error-10":"#330505","error-20":"#550808","error-30":"#750C0C","error-40":"#9E130F","error-50":"#CB2213","error-60":"#DE6C6C","error-70":"#E89B9B","error-80":"#EFBEBE","error-90":"#F5D9D9","error-95":"#F9ECEC","error-100":"#FCF7F7","info-10":"#021824","info-20":"#032B3F","info-30":"#053D59","info-40":"#065478","info-50":"#176E9B","info-60":"#5296BE","info-70":"#82B5DA","info-80":"#ACCFE7","info-90":"#CCE3F1","info-95":"#E3F1F8","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000","primary-inverse":"#FEAB10"}},defaultValue:"lifesg"},Vr=e=>t=>{var r;const n=t.theme,o=Hr(Wr,null==n?void 0:n.colourScheme);return(null===(r=null==n?void 0:n.overrides)||void 0===r?void 0:r.primitiveColour)?Br(o,e,n.overrides.primitiveColour):o[e]},Nr={"brand-10":Vr("brand-10"),"brand-20":Vr("brand-20"),"brand-30":Vr("brand-30"),"brand-40":Vr("brand-40"),"brand-50":Vr("brand-50"),"brand-60":Vr("brand-60"),"brand-70":Vr("brand-70"),"brand-80":Vr("brand-80"),"brand-90":Vr("brand-90"),"brand-95":Vr("brand-95"),"brand-100":Vr("brand-100"),"primary-10":Vr("primary-10"),"primary-20":Vr("primary-20"),"primary-30":Vr("primary-30"),"primary-40":Vr("primary-40"),"primary-50":Vr("primary-50"),"primary-60":Vr("primary-60"),"primary-70":Vr("primary-70"),"primary-80":Vr("primary-80"),"primary-90":Vr("primary-90"),"primary-95":Vr("primary-95"),"primary-100":Vr("primary-100"),"secondary-10":Vr("secondary-10"),"secondary-20":Vr("secondary-20"),"secondary-30":Vr("secondary-30"),"secondary-40":Vr("secondary-40"),"secondary-50":Vr("secondary-50"),"secondary-60":Vr("secondary-60"),"secondary-70":Vr("secondary-70"),"secondary-80":Vr("secondary-80"),"secondary-90":Vr("secondary-90"),"secondary-95":Vr("secondary-95"),"secondary-100":Vr("secondary-100"),"neutral-10":Vr("neutral-10"),"neutral-20":Vr("neutral-20"),"neutral-30":Vr("neutral-30"),"neutral-40":Vr("neutral-40"),"neutral-50":Vr("neutral-50"),"neutral-60":Vr("neutral-60"),"neutral-70":Vr("neutral-70"),"neutral-80":Vr("neutral-80"),"neutral-90":Vr("neutral-90"),"neutral-95":Vr("neutral-95"),"neutral-100":Vr("neutral-100"),"success-10":Vr("success-10"),"success-20":Vr("success-20"),"success-30":Vr("success-30"),"success-40":Vr("success-40"),"success-50":Vr("success-50"),"success-60":Vr("success-60"),"success-70":Vr("success-70"),"success-80":Vr("success-80"),"success-90":Vr("success-90"),"success-95":Vr("success-95"),"success-100":Vr("success-100"),"warning-10":Vr("warning-10"),"warning-20":Vr("warning-20"),"warning-30":Vr("warning-30"),"warning-40":Vr("warning-40"),"warning-50":Vr("warning-50"),"warning-60":Vr("warning-60"),"warning-70":Vr("warning-70"),"warning-80":Vr("warning-80"),"warning-90":Vr("warning-90"),"warning-95":Vr("warning-95"),"warning-100":Vr("warning-100"),"error-10":Vr("error-10"),"error-20":Vr("error-20"),"error-30":Vr("error-30"),"error-40":Vr("error-40"),"error-50":Vr("error-50"),"error-60":Vr("error-60"),"error-70":Vr("error-70"),"error-80":Vr("error-80"),"error-90":Vr("error-90"),"error-95":Vr("error-95"),"error-100":Vr("error-100"),"info-10":Vr("info-10"),"info-20":Vr("info-20"),"info-30":Vr("info-30"),"info-40":Vr("info-40"),"info-50":Vr("info-50"),"info-60":Vr("info-60"),"info-70":Vr("info-70"),"info-80":Vr("info-80"),"info-90":Vr("info-90"),"info-95":Vr("info-95"),"info-100":Vr("info-100"),white:Vr("white"),black:Vr("black"),"primary-inverse":Vr("primary-inverse")},Yr={text:Vr("neutral-20"),"text-subtle":Vr("neutral-30"),"text-subtler":Vr("neutral-50"),"text-subtlest":Vr("neutral-60"),"text-primary":Vr("primary-50"),"text-hover":Vr("primary-40"),"text-selected":Vr("primary-50"),"text-selected-hover":Vr("primary-40"),"text-disabled":Vr("neutral-50"),"text-disabled-subtle":Vr("neutral-60"),"text-disabled-subtlest":Vr("neutral-80"),"text-selected-disabled":Vr("neutral-20"),"text-success":Vr("success-40"),"text-warning":Vr("warning-40"),"text-error":Vr("error-40"),"text-info":Vr("info-40"),"text-inverse":Vr("white"),icon:Vr("neutral-50"),"icon-subtle":Vr("neutral-60"),"icon-strongest":Vr("neutral-20"),"icon-primary":Vr("primary-50"),"icon-primary-subtle":Vr("primary-60"),"icon-primary-subtlest":Vr("primary-70"),"icon-hover":Vr("primary-40"),"icon-selected":Vr("primary-50"),"icon-selected-hover":Vr("primary-40"),"icon-disabled":Vr("neutral-50"),"icon-disabled-subtle":Vr("neutral-60"),"icon-selected-disabled":Vr("neutral-60"),"icon-success":Vr("success-50"),"icon-warning":Vr("warning-60"),"icon-error":Vr("error-50"),"icon-error-strong":Vr("error-40"),"icon-info":Vr("info-50"),"icon-inverse":Vr("white"),"icon-primary-inverse":Vr("primary-inverse"),border:Vr("neutral-90"),"border-strong":Vr("neutral-70"),"border-stronger":Vr("neutral-50"),"border-primary":Vr("primary-50"),"border-primary-subtle":Vr("primary-60"),"border-hover":Vr("primary-90"),"border-hover-strong":Vr("primary-60"),"border-selected":Vr("primary-50"),"border-selected-subtle":Vr("primary-70"),"border-selected-subtlest":Vr("primary-90"),"border-selected-hover":Vr("primary-40"),"border-focus":Vr("primary-60"),"border-focus-strong":Vr("primary-50"),"border-disabled":Vr("neutral-90"),"border-selected-disabled":Vr("neutral-70"),"border-success":Vr("success-60"),"border-warning":Vr("warning-60"),"border-error":Vr("error-60"),"border-error-focus":Vr("error-60"),"border-error-focus-strong":Vr("error-40"),"border-error-strong":Vr("error-40"),"border-info":Vr("info-60"),bg:Vr("white"),"bg-strong":Vr("neutral-100"),"bg-stronger":Vr("neutral-95"),"bg-strongest":Vr("neutral-90"),"bg-hover":Vr("primary-95"),"bg-hover-strong":Vr("primary-90"),"bg-hover-subtle":Vr("primary-100"),"bg-hover-neutral":Vr("neutral-100"),"bg-hover-neutral-strong":Vr("neutral-90"),"bg-selected":Vr("primary-95"),"bg-selected-hover":Vr("primary-90"),"bg-selected-strong":Vr("primary-90"),"bg-selected-stronger":Vr("primary-70"),"bg-selected-strongest":Vr("primary-50"),"bg-selected-strongest-hover":Vr("primary-40"),"bg-disabled":Vr("neutral-95"),"bg-selected-disabled":Vr("neutral-95"),"bg-selected-stronger-disabled":Vr("neutral-70"),"bg-success":Vr("success-100"),"bg-success-hover":Vr("success-95"),"bg-success-strong":Vr("success-50"),"bg-success-strong-hover":Vr("success-40"),"bg-warning":Vr("warning-100"),"bg-warning-hover":Vr("warning-95"),"bg-warning-strong":Vr("warning-50"),"bg-warning-strong-hover":Vr("warning-40"),"bg-info":Vr("info-100"),"bg-info-hover":Vr("info-95"),"bg-info-strong":Vr("info-50"),"bg-info-strong-hover":Vr("info-40"),"bg-error":Vr("error-100"),"bg-error-hover":Vr("error-95"),"bg-error-strong":Vr("error-50"),"bg-error-strong-hover":Vr("error-40"),"bg-inverse":Vr("neutral-20"),"bg-inverse-subtle":Vr("neutral-30"),"bg-inverse-subtler":Vr("neutral-50"),"bg-inverse-subtlest":Vr("neutral-60"),"bg-inverse-hover":Vr("neutral-40"),"bg-primary":Vr("primary-50"),"bg-primary-subtle":Vr("primary-60"),"bg-primary-subtler":Vr("primary-95"),"bg-primary-subtlest":Vr("primary-100"),"bg-available":"#6DD0A1","bg-primary-hover":Vr("primary-40"),"bg-primary-subtlest-hover":Vr("primary-90"),"bg-primary-subtlest-selected":Vr("primary-90"),"overlay-strong":"rgba(40, 40, 40, 0.85)","overlay-subtle":"rgba(40, 40, 40, 0.20)",hyperlink:Vr("primary-50"),"hyperlink-hover":Vr("primary-40"),"hyperlink-visited":Vr("primary-40"),"hyperlink-inverse":Vr("primary-inverse"),"focus-ring":Vr("black"),"focus-ring-inverse":Vr("white")},Ur={collections:{lifesg:Yr,bookingsg:Yr,rbs:Yr,mylegacy:Yr,ccube:Yr,pa:{text:Vr("neutral-30"),"text-subtle":Vr("neutral-40"),"text-subtler":Vr("neutral-50"),"text-subtlest":Vr("neutral-70"),"text-primary":Vr("neutral-10"),"text-hover":Vr("neutral-70"),"text-selected":Vr("neutral-20"),"text-selected-hover":Vr("neutral-10"),"text-disabled":Vr("neutral-50"),"text-disabled-subtle":Vr("neutral-60"),"text-disabled-subtlest":Vr("neutral-80"),"text-selected-disabled":Vr("neutral-40"),"text-success":Vr("success-40"),"text-warning":Vr("warning-40"),"text-error":Vr("brand-30"),"text-info":Vr("neutral-40"),"text-inverse":Vr("neutral-100"),icon:Vr("neutral-40"),"icon-subtle":Vr("neutral-50"),"icon-strongest":Vr("neutral-10"),"icon-primary":Vr("neutral-10"),"icon-primary-subtle":Vr("neutral-30"),"icon-primary-subtlest":Vr("neutral-60"),"icon-hover":Vr("neutral-70"),"icon-selected":Vr("brand-20"),"icon-selected-hover":Vr("brand-10"),"icon-disabled":Vr("neutral-50"),"icon-disabled-subtle":Vr("neutral-60"),"icon-selected-disabled":Vr("neutral-40"),"icon-success":Vr("success-40"),"icon-warning":Vr("warning-60"),"icon-error":Vr("brand-30"),"icon-error-strong":Vr("brand-10"),"icon-info":Vr("neutral-40"),"icon-inverse":Vr("neutral-100"),"icon-primary-inverse":"#F9B371",border:Vr("neutral-90"),"border-strong":Vr("neutral-30"),"border-stronger":Vr("neutral-20"),"border-primary":Vr("neutral-40"),"border-primary-subtle":Vr("neutral-60"),"border-hover":Vr("neutral-80"),"border-hover-strong":Vr("neutral-10"),"border-selected":Vr("neutral-20"),"border-selected-subtle":Vr("neutral-40"),"border-selected-subtlest":Vr("neutral-70"),"border-selected-hover":Vr("neutral-10"),"border-focus":Vr("brand-60"),"border-focus-strong":Vr("brand-40"),"border-disabled":Vr("neutral-90"),"border-selected-disabled":Vr("neutral-80"),"border-success":Vr("success-40"),"border-warning":Vr("warning-60"),"border-error":Vr("brand-30"),"border-error-focus":Vr("brand-20"),"border-error-focus-strong":Vr("brand-10"),"border-error-strong":Vr("brand-20"),"border-info":Vr("neutral-40"),bg:Vr("neutral-100"),"bg-strong":Vr("neutral-95"),"bg-stronger":Vr("neutral-90"),"bg-strongest":Vr("neutral-80"),"bg-hover":Vr("brand-90"),"bg-hover-strong":Vr("brand-80"),"bg-hover-subtle":Vr("neutral-90"),"bg-hover-neutral":Vr("neutral-90"),"bg-hover-neutral-strong":Vr("neutral-90"),"bg-selected":Vr("brand-50"),"bg-selected-hover":Vr("brand-70"),"bg-selected-strong":Vr("brand-90"),"bg-selected-stronger":Vr("brand-40"),"bg-selected-strongest":Vr("brand-20"),"bg-selected-strongest-hover":Vr("brand-10"),"bg-disabled":Vr("neutral-90"),"bg-selected-disabled":Vr("neutral-90"),"bg-selected-stronger-disabled":Vr("neutral-80"),"bg-success":Vr("success-100"),"bg-success-hover":Vr("success-95"),"bg-success-strong":Vr("success-50"),"bg-success-strong-hover":Vr("success-40"),"bg-warning":Vr("warning-100"),"bg-warning-hover":Vr("warning-95"),"bg-warning-strong":Vr("warning-50"),"bg-warning-strong-hover":Vr("warning-40"),"bg-info":Vr("neutral-95"),"bg-info-hover":Vr("info-95"),"bg-info-strong":Vr("info-50"),"bg-info-strong-hover":Vr("info-40"),"bg-error":Vr("brand-100"),"bg-error-hover":Vr("error-95"),"bg-error-strong":Vr("error-50"),"bg-error-strong-hover":Vr("error-40"),"bg-inverse":Vr("neutral-40"),"bg-inverse-subtle":Vr("neutral-60"),"bg-inverse-subtler":Vr("neutral-70"),"bg-inverse-subtlest":Vr("neutral-80"),"bg-inverse-hover":Vr("neutral-30"),"bg-primary":Vr("brand-20"),"bg-primary-subtle":Vr("brand-60"),"bg-primary-subtler":Vr("brand-80"),"bg-primary-subtlest":Vr("brand-100"),"bg-available":Vr("success-60"),"bg-primary-hover":Vr("brand-10"),"bg-primary-subtlest-hover":Vr("brand-80"),"bg-primary-subtlest-selected":Vr("brand-40"),"overlay-strong":"rgba(25, 25, 25, 0.95)","overlay-subtle":"rgba(25, 25, 25, 0.20)",hyperlink:Vr("neutral-10"),"hyperlink-hover":Vr("neutral-40"),"hyperlink-visited":Vr("neutral-50"),"hyperlink-inverse":"#F8AE68","focus-ring":Vr("black"),"focus-ring-inverse":Vr("white")}},defaultValue:"lifesg"},qr=e=>t=>{var r;const n=t.theme,o=Hr(Ur,null==n?void 0:n.colourScheme),i=(null===(r=null==n?void 0:n.overrides)||void 0===r?void 0:r.semanticColour)?Br(o,e,n.overrides.semanticColour):o[e];return"function"==typeof i?i(t):i},Gr={text:qr("text"),"text-subtle":qr("text-subtle"),"text-subtler":qr("text-subtler"),"text-subtlest":qr("text-subtlest"),"text-primary":qr("text-primary"),"text-hover":qr("text-hover"),"text-selected":qr("text-selected"),"text-selected-hover":qr("text-selected-hover"),"text-disabled":qr("text-disabled"),"text-disabled-subtle":qr("text-disabled-subtle"),"text-disabled-subtlest":qr("text-disabled-subtlest"),"text-selected-disabled":qr("text-selected-disabled"),"text-success":qr("text-success"),"text-warning":qr("text-warning"),"text-error":qr("text-error"),"text-info":qr("text-info"),"text-inverse":qr("text-inverse"),icon:qr("icon"),"icon-subtle":qr("icon-subtle"),"icon-strongest":qr("icon-strongest"),"icon-primary":qr("icon-primary"),"icon-primary-subtle":qr("icon-primary-subtle"),"icon-primary-subtlest":qr("icon-primary-subtlest"),"icon-hover":qr("icon-hover"),"icon-selected":qr("icon-selected"),"icon-selected-hover":qr("icon-selected-hover"),"icon-disabled":qr("icon-disabled"),"icon-disabled-subtle":qr("icon-disabled-subtle"),"icon-selected-disabled":qr("icon-selected-disabled"),"icon-success":qr("icon-success"),"icon-warning":qr("icon-warning"),"icon-error":qr("icon-error"),"icon-error-strong":qr("icon-error-strong"),"icon-info":qr("icon-info"),"icon-inverse":qr("icon-inverse"),"icon-primary-inverse":qr("icon-primary-inverse"),border:qr("border"),"border-strong":qr("border-strong"),"border-stronger":qr("border-stronger"),"border-primary":qr("border-primary"),"border-primary-subtle":qr("border-primary-subtle"),"border-hover":qr("border-hover"),"border-hover-strong":qr("border-hover-strong"),"border-selected":qr("border-selected"),"border-selected-subtle":qr("border-selected-subtle"),"border-selected-subtlest":qr("border-selected-subtlest"),"border-selected-hover":qr("border-selected-hover"),"border-focus":qr("border-focus"),"border-focus-strong":qr("border-focus-strong"),"border-disabled":qr("border-disabled"),"border-selected-disabled":qr("border-selected-disabled"),"border-success":qr("border-success"),"border-warning":qr("border-warning"),"border-error":qr("border-error"),"border-error-focus":qr("border-error-focus"),"border-error-focus-strong":qr("border-error-focus-strong"),"border-error-strong":qr("border-error-strong"),"border-info":qr("border-info"),bg:qr("bg"),"bg-strong":qr("bg-strong"),"bg-stronger":qr("bg-stronger"),"bg-strongest":qr("bg-strongest"),"bg-hover":qr("bg-hover"),"bg-hover-strong":qr("bg-hover-strong"),"bg-hover-subtle":qr("bg-hover-subtle"),"bg-hover-neutral":qr("bg-hover-neutral"),"bg-hover-neutral-strong":qr("bg-hover-neutral-strong"),"bg-selected":qr("bg-selected"),"bg-selected-hover":qr("bg-selected-hover"),"bg-selected-strong":qr("bg-selected-strong"),"bg-selected-stronger":qr("bg-selected-stronger"),"bg-selected-strongest":qr("bg-selected-strongest"),"bg-selected-strongest-hover":qr("bg-selected-strongest-hover"),"bg-disabled":qr("bg-disabled"),"bg-selected-disabled":qr("bg-selected-disabled"),"bg-selected-stronger-disabled":qr("bg-selected-stronger-disabled"),"bg-success":qr("bg-success"),"bg-success-hover":qr("bg-success-hover"),"bg-success-strong":qr("bg-success-strong"),"bg-success-strong-hover":qr("bg-success-strong-hover"),"bg-warning":qr("bg-warning"),"bg-warning-hover":qr("bg-warning-hover"),"bg-warning-strong":qr("bg-warning-strong"),"bg-warning-strong-hover":qr("bg-warning-strong-hover"),"bg-info":qr("bg-info"),"bg-info-hover":qr("bg-info-hover"),"bg-info-strong":qr("bg-info-strong"),"bg-info-strong-hover":qr("bg-info-strong-hover"),"bg-error":qr("bg-error"),"bg-error-hover":qr("bg-error-hover"),"bg-error-strong":qr("bg-error-strong"),"bg-error-strong-hover":qr("bg-error-strong-hover"),"bg-inverse":qr("bg-inverse"),"bg-inverse-subtle":qr("bg-inverse-subtle"),"bg-inverse-subtler":qr("bg-inverse-subtler"),"bg-inverse-subtlest":qr("bg-inverse-subtlest"),"bg-inverse-hover":qr("bg-inverse-hover"),"bg-primary":qr("bg-primary"),"bg-primary-subtle":qr("bg-primary-subtle"),"bg-primary-subtler":qr("bg-primary-subtler"),"bg-primary-subtlest":qr("bg-primary-subtlest"),"bg-available":qr("bg-available"),"bg-primary-hover":qr("bg-primary-hover"),"bg-primary-subtlest-hover":qr("bg-primary-subtlest-hover"),"bg-primary-subtlest-selected":qr("bg-primary-subtlest-selected"),"overlay-strong":qr("overlay-strong"),"overlay-subtle":qr("overlay-subtle"),hyperlink:qr("hyperlink"),"hyperlink-hover":qr("hyperlink-hover"),"hyperlink-visited":qr("hyperlink-visited"),"hyperlink-inverse":qr("hyperlink-inverse"),"focus-ring":qr("focus-ring"),"focus-ring-inverse":qr("focus-ring-inverse")},Zr={collections:{default:{solid:e=>t=>{var r,n,o;const{thickness:i,radius:s,colour:a}=e||{},l=null!==(r="function"==typeof i?i(t):i)&&void 0!==r?r:Lr["width-010"](t),d=null!==(n="function"==typeof s?s(t):s)&&void 0!==n?n:0,c=null!==(o="function"==typeof a?a(t):a)&&void 0!==o?o:Gr.border(t),u=Lr.solid;return w`
            border: ${l} ${u} ${c};
            border-radius: ${d};
        `},"dashed-default":e=>t=>{var r,n,o;const{thickness:i,radius:s,colour:a}=e||{},l=null!==(r="function"==typeof i?i(t):i)&&void 0!==r?r:Lr["width-010"](t),d=null!==(n="function"==typeof s?s(t):s)&&void 0!==n?n:0,c=null!==(o="function"==typeof a?a(t):a)&&void 0!==o?o:Gr.border(t),u=encodeURIComponent(`<svg width='100%' height='100%' xmlns='http://www.w3.org/2000/svg'><rect width='100%' height='100%' fill='none' rx='${d}' ry='${d}' stroke='${c}' stroke-width='${l}' stroke-dasharray='4, 8' stroke-dashoffset='0' stroke-linecap='square'/></svg>`);return w`
            background-image: url("data:image/svg+xml,${u}");
            border-radius: ${d};
        `}}},defaultValue:"default"},Qr=e=>1===e.length&&"theme"in e[0],Xr=e=>(...t)=>r=>{const n=Qr(t)?[]:t,o=Qr(t)?t[0]:r,i=o.theme;return(0,Hr(Zr,null==i?void 0:i.borderScheme)[e])(...n)(o)},Kr={solid:Xr("solid"),"dashed-default":Xr("dashed-default")},Jr={collections:{default:{"xxs-min":0,"xxs-max":320,"xs-min":321,"xs-max":375,"sm-min":376,"sm-max":420,"md-min":421,"md-max":767,"lg-min":768,"lg-max":1023,"xl-min":1024,"xl-max":1440,"xxl-min":1441,"xxs-column":8,"xs-column":8,"sm-column":8,"md-column":8,"lg-column":12,"xl-column":12,"xxl-column":12,"xxs-gutter":16,"xs-gutter":16,"sm-gutter":16,"md-gutter":16,"lg-gutter":32,"xl-gutter":32,"xxl-gutter":32,"xxs-margin":24,"xs-margin":24,"sm-margin":24,"md-margin":24,"lg-margin":48,"xl-margin":48,"xxl-margin":48}},defaultValue:"default"},en=e=>t=>{var r;const n=t.theme,o=Hr(Jr,null==n?void 0:n.breakpointScheme);let i;return i=(null===(r=null==n?void 0:n.overrides)||void 0===r?void 0:r.breakpoint)?Br(o,e,n.overrides.breakpoint):o[e],i},tn={"xxs-min":en("xxs-min"),"xxs-max":en("xxs-max"),"xs-min":en("xs-min"),"xs-max":en("xs-max"),"sm-min":en("sm-min"),"sm-max":en("sm-max"),"md-min":en("md-min"),"md-max":en("md-max"),"lg-min":en("lg-min"),"lg-max":en("lg-max"),"xl-min":en("xl-min"),"xl-max":en("xl-max"),"xxl-min":en("xxl-min"),"xxs-column":en("xxs-column"),"xs-column":en("xs-column"),"sm-column":en("sm-column"),"md-column":en("md-column"),"lg-column":en("lg-column"),"xl-column":en("xl-column"),"xxl-column":en("xxl-column"),"xxs-gutter":en("xxs-gutter"),"xs-gutter":en("xs-gutter"),"sm-gutter":en("sm-gutter"),"md-gutter":en("md-gutter"),"lg-gutter":en("lg-gutter"),"xl-gutter":en("xl-gutter"),"xxl-gutter":en("xxl-gutter"),"xxs-margin":en("xxs-margin"),"xs-margin":en("xs-margin"),"sm-margin":en("sm-margin"),"md-margin":en("md-margin"),"lg-margin":en("lg-margin"),"xl-margin":en("xl-margin"),"xxl-margin":en("xxl-margin")},rn=e=>("max-width"===e?["xxs","xs","sm","md","lg","xl"]:["xxs","xs","sm","md","lg","xl","xxl"]).reduce(((t,r)=>(t[r]=((e,t)=>{const r=tn["max-width"===e?`${t}-max`:`${t}-min`];return t=>{const n=r(t);return`@media screen and (${e}: ${n}px)`}})(e,r),t)),{}),nn={MaxWidth:rn("max-width"),MinWidth:rn("min-width")},on={collections:{default:{"heading-size-xxl":"3rem","heading-size-xl":"2.5rem","heading-size-lg":"2rem","heading-size-md":"1.625rem","heading-size-sm":"1.375rem","heading-size-xs":"1.125rem","heading-lh-xxl":"3.5rem","heading-lh-xl":"3rem","heading-lh-lg":"2.5rem","heading-lh-md":"2.25rem","heading-lh-sm":"1.75rem","heading-lh-xs":"1.625rem","heading-ls-xxl":"-0.056rem","heading-ls-xl":"-0.032rem","heading-ls-lg":"-0.032rem","heading-ls-md":"0rem","heading-ls-sm":"0rem","heading-ls-xs":"0rem","weight-light":"300","weight-regular":"400","weight-semibold":"600","weight-bold":"700","font-family":"Open Sans","body-size-baseline":"1.125rem","body-size-md":"1rem","body-size-sm":"0.875rem","body-size-xs":"0.75rem","body-lh-baseline":"1.625rem","body-lh-md":"1.5rem","body-lh-sm":"1.625rem","body-lh-xs":"1.25rem","body-ls-baseline":"0rem","body-ls-md":"0.014rem","body-ls-sm":"0.012rem","body-ls-xs":"0.012rem","form-label-size":"1rem","form-description-size":"0.875rem","form-label-lh":"1.5rem","form-description-lh":"1.6rem","form-label-ls":"0.014rem","form-description-ls":"0.012rem"},bookingsg:{"heading-size-xxl":"3rem","heading-size-xl":"2.5rem","heading-size-lg":"2rem","heading-size-md":"1.625rem","heading-size-sm":"1.375rem","heading-size-xs":"1.125rem","heading-lh-xxl":"3.5rem","heading-lh-xl":"3rem","heading-lh-lg":"2.5rem","heading-lh-md":"2.25rem","heading-lh-sm":"1.75rem","heading-lh-xs":"1.75rem","heading-ls-xxl":"-0.056rem","heading-ls-xl":"-0.032rem","heading-ls-lg":"-0.032rem","heading-ls-md":"0rem","heading-ls-sm":"0rem","heading-ls-xs":"0rem","weight-light":"300","weight-regular":"400","weight-semibold":"600","weight-bold":"700","font-family":"Plus Jakarta Sans","body-size-baseline":"1.125rem","body-size-md":"1rem","body-size-sm":"0.875rem","body-size-xs":"0.75rem","body-lh-baseline":"1.75rem","body-lh-md":"1.5rem","body-lh-sm":"1.6rem","body-lh-xs":"1.2rem","body-ls-baseline":"0rem","body-ls-md":"0.014rem","body-ls-sm":"0.012rem","body-ls-xs":"0.012rem","form-label-size":"1rem","form-description-size":"0.875rem","form-label-lh":"1.5rem","form-description-lh":"1.6rem","form-label-ls":"0.014rem","form-description-ls":"0.012rem"},pa:{"heading-size-xxl":"3rem","heading-size-xl":"2.5rem","heading-size-lg":"2rem","heading-size-md":"1.625rem","heading-size-sm":"1.375rem","heading-size-xs":"1.125rem","heading-lh-xxl":"3.5rem","heading-lh-xl":"3rem","heading-lh-lg":"2.5rem","heading-lh-md":"2.25rem","heading-lh-sm":"1.75rem","heading-lh-xs":"1.625rem","heading-ls-xxl":"-0.056rem","heading-ls-xl":"-0.032rem","heading-ls-lg":"0rem","heading-ls-md":"0rem","heading-ls-sm":"0rem","heading-ls-xs":"0rem","weight-light":"300","weight-regular":"400","weight-semibold":"600","weight-bold":"700","font-family":"Lato","body-size-baseline":"1.375rem","body-size-md":"1rem","body-size-sm":"0.875rem","body-size-xs":"0.75rem","body-lh-baseline":"1.5rem","body-lh-md":"1.5rem","body-lh-sm":"1.6rem","body-lh-xs":"1.2rem","body-ls-baseline":"0.014rem","body-ls-md":"0.014rem","body-ls-sm":"0.012rem","body-ls-xs":"0.012rem","form-label-size":"1rem","form-description-size":"0.875rem","form-label-lh":"1.5rem","form-description-lh":"1.6rem","form-label-ls":"0.014rem","form-description-ls":"0.012rem"}},defaultValue:"default"},sn=e=>t=>{var r;const n=t.theme,o=Hr(on,null==n?void 0:n.fontScheme);return(null===(r=null==n?void 0:n.overrides)||void 0===r?void 0:r.fontSpec)?Br(o,e,n.overrides.fontSpec):o[e]},an={"heading-size-xxl":sn("heading-size-xxl"),"heading-size-xl":sn("heading-size-xl"),"heading-size-lg":sn("heading-size-lg"),"heading-size-md":sn("heading-size-md"),"heading-size-sm":sn("heading-size-sm"),"heading-size-xs":sn("heading-size-xs"),"heading-lh-xxl":sn("heading-lh-xxl"),"heading-lh-xl":sn("heading-lh-xl"),"heading-lh-lg":sn("heading-lh-lg"),"heading-lh-md":sn("heading-lh-md"),"heading-lh-sm":sn("heading-lh-sm"),"heading-lh-xs":sn("heading-lh-xs"),"heading-ls-xxl":sn("heading-ls-xxl"),"heading-ls-xl":sn("heading-ls-xl"),"heading-ls-lg":sn("heading-ls-lg"),"heading-ls-md":sn("heading-ls-md"),"heading-ls-sm":sn("heading-ls-sm"),"heading-ls-xs":sn("heading-ls-xs"),"weight-light":sn("weight-light"),"weight-regular":sn("weight-regular"),"weight-semibold":sn("weight-semibold"),"weight-bold":sn("weight-bold"),"font-family":sn("font-family"),"body-size-baseline":sn("body-size-baseline"),"body-size-md":sn("body-size-md"),"body-size-sm":sn("body-size-sm"),"body-size-xs":sn("body-size-xs"),"body-lh-baseline":sn("body-lh-baseline"),"body-lh-md":sn("body-lh-md"),"body-lh-sm":sn("body-lh-sm"),"body-lh-xs":sn("body-lh-xs"),"body-ls-baseline":sn("body-ls-baseline"),"body-ls-md":sn("body-ls-md"),"body-ls-sm":sn("body-ls-sm"),"body-ls-xs":sn("body-ls-xs"),"form-label-size":sn("form-label-size"),"form-description-size":sn("form-description-size"),"form-label-lh":sn("form-label-lh"),"form-description-lh":sn("form-description-lh"),"form-label-ls":sn("form-label-ls"),"form-description-ls":sn("form-description-ls")},ln=(e,t,r,n,o)=>{const{disableLigatures:i}=o||{};return w`
        font-family: ${sn("font-family")};
        font-size: ${sn(e)};
        font-weight: ${sn(t)};
        line-height: ${sn(r)};
        letter-spacing: ${sn(n)};

        font-variant: ${i?"no-common-ligatures":"normal"};
    `},dn=(e={})=>({"heading-xxl-light":ln("heading-size-xxl","weight-light","heading-lh-xxl","heading-ls-xxl",e),"heading-xxl-regular":ln("heading-size-xxl","weight-regular","heading-lh-xxl","heading-ls-xxl",e),"heading-xxl-semibold":ln("heading-size-xxl","weight-semibold","heading-lh-xxl","heading-ls-xxl",e),"heading-xxl-bold":ln("heading-size-xxl","weight-bold","heading-lh-xxl","heading-ls-xxl",e),"heading-xl-light":ln("heading-size-xl","weight-light","heading-lh-xl","heading-ls-xl",e),"heading-xl-regular":ln("heading-size-xl","weight-regular","heading-lh-xl","heading-ls-xl",e),"heading-xl-semibold":ln("heading-size-xl","weight-semibold","heading-lh-xl","heading-ls-xl",e),"heading-xl-bold":ln("heading-size-xl","weight-bold","heading-lh-xl","heading-ls-xl",e),"heading-lg-light":ln("heading-size-lg","weight-light","heading-lh-lg","heading-ls-lg",e),"heading-lg-regular":ln("heading-size-lg","weight-regular","heading-lh-lg","heading-ls-lg",e),"heading-lg-semibold":ln("heading-size-lg","weight-semibold","heading-lh-lg","heading-ls-lg",e),"heading-lg-bold":ln("heading-size-lg","weight-bold","heading-lh-lg","heading-ls-lg",e),"heading-md-light":ln("heading-size-md","weight-light","heading-lh-md","heading-ls-md",e),"heading-md-regular":ln("heading-size-md","weight-regular","heading-lh-md","heading-ls-md",e),"heading-md-semibold":ln("heading-size-md","weight-semibold","heading-lh-md","heading-ls-md",e),"heading-md-bold":ln("heading-size-md","weight-bold","heading-lh-md","heading-ls-md",e),"heading-sm-light":ln("heading-size-sm","weight-light","heading-lh-sm","heading-ls-sm",e),"heading-sm-regular":ln("heading-size-sm","weight-regular","heading-lh-sm","heading-ls-sm",e),"heading-sm-semibold":ln("heading-size-sm","weight-semibold","heading-lh-sm","heading-ls-sm",e),"heading-sm-bold":ln("heading-size-sm","weight-bold","heading-lh-sm","heading-ls-sm",e),"heading-xs-light":ln("heading-size-xs","weight-light","heading-lh-xs","heading-ls-xs",e),"heading-xs-regular":ln("heading-size-xs","weight-regular","heading-lh-xs","heading-ls-xs",e),"heading-xs-semibold":ln("heading-size-xs","weight-semibold","heading-lh-xs","heading-ls-xs",e),"heading-xs-bold":ln("heading-size-xs","weight-bold","heading-lh-xs","heading-ls-xs",e),"body-baseline-light":ln("body-size-baseline","weight-light","body-lh-baseline","body-ls-baseline",e),"body-baseline-regular":ln("body-size-baseline","weight-regular","body-lh-baseline","body-ls-baseline",e),"body-baseline-semibold":ln("body-size-baseline","weight-semibold","body-lh-baseline","body-ls-baseline",e),"body-baseline-bold":ln("body-size-baseline","weight-bold","body-lh-baseline","body-ls-baseline",e),"body-md-light":ln("body-size-md","weight-light","body-lh-md","body-ls-md",e),"body-md-regular":ln("body-size-md","weight-regular","body-lh-md","body-ls-md",e),"body-md-semibold":ln("body-size-md","weight-semibold","body-lh-md","body-ls-md",e),"body-md-bold":ln("body-size-md","weight-bold","body-lh-md","body-ls-md",e),"body-sm-light":ln("body-size-sm","weight-light","body-lh-sm","body-ls-sm",e),"body-sm-regular":ln("body-size-sm","weight-regular","body-lh-sm","body-ls-sm",e),"body-sm-semibold":ln("body-size-sm","weight-semibold","body-lh-sm","body-ls-sm",e),"body-sm-bold":ln("body-size-sm","weight-bold","body-lh-sm","body-ls-sm",e),"body-xs-light":ln("body-size-xs","weight-light","body-lh-xs","body-ls-xs",e),"body-xs-regular":ln("body-size-xs","weight-regular","body-lh-xs","body-ls-xs",e),"body-xs-semibold":ln("body-size-xs","weight-semibold","body-lh-xs","body-ls-xs",e),"body-xs-bold":ln("body-size-xs","weight-bold","body-lh-xs","body-ls-xs",e),"form-label":ln("form-label-size","weight-semibold","form-label-lh","form-label-ls",e),"form-description":ln("form-description-size","weight-regular","form-description-lh","form-description-ls",e)}),cn={collections:{default:dn(),bookingsg:dn({disableLigatures:!0}),pa:dn({disableLigatures:!0})},defaultValue:"default"},un=e=>t=>{var r;const n=t.theme,o=Hr(cn,null==n?void 0:n.fontScheme),i=(null===(r=null==n?void 0:n.overrides)||void 0===r?void 0:r.font)?Br(o,e,n.overrides.font):o[e];return"function"==typeof i?i(t):i},hn={"heading-xxl-light":un("heading-xxl-light"),"heading-xxl-regular":un("heading-xxl-regular"),"heading-xxl-semibold":un("heading-xxl-semibold"),"heading-xxl-bold":un("heading-xxl-bold"),"heading-xl-light":un("heading-xl-light"),"heading-xl-regular":un("heading-xl-regular"),"heading-xl-semibold":un("heading-xl-semibold"),"heading-xl-bold":un("heading-xl-bold"),"heading-lg-light":un("heading-lg-light"),"heading-lg-regular":un("heading-lg-regular"),"heading-lg-semibold":un("heading-lg-semibold"),"heading-lg-bold":un("heading-lg-bold"),"heading-md-light":un("heading-md-light"),"heading-md-regular":un("heading-md-regular"),"heading-md-semibold":un("heading-md-semibold"),"heading-md-bold":un("heading-md-bold"),"heading-sm-light":un("heading-sm-light"),"heading-sm-regular":un("heading-sm-regular"),"heading-sm-semibold":un("heading-sm-semibold"),"heading-sm-bold":un("heading-sm-bold"),"heading-xs-light":un("heading-xs-light"),"heading-xs-regular":un("heading-xs-regular"),"heading-xs-semibold":un("heading-xs-semibold"),"heading-xs-bold":un("heading-xs-bold"),"body-baseline-light":un("body-baseline-light"),"body-baseline-regular":un("body-baseline-regular"),"body-baseline-semibold":un("body-baseline-semibold"),"body-baseline-bold":un("body-baseline-bold"),"body-md-light":un("body-md-light"),"body-md-regular":un("body-md-regular"),"body-md-semibold":un("body-md-semibold"),"body-md-bold":un("body-md-bold"),"body-sm-light":un("body-sm-light"),"body-sm-regular":un("body-sm-regular"),"body-sm-semibold":un("body-sm-semibold"),"body-sm-bold":un("body-sm-bold"),"body-xs-light":un("body-xs-light"),"body-xs-regular":un("body-xs-regular"),"body-xs-semibold":un("body-xs-semibold"),"body-xs-bold":un("body-xs-bold"),"form-label":un("form-label"),"form-description":un("form-description")},gn={collections:{default:{"duration-150":"150ms","duration-250":"250ms","duration-350":"350ms","duration-500":"500ms","duration-800":"800ms","duration-1000":"1000ms","ease-default":"cubic-bezier(0.45, 0.05, 0.55, 0.95)","ease-standard":"cubic-bezier(0.86, 0, 0.07, 1)","ease-entrance":"cubic-bezier(0.18, 0.13, 0, 1)","ease-exit":"cubic-bezier(1, 0, 0.8, 0.85)"}},defaultValue:"default"},mn=e=>t=>{var r;const n=t.theme,o=Hr(gn,null==n?void 0:n.motionScheme);return(null===(r=null==n?void 0:n.overrides)||void 0===r?void 0:r.motion)?Br(o,e,n.overrides.motion):o[e]},fn={"duration-150":mn("duration-150"),"duration-250":mn("duration-250"),"duration-350":mn("duration-350"),"duration-500":mn("duration-500"),"duration-800":mn("duration-800"),"duration-1000":mn("duration-1000"),"ease-default":mn("ease-default"),"ease-standard":mn("ease-standard"),"ease-entrance":mn("ease-entrance"),"ease-exit":mn("ease-exit")},pn={collections:{default:{none:0,xs:2,sm:4,md:8,lg:12,full:9999}},defaultValue:"default"},bn=e=>t=>{var r;const n=t.theme,o=Hr(pn,null==n?void 0:n.radiusScheme);return(null===(r=null==n?void 0:n.overrides)||void 0===r?void 0:r.radius)?`${Br(o,e,n.overrides.radius)}px`:`${o[e]}px`},vn={none:bn("none"),xs:bn("xs"),sm:bn("sm"),md:bn("md"),lg:bn("lg"),full:bn("full")},yn={collections:{default:{"spacing-0":0,"spacing-4":4,"spacing-8":8,"spacing-12":12,"spacing-16":16,"spacing-20":20,"spacing-24":24,"spacing-32":32,"spacing-40":40,"spacing-48":48,"spacing-64":64,"spacing-72":72,"layout-xs":8,"layout-sm":16,"layout-md":24,"layout-lg":32,"layout-xl":48,"layout-xxl":64,"layout-xxxl":128}},defaultValue:"default"},xn=e=>t=>{var r;const n=t.theme,o=Hr(yn,null==n?void 0:n.spacingScheme);return(null===(r=null==n?void 0:n.overrides)||void 0===r?void 0:r.spacing)?`${Br(o,e,n.overrides.spacing)}px`:`${o[e]}px`},wn={"spacing-0":xn("spacing-0"),"spacing-4":xn("spacing-4"),"spacing-8":xn("spacing-8"),"spacing-12":xn("spacing-12"),"spacing-16":xn("spacing-16"),"spacing-20":xn("spacing-20"),"spacing-24":xn("spacing-24"),"spacing-32":xn("spacing-32"),"spacing-40":xn("spacing-40"),"spacing-48":xn("spacing-48"),"spacing-64":xn("spacing-64"),"spacing-72":xn("spacing-72"),"layout-xs":xn("layout-xs"),"layout-sm":xn("layout-sm"),"layout-md":xn("layout-md"),"layout-lg":xn("layout-lg"),"layout-xl":xn("layout-xl"),"layout-xxl":xn("layout-xxl"),"layout-xxxl":xn("layout-xxxl")},$n=Object.assign(Object.assign({},Gr),{Primitive:Nr}),Cn=Object.assign(Object.assign({},hn),{Spec:an}),Fn=fn,Sn=Object.assign(Object.assign({},Lr),{Util:Kr}),En=wn,kn=vn,In=tn,Tn=nn,Dn=x.div`
    position: relative;
    height: 100%;
    display: flex;
    flex: 1;

    ${e=>{if(e.$wrap)return w`
                /* Parent container need to provide space */
                flex-wrap: wrap;

                [data-id="range-container-elem1-container"],
                [data-id="range-container-elem2-container"] {
                    // 100% - Icon size - 2padding
                    max-width: calc(
                        100% - ${Cn.Spec["body-size-baseline"]} -
                            ${En["spacing-16"]}
                    );
                    flex: unset;
                }

                [data-id="range-container-elem2-container"] {
                    margin-top: ${En["spacing-8"]};
                }
            `}}
`,zn=x.div`
    width: 100%; // Force next flex item to break to next line
`,Mn=x.div`
    display: flex;
    flex: 1;
    align-items: center;
`,_n=x(v)`
    color: ${$n.icon};
    width: ${Cn.Spec["body-size-baseline"]};
    height: ${Cn.Spec["body-size-baseline"]};
    flex-shrink: 0;
    margin: 0 ${En["spacing-8"]};
    align-self: center;
`,On=x.div`
    position: absolute;
    background: ${e=>e.$error?$n["border-error-focus-strong"]:$n["border-focus-strong"]};
    height: 2px;
    // half - half padding - half icon width
    width: calc(
        50% - ${En["spacing-8"]} - (${Cn.Spec["body-size-baseline"]} / 2)
    );
    transition: left ${Fn["duration-350"]} ${Fn["ease-standard"]},
        opacity ${Fn["duration-350"]} ${Fn["ease-standard"]};
    left: 0;
    bottom: 0;

    ${e=>{switch(e.$position){case"start":return w`
                    opacity: 1;
                `;case"end":return w`
                    left: calc(50% + ${En["spacing-16"]});
                    opacity: 1;
                `;case"none":return w`
                    opacity: 0;
                `}}}

    ${e=>{if(e.$wrap)return w`
                display: none;
            `}}
`,An=({children:r,currentActive:n,error:o,className:i,wrap:s})=>{const[a,l]=r;return e(Dn,{className:i,$wrap:s,children:[t(Mn,{"data-id":"range-container-elem1-container",children:a}),t(_n,{}),s&&t(zn,{}),t(Mn,{"data-id":"range-container-elem2-container",children:l}),t(On,{"data-id":"range-container-indicator",$position:n,$error:o,$wrap:s})]})},Bn=w`
    outline-offset: -1px;
    outline: ${Sn["width-020"]} ${Sn.solid} ${$n["border-focus"]};
`,Hn=w`
    outline-color: ${$n["border-focus"]};
`,Rn=w`
    outline-color: ${$n["border-disabled"]};
`,jn=w`
    outline-color: ${$n["border-error-focus"]};
`,Ln=x.div`
    border: ${Sn["width-010"]} ${Sn.solid} ${$n.border};
    border-radius: ${kn.sm};
    background: ${$n.bg};

    :focus-within {
        ${Bn}
    }
    ${e=>e.$focused&&Bn}

    ${e=>e.$readOnly?w`
                border-color: transparent;
                padding: 0;
                background: transparent !important;

                :focus-within {
                    ${Hn}
                }
                ${e.$focused&&Hn}
            `:e.$disabled?w`
                background: ${$n["bg-disabled"]};
                cursor: not-allowed;

                :focus-within {
                    ${Rn}
                }
                ${e.$focused&&Rn}
            `:e.$error?w`
                border-color: ${$n["border-error"]};

                :focus-within {
                    ${jn}
                }
                ${e.$focused&&jn}
            `:void 0}
`,Pn=x(Ln)`
    display: flex;
    align-items: center;
    position: relative;
    height: max-content;
    width: 100%;
    padding: 0 ${En["spacing-16"]};
    flex-direction: ${e=>"right"===e.$position?"row-reverse":"row"};
`,Wn=x.input`
    ${e=>"small"===e.$variant?Cn["body-md-regular"]:Cn["body-baseline-regular"]}
    color: ${$n.text};
    display: block;
    background: transparent;
    border: none;
    outline: none;
    box-shadow: none;
    padding: 0;
    margin: 0;

    :disabled {
        color: ${$n["text-subtler"]};

        :hover {
            cursor: not-allowed;
        }
    }

    ::placeholder,
    ::-webkit-input-placeholder {
        color: ${$n["text-subtler"]};
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
`,Vn=x.button`
    background: transparent;
    border: none;
    outline: none;

    :focus,
    :active {
        outline: none;
    }

    :focus-visible {
        outline: ${Sn["width-010"]} ${Sn.solid}
            ${$n["border-focus"]};
        border-radius: ${kn.sm};
    }
`,Nn=x.div`
    position: relative;
`,Yn=x(Pn)`
    height: 3rem;
    gap: ${En["spacing-8"]};
`,Un=x(Wn)`
    display: block;
    width: 100%;
    flex: 1;
`;var qn={exports:{}};qn.exports=function(){var e=1e3,t=6e4,r=36e5,n="millisecond",o="second",i="minute",s="hour",a="day",l="week",d="month",c="quarter",u="year",h="date",g="Invalid Date",m=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,f=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,p={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(e){var t=["th","st","nd","rd"],r=e%100;return"["+e+(t[(r-20)%10]||t[r]||t[0])+"]"}},b=function(e,t,r){var n=String(e);return!n||n.length>=t?e:""+Array(t+1-n.length).join(r)+e},v={s:b,z:function(e){var t=-e.utcOffset(),r=Math.abs(t),n=Math.floor(r/60),o=r%60;return(t<=0?"+":"-")+b(n,2,"0")+":"+b(o,2,"0")},m:function e(t,r){if(t.date()<r.date())return-e(r,t);var n=12*(r.year()-t.year())+(r.month()-t.month()),o=t.clone().add(n,d),i=r-o<0,s=t.clone().add(n+(i?-1:1),d);return+(-(n+(r-o)/(i?o-s:s-o))||0)},a:function(e){return e<0?Math.ceil(e)||0:Math.floor(e)},p:function(e){return{M:d,y:u,w:l,d:a,D:h,h:s,m:i,s:o,ms:n,Q:c}[e]||String(e||"").toLowerCase().replace(/s$/,"")},u:function(e){return void 0===e}},y="en",x={};x[y]=p;var w="$isDayjsObject",$=function(e){return e instanceof E||!(!e||!e[w])},C=function e(t,r,n){var o;if(!t)return y;if("string"==typeof t){var i=t.toLowerCase();x[i]&&(o=i),r&&(x[i]=r,o=i);var s=t.split("-");if(!o&&s.length>1)return e(s[0])}else{var a=t.name;x[a]=t,o=a}return!n&&o&&(y=o),o||!n&&y},F=function(e,t){if($(e))return e.clone();var r="object"==typeof t?t:{};return r.date=e,r.args=arguments,new E(r)},S=v;S.l=C,S.i=$,S.w=function(e,t){return F(e,{locale:t.$L,utc:t.$u,x:t.$x,$offset:t.$offset})};var E=function(){function p(e){this.$L=C(e.locale,null,!0),this.parse(e),this.$x=this.$x||e.x||{},this[w]=!0}var b=p.prototype;return b.parse=function(e){this.$d=function(e){var t=e.date,r=e.utc;if(null===t)return new Date(NaN);if(S.u(t))return new Date;if(t instanceof Date)return new Date(t);if("string"==typeof t&&!/Z$/i.test(t)){var n=t.match(m);if(n){var o=n[2]-1||0,i=(n[7]||"0").substring(0,3);return r?new Date(Date.UTC(n[1],o,n[3]||1,n[4]||0,n[5]||0,n[6]||0,i)):new Date(n[1],o,n[3]||1,n[4]||0,n[5]||0,n[6]||0,i)}}return new Date(t)}(e),this.init()},b.init=function(){var e=this.$d;this.$y=e.getFullYear(),this.$M=e.getMonth(),this.$D=e.getDate(),this.$W=e.getDay(),this.$H=e.getHours(),this.$m=e.getMinutes(),this.$s=e.getSeconds(),this.$ms=e.getMilliseconds()},b.$utils=function(){return S},b.isValid=function(){return!(this.$d.toString()===g)},b.isSame=function(e,t){var r=F(e);return this.startOf(t)<=r&&r<=this.endOf(t)},b.isAfter=function(e,t){return F(e)<this.startOf(t)},b.isBefore=function(e,t){return this.endOf(t)<F(e)},b.$g=function(e,t,r){return S.u(e)?this[t]:this.set(r,e)},b.unix=function(){return Math.floor(this.valueOf()/1e3)},b.valueOf=function(){return this.$d.getTime()},b.startOf=function(e,t){var r=this,n=!!S.u(t)||t,c=S.p(e),g=function(e,t){var o=S.w(r.$u?Date.UTC(r.$y,t,e):new Date(r.$y,t,e),r);return n?o:o.endOf(a)},m=function(e,t){return S.w(r.toDate()[e].apply(r.toDate("s"),(n?[0,0,0,0]:[23,59,59,999]).slice(t)),r)},f=this.$W,p=this.$M,b=this.$D,v="set"+(this.$u?"UTC":"");switch(c){case u:return n?g(1,0):g(31,11);case d:return n?g(1,p):g(0,p+1);case l:var y=this.$locale().weekStart||0,x=(f<y?f+7:f)-y;return g(n?b-x:b+(6-x),p);case a:case h:return m(v+"Hours",0);case s:return m(v+"Minutes",1);case i:return m(v+"Seconds",2);case o:return m(v+"Milliseconds",3);default:return this.clone()}},b.endOf=function(e){return this.startOf(e,!1)},b.$set=function(e,t){var r,l=S.p(e),c="set"+(this.$u?"UTC":""),g=(r={},r[a]=c+"Date",r[h]=c+"Date",r[d]=c+"Month",r[u]=c+"FullYear",r[s]=c+"Hours",r[i]=c+"Minutes",r[o]=c+"Seconds",r[n]=c+"Milliseconds",r)[l],m=l===a?this.$D+(t-this.$W):t;if(l===d||l===u){var f=this.clone().set(h,1);f.$d[g](m),f.init(),this.$d=f.set(h,Math.min(this.$D,f.daysInMonth())).$d}else g&&this.$d[g](m);return this.init(),this},b.set=function(e,t){return this.clone().$set(e,t)},b.get=function(e){return this[S.p(e)]()},b.add=function(n,c){var h,g=this;n=Number(n);var m=S.p(c),f=function(e){var t=F(g);return S.w(t.date(t.date()+Math.round(e*n)),g)};if(m===d)return this.set(d,this.$M+n);if(m===u)return this.set(u,this.$y+n);if(m===a)return f(1);if(m===l)return f(7);var p=(h={},h[i]=t,h[s]=r,h[o]=e,h)[m]||1,b=this.$d.getTime()+n*p;return S.w(b,this)},b.subtract=function(e,t){return this.add(-1*e,t)},b.format=function(e){var t=this,r=this.$locale();if(!this.isValid())return r.invalidDate||g;var n=e||"YYYY-MM-DDTHH:mm:ssZ",o=S.z(this),i=this.$H,s=this.$m,a=this.$M,l=r.weekdays,d=r.months,c=r.meridiem,u=function(e,r,o,i){return e&&(e[r]||e(t,n))||o[r].slice(0,i)},h=function(e){return S.s(i%12||12,e,"0")},m=c||function(e,t,r){var n=e<12?"AM":"PM";return r?n.toLowerCase():n};return n.replace(f,(function(e,n){return n||function(e){switch(e){case"YY":return String(t.$y).slice(-2);case"YYYY":return S.s(t.$y,4,"0");case"M":return a+1;case"MM":return S.s(a+1,2,"0");case"MMM":return u(r.monthsShort,a,d,3);case"MMMM":return u(d,a);case"D":return t.$D;case"DD":return S.s(t.$D,2,"0");case"d":return String(t.$W);case"dd":return u(r.weekdaysMin,t.$W,l,2);case"ddd":return u(r.weekdaysShort,t.$W,l,3);case"dddd":return l[t.$W];case"H":return String(i);case"HH":return S.s(i,2,"0");case"h":return h(1);case"hh":return h(2);case"a":return m(i,s,!0);case"A":return m(i,s,!1);case"m":return String(s);case"mm":return S.s(s,2,"0");case"s":return String(t.$s);case"ss":return S.s(t.$s,2,"0");case"SSS":return S.s(t.$ms,3,"0");case"Z":return o}return null}(e)||o.replace(":","")}))},b.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},b.diff=function(n,h,g){var m,f=this,p=S.p(h),b=F(n),v=(b.utcOffset()-this.utcOffset())*t,y=this-b,x=function(){return S.m(f,b)};switch(p){case u:m=x()/12;break;case d:m=x();break;case c:m=x()/3;break;case l:m=(y-v)/6048e5;break;case a:m=(y-v)/864e5;break;case s:m=y/r;break;case i:m=y/t;break;case o:m=y/e;break;default:m=y}return g?m:S.a(m)},b.daysInMonth=function(){return this.endOf(d).$D},b.$locale=function(){return x[this.$L]},b.locale=function(e,t){if(!e)return this.$L;var r=this.clone(),n=C(e,t,!0);return n&&(r.$L=n),r},b.clone=function(){return S.w(this.$d,this)},b.toDate=function(){return new Date(this.valueOf())},b.toJSON=function(){return this.isValid()?this.toISOString():null},b.toISOString=function(){return this.$d.toISOString()},b.toString=function(){return this.$d.toUTCString()},p}(),k=E.prototype;return F.prototype=k,[["$ms",n],["$s",o],["$m",i],["$H",s],["$W",a],["$M",d],["$y",u],["$D",h]].forEach((function(e){k[e[1]]=function(t){return this.$g(t,e[0],e[1])}})),F.extend=function(e,t){return e.$i||(e(t,E,F),e.$i=!0),F},F.locale=C,F.isDayjs=$,F.unix=function(e){return F(1e3*e)},F.en=x[y],F.Ls=x,F.p={},F}();var Gn,Zn,Qn,Xn=se(qn.exports);!function(e){e.transformWithSpaces=(e,t)=>{const r="(.{"+t+"})";return e.replace(/[^\dA-Z]/gi,"").replace(new RegExp(r,"g"),"$1 ").trim()},e.padValue=(e,t)=>{if("0"===e)return t?e:e.padStart(2,"0");if(""===e)return e;return parseInt(e).toString().padStart(2,"0")},e.shouldTruncateToTwoLines=(e,t)=>{const r=Math.floor(t/9);return e.length>=2*r||1===e.split(" ").length&&e.length>r},e.truncateOneLine=(e,t,r,n,o=8)=>{let i=0;t>r&&(i=Math.floor((t-r)/o));const s=n+i;if(s<e.length){const t=Math.floor(s/2);return e.substring(0,t)+" ... "+e.substring(e.length-t,e.length)}return e},e.truncateTwoLines=(e,t,r,n=1.2)=>{const o=Math.floor(2*t/(.6*r))*(2/n);if(e.length<=o)return e;const i=Math.floor(.6*o),s=Math.floor(.2*o);return`${e.substring(0,i)}...${e.substring(e.length-s)}`},e.getTextWidth=(t,r)=>{if("undefined"==typeof document)return 0;const n=(e.getTextWidth.canvas||(e.getTextWidth.canvas=document.createElement("canvas"))).getContext("2d");n.font=r;return n.measureText(t).width},e.maskValue=(e,r)=>{if(!e)return e;const{maskRange:n,unmaskRange:o,maskChar:i="•",maskRegex:s,maskTransformer:a}=r;if(a)return a(e);if(s)return e.replace(s,i);if(n){const{startIndex:r,endIndex:o}=t(n[0],n[1]);return e.substring(0,r)+i.repeat(e.substring(r,o+1).length)+e.substring(o+1)}if(o){const{startIndex:r,endIndex:n}=t(o[0],o[1]);return i.repeat(e.substring(0,r).length)+e.substring(r,n+1)+i.repeat(e.substring(n+1).length)}return e};const t=(e,t)=>e<t?{startIndex:e,endIndex:t}:{startIndex:t,endIndex:e}}(Gn||(Gn={})),function(e){e.AM="AM",e.PM="PM"}(Zn||(Zn={})),function(e){e.roundToNearestHour=(e,t)=>{const r=Xn(e,"HH:mm");return(0===r.minute()?r:t?r.minute(0).add(1,"hour"):r.minute(0)).format("HH:mm")},e.generateHourlyIntervals=(e,t,r="ha")=>{const n="HH:mm";let o=Xn(e,n),i=Xn(t,n);o.isSame(i)&&(i=i.add(1,"day"));const s=[];for(;o.isBefore(i);)s.push(o.format(r)),o=o.add(1,"hour");return s},e.getTimeValues=(e,t)=>{const r={hour:"",minute:"",period:Zn.AM};if(!t)return r;try{if("24hr"===e){const n=eo(t,e);r.minute=Gn.padValue(n.minute);const o=parseInt(n.hour);0===Math.floor(o/12)?(r.period=Zn.AM,r.hour=0===o?"12":Gn.padValue(o.toString())):(r.period=Zn.PM,r.hour=12===o?o.toString():Gn.padValue((o-12).toString()))}else{const{hour:n,minute:o,period:i=""}=eo(t,e);r.hour=Gn.padValue(n),r.minute=Gn.padValue(o),r.period="am"===i.toLowerCase()?Zn.AM:Zn.PM}return r}catch(e){return r}},e.updateMinutes=(e,t)=>{const r=parseInt(e);if(isNaN(r))return"add"===t?Gn.padValue("0"):"55";const n=Math.floor(r/5),o=(("add"===t?n+1:r%5==0?n-1:n)%12+12)%12;return Gn.padValue((5*o).toString())},e.updateHours=(e,t)=>{const r=parseInt(e);if(isNaN(r))return"add"===t?Gn.padValue("1"):"12";const n="add"===t?r+1:r-1;return n<=12&&n>0?Gn.padValue(n.toString()):13===n?Gn.padValue("1"):"12"},e.convertTo24HourFormat=e=>{const t=parseInt(e.hour);let r;return r=e.period===Zn.PM?12===t?t.toString():(t+12).toString():12===t?"00":e.hour,`${r}:${e.minute}`},e.convertHourTo12HourFormat=e=>{const t=parseInt(e),r=t%12==0?12..toString():(t%12).toString();return Gn.padValue(r)},e.formatDisplayValue=(e,t)=>{try{const{hour:r,minute:n,period:o=""}=eo(e,t),i=Gn.padValue(r);let s=`${i}:${Gn.padValue(n)}`;return"12hr"===t?(s+=o.toLowerCase(),s):s}catch(e){return""}},e.toMinutesSeconds=e=>({minutes:Math.floor(e/60),seconds:e%60}),e.to24Hour=e=>{if((null==e?void 0:e.includes("am"))||(null==e?void 0:e.includes("pm"))){const[t,r]=e.split(/(am|pm)/i),[n,o]=t.split(":").map(Number);let i=n;return"pm"===r&&i<12&&(i+=12),"am"===r&&12===i&&(i=0),to(i,o)}return e},e.generateTimings=(t,r="12hr",n,o)=>{const i=[];let s=0,a=1440-t;for(n&&(s=e.timeToMinutes(n)),o&&(a=e.timeToMinutes(o));s<=a;){let e=Math.floor(s/60);const n=s%60;if("12hr"===r){const t=e>=12?"pm":"am";e%=12,e=e||12;const r=to(e,n,t);i.push(r)}else{const t=to(e,n);i.push(t)}s+=t}return i},e.parseInput=(e,t="12hr")=>{if(""===e||void 0===e)return e;const r=e.trim().toLowerCase(),n=/^(?:(\d{1,2})([:.])?(\d{2})?)?(a|p|am|pm)?$/.exec(r);if(!n)return;let o=parseInt(n[1]||"0",10);const i=parseInt(n[3]||"0",10);let s=n[4];if(void 0===n[1]||o>24||i>59)return;if("a"===s?s="am":"p"===s&&(s="pm"),"24hr"===t)return"pm"===s&&o<12?o+=12:("am"===s&&12===o||24===o)&&(o=0),to(o,i);s?0===o||24===o?(s="am",o=12):o>12&&(s="pm",o-=12):(s=0===o||24===o||o>6&&o<12?"am":"pm",o=o%12||12);return to(o,i,s)},e.findClosestFlooredTime=(t,r)=>{if(!t)return t;const n=e.timeToMinutes(t);let o="",i=1/0;for(const t of r){const r=e.timeToMinutes(t)-n;if(r<=0&&Math.abs(r)<i)i=Math.abs(r),o=t;else if(r>0)break}return o},e.timeToMinutes=e=>{const[t,r]=e.toLowerCase().split(/(am|pm)/),[n,o]=t.split(":").map(Number);let i=n;return"pm"===r&&12!==i&&(i+=12),"am"===r&&12===i&&(i=0),60*i+o}}(Qn||(Qn={}));const Kn=(e,t)=>{const r=parseInt(e);return"24hr"===t?r>=0&&r<=23:r>=1&&r<=12},Jn=e=>{const t=parseInt(e);return t>=0&&t<=59},eo=(e,t)=>{const r=e?e.split(":"):[],n=new Error("Invalid format");if("12hr"===t){if(2!==r.length||4!==r[1].length)throw n;const e=r[1].substring(0,2),i=r[1].substring(2);if(!Kn(r[0],t)||!Jn(e)||"am"!==(o=i).toLowerCase()&&"pm"!==o.toLowerCase())throw n;return{hour:r[0],minute:e,period:r[1].substring(2)}}if(2!==r.length)throw n;if(!Kn(r[0],t)||!Jn(r[1]))throw n;return{hour:r[0],minute:r[1]};var o},to=(e,t,r)=>r?`${e}:${t.toString().padStart(2,"0")}${r}`:`${e.toString().padStart(2,"0")}:${t.toString().padStart(2,"0")}`;var ro=function(e,t){return ro=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])},ro(e,t)};var no=function(){return no=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var o in t=arguments[r])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e},no.apply(this,arguments)};var oo="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};var io=function(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)},so="object"==typeof oo&&oo&&oo.Object===Object&&oo,ao="object"==typeof self&&self&&self.Object===Object&&self,lo=so||ao||Function("return this")(),co=lo,uo=function(){return co.Date.now()},ho=/\s/;var go=function(e){for(var t=e.length;t--&&ho.test(e.charAt(t)););return t},mo=/^\s+/;var fo=function(e){return e?e.slice(0,go(e)+1).replace(mo,""):e},po=lo.Symbol,bo=po,vo=Object.prototype,yo=vo.hasOwnProperty,xo=vo.toString,wo=bo?bo.toStringTag:void 0;var $o=function(e){var t=yo.call(e,wo),r=e[wo];try{e[wo]=void 0;var n=!0}catch(e){}var o=xo.call(e);return n&&(t?e[wo]=r:delete e[wo]),o},Co=Object.prototype.toString;var Fo=$o,So=function(e){return Co.call(e)},Eo=po?po.toStringTag:void 0;var ko=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":Eo&&Eo in Object(e)?Fo(e):So(e)},Io=function(e){return null!=e&&"object"==typeof e};var To=fo,Do=io,zo=function(e){return"symbol"==typeof e||Io(e)&&"[object Symbol]"==ko(e)},Mo=/^[-+]0x[0-9a-f]+$/i,_o=/^0b[01]+$/i,Oo=/^0o[0-7]+$/i,Ao=parseInt;var Bo=io,Ho=uo,Ro=function(e){if("number"==typeof e)return e;if(zo(e))return NaN;if(Do(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=Do(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=To(e);var r=_o.test(e);return r||Oo.test(e)?Ao(e.slice(2),r?2:8):Mo.test(e)?NaN:+e},jo=Math.max,Lo=Math.min;var Po=function(e,t,r){var n,o,i,s,a,l,d=0,c=!1,u=!1,h=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function g(t){var r=n,i=o;return n=o=void 0,d=t,s=e.apply(i,r)}function m(e){var r=e-l;return void 0===l||r>=t||r<0||u&&e-d>=i}function f(){var e=Ho();if(m(e))return p(e);a=setTimeout(f,function(e){var r=t-(e-l);return u?Lo(r,i-(e-d)):r}(e))}function p(e){return a=void 0,h&&n?g(e):(n=o=void 0,s)}function b(){var e=Ho(),r=m(e);if(n=arguments,o=this,l=e,r){if(void 0===a)return function(e){return d=e,a=setTimeout(f,t),c?g(e):s}(l);if(u)return clearTimeout(a),a=setTimeout(f,t),g(l)}return void 0===a&&(a=setTimeout(f,t)),s}return t=Ro(t)||0,Bo(r)&&(c=!!r.leading,i=(u="maxWait"in r)?jo(Ro(r.maxWait)||0,t):i,h="trailing"in r?!!r.trailing:h),b.cancel=function(){void 0!==a&&clearTimeout(a),d=0,n=l=o=a=void 0},b.flush=function(){return void 0===a?s:p(Ho())},b},Wo=Po,Vo=io;var No=function(e,t,r){var n=!0,o=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return Vo(r)&&(n="leading"in r?!!r.leading:n,o="trailing"in r?!!r.trailing:o),Wo(e,t,{leading:n,maxWait:t,trailing:o})},Yo=function(e,t,r,n){switch(t){case"debounce":return Po(e,r,n);case"throttle":return No(e,r,n);default:return e}},Uo=function(e){return"function"==typeof e},qo=function(){return"undefined"==typeof window},Go=function(e){return e instanceof Element||e instanceof HTMLDocument},Zo=function(e,t,r,n){return function(o){var i=o.width,s=o.height;t((function(t){return t.width===i&&t.height===s||t.width===i&&!n||t.height===s&&!r?t:(e&&Uo(e)&&e(i,s),{width:i,height:s})}))}};!function(e){function t(t){var r=e.call(this,t)||this;r.cancelHandler=function(){r.resizeHandler&&r.resizeHandler.cancel&&(r.resizeHandler.cancel(),r.resizeHandler=null)},r.attachObserver=function(){var e=r.props,t=e.targetRef,n=e.observerOptions;if(!qo()){t&&t.current&&(r.targetRef.current=t.current);var o=r.getElement();o&&(r.observableElement&&r.observableElement===o||(r.observableElement=o,r.resizeObserver.observe(o,n)))}},r.getElement=function(){var e=r.props,t=e.querySelector,n=e.targetDomEl;if(qo())return null;if(t)return document.querySelector(t);if(n&&Go(n))return n;if(r.targetRef&&Go(r.targetRef.current))return r.targetRef.current;var o=k(r);if(!o)return null;switch(r.getRenderType()){case"renderProp":case"childFunction":case"child":case"childArray":return o;default:return o.parentElement}},r.createResizeHandler=function(e){var t=r.props,n=t.handleWidth,o=void 0===n||n,i=t.handleHeight,s=void 0===i||i,a=t.onResize;if(o||s){var l=Zo(a,r.setState.bind(r),o,s);e.forEach((function(e){var t=e&&e.contentRect||{},n=t.width,o=t.height;!r.skipOnMount&&!qo()&&l({width:n,height:o}),r.skipOnMount=!1}))}},r.getRenderType=function(){var e=r.props,t=e.render,n=e.children;return Uo(t)?"renderProp":Uo(n)?"childFunction":l(n)?"child":Array.isArray(n)?"childArray":"parent"};var n=t.skipOnMount,o=t.refreshMode,i=t.refreshRate,s=void 0===i?1e3:i,a=t.refreshOptions;return r.state={width:void 0,height:void 0},r.skipOnMount=n,r.targetRef=d(),r.observableElement=null,qo()||(r.resizeHandler=Yo(r.createResizeHandler,o,s,a),r.resizeObserver=new window.ResizeObserver(r.resizeHandler)),r}(function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");function r(){this.constructor=e}ro(e,t),e.prototype=null===t?Object.create(t):(r.prototype=t.prototype,new r)})(t,e),t.prototype.componentDidMount=function(){this.attachObserver()},t.prototype.componentDidUpdate=function(){this.attachObserver()},t.prototype.componentWillUnmount=function(){qo()||(this.observableElement=null,this.resizeObserver.disconnect(),this.cancelHandler())},t.prototype.render=function(){var e,t=this.props,r=t.render,o=t.children,i=t.nodeType,s=void 0===i?"div":i,a=this.state,l={width:a.width,height:a.height,targetRef:this.targetRef};switch(this.getRenderType()){case"renderProp":return r&&r(l);case"childFunction":return(e=o)(l);case"child":if((e=o).type&&"string"==typeof e.type){var d=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(n=Object.getOwnPropertySymbols(e);o<n.length;o++)t.indexOf(n[o])<0&&Object.prototype.propertyIsEnumerable.call(e,n[o])&&(r[n[o]]=e[n[o]])}return r}(l,["targetRef"]);return c(e,d)}return c(e,l);case"childArray":return(e=o).map((function(e){return!!e&&c(e,l)}));default:return n.createElement(s,null)}}}(u);var Qo=qo()?s:h;function Xo(e){void 0===e&&(e={});var t=e.skipOnMount,r=void 0!==t&&t,n=e.refreshMode,o=e.refreshRate,s=void 0===o?1e3:o,l=e.refreshOptions,d=e.handleWidth,c=void 0===d||d,u=e.handleHeight,h=void 0===u||u,g=e.targetRef,m=e.observerOptions,f=e.onResize,p=i(r),b=i(null),v=null!=g?g:b,y=i(),x=a({width:void 0,height:void 0}),w=x[0],$=x[1];return Qo((function(){if(!qo()){var e=Zo(f,$,c,h);y.current=Yo((function(t){(c||h)&&t.forEach((function(t){var r=t&&t.contentRect||{},n=r.width,o=r.height;!p.current&&!qo()&&e({width:n,height:o}),p.current=!1}))}),n,s,l);var t=new window.ResizeObserver(y.current);return v.current&&t.observe(v.current,m),function(){t.disconnect();var e=y.current;e&&e.cancel&&e.cancel()}}}),[n,s,l,c,h,f,m,v.current]),no({ref:v},w)}var Ko=Object.defineProperty,Jo={};((e,t)=>{for(var r in t)Ko(e,r,{get:t[r],enumerable:!0})})(Jo,{assign:()=>Mi,colors:()=>Ti,createStringInterpolator:()=>Si,skipAnimation:()=>Di,to:()=>Ei,willAdvance:()=>zi});var ei=pi(),ti=e=>hi(e,ei),ri=pi();ti.write=e=>hi(e,ri);var ni=pi();ti.onStart=e=>hi(e,ni);var oi=pi();ti.onFrame=e=>hi(e,oi);var ii=pi();ti.onFinish=e=>hi(e,ii);var si=[];ti.setTimeout=(e,t)=>{const r=ti.now()+t,n=()=>{const e=si.findIndex((e=>e.cancel==n));~e&&si.splice(e,1),ci-=~e?1:0},o={time:r,handler:e,cancel:n};return si.splice(ai(r),0,o),ci+=1,gi(),o};var ai=e=>~(~si.findIndex((t=>t.time>e))||~si.length);ti.cancel=e=>{ni.delete(e),oi.delete(e),ii.delete(e),ei.delete(e),ri.delete(e)},ti.sync=e=>{ui=!0,ti.batchedUpdates(e),ui=!1},ti.throttle=e=>{let t;function r(){try{e(...t)}finally{t=null}}function n(...e){t=e,ti.onStart(r)}return n.handler=e,n.cancel=()=>{ni.delete(r),t=null},n};var li="undefined"!=typeof window?window.requestAnimationFrame:()=>{};ti.use=e=>li=e,ti.now="undefined"!=typeof performance?()=>performance.now():Date.now,ti.batchedUpdates=e=>e(),ti.catch=console.error,ti.frameLoop="always",ti.advance=()=>{"demand"!==ti.frameLoop?console.warn("Cannot call the manual advancement of rafz whilst frameLoop is not set as demand"):fi()};var di=-1,ci=0,ui=!1;function hi(e,t){ui?(t.delete(e),e(0)):(t.add(e),gi())}function gi(){di<0&&(di=0,"demand"!==ti.frameLoop&&li(mi))}function mi(){~di&&(li(mi),ti.batchedUpdates(fi))}function fi(){const e=di;di=ti.now();const t=ai(di);t&&(bi(si.splice(0,t),(e=>e.handler())),ci-=t),ci?(ni.flush(),ei.flush(e?Math.min(64,di-e):16.667),oi.flush(),ri.flush(),ii.flush()):di=-1}function pi(){let e=new Set,t=e;return{add(r){ci+=t!=e||e.has(r)?0:1,e.add(r)},delete:r=>(ci-=t==e&&e.has(r)?1:0,e.delete(r)),flush(r){t.size&&(e=new Set,ci-=t.size,bi(t,(t=>t(r)&&e.add(t))),ci+=e.size,t=e)}}}function bi(e,t){e.forEach((e=>{try{t(e)}catch(e){ti.catch(e)}}))}function vi(){}var yi={arr:Array.isArray,obj:e=>!!e&&"Object"===e.constructor.name,fun:e=>"function"==typeof e,str:e=>"string"==typeof e,num:e=>"number"==typeof e,und:e=>void 0===e};function xi(e,t){if(yi.arr(e)){if(!yi.arr(t)||e.length!==t.length)return!1;for(let r=0;r<e.length;r++)if(e[r]!==t[r])return!1;return!0}return e===t}var wi=(e,t)=>e.forEach(t);function $i(e,t,r){if(yi.arr(e))for(let n=0;n<e.length;n++)t.call(r,e[n],`${n}`);else for(const n in e)e.hasOwnProperty(n)&&t.call(r,e[n],n)}var Ci=e=>yi.und(e)?[]:yi.arr(e)?e:[e];function Fi(e,t){if(e.size){const r=Array.from(e);e.clear(),wi(r,t)}}var Si,Ei,ki=(e,...t)=>Fi(e,(e=>e(...t))),Ii=()=>"undefined"==typeof window||!window.navigator||/ServerSideRendering|^Deno\//.test(window.navigator.userAgent),Ti=null,Di=!1,zi=vi,Mi=e=>{e.to&&(Ei=e.to),e.now&&(ti.now=e.now),void 0!==e.colors&&(Ti=e.colors),null!=e.skipAnimation&&(Di=e.skipAnimation),e.createStringInterpolator&&(Si=e.createStringInterpolator),e.requestAnimationFrame&&ti.use(e.requestAnimationFrame),e.batchedUpdates&&(ti.batchedUpdates=e.batchedUpdates),e.willAdvance&&(zi=e.willAdvance),e.frameLoop&&(ti.frameLoop=e.frameLoop)},_i=new Set,Oi=[],Ai=[],Bi=0,Hi={get idle(){return!_i.size&&!Oi.length},start(e){Bi>e.priority?(_i.add(e),ti.onStart(Ri)):(ji(e),ti(Pi))},advance:Pi,sort(e){if(Bi)ti.onFrame((()=>Hi.sort(e)));else{const t=Oi.indexOf(e);~t&&(Oi.splice(t,1),Li(e))}},clear(){Oi=[],_i.clear()}};function Ri(){_i.forEach(ji),_i.clear(),ti(Pi)}function ji(e){Oi.includes(e)||Li(e)}function Li(e){Oi.splice(function(e,t){const r=e.findIndex(t);return r<0?e.length:r}(Oi,(t=>t.priority>e.priority)),0,e)}function Pi(e){const t=Ai;for(let r=0;r<Oi.length;r++){const n=Oi[r];Bi=n.priority,n.idle||(zi(n),n.advance(e),n.idle||t.push(n))}return Bi=0,(Ai=Oi).length=0,(Oi=t).length>0}var Wi="[-+]?\\d*\\.?\\d+",Vi=Wi+"%";function Ni(...e){return"\\(\\s*("+e.join(")\\s*,\\s*(")+")\\s*\\)"}var Yi=new RegExp("rgb"+Ni(Wi,Wi,Wi)),Ui=new RegExp("rgba"+Ni(Wi,Wi,Wi,Wi)),qi=new RegExp("hsl"+Ni(Wi,Vi,Vi)),Gi=new RegExp("hsla"+Ni(Wi,Vi,Vi,Wi)),Zi=/^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,Qi=/^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,Xi=/^#([0-9a-fA-F]{6})$/,Ki=/^#([0-9a-fA-F]{8})$/;function Ji(e,t,r){return r<0&&(r+=1),r>1&&(r-=1),r<1/6?e+6*(t-e)*r:r<.5?t:r<2/3?e+(t-e)*(2/3-r)*6:e}function es(e,t,r){const n=r<.5?r*(1+t):r+t-r*t,o=2*r-n,i=Ji(o,n,e+1/3),s=Ji(o,n,e),a=Ji(o,n,e-1/3);return Math.round(255*i)<<24|Math.round(255*s)<<16|Math.round(255*a)<<8}function ts(e){const t=parseInt(e,10);return t<0?0:t>255?255:t}function rs(e){return(parseFloat(e)%360+360)%360/360}function ns(e){const t=parseFloat(e);return t<0?0:t>1?255:Math.round(255*t)}function os(e){const t=parseFloat(e);return t<0?0:t>100?1:t/100}function is(e){let t=function(e){let t;return"number"==typeof e?e>>>0===e&&e>=0&&e<=4294967295?e:null:(t=Xi.exec(e))?parseInt(t[1]+"ff",16)>>>0:Ti&&void 0!==Ti[e]?Ti[e]:(t=Yi.exec(e))?(ts(t[1])<<24|ts(t[2])<<16|ts(t[3])<<8|255)>>>0:(t=Ui.exec(e))?(ts(t[1])<<24|ts(t[2])<<16|ts(t[3])<<8|ns(t[4]))>>>0:(t=Zi.exec(e))?parseInt(t[1]+t[1]+t[2]+t[2]+t[3]+t[3]+"ff",16)>>>0:(t=Ki.exec(e))?parseInt(t[1],16)>>>0:(t=Qi.exec(e))?parseInt(t[1]+t[1]+t[2]+t[2]+t[3]+t[3]+t[4]+t[4],16)>>>0:(t=qi.exec(e))?(255|es(rs(t[1]),os(t[2]),os(t[3])))>>>0:(t=Gi.exec(e))?(es(rs(t[1]),os(t[2]),os(t[3]))|ns(t[4]))>>>0:null}(e);if(null===t)return e;t=t||0;return`rgba(${(4278190080&t)>>>24}, ${(16711680&t)>>>16}, ${(65280&t)>>>8}, ${(255&t)/255})`}var ss=(e,t,r)=>{if(yi.fun(e))return e;if(yi.arr(e))return ss({range:e,output:t,extrapolate:r});if(yi.str(e.output[0]))return Si(e);const n=e,o=n.output,i=n.range||[0,1],s=n.extrapolateLeft||n.extrapolate||"extend",a=n.extrapolateRight||n.extrapolate||"extend",l=n.easing||(e=>e);return e=>{const t=function(e,t){for(var r=1;r<t.length-1&&!(t[r]>=e);++r);return r-1}(e,i);return function(e,t,r,n,o,i,s,a,l){let d=l?l(e):e;if(d<t){if("identity"===s)return d;"clamp"===s&&(d=t)}if(d>r){if("identity"===a)return d;"clamp"===a&&(d=r)}if(n===o)return n;if(t===r)return e<=t?n:o;t===-1/0?d=-d:r===1/0?d-=t:d=(d-t)/(r-t);d=i(d),n===-1/0?d=-d:o===1/0?d+=n:d=d*(o-n)+n;return d}(e,i[t],i[t+1],o[t],o[t+1],l,s,a,n.map)}};var as=1.70158,ls=1.525*as,ds=as+1,cs=2*Math.PI/3,us=2*Math.PI/4.5,hs=e=>{const t=7.5625,r=2.75;return e<1/r?t*e*e:e<2/r?t*(e-=1.5/r)*e+.75:e<2.5/r?t*(e-=2.25/r)*e+.9375:t*(e-=2.625/r)*e+.984375},gs={linear:e=>e,easeInQuad:e=>e*e,easeOutQuad:e=>1-(1-e)*(1-e),easeInOutQuad:e=>e<.5?2*e*e:1-Math.pow(-2*e+2,2)/2,easeInCubic:e=>e*e*e,easeOutCubic:e=>1-Math.pow(1-e,3),easeInOutCubic:e=>e<.5?4*e*e*e:1-Math.pow(-2*e+2,3)/2,easeInQuart:e=>e*e*e*e,easeOutQuart:e=>1-Math.pow(1-e,4),easeInOutQuart:e=>e<.5?8*e*e*e*e:1-Math.pow(-2*e+2,4)/2,easeInQuint:e=>e*e*e*e*e,easeOutQuint:e=>1-Math.pow(1-e,5),easeInOutQuint:e=>e<.5?16*e*e*e*e*e:1-Math.pow(-2*e+2,5)/2,easeInSine:e=>1-Math.cos(e*Math.PI/2),easeOutSine:e=>Math.sin(e*Math.PI/2),easeInOutSine:e=>-(Math.cos(Math.PI*e)-1)/2,easeInExpo:e=>0===e?0:Math.pow(2,10*e-10),easeOutExpo:e=>1===e?1:1-Math.pow(2,-10*e),easeInOutExpo:e=>0===e?0:1===e?1:e<.5?Math.pow(2,20*e-10)/2:(2-Math.pow(2,-20*e+10))/2,easeInCirc:e=>1-Math.sqrt(1-Math.pow(e,2)),easeOutCirc:e=>Math.sqrt(1-Math.pow(e-1,2)),easeInOutCirc:e=>e<.5?(1-Math.sqrt(1-Math.pow(2*e,2)))/2:(Math.sqrt(1-Math.pow(-2*e+2,2))+1)/2,easeInBack:e=>ds*e*e*e-as*e*e,easeOutBack:e=>1+ds*Math.pow(e-1,3)+as*Math.pow(e-1,2),easeInOutBack:e=>e<.5?Math.pow(2*e,2)*(7.189819*e-ls)/2:(Math.pow(2*e-2,2)*((ls+1)*(2*e-2)+ls)+2)/2,easeInElastic:e=>0===e?0:1===e?1:-Math.pow(2,10*e-10)*Math.sin((10*e-10.75)*cs),easeOutElastic:e=>0===e?0:1===e?1:Math.pow(2,-10*e)*Math.sin((10*e-.75)*cs)+1,easeInOutElastic:e=>0===e?0:1===e?1:e<.5?-Math.pow(2,20*e-10)*Math.sin((20*e-11.125)*us)/2:Math.pow(2,-20*e+10)*Math.sin((20*e-11.125)*us)/2+1,easeInBounce:e=>1-hs(1-e),easeOutBounce:hs,easeInOutBounce:e=>e<.5?(1-hs(1-2*e))/2:(1+hs(2*e-1))/2,steps:(e,t="end")=>r=>{const n=(r="end"===t?Math.min(r,.999):Math.max(r,.001))*e,o="end"===t?Math.floor(n):Math.ceil(n);return i=0,s=1,a=o/e,Math.min(Math.max(a,i),s);var i,s,a}},ms=Symbol.for("FluidValue.get"),fs=Symbol.for("FluidValue.observers"),ps=e=>Boolean(e&&e[ms]),bs=e=>e&&e[ms]?e[ms]():e,vs=e=>e[fs]||null;function ys(e,t){const r=e[fs];r&&r.forEach((e=>{!function(e,t){e.eventObserved?e.eventObserved(t):e(t)}(e,t)}))}var xs=class{constructor(e){if(!e&&!(e=this.get))throw Error("Unknown getter");ws(this,e)}},ws=(e,t)=>Ss(e,ms,t);function $s(e,t){if(e[ms]){let r=e[fs];r||Ss(e,fs,r=new Set),r.has(t)||(r.add(t),e.observerAdded&&e.observerAdded(r.size,t))}return t}function Cs(e,t){const r=e[fs];if(r&&r.has(t)){const n=r.size-1;n?r.delete(t):e[fs]=null,e.observerRemoved&&e.observerRemoved(n,t)}}var Fs,Ss=(e,t,r)=>Object.defineProperty(e,t,{value:r,writable:!0,configurable:!0}),Es=/[+\-]?(?:0|[1-9]\d*)(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,ks=/(#(?:[0-9a-f]{2}){2,4}|(#[0-9a-f]{3})|(rgb|hsl)a?\((-?\d+%?[,\s]+){2,3}\s*[\d\.]+%?\))/gi,Is=new RegExp(`(${Es.source})(%|[a-z]+)`,"i"),Ts=/rgba\(([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+)\)/gi,Ds=/var\((--[a-zA-Z0-9-_]+),? ?([a-zA-Z0-9 ()%#.,-]+)?\)/,zs=e=>{const[t,r]=Ms(e);if(!t||Ii())return e;const n=window.getComputedStyle(document.documentElement).getPropertyValue(t);if(n)return n.trim();if(r&&r.startsWith("--")){const t=window.getComputedStyle(document.documentElement).getPropertyValue(r);return t||e}return r&&Ds.test(r)?zs(r):r||e},Ms=e=>{const t=Ds.exec(e);if(!t)return[,];const[,r,n]=t;return[r,n]},_s=(e,t,r,n,o)=>`rgba(${Math.round(t)}, ${Math.round(r)}, ${Math.round(n)}, ${o})`,Os=e=>{Fs||(Fs=Ti?new RegExp(`(${Object.keys(Ti).join("|")})(?!\\w)`,"g"):/^\b$/);const t=e.output.map((e=>bs(e).replace(Ds,zs).replace(ks,is).replace(Fs,is))),r=t.map((e=>e.match(Es).map(Number))),n=r[0].map(((e,t)=>r.map((e=>{if(!(t in e))throw Error('The arity of each "output" value must be equal');return e[t]})))).map((t=>ss({...e,output:t})));return e=>{const r=!Is.test(t[0])&&t.find((e=>Is.test(e)))?.replace(Es,"");let o=0;return t[0].replace(Es,(()=>`${n[o++](e)}${r||""}`)).replace(Ts,_s)}},As="react-spring: ",Bs=e=>{const t=e;let r=!1;if("function"!=typeof t)throw new TypeError(`${As}once requires a function parameter`);return(...e)=>{r||(t(...e),r=!0)}},Hs=Bs(console.warn);var Rs=Bs(console.warn);function js(e){return yi.str(e)&&("#"==e[0]||/\d/.test(e)||!Ii()&&Ds.test(e)||e in(Ti||{}))}var Ls=Ii()?s:h,Ps=()=>{const e=i(!1);return Ls((()=>(e.current=!0,()=>{e.current=!1})),[]),e};function Ws(){const e=a()[1],t=Ps();return()=>{t.current&&e(Math.random())}}var Vs=e=>s(e,Ns),Ns=[];function Ys(e){const t=i();return s((()=>{t.current=e})),t.current}var Us=Symbol.for("Animated:node"),qs=e=>e&&e[Us],Gs=(e,t)=>((e,t,r)=>Object.defineProperty(e,t,{value:r,writable:!0,configurable:!0}))(e,Us,t),Zs=e=>e&&e[Us]&&e[Us].getPayload(),Qs=class{constructor(){Gs(this,this)}getPayload(){return this.payload||[]}},Xs=class extends Qs{constructor(e){super(),this._value=e,this.done=!0,this.durationProgress=0,yi.num(this._value)&&(this.lastPosition=this._value)}static create(e){return new Xs(e)}getPayload(){return[this]}getValue(){return this._value}setValue(e,t){return yi.num(e)&&(this.lastPosition=e,t&&(e=Math.round(e/t)*t,this.done&&(this.lastPosition=e))),this._value!==e&&(this._value=e,!0)}reset(){const{done:e}=this;this.done=!1,yi.num(this._value)&&(this.elapsedTime=0,this.durationProgress=0,this.lastPosition=this._value,e&&(this.lastVelocity=null),this.v0=null)}},Ks=class extends Xs{constructor(e){super(0),this._string=null,this._toString=ss({output:[e,e]})}static create(e){return new Ks(e)}getValue(){const e=this._string;return null==e?this._string=this._toString(this._value):e}setValue(e){if(yi.str(e)){if(e==this._string)return!1;this._string=e,this._value=1}else{if(!super.setValue(e))return!1;this._string=null}return!0}reset(e){e&&(this._toString=ss({output:[this.getValue(),e]})),this._value=0,super.reset()}},Js={dependencies:null},ea=class extends Qs{constructor(e){super(),this.source=e,this.setValue(e)}getValue(e){const t={};return $i(this.source,((r,n)=>{var o;(o=r)&&o[Us]===o?t[n]=r.getValue(e):ps(r)?t[n]=bs(r):e||(t[n]=r)})),t}setValue(e){this.source=e,this.payload=this._makePayload(e)}reset(){this.payload&&wi(this.payload,(e=>e.reset()))}_makePayload(e){if(e){const t=new Set;return $i(e,this._addToPayload,t),Array.from(t)}}_addToPayload(e){Js.dependencies&&ps(e)&&Js.dependencies.add(e);const t=Zs(e);t&&wi(t,(e=>this.add(e)))}},ta=class extends ea{constructor(e){super(e)}static create(e){return new ta(e)}getValue(){return this.source.map((e=>e.getValue()))}setValue(e){const t=this.getPayload();return e.length==t.length?t.map(((t,r)=>t.setValue(e[r]))).some(Boolean):(super.setValue(e.map(ra)),!0)}};function ra(e){return(js(e)?Ks:Xs).create(e)}function na(e){const t=qs(e);return t?t.constructor:yi.arr(e)?ta:js(e)?Ks:Xs}var oa=(e,t)=>{const r=!yi.fun(e)||e.prototype&&e.prototype.isReactComponent;return g(((o,a)=>{const l=i(null),d=r&&m((e=>{l.current=function(e,t){e&&(yi.fun(e)?e(t):e.current=t);return t}(a,e)}),[a]),[c,u]=function(e,t){const r=new Set;Js.dependencies=r,e.style&&(e={...e,style:t.createAnimatedStyle(e.style)});return e=new ea(e),Js.dependencies=null,[e,r]}(o,t),h=Ws(),g=()=>{const e=l.current;if(r&&!e)return;!1===(!!e&&t.applyAnimatedValues(e,c.getValue(!0)))&&h()},f=new ia(g,u),p=i();Ls((()=>(p.current=f,wi(u,(e=>$s(e,f))),()=>{p.current&&(wi(p.current.deps,(e=>Cs(e,p.current))),ti.cancel(p.current.update))}))),s(g,[]),Vs((()=>()=>{const e=p.current;wi(e.deps,(t=>Cs(t,e)))}));const b=t.getComponentProps(c.getValue());return n.createElement(e,{...b,ref:d})}))},ia=class{constructor(e,t){this.update=e,this.deps=t}eventObserved(e){"change"==e.type&&ti.write(this.update)}};var sa=Symbol.for("AnimatedComponent"),aa=e=>yi.str(e)?e:e&&yi.str(e.displayName)?e.displayName:yi.fun(e)&&e.name||null;function la(e,...t){return yi.fun(e)?e(...t):e}var da=(e,t)=>!0===e||!!(t&&e&&(yi.fun(e)?e(t):Ci(e).includes(t))),ca=(e,t)=>yi.obj(e)?t&&e[t]:e,ua=(e,t)=>!0===e.default?e[t]:e.default?e.default[t]:void 0,ha=e=>e,ga=(e,t=ha)=>{let r=ma;e.default&&!0!==e.default&&(e=e.default,r=Object.keys(e));const n={};for(const o of r){const r=t(e[o],o);yi.und(r)||(n[o]=r)}return n},ma=["config","onProps","onStart","onChange","onPause","onResume","onRest"],fa={config:1,from:1,to:1,ref:1,loop:1,reset:1,pause:1,cancel:1,reverse:1,immediate:1,default:1,delay:1,onProps:1,onStart:1,onChange:1,onPause:1,onResume:1,onRest:1,onResolve:1,items:1,trail:1,sort:1,expires:1,initial:1,enter:1,update:1,leave:1,children:1,onDestroyed:1,keys:1,callId:1,parentId:1};function pa(e){const t=function(e){const t={};let r=0;if($i(e,((e,n)=>{fa[n]||(t[n]=e,r++)})),r)return t}(e);if(t){const r={to:t};return $i(e,((e,n)=>n in t||(r[n]=e))),r}return{...e}}function ba(e){return e=bs(e),yi.arr(e)?e.map(ba):js(e)?Jo.createStringInterpolator({range:[0,1],output:[e,e]})(1):e}function va(e){return yi.fun(e)||yi.arr(e)&&yi.obj(e[0])}var ya={tension:170,friction:26,mass:1,damping:1,easing:gs.linear,clamp:!1},xa=class{constructor(){this.velocity=0,Object.assign(this,ya)}};function wa(e,t){if(yi.und(t.decay)){const r=!yi.und(t.tension)||!yi.und(t.friction);!r&&yi.und(t.frequency)&&yi.und(t.damping)&&yi.und(t.mass)||(e.duration=void 0,e.decay=void 0),r&&(e.frequency=void 0)}else e.duration=void 0}var $a=[],Ca=class{constructor(){this.changed=!1,this.values=$a,this.toValues=null,this.fromValues=$a,this.config=new xa,this.immediate=!1}};function Fa(e,{key:t,props:r,defaultProps:n,state:o,actions:i}){return new Promise(((s,a)=>{let l,d,c=da(r.cancel??n?.cancel,t);if(c)g();else{yi.und(r.pause)||(o.paused=da(r.pause,t));let e=n?.pause;!0!==e&&(e=o.paused||da(e,t)),l=la(r.delay||0,t),e?(o.resumeQueue.add(h),i.pause()):(i.resume(),h())}function u(){o.resumeQueue.add(h),o.timeouts.delete(d),d.cancel(),l=d.time-ti.now()}function h(){l>0&&!Jo.skipAnimation?(o.delayed=!0,d=ti.setTimeout(g,l),o.pauseQueue.add(u),o.timeouts.add(d)):g()}function g(){o.delayed&&(o.delayed=!1),o.pauseQueue.delete(u),o.timeouts.delete(d),e<=(o.cancelId||0)&&(c=!0);try{i.start({...r,callId:e,cancel:c},s)}catch(e){a(e)}}}))}var Sa=(e,t)=>1==t.length?t[0]:t.some((e=>e.cancelled))?Ia(e.get()):t.every((e=>e.noop))?Ea(e.get()):ka(e.get(),t.every((e=>e.finished))),Ea=e=>({value:e,noop:!0,finished:!0,cancelled:!1}),ka=(e,t,r=!1)=>({value:e,finished:t,cancelled:r}),Ia=e=>({value:e,cancelled:!0,finished:!1});function Ta(e,t,r,n){const{callId:o,parentId:i,onRest:s}=t,{asyncTo:a,promise:l}=r;return i||e!==a||t.reset?r.promise=(async()=>{r.asyncId=o,r.asyncTo=e;const d=ga(t,((e,t)=>"onRest"===t?void 0:e));let c,u;const h=new Promise(((e,t)=>(c=e,u=t))),g=e=>{const t=o<=(r.cancelId||0)&&Ia(n)||o!==r.asyncId&&ka(n,!1);if(t)throw e.result=t,u(e),e},m=(e,t)=>{const i=new za,s=new Ma;return(async()=>{if(Jo.skipAnimation)throw Da(r),s.result=ka(n,!1),u(s),s;g(i);const a=yi.obj(e)?{...e}:{...t,to:e};a.parentId=o,$i(d,((e,t)=>{yi.und(a[t])&&(a[t]=e)}));const l=await n.start(a);return g(i),r.paused&&await new Promise((e=>{r.resumeQueue.add(e)})),l})()};let f;if(Jo.skipAnimation)return Da(r),ka(n,!1);try{let t;t=yi.arr(e)?(async e=>{for(const t of e)await m(t)})(e):Promise.resolve(e(m,n.stop.bind(n))),await Promise.all([t.then(c),h]),f=ka(n.get(),!0,!1)}catch(e){if(e instanceof za)f=e.result;else{if(!(e instanceof Ma))throw e;f=e.result}}finally{o==r.asyncId&&(r.asyncId=i,r.asyncTo=i?a:void 0,r.promise=i?l:void 0)}return yi.fun(s)&&ti.batchedUpdates((()=>{s(f,n,n.item)})),f})():l}function Da(e,t){Fi(e.timeouts,(e=>e.cancel())),e.pauseQueue.clear(),e.resumeQueue.clear(),e.asyncId=e.asyncTo=e.promise=void 0,t&&(e.cancelId=t)}var za=class extends Error{constructor(){super("An async animation has been interrupted. You see this error because you forgot to use `await` or `.catch(...)` on its returned promise.")}},Ma=class extends Error{constructor(){super("SkipAnimationSignal")}},_a=e=>e instanceof Aa,Oa=1,Aa=class extends xs{constructor(){super(...arguments),this.id=Oa++,this._priority=0}get priority(){return this._priority}set priority(e){this._priority!=e&&(this._priority=e,this._onPriorityChange(e))}get(){const e=qs(this);return e&&e.getValue()}to(...e){return Jo.to(this,e)}interpolate(...e){return Hs(`${As}The "interpolate" function is deprecated in v9 (use "to" instead)`),Jo.to(this,e)}toJSON(){return this.get()}observerAdded(e){1==e&&this._attach()}observerRemoved(e){0==e&&this._detach()}_attach(){}_detach(){}_onChange(e,t=!1){ys(this,{type:"change",parent:this,value:e,idle:t})}_onPriorityChange(e){this.idle||Hi.sort(this),ys(this,{type:"priority",parent:this,priority:e})}},Ba=Symbol.for("SpringPhase"),Ha=e=>(1&e[Ba])>0,Ra=e=>(2&e[Ba])>0,ja=e=>(4&e[Ba])>0,La=(e,t)=>t?e[Ba]|=3:e[Ba]&=-3,Pa=(e,t)=>t?e[Ba]|=4:e[Ba]&=-5,Wa=class extends Aa{constructor(e,t){if(super(),this.animation=new Ca,this.defaultProps={},this._state={paused:!1,delayed:!1,pauseQueue:new Set,resumeQueue:new Set,timeouts:new Set},this._pendingCalls=new Set,this._lastCallId=0,this._lastToId=0,this._memoizedDuration=0,!yi.und(e)||!yi.und(t)){const r=yi.obj(e)?{...e}:{...t,from:e};yi.und(r.default)&&(r.default=!0),this.start(r)}}get idle(){return!(Ra(this)||this._state.asyncTo)||ja(this)}get goal(){return bs(this.animation.to)}get velocity(){const e=qs(this);return e instanceof Xs?e.lastVelocity||0:e.getPayload().map((e=>e.lastVelocity||0))}get hasAnimated(){return Ha(this)}get isAnimating(){return Ra(this)}get isPaused(){return ja(this)}get isDelayed(){return this._state.delayed}advance(e){let t=!0,r=!1;const n=this.animation;let{toValues:o}=n;const{config:i}=n,s=Zs(n.to);!s&&ps(n.to)&&(o=Ci(bs(n.to))),n.values.forEach(((a,l)=>{if(a.done)return;const d=a.constructor==Ks?1:s?s[l].lastPosition:o[l];let c=n.immediate,u=d;if(!c){if(u=a.lastPosition,i.tension<=0)return void(a.done=!0);let t=a.elapsedTime+=e;const r=n.fromValues[l],o=null!=a.v0?a.v0:a.v0=yi.arr(i.velocity)?i.velocity[l]:i.velocity;let s;const h=i.precision||(r==d?.005:Math.min(1,.001*Math.abs(d-r)));if(yi.und(i.duration))if(i.decay){const e=!0===i.decay?.998:i.decay,n=Math.exp(-(1-e)*t);u=r+o/(1-e)*(1-n),c=Math.abs(a.lastPosition-u)<=h,s=o*n}else{s=null==a.lastVelocity?o:a.lastVelocity;const t=i.restVelocity||h/10,n=i.clamp?0:i.bounce,l=!yi.und(n),g=r==d?a.v0>0:r<d;let m,f=!1;const p=1,b=Math.ceil(e/p);for(let e=0;e<b&&(m=Math.abs(s)>t,m||(c=Math.abs(d-u)<=h,!c));++e){l&&(f=u==d||u>d==g,f&&(s=-s*n,u=d));s+=(1e-6*-i.tension*(u-d)+.001*-i.friction*s)/i.mass*p,u+=s*p}}else{let n=1;i.duration>0&&(this._memoizedDuration!==i.duration&&(this._memoizedDuration=i.duration,a.durationProgress>0&&(a.elapsedTime=i.duration*a.durationProgress,t=a.elapsedTime+=e)),n=(i.progress||0)+t/this._memoizedDuration,n=n>1?1:n<0?0:n,a.durationProgress=n),u=r+i.easing(n)*(d-r),s=(u-a.lastPosition)/e,c=1==n}a.lastVelocity=s,Number.isNaN(u)&&(console.warn("Got NaN while animating:",this),c=!0)}s&&!s[l].done&&(c=!1),c?a.done=!0:t=!1,a.setValue(u,i.round)&&(r=!0)}));const a=qs(this),l=a.getValue();if(t){const e=bs(n.to);l===e&&!r||i.decay?r&&i.decay&&this._onChange(l):(a.setValue(e),this._onChange(e)),this._stop()}else r&&this._onChange(l)}set(e){return ti.batchedUpdates((()=>{this._stop(),this._focus(e),this._set(e)})),this}pause(){this._update({pause:!0})}resume(){this._update({pause:!1})}finish(){if(Ra(this)){const{to:e,config:t}=this.animation;ti.batchedUpdates((()=>{this._onStart(),t.decay||this._set(e,!1),this._stop()}))}return this}update(e){return(this.queue||(this.queue=[])).push(e),this}start(e,t){let r;return yi.und(e)?(r=this.queue||[],this.queue=[]):r=[yi.obj(e)?e:{...t,to:e}],Promise.all(r.map((e=>this._update(e)))).then((e=>Sa(this,e)))}stop(e){const{to:t}=this.animation;return this._focus(this.get()),Da(this._state,e&&this._lastCallId),ti.batchedUpdates((()=>this._stop(t,e))),this}reset(){this._update({reset:!0})}eventObserved(e){"change"==e.type?this._start():"priority"==e.type&&(this.priority=e.priority+1)}_prepareNode(e){const t=this.key||"";let{to:r,from:n}=e;r=yi.obj(r)?r[t]:r,(null==r||va(r))&&(r=void 0),n=yi.obj(n)?n[t]:n,null==n&&(n=void 0);const o={to:r,from:n};return Ha(this)||(e.reverse&&([r,n]=[n,r]),n=bs(n),yi.und(n)?qs(this)||this._set(r):this._set(n)),o}_update({...e},t){const{key:r,defaultProps:n}=this;e.default&&Object.assign(n,ga(e,((e,t)=>/^on/.test(t)?ca(e,r):e))),Za(this,e,"onProps"),Qa(this,"onProps",e,this);const o=this._prepareNode(e);if(Object.isFrozen(this))throw Error("Cannot animate a `SpringValue` object that is frozen. Did you forget to pass your component to `animated(...)` before animating its props?");const i=this._state;return Fa(++this._lastCallId,{key:r,props:e,defaultProps:n,state:i,actions:{pause:()=>{ja(this)||(Pa(this,!0),ki(i.pauseQueue),Qa(this,"onPause",ka(this,Va(this,this.animation.to)),this))},resume:()=>{ja(this)&&(Pa(this,!1),Ra(this)&&this._resume(),ki(i.resumeQueue),Qa(this,"onResume",ka(this,Va(this,this.animation.to)),this))},start:this._merge.bind(this,o)}}).then((r=>{if(e.loop&&r.finished&&(!t||!r.noop)){const t=Na(e);if(t)return this._update(t,!0)}return r}))}_merge(e,t,r){if(t.cancel)return this.stop(!0),r(Ia(this));const n=!yi.und(e.to),o=!yi.und(e.from);if(n||o){if(!(t.callId>this._lastToId))return r(Ia(this));this._lastToId=t.callId}const{key:i,defaultProps:s,animation:a}=this,{to:l,from:d}=a;let{to:c=l,from:u=d}=e;!o||n||t.default&&!yi.und(c)||(c=u),t.reverse&&([c,u]=[u,c]);const h=!xi(u,d);h&&(a.from=u),u=bs(u);const g=!xi(c,l);g&&this._focus(c);const m=va(t.to),{config:f}=a,{decay:p,velocity:b}=f;(n||o)&&(f.velocity=0),t.config&&!m&&function(e,t,r){r&&(wa(r={...r},t),t={...r,...t}),wa(e,t),Object.assign(e,t);for(const t in ya)null==e[t]&&(e[t]=ya[t]);let{frequency:n,damping:o}=e;const{mass:i}=e;yi.und(n)||(n<.01&&(n=.01),o<0&&(o=0),e.tension=Math.pow(2*Math.PI/n,2)*i,e.friction=4*Math.PI*o*i/n)}(f,la(t.config,i),t.config!==s.config?la(s.config,i):void 0);let v=qs(this);if(!v||yi.und(c))return r(ka(this,!0));const y=yi.und(t.reset)?o&&!t.default:!yi.und(u)&&da(t.reset,i),x=y?u:this.get(),w=ba(c),$=yi.num(w)||yi.arr(w)||js(w),C=!m&&(!$||da(s.immediate||t.immediate,i));if(g){const e=na(c);if(e!==v.constructor){if(!C)throw Error(`Cannot animate between ${v.constructor.name} and ${e.name}, as the "to" prop suggests`);v=this._set(w)}}const F=v.constructor;let S=ps(c),E=!1;if(!S){const e=y||!Ha(this)&&h;(g||e)&&(E=xi(ba(x),w),S=!E),(xi(a.immediate,C)||C)&&xi(f.decay,p)&&xi(f.velocity,b)||(S=!0)}if(E&&Ra(this)&&(a.changed&&!y?S=!0:S||this._stop(l)),!m&&((S||ps(l))&&(a.values=v.getPayload(),a.toValues=ps(c)?null:F==Ks?[1]:Ci(w)),a.immediate!=C&&(a.immediate=C,C||y||this._set(l)),S)){const{onRest:e}=a;wi(Ga,(e=>Za(this,t,e)));const n=ka(this,Va(this,l));ki(this._pendingCalls,n),this._pendingCalls.add(r),a.changed&&ti.batchedUpdates((()=>{a.changed=!y,e?.(n,this),y?la(s.onRest,n):a.onStart?.(n,this)}))}y&&this._set(x),m?r(Ta(t.to,t,this._state,this)):S?this._start():Ra(this)&&!g?this._pendingCalls.add(r):r(Ea(x))}_focus(e){const t=this.animation;e!==t.to&&(vs(this)&&this._detach(),t.to=e,vs(this)&&this._attach())}_attach(){let e=0;const{to:t}=this.animation;ps(t)&&($s(t,this),_a(t)&&(e=t.priority+1)),this.priority=e}_detach(){const{to:e}=this.animation;ps(e)&&Cs(e,this)}_set(e,t=!0){const r=bs(e);if(!yi.und(r)){const e=qs(this);if(!e||!xi(r,e.getValue())){const n=na(r);e&&e.constructor==n?e.setValue(r):Gs(this,n.create(r)),e&&ti.batchedUpdates((()=>{this._onChange(r,t)}))}}return qs(this)}_onStart(){const e=this.animation;e.changed||(e.changed=!0,Qa(this,"onStart",ka(this,Va(this,e.to)),this))}_onChange(e,t){t||(this._onStart(),la(this.animation.onChange,e,this)),la(this.defaultProps.onChange,e,this),super._onChange(e,t)}_start(){const e=this.animation;qs(this).reset(bs(e.to)),e.immediate||(e.fromValues=e.values.map((e=>e.lastPosition))),Ra(this)||(La(this,!0),ja(this)||this._resume())}_resume(){Jo.skipAnimation?this.finish():Hi.start(this)}_stop(e,t){if(Ra(this)){La(this,!1);const r=this.animation;wi(r.values,(e=>{e.done=!0})),r.toValues&&(r.onChange=r.onPause=r.onResume=void 0),ys(this,{type:"idle",parent:this});const n=t?Ia(this.get()):ka(this.get(),Va(this,e??r.to));ki(this._pendingCalls,n),r.changed&&(r.changed=!1,Qa(this,"onRest",n,this))}}};function Va(e,t){const r=ba(t);return xi(ba(e.get()),r)}function Na(e,t=e.loop,r=e.to){const n=la(t);if(n){const o=!0!==n&&pa(n),i=(o||e).reverse,s=!o||o.reset;return Ya({...e,loop:t,default:!1,pause:void 0,to:!i||va(r)?r:void 0,from:s?e.from:void 0,reset:s,...o})}}function Ya(e){const{to:t,from:r}=e=pa(e),n=new Set;return yi.obj(t)&&qa(t,n),yi.obj(r)&&qa(r,n),e.keys=n.size?Array.from(n):null,e}function Ua(e){const t=Ya(e);return yi.und(t.default)&&(t.default=ga(t)),t}function qa(e,t){$i(e,((e,r)=>null!=e&&t.add(r)))}var Ga=["onStart","onRest","onChange","onPause","onResume"];function Za(e,t,r){e.animation[r]=t[r]!==ua(t,r)?ca(t[r],e.key):void 0}function Qa(e,t,...r){e.animation[t]?.(...r),e.defaultProps[t]?.(...r)}var Xa=["onStart","onChange","onRest"],Ka=1,Ja=class{constructor(e,t){this.id=Ka++,this.springs={},this.queue=[],this._lastAsyncId=0,this._active=new Set,this._changed=new Set,this._started=!1,this._state={paused:!1,pauseQueue:new Set,resumeQueue:new Set,timeouts:new Set},this._events={onStart:new Map,onChange:new Map,onRest:new Map},this._onFrame=this._onFrame.bind(this),t&&(this._flush=t),e&&this.start({default:!0,...e})}get idle(){return!this._state.asyncTo&&Object.values(this.springs).every((e=>e.idle&&!e.isDelayed&&!e.isPaused))}get item(){return this._item}set item(e){this._item=e}get(){const e={};return this.each(((t,r)=>e[r]=t.get())),e}set(e){for(const t in e){const r=e[t];yi.und(r)||this.springs[t].set(r)}}update(e){return e&&this.queue.push(Ya(e)),this}start(e){let{queue:t}=this;return e?t=Ci(e).map(Ya):this.queue=[],this._flush?this._flush(this,t):(sl(this,t),el(this,t))}stop(e,t){if(e!==!!e&&(t=e),t){const r=this.springs;wi(Ci(t),(t=>r[t].stop(!!e)))}else Da(this._state,this._lastAsyncId),this.each((t=>t.stop(!!e)));return this}pause(e){if(yi.und(e))this.start({pause:!0});else{const t=this.springs;wi(Ci(e),(e=>t[e].pause()))}return this}resume(e){if(yi.und(e))this.start({pause:!1});else{const t=this.springs;wi(Ci(e),(e=>t[e].resume()))}return this}each(e){$i(this.springs,e)}_onFrame(){const{onStart:e,onChange:t,onRest:r}=this._events,n=this._active.size>0,o=this._changed.size>0;(n&&!this._started||o&&!this._started)&&(this._started=!0,Fi(e,(([e,t])=>{t.value=this.get(),e(t,this,this._item)})));const i=!n&&this._started,s=o||i&&r.size?this.get():null;o&&t.size&&Fi(t,(([e,t])=>{t.value=s,e(t,this,this._item)})),i&&(this._started=!1,Fi(r,(([e,t])=>{t.value=s,e(t,this,this._item)})))}eventObserved(e){if("change"==e.type)this._changed.add(e.parent),e.idle||this._active.add(e.parent);else{if("idle"!=e.type)return;this._active.delete(e.parent)}ti.onFrame(this._onFrame)}};function el(e,t){return Promise.all(t.map((t=>tl(e,t)))).then((t=>Sa(e,t)))}async function tl(e,t,r){const{keys:n,to:o,from:i,loop:s,onRest:a,onResolve:l}=t,d=yi.obj(t.default)&&t.default;s&&(t.loop=!1),!1===o&&(t.to=null),!1===i&&(t.from=null);const c=yi.arr(o)||yi.fun(o)?o:void 0;c?(t.to=void 0,t.onRest=void 0,d&&(d.onRest=void 0)):wi(Xa,(r=>{const n=t[r];if(yi.fun(n)){const o=e._events[r];t[r]=({finished:e,cancelled:t})=>{const r=o.get(n);r?(e||(r.finished=!1),t&&(r.cancelled=!0)):o.set(n,{value:null,finished:e||!1,cancelled:t||!1})},d&&(d[r]=t[r])}}));const u=e._state;t.pause===!u.paused?(u.paused=t.pause,ki(t.pause?u.pauseQueue:u.resumeQueue)):u.paused&&(t.pause=!0);const h=(n||Object.keys(e.springs)).map((r=>e.springs[r].start(t))),g=!0===t.cancel||!0===ua(t,"cancel");(c||g&&u.asyncId)&&h.push(Fa(++e._lastAsyncId,{props:t,state:u,actions:{pause:vi,resume:vi,start(t,r){g?(Da(u,e._lastAsyncId),r(Ia(e))):(t.onRest=a,r(Ta(c,t,u,e)))}}})),u.paused&&await new Promise((e=>{u.resumeQueue.add(e)}));const m=Sa(e,await Promise.all(h));if(s&&m.finished&&(!r||!m.noop)){const r=Na(t,s,o);if(r)return sl(e,[r]),tl(e,r,!0)}return l&&ti.batchedUpdates((()=>l(m,e,e.item))),m}function rl(e,t){const r={...e.springs};return t&&wi(Ci(t),(e=>{yi.und(e.keys)&&(e=Ya(e)),yi.obj(e.to)||(e={...e,to:void 0}),il(r,e,(e=>ol(e)))})),nl(e,r),r}function nl(e,t){$i(t,((t,r)=>{e.springs[r]||(e.springs[r]=t,$s(t,e))}))}function ol(e,t){const r=new Wa;return r.key=e,t&&$s(r,t),r}function il(e,t,r){t.keys&&wi(t.keys,(n=>{(e[n]||(e[n]=r(n)))._prepareNode(t)}))}function sl(e,t){wi(t,(t=>{il(e.springs,t,(t=>ol(t,e)))}))}var al,ll,dl=({children:e,...t})=>{const r=f(cl),o=t.pause||!!r.pause,l=t.immediate||!!r.immediate;t=function(e,t){const[r]=a((()=>({inputs:t,result:e()}))),n=i(),o=n.current;let l=o;l?Boolean(t&&l.inputs&&function(e,t){if(e.length!==t.length)return!1;for(let r=0;r<e.length;r++)if(e[r]!==t[r])return!1;return!0}(t,l.inputs))||(l={inputs:t,result:e()}):l=r;return s((()=>{n.current=l,o==r&&(r.inputs=r.result=void 0)}),[l]),l.result}((()=>({pause:o,immediate:l})),[o,l]);const{Provider:d}=cl;return n.createElement(d,{value:t},e)},cl=(al=dl,ll={},Object.assign(al,n.createContext(ll)),al.Provider._context=al,al.Consumer._context=al,al);dl.Provider=cl.Provider,dl.Consumer=cl.Consumer;var ul=()=>{const e=[],t=function(t){Rs(`${As}Directly calling start instead of using the api object is deprecated in v9 (use ".start" instead), this will be removed in later 0.X.0 versions`);const n=[];return wi(e,((e,o)=>{if(yi.und(t))n.push(e.start());else{const i=r(t,e,o);i&&n.push(e.start(i))}})),n};t.current=e,t.add=function(t){e.includes(t)||e.push(t)},t.delete=function(t){const r=e.indexOf(t);~r&&e.splice(r,1)},t.pause=function(){return wi(e,(e=>e.pause(...arguments))),this},t.resume=function(){return wi(e,(e=>e.resume(...arguments))),this},t.set=function(t){wi(e,((e,r)=>{const n=yi.fun(t)?t(r,e):t;n&&e.set(n)}))},t.start=function(t){const r=[];return wi(e,((e,n)=>{if(yi.und(t))r.push(e.start());else{const o=this._getProps(t,e,n);o&&r.push(e.start(o))}})),r},t.stop=function(){return wi(e,(e=>e.stop(...arguments))),this},t.update=function(t){return wi(e,((e,r)=>e.update(this._getProps(t,e,r)))),this};const r=function(e,t,r){return yi.fun(e)?e(r,t):e};return t._getProps=r,t};function hl(e,t){const r=yi.fun(e),[[n],o]=function(e,t,r){const n=yi.fun(t)&&t;n&&!r&&(r=[]);const o=p((()=>n||3==arguments.length?ul():void 0),[]),s=i(0),a=Ws(),l=p((()=>({ctrls:[],queue:[],flush(e,t){const r=rl(e,t),n=s.current>0&&!l.queue.length&&!Object.keys(r).some((t=>!e.springs[t]));return n?el(e,t):new Promise((n=>{nl(e,r),l.queue.push((()=>{n(el(e,t))})),a()}))}})),[]),d=i([...l.ctrls]),c=[],u=Ys(e)||0;function h(e,r){for(let o=e;o<r;o++){const e=d.current[o]||(d.current[o]=new Ja(null,l.flush)),r=n?n(o,e):t[o];r&&(c[o]=Ua(r))}}p((()=>{wi(d.current.slice(e,u),(e=>{!function(e,t){e.ref?.delete(e),t?.delete(e)}(e,o),e.stop(!0)})),d.current.length=e,h(u,e)}),[e]),p((()=>{h(0,Math.min(u,e))}),r);const g=d.current.map(((e,t)=>rl(e,c[t]))),m=f(dl),b=Ys(m),v=m!==b&&function(e){for(const t in e)return!0;return!1}(m);Ls((()=>{s.current++,l.ctrls=d.current;const{queue:e}=l;e.length&&(l.queue=[],wi(e,(e=>e()))),wi(d.current,((e,t)=>{o?.add(e),v&&e.start({default:m});const r=c[t];r&&(function(e,t){t&&e.ref!==t&&(e.ref?.delete(e),t.add(e),e.ref=t)}(e,r.ref),e.ref?e.queue.push(r):e.start(r))}))})),Vs((()=>()=>{wi(l.ctrls,(e=>e.stop(!0)))}));const y=g.map((e=>({...e})));return o?[y,o]:y}(1,r?e:[e],r?t||[]:t);return r||2==arguments.length?[n,o]:n}var gl=class extends Aa{constructor(e,t){super(),this.source=e,this.idle=!0,this._active=new Set,this.calc=ss(...t);const r=this._get(),n=na(r);Gs(this,n.create(r))}advance(e){const t=this._get();xi(t,this.get())||(qs(this).setValue(t),this._onChange(t,this.idle)),!this.idle&&fl(this._active)&&pl(this)}_get(){const e=yi.arr(this.source)?this.source.map(bs):Ci(bs(this.source));return this.calc(...e)}_start(){this.idle&&!fl(this._active)&&(this.idle=!1,wi(Zs(this),(e=>{e.done=!1})),Jo.skipAnimation?(ti.batchedUpdates((()=>this.advance())),pl(this)):Hi.start(this))}_attach(){let e=1;wi(Ci(this.source),(t=>{ps(t)&&$s(t,this),_a(t)&&(t.idle||this._active.add(t),e=Math.max(e,t.priority+1))})),this.priority=e,this._start()}_detach(){wi(Ci(this.source),(e=>{ps(e)&&Cs(e,this)})),this._active.clear(),pl(this)}eventObserved(e){"change"==e.type?e.idle?this.advance():(this._active.add(e.parent),this._start()):"idle"==e.type?this._active.delete(e.parent):"priority"==e.type&&(this.priority=Ci(this.source).reduce(((e,t)=>Math.max(e,(_a(t)?t.priority:0)+1)),0))}};function ml(e){return!1!==e.idle}function fl(e){return!e.size||Array.from(e).every(ml)}function pl(e){e.idle||(e.idle=!0,wi(Zs(e),(e=>{e.done=!0})),ys(e,{type:"idle",parent:e}))}Jo.assign({createStringInterpolator:Os,to:(e,t)=>new gl(e,t)});var bl=/^--/;function vl(e,t){return null==t||"boolean"==typeof t||""===t?"":"number"!=typeof t||0===t||bl.test(e)||xl.hasOwnProperty(e)&&xl[e]?(""+t).trim():t+"px"}var yl={};var xl={animationIterationCount:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},wl=["Webkit","Ms","Moz","O"];xl=Object.keys(xl).reduce(((e,t)=>(wl.forEach((r=>e[((e,t)=>e+t.charAt(0).toUpperCase()+t.substring(1))(r,t)]=e[t])),e)),xl);var $l=/^(matrix|translate|scale|rotate|skew)/,Cl=/^(translate)/,Fl=/^(rotate|skew)/,Sl=(e,t)=>yi.num(e)&&0!==e?e+t:e,El=(e,t)=>yi.arr(e)?e.every((e=>El(e,t))):yi.num(e)?e===t:parseFloat(e)===t,kl=class extends ea{constructor({x:e,y:t,z:r,...n}){const o=[],i=[];(e||t||r)&&(o.push([e||0,t||0,r||0]),i.push((e=>[`translate3d(${e.map((e=>Sl(e,"px"))).join(",")})`,El(e,0)]))),$i(n,((e,t)=>{if("transform"===t)o.push([e||""]),i.push((e=>[e,""===e]));else if($l.test(t)){if(delete n[t],yi.und(e))return;const r=Cl.test(t)?"px":Fl.test(t)?"deg":"";o.push(Ci(e)),i.push("rotate3d"===t?([e,t,n,o])=>[`rotate3d(${e},${t},${n},${Sl(o,r)})`,El(o,0)]:e=>[`${t}(${e.map((e=>Sl(e,r))).join(",")})`,El(e,t.startsWith("scale")?1:0)])}})),o.length&&(n.transform=new Il(o,i)),super(n)}},Il=class extends xs{constructor(e,t){super(),this.inputs=e,this.transforms=t,this._value=null}get(){return this._value||(this._value=this._get())}_get(){let e="",t=!0;return wi(this.inputs,((r,n)=>{const o=bs(r[0]),[i,s]=this.transforms[n](yi.arr(o)?o:r.map(bs));e+=" "+i,t=t&&s})),t?"none":e}observerAdded(e){1==e&&wi(this.inputs,(e=>wi(e,(e=>ps(e)&&$s(e,this)))))}observerRemoved(e){0==e&&wi(this.inputs,(e=>wi(e,(e=>ps(e)&&Cs(e,this)))))}eventObserved(e){"change"==e.type&&(this._value=null),ys(this,e)}};Jo.assign({batchedUpdates:I,createStringInterpolator:Os,colors:{transparent:0,aliceblue:4042850303,antiquewhite:4209760255,aqua:16777215,aquamarine:2147472639,azure:4043309055,beige:4126530815,bisque:4293182719,black:255,blanchedalmond:4293643775,blue:65535,blueviolet:2318131967,brown:2771004159,burlywood:3736635391,burntsienna:3934150143,cadetblue:1604231423,chartreuse:2147418367,chocolate:3530104575,coral:4286533887,cornflowerblue:1687547391,cornsilk:4294499583,crimson:3692313855,cyan:16777215,darkblue:35839,darkcyan:9145343,darkgoldenrod:3095792639,darkgray:2846468607,darkgreen:6553855,darkgrey:2846468607,darkkhaki:3182914559,darkmagenta:2332068863,darkolivegreen:1433087999,darkorange:4287365375,darkorchid:2570243327,darkred:2332033279,darksalmon:3918953215,darkseagreen:2411499519,darkslateblue:1211993087,darkslategray:793726975,darkslategrey:793726975,darkturquoise:13554175,darkviolet:2483082239,deeppink:4279538687,deepskyblue:12582911,dimgray:1768516095,dimgrey:1768516095,dodgerblue:512819199,firebrick:2988581631,floralwhite:4294635775,forestgreen:579543807,fuchsia:4278255615,gainsboro:3705462015,ghostwhite:4177068031,gold:4292280575,goldenrod:3668254975,gray:2155905279,green:8388863,greenyellow:2919182335,grey:2155905279,honeydew:4043305215,hotpink:4285117695,indianred:3445382399,indigo:1258324735,ivory:4294963455,khaki:4041641215,lavender:3873897215,lavenderblush:4293981695,lawngreen:2096890111,lemonchiffon:4294626815,lightblue:2916673279,lightcoral:4034953471,lightcyan:3774873599,lightgoldenrodyellow:4210742015,lightgray:3553874943,lightgreen:2431553791,lightgrey:3553874943,lightpink:4290167295,lightsalmon:4288707327,lightseagreen:548580095,lightskyblue:2278488831,lightslategray:2005441023,lightslategrey:2005441023,lightsteelblue:2965692159,lightyellow:4294959359,lime:16711935,limegreen:852308735,linen:4210091775,magenta:4278255615,maroon:2147483903,mediumaquamarine:1724754687,mediumblue:52735,mediumorchid:3126187007,mediumpurple:2473647103,mediumseagreen:1018393087,mediumslateblue:2070474495,mediumspringgreen:16423679,mediumturquoise:1221709055,mediumvioletred:3340076543,midnightblue:421097727,mintcream:4127193855,mistyrose:4293190143,moccasin:4293178879,navajowhite:4292783615,navy:33023,oldlace:4260751103,olive:2155872511,olivedrab:1804477439,orange:4289003775,orangered:4282712319,orchid:3664828159,palegoldenrod:4008225535,palegreen:2566625535,paleturquoise:2951671551,palevioletred:3681588223,papayawhip:4293907967,peachpuff:4292524543,peru:3448061951,pink:4290825215,plum:3718307327,powderblue:2967529215,purple:2147516671,rebeccapurple:1714657791,red:4278190335,rosybrown:3163525119,royalblue:1097458175,saddlebrown:2336560127,salmon:4202722047,sandybrown:4104413439,seagreen:780883967,seashell:4294307583,sienna:2689740287,silver:3233857791,skyblue:2278484991,slateblue:1784335871,slategray:1887473919,slategrey:1887473919,snow:4294638335,springgreen:16744447,steelblue:1182971135,tan:3535047935,teal:8421631,thistle:3636451583,tomato:4284696575,turquoise:1088475391,violet:4001558271,wheat:4125012991,white:4294967295,whitesmoke:4126537215,yellow:4294902015,yellowgreen:2597139199}});var Tl=((e,{applyAnimatedValues:t=(()=>!1),createAnimatedStyle:r=(e=>new ea(e)),getComponentProps:n=(e=>e)}={})=>{const o={applyAnimatedValues:t,createAnimatedStyle:r,getComponentProps:n},i=e=>{const t=aa(e)||"Anonymous";return(e=yi.str(e)?i[e]||(i[e]=oa(e,o)):e[sa]||(e[sa]=oa(e,o))).displayName=`Animated(${t})`,e};return $i(e,((t,r)=>{yi.arr(e)&&(r=aa(t)),i[r]=i(t)})),{animated:i}})(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"],{applyAnimatedValues:function(e,t){if(!e.nodeType||!e.setAttribute)return!1;const r="filter"===e.nodeName||e.parentNode&&"filter"===e.parentNode.nodeName,{style:n,children:o,scrollTop:i,scrollLeft:s,viewBox:a,...l}=t,d=Object.values(l),c=Object.keys(l).map((t=>r||e.hasAttribute(t)?t:yl[t]||(yl[t]=t.replace(/([A-Z])/g,(e=>"-"+e.toLowerCase())))));void 0!==o&&(e.textContent=o);for(const t in n)if(n.hasOwnProperty(t)){const r=vl(t,n[t]);bl.test(t)?e.style.setProperty(t,r):e.style[t]=r}c.forEach(((t,r)=>{e.setAttribute(t,d[r])})),void 0!==i&&(e.scrollTop=i),void 0!==s&&(e.scrollLeft=s),void 0!==a&&e.setAttribute("viewBox",a)},createAnimatedStyle:e=>new kl(e),getComponentProps:({scrollTop:e,scrollLeft:t,...r})=>r}),Dl=Tl.animated;const zl=x.div`
    display: inline-block;
    position: relative;
    width: ${({$size:e})=>e?`${e}px`:"1em"};
    height: ${({$size:e})=>e?`${e}px`:"1em"};
    color: ${e=>e.$color||"currentColor"};
`,Ml=$`
	0% {
	  transform: rotate(0deg);
	}
	100% {
	  transform: rotate(360deg);
	}
`,_l=x.div`
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
    animation: ${Ml} 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
`,Ol=x(_l)`
    animation-delay: -0.45s;
`,Al=x(_l)`
    animation-delay: -0.3s;
`,Bl=x(_l)`
    animation-delay: -0.15s;
`,Hl=({color:r,className:n,size:o})=>e(zl,{className:n,$size:o,$color:r,"data-testid":"component-loading-spinner",children:[t(_l,{id:"inner1"}),t(Ol,{id:"inner2"}),t(Al,{id:"inner3"}),t(Bl,{id:"inner4"})]}),Rl=x.button`
    padding: ${En["spacing-8"]} ${En["spacing-16"]};
    min-width: 4rem;
    border: ${Sn["width-010"]} ${Sn.solid} transparent;
    border-radius: ${kn.sm};
    transition: all ${Fn["duration-250"]} ${Fn["ease-default"]};
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;

    // -----------------------------------------------------------------------------
    // BUTTON STYLE + TEXT COLOR
    // -----------------------------------------------------------------------------
    ${e=>{switch(e.$buttonStyle){case"secondary":return w`
                    background-color: ${$n.Primitive.white};
                    border-color: ${e.$buttonIsDanger?$n["border-error-strong"]:$n["border-primary"]};

                    color: ${e.$buttonIsDanger?$n["text-error"]:$n["text-primary"]};

                    &:hover,
                    &:active {
                        background-color: ${$n["bg-hover-neutral"]};
                    }
                `;case"light":return w`
                    background-color: ${$n.bg};
                    border-color: ${$n.border};

                    color: ${e.$buttonIsDanger?$n["text-error"]:$n["text-primary"]};

                    &:hover,
                    &:active {
                        background-color: ${$n["bg-hover-neutral"]};
                    }
                `;case"link":return w`
                    background-color: transparent;

                    color: ${e.$buttonIsDanger?$n["text-error"]:$n["text-primary"]};
                    &:hover,
                    &:active {
                        background-color: ${$n["bg-hover-neutral"]};
                    }
                `;case"disabled":return w`
                    background-color: ${$n["bg-disabled"]};

                    cursor: not-allowed;

                    &:hover {
                        box-shadow: none;
                    }

                    color: ${$n["text-disabled"]};
                `;default:return w`
                    background-color: ${e.$buttonIsDanger?$n["bg-error-strong"]:$n["bg-primary"]};

                    ${Tn.MaxWidth.md} {
                        width: 100%;
                    }

                    color: ${$n["text-inverse"]};

                    &:hover,
                    &:active {
                        background-color: ${e.$buttonIsDanger?$n["bg-error-strong-hover"]:$n["bg-primary-hover"]};
                    }
                `}}}

    // -----------------------------------------------------------------------------
	// BUTTON SIZE + TEXT SIZE
	// -----------------------------------------------------------------------------
	${e=>{switch(e.$buttonSizeStyle){case"small":return w`
                    height: 2.5rem;
                    ${Cn["body-md-semibold"]}

                    ${Tn.MaxWidth.xxs} {
                        height: auto;
                    }
                `;case"large":return w`
                    height: 4rem;
                    ${Cn["heading-md-semibold"]}

                    ${Tn.MaxWidth.xxs} {
                        height: auto;
                    }
                `;default:return w`
                    height: 3rem;
                    ${Cn["heading-xs-semibold"]}

                    ${Tn.MaxWidth.xxs} {
                        height: auto;
                    }
                `}}}
`,jl=x(Hl)`
    margin-right: 0.5rem;
`,Ll=(r,n)=>{const{children:o,disabled:i=!1,loading:s=!1,styleType:a="default",danger:l=!1}=r,d=ne(r,["children","disabled","loading","styleType","danger"]),c={$buttonStyle:i?"disabled":a,$buttonSizeStyle:"default",$buttonIsDanger:l};return e(Rl,Object.assign({ref:n,"data-testid":d["data-testid"]||"button",disabled:i},c,d,{children:[s&&t(jl,{}),t("span",{children:o})]}))};Ll.displayName="Button.Default";const Pl=(r,n)=>{const{children:o,disabled:i=!1,loading:s=!1,styleType:a="default",danger:l=!1}=r,d=ne(r,["children","disabled","loading","styleType","danger"]),c={$buttonStyle:i?"disabled":a,$buttonSizeStyle:"small",$buttonIsDanger:l};return e(Rl,Object.assign({ref:n,"data-testid":d["data-testid"]||"button",disabled:i},c,d,{children:[s&&t(jl,{}),t("span",{children:o})]}))};Pl.displayName="Button.Small";const Wl=(r,n)=>{const{children:o,disabled:i=!1,loading:s=!1,styleType:a="default",danger:l=!1}=r,d=ne(r,["children","disabled","loading","styleType","danger"]),c={$buttonStyle:i?"disabled":a,$buttonSizeStyle:"large",$buttonIsDanger:l};return e(Rl,Object.assign({ref:n,"data-testid":d["data-testid"]||"button",disabled:i},c,d,{children:[s&&t(jl,{}),t("span",{children:o})]}))};Wl.displayName="Button.Large";const Vl={Default:o.forwardRef(Ll),Small:o.forwardRef(Pl),Large:o.forwardRef(Wl)};var Nl={exports:{}};Nl.exports=function(){var e={LTS:"h:mm:ss A",LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D, YYYY",LLL:"MMMM D, YYYY h:mm A",LLLL:"dddd, MMMM D, YYYY h:mm A"},t=/(\[[^[]*\])|([-_:/.,()\s]+)|(A|a|YYYY|YY?|MM?M?M?|Do|DD?|hh?|HH?|mm?|ss?|S{1,3}|z|ZZ?)/g,r=/\d\d/,n=/\d\d?/,o=/\d*[^-_:/,()\s\d]+/,i={},s=function(e){return(e=+e)+(e>68?1900:2e3)},a=function(e){return function(t){this[e]=+t}},l=[/[+-]\d\d:?(\d\d)?|Z/,function(e){(this.zone||(this.zone={})).offset=function(e){if(!e)return 0;if("Z"===e)return 0;var t=e.match(/([+-]|\d\d)/g),r=60*t[1]+(+t[2]||0);return 0===r?0:"+"===t[0]?-r:r}(e)}],d=function(e){var t=i[e];return t&&(t.indexOf?t:t.s.concat(t.f))},c=function(e,t){var r,n=i.meridiem;if(n){for(var o=1;o<=24;o+=1)if(e.indexOf(n(o,0,t))>-1){r=o>12;break}}else r=e===(t?"pm":"PM");return r},u={A:[o,function(e){this.afternoon=c(e,!1)}],a:[o,function(e){this.afternoon=c(e,!0)}],S:[/\d/,function(e){this.milliseconds=100*+e}],SS:[r,function(e){this.milliseconds=10*+e}],SSS:[/\d{3}/,function(e){this.milliseconds=+e}],s:[n,a("seconds")],ss:[n,a("seconds")],m:[n,a("minutes")],mm:[n,a("minutes")],H:[n,a("hours")],h:[n,a("hours")],HH:[n,a("hours")],hh:[n,a("hours")],D:[n,a("day")],DD:[r,a("day")],Do:[o,function(e){var t=i.ordinal,r=e.match(/\d+/);if(this.day=r[0],t)for(var n=1;n<=31;n+=1)t(n).replace(/\[|\]/g,"")===e&&(this.day=n)}],M:[n,a("month")],MM:[r,a("month")],MMM:[o,function(e){var t=d("months"),r=(d("monthsShort")||t.map((function(e){return e.slice(0,3)}))).indexOf(e)+1;if(r<1)throw new Error;this.month=r%12||r}],MMMM:[o,function(e){var t=d("months").indexOf(e)+1;if(t<1)throw new Error;this.month=t%12||t}],Y:[/[+-]?\d+/,a("year")],YY:[r,function(e){this.year=s(e)}],YYYY:[/\d{4}/,a("year")],Z:l,ZZ:l};function h(r){var n,o;n=r,o=i&&i.formats;for(var s=(r=n.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g,(function(t,r,n){var i=n&&n.toUpperCase();return r||o[n]||e[n]||o[i].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g,(function(e,t,r){return t||r.slice(1)}))}))).match(t),a=s.length,l=0;l<a;l+=1){var d=s[l],c=u[d],h=c&&c[0],g=c&&c[1];s[l]=g?{regex:h,parser:g}:d.replace(/^\[|\]$/g,"")}return function(e){for(var t={},r=0,n=0;r<a;r+=1){var o=s[r];if("string"==typeof o)n+=o.length;else{var i=o.regex,l=o.parser,d=e.slice(n),c=i.exec(d)[0];l.call(t,c),e=e.replace(c,"")}}return function(e){var t=e.afternoon;if(void 0!==t){var r=e.hours;t?r<12&&(e.hours+=12):12===r&&(e.hours=0),delete e.afternoon}}(t),t}}return function(e,t,r){r.p.customParseFormat=!0,e&&e.parseTwoDigitYear&&(s=e.parseTwoDigitYear);var n=t.prototype,o=n.parse;n.parse=function(e){var t=e.date,n=e.utc,s=e.args;this.$u=n;var a=s[1];if("string"==typeof a){var l=!0===s[2],d=!0===s[3],c=l||d,u=s[2];d&&(u=s[2]),i=this.$locale(),!l&&u&&(i=r.Ls[u]),this.$d=function(e,t,r){try{if(["x","X"].indexOf(t)>-1)return new Date(("X"===t?1e3:1)*e);var n=h(t)(e),o=n.year,i=n.month,s=n.day,a=n.hours,l=n.minutes,d=n.seconds,c=n.milliseconds,u=n.zone,g=new Date,m=s||(o||i?1:g.getDate()),f=o||g.getFullYear(),p=0;o&&!i||(p=i>0?i-1:g.getMonth());var b=a||0,v=l||0,y=d||0,x=c||0;return u?new Date(Date.UTC(f,p,m,b,v,y,x+60*u.offset*1e3)):r?new Date(Date.UTC(f,p,m,b,v,y,x)):new Date(f,p,m,b,v,y,x)}catch(e){return new Date("")}}(t,a,n),this.init(),u&&!0!==u&&(this.$L=this.locale(u).$L),c&&t!=this.format(a)&&(this.$d=new Date("")),i={}}else if(a instanceof Array)for(var g=a.length,m=1;m<=g;m+=1){s[1]=a[m-1];var f=r.apply(this,s);if(f.isValid()){this.$d=f.$d,this.$L=f.$L,this.init();break}m===g&&(this.$d=new Date(""))}else o.call(this,e)}}}();var Yl=se(Nl.exports),Ul={exports:{}};Ul.exports=function(e,t,r){t.prototype.isBetween=function(e,t,n,o){var i=r(e),s=r(t),a="("===(o=o||"()")[0],l=")"===o[1];return(a?this.isAfter(i,n):!this.isBefore(i,n))&&(l?this.isBefore(s,n):!this.isAfter(s,n))||(a?this.isBefore(i,n):!this.isAfter(i,n))&&(l?this.isAfter(s,n):!this.isBefore(s,n))}};var ql=se(Ul.exports),Gl={exports:{}};Gl.exports=function(e,t){t.prototype.isSameOrAfter=function(e,t){return this.isSame(e,t)||this.isAfter(e,t)}};var Zl=se(Gl.exports),Ql={exports:{}};Ql.exports=function(e,t){t.prototype.isSameOrBefore=function(e,t){return this.isSame(e,t)||this.isBefore(e,t)}};var Xl,Kl,Jl,ed=se(Ql.exports),td={exports:{}},rd=se(td.exports=(Xl={year:0,month:1,day:2,hour:3,minute:4,second:5},Kl={},function(e,t,r){var n,o=function(e,t,r){void 0===r&&(r={});var n=new Date(e),o=function(e,t){void 0===t&&(t={});var r=t.timeZoneName||"short",n=e+"|"+r,o=Kl[n];return o||(o=new Intl.DateTimeFormat("en-US",{hour12:!1,timeZone:e,year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit",timeZoneName:r}),Kl[n]=o),o}(t,r);return o.formatToParts(n)},i=function(e,t){for(var n=o(e,t),i=[],s=0;s<n.length;s+=1){var a=n[s],l=a.type,d=a.value,c=Xl[l];c>=0&&(i[c]=parseInt(d,10))}var u=i[3],h=24===u?0:u,g=i[0]+"-"+i[1]+"-"+i[2]+" "+h+":"+i[4]+":"+i[5]+":000",m=+e;return(r.utc(g).valueOf()-(m-=m%1e3))/6e4},s=t.prototype;s.tz=function(e,t){void 0===e&&(e=n);var o=this.utcOffset(),i=this.toDate(),s=i.toLocaleString("en-US",{timeZone:e}),a=Math.round((i-new Date(s))/1e3/60),l=r(s,{locale:this.$L}).$set("millisecond",this.$ms).utcOffset(15*-Math.round(i.getTimezoneOffset()/15)-a,!0);if(t){var d=l.utcOffset();l=l.add(o-d,"minute")}return l.$x.$timezone=e,l},s.offsetName=function(e){var t=this.$x.$timezone||r.tz.guess(),n=o(this.valueOf(),t,{timeZoneName:e}).find((function(e){return"timezonename"===e.type.toLowerCase()}));return n&&n.value};var a=s.startOf;s.startOf=function(e,t){if(!this.$x||!this.$x.$timezone)return a.call(this,e,t);var n=r(this.format("YYYY-MM-DD HH:mm:ss:SSS"),{locale:this.$L});return a.call(n,e,t).tz(this.$x.$timezone,!0)},r.tz=function(e,t,o){var s=o&&t,a=o||t||n,l=i(+r(),a);if("string"!=typeof e)return r(e).tz(a);var d=function(e,t,r){var n=e-60*t*1e3,o=i(n,r);if(t===o)return[n,t];var s=i(n-=60*(o-t)*1e3,r);return o===s?[n,o]:[e-60*Math.min(o,s)*1e3,Math.max(o,s)]}(r.utc(e,s).valueOf(),l,a),c=d[0],u=d[1],h=r(c).utcOffset(u);return h.$x.$timezone=a,h},r.tz.guess=function(){return Intl.DateTimeFormat().resolvedOptions().timeZone},r.tz.setDefault=function(e){n=e}}));Xn.extend(ql),Xn.extend(ed),Xn.extend(Zl),Xn.extend(Yl),Xn.extend(rd),function(e){e.generateDays=e=>{const t=e.startOf("month"),r=Xn(t).startOf("week");return nd(r).map((e=>od(e)))},e.generateDaysForCurrentWeek=e=>{const t=e.startOf("week");return od(t)},e.generateMonths=e=>{const t=[];for(let r=0;r<12;r++){const n=e.month(r);t.push(Xn(n))}return t},e.generateDecadeOfYears=e=>{const t=e.year(),r=10*Math.floor(t/10),n=e.year(r),o=[n.subtract(1,"year"),n];for(let e=1;e<11;e++)o.push(n.add(e,"year"));return o},e.getStartEndDecade=e=>{const t=10*Math.floor(+e.format("YYYY")/10);return{beginDecade:t,endDecade:+Xn(`${t+9}-01-01`).format("YYYY")}},e.convertTo12HourFormat=e=>{const t=Xn(e,"HH:mm");return t.isValid()?t.format("h:mm a"):""},e.isWithinRange=(e,t,r,n="day")=>!t&&!r||(t&&r?e.isBetween(t,r,n,"[]"):t?e.isSameOrAfter(t,n):e.isSameOrBefore(r,n)),e.isPreviousMonthWithinRange=(t,r)=>e.isWithinRange(t.subtract(1,"month"),r,void 0,"month"),e.isPreviousYearWithinRange=(t,r)=>e.isWithinRange(t.subtract(1,"year"),r,void 0,"year"),e.isPreviousDecadeWithinRange=(t,r)=>{const{beginDecade:n}=e.getStartEndDecade(t);return e.isWithinRange(t.year(n).subtract(1,"year"),r,void 0,"year")},e.isNextMonthWithinRange=(t,r)=>e.isWithinRange(t.add(1,"month"),void 0,r,"month"),e.isNextYearWithinRange=(t,r)=>e.isWithinRange(t.add(1,"year"),void 0,r,"year"),e.isNextDecadeWithinRange=(t,r)=>{const{endDecade:n}=e.getStartEndDecade(t);return e.isWithinRange(t.year(n).add(1,"year"),void 0,r,"year")},e.getWeekStartEnd=e=>({start:e.startOf("week").format("YYYY-MM-DD"),end:e.endOf("week").format("YYYY-MM-DD")}),e.getFixedRangeStartEnd=(e,t)=>({start:e.format("YYYY-MM-DD"),end:e.add(t-1,"day").format("YYYY-MM-DD")}),e.isDisabledDay=(t,r,n,o)=>{const i=e.isWithinRange(t,n?Xn(n):void 0,o?Xn(o):void 0),s=r&&r.includes(t.format("YYYY-MM-DD"));return!i||!!s}}(Jl||(Jl={}));const nd=e=>{const t=[e];for(let r=1;r<6;r++){const n=e.add(r,"week");t.push(n)}return t},od=e=>{const t=[];for(let r=0;r<7;r++){const n=e.add(r,"day");t.push(n)}return t},id=[1,3,5,7,8,10,12],sd=[4,6,9,11];var ad,ld,dd;function cd(e){const t=i(null);return h((()=>{t.current=e}),[e]),m(((...e)=>{var r;return null===(r=t.current)||void 0===r?void 0:r.call(t,...e)}),[])}!function(e){e.clampDay=(t,r,n)=>{const o=parseInt(t),i=parseInt(r),s=parseInt(n);return 0==o?"1":id.includes(i)?Math.min(o,31).toString():sd.includes(i)?Math.min(o,30).toString():2===i?e.isLeapYear(s)?Math.min(o,29).toString():Math.min(o,28).toString():t},e.clampMonth=e=>{const t=parseInt(e);return 0==t?"1":t>12?"12":e},e.isLeapYear=e=>e%4==0&&e%100!=0||e%400==0,e.getTimeDiffInMinutes=(e,t,r="HH:mm")=>{const n=Xn(e,r);return Xn(t,r).diff(n,"minute")},e.toDayjs=e=>e?Xn(e):Xn(),e.addMinutesToTime=(e,t,r="HH:mm")=>Xn(e,r).add(t,"minutes").format(r),e.isSame=(e,t,r="day")=>Xn(e).isSame(Xn(t),r)}(ad||(ad={})),function(e){e.isDateDisabled=(e,t)=>{const{disabledDates:r,minDate:n,maxDate:o}=t;return!!(e&&r&&r.length&&r.includes(e))||(!(!n||!Xn(e).isBefore(n,"day"))||!(!o||!Xn(e).isAfter(o,"day")))},e.sanitizeInput=e=>{if(e){if(Xn(e).isValid())return e}return""}}(ld||(ld={})),function(e){e.generate=()=>Math.random().toString(36).substring(2,9)}(dd||(dd={}));const ud=e=>{const t=(e=>{const t=i(e),r=i();return s((()=>{r.current=t.current,t.current=e}),[e]),r.current})(e);return t!==e},hd=e=>{const{textSize:t}=e||{};return w`
        // Text styling
        ${t&&Cn[`${t}-regular`]}

        strong {
            font-weight: ${Cn.Spec["weight-semibold"]};
            ${t&&Cn[`${t}-semibold`]};
        }

        p {
            margin: 0;
        }

        // Link styling
        a {
            font-weight: ${Cn.Spec["weight-semibold"]};
            ${t&&Cn[`${t}-semibold`]}
            color: ${$n.hyperlink};
            text-decoration: none;

            svg {
                color: ${$n["icon-primary"]};
                height: 1lh;
                width: 1em;
                margin-left: 0.4rem;
                vertical-align: middle;
            }

            :hover,
            :active,
            :visited,
            :focus {
                color: ${$n["hyperlink-hover"]};

                svg {
                    color: ${$n["icon-hover"]};
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
    `},gd=e=>w`
    display: -webkit-box;
    -webkit-line-clamp: ${e};
    -webkit-box-orient: vertical;
    overflow: hidden;
`,md=(e,t,r=!1)=>w`
        ${Cn[`${e}-${t}`]}
        ${r?"margin-bottom: 1.05em;":"margin-bottom: 0;"}
    `,fd=e=>{if(e)return w`
            ${gd(e)}
        `},pd=(e,t)=>w`
    ${md(e,t.weight||"regular",t.paragraph)}
    ${((e=!1,t=!1,r)=>t?w`
            display: block;
            ${fd(r)}
        `:e?w`
            display: inline;
        `:w`
            display: block;
            ${fd(r)}
        `)(t.inline,t.paragraph,t.maxLines)}
    color: ${$n.text};
`;var bd;!function(r){const n=(e,t,r)=>{const n=x(e).attrs((({inline:e})=>({as:e?"span":void 0})))`
            ${e=>pd(t,e)}
        `;return n.displayName=`Typography.${r}`,n};r.HeadingXXL=n("h1","heading-xxl","HeadingXXL"),r.HeadingXL=n("h2","heading-xl","HeadingXL"),r.HeadingLG=n("h3","heading-lg","HeadingLG"),r.HeadingMD=n("h4","heading-md","HeadingMD"),r.HeadingSM=n("h5","heading-sm","HeadingSM"),r.HeadingXS=n("h6","heading-xs","HeadingXS");const o=(e,t)=>{const r=x.p.attrs((({inline:e})=>({as:e?"span":void 0})))`
            ${t=>pd(e,t)}
        `;return r.displayName=`Typography.${t}`,r};r.BodyBL=o("body-baseline","BodyBL"),r.BodyMD=o("body-md","BodyMD"),r.BodySM=o("body-sm","BodySM"),r.BodyXS=o("body-xs","BodyXS");const i=(r,n)=>{const o=x.a`
            ${e=>w`
                ${md(r,e.weight||"regular")}
                color: ${$n.hyperlink};
                text-decoration: none;

                :hover,
                :active,
                :focus {
                    color: ${$n["text-hover"]};
                }
            `}
        `,i=r=>{var{external:n=!1,children:i}=r,s=ne(r,["external","children"]);return e(o,Object.assign({},s,{children:[i,n&&t(vd,{})]}))};return i.displayName=`Typography.${n}`,i};r.LinkBL=i("body-baseline","LinkBL"),r.LinkMD=i("body-md","LinkMD"),r.LinkSM=i("body-sm","LinkSM"),r.LinkXS=i("body-xs","LinkXS")}(bd||(bd={}));const vd=x(O)`
    height: 1lh;
    width: 1em;
    margin-left: 0.4em;
    vertical-align: middle;
`,yd=x.div`
    padding: ${En["spacing-8"]} ${En["spacing-16"]};
    display: flex;

    ${e=>{let t,r;switch(e.$type){case"error":t=$n["bg-error"](e),r=$n["border-error"](e);break;case"success":t=$n["bg-success"](e),r=$n["border-success"](e);break;case"warning":default:t=$n["bg-warning"](e),r=$n["border-warning"](e);break;case"info":t=$n["bg-info"](e),r=$n["border-info"](e);break;case"description":t=$n["bg-strong"](e),r=$n["border-strong"](e)}return w`
            background: ${t};
            border-left: ${Sn["width-020"]} ${Sn.solid}
                ${r};
        `}}

    color: ${$n.text};
    ${e=>"small"===e.$sizeType?hd({textSize:"body-sm"}):hd({textSize:"body-md"})}
`,xd=x.div`
    display: flex;
    align-items: center;
    height: 1lh;
    margin-right: ${En["spacing-8"]};

    ${e=>{let t;const r="small"===e.$sizeType?"1.25rem":"1.5rem";switch(e.$type){case"error":t=$n["icon-error"](e);break;case"success":t=$n["icon-success"](e);break;case"warning":default:t=$n["icon-warning"](e);break;case"info":t=$n["icon-info"](e);break;case"description":t=$n["icon-subtle"](e)}return w`
            svg {
                color: ${t};
                width: ${r};
                height: ${r};
            }
        `}}
`,wd=x(bd.LinkSM)`
    ${e=>"small"===e.$sizeType?w`
                ${Cn["body-sm-semibold"]}
                margin-top: ${En["spacing-4"]};
            `:w`
                ${Cn["body-md-semibold"]}
                margin-top: ${En["spacing-8"]};
            `}
    display: flex;
    align-items: center;
    align-self: flex-start;

    svg {
        height: 1rem;
        width: 1rem;
        margin-left: ${En["spacing-4"]};
    }
`,$d=x.div`
    display: flex;
    flex-direction: column;
    flex: 1;
    overflow-wrap: anywhere;
`,Cd=x.div`
    display: flex;
    flex-direction: column;
    flex: 1;
    ${e=>{if(e.$showMore&&e.$hasActionLink)return w`
                margin-bottom: ${En["spacing-8"]};
            `}}
    ${e=>{const t="linear-gradient(to bottom, black 50%, transparent 100%)";if(!e.$showMore&&e.$maxCollapsedHeight)return`\n                max-height: ${e.$maxCollapsedHeight}px;\n\t\t\t\toverflow: hidden;\n                -webkit-mask-image: ${t};\n                mask-image: ${t};\n\t\t\t`}}
`,Fd=x.button`
    ${e=>"small"===e.$sizeType?w`
                ${Cn["body-sm-semibold"]}
            `:w`
                ${Cn["body-md-semibold"]}
            `}

    display: flex;
    align-items: center;
    align-self: flex-start;
    gap: ${En["spacing-4"]};
    margin-top: ${En["spacing-8"]};

    cursor: pointer;
    user-select: none;
    border: none;
    background: transparent;

    color: ${$n["text-primary"]};
`,Sd=x(y)`
    transform: rotate(${e=>e.$expanded?180:0}deg);
    transition: transform ${Fn["duration-350"]} ${Fn["ease-standard"]};
`,Ed=x.div`
    height: 1.625rem;
    width: 1.625rem;
    margin-right: 0.5rem;
    flex-shrink: 0;

    svg {
        height: 100%;
        width: 100%;
    }

    ${e=>e.$disabled?e.$active?w`
                    color: ${$n["icon-selected-disabled"]};
                `:w`
                    color: ${$n["icon-disabled-subtle"]};
                `:e.$active?w`
                color: ${$n["icon-selected"]};
            `:w`
            color: ${$n["icon-subtle"]};
        `};
`,kd=w`
    margin-bottom: ${e=>e.$bottomMargin||0}rem;

    // Counter matters
    counter-reset: list;

    li {
        font-weight: ${Cn.Spec["weight-regular"]};
        ${e=>e.$size&&Cn[`${e.$size}-regular`]}
        color: ${$n.text};
    }

    // nested lists styling
    ol,
    ul {
        margin-top: 0.5rem;
        margin-bottom: 0.5rem;
    }
`,Id=x.ol`
    ${kd}

    margin-left: 3rem;

    ${Tn.MaxWidth.lg} {
        margin-left: 2.5rem;
    }

    li {
        position: relative;
    }

    ${e=>{const{reversed:t}=e,r=e.$counterType||"decimal",n=e.$counterSeparator||")";return w`
            li:before {
                content: counter(list, ${r}) "${n}";
                counter-increment: ${t?"list -1":"list"};
                position: absolute;
                left: -2rem;
            }
        `}}

    ${e=>{const{reversed:t,start:r}=e;if(r){return w`
                counter-reset: list ${t?r+1:r-1};
            `}}}

    list-style-position: outside;
    list-style-type: none;

    ul > li:before {
        content: "";
    }
`,Td=x.ul`
    ${kd}

    margin-left: 2.5rem;
    list-style-type: ${e=>e.$bulletType||"disc"};
`,Dd=e=>{var{size:r,bulletType:n,bottomMargin:o,children:i}=e,s=ne(e,["size","bulletType","bottomMargin","children"]);return t(Td,Object.assign({$size:r,$bulletType:n,$bottomMargin:o},s,{children:i}))};Dd.displayName="TextList.Ul";const zd=e=>{var{size:r,counterType:n,counterSeparator:o,bottomMargin:i,children:s}=e,a=ne(e,["size","counterType","counterSeparator","bottomMargin","children"]);return t(Id,Object.assign({$size:r,$counterType:n,$counterSeparator:o,$bottomMargin:i},a,{children:s}))};zd.displayName="TextList.Ol";const Md=Dd,_d=x.div`
    position: relative;
    display: inline-flex;
    min-width: 10.375rem;
    border-radius: 4px;
    border-width: 1px;
    border-style: solid;
    overflow: hidden;
    flex-direction: column;
    height: fit-content;
    background: ${$n.bg};

    ${e=>{if(!e.$indicator)return w`
                justify-content: center;
            `}}

    // Container min width to fit content
    ${e=>{if(e.$useContentWidth)return w`
                min-width: unset;
            `}}

    // apply container border and header background color
    ${e=>"no-border"===e.$styleType?e.$error?e.$disabled?w`
                            border-color: ${$n["border-error"]};
                        `:w`
                            border-color: ${$n["border-error"]};

                            &:has(${Rd}:hover) {
                                background: ${$n["bg-hover-subtle"]};
                            }
                        `:e.$disabled?e.$selected?w`
                            border: none;
                            background: ${$n["bg-selected-disabled"]};
                        `:w`
                            border: none;
                        `:e.$selected?w`
                        border: none;
                        background: ${$n["bg-selected"]};

                        &:has(${Rd}:hover) {
                            background: ${$n["bg-selected-hover"]};

                            & ${Ad} {
                                color: ${$n["text-selected-hover"]};
                            }

                            & ${qd} {
                                color: ${$n["icon-selected-hover"]};
                            }
                        }
                    `:w`
                    border: none;

                    &:has(${Rd}:hover) {
                        background: ${$n["bg-hover-subtle"]};
                    }
                `:e.$error?e.$disabled?w`
                            border-color: ${$n["border-error"]};
                        `:w`
                            border-color: ${$n["border-error"]};

                            &:has(${Rd}:hover) {
                                background: ${$n["bg-hover-subtle"]};
                            }
                        `:e.$disabled?e.$selected?w`
                            border-color: ${$n["border-selected-disabled"]};
                            background: ${$n["bg-selected-disabled"]};
                        `:w`
                            border-color: ${$n["border-disabled"]};
                            background: ${$n["bg-disabled"]};
                        `:e.$selected?w`
                        border-color: ${$n["border-selected"]};
                        background: ${$n["bg-selected"]};

                        &:has(${Rd}:hover) {
                            background: ${$n["bg-selected-hover"]};

                            & ${Ad} {
                                color: ${$n["text-selected-hover"]};
                            }

                            & ${qd} {
                                color: ${$n["icon-selected-hover"]};
                            }
                        }
                    `:w`
                    border-color: ${$n.border};

                    &:has(${Rd}:hover) {
                        background: ${$n["bg-hover-subtle"]};
                    }
                `}
`,Od=x.input`
    position: absolute;
    height: 100%;
    width: 100%;
    cursor: ${e=>e.disabled?"not-allowed":"pointer"};
    top: 0;
    left: 0;

    /* Hide appearance but keep it focusable using keyboard interactions */
    appearance: none;
    background: transparent;
    border: none;
`,Ad=x.div`
    display: flex;
    flex-direction: column;
    overflow-wrap: anywhere;
    width: 100%;
    overflow: hidden;

    // apply header container text color
    ${e=>e.$disabled?e.$selected?w`
                    color: ${$n["text-selected-disabled"]};
                `:w`
                    color: ${$n["text-disabled"]};
                `:e.$selected?w`
                color: ${$n["text-selected"]};
            `:w`
            color: ${$n.text};
        `}
`,Bd=x.label`
    ${Cn["body-baseline-regular"]}
    overflow: hidden;
    display: -webkit-box;
    text-overflow: ellipsis;
    -webkit-box-orient: vertical;
    overflow-wrap: break-word;
    -webkit-line-clamp: ${e=>{var t,r;return null!==(r=null===(t=e.$maxLines)||void 0===t?void 0:t.desktop)&&void 0!==r?r:"none"}};
    ${Tn.MaxWidth.lg} {
        -webkit-line-clamp: ${e=>{var t,r;return null!==(r=null===(t=e.$maxLines)||void 0===t?void 0:t.tablet)&&void 0!==r?r:"none"}};
    }
    ${Tn.MaxWidth.sm} {
        -webkit-line-clamp: ${e=>{var t,r;return null!==(r=null===(t=e.$maxLines)||void 0===t?void 0:t.mobile)&&void 0!==r?r:"none"}};
    }
`,Hd=x.div`
    ${Cn["body-md-regular"]}
    margin-top: 0.5rem;

    z-index: 1; // forces sublabel to render above the input
    pointer-events: none; // to allow click events to be passed to the input

    strong,
    b {
        ${Cn["body-md-semibold"]}
    }
`,Rd=x.div`
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
`,jd=x.div`
    display: flex;
    height: 100%;
    width: 100%;
    position: relative;
    padding: ${e=>e.$addPadding?"0.6875rem 0rem 0.6875rem 1rem":"0.6875rem 1rem"};
`,Ld=x.button`
    color: ${e=>e.$disabled?$n["text-disabled"]:$n["text-error"]};
    white-space: nowrap;
    ${Cn["body-md-semibold"]}
    height: fit-content;
    padding: 0.6875rem 1rem 0.6875rem 0.5rem;
    border: none;
    background: none;

    cursor: ${e=>e.$disabled?"not-allowed":"pointer"};
`,Pd=x.button`
    color: ${e=>e.disabled?$n["text-disabled"]:$n["text-primary"]};
    ${Cn["body-baseline-semibold"]}
    display: flex;
    align-items: center;
    justify-content: flex-end;
    border: none;
    background-color: ${$n.bg};
    cursor: ${e=>e.disabled?"not-allowed":"pointer"};
    padding: 0 1rem 0.6875rem 1rem;
    padding-top: ${e=>e.$paddingTopRequired?"0.6875rem":"0rem"};
    width: 100%;

    svg {
        width: 1em;
        height: 1em;
        margin-left: 0.5rem;
    }
`,Wd=x.div`
    width: 100%;
    color: ${e=>e.$disabled?$n["text-disabled"]:$n["text-error"]};
    border: none;
    background: ${$n.bg};
    cursor: ${e=>e.$disabled?"not-allowed":"pointer"};
    padding: 0.6875rem 1rem 0.5rem 1rem;
`,Vd=x((r=>{var{type:n,className:o,children:i,actionLink:l,actionLinkIcon:d,sizeType:c="default",showIcon:u=!1,customIcon:h,maxCollapsedHeight:g}=r,m=ne(r,["type","className","children","actionLink","actionLinkIcon","sizeType","showIcon","customIcon","maxCollapsedHeight"]);const[f,p]=a(!1),[b,v]=a(!1),{height:y,ref:x}=Xo();s((()=>{w()}),[g,y]);const w=()=>{p(!g),v($())},$=()=>!(!y||!g)&&y>g;return e(yd,{className:o,$type:n,$sizeType:c,"data-testid":m["data-testid"],children:[u&&t(xd,{$sizeType:c,$type:n,children:(()=>{if(n&&h)return h;switch(n){case"success":return t(_,{});case"warning":return t(z,{});case"error":return t(D,{});case"info":case"description":return t(M,{});default:return null}})()}),e($d,{children:[e(Cd,{$maxCollapsedHeight:$()?g:void 0,$showMore:f,$hasActionLink:!!l,children:[t("div",{ref:x,children:i}),l?e(wd,Object.assign({"data-testid":"action-link",$type:n,$sizeType:c},l,{children:[l.children,d||t(T,{})]})):null]}),b&&e(Fd,{$sizeType:c,$type:n,type:"button",onClick:()=>p(!f),children:["Show ",f?"less":"more",t(Sd,{$expanded:f})]})]})]})}))`
    width: 100%;
    user-select: none;
`,Nd=x.div`
    padding: 0 1rem;
    padding-top: 0.6875rem;
    padding-bottom: ${e=>e.$isFinalItem?"0.6875rem":"0.5rem"};
    background-color: ${$n.bg};
    ${hd({textSize:"body-md"})}

    ${e=>e.$disabled?w`
                color: ${$n["text-disabled"]};
            `:e.$selected?w`
                color: ${$n["text-selected"]};
            `:w`
                color: ${$n.text};
            `}
`,Yd=x(bd.BodyMD)`
    color: ${e=>e.$disabled?$n["text-disabled"]:$n["text-error"]};
`,Ud=x(Md)`
    color: ${e=>e.$disabled?$n["text-disabled"]:$n["text-error"]};
`,qd=x((({type:e,active:r=!1,disabled:n,className:o})=>{let i;switch(e){case"checkbox":i=t(r?j:R,{});break;case"radio":i=t(r?B:A,{});break;case"tick":i=t(L,{});break;case"cross":i=t(H,{});break;default:i=null}return t(Ed,{className:o,$active:r,$disabled:n,children:i})}))`
    ${e=>e.$disabled?e.$selected?w`
                    color: ${$n["icon-selected-disabled"]};
                `:w`
                    color: ${$n["icon-disabled-subtle"]};
                `:e.$selected?w`
                color: ${$n["icon-selected"]};
            `:w`
            color: ${$n["icon-subtle"]};
        `};
`,Gd=x.button`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: ${En["spacing-24"]};
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

        ${({$highlight:e})=>e&&w`
                background-color: ${$n["bg-hover-neutral"]};
            `}
    }
`,Zd=o.forwardRef(((e,r)=>{var{children:n,focusHighlight:o=!0,focusOutline:i="none",type:s="button"}=e,a=ne(e,["children","focusHighlight","focusOutline","type"]);return t(Gd,Object.assign({ref:r,$outline:i,$highlight:o,type:s},a,{children:n}))})),Qd=x(Dl.div)`
    position: absolute;
    top: calc(3rem + ${En["spacing-8"]});
    left: 0;
    overflow: hidden;
    z-index: 1;

    ${Tn.MaxWidth.xxs} {
        max-width: 100%;
    }
`,Xd=x.div`
    position: relative;
    width: 100%;
    padding: ${En["spacing-8"]} ${En["spacing-20"]}
        ${En["spacing-24"]} ${En["spacing-20"]};
    display: flex;
    flex-direction: column;
    background: ${$n.bg};
    border: ${Sn["width-010"]} ${Sn.solid} ${$n.border};
    border-radius: ${kn.sm};
`,Kd=x.div`
    display: flex;
    align-items: center;
    justify-content: space-between;

    ${Tn.MaxWidth.xxs} {
        flex-direction: column;
        width: 100%;
    }
`,Jd=x.div`
    display: flex;
    justify-content: flex-end;
    margin-top: ${En["spacing-16"]};
    gap: ${En["spacing-8"]} ${En["spacing-16"]};

    ${Tn.MaxWidth.xxs} {
        flex-direction: column-reverse; // FIXME: this breaks tab focus
        margin-top: ${En["spacing-32"]};
    }
`,ec=x.div`
    display: flex;
    align-items: center;
    margin-right: ${En["spacing-32"]};

    ${Tn.MaxWidth.xxs} {
        margin-right: 0;
        width: 100%;
    }
`,tc=x.div`
    display: flex;
    gap: ${En["spacing-8"]};

    ${Tn.MaxWidth.lg} {
        flex-direction: column;
    }

    ${Tn.MaxWidth.xxs} {
        flex-direction: row;
        width: 100%;
    }
`,rc=x.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    ${Tn.MaxWidth.xxs} {
        width: 6rem;
    }
`,nc=x(Zd)`
    width: 5rem;
    padding: ${En["spacing-16"]} 0;
    color: ${$n.icon};

    svg {
        height: 1rem;
        width: 1rem;
    }

    &:hover {
        color: ${$n["icon-hover"]};
    }
`,oc=x(bd.BodyBL)`
    flex-shrink: 0;
    width: 1.5rem;
    text-align: center;
`,ic=x(Ln)`
    height: calc(3rem - 2px);
    width: 5rem;
    display: flex;
    align-items: center;
    justify-content: center;

    ${Tn.MaxWidth.xxs} {
        width: 100%;
    }
`,sc=x(Wn)`
    text-align: center;
    width: 100%;

    :focus::placeholder {
        color: transparent;
    }
`,ac=x((({type:n="checkbox",indicator:o,checked:l,styleType:d="default",children:c,childrenMaxLines:u,subLabel:h,disabled:g,error:m,name:f,id:b,className:v,compositeSection:y,removable:x,onRemove:w,"data-testid":$,onChange:C,useContentWidth:E})=>{const{collapsible:k=!0,errors:I,children:T,initialExpanded:D}=y||{},[z,M]=a(l),[_,O]=a(!!D),A=p((()=>{const e=Array.isArray(I)&&(null==I?void 0:I.length)>0,t=!Array.isArray(I)&&!!I;return e||t}),[I]),[B]=a(dd.generate()),H=b?`${b}`:`tg-${B}`,R=i(null);s((()=>{M(l)}),[l]),s((()=>{z&&O(null==D||D)}),[z]);const j=()=>{g||O(!_)},L=()=>{g||!w||w()},P=()=>{let e;switch(n){case"yes":e="tick";break;case"no":e="cross";break;case"checkbox":case"radio":e=n}return t(qd,{type:e,active:z,disabled:g,$selected:z,$disabled:g})},W=()=>{if(!h)return null;let e;return e="function"==typeof h?h():h,t(Hd,{"data-id":"toggle-sublabel",children:e})},V=n=>e(r,{children:[t(Yd,{weight:"semibold",$disabled:g,children:"Error"}),t(Ud,{$disabled:g,children:null==n?void 0:n.map(((e,r)=>t("li",{id:`${H}-error-list-item-${r}`,children:t(Yd,{weight:"semibold",$disabled:g,children:e})},r)))})]});return e(_d,{$selected:z,$disabled:g,className:v,$styleType:d,$error:m,$indicator:o,$useContentWidth:E,id:b,"data-testid":$,children:[e(Rd,{id:`${H}-header-container`,$disabled:g,$error:m,$selected:z,$indicator:o,$styleType:d,children:[e(jd,{$addPadding:x,children:[t(Od,{ref:R,name:f,id:`${H}-input`,type:"checkbox"===n?"checkbox":"radio","data-testid":"toggle-input",disabled:g,onChange:e=>{if(!g){if(C)return void C(e);switch(n){case"checkbox":M((e=>!e));break;case"radio":case"yes":case"no":z||M(!0)}}},checked:z}),o&&P(),e(Ad,{$selected:z,$disabled:g,children:[t(Bd,{htmlFor:`${H}-input`,"data-testid":`${H}-toggle-label`,$maxLines:u,children:c}),h&&W()]})]}),x&&t(Ld,{type:"button",$disabled:g,onClick:L,id:`${H}-remove-button`,children:"Remove"})]}),T&&e("div",{children:[(!k||_)&&t(Nd,{"data-id":"toggle-composite-children",$isFinalItem:!k,$disabled:g,children:T}),k&&!_&&A&&t(Wd,{$disabled:g,onClick:j,id:`${H}-error-alert`,children:t(Vd,{type:g?"description":"error",className:v,showIcon:!0,children:Array.isArray(I)?V(I):I})}),k&&e(Pd,{$paddingTopRequired:!_&&!A,disabled:g,onClick:j,"data-testid":_?"collapse-button":"expand-button",children:[_?"Show less":"Show more",t(_?S:F,{"aria-hidden":!0})]})]})]})}))`
    min-width: 5rem;
    flex: 1;
`,lc=x(Vl.Small)`
    width: 7rem;

    ${Tn.MaxWidth.sm} {
        flex: 1;
    }

    ${Tn.MaxWidth.xxs} {
        width: 100%;
    }
`;var dc,cc,uc;!function(e){e.HOUR_UP="hour-up",e.HOUR_DOWN="hour-down",e.MINUTE_UP="minute-up",e.MINUTE_DOWN="minute-down"}(dc||(dc={})),function(e){e.HOUR="hour",e.MINUTE="minute"}(cc||(cc={})),function(e){e.AM="am",e.PM="pm"}(uc||(uc={}));const hc=({id:r,value:n,show:o,format:l,onChange:d,onCancel:c})=>{var u;const h=Qn.getTimeValues(l,n),[g,f]=a(h.hour),[p,b]=a(h.minute),[v,y]=a(h.period),x=i(null),w=i(null),$=Xo();s((()=>{if(o&&x.current&&x.current.focus(),o){const{hour:e,minute:t,period:r}=Qn.getTimeValues(l,n);f(e),b(t),y(r)}}),[o,n,l]),s((()=>{const e=x.current,t=w.current;return e&&e.addEventListener("keydown",C),t&&t.addEventListener("keydown",C),()=>{e&&e.removeEventListener("keydown",C),t&&t.removeEventListener("keydown",C)}}),[]);const C=e=>{["Digit0","Digit1","Digit2","Digit3","Digit4","Digit5","Digit6","Digit7","Digit8","Digit9","Tab","Backspace","Delete","ArrowLeft","ArrowRight","ArrowUp","ArrowDown"].includes(e.code)||["Backspace","0","1","2","3","4","5","6","7","8","9"].includes(e.key)||e.preventDefault()},E=m((e=>{switch(e.currentTarget.name){case dc.MINUTE_UP:b(Qn.updateMinutes(p,"add"));break;case dc.MINUTE_DOWN:b(Qn.updateMinutes(p,"minus"));break;case dc.HOUR_UP:f(Qn.updateHours(g,"add"));break;case dc.HOUR_DOWN:f(Qn.updateHours(g,"minus"))}}),[g,p]),k=e=>{e.target.select()},I=e=>{const t=e.target.value;switch(e.target.name){case cc.HOUR:t.length<=2&&f(t);break;case cc.MINUTE:t.length<=2&&b(t)}},T=e=>{const t=parseInt(e.target.value);if(!isNaN(t))switch(e.target.name){case cc.HOUR:{const r=t>23||t<0?h.hour:Qn.convertHourTo12HourFormat(e.target.value);f(r);break}case cc.MINUTE:{const r=t>59||t<0?h.minute:e.target.value;b(Gn.padValue(r));break}}},D=e=>{switch(e.target.name){case uc.AM:y(Zn.AM);break;case uc.PM:y(Zn.PM)}},z=e=>r?`${r}-${e}`:e,M=hl({opacity:o?1:0,height:o?(null!==(u=$.height)&&void 0!==u?u:0)+32+2:0});return t(Qd,{"data-testid":"animated-dropdown-wrapper",style:M,children:e(Xd,{ref:$.ref,"data-testid":z("timepicker-dropdown"),inert:o?void 0:"",children:[e(Kd,{children:[e(ec,{children:[e(rc,{children:[t(nc,{"aria-label":"increase hour",name:dc.HOUR_UP,tabIndex:-1,onClick:E,"data-testid":z("hour-increment-button"),children:t(S,{})}),t(ic,{children:t(sc,{"aria-label":"hour",type:"number",name:cc.HOUR,id:"hour",maxLength:2,pattern:"[0-9]{2}",ref:x,value:g,onFocus:k,onChange:I,onBlur:T,min:1,max:12,placeholder:"HH","data-testid":z("hour-input")})}),t(nc,{"aria-label":"decrease hour",name:dc.HOUR_DOWN,tabIndex:-1,onClick:E,"data-testid":z("hour-decrement-button"),children:t(F,{})})]}),t(oc,{children:":"}),e(rc,{children:[t(nc,{"aria-label":"increase minute",name:dc.MINUTE_UP,tabIndex:-1,onClick:E,"data-testid":z("minute-increment-button"),children:t(S,{})}),t(ic,{children:t(sc,{"aria-label":"minute",type:"number",name:cc.MINUTE,id:"minute",maxLength:2,pattern:"[0-9]{2}",ref:w,value:p,onChange:I,onBlur:T,onFocus:k,min:0,max:59,placeholder:"MM","data-testid":z("minute-input")})}),t(nc,{"aria-label":"decrease minute",name:dc.MINUTE_DOWN,tabIndex:-1,onClick:E,"data-testid":z("minute-decrement-button"),children:t(F,{})})]})]}),e(tc,{children:[t(ac,{checked:v===Zn.AM,name:uc.AM,type:"radio",onChange:D,"data-testid":z("am-toggle"),"aria-label":"AM",children:"AM"}),t(ac,{checked:v===Zn.PM,name:uc.PM,type:"radio",onChange:D,"data-testid":z("pm-toggle"),"aria-label":"PM",children:"PM"})]})]}),e(Jd,{children:[t(lc,{"aria-label":"close selector",type:"button",styleType:"secondary",onClick:c,"data-testid":z("cancel-button"),children:"Cancel"}),t(lc,{"aria-label":"confirm selection",type:"button",onClick:()=>{let e;e="24hr"===l?Qn.convertTo24HourFormat({hour:g,minute:p,period:v}):`${g}:${p}${v}`,d(e)},disabled:""===g||""===p,"data-testid":z("confirm-button"),children:"Done"})]})]})})},gc=r=>{var{id:n,disabled:o=!1,error:l,value:d,format:c="24hr",readOnly:u,onChange:h,onFocus:g,onBlur:m}=r,f=ne(r,["id","disabled","error","value","format","readOnly","onChange","onFocus","onBlur"]);const[p,b]=a(!1),[v,y]=a(!1),[x,w]=a(""),[$,C]=a(""),F=i(null);s((()=>{d&&(w(d.start),C(d.end))}),[d]),oe("mousedown",(function(e){o||I(e)}),"document"),oe("keyup",(function(e){if("Tab"===e.code)I(e)}),"document");const S=()=>{k()},E=()=>{p||v||g&&g()},k=()=>{b(!1),y(!1),m&&m()},I=e=>{F.current&&!F.current.contains(e.target)&&(v||p)&&k()};return t(Nn,Object.assign({ref:F,id:n},f,{children:e(Yn,{$disabled:o,$error:l,$readOnly:u,children:[e(An,{error:l,currentActive:p?"start":v?"end":"none",children:[t(Un,{onFocus:()=>{o||u||p||(y(!1),b(!0),E())},readOnly:!0,placeholder:"From",value:Qn.formatDisplayValue(x,c),disabled:o,"data-testid":f["data-testid"]?`${f["data-testid"]}-timepicker-selector`:"timepicker-selector"}),t(Un,{onFocus:()=>{o||u||v||(b(!1),y(!0),E())},readOnly:!0,placeholder:"To",value:Qn.formatDisplayValue($,c),disabled:o,"data-testid":f["data-testid"]?`${f["data-testid"]}-timepicker-selector`:"timepicker-selector"})]}),t(hc,{id:n,show:p,value:x,format:c,onCancel:S,onChange:e=>{b(!1),y(!0),w(e);h&&h({start:e,end:$})}}),t(hc,{id:n,show:v,value:$,format:c,onCancel:S,onChange:e=>{y(!1),C(e);h&&h({start:x,end:e}),""==x?b(!0):m&&m()}})]})}))};x.label`
    color: ${$n["text-subtle"]};
    margin-bottom: ${En["spacing-8"]};
    display: inline-block;

    ${Cn["form-label"]}
    ${hd()}
    font-weight: ${Cn.Spec["weight-semibold"]};
`;const mc=x.p`
    ${Cn["body-sm-semibold"]}
    color: ${$n["text-error"]};
    margin-top: ${En["spacing-8"]};
    margin-bottom: 0;
    outline: none;
`;x.span`
    ${Cn["form-description"]}
    color: ${$n["text-subtler"]};
    display: block;
`,x(Wn)`
    width: 100%;
    height: calc(3rem - 2px); // exclude top and bottom borders

    ${e=>"no-border"!==e.$styleType&&w`
            padding-left: ${En["spacing-16"]};
            padding-right: ${e.$showClear?0:En["spacing-16"]};
        `}
`;const fc=x(Vn)`
    height: auto;
    padding: ${En["spacing-12"]} ${En["spacing-16"]};

    cursor: pointer;
    color: ${$n.icon};

    ${e=>"no-border"===e.$styleType&&w`
            margin-right: -${En["spacing-12"]};
        `}
`,pc=x(H)`
    height: 1.25rem;
    width: 1.25rem;
    vertical-align: middle;
`;x.div`
    display: flex;
    width: 100%;
`,x(Ln)`
    display: flex;
    align-items: center;
    width: 100%;
`;const bc=e=>"small"===e?2.5:3;x.div`
    position: relative;
    width: 100%;
    ${e=>{const t=bc(e.$variant);return w`
            min-height: ${t}rem;
            height: ${t}rem; // Need this to persist the height when expanding or collapsing list
        `}}
`;const vc=w`
    display: flex;
    position: relative;
    align-items: center;
    justify-content: space-between;
    padding: 0 ${En["spacing-16"]};
    // exclude top and bottom borders
    height: calc(${e=>bc(e.$variant)}rem - 2px);
    width: 100%;
    border-radius: ${kn.sm};
    border: none;
    background: transparent;

    :focus,
    :active {
        outline: none;
    }

    :focus-visible {
        outline: 2px solid ${$n["border-focus"]};
    }
`,yc=x.button`
    ${vc}
    cursor: pointer;
`;x.div`
    ${vc}
`;const xc=$`
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
`;x.div`
    position: relative;
    border: ${Sn["width-010"]} ${Sn.solid} ${$n.border};
    border-radius: ${kn.sm};
    background: ${$n.bg};
    overflow: hidden;

    :focus-within {
        border-color: ${$n["border-focus"]};
        box-shadow: 0px 0px 4px 0px
            rgb(from ${$n["border-focus"]} r g b / 50%) inset; // TODO: confirm shadow
    }

    ${e=>e.expanded?w`
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                z-index: 2;
            `:w`
                animation: ${xc} 0.5s ease-in-out;
            `}

    ${e=>e.disabled?w`
                background: ${$n["bg-disabled"]};

                ${yc} {
                    cursor: not-allowed;
                }

                :focus-within {
                    border-color: ${$n.border};
                    box-shadow: none;
                }
            `:e.$readOnly?w`
                border: none;
                background: transparent !important;

                ${yc} {
                    padding: 0;
                }

                :focus-within {
                    border: none;
                    box-shadow: none;
                }
            `:e.error?w`
                border-color: ${$n["border-error"]};

                :focus-within {
                    border-color: ${$n["border-error"]};
                    box-shadow: 0px 0px 4px 0px
                        rgb(from ${$n["border-error"]} r g b / 50%) inset; // TODO: confirm shadow
                }
            `:void 0}
`,x.div`
    transform: rotate(${e=>e.expanded?180:0}deg);
    transition: transform ${Fn["duration-250"]} ${Fn["ease-default"]};
    margin-left: ${En["spacing-16"]};
`,x(F)`
    color: ${$n.icon};
`,x.div`
    height: 1px;
    background: ${$n.border};
    margin: 0 ${En["spacing-8"]};
`,x.div`
    display: flex;
    flex: 1;
    word-break: break-all;
    ${e=>{if(e.$disabled)return w`
                color: ${$n["text-disabled"]};
            `}}
`;const wc=x.div`
    ${e=>"small"===e.$variant?Cn["body-md-regular"]:Cn["body-baseline-regular"]}
    text-align: left;
    ${e=>{if("middle"!==e.truncateType)return w`
                    ${gd(1)}
                `}}
    overflow: hidden;
`;x(wc)`
    color: ${$n["text-subtler"]};
`,x.div`
    display: flex;
    position: relative;
    align-items: center;
    justify-content: space-between;
`;const $c=x(fc)`
    position: absolute;
    right: 0;
    padding-left: ${En["spacing-8"]};
    margin-right: 0;
`;x(yc)`
    // space for clear icon
    padding-right: calc(1.25rem + ${En["spacing-16"]});
`;const Cc=x.div`
    font-weight: ${e=>e.$bold?Cn.Spec["weight-semibold"]:Cn.Spec["weight-regular"]};
    color: ${e=>e.$selected?$n["text-selected"]:$n.text};
    width: 100%;

    ${e=>"end"===e.$truncateType&&gd(e.$maxLines||2)}
    overflow-wrap: break-word;
`,Fc=x.div`
    color: ${$n["text-subtlest"]};
    width: 100%;

    ${e=>"end"===e.$truncateType&&gd(e.$maxLines||2)}
    overflow-wrap: break-word;

    ${e=>"next-line"===e.$labelDisplayType?w`
                    ${Cn["body-md-semibold"]}
                `:w`
                    ${Cn["body-baseline-regular"]}
                `}
`,Sc=x.span`
    font-weight: ${Cn.Spec["weight-semibold"]};
`,Ec=x.div`
    text-align: left;
    width: 100%;
    overflow: hidden;
    overflow-wrap: break-word;

    ${e=>"small"===e.$variant?Cn["body-md-regular"]:Cn["body-baseline-regular"]}

    ${e=>{switch(e.$labelDisplayType){case"next-line":return w`
                    display: flex;
                    flex-direction: column;
                `;case"inline":return w`
                    ${Cc} {
                        display: inline;
                    }

                    ${Fc} {
                        display: inline;
                        margin-left: 0.5rem;
                    }
                `}}}
`,kc=x.div`
    display: inline-block;
    width: ${e=>1===e.$maxLines?50:100}%;
    height: 1lh;
    word-break: break-all;
    overflow: hidden;
`,Ic=x.div`
    display: inline-block;
    width: ${e=>1===e.$maxLines?50:100}%;
    height: 1lh;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    direction: rtl;
    text-align: right;
`,Tc=({bold:n,displayType:o="inline",label:i,searchTerm:s,maxLines:a=2,selected:l,sublabel:d,truncationType:c="middle",variant:u="default"})=>{const h=C(),g="small"===u?Cn.Spec["body-size-md"]({theme:h}):Cn.Spec["body-size-baseline"]({theme:h}),f=Cn.Spec["font-family"]({theme:h}),{ref:b,width:v}=Xo(),y=m((e=>{if("inline"!==o||!v)return!1;return Gn.getTextWidth(e,`${g} '${f}'`)>v*a-50}),[v,o,g,f,a]),x=p((()=>y(i)),[y,i]),w=p((()=>d&&y(d)),[y,d]),$=n=>{if(!s)return n;const o=s.toLowerCase().trim(),a=n.toLowerCase().indexOf(o),l=a+s.length;return-1===a?n:e(r,{children:[i.slice(0,a),t(Sc,{$variant:u,children:i.slice(a,l)}),i.slice(l)]})},F=n=>e(r,{children:[t(kc,{$maxLines:a,"aria-hidden":!0,children:$(n)}),t(Ic,{$maxLines:a,"aria-hidden":!0,children:$(n)})]});return e(Ec,{ref:b,$labelDisplayType:x||w?"next-line":o,$variant:u,children:[t(Cc,{"aria-label":i,$bold:n,$maxLines:a,$selected:l,$truncateType:c,children:"middle"===c&&x?F(i):$(i)}),d&&t(Fc,{"aria-label":d,$maxLines:a,$truncateType:c,$labelDisplayType:o,children:"middle"===c&&w?F(d):d})]})};var Dc=Pt;var zc=function(e){var t=this.__data__,r=t.delete(e);return this.size=t.size,r};var Mc=function(e){return this.__data__.get(e)};var _c=function(e){return this.__data__.has(e)},Oc=Pt,Ac=Wt,Bc=lr;var Hc=function(e,t){var r=this.__data__;if(r instanceof Oc){var n=r.__data__;if(!Ac||n.length<199)return n.push([e,t]),this.size=++r.size,this;r=this.__data__=new Bc(n)}return r.set(e,t),this.size=r.size,this},Rc=Pt,jc=function(){this.__data__=new Dc,this.size=0},Lc=zc,Pc=Mc,Wc=_c,Vc=Hc;function Nc(e){var t=this.__data__=new Rc(e);this.size=t.size}Nc.prototype.clear=jc,Nc.prototype.delete=Lc,Nc.prototype.get=Pc,Nc.prototype.has=Wc,Nc.prototype.set=Vc;var Yc=Nc;var Uc=lr,qc=function(e){return this.__data__.set(e,"__lodash_hash_undefined__"),this},Gc=function(e){return this.__data__.has(e)};function Zc(e){var t=-1,r=null==e?0:e.length;for(this.__data__=new Uc;++t<r;)this.add(e[t])}Zc.prototype.add=Zc.prototype.push=qc,Zc.prototype.has=Gc;var Qc=function(e,t){return e.has(t)},Xc=Zc,Kc=function(e,t){for(var r=-1,n=null==e?0:e.length;++r<n;)if(t(e[r],r,e))return!0;return!1},Jc=Qc;var eu=function(e,t,r,n,o,i){var s=1&r,a=e.length,l=t.length;if(a!=l&&!(s&&l>a))return!1;var d=i.get(e),c=i.get(t);if(d&&c)return d==t&&c==e;var u=-1,h=!0,g=2&r?new Xc:void 0;for(i.set(e,t),i.set(t,e);++u<a;){var m=e[u],f=t[u];if(n)var p=s?n(f,m,u,t,e,i):n(m,f,u,e,t,i);if(void 0!==p){if(p)continue;h=!1;break}if(g){if(!Kc(t,(function(e,t){if(!Jc(g,t)&&(m===e||o(m,e,r,n,i)))return g.push(t)}))){h=!1;break}}else if(m!==f&&!o(m,f,r,n,i)){h=!1;break}}return i.delete(e),i.delete(t),h};var tu=function(e){var t=-1,r=Array(e.size);return e.forEach((function(e,n){r[++t]=[n,e]})),r};var ru=ue.Uint8Array,nu=Ct,ou=eu,iu=tu,su=function(e){var t=-1,r=Array(e.size);return e.forEach((function(e){r[++t]=e})),r},au=he?he.prototype:void 0,lu=au?au.valueOf:void 0;var du=function(e,t,r,n,o,i,s){switch(r){case"[object DataView]":if(e.byteLength!=t.byteLength||e.byteOffset!=t.byteOffset)return!1;e=e.buffer,t=t.buffer;case"[object ArrayBuffer]":return!(e.byteLength!=t.byteLength||!i(new ru(e),new ru(t)));case"[object Boolean]":case"[object Date]":case"[object Number]":return nu(+e,+t);case"[object Error]":return e.name==t.name&&e.message==t.message;case"[object RegExp]":case"[object String]":return e==t+"";case"[object Map]":var a=iu;case"[object Set]":var l=1&n;if(a||(a=su),e.size!=t.size&&!l)return!1;var d=s.get(e);if(d)return d==t;n|=2,s.set(e,t);var c=ou(a(e),a(t),n,o,i,s);return s.delete(e),c;case"[object Symbol]":if(lu)return lu.call(e)==lu.call(t)}return!1};var cu=function(e,t){for(var r=-1,n=t.length,o=e.length;++r<n;)e[o+r]=t[r];return e},uu=cu,hu=ae;var gu=function(e,t,r){var n=t(e);return hu(e)?n:uu(n,r(e))};var mu=function(e,t){for(var r=-1,n=null==e?0:e.length,o=0,i=[];++r<n;){var s=e[r];t(s,r,e)&&(i[o++]=s)}return i},fu=function(){return[]},pu=Object.prototype.propertyIsEnumerable,bu=Object.getOwnPropertySymbols,vu=bu?function(e){return null==e?[]:(e=Object(e),mu(bu(e),(function(t){return pu.call(e,t)})))}:fu;var yu=function(e,t){for(var r=-1,n=Array(e);++r<e;)n[r]=t(r);return n},xu=Ce,wu=Fe;var $u=function(e){return wu(e)&&"[object Arguments]"==xu(e)},Cu=Fe,Fu=Object.prototype,Su=Fu.hasOwnProperty,Eu=Fu.propertyIsEnumerable,ku=$u(function(){return arguments}())?$u:function(e){return Cu(e)&&Su.call(e,"callee")&&!Eu.call(e,"callee")},Iu={exports:{}};var Tu=function(){return!1};!function(e,t){var r=ue,n=Tu,o=t&&!t.nodeType&&t,i=o&&e&&!e.nodeType&&e,s=i&&i.exports===o?r.Buffer:void 0,a=(s?s.isBuffer:void 0)||n;e.exports=a}(Iu,Iu.exports);var Du=Iu.exports,zu=/^(?:0|[1-9]\d*)$/;var Mu=function(e,t){var r=typeof e;return!!(t=null==t?9007199254740991:t)&&("number"==r||"symbol"!=r&&zu.test(e))&&e>-1&&e%1==0&&e<t};var _u=function(e){return"number"==typeof e&&e>-1&&e%1==0&&e<=9007199254740991},Ou=Ce,Au=_u,Bu=Fe,Hu={};Hu["[object Float32Array]"]=Hu["[object Float64Array]"]=Hu["[object Int8Array]"]=Hu["[object Int16Array]"]=Hu["[object Int32Array]"]=Hu["[object Uint8Array]"]=Hu["[object Uint8ClampedArray]"]=Hu["[object Uint16Array]"]=Hu["[object Uint32Array]"]=!0,Hu["[object Arguments]"]=Hu["[object Array]"]=Hu["[object ArrayBuffer]"]=Hu["[object Boolean]"]=Hu["[object DataView]"]=Hu["[object Date]"]=Hu["[object Error]"]=Hu["[object Function]"]=Hu["[object Map]"]=Hu["[object Number]"]=Hu["[object Object]"]=Hu["[object RegExp]"]=Hu["[object Set]"]=Hu["[object String]"]=Hu["[object WeakMap]"]=!1;var Ru=function(e){return Bu(e)&&Au(e.length)&&!!Hu[Ou(e)]};var ju=function(e){return function(t){return e(t)}},Lu={exports:{}};!function(e,t){var r=le,n=t&&!t.nodeType&&t,o=n&&e&&!e.nodeType&&e,i=o&&o.exports===n&&r.process,s=function(){try{var e=o&&o.require&&o.require("util").types;return e||i&&i.binding&&i.binding("util")}catch(e){}}();e.exports=s}(Lu,Lu.exports);var Pu=Lu.exports,Wu=Ru,Vu=ju,Nu=Pu&&Pu.isTypedArray,Yu=Nu?Vu(Nu):Wu,Uu=yu,qu=ku,Gu=ae,Zu=Du,Qu=Mu,Xu=Yu,Ku=Object.prototype.hasOwnProperty;var Ju=function(e,t){var r=Gu(e),n=!r&&qu(e),o=!r&&!n&&Zu(e),i=!r&&!n&&!o&&Xu(e),s=r||n||o||i,a=s?Uu(e.length,String):[],l=a.length;for(var d in e)!t&&!Ku.call(e,d)||s&&("length"==d||o&&("offset"==d||"parent"==d)||i&&("buffer"==d||"byteLength"==d||"byteOffset"==d)||Qu(d,l))||a.push(d);return a},eh=Object.prototype;var th=function(e){var t=e&&e.constructor;return e===("function"==typeof t&&t.prototype||eh)};var rh=function(e,t){return function(r){return e(t(r))}}(Object.keys,Object),nh=th,oh=rh,ih=Object.prototype.hasOwnProperty;var sh=function(e){if(!nh(e))return oh(e);var t=[];for(var r in Object(e))ih.call(e,r)&&"constructor"!=r&&t.push(r);return t},ah=He,lh=_u;var dh=function(e){return null!=e&&lh(e.length)&&!ah(e)},ch=Ju,uh=sh,hh=dh;var gh=function(e){return hh(e)?ch(e):uh(e)},mh=gu,fh=vu,ph=gh;var bh=function(e){return mh(e,ph,fh)},vh=Object.prototype.hasOwnProperty;var yh=function(e,t,r,n,o,i){var s=1&r,a=bh(e),l=a.length;if(l!=bh(t).length&&!s)return!1;for(var d=l;d--;){var c=a[d];if(!(s?c in t:vh.call(t,c)))return!1}var u=i.get(e),h=i.get(t);if(u&&h)return u==t&&h==e;var g=!0;i.set(e,t),i.set(t,e);for(var m=s;++d<l;){var f=e[c=a[d]],p=t[c];if(n)var b=s?n(p,f,c,t,e,i):n(f,p,c,e,t,i);if(!(void 0===b?f===p||o(f,p,r,n,i):b)){g=!1;break}m||(m="constructor"==c)}if(g&&!m){var v=e.constructor,y=t.constructor;v==y||!("constructor"in e)||!("constructor"in t)||"function"==typeof v&&v instanceof v&&"function"==typeof y&&y instanceof y||(g=!1)}return i.delete(e),i.delete(t),g},xh=rt(ue,"DataView"),wh=Wt,$h=rt(ue,"Promise"),Ch=rt(ue,"Set"),Fh=rt(ue,"WeakMap"),Sh=Ce,Eh=We,kh="[object Map]",Ih="[object Promise]",Th="[object Set]",Dh="[object WeakMap]",zh="[object DataView]",Mh=Eh(xh),_h=Eh(wh),Oh=Eh($h),Ah=Eh(Ch),Bh=Eh(Fh),Hh=Sh;(xh&&Hh(new xh(new ArrayBuffer(1)))!=zh||wh&&Hh(new wh)!=kh||$h&&Hh($h.resolve())!=Ih||Ch&&Hh(new Ch)!=Th||Fh&&Hh(new Fh)!=Dh)&&(Hh=function(e){var t=Sh(e),r="[object Object]"==t?e.constructor:void 0,n=r?Eh(r):"";if(n)switch(n){case Mh:return zh;case _h:return kh;case Oh:return Ih;case Ah:return Th;case Bh:return Dh}return t});var Rh=Yc,jh=eu,Lh=du,Ph=yh,Wh=Hh,Vh=ae,Nh=Du,Yh=Yu,Uh="[object Arguments]",qh="[object Array]",Gh="[object Object]",Zh=Object.prototype.hasOwnProperty;var Qh=function(e,t,r,n,o,i){var s=Vh(e),a=Vh(t),l=s?qh:Wh(e),d=a?qh:Wh(t),c=(l=l==Uh?Gh:l)==Gh,u=(d=d==Uh?Gh:d)==Gh,h=l==d;if(h&&Nh(e)){if(!Nh(t))return!1;s=!0,c=!1}if(h&&!c)return i||(i=new Rh),s||Yh(e)?jh(e,t,r,n,o,i):Lh(e,t,l,r,n,o,i);if(!(1&r)){var g=c&&Zh.call(e,"__wrapped__"),m=u&&Zh.call(t,"__wrapped__");if(g||m){var f=g?e.value():e,p=m?t.value():t;return i||(i=new Rh),o(f,p,r,n,i)}}return!!h&&(i||(i=new Rh),Ph(e,t,r,n,o,i))},Xh=Fe;var Kh=function e(t,r,n,o,i){return t===r||(null==t||null==r||!Xh(t)&&!Xh(r)?t!=t&&r!=r:Qh(t,r,n,o,e,i))},Jh=Yc,eg=Kh;var tg=function(e,t,r,n){var o=r.length,i=o,s=!n;if(null==e)return!i;for(e=Object(e);o--;){var a=r[o];if(s&&a[2]?a[1]!==e[a[0]]:!(a[0]in e))return!1}for(;++o<i;){var l=(a=r[o])[0],d=e[l],c=a[1];if(s&&a[2]){if(void 0===d&&!(l in e))return!1}else{var u=new Jh;if(n)var h=n(d,c,l,e,t,u);if(!(void 0===h?eg(c,d,3,n,u):h))return!1}}return!0},rg=_e;var ng=function(e){return e==e&&!rg(e)},og=ng,ig=gh;var sg=function(e){for(var t=ig(e),r=t.length;r--;){var n=t[r],o=e[n];t[r]=[n,o,og(o)]}return t};var ag=function(e,t){return function(r){return null!=r&&(r[e]===t&&(void 0!==t||e in Object(r)))}},lg=tg,dg=sg,cg=ag;var ug=function(e,t){return null!=e&&t in Object(e)},hg=kr,gg=ku,mg=ae,fg=Mu,pg=_u,bg=Tr;var vg=function(e,t,r){for(var n=-1,o=(t=hg(t,e)).length,i=!1;++n<o;){var s=bg(t[n]);if(!(i=null!=e&&r(e,s)))break;e=e[s]}return i||++n!=o?i:!!(o=null==e?0:e.length)&&pg(o)&&fg(s,o)&&(mg(e)||gg(e))},yg=ug,xg=vg;var wg=Kh,$g=Or,Cg=function(e,t){return null!=e&&xg(e,t,yg)},Fg=Me,Sg=ng,Eg=ag,kg=Tr;var Ig=function(e){return function(t){return null==t?void 0:t[e]}},Tg=Mr;var Dg=Ig,zg=function(e){return function(t){return Tg(t,e)}},Mg=Me,_g=Tr;var Og=function(e){var t=dg(e);return 1==t.length&&t[0][2]?cg(t[0][0],t[0][1]):function(r){return r===e||lg(r,e,t)}},Ag=function(e,t){return Fg(e)&&Sg(t)?Eg(kg(e),t):function(r){var n=$g(r,e);return void 0===n&&n===t?Cg(r,e):wg(t,n,3)}},Bg=function(e){return e},Hg=ae,Rg=function(e){return Mg(e)?Dg(_g(e)):zg(e)};var jg=function(e){return"function"==typeof e?e:null==e?Bg:"object"==typeof e?Hg(e)?Ag(e[0],e[1]):Og(e):Rg(e)},Lg=jg,Pg=dh,Wg=gh;var Vg=function(e){return function(t,r,n){var o=Object(t);if(!Pg(t)){var i=Lg(r);t=Wg(t),r=function(e){return i(o[e],e,o)}}var s=e(t,r,n);return s>-1?o[i?t[s]:s]:void 0}};var Ng=/\s/;var Yg=function(e){for(var t=e.length;t--&&Ng.test(e.charAt(t)););return t},Ug=/^\s+/;var qg=function(e){return e?e.slice(0,Yg(e)+1).replace(Ug,""):e},Gg=_e,Zg=ke,Qg=/^[-+]0x[0-9a-f]+$/i,Xg=/^0b[01]+$/i,Kg=/^0o[0-7]+$/i,Jg=parseInt;var em=function(e){if("number"==typeof e)return e;if(Zg(e))return NaN;if(Gg(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=Gg(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=qg(e);var r=Xg.test(e);return r||Kg.test(e)?Jg(e.slice(2),r?2:8):Qg.test(e)?NaN:+e},tm=1/0;var rm=function(e){return e?(e=em(e))===tm||e===-1/0?17976931348623157e292*(e<0?-1:1):e==e?e:0:0===e?e:0};var nm=function(e,t,r,n){for(var o=e.length,i=r+(n?1:-1);n?i--:++i<o;)if(t(e[i],i,e))return i;return-1},om=jg,im=function(e){var t=rm(e),r=t%1;return t==t?r?t-r:t:0},sm=Math.max;var am=se(Vg((function(e,t,r){var n=null==e?0:e.length;if(!n)return-1;var o=null==r?0:im(r);return o<0&&(o=sm(n+o,0)),nm(e,om(t),o)}))),lm=Kh;var dm=se((function(e,t){return lm(e,t)}));const cm=0,um=1,hm=2,gm=4;function mm(e){return()=>e}function fm(e){e()}function pm(e,t){return r=>e(t(r))}function bm(e,t){return()=>e(t)}function vm(e,t){return r=>e(t,r)}function ym(e){return void 0!==e}function xm(){}function wm(e,t){return t(e),e}function $m(e,t){return t(e)}function Cm(...e){return e}function Fm(e,t){return e(um,t)}function Sm(e,t){e(cm,t)}function Em(e){e(hm)}function km(e){return e(gm)}function Im(e,t){return Fm(e,vm(t,cm))}function Tm(e,t){const r=e(um,(e=>{r(),t(e)}));return r}function Dm(e){let t,r;return n=>o=>{t=o,r&&clearTimeout(r),r=setTimeout((()=>{n(t)}),e)}}function zm(e,t){return e===t}function Mm(e=zm){let t;return r=>n=>{e(t,n)||(t=n,r(n))}}function _m(e){return t=>r=>{e(r)&&t(r)}}function Om(e){return t=>pm(t,e)}function Am(e){return t=>()=>{t(e)}}function Bm(e,...t){const r=function(...e){return t=>e.reduceRight($m,t)}(...t);return(t,n)=>{switch(t){case hm:return void Em(e);case um:return Fm(e,r(n))}}}function Hm(e,t){return r=>n=>{r(t=e(t,n))}}function Rm(e){return t=>r=>{e>0?e--:t(r)}}function jm(e){let t,r=null;return n=>o=>{r=o,!t&&(t=setTimeout((()=>{t=void 0,n(r)}),e))}}function Lm(...e){const t=new Array(e.length);let r=0,n=null;const o=Math.pow(2,e.length)-1;return e.forEach(((e,i)=>{const s=Math.pow(2,i);Fm(e,(e=>{const a=r;r|=s,t[i]=e,a!==o&&r===o&&n&&(n(),n=null)}))})),e=>i=>{const s=()=>{e([i].concat(t))};r===o?s():n=s}}function Pm(e){let t=e;const r=Vm();return(e,n)=>{switch(e){case cm:t=n;break;case um:n(t);break;case gm:return t}return r(e,n)}}function Wm(e,t){return wm(Pm(t),(t=>Im(e,t)))}function Vm(){const e=[];return(t,r)=>{switch(t){case cm:return void e.slice().forEach((e=>{e(r)}));case hm:return void e.splice(0,e.length);case um:return e.push(r),()=>{const t=e.indexOf(r);t>-1&&e.splice(t,1)}}}}function Nm(e){return wm(Vm(),(t=>Im(e,t)))}function Ym(e,t=[],{singleton:r}={singleton:!0}){return{constructor:e,dependencies:t,id:Um(),singleton:r}}const Um=()=>Symbol();function qm(...e){const t=Vm(),r=new Array(e.length);let n=0;const o=Math.pow(2,e.length)-1;return e.forEach(((e,i)=>{const s=Math.pow(2,i);Fm(e,(e=>{r[i]=e,n|=s,n===o&&Sm(t,r)}))})),function(e,i){switch(e){case hm:return void Em(t);case um:return n===o&&i(r),Fm(t,i)}}}function Gm(e,t=zm){return Bm(e,Mm(t))}function Zm(...e){return function(t,r){switch(t){case hm:return;case um:return function(...e){return()=>{e.map(fm)}}(...e.map((e=>Fm(e,r))))}}}var Qm=(e=>(e[e.DEBUG=0]="DEBUG",e[e.INFO=1]="INFO",e[e.WARN=2]="WARN",e[e.ERROR=3]="ERROR",e))(Qm||{});const Xm={0:"debug",3:"error",1:"log",2:"warn"},Km=Ym((()=>{const e=Pm(3);return{log:Pm(((t,r,n=1)=>{var o;n>=(null!=(o=(typeof globalThis>"u"?window:globalThis).VIRTUOSO_LOG_LEVEL)?o:km(e))&&console[Xm[n]]("%creact-virtuoso: %c%s %o","color: #0253b3; font-weight: bold","color: initial",t,r)})),logLevel:e}}),[],{singleton:!0});function Jm(e,t,r){return ef(e,t,r).callbackRef}function ef(e,t,r){const n=o.useRef(null);let i=e=>{};if(typeof ResizeObserver<"u"){const s=o.useMemo((()=>new ResizeObserver((t=>{const n=()=>{const r=t[0].target;null!==r.offsetParent&&e(r)};r?n():requestAnimationFrame(n)}))),[e]);i=e=>{e&&t?(s.observe(e),n.current=e):(n.current&&s.unobserve(n.current),n.current=null)}}return{callbackRef:i,ref:n}}function tf(e,t,r,n,i,s,a,l,d){const c=o.useCallback((r=>{const o=function(e,t,r,n){const o=e.length;if(0===o)return null;const i=[];for(let s=0;s<o;s++){const o=e.item(s);if(void 0===o.dataset.index)continue;const a=parseInt(o.dataset.index),l=parseFloat(o.dataset.knownSize),d=t(o,r);if(0===d&&n("Zero-sized element, this should not happen",{child:o},Qm.ERROR),d===l)continue;const c=i[i.length-1];0===i.length||c.size!==d||c.endIndex!==a-1?i.push({endIndex:a,size:d,startIndex:a}):i[i.length-1].endIndex++}return i}(r.children,t,l?"offsetWidth":"offsetHeight",i);let d=r.parentElement;for(;!d.dataset.virtuosoScroller;)d=d.parentElement;const c="window"===d.lastElementChild.dataset.viewportType,u=a?l?a.scrollLeft:a.scrollTop:c?l?window.pageXOffset||document.documentElement.scrollLeft:window.pageYOffset||document.documentElement.scrollTop:l?d.scrollLeft:d.scrollTop,h=a?l?a.scrollWidth:a.scrollHeight:c?l?document.documentElement.scrollWidth:document.documentElement.scrollHeight:l?d.scrollWidth:d.scrollHeight,g=a?l?a.offsetWidth:a.offsetHeight:c?l?window.innerWidth:window.innerHeight:l?d.offsetWidth:d.offsetHeight;n({scrollHeight:h,scrollTop:Math.max(u,0),viewportHeight:g}),null==s||s(l?rf("column-gap",getComputedStyle(r).columnGap,i):rf("row-gap",getComputedStyle(r).rowGap,i)),null!==o&&e(o)}),[e,t,i,s,a,n]);return ef(c,r,d)}function rf(e,t,r){return"normal"!==t&&!(null!=t&&t.endsWith("px"))&&r(`${e} was not resolved to pixel value correctly`,t,Qm.WARN),"normal"===t?0:parseInt(null!=t?t:"0",10)}function nf(e,t,r){const n=o.useRef(null),i=o.useCallback((r=>{if(null==r||!r.offsetParent)return;const o=r.getBoundingClientRect(),i=o.width;let s,a;if(t){const e=t.getBoundingClientRect(),r=o.top-e.top;a=e.height-Math.max(0,r),s=r+t.scrollTop}else a=window.innerHeight-Math.max(0,o.top),s=o.top+window.pageYOffset;n.current={offsetTop:s,visibleHeight:a,visibleWidth:i},e(n.current)}),[e,t]),{callbackRef:s,ref:a}=ef(i,!0,r),l=o.useCallback((()=>{i(a.current)}),[i,a]);return o.useEffect((()=>{if(t){t.addEventListener("scroll",l);const e=new ResizeObserver((()=>{requestAnimationFrame(l)}));return e.observe(t),()=>{t.removeEventListener("scroll",l),e.unobserve(t)}}return window.addEventListener("scroll",l),window.addEventListener("resize",l),()=>{window.removeEventListener("scroll",l),window.removeEventListener("resize",l)}}),[l,t]),s}const of=Ym((()=>{const e=Vm(),t=Vm(),r=Pm(0),n=Vm(),o=Pm(0),i=Vm(),s=Vm(),a=Pm(0),l=Pm(0),d=Pm(0),c=Pm(0),u=Vm(),h=Vm(),g=Pm(!1),m=Pm(!1),f=Pm(!1);return Im(Bm(e,Om((({scrollTop:e})=>e))),t),Im(Bm(e,Om((({scrollHeight:e})=>e))),s),Im(t,o),{deviation:r,fixedFooterHeight:d,fixedHeaderHeight:l,footerHeight:c,headerHeight:a,horizontalDirection:m,scrollBy:h,scrollContainerState:e,scrollHeight:s,scrollingInProgress:g,scrollTo:u,scrollTop:t,skipAnimationFrameInResizeObserver:f,smoothScrollTargetReached:n,statefulScrollTop:o,viewportHeight:i}}),[],{singleton:!0}),sf={lvl:0};function af(e,t){const r=e.length;if(0===r)return[];let{index:n,value:o}=t(e[0]);const i=[];for(let s=1;s<r;s++){const{index:r,value:a}=t(e[s]);i.push({end:r-1,start:n,value:o}),n=r,o=a}return i.push({end:1/0,start:n,value:o}),i}function lf(e){return e===sf}function df(e,t){if(!lf(e))return t===e.k?e.v:t<e.k?df(e.l,t):df(e.r,t)}function cf(e,t,r="k"){if(lf(e))return[-1/0,void 0];if(Number(e[r])===t)return[e.k,e.v];if(Number(e[r])<t){const n=cf(e.r,t,r);return n[0]===-1/0?[e.k,e.v]:n}return cf(e.l,t,r)}function uf(e,t,r){return lf(e)?$f(t,r,1):t===e.k?vf(e,{k:t,v:r}):t<e.k?Cf(vf(e,{l:uf(e.l,t,r)})):Cf(vf(e,{r:uf(e.r,t,r)}))}function hf(){return sf}function gf(e,t,r){if(lf(e))return[];return function(e){return af(e,(({k:e,v:t})=>({index:e,value:t})))}(pf(e,cf(e,t)[0],r))}function mf(e,t){if(lf(e))return sf;const{k:r,l:n,r:o}=e;if(t===r){if(lf(n))return o;if(lf(o))return n;{const[t,r]=wf(n);return bf(vf(e,{k:t,l:yf(n),v:r}))}}return bf(vf(e,t<r?{l:mf(n,t)}:{r:mf(o,t)}))}function ff(e){return lf(e)?[]:[...ff(e.l),{k:e.k,v:e.v},...ff(e.r)]}function pf(e,t,r){if(lf(e))return[];const{k:n,l:o,r:i,v:s}=e;let a=[];return n>t&&(a=a.concat(pf(o,t,r))),n>=t&&n<=r&&a.push({k:n,v:s}),n<=r&&(a=a.concat(pf(i,t,r))),a}function bf(e){const{l:t,lvl:r,r:n}=e;if(n.lvl>=r-1&&t.lvl>=r-1)return e;if(r>n.lvl+1){if(xf(t))return Ff(vf(e,{lvl:r-1}));if(!lf(t)&&!lf(t.r))return vf(t.r,{l:vf(t,{r:t.r.l}),lvl:r,r:vf(e,{l:t.r.r,lvl:r-1})});throw new Error("Unexpected empty nodes")}if(xf(e))return Sf(vf(e,{lvl:r-1}));if(lf(n)||lf(n.l))throw new Error("Unexpected empty nodes");{const t=n.l,o=xf(t)?n.lvl-1:n.lvl;return vf(t,{l:vf(e,{lvl:r-1,r:t.l}),lvl:t.lvl+1,r:Sf(vf(n,{l:t.r,lvl:o}))})}}function vf(e,t){return $f(void 0!==t.k?t.k:e.k,void 0!==t.v?t.v:e.v,void 0!==t.lvl?t.lvl:e.lvl,void 0!==t.l?t.l:e.l,void 0!==t.r?t.r:e.r)}function yf(e){return lf(e.r)?e.l:bf(vf(e,{r:yf(e.r)}))}function xf(e){return lf(e)||e.lvl>e.r.lvl}function wf(e){return lf(e.r)?[e.k,e.v]:wf(e.r)}function $f(e,t,r,n=sf,o=sf){return{k:e,l:n,lvl:r,r:o,v:t}}function Cf(e){return Sf(Ff(e))}function Ff(e){const{l:t}=e;return lf(t)||t.lvl!==e.lvl?e:vf(t,{r:vf(e,{l:t.r})})}function Sf(e){const{lvl:t,r:r}=e;return lf(r)||lf(r.r)||r.lvl!==t||r.r.lvl!==t?e:vf(r,{l:vf(e,{r:r.l}),lvl:t+1})}function Ef(e,t){return!(!e||e.startIndex!==t.startIndex||e.endIndex!==t.endIndex)}function kf(e,t){return!(!e||e[0]!==t[0]||e[1]!==t[1])}const If=Ym((()=>({recalcInProgress:Pm(!1)})),[],{singleton:!0});function Tf(e,t,r){return e[Df(e,t,r)]}function Df(e,t,r,n=0){let o=e.length-1;for(;n<=o;){const i=Math.floor((n+o)/2),s=r(e[i],t);if(0===s)return i;if(-1===s){if(o-n<2)return i-1;o=i-1}else{if(o===n)return i;n=i+1}}throw new Error(`Failed binary finding record in array - ${e.join(",")}, searched for ${t}`)}function zf(e,t){return Math.round(e.getBoundingClientRect()[t])}function Mf(e){return!lf(e.groupOffsetTree)}function _f({index:e},t){return t===e?0:t<e?-1:1}function Of({offset:e},t){return t===e?0:t<e?-1:1}function Af(e,t,r){if(0===t.length)return 0;const{index:n,offset:o,size:i}=Tf(t,e,_f),s=e-n,a=i*s+(s-1)*r+o;return a>0?a+r:a}function Bf(e,t){if(!Mf(t))return e;let r=0;for(;t.groupIndices[r]<=e+r;)r++;return e+r}function Hf(e,t,r){if(function(e){return typeof e.groupIndex<"u"}(e))return t.groupIndices[e.groupIndex]+1;{let n=Bf("LAST"===e.index?r:e.index,t);return n=Math.max(0,n,Math.min(r,n)),n}}function Rf(e,t,r,n=0){return n>0&&(t=Math.max(t,Tf(e,n,_f).offset)),af(function(e,t,r,n){const o=Df(e,t,n),i=Df(e,r,n,o);return e.slice(o,i+1)}(e,t,r,Of),Wf)}function jf(e,[t,r,n,o]){t.length>0&&n("received item sizes",t,Qm.DEBUG);const i=e.sizeTree;let s=i,a=0;if(r.length>0&&lf(i)&&2===t.length){const e=t[0].size,n=t[1].size;s=r.reduce(((t,r)=>uf(uf(t,r,e),r+1,n)),s)}else[s,a]=function(e,t){let r=lf(e)?0:1/0;for(const n of t){const{endIndex:t,size:o,startIndex:i}=n;if(r=Math.min(r,i),lf(e)){e=uf(e,0,o);continue}const s=gf(e,i-1,t+1);if(s.some(Vf(n)))continue;let a=!1,l=!1;for(const{end:r,start:n,value:i}of s)a?(t>=n||o===i)&&(e=mf(e,n)):(l=i!==o,a=!0),r>t&&t>=n&&i!==o&&(e=uf(e,t+1,i));l&&(e=uf(e,i,o))}return[e,r]}(s,t);if(s===i)return e;const{lastIndex:l,lastOffset:d,lastSize:c,offsetTree:u}=Pf(e.offsetTree,a,s,o);return{groupIndices:r,groupOffsetTree:r.reduce(((e,t)=>uf(e,t,Af(t,u,o))),hf()),lastIndex:l,lastOffset:d,lastSize:c,offsetTree:u,sizeTree:s}}function Lf(e,t){let r=0,n=0;for(;r<e;)r+=t[n+1]-t[n]-1,n++;return n-(r===e?0:1)}function Pf(e,t,r,n){let o=e,i=0,s=0,a=0,l=0;if(0!==t){l=Df(o,t-1,_f),a=o[l].offset;const e=cf(r,t-1);i=e[0],s=e[1],o.length&&o[l].size===cf(r,t)[1]&&(l-=1),o=o.slice(0,l+1)}else o=[];for(const{start:e,value:l}of gf(r,t,1/0)){const t=e-i,r=t*s+a+t*n;o.push({index:e,offset:r,size:l}),i=e,a=r,s=l}return{lastIndex:i,lastOffset:a,lastSize:s,offsetTree:o}}function Wf(e){return{index:e.index,value:e}}function Vf(e){const{endIndex:t,size:r,startIndex:n}=e;return e=>e.start===n&&(e.end===t||e.end===1/0)&&e.value===r}const Nf={offsetHeight:"height",offsetWidth:"width"},Yf=Ym((([{log:e},{recalcInProgress:t}])=>{const r=Vm(),n=Vm(),o=Wm(n,0),i=Vm(),s=Vm(),a=Pm(0),l=Pm([]),d=Pm(void 0),c=Pm(void 0),u=Pm(((e,t)=>zf(e,Nf[t]))),h=Pm(void 0),g=Pm(0),m={groupIndices:[],groupOffsetTree:hf(),lastIndex:0,lastOffset:0,lastSize:0,offsetTree:[],sizeTree:hf()},f=Wm(Bm(r,Lm(l,e,g),Hm(jf,m),Mm()),m),p=Wm(Bm(l,Mm(),Hm(((e,t)=>({current:t,prev:e.current})),{current:[],prev:[]}),Om((({prev:e})=>e))),[]);Im(Bm(l,_m((e=>e.length>0)),Lm(f,g),Om((([e,t,r])=>{const n=e.reduce(((e,n,o)=>uf(e,n,Af(n,t.offsetTree,r)||o)),hf());return{...t,groupIndices:e,groupOffsetTree:n}}))),f),Im(Bm(n,Lm(f),_m((([e,{lastIndex:t}])=>e<t)),Om((([e,{lastIndex:t,lastSize:r}])=>[{endIndex:t,size:r,startIndex:e}]))),r),Im(d,c);const b=Wm(Bm(d,Om((e=>void 0===e))),!0);Im(Bm(c,_m((e=>void 0!==e&&lf(km(f).sizeTree))),Om((e=>[{endIndex:0,size:e,startIndex:0}]))),r);const v=Nm(Bm(r,Lm(f),Hm((({sizes:e},[t,r])=>({changed:r!==e,sizes:r})),{changed:!1,sizes:m}),Om((e=>e.changed))));Fm(Bm(a,Hm(((e,t)=>({diff:e.prev-t,prev:t})),{diff:0,prev:0}),Om((e=>e.diff))),(e=>{const{groupIndices:r}=km(f);if(e>0)Sm(t,!0),Sm(i,e+Lf(e,r));else if(e<0){const t=km(p);t.length>0&&(e-=Lf(-e,t)),Sm(s,e)}})),Fm(Bm(a,Lm(e)),(([e,t])=>{e<0&&t("`firstItemIndex` prop should not be set to less than zero. If you don't know the total count, just use a very high value",{firstItemIndex:a},Qm.ERROR)}));const y=Nm(i);Im(Bm(i,Lm(f),Om((([e,t])=>{const r=t.groupIndices.length>0,n=[],o=t.lastSize;if(r){const r=df(t.sizeTree,0);let i=0,s=0;for(;i<e;){const e=t.groupIndices[s],a=t.groupIndices.length===s+1?1/0:t.groupIndices[s+1]-e-1;n.push({endIndex:e,size:r,startIndex:e}),n.push({endIndex:e+1+a-1,size:o,startIndex:e+1}),s++,i+=a+1}const a=ff(t.sizeTree);return i!==e&&a.shift(),a.reduce(((t,{k:r,v:n})=>{let o=t.ranges;return 0!==t.prevSize&&(o=[...t.ranges,{endIndex:r+e-1,size:t.prevSize,startIndex:t.prevIndex}]),{prevIndex:r+e,prevSize:n,ranges:o}}),{prevIndex:e,prevSize:0,ranges:n}).ranges}return ff(t.sizeTree).reduce(((t,{k:r,v:n})=>({prevIndex:r+e,prevSize:n,ranges:[...t.ranges,{endIndex:r+e-1,size:t.prevSize,startIndex:t.prevIndex}]})),{prevIndex:0,prevSize:o,ranges:[]}).ranges}))),r);const x=Nm(Bm(s,Lm(f,g),Om((([e,{offsetTree:t},r])=>Af(-e,t,r)))));return Im(Bm(s,Lm(f,g),Om((([e,t,r])=>{if(t.groupIndices.length>0){if(lf(t.sizeTree))return t;let n=hf();const o=km(p);let i=0,s=0,a=0;for(;i<-e;){a=o[s];const e=o[s+1]-a-1;s++,i+=e+1}if(n=ff(t.sizeTree).reduce(((t,{k:r,v:n})=>uf(t,Math.max(0,r+e),n)),n),i!==-e){n=uf(n,0,df(t.sizeTree,a));n=uf(n,1,cf(t.sizeTree,1-e)[1])}return{...t,sizeTree:n,...Pf(t.offsetTree,0,n,r)}}{const n=ff(t.sizeTree).reduce(((t,{k:r,v:n})=>uf(t,Math.max(0,r+e),n)),hf());return{...t,sizeTree:n,...Pf(t.offsetTree,0,n,r)}}}))),f),{beforeUnshiftWith:y,data:h,defaultItemSize:c,firstItemIndex:a,fixedItemSize:d,gap:g,groupIndices:l,itemSize:u,listRefresh:v,shiftWith:s,shiftWithOffset:x,sizeRanges:r,sizes:f,statefulTotalCount:o,totalCount:n,trackItemSizes:b,unshiftWith:i}}),Cm(Km,If),{singleton:!0});function Uf(e){return e.reduce(((e,t)=>(e.groupIndices.push(e.totalCount),e.totalCount+=t+1,e)),{groupIndices:[],totalCount:0})}const qf=Ym((([{groupIndices:e,sizes:t,totalCount:r},{headerHeight:n,scrollTop:o}])=>{const i=Vm(),s=Vm(),a=Nm(Bm(i,Om(Uf)));return Im(Bm(a,Om((e=>e.totalCount))),r),Im(Bm(a,Om((e=>e.groupIndices))),e),Im(Bm(qm(o,t,n),_m((([e,t])=>Mf(t))),Om((([e,t,r])=>cf(t.groupOffsetTree,Math.max(e-r,0),"v")[0])),Mm(),Om((e=>[e]))),s),{groupCounts:i,topItemsIndexes:s}}),Cm(Yf,of)),Gf=Ym((([{log:e}])=>{const t=Pm(!1),r=Nm(Bm(t,_m((e=>e)),Mm()));return Fm(t,(t=>{t&&km(e)("props updated",{},Qm.DEBUG)})),{didMount:r,propsReady:t}}),Cm(Km),{singleton:!0}),Zf=typeof document<"u"&&"scrollBehavior"in document.documentElement.style;function Qf(e){const t="number"==typeof e?{index:e}:e;return t.align||(t.align="start"),(!t.behavior||!Zf)&&(t.behavior="auto"),t.offset||(t.offset=0),t}const Xf=Ym((([{gap:e,listRefresh:t,sizes:r,totalCount:n},{fixedFooterHeight:o,fixedHeaderHeight:i,footerHeight:s,headerHeight:a,scrollingInProgress:l,scrollTo:d,smoothScrollTargetReached:c,viewportHeight:u},{log:h}])=>{const g=Vm(),m=Vm(),f=Pm(0);let p=null,b=null,v=null;function y(){p&&(p(),p=null),v&&(v(),v=null),b&&(clearTimeout(b),b=null),Sm(l,!1)}return Im(Bm(g,Lm(r,u,n,f,a,s,h),Lm(e,i,o),Om((([[e,r,n,o,i,s,a,d],u,h,f])=>{const x=Qf(e),{align:w,behavior:$,offset:C}=x,F=o-1,S=Hf(x,r,F);let E=Af(S,r.offsetTree,u)+s;"end"===w?(E+=h+cf(r.sizeTree,S)[1]-n+f,S===F&&(E+=a)):"center"===w?E+=(h+cf(r.sizeTree,S)[1]-n+f)/2:E-=i,C&&(E+=C);const k=t=>{y(),t?(d("retrying to scroll to",{location:e},Qm.DEBUG),Sm(g,e)):(Sm(m,!0),d("list did not change, scroll successful",{},Qm.DEBUG))};if(y(),"smooth"===$){let e=!1;v=Fm(t,(t=>{e=e||t})),p=Tm(c,(()=>{k(e)}))}else p=Tm(Bm(t,function(e){return t=>{const r=setTimeout((()=>{t(!1)}),e);return e=>{e&&(t(!0),clearTimeout(r))}}}(150)),k);return b=setTimeout((()=>{y()}),1200),Sm(l,!0),d("scrolling from index to",{behavior:$,index:S,top:E},Qm.DEBUG),{behavior:$,top:E}}))),d),{scrollTargetReached:m,scrollToIndex:g,topListHeight:f}}),Cm(Yf,of,Km),{singleton:!0});function Kf(e,t){0==e?t():requestAnimationFrame((()=>{Kf(e-1,t)}))}function Jf(e,t){const r=t-1;return"number"==typeof e?e:"LAST"===e.index?r:e.index}const ep=Ym((([{defaultItemSize:e,listRefresh:t,sizes:r},{scrollTop:n},{scrollTargetReached:o,scrollToIndex:i},{didMount:s}])=>{const a=Pm(!0),l=Pm(0),d=Pm(!0);return Im(Bm(s,Lm(l),_m((([e,t])=>!!t)),Am(!1)),a),Im(Bm(s,Lm(l),_m((([e,t])=>!!t)),Am(!1)),d),Fm(Bm(qm(t,s),Lm(a,r,e,d),_m((([[,e],t,{sizeTree:r},n,o])=>e&&(!lf(r)||ym(n))&&!t&&!o)),Lm(l)),(([,e])=>{Tm(o,(()=>{Sm(d,!0)})),Kf(4,(()=>{Tm(n,(()=>{Sm(a,!0)})),Sm(i,e)}))})),{initialItemFinalLocationReached:d,initialTopMostItemIndex:l,scrolledToInitialItem:a}}),Cm(Yf,of,Xf,Gf),{singleton:!0});function tp(e,t){return Math.abs(e-t)<1.01}const rp="up",np="down",op={atBottom:!1,notAtBottomBecause:"NOT_SHOWING_LAST_ITEM",state:{offsetBottom:0,scrollHeight:0,scrollTop:0,viewportHeight:0}},ip=Ym((([{footerHeight:e,headerHeight:t,scrollBy:r,scrollContainerState:n,scrollTop:o,viewportHeight:i}])=>{const s=Pm(!1),a=Pm(!0),l=Vm(),d=Vm(),c=Pm(4),u=Pm(0),h=Wm(Bm(Zm(Bm(Gm(o),Rm(1),Am(!0)),Bm(Gm(o),Rm(1),Am(!1),Dm(100))),Mm()),!1),g=Wm(Bm(Zm(Bm(r,Am(!0)),Bm(r,Am(!1),Dm(200))),Mm()),!1);Im(Bm(qm(Gm(o),Gm(u)),Om((([e,t])=>e<=t)),Mm()),a),Im(Bm(a,jm(50)),d);const m=Nm(Bm(qm(n,Gm(i),Gm(t),Gm(e),Gm(c)),Hm(((e,[{scrollHeight:t,scrollTop:r},n,o,i,s])=>{const a={scrollHeight:t,scrollTop:r,viewportHeight:n};if(r+n-t>-s){let t,n;return r>e.state.scrollTop?(t="SCROLLED_DOWN",n=e.state.scrollTop-r):(t="SIZE_DECREASED",n=e.state.scrollTop-r||e.scrollTopDelta),{atBottom:!0,atBottomBecause:t,scrollTopDelta:n,state:a}}let l;return l=a.scrollHeight>e.state.scrollHeight?"SIZE_INCREASED":n<e.state.viewportHeight?"VIEWPORT_HEIGHT_DECREASING":r<e.state.scrollTop?"SCROLLING_UPWARDS":"NOT_FULLY_SCROLLED_TO_LAST_ITEM_BOTTOM",{atBottom:!1,notAtBottomBecause:l,state:a}}),op),Mm(((e,t)=>e&&e.atBottom===t.atBottom)))),f=Wm(Bm(n,Hm(((e,{scrollHeight:t,scrollTop:r,viewportHeight:n})=>{if(tp(e.scrollHeight,t))return{changed:!1,jump:0,scrollHeight:t,scrollTop:r};{const o=t-(r+n)<1;return e.scrollTop!==r&&o?{changed:!0,jump:e.scrollTop-r,scrollHeight:t,scrollTop:r}:{changed:!0,jump:0,scrollHeight:t,scrollTop:r}}}),{changed:!1,jump:0,scrollHeight:0,scrollTop:0}),_m((e=>e.changed)),Om((e=>e.jump))),0);Im(Bm(m,Om((e=>e.atBottom))),s),Im(Bm(s,jm(50)),l);const p=Pm(np);Im(Bm(n,Om((({scrollTop:e})=>e)),Mm(),Hm(((e,t)=>km(g)?{direction:e.direction,prevScrollTop:t}:{direction:t<e.prevScrollTop?rp:np,prevScrollTop:t}),{direction:np,prevScrollTop:0}),Om((e=>e.direction))),p),Im(Bm(n,jm(50),Am("none")),p);const b=Pm(0);return Im(Bm(h,_m((e=>!e)),Am(0)),b),Im(Bm(o,jm(100),Lm(h),_m((([e,t])=>!!t)),Hm((([e,t],[r])=>[t,r]),[0,0]),Om((([e,t])=>t-e))),b),{atBottomState:m,atBottomStateChange:l,atBottomThreshold:c,atTopStateChange:d,atTopThreshold:u,isAtBottom:s,isAtTop:a,isScrolling:h,lastJumpDueToItemResize:f,scrollDirection:p,scrollVelocity:b}}),Cm(of)),sp="top",ap="bottom",lp="none";function dp(e,t,r){return"number"==typeof e?r===rp&&t===sp||r===np&&t===ap?e:0:r===rp?t===sp?e.main:e.reverse:t===ap?e.main:e.reverse}function cp(e,t){var r;return"number"==typeof e?e:null!=(r=e[t])?r:0}const up=Ym((([{deviation:e,fixedHeaderHeight:t,headerHeight:r,scrollTop:n,viewportHeight:o}])=>{const i=Vm(),s=Pm(0),a=Pm(0),l=Pm(0);return{increaseViewportBy:a,listBoundary:i,overscan:l,topListHeight:s,visibleRange:Wm(Bm(qm(Gm(n),Gm(o),Gm(r),Gm(i,kf),Gm(l),Gm(s),Gm(t),Gm(e),Gm(a)),Om((([e,t,r,[n,o],i,s,a,l,d])=>{const c=e-l,u=s+a,h=Math.max(r-c,0);let g=lp;const m=cp(d,sp),f=cp(d,ap);return n-=l,o+=r+a,(n+=r+a)>e+u-m&&(g=rp),(o-=l)<e-h+t+f&&(g=np),g!==lp?[Math.max(c-r-dp(i,sp,g)-m,0),c-h-a+t+dp(i,ap,g)+f]:null})),_m((e=>null!=e)),Mm(kf)),[0,0])}}),Cm(of),{singleton:!0});const hp={bottom:0,firstItemIndex:0,items:[],offsetBottom:0,offsetTop:0,top:0,topItems:[],topListHeight:0,totalCount:0};function gp(e,t,r,n,o,i){const{lastIndex:s,lastOffset:a,lastSize:l}=o;let d=0,c=0;if(e.length>0){d=e[0].offset;const t=e[e.length-1];c=t.offset+t.size}const u=r-s,h=d,g=a+u*l+(u-1)*n-c;return{bottom:c,firstItemIndex:i,items:fp(e,o,i),offsetBottom:g,offsetTop:d,top:h,topItems:fp(t,o,i),topListHeight:t.reduce(((e,t)=>t.size+e),0),totalCount:r}}function mp(e,t,r,n,o,i){let s=0;if(r.groupIndices.length>0)for(const t of r.groupIndices){if(t-s>=e)break;s++}const a=e+s,l=Jf(t,a);return gp(Array.from({length:a}).map(((e,t)=>({data:i[t+l],index:t+l,offset:0,size:0}))),[],a,o,r,n)}function fp(e,t,r){if(0===e.length)return[];if(!Mf(t))return e.map((e=>({...e,index:e.index+r,originalIndex:e.index})));const n=e[0].index,o=e[e.length-1].index,i=[],s=gf(t.groupOffsetTree,n,o);let a,l=0;for(const n of e){let e;(!a||a.end<n.index)&&(a=s.shift(),l=t.groupIndices.indexOf(a.start)),e=n.index===a.start?{index:l,type:"group"}:{groupIndex:l,index:n.index-(l+1)+r},i.push({...e,data:n.data,offset:n.offset,originalIndex:n.index,size:n.size})}return i}const pp=Ym((([{data:e,firstItemIndex:t,gap:r,sizes:n,totalCount:o},i,{listBoundary:s,topListHeight:a,visibleRange:l},{initialTopMostItemIndex:d,scrolledToInitialItem:c},{topListHeight:u},h,{didMount:g},{recalcInProgress:m}])=>{const f=Pm([]),p=Pm(0),b=Vm();Im(i.topItemsIndexes,f);const v=Wm(Bm(qm(g,m,Gm(l,kf),Gm(o),Gm(n),Gm(d),c,Gm(f),Gm(t),Gm(r),e),_m((([e,t,,r,,,,,,,n])=>{const o=n&&n.length!==r;return e&&!t&&!o})),Om((([,,[e,t],r,n,o,i,s,a,l,d])=>{const c=n,{offsetTree:u,sizeTree:h}=c,g=km(p);if(0===r)return{...hp,totalCount:r};if(0===e&&0===t)return 0===g?{...hp,totalCount:r}:mp(g,o,n,a,l,d||[]);if(lf(h))return g>0?null:gp(function(e,t,r){if(Mf(t)){const n=Bf(e,t);return[{index:cf(t.groupOffsetTree,n)[0],offset:0,size:0},{data:null==r?void 0:r[0],index:n,offset:0,size:0}]}return[{data:null==r?void 0:r[0],index:e,offset:0,size:0}]}(Jf(o,r),c,d),[],r,l,c,a);const m=[];if(s.length>0){const e=s[0],t=s[s.length-1];let r=0;for(const n of gf(h,e,t)){const o=n.value,i=Math.max(n.start,e),s=Math.min(n.end,t);for(let e=i;e<=s;e++)m.push({data:null==d?void 0:d[e],index:e,offset:r,size:o}),r+=o}}if(!i)return gp([],m,r,l,c,a);const f=s.length>0?s[s.length-1]+1:0,b=Rf(u,e,t,f);if(0===b.length)return null;const v=r-1;return gp(wm([],(r=>{for(const n of b){const o=n.value;let i=o.offset,s=n.start;const a=o.size;if(o.offset<e){s+=Math.floor((e-o.offset+l)/(a+l));const t=s-n.start;i+=t*a+t*l}s<f&&(i+=(f-s)*a,s=f);const c=Math.min(n.end,v);for(let e=s;e<=c&&!(i>=t);e++)r.push({data:null==d?void 0:d[e],index:e,offset:i,size:a}),i+=a+l}})),m,r,l,c,a)})),_m((e=>null!==e)),Mm()),hp);Im(Bm(e,_m(ym),Om((e=>null==e?void 0:e.length))),o),Im(Bm(v,Om((e=>e.topListHeight))),u),Im(u,a),Im(Bm(v,Om((e=>[e.top,e.bottom]))),s),Im(Bm(v,Om((e=>e.items))),b);const y=Nm(Bm(v,_m((({items:e})=>e.length>0)),Lm(o,e),_m((([{items:e},t])=>e[e.length-1].originalIndex===t-1)),Om((([,e,t])=>[e-1,t])),Mm(kf),Om((([e])=>e)))),x=Nm(Bm(v,jm(200),_m((({items:e,topItems:t})=>e.length>0&&e[0].originalIndex===t.length)),Om((({items:e})=>e[0].index)),Mm())),w=Nm(Bm(v,_m((({items:e})=>e.length>0)),Om((({items:e})=>{let t=0,r=e.length-1;for(;"group"===e[t].type&&t<r;)t++;for(;"group"===e[r].type&&r>t;)r--;return{endIndex:e[r].index,startIndex:e[t].index}})),Mm(Ef)));return{endReached:y,initialItemCount:p,itemsRendered:b,listState:v,rangeChanged:w,startReached:x,topItemsIndexes:f,...h}}),Cm(Yf,qf,up,ep,Xf,ip,Gf,If),{singleton:!0}),bp=Ym((([{fixedFooterHeight:e,fixedHeaderHeight:t,footerHeight:r,headerHeight:n},{listState:o}])=>{const i=Vm(),s=Wm(Bm(qm(r,e,n,t,o),Om((([e,t,r,n,o])=>e+t+r+n+o.offsetBottom+o.bottom))),0);return Im(Gm(s),i),{totalListHeight:s,totalListHeightChanged:i}}),Cm(of,pp),{singleton:!0}),vp=Ym((([{viewportHeight:e},{totalListHeight:t}])=>{const r=Pm(!1);return{alignToBottom:r,paddingTopAddition:Wm(Bm(qm(r,e,t),_m((([e])=>e)),Om((([,e,t])=>Math.max(0,e-t))),jm(0),Mm()),0)}}),Cm(of,bp),{singleton:!0});function yp(e){return!!e&&("smooth"===e?"smooth":"auto")}const xp=Ym((([{listRefresh:e,totalCount:t},{atBottomState:r,isAtBottom:n},{scrollToIndex:o},{scrolledToInitialItem:i},{didMount:s,propsReady:a},{log:l},{scrollingInProgress:d}])=>{const c=Pm(!1),u=Vm();let h=null;function g(e){Sm(o,{align:"end",behavior:e,index:"LAST"})}function m(e){const t=Tm(r,(t=>{e&&!t.atBottom&&"SIZE_INCREASED"===t.notAtBottomBecause&&!h&&(km(l)("scrolling to bottom due to increased size",{},Qm.DEBUG),g("auto"))}));setTimeout(t,100)}return Fm(Bm(qm(Bm(Gm(t),Rm(1)),s),Lm(Gm(c),n,i,d),Om((([[e,t],r,n,o,i])=>{let s=t&&o,a="auto";return s&&(a=((e,t)=>"function"==typeof e?yp(e(t)):t&&yp(e))(r,n||i),s=s&&!!a),{followOutputBehavior:a,shouldFollow:s,totalCount:e}})),_m((({shouldFollow:e})=>e))),(({followOutputBehavior:t,totalCount:r})=>{h&&(h(),h=null),h=Tm(e,(()=>{km(l)("following output to ",{totalCount:r},Qm.DEBUG),g(t),h=null}))})),Fm(Bm(qm(Gm(c),t,a),_m((([e,,t])=>e&&t)),Hm((({value:e},[,t])=>({refreshed:e===t,value:t})),{refreshed:!1,value:0}),_m((({refreshed:e})=>e)),Lm(c,t)),(([,e])=>{km(i)&&m(!1!==e)})),Fm(u,(()=>{m(!1!==km(c))})),Fm(qm(Gm(c),r),(([e,t])=>{e&&!t.atBottom&&"VIEWPORT_HEIGHT_DECREASING"===t.notAtBottomBecause&&g("auto")})),{autoscrollToBottom:u,followOutput:c}}),Cm(Yf,ip,Xf,ep,Gf,Km,of)),wp=Ym((([{data:e,firstItemIndex:t,gap:r,sizes:n},{initialTopMostItemIndex:o},{initialItemCount:i,listState:s},{didMount:a}])=>(Im(Bm(a,Lm(i),_m((([,e])=>0!==e)),Lm(o,n,t,r,e),Om((([[,e],t,r,n,o,i=[]])=>mp(e,t,r,n,o,i)))),s),{})),Cm(Yf,ep,pp,Gf),{singleton:!0}),$p=Ym((([{didMount:e},{scrollTo:t},{listState:r}])=>{const n=Pm(0);return Fm(Bm(e,Lm(n),_m((([,e])=>0!==e)),Om((([,e])=>({top:e})))),(e=>{Tm(Bm(r,Rm(1),_m((e=>e.items.length>1))),(()=>{requestAnimationFrame((()=>{Sm(t,e)}))}))})),{initialScrollTop:n}}),Cm(Gf,of,pp),{singleton:!0}),Cp=({itemBottom:e,itemTop:t,locationParams:{align:r,behavior:n,...o},viewportBottom:i,viewportTop:s})=>t<s?{...o,align:null!=r?r:"start",behavior:n}:e>i?{...o,align:null!=r?r:"end",behavior:n}:null,Fp=Ym((([{gap:e,sizes:t,totalCount:r},{fixedFooterHeight:n,fixedHeaderHeight:o,headerHeight:i,scrollingInProgress:s,scrollTop:a,viewportHeight:l},{scrollToIndex:d}])=>{const c=Vm();return Im(Bm(c,Lm(t,l,r,i,o,n,a),Lm(e),Om((([[e,t,r,n,o,i,a,l],d])=>{const{align:c,behavior:u,calculateViewLocation:h=Cp,done:g,...m}=e,f=Hf(e,t,n-1),p=Af(f,t.offsetTree,d)+o+i,b=h({itemBottom:p+cf(t.sizeTree,f)[1],itemTop:p,locationParams:{align:c,behavior:u,...m},viewportBottom:l+r-a,viewportTop:l+i});return b?g&&Tm(Bm(s,_m((e=>!e)),Rm(km(s)?1:2)),g):g&&g(),b})),_m((e=>null!==e))),d),{scrollIntoView:c}}),Cm(Yf,of,Xf,pp,Km),{singleton:!0}),Sp=Ym((([{scrollVelocity:e}])=>{const t=Pm(!1),r=Vm(),n=Pm(!1);return Im(Bm(e,Lm(n,t,r),_m((([e,t])=>!!t)),Om((([e,t,r,n])=>{const{enter:o,exit:i}=t;if(r){if(i(e,n))return!1}else if(o(e,n))return!0;return r})),Mm()),t),Fm(Bm(qm(t,e,r),Lm(n)),(([[e,t,r],n])=>{e&&n&&n.change&&n.change(t,r)})),{isSeeking:t,scrollSeekConfiguration:n,scrollSeekRangeChanged:r,scrollVelocity:e}}),Cm(ip),{singleton:!0}),Ep=Ym((([{scrollContainerState:e,scrollTo:t}])=>{const r=Vm(),n=Vm(),o=Vm(),i=Pm(!1),s=Pm(void 0);return Im(Bm(qm(r,n),Om((([{scrollHeight:e,scrollTop:t,viewportHeight:r},{offsetTop:n}])=>({scrollHeight:e,scrollTop:Math.max(0,t-n),viewportHeight:r})))),e),Im(Bm(t,Lm(n),Om((([e,{offsetTop:t}])=>({...e,top:e.top+t})))),o),{customScrollParent:s,useWindowScroll:i,windowScrollContainerState:r,windowScrollTo:o,windowViewportRect:n}}),Cm(of)),kp=Ym((([{sizeRanges:e,sizes:t},{headerHeight:r,scrollTop:n},{initialTopMostItemIndex:o},{didMount:i},{useWindowScroll:s,windowScrollContainerState:a,windowViewportRect:l}])=>{const d=Vm(),c=Pm(void 0),u=Pm(null),h=Pm(null);return Im(a,u),Im(l,h),Fm(Bm(d,Lm(t,n,s,u,h,r)),(([e,t,r,n,o,i,s])=>{const a=function(e){return ff(e).map((({k:e,v:t},r,n)=>{const o=n[r+1];return{endIndex:o?o.k-1:1/0,size:t,startIndex:e}}))}(t.sizeTree);n&&null!==o&&null!==i&&(r=o.scrollTop-i.offsetTop),e({ranges:a,scrollTop:r-=s})})),Im(Bm(c,_m(ym),Om(Ip)),o),Im(Bm(i,Lm(c),_m((([,e])=>void 0!==e)),Mm(),Om((([,e])=>e.ranges))),e),{getState:d,restoreStateFrom:c}}),Cm(Yf,of,ep,Gf,Ep));function Ip(e){return{align:"start",index:0,offset:e.scrollTop}}const Tp=Ym((([{topItemsIndexes:e}])=>{const t=Pm(0);return Im(Bm(t,_m((e=>e>=0)),Om((e=>Array.from({length:e}).map(((e,t)=>t))))),e),{topItemCount:t}}),Cm(pp));function Dp(e){let t,r=!1;return()=>(r||(r=!0,t=e()),t)}const zp=Dp((()=>/iP(ad|od|hone)/i.test(navigator.userAgent)&&/WebKit/i.test(navigator.userAgent))),Mp=Ym((([{deviation:e,scrollBy:t,scrollingInProgress:r,scrollTop:n},{isAtBottom:o,isScrolling:i,lastJumpDueToItemResize:s,scrollDirection:a},{listState:l},{beforeUnshiftWith:d,gap:c,shiftWithOffset:u,sizes:h},{log:g},{recalcInProgress:m}])=>{const f=Nm(Bm(l,Lm(s),Hm((([,e,t,r],[{bottom:n,items:o,offsetBottom:i,totalCount:s},a])=>{const l=n+i;let d=0;return t===s&&e.length>0&&o.length>0&&(0===o[0].originalIndex&&0===e[0].originalIndex||(d=l-r,0!==d&&(d+=a))),[d,o,s,l]}),[0,[],0,0]),_m((([e])=>0!==e)),Lm(n,a,r,o,g,m),_m((([,e,t,r,,,n])=>!n&&!r&&0!==e&&t===rp)),Om((([[e],,,,,t])=>(t("Upward scrolling compensation",{amount:e},Qm.DEBUG),e)))));function p(r){r>0?(Sm(t,{behavior:"auto",top:-r}),Sm(e,0)):(Sm(e,0),Sm(t,{behavior:"auto",top:-r}))}return Fm(Bm(f,Lm(e,i)),(([t,r,n])=>{n&&zp()?Sm(e,r-t):p(-t)})),Fm(Bm(qm(Wm(i,!1),e,m),_m((([e,t,r])=>!e&&!r&&0!==t)),Om((([e,t])=>t)),jm(1)),p),Im(Bm(u,Om((e=>({top:-e})))),t),Fm(Bm(d,Lm(h,c),Om((([e,{groupIndices:t,lastSize:r,sizeTree:n},o])=>{function i(e){return e*(r+o)}if(0===t.length)return i(e);{let r=0;const o=df(n,0);let s=0,a=0;for(;s<e;){s++,r+=o;let n=t.length===a+1?1/0:t[a+1]-t[a]-1;s+n>e&&(r-=o,n=e-s+1),s+=n,r+=i(n),a++}return r}}))),(r=>{Sm(e,r),requestAnimationFrame((()=>{Sm(t,{top:r}),requestAnimationFrame((()=>{Sm(e,0),Sm(m,!1)}))}))})),{deviation:e}}),Cm(of,ip,pp,Yf,Km,If)),_p=Ym((([e,t,r,n,o,i,s,a,l,d])=>({...e,...t,...r,...n,...o,...i,...s,...a,...l,...d})),Cm(up,wp,Gf,Sp,bp,$p,vp,Ep,Fp,Km)),Op=Ym((([{data:e,defaultItemSize:t,firstItemIndex:r,fixedItemSize:n,gap:o,groupIndices:i,itemSize:s,sizeRanges:a,sizes:l,statefulTotalCount:d,totalCount:c,trackItemSizes:u},{initialItemFinalLocationReached:h,initialTopMostItemIndex:g,scrolledToInitialItem:m},f,p,b,{listState:v,topItemsIndexes:y,...x},{scrollToIndex:w},$,{topItemCount:C},{groupCounts:F},S])=>(Im(x.rangeChanged,S.scrollSeekRangeChanged),Im(Bm(S.windowViewportRect,Om((e=>e.visibleHeight))),f.viewportHeight),{data:e,defaultItemHeight:t,firstItemIndex:r,fixedItemHeight:n,gap:o,groupCounts:F,initialItemFinalLocationReached:h,initialTopMostItemIndex:g,scrolledToInitialItem:m,sizeRanges:a,topItemCount:C,topItemsIndexes:y,totalCount:c,...b,groupIndices:i,itemSize:s,listState:v,scrollToIndex:w,statefulTotalCount:d,trackItemSizes:u,...x,...S,...f,sizes:l,...p})),Cm(Yf,ep,of,kp,xp,pp,Xf,Mp,Tp,qf,_p));function Ap(e,t){const r={},n={};let o=0;const i=e.length;for(;o<i;)n[e[o]]=1,o+=1;for(const e in t)Object.hasOwn(n,e)||(r[e]=t[e]);return r}const Bp=typeof document<"u"?o.useLayoutEffect:o.useEffect;function Hp(e,r,n){const i=Object.keys(r.required||{}),s=Object.keys(r.optional||{}),a=Object.keys(r.methods||{}),l=Object.keys(r.events||{}),d=o.createContext({});function c(e,t){e.propsReady&&Sm(e.propsReady,!1);for(const n of i){Sm(e[r.required[n]],t[n])}for(const n of s)if(n in t){Sm(e[r.optional[n]],t[n])}e.propsReady&&Sm(e.propsReady,!0)}function u(e){return l.reduce(((t,n)=>(t[n]=function(e){let t,r;const n=()=>null==t?void 0:t();return function(o,i){switch(o){case um:return i?r===i?void 0:(n(),r=i,t=Fm(e,i),t):(n(),xm);case hm:return n(),void(r=null)}}}(e[r.events[n]]),t)),{})}const h=o.forwardRef(((h,g)=>{const{children:m,...f}=h,[p]=o.useState((()=>wm(function(e){const t=new Map,r=({constructor:e,dependencies:n,id:o,singleton:i})=>{if(i&&t.has(o))return t.get(o);const s=e(n.map((e=>r(e))));return i&&t.set(o,s),s};return r(e)}(e),(e=>{c(e,f)})))),[b]=o.useState(bm(u,p));Bp((()=>{for(const e of l)e in f&&Fm(b[e],f[e]);return()=>{Object.values(b).map(Em)}}),[f,b,p]),Bp((()=>{c(p,f)})),o.useImperativeHandle(g,mm(function(e){return a.reduce(((t,n)=>(t[n]=t=>{Sm(e[r.methods[n]],t)},t)),{})}(p)));const v=n;return t(d.Provider,{value:p,children:n?t(v,{...Ap([...i,...s,...l],f),children:m}):m})}));return{Component:h,useEmitter:(e,t)=>{const r=o.useContext(d)[e];Bp((()=>Fm(r,t)),[t,r])},useEmitterValue:o.version.startsWith("18")?e=>{const t=o.useContext(d)[e],r=o.useCallback((e=>Fm(t,e)),[t]);return o.useSyncExternalStore(r,(()=>km(t)),(()=>km(t)))}:e=>{const t=o.useContext(d)[e],[r,n]=o.useState(bm(km,t));return Bp((()=>Fm(t,(e=>{e!==r&&n(mm(e))}))),[t,r]),r},usePublisher:e=>o.useCallback(vm(Sm,o.useContext(d)[e]),[e])}}const Rp=o.createContext(void 0),jp=o.createContext(void 0),Lp=typeof document<"u"?o.useLayoutEffect:o.useEffect;function Pp(e,t,r,n=xm,i,s){const a=o.useRef(null),l=o.useRef(null),d=o.useRef(null),c=o.useCallback((r=>{const n=r.target,o=n===window||n===document,i=s?o?window.pageXOffset||document.documentElement.scrollLeft:n.scrollLeft:o?window.pageYOffset||document.documentElement.scrollTop:n.scrollTop,a=s?o?document.documentElement.scrollWidth:n.scrollWidth:o?document.documentElement.scrollHeight:n.scrollHeight,c=s?o?window.innerWidth:n.offsetWidth:o?window.innerHeight:n.offsetHeight,u=()=>{e({scrollHeight:a,scrollTop:Math.max(i,0),viewportHeight:c})};r.suppressFlushSync?u():E.flushSync(u),null!==l.current&&(i===l.current||i<=0||i===a-c)&&(l.current=null,t(!0),d.current&&(clearTimeout(d.current),d.current=null))}),[e,t]);return o.useEffect((()=>{const e=i||a.current;return n(i||a.current),c({suppressFlushSync:!0,target:e}),e.addEventListener("scroll",c,{passive:!0}),()=>{n(null),e.removeEventListener("scroll",c)}}),[a,c,r,n,i]),{scrollByCallback:function(e){s&&(e={behavior:e.behavior,left:e.top}),a.current.scrollBy(e)},scrollerRef:a,scrollToCallback:function(r){const n=a.current;if(!n||(s?"offsetWidth"in n&&0===n.offsetWidth:"offsetHeight"in n&&0===n.offsetHeight))return;const o="smooth"===r.behavior;let i,c,u;n===window?(c=Math.max(zf(document.documentElement,s?"width":"height"),s?document.documentElement.scrollWidth:document.documentElement.scrollHeight),i=s?window.innerWidth:window.innerHeight,u=s?document.documentElement.scrollLeft:document.documentElement.scrollTop):(c=n[s?"scrollWidth":"scrollHeight"],i=zf(n,s?"width":"height"),u=n[s?"scrollLeft":"scrollTop"]);const h=c-i;if(r.top=Math.ceil(Math.max(Math.min(h,r.top),0)),tp(i,c)||r.top===u)return e({scrollHeight:c,scrollTop:u,viewportHeight:i}),void(o&&t(!0));o?(l.current=r.top,d.current&&clearTimeout(d.current),d.current=setTimeout((()=>{d.current=null,l.current=null,t(!0)}),1e3)):l.current=null,s&&(r={behavior:r.behavior,left:r.top}),n.scrollTo(r)}}}const Wp="-webkit-sticky",Vp="sticky",Np=Dp((()=>{if(typeof document>"u")return Vp;const e=document.createElement("div");return e.style.position=Wp,e.style.position===Wp?Wp:Vp}));function Yp(e){return e}const Up=Ym((()=>{const e=Pm((e=>`Item ${e}`)),t=Pm(null),r=Pm((e=>`Group ${e}`)),n=Pm({}),o=Pm(Yp),i=Pm("div"),s=Pm(xm),a=(e,t=null)=>Wm(Bm(n,Om((t=>t[e])),Mm()),t);return{components:n,computeItemKey:o,context:t,EmptyPlaceholder:a("EmptyPlaceholder"),FooterComponent:a("Footer"),GroupComponent:a("Group","div"),groupContent:r,HeaderComponent:a("Header"),HeaderFooterTag:i,ItemComponent:a("Item","div"),itemContent:e,ListComponent:a("List","div"),ScrollerComponent:a("Scroller","div"),scrollerRef:s,ScrollSeekPlaceholder:a("ScrollSeekPlaceholder"),TopItemListComponent:a("TopItemList")}})),qp=Ym((([e,t])=>({...e,...t})),Cm(Op,Up)),Gp=({height:e})=>t("div",{style:{height:e}}),Zp={overflowAnchor:"none",position:Np(),zIndex:1},Qp={overflowAnchor:"none"},Xp={...Qp,display:"inline-block",height:"100%"},Kp=o.memo((function({showTopList:e=!1}){const r=fb("listState"),n=pb("sizeRanges"),i=fb("useWindowScroll"),s=fb("customScrollParent"),a=pb("windowScrollContainerState"),l=pb("scrollContainerState"),d=s||i?a:l,c=fb("itemContent"),u=fb("context"),h=fb("groupContent"),g=fb("trackItemSizes"),m=fb("itemSize"),f=fb("log"),p=pb("gap"),v=fb("horizontalDirection"),{callbackRef:y}=tf(n,m,g,e?xm:d,f,p,s,v,fb("skipAnimationFrameInResizeObserver")),[x,w]=o.useState(0);mb("deviation",(e=>{x!==e&&w(e)}));const $=fb("EmptyPlaceholder"),C=fb("ScrollSeekPlaceholder")||Gp,F=fb("ListComponent"),S=fb("ItemComponent"),E=fb("GroupComponent"),k=fb("computeItemKey"),I=fb("isSeeking"),T=fb("groupIndices").length>0,D=fb("alignToBottom"),z=fb("initialItemFinalLocationReached"),M=e?{}:{boxSizing:"border-box",...v?{display:"inline-block",height:"100%",marginLeft:0!==x?x:D?"auto":0,paddingLeft:r.offsetTop,paddingRight:r.offsetBottom,whiteSpace:"nowrap"}:{marginTop:0!==x?x:D?"auto":0,paddingBottom:r.offsetBottom,paddingTop:r.offsetTop},...z?{}:{visibility:"hidden"}};return!e&&0===r.totalCount&&$?t($,{...nb($,u)}):t(F,{...nb(F,u),"data-testid":e?"virtuoso-top-item-list":"virtuoso-item-list",ref:y,style:M,children:(e?r.topItems:r.items).map((e=>{const t=e.originalIndex,n=k(t+r.firstItemIndex,e.data,u);return I?b(C,{...nb(C,u),height:e.size,index:e.index,key:n,type:e.type||"item",..."group"===e.type?{}:{groupIndex:e.groupIndex}}):"group"===e.type?b(E,{...nb(E,u),"data-index":t,"data-item-index":e.index,"data-known-size":e.size,key:n,style:Zp},h(e.index,u)):b(S,{...nb(S,u),...ob(S,e.data),"data-index":t,"data-item-group-index":e.groupIndex,"data-item-index":e.index,"data-known-size":e.size,key:n,style:v?Xp:Qp},T?c(e.index,e.groupIndex,e.data,u):c(e.index,e.data,u))}))})})),Jp={height:"100%",outline:"none",overflowY:"auto",position:"relative",WebkitOverflowScrolling:"touch"},eb={outline:"none",overflowX:"auto",position:"relative"},tb=e=>({height:"100%",position:"absolute",top:0,width:"100%",...e?{display:"flex",flexDirection:"column"}:{}}),rb={position:Np(),top:0,width:"100%",zIndex:1};function nb(e,t){if("string"!=typeof e)return{context:t}}function ob(e,t){return{item:"string"==typeof e?void 0:t}}const ib=o.memo((function(){const e=fb("HeaderComponent"),r=pb("headerHeight"),n=fb("HeaderFooterTag"),i=Jm(o.useMemo((()=>e=>{r(zf(e,"height"))}),[r]),!0,fb("skipAnimationFrameInResizeObserver")),s=fb("context");return e?t(n,{ref:i,children:t(e,{...nb(e,s)})}):null})),sb=o.memo((function(){const e=fb("FooterComponent"),r=pb("footerHeight"),n=fb("HeaderFooterTag"),i=Jm(o.useMemo((()=>e=>{r(zf(e,"height"))}),[r]),!0,fb("skipAnimationFrameInResizeObserver")),s=fb("context");return e?t(n,{ref:i,children:t(e,{...nb(e,s)})}):null}));function ab({useEmitter:e,useEmitterValue:r,usePublisher:n}){return o.memo((function({children:o,style:i,...s}){const a=n("scrollContainerState"),l=r("ScrollerComponent"),d=n("smoothScrollTargetReached"),c=r("scrollerRef"),u=r("context"),h=r("horizontalDirection")||!1,{scrollByCallback:g,scrollerRef:m,scrollToCallback:f}=Pp(a,d,l,c,void 0,h);return e("scrollTo",f),e("scrollBy",g),t(l,{"data-testid":"virtuoso-scroller","data-virtuoso-scroller":!0,ref:m,style:{...h?eb:Jp,...i},tabIndex:0,...s,...nb(l,u),children:o})}))}function lb({useEmitter:e,useEmitterValue:r,usePublisher:n}){return o.memo((function({children:o,style:i,...s}){const a=n("windowScrollContainerState"),l=r("ScrollerComponent"),d=n("smoothScrollTargetReached"),c=r("totalListHeight"),u=r("deviation"),h=r("customScrollParent"),g=r("context"),{scrollByCallback:m,scrollerRef:f,scrollToCallback:p}=Pp(a,d,l,xm,h);return Lp((()=>(f.current=h||window,()=>{f.current=null})),[f,h]),e("windowScrollTo",p),e("scrollBy",m),t(l,{"data-virtuoso-scroller":!0,style:{position:"relative",...i,...0!==c?{height:c+u}:{}},...s,...nb(l,g),children:o})}))}const db=({children:e})=>{const r=o.useContext(Rp),n=pb("viewportHeight"),i=pb("fixedItemHeight"),s=fb("alignToBottom"),a=fb("horizontalDirection"),l=Jm(o.useMemo((()=>pm(n,(e=>zf(e,a?"width":"height")))),[n,a]),!0,fb("skipAnimationFrameInResizeObserver"));return o.useEffect((()=>{r&&(n(r.viewportHeight),i(r.itemHeight))}),[r,n,i]),t("div",{"data-viewport-type":"element",ref:l,style:tb(s),children:e})},cb=({children:e})=>{const r=o.useContext(Rp),n=pb("windowViewportRect"),i=pb("fixedItemHeight"),s=fb("customScrollParent"),a=nf(n,s,fb("skipAnimationFrameInResizeObserver")),l=fb("alignToBottom");return o.useEffect((()=>{r&&(i(r.itemHeight),n({offsetTop:0,visibleHeight:r.viewportHeight,visibleWidth:100}))}),[r,n,i]),t("div",{"data-viewport-type":"window",ref:a,style:tb(l),children:e})},ub=({children:e})=>{const r=fb("TopItemListComponent")||"div",n=fb("headerHeight"),o={...rb,marginTop:`${n}px`},i=fb("context");return t(r,{style:o,...nb(r,i),children:e})},hb=o.memo((function(r){const n=fb("useWindowScroll"),o=fb("topItemsIndexes").length>0,i=fb("customScrollParent"),s=fb("context"),a=i||n?vb:bb,l=i||n?cb:db;return e(a,{...r,...nb(a,s),children:[o&&t(ub,{children:t(Kp,{showTopList:!0})}),e(l,{children:[t(ib,{}),t(Kp,{}),t(sb,{})]})]})})),{Component:gb,useEmitter:mb,useEmitterValue:fb,usePublisher:pb}=Hp(qp,{events:{atBottomStateChange:"atBottomStateChange",atTopStateChange:"atTopStateChange",endReached:"endReached",groupIndices:"groupIndices",isScrolling:"isScrolling",itemsRendered:"itemsRendered",rangeChanged:"rangeChanged",startReached:"startReached",totalListHeightChanged:"totalListHeightChanged"},methods:{autoscrollToBottom:"autoscrollToBottom",getState:"getState",scrollBy:"scrollBy",scrollIntoView:"scrollIntoView",scrollTo:"scrollTo",scrollToIndex:"scrollToIndex"},optional:{alignToBottom:"alignToBottom",atBottomThreshold:"atBottomThreshold",atTopThreshold:"atTopThreshold",components:"components",computeItemKey:"computeItemKey",context:"context",customScrollParent:"customScrollParent",data:"data",defaultItemHeight:"defaultItemHeight",firstItemIndex:"firstItemIndex",fixedItemHeight:"fixedItemHeight",followOutput:"followOutput",groupContent:"groupContent",groupCounts:"groupCounts",headerFooterTag:"HeaderFooterTag",horizontalDirection:"horizontalDirection",increaseViewportBy:"increaseViewportBy",initialItemCount:"initialItemCount",initialScrollTop:"initialScrollTop",initialTopMostItemIndex:"initialTopMostItemIndex",itemContent:"itemContent",itemSize:"itemSize",logLevel:"logLevel",overscan:"overscan",restoreStateFrom:"restoreStateFrom",scrollerRef:"scrollerRef",scrollSeekConfiguration:"scrollSeekConfiguration",skipAnimationFrameInResizeObserver:"skipAnimationFrameInResizeObserver",topItemCount:"topItemCount",totalCount:"totalCount",useWindowScroll:"useWindowScroll"},required:{}},hb),bb=ab({useEmitter:mb,useEmitterValue:fb,usePublisher:pb}),vb=lb({useEmitter:mb,useEmitterValue:fb,usePublisher:pb}),yb=gb,xb={bottom:0,itemHeight:0,items:[],itemWidth:0,offsetBottom:0,offsetTop:0,top:0},wb={bottom:0,itemHeight:0,items:[{index:0}],itemWidth:0,offsetBottom:0,offsetTop:0,top:0},{ceil:$b,floor:Cb,max:Fb,min:Sb,round:Eb}=Math;function kb(e,t,r){return Array.from({length:t-e+1}).map(((t,n)=>({data:null===r?null:r[n+e],index:n+e})))}function Ib(e,t){return e&&e.width===t.width&&e.height===t.height}function Tb(e,t){return e&&e.column===t.column&&e.row===t.row}const Db=Ym((([{increaseViewportBy:e,listBoundary:t,overscan:r,visibleRange:n},{footerHeight:o,headerHeight:i,scrollBy:s,scrollContainerState:a,scrollTo:l,scrollTop:d,smoothScrollTargetReached:c,viewportHeight:u},h,g,{didMount:m,propsReady:f},{customScrollParent:p,useWindowScroll:b,windowScrollContainerState:v,windowScrollTo:y,windowViewportRect:x},w])=>{const $=Pm(0),C=Pm(0),F=Pm(xb),S=Pm({height:0,width:0}),E=Pm({height:0,width:0}),k=Vm(),I=Vm(),T=Pm(0),D=Pm(null),z=Pm({column:0,row:0}),M=Vm(),_=Vm(),O=Pm(!1),A=Pm(0),B=Pm(!0),H=Pm(!1),R=Pm(!1);Fm(Bm(m,Lm(A),_m((([e,t])=>!!t))),(()=>{Sm(B,!1)})),Fm(Bm(qm(m,B,E,S,A,H),_m((([e,t,r,n,,o])=>e&&!t&&0!==r.height&&0!==n.height&&!o))),(([,,,,e])=>{Sm(H,!0),Kf(1,(()=>{Sm(k,e)})),Tm(Bm(d),(()=>{Sm(t,[0,0]),Sm(B,!0)}))})),Im(Bm(_,_m((e=>null!=e&&e.scrollTop>0)),Am(0)),C),Fm(Bm(m,Lm(_),_m((([,e])=>null!=e))),(([,e])=>{e&&(Sm(S,e.viewport),Sm(E,e.item),Sm(z,e.gap),e.scrollTop>0&&(Sm(O,!0),Tm(Bm(d,Rm(1)),(e=>{Sm(O,!1)})),Sm(l,{top:e.scrollTop})))})),Im(Bm(S,Om((({height:e})=>e))),u),Im(Bm(qm(Gm(S,Ib),Gm(E,Ib),Gm(z,((e,t)=>e&&e.column===t.column&&e.row===t.row)),Gm(d)),Om((([e,t,r,n])=>({gap:r,item:t,scrollTop:n,viewport:e})))),M),Im(Bm(qm(Gm($),n,Gm(z,Tb),Gm(E,Ib),Gm(S,Ib),Gm(D),Gm(C),Gm(O),Gm(B),Gm(A)),_m((([,,,,,,,e])=>!e)),Om((([e,[t,r],n,o,i,s,a,,l,d])=>{const{column:c,row:u}=n,{height:h,width:g}=o,{width:m}=i;if(0===a&&(0===e||0===m))return xb;if(0===g){const t=Jf(d,e);return function(e){return{...wb,items:e}}(kb(t,t+Math.max(a-1,0),s))}const f=zb(m,g,c);let p,b;l?0===t&&0===r&&a>0?(p=0,b=a-1):(p=f*Cb((t+u)/(h+u)),b=f*$b((r+u)/(h+u))-1,b=Sb(e-1,Fb(b,f-1)),p=Sb(b,Fb(0,p))):(p=0,b=-1);const v=kb(p,b,s),{bottom:y,top:x}=Mb(i,n,o,v),w=$b(e/f);return{bottom:y,itemHeight:h,items:v,itemWidth:g,offsetBottom:w*h+(w-1)*u-y,offsetTop:x,top:x}}))),F),Im(Bm(D,_m((e=>null!==e)),Om((e=>e.length))),$),Im(Bm(qm(S,E,F,z),_m((([e,t,{items:r}])=>r.length>0&&0!==t.height&&0!==e.height)),Om((([e,t,{items:r},n])=>{const{bottom:o,top:i}=Mb(e,n,t,r);return[i,o]})),Mm(kf)),t);const j=Pm(!1);Im(Bm(d,Lm(j),Om((([e,t])=>t||0!==e))),j);const L=Nm(Bm(qm(F,$),_m((([{items:e}])=>e.length>0)),Lm(j),_m((([[e,t],r])=>{const n=e.items[e.items.length-1].index===t-1;return(r||e.bottom>0&&e.itemHeight>0&&0===e.offsetBottom&&e.items.length===t)&&n})),Om((([[,e]])=>e-1)),Mm())),P=Nm(Bm(Gm(F),_m((({items:e})=>e.length>0&&0===e[0].index)),Am(0),Mm())),W=Nm(Bm(Gm(F),Lm(O),_m((([{items:e},t])=>e.length>0&&!t)),Om((([{items:e}])=>({endIndex:e[e.length-1].index,startIndex:e[0].index}))),Mm(Ef),jm(0)));Im(W,g.scrollSeekRangeChanged),Im(Bm(k,Lm(S,E,$,z),Om((([e,t,r,n,o])=>{const i=Qf(e),{align:s,behavior:a,offset:l}=i;let d=i.index;"LAST"===d&&(d=n-1),d=Fb(0,d,Sb(n-1,d));let c=_b(t,o,r,d);return"end"===s?c=Eb(c-t.height+r.height):"center"===s&&(c=Eb(c-t.height/2+r.height/2)),l&&(c+=l),{behavior:a,top:c}}))),l);const V=Wm(Bm(F,Om((e=>e.offsetBottom+e.bottom))),0);return Im(Bm(x,Om((e=>({height:e.visibleHeight,width:e.visibleWidth})))),S),{customScrollParent:p,data:D,deviation:T,footerHeight:o,gap:z,headerHeight:i,increaseViewportBy:e,initialItemCount:C,itemDimensions:E,overscan:r,restoreStateFrom:_,scrollBy:s,scrollContainerState:a,scrollHeight:I,scrollTo:l,scrollToIndex:k,scrollTop:d,smoothScrollTargetReached:c,totalCount:$,useWindowScroll:b,viewportDimensions:S,windowScrollContainerState:v,windowScrollTo:y,windowViewportRect:x,...g,gridState:F,horizontalDirection:R,initialTopMostItemIndex:A,totalListHeight:V,...h,endReached:L,propsReady:f,rangeChanged:W,startReached:P,stateChanged:M,stateRestoreInProgress:O,...w}}),Cm(up,of,ip,Sp,Gf,Ep,Km));function zb(e,t,r){return Fb(1,Cb((e+r)/(Cb(t)+r)))}function Mb(e,t,r,n){const{height:o}=r;if(void 0===o||0===n.length)return{bottom:0,top:0};const i=_b(e,t,r,n[0].index);return{bottom:_b(e,t,r,n[n.length-1].index)+o,top:i}}function _b(e,t,r,n){const o=zb(e.width,r.width,t.column),i=Cb(n/o),s=i*r.height+Fb(0,i-1)*t.row;return s>0?s+t.row:s}const Ob=Ym((()=>{const e=Pm((e=>`Item ${e}`)),t=Pm({}),r=Pm(null),n=Pm("virtuoso-grid-item"),o=Pm("virtuoso-grid-list"),i=Pm(Yp),s=Pm("div"),a=Pm(xm),l=(e,r=null)=>Wm(Bm(t,Om((t=>t[e])),Mm()),r),d=Pm(!1),c=Pm(!1);return Im(Gm(c),d),{components:t,computeItemKey:i,context:r,FooterComponent:l("Footer"),HeaderComponent:l("Header"),headerFooterTag:s,itemClassName:n,ItemComponent:l("Item","div"),itemContent:e,listClassName:o,ListComponent:l("List","div"),readyStateChanged:d,reportReadyState:c,ScrollerComponent:l("Scroller","div"),scrollerRef:a,ScrollSeekPlaceholder:l("ScrollSeekPlaceholder","div")}})),Ab=Ym((([e,t])=>({...e,...t})),Cm(Db,Ob)),Bb=o.memo((function(){const e=Nb("gridState"),r=Nb("listClassName"),n=Nb("itemClassName"),i=Nb("itemContent"),s=Nb("computeItemKey"),a=Nb("isSeeking"),l=Yb("scrollHeight"),d=Nb("ItemComponent"),c=Nb("ListComponent"),u=Nb("ScrollSeekPlaceholder"),h=Nb("context"),g=Yb("itemDimensions"),m=Yb("gap"),f=Nb("log"),p=Nb("stateRestoreInProgress"),v=Yb("reportReadyState"),y=Jm(o.useMemo((()=>e=>{const t=e.parentElement.parentElement.scrollHeight;l(t);const r=e.firstChild;if(r){const{height:e,width:t}=r.getBoundingClientRect();g({height:e,width:t})}m({column:Gb("column-gap",getComputedStyle(e).columnGap,f),row:Gb("row-gap",getComputedStyle(e).rowGap,f)})}),[l,g,m,f]),!0,!1);return Lp((()=>{e.itemHeight>0&&e.itemWidth>0&&v(!0)}),[e]),p?null:t(c,{className:r,ref:y,...nb(c,h),"data-testid":"virtuoso-item-list",style:{paddingBottom:e.offsetBottom,paddingTop:e.offsetTop},children:e.items.map((r=>{const o=s(r.index,r.data,h);return a?t(u,{...nb(u,h),height:e.itemHeight,index:r.index,width:e.itemWidth},o):b(d,{...nb(d,h),className:n,"data-index":r.index,key:o},i(r.index,r.data,h))}))})})),Hb=o.memo((function(){const e=Nb("HeaderComponent"),r=Yb("headerHeight"),n=Nb("headerFooterTag"),i=Jm(o.useMemo((()=>e=>{r(zf(e,"height"))}),[r]),!0,!1),s=Nb("context");return e?t(n,{ref:i,children:t(e,{...nb(e,s)})}):null})),Rb=o.memo((function(){const e=Nb("FooterComponent"),r=Yb("footerHeight"),n=Nb("headerFooterTag"),i=Jm(o.useMemo((()=>e=>{r(zf(e,"height"))}),[r]),!0,!1),s=Nb("context");return e?t(n,{ref:i,children:t(e,{...nb(e,s)})}):null})),jb=({children:e})=>{const r=o.useContext(jp),n=Yb("itemDimensions"),i=Yb("viewportDimensions"),s=Jm(o.useMemo((()=>e=>{i(e.getBoundingClientRect())}),[i]),!0,!1);return o.useEffect((()=>{r&&(i({height:r.viewportHeight,width:r.viewportWidth}),n({height:r.itemHeight,width:r.itemWidth}))}),[r,i,n]),t("div",{ref:s,style:tb(!1),children:e})},Lb=({children:e})=>{const r=o.useContext(jp),n=Yb("windowViewportRect"),i=Yb("itemDimensions"),s=Nb("customScrollParent"),a=nf(n,s,!1);return o.useEffect((()=>{r&&(i({height:r.itemHeight,width:r.itemWidth}),n({offsetTop:0,visibleHeight:r.viewportHeight,visibleWidth:r.viewportWidth}))}),[r,n,i]),t("div",{ref:a,style:tb(!1),children:e})},Pb=o.memo((function({...r}){const n=Nb("useWindowScroll"),o=Nb("customScrollParent"),i=o||n?qb:Ub,s=o||n?Lb:jb,a=Nb("context");return t(i,{...r,...nb(i,a),children:e(s,{children:[t(Hb,{}),t(Bb,{}),t(Rb,{})]})})})),{Component:Wb,useEmitter:Vb,useEmitterValue:Nb,usePublisher:Yb}=Hp(Ab,{events:{atBottomStateChange:"atBottomStateChange",atTopStateChange:"atTopStateChange",endReached:"endReached",isScrolling:"isScrolling",rangeChanged:"rangeChanged",readyStateChanged:"readyStateChanged",startReached:"startReached",stateChanged:"stateChanged"},methods:{scrollBy:"scrollBy",scrollTo:"scrollTo",scrollToIndex:"scrollToIndex"},optional:{components:"components",computeItemKey:"computeItemKey",context:"context",customScrollParent:"customScrollParent",data:"data",headerFooterTag:"headerFooterTag",increaseViewportBy:"increaseViewportBy",initialItemCount:"initialItemCount",initialTopMostItemIndex:"initialTopMostItemIndex",itemClassName:"itemClassName",itemContent:"itemContent",listClassName:"listClassName",logLevel:"logLevel",overscan:"overscan",restoreStateFrom:"restoreStateFrom",scrollerRef:"scrollerRef",scrollSeekConfiguration:"scrollSeekConfiguration",totalCount:"totalCount",useWindowScroll:"useWindowScroll"}},Pb),Ub=ab({useEmitter:Vb,useEmitterValue:Nb,usePublisher:Yb}),qb=lb({useEmitter:Vb,useEmitterValue:Nb,usePublisher:Yb});function Gb(e,t,r){return"normal"!==t&&!(null!=t&&t.endsWith("px"))&&r(`${e} was not resolved to pixel value correctly`,t,Qm.WARN),"normal"===t?0:parseInt(null!=t?t:"0",10)}const Zb=o.createContext({focusedIndex:-1,setFocusedIndex:()=>{}}),Qb=({children:e})=>{const[r,n]=a(-1);return t(Zb.Provider,{value:{focusedIndex:r,setFocusedIndex:n},children:e})},Xb=x.div`
    overflow: hidden;
    border: ${Sn["width-010"]} ${Sn.solid} ${$n.border};
    border-radius: ${kn.sm};
    background: ${$n.bg};

    min-width: 23rem;
    ${e=>e.$width&&`width: ${e.$width}px;`}
    max-height: 27rem;
    overflow-y: auto;

    ${e=>"small"===e.$variant?Cn["body-md-regular"]:Cn["body-baseline-regular"]}

    ${Tn.MaxWidth.sm} {
        min-width: unset;
        width: calc(100vw - ${In["sm-margin"]} * 2);
        max-height: 15rem;
    }

    ${Tn.MaxWidth.xs} {
        width: calc(100vw - ${In["xs-margin"]} * 2);
    }

    ${Tn.MaxWidth.xxs} {
        width: calc(100vw - ${In["xxs-margin"]} * 2);
    }

    ::-webkit-scrollbar {
        width: 14px;
    }

    ::-webkit-scrollbar-track {
        background: transparent;
    }

    ::-webkit-scrollbar-thumb {
        background: ${$n["bg-inverse-subtlest"]};
        border: 5px solid transparent;
        border-radius: 9999px;
        background-clip: padding-box;
    }
`,Kb=x.div`
    background: transparent;
    padding: ${En["spacing-8"]};
`,Jb=x.ul`
    list-style-type: none;
`,ev=x.li`
    display: flex;
    align-items: flex-start;
    gap: ${En["spacing-8"]};
    padding: ${En["spacing-12"]} ${En["spacing-8"]};
    cursor: pointer;

    outline: none;

    ${e=>e.$active&&e.$selected?w`
                background: ${$n["bg-hover"]};
            `:e.$active?w`
                background: ${$n["bg-hover-subtle"]};
            `:void 0}
`,tv=x(L)`
    flex-shrink: 0;
    height: 1lh;
    width: 1rem;
    color: ${$n["icon-selected"]};
`,rv=x.div`
    flex-shrink: 0;
    height: 1lh;
    width: 1rem;
`,nv=x(j)`
    flex-shrink: 0;
    height: 1lh;
    width: 1lh;
    color: ${$n["icon-selected"]};
`,ov=x(R)`
    flex-shrink: 0;
    height: 1lh;
    width: 1lh;
    color: ${$n["icon-primary-subtlest"]};
`,iv=x.div`
    width: 100%;
    display: flex;
    justify-content: flex-end;
`,sv=x(Vn)`
    cursor: pointer;
    overflow: hidden;
    color: ${$n["text-primary"]};
    font-size: inherit;
`,av=x(sv)`
    ${Cn["body-baseline-semibold"]}
`,lv=x(sv)`
    ${Cn["body-md-semibold"]}
    padding: ${En["spacing-8"]} ${En["spacing-8"]};
`,dv=x.div`
    width: 100%;
    display: flex;
    padding: ${En["spacing-12"]} ${En["spacing-16"]};
    align-items: center;
`,cv=x(D)`
    margin-right: ${En["spacing-4"]};
    color: ${$n["icon-error"]};
    height: 1em;
    width: 1em;
`,uv=x(Hl)`
    margin-right: ${En["spacing-8"]};
    color: ${$n.icon};
`,hv=x.div`
    background: ${$n["bg-strong"]};
    border-radius: ${kn.sm};
    display: flex;
    align-items: center;

    ${e=>"small"===e.$variant?Cn["body-md-regular"]:Cn["body-baseline-regular"]}
`,gv=x.label`
    flex: 1;
    display: flex;
    align-items: center;
    gap: ${En["spacing-8"]};
    padding: ${e=>"small"===e.$variant?w`
                  ${En["spacing-8"]} ${En["spacing-16"]}
              `:w`10px ${En["spacing-16"]}`};
`,mv=x(Wn)`
    flex: 1;
`,fv=x(P)`
    color: ${$n.icon};
    flex-shrink: 0;
    height: 1em;
    width: 1em;
`,pv=x(Zd)`
    flex-shrink: 0;
    align-self: stretch;
    box-sizing: content-box;
    padding: ${En["spacing-8"]};
    margin-left: -${En["spacing-8"]};
    color: ${$n.icon};
    cursor: pointer;
    font-size: inherit;

    svg {
        flex-shrink: 0;
        height: 1em;
        width: 1em;
    }
`,bv=g(((r,n)=>{var{value:o,variant:i,onClear:s}=r,a=ne(r,["value","variant","onClear"]);return e(hv,{$variant:i,children:[e(gv,{$variant:i,children:[t(fv,{"aria-hidden":!0}),t(mv,Object.assign({ref:n,value:o,$variant:i},a))]}),o&&t(pv,{"aria-label":"Clear search",focusOutline:"browser",onClick:s,children:t(H,{"aria-hidden":!0})})]})})),vv=({listItems:n,multiSelect:o,selectedItems:l,disableItemFocus:d,itemsLoadState:c="success",itemTruncationType:u="end",itemMaxLines:h=2,labelDisplayType:g="inline",variant:p="default",listboxId:b,width:v,topScrollItem:y,onSelectItem:x,onSelectAll:w,onDismiss:$,onRetry:C,valueExtractor:F,listExtractor:S,renderListItem:E,renderCustomCallToAction:k,enableSearch:I,hideNoResultsDisplay:T,searchPlaceholder:D="Search",searchFunction:z,onSearch:M})=>{const{focusedIndex:_,setFocusedIndex:O}=f(Zb),[A,B]=a(""),[H,R]=a(null!=n?n:[]),j=ud(c),L=(()=>{const[e,t]=a(!1);return s((()=>{t(!0)}),[]),e})(),P=i(null),W=i(null),V=i([]),N=i(null),Y=i(null),U=e=>{const t=S?S(e):null==e?void 0:e.toString();return"object"==typeof t?{title:t.title,secondaryLabel:t.secondaryLabel}:{title:null!=t?t:""}},q=m((e=>!!am(l,(t=>dm(t,e)))),[l]),G=cd((()=>null==z?void 0:z(A))),Z=cd((()=>null==n?void 0:n.filter((e=>{const{title:t,secondaryLabel:r}=U(e),n=A.trim().toLowerCase();return t.includes(n)||r&&r.includes(n)})))),Q=(e,t)=>{O(t),null==x||x(e,(e=>F?F(e):e)(e))},X=e=>{const t=e.target.value;B(t),null==M||M()},K=()=>{var e;B(""),null===(e=N.current)||void 0===e||e.focus(),null==M||M()},J=()=>{null==C||C()};oe("keydown",(e=>{var t,r;switch(e.code){case"ArrowDown":if(e.preventDefault(),_<H.length-1){const e=_+1;null===(t=V.current[e])||void 0===t||t.focus(),O(e)}break;case"ArrowUp":if(e.preventDefault(),_>0){const e=_-1;null===(r=V.current[e])||void 0===r||r.focus(),O(e)}else 0===_&&N.current&&(N.current.focus(),O(-1));break;case"Space":case"Enter":document.activeElement===V.current[_]&&(e.preventDefault(),H[_]&&Q(H[_],_))}})),s((()=>{var e;if(!y)return void(null===(e=Y.current)||void 0===e||e.scrollTo({top:0}));const t=setTimeout((()=>{if(!n)return;const e=n.indexOf(y);Y.current&&-1!==e&&(Y.current.scrollToIndex({index:e}),O(e))}),0);return()=>clearTimeout(t)}),[V,n,O,y]),s((()=>{var e,t,r;if(L)return;if(d||!n)return;const o=n.findIndex((e=>q(e)));N.current?(O(-1),setTimeout((()=>{var e;return null===(e=N.current)||void 0===e?void 0:e.focus()}),200)):_>0?(null===(e=Y.current)||void 0===e||e.scrollToIndex({index:_,align:"center"}),setTimeout((()=>{var e;return null===(e=V.current[_])||void 0===e?void 0:e.focus()}),200)):-1!==o?(null===(t=Y.current)||void 0===t||t.scrollToIndex({index:o,align:"center"}),O(o),setTimeout((()=>{var e;return null===(e=V.current[o])||void 0===e?void 0:e.focus()}),200)):(null===(r=Y.current)||void 0===r||r.scrollToIndex({index:0}),O(0),setTimeout((()=>{var e;return null===(e=V.current[0])||void 0===e?void 0:e.focus()}),200))}),[q,d,_,n,L,O]),s((()=>{L&&j&&(d||"success"===c&&N.current&&(O(-1),N.current.focus()))}),[L,j,c,O,d]),s((()=>{var e;R(null!==(e=""===A?n:z?G():Z())&&void 0!==e?e:[])}),[G,Z,n,z,A]);const ee=e=>o?t(e?nv:ov,{"aria-hidden":!0}):e?t(tv,{"aria-hidden":!0}):t(rv,{}),te=(e,r)=>{const{title:n,secondaryLabel:o}=U(e);return t(Tc,{displayType:g,label:n,maxLines:h,selected:r,sublabel:o,truncationType:u,variant:p})},re=(n,i)=>{if(!C||"success"===c){const s=q(n),a=i===_;return t(ev,{"aria-selected":s,"aria-multiselectable":o,"data-testid":"list-item",onClick:()=>Q(n,i),onMouseEnter:()=>(e=>{O(e)})(i),ref:e=>{V.current[i]=e},role:"option",tabIndex:a?0:-1,$active:a,$selected:s,children:E?E(n,{selected:s}):e(r,{children:[ee(s),te(n,s)]})},((e,t)=>`item_${t}__${F?F(e):e}`)(n,i))}},ne=()=>{if(l&&o&&H.length>0&&!A&&"success"===c)return t(iv,{children:t(lv,{onClick:w,type:"button",$variant:p,children:0===l.length?"Select all":"Clear all"})})},ie=()=>{if(!T&&(A||!I)&&0===H.length&&"success"===c)return e(dv,{"data-testid":"list-no-results",children:[t(cv,{"data-testid":"no-result-icon"}),"No results found."]})},se=()=>{if(C&&"loading"===c)return e(dv,{"data-testid":"list-loading",children:[t(uv,{}),"Loading..."]})},ae=()=>{if(C&&"fail"===c)return e(dv,{"data-testid":"list-fail",children:[t(cv,{"data-testid":"load-error-icon"}),"Failed to load. ",t(av,{onClick:J,type:"button",$variant:p,children:"Try again."})]})};return e(Xb,{"data-testid":"dropdown-container",ref:P,$width:v,$variant:p,children:[e(Kb,{ref:W,"data-testid":"dropdown-list",children:[(()=>{if((I||z)&&"success"===c)return t(bv,{ref:N,onChange:X,value:A,placeholder:D,"data-testid":"search-input","aria-label":"Enter text to search",onClear:K,variant:p})})(),ne(),ie(),se(),ae(),t(Jb,{role:"listbox",id:b,children:t(yb,Object.assign({ref:Y,style:{height:"100%"},data:H,customScrollParent:null!==(le=P.current)&&void 0!==le?le:void 0,itemContent:(e,t)=>re(t,e)},"test"===process.env.NODE_ENV?{initialItemCount:H.length,key:H.length}:{}))})]}),(()=>{if(k)return t("div",{"data-testid":"custom-cta",children:k($,H)})})()]});var le},yv=x(Vn)`
    display: flex;
    align-items: center;
    gap: ${En["spacing-8"]};
    width: 100%;
    height: calc(3rem - 2px); // exclude top and bottom borders
    padding: ${En["spacing-16"]};

    ${e=>"small"===e.$variant?Cn["body-md-regular"]:Cn["body-baseline-regular"]}

    :disabled {
        cursor: not-allowed;
    }
`,xv=x.div`
    display: flex;
    align-items: center;
    transform: rotate(${e=>e.$expanded?180:0}deg);
    transition: transform ${Fn["duration-250"]} ${Fn["ease-default"]};

    svg {
        color: ${$n.icon};
        height: 1em;
        width: 1em;
    }
`;var wv;g((({children:r,disabled:n,expanded:o,listboxId:i,popupRole:s,readOnly:a,variant:l},d)=>e(yv,{ref:d,type:"button","aria-expanded":o,"aria-haspopup":s,"data-testid":"selector",disabled:n,"aria-controls":i,$variant:l,children:[r,!a&&t(xv,{$expanded:o,$variant:l,children:t(F,{"aria-hidden":!0})})]}))),x.li`
    display: ${e=>e.$visible?"flex":"none"};
`,x.div`
    flex: 1;
    display: flex;
    align-items: flex-start;
    gap: ${En["spacing-8"]};
    padding: ${En["spacing-12"]} ${En["spacing-8"]};
    cursor: ${e=>e.$toggleable?"default":"pointer"};
    overflow: hidden; // required for label to truncate properly

    outline: none;

    ${e=>e.$active&&w`
            background: ${$n["bg-hover"]};
        `}
`,x.div`
    height: 1px;
    width: calc((1lh + ${En["spacing-8"]}) * ${e=>e.$level});
`,x.div`
    width: 1lh;
    height: 1lh;
    color: ${$n["icon-primary"]};
    cursor: pointer;

    svg {
        width: 1lh;
        height: 1lh;
        transition: transform ${Fn["duration-350"]}
            ${Fn["ease-standard"]};

        ${e=>{if(e.$expanded)return w`
                    transform: rotate(90deg);
                `}}
    }
`,x.div`
    width: 1lh;
    height: 1lh;
    margin-right: ${En["spacing-8"]};
`,x.div`
    flex-shrink: 0;
    height: 1lh;
    width: ${e=>e.$hasNestedSiblings?"1lh":En["spacing-16"]};

    display: flex;
    justify-content: center;
`,x(W)`
    flex-shrink: 0;
    height: 1lh;
    width: 1lh;
    color: ${$n["icon-selected"]};
`,function(e){e.Ready="overlay-context-ready",e.Change="overlay-context-change"}(wv||(wv={}));const $v=x.div`
    display: flex;
    flex-direction: column;
`,Cv=e=>"right"===e?"bottom-end":"bottom-start",Fv=({enabled:n,isOpen:o,onOpen:l,onClose:d,onDismiss:c,renderElement:u,renderDropdown:h,customZIndex:g,clickToToggle:m=!1,offset:f=0,alignment:p="left",fitAvailableHeight:b})=>{var v;const y=C(),x=In["sm-max"]({theme:y}),w=i(null),$=i(null),{width:F=0}=Xo({targetRef:w,handleHeight:!1}),S={name:"center",fn:({x:e,rects:t})=>{const r=0===e||e+t.floating.width===window.innerWidth,n=window.innerWidth<x;return{x:r&&n?(window.innerWidth-t.floating.width)/2:e}}},{refs:E,floatingStyles:k,context:I}=N({open:o,onOpenChange:(e,t,r)=>{"escape-key"===r?null==c||c():e&&!o?null==l||l():!e&&o&&(null==d||d(r))},whileElementsMounted:Y,placement:Cv(p),middleware:[U(f),q(),G({limiter:Z()}),Q({apply({availableHeight:e}){$.current&&Object.assign($.current.style,{maxHeight:b?`${e}px`:void 0,overflowY:b?"hidden":void 0})}}),S]}),T=(()=>{const[e,t]=a(void 0),r=V();return s((()=>{if(!r)return void t(void 0);const e=e=>{t(e.zIndex)};return r.events.on(wv.Change,e),r.events.emit(wv.Ready),()=>r.events.off(wv.Change,e)}),[r]),e})(),{isMounted:D,styles:z}=X(I,{initial:{opacity:0},open:{opacity:1},duration:300}),M=K(I,{enabled:n,toggle:m}),_=J(I,{enabled:n}),{getReferenceProps:O,getFloatingProps:A}=ee([M,_]);return e(r,{children:[t("div",Object.assign({ref:e=>{w.current=e,E.setReference(e)}},O(),{children:u()})),D&&t(te,{children:t(re,{context:I,modal:!1,initialFocus:$,returnFocus:!1,children:t("div",Object.assign({ref:E.setFloating,style:Object.assign(Object.assign({},k),{zIndex:null!==(v=null!=g?g:T)&&void 0!==v?v:50})},A(),{children:t($v,{ref:$,style:Object.assign({},z),inert:z.opacity<1?"":void 0,children:h({elementWidth:F})})}))})})]})},Sv=x(Pn)`
    height: 3rem;
    gap: ${En["spacing-8"]};
    // space for clear icon
    padding-right: calc(1.25rem + ${En["spacing-20"]});
`,Ev=r=>{var{id:n,disabled:o=!1,error:l,value:d,format:c="12hr",readOnly:u,onChange:h,onFocus:g,onBlur:f,alignment:b="left",dropdownZIndex:v,startLimit:y,endLimit:x,interval:w=15}=r,$=ne(r,["id","disabled","error","value","format","readOnly","onChange","onFocus","onBlur","alignment","dropdownZIndex","startLimit","endLimit","interval"]);const[C]=a((()=>dd.generate())),[F,S]=a(null),[E,k]=a(!1),[I,T]=a(""),[D,z]=a(""),[M,_]=a(""),[O,A]=a(""),[B,H]=a(""),R=i(null),j=i(null),L=i(null),P=p((()=>Qn.generateTimings(w,c,y,x)),[w,c,y,x]),W=p((()=>{if(""===O)return P;const e=Qn.findClosestFlooredTime(O,P);return e?P.slice(P.indexOf(e)):[]}),[P,O]),V=m((e=>Qn.parseInput(e,c)),[c]);s((()=>{var e,t;if(d){const r=null!==(e=V(d.start))&&void 0!==e?e:"",n=null!==(t=V(d.end))&&void 0!==t?t:"";z(r),_(n),A(r),H(n)}}),[d,V]),s((()=>{if(l)return void k(!1);const e=V(D),t=V(M);if(void 0===e)T("Invalid start time");else if(void 0===t)T("Invalid end time");else{if(!(""!==e&&""!==t&&Qn.to24Hour(t)<Qn.to24Hour(e)))return T(""),void(document.activeElement!==j.current&&document.activeElement!==L.current||k(!0));T("End time must be after start time")}k(!1)}),[D,M,V,l]);const N=e=>{o||u||(F||E||null==g||g(),S(e),k(!0))},Y=e=>{var t;o||u||(S(e),k(!0),null===(t=("start"===e?j:L).current)||void 0===t||t.select())};function U(e){var t;switch(e.code){case"Enter":"start"===F?q(D):"end"===F&&(E&&G(M),null===(t=L.current)||void 0===t||t.blur());break;case"Tab":Z(D,M,{})}}const q=e=>{Z(e,M,{goToNextInput:!0})},G=e=>{Z(D,e,{triggerOnBlur:!0})},Z=(e,t,{goToNextInput:r,triggerOnBlur:n})=>{var o,i,s;const a=null!==(o=V(e))&&void 0!==o?o:O,l=null!==(i=V(t))&&void 0!==i?i:B;z(a),_(l);a===O&&l===B||null==h||h({start:a,end:l}),r&&void 0!==V(e)&&(S("end"),null===(s=L.current)||void 0===s||s.select()),n&&(S(null),k(!1),null==f||f()),A(a),H(l)},Q=e=>{e.stopPropagation(),z(""),_(""),A(""),H("");null==h||h({start:"",end:""}),S(null),k(!1)},X=e=>{R.current&&!R.current.contains(e.relatedTarget)&&F&&!E&&Z(D,M,{triggerOnBlur:!0})},K=()=>{if(!u&&!o&&((null==D?void 0:D.length)>0||(null==M?void 0:M.length)>0))return t($c,{onClick:Q,type:"button","aria-label":"Clear",children:t(pc,{"aria-hidden":!0})})};return e(Nn,Object.assign({id:n},$,{children:[t(Qb,{children:t(Fv,{enabled:!u&&!o,isOpen:E,renderElement:()=>e(Sv,{ref:R,$disabled:o,$error:l||!!I,$readOnly:u,onBlur:X,children:[e(An,{error:l||!!I,currentActive:null===F?"none":F,children:[t(Un,{ref:j,onFocus:()=>N("start"),placeholder:"start"===F?"hh:mm":"From",onChange:e=>z(e.target.value),value:D,disabled:o,readOnly:u,"data-testid":$["data-testid"]?`${$["data-testid"]}-timepicker-selector`:"timepicker-selector",onClick:()=>Y("start"),onKeyDown:U,autoComplete:"off","aria-label":"Start time input",type:"text",role:"combobox","aria-expanded":E,"aria-controls":C,"aria-autocomplete":"list"}),t(Un,{ref:L,onFocus:()=>N("end"),placeholder:"end"===F?"hh:mm":"To",onChange:e=>_(e.target.value),value:M,disabled:o,readOnly:u,"data-testid":$["data-testid"]?`${$["data-testid"]}-timepicker-selector`:"timepicker-selector",onClick:()=>Y("end"),onKeyDown:U,autoComplete:"off","aria-label":"End time input",type:"text",role:"combobox","aria-expanded":E,"aria-controls":C,"aria-autocomplete":"list"})]}),K()]}),renderDropdown:()=>{if(E)return t(vv,"start"===F?{listItems:P,onSelectItem:q,selectedItems:[D],disableItemFocus:!0,topScrollItem:Qn.findClosestFlooredTime(V(D),P),listboxId:C}:{listItems:W,onSelectItem:G,selectedItems:[M],disableItemFocus:!0,topScrollItem:Qn.findClosestFlooredTime(V(M),W),listboxId:C})},onClose:e=>{"outside-press"===e?(S(null),k(!1),null==f||f()):Z(D,M,{triggerOnBlur:!0})},onDismiss:()=>{var e;null===(e=("start"===F?j:L).current)||void 0===e||e.focus(),k(!1)},offset:8,alignment:b,fitAvailableHeight:!0,customZIndex:v})}),!l&&I&&t(mc,{id:n?`${n}-error-message`:"error-message",tabIndex:0,"data-testid":n?`${n}-error-message`:"error-message",children:I})]}))},kv=e=>{var{variant:r="dial"}=e,n=ne(e,["variant"]);return t("combobox"===r?Ev:gc,Object.assign({},n))};export{kv as TimeRangePicker};
//# sourceMappingURL=index.js.map
