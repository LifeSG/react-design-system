import{jsxs as e,jsx as r,Fragment as t}from"react/jsx-runtime";import n,{useRef as i,useImperativeHandle as s,useState as a,useEffect as o}from"react";import l,{keyframes as d,css as c}from"styled-components";import{CrossIcon as u}from"@lifesg/react-icons/cross";import"@lifesg/react-icons/i-circle-fill";import"@floating-ui/react";import"react-dom";import{ExternalIcon as h}from"@lifesg/react-icons/external";function g(e,r){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(n=Object.getOwnPropertySymbols(e);i<n.length;i++)r.indexOf(n[i])<0&&Object.prototype.propertyIsEnumerable.call(e,n[i])&&(t[n[i]]=e[n[i]])}return t}"function"==typeof SuppressedError&&SuppressedError;const b=l.div`
    display: inline-block;
    position: relative;
    width: ${({$size:e})=>e?`${e}px`:"1em"};
    height: ${({$size:e})=>e?`${e}px`:"1em"};
    color: ${e=>e.$color||"currentColor"};
`,m=d`
	0% {
	  transform: rotate(0deg);
	}
	100% {
	  transform: rotate(360deg);
	}
`,y=l.div`
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
    animation: ${m} 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
`,f=l(y)`
    animation-delay: -0.45s;
`,p=l(y)`
    animation-delay: -0.3s;
`,x=l(y)`
    animation-delay: -0.15s;
`;var v="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};function F(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var w=Array.isArray,$="object"==typeof v&&v&&v.Object===Object&&v,D="object"==typeof self&&self&&self.Object===Object&&self,C=$||D||Function("return this")(),E=C.Symbol,B=E,A=Object.prototype,z=A.hasOwnProperty,S=A.toString,M=B?B.toStringTag:void 0;var k=function(e){var r=z.call(e,M),t=e[M];try{e[M]=void 0;var n=!0}catch(e){}var i=S.call(e);return n&&(r?e[M]=t:delete e[M]),i},O=Object.prototype.toString;var _=k,Y=function(e){return O.call(e)},T=E?E.toStringTag:void 0;var L=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":T&&T in Object(e)?_(e):Y(e)};var j=L,I=function(e){return null!=e&&"object"==typeof e};var H=function(e){return"symbol"==typeof e||I(e)&&"[object Symbol]"==j(e)},W=w,R=H,N=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,P=/^\w*$/;var V=function(e,r){if(W(e))return!1;var t=typeof e;return!("number"!=t&&"symbol"!=t&&"boolean"!=t&&null!=e&&!R(e))||(P.test(e)||!N.test(e)||null!=r&&e in Object(r))};var Z=function(e){var r=typeof e;return null!=e&&("object"==r||"function"==r)},X=L,U=Z;var J,G=function(e){if(!U(e))return!1;var r=X(e);return"[object Function]"==r||"[object GeneratorFunction]"==r||"[object AsyncFunction]"==r||"[object Proxy]"==r},q=C["__core-js_shared__"],K=(J=/[^.]+$/.exec(q&&q.keys&&q.keys.IE_PROTO||""))?"Symbol(src)_1."+J:"";var Q=function(e){return!!K&&K in e},ee=Function.prototype.toString;var re=G,te=Q,ne=Z,ie=function(e){if(null!=e){try{return ee.call(e)}catch(e){}try{return e+""}catch(e){}}return""},se=/^\[object .+?Constructor\]$/,ae=Function.prototype,oe=Object.prototype,le=ae.toString,de=oe.hasOwnProperty,ce=RegExp("^"+le.call(de).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");var ue=function(e,r){return null==e?void 0:e[r]},he=function(e){return!(!ne(e)||te(e))&&(re(e)?ce:se).test(ie(e))},ge=ue;var be=function(e,r){var t=ge(e,r);return he(t)?t:void 0},me=be(Object,"create"),ye=me;var fe=function(){this.__data__=ye?ye(null):{},this.size=0};var pe=function(e){var r=this.has(e)&&delete this.__data__[e];return this.size-=r?1:0,r},xe=me,ve=Object.prototype.hasOwnProperty;var Fe=function(e){var r=this.__data__;if(xe){var t=r[e];return"__lodash_hash_undefined__"===t?void 0:t}return ve.call(r,e)?r[e]:void 0},we=me,$e=Object.prototype.hasOwnProperty;var De=function(e){var r=this.__data__;return we?void 0!==r[e]:$e.call(r,e)},Ce=me;var Ee=function(e,r){var t=this.__data__;return this.size+=this.has(e)?0:1,t[e]=Ce&&void 0===r?"__lodash_hash_undefined__":r,this},Be=fe,Ae=pe,ze=Fe,Se=De,Me=Ee;function ke(e){var r=-1,t=null==e?0:e.length;for(this.clear();++r<t;){var n=e[r];this.set(n[0],n[1])}}ke.prototype.clear=Be,ke.prototype.delete=Ae,ke.prototype.get=ze,ke.prototype.has=Se,ke.prototype.set=Me;var Oe=ke;var _e=function(){this.__data__=[],this.size=0};var Ye=function(e,r){return e===r||e!=e&&r!=r};var Te=function(e,r){for(var t=e.length;t--;)if(Ye(e[t][0],r))return t;return-1},Le=Te,je=Array.prototype.splice;var Ie=function(e){var r=this.__data__,t=Le(r,e);return!(t<0)&&(t==r.length-1?r.pop():je.call(r,t,1),--this.size,!0)},He=Te;var We=function(e){var r=this.__data__,t=He(r,e);return t<0?void 0:r[t][1]},Re=Te;var Ne=function(e){return Re(this.__data__,e)>-1},Pe=Te;var Ve=function(e,r){var t=this.__data__,n=Pe(t,e);return n<0?(++this.size,t.push([e,r])):t[n][1]=r,this},Ze=_e,Xe=Ie,Ue=We,Je=Ne,Ge=Ve;function qe(e){var r=-1,t=null==e?0:e.length;for(this.clear();++r<t;){var n=e[r];this.set(n[0],n[1])}}qe.prototype.clear=Ze,qe.prototype.delete=Xe,qe.prototype.get=Ue,qe.prototype.has=Je,qe.prototype.set=Ge;var Ke=qe,Qe=be(C,"Map"),er=Oe,rr=Ke,tr=Qe;var nr=function(e){var r=typeof e;return"string"==r||"number"==r||"symbol"==r||"boolean"==r?"__proto__"!==e:null===e};var ir=function(e,r){var t=e.__data__;return nr(r)?t["string"==typeof r?"string":"hash"]:t.map},sr=ir;var ar=function(e){var r=sr(this,e).delete(e);return this.size-=r?1:0,r},or=ir;var lr=function(e){return or(this,e).get(e)},dr=ir;var cr=function(e){return dr(this,e).has(e)},ur=ir;var hr=function(e,r){var t=ur(this,e),n=t.size;return t.set(e,r),this.size+=t.size==n?0:1,this},gr=function(){this.size=0,this.__data__={hash:new er,map:new(tr||rr),string:new er}},br=ar,mr=lr,yr=cr,fr=hr;function pr(e){var r=-1,t=null==e?0:e.length;for(this.clear();++r<t;){var n=e[r];this.set(n[0],n[1])}}pr.prototype.clear=gr,pr.prototype.delete=br,pr.prototype.get=mr,pr.prototype.has=yr,pr.prototype.set=fr;var xr=pr;function vr(e,r){if("function"!=typeof e||null!=r&&"function"!=typeof r)throw new TypeError("Expected a function");var t=function(){var n=arguments,i=r?r.apply(this,n):n[0],s=t.cache;if(s.has(i))return s.get(i);var a=e.apply(this,n);return t.cache=s.set(i,a)||s,a};return t.cache=new(vr.Cache||xr),t}vr.Cache=xr;var Fr=vr;var wr=function(e){var r=Fr(e,(function(e){return 500===t.size&&t.clear(),e})),t=r.cache;return r},$r=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,Dr=/\\(\\)?/g,Cr=wr((function(e){var r=[];return 46===e.charCodeAt(0)&&r.push(""),e.replace($r,(function(e,t,n,i){r.push(n?i.replace(Dr,"$1"):t||e)})),r}));var Er=function(e,r){for(var t=-1,n=null==e?0:e.length,i=Array(n);++t<n;)i[t]=r(e[t],t,e);return i},Br=w,Ar=H,zr=E?E.prototype:void 0,Sr=zr?zr.toString:void 0;var Mr=function e(r){if("string"==typeof r)return r;if(Br(r))return Er(r,e)+"";if(Ar(r))return Sr?Sr.call(r):"";var t=r+"";return"0"==t&&1/r==-1/0?"-0":t},kr=Mr;var Or=w,_r=V,Yr=Cr,Tr=function(e){return null==e?"":kr(e)};var Lr=H;var jr=function(e,r){return Or(e)?e:_r(e,r)?[e]:Yr(Tr(e))},Ir=function(e){if("string"==typeof e||Lr(e))return e;var r=e+"";return"0"==r&&1/e==-1/0?"-0":r};var Hr=function(e,r){for(var t=0,n=(r=jr(r,e)).length;null!=e&&t<n;)e=e[Ir(r[t++])];return t&&t==n?e:void 0};var Wr=F((function(e,r,t){var n=null==e?void 0:Hr(e,r);return void 0===n?t:n}));const Rr=(e,r,t)=>Wr(t,r)||Wr(e,r),Nr=(e,r)=>{const t=r||e.defaultValue;return Wr(e.collections,t)},Pr={collections:{lifesg:{"duration-150":"150ms","duration-250":"250ms","duration-350":"350ms","duration-500":"500ms","duration-800":"800ms","duration-1000":"1000ms","ease-default":"cubic-bezier(0.45, 0.05, 0.55, 0.95)","ease-standard":"cubic-bezier(0.86, 0, 0.07, 1)","ease-entrance":"cubic-bezier(0.18, 0.13, 0, 1)","ease-exit":"cubic-bezier(1, 0, 0.8, 0.85)"}},defaultValue:"lifesg"},Vr=e=>r=>{var t;const n=r.theme,i=Nr(Pr,null==n?void 0:n.motionScheme);return(null===(t=null==n?void 0:n.overrides)||void 0===t?void 0:t.motion)?Rr(i,e,n.overrides.motion):i[e]},Zr={"duration-150":Vr("duration-150"),"duration-250":Vr("duration-250"),"duration-350":Vr("duration-350"),"duration-500":Vr("duration-500"),"duration-800":Vr("duration-800"),"duration-1000":Vr("duration-1000"),"ease-default":Vr("ease-default"),"ease-standard":Vr("ease-standard"),"ease-entrance":Vr("ease-entrance"),"ease-exit":Vr("ease-exit")},Xr={collections:{lifesg:{"brand-10":"#2C0C0B","brand-20":"#4C1513","brand-30":"#6C1D1B","brand-40":"#922825","brand-50":"#BF3431","brand-60":"#F15D5A","brand-70":"#F69491","brand-80":"#FABAB7","brand-90":"#FCD7D2","brand-95":"#FFEBE7","brand-100":"#FFF6F4","primary-10":"#001731","primary-20":"#002752","primary-30":"#003874","primary-40":"#004D9F","primary-50":"#1768BE","primary-60":"#3C91EC","primary-70":"#6CB4FF","primary-80":"#A5CDFF","primary-90":"#CFE1FE","primary-95":"#E8F0FE","primary-100":"#F7F9FF","secondary-10":"#131529","secondary-20":"#222547","secondary-30":"#2F3565","secondary-40":"#42498B","secondary-50":"#5B62A7","secondary-60":"#858CBD","secondary-70":"#A8ADCF","secondary-80":"#C6C9E0","secondary-90":"#DDDFEC","secondary-95":"#EDEEF5","secondary-100":"#F8F8FB","neutral-10":"#161616","neutral-20":"#282828","neutral-30":"#393939","neutral-40":"#4E4E4E","neutral-50":"#686868","neutral-60":"#8E8E8E","neutral-70":"#AFAFB0","neutral-80":"#C7CACA","neutral-90":"#DDE1E2","neutral-95":"#EDEFEF","neutral-100":"#F9F9F9","success-10":"#081A0F","success-20":"#0E2D1B","success-30":"#154126","success-40":"#1C5A34","success-50":"#257645","success-60":"#44A068","success-70":"#64C189","success-80":"#80DCA5","success-90":"#B4ECCB","success-95":"#D5F6E2","success-100":"#EFFCF4","warning-10":"#221302","warning-20":"#3B2204","warning-30":"#543106","warning-40":"#744408","warning-50":"#98590C","warning-60":"#D07A13","warning-70":"#E4A244","warning-80":"#F5C26C","warning-90":"#FADBA6","warning-95":"#FCECD4","warning-100":"#FDF7F0","error-10":"#330505","error-20":"#550808","error-30":"#750C0C","error-40":"#9E130F","error-50":"#CB2213","error-60":"#DE6C6C","error-70":"#E89B9B","error-80":"#EFBEBE","error-90":"#F5D9D9","error-95":"#F9ECEC","error-100":"#FCF7F7","info-10":"#021824","info-20":"#032B3F","info-30":"#053D59","info-40":"#065478","info-50":"#176E9B","info-60":"#5296BE","info-70":"#82B5DA","info-80":"#ACCFE7","info-90":"#CCE3F1","info-95":"#E3F1F8","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000","primary-inverse":"#FEAB10"},bookingsg:{"brand-10":"#2C0C0B","brand-20":"#4C1513","brand-30":"#6C1D1B","brand-40":"#922825","brand-50":"#BF3431","brand-60":"#F15D5A","brand-70":"#F69491","brand-80":"#FABAB7","brand-90":"#FCD7D2","brand-95":"#FFEBE7","brand-100":"#FFF6F4","primary-10":"#1A122C","primary-20":"#2F1F4D","primary-30":"#422D6E","primary-40":"#5B3D97","primary-50":"#7654BC","primary-60":"#9A82CD","primary-70":"#B7A7D8","primary-80":"#CFC5E5","primary-90":"#E3DDF0","primary-95":"#F0EDF7","primary-100":"#F9F8FC","secondary-10":"#0E1723","secondary-20":"#18293D","secondary-30":"#233A57","secondary-40":"#305078","secondary-50":"#4B6A8F","secondary-60":"#7B91A9","secondary-70":"#A1B1C3","secondary-80":"#C1CBD7","secondary-90":"#DBE1E8","secondary-95":"#EBEFF2","secondary-100":"#F7F8FA","neutral-10":"#161616","neutral-20":"#282828","neutral-30":"#393939","neutral-40":"#4E4E4E","neutral-50":"#686868","neutral-60":"#8E8E8E","neutral-70":"#AFAFB0","neutral-80":"#C7CACA","neutral-90":"#DDE1E2","neutral-95":"#EDEFEF","neutral-100":"#F9F9F9","success-10":"#081A0F","success-20":"#0E2D1B","success-30":"#154126","success-40":"#1C5A34","success-50":"#257645","success-60":"#44A068","success-70":"#64C189","success-80":"#80DCA5","success-90":"#B4ECCB","success-95":"#D5F6E2","success-100":"#EFFCF4","warning-10":"#221302","warning-20":"#3B2204","warning-30":"#543106","warning-40":"#744408","warning-50":"#98590C","warning-60":"#D07A13","warning-70":"#E4A244","warning-80":"#F5C26C","warning-90":"#FADBA6","warning-95":"#FCECD4","warning-100":"#FDF7F0","error-10":"#330505","error-20":"#550808","error-30":"#750C0C","error-40":"#9E130F","error-50":"#CB2213","error-60":"#DE6C6C","error-70":"#E89B9B","error-80":"#EFBEBE","error-90":"#F5D9D9","error-95":"#F9ECEC","error-100":"#FCF7F7","info-10":"#021824","info-20":"#032B3F","info-30":"#053D59","info-40":"#065478","info-50":"#176E9B","info-60":"#5296BE","info-70":"#82B5DA","info-80":"#ACCFE7","info-90":"#CCE3F1","info-95":"#E3F1F8","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000","primary-inverse":"#FEAB10"},rbs:{"brand-10":"#0E123A","brand-20":"#191E65","brand-30":"#232B90","brand-40":"#303BC5","brand-50":"#494CFF","brand-60":"#AD6EFF","brand-70":"#AEA4FF","brand-80":"#C5C4FF","brand-90":"#DDDCFF","brand-95":"#EDECFF","brand-100":"#F8F8FF","primary-10":"#10152B","primary-20":"#1C254B","primary-30":"#28356C","primary-40":"#38489A","primary-50":"#4D5AD7","primary-60":"#7487F2","primary-70":"#9AAAFC","primary-80":"#BDC7FD","primary-90":"#DADFFB","primary-95":"#ECEEFE","primary-100":"#F7F8FF","secondary-10":"#19151D","secondary-20":"#2B2533","secondary-30":"#3E3649","secondary-40":"#564A64","secondary-50":"#6F637D","secondary-60":"#948B9F","secondary-70":"#B3ACBB","secondary-80":"#CCC8D2","secondary-90":"#E1DEE4","secondary-95":"#EFEEF1","secondary-100":"#F9F8F9","neutral-10":"#161616","neutral-20":"#282828","neutral-30":"#393939","neutral-40":"#4E4E4E","neutral-50":"#686868","neutral-60":"#8E8E8E","neutral-70":"#AFAFB0","neutral-80":"#C7CACA","neutral-90":"#DDE1E2","neutral-95":"#EDEFEF","neutral-100":"#F9F9F9","success-10":"#081A0F","success-20":"#0E2D1B","success-30":"#154126","success-40":"#1C5A34","success-50":"#257645","success-60":"#44A068","success-70":"#64C189","success-80":"#80DCA5","success-90":"#B4ECCB","success-95":"#D5F6E2","success-100":"#EFFCF4","warning-10":"#221302","warning-20":"#3B2204","warning-30":"#543106","warning-40":"#744408","warning-50":"#98590C","warning-60":"#D07A13","warning-70":"#E4A244","warning-80":"#F5C26C","warning-90":"#FADBA6","warning-95":"#FCECD4","warning-100":"#FDF7F0","error-10":"#330505","error-20":"#550808","error-30":"#750C0C","error-40":"#9E130F","error-50":"#CB2213","error-60":"#DE6C6C","error-70":"#E89B9B","error-80":"#EFBEBE","error-90":"#F5D9D9","error-95":"#F9ECEC","error-100":"#FCF7F7","info-10":"#021824","info-20":"#032B3F","info-30":"#053D59","info-40":"#065478","info-50":"#176E9B","info-60":"#5296BE","info-70":"#82B5DA","info-80":"#ACCFE7","info-90":"#CCE3F1","info-95":"#E3F1F8","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000","primary-inverse":"#FEAB10"},mylegacy:{"brand-10":"#2C0C0B","brand-20":"#4C1513","brand-30":"#6C1D1B","brand-40":"#922825","brand-50":"#BF3431","brand-60":"#F15D5A","brand-70":"#F69491","brand-80":"#FABAB7","brand-90":"#FCD7D2","brand-95":"#FFEBE7","brand-100":"#FFF6F4","primary-10":"#0011924","primary-20":"#032B40","primary-30":"#043D5A","primary-40":"#05547B","primary-50":"#096EA1","primary-60":"#2098D3","primary-70":"#5CB9E8","primary-80":"#8BD3F6","primary-90":"#BEE6FA","primary-95":"#E2F2FA","primary-100":"#F4FAFC","secondary-10":"#131529","secondary-20":"#222547","secondary-30":"#2F3565","secondary-40":"#42498B","secondary-50":"#5B62A7","secondary-60":"#858CBD","secondary-70":"#A8ADCF","secondary-80":"#C6C9E0","secondary-90":"#DDDFEC","secondary-95":"#EDEEF5","secondary-100":"#F8F8FB","neutral-10":"#161616","neutral-20":"#282828","neutral-30":"#393939","neutral-40":"#4E4E4E","neutral-50":"#686868","neutral-60":"#8E8E8E","neutral-70":"#AFAFB0","neutral-80":"#C7CACA","neutral-90":"#DDE1E2","neutral-95":"#EDEFEF","neutral-100":"#F9F9F9","success-10":"#081A0F","success-20":"#0E2D1B","success-30":"#154126","success-40":"#1C5A34","success-50":"#257645","success-60":"#44A068","success-70":"#64C189","success-80":"#80DCA5","success-90":"#B4ECCB","success-95":"#D5F6E2","success-100":"#EFFCF4","warning-10":"#221302","warning-20":"#3B2204","warning-30":"#543106","warning-40":"#744408","warning-50":"#98590C","warning-60":"#D07A13","warning-70":"#E4A244","warning-80":"#F5C26C","warning-90":"#FADBA6","warning-95":"#FCECD4","warning-100":"#FDF7F0","error-10":"#330505","error-20":"#550808","error-30":"#750C0C","error-40":"#9E130F","error-50":"#CB2213","error-60":"#DE6C6C","error-70":"#E89B9B","error-80":"#EFBEBE","error-90":"#F5D9D9","error-95":"#F9ECEC","error-100":"#FCF7F7","info-10":"#021824","info-20":"#032B3F","info-30":"#053D59","info-40":"#065478","info-50":"#176E9B","info-60":"#5296BE","info-70":"#82B5DA","info-80":"#ACCFE7","info-90":"#CCE3F1","info-95":"#E3F1F8","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000","primary-inverse":"#FEAB10"},ccube:{"brand-10":"#1F1221","brand-20":"#371F3B","brand-30":"#4E2C53","brand-40":"#6B3E73","brand-50":"#8D5197","brand-60":"#FF3399","brand-70":"#FF88C4","brand-80":"#FFB3D9","brand-90":"#FFD4E9","brand-95":"#FFE8F3","brand-100":"#FFD6EB","primary-10":"#1F1221","primary-20":"#371F3B","primary-30":"#4E2C53","primary-40":"#6B3E73","primary-50":"#8D5197","primary-60":"#B07DB7","primary-70":"#C7A3CC","primary-80":"#D9C2DD","primary-90":"#E9DBEB","primary-95":"#F3ECF4","primary-100":"#FAF7FA","secondary-10":"#2D091B","secondary-20":"#4D0F2E","secondary-30":"#6B1540","secondary-40":"#931D58","secondary-50":"#C02673","secondary-60":"#FF409F","secondary-70":"#FF88C4","secondary-80":"#FFB3D9","secondary-90":"#FFD4E9","secondary-95":"#FFE8F3","secondary-100":"#FFF8FC","neutral-10":"#161616","neutral-20":"#282828","neutral-30":"#393939","neutral-40":"#4E4E4E","neutral-50":"#686868","neutral-60":"#8E8E8E","neutral-70":"#AFAFB0","neutral-80":"#C7CACA","neutral-90":"#DDE1E2","neutral-95":"#EDEFEF","neutral-100":"#F9F9F9","success-10":"#081A0F","success-20":"#0E2D1B","success-30":"#154126","success-40":"#1C5A34","success-50":"#257645","success-60":"#44A068","success-70":"#64C189","success-80":"#80DCA5","success-90":"#B4ECCB","success-95":"#D5F6E2","success-100":"#EFFCF4","warning-10":"#221302","warning-20":"#3B2204","warning-30":"#543106","warning-40":"#744408","warning-50":"#98590C","warning-60":"#D07A13","warning-70":"#E4A244","warning-80":"#F5C26C","warning-90":"#FADBA6","warning-95":"#FCECD4","warning-100":"#FDF7F0","error-10":"#330505","error-20":"#550808","error-30":"#750C0C","error-40":"#9E130F","error-50":"#CB2213","error-60":"#DE6C6C","error-70":"#E89B9B","error-80":"#EFBEBE","error-90":"#F5D9D9","error-95":"#F9ECEC","error-100":"#FCF7F7","info-10":"#021824","info-20":"#032B3F","info-30":"#053D59","info-40":"#065478","info-50":"#176E9B","info-60":"#5296BE","info-70":"#82B5DA","info-80":"#ACCFE7","info-90":"#CCE3F1","info-95":"#E3F1F8","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000","primary-inverse":"#FEAB10"}},defaultValue:"lifesg"},Ur=e=>r=>{var t;const n=r.theme,i=Nr(Xr,null==n?void 0:n.colourScheme);return(null===(t=null==n?void 0:n.overrides)||void 0===t?void 0:t.primitiveColour)?Rr(i,e,n.overrides.primitiveColour):i[e]},Jr={"brand-10":Ur("brand-10"),"brand-20":Ur("brand-20"),"brand-30":Ur("brand-30"),"brand-40":Ur("brand-40"),"brand-50":Ur("brand-50"),"brand-60":Ur("brand-60"),"brand-70":Ur("brand-70"),"brand-80":Ur("brand-80"),"brand-90":Ur("brand-90"),"brand-95":Ur("brand-95"),"brand-100":Ur("brand-100"),"primary-10":Ur("primary-10"),"primary-20":Ur("primary-20"),"primary-30":Ur("primary-30"),"primary-40":Ur("primary-40"),"primary-50":Ur("primary-50"),"primary-60":Ur("primary-60"),"primary-70":Ur("primary-70"),"primary-80":Ur("primary-80"),"primary-90":Ur("primary-90"),"primary-95":Ur("primary-95"),"primary-100":Ur("primary-100"),"secondary-10":Ur("secondary-10"),"secondary-20":Ur("secondary-20"),"secondary-30":Ur("secondary-30"),"secondary-40":Ur("secondary-40"),"secondary-50":Ur("secondary-50"),"secondary-60":Ur("secondary-60"),"secondary-70":Ur("secondary-70"),"secondary-80":Ur("secondary-80"),"secondary-90":Ur("secondary-90"),"secondary-95":Ur("secondary-95"),"secondary-100":Ur("secondary-100"),"neutral-10":Ur("neutral-10"),"neutral-20":Ur("neutral-20"),"neutral-30":Ur("neutral-30"),"neutral-40":Ur("neutral-40"),"neutral-50":Ur("neutral-50"),"neutral-60":Ur("neutral-60"),"neutral-70":Ur("neutral-70"),"neutral-80":Ur("neutral-80"),"neutral-90":Ur("neutral-90"),"neutral-95":Ur("neutral-95"),"neutral-100":Ur("neutral-100"),"success-10":Ur("success-10"),"success-20":Ur("success-20"),"success-30":Ur("success-30"),"success-40":Ur("success-40"),"success-50":Ur("success-50"),"success-60":Ur("success-60"),"success-70":Ur("success-70"),"success-80":Ur("success-80"),"success-90":Ur("success-90"),"success-95":Ur("success-95"),"success-100":Ur("success-100"),"warning-10":Ur("warning-10"),"warning-20":Ur("warning-20"),"warning-30":Ur("warning-30"),"warning-40":Ur("warning-40"),"warning-50":Ur("warning-50"),"warning-60":Ur("warning-60"),"warning-70":Ur("warning-70"),"warning-80":Ur("warning-80"),"warning-90":Ur("warning-90"),"warning-95":Ur("warning-95"),"warning-100":Ur("warning-100"),"error-10":Ur("error-10"),"error-20":Ur("error-20"),"error-30":Ur("error-30"),"error-40":Ur("error-40"),"error-50":Ur("error-50"),"error-60":Ur("error-60"),"error-70":Ur("error-70"),"error-80":Ur("error-80"),"error-90":Ur("error-90"),"error-95":Ur("error-95"),"error-100":Ur("error-100"),"info-10":Ur("info-10"),"info-20":Ur("info-20"),"info-30":Ur("info-30"),"info-40":Ur("info-40"),"info-50":Ur("info-50"),"info-60":Ur("info-60"),"info-70":Ur("info-70"),"info-80":Ur("info-80"),"info-90":Ur("info-90"),"info-95":Ur("info-95"),"info-100":Ur("info-100"),white:Ur("white"),black:Ur("black"),"primary-inverse":Ur("primary-inverse")},Gr={text:Ur("neutral-20"),"text-subtle":Ur("neutral-30"),"text-subtler":Ur("neutral-50"),"text-subtlest":Ur("neutral-60"),"text-primary":Ur("primary-50"),"text-hover":Ur("primary-40"),"text-selected":Ur("primary-50"),"text-selected-hover":Ur("primary-40"),"text-disabled":Ur("neutral-50"),"text-disabled-subtle":Ur("neutral-60"),"text-disabled-subtlest":Ur("neutral-80"),"text-selected-disabled":Ur("neutral-20"),"text-success":Ur("success-40"),"text-warning":Ur("warning-40"),"text-error":Ur("error-40"),"text-info":Ur("info-40"),"text-inverse":Ur("white"),icon:Ur("neutral-50"),"icon-subtle":Ur("neutral-60"),"icon-strongest":Ur("neutral-20"),"icon-primary":Ur("primary-50"),"icon-primary-subtle":Ur("primary-60"),"icon-primary-subtlest":Ur("primary-70"),"icon-hover":Ur("primary-40"),"icon-selected":Ur("primary-50"),"icon-selected-hover":Ur("primary-40"),"icon-disabled":Ur("neutral-50"),"icon-disabled-subtle":Ur("neutral-60"),"icon-selected-disabled":Ur("neutral-60"),"icon-success":Ur("success-50"),"icon-warning":Ur("warning-60"),"icon-error":Ur("error-50"),"icon-error-strong":Ur("error-40"),"icon-info":Ur("info-50"),"icon-inverse":Ur("white"),"icon-primary-inverse":Ur("primary-inverse"),border:Ur("neutral-90"),"border-strong":Ur("neutral-70"),"border-stronger":Ur("neutral-50"),"border-primary":Ur("primary-50"),"border-primary-subtle":Ur("primary-60"),"border-hover":Ur("primary-90"),"border-hover-strong":Ur("primary-60"),"border-selected":Ur("primary-50"),"border-selected-subtle":Ur("primary-70"),"border-selected-subtlest":Ur("primary-90"),"border-selected-hover":Ur("primary-40"),"border-focus":Ur("primary-60"),"border-focus-strong":Ur("primary-50"),"border-disabled":Ur("neutral-90"),"border-selected-disabled":Ur("neutral-70"),"border-success":Ur("success-60"),"border-warning":Ur("warning-60"),"border-error":Ur("error-60"),"border-error-focus":Ur("error-60"),"border-error-focus-strong":Ur("error-40"),"border-error-strong":Ur("error-40"),"border-info":Ur("info-60"),bg:Ur("white"),"bg-strong":Ur("neutral-100"),"bg-stronger":Ur("neutral-95"),"bg-strongest":Ur("neutral-90"),"bg-hover":Ur("primary-95"),"bg-hover-strong":Ur("primary-90"),"bg-hover-subtle":Ur("primary-100"),"bg-hover-neutral":Ur("neutral-100"),"bg-hover-neutral-strong":Ur("neutral-90"),"bg-selected":Ur("primary-95"),"bg-selected-hover":Ur("primary-90"),"bg-selected-strong":Ur("primary-90"),"bg-selected-stronger":Ur("primary-70"),"bg-selected-strongest":Ur("primary-50"),"bg-selected-strongest-hover":Ur("primary-40"),"bg-disabled":Ur("neutral-95"),"bg-selected-disabled":Ur("neutral-95"),"bg-selected-stronger-disabled":Ur("neutral-70"),"bg-success":Ur("success-100"),"bg-success-hover":Ur("success-95"),"bg-success-strong":Ur("success-50"),"bg-success-strong-hover":Ur("success-40"),"bg-warning":Ur("warning-100"),"bg-warning-hover":Ur("warning-95"),"bg-warning-strong":Ur("warning-50"),"bg-warning-strong-hover":Ur("warning-40"),"bg-info":Ur("info-100"),"bg-info-hover":Ur("info-95"),"bg-info-strong":Ur("info-50"),"bg-info-strong-hover":Ur("info-40"),"bg-error":Ur("error-100"),"bg-error-hover":Ur("error-95"),"bg-error-strong":Ur("error-50"),"bg-error-strong-hover":Ur("error-40"),"bg-inverse":Ur("neutral-20"),"bg-inverse-subtle":Ur("neutral-30"),"bg-inverse-subtler":Ur("neutral-50"),"bg-inverse-subtlest":Ur("neutral-60"),"bg-inverse-hover":Ur("neutral-40"),"bg-primary":Ur("primary-50"),"bg-primary-subtle":Ur("primary-60"),"bg-primary-subtler":Ur("primary-95"),"bg-primary-subtlest":Ur("primary-100"),"bg-available":"#6DD0A1","bg-primary-hover":Ur("primary-40"),"bg-primary-subtlest-hover":Ur("primary-90"),"bg-primary-subtlest-selected":Ur("primary-90"),"overlay-strong":"rgba(40, 40, 40, 0.85)","overlay-subtle":"rgba(40, 40, 40, 0.20)",hyperlink:Ur("primary-50"),"hyperlink-hover":Ur("primary-40"),"hyperlink-visited":Ur("primary-40"),"hyperlink-inverse":Ur("primary-inverse"),"focus-ring":Ur("black"),"focus-ring-inverse":Ur("white")},qr={collections:{lifesg:Gr,bookingsg:Gr,rbs:Gr,mylegacy:Gr,ccube:Gr},defaultValue:"lifesg"},Kr=e=>r=>{var t;const n=r.theme,i=Nr(qr,null==n?void 0:n.colourScheme),s=(null===(t=null==n?void 0:n.overrides)||void 0===t?void 0:t.semanticColour)?Rr(i,e,n.overrides.semanticColour):i[e];return"function"==typeof s?s(r):s},Qr={text:Kr("text"),"text-subtle":Kr("text-subtle"),"text-subtler":Kr("text-subtler"),"text-subtlest":Kr("text-subtlest"),"text-primary":Kr("text-primary"),"text-hover":Kr("text-hover"),"text-selected":Kr("text-selected"),"text-selected-hover":Kr("text-selected-hover"),"text-disabled":Kr("text-disabled"),"text-disabled-subtle":Kr("text-disabled-subtle"),"text-disabled-subtlest":Kr("text-disabled-subtlest"),"text-selected-disabled":Kr("text-selected-disabled"),"text-success":Kr("text-success"),"text-warning":Kr("text-warning"),"text-error":Kr("text-error"),"text-info":Kr("text-info"),"text-inverse":Kr("text-inverse"),icon:Kr("icon"),"icon-subtle":Kr("icon-subtle"),"icon-strongest":Kr("icon-strongest"),"icon-primary":Kr("icon-primary"),"icon-primary-subtle":Kr("icon-primary-subtle"),"icon-primary-subtlest":Kr("icon-primary-subtlest"),"icon-hover":Kr("icon-hover"),"icon-selected":Kr("icon-selected"),"icon-selected-hover":Kr("icon-selected-hover"),"icon-disabled":Kr("icon-disabled"),"icon-disabled-subtle":Kr("icon-disabled-subtle"),"icon-selected-disabled":Kr("icon-selected-disabled"),"icon-success":Kr("icon-success"),"icon-warning":Kr("icon-warning"),"icon-error":Kr("icon-error"),"icon-error-strong":Kr("icon-error-strong"),"icon-info":Kr("icon-info"),"icon-inverse":Kr("icon-inverse"),"icon-primary-inverse":Kr("icon-primary-inverse"),border:Kr("border"),"border-strong":Kr("border-strong"),"border-stronger":Kr("border-stronger"),"border-primary":Kr("border-primary"),"border-primary-subtle":Kr("border-primary-subtle"),"border-hover":Kr("border-hover"),"border-hover-strong":Kr("border-hover-strong"),"border-selected":Kr("border-selected"),"border-selected-subtle":Kr("border-selected-subtle"),"border-selected-subtlest":Kr("border-selected-subtlest"),"border-selected-hover":Kr("border-selected-hover"),"border-focus":Kr("border-focus"),"border-focus-strong":Kr("border-focus-strong"),"border-disabled":Kr("border-disabled"),"border-selected-disabled":Kr("border-selected-disabled"),"border-success":Kr("border-success"),"border-warning":Kr("border-warning"),"border-error":Kr("border-error"),"border-error-focus":Kr("border-error-focus"),"border-error-focus-strong":Kr("border-error-focus-strong"),"border-error-strong":Kr("border-error-strong"),"border-info":Kr("border-info"),bg:Kr("bg"),"bg-strong":Kr("bg-strong"),"bg-stronger":Kr("bg-stronger"),"bg-strongest":Kr("bg-strongest"),"bg-hover":Kr("bg-hover"),"bg-hover-strong":Kr("bg-hover-strong"),"bg-hover-subtle":Kr("bg-hover-subtle"),"bg-hover-neutral":Kr("bg-hover-neutral"),"bg-hover-neutral-strong":Kr("bg-hover-neutral-strong"),"bg-selected":Kr("bg-selected"),"bg-selected-hover":Kr("bg-selected-hover"),"bg-selected-strong":Kr("bg-selected-strong"),"bg-selected-stronger":Kr("bg-selected-stronger"),"bg-selected-strongest":Kr("bg-selected-strongest"),"bg-selected-strongest-hover":Kr("bg-selected-strongest-hover"),"bg-disabled":Kr("bg-disabled"),"bg-selected-disabled":Kr("bg-selected-disabled"),"bg-selected-stronger-disabled":Kr("bg-selected-stronger-disabled"),"bg-success":Kr("bg-success"),"bg-success-hover":Kr("bg-success-hover"),"bg-success-strong":Kr("bg-success-strong"),"bg-success-strong-hover":Kr("bg-success-strong-hover"),"bg-warning":Kr("bg-warning"),"bg-warning-hover":Kr("bg-warning-hover"),"bg-warning-strong":Kr("bg-warning-strong"),"bg-warning-strong-hover":Kr("bg-warning-strong-hover"),"bg-info":Kr("bg-info"),"bg-info-hover":Kr("bg-info-hover"),"bg-info-strong":Kr("bg-info-strong"),"bg-info-strong-hover":Kr("bg-info-strong-hover"),"bg-error":Kr("bg-error"),"bg-error-hover":Kr("bg-error-hover"),"bg-error-strong":Kr("bg-error-strong"),"bg-error-strong-hover":Kr("bg-error-strong-hover"),"bg-inverse":Kr("bg-inverse"),"bg-inverse-subtle":Kr("bg-inverse-subtle"),"bg-inverse-subtler":Kr("bg-inverse-subtler"),"bg-inverse-subtlest":Kr("bg-inverse-subtlest"),"bg-inverse-hover":Kr("bg-inverse-hover"),"bg-primary":Kr("bg-primary"),"bg-primary-subtle":Kr("bg-primary-subtle"),"bg-primary-subtler":Kr("bg-primary-subtler"),"bg-primary-subtlest":Kr("bg-primary-subtlest"),"bg-available":Kr("bg-available"),"bg-primary-hover":Kr("bg-primary-hover"),"bg-primary-subtlest-hover":Kr("bg-primary-subtlest-hover"),"bg-primary-subtlest-selected":Kr("bg-primary-subtlest-selected"),"overlay-strong":Kr("overlay-strong"),"overlay-subtle":Kr("overlay-subtle"),hyperlink:Kr("hyperlink"),"hyperlink-hover":Kr("hyperlink-hover"),"hyperlink-visited":Kr("hyperlink-visited"),"hyperlink-inverse":Kr("hyperlink-inverse"),"focus-ring":Kr("focus-ring"),"focus-ring-inverse":Kr("focus-ring-inverse")},et={collections:{lifesg:{"width-010":1,"width-020":2,"width-040":4,solid:"solid","dashed-default":e=>r=>{var t,n,i;const{thickness:s,radius:a,colour:o}=e||{},l=null!==(t="function"==typeof s?s(r):s)&&void 0!==t?t:nt["width-010"](r),d=null!==(n="function"==typeof a?a(r):a)&&void 0!==n?n:0,u=null!==(i="function"==typeof o?o(r):o)&&void 0!==i?i:Qr.border(r),h=encodeURIComponent(`<svg width='100%' height='100%' xmlns='http://www.w3.org/2000/svg'><rect width='100%' height='100%' fill='none' rx='${d}' ry='${d}' stroke='${u}' stroke-width='${l}' stroke-dasharray='4, 8' stroke-dashoffset='0' stroke-linecap='square'/></svg>`);return c`
            background-image: url("data:image/svg+xml,${h}");
            border-radius: ${d};
        `}}},defaultValue:"lifesg"},rt=e=>r=>{var t;const n=r.theme,i=Nr(et,null==n?void 0:n.borderScheme);return(null===(t=null==n?void 0:n.overrides)||void 0===t?void 0:t.border)?`${Rr(i,e,n.overrides.border)}px`:`${i[e]}px`},tt=e=>1===e.length&&"theme"in e[0],nt={"width-010":rt("width-010"),"width-020":rt("width-020"),"width-040":rt("width-040"),solid:(it="solid",e=>{var r;const t=e.theme,n=Nr(et,null==t?void 0:t.borderScheme),i=(null===(r=null==t?void 0:t.overrides)||void 0===r?void 0:r.border)?Rr(n,it,t.overrides.border):n[it];return"function"==typeof i?i(e):i}),"dashed-default":(e=>(...r)=>t=>{var n;const i=tt(r)?[]:r,s=tt(r)?r[0]:t,a=s.theme,o=Nr(et,null==a?void 0:a.borderScheme);return((null===(n=null==a?void 0:a.overrides)||void 0===n?void 0:n.border)?Rr(o,e,a.overrides.border):o[e])(...i)(s)})("dashed-default")};var it;const st={collections:{lifesg:{"xxs-min":0,"xxs-max":320,"xs-min":321,"xs-max":375,"sm-min":376,"sm-max":420,"md-min":421,"md-max":767,"lg-min":768,"lg-max":1023,"xl-min":1024,"xl-max":1440,"xxl-min":1441,"xxs-column":8,"xs-column":8,"sm-column":8,"md-column":8,"lg-column":12,"xl-column":12,"xxl-column":12,"xxs-gutter":16,"xs-gutter":16,"sm-gutter":16,"md-gutter":16,"lg-gutter":32,"xl-gutter":32,"xxl-gutter":32,"xxs-margin":24,"xs-margin":24,"sm-margin":24,"md-margin":24,"lg-margin":48,"xl-margin":48,"xxl-margin":48}},defaultValue:"lifesg"},at=e=>r=>{var t;const n=r.theme,i=Nr(st,null==n?void 0:n.breakpointScheme);let s;return s=(null===(t=null==n?void 0:n.overrides)||void 0===t?void 0:t.breakpoint)?Rr(i,e,n.overrides.breakpoint):i[e],s},ot={"xxs-min":at("xxs-min"),"xxs-max":at("xxs-max"),"xs-min":at("xs-min"),"xs-max":at("xs-max"),"sm-min":at("sm-min"),"sm-max":at("sm-max"),"md-min":at("md-min"),"md-max":at("md-max"),"lg-min":at("lg-min"),"lg-max":at("lg-max"),"xl-min":at("xl-min"),"xl-max":at("xl-max"),"xxl-min":at("xxl-min"),"xxs-column":at("xxs-column"),"xs-column":at("xs-column"),"sm-column":at("sm-column"),"md-column":at("md-column"),"lg-column":at("lg-column"),"xl-column":at("xl-column"),"xxl-column":at("xxl-column"),"xxs-gutter":at("xxs-gutter"),"xs-gutter":at("xs-gutter"),"sm-gutter":at("sm-gutter"),"md-gutter":at("md-gutter"),"lg-gutter":at("lg-gutter"),"xl-gutter":at("xl-gutter"),"xxl-gutter":at("xxl-gutter"),"xxs-margin":at("xxs-margin"),"xs-margin":at("xs-margin"),"sm-margin":at("sm-margin"),"md-margin":at("md-margin"),"lg-margin":at("lg-margin"),"xl-margin":at("xl-margin"),"xxl-margin":at("xxl-margin")},lt=e=>("max-width"===e?["xxs","xs","sm","md","lg","xl"]:["xxs","xs","sm","md","lg","xl","xxl"]).reduce(((r,t)=>(r[t]=((e,r)=>{const t=ot["max-width"===e?`${r}-max`:`${r}-min`];return r=>{const n=t(r);return`@media screen and (${e}: ${n}px)`}})(e,t),r)),{}),dt={MaxWidth:lt("max-width"),MinWidth:lt("min-width")},ct={"header-size-xxl":"3rem","header-size-xl":"2.5rem","header-size-lg":"2rem","header-size-md":"1.625rem","header-size-sm":"1.375rem","header-size-xs":"1.125rem","header-lh-xxl":"3.5rem","header-lh-xl":"3rem","header-lh-lg":"2.5rem","header-lh-md":"2.25rem","header-lh-sm":"1.75rem","header-lh-xs":"1.625rem","header-ls-xxl":"-0.056rem","header-ls-xl":"-0.032rem","header-ls-lg":"-0.032rem","header-ls-md":"0rem","header-ls-sm":"0rem","header-ls-xs":"0rem","weight-light":"300","weight-regular":"400","weight-semibold":"600","weight-bold":"700","font-family":"Open Sans","body-size-baseline":"1.125rem","body-size-md":"1rem","body-size-sm":"0.875rem","body-size-xs":"0.75rem","body-lh-baseline":"1.625rem","body-lh-md":"1.5rem","body-lh-sm":"1.625rem","body-lh-xs":"1.25rem","body-ls-baseline":"0rem","body-ls-md":"0.014rem","body-ls-sm":"0.012rem","body-ls-xs":"0.012rem","formlabel-size-baseline":"1rem","formlabel-size-lg":"1.125rem","formlabel-lh-baseline":"1.5rem","formlabel-lh-lg":"1.625rem","formlabel-ls-baseline":"0.014rem","formlabel-ls-lg":"0rem"},ut={collections:{lifesg:ct,bookingsg:{"header-size-xxl":"3rem","header-size-xl":"2.5rem","header-size-lg":"2rem","header-size-md":"1.625rem","header-size-sm":"1.375rem","header-size-xs":"1.125rem","header-lh-xxl":"3.5rem","header-lh-xl":"3rem","header-lh-lg":"2.5rem","header-lh-md":"2.25rem","header-lh-sm":"1.75rem","header-lh-xs":"1.75rem","header-ls-xxl":"-0.056rem","header-ls-xl":"-0.032rem","header-ls-lg":"-0.032rem","header-ls-md":"0rem","header-ls-sm":"0rem","header-ls-xs":"0rem","weight-light":"300","weight-regular":"400","weight-semibold":"600","weight-bold":"700","font-family":"Plus Jakarta Sans","body-size-baseline":"1.125rem","body-size-md":"1rem","body-size-sm":"0.875rem","body-size-xs":"0.75rem","body-lh-baseline":"1.75rem","body-lh-md":"1.5rem","body-lh-sm":"1.6rem","body-lh-xs":"1.2rem","body-ls-baseline":"0rem","body-ls-md":"0.014rem","body-ls-sm":"0.012rem","body-ls-xs":"0.012rem","formlabel-size-baseline":"1rem","formlabel-size-lg":"1.125rem","formlabel-lh-baseline":"1.5rem","formlabel-lh-lg":"1.75rem","formlabel-ls-baseline":"0.014rem","formlabel-ls-lg":"0rem"},rbs:ct,mylegacy:ct,ccube:ct},defaultValue:"lifesg"},ht=e=>r=>{var t;const n=r.theme,i=Nr(ut,null==n?void 0:n.fontScheme);return(null===(t=null==n?void 0:n.overrides)||void 0===t?void 0:t.fontSpec)?Rr(i,e,n.overrides.fontSpec):i[e]},gt={"header-size-xxl":ht("header-size-xxl"),"header-size-xl":ht("header-size-xl"),"header-size-lg":ht("header-size-lg"),"header-size-md":ht("header-size-md"),"header-size-sm":ht("header-size-sm"),"header-size-xs":ht("header-size-xs"),"header-lh-xxl":ht("header-lh-xxl"),"header-lh-xl":ht("header-lh-xl"),"header-lh-lg":ht("header-lh-lg"),"header-lh-md":ht("header-lh-md"),"header-lh-sm":ht("header-lh-sm"),"header-lh-xs":ht("header-lh-xs"),"header-ls-xxl":ht("header-ls-xxl"),"header-ls-xl":ht("header-ls-xl"),"header-ls-lg":ht("header-ls-lg"),"header-ls-md":ht("header-ls-md"),"header-ls-sm":ht("header-ls-sm"),"header-ls-xs":ht("header-ls-xs"),"weight-light":ht("weight-light"),"weight-regular":ht("weight-regular"),"weight-semibold":ht("weight-semibold"),"weight-bold":ht("weight-bold"),"font-family":ht("font-family"),"body-size-baseline":ht("body-size-baseline"),"body-size-md":ht("body-size-md"),"body-size-sm":ht("body-size-sm"),"body-size-xs":ht("body-size-xs"),"body-lh-baseline":ht("body-lh-baseline"),"body-lh-md":ht("body-lh-md"),"body-lh-sm":ht("body-lh-sm"),"body-lh-xs":ht("body-lh-xs"),"body-ls-baseline":ht("body-ls-baseline"),"body-ls-md":ht("body-ls-md"),"body-ls-sm":ht("body-ls-sm"),"body-ls-xs":ht("body-ls-xs"),"formlabel-size-baseline":ht("formlabel-size-baseline"),"formlabel-size-lg":ht("formlabel-size-lg"),"formlabel-lh-baseline":ht("formlabel-lh-baseline"),"formlabel-lh-lg":ht("formlabel-lh-lg"),"formlabel-ls-baseline":ht("formlabel-ls-baseline"),"formlabel-ls-lg":ht("formlabel-ls-lg")},bt={collections:{lifesg:{none:0,xs:2,sm:4,md:8,lg:12,full:9999}},defaultValue:"lifesg"},mt=e=>r=>{var t;const n=r.theme,i=Nr(bt,null==n?void 0:n.radiusScheme);return(null===(t=null==n?void 0:n.overrides)||void 0===t?void 0:t.radius)?`${Rr(i,e,n.overrides.radius)}px`:`${i[e]}px`},yt={none:mt("none"),xs:mt("xs"),sm:mt("sm"),md:mt("md"),lg:mt("lg"),full:mt("full")},ft={collections:{lifesg:{"spacing-0":0,"spacing-4":4,"spacing-8":8,"spacing-12":12,"spacing-16":16,"spacing-20":20,"spacing-24":24,"spacing-32":32,"spacing-40":40,"spacing-48":48,"spacing-64":64,"spacing-72":72,"layout-xs":8,"layout-sm":16,"layout-md":24,"layout-lg":32,"layout-xl":48,"layout-xxl":64,"layout-xxxl":128}},defaultValue:"lifesg"},pt=e=>r=>{var t;const n=r.theme,i=Nr(ft,null==n?void 0:n.spacingScheme);return(null===(t=null==n?void 0:n.overrides)||void 0===t?void 0:t.spacing)?`${Rr(i,e,n.overrides.spacing)}px`:`${i[e]}px`},xt={"spacing-0":pt("spacing-0"),"spacing-4":pt("spacing-4"),"spacing-8":pt("spacing-8"),"spacing-12":pt("spacing-12"),"spacing-16":pt("spacing-16"),"spacing-20":pt("spacing-20"),"spacing-24":pt("spacing-24"),"spacing-32":pt("spacing-32"),"spacing-40":pt("spacing-40"),"spacing-48":pt("spacing-48"),"spacing-64":pt("spacing-64"),"spacing-72":pt("spacing-72"),"layout-xs":pt("layout-xs"),"layout-sm":pt("layout-sm"),"layout-md":pt("layout-md"),"layout-lg":pt("layout-lg"),"layout-xl":pt("layout-xl"),"layout-xxl":pt("layout-xxl"),"layout-xxxl":pt("layout-xxxl")},vt=(e,r,t,n)=>c`
    font-family: ${ht("font-family")};
    font-size: ${ht(e)};
    font-weight: ${ht(r)};
    line-height: ${ht(t)};
    letter-spacing: ${ht(n)};
`,Ft={"header-xxl-light":vt("header-size-xxl","weight-light","header-lh-xxl","header-ls-xxl"),"header-xxl-regular":vt("header-size-xxl","weight-regular","header-lh-xxl","header-ls-xxl"),"header-xxl-semibold":vt("header-size-xxl","weight-semibold","header-lh-xxl","header-ls-xxl"),"header-xxl-bold":vt("header-size-xxl","weight-bold","header-lh-xxl","header-ls-xxl"),"header-xl-light":vt("header-size-xl","weight-light","header-lh-xl","header-ls-xl"),"header-xl-regular":vt("header-size-xl","weight-regular","header-lh-xl","header-ls-xl"),"header-xl-semibold":vt("header-size-xl","weight-semibold","header-lh-xl","header-ls-xl"),"header-xl-bold":vt("header-size-xl","weight-bold","header-lh-xl","header-ls-xl"),"header-lg-light":vt("header-size-lg","weight-light","header-lh-lg","header-ls-lg"),"header-lg-regular":vt("header-size-lg","weight-regular","header-lh-lg","header-ls-lg"),"header-lg-semibold":vt("header-size-lg","weight-semibold","header-lh-lg","header-ls-lg"),"header-lg-bold":vt("header-size-lg","weight-bold","header-lh-lg","header-ls-lg"),"header-md-light":vt("header-size-md","weight-light","header-lh-md","header-ls-md"),"header-md-regular":vt("header-size-md","weight-regular","header-lh-md","header-ls-md"),"header-md-semibold":vt("header-size-md","weight-semibold","header-lh-md","header-ls-md"),"header-md-bold":vt("header-size-md","weight-bold","header-lh-md","header-ls-md"),"header-sm-light":vt("header-size-sm","weight-light","header-lh-sm","header-ls-sm"),"header-sm-regular":vt("header-size-sm","weight-regular","header-lh-sm","header-ls-sm"),"header-sm-semibold":vt("header-size-sm","weight-semibold","header-lh-sm","header-ls-sm"),"header-sm-bold":vt("header-size-sm","weight-bold","header-lh-sm","header-ls-sm"),"header-xs-light":vt("header-size-xs","weight-light","header-lh-xs","header-ls-xs"),"header-xs-regular":vt("header-size-xs","weight-regular","header-lh-xs","header-ls-xs"),"header-xs-semibold":vt("header-size-xs","weight-semibold","header-lh-xs","header-ls-xs"),"header-xs-bold":vt("header-size-xs","weight-bold","header-lh-xs","header-ls-xs"),"body-baseline-light":vt("body-size-baseline","weight-light","body-lh-baseline","body-ls-baseline"),"body-baseline-regular":vt("body-size-baseline","weight-regular","body-lh-baseline","body-ls-baseline"),"body-baseline-semibold":vt("body-size-baseline","weight-semibold","body-lh-baseline","body-ls-baseline"),"body-baseline-bold":vt("body-size-baseline","weight-bold","body-lh-baseline","body-ls-baseline"),"body-md-light":vt("body-size-md","weight-light","body-lh-md","body-ls-md"),"body-md-regular":vt("body-size-md","weight-regular","body-lh-md","body-ls-md"),"body-md-semibold":vt("body-size-md","weight-semibold","body-lh-md","body-ls-md"),"body-md-bold":vt("body-size-md","weight-bold","body-lh-md","body-ls-md"),"body-sm-light":vt("body-size-sm","weight-light","body-lh-sm","body-ls-sm"),"body-sm-regular":vt("body-size-sm","weight-regular","body-lh-sm","body-ls-sm"),"body-sm-semibold":vt("body-size-sm","weight-semibold","body-lh-sm","body-ls-sm"),"body-sm-bold":vt("body-size-sm","weight-bold","body-lh-sm","body-ls-sm"),"body-xs-light":vt("body-size-xs","weight-light","body-lh-xs","body-ls-xs"),"body-xs-regular":vt("body-size-xs","weight-regular","body-lh-xs","body-ls-xs"),"body-xs-semibold":vt("body-size-xs","weight-semibold","body-lh-xs","body-ls-xs"),"body-xs-bold":vt("body-size-xs","weight-bold","body-lh-xs","body-ls-xs"),"formlabel-baseline-semibold":vt("formlabel-size-baseline","weight-semibold","formlabel-lh-baseline","formlabel-ls-baseline"),"formlabel-lg-semibold":vt("formlabel-size-lg","weight-semibold","formlabel-lh-lg","formlabel-ls-lg")},wt={collections:{lifesg:Ft,bookingsg:Ft,rbs:Ft,mylegacy:Ft,ccube:Ft},defaultValue:"lifesg"},$t=e=>r=>{var t;const n=r.theme,i=Nr(wt,null==n?void 0:n.fontScheme),s=(null===(t=null==n?void 0:n.overrides)||void 0===t?void 0:t.font)?Rr(i,e,n.overrides.font):i[e];return"function"==typeof s?s(r):s},Dt={"header-xxl-light":$t("header-xxl-light"),"header-xxl-regular":$t("header-xxl-regular"),"header-xxl-semibold":$t("header-xxl-semibold"),"header-xxl-bold":$t("header-xxl-bold"),"header-xl-light":$t("header-xl-light"),"header-xl-regular":$t("header-xl-regular"),"header-xl-semibold":$t("header-xl-semibold"),"header-xl-bold":$t("header-xl-bold"),"header-lg-light":$t("header-lg-light"),"header-lg-regular":$t("header-lg-regular"),"header-lg-semibold":$t("header-lg-semibold"),"header-lg-bold":$t("header-lg-bold"),"header-md-light":$t("header-md-light"),"header-md-regular":$t("header-md-regular"),"header-md-semibold":$t("header-md-semibold"),"header-md-bold":$t("header-md-bold"),"header-sm-light":$t("header-sm-light"),"header-sm-regular":$t("header-sm-regular"),"header-sm-semibold":$t("header-sm-semibold"),"header-sm-bold":$t("header-sm-bold"),"header-xs-light":$t("header-xs-light"),"header-xs-regular":$t("header-xs-regular"),"header-xs-semibold":$t("header-xs-semibold"),"header-xs-bold":$t("header-xs-bold"),"body-baseline-light":$t("body-baseline-light"),"body-baseline-regular":$t("body-baseline-regular"),"body-baseline-semibold":$t("body-baseline-semibold"),"body-baseline-bold":$t("body-baseline-bold"),"body-md-light":$t("body-md-light"),"body-md-regular":$t("body-md-regular"),"body-md-semibold":$t("body-md-semibold"),"body-md-bold":$t("body-md-bold"),"body-sm-light":$t("body-sm-light"),"body-sm-regular":$t("body-sm-regular"),"body-sm-semibold":$t("body-sm-semibold"),"body-sm-bold":$t("body-sm-bold"),"body-xs-light":$t("body-xs-light"),"body-xs-regular":$t("body-xs-regular"),"body-xs-semibold":$t("body-xs-semibold"),"body-xs-bold":$t("body-xs-bold"),"formlabel-baseline-semibold":$t("formlabel-baseline-semibold"),"formlabel-lg-semibold":$t("formlabel-lg-semibold")},Ct=Object.assign(Object.assign({},Qr),{Primitive:Jr}),Et=Object.assign(Object.assign({},Dt),{Spec:gt}),Bt=Zr,At=nt,zt=xt,St=yt,Mt=dt,kt=l.button`
    padding: ${zt["spacing-8"]} ${zt["spacing-16"]};
    min-width: 4rem;
    border: ${At["width-010"]} ${At.solid} transparent;
    border-radius: ${St.sm};
    transition: all ${Bt["duration-250"]} ${Bt["ease-default"]};
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;

    // -----------------------------------------------------------------------------
    // BUTTON STYLE + TEXT COLOR
    // -----------------------------------------------------------------------------
    ${e=>{switch(e.$buttonStyle){case"secondary":return c`
                    background-color: ${Ct.Primitive.white};
                    border-color: ${e.$buttonIsDanger?Ct["border-error-strong"]:Ct["border-primary"]};

                    color: ${e.$buttonIsDanger?Ct["text-error"]:Ct["text-primary"]};

                    &:hover,
                    &:active {
                        background-color: ${Ct["bg-hover-neutral"]};
                    }
                `;case"light":return c`
                    background-color: ${Ct.bg};
                    border-color: ${Ct.border};

                    color: ${e.$buttonIsDanger?Ct["text-error"]:Ct["text-primary"]};

                    &:hover,
                    &:active {
                        background-color: ${Ct["bg-hover-neutral"]};
                    }
                `;case"link":return c`
                    background-color: transparent;

                    color: ${e.$buttonIsDanger?Ct["text-error"]:Ct["text-primary"]};
                    &:hover,
                    &:active {
                        background-color: ${Ct["bg-hover-neutral"]};
                    }
                `;case"disabled":return c`
                    background-color: ${Ct["bg-disabled"]};

                    cursor: not-allowed;

                    &:hover {
                        box-shadow: none;
                    }

                    color: ${Ct["text-disabled"]};
                `;default:return c`
                    background-color: ${e.$buttonIsDanger?Ct["bg-error-strong"]:Ct["bg-primary"]};

                    ${Mt.MaxWidth.md} {
                        width: 100%;
                    }

                    color: ${Ct["text-inverse"]};

                    &:hover,
                    &:active {
                        background-color: ${e.$buttonIsDanger?Ct["bg-error-strong-hover"]:Ct["bg-primary-hover"]};
                    }
                `}}}

    // -----------------------------------------------------------------------------
	// BUTTON SIZE + TEXT SIZE
	// -----------------------------------------------------------------------------
	${e=>{switch(e.$buttonSizeStyle){case"small":return c`
                    height: 2.5rem;
                    ${Et["body-md-semibold"]}

                    ${Mt.MaxWidth.xxs} {
                        height: auto;
                    }
                `;case"large":return c`
                    height: 4rem;
                    ${Et["header-md-semibold"]}

                    ${Mt.MaxWidth.xxs} {
                        height: auto;
                    }
                `;default:return c`
                    height: 3rem;
                    ${Et["header-xs-semibold"]}

                    ${Mt.MaxWidth.xxs} {
                        height: auto;
                    }
                `}}}
`,Ot=l((({color:t,className:n,size:i})=>e(b,Object.assign({className:n,$size:i,$color:t},{children:[r(y,{id:"inner1"}),r(f,{id:"inner2"}),r(p,{id:"inner3"}),r(x,{id:"inner4"})]}))))`
    margin-right: 0.5rem;
`,_t=(t,n)=>{const{children:i,disabled:s=!1,loading:a=!1,styleType:o="default",danger:l=!1}=t,d=g(t,["children","disabled","loading","styleType","danger"]),c={$buttonStyle:s?"disabled":o,$buttonSizeStyle:"default",$buttonIsDanger:l};return e(kt,Object.assign({ref:n,"data-testid":d["data-testid"]||"button",disabled:s},c,d,{children:[a&&r(Ot,{}),r("span",{children:i})]}))};_t.displayName="Button.Default";const Yt=(t,n)=>{const{children:i,disabled:s=!1,loading:a=!1,styleType:o="default",danger:l=!1}=t,d=g(t,["children","disabled","loading","styleType","danger"]),c={$buttonStyle:s?"disabled":o,$buttonSizeStyle:"small",$buttonIsDanger:l};return e(kt,Object.assign({ref:n,"data-testid":d["data-testid"]||"button",disabled:s},c,d,{children:[a&&r(Ot,{}),r("span",{children:i})]}))};Yt.displayName="Button.Small";const Tt=(t,n)=>{const{children:i,disabled:s=!1,loading:a=!1,styleType:o="default",danger:l=!1}=t,d=g(t,["children","disabled","loading","styleType","danger"]),c={$buttonStyle:s?"disabled":o,$buttonSizeStyle:"large",$buttonIsDanger:l};return e(kt,Object.assign({ref:n,"data-testid":d["data-testid"]||"button",disabled:s},c,d,{children:[a&&r(Ot,{}),r("span",{children:i})]}))};Tt.displayName="Button.Large";const Lt={Default:n.forwardRef(_t),Small:n.forwardRef(Yt),Large:n.forwardRef(Tt)};var jt={exports:{}};jt.exports=function(){var e=1e3,r=6e4,t=36e5,n="millisecond",i="second",s="minute",a="hour",o="day",l="week",d="month",c="quarter",u="year",h="date",g="Invalid Date",b=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,m=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,y={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(e){var r=["th","st","nd","rd"],t=e%100;return"["+e+(r[(t-20)%10]||r[t]||r[0])+"]"}},f=function(e,r,t){var n=String(e);return!n||n.length>=r?e:""+Array(r+1-n.length).join(t)+e},p={s:f,z:function(e){var r=-e.utcOffset(),t=Math.abs(r),n=Math.floor(t/60),i=t%60;return(r<=0?"+":"-")+f(n,2,"0")+":"+f(i,2,"0")},m:function e(r,t){if(r.date()<t.date())return-e(t,r);var n=12*(t.year()-r.year())+(t.month()-r.month()),i=r.clone().add(n,d),s=t-i<0,a=r.clone().add(n+(s?-1:1),d);return+(-(n+(t-i)/(s?i-a:a-i))||0)},a:function(e){return e<0?Math.ceil(e)||0:Math.floor(e)},p:function(e){return{M:d,y:u,w:l,d:o,D:h,h:a,m:s,s:i,ms:n,Q:c}[e]||String(e||"").toLowerCase().replace(/s$/,"")},u:function(e){return void 0===e}},x="en",v={};v[x]=y;var F="$isDayjsObject",w=function(e){return e instanceof E||!(!e||!e[F])},$=function e(r,t,n){var i;if(!r)return x;if("string"==typeof r){var s=r.toLowerCase();v[s]&&(i=s),t&&(v[s]=t,i=s);var a=r.split("-");if(!i&&a.length>1)return e(a[0])}else{var o=r.name;v[o]=r,i=o}return!n&&i&&(x=i),i||!n&&x},D=function(e,r){if(w(e))return e.clone();var t="object"==typeof r?r:{};return t.date=e,t.args=arguments,new E(t)},C=p;C.l=$,C.i=w,C.w=function(e,r){return D(e,{locale:r.$L,utc:r.$u,x:r.$x,$offset:r.$offset})};var E=function(){function y(e){this.$L=$(e.locale,null,!0),this.parse(e),this.$x=this.$x||e.x||{},this[F]=!0}var f=y.prototype;return f.parse=function(e){this.$d=function(e){var r=e.date,t=e.utc;if(null===r)return new Date(NaN);if(C.u(r))return new Date;if(r instanceof Date)return new Date(r);if("string"==typeof r&&!/Z$/i.test(r)){var n=r.match(b);if(n){var i=n[2]-1||0,s=(n[7]||"0").substring(0,3);return t?new Date(Date.UTC(n[1],i,n[3]||1,n[4]||0,n[5]||0,n[6]||0,s)):new Date(n[1],i,n[3]||1,n[4]||0,n[5]||0,n[6]||0,s)}}return new Date(r)}(e),this.init()},f.init=function(){var e=this.$d;this.$y=e.getFullYear(),this.$M=e.getMonth(),this.$D=e.getDate(),this.$W=e.getDay(),this.$H=e.getHours(),this.$m=e.getMinutes(),this.$s=e.getSeconds(),this.$ms=e.getMilliseconds()},f.$utils=function(){return C},f.isValid=function(){return!(this.$d.toString()===g)},f.isSame=function(e,r){var t=D(e);return this.startOf(r)<=t&&t<=this.endOf(r)},f.isAfter=function(e,r){return D(e)<this.startOf(r)},f.isBefore=function(e,r){return this.endOf(r)<D(e)},f.$g=function(e,r,t){return C.u(e)?this[r]:this.set(t,e)},f.unix=function(){return Math.floor(this.valueOf()/1e3)},f.valueOf=function(){return this.$d.getTime()},f.startOf=function(e,r){var t=this,n=!!C.u(r)||r,c=C.p(e),g=function(e,r){var i=C.w(t.$u?Date.UTC(t.$y,r,e):new Date(t.$y,r,e),t);return n?i:i.endOf(o)},b=function(e,r){return C.w(t.toDate()[e].apply(t.toDate("s"),(n?[0,0,0,0]:[23,59,59,999]).slice(r)),t)},m=this.$W,y=this.$M,f=this.$D,p="set"+(this.$u?"UTC":"");switch(c){case u:return n?g(1,0):g(31,11);case d:return n?g(1,y):g(0,y+1);case l:var x=this.$locale().weekStart||0,v=(m<x?m+7:m)-x;return g(n?f-v:f+(6-v),y);case o:case h:return b(p+"Hours",0);case a:return b(p+"Minutes",1);case s:return b(p+"Seconds",2);case i:return b(p+"Milliseconds",3);default:return this.clone()}},f.endOf=function(e){return this.startOf(e,!1)},f.$set=function(e,r){var t,l=C.p(e),c="set"+(this.$u?"UTC":""),g=(t={},t[o]=c+"Date",t[h]=c+"Date",t[d]=c+"Month",t[u]=c+"FullYear",t[a]=c+"Hours",t[s]=c+"Minutes",t[i]=c+"Seconds",t[n]=c+"Milliseconds",t)[l],b=l===o?this.$D+(r-this.$W):r;if(l===d||l===u){var m=this.clone().set(h,1);m.$d[g](b),m.init(),this.$d=m.set(h,Math.min(this.$D,m.daysInMonth())).$d}else g&&this.$d[g](b);return this.init(),this},f.set=function(e,r){return this.clone().$set(e,r)},f.get=function(e){return this[C.p(e)]()},f.add=function(n,c){var h,g=this;n=Number(n);var b=C.p(c),m=function(e){var r=D(g);return C.w(r.date(r.date()+Math.round(e*n)),g)};if(b===d)return this.set(d,this.$M+n);if(b===u)return this.set(u,this.$y+n);if(b===o)return m(1);if(b===l)return m(7);var y=(h={},h[s]=r,h[a]=t,h[i]=e,h)[b]||1,f=this.$d.getTime()+n*y;return C.w(f,this)},f.subtract=function(e,r){return this.add(-1*e,r)},f.format=function(e){var r=this,t=this.$locale();if(!this.isValid())return t.invalidDate||g;var n=e||"YYYY-MM-DDTHH:mm:ssZ",i=C.z(this),s=this.$H,a=this.$m,o=this.$M,l=t.weekdays,d=t.months,c=t.meridiem,u=function(e,t,i,s){return e&&(e[t]||e(r,n))||i[t].slice(0,s)},h=function(e){return C.s(s%12||12,e,"0")},b=c||function(e,r,t){var n=e<12?"AM":"PM";return t?n.toLowerCase():n};return n.replace(m,(function(e,n){return n||function(e){switch(e){case"YY":return String(r.$y).slice(-2);case"YYYY":return C.s(r.$y,4,"0");case"M":return o+1;case"MM":return C.s(o+1,2,"0");case"MMM":return u(t.monthsShort,o,d,3);case"MMMM":return u(d,o);case"D":return r.$D;case"DD":return C.s(r.$D,2,"0");case"d":return String(r.$W);case"dd":return u(t.weekdaysMin,r.$W,l,2);case"ddd":return u(t.weekdaysShort,r.$W,l,3);case"dddd":return l[r.$W];case"H":return String(s);case"HH":return C.s(s,2,"0");case"h":return h(1);case"hh":return h(2);case"a":return b(s,a,!0);case"A":return b(s,a,!1);case"m":return String(a);case"mm":return C.s(a,2,"0");case"s":return String(r.$s);case"ss":return C.s(r.$s,2,"0");case"SSS":return C.s(r.$ms,3,"0");case"Z":return i}return null}(e)||i.replace(":","")}))},f.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},f.diff=function(n,h,g){var b,m=this,y=C.p(h),f=D(n),p=(f.utcOffset()-this.utcOffset())*r,x=this-f,v=function(){return C.m(m,f)};switch(y){case u:b=v()/12;break;case d:b=v();break;case c:b=v()/3;break;case l:b=(x-p)/6048e5;break;case o:b=(x-p)/864e5;break;case a:b=x/t;break;case s:b=x/r;break;case i:b=x/e;break;default:b=x}return g?b:C.a(b)},f.daysInMonth=function(){return this.endOf(d).$D},f.$locale=function(){return v[this.$L]},f.locale=function(e,r){if(!e)return this.$L;var t=this.clone(),n=$(e,r,!0);return n&&(t.$L=n),t},f.clone=function(){return C.w(this.$d,this)},f.toDate=function(){return new Date(this.valueOf())},f.toJSON=function(){return this.isValid()?this.toISOString():null},f.toISOString=function(){return this.$d.toISOString()},f.toString=function(){return this.$d.toUTCString()},y}(),B=E.prototype;return D.prototype=B,[["$ms",n],["$s",i],["$m",s],["$H",a],["$W",o],["$M",d],["$y",u],["$D",h]].forEach((function(e){B[e[1]]=function(r){return this.$g(r,e[0],e[1])}})),D.extend=function(e,r){return e.$i||(e(r,E,D),e.$i=!0),D},D.locale=$,D.isDayjs=w,D.unix=function(e){return D(1e3*e)},D.en=v[x],D.Ls=v,D.p={},D}();var It=F(jt.exports),Ht={exports:{}};Ht.exports=function(){var e={LTS:"h:mm:ss A",LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D, YYYY",LLL:"MMMM D, YYYY h:mm A",LLLL:"dddd, MMMM D, YYYY h:mm A"},r=/(\[[^[]*\])|([-_:/.,()\s]+)|(A|a|YYYY|YY?|MM?M?M?|Do|DD?|hh?|HH?|mm?|ss?|S{1,3}|z|ZZ?)/g,t=/\d\d/,n=/\d\d?/,i=/\d*[^-_:/,()\s\d]+/,s={},a=function(e){return(e=+e)+(e>68?1900:2e3)},o=function(e){return function(r){this[e]=+r}},l=[/[+-]\d\d:?(\d\d)?|Z/,function(e){(this.zone||(this.zone={})).offset=function(e){if(!e)return 0;if("Z"===e)return 0;var r=e.match(/([+-]|\d\d)/g),t=60*r[1]+(+r[2]||0);return 0===t?0:"+"===r[0]?-t:t}(e)}],d=function(e){var r=s[e];return r&&(r.indexOf?r:r.s.concat(r.f))},c=function(e,r){var t,n=s.meridiem;if(n){for(var i=1;i<=24;i+=1)if(e.indexOf(n(i,0,r))>-1){t=i>12;break}}else t=e===(r?"pm":"PM");return t},u={A:[i,function(e){this.afternoon=c(e,!1)}],a:[i,function(e){this.afternoon=c(e,!0)}],S:[/\d/,function(e){this.milliseconds=100*+e}],SS:[t,function(e){this.milliseconds=10*+e}],SSS:[/\d{3}/,function(e){this.milliseconds=+e}],s:[n,o("seconds")],ss:[n,o("seconds")],m:[n,o("minutes")],mm:[n,o("minutes")],H:[n,o("hours")],h:[n,o("hours")],HH:[n,o("hours")],hh:[n,o("hours")],D:[n,o("day")],DD:[t,o("day")],Do:[i,function(e){var r=s.ordinal,t=e.match(/\d+/);if(this.day=t[0],r)for(var n=1;n<=31;n+=1)r(n).replace(/\[|\]/g,"")===e&&(this.day=n)}],M:[n,o("month")],MM:[t,o("month")],MMM:[i,function(e){var r=d("months"),t=(d("monthsShort")||r.map((function(e){return e.slice(0,3)}))).indexOf(e)+1;if(t<1)throw new Error;this.month=t%12||t}],MMMM:[i,function(e){var r=d("months").indexOf(e)+1;if(r<1)throw new Error;this.month=r%12||r}],Y:[/[+-]?\d+/,o("year")],YY:[t,function(e){this.year=a(e)}],YYYY:[/\d{4}/,o("year")],Z:l,ZZ:l};function h(t){var n,i;n=t,i=s&&s.formats;for(var a=(t=n.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g,(function(r,t,n){var s=n&&n.toUpperCase();return t||i[n]||e[n]||i[s].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g,(function(e,r,t){return r||t.slice(1)}))}))).match(r),o=a.length,l=0;l<o;l+=1){var d=a[l],c=u[d],h=c&&c[0],g=c&&c[1];a[l]=g?{regex:h,parser:g}:d.replace(/^\[|\]$/g,"")}return function(e){for(var r={},t=0,n=0;t<o;t+=1){var i=a[t];if("string"==typeof i)n+=i.length;else{var s=i.regex,l=i.parser,d=e.slice(n),c=s.exec(d)[0];l.call(r,c),e=e.replace(c,"")}}return function(e){var r=e.afternoon;if(void 0!==r){var t=e.hours;r?t<12&&(e.hours+=12):12===t&&(e.hours=0),delete e.afternoon}}(r),r}}return function(e,r,t){t.p.customParseFormat=!0,e&&e.parseTwoDigitYear&&(a=e.parseTwoDigitYear);var n=r.prototype,i=n.parse;n.parse=function(e){var r=e.date,n=e.utc,a=e.args;this.$u=n;var o=a[1];if("string"==typeof o){var l=!0===a[2],d=!0===a[3],c=l||d,u=a[2];d&&(u=a[2]),s=this.$locale(),!l&&u&&(s=t.Ls[u]),this.$d=function(e,r,t){try{if(["x","X"].indexOf(r)>-1)return new Date(("X"===r?1e3:1)*e);var n=h(r)(e),i=n.year,s=n.month,a=n.day,o=n.hours,l=n.minutes,d=n.seconds,c=n.milliseconds,u=n.zone,g=new Date,b=a||(i||s?1:g.getDate()),m=i||g.getFullYear(),y=0;i&&!s||(y=s>0?s-1:g.getMonth());var f=o||0,p=l||0,x=d||0,v=c||0;return u?new Date(Date.UTC(m,y,b,f,p,x,v+60*u.offset*1e3)):t?new Date(Date.UTC(m,y,b,f,p,x,v)):new Date(m,y,b,f,p,x,v)}catch(e){return new Date("")}}(r,o,n),this.init(),u&&!0!==u&&(this.$L=this.locale(u).$L),c&&r!=this.format(o)&&(this.$d=new Date("")),s={}}else if(o instanceof Array)for(var g=o.length,b=1;b<=g;b+=1){a[1]=o[b-1];var m=t.apply(this,a);if(m.isValid()){this.$d=m.$d,this.$L=m.$L,this.init();break}b===g&&(this.$d=new Date(""))}else i.call(this,e)}}}();var Wt=F(Ht.exports),Rt={exports:{}};Rt.exports=function(e,r,t){r.prototype.isBetween=function(e,r,n,i){var s=t(e),a=t(r),o="("===(i=i||"()")[0],l=")"===i[1];return(o?this.isAfter(s,n):!this.isBefore(s,n))&&(l?this.isBefore(a,n):!this.isAfter(a,n))||(o?this.isBefore(s,n):!this.isAfter(s,n))&&(l?this.isAfter(a,n):!this.isBefore(a,n))}};var Nt=F(Rt.exports),Pt={exports:{}};Pt.exports=function(e,r){r.prototype.isSameOrAfter=function(e,r){return this.isSame(e,r)||this.isAfter(e,r)}};var Vt=F(Pt.exports),Zt={exports:{}};Zt.exports=function(e,r){r.prototype.isSameOrBefore=function(e,r){return this.isSame(e,r)||this.isBefore(e,r)}};var Xt,Ut,Jt,Gt=F(Zt.exports),qt={exports:{}},Kt=F(qt.exports=(Xt={year:0,month:1,day:2,hour:3,minute:4,second:5},Ut={},function(e,r,t){var n,i=function(e,r,t){void 0===t&&(t={});var n=new Date(e),i=function(e,r){void 0===r&&(r={});var t=r.timeZoneName||"short",n=e+"|"+t,i=Ut[n];return i||(i=new Intl.DateTimeFormat("en-US",{hour12:!1,timeZone:e,year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit",timeZoneName:t}),Ut[n]=i),i}(r,t);return i.formatToParts(n)},s=function(e,r){for(var n=i(e,r),s=[],a=0;a<n.length;a+=1){var o=n[a],l=o.type,d=o.value,c=Xt[l];c>=0&&(s[c]=parseInt(d,10))}var u=s[3],h=24===u?0:u,g=s[0]+"-"+s[1]+"-"+s[2]+" "+h+":"+s[4]+":"+s[5]+":000",b=+e;return(t.utc(g).valueOf()-(b-=b%1e3))/6e4},a=r.prototype;a.tz=function(e,r){void 0===e&&(e=n);var i=this.utcOffset(),s=this.toDate(),a=s.toLocaleString("en-US",{timeZone:e}),o=Math.round((s-new Date(a))/1e3/60),l=t(a,{locale:this.$L}).$set("millisecond",this.$ms).utcOffset(15*-Math.round(s.getTimezoneOffset()/15)-o,!0);if(r){var d=l.utcOffset();l=l.add(i-d,"minute")}return l.$x.$timezone=e,l},a.offsetName=function(e){var r=this.$x.$timezone||t.tz.guess(),n=i(this.valueOf(),r,{timeZoneName:e}).find((function(e){return"timezonename"===e.type.toLowerCase()}));return n&&n.value};var o=a.startOf;a.startOf=function(e,r){if(!this.$x||!this.$x.$timezone)return o.call(this,e,r);var n=t(this.format("YYYY-MM-DD HH:mm:ss:SSS"),{locale:this.$L});return o.call(n,e,r).tz(this.$x.$timezone,!0)},t.tz=function(e,r,i){var a=i&&r,o=i||r||n,l=s(+t(),o);if("string"!=typeof e)return t(e).tz(o);var d=function(e,r,t){var n=e-60*r*1e3,i=s(n,t);if(r===i)return[n,r];var a=s(n-=60*(i-r)*1e3,t);return i===a?[n,i]:[e-60*Math.min(i,a)*1e3,Math.max(i,a)]}(t.utc(e,a).valueOf(),l,o),c=d[0],u=d[1],h=t(c).utcOffset(u);return h.$x.$timezone=o,h},t.tz.guess=function(){return Intl.DateTimeFormat().resolvedOptions().timeZone},t.tz.setDefault=function(e){n=e}}));It.extend(Nt),It.extend(Gt),It.extend(Vt),It.extend(Wt),It.extend(Kt),function(e){e.generateDays=e=>{const r=e.startOf("month"),t=It(r).startOf("week");return Qt(t).map((e=>en(e)))},e.generateDaysForCurrentWeek=e=>{const r=e.startOf("week");return en(r)},e.generateMonths=e=>{const r=[];for(let t=0;t<12;t++){const n=e.month(t);r.push(It(n))}return r},e.generateDecadeOfYears=e=>{const r=e.year(),t=10*Math.floor(r/10),n=e.year(t),i=[n.subtract(1,"year"),n];for(let e=1;e<11;e++)i.push(n.add(e,"year"));return i},e.getStartEndDecade=e=>{const r=10*Math.floor(+e.format("YYYY")/10);return{beginDecade:r,endDecade:+It(`${r+9}-01-01`).format("YYYY")}},e.convertTo12HourFormat=e=>{const r=It(e,"HH:mm");return r.isValid()?r.format("h:mm a"):""},e.isWithinRange=(e,r,t,n="day")=>!r&&!t||(r&&t?e.isBetween(r,t,n,"[]"):r?e.isSameOrAfter(r,n):e.isSameOrBefore(t,n)),e.isPreviousMonthWithinRange=(r,t)=>e.isWithinRange(r.subtract(1,"month"),t,void 0,"month"),e.isPreviousYearWithinRange=(r,t)=>e.isWithinRange(r.subtract(1,"year"),t,void 0,"year"),e.isPreviousDecadeWithinRange=(r,t)=>{const{beginDecade:n}=e.getStartEndDecade(r);return e.isWithinRange(r.year(n).subtract(1,"year"),t,void 0,"year")},e.isNextMonthWithinRange=(r,t)=>e.isWithinRange(r.add(1,"month"),void 0,t,"month"),e.isNextYearWithinRange=(r,t)=>e.isWithinRange(r.add(1,"year"),void 0,t,"year"),e.isNextDecadeWithinRange=(r,t)=>{const{endDecade:n}=e.getStartEndDecade(r);return e.isWithinRange(r.year(n).add(1,"year"),void 0,t,"year")},e.getWeekStartEnd=e=>({start:e.startOf("week").format("YYYY-MM-DD"),end:e.endOf("week").format("YYYY-MM-DD")}),e.getFixedRangeStartEnd=(e,r)=>({start:e.format("YYYY-MM-DD"),end:e.add(r-1,"day").format("YYYY-MM-DD")}),e.isDisabledDay=(r,t,n,i)=>{const s=e.isWithinRange(r,n?It(n):void 0,i?It(i):void 0),a=t&&t.includes(r.format("YYYY-MM-DD"));return!s||!!a}}(Jt||(Jt={}));const Qt=e=>{const r=[e];for(let t=1;t<6;t++){const n=e.add(t,"week");r.push(n)}return r},en=e=>{const r=[];for(let t=0;t<7;t++){const n=e.add(t,"day");r.push(n)}return r},rn=[1,3,5,7,8,10,12],tn=[4,6,9,11];var nn,sn,an,on;!function(e){e.clampDay=(r,t,n)=>{const i=parseInt(r),s=parseInt(t),a=parseInt(n);return 0==i?"1":rn.includes(s)?Math.min(i,31).toString():tn.includes(s)?Math.min(i,30).toString():2===s?e.isLeapYear(a)?Math.min(i,29).toString():Math.min(i,28).toString():r},e.clampMonth=e=>{const r=parseInt(e);return 0==r?"1":r>12?"12":e},e.isLeapYear=e=>e%4==0&&e%100!=0||e%400==0,e.getTimeDiffInMinutes=(e,r,t="HH:mm")=>{const n=It(e,t);return It(r,t).diff(n,"minute")},e.toDayjs=e=>e?It(e):It(),e.addMinutesToTime=(e,r,t="HH:mm")=>It(e,t).add(r,"minutes").format(t),e.isSame=(e,r,t="day")=>It(e).isSame(It(r),t)}(nn||(nn={})),function(e){e.isDateDisabled=(e,r)=>{const{disabledDates:t,minDate:n,maxDate:i}=r;return!!(t&&t.length&&t.includes(e))||(!(!n||!It(e).isBefore(n,"day"))||!(!i||!It(e).isAfter(i,"day")))},e.sanitizeInput=e=>{if(e){if(It(e).isValid())return e}return""}}(sn||(sn={})),function(e){e.generate=()=>Math.random().toString(36).substring(2,9)}(an||(an={})),function(e){e.transformWithSpaces=(e,r)=>{const t="(.{"+r+"})";return e.replace(/[^\dA-Z]/gi,"").replace(new RegExp(t,"g"),"$1 ").trim()},e.padValue=(e,r)=>{if("0"===e)return r?e:e.padStart(2,"0");if(""===e)return e;return parseInt(e).toString().padStart(2,"0")},e.shouldTruncateToTwoLines=(e,r)=>{const t=Math.floor(r/9);return e.length>=2*t||1===e.split(" ").length&&e.length>t},e.truncateOneLine=(e,r,t,n,i=8)=>{let s=0;r>t&&(s=Math.floor((r-t)/i));const a=n+s;if(a<e.length){const r=Math.floor(a/2);return e.substring(0,r)+" ... "+e.substring(e.length-r,e.length)}return e},e.truncateTwoLines=(e,r,t,n=1.2)=>{const i=Math.floor(2*r/(.6*t))*(2/n);if(e.length<=i)return e;const s=Math.floor(.6*i),a=Math.floor(.2*i);return`${e.substring(0,s)}...${e.substring(e.length-a)}`},e.getTextWidth=(r,t)=>{if("undefined"==typeof document)return 0;const n=(e.getTextWidth.canvas||(e.getTextWidth.canvas=document.createElement("canvas"))).getContext("2d");n.font=t;return n.measureText(r).width},e.maskValue=(e,t)=>{if(!e)return e;const{maskRange:n,unmaskRange:i,maskChar:s="•",maskRegex:a,maskTransformer:o}=t;if(o)return o(e);if(a)return e.replace(a,s);if(n){const{startIndex:t,endIndex:i}=r(n[0],n[1]);return e.substring(0,t)+s.repeat(e.substring(t,i+1).length)+e.substring(i+1)}if(i){const{startIndex:t,endIndex:n}=r(i[0],i[1]);return s.repeat(e.substring(0,t).length)+e.substring(t,n+1)+s.repeat(e.substring(n+1).length)}return e};const r=(e,r)=>e<r?{startIndex:e,endIndex:r}:{startIndex:r,endIndex:e}}(on||(on={}));const ln=c`
    outline-offset: -1px;
    outline: ${At["width-020"]} ${At.solid} ${Ct["border-focus"]};
`,dn=c`
    outline-color: ${Ct["border-focus"]};
`,cn=c`
    outline-color: ${Ct["border-disabled"]};
`,un=c`
    outline-color: ${Ct["border-error-focus"]};
`,hn=l.div`
    border: ${At["width-010"]} ${At.solid} ${Ct.border};
    border-radius: ${St.sm};
    background: ${Ct.bg};

    :focus-within {
        ${ln}
    }
    ${e=>e.$focused&&ln}

    ${e=>e.$readOnly?c`
                border-color: transparent;
                padding: 0;
                background: transparent !important;

                :focus-within {
                    ${dn}
                }
                ${e.$focused&&dn}
            `:e.$disabled?c`
                background: ${Ct["bg-disabled"]};
                cursor: not-allowed;

                :focus-within {
                    ${cn}
                }
                ${e.$focused&&cn}
            `:e.$error?c`
                border-color: ${Ct["border-error"]};

                :focus-within {
                    ${un}
                }
                ${e.$focused&&un}
            `:void 0}
`;l(hn)`
    display: flex;
    align-items: center;
    position: relative;
    height: max-content;
    width: 100%;
    padding: 0 ${zt["spacing-16"]};
    flex-direction: ${e=>"right"===e.$position?"row-reverse":"row"};
`;const gn=l.input`
    ${e=>"small"===e.$variant?Et["body-md-regular"]:Et["body-baseline-regular"]}
    color: ${Ct.text};
    display: block;
    background: transparent;
    border: none;
    outline: none;
    box-shadow: none;
    padding: 0;
    margin: 0;

    :disabled {
        color: ${Ct["text-subtler"]};

        :hover {
            cursor: not-allowed;
        }
    }

    ::placeholder,
    ::-webkit-input-placeholder {
        color: ${Ct["text-subtler"]};
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
`,bn=l.button`
    background: transparent;
    border: none;
    outline: none;

    :focus,
    :active {
        outline: none;
    }

    :focus-visible {
        outline: ${At["width-010"]} ${At.solid}
            ${Ct["border-focus"]};
        border-radius: ${St.sm};
    }
`,mn=l(gn)`
    width: 100%;
    height: calc(3rem - 2px); // exclude top and bottom borders

    ${e=>"no-border"!==e.$styleType&&c`
            padding-left: ${zt["spacing-16"]};
            padding-right: ${e.$showClear?0:zt["spacing-16"]};
        `}
`,yn=l(bn)`
    height: auto;
    padding: ${zt["spacing-12"]} ${zt["spacing-16"]};

    cursor: pointer;
    color: ${Ct.icon};

    ${e=>"no-border"===e.$styleType&&c`
            margin-right: -${zt["spacing-12"]};
        `}
`,fn=l(u)`
    height: 1.25rem;
    width: 1.25rem;
    vertical-align: middle;
`,pn=l.div`
    display: flex;
    width: 100%;
`,xn=l(hn)`
    display: flex;
    align-items: center;
    width: 100%;
`,vn=n.forwardRef(((n,a)=>{var{value:o,spacing:l,type:d,error:c,disabled:u,readOnly:h,onChange:b,onClear:m,allowClear:y=!1,className:f,styleType:p="bordered"}=n,x=g(n,["value","spacing","type","error","disabled","readOnly","onChange","onClear","allowClear","className","styleType"]);const v=i();s(a,(()=>v.current),[]);const F=function({ref:e,formatter:r}){return()=>{const t=e.current,n=t.value,i=r(n),s=n.substring(0,t.selectionEnd),a=r(s),o=s.length-a.length,l=Math.max(0,t.selectionEnd-o);return{nextValue:i,updateCaretPosition:()=>{t.value=i,t.setSelectionRange(l,l)}}}}({ref:v,formatter:e=>on.transformWithSpaces(e,l)}),w=e=>{b&&(D()?C(e):b(e))},$=()=>{m&&m(),v&&v.current&&v.current.focus()},D=()=>"tel"===d&&l,C=e=>{const{nextValue:r,updateCaretPosition:t}=F(),n=r.replace(/\s/g,"");e.target.value=n,b(e),t()},E=o?(e=>e?D()?on.transformWithSpaces(e,l):e:"")(o):o,B=y&&!u&&!h&&!!o,A=()=>e(t,{children:[r(mn,Object.assign({"data-testid":"input",ref:v,disabled:u,value:E,onChange:w,type:d,readOnly:h,$showClear:B,$styleType:p},x)),B&&r(yn,Object.assign({onClick:$,type:"button",$styleType:p},{children:r(fn,{"aria-hidden":!0})}))]});return r(t,{children:"no-border"===p?r(pn,Object.assign({className:f},{children:A()})):r(xn,Object.assign({$disabled:u,$error:c,$readOnly:h,className:f},{children:A()}))})})),Fn=l.div`
    display: flex;
    flex-direction: column;
`,wn=l.div`
    display: flex;
    flex-direction: row;
    align-self: center;
    gap: ${zt["spacing-8"]};
`,$n=l(vn)`
    margin-bottom: 0rem !important;

    input {
        text-align: center;

        ${Mt.MaxWidth.xs} {
            padding: 0 ${zt["spacing-8"]};
        }
    }
`,Dn=l(Lt.Small)`
    margin: ${zt["spacing-32"]} 0;
`;var Cn;l.div`
    position: fixed;
    left: 0;
    top: 0;
    height: 0;
    width: 0;
    visibility: hidden;
    z-index: ${e=>e.$zIndex};

    ${e=>{if(e.$show)return c`
                height: 100%;
                width: 100vw;
                visibility: visible;
            `}}
`,l.div`
    position: absolute;
    left: 0;
    top: 0;
    background-color: ${e=>e.$stacked?Ct["overlay-subtle"]:Ct["overlay-strong"]};
    backdrop-filter: ${e=>(e=>{let r="";return e&&(r+="blur(10px)"),r.length>0?r:"none"})(e.$backgroundBlur)};
    transition: opacity 200ms ease;

    ${e=>{let r="";return e.$show?r+=c`
                visibility: visible;
                opacity: 1;
                pointer-events: auto;
                height: 100%;
                width: 100vw;
            `:r+=c`
                visibility: hidden;
                opacity: 0;
                transition-delay: ${e.$disableTransition?"0ms":"400ms"};
                pointer-events: none;
                height: 0;
                width: 0;
            `,e.$disableTransition&&(r+=c`
                transition: none;
            `),r}}
`,function(e){e.Ready="overlay-context-ready",e.Change="overlay-context-change"}(Cn||(Cn={}));l.div`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 100%;
    overflow: hidden;
    ${e=>{return r=e.show,t=e.animationFrom||"bottom",r?`\n\t\t\t${t}: 0;\n\t\t\topacity: 1;\n\t\t\ttransition: all 300ms cubic-bezier(0.21, 0.79, 0.53, 1);\n\t\t\ttransition-delay: 200ms;\n\t\t`:`\n\t\t${t}: -3%;\n\t\topacity: 0;\n\t\ttransition: all 300ms cubic-bezier(0.4, 0.34, 0.38, 1);\n\t`;var r,t}}

    ${Mt.MaxWidth.sm} {
        height: calc(
            ${e=>e.verticalHeight?`${e.verticalHeight}px`:"1vh"} * 100
        );

        top: ${e=>e.offsetTop||0}px;
    }
`;const En=(e,r,t=!1)=>{const n=`${e}-${r.toLowerCase()}`;return c`
        ${Et[n]}
        ${t?"margin-bottom: 1.05em;":"margin-bottom: 0;"}
    `},Bn=(e,r)=>c`
    ${En(e,r.weight||"regular",r.paragraph)}
    ${((e=!1,r=!1)=>r?c`
            display: block;
        `:e?c`
            display: inline;
        `:c`
            display: block;
        `)(r.inline,r.paragraph)}
    color: ${Ct.text};
`;var An;!function(t){const n=(e,r,t)=>{const n=l(e).attrs((({inline:e})=>({as:e?"span":void 0})))`
            ${e=>Bn(r,e)}
        `;return n.displayName=`Typography.${t}`,n};t.HeaderXXL=n("h1","header-xxl","HeaderXXL"),t.HeaderXL=n("h2","header-xl","HeaderXL"),t.HeaderLG=n("h3","header-lg","HeaderLG"),t.HeaderMD=n("h4","header-md","HeaderMD"),t.HeaderSM=n("h5","header-sm","HeaderSM"),t.HeaderXS=n("h6","header-xs","HeaderXS");const i=(e,r)=>{const t=l.p.attrs((({inline:e})=>({as:e?"span":void 0})))`
            ${r=>Bn(e,r)}
        `;return t.displayName=`Typography.${r}`,t};t.BodyBL=i("body-baseline","BodyBL"),t.BodyMD=i("body-md","BodyMD"),t.BodySM=i("body-sm","BodySM"),t.BodyXS=i("body-xs","BodyXS");const s=(t,n)=>{const i=l.a`
            ${e=>c`
                ${En(t,e.weight||"regular")}
                color: ${Ct.hyperlink};
                text-decoration: none;

                :hover,
                :active,
                :focus {
                    color: ${Ct["text-hover"]};
                }
            `}
        `,s=t=>{var{external:n=!1,children:s}=t,a=g(t,["external","children"]);return e(i,Object.assign({},a,{children:[s,n&&r(zn,{})]}))};return s.displayName=`Typography.${n}`,s};t.LinkBL=s("body-baseline","LinkBL"),t.LinkMD=s("body-md","LinkMD"),t.LinkSM=s("body-sm","LinkSM"),t.LinkXS=s("body-xs","LinkXS")}(An||(An={}));const zn=l(h)`
    height: 1lh;
    width: 1em;
    margin-left: 0.4em;
    vertical-align: middle;
`,Sn=l.div`
    border-radius: ${St.md};
    background: ${Ct.bg};
    padding: ${zt["spacing-16"]} ${zt["spacing-32"]};
    box-shadow: 0 2px 8px rgba(104, 104, 104, 0.25);
`,Mn=l.button`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: ${zt["spacing-32"]};
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

        ${({$highlight:e})=>e&&c`
                background-color: ${Ct["bg-hover-neutral"]};
            `}
    }
`,kn=n.forwardRef(((e,t)=>{var{children:n,focusHighlight:i=!0,focusOutline:s="none",type:a="button"}=e,o=g(e,["children","focusHighlight","focusOutline","type"]);return r(Mn,Object.assign({ref:t,$outline:s,$highlight:i,type:a},o,{children:n}))})),On=l.div`
    position: relative;
    display: flex;
    flex-direction: column;
    width: 40rem;
    max-height: 70%;
    background: ${Ct.bg};
    box-shadow: 0 0 10px 2px rgba(0, 0, 0, 0.45);
    border-radius: 0.75rem;
    overflow: hidden;

    ${Mt.MaxWidth.md} {
        width: 90%;
        max-height: 70%;
    }
`,_n=l(kn)`
    position: absolute;
    top: var(--close-button-top-inset, ${zt["spacing-16"]});
    right: var(--close-button-right-inset, ${zt["spacing-16"]});
    padding: 0;
    color: ${Ct.icon};

    svg {
        height: 2rem;
        width: 2rem;
    }

    ${Mt.MaxWidth.sm} {
        right: var(--close-button-right-inset, ${zt["spacing-20"]});
    }
`,Yn=e=>{const{textSize:r}=e||{};return c`
        // Text styling
        ${r&&Et[`${r}-regular`]}

        strong {
            font-weight: ${Et.Spec["weight-semibold"]};
            ${r&&Et[`${r}-semibold`]};
        }

        p {
            margin: 0;
        }

        // Link styling
        a {
            font-weight: ${Et.Spec["weight-semibold"]};
            ${r&&Et[`${r}-semibold`]}
            color: ${Ct.hyperlink};
            text-decoration: none;

            svg {
                color: ${Ct["icon-primary"]};
                height: 1lh;
                width: 1em;
                margin-left: 0.4rem;
                vertical-align: middle;
            }

            :hover,
            :active,
            :visited,
            :focus {
                color: ${Ct["hyperlink-hover"]};

                svg {
                    color: ${Ct["icon-hover"]};
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
    `};l.div`
    max-width: 30rem;
    padding: 0 1rem;
    pointer-events: auto;
`,l((e=>{var{children:t}=e,n=g(e,["children"]);const i=n["data-testid"]||"card";return r(Sn,Object.assign({},n,{"data-testid":i},{children:"string"==typeof t?r(An.BodyBL,{children:t}):t}))}))`
    color: ${Ct.text};
    ${Yn({textSize:"body-md"})}

    ${Mt.MaxWidth.sm} {
        display: none;
    }
`,l((t=>{var{id:n="modal-box",children:i,onClose:s,showCloseButton:a=!0}=t,o=g(t,["id","children","onClose","showCloseButton"]);return e(On,Object.assign({"data-testid":n},o,{onClick:e=>{e.stopPropagation()}},{children:[a&&r(_n,Object.assign({onClick:s,"data-testid":"close-button",focusHighlight:!1,focusOutline:"browser"},{children:r(u,{})})),i]}))}))`
    padding: 3.5rem 1.25rem 2.5rem;
`,l.div`
    overflow-y: scroll;

    ::-webkit-scrollbar {
        display: none; /* Chrome/Safari/Webkit */
    }

    color: ${Ct.text};
    ${Yn({textSize:"body-md"})}
`,l.div`
    display: inline;
    width: fit-content;
    cursor: pointer;
    position: relative;
`;const Tn=e=>{switch(e){case"underline":return"text-decoration: underline 1px;";case"underline-dashed":return"text-decoration: underline dashed 1px;"}};l.span`
    color: ${Ct["text-primary"]};
    font-weight: 600;
    text-underline-position: under;

    ${({$defaultStyle:e})=>Tn(e)}

    &:hover,
    &:focus-visible {
        color: ${Ct["text-hover"]};
        ${({$hoverStyle:e})=>Tn(e)}
    }

    svg {
        height: 1lh; // align vertically
        width: 1em; // scale icon with font size
        vertical-align: top;
    }
`,l.span`
    ${e=>!e.$standalone&&"margin-left: 0.25rem;"}
`,l.div`
    padding-left: ${zt["spacing-4"]};
    display: inline;
`,l.label`
    color: ${Ct["text-subtle"]};
    margin-bottom: ${zt["spacing-8"]};
    display: inline-block;

    ${Yn({textSize:"body-md"})}
    font-weight: ${Et.Spec["weight-semibold"]};
`;const Ln=l.p`
    ${Et["body-sm-semibold"]}
    color: ${Ct["text-error"]};
    margin-top: ${zt["spacing-8"]};
    margin-bottom: 0;
    outline: none;
`;l.span`
    ${Et["body-sm-regular"]}
    color: ${Ct["text-subtler"]};
    display: block;
`;const jn=e=>r(Ln,Object.assign({},e)),In=t=>{var{id:n,value:s=[],"data-testid":l,className:d,cooldownDuration:c,actionButtonProps:u,errorMessage:h,numOfInput:b,onChange:m,onCooldownStart:y,onCooldownEnd:f}=t,p=g(t,["id","value","data-testid","className","cooldownDuration","actionButtonProps","errorMessage","numOfInput","onChange","onCooldownStart","onCooldownEnd"]);const x=null!=u?u:{},{disabled:v,onClick:F,styleType:w="secondary"}=x,$=g(x,["disabled","onClick","styleType"]),D=i([]),C=i(m),[E,B]=a(new Array(b).fill("")),[A,z]=a(c),[S,M]=a(new Date);o((()=>{var e;return null===(e=null==D?void 0:D.current[0])||void 0===e||e.focus(),document.addEventListener("paste",_),()=>document.removeEventListener("paste",_)}),[]),o((()=>{if(0!==c){y&&y();const e=L();return()=>e()}}),[S]),o((()=>{C.current=m}),[m]),o((()=>{s.length===b&&B(s)}),[s]);const k=e=>r=>{var t;const n=r.target.value.replace(/[^0-9]/g,"");if(Y(n)){const r=[...E];r[e]=n.substring(n.length-1),null===(t=D.current[e+1])||void 0===t||t.focus(),B(r),m&&m(r)}},O=e=>r=>{var t;const{key:n,code:i}=r;if("Backspace"===n||"Backspace"===i){const r=[...E];""!==r[e]?r[e]="":0!==e&&(r[e-1]="",null===(t=D.current[e-1])||void 0===t||t.focus()),B(r),m&&m(r)}},_=e=>{const r=e.clipboardData.getData("text"),t=r.split("");r&&Y(r,b)?(B(t),C.current&&C.current(t)):e.preventDefault()},Y=(e,r=1)=>!!e&&RegExp(`^[0-9]{${r}}$`).test(e),T=()=>{const e=Date.now(),r=1e3*c;return e<S.valueOf()+r},L=()=>{const e=setInterval((()=>{const r=Date.now(),t=1e3*c,n=Math.ceil((S.valueOf()+t-r)/1e3);z(n),n<=0&&(f&&f(),clearInterval(e))}),1e3);return()=>{clearInterval(e)}},j=(e,r,t)=>t?`${t}-${r}-${e+1}`:`${r}-${e+1}`;return e(Fn,Object.assign({id:n,"data-testid":l,className:d},{children:[r(wn,{children:E.map(((e,t)=>r($n,Object.assign({id:j(t,"otp-input",n),"data-testid":j(t,"otp-input",l),"aria-label":`Enter OTP character ${t+1}`,ref:e=>D.current[t]=e,type:"text",inputMode:"numeric",value:e,error:!!h,onChange:k(t),onKeyDown:O(t),autoComplete:"off"},p),t)))}),h&&r(jn,{children:h}),r(Dn,Object.assign({styleType:w,type:"button"},$,{onClick:e=>{B(new Array(b).fill("")),T()||(M(new Date),z(c)),F&&F(e)},disabled:v||T()},{children:$.children?$.children:"Resend OTP"+(A?` in ${A} second${A>1?"s":""}`:"")}))]}))};export{In as OtpInput};
//# sourceMappingURL=index.js.map
