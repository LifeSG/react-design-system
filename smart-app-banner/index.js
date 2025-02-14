import{jsxs as e,jsx as r,Fragment as s}from"react/jsx-runtime";import n from"react";import{CrossIcon as a}from"@lifesg/react-icons/cross";import{StarIcon as o}from"@lifesg/react-icons/star";import{StarFillIcon as i}from"@lifesg/react-icons/star-fill";import{StarHalfIcon as l}from"@lifesg/react-icons/star-half";import t,{keyframes as d,css as b}from"styled-components";import{ExternalIcon as c}from"@lifesg/react-icons/external";function g(e,r){var s={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&r.indexOf(n)<0&&(s[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(n=Object.getOwnPropertySymbols(e);a<n.length;a++)r.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(s[n[a]]=e[n[a]])}return s}"function"==typeof SuppressedError&&SuppressedError;const u=t.div`
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
`,h=t.div`
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
`,y=t(h)`
    animation-delay: -0.45s;
`,p=t(h)`
    animation-delay: -0.3s;
`,x=t(h)`
    animation-delay: -0.15s;
`;var f="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};function F(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var v=Array.isArray,w="object"==typeof f&&f&&f.Object===Object&&f,E="object"==typeof self&&self&&self.Object===Object&&self,C=w||E||Function("return this")(),D=C.Symbol,B=D,$=Object.prototype,A=$.hasOwnProperty,z=$.toString,_=B?B.toStringTag:void 0;var k=function(e){var r=A.call(e,_),s=e[_];try{e[_]=void 0;var n=!0}catch(e){}var a=z.call(e);return n&&(r?e[_]=s:delete e[_]),a},S=Object.prototype.toString;var O=k,j=function(e){return S.call(e)},L=D?D.toStringTag:void 0;var M=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":L&&L in Object(e)?O(e):j(e)};var T=M,N=function(e){return null!=e&&"object"==typeof e};var P=function(e){return"symbol"==typeof e||N(e)&&"[object Symbol]"==T(e)},X=v,H=P,I=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,V=/^\w*$/;var R=function(e,r){if(X(e))return!1;var s=typeof e;return!("number"!=s&&"symbol"!=s&&"boolean"!=s&&null!=e&&!H(e))||(V.test(e)||!I.test(e)||null!=r&&e in Object(r))};var W=function(e){var r=typeof e;return null!=e&&("object"==r||"function"==r)},U=M,G=W;var Y,Z=function(e){if(!G(e))return!1;var r=U(e);return"[object Function]"==r||"[object GeneratorFunction]"==r||"[object AsyncFunction]"==r||"[object Proxy]"==r},q=C["__core-js_shared__"],J=(Y=/[^.]+$/.exec(q&&q.keys&&q.keys.IE_PROTO||""))?"Symbol(src)_1."+Y:"";var K=function(e){return!!J&&J in e},Q=Function.prototype.toString;var ee=Z,re=K,se=W,ne=function(e){if(null!=e){try{return Q.call(e)}catch(e){}try{return e+""}catch(e){}}return""},ae=/^\[object .+?Constructor\]$/,oe=Function.prototype,ie=Object.prototype,le=oe.toString,te=ie.hasOwnProperty,de=RegExp("^"+le.call(te).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");var be=function(e,r){return null==e?void 0:e[r]},ce=function(e){return!(!se(e)||re(e))&&(ee(e)?de:ae).test(ne(e))},ge=be;var ue=function(e,r){var s=ge(e,r);return ce(s)?s:void 0},me=ue(Object,"create"),he=me;var ye=function(){this.__data__=he?he(null):{},this.size=0};var pe=function(e){var r=this.has(e)&&delete this.__data__[e];return this.size-=r?1:0,r},xe=me,fe=Object.prototype.hasOwnProperty;var Fe=function(e){var r=this.__data__;if(xe){var s=r[e];return"__lodash_hash_undefined__"===s?void 0:s}return fe.call(r,e)?r[e]:void 0},ve=me,we=Object.prototype.hasOwnProperty;var Ee=function(e){var r=this.__data__;return ve?void 0!==r[e]:we.call(r,e)},Ce=me;var De=function(e,r){var s=this.__data__;return this.size+=this.has(e)?0:1,s[e]=Ce&&void 0===r?"__lodash_hash_undefined__":r,this},Be=ye,$e=pe,Ae=Fe,ze=Ee,_e=De;function ke(e){var r=-1,s=null==e?0:e.length;for(this.clear();++r<s;){var n=e[r];this.set(n[0],n[1])}}ke.prototype.clear=Be,ke.prototype.delete=$e,ke.prototype.get=Ae,ke.prototype.has=ze,ke.prototype.set=_e;var Se=ke;var Oe=function(){this.__data__=[],this.size=0};var je=function(e,r){return e===r||e!=e&&r!=r};var Le=function(e,r){for(var s=e.length;s--;)if(je(e[s][0],r))return s;return-1},Me=Le,Te=Array.prototype.splice;var Ne=function(e){var r=this.__data__,s=Me(r,e);return!(s<0)&&(s==r.length-1?r.pop():Te.call(r,s,1),--this.size,!0)},Pe=Le;var Xe=function(e){var r=this.__data__,s=Pe(r,e);return s<0?void 0:r[s][1]},He=Le;var Ie=function(e){return He(this.__data__,e)>-1},Ve=Le;var Re=function(e,r){var s=this.__data__,n=Ve(s,e);return n<0?(++this.size,s.push([e,r])):s[n][1]=r,this},We=Oe,Ue=Ne,Ge=Xe,Ye=Ie,Ze=Re;function qe(e){var r=-1,s=null==e?0:e.length;for(this.clear();++r<s;){var n=e[r];this.set(n[0],n[1])}}qe.prototype.clear=We,qe.prototype.delete=Ue,qe.prototype.get=Ge,qe.prototype.has=Ye,qe.prototype.set=Ze;var Je=qe,Ke=ue(C,"Map"),Qe=Se,er=Je,rr=Ke;var sr=function(e){var r=typeof e;return"string"==r||"number"==r||"symbol"==r||"boolean"==r?"__proto__"!==e:null===e};var nr=function(e,r){var s=e.__data__;return sr(r)?s["string"==typeof r?"string":"hash"]:s.map},ar=nr;var or=function(e){var r=ar(this,e).delete(e);return this.size-=r?1:0,r},ir=nr;var lr=function(e){return ir(this,e).get(e)},tr=nr;var dr=function(e){return tr(this,e).has(e)},br=nr;var cr=function(e,r){var s=br(this,e),n=s.size;return s.set(e,r),this.size+=s.size==n?0:1,this},gr=function(){this.size=0,this.__data__={hash:new Qe,map:new(rr||er),string:new Qe}},ur=or,mr=lr,hr=dr,yr=cr;function pr(e){var r=-1,s=null==e?0:e.length;for(this.clear();++r<s;){var n=e[r];this.set(n[0],n[1])}}pr.prototype.clear=gr,pr.prototype.delete=ur,pr.prototype.get=mr,pr.prototype.has=hr,pr.prototype.set=yr;var xr=pr;function fr(e,r){if("function"!=typeof e||null!=r&&"function"!=typeof r)throw new TypeError("Expected a function");var s=function(){var n=arguments,a=r?r.apply(this,n):n[0],o=s.cache;if(o.has(a))return o.get(a);var i=e.apply(this,n);return s.cache=o.set(a,i)||o,i};return s.cache=new(fr.Cache||xr),s}fr.Cache=xr;var Fr=fr;var vr=function(e){var r=Fr(e,(function(e){return 500===s.size&&s.clear(),e})),s=r.cache;return r},wr=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,Er=/\\(\\)?/g,Cr=vr((function(e){var r=[];return 46===e.charCodeAt(0)&&r.push(""),e.replace(wr,(function(e,s,n,a){r.push(n?a.replace(Er,"$1"):s||e)})),r}));var Dr=function(e,r){for(var s=-1,n=null==e?0:e.length,a=Array(n);++s<n;)a[s]=r(e[s],s,e);return a},Br=v,$r=P,Ar=D?D.prototype:void 0,zr=Ar?Ar.toString:void 0;var _r=function e(r){if("string"==typeof r)return r;if(Br(r))return Dr(r,e)+"";if($r(r))return zr?zr.call(r):"";var s=r+"";return"0"==s&&1/r==-1/0?"-0":s},kr=_r;var Sr=v,Or=R,jr=Cr,Lr=function(e){return null==e?"":kr(e)};var Mr=P;var Tr=function(e,r){return Sr(e)?e:Or(e,r)?[e]:jr(Lr(e))},Nr=function(e){if("string"==typeof e||Mr(e))return e;var r=e+"";return"0"==r&&1/e==-1/0?"-0":r};var Pr=function(e,r){for(var s=0,n=(r=Tr(r,e)).length;null!=e&&s<n;)e=e[Nr(r[s++])];return s&&s==n?e:void 0};var Xr=F((function(e,r,s){var n=null==e?void 0:Pr(e,r);return void 0===n?s:n}));const Hr=(e,r,s)=>Xr(s,r)||Xr(e,r),Ir=(e,r)=>{const s=r||e.defaultValue;return Xr(e.collections,s)},Vr={collections:{lifesg:{"duration-150":"150ms","duration-250":"250ms","duration-350":"350ms","duration-500":"500ms","duration-800":"800ms","duration-1000":"1000ms","ease-default":"cubic-bezier(0.45, 0.05, 0.55, 0.95)","ease-standard":"cubic-bezier(0.86, 0, 0.07, 1)","ease-entrance":"cubic-bezier(0.18, 0.13, 0, 1)","ease-exit":"cubic-bezier(1, 0, 0.8, 0.85)"}},defaultValue:"lifesg"},Rr=e=>r=>{var s;const n=r.theme,a=Ir(Vr,null==n?void 0:n.motionScheme);return(null===(s=null==n?void 0:n.overrides)||void 0===s?void 0:s.motion)?Hr(a,e,n.overrides.motion):a[e]},Wr={"duration-150":Rr("duration-150"),"duration-250":Rr("duration-250"),"duration-350":Rr("duration-350"),"duration-500":Rr("duration-500"),"duration-800":Rr("duration-800"),"duration-1000":Rr("duration-1000"),"ease-default":Rr("ease-default"),"ease-standard":Rr("ease-standard"),"ease-entrance":Rr("ease-entrance"),"ease-exit":Rr("ease-exit")},Ur={collections:{lifesg:{"brand-10":"#2C0C0B","brand-20":"#4C1513","brand-30":"#6C1D1B","brand-40":"#922825","brand-50":"#BF3431","brand-60":"#F15D5A","brand-70":"#F69491","brand-80":"#FABAB7","brand-90":"#FCD7D2","brand-95":"#FFEBE7","brand-100":"#FFF6F4","primary-10":"#001731","primary-20":"#002752","primary-30":"#003874","primary-40":"#004D9F","primary-50":"#1768BE","primary-60":"#3C91EC","primary-70":"#6CB4FF","primary-80":"#A5CDFF","primary-90":"#CFE1FE","primary-95":"#E8F0FE","primary-100":"#F7F9FF","secondary-10":"#131529","secondary-20":"#222547","secondary-30":"#2F3565","secondary-40":"#42498B","secondary-50":"#5B62A7","secondary-60":"#858CBD","secondary-70":"#A8ADCF","secondary-80":"#C6C9E0","secondary-90":"#DDDFEC","secondary-95":"#EDEEF5","secondary-100":"#F8F8FB","neutral-10":"#161616","neutral-20":"#282828","neutral-30":"#393939","neutral-40":"#4E4E4E","neutral-50":"#686868","neutral-60":"#8E8E8E","neutral-70":"#AFAFB0","neutral-80":"#C7CACA","neutral-90":"#DDE1E2","neutral-95":"#EDEFEF","neutral-100":"#F9F9F9","success-10":"#081A0F","success-20":"#0E2D1B","success-30":"#154126","success-40":"#1C5A34","success-50":"#257645","success-60":"#44A068","success-70":"#64C189","success-80":"#80DCA5","success-90":"#B4ECCB","success-95":"#D5F6E2","success-100":"#EFFCF4","warning-10":"#221302","warning-20":"#3B2204","warning-30":"#543106","warning-40":"#744408","warning-50":"#98590C","warning-60":"#D07A13","warning-70":"#E4A244","warning-80":"#F5C26C","warning-90":"#FADBA6","warning-95":"#FCECD4","warning-100":"#FDF7F0","error-10":"#330505","error-20":"#550808","error-30":"#750C0C","error-40":"#9E130F","error-50":"#CB2213","error-60":"#DE6C6C","error-70":"#E89B9B","error-80":"#EFBEBE","error-90":"#F5D9D9","error-95":"#F9ECEC","error-100":"#FCF7F7","info-10":"#021824","info-20":"#032B3F","info-30":"#053D59","info-40":"#065478","info-50":"#176E9B","info-60":"#5296BE","info-70":"#82B5DA","info-80":"#ACCFE7","info-90":"#CCE3F1","info-95":"#E3F1F8","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000","primary-inverse":"#FEAB10"},bookingsg:{"brand-10":"#2C0C0B","brand-20":"#4C1513","brand-30":"#6C1D1B","brand-40":"#922825","brand-50":"#BF3431","brand-60":"#F15D5A","brand-70":"#F69491","brand-80":"#FABAB7","brand-90":"#FCD7D2","brand-95":"#FFEBE7","brand-100":"#FFF6F4","primary-10":"#1A122C","primary-20":"#2F1F4D","primary-30":"#422D6E","primary-40":"#5B3D97","primary-50":"#7654BC","primary-60":"#9A82CD","primary-70":"#B7A7D8","primary-80":"#CFC5E5","primary-90":"#E3DDF0","primary-95":"#F0EDF7","primary-100":"#F9F8FC","secondary-10":"#0E1723","secondary-20":"#18293D","secondary-30":"#233A57","secondary-40":"#305078","secondary-50":"#4B6A8F","secondary-60":"#7B91A9","secondary-70":"#A1B1C3","secondary-80":"#C1CBD7","secondary-90":"#DBE1E8","secondary-95":"#EBEFF2","secondary-100":"#F7F8FA","neutral-10":"#161616","neutral-20":"#282828","neutral-30":"#393939","neutral-40":"#4E4E4E","neutral-50":"#686868","neutral-60":"#8E8E8E","neutral-70":"#AFAFB0","neutral-80":"#C7CACA","neutral-90":"#DDE1E2","neutral-95":"#EDEFEF","neutral-100":"#F9F9F9","success-10":"#081A0F","success-20":"#0E2D1B","success-30":"#154126","success-40":"#1C5A34","success-50":"#257645","success-60":"#44A068","success-70":"#64C189","success-80":"#80DCA5","success-90":"#B4ECCB","success-95":"#D5F6E2","success-100":"#EFFCF4","warning-10":"#221302","warning-20":"#3B2204","warning-30":"#543106","warning-40":"#744408","warning-50":"#98590C","warning-60":"#D07A13","warning-70":"#E4A244","warning-80":"#F5C26C","warning-90":"#FADBA6","warning-95":"#FCECD4","warning-100":"#FDF7F0","error-10":"#330505","error-20":"#550808","error-30":"#750C0C","error-40":"#9E130F","error-50":"#CB2213","error-60":"#DE6C6C","error-70":"#E89B9B","error-80":"#EFBEBE","error-90":"#F5D9D9","error-95":"#F9ECEC","error-100":"#FCF7F7","info-10":"#021824","info-20":"#032B3F","info-30":"#053D59","info-40":"#065478","info-50":"#176E9B","info-60":"#5296BE","info-70":"#82B5DA","info-80":"#ACCFE7","info-90":"#CCE3F1","info-95":"#E3F1F8","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000","primary-inverse":"#FEAB10"},rbs:{"brand-10":"#0E123A","brand-20":"#191E65","brand-30":"#232B90","brand-40":"#303BC5","brand-50":"#494CFF","brand-60":"#AD6EFF","brand-70":"#AEA4FF","brand-80":"#C5C4FF","brand-90":"#DDDCFF","brand-95":"#EDECFF","brand-100":"#F8F8FF","primary-10":"#10152B","primary-20":"#1C254B","primary-30":"#28356C","primary-40":"#38489A","primary-50":"#4D5AD7","primary-60":"#7487F2","primary-70":"#9AAAFC","primary-80":"#BDC7FD","primary-90":"#DADFFB","primary-95":"#ECEEFE","primary-100":"#F7F8FF","secondary-10":"#19151D","secondary-20":"#2B2533","secondary-30":"#3E3649","secondary-40":"#564A64","secondary-50":"#6F637D","secondary-60":"#948B9F","secondary-70":"#B3ACBB","secondary-80":"#CCC8D2","secondary-90":"#E1DEE4","secondary-95":"#EFEEF1","secondary-100":"#F9F8F9","neutral-10":"#161616","neutral-20":"#282828","neutral-30":"#393939","neutral-40":"#4E4E4E","neutral-50":"#686868","neutral-60":"#8E8E8E","neutral-70":"#AFAFB0","neutral-80":"#C7CACA","neutral-90":"#DDE1E2","neutral-95":"#EDEFEF","neutral-100":"#F9F9F9","success-10":"#081A0F","success-20":"#0E2D1B","success-30":"#154126","success-40":"#1C5A34","success-50":"#257645","success-60":"#44A068","success-70":"#64C189","success-80":"#80DCA5","success-90":"#B4ECCB","success-95":"#D5F6E2","success-100":"#EFFCF4","warning-10":"#221302","warning-20":"#3B2204","warning-30":"#543106","warning-40":"#744408","warning-50":"#98590C","warning-60":"#D07A13","warning-70":"#E4A244","warning-80":"#F5C26C","warning-90":"#FADBA6","warning-95":"#FCECD4","warning-100":"#FDF7F0","error-10":"#330505","error-20":"#550808","error-30":"#750C0C","error-40":"#9E130F","error-50":"#CB2213","error-60":"#DE6C6C","error-70":"#E89B9B","error-80":"#EFBEBE","error-90":"#F5D9D9","error-95":"#F9ECEC","error-100":"#FCF7F7","info-10":"#021824","info-20":"#032B3F","info-30":"#053D59","info-40":"#065478","info-50":"#176E9B","info-60":"#5296BE","info-70":"#82B5DA","info-80":"#ACCFE7","info-90":"#CCE3F1","info-95":"#E3F1F8","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000","primary-inverse":"#FEAB10"},mylegacy:{"brand-10":"#2C0C0B","brand-20":"#4C1513","brand-30":"#6C1D1B","brand-40":"#922825","brand-50":"#BF3431","brand-60":"#F15D5A","brand-70":"#F69491","brand-80":"#FABAB7","brand-90":"#FCD7D2","brand-95":"#FFEBE7","brand-100":"#FFF6F4","primary-10":"#0011924","primary-20":"#032B40","primary-30":"#043D5A","primary-40":"#05547B","primary-50":"#096EA1","primary-60":"#2098D3","primary-70":"#5CB9E8","primary-80":"#8BD3F6","primary-90":"#BEE6FA","primary-95":"#E2F2FA","primary-100":"#F4FAFC","secondary-10":"#131529","secondary-20":"#222547","secondary-30":"#2F3565","secondary-40":"#42498B","secondary-50":"#5B62A7","secondary-60":"#858CBD","secondary-70":"#A8ADCF","secondary-80":"#C6C9E0","secondary-90":"#DDDFEC","secondary-95":"#EDEEF5","secondary-100":"#F8F8FB","neutral-10":"#161616","neutral-20":"#282828","neutral-30":"#393939","neutral-40":"#4E4E4E","neutral-50":"#686868","neutral-60":"#8E8E8E","neutral-70":"#AFAFB0","neutral-80":"#C7CACA","neutral-90":"#DDE1E2","neutral-95":"#EDEFEF","neutral-100":"#F9F9F9","success-10":"#081A0F","success-20":"#0E2D1B","success-30":"#154126","success-40":"#1C5A34","success-50":"#257645","success-60":"#44A068","success-70":"#64C189","success-80":"#80DCA5","success-90":"#B4ECCB","success-95":"#D5F6E2","success-100":"#EFFCF4","warning-10":"#221302","warning-20":"#3B2204","warning-30":"#543106","warning-40":"#744408","warning-50":"#98590C","warning-60":"#D07A13","warning-70":"#E4A244","warning-80":"#F5C26C","warning-90":"#FADBA6","warning-95":"#FCECD4","warning-100":"#FDF7F0","error-10":"#330505","error-20":"#550808","error-30":"#750C0C","error-40":"#9E130F","error-50":"#CB2213","error-60":"#DE6C6C","error-70":"#E89B9B","error-80":"#EFBEBE","error-90":"#F5D9D9","error-95":"#F9ECEC","error-100":"#FCF7F7","info-10":"#021824","info-20":"#032B3F","info-30":"#053D59","info-40":"#065478","info-50":"#176E9B","info-60":"#5296BE","info-70":"#82B5DA","info-80":"#ACCFE7","info-90":"#CCE3F1","info-95":"#E3F1F8","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000","primary-inverse":"#FEAB10"},ccube:{"brand-10":"#1F1221","brand-20":"#371F3B","brand-30":"#4E2C53","brand-40":"#6B3E73","brand-50":"#8D5197","brand-60":"#FF3399","brand-70":"#FF88C4","brand-80":"#FFB3D9","brand-90":"#FFD4E9","brand-95":"#FFE8F3","brand-100":"#FFD6EB","primary-10":"#1F1221","primary-20":"#371F3B","primary-30":"#4E2C53","primary-40":"#6B3E73","primary-50":"#8D5197","primary-60":"#B07DB7","primary-70":"#C7A3CC","primary-80":"#D9C2DD","primary-90":"#E9DBEB","primary-95":"#F3ECF4","primary-100":"#FAF7FA","secondary-10":"#2D091B","secondary-20":"#4D0F2E","secondary-30":"#6B1540","secondary-40":"#931D58","secondary-50":"#C02673","secondary-60":"#FF409F","secondary-70":"#FF88C4","secondary-80":"#FFB3D9","secondary-90":"#FFD4E9","secondary-95":"#FFE8F3","secondary-100":"#FFF8FC","neutral-10":"#161616","neutral-20":"#282828","neutral-30":"#393939","neutral-40":"#4E4E4E","neutral-50":"#686868","neutral-60":"#8E8E8E","neutral-70":"#AFAFB0","neutral-80":"#C7CACA","neutral-90":"#DDE1E2","neutral-95":"#EDEFEF","neutral-100":"#F9F9F9","success-10":"#081A0F","success-20":"#0E2D1B","success-30":"#154126","success-40":"#1C5A34","success-50":"#257645","success-60":"#44A068","success-70":"#64C189","success-80":"#80DCA5","success-90":"#B4ECCB","success-95":"#D5F6E2","success-100":"#EFFCF4","warning-10":"#221302","warning-20":"#3B2204","warning-30":"#543106","warning-40":"#744408","warning-50":"#98590C","warning-60":"#D07A13","warning-70":"#E4A244","warning-80":"#F5C26C","warning-90":"#FADBA6","warning-95":"#FCECD4","warning-100":"#FDF7F0","error-10":"#330505","error-20":"#550808","error-30":"#750C0C","error-40":"#9E130F","error-50":"#CB2213","error-60":"#DE6C6C","error-70":"#E89B9B","error-80":"#EFBEBE","error-90":"#F5D9D9","error-95":"#F9ECEC","error-100":"#FCF7F7","info-10":"#021824","info-20":"#032B3F","info-30":"#053D59","info-40":"#065478","info-50":"#176E9B","info-60":"#5296BE","info-70":"#82B5DA","info-80":"#ACCFE7","info-90":"#CCE3F1","info-95":"#E3F1F8","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000","primary-inverse":"#FEAB10"}},defaultValue:"lifesg"},Gr=e=>r=>{var s;const n=r.theme,a=Ir(Ur,null==n?void 0:n.colourScheme);return(null===(s=null==n?void 0:n.overrides)||void 0===s?void 0:s.primitiveColour)?Hr(a,e,n.overrides.primitiveColour):a[e]},Yr={"brand-10":Gr("brand-10"),"brand-20":Gr("brand-20"),"brand-30":Gr("brand-30"),"brand-40":Gr("brand-40"),"brand-50":Gr("brand-50"),"brand-60":Gr("brand-60"),"brand-70":Gr("brand-70"),"brand-80":Gr("brand-80"),"brand-90":Gr("brand-90"),"brand-95":Gr("brand-95"),"brand-100":Gr("brand-100"),"primary-10":Gr("primary-10"),"primary-20":Gr("primary-20"),"primary-30":Gr("primary-30"),"primary-40":Gr("primary-40"),"primary-50":Gr("primary-50"),"primary-60":Gr("primary-60"),"primary-70":Gr("primary-70"),"primary-80":Gr("primary-80"),"primary-90":Gr("primary-90"),"primary-95":Gr("primary-95"),"primary-100":Gr("primary-100"),"secondary-10":Gr("secondary-10"),"secondary-20":Gr("secondary-20"),"secondary-30":Gr("secondary-30"),"secondary-40":Gr("secondary-40"),"secondary-50":Gr("secondary-50"),"secondary-60":Gr("secondary-60"),"secondary-70":Gr("secondary-70"),"secondary-80":Gr("secondary-80"),"secondary-90":Gr("secondary-90"),"secondary-95":Gr("secondary-95"),"secondary-100":Gr("secondary-100"),"neutral-10":Gr("neutral-10"),"neutral-20":Gr("neutral-20"),"neutral-30":Gr("neutral-30"),"neutral-40":Gr("neutral-40"),"neutral-50":Gr("neutral-50"),"neutral-60":Gr("neutral-60"),"neutral-70":Gr("neutral-70"),"neutral-80":Gr("neutral-80"),"neutral-90":Gr("neutral-90"),"neutral-95":Gr("neutral-95"),"neutral-100":Gr("neutral-100"),"success-10":Gr("success-10"),"success-20":Gr("success-20"),"success-30":Gr("success-30"),"success-40":Gr("success-40"),"success-50":Gr("success-50"),"success-60":Gr("success-60"),"success-70":Gr("success-70"),"success-80":Gr("success-80"),"success-90":Gr("success-90"),"success-95":Gr("success-95"),"success-100":Gr("success-100"),"warning-10":Gr("warning-10"),"warning-20":Gr("warning-20"),"warning-30":Gr("warning-30"),"warning-40":Gr("warning-40"),"warning-50":Gr("warning-50"),"warning-60":Gr("warning-60"),"warning-70":Gr("warning-70"),"warning-80":Gr("warning-80"),"warning-90":Gr("warning-90"),"warning-95":Gr("warning-95"),"warning-100":Gr("warning-100"),"error-10":Gr("error-10"),"error-20":Gr("error-20"),"error-30":Gr("error-30"),"error-40":Gr("error-40"),"error-50":Gr("error-50"),"error-60":Gr("error-60"),"error-70":Gr("error-70"),"error-80":Gr("error-80"),"error-90":Gr("error-90"),"error-95":Gr("error-95"),"error-100":Gr("error-100"),"info-10":Gr("info-10"),"info-20":Gr("info-20"),"info-30":Gr("info-30"),"info-40":Gr("info-40"),"info-50":Gr("info-50"),"info-60":Gr("info-60"),"info-70":Gr("info-70"),"info-80":Gr("info-80"),"info-90":Gr("info-90"),"info-95":Gr("info-95"),"info-100":Gr("info-100"),white:Gr("white"),black:Gr("black"),"primary-inverse":Gr("primary-inverse")},Zr={text:Gr("neutral-20"),"text-subtle":Gr("neutral-30"),"text-subtler":Gr("neutral-50"),"text-subtlest":Gr("neutral-60"),"text-primary":Gr("primary-50"),"text-hover":Gr("primary-40"),"text-selected":Gr("primary-50"),"text-selected-hover":Gr("primary-40"),"text-disabled":Gr("neutral-50"),"text-disabled-subtle":Gr("neutral-60"),"text-disabled-subtlest":Gr("neutral-80"),"text-selected-disabled":Gr("neutral-20"),"text-success":Gr("success-40"),"text-warning":Gr("warning-40"),"text-error":Gr("error-40"),"text-info":Gr("info-40"),"text-inverse":Gr("white"),icon:Gr("neutral-50"),"icon-subtle":Gr("neutral-60"),"icon-strongest":Gr("neutral-20"),"icon-primary":Gr("primary-50"),"icon-primary-subtle":Gr("primary-60"),"icon-primary-subtlest":Gr("primary-70"),"icon-hover":Gr("primary-40"),"icon-selected":Gr("primary-50"),"icon-selected-hover":Gr("primary-40"),"icon-disabled":Gr("neutral-50"),"icon-disabled-subtle":Gr("neutral-60"),"icon-selected-disabled":Gr("neutral-60"),"icon-success":Gr("success-50"),"icon-warning":Gr("warning-60"),"icon-error":Gr("error-50"),"icon-error-strong":Gr("error-40"),"icon-info":Gr("info-50"),"icon-inverse":Gr("white"),"icon-primary-inverse":Gr("primary-inverse"),border:Gr("neutral-90"),"border-strong":Gr("neutral-70"),"border-stronger":Gr("neutral-50"),"border-primary":Gr("primary-50"),"border-primary-subtle":Gr("primary-60"),"border-hover":Gr("primary-90"),"border-hover-strong":Gr("primary-60"),"border-selected":Gr("primary-50"),"border-selected-subtle":Gr("primary-70"),"border-selected-subtlest":Gr("primary-90"),"border-selected-hover":Gr("primary-40"),"border-focus":Gr("primary-60"),"border-focus-strong":Gr("primary-50"),"border-disabled":Gr("neutral-90"),"border-selected-disabled":Gr("neutral-70"),"border-success":Gr("success-60"),"border-warning":Gr("warning-60"),"border-error":Gr("error-60"),"border-error-focus":Gr("error-60"),"border-error-focus-strong":Gr("error-40"),"border-error-strong":Gr("error-40"),"border-info":Gr("info-60"),bg:Gr("white"),"bg-strong":Gr("neutral-100"),"bg-stronger":Gr("neutral-95"),"bg-strongest":Gr("neutral-90"),"bg-hover":Gr("primary-95"),"bg-hover-strong":Gr("primary-90"),"bg-hover-subtle":Gr("primary-100"),"bg-hover-neutral":Gr("neutral-100"),"bg-hover-neutral-strong":Gr("neutral-90"),"bg-selected":Gr("primary-95"),"bg-selected-hover":Gr("primary-90"),"bg-selected-strong":Gr("primary-90"),"bg-selected-stronger":Gr("primary-70"),"bg-selected-strongest":Gr("primary-50"),"bg-selected-strongest-hover":Gr("primary-40"),"bg-disabled":Gr("neutral-95"),"bg-selected-disabled":Gr("neutral-95"),"bg-selected-stronger-disabled":Gr("neutral-70"),"bg-success":Gr("success-100"),"bg-success-hover":Gr("success-95"),"bg-success-strong":Gr("success-50"),"bg-success-strong-hover":Gr("success-40"),"bg-warning":Gr("warning-100"),"bg-warning-hover":Gr("warning-95"),"bg-warning-strong":Gr("warning-50"),"bg-warning-strong-hover":Gr("warning-40"),"bg-info":Gr("info-100"),"bg-info-hover":Gr("info-95"),"bg-info-strong":Gr("info-50"),"bg-info-strong-hover":Gr("info-40"),"bg-error":Gr("error-100"),"bg-error-hover":Gr("error-95"),"bg-error-strong":Gr("error-50"),"bg-error-strong-hover":Gr("error-40"),"bg-inverse":Gr("neutral-20"),"bg-inverse-subtle":Gr("neutral-30"),"bg-inverse-subtler":Gr("neutral-50"),"bg-inverse-subtlest":Gr("neutral-60"),"bg-inverse-hover":Gr("neutral-40"),"bg-primary":Gr("primary-50"),"bg-primary-subtle":Gr("primary-60"),"bg-primary-subtler":Gr("primary-95"),"bg-primary-subtlest":Gr("primary-100"),"bg-available":"#6DD0A1","bg-primary-hover":Gr("primary-40"),"bg-primary-subtlest-hover":Gr("primary-90"),"bg-primary-subtlest-selected":Gr("primary-90"),"overlay-strong":"rgba(40, 40, 40, 0.85)","overlay-subtle":"rgba(40, 40, 40, 0.20)",hyperlink:Gr("primary-50"),"hyperlink-hover":Gr("primary-40"),"hyperlink-visited":Gr("primary-40"),"hyperlink-inverse":Gr("primary-inverse"),"focus-ring":Gr("black"),"focus-ring-inverse":Gr("white")},qr={collections:{lifesg:Zr,bookingsg:Zr,rbs:Zr,mylegacy:Zr,ccube:Zr},defaultValue:"lifesg"},Jr=e=>r=>{var s;const n=r.theme,a=Ir(qr,null==n?void 0:n.colourScheme),o=(null===(s=null==n?void 0:n.overrides)||void 0===s?void 0:s.semanticColour)?Hr(a,e,n.overrides.semanticColour):a[e];return"function"==typeof o?o(r):o},Kr={text:Jr("text"),"text-subtle":Jr("text-subtle"),"text-subtler":Jr("text-subtler"),"text-subtlest":Jr("text-subtlest"),"text-primary":Jr("text-primary"),"text-hover":Jr("text-hover"),"text-selected":Jr("text-selected"),"text-selected-hover":Jr("text-selected-hover"),"text-disabled":Jr("text-disabled"),"text-disabled-subtle":Jr("text-disabled-subtle"),"text-disabled-subtlest":Jr("text-disabled-subtlest"),"text-selected-disabled":Jr("text-selected-disabled"),"text-success":Jr("text-success"),"text-warning":Jr("text-warning"),"text-error":Jr("text-error"),"text-info":Jr("text-info"),"text-inverse":Jr("text-inverse"),icon:Jr("icon"),"icon-subtle":Jr("icon-subtle"),"icon-strongest":Jr("icon-strongest"),"icon-primary":Jr("icon-primary"),"icon-primary-subtle":Jr("icon-primary-subtle"),"icon-primary-subtlest":Jr("icon-primary-subtlest"),"icon-hover":Jr("icon-hover"),"icon-selected":Jr("icon-selected"),"icon-selected-hover":Jr("icon-selected-hover"),"icon-disabled":Jr("icon-disabled"),"icon-disabled-subtle":Jr("icon-disabled-subtle"),"icon-selected-disabled":Jr("icon-selected-disabled"),"icon-success":Jr("icon-success"),"icon-warning":Jr("icon-warning"),"icon-error":Jr("icon-error"),"icon-error-strong":Jr("icon-error-strong"),"icon-info":Jr("icon-info"),"icon-inverse":Jr("icon-inverse"),"icon-primary-inverse":Jr("icon-primary-inverse"),border:Jr("border"),"border-strong":Jr("border-strong"),"border-stronger":Jr("border-stronger"),"border-primary":Jr("border-primary"),"border-primary-subtle":Jr("border-primary-subtle"),"border-hover":Jr("border-hover"),"border-hover-strong":Jr("border-hover-strong"),"border-selected":Jr("border-selected"),"border-selected-subtle":Jr("border-selected-subtle"),"border-selected-subtlest":Jr("border-selected-subtlest"),"border-selected-hover":Jr("border-selected-hover"),"border-focus":Jr("border-focus"),"border-focus-strong":Jr("border-focus-strong"),"border-disabled":Jr("border-disabled"),"border-selected-disabled":Jr("border-selected-disabled"),"border-success":Jr("border-success"),"border-warning":Jr("border-warning"),"border-error":Jr("border-error"),"border-error-focus":Jr("border-error-focus"),"border-error-focus-strong":Jr("border-error-focus-strong"),"border-error-strong":Jr("border-error-strong"),"border-info":Jr("border-info"),bg:Jr("bg"),"bg-strong":Jr("bg-strong"),"bg-stronger":Jr("bg-stronger"),"bg-strongest":Jr("bg-strongest"),"bg-hover":Jr("bg-hover"),"bg-hover-strong":Jr("bg-hover-strong"),"bg-hover-subtle":Jr("bg-hover-subtle"),"bg-hover-neutral":Jr("bg-hover-neutral"),"bg-hover-neutral-strong":Jr("bg-hover-neutral-strong"),"bg-selected":Jr("bg-selected"),"bg-selected-hover":Jr("bg-selected-hover"),"bg-selected-strong":Jr("bg-selected-strong"),"bg-selected-stronger":Jr("bg-selected-stronger"),"bg-selected-strongest":Jr("bg-selected-strongest"),"bg-selected-strongest-hover":Jr("bg-selected-strongest-hover"),"bg-disabled":Jr("bg-disabled"),"bg-selected-disabled":Jr("bg-selected-disabled"),"bg-selected-stronger-disabled":Jr("bg-selected-stronger-disabled"),"bg-success":Jr("bg-success"),"bg-success-hover":Jr("bg-success-hover"),"bg-success-strong":Jr("bg-success-strong"),"bg-success-strong-hover":Jr("bg-success-strong-hover"),"bg-warning":Jr("bg-warning"),"bg-warning-hover":Jr("bg-warning-hover"),"bg-warning-strong":Jr("bg-warning-strong"),"bg-warning-strong-hover":Jr("bg-warning-strong-hover"),"bg-info":Jr("bg-info"),"bg-info-hover":Jr("bg-info-hover"),"bg-info-strong":Jr("bg-info-strong"),"bg-info-strong-hover":Jr("bg-info-strong-hover"),"bg-error":Jr("bg-error"),"bg-error-hover":Jr("bg-error-hover"),"bg-error-strong":Jr("bg-error-strong"),"bg-error-strong-hover":Jr("bg-error-strong-hover"),"bg-inverse":Jr("bg-inverse"),"bg-inverse-subtle":Jr("bg-inverse-subtle"),"bg-inverse-subtler":Jr("bg-inverse-subtler"),"bg-inverse-subtlest":Jr("bg-inverse-subtlest"),"bg-inverse-hover":Jr("bg-inverse-hover"),"bg-primary":Jr("bg-primary"),"bg-primary-subtle":Jr("bg-primary-subtle"),"bg-primary-subtler":Jr("bg-primary-subtler"),"bg-primary-subtlest":Jr("bg-primary-subtlest"),"bg-available":Jr("bg-available"),"bg-primary-hover":Jr("bg-primary-hover"),"bg-primary-subtlest-hover":Jr("bg-primary-subtlest-hover"),"bg-primary-subtlest-selected":Jr("bg-primary-subtlest-selected"),"overlay-strong":Jr("overlay-strong"),"overlay-subtle":Jr("overlay-subtle"),hyperlink:Jr("hyperlink"),"hyperlink-hover":Jr("hyperlink-hover"),"hyperlink-visited":Jr("hyperlink-visited"),"hyperlink-inverse":Jr("hyperlink-inverse"),"focus-ring":Jr("focus-ring"),"focus-ring-inverse":Jr("focus-ring-inverse")},Qr={collections:{lifesg:{"width-010":1,"width-020":2,"width-040":4,solid:"solid","dashed-default":e=>r=>{var s,n,a;const{thickness:o,radius:i,colour:l}=e||{},t=null!==(s="function"==typeof o?o(r):o)&&void 0!==s?s:ss["width-010"](r),d=null!==(n="function"==typeof i?i(r):i)&&void 0!==n?n:0,c=null!==(a="function"==typeof l?l(r):l)&&void 0!==a?a:Kr.border(r),g=encodeURIComponent(`<svg width='100%' height='100%' xmlns='http://www.w3.org/2000/svg'><rect width='100%' height='100%' fill='none' rx='${d}' ry='${d}' stroke='${c}' stroke-width='${t}' stroke-dasharray='4, 8' stroke-dashoffset='0' stroke-linecap='square'/></svg>`);return b`
            background-image: url("data:image/svg+xml,${g}");
            border-radius: ${d};
        `}}},defaultValue:"lifesg"},es=e=>r=>{var s;const n=r.theme,a=Ir(Qr,null==n?void 0:n.borderScheme);return(null===(s=null==n?void 0:n.overrides)||void 0===s?void 0:s.border)?`${Hr(a,e,n.overrides.border)}px`:`${a[e]}px`},rs=e=>1===e.length&&"theme"in e[0],ss={"width-010":es("width-010"),"width-020":es("width-020"),"width-040":es("width-040"),solid:(ns="solid",e=>{var r;const s=e.theme,n=Ir(Qr,null==s?void 0:s.borderScheme),a=(null===(r=null==s?void 0:s.overrides)||void 0===r?void 0:r.border)?Hr(n,ns,s.overrides.border):n[ns];return"function"==typeof a?a(e):a}),"dashed-default":(e=>(...r)=>s=>{var n;const a=rs(r)?[]:r,o=rs(r)?r[0]:s,i=o.theme,l=Ir(Qr,null==i?void 0:i.borderScheme);return((null===(n=null==i?void 0:i.overrides)||void 0===n?void 0:n.border)?Hr(l,e,i.overrides.border):l[e])(...a)(o)})("dashed-default")};var ns;const as={collections:{lifesg:{"xxs-min":0,"xxs-max":320,"xs-min":321,"xs-max":375,"sm-min":376,"sm-max":420,"md-min":421,"md-max":767,"lg-min":768,"lg-max":1023,"xl-min":1024,"xl-max":1440,"xxl-min":1441,"xxs-column":8,"xs-column":8,"sm-column":8,"md-column":8,"lg-column":12,"xl-column":12,"xxl-column":12,"xxs-gutter":16,"xs-gutter":16,"sm-gutter":16,"md-gutter":16,"lg-gutter":32,"xl-gutter":32,"xxl-gutter":32,"xxs-margin":24,"xs-margin":24,"sm-margin":24,"md-margin":24,"lg-margin":48,"xl-margin":48,"xxl-margin":48}},defaultValue:"lifesg"},os=e=>r=>{var s;const n=r.theme,a=Ir(as,null==n?void 0:n.breakpointScheme);let o;return o=(null===(s=null==n?void 0:n.overrides)||void 0===s?void 0:s.breakpoint)?Hr(a,e,n.overrides.breakpoint):a[e],o},is={"xxs-min":os("xxs-min"),"xxs-max":os("xxs-max"),"xs-min":os("xs-min"),"xs-max":os("xs-max"),"sm-min":os("sm-min"),"sm-max":os("sm-max"),"md-min":os("md-min"),"md-max":os("md-max"),"lg-min":os("lg-min"),"lg-max":os("lg-max"),"xl-min":os("xl-min"),"xl-max":os("xl-max"),"xxl-min":os("xxl-min"),"xxs-column":os("xxs-column"),"xs-column":os("xs-column"),"sm-column":os("sm-column"),"md-column":os("md-column"),"lg-column":os("lg-column"),"xl-column":os("xl-column"),"xxl-column":os("xxl-column"),"xxs-gutter":os("xxs-gutter"),"xs-gutter":os("xs-gutter"),"sm-gutter":os("sm-gutter"),"md-gutter":os("md-gutter"),"lg-gutter":os("lg-gutter"),"xl-gutter":os("xl-gutter"),"xxl-gutter":os("xxl-gutter"),"xxs-margin":os("xxs-margin"),"xs-margin":os("xs-margin"),"sm-margin":os("sm-margin"),"md-margin":os("md-margin"),"lg-margin":os("lg-margin"),"xl-margin":os("xl-margin"),"xxl-margin":os("xxl-margin")},ls=e=>("max-width"===e?["xxs","xs","sm","md","lg","xl"]:["xxs","xs","sm","md","lg","xl","xxl"]).reduce(((r,s)=>(r[s]=((e,r)=>{const s=is["max-width"===e?`${r}-max`:`${r}-min`];return r=>{const n=s(r);return`@media screen and (${e}: ${n}px)`}})(e,s),r)),{}),ts={MaxWidth:ls("max-width"),MinWidth:ls("min-width")},ds={"header-size-xxl":"3rem","header-size-xl":"2.5rem","header-size-lg":"2rem","header-size-md":"1.625rem","header-size-sm":"1.375rem","header-size-xs":"1.125rem","header-lh-xxl":"3.5rem","header-lh-xl":"3rem","header-lh-lg":"2.5rem","header-lh-md":"2.25rem","header-lh-sm":"1.75rem","header-lh-xs":"1.625rem","header-ls-xxl":"-0.056rem","header-ls-xl":"-0.032rem","header-ls-lg":"-0.032rem","header-ls-md":"0rem","header-ls-sm":"0rem","header-ls-xs":"0rem","weight-light":"300","weight-regular":"400","weight-semibold":"600","weight-bold":"700","font-family":"Open Sans","body-size-baseline":"1.125rem","body-size-md":"1rem","body-size-sm":"0.875rem","body-size-xs":"0.75rem","body-lh-baseline":"1.625rem","body-lh-md":"1.5rem","body-lh-sm":"1.625rem","body-lh-xs":"1.25rem","body-ls-baseline":"0rem","body-ls-md":"0.014rem","body-ls-sm":"0.012rem","body-ls-xs":"0.012rem","formlabel-size-baseline":"1rem","formlabel-size-lg":"1.125rem","formlabel-lh-baseline":"1.5rem","formlabel-lh-lg":"1.625rem","formlabel-ls-baseline":"0.014rem","formlabel-ls-lg":"0rem"},bs={collections:{lifesg:ds,bookingsg:{"header-size-xxl":"3rem","header-size-xl":"2.5rem","header-size-lg":"2rem","header-size-md":"1.625rem","header-size-sm":"1.375rem","header-size-xs":"1.125rem","header-lh-xxl":"3.5rem","header-lh-xl":"3rem","header-lh-lg":"2.5rem","header-lh-md":"2.25rem","header-lh-sm":"1.75rem","header-lh-xs":"1.75rem","header-ls-xxl":"-0.056rem","header-ls-xl":"-0.032rem","header-ls-lg":"-0.032rem","header-ls-md":"0rem","header-ls-sm":"0rem","header-ls-xs":"0rem","weight-light":"300","weight-regular":"400","weight-semibold":"600","weight-bold":"700","font-family":"Plus Jakarta Sans","body-size-baseline":"1.125rem","body-size-md":"1rem","body-size-sm":"0.875rem","body-size-xs":"0.75rem","body-lh-baseline":"1.75rem","body-lh-md":"1.5rem","body-lh-sm":"1.6rem","body-lh-xs":"1.2rem","body-ls-baseline":"0rem","body-ls-md":"0.014rem","body-ls-sm":"0.012rem","body-ls-xs":"0.012rem","formlabel-size-baseline":"1rem","formlabel-size-lg":"1.125rem","formlabel-lh-baseline":"1.5rem","formlabel-lh-lg":"1.75rem","formlabel-ls-baseline":"0.014rem","formlabel-ls-lg":"0rem"},rbs:ds,mylegacy:ds,ccube:ds},defaultValue:"lifesg"},cs=e=>r=>{var s;const n=r.theme,a=Ir(bs,null==n?void 0:n.fontScheme);return(null===(s=null==n?void 0:n.overrides)||void 0===s?void 0:s.fontSpec)?Hr(a,e,n.overrides.fontSpec):a[e]},gs={"header-size-xxl":cs("header-size-xxl"),"header-size-xl":cs("header-size-xl"),"header-size-lg":cs("header-size-lg"),"header-size-md":cs("header-size-md"),"header-size-sm":cs("header-size-sm"),"header-size-xs":cs("header-size-xs"),"header-lh-xxl":cs("header-lh-xxl"),"header-lh-xl":cs("header-lh-xl"),"header-lh-lg":cs("header-lh-lg"),"header-lh-md":cs("header-lh-md"),"header-lh-sm":cs("header-lh-sm"),"header-lh-xs":cs("header-lh-xs"),"header-ls-xxl":cs("header-ls-xxl"),"header-ls-xl":cs("header-ls-xl"),"header-ls-lg":cs("header-ls-lg"),"header-ls-md":cs("header-ls-md"),"header-ls-sm":cs("header-ls-sm"),"header-ls-xs":cs("header-ls-xs"),"weight-light":cs("weight-light"),"weight-regular":cs("weight-regular"),"weight-semibold":cs("weight-semibold"),"weight-bold":cs("weight-bold"),"font-family":cs("font-family"),"body-size-baseline":cs("body-size-baseline"),"body-size-md":cs("body-size-md"),"body-size-sm":cs("body-size-sm"),"body-size-xs":cs("body-size-xs"),"body-lh-baseline":cs("body-lh-baseline"),"body-lh-md":cs("body-lh-md"),"body-lh-sm":cs("body-lh-sm"),"body-lh-xs":cs("body-lh-xs"),"body-ls-baseline":cs("body-ls-baseline"),"body-ls-md":cs("body-ls-md"),"body-ls-sm":cs("body-ls-sm"),"body-ls-xs":cs("body-ls-xs"),"formlabel-size-baseline":cs("formlabel-size-baseline"),"formlabel-size-lg":cs("formlabel-size-lg"),"formlabel-lh-baseline":cs("formlabel-lh-baseline"),"formlabel-lh-lg":cs("formlabel-lh-lg"),"formlabel-ls-baseline":cs("formlabel-ls-baseline"),"formlabel-ls-lg":cs("formlabel-ls-lg")},us={collections:{lifesg:{none:0,xs:2,sm:4,md:8,lg:12,full:9999}},defaultValue:"lifesg"},ms=e=>r=>{var s;const n=r.theme,a=Ir(us,null==n?void 0:n.radiusScheme);return(null===(s=null==n?void 0:n.overrides)||void 0===s?void 0:s.radius)?`${Hr(a,e,n.overrides.radius)}px`:`${a[e]}px`},hs={none:ms("none"),xs:ms("xs"),sm:ms("sm"),md:ms("md"),lg:ms("lg"),full:ms("full")},ys={collections:{lifesg:{"spacing-0":0,"spacing-4":4,"spacing-8":8,"spacing-12":12,"spacing-16":16,"spacing-20":20,"spacing-24":24,"spacing-32":32,"spacing-40":40,"spacing-48":48,"spacing-64":64,"spacing-72":72,"layout-xs":8,"layout-sm":16,"layout-md":24,"layout-lg":32,"layout-xl":48,"layout-xxl":64,"layout-xxxl":128}},defaultValue:"lifesg"},ps=e=>r=>{var s;const n=r.theme,a=Ir(ys,null==n?void 0:n.spacingScheme);return(null===(s=null==n?void 0:n.overrides)||void 0===s?void 0:s.spacing)?`${Hr(a,e,n.overrides.spacing)}px`:`${a[e]}px`},xs={"spacing-0":ps("spacing-0"),"spacing-4":ps("spacing-4"),"spacing-8":ps("spacing-8"),"spacing-12":ps("spacing-12"),"spacing-16":ps("spacing-16"),"spacing-20":ps("spacing-20"),"spacing-24":ps("spacing-24"),"spacing-32":ps("spacing-32"),"spacing-40":ps("spacing-40"),"spacing-48":ps("spacing-48"),"spacing-64":ps("spacing-64"),"spacing-72":ps("spacing-72"),"layout-xs":ps("layout-xs"),"layout-sm":ps("layout-sm"),"layout-md":ps("layout-md"),"layout-lg":ps("layout-lg"),"layout-xl":ps("layout-xl"),"layout-xxl":ps("layout-xxl"),"layout-xxxl":ps("layout-xxxl")},fs=(e,r,s,n)=>b`
    font-family: ${cs("font-family")};
    font-size: ${cs(e)};
    font-weight: ${cs(r)};
    line-height: ${cs(s)};
    letter-spacing: ${cs(n)};
`,Fs={"header-xxl-light":fs("header-size-xxl","weight-light","header-lh-xxl","header-ls-xxl"),"header-xxl-regular":fs("header-size-xxl","weight-regular","header-lh-xxl","header-ls-xxl"),"header-xxl-semibold":fs("header-size-xxl","weight-semibold","header-lh-xxl","header-ls-xxl"),"header-xxl-bold":fs("header-size-xxl","weight-bold","header-lh-xxl","header-ls-xxl"),"header-xl-light":fs("header-size-xl","weight-light","header-lh-xl","header-ls-xl"),"header-xl-regular":fs("header-size-xl","weight-regular","header-lh-xl","header-ls-xl"),"header-xl-semibold":fs("header-size-xl","weight-semibold","header-lh-xl","header-ls-xl"),"header-xl-bold":fs("header-size-xl","weight-bold","header-lh-xl","header-ls-xl"),"header-lg-light":fs("header-size-lg","weight-light","header-lh-lg","header-ls-lg"),"header-lg-regular":fs("header-size-lg","weight-regular","header-lh-lg","header-ls-lg"),"header-lg-semibold":fs("header-size-lg","weight-semibold","header-lh-lg","header-ls-lg"),"header-lg-bold":fs("header-size-lg","weight-bold","header-lh-lg","header-ls-lg"),"header-md-light":fs("header-size-md","weight-light","header-lh-md","header-ls-md"),"header-md-regular":fs("header-size-md","weight-regular","header-lh-md","header-ls-md"),"header-md-semibold":fs("header-size-md","weight-semibold","header-lh-md","header-ls-md"),"header-md-bold":fs("header-size-md","weight-bold","header-lh-md","header-ls-md"),"header-sm-light":fs("header-size-sm","weight-light","header-lh-sm","header-ls-sm"),"header-sm-regular":fs("header-size-sm","weight-regular","header-lh-sm","header-ls-sm"),"header-sm-semibold":fs("header-size-sm","weight-semibold","header-lh-sm","header-ls-sm"),"header-sm-bold":fs("header-size-sm","weight-bold","header-lh-sm","header-ls-sm"),"header-xs-light":fs("header-size-xs","weight-light","header-lh-xs","header-ls-xs"),"header-xs-regular":fs("header-size-xs","weight-regular","header-lh-xs","header-ls-xs"),"header-xs-semibold":fs("header-size-xs","weight-semibold","header-lh-xs","header-ls-xs"),"header-xs-bold":fs("header-size-xs","weight-bold","header-lh-xs","header-ls-xs"),"body-baseline-light":fs("body-size-baseline","weight-light","body-lh-baseline","body-ls-baseline"),"body-baseline-regular":fs("body-size-baseline","weight-regular","body-lh-baseline","body-ls-baseline"),"body-baseline-semibold":fs("body-size-baseline","weight-semibold","body-lh-baseline","body-ls-baseline"),"body-baseline-bold":fs("body-size-baseline","weight-bold","body-lh-baseline","body-ls-baseline"),"body-md-light":fs("body-size-md","weight-light","body-lh-md","body-ls-md"),"body-md-regular":fs("body-size-md","weight-regular","body-lh-md","body-ls-md"),"body-md-semibold":fs("body-size-md","weight-semibold","body-lh-md","body-ls-md"),"body-md-bold":fs("body-size-md","weight-bold","body-lh-md","body-ls-md"),"body-sm-light":fs("body-size-sm","weight-light","body-lh-sm","body-ls-sm"),"body-sm-regular":fs("body-size-sm","weight-regular","body-lh-sm","body-ls-sm"),"body-sm-semibold":fs("body-size-sm","weight-semibold","body-lh-sm","body-ls-sm"),"body-sm-bold":fs("body-size-sm","weight-bold","body-lh-sm","body-ls-sm"),"body-xs-light":fs("body-size-xs","weight-light","body-lh-xs","body-ls-xs"),"body-xs-regular":fs("body-size-xs","weight-regular","body-lh-xs","body-ls-xs"),"body-xs-semibold":fs("body-size-xs","weight-semibold","body-lh-xs","body-ls-xs"),"body-xs-bold":fs("body-size-xs","weight-bold","body-lh-xs","body-ls-xs"),"formlabel-baseline-semibold":fs("formlabel-size-baseline","weight-semibold","formlabel-lh-baseline","formlabel-ls-baseline"),"formlabel-lg-semibold":fs("formlabel-size-lg","weight-semibold","formlabel-lh-lg","formlabel-ls-lg")},vs={collections:{lifesg:Fs,bookingsg:Fs,rbs:Fs,mylegacy:Fs,ccube:Fs},defaultValue:"lifesg"},ws=e=>r=>{var s;const n=r.theme,a=Ir(vs,null==n?void 0:n.fontScheme),o=(null===(s=null==n?void 0:n.overrides)||void 0===s?void 0:s.font)?Hr(a,e,n.overrides.font):a[e];return"function"==typeof o?o(r):o},Es={"header-xxl-light":ws("header-xxl-light"),"header-xxl-regular":ws("header-xxl-regular"),"header-xxl-semibold":ws("header-xxl-semibold"),"header-xxl-bold":ws("header-xxl-bold"),"header-xl-light":ws("header-xl-light"),"header-xl-regular":ws("header-xl-regular"),"header-xl-semibold":ws("header-xl-semibold"),"header-xl-bold":ws("header-xl-bold"),"header-lg-light":ws("header-lg-light"),"header-lg-regular":ws("header-lg-regular"),"header-lg-semibold":ws("header-lg-semibold"),"header-lg-bold":ws("header-lg-bold"),"header-md-light":ws("header-md-light"),"header-md-regular":ws("header-md-regular"),"header-md-semibold":ws("header-md-semibold"),"header-md-bold":ws("header-md-bold"),"header-sm-light":ws("header-sm-light"),"header-sm-regular":ws("header-sm-regular"),"header-sm-semibold":ws("header-sm-semibold"),"header-sm-bold":ws("header-sm-bold"),"header-xs-light":ws("header-xs-light"),"header-xs-regular":ws("header-xs-regular"),"header-xs-semibold":ws("header-xs-semibold"),"header-xs-bold":ws("header-xs-bold"),"body-baseline-light":ws("body-baseline-light"),"body-baseline-regular":ws("body-baseline-regular"),"body-baseline-semibold":ws("body-baseline-semibold"),"body-baseline-bold":ws("body-baseline-bold"),"body-md-light":ws("body-md-light"),"body-md-regular":ws("body-md-regular"),"body-md-semibold":ws("body-md-semibold"),"body-md-bold":ws("body-md-bold"),"body-sm-light":ws("body-sm-light"),"body-sm-regular":ws("body-sm-regular"),"body-sm-semibold":ws("body-sm-semibold"),"body-sm-bold":ws("body-sm-bold"),"body-xs-light":ws("body-xs-light"),"body-xs-regular":ws("body-xs-regular"),"body-xs-semibold":ws("body-xs-semibold"),"body-xs-bold":ws("body-xs-bold"),"formlabel-baseline-semibold":ws("formlabel-baseline-semibold"),"formlabel-lg-semibold":ws("formlabel-lg-semibold")},Cs=Object.assign(Object.assign({},Kr),{Primitive:Yr}),Ds=Object.assign(Object.assign({},Es),{Spec:gs}),Bs=Wr,$s=ss,As=xs,zs=hs,_s=ts,ks=t.button`
    padding: ${As["spacing-8"]} ${As["spacing-16"]};
    min-width: 4rem;
    border: ${$s["width-010"]} ${$s.solid} transparent;
    border-radius: ${zs.sm};
    transition: all ${Bs["duration-250"]} ${Bs["ease-default"]};
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;

    // -----------------------------------------------------------------------------
    // BUTTON STYLE + TEXT COLOR
    // -----------------------------------------------------------------------------
    ${e=>{switch(e.$buttonStyle){case"secondary":return b`
                    background-color: ${Cs.Primitive.white};
                    border-color: ${e.$buttonIsDanger?Cs["border-error-strong"]:Cs["border-primary"]};

                    color: ${e.$buttonIsDanger?Cs["text-error"]:Cs["text-primary"]};

                    &:hover,
                    &:active {
                        background-color: ${Cs["bg-hover-neutral"]};
                    }
                `;case"light":return b`
                    background-color: ${Cs.bg};
                    border-color: ${Cs.border};

                    color: ${e.$buttonIsDanger?Cs["text-error"]:Cs["text-primary"]};

                    &:hover,
                    &:active {
                        background-color: ${Cs["bg-hover-neutral"]};
                    }
                `;case"link":return b`
                    background-color: transparent;

                    color: ${e.$buttonIsDanger?Cs["text-error"]:Cs["text-primary"]};
                    &:hover,
                    &:active {
                        background-color: ${Cs["bg-hover-neutral"]};
                    }
                `;case"disabled":return b`
                    background-color: ${Cs["bg-disabled"]};

                    cursor: not-allowed;

                    &:hover {
                        box-shadow: none;
                    }

                    color: ${Cs["text-disabled"]};
                `;default:return b`
                    background-color: ${e.$buttonIsDanger?Cs["bg-error-strong"]:Cs["bg-primary"]};

                    ${_s.MaxWidth.md} {
                        width: 100%;
                    }

                    color: ${Cs["text-inverse"]};

                    &:hover,
                    &:active {
                        background-color: ${e.$buttonIsDanger?Cs["bg-error-strong-hover"]:Cs["bg-primary-hover"]};
                    }
                `}}}

    // -----------------------------------------------------------------------------
	// BUTTON SIZE + TEXT SIZE
	// -----------------------------------------------------------------------------
	${e=>{switch(e.$buttonSizeStyle){case"small":return b`
                    height: 2.5rem;
                    ${Ds["body-md-semibold"]}

                    ${_s.MaxWidth.xxs} {
                        height: auto;
                    }
                `;case"large":return b`
                    height: 4rem;
                    ${Ds["header-md-semibold"]}

                    ${_s.MaxWidth.xxs} {
                        height: auto;
                    }
                `;default:return b`
                    height: 3rem;
                    ${Ds["header-xs-semibold"]}

                    ${_s.MaxWidth.xxs} {
                        height: auto;
                    }
                `}}}
`,Ss=t((({color:s,className:n,size:a})=>e(u,Object.assign({className:n,$size:a,$color:s},{children:[r(h,{id:"inner1"}),r(y,{id:"inner2"}),r(p,{id:"inner3"}),r(x,{id:"inner4"})]}))))`
    margin-right: 0.5rem;
`,Os=(s,n)=>{const{children:a,disabled:o=!1,loading:i=!1,styleType:l="default",danger:t=!1}=s,d=g(s,["children","disabled","loading","styleType","danger"]),b={$buttonStyle:o?"disabled":l,$buttonSizeStyle:"default",$buttonIsDanger:t};return e(ks,Object.assign({ref:n,"data-testid":d["data-testid"]||"button",disabled:o},b,d,{children:[i&&r(Ss,{}),r("span",{children:a})]}))};Os.displayName="Button.Default";const js=(s,n)=>{const{children:a,disabled:o=!1,loading:i=!1,styleType:l="default",danger:t=!1}=s,d=g(s,["children","disabled","loading","styleType","danger"]),b={$buttonStyle:o?"disabled":l,$buttonSizeStyle:"small",$buttonIsDanger:t};return e(ks,Object.assign({ref:n,"data-testid":d["data-testid"]||"button",disabled:o},b,d,{children:[i&&r(Ss,{}),r("span",{children:a})]}))};js.displayName="Button.Small";const Ls=(s,n)=>{const{children:a,disabled:o=!1,loading:i=!1,styleType:l="default",danger:t=!1}=s,d=g(s,["children","disabled","loading","styleType","danger"]),b={$buttonStyle:o?"disabled":l,$buttonSizeStyle:"large",$buttonIsDanger:t};return e(ks,Object.assign({ref:n,"data-testid":d["data-testid"]||"button",disabled:o},b,d,{children:[i&&r(Ss,{}),r("span",{children:a})]}))};Ls.displayName="Button.Large";const Ms={Default:n.forwardRef(Os),Small:n.forwardRef(js),Large:n.forwardRef(Ls)},Ts=t.button`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: ${As["spacing-32"]};
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

        ${({$highlight:e})=>e&&b`
                background-color: ${Cs["bg-hover-neutral"]};
            `}
    }
`,Ns=n.forwardRef(((e,s)=>{var{children:n,focusHighlight:a=!0,focusOutline:o="none",type:i="button"}=e,l=g(e,["children","focusHighlight","focusOutline","type"]);return r(Ts,Object.assign({ref:s,$outline:o,$highlight:a,type:i},l,{children:n}))})),Ps=(e,r,s=!1)=>{const n=`${e}-${r.toLowerCase()}`;return b`
        ${Ds[n]}
        ${s?"margin-bottom: 1.05em;":"margin-bottom: 0;"}
    `},Xs=(e,r)=>b`
    ${Ps(e,r.weight||"regular",r.paragraph)}
    ${((e=!1,r=!1)=>r?b`
            display: block;
        `:e?b`
            display: inline;
        `:b`
            display: block;
        `)(r.inline,r.paragraph)}
    color: ${Cs.text};
`;var Hs;!function(s){const n=(e,r,s)=>{const n=t(e).attrs((({inline:e})=>({as:e?"span":void 0})))`
            ${e=>Xs(r,e)}
        `;return n.displayName=`Typography.${s}`,n};s.HeaderXXL=n("h1","header-xxl","HeaderXXL"),s.HeaderXL=n("h2","header-xl","HeaderXL"),s.HeaderLG=n("h3","header-lg","HeaderLG"),s.HeaderMD=n("h4","header-md","HeaderMD"),s.HeaderSM=n("h5","header-sm","HeaderSM"),s.HeaderXS=n("h6","header-xs","HeaderXS");const a=(e,r)=>{const s=t.p.attrs((({inline:e})=>({as:e?"span":void 0})))`
            ${r=>Xs(e,r)}
        `;return s.displayName=`Typography.${r}`,s};s.BodyBL=a("body-baseline","BodyBL"),s.BodyMD=a("body-md","BodyMD"),s.BodySM=a("body-sm","BodySM"),s.BodyXS=a("body-xs","BodyXS");const o=(s,n)=>{const a=t.a`
            ${e=>b`
                ${Ps(s,e.weight||"regular")}
                color: ${Cs.hyperlink};
                text-decoration: none;

                :hover,
                :active,
                :focus {
                    color: ${Cs["text-hover"]};
                }
            `}
        `,o=s=>{var{external:n=!1,children:o}=s,i=g(s,["external","children"]);return e(a,Object.assign({},i,{children:[o,n&&r(Is,{})]}))};return o.displayName=`Typography.${n}`,o};s.LinkBL=o("body-baseline","LinkBL"),s.LinkMD=o("body-md","LinkMD"),s.LinkSM=o("body-sm","LinkSM"),s.LinkXS=o("body-xs","LinkXS")}(Hs||(Hs={}));const Is=t(c)`
    height: 1lh;
    width: 1em;
    margin-left: 0.4em;
    vertical-align: middle;
`,Vs=d`
	from {
		opacity: 0;
		transform: translateY(-20%);
	}
	to {
		opacity: 1;
		transform: translateY(0);
	}
`,Rs=t.div`
    display: flex;
    flex-direction: row;
    align-items: stretch;
    position: fixed;
    margin: 0.5rem 1.25rem;
    ${e=>`top: ${e.$offset}px;`}
    left: 0;
    width: calc(100% - 2.5rem);
    min-height: 5.5rem;
    z-index: 9001;
    background: ${Cs.bg};
    box-shadow: 0 0.125rem 0.5rem rgba(104, 104, 104, 0.25);
    border-radius: ${zs.md};
    ${e=>{if(e.$isAnimated)return b`
                animation: ${Vs} 0.3s;
            `}}
`,Ws=t.div`
    display: flex;
    align-items: center;
    padding: 0.5rem 0.25rem 0.5rem 1rem;
`,Us=t(Ns)`
    padding: 0;
`,Gs=t(a)`
    color: ${Cs.icon};
    height: 1.25rem;
    width: 1.25rem;
`,Ys=t.div`
    flex: 1;
    display: flex;
    align-items: center;
    padding: 0.5rem 1rem 0.5rem 0.25rem;
    cursor: pointer;
`,Zs=t.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: left;
    margin: 0.5rem;
    ${_s.MaxWidth.xs} {
        margin: 0 0.5rem;
    }
`,qs=t.img`
    width: 2.65rem;
    height: auto;
    align-self: center;
`,Js=t.div`
    max-width: 30%;
`,Ks=t(Ms.Small)`
    padding: 0.5rem;
    height: auto;
    & > span {
        overflow-wrap: anywhere;
        ${Ds["body-xs-semibold"]}
    }
`,Qs=t(Hs.BodySM)`
    font-weight: ${Ds.Spec["weight-bold"]};
    overflow-wrap: anywhere;
    ${_s.MaxWidth.xs} {
        ${Ds["body-xs-bold"]}
    }
`,en=t(Hs.BodyXS)`
    overflow-wrap: anywhere;
`,rn=t.div`
    margin-top: 0.25rem;
    display: flex;
    align-items: center;
`,sn=b`
    height: 2rem;
    width: 2rem;
    padding-right: 0.25rem;
    color: #ffc107;
`,nn=t(i)`
    ${sn}
`,an=t(l)`
    ${sn}
`,on=t(o)`
    ${sn}
`,ln="https://assets.life.gov.sg/react-design-system/img/app-icon/app-icon.png",tn="smart-app-banner";const dn=n.forwardRef((function(n,a){const{className:o,show:i,href:l,content:t,offset:d=0,icon:b=ln,animated:c=!1,onDismiss:g,onClick:u}=n,{title:m,message:h,buttonLabel:y,buttonAriaLabel:p,numberOfStars:x}=t,f=e=>{e.stopPropagation(),window.open(l,"_blank","noreferrer"),null==u||u()};return r(s,{children:i&&e(Rs,Object.assign({ref:a,$isAnimated:c,$offset:d,className:o},{children:[r(Ws,Object.assign({onClick:g,id:`${tn}-dismiss`,"data-testid":`${tn}-dismiss-container`},{children:r(Us,Object.assign({"aria-label":"Dismiss"},{children:r(Gs,{})}))})),e(Ys,Object.assign({onClick:f,id:`${tn}-proceed`,"data-testid":`${tn}-proceed-container`},{children:[r(qs,{src:b,alt:"lifesg-app-icon"}),e(Zs,{children:[r(Qs,{children:m}),r(en,{children:h}),(()=>{if(isNaN(x)||x<0)return;const e=[],s=x-Math.floor(x)>=.4;for(let s=0;s<Math.floor(x);s++)e.push(r(nn,{},`star${s}`));if(s&&e.push(r(an,{},"halfstar")),e.length<5){const s=5-e.length;for(let n=0;n<s;n++)e.push(r(on,{},`emptystar${n}`))}return r(rn,{children:e.slice(0,5)})})()]}),r(Js,{children:r(Ks,Object.assign({type:"button",onClick:f,"aria-label":p},{children:y}))})]}))]}))})}));export{dn as SmartAppBanner};
//# sourceMappingURL=index.js.map
