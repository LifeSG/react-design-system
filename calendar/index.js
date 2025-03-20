import{jsxs as e,jsx as r,Fragment as t}from"react/jsx-runtime";import n,{useMemo as a,useState as s,useRef as i,useImperativeHandle as o,useEffect as l}from"react";import d,{css as c,keyframes as u}from"styled-components";import{ChevronDownIcon as h}from"@lifesg/react-icons/chevron-down";import{ChevronLeftIcon as b}from"@lifesg/react-icons/chevron-left";import{ChevronRightIcon as g}from"@lifesg/react-icons/chevron-right";function m(e,r){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(n=Object.getOwnPropertySymbols(e);a<n.length;a++)r.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(t[n[a]]=e[n[a]])}return t}"function"==typeof SuppressedError&&SuppressedError;var y="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};function f(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var p=Array.isArray,v="object"==typeof y&&y&&y.Object===Object&&y,x="object"==typeof self&&self&&self.Object===Object&&self,D=v||x||Function("return this")(),w=D.Symbol,F=w,$=Object.prototype,E=$.hasOwnProperty,C=$.toString,S=F?F.toStringTag:void 0;var B=function(e){var r=E.call(e,S),t=e[S];try{e[S]=void 0;var n=!0}catch(e){}var a=C.call(e);return n&&(r?e[S]=t:delete e[S]),a},A=Object.prototype.toString;var z=B,M=function(e){return A.call(e)},k=w?w.toStringTag:void 0;var O=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":k&&k in Object(e)?z(e):M(e)};var Y=O,_=function(e){return null!=e&&"object"==typeof e};var T=function(e){return"symbol"==typeof e||_(e)&&"[object Symbol]"==Y(e)},j=p,L=T,R=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,H=/^\w*$/;var W=function(e,r){if(j(e))return!1;var t=typeof e;return!("number"!=t&&"symbol"!=t&&"boolean"!=t&&null!=e&&!L(e))||(H.test(e)||!R.test(e)||null!=r&&e in Object(r))};var I=function(e){var r=typeof e;return null!=e&&("object"==r||"function"==r)},N=O,P=I;var V,Z=function(e){if(!P(e))return!1;var r=N(e);return"[object Function]"==r||"[object GeneratorFunction]"==r||"[object AsyncFunction]"==r||"[object Proxy]"==r},U=D["__core-js_shared__"],J=(V=/[^.]+$/.exec(U&&U.keys&&U.keys.IE_PROTO||""))?"Symbol(src)_1."+V:"";var X=function(e){return!!J&&J in e},q=Function.prototype.toString;var G=Z,Q=X,K=I,ee=function(e){if(null!=e){try{return q.call(e)}catch(e){}try{return e+""}catch(e){}}return""},re=/^\[object .+?Constructor\]$/,te=Function.prototype,ne=Object.prototype,ae=te.toString,se=ne.hasOwnProperty,ie=RegExp("^"+ae.call(se).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");var oe=function(e,r){return null==e?void 0:e[r]},le=function(e){return!(!K(e)||Q(e))&&(G(e)?ie:re).test(ee(e))},de=oe;var ce=function(e,r){var t=de(e,r);return le(t)?t:void 0},ue=ce(Object,"create"),he=ue;var be=function(){this.__data__=he?he(null):{},this.size=0};var ge=function(e){var r=this.has(e)&&delete this.__data__[e];return this.size-=r?1:0,r},me=ue,ye=Object.prototype.hasOwnProperty;var fe=function(e){var r=this.__data__;if(me){var t=r[e];return"__lodash_hash_undefined__"===t?void 0:t}return ye.call(r,e)?r[e]:void 0},pe=ue,ve=Object.prototype.hasOwnProperty;var xe=function(e){var r=this.__data__;return pe?void 0!==r[e]:ve.call(r,e)},De=ue;var we=function(e,r){var t=this.__data__;return this.size+=this.has(e)?0:1,t[e]=De&&void 0===r?"__lodash_hash_undefined__":r,this},Fe=be,$e=ge,Ee=fe,Ce=xe,Se=we;function Be(e){var r=-1,t=null==e?0:e.length;for(this.clear();++r<t;){var n=e[r];this.set(n[0],n[1])}}Be.prototype.clear=Fe,Be.prototype.delete=$e,Be.prototype.get=Ee,Be.prototype.has=Ce,Be.prototype.set=Se;var Ae=Be;var ze=function(){this.__data__=[],this.size=0};var Me=function(e,r){return e===r||e!=e&&r!=r};var ke=function(e,r){for(var t=e.length;t--;)if(Me(e[t][0],r))return t;return-1},Oe=ke,Ye=Array.prototype.splice;var _e=function(e){var r=this.__data__,t=Oe(r,e);return!(t<0)&&(t==r.length-1?r.pop():Ye.call(r,t,1),--this.size,!0)},Te=ke;var je=function(e){var r=this.__data__,t=Te(r,e);return t<0?void 0:r[t][1]},Le=ke;var Re=function(e){return Le(this.__data__,e)>-1},He=ke;var We=function(e,r){var t=this.__data__,n=He(t,e);return n<0?(++this.size,t.push([e,r])):t[n][1]=r,this},Ie=ze,Ne=_e,Pe=je,Ve=Re,Ze=We;function Ue(e){var r=-1,t=null==e?0:e.length;for(this.clear();++r<t;){var n=e[r];this.set(n[0],n[1])}}Ue.prototype.clear=Ie,Ue.prototype.delete=Ne,Ue.prototype.get=Pe,Ue.prototype.has=Ve,Ue.prototype.set=Ze;var Je=Ue,Xe=ce(D,"Map"),qe=Ae,Ge=Je,Qe=Xe;var Ke=function(e){var r=typeof e;return"string"==r||"number"==r||"symbol"==r||"boolean"==r?"__proto__"!==e:null===e};var er=function(e,r){var t=e.__data__;return Ke(r)?t["string"==typeof r?"string":"hash"]:t.map},rr=er;var tr=function(e){var r=rr(this,e).delete(e);return this.size-=r?1:0,r},nr=er;var ar=function(e){return nr(this,e).get(e)},sr=er;var ir=function(e){return sr(this,e).has(e)},or=er;var lr=function(e,r){var t=or(this,e),n=t.size;return t.set(e,r),this.size+=t.size==n?0:1,this},dr=function(){this.size=0,this.__data__={hash:new qe,map:new(Qe||Ge),string:new qe}},cr=tr,ur=ar,hr=ir,br=lr;function gr(e){var r=-1,t=null==e?0:e.length;for(this.clear();++r<t;){var n=e[r];this.set(n[0],n[1])}}gr.prototype.clear=dr,gr.prototype.delete=cr,gr.prototype.get=ur,gr.prototype.has=hr,gr.prototype.set=br;var mr=gr;function yr(e,r){if("function"!=typeof e||null!=r&&"function"!=typeof r)throw new TypeError("Expected a function");var t=function(){var n=arguments,a=r?r.apply(this,n):n[0],s=t.cache;if(s.has(a))return s.get(a);var i=e.apply(this,n);return t.cache=s.set(a,i)||s,i};return t.cache=new(yr.Cache||mr),t}yr.Cache=mr;var fr=yr;var pr=function(e){var r=fr(e,(function(e){return 500===t.size&&t.clear(),e})),t=r.cache;return r},vr=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,xr=/\\(\\)?/g,Dr=pr((function(e){var r=[];return 46===e.charCodeAt(0)&&r.push(""),e.replace(vr,(function(e,t,n,a){r.push(n?a.replace(xr,"$1"):t||e)})),r}));var wr=function(e,r){for(var t=-1,n=null==e?0:e.length,a=Array(n);++t<n;)a[t]=r(e[t],t,e);return a},Fr=p,$r=T,Er=w?w.prototype:void 0,Cr=Er?Er.toString:void 0;var Sr=function e(r){if("string"==typeof r)return r;if(Fr(r))return wr(r,e)+"";if($r(r))return Cr?Cr.call(r):"";var t=r+"";return"0"==t&&1/r==-1/0?"-0":t},Br=Sr;var Ar=p,zr=W,Mr=Dr,kr=function(e){return null==e?"":Br(e)};var Or=T;var Yr=function(e,r){return Ar(e)?e:zr(e,r)?[e]:Mr(kr(e))},_r=function(e){if("string"==typeof e||Or(e))return e;var r=e+"";return"0"==r&&1/e==-1/0?"-0":r};var Tr=function(e,r){for(var t=0,n=(r=Yr(r,e)).length;null!=e&&t<n;)e=e[_r(r[t++])];return t&&t==n?e:void 0};var jr=f((function(e,r,t){var n=null==e?void 0:Tr(e,r);return void 0===n?t:n}));const Lr=(e,r,t)=>jr(t,r)||jr(e,r),Rr=(e,r)=>{const t=r||e.defaultValue;return jr(e.collections,t)},Hr={collections:{default:{"width-005":.5,"width-010":1,"width-020":2,"width-040":4,solid:"solid"}},defaultValue:"default"},Wr=e=>r=>{var t;const n=r.theme,a=Rr(Hr,null==n?void 0:n.borderScheme);return(null===(t=null==n?void 0:n.overrides)||void 0===t?void 0:t.border)?`${Lr(a,e,n.overrides.border)}px`:`${a[e]}px`},Ir={"width-005":Wr("width-005"),"width-010":Wr("width-010"),"width-020":Wr("width-020"),"width-040":Wr("width-040"),solid:(Nr="solid",e=>{var r;const t=e.theme,n=Rr(Hr,null==t?void 0:t.borderScheme),a=(null===(r=null==t?void 0:t.overrides)||void 0===r?void 0:r.border)?Lr(n,Nr,t.overrides.border):n[Nr];return"function"==typeof a?a(e):a})};var Nr;const Pr={collections:{lifesg:{"brand-10":"#2C0C0B","brand-20":"#4C1513","brand-30":"#6C1D1B","brand-40":"#922825","brand-50":"#BF3431","brand-60":"#F15D5A","brand-70":"#F69491","brand-80":"#FABAB7","brand-90":"#FCD7D2","brand-95":"#FFEBE7","brand-100":"#FFF6F4","primary-10":"#001731","primary-20":"#002752","primary-30":"#003874","primary-40":"#004D9F","primary-50":"#1768BE","primary-60":"#3C91EC","primary-70":"#6CB4FF","primary-80":"#A5CDFF","primary-90":"#CFE1FE","primary-95":"#E8F0FE","primary-100":"#F7F9FF","secondary-10":"#131529","secondary-20":"#222547","secondary-30":"#2F3565","secondary-40":"#42498B","secondary-50":"#5B62A7","secondary-60":"#858CBD","secondary-70":"#A8ADCF","secondary-80":"#C6C9E0","secondary-90":"#DDDFEC","secondary-95":"#EDEEF5","secondary-100":"#F8F8FB","neutral-10":"#161616","neutral-20":"#282828","neutral-30":"#393939","neutral-40":"#4E4E4E","neutral-50":"#686868","neutral-60":"#8E8E8E","neutral-70":"#AFAFB0","neutral-80":"#C7CACA","neutral-90":"#DDE1E2","neutral-95":"#EDEFEF","neutral-100":"#F9F9F9","success-10":"#081A0F","success-20":"#0E2D1B","success-30":"#154126","success-40":"#1C5A34","success-50":"#257645","success-60":"#44A068","success-70":"#64C189","success-80":"#80DCA5","success-90":"#B4ECCB","success-95":"#D5F6E2","success-100":"#EFFCF4","warning-10":"#221302","warning-20":"#3B2204","warning-30":"#543106","warning-40":"#744408","warning-50":"#98590C","warning-60":"#D07A13","warning-70":"#E4A244","warning-80":"#F5C26C","warning-90":"#FADBA6","warning-95":"#FCECD4","warning-100":"#FDF7F0","error-10":"#330505","error-20":"#550808","error-30":"#750C0C","error-40":"#9E130F","error-50":"#CB2213","error-60":"#DE6C6C","error-70":"#E89B9B","error-80":"#EFBEBE","error-90":"#F5D9D9","error-95":"#F9ECEC","error-100":"#FCF7F7","info-10":"#021824","info-20":"#032B3F","info-30":"#053D59","info-40":"#065478","info-50":"#176E9B","info-60":"#5296BE","info-70":"#82B5DA","info-80":"#ACCFE7","info-90":"#CCE3F1","info-95":"#E3F1F8","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000","primary-inverse":"#FEAB10"},bookingsg:{"brand-10":"#2C0C0B","brand-20":"#4C1513","brand-30":"#6C1D1B","brand-40":"#922825","brand-50":"#BF3431","brand-60":"#F15D5A","brand-70":"#F69491","brand-80":"#FABAB7","brand-90":"#FCD7D2","brand-95":"#FFEBE7","brand-100":"#FFF6F4","primary-10":"#1A122C","primary-20":"#2F1F4D","primary-30":"#422D6E","primary-40":"#5B3D97","primary-50":"#7654BC","primary-60":"#9A82CD","primary-70":"#B7A7D8","primary-80":"#CFC5E5","primary-90":"#E3DDF0","primary-95":"#F0EDF7","primary-100":"#F9F8FC","secondary-10":"#0E1723","secondary-20":"#18293D","secondary-30":"#233A57","secondary-40":"#305078","secondary-50":"#4B6A8F","secondary-60":"#7B91A9","secondary-70":"#A1B1C3","secondary-80":"#C1CBD7","secondary-90":"#DBE1E8","secondary-95":"#EBEFF2","secondary-100":"#F7F8FA","neutral-10":"#161616","neutral-20":"#282828","neutral-30":"#393939","neutral-40":"#4E4E4E","neutral-50":"#686868","neutral-60":"#8E8E8E","neutral-70":"#AFAFB0","neutral-80":"#C7CACA","neutral-90":"#DDE1E2","neutral-95":"#EDEFEF","neutral-100":"#F9F9F9","success-10":"#081A0F","success-20":"#0E2D1B","success-30":"#154126","success-40":"#1C5A34","success-50":"#257645","success-60":"#44A068","success-70":"#64C189","success-80":"#80DCA5","success-90":"#B4ECCB","success-95":"#D5F6E2","success-100":"#EFFCF4","warning-10":"#221302","warning-20":"#3B2204","warning-30":"#543106","warning-40":"#744408","warning-50":"#98590C","warning-60":"#D07A13","warning-70":"#E4A244","warning-80":"#F5C26C","warning-90":"#FADBA6","warning-95":"#FCECD4","warning-100":"#FDF7F0","error-10":"#330505","error-20":"#550808","error-30":"#750C0C","error-40":"#9E130F","error-50":"#CB2213","error-60":"#DE6C6C","error-70":"#E89B9B","error-80":"#EFBEBE","error-90":"#F5D9D9","error-95":"#F9ECEC","error-100":"#FCF7F7","info-10":"#021824","info-20":"#032B3F","info-30":"#053D59","info-40":"#065478","info-50":"#176E9B","info-60":"#5296BE","info-70":"#82B5DA","info-80":"#ACCFE7","info-90":"#CCE3F1","info-95":"#E3F1F8","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000","primary-inverse":"#FEAB10"},rbs:{"brand-10":"#0E123A","brand-20":"#191E65","brand-30":"#232B90","brand-40":"#303BC5","brand-50":"#494CFF","brand-60":"#AD6EFF","brand-70":"#AEA4FF","brand-80":"#C5C4FF","brand-90":"#DDDCFF","brand-95":"#EDECFF","brand-100":"#F8F8FF","primary-10":"#10152B","primary-20":"#1C254B","primary-30":"#28356C","primary-40":"#38489A","primary-50":"#4D5AD7","primary-60":"#7487F2","primary-70":"#9AAAFC","primary-80":"#BDC7FD","primary-90":"#DADFFB","primary-95":"#ECEEFE","primary-100":"#F7F8FF","secondary-10":"#19151D","secondary-20":"#2B2533","secondary-30":"#3E3649","secondary-40":"#564A64","secondary-50":"#6F637D","secondary-60":"#948B9F","secondary-70":"#B3ACBB","secondary-80":"#CCC8D2","secondary-90":"#E1DEE4","secondary-95":"#EFEEF1","secondary-100":"#F9F8F9","neutral-10":"#161616","neutral-20":"#282828","neutral-30":"#393939","neutral-40":"#4E4E4E","neutral-50":"#686868","neutral-60":"#8E8E8E","neutral-70":"#AFAFB0","neutral-80":"#C7CACA","neutral-90":"#DDE1E2","neutral-95":"#EDEFEF","neutral-100":"#F9F9F9","success-10":"#081A0F","success-20":"#0E2D1B","success-30":"#154126","success-40":"#1C5A34","success-50":"#257645","success-60":"#44A068","success-70":"#64C189","success-80":"#80DCA5","success-90":"#B4ECCB","success-95":"#D5F6E2","success-100":"#EFFCF4","warning-10":"#221302","warning-20":"#3B2204","warning-30":"#543106","warning-40":"#744408","warning-50":"#98590C","warning-60":"#D07A13","warning-70":"#E4A244","warning-80":"#F5C26C","warning-90":"#FADBA6","warning-95":"#FCECD4","warning-100":"#FDF7F0","error-10":"#330505","error-20":"#550808","error-30":"#750C0C","error-40":"#9E130F","error-50":"#CB2213","error-60":"#DE6C6C","error-70":"#E89B9B","error-80":"#EFBEBE","error-90":"#F5D9D9","error-95":"#F9ECEC","error-100":"#FCF7F7","info-10":"#021824","info-20":"#032B3F","info-30":"#053D59","info-40":"#065478","info-50":"#176E9B","info-60":"#5296BE","info-70":"#82B5DA","info-80":"#ACCFE7","info-90":"#CCE3F1","info-95":"#E3F1F8","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000","primary-inverse":"#FEAB10"},mylegacy:{"brand-10":"#2C0C0B","brand-20":"#4C1513","brand-30":"#6C1D1B","brand-40":"#922825","brand-50":"#BF3431","brand-60":"#F15D5A","brand-70":"#F69491","brand-80":"#FABAB7","brand-90":"#FCD7D2","brand-95":"#FFEBE7","brand-100":"#FFF6F4","primary-10":"#0011924","primary-20":"#032B40","primary-30":"#043D5A","primary-40":"#05547B","primary-50":"#096EA1","primary-60":"#2098D3","primary-70":"#5CB9E8","primary-80":"#8BD3F6","primary-90":"#BEE6FA","primary-95":"#E2F2FA","primary-100":"#F4FAFC","secondary-10":"#131529","secondary-20":"#222547","secondary-30":"#2F3565","secondary-40":"#42498B","secondary-50":"#5B62A7","secondary-60":"#858CBD","secondary-70":"#A8ADCF","secondary-80":"#C6C9E0","secondary-90":"#DDDFEC","secondary-95":"#EDEEF5","secondary-100":"#F8F8FB","neutral-10":"#161616","neutral-20":"#282828","neutral-30":"#393939","neutral-40":"#4E4E4E","neutral-50":"#686868","neutral-60":"#8E8E8E","neutral-70":"#AFAFB0","neutral-80":"#C7CACA","neutral-90":"#DDE1E2","neutral-95":"#EDEFEF","neutral-100":"#F9F9F9","success-10":"#081A0F","success-20":"#0E2D1B","success-30":"#154126","success-40":"#1C5A34","success-50":"#257645","success-60":"#44A068","success-70":"#64C189","success-80":"#80DCA5","success-90":"#B4ECCB","success-95":"#D5F6E2","success-100":"#EFFCF4","warning-10":"#221302","warning-20":"#3B2204","warning-30":"#543106","warning-40":"#744408","warning-50":"#98590C","warning-60":"#D07A13","warning-70":"#E4A244","warning-80":"#F5C26C","warning-90":"#FADBA6","warning-95":"#FCECD4","warning-100":"#FDF7F0","error-10":"#330505","error-20":"#550808","error-30":"#750C0C","error-40":"#9E130F","error-50":"#CB2213","error-60":"#DE6C6C","error-70":"#E89B9B","error-80":"#EFBEBE","error-90":"#F5D9D9","error-95":"#F9ECEC","error-100":"#FCF7F7","info-10":"#021824","info-20":"#032B3F","info-30":"#053D59","info-40":"#065478","info-50":"#176E9B","info-60":"#5296BE","info-70":"#82B5DA","info-80":"#ACCFE7","info-90":"#CCE3F1","info-95":"#E3F1F8","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000","primary-inverse":"#FEAB10"},ccube:{"brand-10":"#1F1221","brand-20":"#371F3B","brand-30":"#4E2C53","brand-40":"#6B3E73","brand-50":"#8D5197","brand-60":"#FF3399","brand-70":"#FF88C4","brand-80":"#FFB3D9","brand-90":"#FFD4E9","brand-95":"#FFE8F3","brand-100":"#FFD6EB","primary-10":"#1F1221","primary-20":"#371F3B","primary-30":"#4E2C53","primary-40":"#6B3E73","primary-50":"#8D5197","primary-60":"#B07DB7","primary-70":"#C7A3CC","primary-80":"#D9C2DD","primary-90":"#E9DBEB","primary-95":"#F3ECF4","primary-100":"#FAF7FA","secondary-10":"#2D091B","secondary-20":"#4D0F2E","secondary-30":"#6B1540","secondary-40":"#931D58","secondary-50":"#C02673","secondary-60":"#FF409F","secondary-70":"#FF88C4","secondary-80":"#FFB3D9","secondary-90":"#FFD4E9","secondary-95":"#FFE8F3","secondary-100":"#FFF8FC","neutral-10":"#161616","neutral-20":"#282828","neutral-30":"#393939","neutral-40":"#4E4E4E","neutral-50":"#686868","neutral-60":"#8E8E8E","neutral-70":"#AFAFB0","neutral-80":"#C7CACA","neutral-90":"#DDE1E2","neutral-95":"#EDEFEF","neutral-100":"#F9F9F9","success-10":"#081A0F","success-20":"#0E2D1B","success-30":"#154126","success-40":"#1C5A34","success-50":"#257645","success-60":"#44A068","success-70":"#64C189","success-80":"#80DCA5","success-90":"#B4ECCB","success-95":"#D5F6E2","success-100":"#EFFCF4","warning-10":"#221302","warning-20":"#3B2204","warning-30":"#543106","warning-40":"#744408","warning-50":"#98590C","warning-60":"#D07A13","warning-70":"#E4A244","warning-80":"#F5C26C","warning-90":"#FADBA6","warning-95":"#FCECD4","warning-100":"#FDF7F0","error-10":"#330505","error-20":"#550808","error-30":"#750C0C","error-40":"#9E130F","error-50":"#CB2213","error-60":"#DE6C6C","error-70":"#E89B9B","error-80":"#EFBEBE","error-90":"#F5D9D9","error-95":"#F9ECEC","error-100":"#FCF7F7","info-10":"#021824","info-20":"#032B3F","info-30":"#053D59","info-40":"#065478","info-50":"#176E9B","info-60":"#5296BE","info-70":"#82B5DA","info-80":"#ACCFE7","info-90":"#CCE3F1","info-95":"#E3F1F8","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000","primary-inverse":"#FEAB10"},pa:{"brand-10":"#89000B","brand-20":"#B0000E","brand-30":"#C4000F","brand-40":"#D0333F","brand-50":"#DC666F","brand-60":"#E28087","brand-70":"#E7999F","brand-80":"#EDB3B7","brand-90":"#F3CCCF","brand-95":"#F9E6E7","brand-100":"#FCF2F3","primary-10":"#000000","primary-20":"#191919","primary-30":"#333333","primary-40":"#4D4D4D","primary-50":"#666666","primary-60":"#808080","primary-70":"#999999","primary-80":"#B3B3B3","primary-90":"#E6E6E6","primary-95":"#F7F7F7","primary-100":"#FFFFFF","secondary-10":"#19151D","secondary-20":"#2B2533","secondary-30":"#3E3649","secondary-40":"#564A64","secondary-50":"#6F637D","secondary-60":"#948B9F","secondary-70":"#B3ACBB","secondary-80":"#CCC8D2","secondary-90":"#E1DEE4","secondary-95":"#EFEEF1","secondary-100":"#F9F8F9","neutral-10":"#000000","neutral-20":"#191919","neutral-30":"#333333","neutral-40":"#4D4D4D","neutral-50":"#666666","neutral-60":"#808080","neutral-70":"#999999","neutral-80":"#B3B3B3","neutral-90":"#E6E6E6","neutral-95":"#F7F7F7","neutral-100":"#FFFFFF","success-10":"#081A0F","success-20":"#0E2D1B","success-30":"#154126","success-40":"#1C5A34","success-50":"#257645","success-60":"#44A068","success-70":"#64C189","success-80":"#80DCA5","success-90":"#B4ECCB","success-95":"#D5F6E2","success-100":"#EFFCF4","warning-10":"#221302","warning-20":"#3B2204","warning-30":"#543106","warning-40":"#744408","warning-50":"#98590C","warning-60":"#D07A13","warning-70":"#E4A244","warning-80":"#F5C26C","warning-90":"#FADBA6","warning-95":"#FCECD4","warning-100":"#FDF7F0","error-10":"#330505","error-20":"#550808","error-30":"#750C0C","error-40":"#9E130F","error-50":"#CB2213","error-60":"#DE6C6C","error-70":"#E89B9B","error-80":"#EFBEBE","error-90":"#F5D9D9","error-95":"#F9ECEC","error-100":"#FCF7F7","info-10":"#021824","info-20":"#032B3F","info-30":"#053D59","info-40":"#065478","info-50":"#176E9B","info-60":"#5296BE","info-70":"#82B5DA","info-80":"#ACCFE7","info-90":"#CCE3F1","info-95":"#E3F1F8","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000","primary-inverse":"#FEAB10"}},defaultValue:"lifesg"},Vr=e=>r=>{var t;const n=r.theme,a=Rr(Pr,null==n?void 0:n.colourScheme);return(null===(t=null==n?void 0:n.overrides)||void 0===t?void 0:t.primitiveColour)?Lr(a,e,n.overrides.primitiveColour):a[e]},Zr={"brand-10":Vr("brand-10"),"brand-20":Vr("brand-20"),"brand-30":Vr("brand-30"),"brand-40":Vr("brand-40"),"brand-50":Vr("brand-50"),"brand-60":Vr("brand-60"),"brand-70":Vr("brand-70"),"brand-80":Vr("brand-80"),"brand-90":Vr("brand-90"),"brand-95":Vr("brand-95"),"brand-100":Vr("brand-100"),"primary-10":Vr("primary-10"),"primary-20":Vr("primary-20"),"primary-30":Vr("primary-30"),"primary-40":Vr("primary-40"),"primary-50":Vr("primary-50"),"primary-60":Vr("primary-60"),"primary-70":Vr("primary-70"),"primary-80":Vr("primary-80"),"primary-90":Vr("primary-90"),"primary-95":Vr("primary-95"),"primary-100":Vr("primary-100"),"secondary-10":Vr("secondary-10"),"secondary-20":Vr("secondary-20"),"secondary-30":Vr("secondary-30"),"secondary-40":Vr("secondary-40"),"secondary-50":Vr("secondary-50"),"secondary-60":Vr("secondary-60"),"secondary-70":Vr("secondary-70"),"secondary-80":Vr("secondary-80"),"secondary-90":Vr("secondary-90"),"secondary-95":Vr("secondary-95"),"secondary-100":Vr("secondary-100"),"neutral-10":Vr("neutral-10"),"neutral-20":Vr("neutral-20"),"neutral-30":Vr("neutral-30"),"neutral-40":Vr("neutral-40"),"neutral-50":Vr("neutral-50"),"neutral-60":Vr("neutral-60"),"neutral-70":Vr("neutral-70"),"neutral-80":Vr("neutral-80"),"neutral-90":Vr("neutral-90"),"neutral-95":Vr("neutral-95"),"neutral-100":Vr("neutral-100"),"success-10":Vr("success-10"),"success-20":Vr("success-20"),"success-30":Vr("success-30"),"success-40":Vr("success-40"),"success-50":Vr("success-50"),"success-60":Vr("success-60"),"success-70":Vr("success-70"),"success-80":Vr("success-80"),"success-90":Vr("success-90"),"success-95":Vr("success-95"),"success-100":Vr("success-100"),"warning-10":Vr("warning-10"),"warning-20":Vr("warning-20"),"warning-30":Vr("warning-30"),"warning-40":Vr("warning-40"),"warning-50":Vr("warning-50"),"warning-60":Vr("warning-60"),"warning-70":Vr("warning-70"),"warning-80":Vr("warning-80"),"warning-90":Vr("warning-90"),"warning-95":Vr("warning-95"),"warning-100":Vr("warning-100"),"error-10":Vr("error-10"),"error-20":Vr("error-20"),"error-30":Vr("error-30"),"error-40":Vr("error-40"),"error-50":Vr("error-50"),"error-60":Vr("error-60"),"error-70":Vr("error-70"),"error-80":Vr("error-80"),"error-90":Vr("error-90"),"error-95":Vr("error-95"),"error-100":Vr("error-100"),"info-10":Vr("info-10"),"info-20":Vr("info-20"),"info-30":Vr("info-30"),"info-40":Vr("info-40"),"info-50":Vr("info-50"),"info-60":Vr("info-60"),"info-70":Vr("info-70"),"info-80":Vr("info-80"),"info-90":Vr("info-90"),"info-95":Vr("info-95"),"info-100":Vr("info-100"),white:Vr("white"),black:Vr("black"),"primary-inverse":Vr("primary-inverse")},Ur={text:Vr("neutral-20"),"text-subtle":Vr("neutral-30"),"text-subtler":Vr("neutral-50"),"text-subtlest":Vr("neutral-60"),"text-primary":Vr("primary-50"),"text-hover":Vr("primary-40"),"text-selected":Vr("primary-50"),"text-selected-hover":Vr("primary-40"),"text-disabled":Vr("neutral-50"),"text-disabled-subtle":Vr("neutral-60"),"text-disabled-subtlest":Vr("neutral-80"),"text-selected-disabled":Vr("neutral-20"),"text-success":Vr("success-40"),"text-warning":Vr("warning-40"),"text-error":Vr("error-40"),"text-info":Vr("info-40"),"text-inverse":Vr("white"),icon:Vr("neutral-50"),"icon-subtle":Vr("neutral-60"),"icon-strongest":Vr("neutral-20"),"icon-primary":Vr("primary-50"),"icon-primary-subtle":Vr("primary-60"),"icon-primary-subtlest":Vr("primary-70"),"icon-hover":Vr("primary-40"),"icon-selected":Vr("primary-50"),"icon-selected-hover":Vr("primary-40"),"icon-disabled":Vr("neutral-50"),"icon-disabled-subtle":Vr("neutral-60"),"icon-selected-disabled":Vr("neutral-60"),"icon-success":Vr("success-50"),"icon-warning":Vr("warning-60"),"icon-error":Vr("error-50"),"icon-error-strong":Vr("error-40"),"icon-info":Vr("info-50"),"icon-inverse":Vr("white"),"icon-primary-inverse":Vr("primary-inverse"),border:Vr("neutral-90"),"border-strong":Vr("neutral-70"),"border-stronger":Vr("neutral-50"),"border-primary":Vr("primary-50"),"border-primary-subtle":Vr("primary-60"),"border-hover":Vr("primary-90"),"border-hover-strong":Vr("primary-60"),"border-selected":Vr("primary-50"),"border-selected-subtle":Vr("primary-70"),"border-selected-subtlest":Vr("primary-90"),"border-selected-hover":Vr("primary-40"),"border-focus":Vr("primary-60"),"border-focus-strong":Vr("primary-50"),"border-disabled":Vr("neutral-90"),"border-selected-disabled":Vr("neutral-70"),"border-success":Vr("success-60"),"border-warning":Vr("warning-60"),"border-error":Vr("error-60"),"border-error-focus":Vr("error-60"),"border-error-focus-strong":Vr("error-40"),"border-error-strong":Vr("error-40"),"border-info":Vr("info-60"),bg:Vr("white"),"bg-strong":Vr("neutral-100"),"bg-stronger":Vr("neutral-95"),"bg-strongest":Vr("neutral-90"),"bg-hover":Vr("primary-95"),"bg-hover-strong":Vr("primary-90"),"bg-hover-subtle":Vr("primary-100"),"bg-hover-neutral":Vr("neutral-100"),"bg-hover-neutral-strong":Vr("neutral-90"),"bg-selected":Vr("primary-95"),"bg-selected-hover":Vr("primary-90"),"bg-selected-strong":Vr("primary-90"),"bg-selected-stronger":Vr("primary-70"),"bg-selected-strongest":Vr("primary-50"),"bg-selected-strongest-hover":Vr("primary-40"),"bg-disabled":Vr("neutral-95"),"bg-selected-disabled":Vr("neutral-95"),"bg-selected-stronger-disabled":Vr("neutral-70"),"bg-success":Vr("success-100"),"bg-success-hover":Vr("success-95"),"bg-success-strong":Vr("success-50"),"bg-success-strong-hover":Vr("success-40"),"bg-warning":Vr("warning-100"),"bg-warning-hover":Vr("warning-95"),"bg-warning-strong":Vr("warning-50"),"bg-warning-strong-hover":Vr("warning-40"),"bg-info":Vr("info-100"),"bg-info-hover":Vr("info-95"),"bg-info-strong":Vr("info-50"),"bg-info-strong-hover":Vr("info-40"),"bg-error":Vr("error-100"),"bg-error-hover":Vr("error-95"),"bg-error-strong":Vr("error-50"),"bg-error-strong-hover":Vr("error-40"),"bg-inverse":Vr("neutral-20"),"bg-inverse-subtle":Vr("neutral-30"),"bg-inverse-subtler":Vr("neutral-50"),"bg-inverse-subtlest":Vr("neutral-60"),"bg-inverse-hover":Vr("neutral-40"),"bg-primary":Vr("primary-50"),"bg-primary-subtle":Vr("primary-60"),"bg-primary-subtler":Vr("primary-95"),"bg-primary-subtlest":Vr("primary-100"),"bg-available":"#6DD0A1","bg-primary-hover":Vr("primary-40"),"bg-primary-subtlest-hover":Vr("primary-90"),"bg-primary-subtlest-selected":Vr("primary-90"),"overlay-strong":"rgba(40, 40, 40, 0.85)","overlay-subtle":"rgba(40, 40, 40, 0.20)",hyperlink:Vr("primary-50"),"hyperlink-hover":Vr("primary-40"),"hyperlink-visited":Vr("primary-40"),"hyperlink-inverse":Vr("primary-inverse"),"focus-ring":Vr("black"),"focus-ring-inverse":Vr("white")},Jr={collections:{lifesg:Ur,bookingsg:Ur,rbs:Ur,mylegacy:Ur,ccube:Ur,pa:{text:Vr("neutral-30"),"text-subtle":Vr("neutral-40"),"text-subtler":Vr("neutral-50"),"text-subtlest":Vr("neutral-70"),"text-primary":Vr("neutral-10"),"text-hover":Vr("neutral-70"),"text-selected":Vr("neutral-20"),"text-selected-hover":Vr("neutral-10"),"text-disabled":Vr("neutral-50"),"text-disabled-subtle":Vr("neutral-60"),"text-disabled-subtlest":Vr("neutral-80"),"text-selected-disabled":Vr("neutral-40"),"text-success":Vr("success-40"),"text-warning":Vr("warning-40"),"text-error":Vr("brand-30"),"text-info":Vr("neutral-40"),"text-inverse":Vr("neutral-100"),icon:Vr("neutral-40"),"icon-subtle":Vr("neutral-50"),"icon-strongest":Vr("neutral-10"),"icon-primary":Vr("neutral-10"),"icon-primary-subtle":Vr("neutral-30"),"icon-primary-subtlest":Vr("neutral-60"),"icon-hover":Vr("neutral-70"),"icon-selected":Vr("brand-20"),"icon-selected-hover":Vr("brand-10"),"icon-disabled":Vr("neutral-50"),"icon-disabled-subtle":Vr("neutral-60"),"icon-selected-disabled":Vr("neutral-40"),"icon-success":Vr("success-40"),"icon-warning":Vr("warning-60"),"icon-error":Vr("brand-30"),"icon-error-strong":Vr("brand-10"),"icon-info":Vr("neutral-40"),"icon-inverse":Vr("neutral-100"),"icon-primary-inverse":"#F9B371",border:Vr("neutral-90"),"border-strong":Vr("neutral-30"),"border-stronger":Vr("neutral-20"),"border-primary":Vr("neutral-40"),"border-primary-subtle":Vr("neutral-60"),"border-hover":Vr("neutral-80"),"border-hover-strong":Vr("neutral-10"),"border-selected":Vr("neutral-20"),"border-selected-subtle":Vr("neutral-40"),"border-selected-subtlest":Vr("neutral-70"),"border-selected-hover":Vr("neutral-10"),"border-focus":Vr("brand-60"),"border-focus-strong":Vr("brand-40"),"border-disabled":Vr("neutral-90"),"border-selected-disabled":Vr("neutral-80"),"border-success":Vr("success-40"),"border-warning":Vr("warning-60"),"border-error":Vr("brand-30"),"border-error-focus":Vr("brand-20"),"border-error-focus-strong":Vr("brand-10"),"border-error-strong":Vr("brand-20"),"border-info":Vr("neutral-40"),bg:Vr("neutral-100"),"bg-strong":Vr("neutral-95"),"bg-stronger":Vr("neutral-90"),"bg-strongest":Vr("neutral-80"),"bg-hover":Vr("brand-90"),"bg-hover-strong":Vr("brand-80"),"bg-hover-subtle":Vr("neutral-90"),"bg-hover-neutral":Vr("neutral-90"),"bg-hover-neutral-strong":Vr("neutral-90"),"bg-selected":Vr("brand-50"),"bg-selected-hover":Vr("brand-70"),"bg-selected-strong":Vr("brand-90"),"bg-selected-stronger":Vr("brand-40"),"bg-selected-strongest":Vr("brand-20"),"bg-selected-strongest-hover":Vr("brand-10"),"bg-disabled":Vr("neutral-90"),"bg-selected-disabled":Vr("neutral-90"),"bg-selected-stronger-disabled":Vr("neutral-80"),"bg-success":Vr("success-100"),"bg-success-hover":Vr("success-95"),"bg-success-strong":Vr("success-50"),"bg-success-strong-hover":Vr("success-40"),"bg-warning":Vr("warning-100"),"bg-warning-hover":Vr("warning-95"),"bg-warning-strong":Vr("warning-50"),"bg-warning-strong-hover":Vr("warning-40"),"bg-info":Vr("neutral-95"),"bg-info-hover":Vr("info-95"),"bg-info-strong":Vr("info-50"),"bg-info-strong-hover":Vr("info-40"),"bg-error":Vr("brand-100"),"bg-error-hover":Vr("error-95"),"bg-error-strong":Vr("error-50"),"bg-error-strong-hover":Vr("error-40"),"bg-inverse":Vr("neutral-40"),"bg-inverse-subtle":Vr("neutral-60"),"bg-inverse-subtler":Vr("neutral-70"),"bg-inverse-subtlest":Vr("neutral-80"),"bg-inverse-hover":Vr("neutral-30"),"bg-primary":Vr("brand-20"),"bg-primary-subtle":Vr("brand-60"),"bg-primary-subtler":Vr("brand-80"),"bg-primary-subtlest":Vr("brand-100"),"bg-available":Vr("success-60"),"bg-primary-hover":Vr("brand-10"),"bg-primary-subtlest-hover":Vr("brand-80"),"bg-primary-subtlest-selected":Vr("brand-40"),"overlay-strong":"rgba(25, 25, 25, 0.95)","overlay-subtle":"rgba(25, 25, 25, 0.20)",hyperlink:Vr("neutral-10"),"hyperlink-hover":Vr("neutral-40"),"hyperlink-visited":Vr("neutral-50"),"hyperlink-inverse":"#F8AE68","focus-ring":Vr("black"),"focus-ring-inverse":Vr("white")}},defaultValue:"lifesg"},Xr=e=>r=>{var t;const n=r.theme,a=Rr(Jr,null==n?void 0:n.colourScheme),s=(null===(t=null==n?void 0:n.overrides)||void 0===t?void 0:t.semanticColour)?Lr(a,e,n.overrides.semanticColour):a[e];return"function"==typeof s?s(r):s},qr={text:Xr("text"),"text-subtle":Xr("text-subtle"),"text-subtler":Xr("text-subtler"),"text-subtlest":Xr("text-subtlest"),"text-primary":Xr("text-primary"),"text-hover":Xr("text-hover"),"text-selected":Xr("text-selected"),"text-selected-hover":Xr("text-selected-hover"),"text-disabled":Xr("text-disabled"),"text-disabled-subtle":Xr("text-disabled-subtle"),"text-disabled-subtlest":Xr("text-disabled-subtlest"),"text-selected-disabled":Xr("text-selected-disabled"),"text-success":Xr("text-success"),"text-warning":Xr("text-warning"),"text-error":Xr("text-error"),"text-info":Xr("text-info"),"text-inverse":Xr("text-inverse"),icon:Xr("icon"),"icon-subtle":Xr("icon-subtle"),"icon-strongest":Xr("icon-strongest"),"icon-primary":Xr("icon-primary"),"icon-primary-subtle":Xr("icon-primary-subtle"),"icon-primary-subtlest":Xr("icon-primary-subtlest"),"icon-hover":Xr("icon-hover"),"icon-selected":Xr("icon-selected"),"icon-selected-hover":Xr("icon-selected-hover"),"icon-disabled":Xr("icon-disabled"),"icon-disabled-subtle":Xr("icon-disabled-subtle"),"icon-selected-disabled":Xr("icon-selected-disabled"),"icon-success":Xr("icon-success"),"icon-warning":Xr("icon-warning"),"icon-error":Xr("icon-error"),"icon-error-strong":Xr("icon-error-strong"),"icon-info":Xr("icon-info"),"icon-inverse":Xr("icon-inverse"),"icon-primary-inverse":Xr("icon-primary-inverse"),border:Xr("border"),"border-strong":Xr("border-strong"),"border-stronger":Xr("border-stronger"),"border-primary":Xr("border-primary"),"border-primary-subtle":Xr("border-primary-subtle"),"border-hover":Xr("border-hover"),"border-hover-strong":Xr("border-hover-strong"),"border-selected":Xr("border-selected"),"border-selected-subtle":Xr("border-selected-subtle"),"border-selected-subtlest":Xr("border-selected-subtlest"),"border-selected-hover":Xr("border-selected-hover"),"border-focus":Xr("border-focus"),"border-focus-strong":Xr("border-focus-strong"),"border-disabled":Xr("border-disabled"),"border-selected-disabled":Xr("border-selected-disabled"),"border-success":Xr("border-success"),"border-warning":Xr("border-warning"),"border-error":Xr("border-error"),"border-error-focus":Xr("border-error-focus"),"border-error-focus-strong":Xr("border-error-focus-strong"),"border-error-strong":Xr("border-error-strong"),"border-info":Xr("border-info"),bg:Xr("bg"),"bg-strong":Xr("bg-strong"),"bg-stronger":Xr("bg-stronger"),"bg-strongest":Xr("bg-strongest"),"bg-hover":Xr("bg-hover"),"bg-hover-strong":Xr("bg-hover-strong"),"bg-hover-subtle":Xr("bg-hover-subtle"),"bg-hover-neutral":Xr("bg-hover-neutral"),"bg-hover-neutral-strong":Xr("bg-hover-neutral-strong"),"bg-selected":Xr("bg-selected"),"bg-selected-hover":Xr("bg-selected-hover"),"bg-selected-strong":Xr("bg-selected-strong"),"bg-selected-stronger":Xr("bg-selected-stronger"),"bg-selected-strongest":Xr("bg-selected-strongest"),"bg-selected-strongest-hover":Xr("bg-selected-strongest-hover"),"bg-disabled":Xr("bg-disabled"),"bg-selected-disabled":Xr("bg-selected-disabled"),"bg-selected-stronger-disabled":Xr("bg-selected-stronger-disabled"),"bg-success":Xr("bg-success"),"bg-success-hover":Xr("bg-success-hover"),"bg-success-strong":Xr("bg-success-strong"),"bg-success-strong-hover":Xr("bg-success-strong-hover"),"bg-warning":Xr("bg-warning"),"bg-warning-hover":Xr("bg-warning-hover"),"bg-warning-strong":Xr("bg-warning-strong"),"bg-warning-strong-hover":Xr("bg-warning-strong-hover"),"bg-info":Xr("bg-info"),"bg-info-hover":Xr("bg-info-hover"),"bg-info-strong":Xr("bg-info-strong"),"bg-info-strong-hover":Xr("bg-info-strong-hover"),"bg-error":Xr("bg-error"),"bg-error-hover":Xr("bg-error-hover"),"bg-error-strong":Xr("bg-error-strong"),"bg-error-strong-hover":Xr("bg-error-strong-hover"),"bg-inverse":Xr("bg-inverse"),"bg-inverse-subtle":Xr("bg-inverse-subtle"),"bg-inverse-subtler":Xr("bg-inverse-subtler"),"bg-inverse-subtlest":Xr("bg-inverse-subtlest"),"bg-inverse-hover":Xr("bg-inverse-hover"),"bg-primary":Xr("bg-primary"),"bg-primary-subtle":Xr("bg-primary-subtle"),"bg-primary-subtler":Xr("bg-primary-subtler"),"bg-primary-subtlest":Xr("bg-primary-subtlest"),"bg-available":Xr("bg-available"),"bg-primary-hover":Xr("bg-primary-hover"),"bg-primary-subtlest-hover":Xr("bg-primary-subtlest-hover"),"bg-primary-subtlest-selected":Xr("bg-primary-subtlest-selected"),"overlay-strong":Xr("overlay-strong"),"overlay-subtle":Xr("overlay-subtle"),hyperlink:Xr("hyperlink"),"hyperlink-hover":Xr("hyperlink-hover"),"hyperlink-visited":Xr("hyperlink-visited"),"hyperlink-inverse":Xr("hyperlink-inverse"),"focus-ring":Xr("focus-ring"),"focus-ring-inverse":Xr("focus-ring-inverse")},Gr={collections:{default:{solid:e=>r=>{var t,n,a;const{thickness:s,radius:i,colour:o}=e||{},l=null!==(t="function"==typeof s?s(r):s)&&void 0!==t?t:Ir["width-010"](r),d=null!==(n="function"==typeof i?i(r):i)&&void 0!==n?n:0,u=null!==(a="function"==typeof o?o(r):o)&&void 0!==a?a:qr.border(r),h=Ir.solid;return c`
            border: ${l} ${h} ${u};
            border-radius: ${d};
        `},"dashed-default":e=>r=>{var t,n,a;const{thickness:s,radius:i,colour:o}=e||{},l=null!==(t="function"==typeof s?s(r):s)&&void 0!==t?t:Ir["width-010"](r),d=null!==(n="function"==typeof i?i(r):i)&&void 0!==n?n:0,u=null!==(a="function"==typeof o?o(r):o)&&void 0!==a?a:qr.border(r),h=encodeURIComponent(`<svg width='100%' height='100%' xmlns='http://www.w3.org/2000/svg'><rect width='100%' height='100%' fill='none' rx='${d}' ry='${d}' stroke='${u}' stroke-width='${l}' stroke-dasharray='4, 8' stroke-dashoffset='0' stroke-linecap='square'/></svg>`);return c`
            background-image: url("data:image/svg+xml,${h}");
            border-radius: ${d};
        `}}},defaultValue:"default"},Qr=e=>1===e.length&&"theme"in e[0],Kr=e=>(...r)=>t=>{const n=Qr(r)?[]:r,a=Qr(r)?r[0]:t,s=a.theme;return(0,Rr(Gr,null==s?void 0:s.borderScheme)[e])(...n)(a)},et={solid:Kr("solid"),"dashed-default":Kr("dashed-default")},rt={collections:{default:{"xxs-min":0,"xxs-max":320,"xs-min":321,"xs-max":375,"sm-min":376,"sm-max":420,"md-min":421,"md-max":767,"lg-min":768,"lg-max":1023,"xl-min":1024,"xl-max":1440,"xxl-min":1441,"xxs-column":8,"xs-column":8,"sm-column":8,"md-column":8,"lg-column":12,"xl-column":12,"xxl-column":12,"xxs-gutter":16,"xs-gutter":16,"sm-gutter":16,"md-gutter":16,"lg-gutter":32,"xl-gutter":32,"xxl-gutter":32,"xxs-margin":24,"xs-margin":24,"sm-margin":24,"md-margin":24,"lg-margin":48,"xl-margin":48,"xxl-margin":48}},defaultValue:"default"},tt=e=>r=>{var t;const n=r.theme,a=Rr(rt,null==n?void 0:n.breakpointScheme);let s;return s=(null===(t=null==n?void 0:n.overrides)||void 0===t?void 0:t.breakpoint)?Lr(a,e,n.overrides.breakpoint):a[e],s},nt={"xxs-min":tt("xxs-min"),"xxs-max":tt("xxs-max"),"xs-min":tt("xs-min"),"xs-max":tt("xs-max"),"sm-min":tt("sm-min"),"sm-max":tt("sm-max"),"md-min":tt("md-min"),"md-max":tt("md-max"),"lg-min":tt("lg-min"),"lg-max":tt("lg-max"),"xl-min":tt("xl-min"),"xl-max":tt("xl-max"),"xxl-min":tt("xxl-min"),"xxs-column":tt("xxs-column"),"xs-column":tt("xs-column"),"sm-column":tt("sm-column"),"md-column":tt("md-column"),"lg-column":tt("lg-column"),"xl-column":tt("xl-column"),"xxl-column":tt("xxl-column"),"xxs-gutter":tt("xxs-gutter"),"xs-gutter":tt("xs-gutter"),"sm-gutter":tt("sm-gutter"),"md-gutter":tt("md-gutter"),"lg-gutter":tt("lg-gutter"),"xl-gutter":tt("xl-gutter"),"xxl-gutter":tt("xxl-gutter"),"xxs-margin":tt("xxs-margin"),"xs-margin":tt("xs-margin"),"sm-margin":tt("sm-margin"),"md-margin":tt("md-margin"),"lg-margin":tt("lg-margin"),"xl-margin":tt("xl-margin"),"xxl-margin":tt("xxl-margin")},at=e=>("max-width"===e?["xxs","xs","sm","md","lg","xl"]:["xxs","xs","sm","md","lg","xl","xxl"]).reduce(((r,t)=>(r[t]=((e,r)=>{const t=nt["max-width"===e?`${r}-max`:`${r}-min`];return r=>{const n=t(r);return`@media screen and (${e}: ${n}px)`}})(e,t),r)),{}),st={MaxWidth:at("max-width"),MinWidth:at("min-width")},it={"header-size-xxl":"3rem","header-size-xl":"2.5rem","header-size-lg":"2rem","header-size-md":"1.625rem","header-size-sm":"1.375rem","header-size-xs":"1.125rem","header-lh-xxl":"3.5rem","header-lh-xl":"3rem","header-lh-lg":"2.5rem","header-lh-md":"2.25rem","header-lh-sm":"1.75rem","header-lh-xs":"1.625rem","header-ls-xxl":"-0.056rem","header-ls-xl":"-0.032rem","header-ls-lg":"-0.032rem","header-ls-md":"0rem","header-ls-sm":"0rem","header-ls-xs":"0rem","weight-light":"300","weight-regular":"400","weight-semibold":"600","weight-bold":"700","font-family":"Open Sans","body-size-baseline":"1.125rem","body-size-md":"1rem","body-size-sm":"0.875rem","body-size-xs":"0.75rem","body-lh-baseline":"1.625rem","body-lh-md":"1.5rem","body-lh-sm":"1.625rem","body-lh-xs":"1.25rem","body-ls-baseline":"0rem","body-ls-md":"0.014rem","body-ls-sm":"0.012rem","body-ls-xs":"0.012rem","form-label-size":"1rem","form-description-size":"0.875rem","form-label-lh":"1.5rem","form-description-lh":"1.6rem","form-label-ls":"0.014rem","form-description-ls":"0.012rem"},ot={collections:{lifesg:it,bookingsg:{"header-size-xxl":"3rem","header-size-xl":"2.5rem","header-size-lg":"2rem","header-size-md":"1.625rem","header-size-sm":"1.375rem","header-size-xs":"1.125rem","header-lh-xxl":"3.5rem","header-lh-xl":"3rem","header-lh-lg":"2.5rem","header-lh-md":"2.25rem","header-lh-sm":"1.75rem","header-lh-xs":"1.75rem","header-ls-xxl":"-0.056rem","header-ls-xl":"-0.032rem","header-ls-lg":"-0.032rem","header-ls-md":"0rem","header-ls-sm":"0rem","header-ls-xs":"0rem","weight-light":"300","weight-regular":"400","weight-semibold":"600","weight-bold":"700","font-family":"Plus Jakarta Sans","body-size-baseline":"1.125rem","body-size-md":"1rem","body-size-sm":"0.875rem","body-size-xs":"0.75rem","body-lh-baseline":"1.75rem","body-lh-md":"1.5rem","body-lh-sm":"1.6rem","body-lh-xs":"1.2rem","body-ls-baseline":"0rem","body-ls-md":"0.014rem","body-ls-sm":"0.012rem","body-ls-xs":"0.012rem","form-label-size":"1rem","form-description-size":"0.875rem","form-label-lh":"1.5rem","form-description-lh":"1.6rem","form-label-ls":"0.014rem","form-description-ls":"0.012rem"},rbs:it,mylegacy:it,ccube:it,pa:{"header-size-xxl":"3rem","header-size-xl":"2.5rem","header-size-lg":"2rem","header-size-md":"1.625rem","header-size-sm":"1.375rem","header-size-xs":"1.125rem","header-lh-xxl":"3.5rem","header-lh-xl":"3rem","header-lh-lg":"2.5rem","header-lh-md":"2.25rem","header-lh-sm":"1.75rem","header-lh-xs":"1.625rem","header-ls-xxl":"-0.056rem","header-ls-xl":"-0.032rem","header-ls-lg":"0rem","header-ls-md":"0rem","header-ls-sm":"0rem","header-ls-xs":"0rem","weight-light":"300","weight-regular":"400","weight-semibold":"600","weight-bold":"700","font-family":"Lato","body-size-baseline":"1.375rem","body-size-md":"1rem","body-size-sm":"0.875rem","body-size-xs":"0.75rem","body-lh-baseline":"1.5rem","body-lh-md":"1.5rem","body-lh-sm":"1.6rem","body-lh-xs":"1.2rem","body-ls-baseline":"0.014rem","body-ls-md":"0.014rem","body-ls-sm":"0.012rem","body-ls-xs":"0.012rem","form-label-size":"1rem","form-description-size":"0.875rem","form-label-lh":"1.5rem","form-description-lh":"1.6rem","form-label-ls":"0.014rem","form-description-ls":"0.012rem"}},defaultValue:"lifesg"},lt=e=>r=>{var t;const n=r.theme,a=Rr(ot,null==n?void 0:n.fontScheme);return(null===(t=null==n?void 0:n.overrides)||void 0===t?void 0:t.fontSpec)?Lr(a,e,n.overrides.fontSpec):a[e]},dt={"header-size-xxl":lt("header-size-xxl"),"header-size-xl":lt("header-size-xl"),"header-size-lg":lt("header-size-lg"),"header-size-md":lt("header-size-md"),"header-size-sm":lt("header-size-sm"),"header-size-xs":lt("header-size-xs"),"header-lh-xxl":lt("header-lh-xxl"),"header-lh-xl":lt("header-lh-xl"),"header-lh-lg":lt("header-lh-lg"),"header-lh-md":lt("header-lh-md"),"header-lh-sm":lt("header-lh-sm"),"header-lh-xs":lt("header-lh-xs"),"header-ls-xxl":lt("header-ls-xxl"),"header-ls-xl":lt("header-ls-xl"),"header-ls-lg":lt("header-ls-lg"),"header-ls-md":lt("header-ls-md"),"header-ls-sm":lt("header-ls-sm"),"header-ls-xs":lt("header-ls-xs"),"weight-light":lt("weight-light"),"weight-regular":lt("weight-regular"),"weight-semibold":lt("weight-semibold"),"weight-bold":lt("weight-bold"),"font-family":lt("font-family"),"body-size-baseline":lt("body-size-baseline"),"body-size-md":lt("body-size-md"),"body-size-sm":lt("body-size-sm"),"body-size-xs":lt("body-size-xs"),"body-lh-baseline":lt("body-lh-baseline"),"body-lh-md":lt("body-lh-md"),"body-lh-sm":lt("body-lh-sm"),"body-lh-xs":lt("body-lh-xs"),"body-ls-baseline":lt("body-ls-baseline"),"body-ls-md":lt("body-ls-md"),"body-ls-sm":lt("body-ls-sm"),"body-ls-xs":lt("body-ls-xs"),"form-label-size":lt("form-label-size"),"form-description-size":lt("form-description-size"),"form-label-lh":lt("form-label-lh"),"form-description-lh":lt("form-description-lh"),"form-label-ls":lt("form-label-ls"),"form-description-ls":lt("form-description-ls")},ct=(e,r,t,n)=>c`
    font-family: ${lt("font-family")};
    font-size: ${lt(e)};
    font-weight: ${lt(r)};
    line-height: ${lt(t)};
    letter-spacing: ${lt(n)};
`,ut={"header-xxl-light":ct("header-size-xxl","weight-light","header-lh-xxl","header-ls-xxl"),"header-xxl-regular":ct("header-size-xxl","weight-regular","header-lh-xxl","header-ls-xxl"),"header-xxl-semibold":ct("header-size-xxl","weight-semibold","header-lh-xxl","header-ls-xxl"),"header-xxl-bold":ct("header-size-xxl","weight-bold","header-lh-xxl","header-ls-xxl"),"header-xl-light":ct("header-size-xl","weight-light","header-lh-xl","header-ls-xl"),"header-xl-regular":ct("header-size-xl","weight-regular","header-lh-xl","header-ls-xl"),"header-xl-semibold":ct("header-size-xl","weight-semibold","header-lh-xl","header-ls-xl"),"header-xl-bold":ct("header-size-xl","weight-bold","header-lh-xl","header-ls-xl"),"header-lg-light":ct("header-size-lg","weight-light","header-lh-lg","header-ls-lg"),"header-lg-regular":ct("header-size-lg","weight-regular","header-lh-lg","header-ls-lg"),"header-lg-semibold":ct("header-size-lg","weight-semibold","header-lh-lg","header-ls-lg"),"header-lg-bold":ct("header-size-lg","weight-bold","header-lh-lg","header-ls-lg"),"header-md-light":ct("header-size-md","weight-light","header-lh-md","header-ls-md"),"header-md-regular":ct("header-size-md","weight-regular","header-lh-md","header-ls-md"),"header-md-semibold":ct("header-size-md","weight-semibold","header-lh-md","header-ls-md"),"header-md-bold":ct("header-size-md","weight-bold","header-lh-md","header-ls-md"),"header-sm-light":ct("header-size-sm","weight-light","header-lh-sm","header-ls-sm"),"header-sm-regular":ct("header-size-sm","weight-regular","header-lh-sm","header-ls-sm"),"header-sm-semibold":ct("header-size-sm","weight-semibold","header-lh-sm","header-ls-sm"),"header-sm-bold":ct("header-size-sm","weight-bold","header-lh-sm","header-ls-sm"),"header-xs-light":ct("header-size-xs","weight-light","header-lh-xs","header-ls-xs"),"header-xs-regular":ct("header-size-xs","weight-regular","header-lh-xs","header-ls-xs"),"header-xs-semibold":ct("header-size-xs","weight-semibold","header-lh-xs","header-ls-xs"),"header-xs-bold":ct("header-size-xs","weight-bold","header-lh-xs","header-ls-xs"),"body-baseline-light":ct("body-size-baseline","weight-light","body-lh-baseline","body-ls-baseline"),"body-baseline-regular":ct("body-size-baseline","weight-regular","body-lh-baseline","body-ls-baseline"),"body-baseline-semibold":ct("body-size-baseline","weight-semibold","body-lh-baseline","body-ls-baseline"),"body-baseline-bold":ct("body-size-baseline","weight-bold","body-lh-baseline","body-ls-baseline"),"body-md-light":ct("body-size-md","weight-light","body-lh-md","body-ls-md"),"body-md-regular":ct("body-size-md","weight-regular","body-lh-md","body-ls-md"),"body-md-semibold":ct("body-size-md","weight-semibold","body-lh-md","body-ls-md"),"body-md-bold":ct("body-size-md","weight-bold","body-lh-md","body-ls-md"),"body-sm-light":ct("body-size-sm","weight-light","body-lh-sm","body-ls-sm"),"body-sm-regular":ct("body-size-sm","weight-regular","body-lh-sm","body-ls-sm"),"body-sm-semibold":ct("body-size-sm","weight-semibold","body-lh-sm","body-ls-sm"),"body-sm-bold":ct("body-size-sm","weight-bold","body-lh-sm","body-ls-sm"),"body-xs-light":ct("body-size-xs","weight-light","body-lh-xs","body-ls-xs"),"body-xs-regular":ct("body-size-xs","weight-regular","body-lh-xs","body-ls-xs"),"body-xs-semibold":ct("body-size-xs","weight-semibold","body-lh-xs","body-ls-xs"),"body-xs-bold":ct("body-size-xs","weight-bold","body-lh-xs","body-ls-xs"),"form-label":ct("form-label-size","weight-semibold","form-label-lh","form-label-ls"),"form-description":ct("form-description-size","weight-regular","form-description-lh","form-description-ls")},ht={collections:{lifesg:ut,bookingsg:ut,rbs:ut,mylegacy:ut,ccube:ut,pa:ut},defaultValue:"lifesg"},bt=e=>r=>{var t;const n=r.theme,a=Rr(ht,null==n?void 0:n.fontScheme),s=(null===(t=null==n?void 0:n.overrides)||void 0===t?void 0:t.font)?Lr(a,e,n.overrides.font):a[e];return"function"==typeof s?s(r):s},gt={"header-xxl-light":bt("header-xxl-light"),"header-xxl-regular":bt("header-xxl-regular"),"header-xxl-semibold":bt("header-xxl-semibold"),"header-xxl-bold":bt("header-xxl-bold"),"header-xl-light":bt("header-xl-light"),"header-xl-regular":bt("header-xl-regular"),"header-xl-semibold":bt("header-xl-semibold"),"header-xl-bold":bt("header-xl-bold"),"header-lg-light":bt("header-lg-light"),"header-lg-regular":bt("header-lg-regular"),"header-lg-semibold":bt("header-lg-semibold"),"header-lg-bold":bt("header-lg-bold"),"header-md-light":bt("header-md-light"),"header-md-regular":bt("header-md-regular"),"header-md-semibold":bt("header-md-semibold"),"header-md-bold":bt("header-md-bold"),"header-sm-light":bt("header-sm-light"),"header-sm-regular":bt("header-sm-regular"),"header-sm-semibold":bt("header-sm-semibold"),"header-sm-bold":bt("header-sm-bold"),"header-xs-light":bt("header-xs-light"),"header-xs-regular":bt("header-xs-regular"),"header-xs-semibold":bt("header-xs-semibold"),"header-xs-bold":bt("header-xs-bold"),"body-baseline-light":bt("body-baseline-light"),"body-baseline-regular":bt("body-baseline-regular"),"body-baseline-semibold":bt("body-baseline-semibold"),"body-baseline-bold":bt("body-baseline-bold"),"body-md-light":bt("body-md-light"),"body-md-regular":bt("body-md-regular"),"body-md-semibold":bt("body-md-semibold"),"body-md-bold":bt("body-md-bold"),"body-sm-light":bt("body-sm-light"),"body-sm-regular":bt("body-sm-regular"),"body-sm-semibold":bt("body-sm-semibold"),"body-sm-bold":bt("body-sm-bold"),"body-xs-light":bt("body-xs-light"),"body-xs-regular":bt("body-xs-regular"),"body-xs-semibold":bt("body-xs-semibold"),"body-xs-bold":bt("body-xs-bold"),"form-label":bt("form-label"),"form-description":bt("form-description")},mt={collections:{default:{"duration-150":"150ms","duration-250":"250ms","duration-350":"350ms","duration-500":"500ms","duration-800":"800ms","duration-1000":"1000ms","ease-default":"cubic-bezier(0.45, 0.05, 0.55, 0.95)","ease-standard":"cubic-bezier(0.86, 0, 0.07, 1)","ease-entrance":"cubic-bezier(0.18, 0.13, 0, 1)","ease-exit":"cubic-bezier(1, 0, 0.8, 0.85)"}},defaultValue:"default"},yt=e=>r=>{var t;const n=r.theme,a=Rr(mt,null==n?void 0:n.motionScheme);return(null===(t=null==n?void 0:n.overrides)||void 0===t?void 0:t.motion)?Lr(a,e,n.overrides.motion):a[e]},ft={"duration-150":yt("duration-150"),"duration-250":yt("duration-250"),"duration-350":yt("duration-350"),"duration-500":yt("duration-500"),"duration-800":yt("duration-800"),"duration-1000":yt("duration-1000"),"ease-default":yt("ease-default"),"ease-standard":yt("ease-standard"),"ease-entrance":yt("ease-entrance"),"ease-exit":yt("ease-exit")},pt={collections:{default:{none:0,xs:2,sm:4,md:8,lg:12,full:9999}},defaultValue:"default"},vt=e=>r=>{var t;const n=r.theme,a=Rr(pt,null==n?void 0:n.radiusScheme);return(null===(t=null==n?void 0:n.overrides)||void 0===t?void 0:t.radius)?`${Lr(a,e,n.overrides.radius)}px`:`${a[e]}px`},xt={none:vt("none"),xs:vt("xs"),sm:vt("sm"),md:vt("md"),lg:vt("lg"),full:vt("full")},Dt={collections:{default:{"spacing-0":0,"spacing-4":4,"spacing-8":8,"spacing-12":12,"spacing-16":16,"spacing-20":20,"spacing-24":24,"spacing-32":32,"spacing-40":40,"spacing-48":48,"spacing-64":64,"spacing-72":72,"layout-xs":8,"layout-sm":16,"layout-md":24,"layout-lg":32,"layout-xl":48,"layout-xxl":64,"layout-xxxl":128}},defaultValue:"default"},wt=e=>r=>{var t;const n=r.theme,a=Rr(Dt,null==n?void 0:n.spacingScheme);return(null===(t=null==n?void 0:n.overrides)||void 0===t?void 0:t.spacing)?`${Lr(a,e,n.overrides.spacing)}px`:`${a[e]}px`},Ft={"spacing-0":wt("spacing-0"),"spacing-4":wt("spacing-4"),"spacing-8":wt("spacing-8"),"spacing-12":wt("spacing-12"),"spacing-16":wt("spacing-16"),"spacing-20":wt("spacing-20"),"spacing-24":wt("spacing-24"),"spacing-32":wt("spacing-32"),"spacing-40":wt("spacing-40"),"spacing-48":wt("spacing-48"),"spacing-64":wt("spacing-64"),"spacing-72":wt("spacing-72"),"layout-xs":wt("layout-xs"),"layout-sm":wt("layout-sm"),"layout-md":wt("layout-md"),"layout-lg":wt("layout-lg"),"layout-xl":wt("layout-xl"),"layout-xxl":wt("layout-xxl"),"layout-xxxl":wt("layout-xxxl")},$t=Object.assign(Object.assign({},qr),{Primitive:Zr}),Et=Object.assign(Object.assign({},gt),{Spec:dt}),Ct=ft,St=Object.assign(Object.assign({},Ir),{Util:et}),Bt=Ft,At=xt,zt=st,Mt=d.div`
    --vertical-inset: ${Bt["spacing-24"]};
    --horizontal-inset: ${Bt["spacing-20"]};
    --header-bottom-spacing: ${Bt["spacing-4"]};

    border: ${St["width-010"]} ${St.solid} ${$t.border};
    border-radius: ${At.sm};
    overflow: hidden;

    width: ${e=>e.$width}px;
    max-width: 41rem;
    min-width: 21rem;

    ${zt.MaxWidth.sm} {
        min-width: 17.5rem;
    }
`;var kt={exports:{}};kt.exports=function(){var e=1e3,r=6e4,t=36e5,n="millisecond",a="second",s="minute",i="hour",o="day",l="week",d="month",c="quarter",u="year",h="date",b="Invalid Date",g=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,m=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,y={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(e){var r=["th","st","nd","rd"],t=e%100;return"["+e+(r[(t-20)%10]||r[t]||r[0])+"]"}},f=function(e,r,t){var n=String(e);return!n||n.length>=r?e:""+Array(r+1-n.length).join(t)+e},p={s:f,z:function(e){var r=-e.utcOffset(),t=Math.abs(r),n=Math.floor(t/60),a=t%60;return(r<=0?"+":"-")+f(n,2,"0")+":"+f(a,2,"0")},m:function e(r,t){if(r.date()<t.date())return-e(t,r);var n=12*(t.year()-r.year())+(t.month()-r.month()),a=r.clone().add(n,d),s=t-a<0,i=r.clone().add(n+(s?-1:1),d);return+(-(n+(t-a)/(s?a-i:i-a))||0)},a:function(e){return e<0?Math.ceil(e)||0:Math.floor(e)},p:function(e){return{M:d,y:u,w:l,d:o,D:h,h:i,m:s,s:a,ms:n,Q:c}[e]||String(e||"").toLowerCase().replace(/s$/,"")},u:function(e){return void 0===e}},v="en",x={};x[v]=y;var D="$isDayjsObject",w=function(e){return e instanceof C||!(!e||!e[D])},F=function e(r,t,n){var a;if(!r)return v;if("string"==typeof r){var s=r.toLowerCase();x[s]&&(a=s),t&&(x[s]=t,a=s);var i=r.split("-");if(!a&&i.length>1)return e(i[0])}else{var o=r.name;x[o]=r,a=o}return!n&&a&&(v=a),a||!n&&v},$=function(e,r){if(w(e))return e.clone();var t="object"==typeof r?r:{};return t.date=e,t.args=arguments,new C(t)},E=p;E.l=F,E.i=w,E.w=function(e,r){return $(e,{locale:r.$L,utc:r.$u,x:r.$x,$offset:r.$offset})};var C=function(){function y(e){this.$L=F(e.locale,null,!0),this.parse(e),this.$x=this.$x||e.x||{},this[D]=!0}var f=y.prototype;return f.parse=function(e){this.$d=function(e){var r=e.date,t=e.utc;if(null===r)return new Date(NaN);if(E.u(r))return new Date;if(r instanceof Date)return new Date(r);if("string"==typeof r&&!/Z$/i.test(r)){var n=r.match(g);if(n){var a=n[2]-1||0,s=(n[7]||"0").substring(0,3);return t?new Date(Date.UTC(n[1],a,n[3]||1,n[4]||0,n[5]||0,n[6]||0,s)):new Date(n[1],a,n[3]||1,n[4]||0,n[5]||0,n[6]||0,s)}}return new Date(r)}(e),this.init()},f.init=function(){var e=this.$d;this.$y=e.getFullYear(),this.$M=e.getMonth(),this.$D=e.getDate(),this.$W=e.getDay(),this.$H=e.getHours(),this.$m=e.getMinutes(),this.$s=e.getSeconds(),this.$ms=e.getMilliseconds()},f.$utils=function(){return E},f.isValid=function(){return!(this.$d.toString()===b)},f.isSame=function(e,r){var t=$(e);return this.startOf(r)<=t&&t<=this.endOf(r)},f.isAfter=function(e,r){return $(e)<this.startOf(r)},f.isBefore=function(e,r){return this.endOf(r)<$(e)},f.$g=function(e,r,t){return E.u(e)?this[r]:this.set(t,e)},f.unix=function(){return Math.floor(this.valueOf()/1e3)},f.valueOf=function(){return this.$d.getTime()},f.startOf=function(e,r){var t=this,n=!!E.u(r)||r,c=E.p(e),b=function(e,r){var a=E.w(t.$u?Date.UTC(t.$y,r,e):new Date(t.$y,r,e),t);return n?a:a.endOf(o)},g=function(e,r){return E.w(t.toDate()[e].apply(t.toDate("s"),(n?[0,0,0,0]:[23,59,59,999]).slice(r)),t)},m=this.$W,y=this.$M,f=this.$D,p="set"+(this.$u?"UTC":"");switch(c){case u:return n?b(1,0):b(31,11);case d:return n?b(1,y):b(0,y+1);case l:var v=this.$locale().weekStart||0,x=(m<v?m+7:m)-v;return b(n?f-x:f+(6-x),y);case o:case h:return g(p+"Hours",0);case i:return g(p+"Minutes",1);case s:return g(p+"Seconds",2);case a:return g(p+"Milliseconds",3);default:return this.clone()}},f.endOf=function(e){return this.startOf(e,!1)},f.$set=function(e,r){var t,l=E.p(e),c="set"+(this.$u?"UTC":""),b=(t={},t[o]=c+"Date",t[h]=c+"Date",t[d]=c+"Month",t[u]=c+"FullYear",t[i]=c+"Hours",t[s]=c+"Minutes",t[a]=c+"Seconds",t[n]=c+"Milliseconds",t)[l],g=l===o?this.$D+(r-this.$W):r;if(l===d||l===u){var m=this.clone().set(h,1);m.$d[b](g),m.init(),this.$d=m.set(h,Math.min(this.$D,m.daysInMonth())).$d}else b&&this.$d[b](g);return this.init(),this},f.set=function(e,r){return this.clone().$set(e,r)},f.get=function(e){return this[E.p(e)]()},f.add=function(n,c){var h,b=this;n=Number(n);var g=E.p(c),m=function(e){var r=$(b);return E.w(r.date(r.date()+Math.round(e*n)),b)};if(g===d)return this.set(d,this.$M+n);if(g===u)return this.set(u,this.$y+n);if(g===o)return m(1);if(g===l)return m(7);var y=(h={},h[s]=r,h[i]=t,h[a]=e,h)[g]||1,f=this.$d.getTime()+n*y;return E.w(f,this)},f.subtract=function(e,r){return this.add(-1*e,r)},f.format=function(e){var r=this,t=this.$locale();if(!this.isValid())return t.invalidDate||b;var n=e||"YYYY-MM-DDTHH:mm:ssZ",a=E.z(this),s=this.$H,i=this.$m,o=this.$M,l=t.weekdays,d=t.months,c=t.meridiem,u=function(e,t,a,s){return e&&(e[t]||e(r,n))||a[t].slice(0,s)},h=function(e){return E.s(s%12||12,e,"0")},g=c||function(e,r,t){var n=e<12?"AM":"PM";return t?n.toLowerCase():n};return n.replace(m,(function(e,n){return n||function(e){switch(e){case"YY":return String(r.$y).slice(-2);case"YYYY":return E.s(r.$y,4,"0");case"M":return o+1;case"MM":return E.s(o+1,2,"0");case"MMM":return u(t.monthsShort,o,d,3);case"MMMM":return u(d,o);case"D":return r.$D;case"DD":return E.s(r.$D,2,"0");case"d":return String(r.$W);case"dd":return u(t.weekdaysMin,r.$W,l,2);case"ddd":return u(t.weekdaysShort,r.$W,l,3);case"dddd":return l[r.$W];case"H":return String(s);case"HH":return E.s(s,2,"0");case"h":return h(1);case"hh":return h(2);case"a":return g(s,i,!0);case"A":return g(s,i,!1);case"m":return String(i);case"mm":return E.s(i,2,"0");case"s":return String(r.$s);case"ss":return E.s(r.$s,2,"0");case"SSS":return E.s(r.$ms,3,"0");case"Z":return a}return null}(e)||a.replace(":","")}))},f.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},f.diff=function(n,h,b){var g,m=this,y=E.p(h),f=$(n),p=(f.utcOffset()-this.utcOffset())*r,v=this-f,x=function(){return E.m(m,f)};switch(y){case u:g=x()/12;break;case d:g=x();break;case c:g=x()/3;break;case l:g=(v-p)/6048e5;break;case o:g=(v-p)/864e5;break;case i:g=v/t;break;case s:g=v/r;break;case a:g=v/e;break;default:g=v}return b?g:E.a(g)},f.daysInMonth=function(){return this.endOf(d).$D},f.$locale=function(){return x[this.$L]},f.locale=function(e,r){if(!e)return this.$L;var t=this.clone(),n=F(e,r,!0);return n&&(t.$L=n),t},f.clone=function(){return E.w(this.$d,this)},f.toDate=function(){return new Date(this.valueOf())},f.toJSON=function(){return this.isValid()?this.toISOString():null},f.toISOString=function(){return this.$d.toISOString()},f.toString=function(){return this.$d.toUTCString()},y}(),S=C.prototype;return $.prototype=S,[["$ms",n],["$s",a],["$m",s],["$H",i],["$W",o],["$M",d],["$y",u],["$D",h]].forEach((function(e){S[e[1]]=function(r){return this.$g(r,e[0],e[1])}})),$.extend=function(e,r){return e.$i||(e(r,C,$),e.$i=!0),$},$.locale=F,$.isDayjs=w,$.unix=function(e){return $(1e3*e)},$.en=x[v],$.Ls=x,$.p={},$}();var Ot=f(kt.exports),Yt={exports:{}};Yt.exports=function(){var e={LTS:"h:mm:ss A",LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D, YYYY",LLL:"MMMM D, YYYY h:mm A",LLLL:"dddd, MMMM D, YYYY h:mm A"},r=/(\[[^[]*\])|([-_:/.,()\s]+)|(A|a|YYYY|YY?|MM?M?M?|Do|DD?|hh?|HH?|mm?|ss?|S{1,3}|z|ZZ?)/g,t=/\d\d/,n=/\d\d?/,a=/\d*[^-_:/,()\s\d]+/,s={},i=function(e){return(e=+e)+(e>68?1900:2e3)},o=function(e){return function(r){this[e]=+r}},l=[/[+-]\d\d:?(\d\d)?|Z/,function(e){(this.zone||(this.zone={})).offset=function(e){if(!e)return 0;if("Z"===e)return 0;var r=e.match(/([+-]|\d\d)/g),t=60*r[1]+(+r[2]||0);return 0===t?0:"+"===r[0]?-t:t}(e)}],d=function(e){var r=s[e];return r&&(r.indexOf?r:r.s.concat(r.f))},c=function(e,r){var t,n=s.meridiem;if(n){for(var a=1;a<=24;a+=1)if(e.indexOf(n(a,0,r))>-1){t=a>12;break}}else t=e===(r?"pm":"PM");return t},u={A:[a,function(e){this.afternoon=c(e,!1)}],a:[a,function(e){this.afternoon=c(e,!0)}],S:[/\d/,function(e){this.milliseconds=100*+e}],SS:[t,function(e){this.milliseconds=10*+e}],SSS:[/\d{3}/,function(e){this.milliseconds=+e}],s:[n,o("seconds")],ss:[n,o("seconds")],m:[n,o("minutes")],mm:[n,o("minutes")],H:[n,o("hours")],h:[n,o("hours")],HH:[n,o("hours")],hh:[n,o("hours")],D:[n,o("day")],DD:[t,o("day")],Do:[a,function(e){var r=s.ordinal,t=e.match(/\d+/);if(this.day=t[0],r)for(var n=1;n<=31;n+=1)r(n).replace(/\[|\]/g,"")===e&&(this.day=n)}],M:[n,o("month")],MM:[t,o("month")],MMM:[a,function(e){var r=d("months"),t=(d("monthsShort")||r.map((function(e){return e.slice(0,3)}))).indexOf(e)+1;if(t<1)throw new Error;this.month=t%12||t}],MMMM:[a,function(e){var r=d("months").indexOf(e)+1;if(r<1)throw new Error;this.month=r%12||r}],Y:[/[+-]?\d+/,o("year")],YY:[t,function(e){this.year=i(e)}],YYYY:[/\d{4}/,o("year")],Z:l,ZZ:l};function h(t){var n,a;n=t,a=s&&s.formats;for(var i=(t=n.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g,(function(r,t,n){var s=n&&n.toUpperCase();return t||a[n]||e[n]||a[s].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g,(function(e,r,t){return r||t.slice(1)}))}))).match(r),o=i.length,l=0;l<o;l+=1){var d=i[l],c=u[d],h=c&&c[0],b=c&&c[1];i[l]=b?{regex:h,parser:b}:d.replace(/^\[|\]$/g,"")}return function(e){for(var r={},t=0,n=0;t<o;t+=1){var a=i[t];if("string"==typeof a)n+=a.length;else{var s=a.regex,l=a.parser,d=e.slice(n),c=s.exec(d)[0];l.call(r,c),e=e.replace(c,"")}}return function(e){var r=e.afternoon;if(void 0!==r){var t=e.hours;r?t<12&&(e.hours+=12):12===t&&(e.hours=0),delete e.afternoon}}(r),r}}return function(e,r,t){t.p.customParseFormat=!0,e&&e.parseTwoDigitYear&&(i=e.parseTwoDigitYear);var n=r.prototype,a=n.parse;n.parse=function(e){var r=e.date,n=e.utc,i=e.args;this.$u=n;var o=i[1];if("string"==typeof o){var l=!0===i[2],d=!0===i[3],c=l||d,u=i[2];d&&(u=i[2]),s=this.$locale(),!l&&u&&(s=t.Ls[u]),this.$d=function(e,r,t){try{if(["x","X"].indexOf(r)>-1)return new Date(("X"===r?1e3:1)*e);var n=h(r)(e),a=n.year,s=n.month,i=n.day,o=n.hours,l=n.minutes,d=n.seconds,c=n.milliseconds,u=n.zone,b=new Date,g=i||(a||s?1:b.getDate()),m=a||b.getFullYear(),y=0;a&&!s||(y=s>0?s-1:b.getMonth());var f=o||0,p=l||0,v=d||0,x=c||0;return u?new Date(Date.UTC(m,y,g,f,p,v,x+60*u.offset*1e3)):t?new Date(Date.UTC(m,y,g,f,p,v,x)):new Date(m,y,g,f,p,v,x)}catch(e){return new Date("")}}(r,o,n),this.init(),u&&!0!==u&&(this.$L=this.locale(u).$L),c&&r!=this.format(o)&&(this.$d=new Date("")),s={}}else if(o instanceof Array)for(var b=o.length,g=1;g<=b;g+=1){i[1]=o[g-1];var m=t.apply(this,i);if(m.isValid()){this.$d=m.$d,this.$L=m.$L,this.init();break}g===b&&(this.$d=new Date(""))}else a.call(this,e)}}}();var _t=f(Yt.exports),Tt={exports:{}};Tt.exports=function(e,r,t){r.prototype.isBetween=function(e,r,n,a){var s=t(e),i=t(r),o="("===(a=a||"()")[0],l=")"===a[1];return(o?this.isAfter(s,n):!this.isBefore(s,n))&&(l?this.isBefore(i,n):!this.isAfter(i,n))||(o?this.isBefore(s,n):!this.isAfter(s,n))&&(l?this.isAfter(i,n):!this.isBefore(i,n))}};var jt=f(Tt.exports),Lt={exports:{}};Lt.exports=function(e,r){r.prototype.isSameOrAfter=function(e,r){return this.isSame(e,r)||this.isAfter(e,r)}};var Rt=f(Lt.exports),Ht={exports:{}};Ht.exports=function(e,r){r.prototype.isSameOrBefore=function(e,r){return this.isSame(e,r)||this.isBefore(e,r)}};var Wt,It,Nt,Pt=f(Ht.exports),Vt={exports:{}},Zt=f(Vt.exports=(Wt={year:0,month:1,day:2,hour:3,minute:4,second:5},It={},function(e,r,t){var n,a=function(e,r,t){void 0===t&&(t={});var n=new Date(e),a=function(e,r){void 0===r&&(r={});var t=r.timeZoneName||"short",n=e+"|"+t,a=It[n];return a||(a=new Intl.DateTimeFormat("en-US",{hour12:!1,timeZone:e,year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit",timeZoneName:t}),It[n]=a),a}(r,t);return a.formatToParts(n)},s=function(e,r){for(var n=a(e,r),s=[],i=0;i<n.length;i+=1){var o=n[i],l=o.type,d=o.value,c=Wt[l];c>=0&&(s[c]=parseInt(d,10))}var u=s[3],h=24===u?0:u,b=s[0]+"-"+s[1]+"-"+s[2]+" "+h+":"+s[4]+":"+s[5]+":000",g=+e;return(t.utc(b).valueOf()-(g-=g%1e3))/6e4},i=r.prototype;i.tz=function(e,r){void 0===e&&(e=n);var a=this.utcOffset(),s=this.toDate(),i=s.toLocaleString("en-US",{timeZone:e}),o=Math.round((s-new Date(i))/1e3/60),l=t(i,{locale:this.$L}).$set("millisecond",this.$ms).utcOffset(15*-Math.round(s.getTimezoneOffset()/15)-o,!0);if(r){var d=l.utcOffset();l=l.add(a-d,"minute")}return l.$x.$timezone=e,l},i.offsetName=function(e){var r=this.$x.$timezone||t.tz.guess(),n=a(this.valueOf(),r,{timeZoneName:e}).find((function(e){return"timezonename"===e.type.toLowerCase()}));return n&&n.value};var o=i.startOf;i.startOf=function(e,r){if(!this.$x||!this.$x.$timezone)return o.call(this,e,r);var n=t(this.format("YYYY-MM-DD HH:mm:ss:SSS"),{locale:this.$L});return o.call(n,e,r).tz(this.$x.$timezone,!0)},t.tz=function(e,r,a){var i=a&&r,o=a||r||n,l=s(+t(),o);if("string"!=typeof e)return t(e).tz(o);var d=function(e,r,t){var n=e-60*r*1e3,a=s(n,t);if(r===a)return[n,r];var i=s(n-=60*(a-r)*1e3,t);return a===i?[n,a]:[e-60*Math.min(a,i)*1e3,Math.max(a,i)]}(t.utc(e,i).valueOf(),l,o),c=d[0],u=d[1],h=t(c).utcOffset(u);return h.$x.$timezone=o,h},t.tz.guess=function(){return Intl.DateTimeFormat().resolvedOptions().timeZone},t.tz.setDefault=function(e){n=e}}));Ot.extend(jt),Ot.extend(Pt),Ot.extend(Rt),Ot.extend(_t),Ot.extend(Zt),function(e){e.generateDays=e=>{const r=e.startOf("month"),t=Ot(r).startOf("week");return Ut(t).map((e=>Jt(e)))},e.generateDaysForCurrentWeek=e=>{const r=e.startOf("week");return Jt(r)},e.generateMonths=e=>{const r=[];for(let t=0;t<12;t++){const n=e.month(t);r.push(Ot(n))}return r},e.generateDecadeOfYears=e=>{const r=e.year(),t=10*Math.floor(r/10),n=e.year(t),a=[n.subtract(1,"year"),n];for(let e=1;e<11;e++)a.push(n.add(e,"year"));return a},e.getStartEndDecade=e=>{const r=10*Math.floor(+e.format("YYYY")/10);return{beginDecade:r,endDecade:+Ot(`${r+9}-01-01`).format("YYYY")}},e.convertTo12HourFormat=e=>{const r=Ot(e,"HH:mm");return r.isValid()?r.format("h:mm a"):""},e.isWithinRange=(e,r,t,n="day")=>!r&&!t||(r&&t?e.isBetween(r,t,n,"[]"):r?e.isSameOrAfter(r,n):e.isSameOrBefore(t,n)),e.isPreviousMonthWithinRange=(r,t)=>e.isWithinRange(r.subtract(1,"month"),t,void 0,"month"),e.isPreviousYearWithinRange=(r,t)=>e.isWithinRange(r.subtract(1,"year"),t,void 0,"year"),e.isPreviousDecadeWithinRange=(r,t)=>{const{beginDecade:n}=e.getStartEndDecade(r);return e.isWithinRange(r.year(n).subtract(1,"year"),t,void 0,"year")},e.isNextMonthWithinRange=(r,t)=>e.isWithinRange(r.add(1,"month"),void 0,t,"month"),e.isNextYearWithinRange=(r,t)=>e.isWithinRange(r.add(1,"year"),void 0,t,"year"),e.isNextDecadeWithinRange=(r,t)=>{const{endDecade:n}=e.getStartEndDecade(r);return e.isWithinRange(r.year(n).add(1,"year"),void 0,t,"year")},e.getWeekStartEnd=e=>({start:e.startOf("week").format("YYYY-MM-DD"),end:e.endOf("week").format("YYYY-MM-DD")}),e.getFixedRangeStartEnd=(e,r)=>({start:e.format("YYYY-MM-DD"),end:e.add(r-1,"day").format("YYYY-MM-DD")}),e.isDisabledDay=(r,t,n,a)=>{const s=e.isWithinRange(r,n?Ot(n):void 0,a?Ot(a):void 0),i=t&&t.includes(r.format("YYYY-MM-DD"));return!s||!!i}}(Nt||(Nt={}));const Ut=e=>{const r=[e];for(let t=1;t<6;t++){const n=e.add(t,"week");r.push(n)}return r},Jt=e=>{const r=[];for(let t=0;t<7;t++){const n=e.add(t,"day");r.push(n)}return r},Xt=[1,3,5,7,8,10,12],qt=[4,6,9,11];var Gt,Qt,Kt,en;!function(e){e.clampDay=(r,t,n)=>{const a=parseInt(r),s=parseInt(t),i=parseInt(n);return 0==a?"1":Xt.includes(s)?Math.min(a,31).toString():qt.includes(s)?Math.min(a,30).toString():2===s?e.isLeapYear(i)?Math.min(a,29).toString():Math.min(a,28).toString():r},e.clampMonth=e=>{const r=parseInt(e);return 0==r?"1":r>12?"12":e},e.isLeapYear=e=>e%4==0&&e%100!=0||e%400==0,e.getTimeDiffInMinutes=(e,r,t="HH:mm")=>{const n=Ot(e,t);return Ot(r,t).diff(n,"minute")},e.toDayjs=e=>e?Ot(e):Ot(),e.addMinutesToTime=(e,r,t="HH:mm")=>Ot(e,t).add(r,"minutes").format(t),e.isSame=(e,r,t="day")=>Ot(e).isSame(Ot(r),t)}(Gt||(Gt={})),function(e){e.isDateDisabled=(e,r)=>{const{disabledDates:t,minDate:n,maxDate:a}=r;return!!(e&&t&&t.length&&t.includes(e))||(!(!n||!Ot(e).isBefore(n,"day"))||!(!a||!Ot(e).isAfter(a,"day")))},e.sanitizeInput=e=>{if(e){if(Ot(e).isValid())return e}return""}}(Qt||(Qt={})),function(e){e.generate=()=>Math.random().toString(36).substring(2,9)}(Kt||(Kt={})),function(e){e.transformWithSpaces=(e,r)=>{const t="(.{"+r+"})";return e.replace(/[^\dA-Z]/gi,"").replace(new RegExp(t,"g"),"$1 ").trim()},e.padValue=(e,r)=>{if("0"===e)return r?e:e.padStart(2,"0");if(""===e)return e;return parseInt(e).toString().padStart(2,"0")},e.shouldTruncateToTwoLines=(e,r)=>{const t=Math.floor(r/9);return e.length>=2*t||1===e.split(" ").length&&e.length>t},e.truncateOneLine=(e,r,t,n,a=8)=>{let s=0;r>t&&(s=Math.floor((r-t)/a));const i=n+s;if(i<e.length){const r=Math.floor(i/2);return e.substring(0,r)+" ... "+e.substring(e.length-r,e.length)}return e},e.truncateTwoLines=(e,r,t,n=1.2)=>{const a=Math.floor(2*r/(.6*t))*(2/n);if(e.length<=a)return e;const s=Math.floor(.6*a),i=Math.floor(.2*a);return`${e.substring(0,s)}...${e.substring(e.length-i)}`},e.getTextWidth=(r,t)=>{if("undefined"==typeof document)return 0;const n=(e.getTextWidth.canvas||(e.getTextWidth.canvas=document.createElement("canvas"))).getContext("2d");n.font=t;return n.measureText(r).width},e.maskValue=(e,t)=>{if(!e)return e;const{maskRange:n,unmaskRange:a,maskChar:s="•",maskRegex:i,maskTransformer:o}=t;if(o)return o(e);if(i)return e.replace(i,s);if(n){const{startIndex:t,endIndex:a}=r(n[0],n[1]);return e.substring(0,t)+s.repeat(e.substring(t,a+1).length)+e.substring(a+1)}if(a){const{startIndex:t,endIndex:n}=r(a[0],a[1]);return s.repeat(e.substring(0,t).length)+e.substring(t,n+1)+s.repeat(e.substring(n+1).length)}return e};const r=(e,r)=>e<r?{startIndex:e,endIndex:r}:{startIndex:r,endIndex:e}}(en||(en={}));const rn=d.div`
    display: inline-block;
    position: relative;
    width: ${({$size:e})=>e?`${e}px`:"1em"};
    height: ${({$size:e})=>e?`${e}px`:"1em"};
    color: ${e=>e.$color||"currentColor"};
`,tn=u`
	0% {
	  transform: rotate(0deg);
	}
	100% {
	  transform: rotate(360deg);
	}
`,nn=d.div`
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
    animation: ${tn} 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
`,an=d(nn)`
    animation-delay: -0.45s;
`,sn=d(nn)`
    animation-delay: -0.3s;
`,on=d(nn)`
    animation-delay: -0.15s;
`,ln=d.button`
    padding: ${Bt["spacing-8"]} ${Bt["spacing-16"]};
    min-width: 4rem;
    border: ${St["width-010"]} ${St.solid} transparent;
    border-radius: ${At.sm};
    transition: all ${Ct["duration-250"]} ${Ct["ease-default"]};
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;

    // -----------------------------------------------------------------------------
    // BUTTON STYLE + TEXT COLOR
    // -----------------------------------------------------------------------------
    ${e=>{switch(e.$buttonStyle){case"secondary":return c`
                    background-color: ${$t.Primitive.white};
                    border-color: ${e.$buttonIsDanger?$t["border-error-strong"]:$t["border-primary"]};

                    color: ${e.$buttonIsDanger?$t["text-error"]:$t["text-primary"]};

                    &:hover,
                    &:active {
                        background-color: ${$t["bg-hover-neutral"]};
                    }
                `;case"light":return c`
                    background-color: ${$t.bg};
                    border-color: ${$t.border};

                    color: ${e.$buttonIsDanger?$t["text-error"]:$t["text-primary"]};

                    &:hover,
                    &:active {
                        background-color: ${$t["bg-hover-neutral"]};
                    }
                `;case"link":return c`
                    background-color: transparent;

                    color: ${e.$buttonIsDanger?$t["text-error"]:$t["text-primary"]};
                    &:hover,
                    &:active {
                        background-color: ${$t["bg-hover-neutral"]};
                    }
                `;case"disabled":return c`
                    background-color: ${$t["bg-disabled"]};

                    cursor: not-allowed;

                    &:hover {
                        box-shadow: none;
                    }

                    color: ${$t["text-disabled"]};
                `;default:return c`
                    background-color: ${e.$buttonIsDanger?$t["bg-error-strong"]:$t["bg-primary"]};

                    ${zt.MaxWidth.md} {
                        width: 100%;
                    }

                    color: ${$t["text-inverse"]};

                    &:hover,
                    &:active {
                        background-color: ${e.$buttonIsDanger?$t["bg-error-strong-hover"]:$t["bg-primary-hover"]};
                    }
                `}}}

    // -----------------------------------------------------------------------------
	// BUTTON SIZE + TEXT SIZE
	// -----------------------------------------------------------------------------
	${e=>{switch(e.$buttonSizeStyle){case"small":return c`
                    height: 2.5rem;
                    ${Et["body-md-semibold"]}

                    ${zt.MaxWidth.xxs} {
                        height: auto;
                    }
                `;case"large":return c`
                    height: 4rem;
                    ${Et["header-md-semibold"]}

                    ${zt.MaxWidth.xxs} {
                        height: auto;
                    }
                `;default:return c`
                    height: 3rem;
                    ${Et["header-xs-semibold"]}

                    ${zt.MaxWidth.xxs} {
                        height: auto;
                    }
                `}}}
`,dn=d((({color:t,className:n,size:a})=>e(rn,{className:n,$size:a,$color:t,children:[r(nn,{id:"inner1"}),r(an,{id:"inner2"}),r(sn,{id:"inner3"}),r(on,{id:"inner4"})]})))`
    margin-right: 0.5rem;
`,cn=(t,n)=>{const{children:a,disabled:s=!1,loading:i=!1,styleType:o="default",danger:l=!1}=t,d=m(t,["children","disabled","loading","styleType","danger"]),c={$buttonStyle:s?"disabled":o,$buttonSizeStyle:"default",$buttonIsDanger:l};return e(ln,Object.assign({ref:n,"data-testid":d["data-testid"]||"button",disabled:s},c,d,{children:[i&&r(dn,{}),r("span",{children:a})]}))};cn.displayName="Button.Default";const un=(t,n)=>{const{children:a,disabled:s=!1,loading:i=!1,styleType:o="default",danger:l=!1}=t,d=m(t,["children","disabled","loading","styleType","danger"]),c={$buttonStyle:s?"disabled":o,$buttonSizeStyle:"small",$buttonIsDanger:l};return e(ln,Object.assign({ref:n,"data-testid":d["data-testid"]||"button",disabled:s},c,d,{children:[i&&r(dn,{}),r("span",{children:a})]}))};un.displayName="Button.Small";const hn=(t,n)=>{const{children:a,disabled:s=!1,loading:i=!1,styleType:o="default",danger:l=!1}=t,d=m(t,["children","disabled","loading","styleType","danger"]),c={$buttonStyle:s?"disabled":o,$buttonSizeStyle:"large",$buttonIsDanger:l};return e(ln,Object.assign({ref:n,"data-testid":d["data-testid"]||"button",disabled:s},c,d,{children:[i&&r(dn,{}),r("span",{children:a})]}))};hn.displayName="Button.Large";const bn={Default:n.forwardRef(cn),Small:n.forwardRef(un),Large:n.forwardRef(hn)},gn=d.button`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: ${Bt["spacing-24"]};
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
                background-color: ${$t["bg-hover-neutral"]};
            `}
    }
`,mn=n.forwardRef(((e,t)=>{var{children:n,focusHighlight:a=!0,focusOutline:s="none",type:i="button"}=e,o=m(e,["children","focusHighlight","focusOutline","type"]);return r(gn,Object.assign({ref:t,$outline:s,$highlight:a,type:i},o,{children:n}))})),yn=c`
    color: ${$t.icon};
    height: 1rem;
    width: 1rem;
`,fn=d(b)`
    ${yn}
`,pn=d(g)`
    ${yn}
`,vn=d(h)`
    ${yn}
    transition: transform 250ms ease-in-out;
    margin-left: 0.5rem;
`,xn=d.div`
    position: relative;
    width: 100%;
    display: flex;
    flex-direction: column;

    padding-top: var(--vertical-inset);
    padding-bottom: var(--vertical-inset);
`,Dn=d.div`
    display: flex;
    flex: 1;
    position: relative;
`,wn=d.div`
    isolation: isolate;
    width: 100%;

    padding-left: var(--horizontal-inset);
    padding-right: var(--horizontal-inset);
`,Fn=d.div`
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    background: ${$t.bg};

    padding-left: var(--horizontal-inset);
    padding-right: var(--horizontal-inset);

    ${e=>{if(!e.$visible)return c`
                display: none;
            `}}
`,$n=d.div`
    display: flex;
    justify-content: space-between;

    padding-left: var(--header-horizontal-inset, var(--horizontal-inset));
    padding-right: var(--header-horizontal-inset, var(--horizontal-inset));
    padding-bottom: var(--header-bottom-spacing);
`,En=d.div`
    display: flex;
`,Cn=d.button`
    border: none;
    display: flex;
    align-items: center;
    padding: 0.5rem;
    background: transparent;
    cursor: pointer;

    ${e=>!1===e.$visible?c`
                display: none;
            `:e.$expanded?c`
                ${vn} {
                    transform: rotate(180deg);
                }
            `:void 0};
`,Sn=d.span`
    ${Et["body-md-regular"]}
    color: ${$t.text};
`,Bn=d.div`
    display: flex;
`,An=d(mn)`
    margin: auto 0;
    padding: 0.75rem;

    :disabled {
        cursor: not-allowed;
    }
`,zn=d.div`
    display: flex;
    gap: 0.5rem;
    margin-top: 1.5rem;

    padding-left: var(--horizontal-inset);
    padding-right: var(--horizontal-inset);
`,Mn=d(bn.Small)`
    flex: 1;
`,kn=d.div`
    width: 100%;
    height: 100%;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(6, 2.5rem);
    align-content: center;
    justify-content: center;

    gap: 0.5rem 0;
`,On=d.div`
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: ${At.md};
    margin: 0 0.5rem;
    transition: ${Ct["duration-150"]} ${Ct["ease-default"]};

    // default styles
    ${Et["body-md-regular"]}
    border-radius: ${At.md};
    border: ${St["width-010"]} ${St.solid} transparent;
    background-clip: border-box;
    color: ${$t.text};
    cursor: default;

    // cursor style
    ${e=>e.$interactive?c`
                cursor: pointer;
            `:e.$disabledDisplay?c`
                cursor: not-allowed;
            `:void 0}

    // background, border and text styles
    ${({$variant:e,$interactive:r,$disabledDisplay:t})=>"selected-month"===e?c`
                background: ${$t["bg-selected"]};
                border-color: ${$t["border-selected"]};
                color: ${$t["text-selected"]};
                font-weight: ${Et.Spec["weight-semibold"]};

                ${r&&c`
                    &:hover {
                        background: ${$t["bg-selected-hover"]};
                        border-color: ${$t["border-selected-hover"]};
                        color: ${$t["text-selected-hover"]};
                    }
                `}
            `:"current-month"===e?c`
                color: ${$t["text-primary"]};
                font-weight: ${Et.Spec["weight-semibold"]};
            `:t?c`
                color: ${$t["text-disabled-subtlest"]};
            `:void 0}

    // hover styles
    ${({$variant:e,$interactive:r})=>{if(r)return"selected-month"===e?c`
                &:hover {
                    background: ${$t["bg-selected-hover"]};
                    border-color: ${$t["border-selected-hover"]};
                    color: ${$t["text-selected-hover"]};
                    font-weight: ${Et.Spec["weight-semibold"]};
                }
            `:c`
            &:hover {
                background: ${$t["bg-hover"]};
                color: ${$t["text-hover"]};
                font-weight: ${Et.Spec["weight-semibold"]};
            }
        `}}
`,Yn=({calendarDate:e,currentFocus:t,selectedStartDate:n,selectedEndDate:s,viewCalendarDate:i,isNewSelection:o,minDate:l,maxDate:d,allowDisabledSelection:c,onMonthSelect:u})=>{const h=a((()=>Nt.generateMonths(Ot(e))),[e]),b=e=>{const r="start"===t&&s&&e.isAfter(s,"month")&&o,a="end"===t&&n&&e.isBefore(n,"month")&&o;return!(!r&&!a)},g=e=>{const r=e.format("MMMM"),t=(n=e,!Nt.isWithinRange(n,l?Ot(l):void 0,d?Ot(d):void 0,"month"));var n;const a=i.isSame(e,"month")?"selected-month":Ot().isSame(e,"month")?"current-month":"default";return{disabledDisplay:t||b(e),interactive:!t||c,month:r,variant:a}};return h.length?r(kn,{children:h.map((e=>{const{disabledDisplay:t,interactive:n,variant:a,month:s}=g(e);return r(On,{$variant:a,$disabledDisplay:t,$interactive:n,onClick:()=>((e,r)=>{r||u(e)})(e,!n),children:s},s)}))}):null},_n=d.div`
    width: 100%;
    height: 100%;
    display: grid;
    align-content: center;
    align-items: center;
    grid-template-columns: repeat(3, 1fr);
`,Tn=d.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 1rem 0.5rem;
    transition: ${Ct["duration-150"]} ${Ct["ease-default"]};
    padding: 0.5rem;

    // default styles
    ${Et["body-md-regular"]}
    border-radius: ${At.md};
    border: ${St["width-010"]} ${St.solid} transparent;
    background-clip: border-box;
    color: ${$t.text};
    cursor: default;

    // cursor style
    ${({$interactive:e,$disabledDisplay:r})=>e?c`
                cursor: pointer;
            `:r?c`
                cursor: not-allowed;
            `:void 0}

    // background, border and text styles
    ${({$variant:e,$interactive:r,$disabledDisplay:t})=>"selected-year"===e?c`
                background: ${$t["bg-selected"]};
                border-color: ${$t["border-selected"]};
                color: ${$t["text-selected"]};
                font-weight: ${Et.Spec["weight-semibold"]};

                ${r&&c`
                    &:hover {
                        background: ${$t["bg-selected-hover"]};
                        border-color: ${$t["border-selected-hover"]};
                        color: ${$t["text-selected-hover"]};
                    }
                `}
            `:"current-year"===e?c`
                color: ${$t["text-primary"]};
                font-weight: ${Et.Spec["weight-semibold"]};
            `:"other-decade"===e||t?c`
                color: ${$t["text-disabled-subtlest"]};
            `:void 0}

    // hover styles
    ${({$variant:e,$interactive:r})=>{if(r)return"selected-year"===e?c`
                &:hover {
                    background: ${$t["bg-selected-hover"]};
                    border-color: ${$t["border-selected-hover"]};
                    color: ${$t["text-selected-hover"]};
                    font-weight: ${Et.Spec["weight-semibold"]};
                }
            `:c`
            &:hover {
                background: ${$t["bg-hover"]};
                color: ${$t["text-hover"]};
                font-weight: ${Et.Spec["weight-semibold"]};
            }
        `}}
`,jn=({calendarDate:e,currentFocus:t,selectedStartDate:n,selectedEndDate:s,viewCalendarDate:i,isNewSelection:o,minDate:l,maxDate:d,allowDisabledSelection:c,onYearSelect:u})=>{const h=a((()=>Nt.generateDecadeOfYears(Ot(e))),[e]),b=e=>{const r="start"===t&&s&&e.isAfter(s,"year")&&o,a="end"===t&&n&&e.isBefore(n,"year")&&o;return!(!r&&!a)},g=e=>{const r=[0,11].includes(h.indexOf(e)),t=e.year(),n=(a=e,!Nt.isWithinRange(a,l?Ot(l):void 0,d?Ot(d):void 0,"year"));var a;const s=r?"other-decade":i.isSame(e,"year")?"selected-year":Ot().isSame(e,"year")?"current-year":"default";return{disabledDisplay:n||b(e),interactive:!n||c,year:t,variant:s}};return h.length?r(_n,{children:h.map((e=>{const{disabledDisplay:t,interactive:n,variant:a,year:s}=g(e);return r(Tn,{$variant:a,$disabledDisplay:t,$interactive:!!n,onClick:()=>((e,r)=>{r||u(e)})(e,!n),children:s},s)}))}):null},Ln=n.forwardRef(((n,a)=>{var{children:d,initialCalendarDate:c,minDate:u,maxDate:h,currentFocus:b,selectedStartDate:g,selectedEndDate:y,selectWithinRange:f,dynamicHeight:p=!1,allowDisabledSelection:v,onCalendarDateChange:x,withButton:D,doneButtonDisabled:w,onDismiss:F,showNavigationHeader:$=!0,getLeftArrowDate:E,getRightArrowDate:C,isLeftArrowDisabled:S,isRightArrowDisabled:B,getMonthHeaderLabel:A,getYearHeaderLabel:z}=n,M=m(n,["children","initialCalendarDate","minDate","maxDate","currentFocus","selectedStartDate","selectedEndDate","selectWithinRange","dynamicHeight","allowDisabledSelection","onCalendarDateChange","withButton","doneButtonDisabled","onDismiss","showNavigationHeader","getLeftArrowDate","getRightArrowDate","isLeftArrowDisabled","isRightArrowDisabled","getMonthHeaderLabel","getYearHeaderLabel"]);const[k,O]=s(Gt.toDayjs(c)),[Y,_]=s(Gt.toDayjs(c)),[T,j]=s("default"),L=i(null),R=i(null),H=i(null);o(a,(()=>({defaultView(){j("default")},resetView(){const e=Gt.toDayjs(c);O(e),_(e),j("default")},setCalendarDate(e){const r=Gt.toDayjs(e);O(r),_(r)}}))),l((()=>{const e=Gt.toDayjs(c);O(e),_(e)}),[c]),l((()=>{U(Y)}),[Y]);const W=()=>{var e;"month-options"!==T?(j("month-options"),null===(e=H.current)||void 0===e||e.focus()):(j("default"),O(Y))},I=()=>{"default"!==T?(j("default"),O(Y)):j("year-options")},N=()=>{var e;null===(e=H.current)||void 0===e||e.focus();const r=E?E(k):k.subtract(1,"month");switch(T){case"default":_(r),O(r);break;case"month-options":O((e=>e.subtract(1,"year")));break;case"year-options":O((e=>e.subtract(10,"year")))}},P=()=>{var e;null===(e=H.current)||void 0===e||e.focus();const r=C?C(k):k.add(1,"month");switch(T){case"default":_(r),O(r);break;case"month-options":O((e=>e.add(1,"year")));break;case"year-options":O((e=>e.add(10,"year")))}},V=e=>{O(e),_(e),D||j("default")},Z=()=>{const e=Gt.toDayjs(c);O(e),_(e),"default"===T?J("reset"):j("default")},U=e=>{x&&x(e)},J=e=>{F&&F(e)},X=()=>{if(!u||v)return!1;const e=Ot(u);return"month-options"===T?!Nt.isPreviousYearWithinRange(k,e):"year-options"===T?!Nt.isPreviousDecadeWithinRange(k,e):S?S(k):!Nt.isPreviousMonthWithinRange(k,e)},q=()=>{if(!h||v)return!1;const e=Ot(h);return"month-options"===T?!Nt.isNextYearWithinRange(k,e):"year-options"===T?!Nt.isNextDecadeWithinRange(k,e):B?B(k):!Nt.isNextMonthWithinRange(k,e)},G=()=>{if("year-options"===T){const{beginDecade:e,endDecade:r}=Nt.getStartEndDecade(k);return`${e} to ${r}`}return z?z(k):k.format("YYYY")},Q=()=>{const n=A?A(k):k.format("MMM");return e(t,{children:[e(Cn,{type:"button",tabIndex:-1,$expanded:"month-options"===T,$visible:"default"===T,id:"month-dropdown",onClick:W,children:[r(Sn,{children:n}),r(vn,{})]}),e(Cn,{type:"button",tabIndex:-1,$expanded:"default"!==T,id:"year-dropdown",onClick:I,children:[r(Sn,{children:G()}),r(vn,{})]})]})},K=()=>{switch(T){case"month-options":return r(Yn,{calendarDate:k,currentFocus:b,minDate:u,maxDate:h,selectedStartDate:g,selectedEndDate:y,viewCalendarDate:Y,isNewSelection:!!f,onMonthSelect:V,allowDisabledSelection:v});case"year-options":return r(jn,{calendarDate:k,currentFocus:b,minDate:u,maxDate:h,selectedStartDate:g,selectedEndDate:y,viewCalendarDate:Y,isNewSelection:!!f,onYearSelect:V,allowDisabledSelection:v});default:return null}};return e(xn,Object.assign({ref:H,"data-id":"calendar-container","data-testid":"calendar-container"},M,{children:[$&&e($n,{"data-id":"calendar-header","data-testid":"calendar-header",children:[r(En,{children:Q()}),e(Bn,{children:[r(An,{"aria-label":"Previous month","data-testid":"left-arrow-btn",disabled:X(),focusHighlight:!1,tabIndex:-1,onClick:N,children:r(fn,{})}),r(An,{"aria-label":"Next month","data-testid":"right-arrow-btn",disabled:q(),focusHighlight:!1,tabIndex:-1,onClick:P,children:r(pn,{})})]})]}),r(Dn,{children:(()=>{const n="function"==typeof d?d({calendarDate:Y,currentView:T}):d;return e(t,p?{children:["default"===T&&n,K()]}:{children:[r(wn,{children:n}),r(Fn,{$visible:"default"!==T,children:K()})]})})()}),(()=>{if(!D)return;const t=!!("default"===T)&&w;return e(zn,{children:[r(Mn,{ref:R,"data-testid":"cancel-button",styleType:"light",type:"button",onClick:Z,children:"Cancel"}),r(Mn,{"data-testid":"done-button",ref:L,type:"button",onClick:()=>{t||(O(Y),"default"===T?J("confirmed"):j("default"))},disabled:t,children:"Done"})]})})()]}))})),Rn=d.div`
    width: 100%;
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    row-gap: 0.25rem;
`,Hn=d.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 2.5rem;
    pointer-events: none;
    user-select: none;

    ${Et["body-sm-semibold"]};
    color: ${$t.text};
`,Wn=d.div`
    grid-column: 1 / -1;
    display: flex;
`,In=e=>{let r=$t.bg,t="transparent";switch(e.$type){case"hover-subtle":r=$t["bg-hover"],t=$t["bg-hover"];break;case"hover":r=$t["bg-hover-strong"],t=$t["bg-hover-strong"];break;case"hover-outline":r=$t["bg-hover-subtle"],t=$t["border-hover"];break;case"selected-outline":r=$t["bg-selected"],t=$t["border-selected"];break;case"selected-outline-subtle":r=$t["bg-selected"],t=$t["border-selected-subtle"];break;case"selected-hover":r=$t["bg-selected-hover"];break;case"selected-hover-outline":r=$t["bg-selected-hover"],t=$t["border-selected-hover"]}return{color:r,borderColor:t}},Nn=d.div`
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    width: 100%;
    height: 2.5rem;
`,Pn=d.div`
    position: absolute;
    height: 2.5rem;
    width: 50%;
    transition: ${Ct["duration-150"]} ${Ct["ease-default"]};
    border: ${St["width-010"]} ${St.solid} transparent;
    border-left: none;
    border-right: none;

    ${e=>{if(!e.$type)return;const{color:r,borderColor:t}=In(e);return c`
            background-color: ${r};
            background-clip: border-box;
            border-top-color: ${t};
            border-bottom-color: ${t};
        `}}
`,Vn=d(Pn)`
    left: 0;
`,Zn=d(Pn)`
    right: 0;
`,Un=d.div`
    position: absolute;
    z-index: 1;

    display: flex;
    align-items: center;
    justify-content: center;
    height: 2.5rem;
    width: 2.5rem;
    transition: ${Ct["duration-150"]} ${Ct["ease-default"]};

    border: ${St["width-010"]} ${St.solid} transparent;
    border-radius: ${At.md};

    ${e=>{if(e.$type){const{color:r,borderColor:t}=In(e);return c`
                background-color: ${r};
                background-clip: content-box;
                border-color: ${t};
            `}}}
`,Jn=d(Un)`
    right: calc(50% - 1.25rem);
    clip-path: inset(-3px 1.25rem -3px -3px);
`,Xn=d(Un)`
    left: calc(50% - 1.25rem);
    clip-path: inset(-3px -3px -3px 1.25rem);
`,qn=d.div`
    position: absolute;
    top: 0;
    bottom: 0;
    z-index: 2;

    display: flex;
    align-items: center;
    justify-content: center;
    height: 2.5rem;
    width: 2.5rem;
    ${Et["body-md-regular"]}
    transition: ${Ct["duration-150"]} ${Ct["ease-default"]};

    cursor: ${e=>e.$interactive?"pointer":null===e.$interactive?"default":"not-allowed"};

    ${e=>{const{$disabled:r,$type:t}=e;if(r)return"hidden"===t?c`
                    visibility: hidden;
                `:c`
                color: ${$t["text-disabled-subtlest"]};
            `;switch(t){case"selected":return c`
                    font-weight: ${Et.Spec["weight-semibold"]};
                    color: ${$t["text-selected"]};
                `;case"selected-hover":return c`
                    font-weight: ${Et.Spec["weight-semibold"]};
                    color: ${$t["text-selected-hover"]};
                `;case"current":return c`
                    font-weight: ${Et.Spec["weight-semibold"]};
                    color: ${$t["text-primary"]};
                `;case"hover":return c`
                    font-weight: ${Et.Spec["weight-semibold"]};
                    color: ${$t["text-hover"]};
                `;case"unavailable":return c`
                    color: ${$t["text-disabled-subtlest"]};
                `;case"hidden":return c`
                    visibility: hidden;
                `;default:return c`
                    color: ${$t.text};
                `}}}
`,Gn=d.div`
    position: absolute;
    width: 4px;
    height: 4px;
    background-color: currentColor;
    border-radius: 50%;
    bottom: 4px;
`,Qn=({bgLeft:t,bgRight:n,circleLeft:a,circleRight:s,labelType:i,disabled:o,interactive:l,currentDateIndicator:d,date:c,onSelect:u,onHover:h,onHoverEnd:b})=>{const g=Ot().isSame(c,"day");return e(Nn,{children:[r(Vn,{$type:t}),r(Jn,{$type:a}),r(Zn,{$type:n}),r(Xn,{$type:s}),e(qn,{$type:i,$disabled:o,$interactive:l,onClick:()=>{u(c)},onMouseEnter:()=>{h(c)},onMouseLeave:()=>{b&&b(c)},children:[c.date(),d&&g&&r(Gn,{$disabled:o})]})]})},Kn=({date:e,calendarDate:t,startDate:n,endDate:a,currentFocus:s,hoverDate:i,minDate:o,maxDate:l,disabledDates:d,allowDisabledSelection:c,isNewSelection:u,showActiveMonthDaysOnly:h,onSelect:b,onHover:g})=>{const m=Nt.isDisabledDay(e,d,o,l),y=!m||c,f=()=>{const e=Ot(i),r=e.isBefore(a,"day"),t=e.isAfter(n,"day");let o,l,d,c;return"start"===s&&a&&r&&(n&&t?(d=i,c=a):(o=i,l=n||a)),"end"===s&&n&&t&&(a&&r?(d=n,c=i):(o=a||n,l=i)),{hoverStart:o,hoverEnd:l,overlapStart:d,overlapEnd:c}},p={date:e,calendarDate:t,disabled:m,interactive:y,currentDateIndicator:!0,onSelect:()=>{b(e,!y)},onHover:()=>{g(e.format("YYYY-MM-DD"),!y)}};return r(Qn,Object.assign({},p,(()=>{const r={};if(t.month()!==e.month())r.labelType=h?"hidden":"unavailable";else if(Ot().isSame(e,"day")&&!m)r.labelType="current";else if(u){const t="end"===s&&n&&e.isBefore(n),i="start"===s&&a&&e.isAfter(a);(t||i)&&(r.labelType="unavailable")}return r})(),(()=>{const r={},s=e.isSame(n,"day"),i=e.isSame(a,"day");return h&&t.month()!==e.month()?(r.labelType="hidden",r):((n&&s||a&&i)&&(r.labelType="selected",r.circleLeft="selected-outline",r.circleRight="selected-outline"),n&&a&&e.isBetween(n,a,"day","[]")&&(r.labelType="selected",s||(r.bgLeft="selected-outline-subtle"),i||(r.bgRight="selected-outline-subtle")),r)})(),(()=>{if(!i)return{};const r={},t=e.isSame(i,"day"),{hoverStart:s,hoverEnd:o,overlapStart:l,overlapEnd:d}=f();if(t){const t=e.isSame(n,"day"),s=e.isSame(a,"day");t||s?(r.labelType="selected-hover",r.circleLeft="selected-hover-outline",r.circleRight="selected-hover-outline"):(r.labelType="hover",r.circleLeft="hover",r.circleRight="hover")}if(s&&o){if(e.isBetween(s,o,"day","[]")){const t=e.isSame(s,"day"),n=e.isSame(o,"day");t||(r.labelType="hover",r.bgLeft="hover-outline"),n||(r.labelType="hover",r.bgRight="hover-outline")}return r}return l&&d?(e.isBetween(l,d,"day","[]")&&t&&(r.labelType="selected-hover",r.circleLeft="selected-hover",r.circleRight="selected-hover"),r):r})()))};Ot.extend(jt);const ea=({calendarDate:t,currentFocus:n,disabledDates:i,selectedStartDate:o,selectedEndDate:l,onSelect:d,onHover:c,isNewSelection:u,minDate:h,maxDate:b,allowDisabledSelection:g,showActiveMonthDaysOnly:m})=>{const y=a((()=>Nt.generateDays(t)),[t]),[f,p]=s(""),v=(e,r)=>{r&&!g||d(e)},x=(e,r)=>{r&&!g||(p(e),c(e))},D=()=>{p(""),c("")};return e(Rn,{"data-testid":"calendar-content",children:[y[0].map(((e,t)=>r(Hn,{children:Ot(e).format("ddd")},`week-day-${t}`))),y.map(((e,a)=>r(Wn,{onMouseLeave:D,children:e.map(((e,a)=>r(Kn,{date:e,calendarDate:t,startDate:o,endDate:l,hoverDate:f,currentFocus:n,minDate:h,maxDate:b,disabledDates:i,allowDisabledSelection:g,isNewSelection:u,showActiveMonthDaysOnly:m,onSelect:v,onHover:x},`day-${a}`)))},a)))]})},ra=({date:e,calendarDate:t,selectedDate:n,hoverDate:a,minDate:s,maxDate:i,disabledDates:o,allowDisabledSelection:l,numberOfDays:d=1,onSelect:c,onHover:u})=>{const h=Nt.isDisabledDay(e,o,s,i),b=!h||l,{start:g,end:m}=n?Nt.getFixedRangeStartEnd(Gt.toDayjs(n),d):{start:void 0,end:void 0},{start:y,end:f}=a?Nt.getFixedRangeStartEnd(Gt.toDayjs(a),d):{start:void 0,end:void 0},p=!!n&&e.isBetween(g,m,"day","[]"),v=!!a&&e.isBetween(y,f,"day","[]"),x=p&&e.isSame(g,"day")||v&&e.isSame(y,"day"),D=p&&e.isSame(m,"day")||v&&e.isSame(f,"day"),w=(e,r,t,n)=>{t?e.circleLeft=r:e.bgLeft=r,n?e.circleRight=r:e.bgRight=r},F={date:e,calendarDate:t,disabled:h,interactive:b,currentDateIndicator:!0,onSelect:()=>{c(e,!b)},onHover:()=>{u(e.format("YYYY-MM-DD"),!b)}};return r(Qn,Object.assign({},F,(()=>{const r={};return p||v?r.labelType="selected":t.month()!==e.month()?r.labelType="unavailable":Ot().isSame(e,"day")&&!h&&(r.labelType="current"),r})(),(()=>{const r={},t=e.format("YYYY-MM-DD");return v&&w(r,"hover",t===y,t===f),p&&w(r,"selected-outline",t===g,t===m),p&&v&&(w(r,"selected-hover-outline",x,D),t===y&&t!==g&&(r.circleLeft="selected-hover")),r})()))},ta=({calendarDate:t,disabledDates:n,selectedStartDate:i,onSelect:o,onHover:l,minDate:d,maxDate:c,allowDisabledSelection:u,numberOfDays:h})=>{const b=a((()=>Nt.generateDays(t)),[t]),[g,m]=s(""),y=(e,r)=>{r&&!u||(o(e),e&&!Ot(e).isSame(e,"month")&&m(""))},f=(e,r)=>{r&&!u||(m(e),l(e))},p=()=>{m(""),l("")};return e(Rn,{"data-testid":"calendar-content",children:[b[0].map(((e,t)=>r(Hn,{children:Ot(e).format("ddd")},`week-day-${t}`))),b.map(((e,a)=>r(Wn,{onMouseLeave:p,children:e.map(((e,a)=>r(ra,{date:e,calendarDate:t,selectedDate:i,hoverDate:g,minDate:d,maxDate:c,disabledDates:n,allowDisabledSelection:u,onSelect:y,onHover:f,numberOfDays:h},`day-${a}`)))},a)))]})},na=d.div`
    width: 100%;
    background: ${$t.bg};
`,aa=({date:e,calendarDate:t,selectedDate:n,hoverDate:a,minDate:s,maxDate:i,disabledDates:o,allowDisabledSelection:l,showActiveMonthDaysOnly:d,onSelect:c,onHover:u})=>{const h=Nt.isDisabledDay(e,o,s,i),b=!h||l,g={date:e,calendarDate:t,disabled:h,interactive:b,currentDateIndicator:!0,onSelect:()=>{c(e,!b)},onHover:()=>{u(e.format("YYYY-MM-DD"),!b)}};return r(Qn,Object.assign({},g,(()=>{const r={};t.month()!==e.month()?r.labelType=d?"hidden":"unavailable":Ot().isSame(e,"day")&&!h&&(r.labelType="current");const s=e.isSame(n,"day"),i=e.isSame(a,"day");return s&&i?(r.labelType="selected-hover",r.circleLeft="selected-hover-outline",r.circleRight="selected-hover-outline"):s?(r.labelType="selected",r.circleLeft="selected-outline",r.circleRight="selected-outline"):i&&(r.labelType="hover",r.circleLeft="hover-subtle",r.circleRight="hover-subtle"),r})()))};Ot.extend(jt);const sa=({calendarDate:t,disabledDates:n,selectedDate:i,onSelect:o,onHover:l,minDate:d,maxDate:c,allowDisabledSelection:u,showActiveMonthDaysOnly:h})=>{const b=a((()=>Nt.generateDays(t)),[t]),[g,m]=s(""),y=(e,r)=>{r&&!u||o(e)},f=(e,r)=>{r&&!u||(m(e),l(e))},p=()=>{m(""),l("")};return e(Rn,{"data-testid":"calendar-content",children:[b[0].map(((e,t)=>r(Hn,{children:Ot(e).format("ddd")},`week-day-${t}`))),b.map(((e,a)=>r(Wn,{onMouseLeave:p,children:e.map(((e,a)=>r(aa,{date:e,calendarDate:t,selectedDate:i,hoverDate:g,minDate:d,maxDate:c,disabledDates:n,allowDisabledSelection:u,showActiveMonthDaysOnly:h,onSelect:y,onHover:f},`day-${a}`)))},a)))]})},ia=({date:e,calendarDate:t,selectedDate:n,hoverDate:a,minDate:s,maxDate:i,disabledDates:o,allowDisabledSelection:l,onSelect:d,onHover:c})=>{const u=Nt.isDisabledDay(e,o,s,i),h=!u||l,{start:b,end:g}=Nt.getWeekStartEnd(Gt.toDayjs(n)),{start:m,end:y}=Nt.getWeekStartEnd(Gt.toDayjs(a)),f=n&&e.isBetween(b,g,"day","[]"),p=a&&e.isBetween(m,y,"day","[]"),v=f&&e.isSame(b)||p&&e.isSame(m),x=f&&e.isSame(g)||p&&e.isSame(y),D={date:e,calendarDate:t,disabled:u,interactive:h,currentDateIndicator:!0,onSelect:()=>{d(e,!h)},onHover:()=>{c(e.format("YYYY-MM-DD"),!h)}};return r(Qn,Object.assign({},D,(()=>{const r={};return t.month()!==e.month()?r.labelType="unavailable":Ot().isSame(e,"day")&&!u&&(r.labelType="current"),r})(),(()=>{const e={};let r,t;return f&&p?(r="selected-hover-outline",t="selected-hover"):f?(r="selected-outline",t="selected"):p&&(r="hover",t="hover"),r&&(e.labelType=t,v?e.circleLeft=r:e.bgLeft=r,x?e.circleRight=r:e.bgRight=r),e})()))},oa=({calendarDate:t,disabledDates:n,selectedStartDate:i,onSelect:o,onHover:l,minDate:d,maxDate:c,allowDisabledSelection:u})=>{const h=a((()=>Nt.generateDays(t)),[t]),[b,g]=s(""),m=(e,r)=>{if(r&&!u)return;const t=e.startOf("week");o(t),e&&!Ot(e).isSame(t,"month")&&g("")},y=(e,r)=>{r&&!u||(g(e),l(e))},f=()=>{g(""),l("")};return e(Rn,{"data-testid":"calendar-content",children:[h[0].map(((e,t)=>r(Hn,{children:Ot(e).format("ddd")},`week-day-${t}`))),h.map(((e,a)=>r(Wn,{onMouseLeave:f,children:e.map(((e,a)=>r(ia,{date:e,calendarDate:t,selectedDate:i,hoverDate:b,minDate:d,maxDate:c,disabledDates:n,allowDisabledSelection:u,onSelect:m,onHover:y},`day-${a}`)))},a)))]})},la=n.forwardRef((({disabledDates:e,onYearMonthDisplayChange:t,onSelect:n,onHover:a,onDismiss:s,value:l,endValue:d,currentFocus:c,withButton:u,variant:h,minDate:b,maxDate:g,allowDisabledSelection:m,selectWithinRange:y=!0,initialCalendarDate:f,numberOfDays:p,showActiveMonthDaysOnly:v=!1},x)=>{const D=i(null),w=i(void 0);o(x,(()=>({reset(){var e;null===(e=D.current)||void 0===e||e.resetView()},setCalendarDate(e){var r;null===(r=D.current)||void 0===r||r.setCalendarDate(e)}})));const F=e=>{var r;const t=e.format("YYYY-MM-DD");null===(r=D.current)||void 0===r||r.setCalendarDate(t),E(t)},$=e=>{C(e)},E=e=>{n&&n(e)},C=e=>{a&&a(e)},S=e=>{if(t){const r={month:e.month()+1,year:e.year()};t(r)}};return r(na,{children:r(Ln,{ref:D,withButton:u,doneButtonDisabled:(()=>{if(!u)return;let e=!0;switch(h){case"single":e=!1;break;case"range":case"fixed-range":e=!!l!=!!d;break;case"week":e=!l&&!d}return e})(),onDismiss:s,minDate:b,maxDate:g,selectWithinRange:y,currentFocus:c,selectedStartDate:l,selectedEndDate:d,allowDisabledSelection:m,onCalendarDateChange:e=>{w.current&&w.current.isSame(e,"month")||S(e),w.current=e},initialCalendarDate:f,children:({calendarDate:t})=>(t=>{switch(h){case"week":return r(oa,{calendarDate:t,disabledDates:e,selectedStartDate:l,minDate:b,maxDate:g,allowDisabledSelection:m,onSelect:F,onHover:$});case"fixed-range":return r(ta,{calendarDate:t,disabledDates:e,selectedStartDate:l,minDate:b,maxDate:g,allowDisabledSelection:m,onSelect:F,onHover:$,numberOfDays:p});case"single":return r(sa,{calendarDate:t,disabledDates:e,selectedDate:l,minDate:b,maxDate:g,allowDisabledSelection:m,showActiveMonthDaysOnly:v,onSelect:F,onHover:$});default:return r(ea,{calendarDate:t,currentFocus:c,disabledDates:e,selectedStartDate:l,selectedEndDate:d,minDate:b,maxDate:g,isNewSelection:y,allowDisabledSelection:m,showActiveMonthDaysOnly:v,onSelect:F,onHover:$})}})(t)})})}));n.forwardRef(((e,t)=>{var{width:n}=e,a=m(e,["width"]);return r(Mt,{$width:n,"data-testid":"calendar-dropdown",children:r(la,Object.assign({ref:t},a))})}));const da=e=>{var{className:t,styleType:n="bordered",value:a,onSelect:i}=e,o=m(e,["className","styleType","value","onSelect"]);const[d,c]=s(a);return l((()=>{c(a)}),[a]),r(ca,{className:t,$hasBorder:"bordered"===n,children:r(la,Object.assign({value:d,initialCalendarDate:d,onSelect:e=>{c(e),null==i||i(e)}},o))})},ca=d.div`
    --vertical-inset: ${Bt["spacing-24"]};
    --horizontal-inset: ${Bt["spacing-32"]};
    --header-bottom-spacing: ${Bt["spacing-8"]};

    width: 41rem;

    ${e=>{if(e.$hasBorder)return c`
                border: ${St["width-010"]} ${St.solid} ${$t.border};
                border-radius: ${At.lg};
                overflow: hidden;
            `}}
`;export{da as Calendar};
//# sourceMappingURL=index.js.map
