import{jsxs as e,jsx as r,Fragment as t}from"react/jsx-runtime";import n,{useRef as a,useImperativeHandle as i,useState as o,useEffect as s}from"react";import l,{keyframes as d,css as c}from"styled-components";import{ExternalIcon as u}from"@lifesg/react-icons/external";import{CrossIcon as g}from"@lifesg/react-icons/cross";import"@lifesg/react-icons/i-circle-fill";import"@floating-ui/react";import"react-dom";function h(e,r){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(n=Object.getOwnPropertySymbols(e);a<n.length;a++)r.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(t[n[a]]=e[n[a]])}return t}"function"==typeof SuppressedError&&SuppressedError;const m=l.div`
    display: inline-block;
    position: relative;
    width: ${({$size:e})=>e?`${e}px`:"1em"};
    height: ${({$size:e})=>e?`${e}px`:"1em"};
    color: ${e=>e.$color||"currentColor"};
`,b=d`
	0% {
	  transform: rotate(0deg);
	}
	100% {
	  transform: rotate(360deg);
	}
`,f=l.div`
    box-sizing: border-box;
    display: block;
    position: absolute;
    width: 100%;
    height: 100%;
    border-width: 2px;
    border-style: solid;
    border-radius: 50%;
    border-color: currentColor transparent transparent transparent;
    animation: ${b} 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
`,y=l(f)`
    animation-delay: -0.45s;
`,p=l(f)`
    animation-delay: -0.3s;
`,F=l(f)`
    animation-delay: -0.15s;
`;var x="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};function v(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var B=Array.isArray,D="object"==typeof x&&x&&x.Object===Object&&x,$="object"==typeof self&&self&&self.Object===Object&&self,w=D||$||Function("return this")(),S=w.Symbol,E=S,C=Object.prototype,A=C.hasOwnProperty,z=C.toString,k=E?E.toStringTag:void 0;var H=function(e){var r=A.call(e,k),t=e[k];try{e[k]=void 0;var n=!0}catch(e){}var a=z.call(e);return n&&(r?e[k]=t:delete e[k]),a},O=Object.prototype.toString;var M=H,T=function(e){return O.call(e)},W=S?S.toStringTag:void 0;var L=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":W&&W in Object(e)?M(e):T(e)};var _=L,Y=function(e){return null!=e&&"object"==typeof e};var I=function(e){return"symbol"==typeof e||Y(e)&&"[object Symbol]"==_(e)},R=B,P=I,j=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,V=/^\w*$/;var N=function(e,r){if(R(e))return!1;var t=typeof e;return!("number"!=t&&"symbol"!=t&&"boolean"!=t&&null!=e&&!P(e))||(V.test(e)||!j.test(e)||null!=r&&e in Object(r))};var X=function(e){var r=typeof e;return null!=e&&("object"==r||"function"==r)},J=L,Z=X;var G,U=function(e){if(!Z(e))return!1;var r=J(e);return"[object Function]"==r||"[object GeneratorFunction]"==r||"[object AsyncFunction]"==r||"[object Proxy]"==r},q=w["__core-js_shared__"],K=(G=/[^.]+$/.exec(q&&q.keys&&q.keys.IE_PROTO||""))?"Symbol(src)_1."+G:"";var Q=function(e){return!!K&&K in e},ee=Function.prototype.toString;var re=U,te=Q,ne=X,ae=function(e){if(null!=e){try{return ee.call(e)}catch(e){}try{return e+""}catch(e){}}return""},ie=/^\[object .+?Constructor\]$/,oe=Function.prototype,se=Object.prototype,le=oe.toString,de=se.hasOwnProperty,ce=RegExp("^"+le.call(de).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");var ue=function(e){return!(!ne(e)||te(e))&&(re(e)?ce:ie).test(ae(e))},ge=function(e,r){return null==e?void 0:e[r]};var he=function(e,r){var t=ge(e,r);return ue(t)?t:void 0},me=he(Object,"create"),be=me;var fe=function(){this.__data__=be?be(null):{},this.size=0};var ye=function(e){var r=this.has(e)&&delete this.__data__[e];return this.size-=r?1:0,r},pe=me,Fe=Object.prototype.hasOwnProperty;var xe=function(e){var r=this.__data__;if(pe){var t=r[e];return"__lodash_hash_undefined__"===t?void 0:t}return Fe.call(r,e)?r[e]:void 0},ve=me,Be=Object.prototype.hasOwnProperty;var De=me;var $e=fe,we=ye,Se=xe,Ee=function(e){var r=this.__data__;return ve?void 0!==r[e]:Be.call(r,e)},Ce=function(e,r){var t=this.__data__;return this.size+=this.has(e)?0:1,t[e]=De&&void 0===r?"__lodash_hash_undefined__":r,this};function Ae(e){var r=-1,t=null==e?0:e.length;for(this.clear();++r<t;){var n=e[r];this.set(n[0],n[1])}}Ae.prototype.clear=$e,Ae.prototype.delete=we,Ae.prototype.get=Se,Ae.prototype.has=Ee,Ae.prototype.set=Ce;var ze=Ae;var ke=function(){this.__data__=[],this.size=0};var He=function(e,r){return e===r||e!=e&&r!=r};var Oe=function(e,r){for(var t=e.length;t--;)if(He(e[t][0],r))return t;return-1},Me=Oe,Te=Array.prototype.splice;var We=Oe;var Le=Oe;var _e=Oe;var Ye=ke,Ie=function(e){var r=this.__data__,t=Me(r,e);return!(t<0)&&(t==r.length-1?r.pop():Te.call(r,t,1),--this.size,!0)},Re=function(e){var r=this.__data__,t=We(r,e);return t<0?void 0:r[t][1]},Pe=function(e){return Le(this.__data__,e)>-1},je=function(e,r){var t=this.__data__,n=_e(t,e);return n<0?(++this.size,t.push([e,r])):t[n][1]=r,this};function Ve(e){var r=-1,t=null==e?0:e.length;for(this.clear();++r<t;){var n=e[r];this.set(n[0],n[1])}}Ve.prototype.clear=Ye,Ve.prototype.delete=Ie,Ve.prototype.get=Re,Ve.prototype.has=Pe,Ve.prototype.set=je;var Ne=Ve,Xe=he(w,"Map"),Je=ze,Ze=Ne,Ge=Xe;var Ue=function(e){var r=typeof e;return"string"==r||"number"==r||"symbol"==r||"boolean"==r?"__proto__"!==e:null===e};var qe=function(e,r){var t=e.__data__;return Ue(r)?t["string"==typeof r?"string":"hash"]:t.map},Ke=qe;var Qe=qe;var er=qe;var rr=qe;var tr=function(){this.size=0,this.__data__={hash:new Je,map:new(Ge||Ze),string:new Je}},nr=function(e){var r=Ke(this,e).delete(e);return this.size-=r?1:0,r},ar=function(e){return Qe(this,e).get(e)},ir=function(e){return er(this,e).has(e)},or=function(e,r){var t=rr(this,e),n=t.size;return t.set(e,r),this.size+=t.size==n?0:1,this};function sr(e){var r=-1,t=null==e?0:e.length;for(this.clear();++r<t;){var n=e[r];this.set(n[0],n[1])}}sr.prototype.clear=tr,sr.prototype.delete=nr,sr.prototype.get=ar,sr.prototype.has=ir,sr.prototype.set=or;var lr=sr;function dr(e,r){if("function"!=typeof e||null!=r&&"function"!=typeof r)throw new TypeError("Expected a function");var t=function(){var n=arguments,a=r?r.apply(this,n):n[0],i=t.cache;if(i.has(a))return i.get(a);var o=e.apply(this,n);return t.cache=i.set(a,o)||i,o};return t.cache=new(dr.Cache||lr),t}dr.Cache=lr;var cr=dr;var ur=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,gr=/\\(\\)?/g,hr=function(e){var r=cr(e,(function(e){return 500===t.size&&t.clear(),e})),t=r.cache;return r}((function(e){var r=[];return 46===e.charCodeAt(0)&&r.push(""),e.replace(ur,(function(e,t,n,a){r.push(n?a.replace(gr,"$1"):t||e)})),r}));var mr=function(e,r){for(var t=-1,n=null==e?0:e.length,a=Array(n);++t<n;)a[t]=r(e[t],t,e);return a},br=B,fr=I,yr=S?S.prototype:void 0,pr=yr?yr.toString:void 0;var Fr=function e(r){if("string"==typeof r)return r;if(br(r))return mr(r,e)+"";if(fr(r))return pr?pr.call(r):"";var t=r+"";return"0"==t&&1/r==-1/0?"-0":t},xr=Fr;var vr=B,Br=N,Dr=hr,$r=function(e){return null==e?"":xr(e)};var wr=I;var Sr=function(e,r){return vr(e)?e:Br(e,r)?[e]:Dr($r(e))},Er=function(e){if("string"==typeof e||wr(e))return e;var r=e+"";return"0"==r&&1/e==-1/0?"-0":r};var Cr=function(e,r){for(var t=0,n=(r=Sr(r,e)).length;null!=e&&t<n;)e=e[Er(r[t++])];return t&&t==n?e:void 0};var Ar=v((function(e,r,t){var n=null==e?void 0:Cr(e,r);return void 0===n?t:n}));const zr=(e,r,t)=>Ar(t,r)||Ar(e,r),kr=(e,r)=>{const t=r||e.defaultValue;return Ar(e.collections,t)},Hr={collections:{lifesg:{"brand-10":"#2C0C0B","brand-20":"#4C1513","brand-30":"#6C1D1B","brand-40":"#922825","brand-50":"#BF3431","brand-60":"#F15D5A","brand-70":"#F69491","brand-80":"#FABAB7","brand-90":"#FCD7D2","brand-95":"#FFEBE7","brand-100":"#FFF6F4","primary-10":"#001731","primary-20":"#002752","primary-30":"#003874","primary-40":"#004D9F","primary-50":"#1768BE","primary-60":"#3C91EC","primary-70":"#6CB4FF","primary-80":"#A5CDFF","primary-90":"#CFE1FE","primary-95":"#E8F0FE","primary-100":"#F7F9FF","secondary-10":"#131529","secondary-20":"#222547","secondary-30":"#2F3565","secondary-40":"#42498B","secondary-50":"#5B62A7","secondary-60":"#858CBD","secondary-70":"#A8ADCF","secondary-80":"#C6C9E0","secondary-90":"#DDDFEC","secondary-95":"#EDEEF5","secondary-100":"#F8F8FB","neutral-10":"#161616","neutral-20":"#282828","neutral-30":"#393939","neutral-40":"#4E4E4E","neutral-50":"#686868","neutral-60":"#8E8E8E","neutral-70":"#AFAFB0","neutral-80":"#C7CACA","neutral-90":"#DDE1E2","neutral-95":"#EDEFEF","neutral-100":"#F9F9F9","success-10":"#081A0F","success-20":"#0E2D1B","success-30":"#154126","success-40":"#1C5A34","success-50":"#257645","success-60":"#44A068","success-70":"#64C189","success-80":"#80DCA5","success-90":"#B4ECCB","success-95":"#D5F6E2","success-100":"#EFFCF4","warning-10":"#221302","warning-20":"#3B2204","warning-30":"#543106","warning-40":"#744408","warning-50":"#98590C","warning-60":"#D07A13","warning-70":"#E4A244","warning-80":"#F5C26C","warning-90":"#FADBA6","warning-95":"#FCECD4","warning-100":"#FDF7F0","error-10":"#330505","error-20":"#550808","error-30":"#750C0C","error-40":"#9E130F","error-50":"#CB2213","error-60":"#DE6C6C","error-70":"#E89B9B","error-80":"#EFBEBE","error-90":"#F5D9D9","error-95":"#F9ECEC","error-100":"#FCF7F7","info-10":"#021824","info-20":"#032B3F","info-30":"#053D59","info-40":"#065478","info-50":"#176E9B","info-60":"#5296BE","info-70":"#82B5DA","info-80":"#ACCFE7","info-90":"#CCE3F1","info-95":"#E3F1F8","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000"},bookingsg:{"brand-10":"#2C0C0B","brand-20":"#4C1513","brand-30":"#6C1D1B","brand-40":"#922825","brand-50":"#BF3431","brand-60":"#F15D5A","brand-70":"#F69491","brand-80":"#FABAB7","brand-90":"#FCD7D2","brand-95":"#FFEBE7","brand-100":"#FFF6F4","primary-10":"#1A122C","primary-20":"#2F1F4D","primary-30":"#422D6E","primary-40":"#5B3D97","primary-50":"#7654BC","primary-60":"#9A82CD","primary-70":"#B7A7D8","primary-80":"#CFC5E5","primary-90":"#E3DDF0","primary-95":"#F0EDF7","primary-100":"#F9F8FC","secondary-10":"#0E1723","secondary-20":"#18293D","secondary-30":"#233A57","secondary-40":"#305078","secondary-50":"#4B6A8F","secondary-60":"#7B91A9","secondary-70":"#A1B1C3","secondary-80":"#C1CBD7","secondary-90":"#DBE1E8","secondary-95":"#EBEFF2","secondary-100":"#F7F8FA","neutral-10":"#161616","neutral-20":"#282828","neutral-30":"#393939","neutral-40":"#4E4E4E","neutral-50":"#686868","neutral-60":"#8E8E8E","neutral-70":"#AFAFB0","neutral-80":"#C7CACA","neutral-90":"#DDE1E2","neutral-95":"#EDEFEF","neutral-100":"#F9F9F9","success-10":"#081A0F","success-20":"#0E2D1B","success-30":"#154126","success-40":"#1C5A34","success-50":"#257645","success-60":"#44A068","success-70":"#64C189","success-80":"#80DCA5","success-90":"#B4ECCB","success-95":"#D5F6E2","success-100":"#EFFCF4","warning-10":"#221302","warning-20":"#3B2204","warning-30":"#543106","warning-40":"#744408","warning-50":"#98590C","warning-60":"#D07A13","warning-70":"#E4A244","warning-80":"#F5C26C","warning-90":"#FADBA6","warning-95":"#FCECD4","warning-100":"#FDF7F0","error-10":"#330505","error-20":"#550808","error-30":"#750C0C","error-40":"#9E130F","error-50":"#CB2213","error-60":"#DE6C6C","error-70":"#E89B9B","error-80":"#EFBEBE","error-90":"#F5D9D9","error-95":"#F9ECEC","error-100":"#FCF7F7","info-10":"#021824","info-20":"#032B3F","info-30":"#053D59","info-40":"#065478","info-50":"#176E9B","info-60":"#5296BE","info-70":"#82B5DA","info-80":"#ACCFE7","info-90":"#CCE3F1","info-95":"#E3F1F8","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000"},rbs:{"brand-10":"#0E123A","brand-20":"#191E65","brand-30":"#232B90","brand-40":"#303BC5","brand-50":"#494CFF","brand-60":"#AD6EFF","brand-70":"#AEA4FF","brand-80":"#C5C4FF","brand-90":"#DDDCFF","brand-95":"#EDECFF","brand-100":"#F8F8FF","primary-10":"#10152B","primary-20":"#1C254B","primary-30":"#28356C","primary-40":"#38489A","primary-50":"#4D5AD7","primary-60":"#7487F2","primary-70":"#9AAAFC","primary-80":"#BDC7FD","primary-90":"#DADFFB","primary-95":"#ECEEFE","primary-100":"#F7F8FF","secondary-10":"#19151D","secondary-20":"#2B2533","secondary-30":"#3E3649","secondary-40":"#564A64","secondary-50":"#6F637D","secondary-60":"#948B9F","secondary-70":"#B3ACBB","secondary-80":"#CCC8D2","secondary-90":"#E1DEE4","secondary-95":"#EFEEF1","secondary-100":"#F9F8F9","neutral-10":"#161616","neutral-20":"#282828","neutral-30":"#393939","neutral-40":"#4E4E4E","neutral-50":"#686868","neutral-60":"#8E8E8E","neutral-70":"#AFAFB0","neutral-80":"#C7CACA","neutral-90":"#DDE1E2","neutral-95":"#EDEFEF","neutral-100":"#F9F9F9","success-10":"#081A0F","success-20":"#0E2D1B","success-30":"#154126","success-40":"#1C5A34","success-50":"#257645","success-60":"#44A068","success-70":"#64C189","success-80":"#80DCA5","success-90":"#B4ECCB","success-95":"#D5F6E2","success-100":"#EFFCF4","warning-10":"#221302","warning-20":"#3B2204","warning-30":"#543106","warning-40":"#744408","warning-50":"#98590C","warning-60":"#D07A13","warning-70":"#E4A244","warning-80":"#F5C26C","warning-90":"#FADBA6","warning-95":"#FCECD4","warning-100":"#FDF7F0","error-10":"#330505","error-20":"#550808","error-30":"#750C0C","error-40":"#9E130F","error-50":"#CB2213","error-60":"#DE6C6C","error-70":"#E89B9B","error-80":"#EFBEBE","error-90":"#F5D9D9","error-95":"#F9ECEC","error-100":"#FCF7F7","info-10":"#021824","info-20":"#032B3F","info-30":"#053D59","info-40":"#065478","info-50":"#176E9B","info-60":"#5296BE","info-70":"#82B5DA","info-80":"#ACCFE7","info-90":"#CCE3F1","info-95":"#E3F1F8","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000"},mylegacy:{"brand-10":"#2C0C0B","brand-20":"#4C1513","brand-30":"#6C1D1B","brand-40":"#922825","brand-50":"#BF3431","brand-60":"#F15D5A","brand-70":"#F69491","brand-80":"#FABAB7","brand-90":"#FCD7D2","brand-95":"#FFEBE7","brand-100":"#FFF6F4","primary-10":"#0011924","primary-20":"#032B40","primary-30":"#043D5A","primary-40":"#05547B","primary-50":"#096EA1","primary-60":"#2098D3","primary-70":"#5CB9E8","primary-80":"#8BD3F6","primary-90":"#BEE6FA","primary-95":"#E2F2FA","primary-100":"#F4FAFC","secondary-10":"#131529","secondary-20":"#222547","secondary-30":"#2F3565","secondary-40":"#42498B","secondary-50":"#5B62A7","secondary-60":"#858CBD","secondary-70":"#A8ADCF","secondary-80":"#C6C9E0","secondary-90":"#DDDFEC","secondary-95":"#EDEEF5","secondary-100":"#F8F8FB","neutral-10":"#161616","neutral-20":"#282828","neutral-30":"#393939","neutral-40":"#4E4E4E","neutral-50":"#686868","neutral-60":"#8E8E8E","neutral-70":"#AFAFB0","neutral-80":"#C7CACA","neutral-90":"#DDE1E2","neutral-95":"#EDEFEF","neutral-100":"#F9F9F9","success-10":"#081A0F","success-20":"#0E2D1B","success-30":"#154126","success-40":"#1C5A34","success-50":"#257645","success-60":"#44A068","success-70":"#64C189","success-80":"#80DCA5","success-90":"#B4ECCB","success-95":"#D5F6E2","success-100":"#EFFCF4","warning-10":"#221302","warning-20":"#3B2204","warning-30":"#543106","warning-40":"#744408","warning-50":"#98590C","warning-60":"#D07A13","warning-70":"#E4A244","warning-80":"#F5C26C","warning-90":"#FADBA6","warning-95":"#FCECD4","warning-100":"#FDF7F0","error-10":"#330505","error-20":"#550808","error-30":"#750C0C","error-40":"#9E130F","error-50":"#CB2213","error-60":"#DE6C6C","error-70":"#E89B9B","error-80":"#EFBEBE","error-90":"#F5D9D9","error-95":"#F9ECEC","error-100":"#FCF7F7","info-10":"#021824","info-20":"#032B3F","info-30":"#053D59","info-40":"#065478","info-50":"#176E9B","info-60":"#5296BE","info-70":"#82B5DA","info-80":"#ACCFE7","info-90":"#CCE3F1","info-95":"#E3F1F8","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000"},ccube:{"brand-10":"#1F1221","brand-20":"#371F3B","brand-30":"#4E2C53","brand-40":"#6B3E73","brand-50":"#8D5197","brand-60":"#FF3399","brand-70":"#FF88C4","brand-80":"#FFB3D9","brand-90":"#FFD4E9","brand-95":"#FFE8F3","brand-100":"#FFD6EB","primary-10":"#1F1221","primary-20":"#371F3B","primary-30":"#4E2C53","primary-40":"#6B3E73","primary-50":"#8D5197","primary-60":"#B07DB7","primary-70":"#C7A3CC","primary-80":"#D9C2DD","primary-90":"#E9DBEB","primary-95":"#F3ECF4","primary-100":"#FAF7FA","secondary-10":"#2D091B","secondary-20":"#4D0F2E","secondary-30":"#6B1540","secondary-40":"#931D58","secondary-50":"#C02673","secondary-60":"#FF409F","secondary-70":"#FF88C4","secondary-80":"#FFB3D9","secondary-90":"#FFD4E9","secondary-95":"#FFE8F3","secondary-100":"#FFF8FC","neutral-10":"#161616","neutral-20":"#282828","neutral-30":"#393939","neutral-40":"#4E4E4E","neutral-50":"#686868","neutral-60":"#8E8E8E","neutral-70":"#AFAFB0","neutral-80":"#C7CACA","neutral-90":"#DDE1E2","neutral-95":"#EDEFEF","neutral-100":"#F9F9F9","success-10":"#081A0F","success-20":"#0E2D1B","success-30":"#154126","success-40":"#1C5A34","success-50":"#257645","success-60":"#44A068","success-70":"#64C189","success-80":"#80DCA5","success-90":"#B4ECCB","success-95":"#D5F6E2","success-100":"#EFFCF4","warning-10":"#221302","warning-20":"#3B2204","warning-30":"#543106","warning-40":"#744408","warning-50":"#98590C","warning-60":"#D07A13","warning-70":"#E4A244","warning-80":"#F5C26C","warning-90":"#FADBA6","warning-95":"#FCECD4","warning-100":"#FDF7F0","error-10":"#330505","error-20":"#550808","error-30":"#750C0C","error-40":"#9E130F","error-50":"#CB2213","error-60":"#DE6C6C","error-70":"#E89B9B","error-80":"#EFBEBE","error-90":"#F5D9D9","error-95":"#F9ECEC","error-100":"#FCF7F7","info-10":"#021824","info-20":"#032B3F","info-30":"#053D59","info-40":"#065478","info-50":"#176E9B","info-60":"#5296BE","info-70":"#82B5DA","info-80":"#ACCFE7","info-90":"#CCE3F1","info-95":"#E3F1F8","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000"}},defaultValue:"lifesg"},Or=e=>r=>{const t=r.theme,n=kr(Hr,t.colourScheme);return t.overrides&&t.overrides.primitiveColour?zr(n,e,t.overrides.primitiveColour):n[e]},Mr={"primary-10":Or("primary-10"),"primary-20":Or("primary-20"),"primary-30":Or("primary-30"),"primary-40":Or("primary-40"),"primary-50":Or("primary-50"),"primary-60":Or("primary-60"),"primary-70":Or("primary-70"),"primary-80":Or("primary-80"),"primary-90":Or("primary-90"),"primary-95":Or("primary-95"),"primary-100":Or("primary-100"),"secondary-10":Or("secondary-10"),"secondary-20":Or("secondary-20"),"secondary-30":Or("secondary-30"),"secondary-40":Or("secondary-40"),"secondary-50":Or("secondary-50"),"secondary-60":Or("secondary-60"),"secondary-70":Or("secondary-70"),"secondary-80":Or("secondary-80"),"secondary-90":Or("secondary-90"),"secondary-95":Or("secondary-95"),"secondary-100":Or("secondary-100"),"neutral-10":Or("neutral-10"),"neutral-20":Or("neutral-20"),"neutral-30":Or("neutral-30"),"neutral-40":Or("neutral-40"),"neutral-50":Or("neutral-50"),"neutral-60":Or("neutral-60"),"neutral-70":Or("neutral-70"),"neutral-80":Or("neutral-80"),"neutral-90":Or("neutral-90"),"neutral-95":Or("neutral-95"),"neutral-100":Or("neutral-100"),"success-10":Or("success-10"),"success-20":Or("success-20"),"success-30":Or("success-30"),"success-40":Or("success-40"),"success-50":Or("success-50"),"success-60":Or("success-60"),"success-70":Or("success-70"),"success-80":Or("success-80"),"success-90":Or("success-90"),"success-95":Or("success-95"),"success-100":Or("success-100"),"warning-10":Or("warning-10"),"warning-20":Or("warning-20"),"warning-30":Or("warning-30"),"warning-40":Or("warning-40"),"warning-50":Or("warning-50"),"warning-60":Or("warning-60"),"warning-70":Or("warning-70"),"warning-80":Or("warning-80"),"warning-90":Or("warning-90"),"warning-95":Or("warning-95"),"warning-100":Or("warning-100"),"error-10":Or("error-10"),"error-20":Or("error-20"),"error-30":Or("error-30"),"error-40":Or("error-40"),"error-50":Or("error-50"),"error-60":Or("error-60"),"error-70":Or("error-70"),"error-80":Or("error-80"),"error-90":Or("error-90"),"error-95":Or("error-95"),"error-100":Or("error-100"),"info-10":Or("info-10"),"info-20":Or("info-20"),"info-30":Or("info-30"),"info-40":Or("info-40"),"info-50":Or("info-50"),"info-60":Or("info-60"),"info-70":Or("info-70"),"info-80":Or("info-80"),"info-90":Or("info-90"),"info-95":Or("info-95"),"info-100":Or("info-100"),white:Or("white"),black:Or("black")},Tr={text:Or("neutral-20"),"text-subtle":Or("neutral-30"),"text-subtler":Or("neutral-50"),"text-subtlest":Or("neutral-60"),"text-primary":Or("primary-50"),"text-hover":Or("primary-40"),"text-selected":Or("primary-50"),"text-selected-hover":Or("primary-40"),"text-disabled":Or("neutral-50"),"text-disabled-subtle":Or("neutral-60"),"text-disabled-subtlest":Or("neutral-80"),"text-selected-disabled":Or("neutral-50"),"text-success":Or("success-40"),"text-warning":Or("warning-40"),"text-error":Or("error-40"),"text-info":Or("info-40"),"text-inverse":Or("white"),icon:Or("neutral-50"),"icon-subtle":Or("neutral-60"),"icon-strongest":Or("neutral-20"),"icon-primary":Or("primary-50"),"icon-primary-subtle":Or("primary-60"),"icon-primary-subtlest":Or("primary-70"),"icon-hover":Or("primary-40"),"icon-selected":Or("primary-50"),"icon-selected-hover":Or("primary-40"),"icon-disabled":Or("neutral-50"),"icon-disabled-subtle":Or("neutral-60"),"icon-selected-disabled":Or("neutral-60"),"icon-success":Or("success-50"),"icon-warning":Or("warning-60"),"icon-error":Or("error-50"),"icon-error-strong":Or("error-40"),"icon-info":Or("info-50"),"icon-inverse":Or("white"),"icon-primary-inverse":"#FEAB10",border:Or("neutral-90"),"border-strong":Or("neutral-70"),"border-stronger":Or("neutral-30"),"border-primary":Or("primary-50"),"border-primary-subtle":Or("primary-60"),"border-hover":Or("primary-90"),"border-hover-strong":Or("primary-60"),"border-selected":Or("primary-50"),"border-selected-subtle":Or("primary-70"),"border-selected-subtlest":Or("primary-90"),"border-selected-hover":Or("primary-40"),"border-focus":Or("primary-60"),"border-focus-strong":Or("primary-50"),"border-disabled":Or("neutral-90"),"border-selected-disabled":Or("neutral-70"),"border-success":Or("success-60"),"border-warning":Or("warning-60"),"border-error":Or("error-60"),"border-error-focus":Or("error-60"),"border-error-strong":Or("error-40"),"border-info":Or("info-60"),bg:Or("white"),"bg-strong":Or("neutral-100"),"bg-stronger":Or("neutral-95"),"bg-strongest":Or("neutral-90"),"bg-hover":Or("primary-95"),"bg-hover-strong":Or("primary-90"),"bg-hover-subtle":Or("primary-100"),"bg-hover-neutral":Or("neutral-95"),"bg-selected":Or("primary-95"),"bg-selected-hover":Or("primary-90"),"bg-selected-strong":Or("primary-90"),"bg-selected-strongest":Or("primary-90"),"bg-disabled":Or("neutral-95"),"bg-selected-disabled":Or("neutral-95"),"bg-success":Or("success-100"),"bg-success-strong":Or("success-50"),"bg-warning":Or("warning-100"),"bg-warning-strong":Or("warning-50"),"bg-info":Or("info-100"),"bg-info-strong":Or("info-50"),"bg-error":Or("error-100"),"bg-error-strong":Or("error-50"),"bg-error-strong-hover":Or("error-30"),"bg-inverse":Or("neutral-20"),"bg-inverse-subtle":Or("neutral-30"),"bg-inverse-subtler":Or("neutral-50"),"bg-inverse-subtlest":Or("neutral-60"),"bg-primary":Or("primary-50"),"bg-primary-subtle":Or("primary-60"),"bg-primary-subtler":Or("primary-80"),"bg-primary-subtlest":Or("primary-100"),"bg-primary-hover":Or("primary-40"),"bg-primary-subtlest-hover":Or("primary-90"),"bg-primary-subtlest-selected":Or("primary-90"),"bg-available":"#6DD0A1","overlay-strong":"rgba(40, 40, 40, 0.85)","overlay-subtle":"rgba(40, 40, 40, 0.20)",hyperlink:Or("primary-50"),"hyperlink-inverse":"#FFCB6A","focus-ring":Or("black"),"focus-ring-inverse":Or("white")},Wr={collections:{lifesg:Tr,bookingsg:Tr,rbs:Tr,mylegacy:Tr,ccube:Tr},defaultValue:"lifesg"},Lr=e=>r=>{const t=r.theme,n=kr(Wr,t.colourScheme),a=t.overrides&&t.overrides.semanticColour?zr(n,e,t.overrides.semanticColour):n[e];return"function"==typeof a?a(r):a},_r={text:Lr("text"),"text-subtle":Lr("text-subtle"),"text-subtler":Lr("text-subtler"),"text-subtlest":Lr("text-subtlest"),"text-primary":Lr("text-primary"),"text-hover":Lr("text-hover"),"text-selected":Lr("text-selected"),"text-selected-hover":Lr("text-selected-hover"),"text-disabled":Lr("text-disabled"),"text-disabled-subtle":Lr("text-disabled-subtle"),"text-disabled-subtlest":Lr("text-disabled-subtlest"),"text-selected-disabled":Lr("text-selected-disabled"),"text-success":Lr("text-success"),"text-warning":Lr("text-warning"),"text-error":Lr("text-error"),"text-info":Lr("text-info"),"text-inverse":Lr("text-inverse"),icon:Lr("icon"),"icon-subtle":Lr("icon-subtle"),"icon-strongest":Lr("icon-strongest"),"icon-primary":Lr("icon-primary"),"icon-primary-subtle":Lr("icon-primary-subtle"),"icon-primary-subtlest":Lr("icon-primary-subtlest"),"icon-hover":Lr("icon-hover"),"icon-selected":Lr("icon-selected"),"icon-selected-hover":Lr("icon-selected-hover"),"icon-disabled":Lr("icon-disabled"),"icon-disabled-subtle":Lr("icon-disabled-subtle"),"icon-selected-disabled":Lr("icon-selected-disabled"),"icon-success":Lr("icon-success"),"icon-warning":Lr("icon-warning"),"icon-error":Lr("icon-error"),"icon-error-strong":Lr("icon-error-strong"),"icon-info":Lr("icon-info"),"icon-inverse":Lr("icon-inverse"),"icon-primary-inverse":Lr("icon-primary-inverse"),border:Lr("border"),"border-strong":Lr("border-strong"),"border-stronger":Lr("border-stronger"),"border-primary":Lr("border-primary"),"border-primary-subtle":Lr("border-primary-subtle"),"border-hover":Lr("border-hover"),"border-hover-strong":Lr("border-hover-strong"),"border-selected":Lr("border-selected"),"border-selected-subtle":Lr("border-selected-subtle"),"border-selected-subtlest":Lr("border-selected-subtlest"),"border-selected-hover":Lr("border-selected-hover"),"border-focus":Lr("border-focus"),"border-focus-strong":Lr("border-focus-strong"),"border-disabled":Lr("border-disabled"),"border-selected-disabled":Lr("border-selected-disabled"),"border-success":Lr("border-success"),"border-warning":Lr("border-warning"),"border-error":Lr("border-error"),"border-error-focus":Lr("border-error-focus"),"border-error-strong":Lr("border-error-strong"),"border-info":Lr("border-info"),bg:Lr("bg"),"bg-strong":Lr("bg-strong"),"bg-stronger":Lr("bg-stronger"),"bg-strongest":Lr("bg-strongest"),"bg-hover":Lr("bg-hover"),"bg-hover-strong":Lr("bg-hover-strong"),"bg-hover-subtle":Lr("bg-hover-subtle"),"bg-hover-neutral":Lr("bg-hover-neutral"),"bg-selected":Lr("bg-selected"),"bg-selected-hover":Lr("bg-selected-hover"),"bg-selected-strong":Lr("bg-selected-strong"),"bg-selected-strongest":Lr("bg-selected-strongest"),"bg-disabled":Lr("bg-disabled"),"bg-selected-disabled":Lr("bg-selected-disabled"),"bg-success":Lr("bg-success"),"bg-success-strong":Lr("bg-success-strong"),"bg-warning":Lr("bg-warning"),"bg-warning-strong":Lr("bg-warning-strong"),"bg-info":Lr("bg-info"),"bg-info-strong":Lr("bg-info-strong"),"bg-error":Lr("bg-error"),"bg-error-strong":Lr("bg-error-strong"),"bg-error-strong-hover":Lr("bg-error-strong-hover"),"bg-inverse":Lr("bg-inverse"),"bg-inverse-subtle":Lr("bg-inverse-subtle"),"bg-inverse-subtler":Lr("bg-inverse-subtler"),"bg-inverse-subtlest":Lr("bg-inverse-subtlest"),"bg-primary":Lr("bg-primary"),"bg-primary-subtle":Lr("bg-primary-subtle"),"bg-primary-subtler":Lr("bg-primary-subtler"),"bg-primary-subtlest":Lr("bg-primary-subtlest"),"bg-primary-hover":Lr("bg-primary-hover"),"bg-primary-subtlest-hover":Lr("bg-primary-subtlest-hover"),"bg-primary-subtlest-selected":Lr("bg-primary-subtlest-selected"),"bg-available":Lr("bg-available"),"overlay-strong":Lr("overlay-strong"),"overlay-subtle":Lr("overlay-subtle"),hyperlink:Lr("hyperlink"),"hyperlink-inverse":Lr("hyperlink-inverse"),"focus-ring":Lr("focus-ring"),"focus-ring-inverse":Lr("focus-ring-inverse")},Yr={collections:{lifesg:{"xxs-min":0,"xxs-max":320,"xs-min":321,"xs-max":375,"sm-min":376,"sm-max":420,"md-min":421,"md-max":767,"lg-min":768,"lg-max":1023,"xl-min":1024,"xl-max":1440,"xxl-min":1441,"xxs-column":8,"xs-column":8,"sm-column":8,"md-column":8,"lg-column":12,"xl-column":12,"xxl-column":12,"xxs-gutter":16,"xs-gutter":16,"sm-gutter":16,"md-gutter":16,"lg-gutter":32,"xl-gutter":32,"xxl-gutter":32,"xxs-margin":24,"xs-margin":24,"sm-margin":24,"md-margin":24,"lg-margin":48,"xl-margin":48,"xxl-margin":48}},defaultValue:"lifesg"},Ir=e=>r=>{var t;const n=r.theme,a=kr(Yr,null==n?void 0:n.breakpointScheme);let i;return i=(null===(t=null==n?void 0:n.overrides)||void 0===t?void 0:t.breakpoint)?zr(a,e,n.overrides.breakpoint):a[e],i},Rr={"xxs-min":Ir("xxs-min"),"xxs-max":Ir("xxs-max"),"xs-min":Ir("xs-min"),"xs-max":Ir("xs-max"),"sm-min":Ir("sm-min"),"sm-max":Ir("sm-max"),"md-min":Ir("md-min"),"md-max":Ir("md-max"),"lg-min":Ir("lg-min"),"lg-max":Ir("lg-max"),"xl-min":Ir("xl-min"),"xl-max":Ir("xl-max"),"xxl-min":Ir("xxl-min"),"xxs-column":Ir("xxs-column"),"xs-column":Ir("xs-column"),"sm-column":Ir("sm-column"),"md-column":Ir("md-column"),"lg-column":Ir("lg-column"),"xl-column":Ir("xl-column"),"xxl-column":Ir("xxl-column"),"xxs-gutter":Ir("xxs-gutter"),"xs-gutter":Ir("xs-gutter"),"sm-gutter":Ir("sm-gutter"),"md-gutter":Ir("md-gutter"),"lg-gutter":Ir("lg-gutter"),"xl-gutter":Ir("xl-gutter"),"xxl-gutter":Ir("xxl-gutter"),"xxs-margin":Ir("xxs-margin"),"xs-margin":Ir("xs-margin"),"sm-margin":Ir("sm-margin"),"md-margin":Ir("md-margin"),"lg-margin":Ir("lg-margin"),"xl-margin":Ir("xl-margin"),"xxl-margin":Ir("xxl-margin")},Pr=e=>("max-width"===e?["xxs","xs","sm","md","lg","xl"]:["xxs","xs","sm","md","lg","xl","xxl"]).reduce(((r,t)=>(r[t]=((e,r)=>{const t=Rr["max-width"===e?`${r}-max`:`${r}-min`];return r=>{const n=t(r);return`@media screen and (${e}: ${n}px)`}})(e,t),r)),{}),jr={MaxWidth:Pr("max-width"),MinWidth:Pr("min-width")},Vr={"header-size-xxl":"3rem","header-size-xl":"2.5rem","header-size-lg":"2rem","header-size-md":"1.625rem","header-size-sm":"1.375rem","header-size-xs":"1.125rem","header-lh-xxl":"3.5rem","header-lh-xl":"3rem","header-lh-lg":"2.5rem","header-lh-md":"2.25rem","header-lh-sm":"1.75rem","header-lh-xs":"1.625rem","header-ls-xxl":"-0.056rem","header-ls-xl":"-0.032rem","header-ls-lg":"-0.032rem","header-ls-md":"0rem","header-ls-sm":"0rem","header-ls-xs":"0rem","weight-light":"300","weight-regular":"400","weight-semibold":"600","weight-bold":"700","font-family":"Open Sans","body-size-baseline":"1.125rem","body-size-md":"1rem","body-size-sm":"0.875rem","body-size-xs":"0.75rem","body-lh-baseline":"1.625rem","body-lh-md":"1.5rem","body-lh-sm":"1.6rem","body-lh-xs":"1.2rem","body-ls-baseline":"0rem","body-ls-md":"0.014rem","body-ls-sm":"0.012rem","body-ls-xs":"0.012rem","formlabel-size-baseline":"1rem","formlabel-size-lg":"1.125rem","formlabel-lh-baseline":"1.5rem","formlabel-lh-lg":"1.625rem","formlabel-ls-baseline":"0.014rem","formlabel-ls-lg":"0rem"},Nr={collections:{lifesg:Vr,bookingsg:{"header-size-xxl":"3rem","header-size-xl":"2.5rem","header-size-lg":"2rem","header-size-md":"1.625rem","header-size-sm":"1.375rem","header-size-xs":"1.125rem","header-lh-xxl":"3.5rem","header-lh-xl":"3rem","header-lh-lg":"2.5rem","header-lh-md":"2.25rem","header-lh-sm":"1.75rem","header-lh-xs":"1.75rem","header-ls-xxl":"-0.056rem","header-ls-xl":"-0.032rem","header-ls-lg":"-0.032rem","header-ls-md":"0rem","header-ls-sm":"0rem","header-ls-xs":"0rem","weight-light":"300","weight-regular":"400","weight-semibold":"600","weight-bold":"700","font-family":"Plus Jakarta Sans","body-size-baseline":"1.125rem","body-size-md":"1rem","body-size-sm":"0.875rem","body-size-xs":"0.75rem","body-lh-baseline":"1.75rem","body-lh-md":"1.5rem","body-lh-sm":"1.6rem","body-lh-xs":"1.2rem","body-ls-baseline":"0rem","body-ls-md":"0.014rem","body-ls-sm":"0.012rem","body-ls-xs":"0.012rem","formlabel-size-baseline":"1rem","formlabel-size-lg":"1.125rem","formlabel-lh-baseline":"1.5rem","formlabel-lh-lg":"1.75rem","formlabel-ls-baseline":"0.014rem","formlabel-ls-lg":"0rem"},rbs:Vr,mylegacy:Vr,ccube:Vr},defaultValue:"lifesg"},Xr=e=>r=>{const t=r.theme,n=kr(Nr,t.fontScheme);return t.overrides&&t.overrides.fontSpec?zr(n,e,t.overrides.fontSpec):n[e]},Jr={"header-size-xxl":Xr("header-size-xxl"),"header-size-xl":Xr("header-size-xl"),"header-size-lg":Xr("header-size-lg"),"header-size-md":Xr("header-size-md"),"header-size-sm":Xr("header-size-sm"),"header-size-xs":Xr("header-size-xs"),"header-lh-xxl":Xr("header-lh-xxl"),"header-lh-xl":Xr("header-lh-xl"),"header-lh-lg":Xr("header-lh-lg"),"header-lh-md":Xr("header-lh-md"),"header-lh-sm":Xr("header-lh-sm"),"header-lh-xs":Xr("header-lh-xs"),"header-ls-xxl":Xr("header-ls-xxl"),"header-ls-xl":Xr("header-ls-xl"),"header-ls-lg":Xr("header-ls-lg"),"header-ls-md":Xr("header-ls-md"),"header-ls-sm":Xr("header-ls-sm"),"header-ls-xs":Xr("header-ls-xs"),"weight-light":Xr("weight-light"),"weight-regular":Xr("weight-regular"),"weight-semibold":Xr("weight-semibold"),"weight-bold":Xr("weight-bold"),"font-family":Xr("font-family"),"body-size-baseline":Xr("body-size-baseline"),"body-size-md":Xr("body-size-md"),"body-size-sm":Xr("body-size-sm"),"body-size-xs":Xr("body-size-xs"),"body-lh-baseline":Xr("body-lh-baseline"),"body-lh-md":Xr("body-lh-md"),"body-lh-sm":Xr("body-lh-sm"),"body-lh-xs":Xr("body-lh-xs"),"body-ls-baseline":Xr("body-ls-baseline"),"body-ls-md":Xr("body-ls-md"),"body-ls-sm":Xr("body-ls-sm"),"body-ls-xs":Xr("body-ls-xs"),"formlabel-size-baseline":Xr("formlabel-size-baseline"),"formlabel-size-lg":Xr("formlabel-size-lg"),"formlabel-lh-baseline":Xr("formlabel-lh-baseline"),"formlabel-lh-lg":Xr("formlabel-lh-lg"),"formlabel-ls-baseline":Xr("formlabel-ls-baseline"),"formlabel-ls-lg":Xr("formlabel-ls-lg")},Zr={collections:{lifesg:{none:0,xs:2,sm:4,md:8,lg:12,full:9999}},defaultValue:"lifesg"},Gr=e=>r=>{const t=r.theme,n=kr(Zr,t.radiusScheme);return t.overrides&&t.overrides.radius?`${zr(n,e,t.overrides.radius)}px`:`${n[e]}px`},Ur={none:Gr("none"),xs:Gr("xs"),sm:Gr("sm"),md:Gr("md"),lg:Gr("lg"),full:Gr("full")},qr={collections:{lifesg:{"spacing-0":0,"spacing-4":4,"spacing-8":8,"spacing-12":12,"spacing-16":16,"spacing-20":20,"spacing-24":24,"spacing-32":32,"spacing-40":40,"spacing-48":48,"spacing-64":64,"spacing-72":72,"layout-xs":8,"layout-sm":16,"layout-md":24,"layout-lg":32,"layout-xl":48,"layout-xxl":64,"layout-xxxl":128}},defaultValue:"lifesg"},Kr=e=>r=>{const t=r.theme,n=kr(qr,t.spacingScheme);return t.overrides&&t.overrides.spacing?`${zr(n,e,t.overrides.spacing)}px`:`${n[e]}px`},Qr={"spacing-0":Kr("spacing-0"),"spacing-4":Kr("spacing-4"),"spacing-8":Kr("spacing-8"),"spacing-12":Kr("spacing-12"),"spacing-16":Kr("spacing-16"),"spacing-20":Kr("spacing-20"),"spacing-24":Kr("spacing-24"),"spacing-32":Kr("spacing-32"),"spacing-40":Kr("spacing-40"),"spacing-48":Kr("spacing-48"),"spacing-64":Kr("spacing-64"),"spacing-72":Kr("spacing-72"),"layout-xs":Kr("layout-xs"),"layout-sm":Kr("layout-sm"),"layout-md":Kr("layout-md"),"layout-lg":Kr("layout-lg"),"layout-xl":Kr("layout-xl"),"layout-xxl":Kr("layout-xxl"),"layout-xxxl":Kr("layout-xxxl")},et=(e,r,t,n)=>c`
    font-family: ${Xr("font-family")};
    font-size: ${Xr(e)};
    font-weight: ${Xr(r)};
    line-height: ${Xr(t)};
    letter-spacing: ${Xr(n)};
`,rt={"header-xxl-light":et("header-size-xxl","weight-light","header-lh-xxl","header-ls-xxl"),"header-xxl-regular":et("header-size-xxl","weight-regular","header-lh-xxl","header-ls-xxl"),"header-xxl-semibold":et("header-size-xxl","weight-semibold","header-lh-xxl","header-ls-xxl"),"header-xxl-bold":et("header-size-xxl","weight-bold","header-lh-xxl","header-ls-xxl"),"header-xl-light":et("header-size-xl","weight-light","header-lh-xl","header-ls-xl"),"header-xl-regular":et("header-size-xl","weight-regular","header-lh-xl","header-ls-xl"),"header-xl-semibold":et("header-size-xl","weight-semibold","header-lh-xl","header-ls-xl"),"header-xl-bold":et("header-size-xl","weight-bold","header-lh-xl","header-ls-xl"),"header-lg-light":et("header-size-lg","weight-light","header-lh-lg","header-ls-lg"),"header-lg-regular":et("header-size-lg","weight-regular","header-lh-lg","header-ls-lg"),"header-lg-semibold":et("header-size-lg","weight-semibold","header-lh-lg","header-ls-lg"),"header-lg-bold":et("header-size-lg","weight-bold","header-lh-lg","header-ls-lg"),"header-md-light":et("header-size-md","weight-light","header-lh-md","header-ls-md"),"header-md-regular":et("header-size-md","weight-regular","header-lh-md","header-ls-md"),"header-md-semibold":et("header-size-md","weight-semibold","header-lh-md","header-ls-md"),"header-md-bold":et("header-size-md","weight-bold","header-lh-md","header-ls-md"),"header-sm-light":et("header-size-sm","weight-light","header-lh-sm","header-ls-sm"),"header-sm-regular":et("header-size-sm","weight-regular","header-lh-sm","header-ls-sm"),"header-sm-semibold":et("header-size-sm","weight-semibold","header-lh-sm","header-ls-sm"),"header-sm-bold":et("header-size-sm","weight-bold","header-lh-sm","header-ls-sm"),"header-xs-light":et("header-size-xs","weight-light","header-lh-xs","header-ls-xs"),"header-xs-regular":et("header-size-xs","weight-regular","header-lh-xs","header-ls-xs"),"header-xs-semibold":et("header-size-xs","weight-semibold","header-lh-xs","header-ls-xs"),"header-xs-bold":et("header-size-xs","weight-bold","header-lh-xs","header-ls-xs"),"body-baseline-light":et("body-size-baseline","weight-light","body-lh-baseline","body-ls-baseline"),"body-baseline-regular":et("body-size-baseline","weight-regular","body-lh-baseline","body-ls-baseline"),"body-baseline-semibold":et("body-size-baseline","weight-semibold","body-lh-baseline","body-ls-baseline"),"body-baseline-bold":et("body-size-baseline","weight-bold","body-lh-baseline","body-ls-baseline"),"body-md-light":et("body-size-md","weight-light","body-lh-md","body-ls-md"),"body-md-regular":et("body-size-md","weight-regular","body-lh-md","body-ls-md"),"body-md-semibold":et("body-size-md","weight-semibold","body-lh-md","body-ls-md"),"body-md-bold":et("body-size-md","weight-bold","body-lh-md","body-ls-md"),"body-sm-light":et("body-size-sm","weight-light","body-lh-sm","body-ls-sm"),"body-sm-regular":et("body-size-sm","weight-regular","body-lh-sm","body-ls-sm"),"body-sm-semibold":et("body-size-sm","weight-semibold","body-lh-sm","body-ls-sm"),"body-sm-bold":et("body-size-sm","weight-bold","body-lh-sm","body-ls-sm"),"body-xs-light":et("body-size-xs","weight-light","body-lh-xs","body-ls-xs"),"body-xs-regular":et("body-size-xs","weight-regular","body-lh-xs","body-ls-xs"),"body-xs-semibold":et("body-size-xs","weight-semibold","body-lh-xs","body-ls-xs"),"body-xs-bold":et("body-size-xs","weight-bold","body-lh-xs","body-ls-xs"),"formlabel-baseline-semibold":et("formlabel-size-baseline","weight-semibold","formlabel-lh-baseline","formlabel-ls-baseline"),"formlabel-lg-semibold":et("formlabel-size-lg","weight-semibold","formlabel-lh-lg","formlabel-ls-lg")},tt={collections:{lifesg:rt,bookingsg:rt,rbs:rt,mylegacy:rt,ccube:rt},defaultValue:"lifesg"},nt=e=>r=>{const t=r.theme,n=kr(tt,t.fontScheme),a=t.overrides&&t.overrides.font?zr(n,e,t.overrides.font):n[e];return"function"==typeof a?a(r):a},at={"header-xxl-light":nt("header-xxl-light"),"header-xxl-regular":nt("header-xxl-regular"),"header-xxl-semibold":nt("header-xxl-semibold"),"header-xxl-bold":nt("header-xxl-bold"),"header-xl-light":nt("header-xl-light"),"header-xl-regular":nt("header-xl-regular"),"header-xl-semibold":nt("header-xl-semibold"),"header-xl-bold":nt("header-xl-bold"),"header-lg-light":nt("header-lg-light"),"header-lg-regular":nt("header-lg-regular"),"header-lg-semibold":nt("header-lg-semibold"),"header-lg-bold":nt("header-lg-bold"),"header-md-light":nt("header-md-light"),"header-md-regular":nt("header-md-regular"),"header-md-semibold":nt("header-md-semibold"),"header-md-bold":nt("header-md-bold"),"header-sm-light":nt("header-sm-light"),"header-sm-regular":nt("header-sm-regular"),"header-sm-semibold":nt("header-sm-semibold"),"header-sm-bold":nt("header-sm-bold"),"header-xs-light":nt("header-xs-light"),"header-xs-regular":nt("header-xs-regular"),"header-xs-semibold":nt("header-xs-semibold"),"header-xs-bold":nt("header-xs-bold"),"body-baseline-light":nt("body-baseline-light"),"body-baseline-regular":nt("body-baseline-regular"),"body-baseline-semibold":nt("body-baseline-semibold"),"body-baseline-bold":nt("body-baseline-bold"),"body-md-light":nt("body-md-light"),"body-md-regular":nt("body-md-regular"),"body-md-semibold":nt("body-md-semibold"),"body-md-bold":nt("body-md-bold"),"body-sm-light":nt("body-sm-light"),"body-sm-regular":nt("body-sm-regular"),"body-sm-semibold":nt("body-sm-semibold"),"body-sm-bold":nt("body-sm-bold"),"body-xs-light":nt("body-xs-light"),"body-xs-regular":nt("body-xs-regular"),"body-xs-semibold":nt("body-xs-semibold"),"body-xs-bold":nt("body-xs-bold"),"formlabel-baseline-semibold":nt("formlabel-baseline-semibold"),"formlabel-lg-semibold":nt("formlabel-lg-semibold")},it=Object.assign(Object.assign({},_r),{Primitive:Mr}),ot=Jr,st=at,lt=Qr,dt=Ur,ct=jr,ut=l.button`
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
    ${e=>{switch(e.$buttonStyle){case"secondary":return c`
                    background-color: ${it.Primitive.white};
                    border: 1px solid
                        ${e.$buttonIsDanger?it["border-error-strong"]:it["border-primary"]};

                    color: ${e.$buttonIsDanger?it["text-error"]:it["text-primary"]};

                    &:hover,
                    &:active {
                        background-color: ${it["bg-hover-neutral"]};
                    }
                `;case"light":return c`
                    background-color: ${it.bg};
                    border: 1px solid ${it.border};

                    color: ${e.$buttonIsDanger?it["text-error"]:it["text-primary"]};

                    &:hover,
                    &:active {
                        background-color: ${it["bg-hover-neutral"]};
                    }
                `;case"link":return c`
                    background-color: transparent;
                    border: transparent;
                    color: ${e.$buttonIsDanger?it["text-error"]:it["text-primary"]};
                    &:hover,
                    &:active {
                        background-color: ${it["bg-hover-neutral"]};
                    }
                `;case"disabled":return c`
                    background-color: ${it["bg-disabled"]};
                    border: 1px solid transparent;
                    cursor: not-allowed;

                    &:hover {
                        box-shadow: none;
                    }

                    color: ${it["text-disabled"]};
                `;default:return c`
                    background-color: ${e.$buttonIsDanger?it["bg-error-strong"]:it["bg-primary"]};
                    border: 1px solid transparent;

                    ${ct.MaxWidth.md} {
                        width: 100%;
                    }

                    color: ${it["text-inverse"]};

                    &:hover,
                    &:active {
                        background-color: ${e.$buttonIsDanger?it["bg-error-strong-hover"]:it["bg-primary-hover"]};
                    }
                `}}}

    // -----------------------------------------------------------------------------
	// BUTTON SIZE + TEXT SIZE
	// -----------------------------------------------------------------------------
	${e=>{switch(e.$buttonSizeStyle){case"small":return c`
                    height: 2.5rem;
                    ${st["body-md-semibold"]}

                    ${ct.MaxWidth.xxs} {
                        height: auto;
                    }
                `;case"large":return c`
                    height: 4rem;
                    ${st["header-md-semibold"]}

                    ${ct.MaxWidth.xxs} {
                        height: auto;
                    }
                `;default:return c`
                    height: 3rem;
                    ${st["header-xs-semibold"]}

                    ${ct.MaxWidth.xxs} {
                        height: auto;
                    }
                `}}}
`,gt=l((({color:t,className:n,size:a})=>e(m,Object.assign({className:n,$size:a,$color:t},{children:[r(f,{id:"inner1"}),r(y,{id:"inner2"}),r(p,{id:"inner3"}),r(F,{id:"inner4"})]}))))`
    margin-right: 0.5rem;
`,ht={Default:n.forwardRef(((t,n)=>{const{children:a,disabled:i=!1,loading:o=!1,styleType:s="default",danger:l=!1}=t,d=h(t,["children","disabled","loading","styleType","danger"]),c={$buttonStyle:i?"disabled":s,$buttonSizeStyle:"default",$buttonIsDanger:l};return e(ut,Object.assign({ref:n,"data-testid":d["data-testid"]||"button",disabled:i},c,d,{children:[o&&r(gt,{}),r("span",{children:a})]}))})),Small:n.forwardRef(((t,n)=>{const{children:a,disabled:i=!1,loading:o=!1,styleType:s="default",danger:l=!1}=t,d=h(t,["children","disabled","loading","styleType","danger"]),c={$buttonStyle:i?"disabled":s,$buttonSizeStyle:"small",$buttonIsDanger:l};return e(ut,Object.assign({ref:n,"data-testid":d["data-testid"]||"button",disabled:i},c,d,{children:[o&&r(gt,{}),r("span",{children:a})]}))})),Large:n.forwardRef(((t,n)=>{const{children:a,disabled:i=!1,loading:o=!1,styleType:s="default",danger:l=!1}=t,d=h(t,["children","disabled","loading","styleType","danger"]),c={$buttonStyle:i?"disabled":s,$buttonSizeStyle:"large",$buttonIsDanger:l};return e(ut,Object.assign({ref:n,"data-testid":d["data-testid"]||"button",disabled:i},c,d,{children:[o&&r(gt,{}),r("span",{children:a})]}))}))},mt=(e,r,t)=>r?Ar(t,r)||Ar(e,r):t||e,bt=(e,r)=>{const t=r||e.defaultValue;return Ar(e.collections,t)};var ft;!function(e){e.colorScheme="colorScheme",e.layout="layout",e.textStyleScheme="textStyleScheme",e.designTokenScheme="designTokenScheme",e.resourceScheme="resourceScheme"}(ft||(ft={}));const yt={collections:{base:{Brand:{1:"#EF413D",2:"#F26664",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#1C76D5",PrimaryDark:"#1869BF",Secondary:"#0056b3",Accent:{Dark:{1:"#4B539F",2:"#6D74B1",3:"#959BC5"},Light:{1:"#57A9FF",2:"#81BFFF",3:"#BED7FF",4:"#E2ECFD",5:"#F6F8FF",6:"#FBFCFE"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(87, 169, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},bookingsg:{Brand:{1:"#EF413D",2:"#F26664",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#6F4AB8",PrimaryDark:"#6443A6",Secondary:"#6443A6",Accent:{Dark:{1:"#355985",2:"#68819D",3:"#9AABBE"},Light:{1:"#977ECC",2:"#B5A5D7",3:"#CEC3E4 ",4:"#E2DBEF",5:"#F2EFF8",6:"#F7F6FB"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(161, 87, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},rbs:{Brand:{1:"#3E4DFF",2:"#AEACFF",3:"#AD44FF",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#4855D4",PrimaryDark:"#3E49B2",Secondary:"#364891",Accent:{Dark:{1:"#5E516E",2:"#7A6F87",3:"#C5C0CC"},Light:{1:"#8397FC",2:"#ABB8FC",3:"#CED6FD ",4:"#E1E4FA",5:"#F0F2FF",6:"#FAFBFF"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(90, 87, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},mylegacy:{Brand:{1:"#24588D",2:"#FFC166",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#0C7BB3",PrimaryDark:"#066391",Secondary:"#066391",Accent:{Dark:{1:"#4B539F",2:"#6D74B1",3:"#959BC5"},Light:{1:"#229AD6",2:"#8DD4F7",3:"#A4DDF9",4:"#BBE5FA",5:"#E8F4FA",6:"#F7FBFC"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#1A5230",Icon:"#2A854E",Border:"#7DDBA3",Background:"#E1FAEB"},Orange:{Text:"#693D07",Icon:"#CF7911",Border:"#F9CB77",Background:"#FCF2E6",Badge:"#F57F17"},Red:{Text:"#CB2213",Icon:"#CB2213",Border:"#DC6363",Background:"#FAF0F0"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(34, 154, 214, 0.6)",Red:"rgba(203, 34, 19, 0.5)",Elevation:"rgba(75, 83, 159, 0.24)"}},ccube:{Brand:{1:"#8D5197",2:"#FE3399",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#8D5197",PrimaryDark:"#6B3E73",Secondary:"#C02673",Accent:{Dark:{1:"#921D58",2:"#FF409F",3:"#FF88C4"},Light:{1:"#B07DB7",2:"#C7A2CC",3:"#D9C2DD",4:"#E9DBEB",5:"#F3ECF4",6:"#FAF7FA"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(210, 77, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},oneservice:{Brand:{1:"#009F97",2:"#49C3CA",3:"#A81E5E",4:"#ED1386",5:"#F7D414",6:"#000000"},Primary:"#2D7990",PrimaryDark:"#205666",Secondary:"#0056B3",Accent:{Dark:{1:"#4B539F",2:"#6D74B1",3:"#959BC5"},Light:{1:"#5D97A9",2:"#8CB6C2",3:"#B2CED6",4:"#D1E2E7",5:"#E8F0F3",6:"#F7FAFB"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(45, 121, 144, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}}},defaultValue:"base"},pt=e=>r=>{const t=r.theme,n=bt(yt,t[ft.colorScheme]);return t.options&&t.options.color?mt(n,e,t.options.color):mt(n,e)},Ft=(pt("Brand.1"),pt("Brand.2"),pt("Brand.3"),pt("Brand.4"),pt("Brand.5"),pt("Brand.6"),pt("Primary")),xt=(pt("PrimaryDark"),pt("Secondary")),vt={Light:{1:pt("Accent.Light.1"),2:pt("Accent.Light.2"),3:pt("Accent.Light.3"),4:pt("Accent.Light.4"),5:pt("Accent.Light.5"),6:pt("Accent.Light.6")},Dark:{1:pt("Accent.Dark.1"),2:pt("Accent.Dark.2"),3:pt("Accent.Dark.3")}},Bt={1:pt("Neutral.1"),2:pt("Neutral.2"),3:pt("Neutral.3"),4:pt("Neutral.4"),5:pt("Neutral.5"),6:pt("Neutral.6"),7:pt("Neutral.7"),8:pt("Neutral.8")},Dt={Green:{Text:pt("Validation.Green.Text"),Icon:pt("Validation.Green.Icon"),Border:pt("Validation.Green.Border"),Background:pt("Validation.Green.Background")},Orange:{Text:pt("Validation.Orange.Text"),Icon:pt("Validation.Orange.Icon"),Border:pt("Validation.Orange.Border"),Background:pt("Validation.Orange.Background"),Badge:pt("Validation.Orange.Badge")},Red:{Text:pt("Validation.Red.Text"),Icon:pt("Validation.Red.Icon"),Border:pt("Validation.Red.Border"),Background:pt("Validation.Red.Background")},Blue:{Text:pt("Validation.Blue.Text"),Icon:pt("Validation.Blue.Icon"),Border:pt("Validation.Blue.Border"),Background:pt("Validation.Blue.Background")}},$t={Accent:pt("Shadow.Accent"),Red:pt("Shadow.Red"),Elevation:pt("Shadow.Elevation")},wt={collections:{base:{InputBoxShadow:c`
        inset 0 0 4px 0px ${$t.Accent}
    `,InputErrorBoxShadow:c`
        inset 0 0 4px 0px ${$t.Red}
    `,ElevationBoxShadow:c`
      0px 2px 8px ${$t.Elevation}
    `,Table:{Header:"#F5F5F5",Cell:{Primary:"#FBFBFB",Secondary:"#FFFFFF",Selected:"#F9F6FF",Hover:"#E8E1F5"}},Button:{Danger:{BackgroundColor:"#CB2213",Border:"#CB2213",Hover:"#8F0E0E",Primary:"#CB2213"}}},rbs:{InputBoxShadow:c`
        inset 0 0 3px 0px ${$t.Accent}
    `,InputErrorBoxShadow:c`
        inset 0 0 3px 0px ${$t.Red}
    `,ElevationBoxShadow:c`
      0px 2px 8px ${$t.Elevation}
    `,Table:{Header:"#F5F5F5",Cell:{Primary:"#FBFBFB",Secondary:"#FFFFFF",Selected:"#F0F6FF",Hover:"#DDE6FD"}},Button:{Danger:{BackgroundColor:"#CB2213",Border:"#CB2213",Hover:"#8F0E0E",Primary:"#CB2213"}}}},defaultValue:"base"},St=e=>r=>{var t;const n=r.theme,a=bt(wt,n[ft.designTokenScheme]);return(null===(t=n.options)||void 0===t?void 0:t.designToken)?mt(a,e,n.options.designToken):mt(a,e)},Et=St("InputBoxShadow"),Ct=St("InputErrorBoxShadow"),At=(St("ElevationBoxShadow"),St("Table.Header"),St("Table.Cell.Primary"),St("Table.Cell.Secondary"),St("Table.Cell.Selected"),St("Table.Cell.Hover"),St("Button.Danger.BackgroundColor"),St("Button.Danger.Hover"),St("Button.Danger.Primary"),St("Button.Danger.Border"),{OpenSans:{Regular:"Open Sans",Semibold:"Open Sans Semibold",Bold:"Open Sans Bold",Light:"Open Sans Light"},PlusJakartaSans:{Regular:"Plus Jakarta Sans",Semibold:"Plus Jakarta Sans Semibold",Bold:"Plus Jakarta Sans Bold",Light:"Plus Jakarta Sans Light"},MerriWeather:"Merriweather"}),zt={D1:{fontFamily:At.OpenSans.Bold,fontSize:3,fontWeight:700,lineHeight:4,letterSpacing:-.056},D2:{fontFamily:At.OpenSans.Bold,fontSize:2.5,fontWeight:700,lineHeight:3.5,letterSpacing:-.032},D3:{fontFamily:At.OpenSans.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},D4:{fontFamily:At.OpenSans.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},DBody:{fontFamily:At.OpenSans.Regular,fontSize:1.375,lineHeight:1.75},H1:{fontFamily:At.OpenSans.Bold,fontSize:2,fontWeight:700,lineHeight:2.5},H2:{fontFamily:At.OpenSans.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},H3:{fontFamily:At.OpenSans.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},H4:{fontFamily:At.OpenSans.Bold,fontSize:1.125,fontWeight:700,lineHeight:1.625},H5:{fontFamily:At.OpenSans.Bold,fontSize:1,fontWeight:700,lineHeight:1.5,letterSpacing:.014},H6:{fontFamily:At.OpenSans.Bold,fontSize:.875,fontWeight:700,lineHeight:1.6,letterSpacing:.012},Body:{fontFamily:At.OpenSans.Regular,fontSize:1.125,lineHeight:1.625},BodySmall:{fontFamily:At.OpenSans.Regular,fontSize:1,lineHeight:1.5,letterSpacing:.014},XSmall:{fontFamily:At.OpenSans.Regular,fontSize:.75,lineHeight:1.2,letterSpacing:.012}},kt={D1:{fontFamily:At.PlusJakartaSans.Bold,fontSize:3,fontWeight:700,lineHeight:3.5,letterSpacing:-.056},D2:{fontFamily:At.PlusJakartaSans.Bold,fontSize:2.5,fontWeight:700,lineHeight:3,letterSpacing:-.032},D3:{fontFamily:At.PlusJakartaSans.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},D4:{fontFamily:At.PlusJakartaSans.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},DBody:{fontFamily:At.PlusJakartaSans.Regular,fontSize:1.375,lineHeight:1.75},H1:{fontFamily:At.PlusJakartaSans.Bold,fontSize:2,fontWeight:700,lineHeight:2.5,letterSpacing:-.032},H2:{fontFamily:At.PlusJakartaSans.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},H3:{fontFamily:At.PlusJakartaSans.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},H4:{fontFamily:At.PlusJakartaSans.Bold,fontSize:1.125,fontWeight:700,lineHeight:1.75},H5:{fontFamily:At.PlusJakartaSans.Bold,fontSize:1,fontWeight:700,lineHeight:1.5},H6:{fontFamily:At.PlusJakartaSans.Bold,fontSize:.875,fontWeight:700,lineHeight:1.625,letterSpacing:.012},Body:{fontFamily:At.PlusJakartaSans.Regular,fontSize:1.125,lineHeight:1.75},BodySmall:{fontFamily:At.PlusJakartaSans.Regular,fontSize:1,lineHeight:1.5,letterSpacing:.014},XSmall:{fontFamily:At.PlusJakartaSans.Regular,fontSize:.75,lineHeight:1.2,letterSpacing:.012}},Ht={collections:{base:zt,oneservice:{D1:{fontFamily:At.OpenSans.Bold,fontSize:2.5,fontWeight:700,lineHeight:3.5},D2:{fontFamily:At.OpenSans.Bold,fontSize:2,fontWeight:700,lineHeight:3},D3:{fontFamily:At.OpenSans.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},D4:{fontFamily:At.OpenSans.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},DBody:{fontFamily:At.OpenSans.Regular,fontSize:1.125,lineHeight:1.625},H1:{fontFamily:At.OpenSans.Bold,fontSize:1.75,fontWeight:700,lineHeight:2.625},H2:{fontFamily:At.OpenSans.Bold,fontSize:1.375,fontWeight:700,lineHeight:2},H3:{fontFamily:At.OpenSans.Bold,fontSize:1.125,fontWeight:700,lineHeight:1.625},H4:{fontFamily:At.OpenSans.Bold,fontSize:1,fontWeight:700,lineHeight:1.5},H5:{fontFamily:At.OpenSans.Bold,fontSize:.875,fontWeight:700,lineHeight:1.313},H6:{fontFamily:At.OpenSans.Bold,fontSize:.75,fontWeight:700,lineHeight:1.125},Body:{fontFamily:At.OpenSans.Regular,fontSize:1,lineHeight:1.5},BodySmall:{fontFamily:At.OpenSans.Regular,fontSize:.875,lineHeight:1.313},XSmall:{fontFamily:At.OpenSans.Regular,fontSize:.75,lineHeight:1.125}},plusJakartaSans:kt},defaultValue:"base"},Ot=e=>r=>{const t=r.theme,n=bt(Ht,t[ft.textStyleScheme]);return t.options&&t.options.textStyle?mt(n,e,t.options.textStyle):mt(n,e)},Mt={D1:{fontFamily:Ot("D1.fontFamily"),fontSize:Ot("D1.fontSize"),fontWeight:Ot("D1.fontWeight"),lineHeight:Ot("D1.lineHeight"),letterSpacing:Ot("D1.letterSpacing")},D2:{fontFamily:Ot("D2.fontFamily"),fontSize:Ot("D2.fontSize"),fontWeight:Ot("D2.fontWeight"),lineHeight:Ot("D2.lineHeight"),letterSpacing:Ot("D2.letterSpacing")},D3:{fontFamily:Ot("D3.fontFamily"),fontSize:Ot("D3.fontSize"),fontWeight:Ot("D3.fontWeight"),lineHeight:Ot("D3.lineHeight"),letterSpacing:Ot("D3.letterSpacing")},D4:{fontFamily:Ot("D4.fontFamily"),fontSize:Ot("D4.fontSize"),fontWeight:Ot("D4.fontWeight"),lineHeight:Ot("D4.lineHeight"),letterSpacing:Ot("D4.letterSpacing")},DBody:{fontFamily:Ot("DBody.fontFamily"),fontSize:Ot("DBody.fontSize"),fontWeight:Ot("DBody.fontWeight"),lineHeight:Ot("DBody.lineHeight"),letterSpacing:Ot("DBody.letterSpacing")},H1:{fontFamily:Ot("H1.fontFamily"),fontSize:Ot("H1.fontSize"),fontWeight:Ot("H1.fontWeight"),lineHeight:Ot("H1.lineHeight"),letterSpacing:Ot("H1.letterSpacing")},H2:{fontFamily:Ot("H2.fontFamily"),fontSize:Ot("H2.fontSize"),fontWeight:Ot("H2.fontWeight"),lineHeight:Ot("H2.lineHeight"),letterSpacing:Ot("H2.letterSpacing")},H3:{fontFamily:Ot("H3.fontFamily"),fontSize:Ot("H3.fontSize"),fontWeight:Ot("H3.fontWeight"),lineHeight:Ot("H3.lineHeight"),letterSpacing:Ot("H3.letterSpacing")},H4:{fontFamily:Ot("H4.fontFamily"),fontSize:Ot("H4.fontSize"),fontWeight:Ot("H4.fontWeight"),lineHeight:Ot("H4.lineHeight"),letterSpacing:Ot("H4.letterSpacing")},H5:{fontFamily:Ot("H5.fontFamily"),fontSize:Ot("H5.fontSize"),fontWeight:Ot("H5.fontWeight"),lineHeight:Ot("H5.lineHeight"),letterSpacing:Ot("H5.letterSpacing")},H6:{fontFamily:Ot("H6.fontFamily"),fontSize:Ot("H6.fontSize"),fontWeight:Ot("H6.fontWeight"),lineHeight:Ot("H6.lineHeight"),letterSpacing:Ot("H6.letterSpacing")},Body:{fontFamily:Ot("Body.fontFamily"),fontSize:Ot("Body.fontSize"),fontWeight:Ot("Body.fontWeight"),lineHeight:Ot("Body.lineHeight"),letterSpacing:Ot("Body.letterSpacing")},BodySmall:{fontFamily:Ot("BodySmall.fontFamily"),fontSize:Ot("BodySmall.fontSize"),fontWeight:Ot("BodySmall.fontWeight"),lineHeight:Ot("BodySmall.lineHeight"),letterSpacing:Ot("BodySmall.letterSpacing")},XSmall:{fontFamily:Ot("XSmall.fontFamily"),fontSize:Ot("XSmall.fontSize"),fontWeight:Ot("XSmall.fontWeight"),lineHeight:Ot("XSmall.lineHeight"),letterSpacing:Ot("XSmall.letterSpacing")}},Tt=[At.OpenSans,At.PlusJakartaSans],Wt=(e,r)=>{switch(r){case 700:case"bold":return e.Bold;case 600:case"semibold":return e.Semibold;case 300:case"light":return e.Light;case 400:case"regular":return e.Regular;default:return""}},Lt=(e,r)=>t=>{var n;const a=Mt[e].fontFamily(t),i=Mt[e].fontWeight(t),o=Tt.find((e=>Object.values(e).includes(a)));return o?c`
                font-family: ${Wt(o,r)||Wt(o,i)||a};
                font-weight: normal !important;
            `:c`
            font-family: ${a};
            font-weight: ${null!==(n=_t(r)||i)&&void 0!==n?n:"normal"};
        `},_t=e=>{switch(e){case 300:case"light":return 300;case 400:case"regular":return 400;case 600:case"semibold":return 600;case 700:case"bold":return 700;case 900:case"black":return 900;default:return""}},Yt=e=>{if(e>0)return c`
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: ${e};
            line-clamp: ${e};
            overflow: hidden;
        `},It=(e,r,t=!1)=>n=>{const a=Mt[e],i=a.fontSize(n);return c`
            ${Lt(e,r)}
            font-size: ${i}rem !important;
            line-height: ${a.lineHeight}rem !important;
            letter-spacing: ${a.letterSpacing(n)||0}rem !important;
            ${c`
                margin-bottom: ${i*(t?1.05:0)}rem;
            `}
        `},Rt=(e=!1,r=!1,t=void 0)=>r?c`
            display: block;
            ${Yt(t)}
        `:e?c`
            display: inline;
        `:c`
            display: block;
            ${Yt(t)}
        `;var Pt;!function(e){e.D1=l.h1`
        ${e=>c`
                ${It("D1",e.weight,e.paragraph)}
                color: ${Bt[1]};
                ${Rt(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.D2=l.h1`
        ${e=>c`
                ${It("D2",e.weight,e.paragraph)}
                color: ${Bt[1]};
                ${Rt(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.D3=l.h1`
        ${e=>c`
                ${It("D3",e.weight,e.paragraph)}
                color: ${Bt[1]};
                ${Rt(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.D4=l.h1`
        ${e=>c`
                ${It("D4",e.weight,e.paragraph)}
                color: ${Bt[1]};
                ${Rt(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.DBody=l.h1`
        ${e=>c`
                ${It("DBody",e.weight,e.paragraph)}
                color: ${Bt[1]};
                ${Rt(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H1=l.h1`
        ${e=>c`
                ${It("H1",e.weight,e.paragraph)}
                color: ${Bt[1]};
                ${Rt(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H2=l.h2`
        ${e=>c`
                ${It("H2",e.weight,e.paragraph)}
                color: ${Bt[1]};
                ${Rt(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H3=l.h3`
        ${e=>c`
                ${It("H3",e.weight,e.paragraph)}
                color: ${Bt[1]};
                ${Rt(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H4=l.h4`
        ${e=>c`
                ${It("H4",e.weight,e.paragraph)}
                color: ${Bt[1]};
                ${Rt(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H5=l.h5`
        ${e=>c`
                ${It("H5",e.weight,e.paragraph)}
                color: ${Bt[1]};
                ${Rt(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H6=l.h6`
        ${e=>c`
                ${It("H6",e.weight,e.paragraph)}
                color: ${Bt[1]};
                ${Rt(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.Body=l.p`
        ${e=>c`
                ${It("Body",e.weight,e.paragraph)}
                color: ${Bt[1]};
                ${Rt(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.BodySmall=l.p`
        ${e=>c`
                ${It("BodySmall",e.weight,e.paragraph)}
                color: ${Bt[1]};
                ${Rt(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.XSmall=l.span`
        ${e=>c`
                ${It("XSmall",e.weight,e.paragraph)}
                color: ${Bt[1]};
                ${Rt(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.Hyperlink={Default:e=>Nt(Object.assign(Object.assign({},e),{textStyle:"Body"})),Small:e=>Nt(Object.assign(Object.assign({},e),{textStyle:"BodySmall"}))}}(Pt||(Pt={}));const jt=l.a`
    ${e=>c`
            ${It(e.textStyle,e.weight)}
            color: ${Ft};
            text-decoration: none;

            :hover,
            :active,
            :focus {
                color: ${xt};

                svg {
                    color: ${xt};
                }
            }
        `}
`,Vt=l(u)`
    height: 1rem;
    width: 1rem;
    margin-left: 0.4rem;
    vertical-align: middle;
`,Nt=t=>{var{external:n=!1,children:a}=t,i=h(t,["external","children"]);return e(jt,Object.assign({},i,{children:[a,n&&r(Vt,{})]}))};var Xt;!function(e){e[e.Subpage=0]="Subpage",e[e.Domain=1]="Domain"}(Xt||(Xt={}));const Jt=c`
    border: 1px solid ${vt.Light[1]};
    box-shadow: ${Et};
`,Zt=c`
    border: 1px solid ${vt.Light[1]};
    box-shadow: none;
`,Gt=c`
    border: 1px solid ${Bt[5]};
    box-shadow: none;
`,Ut=c`
    border: 1px solid ${Dt.Red.Border};
    box-shadow: ${Ct};
`,qt=l.div`
    border: 1px solid ${Bt[5]};
    border-radius: 4px;
    background: ${Bt[8]};

    :focus-within {
        ${Jt}
    }
    ${e=>e.$focused&&Jt}

    ${e=>e.$readOnly?c`
                border: 1px solid transparent;
                padding: 0;
                background: transparent !important;

                :focus-within {
                    ${Zt}
                }
                ${e.$focused&&Zt}
            `:e.$disabled?c`
                background: ${Bt[6]};
                cursor: not-allowed;

                :focus-within {
                    ${Gt}
                }
                ${e.$focused&&Gt}
            `:e.$error?c`
                border: 1px solid ${Dt.Red.Border};

                :focus-within {
                    ${Ut}
                }
                ${e.$focused&&Ut}
            `:void 0}
`,Kt=l(qt)`
    display: flex;
    align-items: center;
    position: relative;
    height: max-content;
    width: 100%;
    padding: 0 1rem;
    flex-direction: ${e=>"right"===e.$position?"row-reverse":"row"};
`;l.input`
    ${e=>It("small"===e.$variant?"BodySmall":"Body","regular")}
    color: ${Bt[1]};
    display: block;
    background: transparent;
    border: none;
    outline: none;
    box-shadow: none;
    padding: 0;
    margin: 0;

    :disabled {
        :hover {
            cursor: not-allowed;
        }
    }

    ::placeholder,
    ::-webkit-input-placeholder {
        color: ${Bt[3]};
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
`,l.button`
    background: transparent;
    border: none;
    outline: none;

    :focus,
    :active {
        outline: none;
    }

    :focus-visible {
        outline: 2px auto ${Ft};
    }
`;var Qt={exports:{}};Qt.exports=function(){var e=1e3,r=6e4,t=36e5,n="millisecond",a="second",i="minute",o="hour",s="day",l="week",d="month",c="quarter",u="year",g="date",h="Invalid Date",m=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,b=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,f={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(e){var r=["th","st","nd","rd"],t=e%100;return"["+e+(r[(t-20)%10]||r[t]||r[0])+"]"}},y=function(e,r,t){var n=String(e);return!n||n.length>=r?e:""+Array(r+1-n.length).join(t)+e},p={s:y,z:function(e){var r=-e.utcOffset(),t=Math.abs(r),n=Math.floor(t/60),a=t%60;return(r<=0?"+":"-")+y(n,2,"0")+":"+y(a,2,"0")},m:function e(r,t){if(r.date()<t.date())return-e(t,r);var n=12*(t.year()-r.year())+(t.month()-r.month()),a=r.clone().add(n,d),i=t-a<0,o=r.clone().add(n+(i?-1:1),d);return+(-(n+(t-a)/(i?a-o:o-a))||0)},a:function(e){return e<0?Math.ceil(e)||0:Math.floor(e)},p:function(e){return{M:d,y:u,w:l,d:s,D:g,h:o,m:i,s:a,ms:n,Q:c}[e]||String(e||"").toLowerCase().replace(/s$/,"")},u:function(e){return void 0===e}},F="en",x={};x[F]=f;var v="$isDayjsObject",B=function(e){return e instanceof S||!(!e||!e[v])},D=function e(r,t,n){var a;if(!r)return F;if("string"==typeof r){var i=r.toLowerCase();x[i]&&(a=i),t&&(x[i]=t,a=i);var o=r.split("-");if(!a&&o.length>1)return e(o[0])}else{var s=r.name;x[s]=r,a=s}return!n&&a&&(F=a),a||!n&&F},$=function(e,r){if(B(e))return e.clone();var t="object"==typeof r?r:{};return t.date=e,t.args=arguments,new S(t)},w=p;w.l=D,w.i=B,w.w=function(e,r){return $(e,{locale:r.$L,utc:r.$u,x:r.$x,$offset:r.$offset})};var S=function(){function f(e){this.$L=D(e.locale,null,!0),this.parse(e),this.$x=this.$x||e.x||{},this[v]=!0}var y=f.prototype;return y.parse=function(e){this.$d=function(e){var r=e.date,t=e.utc;if(null===r)return new Date(NaN);if(w.u(r))return new Date;if(r instanceof Date)return new Date(r);if("string"==typeof r&&!/Z$/i.test(r)){var n=r.match(m);if(n){var a=n[2]-1||0,i=(n[7]||"0").substring(0,3);return t?new Date(Date.UTC(n[1],a,n[3]||1,n[4]||0,n[5]||0,n[6]||0,i)):new Date(n[1],a,n[3]||1,n[4]||0,n[5]||0,n[6]||0,i)}}return new Date(r)}(e),this.init()},y.init=function(){var e=this.$d;this.$y=e.getFullYear(),this.$M=e.getMonth(),this.$D=e.getDate(),this.$W=e.getDay(),this.$H=e.getHours(),this.$m=e.getMinutes(),this.$s=e.getSeconds(),this.$ms=e.getMilliseconds()},y.$utils=function(){return w},y.isValid=function(){return!(this.$d.toString()===h)},y.isSame=function(e,r){var t=$(e);return this.startOf(r)<=t&&t<=this.endOf(r)},y.isAfter=function(e,r){return $(e)<this.startOf(r)},y.isBefore=function(e,r){return this.endOf(r)<$(e)},y.$g=function(e,r,t){return w.u(e)?this[r]:this.set(t,e)},y.unix=function(){return Math.floor(this.valueOf()/1e3)},y.valueOf=function(){return this.$d.getTime()},y.startOf=function(e,r){var t=this,n=!!w.u(r)||r,c=w.p(e),h=function(e,r){var a=w.w(t.$u?Date.UTC(t.$y,r,e):new Date(t.$y,r,e),t);return n?a:a.endOf(s)},m=function(e,r){return w.w(t.toDate()[e].apply(t.toDate("s"),(n?[0,0,0,0]:[23,59,59,999]).slice(r)),t)},b=this.$W,f=this.$M,y=this.$D,p="set"+(this.$u?"UTC":"");switch(c){case u:return n?h(1,0):h(31,11);case d:return n?h(1,f):h(0,f+1);case l:var F=this.$locale().weekStart||0,x=(b<F?b+7:b)-F;return h(n?y-x:y+(6-x),f);case s:case g:return m(p+"Hours",0);case o:return m(p+"Minutes",1);case i:return m(p+"Seconds",2);case a:return m(p+"Milliseconds",3);default:return this.clone()}},y.endOf=function(e){return this.startOf(e,!1)},y.$set=function(e,r){var t,l=w.p(e),c="set"+(this.$u?"UTC":""),h=(t={},t[s]=c+"Date",t[g]=c+"Date",t[d]=c+"Month",t[u]=c+"FullYear",t[o]=c+"Hours",t[i]=c+"Minutes",t[a]=c+"Seconds",t[n]=c+"Milliseconds",t)[l],m=l===s?this.$D+(r-this.$W):r;if(l===d||l===u){var b=this.clone().set(g,1);b.$d[h](m),b.init(),this.$d=b.set(g,Math.min(this.$D,b.daysInMonth())).$d}else h&&this.$d[h](m);return this.init(),this},y.set=function(e,r){return this.clone().$set(e,r)},y.get=function(e){return this[w.p(e)]()},y.add=function(n,c){var g,h=this;n=Number(n);var m=w.p(c),b=function(e){var r=$(h);return w.w(r.date(r.date()+Math.round(e*n)),h)};if(m===d)return this.set(d,this.$M+n);if(m===u)return this.set(u,this.$y+n);if(m===s)return b(1);if(m===l)return b(7);var f=(g={},g[i]=r,g[o]=t,g[a]=e,g)[m]||1,y=this.$d.getTime()+n*f;return w.w(y,this)},y.subtract=function(e,r){return this.add(-1*e,r)},y.format=function(e){var r=this,t=this.$locale();if(!this.isValid())return t.invalidDate||h;var n=e||"YYYY-MM-DDTHH:mm:ssZ",a=w.z(this),i=this.$H,o=this.$m,s=this.$M,l=t.weekdays,d=t.months,c=t.meridiem,u=function(e,t,a,i){return e&&(e[t]||e(r,n))||a[t].slice(0,i)},g=function(e){return w.s(i%12||12,e,"0")},m=c||function(e,r,t){var n=e<12?"AM":"PM";return t?n.toLowerCase():n};return n.replace(b,(function(e,n){return n||function(e){switch(e){case"YY":return String(r.$y).slice(-2);case"YYYY":return w.s(r.$y,4,"0");case"M":return s+1;case"MM":return w.s(s+1,2,"0");case"MMM":return u(t.monthsShort,s,d,3);case"MMMM":return u(d,s);case"D":return r.$D;case"DD":return w.s(r.$D,2,"0");case"d":return String(r.$W);case"dd":return u(t.weekdaysMin,r.$W,l,2);case"ddd":return u(t.weekdaysShort,r.$W,l,3);case"dddd":return l[r.$W];case"H":return String(i);case"HH":return w.s(i,2,"0");case"h":return g(1);case"hh":return g(2);case"a":return m(i,o,!0);case"A":return m(i,o,!1);case"m":return String(o);case"mm":return w.s(o,2,"0");case"s":return String(r.$s);case"ss":return w.s(r.$s,2,"0");case"SSS":return w.s(r.$ms,3,"0");case"Z":return a}return null}(e)||a.replace(":","")}))},y.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},y.diff=function(n,g,h){var m,b=this,f=w.p(g),y=$(n),p=(y.utcOffset()-this.utcOffset())*r,F=this-y,x=function(){return w.m(b,y)};switch(f){case u:m=x()/12;break;case d:m=x();break;case c:m=x()/3;break;case l:m=(F-p)/6048e5;break;case s:m=(F-p)/864e5;break;case o:m=F/t;break;case i:m=F/r;break;case a:m=F/e;break;default:m=F}return h?m:w.a(m)},y.daysInMonth=function(){return this.endOf(d).$D},y.$locale=function(){return x[this.$L]},y.locale=function(e,r){if(!e)return this.$L;var t=this.clone(),n=D(e,r,!0);return n&&(t.$L=n),t},y.clone=function(){return w.w(this.$d,this)},y.toDate=function(){return new Date(this.valueOf())},y.toJSON=function(){return this.isValid()?this.toISOString():null},y.toISOString=function(){return this.$d.toISOString()},y.toString=function(){return this.$d.toUTCString()},f}(),E=S.prototype;return $.prototype=E,[["$ms",n],["$s",a],["$m",i],["$H",o],["$W",s],["$M",d],["$y",u],["$D",g]].forEach((function(e){E[e[1]]=function(r){return this.$g(r,e[0],e[1])}})),$.extend=function(e,r){return e.$i||(e(r,S,$),e.$i=!0),$},$.locale=D,$.isDayjs=B,$.unix=function(e){return $(1e3*e)},$.en=x[F],$.Ls=x,$.p={},$}();var en=v(Qt.exports),rn={exports:{}};rn.exports=function(){var e={LTS:"h:mm:ss A",LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D, YYYY",LLL:"MMMM D, YYYY h:mm A",LLLL:"dddd, MMMM D, YYYY h:mm A"},r=/(\[[^[]*\])|([-_:/.,()\s]+)|(A|a|YYYY|YY?|MM?M?M?|Do|DD?|hh?|HH?|mm?|ss?|S{1,3}|z|ZZ?)/g,t=/\d\d/,n=/\d\d?/,a=/\d*[^-_:/,()\s\d]+/,i={},o=function(e){return(e=+e)+(e>68?1900:2e3)},s=function(e){return function(r){this[e]=+r}},l=[/[+-]\d\d:?(\d\d)?|Z/,function(e){(this.zone||(this.zone={})).offset=function(e){if(!e)return 0;if("Z"===e)return 0;var r=e.match(/([+-]|\d\d)/g),t=60*r[1]+(+r[2]||0);return 0===t?0:"+"===r[0]?-t:t}(e)}],d=function(e){var r=i[e];return r&&(r.indexOf?r:r.s.concat(r.f))},c=function(e,r){var t,n=i.meridiem;if(n){for(var a=1;a<=24;a+=1)if(e.indexOf(n(a,0,r))>-1){t=a>12;break}}else t=e===(r?"pm":"PM");return t},u={A:[a,function(e){this.afternoon=c(e,!1)}],a:[a,function(e){this.afternoon=c(e,!0)}],S:[/\d/,function(e){this.milliseconds=100*+e}],SS:[t,function(e){this.milliseconds=10*+e}],SSS:[/\d{3}/,function(e){this.milliseconds=+e}],s:[n,s("seconds")],ss:[n,s("seconds")],m:[n,s("minutes")],mm:[n,s("minutes")],H:[n,s("hours")],h:[n,s("hours")],HH:[n,s("hours")],hh:[n,s("hours")],D:[n,s("day")],DD:[t,s("day")],Do:[a,function(e){var r=i.ordinal,t=e.match(/\d+/);if(this.day=t[0],r)for(var n=1;n<=31;n+=1)r(n).replace(/\[|\]/g,"")===e&&(this.day=n)}],M:[n,s("month")],MM:[t,s("month")],MMM:[a,function(e){var r=d("months"),t=(d("monthsShort")||r.map((function(e){return e.slice(0,3)}))).indexOf(e)+1;if(t<1)throw new Error;this.month=t%12||t}],MMMM:[a,function(e){var r=d("months").indexOf(e)+1;if(r<1)throw new Error;this.month=r%12||r}],Y:[/[+-]?\d+/,s("year")],YY:[t,function(e){this.year=o(e)}],YYYY:[/\d{4}/,s("year")],Z:l,ZZ:l};function g(t){var n,a;n=t,a=i&&i.formats;for(var o=(t=n.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g,(function(r,t,n){var i=n&&n.toUpperCase();return t||a[n]||e[n]||a[i].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g,(function(e,r,t){return r||t.slice(1)}))}))).match(r),s=o.length,l=0;l<s;l+=1){var d=o[l],c=u[d],g=c&&c[0],h=c&&c[1];o[l]=h?{regex:g,parser:h}:d.replace(/^\[|\]$/g,"")}return function(e){for(var r={},t=0,n=0;t<s;t+=1){var a=o[t];if("string"==typeof a)n+=a.length;else{var i=a.regex,l=a.parser,d=e.slice(n),c=i.exec(d)[0];l.call(r,c),e=e.replace(c,"")}}return function(e){var r=e.afternoon;if(void 0!==r){var t=e.hours;r?t<12&&(e.hours+=12):12===t&&(e.hours=0),delete e.afternoon}}(r),r}}return function(e,r,t){t.p.customParseFormat=!0,e&&e.parseTwoDigitYear&&(o=e.parseTwoDigitYear);var n=r.prototype,a=n.parse;n.parse=function(e){var r=e.date,n=e.utc,o=e.args;this.$u=n;var s=o[1];if("string"==typeof s){var l=!0===o[2],d=!0===o[3],c=l||d,u=o[2];d&&(u=o[2]),i=this.$locale(),!l&&u&&(i=t.Ls[u]),this.$d=function(e,r,t){try{if(["x","X"].indexOf(r)>-1)return new Date(("X"===r?1e3:1)*e);var n=g(r)(e),a=n.year,i=n.month,o=n.day,s=n.hours,l=n.minutes,d=n.seconds,c=n.milliseconds,u=n.zone,h=new Date,m=o||(a||i?1:h.getDate()),b=a||h.getFullYear(),f=0;a&&!i||(f=i>0?i-1:h.getMonth());var y=s||0,p=l||0,F=d||0,x=c||0;return u?new Date(Date.UTC(b,f,m,y,p,F,x+60*u.offset*1e3)):t?new Date(Date.UTC(b,f,m,y,p,F,x)):new Date(b,f,m,y,p,F,x)}catch(e){return new Date("")}}(r,s,n),this.init(),u&&!0!==u&&(this.$L=this.locale(u).$L),c&&r!=this.format(s)&&(this.$d=new Date("")),i={}}else if(s instanceof Array)for(var h=s.length,m=1;m<=h;m+=1){o[1]=s[m-1];var b=t.apply(this,o);if(b.isValid()){this.$d=b.$d,this.$L=b.$L,this.init();break}m===h&&(this.$d=new Date(""))}else a.call(this,e)}}}();var tn=v(rn.exports),nn={exports:{}};nn.exports=function(e,r,t){r.prototype.isBetween=function(e,r,n,a){var i=t(e),o=t(r),s="("===(a=a||"()")[0],l=")"===a[1];return(s?this.isAfter(i,n):!this.isBefore(i,n))&&(l?this.isBefore(o,n):!this.isAfter(o,n))||(s?this.isBefore(i,n):!this.isAfter(i,n))&&(l?this.isAfter(o,n):!this.isBefore(o,n))}};var an=v(nn.exports),on={exports:{}};on.exports=function(e,r){r.prototype.isSameOrAfter=function(e,r){return this.isSame(e,r)||this.isAfter(e,r)}};var sn=v(on.exports),ln={exports:{}};ln.exports=function(e,r){r.prototype.isSameOrBefore=function(e,r){return this.isSame(e,r)||this.isBefore(e,r)}};var dn,cn,un,gn=v(ln.exports),hn={exports:{}},mn=v(hn.exports=(dn={year:0,month:1,day:2,hour:3,minute:4,second:5},cn={},function(e,r,t){var n,a=function(e,r,t){void 0===t&&(t={});var n=new Date(e),a=function(e,r){void 0===r&&(r={});var t=r.timeZoneName||"short",n=e+"|"+t,a=cn[n];return a||(a=new Intl.DateTimeFormat("en-US",{hour12:!1,timeZone:e,year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit",timeZoneName:t}),cn[n]=a),a}(r,t);return a.formatToParts(n)},i=function(e,r){for(var n=a(e,r),i=[],o=0;o<n.length;o+=1){var s=n[o],l=s.type,d=s.value,c=dn[l];c>=0&&(i[c]=parseInt(d,10))}var u=i[3],g=24===u?0:u,h=i[0]+"-"+i[1]+"-"+i[2]+" "+g+":"+i[4]+":"+i[5]+":000",m=+e;return(t.utc(h).valueOf()-(m-=m%1e3))/6e4},o=r.prototype;o.tz=function(e,r){void 0===e&&(e=n);var a=this.utcOffset(),i=this.toDate(),o=i.toLocaleString("en-US",{timeZone:e}),s=Math.round((i-new Date(o))/1e3/60),l=t(o,{locale:this.$L}).$set("millisecond",this.$ms).utcOffset(15*-Math.round(i.getTimezoneOffset()/15)-s,!0);if(r){var d=l.utcOffset();l=l.add(a-d,"minute")}return l.$x.$timezone=e,l},o.offsetName=function(e){var r=this.$x.$timezone||t.tz.guess(),n=a(this.valueOf(),r,{timeZoneName:e}).find((function(e){return"timezonename"===e.type.toLowerCase()}));return n&&n.value};var s=o.startOf;o.startOf=function(e,r){if(!this.$x||!this.$x.$timezone)return s.call(this,e,r);var n=t(this.format("YYYY-MM-DD HH:mm:ss:SSS"),{locale:this.$L});return s.call(n,e,r).tz(this.$x.$timezone,!0)},t.tz=function(e,r,a){var o=a&&r,s=a||r||n,l=i(+t(),s);if("string"!=typeof e)return t(e).tz(s);var d=function(e,r,t){var n=e-60*r*1e3,a=i(n,t);if(r===a)return[n,r];var o=i(n-=60*(a-r)*1e3,t);return a===o?[n,a]:[e-60*Math.min(a,o)*1e3,Math.max(a,o)]}(t.utc(e,o).valueOf(),l,s),c=d[0],u=d[1],g=t(c).utcOffset(u);return g.$x.$timezone=s,g},t.tz.guess=function(){return Intl.DateTimeFormat().resolvedOptions().timeZone},t.tz.setDefault=function(e){n=e}}));en.extend(an),en.extend(gn),en.extend(sn),en.extend(tn),en.extend(mn),function(e){e.generateDays=e=>{const r=e.startOf("month"),t=en(r).startOf("week");return bn(t).map((e=>fn(e)))},e.generateDaysForCurrentWeek=e=>{const r=e.startOf("week");return fn(r)},e.generateMonths=e=>{const r=[];for(let t=0;t<12;t++){const n=e.month(t);r.push(en(n))}return r},e.generateDecadeOfYears=e=>{const r=e.year(),t=10*Math.floor(r/10),n=e.year(t),a=[n.subtract(1,"year"),n];for(let e=1;e<11;e++)a.push(n.add(e,"year"));return a},e.getStartEndDecade=e=>{const r=10*Math.floor(+e.format("YYYY")/10);return{beginDecade:r,endDecade:+en(`${r+9}-01-01`).format("YYYY")}},e.convertTo12HourFormat=e=>{const r=en(e,"HH:mm");return r.isValid()?r.format("h:mm a"):""},e.isWithinRange=(e,r,t,n="day")=>!r&&!t||(r&&t?e.isBetween(r,t,n,"[]"):r?e.isSameOrAfter(r,n):e.isSameOrBefore(t,n)),e.isPreviousMonthWithinRange=(r,t)=>e.isWithinRange(r.subtract(1,"month"),t,void 0,"month"),e.isPreviousYearWithinRange=(r,t)=>e.isWithinRange(r.subtract(1,"year"),t,void 0,"year"),e.isPreviousDecadeWithinRange=(r,t)=>{const{beginDecade:n}=e.getStartEndDecade(r);return e.isWithinRange(r.year(n).subtract(1,"year"),t,void 0,"year")},e.isNextMonthWithinRange=(r,t)=>e.isWithinRange(r.add(1,"month"),void 0,t,"month"),e.isNextYearWithinRange=(r,t)=>e.isWithinRange(r.add(1,"year"),void 0,t,"year"),e.isNextDecadeWithinRange=(r,t)=>{const{endDecade:n}=e.getStartEndDecade(r);return e.isWithinRange(r.year(n).add(1,"year"),void 0,t,"year")},e.getWeekStartEnd=e=>({start:e.startOf("week").format("YYYY-MM-DD"),end:e.endOf("week").format("YYYY-MM-DD")}),e.getFixedRangeStartEnd=(e,r)=>({start:e.format("YYYY-MM-DD"),end:e.add(r-1,"day").format("YYYY-MM-DD")}),e.isDisabledDay=(r,t,n,a)=>{const i=e.isWithinRange(r,n?en(n):void 0,a?en(a):void 0),o=t&&t.includes(r.format("YYYY-MM-DD"));return!i||!!o}}(un||(un={}));const bn=e=>{const r=[e];for(let t=1;t<6;t++){const n=e.add(t,"week");r.push(n)}return r},fn=e=>{const r=[];for(let t=0;t<7;t++){const n=e.add(t,"day");r.push(n)}return r},yn=[1,3,5,7,8,10,12],pn=[4,6,9,11];var Fn,xn,vn,Bn;!function(e){e.clampDay=(r,t,n)=>{const a=parseInt(r),i=parseInt(t),o=parseInt(n);return 0==a?"1":yn.includes(i)?Math.min(a,31).toString():pn.includes(i)?Math.min(a,30).toString():2===i?e.isLeapYear(o)?Math.min(a,29).toString():Math.min(a,28).toString():r},e.clampMonth=e=>{const r=parseInt(e);return 0==r?"1":r>12?"12":e},e.isLeapYear=e=>e%4==0&&e%100!=0||e%400==0,e.getTimeDiffInMinutes=(e,r,t="HH:mm")=>{const n=en(e,t);return en(r,t).diff(n,"minute")},e.toDayjs=e=>e?en(e):en(),e.addMinutesToTime=(e,r,t="HH:mm")=>en(e,t).add(r,"minutes").format(t),e.isSame=(e,r,t="day")=>en(e).isSame(en(r),t)}(Fn||(Fn={})),function(e){e.isDateDisabled=(e,r)=>{const{disabledDates:t,minDate:n,maxDate:a}=r;return!!(t&&t.length&&t.includes(e))||(!(!n||!en(e).isBefore(n,"day"))||!(!a||!en(e).isAfter(a,"day")))},e.sanitizeInput=e=>{if(e){if(en(e).isValid())return e}return""}}(xn||(xn={})),function(e){e.generate=()=>Math.random().toString(36).substring(2,9)}(vn||(vn={})),function(e){e.transformWithSpaces=(e,r)=>{const t="(.{"+r+"})";return e.replace(/[^\dA-Z]/gi,"").replace(new RegExp(t,"g"),"$1 ").trim()},e.padValue=(e,r)=>{if("0"===e)return r?e:e.padStart(2,"0");if(""===e)return e;return parseInt(e).toString().padStart(2,"0")},e.shouldTruncateToTwoLines=(e,r)=>{const t=Math.floor(r/9);return e.length>=2*t||1===e.split(" ").length&&e.length>t},e.truncateOneLine=(e,r,t,n,a=8)=>{let i=0;r>t&&(i=Math.floor((r-t)/a));const o=n+i;if(o<e.length){const r=Math.floor(o/2);return e.substring(0,r)+" ... "+e.substring(e.length-r,e.length)}return e},e.truncateTwoLines=(e,r,t,n=1.2)=>{const a=Math.floor(2*r/(.6*t))*(2/n);if(e.length<=a)return e;const i=Math.floor(.6*a),o=Math.floor(.2*a);return`${e.substring(0,i)}...${e.substring(e.length-o)}`},e.getTextWidth=(r,t)=>{if("undefined"==typeof document)return 0;const n=(e.getTextWidth.canvas||(e.getTextWidth.canvas=document.createElement("canvas"))).getContext("2d");n.font=t;return n.measureText(r).width},e.maskValue=(e,t)=>{if(!e)return e;const{maskRange:n,unmaskRange:a,maskChar:i="•",maskRegex:o,maskTransformer:s}=t;if(s)return s(e);if(o)return e.replace(o,i);if(n){const{startIndex:t,endIndex:a}=r(n[0],n[1]);return e.substring(0,t)+i.repeat(e.substring(t,a+1).length)+e.substring(a+1)}if(a){const{startIndex:t,endIndex:n}=r(a[0],a[1]);return i.repeat(e.substring(0,t).length)+e.substring(t,n+1)+i.repeat(e.substring(n+1).length)}return e};const r=(e,r)=>e<r?{startIndex:e,endIndex:r}:{startIndex:r,endIndex:e}}(Bn||(Bn={}));const Dn=l.input`
    ${It("Body","regular")}
    color: ${Bt[1]};

    // overwrite default styles
    background: transparent;
    border: none;
    height: calc(3rem - 2px); // exclude top and bottom borders
    width: 100%;
    padding: 0;

    :focus,
    :active {
        outline: none;
        border: none;
        box-shadow: none;
    }

    ::placeholder,
    ::-webkit-input-placeholder {
        color: ${Bt[3]};
    }

    ${e=>"number"===e.type?c`
                // Chrome, Safari, Edge, Opera
                ::-webkit-outer-spin-button,
                ::-webkit-inner-spin-button {
                    -webkit-appearance: none;
                    margin: 0;
                }

                // Firefox
                -moz-appearance: textfield;
            `:e.disabled?c`
                cursor: not-allowed;
            `:void 0}
`,$n=l.button`
    position: relative;
    height: auto;
    padding: 0.75rem 1rem;

    margin-right: -1rem; // offset the padding
    cursor: pointer;

    color: ${Bt[3]};
    background-color: transparent;
    border: none;
`,wn=l(g)`
    height: 1.25rem;
    width: 1.25rem;
    vertical-align: middle;
`,Sn=l.div`
    display: flex;
    width: 100%;
`,En=n.forwardRef(((n,o)=>{var{value:s,spacing:l,type:d,error:c,disabled:u,readOnly:g,onChange:m,onClear:b,allowClear:f=!1,className:y,styleType:p="bordered"}=n,F=h(n,["value","spacing","type","error","disabled","readOnly","onChange","onClear","allowClear","className","styleType"]);const x=a();i(o,(()=>x.current),[]);const v=function({ref:e,formatter:r}){return()=>{const t=e.current,n=t.value,a=r(n),i=n.substring(0,t.selectionEnd),o=r(i),s=i.length-o.length,l=Math.max(0,t.selectionEnd-s);return{nextValue:a,updateCaretPosition:()=>{t.value=a,t.setSelectionRange(l,l)}}}}({ref:x,formatter:e=>Bn.transformWithSpaces(e,l)}),B=e=>{m&&($()?w(e):m(e))},D=()=>{b&&b(),x&&x.current&&x.current.focus()},$=()=>"tel"===d&&l,w=e=>{const{nextValue:r,updateCaretPosition:t}=v(),n=r.replace(/\s/g,"");e.target.value=n,m(e),t()},S=s?(e=>e?$()?Bn.transformWithSpaces(e,l):e:"")(s):s,E=()=>e(t,{children:[r(Dn,Object.assign({"data-testid":"input",ref:x,disabled:u,value:S,onChange:B,type:d,readOnly:g},F)),f&&!u&&!g&&!!s&&r($n,Object.assign({onClick:D,type:"button"},{children:r(wn,{"aria-hidden":!0})}))]});return r(t,{children:"no-border"===p?r(Sn,Object.assign({className:y},{children:E()})):r(Kt,Object.assign({$disabled:u,$error:c,$readOnly:g,className:y},{children:E()}))})})),Cn={mobileS:320,mobileM:375,mobileL:480,tablet:1199,desktopM:1399,desktopL:1999,desktop4k:3840},An=e=>Object.keys(Cn).reduce(((r,t)=>{const n=Cn[t];return r[t]=`@media screen and (${e}: ${n}px)`,r}),{}),zn=An("max-width"),kn=(An("min-width"),l.div`
    display: flex;
    flex-direction: column;
`),Hn=l.div`
    display: flex;
    flex-direction: row;
    align-self: center;
    gap: 0.5rem;
`,On=l(En)`
    margin-bottom: 0rem !important;
    text-align: center;
    /* Chrome, Safari, Edge, Opera */
    input::-webkit-outer-spin-button,
    input::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
    }

    /* Firefox */
    input[type="text"] {
        text-align: center;
        -moz-appearance: textfield;
    }

    ${zn.mobileM} {
        padding: 0 0.5rem;
    }
`,Mn=l(ht.Small)`
    margin: 2rem 0rem;
`;var Tn;l.div`
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
    background-color: ${e=>e.$stacked?it["overlay-subtle"]:it["overlay-strong"]};
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
`,function(e){e.Ready="overlay-context-ready",e.Change="overlay-context-change"}(Tn||(Tn={}));l.div`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 100%;
    overflow: hidden;
    ${e=>{return r=e.show,t=e.animationFrom||"bottom",r?`\n\t\t\t${t}: 0;\n\t\t\topacity: 1;\n\t\t\ttransition: all 300ms cubic-bezier(0.21, 0.79, 0.53, 1);\n\t\t\ttransition-delay: 200ms;\n\t\t`:`\n\t\t${t}: -3%;\n\t\topacity: 0;\n\t\ttransition: all 300ms cubic-bezier(0.4, 0.34, 0.38, 1);\n\t`;var r,t}}

    ${ct.MaxWidth.sm} {
        height: calc(
            ${e=>e.verticalHeight?`${e.verticalHeight}px`:"1vh"} * 100
        );

        top: ${e=>e.offsetTop||0}px;
    }
`;const Wn=(e,r,t=!1)=>{const n=`${e}-${r.toLowerCase()}`;return c`
        ${st[n]}
        ${t?"margin-bottom: 1.05em;":"margin-bottom: 0;"}
    `},Ln=(e,r)=>c`
    ${Wn(e,r.weight||"regular",r.paragraph)}
    ${((e=!1,r=!1)=>r?c`
            display: block;
        `:e?c`
            display: inline;
        `:c`
            display: block;
        `)(r.inline,r.paragraph)}
    color: ${it.text};
`;var _n;!function(t){const n=(e,r,t)=>{const n=l(e).attrs((({inline:e})=>({as:e?"span":void 0})))`
            ${e=>Ln(r,e)}
        `;return n.displayName=`Typography.${t}`,n};t.HeaderXXL=n("h1","header-xxl","HeaderXXL"),t.HeaderXL=n("h2","header-xl","HeaderXL"),t.HeaderLG=n("h3","header-lg","HeaderLG"),t.HeaderMD=n("h4","header-md","HeaderMD"),t.HeaderSM=n("h5","header-sm","HeaderSM"),t.HeaderXS=n("h6","header-xs","HeaderXS");const a=(e,r)=>{const t=l.p.attrs((({inline:e})=>({as:e?"span":void 0})))`
            ${r=>Ln(e,r)}
        `;return t.displayName=`Typography.${r}`,t};t.BodyBL=a("body-baseline","BodyBL"),t.BodyMD=a("body-md","BodyMD"),t.BodySM=a("body-sm","BodySM"),t.BodyXS=a("body-xs","BodyXS");const i=(t,n)=>{const a=l.a`
            ${e=>c`
                ${Wn(t,e.weight||"regular")}
                color: ${it.hyperlink};
                text-decoration: none;

                :hover,
                :active,
                :focus {
                    color: ${it["text-hover"]};
                }
            `}
        `,i=t=>{var{external:n=!1,children:i}=t,o=h(t,["external","children"]);return e(a,Object.assign({},o,{children:[i,n&&r(Yn,{})]}))};return i.displayName=`Typography.${n}`,i};t.LinkBL=i("body-baseline","LinkBL"),t.LinkMD=i("body-md","LinkMD"),t.LinkSM=i("body-sm","LinkSM"),t.LinkXS=i("body-xs","LinkXS")}(_n||(_n={}));const Yn=l(u)`
    height: 1lh;
    width: 1em;
    margin-left: 0.4em;
    vertical-align: middle;
`,In=l.div`
    border-radius: ${dt.md};
    background: ${it.bg};
    padding: ${lt["spacing-16"]} ${lt["spacing-32"]};
    box-shadow: 0 2px 8px rgba(104, 104, 104, 0.25);
`,Rn=l.button`
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

        ${({$highlight:e})=>e&&c`
                background-color: ${Bt[7]};
            `}
    }
`,Pn=n.forwardRef(((e,t)=>{var{children:n,focusHighlight:a=!0,focusOutline:i="none",type:o="button"}=e,s=h(e,["children","focusHighlight","focusOutline","type"]);return r(Rn,Object.assign({ref:t,$outline:i,$highlight:a,type:o},s,{children:n}))})),jn=l.div`
    position: relative;
    display: flex;
    flex-direction: column;
    width: 40rem;
    max-height: 70%;
    background: ${it.bg};
    box-shadow: 0 0 10px 2px rgba(0, 0, 0, 0.45);
    border-radius: 0.75rem;
    overflow: hidden;

    ${ct.MaxWidth.md} {
        width: 90%;
        max-height: 70%;
    }
`,Vn=l(Pn)`
    position: absolute;
    top: 1rem;
    right: 1rem;
    padding: 0;
    color: ${it.icon};

    svg {
        height: 2rem;
        width: 2rem;
    }

    ${ct.MaxWidth.sm} {
        right: 1.25rem;
    }
`,Nn=e=>{const{textSize:r}=e||{};return c`
        // Text styling
        ${r&&st[`${r}-regular`]}

        strong {
            font-weight: ${ot["weight-semibold"]};
            ${r&&st[`${r}-semibold`]};
        }

        p {
            margin: 0;
        }

        // Link styling
        a {
            font-weight: ${ot["weight-semibold"]};
            ${r&&st[`${r}-semibold`]}
            color: ${it.hyperlink};
            text-decoration: none;

            svg {
                color: ${it["icon-primary"]};
                height: 1lh;
                width: 1em;
                margin-left: 0.4rem;
                vertical-align: middle;
            }

            :hover,
            :active,
            :visited,
            :focus {
                color: ${it["hyperlink-hover"]};

                svg {
                    color: ${it["icon-hover"]};
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
`,l((e=>{var{children:t}=e,n=h(e,["children"]);const a=n["data-testid"]||"card";return r(In,Object.assign({},n,{"data-testid":a},{children:"string"==typeof t?r(_n.BodyBL,{children:t}):t}))}))`
    color: ${it.text};
    ${Nn({textSize:"body-md"})}

    ${ct.MaxWidth.sm} {
        display: none;
    }
`,l((t=>{var{id:n="modal-box",children:a,onClose:i,showCloseButton:o=!0}=t,s=h(t,["id","children","onClose","showCloseButton"]);return e(jn,Object.assign({"data-testid":n},s,{onClick:e=>{e.stopPropagation()}},{children:[o&&r(Vn,Object.assign({onClick:i,"data-testid":"close-button",focusHighlight:!1,focusOutline:"browser"},{children:r(g,{})})),a]}))}))`
    padding: 3.5rem 1.25rem 2.5rem;
`,l.div`
    overflow-y: scroll;

    ::-webkit-scrollbar {
        display: none; /* Chrome/Safari/Webkit */
    }

    color: ${it.text};
    ${Nn({textSize:"body-md"})}
`,l.div`
    display: inline;
    width: fit-content;
    cursor: pointer;
    position: relative;
`;const Xn=e=>{switch(e){case"underline":return"text-decoration: underline 1px;";case"underline-dashed":return"text-decoration: underline dashed 1px;"}};l.span`
    color: ${Ft};
    font-weight: 600;
    text-underline-position: under;

    ${({$defaultStyle:e})=>Xn(e)}

    &:hover,
    &:focus-visible {
        color: ${xt};
        ${({$hoverStyle:e})=>Xn(e)}
    }

    svg {
        height: 1lh; // align vertically
        width: 1em; // scale icon with font size
        vertical-align: top;
    }
`,l.span`
    ${e=>!e.$standalone&&"margin-left: 0.25rem;"}
`,l.button`
    padding: 0.25rem 0.5rem 0.25rem 0.25rem;
    border: none;
    background: none;
    cursor: pointer;

    & > svg {
        vertical-align: text-bottom;
        height: 1rem;
        width: 1rem;
        color: ${Ft};
    }
`,l.div`
    padding-left: 0.25rem;
    display: inline;
`,l.label`
    color: ${it["text-subtle"]};
    margin-bottom: 0.5rem;
    display: inline-block;

    ${Nn({textSize:"body-md"})}
    font-weight: ${ot["weight-semibold"]};
`;const Jn=l(_n.BodySM)`
    color: ${it["text-error"]};
    margin-top: 0.5rem;
    margin-bottom: 0;
    outline: none;
`;l(_n.BodySM)`
    color: ${it["text-subtler"]};
`;const Zn=e=>r(Jn,Object.assign({weight:"semibold"},e)),Gn=t=>{var{id:n,value:i=[],"data-testid":l,className:d,cooldownDuration:c,actionButtonProps:u,errorMessage:g,numOfInput:m,onChange:b,onCooldownStart:f,onCooldownEnd:y}=t,p=h(t,["id","value","data-testid","className","cooldownDuration","actionButtonProps","errorMessage","numOfInput","onChange","onCooldownStart","onCooldownEnd"]);const F=null!=u?u:{},{disabled:x,onClick:v,styleType:B="secondary"}=F,D=h(F,["disabled","onClick","styleType"]),$=a([]),w=a(b),[S,E]=o(new Array(m).fill("")),[C,A]=o(c),[z,k]=o(new Date);s((()=>{var e;return null===(e=null==$?void 0:$.current[0])||void 0===e||e.focus(),document.addEventListener("paste",M),()=>document.removeEventListener("paste",M)}),[]),s((()=>{if(0!==c){f&&f();const e=L();return()=>e()}}),[z]),s((()=>{w.current=b}),[b]),s((()=>{i.length===m&&E(i)}),[i]);const H=e=>r=>{var t;const n=r.target.value.replace(/[^0-9]/g,"");if(T(n)){const r=[...S];r[e]=n.substring(n.length-1),null===(t=$.current[e+1])||void 0===t||t.focus(),E(r),b&&b(r)}},O=e=>r=>{var t;const{key:n,code:a}=r;if("Backspace"===n||"Backspace"===a){const r=[...S];""!==r[e]?r[e]="":0!==e&&(r[e-1]="",null===(t=$.current[e-1])||void 0===t||t.focus()),E(r),b&&b(r)}},M=e=>{const r=e.clipboardData.getData("text"),t=r.split("");r&&T(r,m)?(E(t),w.current&&w.current(t)):e.preventDefault()},T=(e,r=1)=>!!e&&RegExp(`^[0-9]{${r}}$`).test(e),W=()=>{const e=Date.now(),r=1e3*c;return e<z.valueOf()+r},L=()=>{const e=setInterval((()=>{const r=Date.now(),t=1e3*c,n=Math.ceil((z.valueOf()+t-r)/1e3);A(n),n<=0&&(y&&y(),clearInterval(e))}),1e3);return()=>{clearInterval(e)}},_=(e,r,t)=>t?`${t}-${r}-${e+1}`:`${r}-${e+1}`;return e(kn,Object.assign({id:n,"data-testid":l,className:d},{children:[r(Hn,{children:S.map(((e,t)=>r(On,Object.assign({id:_(t,"otp-input",n),"data-testid":_(t,"otp-input",l),"aria-label":`Enter OTP character ${t+1}`,ref:e=>$.current[t]=e,type:"text",inputMode:"numeric",value:e,error:!!g,onChange:H(t),onKeyDown:O(t)},p),t)))}),g&&r(Zn,{children:g}),r(Mn,Object.assign({styleType:B,type:"button"},D,{onClick:e=>{E(new Array(m).fill("")),W()||(k(new Date),A(c)),v&&v(e)},disabled:x||W()},{children:D.children?D.children:"Resend OTP"+(C?` in ${C} second${C>1?"s":""}`:"")}))]}))};export{Gn as OtpInput};
//# sourceMappingURL=index.js.map
