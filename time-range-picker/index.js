import{jsxs as e,jsx as t,Fragment as r}from"react/jsx-runtime";import*as n from"react";import o,{useRef as i,useEffect as s,useState as a,isValidElement as l,createRef as d,cloneElement as c,PureComponent as u,useLayoutEffect as h,forwardRef as g,useCallback as m,useContext as f,useMemo as p,createElement as b}from"react";import{ArrowRightIcon as v,ChevronDownIcon as y}from"@lifesg/react-icons";import x,{css as w,keyframes as $,useTheme as F}from"styled-components";import{ChevronDownIcon as C}from"@lifesg/react-icons/chevron-down";import{ChevronUpIcon as E}from"@lifesg/react-icons/chevron-up";import S,{findDOMNode as k,unstable_batchedUpdates as I}from"react-dom";import{ArrowRightIcon as T}from"@lifesg/react-icons/arrow-right";import{ExclamationCircleFillIcon as D}from"@lifesg/react-icons/exclamation-circle-fill";import{ExclamationTriangleFillIcon as B}from"@lifesg/react-icons/exclamation-triangle-fill";import{ICircleFillIcon as z}from"@lifesg/react-icons/i-circle-fill";import{TickCircleFillIcon as M}from"@lifesg/react-icons/tick-circle-fill";import{ExternalIcon as A}from"@lifesg/react-icons/external";import{CircleIcon as _}from"@lifesg/react-icons/circle";import{CircleDotIcon as O}from"@lifesg/react-icons/circle-dot";import{CrossIcon as R}from"@lifesg/react-icons/cross";import{SquareIcon as H}from"@lifesg/react-icons/square";import{SquareTickFillIcon as j}from"@lifesg/react-icons/square-tick-fill";import{TickIcon as L}from"@lifesg/react-icons/tick";import{MagnifierIcon as P}from"@lifesg/react-icons/magnifier";import"@lifesg/react-icons/caret-right";import{MinusSquareFillIcon as W}from"@lifesg/react-icons/minus-square-fill";import{useFloatingTree as N,useFloating as V,autoUpdate as Y,offset as U,flip as q,shift as G,limitShift as Z,size as Q,useTransitionStyles as X,useClick as K,useDismiss as J,useInteractions as ee,FloatingPortal as te,FloatingFocusManager as re}from"@floating-ui/react";function ne(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(n=Object.getOwnPropertySymbols(e);o<n.length;o++)t.indexOf(n[o])<0&&Object.prototype.propertyIsEnumerable.call(e,n[o])&&(r[n[o]]=e[n[o]])}return r}"function"==typeof SuppressedError&&SuppressedError;const oe=(e,t,r="window",n)=>{const o=i();s((()=>{o.current=t}),[t]),s((()=>{let t;switch(r){case"window":t=window;break;case"document":t=document;break;default:t=r}if(!t||!t.addEventListener)return;const i=e=>{var t;return null===(t=o.current)||void 0===t?void 0:t.call(o,e)};return t.addEventListener(e,i,n),()=>{null==t||t.removeEventListener(e,i,n)}}),[e,r])};var ie="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};function se(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var ae=Array.isArray,le="object"==typeof ie&&ie&&ie.Object===Object&&ie,de=le,ce="object"==typeof self&&self&&self.Object===Object&&self,ue=de||ce||Function("return this")(),he=ue.Symbol,ge=he,me=Object.prototype,fe=me.hasOwnProperty,pe=me.toString,be=ge?ge.toStringTag:void 0;var ve=function(e){var t=fe.call(e,be),r=e[be];try{e[be]=void 0;var n=!0}catch(e){}var o=pe.call(e);return n&&(t?e[be]=r:delete e[be]),o},ye=Object.prototype.toString;var xe=ve,we=function(e){return ye.call(e)},$e=he?he.toStringTag:void 0;var Fe=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":$e&&$e in Object(e)?xe(e):we(e)};var Ce=function(e){return null!=e&&"object"==typeof e},Ee=Fe,Se=Ce;var ke=function(e){return"symbol"==typeof e||Se(e)&&"[object Symbol]"==Ee(e)},Ie=ae,Te=ke,De=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,Be=/^\w*$/;var ze=function(e,t){if(Ie(e))return!1;var r=typeof e;return!("number"!=r&&"symbol"!=r&&"boolean"!=r&&null!=e&&!Te(e))||(Be.test(e)||!De.test(e)||null!=t&&e in Object(t))};var Me=function(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)},Ae=Fe,_e=Me;var Oe,Re=function(e){if(!_e(e))return!1;var t=Ae(e);return"[object Function]"==t||"[object GeneratorFunction]"==t||"[object AsyncFunction]"==t||"[object Proxy]"==t},He=ue["__core-js_shared__"],je=(Oe=/[^.]+$/.exec(He&&He.keys&&He.keys.IE_PROTO||""))?"Symbol(src)_1."+Oe:"";var Le=function(e){return!!je&&je in e},Pe=Function.prototype.toString;var We=function(e){if(null!=e){try{return Pe.call(e)}catch(e){}try{return e+""}catch(e){}}return""},Ne=Re,Ve=Le,Ye=Me,Ue=We,qe=/^\[object .+?Constructor\]$/,Ge=Function.prototype,Ze=Object.prototype,Qe=Ge.toString,Xe=Ze.hasOwnProperty,Ke=RegExp("^"+Qe.call(Xe).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");var Je=function(e,t){return null==e?void 0:e[t]},et=function(e){return!(!Ye(e)||Ve(e))&&(Ne(e)?Ke:qe).test(Ue(e))},tt=Je;var rt=function(e,t){var r=tt(e,t);return et(r)?r:void 0},nt=rt(Object,"create"),ot=nt;var it=function(){this.__data__=ot?ot(null):{},this.size=0};var st=function(e){var t=this.has(e)&&delete this.__data__[e];return this.size-=t?1:0,t},at=nt,lt=Object.prototype.hasOwnProperty;var dt=function(e){var t=this.__data__;if(at){var r=t[e];return"__lodash_hash_undefined__"===r?void 0:r}return lt.call(t,e)?t[e]:void 0},ct=nt,ut=Object.prototype.hasOwnProperty;var ht=function(e){var t=this.__data__;return ct?void 0!==t[e]:ut.call(t,e)},gt=nt;var mt=function(e,t){var r=this.__data__;return this.size+=this.has(e)?0:1,r[e]=gt&&void 0===t?"__lodash_hash_undefined__":t,this},ft=it,pt=st,bt=dt,vt=ht,yt=mt;function xt(e){var t=-1,r=null==e?0:e.length;for(this.clear();++t<r;){var n=e[t];this.set(n[0],n[1])}}xt.prototype.clear=ft,xt.prototype.delete=pt,xt.prototype.get=bt,xt.prototype.has=vt,xt.prototype.set=yt;var wt=xt;var $t=function(){this.__data__=[],this.size=0};var Ft=function(e,t){return e===t||e!=e&&t!=t},Ct=Ft;var Et=function(e,t){for(var r=e.length;r--;)if(Ct(e[r][0],t))return r;return-1},St=Et,kt=Array.prototype.splice;var It=function(e){var t=this.__data__,r=St(t,e);return!(r<0)&&(r==t.length-1?t.pop():kt.call(t,r,1),--this.size,!0)},Tt=Et;var Dt=function(e){var t=this.__data__,r=Tt(t,e);return r<0?void 0:t[r][1]},Bt=Et;var zt=function(e){return Bt(this.__data__,e)>-1},Mt=Et;var At=function(e,t){var r=this.__data__,n=Mt(r,e);return n<0?(++this.size,r.push([e,t])):r[n][1]=t,this},_t=$t,Ot=It,Rt=Dt,Ht=zt,jt=At;function Lt(e){var t=-1,r=null==e?0:e.length;for(this.clear();++t<r;){var n=e[t];this.set(n[0],n[1])}}Lt.prototype.clear=_t,Lt.prototype.delete=Ot,Lt.prototype.get=Rt,Lt.prototype.has=Ht,Lt.prototype.set=jt;var Pt=Lt,Wt=rt(ue,"Map"),Nt=wt,Vt=Pt,Yt=Wt;var Ut=function(e){var t=typeof e;return"string"==t||"number"==t||"symbol"==t||"boolean"==t?"__proto__"!==e:null===e};var qt=function(e,t){var r=e.__data__;return Ut(t)?r["string"==typeof t?"string":"hash"]:r.map},Gt=qt;var Zt=function(e){var t=Gt(this,e).delete(e);return this.size-=t?1:0,t},Qt=qt;var Xt=function(e){return Qt(this,e).get(e)},Kt=qt;var Jt=function(e){return Kt(this,e).has(e)},er=qt;var tr=function(e,t){var r=er(this,e),n=r.size;return r.set(e,t),this.size+=r.size==n?0:1,this},rr=function(){this.size=0,this.__data__={hash:new Nt,map:new(Yt||Vt),string:new Nt}},nr=Zt,or=Xt,ir=Jt,sr=tr;function ar(e){var t=-1,r=null==e?0:e.length;for(this.clear();++t<r;){var n=e[t];this.set(n[0],n[1])}}ar.prototype.clear=rr,ar.prototype.delete=nr,ar.prototype.get=or,ar.prototype.has=ir,ar.prototype.set=sr;var lr=ar,dr=lr;function cr(e,t){if("function"!=typeof e||null!=t&&"function"!=typeof t)throw new TypeError("Expected a function");var r=function(){var n=arguments,o=t?t.apply(this,n):n[0],i=r.cache;if(i.has(o))return i.get(o);var s=e.apply(this,n);return r.cache=i.set(o,s)||i,s};return r.cache=new(cr.Cache||dr),r}cr.Cache=dr;var ur=cr;var hr=function(e){var t=ur(e,(function(e){return 500===r.size&&r.clear(),e})),r=t.cache;return t},gr=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,mr=/\\(\\)?/g,fr=hr((function(e){var t=[];return 46===e.charCodeAt(0)&&t.push(""),e.replace(gr,(function(e,r,n,o){t.push(n?o.replace(mr,"$1"):r||e)})),t}));var pr=function(e,t){for(var r=-1,n=null==e?0:e.length,o=Array(n);++r<n;)o[r]=t(e[r],r,e);return o},br=ae,vr=ke,yr=he?he.prototype:void 0,xr=yr?yr.toString:void 0;var wr=function e(t){if("string"==typeof t)return t;if(br(t))return pr(t,e)+"";if(vr(t))return xr?xr.call(t):"";var r=t+"";return"0"==r&&1/t==-1/0?"-0":r},$r=wr;var Fr=ae,Cr=ze,Er=fr,Sr=function(e){return null==e?"":$r(e)};var kr=function(e,t){return Fr(e)?e:Cr(e,t)?[e]:Er(Sr(e))},Ir=ke;var Tr=function(e){if("string"==typeof e||Ir(e))return e;var t=e+"";return"0"==t&&1/e==-1/0?"-0":t},Dr=kr,Br=Tr;var zr=function(e,t){for(var r=0,n=(t=Dr(t,e)).length;null!=e&&r<n;)e=e[Br(t[r++])];return r&&r==n?e:void 0},Mr=zr;var Ar=function(e,t,r){var n=null==e?void 0:Mr(e,t);return void 0===n?r:n},_r=se(Ar);const Or=(e,t,r)=>_r(r,t)||_r(e,t),Rr=(e,t)=>{const r=t||e.defaultValue;return _r(e.collections,r)},Hr={collections:{default:{"width-005":.5,"width-010":1,"width-020":2,"width-040":4,solid:"solid"}},defaultValue:"default"},jr=e=>t=>{var r;const n=t.theme,o=Rr(Hr,null==n?void 0:n.borderScheme);return(null===(r=null==n?void 0:n.overrides)||void 0===r?void 0:r.border)?`${Or(o,e,n.overrides.border)}px`:`${o[e]}px`},Lr={"width-005":jr("width-005"),"width-010":jr("width-010"),"width-020":jr("width-020"),"width-040":jr("width-040"),solid:(Pr="solid",e=>{var t;const r=e.theme,n=Rr(Hr,null==r?void 0:r.borderScheme),o=(null===(t=null==r?void 0:r.overrides)||void 0===t?void 0:t.border)?Or(n,Pr,r.overrides.border):n[Pr];return"function"==typeof o?o(e):o})};var Pr;const Wr={collections:{lifesg:{"brand-10":"#2C0C0B","brand-20":"#4C1513","brand-30":"#6C1D1B","brand-40":"#922825","brand-50":"#BF3431","brand-60":"#F15D5A","brand-70":"#F69491","brand-80":"#FABAB7","brand-90":"#FCD7D2","brand-95":"#FFEBE7","brand-100":"#FFF6F4","primary-10":"#001731","primary-20":"#002752","primary-30":"#003874","primary-40":"#004D9F","primary-50":"#1768BE","primary-60":"#3C91EC","primary-70":"#6CB4FF","primary-80":"#A5CDFF","primary-90":"#CFE1FE","primary-95":"#E8F0FE","primary-100":"#F7F9FF","secondary-10":"#131529","secondary-20":"#222547","secondary-30":"#2F3565","secondary-40":"#42498B","secondary-50":"#5B62A7","secondary-60":"#858CBD","secondary-70":"#A8ADCF","secondary-80":"#C6C9E0","secondary-90":"#DDDFEC","secondary-95":"#EDEEF5","secondary-100":"#F8F8FB","neutral-10":"#161616","neutral-20":"#282828","neutral-30":"#393939","neutral-40":"#4E4E4E","neutral-50":"#686868","neutral-60":"#8E8E8E","neutral-70":"#AFAFB0","neutral-80":"#C7CACA","neutral-90":"#DDE1E2","neutral-95":"#EDEFEF","neutral-100":"#F9F9F9","success-10":"#081A0F","success-20":"#0E2D1B","success-30":"#154126","success-40":"#1C5A34","success-50":"#257645","success-60":"#44A068","success-70":"#64C189","success-80":"#80DCA5","success-90":"#B4ECCB","success-95":"#D5F6E2","success-100":"#EFFCF4","warning-10":"#221302","warning-20":"#3B2204","warning-30":"#543106","warning-40":"#744408","warning-50":"#98590C","warning-60":"#D07A13","warning-70":"#E4A244","warning-80":"#F5C26C","warning-90":"#FADBA6","warning-95":"#FCECD4","warning-100":"#FDF7F0","error-10":"#330505","error-20":"#550808","error-30":"#750C0C","error-40":"#9E130F","error-50":"#CB2213","error-60":"#DE6C6C","error-70":"#E89B9B","error-80":"#EFBEBE","error-90":"#F5D9D9","error-95":"#F9ECEC","error-100":"#FCF7F7","info-10":"#021824","info-20":"#032B3F","info-30":"#053D59","info-40":"#065478","info-50":"#176E9B","info-60":"#5296BE","info-70":"#82B5DA","info-80":"#ACCFE7","info-90":"#CCE3F1","info-95":"#E3F1F8","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000","primary-inverse":"#FEAB10"},bookingsg:{"brand-10":"#2C0C0B","brand-20":"#4C1513","brand-30":"#6C1D1B","brand-40":"#922825","brand-50":"#BF3431","brand-60":"#F15D5A","brand-70":"#F69491","brand-80":"#FABAB7","brand-90":"#FCD7D2","brand-95":"#FFEBE7","brand-100":"#FFF6F4","primary-10":"#1A122C","primary-20":"#2F1F4D","primary-30":"#422D6E","primary-40":"#5B3D97","primary-50":"#7654BC","primary-60":"#9A82CD","primary-70":"#B7A7D8","primary-80":"#CFC5E5","primary-90":"#E3DDF0","primary-95":"#F0EDF7","primary-100":"#F9F8FC","secondary-10":"#0E1723","secondary-20":"#18293D","secondary-30":"#233A57","secondary-40":"#305078","secondary-50":"#4B6A8F","secondary-60":"#7B91A9","secondary-70":"#A1B1C3","secondary-80":"#C1CBD7","secondary-90":"#DBE1E8","secondary-95":"#EBEFF2","secondary-100":"#F7F8FA","neutral-10":"#161616","neutral-20":"#282828","neutral-30":"#393939","neutral-40":"#4E4E4E","neutral-50":"#686868","neutral-60":"#8E8E8E","neutral-70":"#AFAFB0","neutral-80":"#C7CACA","neutral-90":"#DDE1E2","neutral-95":"#EDEFEF","neutral-100":"#F9F9F9","success-10":"#081A0F","success-20":"#0E2D1B","success-30":"#154126","success-40":"#1C5A34","success-50":"#257645","success-60":"#44A068","success-70":"#64C189","success-80":"#80DCA5","success-90":"#B4ECCB","success-95":"#D5F6E2","success-100":"#EFFCF4","warning-10":"#221302","warning-20":"#3B2204","warning-30":"#543106","warning-40":"#744408","warning-50":"#98590C","warning-60":"#D07A13","warning-70":"#E4A244","warning-80":"#F5C26C","warning-90":"#FADBA6","warning-95":"#FCECD4","warning-100":"#FDF7F0","error-10":"#330505","error-20":"#550808","error-30":"#750C0C","error-40":"#9E130F","error-50":"#CB2213","error-60":"#DE6C6C","error-70":"#E89B9B","error-80":"#EFBEBE","error-90":"#F5D9D9","error-95":"#F9ECEC","error-100":"#FCF7F7","info-10":"#021824","info-20":"#032B3F","info-30":"#053D59","info-40":"#065478","info-50":"#176E9B","info-60":"#5296BE","info-70":"#82B5DA","info-80":"#ACCFE7","info-90":"#CCE3F1","info-95":"#E3F1F8","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000","primary-inverse":"#FEAB10"},rbs:{"brand-10":"#0E123A","brand-20":"#191E65","brand-30":"#232B90","brand-40":"#303BC5","brand-50":"#494CFF","brand-60":"#AD6EFF","brand-70":"#AEA4FF","brand-80":"#C5C4FF","brand-90":"#DDDCFF","brand-95":"#EDECFF","brand-100":"#F8F8FF","primary-10":"#10152B","primary-20":"#1C254B","primary-30":"#28356C","primary-40":"#38489A","primary-50":"#4D5AD7","primary-60":"#7487F2","primary-70":"#9AAAFC","primary-80":"#BDC7FD","primary-90":"#DADFFB","primary-95":"#ECEEFE","primary-100":"#F7F8FF","secondary-10":"#19151D","secondary-20":"#2B2533","secondary-30":"#3E3649","secondary-40":"#564A64","secondary-50":"#6F637D","secondary-60":"#948B9F","secondary-70":"#B3ACBB","secondary-80":"#CCC8D2","secondary-90":"#E1DEE4","secondary-95":"#EFEEF1","secondary-100":"#F9F8F9","neutral-10":"#161616","neutral-20":"#282828","neutral-30":"#393939","neutral-40":"#4E4E4E","neutral-50":"#686868","neutral-60":"#8E8E8E","neutral-70":"#AFAFB0","neutral-80":"#C7CACA","neutral-90":"#DDE1E2","neutral-95":"#EDEFEF","neutral-100":"#F9F9F9","success-10":"#081A0F","success-20":"#0E2D1B","success-30":"#154126","success-40":"#1C5A34","success-50":"#257645","success-60":"#44A068","success-70":"#64C189","success-80":"#80DCA5","success-90":"#B4ECCB","success-95":"#D5F6E2","success-100":"#EFFCF4","warning-10":"#221302","warning-20":"#3B2204","warning-30":"#543106","warning-40":"#744408","warning-50":"#98590C","warning-60":"#D07A13","warning-70":"#E4A244","warning-80":"#F5C26C","warning-90":"#FADBA6","warning-95":"#FCECD4","warning-100":"#FDF7F0","error-10":"#330505","error-20":"#550808","error-30":"#750C0C","error-40":"#9E130F","error-50":"#CB2213","error-60":"#DE6C6C","error-70":"#E89B9B","error-80":"#EFBEBE","error-90":"#F5D9D9","error-95":"#F9ECEC","error-100":"#FCF7F7","info-10":"#021824","info-20":"#032B3F","info-30":"#053D59","info-40":"#065478","info-50":"#176E9B","info-60":"#5296BE","info-70":"#82B5DA","info-80":"#ACCFE7","info-90":"#CCE3F1","info-95":"#E3F1F8","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000","primary-inverse":"#FEAB10"},mylegacy:{"brand-10":"#2C0C0B","brand-20":"#4C1513","brand-30":"#6C1D1B","brand-40":"#922825","brand-50":"#BF3431","brand-60":"#F15D5A","brand-70":"#F69491","brand-80":"#FABAB7","brand-90":"#FCD7D2","brand-95":"#FFEBE7","brand-100":"#FFF6F4","primary-10":"#0011924","primary-20":"#032B40","primary-30":"#043D5A","primary-40":"#05547B","primary-50":"#096EA1","primary-60":"#2098D3","primary-70":"#5CB9E8","primary-80":"#8BD3F6","primary-90":"#BEE6FA","primary-95":"#E2F2FA","primary-100":"#F4FAFC","secondary-10":"#131529","secondary-20":"#222547","secondary-30":"#2F3565","secondary-40":"#42498B","secondary-50":"#5B62A7","secondary-60":"#858CBD","secondary-70":"#A8ADCF","secondary-80":"#C6C9E0","secondary-90":"#DDDFEC","secondary-95":"#EDEEF5","secondary-100":"#F8F8FB","neutral-10":"#161616","neutral-20":"#282828","neutral-30":"#393939","neutral-40":"#4E4E4E","neutral-50":"#686868","neutral-60":"#8E8E8E","neutral-70":"#AFAFB0","neutral-80":"#C7CACA","neutral-90":"#DDE1E2","neutral-95":"#EDEFEF","neutral-100":"#F9F9F9","success-10":"#081A0F","success-20":"#0E2D1B","success-30":"#154126","success-40":"#1C5A34","success-50":"#257645","success-60":"#44A068","success-70":"#64C189","success-80":"#80DCA5","success-90":"#B4ECCB","success-95":"#D5F6E2","success-100":"#EFFCF4","warning-10":"#221302","warning-20":"#3B2204","warning-30":"#543106","warning-40":"#744408","warning-50":"#98590C","warning-60":"#D07A13","warning-70":"#E4A244","warning-80":"#F5C26C","warning-90":"#FADBA6","warning-95":"#FCECD4","warning-100":"#FDF7F0","error-10":"#330505","error-20":"#550808","error-30":"#750C0C","error-40":"#9E130F","error-50":"#CB2213","error-60":"#DE6C6C","error-70":"#E89B9B","error-80":"#EFBEBE","error-90":"#F5D9D9","error-95":"#F9ECEC","error-100":"#FCF7F7","info-10":"#021824","info-20":"#032B3F","info-30":"#053D59","info-40":"#065478","info-50":"#176E9B","info-60":"#5296BE","info-70":"#82B5DA","info-80":"#ACCFE7","info-90":"#CCE3F1","info-95":"#E3F1F8","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000","primary-inverse":"#FEAB10"},ccube:{"brand-10":"#1F1221","brand-20":"#371F3B","brand-30":"#4E2C53","brand-40":"#6B3E73","brand-50":"#8D5197","brand-60":"#FF3399","brand-70":"#FF88C4","brand-80":"#FFB3D9","brand-90":"#FFD4E9","brand-95":"#FFE8F3","brand-100":"#FFD6EB","primary-10":"#1F1221","primary-20":"#371F3B","primary-30":"#4E2C53","primary-40":"#6B3E73","primary-50":"#8D5197","primary-60":"#B07DB7","primary-70":"#C7A3CC","primary-80":"#D9C2DD","primary-90":"#E9DBEB","primary-95":"#F3ECF4","primary-100":"#FAF7FA","secondary-10":"#2D091B","secondary-20":"#4D0F2E","secondary-30":"#6B1540","secondary-40":"#931D58","secondary-50":"#C02673","secondary-60":"#FF409F","secondary-70":"#FF88C4","secondary-80":"#FFB3D9","secondary-90":"#FFD4E9","secondary-95":"#FFE8F3","secondary-100":"#FFF8FC","neutral-10":"#161616","neutral-20":"#282828","neutral-30":"#393939","neutral-40":"#4E4E4E","neutral-50":"#686868","neutral-60":"#8E8E8E","neutral-70":"#AFAFB0","neutral-80":"#C7CACA","neutral-90":"#DDE1E2","neutral-95":"#EDEFEF","neutral-100":"#F9F9F9","success-10":"#081A0F","success-20":"#0E2D1B","success-30":"#154126","success-40":"#1C5A34","success-50":"#257645","success-60":"#44A068","success-70":"#64C189","success-80":"#80DCA5","success-90":"#B4ECCB","success-95":"#D5F6E2","success-100":"#EFFCF4","warning-10":"#221302","warning-20":"#3B2204","warning-30":"#543106","warning-40":"#744408","warning-50":"#98590C","warning-60":"#D07A13","warning-70":"#E4A244","warning-80":"#F5C26C","warning-90":"#FADBA6","warning-95":"#FCECD4","warning-100":"#FDF7F0","error-10":"#330505","error-20":"#550808","error-30":"#750C0C","error-40":"#9E130F","error-50":"#CB2213","error-60":"#DE6C6C","error-70":"#E89B9B","error-80":"#EFBEBE","error-90":"#F5D9D9","error-95":"#F9ECEC","error-100":"#FCF7F7","info-10":"#021824","info-20":"#032B3F","info-30":"#053D59","info-40":"#065478","info-50":"#176E9B","info-60":"#5296BE","info-70":"#82B5DA","info-80":"#ACCFE7","info-90":"#CCE3F1","info-95":"#E3F1F8","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000","primary-inverse":"#FEAB10"},oneservice:{"brand-10":"#001A19","brand-20":"#002D2B","brand-30":"#00413D","brand-40":"#005954","brand-50":"#00756F","brand-60":"#03A098","brand-70":"#55BFBA","brand-80":"#92D6D2","brand-90":"#BFE7E5","brand-95":"#DDF2F1","brand-100":"#F4FBFA","primary-10":"#09191D","primary-20":"#102B34","primary-30":"#173D49","primary-40":"#205666","primary-50":"#2A7086","primary-60":"#2A7086","primary-70":"#8CB6C2","primary-80":"#B2CED6","primary-90":"#D1E2E7","primary-95":"#E8F0F3","primary-100":"#F9F8FC","secondary-10":"#001731","secondary-20":"#002752","secondary-30":"#003874","secondary-40":"#004D9F","secondary-50":"#5B62A7","secondary-60":"#858CBD","secondary-70":"#A8ADCF","secondary-80":"#C6C9E0","secondary-90":"#DDDFEC","secondary-95":"#EDEEF5","secondary-100":"#F8F8FB","neutral-10":"#161616","neutral-20":"#282828","neutral-30":"#393939","neutral-40":"#4E4E4E","neutral-50":"#686868","neutral-60":"#8E8E8E","neutral-70":"#AFAFB0","neutral-80":"#C7CACA","neutral-90":"#DDE1E2","neutral-95":"#EDEFEF","neutral-100":"#F9F9F9","success-10":"#081A0F","success-20":"#0E2D1B","success-30":"#154126","success-40":"#1C5A34","success-50":"#257645","success-60":"#44A068","success-70":"#64C189","success-80":"#80DCA5","success-90":"#B4ECCB","success-95":"#D5F6E2","success-100":"#EFFCF4","warning-10":"#221302","warning-20":"#3B2204","warning-30":"#543106","warning-40":"#744408","warning-50":"#98590C","warning-60":"#D07A13","warning-70":"#E4A244","warning-80":"#F5C26C","warning-90":"#FADBA6","warning-95":"#FCECD4","warning-100":"#FDF7F0","error-10":"#330505","error-20":"#550808","error-30":"#750C0C","error-40":"#9E130F","error-50":"#CB2213","error-60":"#DE6C6C","error-70":"#E89B9B","error-80":"#EFBEBE","error-90":"#F5D9D9","error-95":"#F9ECEC","error-100":"#FCF7F7","info-10":"#021824","info-20":"#032B3F","info-30":"#053D59","info-40":"#065478","info-50":"#176E9B","info-60":"#5296BE","info-70":"#82B5DA","info-80":"#ACCFE7","info-90":"#CCE3F1","info-95":"#E3F1F8","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000","primary-inverse":"#FEAB10"},pa:{"brand-10":"#881317","brand-20":"#B5191E","brand-30":"#B5040A","brand-40":"#D0333F","brand-50":"#DC666F","brand-60":"#E28087","brand-70":"#E7999F","brand-80":"#EDB3B7","brand-90":"#F3CCCF","brand-95":"#F9E6E7","brand-100":"#FCF2F3","primary-10":"#000000","primary-20":"#191919","primary-30":"#333333","primary-40":"#4D4D4D","primary-50":"#666666","primary-60":"#808080","primary-70":"#999999","primary-80":"#B3B3B3","primary-90":"#E6E6E6","primary-95":"#F7F7F7","primary-100":"#FFFFFF","secondary-10":"#19151D","secondary-20":"#2B2533","secondary-30":"#3E3649","secondary-40":"#564A64","secondary-50":"#6F637D","secondary-60":"#948B9F","secondary-70":"#B3ACBB","secondary-80":"#CCC8D2","secondary-90":"#E1DEE4","secondary-95":"#EFEEF1","secondary-100":"#F9F8F9","neutral-10":"#000000","neutral-20":"#191919","neutral-30":"#333333","neutral-40":"#4D4D4D","neutral-50":"#666666","neutral-60":"#808080","neutral-70":"#999999","neutral-80":"#B3B3B3","neutral-90":"#E6E6E6","neutral-95":"#F7F7F7","neutral-100":"#FFFFFF","success-10":"#081A0F","success-20":"#0E2D1B","success-30":"#154126","success-40":"#1C5A34","success-50":"#257645","success-60":"#44A068","success-70":"#64C189","success-80":"#80DCA5","success-90":"#B4ECCB","success-95":"#D5F6E2","success-100":"#EFFCF4","warning-10":"#221302","warning-20":"#3B2204","warning-30":"#543106","warning-40":"#744408","warning-50":"#98590C","warning-60":"#D07A13","warning-70":"#E4A244","warning-80":"#F5C26C","warning-90":"#FADBA6","warning-95":"#FCECD4","warning-100":"#FDF7F0","error-10":"#330505","error-20":"#550808","error-30":"#750C0C","error-40":"#9E130F","error-50":"#CB2213","error-60":"#DE6C6C","error-70":"#E89B9B","error-80":"#EFBEBE","error-90":"#F5D9D9","error-95":"#F9ECEC","error-100":"#FCF7F7","info-10":"#021824","info-20":"#032B3F","info-30":"#053D59","info-40":"#065478","info-50":"#176E9B","info-60":"#5296BE","info-70":"#82B5DA","info-80":"#ACCFE7","info-90":"#CCE3F1","info-95":"#E3F1F8","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000","primary-inverse":"#FEAB10"}},defaultValue:"lifesg"},Nr=e=>t=>{var r;const n=t.theme,o=Rr(Wr,null==n?void 0:n.colourScheme);return(null===(r=null==n?void 0:n.overrides)||void 0===r?void 0:r.primitiveColour)?Or(o,e,n.overrides.primitiveColour):o[e]},Vr={"brand-10":Nr("brand-10"),"brand-20":Nr("brand-20"),"brand-30":Nr("brand-30"),"brand-40":Nr("brand-40"),"brand-50":Nr("brand-50"),"brand-60":Nr("brand-60"),"brand-70":Nr("brand-70"),"brand-80":Nr("brand-80"),"brand-90":Nr("brand-90"),"brand-95":Nr("brand-95"),"brand-100":Nr("brand-100"),"primary-10":Nr("primary-10"),"primary-20":Nr("primary-20"),"primary-30":Nr("primary-30"),"primary-40":Nr("primary-40"),"primary-50":Nr("primary-50"),"primary-60":Nr("primary-60"),"primary-70":Nr("primary-70"),"primary-80":Nr("primary-80"),"primary-90":Nr("primary-90"),"primary-95":Nr("primary-95"),"primary-100":Nr("primary-100"),"secondary-10":Nr("secondary-10"),"secondary-20":Nr("secondary-20"),"secondary-30":Nr("secondary-30"),"secondary-40":Nr("secondary-40"),"secondary-50":Nr("secondary-50"),"secondary-60":Nr("secondary-60"),"secondary-70":Nr("secondary-70"),"secondary-80":Nr("secondary-80"),"secondary-90":Nr("secondary-90"),"secondary-95":Nr("secondary-95"),"secondary-100":Nr("secondary-100"),"neutral-10":Nr("neutral-10"),"neutral-20":Nr("neutral-20"),"neutral-30":Nr("neutral-30"),"neutral-40":Nr("neutral-40"),"neutral-50":Nr("neutral-50"),"neutral-60":Nr("neutral-60"),"neutral-70":Nr("neutral-70"),"neutral-80":Nr("neutral-80"),"neutral-90":Nr("neutral-90"),"neutral-95":Nr("neutral-95"),"neutral-100":Nr("neutral-100"),"success-10":Nr("success-10"),"success-20":Nr("success-20"),"success-30":Nr("success-30"),"success-40":Nr("success-40"),"success-50":Nr("success-50"),"success-60":Nr("success-60"),"success-70":Nr("success-70"),"success-80":Nr("success-80"),"success-90":Nr("success-90"),"success-95":Nr("success-95"),"success-100":Nr("success-100"),"warning-10":Nr("warning-10"),"warning-20":Nr("warning-20"),"warning-30":Nr("warning-30"),"warning-40":Nr("warning-40"),"warning-50":Nr("warning-50"),"warning-60":Nr("warning-60"),"warning-70":Nr("warning-70"),"warning-80":Nr("warning-80"),"warning-90":Nr("warning-90"),"warning-95":Nr("warning-95"),"warning-100":Nr("warning-100"),"error-10":Nr("error-10"),"error-20":Nr("error-20"),"error-30":Nr("error-30"),"error-40":Nr("error-40"),"error-50":Nr("error-50"),"error-60":Nr("error-60"),"error-70":Nr("error-70"),"error-80":Nr("error-80"),"error-90":Nr("error-90"),"error-95":Nr("error-95"),"error-100":Nr("error-100"),"info-10":Nr("info-10"),"info-20":Nr("info-20"),"info-30":Nr("info-30"),"info-40":Nr("info-40"),"info-50":Nr("info-50"),"info-60":Nr("info-60"),"info-70":Nr("info-70"),"info-80":Nr("info-80"),"info-90":Nr("info-90"),"info-95":Nr("info-95"),"info-100":Nr("info-100"),white:Nr("white"),black:Nr("black"),"primary-inverse":Nr("primary-inverse")},Yr={text:Nr("neutral-20"),"text-subtle":Nr("neutral-30"),"text-subtler":Nr("neutral-50"),"text-subtlest":Nr("neutral-60"),"text-primary":Nr("primary-50"),"text-hover":Nr("primary-40"),"text-selected":Nr("primary-50"),"text-selected-hover":Nr("primary-40"),"text-disabled":Nr("neutral-50"),"text-disabled-subtle":Nr("neutral-60"),"text-disabled-subtlest":Nr("neutral-80"),"text-selected-disabled":Nr("neutral-20"),"text-success":Nr("success-40"),"text-warning":Nr("warning-40"),"text-error":Nr("error-40"),"text-info":Nr("info-40"),"text-inverse":Nr("white"),icon:Nr("neutral-50"),"icon-subtle":Nr("neutral-60"),"icon-strongest":Nr("neutral-20"),"icon-primary":Nr("primary-50"),"icon-primary-subtle":Nr("primary-60"),"icon-primary-subtlest":Nr("primary-70"),"icon-hover":Nr("primary-40"),"icon-selected":Nr("primary-50"),"icon-selected-hover":Nr("primary-40"),"icon-disabled":Nr("neutral-50"),"icon-disabled-subtle":Nr("neutral-60"),"icon-selected-disabled":Nr("neutral-60"),"icon-success":Nr("success-50"),"icon-warning":Nr("warning-60"),"icon-error":Nr("error-50"),"icon-error-strong":Nr("error-40"),"icon-info":Nr("info-50"),"icon-inverse":Nr("white"),"icon-primary-inverse":Nr("primary-inverse"),border:Nr("neutral-90"),"border-strong":Nr("neutral-70"),"border-stronger":Nr("neutral-50"),"border-primary":Nr("primary-50"),"border-primary-subtle":Nr("primary-60"),"border-hover":Nr("primary-90"),"border-hover-strong":Nr("primary-60"),"border-selected":Nr("primary-50"),"border-selected-subtle":Nr("primary-70"),"border-selected-subtlest":Nr("primary-90"),"border-selected-hover":Nr("primary-40"),"border-focus":Nr("primary-60"),"border-focus-strong":Nr("primary-50"),"border-disabled":Nr("neutral-90"),"border-selected-disabled":Nr("neutral-70"),"border-success":Nr("success-60"),"border-warning":Nr("warning-60"),"border-error":Nr("error-60"),"border-error-focus":Nr("error-60"),"border-error-focus-strong":Nr("error-40"),"border-error-strong":Nr("error-40"),"border-info":Nr("info-60"),bg:Nr("white"),"bg-strong":Nr("neutral-100"),"bg-stronger":Nr("neutral-95"),"bg-strongest":Nr("neutral-90"),"bg-hover":Nr("primary-95"),"bg-hover-strong":Nr("primary-90"),"bg-hover-subtle":Nr("primary-100"),"bg-hover-neutral":Nr("neutral-100"),"bg-hover-neutral-strong":Nr("neutral-90"),"bg-selected":Nr("primary-95"),"bg-selected-hover":Nr("primary-90"),"bg-selected-strong":Nr("primary-90"),"bg-selected-stronger":Nr("primary-70"),"bg-selected-strongest":Nr("primary-50"),"bg-selected-strongest-hover":Nr("primary-40"),"bg-disabled":Nr("neutral-95"),"bg-selected-disabled":Nr("neutral-95"),"bg-selected-stronger-disabled":Nr("neutral-70"),"bg-success":Nr("success-100"),"bg-success-hover":Nr("success-95"),"bg-success-strong":Nr("success-50"),"bg-success-strong-hover":Nr("success-40"),"bg-warning":Nr("warning-100"),"bg-warning-hover":Nr("warning-95"),"bg-warning-strong":Nr("warning-50"),"bg-warning-strong-hover":Nr("warning-40"),"bg-info":Nr("info-100"),"bg-info-hover":Nr("info-95"),"bg-info-strong":Nr("info-50"),"bg-info-strong-hover":Nr("info-40"),"bg-error":Nr("error-100"),"bg-error-hover":Nr("error-95"),"bg-error-strong":Nr("error-50"),"bg-error-strong-hover":Nr("error-40"),"bg-inverse":Nr("neutral-20"),"bg-inverse-subtle":Nr("neutral-30"),"bg-inverse-subtler":Nr("neutral-50"),"bg-inverse-subtlest":Nr("neutral-60"),"bg-inverse-hover":Nr("neutral-40"),"bg-primary":Nr("primary-50"),"bg-primary-subtle":Nr("primary-60"),"bg-primary-subtler":Nr("primary-95"),"bg-primary-subtlest":Nr("primary-100"),"bg-available":"#6DD0A1","bg-primary-hover":Nr("primary-40"),"bg-primary-subtlest-hover":Nr("primary-90"),"bg-primary-subtlest-selected":Nr("primary-90"),"overlay-strong":"rgba(40, 40, 40, 0.85)","overlay-subtle":"rgba(40, 40, 40, 0.20)",hyperlink:Nr("primary-50"),"hyperlink-hover":Nr("primary-40"),"hyperlink-visited":Nr("primary-40"),"hyperlink-inverse":Nr("primary-inverse"),"focus-ring":Nr("black"),"focus-ring-inverse":Nr("white")},Ur={collections:{lifesg:Yr,bookingsg:Yr,rbs:Yr,mylegacy:Yr,ccube:Yr,oneservice:Yr,pa:{text:Nr("neutral-30"),"text-subtle":Nr("neutral-40"),"text-subtler":Nr("neutral-50"),"text-subtlest":Nr("neutral-70"),"text-primary":Nr("neutral-10"),"text-hover":Nr("neutral-70"),"text-selected":Nr("neutral-20"),"text-selected-hover":Nr("neutral-10"),"text-disabled":Nr("neutral-50"),"text-disabled-subtle":Nr("neutral-60"),"text-disabled-subtlest":Nr("neutral-80"),"text-selected-disabled":Nr("neutral-40"),"text-success":Nr("success-40"),"text-warning":Nr("warning-40"),"text-error":Nr("brand-30"),"text-info":Nr("neutral-40"),"text-inverse":Nr("neutral-100"),icon:Nr("neutral-40"),"icon-subtle":Nr("neutral-50"),"icon-strongest":Nr("neutral-10"),"icon-primary":Nr("neutral-10"),"icon-primary-subtle":Nr("neutral-30"),"icon-primary-subtlest":Nr("neutral-60"),"icon-hover":Nr("neutral-70"),"icon-selected":Nr("brand-20"),"icon-selected-hover":Nr("brand-10"),"icon-disabled":Nr("neutral-50"),"icon-disabled-subtle":Nr("neutral-60"),"icon-selected-disabled":Nr("neutral-40"),"icon-success":Nr("success-40"),"icon-warning":Nr("warning-60"),"icon-error":Nr("brand-30"),"icon-error-strong":Nr("brand-10"),"icon-info":Nr("neutral-40"),"icon-inverse":Nr("neutral-100"),"icon-primary-inverse":"#F9B371",border:Nr("neutral-90"),"border-strong":Nr("neutral-30"),"border-stronger":Nr("neutral-20"),"border-primary":Nr("neutral-40"),"border-primary-subtle":Nr("neutral-60"),"border-hover":Nr("neutral-80"),"border-hover-strong":Nr("neutral-10"),"border-selected":Nr("brand-20"),"border-selected-subtle":Nr("neutral-40"),"border-selected-subtlest":Nr("neutral-70"),"border-selected-hover":Nr("neutral-10"),"border-focus":Nr("neutral-20"),"border-focus-strong":Nr("neutral-10"),"border-disabled":Nr("neutral-90"),"border-selected-disabled":Nr("neutral-80"),"border-success":Nr("success-40"),"border-warning":Nr("warning-60"),"border-error":Nr("brand-30"),"border-error-focus":Nr("brand-20"),"border-error-focus-strong":Nr("brand-10"),"border-error-strong":Nr("brand-20"),"border-info":Nr("neutral-40"),bg:Nr("neutral-100"),"bg-strong":Nr("neutral-95"),"bg-stronger":Nr("neutral-90"),"bg-strongest":Nr("neutral-80"),"bg-hover":Nr("brand-90"),"bg-hover-strong":Nr("brand-80"),"bg-hover-subtle":Nr("neutral-90"),"bg-hover-neutral":Nr("neutral-90"),"bg-hover-neutral-strong":Nr("neutral-90"),"bg-selected":Nr("brand-100"),"bg-selected-hover":Nr("brand-30"),"bg-selected-strong":Nr("brand-50"),"bg-selected-stronger":Nr("brand-40"),"bg-selected-strongest":Nr("brand-20"),"bg-selected-strongest-hover":Nr("brand-10"),"bg-disabled":Nr("neutral-90"),"bg-selected-disabled":Nr("neutral-90"),"bg-selected-stronger-disabled":Nr("neutral-80"),"bg-success":Nr("success-100"),"bg-success-hover":Nr("success-95"),"bg-success-strong":Nr("success-50"),"bg-success-strong-hover":Nr("success-40"),"bg-warning":Nr("warning-100"),"bg-warning-hover":Nr("warning-95"),"bg-warning-strong":Nr("warning-50"),"bg-warning-strong-hover":Nr("warning-40"),"bg-info":Nr("neutral-95"),"bg-info-hover":Nr("info-95"),"bg-info-strong":Nr("info-50"),"bg-info-strong-hover":Nr("info-40"),"bg-error":Nr("brand-100"),"bg-error-hover":Nr("error-95"),"bg-error-strong":Nr("error-50"),"bg-error-strong-hover":Nr("error-40"),"bg-inverse":Nr("neutral-40"),"bg-inverse-subtle":Nr("neutral-60"),"bg-inverse-subtler":Nr("neutral-70"),"bg-inverse-subtlest":Nr("neutral-80"),"bg-inverse-hover":Nr("neutral-30"),"bg-primary":Nr("brand-20"),"bg-primary-subtle":Nr("brand-60"),"bg-primary-subtler":Nr("brand-80"),"bg-primary-subtlest":Nr("brand-100"),"bg-available":Nr("success-60"),"bg-primary-hover":Nr("brand-10"),"bg-primary-subtlest-hover":Nr("brand-80"),"bg-primary-subtlest-selected":Nr("brand-40"),"overlay-strong":"rgba(25, 25, 25, 0.95)","overlay-subtle":"rgba(25, 25, 25, 0.20)",hyperlink:Nr("neutral-10"),"hyperlink-hover":Nr("neutral-40"),"hyperlink-visited":Nr("neutral-50"),"hyperlink-inverse":"#F8AE68","focus-ring":Nr("black"),"focus-ring-inverse":Nr("white")}},defaultValue:"lifesg"},qr=e=>t=>{var r;const n=t.theme,o=Rr(Ur,null==n?void 0:n.colourScheme),i=(null===(r=null==n?void 0:n.overrides)||void 0===r?void 0:r.semanticColour)?Or(o,e,n.overrides.semanticColour):o[e];return"function"==typeof i?i(t):i},Gr={text:qr("text"),"text-subtle":qr("text-subtle"),"text-subtler":qr("text-subtler"),"text-subtlest":qr("text-subtlest"),"text-primary":qr("text-primary"),"text-hover":qr("text-hover"),"text-selected":qr("text-selected"),"text-selected-hover":qr("text-selected-hover"),"text-disabled":qr("text-disabled"),"text-disabled-subtle":qr("text-disabled-subtle"),"text-disabled-subtlest":qr("text-disabled-subtlest"),"text-selected-disabled":qr("text-selected-disabled"),"text-success":qr("text-success"),"text-warning":qr("text-warning"),"text-error":qr("text-error"),"text-info":qr("text-info"),"text-inverse":qr("text-inverse"),icon:qr("icon"),"icon-subtle":qr("icon-subtle"),"icon-strongest":qr("icon-strongest"),"icon-primary":qr("icon-primary"),"icon-primary-subtle":qr("icon-primary-subtle"),"icon-primary-subtlest":qr("icon-primary-subtlest"),"icon-hover":qr("icon-hover"),"icon-selected":qr("icon-selected"),"icon-selected-hover":qr("icon-selected-hover"),"icon-disabled":qr("icon-disabled"),"icon-disabled-subtle":qr("icon-disabled-subtle"),"icon-selected-disabled":qr("icon-selected-disabled"),"icon-success":qr("icon-success"),"icon-warning":qr("icon-warning"),"icon-error":qr("icon-error"),"icon-error-strong":qr("icon-error-strong"),"icon-info":qr("icon-info"),"icon-inverse":qr("icon-inverse"),"icon-primary-inverse":qr("icon-primary-inverse"),border:qr("border"),"border-strong":qr("border-strong"),"border-stronger":qr("border-stronger"),"border-primary":qr("border-primary"),"border-primary-subtle":qr("border-primary-subtle"),"border-hover":qr("border-hover"),"border-hover-strong":qr("border-hover-strong"),"border-selected":qr("border-selected"),"border-selected-subtle":qr("border-selected-subtle"),"border-selected-subtlest":qr("border-selected-subtlest"),"border-selected-hover":qr("border-selected-hover"),"border-focus":qr("border-focus"),"border-focus-strong":qr("border-focus-strong"),"border-disabled":qr("border-disabled"),"border-selected-disabled":qr("border-selected-disabled"),"border-success":qr("border-success"),"border-warning":qr("border-warning"),"border-error":qr("border-error"),"border-error-focus":qr("border-error-focus"),"border-error-focus-strong":qr("border-error-focus-strong"),"border-error-strong":qr("border-error-strong"),"border-info":qr("border-info"),bg:qr("bg"),"bg-strong":qr("bg-strong"),"bg-stronger":qr("bg-stronger"),"bg-strongest":qr("bg-strongest"),"bg-hover":qr("bg-hover"),"bg-hover-strong":qr("bg-hover-strong"),"bg-hover-subtle":qr("bg-hover-subtle"),"bg-hover-neutral":qr("bg-hover-neutral"),"bg-hover-neutral-strong":qr("bg-hover-neutral-strong"),"bg-selected":qr("bg-selected"),"bg-selected-hover":qr("bg-selected-hover"),"bg-selected-strong":qr("bg-selected-strong"),"bg-selected-stronger":qr("bg-selected-stronger"),"bg-selected-strongest":qr("bg-selected-strongest"),"bg-selected-strongest-hover":qr("bg-selected-strongest-hover"),"bg-disabled":qr("bg-disabled"),"bg-selected-disabled":qr("bg-selected-disabled"),"bg-selected-stronger-disabled":qr("bg-selected-stronger-disabled"),"bg-success":qr("bg-success"),"bg-success-hover":qr("bg-success-hover"),"bg-success-strong":qr("bg-success-strong"),"bg-success-strong-hover":qr("bg-success-strong-hover"),"bg-warning":qr("bg-warning"),"bg-warning-hover":qr("bg-warning-hover"),"bg-warning-strong":qr("bg-warning-strong"),"bg-warning-strong-hover":qr("bg-warning-strong-hover"),"bg-info":qr("bg-info"),"bg-info-hover":qr("bg-info-hover"),"bg-info-strong":qr("bg-info-strong"),"bg-info-strong-hover":qr("bg-info-strong-hover"),"bg-error":qr("bg-error"),"bg-error-hover":qr("bg-error-hover"),"bg-error-strong":qr("bg-error-strong"),"bg-error-strong-hover":qr("bg-error-strong-hover"),"bg-inverse":qr("bg-inverse"),"bg-inverse-subtle":qr("bg-inverse-subtle"),"bg-inverse-subtler":qr("bg-inverse-subtler"),"bg-inverse-subtlest":qr("bg-inverse-subtlest"),"bg-inverse-hover":qr("bg-inverse-hover"),"bg-primary":qr("bg-primary"),"bg-primary-subtle":qr("bg-primary-subtle"),"bg-primary-subtler":qr("bg-primary-subtler"),"bg-primary-subtlest":qr("bg-primary-subtlest"),"bg-available":qr("bg-available"),"bg-primary-hover":qr("bg-primary-hover"),"bg-primary-subtlest-hover":qr("bg-primary-subtlest-hover"),"bg-primary-subtlest-selected":qr("bg-primary-subtlest-selected"),"overlay-strong":qr("overlay-strong"),"overlay-subtle":qr("overlay-subtle"),hyperlink:qr("hyperlink"),"hyperlink-hover":qr("hyperlink-hover"),"hyperlink-visited":qr("hyperlink-visited"),"hyperlink-inverse":qr("hyperlink-inverse"),"focus-ring":qr("focus-ring"),"focus-ring-inverse":qr("focus-ring-inverse")},Zr={collections:{default:{solid:e=>t=>{var r,n,o;const{thickness:i,radius:s,colour:a}=e||{},l=null!==(r="function"==typeof i?i(t):i)&&void 0!==r?r:Lr["width-010"](t),d=null!==(n="function"==typeof s?s(t):s)&&void 0!==n?n:0,c=null!==(o="function"==typeof a?a(t):a)&&void 0!==o?o:Gr.border(t),u=Lr.solid;return w`
            border: ${l} ${u} ${c};
            border-radius: ${d};
        `},"dashed-default":e=>t=>{var r,n,o;const{thickness:i,radius:s,colour:a}=e||{},l=null!==(r="function"==typeof i?i(t):i)&&void 0!==r?r:Lr["width-010"](t),d=null!==(n="function"==typeof s?s(t):s)&&void 0!==n?n:0,c=null!==(o="function"==typeof a?a(t):a)&&void 0!==o?o:Gr.border(t),u=encodeURIComponent(`<svg width='100%' height='100%' xmlns='http://www.w3.org/2000/svg'><rect width='100%' height='100%' fill='none' rx='${d}' ry='${d}' stroke='${c}' stroke-width='${l}' stroke-dasharray='4, 8' stroke-dashoffset='0' stroke-linecap='square'/></svg>`);return w`
            background-image: url("data:image/svg+xml,${u}");
            border-radius: ${d};
        `}}},defaultValue:"default"},Qr=e=>1===e.length&&"theme"in e[0],Xr=e=>(...t)=>r=>{const n=Qr(t)?[]:t,o=Qr(t)?t[0]:r,i=o.theme;return(0,Rr(Zr,null==i?void 0:i.borderScheme)[e])(...n)(o)},Kr={solid:Xr("solid"),"dashed-default":Xr("dashed-default")},Jr={collections:{default:{"xxs-min":0,"xxs-max":320,"xs-min":321,"xs-max":375,"sm-min":376,"sm-max":420,"md-min":421,"md-max":767,"lg-min":768,"lg-max":1023,"xl-min":1024,"xl-max":1440,"xxl-min":1441,"xxs-column":8,"xs-column":8,"sm-column":8,"md-column":8,"lg-column":12,"xl-column":12,"xxl-column":12,"xxs-gutter":16,"xs-gutter":16,"sm-gutter":16,"md-gutter":16,"lg-gutter":32,"xl-gutter":32,"xxl-gutter":32,"xxs-margin":24,"xs-margin":24,"sm-margin":24,"md-margin":24,"lg-margin":48,"xl-margin":48,"xxl-margin":48}},defaultValue:"default"},en=e=>t=>{var r;const n=t.theme,o=Rr(Jr,null==n?void 0:n.breakpointScheme);let i;return i=(null===(r=null==n?void 0:n.overrides)||void 0===r?void 0:r.breakpoint)?Or(o,e,n.overrides.breakpoint):o[e],i},tn={"xxs-min":en("xxs-min"),"xxs-max":en("xxs-max"),"xs-min":en("xs-min"),"xs-max":en("xs-max"),"sm-min":en("sm-min"),"sm-max":en("sm-max"),"md-min":en("md-min"),"md-max":en("md-max"),"lg-min":en("lg-min"),"lg-max":en("lg-max"),"xl-min":en("xl-min"),"xl-max":en("xl-max"),"xxl-min":en("xxl-min"),"xxs-column":en("xxs-column"),"xs-column":en("xs-column"),"sm-column":en("sm-column"),"md-column":en("md-column"),"lg-column":en("lg-column"),"xl-column":en("xl-column"),"xxl-column":en("xxl-column"),"xxs-gutter":en("xxs-gutter"),"xs-gutter":en("xs-gutter"),"sm-gutter":en("sm-gutter"),"md-gutter":en("md-gutter"),"lg-gutter":en("lg-gutter"),"xl-gutter":en("xl-gutter"),"xxl-gutter":en("xxl-gutter"),"xxs-margin":en("xxs-margin"),"xs-margin":en("xs-margin"),"sm-margin":en("sm-margin"),"md-margin":en("md-margin"),"lg-margin":en("lg-margin"),"xl-margin":en("xl-margin"),"xxl-margin":en("xxl-margin")},rn=e=>("max-width"===e?["xxs","xs","sm","md","lg","xl"]:["xxs","xs","sm","md","lg","xl","xxl"]).reduce(((t,r)=>(t[r]=((e,t)=>{const r=tn["max-width"===e?`${t}-max`:`${t}-min`];return t=>{const n=r(t);return`@media screen and (${e}: ${n}px)`}})(e,r),t)),{}),nn={MaxWidth:rn("max-width"),MinWidth:rn("min-width")},on={collections:{default:{"heading-size-xxl":"3rem","heading-size-xl":"2.5rem","heading-size-lg":"2rem","heading-size-md":"1.625rem","heading-size-sm":"1.375rem","heading-size-xs":"1.125rem","heading-lh-xxl":"3.5rem","heading-lh-xl":"3rem","heading-lh-lg":"2.5rem","heading-lh-md":"2.25rem","heading-lh-sm":"1.75rem","heading-lh-xs":"1.625rem","heading-ls-xxl":"-0.056rem","heading-ls-xl":"-0.032rem","heading-ls-lg":"-0.032rem","heading-ls-md":"0rem","heading-ls-sm":"0rem","heading-ls-xs":"0rem","weight-light":"300","weight-regular":"400","weight-semibold":"600","weight-bold":"700","font-family":"Open Sans","body-size-baseline":"1.125rem","body-size-md":"1rem","body-size-sm":"0.875rem","body-size-xs":"0.75rem","body-lh-baseline":"1.625rem","body-lh-md":"1.5rem","body-lh-sm":"1.625rem","body-lh-xs":"1.25rem","body-ls-baseline":"0rem","body-ls-md":"0.014rem","body-ls-sm":"0.012rem","body-ls-xs":"0.012rem","form-label-size":"1rem","form-description-size":"0.875rem","form-label-lh":"1.5rem","form-description-lh":"1.6rem","form-label-ls":"0.014rem","form-description-ls":"0.012rem"},bookingsg:{"heading-size-xxl":"3rem","heading-size-xl":"2.5rem","heading-size-lg":"2rem","heading-size-md":"1.625rem","heading-size-sm":"1.375rem","heading-size-xs":"1.125rem","heading-lh-xxl":"3.5rem","heading-lh-xl":"3rem","heading-lh-lg":"2.5rem","heading-lh-md":"2.25rem","heading-lh-sm":"1.75rem","heading-lh-xs":"1.75rem","heading-ls-xxl":"-0.056rem","heading-ls-xl":"-0.032rem","heading-ls-lg":"-0.032rem","heading-ls-md":"0rem","heading-ls-sm":"0rem","heading-ls-xs":"0rem","weight-light":"300","weight-regular":"400","weight-semibold":"600","weight-bold":"700","font-family":"Plus Jakarta Sans","body-size-baseline":"1.125rem","body-size-md":"1rem","body-size-sm":"0.875rem","body-size-xs":"0.75rem","body-lh-baseline":"1.75rem","body-lh-md":"1.5rem","body-lh-sm":"1.6rem","body-lh-xs":"1.2rem","body-ls-baseline":"0rem","body-ls-md":"0.014rem","body-ls-sm":"0.012rem","body-ls-xs":"0.012rem","form-label-size":"1rem","form-description-size":"0.875rem","form-label-lh":"1.5rem","form-description-lh":"1.6rem","form-label-ls":"0.014rem","form-description-ls":"0.012rem"},pa:{"heading-size-xxl":"2.5rem","heading-size-xl":"2rem","heading-size-lg":"1.75rem","heading-size-md":"1.5rem","heading-size-sm":"1.25rem","heading-size-xs":"1rem","heading-lh-xxl":"3rem","heading-lh-xl":"2.5rem","heading-lh-lg":"2.25rem","heading-lh-md":"2rem","heading-lh-sm":"2rem","heading-lh-xs":"1.75rem","heading-ls-xxl":"-0.032rem","heading-ls-xl":"0rem","heading-ls-lg":"0rem","heading-ls-md":"0rem","heading-ls-sm":"0rem","heading-ls-xs":"0rem","weight-light":"300","weight-regular":"400","weight-semibold":"600","weight-bold":"700","font-family":"Lato","body-size-baseline":"1rem","body-size-md":"0.875rem","body-size-sm":"0.75rem","body-size-xs":"0.625rem","body-lh-baseline":"1.75rem","body-lh-md":"1.5rem","body-lh-sm":"1.25rem","body-lh-xs":"1.25rem","body-ls-baseline":"0rem","body-ls-md":"0.012rem","body-ls-sm":"0.012rem","body-ls-xs":"0.012rem","form-label-size":"1rem","form-description-size":"0.875rem","form-label-lh":"1.5rem","form-description-lh":"1.6rem","form-label-ls":"0.014rem","form-description-ls":"0.012rem"}},defaultValue:"default"},sn=e=>t=>{var r;const n=t.theme,o=Rr(on,null==n?void 0:n.fontScheme);return(null===(r=null==n?void 0:n.overrides)||void 0===r?void 0:r.fontSpec)?Or(o,e,n.overrides.fontSpec):o[e]},an={"heading-size-xxl":sn("heading-size-xxl"),"heading-size-xl":sn("heading-size-xl"),"heading-size-lg":sn("heading-size-lg"),"heading-size-md":sn("heading-size-md"),"heading-size-sm":sn("heading-size-sm"),"heading-size-xs":sn("heading-size-xs"),"heading-lh-xxl":sn("heading-lh-xxl"),"heading-lh-xl":sn("heading-lh-xl"),"heading-lh-lg":sn("heading-lh-lg"),"heading-lh-md":sn("heading-lh-md"),"heading-lh-sm":sn("heading-lh-sm"),"heading-lh-xs":sn("heading-lh-xs"),"heading-ls-xxl":sn("heading-ls-xxl"),"heading-ls-xl":sn("heading-ls-xl"),"heading-ls-lg":sn("heading-ls-lg"),"heading-ls-md":sn("heading-ls-md"),"heading-ls-sm":sn("heading-ls-sm"),"heading-ls-xs":sn("heading-ls-xs"),"weight-light":sn("weight-light"),"weight-regular":sn("weight-regular"),"weight-semibold":sn("weight-semibold"),"weight-bold":sn("weight-bold"),"font-family":sn("font-family"),"body-size-baseline":sn("body-size-baseline"),"body-size-md":sn("body-size-md"),"body-size-sm":sn("body-size-sm"),"body-size-xs":sn("body-size-xs"),"body-lh-baseline":sn("body-lh-baseline"),"body-lh-md":sn("body-lh-md"),"body-lh-sm":sn("body-lh-sm"),"body-lh-xs":sn("body-lh-xs"),"body-ls-baseline":sn("body-ls-baseline"),"body-ls-md":sn("body-ls-md"),"body-ls-sm":sn("body-ls-sm"),"body-ls-xs":sn("body-ls-xs"),"form-label-size":sn("form-label-size"),"form-description-size":sn("form-description-size"),"form-label-lh":sn("form-label-lh"),"form-description-lh":sn("form-description-lh"),"form-label-ls":sn("form-label-ls"),"form-description-ls":sn("form-description-ls")},ln=(e,t,r,n,o)=>{const{disableLigatures:i}=o||{};return w`
        font-family: ${sn("font-family")};
        font-size: ${sn(e)};
        font-weight: ${sn(t)};
        line-height: ${sn(r)};
        letter-spacing: ${sn(n)};

        font-variant: ${i?"no-common-ligatures":"normal"};
    `},dn=(e={})=>({"heading-xxl-light":ln("heading-size-xxl","weight-light","heading-lh-xxl","heading-ls-xxl",e),"heading-xxl-regular":ln("heading-size-xxl","weight-regular","heading-lh-xxl","heading-ls-xxl",e),"heading-xxl-semibold":ln("heading-size-xxl","weight-semibold","heading-lh-xxl","heading-ls-xxl",e),"heading-xxl-bold":ln("heading-size-xxl","weight-bold","heading-lh-xxl","heading-ls-xxl",e),"heading-xl-light":ln("heading-size-xl","weight-light","heading-lh-xl","heading-ls-xl",e),"heading-xl-regular":ln("heading-size-xl","weight-regular","heading-lh-xl","heading-ls-xl",e),"heading-xl-semibold":ln("heading-size-xl","weight-semibold","heading-lh-xl","heading-ls-xl",e),"heading-xl-bold":ln("heading-size-xl","weight-bold","heading-lh-xl","heading-ls-xl",e),"heading-lg-light":ln("heading-size-lg","weight-light","heading-lh-lg","heading-ls-lg",e),"heading-lg-regular":ln("heading-size-lg","weight-regular","heading-lh-lg","heading-ls-lg",e),"heading-lg-semibold":ln("heading-size-lg","weight-semibold","heading-lh-lg","heading-ls-lg",e),"heading-lg-bold":ln("heading-size-lg","weight-bold","heading-lh-lg","heading-ls-lg",e),"heading-md-light":ln("heading-size-md","weight-light","heading-lh-md","heading-ls-md",e),"heading-md-regular":ln("heading-size-md","weight-regular","heading-lh-md","heading-ls-md",e),"heading-md-semibold":ln("heading-size-md","weight-semibold","heading-lh-md","heading-ls-md",e),"heading-md-bold":ln("heading-size-md","weight-bold","heading-lh-md","heading-ls-md",e),"heading-sm-light":ln("heading-size-sm","weight-light","heading-lh-sm","heading-ls-sm",e),"heading-sm-regular":ln("heading-size-sm","weight-regular","heading-lh-sm","heading-ls-sm",e),"heading-sm-semibold":ln("heading-size-sm","weight-semibold","heading-lh-sm","heading-ls-sm",e),"heading-sm-bold":ln("heading-size-sm","weight-bold","heading-lh-sm","heading-ls-sm",e),"heading-xs-light":ln("heading-size-xs","weight-light","heading-lh-xs","heading-ls-xs",e),"heading-xs-regular":ln("heading-size-xs","weight-regular","heading-lh-xs","heading-ls-xs",e),"heading-xs-semibold":ln("heading-size-xs","weight-semibold","heading-lh-xs","heading-ls-xs",e),"heading-xs-bold":ln("heading-size-xs","weight-bold","heading-lh-xs","heading-ls-xs",e),"body-baseline-light":ln("body-size-baseline","weight-light","body-lh-baseline","body-ls-baseline",e),"body-baseline-regular":ln("body-size-baseline","weight-regular","body-lh-baseline","body-ls-baseline",e),"body-baseline-semibold":ln("body-size-baseline","weight-semibold","body-lh-baseline","body-ls-baseline",e),"body-baseline-bold":ln("body-size-baseline","weight-bold","body-lh-baseline","body-ls-baseline",e),"body-md-light":ln("body-size-md","weight-light","body-lh-md","body-ls-md",e),"body-md-regular":ln("body-size-md","weight-regular","body-lh-md","body-ls-md",e),"body-md-semibold":ln("body-size-md","weight-semibold","body-lh-md","body-ls-md",e),"body-md-bold":ln("body-size-md","weight-bold","body-lh-md","body-ls-md",e),"body-sm-light":ln("body-size-sm","weight-light","body-lh-sm","body-ls-sm",e),"body-sm-regular":ln("body-size-sm","weight-regular","body-lh-sm","body-ls-sm",e),"body-sm-semibold":ln("body-size-sm","weight-semibold","body-lh-sm","body-ls-sm",e),"body-sm-bold":ln("body-size-sm","weight-bold","body-lh-sm","body-ls-sm",e),"body-xs-light":ln("body-size-xs","weight-light","body-lh-xs","body-ls-xs",e),"body-xs-regular":ln("body-size-xs","weight-regular","body-lh-xs","body-ls-xs",e),"body-xs-semibold":ln("body-size-xs","weight-semibold","body-lh-xs","body-ls-xs",e),"body-xs-bold":ln("body-size-xs","weight-bold","body-lh-xs","body-ls-xs",e),"form-label":ln("form-label-size","weight-semibold","form-label-lh","form-label-ls",e),"form-description":ln("form-description-size","weight-regular","form-description-lh","form-description-ls",e)}),cn=dn({disableLigatures:!0}),un={collections:{default:dn(),bookingsg:cn,pa:dn({disableLigatures:!0})},defaultValue:"default"},hn=e=>t=>{var r;const n=t.theme,o=Rr(un,null==n?void 0:n.fontScheme),i=(null===(r=null==n?void 0:n.overrides)||void 0===r?void 0:r.font)?Or(o,e,n.overrides.font):o[e];return"function"==typeof i?i(t):i},gn={"heading-xxl-light":hn("heading-xxl-light"),"heading-xxl-regular":hn("heading-xxl-regular"),"heading-xxl-semibold":hn("heading-xxl-semibold"),"heading-xxl-bold":hn("heading-xxl-bold"),"heading-xl-light":hn("heading-xl-light"),"heading-xl-regular":hn("heading-xl-regular"),"heading-xl-semibold":hn("heading-xl-semibold"),"heading-xl-bold":hn("heading-xl-bold"),"heading-lg-light":hn("heading-lg-light"),"heading-lg-regular":hn("heading-lg-regular"),"heading-lg-semibold":hn("heading-lg-semibold"),"heading-lg-bold":hn("heading-lg-bold"),"heading-md-light":hn("heading-md-light"),"heading-md-regular":hn("heading-md-regular"),"heading-md-semibold":hn("heading-md-semibold"),"heading-md-bold":hn("heading-md-bold"),"heading-sm-light":hn("heading-sm-light"),"heading-sm-regular":hn("heading-sm-regular"),"heading-sm-semibold":hn("heading-sm-semibold"),"heading-sm-bold":hn("heading-sm-bold"),"heading-xs-light":hn("heading-xs-light"),"heading-xs-regular":hn("heading-xs-regular"),"heading-xs-semibold":hn("heading-xs-semibold"),"heading-xs-bold":hn("heading-xs-bold"),"body-baseline-light":hn("body-baseline-light"),"body-baseline-regular":hn("body-baseline-regular"),"body-baseline-semibold":hn("body-baseline-semibold"),"body-baseline-bold":hn("body-baseline-bold"),"body-md-light":hn("body-md-light"),"body-md-regular":hn("body-md-regular"),"body-md-semibold":hn("body-md-semibold"),"body-md-bold":hn("body-md-bold"),"body-sm-light":hn("body-sm-light"),"body-sm-regular":hn("body-sm-regular"),"body-sm-semibold":hn("body-sm-semibold"),"body-sm-bold":hn("body-sm-bold"),"body-xs-light":hn("body-xs-light"),"body-xs-regular":hn("body-xs-regular"),"body-xs-semibold":hn("body-xs-semibold"),"body-xs-bold":hn("body-xs-bold"),"form-label":hn("form-label"),"form-description":hn("form-description")},mn={collections:{default:{"duration-150":"150ms","duration-250":"250ms","duration-350":"350ms","duration-500":"500ms","duration-800":"800ms","duration-1000":"1000ms","ease-default":"cubic-bezier(0.45, 0.05, 0.55, 0.95)","ease-standard":"cubic-bezier(0.86, 0, 0.07, 1)","ease-entrance":"cubic-bezier(0.18, 0.13, 0, 1)","ease-exit":"cubic-bezier(1, 0, 0.8, 0.85)"}},defaultValue:"default"},fn=e=>t=>{var r;const n=t.theme,o=Rr(mn,null==n?void 0:n.motionScheme);return(null===(r=null==n?void 0:n.overrides)||void 0===r?void 0:r.motion)?Or(o,e,n.overrides.motion):o[e]},pn={"duration-150":fn("duration-150"),"duration-250":fn("duration-250"),"duration-350":fn("duration-350"),"duration-500":fn("duration-500"),"duration-800":fn("duration-800"),"duration-1000":fn("duration-1000"),"ease-default":fn("ease-default"),"ease-standard":fn("ease-standard"),"ease-entrance":fn("ease-entrance"),"ease-exit":fn("ease-exit")},bn={collections:{default:{none:0,xs:2,sm:4,md:8,lg:12,full:9999}},defaultValue:"default"},vn=e=>t=>{var r;const n=t.theme,o=Rr(bn,null==n?void 0:n.radiusScheme);return(null===(r=null==n?void 0:n.overrides)||void 0===r?void 0:r.radius)?`${Or(o,e,n.overrides.radius)}px`:`${o[e]}px`},yn={none:vn("none"),xs:vn("xs"),sm:vn("sm"),md:vn("md"),lg:vn("lg"),full:vn("full")},xn={collections:{default:{"spacing-0":0,"spacing-4":4,"spacing-8":8,"spacing-12":12,"spacing-16":16,"spacing-20":20,"spacing-24":24,"spacing-32":32,"spacing-40":40,"spacing-48":48,"spacing-64":64,"spacing-72":72,"layout-xs":8,"layout-sm":16,"layout-md":24,"layout-lg":32,"layout-xl":48,"layout-xxl":64,"layout-xxxl":128}},defaultValue:"default"},wn=e=>t=>{var r;const n=t.theme,o=Rr(xn,null==n?void 0:n.spacingScheme);return(null===(r=null==n?void 0:n.overrides)||void 0===r?void 0:r.spacing)?`${Or(o,e,n.overrides.spacing)}px`:`${o[e]}px`},$n={"spacing-0":wn("spacing-0"),"spacing-4":wn("spacing-4"),"spacing-8":wn("spacing-8"),"spacing-12":wn("spacing-12"),"spacing-16":wn("spacing-16"),"spacing-20":wn("spacing-20"),"spacing-24":wn("spacing-24"),"spacing-32":wn("spacing-32"),"spacing-40":wn("spacing-40"),"spacing-48":wn("spacing-48"),"spacing-64":wn("spacing-64"),"spacing-72":wn("spacing-72"),"layout-xs":wn("layout-xs"),"layout-sm":wn("layout-sm"),"layout-md":wn("layout-md"),"layout-lg":wn("layout-lg"),"layout-xl":wn("layout-xl"),"layout-xxl":wn("layout-xxl"),"layout-xxxl":wn("layout-xxxl")},Fn=Object.assign(Object.assign({},Gr),{Primitive:Vr}),Cn=Object.assign(Object.assign({},gn),{Spec:an}),En=pn,Sn=Object.assign(Object.assign({},Lr),{Util:Kr}),kn=$n,In=yn,Tn=tn,Dn=nn,Bn=x.div`
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
                            ${kn["spacing-16"]}
                    );
                    flex: unset;
                }

                [data-id="range-container-elem2-container"] {
                    margin-top: ${kn["spacing-8"]};
                }
            `}}
`,zn=x.div`
    width: 100%; // Force next flex item to break to next line
`,Mn=x.div`
    display: flex;
    flex: 1;
    align-items: center;
`,An=x(v)`
    color: ${Fn.icon};
    width: ${Cn.Spec["body-size-baseline"]};
    height: ${Cn.Spec["body-size-baseline"]};
    flex-shrink: 0;
    margin: 0 ${kn["spacing-8"]};
    align-self: center;
`,_n=x.div`
    position: absolute;
    background: ${e=>e.$error?Fn["border-error-focus-strong"]:Fn["border-focus-strong"]};
    height: 2px;
    // half - half padding - half icon width
    width: calc(
        50% - ${kn["spacing-8"]} - (${Cn.Spec["body-size-baseline"]} / 2)
    );
    transition: left ${En["duration-350"]} ${En["ease-standard"]},
        opacity ${En["duration-350"]} ${En["ease-standard"]};
    left: 0;
    bottom: 0;

    ${e=>{switch(e.$position){case"start":return w`
                    opacity: 1;
                `;case"end":return w`
                    left: calc(50% + ${kn["spacing-16"]});
                    opacity: 1;
                `;case"none":return w`
                    opacity: 0;
                `}}}

    ${e=>{if(e.$wrap)return w`
                display: none;
            `}}
`,On=({children:r,currentActive:n,error:o,className:i,wrap:s})=>{const[a,l]=r;return e(Bn,{className:i,$wrap:s,children:[t(Mn,{"data-id":"range-container-elem1-container",children:a}),t(An,{}),s&&t(zn,{}),t(Mn,{"data-id":"range-container-elem2-container",children:l}),t(_n,{"data-id":"range-container-indicator",$position:n,$error:o,$wrap:s})]})},Rn=w`
    outline-offset: -1px;
    outline: ${Sn["width-020"]} ${Sn.solid} ${Fn["border-focus"]};
`,Hn=w`
    outline-color: ${Fn["border-focus"]};
`,jn=w`
    outline-color: ${Fn["border-disabled"]};
`,Ln=w`
    outline-color: ${Fn["border-error-focus"]};
`,Pn=x.div`
    border: ${Sn["width-010"]} ${Sn.solid} ${Fn.border};
    border-radius: ${In.sm};
    background: ${Fn.bg};

    :focus-within {
        ${Rn}
    }
    ${e=>e.$focused&&Rn}

    ${e=>e.$readOnly?w`
                border-color: transparent;
                padding: 0;
                background: transparent !important;

                :focus-within {
                    ${Hn}
                }
                ${e.$focused&&Hn}
            `:e.$disabled?w`
                background: ${Fn["bg-disabled"]};
                cursor: not-allowed;

                :focus-within {
                    ${jn}
                }
                ${e.$focused&&jn}
            `:e.$error?w`
                border-color: ${Fn["border-error"]};

                :focus-within {
                    ${Ln}
                }
                ${e.$focused&&Ln}
            `:void 0}
`,Wn=x(Pn)`
    display: flex;
    align-items: center;
    position: relative;
    height: max-content;
    width: 100%;
    padding: 0 ${kn["spacing-16"]};
    flex-direction: ${e=>"right"===e.$position?"row-reverse":"row"};
`,Nn=x.input`
    ${e=>"small"===e.$variant?Cn["body-md-regular"]:Cn["body-baseline-regular"]}
    color: ${Fn.text};
    display: block;
    background: transparent;
    border: none;
    outline: none;
    box-shadow: none;
    padding: 0;
    margin: 0;

    :disabled {
        color: ${Fn["text-subtler"]};

        :hover {
            cursor: not-allowed;
        }
    }

    ::placeholder,
    ::-webkit-input-placeholder {
        color: ${Fn["text-subtler"]};
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
            ${Fn["border-focus"]};
        border-radius: ${In.sm};
    }
`,Yn=x.div`
    position: relative;
`,Un=x(Wn)`
    height: 3rem;
    gap: ${kn["spacing-8"]};
`,qn=x(Nn)`
    display: block;
    width: 100%;
    flex: 1;
`;var Gn={exports:{}};Gn.exports=function(){var e=1e3,t=6e4,r=36e5,n="millisecond",o="second",i="minute",s="hour",a="day",l="week",d="month",c="quarter",u="year",h="date",g="Invalid Date",m=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,f=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,p={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(e){var t=["th","st","nd","rd"],r=e%100;return"["+e+(t[(r-20)%10]||t[r]||t[0])+"]"}},b=function(e,t,r){var n=String(e);return!n||n.length>=t?e:""+Array(t+1-n.length).join(r)+e},v={s:b,z:function(e){var t=-e.utcOffset(),r=Math.abs(t),n=Math.floor(r/60),o=r%60;return(t<=0?"+":"-")+b(n,2,"0")+":"+b(o,2,"0")},m:function e(t,r){if(t.date()<r.date())return-e(r,t);var n=12*(r.year()-t.year())+(r.month()-t.month()),o=t.clone().add(n,d),i=r-o<0,s=t.clone().add(n+(i?-1:1),d);return+(-(n+(r-o)/(i?o-s:s-o))||0)},a:function(e){return e<0?Math.ceil(e)||0:Math.floor(e)},p:function(e){return{M:d,y:u,w:l,d:a,D:h,h:s,m:i,s:o,ms:n,Q:c}[e]||String(e||"").toLowerCase().replace(/s$/,"")},u:function(e){return void 0===e}},y="en",x={};x[y]=p;var w="$isDayjsObject",$=function(e){return e instanceof S||!(!e||!e[w])},F=function e(t,r,n){var o;if(!t)return y;if("string"==typeof t){var i=t.toLowerCase();x[i]&&(o=i),r&&(x[i]=r,o=i);var s=t.split("-");if(!o&&s.length>1)return e(s[0])}else{var a=t.name;x[a]=t,o=a}return!n&&o&&(y=o),o||!n&&y},C=function(e,t){if($(e))return e.clone();var r="object"==typeof t?t:{};return r.date=e,r.args=arguments,new S(r)},E=v;E.l=F,E.i=$,E.w=function(e,t){return C(e,{locale:t.$L,utc:t.$u,x:t.$x,$offset:t.$offset})};var S=function(){function p(e){this.$L=F(e.locale,null,!0),this.parse(e),this.$x=this.$x||e.x||{},this[w]=!0}var b=p.prototype;return b.parse=function(e){this.$d=function(e){var t=e.date,r=e.utc;if(null===t)return new Date(NaN);if(E.u(t))return new Date;if(t instanceof Date)return new Date(t);if("string"==typeof t&&!/Z$/i.test(t)){var n=t.match(m);if(n){var o=n[2]-1||0,i=(n[7]||"0").substring(0,3);return r?new Date(Date.UTC(n[1],o,n[3]||1,n[4]||0,n[5]||0,n[6]||0,i)):new Date(n[1],o,n[3]||1,n[4]||0,n[5]||0,n[6]||0,i)}}return new Date(t)}(e),this.init()},b.init=function(){var e=this.$d;this.$y=e.getFullYear(),this.$M=e.getMonth(),this.$D=e.getDate(),this.$W=e.getDay(),this.$H=e.getHours(),this.$m=e.getMinutes(),this.$s=e.getSeconds(),this.$ms=e.getMilliseconds()},b.$utils=function(){return E},b.isValid=function(){return!(this.$d.toString()===g)},b.isSame=function(e,t){var r=C(e);return this.startOf(t)<=r&&r<=this.endOf(t)},b.isAfter=function(e,t){return C(e)<this.startOf(t)},b.isBefore=function(e,t){return this.endOf(t)<C(e)},b.$g=function(e,t,r){return E.u(e)?this[t]:this.set(r,e)},b.unix=function(){return Math.floor(this.valueOf()/1e3)},b.valueOf=function(){return this.$d.getTime()},b.startOf=function(e,t){var r=this,n=!!E.u(t)||t,c=E.p(e),g=function(e,t){var o=E.w(r.$u?Date.UTC(r.$y,t,e):new Date(r.$y,t,e),r);return n?o:o.endOf(a)},m=function(e,t){return E.w(r.toDate()[e].apply(r.toDate("s"),(n?[0,0,0,0]:[23,59,59,999]).slice(t)),r)},f=this.$W,p=this.$M,b=this.$D,v="set"+(this.$u?"UTC":"");switch(c){case u:return n?g(1,0):g(31,11);case d:return n?g(1,p):g(0,p+1);case l:var y=this.$locale().weekStart||0,x=(f<y?f+7:f)-y;return g(n?b-x:b+(6-x),p);case a:case h:return m(v+"Hours",0);case s:return m(v+"Minutes",1);case i:return m(v+"Seconds",2);case o:return m(v+"Milliseconds",3);default:return this.clone()}},b.endOf=function(e){return this.startOf(e,!1)},b.$set=function(e,t){var r,l=E.p(e),c="set"+(this.$u?"UTC":""),g=(r={},r[a]=c+"Date",r[h]=c+"Date",r[d]=c+"Month",r[u]=c+"FullYear",r[s]=c+"Hours",r[i]=c+"Minutes",r[o]=c+"Seconds",r[n]=c+"Milliseconds",r)[l],m=l===a?this.$D+(t-this.$W):t;if(l===d||l===u){var f=this.clone().set(h,1);f.$d[g](m),f.init(),this.$d=f.set(h,Math.min(this.$D,f.daysInMonth())).$d}else g&&this.$d[g](m);return this.init(),this},b.set=function(e,t){return this.clone().$set(e,t)},b.get=function(e){return this[E.p(e)]()},b.add=function(n,c){var h,g=this;n=Number(n);var m=E.p(c),f=function(e){var t=C(g);return E.w(t.date(t.date()+Math.round(e*n)),g)};if(m===d)return this.set(d,this.$M+n);if(m===u)return this.set(u,this.$y+n);if(m===a)return f(1);if(m===l)return f(7);var p=(h={},h[i]=t,h[s]=r,h[o]=e,h)[m]||1,b=this.$d.getTime()+n*p;return E.w(b,this)},b.subtract=function(e,t){return this.add(-1*e,t)},b.format=function(e){var t=this,r=this.$locale();if(!this.isValid())return r.invalidDate||g;var n=e||"YYYY-MM-DDTHH:mm:ssZ",o=E.z(this),i=this.$H,s=this.$m,a=this.$M,l=r.weekdays,d=r.months,c=r.meridiem,u=function(e,r,o,i){return e&&(e[r]||e(t,n))||o[r].slice(0,i)},h=function(e){return E.s(i%12||12,e,"0")},m=c||function(e,t,r){var n=e<12?"AM":"PM";return r?n.toLowerCase():n};return n.replace(f,(function(e,n){return n||function(e){switch(e){case"YY":return String(t.$y).slice(-2);case"YYYY":return E.s(t.$y,4,"0");case"M":return a+1;case"MM":return E.s(a+1,2,"0");case"MMM":return u(r.monthsShort,a,d,3);case"MMMM":return u(d,a);case"D":return t.$D;case"DD":return E.s(t.$D,2,"0");case"d":return String(t.$W);case"dd":return u(r.weekdaysMin,t.$W,l,2);case"ddd":return u(r.weekdaysShort,t.$W,l,3);case"dddd":return l[t.$W];case"H":return String(i);case"HH":return E.s(i,2,"0");case"h":return h(1);case"hh":return h(2);case"a":return m(i,s,!0);case"A":return m(i,s,!1);case"m":return String(s);case"mm":return E.s(s,2,"0");case"s":return String(t.$s);case"ss":return E.s(t.$s,2,"0");case"SSS":return E.s(t.$ms,3,"0");case"Z":return o}return null}(e)||o.replace(":","")}))},b.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},b.diff=function(n,h,g){var m,f=this,p=E.p(h),b=C(n),v=(b.utcOffset()-this.utcOffset())*t,y=this-b,x=function(){return E.m(f,b)};switch(p){case u:m=x()/12;break;case d:m=x();break;case c:m=x()/3;break;case l:m=(y-v)/6048e5;break;case a:m=(y-v)/864e5;break;case s:m=y/r;break;case i:m=y/t;break;case o:m=y/e;break;default:m=y}return g?m:E.a(m)},b.daysInMonth=function(){return this.endOf(d).$D},b.$locale=function(){return x[this.$L]},b.locale=function(e,t){if(!e)return this.$L;var r=this.clone(),n=F(e,t,!0);return n&&(r.$L=n),r},b.clone=function(){return E.w(this.$d,this)},b.toDate=function(){return new Date(this.valueOf())},b.toJSON=function(){return this.isValid()?this.toISOString():null},b.toISOString=function(){return this.$d.toISOString()},b.toString=function(){return this.$d.toUTCString()},p}(),k=S.prototype;return C.prototype=k,[["$ms",n],["$s",o],["$m",i],["$H",s],["$W",a],["$M",d],["$y",u],["$D",h]].forEach((function(e){k[e[1]]=function(t){return this.$g(t,e[0],e[1])}})),C.extend=function(e,t){return e.$i||(e(t,S,C),e.$i=!0),C},C.locale=F,C.isDayjs=$,C.unix=function(e){return C(1e3*e)},C.en=x[y],C.Ls=x,C.p={},C}();var Zn,Qn,Xn,Kn=se(Gn.exports);!function(e){e.transformWithSpaces=(e,t)=>{const r="(.{"+t+"})";return e.replace(/[^\dA-Z]/gi,"").replace(new RegExp(r,"g"),"$1 ").trim()},e.padValue=(e,t)=>{if("0"===e)return t?e:e.padStart(2,"0");if(""===e)return e;return parseInt(e).toString().padStart(2,"0")},e.shouldTruncateToTwoLines=(e,t)=>{const r=Math.floor(t/9);return e.length>=2*r||1===e.split(" ").length&&e.length>r},e.truncateOneLine=(e,t,r,n,o=8)=>{let i=0;t>r&&(i=Math.floor((t-r)/o));const s=n+i;if(s<e.length){const t=Math.floor(s/2);return e.substring(0,t)+" ... "+e.substring(e.length-t,e.length)}return e},e.truncateTwoLines=(e,t,r,n=1.2)=>{const o=Math.floor(2*t/(.6*r))*(2/n);if(e.length<=o)return e;const i=Math.floor(.6*o),s=Math.floor(.2*o);return`${e.substring(0,i)}...${e.substring(e.length-s)}`},e.getTextWidth=(t,r)=>{if("undefined"==typeof document)return 0;const n=(e.getTextWidth.canvas||(e.getTextWidth.canvas=document.createElement("canvas"))).getContext("2d");n.font=r;return n.measureText(t).width},e.maskValue=(e,r)=>{if(!e)return e;const{maskRange:n,unmaskRange:o,maskChar:i="•",maskRegex:s,maskTransformer:a}=r;if(a)return a(e);if(s)return e.replace(s,i);if(n){const{startIndex:r,endIndex:o}=t(n[0],n[1]);return e.substring(0,r)+i.repeat(e.substring(r,o+1).length)+e.substring(o+1)}if(o){const{startIndex:r,endIndex:n}=t(o[0],o[1]);return i.repeat(e.substring(0,r).length)+e.substring(r,n+1)+i.repeat(e.substring(n+1).length)}return e};const t=(e,t)=>e<t?{startIndex:e,endIndex:t}:{startIndex:t,endIndex:e}}(Zn||(Zn={})),function(e){e.AM="AM",e.PM="PM"}(Qn||(Qn={})),function(e){e.roundToNearestInterval=(e,t,r)=>{const[n,o]=e.split(":"),i=parseInt(n,10),s=parseInt(o,10);if(isNaN(i)||isNaN(s)||s<0||s>=60)throw new Error("Invalid time format");const a=60*i+s,l=a%t,d=0===l?a:r?a+(t-l):a-l,c=d%60;return`${Math.floor(d/60).toString().padStart(2,"0")}:${c.toString().padStart(2,"0")}`},e.generateHourlyIntervals=(e,t,r="ha")=>{const n="HH:mm";let o=Kn(e,n),i=Kn(t,n);o.isSame(i)&&(i=i.add(1,"day"));const s=[];for(;o.isBefore(i);)s.push(o.format(r)),o=o.add(1,"hour");return s},e.getTimeValues=(e,t)=>{const r={hour:"",minute:"",period:Qn.AM};if(!t)return r;try{if("24hr"===e){const n=to(t,e);r.minute=Zn.padValue(n.minute);const o=parseInt(n.hour);0===Math.floor(o/12)?(r.period=Qn.AM,r.hour=0===o?"12":Zn.padValue(o.toString())):(r.period=Qn.PM,r.hour=12===o?o.toString():Zn.padValue((o-12).toString()))}else{const{hour:n,minute:o,period:i=""}=to(t,e);r.hour=Zn.padValue(n),r.minute=Zn.padValue(o),r.period="am"===i.toLowerCase()?Qn.AM:Qn.PM}return r}catch(e){return r}},e.updateMinutes=(e,t)=>{const r=parseInt(e);if(isNaN(r))return"add"===t?Zn.padValue("0"):"55";const n=Math.floor(r/5),o=(("add"===t?n+1:r%5==0?n-1:n)%12+12)%12;return Zn.padValue((5*o).toString())},e.updateHours=(e,t)=>{const r=parseInt(e);if(isNaN(r))return"add"===t?Zn.padValue("1"):"12";const n="add"===t?r+1:r-1;return n<=12&&n>0?Zn.padValue(n.toString()):13===n?Zn.padValue("1"):"12"},e.convertTo24HourFormat=e=>{const t=parseInt(e.hour);let r;return r=e.period===Qn.PM?12===t?t.toString():(t+12).toString():12===t?"00":e.hour,`${r}:${e.minute}`},e.convertHourTo12HourFormat=e=>{const t=parseInt(e),r=t%12==0?12..toString():(t%12).toString();return Zn.padValue(r)},e.formatDisplayValue=(e,t)=>{try{const{hour:r,minute:n,period:o=""}=to(e,t),i=Zn.padValue(r);let s=`${i}:${Zn.padValue(n)}`;return"12hr"===t?(s+=o.toLowerCase(),s):s}catch(e){return""}},e.toMinutesSeconds=e=>({minutes:Math.floor(e/60),seconds:e%60}),e.to24Hour=e=>{if((null==e?void 0:e.includes("am"))||(null==e?void 0:e.includes("pm"))){const[t,r]=e.split(/(am|pm)/i),[n,o]=t.split(":").map(Number);let i=n;return"pm"===r&&i<12&&(i+=12),"am"===r&&12===i&&(i=0),ro(i,o)}return e},e.generateTimings=(t,r="12hr",n,o)=>{const i=[];let s=0,a=1440-t;for(n&&(s=e.timeToMinutes(n)),o&&(a=e.timeToMinutes(o));s<=a;){let e=Math.floor(s/60);const n=s%60;if("12hr"===r){const t=e>=12?"pm":"am";e%=12,e=e||12;const r=ro(e,n,t);i.push(r)}else{const t=ro(e,n);i.push(t)}s+=t}return i},e.parseInput=(e,t="12hr")=>{if(""===e||void 0===e)return e;const r=e.trim().toLowerCase(),n=/^(?:(\d{1,2})([:.])?(\d{2})?)?(a|p|am|pm)?$/.exec(r);if(!n)return;let o=parseInt(n[1]||"0",10);const i=parseInt(n[3]||"0",10);let s=n[4];if(void 0===n[1]||o>24||i>59)return;if("a"===s?s="am":"p"===s&&(s="pm"),"24hr"===t)return"pm"===s&&o<12?o+=12:("am"===s&&12===o||24===o)&&(o=0),ro(o,i);s?0===o||24===o?(s="am",o=12):o>12&&(s="pm",o-=12):(s=0===o||24===o||o>6&&o<12?"am":"pm",o=o%12||12);return ro(o,i,s)},e.findClosestFlooredTime=(t,r)=>{if(!t)return t;const n=e.timeToMinutes(t);let o="",i=1/0;for(const t of r){const r=e.timeToMinutes(t)-n;if(r<=0&&Math.abs(r)<i)i=Math.abs(r),o=t;else if(r>0)break}return o},e.timeToMinutes=e=>{const[t,r]=e.toLowerCase().split(/(am|pm)/),[n,o]=t.split(":").map(Number);let i=n;return"pm"===r&&12!==i&&(i+=12),"am"===r&&12===i&&(i=0),60*i+o}}(Xn||(Xn={}));const Jn=(e,t)=>{const r=parseInt(e);return"24hr"===t?r>=0&&r<=23:r>=1&&r<=12},eo=e=>{const t=parseInt(e);return t>=0&&t<=59},to=(e,t)=>{const r=e?e.split(":"):[],n=new Error("Invalid format");if("12hr"===t){if(2!==r.length||4!==r[1].length)throw n;const e=r[1].substring(0,2),i=r[1].substring(2);if(!Jn(r[0],t)||!eo(e)||"am"!==(o=i).toLowerCase()&&"pm"!==o.toLowerCase())throw n;return{hour:r[0],minute:e,period:r[1].substring(2)}}if(2!==r.length)throw n;if(!Jn(r[0],t)||!eo(r[1]))throw n;return{hour:r[0],minute:r[1]};var o},ro=(e,t,r)=>r?`${e}:${t.toString().padStart(2,"0")}${r}`:`${e.toString().padStart(2,"0")}:${t.toString().padStart(2,"0")}`;var no=function(e,t){return no=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])},no(e,t)};var oo=function(){return oo=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var o in t=arguments[r])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e},oo.apply(this,arguments)};var io="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};var so=function(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)},ao="object"==typeof io&&io&&io.Object===Object&&io,lo="object"==typeof self&&self&&self.Object===Object&&self,co=ao||lo||Function("return this")(),uo=co,ho=function(){return uo.Date.now()},go=/\s/;var mo=function(e){for(var t=e.length;t--&&go.test(e.charAt(t)););return t},fo=/^\s+/;var po=function(e){return e?e.slice(0,mo(e)+1).replace(fo,""):e},bo=co.Symbol,vo=bo,yo=Object.prototype,xo=yo.hasOwnProperty,wo=yo.toString,$o=vo?vo.toStringTag:void 0;var Fo=function(e){var t=xo.call(e,$o),r=e[$o];try{e[$o]=void 0;var n=!0}catch(e){}var o=wo.call(e);return n&&(t?e[$o]=r:delete e[$o]),o},Co=Object.prototype.toString;var Eo=Fo,So=function(e){return Co.call(e)},ko=bo?bo.toStringTag:void 0;var Io=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":ko&&ko in Object(e)?Eo(e):So(e)},To=function(e){return null!=e&&"object"==typeof e};var Do=po,Bo=so,zo=function(e){return"symbol"==typeof e||To(e)&&"[object Symbol]"==Io(e)},Mo=/^[-+]0x[0-9a-f]+$/i,Ao=/^0b[01]+$/i,_o=/^0o[0-7]+$/i,Oo=parseInt;var Ro=so,Ho=ho,jo=function(e){if("number"==typeof e)return e;if(zo(e))return NaN;if(Bo(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=Bo(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=Do(e);var r=Ao.test(e);return r||_o.test(e)?Oo(e.slice(2),r?2:8):Mo.test(e)?NaN:+e},Lo=Math.max,Po=Math.min;var Wo=function(e,t,r){var n,o,i,s,a,l,d=0,c=!1,u=!1,h=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function g(t){var r=n,i=o;return n=o=void 0,d=t,s=e.apply(i,r)}function m(e){var r=e-l;return void 0===l||r>=t||r<0||u&&e-d>=i}function f(){var e=Ho();if(m(e))return p(e);a=setTimeout(f,function(e){var r=t-(e-l);return u?Po(r,i-(e-d)):r}(e))}function p(e){return a=void 0,h&&n?g(e):(n=o=void 0,s)}function b(){var e=Ho(),r=m(e);if(n=arguments,o=this,l=e,r){if(void 0===a)return function(e){return d=e,a=setTimeout(f,t),c?g(e):s}(l);if(u)return clearTimeout(a),a=setTimeout(f,t),g(l)}return void 0===a&&(a=setTimeout(f,t)),s}return t=jo(t)||0,Ro(r)&&(c=!!r.leading,i=(u="maxWait"in r)?Lo(jo(r.maxWait)||0,t):i,h="trailing"in r?!!r.trailing:h),b.cancel=function(){void 0!==a&&clearTimeout(a),d=0,n=l=o=a=void 0},b.flush=function(){return void 0===a?s:p(Ho())},b},No=Wo,Vo=so;var Yo=function(e,t,r){var n=!0,o=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return Vo(r)&&(n="leading"in r?!!r.leading:n,o="trailing"in r?!!r.trailing:o),No(e,t,{leading:n,maxWait:t,trailing:o})},Uo=function(e,t,r,n){switch(t){case"debounce":return Wo(e,r,n);case"throttle":return Yo(e,r,n);default:return e}},qo=function(e){return"function"==typeof e},Go=function(){return"undefined"==typeof window},Zo=function(e){return e instanceof Element||e instanceof HTMLDocument},Qo=function(e,t,r,n){return function(o){var i=o.width,s=o.height;t((function(t){return t.width===i&&t.height===s||t.width===i&&!n||t.height===s&&!r?t:(e&&qo(e)&&e(i,s),{width:i,height:s})}))}};!function(e){function t(t){var r=e.call(this,t)||this;r.cancelHandler=function(){r.resizeHandler&&r.resizeHandler.cancel&&(r.resizeHandler.cancel(),r.resizeHandler=null)},r.attachObserver=function(){var e=r.props,t=e.targetRef,n=e.observerOptions;if(!Go()){t&&t.current&&(r.targetRef.current=t.current);var o=r.getElement();o&&(r.observableElement&&r.observableElement===o||(r.observableElement=o,r.resizeObserver.observe(o,n)))}},r.getElement=function(){var e=r.props,t=e.querySelector,n=e.targetDomEl;if(Go())return null;if(t)return document.querySelector(t);if(n&&Zo(n))return n;if(r.targetRef&&Zo(r.targetRef.current))return r.targetRef.current;var o=k(r);if(!o)return null;switch(r.getRenderType()){case"renderProp":case"childFunction":case"child":case"childArray":return o;default:return o.parentElement}},r.createResizeHandler=function(e){var t=r.props,n=t.handleWidth,o=void 0===n||n,i=t.handleHeight,s=void 0===i||i,a=t.onResize;if(o||s){var l=Qo(a,r.setState.bind(r),o,s);e.forEach((function(e){var t=e&&e.contentRect||{},n=t.width,o=t.height;!r.skipOnMount&&!Go()&&l({width:n,height:o}),r.skipOnMount=!1}))}},r.getRenderType=function(){var e=r.props,t=e.render,n=e.children;return qo(t)?"renderProp":qo(n)?"childFunction":l(n)?"child":Array.isArray(n)?"childArray":"parent"};var n=t.skipOnMount,o=t.refreshMode,i=t.refreshRate,s=void 0===i?1e3:i,a=t.refreshOptions;return r.state={width:void 0,height:void 0},r.skipOnMount=n,r.targetRef=d(),r.observableElement=null,Go()||(r.resizeHandler=Uo(r.createResizeHandler,o,s,a),r.resizeObserver=new window.ResizeObserver(r.resizeHandler)),r}(function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");function r(){this.constructor=e}no(e,t),e.prototype=null===t?Object.create(t):(r.prototype=t.prototype,new r)})(t,e),t.prototype.componentDidMount=function(){this.attachObserver()},t.prototype.componentDidUpdate=function(){this.attachObserver()},t.prototype.componentWillUnmount=function(){Go()||(this.observableElement=null,this.resizeObserver.disconnect(),this.cancelHandler())},t.prototype.render=function(){var e,t=this.props,r=t.render,o=t.children,i=t.nodeType,s=void 0===i?"div":i,a=this.state,l={width:a.width,height:a.height,targetRef:this.targetRef};switch(this.getRenderType()){case"renderProp":return r&&r(l);case"childFunction":return(e=o)(l);case"child":if((e=o).type&&"string"==typeof e.type){var d=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(n=Object.getOwnPropertySymbols(e);o<n.length;o++)t.indexOf(n[o])<0&&Object.prototype.propertyIsEnumerable.call(e,n[o])&&(r[n[o]]=e[n[o]])}return r}(l,["targetRef"]);return c(e,d)}return c(e,l);case"childArray":return(e=o).map((function(e){return!!e&&c(e,l)}));default:return n.createElement(s,null)}}}(u);var Xo=Go()?s:h;function Ko(e){void 0===e&&(e={});var t=e.skipOnMount,r=void 0!==t&&t,n=e.refreshMode,o=e.refreshRate,s=void 0===o?1e3:o,l=e.refreshOptions,d=e.handleWidth,c=void 0===d||d,u=e.handleHeight,h=void 0===u||u,g=e.targetRef,m=e.observerOptions,f=e.onResize,p=i(r),b=i(null),v=null!=g?g:b,y=i(),x=a({width:void 0,height:void 0}),w=x[0],$=x[1];return Xo((function(){if(!Go()){var e=Qo(f,$,c,h);y.current=Uo((function(t){(c||h)&&t.forEach((function(t){var r=t&&t.contentRect||{},n=r.width,o=r.height;!p.current&&!Go()&&e({width:n,height:o}),p.current=!1}))}),n,s,l);var t=new window.ResizeObserver(y.current);return v.current&&t.observe(v.current,m),function(){t.disconnect();var e=y.current;e&&e.cancel&&e.cancel()}}}),[n,s,l,c,h,f,m,v.current]),oo({ref:v},w)}var Jo=Object.defineProperty,ei={};((e,t)=>{for(var r in t)Jo(e,r,{get:t[r],enumerable:!0})})(ei,{assign:()=>Mi,colors:()=>Di,createStringInterpolator:()=>Si,skipAnimation:()=>Bi,to:()=>ki,willAdvance:()=>zi});var ti=bi(),ri=e=>gi(e,ti),ni=bi();ri.write=e=>gi(e,ni);var oi=bi();ri.onStart=e=>gi(e,oi);var ii=bi();ri.onFrame=e=>gi(e,ii);var si=bi();ri.onFinish=e=>gi(e,si);var ai=[];ri.setTimeout=(e,t)=>{const r=ri.now()+t,n=()=>{const e=ai.findIndex((e=>e.cancel==n));~e&&ai.splice(e,1),ui-=~e?1:0},o={time:r,handler:e,cancel:n};return ai.splice(li(r),0,o),ui+=1,mi(),o};var li=e=>~(~ai.findIndex((t=>t.time>e))||~ai.length);ri.cancel=e=>{oi.delete(e),ii.delete(e),si.delete(e),ti.delete(e),ni.delete(e)},ri.sync=e=>{hi=!0,ri.batchedUpdates(e),hi=!1},ri.throttle=e=>{let t;function r(){try{e(...t)}finally{t=null}}function n(...e){t=e,ri.onStart(r)}return n.handler=e,n.cancel=()=>{oi.delete(r),t=null},n};var di="undefined"!=typeof window?window.requestAnimationFrame:()=>{};ri.use=e=>di=e,ri.now="undefined"!=typeof performance?()=>performance.now():Date.now,ri.batchedUpdates=e=>e(),ri.catch=console.error,ri.frameLoop="always",ri.advance=()=>{"demand"!==ri.frameLoop?console.warn("Cannot call the manual advancement of rafz whilst frameLoop is not set as demand"):pi()};var ci=-1,ui=0,hi=!1;function gi(e,t){hi?(t.delete(e),e(0)):(t.add(e),mi())}function mi(){ci<0&&(ci=0,"demand"!==ri.frameLoop&&di(fi))}function fi(){~ci&&(di(fi),ri.batchedUpdates(pi))}function pi(){const e=ci;ci=ri.now();const t=li(ci);t&&(vi(ai.splice(0,t),(e=>e.handler())),ui-=t),ui?(oi.flush(),ti.flush(e?Math.min(64,ci-e):16.667),ii.flush(),ni.flush(),si.flush()):ci=-1}function bi(){let e=new Set,t=e;return{add(r){ui+=t!=e||e.has(r)?0:1,e.add(r)},delete:r=>(ui-=t==e&&e.has(r)?1:0,e.delete(r)),flush(r){t.size&&(e=new Set,ui-=t.size,vi(t,(t=>t(r)&&e.add(t))),ui+=e.size,t=e)}}}function vi(e,t){e.forEach((e=>{try{t(e)}catch(e){ri.catch(e)}}))}function yi(){}var xi={arr:Array.isArray,obj:e=>!!e&&"Object"===e.constructor.name,fun:e=>"function"==typeof e,str:e=>"string"==typeof e,num:e=>"number"==typeof e,und:e=>void 0===e};function wi(e,t){if(xi.arr(e)){if(!xi.arr(t)||e.length!==t.length)return!1;for(let r=0;r<e.length;r++)if(e[r]!==t[r])return!1;return!0}return e===t}var $i=(e,t)=>e.forEach(t);function Fi(e,t,r){if(xi.arr(e))for(let n=0;n<e.length;n++)t.call(r,e[n],`${n}`);else for(const n in e)e.hasOwnProperty(n)&&t.call(r,e[n],n)}var Ci=e=>xi.und(e)?[]:xi.arr(e)?e:[e];function Ei(e,t){if(e.size){const r=Array.from(e);e.clear(),$i(r,t)}}var Si,ki,Ii=(e,...t)=>Ei(e,(e=>e(...t))),Ti=()=>"undefined"==typeof window||!window.navigator||/ServerSideRendering|^Deno\//.test(window.navigator.userAgent),Di=null,Bi=!1,zi=yi,Mi=e=>{e.to&&(ki=e.to),e.now&&(ri.now=e.now),void 0!==e.colors&&(Di=e.colors),null!=e.skipAnimation&&(Bi=e.skipAnimation),e.createStringInterpolator&&(Si=e.createStringInterpolator),e.requestAnimationFrame&&ri.use(e.requestAnimationFrame),e.batchedUpdates&&(ri.batchedUpdates=e.batchedUpdates),e.willAdvance&&(zi=e.willAdvance),e.frameLoop&&(ri.frameLoop=e.frameLoop)},Ai=new Set,_i=[],Oi=[],Ri=0,Hi={get idle(){return!Ai.size&&!_i.length},start(e){Ri>e.priority?(Ai.add(e),ri.onStart(ji)):(Li(e),ri(Wi))},advance:Wi,sort(e){if(Ri)ri.onFrame((()=>Hi.sort(e)));else{const t=_i.indexOf(e);~t&&(_i.splice(t,1),Pi(e))}},clear(){_i=[],Ai.clear()}};function ji(){Ai.forEach(Li),Ai.clear(),ri(Wi)}function Li(e){_i.includes(e)||Pi(e)}function Pi(e){_i.splice(function(e,t){const r=e.findIndex(t);return r<0?e.length:r}(_i,(t=>t.priority>e.priority)),0,e)}function Wi(e){const t=Oi;for(let r=0;r<_i.length;r++){const n=_i[r];Ri=n.priority,n.idle||(zi(n),n.advance(e),n.idle||t.push(n))}return Ri=0,(Oi=_i).length=0,(_i=t).length>0}var Ni="[-+]?\\d*\\.?\\d+",Vi=Ni+"%";function Yi(...e){return"\\(\\s*("+e.join(")\\s*,\\s*(")+")\\s*\\)"}var Ui=new RegExp("rgb"+Yi(Ni,Ni,Ni)),qi=new RegExp("rgba"+Yi(Ni,Ni,Ni,Ni)),Gi=new RegExp("hsl"+Yi(Ni,Vi,Vi)),Zi=new RegExp("hsla"+Yi(Ni,Vi,Vi,Ni)),Qi=/^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,Xi=/^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,Ki=/^#([0-9a-fA-F]{6})$/,Ji=/^#([0-9a-fA-F]{8})$/;function es(e,t,r){return r<0&&(r+=1),r>1&&(r-=1),r<1/6?e+6*(t-e)*r:r<.5?t:r<2/3?e+(t-e)*(2/3-r)*6:e}function ts(e,t,r){const n=r<.5?r*(1+t):r+t-r*t,o=2*r-n,i=es(o,n,e+1/3),s=es(o,n,e),a=es(o,n,e-1/3);return Math.round(255*i)<<24|Math.round(255*s)<<16|Math.round(255*a)<<8}function rs(e){const t=parseInt(e,10);return t<0?0:t>255?255:t}function ns(e){return(parseFloat(e)%360+360)%360/360}function os(e){const t=parseFloat(e);return t<0?0:t>1?255:Math.round(255*t)}function is(e){const t=parseFloat(e);return t<0?0:t>100?1:t/100}function ss(e){let t=function(e){let t;return"number"==typeof e?e>>>0===e&&e>=0&&e<=4294967295?e:null:(t=Ki.exec(e))?parseInt(t[1]+"ff",16)>>>0:Di&&void 0!==Di[e]?Di[e]:(t=Ui.exec(e))?(rs(t[1])<<24|rs(t[2])<<16|rs(t[3])<<8|255)>>>0:(t=qi.exec(e))?(rs(t[1])<<24|rs(t[2])<<16|rs(t[3])<<8|os(t[4]))>>>0:(t=Qi.exec(e))?parseInt(t[1]+t[1]+t[2]+t[2]+t[3]+t[3]+"ff",16)>>>0:(t=Ji.exec(e))?parseInt(t[1],16)>>>0:(t=Xi.exec(e))?parseInt(t[1]+t[1]+t[2]+t[2]+t[3]+t[3]+t[4]+t[4],16)>>>0:(t=Gi.exec(e))?(255|ts(ns(t[1]),is(t[2]),is(t[3])))>>>0:(t=Zi.exec(e))?(ts(ns(t[1]),is(t[2]),is(t[3]))|os(t[4]))>>>0:null}(e);if(null===t)return e;t=t||0;return`rgba(${(4278190080&t)>>>24}, ${(16711680&t)>>>16}, ${(65280&t)>>>8}, ${(255&t)/255})`}var as=(e,t,r)=>{if(xi.fun(e))return e;if(xi.arr(e))return as({range:e,output:t,extrapolate:r});if(xi.str(e.output[0]))return Si(e);const n=e,o=n.output,i=n.range||[0,1],s=n.extrapolateLeft||n.extrapolate||"extend",a=n.extrapolateRight||n.extrapolate||"extend",l=n.easing||(e=>e);return e=>{const t=function(e,t){for(var r=1;r<t.length-1&&!(t[r]>=e);++r);return r-1}(e,i);return function(e,t,r,n,o,i,s,a,l){let d=l?l(e):e;if(d<t){if("identity"===s)return d;"clamp"===s&&(d=t)}if(d>r){if("identity"===a)return d;"clamp"===a&&(d=r)}if(n===o)return n;if(t===r)return e<=t?n:o;t===-1/0?d=-d:r===1/0?d-=t:d=(d-t)/(r-t);d=i(d),n===-1/0?d=-d:o===1/0?d+=n:d=d*(o-n)+n;return d}(e,i[t],i[t+1],o[t],o[t+1],l,s,a,n.map)}};var ls=1.70158,ds=1.525*ls,cs=ls+1,us=2*Math.PI/3,hs=2*Math.PI/4.5,gs=e=>{const t=7.5625,r=2.75;return e<1/r?t*e*e:e<2/r?t*(e-=1.5/r)*e+.75:e<2.5/r?t*(e-=2.25/r)*e+.9375:t*(e-=2.625/r)*e+.984375},ms={linear:e=>e,easeInQuad:e=>e*e,easeOutQuad:e=>1-(1-e)*(1-e),easeInOutQuad:e=>e<.5?2*e*e:1-Math.pow(-2*e+2,2)/2,easeInCubic:e=>e*e*e,easeOutCubic:e=>1-Math.pow(1-e,3),easeInOutCubic:e=>e<.5?4*e*e*e:1-Math.pow(-2*e+2,3)/2,easeInQuart:e=>e*e*e*e,easeOutQuart:e=>1-Math.pow(1-e,4),easeInOutQuart:e=>e<.5?8*e*e*e*e:1-Math.pow(-2*e+2,4)/2,easeInQuint:e=>e*e*e*e*e,easeOutQuint:e=>1-Math.pow(1-e,5),easeInOutQuint:e=>e<.5?16*e*e*e*e*e:1-Math.pow(-2*e+2,5)/2,easeInSine:e=>1-Math.cos(e*Math.PI/2),easeOutSine:e=>Math.sin(e*Math.PI/2),easeInOutSine:e=>-(Math.cos(Math.PI*e)-1)/2,easeInExpo:e=>0===e?0:Math.pow(2,10*e-10),easeOutExpo:e=>1===e?1:1-Math.pow(2,-10*e),easeInOutExpo:e=>0===e?0:1===e?1:e<.5?Math.pow(2,20*e-10)/2:(2-Math.pow(2,-20*e+10))/2,easeInCirc:e=>1-Math.sqrt(1-Math.pow(e,2)),easeOutCirc:e=>Math.sqrt(1-Math.pow(e-1,2)),easeInOutCirc:e=>e<.5?(1-Math.sqrt(1-Math.pow(2*e,2)))/2:(Math.sqrt(1-Math.pow(-2*e+2,2))+1)/2,easeInBack:e=>cs*e*e*e-ls*e*e,easeOutBack:e=>1+cs*Math.pow(e-1,3)+ls*Math.pow(e-1,2),easeInOutBack:e=>e<.5?Math.pow(2*e,2)*(7.189819*e-ds)/2:(Math.pow(2*e-2,2)*((ds+1)*(2*e-2)+ds)+2)/2,easeInElastic:e=>0===e?0:1===e?1:-Math.pow(2,10*e-10)*Math.sin((10*e-10.75)*us),easeOutElastic:e=>0===e?0:1===e?1:Math.pow(2,-10*e)*Math.sin((10*e-.75)*us)+1,easeInOutElastic:e=>0===e?0:1===e?1:e<.5?-Math.pow(2,20*e-10)*Math.sin((20*e-11.125)*hs)/2:Math.pow(2,-20*e+10)*Math.sin((20*e-11.125)*hs)/2+1,easeInBounce:e=>1-gs(1-e),easeOutBounce:gs,easeInOutBounce:e=>e<.5?(1-gs(1-2*e))/2:(1+gs(2*e-1))/2,steps:(e,t="end")=>r=>{const n=(r="end"===t?Math.min(r,.999):Math.max(r,.001))*e,o="end"===t?Math.floor(n):Math.ceil(n);return i=0,s=1,a=o/e,Math.min(Math.max(a,i),s);var i,s,a}},fs=Symbol.for("FluidValue.get"),ps=Symbol.for("FluidValue.observers"),bs=e=>Boolean(e&&e[fs]),vs=e=>e&&e[fs]?e[fs]():e,ys=e=>e[ps]||null;function xs(e,t){const r=e[ps];r&&r.forEach((e=>{!function(e,t){e.eventObserved?e.eventObserved(t):e(t)}(e,t)}))}var ws=class{constructor(e){if(!e&&!(e=this.get))throw Error("Unknown getter");$s(this,e)}},$s=(e,t)=>Ss(e,fs,t);function Fs(e,t){if(e[fs]){let r=e[ps];r||Ss(e,ps,r=new Set),r.has(t)||(r.add(t),e.observerAdded&&e.observerAdded(r.size,t))}return t}function Cs(e,t){const r=e[ps];if(r&&r.has(t)){const n=r.size-1;n?r.delete(t):e[ps]=null,e.observerRemoved&&e.observerRemoved(n,t)}}var Es,Ss=(e,t,r)=>Object.defineProperty(e,t,{value:r,writable:!0,configurable:!0}),ks=/[+\-]?(?:0|[1-9]\d*)(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,Is=/(#(?:[0-9a-f]{2}){2,4}|(#[0-9a-f]{3})|(rgb|hsl)a?\((-?\d+%?[,\s]+){2,3}\s*[\d\.]+%?\))/gi,Ts=new RegExp(`(${ks.source})(%|[a-z]+)`,"i"),Ds=/rgba\(([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+)\)/gi,Bs=/var\((--[a-zA-Z0-9-_]+),? ?([a-zA-Z0-9 ()%#.,-]+)?\)/,zs=e=>{const[t,r]=Ms(e);if(!t||Ti())return e;const n=window.getComputedStyle(document.documentElement).getPropertyValue(t);if(n)return n.trim();if(r&&r.startsWith("--")){const t=window.getComputedStyle(document.documentElement).getPropertyValue(r);return t||e}return r&&Bs.test(r)?zs(r):r||e},Ms=e=>{const t=Bs.exec(e);if(!t)return[,];const[,r,n]=t;return[r,n]},As=(e,t,r,n,o)=>`rgba(${Math.round(t)}, ${Math.round(r)}, ${Math.round(n)}, ${o})`,_s=e=>{Es||(Es=Di?new RegExp(`(${Object.keys(Di).join("|")})(?!\\w)`,"g"):/^\b$/);const t=e.output.map((e=>vs(e).replace(Bs,zs).replace(Is,ss).replace(Es,ss))),r=t.map((e=>e.match(ks).map(Number))),n=r[0].map(((e,t)=>r.map((e=>{if(!(t in e))throw Error('The arity of each "output" value must be equal');return e[t]})))).map((t=>as({...e,output:t})));return e=>{const r=!Ts.test(t[0])&&t.find((e=>Ts.test(e)))?.replace(ks,"");let o=0;return t[0].replace(ks,(()=>`${n[o++](e)}${r||""}`)).replace(Ds,As)}},Os="react-spring: ",Rs=e=>{const t=e;let r=!1;if("function"!=typeof t)throw new TypeError(`${Os}once requires a function parameter`);return(...e)=>{r||(t(...e),r=!0)}},Hs=Rs(console.warn);var js=Rs(console.warn);function Ls(e){return xi.str(e)&&("#"==e[0]||/\d/.test(e)||!Ti()&&Bs.test(e)||e in(Di||{}))}var Ps=Ti()?s:h;function Ws(){const e=a()[1],t=(()=>{const e=i(!1);return Ps((()=>(e.current=!0,()=>{e.current=!1})),[]),e})();return()=>{t.current&&e(Math.random())}}var Ns=e=>s(e,Vs),Vs=[];function Ys(e){const t=i();return s((()=>{t.current=e})),t.current}var Us=Symbol.for("Animated:node"),qs=e=>e&&e[Us],Gs=(e,t)=>((e,t,r)=>Object.defineProperty(e,t,{value:r,writable:!0,configurable:!0}))(e,Us,t),Zs=e=>e&&e[Us]&&e[Us].getPayload(),Qs=class{constructor(){Gs(this,this)}getPayload(){return this.payload||[]}},Xs=class extends Qs{constructor(e){super(),this._value=e,this.done=!0,this.durationProgress=0,xi.num(this._value)&&(this.lastPosition=this._value)}static create(e){return new Xs(e)}getPayload(){return[this]}getValue(){return this._value}setValue(e,t){return xi.num(e)&&(this.lastPosition=e,t&&(e=Math.round(e/t)*t,this.done&&(this.lastPosition=e))),this._value!==e&&(this._value=e,!0)}reset(){const{done:e}=this;this.done=!1,xi.num(this._value)&&(this.elapsedTime=0,this.durationProgress=0,this.lastPosition=this._value,e&&(this.lastVelocity=null),this.v0=null)}},Ks=class extends Xs{constructor(e){super(0),this._string=null,this._toString=as({output:[e,e]})}static create(e){return new Ks(e)}getValue(){const e=this._string;return null==e?this._string=this._toString(this._value):e}setValue(e){if(xi.str(e)){if(e==this._string)return!1;this._string=e,this._value=1}else{if(!super.setValue(e))return!1;this._string=null}return!0}reset(e){e&&(this._toString=as({output:[this.getValue(),e]})),this._value=0,super.reset()}},Js={dependencies:null},ea=class extends Qs{constructor(e){super(),this.source=e,this.setValue(e)}getValue(e){const t={};return Fi(this.source,((r,n)=>{var o;(o=r)&&o[Us]===o?t[n]=r.getValue(e):bs(r)?t[n]=vs(r):e||(t[n]=r)})),t}setValue(e){this.source=e,this.payload=this._makePayload(e)}reset(){this.payload&&$i(this.payload,(e=>e.reset()))}_makePayload(e){if(e){const t=new Set;return Fi(e,this._addToPayload,t),Array.from(t)}}_addToPayload(e){Js.dependencies&&bs(e)&&Js.dependencies.add(e);const t=Zs(e);t&&$i(t,(e=>this.add(e)))}},ta=class extends ea{constructor(e){super(e)}static create(e){return new ta(e)}getValue(){return this.source.map((e=>e.getValue()))}setValue(e){const t=this.getPayload();return e.length==t.length?t.map(((t,r)=>t.setValue(e[r]))).some(Boolean):(super.setValue(e.map(ra)),!0)}};function ra(e){return(Ls(e)?Ks:Xs).create(e)}function na(e){const t=qs(e);return t?t.constructor:xi.arr(e)?ta:Ls(e)?Ks:Xs}var oa=(e,t)=>{const r=!xi.fun(e)||e.prototype&&e.prototype.isReactComponent;return g(((o,a)=>{const l=i(null),d=r&&m((e=>{l.current=function(e,t){e&&(xi.fun(e)?e(t):e.current=t);return t}(a,e)}),[a]),[c,u]=function(e,t){const r=new Set;Js.dependencies=r,e.style&&(e={...e,style:t.createAnimatedStyle(e.style)});return e=new ea(e),Js.dependencies=null,[e,r]}(o,t),h=Ws(),g=()=>{const e=l.current;if(r&&!e)return;!1===(!!e&&t.applyAnimatedValues(e,c.getValue(!0)))&&h()},f=new ia(g,u),p=i();Ps((()=>(p.current=f,$i(u,(e=>Fs(e,f))),()=>{p.current&&($i(p.current.deps,(e=>Cs(e,p.current))),ri.cancel(p.current.update))}))),s(g,[]),Ns((()=>()=>{const e=p.current;$i(e.deps,(t=>Cs(t,e)))}));const b=t.getComponentProps(c.getValue());return n.createElement(e,{...b,ref:d})}))},ia=class{constructor(e,t){this.update=e,this.deps=t}eventObserved(e){"change"==e.type&&ri.write(this.update)}};var sa=Symbol.for("AnimatedComponent"),aa=e=>xi.str(e)?e:e&&xi.str(e.displayName)?e.displayName:xi.fun(e)&&e.name||null;function la(e,...t){return xi.fun(e)?e(...t):e}var da=(e,t)=>!0===e||!!(t&&e&&(xi.fun(e)?e(t):Ci(e).includes(t))),ca=(e,t)=>xi.obj(e)?t&&e[t]:e,ua=(e,t)=>!0===e.default?e[t]:e.default?e.default[t]:void 0,ha=e=>e,ga=(e,t=ha)=>{let r=ma;e.default&&!0!==e.default&&(e=e.default,r=Object.keys(e));const n={};for(const o of r){const r=t(e[o],o);xi.und(r)||(n[o]=r)}return n},ma=["config","onProps","onStart","onChange","onPause","onResume","onRest"],fa={config:1,from:1,to:1,ref:1,loop:1,reset:1,pause:1,cancel:1,reverse:1,immediate:1,default:1,delay:1,onProps:1,onStart:1,onChange:1,onPause:1,onResume:1,onRest:1,onResolve:1,items:1,trail:1,sort:1,expires:1,initial:1,enter:1,update:1,leave:1,children:1,onDestroyed:1,keys:1,callId:1,parentId:1};function pa(e){const t=function(e){const t={};let r=0;if(Fi(e,((e,n)=>{fa[n]||(t[n]=e,r++)})),r)return t}(e);if(t){const r={to:t};return Fi(e,((e,n)=>n in t||(r[n]=e))),r}return{...e}}function ba(e){return e=vs(e),xi.arr(e)?e.map(ba):Ls(e)?ei.createStringInterpolator({range:[0,1],output:[e,e]})(1):e}function va(e){return xi.fun(e)||xi.arr(e)&&xi.obj(e[0])}var ya={tension:170,friction:26,mass:1,damping:1,easing:ms.linear,clamp:!1},xa=class{constructor(){this.velocity=0,Object.assign(this,ya)}};function wa(e,t){if(xi.und(t.decay)){const r=!xi.und(t.tension)||!xi.und(t.friction);!r&&xi.und(t.frequency)&&xi.und(t.damping)&&xi.und(t.mass)||(e.duration=void 0,e.decay=void 0),r&&(e.frequency=void 0)}else e.duration=void 0}var $a=[],Fa=class{constructor(){this.changed=!1,this.values=$a,this.toValues=null,this.fromValues=$a,this.config=new xa,this.immediate=!1}};function Ca(e,{key:t,props:r,defaultProps:n,state:o,actions:i}){return new Promise(((s,a)=>{let l,d,c=da(r.cancel??n?.cancel,t);if(c)g();else{xi.und(r.pause)||(o.paused=da(r.pause,t));let e=n?.pause;!0!==e&&(e=o.paused||da(e,t)),l=la(r.delay||0,t),e?(o.resumeQueue.add(h),i.pause()):(i.resume(),h())}function u(){o.resumeQueue.add(h),o.timeouts.delete(d),d.cancel(),l=d.time-ri.now()}function h(){l>0&&!ei.skipAnimation?(o.delayed=!0,d=ri.setTimeout(g,l),o.pauseQueue.add(u),o.timeouts.add(d)):g()}function g(){o.delayed&&(o.delayed=!1),o.pauseQueue.delete(u),o.timeouts.delete(d),e<=(o.cancelId||0)&&(c=!0);try{i.start({...r,callId:e,cancel:c},s)}catch(e){a(e)}}}))}var Ea=(e,t)=>1==t.length?t[0]:t.some((e=>e.cancelled))?Ia(e.get()):t.every((e=>e.noop))?Sa(e.get()):ka(e.get(),t.every((e=>e.finished))),Sa=e=>({value:e,noop:!0,finished:!0,cancelled:!1}),ka=(e,t,r=!1)=>({value:e,finished:t,cancelled:r}),Ia=e=>({value:e,cancelled:!0,finished:!1});function Ta(e,t,r,n){const{callId:o,parentId:i,onRest:s}=t,{asyncTo:a,promise:l}=r;return i||e!==a||t.reset?r.promise=(async()=>{r.asyncId=o,r.asyncTo=e;const d=ga(t,((e,t)=>"onRest"===t?void 0:e));let c,u;const h=new Promise(((e,t)=>(c=e,u=t))),g=e=>{const t=o<=(r.cancelId||0)&&Ia(n)||o!==r.asyncId&&ka(n,!1);if(t)throw e.result=t,u(e),e},m=(e,t)=>{const i=new Ba,s=new za;return(async()=>{if(ei.skipAnimation)throw Da(r),s.result=ka(n,!1),u(s),s;g(i);const a=xi.obj(e)?{...e}:{...t,to:e};a.parentId=o,Fi(d,((e,t)=>{xi.und(a[t])&&(a[t]=e)}));const l=await n.start(a);return g(i),r.paused&&await new Promise((e=>{r.resumeQueue.add(e)})),l})()};let f;if(ei.skipAnimation)return Da(r),ka(n,!1);try{let t;t=xi.arr(e)?(async e=>{for(const t of e)await m(t)})(e):Promise.resolve(e(m,n.stop.bind(n))),await Promise.all([t.then(c),h]),f=ka(n.get(),!0,!1)}catch(e){if(e instanceof Ba)f=e.result;else{if(!(e instanceof za))throw e;f=e.result}}finally{o==r.asyncId&&(r.asyncId=i,r.asyncTo=i?a:void 0,r.promise=i?l:void 0)}return xi.fun(s)&&ri.batchedUpdates((()=>{s(f,n,n.item)})),f})():l}function Da(e,t){Ei(e.timeouts,(e=>e.cancel())),e.pauseQueue.clear(),e.resumeQueue.clear(),e.asyncId=e.asyncTo=e.promise=void 0,t&&(e.cancelId=t)}var Ba=class extends Error{constructor(){super("An async animation has been interrupted. You see this error because you forgot to use `await` or `.catch(...)` on its returned promise.")}},za=class extends Error{constructor(){super("SkipAnimationSignal")}},Ma=e=>e instanceof _a,Aa=1,_a=class extends ws{constructor(){super(...arguments),this.id=Aa++,this._priority=0}get priority(){return this._priority}set priority(e){this._priority!=e&&(this._priority=e,this._onPriorityChange(e))}get(){const e=qs(this);return e&&e.getValue()}to(...e){return ei.to(this,e)}interpolate(...e){return Hs(`${Os}The "interpolate" function is deprecated in v9 (use "to" instead)`),ei.to(this,e)}toJSON(){return this.get()}observerAdded(e){1==e&&this._attach()}observerRemoved(e){0==e&&this._detach()}_attach(){}_detach(){}_onChange(e,t=!1){xs(this,{type:"change",parent:this,value:e,idle:t})}_onPriorityChange(e){this.idle||Hi.sort(this),xs(this,{type:"priority",parent:this,priority:e})}},Oa=Symbol.for("SpringPhase"),Ra=e=>(1&e[Oa])>0,Ha=e=>(2&e[Oa])>0,ja=e=>(4&e[Oa])>0,La=(e,t)=>t?e[Oa]|=3:e[Oa]&=-3,Pa=(e,t)=>t?e[Oa]|=4:e[Oa]&=-5,Wa=class extends _a{constructor(e,t){if(super(),this.animation=new Fa,this.defaultProps={},this._state={paused:!1,delayed:!1,pauseQueue:new Set,resumeQueue:new Set,timeouts:new Set},this._pendingCalls=new Set,this._lastCallId=0,this._lastToId=0,this._memoizedDuration=0,!xi.und(e)||!xi.und(t)){const r=xi.obj(e)?{...e}:{...t,from:e};xi.und(r.default)&&(r.default=!0),this.start(r)}}get idle(){return!(Ha(this)||this._state.asyncTo)||ja(this)}get goal(){return vs(this.animation.to)}get velocity(){const e=qs(this);return e instanceof Xs?e.lastVelocity||0:e.getPayload().map((e=>e.lastVelocity||0))}get hasAnimated(){return Ra(this)}get isAnimating(){return Ha(this)}get isPaused(){return ja(this)}get isDelayed(){return this._state.delayed}advance(e){let t=!0,r=!1;const n=this.animation;let{toValues:o}=n;const{config:i}=n,s=Zs(n.to);!s&&bs(n.to)&&(o=Ci(vs(n.to))),n.values.forEach(((a,l)=>{if(a.done)return;const d=a.constructor==Ks?1:s?s[l].lastPosition:o[l];let c=n.immediate,u=d;if(!c){if(u=a.lastPosition,i.tension<=0)return void(a.done=!0);let t=a.elapsedTime+=e;const r=n.fromValues[l],o=null!=a.v0?a.v0:a.v0=xi.arr(i.velocity)?i.velocity[l]:i.velocity;let s;const h=i.precision||(r==d?.005:Math.min(1,.001*Math.abs(d-r)));if(xi.und(i.duration))if(i.decay){const e=!0===i.decay?.998:i.decay,n=Math.exp(-(1-e)*t);u=r+o/(1-e)*(1-n),c=Math.abs(a.lastPosition-u)<=h,s=o*n}else{s=null==a.lastVelocity?o:a.lastVelocity;const t=i.restVelocity||h/10,n=i.clamp?0:i.bounce,l=!xi.und(n),g=r==d?a.v0>0:r<d;let m,f=!1;const p=1,b=Math.ceil(e/p);for(let e=0;e<b&&(m=Math.abs(s)>t,m||(c=Math.abs(d-u)<=h,!c));++e){l&&(f=u==d||u>d==g,f&&(s=-s*n,u=d));s+=(1e-6*-i.tension*(u-d)+.001*-i.friction*s)/i.mass*p,u+=s*p}}else{let n=1;i.duration>0&&(this._memoizedDuration!==i.duration&&(this._memoizedDuration=i.duration,a.durationProgress>0&&(a.elapsedTime=i.duration*a.durationProgress,t=a.elapsedTime+=e)),n=(i.progress||0)+t/this._memoizedDuration,n=n>1?1:n<0?0:n,a.durationProgress=n),u=r+i.easing(n)*(d-r),s=(u-a.lastPosition)/e,c=1==n}a.lastVelocity=s,Number.isNaN(u)&&(console.warn("Got NaN while animating:",this),c=!0)}s&&!s[l].done&&(c=!1),c?a.done=!0:t=!1,a.setValue(u,i.round)&&(r=!0)}));const a=qs(this),l=a.getValue();if(t){const e=vs(n.to);l===e&&!r||i.decay?r&&i.decay&&this._onChange(l):(a.setValue(e),this._onChange(e)),this._stop()}else r&&this._onChange(l)}set(e){return ri.batchedUpdates((()=>{this._stop(),this._focus(e),this._set(e)})),this}pause(){this._update({pause:!0})}resume(){this._update({pause:!1})}finish(){if(Ha(this)){const{to:e,config:t}=this.animation;ri.batchedUpdates((()=>{this._onStart(),t.decay||this._set(e,!1),this._stop()}))}return this}update(e){return(this.queue||(this.queue=[])).push(e),this}start(e,t){let r;return xi.und(e)?(r=this.queue||[],this.queue=[]):r=[xi.obj(e)?e:{...t,to:e}],Promise.all(r.map((e=>this._update(e)))).then((e=>Ea(this,e)))}stop(e){const{to:t}=this.animation;return this._focus(this.get()),Da(this._state,e&&this._lastCallId),ri.batchedUpdates((()=>this._stop(t,e))),this}reset(){this._update({reset:!0})}eventObserved(e){"change"==e.type?this._start():"priority"==e.type&&(this.priority=e.priority+1)}_prepareNode(e){const t=this.key||"";let{to:r,from:n}=e;r=xi.obj(r)?r[t]:r,(null==r||va(r))&&(r=void 0),n=xi.obj(n)?n[t]:n,null==n&&(n=void 0);const o={to:r,from:n};return Ra(this)||(e.reverse&&([r,n]=[n,r]),n=vs(n),xi.und(n)?qs(this)||this._set(r):this._set(n)),o}_update({...e},t){const{key:r,defaultProps:n}=this;e.default&&Object.assign(n,ga(e,((e,t)=>/^on/.test(t)?ca(e,r):e))),Za(this,e,"onProps"),Qa(this,"onProps",e,this);const o=this._prepareNode(e);if(Object.isFrozen(this))throw Error("Cannot animate a `SpringValue` object that is frozen. Did you forget to pass your component to `animated(...)` before animating its props?");const i=this._state;return Ca(++this._lastCallId,{key:r,props:e,defaultProps:n,state:i,actions:{pause:()=>{ja(this)||(Pa(this,!0),Ii(i.pauseQueue),Qa(this,"onPause",ka(this,Na(this,this.animation.to)),this))},resume:()=>{ja(this)&&(Pa(this,!1),Ha(this)&&this._resume(),Ii(i.resumeQueue),Qa(this,"onResume",ka(this,Na(this,this.animation.to)),this))},start:this._merge.bind(this,o)}}).then((r=>{if(e.loop&&r.finished&&(!t||!r.noop)){const t=Va(e);if(t)return this._update(t,!0)}return r}))}_merge(e,t,r){if(t.cancel)return this.stop(!0),r(Ia(this));const n=!xi.und(e.to),o=!xi.und(e.from);if(n||o){if(!(t.callId>this._lastToId))return r(Ia(this));this._lastToId=t.callId}const{key:i,defaultProps:s,animation:a}=this,{to:l,from:d}=a;let{to:c=l,from:u=d}=e;!o||n||t.default&&!xi.und(c)||(c=u),t.reverse&&([c,u]=[u,c]);const h=!wi(u,d);h&&(a.from=u),u=vs(u);const g=!wi(c,l);g&&this._focus(c);const m=va(t.to),{config:f}=a,{decay:p,velocity:b}=f;(n||o)&&(f.velocity=0),t.config&&!m&&function(e,t,r){r&&(wa(r={...r},t),t={...r,...t}),wa(e,t),Object.assign(e,t);for(const t in ya)null==e[t]&&(e[t]=ya[t]);let{frequency:n,damping:o}=e;const{mass:i}=e;xi.und(n)||(n<.01&&(n=.01),o<0&&(o=0),e.tension=Math.pow(2*Math.PI/n,2)*i,e.friction=4*Math.PI*o*i/n)}(f,la(t.config,i),t.config!==s.config?la(s.config,i):void 0);let v=qs(this);if(!v||xi.und(c))return r(ka(this,!0));const y=xi.und(t.reset)?o&&!t.default:!xi.und(u)&&da(t.reset,i),x=y?u:this.get(),w=ba(c),$=xi.num(w)||xi.arr(w)||Ls(w),F=!m&&(!$||da(s.immediate||t.immediate,i));if(g){const e=na(c);if(e!==v.constructor){if(!F)throw Error(`Cannot animate between ${v.constructor.name} and ${e.name}, as the "to" prop suggests`);v=this._set(w)}}const C=v.constructor;let E=bs(c),S=!1;if(!E){const e=y||!Ra(this)&&h;(g||e)&&(S=wi(ba(x),w),E=!S),(wi(a.immediate,F)||F)&&wi(f.decay,p)&&wi(f.velocity,b)||(E=!0)}if(S&&Ha(this)&&(a.changed&&!y?E=!0:E||this._stop(l)),!m&&((E||bs(l))&&(a.values=v.getPayload(),a.toValues=bs(c)?null:C==Ks?[1]:Ci(w)),a.immediate!=F&&(a.immediate=F,F||y||this._set(l)),E)){const{onRest:e}=a;$i(Ga,(e=>Za(this,t,e)));const n=ka(this,Na(this,l));Ii(this._pendingCalls,n),this._pendingCalls.add(r),a.changed&&ri.batchedUpdates((()=>{a.changed=!y,e?.(n,this),y?la(s.onRest,n):a.onStart?.(n,this)}))}y&&this._set(x),m?r(Ta(t.to,t,this._state,this)):E?this._start():Ha(this)&&!g?this._pendingCalls.add(r):r(Sa(x))}_focus(e){const t=this.animation;e!==t.to&&(ys(this)&&this._detach(),t.to=e,ys(this)&&this._attach())}_attach(){let e=0;const{to:t}=this.animation;bs(t)&&(Fs(t,this),Ma(t)&&(e=t.priority+1)),this.priority=e}_detach(){const{to:e}=this.animation;bs(e)&&Cs(e,this)}_set(e,t=!0){const r=vs(e);if(!xi.und(r)){const e=qs(this);if(!e||!wi(r,e.getValue())){const n=na(r);e&&e.constructor==n?e.setValue(r):Gs(this,n.create(r)),e&&ri.batchedUpdates((()=>{this._onChange(r,t)}))}}return qs(this)}_onStart(){const e=this.animation;e.changed||(e.changed=!0,Qa(this,"onStart",ka(this,Na(this,e.to)),this))}_onChange(e,t){t||(this._onStart(),la(this.animation.onChange,e,this)),la(this.defaultProps.onChange,e,this),super._onChange(e,t)}_start(){const e=this.animation;qs(this).reset(vs(e.to)),e.immediate||(e.fromValues=e.values.map((e=>e.lastPosition))),Ha(this)||(La(this,!0),ja(this)||this._resume())}_resume(){ei.skipAnimation?this.finish():Hi.start(this)}_stop(e,t){if(Ha(this)){La(this,!1);const r=this.animation;$i(r.values,(e=>{e.done=!0})),r.toValues&&(r.onChange=r.onPause=r.onResume=void 0),xs(this,{type:"idle",parent:this});const n=t?Ia(this.get()):ka(this.get(),Na(this,e??r.to));Ii(this._pendingCalls,n),r.changed&&(r.changed=!1,Qa(this,"onRest",n,this))}}};function Na(e,t){const r=ba(t);return wi(ba(e.get()),r)}function Va(e,t=e.loop,r=e.to){const n=la(t);if(n){const o=!0!==n&&pa(n),i=(o||e).reverse,s=!o||o.reset;return Ya({...e,loop:t,default:!1,pause:void 0,to:!i||va(r)?r:void 0,from:s?e.from:void 0,reset:s,...o})}}function Ya(e){const{to:t,from:r}=e=pa(e),n=new Set;return xi.obj(t)&&qa(t,n),xi.obj(r)&&qa(r,n),e.keys=n.size?Array.from(n):null,e}function Ua(e){const t=Ya(e);return xi.und(t.default)&&(t.default=ga(t)),t}function qa(e,t){Fi(e,((e,r)=>null!=e&&t.add(r)))}var Ga=["onStart","onRest","onChange","onPause","onResume"];function Za(e,t,r){e.animation[r]=t[r]!==ua(t,r)?ca(t[r],e.key):void 0}function Qa(e,t,...r){e.animation[t]?.(...r),e.defaultProps[t]?.(...r)}var Xa=["onStart","onChange","onRest"],Ka=1,Ja=class{constructor(e,t){this.id=Ka++,this.springs={},this.queue=[],this._lastAsyncId=0,this._active=new Set,this._changed=new Set,this._started=!1,this._state={paused:!1,pauseQueue:new Set,resumeQueue:new Set,timeouts:new Set},this._events={onStart:new Map,onChange:new Map,onRest:new Map},this._onFrame=this._onFrame.bind(this),t&&(this._flush=t),e&&this.start({default:!0,...e})}get idle(){return!this._state.asyncTo&&Object.values(this.springs).every((e=>e.idle&&!e.isDelayed&&!e.isPaused))}get item(){return this._item}set item(e){this._item=e}get(){const e={};return this.each(((t,r)=>e[r]=t.get())),e}set(e){for(const t in e){const r=e[t];xi.und(r)||this.springs[t].set(r)}}update(e){return e&&this.queue.push(Ya(e)),this}start(e){let{queue:t}=this;return e?t=Ci(e).map(Ya):this.queue=[],this._flush?this._flush(this,t):(sl(this,t),el(this,t))}stop(e,t){if(e!==!!e&&(t=e),t){const r=this.springs;$i(Ci(t),(t=>r[t].stop(!!e)))}else Da(this._state,this._lastAsyncId),this.each((t=>t.stop(!!e)));return this}pause(e){if(xi.und(e))this.start({pause:!0});else{const t=this.springs;$i(Ci(e),(e=>t[e].pause()))}return this}resume(e){if(xi.und(e))this.start({pause:!1});else{const t=this.springs;$i(Ci(e),(e=>t[e].resume()))}return this}each(e){Fi(this.springs,e)}_onFrame(){const{onStart:e,onChange:t,onRest:r}=this._events,n=this._active.size>0,o=this._changed.size>0;(n&&!this._started||o&&!this._started)&&(this._started=!0,Ei(e,(([e,t])=>{t.value=this.get(),e(t,this,this._item)})));const i=!n&&this._started,s=o||i&&r.size?this.get():null;o&&t.size&&Ei(t,(([e,t])=>{t.value=s,e(t,this,this._item)})),i&&(this._started=!1,Ei(r,(([e,t])=>{t.value=s,e(t,this,this._item)})))}eventObserved(e){if("change"==e.type)this._changed.add(e.parent),e.idle||this._active.add(e.parent);else{if("idle"!=e.type)return;this._active.delete(e.parent)}ri.onFrame(this._onFrame)}};function el(e,t){return Promise.all(t.map((t=>tl(e,t)))).then((t=>Ea(e,t)))}async function tl(e,t,r){const{keys:n,to:o,from:i,loop:s,onRest:a,onResolve:l}=t,d=xi.obj(t.default)&&t.default;s&&(t.loop=!1),!1===o&&(t.to=null),!1===i&&(t.from=null);const c=xi.arr(o)||xi.fun(o)?o:void 0;c?(t.to=void 0,t.onRest=void 0,d&&(d.onRest=void 0)):$i(Xa,(r=>{const n=t[r];if(xi.fun(n)){const o=e._events[r];t[r]=({finished:e,cancelled:t})=>{const r=o.get(n);r?(e||(r.finished=!1),t&&(r.cancelled=!0)):o.set(n,{value:null,finished:e||!1,cancelled:t||!1})},d&&(d[r]=t[r])}}));const u=e._state;t.pause===!u.paused?(u.paused=t.pause,Ii(t.pause?u.pauseQueue:u.resumeQueue)):u.paused&&(t.pause=!0);const h=(n||Object.keys(e.springs)).map((r=>e.springs[r].start(t))),g=!0===t.cancel||!0===ua(t,"cancel");(c||g&&u.asyncId)&&h.push(Ca(++e._lastAsyncId,{props:t,state:u,actions:{pause:yi,resume:yi,start(t,r){g?(Da(u,e._lastAsyncId),r(Ia(e))):(t.onRest=a,r(Ta(c,t,u,e)))}}})),u.paused&&await new Promise((e=>{u.resumeQueue.add(e)}));const m=Ea(e,await Promise.all(h));if(s&&m.finished&&(!r||!m.noop)){const r=Va(t,s,o);if(r)return sl(e,[r]),tl(e,r,!0)}return l&&ri.batchedUpdates((()=>l(m,e,e.item))),m}function rl(e,t){const r={...e.springs};return t&&$i(Ci(t),(e=>{xi.und(e.keys)&&(e=Ya(e)),xi.obj(e.to)||(e={...e,to:void 0}),il(r,e,(e=>ol(e)))})),nl(e,r),r}function nl(e,t){Fi(t,((t,r)=>{e.springs[r]||(e.springs[r]=t,Fs(t,e))}))}function ol(e,t){const r=new Wa;return r.key=e,t&&Fs(r,t),r}function il(e,t,r){t.keys&&$i(t.keys,(n=>{(e[n]||(e[n]=r(n)))._prepareNode(t)}))}function sl(e,t){$i(t,(t=>{il(e.springs,t,(t=>ol(t,e)))}))}var al,ll,dl=({children:e,...t})=>{const r=f(cl),o=t.pause||!!r.pause,l=t.immediate||!!r.immediate;t=function(e,t){const[r]=a((()=>({inputs:t,result:e()}))),n=i(),o=n.current;let l=o;l?Boolean(t&&l.inputs&&function(e,t){if(e.length!==t.length)return!1;for(let r=0;r<e.length;r++)if(e[r]!==t[r])return!1;return!0}(t,l.inputs))||(l={inputs:t,result:e()}):l=r;return s((()=>{n.current=l,o==r&&(r.inputs=r.result=void 0)}),[l]),l.result}((()=>({pause:o,immediate:l})),[o,l]);const{Provider:d}=cl;return n.createElement(d,{value:t},e)},cl=(al=dl,ll={},Object.assign(al,n.createContext(ll)),al.Provider._context=al,al.Consumer._context=al,al);dl.Provider=cl.Provider,dl.Consumer=cl.Consumer;var ul=()=>{const e=[],t=function(t){js(`${Os}Directly calling start instead of using the api object is deprecated in v9 (use ".start" instead), this will be removed in later 0.X.0 versions`);const n=[];return $i(e,((e,o)=>{if(xi.und(t))n.push(e.start());else{const i=r(t,e,o);i&&n.push(e.start(i))}})),n};t.current=e,t.add=function(t){e.includes(t)||e.push(t)},t.delete=function(t){const r=e.indexOf(t);~r&&e.splice(r,1)},t.pause=function(){return $i(e,(e=>e.pause(...arguments))),this},t.resume=function(){return $i(e,(e=>e.resume(...arguments))),this},t.set=function(t){$i(e,((e,r)=>{const n=xi.fun(t)?t(r,e):t;n&&e.set(n)}))},t.start=function(t){const r=[];return $i(e,((e,n)=>{if(xi.und(t))r.push(e.start());else{const o=this._getProps(t,e,n);o&&r.push(e.start(o))}})),r},t.stop=function(){return $i(e,(e=>e.stop(...arguments))),this},t.update=function(t){return $i(e,((e,r)=>e.update(this._getProps(t,e,r)))),this};const r=function(e,t,r){return xi.fun(e)?e(r,t):e};return t._getProps=r,t};function hl(e,t){const r=xi.fun(e),[[n],o]=function(e,t,r){const n=xi.fun(t)&&t;n&&!r&&(r=[]);const o=p((()=>n||3==arguments.length?ul():void 0),[]),s=i(0),a=Ws(),l=p((()=>({ctrls:[],queue:[],flush(e,t){const r=rl(e,t),n=s.current>0&&!l.queue.length&&!Object.keys(r).some((t=>!e.springs[t]));return n?el(e,t):new Promise((n=>{nl(e,r),l.queue.push((()=>{n(el(e,t))})),a()}))}})),[]),d=i([...l.ctrls]),c=[],u=Ys(e)||0;function h(e,r){for(let o=e;o<r;o++){const e=d.current[o]||(d.current[o]=new Ja(null,l.flush)),r=n?n(o,e):t[o];r&&(c[o]=Ua(r))}}p((()=>{$i(d.current.slice(e,u),(e=>{!function(e,t){e.ref?.delete(e),t?.delete(e)}(e,o),e.stop(!0)})),d.current.length=e,h(u,e)}),[e]),p((()=>{h(0,Math.min(u,e))}),r);const g=d.current.map(((e,t)=>rl(e,c[t]))),m=f(dl),b=Ys(m),v=m!==b&&function(e){for(const t in e)return!0;return!1}(m);Ps((()=>{s.current++,l.ctrls=d.current;const{queue:e}=l;e.length&&(l.queue=[],$i(e,(e=>e()))),$i(d.current,((e,t)=>{o?.add(e),v&&e.start({default:m});const r=c[t];r&&(function(e,t){t&&e.ref!==t&&(e.ref?.delete(e),t.add(e),e.ref=t)}(e,r.ref),e.ref?e.queue.push(r):e.start(r))}))})),Ns((()=>()=>{$i(l.ctrls,(e=>e.stop(!0)))}));const y=g.map((e=>({...e})));return o?[y,o]:y}(1,r?e:[e],r?t||[]:t);return r||2==arguments.length?[n,o]:n}var gl=class extends _a{constructor(e,t){super(),this.source=e,this.idle=!0,this._active=new Set,this.calc=as(...t);const r=this._get(),n=na(r);Gs(this,n.create(r))}advance(e){const t=this._get();wi(t,this.get())||(qs(this).setValue(t),this._onChange(t,this.idle)),!this.idle&&fl(this._active)&&pl(this)}_get(){const e=xi.arr(this.source)?this.source.map(vs):Ci(vs(this.source));return this.calc(...e)}_start(){this.idle&&!fl(this._active)&&(this.idle=!1,$i(Zs(this),(e=>{e.done=!1})),ei.skipAnimation?(ri.batchedUpdates((()=>this.advance())),pl(this)):Hi.start(this))}_attach(){let e=1;$i(Ci(this.source),(t=>{bs(t)&&Fs(t,this),Ma(t)&&(t.idle||this._active.add(t),e=Math.max(e,t.priority+1))})),this.priority=e,this._start()}_detach(){$i(Ci(this.source),(e=>{bs(e)&&Cs(e,this)})),this._active.clear(),pl(this)}eventObserved(e){"change"==e.type?e.idle?this.advance():(this._active.add(e.parent),this._start()):"idle"==e.type?this._active.delete(e.parent):"priority"==e.type&&(this.priority=Ci(this.source).reduce(((e,t)=>Math.max(e,(Ma(t)?t.priority:0)+1)),0))}};function ml(e){return!1!==e.idle}function fl(e){return!e.size||Array.from(e).every(ml)}function pl(e){e.idle||(e.idle=!0,$i(Zs(e),(e=>{e.done=!0})),xs(e,{type:"idle",parent:e}))}ei.assign({createStringInterpolator:_s,to:(e,t)=>new gl(e,t)});var bl=/^--/;function vl(e,t){return null==t||"boolean"==typeof t||""===t?"":"number"!=typeof t||0===t||bl.test(e)||xl.hasOwnProperty(e)&&xl[e]?(""+t).trim():t+"px"}var yl={};var xl={animationIterationCount:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},wl=["Webkit","Ms","Moz","O"];xl=Object.keys(xl).reduce(((e,t)=>(wl.forEach((r=>e[((e,t)=>e+t.charAt(0).toUpperCase()+t.substring(1))(r,t)]=e[t])),e)),xl);var $l=/^(matrix|translate|scale|rotate|skew)/,Fl=/^(translate)/,Cl=/^(rotate|skew)/,El=(e,t)=>xi.num(e)&&0!==e?e+t:e,Sl=(e,t)=>xi.arr(e)?e.every((e=>Sl(e,t))):xi.num(e)?e===t:parseFloat(e)===t,kl=class extends ea{constructor({x:e,y:t,z:r,...n}){const o=[],i=[];(e||t||r)&&(o.push([e||0,t||0,r||0]),i.push((e=>[`translate3d(${e.map((e=>El(e,"px"))).join(",")})`,Sl(e,0)]))),Fi(n,((e,t)=>{if("transform"===t)o.push([e||""]),i.push((e=>[e,""===e]));else if($l.test(t)){if(delete n[t],xi.und(e))return;const r=Fl.test(t)?"px":Cl.test(t)?"deg":"";o.push(Ci(e)),i.push("rotate3d"===t?([e,t,n,o])=>[`rotate3d(${e},${t},${n},${El(o,r)})`,Sl(o,0)]:e=>[`${t}(${e.map((e=>El(e,r))).join(",")})`,Sl(e,t.startsWith("scale")?1:0)])}})),o.length&&(n.transform=new Il(o,i)),super(n)}},Il=class extends ws{constructor(e,t){super(),this.inputs=e,this.transforms=t,this._value=null}get(){return this._value||(this._value=this._get())}_get(){let e="",t=!0;return $i(this.inputs,((r,n)=>{const o=vs(r[0]),[i,s]=this.transforms[n](xi.arr(o)?o:r.map(vs));e+=" "+i,t=t&&s})),t?"none":e}observerAdded(e){1==e&&$i(this.inputs,(e=>$i(e,(e=>bs(e)&&Fs(e,this)))))}observerRemoved(e){0==e&&$i(this.inputs,(e=>$i(e,(e=>bs(e)&&Cs(e,this)))))}eventObserved(e){"change"==e.type&&(this._value=null),xs(this,e)}};ei.assign({batchedUpdates:I,createStringInterpolator:_s,colors:{transparent:0,aliceblue:4042850303,antiquewhite:4209760255,aqua:16777215,aquamarine:2147472639,azure:4043309055,beige:4126530815,bisque:4293182719,black:255,blanchedalmond:4293643775,blue:65535,blueviolet:2318131967,brown:2771004159,burlywood:3736635391,burntsienna:3934150143,cadetblue:1604231423,chartreuse:2147418367,chocolate:3530104575,coral:4286533887,cornflowerblue:1687547391,cornsilk:4294499583,crimson:3692313855,cyan:16777215,darkblue:35839,darkcyan:9145343,darkgoldenrod:3095792639,darkgray:2846468607,darkgreen:6553855,darkgrey:2846468607,darkkhaki:3182914559,darkmagenta:2332068863,darkolivegreen:1433087999,darkorange:4287365375,darkorchid:2570243327,darkred:2332033279,darksalmon:3918953215,darkseagreen:2411499519,darkslateblue:1211993087,darkslategray:793726975,darkslategrey:793726975,darkturquoise:13554175,darkviolet:2483082239,deeppink:4279538687,deepskyblue:12582911,dimgray:1768516095,dimgrey:1768516095,dodgerblue:512819199,firebrick:2988581631,floralwhite:4294635775,forestgreen:579543807,fuchsia:4278255615,gainsboro:3705462015,ghostwhite:4177068031,gold:4292280575,goldenrod:3668254975,gray:2155905279,green:8388863,greenyellow:2919182335,grey:2155905279,honeydew:4043305215,hotpink:4285117695,indianred:3445382399,indigo:1258324735,ivory:4294963455,khaki:4041641215,lavender:3873897215,lavenderblush:4293981695,lawngreen:2096890111,lemonchiffon:4294626815,lightblue:2916673279,lightcoral:4034953471,lightcyan:3774873599,lightgoldenrodyellow:4210742015,lightgray:3553874943,lightgreen:2431553791,lightgrey:3553874943,lightpink:4290167295,lightsalmon:4288707327,lightseagreen:548580095,lightskyblue:2278488831,lightslategray:2005441023,lightslategrey:2005441023,lightsteelblue:2965692159,lightyellow:4294959359,lime:16711935,limegreen:852308735,linen:4210091775,magenta:4278255615,maroon:2147483903,mediumaquamarine:1724754687,mediumblue:52735,mediumorchid:3126187007,mediumpurple:2473647103,mediumseagreen:1018393087,mediumslateblue:2070474495,mediumspringgreen:16423679,mediumturquoise:1221709055,mediumvioletred:3340076543,midnightblue:421097727,mintcream:4127193855,mistyrose:4293190143,moccasin:4293178879,navajowhite:4292783615,navy:33023,oldlace:4260751103,olive:2155872511,olivedrab:1804477439,orange:4289003775,orangered:4282712319,orchid:3664828159,palegoldenrod:4008225535,palegreen:2566625535,paleturquoise:2951671551,palevioletred:3681588223,papayawhip:4293907967,peachpuff:4292524543,peru:3448061951,pink:4290825215,plum:3718307327,powderblue:2967529215,purple:2147516671,rebeccapurple:1714657791,red:4278190335,rosybrown:3163525119,royalblue:1097458175,saddlebrown:2336560127,salmon:4202722047,sandybrown:4104413439,seagreen:780883967,seashell:4294307583,sienna:2689740287,silver:3233857791,skyblue:2278484991,slateblue:1784335871,slategray:1887473919,slategrey:1887473919,snow:4294638335,springgreen:16744447,steelblue:1182971135,tan:3535047935,teal:8421631,thistle:3636451583,tomato:4284696575,turquoise:1088475391,violet:4001558271,wheat:4125012991,white:4294967295,whitesmoke:4126537215,yellow:4294902015,yellowgreen:2597139199}});var Tl=((e,{applyAnimatedValues:t=()=>!1,createAnimatedStyle:r=e=>new ea(e),getComponentProps:n=e=>e}={})=>{const o={applyAnimatedValues:t,createAnimatedStyle:r,getComponentProps:n},i=e=>{const t=aa(e)||"Anonymous";return(e=xi.str(e)?i[e]||(i[e]=oa(e,o)):e[sa]||(e[sa]=oa(e,o))).displayName=`Animated(${t})`,e};return Fi(e,((t,r)=>{xi.arr(e)&&(r=aa(t)),i[r]=i(t)})),{animated:i}})(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"],{applyAnimatedValues:function(e,t){if(!e.nodeType||!e.setAttribute)return!1;const r="filter"===e.nodeName||e.parentNode&&"filter"===e.parentNode.nodeName,{style:n,children:o,scrollTop:i,scrollLeft:s,viewBox:a,...l}=t,d=Object.values(l),c=Object.keys(l).map((t=>r||e.hasAttribute(t)?t:yl[t]||(yl[t]=t.replace(/([A-Z])/g,(e=>"-"+e.toLowerCase())))));void 0!==o&&(e.textContent=o);for(const t in n)if(n.hasOwnProperty(t)){const r=vl(t,n[t]);bl.test(t)?e.style.setProperty(t,r):e.style[t]=r}c.forEach(((t,r)=>{e.setAttribute(t,d[r])})),void 0!==i&&(e.scrollTop=i),void 0!==s&&(e.scrollLeft=s),void 0!==a&&e.setAttribute("viewBox",a)},createAnimatedStyle:e=>new kl(e),getComponentProps:({scrollTop:e,scrollLeft:t,...r})=>r}),Dl=Tl.animated;const Bl=x.div`
    display: inline-block;
    position: relative;
    width: ${({$size:e})=>e?`${e}px`:"1em"};
    height: ${({$size:e})=>e?`${e}px`:"1em"};
    color: ${e=>e.$color||"currentColor"};
`,zl=$`
	0% {
	  transform: rotate(0deg);
	}
	100% {
	  transform: rotate(360deg);
	}
`,Ml=x.div`
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
    animation: ${zl} 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
`,Al=x(Ml)`
    animation-delay: -0.45s;
`,_l=x(Ml)`
    animation-delay: -0.3s;
`,Ol=x(Ml)`
    animation-delay: -0.15s;
`,Rl=({color:r,className:n,size:o})=>e(Bl,{className:n,$size:o,$color:r,"data-testid":"component-loading-spinner",children:[t(Ml,{id:"inner1"}),t(Al,{id:"inner2"}),t(_l,{id:"inner3"}),t(Ol,{id:"inner4"})]}),Hl={collections:{default:{Button:{"button-radius":yn.sm,"button-default-colour-bg":Gr["bg-primary"],"button-default-colour-bg-hover":Gr["bg-primary-hover"],"button-default-colour-text":Gr["text-inverse"],"button-secondary-colour-border":Gr["border-primary"],"button-secondary-colour-text":Gr["text-primary"],"button-light-colour-text":Gr["text-primary"],"button-link-colour-text":Gr["text-primary"]}},pa:{Button:{"button-radius":yn.full,"button-default-colour-bg":Gr["bg-primary"],"button-default-colour-bg-hover":Gr["bg-primary-hover"],"button-default-colour-text":Gr["text-inverse"],"button-secondary-colour-border":Gr["border-primary"],"button-secondary-colour-text":Gr["text-primary"],"button-light-colour-text":Gr["text-primary"],"button-link-colour-text":Gr["text-primary"]}}},defaultValue:"default"},jl=(e,t)=>r=>{var n,o;const i=r.theme,s=Rr(Hl,null==i?void 0:i.componentScheme);return Ll((null===(o=null===(n=null==i?void 0:i.componentOverrides)||void 0===n?void 0:n[e])||void 0===o?void 0:o[t])||s[e][t],r)},Ll=(e,t)=>{switch(typeof e){case"function":return e(t);case"number":return e+"px";case"string":return e}},Pl=jl("Button","button-radius"),Wl=jl("Button","button-default-colour-bg"),Nl=jl("Button","button-default-colour-bg-hover"),Vl=jl("Button","button-default-colour-text"),Yl=jl("Button","button-secondary-colour-border"),Ul=jl("Button","button-secondary-colour-text"),ql=jl("Button","button-light-colour-text"),Gl=jl("Button","button-link-colour-text"),Zl=x.button`
    padding: ${kn["spacing-8"]} ${kn["spacing-16"]};
    min-width: 4rem;
    border: ${Sn["width-010"]} ${Sn.solid} transparent;
    transition: all ${En["duration-250"]} ${En["ease-default"]};
    border-radius: ${Pl};
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;

    // -----------------------------------------------------------------------------
    // BUTTON STYLE + TEXT COLOR
    // -----------------------------------------------------------------------------
    ${e=>{switch(e.$buttonStyle){case"secondary":return w`
                    background-color: ${Fn.Primitive.white};
                    border-color: ${e.$buttonIsDanger?Fn["border-error-strong"]:Yl};

                    color: ${e.$buttonIsDanger?Fn["text-error"]:Ul};

                    &:hover,
                    &:active {
                        background-color: ${Fn["bg-hover-neutral"]};
                    }
                `;case"light":return w`
                    background-color: ${Fn.bg};
                    border-color: ${Fn.border};

                    color: ${e.$buttonIsDanger?Fn["text-error"]:ql};

                    &:hover,
                    &:active {
                        background-color: ${Fn["bg-hover-neutral"]};
                    }
                `;case"link":return w`
                    background-color: transparent;

                    color: ${e.$buttonIsDanger?Fn["text-error"]:Gl};
                    &:hover,
                    &:active {
                        background-color: ${Fn["bg-hover-neutral"]};
                    }
                `;case"disabled":return w`
                    background-color: ${Fn["bg-disabled"]};

                    cursor: not-allowed;

                    &:hover {
                        box-shadow: none;
                    }

                    color: ${Fn["text-disabled"]};
                `;default:return w`
                    background-color: ${e.$buttonIsDanger?Fn["bg-error-strong"]:Wl};};

                    ${Dn.MaxWidth.sm} {
                        width: 100%;
                    }

                    color: ${Vl}};

                    &:hover,
                    &:active {
                        background-color: ${e.$buttonIsDanger?Fn["bg-error-strong-hover"]:Nl}
                        };
                    }
                `}}}

    // -----------------------------------------------------------------------------
	// BUTTON SIZE + TEXT SIZE
	// -----------------------------------------------------------------------------
	${e=>{switch(e.$buttonSizeStyle){case"small":return w`
                    height: 2.5rem;
                    ${Cn["body-md-semibold"]}

                    ${Dn.MaxWidth.xxs} {
                        height: auto;
                    }
                `;case"large":return w`
                    height: 4rem;
                    ${Cn["heading-md-semibold"]}

                    ${Dn.MaxWidth.xxs} {
                        height: auto;
                    }
                `;default:return w`
                    height: 3rem;
                    ${Cn["heading-xs-semibold"]}

                    ${Dn.MaxWidth.xxs} {
                        height: auto;
                    }
                `}}}
`,Ql=x(Rl)`
    margin-right: 0.5rem;
`,Xl=(r,n)=>{const{children:o,disabled:i=!1,loading:s=!1,styleType:a="default",danger:l=!1}=r,d=ne(r,["children","disabled","loading","styleType","danger"]),c={$buttonStyle:i?"disabled":a,$buttonSizeStyle:"default",$buttonIsDanger:l};return e(Zl,Object.assign({ref:n,"data-testid":d["data-testid"]||"button",disabled:i},c,d,{children:[s&&t(Ql,{}),t("span",{children:o})]}))};Xl.displayName="Button.Default";const Kl=(r,n)=>{const{children:o,disabled:i=!1,loading:s=!1,styleType:a="default",danger:l=!1}=r,d=ne(r,["children","disabled","loading","styleType","danger"]),c={$buttonStyle:i?"disabled":a,$buttonSizeStyle:"small",$buttonIsDanger:l};return e(Zl,Object.assign({ref:n,"data-testid":d["data-testid"]||"button",disabled:i},c,d,{children:[s&&t(Ql,{}),t("span",{children:o})]}))};Kl.displayName="Button.Small";const Jl=(r,n)=>{const{children:o,disabled:i=!1,loading:s=!1,styleType:a="default",danger:l=!1}=r,d=ne(r,["children","disabled","loading","styleType","danger"]),c={$buttonStyle:i?"disabled":a,$buttonSizeStyle:"large",$buttonIsDanger:l};return e(Zl,Object.assign({ref:n,"data-testid":d["data-testid"]||"button",disabled:i},c,d,{children:[s&&t(Ql,{}),t("span",{children:o})]}))};Jl.displayName="Button.Large";const ed={Default:o.forwardRef(Xl),Small:o.forwardRef(Kl),Large:o.forwardRef(Jl)};var td={exports:{}};td.exports=function(){var e={LTS:"h:mm:ss A",LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D, YYYY",LLL:"MMMM D, YYYY h:mm A",LLLL:"dddd, MMMM D, YYYY h:mm A"},t=/(\[[^[]*\])|([-_:/.,()\s]+)|(A|a|YYYY|YY?|MM?M?M?|Do|DD?|hh?|HH?|mm?|ss?|S{1,3}|z|ZZ?)/g,r=/\d\d/,n=/\d\d?/,o=/\d*[^-_:/,()\s\d]+/,i={},s=function(e){return(e=+e)+(e>68?1900:2e3)},a=function(e){return function(t){this[e]=+t}},l=[/[+-]\d\d:?(\d\d)?|Z/,function(e){(this.zone||(this.zone={})).offset=function(e){if(!e)return 0;if("Z"===e)return 0;var t=e.match(/([+-]|\d\d)/g),r=60*t[1]+(+t[2]||0);return 0===r?0:"+"===t[0]?-r:r}(e)}],d=function(e){var t=i[e];return t&&(t.indexOf?t:t.s.concat(t.f))},c=function(e,t){var r,n=i.meridiem;if(n){for(var o=1;o<=24;o+=1)if(e.indexOf(n(o,0,t))>-1){r=o>12;break}}else r=e===(t?"pm":"PM");return r},u={A:[o,function(e){this.afternoon=c(e,!1)}],a:[o,function(e){this.afternoon=c(e,!0)}],S:[/\d/,function(e){this.milliseconds=100*+e}],SS:[r,function(e){this.milliseconds=10*+e}],SSS:[/\d{3}/,function(e){this.milliseconds=+e}],s:[n,a("seconds")],ss:[n,a("seconds")],m:[n,a("minutes")],mm:[n,a("minutes")],H:[n,a("hours")],h:[n,a("hours")],HH:[n,a("hours")],hh:[n,a("hours")],D:[n,a("day")],DD:[r,a("day")],Do:[o,function(e){var t=i.ordinal,r=e.match(/\d+/);if(this.day=r[0],t)for(var n=1;n<=31;n+=1)t(n).replace(/\[|\]/g,"")===e&&(this.day=n)}],M:[n,a("month")],MM:[r,a("month")],MMM:[o,function(e){var t=d("months"),r=(d("monthsShort")||t.map((function(e){return e.slice(0,3)}))).indexOf(e)+1;if(r<1)throw new Error;this.month=r%12||r}],MMMM:[o,function(e){var t=d("months").indexOf(e)+1;if(t<1)throw new Error;this.month=t%12||t}],Y:[/[+-]?\d+/,a("year")],YY:[r,function(e){this.year=s(e)}],YYYY:[/\d{4}/,a("year")],Z:l,ZZ:l};function h(r){var n,o;n=r,o=i&&i.formats;for(var s=(r=n.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g,(function(t,r,n){var i=n&&n.toUpperCase();return r||o[n]||e[n]||o[i].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g,(function(e,t,r){return t||r.slice(1)}))}))).match(t),a=s.length,l=0;l<a;l+=1){var d=s[l],c=u[d],h=c&&c[0],g=c&&c[1];s[l]=g?{regex:h,parser:g}:d.replace(/^\[|\]$/g,"")}return function(e){for(var t={},r=0,n=0;r<a;r+=1){var o=s[r];if("string"==typeof o)n+=o.length;else{var i=o.regex,l=o.parser,d=e.slice(n),c=i.exec(d)[0];l.call(t,c),e=e.replace(c,"")}}return function(e){var t=e.afternoon;if(void 0!==t){var r=e.hours;t?r<12&&(e.hours+=12):12===r&&(e.hours=0),delete e.afternoon}}(t),t}}return function(e,t,r){r.p.customParseFormat=!0,e&&e.parseTwoDigitYear&&(s=e.parseTwoDigitYear);var n=t.prototype,o=n.parse;n.parse=function(e){var t=e.date,n=e.utc,s=e.args;this.$u=n;var a=s[1];if("string"==typeof a){var l=!0===s[2],d=!0===s[3],c=l||d,u=s[2];d&&(u=s[2]),i=this.$locale(),!l&&u&&(i=r.Ls[u]),this.$d=function(e,t,r){try{if(["x","X"].indexOf(t)>-1)return new Date(("X"===t?1e3:1)*e);var n=h(t)(e),o=n.year,i=n.month,s=n.day,a=n.hours,l=n.minutes,d=n.seconds,c=n.milliseconds,u=n.zone,g=new Date,m=s||(o||i?1:g.getDate()),f=o||g.getFullYear(),p=0;o&&!i||(p=i>0?i-1:g.getMonth());var b=a||0,v=l||0,y=d||0,x=c||0;return u?new Date(Date.UTC(f,p,m,b,v,y,x+60*u.offset*1e3)):r?new Date(Date.UTC(f,p,m,b,v,y,x)):new Date(f,p,m,b,v,y,x)}catch(e){return new Date("")}}(t,a,n),this.init(),u&&!0!==u&&(this.$L=this.locale(u).$L),c&&t!=this.format(a)&&(this.$d=new Date("")),i={}}else if(a instanceof Array)for(var g=a.length,m=1;m<=g;m+=1){s[1]=a[m-1];var f=r.apply(this,s);if(f.isValid()){this.$d=f.$d,this.$L=f.$L,this.init();break}m===g&&(this.$d=new Date(""))}else o.call(this,e)}}}();var rd=se(td.exports),nd={exports:{}};nd.exports=function(e,t,r){t.prototype.isBetween=function(e,t,n,o){var i=r(e),s=r(t),a="("===(o=o||"()")[0],l=")"===o[1];return(a?this.isAfter(i,n):!this.isBefore(i,n))&&(l?this.isBefore(s,n):!this.isAfter(s,n))||(a?this.isBefore(i,n):!this.isAfter(i,n))&&(l?this.isAfter(s,n):!this.isBefore(s,n))}};var od=se(nd.exports),id={exports:{}};id.exports=function(e,t){t.prototype.isSameOrAfter=function(e,t){return this.isSame(e,t)||this.isAfter(e,t)}};var sd=se(id.exports),ad={exports:{}};ad.exports=function(e,t){t.prototype.isSameOrBefore=function(e,t){return this.isSame(e,t)||this.isBefore(e,t)}};var ld,dd,cd,ud=se(ad.exports),hd={exports:{}},gd=se(hd.exports=(ld={year:0,month:1,day:2,hour:3,minute:4,second:5},dd={},function(e,t,r){var n,o=function(e,t,r){void 0===r&&(r={});var n=new Date(e),o=function(e,t){void 0===t&&(t={});var r=t.timeZoneName||"short",n=e+"|"+r,o=dd[n];return o||(o=new Intl.DateTimeFormat("en-US",{hour12:!1,timeZone:e,year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit",timeZoneName:r}),dd[n]=o),o}(t,r);return o.formatToParts(n)},i=function(e,t){for(var n=o(e,t),i=[],s=0;s<n.length;s+=1){var a=n[s],l=a.type,d=a.value,c=ld[l];c>=0&&(i[c]=parseInt(d,10))}var u=i[3],h=24===u?0:u,g=i[0]+"-"+i[1]+"-"+i[2]+" "+h+":"+i[4]+":"+i[5]+":000",m=+e;return(r.utc(g).valueOf()-(m-=m%1e3))/6e4},s=t.prototype;s.tz=function(e,t){void 0===e&&(e=n);var o=this.utcOffset(),i=this.toDate(),s=i.toLocaleString("en-US",{timeZone:e}),a=Math.round((i-new Date(s))/1e3/60),l=r(s,{locale:this.$L}).$set("millisecond",this.$ms).utcOffset(15*-Math.round(i.getTimezoneOffset()/15)-a,!0);if(t){var d=l.utcOffset();l=l.add(o-d,"minute")}return l.$x.$timezone=e,l},s.offsetName=function(e){var t=this.$x.$timezone||r.tz.guess(),n=o(this.valueOf(),t,{timeZoneName:e}).find((function(e){return"timezonename"===e.type.toLowerCase()}));return n&&n.value};var a=s.startOf;s.startOf=function(e,t){if(!this.$x||!this.$x.$timezone)return a.call(this,e,t);var n=r(this.format("YYYY-MM-DD HH:mm:ss:SSS"),{locale:this.$L});return a.call(n,e,t).tz(this.$x.$timezone,!0)},r.tz=function(e,t,o){var s=o&&t,a=o||t||n,l=i(+r(),a);if("string"!=typeof e)return r(e).tz(a);var d=function(e,t,r){var n=e-60*t*1e3,o=i(n,r);if(t===o)return[n,t];var s=i(n-=60*(o-t)*1e3,r);return o===s?[n,o]:[e-60*Math.min(o,s)*1e3,Math.max(o,s)]}(r.utc(e,s).valueOf(),l,a),c=d[0],u=d[1],h=r(c).utcOffset(u);return h.$x.$timezone=a,h},r.tz.guess=function(){return Intl.DateTimeFormat().resolvedOptions().timeZone},r.tz.setDefault=function(e){n=e}}));Kn.extend(od),Kn.extend(ud),Kn.extend(sd),Kn.extend(rd),Kn.extend(gd),function(e){e.generateDays=e=>{const t=e.startOf("month"),r=Kn(t).startOf("week");return md(r).map((e=>fd(e)))},e.generateDaysForCurrentWeek=e=>{const t=e.startOf("week");return fd(t)},e.generateMonths=e=>{const t=[];for(let r=0;r<12;r++){const n=e.month(r);t.push(Kn(n))}return t},e.generateDecadeOfYears=e=>{const t=e.year(),r=10*Math.floor(t/10),n=e.year(r),o=[n.subtract(1,"year"),n];for(let e=1;e<11;e++)o.push(n.add(e,"year"));return o},e.getStartEndDecade=e=>{const t=10*Math.floor(+e.format("YYYY")/10);return{beginDecade:t,endDecade:+Kn(`${t+9}-01-01`).format("YYYY")}},e.convertTo12HourFormat=e=>{const t=Kn(e,"HH:mm");return t.isValid()?t.format("h:mm a"):""},e.isWithinRange=(e,t,r,n="day")=>!t&&!r||(t&&r?e.isBetween(t,r,n,"[]"):t?e.isSameOrAfter(t,n):e.isSameOrBefore(r,n)),e.isPreviousMonthWithinRange=(t,r)=>e.isWithinRange(t.subtract(1,"month"),r,void 0,"month"),e.isPreviousYearWithinRange=(t,r)=>e.isWithinRange(t.subtract(1,"year"),r,void 0,"year"),e.isPreviousDecadeWithinRange=(t,r)=>{const{beginDecade:n}=e.getStartEndDecade(t);return e.isWithinRange(t.year(n).subtract(1,"year"),r,void 0,"year")},e.isNextMonthWithinRange=(t,r)=>e.isWithinRange(t.add(1,"month"),void 0,r,"month"),e.isNextYearWithinRange=(t,r)=>e.isWithinRange(t.add(1,"year"),void 0,r,"year"),e.isNextDecadeWithinRange=(t,r)=>{const{endDecade:n}=e.getStartEndDecade(t);return e.isWithinRange(t.year(n).add(1,"year"),void 0,r,"year")},e.getWeekStartEnd=e=>({start:e.startOf("week").format("YYYY-MM-DD"),end:e.endOf("week").format("YYYY-MM-DD")}),e.getFixedRangeStartEnd=(e,t)=>({start:e.format("YYYY-MM-DD"),end:e.add(t-1,"day").format("YYYY-MM-DD")}),e.isDisabledDay=(t,r,n,o)=>{const i=e.isWithinRange(t,n?Kn(n):void 0,o?Kn(o):void 0),s=r&&r.includes(t.format("YYYY-MM-DD"));return!i||!!s}}(cd||(cd={}));const md=e=>{const t=[e];for(let r=1;r<6;r++){const n=e.add(r,"week");t.push(n)}return t},fd=e=>{const t=[];for(let r=0;r<7;r++){const n=e.add(r,"day");t.push(n)}return t},pd=[1,3,5,7,8,10,12],bd=[4,6,9,11];var vd,yd,xd;function wd(e){const t=i(null);return h((()=>{t.current=e}),[e]),m(((...e)=>{var r;return null===(r=t.current)||void 0===r?void 0:r.call(t,...e)}),[])}!function(e){e.clampDay=(t,r,n)=>{const o=parseInt(t),i=parseInt(r),s=parseInt(n);return 0==o?"1":pd.includes(i)?Math.min(o,31).toString():bd.includes(i)?Math.min(o,30).toString():2===i?e.isLeapYear(s)?Math.min(o,29).toString():Math.min(o,28).toString():t},e.clampMonth=e=>{const t=parseInt(e);return 0==t?"1":t>12?"12":e},e.isLeapYear=e=>e%4==0&&e%100!=0||e%400==0,e.getTimeDiffInMinutes=(e,t,r="HH:mm")=>{const n=Kn(e,r);return Kn(t,r).diff(n,"minute")},e.toDayjs=e=>e?Kn(e):Kn(),e.addMinutesToTime=(e,t,r="HH:mm")=>Kn(e,r).add(t,"minutes").format(r),e.isSame=(e,t,r="day")=>Kn(e).isSame(Kn(t),r)}(vd||(vd={})),function(e){e.isDateDisabled=(e,t)=>{const{disabledDates:r,minDate:n,maxDate:o}=t;return!!(e&&r&&r.length&&r.includes(e))||(!(!n||!Kn(e).isBefore(n,"day"))||!(!o||!Kn(e).isAfter(o,"day")))},e.sanitizeInput=e=>{if(e){if(Kn(e).isValid())return e}return""}}(yd||(yd={})),function(e){e.generate=()=>Math.random().toString(36).substring(2,9)}(xd||(xd={}));const $d=e=>{const t=(e=>{const t=i(e),r=i();return s((()=>{r.current=t.current,t.current=e}),[e]),r.current})(e);return t!==e},Fd=e=>{const{textSize:t}=e||{};return w`
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
            color: ${Fn.hyperlink};
            text-decoration: none;

            svg {
                color: ${Fn["icon-primary"]};
                height: 1lh;
                width: 1em;
                margin-left: 0.4rem;
                vertical-align: middle;
            }

            :hover,
            :active,
            :visited,
            :focus {
                color: ${Fn["hyperlink-hover"]};

                svg {
                    color: ${Fn["icon-hover"]};
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
    `},Cd=e=>w`
    display: -webkit-box;
    -webkit-line-clamp: ${e};
    -webkit-box-orient: vertical;
    overflow: hidden;
`,Ed=(e,t,r=!1)=>w`
        ${Cn[`${e}-${t}`]}
        ${r?"margin-bottom: 1.05em;":"margin-bottom: 0;"}
    `,Sd=e=>{if(e)return w`
            ${Cd(e)}
        `},kd=(e,t)=>w`
    ${Ed(e,t.weight||"regular",t.paragraph)}
    ${((e=!1,t=!1,r)=>t?w`
            display: block;
            ${Sd(r)}
        `:e?w`
            display: inline;
        `:w`
            display: block;
            ${Sd(r)}
        `)(t.inline,t.paragraph,t.maxLines)}
    color: ${Fn.text};
`;var Id;!function(r){const n=(e,t,r)=>{const n=x(e).attrs((({inline:e})=>({as:e?"span":void 0})))`
            ${e=>kd(t,e)}
        `;return n.displayName=`Typography.${r}`,n};r.HeadingXXL=n("h1","heading-xxl","HeadingXXL"),r.HeadingXL=n("h2","heading-xl","HeadingXL"),r.HeadingLG=n("h3","heading-lg","HeadingLG"),r.HeadingMD=n("h4","heading-md","HeadingMD"),r.HeadingSM=n("h5","heading-sm","HeadingSM"),r.HeadingXS=n("h6","heading-xs","HeadingXS");const o=(e,t)=>{const r=x.p.attrs((({inline:e})=>({as:e?"span":void 0})))`
            ${t=>kd(e,t)}
        `;return r.displayName=`Typography.${t}`,r};r.BodyBL=o("body-baseline","BodyBL"),r.BodyMD=o("body-md","BodyMD"),r.BodySM=o("body-sm","BodySM"),r.BodyXS=o("body-xs","BodyXS");const i=(r,n)=>{const o=x.a`
            ${e=>w`
                ${Ed(r,e.weight||"regular")}
                color: ${Fn.hyperlink};
                text-decoration: none;

                :hover,
                :active,
                :focus {
                    color: ${Fn["text-hover"]};
                }
            `}
        `,i=r=>{var{external:n=!1,children:i}=r,s=ne(r,["external","children"]);return e(o,Object.assign({},s,{children:[i,n&&t(Td,{})]}))};return i.displayName=`Typography.${n}`,i};r.LinkBL=i("body-baseline","LinkBL"),r.LinkMD=i("body-md","LinkMD"),r.LinkSM=i("body-sm","LinkSM"),r.LinkXS=i("body-xs","LinkXS")}(Id||(Id={}));const Td=x(A)`
    height: 1lh;
    width: 1em;
    margin-left: 0.4em;
    vertical-align: middle;
`,Dd=x.div`
    padding: ${kn["spacing-8"]} ${kn["spacing-16"]};
    display: flex;

    ${e=>{let t,r;switch(e.$type){case"error":t=Fn["bg-error"](e),r=Fn["border-error"](e);break;case"success":t=Fn["bg-success"](e),r=Fn["border-success"](e);break;case"warning":default:t=Fn["bg-warning"](e),r=Fn["border-warning"](e);break;case"info":t=Fn["bg-info"](e),r=Fn["border-info"](e);break;case"description":t=Fn["bg-strong"](e),r=Fn["border-strong"](e)}return w`
            background: ${t};
            border-left: ${Sn["width-020"]} ${Sn.solid}
                ${r};
        `}}

    color: ${Fn.text};
    ${e=>"small"===e.$sizeType?Fd({textSize:"body-sm"}):Fd({textSize:"body-md"})}
`,Bd=x.div`
    display: flex;
    align-items: center;
    height: 1lh;
    margin-right: ${kn["spacing-8"]};

    ${e=>{let t;const r="small"===e.$sizeType?"1.25rem":"1.5rem";switch(e.$type){case"error":t=Fn["icon-error"](e);break;case"success":t=Fn["icon-success"](e);break;case"warning":default:t=Fn["icon-warning"](e);break;case"info":t=Fn["icon-info"](e);break;case"description":t=Fn["icon-subtle"](e)}return w`
            svg {
                color: ${t};
                width: ${r};
                height: ${r};
            }
        `}}
`,zd=x(Id.LinkSM)`
    ${e=>"small"===e.$sizeType?w`
                ${Cn["body-sm-semibold"]}
                margin-top: ${kn["spacing-4"]};
            `:w`
                ${Cn["body-md-semibold"]}
                margin-top: ${kn["spacing-8"]};
            `}
    display: flex;
    align-items: center;
    align-self: flex-start;

    svg {
        height: 1rem;
        width: 1rem;
        margin-left: ${kn["spacing-4"]};
    }
`,Md=x.div`
    display: flex;
    flex-direction: column;
    flex: 1;
    overflow-wrap: anywhere;
`,Ad=x.div`
    display: flex;
    flex-direction: column;
    flex: 1;
    ${e=>{if(e.$showMore&&e.$hasActionLink)return w`
                margin-bottom: ${kn["spacing-8"]};
            `}}
    ${e=>{const t="linear-gradient(to bottom, black 50%, transparent 100%)";if(!e.$showMore&&e.$maxCollapsedHeight)return`\n                max-height: ${e.$maxCollapsedHeight}px;\n\t\t\t\toverflow: hidden;\n                -webkit-mask-image: ${t};\n                mask-image: ${t};\n\t\t\t`}}
`,_d=x.button`
    ${e=>"small"===e.$sizeType?w`
                ${Cn["body-sm-semibold"]}
            `:w`
                ${Cn["body-md-semibold"]}
            `}

    display: flex;
    align-items: center;
    align-self: flex-start;
    gap: ${kn["spacing-4"]};
    margin-top: ${kn["spacing-8"]};

    cursor: pointer;
    user-select: none;
    border: none;
    background: transparent;

    color: ${Fn["text-primary"]};
`,Od=x(y)`
    transform: rotate(${e=>e.$expanded?180:0}deg);
    transition: transform ${En["duration-350"]} ${En["ease-standard"]};
`,Rd=x.div`
    height: 1.625rem;
    width: 1.625rem;
    margin-right: 0.5rem;
    flex-shrink: 0;

    svg {
        height: 100%;
        width: 100%;
    }

    ${e=>e.$disabled?e.$active?w`
                    color: ${Fn["icon-selected-disabled"]};
                `:w`
                    color: ${Fn["icon-disabled-subtle"]};
                `:e.$active?w`
                color: ${Fn["icon-selected"]};
            `:w`
            color: ${Fn["icon-subtle"]};
        `};
`,Hd=w`
    margin-bottom: ${e=>e.$bottomMargin||0}rem;

    // Counter matters
    counter-reset: list;

    li {
        font-weight: ${Cn.Spec["weight-regular"]};
        ${e=>e.$size&&Cn[`${e.$size}-regular`]}
        color: ${Fn.text};
    }

    // nested lists styling
    ol,
    ul {
        margin-top: 0.5rem;
        margin-bottom: 0.5rem;
    }
`,jd=x.ol`
    ${Hd}

    margin-left: 3rem;

    ${Dn.MaxWidth.lg} {
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
`,Ld=x.ul`
    ${Hd}

    margin-left: 2.5rem;
    list-style-type: ${e=>e.$bulletType||"disc"};
`,Pd=e=>{var{size:r,bulletType:n,bottomMargin:o,children:i}=e,s=ne(e,["size","bulletType","bottomMargin","children"]);return t(Ld,Object.assign({$size:r,$bulletType:n,$bottomMargin:o},s,{children:i}))};Pd.displayName="TextList.Ul";const Wd=e=>{var{size:r,counterType:n,counterSeparator:o,bottomMargin:i,children:s}=e,a=ne(e,["size","counterType","counterSeparator","bottomMargin","children"]);return t(jd,Object.assign({$size:r,$counterType:n,$counterSeparator:o,$bottomMargin:i},a,{children:s}))};Wd.displayName="TextList.Ol";const Nd=Pd,Vd=x.div`
    position: relative;
    display: inline-flex;
    min-width: 10.375rem;
    border-radius: 4px;
    border-width: 1px;
    border-style: solid;
    overflow: hidden;
    flex-direction: column;
    height: fit-content;
    background: ${Fn.bg};

    ${e=>{if(!e.$indicator)return w`
                justify-content: center;
            `}}

    // Container min width to fit content
    ${e=>{if(e.$useContentWidth)return w`
                min-width: unset;
            `}}

    // apply container border and header background color
    ${e=>"no-border"===e.$styleType?e.$error?e.$disabled?w`
                            border-color: ${Fn["border-error"]};
                        `:w`
                            border-color: ${Fn["border-error"]};

                            &:has(${Zd}:hover) {
                                background: ${Fn["bg-hover-subtle"]};
                            }
                        `:e.$disabled?e.$selected?w`
                            border: none;
                            background: ${Fn["bg-selected-disabled"]};
                        `:w`
                            border: none;
                        `:e.$selected?w`
                        border: none;
                        background: ${Fn["bg-selected"]};

                        &:has(${Zd}:hover) {
                            background: ${Fn["bg-selected-hover"]};

                            & ${Ud} {
                                color: ${Fn["text-selected-hover"]};
                            }

                            & ${oc} {
                                color: ${Fn["icon-selected-hover"]};
                            }
                        }
                    `:w`
                    border: none;

                    &:has(${Zd}:hover) {
                        background: ${Fn["bg-hover-subtle"]};
                    }
                `:e.$error?e.$disabled?w`
                            border-color: ${Fn["border-error"]};
                        `:w`
                            border-color: ${Fn["border-error"]};

                            &:has(${Zd}:hover) {
                                background: ${Fn["bg-hover-subtle"]};
                            }
                        `:e.$disabled?e.$selected?w`
                            border-color: ${Fn["border-selected-disabled"]};
                            background: ${Fn["bg-selected-disabled"]};
                        `:w`
                            border-color: ${Fn["border-disabled"]};
                            background: ${Fn["bg-disabled"]};
                        `:e.$selected?w`
                        border-color: ${Fn["border-selected"]};
                        background: ${Fn["bg-selected"]};

                        &:has(${Zd}:hover) {
                            background: ${Fn["bg-selected-hover"]};

                            & ${Ud} {
                                color: ${Fn["text-selected-hover"]};
                            }

                            & ${oc} {
                                color: ${Fn["icon-selected-hover"]};
                            }
                        }
                    `:w`
                    border-color: ${Fn.border};

                    &:has(${Zd}:hover) {
                        background: ${Fn["bg-hover-subtle"]};
                    }
                `}
`,Yd=x.input`
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
`,Ud=x.div`
    display: flex;
    flex-direction: column;
    overflow-wrap: anywhere;
    width: 100%;
    overflow: hidden;

    // apply header container text color
    ${e=>e.$disabled?e.$selected?w`
                    color: ${Fn["text-selected-disabled"]};
                `:w`
                    color: ${Fn["text-disabled"]};
                `:e.$selected?w`
                color: ${Fn["text-selected"]};
            `:w`
            color: ${Fn.text};
        `}
`,qd=x.label`
    ${Cn["body-baseline-regular"]}
    overflow: hidden;
    display: -webkit-box;
    text-overflow: ellipsis;
    -webkit-box-orient: vertical;
    overflow-wrap: break-word;
    -webkit-line-clamp: ${e=>{var t,r;return null!==(r=null===(t=e.$maxLines)||void 0===t?void 0:t.desktop)&&void 0!==r?r:"none"}};
    ${Dn.MaxWidth.lg} {
        -webkit-line-clamp: ${e=>{var t,r;return null!==(r=null===(t=e.$maxLines)||void 0===t?void 0:t.tablet)&&void 0!==r?r:"none"}};
    }
    ${Dn.MaxWidth.sm} {
        -webkit-line-clamp: ${e=>{var t,r;return null!==(r=null===(t=e.$maxLines)||void 0===t?void 0:t.mobile)&&void 0!==r?r:"none"}};
    }
`,Gd=x.div`
    ${Cn["body-md-regular"]}
    margin-top: 0.5rem;

    z-index: 1; // forces sublabel to render above the input
    pointer-events: none; // to allow click events to be passed to the input

    strong,
    b {
        ${Cn["body-md-semibold"]}
    }
`,Zd=x.div`
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
`,Qd=x.div`
    display: flex;
    height: 100%;
    width: 100%;
    position: relative;
    padding: ${e=>e.$addPadding?"0.6875rem 0rem 0.6875rem 1rem":"0.6875rem 1rem"};
`,Xd=x.button`
    color: ${e=>e.$disabled?Fn["text-disabled"]:Fn["text-error"]};
    white-space: nowrap;
    ${Cn["body-md-semibold"]}
    height: fit-content;
    padding: 0.6875rem 1rem 0.6875rem 0.5rem;
    border: none;
    background: none;

    cursor: ${e=>e.$disabled?"not-allowed":"pointer"};
`,Kd=x.button`
    color: ${e=>e.disabled?Fn["text-disabled"]:Fn["text-primary"]};
    ${Cn["body-baseline-semibold"]}
    display: flex;
    align-items: center;
    justify-content: flex-end;
    border: none;
    background-color: ${Fn.bg};
    cursor: ${e=>e.disabled?"not-allowed":"pointer"};
    padding: 0 1rem 0.6875rem 1rem;
    padding-top: ${e=>e.$paddingTopRequired?"0.6875rem":"0rem"};
    width: 100%;

    svg {
        width: 1em;
        height: 1em;
        margin-left: 0.5rem;
    }
`,Jd=x.div`
    width: 100%;
    color: ${e=>e.$disabled?Fn["text-disabled"]:Fn["text-error"]};
    border: none;
    background: ${Fn.bg};
    cursor: ${e=>e.$disabled?"not-allowed":"pointer"};
    padding: 0.6875rem 1rem 0.5rem 1rem;
`,ec=x((r=>{var{type:n,className:o,children:i,actionLink:l,actionLinkIcon:d,sizeType:c="default",showIcon:u=!1,customIcon:h,maxCollapsedHeight:g}=r,m=ne(r,["type","className","children","actionLink","actionLinkIcon","sizeType","showIcon","customIcon","maxCollapsedHeight"]);const[f,p]=a(!1),[b,v]=a(!1),{height:y,ref:x}=Ko();s((()=>{w()}),[g,y]);const w=()=>{p(!g),v($())},$=()=>!(!y||!g)&&y>g;return e(Dd,{className:o,$type:n,$sizeType:c,"data-testid":m["data-testid"],children:[u&&t(Bd,{$sizeType:c,$type:n,children:(()=>{if(n&&h)return h;switch(n){case"success":return t(M,{});case"warning":return t(B,{});case"error":return t(D,{});case"info":case"description":return t(z,{});default:return null}})()}),e(Md,{children:[e(Ad,{$maxCollapsedHeight:$()?g:void 0,$showMore:f,$hasActionLink:!!l,children:[t("div",{ref:x,children:i}),l?e(zd,Object.assign({"data-testid":"action-link",$type:n,$sizeType:c},l,{children:[l.children,d||t(T,{})]})):null]}),b&&e(_d,{$sizeType:c,$type:n,type:"button",onClick:()=>p(!f),children:["Show ",f?"less":"more",t(Od,{$expanded:f})]})]})]})}))`
    width: 100%;
    user-select: none;
`,tc=x.div`
    padding: 0 1rem;
    padding-top: 0.6875rem;
    padding-bottom: ${e=>e.$isFinalItem?"0.6875rem":"0.5rem"};
    background-color: ${Fn.bg};
    ${Fd({textSize:"body-md"})}

    ${e=>e.$disabled?w`
                color: ${Fn["text-disabled"]};
            `:e.$selected?w`
                color: ${Fn["text-selected"]};
            `:w`
                color: ${Fn.text};
            `}
`,rc=x(Id.BodyMD)`
    color: ${e=>e.$disabled?Fn["text-disabled"]:Fn["text-error"]};
`,nc=x(Nd)`
    color: ${e=>e.$disabled?Fn["text-disabled"]:Fn["text-error"]};
`,oc=x((({type:e,active:r=!1,disabled:n,className:o})=>{let i;switch(e){case"checkbox":i=t(r?j:H,{});break;case"radio":i=t(r?O:_,{});break;case"tick":i=t(L,{});break;case"cross":i=t(R,{});break;default:i=null}return t(Rd,{className:o,$active:r,$disabled:n,children:i})}))`
    ${e=>e.$disabled?e.$selected?w`
                    color: ${Fn["icon-selected-disabled"]};
                `:w`
                    color: ${Fn["icon-disabled-subtle"]};
                `:e.$selected?w`
                color: ${Fn["icon-selected"]};
            `:w`
            color: ${Fn["icon-subtle"]};
        `};
`,ic=x.button`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: ${kn["spacing-24"]};
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
                background-color: ${Fn["bg-hover-neutral"]};
            `}
    }
`,sc=o.forwardRef(((e,r)=>{var{children:n,focusHighlight:o=!0,focusOutline:i="none",type:s="button"}=e,a=ne(e,["children","focusHighlight","focusOutline","type"]);return t(ic,Object.assign({ref:r,$outline:i,$highlight:o,type:s},a,{children:n}))})),ac=x(Dl.div)`
    position: absolute;
    top: calc(3rem + ${kn["spacing-8"]});
    left: 0;
    overflow: hidden;
    z-index: 1;

    ${Dn.MaxWidth.xxs} {
        max-width: 100%;
    }
`,lc=x.div`
    position: relative;
    width: 100%;
    padding: ${kn["spacing-8"]} ${kn["spacing-20"]}
        ${kn["spacing-24"]} ${kn["spacing-20"]};
    display: flex;
    flex-direction: column;
    background: ${Fn.bg};
    border: ${Sn["width-010"]} ${Sn.solid} ${Fn.border};
    border-radius: ${In.sm};
`,dc=x.div`
    display: flex;
    align-items: center;
    justify-content: space-between;

    ${Dn.MaxWidth.xxs} {
        flex-direction: column;
        width: 100%;
    }
`,cc=x.div`
    display: flex;
    justify-content: flex-end;
    margin-top: ${kn["spacing-16"]};
    gap: ${kn["spacing-8"]} ${kn["spacing-16"]};

    ${Dn.MaxWidth.xxs} {
        flex-direction: column-reverse; // FIXME: this breaks tab focus
        margin-top: ${kn["spacing-32"]};
    }
`,uc=x.div`
    display: flex;
    align-items: center;
    margin-right: ${kn["spacing-32"]};

    ${Dn.MaxWidth.xxs} {
        margin-right: 0;
        width: 100%;
    }
`,hc=x.div`
    display: flex;
    gap: ${kn["spacing-8"]};

    ${Dn.MaxWidth.lg} {
        flex-direction: column;
    }

    ${Dn.MaxWidth.xxs} {
        flex-direction: row;
        width: 100%;
    }
`,gc=x.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    ${Dn.MaxWidth.xxs} {
        width: 6rem;
    }
`,mc=x(sc)`
    width: 5rem;
    padding: ${kn["spacing-16"]} 0;
    color: ${Fn.icon};

    svg {
        height: 1rem;
        width: 1rem;
    }

    &:hover {
        color: ${Fn["icon-hover"]};
    }
`,fc=x(Id.BodyBL)`
    flex-shrink: 0;
    width: 1.5rem;
    text-align: center;
`,pc=x(Pn)`
    height: calc(3rem - 2px);
    width: 5rem;
    display: flex;
    align-items: center;
    justify-content: center;

    ${Dn.MaxWidth.xxs} {
        width: 100%;
    }
`,bc=x(Nn)`
    text-align: center;
    width: 100%;

    :focus::placeholder {
        color: transparent;
    }
`,vc=x((({type:n="checkbox",indicator:o,checked:l,styleType:d="default",children:c,childrenMaxLines:u,subLabel:h,disabled:g,error:m,name:f,id:b,className:v,compositeSection:y,removable:x,onRemove:w,"data-testid":$,onChange:F,useContentWidth:S})=>{const{collapsible:k=!0,errors:I,children:T,initialExpanded:D}=y||{},[B,z]=a(l),[M,A]=a(!!D),_=p((()=>{const e=Array.isArray(I)&&(null==I?void 0:I.length)>0,t=!Array.isArray(I)&&!!I;return e||t}),[I]),[O]=a(xd.generate()),R=b?`${b}`:`tg-${O}`,H=i(null);s((()=>{z(l)}),[l]),s((()=>{B&&A(null==D||D)}),[B]);const j=()=>{g||A(!M)},L=()=>{g||!w||w()},P=()=>{let e;switch(n){case"yes":e="tick";break;case"no":e="cross";break;case"checkbox":case"radio":e=n}return t(oc,{type:e,active:B,disabled:g,$selected:B,$disabled:g})},W=()=>{if(!h)return null;let e;return e="function"==typeof h?h():h,t(Gd,{"data-id":"toggle-sublabel",children:e})},N=n=>e(r,{children:[t(rc,{weight:"semibold",$disabled:g,children:"Error"}),t(nc,{$disabled:g,children:null==n?void 0:n.map(((e,r)=>t("li",{id:`${R}-error-list-item-${r}`,children:t(rc,{weight:"semibold",$disabled:g,children:e})},r)))})]});return e(Vd,{$selected:B,$disabled:g,className:v,$styleType:d,$error:m,$indicator:o,$useContentWidth:S,id:b,"data-testid":$,children:[e(Zd,{id:`${R}-header-container`,$disabled:g,$error:m,$selected:B,$indicator:o,$styleType:d,children:[e(Qd,{$addPadding:x,children:[t(Yd,{ref:H,name:f,id:`${R}-input`,type:"checkbox"===n?"checkbox":"radio","data-testid":"toggle-input",disabled:g,onChange:e=>{if(!g){if(F)return void F(e);switch(n){case"checkbox":z((e=>!e));break;case"radio":case"yes":case"no":B||z(!0)}}},checked:B}),o&&P(),e(Ud,{$selected:B,$disabled:g,children:[t(qd,{htmlFor:`${R}-input`,"data-testid":`${R}-toggle-label`,$maxLines:u,children:c}),h&&W()]})]}),x&&t(Xd,{type:"button",$disabled:g,onClick:L,id:`${R}-remove-button`,children:"Remove"})]}),T&&e("div",{children:[(!k||M)&&t(tc,{"data-id":"toggle-composite-children",$isFinalItem:!k,$disabled:g,children:T}),k&&!M&&_&&t(Jd,{$disabled:g,onClick:j,id:`${R}-error-alert`,children:t(ec,{type:g?"description":"error",className:v,showIcon:!0,children:Array.isArray(I)?N(I):I})}),k&&e(Kd,{$paddingTopRequired:!M&&!_,disabled:g,onClick:j,"data-testid":M?"collapse-button":"expand-button",children:[M?"Show less":"Show more",t(M?E:C,{"aria-hidden":!0})]})]})]})}))`
    min-width: 5rem;
    flex: 1;
`,yc=x(ed.Small)`
    width: 7rem;

    ${Dn.MaxWidth.sm} {
        flex: 1;
    }

    ${Dn.MaxWidth.xxs} {
        width: 100%;
    }
`;var xc,wc,$c;!function(e){e.HOUR_UP="hour-up",e.HOUR_DOWN="hour-down",e.MINUTE_UP="minute-up",e.MINUTE_DOWN="minute-down"}(xc||(xc={})),function(e){e.HOUR="hour",e.MINUTE="minute"}(wc||(wc={})),function(e){e.AM="am",e.PM="pm"}($c||($c={}));const Fc=({id:r,value:n,show:o,format:l,onChange:d,onCancel:c})=>{var u;const h=Xn.getTimeValues(l,n),[g,f]=a(h.hour),[p,b]=a(h.minute),[v,y]=a(h.period),x=i(null),w=i(null),$=Ko();s((()=>{if(o&&x.current&&x.current.focus(),o){const{hour:e,minute:t,period:r}=Xn.getTimeValues(l,n);f(e),b(t),y(r)}}),[o,n,l]),s((()=>{const e=x.current,t=w.current;return e&&e.addEventListener("keydown",F),t&&t.addEventListener("keydown",F),()=>{e&&e.removeEventListener("keydown",F),t&&t.removeEventListener("keydown",F)}}),[]);const F=e=>{["Digit0","Digit1","Digit2","Digit3","Digit4","Digit5","Digit6","Digit7","Digit8","Digit9","Tab","Backspace","Delete","ArrowLeft","ArrowRight","ArrowUp","ArrowDown"].includes(e.code)||["Backspace","0","1","2","3","4","5","6","7","8","9"].includes(e.key)||e.preventDefault()},S=m((e=>{switch(e.currentTarget.name){case xc.MINUTE_UP:b(Xn.updateMinutes(p,"add"));break;case xc.MINUTE_DOWN:b(Xn.updateMinutes(p,"minus"));break;case xc.HOUR_UP:f(Xn.updateHours(g,"add"));break;case xc.HOUR_DOWN:f(Xn.updateHours(g,"minus"))}}),[g,p]),k=e=>{e.target.select()},I=e=>{const t=e.target.value;switch(e.target.name){case wc.HOUR:t.length<=2&&f(t);break;case wc.MINUTE:t.length<=2&&b(t)}},T=e=>{const t=parseInt(e.target.value);if(!isNaN(t))switch(e.target.name){case wc.HOUR:{const r=t>23||t<0?h.hour:Xn.convertHourTo12HourFormat(e.target.value);f(r);break}case wc.MINUTE:{const r=t>59||t<0?h.minute:e.target.value;b(Zn.padValue(r));break}}},D=e=>{switch(e.target.name){case $c.AM:y(Qn.AM);break;case $c.PM:y(Qn.PM)}},B=e=>r?`${r}-${e}`:e,z=hl({opacity:o?1:0,height:o?(null!==(u=$.height)&&void 0!==u?u:0)+32+2:0});return t(ac,{"data-testid":"animated-dropdown-wrapper",style:z,children:e(lc,{ref:$.ref,"data-testid":B("timepicker-dropdown"),inert:o?void 0:"",children:[e(dc,{children:[e(uc,{children:[e(gc,{children:[t(mc,{"aria-label":"increase hour",name:xc.HOUR_UP,tabIndex:-1,onClick:S,"data-testid":B("hour-increment-button"),children:t(E,{})}),t(pc,{children:t(bc,{"aria-label":"hour",type:"number",name:wc.HOUR,id:"hour",maxLength:2,pattern:"[0-9]{2}",ref:x,value:g,onFocus:k,onChange:I,onBlur:T,min:1,max:12,placeholder:"HH","data-testid":B("hour-input")})}),t(mc,{"aria-label":"decrease hour",name:xc.HOUR_DOWN,tabIndex:-1,onClick:S,"data-testid":B("hour-decrement-button"),children:t(C,{})})]}),t(fc,{children:":"}),e(gc,{children:[t(mc,{"aria-label":"increase minute",name:xc.MINUTE_UP,tabIndex:-1,onClick:S,"data-testid":B("minute-increment-button"),children:t(E,{})}),t(pc,{children:t(bc,{"aria-label":"minute",type:"number",name:wc.MINUTE,id:"minute",maxLength:2,pattern:"[0-9]{2}",ref:w,value:p,onChange:I,onBlur:T,onFocus:k,min:0,max:59,placeholder:"MM","data-testid":B("minute-input")})}),t(mc,{"aria-label":"decrease minute",name:xc.MINUTE_DOWN,tabIndex:-1,onClick:S,"data-testid":B("minute-decrement-button"),children:t(C,{})})]})]}),e(hc,{children:[t(vc,{checked:v===Qn.AM,name:$c.AM,type:"radio",onChange:D,"data-testid":B("am-toggle"),"aria-label":"AM",children:"AM"}),t(vc,{checked:v===Qn.PM,name:$c.PM,type:"radio",onChange:D,"data-testid":B("pm-toggle"),"aria-label":"PM",children:"PM"})]})]}),e(cc,{children:[t(yc,{"aria-label":"close selector",type:"button",styleType:"secondary",onClick:c,"data-testid":B("cancel-button"),children:"Cancel"}),t(yc,{"aria-label":"confirm selection",type:"button",onClick:()=>{let e;e="24hr"===l?Xn.convertTo24HourFormat({hour:g,minute:p,period:v}):`${g}:${p}${v}`,d(e)},disabled:""===g||""===p,"data-testid":B("confirm-button"),children:"Done"})]})]})})},Cc=r=>{var{id:n,disabled:o=!1,error:l,value:d,format:c="24hr",readOnly:u,onChange:h,onFocus:g,onBlur:m}=r,f=ne(r,["id","disabled","error","value","format","readOnly","onChange","onFocus","onBlur"]);const[p,b]=a(!1),[v,y]=a(!1),[x,w]=a(""),[$,F]=a(""),C=i(null);s((()=>{d&&(w(d.start),F(d.end))}),[d]),oe("mousedown",(function(e){o||I(e)}),"document"),oe("keyup",(function(e){if("Tab"===e.code)I(e)}),"document");const E=()=>{k()},S=()=>{p||v||g&&g()},k=()=>{b(!1),y(!1),m&&m()},I=e=>{C.current&&!C.current.contains(e.target)&&(v||p)&&k()};return t(Yn,Object.assign({ref:C,id:n},f,{children:e(Un,{$disabled:o,$error:l,$readOnly:u,children:[e(On,{error:l,currentActive:p?"start":v?"end":"none",children:[t(qn,{onFocus:()=>{o||u||p||(y(!1),b(!0),S())},readOnly:!0,placeholder:"From",value:Xn.formatDisplayValue(x,c),disabled:o,"data-testid":f["data-testid"]?`${f["data-testid"]}-timepicker-selector`:"timepicker-selector"}),t(qn,{onFocus:()=>{o||u||v||(b(!1),y(!0),S())},readOnly:!0,placeholder:"To",value:Xn.formatDisplayValue($,c),disabled:o,"data-testid":f["data-testid"]?`${f["data-testid"]}-timepicker-selector`:"timepicker-selector"})]}),t(Fc,{id:n,show:p,value:x,format:c,onCancel:E,onChange:e=>{b(!1),y(!0),w(e);h&&h({start:e,end:$})}}),t(Fc,{id:n,show:v,value:$,format:c,onCancel:E,onChange:e=>{y(!1),F(e);h&&h({start:x,end:e}),""==x?b(!0):m&&m()}})]})}))};x.label`
    color: ${Fn["text-subtle"]};
    margin-bottom: ${kn["spacing-8"]};
    display: inline-block;

    ${Cn["form-label"]}
    ${Fd()}
    font-weight: ${Cn.Spec["weight-semibold"]};
`;const Ec=x.p`
    ${Cn["body-sm-semibold"]}
    color: ${Fn["text-error"]};
    margin-top: ${kn["spacing-8"]};
    margin-bottom: 0;
    outline: none;
`;x.span`
    ${Cn["form-description"]}
    color: ${Fn["text-subtler"]};
    display: block;
`,x(Nn)`
    width: 100%;
    height: calc(3rem - 2px); // exclude top and bottom borders

    ${e=>"no-border"!==e.$styleType&&w`
            padding-left: ${kn["spacing-16"]};
            padding-right: ${e.$showClear?0:kn["spacing-16"]};
        `}
`;const Sc=x(Vn)`
    height: auto;
    padding: ${kn["spacing-12"]} ${kn["spacing-16"]};

    cursor: pointer;
    color: ${Fn.icon};

    ${e=>"no-border"===e.$styleType&&w`
            margin-right: -${kn["spacing-12"]};
        `}
`,kc=x(R)`
    height: 1.25rem;
    width: 1.25rem;
    vertical-align: middle;
`;x.div`
    display: flex;
    width: 100%;
`,x(Pn)`
    display: flex;
    align-items: center;
    width: 100%;
`;const Ic=e=>"small"===e?2.5:3;x.div`
    position: relative;
    width: 100%;
    ${e=>{const t=Ic(e.$variant);return w`
            min-height: ${t}rem;
            height: ${t}rem; // Need this to persist the height when expanding or collapsing list
        `}}
`;const Tc=w`
    display: flex;
    position: relative;
    align-items: center;
    justify-content: space-between;
    padding: 0 ${kn["spacing-16"]};
    // exclude top and bottom borders
    height: calc(${e=>Ic(e.$variant)}rem - 2px);
    width: 100%;
    border-radius: ${In.sm};
    border: none;
    background: transparent;

    :focus,
    :active {
        outline: none;
    }

    :focus-visible {
        outline: 2px solid ${Fn["border-focus"]};
    }
`,Dc=x.button`
    ${Tc}
    cursor: pointer;
`;x.div`
    ${Tc}
`;const Bc=$`
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
    border: ${Sn["width-010"]} ${Sn.solid} ${Fn.border};
    border-radius: ${In.sm};
    background: ${Fn.bg};
    overflow: hidden;

    :focus-within {
        border-color: ${Fn["border-focus"]};
        box-shadow: 0px 0px 4px 0px
            rgb(from ${Fn["border-focus"]} r g b / 50%) inset; // TODO: confirm shadow
    }

    ${e=>e.expanded?w`
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                z-index: 2;
            `:w`
                animation: ${Bc} 0.5s ease-in-out;
            `}

    ${e=>e.disabled?w`
                background: ${Fn["bg-disabled"]};

                ${Dc} {
                    cursor: not-allowed;
                }

                :focus-within {
                    border-color: ${Fn.border};
                    box-shadow: none;
                }
            `:e.$readOnly?w`
                border: none;
                background: transparent !important;

                ${Dc} {
                    padding: 0;
                }

                :focus-within {
                    border: none;
                    box-shadow: none;
                }
            `:e.error?w`
                border-color: ${Fn["border-error"]};

                :focus-within {
                    border-color: ${Fn["border-error"]};
                    box-shadow: 0px 0px 4px 0px
                        rgb(from ${Fn["border-error"]} r g b / 50%) inset; // TODO: confirm shadow
                }
            `:void 0}
`,x.div`
    transform: rotate(${e=>e.expanded?180:0}deg);
    transition: transform ${En["duration-250"]} ${En["ease-default"]};
    margin-left: ${kn["spacing-16"]};
`,x(C)`
    color: ${Fn.icon};
`,x.div`
    height: 1px;
    background: ${Fn.border};
    margin: 0 ${kn["spacing-8"]};
`,x.div`
    display: flex;
    flex: 1;
    word-break: break-all;
    ${e=>{if(e.$disabled)return w`
                color: ${Fn["text-disabled"]};
            `}}
`;const zc=x.div`
    ${e=>"small"===e.$variant?Cn["body-md-regular"]:Cn["body-baseline-regular"]}
    text-align: left;
    ${e=>{if("middle"!==e.truncateType)return w`
                    ${Cd(1)}
                `}}
    overflow: hidden;
`;x(zc)`
    color: ${Fn["text-subtler"]};
`,x.div`
    display: flex;
    position: relative;
    align-items: center;
    justify-content: space-between;
`;const Mc=x(Sc)`
    position: absolute;
    right: 0;
    padding-left: ${kn["spacing-8"]};
    margin-right: 0;
`;x(Dc)`
    // space for clear icon
    padding-right: calc(1.25rem + ${kn["spacing-16"]});
`;const Ac=x.div`
    font-weight: ${e=>e.$bold?Cn.Spec["weight-semibold"]:Cn.Spec["weight-regular"]};
    color: ${e=>e.$selected?Fn["text-selected"]:Fn.text};
    width: 100%;

    ${e=>"end"===e.$truncateType&&Cd(e.$maxLines||2)}
    overflow-wrap: break-word;
`,_c=x.div`
    color: ${Fn["text-subtlest"]};
    width: 100%;

    ${e=>"end"===e.$truncateType&&Cd(e.$maxLines||2)}
    overflow-wrap: break-word;

    ${e=>"next-line"===e.$labelDisplayType?w`
                    ${Cn["body-md-semibold"]}
                `:w`
                    ${Cn["body-baseline-regular"]}
                `}
`,Oc=x.span`
    font-weight: ${Cn.Spec["weight-semibold"]};
`,Rc=x.div`
    text-align: left;
    width: 100%;
    overflow: hidden;
    overflow-wrap: break-word;

    ${e=>"small"===e.$variant?Cn["body-md-regular"]:Cn["body-baseline-regular"]}

    ${e=>{switch(e.$labelDisplayType){case"next-line":return w`
                    display: flex;
                    flex-direction: column;
                `;case"inline":return w`
                    ${Ac} {
                        display: inline;
                    }

                    ${_c} {
                        display: inline;
                        margin-left: 0.5rem;
                    }
                `}}}
`,Hc=x.div`
    display: inline-block;
    width: ${e=>1===e.$maxLines?50:100}%;
    height: 1lh;
    word-break: break-all;
    overflow: hidden;
`,jc=x.div`
    display: inline-block;
    width: ${e=>1===e.$maxLines?50:100}%;
    height: 1lh;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    direction: rtl;
    text-align: right;
`,Lc=({bold:n,displayType:o="inline",label:i,searchTerm:s,maxLines:a=2,selected:l,sublabel:d,truncationType:c="middle",variant:u="default"})=>{const h=F(),g="small"===u?Cn.Spec["body-size-md"]({theme:h}):Cn.Spec["body-size-baseline"]({theme:h}),f=Cn.Spec["font-family"]({theme:h}),{ref:b,width:v}=Ko(),y=m((e=>{if("inline"!==o||!v)return!1;return Zn.getTextWidth(e,`${g} '${f}'`)>v*a-50}),[v,o,g,f,a]),x=p((()=>y(i)),[y,i]),w=p((()=>d&&y(d)),[y,d]),$=n=>{if(!s)return n;const o=s.toLowerCase().trim(),a=n.toLowerCase().indexOf(o),l=a+s.length;return-1===a?n:e(r,{children:[i.slice(0,a),t(Oc,{$variant:u,children:i.slice(a,l)}),i.slice(l)]})},C=n=>e(r,{children:[t(Hc,{$maxLines:a,"aria-hidden":!0,children:$(n)}),t(jc,{$maxLines:a,"aria-hidden":!0,children:$(n)})]});return e(Rc,{ref:b,$labelDisplayType:x||w?"next-line":o,$variant:u,children:[t(Ac,{"aria-label":i,$bold:n,$maxLines:a,$selected:l,$truncateType:c,children:"middle"===c&&x?C(i):$(i)}),d&&t(_c,{"aria-label":d,$maxLines:a,$truncateType:c,$labelDisplayType:o,children:"middle"===c&&w?C(d):d})]})};var Pc=Pt;var Wc=function(e){var t=this.__data__,r=t.delete(e);return this.size=t.size,r};var Nc=function(e){return this.__data__.get(e)};var Vc=function(e){return this.__data__.has(e)},Yc=Pt,Uc=Wt,qc=lr;var Gc=function(e,t){var r=this.__data__;if(r instanceof Yc){var n=r.__data__;if(!Uc||n.length<199)return n.push([e,t]),this.size=++r.size,this;r=this.__data__=new qc(n)}return r.set(e,t),this.size=r.size,this},Zc=Pt,Qc=function(){this.__data__=new Pc,this.size=0},Xc=Wc,Kc=Nc,Jc=Vc,eu=Gc;function tu(e){var t=this.__data__=new Zc(e);this.size=t.size}tu.prototype.clear=Qc,tu.prototype.delete=Xc,tu.prototype.get=Kc,tu.prototype.has=Jc,tu.prototype.set=eu;var ru=tu;var nu=lr,ou=function(e){return this.__data__.set(e,"__lodash_hash_undefined__"),this},iu=function(e){return this.__data__.has(e)};function su(e){var t=-1,r=null==e?0:e.length;for(this.__data__=new nu;++t<r;)this.add(e[t])}su.prototype.add=su.prototype.push=ou,su.prototype.has=iu;var au=function(e,t){return e.has(t)},lu=su,du=function(e,t){for(var r=-1,n=null==e?0:e.length;++r<n;)if(t(e[r],r,e))return!0;return!1},cu=au;var uu=function(e,t,r,n,o,i){var s=1&r,a=e.length,l=t.length;if(a!=l&&!(s&&l>a))return!1;var d=i.get(e),c=i.get(t);if(d&&c)return d==t&&c==e;var u=-1,h=!0,g=2&r?new lu:void 0;for(i.set(e,t),i.set(t,e);++u<a;){var m=e[u],f=t[u];if(n)var p=s?n(f,m,u,t,e,i):n(m,f,u,e,t,i);if(void 0!==p){if(p)continue;h=!1;break}if(g){if(!du(t,(function(e,t){if(!cu(g,t)&&(m===e||o(m,e,r,n,i)))return g.push(t)}))){h=!1;break}}else if(m!==f&&!o(m,f,r,n,i)){h=!1;break}}return i.delete(e),i.delete(t),h};var hu=function(e){var t=-1,r=Array(e.size);return e.forEach((function(e,n){r[++t]=[n,e]})),r};var gu=ue.Uint8Array,mu=Ft,fu=uu,pu=hu,bu=function(e){var t=-1,r=Array(e.size);return e.forEach((function(e){r[++t]=e})),r},vu=he?he.prototype:void 0,yu=vu?vu.valueOf:void 0;var xu=function(e,t,r,n,o,i,s){switch(r){case"[object DataView]":if(e.byteLength!=t.byteLength||e.byteOffset!=t.byteOffset)return!1;e=e.buffer,t=t.buffer;case"[object ArrayBuffer]":return!(e.byteLength!=t.byteLength||!i(new gu(e),new gu(t)));case"[object Boolean]":case"[object Date]":case"[object Number]":return mu(+e,+t);case"[object Error]":return e.name==t.name&&e.message==t.message;case"[object RegExp]":case"[object String]":return e==t+"";case"[object Map]":var a=pu;case"[object Set]":var l=1&n;if(a||(a=bu),e.size!=t.size&&!l)return!1;var d=s.get(e);if(d)return d==t;n|=2,s.set(e,t);var c=fu(a(e),a(t),n,o,i,s);return s.delete(e),c;case"[object Symbol]":if(yu)return yu.call(e)==yu.call(t)}return!1};var wu=function(e,t){for(var r=-1,n=t.length,o=e.length;++r<n;)e[o+r]=t[r];return e},$u=wu,Fu=ae;var Cu=function(e,t,r){var n=t(e);return Fu(e)?n:$u(n,r(e))};var Eu=function(e,t){for(var r=-1,n=null==e?0:e.length,o=0,i=[];++r<n;){var s=e[r];t(s,r,e)&&(i[o++]=s)}return i},Su=function(){return[]},ku=Object.prototype.propertyIsEnumerable,Iu=Object.getOwnPropertySymbols,Tu=Iu?function(e){return null==e?[]:(e=Object(e),Eu(Iu(e),(function(t){return ku.call(e,t)})))}:Su;var Du=function(e,t){for(var r=-1,n=Array(e);++r<e;)n[r]=t(r);return n},Bu=Fe,zu=Ce;var Mu=function(e){return zu(e)&&"[object Arguments]"==Bu(e)},Au=Ce,_u=Object.prototype,Ou=_u.hasOwnProperty,Ru=_u.propertyIsEnumerable,Hu=Mu(function(){return arguments}())?Mu:function(e){return Au(e)&&Ou.call(e,"callee")&&!Ru.call(e,"callee")},ju={exports:{}};var Lu=function(){return!1};!function(e,t){var r=ue,n=Lu,o=t&&!t.nodeType&&t,i=o&&e&&!e.nodeType&&e,s=i&&i.exports===o?r.Buffer:void 0,a=(s?s.isBuffer:void 0)||n;e.exports=a}(ju,ju.exports);var Pu=ju.exports,Wu=/^(?:0|[1-9]\d*)$/;var Nu=function(e,t){var r=typeof e;return!!(t=null==t?9007199254740991:t)&&("number"==r||"symbol"!=r&&Wu.test(e))&&e>-1&&e%1==0&&e<t};var Vu=function(e){return"number"==typeof e&&e>-1&&e%1==0&&e<=9007199254740991},Yu=Fe,Uu=Vu,qu=Ce,Gu={};Gu["[object Float32Array]"]=Gu["[object Float64Array]"]=Gu["[object Int8Array]"]=Gu["[object Int16Array]"]=Gu["[object Int32Array]"]=Gu["[object Uint8Array]"]=Gu["[object Uint8ClampedArray]"]=Gu["[object Uint16Array]"]=Gu["[object Uint32Array]"]=!0,Gu["[object Arguments]"]=Gu["[object Array]"]=Gu["[object ArrayBuffer]"]=Gu["[object Boolean]"]=Gu["[object DataView]"]=Gu["[object Date]"]=Gu["[object Error]"]=Gu["[object Function]"]=Gu["[object Map]"]=Gu["[object Number]"]=Gu["[object Object]"]=Gu["[object RegExp]"]=Gu["[object Set]"]=Gu["[object String]"]=Gu["[object WeakMap]"]=!1;var Zu=function(e){return qu(e)&&Uu(e.length)&&!!Gu[Yu(e)]};var Qu=function(e){return function(t){return e(t)}},Xu={exports:{}};!function(e,t){var r=le,n=t&&!t.nodeType&&t,o=n&&e&&!e.nodeType&&e,i=o&&o.exports===n&&r.process,s=function(){try{var e=o&&o.require&&o.require("util").types;return e||i&&i.binding&&i.binding("util")}catch(e){}}();e.exports=s}(Xu,Xu.exports);var Ku=Xu.exports,Ju=Zu,eh=Qu,th=Ku&&Ku.isTypedArray,rh=th?eh(th):Ju,nh=Du,oh=Hu,ih=ae,sh=Pu,ah=Nu,lh=rh,dh=Object.prototype.hasOwnProperty;var ch=function(e,t){var r=ih(e),n=!r&&oh(e),o=!r&&!n&&sh(e),i=!r&&!n&&!o&&lh(e),s=r||n||o||i,a=s?nh(e.length,String):[],l=a.length;for(var d in e)!t&&!dh.call(e,d)||s&&("length"==d||o&&("offset"==d||"parent"==d)||i&&("buffer"==d||"byteLength"==d||"byteOffset"==d)||ah(d,l))||a.push(d);return a},uh=Object.prototype;var hh=function(e){var t=e&&e.constructor;return e===("function"==typeof t&&t.prototype||uh)};var gh=function(e,t){return function(r){return e(t(r))}}(Object.keys,Object),mh=hh,fh=gh,ph=Object.prototype.hasOwnProperty;var bh=function(e){if(!mh(e))return fh(e);var t=[];for(var r in Object(e))ph.call(e,r)&&"constructor"!=r&&t.push(r);return t},vh=Re,yh=Vu;var xh=function(e){return null!=e&&yh(e.length)&&!vh(e)},wh=ch,$h=bh,Fh=xh;var Ch=function(e){return Fh(e)?wh(e):$h(e)},Eh=Cu,Sh=Tu,kh=Ch;var Ih=function(e){return Eh(e,kh,Sh)},Th=Object.prototype.hasOwnProperty;var Dh=function(e,t,r,n,o,i){var s=1&r,a=Ih(e),l=a.length;if(l!=Ih(t).length&&!s)return!1;for(var d=l;d--;){var c=a[d];if(!(s?c in t:Th.call(t,c)))return!1}var u=i.get(e),h=i.get(t);if(u&&h)return u==t&&h==e;var g=!0;i.set(e,t),i.set(t,e);for(var m=s;++d<l;){var f=e[c=a[d]],p=t[c];if(n)var b=s?n(p,f,c,t,e,i):n(f,p,c,e,t,i);if(!(void 0===b?f===p||o(f,p,r,n,i):b)){g=!1;break}m||(m="constructor"==c)}if(g&&!m){var v=e.constructor,y=t.constructor;v==y||!("constructor"in e)||!("constructor"in t)||"function"==typeof v&&v instanceof v&&"function"==typeof y&&y instanceof y||(g=!1)}return i.delete(e),i.delete(t),g},Bh=rt(ue,"DataView"),zh=Wt,Mh=rt(ue,"Promise"),Ah=rt(ue,"Set"),_h=rt(ue,"WeakMap"),Oh=Fe,Rh=We,Hh="[object Map]",jh="[object Promise]",Lh="[object Set]",Ph="[object WeakMap]",Wh="[object DataView]",Nh=Rh(Bh),Vh=Rh(zh),Yh=Rh(Mh),Uh=Rh(Ah),qh=Rh(_h),Gh=Oh;(Bh&&Gh(new Bh(new ArrayBuffer(1)))!=Wh||zh&&Gh(new zh)!=Hh||Mh&&Gh(Mh.resolve())!=jh||Ah&&Gh(new Ah)!=Lh||_h&&Gh(new _h)!=Ph)&&(Gh=function(e){var t=Oh(e),r="[object Object]"==t?e.constructor:void 0,n=r?Rh(r):"";if(n)switch(n){case Nh:return Wh;case Vh:return Hh;case Yh:return jh;case Uh:return Lh;case qh:return Ph}return t});var Zh=ru,Qh=uu,Xh=xu,Kh=Dh,Jh=Gh,eg=ae,tg=Pu,rg=rh,ng="[object Arguments]",og="[object Array]",ig="[object Object]",sg=Object.prototype.hasOwnProperty;var ag=function(e,t,r,n,o,i){var s=eg(e),a=eg(t),l=s?og:Jh(e),d=a?og:Jh(t),c=(l=l==ng?ig:l)==ig,u=(d=d==ng?ig:d)==ig,h=l==d;if(h&&tg(e)){if(!tg(t))return!1;s=!0,c=!1}if(h&&!c)return i||(i=new Zh),s||rg(e)?Qh(e,t,r,n,o,i):Xh(e,t,l,r,n,o,i);if(!(1&r)){var g=c&&sg.call(e,"__wrapped__"),m=u&&sg.call(t,"__wrapped__");if(g||m){var f=g?e.value():e,p=m?t.value():t;return i||(i=new Zh),o(f,p,r,n,i)}}return!!h&&(i||(i=new Zh),Kh(e,t,r,n,o,i))},lg=Ce;var dg=function e(t,r,n,o,i){return t===r||(null==t||null==r||!lg(t)&&!lg(r)?t!=t&&r!=r:ag(t,r,n,o,e,i))},cg=ru,ug=dg;var hg=function(e,t,r,n){var o=r.length,i=o,s=!n;if(null==e)return!i;for(e=Object(e);o--;){var a=r[o];if(s&&a[2]?a[1]!==e[a[0]]:!(a[0]in e))return!1}for(;++o<i;){var l=(a=r[o])[0],d=e[l],c=a[1];if(s&&a[2]){if(void 0===d&&!(l in e))return!1}else{var u=new cg;if(n)var h=n(d,c,l,e,t,u);if(!(void 0===h?ug(c,d,3,n,u):h))return!1}}return!0},gg=Me;var mg=function(e){return e==e&&!gg(e)},fg=mg,pg=Ch;var bg=function(e){for(var t=pg(e),r=t.length;r--;){var n=t[r],o=e[n];t[r]=[n,o,fg(o)]}return t};var vg=function(e,t){return function(r){return null!=r&&(r[e]===t&&(void 0!==t||e in Object(r)))}},yg=hg,xg=bg,wg=vg;var $g=function(e,t){return null!=e&&t in Object(e)},Fg=kr,Cg=Hu,Eg=ae,Sg=Nu,kg=Vu,Ig=Tr;var Tg=function(e,t,r){for(var n=-1,o=(t=Fg(t,e)).length,i=!1;++n<o;){var s=Ig(t[n]);if(!(i=null!=e&&r(e,s)))break;e=e[s]}return i||++n!=o?i:!!(o=null==e?0:e.length)&&kg(o)&&Sg(s,o)&&(Eg(e)||Cg(e))},Dg=$g,Bg=Tg;var zg=dg,Mg=Ar,Ag=function(e,t){return null!=e&&Bg(e,t,Dg)},_g=ze,Og=mg,Rg=vg,Hg=Tr;var jg=function(e){return function(t){return null==t?void 0:t[e]}},Lg=zr;var Pg=jg,Wg=function(e){return function(t){return Lg(t,e)}},Ng=ze,Vg=Tr;var Yg=function(e){var t=xg(e);return 1==t.length&&t[0][2]?wg(t[0][0],t[0][1]):function(r){return r===e||yg(r,e,t)}},Ug=function(e,t){return _g(e)&&Og(t)?Rg(Hg(e),t):function(r){var n=Mg(r,e);return void 0===n&&n===t?Ag(r,e):zg(t,n,3)}},qg=function(e){return e},Gg=ae,Zg=function(e){return Ng(e)?Pg(Vg(e)):Wg(e)};var Qg=function(e){return"function"==typeof e?e:null==e?qg:"object"==typeof e?Gg(e)?Ug(e[0],e[1]):Yg(e):Zg(e)},Xg=Qg,Kg=xh,Jg=Ch;var em=function(e){return function(t,r,n){var o=Object(t);if(!Kg(t)){var i=Xg(r);t=Jg(t),r=function(e){return i(o[e],e,o)}}var s=e(t,r,n);return s>-1?o[i?t[s]:s]:void 0}};var tm=/\s/;var rm=function(e){for(var t=e.length;t--&&tm.test(e.charAt(t)););return t},nm=/^\s+/;var om=function(e){return e?e.slice(0,rm(e)+1).replace(nm,""):e},im=Me,sm=ke,am=/^[-+]0x[0-9a-f]+$/i,lm=/^0b[01]+$/i,dm=/^0o[0-7]+$/i,cm=parseInt;var um=function(e){if("number"==typeof e)return e;if(sm(e))return NaN;if(im(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=im(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=om(e);var r=lm.test(e);return r||dm.test(e)?cm(e.slice(2),r?2:8):am.test(e)?NaN:+e},hm=1/0;var gm=function(e){return e?(e=um(e))===hm||e===-1/0?17976931348623157e292*(e<0?-1:1):e==e?e:0:0===e?e:0};var mm=function(e,t,r,n){for(var o=e.length,i=r+(n?1:-1);n?i--:++i<o;)if(t(e[i],i,e))return i;return-1},fm=Qg,pm=function(e){var t=gm(e),r=t%1;return t==t?r?t-r:t:0},bm=Math.max;var vm=se(em((function(e,t,r){var n=null==e?0:e.length;if(!n)return-1;var o=null==r?0:pm(r);return o<0&&(o=bm(n+o,0)),mm(e,fm(t),o)}))),ym=dg;var xm=se((function(e,t){return ym(e,t)}));function wm(e){return()=>e}function $m(e){e()}function Fm(e,t){return r=>e(t(r))}function Cm(e,t){return()=>e(t)}function Em(e,t){return r=>e(t,r)}function Sm(e){return void 0!==e}function km(){}function Im(e,t){return t(e),e}function Tm(e,t){return t(e)}function Dm(...e){return e}function Bm(e,t){return e(1,t)}function zm(e,t){e(0,t)}function Mm(e){e(2)}function Am(e){return e(4)}function _m(e,t){return Bm(e,Em(t,0))}function Om(e,t){const r=e(1,(e=>{r(),t(e)}));return r}function Rm(e){let t,r;return n=>o=>{t=o,r&&clearTimeout(r),r=setTimeout((()=>{n(t)}),e)}}function Hm(e,t){return e===t}function jm(e=Hm){let t;return r=>n=>{e(t,n)||(t=n,r(n))}}function Lm(e){return t=>r=>{e(r)&&t(r)}}function Pm(e){return t=>Fm(t,e)}function Wm(e){return t=>()=>{t(e)}}function Nm(e,...t){const r=function(...e){return t=>e.reduceRight(Tm,t)}(...t);return(t,n)=>{switch(t){case 2:return void Mm(e);case 1:return Bm(e,r(n))}}}function Vm(e,t){return r=>n=>{r(t=e(t,n))}}function Ym(e){return t=>r=>{e>0?e--:t(r)}}function Um(e){let t,r=null;return n=>o=>{r=o,!t&&(t=setTimeout((()=>{t=void 0,n(r)}),e))}}function qm(...e){const t=new Array(e.length);let r=0,n=null;const o=Math.pow(2,e.length)-1;return e.forEach(((e,i)=>{const s=Math.pow(2,i);Bm(e,(e=>{const a=r;r|=s,t[i]=e,a!==o&&r===o&&n&&(n(),n=null)}))})),e=>i=>{const s=()=>{e([i].concat(t))};r===o?s():n=s}}function Gm(e){let t=e;const r=Qm();return(e,n)=>{switch(e){case 0:t=n;break;case 1:n(t);break;case 4:return t}return r(e,n)}}function Zm(e,t){return Im(Gm(t),(t=>_m(e,t)))}function Qm(){const e=[];return(t,r)=>{switch(t){case 0:return void e.slice().forEach((e=>{e(r)}));case 2:return void e.splice(0,e.length);case 1:return e.push(r),()=>{const t=e.indexOf(r);t>-1&&e.splice(t,1)}}}}function Xm(e){return Im(Qm(),(t=>_m(e,t)))}function Km(e,t=[],{singleton:r}={singleton:!0}){return{constructor:e,dependencies:t,id:Jm(),singleton:r}}const Jm=()=>Symbol();function ef(...e){const t=Qm(),r=new Array(e.length);let n=0;const o=Math.pow(2,e.length)-1;return e.forEach(((e,i)=>{const s=Math.pow(2,i);Bm(e,(e=>{r[i]=e,n|=s,n===o&&zm(t,r)}))})),function(e,i){switch(e){case 2:return void Mm(t);case 1:return n===o&&i(r),Bm(t,i)}}}function tf(e,t=Hm){return Nm(e,jm(t))}function rf(...e){return function(t,r){switch(t){case 2:return;case 1:return function(...e){return()=>{e.map($m)}}(...e.map((e=>Bm(e,r))))}}}var nf=(e=>(e[e.DEBUG=0]="DEBUG",e[e.INFO=1]="INFO",e[e.WARN=2]="WARN",e[e.ERROR=3]="ERROR",e))(nf||{});const of={0:"debug",3:"error",1:"log",2:"warn"},sf=Km((()=>{const e=Gm(3);return{log:Gm(((t,r,n=1)=>{var o;n>=(null!=(o=(typeof globalThis>"u"?window:globalThis).VIRTUOSO_LOG_LEVEL)?o:Am(e))&&console[of[n]]("%creact-virtuoso: %c%s %o","color: #0253b3; font-weight: bold","color: initial",t,r)})),logLevel:e}}),[],{singleton:!0});function af(e,t,r){return lf(e,t,r).callbackRef}function lf(e,t,r){const n=o.useRef(null);let i=e=>{};if(typeof ResizeObserver<"u"){const s=o.useMemo((()=>new ResizeObserver((t=>{const n=()=>{const r=t[0].target;null!==r.offsetParent&&e(r)};r?n():requestAnimationFrame(n)}))),[e]);i=e=>{e&&t?(s.observe(e),n.current=e):(n.current&&s.unobserve(n.current),n.current=null)}}return{callbackRef:i,ref:n}}function df(e,t,r,n,i,s,a,l,d){const c=o.useCallback((r=>{const o=function(e,t,r,n){const o=e.length;if(0===o)return null;const i=[];for(let s=0;s<o;s++){const o=e.item(s);if(void 0===o.dataset.index)continue;const a=parseInt(o.dataset.index),l=parseFloat(o.dataset.knownSize),d=t(o,r);if(0===d&&n("Zero-sized element, this should not happen",{child:o},nf.ERROR),d===l)continue;const c=i[i.length-1];0===i.length||c.size!==d||c.endIndex!==a-1?i.push({endIndex:a,size:d,startIndex:a}):i[i.length-1].endIndex++}return i}(r.children,t,l?"offsetWidth":"offsetHeight",i);let d=r.parentElement;for(;!d.dataset.virtuosoScroller;)d=d.parentElement;const c="window"===d.lastElementChild.dataset.viewportType,u=a?l?a.scrollLeft:a.scrollTop:c?l?window.pageXOffset||document.documentElement.scrollLeft:window.pageYOffset||document.documentElement.scrollTop:l?d.scrollLeft:d.scrollTop,h=a?l?a.scrollWidth:a.scrollHeight:c?l?document.documentElement.scrollWidth:document.documentElement.scrollHeight:l?d.scrollWidth:d.scrollHeight,g=a?l?a.offsetWidth:a.offsetHeight:c?l?window.innerWidth:window.innerHeight:l?d.offsetWidth:d.offsetHeight;n({scrollHeight:h,scrollTop:Math.max(u,0),viewportHeight:g}),null==s||s(l?cf("column-gap",getComputedStyle(r).columnGap,i):cf("row-gap",getComputedStyle(r).rowGap,i)),null!==o&&e(o)}),[e,t,i,s,a,n]);return lf(c,r,d)}function cf(e,t,r){return"normal"!==t&&!(null!=t&&t.endsWith("px"))&&r(`${e} was not resolved to pixel value correctly`,t,nf.WARN),"normal"===t?0:parseInt(null!=t?t:"0",10)}function uf(e,t,r){const n=o.useRef(null),i=o.useCallback((r=>{if(null==r||!r.offsetParent)return;const o=r.getBoundingClientRect(),i=o.width;let s,a;if(t){const e=t.getBoundingClientRect(),r=o.top-e.top;a=e.height-Math.max(0,r),s=r+t.scrollTop}else a=window.innerHeight-Math.max(0,o.top),s=o.top+window.pageYOffset;n.current={offsetTop:s,visibleHeight:a,visibleWidth:i},e(n.current)}),[e,t]),{callbackRef:s,ref:a}=lf(i,!0,r),l=o.useCallback((()=>{i(a.current)}),[i,a]);return o.useEffect((()=>{if(t){t.addEventListener("scroll",l);const e=new ResizeObserver((()=>{requestAnimationFrame(l)}));return e.observe(t),()=>{t.removeEventListener("scroll",l),e.unobserve(t)}}return window.addEventListener("scroll",l),window.addEventListener("resize",l),()=>{window.removeEventListener("scroll",l),window.removeEventListener("resize",l)}}),[l,t]),s}const hf=Km((()=>{const e=Qm(),t=Qm(),r=Gm(0),n=Qm(),o=Gm(0),i=Qm(),s=Qm(),a=Gm(0),l=Gm(0),d=Gm(0),c=Gm(0),u=Qm(),h=Qm(),g=Gm(!1),m=Gm(!1),f=Gm(!1);return _m(Nm(e,Pm((({scrollTop:e})=>e))),t),_m(Nm(e,Pm((({scrollHeight:e})=>e))),s),_m(t,o),{deviation:r,fixedFooterHeight:d,fixedHeaderHeight:l,footerHeight:c,headerHeight:a,horizontalDirection:m,scrollBy:h,scrollContainerState:e,scrollHeight:s,scrollingInProgress:g,scrollTo:u,scrollTop:t,skipAnimationFrameInResizeObserver:f,smoothScrollTargetReached:n,statefulScrollTop:o,viewportHeight:i}}),[],{singleton:!0}),gf={lvl:0};function mf(e,t){const r=e.length;if(0===r)return[];let{index:n,value:o}=t(e[0]);const i=[];for(let s=1;s<r;s++){const{index:r,value:a}=t(e[s]);i.push({end:r-1,start:n,value:o}),n=r,o=a}return i.push({end:1/0,start:n,value:o}),i}function ff(e){return e===gf}function pf(e,t){if(!ff(e))return t===e.k?e.v:t<e.k?pf(e.l,t):pf(e.r,t)}function bf(e,t,r="k"){if(ff(e))return[-1/0,void 0];if(Number(e[r])===t)return[e.k,e.v];if(Number(e[r])<t){const n=bf(e.r,t,r);return n[0]===-1/0?[e.k,e.v]:n}return bf(e.l,t,r)}function vf(e,t,r){return ff(e)?Tf(t,r,1):t===e.k?Ef(e,{k:t,v:r}):t<e.k?Df(Ef(e,{l:vf(e.l,t,r)})):Df(Ef(e,{r:vf(e.r,t,r)}))}function yf(){return gf}function xf(e,t,r){if(ff(e))return[];return function(e){return mf(e,(({k:e,v:t})=>({index:e,value:t})))}(Ff(e,bf(e,t)[0],r))}function wf(e,t){if(ff(e))return gf;const{k:r,l:n,r:o}=e;if(t===r){if(ff(n))return o;if(ff(o))return n;{const[t,r]=If(n);return Cf(Ef(e,{k:t,l:Sf(n),v:r}))}}return Cf(Ef(e,t<r?{l:wf(n,t)}:{r:wf(o,t)}))}function $f(e){return ff(e)?[]:[...$f(e.l),{k:e.k,v:e.v},...$f(e.r)]}function Ff(e,t,r){if(ff(e))return[];const{k:n,l:o,r:i,v:s}=e;let a=[];return n>t&&(a=a.concat(Ff(o,t,r))),n>=t&&n<=r&&a.push({k:n,v:s}),n<=r&&(a=a.concat(Ff(i,t,r))),a}function Cf(e){const{l:t,lvl:r,r:n}=e;if(n.lvl>=r-1&&t.lvl>=r-1)return e;if(r>n.lvl+1){if(kf(t))return Bf(Ef(e,{lvl:r-1}));if(!ff(t)&&!ff(t.r))return Ef(t.r,{l:Ef(t,{r:t.r.l}),lvl:r,r:Ef(e,{l:t.r.r,lvl:r-1})});throw new Error("Unexpected empty nodes")}if(kf(e))return zf(Ef(e,{lvl:r-1}));if(ff(n)||ff(n.l))throw new Error("Unexpected empty nodes");{const t=n.l,o=kf(t)?n.lvl-1:n.lvl;return Ef(t,{l:Ef(e,{lvl:r-1,r:t.l}),lvl:t.lvl+1,r:zf(Ef(n,{l:t.r,lvl:o}))})}}function Ef(e,t){return Tf(void 0!==t.k?t.k:e.k,void 0!==t.v?t.v:e.v,void 0!==t.lvl?t.lvl:e.lvl,void 0!==t.l?t.l:e.l,void 0!==t.r?t.r:e.r)}function Sf(e){return ff(e.r)?e.l:Cf(Ef(e,{r:Sf(e.r)}))}function kf(e){return ff(e)||e.lvl>e.r.lvl}function If(e){return ff(e.r)?[e.k,e.v]:If(e.r)}function Tf(e,t,r,n=gf,o=gf){return{k:e,l:n,lvl:r,r:o,v:t}}function Df(e){return zf(Bf(e))}function Bf(e){const{l:t}=e;return ff(t)||t.lvl!==e.lvl?e:Ef(t,{r:Ef(e,{l:t.r})})}function zf(e){const{lvl:t,r:r}=e;return ff(r)||ff(r.r)||r.lvl!==t||r.r.lvl!==t?e:Ef(r,{l:Ef(e,{r:r.l}),lvl:t+1})}function Mf(e,t){return!(!e||e.startIndex!==t.startIndex||e.endIndex!==t.endIndex)}function Af(e,t){return!(!e||e[0]!==t[0]||e[1]!==t[1])}const _f=Km((()=>({recalcInProgress:Gm(!1)})),[],{singleton:!0});function Of(e,t,r){return e[Rf(e,t,r)]}function Rf(e,t,r,n=0){let o=e.length-1;for(;n<=o;){const i=Math.floor((n+o)/2),s=r(e[i],t);if(0===s)return i;if(-1===s){if(o-n<2)return i-1;o=i-1}else{if(o===n)return i;n=i+1}}throw new Error(`Failed binary finding record in array - ${e.join(",")}, searched for ${t}`)}function Hf(e,t){return Math.round(e.getBoundingClientRect()[t])}function jf(e){return!ff(e.groupOffsetTree)}function Lf({index:e},t){return t===e?0:t<e?-1:1}function Pf({offset:e},t){return t===e?0:t<e?-1:1}function Wf(e,t,r){if(0===t.length)return 0;const{index:n,offset:o,size:i}=Of(t,e,Lf),s=e-n,a=i*s+(s-1)*r+o;return a>0?a+r:a}function Nf(e,t){if(!jf(t))return e;let r=0;for(;t.groupIndices[r]<=e+r;)r++;return e+r}function Vf(e,t,r){if(function(e){return typeof e.groupIndex<"u"}(e))return t.groupIndices[e.groupIndex]+1;{let n=Nf("LAST"===e.index?r:e.index,t);return n=Math.max(0,n,Math.min(r,n)),n}}function Yf(e,t,r,n=0){return n>0&&(t=Math.max(t,Of(e,n,Lf).offset)),mf(function(e,t,r,n){const o=Rf(e,t,n),i=Rf(e,r,n,o);return e.slice(o,i+1)}(e,t,r,Pf),Zf)}function Uf(e,[t,r,n,o]){t.length>0&&n("received item sizes",t,nf.DEBUG);const i=e.sizeTree;let s=i,a=0;if(r.length>0&&ff(i)&&2===t.length){const e=t[0].size,n=t[1].size;s=r.reduce(((t,r)=>vf(vf(t,r,e),r+1,n)),s)}else[s,a]=function(e,t){let r=ff(e)?0:1/0;for(const n of t){const{endIndex:t,size:o,startIndex:i}=n;if(r=Math.min(r,i),ff(e)){e=vf(e,0,o);continue}const s=xf(e,i-1,t+1);if(s.some(Qf(n)))continue;let a=!1,l=!1;for(const{end:r,start:n,value:i}of s)a?(t>=n||o===i)&&(e=wf(e,n)):(l=i!==o,a=!0),r>t&&t>=n&&i!==o&&(e=vf(e,t+1,i));l&&(e=vf(e,i,o))}return[e,r]}(s,t);if(s===i)return e;const{lastIndex:l,lastOffset:d,lastSize:c,offsetTree:u}=Gf(e.offsetTree,a,s,o);return{groupIndices:r,groupOffsetTree:r.reduce(((e,t)=>vf(e,t,Wf(t,u,o))),yf()),lastIndex:l,lastOffset:d,lastSize:c,offsetTree:u,sizeTree:s}}function qf(e,t){let r=0,n=0;for(;r<e;)r+=t[n+1]-t[n]-1,n++;return n-(r===e?0:1)}function Gf(e,t,r,n){let o=e,i=0,s=0,a=0,l=0;if(0!==t){l=Rf(o,t-1,Lf),a=o[l].offset;const e=bf(r,t-1);i=e[0],s=e[1],o.length&&o[l].size===bf(r,t)[1]&&(l-=1),o=o.slice(0,l+1)}else o=[];for(const{start:e,value:l}of xf(r,t,1/0)){const t=e-i,r=t*s+a+t*n;o.push({index:e,offset:r,size:l}),i=e,a=r,s=l}return{lastIndex:i,lastOffset:a,lastSize:s,offsetTree:o}}function Zf(e){return{index:e.index,value:e}}function Qf(e){const{endIndex:t,size:r,startIndex:n}=e;return e=>e.start===n&&(e.end===t||e.end===1/0)&&e.value===r}const Xf={offsetHeight:"height",offsetWidth:"width"},Kf=Km((([{log:e},{recalcInProgress:t}])=>{const r=Qm(),n=Qm(),o=Zm(n,0),i=Qm(),s=Qm(),a=Gm(0),l=Gm([]),d=Gm(void 0),c=Gm(void 0),u=Gm(((e,t)=>Hf(e,Xf[t]))),h=Gm(void 0),g=Gm(0),m={groupIndices:[],groupOffsetTree:yf(),lastIndex:0,lastOffset:0,lastSize:0,offsetTree:[],sizeTree:yf()},f=Zm(Nm(r,qm(l,e,g),Vm(Uf,m),jm()),m),p=Zm(Nm(l,jm(),Vm(((e,t)=>({current:t,prev:e.current})),{current:[],prev:[]}),Pm((({prev:e})=>e))),[]);_m(Nm(l,Lm((e=>e.length>0)),qm(f,g),Pm((([e,t,r])=>{const n=e.reduce(((e,n,o)=>vf(e,n,Wf(n,t.offsetTree,r)||o)),yf());return{...t,groupIndices:e,groupOffsetTree:n}}))),f),_m(Nm(n,qm(f),Lm((([e,{lastIndex:t}])=>e<t)),Pm((([e,{lastIndex:t,lastSize:r}])=>[{endIndex:t,size:r,startIndex:e}]))),r),_m(d,c);const b=Zm(Nm(d,Pm((e=>void 0===e))),!0);_m(Nm(c,Lm((e=>void 0!==e&&ff(Am(f).sizeTree))),Pm((e=>[{endIndex:0,size:e,startIndex:0}]))),r);const v=Xm(Nm(r,qm(f),Vm((({sizes:e},[t,r])=>({changed:r!==e,sizes:r})),{changed:!1,sizes:m}),Pm((e=>e.changed))));Bm(Nm(a,Vm(((e,t)=>({diff:e.prev-t,prev:t})),{diff:0,prev:0}),Pm((e=>e.diff))),(e=>{const{groupIndices:r}=Am(f);if(e>0)zm(t,!0),zm(i,e+qf(e,r));else if(e<0){const t=Am(p);t.length>0&&(e-=qf(-e,t)),zm(s,e)}})),Bm(Nm(a,qm(e)),(([e,t])=>{e<0&&t("`firstItemIndex` prop should not be set to less than zero. If you don't know the total count, just use a very high value",{firstItemIndex:a},nf.ERROR)}));const y=Xm(i);_m(Nm(i,qm(f),Pm((([e,t])=>{const r=t.groupIndices.length>0,n=[],o=t.lastSize;if(r){const r=pf(t.sizeTree,0);let i=0,s=0;for(;i<e;){const e=t.groupIndices[s],a=t.groupIndices.length===s+1?1/0:t.groupIndices[s+1]-e-1;n.push({endIndex:e,size:r,startIndex:e}),n.push({endIndex:e+1+a-1,size:o,startIndex:e+1}),s++,i+=a+1}const a=$f(t.sizeTree);return i!==e&&a.shift(),a.reduce(((t,{k:r,v:n})=>{let o=t.ranges;return 0!==t.prevSize&&(o=[...t.ranges,{endIndex:r+e-1,size:t.prevSize,startIndex:t.prevIndex}]),{prevIndex:r+e,prevSize:n,ranges:o}}),{prevIndex:e,prevSize:0,ranges:n}).ranges}return $f(t.sizeTree).reduce(((t,{k:r,v:n})=>({prevIndex:r+e,prevSize:n,ranges:[...t.ranges,{endIndex:r+e-1,size:t.prevSize,startIndex:t.prevIndex}]})),{prevIndex:0,prevSize:o,ranges:[]}).ranges}))),r);const x=Xm(Nm(s,qm(f,g),Pm((([e,{offsetTree:t},r])=>Wf(-e,t,r)))));return _m(Nm(s,qm(f,g),Pm((([e,t,r])=>{if(t.groupIndices.length>0){if(ff(t.sizeTree))return t;let n=yf();const o=Am(p);let i=0,s=0,a=0;for(;i<-e;){a=o[s];const e=o[s+1]-a-1;s++,i+=e+1}if(n=$f(t.sizeTree).reduce(((t,{k:r,v:n})=>vf(t,Math.max(0,r+e),n)),n),i!==-e){n=vf(n,0,pf(t.sizeTree,a));n=vf(n,1,bf(t.sizeTree,1-e)[1])}return{...t,sizeTree:n,...Gf(t.offsetTree,0,n,r)}}{const n=$f(t.sizeTree).reduce(((t,{k:r,v:n})=>vf(t,Math.max(0,r+e),n)),yf());return{...t,sizeTree:n,...Gf(t.offsetTree,0,n,r)}}}))),f),{beforeUnshiftWith:y,data:h,defaultItemSize:c,firstItemIndex:a,fixedItemSize:d,gap:g,groupIndices:l,itemSize:u,listRefresh:v,shiftWith:s,shiftWithOffset:x,sizeRanges:r,sizes:f,statefulTotalCount:o,totalCount:n,trackItemSizes:b,unshiftWith:i}}),Dm(sf,_f),{singleton:!0});function Jf(e){return e.reduce(((e,t)=>(e.groupIndices.push(e.totalCount),e.totalCount+=t+1,e)),{groupIndices:[],totalCount:0})}const ep=Km((([{groupIndices:e,sizes:t,totalCount:r},{headerHeight:n,scrollTop:o}])=>{const i=Qm(),s=Qm(),a=Xm(Nm(i,Pm(Jf)));return _m(Nm(a,Pm((e=>e.totalCount))),r),_m(Nm(a,Pm((e=>e.groupIndices))),e),_m(Nm(ef(o,t,n),Lm((([e,t])=>jf(t))),Pm((([e,t,r])=>bf(t.groupOffsetTree,Math.max(e-r,0),"v")[0])),jm(),Pm((e=>[e]))),s),{groupCounts:i,topItemsIndexes:s}}),Dm(Kf,hf)),tp=Km((([{log:e}])=>{const t=Gm(!1),r=Xm(Nm(t,Lm((e=>e)),jm()));return Bm(t,(t=>{t&&Am(e)("props updated",{},nf.DEBUG)})),{didMount:r,propsReady:t}}),Dm(sf),{singleton:!0}),rp=typeof document<"u"&&"scrollBehavior"in document.documentElement.style;function np(e){const t="number"==typeof e?{index:e}:e;return t.align||(t.align="start"),(!t.behavior||!rp)&&(t.behavior="auto"),t.offset||(t.offset=0),t}const op=Km((([{gap:e,listRefresh:t,sizes:r,totalCount:n},{fixedFooterHeight:o,fixedHeaderHeight:i,footerHeight:s,headerHeight:a,scrollingInProgress:l,scrollTo:d,smoothScrollTargetReached:c,viewportHeight:u},{log:h}])=>{const g=Qm(),m=Qm(),f=Gm(0);let p=null,b=null,v=null;function y(){p&&(p(),p=null),v&&(v(),v=null),b&&(clearTimeout(b),b=null),zm(l,!1)}return _m(Nm(g,qm(r,u,n,f,a,s,h),qm(e,i,o),Pm((([[e,r,n,o,i,s,a,d],u,h,f])=>{const x=np(e),{align:w,behavior:$,offset:F}=x,C=o-1,E=Vf(x,r,C);let S=Wf(E,r.offsetTree,u)+s;"end"===w?(S+=h+bf(r.sizeTree,E)[1]-n+f,E===C&&(S+=a)):"center"===w?S+=(h+bf(r.sizeTree,E)[1]-n+f)/2:S-=i,F&&(S+=F);const k=t=>{y(),t?(d("retrying to scroll to",{location:e},nf.DEBUG),zm(g,e)):(zm(m,!0),d("list did not change, scroll successful",{},nf.DEBUG))};if(y(),"smooth"===$){let e=!1;v=Bm(t,(t=>{e=e||t})),p=Om(c,(()=>{k(e)}))}else p=Om(Nm(t,function(e){return t=>{const r=setTimeout((()=>{t(!1)}),e);return e=>{e&&(t(!0),clearTimeout(r))}}}(150)),k);return b=setTimeout((()=>{y()}),1200),zm(l,!0),d("scrolling from index to",{behavior:$,index:E,top:S},nf.DEBUG),{behavior:$,top:S}}))),d),{scrollTargetReached:m,scrollToIndex:g,topListHeight:f}}),Dm(Kf,hf,sf),{singleton:!0});function ip(e,t){0==e?t():requestAnimationFrame((()=>{ip(e-1,t)}))}function sp(e,t){const r=t-1;return"number"==typeof e?e:"LAST"===e.index?r:e.index}const ap=Km((([{defaultItemSize:e,listRefresh:t,sizes:r},{scrollTop:n},{scrollTargetReached:o,scrollToIndex:i},{didMount:s}])=>{const a=Gm(!0),l=Gm(0),d=Gm(!0);return _m(Nm(s,qm(l),Lm((([e,t])=>!!t)),Wm(!1)),a),_m(Nm(s,qm(l),Lm((([e,t])=>!!t)),Wm(!1)),d),Bm(Nm(ef(t,s),qm(a,r,e,d),Lm((([[,e],t,{sizeTree:r},n,o])=>e&&(!ff(r)||Sm(n))&&!t&&!o)),qm(l)),(([,e])=>{Om(o,(()=>{zm(d,!0)})),ip(4,(()=>{Om(n,(()=>{zm(a,!0)})),zm(i,e)}))})),{initialItemFinalLocationReached:d,initialTopMostItemIndex:l,scrolledToInitialItem:a}}),Dm(Kf,hf,op,tp),{singleton:!0});function lp(e,t){return Math.abs(e-t)<1.01}const dp="up",cp="down",up={atBottom:!1,notAtBottomBecause:"NOT_SHOWING_LAST_ITEM",state:{offsetBottom:0,scrollHeight:0,scrollTop:0,viewportHeight:0}},hp=Km((([{footerHeight:e,headerHeight:t,scrollBy:r,scrollContainerState:n,scrollTop:o,viewportHeight:i}])=>{const s=Gm(!1),a=Gm(!0),l=Qm(),d=Qm(),c=Gm(4),u=Gm(0),h=Zm(Nm(rf(Nm(tf(o),Ym(1),Wm(!0)),Nm(tf(o),Ym(1),Wm(!1),Rm(100))),jm()),!1),g=Zm(Nm(rf(Nm(r,Wm(!0)),Nm(r,Wm(!1),Rm(200))),jm()),!1);_m(Nm(ef(tf(o),tf(u)),Pm((([e,t])=>e<=t)),jm()),a),_m(Nm(a,Um(50)),d);const m=Xm(Nm(ef(n,tf(i),tf(t),tf(e),tf(c)),Vm(((e,[{scrollHeight:t,scrollTop:r},n,o,i,s])=>{const a={scrollHeight:t,scrollTop:r,viewportHeight:n};if(r+n-t>-s){let t,n;return r>e.state.scrollTop?(t="SCROLLED_DOWN",n=e.state.scrollTop-r):(t="SIZE_DECREASED",n=e.state.scrollTop-r||e.scrollTopDelta),{atBottom:!0,atBottomBecause:t,scrollTopDelta:n,state:a}}let l;return l=a.scrollHeight>e.state.scrollHeight?"SIZE_INCREASED":n<e.state.viewportHeight?"VIEWPORT_HEIGHT_DECREASING":r<e.state.scrollTop?"SCROLLING_UPWARDS":"NOT_FULLY_SCROLLED_TO_LAST_ITEM_BOTTOM",{atBottom:!1,notAtBottomBecause:l,state:a}}),up),jm(((e,t)=>e&&e.atBottom===t.atBottom)))),f=Zm(Nm(n,Vm(((e,{scrollHeight:t,scrollTop:r,viewportHeight:n})=>{if(lp(e.scrollHeight,t))return{changed:!1,jump:0,scrollHeight:t,scrollTop:r};{const o=t-(r+n)<1;return e.scrollTop!==r&&o?{changed:!0,jump:e.scrollTop-r,scrollHeight:t,scrollTop:r}:{changed:!0,jump:0,scrollHeight:t,scrollTop:r}}}),{changed:!1,jump:0,scrollHeight:0,scrollTop:0}),Lm((e=>e.changed)),Pm((e=>e.jump))),0);_m(Nm(m,Pm((e=>e.atBottom))),s),_m(Nm(s,Um(50)),l);const p=Gm(cp);_m(Nm(n,Pm((({scrollTop:e})=>e)),jm(),Vm(((e,t)=>Am(g)?{direction:e.direction,prevScrollTop:t}:{direction:t<e.prevScrollTop?dp:cp,prevScrollTop:t}),{direction:cp,prevScrollTop:0}),Pm((e=>e.direction))),p),_m(Nm(n,Um(50),Wm("none")),p);const b=Gm(0);return _m(Nm(h,Lm((e=>!e)),Wm(0)),b),_m(Nm(o,Um(100),qm(h),Lm((([e,t])=>!!t)),Vm((([e,t],[r])=>[t,r]),[0,0]),Pm((([e,t])=>t-e))),b),{atBottomState:m,atBottomStateChange:l,atBottomThreshold:c,atTopStateChange:d,atTopThreshold:u,isAtBottom:s,isAtTop:a,isScrolling:h,lastJumpDueToItemResize:f,scrollDirection:p,scrollVelocity:b}}),Dm(hf)),gp="top",mp="bottom",fp="none";function pp(e,t,r){return"number"==typeof e?r===dp&&t===gp||r===cp&&t===mp?e:0:r===dp?t===gp?e.main:e.reverse:t===mp?e.main:e.reverse}function bp(e,t){var r;return"number"==typeof e?e:null!=(r=e[t])?r:0}const vp=Km((([{deviation:e,fixedHeaderHeight:t,headerHeight:r,scrollTop:n,viewportHeight:o}])=>{const i=Qm(),s=Gm(0),a=Gm(0),l=Gm(0);return{increaseViewportBy:a,listBoundary:i,overscan:l,topListHeight:s,visibleRange:Zm(Nm(ef(tf(n),tf(o),tf(r),tf(i,Af),tf(l),tf(s),tf(t),tf(e),tf(a)),Pm((([e,t,r,[n,o],i,s,a,l,d])=>{const c=e-l,u=s+a,h=Math.max(r-c,0);let g=fp;const m=bp(d,gp),f=bp(d,mp);return n-=l,o+=r+a,(n+=r+a)>e+u-m&&(g=dp),(o-=l)<e-h+t+f&&(g=cp),g!==fp?[Math.max(c-r-pp(i,gp,g)-m,0),c-h-a+t+pp(i,mp,g)+f]:null})),Lm((e=>null!=e)),jm(Af)),[0,0])}}),Dm(hf),{singleton:!0});const yp={bottom:0,firstItemIndex:0,items:[],offsetBottom:0,offsetTop:0,top:0,topItems:[],topListHeight:0,totalCount:0};function xp(e,t,r,n,o,i){const{lastIndex:s,lastOffset:a,lastSize:l}=o;let d=0,c=0;if(e.length>0){d=e[0].offset;const t=e[e.length-1];c=t.offset+t.size}const u=r-s,h=d,g=a+u*l+(u-1)*n-c;return{bottom:c,firstItemIndex:i,items:$p(e,o,i),offsetBottom:g,offsetTop:d,top:h,topItems:$p(t,o,i),topListHeight:t.reduce(((e,t)=>t.size+e),0),totalCount:r}}function wp(e,t,r,n,o,i){let s=0;if(r.groupIndices.length>0)for(const t of r.groupIndices){if(t-s>=e)break;s++}const a=e+s,l=sp(t,a);return xp(Array.from({length:a}).map(((e,t)=>({data:i[t+l],index:t+l,offset:0,size:0}))),[],a,o,r,n)}function $p(e,t,r){if(0===e.length)return[];if(!jf(t))return e.map((e=>({...e,index:e.index+r,originalIndex:e.index})));const n=e[0].index,o=e[e.length-1].index,i=[],s=xf(t.groupOffsetTree,n,o);let a,l=0;for(const n of e){let e;(!a||a.end<n.index)&&(a=s.shift(),l=t.groupIndices.indexOf(a.start)),e=n.index===a.start?{index:l,type:"group"}:{groupIndex:l,index:n.index-(l+1)+r},i.push({...e,data:n.data,offset:n.offset,originalIndex:n.index,size:n.size})}return i}const Fp=Km((([{data:e,firstItemIndex:t,gap:r,sizes:n,totalCount:o},i,{listBoundary:s,topListHeight:a,visibleRange:l},{initialTopMostItemIndex:d,scrolledToInitialItem:c},{topListHeight:u},h,{didMount:g},{recalcInProgress:m}])=>{const f=Gm([]),p=Gm(0),b=Qm();_m(i.topItemsIndexes,f);const v=Zm(Nm(ef(g,m,tf(l,Af),tf(o),tf(n),tf(d),c,tf(f),tf(t),tf(r),e),Lm((([e,t,,r,,,,,,,n])=>{const o=n&&n.length!==r;return e&&!t&&!o})),Pm((([,,[e,t],r,n,o,i,s,a,l,d])=>{const c=n,{offsetTree:u,sizeTree:h}=c,g=Am(p);if(0===r)return{...yp,totalCount:r};if(0===e&&0===t)return 0===g?{...yp,totalCount:r}:wp(g,o,n,a,l,d||[]);if(ff(h))return g>0?null:xp(function(e,t,r){if(jf(t)){const n=Nf(e,t);return[{index:bf(t.groupOffsetTree,n)[0],offset:0,size:0},{data:null==r?void 0:r[0],index:n,offset:0,size:0}]}return[{data:null==r?void 0:r[0],index:e,offset:0,size:0}]}(sp(o,r),c,d),[],r,l,c,a);const m=[];if(s.length>0){const e=s[0],t=s[s.length-1];let r=0;for(const n of xf(h,e,t)){const o=n.value,i=Math.max(n.start,e),s=Math.min(n.end,t);for(let e=i;e<=s;e++)m.push({data:null==d?void 0:d[e],index:e,offset:r,size:o}),r+=o}}if(!i)return xp([],m,r,l,c,a);const f=s.length>0?s[s.length-1]+1:0,b=Yf(u,e,t,f);if(0===b.length)return null;const v=r-1;return xp(Im([],(r=>{for(const n of b){const o=n.value;let i=o.offset,s=n.start;const a=o.size;if(o.offset<e){s+=Math.floor((e-o.offset+l)/(a+l));const t=s-n.start;i+=t*a+t*l}s<f&&(i+=(f-s)*a,s=f);const c=Math.min(n.end,v);for(let e=s;e<=c&&!(i>=t);e++)r.push({data:null==d?void 0:d[e],index:e,offset:i,size:a}),i+=a+l}})),m,r,l,c,a)})),Lm((e=>null!==e)),jm()),yp);_m(Nm(e,Lm(Sm),Pm((e=>null==e?void 0:e.length))),o),_m(Nm(v,Pm((e=>e.topListHeight))),u),_m(u,a),_m(Nm(v,Pm((e=>[e.top,e.bottom]))),s),_m(Nm(v,Pm((e=>e.items))),b);const y=Xm(Nm(v,Lm((({items:e})=>e.length>0)),qm(o,e),Lm((([{items:e},t])=>e[e.length-1].originalIndex===t-1)),Pm((([,e,t])=>[e-1,t])),jm(Af),Pm((([e])=>e)))),x=Xm(Nm(v,Um(200),Lm((({items:e,topItems:t})=>e.length>0&&e[0].originalIndex===t.length)),Pm((({items:e})=>e[0].index)),jm())),w=Xm(Nm(v,Lm((({items:e})=>e.length>0)),Pm((({items:e})=>{let t=0,r=e.length-1;for(;"group"===e[t].type&&t<r;)t++;for(;"group"===e[r].type&&r>t;)r--;return{endIndex:e[r].index,startIndex:e[t].index}})),jm(Mf)));return{endReached:y,initialItemCount:p,itemsRendered:b,listState:v,rangeChanged:w,startReached:x,topItemsIndexes:f,...h}}),Dm(Kf,ep,vp,ap,op,hp,tp,_f),{singleton:!0}),Cp=Km((([{fixedFooterHeight:e,fixedHeaderHeight:t,footerHeight:r,headerHeight:n},{listState:o}])=>{const i=Qm(),s=Zm(Nm(ef(r,e,n,t,o),Pm((([e,t,r,n,o])=>e+t+r+n+o.offsetBottom+o.bottom))),0);return _m(tf(s),i),{totalListHeight:s,totalListHeightChanged:i}}),Dm(hf,Fp),{singleton:!0}),Ep=Km((([{viewportHeight:e},{totalListHeight:t}])=>{const r=Gm(!1);return{alignToBottom:r,paddingTopAddition:Zm(Nm(ef(r,e,t),Lm((([e])=>e)),Pm((([,e,t])=>Math.max(0,e-t))),Um(0),jm()),0)}}),Dm(hf,Cp),{singleton:!0});function Sp(e){return!!e&&("smooth"===e?"smooth":"auto")}const kp=Km((([{listRefresh:e,totalCount:t},{atBottomState:r,isAtBottom:n},{scrollToIndex:o},{scrolledToInitialItem:i},{didMount:s,propsReady:a},{log:l},{scrollingInProgress:d}])=>{const c=Gm(!1),u=Qm();let h=null;function g(e){zm(o,{align:"end",behavior:e,index:"LAST"})}function m(e){const t=Om(r,(t=>{e&&!t.atBottom&&"SIZE_INCREASED"===t.notAtBottomBecause&&!h&&(Am(l)("scrolling to bottom due to increased size",{},nf.DEBUG),g("auto"))}));setTimeout(t,100)}return Bm(Nm(ef(Nm(tf(t),Ym(1)),s),qm(tf(c),n,i,d),Pm((([[e,t],r,n,o,i])=>{let s=t&&o,a="auto";return s&&(a=((e,t)=>"function"==typeof e?Sp(e(t)):t&&Sp(e))(r,n||i),s=s&&!!a),{followOutputBehavior:a,shouldFollow:s,totalCount:e}})),Lm((({shouldFollow:e})=>e))),(({followOutputBehavior:t,totalCount:r})=>{h&&(h(),h=null),h=Om(e,(()=>{Am(l)("following output to ",{totalCount:r},nf.DEBUG),g(t),h=null}))})),Bm(Nm(ef(tf(c),t,a),Lm((([e,,t])=>e&&t)),Vm((({value:e},[,t])=>({refreshed:e===t,value:t})),{refreshed:!1,value:0}),Lm((({refreshed:e})=>e)),qm(c,t)),(([,e])=>{Am(i)&&m(!1!==e)})),Bm(u,(()=>{m(!1!==Am(c))})),Bm(ef(tf(c),r),(([e,t])=>{e&&!t.atBottom&&"VIEWPORT_HEIGHT_DECREASING"===t.notAtBottomBecause&&g("auto")})),{autoscrollToBottom:u,followOutput:c}}),Dm(Kf,hp,op,ap,tp,sf,hf)),Ip=Km((([{data:e,firstItemIndex:t,gap:r,sizes:n},{initialTopMostItemIndex:o},{initialItemCount:i,listState:s},{didMount:a}])=>(_m(Nm(a,qm(i),Lm((([,e])=>0!==e)),qm(o,n,t,r,e),Pm((([[,e],t,r,n,o,i=[]])=>wp(e,t,r,n,o,i)))),s),{})),Dm(Kf,ap,Fp,tp),{singleton:!0}),Tp=Km((([{didMount:e},{scrollTo:t},{listState:r}])=>{const n=Gm(0);return Bm(Nm(e,qm(n),Lm((([,e])=>0!==e)),Pm((([,e])=>({top:e})))),(e=>{Om(Nm(r,Ym(1),Lm((e=>e.items.length>1))),(()=>{requestAnimationFrame((()=>{zm(t,e)}))}))})),{initialScrollTop:n}}),Dm(tp,hf,Fp),{singleton:!0}),Dp=({itemBottom:e,itemTop:t,locationParams:{align:r,behavior:n,...o},viewportBottom:i,viewportTop:s})=>t<s?{...o,align:null!=r?r:"start",behavior:n}:e>i?{...o,align:null!=r?r:"end",behavior:n}:null,Bp=Km((([{gap:e,sizes:t,totalCount:r},{fixedFooterHeight:n,fixedHeaderHeight:o,headerHeight:i,scrollingInProgress:s,scrollTop:a,viewportHeight:l},{scrollToIndex:d}])=>{const c=Qm();return _m(Nm(c,qm(t,l,r,i,o,n,a),qm(e),Pm((([[e,t,r,n,o,i,a,l],d])=>{const{align:c,behavior:u,calculateViewLocation:h=Dp,done:g,...m}=e,f=Vf(e,t,n-1),p=Wf(f,t.offsetTree,d)+o+i,b=h({itemBottom:p+bf(t.sizeTree,f)[1],itemTop:p,locationParams:{align:c,behavior:u,...m},viewportBottom:l+r-a,viewportTop:l+i});return b?g&&Om(Nm(s,Lm((e=>!e)),Ym(Am(s)?1:2)),g):g&&g(),b})),Lm((e=>null!==e))),d),{scrollIntoView:c}}),Dm(Kf,hf,op,Fp,sf),{singleton:!0}),zp=Km((([{scrollVelocity:e}])=>{const t=Gm(!1),r=Qm(),n=Gm(!1);return _m(Nm(e,qm(n,t,r),Lm((([e,t])=>!!t)),Pm((([e,t,r,n])=>{const{enter:o,exit:i}=t;if(r){if(i(e,n))return!1}else if(o(e,n))return!0;return r})),jm()),t),Bm(Nm(ef(t,e,r),qm(n)),(([[e,t,r],n])=>{e&&n&&n.change&&n.change(t,r)})),{isSeeking:t,scrollSeekConfiguration:n,scrollSeekRangeChanged:r,scrollVelocity:e}}),Dm(hp),{singleton:!0}),Mp=Km((([{scrollContainerState:e,scrollTo:t}])=>{const r=Qm(),n=Qm(),o=Qm(),i=Gm(!1),s=Gm(void 0);return _m(Nm(ef(r,n),Pm((([{scrollHeight:e,scrollTop:t,viewportHeight:r},{offsetTop:n}])=>({scrollHeight:e,scrollTop:Math.max(0,t-n),viewportHeight:r})))),e),_m(Nm(t,qm(n),Pm((([e,{offsetTop:t}])=>({...e,top:e.top+t})))),o),{customScrollParent:s,useWindowScroll:i,windowScrollContainerState:r,windowScrollTo:o,windowViewportRect:n}}),Dm(hf)),Ap=Km((([{sizeRanges:e,sizes:t},{headerHeight:r,scrollTop:n},{initialTopMostItemIndex:o},{didMount:i},{useWindowScroll:s,windowScrollContainerState:a,windowViewportRect:l}])=>{const d=Qm(),c=Gm(void 0),u=Gm(null),h=Gm(null);return _m(a,u),_m(l,h),Bm(Nm(d,qm(t,n,s,u,h,r)),(([e,t,r,n,o,i,s])=>{const a=function(e){return $f(e).map((({k:e,v:t},r,n)=>{const o=n[r+1];return{endIndex:o?o.k-1:1/0,size:t,startIndex:e}}))}(t.sizeTree);n&&null!==o&&null!==i&&(r=o.scrollTop-i.offsetTop),e({ranges:a,scrollTop:r-=s})})),_m(Nm(c,Lm(Sm),Pm(_p)),o),_m(Nm(i,qm(c),Lm((([,e])=>void 0!==e)),jm(),Pm((([,e])=>e.ranges))),e),{getState:d,restoreStateFrom:c}}),Dm(Kf,hf,ap,tp,Mp));function _p(e){return{align:"start",index:0,offset:e.scrollTop}}const Op=Km((([{topItemsIndexes:e}])=>{const t=Gm(0);return _m(Nm(t,Lm((e=>e>=0)),Pm((e=>Array.from({length:e}).map(((e,t)=>t))))),e),{topItemCount:t}}),Dm(Fp));function Rp(e){let t,r=!1;return()=>(r||(r=!0,t=e()),t)}const Hp=Rp((()=>/iP(ad|od|hone)/i.test(navigator.userAgent)&&/WebKit/i.test(navigator.userAgent))),jp=Km((([{deviation:e,scrollBy:t,scrollingInProgress:r,scrollTop:n},{isAtBottom:o,isScrolling:i,lastJumpDueToItemResize:s,scrollDirection:a},{listState:l},{beforeUnshiftWith:d,gap:c,shiftWithOffset:u,sizes:h},{log:g},{recalcInProgress:m}])=>{const f=Xm(Nm(l,qm(s),Vm((([,e,t,r],[{bottom:n,items:o,offsetBottom:i,totalCount:s},a])=>{const l=n+i;let d=0;return t===s&&e.length>0&&o.length>0&&(0===o[0].originalIndex&&0===e[0].originalIndex||(d=l-r,0!==d&&(d+=a))),[d,o,s,l]}),[0,[],0,0]),Lm((([e])=>0!==e)),qm(n,a,r,o,g,m),Lm((([,e,t,r,,,n])=>!n&&!r&&0!==e&&t===dp)),Pm((([[e],,,,,t])=>(t("Upward scrolling compensation",{amount:e},nf.DEBUG),e)))));function p(r){r>0?(zm(t,{behavior:"auto",top:-r}),zm(e,0)):(zm(e,0),zm(t,{behavior:"auto",top:-r}))}return Bm(Nm(f,qm(e,i)),(([t,r,n])=>{n&&Hp()?zm(e,r-t):p(-t)})),Bm(Nm(ef(Zm(i,!1),e,m),Lm((([e,t,r])=>!e&&!r&&0!==t)),Pm((([e,t])=>t)),Um(1)),p),_m(Nm(u,Pm((e=>({top:-e})))),t),Bm(Nm(d,qm(h,c),Pm((([e,{groupIndices:t,lastSize:r,sizeTree:n},o])=>{function i(e){return e*(r+o)}if(0===t.length)return i(e);{let r=0;const o=pf(n,0);let s=0,a=0;for(;s<e;){s++,r+=o;let n=t.length===a+1?1/0:t[a+1]-t[a]-1;s+n>e&&(r-=o,n=e-s+1),s+=n,r+=i(n),a++}return r}}))),(r=>{zm(e,r),requestAnimationFrame((()=>{zm(t,{top:r}),requestAnimationFrame((()=>{zm(e,0),zm(m,!1)}))}))})),{deviation:e}}),Dm(hf,hp,Fp,Kf,sf,_f)),Lp=Km((([e,t,r,n,o,i,s,a,l,d])=>({...e,...t,...r,...n,...o,...i,...s,...a,...l,...d})),Dm(vp,Ip,tp,zp,Cp,Tp,Ep,Mp,Bp,sf)),Pp=Km((([{data:e,defaultItemSize:t,firstItemIndex:r,fixedItemSize:n,gap:o,groupIndices:i,itemSize:s,sizeRanges:a,sizes:l,statefulTotalCount:d,totalCount:c,trackItemSizes:u},{initialItemFinalLocationReached:h,initialTopMostItemIndex:g,scrolledToInitialItem:m},f,p,b,{listState:v,topItemsIndexes:y,...x},{scrollToIndex:w},$,{topItemCount:F},{groupCounts:C},E])=>(_m(x.rangeChanged,E.scrollSeekRangeChanged),_m(Nm(E.windowViewportRect,Pm((e=>e.visibleHeight))),f.viewportHeight),{data:e,defaultItemHeight:t,firstItemIndex:r,fixedItemHeight:n,gap:o,groupCounts:C,initialItemFinalLocationReached:h,initialTopMostItemIndex:g,scrolledToInitialItem:m,sizeRanges:a,topItemCount:F,topItemsIndexes:y,totalCount:c,...b,groupIndices:i,itemSize:s,listState:v,scrollToIndex:w,statefulTotalCount:d,trackItemSizes:u,...x,...E,...f,sizes:l,...p})),Dm(Kf,ap,hf,Ap,kp,Fp,op,jp,Op,ep,Lp));function Wp(e,t){const r={},n={};let o=0;const i=e.length;for(;o<i;)n[e[o]]=1,o+=1;for(const e in t)Object.hasOwn(n,e)||(r[e]=t[e]);return r}const Np=typeof document<"u"?o.useLayoutEffect:o.useEffect;function Vp(e,r,n){const i=Object.keys(r.required||{}),s=Object.keys(r.optional||{}),a=Object.keys(r.methods||{}),l=Object.keys(r.events||{}),d=o.createContext({});function c(e,t){e.propsReady&&zm(e.propsReady,!1);for(const n of i){zm(e[r.required[n]],t[n])}for(const n of s)if(n in t){zm(e[r.optional[n]],t[n])}e.propsReady&&zm(e.propsReady,!0)}function u(e){return l.reduce(((t,n)=>(t[n]=function(e){let t,r;const n=()=>null==t?void 0:t();return function(o,i){switch(o){case 1:return i?r===i?void 0:(n(),r=i,t=Bm(e,i),t):(n(),km);case 2:return n(),void(r=null)}}}(e[r.events[n]]),t)),{})}const h=o.forwardRef(((h,g)=>{const{children:m,...f}=h,[p]=o.useState((()=>Im(function(e){const t=new Map,r=({constructor:e,dependencies:n,id:o,singleton:i})=>{if(i&&t.has(o))return t.get(o);const s=e(n.map((e=>r(e))));return i&&t.set(o,s),s};return r(e)}(e),(e=>{c(e,f)})))),[b]=o.useState(Cm(u,p));Np((()=>{for(const e of l)e in f&&Bm(b[e],f[e]);return()=>{Object.values(b).map(Mm)}}),[f,b,p]),Np((()=>{c(p,f)})),o.useImperativeHandle(g,wm(function(e){return a.reduce(((t,n)=>(t[n]=t=>{zm(e[r.methods[n]],t)},t)),{})}(p)));const v=n;return t(d.Provider,{value:p,children:n?t(v,{...Wp([...i,...s,...l],f),children:m}):m})}));return{Component:h,useEmitter:(e,t)=>{const r=o.useContext(d)[e];Np((()=>Bm(r,t)),[t,r])},useEmitterValue:o.version.startsWith("18")?e=>{const t=o.useContext(d)[e],r=o.useCallback((e=>Bm(t,e)),[t]);return o.useSyncExternalStore(r,(()=>Am(t)),(()=>Am(t)))}:e=>{const t=o.useContext(d)[e],[r,n]=o.useState(Cm(Am,t));return Np((()=>Bm(t,(e=>{e!==r&&n(wm(e))}))),[t,r]),r},usePublisher:e=>o.useCallback(Em(zm,o.useContext(d)[e]),[e])}}const Yp=o.createContext(void 0),Up=o.createContext(void 0),qp=typeof document<"u"?o.useLayoutEffect:o.useEffect;function Gp(e,t,r,n=km,i,s){const a=o.useRef(null),l=o.useRef(null),d=o.useRef(null),c=o.useCallback((r=>{const n=r.target,o=n===window||n===document,i=s?o?window.pageXOffset||document.documentElement.scrollLeft:n.scrollLeft:o?window.pageYOffset||document.documentElement.scrollTop:n.scrollTop,a=s?o?document.documentElement.scrollWidth:n.scrollWidth:o?document.documentElement.scrollHeight:n.scrollHeight,c=s?o?window.innerWidth:n.offsetWidth:o?window.innerHeight:n.offsetHeight,u=()=>{e({scrollHeight:a,scrollTop:Math.max(i,0),viewportHeight:c})};r.suppressFlushSync?u():S.flushSync(u),null!==l.current&&(i===l.current||i<=0||i===a-c)&&(l.current=null,t(!0),d.current&&(clearTimeout(d.current),d.current=null))}),[e,t]);return o.useEffect((()=>{const e=i||a.current;return n(i||a.current),c({suppressFlushSync:!0,target:e}),e.addEventListener("scroll",c,{passive:!0}),()=>{n(null),e.removeEventListener("scroll",c)}}),[a,c,r,n,i]),{scrollByCallback:function(e){s&&(e={behavior:e.behavior,left:e.top}),a.current.scrollBy(e)},scrollerRef:a,scrollToCallback:function(r){const n=a.current;if(!n||(s?"offsetWidth"in n&&0===n.offsetWidth:"offsetHeight"in n&&0===n.offsetHeight))return;const o="smooth"===r.behavior;let i,c,u;n===window?(c=Math.max(Hf(document.documentElement,s?"width":"height"),s?document.documentElement.scrollWidth:document.documentElement.scrollHeight),i=s?window.innerWidth:window.innerHeight,u=s?document.documentElement.scrollLeft:document.documentElement.scrollTop):(c=n[s?"scrollWidth":"scrollHeight"],i=Hf(n,s?"width":"height"),u=n[s?"scrollLeft":"scrollTop"]);const h=c-i;if(r.top=Math.ceil(Math.max(Math.min(h,r.top),0)),lp(i,c)||r.top===u)return e({scrollHeight:c,scrollTop:u,viewportHeight:i}),void(o&&t(!0));o?(l.current=r.top,d.current&&clearTimeout(d.current),d.current=setTimeout((()=>{d.current=null,l.current=null,t(!0)}),1e3)):l.current=null,s&&(r={behavior:r.behavior,left:r.top}),n.scrollTo(r)}}}const Zp="-webkit-sticky",Qp="sticky",Xp=Rp((()=>{if(typeof document>"u")return Qp;const e=document.createElement("div");return e.style.position=Zp,e.style.position===Zp?Zp:Qp}));function Kp(e){return e}const Jp=Km((()=>{const e=Gm((e=>`Item ${e}`)),t=Gm(null),r=Gm((e=>`Group ${e}`)),n=Gm({}),o=Gm(Kp),i=Gm("div"),s=Gm(km),a=(e,t=null)=>Zm(Nm(n,Pm((t=>t[e])),jm()),t);return{components:n,computeItemKey:o,context:t,EmptyPlaceholder:a("EmptyPlaceholder"),FooterComponent:a("Footer"),GroupComponent:a("Group","div"),groupContent:r,HeaderComponent:a("Header"),HeaderFooterTag:i,ItemComponent:a("Item","div"),itemContent:e,ListComponent:a("List","div"),ScrollerComponent:a("Scroller","div"),scrollerRef:s,ScrollSeekPlaceholder:a("ScrollSeekPlaceholder"),TopItemListComponent:a("TopItemList")}})),eb=Km((([e,t])=>({...e,...t})),Dm(Pp,Jp)),tb=({height:e})=>t("div",{style:{height:e}}),rb={overflowAnchor:"none",position:Xp(),zIndex:1},nb={overflowAnchor:"none"},ob={...nb,display:"inline-block",height:"100%"},ib=o.memo((function({showTopList:e=!1}){const r=$b("listState"),n=Fb("sizeRanges"),i=$b("useWindowScroll"),s=$b("customScrollParent"),a=Fb("windowScrollContainerState"),l=Fb("scrollContainerState"),d=s||i?a:l,c=$b("itemContent"),u=$b("context"),h=$b("groupContent"),g=$b("trackItemSizes"),m=$b("itemSize"),f=$b("log"),p=Fb("gap"),v=$b("horizontalDirection"),{callbackRef:y}=df(n,m,g,e?km:d,f,p,s,v,$b("skipAnimationFrameInResizeObserver")),[x,w]=o.useState(0);wb("deviation",(e=>{x!==e&&w(e)}));const $=$b("EmptyPlaceholder"),F=$b("ScrollSeekPlaceholder")||tb,C=$b("ListComponent"),E=$b("ItemComponent"),S=$b("GroupComponent"),k=$b("computeItemKey"),I=$b("isSeeking"),T=$b("groupIndices").length>0,D=$b("alignToBottom"),B=$b("initialItemFinalLocationReached"),z=e?{}:{boxSizing:"border-box",...v?{display:"inline-block",height:"100%",marginLeft:0!==x?x:D?"auto":0,paddingLeft:r.offsetTop,paddingRight:r.offsetBottom,whiteSpace:"nowrap"}:{marginTop:0!==x?x:D?"auto":0,paddingBottom:r.offsetBottom,paddingTop:r.offsetTop},...B?{}:{visibility:"hidden"}};return!e&&0===r.totalCount&&$?t($,{...cb($,u)}):t(C,{...cb(C,u),"data-testid":e?"virtuoso-top-item-list":"virtuoso-item-list",ref:y,style:z,children:(e?r.topItems:r.items).map((e=>{const t=e.originalIndex,n=k(t+r.firstItemIndex,e.data,u);return I?b(F,{...cb(F,u),height:e.size,index:e.index,key:n,type:e.type||"item",..."group"===e.type?{}:{groupIndex:e.groupIndex}}):"group"===e.type?b(S,{...cb(S,u),"data-index":t,"data-item-index":e.index,"data-known-size":e.size,key:n,style:rb},h(e.index,u)):b(E,{...cb(E,u),...ub(E,e.data),"data-index":t,"data-item-group-index":e.groupIndex,"data-item-index":e.index,"data-known-size":e.size,key:n,style:v?ob:nb},T?c(e.index,e.groupIndex,e.data,u):c(e.index,e.data,u))}))})})),sb={height:"100%",outline:"none",overflowY:"auto",position:"relative",WebkitOverflowScrolling:"touch"},ab={outline:"none",overflowX:"auto",position:"relative"},lb=e=>({height:"100%",position:"absolute",top:0,width:"100%",...e?{display:"flex",flexDirection:"column"}:{}}),db={position:Xp(),top:0,width:"100%",zIndex:1};function cb(e,t){if("string"!=typeof e)return{context:t}}function ub(e,t){return{item:"string"==typeof e?void 0:t}}const hb=o.memo((function(){const e=$b("HeaderComponent"),r=Fb("headerHeight"),n=$b("HeaderFooterTag"),i=af(o.useMemo((()=>e=>{r(Hf(e,"height"))}),[r]),!0,$b("skipAnimationFrameInResizeObserver")),s=$b("context");return e?t(n,{ref:i,children:t(e,{...cb(e,s)})}):null})),gb=o.memo((function(){const e=$b("FooterComponent"),r=Fb("footerHeight"),n=$b("HeaderFooterTag"),i=af(o.useMemo((()=>e=>{r(Hf(e,"height"))}),[r]),!0,$b("skipAnimationFrameInResizeObserver")),s=$b("context");return e?t(n,{ref:i,children:t(e,{...cb(e,s)})}):null}));function mb({useEmitter:e,useEmitterValue:r,usePublisher:n}){return o.memo((function({children:o,style:i,...s}){const a=n("scrollContainerState"),l=r("ScrollerComponent"),d=n("smoothScrollTargetReached"),c=r("scrollerRef"),u=r("context"),h=r("horizontalDirection")||!1,{scrollByCallback:g,scrollerRef:m,scrollToCallback:f}=Gp(a,d,l,c,void 0,h);return e("scrollTo",f),e("scrollBy",g),t(l,{"data-testid":"virtuoso-scroller","data-virtuoso-scroller":!0,ref:m,style:{...h?ab:sb,...i},tabIndex:0,...s,...cb(l,u),children:o})}))}function fb({useEmitter:e,useEmitterValue:r,usePublisher:n}){return o.memo((function({children:o,style:i,...s}){const a=n("windowScrollContainerState"),l=r("ScrollerComponent"),d=n("smoothScrollTargetReached"),c=r("totalListHeight"),u=r("deviation"),h=r("customScrollParent"),g=r("context"),{scrollByCallback:m,scrollerRef:f,scrollToCallback:p}=Gp(a,d,l,km,h);return qp((()=>(f.current=h||window,()=>{f.current=null})),[f,h]),e("windowScrollTo",p),e("scrollBy",m),t(l,{"data-virtuoso-scroller":!0,style:{position:"relative",...i,...0!==c?{height:c+u}:{}},...s,...cb(l,g),children:o})}))}const pb=({children:e})=>{const r=o.useContext(Yp),n=Fb("viewportHeight"),i=Fb("fixedItemHeight"),s=$b("alignToBottom"),a=$b("horizontalDirection"),l=af(o.useMemo((()=>Fm(n,(e=>Hf(e,a?"width":"height")))),[n,a]),!0,$b("skipAnimationFrameInResizeObserver"));return o.useEffect((()=>{r&&(n(r.viewportHeight),i(r.itemHeight))}),[r,n,i]),t("div",{"data-viewport-type":"element",ref:l,style:lb(s),children:e})},bb=({children:e})=>{const r=o.useContext(Yp),n=Fb("windowViewportRect"),i=Fb("fixedItemHeight"),s=$b("customScrollParent"),a=uf(n,s,$b("skipAnimationFrameInResizeObserver")),l=$b("alignToBottom");return o.useEffect((()=>{r&&(i(r.itemHeight),n({offsetTop:0,visibleHeight:r.viewportHeight,visibleWidth:100}))}),[r,n,i]),t("div",{"data-viewport-type":"window",ref:a,style:lb(l),children:e})},vb=({children:e})=>{const r=$b("TopItemListComponent")||"div",n=$b("headerHeight"),o={...db,marginTop:`${n}px`},i=$b("context");return t(r,{style:o,...cb(r,i),children:e})},yb=o.memo((function(r){const n=$b("useWindowScroll"),o=$b("topItemsIndexes").length>0,i=$b("customScrollParent"),s=$b("context"),a=i||n?Eb:Cb,l=i||n?bb:pb;return e(a,{...r,...cb(a,s),children:[o&&t(vb,{children:t(ib,{showTopList:!0})}),e(l,{children:[t(hb,{}),t(ib,{}),t(gb,{})]})]})})),{Component:xb,useEmitter:wb,useEmitterValue:$b,usePublisher:Fb}=Vp(eb,{events:{atBottomStateChange:"atBottomStateChange",atTopStateChange:"atTopStateChange",endReached:"endReached",groupIndices:"groupIndices",isScrolling:"isScrolling",itemsRendered:"itemsRendered",rangeChanged:"rangeChanged",startReached:"startReached",totalListHeightChanged:"totalListHeightChanged"},methods:{autoscrollToBottom:"autoscrollToBottom",getState:"getState",scrollBy:"scrollBy",scrollIntoView:"scrollIntoView",scrollTo:"scrollTo",scrollToIndex:"scrollToIndex"},optional:{alignToBottom:"alignToBottom",atBottomThreshold:"atBottomThreshold",atTopThreshold:"atTopThreshold",components:"components",computeItemKey:"computeItemKey",context:"context",customScrollParent:"customScrollParent",data:"data",defaultItemHeight:"defaultItemHeight",firstItemIndex:"firstItemIndex",fixedItemHeight:"fixedItemHeight",followOutput:"followOutput",groupContent:"groupContent",groupCounts:"groupCounts",headerFooterTag:"HeaderFooterTag",horizontalDirection:"horizontalDirection",increaseViewportBy:"increaseViewportBy",initialItemCount:"initialItemCount",initialScrollTop:"initialScrollTop",initialTopMostItemIndex:"initialTopMostItemIndex",itemContent:"itemContent",itemSize:"itemSize",logLevel:"logLevel",overscan:"overscan",restoreStateFrom:"restoreStateFrom",scrollerRef:"scrollerRef",scrollSeekConfiguration:"scrollSeekConfiguration",skipAnimationFrameInResizeObserver:"skipAnimationFrameInResizeObserver",topItemCount:"topItemCount",totalCount:"totalCount",useWindowScroll:"useWindowScroll"},required:{}},yb),Cb=mb({useEmitter:wb,useEmitterValue:$b,usePublisher:Fb}),Eb=fb({useEmitter:wb,useEmitterValue:$b,usePublisher:Fb}),Sb=xb,kb={bottom:0,itemHeight:0,items:[],itemWidth:0,offsetBottom:0,offsetTop:0,top:0},Ib={bottom:0,itemHeight:0,items:[{index:0}],itemWidth:0,offsetBottom:0,offsetTop:0,top:0},{ceil:Tb,floor:Db,max:Bb,min:zb,round:Mb}=Math;function Ab(e,t,r){return Array.from({length:t-e+1}).map(((t,n)=>({data:null===r?null:r[n+e],index:n+e})))}function _b(e,t){return e&&e.width===t.width&&e.height===t.height}function Ob(e,t){return e&&e.column===t.column&&e.row===t.row}const Rb=Km((([{increaseViewportBy:e,listBoundary:t,overscan:r,visibleRange:n},{footerHeight:o,headerHeight:i,scrollBy:s,scrollContainerState:a,scrollTo:l,scrollTop:d,smoothScrollTargetReached:c,viewportHeight:u},h,g,{didMount:m,propsReady:f},{customScrollParent:p,useWindowScroll:b,windowScrollContainerState:v,windowScrollTo:y,windowViewportRect:x},w])=>{const $=Gm(0),F=Gm(0),C=Gm(kb),E=Gm({height:0,width:0}),S=Gm({height:0,width:0}),k=Qm(),I=Qm(),T=Gm(0),D=Gm(null),B=Gm({column:0,row:0}),z=Qm(),M=Qm(),A=Gm(!1),_=Gm(0),O=Gm(!0),R=Gm(!1),H=Gm(!1);Bm(Nm(m,qm(_),Lm((([e,t])=>!!t))),(()=>{zm(O,!1)})),Bm(Nm(ef(m,O,S,E,_,R),Lm((([e,t,r,n,,o])=>e&&!t&&0!==r.height&&0!==n.height&&!o))),(([,,,,e])=>{zm(R,!0),ip(1,(()=>{zm(k,e)})),Om(Nm(d),(()=>{zm(t,[0,0]),zm(O,!0)}))})),_m(Nm(M,Lm((e=>null!=e&&e.scrollTop>0)),Wm(0)),F),Bm(Nm(m,qm(M),Lm((([,e])=>null!=e))),(([,e])=>{e&&(zm(E,e.viewport),zm(S,e.item),zm(B,e.gap),e.scrollTop>0&&(zm(A,!0),Om(Nm(d,Ym(1)),(e=>{zm(A,!1)})),zm(l,{top:e.scrollTop})))})),_m(Nm(E,Pm((({height:e})=>e))),u),_m(Nm(ef(tf(E,_b),tf(S,_b),tf(B,((e,t)=>e&&e.column===t.column&&e.row===t.row)),tf(d)),Pm((([e,t,r,n])=>({gap:r,item:t,scrollTop:n,viewport:e})))),z),_m(Nm(ef(tf($),n,tf(B,Ob),tf(S,_b),tf(E,_b),tf(D),tf(F),tf(A),tf(O),tf(_)),Lm((([,,,,,,,e])=>!e)),Pm((([e,[t,r],n,o,i,s,a,,l,d])=>{const{column:c,row:u}=n,{height:h,width:g}=o,{width:m}=i;if(0===a&&(0===e||0===m))return kb;if(0===g){const t=sp(d,e);return function(e){return{...Ib,items:e}}(Ab(t,t+Math.max(a-1,0),s))}const f=Hb(m,g,c);let p,b;l?0===t&&0===r&&a>0?(p=0,b=a-1):(p=f*Db((t+u)/(h+u)),b=f*Tb((r+u)/(h+u))-1,b=zb(e-1,Bb(b,f-1)),p=zb(b,Bb(0,p))):(p=0,b=-1);const v=Ab(p,b,s),{bottom:y,top:x}=jb(i,n,o,v),w=Tb(e/f);return{bottom:y,itemHeight:h,items:v,itemWidth:g,offsetBottom:w*h+(w-1)*u-y,offsetTop:x,top:x}}))),C),_m(Nm(D,Lm((e=>null!==e)),Pm((e=>e.length))),$),_m(Nm(ef(E,S,C,B),Lm((([e,t,{items:r}])=>r.length>0&&0!==t.height&&0!==e.height)),Pm((([e,t,{items:r},n])=>{const{bottom:o,top:i}=jb(e,n,t,r);return[i,o]})),jm(Af)),t);const j=Gm(!1);_m(Nm(d,qm(j),Pm((([e,t])=>t||0!==e))),j);const L=Xm(Nm(ef(C,$),Lm((([{items:e}])=>e.length>0)),qm(j),Lm((([[e,t],r])=>{const n=e.items[e.items.length-1].index===t-1;return(r||e.bottom>0&&e.itemHeight>0&&0===e.offsetBottom&&e.items.length===t)&&n})),Pm((([[,e]])=>e-1)),jm())),P=Xm(Nm(tf(C),Lm((({items:e})=>e.length>0&&0===e[0].index)),Wm(0),jm())),W=Xm(Nm(tf(C),qm(A),Lm((([{items:e},t])=>e.length>0&&!t)),Pm((([{items:e}])=>({endIndex:e[e.length-1].index,startIndex:e[0].index}))),jm(Mf),Um(0)));_m(W,g.scrollSeekRangeChanged),_m(Nm(k,qm(E,S,$,B),Pm((([e,t,r,n,o])=>{const i=np(e),{align:s,behavior:a,offset:l}=i;let d=i.index;"LAST"===d&&(d=n-1),d=Bb(0,d,zb(n-1,d));let c=Lb(t,o,r,d);return"end"===s?c=Mb(c-t.height+r.height):"center"===s&&(c=Mb(c-t.height/2+r.height/2)),l&&(c+=l),{behavior:a,top:c}}))),l);const N=Zm(Nm(C,Pm((e=>e.offsetBottom+e.bottom))),0);return _m(Nm(x,Pm((e=>({height:e.visibleHeight,width:e.visibleWidth})))),E),{customScrollParent:p,data:D,deviation:T,footerHeight:o,gap:B,headerHeight:i,increaseViewportBy:e,initialItemCount:F,itemDimensions:S,overscan:r,restoreStateFrom:M,scrollBy:s,scrollContainerState:a,scrollHeight:I,scrollTo:l,scrollToIndex:k,scrollTop:d,smoothScrollTargetReached:c,totalCount:$,useWindowScroll:b,viewportDimensions:E,windowScrollContainerState:v,windowScrollTo:y,windowViewportRect:x,...g,gridState:C,horizontalDirection:H,initialTopMostItemIndex:_,totalListHeight:N,...h,endReached:L,propsReady:f,rangeChanged:W,startReached:P,stateChanged:z,stateRestoreInProgress:A,...w}}),Dm(vp,hf,hp,zp,tp,Mp,sf));function Hb(e,t,r){return Bb(1,Db((e+r)/(Db(t)+r)))}function jb(e,t,r,n){const{height:o}=r;if(void 0===o||0===n.length)return{bottom:0,top:0};const i=Lb(e,t,r,n[0].index);return{bottom:Lb(e,t,r,n[n.length-1].index)+o,top:i}}function Lb(e,t,r,n){const o=Hb(e.width,r.width,t.column),i=Db(n/o),s=i*r.height+Bb(0,i-1)*t.row;return s>0?s+t.row:s}const Pb=Km((()=>{const e=Gm((e=>`Item ${e}`)),t=Gm({}),r=Gm(null),n=Gm("virtuoso-grid-item"),o=Gm("virtuoso-grid-list"),i=Gm(Kp),s=Gm("div"),a=Gm(km),l=(e,r=null)=>Zm(Nm(t,Pm((t=>t[e])),jm()),r),d=Gm(!1),c=Gm(!1);return _m(tf(c),d),{components:t,computeItemKey:i,context:r,FooterComponent:l("Footer"),HeaderComponent:l("Header"),headerFooterTag:s,itemClassName:n,ItemComponent:l("Item","div"),itemContent:e,listClassName:o,ListComponent:l("List","div"),readyStateChanged:d,reportReadyState:c,ScrollerComponent:l("Scroller","div"),scrollerRef:a,ScrollSeekPlaceholder:l("ScrollSeekPlaceholder","div")}})),Wb=Km((([e,t])=>({...e,...t})),Dm(Rb,Pb)),Nb=o.memo((function(){const e=Xb("gridState"),r=Xb("listClassName"),n=Xb("itemClassName"),i=Xb("itemContent"),s=Xb("computeItemKey"),a=Xb("isSeeking"),l=Kb("scrollHeight"),d=Xb("ItemComponent"),c=Xb("ListComponent"),u=Xb("ScrollSeekPlaceholder"),h=Xb("context"),g=Kb("itemDimensions"),m=Kb("gap"),f=Xb("log"),p=Xb("stateRestoreInProgress"),v=Kb("reportReadyState"),y=af(o.useMemo((()=>e=>{const t=e.parentElement.parentElement.scrollHeight;l(t);const r=e.firstChild;if(r){const{height:e,width:t}=r.getBoundingClientRect();g({height:e,width:t})}m({column:tv("column-gap",getComputedStyle(e).columnGap,f),row:tv("row-gap",getComputedStyle(e).rowGap,f)})}),[l,g,m,f]),!0,!1);return qp((()=>{e.itemHeight>0&&e.itemWidth>0&&v(!0)}),[e]),p?null:t(c,{className:r,ref:y,...cb(c,h),"data-testid":"virtuoso-item-list",style:{paddingBottom:e.offsetBottom,paddingTop:e.offsetTop},children:e.items.map((r=>{const o=s(r.index,r.data,h);return a?t(u,{...cb(u,h),height:e.itemHeight,index:r.index,width:e.itemWidth},o):b(d,{...cb(d,h),className:n,"data-index":r.index,key:o},i(r.index,r.data,h))}))})})),Vb=o.memo((function(){const e=Xb("HeaderComponent"),r=Kb("headerHeight"),n=Xb("headerFooterTag"),i=af(o.useMemo((()=>e=>{r(Hf(e,"height"))}),[r]),!0,!1),s=Xb("context");return e?t(n,{ref:i,children:t(e,{...cb(e,s)})}):null})),Yb=o.memo((function(){const e=Xb("FooterComponent"),r=Kb("footerHeight"),n=Xb("headerFooterTag"),i=af(o.useMemo((()=>e=>{r(Hf(e,"height"))}),[r]),!0,!1),s=Xb("context");return e?t(n,{ref:i,children:t(e,{...cb(e,s)})}):null})),Ub=({children:e})=>{const r=o.useContext(Up),n=Kb("itemDimensions"),i=Kb("viewportDimensions"),s=af(o.useMemo((()=>e=>{i(e.getBoundingClientRect())}),[i]),!0,!1);return o.useEffect((()=>{r&&(i({height:r.viewportHeight,width:r.viewportWidth}),n({height:r.itemHeight,width:r.itemWidth}))}),[r,i,n]),t("div",{ref:s,style:lb(!1),children:e})},qb=({children:e})=>{const r=o.useContext(Up),n=Kb("windowViewportRect"),i=Kb("itemDimensions"),s=Xb("customScrollParent"),a=uf(n,s,!1);return o.useEffect((()=>{r&&(i({height:r.itemHeight,width:r.itemWidth}),n({offsetTop:0,visibleHeight:r.viewportHeight,visibleWidth:r.viewportWidth}))}),[r,n,i]),t("div",{ref:a,style:lb(!1),children:e})},Gb=o.memo((function({...r}){const n=Xb("useWindowScroll"),o=Xb("customScrollParent"),i=o||n?ev:Jb,s=o||n?qb:Ub,a=Xb("context");return t(i,{...r,...cb(i,a),children:e(s,{children:[t(Vb,{}),t(Nb,{}),t(Yb,{})]})})})),{Component:Zb,useEmitter:Qb,useEmitterValue:Xb,usePublisher:Kb}=Vp(Wb,{events:{atBottomStateChange:"atBottomStateChange",atTopStateChange:"atTopStateChange",endReached:"endReached",isScrolling:"isScrolling",rangeChanged:"rangeChanged",readyStateChanged:"readyStateChanged",startReached:"startReached",stateChanged:"stateChanged"},methods:{scrollBy:"scrollBy",scrollTo:"scrollTo",scrollToIndex:"scrollToIndex"},optional:{components:"components",computeItemKey:"computeItemKey",context:"context",customScrollParent:"customScrollParent",data:"data",headerFooterTag:"headerFooterTag",increaseViewportBy:"increaseViewportBy",initialItemCount:"initialItemCount",initialTopMostItemIndex:"initialTopMostItemIndex",itemClassName:"itemClassName",itemContent:"itemContent",listClassName:"listClassName",logLevel:"logLevel",overscan:"overscan",restoreStateFrom:"restoreStateFrom",scrollerRef:"scrollerRef",scrollSeekConfiguration:"scrollSeekConfiguration",totalCount:"totalCount",useWindowScroll:"useWindowScroll"}},Gb),Jb=mb({useEmitter:Qb,useEmitterValue:Xb,usePublisher:Kb}),ev=fb({useEmitter:Qb,useEmitterValue:Xb,usePublisher:Kb});function tv(e,t,r){return"normal"!==t&&!(null!=t&&t.endsWith("px"))&&r(`${e} was not resolved to pixel value correctly`,t,nf.WARN),"normal"===t?0:parseInt(null!=t?t:"0",10)}const rv=o.createContext({focusedIndex:-1,setFocusedIndex:()=>{}}),nv=({children:e})=>{const[r,n]=a(-1);return t(rv.Provider,{value:{focusedIndex:r,setFocusedIndex:n},children:e})},ov=x.div`
    overflow: hidden;
    border: ${Sn["width-010"]} ${Sn.solid} ${Fn.border};
    border-radius: ${In.sm};
    background: ${Fn.bg};

    min-width: 23rem;
    ${e=>e.$width&&`width: ${e.$width}px;`}
    max-height: 27rem;
    overflow-y: auto;

    ${e=>"small"===e.$variant?Cn["body-md-regular"]:Cn["body-baseline-regular"]}

    ${Dn.MaxWidth.sm} {
        min-width: unset;
        width: calc(100vw - ${Tn["sm-margin"]} * 2);
        max-height: 15rem;
    }

    ${Dn.MaxWidth.xs} {
        width: calc(100vw - ${Tn["xs-margin"]} * 2);
    }

    ${Dn.MaxWidth.xxs} {
        width: calc(100vw - ${Tn["xxs-margin"]} * 2);
    }

    ::-webkit-scrollbar {
        width: 14px;
    }

    ::-webkit-scrollbar-track {
        background: transparent;
    }

    ::-webkit-scrollbar-thumb {
        background: ${Fn["bg-inverse-subtlest"]};
        border: 5px solid transparent;
        border-radius: 9999px;
        background-clip: padding-box;
    }
`,iv=x.div`
    background: transparent;
    padding: ${kn["spacing-8"]};
`,sv=x.ul`
    list-style-type: none;
`,av=x.li`
    display: flex;
    align-items: flex-start;
    gap: ${kn["spacing-8"]};
    padding: ${kn["spacing-12"]} ${kn["spacing-8"]};
    cursor: pointer;

    outline: none;

    ${e=>e.$active&&e.$selected?w`
                background: ${Fn["bg-hover"]};
            `:e.$active?w`
                background: ${Fn["bg-hover-subtle"]};
            `:void 0}
`,lv=x(L)`
    flex-shrink: 0;
    height: 1lh;
    width: 1rem;
    color: ${Fn["icon-selected"]};
`,dv=x.div`
    flex-shrink: 0;
    height: 1lh;
    width: 1rem;
`,cv=x(j)`
    flex-shrink: 0;
    height: 1lh;
    width: 1lh;
    color: ${Fn["icon-selected"]};
`,uv=x(H)`
    flex-shrink: 0;
    height: 1lh;
    width: 1lh;
    color: ${Fn["icon-primary-subtlest"]};
`,hv=x.div`
    width: 100%;
    display: flex;
    justify-content: flex-end;
`,gv=x(Vn)`
    cursor: pointer;
    overflow: hidden;
    color: ${Fn["text-primary"]};
    font-size: inherit;
`,mv=x(gv)`
    ${Cn["body-baseline-semibold"]}
`,fv=x(gv)`
    ${Cn["body-md-semibold"]}
    padding: ${kn["spacing-8"]} ${kn["spacing-8"]};
`,pv=x.div`
    width: 100%;
    display: flex;
    padding: ${kn["spacing-12"]} ${kn["spacing-16"]};
    align-items: center;
`,bv=x(D)`
    margin-right: ${kn["spacing-4"]};
    color: ${Fn["icon-error"]};
    height: 1em;
    width: 1em;
`,vv=x(Rl)`
    margin-right: ${kn["spacing-8"]};
    color: ${Fn.icon};
`,yv=x.div`
    background: ${Fn["bg-strong"]};
    border-radius: ${In.sm};
    display: flex;
    align-items: center;

    ${e=>"small"===e.$variant?Cn["body-md-regular"]:Cn["body-baseline-regular"]}
`,xv=x.label`
    flex: 1;
    display: flex;
    align-items: center;
    gap: ${kn["spacing-8"]};
    padding: ${e=>"small"===e.$variant?w`
                  ${kn["spacing-8"]} ${kn["spacing-16"]}
              `:w`10px ${kn["spacing-16"]}`};
`,wv=x(Nn)`
    flex: 1;
`,$v=x(P)`
    color: ${Fn.icon};
    flex-shrink: 0;
    height: 1em;
    width: 1em;
`,Fv=x(sc)`
    flex-shrink: 0;
    align-self: stretch;
    box-sizing: content-box;
    padding: ${kn["spacing-8"]};
    margin-left: -${kn["spacing-8"]};
    color: ${Fn.icon};
    cursor: pointer;
    font-size: inherit;

    svg {
        flex-shrink: 0;
        height: 1em;
        width: 1em;
    }
`,Cv=g(((r,n)=>{var{value:o,variant:i,onClear:s}=r,a=ne(r,["value","variant","onClear"]);return e(yv,{$variant:i,children:[e(xv,{$variant:i,children:[t($v,{"aria-hidden":!0}),t(wv,Object.assign({ref:n,value:o,$variant:i},a))]}),o&&t(Fv,{"aria-label":"Clear search",focusOutline:"browser",onClick:s,children:t(R,{"aria-hidden":!0})})]})})),Ev=({listItems:n,multiSelect:o,selectedItems:l,disableItemFocus:d,itemsLoadState:c="success",itemTruncationType:u="end",itemMaxLines:h=2,labelDisplayType:g="inline",variant:p="default",listboxId:b,width:v,topScrollItem:y,onSelectItem:x,onSelectAll:w,onDismiss:$,onRetry:F,valueExtractor:C,listExtractor:E,renderListItem:S,renderCustomCallToAction:k,enableSearch:I,hideNoResultsDisplay:T,searchPlaceholder:D="Search",searchFunction:B,onSearch:z})=>{const{focusedIndex:M,setFocusedIndex:A}=f(rv),[_,O]=a(""),[R,H]=a(null!=n?n:[]),j=$d(c),L=(()=>{const[e,t]=a(!1);return s((()=>{t(!0)}),[]),e})(),P=i(null),W=i(null),N=i([]),V=i(null),Y=i(null),U=e=>{const t=E?E(e):null==e?void 0:e.toString();return"object"==typeof t?{title:t.title,secondaryLabel:t.secondaryLabel}:{title:null!=t?t:""}},q=m((e=>!!vm(l,(t=>xm(t,e)))),[l]),G=wd((()=>null==B?void 0:B(_))),Z=wd((()=>null==n?void 0:n.filter((e=>{const{title:t,secondaryLabel:r}=U(e),n=_.trim().toLowerCase();return t.includes(n)||r&&r.includes(n)})))),Q=(e,t)=>{A(t),null==x||x(e,(e=>C?C(e):e)(e))},X=e=>{const t=e.target.value;O(t),null==z||z()},K=()=>{var e;O(""),null===(e=V.current)||void 0===e||e.focus(),null==z||z()},J=()=>{null==F||F()};oe("keydown",(e=>{var t,r;switch(e.code){case"ArrowDown":if(e.preventDefault(),M<R.length-1){const e=M+1;null===(t=N.current[e])||void 0===t||t.focus(),A(e)}break;case"ArrowUp":if(e.preventDefault(),M>0){const e=M-1;null===(r=N.current[e])||void 0===r||r.focus(),A(e)}else 0===M&&V.current&&(V.current.focus(),A(-1));break;case"Space":case"Enter":document.activeElement===N.current[M]&&(e.preventDefault(),R[M]&&Q(R[M],M))}})),s((()=>{var e;if(!y)return void(null===(e=Y.current)||void 0===e||e.scrollTo({top:0}));const t=setTimeout((()=>{if(!n)return;const e=n.indexOf(y);Y.current&&-1!==e&&(Y.current.scrollToIndex({index:e}),A(e))}),0);return()=>clearTimeout(t)}),[N,n,A,y]),s((()=>{var e,t,r;if(L)return;if(d||!n)return;const o=n.findIndex((e=>q(e)));V.current?(A(-1),setTimeout((()=>{var e;return null===(e=V.current)||void 0===e?void 0:e.focus()}),200)):M>0?(null===(e=Y.current)||void 0===e||e.scrollToIndex({index:M,align:"center"}),setTimeout((()=>{var e;return null===(e=N.current[M])||void 0===e?void 0:e.focus()}),200)):-1!==o?(null===(t=Y.current)||void 0===t||t.scrollToIndex({index:o,align:"center"}),A(o),setTimeout((()=>{var e;return null===(e=N.current[o])||void 0===e?void 0:e.focus()}),200)):(null===(r=Y.current)||void 0===r||r.scrollToIndex({index:0}),A(0),setTimeout((()=>{var e;return null===(e=N.current[0])||void 0===e?void 0:e.focus()}),200))}),[q,d,M,n,L,A]),s((()=>{L&&j&&(d||"success"===c&&V.current&&(A(-1),V.current.focus()))}),[L,j,c,A,d]),s((()=>{var e;H(null!==(e=""===_?n:B?G():Z())&&void 0!==e?e:[])}),[G,Z,n,B,_]);const ee=e=>o?t(e?cv:uv,{"aria-hidden":!0}):e?t(lv,{"aria-hidden":!0}):t(dv,{}),te=(e,r)=>{const{title:n,secondaryLabel:o}=U(e);return t(Lc,{displayType:g,label:n,maxLines:h,selected:r,sublabel:o,truncationType:u,variant:p})},re=(n,i)=>{if(!F||"success"===c){const s=q(n),a=i===M;return t(av,{"aria-selected":s,"aria-multiselectable":o,"data-testid":"list-item",onClick:()=>Q(n,i),onMouseEnter:()=>(e=>{A(e)})(i),ref:e=>{N.current[i]=e},role:"option",tabIndex:a?0:-1,$active:a,$selected:s,children:S?S(n,{selected:s}):e(r,{children:[ee(s),te(n,s)]})},((e,t)=>`item_${t}__${C?C(e):e}`)(n,i))}},ne=()=>{if(l&&o&&R.length>0&&!_&&"success"===c)return t(hv,{children:t(fv,{onClick:w,type:"button",$variant:p,children:0===l.length?"Select all":"Clear all"})})},ie=()=>{if(!T&&(_||!I)&&0===R.length&&"success"===c)return e(pv,{"data-testid":"list-no-results",children:[t(bv,{"data-testid":"no-result-icon"}),"No results found."]})},se=()=>{if(F&&"loading"===c)return e(pv,{"data-testid":"list-loading",children:[t(vv,{}),"Loading..."]})},ae=()=>{if(F&&"fail"===c)return e(pv,{"data-testid":"list-fail",children:[t(bv,{"data-testid":"load-error-icon"}),"Failed to load. ",t(mv,{onClick:J,type:"button",$variant:p,children:"Try again."})]})},le=()=>{var e;const r="test"===process.env.NODE_ENV;return t(sv,{role:"listbox",id:b,children:t(Sb,Object.assign({ref:Y,style:{height:"100%"},data:R,customScrollParent:null!==(e=P.current)&&void 0!==e?e:void 0,itemContent:(e,t)=>re(t,e)},r?{initialItemCount:R.length}:{}),r?R.length:void 0)})};return e(ov,{"data-testid":"dropdown-container",ref:P,$width:v,$variant:p,children:[e(iv,{ref:W,"data-testid":"dropdown-list",children:[(()=>{if((I||B)&&"success"===c)return t(Cv,{ref:V,onChange:X,value:_,placeholder:D,"data-testid":"search-input","aria-label":"Enter text to search",onClear:K,variant:p})})(),ne(),ie(),se(),ae(),le()]}),(()=>{if(k)return t("div",{"data-testid":"custom-cta",children:k($,R)})})()]})},Sv=x(Vn)`
    display: flex;
    align-items: center;
    gap: ${kn["spacing-8"]};
    width: 100%;
    height: calc(3rem - 2px); // exclude top and bottom borders
    padding: ${kn["spacing-16"]};

    ${e=>"small"===e.$variant?Cn["body-md-regular"]:Cn["body-baseline-regular"]}

    :disabled {
        cursor: not-allowed;
    }
`,kv=x.div`
    display: flex;
    align-items: center;
    transform: rotate(${e=>e.$expanded?180:0}deg);
    transition: transform ${En["duration-250"]} ${En["ease-default"]};

    svg {
        color: ${Fn.icon};
        height: 1em;
        width: 1em;
    }
`;var Iv;g((({children:r,disabled:n,expanded:o,listboxId:i,popupRole:s,readOnly:a,variant:l},d)=>e(Sv,{ref:d,type:"button","aria-expanded":o,"aria-haspopup":s,"data-testid":"selector",disabled:n,"aria-controls":i,$variant:l,children:[r,!a&&t(kv,{$expanded:o,$variant:l,children:t(C,{"aria-hidden":!0})})]}))),x.li`
    display: ${e=>e.$visible?"flex":"none"};
`,x.div`
    flex: 1;
    display: flex;
    align-items: flex-start;
    gap: ${kn["spacing-8"]};
    padding: ${kn["spacing-12"]} ${kn["spacing-8"]};
    cursor: ${e=>e.$toggleable?"default":"pointer"};
    overflow: hidden; // required for label to truncate properly

    outline: none;

    ${e=>e.$active&&w`
            background: ${Fn["bg-hover"]};
        `}
`,x.div`
    height: 1px;
    width: calc((1lh + ${kn["spacing-8"]}) * ${e=>e.$level});
`,x.div`
    width: 1lh;
    height: 1lh;
    color: ${Fn["icon-primary"]};
    cursor: pointer;

    svg {
        width: 1lh;
        height: 1lh;
        transition: transform ${En["duration-350"]}
            ${En["ease-standard"]};

        ${e=>{if(e.$expanded)return w`
                    transform: rotate(90deg);
                `}}
    }
`,x.div`
    width: 1lh;
    height: 1lh;
    margin-right: ${kn["spacing-8"]};
`,x.div`
    flex-shrink: 0;
    height: 1lh;
    width: ${e=>e.$hasNestedSiblings?"1lh":kn["spacing-16"]};

    display: flex;
    justify-content: center;
`,x(W)`
    flex-shrink: 0;
    height: 1lh;
    width: 1lh;
    color: ${Fn["icon-selected"]};
`,function(e){e.Ready="overlay-context-ready",e.Change="overlay-context-change"}(Iv||(Iv={}));const Tv=x.div`
    display: flex;
    flex-direction: column;
`,Dv=e=>"right"===e?"bottom-end":"bottom-start",Bv=({enabled:n,isOpen:o,onOpen:l,onClose:d,onDismiss:c,renderElement:u,renderDropdown:h,customZIndex:g,clickToToggle:m=!1,offset:f=0,alignment:p="left",fitAvailableHeight:b})=>{var v;const y=F(),x=Tn["sm-max"]({theme:y}),w=i(null),$=i(null),{width:C=0}=Ko({targetRef:w,handleHeight:!1}),E={name:"center",fn:({x:e,rects:t})=>{const r=0===e||e+t.floating.width===window.innerWidth,n=window.innerWidth<x;return{x:r&&n?(window.innerWidth-t.floating.width)/2:e}}},{refs:S,floatingStyles:k,context:I}=V({open:o,onOpenChange:(e,t,r)=>{"escape-key"===r?null==c||c():e&&!o?null==l||l():!e&&o&&(null==d||d(r))},whileElementsMounted:Y,placement:Dv(p),middleware:[U(f),q(),G({limiter:Z()}),Q({apply({availableHeight:e}){$.current&&Object.assign($.current.style,{maxHeight:b?`${e}px`:void 0,overflowY:b?"hidden":void 0})}}),E]}),T=(()=>{const[e,t]=a(void 0),r=N();return s((()=>{if(!r)return void t(void 0);const e=e=>{t(e.zIndex)};return r.events.on(Iv.Change,e),r.events.emit(Iv.Ready),()=>r.events.off(Iv.Change,e)}),[r]),e})(),{isMounted:D,styles:B}=X(I,{initial:{opacity:0},open:{opacity:1},duration:300}),z=K(I,{enabled:n,toggle:m}),M=J(I,{enabled:n}),{getReferenceProps:A,getFloatingProps:_}=ee([z,M]);return e(r,{children:[t("div",Object.assign({ref:e=>{w.current=e,S.setReference(e)}},A(),{children:u()})),D&&t(te,{children:t(re,{context:I,modal:!1,initialFocus:$,returnFocus:!1,children:t("div",Object.assign({ref:S.setFloating,style:Object.assign(Object.assign({},k),{zIndex:null!==(v=null!=g?g:T)&&void 0!==v?v:50})},_(),{children:t(Tv,{ref:$,style:Object.assign({},B),inert:B.opacity<1?"":void 0,children:h({elementWidth:C})})}))})})]})},zv=x(Wn)`
    height: 3rem;
    gap: ${kn["spacing-8"]};
    // space for clear icon
    padding-right: calc(1.25rem + ${kn["spacing-20"]});
`,Mv=r=>{var{id:n,disabled:o=!1,error:l,value:d,format:c="12hr",readOnly:u,onChange:h,onFocus:g,onBlur:f,alignment:b="left",dropdownZIndex:v,startLimit:y,endLimit:x,interval:w=15}=r,$=ne(r,["id","disabled","error","value","format","readOnly","onChange","onFocus","onBlur","alignment","dropdownZIndex","startLimit","endLimit","interval"]);const[F]=a((()=>xd.generate())),[C,E]=a(null),[S,k]=a(!1),[I,T]=a(""),[D,B]=a(""),[z,M]=a(""),[A,_]=a(""),[O,R]=a(""),H=i(null),j=i(null),L=i(null),P=p((()=>Xn.generateTimings(w,c,y,x)),[w,c,y,x]),W=p((()=>{if(""===A)return P;const e=Xn.findClosestFlooredTime(A,P);return e?P.slice(P.indexOf(e)):[]}),[P,A]),N=m((e=>Xn.parseInput(e,c)),[c]);s((()=>{var e,t;if(d){const r=null!==(e=N(d.start))&&void 0!==e?e:"",n=null!==(t=N(d.end))&&void 0!==t?t:"";B(r),M(n),_(r),R(n)}}),[d,N]),s((()=>{if(l)return void k(!1);const e=N(D),t=N(z);if(void 0===e)T("Invalid start time");else if(void 0===t)T("Invalid end time");else{if(!(""!==e&&""!==t&&Xn.to24Hour(t)<Xn.to24Hour(e)))return T(""),void(document.activeElement!==j.current&&document.activeElement!==L.current||k(!0));T("End time must be after start time")}k(!1)}),[D,z,N,l]);const V=e=>{o||u||(C||S||null==g||g(),E(e),k(!0))},Y=e=>{var t;o||u||(E(e),k(!0),null===(t=("start"===e?j:L).current)||void 0===t||t.select())};function U(e){var t;switch(e.code){case"Enter":"start"===C?q(D):"end"===C&&(S&&G(z),null===(t=L.current)||void 0===t||t.blur());break;case"Tab":Z(D,z,{})}}const q=e=>{Z(e,z,{goToNextInput:!0})},G=e=>{Z(D,e,{triggerOnBlur:!0})},Z=(e,t,{goToNextInput:r,triggerOnBlur:n})=>{var o,i,s;const a=null!==(o=N(e))&&void 0!==o?o:A,l=null!==(i=N(t))&&void 0!==i?i:O;B(a),M(l);a===A&&l===O||null==h||h({start:a,end:l}),r&&void 0!==N(e)&&(E("end"),null===(s=L.current)||void 0===s||s.select()),n&&(E(null),k(!1),null==f||f()),_(a),R(l)},Q=e=>{e.stopPropagation(),B(""),M(""),_(""),R("");null==h||h({start:"",end:""}),E(null),k(!1)},X=e=>{H.current&&!H.current.contains(e.relatedTarget)&&C&&!S&&Z(D,z,{triggerOnBlur:!0})},K=()=>{if(!u&&!o&&((null==D?void 0:D.length)>0||(null==z?void 0:z.length)>0))return t(Mc,{onClick:Q,type:"button","aria-label":"Clear",children:t(kc,{"aria-hidden":!0})})};return e(Yn,Object.assign({id:n},$,{children:[t(nv,{children:t(Bv,{enabled:!u&&!o,isOpen:S,renderElement:()=>e(zv,{ref:H,$disabled:o,$error:l||!!I,$readOnly:u,onBlur:X,children:[e(On,{error:l||!!I,currentActive:null===C?"none":C,children:[t(qn,{ref:j,onFocus:()=>V("start"),placeholder:"start"===C?"hh:mm":"From",onChange:e=>B(e.target.value),value:D,disabled:o,readOnly:u,"data-testid":$["data-testid"]?`${$["data-testid"]}-timepicker-selector`:"timepicker-selector",onClick:()=>Y("start"),onKeyDown:U,autoComplete:"off","aria-label":"Start time input",type:"text",role:"combobox","aria-expanded":S,"aria-controls":F,"aria-autocomplete":"list"}),t(qn,{ref:L,onFocus:()=>V("end"),placeholder:"end"===C?"hh:mm":"To",onChange:e=>M(e.target.value),value:z,disabled:o,readOnly:u,"data-testid":$["data-testid"]?`${$["data-testid"]}-timepicker-selector`:"timepicker-selector",onClick:()=>Y("end"),onKeyDown:U,autoComplete:"off","aria-label":"End time input",type:"text",role:"combobox","aria-expanded":S,"aria-controls":F,"aria-autocomplete":"list"})]}),K()]}),renderDropdown:()=>{if(S)return t(Ev,"start"===C?{listItems:P,onSelectItem:q,selectedItems:[D],disableItemFocus:!0,topScrollItem:Xn.findClosestFlooredTime(N(D),P),listboxId:F}:{listItems:W,onSelectItem:G,selectedItems:[z],disableItemFocus:!0,topScrollItem:Xn.findClosestFlooredTime(N(z),W),listboxId:F})},onClose:e=>{"outside-press"===e?(E(null),k(!1),null==f||f()):Z(D,z,{triggerOnBlur:!0})},onDismiss:()=>{var e;null===(e=("start"===C?j:L).current)||void 0===e||e.focus(),k(!1)},offset:8,alignment:b,fitAvailableHeight:!0,customZIndex:v})}),!l&&I&&t(Ec,{id:n?`${n}-error-message`:"error-message",tabIndex:0,"data-testid":n?`${n}-error-message`:"error-message",children:I})]}))},Av=e=>{var{variant:r="dial"}=e,n=ne(e,["variant"]);return t("combobox"===r?Mv:Cc,Object.assign({},n))};export{Av as TimeRangePicker};
//# sourceMappingURL=index.js.map
