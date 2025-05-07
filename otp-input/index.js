import{jsxs as e,jsx as r,Fragment as n}from"react/jsx-runtime";import t,{useRef as i,useImperativeHandle as s,useState as a,useEffect as o}from"react";import l,{keyframes as d,css as c}from"styled-components";import{CrossIcon as u}from"@lifesg/react-icons/cross";import"@lifesg/react-icons/i-circle-fill";import"@floating-ui/react";import"react-dom";import{ExternalIcon as g}from"@lifesg/react-icons/external";function h(e,r){var n={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&r.indexOf(t)<0&&(n[t]=e[t]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(t=Object.getOwnPropertySymbols(e);i<t.length;i++)r.indexOf(t[i])<0&&Object.prototype.propertyIsEnumerable.call(e,t[i])&&(n[t[i]]=e[t[i]])}return n}"function"==typeof SuppressedError&&SuppressedError;const b=l.div`
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
`,v=l(y)`
    animation-delay: -0.15s;
`;var x="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};function F(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var w=Array.isArray,$="object"==typeof x&&x&&x.Object===Object&&x,D="object"==typeof self&&self&&self.Object===Object&&self,E=$||D||Function("return this")(),C=E.Symbol,B=C,A=Object.prototype,z=A.hasOwnProperty,S=A.toString,M=B?B.toStringTag:void 0;var k=function(e){var r=z.call(e,M),n=e[M];try{e[M]=void 0;var t=!0}catch(e){}var i=S.call(e);return t&&(r?e[M]=n:delete e[M]),i},O=Object.prototype.toString;var _=k,Y=function(e){return O.call(e)},T=C?C.toStringTag:void 0;var L=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":T&&T in Object(e)?_(e):Y(e)};var j=L,I=function(e){return null!=e&&"object"==typeof e};var H=function(e){return"symbol"==typeof e||I(e)&&"[object Symbol]"==j(e)},W=w,R=H,N=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,P=/^\w*$/;var V=function(e,r){if(W(e))return!1;var n=typeof e;return!("number"!=n&&"symbol"!=n&&"boolean"!=n&&null!=e&&!R(e))||(P.test(e)||!N.test(e)||null!=r&&e in Object(r))};var Z=function(e){var r=typeof e;return null!=e&&("object"==r||"function"==r)},X=L,U=Z;var J,G=function(e){if(!U(e))return!1;var r=X(e);return"[object Function]"==r||"[object GeneratorFunction]"==r||"[object AsyncFunction]"==r||"[object Proxy]"==r},q=E["__core-js_shared__"],K=(J=/[^.]+$/.exec(q&&q.keys&&q.keys.IE_PROTO||""))?"Symbol(src)_1."+J:"";var Q=function(e){return!!K&&K in e},ee=Function.prototype.toString;var re=G,ne=Q,te=Z,ie=function(e){if(null!=e){try{return ee.call(e)}catch(e){}try{return e+""}catch(e){}}return""},se=/^\[object .+?Constructor\]$/,ae=Function.prototype,oe=Object.prototype,le=ae.toString,de=oe.hasOwnProperty,ce=RegExp("^"+le.call(de).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");var ue=function(e,r){return null==e?void 0:e[r]},ge=function(e){return!(!te(e)||ne(e))&&(re(e)?ce:se).test(ie(e))},he=ue;var be=function(e,r){var n=he(e,r);return ge(n)?n:void 0},me=be(Object,"create"),ye=me;var fe=function(){this.__data__=ye?ye(null):{},this.size=0};var pe=function(e){var r=this.has(e)&&delete this.__data__[e];return this.size-=r?1:0,r},ve=me,xe=Object.prototype.hasOwnProperty;var Fe=function(e){var r=this.__data__;if(ve){var n=r[e];return"__lodash_hash_undefined__"===n?void 0:n}return xe.call(r,e)?r[e]:void 0},we=me,$e=Object.prototype.hasOwnProperty;var De=function(e){var r=this.__data__;return we?void 0!==r[e]:$e.call(r,e)},Ee=me;var Ce=function(e,r){var n=this.__data__;return this.size+=this.has(e)?0:1,n[e]=Ee&&void 0===r?"__lodash_hash_undefined__":r,this},Be=fe,Ae=pe,ze=Fe,Se=De,Me=Ce;function ke(e){var r=-1,n=null==e?0:e.length;for(this.clear();++r<n;){var t=e[r];this.set(t[0],t[1])}}ke.prototype.clear=Be,ke.prototype.delete=Ae,ke.prototype.get=ze,ke.prototype.has=Se,ke.prototype.set=Me;var Oe=ke;var _e=function(){this.__data__=[],this.size=0};var Ye=function(e,r){return e===r||e!=e&&r!=r};var Te=function(e,r){for(var n=e.length;n--;)if(Ye(e[n][0],r))return n;return-1},Le=Te,je=Array.prototype.splice;var Ie=function(e){var r=this.__data__,n=Le(r,e);return!(n<0)&&(n==r.length-1?r.pop():je.call(r,n,1),--this.size,!0)},He=Te;var We=function(e){var r=this.__data__,n=He(r,e);return n<0?void 0:r[n][1]},Re=Te;var Ne=function(e){return Re(this.__data__,e)>-1},Pe=Te;var Ve=function(e,r){var n=this.__data__,t=Pe(n,e);return t<0?(++this.size,n.push([e,r])):n[t][1]=r,this},Ze=_e,Xe=Ie,Ue=We,Je=Ne,Ge=Ve;function qe(e){var r=-1,n=null==e?0:e.length;for(this.clear();++r<n;){var t=e[r];this.set(t[0],t[1])}}qe.prototype.clear=Ze,qe.prototype.delete=Xe,qe.prototype.get=Ue,qe.prototype.has=Je,qe.prototype.set=Ge;var Ke=qe,Qe=be(E,"Map"),er=Oe,rr=Ke,nr=Qe;var tr=function(e){var r=typeof e;return"string"==r||"number"==r||"symbol"==r||"boolean"==r?"__proto__"!==e:null===e};var ir=function(e,r){var n=e.__data__;return tr(r)?n["string"==typeof r?"string":"hash"]:n.map},sr=ir;var ar=function(e){var r=sr(this,e).delete(e);return this.size-=r?1:0,r},or=ir;var lr=function(e){return or(this,e).get(e)},dr=ir;var cr=function(e){return dr(this,e).has(e)},ur=ir;var gr=function(e,r){var n=ur(this,e),t=n.size;return n.set(e,r),this.size+=n.size==t?0:1,this},hr=function(){this.size=0,this.__data__={hash:new er,map:new(nr||rr),string:new er}},br=ar,mr=lr,yr=cr,fr=gr;function pr(e){var r=-1,n=null==e?0:e.length;for(this.clear();++r<n;){var t=e[r];this.set(t[0],t[1])}}pr.prototype.clear=hr,pr.prototype.delete=br,pr.prototype.get=mr,pr.prototype.has=yr,pr.prototype.set=fr;var vr=pr;function xr(e,r){if("function"!=typeof e||null!=r&&"function"!=typeof r)throw new TypeError("Expected a function");var n=function(){var t=arguments,i=r?r.apply(this,t):t[0],s=n.cache;if(s.has(i))return s.get(i);var a=e.apply(this,t);return n.cache=s.set(i,a)||s,a};return n.cache=new(xr.Cache||vr),n}xr.Cache=vr;var Fr=xr;var wr=function(e){var r=Fr(e,(function(e){return 500===n.size&&n.clear(),e})),n=r.cache;return r},$r=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,Dr=/\\(\\)?/g,Er=wr((function(e){var r=[];return 46===e.charCodeAt(0)&&r.push(""),e.replace($r,(function(e,n,t,i){r.push(t?i.replace(Dr,"$1"):n||e)})),r}));var Cr=function(e,r){for(var n=-1,t=null==e?0:e.length,i=Array(t);++n<t;)i[n]=r(e[n],n,e);return i},Br=w,Ar=H,zr=C?C.prototype:void 0,Sr=zr?zr.toString:void 0;var Mr=function e(r){if("string"==typeof r)return r;if(Br(r))return Cr(r,e)+"";if(Ar(r))return Sr?Sr.call(r):"";var n=r+"";return"0"==n&&1/r==-1/0?"-0":n},kr=Mr;var Or=w,_r=V,Yr=Er,Tr=function(e){return null==e?"":kr(e)};var Lr=H;var jr=function(e,r){return Or(e)?e:_r(e,r)?[e]:Yr(Tr(e))},Ir=function(e){if("string"==typeof e||Lr(e))return e;var r=e+"";return"0"==r&&1/e==-1/0?"-0":r};var Hr=function(e,r){for(var n=0,t=(r=jr(r,e)).length;null!=e&&n<t;)e=e[Ir(r[n++])];return n&&n==t?e:void 0};var Wr=F((function(e,r,n){var t=null==e?void 0:Hr(e,r);return void 0===t?n:t}));const Rr=(e,r,n)=>Wr(n,r)||Wr(e,r),Nr=(e,r)=>{const n=r||e.defaultValue;return Wr(e.collections,n)},Pr={collections:{default:{"width-005":.5,"width-010":1,"width-020":2,"width-040":4,solid:"solid"}},defaultValue:"default"},Vr=e=>r=>{var n;const t=r.theme,i=Nr(Pr,null==t?void 0:t.borderScheme);return(null===(n=null==t?void 0:t.overrides)||void 0===n?void 0:n.border)?`${Rr(i,e,t.overrides.border)}px`:`${i[e]}px`},Zr={"width-005":Vr("width-005"),"width-010":Vr("width-010"),"width-020":Vr("width-020"),"width-040":Vr("width-040"),solid:(Xr="solid",e=>{var r;const n=e.theme,t=Nr(Pr,null==n?void 0:n.borderScheme),i=(null===(r=null==n?void 0:n.overrides)||void 0===r?void 0:r.border)?Rr(t,Xr,n.overrides.border):t[Xr];return"function"==typeof i?i(e):i})};var Xr;const Ur={collections:{lifesg:{"brand-10":"#2C0C0B","brand-20":"#4C1513","brand-30":"#6C1D1B","brand-40":"#922825","brand-50":"#BF3431","brand-60":"#F15D5A","brand-70":"#F69491","brand-80":"#FABAB7","brand-90":"#FCD7D2","brand-95":"#FFEBE7","brand-100":"#FFF6F4","primary-10":"#001731","primary-20":"#002752","primary-30":"#003874","primary-40":"#004D9F","primary-50":"#1768BE","primary-60":"#3C91EC","primary-70":"#6CB4FF","primary-80":"#A5CDFF","primary-90":"#CFE1FE","primary-95":"#E8F0FE","primary-100":"#F7F9FF","secondary-10":"#131529","secondary-20":"#222547","secondary-30":"#2F3565","secondary-40":"#42498B","secondary-50":"#5B62A7","secondary-60":"#858CBD","secondary-70":"#A8ADCF","secondary-80":"#C6C9E0","secondary-90":"#DDDFEC","secondary-95":"#EDEEF5","secondary-100":"#F8F8FB","neutral-10":"#161616","neutral-20":"#282828","neutral-30":"#393939","neutral-40":"#4E4E4E","neutral-50":"#686868","neutral-60":"#8E8E8E","neutral-70":"#AFAFB0","neutral-80":"#C7CACA","neutral-90":"#DDE1E2","neutral-95":"#EDEFEF","neutral-100":"#F9F9F9","success-10":"#081A0F","success-20":"#0E2D1B","success-30":"#154126","success-40":"#1C5A34","success-50":"#257645","success-60":"#44A068","success-70":"#64C189","success-80":"#80DCA5","success-90":"#B4ECCB","success-95":"#D5F6E2","success-100":"#EFFCF4","warning-10":"#221302","warning-20":"#3B2204","warning-30":"#543106","warning-40":"#744408","warning-50":"#98590C","warning-60":"#D07A13","warning-70":"#E4A244","warning-80":"#F5C26C","warning-90":"#FADBA6","warning-95":"#FCECD4","warning-100":"#FDF7F0","error-10":"#330505","error-20":"#550808","error-30":"#750C0C","error-40":"#9E130F","error-50":"#CB2213","error-60":"#DE6C6C","error-70":"#E89B9B","error-80":"#EFBEBE","error-90":"#F5D9D9","error-95":"#F9ECEC","error-100":"#FCF7F7","info-10":"#021824","info-20":"#032B3F","info-30":"#053D59","info-40":"#065478","info-50":"#176E9B","info-60":"#5296BE","info-70":"#82B5DA","info-80":"#ACCFE7","info-90":"#CCE3F1","info-95":"#E3F1F8","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000","primary-inverse":"#FEAB10"},bookingsg:{"brand-10":"#2C0C0B","brand-20":"#4C1513","brand-30":"#6C1D1B","brand-40":"#922825","brand-50":"#BF3431","brand-60":"#F15D5A","brand-70":"#F69491","brand-80":"#FABAB7","brand-90":"#FCD7D2","brand-95":"#FFEBE7","brand-100":"#FFF6F4","primary-10":"#1A122C","primary-20":"#2F1F4D","primary-30":"#422D6E","primary-40":"#5B3D97","primary-50":"#7654BC","primary-60":"#9A82CD","primary-70":"#B7A7D8","primary-80":"#CFC5E5","primary-90":"#E3DDF0","primary-95":"#F0EDF7","primary-100":"#F9F8FC","secondary-10":"#0E1723","secondary-20":"#18293D","secondary-30":"#233A57","secondary-40":"#305078","secondary-50":"#4B6A8F","secondary-60":"#7B91A9","secondary-70":"#A1B1C3","secondary-80":"#C1CBD7","secondary-90":"#DBE1E8","secondary-95":"#EBEFF2","secondary-100":"#F7F8FA","neutral-10":"#161616","neutral-20":"#282828","neutral-30":"#393939","neutral-40":"#4E4E4E","neutral-50":"#686868","neutral-60":"#8E8E8E","neutral-70":"#AFAFB0","neutral-80":"#C7CACA","neutral-90":"#DDE1E2","neutral-95":"#EDEFEF","neutral-100":"#F9F9F9","success-10":"#081A0F","success-20":"#0E2D1B","success-30":"#154126","success-40":"#1C5A34","success-50":"#257645","success-60":"#44A068","success-70":"#64C189","success-80":"#80DCA5","success-90":"#B4ECCB","success-95":"#D5F6E2","success-100":"#EFFCF4","warning-10":"#221302","warning-20":"#3B2204","warning-30":"#543106","warning-40":"#744408","warning-50":"#98590C","warning-60":"#D07A13","warning-70":"#E4A244","warning-80":"#F5C26C","warning-90":"#FADBA6","warning-95":"#FCECD4","warning-100":"#FDF7F0","error-10":"#330505","error-20":"#550808","error-30":"#750C0C","error-40":"#9E130F","error-50":"#CB2213","error-60":"#DE6C6C","error-70":"#E89B9B","error-80":"#EFBEBE","error-90":"#F5D9D9","error-95":"#F9ECEC","error-100":"#FCF7F7","info-10":"#021824","info-20":"#032B3F","info-30":"#053D59","info-40":"#065478","info-50":"#176E9B","info-60":"#5296BE","info-70":"#82B5DA","info-80":"#ACCFE7","info-90":"#CCE3F1","info-95":"#E3F1F8","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000","primary-inverse":"#FEAB10"},rbs:{"brand-10":"#0E123A","brand-20":"#191E65","brand-30":"#232B90","brand-40":"#303BC5","brand-50":"#494CFF","brand-60":"#AD6EFF","brand-70":"#AEA4FF","brand-80":"#C5C4FF","brand-90":"#DDDCFF","brand-95":"#EDECFF","brand-100":"#F8F8FF","primary-10":"#10152B","primary-20":"#1C254B","primary-30":"#28356C","primary-40":"#38489A","primary-50":"#4D5AD7","primary-60":"#7487F2","primary-70":"#9AAAFC","primary-80":"#BDC7FD","primary-90":"#DADFFB","primary-95":"#ECEEFE","primary-100":"#F7F8FF","secondary-10":"#19151D","secondary-20":"#2B2533","secondary-30":"#3E3649","secondary-40":"#564A64","secondary-50":"#6F637D","secondary-60":"#948B9F","secondary-70":"#B3ACBB","secondary-80":"#CCC8D2","secondary-90":"#E1DEE4","secondary-95":"#EFEEF1","secondary-100":"#F9F8F9","neutral-10":"#161616","neutral-20":"#282828","neutral-30":"#393939","neutral-40":"#4E4E4E","neutral-50":"#686868","neutral-60":"#8E8E8E","neutral-70":"#AFAFB0","neutral-80":"#C7CACA","neutral-90":"#DDE1E2","neutral-95":"#EDEFEF","neutral-100":"#F9F9F9","success-10":"#081A0F","success-20":"#0E2D1B","success-30":"#154126","success-40":"#1C5A34","success-50":"#257645","success-60":"#44A068","success-70":"#64C189","success-80":"#80DCA5","success-90":"#B4ECCB","success-95":"#D5F6E2","success-100":"#EFFCF4","warning-10":"#221302","warning-20":"#3B2204","warning-30":"#543106","warning-40":"#744408","warning-50":"#98590C","warning-60":"#D07A13","warning-70":"#E4A244","warning-80":"#F5C26C","warning-90":"#FADBA6","warning-95":"#FCECD4","warning-100":"#FDF7F0","error-10":"#330505","error-20":"#550808","error-30":"#750C0C","error-40":"#9E130F","error-50":"#CB2213","error-60":"#DE6C6C","error-70":"#E89B9B","error-80":"#EFBEBE","error-90":"#F5D9D9","error-95":"#F9ECEC","error-100":"#FCF7F7","info-10":"#021824","info-20":"#032B3F","info-30":"#053D59","info-40":"#065478","info-50":"#176E9B","info-60":"#5296BE","info-70":"#82B5DA","info-80":"#ACCFE7","info-90":"#CCE3F1","info-95":"#E3F1F8","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000","primary-inverse":"#FEAB10"},mylegacy:{"brand-10":"#2C0C0B","brand-20":"#4C1513","brand-30":"#6C1D1B","brand-40":"#922825","brand-50":"#BF3431","brand-60":"#F15D5A","brand-70":"#F69491","brand-80":"#FABAB7","brand-90":"#FCD7D2","brand-95":"#FFEBE7","brand-100":"#FFF6F4","primary-10":"#0011924","primary-20":"#032B40","primary-30":"#043D5A","primary-40":"#05547B","primary-50":"#096EA1","primary-60":"#2098D3","primary-70":"#5CB9E8","primary-80":"#8BD3F6","primary-90":"#BEE6FA","primary-95":"#E2F2FA","primary-100":"#F4FAFC","secondary-10":"#131529","secondary-20":"#222547","secondary-30":"#2F3565","secondary-40":"#42498B","secondary-50":"#5B62A7","secondary-60":"#858CBD","secondary-70":"#A8ADCF","secondary-80":"#C6C9E0","secondary-90":"#DDDFEC","secondary-95":"#EDEEF5","secondary-100":"#F8F8FB","neutral-10":"#161616","neutral-20":"#282828","neutral-30":"#393939","neutral-40":"#4E4E4E","neutral-50":"#686868","neutral-60":"#8E8E8E","neutral-70":"#AFAFB0","neutral-80":"#C7CACA","neutral-90":"#DDE1E2","neutral-95":"#EDEFEF","neutral-100":"#F9F9F9","success-10":"#081A0F","success-20":"#0E2D1B","success-30":"#154126","success-40":"#1C5A34","success-50":"#257645","success-60":"#44A068","success-70":"#64C189","success-80":"#80DCA5","success-90":"#B4ECCB","success-95":"#D5F6E2","success-100":"#EFFCF4","warning-10":"#221302","warning-20":"#3B2204","warning-30":"#543106","warning-40":"#744408","warning-50":"#98590C","warning-60":"#D07A13","warning-70":"#E4A244","warning-80":"#F5C26C","warning-90":"#FADBA6","warning-95":"#FCECD4","warning-100":"#FDF7F0","error-10":"#330505","error-20":"#550808","error-30":"#750C0C","error-40":"#9E130F","error-50":"#CB2213","error-60":"#DE6C6C","error-70":"#E89B9B","error-80":"#EFBEBE","error-90":"#F5D9D9","error-95":"#F9ECEC","error-100":"#FCF7F7","info-10":"#021824","info-20":"#032B3F","info-30":"#053D59","info-40":"#065478","info-50":"#176E9B","info-60":"#5296BE","info-70":"#82B5DA","info-80":"#ACCFE7","info-90":"#CCE3F1","info-95":"#E3F1F8","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000","primary-inverse":"#FEAB10"},ccube:{"brand-10":"#1F1221","brand-20":"#371F3B","brand-30":"#4E2C53","brand-40":"#6B3E73","brand-50":"#8D5197","brand-60":"#FF3399","brand-70":"#FF88C4","brand-80":"#FFB3D9","brand-90":"#FFD4E9","brand-95":"#FFE8F3","brand-100":"#FFD6EB","primary-10":"#1F1221","primary-20":"#371F3B","primary-30":"#4E2C53","primary-40":"#6B3E73","primary-50":"#8D5197","primary-60":"#B07DB7","primary-70":"#C7A3CC","primary-80":"#D9C2DD","primary-90":"#E9DBEB","primary-95":"#F3ECF4","primary-100":"#FAF7FA","secondary-10":"#2D091B","secondary-20":"#4D0F2E","secondary-30":"#6B1540","secondary-40":"#931D58","secondary-50":"#C02673","secondary-60":"#FF409F","secondary-70":"#FF88C4","secondary-80":"#FFB3D9","secondary-90":"#FFD4E9","secondary-95":"#FFE8F3","secondary-100":"#FFF8FC","neutral-10":"#161616","neutral-20":"#282828","neutral-30":"#393939","neutral-40":"#4E4E4E","neutral-50":"#686868","neutral-60":"#8E8E8E","neutral-70":"#AFAFB0","neutral-80":"#C7CACA","neutral-90":"#DDE1E2","neutral-95":"#EDEFEF","neutral-100":"#F9F9F9","success-10":"#081A0F","success-20":"#0E2D1B","success-30":"#154126","success-40":"#1C5A34","success-50":"#257645","success-60":"#44A068","success-70":"#64C189","success-80":"#80DCA5","success-90":"#B4ECCB","success-95":"#D5F6E2","success-100":"#EFFCF4","warning-10":"#221302","warning-20":"#3B2204","warning-30":"#543106","warning-40":"#744408","warning-50":"#98590C","warning-60":"#D07A13","warning-70":"#E4A244","warning-80":"#F5C26C","warning-90":"#FADBA6","warning-95":"#FCECD4","warning-100":"#FDF7F0","error-10":"#330505","error-20":"#550808","error-30":"#750C0C","error-40":"#9E130F","error-50":"#CB2213","error-60":"#DE6C6C","error-70":"#E89B9B","error-80":"#EFBEBE","error-90":"#F5D9D9","error-95":"#F9ECEC","error-100":"#FCF7F7","info-10":"#021824","info-20":"#032B3F","info-30":"#053D59","info-40":"#065478","info-50":"#176E9B","info-60":"#5296BE","info-70":"#82B5DA","info-80":"#ACCFE7","info-90":"#CCE3F1","info-95":"#E3F1F8","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000","primary-inverse":"#FEAB10"},oneservice:{"brand-10":"#001A19","brand-20":"#002D2B","brand-30":"#00413D","brand-40":"#005954","brand-50":"#00756F","brand-60":"#03A098","brand-70":"#55BFBA","brand-80":"#92D6D2","brand-90":"#BFE7E5","brand-95":"#DDF2F1","brand-100":"#F4FBFA","primary-10":"#09191D","primary-20":"#102B34","primary-30":"#173D49","primary-40":"#205666","primary-50":"#2A7086","primary-60":"#2A7086","primary-70":"#8CB6C2","primary-80":"#B2CED6","primary-90":"#D1E2E7","primary-95":"#E8F0F3","primary-100":"#F9F8FC","secondary-10":"#001731","secondary-20":"#002752","secondary-30":"#003874","secondary-40":"#004D9F","secondary-50":"#5B62A7","secondary-60":"#858CBD","secondary-70":"#A8ADCF","secondary-80":"#C6C9E0","secondary-90":"#DDDFEC","secondary-95":"#EDEEF5","secondary-100":"#F8F8FB","neutral-10":"#161616","neutral-20":"#282828","neutral-30":"#393939","neutral-40":"#4E4E4E","neutral-50":"#686868","neutral-60":"#8E8E8E","neutral-70":"#AFAFB0","neutral-80":"#C7CACA","neutral-90":"#DDE1E2","neutral-95":"#EDEFEF","neutral-100":"#F9F9F9","success-10":"#081A0F","success-20":"#0E2D1B","success-30":"#154126","success-40":"#1C5A34","success-50":"#257645","success-60":"#44A068","success-70":"#64C189","success-80":"#80DCA5","success-90":"#B4ECCB","success-95":"#D5F6E2","success-100":"#EFFCF4","warning-10":"#221302","warning-20":"#3B2204","warning-30":"#543106","warning-40":"#744408","warning-50":"#98590C","warning-60":"#D07A13","warning-70":"#E4A244","warning-80":"#F5C26C","warning-90":"#FADBA6","warning-95":"#FCECD4","warning-100":"#FDF7F0","error-10":"#330505","error-20":"#550808","error-30":"#750C0C","error-40":"#9E130F","error-50":"#CB2213","error-60":"#DE6C6C","error-70":"#E89B9B","error-80":"#EFBEBE","error-90":"#F5D9D9","error-95":"#F9ECEC","error-100":"#FCF7F7","info-10":"#021824","info-20":"#032B3F","info-30":"#053D59","info-40":"#065478","info-50":"#176E9B","info-60":"#5296BE","info-70":"#82B5DA","info-80":"#ACCFE7","info-90":"#CCE3F1","info-95":"#E3F1F8","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000","primary-inverse":"#FEAB10"},pa:{"brand-10":"#881317","brand-20":"#B5191E","brand-30":"#B5040A","brand-40":"#D0333F","brand-50":"#DC666F","brand-60":"#E28087","brand-70":"#E7999F","brand-80":"#EDB3B7","brand-90":"#F3CCCF","brand-95":"#F9E6E7","brand-100":"#FCF2F3","primary-10":"#000000","primary-20":"#191919","primary-30":"#333333","primary-40":"#4D4D4D","primary-50":"#666666","primary-60":"#808080","primary-70":"#999999","primary-80":"#B3B3B3","primary-90":"#E6E6E6","primary-95":"#F7F7F7","primary-100":"#FFFFFF","secondary-10":"#19151D","secondary-20":"#2B2533","secondary-30":"#3E3649","secondary-40":"#564A64","secondary-50":"#6F637D","secondary-60":"#948B9F","secondary-70":"#B3ACBB","secondary-80":"#CCC8D2","secondary-90":"#E1DEE4","secondary-95":"#EFEEF1","secondary-100":"#F9F8F9","neutral-10":"#000000","neutral-20":"#191919","neutral-30":"#333333","neutral-40":"#4D4D4D","neutral-50":"#666666","neutral-60":"#808080","neutral-70":"#999999","neutral-80":"#B3B3B3","neutral-90":"#E6E6E6","neutral-95":"#F7F7F7","neutral-100":"#FFFFFF","success-10":"#081A0F","success-20":"#0E2D1B","success-30":"#154126","success-40":"#1C5A34","success-50":"#257645","success-60":"#44A068","success-70":"#64C189","success-80":"#80DCA5","success-90":"#B4ECCB","success-95":"#D5F6E2","success-100":"#EFFCF4","warning-10":"#221302","warning-20":"#3B2204","warning-30":"#543106","warning-40":"#744408","warning-50":"#98590C","warning-60":"#D07A13","warning-70":"#E4A244","warning-80":"#F5C26C","warning-90":"#FADBA6","warning-95":"#FCECD4","warning-100":"#FDF7F0","error-10":"#330505","error-20":"#550808","error-30":"#750C0C","error-40":"#9E130F","error-50":"#CB2213","error-60":"#DE6C6C","error-70":"#E89B9B","error-80":"#EFBEBE","error-90":"#F5D9D9","error-95":"#F9ECEC","error-100":"#FCF7F7","info-10":"#021824","info-20":"#032B3F","info-30":"#053D59","info-40":"#065478","info-50":"#176E9B","info-60":"#5296BE","info-70":"#82B5DA","info-80":"#ACCFE7","info-90":"#CCE3F1","info-95":"#E3F1F8","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000","primary-inverse":"#FEAB10"}},defaultValue:"lifesg"},Jr=e=>r=>{var n;const t=r.theme,i=Nr(Ur,null==t?void 0:t.colourScheme);return(null===(n=null==t?void 0:t.overrides)||void 0===n?void 0:n.primitiveColour)?Rr(i,e,t.overrides.primitiveColour):i[e]},Gr={"brand-10":Jr("brand-10"),"brand-20":Jr("brand-20"),"brand-30":Jr("brand-30"),"brand-40":Jr("brand-40"),"brand-50":Jr("brand-50"),"brand-60":Jr("brand-60"),"brand-70":Jr("brand-70"),"brand-80":Jr("brand-80"),"brand-90":Jr("brand-90"),"brand-95":Jr("brand-95"),"brand-100":Jr("brand-100"),"primary-10":Jr("primary-10"),"primary-20":Jr("primary-20"),"primary-30":Jr("primary-30"),"primary-40":Jr("primary-40"),"primary-50":Jr("primary-50"),"primary-60":Jr("primary-60"),"primary-70":Jr("primary-70"),"primary-80":Jr("primary-80"),"primary-90":Jr("primary-90"),"primary-95":Jr("primary-95"),"primary-100":Jr("primary-100"),"secondary-10":Jr("secondary-10"),"secondary-20":Jr("secondary-20"),"secondary-30":Jr("secondary-30"),"secondary-40":Jr("secondary-40"),"secondary-50":Jr("secondary-50"),"secondary-60":Jr("secondary-60"),"secondary-70":Jr("secondary-70"),"secondary-80":Jr("secondary-80"),"secondary-90":Jr("secondary-90"),"secondary-95":Jr("secondary-95"),"secondary-100":Jr("secondary-100"),"neutral-10":Jr("neutral-10"),"neutral-20":Jr("neutral-20"),"neutral-30":Jr("neutral-30"),"neutral-40":Jr("neutral-40"),"neutral-50":Jr("neutral-50"),"neutral-60":Jr("neutral-60"),"neutral-70":Jr("neutral-70"),"neutral-80":Jr("neutral-80"),"neutral-90":Jr("neutral-90"),"neutral-95":Jr("neutral-95"),"neutral-100":Jr("neutral-100"),"success-10":Jr("success-10"),"success-20":Jr("success-20"),"success-30":Jr("success-30"),"success-40":Jr("success-40"),"success-50":Jr("success-50"),"success-60":Jr("success-60"),"success-70":Jr("success-70"),"success-80":Jr("success-80"),"success-90":Jr("success-90"),"success-95":Jr("success-95"),"success-100":Jr("success-100"),"warning-10":Jr("warning-10"),"warning-20":Jr("warning-20"),"warning-30":Jr("warning-30"),"warning-40":Jr("warning-40"),"warning-50":Jr("warning-50"),"warning-60":Jr("warning-60"),"warning-70":Jr("warning-70"),"warning-80":Jr("warning-80"),"warning-90":Jr("warning-90"),"warning-95":Jr("warning-95"),"warning-100":Jr("warning-100"),"error-10":Jr("error-10"),"error-20":Jr("error-20"),"error-30":Jr("error-30"),"error-40":Jr("error-40"),"error-50":Jr("error-50"),"error-60":Jr("error-60"),"error-70":Jr("error-70"),"error-80":Jr("error-80"),"error-90":Jr("error-90"),"error-95":Jr("error-95"),"error-100":Jr("error-100"),"info-10":Jr("info-10"),"info-20":Jr("info-20"),"info-30":Jr("info-30"),"info-40":Jr("info-40"),"info-50":Jr("info-50"),"info-60":Jr("info-60"),"info-70":Jr("info-70"),"info-80":Jr("info-80"),"info-90":Jr("info-90"),"info-95":Jr("info-95"),"info-100":Jr("info-100"),white:Jr("white"),black:Jr("black"),"primary-inverse":Jr("primary-inverse")},qr={text:Jr("neutral-20"),"text-subtle":Jr("neutral-30"),"text-subtler":Jr("neutral-50"),"text-subtlest":Jr("neutral-60"),"text-primary":Jr("primary-50"),"text-hover":Jr("primary-40"),"text-selected":Jr("primary-50"),"text-selected-hover":Jr("primary-40"),"text-disabled":Jr("neutral-50"),"text-disabled-subtle":Jr("neutral-60"),"text-disabled-subtlest":Jr("neutral-80"),"text-selected-disabled":Jr("neutral-20"),"text-success":Jr("success-40"),"text-warning":Jr("warning-40"),"text-error":Jr("error-40"),"text-info":Jr("info-40"),"text-inverse":Jr("white"),icon:Jr("neutral-50"),"icon-subtle":Jr("neutral-60"),"icon-strongest":Jr("neutral-20"),"icon-primary":Jr("primary-50"),"icon-primary-subtle":Jr("primary-60"),"icon-primary-subtlest":Jr("primary-70"),"icon-hover":Jr("primary-40"),"icon-selected":Jr("primary-50"),"icon-selected-hover":Jr("primary-40"),"icon-disabled":Jr("neutral-50"),"icon-disabled-subtle":Jr("neutral-60"),"icon-selected-disabled":Jr("neutral-60"),"icon-success":Jr("success-50"),"icon-warning":Jr("warning-60"),"icon-error":Jr("error-50"),"icon-error-strong":Jr("error-40"),"icon-info":Jr("info-50"),"icon-inverse":Jr("white"),"icon-primary-inverse":Jr("primary-inverse"),border:Jr("neutral-90"),"border-strong":Jr("neutral-70"),"border-stronger":Jr("neutral-50"),"border-primary":Jr("primary-50"),"border-primary-subtle":Jr("primary-60"),"border-hover":Jr("primary-90"),"border-hover-strong":Jr("primary-60"),"border-selected":Jr("primary-50"),"border-selected-subtle":Jr("primary-70"),"border-selected-subtlest":Jr("primary-90"),"border-selected-hover":Jr("primary-40"),"border-focus":Jr("primary-60"),"border-focus-strong":Jr("primary-50"),"border-disabled":Jr("neutral-90"),"border-selected-disabled":Jr("neutral-70"),"border-success":Jr("success-60"),"border-warning":Jr("warning-60"),"border-error":Jr("error-60"),"border-error-focus":Jr("error-60"),"border-error-focus-strong":Jr("error-40"),"border-error-strong":Jr("error-40"),"border-info":Jr("info-60"),bg:Jr("white"),"bg-strong":Jr("neutral-100"),"bg-stronger":Jr("neutral-95"),"bg-strongest":Jr("neutral-90"),"bg-hover":Jr("primary-95"),"bg-hover-strong":Jr("primary-90"),"bg-hover-subtle":Jr("primary-100"),"bg-hover-neutral":Jr("neutral-100"),"bg-hover-neutral-strong":Jr("neutral-90"),"bg-selected":Jr("primary-95"),"bg-selected-hover":Jr("primary-90"),"bg-selected-strong":Jr("primary-90"),"bg-selected-stronger":Jr("primary-70"),"bg-selected-strongest":Jr("primary-50"),"bg-selected-strongest-hover":Jr("primary-40"),"bg-disabled":Jr("neutral-95"),"bg-selected-disabled":Jr("neutral-95"),"bg-selected-stronger-disabled":Jr("neutral-70"),"bg-success":Jr("success-100"),"bg-success-hover":Jr("success-95"),"bg-success-strong":Jr("success-50"),"bg-success-strong-hover":Jr("success-40"),"bg-warning":Jr("warning-100"),"bg-warning-hover":Jr("warning-95"),"bg-warning-strong":Jr("warning-50"),"bg-warning-strong-hover":Jr("warning-40"),"bg-info":Jr("info-100"),"bg-info-hover":Jr("info-95"),"bg-info-strong":Jr("info-50"),"bg-info-strong-hover":Jr("info-40"),"bg-error":Jr("error-100"),"bg-error-hover":Jr("error-95"),"bg-error-strong":Jr("error-50"),"bg-error-strong-hover":Jr("error-40"),"bg-inverse":Jr("neutral-20"),"bg-inverse-subtle":Jr("neutral-30"),"bg-inverse-subtler":Jr("neutral-50"),"bg-inverse-subtlest":Jr("neutral-60"),"bg-inverse-hover":Jr("neutral-40"),"bg-primary":Jr("primary-50"),"bg-primary-subtle":Jr("primary-60"),"bg-primary-subtler":Jr("primary-95"),"bg-primary-subtlest":Jr("primary-100"),"bg-available":"#6DD0A1","bg-primary-hover":Jr("primary-40"),"bg-primary-subtlest-hover":Jr("primary-90"),"bg-primary-subtlest-selected":Jr("primary-90"),"overlay-strong":"rgba(40, 40, 40, 0.85)","overlay-subtle":"rgba(40, 40, 40, 0.20)",hyperlink:Jr("primary-50"),"hyperlink-hover":Jr("primary-40"),"hyperlink-visited":Jr("primary-40"),"hyperlink-inverse":Jr("primary-inverse"),"focus-ring":Jr("black"),"focus-ring-inverse":Jr("white")},Kr={collections:{lifesg:qr,bookingsg:qr,rbs:qr,mylegacy:qr,ccube:qr,oneservice:qr,pa:{text:Jr("neutral-30"),"text-subtle":Jr("neutral-40"),"text-subtler":Jr("neutral-50"),"text-subtlest":Jr("neutral-70"),"text-primary":Jr("neutral-10"),"text-hover":Jr("neutral-70"),"text-selected":Jr("neutral-20"),"text-selected-hover":Jr("neutral-10"),"text-disabled":Jr("neutral-50"),"text-disabled-subtle":Jr("neutral-60"),"text-disabled-subtlest":Jr("neutral-80"),"text-selected-disabled":Jr("neutral-40"),"text-success":Jr("success-40"),"text-warning":Jr("warning-40"),"text-error":Jr("brand-30"),"text-info":Jr("neutral-40"),"text-inverse":Jr("neutral-100"),icon:Jr("neutral-40"),"icon-subtle":Jr("neutral-50"),"icon-strongest":Jr("neutral-10"),"icon-primary":Jr("neutral-10"),"icon-primary-subtle":Jr("neutral-30"),"icon-primary-subtlest":Jr("neutral-60"),"icon-hover":Jr("neutral-70"),"icon-selected":Jr("brand-20"),"icon-selected-hover":Jr("brand-10"),"icon-disabled":Jr("neutral-50"),"icon-disabled-subtle":Jr("neutral-60"),"icon-selected-disabled":Jr("neutral-40"),"icon-success":Jr("success-40"),"icon-warning":Jr("warning-60"),"icon-error":Jr("brand-30"),"icon-error-strong":Jr("brand-10"),"icon-info":Jr("neutral-40"),"icon-inverse":Jr("neutral-100"),"icon-primary-inverse":"#F9B371",border:Jr("neutral-90"),"border-strong":Jr("neutral-30"),"border-stronger":Jr("neutral-20"),"border-primary":Jr("neutral-40"),"border-primary-subtle":Jr("neutral-60"),"border-hover":Jr("neutral-80"),"border-hover-strong":Jr("neutral-10"),"border-selected":Jr("brand-20"),"border-selected-subtle":Jr("neutral-40"),"border-selected-subtlest":Jr("neutral-70"),"border-selected-hover":Jr("neutral-10"),"border-focus":Jr("neutral-20"),"border-focus-strong":Jr("neutral-10"),"border-disabled":Jr("neutral-90"),"border-selected-disabled":Jr("neutral-80"),"border-success":Jr("success-40"),"border-warning":Jr("warning-60"),"border-error":Jr("brand-30"),"border-error-focus":Jr("brand-20"),"border-error-focus-strong":Jr("brand-10"),"border-error-strong":Jr("brand-20"),"border-info":Jr("neutral-40"),bg:Jr("neutral-100"),"bg-strong":Jr("neutral-95"),"bg-stronger":Jr("neutral-90"),"bg-strongest":Jr("neutral-80"),"bg-hover":Jr("brand-90"),"bg-hover-strong":Jr("brand-80"),"bg-hover-subtle":Jr("neutral-90"),"bg-hover-neutral":Jr("neutral-90"),"bg-hover-neutral-strong":Jr("neutral-90"),"bg-selected":Jr("brand-100"),"bg-selected-hover":Jr("brand-30"),"bg-selected-strong":Jr("brand-50"),"bg-selected-stronger":Jr("brand-40"),"bg-selected-strongest":Jr("brand-20"),"bg-selected-strongest-hover":Jr("brand-10"),"bg-disabled":Jr("neutral-90"),"bg-selected-disabled":Jr("neutral-90"),"bg-selected-stronger-disabled":Jr("neutral-80"),"bg-success":Jr("success-100"),"bg-success-hover":Jr("success-95"),"bg-success-strong":Jr("success-50"),"bg-success-strong-hover":Jr("success-40"),"bg-warning":Jr("warning-100"),"bg-warning-hover":Jr("warning-95"),"bg-warning-strong":Jr("warning-50"),"bg-warning-strong-hover":Jr("warning-40"),"bg-info":Jr("neutral-95"),"bg-info-hover":Jr("info-95"),"bg-info-strong":Jr("info-50"),"bg-info-strong-hover":Jr("info-40"),"bg-error":Jr("brand-100"),"bg-error-hover":Jr("error-95"),"bg-error-strong":Jr("error-50"),"bg-error-strong-hover":Jr("error-40"),"bg-inverse":Jr("neutral-40"),"bg-inverse-subtle":Jr("neutral-60"),"bg-inverse-subtler":Jr("neutral-70"),"bg-inverse-subtlest":Jr("neutral-80"),"bg-inverse-hover":Jr("neutral-30"),"bg-primary":Jr("brand-20"),"bg-primary-subtle":Jr("brand-60"),"bg-primary-subtler":Jr("brand-80"),"bg-primary-subtlest":Jr("brand-100"),"bg-available":Jr("success-60"),"bg-primary-hover":Jr("brand-10"),"bg-primary-subtlest-hover":Jr("brand-80"),"bg-primary-subtlest-selected":Jr("brand-40"),"overlay-strong":"rgba(25, 25, 25, 0.95)","overlay-subtle":"rgba(25, 25, 25, 0.20)",hyperlink:Jr("neutral-10"),"hyperlink-hover":Jr("neutral-40"),"hyperlink-visited":Jr("neutral-50"),"hyperlink-inverse":"#F8AE68","focus-ring":Jr("black"),"focus-ring-inverse":Jr("white")}},defaultValue:"lifesg"},Qr=e=>r=>{var n;const t=r.theme,i=Nr(Kr,null==t?void 0:t.colourScheme),s=(null===(n=null==t?void 0:t.overrides)||void 0===n?void 0:n.semanticColour)?Rr(i,e,t.overrides.semanticColour):i[e];return"function"==typeof s?s(r):s},en={text:Qr("text"),"text-subtle":Qr("text-subtle"),"text-subtler":Qr("text-subtler"),"text-subtlest":Qr("text-subtlest"),"text-primary":Qr("text-primary"),"text-hover":Qr("text-hover"),"text-selected":Qr("text-selected"),"text-selected-hover":Qr("text-selected-hover"),"text-disabled":Qr("text-disabled"),"text-disabled-subtle":Qr("text-disabled-subtle"),"text-disabled-subtlest":Qr("text-disabled-subtlest"),"text-selected-disabled":Qr("text-selected-disabled"),"text-success":Qr("text-success"),"text-warning":Qr("text-warning"),"text-error":Qr("text-error"),"text-info":Qr("text-info"),"text-inverse":Qr("text-inverse"),icon:Qr("icon"),"icon-subtle":Qr("icon-subtle"),"icon-strongest":Qr("icon-strongest"),"icon-primary":Qr("icon-primary"),"icon-primary-subtle":Qr("icon-primary-subtle"),"icon-primary-subtlest":Qr("icon-primary-subtlest"),"icon-hover":Qr("icon-hover"),"icon-selected":Qr("icon-selected"),"icon-selected-hover":Qr("icon-selected-hover"),"icon-disabled":Qr("icon-disabled"),"icon-disabled-subtle":Qr("icon-disabled-subtle"),"icon-selected-disabled":Qr("icon-selected-disabled"),"icon-success":Qr("icon-success"),"icon-warning":Qr("icon-warning"),"icon-error":Qr("icon-error"),"icon-error-strong":Qr("icon-error-strong"),"icon-info":Qr("icon-info"),"icon-inverse":Qr("icon-inverse"),"icon-primary-inverse":Qr("icon-primary-inverse"),border:Qr("border"),"border-strong":Qr("border-strong"),"border-stronger":Qr("border-stronger"),"border-primary":Qr("border-primary"),"border-primary-subtle":Qr("border-primary-subtle"),"border-hover":Qr("border-hover"),"border-hover-strong":Qr("border-hover-strong"),"border-selected":Qr("border-selected"),"border-selected-subtle":Qr("border-selected-subtle"),"border-selected-subtlest":Qr("border-selected-subtlest"),"border-selected-hover":Qr("border-selected-hover"),"border-focus":Qr("border-focus"),"border-focus-strong":Qr("border-focus-strong"),"border-disabled":Qr("border-disabled"),"border-selected-disabled":Qr("border-selected-disabled"),"border-success":Qr("border-success"),"border-warning":Qr("border-warning"),"border-error":Qr("border-error"),"border-error-focus":Qr("border-error-focus"),"border-error-focus-strong":Qr("border-error-focus-strong"),"border-error-strong":Qr("border-error-strong"),"border-info":Qr("border-info"),bg:Qr("bg"),"bg-strong":Qr("bg-strong"),"bg-stronger":Qr("bg-stronger"),"bg-strongest":Qr("bg-strongest"),"bg-hover":Qr("bg-hover"),"bg-hover-strong":Qr("bg-hover-strong"),"bg-hover-subtle":Qr("bg-hover-subtle"),"bg-hover-neutral":Qr("bg-hover-neutral"),"bg-hover-neutral-strong":Qr("bg-hover-neutral-strong"),"bg-selected":Qr("bg-selected"),"bg-selected-hover":Qr("bg-selected-hover"),"bg-selected-strong":Qr("bg-selected-strong"),"bg-selected-stronger":Qr("bg-selected-stronger"),"bg-selected-strongest":Qr("bg-selected-strongest"),"bg-selected-strongest-hover":Qr("bg-selected-strongest-hover"),"bg-disabled":Qr("bg-disabled"),"bg-selected-disabled":Qr("bg-selected-disabled"),"bg-selected-stronger-disabled":Qr("bg-selected-stronger-disabled"),"bg-success":Qr("bg-success"),"bg-success-hover":Qr("bg-success-hover"),"bg-success-strong":Qr("bg-success-strong"),"bg-success-strong-hover":Qr("bg-success-strong-hover"),"bg-warning":Qr("bg-warning"),"bg-warning-hover":Qr("bg-warning-hover"),"bg-warning-strong":Qr("bg-warning-strong"),"bg-warning-strong-hover":Qr("bg-warning-strong-hover"),"bg-info":Qr("bg-info"),"bg-info-hover":Qr("bg-info-hover"),"bg-info-strong":Qr("bg-info-strong"),"bg-info-strong-hover":Qr("bg-info-strong-hover"),"bg-error":Qr("bg-error"),"bg-error-hover":Qr("bg-error-hover"),"bg-error-strong":Qr("bg-error-strong"),"bg-error-strong-hover":Qr("bg-error-strong-hover"),"bg-inverse":Qr("bg-inverse"),"bg-inverse-subtle":Qr("bg-inverse-subtle"),"bg-inverse-subtler":Qr("bg-inverse-subtler"),"bg-inverse-subtlest":Qr("bg-inverse-subtlest"),"bg-inverse-hover":Qr("bg-inverse-hover"),"bg-primary":Qr("bg-primary"),"bg-primary-subtle":Qr("bg-primary-subtle"),"bg-primary-subtler":Qr("bg-primary-subtler"),"bg-primary-subtlest":Qr("bg-primary-subtlest"),"bg-available":Qr("bg-available"),"bg-primary-hover":Qr("bg-primary-hover"),"bg-primary-subtlest-hover":Qr("bg-primary-subtlest-hover"),"bg-primary-subtlest-selected":Qr("bg-primary-subtlest-selected"),"overlay-strong":Qr("overlay-strong"),"overlay-subtle":Qr("overlay-subtle"),hyperlink:Qr("hyperlink"),"hyperlink-hover":Qr("hyperlink-hover"),"hyperlink-visited":Qr("hyperlink-visited"),"hyperlink-inverse":Qr("hyperlink-inverse"),"focus-ring":Qr("focus-ring"),"focus-ring-inverse":Qr("focus-ring-inverse")},rn={collections:{default:{solid:e=>r=>{var n,t,i;const{thickness:s,radius:a,colour:o}=e||{},l=null!==(n="function"==typeof s?s(r):s)&&void 0!==n?n:Zr["width-010"](r),d=null!==(t="function"==typeof a?a(r):a)&&void 0!==t?t:0,u=null!==(i="function"==typeof o?o(r):o)&&void 0!==i?i:en.border(r),g=Zr.solid;return c`
            border: ${l} ${g} ${u};
            border-radius: ${d};
        `},"dashed-default":e=>r=>{var n,t,i;const{thickness:s,radius:a,colour:o}=e||{},l=null!==(n="function"==typeof s?s(r):s)&&void 0!==n?n:Zr["width-010"](r),d=null!==(t="function"==typeof a?a(r):a)&&void 0!==t?t:0,u=null!==(i="function"==typeof o?o(r):o)&&void 0!==i?i:en.border(r),g=encodeURIComponent(`<svg width='100%' height='100%' xmlns='http://www.w3.org/2000/svg'><rect width='100%' height='100%' fill='none' rx='${d}' ry='${d}' stroke='${u}' stroke-width='${l}' stroke-dasharray='4, 8' stroke-dashoffset='0' stroke-linecap='square'/></svg>`);return c`
            background-image: url("data:image/svg+xml,${g}");
            border-radius: ${d};
        `}}},defaultValue:"default"},nn=e=>1===e.length&&"theme"in e[0],tn=e=>(...r)=>n=>{const t=nn(r)?[]:r,i=nn(r)?r[0]:n,s=i.theme;return(0,Nr(rn,null==s?void 0:s.borderScheme)[e])(...t)(i)},sn={solid:tn("solid"),"dashed-default":tn("dashed-default")},an={collections:{default:{"xxs-min":0,"xxs-max":320,"xs-min":321,"xs-max":375,"sm-min":376,"sm-max":420,"md-min":421,"md-max":767,"lg-min":768,"lg-max":1023,"xl-min":1024,"xl-max":1440,"xxl-min":1441,"xxs-column":8,"xs-column":8,"sm-column":8,"md-column":8,"lg-column":12,"xl-column":12,"xxl-column":12,"xxs-gutter":16,"xs-gutter":16,"sm-gutter":16,"md-gutter":16,"lg-gutter":32,"xl-gutter":32,"xxl-gutter":32,"xxs-margin":24,"xs-margin":24,"sm-margin":24,"md-margin":24,"lg-margin":48,"xl-margin":48,"xxl-margin":48}},defaultValue:"default"},on=e=>r=>{var n;const t=r.theme,i=Nr(an,null==t?void 0:t.breakpointScheme);let s;return s=(null===(n=null==t?void 0:t.overrides)||void 0===n?void 0:n.breakpoint)?Rr(i,e,t.overrides.breakpoint):i[e],s},ln={"xxs-min":on("xxs-min"),"xxs-max":on("xxs-max"),"xs-min":on("xs-min"),"xs-max":on("xs-max"),"sm-min":on("sm-min"),"sm-max":on("sm-max"),"md-min":on("md-min"),"md-max":on("md-max"),"lg-min":on("lg-min"),"lg-max":on("lg-max"),"xl-min":on("xl-min"),"xl-max":on("xl-max"),"xxl-min":on("xxl-min"),"xxs-column":on("xxs-column"),"xs-column":on("xs-column"),"sm-column":on("sm-column"),"md-column":on("md-column"),"lg-column":on("lg-column"),"xl-column":on("xl-column"),"xxl-column":on("xxl-column"),"xxs-gutter":on("xxs-gutter"),"xs-gutter":on("xs-gutter"),"sm-gutter":on("sm-gutter"),"md-gutter":on("md-gutter"),"lg-gutter":on("lg-gutter"),"xl-gutter":on("xl-gutter"),"xxl-gutter":on("xxl-gutter"),"xxs-margin":on("xxs-margin"),"xs-margin":on("xs-margin"),"sm-margin":on("sm-margin"),"md-margin":on("md-margin"),"lg-margin":on("lg-margin"),"xl-margin":on("xl-margin"),"xxl-margin":on("xxl-margin")},dn=e=>("max-width"===e?["xxs","xs","sm","md","lg","xl"]:["xxs","xs","sm","md","lg","xl","xxl"]).reduce(((r,n)=>(r[n]=((e,r)=>{const n=ln["max-width"===e?`${r}-max`:`${r}-min`];return r=>{const t=n(r);return`@media screen and (${e}: ${t}px)`}})(e,n),r)),{}),cn={MaxWidth:dn("max-width"),MinWidth:dn("min-width")},un={collections:{default:{"heading-size-xxl":"3rem","heading-size-xl":"2.5rem","heading-size-lg":"2rem","heading-size-md":"1.625rem","heading-size-sm":"1.375rem","heading-size-xs":"1.125rem","heading-lh-xxl":"3.5rem","heading-lh-xl":"3rem","heading-lh-lg":"2.5rem","heading-lh-md":"2.25rem","heading-lh-sm":"1.75rem","heading-lh-xs":"1.625rem","heading-ls-xxl":"-0.056rem","heading-ls-xl":"-0.032rem","heading-ls-lg":"-0.032rem","heading-ls-md":"0rem","heading-ls-sm":"0rem","heading-ls-xs":"0rem","weight-light":"300","weight-regular":"400","weight-semibold":"600","weight-bold":"700","font-family":"Open Sans","body-size-baseline":"1.125rem","body-size-md":"1rem","body-size-sm":"0.875rem","body-size-xs":"0.75rem","body-lh-baseline":"1.625rem","body-lh-md":"1.5rem","body-lh-sm":"1.625rem","body-lh-xs":"1.25rem","body-ls-baseline":"0rem","body-ls-md":"0.014rem","body-ls-sm":"0.012rem","body-ls-xs":"0.012rem","form-label-size":"1rem","form-description-size":"0.875rem","form-label-lh":"1.5rem","form-description-lh":"1.6rem","form-label-ls":"0.014rem","form-description-ls":"0.012rem"},bookingsg:{"heading-size-xxl":"3rem","heading-size-xl":"2.5rem","heading-size-lg":"2rem","heading-size-md":"1.625rem","heading-size-sm":"1.375rem","heading-size-xs":"1.125rem","heading-lh-xxl":"3.5rem","heading-lh-xl":"3rem","heading-lh-lg":"2.5rem","heading-lh-md":"2.25rem","heading-lh-sm":"1.75rem","heading-lh-xs":"1.75rem","heading-ls-xxl":"-0.056rem","heading-ls-xl":"-0.032rem","heading-ls-lg":"-0.032rem","heading-ls-md":"0rem","heading-ls-sm":"0rem","heading-ls-xs":"0rem","weight-light":"300","weight-regular":"400","weight-semibold":"600","weight-bold":"700","font-family":"Plus Jakarta Sans","body-size-baseline":"1.125rem","body-size-md":"1rem","body-size-sm":"0.875rem","body-size-xs":"0.75rem","body-lh-baseline":"1.75rem","body-lh-md":"1.5rem","body-lh-sm":"1.6rem","body-lh-xs":"1.2rem","body-ls-baseline":"0rem","body-ls-md":"0.014rem","body-ls-sm":"0.012rem","body-ls-xs":"0.012rem","form-label-size":"1rem","form-description-size":"0.875rem","form-label-lh":"1.5rem","form-description-lh":"1.6rem","form-label-ls":"0.014rem","form-description-ls":"0.012rem"},pa:{"heading-size-xxl":"2.5rem","heading-size-xl":"2rem","heading-size-lg":"1.75rem","heading-size-md":"1.5rem","heading-size-sm":"1.25rem","heading-size-xs":"1rem","heading-lh-xxl":"3rem","heading-lh-xl":"2.5rem","heading-lh-lg":"2.25rem","heading-lh-md":"2rem","heading-lh-sm":"2rem","heading-lh-xs":"1.75rem","heading-ls-xxl":"-0.032rem","heading-ls-xl":"0rem","heading-ls-lg":"0rem","heading-ls-md":"0rem","heading-ls-sm":"0rem","heading-ls-xs":"0rem","weight-light":"300","weight-regular":"400","weight-semibold":"600","weight-bold":"700","font-family":"Lato","body-size-baseline":"1rem","body-size-md":"0.875rem","body-size-sm":"0.75rem","body-size-xs":"0.625rem","body-lh-baseline":"1.75rem","body-lh-md":"1.5rem","body-lh-sm":"1.25rem","body-lh-xs":"1.25rem","body-ls-baseline":"0rem","body-ls-md":"0.012rem","body-ls-sm":"0.012rem","body-ls-xs":"0.012rem","form-label-size":"1rem","form-description-size":"0.875rem","form-label-lh":"1.5rem","form-description-lh":"1.6rem","form-label-ls":"0.014rem","form-description-ls":"0.012rem"}},defaultValue:"default"},gn=e=>r=>{var n;const t=r.theme,i=Nr(un,null==t?void 0:t.fontScheme);return(null===(n=null==t?void 0:t.overrides)||void 0===n?void 0:n.fontSpec)?Rr(i,e,t.overrides.fontSpec):i[e]},hn={"heading-size-xxl":gn("heading-size-xxl"),"heading-size-xl":gn("heading-size-xl"),"heading-size-lg":gn("heading-size-lg"),"heading-size-md":gn("heading-size-md"),"heading-size-sm":gn("heading-size-sm"),"heading-size-xs":gn("heading-size-xs"),"heading-lh-xxl":gn("heading-lh-xxl"),"heading-lh-xl":gn("heading-lh-xl"),"heading-lh-lg":gn("heading-lh-lg"),"heading-lh-md":gn("heading-lh-md"),"heading-lh-sm":gn("heading-lh-sm"),"heading-lh-xs":gn("heading-lh-xs"),"heading-ls-xxl":gn("heading-ls-xxl"),"heading-ls-xl":gn("heading-ls-xl"),"heading-ls-lg":gn("heading-ls-lg"),"heading-ls-md":gn("heading-ls-md"),"heading-ls-sm":gn("heading-ls-sm"),"heading-ls-xs":gn("heading-ls-xs"),"weight-light":gn("weight-light"),"weight-regular":gn("weight-regular"),"weight-semibold":gn("weight-semibold"),"weight-bold":gn("weight-bold"),"font-family":gn("font-family"),"body-size-baseline":gn("body-size-baseline"),"body-size-md":gn("body-size-md"),"body-size-sm":gn("body-size-sm"),"body-size-xs":gn("body-size-xs"),"body-lh-baseline":gn("body-lh-baseline"),"body-lh-md":gn("body-lh-md"),"body-lh-sm":gn("body-lh-sm"),"body-lh-xs":gn("body-lh-xs"),"body-ls-baseline":gn("body-ls-baseline"),"body-ls-md":gn("body-ls-md"),"body-ls-sm":gn("body-ls-sm"),"body-ls-xs":gn("body-ls-xs"),"form-label-size":gn("form-label-size"),"form-description-size":gn("form-description-size"),"form-label-lh":gn("form-label-lh"),"form-description-lh":gn("form-description-lh"),"form-label-ls":gn("form-label-ls"),"form-description-ls":gn("form-description-ls")},bn=(e,r,n,t,i)=>{const{disableLigatures:s}=i||{};return c`
        font-family: ${gn("font-family")};
        font-size: ${gn(e)};
        font-weight: ${gn(r)};
        line-height: ${gn(n)};
        letter-spacing: ${gn(t)};

        font-variant: ${s?"no-common-ligatures":"normal"};
    `},mn=(e={})=>({"heading-xxl-light":bn("heading-size-xxl","weight-light","heading-lh-xxl","heading-ls-xxl",e),"heading-xxl-regular":bn("heading-size-xxl","weight-regular","heading-lh-xxl","heading-ls-xxl",e),"heading-xxl-semibold":bn("heading-size-xxl","weight-semibold","heading-lh-xxl","heading-ls-xxl",e),"heading-xxl-bold":bn("heading-size-xxl","weight-bold","heading-lh-xxl","heading-ls-xxl",e),"heading-xl-light":bn("heading-size-xl","weight-light","heading-lh-xl","heading-ls-xl",e),"heading-xl-regular":bn("heading-size-xl","weight-regular","heading-lh-xl","heading-ls-xl",e),"heading-xl-semibold":bn("heading-size-xl","weight-semibold","heading-lh-xl","heading-ls-xl",e),"heading-xl-bold":bn("heading-size-xl","weight-bold","heading-lh-xl","heading-ls-xl",e),"heading-lg-light":bn("heading-size-lg","weight-light","heading-lh-lg","heading-ls-lg",e),"heading-lg-regular":bn("heading-size-lg","weight-regular","heading-lh-lg","heading-ls-lg",e),"heading-lg-semibold":bn("heading-size-lg","weight-semibold","heading-lh-lg","heading-ls-lg",e),"heading-lg-bold":bn("heading-size-lg","weight-bold","heading-lh-lg","heading-ls-lg",e),"heading-md-light":bn("heading-size-md","weight-light","heading-lh-md","heading-ls-md",e),"heading-md-regular":bn("heading-size-md","weight-regular","heading-lh-md","heading-ls-md",e),"heading-md-semibold":bn("heading-size-md","weight-semibold","heading-lh-md","heading-ls-md",e),"heading-md-bold":bn("heading-size-md","weight-bold","heading-lh-md","heading-ls-md",e),"heading-sm-light":bn("heading-size-sm","weight-light","heading-lh-sm","heading-ls-sm",e),"heading-sm-regular":bn("heading-size-sm","weight-regular","heading-lh-sm","heading-ls-sm",e),"heading-sm-semibold":bn("heading-size-sm","weight-semibold","heading-lh-sm","heading-ls-sm",e),"heading-sm-bold":bn("heading-size-sm","weight-bold","heading-lh-sm","heading-ls-sm",e),"heading-xs-light":bn("heading-size-xs","weight-light","heading-lh-xs","heading-ls-xs",e),"heading-xs-regular":bn("heading-size-xs","weight-regular","heading-lh-xs","heading-ls-xs",e),"heading-xs-semibold":bn("heading-size-xs","weight-semibold","heading-lh-xs","heading-ls-xs",e),"heading-xs-bold":bn("heading-size-xs","weight-bold","heading-lh-xs","heading-ls-xs",e),"body-baseline-light":bn("body-size-baseline","weight-light","body-lh-baseline","body-ls-baseline",e),"body-baseline-regular":bn("body-size-baseline","weight-regular","body-lh-baseline","body-ls-baseline",e),"body-baseline-semibold":bn("body-size-baseline","weight-semibold","body-lh-baseline","body-ls-baseline",e),"body-baseline-bold":bn("body-size-baseline","weight-bold","body-lh-baseline","body-ls-baseline",e),"body-md-light":bn("body-size-md","weight-light","body-lh-md","body-ls-md",e),"body-md-regular":bn("body-size-md","weight-regular","body-lh-md","body-ls-md",e),"body-md-semibold":bn("body-size-md","weight-semibold","body-lh-md","body-ls-md",e),"body-md-bold":bn("body-size-md","weight-bold","body-lh-md","body-ls-md",e),"body-sm-light":bn("body-size-sm","weight-light","body-lh-sm","body-ls-sm",e),"body-sm-regular":bn("body-size-sm","weight-regular","body-lh-sm","body-ls-sm",e),"body-sm-semibold":bn("body-size-sm","weight-semibold","body-lh-sm","body-ls-sm",e),"body-sm-bold":bn("body-size-sm","weight-bold","body-lh-sm","body-ls-sm",e),"body-xs-light":bn("body-size-xs","weight-light","body-lh-xs","body-ls-xs",e),"body-xs-regular":bn("body-size-xs","weight-regular","body-lh-xs","body-ls-xs",e),"body-xs-semibold":bn("body-size-xs","weight-semibold","body-lh-xs","body-ls-xs",e),"body-xs-bold":bn("body-size-xs","weight-bold","body-lh-xs","body-ls-xs",e),"form-label":bn("form-label-size","weight-semibold","form-label-lh","form-label-ls",e),"form-description":bn("form-description-size","weight-regular","form-description-lh","form-description-ls",e)}),yn=mn({disableLigatures:!0}),fn={collections:{default:mn(),bookingsg:yn,pa:mn({disableLigatures:!0})},defaultValue:"default"},pn=e=>r=>{var n;const t=r.theme,i=Nr(fn,null==t?void 0:t.fontScheme),s=(null===(n=null==t?void 0:t.overrides)||void 0===n?void 0:n.font)?Rr(i,e,t.overrides.font):i[e];return"function"==typeof s?s(r):s},vn={"heading-xxl-light":pn("heading-xxl-light"),"heading-xxl-regular":pn("heading-xxl-regular"),"heading-xxl-semibold":pn("heading-xxl-semibold"),"heading-xxl-bold":pn("heading-xxl-bold"),"heading-xl-light":pn("heading-xl-light"),"heading-xl-regular":pn("heading-xl-regular"),"heading-xl-semibold":pn("heading-xl-semibold"),"heading-xl-bold":pn("heading-xl-bold"),"heading-lg-light":pn("heading-lg-light"),"heading-lg-regular":pn("heading-lg-regular"),"heading-lg-semibold":pn("heading-lg-semibold"),"heading-lg-bold":pn("heading-lg-bold"),"heading-md-light":pn("heading-md-light"),"heading-md-regular":pn("heading-md-regular"),"heading-md-semibold":pn("heading-md-semibold"),"heading-md-bold":pn("heading-md-bold"),"heading-sm-light":pn("heading-sm-light"),"heading-sm-regular":pn("heading-sm-regular"),"heading-sm-semibold":pn("heading-sm-semibold"),"heading-sm-bold":pn("heading-sm-bold"),"heading-xs-light":pn("heading-xs-light"),"heading-xs-regular":pn("heading-xs-regular"),"heading-xs-semibold":pn("heading-xs-semibold"),"heading-xs-bold":pn("heading-xs-bold"),"body-baseline-light":pn("body-baseline-light"),"body-baseline-regular":pn("body-baseline-regular"),"body-baseline-semibold":pn("body-baseline-semibold"),"body-baseline-bold":pn("body-baseline-bold"),"body-md-light":pn("body-md-light"),"body-md-regular":pn("body-md-regular"),"body-md-semibold":pn("body-md-semibold"),"body-md-bold":pn("body-md-bold"),"body-sm-light":pn("body-sm-light"),"body-sm-regular":pn("body-sm-regular"),"body-sm-semibold":pn("body-sm-semibold"),"body-sm-bold":pn("body-sm-bold"),"body-xs-light":pn("body-xs-light"),"body-xs-regular":pn("body-xs-regular"),"body-xs-semibold":pn("body-xs-semibold"),"body-xs-bold":pn("body-xs-bold"),"form-label":pn("form-label"),"form-description":pn("form-description")},xn={collections:{default:{"duration-150":"150ms","duration-250":"250ms","duration-350":"350ms","duration-500":"500ms","duration-800":"800ms","duration-1000":"1000ms","ease-default":"cubic-bezier(0.45, 0.05, 0.55, 0.95)","ease-standard":"cubic-bezier(0.86, 0, 0.07, 1)","ease-entrance":"cubic-bezier(0.18, 0.13, 0, 1)","ease-exit":"cubic-bezier(1, 0, 0.8, 0.85)"}},defaultValue:"default"},Fn=e=>r=>{var n;const t=r.theme,i=Nr(xn,null==t?void 0:t.motionScheme);return(null===(n=null==t?void 0:t.overrides)||void 0===n?void 0:n.motion)?Rr(i,e,t.overrides.motion):i[e]},wn={"duration-150":Fn("duration-150"),"duration-250":Fn("duration-250"),"duration-350":Fn("duration-350"),"duration-500":Fn("duration-500"),"duration-800":Fn("duration-800"),"duration-1000":Fn("duration-1000"),"ease-default":Fn("ease-default"),"ease-standard":Fn("ease-standard"),"ease-entrance":Fn("ease-entrance"),"ease-exit":Fn("ease-exit")},$n={collections:{default:{none:0,xs:2,sm:4,md:8,lg:12,full:9999}},defaultValue:"default"},Dn=e=>r=>{var n;const t=r.theme,i=Nr($n,null==t?void 0:t.radiusScheme);return(null===(n=null==t?void 0:t.overrides)||void 0===n?void 0:n.radius)?`${Rr(i,e,t.overrides.radius)}px`:`${i[e]}px`},En={none:Dn("none"),xs:Dn("xs"),sm:Dn("sm"),md:Dn("md"),lg:Dn("lg"),full:Dn("full")},Cn={collections:{default:{"spacing-0":0,"spacing-4":4,"spacing-8":8,"spacing-12":12,"spacing-16":16,"spacing-20":20,"spacing-24":24,"spacing-32":32,"spacing-40":40,"spacing-48":48,"spacing-64":64,"spacing-72":72,"layout-xs":8,"layout-sm":16,"layout-md":24,"layout-lg":32,"layout-xl":48,"layout-xxl":64,"layout-xxxl":128}},defaultValue:"default"},Bn=e=>r=>{var n;const t=r.theme,i=Nr(Cn,null==t?void 0:t.spacingScheme);return(null===(n=null==t?void 0:t.overrides)||void 0===n?void 0:n.spacing)?`${Rr(i,e,t.overrides.spacing)}px`:`${i[e]}px`},An={"spacing-0":Bn("spacing-0"),"spacing-4":Bn("spacing-4"),"spacing-8":Bn("spacing-8"),"spacing-12":Bn("spacing-12"),"spacing-16":Bn("spacing-16"),"spacing-20":Bn("spacing-20"),"spacing-24":Bn("spacing-24"),"spacing-32":Bn("spacing-32"),"spacing-40":Bn("spacing-40"),"spacing-48":Bn("spacing-48"),"spacing-64":Bn("spacing-64"),"spacing-72":Bn("spacing-72"),"layout-xs":Bn("layout-xs"),"layout-sm":Bn("layout-sm"),"layout-md":Bn("layout-md"),"layout-lg":Bn("layout-lg"),"layout-xl":Bn("layout-xl"),"layout-xxl":Bn("layout-xxl"),"layout-xxxl":Bn("layout-xxxl")},zn=Object.assign(Object.assign({},en),{Primitive:Gr}),Sn=Object.assign(Object.assign({},vn),{Spec:hn}),Mn=wn,kn=Object.assign(Object.assign({},Zr),{Util:sn}),On=An,_n=En,Yn=cn,Tn=l.button`
    padding: ${On["spacing-8"]} ${On["spacing-16"]};
    min-width: 4rem;
    border: ${kn["width-010"]} ${kn.solid} transparent;
    border-radius: ${_n.sm};
    transition: all ${Mn["duration-250"]} ${Mn["ease-default"]};
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;

    // -----------------------------------------------------------------------------
    // BUTTON STYLE + TEXT COLOR
    // -----------------------------------------------------------------------------
    ${e=>{switch(e.$buttonStyle){case"secondary":return c`
                    background-color: ${zn.Primitive.white};
                    border-color: ${e.$buttonIsDanger?zn["border-error-strong"]:zn["border-primary"]};

                    color: ${e.$buttonIsDanger?zn["text-error"]:zn["text-primary"]};

                    &:hover,
                    &:active {
                        background-color: ${zn["bg-hover-neutral"]};
                    }
                `;case"light":return c`
                    background-color: ${zn.bg};
                    border-color: ${zn.border};

                    color: ${e.$buttonIsDanger?zn["text-error"]:zn["text-primary"]};

                    &:hover,
                    &:active {
                        background-color: ${zn["bg-hover-neutral"]};
                    }
                `;case"link":return c`
                    background-color: transparent;

                    color: ${e.$buttonIsDanger?zn["text-error"]:zn["text-primary"]};
                    &:hover,
                    &:active {
                        background-color: ${zn["bg-hover-neutral"]};
                    }
                `;case"disabled":return c`
                    background-color: ${zn["bg-disabled"]};

                    cursor: not-allowed;

                    &:hover {
                        box-shadow: none;
                    }

                    color: ${zn["text-disabled"]};
                `;default:return c`
                    background-color: ${e.$buttonIsDanger?zn["bg-error-strong"]:zn["bg-primary"]};

                    ${Yn.MaxWidth.md} {
                        width: 100%;
                    }

                    color: ${zn["text-inverse"]};

                    &:hover,
                    &:active {
                        background-color: ${e.$buttonIsDanger?zn["bg-error-strong-hover"]:zn["bg-primary-hover"]};
                    }
                `}}}

    // -----------------------------------------------------------------------------
	// BUTTON SIZE + TEXT SIZE
	// -----------------------------------------------------------------------------
	${e=>{switch(e.$buttonSizeStyle){case"small":return c`
                    height: 2.5rem;
                    ${Sn["body-md-semibold"]}

                    ${Yn.MaxWidth.xxs} {
                        height: auto;
                    }
                `;case"large":return c`
                    height: 4rem;
                    ${Sn["heading-md-semibold"]}

                    ${Yn.MaxWidth.xxs} {
                        height: auto;
                    }
                `;default:return c`
                    height: 3rem;
                    ${Sn["heading-xs-semibold"]}

                    ${Yn.MaxWidth.xxs} {
                        height: auto;
                    }
                `}}}
`,Ln=l((({color:n,className:t,size:i})=>e(b,{className:t,$size:i,$color:n,"data-testid":"component-loading-spinner",children:[r(y,{id:"inner1"}),r(f,{id:"inner2"}),r(p,{id:"inner3"}),r(v,{id:"inner4"})]})))`
    margin-right: 0.5rem;
`,jn=(n,t)=>{const{children:i,disabled:s=!1,loading:a=!1,styleType:o="default",danger:l=!1}=n,d=h(n,["children","disabled","loading","styleType","danger"]),c={$buttonStyle:s?"disabled":o,$buttonSizeStyle:"default",$buttonIsDanger:l};return e(Tn,Object.assign({ref:t,"data-testid":d["data-testid"]||"button",disabled:s},c,d,{children:[a&&r(Ln,{}),r("span",{children:i})]}))};jn.displayName="Button.Default";const In=(n,t)=>{const{children:i,disabled:s=!1,loading:a=!1,styleType:o="default",danger:l=!1}=n,d=h(n,["children","disabled","loading","styleType","danger"]),c={$buttonStyle:s?"disabled":o,$buttonSizeStyle:"small",$buttonIsDanger:l};return e(Tn,Object.assign({ref:t,"data-testid":d["data-testid"]||"button",disabled:s},c,d,{children:[a&&r(Ln,{}),r("span",{children:i})]}))};In.displayName="Button.Small";const Hn=(n,t)=>{const{children:i,disabled:s=!1,loading:a=!1,styleType:o="default",danger:l=!1}=n,d=h(n,["children","disabled","loading","styleType","danger"]),c={$buttonStyle:s?"disabled":o,$buttonSizeStyle:"large",$buttonIsDanger:l};return e(Tn,Object.assign({ref:t,"data-testid":d["data-testid"]||"button",disabled:s},c,d,{children:[a&&r(Ln,{}),r("span",{children:i})]}))};Hn.displayName="Button.Large";const Wn={Default:t.forwardRef(jn),Small:t.forwardRef(In),Large:t.forwardRef(Hn)};var Rn={exports:{}};Rn.exports=function(){var e=1e3,r=6e4,n=36e5,t="millisecond",i="second",s="minute",a="hour",o="day",l="week",d="month",c="quarter",u="year",g="date",h="Invalid Date",b=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,m=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,y={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(e){var r=["th","st","nd","rd"],n=e%100;return"["+e+(r[(n-20)%10]||r[n]||r[0])+"]"}},f=function(e,r,n){var t=String(e);return!t||t.length>=r?e:""+Array(r+1-t.length).join(n)+e},p={s:f,z:function(e){var r=-e.utcOffset(),n=Math.abs(r),t=Math.floor(n/60),i=n%60;return(r<=0?"+":"-")+f(t,2,"0")+":"+f(i,2,"0")},m:function e(r,n){if(r.date()<n.date())return-e(n,r);var t=12*(n.year()-r.year())+(n.month()-r.month()),i=r.clone().add(t,d),s=n-i<0,a=r.clone().add(t+(s?-1:1),d);return+(-(t+(n-i)/(s?i-a:a-i))||0)},a:function(e){return e<0?Math.ceil(e)||0:Math.floor(e)},p:function(e){return{M:d,y:u,w:l,d:o,D:g,h:a,m:s,s:i,ms:t,Q:c}[e]||String(e||"").toLowerCase().replace(/s$/,"")},u:function(e){return void 0===e}},v="en",x={};x[v]=y;var F="$isDayjsObject",w=function(e){return e instanceof C||!(!e||!e[F])},$=function e(r,n,t){var i;if(!r)return v;if("string"==typeof r){var s=r.toLowerCase();x[s]&&(i=s),n&&(x[s]=n,i=s);var a=r.split("-");if(!i&&a.length>1)return e(a[0])}else{var o=r.name;x[o]=r,i=o}return!t&&i&&(v=i),i||!t&&v},D=function(e,r){if(w(e))return e.clone();var n="object"==typeof r?r:{};return n.date=e,n.args=arguments,new C(n)},E=p;E.l=$,E.i=w,E.w=function(e,r){return D(e,{locale:r.$L,utc:r.$u,x:r.$x,$offset:r.$offset})};var C=function(){function y(e){this.$L=$(e.locale,null,!0),this.parse(e),this.$x=this.$x||e.x||{},this[F]=!0}var f=y.prototype;return f.parse=function(e){this.$d=function(e){var r=e.date,n=e.utc;if(null===r)return new Date(NaN);if(E.u(r))return new Date;if(r instanceof Date)return new Date(r);if("string"==typeof r&&!/Z$/i.test(r)){var t=r.match(b);if(t){var i=t[2]-1||0,s=(t[7]||"0").substring(0,3);return n?new Date(Date.UTC(t[1],i,t[3]||1,t[4]||0,t[5]||0,t[6]||0,s)):new Date(t[1],i,t[3]||1,t[4]||0,t[5]||0,t[6]||0,s)}}return new Date(r)}(e),this.init()},f.init=function(){var e=this.$d;this.$y=e.getFullYear(),this.$M=e.getMonth(),this.$D=e.getDate(),this.$W=e.getDay(),this.$H=e.getHours(),this.$m=e.getMinutes(),this.$s=e.getSeconds(),this.$ms=e.getMilliseconds()},f.$utils=function(){return E},f.isValid=function(){return!(this.$d.toString()===h)},f.isSame=function(e,r){var n=D(e);return this.startOf(r)<=n&&n<=this.endOf(r)},f.isAfter=function(e,r){return D(e)<this.startOf(r)},f.isBefore=function(e,r){return this.endOf(r)<D(e)},f.$g=function(e,r,n){return E.u(e)?this[r]:this.set(n,e)},f.unix=function(){return Math.floor(this.valueOf()/1e3)},f.valueOf=function(){return this.$d.getTime()},f.startOf=function(e,r){var n=this,t=!!E.u(r)||r,c=E.p(e),h=function(e,r){var i=E.w(n.$u?Date.UTC(n.$y,r,e):new Date(n.$y,r,e),n);return t?i:i.endOf(o)},b=function(e,r){return E.w(n.toDate()[e].apply(n.toDate("s"),(t?[0,0,0,0]:[23,59,59,999]).slice(r)),n)},m=this.$W,y=this.$M,f=this.$D,p="set"+(this.$u?"UTC":"");switch(c){case u:return t?h(1,0):h(31,11);case d:return t?h(1,y):h(0,y+1);case l:var v=this.$locale().weekStart||0,x=(m<v?m+7:m)-v;return h(t?f-x:f+(6-x),y);case o:case g:return b(p+"Hours",0);case a:return b(p+"Minutes",1);case s:return b(p+"Seconds",2);case i:return b(p+"Milliseconds",3);default:return this.clone()}},f.endOf=function(e){return this.startOf(e,!1)},f.$set=function(e,r){var n,l=E.p(e),c="set"+(this.$u?"UTC":""),h=(n={},n[o]=c+"Date",n[g]=c+"Date",n[d]=c+"Month",n[u]=c+"FullYear",n[a]=c+"Hours",n[s]=c+"Minutes",n[i]=c+"Seconds",n[t]=c+"Milliseconds",n)[l],b=l===o?this.$D+(r-this.$W):r;if(l===d||l===u){var m=this.clone().set(g,1);m.$d[h](b),m.init(),this.$d=m.set(g,Math.min(this.$D,m.daysInMonth())).$d}else h&&this.$d[h](b);return this.init(),this},f.set=function(e,r){return this.clone().$set(e,r)},f.get=function(e){return this[E.p(e)]()},f.add=function(t,c){var g,h=this;t=Number(t);var b=E.p(c),m=function(e){var r=D(h);return E.w(r.date(r.date()+Math.round(e*t)),h)};if(b===d)return this.set(d,this.$M+t);if(b===u)return this.set(u,this.$y+t);if(b===o)return m(1);if(b===l)return m(7);var y=(g={},g[s]=r,g[a]=n,g[i]=e,g)[b]||1,f=this.$d.getTime()+t*y;return E.w(f,this)},f.subtract=function(e,r){return this.add(-1*e,r)},f.format=function(e){var r=this,n=this.$locale();if(!this.isValid())return n.invalidDate||h;var t=e||"YYYY-MM-DDTHH:mm:ssZ",i=E.z(this),s=this.$H,a=this.$m,o=this.$M,l=n.weekdays,d=n.months,c=n.meridiem,u=function(e,n,i,s){return e&&(e[n]||e(r,t))||i[n].slice(0,s)},g=function(e){return E.s(s%12||12,e,"0")},b=c||function(e,r,n){var t=e<12?"AM":"PM";return n?t.toLowerCase():t};return t.replace(m,(function(e,t){return t||function(e){switch(e){case"YY":return String(r.$y).slice(-2);case"YYYY":return E.s(r.$y,4,"0");case"M":return o+1;case"MM":return E.s(o+1,2,"0");case"MMM":return u(n.monthsShort,o,d,3);case"MMMM":return u(d,o);case"D":return r.$D;case"DD":return E.s(r.$D,2,"0");case"d":return String(r.$W);case"dd":return u(n.weekdaysMin,r.$W,l,2);case"ddd":return u(n.weekdaysShort,r.$W,l,3);case"dddd":return l[r.$W];case"H":return String(s);case"HH":return E.s(s,2,"0");case"h":return g(1);case"hh":return g(2);case"a":return b(s,a,!0);case"A":return b(s,a,!1);case"m":return String(a);case"mm":return E.s(a,2,"0");case"s":return String(r.$s);case"ss":return E.s(r.$s,2,"0");case"SSS":return E.s(r.$ms,3,"0");case"Z":return i}return null}(e)||i.replace(":","")}))},f.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},f.diff=function(t,g,h){var b,m=this,y=E.p(g),f=D(t),p=(f.utcOffset()-this.utcOffset())*r,v=this-f,x=function(){return E.m(m,f)};switch(y){case u:b=x()/12;break;case d:b=x();break;case c:b=x()/3;break;case l:b=(v-p)/6048e5;break;case o:b=(v-p)/864e5;break;case a:b=v/n;break;case s:b=v/r;break;case i:b=v/e;break;default:b=v}return h?b:E.a(b)},f.daysInMonth=function(){return this.endOf(d).$D},f.$locale=function(){return x[this.$L]},f.locale=function(e,r){if(!e)return this.$L;var n=this.clone(),t=$(e,r,!0);return t&&(n.$L=t),n},f.clone=function(){return E.w(this.$d,this)},f.toDate=function(){return new Date(this.valueOf())},f.toJSON=function(){return this.isValid()?this.toISOString():null},f.toISOString=function(){return this.$d.toISOString()},f.toString=function(){return this.$d.toUTCString()},y}(),B=C.prototype;return D.prototype=B,[["$ms",t],["$s",i],["$m",s],["$H",a],["$W",o],["$M",d],["$y",u],["$D",g]].forEach((function(e){B[e[1]]=function(r){return this.$g(r,e[0],e[1])}})),D.extend=function(e,r){return e.$i||(e(r,C,D),e.$i=!0),D},D.locale=$,D.isDayjs=w,D.unix=function(e){return D(1e3*e)},D.en=x[v],D.Ls=x,D.p={},D}();var Nn=F(Rn.exports),Pn={exports:{}};Pn.exports=function(){var e={LTS:"h:mm:ss A",LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D, YYYY",LLL:"MMMM D, YYYY h:mm A",LLLL:"dddd, MMMM D, YYYY h:mm A"},r=/(\[[^[]*\])|([-_:/.,()\s]+)|(A|a|YYYY|YY?|MM?M?M?|Do|DD?|hh?|HH?|mm?|ss?|S{1,3}|z|ZZ?)/g,n=/\d\d/,t=/\d\d?/,i=/\d*[^-_:/,()\s\d]+/,s={},a=function(e){return(e=+e)+(e>68?1900:2e3)},o=function(e){return function(r){this[e]=+r}},l=[/[+-]\d\d:?(\d\d)?|Z/,function(e){(this.zone||(this.zone={})).offset=function(e){if(!e)return 0;if("Z"===e)return 0;var r=e.match(/([+-]|\d\d)/g),n=60*r[1]+(+r[2]||0);return 0===n?0:"+"===r[0]?-n:n}(e)}],d=function(e){var r=s[e];return r&&(r.indexOf?r:r.s.concat(r.f))},c=function(e,r){var n,t=s.meridiem;if(t){for(var i=1;i<=24;i+=1)if(e.indexOf(t(i,0,r))>-1){n=i>12;break}}else n=e===(r?"pm":"PM");return n},u={A:[i,function(e){this.afternoon=c(e,!1)}],a:[i,function(e){this.afternoon=c(e,!0)}],S:[/\d/,function(e){this.milliseconds=100*+e}],SS:[n,function(e){this.milliseconds=10*+e}],SSS:[/\d{3}/,function(e){this.milliseconds=+e}],s:[t,o("seconds")],ss:[t,o("seconds")],m:[t,o("minutes")],mm:[t,o("minutes")],H:[t,o("hours")],h:[t,o("hours")],HH:[t,o("hours")],hh:[t,o("hours")],D:[t,o("day")],DD:[n,o("day")],Do:[i,function(e){var r=s.ordinal,n=e.match(/\d+/);if(this.day=n[0],r)for(var t=1;t<=31;t+=1)r(t).replace(/\[|\]/g,"")===e&&(this.day=t)}],M:[t,o("month")],MM:[n,o("month")],MMM:[i,function(e){var r=d("months"),n=(d("monthsShort")||r.map((function(e){return e.slice(0,3)}))).indexOf(e)+1;if(n<1)throw new Error;this.month=n%12||n}],MMMM:[i,function(e){var r=d("months").indexOf(e)+1;if(r<1)throw new Error;this.month=r%12||r}],Y:[/[+-]?\d+/,o("year")],YY:[n,function(e){this.year=a(e)}],YYYY:[/\d{4}/,o("year")],Z:l,ZZ:l};function g(n){var t,i;t=n,i=s&&s.formats;for(var a=(n=t.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g,(function(r,n,t){var s=t&&t.toUpperCase();return n||i[t]||e[t]||i[s].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g,(function(e,r,n){return r||n.slice(1)}))}))).match(r),o=a.length,l=0;l<o;l+=1){var d=a[l],c=u[d],g=c&&c[0],h=c&&c[1];a[l]=h?{regex:g,parser:h}:d.replace(/^\[|\]$/g,"")}return function(e){for(var r={},n=0,t=0;n<o;n+=1){var i=a[n];if("string"==typeof i)t+=i.length;else{var s=i.regex,l=i.parser,d=e.slice(t),c=s.exec(d)[0];l.call(r,c),e=e.replace(c,"")}}return function(e){var r=e.afternoon;if(void 0!==r){var n=e.hours;r?n<12&&(e.hours+=12):12===n&&(e.hours=0),delete e.afternoon}}(r),r}}return function(e,r,n){n.p.customParseFormat=!0,e&&e.parseTwoDigitYear&&(a=e.parseTwoDigitYear);var t=r.prototype,i=t.parse;t.parse=function(e){var r=e.date,t=e.utc,a=e.args;this.$u=t;var o=a[1];if("string"==typeof o){var l=!0===a[2],d=!0===a[3],c=l||d,u=a[2];d&&(u=a[2]),s=this.$locale(),!l&&u&&(s=n.Ls[u]),this.$d=function(e,r,n){try{if(["x","X"].indexOf(r)>-1)return new Date(("X"===r?1e3:1)*e);var t=g(r)(e),i=t.year,s=t.month,a=t.day,o=t.hours,l=t.minutes,d=t.seconds,c=t.milliseconds,u=t.zone,h=new Date,b=a||(i||s?1:h.getDate()),m=i||h.getFullYear(),y=0;i&&!s||(y=s>0?s-1:h.getMonth());var f=o||0,p=l||0,v=d||0,x=c||0;return u?new Date(Date.UTC(m,y,b,f,p,v,x+60*u.offset*1e3)):n?new Date(Date.UTC(m,y,b,f,p,v,x)):new Date(m,y,b,f,p,v,x)}catch(e){return new Date("")}}(r,o,t),this.init(),u&&!0!==u&&(this.$L=this.locale(u).$L),c&&r!=this.format(o)&&(this.$d=new Date("")),s={}}else if(o instanceof Array)for(var h=o.length,b=1;b<=h;b+=1){a[1]=o[b-1];var m=n.apply(this,a);if(m.isValid()){this.$d=m.$d,this.$L=m.$L,this.init();break}b===h&&(this.$d=new Date(""))}else i.call(this,e)}}}();var Vn=F(Pn.exports),Zn={exports:{}};Zn.exports=function(e,r,n){r.prototype.isBetween=function(e,r,t,i){var s=n(e),a=n(r),o="("===(i=i||"()")[0],l=")"===i[1];return(o?this.isAfter(s,t):!this.isBefore(s,t))&&(l?this.isBefore(a,t):!this.isAfter(a,t))||(o?this.isBefore(s,t):!this.isAfter(s,t))&&(l?this.isAfter(a,t):!this.isBefore(a,t))}};var Xn=F(Zn.exports),Un={exports:{}};Un.exports=function(e,r){r.prototype.isSameOrAfter=function(e,r){return this.isSame(e,r)||this.isAfter(e,r)}};var Jn=F(Un.exports),Gn={exports:{}};Gn.exports=function(e,r){r.prototype.isSameOrBefore=function(e,r){return this.isSame(e,r)||this.isBefore(e,r)}};var qn,Kn,Qn,et=F(Gn.exports),rt={exports:{}},nt=F(rt.exports=(qn={year:0,month:1,day:2,hour:3,minute:4,second:5},Kn={},function(e,r,n){var t,i=function(e,r,n){void 0===n&&(n={});var t=new Date(e),i=function(e,r){void 0===r&&(r={});var n=r.timeZoneName||"short",t=e+"|"+n,i=Kn[t];return i||(i=new Intl.DateTimeFormat("en-US",{hour12:!1,timeZone:e,year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit",timeZoneName:n}),Kn[t]=i),i}(r,n);return i.formatToParts(t)},s=function(e,r){for(var t=i(e,r),s=[],a=0;a<t.length;a+=1){var o=t[a],l=o.type,d=o.value,c=qn[l];c>=0&&(s[c]=parseInt(d,10))}var u=s[3],g=24===u?0:u,h=s[0]+"-"+s[1]+"-"+s[2]+" "+g+":"+s[4]+":"+s[5]+":000",b=+e;return(n.utc(h).valueOf()-(b-=b%1e3))/6e4},a=r.prototype;a.tz=function(e,r){void 0===e&&(e=t);var i=this.utcOffset(),s=this.toDate(),a=s.toLocaleString("en-US",{timeZone:e}),o=Math.round((s-new Date(a))/1e3/60),l=n(a,{locale:this.$L}).$set("millisecond",this.$ms).utcOffset(15*-Math.round(s.getTimezoneOffset()/15)-o,!0);if(r){var d=l.utcOffset();l=l.add(i-d,"minute")}return l.$x.$timezone=e,l},a.offsetName=function(e){var r=this.$x.$timezone||n.tz.guess(),t=i(this.valueOf(),r,{timeZoneName:e}).find((function(e){return"timezonename"===e.type.toLowerCase()}));return t&&t.value};var o=a.startOf;a.startOf=function(e,r){if(!this.$x||!this.$x.$timezone)return o.call(this,e,r);var t=n(this.format("YYYY-MM-DD HH:mm:ss:SSS"),{locale:this.$L});return o.call(t,e,r).tz(this.$x.$timezone,!0)},n.tz=function(e,r,i){var a=i&&r,o=i||r||t,l=s(+n(),o);if("string"!=typeof e)return n(e).tz(o);var d=function(e,r,n){var t=e-60*r*1e3,i=s(t,n);if(r===i)return[t,r];var a=s(t-=60*(i-r)*1e3,n);return i===a?[t,i]:[e-60*Math.min(i,a)*1e3,Math.max(i,a)]}(n.utc(e,a).valueOf(),l,o),c=d[0],u=d[1],g=n(c).utcOffset(u);return g.$x.$timezone=o,g},n.tz.guess=function(){return Intl.DateTimeFormat().resolvedOptions().timeZone},n.tz.setDefault=function(e){t=e}}));Nn.extend(Xn),Nn.extend(et),Nn.extend(Jn),Nn.extend(Vn),Nn.extend(nt),function(e){e.generateDays=e=>{const r=e.startOf("month"),n=Nn(r).startOf("week");return tt(n).map((e=>it(e)))},e.generateDaysForCurrentWeek=e=>{const r=e.startOf("week");return it(r)},e.generateMonths=e=>{const r=[];for(let n=0;n<12;n++){const t=e.month(n);r.push(Nn(t))}return r},e.generateDecadeOfYears=e=>{const r=e.year(),n=10*Math.floor(r/10),t=e.year(n),i=[t.subtract(1,"year"),t];for(let e=1;e<11;e++)i.push(t.add(e,"year"));return i},e.getStartEndDecade=e=>{const r=10*Math.floor(+e.format("YYYY")/10);return{beginDecade:r,endDecade:+Nn(`${r+9}-01-01`).format("YYYY")}},e.convertTo12HourFormat=e=>{const r=Nn(e,"HH:mm");return r.isValid()?r.format("h:mm a"):""},e.isWithinRange=(e,r,n,t="day")=>!r&&!n||(r&&n?e.isBetween(r,n,t,"[]"):r?e.isSameOrAfter(r,t):e.isSameOrBefore(n,t)),e.isPreviousMonthWithinRange=(r,n)=>e.isWithinRange(r.subtract(1,"month"),n,void 0,"month"),e.isPreviousYearWithinRange=(r,n)=>e.isWithinRange(r.subtract(1,"year"),n,void 0,"year"),e.isPreviousDecadeWithinRange=(r,n)=>{const{beginDecade:t}=e.getStartEndDecade(r);return e.isWithinRange(r.year(t).subtract(1,"year"),n,void 0,"year")},e.isNextMonthWithinRange=(r,n)=>e.isWithinRange(r.add(1,"month"),void 0,n,"month"),e.isNextYearWithinRange=(r,n)=>e.isWithinRange(r.add(1,"year"),void 0,n,"year"),e.isNextDecadeWithinRange=(r,n)=>{const{endDecade:t}=e.getStartEndDecade(r);return e.isWithinRange(r.year(t).add(1,"year"),void 0,n,"year")},e.getWeekStartEnd=e=>({start:e.startOf("week").format("YYYY-MM-DD"),end:e.endOf("week").format("YYYY-MM-DD")}),e.getFixedRangeStartEnd=(e,r)=>({start:e.format("YYYY-MM-DD"),end:e.add(r-1,"day").format("YYYY-MM-DD")}),e.isDisabledDay=(r,n,t,i)=>{const s=e.isWithinRange(r,t?Nn(t):void 0,i?Nn(i):void 0),a=n&&n.includes(r.format("YYYY-MM-DD"));return!s||!!a}}(Qn||(Qn={}));const tt=e=>{const r=[e];for(let n=1;n<6;n++){const t=e.add(n,"week");r.push(t)}return r},it=e=>{const r=[];for(let n=0;n<7;n++){const t=e.add(n,"day");r.push(t)}return r},st=[1,3,5,7,8,10,12],at=[4,6,9,11];var ot,lt,dt,ct;!function(e){e.clampDay=(r,n,t)=>{const i=parseInt(r),s=parseInt(n),a=parseInt(t);return 0==i?"1":st.includes(s)?Math.min(i,31).toString():at.includes(s)?Math.min(i,30).toString():2===s?e.isLeapYear(a)?Math.min(i,29).toString():Math.min(i,28).toString():r},e.clampMonth=e=>{const r=parseInt(e);return 0==r?"1":r>12?"12":e},e.isLeapYear=e=>e%4==0&&e%100!=0||e%400==0,e.getTimeDiffInMinutes=(e,r,n="HH:mm")=>{const t=Nn(e,n);return Nn(r,n).diff(t,"minute")},e.toDayjs=e=>e?Nn(e):Nn(),e.addMinutesToTime=(e,r,n="HH:mm")=>Nn(e,n).add(r,"minutes").format(n),e.isSame=(e,r,n="day")=>Nn(e).isSame(Nn(r),n)}(ot||(ot={})),function(e){e.isDateDisabled=(e,r)=>{const{disabledDates:n,minDate:t,maxDate:i}=r;return!!(e&&n&&n.length&&n.includes(e))||(!(!t||!Nn(e).isBefore(t,"day"))||!(!i||!Nn(e).isAfter(i,"day")))},e.sanitizeInput=e=>{if(e){if(Nn(e).isValid())return e}return""}}(lt||(lt={})),function(e){e.generate=()=>Math.random().toString(36).substring(2,9)}(dt||(dt={})),function(e){e.transformWithSpaces=(e,r)=>{const n="(.{"+r+"})";return e.replace(/[^\dA-Z]/gi,"").replace(new RegExp(n,"g"),"$1 ").trim()},e.padValue=(e,r)=>{if("0"===e)return r?e:e.padStart(2,"0");if(""===e)return e;return parseInt(e).toString().padStart(2,"0")},e.shouldTruncateToTwoLines=(e,r)=>{const n=Math.floor(r/9);return e.length>=2*n||1===e.split(" ").length&&e.length>n},e.truncateOneLine=(e,r,n,t,i=8)=>{let s=0;r>n&&(s=Math.floor((r-n)/i));const a=t+s;if(a<e.length){const r=Math.floor(a/2);return e.substring(0,r)+" ... "+e.substring(e.length-r,e.length)}return e},e.truncateTwoLines=(e,r,n,t=1.2)=>{const i=Math.floor(2*r/(.6*n))*(2/t);if(e.length<=i)return e;const s=Math.floor(.6*i),a=Math.floor(.2*i);return`${e.substring(0,s)}...${e.substring(e.length-a)}`},e.getTextWidth=(r,n)=>{if("undefined"==typeof document)return 0;const t=(e.getTextWidth.canvas||(e.getTextWidth.canvas=document.createElement("canvas"))).getContext("2d");t.font=n;return t.measureText(r).width},e.maskValue=(e,n)=>{if(!e)return e;const{maskRange:t,unmaskRange:i,maskChar:s="•",maskRegex:a,maskTransformer:o}=n;if(o)return o(e);if(a)return e.replace(a,s);if(t){const{startIndex:n,endIndex:i}=r(t[0],t[1]);return e.substring(0,n)+s.repeat(e.substring(n,i+1).length)+e.substring(i+1)}if(i){const{startIndex:n,endIndex:t}=r(i[0],i[1]);return s.repeat(e.substring(0,n).length)+e.substring(n,t+1)+s.repeat(e.substring(t+1).length)}return e};const r=(e,r)=>e<r?{startIndex:e,endIndex:r}:{startIndex:r,endIndex:e}}(ct||(ct={}));const ut=c`
    outline-offset: -1px;
    outline: ${kn["width-020"]} ${kn.solid} ${zn["border-focus"]};
`,gt=c`
    outline-color: ${zn["border-focus"]};
`,ht=c`
    outline-color: ${zn["border-disabled"]};
`,bt=c`
    outline-color: ${zn["border-error-focus"]};
`,mt=l.div`
    border: ${kn["width-010"]} ${kn.solid} ${zn.border};
    border-radius: ${_n.sm};
    background: ${zn.bg};

    :focus-within {
        ${ut}
    }
    ${e=>e.$focused&&ut}

    ${e=>e.$readOnly?c`
                border-color: transparent;
                padding: 0;
                background: transparent !important;

                :focus-within {
                    ${gt}
                }
                ${e.$focused&&gt}
            `:e.$disabled?c`
                background: ${zn["bg-disabled"]};
                cursor: not-allowed;

                :focus-within {
                    ${ht}
                }
                ${e.$focused&&ht}
            `:e.$error?c`
                border-color: ${zn["border-error"]};

                :focus-within {
                    ${bt}
                }
                ${e.$focused&&bt}
            `:void 0}
`;l(mt)`
    display: flex;
    align-items: center;
    position: relative;
    height: max-content;
    width: 100%;
    padding: 0 ${On["spacing-16"]};
    flex-direction: ${e=>"right"===e.$position?"row-reverse":"row"};
`;const yt=l.input`
    ${e=>"small"===e.$variant?Sn["body-md-regular"]:Sn["body-baseline-regular"]}
    color: ${zn.text};
    display: block;
    background: transparent;
    border: none;
    outline: none;
    box-shadow: none;
    padding: 0;
    margin: 0;

    :disabled {
        color: ${zn["text-subtler"]};

        :hover {
            cursor: not-allowed;
        }
    }

    ::placeholder,
    ::-webkit-input-placeholder {
        color: ${zn["text-subtler"]};
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
`,ft=l.button`
    background: transparent;
    border: none;
    outline: none;

    :focus,
    :active {
        outline: none;
    }

    :focus-visible {
        outline: ${kn["width-010"]} ${kn.solid}
            ${zn["border-focus"]};
        border-radius: ${_n.sm};
    }
`,pt=l(yt)`
    width: 100%;
    height: calc(3rem - 2px); // exclude top and bottom borders

    ${e=>"no-border"!==e.$styleType&&c`
            padding-left: ${On["spacing-16"]};
            padding-right: ${e.$showClear?0:On["spacing-16"]};
        `}
`,vt=l(ft)`
    height: auto;
    padding: ${On["spacing-12"]} ${On["spacing-16"]};

    cursor: pointer;
    color: ${zn.icon};

    ${e=>"no-border"===e.$styleType&&c`
            margin-right: -${On["spacing-12"]};
        `}
`,xt=l(u)`
    height: 1.25rem;
    width: 1.25rem;
    vertical-align: middle;
`,Ft=l.div`
    display: flex;
    width: 100%;
`,wt=l(mt)`
    display: flex;
    align-items: center;
    width: 100%;
`,$t=t.forwardRef(((t,a)=>{var{value:o,spacing:l,type:d,error:c,disabled:u,readOnly:g,onChange:b,onClear:m,allowClear:y=!1,className:f,styleType:p="bordered"}=t,v=h(t,["value","spacing","type","error","disabled","readOnly","onChange","onClear","allowClear","className","styleType"]);const x=((e,r)=>"tel"===e&&!!r)(d,l),F=i(null);s(a,(()=>F.current),[]);const w=function({ref:e,formatter:r}){return()=>{var n;const t=e.current;if(!t)return;const i=t.value,s=r(i),a=null!==(n=t.selectionEnd)&&void 0!==n?n:0,o=i.substring(0,a),l=r(o),d=o.length-l.length,c=Math.max(0,a-d);return{nextValue:s,updateCaretPosition:()=>{t.value=s,t.setSelectionRange(c,c)}}}}({ref:F,formatter:e=>x?ct.transformWithSpaces(e,l):e}),$=e=>{b&&(x?E(e):b(e))},D=()=>{m&&m(),F&&F.current&&F.current.focus()},E=e=>{const r=w();if(!r)return;const{nextValue:n,updateCaretPosition:t}=r,i=n.replace(/\s/g,"");e.target.value=i,null==b||b(e),t()},C=o?(e=>e?x?ct.transformWithSpaces(e,l):e:"")(o):o,B=y&&!u&&!g&&!!o,A=()=>e(n,{children:[r(pt,Object.assign({"data-testid":"input",ref:F,disabled:u,value:C,onChange:$,type:d,readOnly:g,$showClear:B,$styleType:p},v)),B&&r(vt,{onClick:D,type:"button",$styleType:p,children:r(xt,{"aria-hidden":!0})})]});return r(n,{children:"no-border"===p?r(Ft,{className:f,children:A()}):r(wt,{$disabled:u,$error:c,$readOnly:g,className:f,children:A()})})})),Dt=l.div`
    display: flex;
    flex-direction: column;
`,Et=l.div`
    display: flex;
    flex-direction: row;
    align-self: center;
    gap: ${On["spacing-8"]};
`,Ct=l($t)`
    margin-bottom: 0rem !important;

    input {
        text-align: center;

        ${Yn.MaxWidth.xs} {
            padding: 0 ${On["spacing-8"]};
        }
    }
`,Bt=l(Wn.Small)`
    margin: ${On["spacing-32"]} 0;
`;var At;l.div`
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
    background-color: ${e=>e.$stacked?zn["overlay-subtle"]:zn["overlay-strong"]};
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
`,function(e){e.Ready="overlay-context-ready",e.Change="overlay-context-change"}(At||(At={}));l.div`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 100%;
    overflow: hidden;
    ${e=>{return r=e.show,n=e.animationFrom||"bottom",r?`\n\t\t\t${n}: 0;\n\t\t\topacity: 1;\n\t\t\ttransition: all 300ms cubic-bezier(0.21, 0.79, 0.53, 1);\n\t\t\ttransition-delay: 200ms;\n\t\t`:`\n\t\t${n}: -3%;\n\t\topacity: 0;\n\t\ttransition: all 300ms cubic-bezier(0.4, 0.34, 0.38, 1);\n\t`;var r,n}}

    ${Yn.MaxWidth.sm} {
        height: calc(
            ${e=>e.verticalHeight?`${e.verticalHeight}px`:"1vh"} * 100
        );

        top: ${e=>e.offsetTop||0}px;
    }
`;const zt=(e,r,n=!1)=>c`
        ${Sn[`${e}-${r}`]}
        ${n?"margin-bottom: 1.05em;":"margin-bottom: 0;"}
    `,St=e=>{if(e)return c`
            ${r=e,c`
    display: -webkit-box;
    -webkit-line-clamp: ${r};
    -webkit-box-orient: vertical;
    overflow: hidden;
`}
        `;var r},Mt=(e,r)=>c`
    ${zt(e,r.weight||"regular",r.paragraph)}
    ${((e=!1,r=!1,n)=>r?c`
            display: block;
            ${St(n)}
        `:e?c`
            display: inline;
        `:c`
            display: block;
            ${St(n)}
        `)(r.inline,r.paragraph,r.maxLines)}
    color: ${zn.text};
`;var kt;!function(n){const t=(e,r,n)=>{const t=l(e).attrs((({inline:e})=>({as:e?"span":void 0})))`
            ${e=>Mt(r,e)}
        `;return t.displayName=`Typography.${n}`,t};n.HeadingXXL=t("h1","heading-xxl","HeadingXXL"),n.HeadingXL=t("h2","heading-xl","HeadingXL"),n.HeadingLG=t("h3","heading-lg","HeadingLG"),n.HeadingMD=t("h4","heading-md","HeadingMD"),n.HeadingSM=t("h5","heading-sm","HeadingSM"),n.HeadingXS=t("h6","heading-xs","HeadingXS");const i=(e,r)=>{const n=l.p.attrs((({inline:e})=>({as:e?"span":void 0})))`
            ${r=>Mt(e,r)}
        `;return n.displayName=`Typography.${r}`,n};n.BodyBL=i("body-baseline","BodyBL"),n.BodyMD=i("body-md","BodyMD"),n.BodySM=i("body-sm","BodySM"),n.BodyXS=i("body-xs","BodyXS");const s=(n,t)=>{const i=l.a`
            ${e=>c`
                ${zt(n,e.weight||"regular")}
                color: ${zn.hyperlink};
                text-decoration: none;

                :hover,
                :active,
                :focus {
                    color: ${zn["text-hover"]};
                }
            `}
        `,s=n=>{var{external:t=!1,children:s}=n,a=h(n,["external","children"]);return e(i,Object.assign({},a,{children:[s,t&&r(Ot,{})]}))};return s.displayName=`Typography.${t}`,s};n.LinkBL=s("body-baseline","LinkBL"),n.LinkMD=s("body-md","LinkMD"),n.LinkSM=s("body-sm","LinkSM"),n.LinkXS=s("body-xs","LinkXS")}(kt||(kt={}));const Ot=l(g)`
    height: 1lh;
    width: 1em;
    margin-left: 0.4em;
    vertical-align: middle;
`,_t=l.div`
    border-radius: ${_n.md};
    background: ${zn.bg};
    padding: ${On["spacing-16"]} ${On["spacing-32"]};
    box-shadow: 0 2px 8px rgba(104, 104, 104, 0.25);
`,Yt=l.button`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: ${On["spacing-24"]};
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
                background-color: ${zn["bg-hover-neutral"]};
            `}
    }
`,Tt=t.forwardRef(((e,n)=>{var{children:t,focusHighlight:i=!0,focusOutline:s="none",type:a="button"}=e,o=h(e,["children","focusHighlight","focusOutline","type"]);return r(Yt,Object.assign({ref:n,$outline:s,$highlight:i,type:a},o,{children:t}))})),Lt=l.div`
    position: relative;
    display: flex;
    flex-direction: column;
    width: 40rem;
    max-height: 70%;
    background: ${zn.bg};
    box-shadow: 0 0 10px 2px rgba(0, 0, 0, 0.45);
    border-radius: 0.75rem;
    overflow: hidden;

    ${Yn.MaxWidth.md} {
        width: 90%;
        max-height: 70%;
    }
`,jt=l(Tt)`
    position: absolute;
    top: var(--close-button-top-inset, ${On["spacing-16"]});
    right: var(--close-button-right-inset, ${On["spacing-16"]});
    padding: 0;
    color: ${zn.icon};

    svg {
        height: 2rem;
        width: 2rem;
    }

    ${Yn.MaxWidth.sm} {
        right: var(--close-button-right-inset, ${On["spacing-20"]});
    }
`,It=e=>{const{textSize:r}=e||{};return c`
        // Text styling
        ${r&&Sn[`${r}-regular`]}

        strong {
            font-weight: ${Sn.Spec["weight-semibold"]};
            ${r&&Sn[`${r}-semibold`]};
        }

        p {
            margin: 0;
        }

        // Link styling
        a {
            font-weight: ${Sn.Spec["weight-semibold"]};
            ${r&&Sn[`${r}-semibold`]}
            color: ${zn.hyperlink};
            text-decoration: none;

            svg {
                color: ${zn["icon-primary"]};
                height: 1lh;
                width: 1em;
                margin-left: 0.4rem;
                vertical-align: middle;
            }

            :hover,
            :active,
            :visited,
            :focus {
                color: ${zn["hyperlink-hover"]};

                svg {
                    color: ${zn["icon-hover"]};
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
`,l((e=>{var{children:n}=e,t=h(e,["children"]);const i=t["data-testid"]||"card";return r(_t,Object.assign({},t,{"data-testid":i,children:"string"==typeof n?r(kt.BodyBL,{children:n}):n}))}))`
    color: ${zn.text};
    ${It({textSize:"body-md"})}

    ${Yn.MaxWidth.sm} {
        display: none;
    }
`,l((n=>{var{id:t="modal-box",children:i,onClose:s,showCloseButton:a=!0}=n,o=h(n,["id","children","onClose","showCloseButton"]);return e(Lt,Object.assign({"data-testid":t},o,{onClick:e=>{e.stopPropagation()},children:[a&&r(jt,{onClick:s,"data-testid":"close-button",focusHighlight:!1,focusOutline:"browser",children:r(u,{})}),i]}))}))`
    padding: 3.5rem 1.25rem 2.5rem;
`,l.div`
    overflow-y: scroll;

    ::-webkit-scrollbar {
        display: none; /* Chrome/Safari/Webkit */
    }

    color: ${zn.text};
    ${It({textSize:"body-md"})}
`,l.div`
    display: inline;
    width: fit-content;
    cursor: pointer;
    position: relative;
`;const Ht=e=>{switch(e){case"underline":return"text-decoration: underline 1px;";case"underline-dashed":return"text-decoration: underline dashed 1px;"}};l.span`
    color: ${zn["text-primary"]};
    font-weight: 600;
    text-underline-position: under;

    ${({$defaultStyle:e})=>Ht(e)}

    &:hover,
    &:focus-visible {
        color: ${zn["text-hover"]};
        ${({$hoverStyle:e})=>Ht(e)}
    }

    svg {
        height: 1lh; // align vertically
        width: 1em; // scale icon with font size
        vertical-align: top;
    }
`,l.span`
    ${e=>!e.$standalone&&"margin-left: 0.25rem;"}
`,l.div`
    padding-left: ${On["spacing-4"]};
    display: inline;
`,l.label`
    color: ${zn["text-subtle"]};
    margin-bottom: ${On["spacing-8"]};
    display: inline-block;

    ${Sn["form-label"]}
    ${It()}
    font-weight: ${Sn.Spec["weight-semibold"]};
`;const Wt=l.p`
    ${Sn["body-sm-semibold"]}
    color: ${zn["text-error"]};
    margin-top: ${On["spacing-8"]};
    margin-bottom: 0;
    outline: none;
`;l.span`
    ${Sn["form-description"]}
    color: ${zn["text-subtler"]};
    display: block;
`;const Rt=e=>r(Wt,Object.assign({},e)),Nt=n=>{var{id:t,value:s=[],"data-testid":l,className:d,cooldownDuration:c,actionButtonProps:u,errorMessage:g,numOfInput:b,onChange:m,onCooldownStart:y,onCooldownEnd:f}=n,p=h(n,["id","value","data-testid","className","cooldownDuration","actionButtonProps","errorMessage","numOfInput","onChange","onCooldownStart","onCooldownEnd"]);const v=null!=u?u:{},{disabled:x,onClick:F,styleType:w="secondary"}=v,$=h(v,["disabled","onClick","styleType"]),D=i([]),E=i(m),[C,B]=a(new Array(b).fill("")),[A,z]=a(c),[S,M]=a(new Date);o((()=>{var e;return null===(e=null==D?void 0:D.current[0])||void 0===e||e.focus(),document.addEventListener("paste",_),()=>document.removeEventListener("paste",_)}),[]),o((()=>{if(0!==c){y&&y();const e=L();return()=>e()}}),[S]),o((()=>{E.current=m}),[m]),o((()=>{s.length===b&&B(s)}),[s]);const k=e=>r=>{var n;const t=r.target.value.replace(/[^0-9]/g,"");if(Y(t)){const r=[...C];r[e]=t.substring(t.length-1),null===(n=D.current[e+1])||void 0===n||n.focus(),B(r),m&&m(r)}},O=e=>r=>{var n;const{key:t,code:i}=r;if("Backspace"===t||"Backspace"===i){const r=[...C];""!==r[e]?r[e]="":0!==e&&(r[e-1]="",null===(n=D.current[e-1])||void 0===n||n.focus()),B(r),m&&m(r)}},_=e=>{if(!e.clipboardData)return;const r=e.clipboardData.getData("text"),n=r.split("");r&&Y(r,b)?(B(n),E.current&&E.current(n)):e.preventDefault()},Y=(e,r=1)=>!!e&&RegExp(`^[0-9]{${r}}$`).test(e),T=()=>{const e=Date.now(),r=1e3*c;return e<S.valueOf()+r},L=()=>{const e=setInterval((()=>{const r=Date.now(),n=1e3*c,t=Math.ceil((S.valueOf()+n-r)/1e3);z(t),t<=0&&(f&&f(),clearInterval(e))}),1e3);return()=>{clearInterval(e)}},j=(e,r,n)=>n?`${n}-${r}-${e+1}`:`${r}-${e+1}`;return e(Dt,{id:t,"data-testid":l,className:d,children:[r(Et,{children:C.map(((e,n)=>r(Ct,Object.assign({id:j(n,"otp-input",t),"data-testid":j(n,"otp-input",l),"aria-label":`Enter OTP character ${n+1}`,ref:e=>D.current[n]=e,type:"text",inputMode:"numeric",value:e,error:!!g,onChange:k(n),onKeyDown:O(n),autoComplete:"off"},p),n)))}),g&&r(Rt,{children:g}),r(Bt,Object.assign({styleType:w,type:"button"},$,{onClick:e=>{B(new Array(b).fill("")),T()||(M(new Date),z(c)),F&&F(e)},disabled:x||T(),children:$.children?$.children:"Resend OTP"+(A?` in ${A} second${A>1?"s":""}`:"")}))]})};export{Nt as OtpInput};
//# sourceMappingURL=index.js.map
