import{jsxs as e,jsx as t,Fragment as r}from"react/jsx-runtime";import{ChevronDownIcon as n,FilterIcon as i,CrossIcon as o}from"@lifesg/react-icons";import a,{keyframes as s,css as l}from"styled-components";import*as d from"react";import c,{useRef as u,useState as h,isValidElement as m,createRef as f,cloneElement as g,PureComponent as p,useEffect as b,useLayoutEffect as y,forwardRef as v,useCallback as x,useContext as w,useMemo as F}from"react";import{ExternalIcon as $}from"@lifesg/react-icons/external";import S,{findDOMNode as D,unstable_batchedUpdates as E}from"react-dom";import{ICircleFillIcon as C}from"@lifesg/react-icons/i-circle-fill";import{useFloatingTree as B,FloatingTree as O,useFloatingNodeId as k,FloatingNode as _,useFloating as A,autoUpdate as z,offset as j,flip as M,shift as P,limitShift as T,useClick as H,useDismiss as I,useHover as R,useInteractions as L,FloatingPortal as W,FloatingFocusManager as N}from"@floating-ui/react";import{CrossIcon as V}from"@lifesg/react-icons/cross";import{ChevronDownIcon as Y}from"@lifesg/react-icons/chevron-down";import{CircleIcon as q}from"@lifesg/react-icons/circle";import{CircleDotIcon as Q}from"@lifesg/react-icons/circle-dot";import{SquareIcon as U}from"@lifesg/react-icons/square";import{SquareTickFillIcon as J}from"@lifesg/react-icons/square-tick-fill";import{TickIcon as X}from"@lifesg/react-icons/tick";import{ChevronUpIcon as Z}from"@lifesg/react-icons/chevron-up";import{ArrowRightIcon as G}from"@lifesg/react-icons/arrow-right";import{ExclamationCircleFillIcon as K}from"@lifesg/react-icons/exclamation-circle-fill";import{ExclamationTriangleFillIcon as ee}from"@lifesg/react-icons/exclamation-triangle-fill";import{TickCircleFillIcon as te}from"@lifesg/react-icons/tick-circle-fill";import{ChevronLeftIcon as re}from"@lifesg/react-icons/chevron-left";function ne(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(n=Object.getOwnPropertySymbols(e);i<n.length;i++)t.indexOf(n[i])<0&&Object.prototype.propertyIsEnumerable.call(e,n[i])&&(r[n[i]]=e[n[i]])}return r}"function"==typeof SuppressedError&&SuppressedError;const ie=a.div`
    display: inline-block;
    position: relative;
    width: ${({$size:e})=>e?`${e}px`:"1em"};
    height: ${({$size:e})=>e?`${e}px`:"1em"};
    color: ${e=>e.$color||"currentColor"};
`,oe=s`
	0% {
	  transform: rotate(0deg);
	}
	100% {
	  transform: rotate(360deg);
	}
`,ae=a.div`
    box-sizing: border-box;
    display: block;
    position: absolute;
    width: 100%;
    height: 100%;
    border-width: 2px;
    border-style: solid;
    border-radius: 50%;
    border-color: currentColor transparent transparent transparent;
    animation: ${oe} 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
`,se=a(ae)`
    animation-delay: -0.45s;
`,le=a(ae)`
    animation-delay: -0.3s;
`,de=a(ae)`
    animation-delay: -0.15s;
`;var ce="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};function ue(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var he=Array.isArray,me="object"==typeof ce&&ce&&ce.Object===Object&&ce,fe="object"==typeof self&&self&&self.Object===Object&&self,ge=me||fe||Function("return this")(),pe=ge.Symbol,be=pe,ye=Object.prototype,ve=ye.hasOwnProperty,xe=ye.toString,we=be?be.toStringTag:void 0;var Fe=function(e){var t=ve.call(e,we),r=e[we];try{e[we]=void 0;var n=!0}catch(e){}var i=xe.call(e);return n&&(t?e[we]=r:delete e[we]),i},$e=Object.prototype.toString;var Se=Fe,De=function(e){return $e.call(e)},Ee=pe?pe.toStringTag:void 0;var Ce=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":Ee&&Ee in Object(e)?Se(e):De(e)};var Be=Ce,Oe=function(e){return null!=e&&"object"==typeof e};var ke=function(e){return"symbol"==typeof e||Oe(e)&&"[object Symbol]"==Be(e)},_e=he,Ae=ke,ze=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,je=/^\w*$/;var Me=function(e,t){if(_e(e))return!1;var r=typeof e;return!("number"!=r&&"symbol"!=r&&"boolean"!=r&&null!=e&&!Ae(e))||(je.test(e)||!ze.test(e)||null!=t&&e in Object(t))};var Pe=function(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)},Te=Ce,He=Pe;var Ie,Re=function(e){if(!He(e))return!1;var t=Te(e);return"[object Function]"==t||"[object GeneratorFunction]"==t||"[object AsyncFunction]"==t||"[object Proxy]"==t},Le=ge["__core-js_shared__"],We=(Ie=/[^.]+$/.exec(Le&&Le.keys&&Le.keys.IE_PROTO||""))?"Symbol(src)_1."+Ie:"";var Ne=function(e){return!!We&&We in e},Ve=Function.prototype.toString;var Ye=Re,qe=Ne,Qe=Pe,Ue=function(e){if(null!=e){try{return Ve.call(e)}catch(e){}try{return e+""}catch(e){}}return""},Je=/^\[object .+?Constructor\]$/,Xe=Function.prototype,Ze=Object.prototype,Ge=Xe.toString,Ke=Ze.hasOwnProperty,et=RegExp("^"+Ge.call(Ke).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");var tt=function(e){return!(!Qe(e)||qe(e))&&(Ye(e)?et:Je).test(Ue(e))},rt=function(e,t){return null==e?void 0:e[t]};var nt=function(e,t){var r=rt(e,t);return tt(r)?r:void 0},it=nt(Object,"create"),ot=it;var at=function(){this.__data__=ot?ot(null):{},this.size=0};var st=function(e){var t=this.has(e)&&delete this.__data__[e];return this.size-=t?1:0,t},lt=it,dt=Object.prototype.hasOwnProperty;var ct=function(e){var t=this.__data__;if(lt){var r=t[e];return"__lodash_hash_undefined__"===r?void 0:r}return dt.call(t,e)?t[e]:void 0},ut=it,ht=Object.prototype.hasOwnProperty;var mt=it;var ft=at,gt=st,pt=ct,bt=function(e){var t=this.__data__;return ut?void 0!==t[e]:ht.call(t,e)},yt=function(e,t){var r=this.__data__;return this.size+=this.has(e)?0:1,r[e]=mt&&void 0===t?"__lodash_hash_undefined__":t,this};function vt(e){var t=-1,r=null==e?0:e.length;for(this.clear();++t<r;){var n=e[t];this.set(n[0],n[1])}}vt.prototype.clear=ft,vt.prototype.delete=gt,vt.prototype.get=pt,vt.prototype.has=bt,vt.prototype.set=yt;var xt=vt;var wt=function(){this.__data__=[],this.size=0};var Ft=function(e,t){return e===t||e!=e&&t!=t};var $t=function(e,t){for(var r=e.length;r--;)if(Ft(e[r][0],t))return r;return-1},St=$t,Dt=Array.prototype.splice;var Et=$t;var Ct=$t;var Bt=$t;var Ot=wt,kt=function(e){var t=this.__data__,r=St(t,e);return!(r<0)&&(r==t.length-1?t.pop():Dt.call(t,r,1),--this.size,!0)},_t=function(e){var t=this.__data__,r=Et(t,e);return r<0?void 0:t[r][1]},At=function(e){return Ct(this.__data__,e)>-1},zt=function(e,t){var r=this.__data__,n=Bt(r,e);return n<0?(++this.size,r.push([e,t])):r[n][1]=t,this};function jt(e){var t=-1,r=null==e?0:e.length;for(this.clear();++t<r;){var n=e[t];this.set(n[0],n[1])}}jt.prototype.clear=Ot,jt.prototype.delete=kt,jt.prototype.get=_t,jt.prototype.has=At,jt.prototype.set=zt;var Mt=jt,Pt=nt(ge,"Map"),Tt=xt,Ht=Mt,It=Pt;var Rt=function(e){var t=typeof e;return"string"==t||"number"==t||"symbol"==t||"boolean"==t?"__proto__"!==e:null===e};var Lt=function(e,t){var r=e.__data__;return Rt(t)?r["string"==typeof t?"string":"hash"]:r.map},Wt=Lt;var Nt=Lt;var Vt=Lt;var Yt=Lt;var qt=function(){this.size=0,this.__data__={hash:new Tt,map:new(It||Ht),string:new Tt}},Qt=function(e){var t=Wt(this,e).delete(e);return this.size-=t?1:0,t},Ut=function(e){return Nt(this,e).get(e)},Jt=function(e){return Vt(this,e).has(e)},Xt=function(e,t){var r=Yt(this,e),n=r.size;return r.set(e,t),this.size+=r.size==n?0:1,this};function Zt(e){var t=-1,r=null==e?0:e.length;for(this.clear();++t<r;){var n=e[t];this.set(n[0],n[1])}}Zt.prototype.clear=qt,Zt.prototype.delete=Qt,Zt.prototype.get=Ut,Zt.prototype.has=Jt,Zt.prototype.set=Xt;var Gt=Zt;function Kt(e,t){if("function"!=typeof e||null!=t&&"function"!=typeof t)throw new TypeError("Expected a function");var r=function(){var n=arguments,i=t?t.apply(this,n):n[0],o=r.cache;if(o.has(i))return o.get(i);var a=e.apply(this,n);return r.cache=o.set(i,a)||o,a};return r.cache=new(Kt.Cache||Gt),r}Kt.Cache=Gt;var er=Kt;var tr=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,rr=/\\(\\)?/g,nr=function(e){var t=er(e,(function(e){return 500===r.size&&r.clear(),e})),r=t.cache;return t}((function(e){var t=[];return 46===e.charCodeAt(0)&&t.push(""),e.replace(tr,(function(e,r,n,i){t.push(n?i.replace(rr,"$1"):r||e)})),t}));var ir=function(e,t){for(var r=-1,n=null==e?0:e.length,i=Array(n);++r<n;)i[r]=t(e[r],r,e);return i},or=he,ar=ke,sr=pe?pe.prototype:void 0,lr=sr?sr.toString:void 0;var dr=function e(t){if("string"==typeof t)return t;if(or(t))return ir(t,e)+"";if(ar(t))return lr?lr.call(t):"";var r=t+"";return"0"==r&&1/t==-1/0?"-0":r},cr=dr;var ur=he,hr=Me,mr=nr,fr=function(e){return null==e?"":cr(e)};var gr=ke;var pr=function(e,t){return ur(e)?e:hr(e,t)?[e]:mr(fr(e))},br=function(e){if("string"==typeof e||gr(e))return e;var t=e+"";return"0"==t&&1/e==-1/0?"-0":t};var yr=function(e,t){for(var r=0,n=(t=pr(t,e)).length;null!=e&&r<n;)e=e[br(t[r++])];return r&&r==n?e:void 0};var vr=ue((function(e,t,r){var n=null==e?void 0:yr(e,t);return void 0===n?r:n}));const xr=(e,t,r)=>vr(r,t)||vr(e,t),wr=(e,t)=>{const r=t||e.defaultValue;return vr(e.collections,r)},Fr={collections:{lifesg:{"brand-10":"#2C0C0B","brand-20":"#4C1513","brand-30":"#6C1D1B","brand-40":"#922825","brand-50":"#BF3431","brand-60":"#F15D5A","brand-70":"#F69491","brand-80":"#FABAB7","brand-90":"#FCD7D2","brand-95":"#FFEBE7","brand-100":"#FFF6F4","primary-10":"#001731","primary-20":"#002752","primary-30":"#003874","primary-40":"#004D9F","primary-50":"#1768BE","primary-60":"#3C91EC","primary-70":"#6CB4FF","primary-80":"#A5CDFF","primary-90":"#CFE1FE","primary-95":"#E8F0FE","primary-100":"#F7F9FF","secondary-10":"#131529","secondary-20":"#222547","secondary-30":"#2F3565","secondary-40":"#42498B","secondary-50":"#5B62A7","secondary-60":"#858CBD","secondary-70":"#A8ADCF","secondary-80":"#C6C9E0","secondary-90":"#DDDFEC","secondary-95":"#EDEEF5","secondary-100":"#F8F8FB","neutral-10":"#161616","neutral-20":"#282828","neutral-30":"#393939","neutral-40":"#4E4E4E","neutral-50":"#686868","neutral-60":"#8E8E8E","neutral-70":"#AFAFB0","neutral-80":"#C7CACA","neutral-90":"#DDE1E2","neutral-95":"#EDEFEF","neutral-100":"#F9F9F9","success-10":"#081A0F","success-20":"#0E2D1B","success-30":"#154126","success-40":"#1C5A34","success-50":"#257645","success-60":"#44A068","success-70":"#64C189","success-80":"#80DCA5","success-90":"#B4ECCB","success-95":"#D5F6E2","success-100":"#EFFCF4","warning-10":"#221302","warning-20":"#3B2204","warning-30":"#543106","warning-40":"#744408","warning-50":"#98590C","warning-60":"#D07A13","warning-70":"#E4A244","warning-80":"#F5C26C","warning-90":"#FADBA6","warning-95":"#FCECD4","warning-100":"#FDF7F0","error-10":"#330505","error-20":"#550808","error-30":"#750C0C","error-40":"#9E130F","error-50":"#CB2213","error-60":"#DE6C6C","error-70":"#E89B9B","error-80":"#EFBEBE","error-90":"#F5D9D9","error-95":"#F9ECEC","error-100":"#FCF7F7","info-10":"#021824","info-20":"#032B3F","info-30":"#053D59","info-40":"#065478","info-50":"#176E9B","info-60":"#5296BE","info-70":"#82B5DA","info-80":"#ACCFE7","info-90":"#CCE3F1","info-95":"#E3F1F8","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000"},bookingsg:{"brand-10":"#2C0C0B","brand-20":"#4C1513","brand-30":"#6C1D1B","brand-40":"#922825","brand-50":"#BF3431","brand-60":"#F15D5A","brand-70":"#F69491","brand-80":"#FABAB7","brand-90":"#FCD7D2","brand-95":"#FFEBE7","brand-100":"#FFF6F4","primary-10":"#1A122C","primary-20":"#2F1F4D","primary-30":"#422D6E","primary-40":"#5B3D97","primary-50":"#7654BC","primary-60":"#9A82CD","primary-70":"#B7A7D8","primary-80":"#CFC5E5","primary-90":"#E3DDF0","primary-95":"#F0EDF7","primary-100":"#F9F8FC","secondary-10":"#0E1723","secondary-20":"#18293D","secondary-30":"#233A57","secondary-40":"#305078","secondary-50":"#4B6A8F","secondary-60":"#7B91A9","secondary-70":"#A1B1C3","secondary-80":"#C1CBD7","secondary-90":"#DBE1E8","secondary-95":"#EBEFF2","secondary-100":"#F7F8FA","neutral-10":"#161616","neutral-20":"#282828","neutral-30":"#393939","neutral-40":"#4E4E4E","neutral-50":"#686868","neutral-60":"#8E8E8E","neutral-70":"#AFAFB0","neutral-80":"#C7CACA","neutral-90":"#DDE1E2","neutral-95":"#EDEFEF","neutral-100":"#F9F9F9","success-10":"#081A0F","success-20":"#0E2D1B","success-30":"#154126","success-40":"#1C5A34","success-50":"#257645","success-60":"#44A068","success-70":"#64C189","success-80":"#80DCA5","success-90":"#B4ECCB","success-95":"#D5F6E2","success-100":"#EFFCF4","warning-10":"#221302","warning-20":"#3B2204","warning-30":"#543106","warning-40":"#744408","warning-50":"#98590C","warning-60":"#D07A13","warning-70":"#E4A244","warning-80":"#F5C26C","warning-90":"#FADBA6","warning-95":"#FCECD4","warning-100":"#FDF7F0","error-10":"#330505","error-20":"#550808","error-30":"#750C0C","error-40":"#9E130F","error-50":"#CB2213","error-60":"#DE6C6C","error-70":"#E89B9B","error-80":"#EFBEBE","error-90":"#F5D9D9","error-95":"#F9ECEC","error-100":"#FCF7F7","info-10":"#021824","info-20":"#032B3F","info-30":"#053D59","info-40":"#065478","info-50":"#176E9B","info-60":"#5296BE","info-70":"#82B5DA","info-80":"#ACCFE7","info-90":"#CCE3F1","info-95":"#E3F1F8","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000"},rbs:{"brand-10":"#0E123A","brand-20":"#191E65","brand-30":"#232B90","brand-40":"#303BC5","brand-50":"#494CFF","brand-60":"#AD6EFF","brand-70":"#AEA4FF","brand-80":"#C5C4FF","brand-90":"#DDDCFF","brand-95":"#EDECFF","brand-100":"#F8F8FF","primary-10":"#10152B","primary-20":"#1C254B","primary-30":"#28356C","primary-40":"#38489A","primary-50":"#4D5AD7","primary-60":"#7487F2","primary-70":"#9AAAFC","primary-80":"#BDC7FD","primary-90":"#DADFFB","primary-95":"#ECEEFE","primary-100":"#F7F8FF","secondary-10":"#19151D","secondary-20":"#2B2533","secondary-30":"#3E3649","secondary-40":"#564A64","secondary-50":"#6F637D","secondary-60":"#948B9F","secondary-70":"#B3ACBB","secondary-80":"#CCC8D2","secondary-90":"#E1DEE4","secondary-95":"#EFEEF1","secondary-100":"#F9F8F9","neutral-10":"#161616","neutral-20":"#282828","neutral-30":"#393939","neutral-40":"#4E4E4E","neutral-50":"#686868","neutral-60":"#8E8E8E","neutral-70":"#AFAFB0","neutral-80":"#C7CACA","neutral-90":"#DDE1E2","neutral-95":"#EDEFEF","neutral-100":"#F9F9F9","success-10":"#081A0F","success-20":"#0E2D1B","success-30":"#154126","success-40":"#1C5A34","success-50":"#257645","success-60":"#44A068","success-70":"#64C189","success-80":"#80DCA5","success-90":"#B4ECCB","success-95":"#D5F6E2","success-100":"#EFFCF4","warning-10":"#221302","warning-20":"#3B2204","warning-30":"#543106","warning-40":"#744408","warning-50":"#98590C","warning-60":"#D07A13","warning-70":"#E4A244","warning-80":"#F5C26C","warning-90":"#FADBA6","warning-95":"#FCECD4","warning-100":"#FDF7F0","error-10":"#330505","error-20":"#550808","error-30":"#750C0C","error-40":"#9E130F","error-50":"#CB2213","error-60":"#DE6C6C","error-70":"#E89B9B","error-80":"#EFBEBE","error-90":"#F5D9D9","error-95":"#F9ECEC","error-100":"#FCF7F7","info-10":"#021824","info-20":"#032B3F","info-30":"#053D59","info-40":"#065478","info-50":"#176E9B","info-60":"#5296BE","info-70":"#82B5DA","info-80":"#ACCFE7","info-90":"#CCE3F1","info-95":"#E3F1F8","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000"},mylegacy:{"brand-10":"#2C0C0B","brand-20":"#4C1513","brand-30":"#6C1D1B","brand-40":"#922825","brand-50":"#BF3431","brand-60":"#F15D5A","brand-70":"#F69491","brand-80":"#FABAB7","brand-90":"#FCD7D2","brand-95":"#FFEBE7","brand-100":"#FFF6F4","primary-10":"#0011924","primary-20":"#032B40","primary-30":"#043D5A","primary-40":"#05547B","primary-50":"#096EA1","primary-60":"#2098D3","primary-70":"#5CB9E8","primary-80":"#8BD3F6","primary-90":"#BEE6FA","primary-95":"#E2F2FA","primary-100":"#F4FAFC","secondary-10":"#131529","secondary-20":"#222547","secondary-30":"#2F3565","secondary-40":"#42498B","secondary-50":"#5B62A7","secondary-60":"#858CBD","secondary-70":"#A8ADCF","secondary-80":"#C6C9E0","secondary-90":"#DDDFEC","secondary-95":"#EDEEF5","secondary-100":"#F8F8FB","neutral-10":"#161616","neutral-20":"#282828","neutral-30":"#393939","neutral-40":"#4E4E4E","neutral-50":"#686868","neutral-60":"#8E8E8E","neutral-70":"#AFAFB0","neutral-80":"#C7CACA","neutral-90":"#DDE1E2","neutral-95":"#EDEFEF","neutral-100":"#F9F9F9","success-10":"#081A0F","success-20":"#0E2D1B","success-30":"#154126","success-40":"#1C5A34","success-50":"#257645","success-60":"#44A068","success-70":"#64C189","success-80":"#80DCA5","success-90":"#B4ECCB","success-95":"#D5F6E2","success-100":"#EFFCF4","warning-10":"#221302","warning-20":"#3B2204","warning-30":"#543106","warning-40":"#744408","warning-50":"#98590C","warning-60":"#D07A13","warning-70":"#E4A244","warning-80":"#F5C26C","warning-90":"#FADBA6","warning-95":"#FCECD4","warning-100":"#FDF7F0","error-10":"#330505","error-20":"#550808","error-30":"#750C0C","error-40":"#9E130F","error-50":"#CB2213","error-60":"#DE6C6C","error-70":"#E89B9B","error-80":"#EFBEBE","error-90":"#F5D9D9","error-95":"#F9ECEC","error-100":"#FCF7F7","info-10":"#021824","info-20":"#032B3F","info-30":"#053D59","info-40":"#065478","info-50":"#176E9B","info-60":"#5296BE","info-70":"#82B5DA","info-80":"#ACCFE7","info-90":"#CCE3F1","info-95":"#E3F1F8","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000"},ccube:{"brand-10":"#1F1221","brand-20":"#371F3B","brand-30":"#4E2C53","brand-40":"#6B3E73","brand-50":"#8D5197","brand-60":"#FF3399","brand-70":"#FF88C4","brand-80":"#FFB3D9","brand-90":"#FFD4E9","brand-95":"#FFE8F3","brand-100":"#FFD6EB","primary-10":"#1F1221","primary-20":"#371F3B","primary-30":"#4E2C53","primary-40":"#6B3E73","primary-50":"#8D5197","primary-60":"#B07DB7","primary-70":"#C7A3CC","primary-80":"#D9C2DD","primary-90":"#E9DBEB","primary-95":"#F3ECF4","primary-100":"#FAF7FA","secondary-10":"#2D091B","secondary-20":"#4D0F2E","secondary-30":"#6B1540","secondary-40":"#931D58","secondary-50":"#C02673","secondary-60":"#FF409F","secondary-70":"#FF88C4","secondary-80":"#FFB3D9","secondary-90":"#FFD4E9","secondary-95":"#FFE8F3","secondary-100":"#FFF8FC","neutral-10":"#161616","neutral-20":"#282828","neutral-30":"#393939","neutral-40":"#4E4E4E","neutral-50":"#686868","neutral-60":"#8E8E8E","neutral-70":"#AFAFB0","neutral-80":"#C7CACA","neutral-90":"#DDE1E2","neutral-95":"#EDEFEF","neutral-100":"#F9F9F9","success-10":"#081A0F","success-20":"#0E2D1B","success-30":"#154126","success-40":"#1C5A34","success-50":"#257645","success-60":"#44A068","success-70":"#64C189","success-80":"#80DCA5","success-90":"#B4ECCB","success-95":"#D5F6E2","success-100":"#EFFCF4","warning-10":"#221302","warning-20":"#3B2204","warning-30":"#543106","warning-40":"#744408","warning-50":"#98590C","warning-60":"#D07A13","warning-70":"#E4A244","warning-80":"#F5C26C","warning-90":"#FADBA6","warning-95":"#FCECD4","warning-100":"#FDF7F0","error-10":"#330505","error-20":"#550808","error-30":"#750C0C","error-40":"#9E130F","error-50":"#CB2213","error-60":"#DE6C6C","error-70":"#E89B9B","error-80":"#EFBEBE","error-90":"#F5D9D9","error-95":"#F9ECEC","error-100":"#FCF7F7","info-10":"#021824","info-20":"#032B3F","info-30":"#053D59","info-40":"#065478","info-50":"#176E9B","info-60":"#5296BE","info-70":"#82B5DA","info-80":"#ACCFE7","info-90":"#CCE3F1","info-95":"#E3F1F8","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000"}},defaultValue:"lifesg"},$r=e=>t=>{const r=t.theme,n=wr(Fr,r.colourScheme);return r.overrides&&r.overrides.primitiveColour?xr(n,e,r.overrides.primitiveColour):n[e]},Sr={"primary-10":$r("primary-10"),"primary-20":$r("primary-20"),"primary-30":$r("primary-30"),"primary-40":$r("primary-40"),"primary-50":$r("primary-50"),"primary-60":$r("primary-60"),"primary-70":$r("primary-70"),"primary-80":$r("primary-80"),"primary-90":$r("primary-90"),"primary-95":$r("primary-95"),"primary-100":$r("primary-100"),"secondary-10":$r("secondary-10"),"secondary-20":$r("secondary-20"),"secondary-30":$r("secondary-30"),"secondary-40":$r("secondary-40"),"secondary-50":$r("secondary-50"),"secondary-60":$r("secondary-60"),"secondary-70":$r("secondary-70"),"secondary-80":$r("secondary-80"),"secondary-90":$r("secondary-90"),"secondary-95":$r("secondary-95"),"secondary-100":$r("secondary-100"),"neutral-10":$r("neutral-10"),"neutral-20":$r("neutral-20"),"neutral-30":$r("neutral-30"),"neutral-40":$r("neutral-40"),"neutral-50":$r("neutral-50"),"neutral-60":$r("neutral-60"),"neutral-70":$r("neutral-70"),"neutral-80":$r("neutral-80"),"neutral-90":$r("neutral-90"),"neutral-95":$r("neutral-95"),"neutral-100":$r("neutral-100"),"success-10":$r("success-10"),"success-20":$r("success-20"),"success-30":$r("success-30"),"success-40":$r("success-40"),"success-50":$r("success-50"),"success-60":$r("success-60"),"success-70":$r("success-70"),"success-80":$r("success-80"),"success-90":$r("success-90"),"success-95":$r("success-95"),"success-100":$r("success-100"),"warning-10":$r("warning-10"),"warning-20":$r("warning-20"),"warning-30":$r("warning-30"),"warning-40":$r("warning-40"),"warning-50":$r("warning-50"),"warning-60":$r("warning-60"),"warning-70":$r("warning-70"),"warning-80":$r("warning-80"),"warning-90":$r("warning-90"),"warning-95":$r("warning-95"),"warning-100":$r("warning-100"),"error-10":$r("error-10"),"error-20":$r("error-20"),"error-30":$r("error-30"),"error-40":$r("error-40"),"error-50":$r("error-50"),"error-60":$r("error-60"),"error-70":$r("error-70"),"error-80":$r("error-80"),"error-90":$r("error-90"),"error-95":$r("error-95"),"error-100":$r("error-100"),"info-10":$r("info-10"),"info-20":$r("info-20"),"info-30":$r("info-30"),"info-40":$r("info-40"),"info-50":$r("info-50"),"info-60":$r("info-60"),"info-70":$r("info-70"),"info-80":$r("info-80"),"info-90":$r("info-90"),"info-95":$r("info-95"),"info-100":$r("info-100"),white:$r("white"),black:$r("black")},Dr={text:$r("neutral-20"),"text-subtle":$r("neutral-30"),"text-subtler":$r("neutral-50"),"text-subtlest":$r("neutral-60"),"text-primary":$r("primary-50"),"text-hover":$r("primary-40"),"text-selected":$r("primary-50"),"text-selected-hover":$r("primary-40"),"text-disabled":$r("neutral-50"),"text-disabled-subtle":$r("neutral-60"),"text-disabled-subtlest":$r("neutral-80"),"text-selected-disabled":$r("neutral-50"),"text-success":$r("success-40"),"text-warning":$r("warning-40"),"text-error":$r("error-40"),"text-info":$r("info-40"),"text-inverse":$r("white"),icon:$r("neutral-50"),"icon-subtle":$r("neutral-60"),"icon-strongest":$r("neutral-20"),"icon-primary":$r("primary-50"),"icon-primary-subtle":$r("primary-60"),"icon-primary-subtlest":$r("primary-70"),"icon-hover":$r("primary-40"),"icon-selected":$r("primary-50"),"icon-selected-hover":$r("primary-40"),"icon-disabled":$r("neutral-50"),"icon-disabled-subtle":$r("neutral-60"),"icon-selected-disabled":$r("neutral-60"),"icon-success":$r("success-50"),"icon-warning":$r("warning-60"),"icon-error":$r("error-50"),"icon-error-strong":$r("error-40"),"icon-info":$r("info-50"),"icon-inverse":$r("white"),"icon-primary-inverse":"#FEAB10",border:$r("neutral-90"),"border-strong":$r("neutral-70"),"border-stronger":$r("neutral-30"),"border-primary":$r("primary-50"),"border-primary-subtle":$r("primary-60"),"border-hover":$r("primary-90"),"border-hover-strong":$r("primary-60"),"border-selected":$r("primary-50"),"border-selected-subtle":$r("primary-70"),"border-selected-subtlest":$r("primary-90"),"border-selected-hover":$r("primary-40"),"border-focus":$r("primary-60"),"border-focus-strong":$r("primary-50"),"border-disabled":$r("neutral-90"),"border-selected-disabled":$r("neutral-70"),"border-success":$r("success-60"),"border-warning":$r("warning-60"),"border-error":$r("error-60"),"border-error-focus":$r("error-60"),"border-error-strong":$r("error-40"),"border-info":$r("info-60"),bg:$r("white"),"bg-strong":$r("neutral-100"),"bg-stronger":$r("neutral-95"),"bg-strongest":$r("neutral-90"),"bg-hover":$r("primary-95"),"bg-hover-strong":$r("primary-90"),"bg-hover-subtle":$r("primary-100"),"bg-hover-neutral":$r("neutral-95"),"bg-selected":$r("primary-95"),"bg-selected-hover":$r("primary-90"),"bg-selected-strong":$r("primary-90"),"bg-selected-strongest":$r("primary-90"),"bg-disabled":$r("neutral-95"),"bg-selected-disabled":$r("neutral-95"),"bg-success":$r("success-100"),"bg-success-strong":$r("success-50"),"bg-warning":$r("warning-100"),"bg-warning-strong":$r("warning-50"),"bg-info":$r("info-100"),"bg-info-strong":$r("info-50"),"bg-error":$r("error-100"),"bg-error-strong":$r("error-50"),"bg-error-strong-hover":$r("error-30"),"bg-inverse":$r("neutral-20"),"bg-inverse-subtle":$r("neutral-30"),"bg-inverse-subtler":$r("neutral-50"),"bg-inverse-subtlest":$r("neutral-60"),"bg-primary":$r("primary-50"),"bg-primary-subtle":$r("primary-60"),"bg-primary-subtler":$r("primary-80"),"bg-primary-subtlest":$r("primary-100"),"bg-primary-hover":$r("primary-40"),"bg-primary-subtlest-hover":$r("primary-90"),"bg-primary-subtlest-selected":$r("primary-90"),"bg-available":"#6DD0A1","overlay-strong":"rgba(40, 40, 40, 0.85)","overlay-subtle":"rgba(40, 40, 40, 0.20)",hyperlink:$r("primary-50"),"hyperlink-inverse":"#FFCB6A","focus-ring":$r("black"),"focus-ring-inverse":$r("white")},Er={collections:{lifesg:Dr,bookingsg:Dr,rbs:Dr,mylegacy:Dr,ccube:Dr},defaultValue:"lifesg"},Cr=e=>t=>{const r=t.theme,n=wr(Er,r.colourScheme),i=r.overrides&&r.overrides.semanticColour?xr(n,e,r.overrides.semanticColour):n[e];return"function"==typeof i?i(t):i},Br={text:Cr("text"),"text-subtle":Cr("text-subtle"),"text-subtler":Cr("text-subtler"),"text-subtlest":Cr("text-subtlest"),"text-primary":Cr("text-primary"),"text-hover":Cr("text-hover"),"text-selected":Cr("text-selected"),"text-selected-hover":Cr("text-selected-hover"),"text-disabled":Cr("text-disabled"),"text-disabled-subtle":Cr("text-disabled-subtle"),"text-disabled-subtlest":Cr("text-disabled-subtlest"),"text-selected-disabled":Cr("text-selected-disabled"),"text-success":Cr("text-success"),"text-warning":Cr("text-warning"),"text-error":Cr("text-error"),"text-info":Cr("text-info"),"text-inverse":Cr("text-inverse"),icon:Cr("icon"),"icon-subtle":Cr("icon-subtle"),"icon-strongest":Cr("icon-strongest"),"icon-primary":Cr("icon-primary"),"icon-primary-subtle":Cr("icon-primary-subtle"),"icon-primary-subtlest":Cr("icon-primary-subtlest"),"icon-hover":Cr("icon-hover"),"icon-selected":Cr("icon-selected"),"icon-selected-hover":Cr("icon-selected-hover"),"icon-disabled":Cr("icon-disabled"),"icon-disabled-subtle":Cr("icon-disabled-subtle"),"icon-selected-disabled":Cr("icon-selected-disabled"),"icon-success":Cr("icon-success"),"icon-warning":Cr("icon-warning"),"icon-error":Cr("icon-error"),"icon-error-strong":Cr("icon-error-strong"),"icon-info":Cr("icon-info"),"icon-inverse":Cr("icon-inverse"),"icon-primary-inverse":Cr("icon-primary-inverse"),border:Cr("border"),"border-strong":Cr("border-strong"),"border-stronger":Cr("border-stronger"),"border-primary":Cr("border-primary"),"border-primary-subtle":Cr("border-primary-subtle"),"border-hover":Cr("border-hover"),"border-hover-strong":Cr("border-hover-strong"),"border-selected":Cr("border-selected"),"border-selected-subtle":Cr("border-selected-subtle"),"border-selected-subtlest":Cr("border-selected-subtlest"),"border-selected-hover":Cr("border-selected-hover"),"border-focus":Cr("border-focus"),"border-focus-strong":Cr("border-focus-strong"),"border-disabled":Cr("border-disabled"),"border-selected-disabled":Cr("border-selected-disabled"),"border-success":Cr("border-success"),"border-warning":Cr("border-warning"),"border-error":Cr("border-error"),"border-error-focus":Cr("border-error-focus"),"border-error-strong":Cr("border-error-strong"),"border-info":Cr("border-info"),bg:Cr("bg"),"bg-strong":Cr("bg-strong"),"bg-stronger":Cr("bg-stronger"),"bg-strongest":Cr("bg-strongest"),"bg-hover":Cr("bg-hover"),"bg-hover-strong":Cr("bg-hover-strong"),"bg-hover-subtle":Cr("bg-hover-subtle"),"bg-hover-neutral":Cr("bg-hover-neutral"),"bg-selected":Cr("bg-selected"),"bg-selected-hover":Cr("bg-selected-hover"),"bg-selected-strong":Cr("bg-selected-strong"),"bg-selected-strongest":Cr("bg-selected-strongest"),"bg-disabled":Cr("bg-disabled"),"bg-selected-disabled":Cr("bg-selected-disabled"),"bg-success":Cr("bg-success"),"bg-success-strong":Cr("bg-success-strong"),"bg-warning":Cr("bg-warning"),"bg-warning-strong":Cr("bg-warning-strong"),"bg-info":Cr("bg-info"),"bg-info-strong":Cr("bg-info-strong"),"bg-error":Cr("bg-error"),"bg-error-strong":Cr("bg-error-strong"),"bg-error-strong-hover":Cr("bg-error-strong-hover"),"bg-inverse":Cr("bg-inverse"),"bg-inverse-subtle":Cr("bg-inverse-subtle"),"bg-inverse-subtler":Cr("bg-inverse-subtler"),"bg-inverse-subtlest":Cr("bg-inverse-subtlest"),"bg-primary":Cr("bg-primary"),"bg-primary-subtle":Cr("bg-primary-subtle"),"bg-primary-subtler":Cr("bg-primary-subtler"),"bg-primary-subtlest":Cr("bg-primary-subtlest"),"bg-primary-hover":Cr("bg-primary-hover"),"bg-primary-subtlest-hover":Cr("bg-primary-subtlest-hover"),"bg-primary-subtlest-selected":Cr("bg-primary-subtlest-selected"),"bg-available":Cr("bg-available"),"overlay-strong":Cr("overlay-strong"),"overlay-subtle":Cr("overlay-subtle"),hyperlink:Cr("hyperlink"),"hyperlink-inverse":Cr("hyperlink-inverse"),"focus-ring":Cr("focus-ring"),"focus-ring-inverse":Cr("focus-ring-inverse")},Or={collections:{lifesg:{"xxs-min":0,"xxs-max":320,"xs-min":321,"xs-max":375,"sm-min":376,"sm-max":420,"md-min":421,"md-max":767,"lg-min":768,"lg-max":1023,"xl-min":1024,"xl-max":1440,"xxl-min":1441,"xxs-column":8,"xs-column":8,"sm-column":8,"md-column":8,"lg-column":12,"xl-column":12,"xxl-column":12,"xxs-gutter":16,"xs-gutter":16,"sm-gutter":16,"md-gutter":16,"lg-gutter":32,"xl-gutter":32,"xxl-gutter":32,"xxs-margin":24,"xs-margin":24,"sm-margin":24,"md-margin":24,"lg-margin":48,"xl-margin":48,"xxl-margin":48}},defaultValue:"lifesg"},kr=e=>t=>{var r;const n=t.theme,i=wr(Or,null==n?void 0:n.breakpointScheme);let o;return o=(null===(r=null==n?void 0:n.overrides)||void 0===r?void 0:r.breakpoint)?xr(i,e,n.overrides.breakpoint):i[e],o},_r={"xxs-min":kr("xxs-min"),"xxs-max":kr("xxs-max"),"xs-min":kr("xs-min"),"xs-max":kr("xs-max"),"sm-min":kr("sm-min"),"sm-max":kr("sm-max"),"md-min":kr("md-min"),"md-max":kr("md-max"),"lg-min":kr("lg-min"),"lg-max":kr("lg-max"),"xl-min":kr("xl-min"),"xl-max":kr("xl-max"),"xxl-min":kr("xxl-min"),"xxs-column":kr("xxs-column"),"xs-column":kr("xs-column"),"sm-column":kr("sm-column"),"md-column":kr("md-column"),"lg-column":kr("lg-column"),"xl-column":kr("xl-column"),"xxl-column":kr("xxl-column"),"xxs-gutter":kr("xxs-gutter"),"xs-gutter":kr("xs-gutter"),"sm-gutter":kr("sm-gutter"),"md-gutter":kr("md-gutter"),"lg-gutter":kr("lg-gutter"),"xl-gutter":kr("xl-gutter"),"xxl-gutter":kr("xxl-gutter"),"xxs-margin":kr("xxs-margin"),"xs-margin":kr("xs-margin"),"sm-margin":kr("sm-margin"),"md-margin":kr("md-margin"),"lg-margin":kr("lg-margin"),"xl-margin":kr("xl-margin"),"xxl-margin":kr("xxl-margin")},Ar=e=>("max-width"===e?["xxs","xs","sm","md","lg","xl"]:["xxs","xs","sm","md","lg","xl","xxl"]).reduce(((t,r)=>(t[r]=((e,t)=>{const r=_r["max-width"===e?`${t}-max`:`${t}-min`];return t=>{const n=r(t);return`@media screen and (${e}: ${n}px)`}})(e,r),t)),{}),zr={MaxWidth:Ar("max-width"),MinWidth:Ar("min-width")},jr={"header-size-xxl":"3rem","header-size-xl":"2.5rem","header-size-lg":"2rem","header-size-md":"1.625rem","header-size-sm":"1.375rem","header-size-xs":"1.125rem","header-lh-xxl":"3.5rem","header-lh-xl":"3rem","header-lh-lg":"2.5rem","header-lh-md":"2.25rem","header-lh-sm":"1.75rem","header-lh-xs":"1.625rem","header-ls-xxl":"-0.056rem","header-ls-xl":"-0.032rem","header-ls-lg":"-0.032rem","header-ls-md":"0rem","header-ls-sm":"0rem","header-ls-xs":"0rem","weight-light":"300","weight-regular":"400","weight-semibold":"600","weight-bold":"700","font-family":"Open Sans","body-size-baseline":"1.125rem","body-size-md":"1rem","body-size-sm":"0.875rem","body-size-xs":"0.75rem","body-lh-baseline":"1.625rem","body-lh-md":"1.5rem","body-lh-sm":"1.6rem","body-lh-xs":"1.2rem","body-ls-baseline":"0rem","body-ls-md":"0.014rem","body-ls-sm":"0.012rem","body-ls-xs":"0.012rem","formlabel-size-baseline":"1rem","formlabel-size-lg":"1.125rem","formlabel-lh-baseline":"1.5rem","formlabel-lh-lg":"1.625rem","formlabel-ls-baseline":"0.014rem","formlabel-ls-lg":"0rem"},Mr={collections:{lifesg:jr,bookingsg:{"header-size-xxl":"3rem","header-size-xl":"2.5rem","header-size-lg":"2rem","header-size-md":"1.625rem","header-size-sm":"1.375rem","header-size-xs":"1.125rem","header-lh-xxl":"3.5rem","header-lh-xl":"3rem","header-lh-lg":"2.5rem","header-lh-md":"2.25rem","header-lh-sm":"1.75rem","header-lh-xs":"1.75rem","header-ls-xxl":"-0.056rem","header-ls-xl":"-0.032rem","header-ls-lg":"-0.032rem","header-ls-md":"0rem","header-ls-sm":"0rem","header-ls-xs":"0rem","weight-light":"300","weight-regular":"400","weight-semibold":"600","weight-bold":"700","font-family":"Plus Jakarta Sans","body-size-baseline":"1.125rem","body-size-md":"1rem","body-size-sm":"0.875rem","body-size-xs":"0.75rem","body-lh-baseline":"1.75rem","body-lh-md":"1.5rem","body-lh-sm":"1.6rem","body-lh-xs":"1.2rem","body-ls-baseline":"0rem","body-ls-md":"0.014rem","body-ls-sm":"0.012rem","body-ls-xs":"0.012rem","formlabel-size-baseline":"1rem","formlabel-size-lg":"1.125rem","formlabel-lh-baseline":"1.5rem","formlabel-lh-lg":"1.75rem","formlabel-ls-baseline":"0.014rem","formlabel-ls-lg":"0rem"},rbs:jr,mylegacy:jr,ccube:jr},defaultValue:"lifesg"},Pr=e=>t=>{const r=t.theme,n=wr(Mr,r.fontScheme);return r.overrides&&r.overrides.fontSpec?xr(n,e,r.overrides.fontSpec):n[e]},Tr={"header-size-xxl":Pr("header-size-xxl"),"header-size-xl":Pr("header-size-xl"),"header-size-lg":Pr("header-size-lg"),"header-size-md":Pr("header-size-md"),"header-size-sm":Pr("header-size-sm"),"header-size-xs":Pr("header-size-xs"),"header-lh-xxl":Pr("header-lh-xxl"),"header-lh-xl":Pr("header-lh-xl"),"header-lh-lg":Pr("header-lh-lg"),"header-lh-md":Pr("header-lh-md"),"header-lh-sm":Pr("header-lh-sm"),"header-lh-xs":Pr("header-lh-xs"),"header-ls-xxl":Pr("header-ls-xxl"),"header-ls-xl":Pr("header-ls-xl"),"header-ls-lg":Pr("header-ls-lg"),"header-ls-md":Pr("header-ls-md"),"header-ls-sm":Pr("header-ls-sm"),"header-ls-xs":Pr("header-ls-xs"),"weight-light":Pr("weight-light"),"weight-regular":Pr("weight-regular"),"weight-semibold":Pr("weight-semibold"),"weight-bold":Pr("weight-bold"),"font-family":Pr("font-family"),"body-size-baseline":Pr("body-size-baseline"),"body-size-md":Pr("body-size-md"),"body-size-sm":Pr("body-size-sm"),"body-size-xs":Pr("body-size-xs"),"body-lh-baseline":Pr("body-lh-baseline"),"body-lh-md":Pr("body-lh-md"),"body-lh-sm":Pr("body-lh-sm"),"body-lh-xs":Pr("body-lh-xs"),"body-ls-baseline":Pr("body-ls-baseline"),"body-ls-md":Pr("body-ls-md"),"body-ls-sm":Pr("body-ls-sm"),"body-ls-xs":Pr("body-ls-xs"),"formlabel-size-baseline":Pr("formlabel-size-baseline"),"formlabel-size-lg":Pr("formlabel-size-lg"),"formlabel-lh-baseline":Pr("formlabel-lh-baseline"),"formlabel-lh-lg":Pr("formlabel-lh-lg"),"formlabel-ls-baseline":Pr("formlabel-ls-baseline"),"formlabel-ls-lg":Pr("formlabel-ls-lg")},Hr={collections:{lifesg:{none:0,xs:2,sm:4,md:8,lg:12,full:9999}},defaultValue:"lifesg"},Ir=e=>t=>{const r=t.theme,n=wr(Hr,r.radiusScheme);return r.overrides&&r.overrides.radius?`${xr(n,e,r.overrides.radius)}px`:`${n[e]}px`},Rr={none:Ir("none"),xs:Ir("xs"),sm:Ir("sm"),md:Ir("md"),lg:Ir("lg"),full:Ir("full")},Lr={collections:{lifesg:{"spacing-0":0,"spacing-4":4,"spacing-8":8,"spacing-12":12,"spacing-16":16,"spacing-20":20,"spacing-24":24,"spacing-32":32,"spacing-40":40,"spacing-48":48,"spacing-64":64,"spacing-72":72,"layout-xs":8,"layout-sm":16,"layout-md":24,"layout-lg":32,"layout-xl":48,"layout-xxl":64,"layout-xxxl":128}},defaultValue:"lifesg"},Wr=e=>t=>{const r=t.theme,n=wr(Lr,r.spacingScheme);return r.overrides&&r.overrides.spacing?`${xr(n,e,r.overrides.spacing)}px`:`${n[e]}px`},Nr={"spacing-0":Wr("spacing-0"),"spacing-4":Wr("spacing-4"),"spacing-8":Wr("spacing-8"),"spacing-12":Wr("spacing-12"),"spacing-16":Wr("spacing-16"),"spacing-20":Wr("spacing-20"),"spacing-24":Wr("spacing-24"),"spacing-32":Wr("spacing-32"),"spacing-40":Wr("spacing-40"),"spacing-48":Wr("spacing-48"),"spacing-64":Wr("spacing-64"),"spacing-72":Wr("spacing-72"),"layout-xs":Wr("layout-xs"),"layout-sm":Wr("layout-sm"),"layout-md":Wr("layout-md"),"layout-lg":Wr("layout-lg"),"layout-xl":Wr("layout-xl"),"layout-xxl":Wr("layout-xxl"),"layout-xxxl":Wr("layout-xxxl")},Vr=(e,t,r,n)=>l`
    font-family: ${Pr("font-family")};
    font-size: ${Pr(e)};
    font-weight: ${Pr(t)};
    line-height: ${Pr(r)};
    letter-spacing: ${Pr(n)};
`,Yr={"header-xxl-light":Vr("header-size-xxl","weight-light","header-lh-xxl","header-ls-xxl"),"header-xxl-regular":Vr("header-size-xxl","weight-regular","header-lh-xxl","header-ls-xxl"),"header-xxl-semibold":Vr("header-size-xxl","weight-semibold","header-lh-xxl","header-ls-xxl"),"header-xxl-bold":Vr("header-size-xxl","weight-bold","header-lh-xxl","header-ls-xxl"),"header-xl-light":Vr("header-size-xl","weight-light","header-lh-xl","header-ls-xl"),"header-xl-regular":Vr("header-size-xl","weight-regular","header-lh-xl","header-ls-xl"),"header-xl-semibold":Vr("header-size-xl","weight-semibold","header-lh-xl","header-ls-xl"),"header-xl-bold":Vr("header-size-xl","weight-bold","header-lh-xl","header-ls-xl"),"header-lg-light":Vr("header-size-lg","weight-light","header-lh-lg","header-ls-lg"),"header-lg-regular":Vr("header-size-lg","weight-regular","header-lh-lg","header-ls-lg"),"header-lg-semibold":Vr("header-size-lg","weight-semibold","header-lh-lg","header-ls-lg"),"header-lg-bold":Vr("header-size-lg","weight-bold","header-lh-lg","header-ls-lg"),"header-md-light":Vr("header-size-md","weight-light","header-lh-md","header-ls-md"),"header-md-regular":Vr("header-size-md","weight-regular","header-lh-md","header-ls-md"),"header-md-semibold":Vr("header-size-md","weight-semibold","header-lh-md","header-ls-md"),"header-md-bold":Vr("header-size-md","weight-bold","header-lh-md","header-ls-md"),"header-sm-light":Vr("header-size-sm","weight-light","header-lh-sm","header-ls-sm"),"header-sm-regular":Vr("header-size-sm","weight-regular","header-lh-sm","header-ls-sm"),"header-sm-semibold":Vr("header-size-sm","weight-semibold","header-lh-sm","header-ls-sm"),"header-sm-bold":Vr("header-size-sm","weight-bold","header-lh-sm","header-ls-sm"),"header-xs-light":Vr("header-size-xs","weight-light","header-lh-xs","header-ls-xs"),"header-xs-regular":Vr("header-size-xs","weight-regular","header-lh-xs","header-ls-xs"),"header-xs-semibold":Vr("header-size-xs","weight-semibold","header-lh-xs","header-ls-xs"),"header-xs-bold":Vr("header-size-xs","weight-bold","header-lh-xs","header-ls-xs"),"body-baseline-light":Vr("body-size-baseline","weight-light","body-lh-baseline","body-ls-baseline"),"body-baseline-regular":Vr("body-size-baseline","weight-regular","body-lh-baseline","body-ls-baseline"),"body-baseline-semibold":Vr("body-size-baseline","weight-semibold","body-lh-baseline","body-ls-baseline"),"body-baseline-bold":Vr("body-size-baseline","weight-bold","body-lh-baseline","body-ls-baseline"),"body-md-light":Vr("body-size-md","weight-light","body-lh-md","body-ls-md"),"body-md-regular":Vr("body-size-md","weight-regular","body-lh-md","body-ls-md"),"body-md-semibold":Vr("body-size-md","weight-semibold","body-lh-md","body-ls-md"),"body-md-bold":Vr("body-size-md","weight-bold","body-lh-md","body-ls-md"),"body-sm-light":Vr("body-size-sm","weight-light","body-lh-sm","body-ls-sm"),"body-sm-regular":Vr("body-size-sm","weight-regular","body-lh-sm","body-ls-sm"),"body-sm-semibold":Vr("body-size-sm","weight-semibold","body-lh-sm","body-ls-sm"),"body-sm-bold":Vr("body-size-sm","weight-bold","body-lh-sm","body-ls-sm"),"body-xs-light":Vr("body-size-xs","weight-light","body-lh-xs","body-ls-xs"),"body-xs-regular":Vr("body-size-xs","weight-regular","body-lh-xs","body-ls-xs"),"body-xs-semibold":Vr("body-size-xs","weight-semibold","body-lh-xs","body-ls-xs"),"body-xs-bold":Vr("body-size-xs","weight-bold","body-lh-xs","body-ls-xs"),"formlabel-baseline-semibold":Vr("formlabel-size-baseline","weight-semibold","formlabel-lh-baseline","formlabel-ls-baseline"),"formlabel-lg-semibold":Vr("formlabel-size-lg","weight-semibold","formlabel-lh-lg","formlabel-ls-lg")},qr={collections:{lifesg:Yr,bookingsg:Yr,rbs:Yr,mylegacy:Yr,ccube:Yr},defaultValue:"lifesg"},Qr=e=>t=>{const r=t.theme,n=wr(qr,r.fontScheme),i=r.overrides&&r.overrides.font?xr(n,e,r.overrides.font):n[e];return"function"==typeof i?i(t):i},Ur={"header-xxl-light":Qr("header-xxl-light"),"header-xxl-regular":Qr("header-xxl-regular"),"header-xxl-semibold":Qr("header-xxl-semibold"),"header-xxl-bold":Qr("header-xxl-bold"),"header-xl-light":Qr("header-xl-light"),"header-xl-regular":Qr("header-xl-regular"),"header-xl-semibold":Qr("header-xl-semibold"),"header-xl-bold":Qr("header-xl-bold"),"header-lg-light":Qr("header-lg-light"),"header-lg-regular":Qr("header-lg-regular"),"header-lg-semibold":Qr("header-lg-semibold"),"header-lg-bold":Qr("header-lg-bold"),"header-md-light":Qr("header-md-light"),"header-md-regular":Qr("header-md-regular"),"header-md-semibold":Qr("header-md-semibold"),"header-md-bold":Qr("header-md-bold"),"header-sm-light":Qr("header-sm-light"),"header-sm-regular":Qr("header-sm-regular"),"header-sm-semibold":Qr("header-sm-semibold"),"header-sm-bold":Qr("header-sm-bold"),"header-xs-light":Qr("header-xs-light"),"header-xs-regular":Qr("header-xs-regular"),"header-xs-semibold":Qr("header-xs-semibold"),"header-xs-bold":Qr("header-xs-bold"),"body-baseline-light":Qr("body-baseline-light"),"body-baseline-regular":Qr("body-baseline-regular"),"body-baseline-semibold":Qr("body-baseline-semibold"),"body-baseline-bold":Qr("body-baseline-bold"),"body-md-light":Qr("body-md-light"),"body-md-regular":Qr("body-md-regular"),"body-md-semibold":Qr("body-md-semibold"),"body-md-bold":Qr("body-md-bold"),"body-sm-light":Qr("body-sm-light"),"body-sm-regular":Qr("body-sm-regular"),"body-sm-semibold":Qr("body-sm-semibold"),"body-sm-bold":Qr("body-sm-bold"),"body-xs-light":Qr("body-xs-light"),"body-xs-regular":Qr("body-xs-regular"),"body-xs-semibold":Qr("body-xs-semibold"),"body-xs-bold":Qr("body-xs-bold"),"formlabel-baseline-semibold":Qr("formlabel-baseline-semibold"),"formlabel-lg-semibold":Qr("formlabel-lg-semibold")},Jr=Object.assign(Object.assign({},Br),{Primitive:Sr}),Xr=Tr,Zr=Ur,Gr=Nr,Kr=Rr,en=zr,tn=a.button`
    padding: 0.5rem 1rem;
    min-width: 4rem;
    border-radius: 4px;
    transition: all 200ms ease;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;

    // -----------------------------------------------------------------------------
    // BUTTON STYLE + TEXT COLOR
    // -----------------------------------------------------------------------------
    ${e=>{switch(e.$buttonStyle){case"secondary":return l`
                    background-color: ${Jr.Primitive.white};
                    border: 1px solid
                        ${e.$buttonIsDanger?Jr["border-error-strong"]:Jr["border-primary"]};

                    color: ${e.$buttonIsDanger?Jr["text-error"]:Jr["text-primary"]};

                    &:hover,
                    &:active {
                        background-color: ${Jr["bg-hover-neutral"]};
                    }
                `;case"light":return l`
                    background-color: ${Jr.bg};
                    border: 1px solid ${Jr.border};

                    color: ${e.$buttonIsDanger?Jr["text-error"]:Jr["text-primary"]};

                    &:hover,
                    &:active {
                        background-color: ${Jr["bg-hover-neutral"]};
                    }
                `;case"link":return l`
                    background-color: transparent;
                    border: transparent;
                    color: ${e.$buttonIsDanger?Jr["text-error"]:Jr["text-primary"]};
                    &:hover,
                    &:active {
                        background-color: ${Jr["bg-hover-neutral"]};
                    }
                `;case"disabled":return l`
                    background-color: ${Jr["bg-disabled"]};
                    border: 1px solid transparent;
                    cursor: not-allowed;

                    &:hover {
                        box-shadow: none;
                    }

                    color: ${Jr["text-disabled"]};
                `;default:return l`
                    background-color: ${e.$buttonIsDanger?Jr["bg-error-strong"]:Jr["bg-primary"]};
                    border: 1px solid transparent;

                    ${en.MaxWidth.md} {
                        width: 100%;
                    }

                    color: ${Jr["text-inverse"]};

                    &:hover,
                    &:active {
                        background-color: ${e.$buttonIsDanger?Jr["bg-error-strong-hover"]:Jr["bg-primary-hover"]};
                    }
                `}}}

    // -----------------------------------------------------------------------------
	// BUTTON SIZE + TEXT SIZE
	// -----------------------------------------------------------------------------
	${e=>{switch(e.$buttonSizeStyle){case"small":return l`
                    height: 2.5rem;
                    ${Zr["body-md-semibold"]}

                    ${en.MaxWidth.xxs} {
                        height: auto;
                    }
                `;case"large":return l`
                    height: 4rem;
                    ${Zr["header-md-semibold"]}

                    ${en.MaxWidth.xxs} {
                        height: auto;
                    }
                `;default:return l`
                    height: 3rem;
                    ${Zr["header-xs-semibold"]}

                    ${en.MaxWidth.xxs} {
                        height: auto;
                    }
                `}}}
`,rn=a((({color:r,className:n,size:i})=>e(ie,Object.assign({className:n,$size:i,$color:r},{children:[t(ae,{id:"inner1"}),t(se,{id:"inner2"}),t(le,{id:"inner3"}),t(de,{id:"inner4"})]}))))`
    margin-right: 0.5rem;
`,nn={Default:c.forwardRef(((r,n)=>{const{children:i,disabled:o=!1,loading:a=!1,styleType:s="default",danger:l=!1}=r,d=ne(r,["children","disabled","loading","styleType","danger"]),c={$buttonStyle:o?"disabled":s,$buttonSizeStyle:"default",$buttonIsDanger:l};return e(tn,Object.assign({ref:n,"data-testid":d["data-testid"]||"button",disabled:o},c,d,{children:[a&&t(rn,{}),t("span",{children:i})]}))})),Small:c.forwardRef(((r,n)=>{const{children:i,disabled:o=!1,loading:a=!1,styleType:s="default",danger:l=!1}=r,d=ne(r,["children","disabled","loading","styleType","danger"]),c={$buttonStyle:o?"disabled":s,$buttonSizeStyle:"small",$buttonIsDanger:l};return e(tn,Object.assign({ref:n,"data-testid":d["data-testid"]||"button",disabled:o},c,d,{children:[a&&t(rn,{}),t("span",{children:i})]}))})),Large:c.forwardRef(((r,n)=>{const{children:i,disabled:o=!1,loading:a=!1,styleType:s="default",danger:l=!1}=r,d=ne(r,["children","disabled","loading","styleType","danger"]),c={$buttonStyle:o?"disabled":s,$buttonSizeStyle:"large",$buttonIsDanger:l};return e(tn,Object.assign({ref:n,"data-testid":d["data-testid"]||"button",disabled:o},c,d,{children:[a&&t(rn,{}),t("span",{children:i})]}))}))},on=(e,t,r)=>t?vr(r,t)||vr(e,t):r||e,an=(e,t)=>{const r=t||e.defaultValue;return vr(e.collections,r)};var sn;!function(e){e.colorScheme="colorScheme",e.layout="layout",e.textStyleScheme="textStyleScheme",e.designTokenScheme="designTokenScheme",e.resourceScheme="resourceScheme"}(sn||(sn={}));const ln={collections:{base:{Brand:{1:"#EF413D",2:"#F26664",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#1C76D5",PrimaryDark:"#1869BF",Secondary:"#0056b3",Accent:{Dark:{1:"#4B539F",2:"#6D74B1",3:"#959BC5"},Light:{1:"#57A9FF",2:"#81BFFF",3:"#BED7FF",4:"#E2ECFD",5:"#F6F8FF",6:"#FBFCFE"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(87, 169, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},bookingsg:{Brand:{1:"#EF413D",2:"#F26664",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#6F4AB8",PrimaryDark:"#6443A6",Secondary:"#6443A6",Accent:{Dark:{1:"#355985",2:"#68819D",3:"#9AABBE"},Light:{1:"#977ECC",2:"#B5A5D7",3:"#CEC3E4 ",4:"#E2DBEF",5:"#F2EFF8",6:"#F7F6FB"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(161, 87, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},rbs:{Brand:{1:"#3E4DFF",2:"#AEACFF",3:"#AD44FF",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#4855D4",PrimaryDark:"#3E49B2",Secondary:"#364891",Accent:{Dark:{1:"#5E516E",2:"#7A6F87",3:"#C5C0CC"},Light:{1:"#8397FC",2:"#ABB8FC",3:"#CED6FD ",4:"#E1E4FA",5:"#F0F2FF",6:"#FAFBFF"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(90, 87, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},mylegacy:{Brand:{1:"#24588D",2:"#FFC166",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#0C7BB3",PrimaryDark:"#066391",Secondary:"#066391",Accent:{Dark:{1:"#4B539F",2:"#6D74B1",3:"#959BC5"},Light:{1:"#229AD6",2:"#8DD4F7",3:"#A4DDF9",4:"#BBE5FA",5:"#E8F4FA",6:"#F7FBFC"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#1A5230",Icon:"#2A854E",Border:"#7DDBA3",Background:"#E1FAEB"},Orange:{Text:"#693D07",Icon:"#CF7911",Border:"#F9CB77",Background:"#FCF2E6",Badge:"#F57F17"},Red:{Text:"#CB2213",Icon:"#CB2213",Border:"#DC6363",Background:"#FAF0F0"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(34, 154, 214, 0.6)",Red:"rgba(203, 34, 19, 0.5)",Elevation:"rgba(75, 83, 159, 0.24)"}},ccube:{Brand:{1:"#8D5197",2:"#FE3399",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#8D5197",PrimaryDark:"#6B3E73",Secondary:"#C02673",Accent:{Dark:{1:"#921D58",2:"#FF409F",3:"#FF88C4"},Light:{1:"#B07DB7",2:"#C7A2CC",3:"#D9C2DD",4:"#E9DBEB",5:"#F3ECF4",6:"#FAF7FA"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(210, 77, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},oneservice:{Brand:{1:"#009F97",2:"#49C3CA",3:"#A81E5E",4:"#ED1386",5:"#F7D414",6:"#000000"},Primary:"#2D7990",PrimaryDark:"#205666",Secondary:"#0056B3",Accent:{Dark:{1:"#4B539F",2:"#6D74B1",3:"#959BC5"},Light:{1:"#5D97A9",2:"#8CB6C2",3:"#B2CED6",4:"#D1E2E7",5:"#E8F0F3",6:"#F7FAFB"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(45, 121, 144, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}}},defaultValue:"base"},dn=e=>t=>{const r=t.theme,n=an(ln,r[sn.colorScheme]);return r.options&&r.options.color?on(n,e,r.options.color):on(n,e)},cn={Brand:{1:dn("Brand.1"),2:dn("Brand.2"),3:dn("Brand.3"),4:dn("Brand.4"),5:dn("Brand.5"),6:dn("Brand.6")},Primary:dn("Primary"),PrimaryDark:dn("PrimaryDark"),Secondary:dn("Secondary"),Accent:{Light:{1:dn("Accent.Light.1"),2:dn("Accent.Light.2"),3:dn("Accent.Light.3"),4:dn("Accent.Light.4"),5:dn("Accent.Light.5"),6:dn("Accent.Light.6")},Dark:{1:dn("Accent.Dark.1"),2:dn("Accent.Dark.2"),3:dn("Accent.Dark.3")}},Neutral:{1:dn("Neutral.1"),2:dn("Neutral.2"),3:dn("Neutral.3"),4:dn("Neutral.4"),5:dn("Neutral.5"),6:dn("Neutral.6"),7:dn("Neutral.7"),8:dn("Neutral.8")},Validation:{Green:{Text:dn("Validation.Green.Text"),Icon:dn("Validation.Green.Icon"),Border:dn("Validation.Green.Border"),Background:dn("Validation.Green.Background")},Orange:{Text:dn("Validation.Orange.Text"),Icon:dn("Validation.Orange.Icon"),Border:dn("Validation.Orange.Border"),Background:dn("Validation.Orange.Background"),Badge:dn("Validation.Orange.Badge")},Red:{Text:dn("Validation.Red.Text"),Icon:dn("Validation.Red.Icon"),Border:dn("Validation.Red.Border"),Background:dn("Validation.Red.Background")},Blue:{Text:dn("Validation.Blue.Text"),Icon:dn("Validation.Blue.Icon"),Border:dn("Validation.Blue.Border"),Background:dn("Validation.Blue.Background")}},Shadow:{Accent:dn("Shadow.Accent"),Red:dn("Shadow.Red"),Elevation:dn("Shadow.Elevation")}},un={mobileS:320,mobileM:375,mobileL:480,tablet:1199,desktopM:1399,desktopL:1999,desktop4k:3840},hn=e=>Object.keys(un).reduce(((t,r)=>{const n=un[r];return t[r]=`@media screen and (${e}: ${n}px)`,t}),{}),mn=hn("max-width"),fn=(hn("min-width"),un),gn=a.button`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 1.5rem;
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

        ${({$highlight:e})=>e&&l`
                background-color: ${cn.Neutral[7]};
            `}
    }
