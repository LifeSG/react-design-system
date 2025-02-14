import{jsxs as e,jsx as r,Fragment as s}from"react/jsx-runtime";import t,{css as n,useTheme as a}from"styled-components";import{ExternalIcon as i}from"@lifesg/react-icons/external";import o from"react";function l(e,r){var s={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&r.indexOf(t)<0&&(s[t]=e[t]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var n=0;for(t=Object.getOwnPropertySymbols(e);n<t.length;n++)r.indexOf(t[n])<0&&Object.prototype.propertyIsEnumerable.call(e,t[n])&&(s[t[n]]=e[t[n]])}return s}"function"==typeof SuppressedError&&SuppressedError;var d="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};function c(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var g=Array.isArray,u="object"==typeof d&&d&&d.Object===Object&&d,m="object"==typeof self&&self&&self.Object===Object&&self,h=u||m||Function("return this")(),b=h.Symbol,y=b,p=Object.prototype,x=p.hasOwnProperty,f=p.toString,v=y?y.toStringTag:void 0;var F=function(e){var r=x.call(e,v),s=e[v];try{e[v]=void 0;var t=!0}catch(e){}var n=f.call(e);return t&&(r?e[v]=s:delete e[v]),n},$=Object.prototype.toString;var C=F,w=function(e){return $.call(e)},E=b?b.toStringTag:void 0;var D=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":E&&E in Object(e)?C(e):w(e)};var B=D,A=function(e){return null!=e&&"object"==typeof e};var S=function(e){return"symbol"==typeof e||A(e)&&"[object Symbol]"==B(e)},k=g,_=S,z=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,M=/^\w*$/;var O=function(e,r){if(k(e))return!1;var s=typeof e;return!("number"!=s&&"symbol"!=s&&"boolean"!=s&&null!=e&&!_(e))||(M.test(e)||!z.test(e)||null!=r&&e in Object(r))};var j=function(e){var r=typeof e;return null!=e&&("object"==r||"function"==r)},W=D,L=j;var T,H=function(e){if(!L(e))return!1;var r=W(e);return"[object Function]"==r||"[object GeneratorFunction]"==r||"[object AsyncFunction]"==r||"[object Proxy]"==r},N=h["__core-js_shared__"],U=(T=/[^.]+$/.exec(N&&N.keys&&N.keys.IE_PROTO||""))?"Symbol(src)_1."+T:"";var V=function(e){return!!U&&U in e},Y=Function.prototype.toString;var P=H,G=V,X=j,I=function(e){if(null!=e){try{return Y.call(e)}catch(e){}try{return e+""}catch(e){}}return""},R=/^\[object .+?Constructor\]$/,J=Function.prototype,Z=Object.prototype,q=J.toString,Q=Z.hasOwnProperty,K=RegExp("^"+q.call(Q).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");var ee=function(e){return!(!X(e)||G(e))&&(P(e)?K:R).test(I(e))},re=function(e,r){return null==e?void 0:e[r]};var se=function(e,r){var s=re(e,r);return ee(s)?s:void 0},te=se(Object,"create"),ne=te;var ae=function(){this.__data__=ne?ne(null):{},this.size=0};var ie=function(e){var r=this.has(e)&&delete this.__data__[e];return this.size-=r?1:0,r},oe=te,le=Object.prototype.hasOwnProperty;var de=function(e){var r=this.__data__;if(oe){var s=r[e];return"__lodash_hash_undefined__"===s?void 0:s}return le.call(r,e)?r[e]:void 0},ce=te,ge=Object.prototype.hasOwnProperty;var ue=te;var me=ae,he=ie,be=de,ye=function(e){var r=this.__data__;return ce?void 0!==r[e]:ge.call(r,e)},pe=function(e,r){var s=this.__data__;return this.size+=this.has(e)?0:1,s[e]=ue&&void 0===r?"__lodash_hash_undefined__":r,this};function xe(e){var r=-1,s=null==e?0:e.length;for(this.clear();++r<s;){var t=e[r];this.set(t[0],t[1])}}xe.prototype.clear=me,xe.prototype.delete=he,xe.prototype.get=be,xe.prototype.has=ye,xe.prototype.set=pe;var fe=xe;var ve=function(){this.__data__=[],this.size=0};var Fe=function(e,r){return e===r||e!=e&&r!=r};var $e=function(e,r){for(var s=e.length;s--;)if(Fe(e[s][0],r))return s;return-1},Ce=$e,we=Array.prototype.splice;var Ee=$e;var De=$e;var Be=$e;var Ae=ve,Se=function(e){var r=this.__data__,s=Ce(r,e);return!(s<0)&&(s==r.length-1?r.pop():we.call(r,s,1),--this.size,!0)},ke=function(e){var r=this.__data__,s=Ee(r,e);return s<0?void 0:r[s][1]},_e=function(e){return De(this.__data__,e)>-1},ze=function(e,r){var s=this.__data__,t=Be(s,e);return t<0?(++this.size,s.push([e,r])):s[t][1]=r,this};function Me(e){var r=-1,s=null==e?0:e.length;for(this.clear();++r<s;){var t=e[r];this.set(t[0],t[1])}}Me.prototype.clear=Ae,Me.prototype.delete=Se,Me.prototype.get=ke,Me.prototype.has=_e,Me.prototype.set=ze;var Oe=Me,je=se(h,"Map"),We=fe,Le=Oe,Te=je;var He=function(e){var r=typeof e;return"string"==r||"number"==r||"symbol"==r||"boolean"==r?"__proto__"!==e:null===e};var Ne=function(e,r){var s=e.__data__;return He(r)?s["string"==typeof r?"string":"hash"]:s.map},Ue=Ne;var Ve=Ne;var Ye=Ne;var Pe=Ne;var Ge=function(){this.size=0,this.__data__={hash:new We,map:new(Te||Le),string:new We}},Xe=function(e){var r=Ue(this,e).delete(e);return this.size-=r?1:0,r},Ie=function(e){return Ve(this,e).get(e)},Re=function(e){return Ye(this,e).has(e)},Je=function(e,r){var s=Pe(this,e),t=s.size;return s.set(e,r),this.size+=s.size==t?0:1,this};function Ze(e){var r=-1,s=null==e?0:e.length;for(this.clear();++r<s;){var t=e[r];this.set(t[0],t[1])}}Ze.prototype.clear=Ge,Ze.prototype.delete=Xe,Ze.prototype.get=Ie,Ze.prototype.has=Re,Ze.prototype.set=Je;var qe=Ze;function Qe(e,r){if("function"!=typeof e||null!=r&&"function"!=typeof r)throw new TypeError("Expected a function");var s=function(){var t=arguments,n=r?r.apply(this,t):t[0],a=s.cache;if(a.has(n))return a.get(n);var i=e.apply(this,t);return s.cache=a.set(n,i)||a,i};return s.cache=new(Qe.Cache||qe),s}Qe.Cache=qe;var Ke=Qe;var er=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,rr=/\\(\\)?/g,sr=function(e){var r=Ke(e,(function(e){return 500===s.size&&s.clear(),e})),s=r.cache;return r}((function(e){var r=[];return 46===e.charCodeAt(0)&&r.push(""),e.replace(er,(function(e,s,t,n){r.push(t?n.replace(rr,"$1"):s||e)})),r}));var tr=function(e,r){for(var s=-1,t=null==e?0:e.length,n=Array(t);++s<t;)n[s]=r(e[s],s,e);return n},nr=g,ar=S,ir=b?b.prototype:void 0,or=ir?ir.toString:void 0;var lr=function e(r){if("string"==typeof r)return r;if(nr(r))return tr(r,e)+"";if(ar(r))return or?or.call(r):"";var s=r+"";return"0"==s&&1/r==-1/0?"-0":s},dr=lr;var cr=g,gr=O,ur=sr,mr=function(e){return null==e?"":dr(e)};var hr=S;var br=function(e,r){return cr(e)?e:gr(e,r)?[e]:ur(mr(e))},yr=function(e){if("string"==typeof e||hr(e))return e;var r=e+"";return"0"==r&&1/e==-1/0?"-0":r};var pr=function(e,r){for(var s=0,t=(r=br(r,e)).length;null!=e&&s<t;)e=e[yr(r[s++])];return s&&s==t?e:void 0};var xr=c((function(e,r,s){var t=null==e?void 0:pr(e,r);return void 0===t?s:t}));const fr=(e,r,s)=>xr(s,r)||xr(e,r),vr=(e,r)=>{const s=r||e.defaultValue;return xr(e.collections,s)},Fr={collections:{lifesg:{"brand-10":"#2C0C0B","brand-20":"#4C1513","brand-30":"#6C1D1B","brand-40":"#922825","brand-50":"#BF3431","brand-60":"#F15D5A","brand-70":"#F69491","brand-80":"#FABAB7","brand-90":"#FCD7D2","brand-95":"#FFEBE7","brand-100":"#FFF6F4","primary-10":"#001731","primary-20":"#002752","primary-30":"#003874","primary-40":"#004D9F","primary-50":"#1768BE","primary-60":"#3C91EC","primary-70":"#6CB4FF","primary-80":"#A5CDFF","primary-90":"#CFE1FE","primary-95":"#E8F0FE","primary-100":"#F7F9FF","secondary-10":"#131529","secondary-20":"#222547","secondary-30":"#2F3565","secondary-40":"#42498B","secondary-50":"#5B62A7","secondary-60":"#858CBD","secondary-70":"#A8ADCF","secondary-80":"#C6C9E0","secondary-90":"#DDDFEC","secondary-95":"#EDEEF5","secondary-100":"#F8F8FB","neutral-10":"#161616","neutral-20":"#282828","neutral-30":"#393939","neutral-40":"#4E4E4E","neutral-50":"#686868","neutral-60":"#8E8E8E","neutral-70":"#AFAFB0","neutral-80":"#C7CACA","neutral-90":"#DDE1E2","neutral-95":"#EDEFEF","neutral-100":"#F9F9F9","success-10":"#081A0F","success-20":"#0E2D1B","success-30":"#154126","success-40":"#1C5A34","success-50":"#257645","success-60":"#44A068","success-70":"#64C189","success-80":"#80DCA5","success-90":"#B4ECCB","success-95":"#D5F6E2","success-100":"#EFFCF4","warning-10":"#221302","warning-20":"#3B2204","warning-30":"#543106","warning-40":"#744408","warning-50":"#98590C","warning-60":"#D07A13","warning-70":"#E4A244","warning-80":"#F5C26C","warning-90":"#FADBA6","warning-95":"#FCECD4","warning-100":"#FDF7F0","error-10":"#330505","error-20":"#550808","error-30":"#750C0C","error-40":"#9E130F","error-50":"#CB2213","error-60":"#DE6C6C","error-70":"#E89B9B","error-80":"#EFBEBE","error-90":"#F5D9D9","error-95":"#F9ECEC","error-100":"#FCF7F7","info-10":"#021824","info-20":"#032B3F","info-30":"#053D59","info-40":"#065478","info-50":"#176E9B","info-60":"#5296BE","info-70":"#82B5DA","info-80":"#ACCFE7","info-90":"#CCE3F1","info-95":"#E3F1F8","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000","primary-inverse":"#FEAB10"},bookingsg:{"brand-10":"#2C0C0B","brand-20":"#4C1513","brand-30":"#6C1D1B","brand-40":"#922825","brand-50":"#BF3431","brand-60":"#F15D5A","brand-70":"#F69491","brand-80":"#FABAB7","brand-90":"#FCD7D2","brand-95":"#FFEBE7","brand-100":"#FFF6F4","primary-10":"#1A122C","primary-20":"#2F1F4D","primary-30":"#422D6E","primary-40":"#5B3D97","primary-50":"#7654BC","primary-60":"#9A82CD","primary-70":"#B7A7D8","primary-80":"#CFC5E5","primary-90":"#E3DDF0","primary-95":"#F0EDF7","primary-100":"#F9F8FC","secondary-10":"#0E1723","secondary-20":"#18293D","secondary-30":"#233A57","secondary-40":"#305078","secondary-50":"#4B6A8F","secondary-60":"#7B91A9","secondary-70":"#A1B1C3","secondary-80":"#C1CBD7","secondary-90":"#DBE1E8","secondary-95":"#EBEFF2","secondary-100":"#F7F8FA","neutral-10":"#161616","neutral-20":"#282828","neutral-30":"#393939","neutral-40":"#4E4E4E","neutral-50":"#686868","neutral-60":"#8E8E8E","neutral-70":"#AFAFB0","neutral-80":"#C7CACA","neutral-90":"#DDE1E2","neutral-95":"#EDEFEF","neutral-100":"#F9F9F9","success-10":"#081A0F","success-20":"#0E2D1B","success-30":"#154126","success-40":"#1C5A34","success-50":"#257645","success-60":"#44A068","success-70":"#64C189","success-80":"#80DCA5","success-90":"#B4ECCB","success-95":"#D5F6E2","success-100":"#EFFCF4","warning-10":"#221302","warning-20":"#3B2204","warning-30":"#543106","warning-40":"#744408","warning-50":"#98590C","warning-60":"#D07A13","warning-70":"#E4A244","warning-80":"#F5C26C","warning-90":"#FADBA6","warning-95":"#FCECD4","warning-100":"#FDF7F0","error-10":"#330505","error-20":"#550808","error-30":"#750C0C","error-40":"#9E130F","error-50":"#CB2213","error-60":"#DE6C6C","error-70":"#E89B9B","error-80":"#EFBEBE","error-90":"#F5D9D9","error-95":"#F9ECEC","error-100":"#FCF7F7","info-10":"#021824","info-20":"#032B3F","info-30":"#053D59","info-40":"#065478","info-50":"#176E9B","info-60":"#5296BE","info-70":"#82B5DA","info-80":"#ACCFE7","info-90":"#CCE3F1","info-95":"#E3F1F8","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000","primary-inverse":"#FEAB10"},rbs:{"brand-10":"#0E123A","brand-20":"#191E65","brand-30":"#232B90","brand-40":"#303BC5","brand-50":"#494CFF","brand-60":"#AD6EFF","brand-70":"#AEA4FF","brand-80":"#C5C4FF","brand-90":"#DDDCFF","brand-95":"#EDECFF","brand-100":"#F8F8FF","primary-10":"#10152B","primary-20":"#1C254B","primary-30":"#28356C","primary-40":"#38489A","primary-50":"#4D5AD7","primary-60":"#7487F2","primary-70":"#9AAAFC","primary-80":"#BDC7FD","primary-90":"#DADFFB","primary-95":"#ECEEFE","primary-100":"#F7F8FF","secondary-10":"#19151D","secondary-20":"#2B2533","secondary-30":"#3E3649","secondary-40":"#564A64","secondary-50":"#6F637D","secondary-60":"#948B9F","secondary-70":"#B3ACBB","secondary-80":"#CCC8D2","secondary-90":"#E1DEE4","secondary-95":"#EFEEF1","secondary-100":"#F9F8F9","neutral-10":"#161616","neutral-20":"#282828","neutral-30":"#393939","neutral-40":"#4E4E4E","neutral-50":"#686868","neutral-60":"#8E8E8E","neutral-70":"#AFAFB0","neutral-80":"#C7CACA","neutral-90":"#DDE1E2","neutral-95":"#EDEFEF","neutral-100":"#F9F9F9","success-10":"#081A0F","success-20":"#0E2D1B","success-30":"#154126","success-40":"#1C5A34","success-50":"#257645","success-60":"#44A068","success-70":"#64C189","success-80":"#80DCA5","success-90":"#B4ECCB","success-95":"#D5F6E2","success-100":"#EFFCF4","warning-10":"#221302","warning-20":"#3B2204","warning-30":"#543106","warning-40":"#744408","warning-50":"#98590C","warning-60":"#D07A13","warning-70":"#E4A244","warning-80":"#F5C26C","warning-90":"#FADBA6","warning-95":"#FCECD4","warning-100":"#FDF7F0","error-10":"#330505","error-20":"#550808","error-30":"#750C0C","error-40":"#9E130F","error-50":"#CB2213","error-60":"#DE6C6C","error-70":"#E89B9B","error-80":"#EFBEBE","error-90":"#F5D9D9","error-95":"#F9ECEC","error-100":"#FCF7F7","info-10":"#021824","info-20":"#032B3F","info-30":"#053D59","info-40":"#065478","info-50":"#176E9B","info-60":"#5296BE","info-70":"#82B5DA","info-80":"#ACCFE7","info-90":"#CCE3F1","info-95":"#E3F1F8","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000","primary-inverse":"#FEAB10"},mylegacy:{"brand-10":"#2C0C0B","brand-20":"#4C1513","brand-30":"#6C1D1B","brand-40":"#922825","brand-50":"#BF3431","brand-60":"#F15D5A","brand-70":"#F69491","brand-80":"#FABAB7","brand-90":"#FCD7D2","brand-95":"#FFEBE7","brand-100":"#FFF6F4","primary-10":"#0011924","primary-20":"#032B40","primary-30":"#043D5A","primary-40":"#05547B","primary-50":"#096EA1","primary-60":"#2098D3","primary-70":"#5CB9E8","primary-80":"#8BD3F6","primary-90":"#BEE6FA","primary-95":"#E2F2FA","primary-100":"#F4FAFC","secondary-10":"#131529","secondary-20":"#222547","secondary-30":"#2F3565","secondary-40":"#42498B","secondary-50":"#5B62A7","secondary-60":"#858CBD","secondary-70":"#A8ADCF","secondary-80":"#C6C9E0","secondary-90":"#DDDFEC","secondary-95":"#EDEEF5","secondary-100":"#F8F8FB","neutral-10":"#161616","neutral-20":"#282828","neutral-30":"#393939","neutral-40":"#4E4E4E","neutral-50":"#686868","neutral-60":"#8E8E8E","neutral-70":"#AFAFB0","neutral-80":"#C7CACA","neutral-90":"#DDE1E2","neutral-95":"#EDEFEF","neutral-100":"#F9F9F9","success-10":"#081A0F","success-20":"#0E2D1B","success-30":"#154126","success-40":"#1C5A34","success-50":"#257645","success-60":"#44A068","success-70":"#64C189","success-80":"#80DCA5","success-90":"#B4ECCB","success-95":"#D5F6E2","success-100":"#EFFCF4","warning-10":"#221302","warning-20":"#3B2204","warning-30":"#543106","warning-40":"#744408","warning-50":"#98590C","warning-60":"#D07A13","warning-70":"#E4A244","warning-80":"#F5C26C","warning-90":"#FADBA6","warning-95":"#FCECD4","warning-100":"#FDF7F0","error-10":"#330505","error-20":"#550808","error-30":"#750C0C","error-40":"#9E130F","error-50":"#CB2213","error-60":"#DE6C6C","error-70":"#E89B9B","error-80":"#EFBEBE","error-90":"#F5D9D9","error-95":"#F9ECEC","error-100":"#FCF7F7","info-10":"#021824","info-20":"#032B3F","info-30":"#053D59","info-40":"#065478","info-50":"#176E9B","info-60":"#5296BE","info-70":"#82B5DA","info-80":"#ACCFE7","info-90":"#CCE3F1","info-95":"#E3F1F8","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000","primary-inverse":"#FEAB10"},ccube:{"brand-10":"#1F1221","brand-20":"#371F3B","brand-30":"#4E2C53","brand-40":"#6B3E73","brand-50":"#8D5197","brand-60":"#FF3399","brand-70":"#FF88C4","brand-80":"#FFB3D9","brand-90":"#FFD4E9","brand-95":"#FFE8F3","brand-100":"#FFD6EB","primary-10":"#1F1221","primary-20":"#371F3B","primary-30":"#4E2C53","primary-40":"#6B3E73","primary-50":"#8D5197","primary-60":"#B07DB7","primary-70":"#C7A3CC","primary-80":"#D9C2DD","primary-90":"#E9DBEB","primary-95":"#F3ECF4","primary-100":"#FAF7FA","secondary-10":"#2D091B","secondary-20":"#4D0F2E","secondary-30":"#6B1540","secondary-40":"#931D58","secondary-50":"#C02673","secondary-60":"#FF409F","secondary-70":"#FF88C4","secondary-80":"#FFB3D9","secondary-90":"#FFD4E9","secondary-95":"#FFE8F3","secondary-100":"#FFF8FC","neutral-10":"#161616","neutral-20":"#282828","neutral-30":"#393939","neutral-40":"#4E4E4E","neutral-50":"#686868","neutral-60":"#8E8E8E","neutral-70":"#AFAFB0","neutral-80":"#C7CACA","neutral-90":"#DDE1E2","neutral-95":"#EDEFEF","neutral-100":"#F9F9F9","success-10":"#081A0F","success-20":"#0E2D1B","success-30":"#154126","success-40":"#1C5A34","success-50":"#257645","success-60":"#44A068","success-70":"#64C189","success-80":"#80DCA5","success-90":"#B4ECCB","success-95":"#D5F6E2","success-100":"#EFFCF4","warning-10":"#221302","warning-20":"#3B2204","warning-30":"#543106","warning-40":"#744408","warning-50":"#98590C","warning-60":"#D07A13","warning-70":"#E4A244","warning-80":"#F5C26C","warning-90":"#FADBA6","warning-95":"#FCECD4","warning-100":"#FDF7F0","error-10":"#330505","error-20":"#550808","error-30":"#750C0C","error-40":"#9E130F","error-50":"#CB2213","error-60":"#DE6C6C","error-70":"#E89B9B","error-80":"#EFBEBE","error-90":"#F5D9D9","error-95":"#F9ECEC","error-100":"#FCF7F7","info-10":"#021824","info-20":"#032B3F","info-30":"#053D59","info-40":"#065478","info-50":"#176E9B","info-60":"#5296BE","info-70":"#82B5DA","info-80":"#ACCFE7","info-90":"#CCE3F1","info-95":"#E3F1F8","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000","primary-inverse":"#FEAB10"}},defaultValue:"lifesg"},$r=e=>r=>{var s;const t=r.theme,n=vr(Fr,null==t?void 0:t.colourScheme);return(null===(s=null==t?void 0:t.overrides)||void 0===s?void 0:s.primitiveColour)?fr(n,e,t.overrides.primitiveColour):n[e]},Cr={"brand-10":$r("brand-10"),"brand-20":$r("brand-20"),"brand-30":$r("brand-30"),"brand-40":$r("brand-40"),"brand-50":$r("brand-50"),"brand-60":$r("brand-60"),"brand-70":$r("brand-70"),"brand-80":$r("brand-80"),"brand-90":$r("brand-90"),"brand-95":$r("brand-95"),"brand-100":$r("brand-100"),"primary-10":$r("primary-10"),"primary-20":$r("primary-20"),"primary-30":$r("primary-30"),"primary-40":$r("primary-40"),"primary-50":$r("primary-50"),"primary-60":$r("primary-60"),"primary-70":$r("primary-70"),"primary-80":$r("primary-80"),"primary-90":$r("primary-90"),"primary-95":$r("primary-95"),"primary-100":$r("primary-100"),"secondary-10":$r("secondary-10"),"secondary-20":$r("secondary-20"),"secondary-30":$r("secondary-30"),"secondary-40":$r("secondary-40"),"secondary-50":$r("secondary-50"),"secondary-60":$r("secondary-60"),"secondary-70":$r("secondary-70"),"secondary-80":$r("secondary-80"),"secondary-90":$r("secondary-90"),"secondary-95":$r("secondary-95"),"secondary-100":$r("secondary-100"),"neutral-10":$r("neutral-10"),"neutral-20":$r("neutral-20"),"neutral-30":$r("neutral-30"),"neutral-40":$r("neutral-40"),"neutral-50":$r("neutral-50"),"neutral-60":$r("neutral-60"),"neutral-70":$r("neutral-70"),"neutral-80":$r("neutral-80"),"neutral-90":$r("neutral-90"),"neutral-95":$r("neutral-95"),"neutral-100":$r("neutral-100"),"success-10":$r("success-10"),"success-20":$r("success-20"),"success-30":$r("success-30"),"success-40":$r("success-40"),"success-50":$r("success-50"),"success-60":$r("success-60"),"success-70":$r("success-70"),"success-80":$r("success-80"),"success-90":$r("success-90"),"success-95":$r("success-95"),"success-100":$r("success-100"),"warning-10":$r("warning-10"),"warning-20":$r("warning-20"),"warning-30":$r("warning-30"),"warning-40":$r("warning-40"),"warning-50":$r("warning-50"),"warning-60":$r("warning-60"),"warning-70":$r("warning-70"),"warning-80":$r("warning-80"),"warning-90":$r("warning-90"),"warning-95":$r("warning-95"),"warning-100":$r("warning-100"),"error-10":$r("error-10"),"error-20":$r("error-20"),"error-30":$r("error-30"),"error-40":$r("error-40"),"error-50":$r("error-50"),"error-60":$r("error-60"),"error-70":$r("error-70"),"error-80":$r("error-80"),"error-90":$r("error-90"),"error-95":$r("error-95"),"error-100":$r("error-100"),"info-10":$r("info-10"),"info-20":$r("info-20"),"info-30":$r("info-30"),"info-40":$r("info-40"),"info-50":$r("info-50"),"info-60":$r("info-60"),"info-70":$r("info-70"),"info-80":$r("info-80"),"info-90":$r("info-90"),"info-95":$r("info-95"),"info-100":$r("info-100"),white:$r("white"),black:$r("black"),"primary-inverse":$r("primary-inverse")},wr={text:$r("neutral-20"),"text-subtle":$r("neutral-30"),"text-subtler":$r("neutral-50"),"text-subtlest":$r("neutral-60"),"text-primary":$r("primary-50"),"text-hover":$r("primary-40"),"text-selected":$r("primary-50"),"text-selected-hover":$r("primary-40"),"text-disabled":$r("neutral-50"),"text-disabled-subtle":$r("neutral-60"),"text-disabled-subtlest":$r("neutral-80"),"text-selected-disabled":$r("neutral-20"),"text-success":$r("success-40"),"text-warning":$r("warning-40"),"text-error":$r("error-40"),"text-info":$r("info-40"),"text-inverse":$r("white"),icon:$r("neutral-50"),"icon-subtle":$r("neutral-60"),"icon-strongest":$r("neutral-20"),"icon-primary":$r("primary-50"),"icon-primary-subtle":$r("primary-60"),"icon-primary-subtlest":$r("primary-70"),"icon-hover":$r("primary-40"),"icon-selected":$r("primary-50"),"icon-selected-hover":$r("primary-40"),"icon-disabled":$r("neutral-50"),"icon-disabled-subtle":$r("neutral-60"),"icon-selected-disabled":$r("neutral-60"),"icon-success":$r("success-50"),"icon-warning":$r("warning-60"),"icon-error":$r("error-50"),"icon-error-strong":$r("error-40"),"icon-info":$r("info-50"),"icon-inverse":$r("white"),"icon-primary-inverse":$r("primary-inverse"),border:$r("neutral-90"),"border-strong":$r("neutral-70"),"border-stronger":$r("neutral-50"),"border-primary":$r("primary-50"),"border-primary-subtle":$r("primary-60"),"border-hover":$r("primary-90"),"border-hover-strong":$r("primary-60"),"border-selected":$r("primary-50"),"border-selected-subtle":$r("primary-70"),"border-selected-subtlest":$r("primary-90"),"border-selected-hover":$r("primary-40"),"border-focus":$r("primary-60"),"border-focus-strong":$r("primary-50"),"border-disabled":$r("neutral-90"),"border-selected-disabled":$r("neutral-70"),"border-success":$r("success-60"),"border-warning":$r("warning-60"),"border-error":$r("error-60"),"border-error-focus":$r("error-60"),"border-error-focus-strong":$r("error-40"),"border-error-strong":$r("error-40"),"border-info":$r("info-60"),bg:$r("white"),"bg-strong":$r("neutral-100"),"bg-stronger":$r("neutral-95"),"bg-strongest":$r("neutral-90"),"bg-hover":$r("primary-95"),"bg-hover-strong":$r("primary-90"),"bg-hover-subtle":$r("primary-100"),"bg-hover-neutral":$r("neutral-100"),"bg-hover-neutral-strong":$r("neutral-90"),"bg-selected":$r("primary-95"),"bg-selected-hover":$r("primary-90"),"bg-selected-strong":$r("primary-90"),"bg-selected-stronger":$r("primary-70"),"bg-selected-strongest":$r("primary-50"),"bg-selected-strongest-hover":$r("primary-40"),"bg-disabled":$r("neutral-95"),"bg-selected-disabled":$r("neutral-95"),"bg-selected-stronger-disabled":$r("neutral-70"),"bg-success":$r("success-100"),"bg-success-hover":$r("success-95"),"bg-success-strong":$r("success-50"),"bg-success-strong-hover":$r("success-40"),"bg-warning":$r("warning-100"),"bg-warning-hover":$r("warning-95"),"bg-warning-strong":$r("warning-50"),"bg-warning-strong-hover":$r("warning-40"),"bg-info":$r("info-100"),"bg-info-hover":$r("info-95"),"bg-info-strong":$r("info-50"),"bg-info-strong-hover":$r("info-40"),"bg-error":$r("error-100"),"bg-error-hover":$r("error-95"),"bg-error-strong":$r("error-50"),"bg-error-strong-hover":$r("error-40"),"bg-inverse":$r("neutral-20"),"bg-inverse-subtle":$r("neutral-30"),"bg-inverse-subtler":$r("neutral-50"),"bg-inverse-subtlest":$r("neutral-60"),"bg-inverse-hover":$r("neutral-40"),"bg-primary":$r("primary-50"),"bg-primary-subtle":$r("primary-60"),"bg-primary-subtler":$r("primary-95"),"bg-primary-subtlest":$r("primary-100"),"bg-available":"#6DD0A1","bg-primary-hover":$r("primary-40"),"bg-primary-subtlest-hover":$r("primary-90"),"bg-primary-subtlest-selected":$r("primary-90"),"overlay-strong":"rgba(40, 40, 40, 0.85)","overlay-subtle":"rgba(40, 40, 40, 0.20)",hyperlink:$r("primary-50"),"hyperlink-hover":$r("primary-40"),"hyperlink-visited":$r("primary-40"),"hyperlink-inverse":$r("primary-inverse"),"focus-ring":$r("black"),"focus-ring-inverse":$r("white")},Er={collections:{lifesg:wr,bookingsg:wr,rbs:wr,mylegacy:wr,ccube:wr},defaultValue:"lifesg"},Dr=e=>r=>{var s;const t=r.theme,n=vr(Er,null==t?void 0:t.colourScheme),a=(null===(s=null==t?void 0:t.overrides)||void 0===s?void 0:s.semanticColour)?fr(n,e,t.overrides.semanticColour):n[e];return"function"==typeof a?a(r):a},Br={text:Dr("text"),"text-subtle":Dr("text-subtle"),"text-subtler":Dr("text-subtler"),"text-subtlest":Dr("text-subtlest"),"text-primary":Dr("text-primary"),"text-hover":Dr("text-hover"),"text-selected":Dr("text-selected"),"text-selected-hover":Dr("text-selected-hover"),"text-disabled":Dr("text-disabled"),"text-disabled-subtle":Dr("text-disabled-subtle"),"text-disabled-subtlest":Dr("text-disabled-subtlest"),"text-selected-disabled":Dr("text-selected-disabled"),"text-success":Dr("text-success"),"text-warning":Dr("text-warning"),"text-error":Dr("text-error"),"text-info":Dr("text-info"),"text-inverse":Dr("text-inverse"),icon:Dr("icon"),"icon-subtle":Dr("icon-subtle"),"icon-strongest":Dr("icon-strongest"),"icon-primary":Dr("icon-primary"),"icon-primary-subtle":Dr("icon-primary-subtle"),"icon-primary-subtlest":Dr("icon-primary-subtlest"),"icon-hover":Dr("icon-hover"),"icon-selected":Dr("icon-selected"),"icon-selected-hover":Dr("icon-selected-hover"),"icon-disabled":Dr("icon-disabled"),"icon-disabled-subtle":Dr("icon-disabled-subtle"),"icon-selected-disabled":Dr("icon-selected-disabled"),"icon-success":Dr("icon-success"),"icon-warning":Dr("icon-warning"),"icon-error":Dr("icon-error"),"icon-error-strong":Dr("icon-error-strong"),"icon-info":Dr("icon-info"),"icon-inverse":Dr("icon-inverse"),"icon-primary-inverse":Dr("icon-primary-inverse"),border:Dr("border"),"border-strong":Dr("border-strong"),"border-stronger":Dr("border-stronger"),"border-primary":Dr("border-primary"),"border-primary-subtle":Dr("border-primary-subtle"),"border-hover":Dr("border-hover"),"border-hover-strong":Dr("border-hover-strong"),"border-selected":Dr("border-selected"),"border-selected-subtle":Dr("border-selected-subtle"),"border-selected-subtlest":Dr("border-selected-subtlest"),"border-selected-hover":Dr("border-selected-hover"),"border-focus":Dr("border-focus"),"border-focus-strong":Dr("border-focus-strong"),"border-disabled":Dr("border-disabled"),"border-selected-disabled":Dr("border-selected-disabled"),"border-success":Dr("border-success"),"border-warning":Dr("border-warning"),"border-error":Dr("border-error"),"border-error-focus":Dr("border-error-focus"),"border-error-focus-strong":Dr("border-error-focus-strong"),"border-error-strong":Dr("border-error-strong"),"border-info":Dr("border-info"),bg:Dr("bg"),"bg-strong":Dr("bg-strong"),"bg-stronger":Dr("bg-stronger"),"bg-strongest":Dr("bg-strongest"),"bg-hover":Dr("bg-hover"),"bg-hover-strong":Dr("bg-hover-strong"),"bg-hover-subtle":Dr("bg-hover-subtle"),"bg-hover-neutral":Dr("bg-hover-neutral"),"bg-hover-neutral-strong":Dr("bg-hover-neutral-strong"),"bg-selected":Dr("bg-selected"),"bg-selected-hover":Dr("bg-selected-hover"),"bg-selected-strong":Dr("bg-selected-strong"),"bg-selected-stronger":Dr("bg-selected-stronger"),"bg-selected-strongest":Dr("bg-selected-strongest"),"bg-selected-strongest-hover":Dr("bg-selected-strongest-hover"),"bg-disabled":Dr("bg-disabled"),"bg-selected-disabled":Dr("bg-selected-disabled"),"bg-selected-stronger-disabled":Dr("bg-selected-stronger-disabled"),"bg-success":Dr("bg-success"),"bg-success-hover":Dr("bg-success-hover"),"bg-success-strong":Dr("bg-success-strong"),"bg-success-strong-hover":Dr("bg-success-strong-hover"),"bg-warning":Dr("bg-warning"),"bg-warning-hover":Dr("bg-warning-hover"),"bg-warning-strong":Dr("bg-warning-strong"),"bg-warning-strong-hover":Dr("bg-warning-strong-hover"),"bg-info":Dr("bg-info"),"bg-info-hover":Dr("bg-info-hover"),"bg-info-strong":Dr("bg-info-strong"),"bg-info-strong-hover":Dr("bg-info-strong-hover"),"bg-error":Dr("bg-error"),"bg-error-hover":Dr("bg-error-hover"),"bg-error-strong":Dr("bg-error-strong"),"bg-error-strong-hover":Dr("bg-error-strong-hover"),"bg-inverse":Dr("bg-inverse"),"bg-inverse-subtle":Dr("bg-inverse-subtle"),"bg-inverse-subtler":Dr("bg-inverse-subtler"),"bg-inverse-subtlest":Dr("bg-inverse-subtlest"),"bg-inverse-hover":Dr("bg-inverse-hover"),"bg-primary":Dr("bg-primary"),"bg-primary-subtle":Dr("bg-primary-subtle"),"bg-primary-subtler":Dr("bg-primary-subtler"),"bg-primary-subtlest":Dr("bg-primary-subtlest"),"bg-available":Dr("bg-available"),"bg-primary-hover":Dr("bg-primary-hover"),"bg-primary-subtlest-hover":Dr("bg-primary-subtlest-hover"),"bg-primary-subtlest-selected":Dr("bg-primary-subtlest-selected"),"overlay-strong":Dr("overlay-strong"),"overlay-subtle":Dr("overlay-subtle"),hyperlink:Dr("hyperlink"),"hyperlink-hover":Dr("hyperlink-hover"),"hyperlink-visited":Dr("hyperlink-visited"),"hyperlink-inverse":Dr("hyperlink-inverse"),"focus-ring":Dr("focus-ring"),"focus-ring-inverse":Dr("focus-ring-inverse")},Ar={collections:{lifesg:{"xxs-min":0,"xxs-max":320,"xs-min":321,"xs-max":375,"sm-min":376,"sm-max":420,"md-min":421,"md-max":767,"lg-min":768,"lg-max":1023,"xl-min":1024,"xl-max":1440,"xxl-min":1441,"xxs-column":8,"xs-column":8,"sm-column":8,"md-column":8,"lg-column":12,"xl-column":12,"xxl-column":12,"xxs-gutter":16,"xs-gutter":16,"sm-gutter":16,"md-gutter":16,"lg-gutter":32,"xl-gutter":32,"xxl-gutter":32,"xxs-margin":24,"xs-margin":24,"sm-margin":24,"md-margin":24,"lg-margin":48,"xl-margin":48,"xxl-margin":48}},defaultValue:"lifesg"},Sr=e=>r=>{var s;const t=r.theme,n=vr(Ar,null==t?void 0:t.breakpointScheme);let a;return a=(null===(s=null==t?void 0:t.overrides)||void 0===s?void 0:s.breakpoint)?fr(n,e,t.overrides.breakpoint):n[e],a},kr={"xxs-min":Sr("xxs-min"),"xxs-max":Sr("xxs-max"),"xs-min":Sr("xs-min"),"xs-max":Sr("xs-max"),"sm-min":Sr("sm-min"),"sm-max":Sr("sm-max"),"md-min":Sr("md-min"),"md-max":Sr("md-max"),"lg-min":Sr("lg-min"),"lg-max":Sr("lg-max"),"xl-min":Sr("xl-min"),"xl-max":Sr("xl-max"),"xxl-min":Sr("xxl-min"),"xxs-column":Sr("xxs-column"),"xs-column":Sr("xs-column"),"sm-column":Sr("sm-column"),"md-column":Sr("md-column"),"lg-column":Sr("lg-column"),"xl-column":Sr("xl-column"),"xxl-column":Sr("xxl-column"),"xxs-gutter":Sr("xxs-gutter"),"xs-gutter":Sr("xs-gutter"),"sm-gutter":Sr("sm-gutter"),"md-gutter":Sr("md-gutter"),"lg-gutter":Sr("lg-gutter"),"xl-gutter":Sr("xl-gutter"),"xxl-gutter":Sr("xxl-gutter"),"xxs-margin":Sr("xxs-margin"),"xs-margin":Sr("xs-margin"),"sm-margin":Sr("sm-margin"),"md-margin":Sr("md-margin"),"lg-margin":Sr("lg-margin"),"xl-margin":Sr("xl-margin"),"xxl-margin":Sr("xxl-margin")},_r=e=>("max-width"===e?["xxs","xs","sm","md","lg","xl"]:["xxs","xs","sm","md","lg","xl","xxl"]).reduce(((r,s)=>(r[s]=((e,r)=>{const s=kr["max-width"===e?`${r}-max`:`${r}-min`];return r=>{const t=s(r);return`@media screen and (${e}: ${t}px)`}})(e,s),r)),{}),zr={MaxWidth:_r("max-width"),MinWidth:_r("min-width")},Mr={"header-size-xxl":"3rem","header-size-xl":"2.5rem","header-size-lg":"2rem","header-size-md":"1.625rem","header-size-sm":"1.375rem","header-size-xs":"1.125rem","header-lh-xxl":"3.5rem","header-lh-xl":"3rem","header-lh-lg":"2.5rem","header-lh-md":"2.25rem","header-lh-sm":"1.75rem","header-lh-xs":"1.625rem","header-ls-xxl":"-0.056rem","header-ls-xl":"-0.032rem","header-ls-lg":"-0.032rem","header-ls-md":"0rem","header-ls-sm":"0rem","header-ls-xs":"0rem","weight-light":"300","weight-regular":"400","weight-semibold":"600","weight-bold":"700","font-family":"Open Sans","body-size-baseline":"1.125rem","body-size-md":"1rem","body-size-sm":"0.875rem","body-size-xs":"0.75rem","body-lh-baseline":"1.625rem","body-lh-md":"1.5rem","body-lh-sm":"1.625rem","body-lh-xs":"1.25rem","body-ls-baseline":"0rem","body-ls-md":"0.014rem","body-ls-sm":"0.012rem","body-ls-xs":"0.012rem","formlabel-size-baseline":"1rem","formlabel-size-lg":"1.125rem","formlabel-lh-baseline":"1.5rem","formlabel-lh-lg":"1.625rem","formlabel-ls-baseline":"0.014rem","formlabel-ls-lg":"0rem"},Or={collections:{lifesg:Mr,bookingsg:{"header-size-xxl":"3rem","header-size-xl":"2.5rem","header-size-lg":"2rem","header-size-md":"1.625rem","header-size-sm":"1.375rem","header-size-xs":"1.125rem","header-lh-xxl":"3.5rem","header-lh-xl":"3rem","header-lh-lg":"2.5rem","header-lh-md":"2.25rem","header-lh-sm":"1.75rem","header-lh-xs":"1.75rem","header-ls-xxl":"-0.056rem","header-ls-xl":"-0.032rem","header-ls-lg":"-0.032rem","header-ls-md":"0rem","header-ls-sm":"0rem","header-ls-xs":"0rem","weight-light":"300","weight-regular":"400","weight-semibold":"600","weight-bold":"700","font-family":"Plus Jakarta Sans","body-size-baseline":"1.125rem","body-size-md":"1rem","body-size-sm":"0.875rem","body-size-xs":"0.75rem","body-lh-baseline":"1.75rem","body-lh-md":"1.5rem","body-lh-sm":"1.6rem","body-lh-xs":"1.2rem","body-ls-baseline":"0rem","body-ls-md":"0.014rem","body-ls-sm":"0.012rem","body-ls-xs":"0.012rem","formlabel-size-baseline":"1rem","formlabel-size-lg":"1.125rem","formlabel-lh-baseline":"1.5rem","formlabel-lh-lg":"1.75rem","formlabel-ls-baseline":"0.014rem","formlabel-ls-lg":"0rem"},rbs:Mr,mylegacy:Mr,ccube:Mr},defaultValue:"lifesg"},jr=e=>r=>{var s;const t=r.theme,n=vr(Or,null==t?void 0:t.fontScheme);return(null===(s=null==t?void 0:t.overrides)||void 0===s?void 0:s.fontSpec)?fr(n,e,t.overrides.fontSpec):n[e]},Wr={"header-size-xxl":jr("header-size-xxl"),"header-size-xl":jr("header-size-xl"),"header-size-lg":jr("header-size-lg"),"header-size-md":jr("header-size-md"),"header-size-sm":jr("header-size-sm"),"header-size-xs":jr("header-size-xs"),"header-lh-xxl":jr("header-lh-xxl"),"header-lh-xl":jr("header-lh-xl"),"header-lh-lg":jr("header-lh-lg"),"header-lh-md":jr("header-lh-md"),"header-lh-sm":jr("header-lh-sm"),"header-lh-xs":jr("header-lh-xs"),"header-ls-xxl":jr("header-ls-xxl"),"header-ls-xl":jr("header-ls-xl"),"header-ls-lg":jr("header-ls-lg"),"header-ls-md":jr("header-ls-md"),"header-ls-sm":jr("header-ls-sm"),"header-ls-xs":jr("header-ls-xs"),"weight-light":jr("weight-light"),"weight-regular":jr("weight-regular"),"weight-semibold":jr("weight-semibold"),"weight-bold":jr("weight-bold"),"font-family":jr("font-family"),"body-size-baseline":jr("body-size-baseline"),"body-size-md":jr("body-size-md"),"body-size-sm":jr("body-size-sm"),"body-size-xs":jr("body-size-xs"),"body-lh-baseline":jr("body-lh-baseline"),"body-lh-md":jr("body-lh-md"),"body-lh-sm":jr("body-lh-sm"),"body-lh-xs":jr("body-lh-xs"),"body-ls-baseline":jr("body-ls-baseline"),"body-ls-md":jr("body-ls-md"),"body-ls-sm":jr("body-ls-sm"),"body-ls-xs":jr("body-ls-xs"),"formlabel-size-baseline":jr("formlabel-size-baseline"),"formlabel-size-lg":jr("formlabel-size-lg"),"formlabel-lh-baseline":jr("formlabel-lh-baseline"),"formlabel-lh-lg":jr("formlabel-lh-lg"),"formlabel-ls-baseline":jr("formlabel-ls-baseline"),"formlabel-ls-lg":jr("formlabel-ls-lg")},Lr={collections:{lifesg:{"spacing-0":0,"spacing-4":4,"spacing-8":8,"spacing-12":12,"spacing-16":16,"spacing-20":20,"spacing-24":24,"spacing-32":32,"spacing-40":40,"spacing-48":48,"spacing-64":64,"spacing-72":72,"layout-xs":8,"layout-sm":16,"layout-md":24,"layout-lg":32,"layout-xl":48,"layout-xxl":64,"layout-xxxl":128}},defaultValue:"lifesg"},Tr=e=>r=>{var s;const t=r.theme,n=vr(Lr,null==t?void 0:t.spacingScheme);return(null===(s=null==t?void 0:t.overrides)||void 0===s?void 0:s.spacing)?`${fr(n,e,t.overrides.spacing)}px`:`${n[e]}px`},Hr={"spacing-0":Tr("spacing-0"),"spacing-4":Tr("spacing-4"),"spacing-8":Tr("spacing-8"),"spacing-12":Tr("spacing-12"),"spacing-16":Tr("spacing-16"),"spacing-20":Tr("spacing-20"),"spacing-24":Tr("spacing-24"),"spacing-32":Tr("spacing-32"),"spacing-40":Tr("spacing-40"),"spacing-48":Tr("spacing-48"),"spacing-64":Tr("spacing-64"),"spacing-72":Tr("spacing-72"),"layout-xs":Tr("layout-xs"),"layout-sm":Tr("layout-sm"),"layout-md":Tr("layout-md"),"layout-lg":Tr("layout-lg"),"layout-xl":Tr("layout-xl"),"layout-xxl":Tr("layout-xxl"),"layout-xxxl":Tr("layout-xxxl")},Nr=(e,r,s,t)=>n`
    font-family: ${jr("font-family")};
    font-size: ${jr(e)};
    font-weight: ${jr(r)};
    line-height: ${jr(s)};
    letter-spacing: ${jr(t)};
`,Ur={"header-xxl-light":Nr("header-size-xxl","weight-light","header-lh-xxl","header-ls-xxl"),"header-xxl-regular":Nr("header-size-xxl","weight-regular","header-lh-xxl","header-ls-xxl"),"header-xxl-semibold":Nr("header-size-xxl","weight-semibold","header-lh-xxl","header-ls-xxl"),"header-xxl-bold":Nr("header-size-xxl","weight-bold","header-lh-xxl","header-ls-xxl"),"header-xl-light":Nr("header-size-xl","weight-light","header-lh-xl","header-ls-xl"),"header-xl-regular":Nr("header-size-xl","weight-regular","header-lh-xl","header-ls-xl"),"header-xl-semibold":Nr("header-size-xl","weight-semibold","header-lh-xl","header-ls-xl"),"header-xl-bold":Nr("header-size-xl","weight-bold","header-lh-xl","header-ls-xl"),"header-lg-light":Nr("header-size-lg","weight-light","header-lh-lg","header-ls-lg"),"header-lg-regular":Nr("header-size-lg","weight-regular","header-lh-lg","header-ls-lg"),"header-lg-semibold":Nr("header-size-lg","weight-semibold","header-lh-lg","header-ls-lg"),"header-lg-bold":Nr("header-size-lg","weight-bold","header-lh-lg","header-ls-lg"),"header-md-light":Nr("header-size-md","weight-light","header-lh-md","header-ls-md"),"header-md-regular":Nr("header-size-md","weight-regular","header-lh-md","header-ls-md"),"header-md-semibold":Nr("header-size-md","weight-semibold","header-lh-md","header-ls-md"),"header-md-bold":Nr("header-size-md","weight-bold","header-lh-md","header-ls-md"),"header-sm-light":Nr("header-size-sm","weight-light","header-lh-sm","header-ls-sm"),"header-sm-regular":Nr("header-size-sm","weight-regular","header-lh-sm","header-ls-sm"),"header-sm-semibold":Nr("header-size-sm","weight-semibold","header-lh-sm","header-ls-sm"),"header-sm-bold":Nr("header-size-sm","weight-bold","header-lh-sm","header-ls-sm"),"header-xs-light":Nr("header-size-xs","weight-light","header-lh-xs","header-ls-xs"),"header-xs-regular":Nr("header-size-xs","weight-regular","header-lh-xs","header-ls-xs"),"header-xs-semibold":Nr("header-size-xs","weight-semibold","header-lh-xs","header-ls-xs"),"header-xs-bold":Nr("header-size-xs","weight-bold","header-lh-xs","header-ls-xs"),"body-baseline-light":Nr("body-size-baseline","weight-light","body-lh-baseline","body-ls-baseline"),"body-baseline-regular":Nr("body-size-baseline","weight-regular","body-lh-baseline","body-ls-baseline"),"body-baseline-semibold":Nr("body-size-baseline","weight-semibold","body-lh-baseline","body-ls-baseline"),"body-baseline-bold":Nr("body-size-baseline","weight-bold","body-lh-baseline","body-ls-baseline"),"body-md-light":Nr("body-size-md","weight-light","body-lh-md","body-ls-md"),"body-md-regular":Nr("body-size-md","weight-regular","body-lh-md","body-ls-md"),"body-md-semibold":Nr("body-size-md","weight-semibold","body-lh-md","body-ls-md"),"body-md-bold":Nr("body-size-md","weight-bold","body-lh-md","body-ls-md"),"body-sm-light":Nr("body-size-sm","weight-light","body-lh-sm","body-ls-sm"),"body-sm-regular":Nr("body-size-sm","weight-regular","body-lh-sm","body-ls-sm"),"body-sm-semibold":Nr("body-size-sm","weight-semibold","body-lh-sm","body-ls-sm"),"body-sm-bold":Nr("body-size-sm","weight-bold","body-lh-sm","body-ls-sm"),"body-xs-light":Nr("body-size-xs","weight-light","body-lh-xs","body-ls-xs"),"body-xs-regular":Nr("body-size-xs","weight-regular","body-lh-xs","body-ls-xs"),"body-xs-semibold":Nr("body-size-xs","weight-semibold","body-lh-xs","body-ls-xs"),"body-xs-bold":Nr("body-size-xs","weight-bold","body-lh-xs","body-ls-xs"),"formlabel-baseline-semibold":Nr("formlabel-size-baseline","weight-semibold","formlabel-lh-baseline","formlabel-ls-baseline"),"formlabel-lg-semibold":Nr("formlabel-size-lg","weight-semibold","formlabel-lh-lg","formlabel-ls-lg")},Vr={collections:{lifesg:Ur,bookingsg:Ur,rbs:Ur,mylegacy:Ur,ccube:Ur},defaultValue:"lifesg"},Yr=e=>r=>{var s;const t=r.theme,n=vr(Vr,null==t?void 0:t.fontScheme),a=(null===(s=null==t?void 0:t.overrides)||void 0===s?void 0:s.font)?fr(n,e,t.overrides.font):n[e];return"function"==typeof a?a(r):a},Pr={"header-xxl-light":Yr("header-xxl-light"),"header-xxl-regular":Yr("header-xxl-regular"),"header-xxl-semibold":Yr("header-xxl-semibold"),"header-xxl-bold":Yr("header-xxl-bold"),"header-xl-light":Yr("header-xl-light"),"header-xl-regular":Yr("header-xl-regular"),"header-xl-semibold":Yr("header-xl-semibold"),"header-xl-bold":Yr("header-xl-bold"),"header-lg-light":Yr("header-lg-light"),"header-lg-regular":Yr("header-lg-regular"),"header-lg-semibold":Yr("header-lg-semibold"),"header-lg-bold":Yr("header-lg-bold"),"header-md-light":Yr("header-md-light"),"header-md-regular":Yr("header-md-regular"),"header-md-semibold":Yr("header-md-semibold"),"header-md-bold":Yr("header-md-bold"),"header-sm-light":Yr("header-sm-light"),"header-sm-regular":Yr("header-sm-regular"),"header-sm-semibold":Yr("header-sm-semibold"),"header-sm-bold":Yr("header-sm-bold"),"header-xs-light":Yr("header-xs-light"),"header-xs-regular":Yr("header-xs-regular"),"header-xs-semibold":Yr("header-xs-semibold"),"header-xs-bold":Yr("header-xs-bold"),"body-baseline-light":Yr("body-baseline-light"),"body-baseline-regular":Yr("body-baseline-regular"),"body-baseline-semibold":Yr("body-baseline-semibold"),"body-baseline-bold":Yr("body-baseline-bold"),"body-md-light":Yr("body-md-light"),"body-md-regular":Yr("body-md-regular"),"body-md-semibold":Yr("body-md-semibold"),"body-md-bold":Yr("body-md-bold"),"body-sm-light":Yr("body-sm-light"),"body-sm-regular":Yr("body-sm-regular"),"body-sm-semibold":Yr("body-sm-semibold"),"body-sm-bold":Yr("body-sm-bold"),"body-xs-light":Yr("body-xs-light"),"body-xs-regular":Yr("body-xs-regular"),"body-xs-semibold":Yr("body-xs-semibold"),"body-xs-bold":Yr("body-xs-bold"),"formlabel-baseline-semibold":Yr("formlabel-baseline-semibold"),"formlabel-lg-semibold":Yr("formlabel-lg-semibold")},Gr=Object.assign(Object.assign({},Br),{Primitive:Cr}),Xr=Object.assign(Object.assign({},Pr),{Spec:Wr}),Ir=Hr,Rr=kr,Jr=zr,Zr=(e,r,s=!1)=>{const t=`${e}-${r.toLowerCase()}`;return n`
        ${Xr[t]}
        ${s?"margin-bottom: 1.05em;":"margin-bottom: 0;"}
    `},qr=(e,r)=>n`
    ${Zr(e,r.weight||"regular",r.paragraph)}
    ${((e=!1,r=!1)=>r?n`
            display: block;
        `:e?n`
            display: inline;
        `:n`
            display: block;
        `)(r.inline,r.paragraph)}
    color: ${Gr.text};
`;var Qr;!function(s){const a=(e,r,s)=>{const n=t(e).attrs((({inline:e})=>({as:e?"span":void 0})))`
            ${e=>qr(r,e)}
        `;return n.displayName=`Typography.${s}`,n};s.HeaderXXL=a("h1","header-xxl","HeaderXXL"),s.HeaderXL=a("h2","header-xl","HeaderXL"),s.HeaderLG=a("h3","header-lg","HeaderLG"),s.HeaderMD=a("h4","header-md","HeaderMD"),s.HeaderSM=a("h5","header-sm","HeaderSM"),s.HeaderXS=a("h6","header-xs","HeaderXS");const i=(e,r)=>{const s=t.p.attrs((({inline:e})=>({as:e?"span":void 0})))`
            ${r=>qr(e,r)}
        `;return s.displayName=`Typography.${r}`,s};s.BodyBL=i("body-baseline","BodyBL"),s.BodyMD=i("body-md","BodyMD"),s.BodySM=i("body-sm","BodySM"),s.BodyXS=i("body-xs","BodyXS");const o=(s,a)=>{const i=t.a`
            ${e=>n`
                ${Zr(s,e.weight||"regular")}
                color: ${Gr.hyperlink};
                text-decoration: none;

                :hover,
                :active,
                :focus {
                    color: ${Gr["text-hover"]};
                }
            `}
        `,o=s=>{var{external:t=!1,children:n}=s,a=l(s,["external","children"]);return e(i,Object.assign({},a,{children:[n,t&&r(Kr,{})]}))};return o.displayName=`Typography.${a}`,o};s.LinkBL=o("body-baseline","LinkBL"),s.LinkMD=o("body-md","LinkMD"),s.LinkSM=o("body-sm","LinkSM"),s.LinkXS=o("body-xs","LinkXS")}(Qr||(Qr={}));const Kr=t(i)`
    height: 1lh;
    width: 1em;
    margin-left: 0.4em;
    vertical-align: middle;
`,es=t.div`
    display: flex;
    align-items: flex-start;
    flex-direction: column;

    ${Jr.MaxWidth.lg} {
        justify-content: flex-start;
        padding: 0;
    }
`,rs=t(Qr.BodyMD)`
    margin-bottom: ${Ir["spacing-16"]};
`,ss=t.div`
    display: flex;
    align-items: flex-start;
`,ts=t.a`
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
`,ns=()=>e(es,Object.assign({"data-testid":"download-app-section"},{children:[r(rs,Object.assign({weight:"semibold"},{children:"Download the app"})),e(ss,{children:[r(ts,Object.assign({href:"https://apps.apple.com/sg/app/moments-of-life/id1383218758",target:"_blank",rel:"noopener noreferrer",id:"footer-download-app-apple"},{children:r("img",{src:"https://assets.life.gov.sg/react-design-system/img/download/apple-app-store.png",alt:"apple-app-store"})})),r(ts,Object.assign({href:"https://play.google.com/store/apps/details?id=sg.gov.app.mol&hl=en_SG",target:"_blank",rel:"noopener noreferrer",id:"footer-download-app-android"},{children:r("img",{src:"https://assets.life.gov.sg/react-design-system/img/download/google-play-store.png",alt:"google-play-store"})}))]})]}));var as={exports:{}},is=c(as.exports=function(){var e=1e3,r=6e4,s=36e5,t="millisecond",n="second",a="minute",i="hour",o="day",l="week",d="month",c="quarter",g="year",u="date",m="Invalid Date",h=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,b=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,y={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(e){var r=["th","st","nd","rd"],s=e%100;return"["+e+(r[(s-20)%10]||r[s]||r[0])+"]"}},p=function(e,r,s){var t=String(e);return!t||t.length>=r?e:""+Array(r+1-t.length).join(s)+e},x={s:p,z:function(e){var r=-e.utcOffset(),s=Math.abs(r),t=Math.floor(s/60),n=s%60;return(r<=0?"+":"-")+p(t,2,"0")+":"+p(n,2,"0")},m:function e(r,s){if(r.date()<s.date())return-e(s,r);var t=12*(s.year()-r.year())+(s.month()-r.month()),n=r.clone().add(t,d),a=s-n<0,i=r.clone().add(t+(a?-1:1),d);return+(-(t+(s-n)/(a?n-i:i-n))||0)},a:function(e){return e<0?Math.ceil(e)||0:Math.floor(e)},p:function(e){return{M:d,y:g,w:l,d:o,D:u,h:i,m:a,s:n,ms:t,Q:c}[e]||String(e||"").toLowerCase().replace(/s$/,"")},u:function(e){return void 0===e}},f="en",v={};v[f]=y;var F="$isDayjsObject",$=function(e){return e instanceof D||!(!e||!e[F])},C=function e(r,s,t){var n;if(!r)return f;if("string"==typeof r){var a=r.toLowerCase();v[a]&&(n=a),s&&(v[a]=s,n=a);var i=r.split("-");if(!n&&i.length>1)return e(i[0])}else{var o=r.name;v[o]=r,n=o}return!t&&n&&(f=n),n||!t&&f},w=function(e,r){if($(e))return e.clone();var s="object"==typeof r?r:{};return s.date=e,s.args=arguments,new D(s)},E=x;E.l=C,E.i=$,E.w=function(e,r){return w(e,{locale:r.$L,utc:r.$u,x:r.$x,$offset:r.$offset})};var D=function(){function y(e){this.$L=C(e.locale,null,!0),this.parse(e),this.$x=this.$x||e.x||{},this[F]=!0}var p=y.prototype;return p.parse=function(e){this.$d=function(e){var r=e.date,s=e.utc;if(null===r)return new Date(NaN);if(E.u(r))return new Date;if(r instanceof Date)return new Date(r);if("string"==typeof r&&!/Z$/i.test(r)){var t=r.match(h);if(t){var n=t[2]-1||0,a=(t[7]||"0").substring(0,3);return s?new Date(Date.UTC(t[1],n,t[3]||1,t[4]||0,t[5]||0,t[6]||0,a)):new Date(t[1],n,t[3]||1,t[4]||0,t[5]||0,t[6]||0,a)}}return new Date(r)}(e),this.init()},p.init=function(){var e=this.$d;this.$y=e.getFullYear(),this.$M=e.getMonth(),this.$D=e.getDate(),this.$W=e.getDay(),this.$H=e.getHours(),this.$m=e.getMinutes(),this.$s=e.getSeconds(),this.$ms=e.getMilliseconds()},p.$utils=function(){return E},p.isValid=function(){return!(this.$d.toString()===m)},p.isSame=function(e,r){var s=w(e);return this.startOf(r)<=s&&s<=this.endOf(r)},p.isAfter=function(e,r){return w(e)<this.startOf(r)},p.isBefore=function(e,r){return this.endOf(r)<w(e)},p.$g=function(e,r,s){return E.u(e)?this[r]:this.set(s,e)},p.unix=function(){return Math.floor(this.valueOf()/1e3)},p.valueOf=function(){return this.$d.getTime()},p.startOf=function(e,r){var s=this,t=!!E.u(r)||r,c=E.p(e),m=function(e,r){var n=E.w(s.$u?Date.UTC(s.$y,r,e):new Date(s.$y,r,e),s);return t?n:n.endOf(o)},h=function(e,r){return E.w(s.toDate()[e].apply(s.toDate("s"),(t?[0,0,0,0]:[23,59,59,999]).slice(r)),s)},b=this.$W,y=this.$M,p=this.$D,x="set"+(this.$u?"UTC":"");switch(c){case g:return t?m(1,0):m(31,11);case d:return t?m(1,y):m(0,y+1);case l:var f=this.$locale().weekStart||0,v=(b<f?b+7:b)-f;return m(t?p-v:p+(6-v),y);case o:case u:return h(x+"Hours",0);case i:return h(x+"Minutes",1);case a:return h(x+"Seconds",2);case n:return h(x+"Milliseconds",3);default:return this.clone()}},p.endOf=function(e){return this.startOf(e,!1)},p.$set=function(e,r){var s,l=E.p(e),c="set"+(this.$u?"UTC":""),m=(s={},s[o]=c+"Date",s[u]=c+"Date",s[d]=c+"Month",s[g]=c+"FullYear",s[i]=c+"Hours",s[a]=c+"Minutes",s[n]=c+"Seconds",s[t]=c+"Milliseconds",s)[l],h=l===o?this.$D+(r-this.$W):r;if(l===d||l===g){var b=this.clone().set(u,1);b.$d[m](h),b.init(),this.$d=b.set(u,Math.min(this.$D,b.daysInMonth())).$d}else m&&this.$d[m](h);return this.init(),this},p.set=function(e,r){return this.clone().$set(e,r)},p.get=function(e){return this[E.p(e)]()},p.add=function(t,c){var u,m=this;t=Number(t);var h=E.p(c),b=function(e){var r=w(m);return E.w(r.date(r.date()+Math.round(e*t)),m)};if(h===d)return this.set(d,this.$M+t);if(h===g)return this.set(g,this.$y+t);if(h===o)return b(1);if(h===l)return b(7);var y=(u={},u[a]=r,u[i]=s,u[n]=e,u)[h]||1,p=this.$d.getTime()+t*y;return E.w(p,this)},p.subtract=function(e,r){return this.add(-1*e,r)},p.format=function(e){var r=this,s=this.$locale();if(!this.isValid())return s.invalidDate||m;var t=e||"YYYY-MM-DDTHH:mm:ssZ",n=E.z(this),a=this.$H,i=this.$m,o=this.$M,l=s.weekdays,d=s.months,c=s.meridiem,g=function(e,s,n,a){return e&&(e[s]||e(r,t))||n[s].slice(0,a)},u=function(e){return E.s(a%12||12,e,"0")},h=c||function(e,r,s){var t=e<12?"AM":"PM";return s?t.toLowerCase():t};return t.replace(b,(function(e,t){return t||function(e){switch(e){case"YY":return String(r.$y).slice(-2);case"YYYY":return E.s(r.$y,4,"0");case"M":return o+1;case"MM":return E.s(o+1,2,"0");case"MMM":return g(s.monthsShort,o,d,3);case"MMMM":return g(d,o);case"D":return r.$D;case"DD":return E.s(r.$D,2,"0");case"d":return String(r.$W);case"dd":return g(s.weekdaysMin,r.$W,l,2);case"ddd":return g(s.weekdaysShort,r.$W,l,3);case"dddd":return l[r.$W];case"H":return String(a);case"HH":return E.s(a,2,"0");case"h":return u(1);case"hh":return u(2);case"a":return h(a,i,!0);case"A":return h(a,i,!1);case"m":return String(i);case"mm":return E.s(i,2,"0");case"s":return String(r.$s);case"ss":return E.s(r.$s,2,"0");case"SSS":return E.s(r.$ms,3,"0");case"Z":return n}return null}(e)||n.replace(":","")}))},p.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},p.diff=function(t,u,m){var h,b=this,y=E.p(u),p=w(t),x=(p.utcOffset()-this.utcOffset())*r,f=this-p,v=function(){return E.m(b,p)};switch(y){case g:h=v()/12;break;case d:h=v();break;case c:h=v()/3;break;case l:h=(f-x)/6048e5;break;case o:h=(f-x)/864e5;break;case i:h=f/s;break;case a:h=f/r;break;case n:h=f/e;break;default:h=f}return m?h:E.a(h)},p.daysInMonth=function(){return this.endOf(d).$D},p.$locale=function(){return v[this.$L]},p.locale=function(e,r){if(!e)return this.$L;var s=this.clone(),t=C(e,r,!0);return t&&(s.$L=t),s},p.clone=function(){return E.w(this.$d,this)},p.toDate=function(){return new Date(this.valueOf())},p.toJSON=function(){return this.isValid()?this.toISOString():null},p.toISOString=function(){return this.$d.toISOString()},p.toString=function(){return this.$d.toUTCString()},y}(),B=D.prototype;return w.prototype=B,[["$ms",t],["$s",n],["$m",a],["$H",i],["$W",o],["$M",d],["$y",g],["$D",u]].forEach((function(e){B[e[1]]=function(r){return this.$g(r,e[0],e[1])}})),w.extend=function(e,r){return e.$i||(e(r,D,w),e.$i=!0),w},w.locale=C,w.isDayjs=$,w.unix=function(e){return w(1e3*e)},w.en=v[f],w.Ls=v,w.p={},w}());const os={privacy:{href:"https://www.life.gov.sg/privacy-statement",target:"_blank",rel:"noopener"},termsOfUse:{href:"https://www.life.gov.sg/terms-of-use",target:"_blank",rel:"noopener"},reportVulnerability:{href:"https://tech.gov.sg/report_vulnerability",target:"_blank",rel:"noopener",external:!0}},ls={privacy:{href:"https://assets.life.gov.sg/bookingsg/BSG_Privacy_Policy.pdf",target:"_blank",rel:"noopener"},termsOfUse:{href:"https://assets.life.gov.sg/bookingsg/BSG_Terms_of_Use.pdf",target:"_blank",rel:"noopener"},reportVulnerability:{href:"https://tech.gov.sg/report_vulnerability",target:"_blank",rel:"noopener",external:!0}},ds={privacy:{href:"https://mylegacy.life.gov.sg/privacy-statement",target:"_blank",rel:"noopener"},termsOfUse:{href:"https://mylegacy.life.gov.sg/terms-of-use",target:"_blank",rel:"noopener"},reportVulnerability:{href:"https://tech.gov.sg/report_vulnerability",target:"_blank",rel:"noopener",external:!0}};var cs;!function(e){e.getCopyrightInfo=(e=new Date,s)=>{const t=r(s);return`${`${(new Date).getFullYear()} ${t}`} Last Updated ${is(e).format("D MMMM YYYY")}`};const r=e=>{switch(e){case"bookingsg":return"BookingSG, Government of Singapore.";case"mylegacy":return"MyLegacy@LifeSG, Government of Singapore.";case"ccube":return"Citizen Collective Common, Government of Singapore.";default:return"LifeSG, Government of Singapore."}};e.getFooterLogo=e=>{switch(e){case"bookingsg":return"https://home.booking.gov.sg/images/bookingsg/footer.svg";case"mylegacy":return"https://mylegacy.life.gov.sg/images/site-logo.png";case"ccube":return"https://assets.life.gov.sg/ccube/logo-ccube.svg";default:return"https://assets.life.gov.sg/react-design-system/img/logo/lifesg-primary-logo.svg"}},e.getDisclaimerLinks=(e,r)=>{const s=(e=>{switch(e){case"bookingsg":return ls;case"mylegacy":return ds;default:return os}})(e);return{privacy:Object.assign(Object.assign(Object.assign({},s.privacy),r&&r.privacy?r.privacy:{}),{children:"Privacy Statement"}),termsOfUse:Object.assign(Object.assign(Object.assign({},s.termsOfUse),r&&r.termsOfUse?r.termsOfUse:{}),{children:"Terms of Use"}),reportVulnerability:Object.assign(Object.assign(Object.assign({},s.reportVulnerability),r&&r.reportVulnerability?r.reportVulnerability:{}),{children:"Report Vulnerability"})}}}(cs||(cs={}));const gs=t.div`
    position: relative;

    ${e=>{const{$xxlStart:r,$xxlSpan:s,$xlStart:t,$xlSpan:a,$lgStart:i,$lgSpan:o,$mdStart:l,$mdSpan:d,$smStart:c,$smSpan:g,$xsStart:u,$xsSpan:m,$xxsStart:h,$xxsSpan:b}=e;return n`
            grid-column: ${r||"auto"} / span ${s||1};

            ${zr.MaxWidth.xl} {
                grid-column: ${t||"auto"} / span ${a||1};
            }

            ${zr.MaxWidth.lg} {
                grid-column: ${i||"auto"} / span ${o||1};
            }

            ${zr.MaxWidth.md} {
                grid-column: ${l||"auto"} / span ${d||1};
            }

            ${zr.MaxWidth.sm} {
                grid-column: ${c||"auto"} / span ${g||1};
            }

            ${zr.MaxWidth.xs} {
                grid-column: ${u||"auto"} / span ${m||1};
            }

            ${zr.MaxWidth.xxs} {
                grid-column: ${h||"auto"} / span ${b||1};
            }
        `}}
`,us=o.forwardRef(((e,s)=>{const t=a(),{xxlCols:n,xlCols:i,lgCols:o,mdCols:d,smCols:c,xsCols:g,xxsCols:u}=e,m=l(e,["xxlCols","xlCols","lgCols","mdCols","smCols","xsCols","xxsCols"]),h=(e,r,s)=>{if(!e)return{start:void 0,span:void 0};if("development"===process.env.NODE_ENV&&("number"==typeof e&&e>r?console.warn(`Warning: ${s}Cols exceeds maximum (${r}): ${e}`):Array.isArray(e)&&(e[0]>r+1||e[1]>r+1)&&console.warn(`Warning: ${s}Cols array exceeds maximum (${r}): [${e[0]}, ${e[1]}]`)),Array.isArray(e)){const[s,t]=e;if(-1===t)return{start:s,span:r-s+1};return{start:s,span:Math.min(t-s,r)}}return{start:void 0,span:Math.min(e,r)}};return r(gs,Object.assign({ref:s},(()=>{const e=kr["xxl-column"]({theme:t}),r=kr["xl-column"]({theme:t}),s=kr["lg-column"]({theme:t}),a=kr["md-column"]({theme:t}),l=kr["sm-column"]({theme:t}),m=kr["xs-column"]({theme:t}),b=kr["xxs-column"]({theme:t}),y=h(n||i||o||d||c||g||u,e,"xxl"),p=h(i||o||d||c||g||u,r,"xl"),x=h(o||d||c||g||u,s,"lg"),f=h(d||c||g||u,a,"md"),v=h(c||g||u,l,"sm"),F=h(g||u,m,"xs"),$=h(u,b,"xxs");return{$xxlStart:y.start,$xxlSpan:y.span,$xlStart:p.start,$xlSpan:p.span,$lgStart:x.start,$lgSpan:x.span,$mdStart:f.start,$mdSpan:f.span,$smStart:v.start,$smSpan:v.span,$xsStart:F.start,$xsSpan:F.span,$xxsStart:$.start,$xxsSpan:$.span}})(),m))})),ms=t.div`
    flex-grow: 1;
    margin: 0 auto;
    position: relative;
    width: auto;
    height: auto;

    ${e=>e.$stretch?n`
                padding: 0 ${Rr["xxl-margin"]}px;
            `:n`
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

    ${e=>{switch(e.$type){case"grid":return n`
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
                `;case"flex-column":return n`
                    display: flex;
                    flex-direction: column;
                `;default:return n`
                    display: flex;
                `}}}
`,hs=o.forwardRef(((e,s)=>{const{children:t,"data-testid":n="container",type:a="flex",stretch:i=!1}=e,o=l(e,["children","data-testid","type","stretch"]);return r(ms,Object.assign({ref:s,"data-testid":n,$type:a,$stretch:i},o,{children:t}))})),bs=o.forwardRef(((e,s)=>{const{children:t,"data-testid":n="section",stretch:a=!1}=e,i=l(e,["children","data-testid","stretch"]);return r(ys,Object.assign({ref:s,"data-testid":n,$stretch:a},i,{children:t}))})),ys=t.section`
    display: block;
    position: relative;
`,ps=o.forwardRef(((e,s)=>{const{children:t,"data-testid":n="content",className:a,type:i="flex",stretch:o=!1}=e,d=l(e,["children","data-testid","className","type","stretch"]);return r(bs,Object.assign({ref:s,"data-testid":n,className:a,stretch:o},d,{children:r(hs,Object.assign({"data-testid":`${n}-container`,type:i,"data-id":"container",stretch:o},{children:t}))}))})),xs={Section:bs,Container:hs,Content:ps,ColDiv:us},fs={mobileS:320,mobileM:375,mobileL:480,tablet:1199,desktopM:1399,desktopL:1999,desktop4k:3840},vs=e=>Object.keys(fs).reduce(((r,s)=>{const t=fs[s];return r[s]=`@media screen and (${e}: ${t}px)`,r}),{}),Fs=vs("max-width"),$s=(vs("min-width"),t.div`
    position: relative;
    ${e=>{const{$desktopStart:r,$desktopSpan:s,$tabletStart:t,$tabletSpan:a,$mobileStart:i,$mobileSpan:o}=e;return n`
            grid-column: ${r||"auto"} / span ${s||1};

            ${Fs.tablet} {
                grid-column: ${t||"auto"} / span
                    ${a||1};
            }

            ${Fs.mobileL} {
                grid-column: ${i||"auto"} / span
                    ${o||1};
            }
        `}}
`),Cs=o.forwardRef(((e,s)=>{const{mobileCols:t,tabletCols:n,desktopCols:a}=e,i=l(e,["mobileCols","tabletCols","desktopCols"]);return r($s,Object.assign({ref:s},(()=>{const e=n||t,r=t,s=ws(a||n||t),i=ws(e),o=ws(r);return{$desktopSpan:s.span,$desktopStart:s.start,$mobileSpan:o.span,$mobileStart:o.start,$tabletSpan:i.span,$tabletStart:i.start}})(),i))})),ws=e=>{if(Array.isArray(e)&&e.length>1){const[r,s]=e,t=r<=s?r:s,n=r<=s?s:r;let a;return a=n===t?1:n-t,{start:t,span:a}}return"number"==typeof e?{start:void 0,span:e}:{start:void 0,span:void 0}},Es=()=>e=>{let r;r="function"==typeof e.$color?e.$color(e):e.$color||Gr.border(e);const s=encodeURIComponent(r),t=e.$thickness||1;return n`
        background-color: transparent;
        height: ${t}px;
        background-repeat: repeat-x;
        background-image: url('data:image/svg+xml,<svg width="8" height="${t}" viewBox="0 0 8 1" xmlns="http://www.w3.org/2000/svg"><line x1="2" y1="1" x2="6" y2="1" stroke="${s}" stroke-width="${t+1}" stroke-dasharray="4 4" /></svg>');
    `},Ds=t.hr`
    width: 100%;
    margin: 0;
    border: none;
    ${e=>{switch(e.$lineStyle){case"dashed":return n`
                    ${Es}
                `;case"solid":return n`
                    height: ${e.$thickness}px;
                    background-color: ${e.$color||Gr.border};
                `}}}
`,Bs=t.footer`
    background: ${Gr["bg-strong"]};
`,As=t(Qr.LinkSM)`
    color: ${Gr.text};
`,Ss=t((e=>{var{thickness:s=1,lineStyle:t="solid",layoutType:n="flex",color:a,className:i,xxsCols:o,xsCols:d,smCols:c,mdCols:g,lgCols:u,xlCols:m,xxlCols:h,mobileCols:b,tabletCols:y,desktopCols:p}=e,x=l(e,["thickness","lineStyle","layoutType","color","className","xxsCols","xsCols","smCols","mdCols","lgCols","xlCols","xxlCols","mobileCols","tabletCols","desktopCols"]);const f=void 0!==b||void 0!==y||void 0!==p;switch(n){case"flex":return r(Ds,Object.assign({className:i,$thickness:s,$lineStyle:t,$color:a},x));case"grid":return f?r(Cs,Object.assign({className:i,mobileCols:b,tabletCols:y,desktopCols:p},x,{children:r(Ds,{$thickness:s,$lineStyle:t,$color:a})})):r(us,Object.assign({className:i},(()=>{const e=o||[1,-1],r=d||e,s=c||r,t=g||s,n=u||t,a=m||n;return{xxlCols:h||a,xlCols:a,lgCols:n,mdCols:t,smCols:s,xsCols:r,xxsCols:e}})(),x,{children:r(Ds,{$thickness:s,$lineStyle:t,$color:a})}))}}))`
    width: 100%;
`,ks=t(xs.Content)`
    padding: ${Ir["spacing-64"]} 0;

    ${Jr.MaxWidth.lg} {
        padding: ${Ir["spacing-32"]} 0;
    }
`,_s=t.div`
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
`,zs=t.ul`
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
`,Ms=t.div`
    grid-column: 13 / span 6;

    ${Jr.MaxWidth.lg} {
        grid-column: 1 / span 12;
        margin-top: ${Ir["spacing-32"]};
    }

    ${Jr.MaxWidth.md} {
        grid-column: 1 / span 8;
    }
`,Os=t(xs.Content)`
    padding: ${Ir["spacing-20"]} 0;

    ${Jr.MaxWidth.lg} {
        border-top: none;
        flex-direction: column;
        padding: ${Ir["spacing-16"]} 0;
    }
`,js=t.div`
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
`,Ws=t(js)`
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
`,Ls=t(Qr.LinkXS)`
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
`,Ts=t=>{var{children:n,links:i,lastUpdated:o,disclaimerLinks:d,showDownloadAddon:c,logoSrc:g,copyrightInfo:u,onFooterLinkClick:m,layout:h="default"}=t,b=l(t,["children","links","lastUpdated","disclaimerLinks","showDownloadAddon","logoSrc","copyrightInfo","onFooterLinkClick","layout"]);const y="stretch"===h,p=a(),x=e=>e.map(((e,s)=>{const t=l(e,["data-options"]);return r("li",{children:r(As,Object.assign({},t,{onClick:r=>((e,r)=>{r.onClick?(e.preventDefault(),r.onClick(e)):m&&(e.preventDefault(),m(r))})(r,e)}))},s)}));return e(Bs,Object.assign({},b,{children:[(()=>{let t=null;return n||((i||c)&&(t=e(s,{children:[r(_s,Object.assign({"data-testid":"logo-section"},{children:r("img",{src:g||cs.getFooterLogo(null==p?void 0:p.resourceScheme),alt:"LifeSG","data-testid":"logo"})})),(null==i?void 0:i[0])&&r(zs,Object.assign({"data-testid":"link-col-1"},{children:x(i[0])}),"link-col-1"),(null==i?void 0:i[1])&&r(zs,Object.assign({"data-testid":"link-col-2"},{children:x(i[1])}),"link-col-2"),c&&r(Ms,{children:r(ns,{})})]})),t?e(s,{children:[r(ks,Object.assign({type:"grid",stretch:y},{children:t})),r(Ss,{})]}):null)})(),e(Os,Object.assign({type:"grid",stretch:y},{children:[r(js,{children:(()=>{const e=cs.getDisclaimerLinks(null==p?void 0:p.resourceScheme,d);return Object.keys(e).map((s=>r(Ls,Object.assign({},e[s]),s)))})()},"disclaimer"),r(Ws,{children:r(Qr.BodyXS,Object.assign({"data-testid":"copyright-text"},{children:u||e(s,{children:["©"," ",cs.getCopyrightInfo(o,null==p?void 0:p.resourceScheme)]})}))},"copyright")]}))]}))};export{Ts as Footer};
//# sourceMappingURL=index.js.map
