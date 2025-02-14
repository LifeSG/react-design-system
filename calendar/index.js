import{jsxs as e,jsx as r,Fragment as t}from"react/jsx-runtime";import n,{useMemo as a,useState as i,useRef as s,useImperativeHandle as o,useEffect as l}from"react";import d,{css as c,keyframes as u}from"styled-components";import{ChevronDownIcon as h}from"@lifesg/react-icons/chevron-down";import{ChevronLeftIcon as b}from"@lifesg/react-icons/chevron-left";import{ChevronRightIcon as g}from"@lifesg/react-icons/chevron-right";function m(e,r){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(n=Object.getOwnPropertySymbols(e);a<n.length;a++)r.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(t[n[a]]=e[n[a]])}return t}"function"==typeof SuppressedError&&SuppressedError;var y="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};function f(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var p=Array.isArray,v="object"==typeof y&&y&&y.Object===Object&&y,x="object"==typeof self&&self&&self.Object===Object&&self,D=v||x||Function("return this")(),w=D.Symbol,F=w,$=Object.prototype,E=$.hasOwnProperty,C=$.toString,S=F?F.toStringTag:void 0;var B=function(e){var r=E.call(e,S),t=e[S];try{e[S]=void 0;var n=!0}catch(e){}var a=C.call(e);return n&&(r?e[S]=t:delete e[S]),a},A=Object.prototype.toString;var M=B,z=function(e){return A.call(e)},O=w?w.toStringTag:void 0;var k=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":O&&O in Object(e)?M(e):z(e)};var Y=k,j=function(e){return null!=e&&"object"==typeof e};var _=function(e){return"symbol"==typeof e||j(e)&&"[object Symbol]"==Y(e)},T=p,L=_,R=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,H=/^\w*$/;var W=function(e,r){if(T(e))return!1;var t=typeof e;return!("number"!=t&&"symbol"!=t&&"boolean"!=t&&null!=e&&!L(e))||(H.test(e)||!R.test(e)||null!=r&&e in Object(r))};var I=function(e){var r=typeof e;return null!=e&&("object"==r||"function"==r)},N=k,P=I;var V,Z=function(e){if(!P(e))return!1;var r=N(e);return"[object Function]"==r||"[object GeneratorFunction]"==r||"[object AsyncFunction]"==r||"[object Proxy]"==r},U=D["__core-js_shared__"],J=(V=/[^.]+$/.exec(U&&U.keys&&U.keys.IE_PROTO||""))?"Symbol(src)_1."+V:"";var X=function(e){return!!J&&J in e},q=Function.prototype.toString;var G=Z,Q=X,K=I,ee=function(e){if(null!=e){try{return q.call(e)}catch(e){}try{return e+""}catch(e){}}return""},re=/^\[object .+?Constructor\]$/,te=Function.prototype,ne=Object.prototype,ae=te.toString,ie=ne.hasOwnProperty,se=RegExp("^"+ae.call(ie).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");var oe=function(e,r){return null==e?void 0:e[r]},le=function(e){return!(!K(e)||Q(e))&&(G(e)?se:re).test(ee(e))},de=oe;var ce=function(e,r){var t=de(e,r);return le(t)?t:void 0},ue=ce(Object,"create"),he=ue;var be=function(){this.__data__=he?he(null):{},this.size=0};var ge=function(e){var r=this.has(e)&&delete this.__data__[e];return this.size-=r?1:0,r},me=ue,ye=Object.prototype.hasOwnProperty;var fe=function(e){var r=this.__data__;if(me){var t=r[e];return"__lodash_hash_undefined__"===t?void 0:t}return ye.call(r,e)?r[e]:void 0},pe=ue,ve=Object.prototype.hasOwnProperty;var xe=function(e){var r=this.__data__;return pe?void 0!==r[e]:ve.call(r,e)},De=ue;var we=function(e,r){var t=this.__data__;return this.size+=this.has(e)?0:1,t[e]=De&&void 0===r?"__lodash_hash_undefined__":r,this},Fe=be,$e=ge,Ee=fe,Ce=xe,Se=we;function Be(e){var r=-1,t=null==e?0:e.length;for(this.clear();++r<t;){var n=e[r];this.set(n[0],n[1])}}Be.prototype.clear=Fe,Be.prototype.delete=$e,Be.prototype.get=Ee,Be.prototype.has=Ce,Be.prototype.set=Se;var Ae=Be;var Me=function(){this.__data__=[],this.size=0};var ze=function(e,r){return e===r||e!=e&&r!=r};var Oe=function(e,r){for(var t=e.length;t--;)if(ze(e[t][0],r))return t;return-1},ke=Oe,Ye=Array.prototype.splice;var je=function(e){var r=this.__data__,t=ke(r,e);return!(t<0)&&(t==r.length-1?r.pop():Ye.call(r,t,1),--this.size,!0)},_e=Oe;var Te=function(e){var r=this.__data__,t=_e(r,e);return t<0?void 0:r[t][1]},Le=Oe;var Re=function(e){return Le(this.__data__,e)>-1},He=Oe;var We=function(e,r){var t=this.__data__,n=He(t,e);return n<0?(++this.size,t.push([e,r])):t[n][1]=r,this},Ie=Me,Ne=je,Pe=Te,Ve=Re,Ze=We;function Ue(e){var r=-1,t=null==e?0:e.length;for(this.clear();++r<t;){var n=e[r];this.set(n[0],n[1])}}Ue.prototype.clear=Ie,Ue.prototype.delete=Ne,Ue.prototype.get=Pe,Ue.prototype.has=Ve,Ue.prototype.set=Ze;var Je=Ue,Xe=ce(D,"Map"),qe=Ae,Ge=Je,Qe=Xe;var Ke=function(e){var r=typeof e;return"string"==r||"number"==r||"symbol"==r||"boolean"==r?"__proto__"!==e:null===e};var er=function(e,r){var t=e.__data__;return Ke(r)?t["string"==typeof r?"string":"hash"]:t.map},rr=er;var tr=function(e){var r=rr(this,e).delete(e);return this.size-=r?1:0,r},nr=er;var ar=function(e){return nr(this,e).get(e)},ir=er;var sr=function(e){return ir(this,e).has(e)},or=er;var lr=function(e,r){var t=or(this,e),n=t.size;return t.set(e,r),this.size+=t.size==n?0:1,this},dr=function(){this.size=0,this.__data__={hash:new qe,map:new(Qe||Ge),string:new qe}},cr=tr,ur=ar,hr=sr,br=lr;function gr(e){var r=-1,t=null==e?0:e.length;for(this.clear();++r<t;){var n=e[r];this.set(n[0],n[1])}}gr.prototype.clear=dr,gr.prototype.delete=cr,gr.prototype.get=ur,gr.prototype.has=hr,gr.prototype.set=br;var mr=gr;function yr(e,r){if("function"!=typeof e||null!=r&&"function"!=typeof r)throw new TypeError("Expected a function");var t=function(){var n=arguments,a=r?r.apply(this,n):n[0],i=t.cache;if(i.has(a))return i.get(a);var s=e.apply(this,n);return t.cache=i.set(a,s)||i,s};return t.cache=new(yr.Cache||mr),t}yr.Cache=mr;var fr=yr;var pr=function(e){var r=fr(e,(function(e){return 500===t.size&&t.clear(),e})),t=r.cache;return r},vr=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,xr=/\\(\\)?/g,Dr=pr((function(e){var r=[];return 46===e.charCodeAt(0)&&r.push(""),e.replace(vr,(function(e,t,n,a){r.push(n?a.replace(xr,"$1"):t||e)})),r}));var wr=function(e,r){for(var t=-1,n=null==e?0:e.length,a=Array(n);++t<n;)a[t]=r(e[t],t,e);return a},Fr=p,$r=_,Er=w?w.prototype:void 0,Cr=Er?Er.toString:void 0;var Sr=function e(r){if("string"==typeof r)return r;if(Fr(r))return wr(r,e)+"";if($r(r))return Cr?Cr.call(r):"";var t=r+"";return"0"==t&&1/r==-1/0?"-0":t},Br=Sr;var Ar=p,Mr=W,zr=Dr,Or=function(e){return null==e?"":Br(e)};var kr=_;var Yr=function(e,r){return Ar(e)?e:Mr(e,r)?[e]:zr(Or(e))},jr=function(e){if("string"==typeof e||kr(e))return e;var r=e+"";return"0"==r&&1/e==-1/0?"-0":r};var _r=function(e,r){for(var t=0,n=(r=Yr(r,e)).length;null!=e&&t<n;)e=e[jr(r[t++])];return t&&t==n?e:void 0};var Tr=f((function(e,r,t){var n=null==e?void 0:_r(e,r);return void 0===n?t:n}));const Lr=(e,r,t)=>Tr(t,r)||Tr(e,r),Rr=(e,r)=>{const t=r||e.defaultValue;return Tr(e.collections,t)},Hr={collections:{lifesg:{"duration-150":"150ms","duration-250":"250ms","duration-350":"350ms","duration-500":"500ms","duration-800":"800ms","duration-1000":"1000ms","ease-default":"cubic-bezier(0.45, 0.05, 0.55, 0.95)","ease-standard":"cubic-bezier(0.86, 0, 0.07, 1)","ease-entrance":"cubic-bezier(0.18, 0.13, 0, 1)","ease-exit":"cubic-bezier(1, 0, 0.8, 0.85)"}},defaultValue:"lifesg"},Wr=e=>r=>{var t;const n=r.theme,a=Rr(Hr,null==n?void 0:n.motionScheme);return(null===(t=null==n?void 0:n.overrides)||void 0===t?void 0:t.motion)?Lr(a,e,n.overrides.motion):a[e]},Ir={"duration-150":Wr("duration-150"),"duration-250":Wr("duration-250"),"duration-350":Wr("duration-350"),"duration-500":Wr("duration-500"),"duration-800":Wr("duration-800"),"duration-1000":Wr("duration-1000"),"ease-default":Wr("ease-default"),"ease-standard":Wr("ease-standard"),"ease-entrance":Wr("ease-entrance"),"ease-exit":Wr("ease-exit")},Nr={collections:{lifesg:{"brand-10":"#2C0C0B","brand-20":"#4C1513","brand-30":"#6C1D1B","brand-40":"#922825","brand-50":"#BF3431","brand-60":"#F15D5A","brand-70":"#F69491","brand-80":"#FABAB7","brand-90":"#FCD7D2","brand-95":"#FFEBE7","brand-100":"#FFF6F4","primary-10":"#001731","primary-20":"#002752","primary-30":"#003874","primary-40":"#004D9F","primary-50":"#1768BE","primary-60":"#3C91EC","primary-70":"#6CB4FF","primary-80":"#A5CDFF","primary-90":"#CFE1FE","primary-95":"#E8F0FE","primary-100":"#F7F9FF","secondary-10":"#131529","secondary-20":"#222547","secondary-30":"#2F3565","secondary-40":"#42498B","secondary-50":"#5B62A7","secondary-60":"#858CBD","secondary-70":"#A8ADCF","secondary-80":"#C6C9E0","secondary-90":"#DDDFEC","secondary-95":"#EDEEF5","secondary-100":"#F8F8FB","neutral-10":"#161616","neutral-20":"#282828","neutral-30":"#393939","neutral-40":"#4E4E4E","neutral-50":"#686868","neutral-60":"#8E8E8E","neutral-70":"#AFAFB0","neutral-80":"#C7CACA","neutral-90":"#DDE1E2","neutral-95":"#EDEFEF","neutral-100":"#F9F9F9","success-10":"#081A0F","success-20":"#0E2D1B","success-30":"#154126","success-40":"#1C5A34","success-50":"#257645","success-60":"#44A068","success-70":"#64C189","success-80":"#80DCA5","success-90":"#B4ECCB","success-95":"#D5F6E2","success-100":"#EFFCF4","warning-10":"#221302","warning-20":"#3B2204","warning-30":"#543106","warning-40":"#744408","warning-50":"#98590C","warning-60":"#D07A13","warning-70":"#E4A244","warning-80":"#F5C26C","warning-90":"#FADBA6","warning-95":"#FCECD4","warning-100":"#FDF7F0","error-10":"#330505","error-20":"#550808","error-30":"#750C0C","error-40":"#9E130F","error-50":"#CB2213","error-60":"#DE6C6C","error-70":"#E89B9B","error-80":"#EFBEBE","error-90":"#F5D9D9","error-95":"#F9ECEC","error-100":"#FCF7F7","info-10":"#021824","info-20":"#032B3F","info-30":"#053D59","info-40":"#065478","info-50":"#176E9B","info-60":"#5296BE","info-70":"#82B5DA","info-80":"#ACCFE7","info-90":"#CCE3F1","info-95":"#E3F1F8","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000","primary-inverse":"#FEAB10"},bookingsg:{"brand-10":"#2C0C0B","brand-20":"#4C1513","brand-30":"#6C1D1B","brand-40":"#922825","brand-50":"#BF3431","brand-60":"#F15D5A","brand-70":"#F69491","brand-80":"#FABAB7","brand-90":"#FCD7D2","brand-95":"#FFEBE7","brand-100":"#FFF6F4","primary-10":"#1A122C","primary-20":"#2F1F4D","primary-30":"#422D6E","primary-40":"#5B3D97","primary-50":"#7654BC","primary-60":"#9A82CD","primary-70":"#B7A7D8","primary-80":"#CFC5E5","primary-90":"#E3DDF0","primary-95":"#F0EDF7","primary-100":"#F9F8FC","secondary-10":"#0E1723","secondary-20":"#18293D","secondary-30":"#233A57","secondary-40":"#305078","secondary-50":"#4B6A8F","secondary-60":"#7B91A9","secondary-70":"#A1B1C3","secondary-80":"#C1CBD7","secondary-90":"#DBE1E8","secondary-95":"#EBEFF2","secondary-100":"#F7F8FA","neutral-10":"#161616","neutral-20":"#282828","neutral-30":"#393939","neutral-40":"#4E4E4E","neutral-50":"#686868","neutral-60":"#8E8E8E","neutral-70":"#AFAFB0","neutral-80":"#C7CACA","neutral-90":"#DDE1E2","neutral-95":"#EDEFEF","neutral-100":"#F9F9F9","success-10":"#081A0F","success-20":"#0E2D1B","success-30":"#154126","success-40":"#1C5A34","success-50":"#257645","success-60":"#44A068","success-70":"#64C189","success-80":"#80DCA5","success-90":"#B4ECCB","success-95":"#D5F6E2","success-100":"#EFFCF4","warning-10":"#221302","warning-20":"#3B2204","warning-30":"#543106","warning-40":"#744408","warning-50":"#98590C","warning-60":"#D07A13","warning-70":"#E4A244","warning-80":"#F5C26C","warning-90":"#FADBA6","warning-95":"#FCECD4","warning-100":"#FDF7F0","error-10":"#330505","error-20":"#550808","error-30":"#750C0C","error-40":"#9E130F","error-50":"#CB2213","error-60":"#DE6C6C","error-70":"#E89B9B","error-80":"#EFBEBE","error-90":"#F5D9D9","error-95":"#F9ECEC","error-100":"#FCF7F7","info-10":"#021824","info-20":"#032B3F","info-30":"#053D59","info-40":"#065478","info-50":"#176E9B","info-60":"#5296BE","info-70":"#82B5DA","info-80":"#ACCFE7","info-90":"#CCE3F1","info-95":"#E3F1F8","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000","primary-inverse":"#FEAB10"},rbs:{"brand-10":"#0E123A","brand-20":"#191E65","brand-30":"#232B90","brand-40":"#303BC5","brand-50":"#494CFF","brand-60":"#AD6EFF","brand-70":"#AEA4FF","brand-80":"#C5C4FF","brand-90":"#DDDCFF","brand-95":"#EDECFF","brand-100":"#F8F8FF","primary-10":"#10152B","primary-20":"#1C254B","primary-30":"#28356C","primary-40":"#38489A","primary-50":"#4D5AD7","primary-60":"#7487F2","primary-70":"#9AAAFC","primary-80":"#BDC7FD","primary-90":"#DADFFB","primary-95":"#ECEEFE","primary-100":"#F7F8FF","secondary-10":"#19151D","secondary-20":"#2B2533","secondary-30":"#3E3649","secondary-40":"#564A64","secondary-50":"#6F637D","secondary-60":"#948B9F","secondary-70":"#B3ACBB","secondary-80":"#CCC8D2","secondary-90":"#E1DEE4","secondary-95":"#EFEEF1","secondary-100":"#F9F8F9","neutral-10":"#161616","neutral-20":"#282828","neutral-30":"#393939","neutral-40":"#4E4E4E","neutral-50":"#686868","neutral-60":"#8E8E8E","neutral-70":"#AFAFB0","neutral-80":"#C7CACA","neutral-90":"#DDE1E2","neutral-95":"#EDEFEF","neutral-100":"#F9F9F9","success-10":"#081A0F","success-20":"#0E2D1B","success-30":"#154126","success-40":"#1C5A34","success-50":"#257645","success-60":"#44A068","success-70":"#64C189","success-80":"#80DCA5","success-90":"#B4ECCB","success-95":"#D5F6E2","success-100":"#EFFCF4","warning-10":"#221302","warning-20":"#3B2204","warning-30":"#543106","warning-40":"#744408","warning-50":"#98590C","warning-60":"#D07A13","warning-70":"#E4A244","warning-80":"#F5C26C","warning-90":"#FADBA6","warning-95":"#FCECD4","warning-100":"#FDF7F0","error-10":"#330505","error-20":"#550808","error-30":"#750C0C","error-40":"#9E130F","error-50":"#CB2213","error-60":"#DE6C6C","error-70":"#E89B9B","error-80":"#EFBEBE","error-90":"#F5D9D9","error-95":"#F9ECEC","error-100":"#FCF7F7","info-10":"#021824","info-20":"#032B3F","info-30":"#053D59","info-40":"#065478","info-50":"#176E9B","info-60":"#5296BE","info-70":"#82B5DA","info-80":"#ACCFE7","info-90":"#CCE3F1","info-95":"#E3F1F8","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000","primary-inverse":"#FEAB10"},mylegacy:{"brand-10":"#2C0C0B","brand-20":"#4C1513","brand-30":"#6C1D1B","brand-40":"#922825","brand-50":"#BF3431","brand-60":"#F15D5A","brand-70":"#F69491","brand-80":"#FABAB7","brand-90":"#FCD7D2","brand-95":"#FFEBE7","brand-100":"#FFF6F4","primary-10":"#0011924","primary-20":"#032B40","primary-30":"#043D5A","primary-40":"#05547B","primary-50":"#096EA1","primary-60":"#2098D3","primary-70":"#5CB9E8","primary-80":"#8BD3F6","primary-90":"#BEE6FA","primary-95":"#E2F2FA","primary-100":"#F4FAFC","secondary-10":"#131529","secondary-20":"#222547","secondary-30":"#2F3565","secondary-40":"#42498B","secondary-50":"#5B62A7","secondary-60":"#858CBD","secondary-70":"#A8ADCF","secondary-80":"#C6C9E0","secondary-90":"#DDDFEC","secondary-95":"#EDEEF5","secondary-100":"#F8F8FB","neutral-10":"#161616","neutral-20":"#282828","neutral-30":"#393939","neutral-40":"#4E4E4E","neutral-50":"#686868","neutral-60":"#8E8E8E","neutral-70":"#AFAFB0","neutral-80":"#C7CACA","neutral-90":"#DDE1E2","neutral-95":"#EDEFEF","neutral-100":"#F9F9F9","success-10":"#081A0F","success-20":"#0E2D1B","success-30":"#154126","success-40":"#1C5A34","success-50":"#257645","success-60":"#44A068","success-70":"#64C189","success-80":"#80DCA5","success-90":"#B4ECCB","success-95":"#D5F6E2","success-100":"#EFFCF4","warning-10":"#221302","warning-20":"#3B2204","warning-30":"#543106","warning-40":"#744408","warning-50":"#98590C","warning-60":"#D07A13","warning-70":"#E4A244","warning-80":"#F5C26C","warning-90":"#FADBA6","warning-95":"#FCECD4","warning-100":"#FDF7F0","error-10":"#330505","error-20":"#550808","error-30":"#750C0C","error-40":"#9E130F","error-50":"#CB2213","error-60":"#DE6C6C","error-70":"#E89B9B","error-80":"#EFBEBE","error-90":"#F5D9D9","error-95":"#F9ECEC","error-100":"#FCF7F7","info-10":"#021824","info-20":"#032B3F","info-30":"#053D59","info-40":"#065478","info-50":"#176E9B","info-60":"#5296BE","info-70":"#82B5DA","info-80":"#ACCFE7","info-90":"#CCE3F1","info-95":"#E3F1F8","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000","primary-inverse":"#FEAB10"},ccube:{"brand-10":"#1F1221","brand-20":"#371F3B","brand-30":"#4E2C53","brand-40":"#6B3E73","brand-50":"#8D5197","brand-60":"#FF3399","brand-70":"#FF88C4","brand-80":"#FFB3D9","brand-90":"#FFD4E9","brand-95":"#FFE8F3","brand-100":"#FFD6EB","primary-10":"#1F1221","primary-20":"#371F3B","primary-30":"#4E2C53","primary-40":"#6B3E73","primary-50":"#8D5197","primary-60":"#B07DB7","primary-70":"#C7A3CC","primary-80":"#D9C2DD","primary-90":"#E9DBEB","primary-95":"#F3ECF4","primary-100":"#FAF7FA","secondary-10":"#2D091B","secondary-20":"#4D0F2E","secondary-30":"#6B1540","secondary-40":"#931D58","secondary-50":"#C02673","secondary-60":"#FF409F","secondary-70":"#FF88C4","secondary-80":"#FFB3D9","secondary-90":"#FFD4E9","secondary-95":"#FFE8F3","secondary-100":"#FFF8FC","neutral-10":"#161616","neutral-20":"#282828","neutral-30":"#393939","neutral-40":"#4E4E4E","neutral-50":"#686868","neutral-60":"#8E8E8E","neutral-70":"#AFAFB0","neutral-80":"#C7CACA","neutral-90":"#DDE1E2","neutral-95":"#EDEFEF","neutral-100":"#F9F9F9","success-10":"#081A0F","success-20":"#0E2D1B","success-30":"#154126","success-40":"#1C5A34","success-50":"#257645","success-60":"#44A068","success-70":"#64C189","success-80":"#80DCA5","success-90":"#B4ECCB","success-95":"#D5F6E2","success-100":"#EFFCF4","warning-10":"#221302","warning-20":"#3B2204","warning-30":"#543106","warning-40":"#744408","warning-50":"#98590C","warning-60":"#D07A13","warning-70":"#E4A244","warning-80":"#F5C26C","warning-90":"#FADBA6","warning-95":"#FCECD4","warning-100":"#FDF7F0","error-10":"#330505","error-20":"#550808","error-30":"#750C0C","error-40":"#9E130F","error-50":"#CB2213","error-60":"#DE6C6C","error-70":"#E89B9B","error-80":"#EFBEBE","error-90":"#F5D9D9","error-95":"#F9ECEC","error-100":"#FCF7F7","info-10":"#021824","info-20":"#032B3F","info-30":"#053D59","info-40":"#065478","info-50":"#176E9B","info-60":"#5296BE","info-70":"#82B5DA","info-80":"#ACCFE7","info-90":"#CCE3F1","info-95":"#E3F1F8","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000","primary-inverse":"#FEAB10"}},defaultValue:"lifesg"},Pr=e=>r=>{var t;const n=r.theme,a=Rr(Nr,null==n?void 0:n.colourScheme);return(null===(t=null==n?void 0:n.overrides)||void 0===t?void 0:t.primitiveColour)?Lr(a,e,n.overrides.primitiveColour):a[e]},Vr={"brand-10":Pr("brand-10"),"brand-20":Pr("brand-20"),"brand-30":Pr("brand-30"),"brand-40":Pr("brand-40"),"brand-50":Pr("brand-50"),"brand-60":Pr("brand-60"),"brand-70":Pr("brand-70"),"brand-80":Pr("brand-80"),"brand-90":Pr("brand-90"),"brand-95":Pr("brand-95"),"brand-100":Pr("brand-100"),"primary-10":Pr("primary-10"),"primary-20":Pr("primary-20"),"primary-30":Pr("primary-30"),"primary-40":Pr("primary-40"),"primary-50":Pr("primary-50"),"primary-60":Pr("primary-60"),"primary-70":Pr("primary-70"),"primary-80":Pr("primary-80"),"primary-90":Pr("primary-90"),"primary-95":Pr("primary-95"),"primary-100":Pr("primary-100"),"secondary-10":Pr("secondary-10"),"secondary-20":Pr("secondary-20"),"secondary-30":Pr("secondary-30"),"secondary-40":Pr("secondary-40"),"secondary-50":Pr("secondary-50"),"secondary-60":Pr("secondary-60"),"secondary-70":Pr("secondary-70"),"secondary-80":Pr("secondary-80"),"secondary-90":Pr("secondary-90"),"secondary-95":Pr("secondary-95"),"secondary-100":Pr("secondary-100"),"neutral-10":Pr("neutral-10"),"neutral-20":Pr("neutral-20"),"neutral-30":Pr("neutral-30"),"neutral-40":Pr("neutral-40"),"neutral-50":Pr("neutral-50"),"neutral-60":Pr("neutral-60"),"neutral-70":Pr("neutral-70"),"neutral-80":Pr("neutral-80"),"neutral-90":Pr("neutral-90"),"neutral-95":Pr("neutral-95"),"neutral-100":Pr("neutral-100"),"success-10":Pr("success-10"),"success-20":Pr("success-20"),"success-30":Pr("success-30"),"success-40":Pr("success-40"),"success-50":Pr("success-50"),"success-60":Pr("success-60"),"success-70":Pr("success-70"),"success-80":Pr("success-80"),"success-90":Pr("success-90"),"success-95":Pr("success-95"),"success-100":Pr("success-100"),"warning-10":Pr("warning-10"),"warning-20":Pr("warning-20"),"warning-30":Pr("warning-30"),"warning-40":Pr("warning-40"),"warning-50":Pr("warning-50"),"warning-60":Pr("warning-60"),"warning-70":Pr("warning-70"),"warning-80":Pr("warning-80"),"warning-90":Pr("warning-90"),"warning-95":Pr("warning-95"),"warning-100":Pr("warning-100"),"error-10":Pr("error-10"),"error-20":Pr("error-20"),"error-30":Pr("error-30"),"error-40":Pr("error-40"),"error-50":Pr("error-50"),"error-60":Pr("error-60"),"error-70":Pr("error-70"),"error-80":Pr("error-80"),"error-90":Pr("error-90"),"error-95":Pr("error-95"),"error-100":Pr("error-100"),"info-10":Pr("info-10"),"info-20":Pr("info-20"),"info-30":Pr("info-30"),"info-40":Pr("info-40"),"info-50":Pr("info-50"),"info-60":Pr("info-60"),"info-70":Pr("info-70"),"info-80":Pr("info-80"),"info-90":Pr("info-90"),"info-95":Pr("info-95"),"info-100":Pr("info-100"),white:Pr("white"),black:Pr("black"),"primary-inverse":Pr("primary-inverse")},Zr={text:Pr("neutral-20"),"text-subtle":Pr("neutral-30"),"text-subtler":Pr("neutral-50"),"text-subtlest":Pr("neutral-60"),"text-primary":Pr("primary-50"),"text-hover":Pr("primary-40"),"text-selected":Pr("primary-50"),"text-selected-hover":Pr("primary-40"),"text-disabled":Pr("neutral-50"),"text-disabled-subtle":Pr("neutral-60"),"text-disabled-subtlest":Pr("neutral-80"),"text-selected-disabled":Pr("neutral-20"),"text-success":Pr("success-40"),"text-warning":Pr("warning-40"),"text-error":Pr("error-40"),"text-info":Pr("info-40"),"text-inverse":Pr("white"),icon:Pr("neutral-50"),"icon-subtle":Pr("neutral-60"),"icon-strongest":Pr("neutral-20"),"icon-primary":Pr("primary-50"),"icon-primary-subtle":Pr("primary-60"),"icon-primary-subtlest":Pr("primary-70"),"icon-hover":Pr("primary-40"),"icon-selected":Pr("primary-50"),"icon-selected-hover":Pr("primary-40"),"icon-disabled":Pr("neutral-50"),"icon-disabled-subtle":Pr("neutral-60"),"icon-selected-disabled":Pr("neutral-60"),"icon-success":Pr("success-50"),"icon-warning":Pr("warning-60"),"icon-error":Pr("error-50"),"icon-error-strong":Pr("error-40"),"icon-info":Pr("info-50"),"icon-inverse":Pr("white"),"icon-primary-inverse":Pr("primary-inverse"),border:Pr("neutral-90"),"border-strong":Pr("neutral-70"),"border-stronger":Pr("neutral-50"),"border-primary":Pr("primary-50"),"border-primary-subtle":Pr("primary-60"),"border-hover":Pr("primary-90"),"border-hover-strong":Pr("primary-60"),"border-selected":Pr("primary-50"),"border-selected-subtle":Pr("primary-70"),"border-selected-subtlest":Pr("primary-90"),"border-selected-hover":Pr("primary-40"),"border-focus":Pr("primary-60"),"border-focus-strong":Pr("primary-50"),"border-disabled":Pr("neutral-90"),"border-selected-disabled":Pr("neutral-70"),"border-success":Pr("success-60"),"border-warning":Pr("warning-60"),"border-error":Pr("error-60"),"border-error-focus":Pr("error-60"),"border-error-focus-strong":Pr("error-40"),"border-error-strong":Pr("error-40"),"border-info":Pr("info-60"),bg:Pr("white"),"bg-strong":Pr("neutral-100"),"bg-stronger":Pr("neutral-95"),"bg-strongest":Pr("neutral-90"),"bg-hover":Pr("primary-95"),"bg-hover-strong":Pr("primary-90"),"bg-hover-subtle":Pr("primary-100"),"bg-hover-neutral":Pr("neutral-100"),"bg-hover-neutral-strong":Pr("neutral-90"),"bg-selected":Pr("primary-95"),"bg-selected-hover":Pr("primary-90"),"bg-selected-strong":Pr("primary-90"),"bg-selected-stronger":Pr("primary-70"),"bg-selected-strongest":Pr("primary-50"),"bg-selected-strongest-hover":Pr("primary-40"),"bg-disabled":Pr("neutral-95"),"bg-selected-disabled":Pr("neutral-95"),"bg-selected-stronger-disabled":Pr("neutral-70"),"bg-success":Pr("success-100"),"bg-success-hover":Pr("success-95"),"bg-success-strong":Pr("success-50"),"bg-success-strong-hover":Pr("success-40"),"bg-warning":Pr("warning-100"),"bg-warning-hover":Pr("warning-95"),"bg-warning-strong":Pr("warning-50"),"bg-warning-strong-hover":Pr("warning-40"),"bg-info":Pr("info-100"),"bg-info-hover":Pr("info-95"),"bg-info-strong":Pr("info-50"),"bg-info-strong-hover":Pr("info-40"),"bg-error":Pr("error-100"),"bg-error-hover":Pr("error-95"),"bg-error-strong":Pr("error-50"),"bg-error-strong-hover":Pr("error-40"),"bg-inverse":Pr("neutral-20"),"bg-inverse-subtle":Pr("neutral-30"),"bg-inverse-subtler":Pr("neutral-50"),"bg-inverse-subtlest":Pr("neutral-60"),"bg-inverse-hover":Pr("neutral-40"),"bg-primary":Pr("primary-50"),"bg-primary-subtle":Pr("primary-60"),"bg-primary-subtler":Pr("primary-95"),"bg-primary-subtlest":Pr("primary-100"),"bg-available":"#6DD0A1","bg-primary-hover":Pr("primary-40"),"bg-primary-subtlest-hover":Pr("primary-90"),"bg-primary-subtlest-selected":Pr("primary-90"),"overlay-strong":"rgba(40, 40, 40, 0.85)","overlay-subtle":"rgba(40, 40, 40, 0.20)",hyperlink:Pr("primary-50"),"hyperlink-hover":Pr("primary-40"),"hyperlink-visited":Pr("primary-40"),"hyperlink-inverse":Pr("primary-inverse"),"focus-ring":Pr("black"),"focus-ring-inverse":Pr("white")},Ur={collections:{lifesg:Zr,bookingsg:Zr,rbs:Zr,mylegacy:Zr,ccube:Zr},defaultValue:"lifesg"},Jr=e=>r=>{var t;const n=r.theme,a=Rr(Ur,null==n?void 0:n.colourScheme),i=(null===(t=null==n?void 0:n.overrides)||void 0===t?void 0:t.semanticColour)?Lr(a,e,n.overrides.semanticColour):a[e];return"function"==typeof i?i(r):i},Xr={text:Jr("text"),"text-subtle":Jr("text-subtle"),"text-subtler":Jr("text-subtler"),"text-subtlest":Jr("text-subtlest"),"text-primary":Jr("text-primary"),"text-hover":Jr("text-hover"),"text-selected":Jr("text-selected"),"text-selected-hover":Jr("text-selected-hover"),"text-disabled":Jr("text-disabled"),"text-disabled-subtle":Jr("text-disabled-subtle"),"text-disabled-subtlest":Jr("text-disabled-subtlest"),"text-selected-disabled":Jr("text-selected-disabled"),"text-success":Jr("text-success"),"text-warning":Jr("text-warning"),"text-error":Jr("text-error"),"text-info":Jr("text-info"),"text-inverse":Jr("text-inverse"),icon:Jr("icon"),"icon-subtle":Jr("icon-subtle"),"icon-strongest":Jr("icon-strongest"),"icon-primary":Jr("icon-primary"),"icon-primary-subtle":Jr("icon-primary-subtle"),"icon-primary-subtlest":Jr("icon-primary-subtlest"),"icon-hover":Jr("icon-hover"),"icon-selected":Jr("icon-selected"),"icon-selected-hover":Jr("icon-selected-hover"),"icon-disabled":Jr("icon-disabled"),"icon-disabled-subtle":Jr("icon-disabled-subtle"),"icon-selected-disabled":Jr("icon-selected-disabled"),"icon-success":Jr("icon-success"),"icon-warning":Jr("icon-warning"),"icon-error":Jr("icon-error"),"icon-error-strong":Jr("icon-error-strong"),"icon-info":Jr("icon-info"),"icon-inverse":Jr("icon-inverse"),"icon-primary-inverse":Jr("icon-primary-inverse"),border:Jr("border"),"border-strong":Jr("border-strong"),"border-stronger":Jr("border-stronger"),"border-primary":Jr("border-primary"),"border-primary-subtle":Jr("border-primary-subtle"),"border-hover":Jr("border-hover"),"border-hover-strong":Jr("border-hover-strong"),"border-selected":Jr("border-selected"),"border-selected-subtle":Jr("border-selected-subtle"),"border-selected-subtlest":Jr("border-selected-subtlest"),"border-selected-hover":Jr("border-selected-hover"),"border-focus":Jr("border-focus"),"border-focus-strong":Jr("border-focus-strong"),"border-disabled":Jr("border-disabled"),"border-selected-disabled":Jr("border-selected-disabled"),"border-success":Jr("border-success"),"border-warning":Jr("border-warning"),"border-error":Jr("border-error"),"border-error-focus":Jr("border-error-focus"),"border-error-focus-strong":Jr("border-error-focus-strong"),"border-error-strong":Jr("border-error-strong"),"border-info":Jr("border-info"),bg:Jr("bg"),"bg-strong":Jr("bg-strong"),"bg-stronger":Jr("bg-stronger"),"bg-strongest":Jr("bg-strongest"),"bg-hover":Jr("bg-hover"),"bg-hover-strong":Jr("bg-hover-strong"),"bg-hover-subtle":Jr("bg-hover-subtle"),"bg-hover-neutral":Jr("bg-hover-neutral"),"bg-hover-neutral-strong":Jr("bg-hover-neutral-strong"),"bg-selected":Jr("bg-selected"),"bg-selected-hover":Jr("bg-selected-hover"),"bg-selected-strong":Jr("bg-selected-strong"),"bg-selected-stronger":Jr("bg-selected-stronger"),"bg-selected-strongest":Jr("bg-selected-strongest"),"bg-selected-strongest-hover":Jr("bg-selected-strongest-hover"),"bg-disabled":Jr("bg-disabled"),"bg-selected-disabled":Jr("bg-selected-disabled"),"bg-selected-stronger-disabled":Jr("bg-selected-stronger-disabled"),"bg-success":Jr("bg-success"),"bg-success-hover":Jr("bg-success-hover"),"bg-success-strong":Jr("bg-success-strong"),"bg-success-strong-hover":Jr("bg-success-strong-hover"),"bg-warning":Jr("bg-warning"),"bg-warning-hover":Jr("bg-warning-hover"),"bg-warning-strong":Jr("bg-warning-strong"),"bg-warning-strong-hover":Jr("bg-warning-strong-hover"),"bg-info":Jr("bg-info"),"bg-info-hover":Jr("bg-info-hover"),"bg-info-strong":Jr("bg-info-strong"),"bg-info-strong-hover":Jr("bg-info-strong-hover"),"bg-error":Jr("bg-error"),"bg-error-hover":Jr("bg-error-hover"),"bg-error-strong":Jr("bg-error-strong"),"bg-error-strong-hover":Jr("bg-error-strong-hover"),"bg-inverse":Jr("bg-inverse"),"bg-inverse-subtle":Jr("bg-inverse-subtle"),"bg-inverse-subtler":Jr("bg-inverse-subtler"),"bg-inverse-subtlest":Jr("bg-inverse-subtlest"),"bg-inverse-hover":Jr("bg-inverse-hover"),"bg-primary":Jr("bg-primary"),"bg-primary-subtle":Jr("bg-primary-subtle"),"bg-primary-subtler":Jr("bg-primary-subtler"),"bg-primary-subtlest":Jr("bg-primary-subtlest"),"bg-available":Jr("bg-available"),"bg-primary-hover":Jr("bg-primary-hover"),"bg-primary-subtlest-hover":Jr("bg-primary-subtlest-hover"),"bg-primary-subtlest-selected":Jr("bg-primary-subtlest-selected"),"overlay-strong":Jr("overlay-strong"),"overlay-subtle":Jr("overlay-subtle"),hyperlink:Jr("hyperlink"),"hyperlink-hover":Jr("hyperlink-hover"),"hyperlink-visited":Jr("hyperlink-visited"),"hyperlink-inverse":Jr("hyperlink-inverse"),"focus-ring":Jr("focus-ring"),"focus-ring-inverse":Jr("focus-ring-inverse")},qr={collections:{lifesg:{"width-010":1,"width-020":2,"width-040":4,solid:"solid","dashed-default":e=>r=>{var t,n,a;const{thickness:i,radius:s,colour:o}=e||{},l=null!==(t="function"==typeof i?i(r):i)&&void 0!==t?t:Kr["width-010"](r),d=null!==(n="function"==typeof s?s(r):s)&&void 0!==n?n:0,u=null!==(a="function"==typeof o?o(r):o)&&void 0!==a?a:Xr.border(r),h=encodeURIComponent(`<svg width='100%' height='100%' xmlns='http://www.w3.org/2000/svg'><rect width='100%' height='100%' fill='none' rx='${d}' ry='${d}' stroke='${u}' stroke-width='${l}' stroke-dasharray='4, 8' stroke-dashoffset='0' stroke-linecap='square'/></svg>`);return c`
            background-image: url("data:image/svg+xml,${h}");
            border-radius: ${d};
        `}}},defaultValue:"lifesg"},Gr=e=>r=>{var t;const n=r.theme,a=Rr(qr,null==n?void 0:n.borderScheme);return(null===(t=null==n?void 0:n.overrides)||void 0===t?void 0:t.border)?`${Lr(a,e,n.overrides.border)}px`:`${a[e]}px`},Qr=e=>1===e.length&&"theme"in e[0],Kr={"width-010":Gr("width-010"),"width-020":Gr("width-020"),"width-040":Gr("width-040"),solid:(et="solid",e=>{var r;const t=e.theme,n=Rr(qr,null==t?void 0:t.borderScheme),a=(null===(r=null==t?void 0:t.overrides)||void 0===r?void 0:r.border)?Lr(n,et,t.overrides.border):n[et];return"function"==typeof a?a(e):a}),"dashed-default":(e=>(...r)=>t=>{var n;const a=Qr(r)?[]:r,i=Qr(r)?r[0]:t,s=i.theme,o=Rr(qr,null==s?void 0:s.borderScheme);return((null===(n=null==s?void 0:s.overrides)||void 0===n?void 0:n.border)?Lr(o,e,s.overrides.border):o[e])(...a)(i)})("dashed-default")};var et;const rt={collections:{lifesg:{"xxs-min":0,"xxs-max":320,"xs-min":321,"xs-max":375,"sm-min":376,"sm-max":420,"md-min":421,"md-max":767,"lg-min":768,"lg-max":1023,"xl-min":1024,"xl-max":1440,"xxl-min":1441,"xxs-column":8,"xs-column":8,"sm-column":8,"md-column":8,"lg-column":12,"xl-column":12,"xxl-column":12,"xxs-gutter":16,"xs-gutter":16,"sm-gutter":16,"md-gutter":16,"lg-gutter":32,"xl-gutter":32,"xxl-gutter":32,"xxs-margin":24,"xs-margin":24,"sm-margin":24,"md-margin":24,"lg-margin":48,"xl-margin":48,"xxl-margin":48}},defaultValue:"lifesg"},tt=e=>r=>{var t;const n=r.theme,a=Rr(rt,null==n?void 0:n.breakpointScheme);let i;return i=(null===(t=null==n?void 0:n.overrides)||void 0===t?void 0:t.breakpoint)?Lr(a,e,n.overrides.breakpoint):a[e],i},nt={"xxs-min":tt("xxs-min"),"xxs-max":tt("xxs-max"),"xs-min":tt("xs-min"),"xs-max":tt("xs-max"),"sm-min":tt("sm-min"),"sm-max":tt("sm-max"),"md-min":tt("md-min"),"md-max":tt("md-max"),"lg-min":tt("lg-min"),"lg-max":tt("lg-max"),"xl-min":tt("xl-min"),"xl-max":tt("xl-max"),"xxl-min":tt("xxl-min"),"xxs-column":tt("xxs-column"),"xs-column":tt("xs-column"),"sm-column":tt("sm-column"),"md-column":tt("md-column"),"lg-column":tt("lg-column"),"xl-column":tt("xl-column"),"xxl-column":tt("xxl-column"),"xxs-gutter":tt("xxs-gutter"),"xs-gutter":tt("xs-gutter"),"sm-gutter":tt("sm-gutter"),"md-gutter":tt("md-gutter"),"lg-gutter":tt("lg-gutter"),"xl-gutter":tt("xl-gutter"),"xxl-gutter":tt("xxl-gutter"),"xxs-margin":tt("xxs-margin"),"xs-margin":tt("xs-margin"),"sm-margin":tt("sm-margin"),"md-margin":tt("md-margin"),"lg-margin":tt("lg-margin"),"xl-margin":tt("xl-margin"),"xxl-margin":tt("xxl-margin")},at=e=>("max-width"===e?["xxs","xs","sm","md","lg","xl"]:["xxs","xs","sm","md","lg","xl","xxl"]).reduce(((r,t)=>(r[t]=((e,r)=>{const t=nt["max-width"===e?`${r}-max`:`${r}-min`];return r=>{const n=t(r);return`@media screen and (${e}: ${n}px)`}})(e,t),r)),{}),it={MaxWidth:at("max-width"),MinWidth:at("min-width")},st={"header-size-xxl":"3rem","header-size-xl":"2.5rem","header-size-lg":"2rem","header-size-md":"1.625rem","header-size-sm":"1.375rem","header-size-xs":"1.125rem","header-lh-xxl":"3.5rem","header-lh-xl":"3rem","header-lh-lg":"2.5rem","header-lh-md":"2.25rem","header-lh-sm":"1.75rem","header-lh-xs":"1.625rem","header-ls-xxl":"-0.056rem","header-ls-xl":"-0.032rem","header-ls-lg":"-0.032rem","header-ls-md":"0rem","header-ls-sm":"0rem","header-ls-xs":"0rem","weight-light":"300","weight-regular":"400","weight-semibold":"600","weight-bold":"700","font-family":"Open Sans","body-size-baseline":"1.125rem","body-size-md":"1rem","body-size-sm":"0.875rem","body-size-xs":"0.75rem","body-lh-baseline":"1.625rem","body-lh-md":"1.5rem","body-lh-sm":"1.625rem","body-lh-xs":"1.25rem","body-ls-baseline":"0rem","body-ls-md":"0.014rem","body-ls-sm":"0.012rem","body-ls-xs":"0.012rem","formlabel-size-baseline":"1rem","formlabel-size-lg":"1.125rem","formlabel-lh-baseline":"1.5rem","formlabel-lh-lg":"1.625rem","formlabel-ls-baseline":"0.014rem","formlabel-ls-lg":"0rem"},ot={collections:{lifesg:st,bookingsg:{"header-size-xxl":"3rem","header-size-xl":"2.5rem","header-size-lg":"2rem","header-size-md":"1.625rem","header-size-sm":"1.375rem","header-size-xs":"1.125rem","header-lh-xxl":"3.5rem","header-lh-xl":"3rem","header-lh-lg":"2.5rem","header-lh-md":"2.25rem","header-lh-sm":"1.75rem","header-lh-xs":"1.75rem","header-ls-xxl":"-0.056rem","header-ls-xl":"-0.032rem","header-ls-lg":"-0.032rem","header-ls-md":"0rem","header-ls-sm":"0rem","header-ls-xs":"0rem","weight-light":"300","weight-regular":"400","weight-semibold":"600","weight-bold":"700","font-family":"Plus Jakarta Sans","body-size-baseline":"1.125rem","body-size-md":"1rem","body-size-sm":"0.875rem","body-size-xs":"0.75rem","body-lh-baseline":"1.75rem","body-lh-md":"1.5rem","body-lh-sm":"1.6rem","body-lh-xs":"1.2rem","body-ls-baseline":"0rem","body-ls-md":"0.014rem","body-ls-sm":"0.012rem","body-ls-xs":"0.012rem","formlabel-size-baseline":"1rem","formlabel-size-lg":"1.125rem","formlabel-lh-baseline":"1.5rem","formlabel-lh-lg":"1.75rem","formlabel-ls-baseline":"0.014rem","formlabel-ls-lg":"0rem"},rbs:st,mylegacy:st,ccube:st},defaultValue:"lifesg"},lt=e=>r=>{var t;const n=r.theme,a=Rr(ot,null==n?void 0:n.fontScheme);return(null===(t=null==n?void 0:n.overrides)||void 0===t?void 0:t.fontSpec)?Lr(a,e,n.overrides.fontSpec):a[e]},dt={"header-size-xxl":lt("header-size-xxl"),"header-size-xl":lt("header-size-xl"),"header-size-lg":lt("header-size-lg"),"header-size-md":lt("header-size-md"),"header-size-sm":lt("header-size-sm"),"header-size-xs":lt("header-size-xs"),"header-lh-xxl":lt("header-lh-xxl"),"header-lh-xl":lt("header-lh-xl"),"header-lh-lg":lt("header-lh-lg"),"header-lh-md":lt("header-lh-md"),"header-lh-sm":lt("header-lh-sm"),"header-lh-xs":lt("header-lh-xs"),"header-ls-xxl":lt("header-ls-xxl"),"header-ls-xl":lt("header-ls-xl"),"header-ls-lg":lt("header-ls-lg"),"header-ls-md":lt("header-ls-md"),"header-ls-sm":lt("header-ls-sm"),"header-ls-xs":lt("header-ls-xs"),"weight-light":lt("weight-light"),"weight-regular":lt("weight-regular"),"weight-semibold":lt("weight-semibold"),"weight-bold":lt("weight-bold"),"font-family":lt("font-family"),"body-size-baseline":lt("body-size-baseline"),"body-size-md":lt("body-size-md"),"body-size-sm":lt("body-size-sm"),"body-size-xs":lt("body-size-xs"),"body-lh-baseline":lt("body-lh-baseline"),"body-lh-md":lt("body-lh-md"),"body-lh-sm":lt("body-lh-sm"),"body-lh-xs":lt("body-lh-xs"),"body-ls-baseline":lt("body-ls-baseline"),"body-ls-md":lt("body-ls-md"),"body-ls-sm":lt("body-ls-sm"),"body-ls-xs":lt("body-ls-xs"),"formlabel-size-baseline":lt("formlabel-size-baseline"),"formlabel-size-lg":lt("formlabel-size-lg"),"formlabel-lh-baseline":lt("formlabel-lh-baseline"),"formlabel-lh-lg":lt("formlabel-lh-lg"),"formlabel-ls-baseline":lt("formlabel-ls-baseline"),"formlabel-ls-lg":lt("formlabel-ls-lg")},ct={collections:{lifesg:{none:0,xs:2,sm:4,md:8,lg:12,full:9999}},defaultValue:"lifesg"},ut=e=>r=>{var t;const n=r.theme,a=Rr(ct,null==n?void 0:n.radiusScheme);return(null===(t=null==n?void 0:n.overrides)||void 0===t?void 0:t.radius)?`${Lr(a,e,n.overrides.radius)}px`:`${a[e]}px`},ht={none:ut("none"),xs:ut("xs"),sm:ut("sm"),md:ut("md"),lg:ut("lg"),full:ut("full")},bt={collections:{lifesg:{"spacing-0":0,"spacing-4":4,"spacing-8":8,"spacing-12":12,"spacing-16":16,"spacing-20":20,"spacing-24":24,"spacing-32":32,"spacing-40":40,"spacing-48":48,"spacing-64":64,"spacing-72":72,"layout-xs":8,"layout-sm":16,"layout-md":24,"layout-lg":32,"layout-xl":48,"layout-xxl":64,"layout-xxxl":128}},defaultValue:"lifesg"},gt=e=>r=>{var t;const n=r.theme,a=Rr(bt,null==n?void 0:n.spacingScheme);return(null===(t=null==n?void 0:n.overrides)||void 0===t?void 0:t.spacing)?`${Lr(a,e,n.overrides.spacing)}px`:`${a[e]}px`},mt={"spacing-0":gt("spacing-0"),"spacing-4":gt("spacing-4"),"spacing-8":gt("spacing-8"),"spacing-12":gt("spacing-12"),"spacing-16":gt("spacing-16"),"spacing-20":gt("spacing-20"),"spacing-24":gt("spacing-24"),"spacing-32":gt("spacing-32"),"spacing-40":gt("spacing-40"),"spacing-48":gt("spacing-48"),"spacing-64":gt("spacing-64"),"spacing-72":gt("spacing-72"),"layout-xs":gt("layout-xs"),"layout-sm":gt("layout-sm"),"layout-md":gt("layout-md"),"layout-lg":gt("layout-lg"),"layout-xl":gt("layout-xl"),"layout-xxl":gt("layout-xxl"),"layout-xxxl":gt("layout-xxxl")},yt=(e,r,t,n)=>c`
    font-family: ${lt("font-family")};
    font-size: ${lt(e)};
    font-weight: ${lt(r)};
    line-height: ${lt(t)};
    letter-spacing: ${lt(n)};
`,ft={"header-xxl-light":yt("header-size-xxl","weight-light","header-lh-xxl","header-ls-xxl"),"header-xxl-regular":yt("header-size-xxl","weight-regular","header-lh-xxl","header-ls-xxl"),"header-xxl-semibold":yt("header-size-xxl","weight-semibold","header-lh-xxl","header-ls-xxl"),"header-xxl-bold":yt("header-size-xxl","weight-bold","header-lh-xxl","header-ls-xxl"),"header-xl-light":yt("header-size-xl","weight-light","header-lh-xl","header-ls-xl"),"header-xl-regular":yt("header-size-xl","weight-regular","header-lh-xl","header-ls-xl"),"header-xl-semibold":yt("header-size-xl","weight-semibold","header-lh-xl","header-ls-xl"),"header-xl-bold":yt("header-size-xl","weight-bold","header-lh-xl","header-ls-xl"),"header-lg-light":yt("header-size-lg","weight-light","header-lh-lg","header-ls-lg"),"header-lg-regular":yt("header-size-lg","weight-regular","header-lh-lg","header-ls-lg"),"header-lg-semibold":yt("header-size-lg","weight-semibold","header-lh-lg","header-ls-lg"),"header-lg-bold":yt("header-size-lg","weight-bold","header-lh-lg","header-ls-lg"),"header-md-light":yt("header-size-md","weight-light","header-lh-md","header-ls-md"),"header-md-regular":yt("header-size-md","weight-regular","header-lh-md","header-ls-md"),"header-md-semibold":yt("header-size-md","weight-semibold","header-lh-md","header-ls-md"),"header-md-bold":yt("header-size-md","weight-bold","header-lh-md","header-ls-md"),"header-sm-light":yt("header-size-sm","weight-light","header-lh-sm","header-ls-sm"),"header-sm-regular":yt("header-size-sm","weight-regular","header-lh-sm","header-ls-sm"),"header-sm-semibold":yt("header-size-sm","weight-semibold","header-lh-sm","header-ls-sm"),"header-sm-bold":yt("header-size-sm","weight-bold","header-lh-sm","header-ls-sm"),"header-xs-light":yt("header-size-xs","weight-light","header-lh-xs","header-ls-xs"),"header-xs-regular":yt("header-size-xs","weight-regular","header-lh-xs","header-ls-xs"),"header-xs-semibold":yt("header-size-xs","weight-semibold","header-lh-xs","header-ls-xs"),"header-xs-bold":yt("header-size-xs","weight-bold","header-lh-xs","header-ls-xs"),"body-baseline-light":yt("body-size-baseline","weight-light","body-lh-baseline","body-ls-baseline"),"body-baseline-regular":yt("body-size-baseline","weight-regular","body-lh-baseline","body-ls-baseline"),"body-baseline-semibold":yt("body-size-baseline","weight-semibold","body-lh-baseline","body-ls-baseline"),"body-baseline-bold":yt("body-size-baseline","weight-bold","body-lh-baseline","body-ls-baseline"),"body-md-light":yt("body-size-md","weight-light","body-lh-md","body-ls-md"),"body-md-regular":yt("body-size-md","weight-regular","body-lh-md","body-ls-md"),"body-md-semibold":yt("body-size-md","weight-semibold","body-lh-md","body-ls-md"),"body-md-bold":yt("body-size-md","weight-bold","body-lh-md","body-ls-md"),"body-sm-light":yt("body-size-sm","weight-light","body-lh-sm","body-ls-sm"),"body-sm-regular":yt("body-size-sm","weight-regular","body-lh-sm","body-ls-sm"),"body-sm-semibold":yt("body-size-sm","weight-semibold","body-lh-sm","body-ls-sm"),"body-sm-bold":yt("body-size-sm","weight-bold","body-lh-sm","body-ls-sm"),"body-xs-light":yt("body-size-xs","weight-light","body-lh-xs","body-ls-xs"),"body-xs-regular":yt("body-size-xs","weight-regular","body-lh-xs","body-ls-xs"),"body-xs-semibold":yt("body-size-xs","weight-semibold","body-lh-xs","body-ls-xs"),"body-xs-bold":yt("body-size-xs","weight-bold","body-lh-xs","body-ls-xs"),"formlabel-baseline-semibold":yt("formlabel-size-baseline","weight-semibold","formlabel-lh-baseline","formlabel-ls-baseline"),"formlabel-lg-semibold":yt("formlabel-size-lg","weight-semibold","formlabel-lh-lg","formlabel-ls-lg")},pt={collections:{lifesg:ft,bookingsg:ft,rbs:ft,mylegacy:ft,ccube:ft},defaultValue:"lifesg"},vt=e=>r=>{var t;const n=r.theme,a=Rr(pt,null==n?void 0:n.fontScheme),i=(null===(t=null==n?void 0:n.overrides)||void 0===t?void 0:t.font)?Lr(a,e,n.overrides.font):a[e];return"function"==typeof i?i(r):i},xt={"header-xxl-light":vt("header-xxl-light"),"header-xxl-regular":vt("header-xxl-regular"),"header-xxl-semibold":vt("header-xxl-semibold"),"header-xxl-bold":vt("header-xxl-bold"),"header-xl-light":vt("header-xl-light"),"header-xl-regular":vt("header-xl-regular"),"header-xl-semibold":vt("header-xl-semibold"),"header-xl-bold":vt("header-xl-bold"),"header-lg-light":vt("header-lg-light"),"header-lg-regular":vt("header-lg-regular"),"header-lg-semibold":vt("header-lg-semibold"),"header-lg-bold":vt("header-lg-bold"),"header-md-light":vt("header-md-light"),"header-md-regular":vt("header-md-regular"),"header-md-semibold":vt("header-md-semibold"),"header-md-bold":vt("header-md-bold"),"header-sm-light":vt("header-sm-light"),"header-sm-regular":vt("header-sm-regular"),"header-sm-semibold":vt("header-sm-semibold"),"header-sm-bold":vt("header-sm-bold"),"header-xs-light":vt("header-xs-light"),"header-xs-regular":vt("header-xs-regular"),"header-xs-semibold":vt("header-xs-semibold"),"header-xs-bold":vt("header-xs-bold"),"body-baseline-light":vt("body-baseline-light"),"body-baseline-regular":vt("body-baseline-regular"),"body-baseline-semibold":vt("body-baseline-semibold"),"body-baseline-bold":vt("body-baseline-bold"),"body-md-light":vt("body-md-light"),"body-md-regular":vt("body-md-regular"),"body-md-semibold":vt("body-md-semibold"),"body-md-bold":vt("body-md-bold"),"body-sm-light":vt("body-sm-light"),"body-sm-regular":vt("body-sm-regular"),"body-sm-semibold":vt("body-sm-semibold"),"body-sm-bold":vt("body-sm-bold"),"body-xs-light":vt("body-xs-light"),"body-xs-regular":vt("body-xs-regular"),"body-xs-semibold":vt("body-xs-semibold"),"body-xs-bold":vt("body-xs-bold"),"formlabel-baseline-semibold":vt("formlabel-baseline-semibold"),"formlabel-lg-semibold":vt("formlabel-lg-semibold")},Dt=Object.assign(Object.assign({},Xr),{Primitive:Vr}),wt=Object.assign(Object.assign({},xt),{Spec:dt}),Ft=Ir,$t=Kr,Et=mt,Ct=ht,St=it,Bt=d.div`
    --vertical-inset: ${Et["spacing-24"]};
    --horizontal-inset: ${Et["spacing-20"]};
    --header-bottom-spacing: ${Et["spacing-4"]};

    border: ${$t["width-010"]} ${$t.solid} ${Dt.border};
    border-radius: ${Ct.sm};
    overflow: hidden;

    width: ${e=>e.$width}px;
    max-width: 41rem;
    min-width: 21rem;

    ${St.MaxWidth.sm} {
        min-width: 17.5rem;
    }
`;var At={exports:{}};At.exports=function(){var e=1e3,r=6e4,t=36e5,n="millisecond",a="second",i="minute",s="hour",o="day",l="week",d="month",c="quarter",u="year",h="date",b="Invalid Date",g=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,m=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,y={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(e){var r=["th","st","nd","rd"],t=e%100;return"["+e+(r[(t-20)%10]||r[t]||r[0])+"]"}},f=function(e,r,t){var n=String(e);return!n||n.length>=r?e:""+Array(r+1-n.length).join(t)+e},p={s:f,z:function(e){var r=-e.utcOffset(),t=Math.abs(r),n=Math.floor(t/60),a=t%60;return(r<=0?"+":"-")+f(n,2,"0")+":"+f(a,2,"0")},m:function e(r,t){if(r.date()<t.date())return-e(t,r);var n=12*(t.year()-r.year())+(t.month()-r.month()),a=r.clone().add(n,d),i=t-a<0,s=r.clone().add(n+(i?-1:1),d);return+(-(n+(t-a)/(i?a-s:s-a))||0)},a:function(e){return e<0?Math.ceil(e)||0:Math.floor(e)},p:function(e){return{M:d,y:u,w:l,d:o,D:h,h:s,m:i,s:a,ms:n,Q:c}[e]||String(e||"").toLowerCase().replace(/s$/,"")},u:function(e){return void 0===e}},v="en",x={};x[v]=y;var D="$isDayjsObject",w=function(e){return e instanceof C||!(!e||!e[D])},F=function e(r,t,n){var a;if(!r)return v;if("string"==typeof r){var i=r.toLowerCase();x[i]&&(a=i),t&&(x[i]=t,a=i);var s=r.split("-");if(!a&&s.length>1)return e(s[0])}else{var o=r.name;x[o]=r,a=o}return!n&&a&&(v=a),a||!n&&v},$=function(e,r){if(w(e))return e.clone();var t="object"==typeof r?r:{};return t.date=e,t.args=arguments,new C(t)},E=p;E.l=F,E.i=w,E.w=function(e,r){return $(e,{locale:r.$L,utc:r.$u,x:r.$x,$offset:r.$offset})};var C=function(){function y(e){this.$L=F(e.locale,null,!0),this.parse(e),this.$x=this.$x||e.x||{},this[D]=!0}var f=y.prototype;return f.parse=function(e){this.$d=function(e){var r=e.date,t=e.utc;if(null===r)return new Date(NaN);if(E.u(r))return new Date;if(r instanceof Date)return new Date(r);if("string"==typeof r&&!/Z$/i.test(r)){var n=r.match(g);if(n){var a=n[2]-1||0,i=(n[7]||"0").substring(0,3);return t?new Date(Date.UTC(n[1],a,n[3]||1,n[4]||0,n[5]||0,n[6]||0,i)):new Date(n[1],a,n[3]||1,n[4]||0,n[5]||0,n[6]||0,i)}}return new Date(r)}(e),this.init()},f.init=function(){var e=this.$d;this.$y=e.getFullYear(),this.$M=e.getMonth(),this.$D=e.getDate(),this.$W=e.getDay(),this.$H=e.getHours(),this.$m=e.getMinutes(),this.$s=e.getSeconds(),this.$ms=e.getMilliseconds()},f.$utils=function(){return E},f.isValid=function(){return!(this.$d.toString()===b)},f.isSame=function(e,r){var t=$(e);return this.startOf(r)<=t&&t<=this.endOf(r)},f.isAfter=function(e,r){return $(e)<this.startOf(r)},f.isBefore=function(e,r){return this.endOf(r)<$(e)},f.$g=function(e,r,t){return E.u(e)?this[r]:this.set(t,e)},f.unix=function(){return Math.floor(this.valueOf()/1e3)},f.valueOf=function(){return this.$d.getTime()},f.startOf=function(e,r){var t=this,n=!!E.u(r)||r,c=E.p(e),b=function(e,r){var a=E.w(t.$u?Date.UTC(t.$y,r,e):new Date(t.$y,r,e),t);return n?a:a.endOf(o)},g=function(e,r){return E.w(t.toDate()[e].apply(t.toDate("s"),(n?[0,0,0,0]:[23,59,59,999]).slice(r)),t)},m=this.$W,y=this.$M,f=this.$D,p="set"+(this.$u?"UTC":"");switch(c){case u:return n?b(1,0):b(31,11);case d:return n?b(1,y):b(0,y+1);case l:var v=this.$locale().weekStart||0,x=(m<v?m+7:m)-v;return b(n?f-x:f+(6-x),y);case o:case h:return g(p+"Hours",0);case s:return g(p+"Minutes",1);case i:return g(p+"Seconds",2);case a:return g(p+"Milliseconds",3);default:return this.clone()}},f.endOf=function(e){return this.startOf(e,!1)},f.$set=function(e,r){var t,l=E.p(e),c="set"+(this.$u?"UTC":""),b=(t={},t[o]=c+"Date",t[h]=c+"Date",t[d]=c+"Month",t[u]=c+"FullYear",t[s]=c+"Hours",t[i]=c+"Minutes",t[a]=c+"Seconds",t[n]=c+"Milliseconds",t)[l],g=l===o?this.$D+(r-this.$W):r;if(l===d||l===u){var m=this.clone().set(h,1);m.$d[b](g),m.init(),this.$d=m.set(h,Math.min(this.$D,m.daysInMonth())).$d}else b&&this.$d[b](g);return this.init(),this},f.set=function(e,r){return this.clone().$set(e,r)},f.get=function(e){return this[E.p(e)]()},f.add=function(n,c){var h,b=this;n=Number(n);var g=E.p(c),m=function(e){var r=$(b);return E.w(r.date(r.date()+Math.round(e*n)),b)};if(g===d)return this.set(d,this.$M+n);if(g===u)return this.set(u,this.$y+n);if(g===o)return m(1);if(g===l)return m(7);var y=(h={},h[i]=r,h[s]=t,h[a]=e,h)[g]||1,f=this.$d.getTime()+n*y;return E.w(f,this)},f.subtract=function(e,r){return this.add(-1*e,r)},f.format=function(e){var r=this,t=this.$locale();if(!this.isValid())return t.invalidDate||b;var n=e||"YYYY-MM-DDTHH:mm:ssZ",a=E.z(this),i=this.$H,s=this.$m,o=this.$M,l=t.weekdays,d=t.months,c=t.meridiem,u=function(e,t,a,i){return e&&(e[t]||e(r,n))||a[t].slice(0,i)},h=function(e){return E.s(i%12||12,e,"0")},g=c||function(e,r,t){var n=e<12?"AM":"PM";return t?n.toLowerCase():n};return n.replace(m,(function(e,n){return n||function(e){switch(e){case"YY":return String(r.$y).slice(-2);case"YYYY":return E.s(r.$y,4,"0");case"M":return o+1;case"MM":return E.s(o+1,2,"0");case"MMM":return u(t.monthsShort,o,d,3);case"MMMM":return u(d,o);case"D":return r.$D;case"DD":return E.s(r.$D,2,"0");case"d":return String(r.$W);case"dd":return u(t.weekdaysMin,r.$W,l,2);case"ddd":return u(t.weekdaysShort,r.$W,l,3);case"dddd":return l[r.$W];case"H":return String(i);case"HH":return E.s(i,2,"0");case"h":return h(1);case"hh":return h(2);case"a":return g(i,s,!0);case"A":return g(i,s,!1);case"m":return String(s);case"mm":return E.s(s,2,"0");case"s":return String(r.$s);case"ss":return E.s(r.$s,2,"0");case"SSS":return E.s(r.$ms,3,"0");case"Z":return a}return null}(e)||a.replace(":","")}))},f.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},f.diff=function(n,h,b){var g,m=this,y=E.p(h),f=$(n),p=(f.utcOffset()-this.utcOffset())*r,v=this-f,x=function(){return E.m(m,f)};switch(y){case u:g=x()/12;break;case d:g=x();break;case c:g=x()/3;break;case l:g=(v-p)/6048e5;break;case o:g=(v-p)/864e5;break;case s:g=v/t;break;case i:g=v/r;break;case a:g=v/e;break;default:g=v}return b?g:E.a(g)},f.daysInMonth=function(){return this.endOf(d).$D},f.$locale=function(){return x[this.$L]},f.locale=function(e,r){if(!e)return this.$L;var t=this.clone(),n=F(e,r,!0);return n&&(t.$L=n),t},f.clone=function(){return E.w(this.$d,this)},f.toDate=function(){return new Date(this.valueOf())},f.toJSON=function(){return this.isValid()?this.toISOString():null},f.toISOString=function(){return this.$d.toISOString()},f.toString=function(){return this.$d.toUTCString()},y}(),S=C.prototype;return $.prototype=S,[["$ms",n],["$s",a],["$m",i],["$H",s],["$W",o],["$M",d],["$y",u],["$D",h]].forEach((function(e){S[e[1]]=function(r){return this.$g(r,e[0],e[1])}})),$.extend=function(e,r){return e.$i||(e(r,C,$),e.$i=!0),$},$.locale=F,$.isDayjs=w,$.unix=function(e){return $(1e3*e)},$.en=x[v],$.Ls=x,$.p={},$}();var Mt=f(At.exports),zt={exports:{}};zt.exports=function(){var e={LTS:"h:mm:ss A",LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D, YYYY",LLL:"MMMM D, YYYY h:mm A",LLLL:"dddd, MMMM D, YYYY h:mm A"},r=/(\[[^[]*\])|([-_:/.,()\s]+)|(A|a|YYYY|YY?|MM?M?M?|Do|DD?|hh?|HH?|mm?|ss?|S{1,3}|z|ZZ?)/g,t=/\d\d/,n=/\d\d?/,a=/\d*[^-_:/,()\s\d]+/,i={},s=function(e){return(e=+e)+(e>68?1900:2e3)},o=function(e){return function(r){this[e]=+r}},l=[/[+-]\d\d:?(\d\d)?|Z/,function(e){(this.zone||(this.zone={})).offset=function(e){if(!e)return 0;if("Z"===e)return 0;var r=e.match(/([+-]|\d\d)/g),t=60*r[1]+(+r[2]||0);return 0===t?0:"+"===r[0]?-t:t}(e)}],d=function(e){var r=i[e];return r&&(r.indexOf?r:r.s.concat(r.f))},c=function(e,r){var t,n=i.meridiem;if(n){for(var a=1;a<=24;a+=1)if(e.indexOf(n(a,0,r))>-1){t=a>12;break}}else t=e===(r?"pm":"PM");return t},u={A:[a,function(e){this.afternoon=c(e,!1)}],a:[a,function(e){this.afternoon=c(e,!0)}],S:[/\d/,function(e){this.milliseconds=100*+e}],SS:[t,function(e){this.milliseconds=10*+e}],SSS:[/\d{3}/,function(e){this.milliseconds=+e}],s:[n,o("seconds")],ss:[n,o("seconds")],m:[n,o("minutes")],mm:[n,o("minutes")],H:[n,o("hours")],h:[n,o("hours")],HH:[n,o("hours")],hh:[n,o("hours")],D:[n,o("day")],DD:[t,o("day")],Do:[a,function(e){var r=i.ordinal,t=e.match(/\d+/);if(this.day=t[0],r)for(var n=1;n<=31;n+=1)r(n).replace(/\[|\]/g,"")===e&&(this.day=n)}],M:[n,o("month")],MM:[t,o("month")],MMM:[a,function(e){var r=d("months"),t=(d("monthsShort")||r.map((function(e){return e.slice(0,3)}))).indexOf(e)+1;if(t<1)throw new Error;this.month=t%12||t}],MMMM:[a,function(e){var r=d("months").indexOf(e)+1;if(r<1)throw new Error;this.month=r%12||r}],Y:[/[+-]?\d+/,o("year")],YY:[t,function(e){this.year=s(e)}],YYYY:[/\d{4}/,o("year")],Z:l,ZZ:l};function h(t){var n,a;n=t,a=i&&i.formats;for(var s=(t=n.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g,(function(r,t,n){var i=n&&n.toUpperCase();return t||a[n]||e[n]||a[i].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g,(function(e,r,t){return r||t.slice(1)}))}))).match(r),o=s.length,l=0;l<o;l+=1){var d=s[l],c=u[d],h=c&&c[0],b=c&&c[1];s[l]=b?{regex:h,parser:b}:d.replace(/^\[|\]$/g,"")}return function(e){for(var r={},t=0,n=0;t<o;t+=1){var a=s[t];if("string"==typeof a)n+=a.length;else{var i=a.regex,l=a.parser,d=e.slice(n),c=i.exec(d)[0];l.call(r,c),e=e.replace(c,"")}}return function(e){var r=e.afternoon;if(void 0!==r){var t=e.hours;r?t<12&&(e.hours+=12):12===t&&(e.hours=0),delete e.afternoon}}(r),r}}return function(e,r,t){t.p.customParseFormat=!0,e&&e.parseTwoDigitYear&&(s=e.parseTwoDigitYear);var n=r.prototype,a=n.parse;n.parse=function(e){var r=e.date,n=e.utc,s=e.args;this.$u=n;var o=s[1];if("string"==typeof o){var l=!0===s[2],d=!0===s[3],c=l||d,u=s[2];d&&(u=s[2]),i=this.$locale(),!l&&u&&(i=t.Ls[u]),this.$d=function(e,r,t){try{if(["x","X"].indexOf(r)>-1)return new Date(("X"===r?1e3:1)*e);var n=h(r)(e),a=n.year,i=n.month,s=n.day,o=n.hours,l=n.minutes,d=n.seconds,c=n.milliseconds,u=n.zone,b=new Date,g=s||(a||i?1:b.getDate()),m=a||b.getFullYear(),y=0;a&&!i||(y=i>0?i-1:b.getMonth());var f=o||0,p=l||0,v=d||0,x=c||0;return u?new Date(Date.UTC(m,y,g,f,p,v,x+60*u.offset*1e3)):t?new Date(Date.UTC(m,y,g,f,p,v,x)):new Date(m,y,g,f,p,v,x)}catch(e){return new Date("")}}(r,o,n),this.init(),u&&!0!==u&&(this.$L=this.locale(u).$L),c&&r!=this.format(o)&&(this.$d=new Date("")),i={}}else if(o instanceof Array)for(var b=o.length,g=1;g<=b;g+=1){s[1]=o[g-1];var m=t.apply(this,s);if(m.isValid()){this.$d=m.$d,this.$L=m.$L,this.init();break}g===b&&(this.$d=new Date(""))}else a.call(this,e)}}}();var Ot=f(zt.exports),kt={exports:{}};kt.exports=function(e,r,t){r.prototype.isBetween=function(e,r,n,a){var i=t(e),s=t(r),o="("===(a=a||"()")[0],l=")"===a[1];return(o?this.isAfter(i,n):!this.isBefore(i,n))&&(l?this.isBefore(s,n):!this.isAfter(s,n))||(o?this.isBefore(i,n):!this.isAfter(i,n))&&(l?this.isAfter(s,n):!this.isBefore(s,n))}};var Yt=f(kt.exports),jt={exports:{}};jt.exports=function(e,r){r.prototype.isSameOrAfter=function(e,r){return this.isSame(e,r)||this.isAfter(e,r)}};var _t=f(jt.exports),Tt={exports:{}};Tt.exports=function(e,r){r.prototype.isSameOrBefore=function(e,r){return this.isSame(e,r)||this.isBefore(e,r)}};var Lt,Rt,Ht,Wt=f(Tt.exports),It={exports:{}},Nt=f(It.exports=(Lt={year:0,month:1,day:2,hour:3,minute:4,second:5},Rt={},function(e,r,t){var n,a=function(e,r,t){void 0===t&&(t={});var n=new Date(e),a=function(e,r){void 0===r&&(r={});var t=r.timeZoneName||"short",n=e+"|"+t,a=Rt[n];return a||(a=new Intl.DateTimeFormat("en-US",{hour12:!1,timeZone:e,year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit",timeZoneName:t}),Rt[n]=a),a}(r,t);return a.formatToParts(n)},i=function(e,r){for(var n=a(e,r),i=[],s=0;s<n.length;s+=1){var o=n[s],l=o.type,d=o.value,c=Lt[l];c>=0&&(i[c]=parseInt(d,10))}var u=i[3],h=24===u?0:u,b=i[0]+"-"+i[1]+"-"+i[2]+" "+h+":"+i[4]+":"+i[5]+":000",g=+e;return(t.utc(b).valueOf()-(g-=g%1e3))/6e4},s=r.prototype;s.tz=function(e,r){void 0===e&&(e=n);var a=this.utcOffset(),i=this.toDate(),s=i.toLocaleString("en-US",{timeZone:e}),o=Math.round((i-new Date(s))/1e3/60),l=t(s,{locale:this.$L}).$set("millisecond",this.$ms).utcOffset(15*-Math.round(i.getTimezoneOffset()/15)-o,!0);if(r){var d=l.utcOffset();l=l.add(a-d,"minute")}return l.$x.$timezone=e,l},s.offsetName=function(e){var r=this.$x.$timezone||t.tz.guess(),n=a(this.valueOf(),r,{timeZoneName:e}).find((function(e){return"timezonename"===e.type.toLowerCase()}));return n&&n.value};var o=s.startOf;s.startOf=function(e,r){if(!this.$x||!this.$x.$timezone)return o.call(this,e,r);var n=t(this.format("YYYY-MM-DD HH:mm:ss:SSS"),{locale:this.$L});return o.call(n,e,r).tz(this.$x.$timezone,!0)},t.tz=function(e,r,a){var s=a&&r,o=a||r||n,l=i(+t(),o);if("string"!=typeof e)return t(e).tz(o);var d=function(e,r,t){var n=e-60*r*1e3,a=i(n,t);if(r===a)return[n,r];var s=i(n-=60*(a-r)*1e3,t);return a===s?[n,a]:[e-60*Math.min(a,s)*1e3,Math.max(a,s)]}(t.utc(e,s).valueOf(),l,o),c=d[0],u=d[1],h=t(c).utcOffset(u);return h.$x.$timezone=o,h},t.tz.guess=function(){return Intl.DateTimeFormat().resolvedOptions().timeZone},t.tz.setDefault=function(e){n=e}}));Mt.extend(Yt),Mt.extend(Wt),Mt.extend(_t),Mt.extend(Ot),Mt.extend(Nt),function(e){e.generateDays=e=>{const r=e.startOf("month"),t=Mt(r).startOf("week");return Pt(t).map((e=>Vt(e)))},e.generateDaysForCurrentWeek=e=>{const r=e.startOf("week");return Vt(r)},e.generateMonths=e=>{const r=[];for(let t=0;t<12;t++){const n=e.month(t);r.push(Mt(n))}return r},e.generateDecadeOfYears=e=>{const r=e.year(),t=10*Math.floor(r/10),n=e.year(t),a=[n.subtract(1,"year"),n];for(let e=1;e<11;e++)a.push(n.add(e,"year"));return a},e.getStartEndDecade=e=>{const r=10*Math.floor(+e.format("YYYY")/10);return{beginDecade:r,endDecade:+Mt(`${r+9}-01-01`).format("YYYY")}},e.convertTo12HourFormat=e=>{const r=Mt(e,"HH:mm");return r.isValid()?r.format("h:mm a"):""},e.isWithinRange=(e,r,t,n="day")=>!r&&!t||(r&&t?e.isBetween(r,t,n,"[]"):r?e.isSameOrAfter(r,n):e.isSameOrBefore(t,n)),e.isPreviousMonthWithinRange=(r,t)=>e.isWithinRange(r.subtract(1,"month"),t,void 0,"month"),e.isPreviousYearWithinRange=(r,t)=>e.isWithinRange(r.subtract(1,"year"),t,void 0,"year"),e.isPreviousDecadeWithinRange=(r,t)=>{const{beginDecade:n}=e.getStartEndDecade(r);return e.isWithinRange(r.year(n).subtract(1,"year"),t,void 0,"year")},e.isNextMonthWithinRange=(r,t)=>e.isWithinRange(r.add(1,"month"),void 0,t,"month"),e.isNextYearWithinRange=(r,t)=>e.isWithinRange(r.add(1,"year"),void 0,t,"year"),e.isNextDecadeWithinRange=(r,t)=>{const{endDecade:n}=e.getStartEndDecade(r);return e.isWithinRange(r.year(n).add(1,"year"),void 0,t,"year")},e.getWeekStartEnd=e=>({start:e.startOf("week").format("YYYY-MM-DD"),end:e.endOf("week").format("YYYY-MM-DD")}),e.getFixedRangeStartEnd=(e,r)=>({start:e.format("YYYY-MM-DD"),end:e.add(r-1,"day").format("YYYY-MM-DD")}),e.isDisabledDay=(r,t,n,a)=>{const i=e.isWithinRange(r,n?Mt(n):void 0,a?Mt(a):void 0),s=t&&t.includes(r.format("YYYY-MM-DD"));return!i||!!s}}(Ht||(Ht={}));const Pt=e=>{const r=[e];for(let t=1;t<6;t++){const n=e.add(t,"week");r.push(n)}return r},Vt=e=>{const r=[];for(let t=0;t<7;t++){const n=e.add(t,"day");r.push(n)}return r},Zt=[1,3,5,7,8,10,12],Ut=[4,6,9,11];var Jt,Xt,qt,Gt;!function(e){e.clampDay=(r,t,n)=>{const a=parseInt(r),i=parseInt(t),s=parseInt(n);return 0==a?"1":Zt.includes(i)?Math.min(a,31).toString():Ut.includes(i)?Math.min(a,30).toString():2===i?e.isLeapYear(s)?Math.min(a,29).toString():Math.min(a,28).toString():r},e.clampMonth=e=>{const r=parseInt(e);return 0==r?"1":r>12?"12":e},e.isLeapYear=e=>e%4==0&&e%100!=0||e%400==0,e.getTimeDiffInMinutes=(e,r,t="HH:mm")=>{const n=Mt(e,t);return Mt(r,t).diff(n,"minute")},e.toDayjs=e=>e?Mt(e):Mt(),e.addMinutesToTime=(e,r,t="HH:mm")=>Mt(e,t).add(r,"minutes").format(t),e.isSame=(e,r,t="day")=>Mt(e).isSame(Mt(r),t)}(Jt||(Jt={})),function(e){e.isDateDisabled=(e,r)=>{const{disabledDates:t,minDate:n,maxDate:a}=r;return!!(t&&t.length&&t.includes(e))||(!(!n||!Mt(e).isBefore(n,"day"))||!(!a||!Mt(e).isAfter(a,"day")))},e.sanitizeInput=e=>{if(e){if(Mt(e).isValid())return e}return""}}(Xt||(Xt={})),function(e){e.generate=()=>Math.random().toString(36).substring(2,9)}(qt||(qt={})),function(e){e.transformWithSpaces=(e,r)=>{const t="(.{"+r+"})";return e.replace(/[^\dA-Z]/gi,"").replace(new RegExp(t,"g"),"$1 ").trim()},e.padValue=(e,r)=>{if("0"===e)return r?e:e.padStart(2,"0");if(""===e)return e;return parseInt(e).toString().padStart(2,"0")},e.shouldTruncateToTwoLines=(e,r)=>{const t=Math.floor(r/9);return e.length>=2*t||1===e.split(" ").length&&e.length>t},e.truncateOneLine=(e,r,t,n,a=8)=>{let i=0;r>t&&(i=Math.floor((r-t)/a));const s=n+i;if(s<e.length){const r=Math.floor(s/2);return e.substring(0,r)+" ... "+e.substring(e.length-r,e.length)}return e},e.truncateTwoLines=(e,r,t,n=1.2)=>{const a=Math.floor(2*r/(.6*t))*(2/n);if(e.length<=a)return e;const i=Math.floor(.6*a),s=Math.floor(.2*a);return`${e.substring(0,i)}...${e.substring(e.length-s)}`},e.getTextWidth=(r,t)=>{if("undefined"==typeof document)return 0;const n=(e.getTextWidth.canvas||(e.getTextWidth.canvas=document.createElement("canvas"))).getContext("2d");n.font=t;return n.measureText(r).width},e.maskValue=(e,t)=>{if(!e)return e;const{maskRange:n,unmaskRange:a,maskChar:i="•",maskRegex:s,maskTransformer:o}=t;if(o)return o(e);if(s)return e.replace(s,i);if(n){const{startIndex:t,endIndex:a}=r(n[0],n[1]);return e.substring(0,t)+i.repeat(e.substring(t,a+1).length)+e.substring(a+1)}if(a){const{startIndex:t,endIndex:n}=r(a[0],a[1]);return i.repeat(e.substring(0,t).length)+e.substring(t,n+1)+i.repeat(e.substring(n+1).length)}return e};const r=(e,r)=>e<r?{startIndex:e,endIndex:r}:{startIndex:r,endIndex:e}}(Gt||(Gt={}));const Qt=d.div`
    display: inline-block;
    position: relative;
    width: ${({$size:e})=>e?`${e}px`:"1em"};
    height: ${({$size:e})=>e?`${e}px`:"1em"};
    color: ${e=>e.$color||"currentColor"};
`,Kt=u`
	0% {
	  transform: rotate(0deg);
	}
	100% {
	  transform: rotate(360deg);
	}
`,en=d.div`
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
    animation: ${Kt} 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
`,rn=d(en)`
    animation-delay: -0.45s;
`,tn=d(en)`
    animation-delay: -0.3s;
`,nn=d(en)`
    animation-delay: -0.15s;
`,an=d.button`
    padding: ${Et["spacing-8"]} ${Et["spacing-16"]};
    min-width: 4rem;
    border: ${$t["width-010"]} ${$t.solid} transparent;
    border-radius: ${Ct.sm};
    transition: all ${Ft["duration-250"]} ${Ft["ease-default"]};
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;

    // -----------------------------------------------------------------------------
    // BUTTON STYLE + TEXT COLOR
    // -----------------------------------------------------------------------------
    ${e=>{switch(e.$buttonStyle){case"secondary":return c`
                    background-color: ${Dt.Primitive.white};
                    border-color: ${e.$buttonIsDanger?Dt["border-error-strong"]:Dt["border-primary"]};

                    color: ${e.$buttonIsDanger?Dt["text-error"]:Dt["text-primary"]};

                    &:hover,
                    &:active {
                        background-color: ${Dt["bg-hover-neutral"]};
                    }
                `;case"light":return c`
                    background-color: ${Dt.bg};
                    border-color: ${Dt.border};

                    color: ${e.$buttonIsDanger?Dt["text-error"]:Dt["text-primary"]};

                    &:hover,
                    &:active {
                        background-color: ${Dt["bg-hover-neutral"]};
                    }
                `;case"link":return c`
                    background-color: transparent;

                    color: ${e.$buttonIsDanger?Dt["text-error"]:Dt["text-primary"]};
                    &:hover,
                    &:active {
                        background-color: ${Dt["bg-hover-neutral"]};
                    }
                `;case"disabled":return c`
                    background-color: ${Dt["bg-disabled"]};

                    cursor: not-allowed;

                    &:hover {
                        box-shadow: none;
                    }

                    color: ${Dt["text-disabled"]};
                `;default:return c`
                    background-color: ${e.$buttonIsDanger?Dt["bg-error-strong"]:Dt["bg-primary"]};

                    ${St.MaxWidth.md} {
                        width: 100%;
                    }

                    color: ${Dt["text-inverse"]};

                    &:hover,
                    &:active {
                        background-color: ${e.$buttonIsDanger?Dt["bg-error-strong-hover"]:Dt["bg-primary-hover"]};
                    }
                `}}}

    // -----------------------------------------------------------------------------
	// BUTTON SIZE + TEXT SIZE
	// -----------------------------------------------------------------------------
	${e=>{switch(e.$buttonSizeStyle){case"small":return c`
                    height: 2.5rem;
                    ${wt["body-md-semibold"]}

                    ${St.MaxWidth.xxs} {
                        height: auto;
                    }
                `;case"large":return c`
                    height: 4rem;
                    ${wt["header-md-semibold"]}

                    ${St.MaxWidth.xxs} {
                        height: auto;
                    }
                `;default:return c`
                    height: 3rem;
                    ${wt["header-xs-semibold"]}

                    ${St.MaxWidth.xxs} {
                        height: auto;
                    }
                `}}}
`,sn=d((({color:t,className:n,size:a})=>e(Qt,Object.assign({className:n,$size:a,$color:t},{children:[r(en,{id:"inner1"}),r(rn,{id:"inner2"}),r(tn,{id:"inner3"}),r(nn,{id:"inner4"})]}))))`
    margin-right: 0.5rem;
`,on=(t,n)=>{const{children:a,disabled:i=!1,loading:s=!1,styleType:o="default",danger:l=!1}=t,d=m(t,["children","disabled","loading","styleType","danger"]),c={$buttonStyle:i?"disabled":o,$buttonSizeStyle:"default",$buttonIsDanger:l};return e(an,Object.assign({ref:n,"data-testid":d["data-testid"]||"button",disabled:i},c,d,{children:[s&&r(sn,{}),r("span",{children:a})]}))};on.displayName="Button.Default";const ln=(t,n)=>{const{children:a,disabled:i=!1,loading:s=!1,styleType:o="default",danger:l=!1}=t,d=m(t,["children","disabled","loading","styleType","danger"]),c={$buttonStyle:i?"disabled":o,$buttonSizeStyle:"small",$buttonIsDanger:l};return e(an,Object.assign({ref:n,"data-testid":d["data-testid"]||"button",disabled:i},c,d,{children:[s&&r(sn,{}),r("span",{children:a})]}))};ln.displayName="Button.Small";const dn=(t,n)=>{const{children:a,disabled:i=!1,loading:s=!1,styleType:o="default",danger:l=!1}=t,d=m(t,["children","disabled","loading","styleType","danger"]),c={$buttonStyle:i?"disabled":o,$buttonSizeStyle:"large",$buttonIsDanger:l};return e(an,Object.assign({ref:n,"data-testid":d["data-testid"]||"button",disabled:i},c,d,{children:[s&&r(sn,{}),r("span",{children:a})]}))};dn.displayName="Button.Large";const cn={Default:n.forwardRef(on),Small:n.forwardRef(ln),Large:n.forwardRef(dn)},un=d.button`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: ${Et["spacing-32"]};
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
                background-color: ${Dt["bg-hover-neutral"]};
            `}
    }
`,hn=n.forwardRef(((e,t)=>{var{children:n,focusHighlight:a=!0,focusOutline:i="none",type:s="button"}=e,o=m(e,["children","focusHighlight","focusOutline","type"]);return r(un,Object.assign({ref:t,$outline:i,$highlight:a,type:s},o,{children:n}))})),bn=c`
    color: ${Dt.icon};
    height: 1rem;
    width: 1rem;
`,gn=d(b)`
    ${bn}
`,mn=d(g)`
    ${bn}
`,yn=d(h)`
    ${bn}
    transition: transform 250ms ease-in-out;
    margin-left: 0.5rem;
`,fn=d.div`
    position: relative;
    width: 100%;
    display: flex;
    flex-direction: column;

    padding-top: var(--vertical-inset);
    padding-bottom: var(--vertical-inset);
`,pn=d.div`
    display: flex;
    flex: 1;
    position: relative;
`,vn=d.div`
    isolation: isolate;
    width: 100%;

    padding-left: var(--horizontal-inset);
    padding-right: var(--horizontal-inset);
`,xn=d.div`
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    background: ${Dt.bg};

    padding-left: var(--horizontal-inset);
    padding-right: var(--horizontal-inset);

    ${e=>{if(!e.$visible)return c`
                display: none;
            `}}
`,Dn=d.div`
    display: flex;
    justify-content: space-between;

    padding-left: var(--header-horizontal-inset, var(--horizontal-inset));
    padding-right: var(--header-horizontal-inset, var(--horizontal-inset));
    padding-bottom: var(--header-bottom-spacing);
`,wn=d.div`
    display: flex;
`,Fn=d.button`
    border: none;
    display: flex;
    align-items: center;
    padding: 0.5rem;
    background: transparent;
    cursor: pointer;

    ${e=>!1===e.$visible?c`
                display: none;
            `:e.$expanded?c`
                ${yn} {
                    transform: rotate(180deg);
                }
            `:void 0};
`,$n=d.span`
    ${wt["body-md-regular"]}
    color: ${Dt.text};
`,En=d.div`
    display: flex;
`,Cn=d(hn)`
    margin: auto 0;
    padding: 0.75rem;

    :disabled {
        cursor: not-allowed;
    }
`,Sn=d.div`
    display: flex;
    gap: 0.5rem;
    margin-top: 1.5rem;

    padding-left: var(--horizontal-inset);
    padding-right: var(--horizontal-inset);
`,Bn=d(cn.Small)`
    flex: 1;
`,An=d.div`
    width: 100%;
    height: 100%;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(6, 2.5rem);
    align-content: center;
    justify-content: center;

    gap: 0.5rem 0;
`,Mn=d.div`
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: ${Ct.md};
    margin: 0 0.5rem;
    transition: ${Ft["duration-150"]} ${Ft["ease-default"]};

    // default styles
    ${wt["body-md-regular"]}
    border-radius: ${Ct.md};
    border: ${$t["width-010"]} ${$t.solid} transparent;
    background-clip: border-box;
    color: ${Dt.text};
    cursor: default;

    // cursor style
    ${e=>e.$interactive?c`
                cursor: pointer;
            `:e.$disabledDisplay?c`
                cursor: not-allowed;
            `:void 0}

    // background, border and text styles
    ${({$variant:e,$interactive:r,$disabledDisplay:t})=>"selected-month"===e?c`
                background: ${Dt["bg-selected"]};
                border-color: ${Dt["border-selected"]};
                color: ${Dt["text-selected"]};
                font-weight: ${wt.Spec["weight-semibold"]};

                ${r&&c`
                    &:hover {
                        background: ${Dt["bg-selected-hover"]};
                        border-color: ${Dt["border-selected-hover"]};
                        color: ${Dt["text-selected-hover"]};
                    }
                `}
            `:"current-month"===e?c`
                color: ${Dt["text-primary"]};
                font-weight: ${wt.Spec["weight-semibold"]};
            `:t?c`
                color: ${Dt["text-disabled-subtlest"]};
            `:void 0}

    // hover styles
    ${({$variant:e,$interactive:r})=>{if(r)return"selected-month"===e?c`
                &:hover {
                    background: ${Dt["bg-selected-hover"]};
                    border-color: ${Dt["border-selected-hover"]};
                    color: ${Dt["text-selected-hover"]};
                    font-weight: ${wt.Spec["weight-semibold"]};
                }
            `:c`
            &:hover {
                background: ${Dt["bg-hover"]};
                color: ${Dt["text-hover"]};
                font-weight: ${wt.Spec["weight-semibold"]};
            }
        `}}
`,zn=({calendarDate:e,currentFocus:t,selectedStartDate:n,selectedEndDate:i,viewCalendarDate:s,isNewSelection:o,minDate:l,maxDate:d,allowDisabledSelection:c,onMonthSelect:u})=>{const h=a((()=>Ht.generateMonths(Mt(e))),[e]),b=e=>{const r="start"===t&&i&&e.isAfter(i,"month")&&o,a="end"===t&&n&&e.isBefore(n,"month")&&o;return r||a},g=e=>{const r=e.format("MMMM"),t=(n=e,!Ht.isWithinRange(n,l?Mt(l):void 0,d?Mt(d):void 0,"month"));var n;const a=s.isSame(e,"month")?"selected-month":Mt().isSame(e,"month")?"current-month":"default";return{disabledDisplay:t||b(e),interactive:!t||c,month:r,variant:a}};return h.length?r(An,{children:h.map((e=>{const{disabledDisplay:t,interactive:n,variant:a,month:i}=g(e);return r(Mn,Object.assign({$variant:a,$disabledDisplay:t,$interactive:n,onClick:()=>((e,r)=>{r||u(e)})(e,!n)},{children:i}),i)}))}):null},On=d.div`
    width: 100%;
    height: 100%;
    display: grid;
    align-content: center;
    align-items: center;
    grid-template-columns: repeat(3, 1fr);
`,kn=d.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 1rem 0.5rem;
    transition: ${Ft["duration-150"]} ${Ft["ease-default"]};
    padding: 0.5rem;

    // default styles
    ${wt["body-md-regular"]}
    border-radius: ${Ct.md};
    border: ${$t["width-010"]} ${$t.solid} transparent;
    background-clip: border-box;
    color: ${Dt.text};
    cursor: default;

    // cursor style
    ${({$interactive:e,$disabledDisplay:r})=>e?c`
                cursor: pointer;
            `:r?c`
                cursor: not-allowed;
            `:void 0}

    // background, border and text styles
    ${({$variant:e,$interactive:r,$disabledDisplay:t})=>"selected-year"===e?c`
                background: ${Dt["bg-selected"]};
                border-color: ${Dt["border-selected"]};
                color: ${Dt["text-selected"]};
                font-weight: ${wt.Spec["weight-semibold"]};

                ${r&&c`
                    &:hover {
                        background: ${Dt["bg-selected-hover"]};
                        border-color: ${Dt["border-selected-hover"]};
                        color: ${Dt["text-selected-hover"]};
                    }
                `}
            `:"current-year"===e?c`
                color: ${Dt["text-primary"]};
                font-weight: ${wt.Spec["weight-semibold"]};
            `:"other-decade"===e||t?c`
                color: ${Dt["text-disabled-subtlest"]};
            `:void 0}

    // hover styles
    ${({$variant:e,$interactive:r})=>{if(r)return"selected-year"===e?c`
                &:hover {
                    background: ${Dt["bg-selected-hover"]};
                    border-color: ${Dt["border-selected-hover"]};
                    color: ${Dt["text-selected-hover"]};
                    font-weight: ${wt.Spec["weight-semibold"]};
                }
            `:c`
            &:hover {
                background: ${Dt["bg-hover"]};
                color: ${Dt["text-hover"]};
                font-weight: ${wt.Spec["weight-semibold"]};
            }
        `}}
`,Yn=({calendarDate:e,currentFocus:t,selectedStartDate:n,selectedEndDate:i,viewCalendarDate:s,isNewSelection:o,minDate:l,maxDate:d,allowDisabledSelection:c,onYearSelect:u})=>{const h=a((()=>Ht.generateDecadeOfYears(Mt(e))),[e]),b=e=>{const r="start"===t&&i&&e.isAfter(i,"year")&&o,a="end"===t&&n&&e.isBefore(n,"year")&&o;return r||a},g=e=>{const r=[0,11].includes(h.indexOf(e)),t=e.year(),n=(a=e,!Ht.isWithinRange(a,l?Mt(l):void 0,d?Mt(d):void 0,"year"));var a;const i=r?"other-decade":s.isSame(e,"year")?"selected-year":Mt().isSame(e,"year")?"current-year":"default";return{disabledDisplay:n||b(e),interactive:!n||c,year:t,variant:i}};return h.length?r(On,{children:h.map((e=>{const{disabledDisplay:t,interactive:n,variant:a,year:i}=g(e);return r(kn,Object.assign({$variant:a,$disabledDisplay:t,$interactive:n,onClick:()=>((e,r)=>{r||u(e)})(e,!n)},{children:i}),i)}))}):null},jn=n.forwardRef(((n,a)=>{var{children:d,initialCalendarDate:c,minDate:u,maxDate:h,currentFocus:b,selectedStartDate:g,selectedEndDate:y,selectWithinRange:f,dynamicHeight:p=!1,allowDisabledSelection:v,onCalendarDateChange:x,withButton:D,doneButtonDisabled:w,onDismiss:F,showNavigationHeader:$=!0,getLeftArrowDate:E,getRightArrowDate:C,isLeftArrowDisabled:S,isRightArrowDisabled:B,getMonthHeaderLabel:A,getYearHeaderLabel:M}=n,z=m(n,["children","initialCalendarDate","minDate","maxDate","currentFocus","selectedStartDate","selectedEndDate","selectWithinRange","dynamicHeight","allowDisabledSelection","onCalendarDateChange","withButton","doneButtonDisabled","onDismiss","showNavigationHeader","getLeftArrowDate","getRightArrowDate","isLeftArrowDisabled","isRightArrowDisabled","getMonthHeaderLabel","getYearHeaderLabel"]);const[O,k]=i(Jt.toDayjs(c)),[Y,j]=i(Jt.toDayjs(c)),[_,T]=i("default"),L=s(null),R=s(null),H=s();o(a,(()=>({defaultView(){T("default")},resetView(){const e=Jt.toDayjs(c);k(e),j(e),T("default")},setCalendarDate(e){const r=Jt.toDayjs(e);k(r),j(r)}}))),l((()=>{const e=Jt.toDayjs(c);k(e),j(e)}),[c]),l((()=>{U(Y)}),[Y]);const W=()=>{"month-options"!==_?(T("month-options"),H.current.focus()):(T("default"),k(Y))},I=()=>{"default"!==_?(T("default"),k(Y)):T("year-options")},N=()=>{H.current.focus();const e=E?E(O):O.subtract(1,"month");switch(_){case"default":j(e),k(e);break;case"month-options":k((e=>e.subtract(1,"year")));break;case"year-options":k((e=>e.subtract(10,"year")))}},P=()=>{H.current.focus();const e=C?C(O):O.add(1,"month");switch(_){case"default":j(e),k(e);break;case"month-options":k((e=>e.add(1,"year")));break;case"year-options":k((e=>e.add(10,"year")))}},V=e=>{k(e),j(e),D||T("default")},Z=()=>{const e=Jt.toDayjs(c);k(e),j(e),"default"===_?J("reset"):T("default")},U=e=>{x&&x(e)},J=e=>{F&&F(e)},X=()=>{if(!u||v)return!1;const e=Mt(u);return"month-options"===_?!Ht.isPreviousYearWithinRange(O,e):"year-options"===_?!Ht.isPreviousDecadeWithinRange(O,e):S?S(O):!Ht.isPreviousMonthWithinRange(O,e)},q=()=>{if(!h||v)return!1;const e=Mt(h);return"month-options"===_?!Ht.isNextYearWithinRange(O,e):"year-options"===_?!Ht.isNextDecadeWithinRange(O,e):B?B(O):!Ht.isNextMonthWithinRange(O,e)},G=()=>{if("year-options"===_){const{beginDecade:e,endDecade:r}=Ht.getStartEndDecade(O);return`${e} to ${r}`}return M?M(O):O.format("YYYY")},Q=()=>{const n=A?A(O):O.format("MMM");return e(t,{children:[e(Fn,Object.assign({type:"button",tabIndex:-1,$expanded:"month-options"===_,$visible:"default"===_,id:"month-dropdown",onClick:W},{children:[r($n,{children:n}),r(yn,{})]})),e(Fn,Object.assign({type:"button",tabIndex:-1,$expanded:"default"!==_,id:"year-dropdown",onClick:I},{children:[r($n,{children:G()}),r(yn,{})]}))]})},K=()=>{switch(_){case"month-options":return r(zn,{calendarDate:O,currentFocus:b,minDate:u,maxDate:h,selectedStartDate:g,selectedEndDate:y,viewCalendarDate:Y,isNewSelection:f,onMonthSelect:V,allowDisabledSelection:v});case"year-options":return r(Yn,{calendarDate:O,currentFocus:b,minDate:u,maxDate:h,selectedStartDate:g,selectedEndDate:y,viewCalendarDate:Y,isNewSelection:f,onYearSelect:V,allowDisabledSelection:v});default:return null}};return e(fn,Object.assign({ref:H,"data-id":"calendar-container","data-testid":"calendar-container"},z,{children:[$&&e(Dn,Object.assign({"data-id":"calendar-header","data-testid":"calendar-header"},{children:[r(wn,{children:Q()}),e(En,{children:[r(Cn,Object.assign({"aria-label":"Previous month","data-testid":"left-arrow-btn",disabled:X(),focusHighlight:!1,tabIndex:-1,onClick:N},{children:r(gn,{})})),r(Cn,Object.assign({"aria-label":"Next month","data-testid":"right-arrow-btn",disabled:q(),focusHighlight:!1,tabIndex:-1,onClick:P},{children:r(mn,{})}))]})]})),r(pn,{children:(()=>{const n="function"==typeof d?d({calendarDate:Y,currentView:_}):d;return e(t,p?{children:["default"===_&&n,K()]}:{children:[r(vn,{children:n}),r(xn,Object.assign({$visible:"default"!==_},{children:K()}))]})})()}),(()=>{if(!D)return;const t=!!("default"===_)&&w;return e(Sn,{children:[r(Bn,Object.assign({ref:R,"data-testid":"cancel-button",styleType:"light",type:"button",onClick:Z},{children:"Cancel"})),r(Bn,Object.assign({"data-testid":"done-button",ref:L,type:"button",onClick:()=>{t||(k(Y),"default"===_?J("confirmed"):T("default"))},disabled:t},{children:"Done"}))]})})()]}))})),_n=d.div`
    width: 100%;
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    row-gap: 0.25rem;
`,Tn=d.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 2.5rem;
    pointer-events: none;
    user-select: none;

    ${wt["body-sm-semibold"]};
    color: ${Dt.text};
`,Ln=d.div`
    grid-column: 1 / -1;
    display: flex;
`,Rn=e=>{let r=Dt.bg,t="transparent";switch(e.$type){case"hover-subtle":r=Dt["bg-hover"],t=Dt["bg-hover"];break;case"hover":r=Dt["bg-hover-strong"],t=Dt["bg-hover-strong"];break;case"hover-outline":r=Dt["bg-hover-subtle"],t=Dt["border-hover"];break;case"selected-outline":r=Dt["bg-selected"],t=Dt["border-selected"];break;case"selected-outline-subtle":r=Dt["bg-selected"],t=Dt["border-selected-subtle"];break;case"selected-hover":r=Dt["bg-selected-hover"];break;case"selected-hover-outline":r=Dt["bg-selected-hover"],t=Dt["border-selected-hover"]}return{color:r,borderColor:t}},Hn=d.div`
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    width: 100%;
    height: 2.5rem;
`,Wn=d.div`
    position: absolute;
    height: 2.5rem;
    width: 50%;
    transition: ${Ft["duration-150"]} ${Ft["ease-default"]};
    border: ${$t["width-010"]} ${$t.solid} transparent;
    border-left: none;
    border-right: none;

    ${e=>{if(!e.$type)return;const{color:r,borderColor:t}=Rn(e);return c`
            background-color: ${r};
            background-clip: border-box;
            border-top-color: ${t};
            border-bottom-color: ${t};
        `}}
`,In=d(Wn)`
    left: 0;
`,Nn=d(Wn)`
    right: 0;
`,Pn=d.div`
    position: absolute;
    z-index: 1;

    display: flex;
    align-items: center;
    justify-content: center;
    height: 2.5rem;
    width: 2.5rem;
    transition: ${Ft["duration-150"]} ${Ft["ease-default"]};

    border: ${$t["width-010"]} ${$t.solid} transparent;
    border-radius: ${Ct.md};

    ${e=>{if(e.$type){const{color:r,borderColor:t}=Rn(e);return c`
                background-color: ${r};
                background-clip: content-box;
                border-color: ${t};
            `}}}
`,Vn=d(Pn)`
    right: calc(50% - 1.25rem);
    clip-path: inset(-3px 1.25rem -3px -3px);
`,Zn=d(Pn)`
    left: calc(50% - 1.25rem);
    clip-path: inset(-3px -3px -3px 1.25rem);
`,Un=d.div`
    position: absolute;
    top: 0;
    bottom: 0;
    z-index: 2;

    display: flex;
    align-items: center;
    justify-content: center;
    height: 2.5rem;
    width: 2.5rem;
    ${wt["body-md-regular"]}
    transition: ${Ft["duration-150"]} ${Ft["ease-default"]};

    cursor: ${e=>e.$interactive?"pointer":null===e.$interactive?"default":"not-allowed"};

    ${e=>{const{$disabled:r,$type:t}=e;if(r)return c`
                color: ${Dt["text-disabled-subtlest"]};
            `;switch(t){case"selected":return c`
                    font-weight: ${wt.Spec["weight-semibold"]};
                    color: ${Dt["text-selected"]};
                `;case"selected-hover":return c`
                    font-weight: ${wt.Spec["weight-semibold"]};
                    color: ${Dt["text-selected-hover"]};
                `;case"current":return c`
                    font-weight: ${wt.Spec["weight-semibold"]};
                    color: ${Dt["text-primary"]};
                `;case"hover":return c`
                    font-weight: ${wt.Spec["weight-semibold"]};
                    color: ${Dt["text-hover"]};
                `;case"unavailable":return c`
                    color: ${Dt["text-disabled-subtlest"]};
                `;case"hidden":return c`
                    visibility: hidden;
                `;default:return c`
                    color: ${Dt.text};
                `}}}
`,Jn=d.div`
    position: absolute;
    width: 4px;
    height: 4px;
    background-color: currentColor;
    border-radius: 50%;
    bottom: 4px;
`,Xn=({bgLeft:t,bgRight:n,circleLeft:a,circleRight:i,labelType:s,disabled:o,interactive:l,currentDateIndicator:d,date:c,onSelect:u,onHover:h,onHoverEnd:b})=>{const g=Mt().isSame(c,"day");return e(Hn,{children:[r(In,{$type:t}),r(Vn,{$type:a}),r(Nn,{$type:n}),r(Zn,{$type:i}),e(Un,Object.assign({$type:s,$disabled:o,$interactive:l,onClick:()=>{u(c)},onMouseEnter:()=>{h(c)},onMouseLeave:()=>{b&&b(c)}},{children:[c.date(),d&&g&&r(Jn,{$disabled:o})]}))]})},qn=({date:e,calendarDate:t,startDate:n,endDate:a,currentFocus:i,hoverDate:s,minDate:o,maxDate:l,disabledDates:d,allowDisabledSelection:c,isNewSelection:u,showActiveMonthDaysOnly:h,onSelect:b,onHover:g})=>{const m=Ht.isDisabledDay(e,d,o,l),y=!m||c,f=()=>{const e=Mt(s),r=e.isBefore(a,"day"),t=e.isAfter(n,"day");let o,l,d,c;return"start"===i&&a&&r&&(n&&t?(d=s,c=a):(o=s,l=n||a)),"end"===i&&n&&t&&(a&&r?(d=n,c=s):(o=a||n,l=s)),{hoverStart:o,hoverEnd:l,overlapStart:d,overlapEnd:c}},p={date:e,calendarDate:t,disabled:m,interactive:y,currentDateIndicator:!0,onSelect:()=>{b(e,!y)},onHover:()=>{g(e.format("YYYY-MM-DD"),!y)}};return r(Xn,Object.assign({},p,(()=>{const r={};if(t.month()!==e.month())r.labelType=h?"hidden":"unavailable";else if(Mt().isSame(e,"day")&&!m)r.labelType="current";else if(u){const t="end"===i&&n&&e.isBefore(n),s="start"===i&&a&&e.isAfter(a);(t||s)&&(r.labelType="unavailable")}return r})(),(()=>{const r={},i=e.isSame(n,"day"),s=e.isSame(a,"day");return h&&t.month()!==e.month()?(r.labelType="hidden",r):((n&&i||a&&s)&&(r.labelType="selected",r.circleLeft="selected-outline",r.circleRight="selected-outline"),n&&a&&e.isBetween(n,a,"day","[]")&&(r.labelType="selected",i||(r.bgLeft="selected-outline-subtle"),s||(r.bgRight="selected-outline-subtle")),r)})(),(()=>{if(!s)return;const r={},t=e.isSame(s,"day"),{hoverStart:i,hoverEnd:o,overlapStart:l,overlapEnd:d}=f();if(t){const t=e.isSame(n,"day"),i=e.isSame(a,"day");t||i?(r.labelType="selected-hover",r.circleLeft="selected-hover-outline",r.circleRight="selected-hover-outline"):(r.labelType="hover",r.circleLeft="hover",r.circleRight="hover")}if(i&&o){if(e.isBetween(i,o,"day","[]")){const t=e.isSame(i,"day"),n=e.isSame(o,"day");t||(r.labelType="hover",r.bgLeft="hover-outline"),n||(r.labelType="hover",r.bgRight="hover-outline")}return r}return l&&d?(e.isBetween(l,d,"day","[]")&&t&&(r.labelType="selected-hover",r.circleLeft="selected-hover",r.circleRight="selected-hover"),r):r})()))};Mt.extend(Yt);const Gn=({calendarDate:t,currentFocus:n,disabledDates:s,selectedStartDate:o,selectedEndDate:l,onSelect:d,onHover:c,isNewSelection:u,minDate:h,maxDate:b,allowDisabledSelection:g,showActiveMonthDaysOnly:m})=>{const y=a((()=>Ht.generateDays(t)),[t]),[f,p]=i(""),v=(e,r)=>{r&&!g||d(e)},x=(e,r)=>{r&&!g||(p(e),c(e))},D=()=>{p(""),c("")};return e(_n,Object.assign({"data-testid":"calendar-content"},{children:[y[0].map(((e,t)=>r(Tn,{children:Mt(e).format("ddd")},`week-day-${t}`))),y.map(((e,a)=>r(Ln,Object.assign({onMouseLeave:D},{children:e.map(((e,a)=>r(qn,{date:e,calendarDate:t,startDate:o,endDate:l,hoverDate:f,currentFocus:n,minDate:h,maxDate:b,disabledDates:s,allowDisabledSelection:g,isNewSelection:u,showActiveMonthDaysOnly:m,onSelect:v,onHover:x},`day-${a}`)))}),a)))]}))},Qn=({date:e,calendarDate:t,selectedDate:n,hoverDate:a,minDate:i,maxDate:s,disabledDates:o,allowDisabledSelection:l,numberOfDays:d,onSelect:c,onHover:u})=>{const h=Ht.isDisabledDay(e,o,i,s),b=!h||l,{start:g,end:m}=n?Ht.getFixedRangeStartEnd(Jt.toDayjs(n),d):{start:void 0,end:void 0},{start:y,end:f}=a?Ht.getFixedRangeStartEnd(Jt.toDayjs(a),d):{start:void 0,end:void 0},p=n&&e.isBetween(g,m,"day","[]"),v=a&&e.isBetween(y,f,"day","[]"),x=p&&e.isSame(g,"day")||v&&e.isSame(y,"day"),D=p&&e.isSame(m,"day")||v&&e.isSame(f,"day"),w=(e,r,t,n)=>{t?e.circleLeft=r:e.bgLeft=r,n?e.circleRight=r:e.bgRight=r},F={date:e,calendarDate:t,disabled:h,interactive:b,currentDateIndicator:!0,onSelect:()=>{c(e,!b)},onHover:()=>{u(e.format("YYYY-MM-DD"),!b)}};return r(Xn,Object.assign({},F,(()=>{const r={};return p||v?r.labelType="selected":t.month()!==e.month()?r.labelType="unavailable":Mt().isSame(e,"day")&&!h&&(r.labelType="current"),r})(),(()=>{const r={},t=e.format("YYYY-MM-DD");return v&&w(r,"hover",t===y,t===f),p&&w(r,"selected-outline",t===g,t===m),p&&v&&(w(r,"selected-hover-outline",x,D),t===y&&t!==g&&(r.circleLeft="selected-hover")),r})()))},Kn=({calendarDate:t,disabledDates:n,selectedStartDate:s,onSelect:o,onHover:l,minDate:d,maxDate:c,allowDisabledSelection:u,numberOfDays:h})=>{const b=a((()=>Ht.generateDays(t)),[t]),[g,m]=i(""),y=(e,r)=>{r&&!u||(o(e),e&&!Mt(e).isSame(e,"month")&&m(""))},f=(e,r)=>{r&&!u||(m(e),l(e))},p=()=>{m(""),l("")};return e(_n,Object.assign({"data-testid":"calendar-content"},{children:[b[0].map(((e,t)=>r(Tn,{children:Mt(e).format("ddd")},`week-day-${t}`))),b.map(((e,a)=>r(Ln,Object.assign({onMouseLeave:p},{children:e.map(((e,a)=>r(Qn,{date:e,calendarDate:t,selectedDate:s,hoverDate:g,minDate:d,maxDate:c,disabledDates:n,allowDisabledSelection:u,onSelect:y,onHover:f,numberOfDays:h},`day-${a}`)))}),a)))]}))},ea=d.div`
    width: 100%;
    background: ${Dt.bg};
`,ra=({date:e,calendarDate:t,selectedDate:n,hoverDate:a,minDate:i,maxDate:s,disabledDates:o,allowDisabledSelection:l,showActiveMonthDaysOnly:d,onSelect:c,onHover:u})=>{const h=Ht.isDisabledDay(e,o,i,s),b=!h||l,g={date:e,calendarDate:t,disabled:h,interactive:b,currentDateIndicator:!0,onSelect:()=>{c(e,!b)},onHover:()=>{u(e.format("YYYY-MM-DD"),!b)}};return r(Xn,Object.assign({},g,(()=>{const r={};t.month()!==e.month()?r.labelType=d?"hidden":"unavailable":Mt().isSame(e,"day")&&!h&&(r.labelType="current");const i=e.isSame(n,"day"),s=e.isSame(a,"day");return i&&s?(r.labelType="selected-hover",r.circleLeft="selected-hover-outline",r.circleRight="selected-hover-outline"):i?(r.labelType="selected",r.circleLeft="selected-outline",r.circleRight="selected-outline"):s&&(r.labelType="hover",r.circleLeft="hover-subtle",r.circleRight="hover-subtle"),r})()))};Mt.extend(Yt);const ta=({calendarDate:t,disabledDates:n,selectedDate:s,onSelect:o,onHover:l,minDate:d,maxDate:c,allowDisabledSelection:u,showActiveMonthDaysOnly:h})=>{const b=a((()=>Ht.generateDays(t)),[t]),[g,m]=i(""),y=(e,r)=>{r&&!u||o(e)},f=(e,r)=>{r&&!u||(m(e),l(e))},p=()=>{m(""),l("")};return e(_n,Object.assign({"data-testid":"calendar-content"},{children:[b[0].map(((e,t)=>r(Tn,{children:Mt(e).format("ddd")},`week-day-${t}`))),b.map(((e,a)=>r(Ln,Object.assign({onMouseLeave:p},{children:e.map(((e,a)=>r(ra,{date:e,calendarDate:t,selectedDate:s,hoverDate:g,minDate:d,maxDate:c,disabledDates:n,allowDisabledSelection:u,showActiveMonthDaysOnly:h,onSelect:y,onHover:f},`day-${a}`)))}),a)))]}))},na=({date:e,calendarDate:t,selectedDate:n,hoverDate:a,minDate:i,maxDate:s,disabledDates:o,allowDisabledSelection:l,onSelect:d,onHover:c})=>{const u=Ht.isDisabledDay(e,o,i,s),h=!u||l,{start:b,end:g}=Ht.getWeekStartEnd(Jt.toDayjs(n)),{start:m,end:y}=Ht.getWeekStartEnd(Jt.toDayjs(a)),f=n&&e.isBetween(b,g,"day","[]"),p=a&&e.isBetween(m,y,"day","[]"),v=f&&e.isSame(b)||p&&e.isSame(m),x=f&&e.isSame(g)||p&&e.isSame(y),D={date:e,calendarDate:t,disabled:u,interactive:h,currentDateIndicator:!0,onSelect:()=>{d(e,!h)},onHover:()=>{c(e.format("YYYY-MM-DD"),!h)}};return r(Xn,Object.assign({},D,(()=>{const r={};return t.month()!==e.month()?r.labelType="unavailable":Mt().isSame(e,"day")&&!u&&(r.labelType="current"),r})(),(()=>{const e={};let r,t;return f&&p?(r="selected-hover-outline",t="selected-hover"):f?(r="selected-outline",t="selected"):p&&(r="hover",t="hover"),r&&(e.labelType=t,v?e.circleLeft=r:e.bgLeft=r,x?e.circleRight=r:e.bgRight=r),e})()))},aa=({calendarDate:t,disabledDates:n,selectedStartDate:s,onSelect:o,onHover:l,minDate:d,maxDate:c,allowDisabledSelection:u})=>{const h=a((()=>Ht.generateDays(t)),[t]),[b,g]=i(""),m=(e,r)=>{if(r&&!u)return;const t=e.startOf("week");o(t),e&&!Mt(e).isSame(t,"month")&&g("")},y=(e,r)=>{r&&!u||(g(e),l(e))},f=()=>{g(""),l("")};return e(_n,Object.assign({"data-testid":"calendar-content"},{children:[h[0].map(((e,t)=>r(Tn,{children:Mt(e).format("ddd")},`week-day-${t}`))),h.map(((e,a)=>r(Ln,Object.assign({onMouseLeave:f},{children:e.map(((e,a)=>r(na,{date:e,calendarDate:t,selectedDate:s,hoverDate:b,minDate:d,maxDate:c,disabledDates:n,allowDisabledSelection:u,onSelect:m,onHover:y},`day-${a}`)))}),a)))]}))},ia=n.forwardRef((({disabledDates:e,onYearMonthDisplayChange:t,onSelect:n,onHover:a,onDismiss:i,value:l,endValue:d,currentFocus:c,withButton:u,variant:h,minDate:b,maxDate:g,allowDisabledSelection:m,selectWithinRange:y=!0,initialCalendarDate:f,numberOfDays:p,showActiveMonthDaysOnly:v=!1},x)=>{const D=s(),w=s(void 0);o(x,(()=>({reset(){D.current.resetView()},setCalendarDate(e){D.current.setCalendarDate(e)}})));const F=e=>{const r=e.format("YYYY-MM-DD");D.current.setCalendarDate(r),E(r)},$=e=>{C(e)},E=e=>{n&&n(e)},C=e=>{a&&a(e)},S=e=>{if(t){const r={month:e.month()+1,year:e.year()};t(r)}};return r(ea,{children:r(jn,Object.assign({ref:D,withButton:u,doneButtonDisabled:(()=>{if(!u)return;let e=!0;switch(h){case"single":e=!1;break;case"range":case"fixed-range":e=!!l!=!!d;break;case"week":e=!l&&!d}return e})(),onDismiss:i,minDate:b,maxDate:g,selectWithinRange:y,currentFocus:c,selectedStartDate:l,selectedEndDate:d,allowDisabledSelection:m,onCalendarDateChange:e=>{w.current&&w.current.isSame(e,"month")||S(e),w.current=e},initialCalendarDate:f},{children:({calendarDate:t})=>(t=>{switch(h){case"week":return r(aa,{calendarDate:t,disabledDates:e,selectedStartDate:l,minDate:b,maxDate:g,allowDisabledSelection:m,onSelect:F,onHover:$});case"fixed-range":return r(Kn,{calendarDate:t,disabledDates:e,selectedStartDate:l,minDate:b,maxDate:g,allowDisabledSelection:m,onSelect:F,onHover:$,numberOfDays:p});case"single":return r(ta,{calendarDate:t,disabledDates:e,selectedDate:l,minDate:b,maxDate:g,allowDisabledSelection:m,showActiveMonthDaysOnly:v,onSelect:F,onHover:$});default:return r(Gn,{calendarDate:t,currentFocus:c,disabledDates:e,selectedStartDate:l,selectedEndDate:d,minDate:b,maxDate:g,isNewSelection:y,allowDisabledSelection:m,showActiveMonthDaysOnly:v,onSelect:F,onHover:$})}})(t)}))})}));n.forwardRef(((e,t)=>{var{width:n}=e,a=m(e,["width"]);return r(Bt,Object.assign({$width:n,"data-testid":"calendar-dropdown"},{children:r(ia,Object.assign({ref:t},a))}))}));const sa=e=>{var{className:t,styleType:n="bordered",value:a,onSelect:s}=e,o=m(e,["className","styleType","value","onSelect"]);const[d,c]=i(a);return l((()=>{c(a)}),[a]),r(oa,Object.assign({className:t,$hasBorder:"bordered"===n},{children:r(ia,Object.assign({value:d,initialCalendarDate:d,onSelect:e=>{c(e),null==s||s(e)}},o))}))},oa=d.div`
    --vertical-inset: ${Et["spacing-24"]};
    --horizontal-inset: ${Et["spacing-32"]};
    --header-bottom-spacing: ${Et["spacing-8"]};

    width: 41rem;

    ${e=>{if(e.$hasBorder)return c`
                border: ${$t["width-010"]} ${$t.solid} ${Dt.border};
                border-radius: ${Ct.lg};
                overflow: hidden;
            `}}
`;export{sa as Calendar};
//# sourceMappingURL=index.js.map