`,pn=c.forwardRef(((e,r)=>{var{children:n,focusHighlight:i=!0,focusOutline:o="none",type:a="button"}=e,s=ne(e,["children","focusHighlight","focusOutline","type"]);return t(gn,Object.assign({ref:r,$outline:o,$highlight:i,type:a},s,{children:n}))})),bn={OpenSans:{Regular:"Open Sans",Semibold:"Open Sans Semibold",Bold:"Open Sans Bold",Light:"Open Sans Light"},PlusJakartaSans:{Regular:"Plus Jakarta Sans",Semibold:"Plus Jakarta Sans Semibold",Bold:"Plus Jakarta Sans Bold",Light:"Plus Jakarta Sans Light"},MerriWeather:"Merriweather"},yn={D1:{fontFamily:bn.OpenSans.Bold,fontSize:3,fontWeight:700,lineHeight:4,letterSpacing:-.056},D2:{fontFamily:bn.OpenSans.Bold,fontSize:2.5,fontWeight:700,lineHeight:3.5,letterSpacing:-.032},D3:{fontFamily:bn.OpenSans.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},D4:{fontFamily:bn.OpenSans.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},DBody:{fontFamily:bn.OpenSans.Regular,fontSize:1.375,lineHeight:1.75},H1:{fontFamily:bn.OpenSans.Bold,fontSize:2,fontWeight:700,lineHeight:2.5},H2:{fontFamily:bn.OpenSans.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},H3:{fontFamily:bn.OpenSans.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},H4:{fontFamily:bn.OpenSans.Bold,fontSize:1.125,fontWeight:700,lineHeight:1.625},H5:{fontFamily:bn.OpenSans.Bold,fontSize:1,fontWeight:700,lineHeight:1.5,letterSpacing:.014},H6:{fontFamily:bn.OpenSans.Bold,fontSize:.875,fontWeight:700,lineHeight:1.6,letterSpacing:.012},Body:{fontFamily:bn.OpenSans.Regular,fontSize:1.125,lineHeight:1.625},BodySmall:{fontFamily:bn.OpenSans.Regular,fontSize:1,lineHeight:1.5,letterSpacing:.014},XSmall:{fontFamily:bn.OpenSans.Regular,fontSize:.75,lineHeight:1.2,letterSpacing:.012}},vn={D1:{fontFamily:bn.PlusJakartaSans.Bold,fontSize:3,fontWeight:700,lineHeight:3.5,letterSpacing:-.056},D2:{fontFamily:bn.PlusJakartaSans.Bold,fontSize:2.5,fontWeight:700,lineHeight:3,letterSpacing:-.032},D3:{fontFamily:bn.PlusJakartaSans.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},D4:{fontFamily:bn.PlusJakartaSans.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},DBody:{fontFamily:bn.PlusJakartaSans.Regular,fontSize:1.375,lineHeight:1.75},H1:{fontFamily:bn.PlusJakartaSans.Bold,fontSize:2,fontWeight:700,lineHeight:2.5,letterSpacing:-.032},H2:{fontFamily:bn.PlusJakartaSans.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},H3:{fontFamily:bn.PlusJakartaSans.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},H4:{fontFamily:bn.PlusJakartaSans.Bold,fontSize:1.125,fontWeight:700,lineHeight:1.75},H5:{fontFamily:bn.PlusJakartaSans.Bold,fontSize:1,fontWeight:700,lineHeight:1.5},H6:{fontFamily:bn.PlusJakartaSans.Bold,fontSize:.875,fontWeight:700,lineHeight:1.625,letterSpacing:.012},Body:{fontFamily:bn.PlusJakartaSans.Regular,fontSize:1.125,lineHeight:1.75},BodySmall:{fontFamily:bn.PlusJakartaSans.Regular,fontSize:1,lineHeight:1.5,letterSpacing:.014},XSmall:{fontFamily:bn.PlusJakartaSans.Regular,fontSize:.75,lineHeight:1.2,letterSpacing:.012}},xn={collections:{base:yn,oneservice:{D1:{fontFamily:bn.OpenSans.Bold,fontSize:2.5,fontWeight:700,lineHeight:3.5},D2:{fontFamily:bn.OpenSans.Bold,fontSize:2,fontWeight:700,lineHeight:3},D3:{fontFamily:bn.OpenSans.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},D4:{fontFamily:bn.OpenSans.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},DBody:{fontFamily:bn.OpenSans.Regular,fontSize:1.125,lineHeight:1.625},H1:{fontFamily:bn.OpenSans.Bold,fontSize:1.75,fontWeight:700,lineHeight:2.625},H2:{fontFamily:bn.OpenSans.Bold,fontSize:1.375,fontWeight:700,lineHeight:2},H3:{fontFamily:bn.OpenSans.Bold,fontSize:1.125,fontWeight:700,lineHeight:1.625},H4:{fontFamily:bn.OpenSans.Bold,fontSize:1,fontWeight:700,lineHeight:1.5},H5:{fontFamily:bn.OpenSans.Bold,fontSize:.875,fontWeight:700,lineHeight:1.313},H6:{fontFamily:bn.OpenSans.Bold,fontSize:.75,fontWeight:700,lineHeight:1.125},Body:{fontFamily:bn.OpenSans.Regular,fontSize:1,lineHeight:1.5},BodySmall:{fontFamily:bn.OpenSans.Regular,fontSize:.875,lineHeight:1.313},XSmall:{fontFamily:bn.OpenSans.Regular,fontSize:.75,lineHeight:1.125}},plusJakartaSans:vn},defaultValue:"base"},wn=e=>t=>{const r=t.theme,n=an(xn,r[sn.textStyleScheme]);return r.options&&r.options.textStyle?on(n,e,r.options.textStyle):on(n,e)},Fn={D1:{fontFamily:wn("D1.fontFamily"),fontSize:wn("D1.fontSize"),fontWeight:wn("D1.fontWeight"),lineHeight:wn("D1.lineHeight"),letterSpacing:wn("D1.letterSpacing")},D2:{fontFamily:wn("D2.fontFamily"),fontSize:wn("D2.fontSize"),fontWeight:wn("D2.fontWeight"),lineHeight:wn("D2.lineHeight"),letterSpacing:wn("D2.letterSpacing")},D3:{fontFamily:wn("D3.fontFamily"),fontSize:wn("D3.fontSize"),fontWeight:wn("D3.fontWeight"),lineHeight:wn("D3.lineHeight"),letterSpacing:wn("D3.letterSpacing")},D4:{fontFamily:wn("D4.fontFamily"),fontSize:wn("D4.fontSize"),fontWeight:wn("D4.fontWeight"),lineHeight:wn("D4.lineHeight"),letterSpacing:wn("D4.letterSpacing")},DBody:{fontFamily:wn("DBody.fontFamily"),fontSize:wn("DBody.fontSize"),fontWeight:wn("DBody.fontWeight"),lineHeight:wn("DBody.lineHeight"),letterSpacing:wn("DBody.letterSpacing")},H1:{fontFamily:wn("H1.fontFamily"),fontSize:wn("H1.fontSize"),fontWeight:wn("H1.fontWeight"),lineHeight:wn("H1.lineHeight"),letterSpacing:wn("H1.letterSpacing")},H2:{fontFamily:wn("H2.fontFamily"),fontSize:wn("H2.fontSize"),fontWeight:wn("H2.fontWeight"),lineHeight:wn("H2.lineHeight"),letterSpacing:wn("H2.letterSpacing")},H3:{fontFamily:wn("H3.fontFamily"),fontSize:wn("H3.fontSize"),fontWeight:wn("H3.fontWeight"),lineHeight:wn("H3.lineHeight"),letterSpacing:wn("H3.letterSpacing")},H4:{fontFamily:wn("H4.fontFamily"),fontSize:wn("H4.fontSize"),fontWeight:wn("H4.fontWeight"),lineHeight:wn("H4.lineHeight"),letterSpacing:wn("H4.letterSpacing")},H5:{fontFamily:wn("H5.fontFamily"),fontSize:wn("H5.fontSize"),fontWeight:wn("H5.fontWeight"),lineHeight:wn("H5.lineHeight"),letterSpacing:wn("H5.letterSpacing")},H6:{fontFamily:wn("H6.fontFamily"),fontSize:wn("H6.fontSize"),fontWeight:wn("H6.fontWeight"),lineHeight:wn("H6.lineHeight"),letterSpacing:wn("H6.letterSpacing")},Body:{fontFamily:wn("Body.fontFamily"),fontSize:wn("Body.fontSize"),fontWeight:wn("Body.fontWeight"),lineHeight:wn("Body.lineHeight"),letterSpacing:wn("Body.letterSpacing")},BodySmall:{fontFamily:wn("BodySmall.fontFamily"),fontSize:wn("BodySmall.fontSize"),fontWeight:wn("BodySmall.fontWeight"),lineHeight:wn("BodySmall.lineHeight"),letterSpacing:wn("BodySmall.letterSpacing")},XSmall:{fontFamily:wn("XSmall.fontFamily"),fontSize:wn("XSmall.fontSize"),fontWeight:wn("XSmall.fontWeight"),lineHeight:wn("XSmall.lineHeight"),letterSpacing:wn("XSmall.letterSpacing")}},$n=[bn.OpenSans,bn.PlusJakartaSans],Sn=(e,t)=>{switch(t){case 700:case"bold":return e.Bold;case 600:case"semibold":return e.Semibold;case 300:case"light":return e.Light;case 400:case"regular":return e.Regular;default:return""}},Dn=(e,t)=>r=>{var n;const i=Fn[e].fontFamily(r),o=Fn[e].fontWeight(r),a=$n.find((e=>Object.values(e).includes(i)));return a?l`
                font-family: ${Sn(a,t)||Sn(a,o)||i};
                font-weight: normal !important;
            `:l`
            font-family: ${i};
            font-weight: ${null!==(n=En(t)||o)&&void 0!==n?n:"normal"};
        `},En=e=>{switch(e){case 300:case"light":return 300;case 400:case"regular":return 400;case 600:case"semibold":return 600;case 700:case"bold":return 700;case 900:case"black":return 900;default:return""}},Cn=e=>{if(e>0)return l`
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: ${e};
            line-clamp: ${e};
            overflow: hidden;
        `},Bn=(e,t,r=!1)=>n=>{const i=Fn[e],o=i.fontSize(n);return l`
            ${Dn(e,t)}
            font-size: ${o}rem !important;
            line-height: ${i.lineHeight}rem !important;
            letter-spacing: ${i.letterSpacing(n)||0}rem !important;
            ${l`
                margin-bottom: ${o*(r?1.05:0)}rem;
            `}
        `},On=(e=!1,t=!1,r=void 0)=>t?l`
            display: block;
            ${Cn(r)}
        `:e?l`
            display: inline;
        `:l`
            display: block;
            ${Cn(r)}
        `;var kn;!function(e){e.D1=a.h1`
        ${e=>l`
                ${Bn("D1",e.weight,e.paragraph)}
                color: ${cn.Neutral[1]};
                ${On(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.D2=a.h1`
        ${e=>l`
                ${Bn("D2",e.weight,e.paragraph)}
                color: ${cn.Neutral[1]};
                ${On(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.D3=a.h1`
        ${e=>l`
                ${Bn("D3",e.weight,e.paragraph)}
                color: ${cn.Neutral[1]};
                ${On(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.D4=a.h1`
        ${e=>l`
                ${Bn("D4",e.weight,e.paragraph)}
                color: ${cn.Neutral[1]};
                ${On(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.DBody=a.h1`
        ${e=>l`
                ${Bn("DBody",e.weight,e.paragraph)}
                color: ${cn.Neutral[1]};
                ${On(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H1=a.h1`
        ${e=>l`
                ${Bn("H1",e.weight,e.paragraph)}
                color: ${cn.Neutral[1]};
                ${On(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H2=a.h2`
        ${e=>l`
                ${Bn("H2",e.weight,e.paragraph)}
                color: ${cn.Neutral[1]};
                ${On(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H3=a.h3`
        ${e=>l`
                ${Bn("H3",e.weight,e.paragraph)}
                color: ${cn.Neutral[1]};
                ${On(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H4=a.h4`
        ${e=>l`
                ${Bn("H4",e.weight,e.paragraph)}
                color: ${cn.Neutral[1]};
                ${On(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H5=a.h5`
        ${e=>l`
                ${Bn("H5",e.weight,e.paragraph)}
                color: ${cn.Neutral[1]};
                ${On(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H6=a.h6`
        ${e=>l`
                ${Bn("H6",e.weight,e.paragraph)}
                color: ${cn.Neutral[1]};
                ${On(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.Body=a.p`
        ${e=>l`
                ${Bn("Body",e.weight,e.paragraph)}
                color: ${cn.Neutral[1]};
                ${On(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.BodySmall=a.p`
        ${e=>l`
                ${Bn("BodySmall",e.weight,e.paragraph)}
                color: ${cn.Neutral[1]};
                ${On(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.XSmall=a.span`
        ${e=>l`
                ${Bn("XSmall",e.weight,e.paragraph)}
                color: ${cn.Neutral[1]};
                ${On(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.Hyperlink={Default:e=>zn(Object.assign(Object.assign({},e),{textStyle:"Body"})),Small:e=>zn(Object.assign(Object.assign({},e),{textStyle:"BodySmall"}))}}(kn||(kn={}));const _n=a.a`
    ${e=>l`
            ${Bn(e.textStyle,e.weight)}
            color: ${cn.Primary};
            text-decoration: none;

            :hover,
            :active,
            :focus {
                color: ${cn.Secondary};

                svg {
                    color: ${cn.Secondary};
                }
            }
        `}
`,An=a($)`
    height: 1rem;
    width: 1rem;
    margin-left: 0.4rem;
    vertical-align: middle;
`,zn=r=>{var{external:n=!1,children:i}=r,o=ne(r,["external","children"]);return e(_n,Object.assign({},o,{children:[i,n&&t(An,{})]}))},jn=a(tn)`
    flex-direction: ${e=>"right"===e.$buttonIconPosition?"row-reverse":"row"};
    gap: 0.5rem;

    svg {
        flex-shrink: 0;
        height: 1em;
        width: 1em;
    }
`,Mn={Default:c.forwardRef(((r,n)=>{const{children:i,disabled:o=!1,styleType:a="default",danger:s=!1,icon:l,iconPosition:d="left"}=r,c=ne(r,["children","disabled","styleType","danger","icon","iconPosition"]),u={$buttonIconPosition:d,$buttonStyle:o?"disabled":a,$buttonSizeStyle:"default",$buttonIsDanger:s};return e(jn,Object.assign({ref:n,"data-testid":c["data-testid"]||"button-with-icon",disabled:o},u,c,{children:[l,t("span",{children:i})]}))})),Small:c.forwardRef(((r,n)=>{const{children:i,disabled:o=!1,styleType:a="default",danger:s=!1,icon:l,iconPosition:d="left"}=r,c=ne(r,["children","disabled","styleType","danger","icon","iconPosition"]),u={$buttonIconPosition:d,$buttonStyle:o?"disabled":a,$buttonSizeStyle:"small",$buttonIsDanger:s};return e(jn,Object.assign({ref:n,"data-testid":c["data-testid"]||"button-with-icon",disabled:o},u,c,{children:[l,t("span",{children:i})]}))}))},Pn=a.div`
    background-color: ${cn.Neutral[8]};
    border: 1px solid ${cn.Neutral[5]};
    border-radius: 0.5rem;
    overflow: hidden;
    width: 100%;
`,Tn=a.div`
    background-color: ${cn.Neutral[7]};
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
`,Hn=a.div`
    background-color: ${cn.Neutral[8]};
    height: 100%;
    width: 100%;
`,In=a.div`
    flex: 1;
    width: 100%;
    overflow-y: auto;
`,Rn=a.div`
    display: flex;
    align-items: center;

    background-color: ${cn.Neutral[8]};

    ${mn.tablet} {
        border-bottom: 1px solid ${cn.Neutral[5]};
    }
`,Ln=a(kn.H4)`
    flex: 1;
    margin: 1.5rem 0 1rem 1.25rem;

    ${mn.tablet} {
        text-align: center;
        margin: 1.5rem 0;
    }
`,Wn=a(pn)`
    padding: 1.5rem 1.25rem;
    margin-right: auto;
    color: ${cn.Neutral[3]};

    svg {
        height: 1.5rem;
        width: 1.5rem;
    }

    &:hover {
        color: ${cn.Neutral[2]};
    }
`,Nn=a(nn.Small)`
    background-color: transparent;
    padding: 1.5rem 1.25rem 1rem 1.25rem;
    height: auto;

    ${mn.tablet} {
        padding: 1.5rem 1.25rem;
    }
`,Vn=a(Mn.Default)`
    width: 100%;
`,Yn=a.div`
    padding: 1.5rem 1.25rem;
    background-color: ${cn.Neutral[8]};
    border-top: 1px solid ${cn.Neutral[5]};
`,qn=a(nn.Default)`
    width: 100%;
`,Qn=c.createContext({mode:"default",rootNode:null});var Un=ue((function(e){return null==e})),Jn=function(e,t){return Jn=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])},Jn(e,t)};var Xn=function(){return Xn=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var i in t=arguments[r])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e},Xn.apply(this,arguments)};var Zn="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};var Gn=function(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)},Kn="object"==typeof Zn&&Zn&&Zn.Object===Object&&Zn,ei="object"==typeof self&&self&&self.Object===Object&&self,ti=Kn||ei||Function("return this")(),ri=ti,ni=function(){return ri.Date.now()},ii=/\s/;var oi=function(e){for(var t=e.length;t--&&ii.test(e.charAt(t)););return t},ai=/^\s+/;var si=function(e){return e?e.slice(0,oi(e)+1).replace(ai,""):e},li=ti.Symbol,di=li,ci=Object.prototype,ui=ci.hasOwnProperty,hi=ci.toString,mi=di?di.toStringTag:void 0;var fi=function(e){var t=ui.call(e,mi),r=e[mi];try{e[mi]=void 0;var n=!0}catch(e){}var i=hi.call(e);return n&&(t?e[mi]=r:delete e[mi]),i},gi=Object.prototype.toString;var pi=fi,bi=function(e){return gi.call(e)},yi=li?li.toStringTag:void 0;var vi=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":yi&&yi in Object(e)?pi(e):bi(e)},xi=function(e){return null!=e&&"object"==typeof e};var wi=si,Fi=Gn,$i=function(e){return"symbol"==typeof e||xi(e)&&"[object Symbol]"==vi(e)},Si=/^[-+]0x[0-9a-f]+$/i,Di=/^0b[01]+$/i,Ei=/^0o[0-7]+$/i,Ci=parseInt;var Bi=Gn,Oi=ni,ki=function(e){if("number"==typeof e)return e;if($i(e))return NaN;if(Fi(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=Fi(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=wi(e);var r=Di.test(e);return r||Ei.test(e)?Ci(e.slice(2),r?2:8):Si.test(e)?NaN:+e},_i=Math.max,Ai=Math.min;var zi=function(e,t,r){var n,i,o,a,s,l,d=0,c=!1,u=!1,h=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function m(t){var r=n,o=i;return n=i=void 0,d=t,a=e.apply(o,r)}function f(e){var r=e-l;return void 0===l||r>=t||r<0||u&&e-d>=o}function g(){var e=Oi();if(f(e))return p(e);s=setTimeout(g,function(e){var r=t-(e-l);return u?Ai(r,o-(e-d)):r}(e))}function p(e){return s=void 0,h&&n?m(e):(n=i=void 0,a)}function b(){var e=Oi(),r=f(e);if(n=arguments,i=this,l=e,r){if(void 0===s)return function(e){return d=e,s=setTimeout(g,t),c?m(e):a}(l);if(u)return clearTimeout(s),s=setTimeout(g,t),m(l)}return void 0===s&&(s=setTimeout(g,t)),a}return t=ki(t)||0,Bi(r)&&(c=!!r.leading,o=(u="maxWait"in r)?_i(ki(r.maxWait)||0,t):o,h="trailing"in r?!!r.trailing:h),b.cancel=function(){void 0!==s&&clearTimeout(s),d=0,n=l=i=s=void 0},b.flush=function(){return void 0===s?a:p(Oi())},b},ji=zi,Mi=Gn;var Pi=function(e,t,r){var n=!0,i=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return Mi(r)&&(n="leading"in r?!!r.leading:n,i="trailing"in r?!!r.trailing:i),ji(e,t,{leading:n,maxWait:t,trailing:i})},Ti=function(e,t,r,n){switch(t){case"debounce":return zi(e,r,n);case"throttle":return Pi(e,r,n);default:return e}},Hi=function(e){return"function"==typeof e},Ii=function(){return"undefined"==typeof window},Ri=function(e){return e instanceof Element||e instanceof HTMLDocument},Li=function(e,t,r,n){return function(i){var o=i.width,a=i.height;t((function(t){return t.width===o&&t.height===a||t.width===o&&!n||t.height===a&&!r?t:(e&&Hi(e)&&e(o,a),{width:o,height:a})}))}};!function(e){function t(t){var r=e.call(this,t)||this;r.cancelHandler=function(){r.resizeHandler&&r.resizeHandler.cancel&&(r.resizeHandler.cancel(),r.resizeHandler=null)},r.attachObserver=function(){var e=r.props,t=e.targetRef,n=e.observerOptions;if(!Ii()){t&&t.current&&(r.targetRef.current=t.current);var i=r.getElement();i&&(r.observableElement&&r.observableElement===i||(r.observableElement=i,r.resizeObserver.observe(i,n)))}},r.getElement=function(){var e=r.props,t=e.querySelector,n=e.targetDomEl;if(Ii())return null;if(t)return document.querySelector(t);if(n&&Ri(n))return n;if(r.targetRef&&Ri(r.targetRef.current))return r.targetRef.current;var i=D(r);if(!i)return null;switch(r.getRenderType()){case"renderProp":case"childFunction":case"child":case"childArray":return i;default:return i.parentElement}},r.createResizeHandler=function(e){var t=r.props,n=t.handleWidth,i=void 0===n||n,o=t.handleHeight,a=void 0===o||o,s=t.onResize;if(i||a){var l=Li(s,r.setState.bind(r),i,a);e.forEach((function(e){var t=e&&e.contentRect||{},n=t.width,i=t.height;!r.skipOnMount&&!Ii()&&l({width:n,height:i}),r.skipOnMount=!1}))}},r.getRenderType=function(){var e=r.props,t=e.render,n=e.children;return Hi(t)?"renderProp":Hi(n)?"childFunction":m(n)?"child":Array.isArray(n)?"childArray":"parent"};var n=t.skipOnMount,i=t.refreshMode,o=t.refreshRate,a=void 0===o?1e3:o,s=t.refreshOptions;return r.state={width:void 0,height:void 0},r.skipOnMount=n,r.targetRef=f(),r.observableElement=null,Ii()||(r.resizeHandler=Ti(r.createResizeHandler,i,a,s),r.resizeObserver=new window.ResizeObserver(r.resizeHandler)),r}(function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");function r(){this.constructor=e}Jn(e,t),e.prototype=null===t?Object.create(t):(r.prototype=t.prototype,new r)})(t,e),t.prototype.componentDidMount=function(){this.attachObserver()},t.prototype.componentDidUpdate=function(){this.attachObserver()},t.prototype.componentWillUnmount=function(){Ii()||(this.observableElement=null,this.resizeObserver.disconnect(),this.cancelHandler())},t.prototype.render=function(){var e,t=this.props,r=t.render,n=t.children,i=t.nodeType,o=void 0===i?"div":i,a=this.state,s={width:a.width,height:a.height,targetRef:this.targetRef};switch(this.getRenderType()){case"renderProp":return r&&r(s);case"childFunction":return(e=n)(s);case"child":if((e=n).type&&"string"==typeof e.type){var l=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(n=Object.getOwnPropertySymbols(e);i<n.length;i++)t.indexOf(n[i])<0&&Object.prototype.propertyIsEnumerable.call(e,n[i])&&(r[n[i]]=e[n[i]])}return r}(s,["targetRef"]);return g(e,l)}return g(e,s);case"childArray":return(e=n).map((function(e){return!!e&&g(e,s)}));default:return d.createElement(o,null)}}}(p);var Wi=Ii()?b:y;function Ni(e){void 0===e&&(e={});var t=e.skipOnMount,r=void 0!==t&&t,n=e.refreshMode,i=e.refreshRate,o=void 0===i?1e3:i,a=e.refreshOptions,s=e.handleWidth,l=void 0===s||s,d=e.handleHeight,c=void 0===d||d,m=e.targetRef,f=e.observerOptions,g=e.onResize,p=u(r),b=u(null),y=null!=m?m:b,v=u(),x=h({width:void 0,height:void 0}),w=x[0],F=x[1];return Wi((function(){if(!Ii()){var e=Li(g,F,l,c);v.current=Ti((function(t){(l||c)&&t.forEach((function(t){var r=t&&t.contentRect||{},n=r.width,i=r.height;!p.current&&!Ii()&&e({width:n,height:i}),p.current=!1}))}),n,o,a);var t=new window.ResizeObserver(v.current);return y.current&&t.observe(y.current,f),function(){t.disconnect();var e=v.current;e&&e.cancel&&e.cancel()}}}),[n,o,a,l,c,g,f,y.current]),Xn({ref:y},w)}var Vi=Object.defineProperty,Yi={};((e,t)=>{for(var r in t)Vi(e,r,{get:t[r],enumerable:!0})})(Yi,{assign:()=>Do,colors:()=>Fo,createStringInterpolator:()=>yo,skipAnimation:()=>$o,to:()=>vo,willAdvance:()=>So});var qi=lo(),Qi=e=>io(e,qi),Ui=lo();Qi.write=e=>io(e,Ui);var Ji=lo();Qi.onStart=e=>io(e,Ji);var Xi=lo();Qi.onFrame=e=>io(e,Xi);var Zi=lo();Qi.onFinish=e=>io(e,Zi);var Gi=[];Qi.setTimeout=(e,t)=>{const r=Qi.now()+t,n=()=>{const e=Gi.findIndex((e=>e.cancel==n));~e&&Gi.splice(e,1),ro-=~e?1:0},i={time:r,handler:e,cancel:n};return Gi.splice(Ki(r),0,i),ro+=1,oo(),i};var Ki=e=>~(~Gi.findIndex((t=>t.time>e))||~Gi.length);Qi.cancel=e=>{Ji.delete(e),Xi.delete(e),Zi.delete(e),qi.delete(e),Ui.delete(e)},Qi.sync=e=>{no=!0,Qi.batchedUpdates(e),no=!1},Qi.throttle=e=>{let t;function r(){try{e(...t)}finally{t=null}}function n(...e){t=e,Qi.onStart(r)}return n.handler=e,n.cancel=()=>{Ji.delete(r),t=null},n};var eo="undefined"!=typeof window?window.requestAnimationFrame:()=>{};Qi.use=e=>eo=e,Qi.now="undefined"!=typeof performance?()=>performance.now():Date.now,Qi.batchedUpdates=e=>e(),Qi.catch=console.error,Qi.frameLoop="always",Qi.advance=()=>{"demand"!==Qi.frameLoop?console.warn("Cannot call the manual advancement of rafz whilst frameLoop is not set as demand"):so()};var to=-1,ro=0,no=!1;function io(e,t){no?(t.delete(e),e(0)):(t.add(e),oo())}function oo(){to<0&&(to=0,"demand"!==Qi.frameLoop&&eo(ao))}function ao(){~to&&(eo(ao),Qi.batchedUpdates(so))}function so(){const e=to;to=Qi.now();const t=Ki(to);t&&(co(Gi.splice(0,t),(e=>e.handler())),ro-=t),ro?(Ji.flush(),qi.flush(e?Math.min(64,to-e):16.667),Xi.flush(),Ui.flush(),Zi.flush()):to=-1}function lo(){let e=new Set,t=e;return{add(r){ro+=t!=e||e.has(r)?0:1,e.add(r)},delete:r=>(ro-=t==e&&e.has(r)?1:0,e.delete(r)),flush(r){t.size&&(e=new Set,ro-=t.size,co(t,(t=>t(r)&&e.add(t))),ro+=e.size,t=e)}}}function co(e,t){e.forEach((e=>{try{t(e)}catch(e){Qi.catch(e)}}))}function uo(){}var ho={arr:Array.isArray,obj:e=>!!e&&"Object"===e.constructor.name,fun:e=>"function"==typeof e,str:e=>"string"==typeof e,num:e=>"number"==typeof e,und:e=>void 0===e};function mo(e,t){if(ho.arr(e)){if(!ho.arr(t)||e.length!==t.length)return!1;for(let r=0;r<e.length;r++)if(e[r]!==t[r])return!1;return!0}return e===t}var fo=(e,t)=>e.forEach(t);function go(e,t,r){if(ho.arr(e))for(let n=0;n<e.length;n++)t.call(r,e[n],`${n}`);else for(const n in e)e.hasOwnProperty(n)&&t.call(r,e[n],n)}var po=e=>ho.und(e)?[]:ho.arr(e)?e:[e];function bo(e,t){if(e.size){const r=Array.from(e);e.clear(),fo(r,t)}}var yo,vo,xo=(e,...t)=>bo(e,(e=>e(...t))),wo=()=>"undefined"==typeof window||!window.navigator||/ServerSideRendering|^Deno\//.test(window.navigator.userAgent),Fo=null,$o=!1,So=uo,Do=e=>{e.to&&(vo=e.to),e.now&&(Qi.now=e.now),void 0!==e.colors&&(Fo=e.colors),null!=e.skipAnimation&&($o=e.skipAnimation),e.createStringInterpolator&&(yo=e.createStringInterpolator),e.requestAnimationFrame&&Qi.use(e.requestAnimationFrame),e.batchedUpdates&&(Qi.batchedUpdates=e.batchedUpdates),e.willAdvance&&(So=e.willAdvance),e.frameLoop&&(Qi.frameLoop=e.frameLoop)},Eo=new Set,Co=[],Bo=[],Oo=0,ko={get idle(){return!Eo.size&&!Co.length},start(e){Oo>e.priority?(Eo.add(e),Qi.onStart(_o)):(Ao(e),Qi(jo))},advance:jo,sort(e){if(Oo)Qi.onFrame((()=>ko.sort(e)));else{const t=Co.indexOf(e);~t&&(Co.splice(t,1),zo(e))}},clear(){Co=[],Eo.clear()}};function _o(){Eo.forEach(Ao),Eo.clear(),Qi(jo)}function Ao(e){Co.includes(e)||zo(e)}function zo(e){Co.splice(function(e,t){const r=e.findIndex(t);return r<0?e.length:r}(Co,(t=>t.priority>e.priority)),0,e)}function jo(e){const t=Bo;for(let r=0;r<Co.length;r++){const n=Co[r];Oo=n.priority,n.idle||(So(n),n.advance(e),n.idle||t.push(n))}return Oo=0,(Bo=Co).length=0,(Co=t).length>0}var Mo="[-+]?\\d*\\.?\\d+",Po=Mo+"%";function To(...e){return"\\(\\s*("+e.join(")\\s*,\\s*(")+")\\s*\\)"}var Ho=new RegExp("rgb"+To(Mo,Mo,Mo)),Io=new RegExp("rgba"+To(Mo,Mo,Mo,Mo)),Ro=new RegExp("hsl"+To(Mo,Po,Po)),Lo=new RegExp("hsla"+To(Mo,Po,Po,Mo)),Wo=/^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,No=/^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,Vo=/^#([0-9a-fA-F]{6})$/,Yo=/^#([0-9a-fA-F]{8})$/;function qo(e,t,r){return r<0&&(r+=1),r>1&&(r-=1),r<1/6?e+6*(t-e)*r:r<.5?t:r<2/3?e+(t-e)*(2/3-r)*6:e}function Qo(e,t,r){const n=r<.5?r*(1+t):r+t-r*t,i=2*r-n,o=qo(i,n,e+1/3),a=qo(i,n,e),s=qo(i,n,e-1/3);return Math.round(255*o)<<24|Math.round(255*a)<<16|Math.round(255*s)<<8}function Uo(e){const t=parseInt(e,10);return t<0?0:t>255?255:t}function Jo(e){return(parseFloat(e)%360+360)%360/360}function Xo(e){const t=parseFloat(e);return t<0?0:t>1?255:Math.round(255*t)}function Zo(e){const t=parseFloat(e);return t<0?0:t>100?1:t/100}function Go(e){let t=function(e){let t;return"number"==typeof e?e>>>0===e&&e>=0&&e<=4294967295?e:null:(t=Vo.exec(e))?parseInt(t[1]+"ff",16)>>>0:Fo&&void 0!==Fo[e]?Fo[e]:(t=Ho.exec(e))?(Uo(t[1])<<24|Uo(t[2])<<16|Uo(t[3])<<8|255)>>>0:(t=Io.exec(e))?(Uo(t[1])<<24|Uo(t[2])<<16|Uo(t[3])<<8|Xo(t[4]))>>>0:(t=Wo.exec(e))?parseInt(t[1]+t[1]+t[2]+t[2]+t[3]+t[3]+"ff",16)>>>0:(t=Yo.exec(e))?parseInt(t[1],16)>>>0:(t=No.exec(e))?parseInt(t[1]+t[1]+t[2]+t[2]+t[3]+t[3]+t[4]+t[4],16)>>>0:(t=Ro.exec(e))?(255|Qo(Jo(t[1]),Zo(t[2]),Zo(t[3])))>>>0:(t=Lo.exec(e))?(Qo(Jo(t[1]),Zo(t[2]),Zo(t[3]))|Xo(t[4]))>>>0:null}(e);if(null===t)return e;t=t||0;return`rgba(${(4278190080&t)>>>24}, ${(16711680&t)>>>16}, ${(65280&t)>>>8}, ${(255&t)/255})`}var Ko=(e,t,r)=>{if(ho.fun(e))return e;if(ho.arr(e))return Ko({range:e,output:t,extrapolate:r});if(ho.str(e.output[0]))return yo(e);const n=e,i=n.output,o=n.range||[0,1],a=n.extrapolateLeft||n.extrapolate||"extend",s=n.extrapolateRight||n.extrapolate||"extend",l=n.easing||(e=>e);return e=>{const t=function(e,t){for(var r=1;r<t.length-1&&!(t[r]>=e);++r);return r-1}(e,o);return function(e,t,r,n,i,o,a,s,l){let d=l?l(e):e;if(d<t){if("identity"===a)return d;"clamp"===a&&(d=t)}if(d>r){if("identity"===s)return d;"clamp"===s&&(d=r)}if(n===i)return n;if(t===r)return e<=t?n:i;t===-1/0?d=-d:r===1/0?d-=t:d=(d-t)/(r-t);d=o(d),n===-1/0?d=-d:i===1/0?d+=n:d=d*(i-n)+n;return d}(e,o[t],o[t+1],i[t],i[t+1],l,a,s,n.map)}};var ea=1.70158,ta=1.525*ea,ra=ea+1,na=2*Math.PI/3,ia=2*Math.PI/4.5,oa=e=>{const t=7.5625,r=2.75;return e<1/r?t*e*e:e<2/r?t*(e-=1.5/r)*e+.75:e<2.5/r?t*(e-=2.25/r)*e+.9375:t*(e-=2.625/r)*e+.984375},aa={linear:e=>e,easeInQuad:e=>e*e,easeOutQuad:e=>1-(1-e)*(1-e),easeInOutQuad:e=>e<.5?2*e*e:1-Math.pow(-2*e+2,2)/2,easeInCubic:e=>e*e*e,easeOutCubic:e=>1-Math.pow(1-e,3),easeInOutCubic:e=>e<.5?4*e*e*e:1-Math.pow(-2*e+2,3)/2,easeInQuart:e=>e*e*e*e,easeOutQuart:e=>1-Math.pow(1-e,4),easeInOutQuart:e=>e<.5?8*e*e*e*e:1-Math.pow(-2*e+2,4)/2,easeInQuint:e=>e*e*e*e*e,easeOutQuint:e=>1-Math.pow(1-e,5),easeInOutQuint:e=>e<.5?16*e*e*e*e*e:1-Math.pow(-2*e+2,5)/2,easeInSine:e=>1-Math.cos(e*Math.PI/2),easeOutSine:e=>Math.sin(e*Math.PI/2),easeInOutSine:e=>-(Math.cos(Math.PI*e)-1)/2,easeInExpo:e=>0===e?0:Math.pow(2,10*e-10),easeOutExpo:e=>1===e?1:1-Math.pow(2,-10*e),easeInOutExpo:e=>0===e?0:1===e?1:e<.5?Math.pow(2,20*e-10)/2:(2-Math.pow(2,-20*e+10))/2,easeInCirc:e=>1-Math.sqrt(1-Math.pow(e,2)),easeOutCirc:e=>Math.sqrt(1-Math.pow(e-1,2)),easeInOutCirc:e=>e<.5?(1-Math.sqrt(1-Math.pow(2*e,2)))/2:(Math.sqrt(1-Math.pow(-2*e+2,2))+1)/2,easeInBack:e=>ra*e*e*e-ea*e*e,easeOutBack:e=>1+ra*Math.pow(e-1,3)+ea*Math.pow(e-1,2),easeInOutBack:e=>e<.5?Math.pow(2*e,2)*(7.189819*e-ta)/2:(Math.pow(2*e-2,2)*((ta+1)*(2*e-2)+ta)+2)/2,easeInElastic:e=>0===e?0:1===e?1:-Math.pow(2,10*e-10)*Math.sin((10*e-10.75)*na),easeOutElastic:e=>0===e?0:1===e?1:Math.pow(2,-10*e)*Math.sin((10*e-.75)*na)+1,easeInOutElastic:e=>0===e?0:1===e?1:e<.5?-Math.pow(2,20*e-10)*Math.sin((20*e-11.125)*ia)/2:Math.pow(2,-20*e+10)*Math.sin((20*e-11.125)*ia)/2+1,easeInBounce:e=>1-oa(1-e),easeOutBounce:oa,easeInOutBounce:e=>e<.5?(1-oa(1-2*e))/2:(1+oa(2*e-1))/2,steps:(e,t="end")=>r=>{const n=(r="end"===t?Math.min(r,.999):Math.max(r,.001))*e,i="end"===t?Math.floor(n):Math.ceil(n);return o=0,a=1,s=i/e,Math.min(Math.max(s,o),a);var o,a,s}},sa=Symbol.for("FluidValue.get"),la=Symbol.for("FluidValue.observers"),da=e=>Boolean(e&&e[sa]),ca=e=>e&&e[sa]?e[sa]():e,ua=e=>e[la]||null;function ha(e,t){const r=e[la];r&&r.forEach((e=>{!function(e,t){e.eventObserved?e.eventObserved(t):e(t)}(e,t)}))}var ma=class{constructor(e){if(!e&&!(e=this.get))throw Error("Unknown getter");fa(this,e)}},fa=(e,t)=>ya(e,sa,t);function ga(e,t){if(e[sa]){let r=e[la];r||ya(e,la,r=new Set),r.has(t)||(r.add(t),e.observerAdded&&e.observerAdded(r.size,t))}return t}function pa(e,t){const r=e[la];if(r&&r.has(t)){const n=r.size-1;n?r.delete(t):e[la]=null,e.observerRemoved&&e.observerRemoved(n,t)}}var ba,ya=(e,t,r)=>Object.defineProperty(e,t,{value:r,writable:!0,configurable:!0}),va=/[+\-]?(?:0|[1-9]\d*)(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,xa=/(#(?:[0-9a-f]{2}){2,4}|(#[0-9a-f]{3})|(rgb|hsl)a?\((-?\d+%?[,\s]+){2,3}\s*[\d\.]+%?\))/gi,wa=new RegExp(`(${va.source})(%|[a-z]+)`,"i"),Fa=/rgba\(([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+)\)/gi,$a=/var\((--[a-zA-Z0-9-_]+),? ?([a-zA-Z0-9 ()%#.,-]+)?\)/,Sa=e=>{const[t,r]=Da(e);if(!t||wo())return e;const n=window.getComputedStyle(document.documentElement).getPropertyValue(t);if(n)return n.trim();if(r&&r.startsWith("--")){const t=window.getComputedStyle(document.documentElement).getPropertyValue(r);return t||e}return r&&$a.test(r)?Sa(r):r||e},Da=e=>{const t=$a.exec(e);if(!t)return[,];const[,r,n]=t;return[r,n]},Ea=(e,t,r,n,i)=>`rgba(${Math.round(t)}, ${Math.round(r)}, ${Math.round(n)}, ${i})`,Ca=e=>{ba||(ba=Fo?new RegExp(`(${Object.keys(Fo).join("|")})(?!\\w)`,"g"):/^\b$/);const t=e.output.map((e=>ca(e).replace($a,Sa).replace(xa,Go).replace(ba,Go))),r=t.map((e=>e.match(va).map(Number))),n=r[0].map(((e,t)=>r.map((e=>{if(!(t in e))throw Error('The arity of each "output" value must be equal');return e[t]})))).map((t=>Ko({...e,output:t})));return e=>{const r=!wa.test(t[0])&&t.find((e=>wa.test(e)))?.replace(va,"");let i=0;return t[0].replace(va,(()=>`${n[i++](e)}${r||""}`)).replace(Fa,Ea)}},Ba="react-spring: ",Oa=e=>{const t=e;let r=!1;if("function"!=typeof t)throw new TypeError(`${Ba}once requires a function parameter`);return(...e)=>{r||(t(...e),r=!0)}},ka=Oa(console.warn);var _a=Oa(console.warn);function Aa(e){return ho.str(e)&&("#"==e[0]||/\d/.test(e)||!wo()&&$a.test(e)||e in(Fo||{}))}var za=wo()?b:y,ja=()=>{const e=u(!1);return za((()=>(e.current=!0,()=>{e.current=!1})),[]),e};function Ma(){const e=h()[1],t=ja();return()=>{t.current&&e(Math.random())}}var Pa=e=>b(e,Ta),Ta=[];function Ha(e){const t=u();return b((()=>{t.current=e})),t.current}var Ia=Symbol.for("Animated:node"),Ra=e=>e&&e[Ia],La=(e,t)=>{return r=e,n=Ia,i=t,Object.defineProperty(r,n,{value:i,writable:!0,configurable:!0});var r,n,i},Wa=e=>e&&e[Ia]&&e[Ia].getPayload(),Na=class{constructor(){La(this,this)}getPayload(){return this.payload||[]}},Va=class extends Na{constructor(e){super(),this._value=e,this.done=!0,this.durationProgress=0,ho.num(this._value)&&(this.lastPosition=this._value)}static create(e){return new Va(e)}getPayload(){return[this]}getValue(){return this._value}setValue(e,t){return ho.num(e)&&(this.lastPosition=e,t&&(e=Math.round(e/t)*t,this.done&&(this.lastPosition=e))),this._value!==e&&(this._value=e,!0)}reset(){const{done:e}=this;this.done=!1,ho.num(this._value)&&(this.elapsedTime=0,this.durationProgress=0,this.lastPosition=this._value,e&&(this.lastVelocity=null),this.v0=null)}},Ya=class extends Va{constructor(e){super(0),this._string=null,this._toString=Ko({output:[e,e]})}static create(e){return new Ya(e)}getValue(){const e=this._string;return null==e?this._string=this._toString(this._value):e}setValue(e){if(ho.str(e)){if(e==this._string)return!1;this._string=e,this._value=1}else{if(!super.setValue(e))return!1;this._string=null}return!0}reset(e){e&&(this._toString=Ko({output:[this.getValue(),e]})),this._value=0,super.reset()}},qa={dependencies:null},Qa=class extends Na{constructor(e){super(),this.source=e,this.setValue(e)}getValue(e){const t={};return go(this.source,((r,n)=>{var i;(i=r)&&i[Ia]===i?t[n]=r.getValue(e):da(r)?t[n]=ca(r):e||(t[n]=r)})),t}setValue(e){this.source=e,this.payload=this._makePayload(e)}reset(){this.payload&&fo(this.payload,(e=>e.reset()))}_makePayload(e){if(e){const t=new Set;return go(e,this._addToPayload,t),Array.from(t)}}_addToPayload(e){qa.dependencies&&da(e)&&qa.dependencies.add(e);const t=Wa(e);t&&fo(t,(e=>this.add(e)))}},Ua=class extends Qa{constructor(e){super(e)}static create(e){return new Ua(e)}getValue(){return this.source.map((e=>e.getValue()))}setValue(e){const t=this.getPayload();return e.length==t.length?t.map(((t,r)=>t.setValue(e[r]))).some(Boolean):(super.setValue(e.map(Ja)),!0)}};function Ja(e){return(Aa(e)?Ya:Va).create(e)}function Xa(e){const t=Ra(e);return t?t.constructor:ho.arr(e)?Ua:Aa(e)?Ya:Va}var Za=(e,t)=>{const r=!ho.fun(e)||e.prototype&&e.prototype.isReactComponent;return v(((n,i)=>{const o=u(null),a=r&&x((e=>{o.current=function(e,t){e&&(ho.fun(e)?e(t):e.current=t);return t}(i,e)}),[i]),[s,l]=function(e,t){const r=new Set;qa.dependencies=r,e.style&&(e={...e,style:t.createAnimatedStyle(e.style)});return e=new Qa(e),qa.dependencies=null,[e,r]}(n,t),c=Ma(),h=()=>{const e=o.current;if(r&&!e)return;!1===(!!e&&t.applyAnimatedValues(e,s.getValue(!0)))&&c()},m=new Ga(h,l),f=u();za((()=>(f.current=m,fo(l,(e=>ga(e,m))),()=>{f.current&&(fo(f.current.deps,(e=>pa(e,f.current))),Qi.cancel(f.current.update))}))),b(h,[]),Pa((()=>()=>{const e=f.current;fo(e.deps,(t=>pa(t,e)))}));const g=t.getComponentProps(s.getValue());return d.createElement(e,{...g,ref:a})}))},Ga=class{constructor(e,t){this.update=e,this.deps=t}eventObserved(e){"change"==e.type&&Qi.write(this.update)}};var Ka=Symbol.for("AnimatedComponent"),es=e=>ho.str(e)?e:e&&ho.str(e.displayName)?e.displayName:ho.fun(e)&&e.name||null;function ts(e,...t){return ho.fun(e)?e(...t):e}var rs=(e,t)=>!0===e||!!(t&&e&&(ho.fun(e)?e(t):po(e).includes(t))),ns=(e,t)=>ho.obj(e)?t&&e[t]:e,is=(e,t)=>!0===e.default?e[t]:e.default?e.default[t]:void 0,os=e=>e,as=(e,t=os)=>{let r=ss;e.default&&!0!==e.default&&(e=e.default,r=Object.keys(e));const n={};for(const i of r){const r=t(e[i],i);ho.und(r)||(n[i]=r)}return n},ss=["config","onProps","onStart","onChange","onPause","onResume","onRest"],ls={config:1,from:1,to:1,ref:1,loop:1,reset:1,pause:1,cancel:1,reverse:1,immediate:1,default:1,delay:1,onProps:1,onStart:1,onChange:1,onPause:1,onResume:1,onRest:1,onResolve:1,items:1,trail:1,sort:1,expires:1,initial:1,enter:1,update:1,leave:1,children:1,onDestroyed:1,keys:1,callId:1,parentId:1};function ds(e){const t=function(e){const t={};let r=0;if(go(e,((e,n)=>{ls[n]||(t[n]=e,r++)})),r)return t}(e);if(t){const r={to:t};return go(e,((e,n)=>n in t||(r[n]=e))),r}return{...e}}function cs(e){return e=ca(e),ho.arr(e)?e.map(cs):Aa(e)?Yi.createStringInterpolator({range:[0,1],output:[e,e]})(1):e}function us(e){return ho.fun(e)||ho.arr(e)&&ho.obj(e[0])}var hs={tension:170,friction:26,mass:1,damping:1,easing:aa.linear,clamp:!1},ms=class{constructor(){this.velocity=0,Object.assign(this,hs)}};function fs(e,t){if(ho.und(t.decay)){const r=!ho.und(t.tension)||!ho.und(t.friction);!r&&ho.und(t.frequency)&&ho.und(t.damping)&&ho.und(t.mass)||(e.duration=void 0,e.decay=void 0),r&&(e.frequency=void 0)}else e.duration=void 0}var gs=[],ps=class{constructor(){this.changed=!1,this.values=gs,this.toValues=null,this.fromValues=gs,this.config=new ms,this.immediate=!1}};function bs(e,{key:t,props:r,defaultProps:n,state:i,actions:o}){return new Promise(((a,s)=>{let l,d,c=rs(r.cancel??n?.cancel,t);if(c)m();else{ho.und(r.pause)||(i.paused=rs(r.pause,t));let e=n?.pause;!0!==e&&(e=i.paused||rs(e,t)),l=ts(r.delay||0,t),e?(i.resumeQueue.add(h),o.pause()):(o.resume(),h())}function u(){i.resumeQueue.add(h),i.timeouts.delete(d),d.cancel(),l=d.time-Qi.now()}function h(){l>0&&!Yi.skipAnimation?(i.delayed=!0,d=Qi.setTimeout(m,l),i.pauseQueue.add(u),i.timeouts.add(d)):m()}function m(){i.delayed&&(i.delayed=!1),i.pauseQueue.delete(u),i.timeouts.delete(d),e<=(i.cancelId||0)&&(c=!0);try{o.start({...r,callId:e,cancel:c},a)}catch(e){s(e)}}}))}var ys=(e,t)=>1==t.length?t[0]:t.some((e=>e.cancelled))?ws(e.get()):t.every((e=>e.noop))?vs(e.get()):xs(e.get(),t.every((e=>e.finished))),vs=e=>({value:e,noop:!0,finished:!0,cancelled:!1}),xs=(e,t,r=!1)=>({value:e,finished:t,cancelled:r}),ws=e=>({value:e,cancelled:!0,finished:!1});function Fs(e,t,r,n){const{callId:i,parentId:o,onRest:a}=t,{asyncTo:s,promise:l}=r;return o||e!==s||t.reset?r.promise=(async()=>{r.asyncId=i,r.asyncTo=e;const d=as(t,((e,t)=>"onRest"===t?void 0:e));let c,u;const h=new Promise(((e,t)=>(c=e,u=t))),m=e=>{const t=i<=(r.cancelId||0)&&ws(n)||i!==r.asyncId&&xs(n,!1);if(t)throw e.result=t,u(e),e},f=(e,t)=>{const o=new Ss,a=new Ds;return(async()=>{if(Yi.skipAnimation)throw $s(r),a.result=xs(n,!1),u(a),a;m(o);const s=ho.obj(e)?{...e}:{...t,to:e};s.parentId=i,go(d,((e,t)=>{ho.und(s[t])&&(s[t]=e)}));const l=await n.start(s);return m(o),r.paused&&await new Promise((e=>{r.resumeQueue.add(e)})),l})()};let g;if(Yi.skipAnimation)return $s(r),xs(n,!1);try{let t;t=ho.arr(e)?(async e=>{for(const t of e)await f(t)})(e):Promise.resolve(e(f,n.stop.bind(n))),await Promise.all([t.then(c),h]),g=xs(n.get(),!0,!1)}catch(e){if(e instanceof Ss)g=e.result;else{if(!(e instanceof Ds))throw e;g=e.result}}finally{i==r.asyncId&&(r.asyncId=o,r.asyncTo=o?s:void 0,r.promise=o?l:void 0)}return ho.fun(a)&&Qi.batchedUpdates((()=>{a(g,n,n.item)})),g})():l}function $s(e,t){bo(e.timeouts,(e=>e.cancel())),e.pauseQueue.clear(),e.resumeQueue.clear(),e.asyncId=e.asyncTo=e.promise=void 0,t&&(e.cancelId=t)}var Ss=class extends Error{constructor(){super("An async animation has been interrupted. You see this error because you forgot to use `await` or `.catch(...)` on its returned promise.")}},Ds=class extends Error{constructor(){super("SkipAnimationSignal")}},Es=e=>e instanceof Bs,Cs=1,Bs=class extends ma{constructor(){super(...arguments),this.id=Cs++,this._priority=0}get priority(){return this._priority}set priority(e){this._priority!=e&&(this._priority=e,this._onPriorityChange(e))}get(){const e=Ra(this);return e&&e.getValue()}to(...e){return Yi.to(this,e)}interpolate(...e){return ka(`${Ba}The "interpolate" function is deprecated in v9 (use "to" instead)`),Yi.to(this,e)}toJSON(){return this.get()}observerAdded(e){1==e&&this._attach()}observerRemoved(e){0==e&&this._detach()}_attach(){}_detach(){}_onChange(e,t=!1){ha(this,{type:"change",parent:this,value:e,idle:t})}_onPriorityChange(e){this.idle||ko.sort(this),ha(this,{type:"priority",parent:this,priority:e})}},Os=Symbol.for("SpringPhase"),ks=e=>(1&e[Os])>0,_s=e=>(2&e[Os])>0,As=e=>(4&e[Os])>0,zs=(e,t)=>t?e[Os]|=3:e[Os]&=-3,js=(e,t)=>t?e[Os]|=4:e[Os]&=-5,Ms=class extends Bs{constructor(e,t){if(super(),this.animation=new ps,this.defaultProps={},this._state={paused:!1,delayed:!1,pauseQueue:new Set,resumeQueue:new Set,timeouts:new Set},this._pendingCalls=new Set,this._lastCallId=0,this._lastToId=0,this._memoizedDuration=0,!ho.und(e)||!ho.und(t)){const r=ho.obj(e)?{...e}:{...t,from:e};ho.und(r.default)&&(r.default=!0),this.start(r)}}get idle(){return!(_s(this)||this._state.asyncTo)||As(this)}get goal(){return ca(this.animation.to)}get velocity(){const e=Ra(this);return e instanceof Va?e.lastVelocity||0:e.getPayload().map((e=>e.lastVelocity||0))}get hasAnimated(){return ks(this)}get isAnimating(){return _s(this)}get isPaused(){return As(this)}get isDelayed(){return this._state.delayed}advance(e){let t=!0,r=!1;const n=this.animation;let{toValues:i}=n;const{config:o}=n,a=Wa(n.to);!a&&da(n.to)&&(i=po(ca(n.to))),n.values.forEach(((s,l)=>{if(s.done)return;const d=s.constructor==Ya?1:a?a[l].lastPosition:i[l];let c=n.immediate,u=d;if(!c){if(u=s.lastPosition,o.tension<=0)return void(s.done=!0);let t=s.elapsedTime+=e;const r=n.fromValues[l],i=null!=s.v0?s.v0:s.v0=ho.arr(o.velocity)?o.velocity[l]:o.velocity;let a;const h=o.precision||(r==d?.005:Math.min(1,.001*Math.abs(d-r)));if(ho.und(o.duration))if(o.decay){const e=!0===o.decay?.998:o.decay,n=Math.exp(-(1-e)*t);u=r+i/(1-e)*(1-n),c=Math.abs(s.lastPosition-u)<=h,a=i*n}else{a=null==s.lastVelocity?i:s.lastVelocity;const t=o.restVelocity||h/10,n=o.clamp?0:o.bounce,l=!ho.und(n),m=r==d?s.v0>0:r<d;let f,g=!1;const p=1,b=Math.ceil(e/p);for(let e=0;e<b&&(f=Math.abs(a)>t,f||(c=Math.abs(d-u)<=h,!c));++e){l&&(g=u==d||u>d==m,g&&(a=-a*n,u=d));a+=(1e-6*-o.tension*(u-d)+.001*-o.friction*a)/o.mass*p,u+=a*p}}else{let n=1;o.duration>0&&(this._memoizedDuration!==o.duration&&(this._memoizedDuration=o.duration,s.durationProgress>0&&(s.elapsedTime=o.duration*s.durationProgress,t=s.elapsedTime+=e)),n=(o.progress||0)+t/this._memoizedDuration,n=n>1?1:n<0?0:n,s.durationProgress=n),u=r+o.easing(n)*(d-r),a=(u-s.lastPosition)/e,c=1==n}s.lastVelocity=a,Number.isNaN(u)&&(console.warn("Got NaN while animating:",this),c=!0)}a&&!a[l].done&&(c=!1),c?s.done=!0:t=!1,s.setValue(u,o.round)&&(r=!0)}));const s=Ra(this),l=s.getValue();if(t){const e=ca(n.to);l===e&&!r||o.decay?r&&o.decay&&this._onChange(l):(s.setValue(e),this._onChange(e)),this._stop()}else r&&this._onChange(l)}set(e){return Qi.batchedUpdates((()=>{this._stop(),this._focus(e),this._set(e)})),this}pause(){this._update({pause:!0})}resume(){this._update({pause:!1})}finish(){if(_s(this)){const{to:e,config:t}=this.animation;Qi.batchedUpdates((()=>{this._onStart(),t.decay||this._set(e,!1),this._stop()}))}return this}update(e){return(this.queue||(this.queue=[])).push(e),this}start(e,t){let r;return ho.und(e)?(r=this.queue||[],this.queue=[]):r=[ho.obj(e)?e:{...t,to:e}],Promise.all(r.map((e=>this._update(e)))).then((e=>ys(this,e)))}stop(e){const{to:t}=this.animation;return this._focus(this.get()),$s(this._state,e&&this._lastCallId),Qi.batchedUpdates((()=>this._stop(t,e))),this}reset(){this._update({reset:!0})}eventObserved(e){"change"==e.type?this._start():"priority"==e.type&&(this.priority=e.priority+1)}_prepareNode(e){const t=this.key||"";let{to:r,from:n}=e;r=ho.obj(r)?r[t]:r,(null==r||us(r))&&(r=void 0),n=ho.obj(n)?n[t]:n,null==n&&(n=void 0);const i={to:r,from:n};return ks(this)||(e.reverse&&([r,n]=[n,r]),n=ca(n),ho.und(n)?Ra(this)||this._set(r):this._set(n)),i}_update({...e},t){const{key:r,defaultProps:n}=this;e.default&&Object.assign(n,as(e,((e,t)=>/^on/.test(t)?ns(e,r):e))),Ws(this,e,"onProps"),Ns(this,"onProps",e,this);const i=this._prepareNode(e);if(Object.isFrozen(this))throw Error("Cannot animate a `SpringValue` object that is frozen. Did you forget to pass your component to `animated(...)` before animating its props?");const o=this._state;return bs(++this._lastCallId,{key:r,props:e,defaultProps:n,state:o,actions:{pause:()=>{As(this)||(js(this,!0),xo(o.pauseQueue),Ns(this,"onPause",xs(this,Ps(this,this.animation.to)),this))},resume:()=>{As(this)&&(js(this,!1),_s(this)&&this._resume(),xo(o.resumeQueue),Ns(this,"onResume",xs(this,Ps(this,this.animation.to)),this))},start:this._merge.bind(this,i)}}).then((r=>{if(e.loop&&r.finished&&(!t||!r.noop)){const t=Ts(e);if(t)return this._update(t,!0)}return r}))}_merge(e,t,r){if(t.cancel)return this.stop(!0),r(ws(this));const n=!ho.und(e.to),i=!ho.und(e.from);if(n||i){if(!(t.callId>this._lastToId))return r(ws(this));this._lastToId=t.callId}const{key:o,defaultProps:a,animation:s}=this,{to:l,from:d}=s;let{to:c=l,from:u=d}=e;!i||n||t.default&&!ho.und(c)||(c=u),t.reverse&&([c,u]=[u,c]);const h=!mo(u,d);h&&(s.from=u),u=ca(u);const m=!mo(c,l);m&&this._focus(c);const f=us(t.to),{config:g}=s,{decay:p,velocity:b}=g;(n||i)&&(g.velocity=0),t.config&&!f&&function(e,t,r){r&&(fs(r={...r},t),t={...r,...t}),fs(e,t),Object.assign(e,t);for(const t in hs)null==e[t]&&(e[t]=hs[t]);let{frequency:n,damping:i}=e;const{mass:o}=e;ho.und(n)||(n<.01&&(n=.01),i<0&&(i=0),e.tension=Math.pow(2*Math.PI/n,2)*o,e.friction=4*Math.PI*i*o/n)}(g,ts(t.config,o),t.config!==a.config?ts(a.config,o):void 0);let y=Ra(this);if(!y||ho.und(c))return r(xs(this,!0));const v=ho.und(t.reset)?i&&!t.default:!ho.und(u)&&rs(t.reset,o),x=v?u:this.get(),w=cs(c),F=ho.num(w)||ho.arr(w)||Aa(w),$=!f&&(!F||rs(a.immediate||t.immediate,o));if(m){const e=Xa(c);if(e!==y.constructor){if(!$)throw Error(`Cannot animate between ${y.constructor.name} and ${e.name}, as the "to" prop suggests`);y=this._set(w)}}const S=y.constructor;let D=da(c),E=!1;if(!D){const e=v||!ks(this)&&h;(m||e)&&(E=mo(cs(x),w),D=!E),(mo(s.immediate,$)||$)&&mo(g.decay,p)&&mo(g.velocity,b)||(D=!0)}if(E&&_s(this)&&(s.changed&&!v?D=!0:D||this._stop(l)),!f&&((D||da(l))&&(s.values=y.getPayload(),s.toValues=da(c)?null:S==Ya?[1]:po(w)),s.immediate!=$&&(s.immediate=$,$||v||this._set(l)),D)){const{onRest:e}=s;fo(Ls,(e=>Ws(this,t,e)));const n=xs(this,Ps(this,l));xo(this._pendingCalls,n),this._pendingCalls.add(r),s.changed&&Qi.batchedUpdates((()=>{s.changed=!v,e?.(n,this),v?ts(a.onRest,n):s.onStart?.(n,this)}))}v&&this._set(x),f?r(Fs(t.to,t,this._state,this)):D?this._start():_s(this)&&!m?this._pendingCalls.add(r):r(vs(x))}_focus(e){const t=this.animation;e!==t.to&&(ua(this)&&this._detach(),t.to=e,ua(this)&&this._attach())}_attach(){let e=0;const{to:t}=this.animation;da(t)&&(ga(t,this),Es(t)&&(e=t.priority+1)),this.priority=e}_detach(){const{to:e}=this.animation;da(e)&&pa(e,this)}_set(e,t=!0){const r=ca(e);if(!ho.und(r)){const e=Ra(this);if(!e||!mo(r,e.getValue())){const n=Xa(r);e&&e.constructor==n?e.setValue(r):La(this,n.create(r)),e&&Qi.batchedUpdates((()=>{this._onChange(r,t)}))}}return Ra(this)}_onStart(){const e=this.animation;e.changed||(e.changed=!0,Ns(this,"onStart",xs(this,Ps(this,e.to)),this))}_onChange(e,t){t||(this._onStart(),ts(this.animation.onChange,e,this)),ts(this.defaultProps.onChange,e,this),super._onChange(e,t)}_start(){const e=this.animation;Ra(this).reset(ca(e.to)),e.immediate||(e.fromValues=e.values.map((e=>e.lastPosition))),_s(this)||(zs(this,!0),As(this)||this._resume())}_resume(){Yi.skipAnimation?this.finish():ko.start(this)}_stop(e,t){if(_s(this)){zs(this,!1);const r=this.animation;fo(r.values,(e=>{e.done=!0})),r.toValues&&(r.onChange=r.onPause=r.onResume=void 0),ha(this,{type:"idle",parent:this});const n=t?ws(this.get()):xs(this.get(),Ps(this,e??r.to));xo(this._pendingCalls,n),r.changed&&(r.changed=!1,Ns(this,"onRest",n,this))}}};function Ps(e,t){const r=cs(t);return mo(cs(e.get()),r)}function Ts(e,t=e.loop,r=e.to){const n=ts(t);if(n){const i=!0!==n&&ds(n),o=(i||e).reverse,a=!i||i.reset;return Hs({...e,loop:t,default:!1,pause:void 0,to:!o||us(r)?r:void 0,from:a?e.from:void 0,reset:a,...i})}}function Hs(e){const{to:t,from:r}=e=ds(e),n=new Set;return ho.obj(t)&&Rs(t,n),ho.obj(r)&&Rs(r,n),e.keys=n.size?Array.from(n):null,e}function Is(e){const t=Hs(e);return ho.und(t.default)&&(t.default=as(t)),t}function Rs(e,t){go(e,((e,r)=>null!=e&&t.add(r)))}var Ls=["onStart","onRest","onChange","onPause","onResume"];function Ws(e,t,r){e.animation[r]=t[r]!==is(t,r)?ns(t[r],e.key):void 0}function Ns(e,t,...r){e.animation[t]?.(...r),e.defaultProps[t]?.(...r)}var Vs=["onStart","onChange","onRest"],Ys=1,qs=class{constructor(e,t){this.id=Ys++,this.springs={},this.queue=[],this._lastAsyncId=0,this._active=new Set,this._changed=new Set,this._started=!1,this._state={paused:!1,pauseQueue:new Set,resumeQueue:new Set,timeouts:new Set},this._events={onStart:new Map,onChange:new Map,onRest:new Map},this._onFrame=this._onFrame.bind(this),t&&(this._flush=t),e&&this.start({default:!0,...e})}get idle(){return!this._state.asyncTo&&Object.values(this.springs).every((e=>e.idle&&!e.isDelayed&&!e.isPaused))}get item(){return this._item}set item(e){this._item=e}get(){const e={};return this.each(((t,r)=>e[r]=t.get())),e}set(e){for(const t in e){const r=e[t];ho.und(r)||this.springs[t].set(r)}}update(e){return e&&this.queue.push(Hs(e)),this}start(e){let{queue:t}=this;return e?t=po(e).map(Hs):this.queue=[],this._flush?this._flush(this,t):(Ks(this,t),Qs(this,t))}stop(e,t){if(e!==!!e&&(t=e),t){const r=this.springs;fo(po(t),(t=>r[t].stop(!!e)))}else $s(this._state,this._lastAsyncId),this.each((t=>t.stop(!!e)));return this}pause(e){if(ho.und(e))this.start({pause:!0});else{const t=this.springs;fo(po(e),(e=>t[e].pause()))}return this}resume(e){if(ho.und(e))this.start({pause:!1});else{const t=this.springs;fo(po(e),(e=>t[e].resume()))}return this}each(e){go(this.springs,e)}_onFrame(){const{onStart:e,onChange:t,onRest:r}=this._events,n=this._active.size>0,i=this._changed.size>0;(n&&!this._started||i&&!this._started)&&(this._started=!0,bo(e,(([e,t])=>{t.value=this.get(),e(t,this,this._item)})));const o=!n&&this._started,a=i||o&&r.size?this.get():null;i&&t.size&&bo(t,(([e,t])=>{t.value=a,e(t,this,this._item)})),o&&(this._started=!1,bo(r,(([e,t])=>{t.value=a,e(t,this,this._item)})))}eventObserved(e){if("change"==e.type)this._changed.add(e.parent),e.idle||this._active.add(e.parent);else{if("idle"!=e.type)return;this._active.delete(e.parent)}Qi.onFrame(this._onFrame)}};function Qs(e,t){return Promise.all(t.map((t=>Us(e,t)))).then((t=>ys(e,t)))}async function Us(e,t,r){const{keys:n,to:i,from:o,loop:a,onRest:s,onResolve:l}=t,d=ho.obj(t.default)&&t.default;a&&(t.loop=!1),!1===i&&(t.to=null),!1===o&&(t.from=null);const c=ho.arr(i)||ho.fun(i)?i:void 0;c?(t.to=void 0,t.onRest=void 0,d&&(d.onRest=void 0)):fo(Vs,(r=>{const n=t[r];if(ho.fun(n)){const i=e._events[r];t[r]=({finished:e,cancelled:t})=>{const r=i.get(n);r?(e||(r.finished=!1),t&&(r.cancelled=!0)):i.set(n,{value:null,finished:e||!1,cancelled:t||!1})},d&&(d[r]=t[r])}}));const u=e._state;t.pause===!u.paused?(u.paused=t.pause,xo(t.pause?u.pauseQueue:u.resumeQueue)):u.paused&&(t.pause=!0);const h=(n||Object.keys(e.springs)).map((r=>e.springs[r].start(t))),m=!0===t.cancel||!0===is(t,"cancel");(c||m&&u.asyncId)&&h.push(bs(++e._lastAsyncId,{props:t,state:u,actions:{pause:uo,resume:uo,start(t,r){m?($s(u,e._lastAsyncId),r(ws(e))):(t.onRest=s,r(Fs(c,t,u,e)))}}})),u.paused&&await new Promise((e=>{u.resumeQueue.add(e)}));const f=ys(e,await Promise.all(h));if(a&&f.finished&&(!r||!f.noop)){const r=Ts(t,a,i);if(r)return Ks(e,[r]),Us(e,r,!0)}return l&&Qi.batchedUpdates((()=>l(f,e,e.item))),f}function Js(e,t){const r={...e.springs};return t&&fo(po(t),(e=>{ho.und(e.keys)&&(e=Hs(e)),ho.obj(e.to)||(e={...e,to:void 0}),Gs(r,e,(e=>Zs(e)))})),Xs(e,r),r}function Xs(e,t){go(t,((t,r)=>{e.springs[r]||(e.springs[r]=t,ga(t,e))}))}function Zs(e,t){const r=new Ms;return r.key=e,t&&ga(r,t),r}function Gs(e,t,r){t.keys&&fo(t.keys,(n=>{(e[n]||(e[n]=r(n)))._prepareNode(t)}))}function Ks(e,t){fo(t,(t=>{Gs(e.springs,t,(t=>Zs(t,e)))}))}var el,tl,rl=({children:e,...t})=>{const r=w(nl),n=t.pause||!!r.pause,i=t.immediate||!!r.immediate;t=function(e,t){const[r]=h((()=>({inputs:t,result:e()}))),n=u(),i=n.current;let o=i;o?Boolean(t&&o.inputs&&function(e,t){if(e.length!==t.length)return!1;for(let r=0;r<e.length;r++)if(e[r]!==t[r])return!1;return!0}(t,o.inputs))||(o={inputs:t,result:e()}):o=r;return b((()=>{n.current=o,i==r&&(r.inputs=r.result=void 0)}),[o]),o.result}((()=>({pause:n,immediate:i})),[n,i]);const{Provider:o}=nl;return d.createElement(o,{value:t},e)},nl=(el=rl,tl={},Object.assign(el,d.createContext(tl)),el.Provider._context=el,el.Consumer._context=el,el);rl.Provider=nl.Provider,rl.Consumer=nl.Consumer;var il=()=>{const e=[],t=function(t){_a(`${Ba}Directly calling start instead of using the api object is deprecated in v9 (use ".start" instead), this will be removed in later 0.X.0 versions`);const n=[];return fo(e,((e,i)=>{if(ho.und(t))n.push(e.start());else{const o=r(t,e,i);o&&n.push(e.start(o))}})),n};t.current=e,t.add=function(t){e.includes(t)||e.push(t)},t.delete=function(t){const r=e.indexOf(t);~r&&e.splice(r,1)},t.pause=function(){return fo(e,(e=>e.pause(...arguments))),this},t.resume=function(){return fo(e,(e=>e.resume(...arguments))),this},t.set=function(t){fo(e,((e,r)=>{const n=ho.fun(t)?t(r,e):t;n&&e.set(n)}))},t.start=function(t){const r=[];return fo(e,((e,n)=>{if(ho.und(t))r.push(e.start());else{const i=this._getProps(t,e,n);i&&r.push(e.start(i))}})),r},t.stop=function(){return fo(e,(e=>e.stop(...arguments))),this},t.update=function(t){return fo(e,((e,r)=>e.update(this._getProps(t,e,r)))),this};const r=function(e,t,r){return ho.fun(e)?e(r,t):e};return t._getProps=r,t};function ol(e,t){const r=ho.fun(e),[[n],i]=function(e,t,r){const n=ho.fun(t)&&t;n&&!r&&(r=[]);const i=F((()=>n||3==arguments.length?il():void 0),[]),o=u(0),a=Ma(),s=F((()=>({ctrls:[],queue:[],flush(e,t){const r=Js(e,t);return o.current>0&&!s.queue.length&&!Object.keys(r).some((t=>!e.springs[t]))?Qs(e,t):new Promise((n=>{Xs(e,r),s.queue.push((()=>{n(Qs(e,t))})),a()}))}})),[]),l=u([...s.ctrls]),d=[],c=Ha(e)||0;function h(e,r){for(let i=e;i<r;i++){const e=l.current[i]||(l.current[i]=new qs(null,s.flush)),r=n?n(i,e):t[i];r&&(d[i]=Is(r))}}F((()=>{fo(l.current.slice(e,c),(e=>{!function(e,t){e.ref?.delete(e),t?.delete(e)}(e,i),e.stop(!0)})),l.current.length=e,h(c,e)}),[e]),F((()=>{h(0,Math.min(c,e))}),r);const m=l.current.map(((e,t)=>Js(e,d[t]))),f=w(rl),g=Ha(f),p=f!==g&&function(e){for(const t in e)return!0;return!1}(f);za((()=>{o.current++,s.ctrls=l.current;const{queue:e}=s;e.length&&(s.queue=[],fo(e,(e=>e()))),fo(l.current,((e,t)=>{i?.add(e),p&&e.start({default:f});const r=d[t];r&&(function(e,t){t&&e.ref!==t&&(e.ref?.delete(e),t.add(e),e.ref=t)}(e,r.ref),e.ref?e.queue.push(r):e.start(r))}))})),Pa((()=>()=>{fo(s.ctrls,(e=>e.stop(!0)))}));const b=m.map((e=>({...e})));return i?[b,i]:b}(1,r?e:[e],r?t||[]:t);return r||2==arguments.length?[n,i]:n}var al=class extends Bs{constructor(e,t){super(),this.source=e,this.idle=!0,this._active=new Set,this.calc=Ko(...t);const r=this._get(),n=Xa(r);La(this,n.create(r))}advance(e){const t=this._get();mo(t,this.get())||(Ra(this).setValue(t),this._onChange(t,this.idle)),!this.idle&&ll(this._active)&&dl(this)}_get(){const e=ho.arr(this.source)?this.source.map(ca):po(ca(this.source));return this.calc(...e)}_start(){this.idle&&!ll(this._active)&&(this.idle=!1,fo(Wa(this),(e=>{e.done=!1})),Yi.skipAnimation?(Qi.batchedUpdates((()=>this.advance())),dl(this)):ko.start(this))}_attach(){let e=1;fo(po(this.source),(t=>{da(t)&&ga(t,this),Es(t)&&(t.idle||this._active.add(t),e=Math.max(e,t.priority+1))})),this.priority=e,this._start()}_detach(){fo(po(this.source),(e=>{da(e)&&pa(e,this)})),this._active.clear(),dl(this)}eventObserved(e){"change"==e.type?e.idle?this.advance():(this._active.add(e.parent),this._start()):"idle"==e.type?this._active.delete(e.parent):"priority"==e.type&&(this.priority=po(this.source).reduce(((e,t)=>Math.max(e,(Es(t)?t.priority:0)+1)),0))}};function sl(e){return!1!==e.idle}function ll(e){return!e.size||Array.from(e).every(sl)}function dl(e){e.idle||(e.idle=!0,fo(Wa(e),(e=>{e.done=!0})),ha(e,{type:"idle",parent:e}))}Yi.assign({createStringInterpolator:Ca,to:(e,t)=>new al(e,t)});var cl=/^--/;function ul(e,t){return null==t||"boolean"==typeof t||""===t?"":"number"!=typeof t||0===t||cl.test(e)||ml.hasOwnProperty(e)&&ml[e]?(""+t).trim():t+"px"}var hl={};var ml={animationIterationCount:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},fl=["Webkit","Ms","Moz","O"];ml=Object.keys(ml).reduce(((e,t)=>(fl.forEach((r=>e[((e,t)=>e+t.charAt(0).toUpperCase()+t.substring(1))(r,t)]=e[t])),e)),ml);var gl=/^(matrix|translate|scale|rotate|skew)/,pl=/^(translate)/,bl=/^(rotate|skew)/,yl=(e,t)=>ho.num(e)&&0!==e?e+t:e,vl=(e,t)=>ho.arr(e)?e.every((e=>vl(e,t))):ho.num(e)?e===t:parseFloat(e)===t,xl=class extends Qa{constructor({x:e,y:t,z:r,...n}){const i=[],o=[];(e||t||r)&&(i.push([e||0,t||0,r||0]),o.push((e=>[`translate3d(${e.map((e=>yl(e,"px"))).join(",")})`,vl(e,0)]))),go(n,((e,t)=>{if("transform"===t)i.push([e||""]),o.push((e=>[e,""===e]));else if(gl.test(t)){if(delete n[t],ho.und(e))return;const r=pl.test(t)?"px":bl.test(t)?"deg":"";i.push(po(e)),o.push("rotate3d"===t?([e,t,n,i])=>[`rotate3d(${e},${t},${n},${yl(i,r)})`,vl(i,0)]:e=>[`${t}(${e.map((e=>yl(e,r))).join(",")})`,vl(e,t.startsWith("scale")?1:0)])}})),i.length&&(n.transform=new wl(i,o)),super(n)}},wl=class extends ma{constructor(e,t){super(),this.inputs=e,this.transforms=t,this._value=null}get(){return this._value||(this._value=this._get())}_get(){let e="",t=!0;return fo(this.inputs,((r,n)=>{const i=ca(r[0]),[o,a]=this.transforms[n](ho.arr(i)?i:r.map(ca));e+=" "+o,t=t&&a})),t?"none":e}observerAdded(e){1==e&&fo(this.inputs,(e=>fo(e,(e=>da(e)&&ga(e,this)))))}observerRemoved(e){0==e&&fo(this.inputs,(e=>fo(e,(e=>da(e)&&pa(e,this)))))}eventObserved(e){"change"==e.type&&(this._value=null),ha(this,e)}};Yi.assign({batchedUpdates:E,createStringInterpolator:Ca,colors:{transparent:0,aliceblue:4042850303,antiquewhite:4209760255,aqua:16777215,aquamarine:2147472639,azure:4043309055,beige:4126530815,bisque:4293182719,black:255,blanchedalmond:4293643775,blue:65535,blueviolet:2318131967,brown:2771004159,burlywood:3736635391,burntsienna:3934150143,cadetblue:1604231423,chartreuse:2147418367,chocolate:3530104575,coral:4286533887,cornflowerblue:1687547391,cornsilk:4294499583,crimson:3692313855,cyan:16777215,darkblue:35839,darkcyan:9145343,darkgoldenrod:3095792639,darkgray:2846468607,darkgreen:6553855,darkgrey:2846468607,darkkhaki:3182914559,darkmagenta:2332068863,darkolivegreen:1433087999,darkorange:4287365375,darkorchid:2570243327,darkred:2332033279,darksalmon:3918953215,darkseagreen:2411499519,darkslateblue:1211993087,darkslategray:793726975,darkslategrey:793726975,darkturquoise:13554175,darkviolet:2483082239,deeppink:4279538687,deepskyblue:12582911,dimgray:1768516095,dimgrey:1768516095,dodgerblue:512819199,firebrick:2988581631,floralwhite:4294635775,forestgreen:579543807,fuchsia:4278255615,gainsboro:3705462015,ghostwhite:4177068031,gold:4292280575,goldenrod:3668254975,gray:2155905279,green:8388863,greenyellow:2919182335,grey:2155905279,honeydew:4043305215,hotpink:4285117695,indianred:3445382399,indigo:1258324735,ivory:4294963455,khaki:4041641215,lavender:3873897215,lavenderblush:4293981695,lawngreen:2096890111,lemonchiffon:4294626815,lightblue:2916673279,lightcoral:4034953471,lightcyan:3774873599,lightgoldenrodyellow:4210742015,lightgray:3553874943,lightgreen:2431553791,lightgrey:3553874943,lightpink:4290167295,lightsalmon:4288707327,lightseagreen:548580095,lightskyblue:2278488831,lightslategray:2005441023,lightslategrey:2005441023,lightsteelblue:2965692159,lightyellow:4294959359,lime:16711935,limegreen:852308735,linen:4210091775,magenta:4278255615,maroon:2147483903,mediumaquamarine:1724754687,mediumblue:52735,mediumorchid:3126187007,mediumpurple:2473647103,mediumseagreen:1018393087,mediumslateblue:2070474495,mediumspringgreen:16423679,mediumturquoise:1221709055,mediumvioletred:3340076543,midnightblue:421097727,mintcream:4127193855,mistyrose:4293190143,moccasin:4293178879,navajowhite:4292783615,navy:33023,oldlace:4260751103,olive:2155872511,olivedrab:1804477439,orange:4289003775,orangered:4282712319,orchid:3664828159,palegoldenrod:4008225535,palegreen:2566625535,paleturquoise:2951671551,palevioletred:3681588223,papayawhip:4293907967,peachpuff:4292524543,peru:3448061951,pink:4290825215,plum:3718307327,powderblue:2967529215,purple:2147516671,rebeccapurple:1714657791,red:4278190335,rosybrown:3163525119,royalblue:1097458175,saddlebrown:2336560127,salmon:4202722047,sandybrown:4104413439,seagreen:780883967,seashell:4294307583,sienna:2689740287,silver:3233857791,skyblue:2278484991,slateblue:1784335871,slategray:1887473919,slategrey:1887473919,snow:4294638335,springgreen:16744447,steelblue:1182971135,tan:3535047935,teal:8421631,thistle:3636451583,tomato:4284696575,turquoise:1088475391,violet:4001558271,wheat:4125012991,white:4294967295,whitesmoke:4126537215,yellow:4294902015,yellowgreen:2597139199}});var Fl,$l=((e,{applyAnimatedValues:t=(()=>!1),createAnimatedStyle:r=(e=>new Qa(e)),getComponentProps:n=(e=>e)}={})=>{const i={applyAnimatedValues:t,createAnimatedStyle:r,getComponentProps:n},o=e=>{const t=es(e)||"Anonymous";return(e=ho.str(e)?o[e]||(o[e]=Za(e,i)):e[Ka]||(e[Ka]=Za(e,i))).displayName=`Animated(${t})`,e};return go(e,((t,r)=>{ho.arr(e)&&(r=es(t)),o[r]=o(t)})),{animated:o}})(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"],{applyAnimatedValues:function(e,t){if(!e.nodeType||!e.setAttribute)return!1;const r="filter"===e.nodeName||e.parentNode&&"filter"===e.parentNode.nodeName,{style:n,children:i,scrollTop:o,scrollLeft:a,viewBox:s,...l}=t,d=Object.values(l),c=Object.keys(l).map((t=>r||e.hasAttribute(t)?t:hl[t]||(hl[t]=t.replace(/([A-Z])/g,(e=>"-"+e.toLowerCase())))));void 0!==i&&(e.textContent=i);for(const t in n)if(n.hasOwnProperty(t)){const r=ul(t,n[t]);cl.test(t)?e.style.setProperty(t,r):e.style[t]=r}c.forEach(((t,r)=>{e.setAttribute(t,d[r])})),void 0!==o&&(e.scrollTop=o),void 0!==a&&(e.scrollLeft=a),void 0!==s&&e.setAttribute("viewBox",s)},createAnimatedStyle:e=>new xl(e),getComponentProps:({scrollTop:e,scrollLeft:t,...r})=>r}),Sl=$l.animated,Dl={exports:{}};Fl=e=>(()=>{var t={"./node_modules/css-mediaquery/index.js":
/*!**********************************************!*\
	  !*** ./node_modules/css-mediaquery/index.js ***!
	  \**********************************************/(e,t)=>{t.match=function(e,t){return s(e).some((function(e){var r=e.inverse,n="all"===e.type||t.type===e.type;if(n&&r||!n&&!r)return!1;var i=e.expressions.every((function(e){var r=e.feature,n=e.modifier,i=e.value,o=t[r];if(!o)return!1;switch(r){case"orientation":case"scan":return o.toLowerCase()===i.toLowerCase();case"width":case"height":case"device-width":case"device-height":i=c(i),o=c(o);break;case"resolution":i=d(i),o=d(o);break;case"aspect-ratio":case"device-aspect-ratio":case"device-pixel-ratio":i=l(i),o=l(o);break;case"grid":case"color":case"color-index":case"monochrome":i=parseInt(i,10)||1,o=parseInt(o,10)||0}switch(n){case"min":return o>=i;case"max":return o<=i;default:return o===i}}));return i&&!r||!i&&r}))},t.parse=s;var r=/(?:(only|not)?\s*([^\s\(\)]+)(?:\s*and)?\s*)?(.+)?/i,n=/\(\s*([^\s\:\)]+)\s*(?:\:\s*([^\s\)]+))?\s*\)/,i=/^(?:(min|max)-)?(.+)/,o=/(em|rem|px|cm|mm|in|pt|pc)?$/,a=/(dpi|dpcm|dppx)?$/;function s(e){return e.split(",").map((function(e){var t=(e=e.trim()).match(r),o=t[1],a=t[2],s=t[3]||"",l={};return l.inverse=!!o&&"not"===o.toLowerCase(),l.type=a?a.toLowerCase():"all",s=s.match(/\([^\)]+\)/g)||[],l.expressions=s.map((function(e){var t=e.match(n),r=t[1].toLowerCase().match(i);return{modifier:r[1],feature:r[2],value:t[2]}})),l}))}function l(e){var t,r=Number(e);return r||(r=(t=e.match(/^(\d+)\s*\/\s*(\d+)$/))[1]/t[2]),r}function d(e){var t=parseFloat(e);switch(String(e).match(a)[1]){case"dpcm":return t/2.54;case"dppx":return 96*t;default:return t}}function c(e){var t=parseFloat(e);switch(String(e).match(o)[1]){case"em":case"rem":return 16*t;case"cm":return 96*t/2.54;case"mm":return 96*t/2.54/10;case"in":return 96*t;case"pt":return 72*t;case"pc":return 72*t/12;default:return t}}},"./node_modules/hyphenate-style-name/index.js":
/*!****************************************************!*\
	  !*** ./node_modules/hyphenate-style-name/index.js ***!
	  \****************************************************/(e,t,r)=>{r.r(t),r.d(t,{default:()=>s});var n=/[A-Z]/g,i=/^ms-/,o={};function a(e){return"-"+e.toLowerCase()}const s=function(e){if(o.hasOwnProperty(e))return o[e];var t=e.replace(n,a);return o[e]=i.test(t)?"-"+t:t}},"./node_modules/matchmediaquery/index.js":
/*!***********************************************!*\
	  !*** ./node_modules/matchmediaquery/index.js ***!
	  \***********************************************/(e,t,r)=>{var n=r(/*! css-mediaquery */"./node_modules/css-mediaquery/index.js").match,i="undefined"!=typeof window?window.matchMedia:null;function o(e,t,r){var o=this;if(i&&!r){var a=i.call(window,e);this.matches=a.matches,this.media=a.media,a.addListener(s)}else this.matches=n(e,t),this.media=e;function s(e){o.matches=e.matches,o.media=e.media}this.addListener=function(e){a&&a.addListener(e)},this.removeListener=function(e){a&&a.removeListener(e)},this.dispose=function(){a&&a.removeListener(s)}}e.exports=function(e,t,r){return new o(e,t,r)}},"./node_modules/object-assign/index.js":
/*!*********************************************!*\
	  !*** ./node_modules/object-assign/index.js ***!
	  \*********************************************/e=>{
/*
	object-assign
	(c) Sindre Sorhus
	@license MIT
	*/
var t=Object.getOwnPropertySymbols,r=Object.prototype.hasOwnProperty,n=Object.prototype.propertyIsEnumerable;e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},r=0;r<10;r++)t["_"+String.fromCharCode(r)]=r;if("0123456789"!==Object.getOwnPropertyNames(t).map((function(e){return t[e]})).join(""))return!1;var n={};return"abcdefghijklmnopqrst".split("").forEach((function(e){n[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},n)).join("")}catch(e){return!1}}()?Object.assign:function(e,i){for(var o,a,s=function(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}(e),l=1;l<arguments.length;l++){for(var d in o=Object(arguments[l]))r.call(o,d)&&(s[d]=o[d]);if(t){a=t(o);for(var c=0;c<a.length;c++)n.call(o,a[c])&&(s[a[c]]=o[a[c]])}}return s}},"./node_modules/prop-types/checkPropTypes.js":
/*!***************************************************!*\
	  !*** ./node_modules/prop-types/checkPropTypes.js ***!
	  \***************************************************/(e,t,r)=>{var n,i=r(/*! ./lib/ReactPropTypesSecret */"./node_modules/prop-types/lib/ReactPropTypesSecret.js"),o={},a=r(/*! ./lib/has */"./node_modules/prop-types/lib/has.js");function s(e,t,r,s,l){for(var d in e)if(a(e,d)){var c;try{if("function"!=typeof e[d]){var u=Error((s||"React class")+": "+r+" type `"+d+"` is invalid; it must be a function, usually from the `prop-types` package, but received `"+typeof e[d]+"`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");throw u.name="Invariant Violation",u}c=e[d](t,d,s,r,null,i)}catch(e){c=e}if(!c||c instanceof Error||n((s||"React class")+": type specification of "+r+" `"+d+"` is invalid; the type checker function must return `null` or an `Error` but returned a "+typeof c+". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."),c instanceof Error&&!(c.message in o)){o[c.message]=!0;var h=l?l():"";n("Failed "+r+" type: "+c.message+(null!=h?h:""))}}}n=function(e){var t="Warning: "+e;"undefined"!=typeof console&&console.error(t);try{throw new Error(t)}catch(e){}},s.resetWarningCache=function(){o={}},e.exports=s},"./node_modules/prop-types/factoryWithTypeCheckers.js":
/*!************************************************************!*\
	  !*** ./node_modules/prop-types/factoryWithTypeCheckers.js ***!
	  \************************************************************/(e,t,r)=>{var n,i=r(/*! react-is */"./node_modules/react-is/index.js"),o=r(/*! object-assign */"./node_modules/object-assign/index.js"),a=r(/*! ./lib/ReactPropTypesSecret */"./node_modules/prop-types/lib/ReactPropTypesSecret.js"),s=r(/*! ./lib/has */"./node_modules/prop-types/lib/has.js"),l=r(/*! ./checkPropTypes */"./node_modules/prop-types/checkPropTypes.js");function d(){return null}n=function(e){var t="Warning: "+e;"undefined"!=typeof console&&console.error(t);try{throw new Error(t)}catch(e){}},e.exports=function(e,t){var r="function"==typeof Symbol&&Symbol.iterator,c="@@iterator",u="<<anonymous>>",h={array:p("array"),bigint:p("bigint"),bool:p("boolean"),func:p("function"),number:p("number"),object:p("object"),string:p("string"),symbol:p("symbol"),any:g(d),arrayOf:function(e){return g((function(t,r,n,i,o){if("function"!=typeof e)return new f("Property `"+o+"` of component `"+n+"` has invalid PropType notation inside arrayOf.");var s=t[r];if(!Array.isArray(s))return new f("Invalid "+i+" `"+o+"` of type `"+v(s)+"` supplied to `"+n+"`, expected an array.");for(var l=0;l<s.length;l++){var d=e(s,l,n,i,o+"["+l+"]",a);if(d instanceof Error)return d}return null}))},element:g((function(t,r,n,i,o){var a=t[r];return e(a)?null:new f("Invalid "+i+" `"+o+"` of type `"+v(a)+"` supplied to `"+n+"`, expected a single ReactElement.")})),elementType:g((function(e,t,r,n,o){var a=e[t];return i.isValidElementType(a)?null:new f("Invalid "+n+" `"+o+"` of type `"+v(a)+"` supplied to `"+r+"`, expected a single ReactElement type.")})),instanceOf:function(e){return g((function(t,r,n,i,o){if(!(t[r]instanceof e)){var a=e.name||u;return new f("Invalid "+i+" `"+o+"` of type `"+((s=t[r]).constructor&&s.constructor.name?s.constructor.name:u)+"` supplied to `"+n+"`, expected instance of `"+a+"`.")}var s;return null}))},node:g((function(e,t,r,n,i){return y(e[t])?null:new f("Invalid "+n+" `"+i+"` supplied to `"+r+"`, expected a ReactNode.")})),objectOf:function(e){return g((function(t,r,n,i,o){if("function"!=typeof e)return new f("Property `"+o+"` of component `"+n+"` has invalid PropType notation inside objectOf.");var l=t[r],d=v(l);if("object"!==d)return new f("Invalid "+i+" `"+o+"` of type `"+d+"` supplied to `"+n+"`, expected an object.");for(var c in l)if(s(l,c)){var u=e(l,c,n,i,o+"."+c,a);if(u instanceof Error)return u}return null}))},oneOf:function(e){return Array.isArray(e)?g((function(t,r,n,i,o){for(var a=t[r],s=0;s<e.length;s++)if(m(a,e[s]))return null;var l=JSON.stringify(e,(function(e,t){return"symbol"===x(t)?String(t):t}));return new f("Invalid "+i+" `"+o+"` of value `"+String(a)+"` supplied to `"+n+"`, expected one of "+l+".")})):(n(arguments.length>1?"Invalid arguments supplied to oneOf, expected an array, got "+arguments.length+" arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z]).":"Invalid argument supplied to oneOf, expected an array."),d)},oneOfType:function(e){if(!Array.isArray(e))return n("Invalid argument supplied to oneOfType, expected an instance of array."),d;for(var t=0;t<e.length;t++){var r=e[t];if("function"!=typeof r)return n("Invalid argument supplied to oneOfType. Expected an array of check functions, but received "+w(r)+" at index "+t+"."),d}return g((function(t,r,n,i,o){for(var l=[],d=0;d<e.length;d++){var c=(0,e[d])(t,r,n,i,o,a);if(null==c)return null;c.data&&s(c.data,"expectedType")&&l.push(c.data.expectedType)}return new f("Invalid "+i+" `"+o+"` supplied to `"+n+"`"+(l.length>0?", expected one of type ["+l.join(", ")+"]":"")+".")}))},shape:function(e){return g((function(t,r,n,i,o){var s=t[r],l=v(s);if("object"!==l)return new f("Invalid "+i+" `"+o+"` of type `"+l+"` supplied to `"+n+"`, expected `object`.");for(var d in e){var c=e[d];if("function"!=typeof c)return b(n,i,o,d,x(c));var u=c(s,d,n,i,o+"."+d,a);if(u)return u}return null}))},exact:function(e){return g((function(t,r,n,i,l){var d=t[r],c=v(d);if("object"!==c)return new f("Invalid "+i+" `"+l+"` of type `"+c+"` supplied to `"+n+"`, expected `object`.");var u=o({},t[r],e);for(var h in u){var m=e[h];if(s(e,h)&&"function"!=typeof m)return b(n,i,l,h,x(m));if(!m)return new f("Invalid "+i+" `"+l+"` key `"+h+"` supplied to `"+n+"`.\nBad object: "+JSON.stringify(t[r],null,"  ")+"\nValid keys: "+JSON.stringify(Object.keys(e),null,"  "));var g=m(d,h,n,i,l+"."+h,a);if(g)return g}return null}))}};function m(e,t){return e===t?0!==e||1/e==1/t:e!=e&&t!=t}function f(e,t){this.message=e,this.data=t&&"object"==typeof t?t:{},this.stack=""}function g(e){var r={},i=0;function o(o,s,l,d,c,h,m){if(d=d||u,h=h||l,m!==a){if(t){var g=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types");throw g.name="Invariant Violation",g}if("undefined"!=typeof console){var p=d+":"+l;!r[p]&&i<3&&(n("You are manually calling a React.PropTypes validation function for the `"+h+"` prop on `"+d+"`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."),r[p]=!0,i++)}}return null==s[l]?o?null===s[l]?new f("The "+c+" `"+h+"` is marked as required in `"+d+"`, but its value is `null`."):new f("The "+c+" `"+h+"` is marked as required in `"+d+"`, but its value is `undefined`."):null:e(s,l,d,c,h)}var s=o.bind(null,!1);return s.isRequired=o.bind(null,!0),s}function p(e){return g((function(t,r,n,i,o,a){var s=t[r];return v(s)!==e?new f("Invalid "+i+" `"+o+"` of type `"+x(s)+"` supplied to `"+n+"`, expected `"+e+"`.",{expectedType:e}):null}))}function b(e,t,r,n,i){return new f((e||"React class")+": "+t+" type `"+r+"."+n+"` is invalid; it must be a function, usually from the `prop-types` package, but received `"+i+"`.")}function y(t){switch(typeof t){case"number":case"string":case"undefined":return!0;case"boolean":return!t;case"object":if(Array.isArray(t))return t.every(y);if(null===t||e(t))return!0;var n=function(e){var t=e&&(r&&e[r]||e[c]);if("function"==typeof t)return t}(t);if(!n)return!1;var i,o=n.call(t);if(n!==t.entries){for(;!(i=o.next()).done;)if(!y(i.value))return!1}else for(;!(i=o.next()).done;){var a=i.value;if(a&&!y(a[1]))return!1}return!0;default:return!1}}function v(e){var t=typeof e;return Array.isArray(e)?"array":e instanceof RegExp?"object":function(e,t){return"symbol"===e||!!t&&("Symbol"===t["@@toStringTag"]||"function"==typeof Symbol&&t instanceof Symbol)}(t,e)?"symbol":t}function x(e){if(null==e)return""+e;var t=v(e);if("object"===t){if(e instanceof Date)return"date";if(e instanceof RegExp)return"regexp"}return t}function w(e){var t=x(e);switch(t){case"array":case"object":return"an "+t;case"boolean":case"date":case"regexp":return"a "+t;default:return t}}return f.prototype=Error.prototype,h.checkPropTypes=l,h.resetWarningCache=l.resetWarningCache,h.PropTypes=h,h}},"./node_modules/prop-types/index.js":
/*!******************************************!*\
	  !*** ./node_modules/prop-types/index.js ***!
	  \******************************************/(e,t,r)=>{var n=r(/*! react-is */"./node_modules/react-is/index.js");e.exports=r(/*! ./factoryWithTypeCheckers */"./node_modules/prop-types/factoryWithTypeCheckers.js")(n.isElement,!0)},"./node_modules/prop-types/lib/ReactPropTypesSecret.js":
/*!*************************************************************!*\
	  !*** ./node_modules/prop-types/lib/ReactPropTypesSecret.js ***!
	  \*************************************************************/e=>{e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},"./node_modules/prop-types/lib/has.js":
/*!********************************************!*\
	  !*** ./node_modules/prop-types/lib/has.js ***!
	  \********************************************/e=>{e.exports=Function.call.bind(Object.prototype.hasOwnProperty)},"./node_modules/react-is/cjs/react-is.development.js":
/*!***********************************************************!*\
	  !*** ./node_modules/react-is/cjs/react-is.development.js ***!
	  \***********************************************************/(e,t)=>{!function(){var e="function"==typeof Symbol&&Symbol.for,r=e?Symbol.for("react.element"):60103,n=e?Symbol.for("react.portal"):60106,i=e?Symbol.for("react.fragment"):60107,o=e?Symbol.for("react.strict_mode"):60108,a=e?Symbol.for("react.profiler"):60114,s=e?Symbol.for("react.provider"):60109,l=e?Symbol.for("react.context"):60110,d=e?Symbol.for("react.async_mode"):60111,c=e?Symbol.for("react.concurrent_mode"):60111,u=e?Symbol.for("react.forward_ref"):60112,h=e?Symbol.for("react.suspense"):60113,m=e?Symbol.for("react.suspense_list"):60120,f=e?Symbol.for("react.memo"):60115,g=e?Symbol.for("react.lazy"):60116,p=e?Symbol.for("react.block"):60121,b=e?Symbol.for("react.fundamental"):60117,y=e?Symbol.for("react.responder"):60118,v=e?Symbol.for("react.scope"):60119;function x(e){if("object"==typeof e&&null!==e){var t=e.$$typeof;switch(t){case r:var m=e.type;switch(m){case d:case c:case i:case a:case o:case h:return m;default:var p=m&&m.$$typeof;switch(p){case l:case u:case g:case f:case s:return p;default:return t}}case n:return t}}}var w=d,F=c,$=l,S=s,D=r,E=u,C=i,B=g,O=f,k=n,_=a,A=o,z=h,j=!1;function M(e){return x(e)===c}t.AsyncMode=w,t.ConcurrentMode=F,t.ContextConsumer=$,t.ContextProvider=S,t.Element=D,t.ForwardRef=E,t.Fragment=C,t.Lazy=B,t.Memo=O,t.Portal=k,t.Profiler=_,t.StrictMode=A,t.Suspense=z,t.isAsyncMode=function(e){return j||(j=!0,console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")),M(e)||x(e)===d},t.isConcurrentMode=M,t.isContextConsumer=function(e){return x(e)===l},t.isContextProvider=function(e){return x(e)===s},t.isElement=function(e){return"object"==typeof e&&null!==e&&e.$$typeof===r},t.isForwardRef=function(e){return x(e)===u},t.isFragment=function(e){return x(e)===i},t.isLazy=function(e){return x(e)===g},t.isMemo=function(e){return x(e)===f},t.isPortal=function(e){return x(e)===n},t.isProfiler=function(e){return x(e)===a},t.isStrictMode=function(e){return x(e)===o},t.isSuspense=function(e){return x(e)===h},t.isValidElementType=function(e){return"string"==typeof e||"function"==typeof e||e===i||e===c||e===a||e===o||e===h||e===m||"object"==typeof e&&null!==e&&(e.$$typeof===g||e.$$typeof===f||e.$$typeof===s||e.$$typeof===l||e.$$typeof===u||e.$$typeof===b||e.$$typeof===y||e.$$typeof===v||e.$$typeof===p)},t.typeOf=x}()},"./node_modules/react-is/index.js":
/*!****************************************!*\
	  !*** ./node_modules/react-is/index.js ***!
	  \****************************************/(e,t,r)=>{e.exports=r(/*! ./cjs/react-is.development.js */"./node_modules/react-is/cjs/react-is.development.js")},"./node_modules/shallow-equal/dist/index.esm.js":
/*!******************************************************!*\
	  !*** ./node_modules/shallow-equal/dist/index.esm.js ***!
	  \******************************************************/(e,t,r)=>{function n(e,t){if(e===t)return!0;if(!e||!t)return!1;var r=Object.keys(e),n=Object.keys(t),i=r.length;if(n.length!==i)return!1;for(var o=0;o<i;o++){var a=r[o];if(e[a]!==t[a]||!Object.prototype.hasOwnProperty.call(t,a))return!1}return!0}function i(e,t){if(e===t)return!0;if(!e||!t)return!1;var r=e.length;if(t.length!==r)return!1;for(var n=0;n<r;n++)if(e[n]!==t[n])return!1;return!0}r.r(t),r.d(t,{shallowEqualArrays:()=>i,shallowEqualObjects:()=>n})},"./src/Component.ts":
/*!**************************!*\
	  !*** ./src/Component.ts ***!
	  \**************************/function(e,t,r){var n=this&&this.__rest||function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(n=Object.getOwnPropertySymbols(e);i<n.length;i++)t.indexOf(n[i])<0&&Object.prototype.propertyIsEnumerable.call(e,n[i])&&(r[n[i]]=e[n[i]])}return r},i=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var o=i(r(/*! ./useMediaQuery */"./src/useMediaQuery.ts"));t.default=function(e){var t=e.children,r=e.device,i=e.onChange,a=n(e,["children","device","onChange"]),s=(0,o.default)(a,r,i);return"function"==typeof t?t(s):s?t:null}},"./src/Context.ts":
/*!************************!*\
	  !*** ./src/Context.ts ***!
	  \************************/(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0});var n=(0,r(/*! react */"react").createContext)(void 0);t.default=n},"./src/index.ts":
/*!**********************!*\
	  !*** ./src/index.ts ***!
	  \**********************/function(e,t,r){var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.Context=t.toQuery=t.useMediaQuery=t.default=void 0;var i=n(r(/*! ./useMediaQuery */"./src/useMediaQuery.ts"));t.useMediaQuery=i.default;var o=n(r(/*! ./Component */"./src/Component.ts"));t.default=o.default;var a=n(r(/*! ./toQuery */"./src/toQuery.ts"));t.toQuery=a.default;var s=n(r(/*! ./Context */"./src/Context.ts"));t.Context=s.default},"./src/mediaQuery.ts":
/*!***************************!*\
	  !*** ./src/mediaQuery.ts ***!
	  \***************************/function(e,t,r){var n=this&&this.__assign||function(){return n=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var i in t=arguments[r])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e},n.apply(this,arguments)},i=this&&this.__rest||function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(n=Object.getOwnPropertySymbols(e);i<n.length;i++)t.indexOf(n[i])<0&&Object.prototype.propertyIsEnumerable.call(e,n[i])&&(r[n[i]]=e[n[i]])}return r},o=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var a=o(r(/*! prop-types */"./node_modules/prop-types/index.js")),s=a.default.oneOfType([a.default.string,a.default.number]),l={all:a.default.bool,grid:a.default.bool,aural:a.default.bool,braille:a.default.bool,handheld:a.default.bool,print:a.default.bool,projection:a.default.bool,screen:a.default.bool,tty:a.default.bool,tv:a.default.bool,embossed:a.default.bool},d={orientation:a.default.oneOf(["portrait","landscape"]),scan:a.default.oneOf(["progressive","interlace"]),aspectRatio:a.default.string,deviceAspectRatio:a.default.string,height:s,deviceHeight:s,width:s,deviceWidth:s,color:a.default.bool,colorIndex:a.default.bool,monochrome:a.default.bool,resolution:s,type:Object.keys(l)},c=i(d,["type"]),u=n({minAspectRatio:a.default.string,maxAspectRatio:a.default.string,minDeviceAspectRatio:a.default.string,maxDeviceAspectRatio:a.default.string,minHeight:s,maxHeight:s,minDeviceHeight:s,maxDeviceHeight:s,minWidth:s,maxWidth:s,minDeviceWidth:s,maxDeviceWidth:s,minColor:a.default.number,maxColor:a.default.number,minColorIndex:a.default.number,maxColorIndex:a.default.number,minMonochrome:a.default.number,maxMonochrome:a.default.number,minResolution:s,maxResolution:s},c),h=n(n({},l),u);t.default={all:h,types:l,matchers:d,features:u}},"./src/toQuery.ts":
/*!************************!*\
	  !*** ./src/toQuery.ts ***!
	  \************************/function(e,t,r){var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var i=n(r(/*! hyphenate-style-name */"./node_modules/hyphenate-style-name/index.js")),o=n(r(/*! ./mediaQuery */"./src/mediaQuery.ts"));t.default=function(e){var t=[];return Object.keys(o.default.all).forEach((function(r){var n=e[r];null!=n&&t.push(function(e,t){var r=(0,i.default)(e);return"number"==typeof t&&(t="".concat(t,"px")),!0===t?r:!1===t?"not ".concat(r):"(".concat(r,": ").concat(t,")")}(r,n))})),t.join(" and ")}},"./src/useMediaQuery.ts":
/*!******************************!*\
	  !*** ./src/useMediaQuery.ts ***!
	  \******************************/function(e,t,r){var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var i=r(/*! react */"react"),o=n(r(/*! matchmediaquery */"./node_modules/matchmediaquery/index.js")),a=n(r(/*! hyphenate-style-name */"./node_modules/hyphenate-style-name/index.js")),s=r(/*! shallow-equal */"./node_modules/shallow-equal/dist/index.esm.js"),l=n(r(/*! ./toQuery */"./src/toQuery.ts")),d=n(r(/*! ./Context */"./src/Context.ts")),c=function(e){if(e)return Object.keys(e).reduce((function(t,r){return t[(0,a.default)(r)]=e[r],t}),{})},u=function(){var e=(0,i.useRef)(!1);return(0,i.useEffect)((function(){e.current=!0}),[]),e.current},h=function(e){var t=function(){return function(e){return e.query||(0,l.default)(e)}(e)},r=(0,i.useState)(t),n=r[0],o=r[1];return(0,i.useEffect)((function(){var e=t();n!==e&&o(e)}),[e]),n};t.default=function(e,t,r){var n=function(e){var t=(0,i.useContext)(d.default),r=function(){return c(e)||c(t)},n=(0,i.useState)(r),o=n[0],a=n[1];return(0,i.useEffect)((function(){var e=r();(0,s.shallowEqualObjects)(o,e)||a(e)}),[e,t]),o}(t),a=h(e);if(!a)throw new Error("Invalid or missing MediaQuery!");var l=function(e,t){var r=function(){return(0,o.default)(e,t||{},!!t)},n=(0,i.useState)(r),a=n[0],s=n[1],l=u();return(0,i.useEffect)((function(){if(l){var e=r();return s(e),function(){e&&e.dispose()}}}),[e,t]),a}(a,n),m=function(e){var t=(0,i.useState)(e.matches),r=t[0],n=t[1];return(0,i.useEffect)((function(){var t=function(e){n(e.matches)};return e.addListener(t),n(e.matches),function(){e.removeListener(t)}}),[e]),r}(l),f=u();return(0,i.useEffect)((function(){f&&r&&r(m)}),[m]),(0,i.useEffect)((function(){return function(){l&&l.dispose()}}),[]),m}},react:
/*!**************************************************************************************!*\
	  !*** external {"commonjs":"react","commonjs2":"react","amd":"react","root":"React"} ***!
	  \**************************************************************************************/t=>{t.exports=e}},r={};function n(e){var i=r[e];if(void 0!==i)return i.exports;var o=r[e]={exports:{}};return t[e].call(o.exports,o,o.exports,n),o.exports}return n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n("./src/index.ts")})();var El=Dl.exports=Fl(c),Cl={exports:{}};Cl.exports=function(){var e=1e3,t=6e4,r=36e5,n="millisecond",i="second",o="minute",a="hour",s="day",l="week",d="month",c="quarter",u="year",h="date",m="Invalid Date",f=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,g=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,p={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(e){var t=["th","st","nd","rd"],r=e%100;return"["+e+(t[(r-20)%10]||t[r]||t[0])+"]"}},b=function(e,t,r){var n=String(e);return!n||n.length>=t?e:""+Array(t+1-n.length).join(r)+e},y={s:b,z:function(e){var t=-e.utcOffset(),r=Math.abs(t),n=Math.floor(r/60),i=r%60;return(t<=0?"+":"-")+b(n,2,"0")+":"+b(i,2,"0")},m:function e(t,r){if(t.date()<r.date())return-e(r,t);var n=12*(r.year()-t.year())+(r.month()-t.month()),i=t.clone().add(n,d),o=r-i<0,a=t.clone().add(n+(o?-1:1),d);return+(-(n+(r-i)/(o?i-a:a-i))||0)},a:function(e){return e<0?Math.ceil(e)||0:Math.floor(e)},p:function(e){return{M:d,y:u,w:l,d:s,D:h,h:a,m:o,s:i,ms:n,Q:c}[e]||String(e||"").toLowerCase().replace(/s$/,"")},u:function(e){return void 0===e}},v="en",x={};x[v]=p;var w="$isDayjsObject",F=function(e){return e instanceof E||!(!e||!e[w])},$=function e(t,r,n){var i;if(!t)return v;if("string"==typeof t){var o=t.toLowerCase();x[o]&&(i=o),r&&(x[o]=r,i=o);var a=t.split("-");if(!i&&a.length>1)return e(a[0])}else{var s=t.name;x[s]=t,i=s}return!n&&i&&(v=i),i||!n&&v},S=function(e,t){if(F(e))return e.clone();var r="object"==typeof t?t:{};return r.date=e,r.args=arguments,new E(r)},D=y;D.l=$,D.i=F,D.w=function(e,t){return S(e,{locale:t.$L,utc:t.$u,x:t.$x,$offset:t.$offset})};var E=function(){function p(e){this.$L=$(e.locale,null,!0),this.parse(e),this.$x=this.$x||e.x||{},this[w]=!0}var b=p.prototype;return b.parse=function(e){this.$d=function(e){var t=e.date,r=e.utc;if(null===t)return new Date(NaN);if(D.u(t))return new Date;if(t instanceof Date)return new Date(t);if("string"==typeof t&&!/Z$/i.test(t)){var n=t.match(f);if(n){var i=n[2]-1||0,o=(n[7]||"0").substring(0,3);return r?new Date(Date.UTC(n[1],i,n[3]||1,n[4]||0,n[5]||0,n[6]||0,o)):new Date(n[1],i,n[3]||1,n[4]||0,n[5]||0,n[6]||0,o)}}return new Date(t)}(e),this.init()},b.init=function(){var e=this.$d;this.$y=e.getFullYear(),this.$M=e.getMonth(),this.$D=e.getDate(),this.$W=e.getDay(),this.$H=e.getHours(),this.$m=e.getMinutes(),this.$s=e.getSeconds(),this.$ms=e.getMilliseconds()},b.$utils=function(){return D},b.isValid=function(){return!(this.$d.toString()===m)},b.isSame=function(e,t){var r=S(e);return this.startOf(t)<=r&&r<=this.endOf(t)},b.isAfter=function(e,t){return S(e)<this.startOf(t)},b.isBefore=function(e,t){return this.endOf(t)<S(e)},b.$g=function(e,t,r){return D.u(e)?this[t]:this.set(r,e)},b.unix=function(){return Math.floor(this.valueOf()/1e3)},b.valueOf=function(){return this.$d.getTime()},b.startOf=function(e,t){var r=this,n=!!D.u(t)||t,c=D.p(e),m=function(e,t){var i=D.w(r.$u?Date.UTC(r.$y,t,e):new Date(r.$y,t,e),r);return n?i:i.endOf(s)},f=function(e,t){return D.w(r.toDate()[e].apply(r.toDate("s"),(n?[0,0,0,0]:[23,59,59,999]).slice(t)),r)},g=this.$W,p=this.$M,b=this.$D,y="set"+(this.$u?"UTC":"");switch(c){case u:return n?m(1,0):m(31,11);case d:return n?m(1,p):m(0,p+1);case l:var v=this.$locale().weekStart||0,x=(g<v?g+7:g)-v;return m(n?b-x:b+(6-x),p);case s:case h:return f(y+"Hours",0);case a:return f(y+"Minutes",1);case o:return f(y+"Seconds",2);case i:return f(y+"Milliseconds",3);default:return this.clone()}},b.endOf=function(e){return this.startOf(e,!1)},b.$set=function(e,t){var r,l=D.p(e),c="set"+(this.$u?"UTC":""),m=(r={},r[s]=c+"Date",r[h]=c+"Date",r[d]=c+"Month",r[u]=c+"FullYear",r[a]=c+"Hours",r[o]=c+"Minutes",r[i]=c+"Seconds",r[n]=c+"Milliseconds",r)[l],f=l===s?this.$D+(t-this.$W):t;if(l===d||l===u){var g=this.clone().set(h,1);g.$d[m](f),g.init(),this.$d=g.set(h,Math.min(this.$D,g.daysInMonth())).$d}else m&&this.$d[m](f);return this.init(),this},b.set=function(e,t){return this.clone().$set(e,t)},b.get=function(e){return this[D.p(e)]()},b.add=function(n,c){var h,m=this;n=Number(n);var f=D.p(c),g=function(e){var t=S(m);return D.w(t.date(t.date()+Math.round(e*n)),m)};if(f===d)return this.set(d,this.$M+n);if(f===u)return this.set(u,this.$y+n);if(f===s)return g(1);if(f===l)return g(7);var p=(h={},h[o]=t,h[a]=r,h[i]=e,h)[f]||1,b=this.$d.getTime()+n*p;return D.w(b,this)},b.subtract=function(e,t){return this.add(-1*e,t)},b.format=function(e){var t=this,r=this.$locale();if(!this.isValid())return r.invalidDate||m;var n=e||"YYYY-MM-DDTHH:mm:ssZ",i=D.z(this),o=this.$H,a=this.$m,s=this.$M,l=r.weekdays,d=r.months,c=r.meridiem,u=function(e,r,i,o){return e&&(e[r]||e(t,n))||i[r].slice(0,o)},h=function(e){return D.s(o%12||12,e,"0")},f=c||function(e,t,r){var n=e<12?"AM":"PM";return r?n.toLowerCase():n};return n.replace(g,(function(e,n){return n||function(e){switch(e){case"YY":return String(t.$y).slice(-2);case"YYYY":return D.s(t.$y,4,"0");case"M":return s+1;case"MM":return D.s(s+1,2,"0");case"MMM":return u(r.monthsShort,s,d,3);case"MMMM":return u(d,s);case"D":return t.$D;case"DD":return D.s(t.$D,2,"0");case"d":return String(t.$W);case"dd":return u(r.weekdaysMin,t.$W,l,2);case"ddd":return u(r.weekdaysShort,t.$W,l,3);case"dddd":return l[t.$W];case"H":return String(o);case"HH":return D.s(o,2,"0");case"h":return h(1);case"hh":return h(2);case"a":return f(o,a,!0);case"A":return f(o,a,!1);case"m":return String(a);case"mm":return D.s(a,2,"0");case"s":return String(t.$s);case"ss":return D.s(t.$s,2,"0");case"SSS":return D.s(t.$ms,3,"0");case"Z":return i}return null}(e)||i.replace(":","")}))},b.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},b.diff=function(n,h,m){var f,g=this,p=D.p(h),b=S(n),y=(b.utcOffset()-this.utcOffset())*t,v=this-b,x=function(){return D.m(g,b)};switch(p){case u:f=x()/12;break;case d:f=x();break;case c:f=x()/3;break;case l:f=(v-y)/6048e5;break;case s:f=(v-y)/864e5;break;case a:f=v/r;break;case o:f=v/t;break;case i:f=v/e;break;default:f=v}return m?f:D.a(f)},b.daysInMonth=function(){return this.endOf(d).$D},b.$locale=function(){return x[this.$L]},b.locale=function(e,t){if(!e)return this.$L;var r=this.clone(),n=$(e,t,!0);return n&&(r.$L=n),r},b.clone=function(){return D.w(this.$d,this)},b.toDate=function(){return new Date(this.valueOf())},b.toJSON=function(){return this.isValid()?this.toISOString():null},b.toISOString=function(){return this.$d.toISOString()},b.toString=function(){return this.$d.toUTCString()},p}(),C=E.prototype;return S.prototype=C,[["$ms",n],["$s",i],["$m",o],["$H",a],["$W",s],["$M",d],["$y",u],["$D",h]].forEach((function(e){C[e[1]]=function(t){return this.$g(t,e[0],e[1])}})),S.extend=function(e,t){return e.$i||(e(t,E,S),e.$i=!0),S},S.locale=$,S.isDayjs=F,S.unix=function(e){return S(1e3*e)},S.en=x[v],S.Ls=x,S.p={},S}();var Bl=ue(Cl.exports),Ol={exports:{}};Ol.exports=function(){var e={LTS:"h:mm:ss A",LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D, YYYY",LLL:"MMMM D, YYYY h:mm A",LLLL:"dddd, MMMM D, YYYY h:mm A"},t=/(\[[^[]*\])|([-_:/.,()\s]+)|(A|a|YYYY|YY?|MM?M?M?|Do|DD?|hh?|HH?|mm?|ss?|S{1,3}|z|ZZ?)/g,r=/\d\d/,n=/\d\d?/,i=/\d*[^-_:/,()\s\d]+/,o={},a=function(e){return(e=+e)+(e>68?1900:2e3)},s=function(e){return function(t){this[e]=+t}},l=[/[+-]\d\d:?(\d\d)?|Z/,function(e){(this.zone||(this.zone={})).offset=function(e){if(!e)return 0;if("Z"===e)return 0;var t=e.match(/([+-]|\d\d)/g),r=60*t[1]+(+t[2]||0);return 0===r?0:"+"===t[0]?-r:r}(e)}],d=function(e){var t=o[e];return t&&(t.indexOf?t:t.s.concat(t.f))},c=function(e,t){var r,n=o.meridiem;if(n){for(var i=1;i<=24;i+=1)if(e.indexOf(n(i,0,t))>-1){r=i>12;break}}else r=e===(t?"pm":"PM");return r},u={A:[i,function(e){this.afternoon=c(e,!1)}],a:[i,function(e){this.afternoon=c(e,!0)}],S:[/\d/,function(e){this.milliseconds=100*+e}],SS:[r,function(e){this.milliseconds=10*+e}],SSS:[/\d{3}/,function(e){this.milliseconds=+e}],s:[n,s("seconds")],ss:[n,s("seconds")],m:[n,s("minutes")],mm:[n,s("minutes")],H:[n,s("hours")],h:[n,s("hours")],HH:[n,s("hours")],hh:[n,s("hours")],D:[n,s("day")],DD:[r,s("day")],Do:[i,function(e){var t=o.ordinal,r=e.match(/\d+/);if(this.day=r[0],t)for(var n=1;n<=31;n+=1)t(n).replace(/\[|\]/g,"")===e&&(this.day=n)}],M:[n,s("month")],MM:[r,s("month")],MMM:[i,function(e){var t=d("months"),r=(d("monthsShort")||t.map((function(e){return e.slice(0,3)}))).indexOf(e)+1;if(r<1)throw new Error;this.month=r%12||r}],MMMM:[i,function(e){var t=d("months").indexOf(e)+1;if(t<1)throw new Error;this.month=t%12||t}],Y:[/[+-]?\d+/,s("year")],YY:[r,function(e){this.year=a(e)}],YYYY:[/\d{4}/,s("year")],Z:l,ZZ:l};function h(r){var n,i;n=r,i=o&&o.formats;for(var a=(r=n.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g,(function(t,r,n){var o=n&&n.toUpperCase();return r||i[n]||e[n]||i[o].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g,(function(e,t,r){return t||r.slice(1)}))}))).match(t),s=a.length,l=0;l<s;l+=1){var d=a[l],c=u[d],h=c&&c[0],m=c&&c[1];a[l]=m?{regex:h,parser:m}:d.replace(/^\[|\]$/g,"")}return function(e){for(var t={},r=0,n=0;r<s;r+=1){var i=a[r];if("string"==typeof i)n+=i.length;else{var o=i.regex,l=i.parser,d=e.slice(n),c=o.exec(d)[0];l.call(t,c),e=e.replace(c,"")}}return function(e){var t=e.afternoon;if(void 0!==t){var r=e.hours;t?r<12&&(e.hours+=12):12===r&&(e.hours=0),delete e.afternoon}}(t),t}}return function(e,t,r){r.p.customParseFormat=!0,e&&e.parseTwoDigitYear&&(a=e.parseTwoDigitYear);var n=t.prototype,i=n.parse;n.parse=function(e){var t=e.date,n=e.utc,a=e.args;this.$u=n;var s=a[1];if("string"==typeof s){var l=!0===a[2],d=!0===a[3],c=l||d,u=a[2];d&&(u=a[2]),o=this.$locale(),!l&&u&&(o=r.Ls[u]),this.$d=function(e,t,r){try{if(["x","X"].indexOf(t)>-1)return new Date(("X"===t?1e3:1)*e);var n=h(t)(e),i=n.year,o=n.month,a=n.day,s=n.hours,l=n.minutes,d=n.seconds,c=n.milliseconds,u=n.zone,m=new Date,f=a||(i||o?1:m.getDate()),g=i||m.getFullYear(),p=0;i&&!o||(p=o>0?o-1:m.getMonth());var b=s||0,y=l||0,v=d||0,x=c||0;return u?new Date(Date.UTC(g,p,f,b,y,v,x+60*u.offset*1e3)):r?new Date(Date.UTC(g,p,f,b,y,v,x)):new Date(g,p,f,b,y,v,x)}catch(e){return new Date("")}}(t,s,n),this.init(),u&&!0!==u&&(this.$L=this.locale(u).$L),c&&t!=this.format(s)&&(this.$d=new Date("")),o={}}else if(s instanceof Array)for(var m=s.length,f=1;f<=m;f+=1){a[1]=s[f-1];var g=r.apply(this,a);if(g.isValid()){this.$d=g.$d,this.$L=g.$L,this.init();break}f===m&&(this.$d=new Date(""))}else i.call(this,e)}}}();var kl=ue(Ol.exports),_l={exports:{}};_l.exports=function(e,t,r){t.prototype.isBetween=function(e,t,n,i){var o=r(e),a=r(t),s="("===(i=i||"()")[0],l=")"===i[1];return(s?this.isAfter(o,n):!this.isBefore(o,n))&&(l?this.isBefore(a,n):!this.isAfter(a,n))||(s?this.isBefore(o,n):!this.isAfter(o,n))&&(l?this.isAfter(a,n):!this.isBefore(a,n))}};var Al=ue(_l.exports),zl={exports:{}};zl.exports=function(e,t){t.prototype.isSameOrAfter=function(e,t){return this.isSame(e,t)||this.isAfter(e,t)}};var jl=ue(zl.exports),Ml={exports:{}};Ml.exports=function(e,t){t.prototype.isSameOrBefore=function(e,t){return this.isSame(e,t)||this.isBefore(e,t)}};var Pl,Tl,Hl,Il=ue(Ml.exports),Rl={exports:{}},Ll=ue(Rl.exports=(Pl={year:0,month:1,day:2,hour:3,minute:4,second:5},Tl={},function(e,t,r){var n,i=function(e,t,r){void 0===r&&(r={});var n=new Date(e),i=function(e,t){void 0===t&&(t={});var r=t.timeZoneName||"short",n=e+"|"+r,i=Tl[n];return i||(i=new Intl.DateTimeFormat("en-US",{hour12:!1,timeZone:e,year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit",timeZoneName:r}),Tl[n]=i),i}(t,r);return i.formatToParts(n)},o=function(e,t){for(var n=i(e,t),o=[],a=0;a<n.length;a+=1){var s=n[a],l=s.type,d=s.value,c=Pl[l];c>=0&&(o[c]=parseInt(d,10))}var u=o[3],h=24===u?0:u,m=o[0]+"-"+o[1]+"-"+o[2]+" "+h+":"+o[4]+":"+o[5]+":000",f=+e;return(r.utc(m).valueOf()-(f-=f%1e3))/6e4},a=t.prototype;a.tz=function(e,t){void 0===e&&(e=n);var i=this.utcOffset(),o=this.toDate(),a=o.toLocaleString("en-US",{timeZone:e}),s=Math.round((o-new Date(a))/1e3/60),l=r(a,{locale:this.$L}).$set("millisecond",this.$ms).utcOffset(15*-Math.round(o.getTimezoneOffset()/15)-s,!0);if(t){var d=l.utcOffset();l=l.add(i-d,"minute")}return l.$x.$timezone=e,l},a.offsetName=function(e){var t=this.$x.$timezone||r.tz.guess(),n=i(this.valueOf(),t,{timeZoneName:e}).find((function(e){return"timezonename"===e.type.toLowerCase()}));return n&&n.value};var s=a.startOf;a.startOf=function(e,t){if(!this.$x||!this.$x.$timezone)return s.call(this,e,t);var n=r(this.format("YYYY-MM-DD HH:mm:ss:SSS"),{locale:this.$L});return s.call(n,e,t).tz(this.$x.$timezone,!0)},r.tz=function(e,t,i){var a=i&&t,s=i||t||n,l=o(+r(),s);if("string"!=typeof e)return r(e).tz(s);var d=function(e,t,r){var n=e-60*t*1e3,i=o(n,r);if(t===i)return[n,t];var a=o(n-=60*(i-t)*1e3,r);return i===a?[n,i]:[e-60*Math.min(i,a)*1e3,Math.max(i,a)]}(r.utc(e,a).valueOf(),l,s),c=d[0],u=d[1],h=r(c).utcOffset(u);return h.$x.$timezone=s,h},r.tz.guess=function(){return Intl.DateTimeFormat().resolvedOptions().timeZone},r.tz.setDefault=function(e){n=e}}));Bl.extend(Al),Bl.extend(Il),Bl.extend(jl),Bl.extend(kl),Bl.extend(Ll),function(e){e.generateDays=e=>{const t=e.startOf("month"),r=Bl(t).startOf("week");return Wl(r).map((e=>Nl(e)))},e.generateDaysForCurrentWeek=e=>{const t=e.startOf("week");return Nl(t)},e.generateMonths=e=>{const t=[];for(let r=0;r<12;r++){const n=e.month(r);t.push(Bl(n))}return t},e.generateDecadeOfYears=e=>{const t=e.year(),r=10*Math.floor(t/10),n=e.year(r),i=[n.subtract(1,"year"),n];for(let e=1;e<11;e++)i.push(n.add(e,"year"));return i},e.getStartEndDecade=e=>{const t=10*Math.floor(+e.format("YYYY")/10);return{beginDecade:t,endDecade:+Bl(`${t+9}-01-01`).format("YYYY")}},e.convertTo12HourFormat=e=>{const t=Bl(e,"HH:mm");return t.isValid()?t.format("h:mm a"):""},e.isWithinRange=(e,t,r,n="day")=>!t&&!r||(t&&r?e.isBetween(t,r,n,"[]"):t?e.isSameOrAfter(t,n):e.isSameOrBefore(r,n)),e.isPreviousMonthWithinRange=(t,r)=>e.isWithinRange(t.subtract(1,"month"),r,void 0,"month"),e.isPreviousYearWithinRange=(t,r)=>e.isWithinRange(t.subtract(1,"year"),r,void 0,"year"),e.isPreviousDecadeWithinRange=(t,r)=>{const{beginDecade:n}=e.getStartEndDecade(t);return e.isWithinRange(t.year(n).subtract(1,"year"),r,void 0,"year")},e.isNextMonthWithinRange=(t,r)=>e.isWithinRange(t.add(1,"month"),void 0,r,"month"),e.isNextYearWithinRange=(t,r)=>e.isWithinRange(t.add(1,"year"),void 0,r,"year"),e.isNextDecadeWithinRange=(t,r)=>{const{endDecade:n}=e.getStartEndDecade(t);return e.isWithinRange(t.year(n).add(1,"year"),void 0,r,"year")},e.getWeekStartEnd=e=>({start:e.startOf("week").format("YYYY-MM-DD"),end:e.endOf("week").format("YYYY-MM-DD")}),e.getFixedRangeStartEnd=(e,t)=>({start:e.format("YYYY-MM-DD"),end:e.add(t-1,"day").format("YYYY-MM-DD")}),e.isDisabledDay=(t,r,n,i)=>{const o=e.isWithinRange(t,n?Bl(n):void 0,i?Bl(i):void 0),a=r&&r.includes(t.format("YYYY-MM-DD"));return!o||!!a}}(Hl||(Hl={}));const Wl=e=>{const t=[e];for(let r=1;r<6;r++){const n=e.add(r,"week");t.push(n)}return t},Nl=e=>{const t=[];for(let r=0;r<7;r++){const n=e.add(r,"day");t.push(n)}return t},Vl=[1,3,5,7,8,10,12],Yl=[4,6,9,11];var ql,Ql,Ul,Jl;!function(e){e.clampDay=(t,r,n)=>{const i=parseInt(t),o=parseInt(r),a=parseInt(n);return 0==i?"1":Vl.includes(o)?Math.min(i,31).toString():Yl.includes(o)?Math.min(i,30).toString():2===o?e.isLeapYear(a)?Math.min(i,29).toString():Math.min(i,28).toString():t},e.clampMonth=e=>{const t=parseInt(e);return 0==t?"1":t>12?"12":e},e.isLeapYear=e=>e%4==0&&e%100!=0||e%400==0,e.getTimeDiffInMinutes=(e,t,r="HH:mm")=>{const n=Bl(e,r);return Bl(t,r).diff(n,"minute")},e.toDayjs=e=>e?Bl(e):Bl(),e.addMinutesToTime=(e,t,r="HH:mm")=>Bl(e,r).add(t,"minutes").format(r),e.isSame=(e,t,r="day")=>Bl(e).isSame(Bl(t),r)}(ql||(ql={})),function(e){e.isDateDisabled=(e,t)=>{const{disabledDates:r,minDate:n,maxDate:i}=t;return!!(r&&r.length&&r.includes(e))||(!(!n||!Bl(e).isBefore(n,"day"))||!(!i||!Bl(e).isAfter(i,"day")))},e.sanitizeInput=e=>{if(e){if(Bl(e).isValid())return e}return""}}(Ql||(Ql={})),function(e){e.generate=()=>Math.random().toString(36).substring(2,9)}(Ul||(Ul={})),function(e){e.transformWithSpaces=(e,t)=>{const r="(.{"+t+"})";return e.replace(/[^\dA-Z]/gi,"").replace(new RegExp(r,"g"),"$1 ").trim()},e.padValue=(e,t)=>{if("0"===e)return t?e:e.padStart(2,"0");if(""===e)return e;return parseInt(e).toString().padStart(2,"0")},e.shouldTruncateToTwoLines=(e,t)=>{const r=Math.floor(t/9);return e.length>=2*r||1===e.split(" ").length&&e.length>r},e.truncateOneLine=(e,t,r,n,i=8)=>{let o=0;t>r&&(o=Math.floor((t-r)/i));const a=n+o;if(a<e.length){const t=Math.floor(a/2);return e.substring(0,t)+" ... "+e.substring(e.length-t,e.length)}return e},e.truncateTwoLines=(e,t,r,n=1.2)=>{const i=Math.floor(2*t/(.6*r))*(2/n);if(e.length<=i)return e;const o=Math.floor(.6*i),a=Math.floor(.2*i);return`${e.substring(0,o)}...${e.substring(e.length-a)}`},e.getTextWidth=(t,r)=>{if("undefined"==typeof document)return 0;const n=(e.getTextWidth.canvas||(e.getTextWidth.canvas=document.createElement("canvas"))).getContext("2d");n.font=r;return n.measureText(t).width},e.maskValue=(e,r)=>{if(!e)return e;const{maskRange:n,unmaskRange:i,maskChar:o="•",maskRegex:a,maskTransformer:s}=r;if(s)return s(e);if(a)return e.replace(a,o);if(n){const{startIndex:r,endIndex:i}=t(n[0],n[1]);return e.substring(0,r)+o.repeat(e.substring(r,i+1).length)+e.substring(i+1)}if(i){const{startIndex:r,endIndex:n}=t(i[0],i[1]);return o.repeat(e.substring(0,r).length)+e.substring(r,n+1)+o.repeat(e.substring(n+1).length)}return e};const t=(e,t)=>e<t?{startIndex:e,endIndex:t}:{startIndex:t,endIndex:e}}(Jl||(Jl={}));const Xl=a.div`
    position: fixed;
    left: 0;
    top: 0;
    height: 0;
    width: 0;
    visibility: hidden;
    z-index: ${e=>e.$zIndex};

    ${e=>{if(e.$show)return l`
                height: 100%;
                width: 100vw;
                visibility: visible;
            `}}
`,Zl=a.div`
    position: absolute;
    left: 0;
    top: 0;
    background-color: ${e=>e.$stacked?Jr["overlay-subtle"]:Jr["overlay-strong"]};
    backdrop-filter: ${e=>(e=>{let t="";return e&&(t+="blur(10px)"),t.length>0?t:"none"})(e.$backgroundBlur)};
    transition: opacity 200ms ease;

    ${e=>{let t="";return e.$show?t+=l`
                visibility: visible;
                opacity: 1;
                pointer-events: auto;
                height: 100%;
                width: 100vw;
            `:t+=l`
                visibility: hidden;
                opacity: 0;
                transition-delay: ${e.$disableTransition?"0ms":"400ms"};
                pointer-events: none;
                height: 0;
                width: 0;
            `,e.$disableTransition&&(t+=l`
                transition: none;
            `),t}}
`;var Gl;!function(e){e.Ready="overlay-context-ready",e.Change="overlay-context-change"}(Gl||(Gl={}));const Kl=({show:e=!1,rootId:r,onOverlayClick:n,children:i,backgroundOpacity:o,backgroundBlur:a=!0,disableTransition:s=!1,enableOverlayClick:l=!1,zIndex:d,id:m})=>{const[f,g]=h(null),[p,y]=h(),[v]=h((()=>Ul.generate())),x=k(),w=u(),F=u(null),$=i&&c.cloneElement(i,{ref:F}),D=m?`lifesg-ds-overlay-root-${m}`:"lifesg-ds-overlay-root",E=(null!=d?d:p)?99999:99998;(e=>{const t=B();b((()=>{if(!t)return;const r={zIndex:e};t.events.emit(Gl.Change,r)}),[t,e]),b((()=>{if(!t)return;const r=()=>{const r={zIndex:e};t.events.emit(Gl.Change,r)};return null==t||t.events.on(Gl.Ready,r),()=>null==t?void 0:t.events.off(Gl.Ready,r)}),[t,e])})(E),b((()=>(z(),g(O()),()=>{T(),M().length<1&&j("remove")})),[]),b((()=>{if(e){const e=A();C(e),P();const t=setTimeout((()=>{j("add")}),200);return()=>clearTimeout(t)}{T();const e=setTimeout((()=>{M().length<1&&j("remove")}),200);return()=>clearTimeout(e)}}),[e]);const C=e=>{w.current=e,y(e)},O=()=>document&&r?document.getElementById(r):document?document.body:null,A=()=>M().length>0,z=()=>{if(!document.getElementById(td)){const e=document.createElement("style");e.id=td;const t=document.documentElement.clientWidth,r=window.innerWidth-t;e.innerHTML=`\n\t\t\t\t.${rd} {\n\t\t\t\t\toverflow: hidden;\n\t\t\t\t\tpadding-right: ${r}px !important;\n\t\t\t\t\t-ms-overflow-style: none;\n\t\t\t\t\tscrollbar-width: none;\n\t\t\t\t}\n\n\t\t\t\t.${rd}::-webkit-scrollbar {\n\t\t\t\t\tdisplay: none;\n\t\t\t\t}\n\t\t\t`,document.body.appendChild(e)}},j=e=>{const t=document.body.classList.contains(rd);"add"!==e||t?"remove"===e&&t&&document.body.classList.remove(rd):document.body.classList.add(rd)},M=()=>{const e=document.body.dataset.lifesgDsOverlayOrder;return e?e.split(","):[]},P=()=>{const e=M();document.body.dataset.lifesgDsOverlayOrder=[...e,v].join(",")},T=()=>{const e=M();document.body.dataset.lifesgDsOverlayOrder=e.filter((e=>e!==v)).join(",")},H=e=>{var t;const r=null===(t=F.current)||void 0===t?void 0:t.firstChild;r&&r.contains(e.target)||n&&l&&(e.preventDefault(),n())};return f?S.createPortal(t(Xl,Object.assign({id:D,"data-testid":D,$show:e,$zIndex:E},{children:i&&t(_,Object.assign({id:x},{children:t(Zl,Object.assign({"data-testid":"overlay-wrapper",$show:e,$stacked:p,$backgroundBlur:a,$disableTransition:s,onClick:H},{children:$}))}))})),f):null},ed=e=>t(O,{children:t(Kl,Object.assign({},e))}),td="lifesg-ds-overlay-stylesheet",rd="lifesg-ds-overlay-open",nd=a.div`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 100%;
    overflow: hidden;
    ${e=>{return t=e.show,r=e.animationFrom||"bottom",t?`\n\t\t\t${r}: 0;\n\t\t\topacity: 1;\n\t\t\ttransition: all 300ms cubic-bezier(0.21, 0.79, 0.53, 1);\n\t\t\ttransition-delay: 200ms;\n\t\t`:`\n\t\t${r}: -3%;\n\t\topacity: 0;\n\t\ttransition: all 300ms cubic-bezier(0.4, 0.34, 0.38, 1);\n\t`;var t,r}}

    ${en.MaxWidth.sm} {
        height: calc(
            ${e=>e.verticalHeight?`${e.verticalHeight}px`:"1vh"} * 100
        );

        top: ${e=>e.offsetTop||0}px;
    }
`,id=e=>{var{id:r="modal",show:n,animationFrom:i="bottom",children:o,enableOverlayClick:a=!0,rootComponentId:s,zIndex:l,onOverlayClick:d,dismissKeyboardOnShow:c=!0}=e,u=ne(e,["id","show","animationFrom","children","enableOverlayClick","rootComponentId","zIndex","onOverlayClick","dismissKeyboardOnShow"]);const[m,f]=h(),[g,p]=h();b((()=>window.visualViewport?(v(),window.visualViewport.addEventListener("resize",v),()=>{window.visualViewport.removeEventListener("resize",v)}):(y(),window.addEventListener("resize",y),()=>{window.removeEventListener("resize",y)})),[]),b((()=>{var e,t;n&&c&&(null===(t=null===(e=document.activeElement)||void 0===e?void 0:e.blur)||void 0===t||t.call(e))}),[n]);const y=()=>{const e=.01*window.innerHeight;f(e)},v=()=>{const e=.01*window.visualViewport.height;f(e),p(window.visualViewport.offsetTop)};return t(ed,Object.assign({"data-testid":`${r}-overlay`,show:n,enableOverlayClick:a,onOverlayClick:d,id:r,rootId:s,zIndex:l},{children:t(nd,Object.assign({show:n,animationFrom:i,"data-testid":r,verticalHeight:m,offsetTop:g},u,{children:o}))}))},od=(e,t,r=!1)=>{const n=`${e}-${t.toLowerCase()}`;return l`
        ${Zr[n]}
        ${r?"margin-bottom: 1.05em;":"margin-bottom: 0;"}
    `},ad=(e,t)=>l`
    ${od(e,t.weight||"regular",t.paragraph)}
    ${((e=!1,t=!1)=>t?l`
            display: block;
        `:e?l`
            display: inline;
        `:l`
            display: block;
        `)(t.inline,t.paragraph)}
    color: ${Jr.text};
`;var sd;!function(r){const n=(e,t,r)=>{const n=a(e).attrs((({inline:e})=>({as:e?"span":void 0})))`
            ${e=>ad(t,e)}
        `;return n.displayName=`Typography.${r}`,n};r.HeaderXXL=n("h1","header-xxl","HeaderXXL"),r.HeaderXL=n("h2","header-xl","HeaderXL"),r.HeaderLG=n("h3","header-lg","HeaderLG"),r.HeaderMD=n("h4","header-md","HeaderMD"),r.HeaderSM=n("h5","header-sm","HeaderSM"),r.HeaderXS=n("h6","header-xs","HeaderXS");const i=(e,t)=>{const r=a.p.attrs((({inline:e})=>({as:e?"span":void 0})))`
            ${t=>ad(e,t)}
        `;return r.displayName=`Typography.${t}`,r};r.BodyBL=i("body-baseline","BodyBL"),r.BodyMD=i("body-md","BodyMD"),r.BodySM=i("body-sm","BodySM"),r.BodyXS=i("body-xs","BodyXS");const o=(r,n)=>{const i=a.a`
            ${e=>l`
                ${od(r,e.weight||"regular")}
                color: ${Jr.hyperlink};
                text-decoration: none;

                :hover,
                :active,
                :focus {
                    color: ${Jr["text-hover"]};
                }
            `}
        `,o=r=>{var{external:n=!1,children:o}=r,a=ne(r,["external","children"]);return e(i,Object.assign({},a,{children:[o,n&&t(ld,{})]}))};return o.displayName=`Typography.${n}`,o};r.LinkBL=o("body-baseline","LinkBL"),r.LinkMD=o("body-md","LinkMD"),r.LinkSM=o("body-sm","LinkSM"),r.LinkXS=o("body-xs","LinkXS")}(sd||(sd={}));const ld=a($)`
    height: 1lh;
    width: 1em;
    margin-left: 0.4em;
    vertical-align: middle;
`,dd=a.div`
    border-radius: ${Kr.md};
    background: ${Jr.bg};
    padding: ${Gr["spacing-16"]} ${Gr["spacing-32"]};
    box-shadow: 0 2px 8px rgba(104, 104, 104, 0.25);
`,cd=a.div`
    position: relative;
    display: flex;
    flex-direction: column;
    width: 40rem;
    max-height: 70%;
    background: ${Jr.bg};
    box-shadow: 0 0 10px 2px rgba(0, 0, 0, 0.45);
    border-radius: 0.75rem;
    overflow: hidden;

    ${en.MaxWidth.md} {
        width: 90%;
        max-height: 70%;
    }
`,ud=a(pn)`
    position: absolute;
    top: 1rem;
    right: 1rem;
    padding: 0;
    color: ${Jr.icon};

    svg {
        height: 2rem;
        width: 2rem;
    }

    ${en.MaxWidth.sm} {
        right: 1.25rem;
    }
`,hd=e=>{const{textSize:t}=e||{};return l`
        // Text styling
        ${t&&Zr[`${t}-regular`]}

        strong {
            font-weight: ${Xr["weight-semibold"]};
            ${t&&Zr[`${t}-semibold`]};
        }

        p {
            margin: 0;
        }

        // Link styling
        a {
            font-weight: ${Xr["weight-semibold"]};
            ${t&&Zr[`${t}-semibold`]}
            color: ${Jr.hyperlink};
            text-decoration: none;

            svg {
                color: ${Jr["icon-primary"]};
                height: 1lh;
                width: 1em;
                margin-left: 0.4rem;
                vertical-align: middle;
            }

            :hover,
            :active,
            :visited,
            :focus {
                color: ${Jr["hyperlink-hover"]};

                svg {
                    color: ${Jr["icon-hover"]};
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
    `},md=a.div`
    max-width: 30rem;
    padding: 0 1rem;
    pointer-events: auto;
`,fd=a((e=>{var{children:r}=e,n=ne(e,["children"]);const i=n["data-testid"]||"card";return t(dd,Object.assign({},n,{"data-testid":i},{children:"string"==typeof r?t(sd.BodyBL,{children:r}):r}))}))`
    color: ${Jr.text};
    ${hd({textSize:"body-md"})}

    ${en.MaxWidth.sm} {
        display: none;
    }
`,gd=a((r=>{var{id:n="modal-box",children:i,onClose:o,showCloseButton:a=!0}=r,s=ne(r,["id","children","onClose","showCloseButton"]);return e(cd,Object.assign({"data-testid":n},s,{onClick:e=>{e.stopPropagation()}},{children:[a&&t(ud,Object.assign({onClick:o,"data-testid":"close-button",focusHighlight:!1,focusOutline:"browser"},{children:t(V,{})})),i]}))}))`
    padding: 3.5rem 1.25rem 2.5rem;
`,pd=a.div`
    overflow-y: scroll;

    ::-webkit-scrollbar {
        display: none; /* Chrome/Safari/Webkit */
    }

    color: ${Jr.text};
    ${hd({textSize:"body-md"})}
`,bd=n=>{var{children:i,visible:o,onMobileClose:a}=n,s=ne(n,["children","visible","onMobileClose"]);const l=s["data-testid"]||"popover",d=El.useMediaQuery({maxWidth:un.mobileL}),c=()=>{a&&a()},u=()=>"string"==typeof i?t(sd.BodyMD,{children:i}):i;return e(r,{children:[o&&t(md,Object.assign({"data-testid":l},s,{children:t(fd,{children:u()})})),d&&t(id,Object.assign({show:o,onOverlayClick:c},{children:t(gd,Object.assign({onClose:c},{children:t(pd,{children:u()})}))}))]})},yd=a.div`
    display: inline;
    width: fit-content;
    cursor: pointer;
    position: relative;
`,vd=n=>{var i,o,{children:a,popoverContent:s,trigger:l="click",position:d="top",zIndex:c,rootNode:m,customOffset:f,delay:g,onPopoverAppear:p,onPopoverDismiss:y}=n,v=ne(n,["children","popoverContent","trigger","position","zIndex","rootNode","customOffset","delay","onPopoverAppear","onPopoverDismiss"]);const[x,w]=h(!1),F=u(),$=u(),S=El.useMediaQuery({maxWidth:fn.mobileL}),{refs:D,floatingStyles:E,context:C}=A({open:x,placement:d,whileElementsMounted:z,middleware:[j(null!=f?f:16),M(),P({limiter:T()})],onOpenChange:e=>{w(e),x!==e&&J(e)}}),O=(()=>{const[e,t]=h(void 0),r=B();return b((()=>{if(!r)return void t(void 0);const e=e=>{t(e.zIndex)};return r.events.on(Gl.Change,e),r.events.emit(Gl.Ready),()=>r.events.off(Gl.Change,e)}),[r]),e})(),k=S?"click":l,_=H(C,{ignoreMouse:"hover"===k}),V=I(C),Y=R(C,{enabled:"hover"===k,delay:{open:null!==(i=null==g?void 0:g.open)&&void 0!==i?i:0,close:null!==(o=null==g?void 0:g.close)&&void 0!==o?o:500}}),{getReferenceProps:q,getFloatingProps:Q}=L([_,V,Y]),U=()=>{w(!1),J(!1)},J=e=>{e&&p&&p(),!e&&y&&y()};return e(r,{children:[t(yd,Object.assign({ref:e=>{F.current=e,D.setReference(e)}},q({onClick:e=>{e.stopPropagation(),e.preventDefault()}}),v,{children:a})),x&&t(W,Object.assign({root:m},{children:t(N,Object.assign({context:C},{children:t("div",Object.assign({ref:e=>{$.current=e,D.setFloating(e)},style:Object.assign(Object.assign({},E),{outline:"none",zIndex:null!=c?c:O})},Q(),{children:"function"==typeof s?s():t(bd,Object.assign({visible:!0,onMobileClose:U},{children:s}))}))}))}))]})},xd=e=>{switch(e){case"underline":return"text-decoration: underline 1px;";case"underline-dashed":return"text-decoration: underline dashed 1px;"}},wd=a.span`
    color: ${cn.Primary};
    font-weight: 600;
    text-underline-position: under;

    ${({$defaultStyle:e})=>xd(e)}

    &:hover,
    &:focus-visible {
        color: ${cn.Secondary};
        ${({$hoverStyle:e})=>xd(e)}
    }

    svg {
        height: 1lh; // align vertically
        width: 1em; // scale icon with font size
        vertical-align: top;
    }
`,Fd=a.span`
    ${e=>!e.$standalone&&"margin-left: 0.25rem;"}
`,$d=r=>{var{ariaLabel:n,content:i,icon:o,underlineStyle:a="default",underlineHoverStyle:s="default"}=r,l=ne(r,["ariaLabel","content","icon","underlineStyle","underlineHoverStyle"]);const d=!!i;return t(vd,Object.assign({},l,{children:e(wd,Object.assign({role:"button","aria-haspopup":"dialog",tabIndex:0,$defaultStyle:a,$hoverStyle:s,"aria-label":null!=n?n:d?void 0:"More info"},{children:[i,o&&t(Fd,Object.assign({$standalone:!d},{children:o}))]}))}))};a.button`
    padding: 0.25rem 0.5rem 0.25rem 0.25rem;
    border: none;
    background: none;
    cursor: pointer;

    & > svg {
        vertical-align: text-bottom;
        height: 1rem;
        width: 1rem;
        color: ${cn.Primary};
    }
`;const Sd=a.div`
    padding-left: 0.25rem;
    display: inline;
`,Dd=({addon:e,rootNode:r})=>{const{content:n,type:i,icon:o,id:a,zIndex:s,"data-testid":l}=e;return t(Sd,{children:t($d,{trigger:"click",id:a,"data-testid":l,popoverContent:n,rootNode:r,zIndex:s,icon:null!=o?o:t(C,{"data-testid":`${i}-icon`}),ariaLabel:"More info"})})};var Ed;!function(e){e[e.Subpage=0]="Subpage",e[e.Domain=1]="Domain"}(Ed||(Ed={}));const Cd=a.div`
    background-color: ${e=>e.$collapsible?cn.Neutral[7](e):cn.Neutral[8](e)};

    ${mn.tablet} {
        background-color: ${cn.Neutral[7]};
    }
`,Bd=a.div`
    display: ${e=>e.$showDivider?"block":"none"};
    height: 1px;
    background-color: ${cn.Neutral[5]};

    ${mn.tablet} {
        display: ${e=>e.$showMobileDivider?"block":"none"};
        margin: 0 1rem;
    }
`,Od=a.div`
    display: flex;
    align-items: center;

    background-color: ${cn.Neutral[8]};

    ${mn.tablet} {
        background-color: transparent;
    }
`,kd=a(pn)`
    margin: 0 0 0 auto;
`,_d=a(Y)`
    height: 1.125rem;
    width: 1.125rem;
    color: ${cn.Neutral[3]};

    transform: rotate(${e=>e.$expanded?180:0}deg);
    transition: transform 300ms ease-in-out;

    &:hover {
        color: ${cn.Neutral[2]};
    }
`,Ad=a(kn.H4)`
    margin: 1.5rem 0 1.5rem 1.25rem;

    ${mn.tablet} {
        ${Bn("H5","semibold")}
        margin: 1.5rem 1.25rem 0 1.25rem;
    }
`,zd=a(Sl.div)`
    overflow: hidden;
`,jd=a.div`
    padding: 1rem 1.25rem;
`,Md=a(Sl.div)`
    ${e=>e.$minimisable&&"overflow: hidden;"}
    ${e=>e.$height&&`height: ${e.$height}px;`}
`,Pd=a(nn.Small)`
    height: fit-content;
    padding: 0;
    margin: 1rem 0 0 0;
`,Td=r=>{var{collapsible:n=!0,initialExpanded:i=!1,expanded:o,onExpandChange:a,minimisable:s=!1,minimisedHeight:l,showDivider:d=!0,showMobileDivider:c=!0,title:u,addon:m,children:f}=r,g=ne(r,["collapsible","initialExpanded","expanded","onExpandChange","minimisable","minimisedHeight","showDivider","showMobileDivider","title","addon","children"]);const{mode:p,rootNode:y}=w(Qn),v="mobile"===p,[x,F]=h(k()),[$,S]=h(s),D=!v&&n,E=Ni(),C=Ni(),B=ol({height:x?E.height:0}),O=$?null!=l?l:Math.min(.5*C.height,216):C.height;b((()=>{F(k())}),[n,o]);function k(){return!!v||(Un(o)?!n||i:o)}return e(Cd,Object.assign({$collapsible:D},{children:[t(Bd,{$showDivider:d,$showMobileDivider:c}),(u||D)&&e(Od,{children:[u&&e(Ad,Object.assign({weight:"semibold"},{children:[u," ",m&&("popover"===m.type?t(Dd,{addon:m,rootNode:v?y:void 0}):null)]})),D&&t(kd,Object.assign({focusHighlight:!1,focusOutline:"browser",onClick:()=>{const e=!x;Un(o)&&F(e),a&&a(e)},"aria-label":x?"Collapse":"Expand"},{children:t(_d,{$expanded:x})}))]}),t(zd,Object.assign({"data-testid":"expandable-container","data-expanded":x,style:B},{children:t("div",Object.assign({ref:E.ref},{children:e(jd,Object.assign({},g,{children:[t(Md,Object.assign({"data-testid":"minimisable-container",$height:O,$minimisable:s},{children:t("div",Object.assign({ref:C.ref},{children:t("div",Object.assign({"data-id":"content-container"},{children:"function"==typeof f?f(p,{minimised:$}):f}))}))})),s&&e(Pd,Object.assign({"data-id":"minimise-button",styleType:"link",type:"button",onClick:()=>{S(!$)}},{children:["View ",$?"more":"less"]}))]}))}))}))]}))},Hd=a.div`
    height: 1.625rem;
    width: 1.625rem;
    margin-right: 0.5rem;
    flex-shrink: 0;

    svg {
        height: 100%;
        width: 100%;
    }

    ${e=>e.$disabled?e.$active?l`
                    color: ${Jr["icon-selected-disabled"]};
                `:l`
                    color: ${Jr["icon-disabled-subtle"]};
                `:e.$active?l`
                color: ${Jr["icon-selected"]};
            `:l`
            color: ${Jr["icon-subtle"]};
        `};
`,Id=({type:e,active:r=!1,disabled:n,className:i})=>{let o;switch(e){case"checkbox":o=t(r?J:U,{});break;case"radio":o=t(r?Q:q,{});break;case"tick":o=t(X,{});break;case"cross":o=t(V,{});break;default:o=null}return t(Hd,Object.assign({className:i,$active:r,$disabled:n},{children:o}))},Rd=a.div`
    padding: 0.5rem 1rem 0.5rem 0.875rem;
    display: flex;

    ${e=>{let t,r;switch(e.$type){case"error":t=Jr["bg-error"](e),r=Jr["border-error"](e);break;case"success":t=Jr["bg-success"](e),r=Jr["border-success"](e);break;case"warning":default:t=Jr["bg-warning"](e),r=Jr["border-warning"](e);break;case"info":t=Jr["bg-info"](e),r=Jr["border-info"](e);break;case"description":t=Jr["bg-strong"](e),r=Jr["border-strong"](e)}return l`
            background: ${t};
            border-left: 2px solid ${r};
        `}}

    color: ${Jr.text};
    ${e=>"small"===e.$sizeType?hd({textSize:"body-sm"}):hd({textSize:"body-md"})}
`,Ld=a.div`
    display: flex;
    margin-right: 0.5rem;

    // adds extra spacing to align the small icon with text
    ${e=>"small"===e.$sizeType&&l`
            align-items: center;
            height: 1lh;
        `}

    ${e=>{let t;const r="small"===e.$sizeType?"1.25rem":"1.5rem";switch(e.$type){case"error":t=Jr["icon-error"](e);break;case"success":t=Jr["icon-success"](e);break;case"warning":default:t=Jr["icon-warning"](e);break;case"info":t=Jr["icon-info"](e);break;case"description":t=Jr["icon-subtle"](e)}return l`
            svg {
                color: ${t};
                width: ${r};
                height: ${r};
            }
        `}}
`,Wd=a(sd.LinkSM)`
    ${e=>"small"===e.$sizeType?l`
                ${Zr["body-sm-semibold"]}
                margin-top: 0.25rem;
            `:l`
                ${Zr["body-md-semibold"]}
                margin-top: 0.5rem;
            `}
    display: flex;
    align-items: center;
    align-self: flex-start;

    svg {
        height: 1rem;
        width: 1rem;
        margin-left: 0.25rem;
    }
`,Nd=a.div`
    display: flex;
    flex-direction: column;
    flex: 1;
    overflow-wrap: anywhere;
`,Vd=a.div`
    display: flex;
    flex-direction: column;
    flex: 1;
    ${e=>{if(e.$showMore&&e.$hasActionLink)return"\n            margin-bottom: 0.5rem;\n        "}}
    ${e=>{const t="linear-gradient(to bottom, black 50%, transparent 100%)";if(!e.$showMore&&e.$maxCollapsedHeight)return`\n                max-height: ${e.$maxCollapsedHeight}px;\n\t\t\t\toverflow: hidden;\n                -webkit-mask-image: ${t};\n                mask-image: ${t};\n\t\t\t`}}
`,Yd=a.button`
    ${e=>"small"===e.$sizeType?l`
                ${Zr["body-sm-semibold"]}
            `:l`
                ${Zr["body-md-semibold"]}
            `}

    display: flex;
    align-items: center;
    align-self: flex-start;
    gap: 0.25rem;
    margin-top: 0.5rem;

    cursor: pointer;
    user-select: none;
    border: none;
    background: transparent;

    color: ${Jr["text-primary"]};
`,qd=a(n)`
    transform: rotate(${e=>e.$expanded?-180:0}deg);
    transition: transform 300ms ease-in-out;
`,Qd=e=>`\n\tmargin-bottom: ${e||0}rem;\n`,Ud=(a.ol`
    ${e=>Qd(e.bottomMargin)}
    margin-left: ${3}rem;

    ${mn.tablet} {
        margin-left: 2.5rem;
    }

    // Counter matters
    counter-reset: list;

    li {
        ${e=>Bn(e.size,"regular")}
        position: relative;
        color: ${cn.Neutral[1]};
    }

    ${e=>{const{reversed:t}=e,r=e.counterType||"decimal",n=e.counterSeparator||")";return l`
            li:before {
                content: counter(list, ${r}) "${n}";
                counter-increment: ${t?"list -1":"list"};
                position: absolute;
                left: -2rem;
            }
        `}}

    ${e=>{const{reversed:t,start:r}=e;if(r){return l`
                counter-reset: list ${t?r+1:r-1};
            `}}}

    list-style-position: outside;
    list-style-type: none;

    // nested lists styling
    ol,
    ul {
        margin-top: 0.5rem;
        margin-bottom: 0.5rem;
    }

    ul > li:before {
        content: "";
    }
`,a.ul`
    ${e=>Qd(e.bottomMargin)}
    margin-left: 2.5rem;
    list-style-type: ${e=>e.bulletType||"disc"};

    li {
        ${e=>Bn(e.size,"regular")}
        color: ${cn.Neutral[1]};
    }

    counter-reset: list;

    ol,
    ul {
        margin-top: 0.5rem;
        margin-bottom: 0.5rem;
    }
`),Jd=e=>{var{size:r="Body",children:n}=e,i=ne(e,["size","children"]);return t(Ud,Object.assign({size:r},i,{children:n}))},Xd=a.div`
    position: relative;
    display: inline-flex;
    min-width: 10.375rem;
    border-radius: 4px;
    border-width: 1px;
    border-style: solid;
    overflow: hidden;
    flex-direction: column;
    height: fit-content;
    background: ${Jr.bg};

    ${e=>{if(!e.$indicator)return l`
                justify-content: center;
            `}}

    // Container min width to fit content
    ${e=>{if(e.$useContentWidth)return l`
                min-width: unset;
            `}}

    // apply container border and header background color
    ${e=>"no-border"===e.$styleType?e.$error?l`
                        border-color: ${Jr["border-error-strong"]};
                    `:e.$disabled?e.$selected?l`
                            border: none;
                            background: ${Jr["bg-selected-disabled"]};
                        `:l`
                            border: none;
                        `:e.$selected?l`
                        border: none;
                        background: ${Jr["bg-selected"]};

                        :hover {
                            background: ${Jr["bg-selected-hover"]};
                        }
                    `:l`
                    border: none;

                    :hover {
                        background: ${Jr["bg-hover-subtle"]};
                    }
                `:e.$error?l`
                        border-color: ${Jr["border-error-strong"]};
                    `:e.$disabled?e.$selected?l`
                            border-color: ${Jr["border-selected-disabled"]};
                            background: ${Jr["bg-selected-disabled"]};
                        `:l`
                            border-color: ${Jr["border-disabled"]};
                            background: ${Jr["bg-disabled"]};
                        `:e.$selected?l`
                        border-color: ${Jr["border-selected"]};
                        background: ${Jr["bg-selected"]};

                        :hover {
                            border-color: ${Jr["border-selected-hover"]};
                            background: ${Jr["bg-selected-hover"]};
                        }
                    `:l`
                    border-color: ${Jr.border};

                    :hover {
                        border-color: ${Jr["border-hover-strong"]};
                    }
                `}
`,Zd=a.input`
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
`,Gd=a.div`
    display: flex;
    flex-direction: column;
    overflow-wrap: anywhere;
    width: 100%;
    overflow: hidden;

    // apply header container text color
    ${e=>e.$disabled?e.$selected?l`
                    color: ${Jr["text-selected-disabled"]};
                `:l`
                    color: ${Jr["text-disabled"]};
                `:e.$selected?l`
                color: ${Jr["text-selected"]};

                // this syntax is a workaround for this issue:
                // https://github.com/styled-components/styled-components/issues/3265#issuecomment-1199263511
                &:is(${Xd}:hover *) {
                    color: ${Jr["text-selected-hover"]};
                }
            `:l`
            color: ${Jr.text};

            &:is(${Xd}:hover *) {
                color: ${Jr["text-hover"]};
            }
        `}
`,Kd=a.label`
    ${Zr["body-baseline-regular"]}
    overflow: hidden;
    display: -webkit-box;
    text-overflow: ellipsis;
    -webkit-box-orient: vertical;
    overflow-wrap: break-word;
    -webkit-line-clamp: ${e=>{var t,r;return null!==(r=null===(t=e.$maxLines)||void 0===t?void 0:t.desktop)&&void 0!==r?r:"none"}};
    ${en.MaxWidth.lg} {
        -webkit-line-clamp: ${e=>{var t,r;return null!==(r=null===(t=e.$maxLines)||void 0===t?void 0:t.tablet)&&void 0!==r?r:"none"}};
    }
    ${en.MaxWidth.sm} {
        -webkit-line-clamp: ${e=>{var t,r;return null!==(r=null===(t=e.$maxLines)||void 0===t?void 0:t.mobile)&&void 0!==r?r:"none"}};
    }
`,ec=a.div`
    ${Zr["body-md-regular"]}
    margin-top: 0.5rem;

    z-index: 1; // forces sublabel to render above the input
    pointer-events: none; // to allow click events to be passed to the input

    strong,
    b {
        ${Zr["body-md-semibold"]}
    }
`,tc=a.div`
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
`,rc=a.div`
    display: flex;
    height: 100%;
    width: 100%;
    position: relative;
    padding: ${e=>e.$addPadding?"0.6875rem 0rem 0.6875rem 1rem":"0.6875rem 1rem"};
`,nc=a.button`
    color: ${e=>e.$disabled?Jr["text-disabled"]:Jr["text-error"]};
    white-space: nowrap;
    ${Zr["body-md-semibold"]}
    height: fit-content;
    padding: 0.6875rem 1rem 0.6875rem 0.5rem;
    border: none;
    background: none;

    cursor: ${e=>e.$disabled?"not-allowed":"pointer"};
`,ic=a.button`
    color: ${e=>e.disabled?Jr["text-disabled"]:Jr["text-primary"]};
    ${Zr["body-baseline-semibold"]}
    display: flex;
    align-items: center;
    justify-content: flex-end;
    border: none;
    background-color: ${Jr.bg};
    cursor: ${e=>e.disabled?"not-allowed":"pointer"};
    padding: 0 1rem 0.6875rem 1rem;
    padding-top: ${e=>e.$paddingTopRequired?"0.6875rem":"0rem"};
    width: 100%;

    svg {
        width: 1em;
        height: 1em;
        margin-left: 0.5rem;
    }
`,oc=a.div`
    width: 100%;
    color: ${e=>e.$disabled?Jr["text-disabled"]:Jr["text-error"]};
    border: none;
    background: none;
    cursor: ${e=>e.$disabled?"not-allowed":"pointer"};
    padding: 0.6875rem 1rem 0.5rem 1rem;
`,ac=a((r=>{var{type:n,className:i,children:o,actionLink:a,actionLinkIcon:s,sizeType:l="default",showIcon:d=!1,customIcon:c,maxCollapsedHeight:u}=r,m=ne(r,["type","className","children","actionLink","actionLinkIcon","sizeType","showIcon","customIcon","maxCollapsedHeight"]);const[f,g]=h(!1),[p,y]=h(!1),{height:v,ref:x}=Ni();b((()=>{w()}),[u,v]);const w=()=>{g(!u),y(F())},F=()=>!!u&&v>u;return e(Rd,Object.assign({className:i,$type:n,$sizeType:l,"data-testid":m["data-testid"]},{children:[d&&t(Ld,Object.assign({$sizeType:l,$type:n},{children:(()=>{if(n&&c)return c;switch(n){case"success":return t(te,{});case"warning":return t(ee,{});case"error":return t(K,{});case"info":case"description":return t(C,{});default:return null}})()})),e(Nd,{children:[e(Vd,Object.assign({$maxCollapsedHeight:F()?u:void 0,$showMore:f,$hasActionLink:!!a},{children:[t("div",Object.assign({ref:x},{children:o})),a&&e(Wd,Object.assign({"data-testid":"action-link",$type:n,$sizeType:l},a,{children:[a.children,s||t(G,{})]}))]})),p&&e(Yd,Object.assign({$sizeType:l,$type:n,type:"button",onClick:()=>g(!f)},{children:["Show ",f?"less":"more",t(qd,{$expanded:f})]}))]})]}))}))`
    width: 100%;
    user-select: none;
`,sc=a.div`
    padding: 0 1rem;
    padding-top: 0.6875rem;
    padding-bottom: ${e=>e.$isFinalItem?"0.6875rem":"0.5rem"};
    background-color: ${Jr.bg};
    ${hd({textSize:"body-md"})}

    ${e=>e.$disabled?l`
                color: ${Jr["text-disabled"]};
            `:e.$selected?l`
                color: ${Jr["text-selected"]};
            `:l`
                color: ${Jr.text};
            `}
`,lc=a(sd.BodyMD)`
    color: ${e=>e.$disabled?Jr["text-disabled"]:Jr["text-error"]};
`,dc=a(Jd)`
    color: ${e=>e.$disabled?Jr["text-disabled"]:Jr["text-error"]};
`,cc=a(Id)`
    ${e=>e.$disabled?e.$selected?l`
                    color: ${Jr["icon-selected-disabled"]};
                `:l`
                    color: ${Jr["icon-disabled-subtle"]};
                `:e.$selected?l`
                color: ${Jr["icon-selected"]};

                &:is(${Xd}:hover *) {
                    color: ${Jr["icon-selected-hover"]};
                }
            `:l`
            color: ${Jr["icon-subtle"]};

            &:is(${Xd}:hover *) {
                color: ${Jr["icon-hover"]};
            }
        `};
`,uc=a(Td)`
    padding: 0 0 1rem;

    [data-id="content-container"] {
        position: relative; // to get the item position relative to this parent
        padding: 0.5rem 0.5rem 0;

        ${mn.tablet} {
            padding: 1rem 1.25rem 0.5rem;
        }
    }

    [data-id="minimise-button"] {
        margin: 0.5rem 1.25rem 0;

        ${mn.tablet} {
            margin: 0.5rem 1.25rem 0;
        }
    }
`,hc=a.div`
    display: flex;
    flex-direction: column;

    ${mn.tablet} {
        flex-direction: row;
        flex-wrap: wrap;
        gap: 1rem;
    }
`,mc=a.label`
    display: flex;
    align-items: flex-start;
    ${e=>!e.$visible&&"display: none;"}

    position: relative;
    width: 100%;
    min-height: 1.5rem;
    padding: 0.5rem;

    cursor: pointer;
    ${Bn("BodySmall","regular")}
    ${e=>e.$selected&&l`
            color: ${cn.Primary};
        `}
`,fc=a.input`
    appearance: none;
`,gc=a(Id)`
    height: 1.5rem;
    width: 1.5rem;
    flex-shrink: 0;

    ${fc}:focus-visible + & {
        outline: 2px solid ${cn.Primary};
        outline-offset: -2px;
        border-radius: 4px;
    }
`,pc=a((({type:n="checkbox",indicator:i,checked:o,styleType:a="default",children:s,childrenMaxLines:l,subLabel:d,disabled:c,error:m,name:f,id:g,className:p,compositeSection:y,removable:v,onRemove:x,"data-testid":w,onChange:$,useContentWidth:S})=>{const{collapsible:D=!0,errors:E,children:C,initialExpanded:B}=y||{},[O,k]=h(o),[_,A]=h(B),z=F((()=>{const e=Array.isArray(E)&&(null==E?void 0:E.length)>0,t=!Array.isArray(E)&&!!E;return e||t}),[E]),[j]=h(Ul.generate()),M=g?`${g}`:`tg-${j}`,P=u();b((()=>{k(o)}),[o]),b((()=>{O&&A(null==B||B)}),[O]);const T=e=>{if(!c){if($)return void $(e);switch(n){case"checkbox":k((e=>!e));break;case"radio":case"yes":case"no":O||k(!0)}}},H=()=>{c||A(!_)},I=()=>{c||!x||x()},R=()=>{let e;switch(n){case"yes":e="tick";break;case"no":e="cross";break;case"checkbox":case"radio":e=n}return t(cc,{type:e,active:O,disabled:c,$selected:O,$disabled:c})},L=()=>{if(!d)return null;let e;return e="function"==typeof d?d():d,t(ec,Object.assign({"data-id":"toggle-sublabel"},{children:e}))},W=()=>{const r=!_&&!z;return D&&e(ic,Object.assign({$paddingTopRequired:r,disabled:c,onClick:H,"data-testid":_?"collapse-button":"expand-button"},{children:[_?"Show less":"Show more",t(_?Z:Y,{"aria-hidden":!0})]}))},N=n=>e(r,{children:[t(lc,Object.assign({weight:"semibold",$disabled:c},{children:"Error"})),t(dc,Object.assign({$disabled:c},{children:null==n?void 0:n.map(((e,r)=>t("li",Object.assign({id:`${M}-error-list-item-${r}`},{children:t(lc,Object.assign({weight:"semibold",$disabled:c},{children:e}))}),r)))}))]});return e(Xd,Object.assign({$selected:O,$disabled:c,className:p,$styleType:a,$error:m,$indicator:i,$useContentWidth:S,id:g,"data-testid":w},{children:[e(tc,Object.assign({id:`${M}-header-container`,$disabled:c,$error:m,$selected:O,$indicator:i,$styleType:a},{children:[e(rc,Object.assign({$addPadding:v},{children:[t(Zd,{ref:P,name:f,id:`${M}-input`,type:"checkbox"===n?"checkbox":"radio","data-testid":"toggle-input",disabled:c,onChange:T,checked:O}),i&&R(),e(Gd,Object.assign({$selected:O,$disabled:c},{children:[t(Kd,Object.assign({htmlFor:`${M}-input`,"data-testid":`${M}-toggle-label`,$maxLines:l},{children:s})),d&&L()]}))]})),v&&t(nc,Object.assign({type:"button",$disabled:c,onClick:I,id:`${M}-remove-button`},{children:"Remove"}))]})),C&&e("div",{children:[(!D||_)&&t(sc,Object.assign({"data-id":"toggle-composite-children",$isFinalItem:!D,$disabled:c},{children:C})),D&&!_&&z&&t(oc,Object.assign({$disabled:c,onClick:H,id:`${M}-error-alert`},{children:t(ac,Object.assign({type:c?"description":"error",className:p,showIcon:!0},{children:Array.isArray(E)?N(E):E}))})),W()]})]}))}))`
    ${e=>!e.$visible&&"visibility: hidden;"}
`,bc=a(nn.Small)`
    height: fit-content;
    padding: 0;
    margin: 1rem 0 0.5rem 0.75rem;

    ${mn.tablet} {
        margin: 0 0 1rem 0;
    }
`,yc=a.div`
    background-color: ${cn.Neutral[8]};
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
`,vc=Object.assign((n=>{var{toggleFilterButtonLabel:a="Filters",toggleFilterButtonStyle:s="light",headerTitle:l="Filters",clearButtonDisabled:d=!1,onClear:c,onDismiss:m,onDone:f,children:g}=n,p=ne(n,["toggleFilterButtonLabel","toggleFilterButtonStyle","headerTitle","clearButtonDisabled","onClear","onDismiss","onDone","children"]);const[y,v]=h(!1),x=u(null),w=u(null),F=El.useMediaQuery({maxWidth:un.tablet});b((()=>{F||S()}),[F]);const $=()=>{v(!0)},S=()=>{v(!1),m&&m()},D=()=>{v(!1),f&&f()},E=()=>{c&&c()},C=e=>"function"==typeof g?g(e):g,B=r=>e(Rn,{children:["mobile"===r&&t(Wn,Object.assign({onClick:S,focusOutline:"browser",focusHighlight:!1,"aria-label":"Dismiss"},{children:t(o,{})})),t(Ln,Object.assign({weight:"semibold"},{children:l})),t(Nn,Object.assign({styleType:"link",type:"button",onClick:E,disabled:d},{children:"Clear"}))]});return t("div",Object.assign({},p,{children:t(Qn.Provider,F?Object.assign({value:{mode:"mobile",rootNode:x}},{children:e(r,{children:[t(Vn,Object.assign({"data-testid":"filter-show-button",styleType:s,onClick:$,type:"button",icon:t(i,{})},{children:a})),t(ed,Object.assign({show:y,disableTransition:!0},{children:t(Hn,Object.assign({"data-id":"filter-mobile","data-testid":"filter-mobile"},{children:e(Tn,Object.assign({ref:x},{children:[B("mobile"),t(In,{children:C("mobile")}),t(Yn,{children:t(qn,Object.assign({onClick:D,type:"button"},{children:"Done"}))})]}))}))}))]})}):Object.assign({value:{mode:"default",rootNode:w}},{children:e(Pn,Object.assign({"data-id":"filter-desktop","data-testid":"filter-desktop",ref:w},{children:[B("default"),C("default")]}))}))}))}),{Item:Td,Page:({onDismiss:r,onDone:n,children:i})=>e(yc,{children:[t(Wn,Object.assign({onClick:r,focusOutline:"browser",focusHighlight:!1,"aria-label":"Dismiss"},{children:t(re,{})})),t(In,{children:i}),t(Yn,{children:t(qn,Object.assign({onClick:n,type:"button"},{children:"Done"}))})]}),Checkbox:n=>{var{selectedOptions:i,options:o,onSelect:a,labelExtractor:s,valueExtractor:l,useToggleContentWidth:d}=n,c=ne(n,["selectedOptions","options","onSelect","labelExtractor","valueExtractor","useToggleContentWidth"]);const{mode:m}=w(Qn),[f,g]=h(i||[]),[p,y]=h(),[v,F]=h(o.length),$=u(),S=u(),D=e=>()=>{const t=[...f],r=f.findIndex((t=>B(t)===B(e)));r>=0?t.splice(r,1):t.push(e),g(t),null==a||a(t)},E=()=>{const e=f.length?[]:o;g(e),null==a||a(e)},C=e=>{var t;return s?s(e):null!==(t=e.label)&&void 0!==t?t:e.toString()},B=e=>{var t;return l?l(e):null!==(t=e.value)&&void 0!==t?t:e.toString()},O=x((()=>{if(!$.current)return void y(void 0);const e=Array.from($.current.children);let t=0,r=0,n=-1;for(let i=0;i<e.length;i++){const o=e[i].offsetTop;if(o>n&&(r++,n=o,r>2))break;t=i}F(t),y(r>2?n-8:void 0)}),[]);b((()=>{i!==f&&g(i||[])}),[i]),b((()=>{"default"===m?(()=>{const e=S.current?S.current.offsetTop+S.current.clientHeight:void 0;y(e)})():O()}),[o]),Ni({handleWidth:"mobile"===m,handleHeight:!1,skipOnMount:!0,refreshMode:"throttle",targetRef:$,onResize:O});return t(uc,Object.assign({minimisable:o.length>5,minimisedHeight:p},c,{children:(n,{minimised:i})=>e(r,{children:[o.length<3?null:t(bc,Object.assign({styleType:"link",type:"button",onClick:E},{children:f.length?"Clear all":"Select all"})),t(hc,Object.assign({role:"group","aria-label":c.title,ref:$},{children:o.map(((r,o)=>"default"===n?((r,n,i)=>{const o=C(r),a=B(r),s=!!f.find((e=>B(e)===a));return e(mc,Object.assign({$visible:!i||n<5,$selected:s,ref:4===n?S:void 0},{children:[t(fc,{type:"checkbox",checked:s,onChange:D(r)}),t(gc,{type:"checkbox",active:s}),o]}),a)})(r,o,i):((e,r,n)=>{const i=C(e),o=B(e),a=!!f.find((e=>B(e)===o));return t(pc,Object.assign({type:"checkbox",checked:a,$visible:!n||p&&r<=v,onChange:D(e),useContentWidth:d},{children:i}),o)})(r,o,i)))}))]})}))}});export{vc as Filter};
//# sourceMappingURL=index.js.map
