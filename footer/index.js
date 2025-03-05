import{jsxs as e,jsx as r,Fragment as s}from"react/jsx-runtime";import n,{css as t,useTheme as a}from"styled-components";import{ExternalIcon as i}from"@lifesg/react-icons/external";import o from"react";function l(e,r){var s={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&r.indexOf(n)<0&&(s[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var t=0;for(n=Object.getOwnPropertySymbols(e);t<n.length;t++)r.indexOf(n[t])<0&&Object.prototype.propertyIsEnumerable.call(e,n[t])&&(s[n[t]]=e[n[t]])}return s}"function"==typeof SuppressedError&&SuppressedError;var d="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};function c(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var g=Array.isArray,u="object"==typeof d&&d&&d.Object===Object&&d,m="object"==typeof self&&self&&self.Object===Object&&self,h=u||m||Function("return this")(),b=h.Symbol,y=b,p=Object.prototype,x=p.hasOwnProperty,f=p.toString,F=y?y.toStringTag:void 0;var v=function(e){var r=x.call(e,F),s=e[F];try{e[F]=void 0;var n=!0}catch(e){}var t=f.call(e);return n&&(r?e[F]=s:delete e[F]),t},C=Object.prototype.toString;var $=v,w=function(e){return C.call(e)},E=b?b.toStringTag:void 0;var D=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":E&&E in Object(e)?$(e):w(e)};var B=D,A=function(e){return null!=e&&"object"==typeof e};var S=function(e){return"symbol"==typeof e||A(e)&&"[object Symbol]"==B(e)},k=g,z=S,_=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,M=/^\w*$/;var O=function(e,r){if(k(e))return!1;var s=typeof e;return!("number"!=s&&"symbol"!=s&&"boolean"!=s&&null!=e&&!z(e))||(M.test(e)||!_.test(e)||null!=r&&e in Object(r))};var j=function(e){var r=typeof e;return null!=e&&("object"==r||"function"==r)},L=D,W=j;var T,H=function(e){if(!W(e))return!1;var r=L(e);return"[object Function]"==r||"[object GeneratorFunction]"==r||"[object AsyncFunction]"==r||"[object Proxy]"==r},N=h["__core-js_shared__"],U=(T=/[^.]+$/.exec(N&&N.keys&&N.keys.IE_PROTO||""))?"Symbol(src)_1."+T:"";var V=function(e){return!!U&&U in e},Y=Function.prototype.toString;var P=H,G=V,X=j,I=function(e){if(null!=e){try{return Y.call(e)}catch(e){}try{return e+""}catch(e){}}return""},R=/^\[object .+?Constructor\]$/,J=Function.prototype,Z=Object.prototype,q=J.toString,Q=Z.hasOwnProperty,K=RegExp("^"+q.call(Q).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");var ee=function(e){return!(!X(e)||G(e))&&(P(e)?K:R).test(I(e))},re=function(e,r){return null==e?void 0:e[r]};var se=function(e,r){var s=re(e,r);return ee(s)?s:void 0},ne=se(Object,"create"),te=ne;var ae=function(){this.__data__=te?te(null):{},this.size=0};var ie=function(e){var r=this.has(e)&&delete this.__data__[e];return this.size-=r?1:0,r},oe=ne,le=Object.prototype.hasOwnProperty;var de=function(e){var r=this.__data__;if(oe){var s=r[e];return"__lodash_hash_undefined__"===s?void 0:s}return le.call(r,e)?r[e]:void 0},ce=ne,ge=Object.prototype.hasOwnProperty;var ue=ne;var me=ae,he=ie,be=de,ye=function(e){var r=this.__data__;return ce?void 0!==r[e]:ge.call(r,e)},pe=function(e,r){var s=this.__data__;return this.size+=this.has(e)?0:1,s[e]=ue&&void 0===r?"__lodash_hash_undefined__":r,this};function xe(e){var r=-1,s=null==e?0:e.length;for(this.clear();++r<s;){var n=e[r];this.set(n[0],n[1])}}xe.prototype.clear=me,xe.prototype.delete=he,xe.prototype.get=be,xe.prototype.has=ye,xe.prototype.set=pe;var fe=xe;var Fe=function(){this.__data__=[],this.size=0};var ve=function(e,r){return e===r||e!=e&&r!=r};var Ce=function(e,r){for(var s=e.length;s--;)if(ve(e[s][0],r))return s;return-1},$e=Ce,we=Array.prototype.splice;var Ee=Ce;var De=Ce;var Be=Ce;var Ae=Fe,Se=function(e){var r=this.__data__,s=$e(r,e);return!(s<0)&&(s==r.length-1?r.pop():we.call(r,s,1),--this.size,!0)},ke=function(e){var r=this.__data__,s=Ee(r,e);return s<0?void 0:r[s][1]},ze=function(e){return De(this.__data__,e)>-1},_e=function(e,r){var s=this.__data__,n=Be(s,e);return n<0?(++this.size,s.push([e,r])):s[n][1]=r,this};function Me(e){var r=-1,s=null==e?0:e.length;for(this.clear();++r<s;){var n=e[r];this.set(n[0],n[1])}}Me.prototype.clear=Ae,Me.prototype.delete=Se,Me.prototype.get=ke,Me.prototype.has=ze,Me.prototype.set=_e;var Oe=Me,je=se(h,"Map"),Le=fe,We=Oe,Te=je;var He=function(e){var r=typeof e;return"string"==r||"number"==r||"symbol"==r||"boolean"==r?"__proto__"!==e:null===e};var Ne=function(e,r){var s=e.__data__;return He(r)?s["string"==typeof r?"string":"hash"]:s.map},Ue=Ne;var Ve=Ne;var Ye=Ne;var Pe=Ne;var Ge=function(){this.size=0,this.__data__={hash:new Le,map:new(Te||We),string:new Le}},Xe=function(e){var r=Ue(this,e).delete(e);return this.size-=r?1:0,r},Ie=function(e){return Ve(this,e).get(e)},Re=function(e){return Ye(this,e).has(e)},Je=function(e,r){var s=Pe(this,e),n=s.size;return s.set(e,r),this.size+=s.size==n?0:1,this};function Ze(e){var r=-1,s=null==e?0:e.length;for(this.clear();++r<s;){var n=e[r];this.set(n[0],n[1])}}Ze.prototype.clear=Ge,Ze.prototype.delete=Xe,Ze.prototype.get=Ie,Ze.prototype.has=Re,Ze.prototype.set=Je;var qe=Ze;function Qe(e,r){if("function"!=typeof e||null!=r&&"function"!=typeof r)throw new TypeError("Expected a function");var s=function(){var n=arguments,t=r?r.apply(this,n):n[0],a=s.cache;if(a.has(t))return a.get(t);var i=e.apply(this,n);return s.cache=a.set(t,i)||a,i};return s.cache=new(Qe.Cache||qe),s}Qe.Cache=qe;var Ke=Qe;var er=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,rr=/\\(\\)?/g,sr=function(e){var r=Ke(e,(function(e){return 500===s.size&&s.clear(),e})),s=r.cache;return r}((function(e){var r=[];return 46===e.charCodeAt(0)&&r.push(""),e.replace(er,(function(e,s,n,t){r.push(n?t.replace(rr,"$1"):s||e)})),r}));var nr=function(e,r){for(var s=-1,n=null==e?0:e.length,t=Array(n);++s<n;)t[s]=r(e[s],s,e);return t},tr=g,ar=S,ir=b?b.prototype:void 0,or=ir?ir.toString:void 0;var lr=function e(r){if("string"==typeof r)return r;if(tr(r))return nr(r,e)+"";if(ar(r))return or?or.call(r):"";var s=r+"";return"0"==s&&1/r==-1/0?"-0":s},dr=lr;var cr=g,gr=O,ur=sr,mr=function(e){return null==e?"":dr(e)};var hr=S;var br=function(e,r){return cr(e)?e:gr(e,r)?[e]:ur(mr(e))},yr=function(e){if("string"==typeof e||hr(e))return e;var r=e+"";return"0"==r&&1/e==-1/0?"-0":r};var pr=function(e,r){for(var s=0,n=(r=br(r,e)).length;null!=e&&s<n;)e=e[yr(r[s++])];return s&&s==n?e:void 0};var xr=c((function(e,r,s){var n=null==e?void 0:pr(e,r);return void 0===n?s:n}));const fr=(e,r,s)=>xr(s,r)||xr(e,r),Fr=(e,r)=>{const s=r||e.defaultValue;return xr(e.collections,s)},vr={collections:{lifesg:{"brand-10":"#2C0C0B","brand-20":"#4C1513","brand-30":"#6C1D1B","brand-40":"#922825","brand-50":"#BF3431","brand-60":"#F15D5A","brand-70":"#F69491","brand-80":"#FABAB7","brand-90":"#FCD7D2","brand-95":"#FFEBE7","brand-100":"#FFF6F4","primary-10":"#001731","primary-20":"#002752","primary-30":"#003874","primary-40":"#004D9F","primary-50":"#1768BE","primary-60":"#3C91EC","primary-70":"#6CB4FF","primary-80":"#A5CDFF","primary-90":"#CFE1FE","primary-95":"#E8F0FE","primary-100":"#F7F9FF","secondary-10":"#131529","secondary-20":"#222547","secondary-30":"#2F3565","secondary-40":"#42498B","secondary-50":"#5B62A7","secondary-60":"#858CBD","secondary-70":"#A8ADCF","secondary-80":"#C6C9E0","secondary-90":"#DDDFEC","secondary-95":"#EDEEF5","secondary-100":"#F8F8FB","neutral-10":"#161616","neutral-20":"#282828","neutral-30":"#393939","neutral-40":"#4E4E4E","neutral-50":"#686868","neutral-60":"#8E8E8E","neutral-70":"#AFAFB0","neutral-80":"#C7CACA","neutral-90":"#DDE1E2","neutral-95":"#EDEFEF","neutral-100":"#F9F9F9","success-10":"#081A0F","success-20":"#0E2D1B","success-30":"#154126","success-40":"#1C5A34","success-50":"#257645","success-60":"#44A068","success-70":"#64C189","success-80":"#80DCA5","success-90":"#B4ECCB","success-95":"#D5F6E2","success-100":"#EFFCF4","warning-10":"#221302","warning-20":"#3B2204","warning-30":"#543106","warning-40":"#744408","warning-50":"#98590C","warning-60":"#D07A13","warning-70":"#E4A244","warning-80":"#F5C26C","warning-90":"#FADBA6","warning-95":"#FCECD4","warning-100":"#FDF7F0","error-10":"#330505","error-20":"#550808","error-30":"#750C0C","error-40":"#9E130F","error-50":"#CB2213","error-60":"#DE6C6C","error-70":"#E89B9B","error-80":"#EFBEBE","error-90":"#F5D9D9","error-95":"#F9ECEC","error-100":"#FCF7F7","info-10":"#021824","info-20":"#032B3F","info-30":"#053D59","info-40":"#065478","info-50":"#176E9B","info-60":"#5296BE","info-70":"#82B5DA","info-80":"#ACCFE7","info-90":"#CCE3F1","info-95":"#E3F1F8","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000","primary-inverse":"#FEAB10"},bookingsg:{"brand-10":"#2C0C0B","brand-20":"#4C1513","brand-30":"#6C1D1B","brand-40":"#922825","brand-50":"#BF3431","brand-60":"#F15D5A","brand-70":"#F69491","brand-80":"#FABAB7","brand-90":"#FCD7D2","brand-95":"#FFEBE7","brand-100":"#FFF6F4","primary-10":"#1A122C","primary-20":"#2F1F4D","primary-30":"#422D6E","primary-40":"#5B3D97","primary-50":"#7654BC","primary-60":"#9A82CD","primary-70":"#B7A7D8","primary-80":"#CFC5E5","primary-90":"#E3DDF0","primary-95":"#F0EDF7","primary-100":"#F9F8FC","secondary-10":"#0E1723","secondary-20":"#18293D","secondary-30":"#233A57","secondary-40":"#305078","secondary-50":"#4B6A8F","secondary-60":"#7B91A9","secondary-70":"#A1B1C3","secondary-80":"#C1CBD7","secondary-90":"#DBE1E8","secondary-95":"#EBEFF2","secondary-100":"#F7F8FA","neutral-10":"#161616","neutral-20":"#282828","neutral-30":"#393939","neutral-40":"#4E4E4E","neutral-50":"#686868","neutral-60":"#8E8E8E","neutral-70":"#AFAFB0","neutral-80":"#C7CACA","neutral-90":"#DDE1E2","neutral-95":"#EDEFEF","neutral-100":"#F9F9F9","success-10":"#081A0F","success-20":"#0E2D1B","success-30":"#154126","success-40":"#1C5A34","success-50":"#257645","success-60":"#44A068","success-70":"#64C189","success-80":"#80DCA5","success-90":"#B4ECCB","success-95":"#D5F6E2","success-100":"#EFFCF4","warning-10":"#221302","warning-20":"#3B2204","warning-30":"#543106","warning-40":"#744408","warning-50":"#98590C","warning-60":"#D07A13","warning-70":"#E4A244","warning-80":"#F5C26C","warning-90":"#FADBA6","warning-95":"#FCECD4","warning-100":"#FDF7F0","error-10":"#330505","error-20":"#550808","error-30":"#750C0C","error-40":"#9E130F","error-50":"#CB2213","error-60":"#DE6C6C","error-70":"#E89B9B","error-80":"#EFBEBE","error-90":"#F5D9D9","error-95":"#F9ECEC","error-100":"#FCF7F7","info-10":"#021824","info-20":"#032B3F","info-30":"#053D59","info-40":"#065478","info-50":"#176E9B","info-60":"#5296BE","info-70":"#82B5DA","info-80":"#ACCFE7","info-90":"#CCE3F1","info-95":"#E3F1F8","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000","primary-inverse":"#FEAB10"},rbs:{"brand-10":"#0E123A","brand-20":"#191E65","brand-30":"#232B90","brand-40":"#303BC5","brand-50":"#494CFF","brand-60":"#AD6EFF","brand-70":"#AEA4FF","brand-80":"#C5C4FF","brand-90":"#DDDCFF","brand-95":"#EDECFF","brand-100":"#F8F8FF","primary-10":"#10152B","primary-20":"#1C254B","primary-30":"#28356C","primary-40":"#38489A","primary-50":"#4D5AD7","primary-60":"#7487F2","primary-70":"#9AAAFC","primary-80":"#BDC7FD","primary-90":"#DADFFB","primary-95":"#ECEEFE","primary-100":"#F7F8FF","secondary-10":"#19151D","secondary-20":"#2B2533","secondary-30":"#3E3649","secondary-40":"#564A64","secondary-50":"#6F637D","secondary-60":"#948B9F","secondary-70":"#B3ACBB","secondary-80":"#CCC8D2","secondary-90":"#E1DEE4","secondary-95":"#EFEEF1","secondary-100":"#F9F8F9","neutral-10":"#161616","neutral-20":"#282828","neutral-30":"#393939","neutral-40":"#4E4E4E","neutral-50":"#686868","neutral-60":"#8E8E8E","neutral-70":"#AFAFB0","neutral-80":"#C7CACA","neutral-90":"#DDE1E2","neutral-95":"#EDEFEF","neutral-100":"#F9F9F9","success-10":"#081A0F","success-20":"#0E2D1B","success-30":"#154126","success-40":"#1C5A34","success-50":"#257645","success-60":"#44A068","success-70":"#64C189","success-80":"#80DCA5","success-90":"#B4ECCB","success-95":"#D5F6E2","success-100":"#EFFCF4","warning-10":"#221302","warning-20":"#3B2204","warning-30":"#543106","warning-40":"#744408","warning-50":"#98590C","warning-60":"#D07A13","warning-70":"#E4A244","warning-80":"#F5C26C","warning-90":"#FADBA6","warning-95":"#FCECD4","warning-100":"#FDF7F0","error-10":"#330505","error-20":"#550808","error-30":"#750C0C","error-40":"#9E130F","error-50":"#CB2213","error-60":"#DE6C6C","error-70":"#E89B9B","error-80":"#EFBEBE","error-90":"#F5D9D9","error-95":"#F9ECEC","error-100":"#FCF7F7","info-10":"#021824","info-20":"#032B3F","info-30":"#053D59","info-40":"#065478","info-50":"#176E9B","info-60":"#5296BE","info-70":"#82B5DA","info-80":"#ACCFE7","info-90":"#CCE3F1","info-95":"#E3F1F8","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000","primary-inverse":"#FEAB10"},mylegacy:{"brand-10":"#2C0C0B","brand-20":"#4C1513","brand-30":"#6C1D1B","brand-40":"#922825","brand-50":"#BF3431","brand-60":"#F15D5A","brand-70":"#F69491","brand-80":"#FABAB7","brand-90":"#FCD7D2","brand-95":"#FFEBE7","brand-100":"#FFF6F4","primary-10":"#0011924","primary-20":"#032B40","primary-30":"#043D5A","primary-40":"#05547B","primary-50":"#096EA1","primary-60":"#2098D3","primary-70":"#5CB9E8","primary-80":"#8BD3F6","primary-90":"#BEE6FA","primary-95":"#E2F2FA","primary-100":"#F4FAFC","secondary-10":"#131529","secondary-20":"#222547","secondary-30":"#2F3565","secondary-40":"#42498B","secondary-50":"#5B62A7","secondary-60":"#858CBD","secondary-70":"#A8ADCF","secondary-80":"#C6C9E0","secondary-90":"#DDDFEC","secondary-95":"#EDEEF5","secondary-100":"#F8F8FB","neutral-10":"#161616","neutral-20":"#282828","neutral-30":"#393939","neutral-40":"#4E4E4E","neutral-50":"#686868","neutral-60":"#8E8E8E","neutral-70":"#AFAFB0","neutral-80":"#C7CACA","neutral-90":"#DDE1E2","neutral-95":"#EDEFEF","neutral-100":"#F9F9F9","success-10":"#081A0F","success-20":"#0E2D1B","success-30":"#154126","success-40":"#1C5A34","success-50":"#257645","success-60":"#44A068","success-70":"#64C189","success-80":"#80DCA5","success-90":"#B4ECCB","success-95":"#D5F6E2","success-100":"#EFFCF4","warning-10":"#221302","warning-20":"#3B2204","warning-30":"#543106","warning-40":"#744408","warning-50":"#98590C","warning-60":"#D07A13","warning-70":"#E4A244","warning-80":"#F5C26C","warning-90":"#FADBA6","warning-95":"#FCECD4","warning-100":"#FDF7F0","error-10":"#330505","error-20":"#550808","error-30":"#750C0C","error-40":"#9E130F","error-50":"#CB2213","error-60":"#DE6C6C","error-70":"#E89B9B","error-80":"#EFBEBE","error-90":"#F5D9D9","error-95":"#F9ECEC","error-100":"#FCF7F7","info-10":"#021824","info-20":"#032B3F","info-30":"#053D59","info-40":"#065478","info-50":"#176E9B","info-60":"#5296BE","info-70":"#82B5DA","info-80":"#ACCFE7","info-90":"#CCE3F1","info-95":"#E3F1F8","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000","primary-inverse":"#FEAB10"},ccube:{"brand-10":"#1F1221","brand-20":"#371F3B","brand-30":"#4E2C53","brand-40":"#6B3E73","brand-50":"#8D5197","brand-60":"#FF3399","brand-70":"#FF88C4","brand-80":"#FFB3D9","brand-90":"#FFD4E9","brand-95":"#FFE8F3","brand-100":"#FFD6EB","primary-10":"#1F1221","primary-20":"#371F3B","primary-30":"#4E2C53","primary-40":"#6B3E73","primary-50":"#8D5197","primary-60":"#B07DB7","primary-70":"#C7A3CC","primary-80":"#D9C2DD","primary-90":"#E9DBEB","primary-95":"#F3ECF4","primary-100":"#FAF7FA","secondary-10":"#2D091B","secondary-20":"#4D0F2E","secondary-30":"#6B1540","secondary-40":"#931D58","secondary-50":"#C02673","secondary-60":"#FF409F","secondary-70":"#FF88C4","secondary-80":"#FFB3D9","secondary-90":"#FFD4E9","secondary-95":"#FFE8F3","secondary-100":"#FFF8FC","neutral-10":"#161616","neutral-20":"#282828","neutral-30":"#393939","neutral-40":"#4E4E4E","neutral-50":"#686868","neutral-60":"#8E8E8E","neutral-70":"#AFAFB0","neutral-80":"#C7CACA","neutral-90":"#DDE1E2","neutral-95":"#EDEFEF","neutral-100":"#F9F9F9","success-10":"#081A0F","success-20":"#0E2D1B","success-30":"#154126","success-40":"#1C5A34","success-50":"#257645","success-60":"#44A068","success-70":"#64C189","success-80":"#80DCA5","success-90":"#B4ECCB","success-95":"#D5F6E2","success-100":"#EFFCF4","warning-10":"#221302","warning-20":"#3B2204","warning-30":"#543106","warning-40":"#744408","warning-50":"#98590C","warning-60":"#D07A13","warning-70":"#E4A244","warning-80":"#F5C26C","warning-90":"#FADBA6","warning-95":"#FCECD4","warning-100":"#FDF7F0","error-10":"#330505","error-20":"#550808","error-30":"#750C0C","error-40":"#9E130F","error-50":"#CB2213","error-60":"#DE6C6C","error-70":"#E89B9B","error-80":"#EFBEBE","error-90":"#F5D9D9","error-95":"#F9ECEC","error-100":"#FCF7F7","info-10":"#021824","info-20":"#032B3F","info-30":"#053D59","info-40":"#065478","info-50":"#176E9B","info-60":"#5296BE","info-70":"#82B5DA","info-80":"#ACCFE7","info-90":"#CCE3F1","info-95":"#E3F1F8","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000","primary-inverse":"#FEAB10"},pa:{"brand-10":"#0E123A","brand-20":"#191E65","brand-30":"#232B90","brand-40":"#303BC5","brand-50":"#494CFF","brand-60":"#AD6EFF","brand-70":"#AEA4FF","brand-80":"#C5C4FF","brand-90":"#DDDCFF","brand-95":"#EDECFF","brand-100":"#F8F8FF","primary-10":"#89000B","primary-20":"#B0000E","primary-30":"#C4000F","primary-40":"#D0333F","primary-50":"#DC666F","primary-60":"#E28087","primary-70":"#E7999F","primary-80":"#EDB3B7","primary-90":"#F3CCCF","primary-95":"#F9E6E7","primary-100":"#FCF2F3","secondary-10":"#19151D","secondary-20":"#2B2533","secondary-30":"#3E3649","secondary-40":"#564A64","secondary-50":"#6F637D","secondary-60":"#948B9F","secondary-70":"#B3ACBB","secondary-80":"#CCC8D2","secondary-90":"#E1DEE4","secondary-95":"#EFEEF1","secondary-100":"#F9F8F9","neutral-10":"#000000","neutral-20":"#191919","neutral-30":"#333333","neutral-40":"#4d4d4d","neutral-50":"#666666","neutral-60":"#808080","neutral-70":"#999999","neutral-80":"#B3B3B3","neutral-90":"#E6E6E6","neutral-95":"#F7F7F7","neutral-100":"#FFFFFF","success-10":"#081A0F","success-20":"#0E2D1B","success-30":"#154126","success-40":"#1C5A34","success-50":"#257645","success-60":"#44A068","success-70":"#64C189","success-80":"#80DCA5","success-90":"#B4ECCB","success-95":"#D5F6E2","success-100":"#EFFCF4","warning-10":"#221302","warning-20":"#3B2204","warning-30":"#543106","warning-40":"#744408","warning-50":"#98590C","warning-60":"#D07A13","warning-70":"#E4A244","warning-80":"#F5C26C","warning-90":"#FADBA6","warning-95":"#FCECD4","warning-100":"#FDF7F0","error-10":"#330505","error-20":"#550808","error-30":"#750C0C","error-40":"#9E130F","error-50":"#CB2213","error-60":"#DE6C6C","error-70":"#E89B9B","error-80":"#EFBEBE","error-90":"#F5D9D9","error-95":"#F9ECEC","error-100":"#FCF7F7","info-10":"#021824","info-20":"#032B3F","info-30":"#053D59","info-40":"#065478","info-50":"#176E9B","info-60":"#5296BE","info-70":"#82B5DA","info-80":"#ACCFE7","info-90":"#CCE3F1","info-95":"#E3F1F8","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000","primary-inverse":"#FEAB10"}},defaultValue:"lifesg"},Cr=e=>r=>{var s;const n=r.theme,t=Fr(vr,null==n?void 0:n.colourScheme);return(null===(s=null==n?void 0:n.overrides)||void 0===s?void 0:s.primitiveColour)?fr(t,e,n.overrides.primitiveColour):t[e]},$r={"brand-10":Cr("brand-10"),"brand-20":Cr("brand-20"),"brand-30":Cr("brand-30"),"brand-40":Cr("brand-40"),"brand-50":Cr("brand-50"),"brand-60":Cr("brand-60"),"brand-70":Cr("brand-70"),"brand-80":Cr("brand-80"),"brand-90":Cr("brand-90"),"brand-95":Cr("brand-95"),"brand-100":Cr("brand-100"),"primary-10":Cr("primary-10"),"primary-20":Cr("primary-20"),"primary-30":Cr("primary-30"),"primary-40":Cr("primary-40"),"primary-50":Cr("primary-50"),"primary-60":Cr("primary-60"),"primary-70":Cr("primary-70"),"primary-80":Cr("primary-80"),"primary-90":Cr("primary-90"),"primary-95":Cr("primary-95"),"primary-100":Cr("primary-100"),"secondary-10":Cr("secondary-10"),"secondary-20":Cr("secondary-20"),"secondary-30":Cr("secondary-30"),"secondary-40":Cr("secondary-40"),"secondary-50":Cr("secondary-50"),"secondary-60":Cr("secondary-60"),"secondary-70":Cr("secondary-70"),"secondary-80":Cr("secondary-80"),"secondary-90":Cr("secondary-90"),"secondary-95":Cr("secondary-95"),"secondary-100":Cr("secondary-100"),"neutral-10":Cr("neutral-10"),"neutral-20":Cr("neutral-20"),"neutral-30":Cr("neutral-30"),"neutral-40":Cr("neutral-40"),"neutral-50":Cr("neutral-50"),"neutral-60":Cr("neutral-60"),"neutral-70":Cr("neutral-70"),"neutral-80":Cr("neutral-80"),"neutral-90":Cr("neutral-90"),"neutral-95":Cr("neutral-95"),"neutral-100":Cr("neutral-100"),"success-10":Cr("success-10"),"success-20":Cr("success-20"),"success-30":Cr("success-30"),"success-40":Cr("success-40"),"success-50":Cr("success-50"),"success-60":Cr("success-60"),"success-70":Cr("success-70"),"success-80":Cr("success-80"),"success-90":Cr("success-90"),"success-95":Cr("success-95"),"success-100":Cr("success-100"),"warning-10":Cr("warning-10"),"warning-20":Cr("warning-20"),"warning-30":Cr("warning-30"),"warning-40":Cr("warning-40"),"warning-50":Cr("warning-50"),"warning-60":Cr("warning-60"),"warning-70":Cr("warning-70"),"warning-80":Cr("warning-80"),"warning-90":Cr("warning-90"),"warning-95":Cr("warning-95"),"warning-100":Cr("warning-100"),"error-10":Cr("error-10"),"error-20":Cr("error-20"),"error-30":Cr("error-30"),"error-40":Cr("error-40"),"error-50":Cr("error-50"),"error-60":Cr("error-60"),"error-70":Cr("error-70"),"error-80":Cr("error-80"),"error-90":Cr("error-90"),"error-95":Cr("error-95"),"error-100":Cr("error-100"),"info-10":Cr("info-10"),"info-20":Cr("info-20"),"info-30":Cr("info-30"),"info-40":Cr("info-40"),"info-50":Cr("info-50"),"info-60":Cr("info-60"),"info-70":Cr("info-70"),"info-80":Cr("info-80"),"info-90":Cr("info-90"),"info-95":Cr("info-95"),"info-100":Cr("info-100"),white:Cr("white"),black:Cr("black"),"primary-inverse":Cr("primary-inverse")},wr={text:Cr("neutral-20"),"text-subtle":Cr("neutral-30"),"text-subtler":Cr("neutral-50"),"text-subtlest":Cr("neutral-60"),"text-primary":Cr("primary-50"),"text-hover":Cr("primary-40"),"text-selected":Cr("primary-50"),"text-selected-hover":Cr("primary-40"),"text-disabled":Cr("neutral-50"),"text-disabled-subtle":Cr("neutral-60"),"text-disabled-subtlest":Cr("neutral-80"),"text-selected-disabled":Cr("neutral-20"),"text-success":Cr("success-40"),"text-warning":Cr("warning-40"),"text-error":Cr("error-40"),"text-info":Cr("info-40"),"text-inverse":Cr("white"),icon:Cr("neutral-50"),"icon-subtle":Cr("neutral-60"),"icon-strongest":Cr("neutral-20"),"icon-primary":Cr("primary-50"),"icon-primary-subtle":Cr("primary-60"),"icon-primary-subtlest":Cr("primary-70"),"icon-hover":Cr("primary-40"),"icon-selected":Cr("primary-50"),"icon-selected-hover":Cr("primary-40"),"icon-disabled":Cr("neutral-50"),"icon-disabled-subtle":Cr("neutral-60"),"icon-selected-disabled":Cr("neutral-60"),"icon-success":Cr("success-50"),"icon-warning":Cr("warning-60"),"icon-error":Cr("error-50"),"icon-error-strong":Cr("error-40"),"icon-info":Cr("info-50"),"icon-inverse":Cr("white"),"icon-primary-inverse":Cr("primary-inverse"),border:Cr("neutral-90"),"border-strong":Cr("neutral-70"),"border-stronger":Cr("neutral-50"),"border-primary":Cr("primary-50"),"border-primary-subtle":Cr("primary-60"),"border-hover":Cr("primary-90"),"border-hover-strong":Cr("primary-60"),"border-selected":Cr("primary-50"),"border-selected-subtle":Cr("primary-70"),"border-selected-subtlest":Cr("primary-90"),"border-selected-hover":Cr("primary-40"),"border-focus":Cr("primary-60"),"border-focus-strong":Cr("primary-50"),"border-disabled":Cr("neutral-90"),"border-selected-disabled":Cr("neutral-70"),"border-success":Cr("success-60"),"border-warning":Cr("warning-60"),"border-error":Cr("error-60"),"border-error-focus":Cr("error-60"),"border-error-focus-strong":Cr("error-40"),"border-error-strong":Cr("error-40"),"border-info":Cr("info-60"),bg:Cr("white"),"bg-strong":Cr("neutral-100"),"bg-stronger":Cr("neutral-95"),"bg-strongest":Cr("neutral-90"),"bg-hover":Cr("primary-95"),"bg-hover-strong":Cr("primary-90"),"bg-hover-subtle":Cr("primary-100"),"bg-hover-neutral":Cr("neutral-100"),"bg-hover-neutral-strong":Cr("neutral-90"),"bg-selected":Cr("primary-95"),"bg-selected-hover":Cr("primary-90"),"bg-selected-strong":Cr("primary-90"),"bg-selected-stronger":Cr("primary-70"),"bg-selected-strongest":Cr("primary-50"),"bg-selected-strongest-hover":Cr("primary-40"),"bg-disabled":Cr("neutral-95"),"bg-selected-disabled":Cr("neutral-95"),"bg-selected-stronger-disabled":Cr("neutral-70"),"bg-success":Cr("success-100"),"bg-success-hover":Cr("success-95"),"bg-success-strong":Cr("success-50"),"bg-success-strong-hover":Cr("success-40"),"bg-warning":Cr("warning-100"),"bg-warning-hover":Cr("warning-95"),"bg-warning-strong":Cr("warning-50"),"bg-warning-strong-hover":Cr("warning-40"),"bg-info":Cr("info-100"),"bg-info-hover":Cr("info-95"),"bg-info-strong":Cr("info-50"),"bg-info-strong-hover":Cr("info-40"),"bg-error":Cr("error-100"),"bg-error-hover":Cr("error-95"),"bg-error-strong":Cr("error-50"),"bg-error-strong-hover":Cr("error-40"),"bg-inverse":Cr("neutral-20"),"bg-inverse-subtle":Cr("neutral-30"),"bg-inverse-subtler":Cr("neutral-50"),"bg-inverse-subtlest":Cr("neutral-60"),"bg-inverse-hover":Cr("neutral-40"),"bg-primary":Cr("primary-50"),"bg-primary-subtle":Cr("primary-60"),"bg-primary-subtler":Cr("primary-95"),"bg-primary-subtlest":Cr("primary-100"),"bg-available":"#6DD0A1","bg-primary-hover":Cr("primary-40"),"bg-primary-subtlest-hover":Cr("primary-90"),"bg-primary-subtlest-selected":Cr("primary-90"),"overlay-strong":"rgba(40, 40, 40, 0.85)","overlay-subtle":"rgba(40, 40, 40, 0.20)",hyperlink:Cr("primary-50"),"hyperlink-hover":Cr("primary-40"),"hyperlink-visited":Cr("primary-40"),"hyperlink-inverse":Cr("primary-inverse"),"focus-ring":Cr("black"),"focus-ring-inverse":Cr("white")},Er={collections:{lifesg:wr,bookingsg:wr,rbs:wr,mylegacy:wr,ccube:wr,pa:wr},defaultValue:"lifesg"},Dr=e=>r=>{var s;const n=r.theme,t=Fr(Er,null==n?void 0:n.colourScheme),a=(null===(s=null==n?void 0:n.overrides)||void 0===s?void 0:s.semanticColour)?fr(t,e,n.overrides.semanticColour):t[e];return"function"==typeof a?a(r):a},Br={text:Dr("text"),"text-subtle":Dr("text-subtle"),"text-subtler":Dr("text-subtler"),"text-subtlest":Dr("text-subtlest"),"text-primary":Dr("text-primary"),"text-hover":Dr("text-hover"),"text-selected":Dr("text-selected"),"text-selected-hover":Dr("text-selected-hover"),"text-disabled":Dr("text-disabled"),"text-disabled-subtle":Dr("text-disabled-subtle"),"text-disabled-subtlest":Dr("text-disabled-subtlest"),"text-selected-disabled":Dr("text-selected-disabled"),"text-success":Dr("text-success"),"text-warning":Dr("text-warning"),"text-error":Dr("text-error"),"text-info":Dr("text-info"),"text-inverse":Dr("text-inverse"),icon:Dr("icon"),"icon-subtle":Dr("icon-subtle"),"icon-strongest":Dr("icon-strongest"),"icon-primary":Dr("icon-primary"),"icon-primary-subtle":Dr("icon-primary-subtle"),"icon-primary-subtlest":Dr("icon-primary-subtlest"),"icon-hover":Dr("icon-hover"),"icon-selected":Dr("icon-selected"),"icon-selected-hover":Dr("icon-selected-hover"),"icon-disabled":Dr("icon-disabled"),"icon-disabled-subtle":Dr("icon-disabled-subtle"),"icon-selected-disabled":Dr("icon-selected-disabled"),"icon-success":Dr("icon-success"),"icon-warning":Dr("icon-warning"),"icon-error":Dr("icon-error"),"icon-error-strong":Dr("icon-error-strong"),"icon-info":Dr("icon-info"),"icon-inverse":Dr("icon-inverse"),"icon-primary-inverse":Dr("icon-primary-inverse"),border:Dr("border"),"border-strong":Dr("border-strong"),"border-stronger":Dr("border-stronger"),"border-primary":Dr("border-primary"),"border-primary-subtle":Dr("border-primary-subtle"),"border-hover":Dr("border-hover"),"border-hover-strong":Dr("border-hover-strong"),"border-selected":Dr("border-selected"),"border-selected-subtle":Dr("border-selected-subtle"),"border-selected-subtlest":Dr("border-selected-subtlest"),"border-selected-hover":Dr("border-selected-hover"),"border-focus":Dr("border-focus"),"border-focus-strong":Dr("border-focus-strong"),"border-disabled":Dr("border-disabled"),"border-selected-disabled":Dr("border-selected-disabled"),"border-success":Dr("border-success"),"border-warning":Dr("border-warning"),"border-error":Dr("border-error"),"border-error-focus":Dr("border-error-focus"),"border-error-focus-strong":Dr("border-error-focus-strong"),"border-error-strong":Dr("border-error-strong"),"border-info":Dr("border-info"),bg:Dr("bg"),"bg-strong":Dr("bg-strong"),"bg-stronger":Dr("bg-stronger"),"bg-strongest":Dr("bg-strongest"),"bg-hover":Dr("bg-hover"),"bg-hover-strong":Dr("bg-hover-strong"),"bg-hover-subtle":Dr("bg-hover-subtle"),"bg-hover-neutral":Dr("bg-hover-neutral"),"bg-hover-neutral-strong":Dr("bg-hover-neutral-strong"),"bg-selected":Dr("bg-selected"),"bg-selected-hover":Dr("bg-selected-hover"),"bg-selected-strong":Dr("bg-selected-strong"),"bg-selected-stronger":Dr("bg-selected-stronger"),"bg-selected-strongest":Dr("bg-selected-strongest"),"bg-selected-strongest-hover":Dr("bg-selected-strongest-hover"),"bg-disabled":Dr("bg-disabled"),"bg-selected-disabled":Dr("bg-selected-disabled"),"bg-selected-stronger-disabled":Dr("bg-selected-stronger-disabled"),"bg-success":Dr("bg-success"),"bg-success-hover":Dr("bg-success-hover"),"bg-success-strong":Dr("bg-success-strong"),"bg-success-strong-hover":Dr("bg-success-strong-hover"),"bg-warning":Dr("bg-warning"),"bg-warning-hover":Dr("bg-warning-hover"),"bg-warning-strong":Dr("bg-warning-strong"),"bg-warning-strong-hover":Dr("bg-warning-strong-hover"),"bg-info":Dr("bg-info"),"bg-info-hover":Dr("bg-info-hover"),"bg-info-strong":Dr("bg-info-strong"),"bg-info-strong-hover":Dr("bg-info-strong-hover"),"bg-error":Dr("bg-error"),"bg-error-hover":Dr("bg-error-hover"),"bg-error-strong":Dr("bg-error-strong"),"bg-error-strong-hover":Dr("bg-error-strong-hover"),"bg-inverse":Dr("bg-inverse"),"bg-inverse-subtle":Dr("bg-inverse-subtle"),"bg-inverse-subtler":Dr("bg-inverse-subtler"),"bg-inverse-subtlest":Dr("bg-inverse-subtlest"),"bg-inverse-hover":Dr("bg-inverse-hover"),"bg-primary":Dr("bg-primary"),"bg-primary-subtle":Dr("bg-primary-subtle"),"bg-primary-subtler":Dr("bg-primary-subtler"),"bg-primary-subtlest":Dr("bg-primary-subtlest"),"bg-available":Dr("bg-available"),"bg-primary-hover":Dr("bg-primary-hover"),"bg-primary-subtlest-hover":Dr("bg-primary-subtlest-hover"),"bg-primary-subtlest-selected":Dr("bg-primary-subtlest-selected"),"overlay-strong":Dr("overlay-strong"),"overlay-subtle":Dr("overlay-subtle"),hyperlink:Dr("hyperlink"),"hyperlink-hover":Dr("hyperlink-hover"),"hyperlink-visited":Dr("hyperlink-visited"),"hyperlink-inverse":Dr("hyperlink-inverse"),"focus-ring":Dr("focus-ring"),"focus-ring-inverse":Dr("focus-ring-inverse")},Ar={collections:{lifesg:{"xxs-min":0,"xxs-max":320,"xs-min":321,"xs-max":375,"sm-min":376,"sm-max":420,"md-min":421,"md-max":767,"lg-min":768,"lg-max":1023,"xl-min":1024,"xl-max":1440,"xxl-min":1441,"xxs-column":8,"xs-column":8,"sm-column":8,"md-column":8,"lg-column":12,"xl-column":12,"xxl-column":12,"xxs-gutter":16,"xs-gutter":16,"sm-gutter":16,"md-gutter":16,"lg-gutter":32,"xl-gutter":32,"xxl-gutter":32,"xxs-margin":24,"xs-margin":24,"sm-margin":24,"md-margin":24,"lg-margin":48,"xl-margin":48,"xxl-margin":48}},defaultValue:"lifesg"},Sr=e=>r=>{var s;const n=r.theme,t=Fr(Ar,null==n?void 0:n.breakpointScheme);let a;return a=(null===(s=null==n?void 0:n.overrides)||void 0===s?void 0:s.breakpoint)?fr(t,e,n.overrides.breakpoint):t[e],a},kr={"xxs-min":Sr("xxs-min"),"xxs-max":Sr("xxs-max"),"xs-min":Sr("xs-min"),"xs-max":Sr("xs-max"),"sm-min":Sr("sm-min"),"sm-max":Sr("sm-max"),"md-min":Sr("md-min"),"md-max":Sr("md-max"),"lg-min":Sr("lg-min"),"lg-max":Sr("lg-max"),"xl-min":Sr("xl-min"),"xl-max":Sr("xl-max"),"xxl-min":Sr("xxl-min"),"xxs-column":Sr("xxs-column"),"xs-column":Sr("xs-column"),"sm-column":Sr("sm-column"),"md-column":Sr("md-column"),"lg-column":Sr("lg-column"),"xl-column":Sr("xl-column"),"xxl-column":Sr("xxl-column"),"xxs-gutter":Sr("xxs-gutter"),"xs-gutter":Sr("xs-gutter"),"sm-gutter":Sr("sm-gutter"),"md-gutter":Sr("md-gutter"),"lg-gutter":Sr("lg-gutter"),"xl-gutter":Sr("xl-gutter"),"xxl-gutter":Sr("xxl-gutter"),"xxs-margin":Sr("xxs-margin"),"xs-margin":Sr("xs-margin"),"sm-margin":Sr("sm-margin"),"md-margin":Sr("md-margin"),"lg-margin":Sr("lg-margin"),"xl-margin":Sr("xl-margin"),"xxl-margin":Sr("xxl-margin")},zr=e=>("max-width"===e?["xxs","xs","sm","md","lg","xl"]:["xxs","xs","sm","md","lg","xl","xxl"]).reduce(((r,s)=>(r[s]=((e,r)=>{const s=kr["max-width"===e?`${r}-max`:`${r}-min`];return r=>{const n=s(r);return`@media screen and (${e}: ${n}px)`}})(e,s),r)),{}),_r={MaxWidth:zr("max-width"),MinWidth:zr("min-width")},Mr={"header-size-xxl":"3rem","header-size-xl":"2.5rem","header-size-lg":"2rem","header-size-md":"1.625rem","header-size-sm":"1.375rem","header-size-xs":"1.125rem","header-lh-xxl":"3.5rem","header-lh-xl":"3rem","header-lh-lg":"2.5rem","header-lh-md":"2.25rem","header-lh-sm":"1.75rem","header-lh-xs":"1.625rem","header-ls-xxl":"-0.056rem","header-ls-xl":"-0.032rem","header-ls-lg":"-0.032rem","header-ls-md":"0rem","header-ls-sm":"0rem","header-ls-xs":"0rem","weight-light":"300","weight-regular":"400","weight-semibold":"600","weight-bold":"700","font-family":"Open Sans","body-size-baseline":"1.125rem","body-size-md":"1rem","body-size-sm":"0.875rem","body-size-xs":"0.75rem","body-lh-baseline":"1.625rem","body-lh-md":"1.5rem","body-lh-sm":"1.625rem","body-lh-xs":"1.25rem","body-ls-baseline":"0rem","body-ls-md":"0.014rem","body-ls-sm":"0.012rem","body-ls-xs":"0.012rem","formlabel-size-baseline":"1rem","formlabel-size-lg":"1.125rem","formlabel-lh-baseline":"1.5rem","formlabel-lh-lg":"1.625rem","formlabel-ls-baseline":"0.014rem","formlabel-ls-lg":"0rem"},Or={collections:{lifesg:Mr,bookingsg:{"header-size-xxl":"3rem","header-size-xl":"2.5rem","header-size-lg":"2rem","header-size-md":"1.625rem","header-size-sm":"1.375rem","header-size-xs":"1.125rem","header-lh-xxl":"3.5rem","header-lh-xl":"3rem","header-lh-lg":"2.5rem","header-lh-md":"2.25rem","header-lh-sm":"1.75rem","header-lh-xs":"1.75rem","header-ls-xxl":"-0.056rem","header-ls-xl":"-0.032rem","header-ls-lg":"-0.032rem","header-ls-md":"0rem","header-ls-sm":"0rem","header-ls-xs":"0rem","weight-light":"300","weight-regular":"400","weight-semibold":"600","weight-bold":"700","font-family":"Plus Jakarta Sans","body-size-baseline":"1.125rem","body-size-md":"1rem","body-size-sm":"0.875rem","body-size-xs":"0.75rem","body-lh-baseline":"1.75rem","body-lh-md":"1.5rem","body-lh-sm":"1.6rem","body-lh-xs":"1.2rem","body-ls-baseline":"0rem","body-ls-md":"0.014rem","body-ls-sm":"0.012rem","body-ls-xs":"0.012rem","formlabel-size-baseline":"1rem","formlabel-size-lg":"1.125rem","formlabel-lh-baseline":"1.5rem","formlabel-lh-lg":"1.75rem","formlabel-ls-baseline":"0.014rem","formlabel-ls-lg":"0rem"},rbs:Mr,mylegacy:Mr,ccube:Mr,pa:{"header-size-xxl":"3rem","header-size-xl":"2.5rem","header-size-lg":"2rem","header-size-md":"1.625rem","header-size-sm":"1.375rem","header-size-xs":"1.125rem","header-lh-xxl":"3.5rem","header-lh-xl":"3rem","header-lh-lg":"2.5rem","header-lh-md":"2.25rem","header-lh-sm":"1.75rem","header-lh-xs":"1.625rem","header-ls-xxl":"-0.056rem","header-ls-xl":"-0.032rem","header-ls-lg":"-0.032rem","header-ls-md":"0rem","header-ls-sm":"0rem","header-ls-xs":"0rem","weight-light":"300","weight-regular":"400","weight-semibold":"600","weight-bold":"700","font-family":"Lato","body-size-baseline":"1.125rem","body-size-md":"1rem","body-size-sm":"0.875rem","body-size-xs":"0.75rem","body-lh-baseline":"1.625rem","body-lh-md":"1.5rem","body-lh-sm":"1.625rem","body-lh-xs":"1.25rem","body-ls-baseline":"0rem","body-ls-md":"0.014rem","body-ls-sm":"0.012rem","body-ls-xs":"0.012rem","formlabel-size-baseline":"1rem","formlabel-size-lg":"1.125rem","formlabel-lh-baseline":"1.5rem","formlabel-lh-lg":"1.625rem","formlabel-ls-baseline":"0.014rem","formlabel-ls-lg":"0rem"}},defaultValue:"lifesg"},jr=e=>r=>{var s;const n=r.theme,t=Fr(Or,null==n?void 0:n.fontScheme);return(null===(s=null==n?void 0:n.overrides)||void 0===s?void 0:s.fontSpec)?fr(t,e,n.overrides.fontSpec):t[e]},Lr={"header-size-xxl":jr("header-size-xxl"),"header-size-xl":jr("header-size-xl"),"header-size-lg":jr("header-size-lg"),"header-size-md":jr("header-size-md"),"header-size-sm":jr("header-size-sm"),"header-size-xs":jr("header-size-xs"),"header-lh-xxl":jr("header-lh-xxl"),"header-lh-xl":jr("header-lh-xl"),"header-lh-lg":jr("header-lh-lg"),"header-lh-md":jr("header-lh-md"),"header-lh-sm":jr("header-lh-sm"),"header-lh-xs":jr("header-lh-xs"),"header-ls-xxl":jr("header-ls-xxl"),"header-ls-xl":jr("header-ls-xl"),"header-ls-lg":jr("header-ls-lg"),"header-ls-md":jr("header-ls-md"),"header-ls-sm":jr("header-ls-sm"),"header-ls-xs":jr("header-ls-xs"),"weight-light":jr("weight-light"),"weight-regular":jr("weight-regular"),"weight-semibold":jr("weight-semibold"),"weight-bold":jr("weight-bold"),"font-family":jr("font-family"),"body-size-baseline":jr("body-size-baseline"),"body-size-md":jr("body-size-md"),"body-size-sm":jr("body-size-sm"),"body-size-xs":jr("body-size-xs"),"body-lh-baseline":jr("body-lh-baseline"),"body-lh-md":jr("body-lh-md"),"body-lh-sm":jr("body-lh-sm"),"body-lh-xs":jr("body-lh-xs"),"body-ls-baseline":jr("body-ls-baseline"),"body-ls-md":jr("body-ls-md"),"body-ls-sm":jr("body-ls-sm"),"body-ls-xs":jr("body-ls-xs"),"formlabel-size-baseline":jr("formlabel-size-baseline"),"formlabel-size-lg":jr("formlabel-size-lg"),"formlabel-lh-baseline":jr("formlabel-lh-baseline"),"formlabel-lh-lg":jr("formlabel-lh-lg"),"formlabel-ls-baseline":jr("formlabel-ls-baseline"),"formlabel-ls-lg":jr("formlabel-ls-lg")},Wr={collections:{lifesg:{"spacing-0":0,"spacing-4":4,"spacing-8":8,"spacing-12":12,"spacing-16":16,"spacing-20":20,"spacing-24":24,"spacing-32":32,"spacing-40":40,"spacing-48":48,"spacing-64":64,"spacing-72":72,"layout-xs":8,"layout-sm":16,"layout-md":24,"layout-lg":32,"layout-xl":48,"layout-xxl":64,"layout-xxxl":128}},defaultValue:"lifesg"},Tr=e=>r=>{var s;const n=r.theme,t=Fr(Wr,null==n?void 0:n.spacingScheme);return(null===(s=null==n?void 0:n.overrides)||void 0===s?void 0:s.spacing)?`${fr(t,e,n.overrides.spacing)}px`:`${t[e]}px`},Hr={"spacing-0":Tr("spacing-0"),"spacing-4":Tr("spacing-4"),"spacing-8":Tr("spacing-8"),"spacing-12":Tr("spacing-12"),"spacing-16":Tr("spacing-16"),"spacing-20":Tr("spacing-20"),"spacing-24":Tr("spacing-24"),"spacing-32":Tr("spacing-32"),"spacing-40":Tr("spacing-40"),"spacing-48":Tr("spacing-48"),"spacing-64":Tr("spacing-64"),"spacing-72":Tr("spacing-72"),"layout-xs":Tr("layout-xs"),"layout-sm":Tr("layout-sm"),"layout-md":Tr("layout-md"),"layout-lg":Tr("layout-lg"),"layout-xl":Tr("layout-xl"),"layout-xxl":Tr("layout-xxl"),"layout-xxxl":Tr("layout-xxxl")},Nr=(e,r,s,n)=>t`
    font-family: ${jr("font-family")};
    font-size: ${jr(e)};
    font-weight: ${jr(r)};
    line-height: ${jr(s)};
    letter-spacing: ${jr(n)};
`,Ur={"header-xxl-light":Nr("header-size-xxl","weight-light","header-lh-xxl","header-ls-xxl"),"header-xxl-regular":Nr("header-size-xxl","weight-regular","header-lh-xxl","header-ls-xxl"),"header-xxl-semibold":Nr("header-size-xxl","weight-semibold","header-lh-xxl","header-ls-xxl"),"header-xxl-bold":Nr("header-size-xxl","weight-bold","header-lh-xxl","header-ls-xxl"),"header-xl-light":Nr("header-size-xl","weight-light","header-lh-xl","header-ls-xl"),"header-xl-regular":Nr("header-size-xl","weight-regular","header-lh-xl","header-ls-xl"),"header-xl-semibold":Nr("header-size-xl","weight-semibold","header-lh-xl","header-ls-xl"),"header-xl-bold":Nr("header-size-xl","weight-bold","header-lh-xl","header-ls-xl"),"header-lg-light":Nr("header-size-lg","weight-light","header-lh-lg","header-ls-lg"),"header-lg-regular":Nr("header-size-lg","weight-regular","header-lh-lg","header-ls-lg"),"header-lg-semibold":Nr("header-size-lg","weight-semibold","header-lh-lg","header-ls-lg"),"header-lg-bold":Nr("header-size-lg","weight-bold","header-lh-lg","header-ls-lg"),"header-md-light":Nr("header-size-md","weight-light","header-lh-md","header-ls-md"),"header-md-regular":Nr("header-size-md","weight-regular","header-lh-md","header-ls-md"),"header-md-semibold":Nr("header-size-md","weight-semibold","header-lh-md","header-ls-md"),"header-md-bold":Nr("header-size-md","weight-bold","header-lh-md","header-ls-md"),"header-sm-light":Nr("header-size-sm","weight-light","header-lh-sm","header-ls-sm"),"header-sm-regular":Nr("header-size-sm","weight-regular","header-lh-sm","header-ls-sm"),"header-sm-semibold":Nr("header-size-sm","weight-semibold","header-lh-sm","header-ls-sm"),"header-sm-bold":Nr("header-size-sm","weight-bold","header-lh-sm","header-ls-sm"),"header-xs-light":Nr("header-size-xs","weight-light","header-lh-xs","header-ls-xs"),"header-xs-regular":Nr("header-size-xs","weight-regular","header-lh-xs","header-ls-xs"),"header-xs-semibold":Nr("header-size-xs","weight-semibold","header-lh-xs","header-ls-xs"),"header-xs-bold":Nr("header-size-xs","weight-bold","header-lh-xs","header-ls-xs"),"body-baseline-light":Nr("body-size-baseline","weight-light","body-lh-baseline","body-ls-baseline"),"body-baseline-regular":Nr("body-size-baseline","weight-regular","body-lh-baseline","body-ls-baseline"),"body-baseline-semibold":Nr("body-size-baseline","weight-semibold","body-lh-baseline","body-ls-baseline"),"body-baseline-bold":Nr("body-size-baseline","weight-bold","body-lh-baseline","body-ls-baseline"),"body-md-light":Nr("body-size-md","weight-light","body-lh-md","body-ls-md"),"body-md-regular":Nr("body-size-md","weight-regular","body-lh-md","body-ls-md"),"body-md-semibold":Nr("body-size-md","weight-semibold","body-lh-md","body-ls-md"),"body-md-bold":Nr("body-size-md","weight-bold","body-lh-md","body-ls-md"),"body-sm-light":Nr("body-size-sm","weight-light","body-lh-sm","body-ls-sm"),"body-sm-regular":Nr("body-size-sm","weight-regular","body-lh-sm","body-ls-sm"),"body-sm-semibold":Nr("body-size-sm","weight-semibold","body-lh-sm","body-ls-sm"),"body-sm-bold":Nr("body-size-sm","weight-bold","body-lh-sm","body-ls-sm"),"body-xs-light":Nr("body-size-xs","weight-light","body-lh-xs","body-ls-xs"),"body-xs-regular":Nr("body-size-xs","weight-regular","body-lh-xs","body-ls-xs"),"body-xs-semibold":Nr("body-size-xs","weight-semibold","body-lh-xs","body-ls-xs"),"body-xs-bold":Nr("body-size-xs","weight-bold","body-lh-xs","body-ls-xs"),"formlabel-baseline-semibold":Nr("formlabel-size-baseline","weight-semibold","formlabel-lh-baseline","formlabel-ls-baseline"),"formlabel-lg-semibold":Nr("formlabel-size-lg","weight-semibold","formlabel-lh-lg","formlabel-ls-lg")},Vr={collections:{lifesg:Ur,bookingsg:Ur,rbs:Ur,mylegacy:Ur,ccube:Ur,pa:Ur},defaultValue:"lifesg"},Yr=e=>r=>{var s;const n=r.theme,t=Fr(Vr,null==n?void 0:n.fontScheme),a=(null===(s=null==n?void 0:n.overrides)||void 0===s?void 0:s.font)?fr(t,e,n.overrides.font):t[e];return"function"==typeof a?a(r):a},Pr={"header-xxl-light":Yr("header-xxl-light"),"header-xxl-regular":Yr("header-xxl-regular"),"header-xxl-semibold":Yr("header-xxl-semibold"),"header-xxl-bold":Yr("header-xxl-bold"),"header-xl-light":Yr("header-xl-light"),"header-xl-regular":Yr("header-xl-regular"),"header-xl-semibold":Yr("header-xl-semibold"),"header-xl-bold":Yr("header-xl-bold"),"header-lg-light":Yr("header-lg-light"),"header-lg-regular":Yr("header-lg-regular"),"header-lg-semibold":Yr("header-lg-semibold"),"header-lg-bold":Yr("header-lg-bold"),"header-md-light":Yr("header-md-light"),"header-md-regular":Yr("header-md-regular"),"header-md-semibold":Yr("header-md-semibold"),"header-md-bold":Yr("header-md-bold"),"header-sm-light":Yr("header-sm-light"),"header-sm-regular":Yr("header-sm-regular"),"header-sm-semibold":Yr("header-sm-semibold"),"header-sm-bold":Yr("header-sm-bold"),"header-xs-light":Yr("header-xs-light"),"header-xs-regular":Yr("header-xs-regular"),"header-xs-semibold":Yr("header-xs-semibold"),"header-xs-bold":Yr("header-xs-bold"),"body-baseline-light":Yr("body-baseline-light"),"body-baseline-regular":Yr("body-baseline-regular"),"body-baseline-semibold":Yr("body-baseline-semibold"),"body-baseline-bold":Yr("body-baseline-bold"),"body-md-light":Yr("body-md-light"),"body-md-regular":Yr("body-md-regular"),"body-md-semibold":Yr("body-md-semibold"),"body-md-bold":Yr("body-md-bold"),"body-sm-light":Yr("body-sm-light"),"body-sm-regular":Yr("body-sm-regular"),"body-sm-semibold":Yr("body-sm-semibold"),"body-sm-bold":Yr("body-sm-bold"),"body-xs-light":Yr("body-xs-light"),"body-xs-regular":Yr("body-xs-regular"),"body-xs-semibold":Yr("body-xs-semibold"),"body-xs-bold":Yr("body-xs-bold"),"formlabel-baseline-semibold":Yr("formlabel-baseline-semibold"),"formlabel-lg-semibold":Yr("formlabel-lg-semibold")},Gr=Object.assign(Object.assign({},Br),{Primitive:$r}),Xr=Object.assign(Object.assign({},Pr),{Spec:Lr}),Ir=Hr,Rr=kr,Jr=_r,Zr=(e,r,s=!1)=>{const n=`${e}-${r.toLowerCase()}`;return t`
        ${Xr[n]}
        ${s?"margin-bottom: 1.05em;":"margin-bottom: 0;"}
    `},qr=(e,r)=>t`
    ${Zr(e,r.weight||"regular",r.paragraph)}
    ${((e=!1,r=!1)=>r?t`
            display: block;
        `:e?t`
            display: inline;
        `:t`
            display: block;
        `)(r.inline,r.paragraph)}
    color: ${Gr.text};
`;var Qr;!function(s){const a=(e,r,s)=>{const t=n(e).attrs((({inline:e})=>({as:e?"span":void 0})))`
            ${e=>qr(r,e)}
        `;return t.displayName=`Typography.${s}`,t};s.HeaderXXL=a("h1","header-xxl","HeaderXXL"),s.HeaderXL=a("h2","header-xl","HeaderXL"),s.HeaderLG=a("h3","header-lg","HeaderLG"),s.HeaderMD=a("h4","header-md","HeaderMD"),s.HeaderSM=a("h5","header-sm","HeaderSM"),s.HeaderXS=a("h6","header-xs","HeaderXS");const i=(e,r)=>{const s=n.p.attrs((({inline:e})=>({as:e?"span":void 0})))`
            ${r=>qr(e,r)}
        `;return s.displayName=`Typography.${r}`,s};s.BodyBL=i("body-baseline","BodyBL"),s.BodyMD=i("body-md","BodyMD"),s.BodySM=i("body-sm","BodySM"),s.BodyXS=i("body-xs","BodyXS");const o=(s,a)=>{const i=n.a`
            ${e=>t`
                ${Zr(s,e.weight||"regular")}
                color: ${Gr.hyperlink};
                text-decoration: none;

                :hover,
                :active,
                :focus {
                    color: ${Gr["text-hover"]};
                }
            `}
        `,o=s=>{var{external:n=!1,children:t}=s,a=l(s,["external","children"]);return e(i,Object.assign({},a,{children:[t,n&&r(Kr,{})]}))};return o.displayName=`Typography.${a}`,o};s.LinkBL=o("body-baseline","LinkBL"),s.LinkMD=o("body-md","LinkMD"),s.LinkSM=o("body-sm","LinkSM"),s.LinkXS=o("body-xs","LinkXS")}(Qr||(Qr={}));const Kr=n(i)`
    height: 1lh;
    width: 1em;
    margin-left: 0.4em;
    vertical-align: middle;
`,es=n.div`
    display: flex;
    align-items: flex-start;
    flex-direction: column;

    ${Jr.MaxWidth.lg} {
        justify-content: flex-start;
        padding: 0;
    }
`,rs=n(Qr.BodyMD)`
    margin-bottom: ${Ir["spacing-16"]};
`,ss=n.div`
    display: flex;
    align-items: flex-start;
`,ns=n.a`
    &:not(:last-child) {
        margin-right: ${Ir["spacing-32"]};
    }

    img {
        width: auto;
        height: 3rem;
        object-fit: contain;
    }

    ${Jr.MaxWidth.sm} {
        &:not(:last-child) {
            margin-right: ${Ir["spacing-16"]};
        }

        img {
            width: 100%;
            height: auto;
            object-fit: contain;
        }
    }
`,ts=()=>e(es,Object.assign({"data-testid":"download-app-section"},{children:[r(rs,Object.assign({weight:"semibold"},{children:"Download the app"})),e(ss,{children:[r(ns,Object.assign({href:"https://apps.apple.com/sg/app/moments-of-life/id1383218758",target:"_blank",rel:"noopener noreferrer",id:"footer-download-app-apple"},{children:r("img",{src:"https://assets.life.gov.sg/react-design-system/img/download/apple-app-store.png",alt:"apple-app-store"})})),r(ns,Object.assign({href:"https://play.google.com/store/apps/details?id=sg.gov.app.mol&hl=en_SG",target:"_blank",rel:"noopener noreferrer",id:"footer-download-app-android"},{children:r("img",{src:"https://assets.life.gov.sg/react-design-system/img/download/google-play-store.png",alt:"google-play-store"})}))]})]}));var as={exports:{}},is=c(as.exports=function(){var e=1e3,r=6e4,s=36e5,n="millisecond",t="second",a="minute",i="hour",o="day",l="week",d="month",c="quarter",g="year",u="date",m="Invalid Date",h=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,b=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,y={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(e){var r=["th","st","nd","rd"],s=e%100;return"["+e+(r[(s-20)%10]||r[s]||r[0])+"]"}},p=function(e,r,s){var n=String(e);return!n||n.length>=r?e:""+Array(r+1-n.length).join(s)+e},x={s:p,z:function(e){var r=-e.utcOffset(),s=Math.abs(r),n=Math.floor(s/60),t=s%60;return(r<=0?"+":"-")+p(n,2,"0")+":"+p(t,2,"0")},m:function e(r,s){if(r.date()<s.date())return-e(s,r);var n=12*(s.year()-r.year())+(s.month()-r.month()),t=r.clone().add(n,d),a=s-t<0,i=r.clone().add(n+(a?-1:1),d);return+(-(n+(s-t)/(a?t-i:i-t))||0)},a:function(e){return e<0?Math.ceil(e)||0:Math.floor(e)},p:function(e){return{M:d,y:g,w:l,d:o,D:u,h:i,m:a,s:t,ms:n,Q:c}[e]||String(e||"").toLowerCase().replace(/s$/,"")},u:function(e){return void 0===e}},f="en",F={};F[f]=y;var v="$isDayjsObject",C=function(e){return e instanceof D||!(!e||!e[v])},$=function e(r,s,n){var t;if(!r)return f;if("string"==typeof r){var a=r.toLowerCase();F[a]&&(t=a),s&&(F[a]=s,t=a);var i=r.split("-");if(!t&&i.length>1)return e(i[0])}else{var o=r.name;F[o]=r,t=o}return!n&&t&&(f=t),t||!n&&f},w=function(e,r){if(C(e))return e.clone();var s="object"==typeof r?r:{};return s.date=e,s.args=arguments,new D(s)},E=x;E.l=$,E.i=C,E.w=function(e,r){return w(e,{locale:r.$L,utc:r.$u,x:r.$x,$offset:r.$offset})};var D=function(){function y(e){this.$L=$(e.locale,null,!0),this.parse(e),this.$x=this.$x||e.x||{},this[v]=!0}var p=y.prototype;return p.parse=function(e){this.$d=function(e){var r=e.date,s=e.utc;if(null===r)return new Date(NaN);if(E.u(r))return new Date;if(r instanceof Date)return new Date(r);if("string"==typeof r&&!/Z$/i.test(r)){var n=r.match(h);if(n){var t=n[2]-1||0,a=(n[7]||"0").substring(0,3);return s?new Date(Date.UTC(n[1],t,n[3]||1,n[4]||0,n[5]||0,n[6]||0,a)):new Date(n[1],t,n[3]||1,n[4]||0,n[5]||0,n[6]||0,a)}}return new Date(r)}(e),this.init()},p.init=function(){var e=this.$d;this.$y=e.getFullYear(),this.$M=e.getMonth(),this.$D=e.getDate(),this.$W=e.getDay(),this.$H=e.getHours(),this.$m=e.getMinutes(),this.$s=e.getSeconds(),this.$ms=e.getMilliseconds()},p.$utils=function(){return E},p.isValid=function(){return!(this.$d.toString()===m)},p.isSame=function(e,r){var s=w(e);return this.startOf(r)<=s&&s<=this.endOf(r)},p.isAfter=function(e,r){return w(e)<this.startOf(r)},p.isBefore=function(e,r){return this.endOf(r)<w(e)},p.$g=function(e,r,s){return E.u(e)?this[r]:this.set(s,e)},p.unix=function(){return Math.floor(this.valueOf()/1e3)},p.valueOf=function(){return this.$d.getTime()},p.startOf=function(e,r){var s=this,n=!!E.u(r)||r,c=E.p(e),m=function(e,r){var t=E.w(s.$u?Date.UTC(s.$y,r,e):new Date(s.$y,r,e),s);return n?t:t.endOf(o)},h=function(e,r){return E.w(s.toDate()[e].apply(s.toDate("s"),(n?[0,0,0,0]:[23,59,59,999]).slice(r)),s)},b=this.$W,y=this.$M,p=this.$D,x="set"+(this.$u?"UTC":"");switch(c){case g:return n?m(1,0):m(31,11);case d:return n?m(1,y):m(0,y+1);case l:var f=this.$locale().weekStart||0,F=(b<f?b+7:b)-f;return m(n?p-F:p+(6-F),y);case o:case u:return h(x+"Hours",0);case i:return h(x+"Minutes",1);case a:return h(x+"Seconds",2);case t:return h(x+"Milliseconds",3);default:return this.clone()}},p.endOf=function(e){return this.startOf(e,!1)},p.$set=function(e,r){var s,l=E.p(e),c="set"+(this.$u?"UTC":""),m=(s={},s[o]=c+"Date",s[u]=c+"Date",s[d]=c+"Month",s[g]=c+"FullYear",s[i]=c+"Hours",s[a]=c+"Minutes",s[t]=c+"Seconds",s[n]=c+"Milliseconds",s)[l],h=l===o?this.$D+(r-this.$W):r;if(l===d||l===g){var b=this.clone().set(u,1);b.$d[m](h),b.init(),this.$d=b.set(u,Math.min(this.$D,b.daysInMonth())).$d}else m&&this.$d[m](h);return this.init(),this},p.set=function(e,r){return this.clone().$set(e,r)},p.get=function(e){return this[E.p(e)]()},p.add=function(n,c){var u,m=this;n=Number(n);var h=E.p(c),b=function(e){var r=w(m);return E.w(r.date(r.date()+Math.round(e*n)),m)};if(h===d)return this.set(d,this.$M+n);if(h===g)return this.set(g,this.$y+n);if(h===o)return b(1);if(h===l)return b(7);var y=(u={},u[a]=r,u[i]=s,u[t]=e,u)[h]||1,p=this.$d.getTime()+n*y;return E.w(p,this)},p.subtract=function(e,r){return this.add(-1*e,r)},p.format=function(e){var r=this,s=this.$locale();if(!this.isValid())return s.invalidDate||m;var n=e||"YYYY-MM-DDTHH:mm:ssZ",t=E.z(this),a=this.$H,i=this.$m,o=this.$M,l=s.weekdays,d=s.months,c=s.meridiem,g=function(e,s,t,a){return e&&(e[s]||e(r,n))||t[s].slice(0,a)},u=function(e){return E.s(a%12||12,e,"0")},h=c||function(e,r,s){var n=e<12?"AM":"PM";return s?n.toLowerCase():n};return n.replace(b,(function(e,n){return n||function(e){switch(e){case"YY":return String(r.$y).slice(-2);case"YYYY":return E.s(r.$y,4,"0");case"M":return o+1;case"MM":return E.s(o+1,2,"0");case"MMM":return g(s.monthsShort,o,d,3);case"MMMM":return g(d,o);case"D":return r.$D;case"DD":return E.s(r.$D,2,"0");case"d":return String(r.$W);case"dd":return g(s.weekdaysMin,r.$W,l,2);case"ddd":return g(s.weekdaysShort,r.$W,l,3);case"dddd":return l[r.$W];case"H":return String(a);case"HH":return E.s(a,2,"0");case"h":return u(1);case"hh":return u(2);case"a":return h(a,i,!0);case"A":return h(a,i,!1);case"m":return String(i);case"mm":return E.s(i,2,"0");case"s":return String(r.$s);case"ss":return E.s(r.$s,2,"0");case"SSS":return E.s(r.$ms,3,"0");case"Z":return t}return null}(e)||t.replace(":","")}))},p.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},p.diff=function(n,u,m){var h,b=this,y=E.p(u),p=w(n),x=(p.utcOffset()-this.utcOffset())*r,f=this-p,F=function(){return E.m(b,p)};switch(y){case g:h=F()/12;break;case d:h=F();break;case c:h=F()/3;break;case l:h=(f-x)/6048e5;break;case o:h=(f-x)/864e5;break;case i:h=f/s;break;case a:h=f/r;break;case t:h=f/e;break;default:h=f}return m?h:E.a(h)},p.daysInMonth=function(){return this.endOf(d).$D},p.$locale=function(){return F[this.$L]},p.locale=function(e,r){if(!e)return this.$L;var s=this.clone(),n=$(e,r,!0);return n&&(s.$L=n),s},p.clone=function(){return E.w(this.$d,this)},p.toDate=function(){return new Date(this.valueOf())},p.toJSON=function(){return this.isValid()?this.toISOString():null},p.toISOString=function(){return this.$d.toISOString()},p.toString=function(){return this.$d.toUTCString()},y}(),B=D.prototype;return w.prototype=B,[["$ms",n],["$s",t],["$m",a],["$H",i],["$W",o],["$M",d],["$y",g],["$D",u]].forEach((function(e){B[e[1]]=function(r){return this.$g(r,e[0],e[1])}})),w.extend=function(e,r){return e.$i||(e(r,D,w),e.$i=!0),w},w.locale=$,w.isDayjs=C,w.unix=function(e){return w(1e3*e)},w.en=F[f],w.Ls=F,w.p={},w}());const os={privacy:{href:"https://www.life.gov.sg/privacy-statement",target:"_blank",rel:"noopener"},termsOfUse:{href:"https://www.life.gov.sg/terms-of-use",target:"_blank",rel:"noopener"},reportVulnerability:{href:"https://tech.gov.sg/report_vulnerability",target:"_blank",rel:"noopener",external:!0}},ls={privacy:{href:"https://assets.life.gov.sg/bookingsg/BSG_Privacy_Policy.pdf",target:"_blank",rel:"noopener"},termsOfUse:{href:"https://assets.life.gov.sg/bookingsg/BSG_Terms_of_Use.pdf",target:"_blank",rel:"noopener"},reportVulnerability:{href:"https://tech.gov.sg/report_vulnerability",target:"_blank",rel:"noopener",external:!0}},ds={privacy:{href:"https://mylegacy.life.gov.sg/privacy-statement",target:"_blank",rel:"noopener"},termsOfUse:{href:"https://mylegacy.life.gov.sg/terms-of-use",target:"_blank",rel:"noopener"},reportVulnerability:{href:"https://tech.gov.sg/report_vulnerability",target:"_blank",rel:"noopener",external:!0}};var cs;!function(e){e.getCopyrightInfo=(e=new Date,s)=>{const n=r(s);return`${`${(new Date).getFullYear()} ${n}`} Last Updated ${is(e).format("D MMMM YYYY")}`};const r=e=>{switch(e){case"bookingsg":return"BookingSG, Government of Singapore.";case"mylegacy":return"MyLegacy@LifeSG, Government of Singapore.";case"ccube":return"Citizen Collective Common, Government of Singapore.";default:return"LifeSG, Government of Singapore."}};e.getFooterLogo=e=>{switch(e){case"bookingsg":return"https://home.booking.gov.sg/images/bookingsg/footer.svg";case"mylegacy":return"https://mylegacy.life.gov.sg/images/site-logo.png";case"ccube":return"https://assets.life.gov.sg/ccube/logo-ccube.svg";default:return"https://assets.life.gov.sg/react-design-system/img/logo/lifesg-primary-logo.svg"}},e.getDisclaimerLinks=(e,r)=>{const s=(e=>{switch(e){case"bookingsg":return ls;case"mylegacy":return ds;default:return os}})(e);return{privacy:Object.assign(Object.assign(Object.assign({},s.privacy),r&&r.privacy?r.privacy:{}),{children:"Privacy Statement"}),termsOfUse:Object.assign(Object.assign(Object.assign({},s.termsOfUse),r&&r.termsOfUse?r.termsOfUse:{}),{children:"Terms of Use"}),reportVulnerability:Object.assign(Object.assign(Object.assign({},s.reportVulnerability),r&&r.reportVulnerability?r.reportVulnerability:{}),{children:"Report Vulnerability"})}}}(cs||(cs={}));const gs=n.div`
    position: relative;

    ${e=>{const{$xxlStart:r,$xxlSpan:s,$xlStart:n,$xlSpan:a,$lgStart:i,$lgSpan:o,$mdStart:l,$mdSpan:d,$smStart:c,$smSpan:g,$xsStart:u,$xsSpan:m,$xxsStart:h,$xxsSpan:b}=e;return t`
            grid-column: ${r||"auto"} / span ${s||1};

            ${_r.MaxWidth.xl} {
                grid-column: ${n||"auto"} / span ${a||1};
            }

            ${_r.MaxWidth.lg} {
                grid-column: ${i||"auto"} / span ${o||1};
            }

            ${_r.MaxWidth.md} {
                grid-column: ${l||"auto"} / span ${d||1};
            }

            ${_r.MaxWidth.sm} {
                grid-column: ${c||"auto"} / span ${g||1};
            }

            ${_r.MaxWidth.xs} {
                grid-column: ${u||"auto"} / span ${m||1};
            }

            ${_r.MaxWidth.xxs} {
                grid-column: ${h||"auto"} / span ${b||1};
            }
        `}}
`,us=o.forwardRef(((e,s)=>{const n=a(),{xxlCols:t,xlCols:i,lgCols:o,mdCols:d,smCols:c,xsCols:g,xxsCols:u}=e,m=l(e,["xxlCols","xlCols","lgCols","mdCols","smCols","xsCols","xxsCols"]),h=(e,r,s)=>{if(!e)return{start:void 0,span:void 0};if("development"===process.env.NODE_ENV&&("number"==typeof e&&e>r?console.warn(`Warning: ${s}Cols exceeds maximum (${r}): ${e}`):Array.isArray(e)&&(e[0]>r+1||e[1]>r+1)&&console.warn(`Warning: ${s}Cols array exceeds maximum (${r}): [${e[0]}, ${e[1]}]`)),Array.isArray(e)){const[s,n]=e;if(-1===n)return{start:s,span:r-s+1};return{start:s,span:Math.min(n-s,r)}}return{start:void 0,span:Math.min(e,r)}};return r(gs,Object.assign({ref:s},(()=>{const e=kr["xxl-column"]({theme:n}),r=kr["xl-column"]({theme:n}),s=kr["lg-column"]({theme:n}),a=kr["md-column"]({theme:n}),l=kr["sm-column"]({theme:n}),m=kr["xs-column"]({theme:n}),b=kr["xxs-column"]({theme:n}),y=h(t||i||o||d||c||g||u,e,"xxl"),p=h(i||o||d||c||g||u,r,"xl"),x=h(o||d||c||g||u,s,"lg"),f=h(d||c||g||u,a,"md"),F=h(c||g||u,l,"sm"),v=h(g||u,m,"xs"),C=h(u,b,"xxs");return{$xxlStart:y.start,$xxlSpan:y.span,$xlStart:p.start,$xlSpan:p.span,$lgStart:x.start,$lgSpan:x.span,$mdStart:f.start,$mdSpan:f.span,$smStart:F.start,$smSpan:F.span,$xsStart:v.start,$xsSpan:v.span,$xxsStart:C.start,$xxsSpan:C.span}})(),m))})),ms=n.div`
    flex-grow: 1;
    margin: 0 auto;
    position: relative;
    width: auto;
    height: auto;

    ${e=>e.$stretch?t`
                padding: 0 ${Rr["xxl-margin"]}px;
            `:t`
                padding: 0 ${Rr["xxl-margin"]}px;
                max-width: 1440px;

                ${Jr.MaxWidth.xl} {
                    padding: 0 ${Rr["xl-margin"]}px;
                }

                ${Jr.MaxWidth.lg} {
                    padding: 0 ${Rr["lg-margin"]}px;
                }

                ${Jr.MaxWidth.md} {
                    padding: 0 ${Rr["md-margin"]}px;
                }

                ${Jr.MaxWidth.sm} {
                    padding: 0 ${Rr["sm-margin"]}px;
                }

                ${Jr.MaxWidth.xs} {
                    padding: 0 ${Rr["xs-margin"]}px;
                }

                ${Jr.MaxWidth.xxs} {
                    padding: 0 ${Rr["xxs-margin"]}px;
                }
            `}

    ${e=>{switch(e.$type){case"grid":return t`
                    column-gap: ${Rr["xxl-gutter"]}px;
                    display: grid;
                    grid-template-columns: repeat(
                        ${Rr["xxl-column"]},
                        minmax(0, 1fr)
                    );

                    ${Jr.MaxWidth.xl} {
                        column-gap: ${Rr["xl-gutter"]}px;
                        grid-template-columns: repeat(
                            ${Rr["xl-column"]},
                            minmax(0, 1fr)
                        );
                    }

                    ${Jr.MaxWidth.lg} {
                        column-gap: ${Rr["lg-gutter"]}px;
                        grid-template-columns: repeat(
                            ${Rr["lg-column"]},
                            minmax(0, 1fr)
                        );
                    }

                    ${Jr.MaxWidth.md} {
                        column-gap: ${Rr["md-gutter"]}px;
                        grid-template-columns: repeat(
                            ${Rr["md-column"]},
                            minmax(0, 1fr)
                        );
                    }

                    ${Jr.MaxWidth.sm} {
                        column-gap: ${Rr["sm-gutter"]}px;
                        grid-template-columns: repeat(
                            ${Rr["sm-column"]},
                            minmax(0, 1fr)
                        );
                    }

                    ${Jr.MaxWidth.xs} {
                        column-gap: ${Rr["xs-gutter"]}px;
                        grid-template-columns: repeat(
                            ${Rr["xs-column"]},
                            minmax(0, 1fr)
                        );
                    }

                    ${Jr.MaxWidth.xxs} {
                        column-gap: ${Rr["xss-gutter"]}px;
                        grid-template-columns: repeat(
                            ${Rr["xss-column"]},
                            minmax(0, 1fr)
                        );
                    }
                `;case"flex-column":return t`
                    display: flex;
                    flex-direction: column;
                `;default:return t`
                    display: flex;
                `}}}
`,hs=o.forwardRef(((e,s)=>{const{children:n,"data-testid":t="container",type:a="flex",stretch:i=!1}=e,o=l(e,["children","data-testid","type","stretch"]);return r(ms,Object.assign({ref:s,"data-testid":t,$type:a,$stretch:i},o,{children:n}))})),bs=o.forwardRef(((e,s)=>{const{children:n,"data-testid":t="section",stretch:a=!1}=e,i=l(e,["children","data-testid","stretch"]);return r(ys,Object.assign({ref:s,"data-testid":t,$stretch:a},i,{children:n}))})),ys=n.section`
    display: block;
    position: relative;
`,ps=o.forwardRef(((e,s)=>{const{children:n,"data-testid":t="content",className:a,type:i="flex",stretch:o=!1}=e,d=l(e,["children","data-testid","className","type","stretch"]);return r(bs,Object.assign({ref:s,"data-testid":t,className:a,stretch:o},d,{children:r(hs,Object.assign({"data-testid":`${t}-container`,type:i,"data-id":"container",stretch:o},{children:n}))}))})),xs={Section:bs,Container:hs,Content:ps,ColDiv:us},fs={mobileS:320,mobileM:375,mobileL:480,tablet:1199,desktopM:1399,desktopL:1999,desktop4k:3840},Fs=e=>Object.keys(fs).reduce(((r,s)=>{const n=fs[s];return r[s]=`@media screen and (${e}: ${n}px)`,r}),{}),vs=Fs("max-width"),Cs=(Fs("min-width"),n.div`
    position: relative;
    ${e=>{const{$desktopStart:r,$desktopSpan:s,$tabletStart:n,$tabletSpan:a,$mobileStart:i,$mobileSpan:o}=e;return t`
            grid-column: ${r||"auto"} / span ${s||1};

            ${vs.tablet} {
                grid-column: ${n||"auto"} / span
                    ${a||1};
            }

            ${vs.mobileL} {
                grid-column: ${i||"auto"} / span
                    ${o||1};
            }
        `}}
`),$s=o.forwardRef(((e,s)=>{const{mobileCols:n,tabletCols:t,desktopCols:a}=e,i=l(e,["mobileCols","tabletCols","desktopCols"]);return r(Cs,Object.assign({ref:s},(()=>{const e=t||n,r=n,s=ws(a||t||n),i=ws(e),o=ws(r);return{$desktopSpan:s.span,$desktopStart:s.start,$mobileSpan:o.span,$mobileStart:o.start,$tabletSpan:i.span,$tabletStart:i.start}})(),i))})),ws=e=>{if(Array.isArray(e)&&e.length>1){const[r,s]=e,n=r<=s?r:s,t=r<=s?s:r;let a;return a=t===n?1:t-n,{start:n,span:a}}return"number"==typeof e?{start:void 0,span:e}:{start:void 0,span:void 0}},Es=()=>e=>{let r;r="function"==typeof e.$color?e.$color(e):e.$color||Gr.border(e);const s=encodeURIComponent(r),n=e.$thickness||1;return t`
        background-color: transparent;
        height: ${n}px;
        background-repeat: repeat-x;
        background-image: url('data:image/svg+xml,<svg width="8" height="${n}" viewBox="0 0 8 1" xmlns="http://www.w3.org/2000/svg"><line x1="2" y1="1" x2="6" y2="1" stroke="${s}" stroke-width="${n+1}" stroke-dasharray="4 4" /></svg>');
    `},Ds=n.hr`
    width: 100%;
    margin: 0;
    border: none;
    ${e=>{switch(e.$lineStyle){case"dashed":return t`
                    ${Es}
                `;case"solid":return t`
                    height: ${e.$thickness}px;
                    background-color: ${e.$color||Gr.border};
                `}}}
`,Bs=n.footer`
    background: ${Gr["bg-strong"]};
`,As=n(Qr.LinkSM)`
    color: ${Gr.text};
`,Ss=n((e=>{var{thickness:s=1,lineStyle:n="solid",layoutType:t="flex",color:a,className:i,xxsCols:o,xsCols:d,smCols:c,mdCols:g,lgCols:u,xlCols:m,xxlCols:h,mobileCols:b,tabletCols:y,desktopCols:p}=e,x=l(e,["thickness","lineStyle","layoutType","color","className","xxsCols","xsCols","smCols","mdCols","lgCols","xlCols","xxlCols","mobileCols","tabletCols","desktopCols"]);const f=void 0!==b||void 0!==y||void 0!==p;switch(t){case"flex":return r(Ds,Object.assign({className:i,$thickness:s,$lineStyle:n,$color:a},x));case"grid":return f?r($s,Object.assign({className:i,mobileCols:b,tabletCols:y,desktopCols:p},x,{children:r(Ds,{$thickness:s,$lineStyle:n,$color:a})})):r(us,Object.assign({className:i},(()=>{const e=o||[1,-1],r=d||e,s=c||r,n=g||s,t=u||n,a=m||t;return{xxlCols:h||a,xlCols:a,lgCols:t,mdCols:n,smCols:s,xsCols:r,xxsCols:e}})(),x,{children:r(Ds,{$thickness:s,$lineStyle:n,$color:a})}))}}))`
    width: 100%;
`,ks=n(xs.Content)`
    padding: ${Ir["spacing-64"]} 0;

    ${Jr.MaxWidth.lg} {
        padding: ${Ir["spacing-32"]} 0;
    }
`,zs=n.div`
    grid-column: 1 / span 2;

    img {
        max-height: 4rem;
        max-width: 100%;
        object-fit: contain;
    }

    ${Jr.MaxWidth.lg} {
        grid-column: 1 / span 12;
        margin-bottom: ${Ir["spacing-32"]};
    }

    ${Jr.MaxWidth.md} {
        grid-column: 1 / span 8;
        margin-bottom: ${Ir["spacing-32"]};
    }
`,_s=n.ul`
    // first col
    grid-column: 3 / span 4;
    list-style-type: none;

    :nth-of-type(2) {
        // 2nd col
        grid-column: 7 / span 4;
    }

    li {
        :not(:last-child) {
            margin-bottom: ${Ir["spacing-8"]};
        }

        a {
            display: inline-block;
        }
    }

    ${Jr.MaxWidth.lg} {
        // first col
        grid-column: 1 / span 6;

        :nth-of-type(2) {
            // 2nd col
            grid-column: 7 / span 6;
        }
    }

    ${Jr.MaxWidth.md} {
        // first col
        grid-column: 1 / span 4;

        :nth-of-type(2) {
            // 2nd col
            grid-column: 5 / span 4;
        }
    }
`,Ms=n.div`
    grid-column: 13 / span 6;

    ${Jr.MaxWidth.lg} {
        grid-column: 1 / span 12;
        margin-top: ${Ir["spacing-32"]};
    }

    ${Jr.MaxWidth.md} {
        grid-column: 1 / span 8;
    }
`,Os=n(xs.Content)`
    padding: ${Ir["spacing-20"]} 0;

    ${Jr.MaxWidth.lg} {
        border-top: none;
        flex-direction: column;
        padding: ${Ir["spacing-16"]} 0;
    }
`,js=n.div`
    grid-column: 1 / span 6;
    display: flex;

    &:not(:last-child) {
        margin-right: ${Ir["spacing-16"]};
    }

    ${Jr.MaxWidth.lg} {
        grid-column: 1 / span 12;
        flex-direction: column;
        &:not(:last-child) {
            margin-right: 0;
        }
    }

    ${Jr.MaxWidth.md} {
        grid-column: 1 / span 8;
    }
`,Ls=n(js)`
    grid-column: 7 / span 6;
    justify-content: flex-end;

    ${Jr.MaxWidth.lg} {
        margin-top: ${Ir["spacing-16"]};
        justify-content: flex-start;
        grid-column: 1 / span 12;
    }

    ${Jr.MaxWidth.md} {
        grid-column: 1 / span 8;
    }
`,Ws=n(Qr.LinkXS)`
    color: ${Gr.text};
    &:not(:last-child) {
        margin-right: ${Ir["spacing-16"]};
    }

    svg {
        color: ${Gr.icon};
    }

    &:hover {
        color: ${Gr["text-subtler"]};
        svg {
            color: ${Gr["icon-subtle"]};
        }
    }

    ${Jr.MaxWidth.lg} {
        margin-bottom: ${Ir["spacing-12"]};
        &:not(:last-child) {
            margin-right: 0;
        }
    }

    ${Jr.MaxWidth.lg} {
        margin-bottom: ${Ir["spacing-8"]};
    }
`,Ts=n=>{var{children:t,links:i,lastUpdated:o,disclaimerLinks:d,showDownloadAddon:c,logoSrc:g,copyrightInfo:u,onFooterLinkClick:m,layout:h="default"}=n,b=l(n,["children","links","lastUpdated","disclaimerLinks","showDownloadAddon","logoSrc","copyrightInfo","onFooterLinkClick","layout"]);const y="stretch"===h,p=a(),x=e=>e.map(((e,s)=>{const n=l(e,["data-options"]);return r("li",{children:r(As,Object.assign({},n,{onClick:r=>((e,r)=>{r.onClick?(e.preventDefault(),r.onClick(e)):m&&(e.preventDefault(),m(r))})(r,e)}))},s)}));return e(Bs,Object.assign({},b,{children:[(()=>{let n=null;return t||((i||c)&&(n=e(s,{children:[r(zs,Object.assign({"data-testid":"logo-section"},{children:r("img",{src:g||cs.getFooterLogo(null==p?void 0:p.resourceScheme),alt:"LifeSG","data-testid":"logo"})})),(null==i?void 0:i[0])&&r(_s,Object.assign({"data-testid":"link-col-1"},{children:x(i[0])}),"link-col-1"),(null==i?void 0:i[1])&&r(_s,Object.assign({"data-testid":"link-col-2"},{children:x(i[1])}),"link-col-2"),c&&r(Ms,{children:r(ts,{})})]})),n?e(s,{children:[r(ks,Object.assign({type:"grid",stretch:y},{children:n})),r(Ss,{})]}):null)})(),e(Os,Object.assign({type:"grid",stretch:y},{children:[r(js,{children:(()=>{const e=cs.getDisclaimerLinks(null==p?void 0:p.resourceScheme,d);return Object.keys(e).map((s=>r(Ws,Object.assign({},e[s]),s)))})()},"disclaimer"),r(Ls,{children:r(Qr.BodyXS,Object.assign({"data-testid":"copyright-text"},{children:u||e(s,{children:["©"," ",cs.getCopyrightInfo(o,null==p?void 0:p.resourceScheme)]})}))},"copyright")]}))]}))};export{Ts as Footer};
//# sourceMappingURL=index.js.map
